// Geração/regeneração do cronograma SUGERIDO.
//
// Antes o cronograma era montado só no seed, com 19 semanas fixas datadas para
// trás a partir do 1º dia de prova. Aqui a lógica vira reutilizável em runtime:
// a partir do TEMPO QUE FALTA para o ENEM, os 19 blocos canônicos de conteúdo
// (prisma/content/weeks.ts) são redistribuídos nas semanas disponíveis e
// redatados para terminarem junto da prova. Usado pelo seed e pela API
// /api/aluno (botão "refazer cronograma").

import { prisma } from "./prisma";
import { stringifyJson } from "./json";
import { ENEM_DIA_1 } from "./dates";
import { getIdiomaAluno } from "./idioma";
import { weeks, type WeekSeed, type WeekTaskSeed } from "../prisma/content/weeks";

const MS_DIA = 86_400_000;

type TaskRefResolved = { kind: "topic" | "book" | "exam"; id: string };

/** Semanas inteiras entre `hoje` e o 1º dia de prova (mínimo 1). */
export function semanasRestantes(hoje: Date = new Date()): number {
  const diff = ENEM_DIA_1.getTime() - hoje.getTime();
  return Math.max(1, Math.ceil(diff / (7 * MS_DIA)));
}

/**
 * Reparte `items` em `k` grupos consecutivos o mais uniformes possível.
 * Os primeiros grupos ficam com 1 item a mais quando a divisão não é exata.
 * Requer 1 <= k <= items.length (garantido por quem chama).
 */
function distribuir<T>(items: T[], k: number): T[][] {
  const base = Math.floor(items.length / k);
  const resto = items.length % k;
  const grupos: T[][] = [];
  let idx = 0;
  for (let i = 0; i < k; i++) {
    const tamanho = base + (i < resto ? 1 : 0);
    grupos.push(items.slice(idx, idx + tamanho));
    idx += tamanho;
  }
  return grupos;
}

/** Mescla vários blocos canônicos numa única semana (concatena tarefas, junta focos). */
function mesclarBlocos(blocos: WeekSeed[]): { foco: string; tasks: WeekTaskSeed[] } {
  const foco = blocos.map((b) => b.foco).join(" + ");
  const tasks = blocos.flatMap((b) => b.tasks);
  return { foco, tasks };
}

/**
 * Recria as semanas de origem "sugerido" datadas a partir do tempo restante,
 * preservando as semanas criadas pelo usuário ("usuario"). As tarefas marcadas
 * com `idioma` só entram se casarem com o idioma escolhido pelo aluno. Retorna
 * quantas semanas sugeridas foram geradas.
 */
export async function regenerarCronograma(hoje: Date = new Date()): Promise<number> {
  // Mapas slug -> id (do banco), como no seed.
  const [subjects, topics, books, exams, idioma] = await Promise.all([
    prisma.subject.findMany({ select: { id: true, slug: true } }),
    prisma.topic.findMany({ select: { id: true, slug: true } }),
    prisma.book.findMany({ select: { id: true, slug: true } }),
    prisma.exam.findMany({ select: { id: true, slug: true } }),
    getIdiomaAluno(),
  ]);
  const subjectIdBySlug = Object.fromEntries(subjects.map((s) => [s.slug, s.id]));
  const topicIdBySlug = Object.fromEntries(topics.map((t) => [t.slug, t.id]));
  const bookIdBySlug = Object.fromEntries(books.map((b) => [b.slug, b.id]));
  const examIdBySlug = Object.fromEntries(exams.map((e) => [e.slug, e.id]));

  function buildRefs(ref: WeekTaskSeed["ref"]): TaskRefResolved[] {
    switch (ref.kind) {
      case "material":
      case "revisar":
        return ref.slugs
          .map((slug) => topicIdBySlug[slug])
          .filter((id): id is string => !!id)
          .map((id) => ({ kind: "topic", id }));
      case "book":
        return ref.slugs
          .map((slug) => bookIdBySlug[slug])
          .filter((id): id is string => !!id)
          .map((id) => ({ kind: "book", id }));
      case "exam": {
        const id = examIdBySlug[ref.slug];
        return id ? [{ kind: "exam", id }] : [];
      }
      case "redacao":
        return [];
    }
  }

  // W semanas de conteúdo: no máximo os 19 blocos, no mínimo caberem no tempo restante.
  const W = Math.min(semanasRestantes(hoje), weeks.length);
  const grupos = distribuir(weeks, W);

  // Datas: última semana termina no dia da prova; cada semana = 7 dias.
  const inicioSem1 = new Date(ENEM_DIA_1);
  inicioSem1.setDate(inicioSem1.getDate() - W * 7);

  // Preserva semanas do usuário; recria as sugeridas (cascade remove as tarefas).
  await prisma.week.deleteMany({ where: { origem: "sugerido" } });

  for (let i = 0; i < grupos.length; i++) {
    const numero = i + 1;
    const { foco, tasks } = mesclarBlocos(grupos[i]);

    const dataInicio = new Date(inicioSem1);
    dataInicio.setDate(dataInicio.getDate() + i * 7);
    const dataFim = new Date(dataInicio);
    dataFim.setDate(dataFim.getDate() + 6);

    const week = await prisma.week.create({
      data: {
        titulo: `Semana ${numero}`,
        foco,
        ordem: numero,
        origem: "sugerido",
        dataInicio,
        dataFim,
      },
    });

    let ordem = 0;
    for (const task of tasks) {
      // Língua estrangeira: só a tarefa do idioma que o aluno faz.
      if (task.idioma && task.idioma !== idioma) continue;
      ordem++;
      await prisma.weekTask.create({
        data: {
          weekId: week.id,
          subjectId: task.subjectSlug ? subjectIdBySlug[task.subjectSlug] ?? null : null,
          titulo: task.titulo,
          ordem,
          tipo: task.tipo,
          refs: stringifyJson(buildRefs(task.ref)),
        },
      });
    }
  }

  return grupos.length;
}
