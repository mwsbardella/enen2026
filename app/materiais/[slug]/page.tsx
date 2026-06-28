import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { parseJson, type LinkItem } from "@/lib/json";
import Markdown from "@/components/Markdown";
import ProgressToggle from "@/components/ProgressToggle";
import { ExternalLinks, SubjectBadge } from "@/components/ui";

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
    </article>
  );
}
