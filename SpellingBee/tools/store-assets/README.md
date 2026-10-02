# SpellingBee Dictionary - Google Play Store Assets

Generated images for the Google Play Console live under this folder.

## Commands

```powershell
npm run store:assets
npm run store:validate
```

`npm run store:assets` builds the Vite app, starts a local preview server, captures real UI screenshots, creates the Play Console app icon and feature graphic, and writes `reports/asset-manifest.json`.

## Output Folders

- `app-icon/app-icon-512.png` - PNG, 512 x 512 px, under 1 MB.
- `feature-graphic/feature-graphic-1024x500.png` - PNG, 1024 x 500 px, under 15 MB.
- `screenshots/phone/portrait/` - phone portrait screenshots.
- `screenshots/phone/landscape/` - phone landscape screenshots.
- `screenshots/tablet/portrait/` - tablet portrait screenshots.
- `screenshots/tablet/landscape/` - tablet landscape screenshots.

Each screenshot folder contains:

- `01-start-menu.png`
- `02-active-game.png`
- `03-game-over.png`

## Play Console Release Prep

```powershell
npm run store:assets
npm run store:validate
npm run android:bundle:release
```

The Android bundle is produced from the Capacitor project. Google Play requires a signed Android App Bundle with your upload key or Play App Signing setup.

On this machine, make sure Gradle uses a full JDK, not a JRE:

```powershell
$env:JAVA_HOME = 'C:\Program Files\Java\jdk-21.0.11'
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
```

To sign release bundles, copy `android/keystore.properties.example` to `android/keystore.properties`, create or place your upload keystore at the path in `storeFile`, and fill in your real passwords. `android/keystore.properties` and keystore files are ignored by git.

You can also use environment variables instead of `android/keystore.properties`:

```powershell
$env:WORDSPRINT_UPLOAD_STORE_FILE = 'upload-keystore.jks'
$env:WORDSPRINT_UPLOAD_STORE_PASSWORD = '<store password>'
$env:WORDSPRINT_UPLOAD_KEY_ALIAS = 'upload'
$env:WORDSPRINT_UPLOAD_KEY_PASSWORD = '<key password>'
```