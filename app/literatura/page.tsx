import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { parseJson } from "@/lib/json";
import { PageTitle, Pill } from "@/components/ui";
import ProgressToggle from "@/components/ProgressToggle";

export const dynamic = "force-dynamic";

const PRIO_TONE: Record<string, "danger" | "default" | "muted"> = {
  ALTA: "danger",
  MEDIA: "default",
  BAIXA: "muted",
};

export default async function LiteraturaPage() {
  const [books, lidos] = await Promise.all([
    // select explícito: evita carregar textoCompleto (texto integral) na listagem
    prisma.book.findMany({
      orderBy: { ordem: "asc" },
      select: {
        id: true,
        slug: true,
        titulo: true,
        autor: true,
        prioridade: true,
        escola: true,
        temasRedacao: true,
      },
    }),
    prisma.progress.findMany({
      where: { tipo: "book", concluido: true },
      select: { refId: true },
    }),
  ]);
  const lidoSet = new Set(lidos.map((p) => p.refId));

  return (
    <div className="space-y-4">
      <PageTitle
        title="Literatura"
        subtitle="Obras prioritárias, escola literária e temas de redação que cada uma destrava."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {books.map((b) => {
          const temas = parseJson<string[]>(b.temasRedacao, []);
          const lido = lidoSet.has(b.id);
          return (
            <div
              key={b.id}
              className="flex flex-col rounded-xl border border-border bg-surface p-4"
            >
              <div className="mb-1 flex items-start justify-between gap-2">
                <Link href={`/literatura/${b.slug}`} className="min-w-0">
                  <h2 className="font-bold leading-tight hover:text-primary">
                    {b.titulo}
                  </h2>
                  <p className="text-sm text-muted">{b.autor}</p>
                </Link>
                <Pill tone={PRIO_TONE[b.prioridade] ?? "default"}>{b.prioridade}</Pill>
              </div>
              {b.escola && <p className="text-xs text-muted">{b.escola}</p>}
              {temas.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {temas.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-3 flex items-center justify-between">
                <Link href={`/literatura/${b.slug}`} className="text-sm text-primary">
                  abrir resumo →
                </Link>
                <ProgressToggle
                  tipo="book"
                  refId={b.id}
                  initialDone={lido}
                  doneLabel="Lido"
                  todoLabel="Marcar lido"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
