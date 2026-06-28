"use client";

// Gráfico de linha simples (SVG puro) da evolução das notas dos simulados.
export type ChartPoint = { label: string; valor: number }; // valor em %

export default function ProgressChart({ points }: { points: ChartPoint[] }) {
  if (points.length === 0) {
    return (
      <p className="text-sm text-muted">
        Ainda não há simulados respondidos. Responda uma prova para ver sua evolução.
      </p>
    );
  }

  const W = 600;
  const H = 200;
  const pad = 30;
  const n = points.length;
  const xFor = (i: number) =>
    n === 1 ? W / 2 : pad + (i * (W - 2 * pad)) / (n - 1);
  const yFor = (v: number) => H - pad - (v / 100) * (H - 2 * pad);

  const linha = points.map((p, i) => `${xFor(i)},${yFor(p.valor)}`).join(" ");

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full min-w-[420px]">
        {/* grades horizontais 0/50/100 */}
        {[0, 50, 100].map((g) => (
          <g key={g}>
            <line
              x1={pad}
              x2={W - pad}
              y1={yFor(g)}
              y2={yFor(g)}
              stroke="var(--border)"
              strokeDasharray="3 3"
            />
            <text x={4} y={yFor(g) + 4} fill="var(--muted)" fontSize="10">
              {g}%
            </text>
          </g>
        ))}
        {/* linha */}
        {n > 1 && (
          <polyline
            points={linha}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
          />
        )}
        {/* pontos */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={xFor(i)} cy={yFor(p.valor)} r="4" fill="var(--primary)" />
            <text
              x={xFor(i)}
              y={yFor(p.valor) - 8}
              fill="var(--foreground)"
              fontSize="10"
              textAnchor="middle"
            >
              {p.valor}%
            </text>
            <text
              x={xFor(i)}
              y={H - 8}
              fill="var(--muted)"
              fontSize="9"
              textAnchor="middle"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
