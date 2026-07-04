import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import LeitorLivro from "@/components/LeitorLivro";

export const dynamic = "force-dynamic";

/**
 * Leitura do texto integral da obra (apenas domínio público), servido do
 * banco (Book.textoCompleto) — funciona offline. O texto é dividido em
 * parágrafos clicáveis: o leitor marca onde parou (um ponto por livro,
 * ReadingMark) e a página sempre abre rolada até o marcador.
 */
export default async function LivroCompletoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = await prisma.book.findUnique({
    where: { slug },
    select: {
      id: true,
      titulo: true,
      autor: true,
      escola: true,
      textoCompleto: true,
      readingMark: { select: { paragrafo: true } },
    },
  });
  if (!book?.textoCompleto) notFound();

  // Divide em parágrafos (blocos separados por linha em branco). Os textos
  // são estáticos (data/livros/*.txt), então os índices são estáveis — o
  // marcador salvo continua apontando para o mesmo trecho.
  const paragrafos = book.textoCompleto
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const marcado = book.readingMark?.paragrafo ?? null;
  const initialParagrafo =
    marcado !== null && marcado < paragrafos.length ? marcado : null;

  return (
    <article className="space-y-4">
      <Link href={`/literatura/${slug}`} className="text-sm text-primary">
        ← {book.titulo}
      </Link>

      <header>
        <h1 className="text-xl font-bold md:text-2xl">{book.titulo}</h1>
        <p className="text-muted">
          {book.autor}
          {book.escola ? ` · ${book.escola}` : ""}
        </p>
        <p className="mt-1 text-xs text-muted">
          Texto integral em domínio público.
        </p>
      </header>

      <div className="rounded-2xl border border-border bg-surface p-4 md:p-8">
        <LeitorLivro
          bookId={book.id}
          paragrafos={paragrafos}
          initialParagrafo={initialParagrafo}
        />
      </div>

      <div className="pb-4 text-center">
        <Link href={`/literatura/${slug}`} className="text-sm text-primary">
          ← voltar para {book.titulo}
        </Link>
      </div>
    </article>
  );
}
