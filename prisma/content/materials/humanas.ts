// Conteúdo de estudo de CIÊNCIAS HUMANAS, gerado a partir da engenharia reversa
// das provas (2019–2025): os assuntos seguem a taxonomia (prisma/content/taxonomy.ts)
// e estão ORDENADOS pela frequência real medida no corpus. Cada material foca no
// recorte que o ENEM efetivamente cobra do tema (não um panorama genérico).
//
// Tom DIDÁTICO e do zero, no mesmo padrão de Matemática e Natureza: o material
// assume que o aluno viu isso há muito tempo (ou nunca viu direito). Cada assunto
// traz (1) uma abertura "Começando do zero" com analogia do cotidiano, (2) um
// GLOSSÁRIO dos termos que a banca usa sem explicar, (3) o conteúdo organizado em
// blocos curtos, (4) LINHA DO TEMPO quando o assunto é histórico, (5) uma
// QUESTÃO-MODELO resolvida passo a passo no estilo ENEM e (6) as pegadinhas.
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

**Começando do zero:** "Mundo do trabalho" é só um jeito elegante de dizer *como as pessoas ganham a vida* — e isso mudou muito ao longo da história. Antes das fábricas, um sapateiro fazia o sapato inteiro, do começo ao fim, no seu próprio ritmo, na sua própria oficina, com as suas próprias ferramentas. Depois vieram as fábricas e as máquinas: cada pessoa passou a fazer só um pedacinho, repetindo o mesmo gesto o dia todo, no ritmo da esteira e do relógio do patrão — e as ferramentas já não eram suas. Hoje muita gente trabalha por aplicativo, sem carteira assinada e sem horário fixo.

A ideia central, que resolve quase toda questão do tema: **cada jeito de organizar o trabalho muda a vida de quem trabalha** — quem manda, quanto se ganha, quanta liberdade se tem, quanto se é vigiado.

É o tema **mais recorrente** de Humanas no ENEM recente. As questões quase nunca cobram "decoreba": partem de um texto (sociológico, histórico ou econômico) e pedem para relacionar uma **transformação no mundo do trabalho** a suas causas e consequências sociais.

### Glossário (as palavras que a banca usa sem explicar)

| Termo | O que significa, em português claro |
|---|---|
| **Manufatura** | Produção feita à mão, em oficina, por artesãos. Cada um domina o ofício inteiro. |
| **Maquinofatura** | Produção feita por máquinas, na fábrica. O trabalhador vira "ajudante" da máquina. |
| **Divisão do trabalho** | Quebrar a produção em tarefas mínimas: um só aperta o parafuso, outro só pinta. |
| **Alienação** | O trabalhador perde o sentido do que faz: não domina o processo nem é dono do produto. |
| **Mais-valia** | A diferença entre o valor que o trabalho produz e o salário pago. É daí que sai o lucro (leitura marxista). |
| **Precarização** | Perda de direitos e estabilidade: sem carteira, sem férias, sem garantia de renda. |
| **Uberização** | Trabalho por aplicativo: você é chamado de "parceiro" ou "empreendedor", mas o app define preço, rota e avaliação. |

### 1) Da oficina à fábrica (Revolução Industrial)

A partir do século XVIII, na Inglaterra, três coisas mudaram juntas:

- **A máquina** substituiu a força humana (tear mecânico, máquina a vapor).
- **O lugar** mudou: da casa/oficina para a fábrica, onde o dono controla todo mundo ao mesmo tempo.
- **O tempo** mudou: antes se trabalhava conforme a tarefa e a luz do sol; agora, conforme o **relógio** e o apito. A "disciplina fabril" (horário, vigilância, punição por atraso) nasceu aí.

> **Por que isso importa na prova:** o ENEM adora textos que mostram operários estranhando o relógio, a repetição e a perda de autonomia. A resposta certa costuma falar em **controle do tempo** e **perda de autonomia do trabalhador**.

### 2) Os três modelos de produção (o que MAIS cai)

Esta tabela é a que mais rende pontos. O ENEM dá um texto descrevendo uma fábrica e pergunta **qual modelo é**:

| Modelo | Como funciona | Marca registrada |
|---|---|---|
| **Taylorismo** | O gerente cronometra cada gesto e define o "jeito certo" de trabalhar. Quem pensa (a gerência) é separado de quem executa. | Cronômetro, tempos e movimentos |
| **Fordismo** | Esteira rolante, produção **em massa** de produtos **padronizados**, grandes estoques. O trabalhador fica parado e a peça vem até ele. | Linha de montagem, "qualquer cor desde que seja preto" |
| **Toyotismo** | Produção **flexível**, só se produz o que já foi vendido (**just in time**), estoque mínimo, trabalhador **polivalente** (faz várias funções), terceirização. | Just in time, flexibilidade, terceirização |

Regra prática de reconhecimento:
- Falou em **cronômetro/tempo padrão** → Taylorismo.
- Falou em **esteira, massa, estoque grande, tarefa única e repetitiva** → Fordismo.
- Falou em **flexível, sob demanda, estoque enxuto, multifunção, terceirizado** → Toyotismo.

### 3) Mais-valia em uma frase

Se um trabalhador produz, em um dia, mercadorias que valem R$ 400 e recebe R$ 100 de salário, os R$ 300 restantes são **mais-valia** — o valor que ele criou e não recebeu. Para Marx, é aí que está a **exploração**: não é "roubo" nem salário atrasado, é a lógica normal do sistema.

### 4) O trabalho hoje

- **Uberização / plataformização**: o app diz para onde ir, quanto pagar e te avalia; mas juridicamente você não é empregado. Resultado: você tem **chefe sem ter direitos**.
- **Precarização**: contratos intermitentes, PJ, "empreendedor de si mesmo".
- **Automação e desemprego estrutural**: máquinas e algoritmos eliminam postos inteiros; os novos empregos exigem qualificação que a maioria não tem.

### Questão-modelo resolvida

> *Um texto descreve uma fábrica que só produz automóveis já encomendados, mantém estoque mínimo de peças e treina cada operário para operar três máquinas diferentes. Esse arranjo produtivo caracteriza-se por...*

**Passo 1 — Caçar as palavras-chave.** "Só produz o que já foi encomendado" = just in time. "Estoque mínimo" = enxuto. "Operário opera três máquinas" = polivalência.

**Passo 2 — Nomear o modelo.** Os três sinais apontam para o **Toyotismo** (acumulação flexível).

**Passo 3 — Escolher a alternativa que fala do EFEITO, não só da técnica.** A correta seria algo como *"flexibilização da produção com intensificação do ritmo e polivalência do trabalhador"*. Uma alternativa que diga "produção em massa de bens padronizados" está descrevendo o **Fordismo** — é a pegadinha clássica.

### Como a banca arma a pegadinha

- A alternativa correta quase sempre liga a mudança **técnica** a um **efeito social** (perda de autonomia, mais controle, desemprego, precarização). Desconfie de alternativas que só descrevem a máquina sem falar de gente.
- Cuidado com alternativas que apresentam a flexibilização como **puro ganho para o trabalhador** ("maior liberdade e realização"). O ENEM lê a flexibilização de forma crítica.
- "Mais-valia" nunca é "aumento de preço" nem "inflação".`,
    links: [
      link("Revolução Industrial — Brasil Escola", "https://brasilescola.uol.com.br/historiag/revolucao-industrial.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "hum-filosofia",
    titulo: "Filosofia: ética, política e conhecimento",
    resumoMarkdown: `## Filosofia: ética, política e conhecimento

**Começando do zero:** Filosofia é a arte de *parar e perguntar o porquê* de coisas que a gente acha óbvias: por que devo obedecer às leis? o que é agir certo? como sei que algo é verdade? Cada filósofo foi uma pessoa que tentou responder uma dessas perguntas com um argumento bem construído.

No ENEM você **não precisa decorar a biografia** de ninguém. A prova dá um trechinho do que o filósofo escreveu e pede: *qual é a ideia central aqui?* É como ouvir alguém defender um ponto de vista e depois resumir, com suas palavras, o que a pessoa quis dizer — sem acrescentar a sua opinião.

### O mapa: três perguntas, três blocos

Quase toda questão de Filosofia cai em um destes três blocos:

| Bloco | A pergunta que ele responde | Nomes que aparecem |
|---|---|---|
| **Política** | Por que existe o Estado e por que devo obedecer? | Hobbes, Locke, Rousseau, Maquiavel, Foucault |
| **Ética** | O que é agir corretamente? | Aristóteles, Kant, Sartre |
| **Conhecimento** | Como sei que algo é verdade? | Platão, Descartes, Bacon, Hume |

### 1) Filosofia política — o contratualismo

Os contratualistas partem todos da mesma pergunta: *como seria a vida sem governo nenhum?* (o "estado de natureza"). Cada um responde diferente — e é a diferença que a prova cobra:

| Filósofo | Como é o ser humano sem governo | Solução proposta |
|---|---|---|
| **Hobbes** | Violento e amedrontado: "o homem é o lobo do homem", guerra de todos contra todos. | Entregar o poder a um soberano forte (**absolutismo**) em troca de segurança. |
| **Locke** | Já tem direitos naturais (vida, liberdade, **propriedade**), mas falta quem arbitre conflitos. | Estado **limitado**, que existe para proteger esses direitos — e pode ser destituído se falhar (base do liberalismo). |
| **Rousseau** | Nasce bom; é a sociedade e a propriedade que o corrompem. | **Vontade geral**: o povo é o soberano (base da democracia). |

> **Truque de prova:** achou "medo", "segurança", "guerra de todos contra todos" → **Hobbes**. Achou "propriedade" e "limites ao poder" → **Locke**. Achou "o povo é soberano", "vontade geral", "o homem nasce bom" → **Rousseau**.

**Maquiavel** é caso à parte: separou a **política da moral religiosa**. Para ele, o governante deve agir conforme a necessidade de manter o Estado, não conforme a virtude cristã. Não é "elogio à maldade" — é análise realista de como o poder funciona de fato.

### 2) Ética — o que é agir certo

- **Aristóteles (virtude e meio-termo):** ser virtuoso é um **hábito**, treinado pela prática. Toda virtude fica no meio entre dois excessos — a coragem está entre a covardia e a temeridade; a generosidade, entre a avareza e o esbanjamento. Age bem quem se acostumou a agir bem.
- **Kant (o dever):** uma ação só é moral se você a faria **por dever**, não por interesse ou medo. Teste (o **imperativo categórico**): *"e se todo mundo fizesse isso?"*. Se a regra da sua ação não puder valer para todos, ela é imoral. E as pessoas devem ser sempre tratadas como **fins em si mesmas**, nunca apenas como meio para conseguir algo.
- **Sartre (liberdade e responsabilidade):** "estamos condenados a ser livres". Não há natureza humana pronta; você é o resultado das suas escolhas — e por isso é integralmente responsável por elas. Não dá para se esconder atrás de "eu não tive escolha".

### 3) Conhecimento

- **Sócrates:** "só sei que nada sei" — o começo do saber é reconhecer a própria ignorância. A **maiêutica** é o método de fazer perguntas até a pessoa perceber sozinha as contradições do que dizia.
- **Platão (mito da caverna):** prisioneiros acorrentados veem só sombras projetadas numa parede e acham que aquilo é a realidade. Quem sai da caverna e vê a luz descobre o mundo verdadeiro (mundo das **ideias**) — e, ao voltar, não é acreditado. É a alegoria da passagem da opinião (*doxa*) ao conhecimento (*episteme*), e uma metáfora da educação.
- **Racionalismo × empirismo:** para **Descartes** (racionalista), o conhecimento seguro vem da **razão** — por isso ele duvida de tudo até achar algo indubitável ("penso, logo existo"). Para **Bacon** e **Hume** (empiristas), todo conhecimento vem da **experiência** e dos sentidos.

### 4) Contemporâneos que o ENEM ama

- **Foucault:** o poder não está só no Estado — ele circula em escolas, hospitais, prisões e fábricas, **disciplinando corpos** e produzindo o que consideramos "normal". Vigiar é uma forma de governar.
- **Escola de Frankfurt (Adorno e Horkheimer):** a **indústria cultural** transforma a arte em mercadoria padronizada, que entretém e adormece o senso crítico em vez de despertá-lo.
- **Hannah Arendt:** a **banalidade do mal** — os grandes horrores não foram cometidos apenas por monstros, mas por gente comum que deixou de pensar e apenas cumpriu ordens.

### Questão-modelo resolvida

> *"O homem nasce livre, e por toda parte encontra-se a ferros." (ROUSSEAU). O trecho critica...*

**Passo 1 — Quem é o autor e qual é a tese dele?** Rousseau: o ser humano é naturalmente livre e bom; o problema veio depois.

**Passo 2 — O que a frase opõe?** Liberdade **natural** × correntes **sociais**. Ou seja: a crítica é às instituições sociais e políticas que aprisionaram uma liberdade que era original.

**Passo 3 — Eliminar.** Uma alternativa dizendo "a natureza violenta do homem exige um soberano forte" é **Hobbes**, não Rousseau. A correta fala em **perda da liberdade original pelas instituições sociais**.

### Estratégia de prova

1. Leia o texto procurando **o que o autor defende** e **contra o que ele se opõe**.
2. A resposta correta é uma **reformulação da tese do autor** — quase uma paráfrase. Ela não acrescenta nada de fora.
3. **Pegadinha nº 1:** alternativas historicamente verdadeiras, mas que **não estão no texto**. Verdadeiro ≠ correto.
4. **Pegadinha nº 2:** trocar o filósofo (dar a tese de Hobbes numa questão sobre Locke). Por isso a tabela do contratualismo vale ouro.`,
    links: [
      link("Ética em Aristóteles e Kant — Mundo Educação", "https://mundoeducacao.uol.com.br/filosofia/etica.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-urbanizacao",
    titulo: "Urbanização e população",
    resumoMarkdown: `## Urbanização e população

**Começando do zero:** Urbanização é o processo em que *as pessoas saem do campo e vão morar nas cidades*. No Brasil isso aconteceu muito rápido: em 1940, cerca de 30% da população vivia em cidades; hoje são mais de 85%. Em poucas décadas, famílias inteiras deixaram a roça em busca de emprego na indústria.

O problema é que a cidade cresceu depressa demais e **sem planejamento**. É como uma casa que recebe cinquenta visitas de uma vez: não há cama, banheiro nem comida para todos, e quem chega por último dorme no chão da área de serviço. Na cidade, esse "chão da área de serviço" é a periferia distante, sem saneamento, sem transporte e sem hospital.

### Glossário

| Termo | Significado |
|---|---|
| **Êxodo rural** | Saída em massa da população do campo para a cidade. |
| **Segregação socioespacial** | Ricos e pobres vivendo em áreas separadas, com acesso desigual a serviços. |
| **Periferização** | Os mais pobres empurrados para as bordas da cidade, longe do emprego. |
| **Favelização** | Ocupação de áreas irregulares e de risco por falta de moradia acessível. |
| **Gentrificação** | Um bairro popular é "requalificado", os preços sobem e os antigos moradores são expulsos indiretamente. |
| **Conurbação** | Duas ou mais cidades crescem até se colarem, formando uma mancha urbana contínua. |
| **Metrópole** | Cidade grande que polariza e comanda uma região inteira. |

### 1) Por que o Brasil urbanizou desse jeito

Três causas se somaram entre 1930 e 1980:

1. **Puxão da indústria:** as fábricas do Sudeste ofereciam emprego e salário.
2. **Empurrão do campo:** a **mecanização agrícola** (o trator faz o serviço de dezenas de pessoas) e a **concentração de terras** expulsaram trabalhadores rurais.
3. **Ausência de reforma agrária:** sem terra própria, restava migrar.

Por isso a urbanização brasileira é descrita como **rápida, tardia e concentrada** — e, principalmente, **sem que a cidade tivesse infraestrutura pronta para receber**. Daí a expressão que a banca usa: *urbanização desigual*.

### 2) Os problemas urbanos (e a lógica que os une)

A lógica é sempre a mesma: **o preço da terra**. O centro é caro e bem servido; a periferia é barata e mal servida. Quem não pode pagar vai para longe — e, ao ir para longe, gasta horas em transporte, tem menos acesso a escola e saúde, e menos chance de emprego. A desigualdade **se inscreve no mapa** da cidade.

Consequências que a prova cobra: déficit habitacional, ocupação de áreas de risco (encostas, várzeas), enchentes agravadas pela impermeabilização do solo, **ilhas de calor**, mobilidade precária e longos deslocamentos casa-trabalho.

### 3) Demografia — a população brasileira mudou de cara

A **transição demográfica** é a passagem de um país de muitos nascimentos e muitas mortes para um país de poucos nascimentos e poucas mortes:

| Fase | Natalidade | Mortalidade | Efeito |
|---|---|---|---|
| Antes (até ~1940) | Alta | Alta | População cresce devagar |
| Transição (1940–1970) | Alta | **Caindo** (saneamento, vacina, remédio) | **Explosão** populacional |
| Hoje | **Baixa** | Baixa | Crescimento lento e **envelhecimento** |

**Como ler uma pirâmide etária:** a base é a criançada, o topo são os idosos. Base larga e topo fino = país jovem, com alta natalidade. Base estreitando e topo engordando = país **envelhecendo** — que é o caso do Brasil hoje.

**Bônus demográfico:** o período em que a maior parte da população está em idade de trabalhar (nem criança, nem idosa). É uma janela de oportunidade econômica — e ela está se fechando no Brasil.

**Consequências do envelhecimento:** pressão sobre a Previdência (menos gente trabalhando sustenta mais aposentados) e sobre o sistema de saúde.

### Questão-modelo resolvida

> *Um gráfico mostra que, entre 1970 e 2020, a base da pirâmide etária brasileira estreitou-se e o topo alargou-se. Esse processo relaciona-se principalmente a...*

**Passo 1 — Traduzir o gráfico.** Base estreitando = **menos crianças nascendo**. Topo alargando = **mais idosos**, ou seja, as pessoas estão vivendo mais.

**Passo 2 — Nomear.** Isso é a **transição demográfica**: queda da natalidade + aumento da expectativa de vida.

**Passo 3 — Escolher a causa correta.** As causas da queda de natalidade são urbanização, entrada da mulher no mercado de trabalho, escolarização feminina e acesso a métodos contraceptivos. Alternativa que fale em "aumento das taxas de natalidade" contradiz o próprio gráfico — elimine na hora.

### Como a banca cobra

- Um gráfico, mapa ou texto sobre uma cidade, pedindo a **causa** de um fenômeno (por que a periferia cresce) ou sua **consequência social**.
- A resposta certa conecta a dinâmica urbana à **desigualdade** e ao acesso (ou falta de acesso) a serviços e ao **direito à cidade**.
- **Pegadinha:** alternativas que explicam a favela por "escolha" ou "preguiça" dos moradores, ou que tratam o crescimento urbano como simples "progresso". O ENEM lê a cidade pela chave da desigualdade estrutural.`,
    links: [
      link("Urbanização brasileira — Mundo Educação", "https://mundoeducacao.uol.com.br/geografia/urbanizacao-brasileira.htm", "Mundo Educação"),
      link("Transição demográfica — Brasil Escola", "https://brasilescola.uol.com.br/geografia/transicao-demografica.htm", "Brasil Escola"),
      link("Pirâmide etária: como interpretar — Mundo Educação", "https://mundoeducacao.uol.com.br/geografia/piramide-etaria.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-sociologia",
    titulo: "Sociologia: cultura e movimentos sociais",
    resumoMarkdown: `## Sociologia: cultura e movimentos sociais

**Começando do zero:** Sociologia estuda *a vida em grupo* — como a sociedade molda o nosso jeito de pensar, nossos costumes e as desigualdades entre as pessoas. Aqui entram cultura (hábitos, festas, crenças, comidas) e movimentos sociais (grupos que se organizam para lutar por direitos).

A ideia-chave que o ENEM adora, e que vale para o tema inteiro: **muita coisa que parece "natural" ou "sempre foi assim" foi, na verdade, construída pela sociedade** — e, por ter sido construída, pode ser questionada e mudada. Que rosa seja "cor de menina" não é da natureza: é convenção, e mudou ao longo do tempo.

### Glossário

| Termo | Significado |
|---|---|
| **Cultura** | Tudo que um grupo humano aprende e transmite: língua, comida, crença, arte, valores. |
| **Etnocentrismo** | Julgar outra cultura a partir dos valores da sua, tomando a sua como superior. |
| **Relativismo cultural** | Compreender uma prática dentro da lógica da cultura em que ela existe, sem hierarquizar. |
| **Identidade** | O sentimento de pertencer a um grupo (nacional, étnico, de gênero, religioso). |
| **Indústria cultural** | A cultura produzida como mercadoria em série, para consumo de massa. |
| **Interseccionalidade** | As opressões se somam e se cruzam: ser mulher, negra e pobre não é a soma de três problemas separados, é uma experiência própria. |
| **Racismo estrutural** | O racismo não como ato isolado de uma pessoa má, mas como parte do funcionamento normal das instituições. |

### 1) Cultura: o par que mais cai

**Etnocentrismo × relativismo** é a dupla campeã de aparições.

- Um europeu do século XVI que chama os indígenas de "selvagens sem religião" está sendo **etnocêntrico**: ele mede o outro pela régua dele.
- Um antropólogo que descreve o ritual indígena buscando entender o que ele **significa para aquele povo** pratica o **relativismo cultural**.

Cuidado: relativismo cultural, aqui, significa *compreender antes de julgar* — é uma postura metodológica, não a defesa de que "tudo é permitido".

**Tipos de cultura** que a banca cita: **erudita** (ópera, literatura clássica), **popular** (folclore, festa junina, cordel, tradição transmitida oralmente) e **de massa** (novela, hit, blockbuster, produzida industrialmente). O ENEM valoriza a cultura popular e recusa a ideia de que ela seja "inferior".

### 2) Indústria cultural (Adorno e Horkheimer)

A tese: quando a cultura vira mercadoria produzida em série, ela passa a seguir **fórmulas** que já se sabe que vendem. O resultado é padronização (a novela, o filme e a música seguem sempre o mesmo esqueleto) disfarçada de novidade ("pseudoindividualização" — muda a embalagem, não a receita).

O efeito social, que é o que a prova cobra: a cultura deixa de **provocar reflexão** e passa a servir de entretenimento que acomoda, formando um público **passivo** e consumidor.

### 3) Movimentos sociais

Movimento social é a **ação coletiva organizada** de um grupo para transformar alguma coisa. Não é bagunça nem "baderna": é uma forma legítima de participação política, e historicamente foi assim que quase todo direito foi conquistado (jornada de 8 horas, voto feminino, cotas, casamento igualitário).

Os que mais aparecem: **feminista**, **negro**, **LGBTQIA+**, **indígena**, **ambiental**, **MST/sem-terra** e **sindical**.

> Duas gerações que a banca distingue: os movimentos **clássicos** lutam sobretudo por **redistribuição** (salário, terra, condições de trabalho); os **novos movimentos sociais** lutam também por **reconhecimento** (identidade, respeito, direito de existir sem violência). Muitos combinam os dois.

### 4) Desigualdade: os três marcadores

O ENEM lê a desigualdade brasileira sempre por **classe, raça e gênero** — e insiste que eles **se cruzam**. Uma questão sobre diferença salarial dificilmente pedirá só "classe": ela vai mostrar que mulheres negras ganham menos que mulheres brancas, que ganham menos que homens negros, e assim por diante. Esse cruzamento é a **interseccionalidade**.

### Questão-modelo resolvida

> *Um cronista do século XIX descreve os ritos funerários de um povo africano como "superstições bárbaras de gente sem religião". Essa avaliação exemplifica...*

**Passo 1 — Localizar o julgamento.** O autor não descreve: ele **classifica como inferior** ("bárbaras", "sem religião").

**Passo 2 — Nomear.** Julgar o outro pela régua da própria cultura é **etnocentrismo**.

**Passo 3 — Cuidado com a armadilha.** Uma alternativa dizendo "relativismo cultural" está invertida. Outra dizendo "registro antropológico neutro" ignora o adjetivo "bárbaras". A correta menciona etnocentrismo ou a hierarquização de culturas.

### Pegadinha clássica

- A resposta correta quase sempre **valoriza a diversidade**, denuncia preconceitos e reconhece a legitimidade dos movimentos sociais.
- Alternativas que naturalizam desigualdades ("é da natureza humana"), tratam culturas como "atrasadas" ou veem movimentos sociais como "desordem" e "ameaça à ordem" costumam estar **erradas**.
- Outra armadilha: alternativas que explicam um problema social por **culpa individual** ("falta de esforço"). A Sociologia do ENEM explica por **estrutura**.`,
    links: [
      link("Etnocentrismo e relativismo cultural — Brasil Escola", "https://brasilescola.uol.com.br/sociologia/etnocentrismo.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "hum-cidadania",
    titulo: "Cidadania, direitos e Estado",
    resumoMarkdown: `## Cidadania, direitos e Estado

**Começando do zero:** Cidadania é o *conjunto de direitos e deveres* que você tem por fazer parte de um país — poder votar, estudar, ser atendido na saúde, ser tratado com igualdade perante a lei. Esses direitos não caíram do céu nem foram presente de ninguém: foram **conquistados aos poucos, com muita luta**. O Estado (o governo e suas instituições) é quem deve garanti-los.

Pense na **Constituição de 1988** como o grande contrato do país: a lista do que o Brasil promete a cada pessoa que vive nele. É, de longe, o tema de Humanas mais próximo do **Direito**.

### 1) Os três direitos de T. H. Marshall (decore esta tabela)

Marshall organizou a cidadania em três camadas, conquistadas nesta ordem histórica:

| Direito | O que garante | Exemplos |
|---|---|---|
| **Civis** (séc. XVIII) | Liberdade individual perante o Estado e os outros | Ir e vir, expressão, crença, propriedade, igualdade perante a lei, devido processo legal |
| **Políticos** (séc. XIX) | Participar do poder | Votar, ser votado, filiar-se a partido, organizar-se |
| **Sociais** (séc. XX) | Um mínimo de bem-estar e igualdade material | Saúde, educação, moradia, trabalho, previdência |

> **Truque:** *civis = ser livre; políticos = participar; sociais = ter condições de viver com dignidade.* Se a questão fala em SUS, escola pública ou aposentadoria → direito **social**. Se fala em voto ou partido → **político**. Se fala em liberdade de crença ou de imprensa → **civil**.

**No Brasil a ordem foi invertida** — e isso é matéria de prova. Os direitos **sociais** vieram primeiro (CLT, Vargas, 1943), concedidos de cima para baixo, enquanto os direitos **políticos** ainda eram restritos. Por isso se fala em **"cidadania regulada"**: só era cidadão pleno quem tinha carteira de trabalho de profissão reconhecida.

### 2) A Constituição de 1988 ("Constituição Cidadã")

Por que esse apelido: ela veio logo depois de 21 anos de ditadura e ampliou enormemente os direitos.

O que ela trouxe e o ENEM cobra:
- **Estado Democrático de Direito**: até o governo está submetido à lei.
- **Direitos fundamentais** no art. 5º; a **dignidade da pessoa humana** como fundamento da República.
- **Direitos sociais** (art. 6º): educação, saúde, trabalho, moradia, alimentação, transporte, lazer, segurança, previdência, proteção à maternidade e à infância.
- **Saúde como dever do Estado** → criação do **SUS**, universal e gratuito.
- **Instrumentos de participação**: voto direto e secreto, **plebiscito** (consulta *antes* da decisão), **referendo** (consulta *depois*, para confirmar ou rejeitar), **iniciativa popular** (o povo propõe lei) e conselhos e conferências setoriais.
- **Racismo como crime inafiançável e imprescritível**; reconhecimento dos direitos dos povos indígenas e quilombolas.

### 3) Direitos Humanos

A **Declaração Universal dos Direitos Humanos (ONU, 1948)** nasceu como resposta aos horrores da Segunda Guerra e do Holocausto: a ideia de que existem direitos que valem para **todo ser humano**, em qualquer lugar, só por ele ser humano.

Três características que a prova cobra: são **universais** (valem para todos, inclusive para quem cometeu crime), **indivisíveis** (não dá para escolher só alguns) e **inalienáveis** (ninguém pode abrir mão deles nem tê-los retirados).

O desafio central é a **efetivação**: estar no papel não significa existir na vida real. Boa parte das questões parte exatamente dessa distância entre a **igualdade formal** (na lei) e a **igualdade material** (nos fatos).

### 4) Igualdade formal × material — a chave das cotas

- **Igualdade formal:** a lei trata todos do mesmo jeito.
- **Igualdade material:** reconhece que as pessoas partem de pontos diferentes e age para corrigir.

É por isso que **ações afirmativas** (cotas raciais e sociais, Lei de Cotas de 2012) não violam a igualdade: elas buscam a igualdade **material**, tratando desigualmente os desiguais na medida da desigualdade. Esse argumento cai em Humanas e serve como repertório de redação.

### Questão-modelo resolvida

> *A Constituição de 1988 estabelece que "a saúde é direito de todos e dever do Estado". Esse dispositivo caracteriza a afirmação de um direito...*

**Passo 1 — Classificar.** Saúde garantida pelo Estado = bem-estar material = **direito social**.

**Passo 2 — Confirmar pela tabela de Marshall.** Não é civil (não é liberdade individual) nem político (não é participação no poder).

**Passo 3 — Escolher.** A correta menciona direito **social** e, em geral, a **universalidade** do atendimento (todos, independentemente de contribuição — o oposto do modelo anterior, restrito a quem contribuía).

### Como a banca cobra

- Um dispositivo legal, um trecho da Constituição ou um caso concreto, pedindo qual **princípio democrático** ou **tipo de direito** está em jogo.
- A resposta correta liga o texto à **ampliação da cidadania** e à proteção de grupos vulneráveis.
- **Pegadinha:** confundir plebiscito com referendo (o plebiscito vem **antes**, o referendo **depois**) e confundir direito social com político.
- Excelente **repertório de redação**: Constituição de 1988, DUDH de 1948, cidadania regulada e a distinção entre igualdade formal e material.`,
    links: [
      link("Constituição de 1988 — Brasil Escola", "https://brasilescola.uol.com.br/historiab/constituicao-1988.htm", "Brasil Escola"),
      link("Declaração Universal dos Direitos Humanos — texto oficial", "https://www.unicef.org/brazil/declaracao-universal-dos-direitos-humanos", "UNICEF Brasil"),
    ],
  },
  {
    topicSlug: "hum-ambiente",
    titulo: "Geografia física e meio ambiente",
    resumoMarkdown: `## Geografia física e meio ambiente

**Começando do zero:** Este tema trata da *relação entre a natureza e a ação humana*: como aquilo que fazemos (desmatar, poluir, construir, minerar) afeta o clima, os rios, o solo e as florestas — e como esse estrago volta para nos atingir na forma de secas, enchentes e falta de água.

Pense na Terra como a casa onde moramos: se a gente vai sujando e quebrando aos poucos, uma hora falta água na torneira e o ar fica ruim de respirar. O ENEM sempre cobra o **equilíbrio** entre *produzir/crescer* de um lado e *preservar* de outro — e a resposta certa quase nunca é um extremo.

### 1) Efeito estufa × aquecimento global (não confunda!)

Esta distinção derruba muita gente:

- **Efeito estufa** é **natural e necessário**. Certos gases da atmosfera (CO₂, metano, vapor d'água) retêm parte do calor que a Terra devolveria ao espaço. Sem ele, a temperatura média do planeta seria por volta de −18 °C e a vida como conhecemos não existiria. É o cobertor da Terra.
- **Aquecimento global** é a **intensificação** desse efeito pela ação humana: queima de combustíveis fósseis, desmatamento e queimadas jogam CO₂ a mais na atmosfera. O cobertor ficou grosso demais.

> **Pegadinha nº 1 do tema:** alternativa que diz que "o efeito estufa deve ser eliminado" está errada. O que precisa ser reduzido é a **emissão de gases** que o intensifica.

### 2) Outros processos que a prova cobra

| Fenômeno | O que é | Não confunda com |
|---|---|---|
| **Ilha de calor** | O centro urbano fica mais quente que a periferia arborizada (asfalto e concreto absorvem calor, faltam árvores). | Aquecimento global (escala local × global) |
| **Inversão térmica** | Uma camada de ar frio fica presa sob ar quente e os poluentes não se dispersam. Comum no inverno em SP. | Chuva ácida |
| **Chuva ácida** | Enxofre e nitrogênio da queima de combustíveis reagem com a água da chuva e a acidificam. | Efeito estufa |
| **El Niño** | Aquecimento anormal das águas do Pacífico: seca no Nordeste, chuvas no Sul. | La Niña (o inverso) |
| **Desertificação** | Solo degradado perde a capacidade produtiva, em regiões semiáridas. | Deserto natural |

### 3) Biomas brasileiros

| Bioma | Marca | Principal ameaça |
|---|---|---|
| **Amazônia** | Maior floresta tropical; solo pobre, riqueza está na própria vegetação; "rios voadores" levam umidade ao resto do país | Desmatamento, garimpo, grilagem |
| **Cerrado** | Savana; árvores tortuosas e raízes profundas; **berço das águas** (nasce ali boa parte das bacias) | Expansão da soja e da pecuária |
| **Caatinga** | Semiárido, exclusivamente brasileiro; plantas adaptadas à seca | Desertificação, desmatamento para lenha |
| **Mata Atlântica** | Onde vive a maior parte da população; restam poucos por cento da cobertura original | Urbanização histórica |
| **Pantanal** | Maior planície alagável do mundo; ciclo de cheia e seca | Queimadas, assoreamento vindo do planalto |

> A relação **Cerrado → água** é muito cobrada: desmatar o Cerrado compromete o abastecimento de bacias que servem várias regiões do país.

### 4) Recursos hídricos e crise da água

O Brasil tem muita água, mas **mal distribuída**: a maior parte está na Amazônia, onde vive a menor parte da população. Os problemas cobrados são poluição de rios urbanos, **assoreamento** (o rio entope de sedimentos quando a mata ciliar é retirada), sobreuso na irrigação e usos conflitantes (indústria × agricultura × abastecimento).

### 5) Sustentabilidade

**Desenvolvimento sustentável**: atender às necessidades do presente sem comprometer a capacidade das gerações futuras de atenderem às suas. Três dimensões que a prova cita: ambiental, social e econômica — não basta ser "verde" se for socialmente injusto.

Matriz energética: o Brasil é mais limpo que a média mundial por causa da hidrelétrica, mas ela também tem custo (alagamento de áreas, deslocamento de populações). Eólica e solar crescem; combustíveis fósseis continuam pesando no transporte.

### Questão-modelo resolvida

> *A retirada da mata ciliar às margens de um rio provoca, como consequência direta...*

**Passo 1 — O que a mata ciliar faz?** Segura o solo da margem (como um cílio protege o olho) e filtra o que chega ao rio.

**Passo 2 — Tirando a mata, o que acontece?** A margem desbarranca → o solo é carregado para dentro do rio → o leito fica raso e cheio de sedimento.

**Passo 3 — Nomear.** Isso é **assoreamento** (e, junto, o aumento de enchentes, porque o rio raso transborda mais fácil).

### Como a banca cobra

- Parte de um caso real (um rompimento de barragem, uma seca, um bioma ameaçado) e pede a **causa**, a **consequência** ou a **solução** mais adequada.
- A resposta certa **concilia atividade econômica e conservação**. Evite tanto o "crescer a qualquer custo" quanto o "proibir tudo e parar a economia" — o ENEM raramente premia extremos.
- **Pegadinha:** confundir escalas (fenômeno local, como ilha de calor, com fenômeno global) e confundir efeito estufa com aquecimento global.`,
    links: [
      link("Biomas brasileiros — Mundo Educação", "https://mundoeducacao.uol.com.br/geografia/biomas-brasileiros.htm", "Mundo Educação"),
      link("Mudanças climáticas — Brasil Escola", "https://brasilescola.uol.com.br/geografia/aquecimento-global.htm", "Brasil Escola"),
      link("Efeito estufa: o que é de fato — Mundo Educação", "https://mundoeducacao.uol.com.br/geografia/efeito-estufa.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-agraria",
    titulo: "Geografia agrária e questão da terra",
    resumoMarkdown: `## Geografia agrária e questão da terra

**Começando do zero:** Geografia agrária estuda o *campo* — quem é dono da terra e como se produz o alimento. No Brasil, poucas pessoas concentram muita terra (o **latifúndio**), herança que vem desde a colônia. De um lado está o **agronegócio**, enorme e voltado à exportação (soja, boi, milho, cana); do outro, a **agricultura familiar**, que produz boa parte da comida que vai ao prato do brasileiro (feijão, mandioca, hortaliças, leite).

É como comparar uma fazenda gigante de soja destinada à China com o pequeno sítio que abastece a feira da cidade. A "questão da terra" é a tensão entre esses dois mundos.

### 1) Por que a terra é tão concentrada (a raiz histórica)

Três marcos explicam quase tudo:

1. **Sesmarias (colônia):** a Coroa doava enormes glebas a quem já tinha posses e influência. A concentração já nasce grande.
2. **Lei de Terras de 1850:** determinou que terra só se obteria por **compra**, e não mais por ocupação. Foi promulgada às vésperas do fim do tráfico de escravizados — na prática, fechou o acesso à terra justamente para quem seria libertado e para o imigrante pobre.
3. **Ausência de reforma agrária no século XX:** enquanto outros países redistribuíram terras, aqui a estrutura foi preservada; a modernização veio sem mexer na posse.

> Esse encadeamento é ótimo **repertório de redação** sobre desigualdade brasileira.

### 2) Agronegócio × agricultura familiar

| | Agronegócio | Agricultura familiar |
|---|---|---|
| **Escala** | Grandes propriedades | Pequenas propriedades |
| **Destino** | Exportação (*commodities*) | Mercado interno, abastecimento local |
| **Produtos** | Soja, milho, cana, carne, algodão | Feijão, mandioca, hortaliças, leite, frutas |
| **Emprego** | Pouco por hectare (mecanizado) | Absorve muita mão de obra |
| **Peso** | Grande parte do valor exportado | Grande parte dos alimentos da mesa brasileira |

Não é "um bom e outro mau": a prova cobra a **tensão** entre produtividade/divisas de um lado e segurança alimentar/emprego/permanência no campo de outro.

### 3) Revolução Verde (modernização agrícola)

Pacote técnico difundido a partir dos anos 1960: sementes selecionadas, **agrotóxicos**, fertilizantes químicos, irrigação e **mecanização**.

- **Prometia:** acabar com a fome aumentando a produtividade.
- **Entregou:** muito mais produção por hectare.
- **Custou:** dependência de insumos caros (o pequeno produtor não acompanha), contaminação de solo e água, perda de biodiversidade, e — o ponto que mais cai — **expulsão de trabalhadores do campo**, porque a máquina substituiu a mão de obra. É a ponte direta com o **êxodo rural** e a urbanização acelerada.

> A banca chama isso de **"modernização conservadora"**: modernizou a técnica **sem** mudar a estrutura de posse da terra.

### 4) Conflitos e reforma agrária

- **MST** e outros movimentos: a ocupação de terras improdutivas como forma de pressão política, apoiada no princípio constitucional da **função social da propriedade** (art. 186: a propriedade deve ser produtiva, respeitar o meio ambiente e as relações de trabalho).
- **Grilagem:** apropriação ilegal de terras com documentos falsificados.
- **Conflitos** com povos indígenas e comunidades quilombolas por demarcação.

### Questão-modelo resolvida

> *Dados mostram que, entre 1970 e 2010, a produção agrícola brasileira cresceu fortemente enquanto a população rural diminuiu. Essa relação é explicada por...*

**Passo 1 — Ler o paradoxo.** Produz-se **mais** com **menos** gente no campo. Logo, alguma coisa substituiu o trabalhador.

**Passo 2 — Identificar.** Foi a **mecanização e o pacote técnico da Revolução Verde**: o trator e a colheitadeira fazem o serviço de dezenas de pessoas.

**Passo 3 — Ligar ao efeito social.** O excedente de trabalhadores migrou para as cidades (**êxodo rural**), alimentando a periferização urbana.

**Passo 4 — Eliminar.** Alternativa que atribua o crescimento à "reforma agrária" está errada: a estrutura fundiária **não** foi redistribuída no período.

### Como a banca cobra

- Textos ou dados sobre produção e posse da terra, pedindo a relação entre **modelo agrícola** e **efeitos sociais/ambientais**.
- A resposta correta costuma evidenciar **tensões**: aumento de produtividade *versus* concentração fundiária, desemprego rural ou degradação ambiental.
- **Pegadinha:** confundir *produtividade* (quanto se colhe por hectare) com *distribuição* (quem é dono). Crescer a produção não corrige a concentração — e o ENEM gosta exatamente desse contraste.`,
    links: [
      link("Revolução Verde — Brasil Escola", "https://brasilescola.uol.com.br/geografia/revolucao-verde.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "hum-colonia",
    titulo: "Brasil Colônia e escravidão",
    resumoMarkdown: `## Brasil Colônia e escravidão

**Começando do zero:** Este é o Brasil dos primeiros séculos (1500–1822), quando o país era uma *colônia* de Portugal — ou seja, existia para dar lucro à metrópole, produzindo primeiro açúcar e depois ouro. A mão de obra era de pessoas africanas escravizadas, trazidas à força e submetidas a enorme violência.

Mas é fundamental entender o ponto que o ENEM mais cobra: essas pessoas **nunca foram passivas**. Fugiam, formavam quilombos, se revoltavam, negociavam, compravam alforrias e mantiveram vivas suas culturas e religiões. Compreender esse período explica boa parte da desigualdade racial que o Brasil carrega até hoje.

### Linha do tempo

| Período | O que marca |
|---|---|
| 1500–1530 | Pau-brasil, escambo com indígenas, pouca ocupação |
| 1530–1650 | **Ciclo do açúcar** no Nordeste; engenhos; início do tráfico africano em massa |
| 1630–1654 | Domínio holandês em Pernambuco |
| séc. XVII | **Quilombo dos Palmares**, maior comunidade de resistência (Zumbi morto em 1695) |
| 1690–1780 | **Ciclo do ouro** em Minas Gerais; interiorização; aumento da fiscalização |
| 1789 | Inconfidência Mineira (elite local contra a cobrança da derrama) |
| 1808 | Corte portuguesa chega ao Brasil; abertura dos portos |
| 1822 | Independência |

### 1) A lógica do sistema colonial

**Pacto (ou exclusivo) colonial:** a colônia só podia comerciar com a metrópole — vendia barato o que produzia e comprava caro o que consumia. Não é detalhe burocrático: é o **mecanismo de transferência de riqueza** para Portugal, e a razão de ser da colônia.

O modelo produtivo do açúcar tinha quatro pilares que andam sempre juntos: **latifúndio** (grande propriedade), **monocultura** (um único produto), **trabalho escravizado** e **exportação**. Guarde essa quadra: ela aparece formulada assim em muita alternativa correta.

### 2) A escravidão

O **tráfico atlântico** trouxe milhões de pessoas africanas ao Brasil ao longo de mais de três séculos — o Brasil foi o maior destino de africanos escravizados das Américas e o **último país** a abolir a escravidão no continente (1888).

O que a banca cobra: a escravidão não era só trabalho forçado; era um sistema de **desumanização** — a pessoa era tratada juridicamente como coisa, sem direito a família, nome ou religião próprios. Houve também escravização **indígena**, especialmente nos primeiros tempos e nas regiões periféricas.

### 3) Resistência (o coração do tema no ENEM)

- **Quilombos:** comunidades formadas por pessoas fugidas. **Palmares**, em Alagoas, resistiu por quase um século e chegou a abrigar milhares de pessoas; **Zumbi** virou símbolo — 20 de novembro é o Dia da Consciência Negra.
- **Revoltas:** a **Revolta dos Malês** (Bahia, 1835), organizada por africanos muçulmanos alfabetizados em árabe, é a mais citada.
- **Resistência cultural:** religiões de matriz africana (candomblé), muitas vezes praticadas sob o disfarce dos santos católicos (**sincretismo**); a **capoeira**; irmandades religiosas negras.
- **Resistência cotidiana:** fugas individuais, quebra de ferramentas, ritmo lento de trabalho, compra de alforria, ações na justiça.
- **Resistência indígena:** guerras, fugas para o interior, alianças e negociação com missionários.

### 4) Igreja e povos originários

A **Companhia de Jesus** (jesuítas) atuou na catequese e na educação, reunindo indígenas em missões. Os jesuítas se opuseram à escravização indígena — mas não à africana —, o que gerou conflito permanente com os colonos, especialmente com os **bandeirantes** paulistas, que capturavam indígenas para vender.

### 5) A herança (conecta com Sociologia e redação)

A abolição de 1888 foi **tardia e sem qualquer política de inclusão**: os libertos não receberam terra, escola, emprego nem indenização, e o Estado ainda subsidiou a imigração europeia para substituí-los no mercado de trabalho. Daí vêm, em linha direta, a desigualdade racial, a periferização da população negra e o que a Sociologia chama de **racismo estrutural**. A **Lei 10.639/2003** tornou obrigatório o ensino de História e Cultura Afro-Brasileira nas escolas.

### Questão-modelo resolvida

> *Documentos coloniais registram a quebra frequente de ferramentas e a lentidão deliberada no trabalho dos engenhos. Historiadores atuais interpretam esses episódios como...*

**Passo 1 — O que a leitura antiga diria?** "Preguiça" ou "incompetência" — leitura racista, que a historiografia atual recusa.

**Passo 2 — Qual é a chave do ENEM?** **Protagonismo e resistência**.

**Passo 3 — Concluir.** Trata-se de formas de **resistência cotidiana** ao trabalho escravizado: sabotagem silenciosa, dentro das poucas margens de ação disponíveis. Alternativa que fale em "despreparo" ou "inadaptação ao trabalho" está errada.

### Como a banca cobra

- Valoriza o **protagonismo** dos escravizados e indígenas; nunca os trata como vítimas passivas.
- Cobra as **heranças** da escravidão na desigualdade racial atual.
- **Pegadinha:** alternativas que descrevem a escravidão brasileira como "branda", "paternal" ou "harmoniosa" (a velha tese da democracia racial) estão sempre erradas.`,
    links: [
      link("Escravidão no Brasil — Brasil Escola", "https://brasilescola.uol.com.br/historiab/escravidao-no-brasil.htm", "Brasil Escola"),
      link("Revolta dos Malês — Brasil Escola", "https://brasilescola.uol.com.br/historiab/revolta-males.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "hum-globalizacao",
    titulo: "Globalização e geopolítica",
    resumoMarkdown: `## Globalização e geopolítica

**Começando do zero:** Globalização é o nome de como o mundo ficou *interligado*: produtos, dinheiro, informação e pessoas circulam entre países como nunca antes. Exemplo simples: o celular que você usa foi **projetado** nos EUA, tem componentes da Coreia e do Japão, foi **montado** na China e é **vendido** no Brasil. Isso é globalização em ação.

O detalhe decisivo — e é dele que quase toda questão trata — é que essa conexão **não é justa para todos**: alguns países e grandes empresas ficam com a parte mais lucrativa (projeto, marca, software), enquanto outros ficam com a parte mais barata (montagem, matéria-prima). **Geopolítica** é a disputa de poder entre nações dentro desse jogo.

### 1) A divisão internacional do trabalho

Quem faz o quê no mundo:

| Papel | O que faz | Quem geralmente ocupa |
|---|---|---|
| **Centro** | Pesquisa, tecnologia, marca, finanças — alto valor agregado | EUA, Europa Ocidental, Japão |
| **Semiperiferia** | Indústria de montagem, produção em escala | China, Coreia, México, Brasil (parcialmente) |
| **Periferia** | Matérias-primas e *commodities* — baixo valor agregado | Boa parte da África, América Latina |

**Valor agregado** é o conceito-chave: exportar soja (barato, sem processamento) rende muito menos que exportar software ou remédio. Um país que só exporta *commodities* fica vulnerável à variação de preço internacional — é o que se chama de **dependência**.

### 2) O que circula (e o que não circula) livremente

Repare na assimetria, que é a pegadinha favorita da banca: **mercadorias e capital** atravessam fronteiras com facilidade; **pessoas**, não. Muros, vistos e políticas anti-imigração se multiplicaram exatamente no período de maior integração econômica. Daí temas como **xenofobia**, crise dos refugiados e "fortaleza Europa".

Outra assimetria: a **exclusão digital**. A informação circula globalmente, mas o acesso a ela é desigual dentro e entre países.

### 3) Blocos econômicos

| Bloco | Grau de integração |
|---|---|
| **Zona de livre-comércio** | Tarifas reduzidas entre membros (ex.: acordos bilaterais) |
| **União aduaneira** | + tarifa externa comum contra terceiros — **Mercosul** |
| **Mercado comum** | + livre circulação de pessoas, capitais e serviços |
| **União econômica e monetária** | + moeda e políticas comuns — **União Europeia**/zona do euro |

> Cai muito: o Mercosul é união aduaneira (com imperfeições); a UE é o caso mais avançado, com moeda única e livre circulação de pessoas.

### 4) Geopolítica: as ordens mundiais

| Período | Ordem | Como funcionava |
|---|---|---|
| Até 1945 | Multipolar / imperialista | Potências europeias disputam colônias |
| 1947–1991 | **Bipolar** | EUA (capitalismo) × URSS (socialismo) — Guerra Fria |
| Anos 1990 | **Unipolar** | Hegemonia dos EUA após o fim da URSS |
| Hoje | **Multipolar** | EUA, China, União Europeia, Rússia, Índia; disputa por tecnologia, energia e rotas |

Temas atuais que aparecem: disputa tecnológica EUA–China, guerra na Ucrânia e segurança energética, controle de rotas e recursos estratégicos (chips, terras raras, água), papel dos BRICS.

### Questão-modelo resolvida

> *Um mapa mostra que uma empresa de eletrônicos concentra pesquisa e desenvolvimento nos Estados Unidos, montagem no Sudeste Asiático e extração de minerais na África. Esse arranjo evidencia...*

**Passo 1 — Nomear o arranjo.** É a **divisão internacional do trabalho**, agora fragmentada em cadeias globais de produção.

**Passo 2 — Onde está o lucro?** Na etapa de **maior valor agregado** (pesquisa, projeto, marca), que fica no centro. Montagem e extração retêm pouco.

**Passo 3 — Concluir.** A alternativa correta aponta a **hierarquia e a desigualdade** entre as etapas — não a "cooperação equilibrada entre países". Essa última é a distração clássica.

### Como a banca cobra

- Um texto ou mapa sobre fluxos globais, pedindo quem **ganha** e quem **perde** com a globalização, ou a estratégia geopolítica de um país.
- A resposta certa enxerga a globalização como processo **desigual e seletivo** — nunca como integração harmônica que beneficia todos igualmente.
- **Pegadinha:** alternativas que dizem que a globalização "eliminou as fronteiras" ou "homogeneizou o mundo". Ela na verdade **seleciona**: integra alguns lugares e pessoas e exclui outros, às vezes dentro da mesma cidade.`,
    links: [
      link("Globalização — Mundo Educação", "https://mundoeducacao.uol.com.br/geografia/globalizacao.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-imperio",
    titulo: "Império e Primeira República",
    resumoMarkdown: `## Império e Primeira República

**Começando do zero:** Depois de se tornar independente em 1822, o Brasil passou primeiro por um *Império* (governado por dom Pedro I e depois por dom Pedro II) e, a partir de 1889, pela *Primeira República*. É o período em que o país foi montando o seu governo — mas com a política nas mãos de bem poucos: os grandes fazendeiros de café é que mandavam, o voto era controlado (o famoso **"voto de cabresto"**, em que o coronel dizia em quem votar) e a maioria do povo ficava de fora.

Pense num clube que se diz "de todos", mas onde só uns poucos sócios podem votar e decidir — e ainda por cima o voto é aberto, na frente do patrão.

### Linha do tempo

| Ano | Acontecimento |
|---|---|
| 1822 | Independência |
| 1824 | Constituição **outorgada** (imposta, não votada); cria o **Poder Moderador** |
| 1831–1840 | Período Regencial; revoltas por todo o país |
| 1840–1889 | Segundo Reinado (Pedro II); auge do café |
| 1888 | **Lei Áurea** — abolição da escravidão |
| 1889 | Proclamação da República |
| 1891 | Constituição republicana: federalismo, voto aberto, sem analfabetos nem mulheres |
| 1893–1897 | Canudos |
| 1904 | Revolta da Vacina |
| 1910 | Revolta da Chibata |
| 1912–1916 | Contestado |
| 1930 | Revolução de 1930 encerra a República Velha |

### 1) Império: um Estado feito para conter

- **Constituição de 1824** foi **outorgada** — imposta por Pedro I depois de dissolver a Assembleia Constituinte. Guarde a palavra: *outorgada* (imposta) × *promulgada* (aprovada por assembleia eleita).
- **Poder Moderador:** um quarto poder, exclusivo do imperador, acima dos outros três, permitindo-lhe dissolver a Câmara e nomear senadores. É o símbolo da centralização.
- **Voto censitário:** só votava quem tivesse renda mínima comprovada. Cidadania de carteira cheia.
- **Segundo Reinado:** o **café** vira o motor econômico; com a pressão inglesa e o fim do tráfico (1850), entram os **imigrantes europeus** como mão de obra assalariada nas lavouras paulistas — e o capital antes investido no tráfico migra para ferrovias e bancos.
- **Crise da escravidão:** avanço por etapas — Lei Eusébio de Queirós (1850, fim do tráfico), Lei do Ventre Livre (1871), Lei dos Sexagenários (1885) e **Lei Áurea (1888)**. Repare no padrão: leis graduais, que preservavam ao máximo os interesses dos proprietários.

### 2) República Velha (1889–1930): quem manda de fato

Três engrenagens que funcionam juntas — e a prova adora pedir para identificá-las:

1. **Política do café com leite:** revezamento na presidência entre São Paulo (café) e Minas Gerais (leite), os dois estados mais poderosos.
2. **Coronelismo:** no nível local, o "coronel" (grande proprietário) controla os votos da região em troca de favores — dinheiro, emprego, proteção. O **voto de cabresto** é o instrumento: como o voto era **aberto** (não secreto), dava para conferir se o eleitor obedeceu.
3. **Política dos governadores:** o presidente apoia os governadores, que apoiam os coronéis, que entregam os votos. Quando havia discordância, a "**comissão de verificação de poderes**" simplesmente **anulava a eleição** dos opositores — a chamada "degola".

Some a isso o voto **aberto**, proibido a analfabetos e mulheres (a maioria da população), e você tem uma república formalmente democrática e realmente **oligárquica**. Essa distância entre cidadania formal e real é exatamente o que o ENEM cobra.

### 3) As revoltas (todas dizem a mesma coisa)

| Revolta | Onde/quando | Motivo |
|---|---|---|
| **Canudos** | Sertão da Bahia, 1893–97 | Comunidade pobre em torno de Antônio Conselheiro, esmagada pelo Exército e tratada como "monarquista" — leitura que a historiografia recusa |
| **Contestado** | Fronteira SC/PR, 1912–16 | Camponeses expulsos por empresas estrangeiras e pela ferrovia |
| **Revolta da Vacina** | Rio, 1904 | Vacinação obrigatória imposta com truculência, junto com a reforma urbana que expulsou pobres do centro |
| **Revolta da Chibata** | Rio, 1910 | Marinheiros negros contra castigos físicos na Marinha |

O fio comum: **exclusão social e autoritarismo**. Populações pobres reagindo a decisões tomadas sem elas e contra elas.

### Questão-modelo resolvida

> *Na Primeira República, as "comissões de verificação de poderes" podiam invalidar a diplomação de candidatos eleitos. Esse mecanismo revela...*

**Passo 1 — O que a comissão fazia?** Decidia quem tomava posse — mesmo contra o resultado das urnas.

**Passo 2 — A quem servia?** Ao grupo no poder, que assim eliminava opositores eleitos.

**Passo 3 — Concluir.** Revela o caráter **oligárquico e excludente** do sistema: havia eleição, mas não havia democracia real. A alternativa que fale em "fortalecimento da representação popular" está invertida.

### Como a banca cobra

- Textos de época, charges ou dispositivos legais (leis eleitorais), pedindo o caráter **elitista e excludente** da política.
- A resposta certa destaca a distância entre a **cidadania formal** (existe a lei) e a **real** (não funciona para a maioria).
- **Pegadinha:** confundir Constituição **outorgada** (1824, imposta) com **promulgada** (1891, 1988). E tratar Canudos como movimento "monarquista" — era uma comunidade de sertanejos pobres, e o rótulo foi construído para justificar o massacre.`,
    links: [
      link("Coronelismo — Mundo Educação", "https://mundoeducacao.uol.com.br/historiadobrasil/coronelismo.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-mundial",
    titulo: "História mundial contemporânea",
    resumoMarkdown: `## História mundial contemporânea

**Começando do zero:** Aqui estão os grandes acontecimentos do mundo nos últimos dois séculos: as duas Guerras Mundiais; o nazismo e o fascismo (regimes autoritários que causaram horrores, como o **Holocausto**, o extermínio de cerca de seis milhões de judeus e de outros grupos perseguidos); e a Guerra Fria (a disputa entre Estados Unidos e União Soviética que dividiu o planeta por quase meio século).

Não é preciso decorar todas as datas. O que o ENEM quer é que você entenda **que ideia estava em jogo** em cada conflito e por que ele mudou o mundo.

### Linha do tempo

| Ano | Acontecimento |
|---|---|
| 1789 | Revolução Francesa |
| 1848 | Primavera dos Povos; *Manifesto Comunista* |
| 1870–1914 | Imperialismo: partilha da África e da Ásia |
| 1914–1918 | **Primeira Guerra Mundial** |
| 1917 | **Revolução Russa** |
| 1919 | Tratado de Versalhes |
| 1929 | Crise de 1929 (quebra da Bolsa de Nova York) |
| 1933 | Hitler chega ao poder na Alemanha |
| 1939–1945 | **Segunda Guerra Mundial**; Holocausto |
| 1945 | Bombas em Hiroshima e Nagasaki; criação da **ONU** |
| 1947–1991 | **Guerra Fria** |
| 1948 | Declaração Universal dos Direitos Humanos |
| 1955–1975 | Descolonização afro-asiática; Guerra do Vietnã |
| 1989 | Queda do **Muro de Berlim** |
| 1991 | Fim da URSS |

### 1) As três ideias que organizam tudo

Se você entender estas três correntes, identifica quase qualquer texto:

| Corrente | Defende | Palavras que a denunciam num texto |
|---|---|---|
| **Liberalismo** | Liberdade individual, propriedade, Estado limitado, mercado | direitos individuais, livre iniciativa, contrato |
| **Socialismo** | Igualdade material, propriedade coletiva dos meios de produção | classe trabalhadora, exploração, coletivização |
| **Totalitarismo** (nazifascismo) | Estado/líder acima do indivíduo, nação/raça, partido único | chefe, nação, raça, ordem, inimigo interno, unidade |

### 2) Primeira Guerra e o caminho para a Segunda

Causas da Primeira: **imperialismo** (disputa por colônias e mercados), **nacionalismo** exacerbado, corrida armamentista e um sistema de **alianças** que transformou um atentado local em guerra continental.

O **Tratado de Versalhes** (1919) impôs à Alemanha culpa pela guerra, perda de território e reparações impagáveis. Some a isso a **crise de 1929**, com desemprego em massa e humilhação nacional, e você tem o terreno onde o nazismo cresceu prometendo ordem, trabalho e grandeza. Essa é a cadeia causal que a prova mais cobra: **Versalhes + crise de 1929 → ascensão do nazismo**.

### 3) Totalitarismos

Características comuns ao nazismo e ao fascismo: **partido único**, culto ao líder, **propaganda** massiva e controle da informação, censura, polícia política, militarismo, anticomunismo, corporativismo e supressão de direitos individuais em nome da nação.

Específico do **nazismo**: o **racismo** como doutrina de Estado (antissemitismo, eugenia, ideia de "raça superior"), que levou ao **Holocausto**.

> Conceito muito cobrado: a **banalidade do mal** (Hannah Arendt) — burocratas comuns executaram o extermínio sem se perguntarem sobre o que faziam. O horror não exigiu monstros, exigiu obediência sem pensamento.

### 4) Guerra Fria

Uma disputa **bipolar** entre EUA (capitalismo, OTAN, Plano Marshall) e URSS (socialismo, Pacto de Varsóvia, Comecon), travada por todos os meios **menos** o confronto direto entre as duas: corrida armamentista e nuclear, corrida espacial, espionagem, propaganda e guerras por procuração em terceiros países (Coreia, Vietnã, Afeganistão, América Latina).

Por que não houve guerra direta: a **destruição mútua assegurada** — ambos tinham armas nucleares suficientes para aniquilar o outro, o que tornou a vitória impossível.

O fim: crise econômica soviética, reformas de Gorbachev (*glasnost* = transparência, *perestroika* = reestruturação), **queda do Muro de Berlim em 1989** e dissolução da URSS em 1991.

### 5) Descolonização

Após 1945, colônias africanas e asiáticas conquistaram independência, às vezes por negociação, muitas vezes por guerra (Argélia, Angola, Moçambique). As fronteiras herdadas foram as **traçadas pelos colonizadores**, ignorando etnias e culturas — origem de muitos conflitos até hoje. A **Conferência de Bandung** (1955) e o Movimento dos Não Alinhados marcaram a tentativa desses países de não se submeterem a nenhum dos dois blocos.

### Questão-modelo resolvida

> *Um cartaz de 1930 convoca a população a se unir em torno do "Chefe", exalta a superioridade da nação e denuncia inimigos internos. O documento expressa a propaganda de um regime...*

**Passo 1 — Marcar os elementos.** Culto ao líder + exaltação nacional + inimigo interno.

**Passo 2 — Cruzar com a tabela.** Esses três elementos juntos = **totalitarismo** (nazifascismo).

**Passo 3 — Eliminar.** "Liberal" está fora (liberalismo prioriza o indivíduo, não o chefe). "Socialista" também: o eixo ali seria classe e exploração, não nação e raça.

### Como a banca cobra

- Relaciona um evento mundial a **ideologias** e a seus desdobramentos.
- A resposta certa identifica corretamente a corrente política e seu contexto.
- **Pegadinha:** confundir nazifascismo com socialismo porque ambos criticam o liberalismo. São opostos no essencial: o nazifascismo é **nacionalista e racial**; o socialismo é **classista e internacionalista**.`,
    links: [
      link("Guerra Fria — Brasil Escola", "https://brasilescola.uol.com.br/historiag/guerra-fria.htm", "Brasil Escola"),
      link("Totalitarismo: nazismo e fascismo — Mundo Educação", "https://mundoeducacao.uol.com.br/historiageral/nazismo.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "hum-vargas",
    titulo: "Era Vargas e populismo",
    resumoMarkdown: `## Era Vargas e populismo

**Começando do zero:** Getúlio Vargas foi o político que mais marcou o Brasil no século XX, governando de 1930 a 1945 e depois de 1951 a 1954. Ele criou boa parte dos direitos do trabalhador que conhecemos hoje — carteira assinada, férias, jornada de 8 horas, salário mínimo — reunidos na **CLT**.

Mas atenção ao ponto que o ENEM sempre cobra: por oito anos ele governou como **ditador**, com censura, prisões e propaganda maciça. Essa é a **dupla face** do varguismo: ele *deu* direitos ao povo *e*, ao mesmo tempo, usou esses direitos para se manter no poder e **controlar** os trabalhadores. Os direitos vieram de cima, como concessão — não como conquista arrancada pelos sindicatos —, e por isso o trabalhador devia gratidão ao "pai dos pobres" em vez de força própria.

**Populismo**, aqui, é justamente essa relação direta e sedutora entre um líder carismático e "o povo", passando por cima das instituições de representação.

### Linha do tempo

| Período | Fase | O que marca |
|---|---|---|
| 1930–1934 | Governo Provisório | Revolução de 1930 derruba a República Velha; centralização |
| 1934–1937 | Governo Constitucional | Constituição de 1934 (voto feminino, justiça do trabalho) |
| 1937–1945 | **Estado Novo** | **Ditadura**: Congresso fechado, censura (DIP), Constituição outorgada |
| 1945–1951 | Fora do poder | Deposto por militares; período democrático |
| 1951–1954 | Volta pelo **voto** | Nacionalismo; criação da **Petrobras** (1953); suicídio em agosto de 1954 |

### 1) Por que 1930 aconteceu

A "política do café com leite" quebrou quando São Paulo indicou outro paulista (Júlio Prestes) em vez de um mineiro, rompendo o revezamento. Minas Gerais, Rio Grande do Sul e Paraíba se aliaram na Aliança Liberal. Junto disso: a **crise de 1929** derrubou o preço do café e arruinou a base econômica da oligarquia, e setores urbanos (classe média, tenentes, industriais) queriam espaço político. Resultado: a Revolução de 1930 põe Vargas no poder.

### 2) Estado Novo (1937–1945): a ditadura

Instalado com o pretexto do **Plano Cohen** (documento forjado que anunciava um suposto golpe comunista). Características:

- Congresso e partidos **fechados**; interventores nomeados nos estados (as bandeiras estaduais foram queimadas em cerimônia pública — símbolo da centralização).
- Constituição **outorgada** de 1937 ("Polaca", inspirada no modelo autoritário polonês).
- **DIP** (Departamento de Imprensa e Propaganda): censurava jornais, rádio e cinema *e* produzia a imagem de Vargas como "pai dos pobres". A "Hora do Brasil" no rádio entrava em todas as emissoras.
- Repressão a comunistas e opositores; prisões e tortura.

> Contradição que a prova adora: o Brasil combateu o nazifascismo na Itália, ao lado dos Aliados, **sendo governado por uma ditadura**. Foi essa contradição que ajudou a derrubar o Estado Novo em 1945.

### 3) Trabalhismo: direitos e controle

A **CLT (1943)** consolidou salário mínimo, jornada de 8 horas, férias, descanso semanal, proteção ao trabalho da mulher e do menor, e a Justiça do Trabalho.

Mas o pacote vinha com o outro lado:
- **Sindicato atrelado ao Estado** (unicidade sindical, imposto sindical obrigatório, ministério autorizando o funcionamento): o sindicato virou correia de transmissão do governo, não instrumento autônomo de luta.
- **Cidadania regulada:** só tinha direitos quem tivesse carteira assinada em profissão reconhecida. Trabalhadores rurais e informais — a maioria do país — ficaram de fora.

Por isso a fórmula que aparece nas alternativas corretas: **conquista de direitos + cooptação e desmobilização dos trabalhadores**.

### 4) Industrialização

**Substituição de importações**: em vez de comprar de fora, produzir aqui. O Estado assumiu a frente nos setores pesados, criando a **CSN** (siderurgia, Volta Redonda, 1941), a Vale do Rio Doce (1942) e, no segundo governo, a **Petrobras** (1953, sob a campanha "O petróleo é nosso"). Isso é **nacionalismo econômico** — outra marca do varguismo, e a razão da forte oposição de setores ligados ao capital estrangeiro que o cercou até 1954.

### Questão-modelo resolvida

> *A CLT (1943) foi promulgada num contexto em que os sindicatos estavam submetidos ao Ministério do Trabalho. Essa combinação indica que a legislação trabalhista varguista...*

**Passo 1 — Separar as duas pontas.** Ponta 1: direitos reais e amplos foram concedidos. Ponta 2: os sindicatos perderam autonomia.

**Passo 2 — Juntar.** O governo dava o benefício e, ao mesmo tempo, tirava a capacidade de o trabalhador se organizar por conta própria e cobrar mais.

**Passo 3 — Concluir.** A correta diz algo como: *ampliou direitos ao mesmo tempo em que submeteu a organização sindical ao controle estatal*. Alternativas que descrevem só o lado bom ("resultado da livre negociação entre sindicatos e patrões") ignoram o contexto ditatorial.

### Como a banca cobra

- Textos sobre políticas trabalhistas ou peças de propaganda do regime, pedindo a **dupla face** do varguismo.
- **Pegadinha:** apresentar a CLT como conquista puramente popular (foi concedida de cima) ou puramente manipuladora (os direitos eram reais). O ENEM quer as **duas coisas ao mesmo tempo**.
- Não confunda: **Estado Novo** (1937–45, ditadura) × segundo governo (1951–54, **eleito pelo voto**).`,
    links: [
      link("Era Vargas — Brasil Escola", "https://brasilescola.uol.com.br/historiab/era-vargas.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "hum-ditadura",
    titulo: "Ditadura militar e redemocratização",
    resumoMarkdown: `## Ditadura militar e redemocratização

**Começando do zero:** Entre 1964 e 1985, o Brasil viveu uma *ditadura militar*: os militares tomaram o poder e governaram sem eleição direta para presidente, com censura à imprensa, perseguição, prisões, tortura e desaparecimento de opositores. Aos poucos, a sociedade foi pressionando pela volta da democracia — o movimento **"Diretas Já"** pedia o direito de eleger o presidente pelo voto — até chegar à **Constituição de 1988**.

Este tema mostra, na prática, *por que a democracia e os direitos valem tanto*: dá para entender o valor deles justamente vendo o que acontece quando desaparecem.

### Linha do tempo

| Ano | Acontecimento |
|---|---|
| 1964 | **Golpe** de 31 de março; deposição de João Goulart; **AI-1** |
| 1965 | AI-2: extinção dos partidos; bipartidarismo forçado (ARENA × MDB) |
| 1968 | **AI-5** — o mais duro: fecha o Congresso, suspende habeas corpus, autoriza cassações |
| 1968–1974 | "Anos de chumbo": auge da repressão e do "**milagre econômico**" |
| 1974 | Geisel inicia a abertura "lenta, gradual e segura" |
| 1979 | **Lei da Anistia**; volta dos exilados; fim do bipartidarismo |
| 1984 | **Diretas Já** — maiores comícios da história; emenda Dante de Oliveira é **rejeitada** |
| 1985 | Fim do regime; Tancredo eleito **indiretamente**; assume José Sarney |
| 1988 | **Constituição Cidadã** |
| 1989 | Primeira eleição direta para presidente desde 1960 |

### 1) O golpe de 1964 e os Atos Institucionais

O golpe derrubou João Goulart em meio a um contexto de **Guerra Fria** (medo do comunismo, apoio dos EUA), reformas de base propostas pelo governo e forte polarização, com apoio de setores empresariais, da classe média conservadora e de parte da imprensa.

Os **Atos Institucionais** eram decretos que o próprio regime editava para se dar poderes, **acima da Constituição**. Ou seja: o regime não seguia a lei, ele fabricava a lei conforme a necessidade — é a definição prática de arbítrio.

O **AI-5 (dezembro de 1968)** é o mais cobrado. Ele fechou o Congresso, suspendeu o **habeas corpus** para crimes políticos, permitiu cassar mandatos, demitir funcionários e instituiu a censura prévia. Foi ele que abriu os "anos de chumbo".

### 2) Repressão e resistência

- **Repressão:** censura prévia a jornais, música, teatro e cinema; DOI-CODI e DOPS; tortura sistemática; mortos e desaparecidos políticos; exílio.
- **Resistência cultural:** Chico Buarque ("Cálice", "Apesar de Você"), Geraldo Vandré, Caetano e Gil, o Teatro de Arena, o Cinema Novo. Muitas letras usavam **metáforas** para driblar o censor — e é justamente esse tipo de texto que a prova apresenta pedindo interpretação.
- **Resistência estudantil:** UNE, Passeata dos Cem Mil (1968).
- **Luta armada:** guerrilhas urbanas e a Guerrilha do Araguaia.
- **Igreja:** setores ligados à Teologia da Libertação denunciaram violações e acolheram perseguidos.

### 3) "Milagre econômico" (1969–1973)

O PIB cresceu a taxas altíssimas, com grandes obras (Transamazônica, ponte Rio–Niterói, Itaipu) financiadas por endividamento externo e arrocho salarial.

O custo, que é o que a banca cobra: **concentração de renda** (a famosa frase atribuída ao período: "o bolo cresceu, mas não foi dividido"), inflação represada e uma dívida externa que estourou na crise do petróleo, deixando a conta para os anos 1980 — a "década perdida".

> Ponto-chave: **crescimento econômico não é sinônimo de melhora de vida**. O milagre conviveu com a queda do poder de compra do salário mínimo.

### 4) Abertura e redemocratização

A abertura foi conduzida **pelo próprio regime** — "lenta, gradual e segura" —, o que significa: controlada de cima, para evitar rupturas e responsabilizações.

A **Lei da Anistia (1979)** foi **recíproca**: anistiou os perseguidos políticos, mas também os agentes do Estado que torturaram. Essa reciprocidade é a razão de o Brasil, diferentemente da Argentina e do Chile, praticamente não ter julgado torturadores — tema recorrente em questões sobre **justiça de transição** e memória.

As **Diretas Já** (1984) mobilizaram multidões, mas a emenda que restabeleceria a eleição direta foi **rejeitada** no Congresso. Tancredo Neves foi eleito **indiretamente** em 1985 — atenção, essa é a pegadinha mais comum do tema. A eleição direta para presidente só voltou em **1989**.

### Questão-modelo resolvida

> *"Cálice", de Chico Buarque, repete o verso "Pai, afasta de mim esse cálice". A canção foi censurada porque...*

**Passo 1 — Perceber o trocadilho.** "Cálice" soa igual a "**cale-se**" — o verso pede, ao mesmo tempo, o afastamento do sofrimento e o fim do silenciamento.

**Passo 2 — Ler o contexto.** Censura prévia, tortura, silêncio imposto sob o AI-5.

**Passo 3 — Concluir.** A canção é uma **crítica velada à censura e à repressão**, construída em metáfora para escapar do censor. A correta menciona a denúncia da repressão por meio de linguagem figurada.

### Como a banca cobra

- Documentos de época, charges, letras de música de protesto e trechos de Atos Institucionais, pedindo o caráter **autoritário** do regime e o **valor da democracia** reconquistada.
- Conecta-se diretamente a Direitos Humanos e cidadania — e é repertório de primeira para redação sobre democracia, memória e liberdade de expressão.
- **Pegadinhas:** dizer que as Diretas Já foram aprovadas (foram **rejeitadas**); dizer que Tancredo foi eleito diretamente (foi **indireto**); tratar o "milagre" como período de melhora geral de vida.`,
    links: [
      link("Ditadura militar no Brasil — Brasil Escola", "https://brasilescola.uol.com.br/historiab/ditadura-militar.htm", "Brasil Escola"),
      link("Diretas Já — Mundo Educação", "https://mundoeducacao.uol.com.br/historiadobrasil/diretas-ja.htm", "Mundo Educação"),
    ],
  },
];
