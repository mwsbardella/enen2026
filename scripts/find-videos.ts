/**
 * Curadoria de VÍDEOS do YouTube por assunto — com verificação real.
 *
 *   npm run find:videos          # todos os alvos
 *   npm run find:videos -- hum-  # só os slugs que começam com "hum-"
 *
 * Regera prisma/content/videos.ts e imprime um relatório para revisão humana.
 *
 * POR QUE ASSIM: nunca escrever URL de memória. IDs de vídeo e handles de canal
 * inventados quase sempre apontam para lugar nenhum (num teste, 9 de 14 handles
 * "óbvios" deram 404). Aqui os candidatos saem da BUSCA REAL do YouTube e cada
 * escolhido ainda passa pelo oEmbed, que é quem confirma que o vídeo está no ar
 * e devolve o canal e o título verdadeiros — é isso que vai para o arquivo.
 */
import fs from "node:fs";
import path from "node:path";
import { humanasMateriais } from "../prisma/content/materials/humanas";
import { matematicaMateriais } from "../prisma/content/materials/matematica";
import { linguagensMateriais } from "../prisma/content/materials/linguagens";
import { naturezaMateriais } from "../prisma/content/materials/natureza";
import { redacaoTopics } from "../prisma/content/redacao";
import { books } from "../prisma/content/books";
import { taxonomy } from "../prisma/content/taxonomy";
import { videosPorSlug as existentes } from "../prisma/content/videos";
import type { LinkSeed } from "../prisma/content/types";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36";
const MIN_VIEWS = 50_000; // piso para canal fora da lista de referência
const MIN_VIEWS_REFERENCIA = 20_000; // piso mesmo para canal reconhecido
const PESO_REFERENCIA = 3; // vantagem do canal reconhecido na pontuação
const ANO_CORRENTE = 2026;
const POR_ALVO = 2; // vídeos por assunto, de canais diferentes
const PAUSA_MS = 700; // educação com o YouTube entre buscas

/**
 * Canais de referência — montada a partir dos canais que REALMENTE aparecem nas
 * buscas (não de memória). Comparação por substring, sem acento e em minúsculas,
 * porque o nome exibido varia ("Paulo Jubilut" x "Biologia Total com Paulo Jubilut").
 */
const CANAIS_REFERENCIA = [
  "descomplica",
  "debora aladim",
  "paulo jubilut",
  "biologia total",
  "professor noslen",
  "dicasdemat",
  "sandro curio",
  "portugues com leticia",
  "professora pamba",
  "kuadro",
  "proenem",
  "qg do enem",
  "curso enem gratuito",
  "quimica simples",
  "me gusta bio",
  "biologia com samuel cunha",
  "ferretto",
  "gis com giz",
  "umberto mannarino",
  "stoodi",
  "poliedro",
  "literabrasil",
  "literatura com alencar",
  "hexag",
  "ler antes de morrer",
  "professor rafael",
  "brasil escola",
  "toda materia",
  "aula de",
  "responde ai",
  "matematica rio",
  "equaciona",
  "professor boaro",
  "fisica total",
  "historia online",
  "pedro assaad",
  "professor beto brito",
];

/** Títulos que não servem como aula, por mais visualizações que tenham. */
const TITULO_PROIBIDO = [
  "audiolivro",
  "audio livro",
  "audiobook",
  "podcast",
  "ao vivo",
  "live",
  "#shorts",
  "trailer",
  "filme completo",
  "resenha sem spoiler",
  "reagindo",
  "react",
  // Público errado: material infantil ou de concurso público entrava por
  // volume de audiência (um vídeo de corpo humano "para crianças", com 5,9
  // milhões de views, chegou a ser escolhido para Fisiologia).
  "para criancas",
  "infantil",
  "educacao infantil",
  "concurso",
  "oab",
  // Entrevista com o autor não é aula sobre a obra.
  "entrevista",
  "fala sobre",
];

/** Canais cujo público não é o vestibulando. */
const CANAL_PROIBIDO = ["pedagog", "concurseir", "smile and learn", "kids", "infantil"];

type Alvo = {
  slug: string;
  titulo: string;
  query: string;
  /** Texto de referência do assunto: é contra ele que a relevância do título é medida. */
  tema: string;
  tipo: "assunto" | "redacao" | "livro";
};
type Candidato = { id: string; titulo: string; canal: string; views: number };
type Escolhido = { id: string; titulo: string; canal: string; views: number };

const semAcento = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function ehReferencia(canal: string): boolean {
  const c = semAcento(canal);
  return CANAIS_REFERENCIA.some((r) => c.includes(r));
}

function tituloProibido(titulo: string): boolean {
  const t = semAcento(titulo);
  return TITULO_PROIBIDO.some((p) => t.includes(p));
}

function canalProibido(canal: string): boolean {
  const c = semAcento(canal);
  return CANAL_PROIBIDO.some((p) => c.includes(p));
}

/**
 * Queries escritas à mão para os assuntos em que o título/descrição da taxonomia
 * leva a busca para o lado errado. Cada uma aqui é fruto de uma escolha ruim
 * observada no relatório — não invente entradas sem ver o resultado antes.
 */
const QUERY_OVERRIDE: Record<string, string> = {
  // "Grandezas, medidas e unidades" (matemática) caía em grandezas
  // escalares e vetoriais, que é Física.
  "mat-grandezas": "conversão de unidades de medida e escalas ENEM matemática",
  // Caía em TICs para concurso de pedagogia.
  "lng-tecnologias": "tecnologias da informação e comunicação mídias ENEM linguagens",
  // A descrição puxava só demografia; urbanização ficava de fora.
  "hum-urbanizacao": "urbanização brasileira crescimento das cidades ENEM geografia",
  // Livro de poemas: "análise da obra" não é como os vídeos se chamam.
  "sentimento-do-mundo": "Sentimento do Mundo Carlos Drummond de Andrade",
};

/**
 * Alvos que ficam SEM vídeo de propósito.
 *
 * "Tecnologias e mídias da informação" não existe como videoaula própria: as
 * buscas só devolvem aulas genéricas de Linguagens ou material de concurso de
 * pedagogia. Rotular um vídeo desses como se fosse do assunto enganaria o
 * aluno — melhor deixar só os links de texto, que são bons.
 */
const SEM_VIDEO = new Set(["lng-tecnologias"]);

function alvos(): Alvo[] {
  const lista: Alvo[] = [];
  const descPorSlug = Object.fromEntries(taxonomy.map((t) => [t.slug, t.descricao]));

  for (const m of [
    ...humanasMateriais,
    ...matematicaMateriais,
    ...linguagensMateriais,
    ...naturezaMateriais,
  ]) {
    // Tira o prefixo de área ("Física: Mecânica" -> "Mecânica") para não poluir a busca.
    const tituloLimpo = m.titulo.replace(/^[^:]+:\s*/, "");
    const descricao = descPorSlug[m.topicSlug] ?? "";
    // A descrição da taxonomia é um termo de busca melhor que o título: para
    // "História mundial contemporânea" ela traz "Guerras mundiais, Guerra Fria
    // e revoluções", que é o que o professor de fato escreve no título do vídeo.
    lista.push({
      slug: m.topicSlug,
      titulo: m.titulo,
      query: `${tituloLimpo} ${descricao} ENEM`.replace(/\s+/g, " ").trim(),
      tema: `${tituloLimpo} ${descricao}`,
      tipo: "assunto",
    });
  }
  for (const t of redacaoTopics) {
    lista.push({
      slug: t.slug,
      titulo: t.titulo,
      query: `${t.titulo} redação ENEM aula`,
      tema: `${t.titulo} redação`,
      tipo: "redacao",
    });
  }
  for (const b of books) {
    lista.push({
      slug: b.slug,
      titulo: b.titulo,
      query: `${b.titulo} ${b.autor} análise da obra vestibular`,
      tema: `${b.titulo} ${b.autor}`,
      tipo: "livro",
    });
  }

  // Query escrita à mão vence a gerada, quando existe.
  for (const a of lista) a.query = QUERY_OVERRIDE[a.slug] ?? a.query;

  return lista;
}

const STOPWORDS = new Set([
  "para",
  "como",
  "pelo",
  "pela",
  "sobre",
  "entre",
  "aula",
  "enem",
  "resumo",
  "tudo",
  "todos",
  "toda",
  "mais",
  "prova",
  "vestibular",
  "questoes",
  "obra",
  "analise",
  "brasil",
  "brasileira",
  "brasileiro",
]);

/** Radicais do tema (prefixo de 6 letras) usados para medir relevância do título. */
function radicais(tema: string): string[] {
  return [
    ...new Set(
      semAcento(tema)
        .split(/[^a-z0-9]+/)
        .filter((p) => p.length >= 4 && !STOPWORDS.has(p))
        .map((p) => p.slice(0, 6)),
    ),
  ];
}

/**
 * Quantos radicais do tema aparecem no título do vídeo.
 *
 * É a trava mais importante deste script. Sem ela, o ranking por
 * popularidade entrega o vídeo genérico e famoso ("TODA A HISTÓRIA DO ENEM")
 * para cinco assuntos diferentes, e um vídeo de Globalização para o assunto
 * de Trabalho — foi exatamente o que aconteceu na primeira execução.
 */
function relevancia(tituloVideo: string, rads: string[]): number {
  const t = semAcento(tituloVideo);
  return rads.filter((r) => t.includes(r)).length;
}

/**
 * Pontuação de desempate (dentro da mesma relevância).
 *
 * Canal reconhecido pesa, mas NÃO atropela audiência: sem isso, um vídeo de
 * 4 mil views de um canal da lista passava na frente de um de 200 mil.
 * Título que se anuncia preso a um ENEM já passado ("Revisão ENEM 2022")
 * perde metade do peso — o conteúdo envelhece.
 */
function pontuacao(c: Candidato): number {
  let p = c.views * (ehReferencia(c.canal) ? PESO_REFERENCIA : 1);
  const ano = semAcento(c.titulo).match(/enem\s*(20\d{2})/);
  if (ano && Number(ano[1]) < ANO_CORRENTE - 1) p *= 0.5;
  return p;
}

/** Candidatos da busca do YouTube (vídeo, canal e visualizações reais). */
async function buscar(query: string): Promise<Candidato[]> {
  const url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);
  const html = await fetch(url, {
    headers: { "User-Agent": UA },
    signal: AbortSignal.timeout(30_000),
  }).then((r) => r.text());

  // [\s\S] em vez do flag /s: o target do projeto é anterior a ES2018.
  const m = html.match(/ytInitialData = (\{[\s\S]*?\});/);
  if (!m) return [];

  // Formato interno do YouTube: só os campos que usamos, todos opcionais.
  type Runs = { runs?: { text?: string }[] };
  type VideoRenderer = {
    videoId?: string;
    title?: Runs;
    ownerText?: Runs;
    longBylineText?: Runs;
    viewCountText?: { simpleText?: string };
  };

  const out: Candidato[] = [];
  JSON.parse(m[1], (k, v) => {
    if (k === "videoRenderer" && v && typeof v === "object") {
      const r = v as VideoRenderer;
      if (!r.videoId) return v;
      const views = r.viewCountText?.simpleText ?? "";
      out.push({
        id: r.videoId,
        titulo: r.title?.runs?.[0]?.text ?? "",
        canal: r.ownerText?.runs?.[0]?.text ?? r.longBylineText?.runs?.[0]?.text ?? "",
        views: Number(views.replace(/\D/g, "")) || 0,
      });
    }
    return v;
  });
  return out;
}

/**
 * Portão final: só entra no arquivo o vídeo que o oEmbed confirma estar no ar.
 * O canal e o título gravados vêm daqui — é a fonte confiável, não o scraping.
 */
async function verificar(id: string): Promise<{ canal: string; titulo: string } | null> {
  const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": UA },
      signal: AbortSignal.timeout(20_000),
    });
    if (res.status !== 200) return null;
    const j = (await res.json()) as { author_name?: string; title?: string };
    if (!j.author_name || !j.title) return null;
    return { canal: j.author_name, titulo: j.title };
  } catch {
    return null;
  }
}

async function escolher(alvo: Alvo, jaUsados: Set<string>): Promise<Escolhido[]> {
  const candidatos = await buscar(alvo.query);
  const rads = radicais(alvo.tema);

  const elegiveis = candidatos
    .filter((c) => c.id && c.canal && !tituloProibido(c.titulo) && !canalProibido(c.canal))
    .filter((c) => !jaUsados.has(c.id)) // um vídeo não serve a dois assuntos
    .filter((c) =>
      ehReferencia(c.canal) ? c.views >= MIN_VIEWS_REFERENCIA : c.views >= MIN_VIEWS,
    )
    .map((c) => ({ ...c, rel: relevancia(c.titulo, rads), pts: pontuacao(c) }))
    // Fora do tema não entra, por mais popular que seja o vídeo ou o canal.
    .filter((c) => c.rel > 0)
    // Relevância manda; dentro dela, a pontuação (audiência + peso do canal).
    .sort((a, b) => b.rel - a.rel || b.pts - a.pts);

  const escolhidos: Escolhido[] = [];
  const canaisUsados = new Set<string>();

  for (const c of elegiveis) {
    if (escolhidos.length >= POR_ALVO) break;
    if (canaisUsados.has(semAcento(c.canal))) continue; // diversifica o professor

    const ok = await verificar(c.id);
    if (!ok) continue; // vídeo saiu do ar entre a busca e agora

    escolhidos.push({ id: c.id, titulo: ok.titulo, canal: ok.canal, views: c.views });
    canaisUsados.add(semAcento(ok.canal));
    jaUsados.add(c.id);
  }

  return escolhidos;
}

function rotulo(alvo: Alvo, canal: string): string {
  const base =
    alvo.tipo === "livro"
      ? `${alvo.titulo} — análise da obra`
      : `${alvo.titulo} — videoaula`;
  return `${base} (${canal})`;
}

const aspas = (s: string) => s.replace(/"/g, '\\"');

/** Escolha verificada -> link do conteúdo, com o professor visível no título. */
function paraLink(alvo: Alvo, v: Escolhido): LinkSeed {
  return {
    titulo: rotulo(alvo, v.canal),
    url: `https://www.youtube.com/watch?v=${v.id}`,
    fonte: `YouTube · ${v.canal}`,
  };
}

/** `ordem` mantém o arquivo estável entre execuções (diffs limpos). */
function gerarArquivo(mapa: Record<string, LinkSeed[]>, ordem: string[]): string {
  const linhas: string[] = [];

  for (const slug of ordem) {
    const vids = mapa[slug];
    if (!vids || vids.length === 0) continue;
    linhas.push(`  "${slug}": [`);
    for (const l of vids) {
      linhas.push(
        `    { titulo: "${aspas(l.titulo)}", url: "${l.url}", fonte: "${aspas(l.fonte)}" },`,
      );
    }
    linhas.push(`  ],`);
  }

  return `// Videoaulas por assunto, livro e tópico de redação.
//
// ARQUIVO GERADO por scripts/find-videos.ts (npm run find:videos) e revisado
// à mão. Não editar sem necessidade: rode o script para atualizar.
//
// Cada URL aqui foi confirmada pelo oEmbed do YouTube no momento da geração —
// o canal e o título vieram da resposta dele, não de suposição. Para conferir
// que continuam no ar: npm run check:links
//
// Gerado em ${new Date().toISOString().slice(0, 10)}.

import type { LinkSeed } from "./types";

export const videosPorSlug: Record<string, LinkSeed[]> = {
${linhas.join("\n")}
};
`;
}

/** ID do vídeo dentro de uma URL do YouTube. */
function idDaUrl(url: string): string | null {
  return url.match(/[?&]v=([A-Za-z0-9_-]{11})/)?.[1] ?? null;
}

async function main() {
  const filtro = process.argv[2];
  const todos = alvos().filter((a) => !SEM_VIDEO.has(a.slug));
  const lista = todos.filter((a) => !filtro || a.slug.startsWith(filtro));

  console.log(`Buscando vídeos para ${lista.length} alvo(s)...\n`);

  // Execução parcial (com filtro) PRESERVA o que já foi curado para os demais
  // alvos — sem isso, rodar `find:videos hum-` apagaria as outras 60 entradas.
  const mapa: Record<string, LinkSeed[]> = { ...existentes };
  const alvosDaRodada = new Set(lista.map((a) => a.slug));
  const semVideo: Alvo[] = [];

  // Dedup global: um vídeo não serve a dois assuntos. Começa com os que já
  // estão no arquivo para alvos que NÃO serão refeitos agora.
  const jaUsados = new Set<string>();
  for (const [slug, links] of Object.entries(existentes)) {
    if (alvosDaRodada.has(slug)) continue;
    for (const l of links) {
      const id = idDaUrl(l.url);
      if (id) jaUsados.add(id);
    }
  }

  for (const alvo of lista) {
    const vids = await escolher(alvo, jaUsados);
    mapa[alvo.slug] = vids.map((v) => paraLink(alvo, v));

    if (vids.length === 0) {
      delete mapa[alvo.slug];
      semVideo.push(alvo);
      console.log(`  ⚠ ${alvo.slug} — NENHUM vídeo aprovado (query: "${alvo.query}")`);
    } else {
      console.log(`  ✓ ${alvo.slug}`);
      for (const v of vids) {
        console.log(
          `      ${String(v.views).padStart(9)} views · ${v.canal} — ${v.titulo.slice(0, 60)}`,
        );
      }
    }
    await new Promise((r) => setTimeout(r, PAUSA_MS));
  }

  const destino = path.join(process.cwd(), "prisma", "content", "videos.ts");
  fs.writeFileSync(
    destino,
    gerarArquivo(
      mapa,
      todos.map((a) => a.slug),
    ),
    "utf8",
  );

  const total = Object.values(mapa).reduce((s, v) => s + v.length, 0);
  console.log(
    `\n✓ ${total} vídeos no arquivo (${lista.length - semVideo.length} alvos nesta rodada).`,
  );
  console.log(`✓ Gravado em ${destino}`);
  if (semVideo.length) {
    console.log(`\n⚠ ${semVideo.length} alvo(s) sem vídeo — revisar a query à mão:`);
    for (const a of semVideo) console.log(`   ${a.slug} (${a.titulo})`);
  }
}

main().catch((e) => {
  console.error("Erro:", e);
  process.exitCode = 1;
});
