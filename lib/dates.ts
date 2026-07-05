// Datas-chave do ENEM 2026 e utilidades de contagem regressiva / semana atual.

// Provas do ENEM 2026: 1º dia 08/11/2026, 2º dia 15/11/2026.
export const ENEM_DIA_1 = new Date("2026-11-08T00:00:00-03:00");
export const ENEM_DIA_2 = new Date("2026-11-15T00:00:00-03:00");

export type Countdown = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
  passou: boolean;
};

export function countdownTo(target: Date, from: Date = new Date()): Countdown {
  let diff = target.getTime() - from.getTime();
  const passou = diff <= 0;
  if (passou) diff = 0;
  const dias = Math.floor(diff / 86_400_000);
  const horas = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutos = Math.floor((diff % 3_600_000) / 60_000);
  const segundos = Math.floor((diff % 60_000) / 1000);
  return { dias, horas, minutos, segundos, passou };
}

export function diasRestantes(target: Date = ENEM_DIA_1, from: Date = new Date()): number {
  return Math.max(0, Math.ceil((target.getTime() - from.getTime()) / 86_400_000));
}

// Início do cronograma = 19 semanas antes do 1º dia de prova.
export const TOTAL_SEMANAS = 19;

export function inicioCronograma(): Date {
  const d = new Date(ENEM_DIA_1);
  d.setDate(d.getDate() - TOTAL_SEMANAS * 7);
  return d;
}

// True se `hoje` está dentro do período [dataInicio, dataFim] de uma semana.
// Usado para destacar a "semana atual" quando a semana tem datas definidas.
export function semanaAtualPorData(
  dataInicio: Date | null,
  dataFim: Date | null,
  hoje: Date = new Date(),
): boolean {
  if (!dataInicio || !dataFim) return false;
  const fimDoDia = new Date(dataFim);
  fimDoDia.setHours(23, 59, 59, 999);
  return hoje.getTime() >= dataInicio.getTime() && hoje.getTime() <= fimDoDia.getTime();
}

// Retorna o número (1..19) da semana atual do cronograma, ou null se fora dele.
export function semanaAtualNumero(from: Date = new Date()): number | null {
  const inicio = inicioCronograma();
  const diff = from.getTime() - inicio.getTime();
  if (diff < 0) return 1; // antes do início -> foca na semana 1
  const semana = Math.floor(diff / (7 * 86_400_000)) + 1;
  if (semana > TOTAL_SEMANAS) return null;
  return semana;
}

export function formatarData(d: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
  }).format(d);
}
