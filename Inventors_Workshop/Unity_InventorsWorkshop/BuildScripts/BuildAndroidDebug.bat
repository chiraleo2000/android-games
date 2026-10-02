@echo off
REM ========================================
REM Quick Android Debug Build
REM ========================================

echo.
echo ========================================
echo   Building Android Debug
echo   Inventor's Workshop
echo ========================================
echo.

powershell.exe -ExecutionPolicy Bypass -File "%~dp0BuildAndroid.ps1" -BuildType Debug -Version 1.0.0 -OpenAfterBuild

pause
