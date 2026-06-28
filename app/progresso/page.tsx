import { prisma } from "@/lib/prisma";
import { parseJson, type PorArea } from "@/lib/json";
import { corDaArea, nomeDaArea } from "@/lib/subjects";
import { PageTitle, Card } from "@/components/ui";
import ProgressChart, { type ChartPoint } from "@/components/ProgressChart";

export const dynamic = "force-dynamic";

export default async function ProgressoPage() {
  const [attempts, totalTasks, doneTasks, totalLivros, livrosLidos] =
    await Promise.all([
      prisma.attempt.findMany({
        where: { finalizadoEm: { not: null }, total: { gt: 0 } },
        orderBy: { iniciadoEm: "asc" },
        include: { exam: { select: { titulo: true } } },
      }),
      prisma.weekTask.count(),
      prisma.progress.count({ where: { tipo: "weektask", concluido: true } }),
      prisma.book.count(),
      prisma.progress.count({ where: { tipo: "book", concluido: true } }),
    ]);

  const points: ChartPoint[] = attempts.map((a, i) => ({
    label: `#${i + 1}`,
    valor: Math.round((a.acertos / a.total) * 100),
  }));

  // Desempenho agregado por área.
  const agg: PorArea = {};
  for (const a of attempts) {
    const pa = parseJson<PorArea>(a.porArea, {});
    for (const [area, v] of Object.entries(pa)) {
      if (!agg[area]) agg[area] = { acertos: 0, total: 0 };
      agg[area].acertos += v.acertos;
      agg[area].total += v.total;
    }
  }
  const areas = Object.entries(agg)
    .map(([area, v]) => ({
      area,
      pct: v.total ? Math.round((v.acertos / v.total) * 100) : 0,
      ...v,
    }))
    .sort((a, b) => a.pct - b.pct); // pior primeiro (pontos fracos no topo)

  const pctCronograma = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;
  const pctLiteratura = totalLivros ? Math.round((livrosLidos / totalLivros) * 100) : 0;

  return (
    <div className="space-y-6">
      <PageTitle
        title="Progresso"
        subtitle="Evolução dos simulados, pontos fracos por área e cumprimento do plano."
      />

      <section>
        <h2 className="mb-2 text-lg font-bold">Evolução dos simulados</h2>
        <Card>
          <ProgressChart points={points} />
        </Card>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold">Desempenho por área</h2>
        {areas.length === 0 ? (
          <p className="text-sm text-muted">Responda simulados para ver seus pontos fracos.</p>
        ) : (
          <div className="space-y-2">
            {areas.map((a) => (
              <div key={a.area}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>{nomeDaArea(a.area)}</span>
                  <span className="text-muted">
                    {a.acertos}/{a.total} ({a.pct}%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${a.pct}%`, backgroundColor: corDaArea(a.area) }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="grid grid-cols-2 gap-3">
        <Card>
          <p className="text-2xl font-bold text-primary">{pctCronograma}%</p>
          <p className="text-sm">Cronograma cumprido</p>
          <p className="text-xs text-muted">
            {doneTasks}/{totalTasks} tarefas
          </p>
        </Card>
        <Card>
          <p className="text-2xl font-bold text-primary">{pctLiteratura}%</p>
          <p className="text-sm">Literatura lida</p>
          <p className="text-xs text-muted">
            {livrosLidos}/{totalLivros} obras
          </p>
        </Card>
      </section>
    </div>
  );
}
