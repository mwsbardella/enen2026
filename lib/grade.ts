import type { PorArea, Respostas } from "./json";
import { DISCIPLINE_TO_SUBJECT } from "./subjects";

export type GradeQuestion = {
  id: string;
  discipline: string;
  correta: string | null;
};

export type Correcao = {
  questionId: string;
  correta: string | null;
  marcada: string | null;
  acertou: boolean;
};

export type GradeResult = {
  acertos: number;
  total: number;
  porArea: PorArea;
  correcao: Correcao[];
};

// Função pura de correção: compara as respostas do aluno com o gabarito.
// Usada pela rota /api/attempts e pelos testes.
export function gradeAttempt(
  questions: GradeQuestion[],
  respostas: Respostas,
): GradeResult {
  let acertos = 0;
  const porArea: PorArea = {};
  const correcao: Correcao[] = [];

  for (const q of questions) {
    const marcada = respostas[q.id] ?? null;
    const acertou = marcada != null && q.correta != null && marcada === q.correta;
    if (acertou) acertos++;

    const area = DISCIPLINE_TO_SUBJECT[q.discipline] ?? q.discipline;
    if (!porArea[area]) porArea[area] = { acertos: 0, total: 0 };
    porArea[area].total++;
    if (acertou) porArea[area].acertos++;

    correcao.push({ questionId: q.id, correta: q.correta, marcada, acertou });
  }

  return { acertos, total: questions.length, porArea, correcao };
}
