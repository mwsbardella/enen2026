import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// Datas opcionais no formato "YYYY-MM-DD" (ou nulas p/ limpar).
const dateStr = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "data inválida")
  .nullable()
  .optional();

const schema = z.object({
  id: z.string().optional(), // ausente = criar
  titulo: z.string().min(1).max(120).optional(),
  foco: z.string().max(200).optional(),
  ordem: z.number().int().optional(),
  dataInicio: dateStr,
  dataFim: dateStr,
  delete: z.boolean().optional(),
});

function toDate(v: string | null | undefined): Date | null | undefined {
  if (v === undefined) return undefined; // não mexe
  return v === null ? null : new Date(v);
}

// POST /api/weeks — cria (sem id), edita (com id) ou exclui (delete:true) uma
// semana do cronograma. Semanas criadas aqui têm origem "usuario".
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
  const d = parsed.data;

  // Exclusão (cascade remove as tarefas).
  if (d.delete) {
    if (!d.id) {
      return NextResponse.json({ error: "id obrigatório para excluir" }, { status: 400 });
    }
    await prisma.week.delete({ where: { id: d.id } });
    return NextResponse.json({ ok: true, deleted: d.id });
  }

  // Edição.
  if (d.id) {
    const week = await prisma.week.update({
      where: { id: d.id },
      data: {
        titulo: d.titulo,
        foco: d.foco,
        ordem: d.ordem,
        dataInicio: toDate(d.dataInicio),
        dataFim: toDate(d.dataFim),
      },
    });
    return NextResponse.json({ ok: true, week });
  }

  // Criação — nova semana do usuário, ao fim da lista.
  const ultima = await prisma.week.findFirst({ orderBy: { ordem: "desc" }, select: { ordem: true } });
  const week = await prisma.week.create({
    data: {
      titulo: d.titulo?.trim() || "Nova semana",
      foco: d.foco ?? "",
      ordem: d.ordem ?? (ultima ? ultima.ordem + 1 : 1),
      origem: "usuario",
      dataInicio: d.dataInicio ? new Date(d.dataInicio) : null,
      dataFim: d.dataFim ? new Date(d.dataFim) : null,
    },
  });
  return NextResponse.json({ ok: true, week }, { status: 201 });
}
