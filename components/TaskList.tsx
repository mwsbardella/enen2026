"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { EnrichedTask } from "@/lib/tasks";
import ProgressToggle from "./ProgressToggle";
import WeekTaskForm, { type CronogramaOptions } from "./WeekTaskForm";
import { SubjectBadge } from "./ui";

const TIPO_ICON: Record<string, string> = {
  LER_MATERIAL: "📖",
  RESPONDER_EXAM: "📝",
  ESCREVER_REDACAO: "✍️",
  LER_LIVRO: "📚",
  REVISAR: "🔁",
};

const TIPO_LABEL: Record<string, string> = {
  LER_MATERIAL: "Ler / Estudar",
  RESPONDER_EXAM: "Simulado",
  ESCREVER_REDACAO: "Escrever redação",
  LER_LIVRO: "Literatura",
  REVISAR: "Revisar",
};

export default function TaskList({
  tasks,
  weekId,
  options,
  editable = false,
}: {
  tasks: EnrichedTask[];
  weekId?: string;
  options?: CronogramaOptions;
  editable?: boolean;
}) {
  const podeEditar = editable && !!weekId && !!options;
  const router = useRouter();
  const [editando, setEditando] = useState<string | null>(null);
  const [excluindo, setExcluindo] = useState<string | null>(null);

  async function excluir(id: string) {
    if (excluindo) return;
    setExcluindo(id);
    try {
      const res = await fetch("/api/week-tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, delete: true }),
      });
      if (!res.ok) throw new Error("falhou");
      router.refresh();
    } catch {
      setExcluindo(null);
    }
  }

  if (tasks.length === 0) {
    return <p className="text-sm text-muted">Nenhum item nesta semana ainda.</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((t) => {
        const titulo = (
          <p className={`font-medium ${t.done ? "text-muted line-through" : ""}`}>
            {t.titulo}
          </p>
        );
        return (
          <li key={t.id} className="rounded-xl border border-border bg-surface p-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 flex-1 items-start gap-3">
                <span className="text-lg leading-none">{TIPO_ICON[t.tipo] ?? "•"}</span>
                <div className="min-w-0 flex-1">
                  {t.href ? (
                    <Link href={t.href} className="hover:text-primary">
                      {titulo}
                    </Link>
                  ) : (
                    titulo
                  )}
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-muted">{TIPO_LABEL[t.tipo] ?? t.tipo}</span>
                    {t.subjectSlug && <SubjectBadge slug={t.subjectSlug} />}
                    {t.href && <span className="text-xs text-primary">abrir →</span>}
                  </div>
                </div>
              </div>
              <div className="flex flex-none items-center gap-1">
                {t.gated ? (
                  <GatedStatus done={t.done} />
                ) : (
                  <ProgressToggle
                    tipo="weektask"
                    refId={t.id}
                    initialDone={t.done}
                    doneLabel="Feito"
                    todoLabel="Concluir"
                  />
                )}
                {podeEditar && (
                  <>
                    <button
                      onClick={() => setEditando(editando === t.id ? null : t.id)}
                      title="Editar item"
                      className="rounded-lg border border-border bg-surface-2 px-2 py-1.5 text-sm text-muted hover:border-primary"
                    >
                      ✎
                    </button>
                    <button
                      onClick={() => excluir(t.id)}
                      disabled={excluindo === t.id}
                      title="Excluir item"
                      className="rounded-lg border border-border bg-surface-2 px-2 py-1.5 text-sm text-muted hover:border-danger hover:text-danger disabled:opacity-50"
                    >
                      🗑
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Checklist dos materiais exigidos (itens gated). */}
            {t.gated && t.requirements.length > 0 && (
              <ul className="mt-2 space-y-1 border-t border-border pt-2">
                {t.requirements.map((r) => (
                  <li key={r.href} className="flex items-center gap-2">
                    <Link href={r.href} className="flex items-center gap-2 text-sm hover:text-primary">
                      <span className={r.done ? "text-success" : "text-muted"}>
                        {r.done ? "✓" : "○"}
                      </span>
                      <span className={r.done ? "text-muted line-through" : ""}>{r.label}</span>
                    </Link>
                    {r.area && <SubjectBadge slug={r.area} />}
                  </li>
                ))}
                {!t.done && (
                  <li className="text-xs text-muted">
                    Conclui automaticamente quando todos os materiais estiverem estudados.
                  </li>
                )}
              </ul>
            )}

            {podeEditar && editando === t.id && (
              <WeekTaskForm
                weekId={weekId!}
                options={options!}
                task={t}
                onClose={() => setEditando(null)}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

// Status somente-leitura das tarefas gated (não têm marcação manual).
function GatedStatus({ done }: { done: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm ${
        done
          ? "border-success bg-success/15 text-success"
          : "border-border bg-surface-2 text-muted"
      }`}
    >
      <span>{done ? "✓" : "○"}</span>
      {done ? "Feito" : "Pendente"}
    </span>
  );
}
