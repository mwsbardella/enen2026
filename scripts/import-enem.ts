/**
 * Importa questões reais do ENEM da API pública enem.dev para o banco local.
 *
 *   npm run import
 *
 * Comportamento:
 *  - Lê os anos de ENEM_YEARS (.env). Default: 2019..2023.
 *  - Respeita rate limit (delay entre requisições) e retenta em 429 (lib/enem.ts).
 *  - Baixa imagens referenciadas para /public/enem-assets/ e reescreve as URLs
 *    para caminhos locais (funciona offline depois da importação).
 *  - É idempotente: roda de novo não duplica (match por year+index+language).
 *  - Fallback: se a API estiver indisponível, importa de ./data/enem/*.json.
 *
 * Variáveis de ambiente úteis:
 *  - ENEM_YEARS, ENEM_API_BASE, ENEM_REQUEST_DELAY_MS, ENEM_MAX_RETRIES
 *  - ENEM_MAX_PER_YEAR  -> limita nº de questões por ano (testes)
 *  - ENEM_SOURCE=local  -> força usar ./data/enem/ sem tentar a API
 */
import "dotenv/config";
import { promises as fs } from "fs";
import path from "path";
import { prisma } from "../lib/prisma";
import { stringifyJson } from "../lib/json";
import {
  listExams,
  getExam,
  getQuestion,
  sleep,
  type EnemQuestionDetail,
} from "../lib/enem";

const ASSETS_DIR = path.join(process.cwd(), "public", "enem-assets");
const DATA_DIR = path.join(process.cwd(), "data", "enem");
const DELAY_MS = Number(process.env.ENEM_REQUEST_DELAY_MS || 350);
const MAX_PER_YEAR = process.env.ENEM_MAX_PER_YEAR
  ? Number(process.env.ENEM_MAX_PER_YEAR)
  : Infinity;

function yearsFromEnv(): number[] {
  const raw = process.env.ENEM_YEARS || "2019,2020,2021,2022,2023";
  return raw
    .split(",")
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isFinite(n));
}

// ---------- Download de imagens / assets ----------

const IMG_URL_RE = /https?:\/\/[^\s)"']+\.(?:png|jpe?g|gif|webp|svg)/gi;

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

/** Coleta todas as URLs de imagem da questão (files[] + embutidas no contexto/alternativas). */
function collectAssetUrls(q: EnemQuestionDetail): string[] {
  const urls = new Set<string>();
  for (const f of q.files || []) if (f) urls.add(f);
  const haystacks = [q.context || "", ...(q.alternatives || []).map((a) => a.text || "")];
  for (const h of haystacks) {
    const matches = h.match(IMG_URL_RE);
    if (matches) for (const m of matches) urls.add(m);
  }
  for (const a of q.alternatives || []) if (a.file) urls.add(a.file);
  return [...urls];
}

/**
 * Baixa cada URL para public/enem-assets/{year}/{index}/ e retorna um mapa
 * urlOriginal -> caminhoLocal (ex.: /enem-assets/2022/7/arquivo.png).
 * Em caso de falha numa imagem, mantém a URL original (não derruba o import).
 */
async function downloadAssets(
  q: EnemQuestionDetail,
): Promise<Record<string, string>> {
  const map: Record<string, string> = {};
  const urls = collectAssetUrls(q);
  if (urls.length === 0) return map;

  const dir = path.join(ASSETS_DIR, String(q.year), String(q.index));
  let created = false;

  for (const url of urls) {
    try {
      const base = path.basename(new URL(url).pathname) || `img-${Date.now()}`;
      const localFsPath = path.join(dir, base);
      const localWebPath = `/enem-assets/${q.year}/${q.index}/${base}`;

      if (!(await fileExists(localFsPath))) {
        if (!created) {
          await ensureDir(dir);
          created = true;
        }
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        await fs.writeFile(localFsPath, buf);
        await sleep(DELAY_MS);
      }
      map[url] = localWebPath;
    } catch (err) {
      console.warn(
        `    ⚠ não baixou imagem ${url}: ${(err as Error).message} (mantém URL original)`,
      );
    }
  }
  return map;
}

function rewriteUrls(text: string | null, map: Record<string, string>): string | null {
  if (!text) return text;
  let out = text;
  for (const [from, to] of Object.entries(map)) {
    out = out.split(from).join(to);
  }
  return out;
}

// ---------- Persistência (idempotente) ----------

async function upsertQuestion(q: EnemQuestionDetail) {
  const assetMap = await downloadAssets(q);

  const contextMarkdown = rewriteUrls(q.context, assetMap);
  const alternativas = (q.alternatives || []).map((a) => ({
    letter: a.letter,
    text: rewriteUrls(a.text, assetMap) || "",
    file: a.file ? rewriteUrls(a.file, assetMap) : null,
    isCorrect: a.isCorrect,
  }));
  const arquivos = (q.files || []).map((f) => assetMap[f] || f);

  const data = {
    year: q.year,
    index: q.index,
    discipline: q.discipline,
    language: q.language ?? null,
    contextMarkdown,
    comando: q.alternativesIntroduction ?? null,
    alternativas: stringifyJson(alternativas),
    correta: q.correctAlternative ?? null,
    arquivos: stringifyJson(arquivos),
  };

  // findFirst + update/create p/ idempotência robusta com language possivelmente null.
  const existing = await prisma.question.findFirst({
    where: { year: q.year, index: q.index, language: q.language ?? null },
    select: { id: true },
  });

  if (existing) {
    await prisma.question.update({ where: { id: existing.id }, data });
    return "updated" as const;
  }
  await prisma.question.create({ data });
  return "created" as const;
}

// ---------- Fonte: API ----------

async function importFromApi(years: number[]) {
  const available = await listExams();
  const availableYears = new Set(available.map((e) => e.year));
  console.log(`✓ API enem.dev OK — anos disponíveis: ${[...availableYears].sort().join(", ")}`);

  const stats = { created: 0, updated: 0, failed: 0 };

  for (const year of years) {
    if (!availableYears.has(year)) {
      console.warn(`• ${year}: indisponível na API, pulando.`);
      continue;
    }
    console.log(`\n• Importando ${year}...`);
    const exam = await getExam(year);
    await sleep(DELAY_MS);

    const refs = exam.questions.slice(0, MAX_PER_YEAR);
    let i = 0;
    for (const ref of refs) {
      i++;
      try {
        const q = await getQuestion(year, ref.index, ref.language);
        const r = await upsertQuestion(q);
        stats[r]++;
        if (i % 20 === 0) console.log(`    ${i}/${refs.length}...`);
        await sleep(DELAY_MS);
      } catch (err) {
        stats.failed++;
        console.warn(
          `    ⚠ falhou questão ${year}#${ref.index} (${ref.language ?? "-"}): ${
            (err as Error).message
          }`,
        );
      }
    }
    console.log(`  ${year}: ok (${refs.length} questões processadas)`);
  }
  return stats;
}

// ---------- Fonte: local (fallback) ----------

type LocalFile =
  | { year?: number; title?: string; questions: EnemQuestionDetail[] }
  | EnemQuestionDetail[];

async function importFromLocal(years: number[] | null) {
  const exists = await fileExists(DATA_DIR);
  if (!exists) {
    throw new Error(
      `Pasta de fallback não encontrada: ${DATA_DIR}. Veja o README (formato ./data/enem/).`,
    );
  }
  const files = (await fs.readdir(DATA_DIR)).filter((f) => f.endsWith(".json"));
  if (files.length === 0) {
    throw new Error(`Nenhum .json em ${DATA_DIR}.`);
  }
  console.log(`✓ Fallback local: ${files.length} arquivo(s) em data/enem/`);

  const stats = { created: 0, updated: 0, failed: 0 };
  const yearFilter = years ? new Set(years) : null;

  for (const file of files) {
    const raw = await fs.readFile(path.join(DATA_DIR, file), "utf8");
    let parsed: LocalFile;
    try {
      parsed = JSON.parse(raw);
    } catch {
      console.warn(`  ⚠ ${file}: JSON inválido, pulando.`);
      continue;
    }
    const questions = Array.isArray(parsed) ? parsed : parsed.questions;
    for (const q of questions || []) {
      if (yearFilter && !yearFilter.has(q.year)) continue;
      try {
        const r = await upsertQuestion(q);
        stats[r]++;
      } catch (err) {
        stats.failed++;
        console.warn(`  ⚠ falhou ${q.year}#${q.index}: ${(err as Error).message}`);
      }
    }
  }
  return stats;
}

// ---------- Main ----------

async function main() {
  const years = yearsFromEnv();
  const forceLocal = (process.env.ENEM_SOURCE || "").toLowerCase() === "local";
  console.log(`ENEM Study — importação de questões. Anos: ${years.join(", ")}`);

  let stats: { created: number; updated: number; failed: number };

  if (forceLocal) {
    stats = await importFromLocal(years);
  } else {
    try {
      stats = await importFromApi(years);
    } catch (err) {
      console.warn(`\n⚠ API indisponível (${(err as Error).message}).`);
      console.warn("→ Tentando fallback local em ./data/enem/...");
      stats = await importFromLocal(years);
    }
  }

  const total = await prisma.question.count();
  console.log(
    `\n✓ Importação concluída. criadas=${stats.created} atualizadas=${stats.updated} falhas=${stats.failed}`,
  );
  console.log(`  Total de questões no banco: ${total}`);
}

main()
  .catch((e) => {
    // Importação nunca deve "derrubar" o ambiente; loga e sai com código 1.
    console.error("Erro fatal na importação:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
