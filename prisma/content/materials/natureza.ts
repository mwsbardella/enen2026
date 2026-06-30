// Conteúdo de estudo de CIÊNCIAS DA NATUREZA, gerado a partir da engenharia
// reversa das provas (2019–2025). Assuntos da taxonomia, ORDENADOS pela frequência
// real. A Natureza do ENEM é contextualizada e interdisciplinar: parte de
// fenômenos do cotidiano, do ambiente e da saúde.

import type { MaterialSeed } from "./humanas";

const L = (titulo: string, url: string, fonte: string) => ({ titulo, url, fonte });

export const naturezaMateriais: MaterialSeed[] = [
  {
    topicSlug: "nat-mecanica",
    titulo: "Física: Mecânica",
    resumoMarkdown: `## Física: Mecânica

A parte da Física que **mais cai**. Sempre aplicada a situações reais (trânsito, esportes, máquinas).

**Ferramentas essenciais:**
- **Cinemática**: velocidade média, aceleração, MRU e MRUV, gráficos de movimento.
- **Leis de Newton**: força resultante, inércia, ação e reação; atrito.
- **Energia e trabalho**: energia cinética e potencial, **conservação da energia mecânica**, potência.
- **Quantidade de movimento** (impulso, colisões) em nível introdutório.

**Leitura ENEM:** o enunciado descreve um movimento ou uma força do dia a dia e pede uma grandeza ou a explicação física. Muitas questões saem por **conservação de energia** ou por análise de **gráfico**. Atenção às unidades (m/s × km/h) e ao que é dado × pedido.`,
    links: [
      L("Leis de Newton — Brasil Escola", "https://brasilescola.uol.com.br/fisica/as-leis-newton.htm", "Brasil Escola"),
      L("Energia mecânica — Mundo Educação", "https://mundoeducacao.uol.com.br/fisica/energia-mecanica.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-fisico-quimica",
    titulo: "Físico-química",
    resumoMarkdown: `## Físico-química

Bloco de Química com altíssima incidência, ligado a soluções, energia e velocidade das reações.

**Ferramentas essenciais:**
- **Soluções e concentração** (g/L, mol/L, ppm), diluição.
- **pH e pOH**: ácidos e bases, escala, aplicações (solo, alimentos, ambiente).
- **Termoquímica**: reações exotérmicas/endotérmicas, entalpia, combustíveis.
- **Cinética química**: fatores que alteram a velocidade (temperatura, concentração, catalisador, superfície).
- **Equilíbrio químico** (deslocamento, Le Chatelier) em nível introdutório.

**Leitura ENEM:** parte de um contexto (uma reação industrial, um alimento, o ambiente) e pede um cálculo de concentração/pH ou a explicação de por que a reação acelera/desloca. Domine **mol** e **concentração** — são a base.`,
    links: [
      L("Concentração de soluções — Mundo Educação", "https://mundoeducacao.uol.com.br/quimica/concentracao-molar.htm", "Mundo Educação"),
      L("pH e pOH — Brasil Escola", "https://brasilescola.uol.com.br/quimica/ph-poh.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-termologia",
    titulo: "Física: Termologia e energia",
    resumoMarkdown: `## Física: Termologia e energia

Calor, temperatura e suas aplicações em energia — tema frequente e bem cotidiano.

**Ferramentas essenciais:**
- **Temperatura × calor**: escalas (Celsius, Kelvin), equilíbrio térmico.
- **Calor sensível e latente**: aquecimento e mudanças de estado (calorimetria).
- **Propagação de calor**: condução, convecção e radiação (e exemplos do dia a dia).
- **Dilatação** térmica; noções de **termodinâmica** (transformações gasosas, máquinas térmicas, rendimento).

**Leitura ENEM:** situações como aquecimento de água, isolamento térmico, motores e eficiência energética. Costuma cobrar **trocas de calor** (Q = m·c·ΔT) ou o tipo de **propagação** envolvido. Conecta-se a sustentabilidade e consumo de energia.`,
    links: [
      L("Calorimetria — Brasil Escola", "https://brasilescola.uol.com.br/fisica/calorimetria.htm", "Brasil Escola"),
      L("Propagação de calor — Mundo Educação", "https://mundoeducacao.uol.com.br/fisica/propagacao-calor.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-organica",
    titulo: "Química orgânica",
    resumoMarkdown: `## Química orgânica

A química do **carbono** — muito ligada a combustíveis, alimentos, medicamentos e materiais.

**Ferramentas essenciais:**
- **Cadeias carbônicas** e **funções orgânicas**: hidrocarbonetos, álcoois, ácidos carboxílicos, ésteres, aldeídos, cetonas, aminas.
- **Identificação de grupos funcionais** numa estrutura.
- **Reações** importantes: combustão, esterificação, saponificação; **polímeros** (plásticos, biopolímeros).
- Aplicações: etanol e biocombustíveis, fármacos, agroquímicos.

**Leitura ENEM:** apresenta uma estrutura ou um contexto (um combustível, um aroma, um plástico) e pede a função orgânica, o produto da reação ou uma propriedade. Saber **reconhecer grupos funcionais** resolve boa parte.`,
    links: [
      L("Funções orgânicas — Mundo Educação", "https://mundoeducacao.uol.com.br/quimica/funcoes-organicas.htm", "Mundo Educação"),
      L("Química orgânica — Brasil Escola", "https://brasilescola.uol.com.br/quimica/quimica-organica.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-eletricidade",
    titulo: "Física: Eletricidade e magnetismo",
    resumoMarkdown: `## Física: Eletricidade e magnetismo

Eletricidade aplicada ao consumo doméstico é um clássico do ENEM.

**Ferramentas essenciais:**
- **Circuitos**: corrente, tensão, resistência e a **Lei de Ohm** (U = R·i).
- **Potência elétrica** (P = U·i) e **consumo de energia** (kWh) — a aplicação mais cobrada (conta de luz).
- Associação de resistores (série e paralelo) em nível básico.
- Noções de **eletromagnetismo** (campo magnético, indução).

**Leitura ENEM:** quase sempre uma situação de **consumo de energia** de aparelhos (calcular kWh, custo na conta, qual aparelho gasta mais). Domine potência × tempo × tarifa. Atenção às unidades (W, kW, kWh).`,
    links: [
      L("Potência elétrica e consumo (kWh) — Brasil Escola", "https://brasilescola.uol.com.br/fisica/potencia-eletrica.htm", "Brasil Escola"),
      L("Lei de Ohm e circuitos — Mundo Educação", "https://mundoeducacao.uol.com.br/fisica/lei-ohm.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-genetica",
    titulo: "Biologia: Genética e evolução",
    resumoMarkdown: `## Biologia: Genética e evolução

Tema frequente, ligado a hereditariedade, biotecnologia e à explicação da diversidade da vida.

**Ferramentas essenciais:**
- **Genética**: DNA, genes, cromossomos; **leis de Mendel** (dominância, segregação), heredogramas, probabilidade de descendentes.
- **Biotecnologia**: transgênicos, clonagem, testes de DNA, terapia gênica.
- **Evolução**: seleção natural (Darwin), adaptação, ancestralidade comum, especiação; evidências evolutivas.

**Leitura ENEM:** um heredograma ou cruzamento pedindo a **probabilidade** de um fenótipo, ou um texto sobre evolução/biotecnologia pedindo o conceito correto. Genética mendeliana cai com cálculo de probabilidade — conecta com Matemática.`,
    links: [
      L("Leis de Mendel — Brasil Escola", "https://brasilescola.uol.com.br/biologia/leis-mendel.htm", "Brasil Escola"),
      L("Seleção natural e evolução — Mundo Educação", "https://mundoeducacao.uol.com.br/biologia/teoria-evolucao.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-ondas",
    titulo: "Física: Ondas, óptica e som",
    resumoMarkdown: `## Física: Ondas, óptica e som

Fenômenos ondulatórios do cotidiano: luz, som e comunicações.

**Ferramentas essenciais:**
- **Ondas**: frequência, comprimento de onda, velocidade (v = λ·f); ondas mecânicas × eletromagnéticas; espectro.
- **Som (acústica)**: altura, intensidade, timbre; eco e reverberação; efeito Doppler (introdutório).
- **Óptica**: reflexão, refração, espelhos e lentes; formação de imagens; aplicações (visão, instrumentos).

**Leitura ENEM:** uma situação com luz, som ou ondas de comunicação (rádio, micro-ondas) pedindo a relação entre **frequência, comprimento de onda e velocidade**, ou o fenômeno óptico envolvido. A relação v = λ·f resolve muita questão.`,
    links: [
      L("Ondas: características — Mundo Educação", "https://mundoeducacao.uol.com.br/fisica/ondas.htm", "Mundo Educação"),
      L("Reflexão e refração da luz — Brasil Escola", "https://brasilescola.uol.com.br/fisica/optica.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-fisiologia",
    titulo: "Biologia: Fisiologia e corpo humano",
    resumoMarkdown: `## Biologia: Fisiologia e corpo humano

Como o corpo funciona — com forte ligação a **saúde pública** e doenças.

**Ferramentas essenciais:**
- **Sistemas do corpo**: digestório, respiratório, circulatório, nervoso, endócrino (hormônios) e suas integrações.
- **Saúde e doenças**: infecciosas (vírus, bactérias, protozoários), formas de transmissão e prevenção; **imunidade e vacinas**.
- **Saúde pública**: epidemias, saneamento, prevenção.

**Leitura ENEM:** um texto sobre uma doença, uma vacina ou um processo do corpo, pedindo o mecanismo correto (como age o sistema imune, como se transmite, como prevenir). Conecta-se a cidadania e políticas de saúde.`,
    links: [
      L("Sistema imunológico e vacinas — Brasil Escola", "https://brasilescola.uol.com.br/biologia/sistema-imunologico.htm", "Brasil Escola"),
      L("Fisiologia humana — Mundo Educação", "https://mundoeducacao.uol.com.br/biologia/fisiologia-humana.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-quimica-ambiental",
    titulo: "Química e meio ambiente",
    resumoMarkdown: `## Química e meio ambiente

A química aplicada a problemas ambientais e ao cotidiano — tema muito interdisciplinar.

**Ferramentas essenciais:**
- **Poluição**: gases do **efeito estufa** (CO₂, CH₄), chuva ácida, poluentes da água e do solo.
- **Combustíveis e energia**: combustão, combustíveis fósseis × **biocombustíveis**, emissões.
- **Tratamento**: de água e de resíduos; reciclagem; química verde.
- Ciclos biogeoquímicos (carbono, nitrogênio) na interface com a Biologia.

**Leitura ENEM:** um problema ambiental real pedindo a explicação química (por que um gás causa efeito estufa, como tratar um efluente) ou a alternativa mais **sustentável**. Liga-se diretamente à Geografia ambiental e à redação.`,
    links: [
      L("Efeito estufa e poluição — Mundo Educação", "https://mundoeducacao.uol.com.br/quimica/efeito-estufa.htm", "Mundo Educação"),
      L("Combustíveis e meio ambiente — Brasil Escola", "https://brasilescola.uol.com.br/quimica/combustiveis.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-citologia",
    titulo: "Biologia: Citologia e bioquímica",
    resumoMarkdown: `## Biologia: Citologia e bioquímica

A célula e seus processos — base de toda a Biologia.

**Ferramentas essenciais:**
- **Célula**: estrutura (membrana, citoplasma, núcleo) e **organelas** com suas funções; célula procarionte × eucarionte.
- **Metabolismo energético**: **fotossíntese** e **respiração celular** (e sua relação).
- **Biomoléculas**: carboidratos, lipídios, **proteínas** e enzimas, ácidos nucleicos.
- Transporte pela membrana (osmose, difusão).

**Leitura ENEM:** um processo celular ou metabólico (fotossíntese, respiração, ação enzimática) pedindo a organela/etapa responsável ou a relação entre os processos. Fotossíntese × respiração é uma dupla muito cobrada.`,
    links: [
      L("Organelas celulares — Brasil Escola", "https://brasilescola.uol.com.br/biologia/organelas-citoplasmaticas.htm", "Brasil Escola"),
      L("Fotossíntese e respiração celular — Mundo Educação", "https://mundoeducacao.uol.com.br/biologia/fotossintese.htm", "Mundo Educação"),
    ],
  },
  {
    topicSlug: "nat-quimica-geral",
    titulo: "Química geral e estequiometria",
    resumoMarkdown: `## Química geral e estequiometria

Os fundamentos da Química: do átomo aos cálculos de reação.

**Ferramentas essenciais:**
- **Estrutura atômica** e a **tabela periódica** (propriedades, organização).
- **Ligações químicas** (iônica, covalente, metálica) e suas consequências nas propriedades dos materiais.
- **Reações químicas** e **balanceamento**.
- **Estequiometria**: o **mol**, massa molar e cálculos de quantidades (reagentes/produtos).

**Leitura ENEM:** uma reação em contexto pedindo quanto se forma/consome (estequiometria) ou uma propriedade explicada pela ligação/estrutura. O **conceito de mol** e a leitura da tabela periódica são a base de tudo.`,
    links: [
      L("Estequiometria e mol — Mundo Educação", "https://mundoeducacao.uol.com.br/quimica/estequiometria.htm", "Mundo Educação"),
      L("Ligações químicas — Brasil Escola", "https://brasilescola.uol.com.br/quimica/ligacoes-quimicas.htm", "Brasil Escola"),
    ],
  },
  {
    topicSlug: "nat-ecologia",
    titulo: "Biologia: Ecologia",
    resumoMarkdown: `## Biologia: Ecologia

Relações entre os seres vivos e o ambiente — tema-ponte com a Geografia e a sustentabilidade.

**Ferramentas essenciais:**
- **Cadeias e teias alimentares**: produtores, consumidores, decompositores; fluxo de energia e pirâmides ecológicas.
- **Ciclos biogeoquímicos** (água, carbono, nitrogênio).
- **Relações ecológicas** (harmônicas e desarmônicas: competição, predação, mutualismo…).
- **Impactos e desequilíbrios**: bioacumulação, espécies invasoras, perda de biodiversidade.

**Leitura ENEM:** um ecossistema ou cadeia alimentar pedindo o efeito de uma alteração (remover um nível, introduzir um poluente que se **acumula**). A resposta certa segue o **fluxo de energia/matéria** e suas consequências.`,
    links: [
      L("Cadeia e teia alimentar — Brasil Escola", "https://brasilescola.uol.com.br/biologia/cadeia-alimentar.htm", "Brasil Escola"),
      L("Ciclos biogeoquímicos — Mundo Educação", "https://mundoeducacao.uol.com.br/biologia/ciclos-biogeoquimicos.htm", "Mundo Educação"),
    ],
  },
];
