# 🚀 Quick Start Guide - Unity Edition

## Get Started in 30 Minutes!

---

## ✅ Prerequisites

- **Unity Hub** installed
- **Unity 2022.3 LTS** installed
- **Visual Studio 2022** or **Rider** installed

---

## 📋 Step-by-Step Setup

### 1. Open Project (2 minutes)

```
1. Open Unity Hub
2. Click "Add" button
3. Navigate to "Unity_InventorsWorkshop" folder
4. Click "Select Folder"
5. Click on project to open
6. Wait for Unity to import (1-2 minutes)
```

### 2. Create Main Menu Scene (5 minutes)

```
1. File → New Scene → 2D
2. Save as: Assets/Scenes/MainMenu.unity

3. Create GameManager:
   - GameObject → Create Empty
   - Name: "GameManager"
   - Add Component → GameManager.cs
   - Add Component → AudioManager.cs
   - Add Component → SaveManager.cs
   - Add Component → SettingsManager.cs

4. Create UI:
   - GameObject → UI → Canvas
   - Name: "MainMenuCanvas"
   - Add Component → MainMenuUI.cs

5. Create Buttons:
   - Right-click Canvas → UI → Button - TextMeshPro
   - Name: "PlayButton"
   - Repeat for: ExamplesButton, SettingsButton, TutorialButton, ExitButton

6. Link Buttons:
   - Select MainMenuCanvas
   - In Inspector, drag buttons to MainMenuUI script fields
   - Click "Apply"

7. Save Scene: Ctrl+S (Windows) or Cmd+S (Mac)
```

### 3. Create Settings Scene (5 minutes)

```
1. File → New Scene → 2D
2. Save as: Assets/Scenes/Settings.unity

3. Create UI:
   - GameObject → UI → Canvas
   - Name: "SettingsCanvas"
   - Add Component → SettingsUI.cs

4. Create Controls:
   - Right-click Canvas → UI → Slider (for volume)
   - Right-click Canvas → UI → Toggle (for haptics)
   - Right-click Canvas → UI → Dropdown - TextMeshPro (for language)
   - Right-click Canvas → UI → Button - TextMeshPro (Save, Cancel, Reset)

5. Link Controls:
   - Select SettingsCanvas
   - Drag controls to SettingsUI script fields
   - Click "Apply"

6. Save Scene: Ctrl+S
```

### 4. Create Gameplay Scene (10 minutes)

```
1. File → New Scene → 2D
2. Save as: Assets/Scenes/Gameplay.unity

3. Create WorkspaceManager:
   - GameObject → Create Empty
   - Name: "WorkspaceManager"
   - Add Component → WorkspaceManager.cs

4. Create UI:
   - GameObject → UI → Canvas
   - Name: "GameplayCanvas"
   - Add Component → GameplayUI.cs

5. Create Component Palette:
   - Right-click Canvas → UI → Panel
   - Name: "ComponentPalette"
   - Add: Vertical Layout Group

6. Create Control Panel:
   - Right-click Canvas → UI → Panel
   - Name: "ControlPanel"
   - Add buttons: Play, Pause, Stop, Save, Load, Clear

7. Create Status Bar:
   - Right-click Canvas → UI → Panel
   - Name: "StatusBar"
   - Add TextMeshPro texts for: Entity Count, FPS, Status

8. Link Everything:
   - Select GameplayCanvas
   - Drag panels and buttons to GameplayUI script fields
   - Click "Apply"

9. Save Scene: Ctrl+S
```

### 5. Configure Build Settings (3 minutes)

```
1. File → Build Settings

2. Add Scenes:
   - Click "Add Open Scenes" (with MainMenu open)
   - Open Settings scene, click "Add Open Scenes"
   - Open Gameplay scene, click "Add Open Scenes"

3. Select Platform:
   - Click "Android" or "iOS"
   - Click "Switch Platform"
   - Wait for import (2-3 minutes)

4. Player Settings:
   - Click "Player Settings"
   - Company Name: "Your Company"
   - Product Name: "Inventor's Workshop"
   - Package Name: "com.yourcompany.inventorsworkshop"
   - Version: "1.0.0"

5. Close Build Settings
```

### 6. Test the Game (5 minutes)

```
1. Open MainMenu scene

2. Press Play ▶️

3. Test:
   - Click Play button → Should load Gameplay scene
   - Click Settings button → Should load Settings scene
   - Check console for errors

4. If errors:
   - Check all script fields are linked
   - Check GameManager exists in scene
   - Check scenes are in Build Settings

5. Stop Play mode
```

---

## 🎨 Quick UI Styling (Optional)

### Make Buttons Look Good

```
1. Select a button
2. In Inspector:
   - Image → Color: #667eea (purple)
   - Text → Font Size: 24
   - Text → Color: White
   - Text → Alignment: Center

3. Add Button Transition:
   - Button → Transition: Color Tint
   - Highlighted Color: #5a67d8
   - Pressed Color: #4c51bf

4. Copy component values to other buttons
```

### Style the Canvas

```
1. Select Canvas
2. Canvas Scaler:
   - UI Scale Mode: Scale With Screen Size
   - Reference Resolution: 1920x1080
   - Match: 0.5 (balance width/height)

3. Add Background:
   - Right-click Canvas → UI → Image
   - Move to top of hierarchy
   - Anchor: Stretch (all sides)
   - Color: Gradient purple (#667eea to #764ba2)
```

---

## 🔧 Create First Component Prefab

### Make a Gear Prefab (5 minutes)

```
1. Create Gear GameObject:
   - GameObject → 2D Object → Sprites → Circle
   - Name: "Gear_16T"

2. Add Components:
   - Add Component → Rigidbody 2D
   - Add Component → Circle Collider 2D
   - Add Component → Gear.cs

3. Configure:
   - Rigidbody 2D:
     - Body Type: Dynamic
     - Mass: 1
     - Gravity Scale: 1
   
   - Circle Collider 2D:
     - Radius: 0.5
   
   - Gear Script:
     - Tooth Count: 16
     - Radius: 0.5

4. Create Prefab:
   - Create folder: Assets/Prefabs/Components
   - Drag Gear_16T from Hierarchy to Prefabs folder
   - Delete from Hierarchy

5. Test:
   - Open Gameplay scene
   - Select WorkspaceManager
   - Drag Gear_16T prefab to "Gear Prefab" field
   - Press Play
   - Try placing a gear
```

---

## 🎮 Test Gameplay

### Place Your First Component

```
1. Open Gameplay scene
2. Press Play ▶️
3. Click a component in palette
4. Click in workspace to place
5. Drag component to move
6. Click Play button to start simulation
7. Watch it work!
```

---

## 🐛 Common Issues & Fixes

### Issue: "GameManager not found"
```
Solution:
1. Make sure GameManager GameObject exists in scene
2. Make sure GameManager.cs is attached
3. Make sure it's not disabled
```

### Issue: "Buttons don't work"
```
Solution:
1. Check EventSystem exists (should auto-create with Canvas)
2. Check buttons are linked in UI script Inspector
3. Check button onClick events are set up
```

### Issue: "Scripts won't compile"
```
Solution:
1. Check for syntax errors (red underlines)
2. Make sure all using statements are present
3. Window → General → Console to see errors
4. Fix errors one by one
```

### Issue: "Components won't place"
```
Solution:
1. Check WorkspaceManager exists in scene
2. Check prefabs are assigned in Inspector
3. Check component layer is set correctly
4. Check workspace bounds in Scene view
```

---

## 📱 Build for Android (Quick Test)

```
1. File → Build Settings
2. Platform → Android
3. Click "Build and Run"
4. Choose save location
5. Wait for build (5-10 minutes)
6. App launches on connected device/emulator
```

---

## ✅ Checklist

- [ ] Unity project opened
- [ ] MainMenu scene created
- [ ] Settings scene created
- [ ] Gameplay scene created
- [ ] Scenes added to Build Settings
- [ ] GameManager set up
- [ ] UI linked to scripts
- [ ] At least one component prefab created
- [ ] Game tested in Play mode
- [ ] No console errors

---

## 🎉 You're Ready!

**Congratulations!** You now have a working Unity game!

### Next Steps:
1. Create more component prefabs (gears, motors, blocks)
2. Add sprites and visuals
3. Implement touch controls
4. Add sound effects and music
5. Create example mechanisms
6. Polish UI/UX
7. Build for mobile
8. Publish to stores!

---

## 💡 Pro Tips

1. **Save Often** - Ctrl+S after every change
2. **Test Frequently** - Press Play often to catch errors early
3. **Use Prefabs** - Make everything a prefab for easy reuse
4. **Check Console** - Always check for warnings/errors
5. **Version Control** - Use Git to track changes
6. **Backup** - Keep backups of working versions

---

## 📚 Need Help?

- **Unity Manual**: https://docs.unity3d.com/Manual/
- **Unity Scripting API**: https://docs.unity3d.com/ScriptReference/
- **Unity Learn**: https://learn.unity.com/
- **Unity Forums**: https://forum.unity.com/

---

**Happy Building!** 🔧⚙️🤖
