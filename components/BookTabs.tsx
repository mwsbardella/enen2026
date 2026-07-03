"use client";

import { useState, type ReactNode } from "react";

const TABS = [
  { id: "visao", label: "Visão geral" },
  { id: "completo", label: "Resumo completo" },
] as const;

type TabId = (typeof TABS)[number]["id"];

// Abas da página da obra: "Visão geral" (resumo curto do banco) e
// "Resumo completo" (estático em lib/resumos-completos.ts). Os dois painéis
// chegam já renderizados do servidor; aqui só alternamos a visibilidade.
export default function BookTabs({
  visaoGeral,
  resumoCompleto,
}: {
  visaoGeral: ReactNode;
  resumoCompleto: ReactNode;
}) {
  const [tab, setTab] = useState<TabId>("visao");

  return (
    <div className="rounded-2xl border border-border bg-surface">
      <div
        role="tablist"
        className="flex gap-1 border-b border-border p-2"
      >
        {TABS.map((t) => (
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
      <div className="p-4 md:p-6">
        <div hidden={tab !== "visao"}>{visaoGeral}</div>
        <div hidden={tab !== "completo"}>{resumoCompleto}</div>
      </div>
    </div>
  );
}
