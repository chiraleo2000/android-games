# 🎮 Inventor's Workshop - Unity/.NET Edition

## 📋 Project Overview

This is a complete rewrite of Inventor's Workshop using **Unity 2022.3 LTS** and **C#/.NET**, featuring:
- ✅ Better physics with Unity Physics 2D
- ✅ Professional game structure
- ✅ Modern mobile UI/UX
- ✅ Improved performance
- ✅ Native mobile deployment

---

## 🚀 Getting Started

### Prerequisites
- Unity 2022.3 LTS or newer
- Visual Studio 2022 or Rider
- Android SDK (for Android builds)
- Xcode (for iOS builds, macOS only)

### Setup Instructions

1. **Open in Unity Hub**
   - Click "Add" → Select this folder
   - Open with Unity 2022.3 LTS

2. **Import Required Packages**
   - Window → Package Manager
   - Install: TextMeshPro, 2D Physics, Mobile Notifications

3. **Configure Build Settings**
   - File → Build Settings
   - Select Android or iOS
   - Switch Platform

4. **Run the Game**
   - Open `Scenes/MainMenu.unity`
   - Press Play ▶️

---

## 📁 Project Structure

```
Assets/
├── Scenes/              # Game scenes
│   ├── MainMenu.unity   # Main menu screen
│   ├── Settings.unity   # Settings screen
│   ├── Gameplay.unity   # Main gameplay
│   ├── Examples.unity   # Example mechanisms
│   └── Tutorial.unity   # Tutorial mode
│
├── Scripts/             # C# scripts
│   ├── Core/           # Core systems
│   │   ├── GameManager.cs
│   │   ├── AudioManager.cs
│   │   ├── SaveManager.cs
│   │   └── SettingsManager.cs
│   │
│   ├── UI/             # UI controllers
│   │   ├── MainMenuUI.cs
│   │   ├── SettingsUI.cs
│   │   ├── GameplayUI.cs
│   │   └── ComponentPaletteUI.cs
│   │
│   ├── Components/     # Game components
│   │   ├── BaseComponent.cs
│   │   ├── Gear.cs
│   │   ├── Motor.cs
│   │   └── Block.cs
│   │
│   ├── Physics/        # Physics systems
│   │   ├── PhysicsManager.cs
│   │   ├── GearConnection.cs
│   │   └── MotorController.cs
│   │
│   ├── Gameplay/       # Gameplay systems
│   │   ├── WorkspaceManager.cs
│   │   ├── ComponentPlacement.cs
│   │   └── SimulationController.cs
│   │
│   └── Data/           # Data classes
│       ├── WorkspaceData.cs
│       └── ComponentData.cs
│
├── Prefabs/            # Prefab objects
├── Materials/          # Physics materials
├── Sprites/            # 2D sprites
├── Audio/              # Sound effects & music
└── Resources/          # Runtime resources
```

---

## 🎯 Core Systems

### 1. GameManager (Singleton)
**Location**: `Scripts/Core/GameManager.cs`

Main game controller that manages:
- Scene transitions
- Game state
- Sub-managers (Audio, Save, Settings)
- Pause/Resume functionality

```csharp
// Usage
GameManager.Instance.LoadGameplay();
GameManager.Instance.PauseGame();
```

### 2. AudioManager
**Location**: `Scripts/Core/AudioManager.cs`

Handles all audio:
- Background music
- Sound effects
- Haptic feedback
- Volume control

```csharp
// Usage
audioManager.PlayMusic("gameplay");
audioManager.PlaySFX("buttonClick");
audioManager.PlayHaptic(HapticType.Light);
```

### 3. SaveManager
**Location**: `Scripts/Core/SaveManager.cs`

Manages save/load:
- Workspace saving
- Progress tracking
- JSON serialization
- File management

```csharp
// Usage
saveManager.SaveWorkspace(workspaceData);
WorkspaceData data = saveManager.LoadWorkspace(id);
```

### 4. SettingsManager
**Location**: `Scripts/Core/SettingsManager.cs`

Manages settings:
- Audio settings
- Control settings
- Graphics settings
- Localization

```csharp
// Usage
settingsManager.SetMusicVolume(0.7f);
settingsManager.SetHapticsEnabled(true);
```

---

## 🎨 UI Screens

### Main Menu
- Play button → Gameplay scene
- Examples button → Examples scene
- Settings button → Settings scene
- Tutorial button → Tutorial scene
- Exit button → Quit game

### Settings Screen
- Audio: Music/SFX volume sliders
- Controls: Haptics toggle, sensitivity
- Graphics: Quality dropdown, FPS toggle
- Gameplay: Auto-save, tutorial hints
- Localization: Language selection
- UI: Theme selection

### Gameplay Screen
- Component palette (left side)
- Workspace canvas (center)
- Control panel (bottom)
- Status bar (bottom)

---

## 🔧 Component System

### Base Component
All components inherit from `BaseComponent.cs`:
- Position, rotation, scale
- Physics properties
- Connection points
- Serialization

### Component Types
1. **Gears** - Different sizes (8T, 12T, 16T, 24T, 32T)
2. **Motors** - DC, Servo, Stepper
3. **Blocks** - Wood, Metal, Plastic
4. **Batteries** - Power sources
5. **Sensors** - Distance, touch, light

---

## ⚙️ Physics System

### Unity Physics 2D
- Rigidbody2D for all components
- HingeJoint2D for gear connections
- FixedJoint2D for welded connections
- Physics materials for friction/bounce

### Gear System
```csharp
// Gear connection
HingeJoint2D joint = gear.AddComponent<HingeJoint2D>();
joint.connectedBody = otherGear.GetComponent<Rigidbody2D>();
joint.useMotor = true;

// Calculate gear ratio
float ratio = (float)gear1.toothCount / gear2.toothCount;
```

### Motor System
```csharp
// Motor control
motor.SetSpeed(100f);
motor.SetTorque(10f);
motor.Start();
motor.Stop();
```

---

## 📱 Mobile Optimization

### Touch Controls
- Single tap: Select component
- Drag: Move component
- Pinch: Zoom in/out
- Two-finger pan: Move camera
- Long press: Component menu

### Performance
- Object pooling for components
- Efficient physics calculations
- Texture atlasing
- Batch rendering
- 60 FPS target

### UI/UX
- Large touch targets (44x44 minimum)
- Clear visual feedback
- Smooth animations
- Haptic feedback
- Loading screens

---

## 🎮 Gameplay Features

### Component Placement
1. Select component from palette
2. Tap workspace to place
3. Drag to move
4. Rotate with two fingers
5. Delete with trash button

### Simulation
1. Place components
2. Connect components
3. Press Play ▶️
4. Watch physics simulation
5. Adjust and iterate

### Save/Load
- Auto-save every 60 seconds
- Manual save with name
- Load from workspace list
- Export/import workspaces

---

## 🛠️ Development Guide

### Adding New Components

1. **Create Component Script**
```csharp
public class NewComponent : BaseComponent
{
    public override void Initialize()
    {
        // Setup component
    }
}
```

2. **Create Prefab**
- Create GameObject
- Add Rigidbody2D
- Add Collider2D
- Add Component script
- Save as prefab

3. **Add to Component Library**
- Add to ComponentDatabase.json
- Add sprite
- Configure properties

### Adding New Scenes

1. Create scene in Unity
2. Add to Build Settings
3. Create UI controller script
4. Add scene transition in GameManager

### Testing

1. **Play Mode Testing**
   - Press Play in Unity Editor
   - Test all features
   - Check console for errors

2. **Build Testing**
   - Build for Android/iOS
   - Test on device
   - Check performance

---

## 📊 Performance Targets

- **Frame Rate**: 60 FPS
- **Memory**: <200MB
- **Load Time**: <3 seconds
- **Build Size**: <30MB

---

## 🚀 Build & Deploy

### Android Build

1. **Configure**
   - File → Build Settings → Android
   - Player Settings → Configure

2. **Build**
   - Build Settings → Build
   - Or Build and Run

3. **Deploy**
   - Upload to Google Play Console
   - Follow deployment guide

### iOS Build

1. **Configure**
   - File → Build Settings → iOS
   - Player Settings → Configure

2. **Build**
   - Build Settings → Build
   - Open in Xcode

3. **Deploy**
   - Archive in Xcode
   - Upload to App Store Connect

---

## 📝 TODO List

### Phase 1: Core Systems ✅
- [x] GameManager
- [x] AudioManager
- [x] SaveManager
- [x] SettingsManager

### Phase 2: UI Screens ✅
- [x] MainMenuUI
- [x] SettingsUI
- [ ] GameplayUI
- [ ] ComponentPaletteUI
- [ ] ExamplesUI

### Phase 3: Gameplay
- [ ] Component system
- [ ] Physics integration
- [ ] Placement system
- [ ] Simulation controller
- [ ] Camera controls

### Phase 4: Polish
- [ ] Animations
- [ ] Sound effects
- [ ] Haptic feedback
- [ ] Tutorial system
- [ ] Performance optimization

### Phase 5: Testing
- [ ] Bug fixing
- [ ] Performance testing
- [ ] Android build
- [ ] iOS build
- [ ] Store submission

---

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

---

## 📄 License

[Your License Here]

---

## 🎉 Credits

- Unity Technologies
- TextMeshPro
- [Your Name/Team]

---

**Ready to build amazing machines with Unity!** 🔧⚙️🤖
