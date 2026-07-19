/**
 * Instala o banco PRONTO (prisma/seed.db) como banco de trabalho (prisma/dev.db).
 *
 *   npm run db:usar-pronto
 *
 * Serve para quem acabou de clonar o repositório: o banco versionado já vem com
 * as 1.125 questões reais classificadas, as provas montadas, os materiais de
 * estudo, as resoluções e os textos integrais — ou seja, dá para rodar o app na
 * hora, sem executar importação nem classificação (que dependem de rede e
 * levam vários minutos).
 *
 * O seed.db NÃO contém dados de estudante: sem progresso, sem redações e sem
 * simulados feitos (é gerado por scripts/prepare-clean-db.ts).
 *
 * Se já existir um dev.db, ele é preservado com sufixo .backup — ninguém perde
 * progresso por rodar isto sem querer.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const pronto = path.join(ROOT, "prisma", "seed.db");
const destino = path.join(ROOT, "prisma", "dev.db");

if (!fs.existsSync(pronto)) {
  console.error(`✗ Banco pronto não encontrado em ${pronto}`);
  process.exit(1);
}

if (fs.existsSync(destino)) {
  const backup = `${destino}.backup-${new Date().toISOString().slice(0, 10)}`;
  fs.copyFileSync(destino, backup);
  console.log(`• dev.db já existia — cópia guardada em ${path.basename(backup)}`);
}

fs.copyFileSync(pronto, destino);
const mb = (fs.statSync(destino).size / 1024 / 1024).toFixed(1);
console.log(`✓ Banco pronto instalado em prisma/dev.db (${mb} MB).`);
console.log("  Rode 'npm run dev' e abra http://localhost:3000");
