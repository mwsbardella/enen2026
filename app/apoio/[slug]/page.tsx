import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "@/components/Markdown";
import { ExternalLinks } from "@/components/ui";
import { corDaArea, nomeDaArea } from "@/lib/subjects";
import { acharApoio } from "@/lib/apoio";

export const dynamic = "force-dynamic";

export default async function ApoioMaterialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const material = acharApoio(slug);
  if (!material) notFound();

  const cor = corDaArea(material.area);

  return (
    <article className="space-y-4">
      <div>
        <Link href="/apoio" className="text-sm text-primary">
          ← Apoio
        </Link>
      </div>
      <div>
        <span
          className="inline-block rounded-full px-2 py-0.5 text-xs font-medium"
          style={{ backgroundColor: `${cor}22`, color: cor }}
        >
          {nomeDaArea(material.area)}
        </span>
        <h1 className="mt-2 flex items-center gap-2 text-xl font-bold md:text-2xl">
          <span>{material.icon}</span>
          {material.titulo}
        </h1>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-4 md:p-6">
        <Markdown>{material.resumoMarkdown}</Markdown>
        <ExternalLinks links={material.links} />
      </div>
    </article>
  );
}
