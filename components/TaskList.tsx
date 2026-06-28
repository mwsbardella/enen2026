import Link from "next/link";
import type { EnrichedTask } from "@/lib/tasks";
import ProgressToggle from "./ProgressToggle";
import { SubjectBadge } from "./ui";

const TIPO_ICON: Record<string, string> = {
  LER_MATERIAL: "📖",
  RESPONDER_EXAM: "📝",
  ESCREVER_REDACAO: "✍️",
  LER_LIVRO: "📚",
  REVISAR: "🔁",
};

const TIPO_LABEL: Record<string, string> = {
  LER_MATERIAL: "Ler material",
  RESPONDER_EXAM: "Responder prova",
  ESCREVER_REDACAO: "Escrever redação",
  LER_LIVRO: "Ler livro",
  REVISAR: "Revisar",
};

export default function TaskList({ tasks }: { tasks: EnrichedTask[] }) {
  return (
    <ul className="space-y-2">
      {tasks.map((t) => {
        const inner = (
          <div className="flex items-start gap-3">
            <span className="text-lg leading-none">{TIPO_ICON[t.tipo] ?? "•"}</span>
            <div className="min-w-0 flex-1">
              <p className={`font-medium ${t.done ? "text-muted line-through" : ""}`}>
                {t.titulo}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted">{TIPO_LABEL[t.tipo] ?? t.tipo}</span>
                {t.subjectSlug && <SubjectBadge slug={t.subjectSlug} />}
                {t.href && <span className="text-xs text-primary">abrir →</span>}
              </div>
            </div>
          </div>
        );

        return (
          <li
            key={t.id}
            className="rounded-xl border border-border bg-surface p-3"
          >
            <div className="flex items-center justify-between gap-3">
              {t.href ? (
                <Link href={t.href} className="min-w-0 flex-1">
                  {inner}
                </Link>
              ) : (
                <div className="min-w-0 flex-1">{inner}</div>
              )}
              <div className="flex-none">
                <ProgressToggle
                  tipo="weektask"
                  refId={t.id}
                  initialDone={t.done}
                  doneLabel="Feito"
                  todoLabel="Concluir"
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
