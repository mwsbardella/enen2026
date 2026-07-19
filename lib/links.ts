// Junção dos links de leitura (escritos à mão no conteúdo) com as videoaulas
// curadas em prisma/content/videos.ts.
//
// Fica separado porque quatro caminhos diferentes gravam links no banco
// (materiais das 4 áreas, tópicos de redação e livros, em dois seeds) e todos
// precisam do mesmo comportamento.

import { videosPorSlug } from "../prisma/content/videos";
import type { LinkSeed } from "../prisma/content/types";

/**
 * Links do item + as videoaulas do mesmo slug.
 *
 * Vídeo primeiro: é o recurso que o aluno costuma querer antes do texto, e foi
 * o formato pedido explicitamente. Slug sem vídeo curado devolve só os links
 * originais — alguns assuntos não têm videoaula boa e é melhor assim do que
 * apontar para um vídeo que não é sobre o tema.
 */
export function comVideos(slug: string, links: LinkSeed[]): LinkSeed[] {
  return [...(videosPorSlug[slug] ?? []), ...links];
}
