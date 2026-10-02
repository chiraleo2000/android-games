# Mobile Store Deployment Guide

This guide details the process of deploying Career Quest to the Google Play Store and Apple App Store.

## 📱 Google Play Store (Android)

### Prerequisites
1.  **Google Play Developer Account**: 
    -   **Cost**: $25 (One-time registration fee).
    -   **Sign up**: [Google Play Console](https://play.google.com/console).
2.  **Upload Key Store**: A keystore file to sign your app.

### Step 1: Prepare the Android Build
1.  **Generate Keystore** (if you haven't already):
    ```bash
    keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
    ```
    *Keep this file safe! If you lose it, you cannot update your app.*

2.  **Configure Signing in Gradle**:
    -   Open `android/app/build.gradle`.
    -   Add your keystore configuration in the `signingConfigs` block.
    -   Refer to [Android Deployment Docs](https://developer.android.com/studio/publish/app-signing).

3.  **Build the App Bundle (AAB)**:
    -   Run the following command in the `android` directory:
    ```bash
    cd android
    ./gradlew bundleRelease
    ```
    -   The output file will be at `android/app/build/outputs/bundle/release/app-release.aab`.

### Step 2: Upload to Google Play Console
1.  **Create App**: Log in to Play Console > **Create App**.
2.  **Fill Details**: enter App Name ("Career Quest"), Language, and App/Game type.
3.  **Store Listing**: Upload screenshots, icon (512x512), feature graphic (1024x500), and description.
4.  **Upload Bundle**: Go to **Production** > **Create new release** and upload your `.aab` file.
5.  **Content Rating**: Complete the questionnaire.
6.  **Pricing & Distribution**: Select "Free" or "Paid" and choose countries.
7.  **Review**: Submit for review. (Usually takes 2-7 days).

---

## 🍎 Apple App Store (iOS)

### Prerequisites
1.  **Apple Developer Account**:
    -   **Cost**: $99 / year.
    -   **Sign up**: [Apple Developer Program](https://developer.apple.com/programs/).
2.  **Mac Computer** with Xcode installed.

### Step 1: Prepare the iOS Build
1.  **Open Project in Xcode**:
    ```bash
    npx cap open ios
    ```
2.  **Configure Signing**:
    -   Click on the **App** project in the left navigator.
    -   Go to **Signing & Capabilities**.
    -   Select your **Team** (your Apple ID).
    -   Ensure "Automatically manage signing" is checked.
3.  **Version & Build**:
    -   Increment the **Version** (1.0.0) and **Build** (1) numbers for each upload.

### Step 2: Archive and Upload
1.  **Select Device**: Choose "Any iOS Device (arm64)" from the top build target menu.
2.  **Archive**: Go to **Product** > **Archive**.
3.  **Validate**: Once archived, the Organizer window opens. Click **Validate App**.
4.  **Distribute**: Click **Distribute App** > **App Store Connect** > **Upload**.
    -   Xcode will upload the build to App Store Connect.

### Step 3: App Store Connect
1.  **Create App**: Log in to [App Store Connect](https://appstoreconnect.apple.com/).
2.  **My Apps** > **+** > **New App**.
3.  **Fill Details**: Name, Primary Language, Bundle ID, SKU.
4.  **App Information**:
    -   **Privacy Policy URL**: Required.
    -   **Screenshots**: Need iPhone 6.5" and 5.5" displays (and iPad if supported).
5.  **Select Build**: Scroll down to "Build" and select the version you just uploaded via Xcode.
6.  **Submit for Review**: (Usually takes 24-48 hours).

---

## 💰 Summary of Costs

| Store | Cost | Frequency |
| :--- | :--- | :--- |
| **Google Play Store** | **$25** | One-time payment |
| **Apple App Store** | **$99** | Yearly subscription |
| **Total (Year 1)** | **$124** | |

## 🛠️ Validation Checklist
Before submitting, ensure:
-   [ ] **Icons**: All icon sizes are generated properly (`npx cap install @capacitor/assets`).
-   [ ] **Splash Screen**: Configured for both light and dark modes.
-   [ ] **Permissions**: `AndroidManifest.xml` and `Info.plist` only request used permissions.
-   [ ] **Version Code**: Incremented for every new update.
-   [ ] **Privacy Policy**: A hosted URL is required for both stores.
