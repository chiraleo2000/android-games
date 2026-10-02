# Google Play Release Checklist

App name: WordSprint
Android package ID: com.wordstypinggame.app
Release artifact: Android App Bundle (.aab)

## Local verification

Run the web test suite:

```powershell
npm test
```

Build the web app and sync Capacitor:

```powershell
npm run build
npm run mobile:sync
```

Open Android Studio:

```powershell
npm run mobile:android
```

Let Gradle sync finish, then run the app on an emulator or physical Android device.

Run Android unit tests:

```powershell
cd android
.\gradlew.bat testDebugUnitTest
```

Run instrumented Android tests with an emulator or device connected:

```powershell
cd android
.\gradlew.bat connectedDebugAndroidTest
```

## Upload key

Create a new upload keystore before the first Play Console upload. Keep the keystore and passwords private.

Suggested file names:

- Keystore: `android/app/words-typing-game-upload.jks`
- Local signing properties: `android/keystore.properties`

Copy `android/keystore.properties.example` to `android/keystore.properties`, then replace the placeholder values. Both `.jks` files and `android/keystore.properties` are ignored by Git.

## Release bundle

After the upload key is configured, generate the Play upload bundle:

```powershell
npm run build
npm run mobile:sync
cd android
.\gradlew.bat bundleRelease
```

The release bundle is generated under `android/app/build/outputs/bundle/release/`.

## Real-device core flow

1. Cold start opens the topic menu without a crash.
2. Choose one of the original topics and a difficulty, type the word, and see the score change.
3. Let the round end and confirm the score summary is shown.
4. In Settings, open the privacy link, then delete all local data only after confirming. Reopen the app and confirm the old score is gone.

## Play Console

1. Create a new app named Words Typing Game.
2. Enroll in Play App Signing.
3. Upload the release `.aab` to the Internal testing track first.
4. Complete the store listing, screenshots, app icon, feature graphic, privacy policy, data safety form, content rating, and target audience declarations.
5. Because this app targets Kids / Families, complete the Families policy declarations and verify all content, ads, privacy, and data collection answers are child-safe.
6. Install the internal test build from the Play testing link and smoke test gameplay before production rollout.
