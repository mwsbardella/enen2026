// Tipos compartilhados pelo conteúdo do seed.

export type LinkSeed = { titulo: string; url: string; fonte: string };

export type TopicSeed = {
  subjectSlug: string;
  slug: string;
  titulo: string;
  descricao: string;
  ordem: number;
  material: {
    titulo: string;
    resumoMarkdown: string;
    links: LinkSeed[];
  };
};

export type BookSeed = {
  slug: string;
  titulo: string;
  autor: string;
  prioridade: "ALTA" | "MEDIA" | "BAIXA";
  escola: string;
  temasRedacao: string[];
  resumoMarkdown: string;
  links: LinkSeed[];
  ordem: number;
};

export type RepertorioSeed = {
  categoria: "dado" | "lei" | "obra" | "citacao" | "filosofo";
  titulo: string;
  conteudo: string;
  temas: string[];
  fonte?: string;
};
