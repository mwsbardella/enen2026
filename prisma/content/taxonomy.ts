// Taxonomia de assuntos do ENEM (granularidade média, ~12-15 por área).
// Serve a dois propósitos:
//   1) Classificação: o classificador (scripts/classify-questions.ts) casa o texto
//      de cada Question com as `keywords` para inferir o assunto e preencher topicId.
//   2) Seed: cada item vira um Topic (área = subjectSlug). O conteúdo de estudo é
//      gerado por assunto, ordenado pela frequência real medida nas provas.
//
// `keywords` são comparadas em minúsculas e SEM acento (ver normalize no classificador).
// `area` usa o slug do Subject: linguagens | humanas | matematica | natureza.

export type TaxonomyTopic = {
  area: "linguagens" | "humanas" | "matematica" | "natureza";
  slug: string;
  titulo: string;
  descricao: string;
  ordem: number;
  keywords: string[];
};

export const taxonomy: TaxonomyTopic[] = [
  // ---------------- LINGUAGENS ----------------
  { area: "linguagens", slug: "lng-interpretacao", titulo: "Interpretação e compreensão de texto", descricao: "Tema, tese, inferência e efeitos de sentido.", ordem: 1,
    keywords: ["depreende-se", "o texto", "infere-se", "sentido", "finalidade do texto", "objetivo do texto", "leitor"] },
  { area: "linguagens", slug: "lng-variacao", titulo: "Variação linguística", descricao: "Variedades, registro e preconceito linguístico.", ordem: 2,
    keywords: ["variacao linguistica", "variedade", "regionalismo", "norma-padrao", "norma culta", "preconceito linguistico", "sotaque", "giria", "fala", "coloquial"] },
  { area: "linguagens", slug: "lng-funcoes", titulo: "Funções da linguagem", descricao: "As seis funções e a predominante.", ordem: 3,
    keywords: ["funcao da linguagem", "funcao referencial", "funcao emotiva", "funcao conativa", "funcao fatica", "funcao metalinguistica", "funcao poetica"] },
  { area: "linguagens", slug: "lng-figuras", titulo: "Figuras de linguagem e estilo", descricao: "Metáfora, ironia, metonímia e recursos expressivos.", ordem: 4,
    keywords: ["figura de linguagem", "metafora", "metonimia", "ironia", "hiperbole", "antitese", "personificacao", "eufemismo", "recurso expressivo", "recurso estilistico"] },
  { area: "linguagens", slug: "lng-generos", titulo: "Gêneros e tipos textuais", descricao: "Gênero, função social e tipo predominante.", ordem: 5,
    keywords: ["genero textual", "tipo textual", "cronica", "editorial", "charge", "tirinha", "propaganda", "anuncio", "campanha", "cartaz", "verbete", "reportagem", "noticia"] },
  { area: "linguagens", slug: "lng-intertextualidade", titulo: "Intertextualidade", descricao: "Citação, paráfrase, paródia e alusão.", ordem: 6,
    keywords: ["intertextualidade", "parodia", "parafrase", "alusao", "dialogo entre", "releitura", "referencia a obra"] },
  { area: "linguagens", slug: "lng-literatura", titulo: "Literatura e escolas literárias", descricao: "Estética, autores e movimentos.", ordem: 7,
    keywords: ["poema", "soneto", "eu lirico", "verso", "estrofe", "modernismo", "romantismo", "barroco", "realismo", "literatura", "conto", "narrador", "personagem"] },
  { area: "linguagens", slug: "lng-artes", titulo: "Artes e patrimônio cultural", descricao: "Artes visuais, música, teatro e patrimônio.", ordem: 8,
    keywords: ["obra de arte", "pintura", "escultura", "artista", "musica", "cancao", "teatro", "danca", "patrimonio cultural", "grafite", "fotografia"] },
  { area: "linguagens", slug: "lng-corpo", titulo: "Educação física, corpo e esporte", descricao: "Práticas corporais, saúde e esporte.", ordem: 9,
    keywords: ["esporte", "atleta", "pratica corporal", "educacao fisica", "ginastica", "jogo", "futebol", "corpo", "atividade fisica", "paralimpico", "lazer"] },
  { area: "linguagens", slug: "lng-tecnologias", titulo: "Tecnologias e mídias da informação", descricao: "Linguagem digital, mídias e redes.", ordem: 10,
    keywords: ["internet", "rede social", "midia digital", "tecnologia da informacao", "podcast", "aplicativo", "meme", "digital", "plataforma"] },
  { area: "linguagens", slug: "lng-gramatica", titulo: "Gramática e coesão", descricao: "Morfossintaxe, coesão e semântica.", ordem: 11,
    keywords: ["coesao", "conjuncao", "pronome", "verbo", "concordancia", "regencia", "conectivo", "referente", "morfologia", "sintaxe", "ambiguidade"] },
  { area: "linguagens", slug: "lng-ingles", titulo: "Língua estrangeira — Inglês", descricao: "Leitura e interpretação em inglês.", ordem: 12,
    keywords: ["the text", "according to the", "in the text", "the author", "the word", "english"] },
  { area: "linguagens", slug: "lng-espanhol", titulo: "Língua estrangeira — Espanhol", descricao: "Leitura e interpretação em espanhol.", ordem: 13,
    keywords: ["el texto", "segun el", "de acuerdo con", "el autor", "la palabra", "en el texto"] },

  // ---------------- HUMANAS ----------------
  { area: "humanas", slug: "hum-colonia", titulo: "Brasil Colônia e escravidão", descricao: "Colonização, trabalho escravo e resistência.", ordem: 1,
    keywords: ["colonia", "colonizacao", "escravidao", "escravizado", "quilombo", "engenho", "capitanias", "jesuitas", "indigena", "metropole", "pau-brasil", "bandeirantes"] },
  { area: "humanas", slug: "hum-imperio", titulo: "Império e Primeira República", descricao: "Independência, Império e República Velha.", ordem: 2,
    keywords: ["imperio", "dom pedro", "independencia", "republica velha", "cafe com leite", "coronelismo", "abolicao", "proclamacao da republica", "regencia"] },
  { area: "humanas", slug: "hum-vargas", titulo: "Era Vargas e populismo", descricao: "Getúlio Vargas, trabalhismo e populismo.", ordem: 3,
    keywords: ["getulio", "vargas", "estado novo", "trabalhismo", "clt", "populismo", "revolucao de 1930", "queremismo"] },
  { area: "humanas", slug: "hum-ditadura", titulo: "Ditadura militar e redemocratização", descricao: "Regime militar, repressão e abertura.", ordem: 4,
    keywords: ["ditadura", "regime militar", "ai-5", "golpe de 1964", "censura", "redemocratizacao", "diretas ja", "anistia", "constituicao de 1988"] },
  { area: "humanas", slug: "hum-mundial", titulo: "História mundial contemporânea", descricao: "Guerras mundiais, Guerra Fria e revoluções.", ordem: 5,
    keywords: ["guerra mundial", "guerra fria", "nazismo", "fascismo", "revolucao industrial", "revolucao francesa", "imperialismo", "socialismo", "muro de berlim", "uniao sovietica"] },
  { area: "humanas", slug: "hum-agraria", titulo: "Geografia agrária e questão da terra", descricao: "Agropecuária, reforma agrária e agronegócio.", ordem: 6,
    keywords: ["agraria", "agropecuaria", "agronegocio", "reforma agraria", "rural", "campo", "latifundio", "produtividade agricola", "agricultura"] },
  { area: "humanas", slug: "hum-urbanizacao", titulo: "Urbanização e população", descricao: "Cidades, migração e dinâmica demográfica.", ordem: 7,
    keywords: ["urbanizacao", "cidade", "metropole", "favela", "migracao", "demografia", "populacao", "rede urbana", "conurbacao", "exodo rural"] },
  { area: "humanas", slug: "hum-ambiente", titulo: "Geografia física e meio ambiente", descricao: "Clima, relevo, recursos e impactos ambientais.", ordem: 8,
    keywords: ["clima", "relevo", "bioma", "bacia hidrografica", "desmatamento", "impacto ambiental", "recursos naturais", "vegetacao", "solo", "aquecimento global", "sustentabilidade"] },
  { area: "humanas", slug: "hum-globalizacao", titulo: "Globalização e geopolítica", descricao: "Blocos, comércio mundial e geopolítica.", ordem: 9,
    keywords: ["globalizacao", "geopolitica", "blocos economicos", "comercio internacional", "multinacional", "fronteira", "conflito", "territorio", "soberania", "mundializacao"] },
  { area: "humanas", slug: "hum-trabalho", titulo: "Trabalho, economia e indústria", descricao: "Modos de produção, indústria e mundo do trabalho.", ordem: 10,
    keywords: ["trabalho", "industria", "industrializacao", "capitalismo", "fordismo", "taylorismo", "divisao do trabalho", "mais-valia", "desemprego", "economia"] },
  { area: "humanas", slug: "hum-cidadania", titulo: "Cidadania, direitos e Estado", descricao: "Direitos, democracia e participação política.", ordem: 11,
    keywords: ["cidadania", "direitos humanos", "democracia", "constituicao", "estado", "politica publica", "participacao popular", "voto", "direitos sociais", "lei", "justica"] },
  { area: "humanas", slug: "hum-filosofia", titulo: "Filosofia: ética, política e conhecimento", descricao: "Pensadores, ética e teoria do conhecimento.", ordem: 12,
    keywords: ["filosofo", "filosofia", "etica", "moral", "platao", "aristoteles", "socrates", "kant", "iluminismo", "contrato social", "conhecimento", "razao"] },
  { area: "humanas", slug: "hum-sociologia", titulo: "Sociologia: cultura e movimentos sociais", descricao: "Cultura, identidade e movimentos sociais.", ordem: 13,
    keywords: ["sociologia", "cultura", "identidade", "movimento social", "desigualdade", "genero", "etnia", "indigena", "feminismo", "consumo", "industria cultural", "estratificacao"] },

  // ---------------- MATEMÁTICA ----------------
  { area: "matematica", slug: "mat-razao-proporcao", titulo: "Razão, proporção e regra de três", descricao: "Proporcionalidade, escala e regra de três.", ordem: 1,
    keywords: ["regra de tres", "proporcao", "proporcional", "razao", "escala", "velocidade media", "densidade"] },
  { area: "matematica", slug: "mat-porcentagem", titulo: "Porcentagem e matemática financeira", descricao: "Porcentagem, juros, descontos e acréscimos.", ordem: 2,
    keywords: ["porcentagem", "por cento", "%", "desconto", "acrescimo", "juros", "lucro", "aumento de", "reducao de", "taxa"] },
  { area: "matematica", slug: "mat-funcoes", titulo: "Funções", descricao: "Funções afim, quadrática, exponencial e logarítmica.", ordem: 3,
    keywords: ["funcao", "f(x)", "funcao afim", "funcao quadratica", "parabola", "exponencial", "logaritmo", "grafico da funcao", "lei de formacao"] },
  { area: "matematica", slug: "mat-geometria-plana", titulo: "Geometria plana", descricao: "Áreas, perímetros, ângulos e semelhança.", ordem: 4,
    keywords: ["area", "perimetro", "triangulo", "quadrado", "retangulo", "circulo", "angulo", "teorema de pitagoras", "semelhanca", "poligono"] },
  { area: "matematica", slug: "mat-geometria-espacial", titulo: "Geometria espacial", descricao: "Volumes e áreas de sólidos.", ordem: 5,
    keywords: ["volume", "cubo", "cilindro", "cone", "esfera", "prisma", "piramide", "solido", "capacidade", "litros", "m3"] },
  { area: "matematica", slug: "mat-geometria-analitica", titulo: "Geometria analítica", descricao: "Plano cartesiano, reta e distância.", ordem: 6,
    keywords: ["plano cartesiano", "coordenadas", "reta", "distancia entre pontos", "ponto medio", "abscissa", "ordenada", "equacao da reta"] },
  { area: "matematica", slug: "mat-estatistica", titulo: "Estatística", descricao: "Média, mediana, moda e gráficos.", ordem: 7,
    keywords: ["media", "mediana", "moda", "media aritmetica", "grafico de barras", "tabela", "frequencia", "amostra", "desvio", "dados estatisticos"] },
  { area: "matematica", slug: "mat-probabilidade", titulo: "Probabilidade", descricao: "Cálculo de probabilidades e eventos.", ordem: 8,
    keywords: ["probabilidade", "chance", "evento", "sorteio", "ao acaso", "dado", "moeda", "espaco amostral", "aleatorio"] },
  { area: "matematica", slug: "mat-combinatoria", titulo: "Análise combinatória", descricao: "Contagem, arranjos, combinações e permutações.", ordem: 9,
    keywords: ["combinatoria", "arranjo", "permutacao", "combinacao", "quantas maneiras", "de quantos modos", "fatorial", "principio multiplicativo", "contagem"] },
  { area: "matematica", slug: "mat-progressoes", titulo: "Sequências e progressões", descricao: "PA, PG e padrões numéricos.", ordem: 10,
    keywords: ["progressao", "sequencia", "pa", "pg", "termo geral", "razao da progressao", "padrao numerico"] },
  { area: "matematica", slug: "mat-grandezas", titulo: "Grandezas, medidas e unidades", descricao: "Conversões, áreas/volumes aplicados e taxas.", ordem: 11,
    keywords: ["unidade de medida", "conversao", "metros", "quilometros", "gramas", "consumo", "vazao", "taxa de", "por hora", "kwh"] },
  { area: "matematica", slug: "mat-algebra", titulo: "Álgebra e equações", descricao: "Equações, sistemas e expressões.", ordem: 12,
    keywords: ["equacao", "sistema de equacoes", "incognita", "expressao algebrica", "raiz da equacao", "polinomio", "inequacao"] },
  { area: "matematica", slug: "mat-logica", titulo: "Raciocínio lógico", descricao: "Lógica, sequências lógicas e argumentação.", ordem: 13,
    keywords: ["logica", "raciocinio logico", "proposicao", "se e somente se", "verdadeiro ou falso", "sequencia logica", "conclusao logica"] },

  // ---------------- CIÊNCIAS DA NATUREZA ----------------
  { area: "natureza", slug: "nat-mecanica", titulo: "Física: Mecânica", descricao: "Cinemática, leis de Newton e energia mecânica.", ordem: 1,
    keywords: ["velocidade", "aceleracao", "forca", "leis de newton", "movimento", "energia cinetica", "energia potencial", "atrito", "queda livre", "massa"] },
  { area: "natureza", slug: "nat-eletricidade", titulo: "Física: Eletricidade e magnetismo", descricao: "Circuitos, corrente, tensão e campos.", ordem: 2,
    keywords: ["corrente eletrica", "tensao", "resistor", "circuito", "potencia eletrica", "campo magnetico", "carga eletrica", "voltagem", "ampere", "ohm"] },
  { area: "natureza", slug: "nat-ondas", titulo: "Física: Ondas, óptica e som", descricao: "Ondulatória, luz e acústica.", ordem: 3,
    keywords: ["onda", "frequencia", "comprimento de onda", "som", "luz", "espelho", "lente", "refracao", "reflexao", "acustica", "ondas sonoras"] },
  { area: "natureza", slug: "nat-termologia", titulo: "Física: Termologia e energia", descricao: "Calor, temperatura e termodinâmica.", ordem: 4,
    keywords: ["temperatura", "calor", "termodinamica", "dilatacao", "energia termica", "transmissao de calor", "graus celsius", "caloria"] },
  { area: "natureza", slug: "nat-organica", titulo: "Química orgânica", descricao: "Compostos do carbono, funções e reações.", ordem: 5,
    keywords: ["carbono", "hidrocarboneto", "funcao organica", "alcool", "acido carboxilico", "polimero", "cadeia carbonica", "organica", "ester", "etanol"] },
  { area: "natureza", slug: "nat-fisico-quimica", titulo: "Físico-química", descricao: "Soluções, termoquímica, cinética e equilíbrio.", ordem: 6,
    keywords: ["solucao", "concentracao", "mol", "ph", "acido", "base", "equilibrio quimico", "cinetica", "termoquimica", "entalpia", "molaridade"] },
  { area: "natureza", slug: "nat-quimica-geral", titulo: "Química geral e estequiometria", descricao: "Átomo, tabela periódica, ligações e cálculos.", ordem: 7,
    keywords: ["atomo", "tabela periodica", "ligacao quimica", "reacao quimica", "estequiometria", "massa molar", "elemento quimico", "ion", "balanceamento"] },
  { area: "natureza", slug: "nat-quimica-ambiental", titulo: "Química e meio ambiente", descricao: "Poluição, tratamento e química do cotidiano.", ordem: 8,
    keywords: ["poluicao", "gas carbonico", "efeito estufa", "tratamento de agua", "residuo", "combustivel", "emissao", "biocombustivel", "contaminacao"] },
  { area: "natureza", slug: "nat-ecologia", titulo: "Biologia: Ecologia", descricao: "Ecossistemas, cadeias e ciclos.", ordem: 9,
    keywords: ["ecossistema", "cadeia alimentar", "ecologia", "biodiversidade", "ciclo do", "habitat", "populacao biologica", "bioma", "sucessao ecologica", "teia alimentar"] },
  { area: "natureza", slug: "nat-genetica", titulo: "Biologia: Genética e evolução", descricao: "Hereditariedade, DNA e evolução.", ordem: 10,
    keywords: ["genetica", "dna", "gene", "cromossomo", "hereditariedade", "mutacao", "evolucao", "selecao natural", "alelo", "heredograma", "darwin"] },
  { area: "natureza", slug: "nat-fisiologia", titulo: "Biologia: Fisiologia e corpo humano", descricao: "Sistemas do corpo, saúde e doenças.", ordem: 11,
    keywords: ["sistema digestorio", "sistema nervoso", "hormonio", "doenca", "virus", "bacteria", "imunidade", "vacina", "fisiologia", "sangue", "orgao"] },
  { area: "natureza", slug: "nat-citologia", titulo: "Biologia: Citologia e bioquímica", descricao: "Célula, metabolismo e biomoléculas.", ordem: 12,
    keywords: ["celula", "membrana", "mitocondria", "fotossintese", "respiracao celular", "proteina", "enzima", "metabolismo", "organela", "nucleo"] },
];
