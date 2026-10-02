# Android permissions — Inventors Workshop

The manifest declares one permission:

- `android.permission.INTERNET` — the Capacitor Android shell loads the bundled workshop through the WebView local origin. The game does not request remote pages, accounts, ads, or analytics. Workshop data stays on the device.

No other permission is declared. The app does not record audio, so it does not request `RECORD_AUDIO`. It does not ask for location, camera, microphone, contacts, or storage access. JSON export and import use the system file picker from a user tap.

`android:allowBackup` is `false` so a device backup cannot restore a workshop after Clear All Data.
