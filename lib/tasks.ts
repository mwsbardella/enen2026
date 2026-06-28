import "server-only";
import { prisma } from "./prisma";

export type RawTask = {
  id: string;
  titulo: string;
  ordem: number;
  tipo: string;
  subjectId: string | null;
  refType: string | null;
  refId: string | null;
};

export type EnrichedTask = RawTask & {
  href: string | null;
  done: boolean;
  subjectSlug: string | null;
};

// Resolve href de destino e estado de conclusão para um conjunto de WeekTasks.
// Materiais linkam para o tópico; provas para a resolução; livros para a obra;
// redação para o editor.
export async function enrichTasks(tasks: RawTask[]): Promise<EnrichedTask[]> {
  const materialIds = tasks
    .filter((t) => t.refType === "StudyMaterial" && t.refId)
    .map((t) => t.refId!);
  const bookIds = tasks
    .filter((t) => t.refType === "Book" && t.refId)
    .map((t) => t.refId!);
  const subjectIds = tasks.map((t) => t.subjectId).filter((x): x is string => !!x);

  const [mats, books, subjects, progresses] = await Promise.all([
    materialIds.length
      ? prisma.studyMaterial.findMany({
          where: { id: { in: materialIds } },
          select: { id: true, topic: { select: { slug: true } } },
        })
      : Promise.resolve([]),
    bookIds.length
      ? prisma.book.findMany({
          where: { id: { in: bookIds } },
          select: { id: true, slug: true },
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

  const topicSlugByMat = Object.fromEntries(mats.map((m) => [m.id, m.topic.slug]));
  const bookSlugById = Object.fromEntries(books.map((b) => [b.id, b.slug]));
  const subjectSlugById = Object.fromEntries(subjects.map((s) => [s.id, s.slug]));
  const doneSet = new Set(
    progresses.filter((p) => p.concluido).map((p) => p.refId),
  );

  return tasks.map((t) => {
    let href: string | null = null;
    if (t.refType === "StudyMaterial" && t.refId)
      href = topicSlugByMat[t.refId] ? `/materiais/${topicSlugByMat[t.refId]}` : null;
    else if (t.refType === "Exam" && t.refId) href = `/provas/${t.refId}`;
    else if (t.refType === "Book" && t.refId)
      href = bookSlugById[t.refId] ? `/literatura/${bookSlugById[t.refId]}` : null;
    else if (t.refType === "Redacao") href = "/redacao";

    return {
      ...t,
      href,
      done: doneSet.has(t.id),
      subjectSlug: t.subjectId ? subjectSlugById[t.subjectId] ?? null : null,
    };
  });
}
