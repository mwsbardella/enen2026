/**
 * Verifica que o cronograma sugerido (prisma/content/weeks.ts) cobre TODOS os
 * assuntos (taxonomia + redação) e TODOS os livros. Estático — não usa o banco.
 *
 *   npm run check:cronograma
 *
 * Sai com código 1 se algum slug ficar de fora (lista os faltantes).
 */
import { taxonomy } from "../prisma/content/taxonomy";
import { redacaoTopics } from "../prisma/content/redacao";
import { books } from "../prisma/content/books";
import { weeks } from "../prisma/content/weeks";

const topicSlugs = new Set<string>();
const bookSlugs = new Set<string>();

for (const w of weeks) {
  for (const t of w.tasks) {
    const ref = t.ref;
    if (ref.kind === "material" || ref.kind === "revisar") {
      ref.slugs.forEach((s) => topicSlugs.add(s));
    } else if (ref.kind === "book") {
      ref.slugs.forEach((s) => bookSlugs.add(s));
    }
  }
}

const allTopics = [
  ...taxonomy.map((t) => t.slug),
  ...redacaoTopics.map((t) => t.slug),
];
const allBooks = books.map((b) => b.slug);

const topicsFaltando = allTopics.filter((s) => !topicSlugs.has(s));
const livrosFaltando = allBooks.filter((s) => !bookSlugs.has(s));

console.log(
  `Tópicos: ${allTopics.length} no conteúdo, ${topicSlugs.size} no cronograma`,
);
console.log(
  `Livros:  ${allBooks.length} no conteúdo, ${bookSlugs.size} no cronograma`,
);

if (topicsFaltando.length === 0 && livrosFaltando.length === 0) {
  console.log("✓ Cobertura total: nenhum assunto ou livro fora do cronograma.");
  process.exit(0);
}

if (topicsFaltando.length) {
  console.error(`\n✗ Tópicos FORA do cronograma (${topicsFaltando.length}):`);
  console.error("  " + topicsFaltando.join(", "));
}
if (livrosFaltando.length) {
  console.error(`\n✗ Livros FORA do cronograma (${livrosFaltando.length}):`);
  console.error("  " + livrosFaltando.join(", "));
}
process.exit(1);
