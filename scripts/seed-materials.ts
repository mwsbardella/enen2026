/**
 * Grava os StudyMaterials gerados por engenharia reversa (conteúdo por assunto da
 * taxonomia) nos Topics já criados pela classificação. Idempotente.
 *
 *   npm run seed:materials
 *
 * À medida que cada área for escrita (prisma/content/materials/*.ts), basta
 * adicionar o import no array abaixo.
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";
import { stringifyJson } from "../lib/json";
import { comVideos } from "../lib/links";
import { humanasMateriais, type MaterialSeed } from "../prisma/content/materials/humanas";
import { matematicaMateriais } from "../prisma/content/materials/matematica";
import { linguagensMateriais } from "../prisma/content/materials/linguagens";
import { naturezaMateriais } from "../prisma/content/materials/natureza";

const todos: MaterialSeed[] = [
  ...humanasMateriais,
  ...matematicaMateriais,
  ...linguagensMateriais,
  ...naturezaMateriais,
];

async function main() {
  console.log(`Seed de materiais por assunto: ${todos.length} itens\n`);
  let ok = 0;
  const semTopic: string[] = [];

  for (const m of todos) {
    const topic = await prisma.topic.findUnique({ where: { slug: m.topicSlug } });
    if (!topic) {
      semTopic.push(m.topicSlug);
      continue;
    }
    // Idempotente: recria o material do tópico.
    await prisma.studyMaterial.deleteMany({ where: { topicId: topic.id } });
    await prisma.studyMaterial.create({
      data: {
        topicId: topic.id,
        titulo: m.titulo,
        resumoMarkdown: m.resumoMarkdown,
        links: stringifyJson(comVideos(m.topicSlug, m.links)),
      },
    });
    const qCount = await prisma.question.count({ where: { topicId: topic.id } });
    console.log(`  ✓ ${m.titulo}  (${qCount} questões reais ligadas)`);
    ok++;
  }

  console.log(`\n✓ ${ok} materiais gravados.`);
  if (semTopic.length) console.log(`⚠ topics não encontrados (rode npm run classify antes): ${semTopic.join(", ")}`);
}

main()
  .catch((e) => {
    console.error("Erro:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
