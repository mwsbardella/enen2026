/**
 * Seed APENAS dos livros de literatura (prisma/content/books.ts).
 *
 *   npm run seed:books
 *
 * Upsert por slug — atualiza/insere obras sem tocar em Weeks/WeekTasks
 * (o seed completo recria as tarefas com IDs novos, o que descarta o
 * progresso marcado nelas). Use este script ao adicionar/editar obras.
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";
import { stringifyJson } from "../lib/json";
import { books } from "../prisma/content/books";

async function main() {
  for (const b of books) {
    const data = {
      titulo: b.titulo,
      autor: b.autor,
      prioridade: b.prioridade,
      escola: b.escola,
      temasRedacao: stringifyJson(b.temasRedacao),
      resumoMarkdown: b.resumoMarkdown,
      links: stringifyJson(b.links),
      ordem: b.ordem,
    };
    await prisma.book.upsert({
      where: { slug: b.slug },
      update: data,
      create: { slug: b.slug, ...data },
    });
  }
  console.log(`✓ Books (${books.length})`);
}

main()
  .catch((e) => {
    console.error("Erro no seed de livros:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
