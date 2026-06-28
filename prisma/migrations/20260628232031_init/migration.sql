-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subjectId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "ordem" INTEGER NOT NULL,
    CONSTRAINT "Topic_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StudyMaterial" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "topicId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "resumoMarkdown" TEXT NOT NULL,
    "links" TEXT NOT NULL DEFAULT '[]',
    CONSTRAINT "StudyMaterial_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "index" INTEGER NOT NULL,
    "discipline" TEXT NOT NULL,
    "language" TEXT,
    "contextMarkdown" TEXT,
    "comando" TEXT,
    "alternativas" TEXT NOT NULL DEFAULT '[]',
    "correta" TEXT,
    "arquivos" TEXT NOT NULL DEFAULT '[]',
    "comentario" TEXT,
    "topicId" TEXT,
    CONSTRAINT "Question_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Exam" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "tipo" TEXT NOT NULL,
    "year" INTEGER,
    "questionIds" TEXT NOT NULL DEFAULT '[]',
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Week" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "numero" INTEGER NOT NULL,
    "foco" TEXT NOT NULL,
    "dataInicio" DATETIME NOT NULL,
    "dataFim" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "WeekTask" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "weekId" TEXT NOT NULL,
    "subjectId" TEXT,
    "titulo" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "refType" TEXT,
    "refId" TEXT,
    CONSTRAINT "WeekTask_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "Week" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "WeekTask_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "prioridade" TEXT NOT NULL,
    "escola" TEXT,
    "temasRedacao" TEXT NOT NULL DEFAULT '[]',
    "resumoMarkdown" TEXT NOT NULL,
    "links" TEXT NOT NULL DEFAULT '[]',
    "ordem" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Attempt" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "examId" TEXT NOT NULL,
    "iniciadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalizadoEm" DATETIME,
    "respostas" TEXT NOT NULL DEFAULT '{}',
    "acertos" INTEGER NOT NULL DEFAULT 0,
    "total" INTEGER NOT NULL DEFAULT 0,
    "porArea" TEXT NOT NULL DEFAULT '{}',
    CONSTRAINT "Attempt_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RedacaoEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tema" TEXT NOT NULL,
    "textoMarkdown" TEXT NOT NULL,
    "autoavaliacao" TEXT NOT NULL DEFAULT '{}',
    "notaTotal" INTEGER NOT NULL DEFAULT 0,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Progress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo" TEXT NOT NULL,
    "refId" TEXT NOT NULL,
    "concluido" BOOLEAN NOT NULL DEFAULT false,
    "concluidoEm" DATETIME
);

-- CreateTable
CREATE TABLE "Repertorio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoria" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "temas" TEXT NOT NULL DEFAULT '[]',
    "fonte" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Subject_slug_key" ON "Subject"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_slug_key" ON "Topic"("slug");

-- CreateIndex
CREATE INDEX "Question_discipline_idx" ON "Question"("discipline");

-- CreateIndex
CREATE INDEX "Question_year_idx" ON "Question"("year");

-- CreateIndex
CREATE UNIQUE INDEX "Question_year_index_language_key" ON "Question"("year", "index", "language");

-- CreateIndex
CREATE UNIQUE INDEX "Exam_slug_key" ON "Exam"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Week_numero_key" ON "Week"("numero");

-- CreateIndex
CREATE UNIQUE INDEX "Book_slug_key" ON "Book"("slug");

-- CreateIndex
CREATE INDEX "Attempt_examId_idx" ON "Attempt"("examId");

-- CreateIndex
CREATE UNIQUE INDEX "Progress_tipo_refId_key" ON "Progress"("tipo", "refId");
