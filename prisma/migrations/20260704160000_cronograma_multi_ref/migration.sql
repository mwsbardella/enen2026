-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Week" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL DEFAULT 'Semana',
    "foco" TEXT NOT NULL DEFAULT '',
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "origem" TEXT NOT NULL DEFAULT 'sugerido',
    "dataInicio" DATETIME,
    "dataFim" DATETIME,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Week" ("dataFim", "dataInicio", "foco", "id") SELECT "dataFim", "dataInicio", "foco", "id" FROM "Week";
DROP TABLE "Week";
ALTER TABLE "new_Week" RENAME TO "Week";
CREATE TABLE "new_WeekTask" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "weekId" TEXT NOT NULL,
    "subjectId" TEXT,
    "titulo" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "refs" TEXT NOT NULL DEFAULT '[]',
    "dataInicio" DATETIME,
    "dataFim" DATETIME,
    CONSTRAINT "WeekTask_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "Week" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "WeekTask_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_WeekTask" ("id", "ordem", "subjectId", "tipo", "titulo", "weekId") SELECT "id", "ordem", "subjectId", "tipo", "titulo", "weekId" FROM "WeekTask";
DROP TABLE "WeekTask";
ALTER TABLE "new_WeekTask" RENAME TO "WeekTask";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
