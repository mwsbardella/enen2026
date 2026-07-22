import Link from "next/link";
import { PageTitle } from "@/components/ui";
import { corDaArea, nomeDaArea } from "@/lib/subjects";
import { materiaisApoio } from "@/lib/apoio";

export const dynamic = "force-dynamic";

export default function ApoioPage() {
  return (
    <div className="space-y-6">
      <PageTitle
        title="Apoio"
        subtitle="Materiais de consulta rápida (cola) para as matérias mais difíceis — bata o olho durante os estudos."
      />
      <div className="grid gap-2 sm:grid-cols-2">
        {materiaisApoio.map((m) => {
          const cor = corDaArea(m.area);
          return (
            <Link
              key={m.slug}
              href={`/apoio/${m.slug}`}
              className="rounded-xl border border-border bg-surface p-3 transition-colors hover:border-primary"
              style={{ borderLeft: `3px solid ${cor}` }}
            >
              <p className="flex items-center gap-2 font-medium">
                <span className="text-lg">{m.icon}</span>
                {m.titulo}
              </p>
              <p className="mt-0.5 text-sm text-muted">{m.resumo}</p>
              <span
                className="mt-2 inline-block rounded-full px-2 py-0.5 text-xs font-medium"
                style={{ backgroundColor: `${cor}22`, color: cor }}
              >
                {nomeDaArea(m.area)}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
