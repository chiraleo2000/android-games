# Android Build Configuration Summary

This document summarizes the Android build configuration for Dead City Escape mobile game.

## Configuration Overview

All Android build settings have been configured according to the specification requirements (Requirement 14.4).

### 1. Player Settings (ProjectSettings/ProjectSettings.asset)

**Package Configuration:**
- Package Name: `com.studio.deadcityescape`
- Version: `1.0.0`
- Bundle Version Code: `1`

**SDK Configuration:**
- Minimum API Level: `25` (AndroidMinSdkVersion in ProjectSettings; not below 22)
- Target API Level: `36`

**Scripting Configuration:**
- Scripting Backend: `IL2CPP` (scriptingBackend: 1)
- Target Architectures: `ARM64` only (AndroidTargetArchitectures: 2)
- Managed Stripping Level: `Minimal` (managedStrippingLevel: 1)

**Input Configuration:**
- Active Input Handling: `Input System Package (New)` (activeInputHandler: 2)

### 2. Build Settings

**App Bundle Configuration:**
- Build App Bundle (AAB): `true` (AndroidBuildType: 1)
- Split APKs by ABI: `true` (AndroidBuildApkPerCpuArchitecture: 1)

**Optimization:**
- Minify (Release): `Proguard` (AndroidMinifyRelease: 1)
- Minify (Debug): `false` (AndroidMinifyDebug: 0)
- Compression: `LZ4HC` (configured via Unity's default compression)
- Create Symbols: `true` (AndroidCreateSymbols: 1)

### 3. Gradle Templates (Assets/Plugins/Android/mainTemplate.gradle)

**Custom Gradle Configuration:**
- Custom main Gradle template enabled
- NDK ABI Filters: `arm64-v8a`
- Packaging options exclude: `armeabi-v7a`, `armeabi`
- Dependencies: `androidx.core:core:1.12.0`

**Key Features:**
```gradle
ndk {
    abiFilters 'arm64-v8a'
}

packagingOptions {
    exclude 'lib/armeabi-v7a/**'
    exclude 'lib/armeabi/**'
    exclude 'lib/x86_64/**'
    jniLibs { useLegacyPackaging false }
    doNotStrip '*/arm64-v8a/*.so'
}
```

### 4. IL2CPP and Code Stripping (Assets/link.xml)

**Preserved Assemblies:**
- `DeadCityEscape.Logic` - Core game logic
- `DeadCityEscape.Runtime` - Unity runtime components
- `System`, `System.Core` - System assemblies
- `System.Runtime.Serialization`, `System.Xml` - Serialization support
- Unity engine modules (Core, Physics, AI, Audio, Animation, UI, Input)
- `Unity.InputSystem` - New Input System
- URP assemblies (Universal.Runtime, Core.Runtime)

**Stripping Level:**
- Minimal stripping to preserve reflection and serialization

### 5. Build Script (Assets/Editor/BuildScript.cs)

**Build Automation:**
- Menu item: `Build/Build Android AAB`
- Output path: `build/Android/DeadCityEscape.aab`
- Included scenes:
  1. `Assets/Scenes/MainMenu.unity`
  2. `Assets/Scenes/LoadingScreen.unity`
  3. `Assets/Scenes/Game.unity`

**Additional Features:**
- Test APK build option: `Build/Build Android APK (Test)`
- Automatic build directory creation
- Scene validation before build
- Detailed build logging (size, time, result)

## Usage Instructions

### Building from Unity Editor

1. Open Unity Editor
2. Go to menu: `Build > Build Android AAB`
3. Wait for build to complete
4. Find output at: `build/Android/DeadCityEscape.aab`

### Building from Command Line

```bash
# Build AAB
Unity.exe -quit -batchmode -projectPath . -executeMethod BuildScript.BuildAndroid

# Build APK (for testing)
Unity.exe -quit -batchmode -projectPath . -executeMethod BuildScript.BuildAndroidAPK
```

### Testing the Build

1. **Install on device:**
   ```bash
   adb install build/Android/DeadCityEscape.apk
   ```

2. **Install AAB via bundletool:**
   ```bash
   bundletool build-apks --bundle=build/Android/DeadCityEscape.aab --output=DeadCityEscape.apks
   bundletool install-apks --apks=DeadCityEscape.apks
   ```

## Performance Targets

The build is configured to meet these performance requirements:

- **Download Size:** <100 MB (Requirement 14.4)
- **Target FPS:** 30 FPS minimum on 4GB RAM devices (Requirement 14.1)
- **Peak RAM:** <2 GB (Requirement 14.2)
- **Launch Time:** <10 seconds to main menu (Requirement 14.3)

## Architecture Support

**Included:**
- ARM64 (arm64-v8a) - The only ABI in the Play App Bundle

**Excluded:**
- ARMv7 (armeabi-v7a) - Legacy 32-bit ARM
- x86_64 - Emulator ABI, not shipped in this bundle
- ARMv5/v6 (armeabi) - Very old devices

This configuration ensures optimal performance on modern devices while keeping the APK size minimal.

## Next Steps

1. **Build the AAB:** Use the Build menu or command line
2. **Test on device:** Install and verify functionality
3. **Profile performance:** Check FPS, RAM, and launch time
4. **Upload to Play Store:** Use the generated AAB file

## Troubleshooting

### Build Fails

- Verify all three scenes exist in `Assets/Scenes/`
- Check Unity console for specific errors
- Ensure Android SDK and NDK are properly installed

### APK Too Large

- Check texture compression (should be ASTC)
- Verify procedural generation is working (no large assets)
- Review included libraries and dependencies

### Performance Issues

- Test on target device (4GB RAM, Adreno 640 equivalent)
- Profile with Unity Profiler
- Check quality settings (Lite vs Standard)
- Verify ObjectPool and zone streaming are working

## References

- Specification: `.kiro/specs/dead-city-escape-mobile-overhaul/requirements.md`
- Design Document: `.kiro/specs/dead-city-escape-mobile-overhaul/design.md`
- Task List: `.kiro/specs/dead-city-escape-mobile-overhaul/tasks.md`
