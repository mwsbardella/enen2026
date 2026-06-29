import { describe, it, expect } from "vitest";
import { gradeAttempt, type GradeQuestion } from "@/lib/grade";

const questions: GradeQuestion[] = [
  { id: "q1", discipline: "ciencias-humanas", correta: "A" },
  { id: "q2", discipline: "ciencias-humanas", correta: "B" },
  { id: "q3", discipline: "linguagens", correta: "C" },
  { id: "q4", discipline: "matematica", correta: "D" },
];

describe("gradeAttempt", () => {
  it("conta acertos e total corretamente", () => {
    const r = gradeAttempt(questions, { q1: "A", q2: "X", q3: "C", q4: "A" });
    expect(r.total).toBe(4);
    expect(r.acertos).toBe(2); // q1 e q3
  });

  it("agrupa desempenho por área (mapeando discipline -> subject)", () => {
    const r = gradeAttempt(questions, { q1: "A", q2: "B", q3: "A", q4: "D" });
    expect(r.porArea.humanas).toEqual({ acertos: 2, total: 2 });
    expect(r.porArea.linguagens).toEqual({ acertos: 0, total: 1 });
    expect(r.porArea.matematica).toEqual({ acertos: 1, total: 1 });
  });

  it("trata questões não respondidas como erro", () => {
    const r = gradeAttempt(questions, { q1: "A" });
    expect(r.acertos).toBe(1);
    const c2 = r.correcao.find((c) => c.questionId === "q2");
    expect(c2?.marcada).toBeNull();
    expect(c2?.acertou).toBe(false);
  });

  it("retorna a correção detalhada com o gabarito de cada questão", () => {
    const r = gradeAttempt(questions, { q1: "B" });
    const c1 = r.correcao.find((c) => c.questionId === "q1");
    expect(c1).toEqual({
      questionId: "q1",
      correta: "A",
      marcada: "B",
      acertou: false,
    });
  });

  it("prova vazia resulta em 0/0 sem erro", () => {
    const r = gradeAttempt([], {});
    expect(r).toMatchObject({ acertos: 0, total: 0 });
    expect(r.porArea).toEqual({});
  });
});
