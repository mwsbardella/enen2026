/**
 * Valida TODOS os links do conteúdo de estudo, de verdade — fazendo a requisição.
 *
 *   npm run check:links
 *
 * Existe porque metade dos links do projeto já esteve quebrada: URLs de aparência
 * plausível (brasilescola.uol.com.br/materia/assunto.htm) foram escritas sem
 * nunca terem sido abertas, e o aluno é quem descobria o 404. Regra do projeto:
 * nenhuma URL entra no conteúdo sem passar por aqui.
 *
 * Sai com código 1 se algum link estiver quebrado (para travar em CI/commit).
 *
 * Vídeos do YouTube são checados pelo endpoint oEmbed, que responde 404 quando o
 * vídeo foi removido/privado — a página /watch devolve 200 mesmo nesses casos.
 */
import { humanasMateriais } from "../prisma/content/materials/humanas";
import { matematicaMateriais } from "../prisma/content/materials/matematica";
import { linguagensMateriais } from "../prisma/content/materials/linguagens";
import { naturezaMateriais } from "../prisma/content/materials/natureza";
import { redacaoTopics } from "../prisma/content/redacao";
import { books } from "../prisma/content/books";
import { videosPorSlug } from "../prisma/content/videos";

type Alvo = { url: string; titulo: string; onde: string };

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36";
const CONCORRENCIA = 8;
const TIMEOUT_MS = 25_000;

function coletar(): Alvo[] {
  const alvos: Alvo[] = [];

  for (const m of [
    ...humanasMateriais,
    ...matematicaMateriais,
    ...linguagensMateriais,
    ...naturezaMateriais,
  ]) {
    for (const l of m.links) alvos.push({ url: l.url, titulo: l.titulo, onde: m.topicSlug });
  }
  for (const t of redacaoTopics) {
    for (const l of t.material.links) alvos.push({ url: l.url, titulo: l.titulo, onde: t.slug });
  }
  for (const b of books) {
    for (const l of b.links) alvos.push({ url: l.url, titulo: l.titulo, onde: b.slug });
  }
  for (const [slug, links] of Object.entries(videosPorSlug)) {
    for (const l of links) alvos.push({ url: l.url, titulo: l.titulo, onde: `${slug} (vídeo)` });
  }

  return alvos;
}

/** URL efetivamente checada: vídeo do YouTube vira consulta ao oEmbed. */
function urlDeChecagem(url: string): string {
  const m = url.match(/[?&]v=([A-Za-z0-9_-]{11})/);
  if (!m) return url;
  return `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${m[1]}&format=json`;
}

async function checar(alvo: Alvo): Promise<{ alvo: Alvo; status: number | string }> {
  const alvoUrl = urlDeChecagem(alvo.url);
  try {
    const res = await fetch(alvoUrl, {
      redirect: "follow",
      headers: { "User-Agent": UA },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    return { alvo, status: res.status };
  } catch (e) {
    return { alvo, status: e instanceof Error ? e.name : "ERRO" };
  }
}

/** Executa em lotes para não abrir centenas de conexões de uma vez. */
async function emLotes<T, R>(itens: T[], n: number, fn: (t: T) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let i = 0; i < itens.length; i += n) {
    out.push(...(await Promise.all(itens.slice(i, i + n).map(fn))));
  }
  return out;
}

async function main() {
  const alvos = coletar();
  // Uma requisição por URL distinta (a mesma URL pode aparecer em vários assuntos).
  const porUrl = new Map<string, Alvo[]>();
  for (const a of alvos) {
    const lista = porUrl.get(a.url) ?? [];
    lista.push(a);
    porUrl.set(a.url, lista);
  }

  console.log(
    `Checando ${porUrl.size} URLs distintas (${alvos.length} referências no conteúdo)...\n`,
  );

  const unicos = [...porUrl.keys()].map((url) => porUrl.get(url)![0]);
  const resultados = await emLotes(unicos, CONCORRENCIA, checar);

  const quebrados = resultados.filter((r) => r.status !== 200);
  const ok = resultados.length - quebrados.length;

  if (quebrados.length === 0) {
    console.log(`✓ Todos os ${ok} links responderam 200.`);
    return;
  }

  console.log(`✗ ${quebrados.length} link(s) quebrado(s) de ${resultados.length}:\n`);
  for (const q of quebrados.sort((a, b) => a.alvo.url.localeCompare(b.alvo.url))) {
    const usos = porUrl.get(q.alvo.url)!.map((a) => a.onde).join(", ");
    console.log(`  [${q.status}] ${q.alvo.url}`);
    console.log(`         "${q.alvo.titulo}" — em: ${usos}`);
  }
  console.log(`\n${ok} ok · ${quebrados.length} quebrados`);
  process.exitCode = 1;
}

main().catch((e) => {
  console.error("Erro:", e);
  process.exitCode = 1;
});
