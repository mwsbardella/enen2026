@echo off
chcp 65001 >nul
title Fechar ENEM Study

echo Fechando o ENEM Study...
set "found=0"

REM --- Encerra o servidor que escuta na porta 3000 ---
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000" ^| findstr "LISTENING"') do (
  taskkill /F /PID %%a >nul 2>&1
  set "found=1"
)

REM --- Fecha tambem a janela do servidor, se aberta ---
taskkill /FI "WINDOWTITLE eq ENEM Study (servidor)*" /F >nul 2>&1

echo.
if "%found%"=="1" (
  echo ENEM Study fechado com sucesso.
) else (
  echo O sistema nao parecia estar aberto.
)
echo.
timeout /t 5 >nul
