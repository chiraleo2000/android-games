# Release URLs

Replace the placeholders before you publish LogicLabs. The app does not request these addresses. In-app Privacy Policy and Terms of Service links use the single `LEGAL_LINKS` constant and open the copies bundled in the app.

- Legal name: [LEGAL_NAME]
- Support email: [SUPPORT_EMAIL]
- Effective date: [EFFECTIVE_DATE]
- Privacy policy URL (store listing): https://example.com/logiclabs/privacy
- Terms of service URL (store listing): https://example.com/logiclabs/terms
- Package name: com.logiclabs.codeescape
- App name: LogicLabs
- versionName: 1.0.0
- versionCode: 1

## Permissions

The manifest declares `android.permission.INTERNET` only. Capacitor's WebView loads the bundled game from `https://localhost` inside the app, and Android requires that permission for the local loader. The game does not contact a server. There is no `RECORD_AUDIO` permission. A non-exported FileProvider is present from the Capacitor template and is not used to share player data. `allowBackup` may let Android back up on-device storage to the player's own Google account. The app does not receive that backup.

## Content rating questionnaire

- Violence: none
- Sexual content: none
- Language: none
- Controlled substance: none
- User-generated content shared with other users: no
- Social features, chat, or user accounts: no
- Location, ads, or in-app purchases: no
- Target audience: general, including older children learning programming. The app does not collect personal information.
- Suggested Play rating: Everyone

## Real-device checklist

- Cold start opens the menu without a crash, with no network connection.
- Easy, Medium, Hard, Expert, and Master each start a maze.
- Tap or drag Move, Jump, Turn, Loop, and If onto the program, including blocks inside Loop and If.
- Run reaches the exit or loses on battery, time, or move limit. Reset puts the robot back and keeps the blocks.
- Progress and Achievements match the saved stars and unlocks after a win.
- Settings turns sound off and on. Sound is a beep generated in the app.
- Clear All Data asks for confirmation, reports that data was deleted, and a fresh launch does not restore progress.
- Privacy Policy opens from Settings.
- A thrown error shows the fallback screen, and Back to menu returns to the game. The on-device log stores only a short message.
