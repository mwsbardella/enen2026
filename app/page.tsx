import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ENEM_DIA_1, ENEM_DIA_2, semanaAtualPorData, formatarData } from "@/lib/dates";
import { enrichTasks } from "@/lib/tasks";
import { parseIdioma } from "@/lib/idioma";
import Countdown from "@/components/Countdown";
import TaskList from "@/components/TaskList";
import ConfigAluno from "@/components/ConfigAluno";
import { Card, PageTitle } from "@/components/ui";

export const dynamic = "force-dynamic";

function Indicador({
  valor,
  label,
  hint,
}: {
  valor: string;
  label: string;
  hint?: string;
}) {
  return (
    <Card>
      <p className="text-2xl font-bold text-primary">{valor}</p>
      <p className="text-sm font-medium">{label}</p>
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </Card>
  );
}

export default async function Dashboard() {
  const user = await prisma.user.findFirst();

  const [weeksAll, totalLivros, livrosLidos, attempts] = await Promise.all([
    prisma.week.findMany({
      orderBy: { ordem: "asc" },
      include: { tasks: { orderBy: { ordem: "asc" } } },
    }),
    prisma.book.count(),
    prisma.progress.count({ where: { tipo: "book", concluido: true } }),
    prisma.attempt.findMany({
      where: { finalizadoEm: { not: null }, total: { gt: 0 } },
      orderBy: { iniciadoEm: "asc" },
      select: { acertos: true, total: true },
    }),
  ]);

  // Conclusão derivada (itens de material/livro dependem do conteúdo estudado).
  const enrichedAll = await Promise.all(weeksAll.map((w) => enrichTasks(w.tasks)));
  const allTasks = enrichedAll.flat();
  const totalTasks = allTasks.length;
  const doneTasks = allTasks.filter((t) => t.done).length;
  const pctCronograma = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;
  const medias = attempts.map((a) => (a.acertos / a.total) * 100);
  const mediaSimulados = medias.length
    ? Math.round(medias.reduce((s, v) => s + v, 0) / medias.length)
    : null;
  const ultimas = medias.slice(-3).map((m) => Math.round(m));

  // Semana em destaque = aquela cujo período contém hoje (senão, a primeira).
  const idxAtual = weeksAll.findIndex((w) =>
    semanaAtualPorData(w.dataInicio, w.dataFim),
  );
  const idxDestaque = idxAtual >= 0 ? idxAtual : weeksAll.length ? 0 : -1;
  const semana = idxDestaque >= 0 ? weeksAll[idxDestaque] : null;
  const tasks = idxDestaque >= 0 ? enrichedAll[idxDestaque] : [];

  return (
    <div className="space-y-6">
      <PageTitle
        title={`Olá, ${user?.nome ?? "estudante"} 👋`}
        subtitle="Seu ambiente de estudo ativo para o ENEM 2026."
      />

      <ConfigAluno nomeAtual={user?.nome ?? ""} idiomaAtual={parseIdioma(user?.idioma)} />

      <Card className="bg-gradient-to-br from-surface to-surface-2">
        <p className="text-sm text-muted">Contagem regressiva — 1º dia de prova</p>
        <p className="mb-3 text-sm font-medium">
          {formatarData(ENEM_DIA_1)} (dia 1) · {formatarData(ENEM_DIA_2)} (dia 2) de 2026
        </p>
        <Countdown targetIso={ENEM_DIA_1.toISOString()} />
      </Card>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Indicador
          valor={`${pctCronograma}%`}
          label="Cronograma"
          hint={`${doneTasks}/${totalTasks} tarefas`}
        />
        <Indicador
          valor={`${livrosLidos}/${totalLivros}`}
          label="Livros lidos"
        />
        <Indicador
          valor={mediaSimulados != null ? `${mediaSimulados}%` : "—"}
          label="Média simulados"
          hint={medias.length ? `${medias.length} feitos` : "nenhum ainda"}
        />
        <Indicador
          valor={ultimas.length ? ultimas.map((u) => `${u}%`).join(" · ") : "—"}
          label="Evolução recente"
        />
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold">
            {semana ? `${semana.titulo} em destaque` : "Cronograma"}
          </h2>
          <Link href="/cronograma" className="text-sm text-primary">
            ver tudo →
          </Link>
        </div>
        {semana ? (
          <>
            <p className="mb-3 text-sm text-muted">🎯 Foco: {semana.foco}</p>
            <TaskList tasks={tasks} />
          </>
        ) : (
          <Card>
            <p className="text-sm text-muted">
              O cronograma de 19 semanas está disponível.{" "}
              <Link href="/cronograma" className="text-primary">
                Abrir cronograma
              </Link>
              .
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
