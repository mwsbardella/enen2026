import Link from "next/link";
import type { ReactNode } from "react";
import { corDaArea, nomeDaArea } from "@/lib/subjects";
import type { LinkItem } from "@/lib/json";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-4 ${className}`}
    >
      {children}
    </div>
  );
}

export function PageTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-5">
      <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
    </div>
  );
}

export function SubjectBadge({ slug }: { slug: string }) {
  const cor = corDaArea(slug);
  return (
    <span
      className="inline-block rounded-full px-2 py-0.5 text-xs font-medium"
      style={{ backgroundColor: `${cor}22`, color: cor }}
    >
      {nomeDaArea(slug)}
    </span>
  );
}

export function Pill({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "success" | "danger" | "muted";
}) {
  const tones: Record<string, string> = {
    default: "bg-surface-2 text-foreground",
    success: "bg-success/15 text-success",
    danger: "bg-danger/15 text-danger",
    muted: "bg-surface-2 text-muted",
  };
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-xs ${tones[tone]}`}>
      {children}
    </span>
  );
}

// Lista de links complementares curados, marcados como fontes externas.
export function ExternalLinks({ links }: { links: LinkItem[] }) {
  if (!links?.length) return null;
  return (
    <div className="mt-4">
      <h3 className="mb-2 text-sm font-semibold text-muted">
        Links complementares <span className="font-normal">(fontes externas)</span>
      </h3>
      <ul className="space-y-2">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-2 text-sm transition-colors hover:border-primary"
            >
              <span className="text-primary">↗</span>
              <span className="flex-1">{l.titulo}</span>
              <span className="text-xs text-muted">{l.fonte}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
