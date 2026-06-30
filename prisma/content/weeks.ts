// Cronograma de 19 semanas até o 1º dia de prova (08/11/2026).
// FOCO GERAL (todas as áreas), priorizando os assuntos de MAIOR FREQUÊNCIA medida
// nas provas 2019–2025 (ver prisma/content/taxonomy.ts e a classificação). As
// tarefas apontam para os assuntos novos (slugs da taxonomia), simulados/provas
// reais e redação — resolvidos para IDs no seed.

export type TaskRef =
  | { kind: "material"; slug: string } // topic slug -> StudyMaterial
  | { kind: "exam"; slug: string } // Exam slug
  | { kind: "book"; slug: string } // Book slug
  | { kind: "redacao" } // abre o editor de redação
  | { kind: "revisar"; slug?: string }; // revisão (pode apontar p/ um material)

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
    foco: "Diagnóstico + Interpretação de texto e base de Redação",
    tasks: [
      { titulo: "Ler: Interpretação e compreensão de texto", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "lng-interpretacao" } },
      { titulo: "Ler: Estrutura dissertativo-argumentativa", tipo: "LER_MATERIAL", subjectSlug: "redacao", ref: { kind: "material", slug: "estrutura-dissertativa" } },
      { titulo: "Simulado diagnóstico de Linguagens", tipo: "RESPONDER_EXAM", subjectSlug: "linguagens", ref: { kind: "exam", slug: "simulado-linguagens" } },
      { titulo: "Começar leitura: Vidas Secas", tipo: "LER_LIVRO", ref: { kind: "book", slug: "vidas-secas" } },
    ],
  },
  {
    numero: 2,
    foco: "Matemática de maior peso: Geometria plana e espacial",
    tasks: [
      { titulo: "Ler: Geometria plana", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "mat-geometria-plana" } },
      { titulo: "Ler: Geometria espacial", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "mat-geometria-espacial" } },
      { titulo: "Simulado temático de Matemática", tipo: "RESPONDER_EXAM", subjectSlug: "matematica", ref: { kind: "exam", slug: "simulado-matematica" } },
    ],
  },
  {
    numero: 3,
    foco: "Humanas: Trabalho/economia + Física: Mecânica",
    tasks: [
      { titulo: "Ler: Trabalho, economia e industrialização", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "hum-trabalho" } },
      { titulo: "Ler: Física — Mecânica", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slug: "nat-mecanica" } },
      { titulo: "Simulado temático de Natureza", tipo: "RESPONDER_EXAM", subjectSlug: "natureza", ref: { kind: "exam", slug: "simulado-natureza" } },
    ],
  },
  {
    numero: 4,
    foco: "Linguagens: Literatura + Matemática: Estatística + Redação",
    tasks: [
      { titulo: "Ler: Literatura e escolas literárias", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "lng-literatura" } },
      { titulo: "Ler: Estatística", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "mat-estatistica" } },
      { titulo: "Escrever 1ª redação (tema livre)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
    ],
  },
  {
    numero: 5,
    foco: "Humanas: Filosofia + Química: Físico-química",
    tasks: [
      { titulo: "Ler: Filosofia — ética, política e conhecimento", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "hum-filosofia" } },
      { titulo: "Ler: Físico-química", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slug: "nat-fisico-quimica" } },
      { titulo: "Simulado temático de Humanas", tipo: "RESPONDER_EXAM", subjectSlug: "humanas", ref: { kind: "exam", slug: "simulado-humanas" } },
    ],
  },
  {
    numero: 6,
    foco: "Matemática: Razão/proporção e Porcentagem + Gêneros",
    tasks: [
      { titulo: "Ler: Razão, proporção e regra de três", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "mat-razao-proporcao" } },
      { titulo: "Ler: Porcentagem e matemática financeira", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "mat-porcentagem" } },
      { titulo: "Ler: Gêneros e tipos textuais", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "lng-generos" } },
    ],
  },
  {
    numero: 7,
    foco: "Humanas: Urbanização e Cidadania + Redação (repertório)",
    tasks: [
      { titulo: "Ler: Urbanização e população", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "hum-urbanizacao" } },
      { titulo: "Ler: Cidadania, direitos e Estado", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "hum-cidadania" } },
      { titulo: "Ler: Construção de repertório", tipo: "LER_MATERIAL", subjectSlug: "redacao", ref: { kind: "material", slug: "construcao-de-repertorio" } },
      { titulo: "Escrever redação (tema social)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
    ],
  },
  {
    numero: 8,
    foco: "Natureza: Termologia e Genética + Variação linguística",
    tasks: [
      { titulo: "Ler: Física — Termologia e energia", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slug: "nat-termologia" } },
      { titulo: "Ler: Biologia — Genética e evolução", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slug: "nat-genetica" } },
      { titulo: "Ler: Variação linguística", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "lng-variacao" } },
    ],
  },
  {
    numero: 9,
    foco: "Matemática: Probabilidade e Grandezas + Sociologia",
    tasks: [
      { titulo: "Ler: Probabilidade", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "mat-probabilidade" } },
      { titulo: "Ler: Grandezas, medidas e unidades", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "mat-grandezas" } },
      { titulo: "Ler: Sociologia — cultura e movimentos sociais", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "hum-sociologia" } },
      { titulo: "Leitura: Quarto de Despejo", tipo: "LER_LIVRO", ref: { kind: "book", slug: "quarto-de-despejo" } },
    ],
  },
  {
    numero: 10,
    foco: "Língua estrangeira e Artes + Química orgânica",
    tasks: [
      { titulo: "Ler: Língua estrangeira (Inglês/Espanhol) — estratégia", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "lng-ingles" } },
      { titulo: "Ler: Artes e patrimônio cultural", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "lng-artes" } },
      { titulo: "Ler: Química orgânica", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slug: "nat-organica" } },
    ],
  },
  {
    numero: 11,
    foco: "Humanas: Globalização e Meio ambiente + Redação",
    tasks: [
      { titulo: "Ler: Globalização e geopolítica", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "hum-globalizacao" } },
      { titulo: "Ler: Geografia física e meio ambiente", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "hum-ambiente" } },
      { titulo: "Escrever redação (meio ambiente/tecnologia)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
    ],
  },
  {
    numero: 12,
    foco: "Natureza: Eletricidade e Ondas + Matemática: Funções",
    tasks: [
      { titulo: "Ler: Física — Eletricidade e magnetismo", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slug: "nat-eletricidade" } },
      { titulo: "Ler: Física — Ondas, óptica e som", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slug: "nat-ondas" } },
      { titulo: "Ler: Funções", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slug: "mat-funcoes" } },
    ],
  },
  {
    numero: 13,
    foco: "Linguagens: Ed. física e Tecnologias + Brasil Colônia",
    tasks: [
      { titulo: "Ler: Educação física, corpo e esporte", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "lng-corpo" } },
      { titulo: "Ler: Tecnologias e mídias da informação", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slug: "lng-tecnologias" } },
      { titulo: "Ler: Brasil Colônia e escravidão", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slug: "hum-colonia" } },
      { titulo: "Leitura: Torto Arado", tipo: "LER_LIVRO", ref: { kind: "book", slug: "torto-arado" } },
    ],
  },
  {
    numero: 14,
    foco: "Revisão de Matemática + Redação cronometrada",
    tasks: [
      { titulo: "Revisar: Geometria (plana e espacial)", tipo: "REVISAR", subjectSlug: "matematica", ref: { kind: "revisar", slug: "mat-geometria-plana" } },
      { titulo: "Revisar: Estatística", tipo: "REVISAR", subjectSlug: "matematica", ref: { kind: "revisar", slug: "mat-estatistica" } },
      { titulo: "Escrever redação cronometrada (até 1h)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
    ],
  },
  {
    numero: 15,
    foco: "Prova completa do 1º dia (Linguagens + Humanas) — 2024",
    tasks: [
      { titulo: "Refazer prova oficial — Linguagens (2024)", tipo: "RESPONDER_EXAM", subjectSlug: "linguagens", ref: { kind: "exam", slug: "prova-2024-linguagens" } },
      { titulo: "Refazer prova oficial — Humanas (2024)", tipo: "RESPONDER_EXAM", subjectSlug: "humanas", ref: { kind: "exam", slug: "prova-2024-humanas" } },
      { titulo: "Revisar: Literatura", tipo: "REVISAR", subjectSlug: "linguagens", ref: { kind: "revisar", slug: "lng-literatura" } },
    ],
  },
  {
    numero: 16,
    foco: "Revisão de Natureza (Mecânica e Físico-química) + simulado",
    tasks: [
      { titulo: "Revisar: Física — Mecânica", tipo: "REVISAR", subjectSlug: "natureza", ref: { kind: "revisar", slug: "nat-mecanica" } },
      { titulo: "Revisar: Físico-química", tipo: "REVISAR", subjectSlug: "natureza", ref: { kind: "revisar", slug: "nat-fisico-quimica" } },
      { titulo: "Simulado temático de Natureza", tipo: "RESPONDER_EXAM", subjectSlug: "natureza", ref: { kind: "exam", slug: "simulado-natureza" } },
    ],
  },
  {
    numero: 17,
    foco: "Prova completa do 2º dia (Natureza + Matemática) — 2024",
    tasks: [
      { titulo: "Refazer prova oficial — Natureza (2024)", tipo: "RESPONDER_EXAM", subjectSlug: "natureza", ref: { kind: "exam", slug: "prova-2024-natureza" } },
      { titulo: "Refazer prova oficial — Matemática (2024)", tipo: "RESPONDER_EXAM", subjectSlug: "matematica", ref: { kind: "exam", slug: "prova-2024-matematica" } },
      { titulo: "Revisar: Razão, proporção e porcentagem", tipo: "REVISAR", subjectSlug: "matematica", ref: { kind: "revisar", slug: "mat-razao-proporcao" } },
    ],
  },
  {
    numero: 18,
    foco: "Revisão geral dos assuntos que mais caem + prova 2025",
    tasks: [
      { titulo: "Revisar: Cidadania e direitos", tipo: "REVISAR", subjectSlug: "humanas", ref: { kind: "revisar", slug: "hum-cidadania" } },
      { titulo: "Escrever redação final cronometrada", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
      { titulo: "Refazer prova oficial — Humanas (2025)", tipo: "RESPONDER_EXAM", subjectSlug: "humanas", ref: { kind: "exam", slug: "prova-2025-humanas" } },
    ],
  },
  {
    numero: 19,
    foco: "Reta final: revisão leve e descanso estratégico",
    tasks: [
      { titulo: "Revisar: Interpretação de texto", tipo: "REVISAR", subjectSlug: "linguagens", ref: { kind: "revisar", slug: "lng-interpretacao" } },
      { titulo: "Revisar repertórios coringa de redação", tipo: "REVISAR", subjectSlug: "redacao", ref: { kind: "revisar", slug: "construcao-de-repertorio" } },
      { titulo: "Simulado leve de Linguagens", tipo: "RESPONDER_EXAM", subjectSlug: "linguagens", ref: { kind: "exam", slug: "simulado-linguagens" } },
    ],
  },
];
