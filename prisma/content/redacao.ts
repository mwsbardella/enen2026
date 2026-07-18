import type { TopicSeed } from "./types";

export const redacaoTopics: TopicSeed[] = [
  {
    subjectSlug: "redacao",
    slug: "estrutura-dissertativa",
    titulo: "Estrutura dissertativo-argumentativa",
    descricao: "Introdução, desenvolvimento e conclusão na redação do ENEM.",
    ordem: 1,
    material: {
      titulo: "Estrutura dissertativo-argumentativa",
      resumoMarkdown: `## A estrutura da redação do ENEM

**Começando do zero:** "Dissertativo-argumentativo" assusta, mas é simples: é um texto em que você *defende uma opinião com argumentos* — como quando tenta convencer alguém de que está certo, só que por escrito e de forma organizada. Não é para contar uma história (isso é narração) nem para descrever algo: é para *tomar um lado* sobre o tema e sustentá-lo. E, no fim, o ENEM ainda pede uma "proposta de intervenção", ou seja, uma sugestão concreta de como resolver o problema.

A redação do ENEM é um texto **dissertativo-argumentativo em prosa**: você precisa **defender um ponto de vista** sobre o tema proposto, com argumentos e repertório, e apresentar uma **proposta de intervenção**. O texto ideal tem **4 parágrafos** e cerca de **25 a 30 linhas** (mínimo de 7 linhas; mais de 30 não cabe).

**1) Introdução (1 parágrafo):**
- **Contextualize** o tema e apresente sua **tese** (o ponto de vista que você vai defender).
- Boa fórmula: *repertório/contexto* + *apresentação do problema* + *tese com os dois argumentos que serão desenvolvidos*.

**2) Desenvolvimento (2 parágrafos):**
- Cada parágrafo defende **um argumento**. Estrutura de cada um:
  - **Tópico frasal** (a ideia central do parágrafo);
  - **Argumentação** com **repertório legitimado** (dado, lei, obra, conceito, fato histórico);
  - **Análise/explicação** conectando o repertório ao tema;
  - **Fechamento** que amarra a ideia.
- Use **conectivos** entre e dentro dos parágrafos (coesão).

**3) Conclusão (1 parágrafo):**
- Retome a tese e apresente a **proposta de intervenção** completa, com os 5 elementos (ver tópico específico).

**Coerência e coesão:**
- **Coerência**: as ideias precisam fazer sentido juntas, sem contradição nem fuga ao tema.
- **Coesão**: use **conectivos** variados (além disso, portanto, contudo, dessa forma, em síntese) e referências (pronomes, sinônimos) para "costurar" o texto.

**Dica de prova**: planeje **antes de escrever** (rascunho do projeto de texto): defina tese, os 2 argumentos com repertórios e a proposta de intervenção. Isso garante **progressão** e evita a temida fuga ao tema. Linguagem sempre **formal** e impessoal (3ª pessoa).`,
      links: [
        { titulo: "Redação dissertativo-argumentativa — Brasil Escola", url: "https://brasilescola.uol.com.br/redacao", fonte: "Brasil Escola" },
        { titulo: "Estrutura da redação do ENEM — Mundo Educação", url: "https://mundoeducacao.uol.com.br/enem/redacao-no-enem.htm", fonte: "Mundo Educação" },
        { titulo: "Estrutura da redação nota 1000 (vídeo)", url: "https://www.youtube.com/results?search_query=estrutura+reda%C3%A7%C3%A3o+enem+nota+1000", fonte: "YouTube (educacional)" },
      ],
    },
  },
  {
    subjectSlug: "redacao",
    slug: "cinco-competencias",
    titulo: "As 5 competências",
    descricao: "O que cada competência avalia e como pontuar 200 em cada.",
    ordem: 2,
    material: {
      titulo: "As 5 competências do ENEM",
      resumoMarkdown: `## As 5 competências (0 a 200 cada, total 1000)

**Começando do zero:** Sua redação não recebe uma nota única jogada de qualquer jeito: ela é avaliada em cinco quesitos separados (as "competências"), cada um valendo até 200 pontos, que somados dão os 1000. Pense num boletim com cinco matérias — para tirar a nota máxima, é preciso ir bem em todas ao mesmo tempo. Saber o que cada uma cobra é saber exatamente onde o corretor vai olhar.

A redação é corrigida por **cinco competências**, cada uma de **0 a 200 pontos** (níveis de 0, 40, 80, 120, 160, 200). Entender cada uma é entender o que os corretores procuram.

**Competência 1 — Domínio da norma culta da língua escrita.**
Avalia gramática, ortografia, pontuação, concordância, regência e estrutura sintática. Para pontuar alto: poucos desvios e **período bem construído**. Evite oralidade e marcas de informalidade.

**Competência 2 — Compreender a proposta e aplicar conceitos das várias áreas.**
Avalia se você **não fugiu ao tema**, se respeitou o tipo **dissertativo-argumentativo** e se trouxe **repertório sociocultural produtivo e legitimado** (de áreas como história, sociologia, filosofia, artes, leis). O repertório precisa estar **bem articulado** ao tema (não "colado").

**Competência 3 — Selecionar, relacionar e organizar informações e argumentos.**
Avalia o **projeto de texto**: a defesa do ponto de vista com argumentos **autorais**, bem encadeados e **aprofundados** (não superficiais nem com contradições). É a competência da **argumentação** propriamente dita.

**Competência 4 — Conhecimento dos mecanismos linguísticos de coesão.**
Avalia o uso de **conectivos** e elementos coesivos (referenciação, pronomes) entre parágrafos e dentro deles. Diversifique os conectivos e evite repetições.

**Competência 5 — Proposta de intervenção respeitando os direitos humanos.**
Avalia uma proposta **completa, detalhada e exequível** para o problema, com os 5 elementos (agente, ação, meio/modo, finalidade e detalhamento) e **sem ferir os direitos humanos**.

**Dica de prova**: a nota 1000 exige excelência **nas cinco** ao mesmo tempo. Falhas comuns que derrubam pontos: tangenciar o tema (C2), argumento raso ou senso comum (C3), poucos conectivos (C4) e proposta vaga ou incompleta (C5).`,
      links: [
        { titulo: "As 5 competências da redação — Brasil Escola", url: "https://brasilescola.uol.com.br/redacao/competencias-redacao-enem.htm", fonte: "Brasil Escola" },
        { titulo: "Cartilha de redação do ENEM (INEP)", url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem", fonte: "INEP (oficial)" },
        { titulo: "5 competências explicadas (vídeo)", url: "https://www.youtube.com/results?search_query=5+compet%C3%AAncias+reda%C3%A7%C3%A3o+enem", fonte: "YouTube (educacional)" },
      ],
    },
  },
  {
    subjectSlug: "redacao",
    slug: "proposta-de-intervencao",
    titulo: "Proposta de intervenção",
    descricao: "Os 5 elementos: agente, ação, meio, finalidade e detalhamento.",
    ordem: 3,
    material: {
      titulo: "Proposta de intervenção",
      resumoMarkdown: `## Proposta de intervenção (Competência 5)

**Começando do zero:** A proposta de intervenção é a parte final da redação em que você *sugere uma solução* para o problema que discutiu — não basta apontar o que está errado, é preciso dizer o que fazer. E ela não pode ser vaga ("o governo deveria ajudar"): tem que deixar claro *quem* faz, *o que* faz, *como*, *para quê* e ainda dar um detalhe. É essa parte bem-feita que mais separa uma redação boa de uma nota máxima.

A **proposta de intervenção** é o desfecho da redação: uma solução **concreta, detalhada e viável** para o problema discutido, **respeitando os direitos humanos**. É o que mais diferencia uma redação boa de uma nota 1000. Ela deve conter **5 elementos**:

1. **Agente** — *quem* vai executar a ação? (Ministério da Educação, governos, escolas, mídia, ONGs, família, sociedade civil, Poder Legislativo...). Seja específico.
2. **Ação** — *o que* será feito? (criar, ampliar, fiscalizar, promover campanhas, capacitar...).
3. **Meio/Modo** — *como* a ação será realizada? (por meio de verbas, parcerias, plataformas digitais, leis, mídias...). É o elemento mais esquecido.
4. **Finalidade/Efeito** — *para quê*? (a fim de reduzir, conscientizar, garantir o direito...). Conecta a proposta à solução do problema.
5. **Detalhamento** — um aprofundamento de **qualquer** um dos elementos anteriores (exemplificar, explicar melhor o meio, especificar o público).

**Modelo de frase completa:**
> "Cabe ao **Ministério da Educação** (agente) **promover campanhas de educação digital** (ação) **por meio de parcerias com escolas e plataformas de streaming** (meio), **a fim de conscientizar os jovens sobre desinformação** (finalidade), **com oficinas que ensinem a checar fontes e identificar notícias falsas** (detalhamento)."

**Atenção aos direitos humanos**: propostas que defendam tortura, pena de morte, "justiça com as próprias mãos", esterilização compulsória ou qualquer violação **zeram a Competência 5** (e podem afetar o conjunto). A intervenção deve ser **democrática e respeitosa**.

**Dica de prova**: faça uma **checklist mental** dos 5 elementos antes de finalizar. Uma proposta detalhada, exequível e ligada ao problema é o caminho do 200 na C5.`,
      links: [
        { titulo: "Proposta de intervenção — Brasil Escola", url: "https://brasilescola.uol.com.br/redacao/a-proposta-intervencao-na-redacao-enem.htm", fonte: "Brasil Escola" },
        { titulo: "Proposta de intervenção — Mundo Educação", url: "https://mundoeducacao.uol.com.br/enem/proposta-intervencao-na-redacao-enem.htm", fonte: "Mundo Educação" },
        { titulo: "Proposta de intervenção (vídeo)", url: "https://www.youtube.com/results?search_query=proposta+de+interven%C3%A7%C3%A3o+enem", fonte: "YouTube (educacional)" },
      ],
    },
  },
  {
    subjectSlug: "redacao",
    slug: "construcao-de-repertorio",
    titulo: "Construção de repertório",
    descricao: "Como reunir e aplicar repertórios legitimados e produtivos.",
    ordem: 4,
    material: {
      titulo: "Construção de repertório sociocultural",
      resumoMarkdown: `## Repertório sociocultural

**Começando do zero:** "Repertório" é só um nome chique para *o conhecimento que você traz de fora para dar peso ao seu argumento*: uma lei, um fato histórico, um dado de pesquisa, um livro ou um filme. É a diferença entre dizer "isso é um problema" e dizer "isso é um problema — tanto que a Constituição de 1988 garante o contrário": a segunda frase convence muito mais. Mas atenção: o repertório só vale ponto se estiver *bem encaixado* no tema, e não jogado ali só para enfeitar.

**Repertório** é o conhecimento que você usa para **fundamentar os argumentos** (Competência 2). Para pontuar, ele precisa ser **legitimado** (de fonte reconhecida) e **produtivo** (bem articulado ao tema, não apenas citado).

**Tipos de repertório legitimado:**
- **Histórico**: fatos e processos (Revolução Industrial, abolição tardia, ditadura).
- **Jurídico/legal**: Constituição de 1988, DUDH (1948), ECA, Lei Maria da Penha, LGPD.
- **Filosófico/sociológico**: conceitos de Bauman ("modernidade líquida"), Foucault (biopoder), Marx (alienação), Hannah Arendt (banalidade do mal), Milton Santos (espaço geográfico).
- **Artístico/literário**: obras (*Vidas Secas*, *1984* de Orwell, *Admirável Mundo Novo*), filmes, músicas.
- **Científico/dados**: pesquisas de IBGE, IPEA, ONU, OMS (use com responsabilidade).

**Como usar bem (a "ponte"):**
1. **Apresente** o repertório de forma sintética.
2. **Relacione** explicitamente ao tema (o passo que garante a pontuação).
3. **Conclua** com a ideia que ele sustenta.

> Exemplo: "Em *Vigiar e Punir*, Foucault mostra como o controle social se exerce de modo capilar; **de forma análoga**, a vigilância digital atual condiciona comportamentos, o que evidencia a urgência de regular o uso de dados."

**Repertórios coringa** (servem em muitos temas): Constituição de 1988, DUDH, conceito de cidadania (T. H. Marshall), "modernidade líquida" (Bauman), Revolução Industrial, *1984* (Orwell). Mantenha um "banco" pessoal e treine adaptá-los.

**Erros comuns**: citar a fonte **errada** (atribuir frase a quem não disse), repertório **descolado** do tema (só para "encher"), ou clichês de senso comum ("desde os primórdios da humanidade").

**Dica de prova**: poucos repertórios bem **explorados** valem mais do que muitos jogados. Profundidade > quantidade.`,
      links: [
        { titulo: "Repertório sociocultural — Brasil Escola", url: "https://brasilescola.uol.com.br/redacao", fonte: "Brasil Escola" },
        { titulo: "Repertório para redação — Mundo Educação", url: "https://mundoeducacao.uol.com.br/enem", fonte: "Mundo Educação" },
        { titulo: "Repertórios coringa (vídeo)", url: "https://www.youtube.com/results?search_query=reposit%C3%B3rio+coringa+reda%C3%A7%C3%A3o+enem", fonte: "YouTube (educacional)" },
      ],
    },
  },
  {
    subjectSlug: "redacao",
    slug: "o-que-zera-a-redacao",
    titulo: "O que zera a redação",
    descricao: "Situações que anulam a redação e como evitá-las.",
    ordem: 5,
    material: {
      titulo: "O que zera (ou derruba) a redação",
      resumoMarkdown: `## O que zera a redação do ENEM

**Começando do zero:** Antes de aprender a tirar nota alta, vale conhecer as armadilhas que zeram tudo — porque não adianta escrever bem e cair numa delas. Zerar a redação significa perder os 1000 pontos de uma vez só, mesmo que o texto esteja bonito. A boa notícia é que quase todas essas causas são fáceis de evitar quando você as conhece de antemão.

Conhecer as causas de **nota zero** é tão importante quanto saber escrever bem. A redação recebe **0** nas seguintes situações (segundo a cartilha do INEP):

- **Fuga total ao tema** — não abordar o assunto proposto pela frase temática.
- **Não atendimento ao tipo textual** — escrever um texto que **não** é dissertativo-argumentativo (ex.: narração ou poema).
- **Texto com até 7 linhas** — considerado "insuficiente".
- **Cópia integral** dos textos motivadores ou da coletânea, sem produção própria.
- **Fuga à estrutura** / texto predominantemente em **língua estrangeira**.
- **Parte deliberadamente desconectada** do tema (desenhos, impropérios, "fonte" ofensiva, sinais que identifiquem o autor).
- **Folha em branco** ou texto ilegível/indecifrável.

**Atenção especial — Competência 5 e direitos humanos:**
Propostas de intervenção que **firam os direitos humanos** (defesa de tortura, pena de morte, "limpeza social", justiça com as próprias mãos, mutilação) **zeram a Competência 5**. Não zeram o texto todo automaticamente, mas custam 200 pontos.

**O que NÃO zera, mas derruba pontos:**
- Tangenciar o tema (abordar só de raspão) — afeta fortemente a C2.
- Desvios gramaticais frequentes (C1), poucos conectivos (C4), argumentos rasos (C3).
- Cópia parcial dos textos motivadores (penaliza a autoria).

**Checklist final antes de entregar:**
1. Abordei **exatamente** o tema? 2. É **dissertativo-argumentativo**? 3. Tenho tese clara e **2 argumentos** com repertório? 4. A **proposta de intervenção** tem os 5 elementos e respeita os direitos humanos? 5. Passei das 7 linhas e não ultrapassei 30? 6. Reli para corrigir gramática e coesão?

**Dica de prova**: na dúvida sobre o tema, releia a frase temática **palavra por palavra** e mantenha cada parágrafo ancorado nela.`,
      links: [
        { titulo: "O que zera a redação — Brasil Escola", url: "https://brasilescola.uol.com.br/redacao/o-que-zera-redacao-enem.htm", fonte: "Brasil Escola" },
        { titulo: "Cartilha do participante (INEP)", url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem", fonte: "INEP (oficial)" },
        { titulo: "Motivos de nota zero (vídeo)", url: "https://www.youtube.com/results?search_query=o+que+zera+a+reda%C3%A7%C3%A3o+enem", fonte: "YouTube (educacional)" },
      ],
    },
  },
];
