# ENEM Study — ambiente de estudo ativo para o ENEM 2026

Aplicação web que funciona como um **ambiente de estudo ativo** para o ENEM 2026
(provas em **8 e 15 de novembro de 2026**). Diferente de um checklist, **cada tarefa
entrega o conteúdo**: clicar em "Refazer a prova de Humanas 2024" abre as questões
reais com correção automática; clicar em "Ler: Era Vargas" abre um material didático
escrito do zero, com videoaula de professor conhecido e as questões que já caíram
naquele assunto.

O conteúdo foi montado por **engenharia reversa das provas**: as questões reais de
2019 a 2025 foram classificadas por assunto, e os materiais de estudo seguem a
**frequência real** com que cada tema é cobrado — não um sumário genérico de livro.

> **Clonou? Roda em 3 comandos.** O banco já vem pronto no repositório, com as 1.125
> questões classificadas, provas montadas, materiais, resoluções e livros. Não é
> preciso importar nada. Veja [Início rápido](#início-rápido).

---

## O que tem dentro

| | |
|---|---|
| **1.125 questões reais** | ENEM 2019–2025, classificadas por assunto e com gabarito |
| **56 assuntos** | 51 das 4 áreas (por frequência real) + 5 de redação |
| **116 resoluções** | passo a passo, todas conferidas contra o gabarito oficial |
| **142 videoaulas** | YouTube, de professores reconhecidos, cada URL verificada |
| **17 livros** | resumo didático, temas de redação e **7 com texto integral** (domínio público) |
| **32 provas e simulados** | provas oficiais por ano/área + simulados temáticos |
| **Cronograma** | gerado a partir do tempo que falta, editável, com cobertura total |

## Funcionalidades

- **Dashboard** — contagem regressiva, semana atual com tarefas executáveis e
  indicadores (% do cronograma, livros lidos, média dos simulados, evolução).
- **Configuração do aluno** — nome e **língua estrangeira (inglês ou espanhol)**.
  A escolha refaz o cronograma e filtra os simulados: você só vê o idioma que faz.
- **Cronograma** — recalculado conforme as semanas restantes até a prova, cobrindo
  todos os 56 assuntos e 17 livros. Editável: dá para criar/alterar semanas e itens,
  e as semanas que você criar são preservadas quando o sugerido é refeito.
  A conclusão é derivada — um item só fecha quando todo o conteúdo dele foi estudado.
- **Materiais** — resumo didático "do zero" por assunto, com fórmulas explicadas
  termo a termo, exemplos resolvidos, questão-modelo comentada e as pegadinhas da
  banca. Abaixo, **as questões reais daquele assunto em modo treino**: as
  alternativas começam em branco e o gabarito (e a resolução) só aparecem depois
  que você responde.
- **Provas e simulados** — correção automática, desempenho por área, modo
  cronometrado e montagem de simulado temático por área/ano.
- **Literatura** — obras com prioridade e escola literária, guia didático completo,
  leitura do **texto integral** dentro do app e marcador de "parei aqui".
- **Redação** — editor com contador de palavras/linhas, guia das 5 competências,
  autoavaliação, banco de repertórios, temas de 2011–2025 e 6 redações nota 1000
  comentadas competência por competência.
- **Progresso** — evolução dos simulados, pontos fracos por área e cumprimento do plano.
- **Versão portátil offline** — pacote Windows que roda de pendrive, com duplo
  clique, sem instalar nada. Veja [Versão portátil](#versão-portátil-offline-windows).

## Stack

- **Next.js 16 (App Router)** + **TypeScript** + **React 19**
- **Prisma** + **SQLite** (arquivo local; nada de servidor de banco para rodar)
- **Tailwind CSS 4** — tema escuro padrão, mobile-first
- **react-markdown** + **remark-gfm**
- **Vitest** — testes

---

## Início rápido

Requisito: **Node 20+**. Nada além disso — o banco é um arquivo SQLite versionado.

```bash
git clone https://github.com/mwsbardella/enen2026.git
cd enen2026

npm install
cp .env.example .env       # já vem apontando para o SQLite local
npm run db:usar-pronto     # instala o banco já populado (prisma/seed.db -> prisma/dev.db)
npm run dev                # http://localhost:3000
```

É só isso. **Não precisa importar questões nem rodar o seed** — o banco versionado
já vem com tudo, e as imagens das questões estão no repositório
(`public/enem-assets/`), então gráficos e charges aparecem desde o primeiro acesso.

No Windows (PowerShell), troque o `cp` por `Copy-Item .env.example .env`.

### E o banco pronto, tem o quê?

`prisma/seed.db` (~4,8 MB) contém as 1.125 questões classificadas, as 32 provas,
os 56 materiais, as 116 resoluções, os 17 livros (7 com texto integral) e um
cronograma sugerido. **Não contém dado pessoal nenhum**: zero redações, zero
simulados feitos, zero progresso, usuário "estudante". É gerado por
`scripts/prepare-clean-db.ts`.

Se você já tiver um `prisma/dev.db`, o `db:usar-pronto` guarda uma cópia de
segurança antes de sobrescrever — ninguém perde progresso sem querer.

### Reconstruindo o banco do zero (opcional)

Só é necessário se você quiser reimportar as questões da fonte ou mudar o conteúdo:

```bash
npm run db:migrate:dev     # cria o banco e aplica as migrations
npm run import             # questões da enem.dev (cai no fallback local se a API falhar)
npm run classify           # classifica cada questão em um assunto da taxonomia
npm run db:seed            # áreas, tópicos de redação, livros, provas, cronograma
npm run seed:materials     # materiais de estudo das 4 áreas
npm run seed:solucoes      # resoluções passo a passo
npm run seed:books         # livros + textos integrais
```

---

## Como o conteúdo é montado

O diferencial do projeto é que **o conteúdo deriva das provas**, não o contrário:

1. **Importação** (`npm run import`) — questões de 2019–2023 vêm da API pública
   [enem.dev](https://api.enem.dev/v1); 2024 e 2025 são extraídas dos **PDFs
   oficiais do INEP** (`npm run parse:inep`), já versionados em
   `data/enem/inep-pdfs/` e convertidos para `data/enem/curated-*.json`.
2. **Classificação** (`npm run classify`) — cada questão é casada com um assunto da
   taxonomia (`prisma/content/taxonomy.ts`) por palavras-chave. As questões de
   língua estrangeira são atribuídas pelo campo `language`.
3. **Ordenação por frequência** — os assuntos de cada área são ordenados pelo
   número de questões que realmente caíram, então o material começa pelo que mais
   importa. Em Humanas, por exemplo, "Trabalho e industrialização" vem primeiro
   porque é o tema mais recorrente das provas recentes.
4. **Materiais** (`prisma/content/materials/*.ts`) — escritos assumindo que o aluno
   não lembra do assunto: abertura "Começando do zero", glossário dos termos que a
   banca usa sem explicar, tabelas comparativas, linha do tempo nos assuntos
   históricos, questão-modelo resolvida e as pegadinhas típicas.

### Links e videoaulas: tudo verificado

Metade dos links do projeto já esteve quebrada — eram URLs de aparência plausível
escritas sem nunca terem sido abertas. Hoje há duas travas:

- **`npm run find:videos`** — busca videoaulas no YouTube, filtra por relevância ao
  tema, prefere canais reconhecidos, descarta material infantil/de concurso/entrevista
  e **verifica cada vídeo pelo oEmbed** antes de gravar. O canal e o título salvos
  vêm da resposta do YouTube, não de suposição. Resultado em
  `prisma/content/videos.ts` (gerado, revisado à mão e versionado).
- **`npm run check:links`** — abre **todas** as URLs do conteúdo e falha se alguma
  quebrar. Vídeos são checados pelo oEmbed, que acusa vídeo removido (a página
  `/watch` devolve 200 mesmo nesses casos).

> Regra do projeto: **nenhuma URL entra no conteúdo sem passar pelo `check:links`.**

---

## Versão portátil offline (Windows)

Gera uma pasta autocontida que o aluno copia para o PC ou pendrive e abre com duplo
clique — sem instalar Node, sem internet, com o progresso salvo localmente:

```bash
npm run build:portable
```

Saída em `dist-portable/EnemStudy/` (~341 MB), com `Iniciar.bat` e `LEIA-ME.txt`.
Na primeira execução o script baixa um `node.exe` embutido (só uma vez).
O banco distribuído é o limpo, sem dados de estudante.

---

## Scripts npm

| Script | Ação |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` / `npm run start` | Build e produção |
| `npm run db:usar-pronto` | **Instala o banco já populado** (recomendado após clonar) |
| `npm run db:migrate:dev` | Cria/aplica migrations (dev) |
| `npm run db:seed` | Semeia áreas, redação, livros, provas e cronograma |
| `npm run seed:materials` | Materiais de estudo das 4 áreas |
| `npm run seed:solucoes` | Resoluções passo a passo (só grava se bater com o gabarito) |
| `npm run seed:books` | Livros + textos integrais |
| `npm run import` | Importa questões da enem.dev (com fallback local) |
| `npm run parse:inep` | Extrai questões dos PDFs oficiais do INEP (2024/2025) |
| `npm run classify` | Classifica as questões por assunto |
| `npm run find:videos` | Recurada as videoaulas do YouTube (verificadas) |
| `npm run check:links` | **Valida todas as URLs do conteúdo** |
| `npm run check:cronograma` | Confere que nenhum assunto/livro ficou fora do cronograma |
| `npm run build:portable` | Gera o pacote portátil offline (Windows) |
| `npm run test` | Testes (Vitest) |
| `npm run lint` | ESLint |

## Estrutura de pastas

```
app/                    # Rotas (App Router)
  api/                  # aluno, attempts, exams, progress, redacao, weeks, week-tasks, marcador
  cronograma/  materiais/  provas/  literatura/  redacao/  progresso/
components/             # Componentes (client e server)
lib/                    # prisma, idioma, links, grade, tasks, dates, subjects, json
prisma/
  schema.prisma         # Modelos
  seed.db               # BANCO PRONTO versionado (sem dados pessoais)
  seed.ts               # Seed orquestrador
  content/              # Conteúdo: taxonomia, materiais, livros, semanas, vídeos, resoluções
    materials/          # Materiais das 4 áreas (humanas, matematica, linguagens, natureza)
scripts/                # import, parse-inep, classify, seeds, find-videos, check-links, portable
data/
  enem/                 # JSON curado + PDFs oficiais do INEP
  livros/               # Textos integrais em domínio público (ver FONTES.md)
public/enem-assets/     # Imagens das questões (versionadas)
tests/                  # Vitest
```

## Modelo de dados

`User`, `Subject`, `Topic`, `StudyMaterial`, `Question`, `Exam`, `Attempt`, `Week`,
`WeekTask`, `Book`, `ReadingMark`, `RedacaoEntry`, `Progress`, `Repertorio`.

Campos "Json" são persistidos como `String` (JSON serializado) por compatibilidade
com SQLite e (de)serializados via `lib/json.ts`.

## Testes

```bash
npm run test
```

Cobrem a correção das provas (`lib/grade.ts`) e os helpers de datas/JSON/áreas.

---

## Licença, dados e direitos autorais

- **Código e materiais de estudo**: autorais deste projeto.
- **Questões**: provas do ENEM (INEP), públicas. As de 2019–2023 vêm da API
  open-source [enem.dev](https://github.com/yunger7/enem-api) (GPL-2.0); as de
  2024–2025 foram extraídas dos PDFs oficiais publicados pelo INEP.
- **Textos integrais** (`data/livros/`): **todos em domínio público no Brasil**
  (Lei 9.610/98, art. 41 — autor falecido há mais de 70 anos), com fonte, edição e
  licença documentadas em [`data/livros/FONTES.md`](data/livros/FONTES.md). As obras
  ainda protegidas por direitos autorais **não** têm texto no repositório — para
  elas o sistema oferece apenas guia de estudo autoral.
- **Videoaulas**: apenas **links** para vídeos públicos no YouTube, com o canal
  creditado. Nenhum vídeo é hospedado ou redistribuído aqui.
