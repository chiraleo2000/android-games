# ========================================
# Unity iOS Build Automation Script
# ========================================
# This script automates the iOS build process for Inventor's Workshop
# 
# Prerequisites:
# - Unity 2022.3 LTS installed
# - macOS with Xcode installed
# - Project configured for iOS
#
# Usage: .\BuildiOS.ps1 [-Version 1.0.0]
# ========================================

param(
    [Parameter(Mandatory=$false)]
    [string]$Version = "1.0.0",
    
    [Parameter(Mandatory=$false)]
    [switch]$AutoIncrement
)

# ========================================
# Configuration
# ========================================

$ErrorActionPreference = "Stop"

# Unity paths (adjust if needed)
$UnityPath = "C:\Program Files\Unity\Hub\Editor\2022.3.0f1\Editor\Unity.exe"
$ProjectPath = Split-Path -Parent $PSScriptRoot
$BuildPath = Join-Path $ProjectPath "Builds\iOS"
$LogPath = Join-Path $ProjectPath "Builds\Logs"

# Build settings
$ProductName = "InventorsWorkshop"
$BundleIdentifier = "com.yourcompany.inventorsworkshop"

# Colors
$ColorSuccess = "Green"
$ColorError = "Red"
$ColorWarning = "Yellow"
$ColorInfo = "Cyan"

# ========================================
# Functions
# ========================================

function Write-ColorOutput {
    param(
        [string]$Message,
        [string]$Color = "White"
    )
    Write-Host $Message -ForegroundColor $Color
}

function Test-UnityInstalled {
    if (-not (Test-Path $UnityPath)) {
        Write-ColorOutput "❌ Unity not found at: $UnityPath" $ColorError
        Write-ColorOutput "Please update the UnityPath variable in this script" $ColorWarning
        exit 1
    }
    Write-ColorOutput "✅ Unity found at: $UnityPath" $ColorSuccess
}

function Initialize-BuildDirectories {
    Write-ColorOutput "`n📁 Creating build directories..." $ColorInfo
    
    if (-not (Test-Path $BuildPath)) {
        New-Item -ItemType Directory -Path $BuildPath -Force | Out-Null
        Write-ColorOutput "✅ Created: $BuildPath" $ColorSuccess
    }
    
    if (-not (Test-Path $LogPath)) {
        New-Item -ItemType Directory -Path $LogPath -Force | Out-Null
        Write-ColorOutput "✅ Created: $LogPath" $ColorSuccess
    }
}

function Invoke-UnityBuild {
    $outputPath = Join-Path $BuildPath "XcodeProject"
    $logFile = Join-Path $LogPath "build-ios-$(Get-Date -Format 'yyyyMMdd_HHmmss').log"
    
    Write-ColorOutput "`n🔨 Starting Unity build..." $ColorInfo
    Write-ColorOutput "Version: $Version" $ColorInfo
    Write-ColorOutput "Output: $outputPath" $ColorInfo
    
    # Unity command line arguments
    $unityArgs = @(
        "-quit",
        "-batchmode",
        "-nographics",
        "-projectPath", "`"$ProjectPath`"",
        "-buildTarget", "iOS",
        "-executeMethod", "BuildScript.BuildiOS",
        "-logFile", "`"$logFile`"",
        "-buildPath", "`"$outputPath`"",
        "-version", $Version
    )
    
    Write-ColorOutput "`n⏳ Building... (this may take 10-20 minutes)" $ColorWarning
    Write-ColorOutput "Log file: $logFile" $ColorInfo
    
    try {
        $process = Start-Process -FilePath $UnityPath -ArgumentList $unityArgs -Wait -PassThru -NoNewWindow
        
        if ($process.ExitCode -eq 0) {
            Write-ColorOutput "`n✅ Xcode project generated successfully!" $ColorSuccess
            Write-ColorOutput "Output: $outputPath" $ColorSuccess
            return $outputPath
        } else {
            Write-ColorOutput "`n❌ Build failed with exit code: $($process.ExitCode)" $ColorError
            Write-ColorOutput "Check log file: $logFile" $ColorWarning
            exit 1
        }
    } catch {
        Write-ColorOutput "`n❌ Build error: $_" $ColorError
        exit 1
    }
}

function Show-BuildSummary {
    param([string]$OutputPath)
    
    Write-ColorOutput "`n" "White"
    Write-ColorOutput "========================================" $ColorSuccess
    Write-ColorOutput "       BUILD SUMMARY" $ColorSuccess
    Write-ColorOutput "========================================" $ColorSuccess
    Write-ColorOutput "Product: $ProductName" $ColorInfo
    Write-ColorOutput "Version: $Version" $ColorInfo
    Write-ColorOutput "Xcode Project: $OutputPath" $ColorInfo
    Write-ColorOutput "========================================" $ColorSuccess
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "📱 Next Steps (on macOS):" $ColorWarning
    Write-ColorOutput "1. Copy Xcode project to Mac" $ColorInfo
    Write-ColorOutput "2. Open in Xcode" $ColorInfo
    Write-ColorOutput "3. Configure signing & capabilities" $ColorInfo
    Write-ColorOutput "4. Archive the project" $ColorInfo
    Write-ColorOutput "5. Upload to App Store Connect" $ColorInfo
}

# ========================================
# Main Script
# ========================================

Write-ColorOutput "`n" "White"
Write-ColorOutput "========================================" $ColorInfo
Write-ColorOutput "  Unity iOS Build Automation" $ColorInfo
Write-ColorOutput "  Inventor's Workshop" $ColorInfo
Write-ColorOutput "========================================" $ColorInfo
Write-ColorOutput "`n" "White"

# Check if running on Windows
Write-ColorOutput "⚠️  Note: iOS builds require macOS with Xcode" $ColorWarning
Write-ColorOutput "This script generates the Xcode project only" $ColorInfo
Write-ColorOutput "`n" "White"

# Step 1: Verify Unity installation
Test-UnityInstalled

# Step 2: Initialize directories
Initialize-BuildDirectories

# Step 3: Build the project
$outputPath = Invoke-UnityBuild

# Step 4: Show summary
Show-BuildSummary -OutputPath $outputPath

Write-ColorOutput "`n✅ Script completed successfully!" $ColorSuccess
