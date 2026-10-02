# 🚀 Quick Start - Build Automation

## One-Click Building!

### 📱 Build Android Debug (for testing)
```
Double-click: BuildAndroidDebug.bat
```
**Output**: APK file in `Builds/Android/`  
**Time**: 10-15 minutes  
**Use**: Install on device for testing

---

### 📱 Build Android Release (for Play Store)
```
Double-click: BuildAndroidRelease.bat
```
**Output**: AAB file in `Builds/Android/`  
**Time**: 15-20 minutes  
**Use**: Upload to Google Play Console

---

### 🍎 Build iOS (for App Store)
```
Double-click: BuildiOS.bat
```
**Output**: Xcode project in `Builds/iOS/`  
**Time**: 10-15 minutes  
**Use**: Open in Xcode on Mac, then archive

---

### 🚀 Deploy to Google Play
```
Double-click: DeployToPlayStore.bat
```
**What it does**: Shows step-by-step deployment guide  
**Time**: 5 minutes  
**Use**: Follow instructions to upload to Play Store

---

## ⚙️ First Time Setup (5 minutes)

### 1. Update Unity Path
Edit `BuildAndroid.ps1` line 30:
```powershell
$UnityPath = "C:\Program Files\Unity\Hub\Editor\2022.3.0f1\Editor\Unity.exe"
```
Change to your Unity installation path.

### 2. Update Package Name
Edit `Assets/Scripts/Editor/BuildScript.cs` lines 14-16:
```csharp
private static string companyName = "YourCompany";
private static string productName = "InventorsWorkshop";
private static string bundleIdentifier = "com.yourcompany.inventorsworkshop";
```

### 3. Add Scenes (in Unity Editor)
```
File → Build Settings → Add Open Scenes
```
Add: MainMenu, Settings, Gameplay

### 4. Configure Keystore (for Release builds)
```
Edit → Project Settings → Player → Android → Publishing Settings
Check "Custom Keystore" → Browse to keystore file
```

---

## 📊 What Happens When You Build

1. ✅ Script validates Unity installation
2. ✅ Script creates build directories
3. ✅ Unity configures player settings
4. ✅ Unity builds APK or AAB
5. ✅ Script validates output
6. ✅ Script shows build summary
7. ✅ Build folder opens automatically

**Total Time**: 10-20 minutes

---

## 🎯 Build Output

### Debug Build
```
Builds/Android/InventorsWorkshop-v1.0.0-debug-20260207_120000.apk
```
- Size: ~30-50MB
- For testing on devices
- Install with: `adb install app.apk`

### Release Build
```
Builds/Android/InventorsWorkshop-v1.0.0-release.aab
```
- Size: ~20-30MB
- For Google Play Store
- Upload to Play Console

---

## 🐛 Troubleshooting

### Build Fails?
1. Check Unity Console for errors
2. Check log file in `Builds/Logs/`
3. Verify Unity path in script
4. Ensure scenes added to Build Settings

### Can't Find Unity?
Update Unity path in `BuildAndroid.ps1`:
```powershell
$UnityPath = "YOUR_UNITY_PATH\Editor\Unity.exe"
```

### Keystore Error?
Configure keystore in Unity:
```
Edit → Project Settings → Player → Android → Publishing Settings
```

---

## 📱 Testing Your Build

### Install APK on Device
```bash
adb install Builds/Android/app.apk
```

### View Logs
```bash
adb logcat -s Unity
```

### Uninstall
```bash
adb uninstall com.yourcompany.inventorsworkshop
```

---

## 🚀 Deploy to Google Play

1. Run `DeployToPlayStore.bat`
2. Follow the step-by-step guide
3. Upload AAB to Play Console
4. Submit for review

**Review Time**:
- Internal/Alpha/Beta: Minutes
- Production: 1-7 days

---

## 💡 Tips

- **Build Debug First**: Test before release
- **Test on Devices**: Don't just test in editor
- **Check File Size**: Keep under 150MB
- **Update Version**: Increment for each release
- **Read Logs**: Check logs if build fails

---

## 📚 More Information

- **BUILD_README.md** - Complete documentation
- **AUTOMATION_COMPLETE.md** - Full automation guide
- **Unity Manual** - https://docs.unity3d.com/Manual/

---

**Ready to build? Double-click a .bat file!** 🚀
