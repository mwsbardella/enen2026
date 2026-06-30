// Conteúdo de estudo de CIÊNCIAS HUMANAS, gerado a partir da engenharia reversa
// das provas (2019–2025): os assuntos seguem a taxonomia (prisma/content/taxonomy.ts)
// e estão ORDENADOS pela frequência real medida no corpus. Cada material foca no
// recorte que o ENEM efetivamente cobra do tema (não um panorama genérico).
//
// `topicSlug` casa com um Topic já criado pela classificação. O seed cria o
// StudyMaterial correspondente; as questões reais do assunto aparecem via topicId.

import type { LinkSeed } from "../types";

export type MaterialSeed = {
  topicSlug: string;
  titulo: string;
  resumoMarkdown: string;
  links: LinkSeed[];
};

const link = (titulo: string, url: string, fonte: string): LinkSeed => ({ titulo, url, fonte });

export const humanasMateriais: MaterialSeed[] = [
  {
    topicSlug: "hum-trabalho",
    titulo: "Trabalho, economia e industrialização",
    resumoMarkdown: `## Trabalho, economia e industrialização

É o tema **mais recorrente** de Humanas no ENEM recente. As questões quase nunca cobram "decoreba": partem de um texto (sociológico, histórico ou econômico) e pedem para relacionar uma **transformação no mundo do trabalho** a suas causas e consequências sociais.

**O que mais cai:**
- **Revolução Industrial e suas fases**: a passagem da manufatura para a maquinofatura, a disciplina fabril, o relógio e a divisão do trabalho.
- **Taylorismo / Fordismo / Toyotismo**: do trabalhador-apêndice da esteira (produção em massa, rígida) à acumulação flexível, terceirização e "just in time". O ENEM adora pedir para identificar **qual modelo** o texto descreve.
- **Mais-valia e exploração** (leitura marxista): a diferença entre o valor produzido e o salário pago.
- **Mundo do trabalho hoje**: uberização, precarização, desemprego estrutural, automação e o impacto da tecnologia no emprego.

**Como a banca arma a pegadinha:** a alternativa correta costuma ligar a mudança técnica a um **efeito social** (perda de autonomia do trabalhador, aumento do controle, desemprego). Desconfie de alternativas que só descrevem a técnica sem a dimensão humana/social.`,
    links: [
      link("Revolução Industrial — Brasil Escola", "https://brasilescola.uol.com.br/historiag/revolucao-industrial.htm", "Brasil Escola"),
      link("Taylorismo, Fordismo e Toyotismo — Mundo Educação", "https://mundoeducacao.uol.com.br/geografia/fordismo-taylorismo.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-filosofia",
    titulo: "Filosofia: ética, política e conhecimento",
    resumoMarkdown: `## Filosofia: ética, política e conhecimento

Tema de altíssima incidência. O ENEM apresenta um **trecho de um filósofo** e pede para identificar a tese central. Não exige biografia — exige **entender o conceito** no texto.

**Eixos mais cobrados:**
- **Filosofia política e contratualismo**: Hobbes (o medo e o Estado absoluto), Locke (direitos naturais, propriedade), Rousseau (vontade geral, "o homem nasce bom"). Foco em **legitimidade do poder** e origem do Estado.
- **Ética**: a virtude e o meio-termo em **Aristóteles**; o dever e o imperativo categórico em **Kant**; a relação entre liberdade e responsabilidade.
- **Antiguidade**: Sócrates (o "conhece-te a ti mesmo", a maiêutica), Platão (mito da caverna, mundo das ideias).
- **Filosofia contemporânea**: Foucault (poder, disciplina, biopolítica, subjetivação), a Escola de Frankfurt (indústria cultural).

**Estratégia de prova:** leia o texto buscando *o que o filósofo defende* e *contra o que ele se opõe*. A resposta correta reformula a tese do autor — não acrescenta uma opinião externa. Cuidado com alternativas historicamente verdadeiras, mas que **não estão no texto**.`,
    links: [
      link("Contratualismo — Brasil Escola", "https://brasilescola.uol.com.br/filosofia/contratualismo.htm", "Brasil Escola"),
      link("Ética em Aristóteles e Kant — Mundo Educação", "https://mundoeducacao.uol.com.br/filosofia/etica.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-urbanizacao",
    titulo: "Urbanização e população",
    resumoMarkdown: `## Urbanização e população

A cidade é cenário constante das questões. O recorte preferido da banca é a **urbanização desigual** brasileira e seus problemas socioespaciais.

**O que mais cai:**
- **Processo de urbanização no Brasil**: rápido, tardio e concentrado; o **êxodo rural** ligado à industrialização e à mecanização do campo.
- **Problemas urbanos**: segregação socioespacial, periferização, favelização, gentrificação, mobilidade, déficit habitacional.
- **Rede e hierarquia urbana**: metrópoles, conurbação, regiões metropolitanas, cidades globais.
- **Demografia**: transição demográfica (queda da natalidade e envelhecimento), pirâmides etárias, bônus demográfico, fluxos migratórios.

**Como a banca cobra:** geralmente um gráfico, mapa ou texto sobre uma cidade, pedindo a **causa** de um fenômeno (por que a periferia cresce, por que há segregação) ou sua **consequência social**. A resposta certa conecta a dinâmica urbana à **desigualdade** e ao acesso (ou falta de acesso) a serviços e ao direito à cidade.`,
    links: [
      link("Urbanização brasileira — Mundo Educação", "https://mundoeducacao.uol.com.br/geografia/urbanizacao-brasileira.htm", "Mundo Educação"),
      link("Transição demográfica — Brasil Escola", "https://brasilescola.uol.com.br/geografia/transicao-demografica.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "hum-sociologia",
    titulo: "Sociologia: cultura e movimentos sociais",
    resumoMarkdown: `## Sociologia: cultura e movimentos sociais

A Sociologia no ENEM é fortemente **crítica e identitária**, valorizando diversidade e direitos.

**O que mais cai:**
- **Cultura e identidade**: cultura como construção social, **relativismo cultural x etnocentrismo**, diversidade, cultura erudita/popular/de massa.
- **Indústria cultural** (Adorno e Horkheimer): a mercantilização da cultura, a padronização e a passividade do público.
- **Movimentos sociais**: feminista, negro, LGBTQIA+, indígena, ambiental, sem-terra. O ENEM valoriza a **luta por reconhecimento e direitos** e a ação coletiva como motor de mudança.
- **Desigualdade e estratificação**: classe, gênero e raça como marcadores; interseccionalidade.

**Pegadinha clássica:** a resposta correta quase sempre **valoriza a diversidade**, denuncia preconceitos e reconhece a legitimidade dos movimentos sociais. Alternativas que naturalizam desigualdades, tratam culturas como "atrasadas" ou veem movimentos como "desordem" costumam estar erradas.`,
    links: [
      link("Movimentos sociais — Brasil Escola", "https://brasilescola.uol.com.br/sociologia/movimentos-sociais.htm", "Brasil Escola"),
      link("Indústria cultural — Mundo Educação", "https://mundoeducacao.uol.com.br/sociologia/industria-cultural.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-cidadania",
    titulo: "Cidadania, direitos e Estado",
    resumoMarkdown: `## Cidadania, direitos e Estado

Tema central e transversal — conecta História, Sociologia e atualidades. É também o eixo onde aparece o conteúdo mais próximo do **Direito**.

**O que mais cai:**
- **Conceito de cidadania**: a tríade de direitos de **T. H. Marshall** — civis, políticos e sociais — e sua conquista histórica.
- **Constituição de 1988** ("Constituição Cidadã"): direitos fundamentais, Estado Democrático de Direito, instrumentos de participação (voto, plebiscito, referendo, iniciativa popular).
- **Direitos Humanos**: a Declaração de 1948, sua universalidade e os desafios de efetivação.
- **Políticas públicas e participação**: como o Estado garante (ou nega) direitos; movimentos por ampliação de cidadania.

**Como a banca cobra:** um dispositivo legal, um trecho da Constituição ou um caso concreto, pedindo qual **princípio democrático** ou **direito** está em jogo. A resposta correta liga o texto à **ampliação da cidadania** e à proteção de grupos vulneráveis. Útil também como **repertório de redação**.`,
    links: [
      link("Cidadania e os direitos de Marshall — Mundo Educação", "https://mundoeducacao.uol.com.br/sociologia/cidadania.htm", "Mundo Educação"),
      link("Constituição de 1988 — Brasil Escola", "https://brasilescola.uol.com.br/historiab/constituicao-1988.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "hum-ambiente",
    titulo: "Geografia física e meio ambiente",
    resumoMarkdown: `## Geografia física e meio ambiente

O ENEM aborda o meio ambiente de forma **aplicada e crítica**, ligando processos naturais à ação humana e à sustentabilidade.

**O que mais cai:**
- **Impactos ambientais**: desmatamento, queimadas, poluição, contaminação de águas, erosão e perda de solo, mineração.
- **Clima e mudanças climáticas**: efeito estufa, aquecimento global, fenômenos como El Niño/La Niña, ilhas de calor urbanas.
- **Recursos hídricos**: bacias, aquíferos, crise hídrica, usos conflitantes da água.
- **Biomas brasileiros**: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal — características e ameaças.
- **Sustentabilidade**: desenvolvimento sustentável, energias renováveis, acordos ambientais.

**Como a banca cobra:** parte de um caso real (um derramamento, uma seca, um bioma ameaçado) e pede a **causa**, a **consequência** ou a **solução** mais adequada. A resposta certa concilia **atividade econômica e conservação**, evitando tanto o "crescer a qualquer custo" quanto soluções irreais.`,
    links: [
      link("Biomas brasileiros — Mundo Educação", "https://mundoeducacao.uol.com.br/geografia/biomas-brasileiros.htm", "Mundo Educação"),
      link("Mudanças climáticas — Brasil Escola", "https://brasilescola.uol.com.br/geografia/aquecimento-global.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "hum-agraria",
    titulo: "Geografia agrária e questão da terra",
    resumoMarkdown: `## Geografia agrária e questão da terra

O campo brasileiro aparece pela ótica da **concentração fundiária** e do contraste entre agronegócio e agricultura familiar.

**O que mais cai:**
- **Estrutura fundiária**: a concentração de terras (latifúndio), herança histórica das sesmarias e da Lei de Terras de 1850.
- **Agronegócio x agricultura familiar**: produtividade e exportação de um lado; segurança alimentar e emprego no campo de outro.
- **Modernização agrícola** ("Revolução Verde"): mecanização, agrotóxicos, transgênicos e seus impactos sociais e ambientais.
- **Conflitos e reforma agrária**: MST, luta pela terra, êxodo rural.

**Como a banca cobra:** textos ou dados sobre produção e posse da terra, pedindo a relação entre **modelo agrícola** e **efeitos sociais/ambientais**. A resposta correta costuma evidenciar tensões: aumento de produtividade *versus* concentração, desemprego rural ou degradação ambiental.`,
    links: [
      link("Estrutura fundiária no Brasil — Mundo Educação", "https://mundoeducacao.uol.com.br/geografia/estrutura-fundiaria.htm", "Mundo Educação"),
      link("Revolução Verde — Brasil Escola", "https://brasilescola.uol.com.br/geografia/revolucao-verde.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "hum-colonia",
    titulo: "Brasil Colônia e escravidão",
    resumoMarkdown: `## Brasil Colônia e escravidão

Base da formação do Brasil e tema sempre presente, com forte ênfase na **escravidão e na resistência**.

**O que mais cai:**
- **Sistema colonial**: pacto/exclusivo metropolitano, economia açucareira, mineração, mão de obra escravizada.
- **Escravidão**: o tráfico atlântico, o trabalho nos engenhos e minas, a violência e a desumanização.
- **Resistência negra e indígena**: quilombos (Palmares, Zumbi), revoltas, fugas, manutenção de culturas e religiosidades de matriz africana e indígena.
- **Sociedade colonial**: hierarquia, papel da Igreja e dos jesuítas, catequese e conflito com os povos originários.

**Como a banca cobra:** valoriza o **protagonismo e a resistência** dos escravizados e indígenas (não os trata como vítimas passivas) e cobra as **heranças** da escravidão na desigualdade racial atual. Conecta-se a Sociologia (racismo estrutural) e à Lei 10.639/2003 (ensino de História e Cultura Afro-Brasileira).`,
    links: [
      link("Escravidão no Brasil — Brasil Escola", "https://brasilescola.uol.com.br/historiab/escravidao-no-brasil.htm", "Brasil Escola"),
      link("Quilombos e resistência — Mundo Educação", "https://mundoeducacao.uol.com.br/historiadobrasil/quilombo.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-globalizacao",
    titulo: "Globalização e geopolítica",
    resumoMarkdown: `## Globalização e geopolítica

Tema que conecta economia, política e território em escala mundial.

**O que mais cai:**
- **Globalização**: integração de mercados, fluxos de capital, informação e mercadorias; o papel das **empresas multinacionais** e das tecnologias de comunicação.
- **Desigualdades do mundo globalizado**: divisão internacional do trabalho, dependência, exclusão digital, fluxos migratórios e xenofobia.
- **Blocos econômicos**: UE, Mercosul, e a lógica de integração regional.
- **Geopolítica**: nova ordem mundial multipolar, conflitos por território e recursos, tensões entre grandes potências.

**Como a banca cobra:** um texto ou mapa sobre fluxos globais, pedindo quem **ganha** e quem **perde** com a globalização, ou a estratégia geopolítica de um país. A resposta certa percebe a globalização como processo **desigual e seletivo**, não como integração harmônica.`,
    links: [
      link("Globalização — Mundo Educação", "https://mundoeducacao.uol.com.br/geografia/globalizacao.htm", "Mundo Educação"),
      link("Blocos econômicos — Brasil Escola", "https://brasilescola.uol.com.br/geografia/blocos-economicos.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "hum-imperio",
    titulo: "Império e Primeira República",
    resumoMarkdown: `## Império e Primeira República

Do Brasil independente à República Velha — período de construção do Estado nacional.

**O que mais cai:**
- **Independência e Primeiro Reinado**: o processo de 1822, a Constituição de 1824 (outorgada, Poder Moderador).
- **Segundo Reinado**: economia cafeeira, imigração, a longa crise da escravidão até a **Abolição (1888)**.
- **Proclamação da República (1889)** e a **República Velha**: política do **café com leite**, **coronelismo**, voto de cabresto, exclusão popular.
- **Revoltas**: Canudos, Contestado, Vacina, Chibata — manifestações da exclusão social e do autoritarismo.

**Como a banca cobra:** textos de época ou dispositivos legais (ex.: leis eleitorais), pedindo o caráter **elitista e excludente** da política do período. A resposta certa destaca a distância entre a cidadania formal e a real.`,
    links: [
      link("República Velha — Brasil Escola", "https://brasilescola.uol.com.br/historiab/republica-velha.htm", "Brasil Escola"),
      link("Coronelismo — Mundo Educação", "https://mundoeducacao.uol.com.br/historiadobrasil/coronelismo.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-mundial",
    titulo: "História mundial contemporânea",
    resumoMarkdown: `## História mundial contemporânea

Grandes processos do mundo nos séculos XIX–XX.

**O que mais cai:**
- **Guerras Mundiais**: causas (imperialismo, nacionalismo), totalitarismos (**nazismo e fascismo**), o Holocausto.
- **Guerra Fria**: bipolaridade EUA x URSS, corrida armamentista e espacial, conflitos periféricos, a queda do **Muro de Berlim (1989)**.
- **Revoluções**: Francesa (liberdade, igualdade, fraternidade), Industrial, Russa (1917).
- **Descolonização** da África e da Ásia e a Guerra Fria no Terceiro Mundo.

**Como a banca cobra:** relaciona um evento mundial a **ideologias** e a seus desdobramentos. A resposta certa identifica corretamente a corrente política (liberalismo, socialismo, totalitarismo) e seu contexto.`,
    links: [
      link("Guerra Fria — Brasil Escola", "https://brasilescola.uol.com.br/historiag/guerra-fria.htm", "Brasil Escola"),
      link("Totalitarismo: nazismo e fascismo — Mundo Educação", "https://mundoeducacao.uol.com.br/historiageral/nazismo.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-vargas",
    titulo: "Era Vargas e populismo",
    resumoMarkdown: `## Era Vargas e populismo

Período-chave da formação do Brasil moderno (1930–1945 e o retorno em 1951–1954).

**O que mais cai:**
- **Ascensão de Vargas**: a Revolução de 1930, o fim da República Velha.
- **Estado Novo (1937–1945)**: ditadura, centralização, censura (DIP), propaganda.
- **Trabalhismo e populismo**: a **CLT (1943)**, os direitos trabalhistas como instrumento de legitimação e controle; a relação direta líder–povo.
- **Industrialização**: substituição de importações, criação de estatais (CSN, Petrobras no 2º governo).

**Como a banca cobra:** textos sobre as políticas trabalhistas ou a propaganda do regime, pedindo a **dupla face** do varguismo: conquista de direitos *e* cooptação/controle dos trabalhadores.`,
    links: [
      link("Era Vargas — Brasil Escola", "https://brasilescola.uol.com.br/historiab/era-vargas.htm", "Brasil Escola"),
      link("Populismo no Brasil — Mundo Educação", "https://mundoeducacao.uol.com.br/historiadobrasil/populismo.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-ditadura",
    titulo: "Ditadura militar e redemocratização",
    resumoMarkdown: `## Ditadura militar e redemocratização

O regime militar (1964–1985) e a volta da democracia — tema sensível e muito ligado à cidadania.

**O que mais cai:**
- **Golpe de 1964** e a instalação do regime; os **Atos Institucionais**, com destaque para o **AI-5 (1968)**.
- **Repressão e resistência**: censura, tortura, perseguição política; a oposição (cultural, estudantil, armada).
- **"Milagre econômico"** e seu custo social (concentração de renda, endividamento).
- **Redemocratização**: a abertura "lenta, gradual e segura", a **Anistia (1979)**, o movimento **Diretas Já (1984)** e a **Constituição de 1988**.

**Como a banca cobra:** documentos de época, charges ou músicas de protesto, pedindo o caráter **autoritário** do regime e o **valor da democracia** reconquistada. Conecta-se diretamente a Direitos Humanos e cidadania.`,
    links: [
      link("Ditadura militar no Brasil — Brasil Escola", "https://brasilescola.uol.com.br/historiab/ditadura-militar.htm", "Brasil Escola"),
      link("Diretas Já — Mundo Educação", "https://mundoeducacao.uol.com.br/historiadobrasil/diretas-ja.htm", "Mundo Educação"),
    ],
  },
];
