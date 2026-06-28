# Projeto: ENEM Study — Sistema de Estudo para o ENEM 2026

## Contexto e objetivo

Quero que você construa, do zero, uma aplicação web full-stack que funcione como um
**sistema de estudo ativo** para o ENEM 2026 (provas em 08 e 15 de novembro de 2026).
O usuário é um estudante (foco em Humanas / Direito) que voltou de um intercâmbio nos
EUA e precisa se preparar de forma estruturada nas ~19 semanas restantes.

A diferença essencial deste sistema para um simples checklist: **cada item de estudo
precisa ENTREGAR o conteúdo**, não só marcar como feito. Quando o aluno clicar em
"Refazer a 1ª prova do ENEM", o sistema deve abrir o formulário com as questões reais
para ele responder ali mesmo, com correção automática. Quando clicar em "Revisar
funções da linguagem", deve abrir um material teórico (resumo próprio salvo no banco)
mais links complementares curados. O sistema é o ambiente de estudo, não um lembrete.

## Stack (obrigatório)

- **Next.js 14+ (App Router)** com TypeScript
- **Banco de dados**: PostgreSQL (use uma `DATABASE_URL` via `.env`); para desenvolvimento
  local, deve funcionar também com SQLite via variável de ambiente. Use **Prisma** como ORM
  (migrations versionadas, seed script).
- **Tailwind CSS** para estilo. Tema escuro como padrão, limpo e legível, mobile-first
  (o aluno vai usar bastante no celular).
- **Docker Compose** para subir Postgres + app com um comando (`docker compose up`).
- Sem dependências de serviços pagos ou chaves de API externas obrigatórias.

## Fonte das questões reais do ENEM

Use a API pública open-source **enem.dev** (licença GNU GPL-2.0, ~2700 questões de
2009–2023, dados de domínio público). Base URL: `https://api.enem.dev/v1`.

Endpoints relevantes:
- `GET /exams` — lista todos os anos de prova disponíveis.
- `GET /exams/{year}` — detalhes da prova: `title`, `year`, `disciplines[]`
  (`label`/`value`, ex.: `ciencias-humanas`, `linguagens`, `matematica`,
  `ciencias-natureza`), `languages[]`, e `questions[]` com `title`, `index`,
  `discipline`, `language`.
- `GET /exams/{year}/questions/{index}` — questão completa: enunciado (`context`),
  introdução/comando (`alternativesIntroduction`), `alternatives[]` (cada uma com
  `letter` A–E, `text`, `isCorrect` boolean), `correctAlternative`, `discipline`,
  `files[]` (imagens, quando houver). **Confirme os nomes exatos dos campos** chamando
  a API real durante o desenvolvimento (`curl https://api.enem.dev/v1/exams/2022`),
  pois alguns campos variam por ano.

**Importação**: crie um script (`scripts/import-enem.ts`, rodável via `npm run import`)
que:
1. Busca os anos disponíveis e, para cada ano selecionado, importa todas as questões
   para o banco local (tabela `Question`). Respeite o rate limit da API (a API
   retorna 429 se exceder) — coloque um delay entre requisições e retry com backoff.
2. Salve as imagens/arquivos referenciados localmente em `/public/enem-assets/` para
   o sistema funcionar offline depois da importação.
3. Seja **idempotente** (rodar de novo não duplica; use upsert por `year`+`index`).
4. **Fallback**: se a API estiver indisponível, o script deve aceitar uma pasta local
   de PDFs/JSON em `./data/enem/` e importar de lá. Documente esse formato no README.

Importe pelo menos os anos **2019 a 2023** no seed inicial (provas mais recentes e
representativas do formato atual). Permita configurar quais anos importar.

## Modelo de dados (Prisma schema — ajuste conforme necessário)

```
Subject        // Área: linguagens, humanas, matematica, natureza, redacao
  id, slug, nome, cor, ordem

Topic          // Tópico de estudo, ex.: "Funções da linguagem"
  id, subjectId, slug, titulo, descricao, ordem

StudyMaterial  // Conteúdo teórico de um tópico
  id, topicId, titulo,
  resumoMarkdown   // resumo PRÓPRIO, escrito em markdown, exibido no sistema
  links Json       // array de { titulo, url, fonte } -> links complementares curados

Question       // Questão real do ENEM (importada da enem.dev)
  id, year, index, discipline (mapeia p/ Subject), language,
  contextMarkdown, comando, alternativas Json (A–E + texto),
  correta (letra), arquivos Json (imagens), topicId? (vínculo opcional ao tópico)

Exam           // "Prova" montável: um conjunto ordenado de questões
  id, titulo, descricao, tipo (PROVA_OFICIAL | SIMULADO_TEMATICO | POR_TOPICO),
  year?, questionIds Json (ordem)

Week           // Semana do cronograma (1..19)
  id, numero, foco, dataInicio, dataFim

WeekTask       // Tarefa de uma semana, JÁ LIGADA a um conteúdo executável
  id, weekId, subjectId, titulo, ordem,
  tipo (LER_MATERIAL | RESPONDER_EXAM | ESCREVER_REDACAO | LER_LIVRO | REVISAR),
  refType + refId   // aponta para StudyMaterial, Exam, Book, etc.

Book           // Obra de literatura
  id, titulo, autor, prioridade, escola, temasRedacao, resumoMarkdown, links Json

Attempt        // Tentativa de resolução de uma Exam/questões
  id, examId, iniciadoEm, finalizadoEm, respostas Json (questionId->letra),
  acertos, total, porArea Json

RedacaoEntry   // Redações escritas pelo aluno
  id, tema, textoMarkdown, autoavaliacao Json (5 competências), criadoEm

Progress       // Marcação de conclusão (genérica)
  id, tipo, refId, concluido, concluidoEm

User           // single-user é suficiente; mas modele para permitir 1 usuário
  id, nome
```

(Pode haver só um usuário fixo — não precisa de tela de login complexa. Um seed cria o
usuário "Enrico".)

## Funcionalidades obrigatórias

### 1. Dashboard
- Contagem regressiva para 08/11/2026.
- Semana atual em destaque com suas tarefas (cada uma clicável -> abre o conteúdo).
- Indicadores: % do cronograma, livros lidos, média dos simulados, evolução recente.

### 2. Cronograma (19 semanas)
- Lista de semanas com foco temático, peso maior em Linguagens, Humanas e Redação
  (área do aluno), mantendo Matemática e Natureza em manutenção.
- Cada `WeekTask` é **executável**: clicar abre o material, a prova ou o editor de
  redação correspondente — nunca é só um checkbox.
- Marcar conclusão atualiza o progresso.

### 3. Materiais de estudo (o coração do pedido)
- Tela de tópico: exibe `resumoMarkdown` renderizado (markdown -> HTML) + lista de
  links complementares curados.
- Os resumos próprios devem ser **escritos por você** no seed, com conteúdo real e
  correto para os tópicos principais do ENEM de Linguagens, Humanas e Redação
  (ver lista de tópicos abaixo). Não deixe placeholders "lorem ipsum": escreva
  resumos didáticos de verdade, de 200–500 palavras cada, em português.
- Para cada tópico, inclua 2–4 links complementares de fontes confiáveis e gratuitas
  (ex.: Brasil Escola, Mundo Educação, Khan Academy Brasil, Stoodi/Descomplica
  gratuitos, canais do YouTube educacionais). Valide que são links plausíveis;
  marque claramente que são fontes externas.

### 4. Provas e simulados (formulário de resolução)
- "Refazer a 1ª prova do ENEM [ano]" -> abre uma `Exam` montada com as questões reais
  daquele ano/área, em formato de formulário: enunciado completo, imagens quando
  houver, alternativas A–E selecionáveis.
- Modo cronometrado opcional (timer regressivo).
- Ao enviar: correção automática, mostra acertos/erros, gabarito e — quando a questão
  tiver — um campo de comentário/explicação (se a API não trouxer explicação, deixe
  o campo preparado para você ou o aluno preencher depois).
- Salva uma `Attempt` com desempenho por área.
- Permitir filtrar e montar **simulado temático** (ex.: 20 questões só de Humanas) e
  **prova completa** por ano.

### 5. Literatura
- Lista das obras com prioridade, escola literária e temas de redação que cada uma
  destrava. Cada obra abre um resumo próprio + links. Tracking de leitura.
- Obras-base (prioridade alta primeiro): Vidas Secas, O Cortiço, Dom Casmurro,
  Memórias Póstumas de Brás Cubas, Quarto de Despejo, Capitães da Areia, Torto Arado;
  (média) O Quinze, Iracema, A Hora da Estrela, Auto da Compadecida, Sentimento do Mundo.

### 6. Redação
- Editor de redação com o tema, contador de linhas/palavras.
- Guia das 5 competências do ENEM sempre acessível.
- Autoavaliação por competência (0–200 cada) após escrever, salvando histórico.
- Banco de "repertórios coringa" (dados, leis, obras) consultável.

### 7. Progresso
- Gráfico de evolução das notas dos simulados ao longo do tempo.
- Desempenho por área (identificar pontos fracos).
- Visão de quanto do cronograma e da literatura já foi cumprido.

## Tópicos de estudo para semear (mínimo)

Linguagens: funções da linguagem; variação linguística; figuras de linguagem;
interpretação de texto; intertextualidade; gêneros textuais; escolas literárias
(Barroco→Modernismo→Contemporâneo, foco no que cai).
Humanas: Brasil Colônia e escravidão; Império e República Velha; Era Vargas; Ditadura
militar e redemocratização; Constituição de 1988 e cidadania; geografia agrária e
urbanização; globalização e geopolítica; conceitos de sociologia e filosofia (cidadania,
Estado, principais pensadores).
Redação: estrutura dissertativo-argumentativa; as 5 competências; proposta de
intervenção (agente/ação/meio/finalidade/detalhamento); construção de repertório;
o que zera a redação.
Matemática (manutenção): porcentagem; razão e proporção/regra de três; funções (afim
e quadrática); estatística básica; probabilidade; geometria (áreas e volumes).
Natureza (manutenção): ecologia e meio ambiente; célula e genética; leis de Newton;
química básica (substâncias, pH); energia e sustentabilidade.

## Entregáveis e qualidade

1. Repositório organizado, `README.md` completo: como rodar com Docker, como rodar a
   importação de questões, como configurar o `.env`, estrutura de pastas.
2. `docker compose up` deve subir tudo. `npm run db:migrate && npm run db:seed &&
   npm run import` deve deixar o sistema pronto com dados reais.
3. Seed com: 19 semanas montadas e ligadas a materiais/provas, todos os resumos
   próprios escritos, livros cadastrados, e provas dos anos importados montadas.
4. Código tipado, componentes reutilizáveis, sem segredos hardcoded.
5. Trate erros de rede da API com elegância (a importação não pode derrubar o app).
6. Acessível e responsivo (uso intenso no celular).

## Ordem de execução sugerida

1. Scaffold Next.js + Tailwind + Prisma + Docker Compose.
2. Schema Prisma + migration + seed de Subjects/Topics/Weeks/Books.
3. Script de importação enem.dev (com fallback local) + importar 2019–2023.
4. Telas: Dashboard -> Cronograma -> Material -> Prova/Simulado -> Literatura ->
   Redação -> Progresso.
5. Escrever os resumos próprios (conteúdo real) e curar os links.
6. README + testes básicos das rotas de API.

Comece confirmando o plano e o schema comigo antes de gerar o código em massa.
Trabalhe em commits pequenos e descritivos. Pergunte se algo estiver ambíguo.
