"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { EnrichedTask } from "@/lib/tasks";
import TaskList from "./TaskList";
import WeekTaskForm, { type CronogramaOptions } from "./WeekTaskForm";
import { Pill } from "./ui";

export type WeekView = {
  id: string;
  titulo: string;
  foco: string;
  ordem: number;
  origem: string;
  dataInicio: string | null;
  dataFim: string | null;
  atual: boolean;
  tasks: EnrichedTask[];
};

const inputCls =
  "w-full rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm outline-none focus:border-primary";

function fmt(d: string | null): string | null {
  if (!d) return null;
  const [y, m, dia] = d.split("-");
  return `${dia}/${m}/${y.slice(2)}`;
}

export default function CronogramaBoard({
  weeks,
  options,
}: {
  weeks: WeekView[];
  options: CronogramaOptions;
}) {
  const router = useRouter();
  const [addandoSemana, setAddandoSemana] = useState(false);
  const [editandoSemana, setEditandoSemana] = useState<string | null>(null);
  const [addandoItem, setAddandoItem] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function postWeek(payload: Record<string, unknown>) {
    setBusy(true);
    try {
      const res = await fetch("/api/weeks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("falhou");
      router.refresh();
      return true;
    } catch {
      return false;
    } finally {
      setBusy(false);
    }
  }

  async function excluirSemana(id: string) {
    if (busy) return;
    if (!confirm("Excluir esta semana e todos os seus itens?")) return;
    await postWeek({ id, delete: true });
  }

  return (
    <div className="space-y-6">
      {weeks.map((w) => {
        const total = w.tasks.length;
        const feitas = w.tasks.filter((t) => t.done).length;
        const periodo =
          fmt(w.dataInicio) && fmt(w.dataFim)
            ? `${fmt(w.dataInicio)} – ${fmt(w.dataFim)}`
            : null;
        return (
          <section
            key={w.id}
            className={`rounded-2xl border p-4 ${
              w.atual ? "border-primary bg-surface" : "border-border bg-surface/60"
            }`}
          >
            <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-bold">{w.titulo}</h2>
                  {w.atual && <Pill tone="success">atual</Pill>}
                  {w.origem === "usuario" && <Pill tone="muted">minha</Pill>}
                </div>
                {w.foco && <p className="text-sm text-muted">🎯 {w.foco}</p>}
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  {periodo && <p className="text-xs text-muted">{periodo}</p>}
                  <p className="text-sm font-medium">
                    {feitas}/{total} concluídas
                  </p>
                </div>
                <button
                  onClick={() => setEditandoSemana(editandoSemana === w.id ? null : w.id)}
                  title="Editar semana"
                  className="rounded-lg border border-border bg-surface-2 px-2 py-1.5 text-sm text-muted hover:border-primary"
                >
                  ✎
                </button>
                <button
                  onClick={() => excluirSemana(w.id)}
                  disabled={busy}
                  title="Excluir semana"
                  className="rounded-lg border border-border bg-surface-2 px-2 py-1.5 text-sm text-muted hover:border-danger hover:text-danger disabled:opacity-50"
                >
                  🗑
                </button>
              </div>
            </div>

            {editandoSemana === w.id && (
              <WeekForm
                initial={w}
                busy={busy}
                onSave={async (data) => {
                  const ok = await postWeek({ id: w.id, ...data });
                  if (ok) setEditandoSemana(null);
                }}
                onCancel={() => setEditandoSemana(null)}
              />
            )}

            <TaskList tasks={w.tasks} weekId={w.id} options={options} editable />

            {addandoItem === w.id ? (
              <WeekTaskForm
                weekId={w.id}
                options={options}
                onClose={() => setAddandoItem(null)}
              />
            ) : (
              <button
                onClick={() => setAddandoItem(w.id)}
                className="mt-2 rounded-lg border border-dashed border-border px-3 py-2 text-sm text-muted hover:border-primary hover:text-primary"
              >
                ➕ Adicionar item
              </button>
            )}
          </section>
        );
      })}

      {addandoSemana ? (
        <WeekForm
          busy={busy}
          onSave={async (data) => {
            const ok = await postWeek(data);
            if (ok) setAddandoSemana(false);
          }}
          onCancel={() => setAddandoSemana(false)}
        />
      ) : (
        <button
          onClick={() => setAddandoSemana(true)}
          className="w-full rounded-2xl border border-dashed border-border px-4 py-3 text-sm font-medium text-muted hover:border-primary hover:text-primary"
        >
          ➕ Adicionar semana
        </button>
      )}
    </div>
  );
}

// Formulário de semana (criar/editar): nome, foco e período opcional.
function WeekForm({
  initial,
  busy,
  onSave,
  onCancel,
}: {
  initial?: WeekView;
  busy: boolean;
  onSave: (data: Record<string, unknown>) => void;
  onCancel: () => void;
}) {
  const [titulo, setTitulo] = useState(initial?.titulo ?? "");
  const [foco, setFoco] = useState(initial?.foco ?? "");
  const [dataInicio, setDataInicio] = useState(initial?.dataInicio ?? "");
  const [dataFim, setDataFim] = useState(initial?.dataFim ?? "");

  return (
    <div className="mb-3 rounded-xl border border-primary/40 bg-surface-2 p-3">
      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-xs font-semibold text-muted">Nome da semana</label>
          <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Ex.: Semana 1" className={inputCls} />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-muted">Foco (opcional)</label>
          <input value={foco} onChange={(e) => setFoco(e.target.value)} placeholder="Ex.: Geometria + Redação" className={inputCls} />
        </div>
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="mb-1 block text-xs font-semibold text-muted">Início (opcional)</label>
            <input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} className={inputCls} />
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-xs font-semibold text-muted">Fim (opcional)</label>
            <input type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} className={inputCls} />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() =>
              onSave({
                titulo: titulo.trim() || "Nova semana",
                foco,
                dataInicio: dataInicio || null,
                dataFim: dataFim || null,
              })
            }
            disabled={busy}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-background hover:opacity-90 disabled:opacity-50"
          >
            {busy ? "Salvando…" : initial ? "Salvar" : "Adicionar semana"}
          </button>
          <button
            onClick={onCancel}
            disabled={busy}
            className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-muted hover:border-primary"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
