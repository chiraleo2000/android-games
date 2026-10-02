# Release URLs and Play build

**Effective date:** [EFFECTIVE_DATE]
**Publisher:** [LEGAL_NAME]
**Support:** [SUPPORT_EMAIL]

Dead City Escape is a violent game. It has no account. It is not a Families app. Progress, settings, cache, and the diagnostic log stay on this device and are not sent off the device.

## Identity

| Item | Value |
| --- | --- |
| Package | `com.studio.deadcityescape` |
| versionName | `1.0.0` (`PlayReleaseInfo.VersionName`) |
| versionCode | `1` (`PlayReleaseInfo.VersionCode`) |
| Target SDK | 36 |
| ABI | ARM64 only |
| Scripting | IL2CPP |
| Min SDK | 25 (not below 22) |
| Privacy policy URL | https://example.com/dead-city-escape/privacy |

The in-app button opens `PlayReleaseInfo.PrivacyPolicyUrl` and no other privacy address. After [LEGAL_NAME] replaces the placeholders, host `PRIVACY_POLICY.md` at that URL and keep the constant in sync.

## Store files

- `store/icon_512.png`
- `store/feature_graphic_1024x500.png`
- `store/screenshot_01_menu.png`
- `store/screenshot_02_city.png`
- `store/short_description.txt` (80 characters or fewer)
- `store/full_description.txt` (4000 characters or fewer)
- `store/content_rating_answers.md`

## Permissions

The game does not request `RECORD_AUDIO`. It plays sound; it does not record a microphone. It does not request location. `ForceInternetPermission` is off. No account permission is required because there is no account.

## Signing

Copy `keystore.properties.example` to `keystore.properties` and fill in the real upload key. Do not commit `keystore.properties`, `.jks`, or `.keystore`.

Required properties:

- `RELEASE_STORE_FILE`
- `RELEASE_STORE_PASSWORD`
- `RELEASE_KEY_ALIAS`
- `RELEASE_KEY_PASSWORD`

The Android AAB menu reads that file. If a property is missing, blank, or still `CHANGEME`, the release build stops and names the missing property. This repository does not contain a keystore.

## Build

Unity `6000.3.11f1` was not started from this workspace because that editor was not installed at `C:\Program Files\Unity\Hub\Editor\6000.3.11f1\Editor\Unity.exe`. Open the project in that editor, then use **Dead City Escape > Build Android AAB** or **Build > Build Android AAB**.

Command line, from this folder, after the keystore file exists:

```text
"C:\Program Files\Unity\Hub\Editor\6000.3.11f1\Editor\Unity.exe" -batchmode -nographics -quit -projectPath . -executeMethod BuildScript.BuildAndroid
```

The menu sets the package id, version constants, target SDK 36, and ARM64. It enables 16 KB page size when `PlayerSettings.Android.use16KbPageSize` (or `enable16KbPageSize`) exists. `mainTemplate.gradle` keeps native libraries uncompressed (`useLegacyPackaging false`) and ships `arm64-v8a` only.

Output: `build/Android/DeadCityEscape.aab`

Check the listing without Unity:

```text
powershell -NoProfile -File .\validate-play-release.ps1
```

Inside the editor: **Dead City Escape > Validate Play Release**.

## People still have to do

[LEGAL_NAME] creates the upload keystore, replaces [SUPPORT_EMAIL] and [EFFECTIVE_DATE], hosts the privacy policy, and uploads the AAB in Play Console. Do not enroll this violent game in the Families program. Data safety: data stays on this device and is not sent off the device.
