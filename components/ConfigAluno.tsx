"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "./ui";
import { IDIOMAS, IDIOMA_LABEL, type Idioma } from "@/lib/idioma";

const inputCls =
  "w-full rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm outline-none focus:border-primary";

// Card do dashboard: informar o nome do aluno e a língua estrangeira que ele vai
// fazer na prova, e refazer o cronograma sugerido com base no tempo que falta
// para o ENEM.
export default function ConfigAluno({
  nomeAtual,
  idiomaAtual,
}: {
  nomeAtual: string;
  idiomaAtual: Idioma;
}) {
  const router = useRouter();
  const [nome, setNome] = useState(nomeAtual);
  const [idioma, setIdioma] = useState<Idioma>(idiomaAtual);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function salvar() {
    if (busy) return;
    if (
      !confirm(
        "Isto vai refazer o cronograma sugerido a partir do tempo que falta para o ENEM, " +
          `usando ${IDIOMA_LABEL[idioma]} como língua estrangeira. ` +
          "As semanas que você mesmo criou são mantidas. Continuar?",
      )
    ) {
      return;
    }
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/aluno", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nome.trim() || undefined, idioma }),
      });
      if (!res.ok) throw new Error("falhou");
      const data = (await res.json()) as { semanas: number };
      setMsg(`Cronograma refeito em ${data.semanas} semana(s) até a prova. ✓`);
      router.refresh();
    } catch {
      setMsg("Não foi possível salvar. Tente novamente.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Card>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label className="mb-1 block text-xs font-semibold text-muted">
            Nome do aluno
          </label>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do aluno"
            className={inputCls}
          />
        </div>
        <div className="sm:w-44">
          <label className="mb-1 block text-xs font-semibold text-muted">
            Língua estrangeira
          </label>
          <select
            value={idioma}
            onChange={(e) => setIdioma(e.target.value as Idioma)}
            className={inputCls}
          >
            {IDIOMAS.map((i) => (
              <option key={i} value={i}>
                {IDIOMA_LABEL[i]}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={salvar}
          disabled={busy}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-background hover:opacity-90 disabled:opacity-50"
        >
          {busy ? "Refazendo…" : "Salvar e refazer cronograma ↻"}
        </button>
      </div>
      <p className="mt-2 text-xs text-muted">
        Recalcula as semanas do cronograma sugerido conforme o tempo restante até o ENEM.
        A língua estrangeira escolhida define o material do cronograma e filtra as
        questões dos simulados — você faz só um idioma na prova.
      </p>
      {msg && <p className="mt-2 text-sm text-primary">{msg}</p>}
    </Card>
  );
}
