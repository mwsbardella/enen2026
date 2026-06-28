import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  tipo: z.string().min(1), // "weektask" | "book" | "topic" | ...
  refId: z.string().min(1),
  concluido: z.boolean(),
});

// POST /api/progress — marca/desmarca conclusão (toggle genérico).
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
  const { tipo, refId, concluido } = parsed.data;

  const progress = await prisma.progress.upsert({
    where: { tipo_refId: { tipo, refId } },
    update: { concluido, concluidoEm: concluido ? new Date() : null },
    create: { tipo, refId, concluido, concluidoEm: concluido ? new Date() : null },
  });

  return NextResponse.json({ ok: true, progress });
}
