"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { EnrichedTask, TaskRef } from "@/lib/tasks";

export type CronogramaOptions = {
  topicsByArea: {
    area: string;
    areaNome: string;
    topics: { id: string; titulo: string }[];
  }[];
  books: { id: string; titulo: string }[];
  exams: { id: string; titulo: string }[];
};

const TIPOS: { value: string; label: string; ajuda: string }[] = [
  { value: "LER_MATERIAL", label: "Ler / Estudar", ajuda: "Estudar um ou mais materiais. Conclui quando todos estiverem estudados." },
  { value: "LER_LIVRO", label: "Literatura", ajuda: "Ler um ou mais livros. Conclui quando todos estiverem lidos." },
  { value: "RESPONDER_EXAM", label: "Simulado", ajuda: "Resolver uma prova/simulado. Marcação manual." },
  { value: "ESCREVER_REDACAO", label: "Escrever redação", ajuda: "Abre o editor de redação. Marcação manual." },
  { value: "REVISAR", label: "Revisar", ajuda: "Revisar materiais já estudados. Marcação manual." },
];

const inputCls =
  "w-full rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm outline-none focus:border-primary";

function refIdsOfKind(task: EnrichedTask | undefined, kind: TaskRef["kind"]): string[] {
  return (task?.refs ?? []).filter((r) => r.kind === kind).map((r) => r.id);
}

// Formulário de criação/edição de um item de semana. Salva via /api/week-tasks.
export default function WeekTaskForm({
  weekId,
  options,
  task,
  onClose,
}: {
  weekId: string;
  options: CronogramaOptions;
  task?: EnrichedTask;
  onClose: () => void;
}) {
  const router = useRouter();
  const [titulo, setTitulo] = useState(task?.titulo ?? "");
  const [tipo, setTipo] = useState(task?.tipo ?? "LER_MATERIAL");
  const [topicIds, setTopicIds] = useState<string[]>(refIdsOfKind(task, "topic"));
  const [bookIds, setBookIds] = useState<string[]>(refIdsOfKind(task, "book"));
  const [examId, setExamId] = useState<string>(refIdsOfKind(task, "exam")[0] ?? "");
  const [dataInicio, setDataInicio] = useState(task?.dataInicio ?? "");
  const [dataFim, setDataFim] = useState(task?.dataFim ?? "");
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const usaTopicos = tipo === "LER_MATERIAL" || tipo === "REVISAR";
  const usaLivros = tipo === "LER_LIVRO";
  const usaExam = tipo === "RESPONDER_EXAM";

  function toggle(list: string[], set: (v: string[]) => void, id: string) {
    set(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  }

  function buildRefs(): TaskRef[] {
    if (usaTopicos) return topicIds.map((id) => ({ kind: "topic", id }));
    if (usaLivros) return bookIds.map((id) => ({ kind: "book", id }));
    if (usaExam) return examId ? [{ kind: "exam", id: examId }] : [];
    return [];
  }

  async function salvar() {
    setErro(null);
    if (!titulo.trim()) {
      setErro("Dê um nome ao item.");
      return;
    }
    const refs = buildRefs();
    if ((usaTopicos || usaLivros) && refs.length === 0) {
      setErro("Selecione ao menos um material.");
      return;
    }
    setSalvando(true);
    try {
      const res = await fetch("/api/week-tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: task?.id,
          weekId,
          titulo: titulo.trim(),
          tipo,
          refs,
          dataInicio: dataInicio || null,
          dataFim: dataFim || null,
        }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error ?? "falhou");
      router.refresh();
      onClose();
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao salvar.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <div className="mt-2 rounded-xl border border-primary/40 bg-surface-2 p-3">
      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-xs font-semibold text-muted">Nome do item</label>
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ex.: Ler Geometria plana e espacial"
            className={inputCls}
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-muted">Tipo</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} className={inputCls}>
            {TIPOS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-muted">
            {TIPOS.find((t) => t.value === tipo)?.ajuda}
          </p>
        </div>

        {usaTopicos && (
          <div>
            <label className="mb-1 block text-xs font-semibold text-muted">
              Materiais ({topicIds.length} selecionados)
            </label>
            <div className="max-h-56 overflow-y-auto rounded-lg border border-border p-2">
              {options.topicsByArea.map((g) => (
                <div key={g.area} className="mb-2">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-muted">
                    {g.areaNome}
                  </p>
                  {g.topics.map((t) => (
                    <label key={t.id} className="flex cursor-pointer items-center gap-2 py-0.5 text-sm">
                      <input
                        type="checkbox"
                        checked={topicIds.includes(t.id)}
                        onChange={() => toggle(topicIds, setTopicIds, t.id)}
                      />
                      <span>{t.titulo}</span>
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {usaLivros && (
          <div>
            <label className="mb-1 block text-xs font-semibold text-muted">
              Livros ({bookIds.length} selecionados)
            </label>
            <div className="max-h-56 overflow-y-auto rounded-lg border border-border p-2">
              {options.books.map((b) => (
                <label key={b.id} className="flex cursor-pointer items-center gap-2 py-0.5 text-sm">
                  <input
                    type="checkbox"
                    checked={bookIds.includes(b.id)}
                    onChange={() => toggle(bookIds, setBookIds, b.id)}
                  />
                  <span>{b.titulo}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {usaExam && (
          <div>
            <label className="mb-1 block text-xs font-semibold text-muted">Prova / Simulado</label>
            <select value={examId} onChange={(e) => setExamId(e.target.value)} className={inputCls}>
              <option value="">— nenhum (marcação manual) —</option>
              {options.exams.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.titulo}
                </option>
              ))}
            </select>
          </div>
        )}

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

        {erro && <p className="text-sm text-danger">{erro}</p>}

        <div className="flex gap-2">
          <button
            onClick={salvar}
            disabled={salvando}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-background hover:opacity-90 disabled:opacity-50"
          >
            {salvando ? "Salvando…" : task ? "Salvar" : "Adicionar item"}
          </button>
          <button
            onClick={onClose}
            disabled={salvando}
            className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-muted hover:border-primary"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
