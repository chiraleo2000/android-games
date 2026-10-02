# Dead City Escape - Play listing validation
# Exits with a non-zero code when a required store or policy file is missing.

function Invoke-PlayReleaseValidation {
    param([string]$Root)

    $errors = 0
    Write-Host "=== Dead City Escape Play release ===" -ForegroundColor Cyan

    $required = @(
        "PRIVACY_POLICY.md",
        "TERMS_OF_SERVICE.md",
        "RELEASE_URLS.md",
        "DEVICE_CHECKLIST.md",
        "keystore.properties.example",
        "store/icon_512.png",
        "store/feature_graphic_1024x500.png",
        "store/screenshot_01_menu.png",
        "store/screenshot_02_city.png",
        "store/short_description.txt",
        "store/full_description.txt",
        "store/content_rating_answers.md",
        "Assets/Editor/BuildScript.cs",
        "Assets/Scripts/UI/PlayComplianceOverlay.cs"
    )
    foreach ($relative in $required) {
        $path = Join-Path $Root $relative
        if (Test-Path -LiteralPath $path) {
            Write-Host "[OK] $relative" -ForegroundColor Green
        } else {
            Write-Host "[MISSING] $relative" -ForegroundColor Red
            $errors++
        }
    }

    foreach ($doc in @("PRIVACY_POLICY.md", "TERMS_OF_SERVICE.md", "RELEASE_URLS.md")) {
        $path = Join-Path $Root $doc
        if (-not (Test-Path -LiteralPath $path)) { continue }
        $text = Get-Content -LiteralPath $path -Raw
        foreach ($pair in @(
            @{ Pattern = "\[LEGAL_NAME\]"; Label = "[LEGAL_NAME]" },
            @{ Pattern = "\[SUPPORT_EMAIL\]"; Label = "[SUPPORT_EMAIL]" },
            @{ Pattern = "\[EFFECTIVE_DATE\]"; Label = "[EFFECTIVE_DATE]" },
            @{ Pattern = "(?i)violent"; Label = "violent game statement" },
            @{ Pattern = "(?i)families"; Label = "not a Families app" },
            @{ Pattern = "(?i)account"; Label = "no account" },
            @{ Pattern = "(?i)not sent off the device"; Label = "on-device data" }
        )) {
            if ($text -notmatch $pair.Pattern) {
                Write-Host "[MISSING] $($pair.Label) in $doc" -ForegroundColor Red
                $errors++
            }
        }
    }

    $shortPath = Join-Path $Root "store/short_description.txt"
    if (Test-Path -LiteralPath $shortPath) {
        $short = (Get-Content -LiteralPath $shortPath -Raw).Trim()
        if ([string]::IsNullOrWhiteSpace($short) -or $short.Length -gt 80) {
            Write-Host "[ERROR] Short description length is $($short.Length); max is 80" -ForegroundColor Red
            $errors++
        } else {
            Write-Host "[OK] Short description ($($short.Length) chars)" -ForegroundColor Green
        }
    }

    $fullPath = Join-Path $Root "store/full_description.txt"
    if (Test-Path -LiteralPath $fullPath) {
        $full = (Get-Content -LiteralPath $fullPath -Raw).Trim()
        if ([string]::IsNullOrWhiteSpace($full) -or $full.Length -gt 4000) {
            Write-Host "[ERROR] Full description length is $($full.Length); max is 4000" -ForegroundColor Red
            $errors++
        } else {
            Write-Host "[OK] Full description ($($full.Length) chars)" -ForegroundColor Green
        }
    }

    function Get-PngSize([string]$path) {
        $bytes = [System.IO.File]::ReadAllBytes($path)
        if ($bytes.Length -lt 24 -or $bytes[0] -ne 137) {
            throw "Not a PNG: $path"
        }
        $width = [int]$bytes[16] * 16777216 + [int]$bytes[17] * 65536 + [int]$bytes[18] * 256 + [int]$bytes[19]
        $height = [int]$bytes[20] * 16777216 + [int]$bytes[21] * 65536 + [int]$bytes[22] * 256 + [int]$bytes[23]
        return @{ Width = $width; Height = $height }
    }

    $icon = Join-Path $Root "store/icon_512.png"
    $feature = Join-Path $Root "store/feature_graphic_1024x500.png"
    if (Test-Path -LiteralPath $icon) {
        $size = Get-PngSize $icon
        if ($size.Width -ne 512 -or $size.Height -ne 512) {
            Write-Host "[ERROR] icon_512.png is $($size.Width)x$($size.Height)" -ForegroundColor Red
            $errors++
        }
    }
    if (Test-Path -LiteralPath $feature) {
        $size = Get-PngSize $feature
        if ($size.Width -ne 1024 -or $size.Height -ne 500) {
            Write-Host "[ERROR] feature graphic is $($size.Width)x$($size.Height)" -ForegroundColor Red
            $errors++
        }
    }

    $storeDir = Join-Path $Root "store"
    if (Test-Path -LiteralPath $storeDir) {
        $shots = @(Get-ChildItem -LiteralPath $storeDir -Filter "screenshot_*.png" -ErrorAction SilentlyContinue)
        if ($shots.Count -lt 2) {
            Write-Host "[ERROR] Need at least 2 phone screenshots" -ForegroundColor Red
            $errors++
        } else {
            foreach ($shot in $shots) {
                $size = Get-PngSize $shot.FullName
                if ($size.Height -le $size.Width) {
                    Write-Host "[ERROR] $($shot.Name) is not a portrait phone screenshot" -ForegroundColor Red
                    $errors++
                }
            }
        }
    }

    $settingsPath = Join-Path $Root "ProjectSettings/ProjectSettings.asset"
    if (Test-Path -LiteralPath $settingsPath) {
        $yaml = Get-Content -LiteralPath $settingsPath -Raw
        if ($yaml -notmatch "Android: com\.studio\.deadcityescape") { Write-Host "[ERROR] Android application id" -ForegroundColor Red; $errors++ }
        if ($yaml -notmatch "overrideDefaultApplicationIdentifier: 1") { Write-Host "[ERROR] application id override" -ForegroundColor Red; $errors++ }
        if ($yaml -notmatch "AndroidTargetSdkVersion: 36") { Write-Host "[ERROR] target SDK" -ForegroundColor Red; $errors++ }
        if ($yaml -notmatch "AndroidTargetArchitectures: 2") { Write-Host "[ERROR] ARM64 architecture flag" -ForegroundColor Red; $errors++ }
        if ($yaml -notmatch "scriptingBackend:\s*\r?\n\s*Android:\s*1") { Write-Host "[ERROR] IL2CPP" -ForegroundColor Red; $errors++ }
        if ($yaml -match "(?m)^  androidKeystorePass: \S") { Write-Host "[ERROR] keystore password in ProjectSettings" -ForegroundColor Red; $errors++ }
    }

    $gradlePath = Join-Path $Root "Assets/Plugins/Android/mainTemplate.gradle"
    if ((Test-Path -LiteralPath $gradlePath) -and (Select-String -LiteralPath $gradlePath -Pattern "RECORD_AUDIO" -Quiet)) {
        Write-Host "[ERROR] RECORD_AUDIO is declared" -ForegroundColor Red
        $errors++
    }

    $ignorePath = Join-Path $Root ".gitignore"
    if (Test-Path -LiteralPath $ignorePath) {
        $ignore = Get-Content -LiteralPath $ignorePath -Raw
        if ($ignore -notmatch "keystore\.properties") { Write-Host "[ERROR] .gitignore missing keystore.properties" -ForegroundColor Red; $errors++ }
        if ($ignore -notmatch "\*\.jks") { Write-Host "[ERROR] .gitignore missing *.jks" -ForegroundColor Red; $errors++ }
    }

    $unity = "C:\Program Files\Unity\Hub\Editor\6000.3.11f1\Editor\Unity.exe"
    if (Test-Path -LiteralPath $unity) {
        Write-Host "[OK] Unity 6000.3.11f1 is installed. AAB build was not started by this check." -ForegroundColor Green
    } else {
        Write-Host "[WARN] Unity 6000.3.11f1 is not installed. Project settings and the Build Android AAB menu are ready; the AAB was not built." -ForegroundColor Yellow
    }

    if ($errors -gt 0) {
        Write-Host "Play release validation failed with $errors error(s)." -ForegroundColor Red
    } else {
        Write-Host "Play release validation passed." -ForegroundColor Green
    }
    return $errors
}

if ($MyInvocation.InvocationName -ne '.') {
    $root = Split-Path -Parent $MyInvocation.MyCommand.Path
    $count = Invoke-PlayReleaseValidation -Root $root
    exit $count
}
