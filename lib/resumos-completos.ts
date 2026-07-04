/**
 * Resumos COMPLETOS das obras de literatura (aba "Resumo completo").
 *
 * Cada obra tem um GUIA DIDÁTICO em lib/resumos/<slug>.ts: ficha rápida,
 * obra em um parágrafo, contexto, enredo passo a passo COM desfecho,
 * quem é quem, símbolos decifrados, citações explicadas, como cai no
 * ENEM, confusões comuns e "se você só puder lembrar 5 coisas".
 *
 * Conteúdo estático no código — de propósito, fora do banco — para ser
 * versionado no git. A chave é o `slug` do Book. A página
 * app/literatura/[slug] busca aqui pelo slug; se não houver entrada,
 * a aba simplesmente não aparece.
 */
import { resumo as vidasSecas } from "./resumos/vidas-secas";
import { resumo as oCortico } from "./resumos/o-cortico";
import { resumo as domCasmurro } from "./resumos/dom-casmurro";
import { resumo as memoriasPostumas } from "./resumos/memorias-postumas-bras-cubas";
import { resumo as quartoDeDespejo } from "./resumos/quarto-de-despejo";
import { resumo as capitaesDaAreia } from "./resumos/capitaes-da-areia";
import { resumo as tortoArado } from "./resumos/torto-arado";
import { resumo as morteEVidaSeverina } from "./resumos/morte-e-vida-severina";
import { resumo as oQuinze } from "./resumos/o-quinze";
import { resumo as iracema } from "./resumos/iracema";
import { resumo as aHoraDaEstrela } from "./resumos/a-hora-da-estrela";
import { resumo as autoDaCompadecida } from "./resumos/auto-da-compadecida";
import { resumo as sentimentoDoMundo } from "./resumos/sentimento-do-mundo";
import { resumo as macunaima } from "./resumos/macunaima";
import { resumo as oNavioNegreiro } from "./resumos/o-navio-negreiro";
import { resumo as olhosDagua } from "./resumos/olhos-dagua";
import { resumo as grandeSertaoVeredas } from "./resumos/grande-sertao-veredas";

export const resumosCompletos: Record<string, string> = {
  "vidas-secas": vidasSecas,
  "o-cortico": oCortico,
  "dom-casmurro": domCasmurro,
  "memorias-postumas-bras-cubas": memoriasPostumas,
  "quarto-de-despejo": quartoDeDespejo,
  "capitaes-da-areia": capitaesDaAreia,
  "torto-arado": tortoArado,
  "morte-e-vida-severina": morteEVidaSeverina,
  "o-quinze": oQuinze,
  "iracema": iracema,
  "a-hora-da-estrela": aHoraDaEstrela,
  "auto-da-compadecida": autoDaCompadecida,
  "sentimento-do-mundo": sentimentoDoMundo,
  "macunaima": macunaima,
  "o-navio-negreiro": oNavioNegreiro,
  "olhos-dagua": olhosDagua,
  "grande-sertao-veredas": grandeSertaoVeredas,
};
