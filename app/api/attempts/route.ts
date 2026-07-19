import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { parseJson, stringifyJson } from "@/lib/json";
import { gradeAttempt } from "@/lib/grade";
import { ehDoIdioma, getIdiomaAluno } from "@/lib/idioma";

const schema = z.object({
  examId: z.string().min(1),
  respostas: z.record(z.string(), z.string()),
  iniciadoEm: z.string().datetime().optional(),
});

// POST /api/attempts — corrige uma tentativa, salva e devolve o resultado.
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", detalhes: parsed.error.flatten() },
      { status: 400 },
    );
  }
  const { examId, respostas, iniciadoEm } = parsed.data;

  const exam = await prisma.exam.findUnique({ where: { id: examId } });
  if (!exam) {
    return NextResponse.json({ error: "Prova não encontrada" }, { status: 404 });
  }

  const questionIds = parseJson<string[]>(exam.questionIds, []);
  const [questions, idioma] = await Promise.all([
    prisma.question.findMany({
      where: { id: { in: questionIds } },
      select: { id: true, discipline: true, correta: true, language: true },
    }),
    getIdiomaAluno(),
  ]);

  // Corrige só o que foi de fato apresentado ao aluno: a prova esconde a língua
  // estrangeira do outro idioma (app/provas/[id]/page.tsx). Sem este filtro,
  // essas questões entrariam no total como erro por falta de resposta.
  const result = gradeAttempt(
    questions.filter((q) => ehDoIdioma(q, idioma)),
    respostas,
  );

  const attempt = await prisma.attempt.create({
    data: {
      examId,
      iniciadoEm: iniciadoEm ? new Date(iniciadoEm) : new Date(),
      finalizadoEm: new Date(),
      respostas: stringifyJson(respostas),
      acertos: result.acertos,
      total: result.total,
      porArea: stringifyJson(result.porArea),
    },
  });

  return NextResponse.json({ attemptId: attempt.id, ...result }, { status: 201 });
}
