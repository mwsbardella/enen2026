/**
 * Seed do ENEM Study.
 *
 *   npm run db:seed
 *
 * Cria/atualiza (idempotente):
 *  - Usuário "Enrico"
 *  - Subjects (áreas) e Topics + StudyMaterials (resumos próprios)
 *  - Books (literatura) e Repertórios de redação
 *  - Exams montadas a partir das Questions já importadas (provas oficiais por
 *    ano/área + simulados temáticos por área)
 *  - 19 Weeks com WeekTasks executáveis ligadas a material/prova/livro/redação
 *
 * Rode `npm run import` antes para popular as Questions (provas reais). O seed
 * funciona mesmo sem questões — apenas não cria as Exams correspondentes.
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";
import { stringifyJson } from "../lib/json";
import { textoIntegralDe } from "../lib/texto-integral";
import { regenerarCronograma } from "../lib/cronograma-generator";
import { comVideos } from "../lib/links";
import { SUBJECTS, DISCIPLINE_TO_SUBJECT, nomeDaArea } from "../lib/subjects";

import { redacaoTopics } from "./content/redacao";
import { books } from "./content/books";
import { repertorios } from "./content/repertorios";

// Os assuntos das 4 áreas de questões (Linguagens, Humanas, Matemática, Natureza)
// vêm da TAXONOMIA por frequência (prisma/content/taxonomy.ts), criados pela
// classificação (npm run classify) e preenchidos por npm run seed:materials.
// Aqui o seed só cuida dos tópicos de REDAÇÃO (que não derivam de questões).
const allTopics = [...redacaoTopics];

async function seedUser() {
  const existing = await prisma.user.findFirst();
  if (!existing) {
    await prisma.user.create({ data: { nome: "Enrico" } });
  }
  console.log("✓ Usuário");
}

async function seedSubjects() {
  for (const s of SUBJECTS) {
    await prisma.subject.upsert({
      where: { slug: s.slug },
      update: { nome: s.nome, cor: s.cor, ordem: s.ordem },
      create: s,
    });
  }
  console.log(`✓ Subjects (${SUBJECTS.length})`);
}

/** Retorna mapa topicSlug -> studyMaterialId (1º material do tópico). */
async function seedTopicsAndMaterials(): Promise<Record<string, string>> {
  const subjects = await prisma.subject.findMany();
  const subjectIdBySlug = Object.fromEntries(subjects.map((s) => [s.slug, s.id]));
  const materialByTopicSlug: Record<string, string> = {};

  for (const t of allTopics) {
    const subjectId = subjectIdBySlug[t.subjectSlug];
    if (!subjectId) throw new Error(`Subject inexistente: ${t.subjectSlug}`);

    const topic = await prisma.topic.upsert({
      where: { slug: t.slug },
      update: { subjectId, titulo: t.titulo, descricao: t.descricao, ordem: t.ordem },
      create: {
        subjectId,
        slug: t.slug,
        titulo: t.titulo,
        descricao: t.descricao,
        ordem: t.ordem,
      },
    });

    // Recria o material do tópico (idempotente).
    await prisma.studyMaterial.deleteMany({ where: { topicId: topic.id } });
    const material = await prisma.studyMaterial.create({
      data: {
        topicId: topic.id,
        titulo: t.material.titulo,
        resumoMarkdown: t.material.resumoMarkdown,
        links: stringifyJson(comVideos(t.slug, t.material.links)),
      },
    });
    materialByTopicSlug[t.slug] = material.id;
  }
  console.log(`✓ Topics + Materials (${allTopics.length})`);
  return materialByTopicSlug;
}

async function seedBooks(): Promise<Record<string, string>> {
  const bookBySlug: Record<string, string> = {};
  let comTexto = 0;
  for (const b of books) {
    // Texto integral (domínio público) versionado em data/livros/<slug>.txt
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
    const book = await prisma.book.upsert({
      where: { slug: b.slug },
      update: data,
      create: { slug: b.slug, ...data },
    });
    bookBySlug[b.slug] = book.id;
  }
  console.log(`✓ Books (${books.length}, ${comTexto} com texto integral)`);
  return bookBySlug;
}

async function seedRepertorios() {
  await prisma.repertorio.deleteMany({});
  for (const r of repertorios) {
    await prisma.repertorio.create({
      data: {
        categoria: r.categoria,
        titulo: r.titulo,
        conteudo: r.conteudo,
        temas: stringifyJson(r.temas),
        fonte: r.fonte ?? null,
      },
    });
  }
  console.log(`✓ Repertórios (${repertorios.length})`);
}

/** Monta Exams a partir das Questions importadas. Retorna mapa examSlug -> id. */
async function seedExams(): Promise<Record<string, string>> {
  const examBySlug: Record<string, string> = {};
  const questions = await prisma.question.findMany({
    orderBy: [{ year: "asc" }, { index: "asc" }],
    select: { id: true, year: true, discipline: true },
  });

  if (questions.length === 0) {
    console.log("• Sem questões importadas — pulando Exams (rode `npm run import`).");
    return examBySlug;
  }

  const byYearArea = new Map<string, string[]>(); // `${year}|${area}` -> ids
  const byArea = new Map<string, string[]>(); // area -> ids

  for (const q of questions) {
    const area = DISCIPLINE_TO_SUBJECT[q.discipline];
    if (!area) continue;
    const yk = `${q.year}|${area}`;
    (byYearArea.get(yk) ?? byYearArea.set(yk, []).get(yk)!).push(q.id);
    (byArea.get(area) ?? byArea.set(area, []).get(area)!).push(q.id);
  }

  async function upsertExam(
    slug: string,
    titulo: string,
    descricao: string,
    tipo: "PROVA_OFICIAL" | "SIMULADO_TEMATICO",
    year: number | null,
    ids: string[],
  ) {
    const exam = await prisma.exam.upsert({
      where: { slug },
      update: { titulo, descricao, tipo, year, questionIds: stringifyJson(ids) },
      create: { slug, titulo, descricao, tipo, year, questionIds: stringifyJson(ids) },
    });
    examBySlug[slug] = exam.id;
  }

  // Provas oficiais por (ano, área)
  for (const [yk, ids] of byYearArea) {
    const [yearStr, area] = yk.split("|");
    const year = Number(yearStr);
    await upsertExam(
      `prova-${year}-${area}`,
      `ENEM ${year} — ${nomeDaArea(area)}`,
      `Questões reais de ${nomeDaArea(area)} da prova de ${year}.`,
      "PROVA_OFICIAL",
      year,
      ids,
    );
  }

  // Simulados temáticos por área (até 20 questões agregadas)
  for (const [area, ids] of byArea) {
    await upsertExam(
      `simulado-${area}`,
      `Simulado temático — ${nomeDaArea(area)}`,
      `Simulado com questões reais de ${nomeDaArea(area)} de vários anos.`,
      "SIMULADO_TEMATICO",
      null,
      ids.slice(0, 20),
    );
  }

  console.log(`✓ Exams (${Object.keys(examBySlug).length})`);
  return examBySlug;
}

// As semanas sugeridas são geradas pelo mesmo gerador usado em runtime
// (lib/cronograma-generator.ts): datadas a partir do tempo que falta para o
// ENEM e cobrindo todos os blocos canônicos de prisma/content/weeks.ts.
async function seedWeeks() {
  const total = await regenerarCronograma();
  console.log(`✓ Weeks + WeekTasks (${total} semanas sugeridas)`);
}

async function main() {
  console.log("ENEM Study — seed iniciando...");
  await seedUser();
  await seedSubjects();
  await seedTopicsAndMaterials();
  await seedBooks();
  await seedRepertorios();
  await seedExams();
  await seedWeeks();
  console.log("✓ Seed concluído.");
}

main()
  .catch((e) => {
    console.error("Erro no seed:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
