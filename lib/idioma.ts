// Idioma de língua estrangeira do aluno (inglês OU espanhol).
//
// No ENEM o candidato faz um idioma só. As questões guardam isso em
// Question.language ("ingles" | "espanhol"); as demais questões de Linguagens
// têm language = null e valem para todo mundo. Este módulo centraliza o filtro,
// usado pelo cronograma, pelos simulados e pela correção das provas.

import { prisma } from "./prisma";

export type Idioma = "ingles" | "espanhol";

export const IDIOMAS: Idioma[] = ["ingles", "espanhol"];

export const IDIOMA_LABEL: Record<Idioma, string> = {
  ingles: "Inglês",
  espanhol: "Espanhol",
};

export const IDIOMA_PADRAO: Idioma = "ingles";

/** Normaliza um valor vindo do banco/entrada para um Idioma válido. */
export function parseIdioma(valor: string | null | undefined): Idioma {
  return valor === "espanhol" || valor === "ingles" ? valor : IDIOMA_PADRAO;
}

/** Idioma escolhido pelo aluno (app single-user). */
export async function getIdiomaAluno(): Promise<Idioma> {
  const user = await prisma.user.findFirst({ select: { idioma: true } });
  return parseIdioma(user?.idioma);
}

/**
 * Cláusula Prisma para as questões que o aluno deve ver: as comuns
 * (language null) MAIS as do idioma escolhido.
 *
 * Cuidado: não é `{ language: idioma }` — isso descartaria todas as questões
 * comuns de Linguagens, que são a maioria.
 */
export function whereIdioma(idioma: Idioma) {
  return { OR: [{ language: null }, { language: idioma }] };
}

/** Mesmo critério de `whereIdioma`, para listas já carregadas em memória. */
export function ehDoIdioma(q: { language: string | null }, idioma: Idioma): boolean {
  return q.language == null || q.language === idioma;
}
