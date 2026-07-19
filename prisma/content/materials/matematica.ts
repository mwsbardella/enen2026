// Conteúdo de estudo de MATEMÁTICA, gerado a partir da engenharia reversa das
// provas (2019–2025). Assuntos da taxonomia, ORDENADOS pela frequência real.
//
// Tom DIDÁTICO e do zero: o material assume que o aluno estudou isso há muito
// tempo (ou nunca viu direito). Cada assunto traz as FÓRMULAS explicadas termo
// a termo, VÁRIOS exemplos resolvidos passo a passo e as pegadinhas típicas do
// ENEM. Fórmulas em texto simples (sem LaTeX): · = multiplicar, / = dividir,
// ² = ao quadrado, ³ = ao cubo, √ = raiz quadrada, ≈ = aproximadamente.

import type { MaterialSeed } from "./humanas";

const L = (titulo: string, url: string, fonte: string) => ({ titulo, url, fonte });

export const matematicaMateriais: MaterialSeed[] = [
  {
    topicSlug: "mat-geometria-plana",
    titulo: "Geometria plana",
    resumoMarkdown: `## Geometria plana

**Começando do zero:** Geometria plana é a matemática das figuras "chatas", desenhadas numa folha: quadrados, triângulos, círculos. No ENEM ela vem disfarçada de situação real — um terreno, um piso, uma logomarca, um jardim — e quase sempre pede **quanto mede** (o contorno) ou **quanto ocupa** (a superfície).

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
| Retângulo | \`A = b · h\` | A = área, b = base (lado deitado), h = altura (lado em pé) |
| Quadrado | \`A = L²\` | L = lado; L² significa L·L (o lado multiplicado por ele mesmo) |
| Triângulo | \`A = (b · h) / 2\` | b = base, h = altura até essa base; divide por 2 porque o triângulo é "meio retângulo" |
| Círculo | \`A = π · r²\` | r = raio; π ("pi") ≈ 3,14 é um número fixo |
| Trapézio | \`A = (B + b) · h / 2\` | B = base maior, b = base menor, h = altura entre as bases |

> O **raio** (r) é a distância do centro do círculo até a borda. O **diâmetro** (d) é o dobro do raio (atravessa o círculo inteiro passando pelo centro): d = 2·r. O símbolo **π** ("pi") é a relação entre o contorno e o diâmetro de qualquer círculo; no ENEM costuma vir o valor a usar (geralmente 3 ou 3,14).

**Comprimento da circunferência** (o "perímetro" do círculo): \`C = 2 · π · r\` (C = comprimento da volta completa).

### Ferramentas de proporção dentro da geometria

- **Teorema de Pitágoras** — só vale no triângulo **retângulo** (aquele que tem um ângulo de 90°). O lado maior, que fica de frente para o ângulo reto, é a **hipotenusa** (a); os outros dois, que formam o ângulo de 90°, são os **catetos** (b e c):

> \`a² = b² + c²\`  → em palavras: a hipotenusa ao quadrado é igual à soma dos catetos ao quadrado.

- **Semelhança de triângulos** — dois triângulos com a mesma "forma" mas tamanhos diferentes têm lados proporcionais. É o que explica sombras, escalas e mapas: se um lado dobra, o correspondente dobra na mesma razão.

### Exemplo resolvido 1 (área × perímetro)

*Um terreno retangular tem 20 m de frente por 15 m de fundo. Qual a área e quanto de cerca é preciso para contorná-lo?*

1. **Área** (a superfície de dentro): A = b · h = 20 · 15 = **300 m²**.
2. **Perímetro** (a cerca em volta): soma dos 4 lados = 20 + 15 + 20 + 15 = **70 m**.

Repare que área e perímetro respondem coisas diferentes — leia com atenção o que a questão pede.

### Exemplo resolvido 2 (círculo)

*Uma pizza tem 30 cm de diâmetro. Qual a área da pizza? (Use π ≈ 3,14.)*

1. Primeiro o raio: raio = diâmetro ÷ 2 = 30 ÷ 2 = 15 cm. (O diâmetro atravessa; o raio é metade.)
2. Área do círculo: A = π · r² = 3,14 · 15² = 3,14 · 225 = **706,5 cm²**.

> Cuidado clássico: a questão dá o **diâmetro**, mas a fórmula usa o **raio**. Divida por 2 antes.

### Exemplo resolvido 3 (Pitágoras)

*Uma escada de 5 m está encostada numa parede, com a base a 3 m do pé da parede. A que altura o topo da escada toca a parede?*

1. A escada é a hipotenusa (a = 5); a distância no chão é um cateto (b = 3); a altura na parede é o outro cateto (c = ?).
2. a² = b² + c² → 5² = 3² + c² → 25 = 9 + c² → c² = 25 − 9 = 16 → c = √16 = **4 m**.

### Exemplo resolvido 4 (figura composta)

*Uma sala em formato de "L" é um retângulo de 6 m × 4 m com um "pedaço" retangular de 2 m × 2 m recortado num canto. Qual a área do piso?*

1. Área do retângulo cheio: 6 · 4 = 24 m².
2. Área do pedaço que falta: 2 · 2 = 4 m².
3. Área do "L" = cheio − recorte = 24 − 4 = **20 m²**.

### Como cai no ENEM (e as pegadinhas)
- **Figuras compostas:** um formato estranho (um "L", uma sala com recorte). O truque é **decompor** em retângulos/triângulos, calcular cada área e somar (ou subtrair um pedaço vazado), como no Exemplo 4.
- **Diâmetro × raio:** a fórmula do círculo usa o raio; se o enunciado der o diâmetro, divida por 2 (Exemplo 2).
- **Unidades:** 1 m = 100 cm, mas 1 m² = 10.000 cm² (a conversão de área vai ao **quadrado**). Errar isso é o deslize nº 1.
- **Escala de mapa/planta:** "escala 1:100" quer dizer que 1 cm no papel vale 100 cm reais. É uma regra de três.`,
    links: [
      L("Semelhança de triângulos — Brasil Escola", "https://brasilescola.uol.com.br/matematica/semelhanca-triangulos.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-geometria-espacial",
    titulo: "Geometria espacial",
    resumoMarkdown: `## Geometria espacial

**Começando do zero:** Agora as figuras têm **volume**: são objetos de verdade, com altura, largura e profundidade — uma caixa, uma lata, um tanque de água. O ENEM quase sempre pergunta **quanto cabe dentro** (volume/capacidade) ou **quanto de material reveste por fora** (área da superfície).

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

### As fórmulas de volume

| Sólido | Volume | O que é cada letra |
|---|---|---|
| Bloco/caixa (paralelepípedo) | \`V = c · l · h\` | V = volume, c = comprimento, l = largura, h = altura |
| Cubo | \`V = L³\` | L = aresta (lado); L³ = L·L·L |
| Prisma qualquer | \`V = A_base · h\` | A_base = área da base, h = altura do sólido |
| Cilindro (lata) | \`V = π · r² · h\` | r = raio da base circular, h = altura; π ≈ 3,14 |
| Cone | \`V = (π · r² · h) / 3\` | mesma coisa do cilindro, dividido por 3 |
| Pirâmide | \`V = (A_base · h) / 3\` | área da base × altura, dividido por 3 |
| Esfera (bola) | \`V = (4 · π · r³) / 3\` | r = raio da bola |

> Repare no padrão: cone e pirâmide são **1/3** do cilindro/prisma de mesma base e altura. Isso ajuda a memorizar.

### Exemplo resolvido 1 (caixa em litros, usando dm)

*Uma caixa retangular tem base 2,5 dm × 1,5 dm e água até 2 dm de altura. Quantos litros de água há nela?*

1. Volume = c · l · h = 2,5 · 1,5 · 2 = **7,5 dm³**.
2. Como **1 dm³ = 1 litro**, são **7,5 litros**. (Trabalhar em dm faz o resultado já sair em litros — não precisa converter.)

### Exemplo resolvido 2 (cilindro)

*Uma caixa-d'água cilíndrica tem raio de 1 m e altura de 2 m. Quantos litros ela comporta? (Use π ≈ 3,14.)*

1. Volume do cilindro: V = π · r² · h = 3,14 · 1² · 2 = 3,14 · 1 · 2 = **6,28 m³**.
2. Converter para litros: 1 m³ = 1000 L, então 6,28 · 1000 = **6.280 litros**.

### Exemplo resolvido 3 (o efeito de dobrar o raio)

*Se o raio de um tanque cilíndrico dobrar (a altura fica igual), o volume fica quantas vezes maior?*

1. No volume do cilindro o raio entra **ao quadrado** (r²). Dobrar o raio significa multiplicar r por 2.
2. Como está ao quadrado: 2² = 4. O volume fica **4 vezes maior** — não 2. Essa é a pegadinha preferida da banca.

### Como cai no ENEM (e as pegadinhas)
- **Volume + proporção:** "encheu 3/4 do tanque", "dobrou o raio". Cuidado: se o **raio dobra**, o volume do cilindro fica **4 vezes** maior (Exemplo 3).
- **Quanto transborda / quanto falta:** calcule o volume do recipiente e compare com o que foi despejado.
- **Unidade errada:** confundir m³ com litros, ou não perceber que volume converte ao **cubo** (1 m³ = 1.000.000 cm³).`,
    links: [
      L("Geometria espacial — Brasil Escola", "https://brasilescola.uol.com.br/matematica/geometria-espacial.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-estatistica",
    titulo: "Estatística",
    resumoMarkdown: `## Estatística

**Começando do zero:** Estatística é ler e resumir dados — e o ENEM é recheado de **gráficos e tabelas**. Boa parte das questões nem exige conta difícil: exige ler o gráfico com calma e escolher a medida certa.

### As três "médias" (medidas de tendência central)

São três formas de dizer "qual é o valor típico" de um conjunto de números:

| Medida | Como se calcula | Quando usar |
|---|---|---|
| **Média** aritmética | soma dos valores ÷ quantidade de valores | o valor "equilibrado" do conjunto |
| **Mediana** | ordene os valores e pegue o do **meio** | quando há valores muito fora da curva |
| **Moda** | o valor que **mais se repete** | o mais comum/frequente |

> **Média ponderada** (a que mais cai): quando cada valor tem um **peso** diferente.
> \`Média = (v1·p1 + v2·p2 + ...) / (p1 + p2 + ...)\`
> onde cada **v** é um valor e cada **p** é o peso desse valor. Multiplica-se cada valor pelo seu peso, soma tudo e divide pela soma dos pesos.

### Exemplo resolvido 1 (média simples)

*Um aluno tirou 5, 7, 6 e 10 em quatro provas de mesmo peso. Qual a média?*

1. Some os valores: 5 + 7 + 6 + 10 = 28.
2. Divida pela quantidade (são 4 provas): 28 ÷ 4 = **7,0**.

### Exemplo resolvido 2 (média ponderada)

*Numa disciplina, a prova tem peso 3 e o trabalho peso 2. O aluno tirou 8,0 na prova e 5,0 no trabalho. Qual a média final?*

1. Multiplique cada nota pelo seu peso: (8 · 3) + (5 · 2) = 24 + 10 = 34.
2. Some os pesos: 3 + 2 = 5.
3. Divida: 34 ÷ 5 = **6,8**.

(Repare: a média **simples** seria (8+5)/2 = 6,5. O peso maior da prova puxou o resultado para cima.)

### Exemplo resolvido 3 (mediana e a distorção da média)

*Salários de 5 pessoas (em mil R$): 2, 2, 3, 4, 30. Qual medida representa melhor o grupo?*

1. **Média** = (2+2+3+4+30) ÷ 5 = 41 ÷ 5 = 8,2 mil — mas quase ninguém ganha isso! O valor 30 (um "fora da curva") distorceu.
2. **Mediana** = com os dados **em ordem** (2, 2, 3, 4, 30), o do meio é o 3º valor = **3 mil**. Representa melhor a maioria.
3. **Moda** = o valor que mais se repete = **2 mil** (aparece duas vezes).

> Se a quantidade de valores for **par**, a mediana é a média dos dois centrais. Ex.: em 4, 6, 8, 10 a mediana é (6+8)/2 = 7.

### Como cai no ENEM (e as pegadinhas)
- **Confundir média com mediana** — a pegadinha mais comum. Quando há um valor gigante ou minúsculo destoando, a **mediana** representa melhor (Exemplo 3).
- **Ignorar os pesos** e fazer média simples onde era ponderada (Exemplo 2).
- **Ler o eixo errado** do gráfico. Antes de calcular, leia o **título** e o que cada eixo mede.`,
    links: [
      L("Estatística e gráficos — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/estatistica.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-razao-proporcao",
    titulo: "Razão, proporção e regra de três",
    resumoMarkdown: `## Razão, proporção e regra de três

**Começando do zero:** Esta é a **ferramenta coringa** do ENEM: aparece sozinha e escondida dentro de dezenas de outras questões (escala, velocidade, receita, porcentagem). Se você dominar regra de três, resolve boa parte da prova.

### Os conceitos, do zero

- **Razão** = uma divisão que compara duas quantidades. "2 para 3" é a razão 2/3.
- **Proporção** = a igualdade entre duas razões: \`a/b = c/d\` (lê-se "a está para b assim como c está para d").
- **Propriedade fundamental:** numa proporção, **multiplicar em cruz** dá o mesmo resultado: a · d = b · c. É daí que sai a regra de três.

### Regra de três: o passo a passo

1. Monte uma tabela com as duas grandezas, uma em cada coluna, e coloque o **x** onde está o valor que você quer descobrir.
2. Decida se as grandezas são **diretas** ou **inversas**:
   - **Direta:** uma cresce, a outra cresce junto (mais litros de tinta → mais parede pintada).
   - **Inversa:** uma cresce, a outra diminui (mais operários → menos tempo de obra).
3. **Direta:** multiplique em cruz. **Inversa:** multiplique "em linha" (ou inverta uma das frações antes).

### Exemplo resolvido 1 (direta)

*Se 3 kg de farinha fazem 60 pães, quantos pães fazem 5 kg?*

\`\`\`
3 kg  → 60 pães
5 kg  →  x pães
\`\`\`
Direta (mais farinha, mais pães). Multiplica em cruz: 3 · x = 5 · 60 → 3x = 300 → x = 300 ÷ 3 = **100 pães**.

### Exemplo resolvido 2 (inversa)

*4 operários levam 12 dias para uma obra. Quantos dias levam 6 operários (no mesmo ritmo)?*

Inversa (mais operários, menos dias). Aqui NÃO se multiplica em cruz: multiplique os dois valores conhecidos da mesma grandeza e divida pelo novo.

4 · 12 = 6 · x → 48 = 6x → x = 48 ÷ 6 = **8 dias**.

### Exemplo resolvido 3 (escala de mapa)

*Num mapa de escala 1:50.000, dois pontos estão a 4 cm de distância. Qual a distância real?*

1. Escala 1:50.000 significa: 1 cm no mapa = 50.000 cm reais.
2. Regra de três direta: 1 cm → 50.000 cm; 4 cm → x. Então x = 4 · 50.000 = 200.000 cm.
3. Converter para km: 200.000 cm = 2.000 m = **2 km**.

### Como cai no ENEM (e as pegadinhas)
- **Errar direta × inversa** é o deslize nº 1. Pergunte sempre: "se um aumenta, o outro aumenta ou diminui?".
- **Escala, velocidade média (v = distância/tempo) e densidade** são todas razões disfarçadas (Exemplo 3).`,
    links: [
      L("Regra de três simples e composta — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/regra-tres-composta.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-porcentagem",
    titulo: "Porcentagem e matemática financeira",
    resumoMarkdown: `## Porcentagem e matemática financeira

**Começando do zero:** Porcentagem está em tudo que envolve dinheiro: descontos, aumentos, juros, impostos. "Por cento" significa literalmente "por cem" — 25% é 25 a cada 100.

### O básico

- Transformar % em número (decimal): **divida por 100**. 25% = 25/100 = **0,25**.
- "x% de um valor" = multiplique. 25% de 80 = 0,25 · 80 = **20**.

### O truque profissional: fator de multiplicação

Em vez de calcular o desconto/aumento e depois somar ou subtrair, multiplique direto por um **fator**:

| Situação | Fator | Como usar |
|---|---|---|
| Aumento de 20% | × 1,20 | novo = antigo · 1,20 |
| Desconto de 30% | × 0,70 | novo = antigo · 0,70 |
| Aumento de 5% | × 1,05 | |
| Desconto de 15% | × 0,85 | |

> Regra do fator: **aumento** → 1 + (taxa/100); **desconto** → 1 − (taxa/100).

### Exemplo resolvido 1 (desconto simples)

*Uma camisa de R$ 80 está com 15% de desconto. Qual o preço final?*

1. Fator do desconto de 15%: 1 − 0,15 = 0,85.
2. Preço final = 80 · 0,85 = **R$ 68**.

### Exemplo resolvido 2 (aumentos/descontos sucessivos — NÃO se somam)

*Um produto de R$ 100 sofre aumento de 10% e depois desconto de 10%. Volta a R$ 100?*

**Não!** Multiplica-se os fatores em sequência: 100 · 1,10 · 0,90 = 110 · 0,90 = **R$ 99**. Somar (10% − 10% = 0) daria a resposta errada. Esta é uma pegadinha clássica: o segundo percentual incide sobre um valor já alterado.

### Juros

- **Juros simples** — incidem sempre sobre o valor inicial:
> \`J = C · i · t\`  → J = juros, C = capital (valor inicial), i = taxa em decimal, t = tempo. O montante final (total) é M = C + J.

- **Juros compostos** — "juro sobre juro", incidem sobre o montante já acumulado:
> \`M = C · (1 + i)^t\`  → M = montante final, e o expoente **t** indica quantas vezes o valor é multiplicado pelo fator (1 + i).

### Exemplo resolvido 3 (juros simples)

*R$ 1.000 aplicados a juros simples de 2% ao mês, por 3 meses. Quanto rende de juros e qual o total?*

1. Taxa em decimal: 2% = 0,02.
2. J = C · i · t = 1000 · 0,02 · 3 = **R$ 60** de juros.
3. Montante = C + J = 1000 + 60 = **R$ 1.060**.

### Exemplo resolvido 4 (juros compostos)

*R$ 1.000 a juros compostos de 10% ao mês, por 2 meses. Qual o montante?*

1. Fator = 1 + 0,10 = 1,10.
2. M = C · (1 + i)^t = 1000 · (1,10)² = 1000 · 1,21 = **R$ 1.210**.

(No composto, o 2º mês rende sobre R$ 1.100, não sobre R$ 1.000 — por isso passa dos R$ 1.200 do juro simples.)

### Como cai no ENEM (e as pegadinhas)
- **Somar percentuais** em vez de multiplicar fatores (o erro do "±10%" do Exemplo 2).
- **Base errada:** calcular a % sobre o valor já alterado sem perceber. Sempre veja "porcentagem *de quê*".
- **Simples × composto:** leia qual dos dois a questão pede.`,
    links: [
      L("Porcentagem — Brasil Escola", "https://brasilescola.uol.com.br/matematica/porcentagem.htm", "Brasil Escola"),
      L("Matemática financeira: juros — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/juros-simples.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-probabilidade",
    titulo: "Probabilidade",
    resumoMarkdown: `## Probabilidade

**Começando do zero:** Probabilidade mede a **chance** de algo acontecer, num número de 0 (impossível) a 1 (certo) — ou de 0% a 100%. Cai todo ano, geralmente em nível acessível.

### A fórmula central

> \`P = casos favoráveis / casos possíveis\`  → P = probabilidade (a chance).

- **Casos favoráveis** = os resultados que você quer que aconteçam.
- **Casos possíveis** (o "espaço amostral") = *todos* os resultados que poderiam acontecer.

**Exemplo básico:** num dado comum, qual a chance de sair um número par (2, 4, 6)?
Favoráveis = 3 (os pares); possíveis = 6 (as faces). P = 3/6 = 1/2 = **50%**.

### Eventos em sequência

- **"E" (um E outro acontecem) → multiplica** as probabilidades.
- **"OU" (um OU outro) → soma** as probabilidades.

**Com ou sem reposição:** se você tira um objeto e **não devolve**, o total diminui na próxima retirada (muda o denominador). Preste muita atenção nisso.

### Exemplo resolvido 1 (evento simples)

*Uma urna tem 10 bolas numeradas de 1 a 10. Qual a chance de tirar um número maior que 7?*

1. Favoráveis: 8, 9, 10 → são 3 resultados.
2. Possíveis: 10 bolas. P = 3/10 = **0,3 = 30%**.

### Exemplo resolvido 2 (dois eventos "E", sem reposição)

*Numa urna há 5 bolas: 3 azuis e 2 vermelhas. Tirando 2 bolas sem reposição, qual a chance de as duas serem azuis?*

1. 1ª bola azul: P = 3/5 (3 azuis em 5 bolas).
2. Restam 4 bolas, sendo 2 azuis. 2ª bola azul: P = 2/4.
3. As duas ("E") → multiplica: (3/5) · (2/4) = 6/20 = **3/10 = 30%**.

### Exemplo resolvido 3 (evento "OU")

*Ao jogar um dado, qual a chance de sair 5 OU 6?*

Eventos que não acontecem juntos → soma: P(5) + P(6) = 1/6 + 1/6 = 2/6 = **1/3 ≈ 33%**.

### Como cai no ENEM (e as pegadinhas)
- **Contar errado o espaço amostral** (o denominador) — por isso probabilidade anda junto com Análise Combinatória.
- **Esquecer "sem reposição":** se não devolve, o total cai na retirada seguinte (Exemplo 2).
- **Confundir "E" com "OU":** "E" multiplica, "OU" soma.`,
    links: [
      L("Probabilidade no ENEM — Brasil Escola", "https://brasilescola.uol.com.br/matematica/probabilidade.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-grandezas",
    titulo: "Grandezas, medidas e unidades",
    resumoMarkdown: `## Grandezas, medidas e unidades

**Começando do zero:** Menos um "conteúdo" e mais uma **habilidade que aparece na prova inteira**: converter unidades e relacionar grandezas. Muitas questões "fáceis" só exigem converter com cuidado.

### As conversões que você precisa saber

| Grandeza | Escada | Exemplo |
|---|---|---|
| Comprimento | km → m → **dm** → cm → mm (×10 por degrau) | 1 m = 10 dm = 100 cm |
| Massa | kg → g → mg (×1000 e ×1000) | 1 kg = 1000 g |
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

### Exemplo resolvido 1 (velocidade)

*Um carro anda a 72 km/h. Quantos metros por segundo é isso?*

72 ÷ 3,6 = **20 m/s**.

### Exemplo resolvido 2 (tempo)

*Uma tarefa levou 2 h 30 min. Quantos minutos são no total?*

1. 2 h = 2 · 60 = 120 min.
2. Total = 120 + 30 = **150 min**.

### Exemplo resolvido 3 (consumo de combustível)

*Um carro percorreu 300 km gastando 25 litros. Qual o consumo em km/L?*

Consumo = distância ÷ combustível = 300 ÷ 25 = **12 km/L** (roda 12 km com cada litro).

### Exemplo resolvido 4 (conta de luz — kWh)

*Um chuveiro de 5.000 W fica ligado 1 hora por dia, 30 dias. Quantos kWh consome no mês?*

1. Converter a potência para kW: 5.000 W = 5 kW (÷1000).
2. Energia = potência · tempo = 5 kW · (1 h · 30 dias) = 5 · 30 = **150 kWh**.

### Como cai no ENEM (e as pegadinhas)
- **Misturar unidades:** somar metros com centímetros, ou minutos com horas, sem converter antes.
- **Esquecer o quadrado/cubo** ao converter área e volume.
- Contas de luz (kWh), receitas/dosagens e mapas (escala) são aplicações recorrentes.`,
    links: [
    ],
  },
  {
    topicSlug: "mat-funcoes",
    titulo: "Funções",
    resumoMarkdown: `## Funções

**Começando do zero:** Função é uma **regra que liga duas grandezas**: você dá um valor de entrada (x) e ela devolve uma saída (y). Ex.: o preço da corrida (y) depende dos km rodados (x). No ENEM, funções aparecem em gráficos e em problemas de otimização ("qual o lucro máximo?").

### Função afim (1º grau) — a reta

> \`y = a · x + b\`

- **x** = a entrada (o que você escolhe); **y** = a saída (o resultado).
- **a** = coeficiente angular = a **taxa de variação** (quanto y muda para cada +1 em x). Se a > 0, a reta sobe; se a < 0, desce.
- **b** = coeficiente linear = o valor de y quando x = 0 (onde a reta corta o eixo vertical). É o "valor inicial/fixo".

### Exemplo resolvido 1 (afim)

*Um táxi cobra R$ 5,00 fixos (bandeirada) + R$ 2,00 por km. Quanto custa uma corrida de 8 km?*

1. Montar a função: y = 2x + 5, onde b = 5 (fixo) e a = 2 (preço por km).
2. Substituir x = 8: y = 2·8 + 5 = 16 + 5 = **R$ 21,00**.

### Função quadrática (2º grau) — a parábola

> \`y = a · x² + b · x + c\`

O gráfico é uma **parábola** (formato de U). Se a > 0, o U abre para cima (tem ponto **mínimo**); se a < 0, abre para baixo (tem ponto **máximo**). O ENEM adora pedir esse ponto extremo (lucro máximo, altura máxima de um projétil).

> **Vértice** (o ponto de máximo ou mínimo): \`x_v = −b / (2a)\`, onde x_v é o valor de x no extremo. Depois substitua esse x na função para achar o y correspondente.

### Exemplo resolvido 2 (vértice / valor máximo)

*O lucro de uma empresa é dado por L = −2x² + 40x, onde x é a quantidade vendida. Qual quantidade dá o maior lucro, e quanto é esse lucro?*

1. Identifique os coeficientes: a = −2, b = 40. Como a < 0, a parábola tem ponto de **máximo**.
2. x do vértice: x_v = −b/(2a) = −40 / (2·(−2)) = −40 / −4 = **10 unidades**.
3. Lucro máximo: substitua x = 10 → L = −2·(10²) + 40·10 = −2·100 + 400 = −200 + 400 = **R$ 200**.

### Função exponencial — crescimento acelerado

> \`y = a · b^x\`  → a cada +1 em x, o resultado é **multiplicado** por um fator fixo b (a = valor inicial, b = fator de crescimento).

Modela juros compostos, crescimento de população e meia-vida (decaimento). O que a distingue: não soma sempre o mesmo, **multiplica** sempre pelo mesmo fator.

### Exemplo resolvido 3 (exponencial)

*Uma cultura começa com 200 bactérias e dobra a cada hora. Quantas há depois de 3 horas?*

1. Função: y = 200 · 2^x (a = 200 inicial, b = 2 porque dobra).
2. x = 3 → y = 200 · 2³ = 200 · 8 = **1.600 bactérias**.

### Como cai no ENEM
- Identifique o tipo pela situação: taxa **constante** (sempre + o mesmo) → afim; **ponto de máx/mín** → quadrática; **multiplicação por fator fixo** → exponencial.
- Interpretar gráfico (onde corta os eixos, onde é o máximo) é o pedido mais comum.`,
    links: [
      L("Função do 1º e 2º grau — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/funcao.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-progressoes",
    titulo: "Sequências e progressões",
    resumoMarkdown: `## Sequências e progressões

**Começando do zero:** Uma sequência é uma lista de números em ordem. Progressão é uma sequência com uma **regra fixa** de um termo para o outro. Há dois tipos, e a diferença é simples: uma **soma** sempre o mesmo, a outra **multiplica** sempre pelo mesmo.

### PA — Progressão Aritmética (soma a razão)

Cada termo = o anterior **+ r** (a razão). Ex.: 2, 5, 8, 11… (soma 3 a cada passo).

> Termo geral: \`aₙ = a₁ + (n − 1) · r\`
> Soma dos n primeiros: \`Sₙ = (a₁ + aₙ) · n / 2\`

- **a₁** = primeiro termo; **aₙ** = termo na posição n (o que você quer achar); **r** = razão (o que se soma); **n** = quantidade de termos; **Sₙ** = soma dos n primeiros.

### Exemplo resolvido 1 (termo distante de uma PA)

*Numa PA que começa em 2 com razão 3, qual é o 10º termo?*

a₁₀ = a₁ + (n−1)·r = 2 + (10−1)·3 = 2 + 9·3 = 2 + 27 = **29**.

### Exemplo resolvido 2 (soma de uma PA)

*Quanto vale a soma dos números de 1 a 100 (1 + 2 + 3 + … + 100)?*

1. É uma PA com a₁ = 1, aₙ = 100, n = 100.
2. Sₙ = (a₁ + aₙ)·n/2 = (1 + 100)·100/2 = 101·50 = **5.050**.

### PG — Progressão Geométrica (multiplica pela razão)

Cada termo = o anterior **× q** (a razão). Ex.: 3, 6, 12, 24… (multiplica por 2 a cada passo).

> Termo geral: \`aₙ = a₁ · q^(n−1)\`  → **q** = razão (o que multiplica); o expoente é (n−1).

### Exemplo resolvido 3 (termo de uma PG)

*Numa PG que começa em 3 com razão 2, qual é o 5º termo?*

a₅ = a₁ · q^(n−1) = 3 · 2^(5−1) = 3 · 2⁴ = 3 · 16 = **48**.

### Como cai no ENEM (e as pegadinhas)
- **Descubra o tipo:** os termos **somam** sempre o mesmo (PA) ou **multiplicam** por um fator fixo (PG)?
- A questão costuma pedir um **termo distante** (ex.: o 30º) ou a **soma** — use a fórmula em vez de listar tudo à mão (Exemplo 2).
- Situações típicas: parcelas que crescem de valor fixo (PA), população/dívida que dobra (PG), empilhamentos.`,
    links: [
    ],
  },
  {
    topicSlug: "mat-geometria-analitica",
    titulo: "Geometria analítica",
    resumoMarkdown: `## Geometria analítica

**Começando do zero:** É a geometria feita com **coordenadas** no plano cartesiano — aquele com eixo horizontal (x) e vertical (y). Cada ponto é um par (x, y): o primeiro número diz "quanto anda para o lado" e o segundo "quanto sobe". Serve para calcular distâncias e posições, e aparece ligada a mapas, malhas e GPS.

### As fórmulas

**Distância entre dois pontos** A(x₁, y₁) e B(x₂, y₂) — é o Teorema de Pitágoras aplicado às coordenadas:

> \`d = √[ (x₂ − x₁)² + (y₂ − y₁)² ]\`
> onde d = distância; (x₁, y₁) são as coordenadas do ponto A e (x₂, y₂) as do ponto B.

**Ponto médio** de um segmento (o ponto bem no meio entre A e B):

> \`M = ( (x₁+x₂)/2 , (y₁+y₂)/2 )\`  → tira-se a média dos x e a média dos y.

### Exemplo resolvido 1 (distância)

*Qual a distância entre A(1, 2) e B(4, 6)?*

1. Diferença em x: x₂ − x₁ = 4 − 1 = 3. Diferença em y: y₂ − y₁ = 6 − 2 = 4.
2. d = √(3² + 4²) = √(9 + 16) = √25 = **5**.

### Exemplo resolvido 2 (ponto médio)

*Qual o ponto médio entre A(2, 4) e B(8, 10)?*

M = ( (2+8)/2 , (4+10)/2 ) = ( 10/2 , 14/2 ) = **(5, 7)**.

### Como cai no ENEM
- Aparece menos que as geometrias plana e espacial, quase sempre aplicada a **mapas em malha, deslocamentos ou telas**.
- Saber ler coordenadas e calcular distância/ponto médio entre pontos resolve a maioria.`,
    links: [
      L("Geometria analítica: distância entre pontos — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/distancia-entre-dois-pontos.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-algebra",
    titulo: "Álgebra e equações",
    resumoMarkdown: `## Álgebra e equações

**Começando do zero:** Álgebra é usar **letras no lugar de números desconhecidos** (as incógnitas, normalmente x) para traduzir um problema em conta. No ENEM, o desafio quase nunca é a conta em si — é **montar a equação** a partir do texto.

### Equação do 1º grau

Tem o x sozinho (sem x²). Resolve-se **isolando o x**: o que está somando passa para o outro lado subtraindo; o que está multiplicando passa dividindo.

### Exemplo resolvido 1 (1º grau)

*Resolva: 2x + 6 = 20.*

1. Passe o 6 para o outro lado (estava somando → passa subtraindo): 2x = 20 − 6 = 14.
2. Passe o 2 (estava multiplicando → passa dividindo): x = 14 ÷ 2 = **7**.

### Sistemas (duas incógnitas)

Quando há duas coisas desconhecidas e duas informações. Chamamos cada desconhecida por uma letra e montamos duas equações.

### Exemplo resolvido 2 (sistema)

*Foram vendidos 20 ingressos por R$ 300 no total. O de adulto custa R$ 20 e o de criança R$ 10. Quantos de cada tipo?*

1. Sejam **a** = nº de adultos e **c** = nº de crianças. Duas informações: a + c = 20 e 20a + 10c = 300.
2. Da 1ª equação: c = 20 − a. Substitua na 2ª: 20a + 10(20 − a) = 300.
3. Resolva: 20a + 200 − 10a = 300 → 10a = 100 → a = **10 adultos**. Logo c = 20 − 10 = **10 crianças**.

### Equação do 2º grau (tem x²)

Vem da forma ax² + bx + c = 0 (a, b, c são números dados; a ≠ 0). Resolve-se com Bhaskara:

> \`x = ( −b ± √Δ ) / (2a)\`, onde \`Δ = b² − 4·a·c\`
> **Δ** (delta) é o que fica dentro da raiz; o sinal **±** ("mais ou menos") gera **duas** soluções: uma com + e outra com −.

### Exemplo resolvido 3 (2º grau)

*Resolva: x² − 5x + 6 = 0.*

1. Coeficientes: a = 1, b = −5, c = 6.
2. Δ = b² − 4ac = (−5)² − 4·1·6 = 25 − 24 = 1. Como Δ > 0, há duas soluções. √Δ = √1 = 1.
3. x = (−b ± √Δ)/(2a) = (5 ± 1)/2. Então x = (5+1)/2 = **3** ou x = (5−1)/2 = **2**.

### Como cai no ENEM (e as pegadinhas)
- **A etapa que decide** é traduzir o enunciado: quem é a incógnita? Que relações o texto dá?
- Defina bem "x é o quê" antes de sair calculando — é onde a maioria se perde.`,
    links: [
      L("Equação do 2º grau — Brasil Escola", "https://brasilescola.uol.com.br/matematica/equacao-segundo-grau.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "mat-combinatoria",
    titulo: "Análise combinatória",
    resumoMarkdown: `## Análise combinatória

**Começando do zero:** É a arte de **contar possibilidades** sem listar uma a uma. Sustenta a Probabilidade (aquele "casos possíveis" vem daqui). A pergunta típica: "de quantas maneiras…?".

### O Princípio Fundamental da Contagem (o mais importante)

Se uma decisão tem várias etapas, **multiplique** o número de opções de cada etapa.

**Exemplo básico:** com 3 camisetas e 2 calças, quantos looks diferentes? 3 · 2 = **6 combinações**.

### A pergunta decisiva: a ORDEM importa?

| Caso | A ordem importa? | Exemplo |
|---|---|---|
| **Arranjo / senha** | Sim | senha 123 é diferente de 321 |
| **Combinação** | Não | uma comissão de 3 pessoas (tanto faz a ordem) |
| **Permutação** | Sim, usando todos | anagramas (embaralhar as letras de uma palavra) |

> **Fatorial** (escreve-se n!) = multiplicar de n até 1. Ex.: 4! = 4·3·2·1 = 24. Serve para contar de quantos jeitos ordenar todos os elementos.

### Exemplo resolvido 1 (princípio da contagem / senha)

*Quantas senhas de 3 dígitos diferentes dá para formar com os algarismos de 1 a 5?*

A ordem importa (é senha) e não pode repetir dígito:
- 1ª casa: 5 opções. 2ª casa: sobraram 4. 3ª casa: sobraram 3.
- Multiplique: 5 · 4 · 3 = **60 senhas**.

### Exemplo resolvido 2 (permutação / anagramas)

*Quantos anagramas (embaralhamentos) tem a palavra AMOR (4 letras diferentes)?*

Usa-se todas as 4 letras, e a ordem importa → é 4! = 4·3·2·1 = **24 anagramas**.

### Exemplo resolvido 3 (combinação)

*De um grupo de 5 pessoas, de quantas formas dá para escolher uma comissão de 2 (sem cargos)?*

A ordem NÃO importa (a dupla "João e Ana" é a mesma que "Ana e João"). Combinação de 5, 2 a 2:
- Comece como contagem: 5 · 4 = 20. Mas cada dupla foi contada 2 vezes (nas duas ordens), então divida por 2! = 2.
- 20 ÷ 2 = **10 comissões**.

### Como cai no ENEM (e as pegadinhas)
- **A ordem importa?** Senha/pódio/fila → sim (multiplica direto). Grupo/comissão → não (divida para não contar repetido, como no Exemplo 3).
- Na dúvida, o **princípio multiplicativo** (multiplicar as opções de cada etapa) resolve a maioria.`,
    links: [
      L("Arranjo, permutação e combinação — Mundo Educação", "https://mundoeducacao.uol.com.br/matematica/analise-combinatoria.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "mat-logica",
    titulo: "Raciocínio lógico",
    resumoMarkdown: `## Raciocínio lógico

**Começando do zero:** Menos "fórmula" e mais **organizar informações e testar possibilidades**. A lógica aparece embutida em muitas questões de interpretação e contagem.

### O que costuma cair

- **Sequências e padrões:** descobrir a regra que gera os próximos elementos (números, figuras).
- **Proposições verdadeiro/falso:** afirmações que se combinam com "e", "ou", "se… então", e a **negação** delas.
- **Problemas de "quem é quem":** pistas sobre pessoas/objetos que você cruza numa tabela para eliminar possibilidades.

### A estratégia que resolve quase tudo

1. **Anote as informações** numa tabela ou diagrama — não tente fazer de cabeça.
2. Marque o que é **certamente verdadeiro** e o que é **impossível**.
3. **Teste** uma hipótese e veja se ela gera contradição; se gerar, descarte e tente outra.

### Exemplo resolvido 1 (sequência / padrão)

*Complete: 2, 6, 12, 20, 30, ___. Qual o próximo número?*

1. Veja a diferença entre os termos: 6−2 = 4; 12−6 = 6; 20−12 = 8; 30−20 = 10. As diferenças crescem de 2 em 2.
2. A próxima diferença é 12. Então o próximo termo = 30 + 12 = **42**.

### Exemplo resolvido 2 (condicional "se… então")

*A afirmação "se chove, então a rua fica molhada" é falsa em qual situação?*

Um "se A, então B" só é **falso** num único caso: quando A acontece mas B não. Ou seja: **choveu E a rua NÃO ficou molhada**. Em todos os outros casos a frase é considerada verdadeira. Saber negar um "se… então" é cobrado com frequência.

### Como cai no ENEM
- Geralmente disfarçado: uma tabela de condições, um quebra-cabeça de pistas, um padrão a completar.
- Ganha quem **organiza os dados** com método, em vez de chutar.`,
    links: [
    ],
  },
];
