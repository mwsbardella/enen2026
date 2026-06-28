// Helpers de (de)serialização para os campos "Json" persistidos como String
// no SQLite. Em produção com Postgres você poderia migrar para Json nativo,
// mas manter String mantém o código portátil entre os dois bancos.

export function parseJson<T>(value: string | null | undefined, fallback: T): T {
  if (value == null || value === "") return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function stringifyJson(value: unknown): string {
  return JSON.stringify(value ?? null);
}

// ----- Tipos compartilhados dos campos Json -----

export type LinkItem = {
  titulo: string;
  url: string;
  fonte: string;
};

export type Alternativa = {
  letter: string; // "A".."E"
  text: string;
  file?: string | null;
  isCorrect?: boolean; // não exposto ao aluno antes da correção
};

export type PorArea = Record<string, { acertos: number; total: number }>;

export type Respostas = Record<string, string>; // questionId -> letra

export type Autoavaliacao = {
  c1: number;
  c2: number;
  c3: number;
  c4: number;
  c5: number;
};
