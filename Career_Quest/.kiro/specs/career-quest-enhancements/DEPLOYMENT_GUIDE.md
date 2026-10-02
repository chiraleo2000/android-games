# Career Quest - Google Play Store Deployment Guide

This guide provides step-by-step instructions for building and deploying Career Quest to the Google Play Store.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Generate Signing Key](#generate-signing-key)
3. [Configure Signing](#configure-signing)
4. [Build for Release](#build-for-release)
5. [Upload to Play Store](#upload-to-play-store)
6. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:

- ✅ Node.js 18+ installed
- ✅ Android Studio installed with SDK 34
- ✅ Java JDK 17 installed
- ✅ Google Play Console account
- ✅ All project dependencies installed (`npm install`)
- ✅ All tests passing (`npm test`)

---

## Generate Signing Key

### Step 1: Create a Keystore File

Run the following command to generate a release keystore:

```bash
keytool -genkey -v -keystore release-key.keystore -alias release-key -keyalg RSA -keysize 2048 -validity 10000
```

You will be prompted for:
- **Keystore password**: Choose a strong password (save this!)
- **Key password**: Choose a strong password (save this!)
- **Your name, organization, etc.**: Fill in your details

### Step 2: Store the Keystore Securely

⚠️ **IMPORTANT**: 
- Store `release-key.keystore` in a secure location
- **NEVER** commit the keystore to version control
- Back up the keystore and passwords securely
- If you lose the keystore, you cannot update your app on Play Store

---

## Configure Signing

### Option 1: Using gradle.properties (Recommended)

Create or edit `android/gradle.properties`:

```properties
RELEASE_STORE_FILE=../release-key.keystore
RELEASE_STORE_PASSWORD=your_store_password_here
RELEASE_KEY_ALIAS=release-key
RELEASE_KEY_PASSWORD=your_key_password_here
```

⚠️ **IMPORTANT**: Add `gradle.properties` to `.gitignore` to prevent committing passwords!

### Option 2: Using Environment Variables

Set environment variables before building:

**Windows (PowerShell):**
```powershell
$env:RELEASE_STORE_FILE="../release-key.keystore"
$env:RELEASE_STORE_PASSWORD="your_store_password"
$env:RELEASE_KEY_ALIAS="release-key"
$env:RELEASE_KEY_PASSWORD="your_key_password"
```

**macOS/Linux:**
```bash
export RELEASE_STORE_FILE="../release-key.keystore"
export RELEASE_STORE_PASSWORD="your_store_password"
export RELEASE_KEY_ALIAS="release-key"
export RELEASE_KEY_PASSWORD="your_key_password"
```

---

## Build for Release

### Step 1: Validate Assets and Configuration

Run the validation scripts to ensure everything is ready:

```bash
npm run release:prepare
```

This will:
- ✅ Check all required icons exist and are properly sized
- ✅ Check splash screens for all densities
- ✅ Validate GIF file sizes
- ✅ Verify signing configuration
- ✅ Check build.gradle settings
- ✅ Validate AndroidManifest.xml

Fix any errors reported before proceeding.

### Step 2: Build the Release Bundle

Build the Android App Bundle (AAB) for Play Store:

```bash
npm run release:build
```

This will:
1. Run asset and build validation
2. Build the React app (`npm run build`)
3. Sync with Capacitor (`cap sync android`)
4. Build the release AAB with ProGuard/R8 optimization

### Step 3: Locate the Release Bundle

The AAB file will be located at:
```
android/app/build/outputs/bundle/release/app-release.aab
```

### Step 4: Verify Bundle Size

Check that the bundle is under 150MB:

```bash
# Windows PowerShell
(Get-Item android/app/build/outputs/bundle/release/app-release.aab).length / 1MB

# macOS/Linux
du -h android/app/build/outputs/bundle/release/app-release.aab
```

---

## Upload to Play Store

### Step 1: Create App in Play Console

1. Go to [Google Play Console](https://play.google.com/console)
2. Click "Create app"
3. Fill in app details:
   - **App name**: Career Quest
   - **Default language**: English (United States)
   - **App or game**: App
   - **Free or paid**: Free

### Step 2: Complete Store Listing

Fill in the required information:

**App details:**
- Short description (80 characters max)
- Full description (4000 characters max)
- App icon (512x512 PNG)
- Feature graphic (1024x500 PNG)
- Screenshots (at least 2, up to 8)

**Categorization:**
- App category: Education
- Content rating: Complete questionnaire

**Contact details:**
- Email address
- Privacy policy URL (if applicable)

### Step 3: Upload the AAB

1. Go to "Release" → "Production"
2. Click "Create new release"
3. Upload `app-release.aab`
4. Fill in release notes
5. Review and roll out

### Step 4: Submit for Review

1. Complete all required sections
2. Submit app for review
3. Wait for Google's approval (typically 1-3 days)

---

## Troubleshooting

### Build Errors

**Error: "Signing config not found"**
- Solution: Ensure `gradle.properties` or environment variables are set correctly
- Verify the keystore file path is correct

**Error: "Bundle size exceeds 150MB"**
- Solution: 
  - Ensure `minifyEnabled` and `shrinkResources` are set to `true` in `build.gradle`
  - Optimize images and GIFs
  - Remove unused dependencies

**Error: "ProGuard rules causing crashes"**
- Solution: Check `proguard-rules.pro` for missing keep rules
- Test the release build on a physical device before uploading

### Validation Errors

**Missing icons or splash screens:**
- Run `npm run release:prepare` to see which assets are missing
- Generate missing assets using Capacitor Assets: `npx capacitor-assets generate`

**GIF files too large:**
- Compress GIFs using tools like [ezgif.com](https://ezgif.com/optimize)
- Target size: under 2MB per GIF

### Play Store Rejection

**Common reasons:**
- Missing privacy policy (required if app collects user data)
- Inappropriate content
- Misleading app description
- Missing required permissions justification

**Solution:**
- Review Google Play's [Developer Policy](https://play.google.com/about/developer-content-policy/)
- Address the specific issues mentioned in the rejection email
- Resubmit the app

---

## Build Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run android:build:debug` | Build debug APK |
| `npm run android:build:release` | Build release AAB |
| `npm run android:install` | Build and install debug APK on connected device |
| `npm run release:prepare` | Validate assets and build configuration |
| `npm run release:build` | Full release build with validation |

---

## Version Management

### Updating Version for New Release

Edit `android/app/build.gradle`:

```groovy
defaultConfig {
    versionCode 2        // Increment by 1 for each release
    versionName "1.1.0"  // Update semantic version
}
```

**Version Code Rules:**
- Must be an integer
- Must be greater than previous version
- Cannot be reused

**Version Name Format:**
- Use semantic versioning: `MAJOR.MINOR.PATCH`
- Example: `1.0.0` → `1.1.0` → `2.0.0`

---

## Security Best Practices

1. ✅ **Never commit signing keys** to version control
2. ✅ **Use strong passwords** for keystore and keys
3. ✅ **Back up keystore** in multiple secure locations
4. ✅ **Rotate keys** if compromised
5. ✅ **Use environment variables** for CI/CD pipelines
6. ✅ **Enable Play App Signing** for additional security

---

## Additional Resources

- [Android App Bundle Documentation](https://developer.android.com/guide/app-bundle)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer)
- [Capacitor Android Documentation](https://capacitorjs.com/docs/android)
- [ProGuard Documentation](https://www.guardsquare.com/manual/home)

---

## Support

For issues or questions:
- Check the [Troubleshooting](#troubleshooting) section
- Review build logs in `android/app/build/outputs/logs/`
- Contact the development team

---

**Last Updated**: 2026-04-25
**Version**: 1.0.0
