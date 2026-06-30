/**
 * Mostra um resumo rápido do que está no banco (questões por ano e por área,
 * e quantas já têm assunto classificado). Útil para acompanhar a importação.
 *
 *   npm run db:count
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  const total = await prisma.question.count();
  const comTopic = await prisma.question.count({ where: { NOT: { topicId: null } } });
  const byYear = await prisma.question.groupBy({ by: ["year"], _count: true });
  const byDisc = await prisma.question.groupBy({ by: ["discipline"], _count: true });

  console.log(`TOTAL de questões: ${total}  (classificadas: ${comTopic})\n`);

  console.log("Por ano:");
  for (const r of byYear.sort((a, b) => a.year - b.year)) {
    console.log(`  ${r.year}: ${r._count}`);
  }

  console.log("\nPor área:");
  for (const r of byDisc.sort((a, b) => b._count - a._count)) {
    console.log(`  ${String(r._count).padStart(4)}  ${r.discipline}`);
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
