-- CreateTable
CREATE TABLE "ReadingMark" (
    "bookId" TEXT NOT NULL PRIMARY KEY,
    "paragrafo" INTEGER NOT NULL,
    "atualizadoEm" DATETIME NOT NULL,
    CONSTRAINT "ReadingMark_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
