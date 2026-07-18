/**
 * Prepara um banco SQLite LIMPO para o pacote portátil offline.
 *
 *   tsx scripts/prepare-clean-db.ts <caminho-do-enem.db>
 *
 * Recebe o caminho de uma CÓPIA do dev.db (feita pelo build-portable) que já
 * contém todo o CONTEÚDO (questões, matérias, livros, exams, repertórios) e
 * apaga apenas o ESTADO PESSOAL do aluno, deixando o app pronto para começar do
 * zero: sem progresso, sem simulados feitos, sem redações, nome padrão e
 * cronograma sugerido recém-gerado.
 *
 * Não usa dotenv: o DATABASE_URL é definido aqui a partir do argumento, ANTES de
 * importar o Prisma, para operar exatamente no arquivo de saída. Por isso os
 * imports do Prisma são dinâmicos (dentro de main), depois de setar o env.
 */
export {}; // torna o arquivo um módulo

const dbPath = process.argv[2];
if (!dbPath) {
  console.error("Uso: tsx scripts/prepare-clean-db.ts <caminho-do-enem.db>");
  process.exit(1);
}

// Prisma exige barras normais no file: URL (inclusive no Windows).
process.env.DATABASE_URL = "file:" + dbPath.replace(/\\/g, "/");

async function main() {
  const { prisma } = await import("../lib/prisma");
  const { regenerarCronograma } = await import("../lib/cronograma-generator");

  try {
    console.log(`Limpando estado do aluno em: ${dbPath}`);

    // Estado pessoal — zerar por completo.
    await prisma.attempt.deleteMany({});
    await prisma.redacaoEntry.deleteMany({});
    await prisma.readingMark.deleteMany({});
    await prisma.progress.deleteMany({});
    // Simulados gerados sob demanda (Exam sem slug); os oficiais/temáticos têm slug.
    await prisma.exam.deleteMany({ where: { slug: null } });

    // Nome padrão (o aluno troca pelo próprio no dashboard).
    await prisma.user.updateMany({ data: { nome: "estudante" } });
    if ((await prisma.user.count()) === 0) {
      await prisma.user.create({ data: { nome: "estudante" } });
    }

    // Recria o cronograma sugerido a partir do tempo que falta para o ENEM.
    const semanas = await regenerarCronograma();

    console.log(`✓ Estado zerado. Cronograma sugerido com ${semanas} semanas.`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error("Erro ao preparar o banco limpo:", e);
  process.exitCode = 1;
});
