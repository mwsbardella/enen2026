import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { stringifyJson } from "@/lib/json";
import { SUBJECTS, DISCIPLINE_TO_SUBJECT, nomeDaArea } from "@/lib/subjects";
import { getIdiomaAluno, whereIdioma } from "@/lib/idioma";

const areaSlugs = SUBJECTS.map((s) => s.slug) as [string, ...string[]];
const schema = z.object({
  area: z.enum(areaSlugs).optional(), // slug do Subject
  year: z.coerce.number().int().optional(),
  quantidade: z.coerce.number().int().min(1).max(90).default(20),
});

// Disciplines (enem.dev) que mapeiam para uma área interna.
function disciplinesForArea(area: string): string[] {
  return Object.entries(DISCIPLINE_TO_SUBJECT)
    .filter(([, slug]) => slug === area)
    .map(([disc]) => disc);
}

// Embaralha (Fisher–Yates).
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// POST /api/exams — monta um simulado temático sob demanda e devolve seu id.
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }
  const { area, year, quantidade } = parsed.data;

  const where: {
    discipline?: { in: string[] };
    year?: number;
    OR?: { language: string | null }[];
  } = {};
  if (area) where.discipline = { in: disciplinesForArea(area) };
  if (year) where.year = year;
  // Língua estrangeira: só o idioma do aluno (mais as questões comuns).
  Object.assign(where, whereIdioma(await getIdiomaAluno()));

  const candidatas = await prisma.question.findMany({
    where,
    select: { id: true },
  });

  if (candidatas.length === 0) {
    return NextResponse.json(
      { error: "Nenhuma questão encontrada para esses filtros." },
      { status: 404 },
    );
  }

  const ids = shuffle(candidatas.map((q) => q.id)).slice(0, quantidade);
  const titulo = `Simulado ${area ? nomeDaArea(area) : "geral"}${
    year ? ` · ${year}` : ""
  } (${ids.length} questões)`;

  const exam = await prisma.exam.create({
    data: {
      titulo,
      descricao: "Simulado montado sob demanda.",
      tipo: "SIMULADO_TEMATICO",
      year: year ?? null,
      questionIds: stringifyJson(ids),
    },
  });

  return NextResponse.json({ examId: exam.id, total: ids.length }, { status: 201 });
}
