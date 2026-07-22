"use client";

import { useState } from "react";
import Md from "@/components/MarkdownClient";
import { corDaArea, nomeDaArea, DISCIPLINE_TO_SUBJECT } from "@/lib/subjects";
import type { StudyQuestion } from "@/components/TopicQuestions";

function snippet(q: StudyQuestion): string {
  const base = (q.comando || q.contextMarkdown || "").replace(/\s+/g, " ").trim();
  return base.length > 90 ? base.slice(0, 90) + "…" : base || "(sem enunciado em texto)";
}

// Uma questão do assunto em MODO TREINO: as alternativas começam em branco e o
// gabarito (e a resolução, que entrega a resposta) só aparecem depois que o
// aluno marca uma alternativa. A escolha vive só nesta sessão — recarregar a
// página devolve a questão ao estado inicial, de propósito, para poder refazer.
export default function TopicQuestionItem({ q }: { q: StudyQuestion }) {
  const [marcada, setMarcada] = useState<string | null>(null);
  const revelado = marcada !== null;
  const acertou = revelado && q.correta != null && marcada === q.correta;

  const cor = corDaArea(DISCIPLINE_TO_SUBJECT[q.discipline] ?? q.discipline);

  return (
    <details
      data-has-sol={q.comentario ? "1" : "0"}
      className="group rounded-xl border border-border bg-surface p-0 [&_summary]:list-none"
    >
      <summary className="flex cursor-pointer items-start gap-3 p-4">
        <span
          className="mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold"
          style={{ backgroundColor: `${cor}22`, color: cor }}
        >
          ENEM {q.year} #{q.index}
          {q.language ? ` · ${q.language}` : ""}
        </span>
        <span className="flex-1 text-sm text-muted group-open:hidden">{snippet(q)}</span>
        {revelado && (
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
              acertou ? "bg-success/15 text-success" : "bg-danger/15 text-danger"
            }`}
          >
            {acertou ? "Acertou ✓" : "Errou ✗"}
          </span>
        )}
        <span className="shrink-0 text-muted transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>

      <div className="border-t border-border px-4 pb-4 pt-3">
        {q.contextMarkdown && <Md>{q.contextMarkdown}</Md>}
        {q.comando && (
          <div className="mt-2 font-medium">
            <Md>{q.comando}</Md>
          </div>
        )}

        <ul className="mt-3 space-y-2">
          {q.alternativas.map((alt) => {
            const isCorreta = revelado && q.correta === alt.letter;
            const isErradaMarcada = revelado && marcada === alt.letter && !acertou;

            let cls = "border-border bg-surface-2 hover:border-primary";
            if (revelado) {
              if (isCorreta) cls = "border-success bg-success/10";
              else if (isErradaMarcada) cls = "border-danger bg-danger/10";
              else cls = "border-border bg-surface-2 opacity-70";
            }

            return (
              <li key={alt.letter}>
                <button
                  type="button"
                  onClick={() => setMarcada(alt.letter)}
                  disabled={revelado}
                  className={`flex w-full items-start gap-3 rounded-lg border px-3 py-2 text-left text-sm transition-colors disabled:cursor-default ${cls}`}
                >
                  <span className="font-bold">{alt.letter}</span>
                  <span className="flex-1">
                    {alt.text && <Md>{alt.text}</Md>}
                    {alt.file && (
                      <Md>{`![alternativa ${alt.letter}](${alt.file})`}</Md>
                    )}
                    {!alt.text && !alt.file && <span>—</span>}
                  </span>
                  {isCorreta && (
                    <span className="shrink-0 text-xs font-semibold text-success">
                      ✓ gabarito
                    </span>
                  )}
                  {isErradaMarcada && (
                    <span className="shrink-0 text-xs font-semibold text-danger">
                      sua resposta
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {!revelado ? (
          <p className="mt-3 text-xs text-muted">
            Escolha uma alternativa para conferir o gabarito.
          </p>
        ) : (
          <button
            type="button"
            onClick={() => setMarcada(null)}
            className="mt-3 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-muted hover:border-primary hover:text-primary"
          >
            ↻ Tentar de novo
          </button>
        )}

        {/* A resolução entrega a resposta, então só depois de responder. */}
        {revelado && q.comentario && (
          <details className="group/sol mt-3 rounded-lg border border-primary/40 bg-surface-2 [&_summary]:list-none">
            <summary className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2 text-sm font-semibold text-primary">
              <span>🧠 Como resolver (passo a passo)</span>
              <span className="text-muted transition-transform group-open/sol:rotate-180">▾</span>
            </summary>
            <div className="border-t border-border px-3 pb-3 pt-2 text-sm">
              <Md>{q.comentario}</Md>
            </div>
          </details>
        )}

        <p className="mt-3 text-right text-xs text-muted">
          Fonte: {nomeDaArea(DISCIPLINE_TO_SUBJECT[q.discipline] ?? q.discipline)} · ENEM{" "}
          {q.year}
        </p>
      </div>
    </details>
  );
}
