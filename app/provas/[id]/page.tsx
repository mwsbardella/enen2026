import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { parseJson } from "@/lib/json";
import QuestionForm, { type FormQuestion } from "@/components/QuestionForm";
import { PageTitle } from "@/components/ui";

export const dynamic = "force-dynamic";

type Alt = { letter: string; text: string; file?: string | null };

export default async function ResolverProvaPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ cronometro?: string }>;
}) {
  const { id } = await params;
  const { cronometro } = await searchParams;

  const exam = await prisma.exam.findUnique({ where: { id } });
  if (!exam) notFound();

  const order = parseJson<string[]>(exam.questionIds, []);
  const rows = await prisma.question.findMany({
    where: { id: { in: order } },
  });
  const byId = new Map(rows.map((q) => [q.id, q]));

  // Mantém a ordem e NÃO envia o gabarito (correta/isCorrect) ao cliente.
  const questions: FormQuestion[] = order
    .map((qid) => byId.get(qid))
    .filter((q): q is NonNullable<typeof q> => !!q)
    .map((q) => ({
      id: q.id,
      year: q.year,
      index: q.index,
      discipline: q.discipline,
      language: q.language,
      contextMarkdown: q.contextMarkdown,
      comando: q.comando,
      comentario: q.comentario,
      alternativas: parseJson<Alt[]>(q.alternativas, []).map((a) => ({
        letter: a.letter,
        text: a.text,
        file: a.file ?? null,
      })),
    }));

  const timerSeconds = cronometro ? questions.length * 180 : undefined;

  return (
    <div className="space-y-4">
      <Link href="/provas" className="text-sm text-primary">
        ← Provas
      </Link>
      <PageTitle
        title={exam.titulo}
        subtitle={
          exam.descricao ??
          `${questions.length} questões${timerSeconds ? " · modo cronometrado" : ""}`
        }
      />
      {questions.length === 0 ? (
        <p className="text-muted">Esta prova não tem questões disponíveis.</p>
      ) : (
        <QuestionForm
          examId={exam.id}
          questions={questions}
          timerSeconds={timerSeconds}
        />
      )}
    </div>
  );
}
