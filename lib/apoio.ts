/**
 * Materiais de APOIO — consulta rápida (cola/cheat-sheet) para as matérias mais
 * difíceis do ENEM. Diferente de /materiais (teoria assunto-a-assunto vinda da
 * classificação de questões): aqui é referência transversal, para bater o olho
 * durante os estudos.
 *
 * Conteúdo estático, versionado no git (fora do banco) — as páginas /apoio e
 * /apoio/[slug] renderizam a partir daqui. Markdown com GFM (tabelas e imagens
 * já renderizam pela classe .prose-enem). Fórmulas em texto simples/unicode
 * (não há LaTeX): use ² ³ · × ÷ √ π Δ ≈ ≤ ≥ ° etc.
 */

import type { LinkItem } from "@/lib/json";

export type MaterialApoio = {
  slug: string; // usado na URL /apoio/[slug]
  titulo: string;
  area: string; // slug de lib/subjects.ts (para a cor do card)
  icon: string; // emoji do card
  resumo: string; // 1 linha para o card do índice
  resumoMarkdown: string; // corpo em markdown
  links: LinkItem[];
};

export const materiaisApoio: MaterialApoio[] = [
  // ------------------------------------------------------------------ Química
  {
    slug: "tabela-periodica",
    titulo: "Tabela periódica: como ler",
    area: "natureza",
    icon: "🧪",
    resumo: "Ler um elemento, grupos, períodos, famílias e propriedades periódicas — com exemplo.",
    resumoMarkdown: `# Tabela periódica — como ler

A tabela organiza os **118 elementos** em ordem crescente de **número atômico (Z)** = número de prótons. Cada quadradinho (célula) traz as informações de um elemento.

![Tabela periódica dos elementos](/apoio/tabela-periodica.svg)

## 1. Lendo uma célula (exemplo: o Sódio)

![Como ler um elemento na tabela — exemplo do Sódio](/apoio/como-ler-elemento.svg)

Do **Sódio** tiramos na hora:

| Informação | Valor | De onde vem |
|---|---|---|
| Prótons | 11 | é o próprio Z |
| Elétrons (átomo neutro) | 11 | igual ao nº de prótons |
| Nêutrons | ≈ 12 | massa (23) − prótons (11) |
| Período | 3 | está na 3ª linha |
| Grupo/família | 1 (metais alcalinos) | 1ª coluna |
| Camada de valência | 1 elétron | grupo 1 ⇒ 1 elétron na última camada |

> **Regra de ouro:** o **número do grupo** (colunas 1, 2 e 13–18) dá quantos elétrons o átomo tem na **última camada** (valência) — e é isso que manda na reatividade.

## 2. Linhas e colunas

- **Períodos** (linhas 1 a 7): indicam o **número de camadas** eletrônicas. Período 3 ⇒ 3 camadas.
- **Grupos/famílias** (colunas 1 a 18): elementos da mesma coluna têm **propriedades parecidas** porque têm a mesma valência.

### Famílias que mais caem

| Grupo | Família | Valência | Característica |
|---|---|---|---|
| 1 | Metais alcalinos | 1 | muito reativos (Na, K) |
| 2 | Metais alcalino-terrosos | 2 | reativos (Ca, Mg) |
| 13–16 | (várias) | 3 a 6 | — |
| 17 | Halogênios | 7 | formam sais (F, Cl) |
| 18 | Gases nobres | 8 (2 no He) | estáveis, não reagem |

Blocos: **metais** (maioria, esquerda/centro), **ametais** (canto superior direito), **gases nobres** (última coluna), **hidrogênio** (fora de família — fica sozinho).

## 3. Propriedades periódicas (as setas que salvam a questão)

Decore o **sentido do aumento**:

| Propriedade | Aumenta na direção | Campeão |
|---|---|---|
| **Raio atômico** (tamanho) | ↓ desce o grupo e ← para a esquerda | Frâncio (Fr) |
| **Eletronegatividade** (puxa elétron) | ↑ sobe e → para a direita | **Flúor (F)** |
| **Energia de ionização** (arrancar elétron) | ↑ sobe e → para a direita | Flúor/gases nobres |
| **Caráter metálico** | ↓ desce e ← para a esquerda | metais alcalinos |

> Repare: **raio** e **caráter metálico** apontam para o **mesmo canto** (inferior esquerdo). **Eletronegatividade** e **energia de ionização** apontam para o **canto oposto** (superior direito, o Flúor). Se lembrar disso, acerta quase toda questão de propriedade periódica.

## 4. Íons — o pulo do gato

Os átomos ganham ou perdem elétrons para ficar **estáveis** (com 8 elétrons na última camada, como os gases nobres — a *regra do octeto*):

- **Metais perdem** elétrons ⇒ viram **cátions** (+): Na → Na⁺, Ca → Ca²⁺, Al → Al³⁺.
- **Ametais ganham** elétrons ⇒ viram **ânions** (−): Cl → Cl⁻, O → O²⁻.

Isso explica por que Na⁺ e Cl⁻ se atraem e formam o **NaCl** (sal de cozinha) — ligação iônica.

## 5. Checklist para a prova

1. Achou o elemento? Leia **Z** (prótons) e a **massa** (para os nêutrons).
2. **Linha** = camadas (período). **Coluna** = valência (grupo).
3. Precisa comparar tamanho/eletronegatividade? Use as **setas**.
4. É metal ou ametal? Isso diz se ele **perde** ou **ganha** elétron.`,
    links: [
      { titulo: "Ptable — tabela periódica interativa (PT)", url: "https://ptable.com/?lang=pt", fonte: "ptable.com" },
      { titulo: "Tabela periódica — Brasil Escola", url: "https://brasilescola.uol.com.br/quimica/tabela-periodica.htm", fonte: "Brasil Escola" },
      { titulo: "Propriedades periódicas — Mundo Educação", url: "https://mundoeducacao.uol.com.br/quimica/propriedades-periodicas.htm", fonte: "Mundo Educação" },
      { titulo: "Química (curso completo) — Khan Academy", url: "https://pt.khanacademy.org/science/quimica", fonte: "Khan Academy" },
    ],
  },

  {
    slug: "quimica-consulta",
    titulo: "Química: funções, solubilidade e reações",
    area: "natureza",
    icon: "⚗️",
    resumo: "Ácidos, bases, sais, óxidos, nomenclatura, solubilidade e os tipos de reação.",
    resumoMarkdown: `# Química — consulta rápida

## 1. Funções inorgânicas (como reconhecer)

| Função | Regra prática | Exemplos |
|---|---|---|
| **Ácido** | começa com **H** e libera H⁺ em água | HCl, H₂SO₄, HNO₃ |
| **Base** | tem **OH** e libera OH⁻ em água | NaOH, Ca(OH)₂, NH₄OH |
| **Sal** | metal + ametal (vem de ácido + base) | NaCl, CaCO₃, KNO₃ |
| **Óxido** | dois elementos, sendo um **oxigênio** | CO₂, H₂O, Fe₂O₃, CaO |

**Reação-chave (neutralização):** ácido + base → **sal + água**
> HCl + NaOH → NaCl + H₂O

## 2. Escala de pH

\`\`\`
 0 ───── 7 ───── 14
ácido   neutro   básico
\`\`\`
- pH < 7 → ácido (suco de limão ≈ 2, refrigerante ≈ 3)
- pH = 7 → neutro (água pura)
- pH > 7 → básico/alcalino (sabão ≈ 9, soda ≈ 13)

## 3. Solubilidade em água (regras que mais caem)

| Regra | Solúveis | Exceções (insolúveis) |
|---|---|---|
| Sais de **metais alcalinos** (Na, K) e **NH₄⁺** | quase todos | — |
| **Nitratos** (NO₃⁻) e acetatos | todos | — |
| **Cloretos** (Cl⁻) | maioria | AgCl, PbCl₂ |
| **Sulfatos** (SO₄²⁻) | maioria | BaSO₄, PbSO₄, CaSO₄ |
| **Carbonatos** (CO₃²⁻) e fosfatos | poucos | solúveis só com alcalinos/NH₄⁺ |

## 4. Tipos de reação

| Tipo | O que acontece | Exemplo |
|---|---|---|
| **Síntese/adição** | A + B → AB | 2H₂ + O₂ → 2H₂O |
| **Análise/decomposição** | AB → A + B | 2H₂O₂ → 2H₂O + O₂ |
| **Simples troca** | A + BC → AC + B | Zn + 2HCl → ZnCl₂ + H₂ |
| **Dupla troca** | AB + CD → AD + CB | NaCl + AgNO₃ → AgCl + NaNO₃ |

## 5. Balanceamento (passo a passo)

1. Conte os átomos de cada elemento nos dois lados.
2. Ajuste os **coeficientes** (números na frente) — nunca mude as fórmulas.
3. Comece por metais → ametais → **hidrogênio** → **oxigênio** por último.
4. Confira: total de cada átomo igual dos dois lados (Lei de Lavoisier — a massa se conserva).

## 6. Conceitos de cálculo que sempre aparecem

- **Mol**: 1 mol = 6,02 × 10²³ partículas (nº de Avogadro).
- **Massa molar (M)**: soma das massas atômicas (g/mol). Ex.: H₂O = 2·1 + 16 = **18 g/mol**.
- **nº de mols**: n = massa (g) ÷ M (g/mol).
- **Concentração**: C = massa do soluto ÷ volume da solução (g/L).`,
    links: [
      { titulo: "Funções inorgânicas — Mundo Educação", url: "https://mundoeducacao.uol.com.br/quimica/funcoes-inorganicas.htm", fonte: "Mundo Educação" },
      { titulo: "Regras de solubilidade — Brasil Escola", url: "https://brasilescola.uol.com.br/quimica/regras-solubilidade.htm", fonte: "Brasil Escola" },
      { titulo: "Reações químicas — Khan Academy", url: "https://pt.khanacademy.org/science/quimica", fonte: "Khan Academy" },
    ],
  },

  // -------------------------------------------------------------------- Física
  {
    slug: "fisica-formulario",
    titulo: "Física: formulário essencial",
    area: "natureza",
    icon: "⚡",
    resumo: "Cinemática, dinâmica, energia, eletricidade e ondas — mais unidades do SI.",
    resumoMarkdown: `# Física — formulário essencial

> Antes de aplicar qualquer fórmula: **converta tudo para o SI** (metro, quilograma, segundo). Erro de unidade é o que mais derruba na prova.

## 1. Cinemática (movimento)

| Grandeza | Fórmula | Observação |
|---|---|---|
| Velocidade média | v = Δs ÷ Δt | Δs = deslocamento |
| MRU (vel. constante) | s = s₀ + v·t | gráfico s×t é reta |
| MRUV — velocidade | v = v₀ + a·t | a = aceleração |
| MRUV — posição | s = s₀ + v₀·t + (a·t²)/2 | — |
| Torricelli (sem tempo) | v² = v₀² + 2·a·Δs | útil quando não tem t |
| Queda livre | usa a = g ≈ 10 m/s² | para baixo |

## 2. Dinâmica (forças) — Leis de Newton

- **1ª (inércia):** sem força resultante, o corpo mantém a velocidade.
- **2ª (fundamental):** **F = m · a** (força em newton, N).
- **3ª (ação e reação):** forças aos pares, sentidos opostos.

| Grandeza | Fórmula |
|---|---|
| Peso | P = m · g |
| Força de atrito | Fat = μ · N (N = força normal) |
| Força elástica (mola) | F = k · x (Lei de Hooke) |

## 3. Trabalho, energia e potência

| Grandeza | Fórmula |
|---|---|
| Trabalho | τ = F · d · cos θ |
| Energia cinética | Ec = (m · v²)/2 |
| Energia potencial gravitacional | Ep = m · g · h |
| Energia potencial elástica | Epe = (k · x²)/2 |
| **Conservação de energia** | Ec + Ep = constante (sem atrito) |
| Potência | P = τ ÷ t = F · v |

## 4. Eletricidade

| Grandeza | Fórmula |
|---|---|
| **Lei de Ohm** | U = R · I |
| Potência elétrica | P = U · I = R · I² |
| Energia (conta de luz) | E = P · t (kWh) |
| Resistores em **série** | R = R₁ + R₂ + … (mesma corrente) |
| Resistores em **paralelo** | 1/R = 1/R₁ + 1/R₂ + … (mesma tensão) |

## 5. Ondas e óptica

| Grandeza | Fórmula |
|---|---|
| Velocidade da onda | v = λ · f (λ = comprimento, f = frequência) |
| Período × frequência | T = 1 ÷ f |
| Velocidade da luz (vácuo) | c ≈ 3 × 10⁸ m/s |

- **Reflexão:** ângulo de incidência = ângulo de reflexão.
- **Refração:** a luz muda de velocidade ao mudar de meio (entorta).

## 6. Unidades do SI e prefixos

| Grandeza | Unidade | Símbolo |
|---|---|---|
| Comprimento | metro | m |
| Massa | quilograma | kg |
| Tempo | segundo | s |
| Força | newton | N |
| Energia/Trabalho | joule | J |
| Potência | watt | W |
| Corrente | ampère | A |
| Tensão | volt | V |

**Prefixos:** k (quilo, ×10³) · c (centi, ×10⁻²) · m (mili, ×10⁻³) · µ (micro, ×10⁻⁶) · M (mega, ×10⁶).
**Conversões campeãs:** 1 km/h = 1/3,6 m/s · 1 kWh = 3,6 × 10⁶ J.`,
    links: [
      { titulo: "Física — Khan Academy (PT)", url: "https://pt.khanacademy.org/science/physics", fonte: "Khan Academy" },
      { titulo: "Simulações interativas — PhET", url: "https://phet.colorado.edu/pt_BR/", fonte: "PhET / Colorado" },
      { titulo: "Leis de Newton — Mundo Educação", url: "https://mundoeducacao.uol.com.br/fisica/as-leis-newton.htm", fonte: "Mundo Educação" },
    ],
  },

  // --------------------------------------------------------------- Matemática
  {
    slug: "matematica-formulas",
    titulo: "Matemática: fórmulas essenciais",
    area: "matematica",
    icon: "🔢",
    resumo: "Áreas e volumes, trigonometria, PA/PG, porcentagem, juros e probabilidade.",
    resumoMarkdown: `# Matemática — fórmulas essenciais

## 1. Áreas (figuras planas)

| Figura | Área |
|---|---|
| Retângulo | base × altura |
| Quadrado | lado² |
| Triângulo | (base × altura) ÷ 2 |
| Trapézio | (B + b) × altura ÷ 2 |
| Círculo | π · r² |
| Comprimento da circunferência | 2 · π · r |

## 2. Volumes (sólidos)

| Sólido | Volume |
|---|---|
| Cubo | aresta³ |
| Bloco (paralelepípedo) | comprimento × largura × altura |
| Cilindro | π · r² · h |
| Cone | (π · r² · h) ÷ 3 |
| Esfera | (4 · π · r³) ÷ 3 |
| Pirâmide/prisma | (área da base × altura) ÷ 3 (pirâmide) |

## 3. Porcentagem e juros

- **x% de um valor** = (x ÷ 100) × valor. Ex.: 30% de 200 = 0,30 × 200 = 60.
- **Aumento de x%**: multiplica por (1 + x/100). Desconto: por (1 − x/100).
- **Juros simples:** J = C · i · t (C = capital, i = taxa, t = tempo).
- **Juros compostos:** M = C · (1 + i)ᵗ (o famoso "juros sobre juros").

## 4. Progressões

| | PA (aritmética) | PG (geométrica) |
|---|---|---|
| Ideia | soma razão **r** | multiplica razão **q** |
| Termo geral | aₙ = a₁ + (n−1)·r | aₙ = a₁ · q⁽ⁿ⁻¹⁾ |
| Soma dos n termos | Sₙ = (a₁ + aₙ)·n ÷ 2 | Sₙ = a₁·(qⁿ − 1) ÷ (q − 1) |

## 5. Trigonometria no triângulo retângulo

\`\`\`
seno = cateto oposto ÷ hipotenusa
cosseno = cateto adjacente ÷ hipotenusa
tangente = cateto oposto ÷ cateto adjacente
\`\`\`
**Pitágoras:** hipotenusa² = cateto² + cateto².

| Ângulo | sen | cos | tg |
|---|---|---|---|
| 30° | 1/2 | √3/2 | √3/3 |
| 45° | √2/2 | √2/2 | 1 |
| 60° | √3/2 | 1/2 | √3 |

## 6. Probabilidade e contagem

- **Probabilidade:** P = casos favoráveis ÷ casos possíveis (entre 0 e 1).
- **E** (eventos independentes): multiplica. **OU** (exclusivos): soma.
- **Fatorial:** n! = n · (n−1) · … · 1. Ex.: 4! = 24.

## 7. Produtos notáveis e funções

- (a + b)² = a² + 2ab + b²
- (a − b)² = a² − 2ab + b²
- (a + b)(a − b) = a² − b²
- **Função afim (1º grau):** y = a·x + b (reta; a = inclinação).
- **Função quadrática (2º grau):** y = a·x² + b·x + c (parábola).
- **Bhaskara:** x = (−b ± √Δ) ÷ (2a), com **Δ = b² − 4ac**.

## 8. Estatística

- **Média:** soma dos valores ÷ quantidade.
- **Mediana:** valor central com os dados **em ordem**.
- **Moda:** o valor que **mais se repete**.`,
    links: [
      { titulo: "Matemática — Khan Academy (PT)", url: "https://pt.khanacademy.org/math", fonte: "Khan Academy" },
      { titulo: "Fórmulas de geometria — Brasil Escola", url: "https://brasilescola.uol.com.br/matematica/geometria", fonte: "Brasil Escola" },
      { titulo: "Juros e porcentagem — Mundo Educação", url: "https://mundoeducacao.uol.com.br/matematica/porcentagem.htm", fonte: "Mundo Educação" },
    ],
  },

  // --------------------------------------------------------------- Linguagens
  {
    slug: "linguagens-consulta",
    titulo: "Linguagens: figuras, funções e conectivos",
    area: "linguagens",
    icon: "✍️",
    resumo: "Figuras de linguagem, funções da linguagem e conectivos (úteis na redação).",
    resumoMarkdown: `# Linguagens — consulta rápida

## 1. Figuras de linguagem

| Figura | O que é | Exemplo |
|---|---|---|
| **Metáfora** | comparação sem "como" | "Meus pensamentos são pássaros." |
| **Comparação** | comparação **com** conectivo | "Forte como um touro." |
| **Metonímia** | troca por proximidade | "Li Machado" (= a obra dele) |
| **Hipérbole** | exagero | "Chorei rios de lágrimas." |
| **Ironia** | diz o contrário do que pensa | "Que belo dia!" (na chuva) |
| **Personificação/prosopopeia** | dá vida ao inanimado | "O vento sussurrava." |
| **Antítese** | ideias opostas | "Amor e ódio." |
| **Eufemismo** | suaviza | "Ele partiu" (= morreu) |
| **Pleonasmo** | redundância proposital | "Vi com meus próprios olhos." |
| **Aliteração** | repete sons consoantes | "O rato roeu a roupa." |

## 2. Funções da linguagem (foco de cada mensagem)

| Função | Foco em… | Onde aparece |
|---|---|---|
| **Referencial** | informação (objetiva) | notícia, texto científico |
| **Emotiva/expressiva** | emissor (1ª pessoa) | diário, poema lírico |
| **Conativa/apelativa** | receptor (imperativo, "você") | propaganda, discurso |
| **Fática** | canal (testar contato) | "Alô? Está me ouvindo?" |
| **Metalinguística** | o próprio código | dicionário, poema sobre poesia |
| **Poética** | forma da mensagem | poesia, publicidade criativa |

> Dica: na **propaganda** costuma dominar a **conativa** (te manda agir) + **poética** (forma bonita).

## 3. Variação linguística

- Não existe "certo x errado" absoluto: existe **adequação** ao contexto.
- Norma **culta/padrão** (formal) × norma **coloquial** (informal).
- Variação **regional**, **social**, **histórica** e de **registro**. O ENEM valoriza o respeito às variedades (preconceito linguístico é tema recorrente).

## 4. Conectivos para a redação (por sentido)

| Quero indicar… | Conectivos |
|---|---|
| **Adição** | além disso, ademais, outrossim, bem como |
| **Oposição** | contudo, todavia, no entanto, entretanto, por outro lado |
| **Causa** | porque, visto que, uma vez que, já que |
| **Consequência** | portanto, logo, por conseguinte, dessa forma |
| **Conclusão** | em suma, portanto, dessa maneira, assim |
| **Explicação/exemplo** | isto é, ou seja, por exemplo, a saber |
| **Tempo/ordem** | primeiramente, em seguida, por fim |

## 5. Interpretação de texto (checklist ENEM)

1. Leia o **comando** antes do texto — descubra o que pedem.
2. Ache a **tese** (ideia principal) e o **propósito** (informar? convencer? criticar?).
3. Cuidado com "**segundo o texto**": a resposta está **no texto**, não no seu achismo.
4. Elimine alternativas com **extrapolação** ("sempre", "nunca", "todos") ou que fujam do texto.`,
    links: [
      { titulo: "Figuras de linguagem — Brasil Escola", url: "https://brasilescola.uol.com.br/redacao/figuras-linguagem.htm", fonte: "Brasil Escola" },
      { titulo: "Funções da linguagem — Toda Matéria", url: "https://www.todamateria.com.br/funcoes-da-linguagem/", fonte: "Toda Matéria" },
      { titulo: "Conectivos para redação — Mundo Educação", url: "https://mundoeducacao.uol.com.br/redacao/conectivos.htm", fonte: "Mundo Educação" },
    ],
  },

  // ---------------------------------------------------------------- Biologia
  {
    slug: "biologia-consulta",
    titulo: "Biologia: genética, ecologia e citologia",
    area: "natureza",
    icon: "🧬",
    resumo: "Leis de Mendel, cadeias e ciclos, organelas — o que mais cai, para consulta.",
    resumoMarkdown: `# Biologia — consulta rápida

## 1. Genética (Leis de Mendel)

- **Gene**: trecho de DNA que determina uma característica. **Alelo**: cada versão de um gene.
- **Dominante** (letra maiúscula, A) x **recessivo** (minúscula, a).
- **Genótipo** = os genes (AA, Aa, aa). **Fenótipo** = a característica que aparece.
  - AA = homozigoto dominante · aa = homozigoto recessivo · Aa = heterozigoto.

**Cruzamento Aa × Aa (quadro de Punnett):**

| | A | a |
|---|---|---|
| **A** | AA | Aa |
| **a** | Aa | aa |

Resultado: **3 dominantes : 1 recessivo** (proporção 3:1). Em fração: 3/4 mostram o dominante, 1/4 mostra o recessivo.

## 2. Ecologia — quem come quem

\`\`\`
produtores → consumidores 1º → 2º → 3º → decompositores
(plantas)     (herbívoros)  (carnívoros)   (fungos/bactérias)
\`\`\`
- **Cadeia alimentar**: sequência linear. **Teia**: várias cadeias interligadas.
- **Níveis tróficos**: a energia **diminui** a cada nível (só ~10% passa adiante).

| Relação | Tipo | Exemplo |
|---|---|---|
| Ambos ganham | mutualismo (harmônica) | abelha e flor |
| Um ganha, outro não é afetado | comensalismo | rêmora e tubarão |
| Um ganha, outro perde | predação/parasitismo | leão e zebra |
| Ambos perdem | competição | leão e hiena |

## 3. Ciclos e conceitos que caem em prova

- **Fotossíntese:** gás carbônico + água + luz → glicose + **oxigênio**. (a planta produz alimento)
- **Respiração celular:** glicose + oxigênio → energia (ATP) + CO₂ + água.
- **Ciclo do carbono / água / nitrogênio:** relacionam seres vivos e ambiente; muito ligados ao tema **efeito estufa** e aquecimento global.

## 4. Citologia (a célula)

| Organela | Função ("apelido") |
|---|---|
| **Núcleo** | guarda o DNA (comando) |
| **Mitocôndria** | respiração / produz energia (usina) |
| **Cloroplasto** | fotossíntese (só em vegetais) |
| **Ribossomo** | fabrica proteínas |
| **Retículo endoplasmático** | transporte interno |
| **Complexo golgiense** | empacota e secreta |
| **Lisossomo** | digestão intracelular |

- **Célula procarionte** (bactéria): **sem** núcleo definido.
- **Célula eucarionte** (animal, vegetal): **com** núcleo. A vegetal tem, a mais, **parede celular** e **cloroplasto**.

## 5. Corpo humano (sistemas — visão rápida)

- **Digestório:** boca → esôfago → estômago → intestinos (absorção).
- **Circulatório:** coração bombeia; artérias saem, veias voltam.
- **Respiratório:** pulmões fazem a troca gasosa (O₂ entra, CO₂ sai).`,
    links: [
      { titulo: "Leis de Mendel — Brasil Escola", url: "https://brasilescola.uol.com.br/biologia/leis-mendel.htm", fonte: "Brasil Escola" },
      { titulo: "Ecologia — Khan Academy (PT)", url: "https://pt.khanacademy.org/science/biology", fonte: "Khan Academy" },
      { titulo: "Organelas celulares — Toda Matéria", url: "https://www.todamateria.com.br/organelas-celulares/", fonte: "Toda Matéria" },
    ],
  },
];

export function acharApoio(slug: string): MaterialApoio | undefined {
  return materiaisApoio.find((m) => m.slug === slug);
}
