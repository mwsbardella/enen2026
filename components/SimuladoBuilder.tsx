"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type AreaOpt = { slug: string; nome: string };

export default function SimuladoBuilder({
  areas,
  anos,
}: {
  areas: AreaOpt[];
  anos: number[];
}) {
  const [area, setArea] = useState("");
  const [year, setYear] = useState("");
  const [quantidade, setQuantidade] = useState(10);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const router = useRouter();

  async function montar() {
    setLoading(true);
    setErro(null);
    try {
      const res = await fetch("/api/exams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          area: area || undefined,
          year: year ? Number(year) : undefined,
          quantidade,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao montar simulado");
      router.push(`/provas/${data.examId}?cronometro=1`);
    } catch (e) {
      setErro((e as Error).message);
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <h2 className="mb-3 text-lg font-bold">Montar simulado temático</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm">
          <span className="mb-1 block text-muted">Área</span>
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2 outline-none focus:border-primary"
          >
            <option value="">Todas</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.nome}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Ano</span>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2 outline-none focus:border-primary"
          >
            <option value="">Todos</option>
            {anos.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">Questões: {quantidade}</span>
          <input
            type="range"
            min={5}
            max={45}
            step={5}
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            className="w-full accent-[var(--primary)]"
          />
        </label>
      </div>
      {erro && <p className="mt-2 text-sm text-danger">{erro}</p>}
      <button
        onClick={montar}
        disabled={loading}
        className="mt-3 w-full rounded-xl bg-primary px-4 py-2.5 font-semibold text-background hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Montando..." : "Montar e iniciar (cronometrado)"}
      </button>
    </div>
  );
}
