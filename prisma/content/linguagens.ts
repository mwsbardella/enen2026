import type { TopicSeed } from "./types";

export const linguagensTopics: TopicSeed[] = [
  {
    subjectSlug: "linguagens",
    slug: "funcoes-da-linguagem",
    titulo: "Funções da linguagem",
    descricao: "As seis funções de Jakobson e como identificá-las nos textos.",
    ordem: 1,
    material: {
      titulo: "Funções da linguagem",
      resumoMarkdown: `## Funções da linguagem

Toda comunicação se organiza em torno de **seis elementos** (modelo de Roman Jakobson): emissor, receptor, mensagem, código, canal e referente (contexto). Conforme o elemento que se destaca, predomina uma **função da linguagem**. No ENEM, a questão clássica mostra um texto e pergunta qual função predomina — por isso o segredo é associar cada função ao seu *foco*.

- **Função referencial (ou denotativa)**: foco no **referente/contexto**. Linguagem objetiva, em 3ª pessoa, informativa. Típica de notícias, textos científicos e didáticos. Palavra-chave: *informar*.
- **Função emotiva (ou expressiva)**: foco no **emissor**. Marca a subjetividade — 1ª pessoa, interjeições, opiniões e emoções. Comum em poemas líricos, diários, relatos pessoais.
- **Função conativa (ou apelativa)**: foco no **receptor**. Tenta convencer ou ordenar — vocativos, imperativos, pronomes "você/tu". É a função da **publicidade** e dos discursos.
- **Função fática**: foco no **canal**. Serve para testar, iniciar, manter ou encerrar o contato: "Alô?", "Né?", "Entende?". Aparece em saudações e conversas telefônicas.
- **Função metalinguística**: foco no **código**. A linguagem fala dela mesma — verbetes de dicionário, gramática, um poema que fala sobre fazer poesia, um filme sobre cinema.
- **Função poética**: foco na **mensagem**. Trabalha a forma, a sonoridade e as figuras de linguagem para produzir efeito estético. Não é exclusiva da poesia: aparece em provérbios, letras de música e propagandas criativas.

**Dica de prova**: um mesmo texto pode ter várias funções, mas a questão pede a **predominante**. Pergunte-se: o texto quer *informar* (referencial), *emocionar a partir do eu* (emotiva), *convencer o outro* (conativa), *manter contato* (fática), *explicar a própria língua* (metalinguística) ou *chamar atenção para a forma* (poética)? Anúncios costumam combinar **conativa + poética**.`,
      links: [
        { titulo: "Funções da linguagem — Brasil Escola", url: "https://brasilescola.uol.com.br/redacao/funcoes-linguagem.htm", fonte: "Brasil Escola" },
        { titulo: "Funções da linguagem — Mundo Educação", url: "https://mundoeducacao.uol.com.br/gramatica/funcoes-linguagem.htm", fonte: "Mundo Educação" },
        { titulo: "Funções da linguagem (vídeo) — Português com Letícia", url: "https://www.youtube.com/results?search_query=fun%C3%A7%C3%B5es+da+linguagem+enem", fonte: "YouTube (educacional)" },
      ],
    },
  },
  {
    subjectSlug: "linguagens",
    slug: "variacao-linguistica",
    titulo: "Variação linguística",
    descricao: "Tipos de variação, preconceito linguístico e adequação ao contexto.",
    ordem: 2,
    material: {
      titulo: "Variação linguística",
      resumoMarkdown: `## Variação linguística

A língua **não é uniforme**: ela varia conforme quem fala, onde, quando e em que situação. O ENEM aborda o tema com forte viés **sociolinguístico**, valorizando o respeito às variedades e combatendo o **preconceito linguístico**. A ideia central: não existe "certo" e "errado" absolutos, mas **adequação** ao contexto.

**Tipos de variação:**

- **Diatópica (regional)**: varia conforme o **lugar** — "mandioca/aipim/macaxeira", sotaques, regionalismos.
- **Diastrática (social)**: varia conforme o **grupo social**, escolaridade ou profissão — gírias, jargões técnicos.
- **Diafásica (situacional/de registro)**: varia conforme a **situação** — registro formal numa entrevista de emprego, informal entre amigos.
- **Diacrônica (histórica)**: varia ao longo do **tempo** — "vossa mercê" → "você"; palavras que caem em desuso.

**Normas:** a **norma-padrão** é o modelo ideal descrito na gramática; a **norma culta** é o uso real de falantes escolarizados; as **variedades populares/coloquiais** seguem regras próprias e coerentes, não são "erradas".

**Preconceito linguístico** é discriminar alguém pelo modo de falar (associado a região, classe ou escolaridade). O linguista **Marcos Bagno** é referência na crítica a esse preconceito. Fenômenos como o "**rotacismo**" (trocar L por R: "Cráudia", "probrema") são marcas de variedades populares, não defeitos cognitivos.

**Dica de prova**: quando o texto traz fala popular, regional ou de personagens (Chico Bento, cordel, funk, rap), a resposta correta quase sempre **valoriza a variedade e a adequação ao contexto** — e rejeita alternativas que tratam a fala como "erro" ou "ignorância".`,
      links: [
        { titulo: "Variação linguística — Mundo Educação", url: "https://mundoeducacao.uol.com.br/gramatica/variacoes-linguisticas.htm", fonte: "Mundo Educação" },
        { titulo: "Preconceito linguístico — Brasil Escola", url: "https://brasilescola.uol.com.br/gramatica/preconceito-linguistico.htm", fonte: "Brasil Escola" },
        { titulo: "Variação linguística (vídeo)", url: "https://www.youtube.com/results?search_query=varia%C3%A7%C3%A3o+lingu%C3%ADstica+enem", fonte: "YouTube (educacional)" },
      ],
    },
  },
  {
    subjectSlug: "linguagens",
    slug: "figuras-de-linguagem",
    titulo: "Figuras de linguagem",
    descricao: "Metáfora, metonímia, ironia, antítese e outras figuras recorrentes.",
    ordem: 3,
    material: {
      titulo: "Figuras de linguagem",
      resumoMarkdown: `## Figuras de linguagem

Figuras de linguagem são recursos expressivos que dão **força, beleza ou novos sentidos** ao texto. Caem muito em interpretação de poemas, letras de música e propagandas. Agrupe-as por tipo:

**Figuras de palavra (semânticas):**
- **Metáfora**: comparação implícita — "Meu pensamento é um rio subterrâneo".
- **Comparação (símile)**: comparação explícita, com conectivo ("como", "que nem") — "forte como um touro".
- **Metonímia**: troca de uma palavra por outra com relação de proximidade — "ler **Machado**" (a obra pelo autor), "beber um **copo**" (o conteúdo pelo recipiente).
- **Catacrese**: metáfora já cristalizada — "**braço** da cadeira", "**pé** da mesa".
- **Sinestesia**: cruzamento de sentidos — "som **áspero**", "cor **quente**".

**Figuras de pensamento:**
- **Antítese**: oposição de ideias — "amor e ódio".
- **Paradoxo (oxímoro)**: ideias contraditórias na mesma expressão — "é ferida que dói e não se sente".
- **Ironia**: dizer o contrário do que se pensa, com intenção crítica ou humorística.
- **Hipérbole**: exagero — "morri de rir".
- **Eufemismo**: suavização — "ele partiu" (morreu).
- **Personificação (prosopopeia)**: dar características humanas a seres inanimados — "o vento sussurrava".

**Figuras de sintaxe e som:**
- **Anáfora**: repetição de palavra no início de versos/frases.
- **Pleonasmo**: redundância intencional para ênfase — "vi com meus próprios olhos".
- **Aliteração**: repetição de sons consonantais; **assonância**: de vogais.

**Dica de prova**: cuidado para não confundir **metáfora** (sem conectivo) com **comparação** (com conectivo), e **metonímia** (relação de contiguidade) com metáfora (relação de semelhança).`,
      links: [
        { titulo: "Figuras de linguagem — Brasil Escola", url: "https://brasilescola.uol.com.br/redacao/figuras-linguagem.htm", fonte: "Brasil Escola" },
        { titulo: "Figuras de linguagem — Mundo Educação", url: "https://mundoeducacao.uol.com.br/gramatica/figuras-linguagem.htm", fonte: "Mundo Educação" },
        { titulo: "Figuras de linguagem (vídeo)", url: "https://www.youtube.com/results?search_query=figuras+de+linguagem+enem", fonte: "YouTube (educacional)" },
      ],
    },
  },
  {
    subjectSlug: "linguagens",
    slug: "interpretacao-de-texto",
    titulo: "Interpretação de texto",
    descricao: "Estratégias para tema, tese, inferência e armadilhas das alternativas.",
    ordem: 4,
    material: {
      titulo: "Interpretação de texto",
      resumoMarkdown: `## Interpretação de texto

Interpretar bem é a habilidade mais **rentável** do ENEM: ela atravessa todas as áreas, não só Linguagens. A maioria das questões não cobra "decoreba", e sim a **compreensão do que o texto diz e do que se pode inferir dele**.

**Três níveis de leitura:**
1. **Compreensão**: o que está **explícito** no texto (informações literais).
2. **Inferência**: o que se **deduz** a partir de pistas, sem estar escrito com todas as letras.
3. **Apreciação/crítica**: avaliar intenção, ponto de vista, efeito de sentido.

**Conceitos-chave:**
- **Tema**: o assunto geral. **Tese**: a posição/opinião defendida sobre o tema.
- **Ideia principal x secundárias**: distinga o argumento central dos exemplos.
- **Denotação** (sentido literal) x **conotação** (sentido figurado).
- **Intenção comunicativa**: informar, criticar, convencer, emocionar.

**Estratégia para a prova:**
1. Leia primeiro o **enunciado/comando** para saber o que procurar.
2. Volte ao texto e **grife** a passagem que responde.
3. Compare cada alternativa **com o texto**, não com sua opinião.

**Armadilhas comuns nas alternativas:**
- **Extrapolação**: afirma mais do que o texto autoriza.
- **Redução**: empobrece ou inverte o sentido.
- **Contradição**: diz o oposto do texto.
- **Distorção/troca de palavras**: parece certa, mas muda um detalhe.

**Regra de ouro**: a alternativa correta precisa ter **base no texto**. Se você precisa "completar com o que acha", desconfie. Cuidado com palavras absolutas ("sempre", "nunca", "todos"), que costumam tornar a afirmação falsa.`,
      links: [
        { titulo: "Interpretação de texto — Brasil Escola", url: "https://brasilescola.uol.com.br/redacao/interpretacao-texto.htm", fonte: "Brasil Escola" },
        { titulo: "Compreensão e interpretação — Mundo Educação", url: "https://mundoeducacao.uol.com.br/redacao/interpretacao-texto.htm", fonte: "Mundo Educação" },
        { titulo: "Como interpretar textos no ENEM (vídeo)", url: "https://www.youtube.com/results?search_query=interpreta%C3%A7%C3%A3o+de+texto+enem", fonte: "YouTube (educacional)" },
      ],
    },
  },
  {
    subjectSlug: "linguagens",
    slug: "intertextualidade",
    titulo: "Intertextualidade",
    descricao: "Citação, paráfrase, paródia, alusão e diálogo entre textos.",
    ordem: 5,
    material: {
      titulo: "Intertextualidade",
      resumoMarkdown: `## Intertextualidade

**Intertextualidade** é o diálogo entre textos: quando um texto retoma, cita, reescreve ou faz referência a outro. O ENEM adora questões que mostram um texto-fonte clássico e um texto novo que conversa com ele (charges, memes, propagandas, releituras de obras de arte e de poemas).

**Principais tipos:**
- **Citação**: reprodução literal de um trecho, com indicação da fonte (aspas, referência).
- **Paráfrase**: reescrita que **mantém o sentido** do original com outras palavras. "Quem ama o feio bonito lhe parece" parafraseia um provérbio.
- **Paródia**: recriação que **subverte/ critica** o sentido original, geralmente com humor ou crítica social. Muito comum em propaganda e música.
- **Alusão (referência)**: menção indireta a outra obra, pessoa ou fato, sem reproduzi-lo. "Ser ou não ser" alude a Shakespeare.
- **Epígrafe**: trecho de outro autor colocado na abertura de uma obra/capítulo.
- **Pastiche**: imitação do estilo de outro autor ou gênero.

**Paródia x Paráfrase** (a distinção mais cobrada):
- **Paráfrase** = concorda/reafirma o sentido original (re-dizer).
- **Paródia** = transforma/contesta o sentido original (des-dizer, ironizar).

**Por que importa**: identificar a intertextualidade revela a **intenção crítica** ou **humorística** de um texto. Em uma charge que recria *O Grito*, de Munch, ou *A Persistência da Memória*, de Dalí, perceber o texto-fonte é o que permite entender a crítica feita no texto novo.

**Dica de prova**: pergunte-se se o segundo texto **reforça** (paráfrase, citação) ou **inverte/ridiculariza** (paródia) o primeiro — e qual efeito de sentido isso gera.`,
      links: [
        { titulo: "Intertextualidade — Brasil Escola", url: "https://brasilescola.uol.com.br/redacao/intertextualidade.htm", fonte: "Brasil Escola" },
        { titulo: "Intertextualidade — Mundo Educação", url: "https://mundoeducacao.uol.com.br/gramatica/intertextualidade.htm", fonte: "Mundo Educação" },
        { titulo: "Intertextualidade no ENEM (vídeo)", url: "https://www.youtube.com/results?search_query=intertextualidade+enem", fonte: "YouTube (educacional)" },
      ],
    },
  },
  {
    subjectSlug: "linguagens",
    slug: "generos-textuais",
    titulo: "Gêneros textuais",
    descricao: "Características de gêneros e diferença entre gênero e tipo textual.",
    ordem: 6,
    material: {
      titulo: "Gêneros e tipos textuais",
      resumoMarkdown: `## Gêneros e tipos textuais

Não confunda **tipo textual** com **gênero textual** — é a pegadinha mais frequente.

**Tipos textuais** são poucos e definidos pela **estrutura linguística**:
- **Narrativo**: conta fatos numa sequência temporal (personagens, enredo, tempo).
- **Descritivo**: caracteriza seres, lugares, objetos (predomínio de adjetivos).
- **Dissertativo-argumentativo**: defende uma tese com argumentos (é o tipo da redação do ENEM).
- **Expositivo**: apresenta/explica informações sem necessariamente defender tese.
- **Injuntivo/instrucional**: orienta ações (receitas, manuais, bulas — verbos no imperativo).

**Gêneros textuais** são **inúmeros** e definidos pela **função social e pela situação de uso**: notícia, crônica, editorial, carta, e-mail, bula, receita, propaganda, charge, tirinha, verbete, resenha, poema, post, meme, cordel, etc. Cada gênero tem suporte, público e finalidade próprios.

A chave: **um gênero pode conter vários tipos**. Uma **notícia** (gênero) é predominantemente narrativa/expositiva; uma **propaganda** (gênero) mistura descrição e argumentação; uma **crônica** pode ser narrativa e dissertativa ao mesmo tempo.

**O que o ENEM cobra:**
- Reconhecer o gênero pela **finalidade** e pelas marcas (uma bula orienta; um editorial opina em nome do veículo; uma crônica reflete sobre o cotidiano).
- Identificar o **tipo predominante**.
- Relacionar **linguagem e suporte** (um post de rede social tem linguagem diferente de um artigo acadêmico).

**Dica de prova**: se a alternativa diz "o gênero é dissertativo-argumentativo", desconfie — *dissertativo-argumentativo é tipo, não gênero*. Gêneros têm nome social: carta, charge, manchete...`,
      links: [
        { titulo: "Gêneros textuais — Mundo Educação", url: "https://mundoeducacao.uol.com.br/redacao/genero-textual.htm", fonte: "Mundo Educação" },
        { titulo: "Tipos textuais — Brasil Escola", url: "https://brasilescola.uol.com.br/redacao/tipos-textuais.htm", fonte: "Brasil Escola" },
        { titulo: "Gênero x tipo textual (vídeo)", url: "https://www.youtube.com/results?search_query=g%C3%AAnero+e+tipo+textual+enem", fonte: "YouTube (educacional)" },
      ],
    },
  },
  {
    subjectSlug: "linguagens",
    slug: "escolas-literarias",
    titulo: "Escolas literárias",
    descricao: "Do Barroco ao Modernismo e Contemporâneo: foco no que mais cai.",
    ordem: 7,
    material: {
      titulo: "Escolas literárias (panorama para o ENEM)",
      resumoMarkdown: `## Escolas literárias — o que mais cai

O ENEM cobra literatura de forma **contextualizada**: associa o texto ao seu momento histórico e às características estéticas. Foque nos movimentos mais cobrados e em seus autores-chave.

- **Barroco (séc. XVII)**: tensão entre o sagrado e o profano, **antíteses e paradoxos**, rebuscamento (cultismo) e jogo de ideias (conceptismo). Autor: **Gregório de Matos**.
- **Arcadismo (séc. XVIII)**: oposição ao Barroco — equilíbrio, natureza idealizada, *bucolismo*, lemas latinos (*carpe diem*, *fugere urbem*). Tomás Antônio Gonzaga (*Marília de Dirceu*).
- **Romantismo (séc. XIX)**: subjetividade, idealização do amor e da mulher, nacionalismo, indianismo (Gonçalves Dias, José de Alencar). Inclui a poesia ultrarromântica (*mal do século*, Álvares de Azevedo) e a condoreira/social (**Castro Alves**, *Navio Negreiro*).
- **Realismo/Naturalismo (fim do séc. XIX)**: crítica à sociedade burguesa, objetividade, análise psicológica. **Machado de Assis** (*Dom Casmurro*, *Brás Cubas*) no Realismo; **Aluísio Azevedo** (*O Cortiço*) no Naturalismo, com determinismo (meio + raça + momento).
- **Parnasianismo e Simbolismo**: o primeiro valoriza a forma perfeita ("arte pela arte", Olavo Bilac); o segundo, a musicalidade e o místico (Cruz e Sousa).
- **Pré-Modernismo**: transição com denúncia social — **Euclides da Cunha** (*Os Sertões*), Lima Barreto, Monteiro Lobato.
- **Modernismo (1922 →)**: a fase mais cobrada. **Semana de Arte Moderna de 1922** rompe com o academicismo: liberdade formal, verso livre, linguagem coloquial, valorização do Brasil real. 1ª geração (Oswald e Mário de Andrade, antropofagia); 2ª geração (poesia de Drummond, Cecília Meireles; **romance de 30**: Graciliano Ramos/*Vidas Secas*, Jorge Amado, Rachel de Queiroz); 3ª geração (João Cabral de Melo Neto, Guimarães Rosa, Clarice Lispector).
- **Contemporâneo**: pluralidade, temas urbanos, periféricos e identitários — Conceição Evaristo, Itamar Vieira Junior (*Torto Arado*), poesia marginal.

**Dica de prova**: ligue **características estéticas** ao **contexto histórico** e reconheça o autor pelo estilo. As bancas adoram **Modernismo** e **Realismo/Machado**.`,
      links: [
        { titulo: "Escolas literárias — Brasil Escola", url: "https://brasilescola.uol.com.br/literatura/escolas-literarias.htm", fonte: "Brasil Escola" },
        { titulo: "Modernismo no Brasil — Mundo Educação", url: "https://mundoeducacao.uol.com.br/literatura/modernismo.htm", fonte: "Mundo Educação" },
        { titulo: "Literatura para o ENEM (vídeo)", url: "https://www.youtube.com/results?search_query=escolas+liter%C3%A1rias+enem", fonte: "YouTube (educacional)" },
      ],
    },
  },
];
