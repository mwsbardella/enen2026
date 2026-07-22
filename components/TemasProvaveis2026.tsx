"use client";

import { useState } from "react";
import Markdown from "@/components/Markdown";
import { Pill, ExternalLinks } from "@/components/ui";
import type { TemaProvavel2026 } from "@/lib/temas-redacao-2026";

// Lista expansível dos temas prováveis de 2026. Espelha RedacoesPassadas:
// os textos são markdown estático (lib/temas-redacao-2026.ts); aqui só
// controlamos qual tema está aberto.
export default function TemasProvaveis2026({
  temas,
}: {
  temas: TemaProvavel2026[];
}) {
  const [aberto, setAberto] = useState<string | null>(temas[0]?.id ?? null);

  return (
    <ul className="space-y-2">
      {temas.map((t, i) => {
        const isAberto = aberto === t.id;
        return (
          <li
            key={t.id}
            className="overflow-hidden rounded-xl border border-border bg-surface"
          >
            <button
              onClick={() => setAberto(isAberto ? null : t.id)}
              className="flex w-full items-start gap-3 px-3 py-3 text-left"
            >
              <span className="flex-none rounded-lg bg-primary/15 px-2 py-1 text-xs font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold leading-snug">
                  {t.tema}
                </span>
                <span className="mt-1 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-muted">{t.eixo}</span>
                  <Pill tone={t.probabilidade === "alta" ? "danger" : "muted"}>
                    {t.probabilidade === "alta"
                      ? "probabilidade alta"
                      : "probabilidade média"}
                  </Pill>
                </span>
              </span>
              <span className="flex-none text-muted">{isAberto ? "−" : "+"}</span>
            </button>

            {isAberto && (
              <div className="space-y-4 border-t border-border px-3 py-4">
                <p className="text-sm text-muted">
                  <span className="font-semibold text-foreground">
                    Por que é provável:{" "}
                  </span>
                  {t.porQueProvavel}
                </p>

                <div>
                  <h4 className="mb-1 text-sm font-semibold">Como se preparar</h4>
                  <Markdown>{t.comoSePreparar}</Markdown>
                </div>

                <div className="rounded-xl border border-border bg-surface-2 p-3">
                  <h4 className="mb-2 text-sm font-semibold">
                    Repertórios coringa para este tema
                  </h4>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
                    {t.repertorios.map((r, j) => (
                      <li key={j}>{r}</li>
                    ))}
                  </ul>
                </div>

                <ExternalLinks links={t.links} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
