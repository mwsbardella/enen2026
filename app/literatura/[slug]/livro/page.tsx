import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

/**
 * Leitura do texto integral da obra (apenas domínio público), servido do
 * banco (Book.textoCompleto) — funciona offline. Texto plano com parágrafos
 * preservados; tipografia serifada para leitura longa.
 */
export default async function LivroCompletoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = await prisma.book.findUnique({
    where: { slug },
    select: { titulo: true, autor: true, escola: true, textoCompleto: true },
  });
  if (!book?.textoCompleto) notFound();

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
        <div className="mx-auto max-w-2xl whitespace-pre-wrap font-serif text-[15px] leading-7">
          {book.textoCompleto}
        </div>
      </div>

      <div className="pb-4 text-center">
        <Link href={`/literatura/${slug}`} className="text-sm text-primary">
          ← voltar para {book.titulo}
        </Link>
      </div>
    </article>
  );
}
