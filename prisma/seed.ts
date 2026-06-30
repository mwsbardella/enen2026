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
import { inicioCronograma } from "../lib/dates";
import { SUBJECTS, DISCIPLINE_TO_SUBJECT, nomeDaArea } from "../lib/subjects";

import { redacaoTopics } from "./content/redacao";
import { books } from "./content/books";
import { repertorios } from "./content/repertorios";
import { weeks } from "./content/weeks";

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
        links: stringifyJson(t.material.links),
      },
    });
    materialByTopicSlug[t.slug] = material.id;
  }
  console.log(`✓ Topics + Materials (${allTopics.length})`);
  return materialByTopicSlug;
}

async function seedBooks(): Promise<Record<string, string>> {
  const bookBySlug: Record<string, string> = {};
  for (const b of books) {
    const book = await prisma.book.upsert({
      where: { slug: b.slug },
      update: {
        titulo: b.titulo,
        autor: b.autor,
        prioridade: b.prioridade,
        escola: b.escola,
        temasRedacao: stringifyJson(b.temasRedacao),
        resumoMarkdown: b.resumoMarkdown,
        links: stringifyJson(b.links),
        ordem: b.ordem,
      },
      create: {
        slug: b.slug,
        titulo: b.titulo,
        autor: b.autor,
        prioridade: b.prioridade,
        escola: b.escola,
        temasRedacao: stringifyJson(b.temasRedacao),
        resumoMarkdown: b.resumoMarkdown,
        links: stringifyJson(b.links),
        ordem: b.ordem,
      },
    });
    bookBySlug[b.slug] = book.id;
  }
  console.log(`✓ Books (${books.length})`);
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

async function seedWeeks(
  materialByTopicSlug: Record<string, string>,
  examBySlug: Record<string, string>,
  bookBySlug: Record<string, string>,
) {
  const subjects = await prisma.subject.findMany();
  const subjectIdBySlug = Object.fromEntries(subjects.map((s) => [s.slug, s.id]));
  const inicio = inicioCronograma();

  // Mapa slug-do-tópico -> id do StudyMaterial, montado do BANCO para cobrir tanto
  // os tópicos do seed antigo quanto os da taxonomia (criados por classify +
  // seed:materials). Tem precedência sobre o mapa em memória.
  const matMap: Record<string, string> = { ...materialByTopicSlug };
  const topicsComMaterial = await prisma.topic.findMany({
    include: { materials: { take: 1, select: { id: true } } },
  });
  for (const t of topicsComMaterial) {
    if (t.materials[0]) matMap[t.slug] = t.materials[0].id;
  }

  for (const w of weeks) {
    const dataInicio = new Date(inicio);
    dataInicio.setDate(dataInicio.getDate() + (w.numero - 1) * 7);
    const dataFim = new Date(dataInicio);
    dataFim.setDate(dataFim.getDate() + 6);

    const week = await prisma.week.upsert({
      where: { numero: w.numero },
      update: { foco: w.foco, dataInicio, dataFim },
      create: { numero: w.numero, foco: w.foco, dataInicio, dataFim },
    });

    // Recria tarefas (idempotente)
    await prisma.weekTask.deleteMany({ where: { weekId: week.id } });

    let ordem = 0;
    for (const task of w.tasks) {
      ordem++;
      let refType: string | null = null;
      let refId: string | null = null;

      switch (task.ref.kind) {
        case "material":
        case "revisar":
          if ("slug" in task.ref && task.ref.slug) {
            refType = "StudyMaterial";
            refId = matMap[task.ref.slug] ?? null;
          }
          break;
        case "exam":
          refType = "Exam";
          refId = examBySlug[task.ref.slug] ?? null;
          break;
        case "book":
          refType = "Book";
          refId = bookBySlug[task.ref.slug] ?? null;
          break;
        case "redacao":
          refType = "Redacao";
          refId = null;
          break;
      }

      await prisma.weekTask.create({
        data: {
          weekId: week.id,
          subjectId: task.subjectSlug ? subjectIdBySlug[task.subjectSlug] ?? null : null,
          titulo: task.titulo,
          ordem,
          tipo: task.tipo,
          refType,
          refId,
        },
      });
    }
  }
  console.log(`✓ Weeks + WeekTasks (${weeks.length} semanas)`);
}

async function main() {
  console.log("ENEM Study — seed iniciando...");
  await seedUser();
  await seedSubjects();
  const materialByTopicSlug = await seedTopicsAndMaterials();
  const bookBySlug = await seedBooks();
  await seedRepertorios();
  const examBySlug = await seedExams();
  await seedWeeks(materialByTopicSlug, examBySlug, bookBySlug);
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
