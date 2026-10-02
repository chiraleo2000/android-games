# Career Quest - Beta Release Instructions

## 🎯 Current Status

✅ **Version**: 1.0.0-beta.1  
✅ **Tests**: 113/113 passing  
✅ **Build**: Production bundle ready  
✅ **Platforms**: Android & iOS synced  

---

## 📋 Pre-Deployment Checklist

### ✅ Completed
- [x] All tests passing (113/113)
- [x] Production build successful
- [x] Code splitting implemented
- [x] Error boundaries added
- [x] Performance optimizations complete
- [x] Data export/import functionality
- [x] Theme system (Light/Dark)
- [x] Enhanced MBTI test (60 questions)
- [x] GIF animations integrated
- [x] Progress saving/resume
- [x] Android & iOS projects synced
- [x] Version updated to 1.0.0-beta.1

### 🔲 Required Before Deployment

#### Android Beta
- [ ] Generate release keystore (first time only)
- [ ] Configure signing in `android/gradle.properties`
- [ ] Test release build on physical device
- [ ] Prepare Play Console account
- [ ] Create beta tester list
- [ ] Prepare screenshots (at least 2)
- [ ] Write store listing description

#### iOS Beta
- [ ] Apple Developer account active ($99/year)
- [ ] Xcode installed and configured
- [ ] iOS Distribution Certificate created
- [ ] App Store Connect access
- [ ] TestFlight configured
- [ ] Prepare beta tester list
- [ ] Prepare screenshots (at least 2)
- [ ] App icons finalized (1024x1024)

---

## 🤖 Android Beta Deployment

### Step 1: Generate Signing Key (First Time Only)

```bash
keytool -genkey -v -keystore release-key.keystore -alias release-key -keyalg RSA -keysize 2048 -validity 10000
```

**Important**: Save these securely!
- Keystore password
- Key password
- Keystore file location

### Step 2: Configure Signing

Create `android/gradle.properties`:

```properties
RELEASE_STORE_FILE=../release-key.keystore
RELEASE_STORE_PASSWORD=your_store_password_here
RELEASE_KEY_ALIAS=release-key
RELEASE_KEY_PASSWORD=your_key_password_here
```

⚠️ **Add to .gitignore**: `android/gradle.properties`

### Step 3: Build Beta Release

```bash
npm run beta:android
```

This will:
1. Run all tests
2. Build production bundle
3. Sync with Android
4. Validate assets
5. Build release AAB

Output: `android/app/build/outputs/bundle/release/app-release.aab`

### Step 4: Upload to Play Console

1. Go to [Google Play Console](https://play.google.com/console)
2. Create app (if first time):
   - App name: **Career Quest**
   - Default language: English (United States)
   - App type: App
   - Free or paid: Free

3. Navigate to **Release → Testing → Closed testing**
4. Click **Create new release**
5. Upload `app-release.aab`
6. Add release notes:

```
Beta Release v1.0.0-beta.1

🎨 New Features:
• Light/Dark theme system with smooth transitions
• Enhanced MBTI personality test with 60 questions
• Comprehensive personality results with career recommendations
• GIF animations for engaging feedback
• Progress saving and resume functionality
• Data export/import for backup
• Performance optimizations and code splitting
• Error handling and recovery

🧪 Beta Testing:
This is a beta version for testing purposes. Please report any issues or feedback.

📝 What to Test:
• Theme switching (Light/Dark)
• Complete personality test (60 questions)
• Career simulations with progress saving
• Data export and import
• App performance and stability
```

7. Configure beta testers:
   - Create tester list
   - Add email addresses
   - Share opt-in URL

8. Click **Review release** → **Start rollout to Closed testing**

### Step 5: Monitor Beta

- Check crash reports in Play Console
- Review user feedback
- Track installation metrics
- Prepare updates based on feedback

---

## 🍎 iOS Beta Deployment

### Step 1: Prepare iOS Build

```bash
npm run beta:ios
```

This will:
1. Run all tests
2. Build production bundle
3. Sync with iOS
4. Open Xcode

### Step 2: Configure Xcode

In Xcode:

1. **Select project** in navigator
2. **General tab**:
   - Display Name: `Career Quest`
   - Bundle Identifier: `com.careerquest.app`
   - Version: `1.0.0`
   - Build: `1`

3. **Signing & Capabilities**:
   - Team: Select your Apple Developer team
   - Signing Certificate: iOS Distribution
   - Provisioning Profile: App Store (automatic)

### Step 3: Add App Icons

1. Navigate to `ios/App/App/Assets.xcassets/AppIcon.appiconset`
2. Add all required icon sizes
3. Ensure 1024x1024 icon for App Store

Or use:
```bash
npx capacitor-assets generate --ios
```

### Step 4: Build and Archive

1. Select **Any iOS Device (arm64)** as destination
2. **Product → Clean Build Folder**
3. **Product → Archive**
4. Wait for archive to complete (5-10 minutes)

### Step 5: Upload to App Store Connect

1. Click **Distribute App**
2. Select **App Store Connect**
3. Select **Upload**
4. Choose options:
   - ✅ Upload your app's symbols
   - ✅ Manage Version and Build Number
5. Click **Upload**
6. Wait for processing (10-30 minutes)

### Step 6: Configure TestFlight

1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Select your app
3. Go to **TestFlight** tab
4. Wait for build to process
5. Add **What to Test** notes:

```
Beta Release v1.0.0 (Build 1)

🎨 New Features:
• Light/Dark theme system with smooth transitions
• Enhanced MBTI personality test with 60 questions
• Comprehensive personality results with career recommendations
• GIF animations for engaging feedback
• Progress saving and resume functionality
• Data export/import for backup
• Performance optimizations and code splitting
• Error handling and recovery

🧪 Beta Testing:
Please test all features and report any issues through TestFlight feedback.

📝 Focus Areas:
• Theme switching functionality
• Complete personality test flow
• Career simulation with progress saving
• Data export and import
• Overall app performance and stability
```

### Step 7: Add Beta Testers

**Internal Testing** (Up to 100 testers):
1. Go to **TestFlight → Internal Testing**
2. Add internal testers
3. Testers receive notification immediately

**External Testing** (Up to 10,000 testers):
1. Go to **TestFlight → External Testing**
2. Create new group
3. Add testers by email
4. Submit for Beta App Review (1-2 days)
5. Once approved, testers receive invitation

---

## 📊 Beta Testing Guidelines

### For Beta Testers

**Android:**
1. Check email for Play Store invitation
2. Click opt-in link
3. Open Play Store
4. Search "Career Quest"
5. Install beta version

**iOS:**
1. Install TestFlight app from App Store
2. Accept invitation email
3. Open TestFlight
4. Install Career Quest
5. Provide feedback through TestFlight

### What to Test

1. **Theme System**:
   - Switch between Light and Dark themes
   - Check all screens for proper theming
   - Verify theme persists after app restart

2. **Personality Test**:
   - Complete full 60-question test
   - Check progress saving
   - Review comprehensive results
   - Test career recommendations

3. **Career Simulations**:
   - Try multiple career paths
   - Test progress saving mid-game
   - Resume after closing app
   - Check GIF animations

4. **Data Management**:
   - Export data to file
   - Import data from file
   - Clear all data
   - Verify data persistence

5. **Performance**:
   - App startup time
   - Navigation smoothness
   - Memory usage
   - Battery consumption

6. **Edge Cases**:
   - Low memory situations
   - Poor network conditions
   - Background/foreground transitions
   - Device rotation

### Reporting Issues

**Android**: Use Play Console feedback or email
**iOS**: Use TestFlight feedback feature

Include:
- Device model and OS version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

## 🔄 Beta Update Process

### Updating Android Beta

1. Increment version:
   ```groovy
   // android/app/build.gradle
   versionCode 2
   versionName "1.0.0-beta.2"
   ```

2. Build and upload:
   ```bash
   npm run beta:android
   ```

3. Upload new AAB to Play Console
4. Add release notes
5. Roll out to testers

### Updating iOS Beta

1. Increment build number in Xcode:
   - Build: `2`
   - Version: `1.0.0` (keep same)

2. Archive and upload:
   - Product → Archive
   - Distribute to App Store Connect

3. Update TestFlight notes
4. Testers auto-notified

---

## 📈 Success Metrics

Track these metrics during beta:

### Engagement
- [ ] Daily active users
- [ ] Session duration
- [ ] Completion rate (personality test)
- [ ] Career simulations completed

### Quality
- [ ] Crash-free rate (target: >99%)
- [ ] ANR rate (target: <0.1%)
- [ ] Average rating (target: >4.0)
- [ ] Bug reports per user

### Performance
- [ ] App startup time (<3 seconds)
- [ ] Memory usage (<200MB)
- [ ] Battery consumption (minimal)
- [ ] Network usage (minimal)

---

## 🚀 Promotion to Production

Once beta testing is successful:

### Android
1. Go to Play Console → Testing → Closed testing
2. Select beta release
3. Click **Promote release**
4. Select **Production**
5. Review and roll out

### iOS
1. Go to App Store Connect
2. Create new version in **App Store** tab
3. Select TestFlight build
4. Complete all metadata
5. Submit for review
6. Release to App Store

---

## 📞 Support

### Documentation
- Full deployment guide: `.kiro/specs/career-quest-enhancements/BETA_DEPLOYMENT_GUIDE.md`
- Android guide: `.kiro/specs/career-quest-enhancements/DEPLOYMENT_GUIDE.md`

### Resources
- [Google Play Console](https://play.google.com/console)
- [App Store Connect](https://appstoreconnect.apple.com)
- [Capacitor Docs](https://capacitorjs.com/docs)
- [TestFlight Docs](https://developer.apple.com/testflight/)

### Quick Commands

```bash
# Prepare beta deployment
npm run beta:prepare

# Build Android beta
npm run beta:android

# Open iOS in Xcode
npm run beta:ios

# Run tests
npm test

# Build production
npm run build

# Sync platforms
npx cap sync
```

---

**Version**: 1.0.0-beta.1  
**Last Updated**: 2026-04-25  
**Status**: Ready for Beta Deployment 🚀

