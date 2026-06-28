// Metadados das áreas (Subject) compartilhados entre seed e UI, e o mapeamento
// das "disciplines" da enem.dev para os slugs internos.

export type SubjectSeed = {
  slug: string;
  nome: string;
  cor: string; // hex usado na UI
  ordem: number;
};

export const SUBJECTS: SubjectSeed[] = [
  { slug: "linguagens", nome: "Linguagens e Códigos", cor: "#60a5fa", ordem: 1 },
  { slug: "humanas", nome: "Ciências Humanas", cor: "#f59e0b", ordem: 2 },
  { slug: "redacao", nome: "Redação", cor: "#f472b6", ordem: 3 },
  { slug: "matematica", nome: "Matemática", cor: "#34d399", ordem: 4 },
  { slug: "natureza", nome: "Ciências da Natureza", cor: "#a78bfa", ordem: 5 },
];

// "discipline" (value) da enem.dev -> slug do Subject interno.
export const DISCIPLINE_TO_SUBJECT: Record<string, string> = {
  linguagens: "linguagens",
  "ciencias-humanas": "humanas",
  matematica: "matematica",
  "ciencias-natureza": "natureza",
};

export function subjectSlugForDiscipline(discipline: string): string | null {
  return DISCIPLINE_TO_SUBJECT[discipline] ?? null;
}

export function corDaArea(slug: string): string {
  return SUBJECTS.find((s) => s.slug === slug)?.cor ?? "#94a3b8";
}

export function nomeDaArea(slug: string): string {
  return SUBJECTS.find((s) => s.slug === slug)?.nome ?? slug;
}
