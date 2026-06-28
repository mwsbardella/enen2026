"use client";

import { useState } from "react";

const COMPETENCIAS = [
  {
    n: 1,
    titulo: "Domínio da norma culta",
    desc: "Escrever bem, segundo a gramática: ortografia, pontuação, concordância, regência e sintaxe.",
  },
  {
    n: 2,
    titulo: "Compreender o tema e usar repertório",
    desc: "Não fugir ao tema, respeitar o tipo dissertativo-argumentativo e usar repertório sociocultural legitimado e bem articulado.",
  },
  {
    n: 3,
    titulo: "Selecionar e organizar argumentos",
    desc: "Projeto de texto: defender o ponto de vista com argumentos autorais, encadeados e aprofundados (sem contradição).",
  },
  {
    n: 4,
    titulo: "Coesão",
    desc: "Usar conectivos e elementos coesivos variados entre e dentro dos parágrafos.",
  },
  {
    n: 5,
    titulo: "Proposta de intervenção",
    desc: "Solução completa (agente, ação, meio, finalidade, detalhamento) que respeite os direitos humanos.",
  },
];

export default function CompetenciaGuide() {
  const [aberto, setAberto] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-surface">
      <button
        onClick={() => setAberto((a) => !a)}
        className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold"
      >
        <span>📋 Guia das 5 competências</span>
        <span className="text-muted">{aberto ? "−" : "+"}</span>
      </button>
      {aberto && (
        <ul className="space-y-3 border-t border-border p-4">
          {COMPETENCIAS.map((c) => (
            <li key={c.n} className="flex gap-3">
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                {c.n}
              </span>
              <div>
                <p className="text-sm font-semibold">{c.titulo}</p>
                <p className="text-sm text-muted">{c.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
