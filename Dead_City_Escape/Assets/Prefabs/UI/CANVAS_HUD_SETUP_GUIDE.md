# Canvas_HUD Prefab Setup Guide

## Overview

This guide provides step-by-step instructions for creating the **Canvas_HUD** prefab in Unity Editor. The Canvas_HUD is the main in-game heads-up display for Dead City Escape, showing health, ammo, objectives, timer, crosshair, notifications, vignette overlay, and mobile joysticks.

**Requirements Implemented:** 13.1–13.7

---

## Canvas Root Setup

### 1. Create Canvas GameObject

1. In Unity Hierarchy, right-click → **UI → Canvas**
2. Rename to `Canvas_HUD`
3. Set **Render Mode** to `Screen Space - Overlay`
4. Add **Canvas Scaler** component with these settings:
   - **UI Scale Mode:** `Scale With Screen Size`
   - **Reference Resolution:** `1080 x 1920` (portrait mobile)
   - **Screen Match Mode:** `Match Width Or Height`
   - **Match:** `0.5` (balanced)
5. Add **Graphic Raycaster** component (should be added automatically)

### 2. Add SafeAreaPanel Component

1. Select `Canvas_HUD` GameObject
2. Add Component → **SafeAreaPanel** script
3. This ensures the HUD respects device notches and safe areas

### 3. Add HUDController Component

1. Select `Canvas_HUD` GameObject
2. Add Component → **HUDController** script
3. Leave all serialized fields empty for now (we'll assign them after creating child UI elements)

---

## Child UI Elements

### 4. Health Bar (Top-Left)

Create the health display:

1. Right-click `Canvas_HUD` → **UI → Panel**
2. Rename to `HealthPanel`
3. **RectTransform Settings:**
   - **Anchors:** Min (0, 1), Max (0, 1) — top-left anchor
   - **Pivot:** (0, 1)
   - **Anchor Position:** X: 20, Y: -20
   - **Size Delta:** Width: 250, Height: 60
4. Remove **Image** component (or set alpha to 0 for background)

**Health Bar Slider:**
1. Right-click `HealthPanel` → **UI → Slider**
2. Rename to `HealthBar`
3. **RectTransform:** Stretch to fill parent (Anchors: 0,0 to 1,1, Offsets: all 0)
4. **Slider Component:**
   - **Min Value:** 0
   - **Max Value:** 1
   - **Whole Numbers:** false
   - **Interactable:** false
5. Select `HealthBar/Fill Area/Fill` child
   - Set **Image Color** to green `(0, 1, 0, 1)`
   - This will be dynamically colored by HUDController

**Health Text:**
1. Right-click `HealthPanel` → **UI → Text - TextMeshPro**
2. Rename to `HealthText`
3. **RectTransform:** Stretch to fill parent
4. **TextMeshProUGUI Settings:**
   - **Text:** "100/100"
   - **Font Size:** 24
   - **Alignment:** Center + Middle
   - **Color:** White
   - **Font Style:** Bold

### 5. Ammo Display (Top-Right)

1. Right-click `Canvas_HUD` → **UI → Panel**
2. Rename to `AmmoPanel`
3. **RectTransform Settings:**
   - **Anchors:** Min (1, 1), Max (1, 1) — top-right anchor
   - **Pivot:** (1, 1)
   - **Anchor Position:** X: -20, Y: -20
   - **Size Delta:** Width: 150, Height: 60
4. Remove **Image** component or set alpha to 0

**Ammo Text:**
1. Right-click `AmmoPanel` → **UI → Text - TextMeshPro**
2. Rename to `AmmoText`
3. **RectTransform:** Stretch to fill parent
4. **TextMeshProUGUI Settings:**
   - **Text:** "12/30"
   - **Font Size:** 32
   - **Alignment:** Right + Middle
   - **Color:** White
   - **Font Style:** Bold

### 6. Objective Display (Top-Center)

1. Right-click `Canvas_HUD` → **UI → Panel**
2. Rename to `ObjectivePanel`
3. **RectTransform Settings:**
   - **Anchors:** Min (0.5, 1), Max (0.5, 1) — top-center anchor
   - **Pivot:** (0.5, 1)
   - **Anchor Position:** X: 0, Y: -100
   - **Size Delta:** Width: 400, Height: 80

**Objective Text:**
1. Right-click `ObjectivePanel` → **UI → Text - TextMeshPro**
2. Rename to `ObjectiveText`
3. **RectTransform:**
   - **Anchors:** Stretch horizontal, top
   - **Anchor Position:** Y: -10
   - **Size Delta:** Height: 40
4. **TextMeshProUGUI Settings:**
   - **Text:** "Collect Fuel Cans: 3/5"
   - **Font Size:** 20
   - **Alignment:** Center + Top
   - **Color:** Yellow `(1, 1, 0, 1)`

**Objective Progress Bar:**
1. Right-click `ObjectivePanel` → **UI → Slider**
2. Rename to `ObjectiveProgressBar`
3. **RectTransform:**
   - **Anchors:** Stretch horizontal, bottom
   - **Anchor Position:** Y: 10
   - **Size Delta:** Height: 20
4. **Slider Component:**
   - **Min Value:** 0
   - **Max Value:** 1
   - **Interactable:** false

### 7. Run Timer (Top-Center, Below Objective)

1. Right-click `Canvas_HUD` → **UI → Text - TextMeshPro**
2. Rename to `RunTimerText`
3. **RectTransform Settings:**
   - **Anchors:** Min (0.5, 1), Max (0.5, 1) — top-center anchor
   - **Pivot:** (0.5, 1)
   - **Anchor Position:** X: 0, Y: -200
   - **Size Delta:** Width: 150, Height: 50
4. **TextMeshProUGUI Settings:**
   - **Text:** "00:00"
   - **Font Size:** 28
   - **Alignment:** Center + Middle
   - **Color:** White
   - **Font Style:** Bold

### 8. Crosshair (Screen Center)

1. Right-click `Canvas_HUD` → **UI → Image**
2. Rename to `Crosshair`
3. **RectTransform Settings:**
   - **Anchors:** Min (0.5, 0.5), Max (0.5, 0.5) — center anchor
   - **Pivot:** (0.5, 0.5)
   - **Anchor Position:** X: 0, Y: 0
   - **Size Delta:** Width: 32, Height: 32
4. **Image Component:**
   - **Color:** White with 70% alpha `(1, 1, 1, 0.7)`
   - **Sprite:** Use a simple crosshair sprite (create a white circle or cross texture)
   - If no sprite available, use **UI → Raw Image** and set to white

**Note:** For a simple crosshair, you can create a 32x32 white texture with a cross pattern in the center.

### 9. Notification Area (Bottom-Center)

1. Right-click `Canvas_HUD` → **UI → Panel**
2. Rename to `NotificationArea`
3. **RectTransform Settings:**
   - **Anchors:** Min (0.5, 0), Max (0.5, 0) — bottom-center anchor
   - **Pivot:** (0.5, 0)
   - **Anchor Position:** X: 0, Y: 150
   - **Size Delta:** Width: 600, Height: 100
4. Add **Canvas Group** component:
   - **Alpha:** 0 (will be controlled by HUDController)
   - **Interactable:** false
   - **Block Raycasts:** false

**Notification Text:**
1. Right-click `NotificationArea` → **UI → Text - TextMeshPro**
2. Rename to `NotificationText`
3. **RectTransform:** Stretch to fill parent
4. **TextMeshProUGUI Settings:**
   - **Text:** "Objective Complete!"
   - **Font Size:** 24
   - **Alignment:** Center + Middle
   - **Color:** Yellow `(1, 1, 0, 1)`
   - **Font Style:** Bold

### 10. Vignette Overlay (Full Screen)

1. Right-click `Canvas_HUD` → **UI → Image**
2. Rename to `VignetteOverlay`
3. **RectTransform Settings:**
   - **Anchors:** Stretch (Min: 0,0, Max: 1,1)
   - **Offsets:** All 0 (fills entire screen)
4. **Image Component:**
   - **Color:** Red with 50% alpha `(1, 0, 0, 0.5)` — will be controlled by HUDController
   - **Sprite:** Use a radial gradient sprite (dark edges, transparent center)
   - **Raycast Target:** false (so it doesn't block input)
5. Move this GameObject to the **top** of the hierarchy (so it renders last, on top)

**Note:** If you don't have a vignette sprite, you can:
- Create a 512x512 texture with a radial gradient (transparent center, black edges)
- Or use a simple full-screen image and rely on the alpha value

### 11. Mobile Joystick - Left (Movement)

1. Right-click `Canvas_HUD` → **UI → Image**
2. Rename to `MobileJoystick_Left`
3. **RectTransform Settings:**
   - **Anchors:** Min (0, 0), Max (0, 0) — bottom-left anchor
   - **Pivot:** (0.5, 0.5)
   - **Anchor Position:** X: 150, Y: 150
   - **Size Delta:** Width: 200, Height: 200
4. **Image Component:**
   - **Color:** White with 30% alpha `(1, 1, 1, 0.3)`
   - **Sprite:** Circular background sprite
5. Add **Canvas Group** component:
   - **Alpha:** 0.3 (idle state)
6. Add **MobileJoystick** component:
   - **Is Movement Joystick:** true
   - **Dead Zone:** 0.1
   - **Handle Range:** 50
   - **Floating:** true
   - **Idle Alpha:** 0.3
   - **Active Alpha:** 0.7

**Joystick Handle:**
1. Right-click `MobileJoystick_Left` → **UI → Image**
2. Rename to `Handle`
3. **RectTransform Settings:**
   - **Anchors:** Center (0.5, 0.5)
   - **Pivot:** (0.5, 0.5)
   - **Anchor Position:** X: 0, Y: 0
   - **Size Delta:** Width: 80, Height: 80
4. **Image Component:**
   - **Color:** White with 70% alpha `(1, 1, 1, 0.7)`
   - **Sprite:** Smaller circular sprite

**Assign References in MobileJoystick Component:**
- **Background:** Drag `MobileJoystick_Left` itself
- **Handle:** Drag the `Handle` child
- **Canvas Group:** Drag the Canvas Group component

### 12. Mobile Joystick - Right (Camera Look)

1. Duplicate `MobileJoystick_Left`
2. Rename to `MobileJoystick_Right`
3. **RectTransform Settings:**
   - **Anchors:** Min (1, 0), Max (1, 0) — bottom-right anchor
   - **Pivot:** (0.5, 0.5)
   - **Anchor Position:** X: -150, Y: 150
   - **Size Delta:** Width: 200, Height: 200
4. Select the **MobileJoystick** component:
   - **Is Movement Joystick:** false (this is for camera look)
   - Keep all other settings the same

---

## Wire Up HUDController References

Now that all UI elements are created, assign them to the HUDController:

1. Select `Canvas_HUD` GameObject
2. In the **HUDController** component, assign the following:

**Health:**
- **Health Bar:** Drag `HealthPanel/HealthBar` slider
- **Health Fill:** Drag `HealthPanel/HealthBar/Fill Area/Fill` image
- **Health Text:** Drag `HealthPanel/HealthText`

**Ammo:**
- **Ammo Text:** Drag `AmmoPanel/AmmoText`
- **Ammo Panel:** Drag `AmmoPanel` GameObject

**Objective:**
- **Objective Text:** Drag `ObjectivePanel/ObjectiveText`
- **Objective Progress Bar:** Drag `ObjectivePanel/ObjectiveProgressBar`

**Crosshair:**
- **Crosshair:** Drag `Crosshair` image

**Notifications:**
- **Notification Group:** Drag `NotificationArea` Canvas Group component
- **Notification Text:** Drag `NotificationArea/NotificationText`

**Run Timer:**
- **Run Timer Text:** Drag `RunTimerText`

**Vignette:**
- **Vignette Overlay:** Drag `VignetteOverlay` image
- **Vignette Color:** Set to red `(1, 0, 0, 0.5)` in the inspector

**Weather (Lite Mode):**
- **Weather Particles:** Leave empty for now (add particle systems if weather effects are implemented)

---

## Create Prefab

1. Drag the `Canvas_HUD` GameObject from Hierarchy into `Assets/Prefabs/UI/` folder
2. This creates the prefab
3. You can now delete the instance from the Hierarchy if you're not in the Game scene
4. The prefab will be instantiated in the **Game.unity** scene

---

## Testing in Game Scene

1. Open `Assets/Scenes/Game.unity`
2. If `Canvas_HUD` doesn't exist, drag the prefab from `Assets/Prefabs/UI/Canvas_HUD.prefab` into the scene
3. Ensure the following components are present in the scene:
   - **GameManager** (singleton)
   - **PlayerHealth** (on Player GameObject)
   - **EscapeRouteManager**
   - **WeaponBase** (on active weapon)
4. Enter Play Mode
5. Verify:
   - Health bar updates when player takes damage
   - Ammo display shows current weapon ammo
   - Objective text displays active escape route objective
   - Run timer counts up in MM:SS format
   - Crosshair is visible at screen center
   - Notifications appear and fade after 3 seconds
   - Vignette overlay increases when health drops below 50%
   - Mobile joysticks are visible on mobile devices (or when `Application.isMobilePlatform` is true)

---

## Visual Customization

### Colors

You can customize the HUD colors to match your game's aesthetic:

- **Health Bar:** Green → Yellow → Red gradient (handled by HUDController)
- **Ammo Text:** White (or yellow for low ammo warning)
- **Objective Text:** Yellow
- **Timer Text:** White
- **Crosshair:** White with 70% alpha
- **Notification Text:** Yellow
- **Vignette:** Red with dynamic alpha

### Fonts

Replace the default TextMeshPro font with a custom font:

1. Import your font file into Unity
2. Create a TextMeshPro Font Asset: **Window → TextMeshPro → Font Asset Creator**
3. Assign the font asset to all TextMeshProUGUI components

### Sprites

For a more polished look, create custom sprites:

- **Joystick Background:** Circular gradient (dark center, lighter edges)
- **Joystick Handle:** Solid circle with slight glow
- **Crosshair:** Cross, dot, or custom reticle design
- **Vignette:** Radial gradient texture (transparent center, dark edges)
- **Health Bar Background:** Subtle border or frame
- **Panel Backgrounds:** Semi-transparent dark panels with rounded corners

---

## Mobile-Specific Considerations

### Safe Area Handling

The **SafeAreaPanel** component automatically adjusts the canvas to respect device safe areas (notches, home indicators). No additional setup required.

### Joystick Visibility

The **MobileJoystick** components automatically show/hide based on `Application.isMobilePlatform`. To test on desktop:

1. Temporarily set `gameObject.SetActive(true)` in `MobileJoystick.Start()`
2. Or build to Android/iOS device for proper testing

### Touch Sensitivity

Touch sensitivity is controlled by the **InputManager** and can be adjusted in the Settings menu (saved in SaveSystem).

---

## Performance Optimization (Lite Mode)

The HUDController implements Requirement 13.9:

- **Weather Particles:** Hidden when `QualityLevel == 0` (Lite Mode)
- **Update Rate:** Reduced to every 2 frames in Lite Mode (from every frame)

To test Lite Mode:
1. Set `SaveSystem.Data.QualityLevel = 0`
2. Restart the scene
3. Verify HUD updates every 2 frames instead of every frame

---

## Troubleshooting

### Health Bar Not Updating
- Ensure `PlayerHealth` component exists in the scene
- Verify `HUDController` has subscribed to `PlayerHealth.OnHealthChanged` event
- Check that `_healthBar` and `_healthText` are assigned in the inspector

### Ammo Display Not Showing
- Ensure a `RangedWeapon` component exists in the scene
- Verify `HUDController.UpdateWeaponReference()` finds the weapon
- Check that `_ammoText` and `_ammoPanel` are assigned

### Objective Not Displaying
- Ensure `EscapeRouteManager` exists in the scene
- Verify an escape route has been activated
- Check that `_objectiveText` is assigned

### Joysticks Not Responding
- Verify `InputManager` singleton exists
- Check that `MobileJoystick` components have `_background` and `_handle` assigned
- Ensure `Canvas` has a **Graphic Raycaster** component
- Verify `EventSystem` exists in the scene

### Vignette Not Appearing
- Check that `_vignetteOverlay` is assigned
- Verify player health is below 50%
- Ensure the vignette image is at the top of the hierarchy (renders last)

---

## Summary

You have now created a complete Canvas_HUD prefab with:

✅ Health bar with numeric display (Requirement 13.1)  
✅ Ammo display for active weapon (Requirement 13.2)  
✅ Objective description and progress (Requirement 13.3)  
✅ Crosshair at screen center (Requirement 13.4)  
✅ Notification messages with 3-second fade (Requirement 13.5)  
✅ Run timer in MM:SS format (Requirement 13.6)  
✅ Mobile joysticks for touch input (Requirement 13.7)  
✅ Red vignette overlay for low health (Requirement 18.7)  
✅ Safe area handling for notched devices  
✅ Lite mode performance optimizations (Requirement 13.9)

The HUD is now ready for integration into the Game scene and will automatically connect to gameplay systems at runtime.
