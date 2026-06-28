import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { PageTitle } from "@/components/ui";
import { corDaArea } from "@/lib/subjects";

export const dynamic = "force-dynamic";

export default async function MateriaisPage() {
  const subjects = await prisma.subject.findMany({
    orderBy: { ordem: "asc" },
    include: { topics: { orderBy: { ordem: "asc" } } },
  });

  return (
    <div className="space-y-6">
      <PageTitle
        title="Materiais de estudo"
        subtitle="Resumos próprios + links curados para cada tópico."
      />
      {subjects.map((s) => (
        <section key={s.id}>
          <h2
            className="mb-2 flex items-center gap-2 text-lg font-bold"
            style={{ color: s.cor }}
          >
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: s.cor }}
            />
            {s.nome}
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {s.topics.map((t) => (
              <Link
                key={t.id}
                href={`/materiais/${t.slug}`}
                className="rounded-xl border border-border bg-surface p-3 transition-colors hover:border-primary"
                style={{ borderLeft: `3px solid ${corDaArea(s.slug)}` }}
              >
                <p className="font-medium">{t.titulo}</p>
                {t.descricao && (
                  <p className="mt-0.5 text-sm text-muted">{t.descricao}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
