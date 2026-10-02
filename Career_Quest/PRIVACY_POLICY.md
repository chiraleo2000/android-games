# Privacy Policy

**Effective date:** [EFFECTIVE_DATE]

**Operator:** [LEGAL_NAME]

**Support:** [SUPPORT_EMAIL]

Career Quest (`com.careerquest.app`) is a career exploration and personality quiz that runs on your device. This policy describes the data that stays on that device.

Replace `[LEGAL_NAME]`, `[SUPPORT_EMAIL]`, and `[EFFECTIVE_DATE]` before this document is published.

## Data stored on the device

The app stores only these categories, on the device, through on-device storage (Capacitor Preferences and the WebView's local storage):

- Career results
- Personality results
- Progress, including an in-progress session
- Preferences, including theme, language, music, and volume

The app has no account. It does not ask for a name, email address, phone number, or other account identifier. It shows no ads. Career results, personality results, progress, and preferences are not transmitted off the device. There is no analytics or advertising service in the app. Diagnostic notes from an on-screen error stay in memory on the device and are not uploaded.

## Android permission and components

- **INTERNET.** The app declares `android.permission.INTERNET` because the Capacitor WebView uses it to load the app interface. That permission is not used to upload career results, personality results, progress, or preferences.
- **FileProvider.** A `FileProvider` is declared with `android:exported="false"`. It is used only so a local export or import file can be shared on the device. It is not a public provider.
- **allowBackup.** `android:allowBackup` is true. Android may include this app's on-device data in the user's own Google backup of that device. That backup belongs to the user's Google account. Career Quest does not receive a copy of it.

## Deleting data

Settings includes Clear All Data. After you confirm, the app removes the stored career results, personality results, progress, and preferences from the device.

You can also export or import a JSON backup on the device. That file stays where you save it. The app does not upload it.

## Contact

[LEGAL_NAME] — [SUPPORT_EMAIL]
