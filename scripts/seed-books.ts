/**
 * Seed APENAS dos livros de literatura (prisma/content/books.ts).
 *
 *   npm run seed:books
 *
 * Upsert por slug — atualiza/insere obras sem tocar em Weeks/WeekTasks
 * (o seed completo recria as tarefas com IDs novos, o que descarta o
 * progresso marcado nelas). Use este script ao adicionar/editar obras.
 *
 * Também importa o TEXTO INTEGRAL das obras em domínio público a partir
 * de data/livros/<slug>.txt (quando o arquivo existir) para o campo
 * Book.textoCompleto — assim o sistema funciona offline, sem internet.
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";
import { stringifyJson } from "../lib/json";
import { textoIntegralDe } from "../lib/texto-integral";
import { comVideos } from "../lib/links";
import { books } from "../prisma/content/books";

async function main() {
  let comTexto = 0;
  for (const b of books) {
    const textoCompleto = textoIntegralDe(b.slug);
    if (textoCompleto) comTexto++;

    const data = {
      titulo: b.titulo,
      autor: b.autor,
      prioridade: b.prioridade,
      escola: b.escola,
      temasRedacao: stringifyJson(b.temasRedacao),
      resumoMarkdown: b.resumoMarkdown,
      links: stringifyJson(comVideos(b.slug, b.links)),
      textoCompleto,
      ordem: b.ordem,
    };
    await prisma.book.upsert({
      where: { slug: b.slug },
      update: data,
      create: { slug: b.slug, ...data },
    });
  }
  console.log(`✓ Books (${books.length}, ${comTexto} com texto integral)`);
}

main()
  .catch((e) => {
    console.error("Erro no seed de livros:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
