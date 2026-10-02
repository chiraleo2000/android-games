# Requirements Document

## Introduction

เอกสารนี้กำหนดความต้องการ (requirements) สำหรับการทำให้แอป **Career Quest** พร้อมเผยแพร่จริงบน **Google Play** โดยเน้นแพลตฟอร์ม **Android เป็นหลักก่อน** (iOS อยู่นอกขอบเขตและถือเป็นงานอนาคต)

แนวทางยึดตามคู่มือ "AI Agent + IDE: Build, Deploy & Sell Mobile Apps" โดยปรับให้เข้ากับ tech stack จริงของโปรเจค คือ **React 19 + Vite 7 + Capacitor 6** (ไม่ใช่ Expo) เป้าหมายคือการได้ release build ที่ลงนาม (signed) ถูกต้อง สร้างเป็น Android App Bundle (AAB) ที่ผ่าน policy ปัจจุบันของ Google Play มีกลไกความเป็นส่วนตัว/การลบข้อมูลตามข้อกำหนด ผ่านการทดสอบอัตโนมัติและพร้อมทดสอบบนเครื่องจริง รวมถึงมีเอกสาร markdown หนึ่งไฟล์ที่สรุป **ขั้นตอนที่ต้องให้บุคคลทำเอง (manual steps)** ซึ่ง AI/agent ทำแทนไม่ได้

ขอบเขตแบ่งชัดเจนระหว่างสิ่งที่ AI/agent ทำได้ (code, config, build scripts, เอกสาร) กับสิ่งที่มนุษย์ต้องทำเอง (สร้างบัญชี Play Console, ยืนยันตัวตน, อัปโหลด build, กรอกฟอร์ม store listing / content rating / data safety, จัดการ secrets ของ keystore และการกดเผยแพร่ขั้นสุดท้าย)

## Glossary

- **Career_Quest_App**: แอปมือถือ Career Quest ที่ทำงานบน Android ผ่าน Capacitor (web assets ใน `dist` ห่อด้วย native shell)
- **Build_System**: ระบบ build ของโปรเจค ประกอบด้วย Vite (web) และ Gradle (Android native)
- **Release_Build**: ผลลัพธ์ build โหมด release ของ Android ที่ลงนามด้วย release/upload key
- **AAB**: Android App Bundle ไฟล์รูปแบบ `.aab` ที่ Google Play กำหนดให้ใช้สำหรับการเผยแพร่แอปใหม่
- **Upload_Keystore**: keystore ที่ใช้ลงนาม upload key สำหรับส่งขึ้น Play App Signing
- **Play_App_Signing**: บริการของ Google Play ที่ถือ app signing key และลงนาม artifact สุดท้ายที่ส่งถึงผู้ใช้
- **Gradle_Properties**: ไฟล์ `android/gradle.properties` ที่เก็บค่าอ้างอิง signing (`RELEASE_STORE_FILE`, `RELEASE_STORE_PASSWORD`, `RELEASE_KEY_ALIAS`, `RELEASE_KEY_PASSWORD`)
- **Target_API_Level**: ค่า `targetSdkVersion` ที่ประกาศใน Gradle config ของแอป
- **Play_Target_API_Policy**: นโยบายของ Google Play ที่กำหนด target API level ขั้นต่ำสำหรับแอปใหม่และการอัปเดต (ณ ปี 2025 คือ API level 35 / Android 15)
- **Data_Deletion_Feature**: ฟีเจอร์ภายในแอปที่ให้ผู้ใช้ล้างข้อมูลและความคืบหน้าทั้งหมดที่เก็บบนเครื่อง
- **Local_Storage_Layer**: ชั้นเก็บข้อมูลบนเครื่องของแอป ประกอบด้วย `@capacitor/preferences` และ `localStorage`
- **Privacy_Policy**: เอกสารนโยบายความเป็นส่วนตัวที่เผยแพร่ที่ URL สาธารณะที่เข้าถึงได้
- **Terms_Of_Service**: เอกสารข้อกำหนดการใช้งานที่เผยแพร่ที่ URL สาธารณะที่เข้าถึงได้
- **Support_Contact**: ช่องทางติดต่อฝ่ายสนับสนุน (URL หรืออีเมล) ที่ใช้ใน store listing และในแอป
- **Store_Listing_Assets**: ชุด asset สำหรับ store listing ได้แก่ app icon, feature graphic, screenshots และคำอธิบายแอป
- **Content_Rating**: ผลการจัดเรตเนื้อหาจากแบบสอบถาม content rating ของ Google Play
- **Data_Safety_Form**: แบบฟอร์ม Data Safety ใน Play Console ที่ประกาศการเก็บ/ใช้/แชร์ข้อมูลผู้ใช้
- **Validation_Scripts**: สคริปต์ตรวจสอบของโปรเจค ได้แก่ `validateAssets.js` และ `validateBuild.js`
- **Test_Suite**: ชุดทดสอบอัตโนมัติที่รันด้วย Vitest (`vitest --run`)
- **Error_Boundary**: คอมโพเนนต์ React ที่ดักจับ runtime error ไม่ให้แอปทั้งหน้าล่ม และแสดง fallback UI
- **Manual_Steps_Document**: ไฟล์ markdown ไฟล์เดียวที่สรุปขั้นตอนที่มนุษย์ต้องทำเองเพื่อเผยแพร่บน Google Play
- **Core_Flow**: ฟลo̶w หลักของแอปที่ผู้ใช้ใช้งาน ได้แก่ การเลือกอาชีพ (careers), แบบทดสอบ MBTI, การ resume/auto-save, การสลับภาษา และการสลับธีม

## Requirements

### Requirement 1: Signed และ Reproducible Android Release Build

**User Story:** As a maintainer, I want a signed and reproducible Android release build with secrets kept out of version control, so that I can produce a trustworthy artifact for Google Play without leaking credentials.

#### Acceptance Criteria

1. WHEN the `android:build:release` script is executed with valid signing configuration present, THE Build_System SHALL produce a signed Release_Build.
2. WHERE a `android/gradle.properties.example` template exists, THE Build_System SHALL document the required keys `RELEASE_STORE_FILE`, `RELEASE_STORE_PASSWORD`, `RELEASE_KEY_ALIAS`, and `RELEASE_KEY_PASSWORD` without containing real credential values.
3. THE Career_Quest_App repository SHALL exclude `android/gradle.properties`, Upload_Keystore files (`*.jks`, `*.keystore`), and signing credentials from version control via `.gitignore`.
4. IF the required signing properties are absent at build time, THEN THE Build_System SHALL fail the release build with a message that names the missing signing properties.
5. WHEN the same source commit and the same Upload_Keystore are used, THE Build_System SHALL produce a Release_Build with identical `versionCode` and `versionName` values as declared in the Android configuration.

### Requirement 2: Target API Level และ SDK Config ตาม Google Play Policy

**User Story:** As a maintainer, I want the Android configuration to meet Google Play's current API level policy and build a valid AAB, so that the submission is not rejected for outdated targeting.

#### Acceptance Criteria

1. THE Career_Quest_App SHALL declare a Target_API_Level that is greater than or equal to the minimum required by Play_Target_API_Policy (API level 35 as of 2025).
2. THE Career_Quest_App SHALL declare a `compileSdkVersion` greater than or equal to the declared Target_API_Level.
3. THE Career_Quest_App SHALL declare a `minSdkVersion` of 22 or higher.
4. WHEN the release bundle task is executed, THE Build_System SHALL produce an AAB file in the Android build output directory.
5. THE Career_Quest_App SHALL support 64-bit ABIs so that the produced AAB satisfies Google Play's 64-bit requirement.

### Requirement 3: Minimal และ Justified Android Permissions

**User Story:** As a privacy-conscious user, I want the app to request only the permissions it genuinely needs, so that I can trust an offline career app with minimal access.

#### Acceptance Criteria

1. THE Career_Quest_App SHALL declare only the `android.permission.INTERNET` permission in its Android manifest.
2. WHERE any permission other than `android.permission.INTERNET` is declared, THE Career_Quest_App SHALL document the justification for that permission in the project documentation.
3. THE Career_Quest_App SHALL operate its Core_Flow without requiring any runtime (dangerous) permission grant.

### Requirement 4: In-App Data Deletion ("Clear All Data")

**User Story:** As a user, I want a clear way to delete all my local data and progress, so that I can reset the app and comply with my own data-control expectations.

#### Acceptance Criteria

1. THE Career_Quest_App SHALL provide a user-facing Data_Deletion_Feature that is reachable from the app settings.
2. WHEN the user confirms the Data_Deletion_Feature action, THE Career_Quest_App SHALL remove all stored progress and preferences from the Local_Storage_Layer.
3. WHEN the Data_Deletion_Feature completes, THE Career_Quest_App SHALL display a confirmation that the data was deleted.
4. WHEN the user starts the Data_Deletion_Feature action, THE Career_Quest_App SHALL request an explicit confirmation before deleting any data.
5. WHEN the app is reopened after a completed Data_Deletion_Feature action, THE Career_Quest_App SHALL start with no restored prior progress.

### Requirement 5: Published Privacy Policy, Terms of Service และ Support Contact

**User Story:** As a store reviewer and as a user, I want accessible legal and support documents, so that the listing meets Google Play policy and users can get help.

#### Acceptance Criteria

1. THE Career_Quest_App SHALL provide a Privacy_Policy document hosted at a publicly accessible URL.
2. THE Career_Quest_App SHALL provide a Terms_Of_Service document hosted at a publicly accessible URL.
3. THE Career_Quest_App SHALL provide a Support_Contact reachable via a URL or an email address.
4. THE Career_Quest_App SHALL display an in-app link to the Privacy_Policy from the app settings.
5. THE Privacy_Policy SHALL state what data the Career_Quest_App stores on the device and SHALL state whether any data is transmitted off the device.
6. WHERE the Privacy_Policy, Terms_Of_Service, and Support_Contact URLs are finalized, THE project documentation SHALL record those URLs for use in the store listing.

### Requirement 6: Content Rating Readiness และ Store Listing Metadata/Assets

**User Story:** As a maintainer, I want the store listing assets and content-rating inputs ready and validated, so that I can complete the Play Console listing without missing requirements.

#### Acceptance Criteria

1. THE Store_Listing_Assets SHALL include an app icon of 512 x 512 pixels.
2. THE Store_Listing_Assets SHALL include a feature graphic of 1024 x 500 pixels.
3. THE Store_Listing_Assets SHALL include at least 2 phone screenshots.
4. THE Store_Listing_Assets SHALL include a short description of at most 80 characters and a full description of at most 4000 characters.
5. WHEN the `release:prepare` script is executed, THE Validation_Scripts SHALL verify that all required Store_Listing_Assets are present and SHALL report any missing asset.
6. THE project documentation SHALL record the content-rating questionnaire answers that describe the Career_Quest_App content.

### Requirement 7: Automated Verification และ Real-Device Readiness

**User Story:** As a maintainer, I want automated tests and build validation to pass and the release build to boot with working core flows, so that I can hand a trustworthy build to real-device testing.

#### Acceptance Criteria

1. WHEN the `test` script is executed, THE Test_Suite SHALL complete with all tests passing.
2. WHEN the `release:prepare` script is executed, THE Validation_Scripts SHALL complete without reporting a validation error.
3. WHEN the Release_Build is launched on an Android device or emulator, THE Career_Quest_App SHALL load the home screen without a startup crash.
4. WHEN a user exercises the Core_Flow on the Release_Build, THE Career_Quest_App SHALL complete career selection, the MBTI test, resume/auto-save, language switching, and theme switching.
5. THE project documentation SHALL describe the real-device test checklist covering the Core_Flow.

### Requirement 8: Error Handling และ On-Device Logging ที่เคารพความเป็นส่วนตัว

**User Story:** As a user and as a maintainer, I want the app to handle runtime errors gracefully and keep diagnostics on-device by default, so that reliability improves without undisclosed data collection.

#### Acceptance Criteria

1. WHERE a runtime error occurs in the React component tree, THE Error_Boundary SHALL catch the error and display a fallback UI instead of a blank screen.
2. WHEN the Error_Boundary displays its fallback UI, THE Career_Quest_App SHALL provide a user action to return to a working state.
3. THE Career_Quest_App SHALL store diagnostic log data on the device by default and SHALL NOT transmit diagnostic data off the device without disclosure.
4. IF any crash reporting or analytics that transmits data off the device is enabled, THEN THE Career_Quest_App SHALL obtain user consent before transmitting and SHALL declare the collection in the Data_Safety_Form.
5. WHEN a caught runtime error is recorded, THE Career_Quest_App SHALL exclude personally identifiable information from the recorded diagnostic data.

### Requirement 9: Manual Steps Document สำหรับการเผยแพร่บน Google Play

**User Story:** As the app owner, I want a single markdown file listing every human-only publishing step, so that I know exactly what I must do that the AI agent cannot do for me.

#### Acceptance Criteria

1. THE project SHALL provide a single Manual_Steps_Document in markdown format.
2. THE Manual_Steps_Document SHALL describe creating a Google Play Console account including the one-time 25 USD registration fee.
3. THE Manual_Steps_Document SHALL describe completing Google Play identity verification.
4. THE Manual_Steps_Document SHALL describe enrolling in Play_App_Signing and providing the Upload_Keystore.
5. THE Manual_Steps_Document SHALL describe uploading the AAB to a release track.
6. THE Manual_Steps_Document SHALL describe completing the store listing, the Content_Rating questionnaire, and the Data_Safety_Form.
7. THE Manual_Steps_Document SHALL describe the release progression from the internal track to the closed track to the production track including staged rollout.
8. THE Manual_Steps_Document SHALL distinguish each step that a human must perform from the steps already handled by the AI agent.
