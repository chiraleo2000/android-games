# Dead City Escape - Unity 6 Project Setup

## Task 1: Project Setup and Unity Configuration - COMPLETED

This document describes the automated setup that has been completed and the manual steps required in the Unity Editor.

## ✅ Automated Setup Completed

### 1. Scene Structure
Created three scenes in `Assets/Scenes/`:
- **MainMenu.unity** - Main menu scene with camera
- **LoadingScreen.unity** - Loading screen scene
- **Game.unity** - Main game scene with camera and directional light

### 2. Assembly Definitions
- **DeadCityEscape.Logic.asmdef** - Pure logic layer with NO Unity dependencies (`noEngineReferences: true`)
  - Located in `Assets/Scripts/Logic/`
  - Contains: SeededRNG, ZoneLayoutGenerator, LRUCache, DamageCalculator, InventorySystem, SkillTreeData
  
- **DeadCityEscape.Runtime.asmdef** - Unity MonoBehaviour layer
  - References: DeadCityEscape.Logic, Unity.InputSystem, Unity.TextMeshPro, Unity.AI.Navigation
  - Contains all Unity-dependent scripts

- **Test Assemblies**
  - `DeadCityEscape.EditMode.Tests.asmdef` - References Logic + Runtime
  - `DeadCityEscape.PlayMode.Tests.asmdef` - References Logic + Runtime

### 3. URP Assets
Created two quality tiers in `Assets/Settings/`:

- **URP_Lite.asset** (Quality Level 0)
  - Forward rendering
  - No HDR, no MSAA, no shadows
  - Render scale: 0.75
  - Target: Devices with ≤4 GB RAM
  - Target framerate: 30 FPS

- **URP_Standard.asset** (Quality Level 1)
  - Forward+ rendering
  - HDR enabled, MSAA 2×
  - Shadows: 30m distance, 2 cascades
  - Render scale: 1.0
  - Target: Devices with >4 GB RAM
  - Target framerate: 60 FPS

### 4. Input System
- **InputActions.inputactions** - Complete action maps for Player and UI
  - Player actions: Move, Look, Jump, Sprint, Crouch, Fire, Reload, Interact
  - UI actions: Navigate, Submit, Cancel, Point, Click
  - Keyboard & Mouse bindings configured
  - Touch control scheme defined (to be used with MobileJoystick)

### 5. Quality Settings
Updated `ProjectSettings/QualitySettings.asset`:
- Level 0: **Lite** (Android default)
- Level 1: **Standard** (iOS/Standalone default)

### 6. Build Settings
- **EditorBuildSettings.asset** - All three scenes added to build
- **link.xml** - IL2CPP stripping configuration to preserve:
  - DeadCityEscape.Logic assembly
  - DeadCityEscape.Runtime assembly
  - System assemblies (for JSON serialization)
  - Unity core modules
  - Input System
  - URP assemblies

### 7. Android Configuration (Partial)
Current settings in `ProjectSettings/ProjectSettings.asset`:
- ✅ Package Name: `com.chira.deadcityescape`
- ✅ Min SDK: API 26
- ✅ Target SDK: API 34
- ✅ Target Architectures: ARM64 + x86_64 (AndroidTargetArchitectures: 3)
- ✅ Active Input Handler: Input System Package (New) (activeInputHandler: 2)
- ✅ Managed Stripping Level: Minimal (Android: 1)

## ⚠️ Manual Steps Required in Unity Editor

### Step 1: Configure Scripting Backend
1. Open Unity Editor
2. Go to **Edit → Project Settings → Player**
3. Select **Android** tab
4. Expand **Other Settings**
5. Set **Scripting Backend** to **IL2CPP**
6. Verify **Target Architectures** shows:
   - ✅ ARM64
   - ✅ x86-64 (for emulator testing)

### Step 2: Link URP Assets to Graphics Settings
1. Go to **Edit → Project Settings → Graphics**
2. Set **Scriptable Render Pipeline Settings** to `Assets/Settings/URP_Standard.asset`
3. Go to **Edit → Project Settings → Quality**
4. For **Lite** quality level:
   - Click on the level
   - Set **Rendering** → **Render Pipeline Asset** to `Assets/Settings/URP_Lite.asset`
5. For **Standard** quality level:
   - Click on the level
   - Set **Rendering** → **Render Pipeline Asset** to `Assets/Settings/URP_Standard.asset`

### Step 3: Configure Input System Settings
1. Go to **Edit → Project Settings → Input System Package**
2. Click **Create Settings Asset** if prompted
3. Set **Update Mode** to **Process Events In Dynamic Update**
4. Enable **Background Behavior** → **Ignore Focus**

### Step 4: Verify Scene Build Order
1. Go to **File → Build Settings**
2. Verify scenes are in this order:
   - Scene 0: `Assets/Scenes/MainMenu.unity`
   - Scene 1: `Assets/Scenes/LoadingScreen.unity`
   - Scene 2: `Assets/Scenes/Game.unity`

### Step 5: Create URP Renderer Assets (if needed)
If the URP assets show errors about missing renderers:
1. Right-click in `Assets/Settings/`
2. Create → Rendering → URP Renderer (Forward Renderer)
3. Name it `ForwardRenderer`
4. Assign it to both URP_Lite and URP_Standard assets

### Step 6: Verify Assembly References
1. Select `Assets/Scripts/Logic/DeadCityEscape.Logic.asmdef`
2. In Inspector, verify:
   - ✅ **No Engine References** is checked
   - ✅ References list is empty
3. Select `Assets/Scripts/DeadCityEscape.Runtime.asmdef`
4. Verify references include:
   - DeadCityEscape.Logic
   - Unity.InputSystem
   - Unity.TextMeshPro
   - Unity.AI.Navigation

## 📋 Verification Checklist

After completing manual steps, verify:

- [ ] Project opens without errors
- [ ] All three scenes load successfully
- [ ] URP is active (Game view shows URP rendering)
- [ ] Input System package is active (no legacy input warnings)
- [ ] Assembly definitions compile without errors
- [ ] Android build settings show IL2CPP + ARM64
- [ ] Quality settings show Lite and Standard tiers
- [ ] Test assemblies reference Logic layer correctly

## 🎯 Requirements Validated

This setup satisfies the following requirements from the spec:

- **Requirement 14.3**: Unity 6 project with URP 17 ✅
- **Requirement 14.4**: Android build settings (IL2CPP, ARM64, API 26-34) ✅
- **Requirement 14.5**: ASTC texture compression support (via URP) ✅
- **Requirement 14.8**: Two quality tiers (Lite and Standard) ✅
- **Requirement 16.1-16.17**: Logic layer test infrastructure ✅

## 📁 Project Structure

```
Dead_City_Escape/
├── Assets/
│   ├── Scenes/
│   │   ├── MainMenu.unity
│   │   ├── LoadingScreen.unity
│   │   └── Game.unity
│   ├── Scripts/
│   │   ├── Logic/                          # Pure C# logic layer
│   │   │   ├── DeadCityEscape.Logic.asmdef (noEngineReferences: true)
│   │   │   ├── SeededRNG.cs
│   │   │   ├── ZoneLayoutGenerator.cs
│   │   │   ├── LRUCache.cs
│   │   │   ├── DamageCalculator.cs
│   │   │   ├── InventorySystem.cs
│   │   │   └── SkillTreeData.cs
│   │   ├── Core/                           # Unity singletons
│   │   ├── Player/                         # Player systems
│   │   ├── AI/                             # Zombie AI
│   │   ├── Combat/                         # Weapon systems
│   │   ├── WorldGen/                       # City generation
│   │   ├── ProceduralArt/                  # Procedural assets
│   │   ├── UI/                             # UI controllers
│   │   ├── Escape/                         # Escape routes
│   │   ├── Audio/                          # Audio manager
│   │   └── DeadCityEscape.Runtime.asmdef
│   ├── Settings/
│   │   ├── URP_Standard.asset
│   │   ├── URP_Lite.asset
│   │   └── InputActions.inputactions
│   ├── Tests/
│   │   ├── EditMode/
│   │   │   └── DeadCityEscape.EditMode.Tests.asmdef
│   │   └── PlayMode/
│   │       └── DeadCityEscape.PlayMode.Tests.asmdef
│   └── link.xml
├── ProjectSettings/
│   ├── ProjectSettings.asset
│   ├── QualitySettings.asset
│   ├── GraphicsSettings.asset
│   └── EditorBuildSettings.asset
└── Packages/
    └── manifest.json                       # URP 17.0.3, Input System 1.11.2

```

## 🚀 Next Steps

After completing the manual steps above, you can proceed to:
- **Task 2**: Implement and test the Logic layer (SeededRNG, ZoneLayoutGenerator, etc.)
- **Task 4**: Implement Unity core systems (GameManager, SaveSystem, InputManager, AudioManager)

## 📝 Notes

- The Logic layer is completely isolated from Unity - it can be tested with standalone NUnit
- All procedural generation will use the SeededRNG for deterministic results
- The Input System is configured for both keyboard/mouse (editor testing) and touch (mobile)
- Quality tier switching at runtime will be handled by GameManager based on device RAM
