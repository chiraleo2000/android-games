# Dead City Escape - Project Validation Script
# This script validates that all necessary files and configurations are in place

Write-Host "=== Dead City Escape Project Validation ===" -ForegroundColor Cyan
Write-Host ""

$errors = 0
$warnings = 0

# Function to check file existence
function Test-FileExists {
    param($path, $description)
    if (Test-Path $path) {
        Write-Host "[OK] $description" -ForegroundColor Green
        return $true
    } else {
        Write-Host "[MISSING] $description - $path" -ForegroundColor Red
        $script:errors++
        return $false
    }
}

# Function to check directory existence
function Test-DirectoryExists {
    param($path, $description)
    if (Test-Path $path -PathType Container) {
        Write-Host "[OK] $description" -ForegroundColor Green
        return $true
    } else {
        Write-Host "[MISSING] $description - $path" -ForegroundColor Yellow
        $script:warnings++
        return $false
    }
}

Write-Host "1. Checking Unity Installation..." -ForegroundColor Cyan
$unityPath = "C:\Program Files\Unity\Hub\Editor\6000.3.11f1\Editor\Unity.exe"
if (Test-Path $unityPath) {
    Write-Host "[OK] Unity 6 (6000.3.11f1) found" -ForegroundColor Green
    Write-Host "    Path: $unityPath" -ForegroundColor Gray
} else {
    Write-Host "[WARN] Unity 6000.3.11f1 was not found. Android settings and the AAB menu are in the project; the bundle was not built." -ForegroundColor Yellow
    Write-Host "    Expected: $unityPath" -ForegroundColor Gray
}
Write-Host ""

Write-Host "2. Checking Project Structure..." -ForegroundColor Cyan
Test-FileExists "ProjectSettings/ProjectVersion.txt" "Project version file"
Test-FileExists "ProjectSettings/ProjectSettings.asset" "Project settings"
Test-FileExists "ProjectSettings/EditorBuildSettings.asset" "Build settings"
Test-FileExists "ProjectSettings/QualitySettings.asset" "Quality settings"
Test-FileExists "ProjectSettings/GraphicsSettings.asset" "Graphics settings"
Test-FileExists "Packages/manifest.json" "Package manifest"
Write-Host ""

Write-Host "3. Checking Scene Files..." -ForegroundColor Cyan
Test-FileExists "Assets/Scenes/MainMenu.unity" "Main Menu scene"
Test-FileExists "Assets/Scenes/LoadingScreen.unity" "Loading Screen scene"
Test-FileExists "Assets/Scenes/Game.unity" "Game scene"
Write-Host ""

Write-Host "4. Checking Core Scripts..." -ForegroundColor Cyan
Test-FileExists "Assets/Scripts/Core/GameManager.cs" "GameManager"
Test-FileExists "Assets/Scripts/Core/SaveSystem.cs" "SaveSystem"
Test-FileExists "Assets/Scripts/Core/InputManager.cs" "InputManager"
Test-FileExists "Assets/Scripts/Core/QualityManager.cs" "QualityManager"
Test-FileExists "Assets/Scripts/Audio/AudioManager.cs" "AudioManager"
Write-Host ""

Write-Host "5. Checking Logic Layer..." -ForegroundColor Cyan
Test-FileExists "Assets/Scripts/Logic/SeededRNG.cs" "SeededRNG"
Test-FileExists "Assets/Scripts/Logic/LRUCache.cs" "LRUCache"
Test-FileExists "Assets/Scripts/Logic/DamageCalculator.cs" "DamageCalculator"
Test-FileExists "Assets/Scripts/Logic/InventorySystem.cs" "InventorySystem"
Test-FileExists "Assets/Scripts/Logic/SkillTreeData.cs" "SkillTreeData"
Test-FileExists "Assets/Scripts/Logic/ZoneLayoutGenerator.cs" "ZoneLayoutGenerator"
Write-Host ""

Write-Host "6. Checking Player Systems..." -ForegroundColor Cyan
Test-FileExists "Assets/Scripts/Player/PlayerController.cs" "PlayerController"
Test-FileExists "Assets/Scripts/Player/PlayerHealth.cs" "PlayerHealth"
Test-FileExists "Assets/Scripts/Player/PlayerInventory.cs" "PlayerInventory"
Test-FileExists "Assets/Scripts/Player/PlayerFlashlight.cs" "PlayerFlashlight"
Write-Host ""

Write-Host "7. Checking AI Systems..." -ForegroundColor Cyan
Test-FileExists "Assets/Scripts/AI/ZombieBase.cs" "ZombieBase"
Test-FileExists "Assets/Scripts/AI/ZombieVariants.cs" "ZombieVariants"
Test-FileExists "Assets/Scripts/AI/ZombieSpawner.cs" "ZombieSpawner"
Write-Host ""

Write-Host "8. Checking Combat Systems..." -ForegroundColor Cyan
Test-FileExists "Assets/Scripts/Combat/WeaponSystem.cs" "WeaponSystem"
Test-FileExists "Assets/Scripts/Combat/Explosive.cs" "Explosive"
Test-FileExists "Assets/Scripts/Combat/PickupSystem.cs" "PickupSystem"
Write-Host ""

Write-Host "9. Checking World Generation..." -ForegroundColor Cyan
Test-FileExists "Assets/Scripts/WorldGen/CityGenerator.cs" "CityGenerator"
Test-FileExists "Assets/Scripts/ProceduralArt/ProceduralTexture.cs" "ProceduralTexture"
Test-FileExists "Assets/Scripts/ProceduralArt/ProceduralGeometry.cs" "ProceduralGeometry"
Test-FileExists "Assets/Scripts/ProceduralArt/RecipeCache.cs" "RecipeCache"
Write-Host ""

Write-Host "10. Checking Escape Routes..." -ForegroundColor Cyan
Test-FileExists "Assets/Scripts/Escape/EscapeRouteManager.cs" "EscapeRouteManager"
Test-FileExists "Assets/Scripts/Escape/HelicopterObjectiveSpawner.cs" "Helicopter route"
Test-FileExists "Assets/Scripts/Escape/CarObjectiveSpawner.cs" "Car route"
Test-FileExists "Assets/Scripts/Escape/SewerObjectiveSpawner.cs" "Sewer route"
Write-Host ""

Write-Host "11. Checking UI Systems..." -ForegroundColor Cyan
Test-FileExists "Assets/Scripts/UI/MainMenuController.cs" "MainMenuController"
Test-FileExists "Assets/Scripts/UI/LoadingScreenUI.cs" "LoadingScreenUI"
Test-FileExists "Assets/Scripts/UI/HUDController.cs" "HUDController"
Test-FileExists "Assets/Scripts/UI/MobileJoystick.cs" "MobileJoystick"
Test-FileExists "Assets/Scripts/UI/SkillTreeUI.cs" "SkillTreeUI"
Write-Host ""

Write-Host "12. Checking Android Build Configuration..." -ForegroundColor Cyan
Test-FileExists "Assets/Editor/BuildScript.cs" "Build script"
Test-FileExists "Assets/link.xml" "IL2CPP link.xml"
Test-FileExists "Assets/Plugins/Android/mainTemplate.gradle" "Gradle template"
Write-Host ""

Write-Host "13. Checking URP Assets..." -ForegroundColor Cyan
Test-FileExists "Assets/Settings/URP_Lite.asset" "URP Lite asset"
Test-FileExists "Assets/Settings/URP_Standard.asset" "URP Standard asset"
Test-FileExists "Assets/Settings/InputActions.inputactions" "Input actions"
Write-Host ""

Write-Host "14. Checking Test Project..." -ForegroundColor Cyan
Test-FileExists "Tests/DeadCityEscape.Tests/DeadCityEscape.Tests.csproj" "Test project"
Test-FileExists "Tests/DeadCityEscape.Logic/DeadCityEscape.Logic.csproj" "Logic library"
Write-Host ""

Write-Host "15. Running .NET Tests..." -ForegroundColor Cyan
Push-Location "Tests/DeadCityEscape.Tests"
try {
    $testResult = dotnet test --verbosity quiet --nologo 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "[OK] All .NET tests passed" -ForegroundColor Green
        # Extract test count from output
        $testResult | Select-String "Test summary:" | ForEach-Object {
            Write-Host "    $_" -ForegroundColor Gray
        }
    } else {
        Write-Host "[FAILED] Some .NET tests failed" -ForegroundColor Red
        $errors++
    }
} catch {
    Write-Host "[ERROR] Failed to run tests: $_" -ForegroundColor Red
    $errors++
} finally {
    Pop-Location
}
Write-Host ""

Write-Host "16. Checking Play release files..." -ForegroundColor Cyan
. "$PSScriptRoot\validate-play-release.ps1"
$playErrors = Invoke-PlayReleaseValidation -Root $PSScriptRoot
if ($playErrors -gt 0) {
    $errors += $playErrors
}
Write-Host ""

Write-Host "16. Checking documentation..." -ForegroundColor Cyan
Test-FileExists "README.md" "README"
Test-FileExists "TEST_RESULTS.md" "Test results"
Test-FileExists "NEXT_STEPS.md" "Next steps guide"
Test-FileExists "DEPLOYMENT_CHECKLIST.md" "Deployment checklist"
Test-FileExists "ANDROID_BUILD_CONFIGURATION.md" "Android build config"
Write-Host ""

# Summary
Write-Host "=== Validation Summary ===" -ForegroundColor Cyan
if ($errors -eq 0 -and $warnings -eq 0) {
    Write-Host "✓ All checks passed! Project is ready." -ForegroundColor Green
} elseif ($errors -eq 0) {
    Write-Host "⚠ $warnings warning(s) found, but project should work." -ForegroundColor Yellow
} else {
    Write-Host "✗ $errors error(s) and $warnings warning(s) found." -ForegroundColor Red
    Write-Host "  Please fix errors before proceeding." -ForegroundColor Red
}
Write-Host ""

# Next steps
if ($errors -eq 0) {
    Write-Host "=== Next Steps ===" -ForegroundColor Cyan
    Write-Host "1. Open Unity Hub" -ForegroundColor White
    Write-Host "2. Click 'Add' and select this project folder" -ForegroundColor White
    Write-Host "3. Open the project (first open takes 5-10 minutes)" -ForegroundColor White
    Write-Host "4. In Unity: Build > Build Android APK (Test)" -ForegroundColor White
    Write-Host "5. Install on device: adb install build/Android/DeadCityEscape.apk" -ForegroundColor White
    Write-Host ""
    Write-Host "For detailed instructions, see: NEXT_STEPS.md" -ForegroundColor Gray
}

exit $errors
