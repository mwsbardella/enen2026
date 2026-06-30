/**
 * Converte as provas e gabaritos em PDF do INEP (anos sem cobertura na enem.dev,
 * ex.: 2024, 2025) para o formato JSON que o importador já lê em data/enem/.
 *
 *   npm run parse:inep              # processa todos os anos com PDFs presentes
 *   npm run parse:inep -- 2024      # apenas um ano
 *
 * Entrada (em data/enem/inep-pdfs/), caderno azul de cada dia:
 *   {ANO}_PV_impresso_D1_CD1.pdf  +  {ANO}_GB_impresso_D1_CD1.pdf   (Linguagens+Humanas)
 *   {ANO}_PV_impresso_D2_CD5.pdf  +  {ANO}_GB_impresso_D2_CD5.pdf   (Natureza+Matemática)
 *
 * Saída: data/enem/curated-{ANO}.json (formato EnemQuestionDetail[] dentro de
 * { year, title, questions }). Depois é só `npm run import` (fallback local) ou
 * ENEM_SOURCE=local para popular o banco.
 *
 * IMPORTANTE — limites do método:
 *  - pdftotext extrai só TEXTO. Questões com imagem/gráfico/fórmula essenciais
 *    saem incompletas e são marcadas com `revisar: true` + `parseNotes` para
 *    curadoria manual posterior. Cerca de ~25-30% das questões caem nesse caso.
 *  - As Q1-5 (língua estrangeira) aparecem 2x (Inglês/Espanhol) sem header de
 *    texto identificável; são tagueadas por ordem e marcadas para revisão.
 */
import { promises as fs } from "fs";
import path from "path";
import { execFileSync } from "child_process";
import type { EnemQuestionDetail } from "../lib/enem";

const PDF_DIR = path.join(process.cwd(), "data", "enem", "inep-pdfs");
const OUT_DIR = path.join(process.cwd(), "data", "enem");

type ParsedQuestion = EnemQuestionDetail & {
  revisar?: boolean;
  parseNotes?: string[];
};

const ANSWER_TOKENS = new Set(["A", "B", "C", "D", "E", "Anulado"]);

// ---------- pdftotext ----------

function pdfToText(file: string, raw = false): string {
  // PROVA: -raw (ordem do content stream) é essencial em provas de 2 colunas
  // (ex.: 2025), onde o modo padrão intercala as colunas e embaralha as questões.
  // GABARITO: modo padrão, que preserva as colunas/seções do gabarito.
  const args = raw ? ["-raw", "-enc", "UTF-8", file, "-"] : ["-enc", "UTF-8", file, "-"];
  return execFileSync("pdftotext", args, { maxBuffer: 1 << 28 }).toString("utf8");
}

function cleanLines(raw: string): string[] {
  return raw.split(/\r?\n/).filter((l) => {
    const t = l.trim();
    if (!t) return false;
    const compact = t.replace(/\s/g, "");
    if (/(ENEM.?20\d\d){2,}/i.test(compact)) return false; // marca d'água (qualquer ano)
    if (/^\*[0-9A-Z]+\*$/.test(t)) return false; // código de barras
    if (/^•.*•.*(DIA|CADERNO)/i.test(t)) return false; // rodapé
    if (/(DIA•CADERNO|CADERNO\d+•)/i.test(compact)) return false; // rodapé variações
    if (/^\d{1,3}$/.test(t)) return false; // número de página
    if (/^\d?d[ºo]ia$/i.test(compact)) return false;
    if (/^CADERNO\d$/i.test(compact)) return false;
    if (/^(Azul|Branco|Amarelo|Rosa|Cinza|Verde)$/i.test(t)) return false;
    return true;
  });
}

// ---------- Gabarito ----------

type GabaritoMap = Record<number, { ingles?: string; espanhol?: string; comum?: string }>;

/** Lê os tokens de resposta por seção, mapeando-os às faixas de numeração. */
function parseGabarito(text: string): GabaritoMap {
  const lines = cleanLines(text);
  const map: GabaritoMap = {};
  let section: "ling" | "ing" | "esp" | "hum" | "nat" | "mat" | null = null;

  const runs: { section: string; tokens: string[] }[] = [];

  for (const line of lines) {
    const up = line.toUpperCase();
    if (/LINGUAGENS/.test(up)) section = "ling";
    else if (/INGL[ÊE]S/.test(up)) section = "ing";
    else if (/ESPANHOL/.test(up)) section = "esp";
    else if (/CI[ÊE]NCIAS HUMANAS/.test(up)) section = "hum";
    else if (/CI[ÊE]NCIAS DA NATUREZA/.test(up)) section = "nat";
    else if (/MATEM[ÁA]TICA/.test(up)) section = "mat";

    const tokens = line.trim().split(/\s+/);
    const isRun = tokens.length > 0 && tokens.every((tk) => ANSWER_TOKENS.has(tk));
    if (isRun && section) runs.push({ section, tokens });
  }

  const put = (idx: number, val: string, lang?: "ingles" | "espanhol") => {
    map[idx] = map[idx] || {};
    if (lang === "ingles") map[idx].ingles = val;
    else if (lang === "espanhol") map[idx].espanhol = val;
    else map[idx].comum = val;
  };

  for (const run of runs) {
    if (run.section === "ing") {
      run.tokens.slice(0, 5).forEach((t, i) => put(i + 1, t, "ingles"));
    } else if (run.section === "esp") {
      // 5 (espanhol Q1-5) + 40 (comum Q6-45)
      run.tokens.slice(0, 5).forEach((t, i) => put(i + 1, t, "espanhol"));
      run.tokens.slice(5, 45).forEach((t, i) => put(i + 6, t));
    } else if (run.section === "hum") {
      run.tokens.slice(0, 45).forEach((t, i) => put(i + 46, t));
    } else if (run.section === "nat") {
      run.tokens.slice(0, 45).forEach((t, i) => put(i + 91, t));
    } else if (run.section === "mat") {
      run.tokens.slice(0, 45).forEach((t, i) => put(i + 136, t));
    }
  }
  return map;
}

// ---------- Prova ----------

function disciplineFor(index: number): string {
  if (index <= 45) return "linguagens";
  if (index <= 90) return "ciencias-humanas";
  if (index <= 135) return "ciencias-natureza";
  return "matematica";
}

type RawQ = { index: number; body: string };

function splitQuestions(text: string): RawQ[] {
  const parts = text.split(/QUEST[ÃA]O\s+(\d+)/i);
  const out: RawQ[] = [];
  for (let i = 1; i < parts.length; i += 2) {
    out.push({ index: Number(parts[i]), body: (parts[i + 1] || "").trim() });
  }
  return out;
}

/** Extrai a última sequência A..E válida; retorna alternativas + texto anterior. */
function parseAlternatives(body: string): { alts: { letter: string; text: string }[]; head: string } | null {
  const joined = body.replace(/\s+/g, " ").trim();
  const letters = ["A", "B", "C", "D", "E"];
  const findFrom = (letter: string, from: number) => {
    const re = new RegExp(`(?:^|\\s)${letter}\\s+`, "g");
    re.lastIndex = from;
    const m = re.exec(joined);
    return m ? { textStart: m.index + m[0].length, marker: m.index } : null;
  };

  let best: { textStart: number; marker: number }[] | null = null;
  let searchStart = 0;
  while (true) {
    const a = findFrom("A", searchStart);
    if (!a) break;
    const pos = [a];
    let ok = true;
    let cur = a.textStart;
    for (let k = 1; k < 5; k++) {
      const nxt = findFrom(letters[k], cur);
      if (!nxt) {
        ok = false;
        break;
      }
      pos.push(nxt);
      cur = nxt.textStart;
    }
    if (ok) best = pos; // mantém a última válida (alternativas ficam no fim)
    searchStart = a.textStart;
  }
  if (!best) return null;

  const alts = letters.map((letter, k) => {
    const start = best![k].textStart;
    const end = k < 4 ? best![k + 1].marker : joined.length;
    return { letter, text: joined.slice(start, end).trim() };
  });
  return { alts, head: joined.slice(0, best[0].marker).trim() };
}

/** Separa o comando (última frase antes das alternativas) do contexto. */
function splitContextAndCommand(head: string): { context: string | null; comando: string | null } {
  const sentences = head.split(/(?<=[.?:])\s+/).filter(Boolean);
  if (sentences.length <= 1) return { context: null, comando: head || null };
  const comando = sentences[sentences.length - 1];
  const context = sentences.slice(0, -1).join(" ");
  return { context: context || null, comando: comando || null };
}

function parseProva(text: string, year: number, gab: GabaritoMap): ParsedQuestion[] {
  const lines = cleanLines(text);
  const raws = splitQuestions(lines.join("\n"));

  // Conta ocorrências por índice (Q1-5 aparecem 2x: inglês/espanhol).
  const seen = new Map<number, number>();
  const out: ParsedQuestion[] = [];

  for (const raw of raws) {
    const notes: string[] = [];
    const occ = (seen.get(raw.index) || 0) + 1;
    seen.set(raw.index, occ);

    let language: string | null = null;
    if (raw.index <= 5) {
      // 1ª ocorrência = inglês, 2ª = espanhol (ordem padrão do caderno).
      language = occ === 1 ? "ingles" : "espanhol";
      notes.push("língua estrangeira: idioma inferido por ordem — conferir");
    }

    const parsed = parseAlternatives(raw.body);
    const discipline = disciplineFor(raw.index);

    let alts: { letter: string; text: string; file: null; isCorrect: boolean }[] = [];
    let context: string | null = null;
    let comando: string | null = null;

    if (!parsed) {
      notes.push("não foi possível extrair as 5 alternativas (provável imagem)");
      context = raw.body.replace(/\s+/g, " ").trim() || null;
    } else {
      const sc = splitContextAndCommand(parsed.head);
      context = sc.context;
      comando = sc.comando;
      alts = parsed.alts.map((a) => ({ ...a, file: null, isCorrect: false }));
      if (parsed.alts.some((a) => a.text.length < 1)) notes.push("alternativa vazia");
      if ((parsed.head || "").length < 30) notes.push("contexto muito curto (provável imagem)");
    }

    // Gabarito
    const g = gab[raw.index];
    let correta: string | null = null;
    if (g) {
      const val = language === "ingles" ? g.ingles : language === "espanhol" ? g.espanhol : g.comum;
      if (val === "Anulado") {
        notes.push("questão ANULADA pelo INEP");
      } else if (val) {
        correta = val;
      }
    }
    if (!correta && !notes.some((n) => n.includes("ANULADA"))) notes.push("sem gabarito casado");
    for (const a of alts) a.isCorrect = correta != null && a.letter === correta;

    const revisar = notes.length > 0 || alts.length !== 5;

    out.push({
      title: `Questão ${raw.index} - ENEM ${year}`,
      index: raw.index,
      discipline,
      language,
      year,
      context,
      files: [],
      correctAlternative: correta,
      alternativesIntroduction: comando,
      alternatives: alts,
      ...(revisar ? { revisar: true, parseNotes: notes } : {}),
    });
  }

  // Ordena por (index, language) e remove duplicatas exatas mantendo a 1ª.
  out.sort((a, b) => a.index - b.index || (a.language || "").localeCompare(b.language || ""));
  return out;
}

// ---------- Orquestração ----------

async function fileExists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function processYear(year: number): Promise<boolean> {
  const f = (s: string) => path.join(PDF_DIR, s);
  const pvD1 = f(`${year}_PV_impresso_D1_CD1.pdf`);
  const gbD1 = f(`${year}_GB_impresso_D1_CD1.pdf`);
  const pvD2 = f(`${year}_PV_impresso_D2_CD5.pdf`);
  const gbD2 = f(`${year}_GB_impresso_D2_CD5.pdf`);

  const present = await Promise.all([pvD1, gbD1, pvD2, gbD2].map(fileExists));
  if (!present.every(Boolean)) {
    console.log(`• ${year}: PDFs incompletos em ${PDF_DIR}, pulando.`);
    return false;
  }

  const gab: GabaritoMap = { ...parseGabarito(pdfToText(gbD1)), ...parseGabarito(pdfToText(gbD2)) };
  const questions = [
    ...parseProva(pdfToText(pvD1, true), year, gab),
    ...parseProva(pdfToText(pvD2, true), year, gab),
  ];

  const out = {
    year,
    title: `ENEM ${year} (INEP — extraído de PDF)`,
    questions,
  };
  const outPath = path.join(OUT_DIR, `curated-${year}.json`);
  await fs.writeFile(outPath, JSON.stringify(out, null, 2) + "\n", "utf8");

  // Relatório
  const total = questions.length;
  const revisar = questions.filter((q) => q.revisar).length;
  const semGab = questions.filter((q) => q.correctAlternative == null).length;
  const byDisc = questions.reduce<Record<string, number>>((acc, q) => {
    acc[q.discipline] = (acc[q.discipline] || 0) + 1;
    return acc;
  }, {});
  console.log(`✓ ${year}: ${total} questões → ${path.relative(process.cwd(), outPath)}`);
  console.log(`    por área: ${JSON.stringify(byDisc)}`);
  console.log(`    completas: ${total - revisar} | revisar: ${revisar} | sem gabarito: ${semGab}`);
  return true;
}

async function main() {
  const argYears = process.argv.slice(2).map(Number).filter(Number.isFinite);
  const years = argYears.length ? argYears : [2024, 2025];
  console.log(`INEP PDF → JSON. Anos: ${years.join(", ")}\n`);
  let any = false;
  for (const y of years) any = (await processYear(y)) || any;
  if (!any) console.log("Nenhum ano processado (verifique data/enem/inep-pdfs/).");
}

main().catch((e) => {
  console.error("Erro:", e);
  process.exitCode = 1;
});
