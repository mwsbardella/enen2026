import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { stringifyJson } from "@/lib/json";

const dateStr = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "data inválida")
  .nullable()
  .optional();

const TIPOS = [
  "LER_MATERIAL",
  "RESPONDER_EXAM",
  "ESCREVER_REDACAO",
  "LER_LIVRO",
  "REVISAR",
] as const;

const refSchema = z.object({
  kind: z.enum(["topic", "book", "exam"]),
  id: z.string().min(1),
});

const schema = z.object({
  id: z.string().optional(), // ausente = criar
  weekId: z.string().optional(), // obrigatório na criação
  titulo: z.string().min(1).max(160).optional(),
  tipo: z.enum(TIPOS).optional(),
  refs: z.array(refSchema).optional(),
  subjectId: z.string().nullable().optional(),
  ordem: z.number().int().optional(),
  dataInicio: dateStr,
  dataFim: dateStr,
  delete: z.boolean().optional(),
});

function toDate(v: string | null | undefined): Date | null | undefined {
  if (v === undefined) return undefined;
  return v === null ? null : new Date(v);
}

// POST /api/week-tasks — cria (sem id, precisa weekId), edita (com id) ou exclui
// (delete:true) um item de uma semana. LER_MATERIAL/LER_LIVRO podem ter vários refs.
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

  if (d.delete) {
    if (!d.id) {
      return NextResponse.json({ error: "id obrigatório para excluir" }, { status: 400 });
    }
    await prisma.weekTask.delete({ where: { id: d.id } });
    return NextResponse.json({ ok: true, deleted: d.id });
  }

  if (d.id) {
    const task = await prisma.weekTask.update({
      where: { id: d.id },
      data: {
        titulo: d.titulo,
        tipo: d.tipo,
        subjectId: d.subjectId,
        refs: d.refs ? stringifyJson(d.refs) : undefined,
        ordem: d.ordem,
        dataInicio: toDate(d.dataInicio),
        dataFim: toDate(d.dataFim),
      },
    });
    return NextResponse.json({ ok: true, task });
  }

  // Criação.
  if (!d.weekId || !d.titulo || !d.tipo) {
    return NextResponse.json(
      { error: "weekId, titulo e tipo são obrigatórios para criar" },
      { status: 400 },
    );
  }
  const ultima = await prisma.weekTask.findFirst({
    where: { weekId: d.weekId },
    orderBy: { ordem: "desc" },
    select: { ordem: true },
  });
  const task = await prisma.weekTask.create({
    data: {
      weekId: d.weekId,
      titulo: d.titulo.trim(),
      tipo: d.tipo,
      subjectId: d.subjectId ?? null,
      refs: stringifyJson(d.refs ?? []),
      ordem: d.ordem ?? (ultima ? ultima.ordem + 1 : 1),
      dataInicio: d.dataInicio ? new Date(d.dataInicio) : null,
      dataFim: d.dataFim ? new Date(d.dataFim) : null,
    },
  });
  return NextResponse.json({ ok: true, task }, { status: 201 });
}
