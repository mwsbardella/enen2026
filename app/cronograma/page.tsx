import { prisma } from "@/lib/prisma";
import { semanaAtualNumero, formatarData } from "@/lib/dates";
import { enrichTasks } from "@/lib/tasks";
import TaskList from "@/components/TaskList";
import { PageTitle, Pill } from "@/components/ui";

export const dynamic = "force-dynamic";

export default async function CronogramaPage() {
  const atual = semanaAtualNumero();
  const weeks = await prisma.week.findMany({
    orderBy: { numero: "asc" },
    include: { tasks: { orderBy: { ordem: "asc" } } },
  });

  // Progresso por semana (quantas tarefas concluídas).
  const allTaskIds = weeks.flatMap((w) => w.tasks.map((t) => t.id));
  const doneProgress = await prisma.progress.findMany({
    where: { tipo: "weektask", refId: { in: allTaskIds }, concluido: true },
    select: { refId: true },
  });
  const doneSet = new Set(doneProgress.map((p) => p.refId));

  const enriched = await Promise.all(
    weeks.map(async (w) => ({ week: w, tasks: await enrichTasks(w.tasks) })),
  );

  return (
    <div className="space-y-6">
      <PageTitle
        title="Cronograma — 19 semanas"
        subtitle="Cada tarefa abre o conteúdo: material, prova ou editor de redação."
      />

      {enriched.map(({ week, tasks }) => {
        const total = week.tasks.length;
        const feitas = week.tasks.filter((t) => doneSet.has(t.id)).length;
        const isAtual = week.numero === atual;
        return (
          <section
            key={week.id}
            className={`rounded-2xl border p-4 ${
              isAtual ? "border-primary bg-surface" : "border-border bg-surface/60"
            }`}
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold">Semana {week.numero}</h2>
                  {isAtual && <Pill tone="success">atual</Pill>}
                </div>
                <p className="text-sm text-muted">🎯 {week.foco}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted">
                  {formatarData(week.dataInicio)} – {formatarData(week.dataFim)}
                </p>
                <p className="text-sm font-medium">
                  {feitas}/{total} concluídas
                </p>
              </div>
            </div>
            <TaskList tasks={tasks} />
          </section>
        );
      })}
    </div>
  );
}
