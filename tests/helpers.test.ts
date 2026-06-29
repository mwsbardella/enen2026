import { describe, it, expect } from "vitest";
import { parseJson, stringifyJson } from "@/lib/json";
import { countdownTo, semanaAtualNumero, ENEM_DIA_1, TOTAL_SEMANAS } from "@/lib/dates";
import { subjectSlugForDiscipline, nomeDaArea } from "@/lib/subjects";

describe("json helpers", () => {
  it("faz round-trip de objetos", () => {
    const obj = { a: 1, b: ["x", "y"] };
    expect(parseJson(stringifyJson(obj), null)).toEqual(obj);
  });

  it("retorna fallback para JSON inválido ou vazio", () => {
    expect(parseJson<number[]>("not json", [])).toEqual([]);
    expect(parseJson<number[]>("", [1])).toEqual([1]);
    expect(parseJson<number[]>(null, [2])).toEqual([2]);
  });
});

describe("dates helpers", () => {
  it("countdown é zero/passou no dia da prova", () => {
    const cd = countdownTo(ENEM_DIA_1, ENEM_DIA_1);
    expect(cd.passou).toBe(true);
    expect(cd.dias).toBe(0);
  });

  it("countdown calcula dias restantes antes da prova", () => {
    const dezDiasAntes = new Date(ENEM_DIA_1);
    dezDiasAntes.setDate(dezDiasAntes.getDate() - 10);
    const cd = countdownTo(ENEM_DIA_1, dezDiasAntes);
    expect(cd.passou).toBe(false);
    expect(cd.dias).toBe(10);
  });

  it("semana atual fica no intervalo 1..19 dentro do cronograma", () => {
    // metade do cronograma
    const meio = new Date(ENEM_DIA_1);
    meio.setDate(meio.getDate() - 9 * 7);
    const n = semanaAtualNumero(meio);
    expect(n).not.toBeNull();
    expect(n!).toBeGreaterThanOrEqual(1);
    expect(n!).toBeLessThanOrEqual(TOTAL_SEMANAS);
  });

  it("depois da prova, não há semana atual", () => {
    const depois = new Date(ENEM_DIA_1);
    depois.setDate(depois.getDate() + 30);
    expect(semanaAtualNumero(depois)).toBeNull();
  });
});

describe("subjects mapping", () => {
  it("mapeia disciplines da enem.dev para áreas internas", () => {
    expect(subjectSlugForDiscipline("ciencias-humanas")).toBe("humanas");
    expect(subjectSlugForDiscipline("linguagens")).toBe("linguagens");
    expect(subjectSlugForDiscipline("inexistente")).toBeNull();
  });

  it("retorna nome amigável da área", () => {
    expect(nomeDaArea("humanas")).toMatch(/Humanas/);
  });
});
