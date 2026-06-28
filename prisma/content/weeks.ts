// Cronograma de 19 semanas até o 1º dia de prova (08/11/2026).
// Peso maior em Linguagens, Humanas e Redação (área do aluno); Matemática e
// Natureza em manutenção. Cada tarefa é EXECUTÁVEL (aponta para material/prova/
// livro/redação por slug — resolvido para IDs no seed).

export type TaskRef =
  | { kind: "material"; slug: string } // topic slug -> StudyMaterial
  | { kind: "exam"; slug: string } // Exam slug
  | { kind: "book"; slug: string } // Book slug
  | { kind: "redacao" } // abre o editor de redação
  | { kind: "revisar" }; // tarefa de revisão livre

export type TaskTipo =
  | "LER_MATERIAL"
  | "RESPONDER_EXAM"
  | "ESCREVER_REDACAO"
  | "LER_LIVRO"
  | "REVISAR";

export type WeekTaskSeed = {
  titulo: string;
  tipo: TaskTipo;
  subjectSlug?: string;
  ref: TaskRef;
};

export type WeekSeed = {
  numero: number;
  foco: string;
  tasks: WeekTaskSeed[];
};

export const weeks: WeekSeed[] = [
  {
    numero: 1,
    foco: "Diagnóstico + base de Redação e Interpretação",
    tasks: [
      { titulo: "Ler: Estrutura dissertativo-argumentativa", tipo: "LER_MATERIAL", subjectSlug: "redacao", ref: { kind: "material", slug: "estrutura-dissertativa" } },
      { titulo: "Ler: Interpretação de texto", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "interpretacao-de-texto" } },
      { titulo: "Simulado diagnóstico de Linguagens", tipo: "RESPONDER_EXAM", subjectSlug: "linguagens", ref: { kind: "exam", slug: "simulado-linguagens" } },
      { titulo: "Começar a leitura: Vidas Secas", tipo: "LER_LIVRO", ref: { kind: "book", slug: "vidas-secas" } },
    ],
  },
  {
    numero: 2,
    foco: "Redação: as 5 competências + Funções da linguagem",
    tasks: [
      { titulo: "Ler: As 5 competências do ENEM", tipo: "LER_MATERIAL", subjectSlug: "redacao", ref: { kind: "material", slug: "cinco-competencias" } },
      { titulo: "Ler: Funções da linguagem", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "funcoes-da-linguagem" } },
      { titulo: "Escrever 1ª redação (tema livre)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
    ],
  },
  {
    numero: 3,
    foco: "Humanas: Brasil Colônia e escravidão",
    tasks: [
      { titulo: "Ler: Brasil Colônia e escravidão", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "brasil-colonia-escravidao" } },
      { titulo: "Ler: Variação linguística", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "variacao-linguistica" } },
      { titulo: "Simulado temático de Humanas", tipo: "RESPONDER_EXAM", subjectSlug: "humanas", ref: { kind: "exam", slug: "simulado-humanas" } },
      { titulo: "Leitura: O Cortiço", tipo: "LER_LIVRO", ref: { kind: "book", slug: "o-cortico" } },
    ],
  },
  {
    numero: 4,
    foco: "Redação: proposta de intervenção + Figuras de linguagem",
    tasks: [
      { titulo: "Ler: Proposta de intervenção", tipo: "LER_MATERIAL", subjectSlug: "redacao", ref: { kind: "material", slug: "proposta-de-intervencao" } },
      { titulo: "Ler: Figuras de linguagem", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "figuras-de-linguagem" } },
      { titulo: "Escrever redação com foco na intervenção", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
    ],
  },
  {
    numero: 5,
    foco: "Humanas: Império e República Velha",
    tasks: [
      { titulo: "Ler: Império e República Velha", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "imperio-republica-velha" } },
      { titulo: "Revisar manutenção: Porcentagem", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "porcentagem" } },
      { titulo: "Simulado temático de Matemática", tipo: "RESPONDER_EXAM", subjectSlug: "matematica", ref: { kind: "exam", slug: "simulado-matematica" } },
      { titulo: "Leitura: Dom Casmurro", tipo: "LER_LIVRO", ref: { kind: "book", slug: "dom-casmurro" } },
    ],
  },
  {
    numero: 6,
    foco: "Linguagens: Intertextualidade e Gêneros textuais",
    tasks: [
      { titulo: "Ler: Intertextualidade", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "intertextualidade" } },
      { titulo: "Ler: Gêneros textuais", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "generos-textuais" } },
      { titulo: "Simulado temático de Linguagens", tipo: "RESPONDER_EXAM", subjectSlug: "linguagens", ref: { kind: "exam", slug: "simulado-linguagens" } },
    ],
  },
  {
    numero: 7,
    foco: "Humanas: Era Vargas + Redação (repertório)",
    tasks: [
      { titulo: "Ler: Era Vargas", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "era-vargas" } },
      { titulo: "Ler: Construção de repertório", tipo: "LER_MATERIAL", subjectSlug: "redacao", ref: { kind: "material", slug: "construcao-de-repertorio" } },
      { titulo: "Escrever redação (tema social)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
      { titulo: "Leitura: Memórias Póstumas de Brás Cubas", tipo: "LER_LIVRO", ref: { kind: "book", slug: "memorias-postumas-bras-cubas" } },
    ],
  },
  {
    numero: 8,
    foco: "Humanas: Ditadura militar e redemocratização",
    tasks: [
      { titulo: "Ler: Ditadura militar e redemocratização", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "ditadura-redemocratizacao" } },
      { titulo: "Revisar manutenção: Estatística básica", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "estatistica-basica" } },
      { titulo: "Simulado temático de Humanas", tipo: "RESPONDER_EXAM", subjectSlug: "humanas", ref: { kind: "exam", slug: "simulado-humanas" } },
    ],
  },
  {
    numero: 9,
    foco: "Cidadania: Constituição de 1988 + Literatura",
    tasks: [
      { titulo: "Ler: Constituição de 1988 e cidadania", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "constituicao-1988-cidadania" } },
      { titulo: "Ler: Escolas literárias (panorama)", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "escolas-literarias" } },
      { titulo: "Leitura: Quarto de Despejo", tipo: "LER_LIVRO", ref: { kind: "book", slug: "quarto-de-despejo" } },
      { titulo: "Escrever redação (cidadania/direitos)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
    ],
  },
  {
    numero: 10,
    foco: "Geografia: agrária e urbanização",
    tasks: [
      { titulo: "Ler: Geografia agrária e urbanização", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "geografia-agraria-urbanizacao" } },
      { titulo: "Revisar manutenção: Razão e proporção", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "razao-proporcao-regra-de-tres" } },
      { titulo: "Simulado temático de Matemática", tipo: "RESPONDER_EXAM", subjectSlug: "matematica", ref: { kind: "exam", slug: "simulado-matematica" } },
      { titulo: "Leitura: Capitães da Areia", tipo: "LER_LIVRO", ref: { kind: "book", slug: "capitaes-da-areia" } },
    ],
  },
  {
    numero: 11,
    foco: "Humanas: Globalização e geopolítica",
    tasks: [
      { titulo: "Ler: Globalização e geopolítica", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "globalizacao-geopolitica" } },
      { titulo: "Ler: O que zera a redação", tipo: "LER_MATERIAL", subjectSlug: "redacao", ref: { kind: "material", slug: "o-que-zera-a-redacao" } },
      { titulo: "Escrever redação (globalização/tecnologia)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
    ],
  },
  {
    numero: 12,
    foco: "Sociologia e Filosofia: conceitos-chave",
    tasks: [
      { titulo: "Ler: Sociologia e Filosofia (conceitos)", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "sociologia-filosofia-conceitos" } },
      { titulo: "Simulado temático de Humanas", tipo: "RESPONDER_EXAM", subjectSlug: "humanas", ref: { kind: "exam", slug: "simulado-humanas" } },
      { titulo: "Leitura: Torto Arado", tipo: "LER_LIVRO", ref: { kind: "book", slug: "torto-arado" } },
    ],
  },
  {
    numero: 13,
    foco: "Natureza (manutenção): Ecologia + Linguagens (revisão)",
    tasks: [
      { titulo: "Ler: Ecologia e meio ambiente", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slug: "ecologia-meio-ambiente" } },
      { titulo: "Revisar: Funções da linguagem", tipo: "REVISAR", subjectSlug: "linguagens", ref: { kind: "material", slug: "funcoes-da-linguagem" } },
      { titulo: "Simulado temático de Natureza", tipo: "RESPONDER_EXAM", subjectSlug: "natureza", ref: { kind: "exam", slug: "simulado-natureza" } },
    ],
  },
  {
    numero: 14,
    foco: "Revisão de Redação + escrita cronometrada",
    tasks: [
      { titulo: "Revisar: As 5 competências", tipo: "REVISAR", subjectSlug: "redacao", ref: { kind: "material", slug: "cinco-competencias" } },
      { titulo: "Escrever redação cronometrada (até 1h)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
      { titulo: "Simulado temático de Linguagens", tipo: "RESPONDER_EXAM", subjectSlug: "linguagens", ref: { kind: "exam", slug: "simulado-linguagens" } },
    ],
  },
  {
    numero: 15,
    foco: "Prova completa de Linguagens e Humanas (1º dia)",
    tasks: [
      { titulo: "Refazer prova oficial — Humanas (2022)", tipo: "RESPONDER_EXAM", subjectSlug: "humanas", ref: { kind: "exam", slug: "prova-2022-humanas" } },
      { titulo: "Refazer prova oficial — Linguagens (2022)", tipo: "RESPONDER_EXAM", subjectSlug: "linguagens", ref: { kind: "exam", slug: "prova-2022-linguagens" } },
      { titulo: "Revisar: Escolas literárias", tipo: "REVISAR", subjectSlug: "linguagens", ref: { kind: "material", slug: "escolas-literarias" } },
    ],
  },
  {
    numero: 16,
    foco: "Natureza (manutenção): Física e Química essenciais",
    tasks: [
      { titulo: "Ler: Leis de Newton", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slug: "leis-de-newton" } },
      { titulo: "Ler: Química básica (pH)", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slug: "quimica-basica" } },
      { titulo: "Simulado temático de Natureza", tipo: "RESPONDER_EXAM", subjectSlug: "natureza", ref: { kind: "exam", slug: "simulado-natureza" } },
    ],
  },
  {
    numero: 17,
    foco: "Matemática (manutenção): Funções, Geometria e Probabilidade",
    tasks: [
      { titulo: "Ler: Funções afim e quadrática", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "funcoes-afim-quadratica" } },
      { titulo: "Ler: Geometria (áreas e volumes)", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "geometria-areas-volumes" } },
      { titulo: "Refazer prova oficial — Matemática (2023)", tipo: "RESPONDER_EXAM", subjectSlug: "matematica", ref: { kind: "exam", slug: "prova-2023-matematica" } },
    ],
  },
  {
    numero: 18,
    foco: "Revisão geral + redação final treinada",
    tasks: [
      { titulo: "Revisar: Proposta de intervenção", tipo: "REVISAR", subjectSlug: "redacao", ref: { kind: "material", slug: "proposta-de-intervencao" } },
      { titulo: "Escrever redação final cronometrada", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
      { titulo: "Refazer prova oficial — Humanas (2023)", tipo: "RESPONDER_EXAM", subjectSlug: "humanas", ref: { kind: "exam", slug: "prova-2023-humanas" } },
    ],
  },
  {
    numero: 19,
    foco: "Reta final: revisão leve e descanso estratégico",
    tasks: [
      { titulo: "Revisar: Constituição de 1988 e cidadania", tipo: "REVISAR", subjectSlug: "humanas", ref: { kind: "material", slug: "constituicao-1988-cidadania" } },
      { titulo: "Revisar repertórios coringa de redação", tipo: "REVISAR", subjectSlug: "redacao", ref: { kind: "material", slug: "construcao-de-repertorio" } },
      { titulo: "Simulado leve de Linguagens", tipo: "RESPONDER_EXAM", subjectSlug: "linguagens", ref: { kind: "exam", slug: "simulado-linguagens" } },
    ],
  },
];
