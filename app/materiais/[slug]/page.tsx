import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { parseJson, type LinkItem } from "@/lib/json";
import Markdown from "@/components/Markdown";
import ProgressToggle from "@/components/ProgressToggle";
import TopicQuestions, { type StudyQuestion } from "@/components/TopicQuestions";
import { ExternalLinks, SubjectBadge } from "@/components/ui";

type Alt = { letter: string; text: string; file?: string | null };

export const dynamic = "force-dynamic";

export default async function MaterialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = await prisma.topic.findUnique({
    where: { slug },
    include: { subject: true, materials: true },
  });
  if (!topic) notFound();

  const material = topic.materials[0];
  const links = material ? parseJson<LinkItem[]>(material.links, []) : [];
  const progress = await prisma.progress.findUnique({
    where: { tipo_refId: { tipo: "topic", refId: topic.id } },
  });

  // Questões reais ligadas a este assunto (via classificação → topicId).
  const questionRows = await prisma.question.findMany({
    where: { topicId: topic.id },
    orderBy: [{ year: "desc" }, { index: "asc" }],
  });
  const questions: StudyQuestion[] = questionRows.map((q) => ({
    id: q.id,
    year: q.year,
    index: q.index,
    discipline: q.discipline,
    language: q.language,
    contextMarkdown: q.contextMarkdown,
    comando: q.comando,
    comentario: q.comentario,
    correta: q.correta,
    alternativas: parseJson<Alt[]>(q.alternativas, []),
  }));

  return (
    <article className="space-y-4">
      <div>
        <Link href="/materiais" className="text-sm text-primary">
          ← Materiais
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <SubjectBadge slug={topic.subject.slug} />
          <h1 className="mt-2 text-xl font-bold md:text-2xl">{topic.titulo}</h1>
        </div>
        <ProgressToggle
          tipo="topic"
          refId={topic.id}
          initialDone={progress?.concluido ?? false}
          doneLabel="Estudado"
          todoLabel="Marcar estudado"
        />
      </div>

      {material ? (
        <div className="rounded-2xl border border-border bg-surface p-4 md:p-6">
          <Markdown>{material.resumoMarkdown}</Markdown>
          <ExternalLinks links={links} />
        </div>
      ) : (
        <p className="text-muted">Material em construção para este tópico.</p>
      )}

      <TopicQuestions questions={questions} />
    </article>
  );
}
