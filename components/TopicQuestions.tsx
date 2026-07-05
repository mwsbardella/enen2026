import Markdown from "@/components/Markdown";
import QuestionFilter from "@/components/QuestionFilter";
import { corDaArea, nomeDaArea, DISCIPLINE_TO_SUBJECT } from "@/lib/subjects";

export type StudyQuestion = {
  id: string;
  year: number;
  index: number;
  discipline: string;
  language: string | null;
  contextMarkdown: string | null;
  comando: string | null;
  comentario: string | null;
  alternativas: { letter: string; text: string; file?: string | null }[];
  correta: string | null;
};

function snippet(q: StudyQuestion): string {
  const base = (q.comando || q.contextMarkdown || "").replace(/\s+/g, " ").trim();
  return base.length > 90 ? base.slice(0, 90) + "…" : base || "(sem enunciado em texto)";
}

// Exibe as questões reais ligadas a um assunto, em MODO ESTUDO (gabarito revelado).
// Cada questão é um <details> recolhido para a página não ficar gigante.
export default function TopicQuestions({ questions }: { questions: StudyQuestion[] }) {
  if (questions.length === 0) {
    return (
      <section className="rounded-2xl border border-border bg-surface p-4 md:p-6">
        <h2 className="text-lg font-bold">Questões que já caíram</h2>
        <p className="mt-2 text-sm text-muted">
          Ainda não há questões classificadas neste assunto. Rode a importação/classificação
          para vinculá-las.
        </p>
      </section>
    );
  }

  const comSolucao = questions.filter((q) => q.comentario).length;

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold">
        Questões que já caíram neste assunto{" "}
        <span className="text-muted">({questions.length})</span>
      </h2>
      <p className="text-sm text-muted">
        Questões reais do ENEM (2019–2025) deste assunto. Clique para abrir; o gabarito
        aparece destacado.
      </p>

      <QuestionFilter total={questions.length} withSol={comSolucao}>
      {questions.map((q) => {
        const cor = corDaArea(DISCIPLINE_TO_SUBJECT[q.discipline] ?? q.discipline);
        return (
          <details
            key={q.id}
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
              <span className="shrink-0 text-muted transition-transform group-open:rotate-180">
                ▾
              </span>
            </summary>

            <div className="border-t border-border px-4 pb-4 pt-3">
              {q.contextMarkdown && <Markdown>{q.contextMarkdown}</Markdown>}
              {q.comando && (
                <div className="mt-2 font-medium">
                  <Markdown>{q.comando}</Markdown>
                </div>
              )}

              <ul className="mt-3 space-y-2">
                {q.alternativas.map((alt) => {
                  const certa = q.correta != null && alt.letter === q.correta;
                  return (
                    <li
                      key={alt.letter}
                      className={`flex items-start gap-3 rounded-lg border px-3 py-2 text-sm ${
                        certa
                          ? "border-success bg-success/10"
                          : "border-border bg-surface-2"
                      }`}
                    >
                      <span className="font-bold">{alt.letter}</span>
                      <span className="flex-1">
                        <Markdown>{alt.text || "—"}</Markdown>
                      </span>
                      {certa && (
                        <span className="shrink-0 text-xs font-semibold text-success">
                          ✓ gabarito
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>

              {q.comentario && (
                <details className="group/sol mt-3 rounded-lg border border-primary/40 bg-surface-2 [&_summary]:list-none">
                  <summary className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2 text-sm font-semibold text-primary">
                    <span>🧠 Como resolver (passo a passo)</span>
                    <span className="text-muted transition-transform group-open/sol:rotate-180">▾</span>
                  </summary>
                  <div className="border-t border-border px-3 pb-3 pt-2 text-sm">
                    <Markdown>{q.comentario}</Markdown>
                  </div>
                </details>
              )}
              <p className="mt-3 text-right text-xs text-muted">
                Fonte: {nomeDaArea(DISCIPLINE_TO_SUBJECT[q.discipline] ?? q.discipline)} ·
                ENEM {q.year}
              </p>
            </div>
          </details>
        );
      })}
      </QuestionFilter>
    </section>
  );
}
