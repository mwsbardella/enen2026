"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Leitor do texto integral com marcador de leitura (um ponto por livro).
 *
 * - Clique em um parágrafo para marcar onde parou (📍).
 * - Clique no parágrafo marcado para desmarcar.
 * - Ao abrir a página, rola automaticamente até o marcador salvo.
 *
 * O marcador é persistido no banco via POST /api/marcador (chave: bookId),
 * então funciona offline e sobrevive a reinícios.
 */
export default function LeitorLivro({
  bookId,
  paragrafos,
  initialParagrafo,
}: {
  bookId: string;
  paragrafos: string[];
  initialParagrafo: number | null;
}) {
  const [marcado, setMarcado] = useState<number | null>(initialParagrafo);
  const [salvando, setSalvando] = useState(false);
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);
  const jaRolou = useRef(false);

  // Ao abrir, rola até o ponto marcado (uma única vez).
  useEffect(() => {
    if (jaRolou.current) return;
    jaRolou.current = true;
    if (initialParagrafo !== null) {
      const el = refs.current[initialParagrafo];
      if (el) {
        // instant: abrir direto no ponto, sem animação atravessando o livro
        el.scrollIntoView({ behavior: "instant", block: "start" });
      }
    }
  }, [initialParagrafo]);

  async function alternar(idx: number) {
    if (salvando) return;
    const anterior = marcado;
    const novo = marcado === idx ? null : idx; // clicar no marcado desmarca
    setMarcado(novo); // otimista
    setSalvando(true);
    try {
      const res = await fetch("/api/marcador", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId, paragrafo: novo }),
      });
      if (!res.ok) throw new Error("falhou");
    } catch {
      setMarcado(anterior); // reverte
    } finally {
      setSalvando(false);
    }
  }

  function irParaMarcador() {
    if (marcado === null) return;
    refs.current[marcado]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      {/* Barra de instrução/status do marcador */}
      <div className="sticky top-14 z-10 mb-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border bg-surface/95 px-3 py-2 text-xs text-muted backdrop-blur md:top-16">
        {marcado === null ? (
          <span>
            Clique em um parágrafo para marcar onde você parou de ler.
          </span>
        ) : (
          <span>
            📍 Marcador no parágrafo {marcado + 1} de {paragrafos.length} —
            clique nele para desmarcar, ou em outro para mover.
          </span>
        )}
        {marcado !== null && (
          <button
            onClick={irParaMarcador}
            className="rounded-lg border border-border bg-surface-2 px-2 py-1 font-semibold text-primary hover:border-primary"
          >
            ir ao marcador ↓
          </button>
        )}
      </div>

      <div className="mx-auto max-w-2xl font-serif text-[15px] leading-7">
        {paragrafos.map((p, i) => {
          const ativo = marcado === i;
          return (
            <p
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              onClick={() => alternar(i)}
              title={
                ativo
                  ? "Clique para desmarcar"
                  : "Clique para marcar que você parou aqui"
              }
              className={`mb-4 scroll-mt-28 cursor-pointer whitespace-pre-wrap rounded-md px-2 py-0.5 transition-colors ${
                ativo
                  ? "bg-primary/10 ring-2 ring-primary/60"
                  : "hover:bg-surface-2"
              }`}
            >
              {ativo && (
                <span className="mb-1 block select-none font-sans text-[11px] font-bold uppercase tracking-wide text-primary">
                  📍 Você parou aqui
                </span>
              )}
              {p}
            </p>
          );
        })}
      </div>
    </div>
  );
}
