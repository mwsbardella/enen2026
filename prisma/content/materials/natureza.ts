// Conteúdo de estudo de CIÊNCIAS DA NATUREZA, gerado a partir da engenharia
// reversa das provas (2019–2025). Assuntos da taxonomia, ORDENADOS pela frequência
// real.
//
// Tom DIDÁTICO e do zero: assume que o aluno viu isso há muito tempo. As partes
// de Física e Química trazem as FÓRMULAS explicadas termo a termo e VÁRIOS
// EXEMPLOS RESOLVIDOS passo a passo; a Biologia foca em explicar os processos com
// clareza, com exemplos aplicados. Fórmulas em texto simples: · = multiplicar,
// / = dividir, Δ = variação ("o quanto mudou"), ² = ao quadrado, ≈ = aproximado.

import type { MaterialSeed } from "./humanas";

const L = (titulo: string, url: string, fonte: string) => ({ titulo, url, fonte });

export const naturezaMateriais: MaterialSeed[] = [
  {
    topicSlug: "nat-mecanica",
    titulo: "Física: Mecânica",
    resumoMarkdown: `## Física: Mecânica

**Começando do zero:** Mecânica é a Física do **movimento e das forças** — carros, quedas, esportes, máquinas. É a parte que mais cai. Vamos por partes.

### 1) Cinemática — descrever o movimento

- **Velocidade média** = quanto de distância se percorre por unidade de tempo:
> \`v = Δs / Δt\`  → v = velocidade, Δs ("delta s") = distância percorrida, Δt ("delta t") = tempo gasto. O símbolo **Δ** (delta) significa "variação", isto é, "quanto mudou".

- **Aceleração** = quanto a velocidade muda a cada segundo:
> \`a = Δv / Δt\`  → a = aceleração, Δv = variação da velocidade, Δt = tempo.

> Converter velocidade: de **km/h para m/s divida por 3,6**; de m/s para km/h, multiplique por 3,6.

### Exemplo resolvido 1 (velocidade média)

*Um carro percorre 100 km em 2 horas. Qual a velocidade média?*

v = Δs / Δt = 100 ÷ 2 = **50 km/h**.

### 2) Leis de Newton — por que o movimento muda

1. **Inércia:** sem força resultante, o corpo mantém o que estava fazendo (parado ou em linha reta e velocidade constante). É por isso que você é jogado para frente numa freada.
2. **Força resultante:** \`F = m · a\` → F = força (em newtons, N), m = massa (kg), a = aceleração (m/s²). Quanto maior a massa, mais força para acelerar.
3. **Ação e reação:** toda força vem acompanhada de uma força igual e contrária (você empurra a parede, ela empurra você).

O **peso** é a força com que a gravidade puxa a massa: \`P = m · g\` → P = peso (N), m = massa (kg), g = aceleração da gravidade ≈ 10 m/s² na Terra.

### Exemplo resolvido 2 (Segunda Lei de Newton)

*Que força faz um carrinho de 4 kg acelerar a 3 m/s²?*

F = m · a = 4 · 3 = **12 N** (newtons).

### 3) Energia e trabalho — a chave de muitas questões

- **Energia cinética** (a energia do movimento): \`Ec = (m · v²) / 2\` → m = massa, v = velocidade.
- **Energia potencial gravitacional** (a energia "guardada" pela altura): \`Ep = m · g · h\` → h = altura, g ≈ 10 m/s².
- **Conservação da energia mecânica:** sem atrito, a soma Ec + Ep se **mantém constante**. Ao cair, a energia da altura (potencial) vai virando energia de movimento (cinética).

### Exemplo resolvido 3 (conservação de energia)

*Um objeto é solto do repouso de 5 m de altura. Com que velocidade chega ao chão? (g = 10 m/s²)*

1. Ao cair, toda a energia potencial vira cinética: m·g·h = (m·v²)/2.
2. A massa (m) aparece nos dois lados e se cancela: g·h = v²/2.
3. Substitua: 10·5 = v²/2 → 50 = v²/2 → v² = 100 → v = √100 = **10 m/s**.

(Repare: a massa não importa — por isso uma pedra e uma pena cairiam juntas se não houvesse ar.)

### Como cai no ENEM (e as pegadinhas)
- Muitas questões saem por **conservação de energia** (Exemplo 3) ou por **leitura de gráfico** (posição × tempo, velocidade × tempo).
- Cuidado com **unidades** (m/s × km/h) e em separar o que é **dado** do que é **pedido**.`,
    links: [
      L("Energia mecânica — Mundo Educação", "https://mundoeducacao.uol.com.br/fisica/energia-mecanica.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-fisico-quimica",
    titulo: "Físico-química",
    resumoMarkdown: `## Físico-química

**Começando do zero:** Bloco de Química campeão de incidência. Antes das fórmulas, um conceito que sustenta tudo: o **mol**.

> **Mol** é só um "número grande padrão" para contar partículas (como "dúzia" é 12). 1 mol = 6,02 · 10²³ partículas. A **massa molar** (em g/mol) é quanto pesa 1 mol de uma substância — obtém-se somando as massas atômicas da tabela periódica.

### 1) Concentração de soluções

Uma solução é o **soluto** (o que se dissolve, ex.: sal) dentro de um **solvente** (ex.: água).

> **Concentração comum:** \`C = m / V\`  → C = concentração (g/L), m = massa do soluto (g), V = volume da solução (L).
> **Concentração molar (molaridade):** \`M = n / V\`  → M = molaridade (mol/L), n = quantidade em mols do soluto, V = volume (L).

### Exemplo resolvido 1 (concentração comum)

*Dissolvem-se 20 g de sal em água até completar 2 litros de solução. Qual a concentração?*

C = m / V = 20 ÷ 2 = **10 g/L** (há 10 gramas de sal em cada litro).

### Exemplo resolvido 2 (diluição)

*Você tem 1 L de suco a 40 g/L e adiciona água até 4 L. Qual a nova concentração?*

Na diluição a quantidade de soluto não muda, então vale \`C₁ · V₁ = C₂ · V₂\` (índice 1 = antes, índice 2 = depois):
1. 40 · 1 = C₂ · 4 → 40 = 4·C₂.
2. C₂ = 40 ÷ 4 = **10 g/L**. (Colocar mais água diluiu, baixando a concentração.)

### 2) pH — quão ácido ou básico

A escala de pH vai de 0 a 14:
- **pH < 7 → ácido** (limão, vinagre); **pH = 7 → neutro** (água pura); **pH > 7 → básico/alcalino** (sabão, leite de magnésia).
- Quanto **menor** o pH, mais ácido. Cada unidade a menos é 10 vezes mais ácido (pH 3 é 10× mais ácido que pH 4, e 100× mais que pH 5).

### 3) Termoquímica — calor nas reações

- **Exotérmica:** **libera** calor (combustão, queima). A variação de entalpia é negativa (ΔH < 0). "Exo" = para fora.
- **Endotérmica:** **absorve** calor do ambiente (esfria em volta). ΔH > 0. "Endo" = para dentro.

### 4) Cinética — velocidade da reação

O que **acelera** uma reação: **aumentar** a temperatura, a concentração ou a superfície de contato (pó reage mais rápido que um pedaço inteiro), ou usar um **catalisador** (acelera a reação sem ser consumido).

### 5) Equilíbrio químico (Princípio de Le Chatelier)

Numa reação que vai e volta ao mesmo tempo, se você "perturba" o sistema (muda temperatura, pressão ou concentração), o equilíbrio se **desloca** para o lado que compensa a mudança.

### Como cai no ENEM
- Parte de um contexto (reação industrial, alimento, ambiente) e pede um cálculo de **concentração/pH** ou o porquê de a reação **acelerar/deslocar**. Domine **mol**, **concentração** e **diluição** — são a base de tudo.`,
    links: [
    ],
  },
  {
    topicSlug: "nat-termologia",
    titulo: "Física: Termologia e energia",
    resumoMarkdown: `## Física: Termologia e energia

**Começando do zero:** Termologia estuda **calor e temperatura** — que são coisas diferentes! **Temperatura** mede o grau de agitação das partículas; **calor** é a energia que **flui** do corpo mais quente para o mais frio até os dois ficarem na mesma temperatura.

### Escalas de temperatura

> Celsius → Kelvin: \`K = °C + 273\`. (Kelvin é a escala "absoluta" usada na ciência; 0 °C = 273 K.)

### Exemplo resolvido 1 (Kelvin)

*Quanto é 25 °C na escala Kelvin?* → K = 25 + 273 = **298 K**.

### Calor sensível — esquenta/esfria SEM mudar de estado

> \`Q = m · c · ΔT\`

- **Q** = quantidade de calor (em calorias, cal, ou joules, J)
- **m** = massa (g)
- **c** = calor específico, uma característica de cada material (o da água é 1 cal/g°C)
- **ΔT** = variação de temperatura = temperatura final − temperatura inicial

### Exemplo resolvido 2 (calor sensível)

*Quanto calor para aquecer 200 g de água de 20 °C até 80 °C? (c da água = 1 cal/g°C)*

1. ΔT = final − inicial = 80 − 20 = 60 °C.
2. Q = m · c · ΔT = 200 · 1 · 60 = **12.000 calorias**.

### Calor latente — MUDA de estado (sem mudar a temperatura)

Enquanto uma substância derrete ou ferve, a temperatura fica **parada** — todo o calor é usado para quebrar as ligações e mudar o estado:
> \`Q = m · L\`  → L = calor latente, característico de cada mudança de estado (fusão, vaporização).

### As 3 formas de o calor se propagar

| Forma | Como | Exemplo |
|---|---|---|
| **Condução** | de partícula a partícula, sobretudo em sólidos | o cabo de metal da panela esquenta |
| **Convecção** | por correntes em líquidos e gases | o ar-condicionado fica no alto (o ar frio desce) |
| **Radiação** | por ondas, sem precisar de meio material | o calor do Sol chega à Terra pelo vácuo |

### Como cai no ENEM
- Situações de aquecimento de água, isolamento térmico, motores e eficiência energética.
- Costuma cobrar **trocas de calor** (Q = m·c·ΔT, Exemplo 2) ou identificar o **tipo de propagação**. Liga-se a sustentabilidade e consumo de energia.`,
    links: [
    ],
  },
  {
    topicSlug: "nat-organica",
    titulo: "Química orgânica",
    resumoMarkdown: `## Química orgânica

**Começando do zero:** É a química do **carbono** — o átomo que forma as moléculas da vida e dos combustíveis, plásticos, alimentos e remédios. O carbono é especial porque faz **4 ligações** e se encadeia em longas correntes, formando milhões de compostos diferentes.

### Funções orgânicas — reconhecer pelo "grupo funcional"

Cada função tem um grupinho de átomos característico. Reconhecê-lo na estrutura já resolve boa parte das questões. (Nas fórmulas: C = carbono, H = hidrogênio, O = oxigênio, N = nitrogênio.)

| Função | Grupo característico | Exemplo do dia a dia |
|---|---|---|
| Hidrocarboneto | só C e H | gás de cozinha, gasolina |
| Álcool | — OH (hidroxila) | etanol (o "álcool") |
| Ácido carboxílico | — COOH | vinagre (ácido acético) |
| Éster | — COO — | aromas de frutas, essências |
| Aldeído / Cetona | — CHO / C=O | acetona (removedor de esmalte) |
| Amina | — NH₂ | proteínas, alguns remédios |

### Reações que mais aparecem

- **Combustão:** hidrocarboneto + O₂ → CO₂ + H₂O + energia (é o que acontece ao queimar um combustível).
- **Esterificação:** ácido + álcool → éster + água (é o que produz os aromas artificiais).
- **Saponificação:** gordura + base → sabão (a base da fabricação de sabão).
- **Polimerização:** muitas moléculas pequenas (os **monômeros**) se unem numa molécula gigante (o **polímero**) — plásticos, PET, biopolímeros.

### Exemplo aplicado (como identificar na prova)

*A prova mostra uma molécula com o grupo — OH ligado a uma cadeia de carbonos e pergunta a função.* → O grupo — OH é a marca do **álcool**. Se fosse — COOH, seria ácido carboxílico. Basta caçar o grupo funcional na figura.

### Como cai no ENEM
- Mostra uma estrutura ou um contexto (um combustível, um aroma, um plástico) e pede a **função orgânica**, o **produto** de uma reação ou uma **propriedade**.
- Muito ligado a **etanol e biocombustíveis**, fármacos e materiais. Saber **reconhecer os grupos funcionais** é a habilidade-chave.`,
    links: [
      L("Funções orgânicas — Mundo Educação", "https://mundoeducacao.uol.com.br/quimica/funcoes-organicas.htm", "Mundo Educação"),
      L("Química orgânica — Brasil Escola", "https://brasilescola.uol.com.br/quimica/quimica-organica.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-eletricidade",
    titulo: "Física: Eletricidade e magnetismo",
    resumoMarkdown: `## Física: Eletricidade e magnetismo

**Começando do zero:** O campeão aqui é o **consumo de energia elétrica** — a conta de luz. Primeiro, as três grandezas de um circuito:

- **Tensão (U)** = a "força" que empurra a corrente, medida em volts (V). É a "pressão" da tomada (110 V, 220 V).
- **Corrente (i)** = o fluxo de carga elétrica que passa, medida em ampères (A).
- **Resistência (R)** = o quanto o material dificulta a passagem da corrente, medida em ohms (Ω).

### Lei de Ohm

> \`U = R · i\`  → U = tensão (V), R = resistência (Ω), i = corrente (A).

### Exemplo resolvido 1 (Lei de Ohm)

*Um chuveiro tem resistência de 11 Ω ligado numa tomada de 220 V. Qual a corrente que passa?*

Da fórmula U = R · i, isole i: i = U / R = 220 ÷ 11 = **20 A** (ampères).

### Potência e consumo (o que mais cai)

- **Potência elétrica** = energia gasta por segundo, em watts (W):
> \`P = U · i\`  → P = potência (W).

- **Energia consumida** = potência × tempo. A conta de luz cobra em **quilowatt-hora (kWh)**:
> \`Energia (kWh) = P (kW) · t (h)\`  → potência em quilowatts vezes tempo em horas.

> Atenção às unidades: 1 kW = 1000 W. Um chuveiro de 5000 W = 5 kW.

### Exemplo resolvido 2 (conta de luz)

*Um chuveiro de 5000 W é usado 1 hora por dia, por 30 dias. Se o kWh custa R$ 0,60, qual o gasto no mês?*

1. Potência em kW: 5000 W ÷ 1000 = 5 kW.
2. Tempo total no mês: 1 h/dia · 30 dias = 30 h.
3. Energia: 5 kW · 30 h = **150 kWh**.
4. Custo: 150 · 0,60 = **R$ 90,00**.

### Associação de resistores (nível básico)

- **Em série** (um após o outro, no mesmo fio): as resistências **somam** (R = R₁ + R₂).
- **Em paralelo** (lado a lado, em fios separados): a resistência total **diminui** (fica menor que a menor delas).

### Como cai no ENEM
- Quase sempre uma situação de **consumo**: calcular kWh, o custo na conta, ou qual aparelho gasta mais. Domine **potência × tempo × tarifa** e as unidades (W, kW, kWh).`,
    links: [
      L("Potência elétrica e consumo (kWh) — Brasil Escola", "https://brasilescola.uol.com.br/fisica/potencia-eletrica.htm", "Brasil Escola"),
      L("Lei de Ohm e circuitos — Mundo Educação", "https://mundoeducacao.uol.com.br/fisica/lei-ohm.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-genetica",
    titulo: "Biologia: Genética e evolução",
    resumoMarkdown: `## Biologia: Genética e evolução

**Começando do zero:** Genética explica *como as características passam de pais para filhos* — a cor dos olhos, o tipo sanguíneo, uma doença de família. Evolução explica *por que existe tanta variedade de seres vivos* e como as espécies foram mudando ao longo de muitíssimo tempo. As duas andam juntas: aquilo que se herda é a matéria-prima sobre a qual a evolução trabalha.

### Genética — os termos, do zero

- **Gene** = um trecho do DNA com a "receita" de uma característica (cor dos olhos, tipo sanguíneo).
- **Alelo** = as versões possíveis de um gene. Costuma-se escrever um **dominante** com letra maiúscula (ex.: A) e um **recessivo** com minúscula (a).
- **Dominante** = aparece mesmo com uma só cópia; **recessivo** = só se manifesta com as duas cópias iguais (aa).
- **Genótipo** = as letras/genes que a pessoa carrega (AA, Aa ou aa). **Fenótipo** = a característica que de fato aparece (o que se vê).

### Leis de Mendel e o cruzamento

No cruzamento de dois híbridos **Aa × Aa**, monte o "quadro de Punnett" combinando os alelos:

| | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

Resultado: 1 AA, 2 Aa, 1 aa → proporção **3 dominantes : 1 recessivo**. Como são 4 casos, isso equivale a **75% dominante e 25% recessivo**. Aqui a genética encontra a **probabilidade** — por isso conecta com a Matemática.

### Exemplo resolvido (probabilidade genética)

*Dois pais Aa × Aa. Qual a chance de um filho ter a característica recessiva (aa)?*

1. No quadro acima, o genótipo aa aparece em 1 dos 4 quadrados.
2. Probabilidade = 1/4 = **25%**.

### Evolução — por que a vida é tão diversa

- **Seleção natural (Darwin):** no ambiente, os indivíduos mais **adaptados** sobrevivem e deixam mais descendentes; ao longo das gerações, a espécie muda. Não é "força de vontade": é sobrevivência diferencial.
- **Adaptação:** uma característica que dá vantagem naquele ambiente.
- **Ancestralidade comum:** espécies parecidas descendem de um ancestral comum (evidências: fósseis, semelhanças anatômicas, DNA).

### Como cai no ENEM
- Um **heredograma** (árvore genealógica) ou um cruzamento pedindo a **probabilidade** de um filho ter certa característica (Exemplo acima).
- Um texto sobre **evolução ou biotecnologia** (transgênicos, clonagem, teste de DNA) pedindo o conceito correto. Cuidado para não confundir seleção natural com "adaptação por esforço" (a ideia errada, atribuída a Lamarck).`,
    links: [
    ],
  },
  {
    topicSlug: "nat-ondas",
    titulo: "Física: Ondas, óptica e som",
    resumoMarkdown: `## Física: Ondas, óptica e som

**Começando do zero:** Uma **onda** transporta energia sem transportar matéria (a rolha na água sobe e desce, mas não viaja junto com a onda). Luz, som, rádio e micro-ondas são todos ondas.

### As grandezas de uma onda

- **Comprimento de onda (λ, lê-se "lambda")** = a distância de uma crista (topo) até a próxima crista, em metros.
- **Frequência (f)** = quantas ondas passam por segundo, medida em hertz (Hz).
- **Velocidade (v)** = quão rápido a onda se propaga, em m/s.

> A equação fundamental: \`v = λ · f\`  → velocidade = comprimento de onda × frequência.

### Exemplo resolvido 1 (som)

*Um som tem frequência de 340 Hz e se propaga no ar a 340 m/s. Qual o comprimento de onda?*

Da fórmula v = λ · f, isole λ: λ = v / f = 340 ÷ 340 = **1 metro**.

### Exemplo resolvido 2 (rádio)

*Uma emissora transmite com comprimento de onda de 3 m. Sabendo que ondas de rádio viajam a 3·10⁸ m/s (velocidade da luz), qual a frequência?*

f = v / λ = (3·10⁸) ÷ 3 = 10⁸ Hz = **100 MHz** (megahertz) — a faixa do rádio FM.

### Tipos de onda

- **Mecânicas** (precisam de um meio material para viajar): som, ondas do mar, ondas numa corda. Por isso **não existe som no vácuo**.
- **Eletromagnéticas** (viajam até no vácuo): luz, rádio, micro-ondas, raio-X. Todas com a mesma velocidade no vácuo (~300.000 km/s).

### Som (acústica)

- **Altura:** se o som é grave ou agudo (depende da **frequência**).
- **Intensidade:** o volume, se é forte ou fraco.
- **Timbre:** o que faz distinguir um piano de um violão tocando a mesma nota.

### Óptica (luz)

- **Reflexão:** a luz "bate e volta" (espelhos).
- **Refração:** a luz "entorta" ao mudar de meio (a colher que parece quebrada dentro do copo d'água).
- **Lentes:** desviam a luz e formam imagens (óculos, lupas, câmeras).

### Como cai no ENEM
- Uma situação com luz, som ou comunicação (rádio, micro-ondas, fibra óptica) pedindo a relação entre **frequência, comprimento de onda e velocidade** — a fórmula **v = λ·f** resolve muita questão (Exemplos 1 e 2) — ou identificar o fenômeno óptico (reflexão × refração).`,
    links: [
      L("Reflexão e refração da luz — Brasil Escola", "https://brasilescola.uol.com.br/fisica/optica.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-fisiologia",
    titulo: "Biologia: Fisiologia e corpo humano",
    resumoMarkdown: `## Biologia: Fisiologia e corpo humano

**Começando do zero:** Fisiologia é o estudo de **como o corpo funciona**. No ENEM vem muito ligada à **saúde pública** e às doenças.

### Os sistemas e o que fazem (visão de conjunto)

| Sistema | Função central |
|---|---|
| Digestório | quebra o alimento e absorve os nutrientes |
| Respiratório | leva O₂ (oxigênio) ao sangue e elimina CO₂ (gás carbônico) |
| Circulatório | o coração bombeia o sangue com O₂ e nutrientes para o corpo |
| Nervoso | capta os estímulos e comanda as respostas |
| Endócrino | os hormônios regulam o corpo (insulina, adrenalina) |

Eles **trabalham integrados**: o respiratório capta o O₂, o circulatório o distribui, e as células o usam para gerar energia (respiração celular).

### Doenças e imunidade (o que mais cai)

- **Agentes causadores:** vírus (dengue, covid, HIV), bactérias (tuberculose), protozoários (malária), vermes.
- **Formas de transmissão:** pelo ar, por água/alimento contaminado, por vetores (o mosquito), por contato/sexual.
- **Sistema imune:** defende o corpo; produz **anticorpos** (proteínas que reconhecem e neutralizam o invasor).
- **Vacina × antibiótico (não confunda):** a **vacina** treina o sistema imune com uma versão inofensiva do agente, para o corpo reagir rápido numa infecção futura — é **prevenção**. O **antibiótico** combate bactérias numa infecção que já existe — é **tratamento**, e não funciona contra vírus.

### Exemplo aplicado (como a banca cobra)

*Um texto diz que uma campanha vacinou a população contra o sarampo e pergunta o efeito.* → A vacina faz o corpo produzir **anticorpos** e "memória imunológica" **antes** do contato com o vírus real, prevenindo a doença e, em escala coletiva, reduzindo a circulação do agente. A resposta certa liga vacina a **prevenção e imunidade**, não a "cura".

### Como cai no ENEM
- Um texto sobre uma **doença, vacina ou processo do corpo** pedindo o mecanismo correto: como o sistema imune age, como a doença se transmite, como se previne.
- Conecta-se a **cidadania e políticas de saúde** (saneamento, campanhas de vacinação, SUS).`,
    links: [
    ],
  },
  {
    topicSlug: "nat-quimica-ambiental",
    titulo: "Química e meio ambiente",
    resumoMarkdown: `## Química e meio ambiente

**Começando do zero:** É a química por trás dos problemas ambientais — um dos temas mais interdisciplinares (liga-se à Geografia e à redação). (Nas fórmulas: CO₂ = gás carbônico, CH₄ = metano, O₂ = oxigênio.)

### Poluição do ar e efeito estufa

- **Efeito estufa:** gases como o **CO₂** (gás carbônico) e o **CH₄** (metano) retêm parte do calor na atmosfera. Ele é natural e necessário — sem ele a Terra seria congelante. O problema é o **excesso**, causado pela queima de combustíveis fósseis, que intensifica o aquecimento global.
- **Chuva ácida:** gases de enxofre e nitrogênio (soltos por indústrias e carros) reagem com a água da chuva formando ácidos, que corroem plantas e construções e acidificam os rios.

### Combustíveis: fósseis × renováveis

| Tipo | Exemplos | Característica |
|---|---|---|
| Fósseis | petróleo, carvão, gás natural | esgotáveis; liberam muito CO₂ |
| Biocombustíveis | etanol (da cana), biodiesel | renováveis; parte do CO₂ liberado é reabsorvido pelas plantas que crescem |

### Tratamento e sustentabilidade

- Tratamento de **água** (para deixá-la potável) e de **esgoto/efluentes** (antes de devolvê-los ao ambiente).
- **Reciclagem** e a lógica dos 3 Rs (Reduzir, Reutilizar, Reciclar); **química verde** (processos industriais menos poluentes).

### Exemplo aplicado (como a banca cobra)

*Um texto compara etanol e gasolina e pergunta por que o etanol é considerado menos agressivo ao clima.* → Porque a cana absorve CO₂ enquanto cresce (fotossíntese), compensando parte do CO₂ liberado na queima — o "balanço" de carbono é menor que o da gasolina, um combustível fóssil.

### Como cai no ENEM
- Um problema ambiental real pedindo a **explicação química** (por que tal gás causa efeito estufa, como tratar um efluente) ou a alternativa mais **sustentável**.
- Liga-se diretamente à Geografia ambiental e é ótima fonte de repertório para a redação.`,
    links: [
    ],
  },
  {
    topicSlug: "nat-citologia",
    titulo: "Biologia: Citologia e bioquímica",
    resumoMarkdown: `## Biologia: Citologia e bioquímica

**Começando do zero:** Citologia é o estudo da **célula**, a menor unidade viva — o "tijolinho" de todos os seres vivos. Toda a Biologia parte daqui.

### A célula e suas organelas

As **organelas** são as "peças internas" da célula, cada uma com uma função:

| Parte | Função |
|---|---|
| Membrana | controla o que entra e sai da célula |
| Citoplasma | o "gel" onde ficam as organelas |
| Núcleo | guarda o DNA (o "comando" da célula) |
| Mitocôndria | faz a **respiração celular** (produz energia) |
| Cloroplasto (só em vegetais) | faz a **fotossíntese** |
| Ribossomo | monta as proteínas |

> **Procarionte × eucarionte:** a célula procarionte (bactéria) **não** tem núcleo separado por membrana; a eucarionte (plantas, animais, fungos) tem o núcleo delimitado por membrana. É uma diferença muito cobrada.

### Os dois processos de energia (a dupla que mais cai)

- **Fotossíntese** (nas plantas, no cloroplasto): usa **luz + CO₂ + água** para produzir **glicose (açúcar) + O₂**. É a planta "fabricando o próprio alimento" e liberando oxigênio.
- **Respiração celular** (em quase todos os seres, na mitocôndria): usa **glicose + O₂** para liberar **energia + CO₂ + água**. É o processo inverso — "queima" o alimento para obter energia.

Repare que uma é praticamente o inverso da outra, e juntas mantêm o ciclo do carbono e do oxigênio no planeta.

### Biomoléculas (os "materiais" da vida)

- **Carboidratos:** energia rápida (açúcares, amido).
- **Lipídios:** reserva de energia e formam as membranas (gorduras, óleos).
- **Proteínas:** dão estrutura e atuam como **enzimas** (moléculas que aceleram as reações do corpo).
- **Ácidos nucleicos:** DNA e RNA (guardam a informação genética).

### Como cai no ENEM
- Um processo celular (fotossíntese, respiração, ação de uma enzima) pedindo a **organela** ou a **etapa** responsável, ou a **relação** entre fotossíntese e respiração (uma produz o que a outra consome).`,
    links: [
      L("Fotossíntese e respiração celular — Mundo Educação", "https://mundoeducacao.uol.com.br/biologia/fotossintese.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-quimica-geral",
    titulo: "Química geral e estequiometria",
    resumoMarkdown: `## Química geral e estequiometria

**Começando do zero:** Aqui estão os fundamentos da Química: do que é feito um átomo até como calcular as quantidades de uma reação (a estequiometria). É a base que sustenta todos os outros temas de Química.

### Átomo e tabela periódica

- O átomo tem um **núcleo** (com prótons, de carga positiva, e nêutrons, sem carga) e **elétrons** (carga negativa) girando em volta.
- A **tabela periódica** organiza os elementos; a posição indica propriedades (metais, não metais, reatividade). A **massa atômica** de cada elemento está ali — você vai usá-la nos cálculos.

### Ligações químicas — como os átomos se unem

| Ligação | Como acontece | Exemplo |
|---|---|---|
| Iônica | um átomo **doa** elétron a outro (metal + não metal) | sal de cozinha (NaCl) |
| Covalente | os átomos **compartilham** elétrons (não metais entre si) | água (H₂O) |
| Metálica | elétrons "livres" circulam entre os metais | ferro, cobre (por isso conduzem eletricidade) |

### O mol e a massa molar

> **Mol** = um pacote padrão de 6,02·10²³ partículas. A **massa molar** (g/mol) é a soma das massas atômicas da fórmula.

### Exemplo resolvido 1 (massa molar)

*Qual a massa molar da água (H₂O)? (massas atômicas: H = 1, O = 16)*

São 2 hidrogênios e 1 oxigênio: 2·1 + 1·16 = 2 + 16 = **18 g/mol**. Ou seja, 1 mol de água pesa 18 g.

### Estequiometria — as "contas de receita" da reação

A equação química **balanceada** dá a **proporção** entre os participantes, como uma receita. Ex.:

> \`2 H₂ + 1 O₂ → 2 H₂O\`

Lê-se: 2 mols de gás hidrogênio reagem com 1 mol de gás oxigênio e produzem 2 mols de água. Balancear significa deixar o **mesmo número de átomos** de cada elemento nos dois lados (lei da conservação da massa: nada se perde).

### Exemplo resolvido 2 (estequiometria com regra de três)

*Na reação 2 H₂ + O₂ → 2 H₂O, quantos mols de água se formam a partir de 5 mols de H₂?*

1. A proporção da equação é: 2 mols de H₂ produzem 2 mols de água (ou seja, 1 para 1).
2. Regra de três: 2 H₂ → 2 H₂O; 5 H₂ → x. Então x = (5 · 2) ÷ 2 = **5 mols de água**.

### Como cai no ENEM
- Uma reação em contexto pedindo **quanto se forma/consome** (estequiometria via regra de três, Exemplo 2) ou uma propriedade explicada pela **ligação/estrutura**. O **conceito de mol** e a leitura da tabela periódica são a base de tudo.`,
    links: [
      L("Estequiometria e mol — Mundo Educação", "https://mundoeducacao.uol.com.br/quimica/estequiometria.htm", "Mundo Educação"),
      L("Ligações químicas — Brasil Escola", "https://brasilescola.uol.com.br/quimica/ligacoes-quimicas.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-ecologia",
    titulo: "Biologia: Ecologia",
    resumoMarkdown: `## Biologia: Ecologia

**Começando do zero:** Ecologia estuda as **relações entre os seres vivos e o ambiente**. É um tema-ponte com a Geografia e a sustentabilidade.

### Cadeia alimentar e fluxo de energia

Quem come quem, e por onde a energia passa:
- **Produtores:** plantas e algas (fazem fotossíntese e produzem o próprio alimento). São a base de tudo.
- **Consumidores:** herbívoros (consumidores primários), depois carnívoros (secundários, terciários…).
- **Decompositores:** fungos e bactérias (reciclam a matéria morta de volta ao solo).

> A energia **diminui** a cada nível (só cerca de 10% passa para o nível seguinte) — por isso há mais plantas do que herbívoros, e mais herbívoros do que grandes predadores (é a **pirâmide de energia**).

### Exemplo aplicado (fluxo de energia)

*Se os produtores de um ecossistema captam 10.000 unidades de energia, quanta chega, aproximadamente, aos consumidores primários (herbívoros)?* → Passa ~10% de um nível para o outro: 10% de 10.000 = **1.000 unidades**. Aos carnívoros seguintes chegariam ~100. Isso mostra por que topos de cadeia são poucos.

### Ciclos biogeoquímicos

A matéria (água, carbono, nitrogênio) **circula** e é reaproveitada — diferente da energia, que se dissipa como calor. Ex.: o carbono passa do ar (CO₂) para as plantas (fotossíntese), depois aos animais, e volta ao ar pela respiração e pela decomposição.

### Relações ecológicas

- **Harmônicas** (ninguém sai prejudicado): mutualismo (os dois ganham), colônias.
- **Desarmônicas** (alguém perde): predação, competição, parasitismo.

### Impactos ambientais

- **Bioacumulação:** um poluente (ex.: mercúrio) se **concentra** cada vez mais ao subir na cadeia — o predador do topo recebe a maior dose. Explica a contaminação em peixes grandes.
- **Espécies invasoras** e **perda de biodiversidade** desequilibram o ecossistema.

### Como cai no ENEM
- Um ecossistema ou cadeia alimentar pedindo o **efeito de uma alteração** (remover um nível, introduzir um poluente que se acumula). A resposta certa segue o **fluxo de energia/matéria** e suas consequências.`,
    links: [
      L("Cadeia e teia alimentar — Brasil Escola", "https://brasilescola.uol.com.br/biologia/cadeia-alimentar.htm", "Brasil Escola"),
      L("Ciclos biogeoquímicos — Mundo Educação", "https://mundoeducacao.uol.com.br/biologia/ciclos-biogeoquimicos.htm", "Mundo Educação"),
    ],
  },
];
