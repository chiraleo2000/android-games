@echo off
REM ========================================
REM Quick Android Release Build
REM ========================================

echo.
echo ========================================
echo   Building Android Release
echo   Inventor's Workshop
echo ========================================
echo.

powershell.exe -ExecutionPolicy Bypass -File "%~dp0BuildAndroid.ps1" -BuildType Release -Version 1.0.0 -OpenAfterBuild

pause
