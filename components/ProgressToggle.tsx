"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProgressToggle({
  tipo,
  refId,
  initialDone,
  doneLabel = "Concluído",
  todoLabel = "Marcar como concluído",
}: {
  tipo: string;
  refId: string;
  initialDone: boolean;
  doneLabel?: string;
  todoLabel?: string;
}) {
  const [done, setDone] = useState(initialDone);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function toggle() {
    if (loading) return;
    const novo = !done;
    setDone(novo); // otimista
    setLoading(true);
    try {
      const res = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo, refId, concluido: novo }),
      });
      if (!res.ok) throw new Error("falhou");
      router.refresh();
    } catch {
      setDone(!novo); // reverte
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm transition-colors disabled:opacity-50 ${
        done
          ? "border-success bg-success/15 text-success"
          : "border-border bg-surface-2 text-muted hover:border-primary"
      }`}
    >
      <span>{done ? "✓" : "○"}</span>
      {done ? doneLabel : todoLabel}
    </button>
  );
}
