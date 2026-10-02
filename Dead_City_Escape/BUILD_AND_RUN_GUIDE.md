# Dead City Escape — Build & Run Guide

## Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| Unity | 6000.3.11f1 (Unity 6) | Install via Unity Hub |
| .NET SDK | 8.0+ | For running standalone tests |
| Android SDK | API 34 | Install via Unity Hub → Installs → Android |
| JDK | 11+ | Bundled with Unity's Android module |
| WebGL module | — | Install via Unity Hub → Installs → WebGL |

---

## 1. Running Tests (Standalone .NET)

The standalone logic layer has **120 tests** (97 unit + 23 property-based):

```powershell
cd Dead_City_Escape
dotnet test Tests/DeadCityEscape.Tests/DeadCityEscape.Tests.csproj --verbosity normal
```

Test coverage:
- `DamageCalculatorTests` + `DamageCalculatorPropertyTests` — Damage pipeline, armor, headshots, stagger, noise
- `InventorySystemTests` + `InventorySystemPropertyTests` — Grid inventory, stacking, multi-cell items
- `LRUCacheTests` + `LRUCachePropertyTests` — LRU eviction, callbacks, capacity invariants
- `SeededRNGTests` + `SeededRNGPropertyTests` — Deterministic xoshiro256**, fork independence, weighted choice
- `SkillTreeTests` + `SkillTreeDataPropertyTests` — 3-branch skill tree, unlock prerequisites, tier ordering
- `ZoneLayoutGeneratorTests` + `ZoneLayoutGeneratorPropertyTests` — Procedural city generation, serialization, structural invariants
- `XPLevelingTests` — XP calculation, level-up, skill point awards

---

## 2. Opening in Unity Editor

1. Open **Unity Hub** → **Open** → Select the `Dead_City_Escape` folder
2. Unity 6000.3.11f1 will be required — install if prompted
3. Wait for initial import (procedural art project, no external assets to download)
4. Open scene: **Assets/Scenes/MainMenu.unity**

### Play in Editor
- Press **Play** in the Unity Editor
- Desktop controls: WASD (move), Mouse (look), LMB (fire), Space (jump), Shift (sprint), E (interact), R (reload), F (flashlight), Escape (pause), Tab (skills), H (medkit), C (crouch)

---

## 3. Android Build (Mobile App)

### Via Unity Editor Menu
1. **File → Build Settings** → Select **Android**
2. Click **Switch Platform** (first time only)
3. Use menu: **Build → Build Android AAB** (release) or **Build → Build Android APK (Test)** (debug)

### Via Command Line (CI/CD)
```bash
Unity -batchmode -projectPath . -executeMethod BuildScript.BuildAndroid -quit -logFile build.log
```

### Output
- AAB: `build/Android/DeadCityEscape.aab` (for Google Play Store)
- APK: `build/Android/DeadCityEscape.apk` (for sideloading/testing)

### Install APK on Device
```bash
adb install build/Android/DeadCityEscape.apk
```

### Android Configuration
| Setting | Value |
|---------|-------|
| Package | `com.studio.deadcityescape` |
| Min SDK | 26 (Android 8.0) |
| Target SDK | 34 (Android 14) |
| Architecture | ARM64 + ARMv7 |
| Scripting Backend | IL2CPP |
| Bundle Version | 1.0.0 |

---

## 4. WebGL Build (Web App)

### Via Unity Editor Menu
1. **File → Build Settings** → Select **WebGL**
2. Click **Switch Platform** (first time only)
3. Use menu: **Build → Build WebGL** (release with Brotli compression) or **Build → Build WebGL (Development)** (uncompressed, with profiler)

### Via Command Line
```bash
Unity -batchmode -projectPath . -executeMethod BuildScript.BuildWebGL -quit -logFile build.log
```

### Output
- Release: `build/WebGL/DeadCityEscape/`
- Development: `build/WebGL_Dev/DeadCityEscape/`

### Testing Locally
WebGL builds must be served via HTTP (not `file://`):

```bash
# Python
cd build/WebGL/DeadCityEscape
python -m http.server 8080

# Node.js
npx serve build/WebGL/DeadCityEscape -p 8080

# PowerShell (dotnet)
dotnet tool install -g dotnet-serve
dotnet serve -d build/WebGL/DeadCityEscape -p 8080
```
Then open **http://localhost:8080** in a modern browser (Chrome, Firefox, Edge).

### WebGL Notes
- Desktop browsers: keyboard/mouse controls (same as Editor play)
- Mobile browsers: detected automatically, touch controls shown
- Brotli compression requires HTTPS or localhost (use a local server)
- First load may take 30-60 seconds (WASM compilation)
- Save data persists in browser IndexedDB

---

## 5. Quality Settings

The game has two quality tiers that auto-select based on device:

| Setting | Lite (Low-end) | Standard (Mid+) |
|---------|---------------|-----------------|
| Target FPS | 30 | 60 |
| Max Zombies | 12 | 20 |
| Shadows | Off | On |
| Post-Processing | Off | On |
| URP Asset | URP_Lite | URP_Standard |

Players can change quality in Settings (accessible from Main Menu or Pause Menu).

---

## 6. Project Structure

```
Assets/
  Scenes/       — MainMenu, LoadingScreen, Game
  Scripts/
    Core/        — GameManager, SaveSystem, InputManager, ObjectPool, QualityManager
    Player/      — PlayerController, PlayerHealth, PlayerInventory, PlayerFlashlight
    AI/          — ZombieBase (8-state FSM), ZombieVariants, ZombieSpawner, SurvivorNPC
    WorldGen/    — CityGenerator (16-zone procedural city), ZoneInstance
    Escape/      — EscapeRouteManager, 3 routes (Helicopter, Car, Sewer), pickups
    UI/          — HUD, MainMenu, PauseMenu, MobileJoystick, SkillTreeUI, SafeArea
    Combat/      — WeaponSystem, PickupSystem, Explosive
    ProceduralArt/ — Geometry, Textures, Neon, Weather (kkrieger-style, all from code)
    Audio/       — Procedural audio generation
    Logic/       — Pure C# (SeededRNG, ZoneLayoutGenerator, DamageCalculator, etc.)
  Editor/        — BuildScript.cs (Android AAB/APK + WebGL builds)
  Settings/      — URP assets, Input Actions
Tests/
  DeadCityEscape.Logic/  — Standalone .NET logic (mirrors Assets/Scripts/Logic/)
  DeadCityEscape.Tests/  — 120 NUnit tests
```

---

## 7. Troubleshooting

| Issue | Solution |
|-------|----------|
| "Scene not found" during build | Ensure all 3 scenes are in Build Settings → Scenes In Build |
| WebGL build fails | Install WebGL module via Unity Hub → Installs |
| Android build fails | Install Android module + SDK/NDK via Unity Hub → Installs |
| Tests fail with "FsCheck" errors | Run `dotnet restore` in `Tests/DeadCityEscape.Tests/` |
| WebGL "out of memory" | Increase memory in Player Settings → WebGL → Memory Size (default 512MB) |
| Low FPS on device | Switch to Lite quality in Settings menu |
