# Dead City Escape - Next Steps Guide

**Date**: March 19, 2026  
**Status**: ✅ All .NET tests passing (120/120 — 97 unit + 23 property-based)  
**Unity Version Detected**: 6000.3.11f1 (Unity 6)

## Current Status Summary

### ✅ Completed
- All 120 .NET tests passing (97 unit + 23 property-based)
- Logic layer fully implemented and tested
- Android + WebGL build configuration complete
- Performance optimization implemented
- All game systems implemented (player, AI, combat, escape routes, UI)

### 🔄 Ready for Testing
- Unity project opening
- Unity TestRunner tests
- Android build generation
- Device testing

## Step-by-Step Guide

### Step 1: Open Unity Project

1. **Launch Unity Hub**
   - Open Unity Hub from Start Menu or desktop shortcut

2. **Add Project**
   - Click "Add" button
   - Navigate to: `C:\Users\chira\Documents\visualstudiocode\SideProjects\Android_Games\Dead_City_Escape`
   - Click "Add Project"

3. **Open Project**
   - Select the project in Unity Hub
   - Click to open (first open may take 5-10 minutes to import assets)

### Step 2: Verify Unity Configuration

Once Unity opens:

1. **Check Build Settings**
   - Go to: `File > Build Settings`
   - Verify Platform is set to "Android"
   - If not, select "Android" and click "Switch Platform"

2. **Check Player Settings**
   - In Build Settings, click "Player Settings"
   - Verify:
     - Company Name: (your studio name)
     - Product Name: Dead City Escape
     - Package Name: com.studio.deadcityescape
     - Version: 1.0.0
     - Minimum API Level: Android 8.0 'Oreo' (API level 26)
     - Target API Level: Android 14.0 (API level 34)
     - Scripting Backend: IL2CPP
     - Target Architectures: ARM64 ✓, x86-64 ✓

3. **Check Scenes**
   - Go to: `File > Build Settings`
   - Verify these scenes are in "Scenes In Build":
     - ✓ Assets/Scenes/MainMenu.unity (index 0)
     - ✓ Assets/Scenes/LoadingScreen.unity (index 1)
     - ✓ Assets/Scenes/Game.unity (index 2)

### Step 3: Run Unity Tests (Optional)

1. **Open Test Runner**
   - Go to: `Window > General > Test Runner`

2. **Run EditMode Tests**
   - Click "EditMode" tab
   - Click "Run All"
   - Wait for results

3. **Run PlayMode Tests**
   - Click "PlayMode" tab
   - Click "Run All"
   - Wait for results

**Note**: Some tests may not exist yet (marked as pending in tasks). This is expected.

### Step 4: Test in Unity Editor (Play Mode)

1. **Open Main Menu Scene**
   - In Project window, navigate to: `Assets/Scenes/`
   - Double-click `MainMenu.unity`

2. **Enter Play Mode**
   - Click the Play button (▶) at top center
   - Or press `Ctrl+P`

3. **Test Main Menu**
   - Verify splash animation plays
   - Verify buttons are clickable
   - Try clicking "Play" to see route selection

4. **Test Game Scene**
   - Open `Assets/Scenes/Game.unity`
   - Click Play
   - Test player movement (WASD keys)
   - Test camera look (mouse)
   - Test flashlight (F key)

5. **Exit Play Mode**
   - Click Play button again or press `Ctrl+P`

### Step 5: Build Android AAB

#### Option A: Using Unity Editor Menu

1. **Open Build Script**
   - In Unity, go to: `Assets > Editor > BuildScript.cs`

2. **Run Build**
   - In Unity menu, go to: `Build > Build Android AAB`
   - Wait for build to complete (may take 10-30 minutes first time)
   - Output will be in: `build/Android/DeadCityEscape.aab`

#### Option B: Using Command Line

```bash
# From project root directory
"C:\Program Files\Unity\Hub\Editor\6000.3.11f1\Editor\Unity.exe" -quit -batchmode -projectPath . -executeMethod BuildScript.BuildAndroid -logFile build.log
```

**Build Time**: 10-30 minutes (first build), 5-10 minutes (subsequent builds)

### Step 6: Install on Android Device

#### Prerequisites
- Android device with USB debugging enabled
- ADB (Android Debug Bridge) installed
- Device connected via USB

#### Check Device Connection
```bash
adb devices
```

Should show your device listed.

#### Install AAB (via bundletool)

1. **Download bundletool** (if not installed)
   - Download from: https://github.com/google/bundletool/releases
   - Save as: `bundletool.jar`

2. **Generate APKs from AAB**
```bash
java -jar bundletool.jar build-apks --bundle=build/Android/DeadCityEscape.aab --output=DeadCityEscape.apks --mode=universal
```

3. **Install APKs**
```bash
java -jar bundletool.jar install-apks --apks=DeadCityEscape.apks
```

#### Alternative: Build APK for Testing

For faster testing, build APK instead of AAB:

1. **Modify Build Settings**
   - In Unity: `File > Build Settings`
   - Uncheck "Build App Bundle (Google Play)"
   - Click "Build"
   - Save as: `build/Android/DeadCityEscape.apk`

2. **Install APK**
```bash
adb install build/Android/DeadCityEscape.apk
```

### Step 7: Test on Android Device

1. **Launch App**
   - Find "Dead City Escape" on device
   - Tap to launch

2. **Test Checklist**
   - ✓ App launches within 10 seconds
   - ✓ Splash screen displays
   - ✓ Main menu loads
   - ✓ Touch controls work (virtual joysticks)
   - ✓ Route selection works
   - ✓ Game loads and plays
   - ✓ Player movement works
   - ✓ Combat works (weapons, damage)
   - ✓ Zombies spawn and attack
   - ✓ Escape routes work
   - ✓ Victory/death screens work
   - ✓ Save/load works (pause and resume app)

3. **Performance Testing**
   - Monitor FPS (should be 30+ on Lite, 60+ on Standard)
   - Check for stuttering or lag
   - Verify smooth gameplay

### Step 8: Profile Performance (Optional)

1. **Connect Unity Profiler**
   - Device must be on same network as PC
   - In Unity: `Window > Analysis > Profiler`
   - Click "Attach to Player"
   - Select your Android device

2. **Monitor Metrics**
   - CPU usage
   - GPU usage
   - Memory usage (should be <2GB)
   - Draw calls
   - FPS

3. **Identify Bottlenecks**
   - Look for spikes in CPU/GPU
   - Check memory allocations
   - Verify draw call batching

## Troubleshooting

### Unity Won't Open Project
- **Solution**: Check Unity version is 6.x (6000.x.x)
- **Solution**: Delete `Library/` folder and reopen project

### Build Fails
- **Error**: "Android SDK not found"
  - **Solution**: Install Android SDK via Unity Hub > Installs > Add Modules
- **Error**: "NDK not found"
  - **Solution**: Install Android NDK via Unity Hub > Installs > Add Modules
- **Error**: "IL2CPP build failed"
  - **Solution**: Check `Assets/link.xml` exists
  - **Solution**: Verify IL2CPP is installed via Unity Hub

### App Crashes on Launch
- **Check**: Logcat for error messages
  ```bash
  adb logcat | grep Unity
  ```
- **Common Issues**:
  - Missing permissions in AndroidManifest.xml
  - IL2CPP stripping too aggressive (check link.xml)
  - Incompatible device (check API level 26+)

### Performance Issues
- **Low FPS**: Switch to Lite quality tier in settings
- **High Memory**: Check for memory leaks in Profiler
- **Stuttering**: Verify zone streaming is working correctly

### Touch Controls Not Working
- **Check**: `Application.isMobilePlatform` is true on device
- **Check**: MobileJoystick GameObjects are active
- **Check**: Input System package is installed

## Security Review Checklist

Before production deployment, review these areas:

### 1. RecipeCache Security
- [ ] Validate file paths to prevent directory traversal
- [ ] Sanitize recipe keys before using as filenames
- [ ] Enforce disk cap to prevent storage exhaustion
- [ ] Handle corrupted cache files gracefully

**File**: `Assets/Scripts/ProceduralArt/RecipeCache.cs`

### 2. SaveSystem Security
- [ ] Validate JSON before deserialization
- [ ] Handle corrupted save files gracefully
- [ ] Prevent save file injection attacks
- [ ] Encrypt sensitive data (if any)

**File**: `Assets/Scripts/Core/SaveSystem.cs`

### 3. Input Validation
- [ ] Validate all user input (text fields, sliders)
- [ ] Prevent injection in player name/seed input
- [ ] Sanitize clipboard data (seed copy/paste)

**Files**: `Assets/Scripts/UI/*.cs`

### 4. Network Security (if applicable)
- [ ] Use HTTPS for any web requests
- [ ] Validate server responses
- [ ] Implement certificate pinning

**Note**: Current implementation is offline-only, no network code.

## Performance Targets

Verify these targets on test device:

| Metric | Target | How to Measure |
|--------|--------|----------------|
| FPS | 30 min (Lite), 60 (Standard) | Unity Profiler or on-screen FPS counter |
| RAM | <2GB peak | Unity Profiler > Memory |
| Launch Time | <10s to main menu | Stopwatch from tap to menu |
| Download Size | <100MB | Check AAB file size |
| Draw Calls | <500 (Lite), <1000 (Standard) | Unity Profiler > Rendering |

## Documentation Updates

After testing, update these files:

1. **README.md**
   - Update "Current Status" with test results
   - Add device compatibility list
   - Update performance metrics with actual results

2. **DEPLOYMENT_CHECKLIST.md**
   - Check off completed items
   - Add any new issues found
   - Document workarounds

3. **TEST_RESULTS.md**
   - Add Unity test results
   - Add device test results
   - Add performance profiling results

## Play Store Submission (Future)

When ready for production:

1. **Prepare Store Assets**
   - App icon (512×512 PNG)
   - Feature graphic (1024×500 PNG)
   - Screenshots (phone + tablet)
   - Promotional video (optional)

2. **Create Play Console Account**
   - Go to: https://play.google.com/console
   - Pay $25 one-time registration fee

3. **Create App Listing**
   - Upload AAB
   - Fill in store listing details
   - Set pricing (free/paid)
   - Choose content rating
   - Submit for review

4. **Internal Testing Track**
   - Start with internal testing (up to 100 testers)
   - Fix any issues found
   - Graduate to closed alpha/beta
   - Finally release to production

## Support

If you encounter issues:

1. **Check Logs**
   - Unity Editor: `Console` window
   - Android Device: `adb logcat`
   - Build Logs: `build.log` file

2. **Common Resources**
   - Unity Documentation: https://docs.unity3d.com/
   - Android Developer Docs: https://developer.android.com/
   - Unity Forums: https://forum.unity.com/

3. **Project Documentation**
   - Game Design: `game1_dead_city_escape.md`
   - Requirements: `.kiro/specs/dead-city-escape-mobile-overhaul/requirements.md`
   - Design: `.kiro/specs/dead-city-escape-mobile-overhaul/design.md`
   - Tasks: `.kiro/specs/dead-city-escape-mobile-overhaul/tasks.md`

## Summary

You're now ready to:
1. ✅ Open Unity project
2. ✅ Run tests in Unity
3. ✅ Build Android AAB/APK
4. ✅ Install on device
5. ✅ Test gameplay
6. ✅ Profile performance
7. ✅ Fix any issues found
8. ✅ Prepare for deployment

Good luck with your testing! 🎮
