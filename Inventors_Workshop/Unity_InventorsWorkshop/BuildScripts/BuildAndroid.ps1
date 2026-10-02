# ========================================
# Unity Android Build Automation Script
# ========================================
# This script automates the Android build process for Inventor's Workshop
# 
# Prerequisites:
# - Unity 2022.3 LTS installed
# - Android SDK installed
# - Java JDK installed
# - Project configured for Android
#
# Usage: .\BuildAndroid.ps1 [-BuildType Release|Debug] [-Version 1.0.0]
# ========================================

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("Release", "Debug")]
    [string]$BuildType = "Release",
    
    [Parameter(Mandatory=$false)]
    [string]$Version = "1.0.0",
    
    [Parameter(Mandatory=$false)]
    [switch]$AutoIncrement,
    
    [Parameter(Mandatory=$false)]
    [switch]$OpenAfterBuild
)

# ========================================
# Configuration
# ========================================

$ErrorActionPreference = "Stop"

# Unity paths (adjust if needed)
$UnityPath = "C:\Program Files\Unity\Hub\Editor\2022.3.0f1\Editor\Unity.exe"
$ProjectPath = Split-Path -Parent $PSScriptRoot
$BuildPath = Join-Path $ProjectPath "Builds\Android"
$LogPath = Join-Path $ProjectPath "Builds\Logs"

# Build settings
$ProductName = "InventorsWorkshop"
$PackageName = "com.yourcompany.inventorsworkshop"
$BuildNumber = 1

# Colors for output
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

function Get-BuildFileName {
    $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $buildType = $BuildType.ToLower()
    
    if ($BuildType -eq "Release") {
        return "$ProductName-v$Version-$buildType.aab"
    } else {
        return "$ProductName-v$Version-$buildType-$timestamp.apk"
    }
}

function Invoke-UnityBuild {
    $buildFile = Get-BuildFileName
    $outputPath = Join-Path $BuildPath $buildFile
    $logFile = Join-Path $LogPath "build-android-$(Get-Date -Format 'yyyyMMdd_HHmmss').log"
    
    Write-ColorOutput "`n🔨 Starting Unity build..." $ColorInfo
    Write-ColorOutput "Build Type: $BuildType" $ColorInfo
    Write-ColorOutput "Version: $Version" $ColorInfo
    Write-ColorOutput "Output: $outputPath" $ColorInfo
    
    # Unity command line arguments
    $unityArgs = @(
        "-quit",
        "-batchmode",
        "-nographics",
        "-projectPath", "`"$ProjectPath`"",
        "-buildTarget", "Android",
        "-executeMethod", "BuildScript.BuildAndroid",
        "-logFile", "`"$logFile`"",
        "-buildPath", "`"$outputPath`"",
        "-buildType", $BuildType,
        "-version", $Version
    )
    
    Write-ColorOutput "`n⏳ Building... (this may take 10-20 minutes)" $ColorWarning
    Write-ColorOutput "Log file: $logFile" $ColorInfo
    
    try {
        $process = Start-Process -FilePath $UnityPath -ArgumentList $unityArgs -Wait -PassThru -NoNewWindow
        
        if ($process.ExitCode -eq 0) {
            Write-ColorOutput "`n✅ Build completed successfully!" $ColorSuccess
            Write-ColorOutput "Output: $outputPath" $ColorSuccess
            
            # Show file size
            if (Test-Path $outputPath) {
                $fileSize = (Get-Item $outputPath).Length / 1MB
                Write-ColorOutput "File size: $([math]::Round($fileSize, 2)) MB" $ColorInfo
            }
            
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

function Open-BuildFolder {
    if ($OpenAfterBuild) {
        Write-ColorOutput "`n📂 Opening build folder..." $ColorInfo
        Start-Process explorer.exe -ArgumentList $BuildPath
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
    Write-ColorOutput "Build Type: $BuildType" $ColorInfo
    Write-ColorOutput "Output: $OutputPath" $ColorInfo
    Write-ColorOutput "========================================" $ColorSuccess
    Write-ColorOutput "`n" "White"
    
    if ($BuildType -eq "Release") {
        Write-ColorOutput "📱 Next Steps:" $ColorWarning
        Write-ColorOutput "1. Test the AAB file" $ColorInfo
        Write-ColorOutput "2. Upload to Google Play Console" $ColorInfo
        Write-ColorOutput "3. Submit for review" $ColorInfo
    } else {
        Write-ColorOutput "📱 Next Steps:" $ColorWarning
        Write-ColorOutput "1. Install APK on device: adb install `"$OutputPath`"" $ColorInfo
        Write-ColorOutput "2. Test the app" $ColorInfo
        Write-ColorOutput "3. Fix any issues" $ColorInfo
    }
}

# ========================================
# Main Script
# ========================================

Write-ColorOutput "`n" "White"
Write-ColorOutput "========================================" $ColorInfo
Write-ColorOutput "  Unity Android Build Automation" $ColorInfo
Write-ColorOutput "  Inventor's Workshop" $ColorInfo
Write-ColorOutput "========================================" $ColorInfo
Write-ColorOutput "`n" "White"

# Step 1: Verify Unity installation
Test-UnityInstalled

# Step 2: Initialize directories
Initialize-BuildDirectories

# Step 3: Build the project
$outputPath = Invoke-UnityBuild

# Step 4: Open build folder (optional)
Open-BuildFolder

# Step 5: Show summary
Show-BuildSummary -OutputPath $outputPath

Write-ColorOutput "`n✅ Script completed successfully!" $ColorSuccess
