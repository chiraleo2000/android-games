# Release URLs

Replace these placeholders before a store submission.

- Legal name: [LEGAL_NAME]
- Support email: [SUPPORT_EMAIL]
- Effective date: [EFFECTIVE_DATE]
- Privacy policy URL: https://example.com/inventors-workshop/privacy
- Terms of service URL: https://example.com/inventors-workshop/terms

The in-app privacy link is the single constant `PRIVACY_POLICY_URL` in `src/privacy.ts`. Point that constant at the hosted privacy policy before release.

Copy `android/gradle.properties.example` to `android/gradle.properties` for a local debug build. Replace `CHANGEME` signing values only on a release machine. Do not commit keystores or the real `gradle.properties`. A release task fails and names each missing `RELEASE_*` property until those values are real.

Play Console steps that a person must do (account, identity, upload key, listing forms) belong in the repository-root `GOOGLE_PLAY_HUMAN_STEPS.md`. This app's local checks are:

```
npm test
npm run validate:release
npm run build
npx cap sync android
```

From `android/`, `bundleRelease` is the store bundle task. It will not succeed until the upload keystore properties are filled in. Do not commit that keystore.
