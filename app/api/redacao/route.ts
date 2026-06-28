import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { stringifyJson } from "@/lib/json";

const comp = z.number().int().min(0).max(200);
const schema = z.object({
  tema: z.string().min(1),
  textoMarkdown: z.string().min(1),
  autoavaliacao: z
    .object({ c1: comp, c2: comp, c3: comp, c4: comp, c5: comp })
    .optional(),
});

// POST /api/redacao — salva uma redação com autoavaliação por competência.
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
  const { tema, textoMarkdown, autoavaliacao } = parsed.data;
  const notaTotal = autoavaliacao
    ? autoavaliacao.c1 + autoavaliacao.c2 + autoavaliacao.c3 + autoavaliacao.c4 + autoavaliacao.c5
    : 0;

  const entry = await prisma.redacaoEntry.create({
    data: {
      tema,
      textoMarkdown,
      autoavaliacao: stringifyJson(autoavaliacao ?? {}),
      notaTotal,
    },
  });

  return NextResponse.json({ ok: true, id: entry.id, notaTotal }, { status: 201 });
}
