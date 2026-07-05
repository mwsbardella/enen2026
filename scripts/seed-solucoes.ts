/**
 * Grava as resoluções didáticas (prisma/content/solucoes.ts) no campo
 * Question.comentario, casando por ano + número da questão. Idempotente.
 *
 *   npm run seed:solucoes
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";
import { solucoes } from "../prisma/content/solucoes";

async function main() {
  let ok = 0;
  const semQuestao: string[] = [];
  const gabaritoErrado: string[] = [];
  for (const s of solucoes) {
    // Casa por ano+número; a maioria das questões de matemática tem language null.
    const q = await prisma.question.findFirst({
      where: { year: s.year, index: s.index },
      select: { id: true, correta: true },
    });
    if (!q) {
      semQuestao.push(`${s.year}#${s.index}`);
      continue;
    }
    // TRAVA: só grava se a resposta declarada bate com o gabarito do banco.
    // Evita publicar resolução cuja conta levou à letra errada.
    if (q.correta !== s.resposta) {
      gabaritoErrado.push(`${s.year}#${s.index} (declarei ${s.resposta}, gabarito ${q.correta})`);
      continue;
    }
    await prisma.question.update({ where: { id: q.id }, data: { comentario: s.markdown } });
    ok++;
  }
  console.log(`✓ ${ok} resoluções gravadas (de ${solucoes.length}).`);
  if (semQuestao.length) console.log(`⚠ questões não encontradas: ${semQuestao.join(", ")}`);
  if (gabaritoErrado.length) {
    console.log(`✗ resposta NÃO bate com o gabarito (não gravadas):`);
    gabaritoErrado.forEach((x) => console.log(`   - ${x}`));
  }
}

main()
  .catch((e) => {
    console.error("Erro:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
