// Resoluções DIDÁTICAS (passo a passo) de questões reais, escritas à mão e
// CONFERIDAS com o gabarito oficial. Gravadas em Question.comentario por
// scripts/seed-solucoes.ts (casando por ano + número). Escritas para quem estudou
// há muito tempo: cada passo explica o "porquê", não só a conta.
//
// Cobertura inicial: Geometria (plana/espacial) — o botão "Como resolver" só
// aparece nas questões que têm resolução aqui. Dá para adicionar mais ao longo do
// tempo, bastando incluir novos itens.

export type Solucao = {
  year: number;
  index: number;
  /** Letra da resposta (A–E). O seed só grava se bater com o gabarito do banco. */
  resposta: string;
  markdown: string;
};

export const solucoes: Solucao[] = [
  {
    year: 2019,
    index: 142,
    resposta: "E",
    markdown: `**Ideia:** a área a pavimentar é a diferença entre o círculo **novo** e o círculo **antigo** (uma "coroa"). Use π ≈ 3.

1. **Círculo antigo:** diâmetro 6 m → raio = 6 ÷ 2 = **3 m**. Área = π·r² = 3 · 3² = 3 · 9 = **27 m²**.
2. **Círculo novo:** o diâmetro aumenta 8 m → 6 + 8 = 14 m → raio = **7 m**. Área = 3 · 7² = 3 · 49 = **147 m²**.
3. **Área a mais (a "coroa"):** 147 − 27 = **120 m²**.
4. O estoque cobre só 100 m², e 120 > 100 → **não será suficiente**.

**Resposta: E** (não será suficiente, pois a nova área mede 120 m²).`,
  },
  {
    year: 2019,
    index: 148,
    resposta: "C",
    markdown: `**Ideia:** descobrir quantos litros a banheira vai receber e dividir pelo que cada embalagem rende.

1. **Capacidade útil:** a banheira tem 0,3 m³, preenchida a 80%. Como 1 m³ = 1000 L, então 0,3 m³ = 300 L. → 80% de 300 = 0,8 · 300 = **240 L**.
2. **Cada embalagem** rende 2,7 L.
3. **Quantas embalagens:** 240 ÷ 2,7 ≈ **88,9**.
4. Como não dá para comprar "0,9 embalagem", arredonda-se **para cima**: 89 (com 88 faltaria líquido).

**Resposta: C** (89 embalagens).`,
  },
  {
    year: 2019,
    index: 158,
    resposta: "C",
    markdown: `**Ideia:** na maquete, o volume real é o volume da maquete multiplicado pela escala **ao cubo** (volume tem 3 dimensões).

1. **Escala 1 : 200** → cada comprimento real é 200 vezes o da maquete. Logo o **volume** real é 200³ vezes maior. 200³ = 8 000 000.
2. **Volume real do reservatório:** 45 cm³ · 8 000 000 = 360 000 000 cm³.
3. **Converter para litros:** 1 L = 1000 cm³ → 360 000 000 ÷ 1000 = **360 000 L**.
4. **Dias de abastecimento:** consumo de 30 000 L por dia → 360 000 ÷ 30 000 = **12 dias**.

**Resposta: C** (12 dias). *Pegadinha:* elevar a escala ao cubo (não só a 200).`,
  },
  {
    year: 2019,
    index: 176,
    resposta: "D",
    markdown: `**Ideia:** montar o orçamento inicial, depois o novo, e achar o desconto nos custos fixos que faz o novo total ser 10% menor.

1. **Orçamento inicial:** projeto R$ 10 000 + custos fixos R$ 40 000 + construção (R$ 2 500 × 40 m²) = 10 000 + 40 000 + 100 000 = **R$ 150 000**.
2. **Meta do novo total:** 10% menor → 150 000 · 0,90 = **R$ 135 000**.
3. **Novas parcelas conhecidas:**
   - Projeto cai 50%: 10 000 · 0,5 = R$ 5 000.
   - Metro quadrado sobe 25%: 2 500 · 1,25 = 3 125 → × 40 m² = R$ 125 000.
4. **Custos fixos (incógnita X):** 5 000 + X + 125 000 = 135 000 → X = **R$ 5 000**.
5. **Desconto nos custos fixos:** caiu de 40 000 para 5 000, ou seja 35 000 de desconto. 35 000 ÷ 40 000 = 0,875 = **87,5%**.

**Resposta: D** (87,5%).`,
  },
  {
    year: 2020,
    index: 138,
    resposta: "B",
    markdown: `**Ideia:** a escala liga o tamanho da maquete ao real. Como temos **volumes**, comparamos volumes e depois tiramos a raiz cúbica (volume = escala³).

1. **Volume real:** 28 080 litros. Como 1 dm³ = 1 L, isso é 28 080 dm³. Em cm³ (1 dm = 10 cm → 1 dm³ = 1000 cm³): 28 080 · 1000 = **28 080 000 cm³**.
2. **Volume da maquete:** 2 · 3,51 · 4 = **28,08 cm³**.
3. **Razão dos volumes:** 28,08 ÷ 28 080 000 = 1 ÷ 1 000 000.
4. **Escala linear** = raiz cúbica dessa razão: ∛(1/1 000 000) = 1/100 (porque 100³ = 1 000 000).

**Resposta: B** (1 : 100). *dm³ é decímetro cúbico — unidade correta, igual a 1 litro.*`,
  },
  {
    year: 2020,
    index: 151,
    resposta: "C",
    markdown: `**Ideia:** é uma questão de **reconhecer as formas**. Um *tronco de pirâmide de base quadrada* é o que sobra quando se corta a ponta (o topo) de uma pirâmide de base quadrada.

1. **Base de baixo:** um **quadrado** (a base original da pirâmide).
2. **Base de cima:** outro **quadrado** menor (onde a ponta foi cortada), paralelo ao de baixo. → já são **2 quadrados**.
3. **Faces laterais:** eram 4 triângulos na pirâmide inteira; ao cortar a ponta, cada triângulo perde o "bico" e vira um **trapézio isósceles** (dois lados iguais). → **4 trapézios isósceles**.

**Resposta: C** (2 quadrados e 4 trapézios isósceles).`,
  },
  {
    year: 2020,
    index: 160,
    resposta: "C",
    markdown: `**Ideia:** a moto gasta 5 L a cada 100 km, ou seja **0,05 L por km**. Vamos contar quanto ela gasta de Estrela em diante, até voltar a Estrela (onde reabastece de novo).

1. **Consumo por km:** 5 ÷ 100 = 0,05 L/km.
2. **Até chegar a Estrela (ida):** casa → Estrela são 500 − 80 = 420 km → gasta 420 · 0,05 = 21 L. Saiu com o tanque cheio (22 L), então **chega com 22 − 21 = 1 L**.
3. **O que precisa a partir de Estrela, até voltar a Estrela:**
   - Estrela → destino: 80 km
   - andar no destino: 200 km
   - destino → Estrela (volta): 80 km
   - Total = 360 km → 360 · 0,05 = **18 L**.
4. **Quanto reabastecer:** ele já tem 1 L, precisa de 18 L → 18 − 1 = **17 L**.

**Resposta: C** (17 litros).`,
  },
  {
    year: 2021,
    index: 171,
    resposta: "E",
    markdown: `**Ideia:** o custo é R$ 0,01 por cm², e o teto é R$ 0,80 → a área não pode passar de **80 cm²**. Entre os modelos **dentro** do limite, escolher o de **maior** área. (π ≈ 3; √3 ≈ 1,7.)

Calculando cada área:
- **Triângulo equilátero (lado 12):** A = (√3/4)·l² = (1,7/4)·144 = 1,7 · 36 = **61,2 cm²**.
- **Quadrado (lado 8):** A = 8² = **64 cm²**.
- **Retângulo (11 × 8):** A = **88 cm²** → custaria R$ 0,88 → **passa do limite**, descartado.
- **Hexágono regular (lado 6):** A = (3√3/2)·l² = (3·1,7/2)·36 = 2,55 · 36 = **91,8 cm²** → R$ 0,918 → **passa do limite**, descartado.
- **Círculo (diâmetro 10 → raio 5):** A = π·r² = 3 · 25 = **75 cm²** → R$ 0,75 ✓.

Dentro do teto de 80 cm² sobram triângulo (61,2), quadrado (64) e círculo (75). O **maior** é o **círculo**.

**Resposta: E** (círculo).`,
  },
  {
    year: 2022,
    index: 172,
    resposta: "B",
    markdown: `**Ideia:** a piscina é um paralelepípedo **sem tampa**. A área de revestimento = **fundo** + as **4 paredes**. Todos os projetos têm o mesmo volume (90 000 L); queremos a **menor** área.

Fórmula (com profundidade *p*, largura *l*, comprimento *c*):
> Área = (l · c) + 2·(p · l) + 2·(p · c)

- **Projeto I** (1,8; 2,0; 25,0): 2·25 + 2·1,8·2 + 2·1,8·25 = 50 + 7,2 + 90 = **147,2 m²**.
- **Projeto II** (2,0; 5,0; 9,0): 5·9 + 2·2·5 + 2·2·9 = 45 + 20 + 36 = **101 m²**.
- **Projeto III** (1,0; 6,0; 15,0): 6·15 + 2·1·6 + 2·1·15 = 90 + 12 + 30 = **132 m²**.
- **Projeto IV** (1,5; 15,0; 4,0): 15·4 + 2·1,5·15 + 2·1,5·4 = 60 + 45 + 12 = **117 m²**.
- **Projeto V** (2,5; 3,0; 12,0): 3·12 + 2·2,5·3 + 2·2,5·12 = 36 + 15 + 60 = **111 m²**.

A menor área é a do **Projeto II** (101 m²).

**Resposta: B** (projeto II).`,
  },
  {
    year: 2024,
    index: 147,
    resposta: "A",
    markdown: `**Ideia:** o perímetro é fixo (os *k* metros de cerca). Uma regra útil: **com o mesmo perímetro, quanto mais lados a figura tem, maior a área** (o círculo seria o máximo). Entre triângulo, quadrado e hexágono, o **hexágono** tem mais lados → maior área.

Conferindo pela conta (hexágono regular com perímetro *k*):
1. Cada lado = k ÷ 6.
2. Área do hexágono regular = (3√3/2)·(lado)² = (3√3/2)·(k/6)² = **(√3 · k²) ⁄ 24**.

Esse valor é maior que o do quadrado (k²/16) e o do triângulo equilátero (√3·k²/36) para o mesmo *k*.

**Resposta: A** (hexágono regular). O importante é a ideia: **mais lados, mais área, com o mesmo contorno.**`,
  },
  {
    year: 2025,
    index: 174,
    resposta: "B",
    markdown: `**Ideia:** achar o volume de água quando a boia desliga, decidir quanto volume as garrafas podem "roubar" (sem deixar a água cair abaixo de 5 L) e dividir pelo volume de cada garrafa.

1. **Volume de água ao desligar:** base 2,5 dm × 1,5 dm e altura 2 dm → V = 2,5 · 1,5 · 2 = 7,5 dm³ = **7,5 L** (pois 1 dm³ = 1 L).
2. **Água mínima que deve sobrar:** 5 L. Então as garrafas submersas podem ocupar no máximo 7,5 − 5 = **2,5 L** = 2500 mL.
3. **Cada garrafa** ocupa 300 mL (fica submersa, empurrando esse tanto de água para fora).
4. **Quantas garrafas:** 2500 ÷ 300 ≈ 8,33 → como não pode passar de 2500 mL, arredonda **para baixo**: **8 garrafas** (8 · 300 = 2400 mL; sobra 5,1 L de água ✓; com 9 sobraria 4,8 L, abaixo de 5 ✗).

**Resposta: B** (8 garrafas).`,
  },

  // ---------------- PORCENTAGEM E MATEMÁTICA FINANCEIRA ----------------
  {
    year: 2019,
    index: 150,
    resposta: "B",
    markdown: `**Ideia:** o valor à vista é o **valor presente** das duas parcelas, cada uma trazida "para hoje" descontando os juros de 1% ao mês (dividir por 1,01 para cada mês).

1. **1ª parcela** (daqui a 1 mês): 202 ÷ 1,01 = **R$ 200,00**.
2. **2ª parcela** (daqui a 2 meses): 204,02 ÷ 1,01² = 204,02 ÷ 1,0201 = **R$ 200,00**.
3. **Valor à vista:** 200 + 200 = **R$ 400,00**.

**Resposta: B** (400,00).`,
  },
  {
    year: 2019,
    index: 153,
    resposta: "E",
    markdown: `**Ideia:** dois aumentos sucessivos → **multiplique** os fatores (não some as porcentagens).

1. **De 2000 para 2010:** aumento de 7,2% → fator 1,072. 1250 · 1,072 = **R$ 1 340,00**.
2. **De 2010 para 2020:** aumento de 10% → fator 1,10. 1340 · 1,10 = **R$ 1 474,00**.

**Resposta: E** (R$ 1 474,00).`,
  },
  {
    year: 2022,
    index: 163,
    resposta: "D",
    markdown: `**Ideia:** montar a **média ponderada** dos salários (60 mestres, 40 doutores) e impor que ela não passe de R$ 12 240.

1. **Mestres com +25%:** 8000 · 1,25 = R$ 10 000.
2. **Doutores:** salário D (a descobrir). Média = (60·10000 + 40·D) ÷ 100 ≤ 12 240.
3. Resolvendo: 600 000 + 40D ≤ 1 224 000 → 40D ≤ 624 000 → D ≤ **15 600**.
4. **Aumento máximo:** de 12 000 para 15 600 é 3 600 a mais → 3600 ÷ 12000 = 0,30 = **30%**.

**Resposta: D** (30%).`,
  },
  {
    year: 2022,
    index: 167,
    resposta: "A",
    markdown: `**Ideia:** calcular o valor **real** (o da loja) e o valor que a **cliente** imaginou, e comparar.

1. **Preço normal:** promocional (1000) + 10% = 1000 · 1,10 = R$ 1 100.
2. **Valor da loja** (2% de desconto no normal): 1100 · 0,98 = **R$ 1 078**.
3. **Valor que a cliente calculou** (promocional + 8%): 1000 · 1,08 = **R$ 1 080**.
4. **Diferença:** 1080 − 1078 = R$ 2 → o valor da loja é **R$ 2,00 menor**.

**Resposta: A** (R$ 2,00 menor).`,
  },
  {
    year: 2023,
    index: 158,
    resposta: "D",
    markdown: `**Ideia:** montar o lucro em função do nº de ajudantes *n* e achar o menor *n* com lucro ≥ 800. Cuidado: além do salário fixo, 4% da receita também vai para os ajudantes (é custo).

1. **Peso pescado:** 1 ajudante = 300 kg; cada ajudante a mais soma 100 kg → **kg = 200 + 100n**.
2. **Receita:** R$ 5 por kg → R = 5 · (200 + 100n).
3. **Lucro:** R − 900 (custo fixo) − 250n (salários) − 0,04·R = **0,96·R − 900 − 250n**.
4. Testando: *n* = 3 → kg = 500, R = 2500, lucro = 0,96·2500 − 900 − 750 = **750** (< 800). *n* = 4 → kg = 600, R = 3000, lucro = 0,96·3000 − 900 − 1000 = **980** (≥ 800 ✓).

**Resposta: D** (4 ajudantes).`,
  },
  {
    year: 2023,
    index: 161,
    resposta: "D",
    markdown: `**Ideia:** o valor à vista (R$ 1 500) é o **valor presente** das 3 parcelas. Ache a taxa *i* que iguala isso.

1. **Parcelas:** à vista +20% → 1800, ÷ 3 = **R$ 600** cada. Pagas em 0, 30 e 60 dias.
2. **Valor presente:** 600 + 600/(1+i) + 600/(1+i)² = 1500. Chamando x = 1/(1+i): 600x + 600x² = 900 → x² + x − 1,5 = 0.
3. **Resolvendo** (Bhaskara): x = (−1 + √7)/2. Como √28 ≈ 5,29 e √28 = 2√7, temos √7 ≈ 2,645 → x ≈ 0,823.
4. **Taxa:** 1 + i = 1/0,823 ≈ 1,215 → i ≈ **21,5%**.

**Resposta: D** (21,5%).`,
  },
  {
    year: 2023,
    index: 167,
    resposta: "A",
    markdown: `**Ideia:** a compra de folhas é proporcional ao nº de alunos (regra de três). Depois compare o custo com o orçamento para achar o desconto.

1. **Folhas por aluno:** 6000 ÷ 1200 = **5 folhas/aluno**.
2. **Agora (1150 alunos):** 5 · 1150 = **5750 folhas**.
3. **Embalagens de 100:** 5750 ÷ 100 = 57,5 → arredonda para **58 embalagens** (não dá para comprar meia). Custo = 58 · 4 = **R$ 232**.
4. **Desconto para caber em R$ 220:** (232 − 220) ÷ 232 = 12 ÷ 232 ≈ 0,0517 = **5,17%** → intervalo (5,0 ; 5,5).

**Resposta: A** (5,0 ; 5,5).`,
  },
  {
    year: 2024,
    index: 137,
    resposta: "E",
    markdown: `**Ideia:** a **mediana** é o valor central dos dados **ordenados**. Como há 6 valores (par), é a média dos **dois centrais**.

1. **Dados:** 66, 64, 54, 46, 60, 64.
2. **Ordenando:** 46, 54, 60, 64, 64, 66.
3. **Dois centrais** (3º e 4º): 60 e 64 → mediana = (60 + 64) ÷ 2 = **62**.

**Resposta: E** (62).`,
  },
  {
    year: 2024,
    index: 143,
    resposta: "A",
    markdown: `**Ideia:** as parcelas **crescem** todo mês (a última é a maior). A imobiliária paga as parcelas que caem no mês de **aniversário (maio)**. Para pagar menos, queremos que **as maiores parcelas caiam em maio** — inclusive a 100ª (a maior de todas).

1. As parcelas são pagas nos meses: mês da compra, +1, +2, … até a 100ª.
2. Para a **100ª parcela** cair em **maio**, conte 99 meses para trás a partir de maio: maio − 99 meses cai em **fevereiro**.
3. Começando em fevereiro, caem em maio as parcelas 4, 16, 28, …, **100** — ou seja, a imobiliária paga a maior parcela, minimizando o total gasto pelo cliente.

**Resposta: A** (Fevereiro).`,
  },
  {
    year: 2024,
    index: 160,
    resposta: "C",
    markdown: `**Ideia:** o total pago por 5 porções tem de ficar **igual** antes e depois. Monte a igualdade e isole o novo preço.

1. **Antes:** taxa 10 + 5 porções · 25 = 10 + 125 = **R$ 135**.
2. **Depois:** taxa 15 + 5 · (novo preço) = 135.
3. **Isolando:** 5 · novo = 135 − 15 = 120 → novo = **R$ 24,00**.

**Resposta: C** (24,00).`,
  },
  {
    year: 2024,
    index: 163,
    resposta: "A",
    markdown: `**Ideia:** a imagem final precisa chegar a pelo menos 100 micrômetros (µm) para ser vista. A ampliação total = ocular (10×) × objetiva.

1. **Tamanho da hemácia:** 0,007 mm = **7 µm** (pois 1 µm = 10⁻³ mm).
2. **Ampliação necessária:** 100 ÷ 7 ≈ **14,3 vezes**.
3. **Com a ocular (10×),** a objetiva precisa dar 10 × obj ≥ 14,3 → objetiva ≥ 1,43.
4. Testando a **menor** que funciona: V (1,4) → 10·1,4 = 14 → 7·14 = 98 µm (< 100, **não vê**). I (2) → 10·2 = 20 → 7·20 = 140 µm (≥ 100 ✓).

**Resposta: A** (lente I). *A lente V erra por pouco: 98 µm.*`,
  },
  {
    year: 2024,
    index: 167,
    resposta: "B",
    markdown: `**Ideia:** calcular a % de acertos de cada um e encaixar na tabela de conceitos.

1. **João:** 75% de 200 = 150 acertos. P = 75% → **muito bom** (75 ≤ P < 90).
2. **Felipe:** acertou 30% a menos que João → 150 · 0,70 = 105 acertos. P = 105 ÷ 200 = **52,5%** → **regular** (50 ≤ P < 60).

**Resposta: B** (muito bom e regular).`,
  },
  {
    year: 2024,
    index: 170,
    resposta: "D",
    markdown: `**Ideia:** achar o faturamento real dos ingressos, ver quanto de lucro precisa vir das bebidas e dividir pelo nº de pessoas.

1. **Meias previstas:** 60% de 500 = 300. Superou em 50% → 300 · 1,5 = **450 meias** e 50 inteiras.
2. **Faturamento com ingressos:** 450 · 65 + 50 · 130 = 29 250 + 6 500 = **R$ 35 750**.
3. **Lucro total desejado = 17 000** e custo do evento = 34 350. Então: ingressos + lucro das bebidas − 34 350 = 17 000 → lucro das bebidas = 17 000 + 34 350 − 35 750 = **R$ 15 600**.
4. **Bebidas com 60% de lucro** sobre a venda: 0,6 · V = 15 600 → V = **R$ 26 000**. Por pessoa: 26 000 ÷ 500 = **R$ 52,00**.

**Resposta: D** (52,00).`,
  },
  {
    year: 2024,
    index: 176,
    resposta: "D",
    markdown: `**Ideia:** transformar porcentagem em número decimal é **dividir por 100**.

135,25% = 135,25 ÷ 100 = **1,3525**.

**Resposta: D** (1,3525).`,
  },
  {
    year: 2025,
    index: 161,
    resposta: "B",
    markdown: `**Ideia:** o reciclado é bem mais barato. Descubra os custos e imponha a meta (custo ≤ metade do atual).

1. **Custos por tonelada:** reciclar = R$ 500, que é 5% do custo do petróleo → petróleo = 500 ÷ 0,05 = **R$ 10 000/t**.
2. **Custo atual:** 110 · 10 000 + 80 · 500 = 1 100 000 + 40 000 = **R$ 1 140 000**.
3. **Meta:** reduzir pelo menos 50% → custo ≤ **R$ 570 000**, mantendo 190 t no total.
4. Seja *r* as toneladas recicladas (as outras 190 − *r* de petróleo): (190 − r)·10 000 + 500r ≤ 570 000 → 1 900 000 − 9 500r ≤ 570 000 → r ≥ **140**.

**Resposta: B** (140 toneladas).`,
  },
  {
    year: 2025,
    index: 165,
    resposta: "C",
    markdown: `**Ideia:** mensalidade = (despesas + lucro desejado) ÷ nº de vagas. Cuidado: o seguro aumenta 20%.

1. **Novo seguro por veículo:** 36 · 1,20 = R$ 43,20. Como há 120 veículos: 43,20 · 120 = **R$ 5 184**.
2. **Despesas totais:** 14 240 (manutenção) + 5 184 = **R$ 19 424**.
3. **Arrecadação necessária:** despesas + lucro = 19 424 + 10 000 = **R$ 29 424**.
4. **Mensalidade:** 29 424 ÷ 120 = **R$ 245,20**.

**Resposta: C** (245,20).`,
  },

  // ---------------- RAZÃO, PROPORÇÃO E REGRA DE TRÊS ----------------
  {
    year: 2019,
    index: 151,
    resposta: "A",
    markdown: `**Ideia:** cada um recebe **proporcional ao que investiu**. Some o investimento de cada sócio e divida pelo total.

1. **Sócios iniciais:** 1/3 de 1 000 000 = R$ 333 333 no início + 1/4 de 800 000 = R$ 200 000 depois → cada um investiu **R$ 533 333**.
2. **4º sócio:** só a 2ª rodada = **R$ 200 000**.
3. **Total investido:** 1 000 000 + 800 000 = R$ 1 800 000.
4. **Porcentagens:** inicial = 533 333 ÷ 1 800 000 ≈ **29,6%**; 4º = 200 000 ÷ 1 800 000 ≈ **11,11%**.

**Resposta: A** (29,60 e 11,11).`,
  },
  {
    year: 2019,
    index: 152,
    resposta: "B",
    markdown: `**Ideia:** o pagamento é **inversamente proporcional** à idade → use os **inversos** das idades como pesos.

1. **Pesos (inversos das idades 2, 3, 5):** 1/2, 1/3, 1/5. Soma = 15/30 + 10/30 + 6/30 = **31/30**.
2. A máquina de **maior idade (5 anos)** tem o menor peso: 1/5 = 6/30.
3. **Fração dela no total:** (6/30) ÷ (31/30) = 6/31.
4. **Valor:** 31 000 · 6/31 = **R$ 6 000,00**.

**Resposta: B** (R$ 6.000,00). *Mais velha = recebe menos, porque é inversamente proporcional.*`,
  },
  {
    year: 2019,
    index: 160,
    resposta: "C",
    markdown: `**Ideia:** trabalhe com a **soma** das alturas (média = soma ÷ quantidade).

1. **Soma inicial:** 20 jogadores · 1,80 = **36 m**.
2. **Troca:** sai um jogador (altura *h*) e entra outro 0,20 m mais baixo (*h* − 0,20). A soma muda em **−0,20 m**: 36 − 0,20 = **35,80 m**.
3. **Nova média:** 35,80 ÷ 20 = **1,79 m**.

**Resposta: C** (1,79).`,
  },
  {
    year: 2021,
    index: 159,
    resposta: "A",
    markdown: `**Ideia:** o tempo é **inversamente proporcional** ao número de pessoas no grupo. O rodízio termina quando o **grupo mais lento** acaba.

1. **Grupo normal:** 3 pessoas → 4 segundos.
2. **Grupo reduzido:** só 2 pessoas. Menos gente = mais tempo (inverso): tempo · pessoas é constante → 3 · 4 = 2 · t → t = **6 segundos**.
3. Os outros 3 grupos terminam em 4 s, mas a troca só acaba quando o último pneu fica pronto → **6 s**.

**Resposta: A** (6,0).`,
  },
  {
    year: 2022,
    index: 139,
    resposta: "A",
    markdown: `**Ideia:** primeiro volte da planta para o tamanho real (escala 1:50), depois desconte os espaços livres exigidos.

1. **Do desenho para o real** (× 50): altura 3,8 cm · 50 = 190 cm; largura 1,6 cm · 50 = 80 cm.
2. **Folga exigida:** 10 cm em cima e 10 cm em **cada** lateral.
3. **Altura máxima:** 190 − 10 (só em cima) = 180 cm = **1,80 m**.
4. **Largura máxima:** 80 − 10 − 10 (duas laterais) = 60 cm = **0,60 m**.

**Resposta: A** (1,80 e 0,60).`,
  },
  {
    year: 2022,
    index: 147,
    resposta: "C",
    markdown: `**Ideia:** contar os compradores da 1ª e da 2ª divulgação. Como tudo é proporcional ao investimento, mais dinheiro = proporcionalmente mais visualizações (e mais compradores).

1. **1ª divulgação:** A = 3000 · 10% · 3% = 9 compradores; B = 1000 · 30% · 2% = 6. **Total = 15.**
2. **2ª divulgação** (+R$ 300 em cada): as visualizações crescem na proporção do investimento. A: R$ 100 davam 3000 → R$ 300 dão 9000 → 9000 · 10% · 3% = 27. B: R$ 200 davam 1000 → R$ 300 dão 1500 → 1500 · 30% · 2% = 9. **Total = 36.**
3. **Aumento:** (36 − 15) ÷ 15 = 21 ÷ 15 = 1,40 = **140%** → faixa 100% < Q ≤ 150% = **bom**.

**Resposta: C** (bom).`,
  },
  {
    year: 2023,
    index: 131,
    resposta: "A",
    markdown: `**Ideia:** densidade = massa ÷ volume. Os dois refrigerantes têm praticamente o mesmo volume e os mesmos aditivos; a diferença é o **açúcar**.

1. O refrigerante **comum** tem **muito açúcar dissolvido** (bastante massa). O diet troca o açúcar por adoçantes de massa quase nula.
2. Mesmo volume, porém **mais massa** no comum → **maior densidade**.

**Resposta: A** (maior densidade).`,
  },
  {
    year: 2024,
    index: 136,
    resposta: "C",
    markdown: `**Ideia:** custo linear = **custo fixo + (custo por mochila × quantidade)**. Ache os dois usando a tabela.

1. **Custo por mochila** (inclinação): de 30 para 50 mochilas, o custo vai de 1050 para 1650 → (1650 − 1050) ÷ (50 − 30) = 600 ÷ 20 = **R$ 30 por mochila**.
2. **Custo fixo:** 1050 = fixo + 30 · 30 = fixo + 900 → fixo = **R$ 150** (confere com 100 mochilas: 150 + 3000 = 3150 ✓).
3. **Para 80 mochilas:** 150 + 30 · 80 = 150 + 2400 = **R$ 2 550**.

**Resposta: C** (2 550,00).`,
  },
  {
    year: 2024,
    index: 138,
    resposta: "C",
    markdown: `**Ideia:** dividir o valor **proporcionalmente às horas** trabalhadas por cada engenheiro.

1. **Valor a repartir:** 40% de 71 250 = **R$ 28 500**.
2. **Horas de cada um:** I = 4 · 5,5 = 22 h; II = 5 · 4 = 20 h; III = 6 · 2,5 = 15 h. **Total = 57 h.**
3. **Valor por hora:** 28 500 ÷ 57 = **R$ 500/h**. Então I = R$ 11 000; II = R$ 10 000; III = R$ 7 500.
4. **Maior diferença:** entre o que mais recebeu (I) e o que menos recebeu (III): 11 000 − 7 500 = **R$ 3 500**.

**Resposta: C** (3 500).`,
  },
  {
    year: 2024,
    index: 141,
    resposta: "E",
    markdown: `**Ideia:** densidade demográfica = habitantes ÷ área. Monte d(Q) usando as frações dadas e compare com d(R).

1. **Dados:** área de Q = ¾ da área de R; habitantes de Q = ½ dos de R.
2. **d(Q)** = habitantes(Q) ÷ área(Q) = (½·H) ÷ (¾·A) = (½ ÷ ¾) · (H ÷ A) = (2/3) · d(R).
3. Ou seja, **d(Q) = ⅔ · d(R)** (Q é menos densa que R).

**Resposta: E** (a relação d(Q) = ⅔ · d(R)).`,
  },
  {
    year: 2025,
    index: 142,
    resposta: "D",
    markdown: `**Ideia:** é interpretação do comportamento descrito: a frequência **cai** durante a fase inicial da meditação e depois **estabiliza**.

1. A partir de t₁ (início da meditação), a frequência respiratória **diminui**.
2. Ao chegar em t₂, ela **se estabiliza** — fica **constante** dali em diante.
3. Logo: diminui até t₂ e, a partir daí, torna-se constante. (Não é proporcional ao tempo, pois não cai a uma taxa fixa para sempre.)

**Resposta: D** (diminui até t₂, a partir do qual se torna constante).`,
  },

  // ---------------- GRANDEZAS, MEDIDAS E UNIDADES ----------------
  {
    year: 2021,
    index: 141,
    resposta: "A",
    markdown: `**Ideia:** montar o preço somando as três partes descritas no texto.

1. **Diárias:** preço por diária *d* vezes *n* diárias → **d · n**.
2. **Limpeza:** taxa fixa **L**.
3. **Taxa de serviço:** é *s*% **sobre o total das diárias** (d·n) → **d · n · s**.
4. **Total:** P = d·n + L + d·n·s.

**Resposta: A** (P = d·n + L + d·n·s).`,
  },
  {
    year: 2021,
    index: 158,
    resposta: "B",
    markdown: `**Ideia:** calcule o consumo total de cada avião e compare. Trabalhe com fatores (%).

1. **Avião A:** 200 passageiros · 0,02 L/km/passageiro · 2000 km = **8 000 L**.
2. **Avião B:** 10% mais passageiros (× 1,10) e 10% menos consumo por passageiro (× 0,90). Consumo B = 8000 · 1,10 · 0,90 = 8000 · **0,99** = **7 920 L**.
3. Como 0,99 = 99% do de A, o avião B consome **1% menos**.

**Resposta: B** (1% menor). *Cuidado: +10% e −10% não se cancelam — multiplicam (0,99).*`,
  },
  {
    year: 2021,
    index: 178,
    resposta: "C",
    markdown: `**Ideia:** achar a área que vira terrenos, quantos terrenos dá, e somar as vendas (20 baratos + o resto mais caros).

1. **Área total:** 3 hectares · 10 000 = 30 000 m². Tirando ruas (0,9 ha = 9 000 m²): 30 000 − 9 000 = **21 000 m²**.
2. **Número de terrenos:** 21 000 ÷ 300 = **70 terrenos**.
3. **Vendas:** 20 primeiros · R$ 20 000 = 400 000; os outros 50 · R$ 30 000 = 1 500 000.
4. **Total:** 400 000 + 1 500 000 = **R$ 1 900 000**.

**Resposta: C** (1 900 000).`,
  },
  {
    year: 2023,
    index: 147,
    resposta: "D",
    markdown: `**Ideia:** somar o carboidrato de que o casal precisa em 30 dias e ver quantos pacotes de pão cobrem isso.

1. **Por pessoa/dia:** 30 min de caminhada · 1 g/min = 30 g. **Casal** = 2 · 30 = 60 g/dia.
2. **Em 30 dias:** 60 · 30 = **1 800 g**.
3. **Fatias necessárias:** cada fatia tem 15 g → 1 800 ÷ 15 = **120 fatias**.
4. **Pacotes** (18 fatias cada): 120 ÷ 18 ≈ 6,7 → arredonda para cima = **7 pacotes**.

**Resposta: D** (7).`,
  },
  {
    year: 2023,
    index: 162,
    resposta: "D",
    markdown: `**Ideia:** preço = **parte fixa + parte que depende do volume** (função afim, y = ax + b).

1. **Parte fixa** (taxa de bombeamento): R$ 500 → é o *b*.
2. **Parte variável:** R$ 250 por m³ → 250·x.
3. **Expressão:** y = 250x + 500.

**Resposta: D** (y = 250x + 500).`,
  },
  {
    year: 2024,
    index: 158,
    resposta: "C",
    markdown: `**Ideia:** monte a unidade a partir da definição: fluxo = vazão ÷ área.

1. **Vazão** é medida em **mL/s** (mililitro por segundo).
2. **Área** é medida em **cm²**.
3. O fluxo é **diretamente** proporcional à vazão e **inversamente** proporcional à área → φ = vazão ÷ área.
4. **Unidade:** (mL/s) ÷ cm² = **mL/(s · cm²)**.

**Resposta: C** (mL por segundo por centímetro quadrado).`,
  },
  {
    year: 2025,
    index: 143,
    resposta: "B",
    markdown: `**Ideia:** é uma simples **subtração** entre a marca de referência e o tempo do atleta.

10,00 − 9,58 = **0,42 segundo**.

**Resposta: B** (0,42).`,
  },
  {
    year: 2025,
    index: 170,
    resposta: "A",
    markdown: `**Ideia:** monte a unidade a partir da definição: luminância = intensidade ÷ distância².

1. **Intensidade luminosa:** medida em **candela (cd)**.
2. **Distância ao quadrado:** metro² → **m²**.
3. **Unidade da luminância:** cd ÷ m² = **cd/m²**.

**Resposta: A** (cd/m²).`,
  },

  // ---------------- ESTATÍSTICA ----------------
  {
    year: 2020,
    index: 165,
    resposta: "D",
    markdown: `**Ideia:** trabalhar com a **soma** das alturas. A média final (15 jogadores) precisa ser ≥ 1,99 m.

1. **Soma atual:** 15 · 1,93 = 28,95 m.
2. **Tira os 4 mais baixos:** 1,78 + 1,82 + 1,84 + 1,86 = 7,30 → sobra 28,95 − 7,30 = 21,65 (11 jogadores).
3. **Entra o de 2,02:** 21,65 + 2,02 = 23,67 (12 jogadores).
4. **Soma que faltam os 3 novos:** para 15 jogadores com média 1,99 → total = 15 · 1,99 = 29,85. Faltam 29,85 − 23,67 = 6,18.
5. **Média dos 3 novos:** 6,18 ÷ 3 = **2,06 m**.

**Resposta: D** (2,06).`,
  },
  {
    year: 2021,
    index: 146,
    resposta: "E",
    markdown: `**Ideia:** o coeficiente de variação é CV = desvio padrão ÷ média. A nova ração entra se o **CV novo for menor** que o atual.

1. **CV atual:** 1 ÷ 10 = 0,10.
2. **CV novo:** 1,5 ÷ X (X = nova média). Queremos 1,5 ÷ X < 0,10.
3. **Resolvendo:** 1,5 < 0,10 · X → X > **15**.

**Resposta: E** (superior a 15,0 kg).`,
  },
  {
    year: 2022,
    index: 151,
    resposta: "C",
    markdown: `**Ideia:** voltar da água ingerida para a massa perdida, e desta para o tempo (1,5 kg por hora).

1. **Água = 40% a mais que a massa perdida:** 1,7 L = 1,4 · (massa perdida) → massa perdida = 1,7 ÷ 1,4 ≈ **1,214 kg**.
2. **Tempo:** perde 1,5 kg por hora → tempo = 1,214 ÷ 1,5 ≈ 0,81 h.
3. **Em minutos:** 0,81 · 60 ≈ **48,6 min** → entre 45 e 55 minutos.

**Resposta: C** (mais de 45 e menos de 55 minutos).`,
  },
  {
    year: 2023,
    index: 128,
    resposta: "C",
    markdown: `**Ideia:** uma onda só interfere/"atrapalha" outra quando estão **sintonizadas** — ou seja, na **mesma frequência** (é o princípio da ressonância, o mesmo do rádio ao "pegar" uma estação).

1. O rádio do piloto opera numa certa frequência.
2. Só haverá interferência se o celular emitir ondas **na mesma frequência** do rádio.

**Resposta: C** (tiverem a mesma frequência).`,
  },
  {
    year: 2023,
    index: 180,
    resposta: "C",
    markdown: `**Ideia:** ele planta e precisa de água nos **dois meses seguintes** → escolher o par de meses consecutivos com **maior soma** (maior média) de chuva.

Somando pares consecutivos:
- Out+Nov = 250+150 = 400
- Nov+Dez = 150+200 = 350
- **Dez+Jan = 200+450 = 650** ← maior
- Jan+Fev = 450+100 = 550
- Fev+Mar = 100+200 = 300

O maior é **Dez+Jan** → deve plantar no início de **dezembro**.

**Resposta: C** (Dezembro).`,
  },
  {
    year: 2024,
    index: 154,
    resposta: "C",
    markdown: `**Ideia:** média = soma dos tempos ÷ quantidade de serviços.

1. **Soma:** 36 + 17 + 27 + 13 + 13 + 13 = **119**.
2. **Quantidade:** 6 serviços.
3. **Média:** 119 ÷ 6 ≈ **19,8 minutos**.

**Resposta: C** (19,8).`,
  },
  {
    year: 2024,
    index: 164,
    resposta: "B",
    markdown: `**Ideia:** chamar a soma das 4 notas de S. A média certa é S/4; a errada (÷ 5) ficou 1 unidade menor.

1. **Equação:** S/4 − S/5 = 1.
2. Tirando o denominador comum (20): (5S − 4S)/20 = 1 → S/20 = 1 → **S = 20**.
3. **Média correta:** 20 ÷ 4 = **5**.

**Resposta: B** (5).`,
  },
  {
    year: 2025,
    index: 157,
    resposta: "D",
    markdown: `**Ideia:** o critério é ter a **maioria** das idades entre 20 e 30. Dá para ter **certeza** disso no grupo cujo **desvio padrão é bem pequeno** (todas as idades ficam grudadas na média).

1. O grupo 4 tem **média 25** e **desvio padrão 1** — um desvio muito baixo significa que praticamente todas as idades estão bem perto de 25 anos.
2. Estando quase todas em torno de 25 (dentro de 20–30), esse é o único grupo em que se pode **garantir** a maioria na faixa, mesmo com o quadro incompleto.

**Resposta: D** (grupo 4).`,
  },
  {
    year: 2025,
    index: 164,
    resposta: "C",
    markdown: `**Ideia:** traduzir a frase "T é, em média, 1,59 vez F" em fórmula.

1. "T é 1,59 vez F" → T = 1,59 · F.
2. Isolando a razão: **T ⁄ F = 1,59**.

**Resposta: C** (T/F = 1,59).`,
  },
  {
    year: 2025,
    index: 180,
    resposta: "C",
    markdown: `**Ideia:** achar a velocidade no 2º tempo e aplicá-la na prorrogação (mesma velocidade).

1. **No 2º tempo** (45 min) ele correu 4,5 km → velocidade = 4,5 ÷ 45 = **0,1 km/min**.
2. **Na prorrogação** (30 min), mesma velocidade: 0,1 · 30 = **3 km**.
3. **Total percorrido:** 4,5 + 3 = **7,5 km**.

**Resposta: C** (7,5).`,
  },

  // ---------------- PROBABILIDADE ----------------
  {
    year: 2019,
    index: 138,
    resposta: "E",
    markdown: `**Ideia:** o gasto total (transporte + recompensa) não pode passar de 100% do valor. Some as partes e veja quanto sobra para a recompensa.

1. **Transporte:** um quinto do valor = 20%.
2. **Limite:** transporte + recompensa ≤ 100% → 20% + recompensa ≤ 100%.
3. **Recompensa máxima:** 100% − 20% = **80%**.

**Resposta: E** (80%).`,
  },
  {
    year: 2019,
    index: 159,
    resposta: "D",
    markdown: `**Ideia:** é mais fácil calcular a chance de **não** perceber nenhuma placa e usar o complementar. Lembre que já existe **1 placa** instalada.

1. **Não perceber uma placa:** 1 − 1/2 = 1/2. Com *k* placas (independentes), não perceber nenhuma = (1/2)ᵏ.
2. **Perceber pelo menos uma:** 1 − (1/2)ᵏ > 99/100 → (1/2)ᵏ < 1/100 → 2ᵏ > 100 → **k ≥ 7** (pois 2⁷ = 128).
3. Como já há 1 placa, as **novas** são 7 − 1 = **6**.

**Resposta: D** (6).`,
  },
  {
    year: 2019,
    index: 173,
    resposta: "E",
    markdown: `**Ideia:** é probabilidade condicional (Bayes). Queremos P(inconsistente | fraudulenta) = casos fraudulentos **e** inconsistentes ÷ **todos** os casos fraudulentos.

1. **Inconsistentes e fraudulentas:** 20% · 25% = 0,20 · 0,25 = **0,05**.
2. **Consistentes e fraudulentas:** 80% · 6,25% = 0,80 · 0,0625 = **0,05**.
3. **Total de fraudulentas:** 0,05 + 0,05 = 0,10.
4. **Probabilidade pedida:** 0,05 ÷ 0,10 = **0,5**.

**Resposta: E** (0,5000).`,
  },
  {
    year: 2020,
    index: 178,
    resposta: "A",
    markdown: `**Ideia:** o CRC é uma **média ponderada** dos fatores pelas probabilidades: 70% chuva (0,7) e 30% sem chuva (0,3). Calcule para cada pneu e pegue o maior.

- **Pneu I:** 6·0,7 + 3·0,3 = 4,2 + 0,9 = **5,1**
- Pneu II: 7·0,7 + (−4)·0,3 = 4,9 − 1,2 = 3,7
- Pneu III: −2·0,7 + 10·0,3 = −1,4 + 3,0 = 1,6
- Pneu IV: 2·0,7 + 8·0,3 = 1,4 + 2,4 = 3,8
- Pneu V: −6·0,7 + 7·0,3 = −4,2 + 2,1 = −2,1

O maior CRC é o do **pneu I** (5,1).

**Resposta: A** (pneu I).`,
  },
  {
    year: 2021,
    index: 142,
    resposta: "B",
    markdown: `**Ideia:** use o complementar — pontuar = "acertar pelo menos um" = 1 − "errar todos".

1. **Errar um dardo:** 1 − 1/2 = 1/2. Errar todos os *n*: (1/2)ⁿ.
2. **Pontuar:** 1 − (1/2)ⁿ ≥ 9/10 → (1/2)ⁿ ≤ 1/10 → 2ⁿ ≥ 10 → **n ≥ 4** (2⁴ = 16).

**Resposta: B** (4 dardos).`,
  },
  {
    year: 2023,
    index: 138,
    resposta: "C",
    markdown: `**Ideia:** ganhar = tirar preta em A **e** preta em B → multiplica as probabilidades. Queremos essa chance ≤ 1%, mexendo só nas brancas da urna B.

1. **Chance de ganhar:** P(preta A) · P(preta B) = 0,20 · P(preta B) ≤ 0,01 → **P(preta B) ≤ 0,05**.
2. **Urna B** tem 4 pretas. P(preta B) = 4 ÷ (4 + brancas) ≤ 0,05 → 4 + brancas ≥ 80 → **brancas ≥ 76**.
3. **Quantas B já tem:** hoje P(preta B) = 0,25 → 4 ÷ (4 + b) = 0,25 → b = 12 brancas.
4. **Adicionar:** 76 − 12 = **64 brancas**.

**Resposta: C** (64).`,
  },
  {
    year: 2025,
    index: 154,
    resposta: "D",
    markdown: `**Ideia:** contar de quantos jeitos os 4 envelopes podem ser devolvidos e quantos são "todos certos".

1. **Total de ordens possíveis:** 4 envelopes podem ser distribuídos de 4! = 4·3·2·1 = **24 maneiras**.
2. **Ordem "todos certos":** só **1** (cada um recebe o seu).
3. **Probabilidade:** 1 ÷ 24 = **1/24**.

**Resposta: D** (1/24).`,
  },
  {
    year: 2025,
    index: 169,
    resposta: "E",
    markdown: `**Ideia:** Artur fica com o **maior** dos seus 2 dados; João, com 1 dado. Em empate, João vence — então Artur só vence se seu maior for **estritamente** maior que o de João. É mais fácil somar as chances por valor de João.

1. Para um valor *j* de João, Artur vence se **pelo menos um** dos 2 dados dele for maior que *j*: P = 1 − (j/6)² (a chance de os dois serem ≤ j é (j/6)²).
2. Somando para j = 1…6 e dividindo por 6 (cada valor de João tem prob. 1/6):
   P(Artur) = (1/6)·Σ[1 − (j/6)²] = (1/6)·(6 − 91/36) = (1/6)·(125/36) = **125/216**.
3. Como 125/216 > 1/2, **Artur** é o favorito.

**Resposta: E** (Artur, com probabilidade 125/216).`,
  },

  // ---------------- GEOMETRIA ANALÍTICA / FUNÇÕES / COMBINATÓRIA / PROGRESSÕES / ÁLGEBRA ----------------
  {
    year: 2024,
    index: 173,
    resposta: "C",
    markdown: `**Ideia:** as colunas ficam numa linha de 3 m (300 cm). Para gastar menos, use o **menor número de colunas** — logo, os maiores vãos permitidos (15 cm). Calcule quantas colunas cada loja exige e o custo.

1. Com *n* colunas há *n + 1* vãos (parede-coluna, coluna-coluna, coluna-parede). Cada vão ≤ 15 cm.
2. Condição: 300 − n·(2r) repartido em (n+1) vãos ≤ 15 → **n ≥ 285 ÷ (15 + 2r)** (arredonda para cima).
3. Por loja (2r = diâmetro): I (r5)→n=12·R$60=720; II (r10)→n=9·70=630; **III (r12)→n=8·75=600**; IV (r15)→n=7·90=630; V (r20)→n=6·120=720.
4. Menor custo: **Loja III** (R$ 600).

**Resposta: C** (Loja III).`,
  },
  {
    year: 2024,
    index: 156,
    resposta: "B",
    markdown: `**Ideia:** montar o preço somando a parte fixa com as que dependem do tempo e da distância.

1. **Valor fixo:** R$ 2,00.
2. **Por minuto:** 0,26 · T.
3. **Por km:** 1,40 · D.
4. **Total:** V = 2,00 + 0,26T + 1,40D. (O "F" é o próprio 2,00 — não se multiplica por outra letra.)

**Resposta: B** (2,00 + 0,26T + 1,40D).`,
  },
  {
    year: 2024,
    index: 179,
    resposta: "C",
    markdown: `**Ideia:** a água esfria do valor inicial (fervendo) até a temperatura ambiente. Na fórmula T(t) = a + 80·bᵗ, *a* é a temperatura final e *b* diz o quanto sobra a cada minuto.

1. **No início (t = 0):** bᵗ = b⁰ = 1 → T(0) = a + 80 = 100 (fervendo) → **a = 20** (a temperatura ambiente, para onde a água tende).
2. **b pelo gráfico:** a "sobra" de 80 °C cai pela metade a cada minuto (t = 1 → 60 °C; t = 2 → 40 °C) → **b = 0,5**.

**Resposta: C** (a = 20; b = 0,5).`,
  },
  {
    year: 2019,
    index: 156,
    resposta: "C",
    markdown: `**Ideia:** conte **todas** as formas de fazer 4 duplas e **tire** as que juntam os 2 canhotos (proibidas).

1. **Total de formar 4 duplas com 8 pessoas:** 8! ÷ (2⁴ · 4!) = 40320 ÷ (16 · 24) = **105**.
2. **Casos proibidos** (os 2 canhotos na mesma dupla): fixada essa dupla, restam 6 pessoas para 3 duplas → 6! ÷ (2³ · 3!) = 720 ÷ 48 = **15**.
3. **Válidas:** 105 − 15 = **90**.

**Resposta: C** (90).`,
  },
  {
    year: 2025,
    index: 179,
    resposta: "C",
    markdown: `**Ideia:** o filho mais velho leva **exatamente um** entre bicicleta (B) e celular (C). Separe em dois casos (leva B, ou leva C) e conte cada um.

1. **Caso "velho leva B (e não C)":** ele escolhe B + 2 dos 6 presentes "comuns" (nem B nem C) → C(6,2) = 15. Sobram 5 presentes (incluindo C) para o do meio (2) e o mais novo (3): C(5,3) = 10. → 15 · 10 = **150**.
2. **Caso "velho leva C (e não B)":** por simetria, também **150**.
3. **Total:** 150 + 150 = **300**.

**Resposta: C** (300).`,
  },
  {
    year: 2019,
    index: 155,
    resposta: "E",
    markdown: `**Ideia:** a sequência **repete um bloco**. Descubra o tamanho do bloco e ache a posição 2015 dentro dele (resto da divisão).

1. **Bloco que se repete:** 5, 4, 3, 2, 1, 2, 3, 4 → tem **8 números**.
2. **Posição 2015 no ciclo:** 2015 ÷ 8 = 251, resto **7** (pois 8·251 = 2008).
3. **7ª posição do bloco:** (5,4,3,**2,1,2,3**,4) → é o número **3**.
4. Código 3 = **caixa de direção**.

**Resposta: E** (caixa de direção).`,
  },
  {
    year: 2024,
    index: 165,
    resposta: "B",
    markdown: `**Ideia:** a senha é 2 algarismos distintos + 3 letras diferentes, nessa ordem. Conte cada parte pelo princípio multiplicativo e multiplique.

1. **Algarismos:** teclas disponíveis {1, 2, 5, 7, 0} = 5 dígitos; 2 distintos com ordem → 5 · 4 = **20**.
2. **Letras disponíveis:** só as teclas 2 (A,B,C), 5 (J,K,L) e 7 (P,Q,R,S) têm letras → 3 + 3 + 4 = **10 letras**.
3. **3 letras diferentes com ordem:** 10 · 9 · 8 = **720**.
4. **Total:** 20 · 720 = **14 400**.

**Resposta: B** (14 400).`,
  },
  {
    year: 2024,
    index: 150,
    resposta: "C",
    markdown: `**Ideia:** use a relação M₂ − M₁ = (2/3)·log(E₂/E₁). O 2º terremoto liberou 10 vezes mais energia.

1. **Energias:** E₁ = E₂/10 → E₂/E₁ = 10.
2. **log(10) = 1**, então M₂ − M₁ = (2/3)·1 = **0,667**.
3. **M₂:** 6,9 + 0,667 ≈ **7,6**.

**Resposta: C** (7,6).`,
  },
  {
    year: 2025,
    index: 171,
    resposta: "D",
    markdown: `**Ideia:** acompanhe só o jogador da **posição 1**: quanto ele perde e quanto ganha por rodada.

1. **Transfere:** dá 1 moeda (para a posição 2).
2. **Recebe:** ganha 4 moedas (da posição 4).
3. **Saldo por rodada:** +4 − 1 = **+3 moedas**.
4. Começando com 100, após *n* rodadas: **100 + 3n**.

**Resposta: D** (100 + 3n).`,
  },
];
