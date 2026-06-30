// Conteúdo de estudo de LINGUAGENS, CÓDIGOS E SUAS TECNOLOGIAS, gerado a partir
// da engenharia reversa das provas (2019–2025). Assuntos da taxonomia, ORDENADOS
// pela frequência real. Linguagens é a área mais "de leitura": quase tudo gira em
// torno de interpretar textos, imagens, charges, poemas e propagandas.

import type { MaterialSeed } from "./humanas";

const L = (titulo: string, url: string, fonte: string) => ({ titulo, url, fonte });

export const linguagensMateriais: MaterialSeed[] = [
  {
    topicSlug: "lng-literatura",
    titulo: "Literatura e escolas literárias",
    resumoMarkdown: `## Literatura e escolas literárias

O assunto que **mais cai** em Linguagens. O ENEM cobra literatura de forma **contextualizada**: liga o texto ao momento histórico e às características estéticas, sem exigir decoreba de datas.

**O que mais cai:**
- **Modernismo** (o mais cobrado): Semana de 22, verso livre, linguagem coloquial, o Brasil real; Drummond, Bandeira, Oswald/Mário, o **romance de 30** (Graciliano, Jorge Amado).
- **Realismo/Machado de Assis**: crítica social, análise psicológica, ironia.
- **Romantismo, Barroco, Arcadismo** em chave comparativa.
- **Literatura contemporânea e periférica**: Conceição Evaristo, Itamar Vieira Junior, poesia marginal, temas identitários.

**Como a banca cobra:** um poema/trecho e a pergunta "qual característica estética/efeito de sentido predomina". A resposta certa nasce da **leitura do texto** + reconhecimento do estilo. Cuidado com alternativas historicamente corretas, mas que não se sustentam no trecho dado.`,
    links: [
      L("Modernismo no Brasil — Mundo Educação", "https://mundoeducacao.uol.com.br/literatura/modernismo.htm", "Mundo Educação"),
      L("Escolas literárias — Brasil Escola", "https://brasilescola.uol.com.br/literatura/escolas-literarias.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "lng-espanhol",
    titulo: "Língua estrangeira — Espanhol",
    resumoMarkdown: `## Língua estrangeira — Espanhol

São **5 questões** (1 a 5) para quem escolhe Espanhol. Caem como interpretação de texto — não cobram gramática isolada.

**Estratégia:**
- O foco é **compreensão global**: ideia principal, intenção do autor, efeito de sentido.
- Cuidado com os **falsos cognatos** (heterossemânticos): *embarazada* (grávida, não "envergonhada"), *exquisito* (delicioso), *largo* (longo), *oficina* (escritório/oficina), *rato* (momento), *pelo* (cabelo).
- Gêneros frequentes: notícia, crônica, tirinha, poema, propaganda, texto de opinião.
- Não é preciso entender cada palavra — **infira pelo contexto**.

**Como a banca cobra:** um texto curto e uma pergunta de interpretação (qual a tese, a crítica, a função). Leia o enunciado primeiro e volte ao texto buscando a passagem que responde.`,
    links: [
      L("Falsos cognatos em espanhol — Brasil Escola", "https://brasilescola.uol.com.br/espanhol/falsos-cognatos-heterosemanticos.htm", "Brasil Escola"),
      L("Interpretação em espanhol no ENEM — Mundo Educação", "https://mundoeducacao.uol.com.br/espanhol", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "lng-ingles",
    titulo: "Língua estrangeira — Inglês",
    resumoMarkdown: `## Língua estrangeira — Inglês

São **5 questões** (1 a 5) para quem escolhe Inglês, sempre como **interpretação de texto**.

**Estratégia:**
- Busque a **ideia central** e a **intenção** do texto (informar, criticar, convencer, emocionar).
- Use **palavras cognatas** e o contexto para deduzir o sentido — você não precisa traduzir tudo.
- Atenção a **conectivos** (however, although, therefore, despite) que marcam contraste, causa e conclusão e mudam o sentido.
- Gêneros comuns: artigo, letra de música, charge/cartum, post, poema, anúncio.

**Como a banca cobra:** texto + pergunta de compreensão (qual a mensagem, a crítica, o propósito, o sentido de uma expressão no contexto). Leia o comando, depois o texto, e ancore a resposta numa passagem específica.`,
    links: [
      L("Conectivos em inglês (linking words) — Mundo Educação", "https://mundoeducacao.uol.com.br/ingles", "Mundo Educação"),
      L("Interpretação de texto em inglês — Brasil Escola", "https://brasilescola.uol.com.br/ingles", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "lng-corpo",
    titulo: "Educação física, corpo e esporte",
    resumoMarkdown: `## Educação física, corpo e esporte

Eixo próprio de Linguagens, com boa incidência. Trata as **práticas corporais** como manifestação cultural e questão de saúde/cidadania.

**O que mais cai:**
- **Práticas corporais como cultura**: esportes, danças, lutas, ginásticas, jogos e brincadeiras populares; a diversidade e a inclusão (paradesporto, acessibilidade).
- **Corpo, saúde e sociedade**: padrões de beleza, mídia e corpo, sedentarismo, qualidade de vida.
- **Esporte e sociedade**: profissionalização, megaeventos, esporte como direito e ferramenta de inclusão social.

**Como a banca cobra:** um texto sobre uma prática corporal pedindo sua **dimensão cultural ou social**. A resposta certa costuma valorizar a **inclusão, a diversidade e o acesso** às práticas — e criticar a redução do corpo a um padrão ou a uma mercadoria.`,
    links: [
      L("Esporte e sociedade — Brasil Escola", "https://brasilescola.uol.com.br/educacao-fisica", "Brasil Escola"),
      L("Cultura corporal de movimento — Mundo Educação", "https://mundoeducacao.uol.com.br/educacao-fisica", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "lng-interpretacao",
    titulo: "Interpretação e compreensão de texto",
    resumoMarkdown: `## Interpretação e compreensão de texto

A habilidade mais **rentável** da prova inteira — atravessa todas as áreas, não só Linguagens.

**Três níveis de leitura:**
1. **Compreensão**: o que está **explícito**.
2. **Inferência**: o que se **deduz** das pistas do texto.
3. **Crítica**: avaliar intenção, ponto de vista e efeito de sentido.

**Conceitos-chave:** tema × tese; ideia principal × secundárias; denotação × conotação; intenção comunicativa.

**Estratégia:** leia o **comando** primeiro (saiba o que procurar), volte ao texto e **grife** a passagem que responde, e compare cada alternativa **com o texto**, não com sua opinião.

**Armadilhas:** extrapolação (afirma mais do que o texto autoriza), redução, contradição e troca sutil de palavras. Desconfie de absolutos ("sempre", "nunca", "todos"). **A correta tem base no texto.**`,
    links: [
      L("Interpretação de texto — Brasil Escola", "https://brasilescola.uol.com.br/redacao/interpretacao-texto.htm", "Brasil Escola"),
      L("Compreensão e interpretação — Mundo Educação", "https://mundoeducacao.uol.com.br/redacao/interpretacao-texto.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "lng-generos",
    titulo: "Gêneros e tipos textuais",
    resumoMarkdown: `## Gêneros e tipos textuais

Pegadinha clássica: **não confunda tipo com gênero**.

- **Tipos textuais** (poucos, definidos pela estrutura): narrativo, descritivo, **dissertativo-argumentativo**, expositivo, injuntivo/instrucional.
- **Gêneros textuais** (inúmeros, definidos pela função social): notícia, crônica, editorial, carta, bula, receita, propaganda, charge, tirinha, verbete, resenha, poema, post, meme…

A chave: **um gênero contém vários tipos** (uma notícia é narrativa/expositiva; uma propaganda mistura descrição e argumentação).

**Como a banca cobra:** reconhecer o gênero pela **finalidade** e pelas marcas, ou identificar o **tipo predominante**, e relacionar **linguagem ao suporte/público**. Se a alternativa diz "o gênero é dissertativo-argumentativo", desconfie — isso é **tipo**, não gênero.`,
    links: [
      L("Gêneros textuais — Mundo Educação", "https://mundoeducacao.uol.com.br/redacao/genero-textual.htm", "Mundo Educação"),
      L("Tipos textuais — Brasil Escola", "https://brasilescola.uol.com.br/redacao/tipos-textuais.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "lng-artes",
    titulo: "Artes e patrimônio cultural",
    resumoMarkdown: `## Artes e patrimônio cultural

Linguagens não verbais: artes visuais, música, teatro, dança e patrimônio.

**O que mais cai:**
- **Leitura de obras de arte** (pintura, escultura, fotografia, grafite): o que a obra comunica, seu contexto e sua crítica.
- **Diversidade e identidade na arte**: arte indígena, afro-brasileira, popular; arte como afirmação de identidades antes invisibilizadas.
- **Patrimônio cultural** material e imaterial; preservação da memória.
- **Música e teatro** como expressão social e histórica.

**Como a banca cobra:** uma imagem/obra e a pergunta sobre seu **sentido ou intenção**. A resposta certa relaciona forma e contexto, e valoriza a arte como **expressão cultural e crítica social** — não como mera decoração ou técnica.`,
    links: [
      L("Patrimônio cultural — Brasil Escola", "https://brasilescola.uol.com.br/cultura/patrimonio-cultural.htm", "Brasil Escola"),
      L("Linguagens artísticas — Mundo Educação", "https://mundoeducacao.uol.com.br/artes", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "lng-variacao",
    titulo: "Variação linguística",
    resumoMarkdown: `## Variação linguística

Tema com forte viés **sociolinguístico**: valoriza as variedades e combate o **preconceito linguístico**. Ideia central: não há "certo/errado" absolutos, mas **adequação** ao contexto.

**Tipos de variação:** diatópica (regional), diastrática (social), diafásica (situacional/registro) e diacrônica (histórica).

**Normas:** a norma-padrão é o modelo da gramática; a norma culta é o uso de falantes escolarizados; as variedades populares têm regras próprias e coerentes — **não são "erradas"**.

**Como a banca cobra:** um texto com fala popular, regional ou de personagens (cordel, funk, Chico Bento). A resposta correta quase sempre **valoriza a variedade e a adequação ao contexto** e rejeita alternativas que tratam a fala como "erro" ou "ignorância". Marcos Bagno é referência na crítica ao preconceito linguístico.`,
    links: [
      L("Variação linguística — Mundo Educação", "https://mundoeducacao.uol.com.br/gramatica/variacoes-linguisticas.htm", "Mundo Educação"),
      L("Preconceito linguístico — Brasil Escola", "https://brasilescola.uol.com.br/gramatica/preconceito-linguistico.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "lng-tecnologias",
    titulo: "Tecnologias e mídias da informação",
    resumoMarkdown: `## Tecnologias e mídias da informação

A linguagem no **mundo digital** e o papel das mídias.

**O que mais cai:**
- **Gêneros digitais**: post, meme, perfil, podcast, blog, comentário — e suas linguagens próprias (multimodalidade, hipertexto).
- **Mídias e sociedade**: papel da imprensa, fake news, bolhas, cultura do compartilhamento.
- **Linguagem verbal + não verbal** combinadas (emojis, imagens, hashtags).
- Inclusão/exclusão digital.

**Como a banca cobra:** um print de rede social, um meme ou um texto sobre tecnologia, pedindo o **efeito de sentido** ou a **função comunicativa**. A resposta certa lê os recursos da linguagem digital em seu contexto de uso.`,
    links: [
      L("Gêneros digitais — Mundo Educação", "https://mundoeducacao.uol.com.br/redacao/genero-textual.htm", "Mundo Educação"),
      L("Multimodalidade e linguagem — Brasil Escola", "https://brasilescola.uol.com.br/redacao", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "lng-figuras",
    titulo: "Figuras de linguagem e estilo",
    resumoMarkdown: `## Figuras de linguagem e estilo

Recursos expressivos que dão **força e novos sentidos** ao texto — caem em poemas, músicas e propagandas.

**As mais cobradas:**
- **Metáfora** (comparação implícita) × **comparação** (com conectivo) × **metonímia** (relação de proximidade: "ler Machado").
- **Ironia** (dizer o contrário com intenção crítica), **antítese/paradoxo** (oposição), **hipérbole** (exagero), **eufemismo** (suavização), **personificação**.
- **Aliteração/assonância** (sons), **anáfora** (repetição).

**Como a banca cobra:** identificar a figura e, principalmente, o **efeito de sentido** que ela produz. Cuidado para não confundir **metáfora** (sem conectivo) com **comparação** (com "como"), e **metonímia** com metáfora.`,
    links: [
      L("Figuras de linguagem — Brasil Escola", "https://brasilescola.uol.com.br/redacao/figuras-linguagem.htm", "Brasil Escola"),
      L("Figuras de linguagem — Mundo Educação", "https://mundoeducacao.uol.com.br/gramatica/figuras-linguagem.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "lng-intertextualidade",
    titulo: "Intertextualidade",
    resumoMarkdown: `## Intertextualidade

O **diálogo entre textos**: quando um texto retoma, cita, reescreve ou alude a outro. O ENEM adora charges, memes e propagandas que conversam com obras clássicas.

**Tipos principais:**
- **Citação** (reprodução literal), **paráfrase** (reescrita que mantém o sentido), **paródia** (recriação que subverte/critica), **alusão** (menção indireta), **epígrafe**, **pastiche**.

**A distinção mais cobrada — paródia × paráfrase:**
- **Paráfrase** = concorda/reafirma o sentido original (re-dizer).
- **Paródia** = transforma/contesta, geralmente com humor ou crítica (des-dizer).

**Como a banca cobra:** mostra um texto-fonte e um texto novo, pedindo a relação. Pergunte-se se o segundo **reforça** (paráfrase/citação) ou **inverte/ridiculariza** (paródia) o primeiro — e qual crítica ou efeito isso gera.`,
    links: [
      L("Intertextualidade — Brasil Escola", "https://brasilescola.uol.com.br/redacao/intertextualidade.htm", "Brasil Escola"),
      L("Intertextualidade — Mundo Educação", "https://mundoeducacao.uol.com.br/gramatica/intertextualidade.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "lng-funcoes",
    titulo: "Funções da linguagem",
    resumoMarkdown: `## Funções da linguagem

As **seis funções** (Jakobson), cada uma ligada a um elemento da comunicação em destaque:

- **Referencial**: foco no **referente/contexto** — informar (notícia, texto científico).
- **Emotiva**: foco no **emissor** — subjetividade, 1ª pessoa.
- **Conativa**: foco no **receptor** — convencer/ordenar (publicidade, imperativo).
- **Fática**: foco no **canal** — testar/manter contato ("alô?", "né?").
- **Metalinguística**: foco no **código** — a linguagem fala dela mesma (dicionário, poema sobre poesia).
- **Poética**: foco na **mensagem** — trabalho da forma e sonoridade.

**Como a banca cobra:** um texto e a pergunta sobre a função **predominante**. Pergunte: o texto quer *informar* (referencial), *expressar o eu* (emotiva), *convencer o outro* (conativa), *manter contato* (fática), *explicar a língua* (metalinguística) ou *destacar a forma* (poética)? Anúncios combinam **conativa + poética**.`,
    links: [
      L("Funções da linguagem — Brasil Escola", "https://brasilescola.uol.com.br/redacao/funcoes-linguagem.htm", "Brasil Escola"),
      L("Funções da linguagem — Mundo Educação", "https://mundoeducacao.uol.com.br/gramatica/funcoes-linguagem.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "lng-gramatica",
    titulo: "Gramática e coesão",
    resumoMarkdown: `## Gramática e coesão

No ENEM, gramática cai **a serviço do sentido** — nunca como regra isolada.

**O que mais cai:**
- **Coesão**: como o texto se "amarra" — uso de **conectivos** (mas, porque, portanto) e de **referenciação** (pronomes e expressões que retomam termos, evitando repetição).
- **Coerência**: a lógica e a não contradição entre as ideias.
- **Efeitos de classes gramaticais**: o sentido que um verbo, um pronome ou um adjetivo produz no contexto.
- **Ambiguidade** e seus efeitos.

**Como a banca cobra:** "o conectivo X estabelece relação de…", "o pronome retoma…", "o efeito de sentido do termo…". A resposta certa explica **qual relação** o recurso cria no texto (causa, oposição, conclusão, retomada).`,
    links: [
      L("Coesão e coerência — Mundo Educação", "https://mundoeducacao.uol.com.br/redacao/coesao-textual.htm", "Mundo Educação"),
      L("Mecanismos de coesão — Brasil Escola", "https://brasilescola.uol.com.br/redacao/coesao-textual.htm", "Brasil Escola"),
    ],
  },
];
