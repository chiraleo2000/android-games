# Release URLs

Replace these placeholders before a store submission.

- Legal name: [LEGAL_NAME]
- Support email: [SUPPORT_EMAIL]
- Effective date: [EFFECTIVE_DATE]
- Privacy policy URL: https://example.com/learning-gen-alpha/privacy
- Terms of service URL: https://example.com/learning-gen-alpha/terms

The in-app privacy link is the single constant `PRIVACY_POLICY_URL` in `src/privacy.ts`.

Copy `android/gradle.properties.example` to `android/gradle.properties` for a local debug build. Replace `CHANGEME` signing values only on a release machine. Do not commit keystores or the real `gradle.properties`. Release tasks fail and name `RELEASE_STORE_FILE`, `RELEASE_STORE_PASSWORD`, `RELEASE_KEY_ALIAS`, and `RELEASE_KEY_PASSWORD` until those values are real.

Package: `com.learninggenalpha.app`. `versionCode` 1 and `versionName` `1.0.0` are literals in `android/app/build.gradle`.

From `packages/client`, build the web app with `npm run build`, copy it into the Android project with `npx cap sync android`, then create the bundle with `gradlew bundleRelease` only after the real signing properties are set. Debug builds do not need a keystore.

## Content rating questionnaire

Answer the Play Console questionnaire from this app, not from a generic kids template.

- Violence: none. No fighting, blood, or weapons.
- Sexual content or nudity: none.
- Language: no profanity.
- Controlled substances: none.
- Gambling: none. No real-money purchases and no simulated gambling.
- Horror: none.
- User interaction: the optional Online lobby can exchange chat if a server is running. Solo play has no chat and no accounts. Answer yes to user interaction because that lobby remains in the package.
- Shares location: no.
- Digital purchases: no.
- Unrestricted web browsing: no.
- Personal information collected by the app: no. Progress stays on the device.
- Target audience: educational puzzle play. Do not enroll in the Families program until a person reviews the optional online chat.

## Data safety

- Data is stored on the device only for solo progress, hints, score, and local error notes.
- Data is not sent off the device by the solo game.
- Data is not sold.
- Users can delete it in Settings with Clear All Data.
