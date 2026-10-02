# ========================================
# Google Play Store Deployment Script
# ========================================
# This script helps deploy your app to Google Play Console
# 
# Prerequisites:
# - Google Play Console account ($25 one-time fee)
# - App created in Play Console
# - Signed AAB file
# - Service account JSON key (for API access)
#
# Usage: .\DeployToGooglePlay.ps1 [-AABPath path] [-Track internal|alpha|beta|production]
# ========================================

param(
    [Parameter(Mandatory=$false)]
    [string]$AABPath = "",
    
    [Parameter(Mandatory=$false)]
    [ValidateSet("internal", "alpha", "beta", "production")]
    [string]$Track = "internal",
    
    [Parameter(Mandatory=$false)]
    [string]$ServiceAccountKey = "",
    
    [Parameter(Mandatory=$false)]
    [switch]$DryRun
)

# ========================================
# Configuration
# ========================================

$ErrorActionPreference = "Stop"

$PackageName = "com.yourcompany.inventorsworkshop"
$ProjectPath = Split-Path -Parent $PSScriptRoot
$BuildPath = Join-Path $ProjectPath "Builds\Android"

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

function Test-Prerequisites {
    Write-ColorOutput "`n🔍 Checking prerequisites..." $ColorInfo
    
    # Check if AAB file exists
    if ($AABPath -eq "") {
        # Find latest AAB file
        $aabFiles = Get-ChildItem -Path $BuildPath -Filter "*.aab" | Sort-Object LastWriteTime -Descending
        if ($aabFiles.Count -eq 0) {
            Write-ColorOutput "❌ No AAB files found in $BuildPath" $ColorError
            Write-ColorOutput "Please build a release AAB first using BuildAndroid.ps1" $ColorWarning
            exit 1
        }
        $AABPath = $aabFiles[0].FullName
        Write-ColorOutput "✅ Found AAB: $($aabFiles[0].Name)" $ColorSuccess
    } elseif (-not (Test-Path $AABPath)) {
        Write-ColorOutput "❌ AAB file not found: $AABPath" $ColorError
        exit 1
    }
    
    # Check file size
    $fileSize = (Get-Item $AABPath).Length / 1MB
    Write-ColorOutput "✅ AAB size: $([math]::Round($fileSize, 2)) MB" $ColorSuccess
    
    if ($fileSize > 150) {
        Write-ColorOutput "⚠️  Warning: AAB is larger than 150MB" $ColorWarning
        Write-ColorOutput "Consider optimizing assets and code" $ColorWarning
    }
    
    return $AABPath
}

function Show-DeploymentGuide {
    param([string]$AABPath)
    
    Write-ColorOutput "`n" "White"
    Write-ColorOutput "========================================" $ColorInfo
    Write-ColorOutput "  Google Play Deployment Guide" $ColorInfo
    Write-ColorOutput "========================================" $ColorInfo
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "📱 Your AAB file is ready:" $ColorSuccess
    Write-ColorOutput "   $AABPath" $ColorInfo
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "📋 Manual Deployment Steps:" $ColorWarning
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "1️⃣  Go to Google Play Console" $ColorInfo
    Write-ColorOutput "   https://play.google.com/console" $ColorInfo
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "2️⃣  Select your app (or create new app)" $ColorInfo
    Write-ColorOutput "   - App name: Inventor's Workshop" $ColorInfo
    Write-ColorOutput "   - Package name: $PackageName" $ColorInfo
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "3️⃣  Go to Release → Testing → Internal testing" $ColorInfo
    Write-ColorOutput "   (or Alpha/Beta/Production based on your choice)" $ColorInfo
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "4️⃣  Create new release" $ColorInfo
    Write-ColorOutput "   - Click 'Create new release'" $ColorInfo
    Write-ColorOutput "   - Upload AAB file" $ColorInfo
    Write-ColorOutput "   - Add release notes" $ColorInfo
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "5️⃣  Review and rollout" $ColorInfo
    Write-ColorOutput "   - Review release details" $ColorInfo
    Write-ColorOutput "   - Click 'Review release'" $ColorInfo
    Write-ColorOutput "   - Click 'Start rollout to $Track'" $ColorInfo
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "6️⃣  Wait for review (if production)" $ColorInfo
    Write-ColorOutput "   - Internal/Alpha/Beta: Available in minutes" $ColorInfo
    Write-ColorOutput "   - Production: Review takes 1-7 days" $ColorInfo
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "========================================" $ColorSuccess
    Write-ColorOutput "  Store Listing Requirements" $ColorSuccess
    Write-ColorOutput "========================================" $ColorSuccess
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "📝 Required Assets:" $ColorWarning
    Write-ColorOutput "   ✓ App icon (512x512 PNG)" $ColorInfo
    Write-ColorOutput "   ✓ Feature graphic (1024x500 PNG)" $ColorInfo
    Write-ColorOutput "   ✓ Screenshots (2-8 images)" $ColorInfo
    Write-ColorOutput "     - Phone: 16:9 or 9:16 ratio" $ColorInfo
    Write-ColorOutput "     - Tablet: 16:9 or 9:16 ratio (optional)" $ColorInfo
    Write-ColorOutput "   ✓ Short description (80 chars max)" $ColorInfo
    Write-ColorOutput "   ✓ Full description (4000 chars max)" $ColorInfo
    Write-ColorOutput "   ✓ Privacy policy URL" $ColorInfo
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "📱 Suggested Short Description:" $ColorInfo
    Write-ColorOutput "   'Build amazing machines with gears, motors, and real physics!'" $ColorSuccess
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "📱 Suggested Category:" $ColorInfo
    Write-ColorOutput "   Education" $ColorSuccess
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "💰 Pricing:" $ColorInfo
    Write-ColorOutput "   Free (with optional in-app purchases)" $ColorSuccess
    Write-ColorOutput "   or" $ColorInfo
    Write-ColorOutput "   Paid ($0.99 - $1.99 USD)" $ColorSuccess
    Write-ColorOutput "`n" "White"
}

function Show-AutomationInfo {
    Write-ColorOutput "`n" "White"
    Write-ColorOutput "========================================" $ColorWarning
    Write-ColorOutput "  Automated Deployment (Advanced)" $ColorWarning
    Write-ColorOutput "========================================" $ColorWarning
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "For automated deployment, you need:" $ColorInfo
    Write-ColorOutput "1. Google Play Developer API enabled" $ColorInfo
    Write-ColorOutput "2. Service account with API access" $ColorInfo
    Write-ColorOutput "3. Service account JSON key file" $ColorInfo
    Write-ColorOutput "4. fastlane or similar tool installed" $ColorInfo
    Write-ColorOutput "`n" "White"
    
    Write-ColorOutput "Setup Guide:" $ColorInfo
    Write-ColorOutput "https://developers.google.com/android-publisher/getting_started" $ColorSuccess
    Write-ColorOutput "`n" "White"
}

function Test-AABIntegrity {
    param([string]$AABPath)
    
    Write-ColorOutput "`n🔍 Testing AAB integrity..." $ColorInfo
    
    # Check if bundletool is available
    $bundletoolPath = "bundletool.jar"
    if (-not (Test-Path $bundletoolPath)) {
        Write-ColorOutput "⚠️  bundletool not found (optional)" $ColorWarning
        Write-ColorOutput "Download from: https://github.com/google/bundletool/releases" $ColorInfo
        return
    }
    
    try {
        # Validate AAB
        $output = java -jar $bundletoolPath validate --bundle=$AABPath 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-ColorOutput "✅ AAB validation passed" $ColorSuccess
        } else {
            Write-ColorOutput "⚠️  AAB validation warnings:" $ColorWarning
            Write-ColorOutput $output $ColorWarning
        }
    } catch {
        Write-ColorOutput "⚠️  Could not validate AAB: $_" $ColorWarning
    }
}

# ========================================
# Main Script
# ========================================

Write-ColorOutput "`n" "White"
Write-ColorOutput "========================================" $ColorInfo
Write-ColorOutput "  Google Play Deployment Helper" $ColorInfo
Write-ColorOutput "  Inventor's Workshop" $ColorInfo
Write-ColorOutput "========================================" $ColorInfo
Write-ColorOutput "`n" "White"

# Step 1: Check prerequisites
$aabPath = Test-Prerequisites

# Step 2: Test AAB integrity (optional)
Test-AABIntegrity -AABPath $aabPath

# Step 3: Show deployment guide
Show-DeploymentGuide -AABPath $aabPath

# Step 4: Show automation info
Show-AutomationInfo

Write-ColorOutput "`n✅ Deployment helper completed!" $ColorSuccess
Write-ColorOutput "Follow the steps above to deploy your app" $ColorInfo
Write-ColorOutput "`n" "White"
