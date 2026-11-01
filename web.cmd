@echo off
setlocal
set "PURE_NODE_DIR=%~dp0..\.tools\node-v24.22.2-win-x64"
set "PURE_BUN_DIR=%~dp0..\.tools\bun-windows-x64"

if not exist "%PURE_NODE_DIR%\node.exe" (
  echo Missing local Node.js: %PURE_NODE_DIR%
  exit /b 1
)
if not exist "%PURE_BUN_DIR%\bun.exe" (
  echo Missing local Bun: %PURE_BUN_DIR%
  exit /b 1
)

set "PATH=%PURE_NODE_DIR%;%PURE_BUN_DIR%;%PATH%"
set "BUN_INSTALL_CACHE_DIR=%~dp0..\.tools\bun-cache"
pushd "%~dp0"
if "%~1"=="" (
  "%PURE_BUN_DIR%\bun.exe" run dev
) else (
  "%PURE_BUN_DIR%\bun.exe" %*
)
set "PURE_EXIT_CODE=%ERRORLEVEL%"
popd
exit /b %PURE_EXIT_CODE%
