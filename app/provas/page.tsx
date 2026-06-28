import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { parseJson } from "@/lib/json";
import { SUBJECTS, nomeDaArea } from "@/lib/subjects";
import { PageTitle, Card, Pill } from "@/components/ui";
import SimuladoBuilder from "@/components/SimuladoBuilder";

export const dynamic = "force-dynamic";

function qtd(questionIds: string): number {
  return parseJson<string[]>(questionIds, []).length;
}

export default async function ProvasPage() {
  const [exams, anosRaw, attempts] = await Promise.all([
    prisma.exam.findMany({
      where: { slug: { not: null } }, // provas/simulados do seed (não os montados sob demanda)
      orderBy: [{ tipo: "asc" }, { year: "desc" }, { titulo: "asc" }],
    }),
    prisma.question.findMany({ distinct: ["year"], select: { year: true }, orderBy: { year: "desc" } }),
    prisma.attempt.findMany({
      orderBy: { iniciadoEm: "desc" },
      take: 5,
      include: { exam: { select: { titulo: true } } },
    }),
  ]);

  const oficiais = exams.filter((e) => e.tipo === "PROVA_OFICIAL");
  const tematicos = exams.filter((e) => e.tipo === "SIMULADO_TEMATICO");
  const anos = anosRaw.map((a) => a.year);

  return (
    <div className="space-y-6">
      <PageTitle
        title="Provas e simulados"
        subtitle="Resolva questões reais do ENEM com correção automática."
      />

      <SimuladoBuilder
        areas={SUBJECTS.filter((s) => s.slug !== "redacao").map((s) => ({
          slug: s.slug,
          nome: s.nome,
        }))}
        anos={anos}
      />

      <section>
        <h2 className="mb-2 text-lg font-bold">Provas oficiais por ano</h2>
        {oficiais.length === 0 ? (
          <Card>
            <p className="text-sm text-muted">
              Nenhuma questão importada ainda. Rode{" "}
              <code className="rounded bg-surface-2 px-1">npm run import</code>.
            </p>
          </Card>
        ) : (
          <div className="grid gap-2 sm:grid-cols-2">
            {oficiais.map((e) => (
              <Link
                key={e.id}
                href={`/provas/${e.id}`}
                className="rounded-xl border border-border bg-surface p-3 transition-colors hover:border-primary"
              >
                <p className="font-medium">{e.titulo}</p>
                <p className="mt-1 text-xs text-muted">{qtd(e.questionIds)} questões</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold">Simulados temáticos</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {tematicos.map((e) => (
            <Link
              key={e.id}
              href={`/provas/${e.id}`}
              className="rounded-xl border border-border bg-surface p-3 transition-colors hover:border-primary"
            >
              <p className="font-medium">{e.titulo}</p>
              <p className="mt-1 text-xs text-muted">{qtd(e.questionIds)} questões</p>
            </Link>
          ))}
        </div>
      </section>

      {attempts.length > 0 && (
        <section>
          <h2 className="mb-2 text-lg font-bold">Tentativas recentes</h2>
          <ul className="space-y-2">
            {attempts.map((a) => (
              <li
                key={a.id}
                className="flex items-center justify-between rounded-xl border border-border bg-surface p-3 text-sm"
              >
                <span>{a.exam.titulo}</span>
                <Pill tone={a.acertos / a.total >= 0.6 ? "success" : "muted"}>
                  {a.acertos}/{a.total}
                </Pill>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
