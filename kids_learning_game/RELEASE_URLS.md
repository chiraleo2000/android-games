# Release URLs

Replace the placeholders before you publish Word Blitz. The app does not request these addresses. In-app Privacy Policy and Terms of Service links use the single `LEGAL_LINKS` constant and open the pages bundled with the app.

- Legal name: [LEGAL_NAME]
- Support email: [SUPPORT_EMAIL]
- Effective date: [EFFECTIVE_DATE]
- Privacy policy URL (store listing): https://example.com/wordblitz/privacy
- Terms of service URL (store listing): https://example.com/wordblitz/terms
- Package name: com.wordblitz.kids
- App name: Word Blitz
- versionName: 1.0.0
- versionCode: 1

## Permissions

The manifest declares `android.permission.INTERNET` only. Capacitor's WebView loads the bundled game from `https://localhost` inside the app, and Android requires that permission for the local loader. The game does not contact a server. There is no `RECORD_AUDIO` permission. `allowBackup` may let Android back up on-device scores to the player's own Google account. The app does not receive that backup.

## Content rating questionnaire

- Violence: none
- Sexual content: none
- Language: none
- Controlled substance: none
- User-generated content shared with other users: no
- Social features, chat, or user accounts: no
- Location, ads, or in-app purchases: no
- Target audience: children. This is a kids typing game and is suitable for the Families program. It does not collect personal information.
- Suggested Play rating: Everyone

## Real-device checklist

- Cold start shows the home screen without a crash, with no network connection.
- Pick English or Spanish, pick a topic, and start a timed round.
- Type the picture word, see the score change with the existing streak rules, and finish the round with stars.
- Clear saved scores from Settings and from the game-over screen. Each path asks for confirmation, reports that scores were deleted, and a fresh launch does not restore them.
- Privacy Policy opens from the home screen and from Settings.
- A thrown error shows the fallback screen, and Back to menu returns to the game. The on-device log stores only a short message.
