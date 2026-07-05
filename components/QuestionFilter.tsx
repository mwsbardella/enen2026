"use client";

import { useState, type ReactNode } from "react";

// Filtro client-side (sem refazer o servidor): um checkbox liga a classe
// `qf-only` no container, e o CSS esconde as questões sem resolução
// (data-has-sol="0"). As questões já vêm renderizadas do servidor.
export default function QuestionFilter({
  total,
  withSol,
  children,
}: {
  total: number;
  withSol: number;
  children: ReactNode;
}) {
  const [only, setOnly] = useState(false);

  return (
    <div className="space-y-3">
      {withSol > 0 && (
        <label className="flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm">
          <input
            type="checkbox"
            checked={only}
            onChange={(e) => setOnly(e.target.checked)}
          />
          <span>
            Somente questões com resolução{" "}
            <span className="text-muted">
              ({withSol} de {total})
            </span>
          </span>
        </label>
      )}
      <div className={`space-y-3 ${only ? "qf-only" : ""}`}>{children}</div>
    </div>
  );
}
