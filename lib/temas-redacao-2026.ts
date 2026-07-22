/**
 * Temas PROVÁVEIS para a redação do ENEM 2026, com preparo, repertórios e links.
 *
 * Conteúdo estático, versionado no git (fora do banco) — a seção "Temas
 * prováveis 2026" da página /redacao renderiza a partir daqui.
 *
 * São PREVISÕES (não há como saber o tema oficial). A escolha segue o padrão
 * histórico do ENEM: problema social brasileiro, dissertativo-argumentativo,
 * com proposta de intervenção que respeite os direitos humanos — evitando
 * temas recém-usados (2022 povos tradicionais, 2023 trabalho de cuidado da
 * mulher, 2024 herança africana, 2025 envelhecimento). Servem para treinar
 * repertório e estrutura, não para "decorar o tema".
 */

import type { LinkItem } from "@/lib/json";

export type TemaProvavel2026 = {
  id: string;
  tema: string; // enunciado provável
  eixo: string; // campo temático (para agrupar mentalmente)
  probabilidade: "alta" | "media";
  porQueProvavel: string; // 1-2 frases de justificativa
  comoSePreparar: string; // markdown: tese, argumentos, proposta de intervenção
  repertorios: string[]; // dados, leis, citações e obras coringa para o tema
  links: LinkItem[]; // onde saber mais
};

export const temas2026: TemaProvavel2026[] = [
  {
    id: "desinformacao",
    tema: "Desafios para o combate à desinformação e o letramento midiático no Brasil",
    eixo: "Tecnologia e cidadania",
    probabilidade: "alta",
    porQueProvavel:
      "Fake news, deepfakes gerados por IA e o impacto nas eleições e na saúde pública mantêm o tema no centro do debate — e o ENEM adora cobrar cidadania na era digital.",
    comoSePreparar: `**Tese possível:** a desinformação corrói a democracia e a saúde pública, e enfrentá-la exige **educação midiática**, não apenas remoção de conteúdo.

**Argumentos:**
- A velocidade das redes faz a mentira circular mais que a correção (economia da atenção).
- Faltam **letramento midiático** e senso crítico para checar fontes.
- A IA generativa barateou a produção de conteúdo falso realista (deepfakes).

**Proposta de intervenção (agente + ação + meio + finalidade):**
> O **MEC**, em parceria com escolas, deve **inserir o letramento midiático no currículo** — por meio de oficinas de checagem de fatos — a fim de formar leitores críticos capazes de identificar notícias falsas.

**Cuidado:** não defenda censura; equilibre **liberdade de expressão** e **responsabilidade**.`,
    repertorios: [
      "Conceito de \"pós-verdade\" (Dicionário Oxford, palavra do ano de 2016).",
      "Zygmunt Bauman e a \"modernidade líquida\" — relações e informações efêmeras.",
      "Art. 5º da Constituição: liberdade de expressão acompanhada de responsabilidade.",
      "Agências de checagem (Lupa, Aos Fatos, Comprova) como resposta social.",
    ],
    links: [
      { titulo: "EducaMídia — educação midiática no Brasil", url: "https://educamidia.org.br/", fonte: "EducaMídia / Instituto Palavra Aberta" },
      { titulo: "Politize! — o que é desinformação", url: "https://www.politize.com.br/", fonte: "Politize!" },
    ],
  },
  {
    id: "inclusao-digital",
    tema: "Caminhos para a inclusão digital e o combate à exclusão tecnológica no Brasil",
    eixo: "Tecnologia e cidadania",
    probabilidade: "media",
    porQueProvavel:
      "A pandemia expôs quem ficou sem acesso a internet e dispositivos; com serviços públicos cada vez mais digitais (Gov.br, ensino, bancos), a exclusão vira exclusão de cidadania.",
    comoSePreparar: `**Tese possível:** sem acesso digital, parte da população fica privada de educação, trabalho e serviços — a inclusão digital é hoje uma questão de **cidadania**.

**Argumentos:**
- O "apagão digital" no ensino remoto durante a pandemia aprofundou desigualdades.
- Serviços essenciais (saúde, bancos, Gov.br) migraram para o online.
- Não basta o aparelho: falta **conectividade de qualidade** e letramento.

**Proposta de intervenção:**
> O **poder público municipal** deve **ampliar pontos de acesso gratuito e cursos de inclusão digital** — via telecentros e bibliotecas — para que cidadãos de baixa renda exerçam direitos no ambiente digital.`,
    repertorios: [
      "Dados do IBGE/TIC Domicílios sobre desigualdade de acesso à internet.",
      "Conceito de \"exclusão digital\" como nova forma de desigualdade social.",
      "Objetivos de Desenvolvimento Sustentável (ODS) da ONU — redução das desigualdades.",
      "Art. 6º da Constituição: educação e trabalho como direitos sociais.",
    ],
    links: [
      { titulo: "CETIC.br — pesquisas TIC Domicílios", url: "https://cetic.br/", fonte: "CETIC.br / NIC.br" },
      { titulo: "Agência Brasil — inclusão digital", url: "https://agenciabrasil.ebc.com.br/", fonte: "Agência Brasil" },
    ],
  },
  {
    id: "ia-trabalho",
    tema: "Impactos da inteligência artificial no mundo do trabalho brasileiro",
    eixo: "Trabalho e tecnologia",
    probabilidade: "alta",
    porQueProvavel:
      "A explosão das IAs generativas (2023–2026) mudou profissões inteiras; o debate sobre automação, requalificação e regulação está por toda parte.",
    comoSePreparar: `**Tese possível:** a automação por IA traz ganhos de produtividade, mas ameaça postos de trabalho e exige políticas de **requalificação profissional** para não ampliar a desigualdade.

**Argumentos:**
- Tarefas repetitivas (e até criativas) passam a ser feitas por máquinas.
- Surgem novas profissões, mas quem perde o emprego nem sempre consegue migrar.
- Sem regulação e formação, a tecnologia concentra renda.

**Proposta de intervenção:**
> O **Ministério do Trabalho**, junto a instituições como o Sistema S, deve **oferecer programas de requalificação em competências digitais** — por meio de cursos gratuitos — a fim de reintegrar trabalhadores afetados pela automação.

**Cuidado:** não caia no "a IA vai dominar o mundo" (ficção). Foque no **impacto social** concreto no Brasil.`,
    repertorios: [
      "3ª Revolução Industrial / Indústria 4.0 — automação e reestruturação do trabalho.",
      "Conceito de \"desemprego estrutural\" (tecnologia substitui mão de obra).",
      "Relatórios do Fórum Econômico Mundial sobre o futuro dos empregos.",
      "Charles Chaplin em \"Tempos Modernos\" — crítica à desumanização pela máquina.",
    ],
    links: [
      { titulo: "Agência Brasil — inteligência artificial e trabalho", url: "https://agenciabrasil.ebc.com.br/", fonte: "Agência Brasil" },
      { titulo: "Politize! — regulação da inteligência artificial", url: "https://www.politize.com.br/", fonte: "Politize!" },
    ],
  },
  {
    id: "saude-mental-juventude",
    tema: "Desafios para a promoção da saúde mental da juventude brasileira",
    eixo: "Saúde e sociedade",
    probabilidade: "alta",
    porQueProvavel:
      "Ansiedade, depressão e o efeito das redes sociais sobre adolescentes são pauta constante; o Brasil lidera índices de ansiedade e o tema dialoga direto com o público do ENEM.",
    comoSePreparar: `**Tese possível:** a pressão social, o uso intensivo de redes e o tabu em torno do tema adoecem a juventude — cuidar da saúde mental exige **acolhimento e informação**.

**Argumentos:**
- Redes sociais impõem padrões e a "cultura da comparação".
- O estigma faz muitos jovens não buscarem ajuda.
- Faltam serviços de apoio psicológico acessíveis (nas escolas e no SUS).

**Proposta de intervenção:**
> A **Secretaria de Educação**, em parceria com o SUS, deve **implantar núcleos de apoio psicológico nas escolas** — com psicólogos e rodas de conversa — para acolher estudantes e reduzir o estigma sobre o sofrimento mental.`,
    repertorios: [
      "Dados da OMS/OPAS: Brasil entre os países com maior prevalência de ansiedade.",
      "Setembro Amarelo — campanha nacional de prevenção ao suicídio.",
      "Lei 14.819/2024 — Política Nacional de Saúde Mental nas escolas.",
      "Byung-Chul Han e a \"sociedade do cansaço\" — excesso de desempenho adoece.",
    ],
    links: [
      { titulo: "OPAS/OMS Brasil — saúde mental", url: "https://www.paho.org/pt/brasil", fonte: "OPAS/OMS Brasil" },
      { titulo: "CVV — Centro de Valorização da Vida", url: "https://www.cvv.org.br/", fonte: "CVV" },
    ],
  },
  {
    id: "cidades-clima",
    tema: "Adaptação das cidades brasileiras às mudanças climáticas",
    eixo: "Meio ambiente",
    probabilidade: "alta",
    porQueProvavel:
      "Enchentes (como no Rio Grande do Sul em 2024), ondas de calor e a COP30 em Belém (2025) colocaram a crise climática e as cidades no centro do debate nacional.",
    comoSePreparar: `**Tese possível:** eventos climáticos extremos atingem mais as cidades e as populações vulneráveis — adaptar o espaço urbano é urgente para proteger vidas.

**Argumentos:**
- Ocupação desordenada e falta de áreas verdes agravam enchentes e "ilhas de calor".
- Quem mais sofre são as periferias, em áreas de risco.
- Prevenção custa menos que reconstrução após a tragédia.

**Proposta de intervenção:**
> As **prefeituras**, com apoio do governo federal, devem **investir em infraestrutura verde e drenagem** — como parques lineares e "cidades-esponja" — a fim de reduzir enchentes e proteger a população vulnerável.`,
    repertorios: [
      "Enchentes no Rio Grande do Sul (2024) — exemplo de evento climático extremo.",
      "COP30 em Belém (2025) — compromissos do Brasil no clima.",
      "Conceito de \"justiça climática\": pobres sofrem mais e poluem menos.",
      "Acordo de Paris (2015) e as metas de redução de emissões.",
    ],
    links: [
      { titulo: "Agência Brasil — meio ambiente e clima", url: "https://agenciabrasil.ebc.com.br/", fonte: "Agência Brasil" },
      { titulo: "Ministério do Meio Ambiente e Mudança do Clima", url: "https://www.gov.br/mma/pt-br", fonte: "Gov.br / MMA" },
    ],
  },
  {
    id: "saneamento",
    tema: "Caminhos para a universalização do saneamento básico no Brasil",
    eixo: "Saúde e infraestrutura",
    probabilidade: "media",
    porQueProvavel:
      "Milhões de brasileiros ainda não têm coleta de esgoto ou água tratada; o Marco do Saneamento (2020) fixou metas para 2033, mantendo o tema atual.",
    comoSePreparar: `**Tese possível:** a falta de saneamento é uma questão de **saúde pública e dignidade** — universalizá-lo previne doenças e reduz desigualdades.

**Argumentos:**
- Esgoto a céu aberto espalha doenças (diarreia, verminoses, hepatite A).
- A ausência atinge sobretudo periferias e o Norte/Nordeste.
- Cada real em saneamento economiza vários em saúde.

**Proposta de intervenção:**
> O **governo federal**, via companhias estaduais e o Marco do Saneamento, deve **ampliar a rede de água e esgoto nas regiões desatendidas** — com investimento público e fiscalização das metas — para garantir saúde à população.`,
    repertorios: [
      "Marco Legal do Saneamento (Lei 14.026/2020) — meta de universalização até 2033.",
      "Dados do Instituto Trata Brasil sobre déficit de esgoto tratado.",
      "ODS 6 da ONU: água potável e saneamento para todos.",
      "Relação saneamento → queda de internações no SUS.",
    ],
    links: [
      { titulo: "Instituto Trata Brasil — dados de saneamento", url: "https://tratabrasil.org.br/", fonte: "Instituto Trata Brasil" },
      { titulo: "Agência Brasil — saneamento básico", url: "https://agenciabrasil.ebc.com.br/", fonte: "Agência Brasil" },
    ],
  },
  {
    id: "etarismo",
    tema: "O combate ao etarismo e a valorização da pessoa idosa no Brasil",
    eixo: "População e direitos",
    probabilidade: "media",
    porQueProvavel:
      "O Brasil envelhece rápido (Censo 2022) e o preconceito etário no trabalho e nas redes cresce — tema próximo do de 2025, mas com recorte de preconceito.",
    comoSePreparar: `**Tese possível:** à medida que o Brasil envelhece, o etarismo — preconceito por idade — nega direitos e oportunidades ao idoso, exigindo mudança cultural.

**Argumentos:**
- Idosos enfrentam barreiras no mercado de trabalho e invisibilidade nas mídias.
- Faltam acessibilidade e serviços adaptados.
- A experiência dos mais velhos é subvalorizada.

**Proposta de intervenção:**
> O **poder público**, com a mídia e a sociedade civil, deve **promover campanhas contra o etarismo e valorizar o envelhecimento ativo** — por meio de programas culturais e de qualificação — para garantir dignidade à pessoa idosa.

**Cuidado:** diferencie do tema de 2025 focando no **preconceito** (etarismo), não só na demografia.`,
    repertorios: [
      "Etarismo (ageísmo) — preconceito e discriminação por idade.",
      "Estatuto da Pessoa Idosa (Lei 10.741/2003).",
      "Censo 2022 (IBGE): inversão da pirâmide etária brasileira.",
      "Conceito de \"envelhecimento ativo\" da OMS.",
    ],
    links: [
      { titulo: "Ministério dos Direitos Humanos — pessoa idosa", url: "https://www.gov.br/mdh/pt-br", fonte: "Gov.br / MDHC" },
      { titulo: "IBGE — Censo 2022 e envelhecimento", url: "https://www.ibge.gov.br/", fonte: "IBGE" },
    ],
  },
  {
    id: "bets",
    tema: "Desafios para a regulação das apostas esportivas on-line (bets) no Brasil",
    eixo: "Economia e sociedade",
    probabilidade: "media",
    porQueProvavel:
      "A explosão das \"bets\", o endividamento de famílias e a regulamentação recente (2024–2025) tornaram o tema um fenômeno social e econômico atualíssimo.",
    comoSePreparar: `**Tese possível:** a popularização das apostas on-line, impulsionada por publicidade agressiva, gera endividamento e vício — exigindo **regulação e educação financeira**.

**Argumentos:**
- Propaganda com influenciadores banaliza o jogo entre jovens e endividados.
- Famílias comprometem renda essencial (até o Bolsa Família) com apostas.
- O vício em jogos é um problema de saúde pública.

**Proposta de intervenção:**
> O **poder público**, via órgãos de defesa do consumidor, deve **restringir a publicidade de apostas e promover educação financeira** — com campanhas e regras claras — a fim de proteger a população do endividamento.`,
    repertorios: [
      "Lei 14.790/2023 — regulamentação das apostas de quota fixa (bets).",
      "Dados do Banco Central sobre gastos de famílias com apostas.",
      "Conceito de \"ludopatia\" (vício em jogos) reconhecido pela OMS.",
      "Código de Defesa do Consumidor — publicidade abusiva.",
    ],
    links: [
      { titulo: "Agência Brasil — regulação das bets", url: "https://agenciabrasil.ebc.com.br/", fonte: "Agência Brasil" },
      { titulo: "Ministério da Fazenda — apostas de quota fixa", url: "https://www.gov.br/fazenda/pt-br", fonte: "Gov.br / Fazenda" },
    ],
  },
  {
    id: "inseguranca-alimentar",
    tema: "O enfrentamento da insegurança alimentar e da fome no Brasil",
    eixo: "Desigualdade social",
    probabilidade: "media",
    porQueProvavel:
      "O Brasil saiu e voltou ao Mapa da Fome nos últimos anos; o contraste entre ser grande produtor de alimentos e ter milhões passando fome é típico recorte ENEM.",
    comoSePreparar: `**Tese possível:** num país que é potência agrícola, a fome persiste por **desigualdade de acesso** — combatê-la exige políticas de renda e distribuição.

**Argumentos:**
- O Brasil produz alimento de sobra, mas a renda concentrada impede o acesso.
- Insegurança alimentar afeta rendimento escolar e saúde das crianças.
- Desperdício e má distribuição agravam o problema.

**Proposta de intervenção:**
> O **governo federal**, com estados e a sociedade civil, deve **fortalecer programas de transferência de renda e agricultura familiar** — via compras públicas de alimentos e bancos de alimentos — para garantir o direito à alimentação.`,
    repertorios: [
      "Josué de Castro e a obra \"Geografia da Fome\" — fome como problema social, não natural.",
      "Mapa da Fome da ONU (FAO) — Brasil dentro e fora dele.",
      "Art. 6º da Constituição: alimentação como direito social.",
      "PNAE — Programa Nacional de Alimentação Escolar.",
    ],
    links: [
      { titulo: "Rede PENSSAN — inquéritos sobre insegurança alimentar", url: "https://olheparaafome.com.br/", fonte: "Rede PENSSAN" },
      { titulo: "FAO Brasil — segurança alimentar", url: "https://www.fao.org/brasil/pt", fonte: "FAO" },
    ],
  },
  {
    id: "valorizacao-professor",
    tema: "Caminhos para a valorização e permanência do professor na educação básica brasileira",
    eixo: "Educação",
    probabilidade: "media",
    porQueProvavel:
      "A falta de professores, baixos salários e o adoecimento docente ameaçam a educação básica; o próprio ENEM avalia a educação, o que torna o tema simbólico.",
    comoSePreparar: `**Tese possível:** sem professores valorizados não há educação de qualidade — a desvalorização e a sobrecarga afastam profissionais da sala de aula.

**Argumentos:**
- Salários baixos e falta de prestígio desestimulam a carreira.
- Sobrecarga, violência e adoecimento levam à evasão docente.
- A escassez de professores (sobretudo de exatas) já compromete o ensino.

**Proposta de intervenção:**
> O **poder público**, por meio de planos de carreira, deve **valorizar o professor com salários dignos e formação continuada** — cumprindo o piso nacional e reduzindo a jornada excessiva — para atrair e manter bons profissionais.`,
    repertorios: [
      "Lei do Piso Salarial Nacional dos Professores (Lei 11.738/2008).",
      "Paulo Freire — a educação como prática libertadora (\"Pedagogia do Oprimido\").",
      "Dados do INEP sobre déficit e envelhecimento do quadro docente.",
      "PNE — Plano Nacional de Educação e suas metas de valorização.",
    ],
    links: [
      { titulo: "Nova Escola — valorização docente", url: "https://novaescola.org.br/", fonte: "Nova Escola" },
      { titulo: "INEP — estatísticas da educação básica", url: "https://www.gov.br/inep/pt-br", fonte: "Gov.br / INEP" },
    ],
  },
];
