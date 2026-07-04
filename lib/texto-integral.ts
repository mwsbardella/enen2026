import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Texto integral das obras em domínio público, versionado no repositório
 * em data/livros/<slug>.txt. Usado pelos seeds (prisma/seed.ts e
 * scripts/seed-books.ts) para popular Book.textoCompleto — assim um clone
 * novo do repositório reconstrói o banco completo, offline.
 */
const LIVROS_DIR = join(__dirname, "..", "data", "livros");

export function textoIntegralDe(slug: string): string | null {
  const path = join(LIVROS_DIR, `${slug}.txt`);
  return existsSync(path) ? readFileSync(path, "utf-8") : null;
}
