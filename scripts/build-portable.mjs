/**
 * Gera o PACOTE PORTÁTIL OFFLINE (Windows) do EnemStudy.
 *
 *   npm run build:portable
 *
 * Produz dist-portable/EnemStudy/ — uma pasta autocontida que o aluno copia
 * para o PC e abre com duplo clique em "Iniciar.bat", sem instalar nada:
 * um Node embutido roda o servidor Next (build standalone) em localhost e abre
 * o navegador. Todo o estado (progresso, simulados, redação) é salvo no SQLite
 * local (dados/enem.db). A versão atual do projeto não é afetada.
 *
 * Passos: build standalone -> baixar node.exe (1ª vez) -> montar a pasta ->
 * copiar engine do Prisma + estáticos + public -> preparar DB limpo -> escrever
 * launcher.
 */
import { execFileSync } from "node:child_process";
import { createWriteStream } from "node:fs";
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// Node embutido no pacote (Windows x64). Mude a versão aqui se necessário.
const NODE_VERSION = "v22.11.0";
const NODE_URL = `https://nodejs.org/dist/${NODE_VERSION}/win-x64/node.exe`;

const paths = {
  standalone: path.join(ROOT, ".next", "standalone"),
  nextStatic: path.join(ROOT, ".next", "static"),
  public: path.join(ROOT, "public"),
  devDb: path.join(ROOT, "prisma", "dev.db"),
  prismaGen: path.join(ROOT, "node_modules", ".prisma"),
  prismaClient: path.join(ROOT, "node_modules", "@prisma", "client"),
  nextBin: path.join(ROOT, "node_modules", "next", "dist", "bin", "next"),
  tsxCli: path.join(ROOT, "node_modules", "tsx", "dist", "cli.mjs"),
  nodeCache: path.join(ROOT, "tools", "node-win", "node.exe"),
  distRoot: path.join(ROOT, "dist-portable", "EnemStudy"),
};

function log(msg) {
  console.log(`\n▸ ${msg}`);
}

function download(url, dest, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) return reject(new Error("Excesso de redirecionamentos"));
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          return resolve(download(res.headers.location, dest, redirects + 1));
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} ao baixar ${url}`));
        }
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        const file = createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve()));
        file.on("error", reject);
      })
      .on("error", reject);
  });
}

async function ensureNode() {
  if (fs.existsSync(paths.nodeCache)) {
    log(`Node embutido já presente (${paths.nodeCache}).`);
    return;
  }
  log(`Baixando Node ${NODE_VERSION} (Windows x64) — só na 1ª vez...`);
  try {
    await download(NODE_URL, paths.nodeCache);
  } catch (e) {
    throw new Error(
      `Falha ao baixar o node.exe (${e.message}).\n` +
        `Baixe manualmente de ${NODE_URL} e salve em ${paths.nodeCache}, depois rode de novo.`,
    );
  }
  log("Node embutido baixado.");
}

function run(file, args, extraEnv = {}) {
  execFileSync(file, args, {
    cwd: ROOT,
    stdio: "inherit",
    env: { ...process.env, ...extraEnv },
  });
}

function copyDir(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

function dirSizeMB(dir) {
  let total = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) total += Number(dirSizeMB.raw(p));
    else total += fs.statSync(p).size;
  }
  return (total / (1024 * 1024)).toFixed(0);
}
dirSizeMB.raw = function raw(dir) {
  let total = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    total += entry.isDirectory() ? raw(p) : fs.statSync(p).size;
  }
  return total;
};

const START_JS = `// Bootstrap do EnemStudy portátil: define porta/banco e sobe o servidor Next.
const path = require("path");
process.env.PORT = process.env.PORT || "3210";
process.env.HOSTNAME = process.env.HOSTNAME || "127.0.0.1";
// Caminho ABSOLUTO do banco (barras normais para o Prisma, inclusive no Windows).
process.env.DATABASE_URL =
  "file:" + path.join(__dirname, "dados", "enem.db").replace(/\\\\/g, "/");

// Abre o navegador alguns segundos depois de o servidor subir.
setTimeout(() => {
  try {
    require("child_process").exec('start "" http://localhost:' + process.env.PORT);
  } catch (_) {}
}, 2500);

require("./app/server.js");
`;

const INICIAR_BAT = `@echo off
cd /d "%~dp0"
title EnemStudy - servidor local (NAO feche esta janela enquanto estiver estudando)
echo.
echo   EnemStudy - iniciando...
echo   O navegador vai abrir sozinho em alguns segundos (localhost:3210).
echo   Para PARAR de usar, feche esta janela.
echo.
node\\node.exe start.js
echo.
echo   O servidor parou. Voce pode fechar esta janela.
pause >nul
`;

const LEIA_ME = `EnemStudy - versao offline (Windows)
=====================================

COMO USAR
1. Copie a pasta "EnemStudy" INTEIRA para o seu computador
   (ex.: Area de Trabalho ou Documentos). NAO rode direto do pendrive
   se ele for somente-leitura, pois o app precisa salvar seu progresso.
2. Abra a pasta e de DUPLO CLIQUE em "Iniciar.bat".
3. Aguarde alguns segundos: o navegador abre sozinho no EnemStudy.
4. Para parar, feche a janela preta (a do servidor).

OBSERVACOES
- Nao precisa instalar nada e nao precisa de internet.
- Na primeira vez, o Windows (SmartScreen) ou o antivirus pode pedir
  confirmacao. Escolha "Mais informacoes" > "Executar assim mesmo".
- Seu progresso, simulados e redacoes ficam salvos neste computador,
  dentro da pasta "dados". Faca uma copia dessa pasta se quiser guardar.
- Se a porta 3210 estiver ocupada, feche outros programas e tente de novo.

Bons estudos!
`;

async function main() {
  console.log("=== EnemStudy — gerando pacote portátil offline ===");

  await ensureNode();

  log("Build standalone (BUILD_PORTABLE=1 next build)...");
  run(process.execPath, [paths.nextBin, "build"], { BUILD_PORTABLE: "1" });

  if (!fs.existsSync(paths.standalone)) {
    throw new Error(
      "'.next/standalone' não foi gerado. Confirme que next.config ativa output 'standalone' com BUILD_PORTABLE=1.",
    );
  }
  if (!fs.existsSync(paths.devDb)) {
    throw new Error(
      `Banco base não encontrado em ${paths.devDb}. Rode o seed do projeto antes (ex.: npm run db:seed).`,
    );
  }

  log("Limpando pasta de saída...");
  fs.rmSync(path.join(ROOT, "dist-portable"), { recursive: true, force: true });
  const appDir = path.join(paths.distRoot, "app");
  fs.mkdirSync(appDir, { recursive: true });

  log("Copiando servidor standalone, estáticos e public...");
  copyDir(paths.standalone, appDir);
  copyDir(paths.nextStatic, path.join(appDir, ".next", "static"));
  copyDir(paths.public, path.join(appDir, "public"));

  log("Copiando client e engine do Prisma (evita 'engine não encontrado')...");
  copyDir(paths.prismaGen, path.join(appDir, "node_modules", ".prisma"));
  copyDir(paths.prismaClient, path.join(appDir, "node_modules", "@prisma", "client"));

  log("Preparando banco limpo (dados/enem.db)...");
  const enemDb = path.join(paths.distRoot, "dados", "enem.db");
  fs.mkdirSync(path.dirname(enemDb), { recursive: true });
  fs.copyFileSync(paths.devDb, enemDb);
  run(process.execPath, [paths.tsxCli, path.join("scripts", "prepare-clean-db.ts"), enemDb]);

  log("Copiando Node embutido e escrevendo o launcher...");
  fs.mkdirSync(path.join(paths.distRoot, "node"), { recursive: true });
  fs.copyFileSync(paths.nodeCache, path.join(paths.distRoot, "node", "node.exe"));
  fs.writeFileSync(path.join(paths.distRoot, "start.js"), START_JS);
  fs.writeFileSync(path.join(paths.distRoot, "Iniciar.bat"), INICIAR_BAT);
  fs.writeFileSync(path.join(paths.distRoot, "LEIA-ME.txt"), LEIA_ME);

  const size = dirSizeMB(paths.distRoot);
  console.log("\n=== Pacote pronto ===");
  console.log(`Pasta: ${paths.distRoot}`);
  console.log(`Tamanho aproximado: ${size} MB`);
  console.log("Copie a pasta 'EnemStudy' para um pendrive e distribua. Para testar:");
  console.log(`  cd "${paths.distRoot}" && node\\node.exe start.js`);
}

main().catch((e) => {
  console.error("\n✗ Erro ao gerar o pacote:", e.message);
  process.exitCode = 1;
});
