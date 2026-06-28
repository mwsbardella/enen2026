"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", label: "Início", icon: "🏠" },
  { href: "/cronograma", label: "Cronograma", icon: "🗓️" },
  { href: "/materiais", label: "Materiais", icon: "📚" },
  { href: "/provas", label: "Provas", icon: "📝" },
  { href: "/literatura", label: "Literatura", icon: "📖" },
  { href: "/redacao", label: "Redação", icon: "✍️" },
  { href: "/progresso", label: "Progresso", icon: "📈" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {/* Header topo (desktop e mobile) */}
      <header className="sticky top-0 z-20 border-b border-border bg-surface/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="text-xl">🎯</span>
            <span>
              ENEM <span className="text-primary">Study</span>
            </span>
          </Link>
          {/* Navegação horizontal: escondida no mobile (vira barra inferior) */}
          <nav className="hidden gap-1 md:flex">
            {ITEMS.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  isActive(pathname, it.href)
                    ? "bg-surface-2 text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {it.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Barra inferior fixa (mobile) */}
      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface/95 backdrop-blur md:hidden">
        <ul className="mx-auto grid max-w-4xl grid-cols-7">
          {ITEMS.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className={`flex flex-col items-center gap-0.5 py-2 text-[10px] ${
                  isActive(pathname, it.href) ? "text-primary" : "text-muted"
                }`}
              >
                <span className="text-base leading-none">{it.icon}</span>
                <span className="truncate">{it.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
