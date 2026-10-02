# Implementation Plan: Android Play Release Readiness

## Overview

แผนการ implement นี้แปลง design (release-readiness / hardening ของ Career Quest บน React 19 + Vite 7 + Capacitor 6, JavaScript ES modules, ทดสอบด้วย Vitest) ให้เป็นชุด coding/config/doc/test tasks แบบ incremental งานนี้ **ไม่ใช่การ rewrite** — แก้เท่าที่จำเป็นในแอปที่ทำงานได้อยู่แล้ว

ลำดับงาน: เริ่มจาก build/signing/SDK config → ปิด behavioral gaps (`clearAllData`, mount `ErrorBoundary`, in-app privacy link) → validation scripts → เอกสาร hostable + manual steps แต่ละ task อ้างอิง requirement clause และ task ทดสอบวางใกล้ implementation เพื่อจับ error เร็ว

**ภาษา implementation:** JavaScript (ES modules) สำหรับโค้ด/สคริปต์/เทสต์; Groovy สำหรับ Gradle config; Markdown สำหรับเอกสาร — ตรงกับ tech stack เดิมของโปรเจค ไม่มี pseudocode ใน design จึงไม่ต้องเลือกภาษาเพิ่ม

**ขอบเขตที่ตัดออก:** ขั้นตอนที่ **มนุษย์เท่านั้นทำได้** (สร้างบัญชี Play Console, ค่าธรรมเนียม, identity verification, สร้าง keystore, host เอกสารที่ URL สาธารณะ, อัปโหลด AAB, กรอกฟอร์ม Play Console, กดเผยแพร่) **ไม่ใช่ executable tasks** — จะถูกบันทึกเป็นเนื้อหาใน `docs/GOOGLE_PLAY_MANUAL_STEPS.md` (task 9.x เขียน *เอกสาร* ที่อธิบายขั้นเหล่านั้น ซึ่งเป็นงานที่ agent ทำได้)

## Tasks

- [ ] 1. Harden signing config และกัน secrets ออกจาก version control (C1)
  - [ ] 1.1 Guard `signingConfigs.release` และ fail release build ด้วยข้อความระบุ property ที่ขาด
    - แก้ `android/app/build.gradle`: ห่อ block `signingConfigs.release` ด้วยการเช็ค `project.hasProperty(...)` ของ `RELEASE_STORE_FILE`, `RELEASE_STORE_PASSWORD`, `RELEASE_KEY_ALIAS`, `RELEASE_KEY_PASSWORD` และสร้าง release signingConfig เฉพาะเมื่อครบ (กัน configuration-time crash)
    - เพิ่ม `gradle.taskGraph.whenReady` ที่ `throw new GradleException(...)` ระบุชื่อ property ที่ขาด เฉพาะเมื่อ task graph มี task ที่ชื่อมี `release` (ไม่ fail `assembleDebug`)
    - ข้อความ error ต้องแนะนำให้ copy `android/gradle.properties.example` → `android/gradle.properties`
    - _Requirements: 1.1, 1.4_

  - [ ] 1.2 สร้าง template `android/gradle.properties.example`
    - สร้างไฟล์ใหม่ประกาศ key `RELEASE_STORE_FILE`, `RELEASE_STORE_PASSWORD`, `RELEASE_KEY_ALIAS`, `RELEASE_KEY_PASSWORD` ด้วย placeholder (`CHANGEME`) ไม่มี credential จริง
    - ใส่ comment เตือนว่าให้ copy เป็น `android/gradle.properties` และห้าม commit ไฟล์จริง
    - _Requirements: 1.2_

  - [ ] 1.3 เพิ่มกฎ `.gitignore` กัน `android/gradle.properties` แต่คง `.example`
    - แก้ `.gitignore` ที่ root (หรือ `android/.gitignore` ตามโครงสร้างจริง) เพิ่ม `android/gradle.properties` และ `!android/gradle.properties.example`
    - ตรวจว่า `*.jks` / `*.keystore` ยังถูกกันอยู่ (คงเดิม)
    - _Requirements: 1.3_

- [ ] 2. Bump SDK/compile config ให้ตรง Google Play policy 2025 (C2)
  - [ ] 2.1 ขึ้น SDK เป็น 35 ทั้งใน `variables.gradle` และ `build.gradle`
    - แก้ `android/variables.gradle`: `compileSdkVersion = 35`, `targetSdkVersion = 35`
    - แก้ `android/app/build.gradle`: `compileSdk 35`, `targetSdkVersion 35` (hardcode จึงต้องแก้แยกจาก variables)
    - คง `minSdkVersion 22` และ abiFilters/bundle splits เดิมไม่แตะ
    - _Requirements: 2.1, 2.2, 2.3_

- [ ] 3. แก้ `clearAllData` ให้ลบข้อมูลทั้งหมด (progress + preferences + legacy keys) (C4)
  - [ ] 3.1 Rewrite `clearAllData` ใน `src/utils/dataExportImport.js` ให้ลบทุก key ผ่าน StorageService
    - นิยาม `ALL_STORAGE_KEYS` ครอบ progress (`career_results`, `personality_results`, `careerQuestState`), preferences (`theme`, `careerquest_language`, `careerquest_music`, `careerquest_volume`) และ legacy keys (`careerquest_career_results`, `careerquest_personality_results`, `careerquest_statistics_cache`)
    - ลบทุก key ด้วย `StorageService.remove(key)` (StorageService = canonical layer), คืน `{ success: true }` เมื่อสำเร็จ และ `{ success: false, error }` เมื่อ fail
    - ลบ comment/behavior เดิม "Keep preferences"
    - _Requirements: 4.2, 4.5_

  - [ ] 3.2 รีเซ็ต preferences เป็น sensible defaults หลังล้าง
    - หลังลบ key ตั้ง default: `theme` = ค่า default ของ `ThemeContext`, `careerquest_language` = `'en'`, music/volume = default — ให้เปิดแอปใหม่เหมือนติดตั้งครั้งแรก
    - ตรวจว่า flow reset (reuse `window.location.reload()` ของ import flow) ทำให้ state machine เริ่มที่ `HOME` โดยไม่มี resume
    - _Requirements: 4.2, 4.5_

  - [ ]* 3.3 Write property test: Clear All Data ล้างทุก key (Property 1)
    - **Property 1: Clear All Data ล้างทุก key ที่แอปเก็บ**
    - **Validates: Requirements 4.2, 4.5**
    - ใช้ `fast-check` ≥ 100 iterations, generator สุ่มชุด key/ค่าใน in-memory mock ของ Preferences + localStorage; หลัง `clearAllData()` ยืนยัน `get` ทุก key ใน `ALL_STORAGE_KEYS` คืน `null`
    - Tag ไฟล์เทสต์ด้วย comment: `// Feature: android-play-release-readiness, Property 1: Clear All Data ล้างทุก key ที่แอปเก็บ`

  - [ ]* 3.4 Write property test: Clear All Data เป็น idempotent (Property 2)
    - **Property 2: Clear All Data เป็น idempotent**
    - **Validates: Requirements 4.2**
    - ใช้ `fast-check` ≥ 100 iterations; เรียก `clearAllData()` สองครั้งติดกัน ยืนยันผลปลายทางเท่ากับเรียกครั้งเดียว (ทุก key = `null`) และครั้งที่สองไม่ error
    - Tag ไฟล์เทสต์ด้วย comment: `// Feature: android-play-release-readiness, Property 2: Clear All Data เป็น idempotent`

  - [ ]* 3.5 Write example-based unit tests สำหรับ `clearAllData`
    - ตั้งค่า StorageService ให้มีทั้ง progress + preferences, ยืนยันหลังเรียกทุก key = `null` และ `success: true`
    - กรณี `StorageService.remove` ล้มเหลว ยืนยันคืน `{ success: false, error }`
    - _Requirements: 4.2, 4.3_

- [ ] 4. Mount ErrorBoundary และทบทวน PII ของ ErrorLogger (C8)
  - [ ] 4.1 Wrap `<App/>` ด้วย `ErrorBoundary` ใน `src/main.jsx`
    - แก้ `src/main.jsx` ให้ render `<ErrorBoundary><App/></ErrorBoundary>` (component + ปุ่ม recovery มีอยู่แล้ว ไม่ต้องสร้างใหม่)
    - _Requirements: 8.1, 8.2_

  - [ ] 4.2 ทบทวน/ตัด PII ออกจาก `ErrorLogger.logError`
    - ปรับ `src/utils/ErrorLogger.js` (หรือ path จริงของ ErrorLogger) ให้ไม่บันทึก field ที่ระบุตัวตนได้ (ทบทวน `userAgent` และ `window.location.href`); คงเก็บ `timestamp`, `message`, `stack`, `context.componentStack`
    - ยืนยันว่า log ยังอยู่ on-device (in-memory, bounded 100) ไม่ส่งออกนอกเครื่อง
    - _Requirements: 8.3, 8.5_

  - [ ]* 4.3 Write unit tests: ErrorBoundary mount + ErrorLogger PII
    - render tree ที่โยน error แล้วยืนยันเห็น fallback UI + ปุ่ม "Try Again" / "Go Home"
    - ยืนยัน diagnostic entry ไม่มี field เนื้อหาผู้ใช้ / PII
    - _Requirements: 8.1, 8.2, 8.5_

- [ ] 5. เพิ่ม in-app Privacy & Legal link ใน Settings (C5)
  - [ ] 5.1 เพิ่ม section "Privacy & Legal" + ลิงก์ Privacy Policy ใน `SettingsModal.jsx`
    - สร้างค่าคงที่ `PRIVACY_POLICY_URL` (placeholder เดียวแก้ที่เดียว) และ render ลิงก์ที่เปิดด้วย `window.open(url, '_system')` หรือ anchor `target="_blank"` (ทำงานใน Capacitor WebView)
    - _Requirements: 5.4_

  - [ ]* 5.2 Write unit test: SettingsModal render privacy link
    - ยืนยัน `SettingsModal` render ลิงก์ Privacy Policy ที่ชี้ไป `PRIVACY_POLICY_URL`
    - _Requirements: 5.4_

- [ ] 6. Checkpoint — ensure runtime/code changes และ tests ผ่าน
  - รัน `npm test` (`vitest --run`) ให้ผ่านทั้งหมด; Ensure all tests pass, ask the user if questions arise.
  - _Requirements: 7.1_

- [ ] 7. ขยาย validation scripts ให้เป็น release gate (C6, C7)
  - [ ] 7.1 ขึ้น `MIN_TARGET_SDK = 35` ใน `scripts/validateBuild.js`
    - เปลี่ยนค่า `MIN_TARGET_SDK` จาก 34 → 35 และยืนยันว่า fail เมื่อ targetSdk < 35 หรือ signing properties ขาด
    - _Requirements: 2.1, 1.4, 7.2_

  - [ ] 7.2 เพิ่ม store-listing checks ใน `scripts/validateAssets.js`
    - ตรวจมีไฟล์ `docs/store_assets/icon_512.png` และ `docs/store_assets/feature_graphic_1024x500.png`
    - นับ screenshot ใน `docs/store_assets/` ให้ ≥ 2
    - ตรวจความยาว description: short ≤ 80 ตัวอักษร, full ≤ 4000 ตัวอักษร (อ่านจากไฟล์ที่กำหนด แยก short/full ให้ชัด)
    - รายงาน asset/field ที่ขาดและ `exit(1)` ให้รันผ่าน `release:prepare`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [ ]* 7.3 Write script-level tests สำหรับ validateBuild/validateAssets
    - ยืนยัน `validateBuild.js` fail เมื่อ targetSdk < 35 / signing ขาด; `validateAssets.js` fail เมื่อ store asset ขาดหรือ description เกินความยาว
    - _Requirements: 2.1, 1.4, 6.5, 7.2_

- [ ] 8. เพิ่ม `fast-check` dependency และยืนยัน release:prepare ผ่าน
  - [ ] 8.1 เพิ่ม `fast-check` ลง devDependencies
    - เพิ่ม `fast-check` ใน `package.json` devDependencies (จำเป็นสำหรับ property tests task 3.3/3.4) แล้วติดตั้ง
    - _Requirements: 7.1_

- [ ] 9. เขียนเอกสาร legal, release URLs และ permissions justification (C3, C5)
  - [ ] 9.1 เขียน `PRIVACY_POLICY.md` และ `TERMS_OF_SERVICE.md` (hostable)
    - สร้าง 2 ไฟล์ (root หรือ `docs/`) โดย privacy policy ระบุชัด: แอปเก็บข้อมูลใดบนเครื่อง (career/personality results, progress, preferences ผ่าน StorageService) และ **ไม่มีการส่งข้อมูลออกนอกเครื่อง**; ใช้ draft ใน `docs/DEPLOYMENT.md` เป็นฐาน
    - document justification ของ `INTERNET`, `FileProvider` (`exported="false"`), `allowBackup="true"` ภายใน privacy policy/manual steps
    - _Requirements: 5.1, 5.2, 5.5, 3.2_

  - [ ] 9.2 สร้าง `RELEASE_URLS.md` บันทึก final URLs + content rating answers
    - เตรียมที่บันทึก Privacy Policy URL, Terms URL, Support_Contact (email/URL) และคำตอบ content-rating questionnaire (placeholder สำหรับ human กรอกค่าจริงหลัง host)
    - _Requirements: 5.3, 5.6, 6.6_

- [ ] 10. เขียน `docs/GOOGLE_PLAY_MANUAL_STEPS.md` ไฟล์เดียว authoritative (C9)
  - [ ] 10.1 เขียน manual steps document แยก [HUMAN] vs [DONE BY AGENT]
    - สร้าง `docs/GOOGLE_PLAY_MANUAL_STEPS.md` ครอบ: สร้างบัญชี Play Console + ค่าธรรมเนียม 25 USD, identity verification, enroll Play App Signing + ให้ Upload_Keystore, อัปโหลด AAB เข้า release track, store listing + content rating + data safety, progression internal → closed → production + staged rollout
    - ใช้ tag/ตาราง `[HUMAN]` vs `[DONE BY AGENT]` แยกทุกขั้นชัดเจน; ให้ `BETA_RELEASE_INSTRUCTIONS.md` / `docs/DEPLOYMENT.md` อ้างอิง (supersede) ไม่ duplicate
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8_

  - [ ] 10.2 เขียน real-device test checklist ครอบ Core_Flow
    - เพิ่ม section (ในไฟล์เดียวกันหรือไฟล์แยก) อ้างอิง state machine ของ `App.jsx`: `HOME → SELECT_GROUP → SELECT_JOB → PLAYING → RESULT`, `PERSONALITY_TEST → PT_RESULT`, resume ผ่าน `ResumeModal` + key `careerQuestState`, สลับภาษา (en/th/zh), สลับธีม, cold start ไม่ crash
    - _Requirements: 7.3, 7.4, 7.5_

  - [ ] 10.3 Document reproducible version policy
    - ระบุใน manual steps/docs ว่า `versionCode`/`versionName` เป็น literal เดียวใน `build.gradle` defaultConfig และการ bump version ต้องแก้ที่จุดเดียวนี้
    - _Requirements: 1.5_

- [ ] 11. Final checkpoint — ensure full release gate ผ่าน
  - รัน `npm test` และ `npm run release:prepare` ให้ผ่านไม่มี error; Ensure all tests pass, ask the user if questions arise.
  - _Requirements: 7.1, 7.2_

## Notes

- Tasks ที่มี `*` เป็น optional (unit/property/integration tests) ข้ามได้สำหรับ MVP เร็ว ๆ แต่แนะนำให้ทำเพื่อ traceability
- Property-based tests (3.3, 3.4) ใช้ `fast-check` ≥ 100 iterations และมีเฉพาะ `clearAllData` เท่านั้น (ส่วนที่เหลือเป็น config/docs/validation ไม่เหมาะกับ PBT) จึงต้องทำ task 8.1 ก่อนรัน property tests
- ขั้นตอนที่มนุษย์เท่านั้นทำได้ (Play Console, keystore, hosting, upload, กดเผยแพร่) **ไม่ใช่** executable tasks — ถูกเก็บเป็นเนื้อหาเอกสารใน task 10.1
- แต่ละ task อ้างอิง requirement clause เพื่อ traceability; checkpoints (task 6, 11) ยืนยันแบบ incremental
- iOS อยู่นอกขอบเขต

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3", "2.1", "3.1", "4.1", "4.2", "5.1", "7.1", "7.2", "8.1", "9.1", "9.2", "10.1", "10.2", "10.3"] },
    { "id": 1, "tasks": ["3.2"] },
    { "id": 2, "tasks": ["3.3", "3.4", "3.5", "4.3", "5.2", "7.3"] }
  ]
}
```
