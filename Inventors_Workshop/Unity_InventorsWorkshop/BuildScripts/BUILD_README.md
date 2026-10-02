# 🚀 Build Automation Scripts - User Guide

## 📋 Overview

This folder contains automated build and deployment scripts for Inventor's Workshop Unity project.

---

## 📁 Files Included

1. **BuildAndroid.ps1** - Automated Android build script
2. **BuildiOS.ps1** - Automated iOS build script  
3. **DeployToGooglePlay.ps1** - Google Play deployment helper
4. **BuildScript.cs** - Unity Editor build script (in Assets/Scripts/Editor/)
5. **BUILD_README.md** - This file

---

## 🚀 Quick Start

### Build for Android (Release)
```powershell
.\BuildAndroid.ps1 -BuildType Release -Version 1.0.0
```

### Build for Android (Debug)
```powershell
.\BuildAndroid.ps1 -BuildType Debug -Version 1.0.0
```

### Build for iOS
```powershell
.\BuildiOS.ps1 -Version 1.0.0
```

### Deploy to Google Play
```powershell
.\DeployToGooglePlay.ps1
```

---

## 📖 Detailed Usage

### BuildAndroid.ps1

**Purpose**: Automates the Android build process

**Parameters**:
- `-BuildType` - Release or Debug (default: Release)
- `-Version` - Version number (default: 1.0.0)
- `-AutoIncrement` - Auto-increment build number
- `-OpenAfterBuild` - Open build folder after completion

**Examples**:
```powershell
# Release build with version 1.0.0
.\BuildAndroid.ps1 -BuildType Release -Version 1.0.0

# Debug build and open folder
.\BuildAndroid.ps1 -BuildType Debug -OpenAfterBuild

# Release build with auto-increment
.\BuildAndroid.ps1 -BuildType Release -AutoIncrement
```

**Output**:
- Release: `InventorsWorkshop-v1.0.0-release.aab` (Android App Bundle)
- Debug: `InventorsWorkshop-v1.0.0-debug-TIMESTAMP.apk`

**Build Time**: 10-20 minutes (first build may take longer)

---

### BuildiOS.ps1

**Purpose**: Generates Xcode project for iOS

**Parameters**:
- `-Version` - Version number (default: 1.0.0)
- `-AutoIncrement` - Auto-increment build number

**Examples**:
```powershell
# Generate Xcode project
.\BuildiOS.ps1 -Version 1.0.0

# With auto-increment
.\BuildiOS.ps1 -AutoIncrement
```

**Output**:
- Xcode project folder in `Builds/iOS/XcodeProject/`

**Next Steps**:
1. Copy Xcode project to Mac
2. Open in Xcode
3. Configure signing
4. Archive and upload

**Build Time**: 10-20 minutes

---

### DeployToGooglePlay.ps1

**Purpose**: Helps deploy AAB to Google Play Console

**Parameters**:
- `-AABPath` - Path to AAB file (auto-detects if not specified)
- `-Track` - internal, alpha, beta, or production (default: internal)
- `-DryRun` - Test without uploading

**Examples**:
```powershell
# Deploy latest AAB to internal testing
.\DeployToGooglePlay.ps1 -Track internal

# Deploy specific AAB to beta
.\DeployToGooglePlay.ps1 -AABPath "path\to\app.aab" -Track beta

# Dry run (test only)
.\DeployToGooglePlay.ps1 -DryRun
```

**What it does**:
- Finds latest AAB file
- Validates AAB integrity
- Shows step-by-step deployment guide
- Provides store listing requirements

---

## ⚙️ Configuration

### Before First Build

1. **Update Unity Path** (if needed)
   
   Edit `BuildAndroid.ps1` and `BuildiOS.ps1`:
   ```powershell
   $UnityPath = "C:\Program Files\Unity\Hub\Editor\2022.3.0f1\Editor\Unity.exe"
   ```

2. **Update Package Name**
   
   Edit `BuildScript.cs`:
   ```csharp
   private static string companyName = "YourCompany";
   private static string productName = "InventorsWorkshop";
   private static string bundleIdentifier = "com.yourcompany.inventorsworkshop";
   ```

3. **Configure Android Keystore** (for Release builds)
   
   In Unity Editor:
   - Edit → Project Settings → Player → Android
   - Publishing Settings
   - Check "Custom Keystore"
   - Browse to your keystore file
   - Enter keystore password
   - Enter key alias and password

4. **Add Scenes to Build Settings**
   
   In Unity Editor:
   - File → Build Settings
   - Add Open Scenes (for each scene)
   - Ensure scenes are checked

---

## 🔧 Prerequisites

### For Android Builds

✅ **Required**:
- Unity 2022.3 LTS installed
- Android SDK installed (via Unity Hub)
- Java JDK installed
- PowerShell 5.0 or higher

✅ **For Release Builds**:
- Android keystore file
- Keystore password
- Key alias and password

### For iOS Builds

✅ **Required**:
- Unity 2022.3 LTS installed
- iOS Build Support module installed

✅ **For Final Build** (on Mac):
- macOS with Xcode installed
- Apple Developer account ($99/year)
- Provisioning profiles
- Signing certificates

---

## 📊 Build Output

### Directory Structure
```
Builds/
├── Android/
│   ├── InventorsWorkshop-v1.0.0-release.aab
│   ├── InventorsWorkshop-v1.0.0-debug-20260207_120000.apk
│   └── ...
├── iOS/
│   └── XcodeProject/
│       └── Unity-iPhone.xcodeproj
└── Logs/
    ├── build-android-20260207_120000.log
    ├── build-ios-20260207_120000.log
    └── ...
```

---

## 🐛 Troubleshooting

### Build Fails with "Unity not found"

**Solution**: Update Unity path in script
```powershell
$UnityPath = "C:\Program Files\Unity\Hub\Editor\YOUR_VERSION\Editor\Unity.exe"
```

### Build Fails with "No scenes found"

**Solution**: Add scenes to Build Settings
1. Open Unity Editor
2. File → Build Settings
3. Add Open Scenes
4. Save project

### Android Build Fails with "Keystore error"

**Solution**: Configure keystore in Unity
1. Edit → Project Settings → Player → Android
2. Publishing Settings
3. Set up Custom Keystore

### Build is Too Large (>150MB)

**Solutions**:
- Compress textures (Edit → Project Settings → Quality)
- Use texture atlases
- Remove unused assets
- Enable IL2CPP stripping (Edit → Project Settings → Player)

### Build Takes Too Long

**Solutions**:
- Close other applications
- Use SSD for project
- Disable antivirus temporarily
- Use Unity Cache Server (for teams)

---

## 📱 Testing Builds

### Test Android APK

```bash
# Install on device
adb install path\to\app.apk

# View logs
adb logcat -s Unity

# Uninstall
adb uninstall com.yourcompany.inventorsworkshop
```

### Test Android AAB

1. Upload to Google Play Internal Testing
2. Download from Play Store
3. Test on device

Or use bundletool:
```bash
# Generate APKs from AAB
java -jar bundletool.jar build-apks --bundle=app.aab --output=app.apks

# Install on device
java -jar bundletool.jar install-apks --apks=app.apks
```

---

## 🚀 Deployment Checklist

### Before Release

- [ ] Test on multiple devices
- [ ] Test all features
- [ ] Check performance (60 FPS)
- [ ] Check memory usage (<200MB)
- [ ] Test save/load
- [ ] Test all UI screens
- [ ] Test touch controls
- [ ] Check for crashes
- [ ] Verify version number
- [ ] Update release notes

### Google Play Store

- [ ] Create app in Play Console
- [ ] Upload AAB
- [ ] Add screenshots (2-8 images)
- [ ] Add app icon (512x512)
- [ ] Add feature graphic (1024x500)
- [ ] Write description
- [ ] Set category (Education)
- [ ] Set content rating
- [ ] Set pricing (Free or Paid)
- [ ] Add privacy policy URL
- [ ] Submit for review

### Apple App Store

- [ ] Create app in App Store Connect
- [ ] Upload build via Xcode
- [ ] Add screenshots (multiple sizes)
- [ ] Add app icon (1024x1024)
- [ ] Write description
- [ ] Set category (Education)
- [ ] Set age rating
- [ ] Set pricing (Free or Paid)
- [ ] Add privacy policy URL
- [ ] Submit for review

---

## 💡 Tips & Best Practices

### Version Numbering

Use semantic versioning: `MAJOR.MINOR.PATCH`
- **MAJOR**: Breaking changes (1.0.0 → 2.0.0)
- **MINOR**: New features (1.0.0 → 1.1.0)
- **PATCH**: Bug fixes (1.0.0 → 1.0.1)

### Build Types

- **Debug**: For testing, includes debug symbols, larger size
- **Release**: For production, optimized, smaller size

### Testing Tracks

- **Internal**: Quick testing (up to 100 testers)
- **Alpha**: Early testing (unlimited testers)
- **Beta**: Pre-release testing (unlimited testers)
- **Production**: Public release

### Build Frequency

- **Debug**: Build daily or after major changes
- **Release**: Build weekly or before releases
- **Production**: Build only for store submissions

---

## 📞 Support

### Documentation
- Unity Manual: https://docs.unity3d.com/Manual/
- Android Developer: https://developer.android.com/
- iOS Developer: https://developer.apple.com/

### Common Issues
- Check Unity Console for errors
- Check build logs in `Builds/Logs/`
- Verify all prerequisites are installed
- Ensure project is saved before building

---

## 🎉 Success!

If you see "BUILD SUCCESSFUL" in the output, your build is ready!

**Next Steps**:
1. Test the build on a device
2. Fix any issues
3. Deploy to store
4. Celebrate! 🎉

---

**Happy Building!** 🔧⚙️🤖
