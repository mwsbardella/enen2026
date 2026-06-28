import type { RepertorioSeed } from "./types";

// Banco de "repertórios coringa" consultável na tela de Redação.
export const repertorios: RepertorioSeed[] = [
  {
    categoria: "lei",
    titulo: "Constituição Federal de 1988",
    conteudo:
      "A 'Constituição Cidadã' estabelece os direitos fundamentais, o Estado Democrático de Direito e define a educação, a saúde e a segurança como direitos de todos e dever do Estado (art. 6º e 205). Coringa para temas de cidadania, direitos sociais e papel do Estado.",
    temas: ["cidadania", "direitos", "educação", "saúde", "Estado"],
    fonte: "Brasil, 1988",
  },
  {
    categoria: "lei",
    titulo: "Declaração Universal dos Direitos Humanos (1948)",
    conteudo:
      "Documento da ONU que afirma a dignidade e a igualdade de todos os seres humanos. Útil para praticamente qualquer tema de inclusão, dignidade, liberdade e combate à discriminação.",
    temas: ["dignidade", "igualdade", "direitos humanos", "discriminação"],
    fonte: "ONU, 1948",
  },
  {
    categoria: "lei",
    titulo: "ECA — Estatuto da Criança e do Adolescente (1990)",
    conteudo:
      "Garante proteção integral a crianças e adolescentes, com prioridade absoluta (art. 227 da CF). Ideal para temas de infância, educação, trabalho infantil e abandono.",
    temas: ["criança", "adolescente", "educação", "abandono", "infância"],
    fonte: "Brasil, 1990",
  },
  {
    categoria: "lei",
    titulo: "Lei Maria da Penha (2006)",
    conteudo:
      "Cria mecanismos para coibir a violência doméstica e familiar contra a mulher. Coringa para temas de gênero, violência contra a mulher e desigualdade.",
    temas: ["mulher", "violência", "gênero", "desigualdade"],
    fonte: "Brasil, 2006",
  },
  {
    categoria: "lei",
    titulo: "LGPD — Lei Geral de Proteção de Dados (2018)",
    conteudo:
      "Regula o tratamento de dados pessoais no Brasil, garantindo privacidade e controle sobre informações. Excelente para temas de tecnologia, internet, privacidade e vigilância.",
    temas: ["tecnologia", "internet", "privacidade", "dados", "vigilância"],
    fonte: "Brasil, 2018",
  },
  {
    categoria: "filosofo",
    titulo: "Zygmunt Bauman — Modernidade líquida",
    conteudo:
      "O sociólogo descreve a sociedade contemporânea como 'líquida': relações, instituições e valores são fluidos, instáveis e descartáveis. Aplica-se a temas de consumo, relações virtuais, individualismo e efemeridade.",
    temas: ["tecnologia", "consumo", "relações", "individualismo", "sociedade"],
    fonte: "Bauman, 'Modernidade Líquida'",
  },
  {
    categoria: "filosofo",
    titulo: "Michel Foucault — Vigiar e Punir / biopoder",
    conteudo:
      "Foucault analisa como o poder disciplina e vigia os corpos de forma capilar (o 'panóptico'). Útil para temas de vigilância, controle social, sistema prisional e tecnologia.",
    temas: ["vigilância", "controle", "tecnologia", "prisão", "poder"],
    fonte: "Foucault, 'Vigiar e Punir'",
  },
  {
    categoria: "filosofo",
    titulo: "Milton Santos — Espaço geográfico e globalização",
    conteudo:
      "O geógrafo brasileiro mostra a globalização como 'fábula', 'perversidade' e possibilidade, e cunha o 'meio técnico-científico-informacional'. Coringa para desigualdade socioespacial, globalização e território.",
    temas: ["globalização", "desigualdade", "espaço", "território", "cidade"],
    fonte: "Milton Santos, 'Por uma outra globalização'",
  },
  {
    categoria: "filosofo",
    titulo: "Hannah Arendt — Banalidade do mal",
    conteudo:
      "Arendt cunha o conceito ao analisar como atrocidades podem ser cometidas por pessoas comuns que apenas 'seguem ordens', sem reflexão. Útil para intolerância, autoritarismo e responsabilidade individual.",
    temas: ["intolerância", "autoritarismo", "ética", "responsabilidade"],
    fonte: "Arendt, 'Eichmann em Jerusalém'",
  },
  {
    categoria: "obra",
    titulo: "1984 — George Orwell",
    conteudo:
      "Distopia sobre um Estado totalitário que tudo vigia ('Big Brother') e manipula a verdade. Coringa para vigilância, tecnologia, desinformação, liberdade e controle.",
    temas: ["vigilância", "tecnologia", "desinformação", "liberdade", "controle"],
    fonte: "Orwell, '1984'",
  },
  {
    categoria: "obra",
    titulo: "Vidas Secas — Graciliano Ramos",
    conteudo:
      "Retrata uma família de retirantes fugindo da seca, simbolizando a exclusão e a desigualdade. Coringa para fome, seca, migração e dignidade.",
    temas: ["desigualdade", "fome", "seca", "migração", "pobreza"],
    fonte: "Graciliano Ramos, 'Vidas Secas'",
  },
  {
    categoria: "obra",
    titulo: "Quarto de Despejo — Carolina Maria de Jesus",
    conteudo:
      "Diário real de uma catadora negra na favela: 'A favela é o quarto de despejo da cidade'. Poderoso para fome, favela, racismo e voz da mulher negra.",
    temas: ["fome", "favela", "racismo", "mulher", "desigualdade"],
    fonte: "Carolina Maria de Jesus",
  },
  {
    categoria: "dado",
    titulo: "Cidadania como acesso a direitos (T. H. Marshall)",
    conteudo:
      "O sociólogo divide a cidadania em três dimensões conquistadas historicamente: direitos civis, políticos e sociais. Cidadania plena é o acesso efetivo às três. Coringa para qualquer tema de cidadania e inclusão.",
    temas: ["cidadania", "direitos", "inclusão", "desigualdade"],
    fonte: "T. H. Marshall, 'Cidadania e Classe Social'",
  },
  {
    categoria: "dado",
    titulo: "Revolução Industrial e suas consequências",
    conteudo:
      "Marco da transição para a produção mecanizada (séc. XVIII–XIX), que transformou o trabalho, a cidade e a sociedade, mas gerou exploração e desigualdade. Útil para trabalho, tecnologia, urbanização e meio ambiente.",
    temas: ["trabalho", "tecnologia", "urbanização", "meio ambiente"],
    fonte: "História — Revolução Industrial",
  },
  {
    categoria: "citacao",
    titulo: "Paulo Freire — Educação",
    conteudo:
      "'Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.' Coringa para temas de educação, leitura e transformação social.",
    temas: ["educação", "leitura", "transformação", "cidadania"],
    fonte: "Paulo Freire",
  },
];
