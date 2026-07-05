// Conteúdo de estudo de MATEMÁTICA, gerado a partir da engenharia reversa das
// provas (2019–2025). Assuntos da taxonomia, ORDENADOS pela frequência real.
//
// Tom DIDÁTICO e do zero: o material assume que o aluno estudou isso há muito
// tempo (ou nunca viu direito). Cada assunto traz as FÓRMULAS explicadas termo
// a termo, um EXEMPLO RESOLVIDO passo a passo e as pegadinhas típicas do ENEM.
// Fórmulas em texto simples (sem LaTeX): · = multiplicar, / = dividir,
// ² = ao quadrado, √ = raiz quadrada.

import type { MaterialSeed } from "./humanas";

const L = (titulo: string, url: string, fonte: string) => ({ titulo, url, fonte });

export const matematicaMateriais: MaterialSeed[] = [
  {
    topicSlug: "mat-geometria-plana",
    titulo: "Geometria plana",
    resumoMarkdown: `## Geometria plana

Geometria plana é a matemática das figuras "chatas", desenhadas numa folha: quadrados, triângulos, círculos. No ENEM ela vem disfarçada de situação real — um terreno, um piso, uma logomarca, um jardim — e quase sempre pede **quanto mede** (o contorno) ou **quanto ocupa** (a superfície).

Duas ideias resolvem quase tudo:

- **Perímetro** = o contorno da figura, a soma de todos os lados. Pense na cerca em volta de um terreno. Mede-se em unidades simples (m, cm).
- **Área** = a superfície de dentro, quanto de "chão" a figura cobre. Pense no piso que preenche a sala. Mede-se em unidades **ao quadrado** (m², cm²).

### Reconheça as formas (e seus nomes)

Muitas questões **nomeiam a figura por escrito** em vez de mostrá-la ("um jardim em forma de **losango**", "um **setor circular**"). Saber o nome já é meio caminho:

![Figuras planas e seus nomes](/formas/planas.svg)

- **Quadrado**: 4 lados iguais e 4 ângulos retos (90°).
- **Retângulo**: 4 ângulos retos, lados opostos iguais.
- **Paralelogramo**: lados opostos paralelos (um retângulo "inclinado").
- **Losango**: 4 lados iguais, mas "torto" (como um diamante de baralho).
- **Trapézio**: só **um** par de lados paralelos (as duas "bases").
- **Triângulo**, **Círculo** e **Hexágono regular** (6 lados iguais).

### As fórmulas de área (as que mais caem)

| Figura | Área | O que é cada letra |
|---|---|---|
| Retângulo | \`A = b · h\` | b = base, h = altura |
| Quadrado | \`A = L²\` | L = lado (L² = L·L) |
| Triângulo | \`A = (b · h) / 2\` | b = base, h = altura até essa base |
| Círculo | \`A = π · r²\` | r = raio, π ≈ 3,14 |
| Trapézio | \`A = (B + b) · h / 2\` | B = base maior, b = base menor |

> O **raio** (r) é a distância do centro do círculo até a borda. O **diâmetro** é o dobro do raio (atravessa o círculo inteiro): d = 2·r.

**Comprimento da circunferência** (o "perímetro" do círculo): \`C = 2 · π · r\`.

### Ferramentas de proporção dentro da geometria

- **Teorema de Pitágoras** — só no triângulo **retângulo** (aquele com um ângulo de 90°). O lado maior, oposto ao ângulo reto, é a **hipotenusa** (a); os outros dois são os **catetos** (b e c):

> \`a² = b² + c²\`

- **Semelhança de triângulos** — dois triângulos com a mesma "forma" mas tamanhos diferentes têm lados proporcionais. É o que explica sombras, escalas e mapas: se um dobra, o outro dobra na mesma razão.

### Exemplo resolvido

*Um terreno retangular tem 20 m de frente por 15 m de fundo. Qual a área e quanto de cerca é preciso para contorná-lo?*

1. **Área** (superfície): A = b · h = 20 · 15 = **300 m²**.
2. **Perímetro** (cerca): soma dos 4 lados = 20 + 15 + 20 + 15 = **70 m**.

Repare que área e perímetro respondem coisas diferentes — leia com atenção o que a questão pede.

### Como cai no ENEM (e as pegadinhas)
- **Figuras compostas:** um formato estranho (um "L", uma sala com recorte). O truque é **decompor** em retângulos/triângulos, calcular cada área e somar (ou subtrair um pedaço vazado).
- **Unidades:** 1 m = 100 cm, mas 1 m² = 10.000 cm² (converte-se ao **quadrado**). Errar isso é o deslize nº 1.
- **Escala de mapa/planta:** "escala 1:100" quer dizer que 1 cm no papel vale 100 cm reais. É uma regra de três.`,
    links: [
      L("Áreas de figuras planas — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/area-figuras-planas.htm", "Mundo Educação"),
      L("Semelhança de triângulos — Brasil Escola", "https://brasilescola.uol.com.br/matematica/semelhanca-triangulos.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-geometria-espacial",
    titulo: "Geometria espacial",
    resumoMarkdown: `## Geometria espacial

Agora as figuras têm **volume**: são objetos de verdade, com altura, largura e profundidade — uma caixa, uma lata, um tanque de água. O ENEM quase sempre pergunta **quanto cabe dentro** (volume/capacidade) ou **quanto de material reveste por fora** (área da superfície).

- **Volume** = o espaço ocupado por dentro. Mede-se em unidades **ao cubo** (m³, cm³).
- **Capacidade** = quanto de líquido cabe. Mede-se em litros (L, mL).

### Reconheça os sólidos (e seus nomes)

O ENEM quase sempre **descreve o sólido por escrito**: "um tanque em forma de **paralelepípedo reto retângulo**", "um reservatório **cilíndrico**". Decore os nomes e os sinônimos:

![Sólidos geométricos e seus nomes](/formas/espaciais.svg)

- **Paralelepípedo reto retângulo** = **bloco retangular** = **caixa**: 6 faces retangulares, todos os ângulos retos. É o sólido mais comum das questões (caixa-d'água, tanque, embalagem).
- **Cubo**: um paralelepípedo de faces **quadradas** (um dado).
- **Prisma**: dois polígonos iguais nas pontas, ligados por retângulos.
- **Cilindro**: um "prisma" de base **circular** (uma lata).
- **Pirâmide**: base poligonal que sobe até um **vértice** (uma ponta).
- **Cone**: uma "pirâmide" de base **circular** (casquinha de sorvete).
- **Tronco**: a forma que sobra quando se **corta a ponta** de um cone ou pirâmide.
- **Esfera**: uma bola.

### Entendendo o "dm" (decímetro) — não é erro!

Várias questões usam **dm** e **dm³**, e isso costuma assustar. Fique tranquilo: **dm = decímetro**, uma unidade de comprimento **correta**, que vale **10 cm** (ou 0,1 m). Não é "cm" escrito errado.

A escada das unidades de comprimento (cada degrau é ×10):

> **km** → **hm** → **dam** → **m** → **dm** → **cm** → **mm**

Ou seja: 1 m = 10 dm = 100 cm. E o mais importante para volume:

> \`1 dm³ = 1 litro\`  ·  \`1 m³ = 1000 litros\`  ·  \`1 cm³ = 1 mL\`

**Como resolver com dm, na prática:** trabalhe direto em dm quando o volume vier em litros — assim os números já saem em litros. Exemplo (ENEM 2025): uma caixa com base 2,5 dm × 1,5 dm e água até 2 dm de altura tem volume = 2,5 · 1,5 · 2 = **7,5 dm³ = 7,5 litros**. Não precisa converter para cm; o dm³ **já é** litro. (Essa questão da caixa de descarga está resolvida passo a passo na lista de questões deste assunto.)

### As fórmulas de volume

| Sólido | Volume | Em palavras |
|---|---|---|
| Bloco/caixa (paralelepípedo) | \`V = c · l · h\` | comprimento · largura · altura |
| Cubo | \`V = L³\` | lado ao cubo (L·L·L) |
| Prisma qualquer | \`V = A_base · h\` | área da base · altura |
| Cilindro (lata) | \`V = π · r² · h\` | área do círculo · altura |
| Cone | \`V = (π · r² · h) / 3\` | um terço do cilindro |
| Pirâmide | \`V = (A_base · h) / 3\` | um terço do prisma |
| Esfera (bola) | \`V = (4 · π · r³) / 3\` | r = raio da bola |

> Repare no padrão: cone e pirâmide são **1/3** do cilindro/prisma de mesma base e altura. Isso ajuda a memorizar.

### Exemplo resolvido

*Uma caixa-d'água cilíndrica tem raio de 1 m e altura de 2 m. Quantos litros ela comporta? (Use π ≈ 3,14.)*

1. Volume do cilindro: V = π · r² · h = 3,14 · (1)² · 2 = 3,14 · 1 · 2 = **6,28 m³**.
2. Converter para litros: 1 m³ = 1000 L, então 6,28 · 1000 = **6.280 litros**.

### Como cai no ENEM (e as pegadinhas)
- **Volume + proporção:** "encheu 3/4 do tanque", "dobrou o raio". Cuidado: se o **raio dobra**, o volume do cilindro fica **4 vezes** maior (porque entra ao quadrado: r²).
- **Quanto transborda / quanto falta:** calcule o volume do recipiente e compare com o que foi despejado.
- **Unidade errada:** confundir m³ com litros, ou não perceber que volume converte ao **cubo** (1 m³ = 1.000.000 cm³).`,
    links: [
      L("Volume dos sólidos geométricos — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/volume.htm", "Mundo Educação"),
      L("Geometria espacial — Brasil Escola", "https://brasilescola.uol.com.br/matematica/geometria-espacial.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-estatistica",
    titulo: "Estatística",
    resumoMarkdown: `## Estatística

Estatística é ler e resumir dados — e o ENEM é recheado de **gráficos e tabelas**. Boa parte das questões nem exige conta difícil: exige ler o gráfico com calma e escolher a medida certa.

### As três "médias" (medidas de tendência central)

São três formas de dizer "qual é o valor típico" de um conjunto de números:

| Medida | Como se calcula | Quando usar |
|---|---|---|
| **Média** aritmética | soma dos valores ÷ quantidade de valores | o valor "equilibrado" do conjunto |
| **Mediana** | ordene os valores e pegue o do **meio** | quando há valores muito fora da curva |
| **Moda** | o valor que **mais se repete** | o mais comum/frequente |

> **Média ponderada** (a que mais cai): quando cada valor tem um **peso** diferente.
> \`Média = (v1·p1 + v2·p2 + ...) / (p1 + p2 + ...)\`
> Ex.: notas com pesos diferentes, médias de produção.

### Exemplo resolvido (média ponderada)

*Um aluno tirou 6,0 numa prova de peso 2 e 8,0 noutra de peso 3. Qual a média?*

1. Multiplique nota × peso: (6 · 2) + (8 · 3) = 12 + 24 = 36.
2. Some os pesos: 2 + 3 = 5.
3. Divida: 36 ÷ 5 = **7,2**.

(Repare: a média **simples** seria (6+8)/2 = 7,0. O peso puxou para cima porque a nota 8 valia mais.)

### Exemplo resolvido (mediana)

*Salários (em mil R$): 2, 2, 3, 4, 30. Qual representa melhor o grupo, média ou mediana?*

- Média = (2+2+3+4+30)/5 = 41/5 = 8,2 mil — mas quase ninguém ganha isso! O valor 30 (um "fora da curva") distorceu.
- Mediana = valor do meio dos dados **ordenados** = **3 mil**. Representa melhor a maioria.

### Como cai no ENEM (e as pegadinhas)
- **Confundir média com mediana** — a pegadinha mais comum. Quando há um valor gigante ou minúsculo destoando, a **mediana** representa melhor.
- **Ignorar os pesos** e fazer média simples onde era ponderada.
- **Ler o eixo errado** do gráfico. Antes de calcular, leia o **título** e o que cada eixo mede.`,
    links: [
      L("Média, moda e mediana — Brasil Escola", "https://brasilescola.uol.com.br/matematica/media-aritmetica-simples-ponderada.htm", "Brasil Escola"),
      L("Estatística e gráficos — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/estatistica.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-razao-proporcao",
    titulo: "Razão, proporção e regra de três",
    resumoMarkdown: `## Razão, proporção e regra de três

Esta é a **ferramenta coringa** do ENEM: aparece sozinha e escondida dentro de dezenas de outras questões (escala, velocidade, receita, porcentagem). Se você dominar regra de três, resolve boa parte da prova.

### Os conceitos, do zero

- **Razão** = uma divisão que compara duas quantidades. "2 para 3" é a razão 2/3.
- **Proporção** = a igualdade entre duas razões: \`a/b = c/d\`.
- **Propriedade fundamental:** numa proporção, **multiplicar em cruz** dá o mesmo resultado: a · d = b · c. É daí que sai a regra de três.

### Regra de três: o passo a passo

1. Monte uma tabela com as duas grandezas, uma em cada coluna.
2. Decida se elas são **diretas** ou **inversas**:
   - **Direta:** uma cresce, a outra cresce (mais litros de tinta → mais parede pintada).
   - **Inversa:** uma cresce, a outra diminui (mais operários → menos tempo de obra).
3. Monte a proporção e multiplique em cruz (na inversa, inverte-se uma das razões).

### Exemplo resolvido (direta)

*Se 3 kg de farinha fazem 60 pães, quantos pães fazem 5 kg?*

\`\`\`
3 kg  → 60 pães
5 kg  →  x pães
\`\`\`
Direta (mais farinha, mais pães). Multiplica em cruz: 3 · x = 5 · 60 → 3x = 300 → x = **100 pães**.

### Exemplo resolvido (inversa)

*4 operários levam 12 dias para uma obra. Quantos dias levam 6 operários?*

Inversa (mais operários, menos dias). Inverte-se uma razão:
4 · 12 = 6 · x → 48 = 6x → x = **8 dias**.

> Dica: na **inversa**, multiplique os dois valores da grandeza conhecida (4·12=48) e divida pelo novo (÷6).

### Como cai no ENEM (e as pegadinhas)
- **Errar direta × inversa** é o deslize nº 1. Pergunte sempre: "se um aumenta, o outro aumenta ou diminui?".
- **Escala, velocidade média (v = distância/tempo) e densidade** são todas razões disfarçadas.`,
    links: [
      L("Regra de três simples e composta — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/regra-tres-composta.htm", "Mundo Educação"),
      L("Razão e proporção — Brasil Escola", "https://brasilescola.uol.com.br/matematica/razao-proporcao.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-porcentagem",
    titulo: "Porcentagem e matemática financeira",
    resumoMarkdown: `## Porcentagem e matemática financeira

Porcentagem está em tudo que envolve dinheiro: descontos, aumentos, juros, impostos. "Por cento" significa literalmente "por cem" — 25% é 25 a cada 100.

### O básico

- Transformar % em número: **divida por 100**. 25% = 25/100 = **0,25**.
- "x% de um valor" = multiplique. 25% de 80 = 0,25 · 80 = **20**.

### O truque profissional: fator de multiplicação

Em vez de calcular o desconto e depois subtrair, multiplique direto por um **fator**:

| Situação | Fator | Exemplo |
|---|---|---|
| Aumento de 20% | × 1,20 | novo = antigo · 1,20 |
| Desconto de 30% | × 0,70 | novo = antigo · 0,70 |
| Aumento de 5% | × 1,05 | |
| Desconto de 15% | × 0,85 | |

> Regra: **aumento** → 1 + (taxa/100); **desconto** → 1 − (taxa/100).

### Cuidado: aumentos/descontos sucessivos NÃO se somam

*Um produto de R$ 100 sofre aumento de 10% e depois desconto de 10%. Volta a R$ 100?*

**Não!** Multiplica-se os fatores: 100 · 1,10 · 0,90 = 100 · 0,99 = **R$ 99**. Somar (10% − 10% = 0) daria a resposta errada. Esta é uma pegadinha clássica.

### Juros

- **Juros simples** — incidem sempre sobre o valor inicial:
> \`J = C · i · t\`  (C = capital inicial, i = taxa em decimal, t = tempo)
> O montante final é M = C + J.

- **Juros compostos** — "juro sobre juro", incidem sobre o montante acumulado:
> \`M = C · (1 + i)^t\`

### Exemplo resolvido

*R$ 1.000 a juros simples de 2% ao mês, por 3 meses. Quanto de juros?*

J = C · i · t = 1000 · 0,02 · 3 = **R$ 60**. Montante = 1000 + 60 = R$ 1.060.

### Como cai no ENEM (e as pegadinhas)
- **Somar percentuais** em vez de multiplicar fatores (o erro do "±10%").
- **Base errada:** calcular a % sobre o valor já alterado. Sempre veja "porcentagem *de quê*".`,
    links: [
      L("Porcentagem — Brasil Escola", "https://brasilescola.uol.com.br/matematica/porcentagem.htm", "Brasil Escola"),
      L("Matemática financeira: juros — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/juros-simples.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-probabilidade",
    titulo: "Probabilidade",
    resumoMarkdown: `## Probabilidade

Probabilidade mede a **chance** de algo acontecer, num número de 0 (impossível) a 1 (certo) — ou de 0% a 100%. Cai todo ano, geralmente em nível acessível.

### A fórmula central

> \`P = casos favoráveis / casos possíveis\`

- **Casos favoráveis** = os resultados que você quer que aconteçam.
- **Casos possíveis** (espaço amostral) = *todos* os resultados que poderiam acontecer.

**Exemplo básico:** num dado comum, a chance de sair um número par (2, 4, 6)?
Favoráveis = 3; possíveis = 6. P = 3/6 = 1/2 = **50%**.

### Eventos em sequência

- **"E" (um E outro acontecem) → multiplica** as probabilidades.
- **"OU" (um OU outro) → soma** as probabilidades.

**Com ou sem reposição:** se você tira uma bola e **não devolve**, o total diminui na segunda retirada (muda o denominador). Preste muita atenção nisso.

### Exemplo resolvido

*Numa urna há 5 bolas: 3 azuis e 2 vermelhas. Tirando 2 bolas sem reposição, qual a chance de as duas serem azuis?*

1. Primeira bola azul: P = 3/5.
2. Restam 4 bolas, sendo 2 azuis. Segunda azul: P = 2/4.
3. As duas ("E") → multiplica: (3/5) · (2/4) = 6/20 = **3/10 = 30%**.

### Como cai no ENEM (e as pegadinhas)
- **Contar errado o espaço amostral** (o denominador) — por isso probabilidade anda junto com Análise Combinatória.
- **Esquecer "sem reposição":** se não devolve, o total cai na retirada seguinte.
- **Confundir "E" com "OU":** um pede multiplicação, o outro soma.`,
    links: [
      L("Probabilidade — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/probabilidade.htm", "Mundo Educação"),
      L("Probabilidade no ENEM — Brasil Escola", "https://brasilescola.uol.com.br/matematica/probabilidade.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-grandezas",
    titulo: "Grandezas, medidas e unidades",
    resumoMarkdown: `## Grandezas, medidas e unidades

Menos um "conteúdo" e mais uma **habilidade que aparece na prova inteira**: converter unidades e relacionar grandezas. Muitas questões "fáceis" só exigem converter com cuidado.

### As conversões que você precisa saber

| Grandeza | Escada | Exemplo |
|---|---|---|
| Comprimento | km → m → **dm** → cm → mm (×10 por degrau) | 1 m = 10 dm = 100 cm |
| Massa | kg → g → mg | 1 kg = 1000 g |
| Tempo | h → min → s (×60) | 1 h = 60 min = 3600 s |
| Volume | m³ → dm³ → cm³ | 1 dm³ = 1 litro; 1 m³ = 1000 L |

> **Regra de ouro do "ao quadrado/ao cubo":** comprimento converte direto (×10), mas **área** converte ao quadrado (1 m² = 10.000 cm²) e **volume** ao cubo (1 m³ = 1.000.000 cm³).

### Grandezas derivadas (uma razão entre duas outras)

| Grandeza | Fórmula | Unidade |
|---|---|---|
| Velocidade | distância / tempo | km/h, m/s |
| Vazão | volume / tempo | L/s |
| Consumo | distância / combustível | km/L |
| Densidade | massa / volume | kg/m³, g/cm³ |
| Energia elétrica | potência · tempo | kWh |

> Conversão de velocidade: para ir de **km/h para m/s, divida por 3,6**; de m/s para km/h, multiplique por 3,6.

### Exemplo resolvido

*Um carro faz 72 km/h. Quantos metros por segundo?*

72 ÷ 3,6 = **20 m/s**.

### Como cai no ENEM (e as pegadinhas)
- **Misturar unidades:** somar metros com centímetros, minutos com horas.
- **Esquecer o quadrado/cubo** ao converter área e volume.
- Ler a conta de luz (kWh), receitas (dosagens) e mapas (escala) são aplicações recorrentes.`,
    links: [
      L("Unidades de medida — Brasil Escola", "https://brasilescola.uol.com.br/matematica/unidades-medida.htm", "Brasil Escola"),
      L("Conversão de unidades — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/transformacao-unidades.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-funcoes",
    titulo: "Funções",
    resumoMarkdown: `## Funções

Função é uma **regra que liga duas grandezas**: você dá um valor de entrada (x) e ela devolve uma saída (y). Ex.: o preço da corrida (y) depende dos km rodados (x). No ENEM, funções aparecem em gráficos e em problemas de otimização ("qual o lucro máximo?").

### Função afim (1º grau) — a reta

> \`y = a · x + b\`

- **a** = coeficiente angular = a **taxa de variação** (quanto y muda para cada +1 em x). Se a > 0, a reta sobe; se a < 0, desce.
- **b** = coeficiente linear = o valor de y quando x = 0 (onde a reta corta o eixo vertical). É o "valor inicial/fixo".

**Exemplo:** um táxi cobra R$ 5 fixos + R$ 2 por km. A função é y = 2x + 5. Aqui b = 5 (bandeirada) e a = 2 (preço por km).

### Função quadrática (2º grau) — a parábola

> \`y = a · x² + b · x + c\`

O gráfico é uma **parábola** (formato de U). Se a > 0, o U abre para cima (tem ponto **mínimo**); se a < 0, abre para baixo (tem ponto **máximo**). O ENEM adora pedir esse ponto extremo (lucro máximo, altura máxima de um projétil).

> **Vértice** (o ponto de máximo ou mínimo): \`x_v = -b / (2a)\`. Depois é só substituir esse x na função para achar o y do vértice.

### Exemplo resolvido (vértice)

*O lucro de uma empresa é L = -2x² + 40x. Qual quantidade x dá lucro máximo?*

1. Aqui a = -2, b = 40. Como a < 0, a parábola tem máximo.
2. x_v = -b/(2a) = -40 / (2·-2) = -40 / -4 = **10 unidades**.
3. Lucro nesse ponto: L = -2·(10²) + 40·10 = -200 + 400 = **R$ 200**.

### Função exponencial — crescimento acelerado

> \`y = a · b^x\`  (a cada +1 em x, multiplica-se por um fator fixo b)

Modela juros compostos, crescimento de população, meia-vida (decaimento). O que a distingue: não soma sempre o mesmo, **multiplica** sempre pelo mesmo fator.

### Como cai no ENEM
- Identifique o tipo pela situação: taxa **constante** → afim; **ponto de máx/mín** → quadrática; **multiplicação por fator fixo** → exponencial.
- Interpretar gráfico (onde corta os eixos, onde é máximo) é o pedido mais comum.`,
    links: [
      L("Função do 1º e 2º grau — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/funcao.htm", "Mundo Educação"),
      L("Função exponencial — Brasil Escola", "https://brasilescola.uol.com.br/matematica/funcao-exponencial.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-progressoes",
    titulo: "Sequências e progressões",
    resumoMarkdown: `## Sequências e progressões

Uma sequência é uma lista de números em ordem. Progressão é uma sequência com uma **regra fixa** de um termo para o outro. Há dois tipos, e a diferença é simples: uma **soma** sempre o mesmo, a outra **multiplica** sempre pelo mesmo.

### PA — Progressão Aritmética (soma a razão)

Cada termo = o anterior **+ r** (razão). Ex.: 2, 5, 8, 11… (soma 3).

> Termo geral: \`aₙ = a₁ + (n − 1) · r\`
> Soma dos n primeiros: \`Sₙ = (a₁ + aₙ) · n / 2\`

- a₁ = primeiro termo; aₙ = termo na posição n; r = razão; n = quantos termos.

**Exemplo:** numa PA que começa em 2 com razão 3, qual o 10º termo?
a₁₀ = 2 + (10−1)·3 = 2 + 27 = **29**.

### PG — Progressão Geométrica (multiplica pela razão)

Cada termo = o anterior **× q** (razão). Ex.: 3, 6, 12, 24… (multiplica por 2).

> Termo geral: \`aₙ = a₁ · q^(n−1)\`

**Exemplo:** PG começando em 3 com razão 2, qual o 5º termo?
a₅ = 3 · 2^(5−1) = 3 · 2⁴ = 3 · 16 = **48**.

### Como cai no ENEM (e as pegadinhas)
- **Descubra o tipo:** os termos **somam** sempre o mesmo (PA) ou **multiplicam** por um fator fixo (PG)?
- A questão costuma pedir um **termo distante** (ex.: o 30º) ou a **soma** — use a fórmula em vez de listar tudo à mão.
- Situações típicas: parcelas que crescem, empilhamentos, população que dobra.`,
    links: [
      L("Progressão aritmética (PA) — Brasil Escola", "https://brasilescola.uol.com.br/matematica/progressao-aritmetica.htm", "Brasil Escola"),
      L("Progressão geométrica (PG) — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/progressao-geometrica.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-geometria-analitica",
    titulo: "Geometria analítica",
    resumoMarkdown: `## Geometria analítica

É a geometria feita com **coordenadas** no plano cartesiano — aquele com eixo horizontal (x) e vertical (y). Cada ponto é um par (x, y). Serve para calcular distâncias e posições, e aparece ligada a mapas, malhas e GPS.

### As fórmulas

**Distância entre dois pontos** A(x₁, y₁) e B(x₂, y₂) — é o Teorema de Pitágoras aplicado às coordenadas:

> \`d = √[ (x₂ − x₁)² + (y₂ − y₁)² ]\`

**Ponto médio** de um segmento (o ponto bem no meio entre A e B):

> \`M = ( (x₁+x₂)/2 , (y₁+y₂)/2 )\`

### Exemplo resolvido

*Qual a distância entre A(1, 2) e B(4, 6)?*

1. Diferença em x: 4 − 1 = 3. Diferença em y: 6 − 2 = 4.
2. d = √(3² + 4²) = √(9 + 16) = √25 = **5**.

### Como cai no ENEM
- Aparece menos que as geometrias plana e espacial, quase sempre aplicada a **mapas em malha, deslocamentos ou telas**.
- Saber ler coordenadas e calcular distância entre pontos resolve a maioria.`,
    links: [
      L("Geometria analítica: distância entre pontos — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/distancia-entre-dois-pontos.htm", "Mundo Educação"),
      L("Equação da reta — Brasil Escola", "https://brasilescola.uol.com.br/matematica/equacao-reta.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-algebra",
    titulo: "Álgebra e equações",
    resumoMarkdown: `## Álgebra e equações

Álgebra é usar **letras no lugar de números desconhecidos** (as incógnitas, normalmente x) para traduzir um problema em conta. No ENEM, o desafio quase nunca é a conta em si — é **montar a equação** a partir do texto.

### Equação do 1º grau

Tem x sozinho (sem x²). Resolve-se **isolando o x**: o que está somando passa subtraindo, o que multiplica passa dividindo.

**Exemplo:** 2x + 6 = 20 → 2x = 20 − 6 → 2x = 14 → x = 14/2 = **7**.

### Sistemas (duas incógnitas)

Quando há duas coisas desconhecidas e duas informações. Ex.: ingressos de adulto e criança.

*20 ingressos custaram R$ 300. Adulto = R$ 20, criança = R$ 10. Quantos de cada?*
- Sejam a (adultos) e c (crianças): a + c = 20 e 20a + 10c = 300.
- Da 1ª: c = 20 − a. Substituindo: 20a + 10(20−a) = 300 → 20a + 200 − 10a = 300 → 10a = 100 → a = **10 adultos** e c = **10 crianças**.

### Equação do 2º grau (tem x²)

> Fórmula de Bhaskara: \`x = ( −b ± √Δ ) / (2a)\`, onde \`Δ = b² − 4·a·c\`

Vem de ax² + bx + c = 0. O "±" dá **duas** soluções possíveis. Δ (delta) é o que fica dentro da raiz.

### Como cai no ENEM (e as pegadinhas)
- **A etapa que decide** é traduzir o enunciado: quem é a incógnita? Que relações o texto dá?
- Defina bem "x é o quê" antes de sair calculando — é onde a maioria se perde.`,
    links: [
      L("Sistemas de equações — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/sistema-equacoes-1-grau.htm", "Mundo Educação"),
      L("Equação do 2º grau — Brasil Escola", "https://brasilescola.uol.com.br/matematica/equacao-segundo-grau.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-combinatoria",
    titulo: "Análise combinatória",
    resumoMarkdown: `## Análise combinatória

É a arte de **contar possibilidades** sem listar uma a uma. Sustenta a Probabilidade (aquele "casos possíveis" vem daqui). A pergunta típica: "de quantas maneiras…?".

### O Princípio Fundamental da Contagem (o mais importante)

Se uma decisão tem várias etapas, **multiplique** o número de opções de cada etapa.

**Exemplo:** com 3 camisetas e 2 calças, quantos looks diferentes?
3 · 2 = **6 combinações**.

### A pergunta decisiva: a ORDEM importa?

| Caso | Ordem importa? | Exemplo |
|---|---|---|
| **Arranjo / senha** | Sim | senha 123 ≠ 321 |
| **Combinação** | Não | comissão de 3 pessoas (a ordem tanto faz) |
| **Permutação** | Sim, usando todos | anagramas de uma palavra |

> **Fatorial** (n!) = multiplicar de n até 1. Ex.: 4! = 4·3·2·1 = 24. Serve para contar de quantos jeitos ordenar todos os elementos.

### Exemplo resolvido

*Quantas senhas de 3 dígitos diferentes dá para formar com os algarismos 1 a 5?*

A ordem importa (é senha) e não repete dígito:
- 1ª casa: 5 opções. 2ª casa: 4 restantes. 3ª casa: 3 restantes.
- 5 · 4 · 3 = **60 senhas**.

### Como cai no ENEM (e as pegadinhas)
- **A ordem importa?** Senha/pódio → sim. Grupo/comissão → não (combinação, senão você conta repetido).
- Na dúvida, o **princípio multiplicativo** (multiplicar as opções de cada etapa) resolve a maioria.`,
    links: [
      L("Princípio fundamental da contagem — Brasil Escola", "https://brasilescola.uol.com.br/matematica/principio-fundamental-contagem.htm", "Brasil Escola"),
      L("Arranjo, permutação e combinação — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/analise-combinatoria.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-logica",
    titulo: "Raciocínio lógico",
    resumoMarkdown: `## Raciocínio lógico

Menos "fórmula" e mais **organizar informações e testar possibilidades**. A lógica aparece embutida em muitas questões de interpretação e contagem.

### O que costuma cair

- **Sequências e padrões:** descobrir a regra que gera os próximos elementos (números, figuras).
- **Proposições verdadeiro/falso:** afirmações que se combinam com "e", "ou", "se… então", e a **negação** delas.
- **Problemas de "quem é quem":** pistas sobre pessoas/objetos que você cruza numa tabela para eliminar possibilidades.

### A estratégia que resolve quase tudo

1. **Anote as informações** numa tabela ou diagrama — não tente fazer de cabeça.
2. Marque o que é **certamente verdadeiro** e o que é **impossível**.
3. **Teste** uma hipótese e veja se ela gera contradição; se gerar, descarte e tente outra.

### Exemplo (condicional)

A frase "**se** chove, **então** a rua fica molhada" só é **falsa** num caso: choveu E a rua NÃO ficou molhada. Nos demais casos é verdadeira. Saber a negação de um "se… então" costuma cair.

### Como cai no ENEM
- Geralmente disfarçado: uma tabela de condições, um quebra-cabeça de pistas, um padrão a completar.
- Ganha quem **organiza os dados** com método, em vez de chutar.`,
    links: [
      L("Raciocínio lógico — Brasil Escola", "https://brasilescola.uol.com.br/matematica/raciocinio-logico.htm", "Brasil Escola"),
      L("Lógica proposicional — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/logica.htm", "Mundo Educação"),
    ],
  },
];
