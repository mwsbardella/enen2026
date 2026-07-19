import QuestionFilter from "@/components/QuestionFilter";
import TopicQuestionItem from "@/components/TopicQuestionItem";

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

// Exibe as questões reais ligadas a um assunto, em MODO TREINO: o gabarito não
// aparece de saída — cada questão é respondida clicando numa alternativa
// (components/TopicQuestionItem.tsx, que é client por precisar de estado).
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
        Questões reais do ENEM (2019–2025) deste assunto. Clique para abrir e escolha uma
        alternativa: o gabarito e a resolução só aparecem depois que você responder.
      </p>

      <QuestionFilter total={questions.length} withSol={comSolucao}>
        {questions.map((q) => (
          <TopicQuestionItem key={q.id} q={q} />
        ))}
      </QuestionFilter>
    </section>
  );
}
