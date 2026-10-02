# Career Quest - Beta Deployment Guide (Android & iOS)

This guide provides complete instructions for deploying Career Quest as a beta version to both Google Play Store (Android) and Apple App Store (iOS).

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Android Beta Deployment](#android-beta-deployment)
3. [iOS Beta Deployment](#ios-beta-deployment)
4. [Testing Beta Releases](#testing-beta-releases)
5. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### General Requirements
- ✅ Node.js 18+ installed
- ✅ All project dependencies installed (`npm install`)
- ✅ All tests passing (`npm test` - 113/113 tests passing)
- ✅ Production build successful (`npm run build`)

### Android Requirements
- ✅ Android Studio installed with SDK 34
- ✅ Java JDK 17 installed
- ✅ Google Play Console account (Developer account - $25 one-time fee)
- ✅ Release keystore generated

### iOS Requirements
- ✅ macOS with Xcode 15+ installed
- ✅ Apple Developer account ($99/year)
- ✅ Valid iOS Distribution Certificate
- ✅ App Store Connect access
- ✅ CocoaPods installed (`sudo gem install cocoapods`)

---

## Android Beta Deployment

### Step 1: Generate Release Keystore (First Time Only)

```bash
keytool -genkey -v -keystore release-key.keystore -alias release-key -keyalg RSA -keysize 2048 -validity 10000
```

**Save these securely:**
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

⚠️ Add to `.gitignore`: `android/gradle.properties`

### Step 3: Update Version for Beta

Edit `android/app/build.gradle`:

```groovy
defaultConfig {
    versionCode 1        // First beta version
    versionName "1.0.0-beta.1"  // Beta version format
}
```

### Step 4: Build Release Bundle

```bash
npm run release:build
```

This creates: `android/app/build/outputs/bundle/release/app-release.aab`

### Step 5: Create Beta Track in Play Console

1. Go to [Google Play Console](https://play.google.com/console)
2. Select your app (or create new app)
3. Navigate to **Release → Testing → Closed testing**
4. Click **Create new release**
5. Upload `app-release.aab`
6. Add release notes:
   ```
   Beta Release v1.0.0-beta.1
   
   New Features:
   - Light/Dark theme system
   - Enhanced MBTI personality test (60 questions)
   - GIF animations for feedback
   - Progress saving and resume functionality
   - Data export/import
   - Performance optimizations
   
   This is a beta version for testing purposes.
   ```

### Step 6: Configure Beta Testers

**Option A: Closed Testing (Recommended for Beta)**
1. Create a tester list
2. Add email addresses of beta testers
3. Testers will receive invitation email
4. Share opt-in URL with testers

**Option B: Open Testing**
1. Anyone with the link can join
2. No approval needed
3. Good for larger beta groups

### Step 7: Review and Publish Beta

1. Complete all required sections (if first release)
2. Click **Review release**
3. Click **Start rollout to Closed testing**
4. Beta will be available within a few hours

---

## iOS Beta Deployment

### Step 1: Setup iOS Project

```bash
# Sync Capacitor with iOS
npx cap sync ios

# Open in Xcode
npx cap open ios
```

### Step 2: Configure Xcode Project

In Xcode:

1. **Select the project** in the navigator
2. **General tab:**
   - Display Name: `Career Quest`
   - Bundle Identifier: `com.careerquest.app` (must be unique)
   - Version: `1.0.0`
   - Build: `1`

3. **Signing & Capabilities:**
   - Team: Select your Apple Developer team
   - Signing Certificate: iOS Distribution
   - Provisioning Profile: App Store (automatic)

### Step 3: Update Info.plist

Add required permissions and descriptions:

```xml
<key>NSCameraUsageDescription</key>
<string>Career Quest needs camera access for profile photos</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Career Quest needs photo library access to save results</string>
```

### Step 4: Configure App Icons and Launch Screen

1. **App Icon:**
   - Use `ios/App/App/Assets.xcassets/AppIcon.appiconset`
   - Add all required sizes (1024x1024 for App Store)

2. **Launch Screen:**
   - Edit `ios/App/App/Base.lproj/LaunchScreen.storyboard`
   - Or use `npx capacitor-assets generate --ios`

### Step 5: Build for TestFlight

In Xcode:

1. Select **Any iOS Device (arm64)** as destination
2. **Product → Archive**
3. Wait for archive to complete
4. Click **Distribute App**
5. Select **App Store Connect**
6. Select **Upload**
7. Choose distribution options:
   - ✅ Upload your app's symbols
   - ✅ Manage Version and Build Number
8. Click **Upload**

### Step 6: Configure TestFlight in App Store Connect

1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Select your app
3. Go to **TestFlight** tab
4. Wait for build to process (10-30 minutes)
5. Add **What to Test** notes:
   ```
   Beta Release v1.0.0 (Build 1)
   
   New Features:
   - Light/Dark theme system
   - Enhanced MBTI personality test (60 questions)
   - GIF animations for feedback
   - Progress saving and resume functionality
   - Data export/import
   - Performance optimizations
   
   Please test all features and report any issues.
   ```

### Step 7: Add Beta Testers

**Internal Testing (Up to 100 testers):**
1. Go to **TestFlight → Internal Testing**
2. Add internal testers (must have App Store Connect access)
3. Testers receive notification immediately

**External Testing (Up to 10,000 testers):**
1. Go to **TestFlight → External Testing**
2. Create a new group
3. Add testers by email
4. Submit for Beta App Review (1-2 days)
5. Once approved, testers receive invitation

### Step 8: Distribute to Testers

Testers will:
1. Receive email invitation
2. Install TestFlight app from App Store
3. Accept invitation
4. Install Career Quest beta

---

## Testing Beta Releases

### Android Beta Testing

**For Testers:**
1. Check email for Play Store invitation
2. Click opt-in link
3. Open Play Store
4. Search for "Career Quest"
5. Install beta version

**For Developers:**
- Monitor crash reports in Play Console
- Review user feedback
- Track installation metrics
- Update beta as needed

### iOS Beta Testing

**For Testers:**
1. Install TestFlight app
2. Accept invitation email
3. Open TestFlight
4. Install Career Quest
5. Provide feedback through TestFlight

**For Developers:**
- Monitor crash reports in App Store Connect
- Review TestFlight feedback
- Track installation and session metrics
- Upload new builds as needed

---

## Beta Update Process

### Android Beta Update

1. Increment version in `build.gradle`:
   ```groovy
   versionCode 2
   versionName "1.0.0-beta.2"
   ```

2. Build new AAB:
   ```bash
   npm run release:build
   ```

3. Upload to Play Console:
   - Go to Closed testing
   - Create new release
   - Upload new AAB
   - Add release notes
   - Roll out

### iOS Beta Update

1. Increment build number in Xcode:
   - Build: `2`
   - Version: `1.0.0` (keep same for beta updates)

2. Archive and upload:
   - Product → Archive
   - Distribute to App Store Connect

3. Update TestFlight:
   - Add "What to Test" notes
   - Testers auto-notified of update

---

## Monitoring and Analytics

### Android Monitoring

**Play Console Metrics:**
- Crashes and ANRs
- Installation statistics
- User ratings and reviews
- Pre-launch reports

**Access:**
- Play Console → Your App → Quality → Crashes & ANRs

### iOS Monitoring

**App Store Connect Metrics:**
- Crashes and diagnostics
- TestFlight feedback
- Installation statistics
- Session duration

**Access:**
- App Store Connect → Your App → TestFlight → Crashes

---

## Troubleshooting

### Android Issues

**Build fails with signing error:**
```bash
# Verify gradle.properties exists and has correct values
cat android/gradle.properties

# Verify keystore file exists
ls -la release-key.keystore
```

**Bundle size too large:**
```bash
# Check bundle size
du -h android/app/build/outputs/bundle/release/app-release.aab

# Ensure ProGuard is enabled in build.gradle
# minifyEnabled true
# shrinkResources true
```

**App crashes on startup:**
- Check ProGuard rules in `android/app/proguard-rules.pro`
- Test release build on physical device before uploading
- Review crash logs in Play Console

### iOS Issues

**Code signing error:**
- Verify Apple Developer account is active
- Check certificate is valid in Xcode preferences
- Regenerate provisioning profile if needed

**Archive fails:**
- Clean build folder: Product → Clean Build Folder
- Update CocoaPods: `cd ios/App && pod install`
- Check for Swift/Objective-C errors

**TestFlight processing stuck:**
- Wait 30 minutes (normal processing time)
- Check for email from Apple about issues
- Verify all required metadata is complete

---

## Beta to Production Promotion

### Android

1. Go to Play Console → Testing → Closed testing
2. Select the beta release
3. Click **Promote release**
4. Select **Production**
5. Review and roll out

### iOS

1. Go to App Store Connect
2. Create new version in **App Store** tab
3. Select TestFlight build to submit
4. Complete all required metadata
5. Submit for review
6. Once approved, release to App Store

---

## Checklist Before Beta Release

### Pre-Release Checklist

- [ ] All tests passing (113/113)
- [ ] Production build successful
- [ ] App tested on physical devices (Android & iOS)
- [ ] All features working correctly
- [ ] No critical bugs
- [ ] Privacy policy prepared (if collecting data)
- [ ] Beta tester list ready
- [ ] Release notes written
- [ ] Screenshots prepared
- [ ] App icons finalized

### Android Specific

- [ ] Keystore generated and backed up
- [ ] Signing configured in gradle.properties
- [ ] Version code and name updated
- [ ] ProGuard rules tested
- [ ] AAB file generated successfully
- [ ] Play Console account ready

### iOS Specific

- [ ] Apple Developer account active
- [ ] Xcode project configured
- [ ] Bundle identifier registered
- [ ] Certificates and profiles valid
- [ ] App icons added to Xcode
- [ ] Archive builds successfully
- [ ] TestFlight configured

---

## Quick Command Reference

### Android Commands
```bash
# Build release AAB
npm run release:build

# Validate before build
npm run release:prepare

# Build debug APK
npm run android:build:debug

# Install debug on device
npm run android:install
```

### iOS Commands
```bash
# Sync Capacitor
npx cap sync ios

# Open in Xcode
npx cap open ios

# Update pods
cd ios/App && pod install && cd ../..

# Generate assets
npx capacitor-assets generate --ios
```

### General Commands
```bash
# Run tests
npm test

# Build web app
npm run build

# Sync both platforms
npx cap sync
```

---

## Support and Resources

### Documentation
- [Google Play Console Help](https://support.google.com/googleplay/android-developer)
- [App Store Connect Help](https://developer.apple.com/help/app-store-connect/)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [TestFlight Documentation](https://developer.apple.com/testflight/)

### Contact
- Development Team: [Your contact info]
- Beta Tester Support: [Support email]

---

**Last Updated**: 2026-04-25  
**Version**: 1.0.0-beta.1  
**Platforms**: Android & iOS

