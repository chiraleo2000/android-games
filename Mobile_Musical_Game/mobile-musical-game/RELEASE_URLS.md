# Release URLs

Replace these placeholders before a store submission.

- Legal name: [LEGAL_NAME]
- Support email: [SUPPORT_EMAIL]
- Effective date: [EFFECTIVE_DATE]
- Privacy policy URL: https://example.com/musical-instruments/privacy
- Terms of service URL: https://example.com/musical-instruments/terms

The in-app privacy link is the single constant `PRIVACY_POLICY_URL` in `src/privacy.ts`.

Copy `android/gradle.properties.example` to `android/gradle.properties` for a local build. Do not commit keystores or the real `gradle.properties`. A release build fails and names `RELEASE_STORE_FILE`, `RELEASE_STORE_PASSWORD`, `RELEASE_KEY_ALIAS`, or `RELEASE_KEY_PASSWORD` when that property is missing or still `CHANGEME`.

## Permissions

The app plays synthesized sound. It does not record.

- `INTERNET` is the normal Expo/React Native permission. The app does not send preferences, error logs, or audio off the device.
- `VIBRATE` is used only when haptic feedback is enabled in Settings.
- `RECORD_AUDIO`, microphone access, `MODIFY_AUDIO_SETTINGS`, and external storage permissions are blocked.
- `SYSTEM_ALERT_WINDOW` is present only on the debug manifest for the development overlay.
