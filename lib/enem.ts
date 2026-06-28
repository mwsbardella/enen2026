// Cliente da API pública enem.dev com retry + backoff exponencial.
// Usado pelo script de importação (scripts/import-enem.ts).

export type EnemDiscipline = { label: string; value: string };
export type EnemLanguage = { label: string; value: string };

export type EnemExamSummary = {
  title: string;
  year: number;
  disciplines: EnemDiscipline[];
  languages: EnemLanguage[];
};

export type EnemQuestionRef = {
  title: string;
  index: number;
  discipline: string;
  language: string | null;
};

export type EnemExamDetail = EnemExamSummary & {
  questions: EnemQuestionRef[];
};

export type EnemAlternative = {
  letter: string;
  text: string;
  file?: string | null;
  isCorrect: boolean;
};

export type EnemQuestionDetail = {
  title: string;
  index: number;
  discipline: string;
  language: string | null;
  year: number;
  context: string | null;
  files: string[];
  correctAlternative: string | null;
  alternativesIntroduction: string | null;
  alternatives: EnemAlternative[];
};

const BASE = process.env.ENEM_API_BASE || "https://api.enem.dev/v1";
const DELAY_MS = Number(process.env.ENEM_REQUEST_DELAY_MS || 350);
const MAX_RETRIES = Number(process.env.ENEM_MAX_RETRIES || 5);
// Espera máxima aceitável por tentativa. Se a API pedir mais que isso
// (Retry-After gigante em rate limit), abortamos para acionar o fallback.
const MAX_BACKOFF_MS = Number(process.env.ENEM_MAX_BACKOFF_MS || 60_000);

export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

export class EnemApiError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = "EnemApiError";
    this.status = status;
  }
}

// GET com retry/backoff. Retenta em 429 e erros de rede; respeita Retry-After.
export async function enemGet<T>(path: string): Promise<T> {
  const url = `${BASE}${path}`;
  let attempt = 0;

  while (true) {
    attempt++;
    try {
      const res = await fetch(url, {
        headers: { Accept: "application/json" },
      });

      if (res.status === 429 || res.status >= 500) {
        const retryAfter = Number(res.headers.get("retry-after"));
        // Se a API pede uma espera longa demais (rate limit pesado), não
        // travamos o processo: lançamos erro para acionar o fallback local.
        if (retryAfter && retryAfter * 1000 > MAX_BACKOFF_MS) {
          throw new EnemApiError(
            `Rate limit pesado em ${path} (Retry-After ${retryAfter}s). Abortando p/ fallback.`,
            res.status,
          );
        }
        if (attempt > MAX_RETRIES) {
          throw new EnemApiError(
            `Falha após ${MAX_RETRIES} tentativas em ${path} (HTTP ${res.status})`,
            res.status,
          );
        }
        const backoff = retryAfter
          ? Math.min(MAX_BACKOFF_MS, retryAfter * 1000)
          : Math.min(MAX_BACKOFF_MS, DELAY_MS * 2 ** attempt);
        console.warn(
          `  ⚠ HTTP ${res.status} em ${path} — retry ${attempt}/${MAX_RETRIES} em ${backoff}ms`,
        );
        await sleep(backoff);
        continue;
      }

      if (!res.ok) {
        throw new EnemApiError(`HTTP ${res.status} em ${path}`, res.status);
      }

      return (await res.json()) as T;
    } catch (err) {
      if (err instanceof EnemApiError) throw err;
      // Erro de rede (DNS, timeout, offline): retry com backoff.
      if (attempt > MAX_RETRIES) {
        throw new EnemApiError(
          `Erro de rede em ${path} após ${MAX_RETRIES} tentativas: ${
            (err as Error).message
          }`,
        );
      }
      const backoff = Math.min(30_000, DELAY_MS * 2 ** attempt);
      console.warn(
        `  ⚠ rede falhou em ${path} — retry ${attempt}/${MAX_RETRIES} em ${backoff}ms`,
      );
      await sleep(backoff);
    }
  }
}

export async function listExams(): Promise<EnemExamSummary[]> {
  return enemGet<EnemExamSummary[]>("/exams");
}

export async function getExam(year: number): Promise<EnemExamDetail> {
  return enemGet<EnemExamDetail>(`/exams/${year}`);
}

export async function getQuestion(
  year: number,
  index: number,
  language?: string | null,
): Promise<EnemQuestionDetail> {
  const qs = language ? `?language=${encodeURIComponent(language)}` : "";
  return enemGet<EnemQuestionDetail>(`/exams/${year}/questions/${index}${qs}`);
}
