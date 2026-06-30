// Conteúdo de estudo de MATEMÁTICA, gerado a partir da engenharia reversa das
// provas (2019–2025). Assuntos da taxonomia, ORDENADOS pela frequência real.
// A Matemática do ENEM é contextualizada: quase toda questão parte de uma
// situação real (consumo, finanças, mapas, gráficos) e cobra interpretação +
// uma ferramenta matemática. Os resumos focam nessa ferramenta e na "leitura"
// do enunciado.

import type { MaterialSeed } from "./humanas";

const L = (titulo: string, url: string, fonte: string) => ({ titulo, url, fonte });

export const matematicaMateriais: MaterialSeed[] = [
  {
    topicSlug: "mat-geometria-plana",
    titulo: "Geometria plana",
    resumoMarkdown: `## Geometria plana

Um dos assuntos que **mais caem**. Quase sempre aplicada: plantas, terrenos, embalagens, mapas.

**Ferramentas essenciais:**
- **Áreas**: retângulo (b·h), triângulo (b·h/2), trapézio, círculo (π·r²), e a **decomposição** de figuras compostas em formas simples.
- **Perímetro** e comprimento da circunferência (2π·r).
- **Teorema de Pitágoras** e relações métricas no triângulo retângulo.
- **Semelhança de triângulos** e proporcionalidade (sombras, escalas, mapas).
- **Teorema de Tales** (feixe de retas paralelas).

**Leitura ENEM:** o enunciado descreve uma situação (um jardim, um piso, uma logomarca) e pede uma área, um comprimento ou uma razão. O truque costuma ser **decompor a figura** ou perceber uma **semelhança/escala**. Atenção redobrada com **unidades** (m, cm, m²) e com a escala de mapas/plantas — fonte clássica de erro.`,
    links: [
      L("Áreas de figuras planas — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/area-figuras-planas.htm", "Mundo Educação"),
      L("Semelhança de triângulos — Brasil Escola", "https://brasilescola.uol.com.br/matematica/semelhanca-triangulos.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-geometria-espacial",
    titulo: "Geometria espacial",
    resumoMarkdown: `## Geometria espacial

Tão frequente quanto a plana, e geralmente ligada a **volume e capacidade** de embalagens, reservatórios e peças.

**Ferramentas essenciais:**
- **Volumes**: prisma/bloco (Área da base × altura), cilindro (π·r²·h), cone (⅓ da base × altura), pirâmide (⅓·Ab·h), esfera (4/3·π·r³).
- **Relação volume ↔ capacidade**: **1 dm³ = 1 litro** (conversão campeã de pegadinha).
- **Área de superfície** (quanto de material para revestir/embrulhar).
- Comparar volumes, calcular quanto cabe, quanto sobra, quanto transborda.

**Leitura ENEM:** "uma caixa-d'água cilíndrica…", "uma embalagem em forma de…". A questão mistura **volume** com **proporção** (encher x% , dobrar uma dimensão) ou com **densidade/vazão**. Domine a conversão de unidades de volume e capacidade — é onde a maioria erra.`,
    links: [
      L("Volume dos sólidos geométricos — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/volume.htm", "Mundo Educação"),
      L("Geometria espacial — Brasil Escola", "https://brasilescola.uol.com.br/matematica/geometria-espacial.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-estatistica",
    titulo: "Estatística",
    resumoMarkdown: `## Estatística

Altíssima incidência — o ENEM é cheio de **gráficos e tabelas** para ler e interpretar.

**Ferramentas essenciais:**
- **Médias**: aritmética simples e **ponderada** (notas com pesos, médias de produção). A ponderada é a que mais cai.
- **Mediana** (valor central de dados ordenados) e **moda** (mais frequente). Saber *quando* cada uma representa melhor os dados.
- **Leitura de gráficos**: barras, colunas, linhas, setores (pizza) e histogramas.
- Noções de **dispersão** (amplitude, desvio) e de amostragem.

**Leitura ENEM:** quase sempre um gráfico/tabela com um pedido direto (calcule a média, a mediana; qual categoria…). As pegadinhas: confundir **média com mediana**, ler o eixo errado, ou ignorar os **pesos**. Leia o título e os eixos do gráfico antes de calcular.`,
    links: [
      L("Média, moda e mediana — Brasil Escola", "https://brasilescola.uol.com.br/matematica/media-aritmetica-simples-ponderada.htm", "Brasil Escola"),
      L("Estatística e gráficos — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/estatistica.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-razao-proporcao",
    titulo: "Razão, proporção e regra de três",
    resumoMarkdown: `## Razão, proporção e regra de três

A "ferramenta coringa" do ENEM — aparece sozinha e dentro de muitos outros temas.

**Ferramentas essenciais:**
- **Razão** e **proporção** (igualdade de razões), propriedade fundamental (produto dos meios = produto dos extremos).
- **Regra de três simples** (direta e inversa): a maior parte das contas do ENEM cai aqui.
- **Regra de três composta** (mais de duas grandezas: máquinas × dias × produção).
- **Escala** (mapas, plantas), **velocidade média**, **densidade** — todas são razões.

**Leitura ENEM:** identifique as **grandezas** e se elas são **diretamente** (uma cresce, a outra cresce) ou **inversamente** proporcionais (uma cresce, a outra diminui — ex.: mais operários, menos tempo). Errar a relação direta/inversa é o deslize mais comum.`,
    links: [
      L("Regra de três simples e composta — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/regra-tres-composta.htm", "Mundo Educação"),
      L("Razão e proporção — Brasil Escola", "https://brasilescola.uol.com.br/matematica/razao-proporcao.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-porcentagem",
    titulo: "Porcentagem e matemática financeira",
    resumoMarkdown: `## Porcentagem e matemática financeira

Onipresente, porque modela **dinheiro, descontos e variações** do cotidiano.

**Ferramentas essenciais:**
- **Porcentagem** como fração/decimal (25% = 0,25) e cálculo de "x% de um valor".
- **Aumentos e descontos sucessivos** via **fator de multiplicação** (aumento de 20% → ×1,2; desconto de 30% → ×0,7). Descontos/aumentos sucessivos **não se somam** — multiplicam-se.
- **Variação percentual** (de quanto aumentou/caiu).
- **Juros simples** (J = C·i·t) e noção de **juros compostos** (montante cresce sobre o montante).

**Leitura ENEM:** "após um aumento de … e depois um desconto de …". A pegadinha é somar percentuais quando deveria **multiplicar fatores**, ou aplicar a porcentagem sobre o valor errado (base). Trabalhe com fatores de multiplicação para não errar.`,
    links: [
      L("Porcentagem — Brasil Escola", "https://brasilescola.uol.com.br/matematica/porcentagem.htm", "Brasil Escola"),
      L("Matemática financeira: juros — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/juros-simples.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-probabilidade",
    titulo: "Probabilidade",
    resumoMarkdown: `## Probabilidade

Tema certo na prova. Geralmente cai em nível acessível, ligado a contagem.

**Ferramentas essenciais:**
- **Probabilidade** = casos favoráveis ÷ casos possíveis (espaço amostral).
- **Eventos sucessivos** (E "e" → multiplica; E "ou" → soma), com e sem reposição.
- **Probabilidade condicional** (dado que algo ocorreu) em nível introdutório.
- Conexão com **porcentagem** (probabilidade expressa em %) e com **tabelas/dados**.

**Leitura ENEM:** "ao acaso", "sorteio", "qual a chance de…". O passo decisivo é **contar corretamente** o espaço amostral e os casos favoráveis — por isso anda junto com Análise Combinatória. Cuidado com "com reposição" × "sem reposição", que muda o denominador.`,
    links: [
      L("Probabilidade — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/probabilidade.htm", "Mundo Educação"),
      L("Probabilidade no ENEM — Brasil Escola", "https://brasilescola.uol.com.br/matematica/probabilidade.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-grandezas",
    titulo: "Grandezas, medidas e unidades",
    resumoMarkdown: `## Grandezas, medidas e unidades

Menos um "conteúdo" e mais uma **habilidade transversal**: converter e relacionar unidades aparece em quase toda a prova.

**Ferramentas essenciais:**
- **Conversões**: comprimento (km↔m↔cm), área (m²↔cm²), volume (m³↔dm³↔L), massa (kg↔g), tempo (h↔min↔s).
- **Taxas e grandezas derivadas**: velocidade (km/h), vazão (L/s), consumo (km/L), densidade (kg/m³), **kWh** (energia).
- Leitura de **medidas em contexto** (conta de luz, receita, dosagem, mapas).

**Leitura ENEM:** muitas questões "fáceis" só exigem **converter unidades** com cuidado e aplicar uma razão. O erro clássico é misturar unidades (somar metros com centímetros, ou esquecer que área converte ao quadrado e volume ao cubo).`,
    links: [
      L("Unidades de medida — Brasil Escola", "https://brasilescola.uol.com.br/matematica/unidades-medida.htm", "Brasil Escola"),
      L("Conversão de unidades — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/transformacao-unidades.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-funcoes",
    titulo: "Funções",
    resumoMarkdown: `## Funções

Modela relações de dependência entre grandezas (custo × quantidade, posição × tempo).

**Ferramentas essenciais:**
- **Função afim (1º grau)**: y = ax + b; reta; **coeficiente angular** como taxa de variação; raiz.
- **Função quadrática (2º grau)**: y = ax² + bx + c; parábola; **vértice** (máximo/mínimo — muito cobrado: lucro máximo, altura máxima); raízes.
- **Função exponencial**: crescimento/decaimento (juros, população, meia-vida).
- Leitura e interpretação de **gráficos** de funções.

**Leitura ENEM:** identifique o **tipo de função** pela situação (taxa constante → afim; ponto de máximo/mínimo → quadrática; multiplicação por fator fixo → exponencial). Questões de vértice (otimização) e de interpretação de gráfico são as mais comuns.`,
    links: [
      L("Função do 1º e 2º grau — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/funcao.htm", "Mundo Educação"),
      L("Função exponencial — Brasil Escola", "https://brasilescola.uol.com.br/matematica/funcao-exponencial.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-progressoes",
    titulo: "Sequências e progressões",
    resumoMarkdown: `## Sequências e progressões

Padrões numéricos: reconhecer a regra e projetar termos/somas.

**Ferramentas essenciais:**
- **PA (progressão aritmética)**: razão somada; termo geral aₙ = a₁ + (n−1)·r; soma dos termos.
- **PG (progressão geométrica)**: razão multiplicada; termo geral aₙ = a₁·q^(n−1); soma.
- Reconhecer **padrões** em situações (empilhamentos, parcelas, crescimento).

**Leitura ENEM:** descubra se a sequência **soma** sempre o mesmo valor (PA) ou **multiplica** por um fator fixo (PG). Costuma pedir um termo distante ou a soma — aplique o termo geral em vez de listar tudo.`,
    links: [
      L("Progressão aritmética (PA) — Brasil Escola", "https://brasilescola.uol.com.br/matematica/progressao-aritmetica.htm", "Brasil Escola"),
      L("Progressão geométrica (PG) — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/progressao-geometrica.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-geometria-analitica",
    titulo: "Geometria analítica",
    resumoMarkdown: `## Geometria analítica

Geometria no **plano cartesiano** — pontos, retas e distâncias por meio de coordenadas.

**Ferramentas essenciais:**
- **Distância entre dois pontos** e **ponto médio** de um segmento.
- **Equação da reta** e coeficiente angular; retas paralelas e perpendiculares.
- Localização e leitura de **coordenadas** (mapas em malha, GPS, telas).

**Leitura ENEM:** aparece menos que as geometrias plana/espacial e costuma vir aplicada a **mapas, malhas ou deslocamentos**. Saber distância entre pontos e interpretar coordenadas resolve a maioria.`,
    links: [
      L("Geometria analítica: distância entre pontos — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/distancia-entre-dois-pontos.htm", "Mundo Educação"),
      L("Equação da reta — Brasil Escola", "https://brasilescola.uol.com.br/matematica/equacao-reta.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-algebra",
    titulo: "Álgebra e equações",
    resumoMarkdown: `## Álgebra e equações

A "linguagem" para traduzir problemas em contas — base para funções e muitos outros temas.

**Ferramentas essenciais:**
- **Equações do 1º grau** e **sistemas** (duas incógnitas) para modelar situações (preços, quantidades, misturas).
- **Equação do 2º grau** (Bhaskara, soma e produto das raízes).
- Montar a equação a partir do enunciado (a etapa mais importante).

**Leitura ENEM:** o desafio raramente é a conta — é **traduzir o texto** em equação/sistema (o que é a incógnita? que relações o enunciado dá?). Defina bem as variáveis antes de resolver.`,
    links: [
      L("Sistemas de equações — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/sistema-equacoes-1-grau.htm", "Mundo Educação"),
      L("Equação do 2º grau — Brasil Escola", "https://brasilescola.uol.com.br/matematica/equacao-segundo-grau.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-combinatoria",
    titulo: "Análise combinatória",
    resumoMarkdown: `## Análise combinatória

Contagem de possibilidades — sustenta a Probabilidade.

**Ferramentas essenciais:**
- **Princípio fundamental da contagem** (multiplicativo): a ferramenta que resolve a maioria das questões do ENEM.
- **Permutação** (ordenar todos), **arranjo** (ordem importa) e **combinação** (ordem não importa) — saber **distinguir** os três.
- Fatorial e os casos com restrição.

**Leitura ENEM:** "de quantas maneiras…", "quantos códigos/senhas/grupos…". A decisão-chave: **a ordem importa?** (senha → sim, arranjo/PFC; comissão → não, combinação). Na dúvida, o **princípio multiplicativo** costuma dar conta.`,
    links: [
      L("Princípio fundamental da contagem — Brasil Escola", "https://brasilescola.uol.com.br/matematica/principio-fundamental-contagem.htm", "Brasil Escola"),
      L("Arranjo, permutação e combinação — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/analise-combinatoria.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-logica",
    titulo: "Raciocínio lógico",
    resumoMarkdown: `## Raciocínio lógico

Menos frequente como "tema puro", mas a lógica permeia muitas questões de interpretação e contagem.

**Ferramentas essenciais:**
- **Sequências e padrões lógicos** (descobrir a regra).
- **Proposições**: verdadeiro/falso, negação, condicional ("se… então"), conectivos.
- **Análise de afirmações** e eliminação de possibilidades (problemas de "quem é quem").

**Leitura ENEM:** costuma cair embutido — uma tabela de condições, um quebra-cabeça de informações, um padrão a completar. A estratégia é **organizar as informações** (tabela/diagrama) e testar possibilidades de forma sistemática.`,
    links: [
      L("Raciocínio lógico — Brasil Escola", "https://brasilescola.uol.com.br/matematica/raciocinio-logico.htm", "Brasil Escola"),
      L("Lógica proposicional — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/logica.htm", "Mundo Educação"),
    ],
  },
];
