// Cronograma SUGERIDO de 19 semanas até o 1º dia de prova (08/11/2026).
//
// META DE COBERTURA: TODOS os assuntos de estudo (51 da taxonomia + 5 de redação =
// 56 tópicos) e TODOS os 17 livros aparecem em algum item. Um item pode agrupar
// VÁRIOS materiais (ref.slugs[]) — a conclusão só ocorre quando todos estiverem
// estudados. Os slugs são resolvidos para IDs no seed (prisma/seed.ts).
//
// Verificação automática de cobertura: scripts/check-cronograma.ts.

export type TaskRef =
  | { kind: "material"; slugs: string[] } // 1+ topic slugs -> StudyMaterial/topic
  | { kind: "book"; slugs: string[] } // 1+ book slugs
  | { kind: "exam"; slug: string } // Exam slug
  | { kind: "redacao" } // abre o editor de redação
  | { kind: "revisar"; slugs: string[] }; // revisão (aponta p/ materiais já vistos)

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
      { titulo: "Ler: Interpretação de texto e funções da linguagem", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slugs: ["lng-interpretacao", "lng-funcoes"] } },
      { titulo: "Ler: Base da Redação (estrutura + 5 competências)", tipo: "LER_MATERIAL", subjectSlug: "redacao", ref: { kind: "material", slugs: ["estrutura-dissertativa", "cinco-competencias"] } },
      { titulo: "Simulado diagnóstico de Linguagens", tipo: "RESPONDER_EXAM", subjectSlug: "linguagens", ref: { kind: "exam", slug: "simulado-linguagens" } },
      { titulo: "Começar leitura: Vidas Secas", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["vidas-secas"] } },
    ],
  },
  {
    numero: 2,
    foco: "Matemática de maior peso: Geometria (plana, espacial e analítica)",
    tasks: [
      { titulo: "Ler: Geometria plana, espacial e analítica", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slugs: ["mat-geometria-plana", "mat-geometria-espacial", "mat-geometria-analitica"] } },
      { titulo: "Simulado temático de Matemática", tipo: "RESPONDER_EXAM", subjectSlug: "matematica", ref: { kind: "exam", slug: "simulado-matematica" } },
      { titulo: "Leitura: O Cortiço", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["o-cortico"] } },
    ],
  },
  {
    numero: 3,
    foco: "Humanas: Trabalho/economia + Física: Mecânica",
    tasks: [
      { titulo: "Ler: Trabalho, economia e indústria", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slugs: ["hum-trabalho"] } },
      { titulo: "Ler: Física — Mecânica", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slugs: ["nat-mecanica"] } },
      { titulo: "Simulado temático de Natureza", tipo: "RESPONDER_EXAM", subjectSlug: "natureza", ref: { kind: "exam", slug: "simulado-natureza" } },
      { titulo: "Leitura: Dom Casmurro", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["dom-casmurro"] } },
    ],
  },
  {
    numero: 4,
    foco: "Linguagens: Literatura + Matemática: Estatística e Probabilidade + Redação",
    tasks: [
      { titulo: "Ler: Literatura e escolas literárias", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slugs: ["lng-literatura"] } },
      { titulo: "Ler: Estatística e Probabilidade", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slugs: ["mat-estatistica", "mat-probabilidade"] } },
      { titulo: "Escrever 1ª redação (tema livre)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
      { titulo: "Leitura: Memórias Póstumas de Brás Cubas", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["memorias-postumas-bras-cubas"] } },
    ],
  },
  {
    numero: 5,
    foco: "Humanas: Filosofia + Química: Físico-química e Química geral",
    tasks: [
      { titulo: "Ler: Filosofia — ética, política e conhecimento", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slugs: ["hum-filosofia"] } },
      { titulo: "Ler: Físico-química e Química geral/estequiometria", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slugs: ["nat-fisico-quimica", "nat-quimica-geral"] } },
      { titulo: "Simulado temático de Humanas", tipo: "RESPONDER_EXAM", subjectSlug: "humanas", ref: { kind: "exam", slug: "simulado-humanas" } },
      { titulo: "Leitura: Capitães da Areia", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["capitaes-da-areia"] } },
    ],
  },
  {
    numero: 6,
    foco: "Matemática: Razão/proporção e Porcentagem + Gêneros e figuras",
    tasks: [
      { titulo: "Ler: Razão, proporção e Porcentagem/financeira", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slugs: ["mat-razao-proporcao", "mat-porcentagem"] } },
      { titulo: "Ler: Gêneros textuais e Figuras de linguagem", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slugs: ["lng-generos", "lng-figuras"] } },
      { titulo: "Leitura: Morte e Vida Severina", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["morte-e-vida-severina"] } },
    ],
  },
  {
    numero: 7,
    foco: "Humanas: Urbanização e Cidadania + Redação (repertório e intervenção)",
    tasks: [
      { titulo: "Ler: Urbanização/população e Cidadania/direitos", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slugs: ["hum-urbanizacao", "hum-cidadania"] } },
      { titulo: "Ler: Construção de repertório e Proposta de intervenção", tipo: "LER_MATERIAL", subjectSlug: "redacao", ref: { kind: "material", slugs: ["construcao-de-repertorio", "proposta-de-intervencao"] } },
      { titulo: "Escrever redação (tema social)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
      { titulo: "Leitura: Quarto de Despejo", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["quarto-de-despejo"] } },
    ],
  },
  {
    numero: 8,
    foco: "Natureza: Termologia e Genética + Variação linguística e Gramática",
    tasks: [
      { titulo: "Ler: Física — Termologia e Biologia — Genética/evolução", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slugs: ["nat-termologia", "nat-genetica"] } },
      { titulo: "Ler: Variação linguística e Gramática/coesão", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slugs: ["lng-variacao", "lng-gramatica"] } },
      { titulo: "Leitura: Torto Arado", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["torto-arado"] } },
    ],
  },
  {
    numero: 9,
    foco: "Matemática: Combinatória e Grandezas + Sociologia",
    tasks: [
      { titulo: "Ler: Análise combinatória e Grandezas/medidas", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slugs: ["mat-combinatoria", "mat-grandezas"] } },
      { titulo: "Ler: Sociologia — cultura e movimentos sociais", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slugs: ["hum-sociologia"] } },
      { titulo: "Leitura: O Quinze", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["o-quinze"] } },
    ],
  },
  {
    numero: 10,
    foco: "Língua estrangeira e Artes + Química orgânica",
    tasks: [
      { titulo: "Ler: Língua estrangeira (Inglês e Espanhol)", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slugs: ["lng-ingles", "lng-espanhol"] } },
      { titulo: "Ler: Artes e patrimônio cultural", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slugs: ["lng-artes"] } },
      { titulo: "Ler: Química orgânica", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slugs: ["nat-organica"] } },
      { titulo: "Leitura: Iracema", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["iracema"] } },
    ],
  },
  {
    numero: 11,
    foco: "Humanas: Globalização, Meio ambiente e Agrária + Química ambiental + Redação",
    tasks: [
      { titulo: "Ler: Globalização, Geografia física/ambiente e Questão agrária", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slugs: ["hum-globalizacao", "hum-ambiente", "hum-agraria"] } },
      { titulo: "Ler: Química e meio ambiente", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slugs: ["nat-quimica-ambiental"] } },
      { titulo: "Escrever redação (meio ambiente/tecnologia)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
      { titulo: "Leitura: A Hora da Estrela", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["a-hora-da-estrela"] } },
    ],
  },
  {
    numero: 12,
    foco: "Natureza: Eletricidade e Ondas + Matemática: Funções e Álgebra",
    tasks: [
      { titulo: "Ler: Física — Eletricidade/magnetismo e Ondas/óptica", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slugs: ["nat-eletricidade", "nat-ondas"] } },
      { titulo: "Ler: Funções e Álgebra/equações", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slugs: ["mat-funcoes", "mat-algebra"] } },
      { titulo: "Leitura: Auto da Compadecida", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["auto-da-compadecida"] } },
    ],
  },
  {
    numero: 13,
    foco: "Linguagens: Ed. física, Tecnologias e Intertextualidade + Brasil Colônia",
    tasks: [
      { titulo: "Ler: Ed. física, Tecnologias/mídias e Intertextualidade", tipo: "LER_MATERIAL", subjectSlug: "linguagens", ref: { kind: "material", slugs: ["lng-corpo", "lng-tecnologias", "lng-intertextualidade"] } },
      { titulo: "Ler: Brasil Colônia e escravidão", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slugs: ["hum-colonia"] } },
      { titulo: "Leitura: Macunaíma", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["macunaima"] } },
    ],
  },
  {
    numero: 14,
    foco: "História do Brasil (Império→Ditadura) + Matemática: Progressões e Lógica + Redação",
    tasks: [
      { titulo: "Ler: Império/Primeira República, Era Vargas e Ditadura militar", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slugs: ["hum-imperio", "hum-vargas", "hum-ditadura"] } },
      { titulo: "Ler: Sequências/progressões e Raciocínio lógico", tipo: "LER_MATERIAL", subjectSlug: "matematica", ref: { kind: "material", slugs: ["mat-progressoes", "mat-logica"] } },
      { titulo: "Escrever redação cronometrada (até 1h)", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
      { titulo: "Leitura: Sentimento do Mundo", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["sentimento-do-mundo"] } },
    ],
  },
  {
    numero: 15,
    foco: "Prova completa do 1º dia (Linguagens + Humanas) — 2024 + Biologia (Ecologia e Citologia)",
    tasks: [
      { titulo: "Refazer prova oficial — Linguagens (2024)", tipo: "RESPONDER_EXAM", subjectSlug: "linguagens", ref: { kind: "exam", slug: "prova-2024-linguagens" } },
      { titulo: "Refazer prova oficial — Humanas (2024)", tipo: "RESPONDER_EXAM", subjectSlug: "humanas", ref: { kind: "exam", slug: "prova-2024-humanas" } },
      { titulo: "Ler: Biologia — Ecologia e Citologia/bioquímica", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slugs: ["nat-ecologia", "nat-citologia"] } },
      { titulo: "Leitura: O Navio Negreiro", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["o-navio-negreiro"] } },
    ],
  },
  {
    numero: 16,
    foco: "História mundial + Biologia: Fisiologia + Revisão de Natureza",
    tasks: [
      { titulo: "Ler: História mundial contemporânea", tipo: "LER_MATERIAL", subjectSlug: "humanas", ref: { kind: "material", slugs: ["hum-mundial"] } },
      { titulo: "Ler: Biologia — Fisiologia e corpo humano", tipo: "LER_MATERIAL", subjectSlug: "natureza", ref: { kind: "material", slugs: ["nat-fisiologia"] } },
      { titulo: "Revisar: Mecânica e Físico-química", tipo: "REVISAR", subjectSlug: "natureza", ref: { kind: "revisar", slugs: ["nat-mecanica", "nat-fisico-quimica"] } },
      { titulo: "Leitura: Olhos d'água", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["olhos-dagua"] } },
    ],
  },
  {
    numero: 17,
    foco: "Prova completa do 2º dia (Natureza + Matemática) — 2024 + Redação (o que zera)",
    tasks: [
      { titulo: "Refazer prova oficial — Natureza (2024)", tipo: "RESPONDER_EXAM", subjectSlug: "natureza", ref: { kind: "exam", slug: "prova-2024-natureza" } },
      { titulo: "Refazer prova oficial — Matemática (2024)", tipo: "RESPONDER_EXAM", subjectSlug: "matematica", ref: { kind: "exam", slug: "prova-2024-matematica" } },
      { titulo: "Ler: O que zera a redação", tipo: "LER_MATERIAL", subjectSlug: "redacao", ref: { kind: "material", slugs: ["o-que-zera-a-redacao"] } },
      { titulo: "Leitura: Grande Sertão: Veredas", tipo: "LER_LIVRO", ref: { kind: "book", slugs: ["grande-sertao-veredas"] } },
    ],
  },
  {
    numero: 18,
    foco: "Revisão geral dos assuntos que mais caem + prova 2025",
    tasks: [
      { titulo: "Revisar: Cidadania e Filosofia", tipo: "REVISAR", subjectSlug: "humanas", ref: { kind: "revisar", slugs: ["hum-cidadania", "hum-filosofia"] } },
      { titulo: "Escrever redação final cronometrada", tipo: "ESCREVER_REDACAO", subjectSlug: "redacao", ref: { kind: "redacao" } },
      { titulo: "Refazer prova oficial — Humanas (2025)", tipo: "RESPONDER_EXAM", subjectSlug: "humanas", ref: { kind: "exam", slug: "prova-2025-humanas" } },
    ],
  },
  {
    numero: 19,
    foco: "Reta final: revisão leve e descanso estratégico",
    tasks: [
      { titulo: "Revisar: Interpretação de texto e repertório de redação", tipo: "REVISAR", subjectSlug: "linguagens", ref: { kind: "revisar", slugs: ["lng-interpretacao", "construcao-de-repertorio"] } },
      { titulo: "Simulado leve de Linguagens", tipo: "RESPONDER_EXAM", subjectSlug: "linguagens", ref: { kind: "exam", slug: "simulado-linguagens" } },
    ],
  },
];
