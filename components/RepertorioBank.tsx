"use client";

import { useMemo, useState } from "react";

export type Rep = {
  id: string;
  categoria: string;
  titulo: string;
  conteudo: string;
  temas: string[];
  fonte: string | null;
};

const CAT_LABEL: Record<string, string> = {
  lei: "Lei",
  filosofo: "Pensador",
  obra: "Obra",
  dado: "Dado/Fato",
  citacao: "Citação",
};

export default function RepertorioBank({ itens }: { itens: Rep[] }) {
  const [q, setQ] = useState("");

  const filtrados = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return itens;
    return itens.filter(
      (r) =>
        r.titulo.toLowerCase().includes(t) ||
        r.conteudo.toLowerCase().includes(t) ||
        r.temas.some((x) => x.toLowerCase().includes(t)),
    );
  }, [q, itens]);

  return (
    <div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Buscar repertório por tema (ex.: tecnologia, educação, mulher)..."
        className="mb-3 w-full rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm outline-none focus:border-primary"
      />
      <div className="space-y-2">
        {filtrados.map((r) => (
          <div key={r.id} className="rounded-xl border border-border bg-surface p-3">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-medium text-primary">
                {CAT_LABEL[r.categoria] ?? r.categoria}
              </span>
              <p className="font-semibold">{r.titulo}</p>
            </div>
            <p className="mt-1 text-sm text-muted">{r.conteudo}</p>
            {r.fonte && (
              <p className="mt-1 text-xs italic text-muted">Fonte: {r.fonte}</p>
            )}
          </div>
        ))}
        {filtrados.length === 0 && (
          <p className="text-sm text-muted">Nenhum repertório encontrado para “{q}”.</p>
        )}
      </div>
    </div>
  );
}
