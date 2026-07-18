import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { regenerarCronograma } from "@/lib/cronograma-generator";

const schema = z.object({
  // Nome opcional: se vier, atualiza o aluno. Vazio/ausente = só refaz o cronograma.
  nome: z.string().trim().min(1).max(80).optional(),
});

// POST /api/aluno — atualiza o nome do aluno (se informado) e refaz o cronograma
// sugerido com base no tempo que falta para o ENEM. Semanas criadas pelo usuário
// são preservadas.
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

  const { nome } = parsed.data;

  // Single-user: garante que exista um usuário e atualiza o nome, se informado.
  let user = await prisma.user.findFirst();
  if (!user) {
    user = await prisma.user.create({ data: { nome: nome ?? "estudante" } });
  } else if (nome) {
    user = await prisma.user.update({ where: { id: user.id }, data: { nome } });
  }

  const semanas = await regenerarCronograma();

  return NextResponse.json({ ok: true, nome: user.nome, semanas });
}
