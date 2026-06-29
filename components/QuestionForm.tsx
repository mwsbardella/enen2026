"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { corDaArea, nomeDaArea, DISCIPLINE_TO_SUBJECT } from "@/lib/subjects";

export type FormQuestion = {
  id: string;
  year: number;
  index: number;
  discipline: string;
  language: string | null;
  contextMarkdown: string | null;
  comando: string | null;
  alternativas: { letter: string; text: string; file?: string | null }[];
  comentario?: string | null;
};

type Correcao = {
  questionId: string;
  correta: string | null;
  marcada: string | null;
  acertou: boolean;
};

type Resultado = {
  attemptId: string;
  acertos: number;
  total: number;
  porArea: Record<string, { acertos: number; total: number }>;
  correcao: Correcao[];
};

function Md({ children }: { children: string }) {
  return (
    <div className="prose-enem">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

export default function QuestionForm({
  examId,
  questions,
  timerSeconds,
}: {
  examId: string;
  questions: FormQuestion[];
  timerSeconds?: number;
}) {
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [restante, setRestante] = useState<number | null>(timerSeconds ?? null);
  const iniciadoEm = useRef(new Date().toISOString());
  const corrMap = useMemo(() => {
    const m = new Map<string, Correcao>();
    resultado?.correcao.forEach((c) => m.set(c.questionId, c));
    return m;
  }, [resultado]);

  async function enviar() {
    if (enviando || resultado) return;
    setEnviando(true);
    setErro(null);
    try {
      const res = await fetch("/api/attempts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ examId, respostas, iniciadoEm: iniciadoEm.current }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Erro ao corrigir");
      const data = (await res.json()) as Resultado;
      setResultado(data);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setErro((e as Error).message);
    } finally {
      setEnviando(false);
    }
  }

  // Timer regressivo opcional: decrementa a cada segundo e auto-envia ao zerar
  // (o envio acontece no callback do timeout, não no corpo do efeito).
  useEffect(() => {
    if (restante == null || resultado || restante <= 0) return;
    const id = setTimeout(() => {
      if (restante <= 1) void enviar();
      else setRestante(restante - 1);
    }, 1000);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restante, resultado]);

  const respondidas = Object.keys(respostas).length;

  return (
    <div className="space-y-5">
      {/* Barra de status / timer */}
      <div className="sticky top-[57px] z-10 flex items-center justify-between rounded-xl border border-border bg-surface/95 px-4 py-2 backdrop-blur">
        <span className="text-sm text-muted">
          {resultado
            ? `Resultado: ${resultado.acertos}/${resultado.total}`
            : `${respondidas}/${questions.length} respondidas`}
        </span>
        {restante != null && !resultado && (
          <span
            className={`font-mono text-sm font-bold ${
              restante < 60 ? "text-danger" : "text-foreground"
            }`}
          >
            ⏱ {fmt(restante)}
          </span>
        )}
      </div>

      {resultado && (
        <div className="rounded-xl border border-primary/40 bg-surface p-4">
          <h2 className="text-lg font-bold">
            Você acertou {resultado.acertos} de {resultado.total}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {Object.entries(resultado.porArea).map(([area, v]) => (
              <span
                key={area}
                className="rounded-full px-3 py-1 text-xs"
                style={{ backgroundColor: `${corDaArea(area)}22`, color: corDaArea(area) }}
              >
                {nomeDaArea(area)}: {v.acertos}/{v.total}
              </span>
            ))}
          </div>
        </div>
      )}

      {questions.map((q, i) => {
        const c = corrMap.get(q.id);
        const cor = corDaArea(DISCIPLINE_TO_SUBJECT[q.discipline] ?? q.discipline);
        return (
          <div key={q.id} className="rounded-xl border border-border bg-surface p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold" style={{ color: cor }}>
                Questão {i + 1} · ENEM {q.year} #{q.index}
                {q.language ? ` · ${q.language}` : ""}
              </span>
              {c && (
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    c.acertou ? "bg-success/15 text-success" : "bg-danger/15 text-danger"
                  }`}
                >
                  {c.acertou ? "Acertou" : "Errou"}
                </span>
              )}
            </div>

            {q.contextMarkdown && <Md>{q.contextMarkdown}</Md>}
            {q.comando && (
              <p className="mt-2 font-medium">
                <Md>{q.comando}</Md>
              </p>
            )}

            <div className="mt-3 space-y-2">
              {q.alternativas.map((alt) => {
                const marcada = respostas[q.id] === alt.letter;
                const isCorreta = c && c.correta === alt.letter;
                const isErradaMarcada = c && marcada && !c.acertou;
                let cls = "border-border bg-surface-2 hover:border-primary";
                if (c) {
                  if (isCorreta) cls = "border-success bg-success/10";
                  else if (isErradaMarcada) cls = "border-danger bg-danger/10";
                  else cls = "border-border bg-surface-2 opacity-70";
                } else if (marcada) {
                  cls = "border-primary bg-primary/10";
                }
                return (
                  <label
                    key={alt.letter}
                    className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2 text-sm transition-colors ${cls}`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={alt.letter}
                      checked={marcada}
                      disabled={!!resultado}
                      onChange={() =>
                        setRespostas((r) => ({ ...r, [q.id]: alt.letter }))
                      }
                      className="mt-0.5"
                    />
                    <span className="font-bold">{alt.letter}</span>
                    <span className="flex-1">
                      <Md>{alt.text}</Md>
                    </span>
                  </label>
                );
              })}
            </div>

            {c && q.comentario && (
              <div className="mt-3 rounded-lg border border-border bg-surface-2 p-3 text-sm">
                <strong className="text-muted">Comentário:</strong> {q.comentario}
              </div>
            )}
          </div>
        );
      })}

      {erro && <p className="text-sm text-danger">{erro}</p>}

      {!resultado && (
        <button
          onClick={enviar}
          disabled={enviando}
          className="w-full rounded-xl bg-primary px-4 py-3 font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {enviando ? "Corrigindo..." : "Enviar e corrigir"}
        </button>
      )}
    </div>
  );
}
