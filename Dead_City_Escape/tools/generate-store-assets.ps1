# Draws the Play store PNGs with System.Drawing. No Unity import.
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$store = Join-Path $root "store"
New-Item -ItemType Directory -Force -Path $store | Out-Null

function New-Canvas([int]$w, [int]$h) {
    $bmp = New-Object System.Drawing.Bitmap $w, $h
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    return @{ Bitmap = $bmp; Graphics = $g }
}

function Save-Png($canvas, [string]$path) {
    $canvas.Graphics.Dispose()
    $canvas.Bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $canvas.Bitmap.Dispose()
}

function Draw-Skyline($g, [int]$w, [int]$h, [int]$ground) {
    $rng = New-Object System.Random 7
    $building = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 22, 26, 36))
    $window = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 40, 210, 190))
    $x = 0
    while ($x -lt $w) {
        $bw = 28 + $rng.Next(70)
        $bh = 80 + $rng.Next([Math]::Max(40, $ground - 40))
        $g.FillRectangle($building, $x, $h - $ground - $bh, $bw, $bh + $ground)
        for ($wy = $h - $ground - $bh + 16; $wy -lt $h - $ground - 12; $wy += 22) {
            for ($wx = $x + 8; $wx -lt $x + $bw - 10; $wx += 16) {
                if ($rng.Next(3) -eq 0) {
                    $g.FillRectangle($window, $wx, $wy, 6, 10)
                }
            }
        }
        $x += $bw + 8
    }
    $building.Dispose()
    $window.Dispose()
}

# Icon 512
$icon = New-Canvas 512 512
$icon.Graphics.Clear([System.Drawing.Color]::FromArgb(255, 12, 14, 20))
Draw-Skyline $icon.Graphics 512 512 80
$red = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 176, 42, 42))
$icon.Graphics.FillRectangle($red, 0, 430, 512, 82)
$font = New-Object System.Drawing.Font "Arial", 42, ([System.Drawing.FontStyle]::Bold)
$white = [System.Drawing.Brushes]::White
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center
$icon.Graphics.DrawString("DCE", $font, $white, (New-Object System.Drawing.RectangleF 0, 430, 512, 82), $sf)
$red.Dispose(); $font.Dispose()
Save-Png $icon (Join-Path $store "icon_512.png")

# Feature graphic 1024x500
$feature = New-Canvas 1024 500
$feature.Graphics.Clear([System.Drawing.Color]::FromArgb(255, 10, 12, 18))
Draw-Skyline $feature.Graphics 1024 500 70
$titleFont = New-Object System.Drawing.Font "Arial", 64, ([System.Drawing.FontStyle]::Bold)
$subFont = New-Object System.Drawing.Font "Arial", 28, ([System.Drawing.FontStyle]::Regular)
$feature.Graphics.DrawString("DEAD CITY ESCAPE", $titleFont, $white, (New-Object System.Drawing.RectangleF 0, 150, 1024, 90), $sf)
$feature.Graphics.DrawString("Violent offline survival. No account.", $subFont, $white, (New-Object System.Drawing.RectangleF 0, 250, 1024, 50), $sf)
$titleFont.Dispose(); $subFont.Dispose()
Save-Png $feature (Join-Path $store "feature_graphic_1024x500.png")

function Draw-Phone([string]$name, [string]$title, [string[]]$lines) {
    $phone = New-Canvas 1080 1920
    $phone.Graphics.Clear([System.Drawing.Color]::FromArgb(255, 8, 10, 16))
    Draw-Skyline $phone.Graphics 1080 1920 220
    $bar = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(220, 16, 18, 26))
    $phone.Graphics.FillRectangle($bar, 70, 280, 940, 1280)
    $head = New-Object System.Drawing.Font "Arial", 64, ([System.Drawing.FontStyle]::Bold)
    $body = New-Object System.Drawing.Font "Arial", 36, ([System.Drawing.FontStyle]::Regular)
    $phone.Graphics.DrawString($title, $head, $white, (New-Object System.Drawing.RectangleF 70, 340, 940, 100), $sf)
    $y = 500
    $btn = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 28, 48, 58))
    foreach ($line in $lines) {
        $phone.Graphics.FillRectangle($btn, 160, $y, 760, 120)
        $phone.Graphics.DrawString($line, $body, $white, (New-Object System.Drawing.RectangleF 160, $y, 760, 120), $sf)
        $y += 160
    }
    $bar.Dispose(); $head.Dispose(); $body.Dispose(); $btn.Dispose()
    Save-Png $phone (Join-Path $store $name)
}

Draw-Phone "screenshot_01_menu.png" "DEAD CITY ESCAPE" @("Helicopter", "Car", "Sewer", "Settings")
Draw-Phone "screenshot_02_city.png" "ESCAPE THE CITY" @("Health", "Fight", "Hold the pad")

$sf.Dispose()
Write-Host "Wrote store PNGs to $store"
