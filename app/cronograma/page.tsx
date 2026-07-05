import { prisma } from "@/lib/prisma";
import { enrichTasks } from "@/lib/tasks";
import { semanaAtualPorData } from "@/lib/dates";
import { SUBJECTS, nomeDaArea } from "@/lib/subjects";
import CronogramaBoard, { type WeekView } from "@/components/CronogramaBoard";
import type { CronogramaOptions } from "@/components/WeekTaskForm";
import { PageTitle } from "@/components/ui";

export const dynamic = "force-dynamic";

function toISODate(d: Date | null): string | null {
  return d ? d.toISOString().slice(0, 10) : null;
}

export default async function CronogramaPage() {
  const [weeks, topics, books, exams] = await Promise.all([
    prisma.week.findMany({
      orderBy: { ordem: "asc" },
      include: { tasks: { orderBy: { ordem: "asc" } } },
    }),
    prisma.topic.findMany({
      orderBy: { ordem: "asc" },
      select: { id: true, titulo: true, subject: { select: { slug: true } } },
    }),
    prisma.book.findMany({
      orderBy: { ordem: "asc" },
      select: { id: true, titulo: true },
    }),
    prisma.exam.findMany({
      orderBy: { titulo: "asc" },
      select: { id: true, titulo: true },
    }),
  ]);

  const weekViews: WeekView[] = await Promise.all(
    weeks.map(async (w) => ({
      id: w.id,
      titulo: w.titulo,
      foco: w.foco,
      ordem: w.ordem,
      origem: w.origem,
      dataInicio: toISODate(w.dataInicio),
      dataFim: toISODate(w.dataFim),
      atual: semanaAtualPorData(w.dataInicio, w.dataFim),
      tasks: await enrichTasks(w.tasks),
    })),
  );

  // Opções dos seletores (materiais agrupados por área, livros e provas).
  const options: CronogramaOptions = {
    topicsByArea: SUBJECTS.map((s) => ({
      area: s.slug,
      areaNome: nomeDaArea(s.slug),
      topics: topics
        .filter((t) => t.subject.slug === s.slug)
        .map((t) => ({ id: t.id, titulo: t.titulo })),
    })).filter((g) => g.topics.length > 0),
    books: books.map((b) => ({ id: b.id, titulo: b.titulo })),
    exams: exams.map((e) => ({ id: e.id, titulo: e.titulo })),
  };

  return (
    <div className="space-y-6">
      <PageTitle
        title="Cronograma"
        subtitle="Sugestão que cobre todas as matérias e livros. Edite, adicione semanas e itens à vontade — cada item de estudo só fica pronto quando todos os materiais forem estudados."
      />
      <CronogramaBoard weeks={weekViews} options={options} />
    </div>
  );
}
