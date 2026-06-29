# ENEM Study — Sistema de Estudo Ativo para o ENEM 2026

Aplicação web full-stack que funciona como um **ambiente de estudo ativo** para o
ENEM 2026 (provas em **08 e 15 de novembro de 2026**). Diferente de um checklist,
**cada tarefa entrega o conteúdo**: clicar em "Refazer a 1ª prova do ENEM" abre as
questões reais para responder com correção automática; clicar em "Revisar funções da
linguagem" abre um resumo teórico próprio + links curados.

Foco do aluno: **Humanas / Direito**, com peso maior em Linguagens, Humanas e Redação,
mantendo Matemática e Natureza em manutenção, ao longo das ~19 semanas restantes.

## Funcionalidades

- **Dashboard** — contagem regressiva, semana atual com tarefas executáveis e indicadores
  (% do cronograma, livros lidos, média dos simulados, evolução recente).
- **Cronograma (19 semanas)** — cada tarefa abre o material, a prova ou o editor de redação.
- **Materiais** — resumos próprios (markdown) + links complementares curados, por tópico.
- **Provas e simulados** — questões reais do ENEM com correção automática, gabarito,
  desempenho por área, modo cronometrado e montagem de simulado temático.
- **Literatura** — obras com prioridade, escola literária, temas de redação e tracking de leitura.
- **Redação** — editor com contador de palavras/linhas, guia das 5 competências,
  autoavaliação por competência e banco de "repertórios coringa".
- **Progresso** — gráfico de evolução dos simulados, pontos fracos por área e cumprimento do plano.

## Stack

- **Next.js 16 (App Router)** + **TypeScript**
- **Prisma** (ORM) — **SQLite** em desenvolvimento, **PostgreSQL** em produção
- **Tailwind CSS** — tema escuro padrão, mobile-first
- **react-markdown** + **remark-gfm** — renderização dos resumos e enunciados
- **Vitest** — testes
- **Docker Compose** — Postgres + app

Fonte das questões: API pública open-source **[enem.dev](https://api.enem.dev/v1)**
(licença GPL-2.0, dados de domínio público, ~2700 questões de 2009–2023).

## Início rápido (desenvolvimento local — SQLite, sem Docker)

Requisitos: **Node 20+**.

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.example .env          # já vem pronto para SQLite (file:./dev.db)

# 3. Criar o banco e aplicar as migrations
npm run db:migrate:dev

# 4. Importar questões reais do ENEM (2019–2023). Cai em fallback local se a API falhar.
npm run import

# 5. Semear conteúdo (áreas, tópicos, resumos, livros, 19 semanas, provas montadas)
npm run db:seed

# 6. Rodar
npm run dev                   # http://localhost:3000
```

> Ordem recomendada: `import` **antes** de `seed`, pois o seed monta as provas oficiais
> e os simulados a partir das questões já importadas. O seed funciona mesmo sem questões
> (apenas não cria as Exams correspondentes).

## Rodando com Docker (Postgres + app)

O `docker compose up` sobe o Postgres e o app:

```bash
docker compose up --build
```

> **Importante:** o schema padrão usa SQLite. Para usar Postgres, troque em
> `prisma/schema.prisma` o `provider` do `datasource db` de `"sqlite"` para
> `"postgresql"` antes de buildar a imagem. A `DATABASE_URL` do Postgres já está
> definida no `docker-compose.yml`.

Após subir, popule os dados (uma vez) executando dentro do container do app:

```bash
docker compose exec app npm run db:seed
docker compose exec app npm run import
```

## Importação de questões (`npm run import`)

O script `scripts/import-enem.ts`:

1. Busca os anos disponíveis na enem.dev e importa as questões para a tabela `Question`.
2. Respeita o **rate limit** (delay entre requisições + retry com backoff). Se a API
   pedir uma espera muito longa (rate limit pesado), ele **aborta para o fallback** em
   vez de travar.
3. Baixa as **imagens** para `public/enem-assets/` e reescreve as URLs para caminhos
   locais (funciona offline depois da importação).
4. É **idempotente** — rodar de novo não duplica (match por `year` + `index` + `language`).
5. **Fallback local**: se a API estiver indisponível, importa de `./data/enem/*.json`.

Variáveis de ambiente (ver `.env.example`):

| Variável | Padrão | Descrição |
| --- | --- | --- |
| `ENEM_YEARS` | `2019,2020,2021,2022,2023` | Anos a importar |
| `ENEM_API_BASE` | `https://api.enem.dev/v1` | Base URL da API |
| `ENEM_REQUEST_DELAY_MS` | `350` | Delay entre requisições |
| `ENEM_MAX_RETRIES` | `5` | Tentativas em erro/429 |
| `ENEM_MAX_BACKOFF_MS` | `60000` | Espera máxima por tentativa antes de cair no fallback |
| `ENEM_MAX_PER_YEAR` | — | Limita nº de questões por ano (útil em testes) |
| `ENEM_SOURCE` | — | `local` força usar `./data/enem/` sem chamar a API |

### Formato do fallback local (`./data/enem/`)

Coloque um ou mais arquivos `.json` em `data/enem/`. Cada arquivo segue o **mesmo
formato da API** enem.dev, em um destes dois formatos:

```jsonc
// Formato A: objeto com array de questões
{
  "year": 2022,
  "title": "ENEM 2022 (curado)",
  "questions": [
    {
      "title": "Questão 7 - ENEM 2022",
      "index": 7,
      "discipline": "ciencias-humanas",   // linguagens | ciencias-humanas | ciencias-natureza | matematica
      "language": null,                     // "espanhol" | "ingles" | null
      "year": 2022,
      "context": "Enunciado em **markdown**...",
      "files": ["https://.../imagem.png"],
      "correctAlternative": "A",
      "alternativesIntroduction": "O texto II ...",
      "alternatives": [
        { "letter": "A", "text": "...", "file": null, "isCorrect": true },
        { "letter": "B", "text": "...", "file": null, "isCorrect": false }
      ]
    }
  ]
}
```

```jsonc
// Formato B: array de questões direto (mesma estrutura de cada item acima)
[ { "index": 1, "year": 2022, "discipline": "linguagens", ... } ]
```

Este repositório já inclui `data/enem/curated-2022.json` e `curated-2023.json` com
questões reais, garantindo que o app **nunca fique vazio** mesmo sem rede.

## Configuração do `.env`

| Variável | Exemplo | Descrição |
| --- | --- | --- |
| `DATABASE_URL` | `file:./dev.db` (SQLite) ou `postgresql://...` | Conexão do banco |

Veja `.env.example` para a lista completa (inclui as variáveis de importação).

## Scripts npm

| Script | Ação |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` / `npm run start` | Build e produção |
| `npm run db:migrate:dev` | Cria/aplica migrations (dev) |
| `npm run db:migrate` | Aplica migrations (produção, `migrate deploy`) |
| `npm run db:seed` | Semeia conteúdo |
| `npm run import` | Importa questões da enem.dev (com fallback) |
| `npm run test` | Roda os testes (Vitest) |
| `npm run lint` | ESLint |

## Estrutura de pastas

```
app/                 # Rotas (App Router)
  api/               # Rotas de API: attempts, progress, redacao, exams
  cronograma/  materiais/  provas/  literatura/  redacao/  progresso/
components/          # Componentes reutilizáveis (client e server)
lib/                 # prisma, json, dates, subjects, enem (API client), grade, tasks
prisma/
  schema.prisma      # Modelos
  seed.ts            # Seed orquestrador
  content/           # Conteúdo do seed (resumos, livros, semanas, repertórios)
scripts/
  import-enem.ts     # Importação de questões
data/enem/           # Fallback local de questões (JSON)
public/enem-assets/  # Imagens baixadas na importação (gitignored)
tests/               # Testes (Vitest)
```

## Modelo de dados (resumo)

`User`, `Subject`, `Topic`, `StudyMaterial`, `Question`, `Exam`, `Week`, `WeekTask`,
`Book`, `Attempt`, `RedacaoEntry`, `Progress`, `Repertorio`. Campos "Json" são
persistidos como `String` (JSON serializado) por compatibilidade com SQLite, e
(de)serializados via `lib/json.ts`.

## Testes

```bash
npm run test
```

Cobrem a lógica central de correção das provas (`lib/grade.ts`) e os helpers de
datas/JSON/áreas (`lib/dates.ts`, `lib/json.ts`, `lib/subjects.ts`).

## Licença e dados

As questões vêm da API **enem.dev** (GPL-2.0, domínio público). Os resumos próprios e
o código deste projeto são autorais. Os links complementares apontam para fontes
externas gratuitas (Brasil Escola, Mundo Educação, Khan Academy Brasil, etc.).
