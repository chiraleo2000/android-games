@echo off
REM ========================================
REM Deploy to Google Play Store
REM ========================================

echo.
echo ========================================
echo   Google Play Deployment Helper
echo   Inventor's Workshop
echo ========================================
echo.

powershell.exe -ExecutionPolicy Bypass -File "%~dp0DeployToGooglePlay.ps1"

pause
