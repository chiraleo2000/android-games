# Career Quest — Store Deployment & Compliance Guide

**Version**: 1.0.0  
**Date**: February 26, 2026  
**Platforms**: Google Play Store (Android) · Apple App Store (iOS)

---

## Table of Contents

1. [Pre-Deployment Checklist](#1-pre-deployment-checklist)
2. [Google Play Store (Android)](#2-google-play-store-android)
3. [Apple App Store (iOS)](#3-apple-app-store-ios)
4. [Store Assets & Metadata](#4-store-assets--metadata)
5. [Privacy & Legal Compliance](#5-privacy--legal-compliance)
6. [In-App Purchases Setup](#6-in-app-purchases-setup)
7. [Review Guidelines Compliance](#7-review-guidelines-compliance)
8. [Post-Launch Operations](#8-post-launch-operations)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Pre-Deployment Checklist

### 1.1 Technical Requirements
- [ ] Production build passes (`npm run build` — no errors)
- [ ] All console.log statements stripped (Terser `drop_console: true`)
- [ ] Source maps disabled for production
- [ ] App version and build number set correctly
- [ ] Capacitor sync complete (`npx cap sync`)
- [ ] App icons generated for all required sizes
- [ ] Splash screen configured and tested
- [ ] Deep links / URL schemes configured (if applicable)

### 1.2 Content Requirements
- [ ] All 64 careers tested and functional
- [ ] Personality test completes without errors
- [ ] Resume/save system verified
- [ ] All 3 languages verified (EN/TH/ZH)
- [ ] Premium lock/unlock flow tested
- [ ] No placeholder or debug content

### 1.3 Legal Requirements
- [ ] Privacy Policy published at accessible URL
- [ ] Terms of Service drafted
- [ ] Content rating questionnaire completed
- [ ] GDPR data deletion mechanism implemented
- [ ] No copyrighted content used without license

### 1.4 Store Account Requirements
| Store | Account | Fee | URL |
|-------|---------|-----|-----|
| Google Play | Developer Account | $25 one-time | https://play.google.com/console |
| Apple App Store | Developer Program | $99/year | https://developer.apple.com |

---

## 2. Google Play Store (Android)

### 2.1 Signing Configuration

#### Generate Release Keystore
```bash
keytool -genkey -v \
  -keystore career-quest-release.keystore \
  -alias careerquest \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

> **CRITICAL**: Store keystore file securely. If lost, you cannot update your app.

#### Configure Gradle Signing
Edit `android/app/build.gradle`:
```groovy
android {
    ...
    signingConfigs {
        release {
            storeFile file("career-quest-release.keystore")
            storePassword System.getenv("KEYSTORE_PASSWORD") ?: ""
            keyAlias "careerquest"
            keyPassword System.getenv("KEY_PASSWORD") ?: ""
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

### 2.2 Build Android App Bundle (AAB)
```bash
# Build web assets
npm run build

# Sync to Android
npx cap sync android

# Build release AAB
cd android
./gradlew bundleRelease

# Output location:
# android/app/build/outputs/bundle/release/app-release.aab
```

### 2.3 Play Console Configuration

#### App Details
| Field | Value |
|-------|-------|
| App Name | Career Quest |
| Short Description | Explore 64+ career paths through interactive simulations & discover your MBTI personality type |
| Full Description | See [Store Description](#44-store-description) |
| Category | Education |
| Content Rating | Everyone (IARC) |
| Target Audience | 16+ |

#### Technical Requirements
| Requirement | Status | Notes |
|-------------|--------|-------|
| Target API Level | 34+ | Required by Google Play |
| 64-bit Support | ✅ | Default with Capacitor |
| App Bundle Format | AAB | Required (not APK) |
| Minimum SDK | 24 (Android 7.0) | Set in `variables.gradle` |
| Permissions | INTERNET only | Minimal permissions |

#### Release Tracks
| Track | Purpose |
|-------|---------|
| Internal Testing | Team testing (up to 100 testers) |
| Closed Testing | Beta testers by email/group |
| Open Testing | Public beta |
| Production | Public release |

**Recommended**: Use Internal → Closed → Production rollout (skip Open for small apps).

### 2.4 Google Play Billing (Premium)
```
Play Console → Monetize → Products → In-app products
  → Create Product
    Product ID: career_quest_premium
    Name: Career Quest Premium
    Description: Unlock 24 additional premium career simulations
    Price: $2.99 (adjust per region)
    Type: One-time (non-consumable)
```

---

## 3. Apple App Store (iOS)

### 3.1 Signing & Certificates

#### Requirements
- Apple Developer Program membership ($99/year)
- Xcode 15+ on macOS
- Distribution certificate + provisioning profile

#### Steps
1. Open `ios/App/App.xcworkspace` in Xcode
2. Select the **App** target → **Signing & Capabilities**
3. Set Team to your Apple Developer team
4. Set Bundle Identifier to `com.careerquest.app`
5. Xcode auto-manages signing (or configure manually)

### 3.2 Build for App Store

#### Archive
```
Xcode → Product → Archive
  → Distribute App → App Store Connect → Upload
```

#### Xcode Cloud (Alternative)
Configure CI/CD directly in Xcode Cloud for automated builds.

### 3.3 App Store Connect Configuration

#### App Information
| Field | Value |
|-------|-------|
| Name | Career Quest |
| Subtitle | Career Simulation & MBTI Test |
| Bundle ID | com.careerquest.app |
| SKU | career-quest-2026 |
| Primary Category | Education |
| Secondary Category | Games → Simulation |
| Age Rating | 4+ |
| Price | Free (with IAP) |

#### App Privacy
Required "App Privacy" nutrition labels:
| Data Type | Collected | Linked to User | Tracking |
|-----------|-----------|-----------------|----------|
| None | No | No | No |

> Career Quest collects **no data**. All information stays on-device.

### 3.4 StoreKit 2 (Premium)
```
App Store Connect → My Apps → Career Quest → In-App Purchases
  → Create → Non-Consumable
    Reference Name: Career Quest Premium
    Product ID: com.careerquest.app.premium
    Price: Tier 3 ($2.99)
    Display Name: Premium Careers
    Description: Unlock 24 additional premium career paths
```

---

## 4. Store Assets & Metadata

### 4.1 App Icons

#### Android
| Size | DPI | File |
|------|-----|------|
| 48×48 | mdpi | mipmap-mdpi/ic_launcher.png |
| 72×72 | hdpi | mipmap-hdpi/ic_launcher.png |
| 96×96 | xhdpi | mipmap-xhdpi/ic_launcher.png |
| 144×144 | xxhdpi | mipmap-xxhdpi/ic_launcher.png |
| 192×192 | xxxhdpi | mipmap-xxxhdpi/ic_launcher.png |
| 512×512 | — | Play Store listing icon |

#### iOS
| Size | Usage |
|------|-------|
| 20×20 @2x, @3x | Notification |
| 29×29 @2x, @3x | Settings |
| 40×40 @2x, @3x | Spotlight |
| 60×60 @2x, @3x | Home Screen |
| 76×76 @2x | iPad |
| 83.5×83.5 @2x | iPad Pro |
| 1024×1024 | App Store |

### 4.2 Screenshots

#### Required Devices
| Platform | Device | Resolution |
|----------|--------|------------|
| Android | Phone (16:9) | 1080×1920 |
| Android | Phone (19.5:9) | 1080×2340 |
| Android | 7" Tablet | 1200×1920 |
| Android | 10" Tablet | 1600×2560 |
| iOS | iPhone 6.7" | 1290×2796 |
| iOS | iPhone 6.5" | 1242×2688 |
| iOS | iPhone 5.5" | 1242×2208 |
| iOS | iPad Pro 12.9" | 2048×2732 |

#### Recommended Screenshots (6-8 per device)
1. **Home Screen** — Hero with Career Quest branding
2. **Career Categories** — 9 career groups grid
3. **Gameplay** — Active scenario with options
4. **Results** — Score circle with 4-dimension breakdown
5. **Personality Test** — MBTI question with Likert scale
6. **MBTI Result** — Type display with dimensions
7. **Premium** — Premium career showcase with crown badges
8. **Settings** — Theme/language options

### 4.3 Feature Graphic (Android)
- Size: 1024×500
- Content: Career Quest logo + key career icons + tagline

### 4.4 Store Description

#### Short Description (80 chars)
```
Explore 64+ career paths & discover your MBTI type through fun simulations!
```

#### Full Description
```
🎮 CAREER QUEST — Your Career Adventure Starts Here!

Explore 64+ career paths through immersive simulations and discover your
personality type with our comprehensive MBTI assessment.

🎯 CAREER SIMULATIONS
• 64 unique career paths across 9 industries
• 5,000+ scenario questions with meaningful choices
• 4-dimension scoring: Competence, Ethics, Leadership, Innovation
• Performance ratings from Novice to Expert

🧠 PERSONALITY ASSESSMENT
• 100-question MBTI-based personality test
• 16 personality types with detailed descriptions
• Discover your cognitive preferences across 4 dimensions
• Science-backed methodology

✨ KEY FEATURES
• 🌐 3 Languages: English, Thai, Chinese
• 🎨 Dark & Light themes
• 💾 Auto-save & resume anytime
• 🎵 Background music & sound effects
• 📊 Track your results and progress
• 💎 24 Premium career paths available

Perfect for students exploring career options, career changers seeking
direction, or anyone curious about personality-career alignment.

Download Career Quest and start your career adventure today!
```

---

## 5. Privacy & Legal Compliance

### 5.1 Privacy Policy Requirements
Both stores require a published privacy policy. Since Career Quest collects no data:

```markdown
# Career Quest Privacy Policy
Last updated: February 26, 2026

Career Quest does not collect, store, or transmit any personal information.
All game progress, preferences, and results are stored locally on your device
and are never sent to any server.

## Data Storage
- Game progress: Stored locally on your device
- Preferences: Stored locally on your device
- Results history: Stored locally on your device

## Data Deletion
You can delete all stored data at any time through the app's Settings menu.

## Third-Party Services
Career Quest does not use any third-party analytics, advertising, or
tracking services.

## Children's Privacy
Career Quest is suitable for all ages and does not collect any data
from users of any age.

## Contact
[Your contact email]
```

> **Host this at a public URL** (e.g., GitHub Pages, your website) and link in store listings.

### 5.2 GDPR Compliance
- ✅ No personal data collected
- ✅ No third-party tracking
- ✅ Data deletion available (clear all data in Settings)
- ✅ No data transmission

### 5.3 COPPA Compliance
- ✅ No data collection from children
- ✅ Age-appropriate content
- ✅ No advertising

### 5.4 Content Rating
| System | Expected Rating |
|--------|----------------|
| IARC (Google Play) | Everyone / 3+ |
| Apple | 4+ |

No violence, gambling, profanity, or sensitive content.

---

## 6. In-App Purchases Setup

### 6.1 Product Configuration

| Field | Android (Google Play) | iOS (App Store) |
|-------|----------------------|-----------------|
| Product ID | `career_quest_premium` | `com.careerquest.app.premium` |
| Type | One-time | Non-Consumable |
| Price | $2.99 | Tier 3 ($2.99) |
| Name | Career Quest Premium | Premium Careers |
| Description | Unlock 24 premium careers | Unlock 24 premium career paths |

### 6.2 Integration Architecture
```
User taps "Upgrade"
       │
       ▼
┌──────────────────┐
│ licenseManager.js │
│ startPurchase()   │
└────────┬─────────┘
         │
    ┌────┴────┐
    ▼         ▼
[Android]  [iOS]
Google Play  StoreKit 2
Billing API
    │         │
    ▼         ▼
Receipt    Receipt
    │         │
    └────┬────┘
         ▼
  verifyReceipt()
  (server-side recommended)
         │
         ▼
  activateLicense()
  Store receipt in secure storage
```

### 6.3 Purchase Restoration
Both stores require a "Restore Purchases" button for non-consumable IAPs.
Add to Settings modal alongside premium toggle.

---

## 7. Review Guidelines Compliance

### 7.1 Google Play Review Checklist
- [ ] App meets Google Play Developer Program Policies
- [ ] No deceptive behavior or misleading claims
- [ ] Content rating accurately reflects app content
- [ ] In-app purchases clearly disclosed
- [ ] Privacy policy URL provided
- [ ] No excessive permissions requested
- [ ] Target API level meets minimum (34+)
- [ ] App does not crash or freeze
- [ ] All features functional as described

### 7.2 Apple App Review Checklist
- [ ] App provides sufficient utility (not just a web wrapper)
- [ ] No hidden or undisclosed features
- [ ] IAP managed through StoreKit (no external payment links)
- [ ] App Privacy nutrition labels accurate
- [ ] No use of private APIs
- [ ] App works on all supported device sizes
- [ ] Minimum deployment target set correctly
- [ ] No placeholder content
- [ ] "Restore Purchases" button present (if IAP exists)

### 7.3 Common Rejection Reasons & Prevention
| Reason | Prevention |
|--------|-----------|
| Crashes / bugs | Thorough QA on real devices |
| Incomplete info | Fill all metadata fields completely |
| Privacy violations | No data collection; clear privacy policy |
| Guideline 4.2 (Minimum Functionality) | Career Quest has substantial gameplay + assessment — exceeds minimum |
| IAP issues | Test sandbox purchases; include restore button |
| Missing content | Ensure all 64 careers load correctly |

---

## 8. Post-Launch Operations

### 8.1 Monitoring
| Metric | Tool | Target |
|--------|------|--------|
| Crash Rate | Play Console / App Store Connect | < 0.5% |
| ANR Rate (Android) | Play Console | < 0.5% |
| Ratings | Store dashboards | > 4.2 |
| Uninstall Rate | Store dashboards | < 5% day-1 |

### 8.2 Update Strategy
| Update Type | Frequency | Process |
|-------------|-----------|---------|
| Bug Fix | As needed | Increment patch version |
| Content Update | Monthly | Add new career questions |
| Feature Update | Quarterly | New features/careers |
| OS Compatibility | Annual | Target new API levels |

### 8.3 Version Numbering
```
Format: MAJOR.MINOR.PATCH (e.g., 1.0.0)
Android versionCode: Sequential integer (1, 2, 3...)
iOS build number: Sequential integer (1, 2, 3...)
```

### 8.4 Staged Rollouts
- **Google Play**: Use staged rollout (10% → 25% → 50% → 100%)
- **Apple**: Use phased release (7-day automatic rollout)

---

## 9. Troubleshooting

### 9.1 Build Issues
| Issue | Solution |
|-------|---------|
| Gradle build fails | Check `variables.gradle` for correct SDK versions |
| Xcode signing error | Re-select team in Signing & Capabilities |
| Capacitor sync fails | Run `npx cap sync` after `npm run build` |
| Missing icons | Generate with `npx @capacitor/assets generate` |

### 9.2 Store Submission Issues
| Issue | Solution |
|-------|---------|
| AAB rejected (API level) | Update `targetSdkVersion` in `variables.gradle` |
| Screenshot rejected | Ensure exact resolution match per device |
| Privacy policy missing | Host at public URL and add to listing |
| IAP not appearing | Allow 24-48h for propagation after creation |

### 9.3 Common Runtime Issues
| Issue | Solution |
|-------|---------|
| White screen on launch | Check `webDir` in `capacitor.config.json` points to `dist` |
| Questions not loading | Verify `questions/index.js` exports are correct |
| Save not persisting | Check localStorage availability (WebView restrictions) |
| Premium not unlocking | Verify receipt validation flow |

---

## Quick Launch Checklist

```
□ Developer account created & verified
□ App icons generated (all sizes)
□ Screenshots captured (all required devices)
□ Store description written (EN + localized)
□ Privacy policy published
□ Signing configured (keystore / certificates)
□ Production build tested on real device
□ In-app purchase product created & tested
□ Content rating questionnaire completed
□ Release notes written
□ Store listing submitted
□ Review response plan ready
```

---

*Document maintained by Career Quest Team — Last updated February 26, 2026*
