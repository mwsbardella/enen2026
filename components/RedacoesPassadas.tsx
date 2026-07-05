"use client";

import { useState } from "react";
import Markdown from "@/components/Markdown";
import type { TemaPassado, RedacaoModelo } from "@/lib/temas-redacao-passados";

const SUBTABS = [
  { id: "temas", label: "Temas anteriores" },
  { id: "modelo", label: "Redação nota 1000" },
] as const;

type SubTabId = (typeof SUBTABS)[number]["id"];

// Aba "Redações passadas": temas de anos anteriores do ENEM (com explicação
// do recorte de cada um) e redações-modelo comentadas no padrão nota 1000.
// Os textos são markdown estático (lib/temas-redacao-passados.ts); aqui só
// controlamos qual subaba/acordeão está aberto.
export default function RedacoesPassadas({
  temas,
  modelos,
}: {
  temas: TemaPassado[];
  modelos: RedacaoModelo[];
}) {
  const [tab, setTab] = useState<SubTabId>("temas");
  const [temaAberto, setTemaAberto] = useState<number | null>(temas[0]?.ano ?? null);
  const [modeloAberto, setModeloAberto] = useState<number | null>(
    modelos[0]?.ano ?? null,
  );

  return (
    <div className="rounded-2xl border border-border bg-surface">
      <div role="tablist" className="flex gap-1 border-b border-border p-2">
        {SUBTABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
              tab === t.id
                ? "bg-surface-2 font-semibold text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-3 md:p-4">
        {tab === "temas" && (
          <ul className="space-y-2">
            {temas.map((t) => {
              const aberto = temaAberto === t.ano;
              return (
                <li
                  key={t.ano}
                  className="overflow-hidden rounded-xl border border-border bg-surface"
                >
                  <button
                    onClick={() => setTemaAberto(aberto ? null : t.ano)}
                    className="flex w-full items-start gap-3 px-3 py-3 text-left"
                  >
                    <span className="flex-none rounded-lg bg-primary/15 px-2 py-1 text-xs font-bold text-primary">
                      {t.ano}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-snug">
                        {t.tema}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted">{t.eixo}</span>
                    </span>
                    <span className="flex-none text-muted">{aberto ? "−" : "+"}</span>
                  </button>
                  {aberto && (
                    <div className="border-t border-border px-3 py-3">
                      <Markdown>{t.explicacao}</Markdown>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {tab === "modelo" && (
          <div className="space-y-3">
            <p className="text-xs text-muted">
              Textos autorais de exemplo, no padrão de uma redação nota 1000. Estude a
              estrutura, o repertório e a proposta de intervenção — não decore.
            </p>
            {modelos.map((m) => {
              const aberto = modeloAberto === m.ano;
              return (
                <div
                  key={m.ano}
                  className="overflow-hidden rounded-xl border border-border bg-surface"
                >
                  <button
                    onClick={() => setModeloAberto(aberto ? null : m.ano)}
                    className="flex w-full items-start gap-3 px-3 py-3 text-left"
                  >
                    <span className="flex-none rounded-lg bg-primary/15 px-2 py-1 text-xs font-bold text-primary">
                      {m.ano}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-snug">
                        “{m.titulo}”
                      </span>
                      <span className="mt-0.5 block text-xs text-muted">{m.tema}</span>
                    </span>
                    <span className="flex-none text-muted">{aberto ? "−" : "+"}</span>
                  </button>
                  {aberto && (
                    <div className="space-y-4 border-t border-border px-3 py-4">
                      <Markdown>{m.texto}</Markdown>
                      <div className="rounded-xl border border-border bg-surface-2 p-3">
                        <Markdown>{m.comentario}</Markdown>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
