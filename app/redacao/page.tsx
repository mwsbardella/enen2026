import { prisma } from "@/lib/prisma";
import { parseJson } from "@/lib/json";
import { PageTitle, Card } from "@/components/ui";
import RedacaoEditor from "@/components/RedacaoEditor";
import CompetenciaGuide from "@/components/CompetenciaGuide";
import RepertorioBank, { type Rep } from "@/components/RepertorioBank";
import RedacoesPassadas from "@/components/RedacoesPassadas";
import { temasPassados, redacoesModelo } from "@/lib/temas-redacao-passados";

export const dynamic = "force-dynamic";

export default async function RedacaoPage() {
  const [repertoriosRaw, historico] = await Promise.all([
    prisma.repertorio.findMany({ orderBy: { categoria: "asc" } }),
    prisma.redacaoEntry.findMany({ orderBy: { criadoEm: "desc" }, take: 10 }),
  ]);

  const repertorios: Rep[] = repertoriosRaw.map((r) => ({
    id: r.id,
    categoria: r.categoria,
    titulo: r.titulo,
    conteudo: r.conteudo,
    temas: parseJson<string[]>(r.temas, []),
    fonte: r.fonte,
  }));

  return (
    <div className="space-y-6">
      <PageTitle
        title="Redação"
        subtitle="Escreva, autoavalie pelas 5 competências e consulte repertórios coringa."
      />

      <CompetenciaGuide />

      <section>
        <h2 className="mb-2 text-lg font-bold">Escrever redação</h2>
        <RedacaoEditor />
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold">Temas de redações anteriores</h2>
        <p className="mb-2 text-sm text-muted">
          Temas do ENEM em anos anteriores, com o recorte que a banca cobrava, e
          redações-modelo comentadas no padrão nota 1000.
        </p>
        <RedacoesPassadas temas={temasPassados} modelos={redacoesModelo} />
      </section>

      <section>
        <h2 className="mb-2 text-lg font-bold">Banco de repertórios coringa</h2>
        <RepertorioBank itens={repertorios} />
      </section>

      {historico.length > 0 && (
        <section>
          <h2 className="mb-2 text-lg font-bold">Suas redações</h2>
          <ul className="space-y-2">
            {historico.map((r) => (
              <li key={r.id}>
                <Card>
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate font-medium">{r.tema}</p>
                      <p className="text-xs text-muted">
                        {new Intl.DateTimeFormat("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }).format(r.criadoEm)}
                      </p>
                    </div>
                    <span className="flex-none text-sm font-bold text-primary">
                      {r.notaTotal}/1000
                    </span>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
