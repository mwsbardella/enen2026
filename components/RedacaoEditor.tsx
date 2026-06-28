"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const COMPS = ["c1", "c2", "c3", "c4", "c5"] as const;
type CompKey = (typeof COMPS)[number];

export default function RedacaoEditor({ temaSugerido }: { temaSugerido?: string }) {
  const [tema, setTema] = useState(temaSugerido ?? "");
  const [texto, setTexto] = useState("");
  const [notas, setNotas] = useState<Record<CompKey, number>>({
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
  });
  const [salvando, setSalvando] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const router = useRouter();

  const { palavras, linhas } = useMemo(() => {
    const t = texto.trim();
    return {
      palavras: t ? t.split(/\s+/).length : 0,
      linhas: texto ? texto.split("\n").length : 0,
    };
  }, [texto]);

  const total = COMPS.reduce((s, k) => s + notas[k], 0);

  async function salvar() {
    if (!tema.trim() || !texto.trim()) {
      setMsg("Preencha o tema e o texto.");
      return;
    }
    setSalvando(true);
    setMsg(null);
    try {
      const res = await fetch("/api/redacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tema, textoMarkdown: texto, autoavaliacao: notas }),
      });
      if (!res.ok) throw new Error("Erro ao salvar");
      setMsg("Redação salva! ✓");
      setTexto("");
      setNotas({ c1: 0, c2: 0, c3: 0, c4: 0, c5: 0 });
      router.refresh();
    } catch (e) {
      setMsg((e as Error).message);
    } finally {
      setSalvando(false);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-muted">Tema</label>
        <input
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          placeholder="Ex.: Desafios para a valorização da leitura no Brasil"
          className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <div className="mb-1 flex items-center justify-between">
          <label className="text-sm font-medium text-muted">Sua redação</label>
          <span className="text-xs text-muted">
            {palavras} palavras · {linhas} linhas
          </span>
        </div>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={16}
          placeholder="Escreva aqui sua redação dissertativo-argumentativa..."
          className="w-full resize-y rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm leading-relaxed outline-none focus:border-primary"
        />
      </div>

      <div className="rounded-xl border border-border bg-surface p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold">Autoavaliação (0–200 por competência)</h3>
          <span className="text-sm font-bold text-primary">Total: {total}/1000</span>
        </div>
        <div className="space-y-3">
          {COMPS.map((k, i) => (
            <div key={k}>
              <div className="flex items-center justify-between text-xs text-muted">
                <span>Competência {i + 1}</span>
                <span className="font-mono">{notas[k]}</span>
              </div>
              <input
                type="range"
                min={0}
                max={200}
                step={40}
                value={notas[k]}
                onChange={(e) =>
                  setNotas((n) => ({ ...n, [k]: Number(e.target.value) }))
                }
                className="w-full accent-[var(--primary)]"
              />
            </div>
          ))}
        </div>
      </div>

      {msg && <p className="text-sm text-muted">{msg}</p>}

      <button
        onClick={salvar}
        disabled={salvando}
        className="w-full rounded-xl bg-primary px-4 py-3 font-semibold text-background hover:opacity-90 disabled:opacity-50"
      >
        {salvando ? "Salvando..." : "Salvar redação"}
      </button>
    </div>
  );
}
