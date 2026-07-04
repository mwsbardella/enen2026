import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  bookId: z.string().min(1),
  // índice do parágrafo onde o leitor parou; null remove o marcador
  paragrafo: z.number().int().min(0).nullable(),
});

// POST /api/marcador — define/remove o marcador de leitura do livro
// (exatamente um ponto por livro: a chave é o bookId).
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
  const { bookId, paragrafo } = parsed.data;

  if (paragrafo === null) {
    await prisma.readingMark.deleteMany({ where: { bookId } });
    return NextResponse.json({ ok: true, mark: null });
  }

  const mark = await prisma.readingMark.upsert({
    where: { bookId },
    update: { paragrafo },
    create: { bookId, paragrafo },
  });
  return NextResponse.json({ ok: true, mark });
}
