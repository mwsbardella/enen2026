import type { TopicSeed } from "./types";

// Matemática e Natureza entram em "manutenção" (peso menor para o aluno de
// Humanas). Resumos mais curtos, focados no essencial e nos erros comuns.

export const matematicaTopics: TopicSeed[] = [
  {
    subjectSlug: "matematica",
    slug: "porcentagem",
    titulo: "Porcentagem",
    descricao: "Cálculo de porcentagem, aumentos e descontos sucessivos.",
    ordem: 1,
    material: {
      titulo: "Porcentagem",
      resumoMarkdown: `## Porcentagem

Porcentagem é uma razão de denominador 100. \`x%\` = \`x/100\`. Ex.: 25% = 0,25.

**Operações básicas:**
- **Calcular % de um valor**: multiplique. 30% de 200 = 0,30 × 200 = 60.
- **Aumento de p%**: multiplique por **(1 + p/100)**. Aumentar 20% → ×1,20.
- **Desconto de p%**: multiplique por **(1 − p/100)**. Tirar 15% → ×0,85.

**Aumentos/descontos sucessivos** (erro clássico): **não some os percentuais**, multiplique os fatores. Um aumento de 10% seguido de outro de 10% dá ×1,1 × 1,1 = **1,21 → 21%** (não 20%). Um aumento de 20% seguido de desconto de 20%: 1,2 × 0,8 = 0,96 → **perda de 4%**.

**Variação percentual**: \`(valor final − valor inicial) / valor inicial × 100\`.

**Dica de prova**: a maioria das questões do ENEM é de **aplicação** (lucro, desconto, juros, impostos, crescimento). Transforme o problema em **fatores multiplicativos** e cuidado com o "sobre qual valor" o percentual incide.`,
      links: [
        { titulo: "Porcentagem — Brasil Escola", url: "https://brasilescola.uol.com.br/matematica/porcentagem.htm", fonte: "Brasil Escola" },
        { titulo: "Porcentagem — Khan Academy", url: "https://pt.khanacademy.org/math/pt-7-ano", fonte: "Khan Academy Brasil" },
      ],
    },
  },
  {
    subjectSlug: "matematica",
    slug: "razao-proporcao-regra-de-tres",
    titulo: "Razão, proporção e regra de três",
    descricao: "Grandezas direta e inversamente proporcionais; regra de três.",
    ordem: 2,
    material: {
      titulo: "Razão, proporção e regra de três",
      resumoMarkdown: `## Razão, proporção e regra de três

**Razão** é a divisão entre duas grandezas (a/b); **proporção** é a igualdade entre duas razões (a/b = c/d). Vale a **propriedade fundamental**: \`a·d = b·c\` (multiplicação cruzada).

**Regra de três simples:**
1. Monte a tabela com as grandezas.
2. Verifique se são **diretamente** proporcionais (uma cresce, a outra cresce) ou **inversamente** (uma cresce, a outra diminui — ex.: mais operários, menos tempo).
3. **Direta**: multiplique em cruz. **Inversa**: inverta uma das razões antes de multiplicar em cruz.

**Regra de três composta** (3+ grandezas): fixe a coluna da incógnita e analise cada grandeza separadamente como direta ou inversa em relação a ela; multiplique as razões.

**Aplicações cobradas**: velocidade média, escala de mapas, densidade, receitas (proporção de ingredientes), produtividade.

**Dica de prova**: o erro mais comum é tratar como direta o que é **inversa**. Pergunte sempre: "se essa grandeza aumenta, a que eu quero descobrir aumenta ou diminui?".`,
      links: [
        { titulo: "Regra de três — Brasil Escola", url: "https://brasilescola.uol.com.br/matematica/regra-tres-simples.htm", fonte: "Brasil Escola" },
        { titulo: "Proporções — Khan Academy", url: "https://pt.khanacademy.org/math/pt-7-ano", fonte: "Khan Academy Brasil" },
      ],
    },
  },
  {
    subjectSlug: "matematica",
    slug: "funcoes-afim-quadratica",
    titulo: "Funções: afim e quadrática",
    descricao: "Comportamento, gráficos e aplicações das funções de 1º e 2º grau.",
    ordem: 3,
    material: {
      titulo: "Funções afim e quadrática",
      resumoMarkdown: `## Funções afim e quadrática

**Função afim (1º grau)**: \`f(x) = ax + b\`.
- **a** = taxa de variação (inclinação): a>0 crescente, a<0 decrescente.
- **b** = valor inicial (onde corta o eixo y).
- Gráfico: **reta**. Raiz (onde f(x)=0): \`x = −b/a\`.
- Aplicações: custo fixo + variável, planos de tarifa, movimento uniforme.

**Função quadrática (2º grau)**: \`f(x) = ax² + bx + c\`.
- Gráfico: **parábola**. a>0 → concavidade para cima (tem **mínimo**); a<0 → para baixo (tem **máximo**).
- **Raízes** (Bhaskara): \`x = (−b ± √Δ)/2a\`, com \`Δ = b² − 4ac\`. Δ>0: duas raízes; Δ=0: uma; Δ<0: nenhuma real.
- **Vértice**: \`x_v = −b/2a\`, \`y_v = −Δ/4a\` — ponto de máximo ou mínimo (muito cobrado: maximizar lucro/área, minimizar custo).

**Dica de prova**: o ENEM adora pedir o **valor máximo/mínimo** (vértice) em contextos de lucro, altura de projétil ou área. Identifique o sinal de **a** para saber se procura máximo ou mínimo.`,
      links: [
        { titulo: "Função do 1º grau — Brasil Escola", url: "https://brasilescola.uol.com.br/matematica/funcao-1-o-grau.htm", fonte: "Brasil Escola" },
        { titulo: "Funções — Khan Academy", url: "https://pt.khanacademy.org/math/algebra", fonte: "Khan Academy Brasil" },
      ],
    },
  },
  {
    subjectSlug: "matematica",
    slug: "estatistica-basica",
    titulo: "Estatística básica",
    descricao: "Média, moda, mediana e leitura de gráficos e tabelas.",
    ordem: 4,
    material: {
      titulo: "Estatística básica",
      resumoMarkdown: `## Estatística básica

A estatística é um dos temas **mais frequentes** do ENEM, geralmente com **gráficos e tabelas**.

**Medidas de tendência central:**
- **Média aritmética**: soma dos valores ÷ quantidade. **Média ponderada**: cada valor tem um peso (some valor×peso e divida pela soma dos pesos).
- **Moda**: o valor que **mais se repete** (pode haver mais de uma ou nenhuma).
- **Mediana**: o valor **central** com os dados **ordenados**. Se a quantidade for par, é a média dos dois centrais.

**Quando usar cada uma**: a **mediana** é mais representativa quando há **valores extremos** (a média é "puxada" por outliers — ex.: salários).

**Leitura de gráficos**: barras (comparar categorias), linhas (evolução no tempo), setores/pizza (proporção do todo). Atenção às **escalas** e ao que cada eixo representa.

**Dica de prova**: leia o enunciado para saber **qual medida** é pedida. Cuidado com a mediana: é preciso **ordenar** os dados antes. Muitas questões só exigem **interpretar corretamente** o gráfico.`,
      links: [
        { titulo: "Média, moda e mediana — Brasil Escola", url: "https://brasilescola.uol.com.br/matematica/media-aritmetica.htm", fonte: "Brasil Escola" },
        { titulo: "Estatística — Khan Academy", url: "https://pt.khanacademy.org/math/statistics-probability", fonte: "Khan Academy Brasil" },
      ],
    },
  },
  {
    subjectSlug: "matematica",
    slug: "probabilidade",
    titulo: "Probabilidade",
    descricao: "Cálculo de probabilidade, eventos e análise combinatória básica.",
    ordem: 5,
    material: {
      titulo: "Probabilidade",
      resumoMarkdown: `## Probabilidade

**Probabilidade** = \`casos favoráveis / casos possíveis\`, um número entre 0 e 1 (ou 0% a 100%).

**Regras essenciais:**
- **Evento certo**: P = 1. **Impossível**: P = 0. **Complementar**: P(não A) = 1 − P(A).
- **"E" (eventos independentes)**: **multiplica** as probabilidades. Ex.: tirar cara duas vezes = 1/2 × 1/2 = 1/4.
- **"OU" (eventos mutuamente exclusivos)**: **soma** as probabilidades.

**Contagem (análise combinatória básica):**
- **Princípio multiplicativo**: se uma etapa tem m opções e outra n, há m×n combinações.
- **Permutação** (ordenar n elementos): n!. **Combinação** (escolher sem ordem): use quando a ordem não importa.

**Dica de prova**: identifique se os eventos são **"e" (multiplica)** ou **"ou" (soma)**, e se a **ordem importa**. Em muitos problemas, basta o **princípio multiplicativo** e a fração casos favoráveis/possíveis.`,
      links: [
        { titulo: "Probabilidade — Brasil Escola", url: "https://brasilescola.uol.com.br/matematica/probabilidade.htm", fonte: "Brasil Escola" },
        { titulo: "Probabilidade — Khan Academy", url: "https://pt.khanacademy.org/math/statistics-probability", fonte: "Khan Academy Brasil" },
      ],
    },
  },
  {
    subjectSlug: "matematica",
    slug: "geometria-areas-volumes",
    titulo: "Geometria: áreas e volumes",
    descricao: "Áreas de figuras planas e volumes dos principais sólidos.",
    ordem: 6,
    material: {
      titulo: "Geometria — áreas e volumes",
      resumoMarkdown: `## Geometria: áreas e volumes

**Áreas (figuras planas):**
- **Quadrado**: lado². **Retângulo**: base × altura.
- **Triângulo**: (base × altura)/2. **Trapézio**: ((B + b)/2) × altura.
- **Círculo**: π·r². **Comprimento da circunferência**: 2π·r.

**Volumes (sólidos):**
- **Prisma / paralelepípedo**: área da base × altura.
- **Cubo**: aresta³.
- **Cilindro**: π·r² × altura.
- **Pirâmide / cone**: (1/3) × área da base × altura.
- **Esfera**: (4/3)·π·r³.

**Unidades** (cuidado, cai muito): 1 m³ = 1000 L; 1 m² = 10 000 cm². Atenção à conversão pedida.

**Dica de prova**: o ENEM usa contextos reais (caixa d'água, embalagens, terrenos, pintura de paredes). Identifique a **figura/sólido**, aplique a fórmula e **confira as unidades**. Volume costuma envolver **capacidade em litros**.`,
      links: [
        { titulo: "Áreas de figuras planas — Brasil Escola", url: "https://brasilescola.uol.com.br/matematica/area-figuras-planas.htm", fonte: "Brasil Escola" },
        { titulo: "Geometria — Khan Academy", url: "https://pt.khanacademy.org/math/geometry-home", fonte: "Khan Academy Brasil" },
      ],
    },
  },
];

export const naturezaTopics: TopicSeed[] = [
  {
    subjectSlug: "natureza",
    slug: "ecologia-meio-ambiente",
    titulo: "Ecologia e meio ambiente",
    descricao: "Cadeias alimentares, ciclos, biomas e impactos ambientais.",
    ordem: 1,
    material: {
      titulo: "Ecologia e meio ambiente",
      resumoMarkdown: `## Ecologia e meio ambiente

A **ecologia** é a área de Natureza que **mais cai** no ENEM, por dialogar com sustentabilidade e atualidades.

**Conceitos-base:**
- **Cadeia/teia alimentar**: produtores (vegetais, fotossíntese) → consumidores (herbívoros, carnívoros) → decompositores. A energia **diminui** a cada nível trófico.
- **Níveis de organização**: indivíduo → população → comunidade → ecossistema → biosfera.
- **Relações ecológicas**: harmônicas (mutualismo, comensalismo) e desarmônicas (predação, competição, parasitismo).

**Ciclos biogeoquímicos**: água, **carbono** (ligado ao efeito estufa) e nitrogênio.

**Problemas ambientais (muito cobrados):**
- **Efeito estufa intensificado** e **aquecimento global** (queima de combustíveis fósseis, CO₂ e metano).
- **Desmatamento** e perda de biodiversidade; **eutrofização** (excesso de nutrientes na água); **chuva ácida**; **ilhas de calor**.
- **Biomas brasileiros**: Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa, Pantanal — saiba ameaças de cada um.

**Sustentabilidade**: energias renováveis, reciclagem, consumo consciente, **desenvolvimento sustentável** (atender o presente sem comprometer o futuro).

**Dica de prova**: relacione causa → consequência ambiental e valorize soluções **sustentáveis**. Temas de ecologia conectam Natureza, Humanas e redação.`,
      links: [
        { titulo: "Ecologia — Brasil Escola", url: "https://brasilescola.uol.com.br/biologia/ecologia.htm", fonte: "Brasil Escola" },
        { titulo: "Ciclos biogeoquímicos — Khan Academy", url: "https://pt.khanacademy.org/science/biology", fonte: "Khan Academy Brasil" },
      ],
    },
  },
  {
    subjectSlug: "natureza",
    slug: "celula-genetica",
    titulo: "Célula e genética",
    descricao: "Estrutura celular, DNA e princípios da hereditariedade.",
    ordem: 2,
    material: {
      titulo: "Célula e genética",
      resumoMarkdown: `## Célula e genética

**Célula:**
- **Procarionte** (sem núcleo definido — bactérias) x **eucarionte** (com núcleo — animais, vegetais, fungos).
- Organelas-chave: **mitocôndria** (respiração celular, energia/ATP), **cloroplasto** (fotossíntese, só vegetais), **ribossomos** (síntese de proteínas), **núcleo** (DNA).

**Genética:**
- **DNA** guarda a informação genética; **genes** são trechos que codificam características. **DNA → RNA → proteína** (dogma central).
- **Leis de Mendel**: a 1ª (segregação) explica que cada característica é determinada por um par de **alelos**, separados na formação dos gametas.
- **Conceitos**: genótipo (constituição genética) x fenótipo (característica expressa); **dominante** (AA, Aa) x **recessivo** (aa); heredograma.
- **Probabilidade em cruzamentos**: use o quadro de Punnett. Cruzamento Aa × Aa → 25% AA, 50% Aa, 25% aa (3:1 fenotípico).

**Temas atuais**: biotecnologia, transgênicos, clonagem, células-tronco, exames de DNA.

**Dica de prova**: questões de genética costumam pedir **probabilidade** de um filho ter certa característica. Monte o **quadro de Punnett** e calcule as proporções.`,
      links: [
        { titulo: "Leis de Mendel — Brasil Escola", url: "https://brasilescola.uol.com.br/biologia/genetica.htm", fonte: "Brasil Escola" },
        { titulo: "Genética — Khan Academy", url: "https://pt.khanacademy.org/science/biology", fonte: "Khan Academy Brasil" },
      ],
    },
  },
  {
    subjectSlug: "natureza",
    slug: "leis-de-newton",
    titulo: "Leis de Newton",
    descricao: "Inércia, força resultante e ação-reação na mecânica.",
    ordem: 3,
    material: {
      titulo: "Leis de Newton",
      resumoMarkdown: `## Leis de Newton (dinâmica)

As três leis explicam a relação entre **força** e **movimento**.

- **1ª Lei (Inércia)**: um corpo mantém seu estado (repouso ou movimento retilíneo uniforme) **se a força resultante for nula**. Explica o uso do cinto de segurança e por que "somos jogados para frente" numa freada.
- **2ª Lei (Princípio Fundamental)**: \`F = m·a\`. A força resultante é igual à massa vezes a aceleração. Quanto maior a massa, **maior a força** necessária para a mesma aceleração.
- **3ª Lei (Ação e Reação)**: a toda ação corresponde uma reação de **mesma intensidade, mesma direção e sentido oposto**, em **corpos diferentes**. Explica o foguete, o nadador que empurra a água, o recuo da arma.

**Forças comuns**: peso (P = m·g), normal, atrito, tração. **Cuidado**: ação e reação atuam em **corpos diferentes**, por isso não se anulam.

**Dica de prova**: identifique a **força resultante**. Se for nula → inércia (1ª lei). Se houver aceleração → use F = m·a (2ª lei). Pares ação-reação estão sempre em **corpos distintos**.`,
      links: [
        { titulo: "Leis de Newton — Brasil Escola", url: "https://brasilescola.uol.com.br/fisica/as-leis-newton.htm", fonte: "Brasil Escola" },
        { titulo: "Forças e leis de Newton — Khan Academy", url: "https://pt.khanacademy.org/science/physics", fonte: "Khan Academy Brasil" },
      ],
    },
  },
  {
    subjectSlug: "natureza",
    slug: "quimica-basica",
    titulo: "Química básica",
    descricao: "Substâncias, reações, ácidos e bases (pH).",
    ordem: 4,
    material: {
      titulo: "Química básica (substâncias, pH)",
      resumoMarkdown: `## Química básica

**Matéria e substâncias:**
- **Substância pura** (um só tipo de molécula) x **mistura** (homogênea ou heterogênea).
- **Elemento, átomo, molécula**; a **tabela periódica** organiza os elementos por número atômico e propriedades.
- **Ligações**: iônica (metal + ametal, transferência de elétrons — ex.: NaCl), covalente (compartilhamento — ex.: H₂O), metálica.

**Reações químicas**: rearranjo de átomos; saiba **balancear** (conservação da massa — Lavoisier) e reconhecer tipos (síntese, decomposição, combustão).

**Ácidos, bases e pH:**
- **Escala de pH** vai de 0 a 14. **pH < 7**: ácido; **pH = 7**: neutro; **pH > 7**: básico/alcalino.
- Ácidos (liberam H⁺) e bases (liberam OH⁻); **neutralização**: ácido + base → sal + água.
- Aplicações: chuva ácida, acidez de alimentos, solo, produtos de limpeza.

**Química e ambiente**: combustíveis, poluição, gases do efeito estufa, química verde.

**Dica de prova**: o ENEM contextualiza a química no **cotidiano e no ambiente**. Domine **pH** (ácido/base), **balanceamento** e a leitura da tabela periódica.`,
      links: [
        { titulo: "Ácidos e bases / pH — Brasil Escola", url: "https://brasilescola.uol.com.br/quimica/escala-ph.htm", fonte: "Brasil Escola" },
        { titulo: "Química — Khan Academy", url: "https://pt.khanacademy.org/science/chemistry", fonte: "Khan Academy Brasil" },
      ],
    },
  },
  {
    subjectSlug: "natureza",
    slug: "energia-sustentabilidade",
    titulo: "Energia e sustentabilidade",
    descricao: "Fontes de energia, matriz energética e transformações de energia.",
    ordem: 5,
    material: {
      titulo: "Energia e sustentabilidade",
      resumoMarkdown: `## Energia e sustentabilidade

**Formas de energia**: cinética (movimento), potencial (armazenada), térmica, elétrica, química. A **conservação da energia** diz que ela não se cria nem se destrói, apenas se **transforma**.

**Fontes de energia:**
- **Renováveis** (se repõem): hidrelétrica, **solar**, **eólica**, biomassa, geotérmica. Menor impacto de CO₂.
- **Não renováveis** (esgotáveis): petróleo, carvão, gás natural (fósseis) e nuclear. Os fósseis emitem gases de efeito estufa.

**Matriz energética brasileira**: bastante **renovável** (forte presença de hidrelétricas), o que a diferencia da média mundial — mas com impactos socioambientais (alagamento de áreas, deslocamento de populações).

**Eficiência e sustentabilidade**: reduzir desperdício, usar fontes limpas, **transição energética**. Relaciona-se ao **desenvolvimento sustentável** e às metas climáticas (Acordo de Paris).

**Dica de prova**: questões cobram **transformações de energia** (ex.: usina converte energia potencial da água em elétrica) e a comparação entre **fontes limpas x poluentes**. Conecte com ecologia e atualidades climáticas.`,
      links: [
        { titulo: "Fontes de energia — Brasil Escola", url: "https://brasilescola.uol.com.br/geografia/fontes-energia.htm", fonte: "Brasil Escola" },
        { titulo: "Energia — Khan Academy", url: "https://pt.khanacademy.org/science/physics", fonte: "Khan Academy Brasil" },
      ],
    },
  },
];
