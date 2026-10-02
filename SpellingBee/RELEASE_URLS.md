# Release URLs

Replace these placeholders before publishing SpellingBee (`com.wordsprint.bilingual`).

- Legal name: [LEGAL_NAME]
- Support email: [SUPPORT_EMAIL]
- Effective date: [EFFECTIVE_DATE]
- Privacy policy URL: https://example.invalid/privacy
- Terms of service URL: https://example.invalid/terms

Data stays on the device. The app has no account, no ads, and no off-device transmission.

## Permissions

- `android.permission.INTERNET` is declared for the Android WebView shell. The game does not upload scores, preferences, or typed answers.
- The app does not request `RECORD_AUDIO` or any other dangerous permission.
- The FileProvider component is not exported. It is not a permission.

## Content rating answers

- Violence: none
- Sexual content: none
- Profanity or crude language: none
- Controlled substances: none
- Gambling: none
- User-generated content shared with other players: none
- Location sharing: none
- Personal information collected by the app: none
- Ads or digital purchases: none
- The player spells topic words. Hints are the letter count and the first letter. There is no account.

## Real-device checklist

1. Cold start opens the level menu without a crash.
2. Choose easy, medium, or hard. The hint shows the letter count and first letter.
3. Spell a word correctly and see the streak and score change.
4. Finish the round from the timer or from five misses, and see the score summary.
5. Open Settings, follow the privacy link, and confirm it uses the in-app privacy URL.
6. Choose Delete all local data, cancel once, then confirm. The fresh-start message appears.
7. Close and reopen the app. The previous score, streak, and theme choice are gone.
