import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { parseJson, type LinkItem } from "@/lib/json";
import { resumosCompletos } from "@/lib/resumos-completos";
import Markdown from "@/components/Markdown";
import BookTabs from "@/components/BookTabs";
import ProgressToggle from "@/components/ProgressToggle";
import { ExternalLinks, Pill } from "@/components/ui";

export const dynamic = "force-dynamic";

export default async function LivroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = await prisma.book.findUnique({ where: { slug } });
  if (!book) notFound();

  const links = parseJson<LinkItem[]>(book.links, []);
  const temas = parseJson<string[]>(book.temasRedacao, []);
  const progress = await prisma.progress.findUnique({
    where: { tipo_refId: { tipo: "book", refId: book.id } },
  });

  return (
    <article className="space-y-4">
      <Link href="/literatura" className="text-sm text-primary">
        ← Literatura
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold md:text-2xl">{book.titulo}</h1>
          <p className="text-muted">
            {book.autor}
            {book.escola ? ` · ${book.escola}` : ""}
          </p>
          <div className="mt-1">
            <Pill tone={book.prioridade === "ALTA" ? "danger" : "default"}>
              Prioridade {book.prioridade}
            </Pill>
          </div>
        </div>
        <ProgressToggle
          tipo="book"
          refId={book.id}
          initialDone={progress?.concluido ?? false}
          doneLabel="Lido"
          todoLabel="Marcar lido"
        />
      </div>

      {book.textoCompleto && (
        <Link
          href={`/literatura/${book.slug}/livro`}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-surface-2"
        >
          📖 Ler a obra completa
          <span className="text-xs font-normal text-muted">
            (texto integral · domínio público)
          </span>
        </Link>
      )}

      {temas.length > 0 && (
        <div>
          <h3 className="mb-1 text-sm font-semibold text-muted">
            Temas de redação que destrava
          </h3>
          <div className="flex flex-wrap gap-1">
            {temas.map((t) => (
              <span
                key={t}
                className="rounded-full bg-surface-2 px-2 py-1 text-xs text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {resumosCompletos[book.slug] ? (
        <BookTabs
          visaoGeral={
            <>
              <Markdown>{book.resumoMarkdown}</Markdown>
              <ExternalLinks links={links} />
            </>
          }
          resumoCompleto={<Markdown>{resumosCompletos[book.slug]}</Markdown>}
        />
      ) : (
        <div className="rounded-2xl border border-border bg-surface p-4 md:p-6">
          <Markdown>{book.resumoMarkdown}</Markdown>
          <ExternalLinks links={links} />
        </div>
      )}
    </article>
  );
}
