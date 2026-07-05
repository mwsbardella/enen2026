// Conteúdo de estudo de CIÊNCIAS DA NATUREZA, gerado a partir da engenharia
// reversa das provas (2019–2025). Assuntos da taxonomia, ORDENADOS pela frequência
// real.
//
// Tom DIDÁTICO e do zero: assume que o aluno viu isso há muito tempo. As partes
// de Física e Química trazem as FÓRMULAS explicadas termo a termo e EXEMPLOS
// RESOLVIDOS passo a passo; a Biologia foca em explicar os processos com clareza.
// Fórmulas em texto simples: · = multiplicar, / = dividir, Δ = variação ("o
// quanto mudou"), ² = ao quadrado.

import type { MaterialSeed } from "./humanas";

const L = (titulo: string, url: string, fonte: string) => ({ titulo, url, fonte });

export const naturezaMateriais: MaterialSeed[] = [
  {
    topicSlug: "nat-mecanica",
    titulo: "Física: Mecânica",
    resumoMarkdown: `## Física: Mecânica

Mecânica é a Física do **movimento e das forças** — carros, quedas, esportes, máquinas. É a parte que mais cai. Vamos por partes.

### 1) Cinemática — descrever o movimento

- **Velocidade média** = quanto de distância percorrida por unidade de tempo:
> \`v = Δs / Δt\`  (Δs = distância percorrida, Δt = tempo gasto)

- **Aceleração** = quanto a velocidade muda por segundo:
> \`a = Δv / Δt\`

**Exemplo:** um carro percorre 100 km em 2 h. Velocidade média = 100 / 2 = **50 km/h**.

> Converter velocidade: de **km/h para m/s divida por 3,6**; o contrário, multiplique por 3,6.

### 2) Leis de Newton — por que o movimento muda

1. **Inércia:** sem força resultante, o corpo mantém o que estava fazendo (parado ou em linha reta). É por isso que você é jogado para frente numa freada.
2. **Força resultante:** \`F = m · a\` (força = massa · aceleração). Quanto maior a massa, mais força para acelerar.
3. **Ação e reação:** toda força tem uma força igual e contrária (você empurra a parede, ela empurra você).

O **peso** é a força da gravidade sobre a massa: \`P = m · g\`, com g ≈ 10 m/s² na Terra.

### 3) Energia e trabalho — a chave de muitas questões

- **Energia cinética** (do movimento): \`Ec = (m · v²) / 2\`
- **Energia potencial gravitacional** (da altura): \`Ep = m · g · h\`
- **Conservação da energia mecânica:** na ausência de atrito, a soma Ec + Ep se **mantém**. Ao cair, a energia de altura vira energia de movimento.

**Exemplo (conservação):** um objeto é solto de 5 m de altura. Com que velocidade chega ao chão? (g = 10)
Toda Ep vira Ec: m·g·h = (m·v²)/2 → g·h = v²/2 → 10·5 = v²/2 → v² = 100 → v = **10 m/s**. (A massa se cancela!)

### Como cai no ENEM (e as pegadinhas)
- Muitas questões saem por **conservação de energia** ou por **leitura de gráfico** (posição × tempo, velocidade × tempo).
- Cuidado com **unidades** (m/s × km/h) e em separar o que é **dado** do que é **pedido**.`,
    links: [
      L("Leis de Newton — Brasil Escola", "https://brasilescola.uol.com.br/fisica/as-leis-newton.htm", "Brasil Escola"),
      L("Energia mecânica — Mundo Educação", "https://mundoeducacao.uol.com.br/fisica/energia-mecanica.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-fisico-quimica",
    titulo: "Físico-química",
    resumoMarkdown: `## Físico-química

Bloco de Química campeão de incidência. Antes das fórmulas, um conceito que sustenta tudo: o **mol**.

> **Mol** é só um "número grande padrão" para contar partículas (como "dúzia" é 12). 1 mol = 6,02 · 10²³ partículas. A **massa molar** (g/mol) é quanto pesa 1 mol de uma substância — lê-se na tabela periódica.

### 1) Concentração de soluções

Uma solução é soluto (o que dissolve, ex.: sal) dentro de um solvente (ex.: água).

> **Concentração comum:** \`C = massa do soluto / volume da solução\`  (g/L)
> **Concentração molar (molaridade):** \`M = mols do soluto / volume (L)\`  (mol/L)

**Exemplo:** 20 g de sal em 2 L de água. C = 20 / 2 = **10 g/L**.

**Diluição** (adicionar água): a quantidade de soluto não muda, então \`C₁ · V₁ = C₂ · V₂\`.

### 2) pH — quão ácido ou básico

A escala de pH vai de 0 a 14:
- **pH < 7 → ácido** (limão, vinagre); **pH = 7 → neutro** (água pura); **pH > 7 → básico/alcalino** (sabão, leite de magnésia).
- Quanto **menor** o pH, mais ácido. Cada unidade é 10 vezes (pH 3 é 10× mais ácido que pH 4).

### 3) Termoquímica — calor nas reações

- **Exotérmica:** **libera** calor (combustão, queima). A entalpia varia negativa (ΔH < 0).
- **Endotérmica:** **absorve** calor do ambiente (esfria). ΔH > 0.

### 4) Cinética — velocidade da reação

O que **acelera** uma reação: **aumentar** a temperatura, a concentração, a superfície de contato (pó reage mais rápido que pedaço), ou usar um **catalisador** (acelera sem ser consumido).

### 5) Equilíbrio químico (Le Chatelier)

Quando uma reação vai e volta ao mesmo tempo. Se você "perturba" (muda temperatura, pressão, concentração), o equilíbrio se **desloca** para o lado que compensa a mudança.

### Como cai no ENEM
- Parte de um contexto (reação industrial, alimento, ambiente) e pede um cálculo de **concentração/pH** ou o porquê de a reação **acelerar/deslocar**. Domine **mol** e **concentração** — são a base de tudo.`,
    links: [
      L("Concentração de soluções — Mundo Educação", "https://mundoeducacao.uol.com.br/quimica/concentracao-molar.htm", "Mundo Educação"),
      L("pH e pOH — Brasil Escola", "https://brasilescola.uol.com.br/quimica/ph-poh.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-termologia",
    titulo: "Física: Termologia e energia",
    resumoMarkdown: `## Física: Termologia e energia

Termologia estuda **calor e temperatura** — coisas diferentes! **Temperatura** mede o grau de agitação das partículas; **calor** é a energia que **flui** do corpo quente para o frio até equilibrarem.

### Escalas de temperatura

> Celsius → Kelvin: \`K = °C + 273\`. (Kelvin é a escala "absoluta" da ciência; 0 °C = 273 K.)

### Calor sensível — esquenta/esfria sem mudar de estado

> \`Q = m · c · ΔT\`

- **Q** = quantidade de calor (em calorias ou joules)
- **m** = massa
- **c** = calor específico (característico de cada material; o da água é 1 cal/g°C)
- **ΔT** = variação de temperatura (temperatura final − inicial)

**Exemplo:** aquecer 200 g de água de 20 °C para 80 °C. (c = 1)
Q = m · c · ΔT = 200 · 1 · (80 − 20) = 200 · 60 = **12.000 calorias**.

### Calor latente — muda de estado (sem mudar a temperatura)

Durante o derreter/ferver, a temperatura fica **parada** enquanto o calor quebra as ligações: \`Q = m · L\` (L = calor latente do material).

### As 3 formas de o calor se propagar

| Forma | Como | Exemplo |
|---|---|---|
| **Condução** | de partícula a partícula, em sólidos | cabo de panela esquenta |
| **Convecção** | por correntes em líquidos/gases | ar-condicionado no alto (ar frio desce) |
| **Radiação** | por ondas, sem precisar de meio | calor do Sol chega ao vácuo |

### Como cai no ENEM
- Situações de aquecimento de água, isolamento térmico, motores e eficiência energética.
- Costuma cobrar **trocas de calor** (Q = m·c·ΔT) ou identificar o **tipo de propagação**. Liga-se a sustentabilidade e consumo de energia.`,
    links: [
      L("Calorimetria — Brasil Escola", "https://brasilescola.uol.com.br/fisica/calorimetria.htm", "Brasil Escola"),
      L("Propagação de calor — Mundo Educação", "https://mundoeducacao.uol.com.br/fisica/propagacao-calor.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-organica",
    titulo: "Química orgânica",
    resumoMarkdown: `## Química orgânica

É a química do **carbono** — o átomo que forma as moléculas da vida e dos combustíveis, plásticos, alimentos e remédios. O carbono é especial porque faz **4 ligações** e se encadeia em longas correntes.

### Funções orgânicas — reconhecer pelo "grupo funcional"

Cada função tem um grupo de átomos característico. Reconhecê-lo numa estrutura resolve boa parte das questões:

| Função | Grupo característico | Exemplo do dia a dia |
|---|---|---|
| Hidrocarboneto | só C e H | gás de cozinha, gasolina |
| Álcool | — OH | etanol (álcool) |
| Ácido carboxílico | — COOH | vinagre (ácido acético) |
| Éster | — COO — | aromas de frutas, essências |
| Aldeído / Cetona | — CHO / C=O | acetona |
| Amina | — NH₂ | proteínas, alguns remédios |

### Reações que mais aparecem

- **Combustão:** hidrocarboneto + O₂ → CO₂ + H₂O + energia (é como queima o combustível).
- **Esterificação:** ácido + álcool → éster + água (produz aromas).
- **Saponificação:** gordura + base → sabão (base da fabricação de sabão).
- **Polimerização:** muitas moléculas pequenas (monômeros) se unem num **polímero** (plásticos, PET, biopolímeros).

### Como cai no ENEM
- Mostra uma estrutura ou um contexto (um combustível, um aroma, um plástico) e pede a **função orgânica**, o **produto** da reação ou uma **propriedade**.
- Muito ligado a **etanol e biocombustíveis**, fármacos e materiais. Saber **reconhecer grupos funcionais** é a habilidade-chave.`,
    links: [
      L("Funções orgânicas — Mundo Educação", "https://mundoeducacao.uol.com.br/quimica/funcoes-organicas.htm", "Mundo Educação"),
      L("Química orgânica — Brasil Escola", "https://brasilescola.uol.com.br/quimica/quimica-organica.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-eletricidade",
    titulo: "Física: Eletricidade e magnetismo",
    resumoMarkdown: `## Física: Eletricidade e magnetismo

O campeão aqui é o **consumo de energia elétrica** — a conta de luz. Primeiro, as três grandezas de um circuito:

- **Tensão (U)** = a "força" que empurra a corrente, em volts (V). É a "pressão" da tomada.
- **Corrente (i)** = o fluxo de carga, em ampères (A).
- **Resistência (R)** = o quanto o material dificulta a corrente, em ohms (Ω).

### Lei de Ohm

> \`U = R · i\`  (tensão = resistência · corrente)

### Potência e consumo (o que mais cai)

- **Potência elétrica** = energia gasta por segundo, em watts (W):
> \`P = U · i\`

- **Energia consumida** = potência · tempo. A conta de luz cobra em **quilowatt-hora (kWh)**:
> \`Energia (kWh) = P (kW) · t (h)\`

> Atenção: 1 kW = 1000 W. Um chuveiro de 5000 W = 5 kW.

### Exemplo resolvido (conta de luz)

*Um chuveiro de 5000 W é usado 1 hora por dia, 30 dias. Se o kWh custa R$ 0,60, qual o gasto no mês?*

1. Potência em kW: 5000 W = 5 kW.
2. Energia no mês: 5 kW · (1 h · 30 dias) = 5 · 30 = **150 kWh**.
3. Custo: 150 · 0,60 = **R$ 90**.

### Associação de resistores (nível básico)

- **Em série** (um após o outro): resistências **somam** (R = R₁ + R₂).
- **Em paralelo** (lado a lado): a resistência total **diminui**.

### Como cai no ENEM
- Quase sempre uma situação de **consumo**: calcular kWh, custo na conta, ou qual aparelho gasta mais. Domine **potência × tempo × tarifa** e as unidades (W, kW, kWh).`,
    links: [
      L("Potência elétrica e consumo (kWh) — Brasil Escola", "https://brasilescola.uol.com.br/fisica/potencia-eletrica.htm", "Brasil Escola"),
      L("Lei de Ohm e circuitos — Mundo Educação", "https://mundoeducacao.uol.com.br/fisica/lei-ohm.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-genetica",
    titulo: "Biologia: Genética e evolução",
    resumoMarkdown: `## Biologia: Genética e evolução

### Genética — como se herda uma característica

Conceitos-base, do zero:
- **Gene** = um trecho do DNA com a "receita" de uma característica (cor dos olhos, tipo sanguíneo).
- **Alelo** = as versões de um gene. Geralmente um **dominante** (letra maiúscula, ex.: A) e um **recessivo** (minúscula, a).
- **Dominante** aparece mesmo com só uma cópia; **recessivo** só aparece com as duas cópias (aa).
- **Genótipo** = os genes que a pessoa tem (AA, Aa, aa). **Fenótipo** = a característica que se vê.

### Leis de Mendel e o cruzamento

No cruzamento de dois híbridos **Aa × Aa**, monte o quadrado:

| | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

Resultado: 1 AA, 2 Aa, 1 aa → proporção **3 dominantes : 1 recessivo** (75% × 25%). Aqui a genética encontra a **probabilidade** — por isso conecta com Matemática.

### Evolução — por que a vida é tão diversa

- **Seleção natural (Darwin):** no ambiente, os indivíduos mais **adaptados** sobrevivem e deixam mais descendentes; ao longo de gerações, a espécie muda. Não é "força de vontade", é sobrevivência diferencial.
- **Adaptação:** característica que dá vantagem naquele ambiente.
- **Ancestralidade comum:** espécies parecidas descendem de um ancestral comum (evidências: fósseis, semelhanças anatômicas, DNA).

### Como cai no ENEM
- Um **heredograma** (árvore genealógica) ou cruzamento pedindo a **probabilidade** de um filho ter certa característica.
- Um texto sobre **evolução ou biotecnologia** (transgênicos, clonagem, teste de DNA) pedindo o conceito correto. Cuidado para não confundir seleção natural com "adaptação por esforço" (ideia errada, de Lamarck).`,
    links: [
      L("Leis de Mendel — Brasil Escola", "https://brasilescola.uol.com.br/biologia/leis-mendel.htm", "Brasil Escola"),
      L("Seleção natural e evolução — Mundo Educação", "https://mundoeducacao.uol.com.br/biologia/teoria-evolucao.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-ondas",
    titulo: "Física: Ondas, óptica e som",
    resumoMarkdown: `## Física: Ondas, óptica e som

Uma **onda** transporta energia sem transportar matéria (a rolha na água sobe e desce, mas não viaja com a onda). Luz, som, rádio e micro-ondas são todos ondas.

### As grandezas de uma onda

- **Comprimento de onda (λ, "lambda")** = a distância de uma crista à próxima.
- **Frequência (f)** = quantas ondas passam por segundo, em hertz (Hz).
- **Velocidade (v)** = quão rápido a onda se propaga.

> A equação fundamental: \`v = λ · f\`

**Exemplo:** uma onda de rádio com λ = 3 m e f = 100 milhões de Hz (100 MHz). v = λ·f = 3 · 100.000.000 = 3·10⁸ m/s (a velocidade da luz!).

### Tipos de onda

- **Mecânicas** (precisam de um meio): som, ondas no mar, numa corda. Não existe som no vácuo.
- **Eletromagnéticas** (viajam no vácuo): luz, rádio, micro-ondas, raio-X. Todas a mesma velocidade no vácuo (~300.000 km/s).

### Som (acústica)

- **Altura:** grave × agudo (depende da frequência).
- **Intensidade:** volume, forte × fraco.
- **Timbre:** o que distingue um piano de um violão tocando a mesma nota.

### Óptica (luz)

- **Reflexão:** a luz "bate e volta" (espelhos).
- **Refração:** a luz "entorta" ao mudar de meio (a colher que parece quebrada no copo d'água).
- **Lentes:** formam imagens (óculos, lupas, câmeras).

### Como cai no ENEM
- Uma situação com luz, som ou comunicação (rádio, micro-ondas, fibra óptica) pedindo a relação entre **frequência, comprimento de onda e velocidade** — a fórmula **v = λ·f** resolve muita questão — ou identificar o fenômeno óptico (reflexão × refração).`,
    links: [
      L("Ondas: características — Mundo Educação", "https://mundoeducacao.uol.com.br/fisica/ondas.htm", "Mundo Educação"),
      L("Reflexão e refração da luz — Brasil Escola", "https://brasilescola.uol.com.br/fisica/optica.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-fisiologia",
    titulo: "Biologia: Fisiologia e corpo humano",
    resumoMarkdown: `## Biologia: Fisiologia e corpo humano

Fisiologia é **como o corpo funciona**. No ENEM vem muito ligada à **saúde pública** e às doenças.

### Os sistemas e o que fazem (visão de conjunto)

| Sistema | Função central |
|---|---|
| Digestório | quebra o alimento e absorve nutrientes |
| Respiratório | leva O₂ ao sangue e elimina CO₂ |
| Circulatório | o coração bombeia sangue com O₂ e nutrientes |
| Nervoso | capta estímulos e comanda respostas |
| Endócrino | hormônios regulam o corpo (insulina, adrenalina) |

Eles **trabalham integrados**: o respiratório pega o O₂, o circulatório o distribui, e as células o usam para gerar energia.

### Doenças e imunidade (o que mais cai)

- **Agentes:** vírus (dengue, covid, HIV), bactérias (tuberculose), protozoários (malária), vermes.
- **Transmissão:** pelo ar, água/alimento contaminado, vetores (mosquito), contato/sexual.
- **Sistema imune:** defende o corpo; produz **anticorpos** contra invasores.
- **Vacina:** treina o sistema imune com uma versão inofensiva do agente, para que ele reaja rápido numa infecção real. É prevenção, não tratamento.

### Como cai no ENEM
- Um texto sobre uma **doença, vacina ou processo do corpo** pedindo o mecanismo correto: como o sistema imune age, como a doença se transmite, como preveni-la.
- Conecta-se a **cidadania e políticas de saúde** (saneamento, campanhas de vacinação, SUS).`,
    links: [
      L("Sistema imunológico e vacinas — Brasil Escola", "https://brasilescola.uol.com.br/biologia/sistema-imunologico.htm", "Brasil Escola"),
      L("Fisiologia humana — Mundo Educação", "https://mundoeducacao.uol.com.br/biologia/fisiologia-humana.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-quimica-ambiental",
    titulo: "Química e meio ambiente",
    resumoMarkdown: `## Química e meio ambiente

A química por trás dos problemas ambientais — um dos temas mais interdisciplinares (liga-se à Geografia e à redação).

### Poluição do ar e efeito estufa

- **Efeito estufa:** gases como **CO₂** (gás carbônico) e **CH₄** (metano) retêm calor na atmosfera. É natural e necessário — o problema é o **excesso**, causado pela queima de combustíveis fósseis, que intensifica o aquecimento global.
- **Chuva ácida:** gases de enxofre e nitrogênio (de indústrias e carros) reagem com a água da chuva, formando ácidos que corroem plantas, construções e acidificam rios.

### Combustíveis: fósseis × renováveis

| Tipo | Exemplos | Característica |
|---|---|---|
| Fósseis | petróleo, carvão, gás natural | esgotáveis, muito CO₂ |
| Biocombustíveis | etanol (cana), biodiesel | renováveis, parte do CO₂ é reabsorvido pelas plantas |

### Tratamento e sustentabilidade

- Tratamento de **água** (para consumo) e de **esgoto/efluentes** (antes de devolver ao ambiente).
- **Reciclagem** e a lógica dos 3 Rs; **química verde** (processos menos poluentes).

### Como cai no ENEM
- Um problema ambiental real pedindo a **explicação química** (por que tal gás causa efeito estufa, como tratar um efluente) ou a alternativa mais **sustentável**.
- Liga-se diretamente à Geografia ambiental e é ótima fonte de repertório para a redação.`,
    links: [
      L("Efeito estufa e poluição — Mundo Educação", "https://mundoeducacao.uol.com.br/quimica/efeito-estufa.htm", "Mundo Educação"),
      L("Combustíveis e meio ambiente — Brasil Escola", "https://brasilescola.uol.com.br/quimica/combustiveis.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-citologia",
    titulo: "Biologia: Citologia e bioquímica",
    resumoMarkdown: `## Biologia: Citologia e bioquímica

Citologia é o estudo da **célula**, a menor unidade viva. Toda a Biologia parte daqui.

### A célula e suas organelas

| Parte | Função |
|---|---|
| Membrana | controla o que entra e sai |
| Citoplasma | onde ficam as organelas |
| Núcleo | guarda o DNA (o "comando") |
| Mitocôndria | faz a **respiração celular** (produz energia) |
| Cloroplasto (só vegetais) | faz a **fotossíntese** |
| Ribossomo | monta as proteínas |

> **Procarionte × eucarionte:** procarionte (bactéria) **não** tem núcleo separado; eucarionte (plantas, animais, fungos) tem núcleo com membrana. Diferença muito cobrada.

### Os dois processos de energia (a dupla que mais cai)

- **Fotossíntese** (nas plantas): usa **luz + CO₂ + água** para produzir **glicose + O₂**. É a planta "fabricando comida" e liberando oxigênio.
- **Respiração celular** (em quase todos os seres): usa **glicose + O₂** para liberar **energia + CO₂ + água**. É o inverso — "queima" o alimento para gerar energia.

Repare que uma é praticamente o inverso da outra, e juntas mantêm o ciclo do carbono e do oxigênio.

### Biomoléculas

- **Carboidratos:** energia rápida (açúcares, amido).
- **Lipídios:** reserva de energia, membranas.
- **Proteínas:** estrutura e **enzimas** (aceleram reações do corpo).
- **Ácidos nucleicos:** DNA e RNA (informação genética).

### Como cai no ENEM
- Um processo celular (fotossíntese, respiração, ação de uma enzima) pedindo a **organela** ou **etapa** responsável, ou a **relação** entre fotossíntese e respiração.`,
    links: [
      L("Organelas celulares — Brasil Escola", "https://brasilescola.uol.com.br/biologia/organelas-citoplasmaticas.htm", "Brasil Escola"),
      L("Fotossíntese e respiração celular — Mundo Educação", "https://mundoeducacao.uol.com.br/biologia/fotossintese.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-quimica-geral",
    titulo: "Química geral e estequiometria",
    resumoMarkdown: `## Química geral e estequiometria

Os fundamentos da Química, do átomo aos cálculos de reação.

### Átomo e tabela periódica

- O átomo tem um **núcleo** (prótons + nêutrons) e **elétrons** em volta.
- A **tabela periódica** organiza os elementos; sua posição indica propriedades (metais, não metais, reatividade). A **massa atômica** de cada elemento está ali — você vai usá-la nos cálculos.

### Ligações químicas — como os átomos se unem

| Ligação | Como | Exemplo |
|---|---|---|
| Iônica | um átomo doa elétron a outro (metal + não metal) | sal (NaCl) |
| Covalente | átomos **compartilham** elétrons (não metais) | água (H₂O) |
| Metálica | elétrons "livres" entre metais | ferro, cobre (conduzem eletricidade) |

### O mol e a massa molar

> **Mol** = pacote padrão de 6,02·10²³ partículas. A **massa molar** (g/mol) é a soma das massas atômicas da fórmula. Ex.: água (H₂O) = 2·1 + 16 = **18 g/mol** (1 mol de água pesa 18 g).

### Estequiometria — as "contas de receita" da reação

A equação química balanceada dá a **proporção** entre reagentes e produtos, como uma receita. Ex.:

> \`2 H₂ + 1 O₂ → 2 H₂O\`

Lê-se: 2 mols de hidrogênio reagem com 1 mol de oxigênio e produzem 2 mols de água. Balancear = garantir o **mesmo número de átomos** de cada lado (lei da conservação da massa). A partir dessa proporção, monta-se uma **regra de três** para achar quanto se forma ou se consome.

### Como cai no ENEM
- Uma reação em contexto pedindo **quanto se forma/consome** (estequiometria via regra de três) ou uma propriedade explicada pela **ligação/estrutura**. O **conceito de mol** e a leitura da tabela periódica são a base de tudo.`,
    links: [
      L("Estequiometria e mol — Mundo Educação", "https://mundoeducacao.uol.com.br/quimica/estequiometria.htm", "Mundo Educação"),
      L("Ligações químicas — Brasil Escola", "https://brasilescola.uol.com.br/quimica/ligacoes-quimicas.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-ecologia",
    titulo: "Biologia: Ecologia",
    resumoMarkdown: `## Biologia: Ecologia

Ecologia estuda as **relações entre os seres vivos e o ambiente**. É tema-ponte com a Geografia e a sustentabilidade.

### Cadeia alimentar e fluxo de energia

Quem come quem, e por onde a energia passa:
- **Produtores:** plantas e algas (fazem fotossíntese, produzem o próprio alimento). São a base.
- **Consumidores:** herbívoros (1ários), carnívoros (2ários, 3ários…).
- **Decompositores:** fungos e bactérias (reciclam a matéria morta de volta ao solo).

> A energia **diminui** a cada nível (só ~10% passa adiante) — por isso há mais plantas que herbívoros, e mais herbívoros que grandes predadores (a **pirâmide** de energia).

### Ciclos biogeoquímicos

A matéria (água, carbono, nitrogênio) **circula** e é reaproveitada — diferente da energia, que se dissipa. Ex.: o carbono passa do ar (CO₂) para as plantas (fotossíntese), aos animais, e volta pela respiração/decomposição.

### Relações ecológicas

- **Harmônicas** (sem prejuízo): mutualismo (os dois ganham), colônias.
- **Desarmônicas** (alguém perde): predação, competição, parasitismo.

### Impactos ambientais

- **Bioacumulação:** um poluente (ex.: mercúrio) se **concentra** ao subir na cadeia — o predador do topo recebe a maior dose. Explica contaminação em peixes grandes.
- **Espécies invasoras** e **perda de biodiversidade** desequilibram o ecossistema.

### Como cai no ENEM
- Um ecossistema ou cadeia alimentar pedindo o **efeito de uma alteração** (remover um nível, introduzir um poluente que se acumula). A resposta certa segue o **fluxo de energia/matéria** e suas consequências.`,
    links: [
      L("Cadeia e teia alimentar — Brasil Escola", "https://brasilescola.uol.com.br/biologia/cadeia-alimentar.htm", "Brasil Escola"),
      L("Ciclos biogeoquímicos — Mundo Educação", "https://mundoeducacao.uol.com.br/biologia/ciclos-biogeoquimicos.htm", "Mundo Educação"),
    ],
  },
];
