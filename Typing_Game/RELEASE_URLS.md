# Release URLs

Replace these placeholders before publishing WordSprint (`com.wordstypinggame.app`).

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
- The player types topic words such as animals, food, and sports. There is no account.

## Real-device checklist

1. Cold start opens the topic menu without a crash.
2. Choose a topic and a difficulty, type a word, and see the score change.
3. Finish the round and see the score summary.
4. Open Settings, follow the privacy link, and confirm it uses the in-app privacy URL.
5. Choose Delete all local data, cancel once, then confirm. The fresh-start message appears.
6. Close and reopen the app. The previous score and preferences are gone.
