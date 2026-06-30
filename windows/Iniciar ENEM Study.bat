@echo off
chcp 65001 >nul
title ENEM Study
cd /d "D:\git\Enen_2026"
set PORT=3000

echo ============================================
echo            ENEM Study  -  ENEM 2026
echo ============================================
echo.

REM --- Ja esta aberto? ---
netstat -ano | findstr ":3000" | findstr "LISTENING" >nul
if %errorlevel%==0 (
  echo O sistema ja esta aberto. Abrindo no navegador...
  start "" http://localhost:3000
  goto fim
)

REM --- 1. Dependencias (primeira vez) ---
if not exist "node_modules" (
  echo [1/4] Instalando dependencias. Primeira vez, pode demorar alguns minutos...
  call npm install
)

REM --- 2. Banco de dados e conteudo (primeira vez) ---
if not exist "prisma\dev.db" (
  echo [2/4] Preparando o banco de dados...
  call npm run db:migrate:dev
  echo       Importando questoes reais do ENEM...
  call npm run import
  echo       Carregando o conteudo de estudo...
  call npm run db:seed
)

REM --- 3. Atualizar a aplicacao (sempre, para refletir as ultimas mudancas) ---
echo [3/4] Atualizando a aplicacao (build). Leva alguns instantes...
call npm run build

REM --- 4. Iniciar o servidor em segundo plano ---
echo [4/4] Iniciando o servidor...
start "ENEM Study (servidor)" /min cmd /c "cd /d D:\git\Enen_2026 && npm run start"

echo       Aguardando o servidor subir...
set /a tries=0
:wait
ping -n 2 127.0.0.1 >nul
netstat -ano | findstr ":3000" | findstr "LISTENING" >nul
if not errorlevel 1 goto ready
set /a tries+=1
if %tries% lss 40 goto wait
echo       Aviso: o servidor demorou. Tente abrir manualmente: http://localhost:3000
:ready
start "" http://localhost:3000

echo.
echo ============================================
echo   ENEM Study aberto em:  http://localhost:3000
echo.
echo   Para FECHAR o sistema, use o atalho
echo   "Fechar ENEM Study" na Area de Trabalho.
echo.
echo   Voce ja pode fechar ESTA janela.
echo ============================================

:fim
timeout /t 10 >nul
