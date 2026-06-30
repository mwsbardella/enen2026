/**
 * Classifica as Questions já importadas em assuntos (taxonomia de granularidade
 * média) e preenche Question.topicId. No fim, imprime a FREQUÊNCIA por assunto —
 * a base para montar o conteúdo de estudo pelo que mais cai.
 *
 *   npm run classify            # classifica e grava topicId
 *   npm run classify -- --dry   # só relatório, não grava
 *
 * Método: casa palavras-chave (taxonomy.ts) contra o texto normalizado de cada
 * questão (contexto + comando + alternativas), dentro da área da questão. É uma
 * 1ª passada heurística e transparente; questões sem match suficiente ficam
 * `topicId = null` (reportadas como "não classificadas") para refino posterior.
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";
import { parseJson, type Alternativa } from "../lib/json";
import { SUBJECTS, DISCIPLINE_TO_SUBJECT } from "../lib/subjects";
import { taxonomy, type TaxonomyTopic } from "../prisma/content/taxonomy";

const DRY = process.argv.includes("--dry");

function normalize(s: string): string {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // remove acentos
    .replace(/\s+/g, " ");
}

/**
 * Matcher por PALAVRA INTEIRA (fronteira não-alfanumérica) para evitar
 * over-match de keywords curtas (ex.: "pa" casando em "para"). Pré-compilado.
 */
function makeMatcher(kw: string): { re: RegExp; weight: number } | null {
  const k = normalize(kw);
  if (!k) return null;
  const esc = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return { re: new RegExp(`(?<![a-z0-9])${esc}(?![a-z0-9])`), weight: Math.max(1, Math.ceil(k.length / 6)) };
}

const MATCHERS = new Map<string, { re: RegExp; weight: number }[]>(
  taxonomy.map((t) => [t.slug, t.keywords.map(makeMatcher).filter(Boolean) as { re: RegExp; weight: number }[]]),
);

/** Pontua a questão contra um tópico: soma dos pesos das keywords encontradas. */
function score(haystack: string, topic: TaxonomyTopic): number {
  let s = 0;
  for (const m of MATCHERS.get(topic.slug) ?? []) {
    if (m.re.test(haystack)) s += m.weight;
  }
  return s;
}

async function ensureSubjectsAndTopics(): Promise<Record<string, string>> {
  for (const sub of SUBJECTS) {
    await prisma.subject.upsert({
      where: { slug: sub.slug },
      update: { nome: sub.nome, cor: sub.cor, ordem: sub.ordem },
      create: sub,
    });
  }
  const subjects = await prisma.subject.findMany();
  const subjectIdBySlug = Object.fromEntries(subjects.map((s) => [s.slug, s.id]));

  const topicIdBySlug: Record<string, string> = {};
  for (const t of taxonomy) {
    const subjectId = subjectIdBySlug[t.area];
    if (!subjectId) throw new Error(`Subject inexistente p/ área ${t.area}`);
    const topic = await prisma.topic.upsert({
      where: { slug: t.slug },
      update: { subjectId, titulo: t.titulo, descricao: t.descricao, ordem: t.ordem },
      create: { subjectId, slug: t.slug, titulo: t.titulo, descricao: t.descricao, ordem: t.ordem },
    });
    topicIdBySlug[t.slug] = topic.id;
  }
  return topicIdBySlug;
}

async function main() {
  console.log(`Classificação de questões${DRY ? " (DRY-RUN)" : ""}...\n`);
  const topicIdBySlug = DRY ? {} : await ensureSubjectsAndTopics();

  const byAreaTopics = new Map<string, TaxonomyTopic[]>();
  for (const t of taxonomy) {
    (byAreaTopics.get(t.area) ?? byAreaTopics.set(t.area, []).get(t.area)!).push(t);
  }

  const questions = await prisma.question.findMany();
  // Frequência: area -> topicSlug -> count
  const freq = new Map<string, Map<string, number>>();
  const unclassified: Record<string, number> = {};
  let assigned = 0;

  for (const q of questions) {
    const area = DISCIPLINE_TO_SUBJECT[q.discipline];
    if (!area) continue;
    const candidates = byAreaTopics.get(area) ?? [];

    const alts = parseJson<Alternativa[]>(q.alternativas, []);
    const haystack = normalize(
      [q.contextMarkdown, q.comando, ...alts.map((a) => a.text)].filter(Boolean).join(" "),
    );

    let chosen: TaxonomyTopic | null = null;

    // Língua estrangeira: atribuição direta pelo campo language.
    if (q.language === "ingles") chosen = candidates.find((t) => t.slug === "lng-ingles") ?? null;
    else if (q.language === "espanhol") chosen = candidates.find((t) => t.slug === "lng-espanhol") ?? null;

    if (!chosen) {
      let best = 0;
      for (const t of candidates) {
        const sc = score(haystack, t);
        if (sc > best) {
          best = sc;
          chosen = t;
        }
      }
      if (best === 0) chosen = null;
    }

    if (chosen) {
      const m = freq.get(area) ?? freq.set(area, new Map()).get(area)!;
      m.set(chosen.slug, (m.get(chosen.slug) ?? 0) + 1);
      assigned++;
      if (!DRY) {
        await prisma.question.update({
          where: { id: q.id },
          data: { topicId: topicIdBySlug[chosen.slug] },
        });
      }
    } else {
      unclassified[area] = (unclassified[area] ?? 0) + 1;
    }
  }

  // ---- Relatório de frequência ----
  console.log(`Total de questões: ${questions.length} | classificadas: ${assigned}\n`);
  const tituloBySlug = Object.fromEntries(taxonomy.map((t) => [t.slug, t.titulo]));
  for (const area of ["linguagens", "humanas", "matematica", "natureza"]) {
    const m = freq.get(area);
    if (!m) continue;
    console.log(`\n### ${area.toUpperCase()} (não classificadas: ${unclassified[area] ?? 0})`);
    const sorted = [...m.entries()].sort((a, b) => b[1] - a[1]);
    for (const [slug, count] of sorted) {
      const bar = "█".repeat(count);
      console.log(`  ${String(count).padStart(3)} ${bar} ${tituloBySlug[slug] ?? slug}`);
    }
  }
}

main()
  .catch((e) => {
    console.error("Erro na classificação:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
