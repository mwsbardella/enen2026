import "server-only";
import { prisma } from "./prisma";
import { parseJson } from "./json";

/** Referência de um item do cronograma (persistida em WeekTask.refs como JSON). */
export type TaskRef = { kind: "topic" | "book" | "exam"; id: string };

export type RawTask = {
  id: string;
  titulo: string;
  ordem: number;
  tipo: string;
  subjectId: string | null;
  refs: string; // JSON: TaskRef[]
  dataInicio: Date | null;
  dataFim: Date | null;
};

/** Requisito de estudo que precisa estar concluído para a tarefa contar como feita. */
export type TaskRequirement = {
  label: string;
  href: string;
  done: boolean;
  area: string | null; // subjectSlug (para o badge), quando aplicável
};

export type EnrichedTask = {
  id: string;
  titulo: string;
  ordem: number;
  tipo: string;
  subjectSlug: string | null;
  /** refs já parseados — usados pelo formulário de edição. */
  refs: TaskRef[];
  dataInicio: string | null; // "YYYY-MM-DD" para <input type="date">
  dataFim: string | null;
  href: string | null;
  done: boolean;
  /**
   * Tarefas "gated" (LER material / Literatura) só concluem quando TODOS os refs
   * (tópicos estudados / livros lidos) estiverem concluídos — sem marcação manual.
   * As demais (simulado, redação, revisão) usam o toggle manual ("weektask").
   */
  gated: boolean;
  requirements: TaskRequirement[];
};

function toISODate(d: Date | null): string | null {
  return d ? d.toISOString().slice(0, 10) : null;
}

// Resolve, para um conjunto de WeekTasks, os requisitos (tópicos/livros), o href de
// destino e o estado de conclusão. Um item LER/Literatura fica concluído só quando
// TODOS os seus refs estão concluídos (derivado do progresso de topic/book).
export async function enrichTasks(tasks: RawTask[]): Promise<EnrichedTask[]> {
  const parsed = tasks.map((t) => ({
    raw: t,
    refs: parseJson<TaskRef[]>(t.refs, []),
  }));

  const topicIds = new Set<string>();
  const bookIds = new Set<string>();
  for (const { refs } of parsed) {
    for (const r of refs) {
      if (r.kind === "topic") topicIds.add(r.id);
      else if (r.kind === "book") bookIds.add(r.id);
    }
  }
  const subjectIds = tasks
    .map((t) => t.subjectId)
    .filter((x): x is string => !!x);

  const [topics, bookRows, subjects, weektaskProg] = await Promise.all([
    topicIds.size
      ? prisma.topic.findMany({
          where: { id: { in: [...topicIds] } },
          select: {
            id: true,
            slug: true,
            titulo: true,
            subject: { select: { slug: true } },
          },
        })
      : Promise.resolve([]),
    bookIds.size
      ? prisma.book.findMany({
          where: { id: { in: [...bookIds] } },
          select: { id: true, slug: true, titulo: true },
        })
      : Promise.resolve([]),
    subjectIds.length
      ? prisma.subject.findMany({
          where: { id: { in: subjectIds } },
          select: { id: true, slug: true },
        })
      : Promise.resolve([]),
    prisma.progress.findMany({
      where: { tipo: "weektask", refId: { in: tasks.map((t) => t.id) } },
    }),
  ]);

  const [topicProg, bookProg] = await Promise.all([
    topicIds.size
      ? prisma.progress.findMany({
          where: { tipo: "topic", refId: { in: [...topicIds] }, concluido: true },
          select: { refId: true },
        })
      : Promise.resolve([]),
    bookIds.size
      ? prisma.progress.findMany({
          where: { tipo: "book", refId: { in: [...bookIds] }, concluido: true },
          select: { refId: true },
        })
      : Promise.resolve([]),
  ]);

  const topicById = Object.fromEntries(topics.map((t) => [t.id, t]));
  const bookById = Object.fromEntries(bookRows.map((b) => [b.id, b]));
  const subjectSlugById = Object.fromEntries(subjects.map((s) => [s.id, s.slug]));
  const topicDone = new Set(topicProg.map((p) => p.refId));
  const bookDone = new Set(bookProg.map((p) => p.refId));
  const weektaskDone = new Set(
    weektaskProg.filter((p) => p.concluido).map((p) => p.refId),
  );

  return parsed.map(({ raw: t, refs }) => {
    const requirements: TaskRequirement[] = [];
    for (const r of refs) {
      if (r.kind === "topic") {
        const topic = topicById[r.id];
        if (topic)
          requirements.push({
            label: topic.titulo,
            href: `/materiais/${topic.slug}`,
            done: topicDone.has(topic.id),
            area: topic.subject?.slug ?? null,
          });
      } else if (r.kind === "book") {
        const book = bookById[r.id];
        if (book)
          requirements.push({
            label: book.titulo,
            href: `/literatura/${book.slug}`,
            done: bookDone.has(book.id),
            area: null,
          });
      }
    }

    const gated =
      (t.tipo === "LER_MATERIAL" || t.tipo === "LER_LIVRO") &&
      requirements.length > 0;

    // Destino principal do item ao clicar no título.
    let href: string | null = null;
    if (t.tipo === "RESPONDER_EXAM") {
      const exam = refs.find((r) => r.kind === "exam");
      href = exam ? `/provas/${exam.id}` : null;
    } else if (t.tipo === "ESCREVER_REDACAO") {
      href = "/redacao";
    } else if (requirements.length === 1) {
      href = requirements[0].href;
    }
    // Com vários requisitos, o usuário navega pelo checklist (href = null).

    const done = gated
      ? requirements.every((r) => r.done)
      : weektaskDone.has(t.id);

    return {
      id: t.id,
      titulo: t.titulo,
      ordem: t.ordem,
      tipo: t.tipo,
      subjectSlug: t.subjectId ? subjectSlugById[t.subjectId] ?? null : null,
      refs,
      dataInicio: toISODate(t.dataInicio),
      dataFim: toISODate(t.dataFim),
      href,
      done,
      gated,
      requirements,
    };
  });
}
