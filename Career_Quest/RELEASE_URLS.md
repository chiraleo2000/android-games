# Release URLs

Replace the placeholders, host the policy and terms, then point `src/config/legal.js` at the final public URLs. The in-app Settings links read that one file.

| Item | Value |
| --- | --- |
| Legal name | [LEGAL_NAME] |
| Effective date | [EFFECTIVE_DATE] |
| Privacy Policy URL | `https://example.invalid/career-quest/privacy` (`PRIVACY_POLICY_URL`) |
| Terms of Service URL | `https://example.invalid/career-quest/terms` (`TERMS_OF_SERVICE_URL`) |
| Support email | [SUPPORT_EMAIL] (`SUPPORT_EMAIL`) |
| Privacy document | `PRIVACY_POLICY.md` |
| Terms document | `TERMS_OF_SERVICE.md` |

## Data safety (for the Play Console form)

- Data stored: career results, personality results, progress, and preferences, on the device only.
- Account: none.
- Ads: none.
- Off-device transmission of that data: none.
- `INTERNET`: Capacitor WebView.
- `FileProvider`: `exported="false"`, local export and import.
- `allowBackup`: may include the app data in the user's own Google backup.

## Content rating questionnaire

Suggested answers for the Play content-rating questionnaire. Confirm them in Play Console before submission.

| Question | Answer |
| --- | --- |
| Violence | None |
| Sexual content or nudity | None |
| Profanity or crude language | None |
| Controlled substances | None |
| Gambling, including simulated gambling | None |
| Users interact or share content with other users | No |
| User-generated content shared publicly | No |
| Shares the user's location | No |
| Ads | None |
| Expected rating | Everyone |

The app is a career and personality quiz. It has no account and does not transmit career, personality, progress, or preference data off the device.
