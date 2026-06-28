"use client";

import { useEffect, useState } from "react";
import { countdownTo, type Countdown as CD } from "@/lib/dates";

function Box({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-[60px] flex-col items-center rounded-lg bg-surface-2 px-3 py-2">
      <span className="font-mono text-2xl font-bold tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase tracking-wide text-muted">{label}</span>
    </div>
  );
}

export default function Countdown({ targetIso }: { targetIso: string }) {
  const target = new Date(targetIso);
  const [cd, setCd] = useState<CD>(() => countdownTo(target));

  useEffect(() => {
    const id = setInterval(() => setCd(countdownTo(target)), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetIso]);

  if (cd.passou) {
    return <p className="text-lg font-semibold text-primary">É hoje! Boa prova! 🎯</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Box value={cd.dias} label="dias" />
      <Box value={cd.horas} label="horas" />
      <Box value={cd.minutos} label="min" />
      <Box value={cd.segundos} label="seg" />
    </div>
  );
}
