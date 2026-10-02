# ขั้นตอนที่คนต้องทำเอง เพื่อขึ้น Google Play

ไฟล์นี้เป็นฉบับเดียวสำหรับทุกแอปในโฟลเดอร์นี้ งานที่เขียนว่า `[DONE BY AGENT]` อยู่ในโปรเจกต์แล้ว งานที่เขียนว่า `[HUMAN]` ต้องทำด้วยบัญชีของคุณเอง เพราะต้องยืนยันตัวตน จ่ายเงิน เก็บคีย์ และกดส่งใน Play Console

ข้อความกฎหมายในแต่ละแอปเป็นร่างเริ่มต้น ไม่ใช่คำปรึกษาทางกฎหมาย ก่อนโฮสต์ให้ผู้รู้ตรวจกับ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)

## แอปที่จะส่ง

| แอป | แพ็กเกจ | โฟลเดอร์ Android | กลุ่ม |
| --- | --- | --- | --- |
| Career Quest | `com.careerquest.app` | `Career_Quest/android` | ทั่วไป |
| WordSprint | `com.wordstypinggame.app` | `Typing_Game/android` | เด็ก / Families |
| SpellingBee | `com.wordsprint.bilingual` | `SpellingBee/android` | เด็ก / Families |
| LogicLabs | `com.logiclabs.codeescape` | `Education_App/android` | เด็ก / Families |
| Word Blitz | `com.wordblitz.kids` | `kids_learning_game/android` | เด็ก / Families |
| Inventors Workshop | `com.inventorsworkshop.app` | `Inventors_Workshop/game/android` | เด็ก / Families |
| Musical Instruments | `com.musicalinstruments.play` | `Mobile_Musical_Game/mobile-musical-game/android` | ทั่วไป |
| Learning Gen Alpha | `com.learninggenalpha.app` | `Learning_Gen_Alpha/packages/client/android` | ทั่วไป |
| Dead City Escape | `com.studio.deadcityescape` | โปรเจกต์ Unity `Dead_City_Escape` | ความรุนแรง ไม่เข้า Families |

รหัสแพ็กเกจเปลี่ยนไม่ได้หลังอัปโหลดครั้งแรก `[HUMAN]` ตรวจชื่อในตารางนี้ก่อนสร้างแอปใน Console

`game3_career_quest` ไม่ใช่แอปแยก มีเพียงไฟล์ชื่อ `nul` และเนื้อหาจะซ้ำกับ Career Quest อย่าสร้างรายการ Play ที่สองจากโฟลเดอร์นี้

## สิ่งที่ทำให้แล้ว

`[DONE BY AGENT]`

- ทุกแอปด้านบนตั้ง `targetSdk` 36 และมีชุด 64 บิต
- มีตัวอย่างไฟล์เซ็นชื่อที่ไม่มีรหัสจริง และ release จะล้มพร้อมบอกชื่อ property ที่ขาดจนกว่าคุณจะใส่คีย์
- ในแอปมีคำสั่งลบข้อมูลบนเครื่อง ต้องยืนยันก่อนลบ และมีลิงก์นโยบาย
- มี `PRIVACY_POLICY.md`, `TERMS_OF_SERVICE.md`, `RELEASE_URLS.md` พร้อมตัวยึด `[LEGAL_NAME]`, `[SUPPORT_EMAIL]`, `[EFFECTIVE_DATE]`
- มีไอคอน 512, feature graphic 1024x500, ภาพหน้าจออย่างน้อย 2 ภาพ, คำโปรย และคำอธิบายในโฟลเดอร์ store ของแต่ละแอป
- ไม่มีคำจำกัดความพจนานุกรมออกซฟอร์ดใน WordSprint และ SpellingBee
- Learning Gen Alpha เล่นปริศนาคนเดียวได้โดยไม่ต้องมีเซิร์ฟเวอร์
- Dead City Escape ตั้ง package, ARM64 และ target SDK 36 แล้ว แต่ยังไม่มีไฟล์ `.aab` เพราะเครื่องนี้ไม่มี Unity `6000.3.11f1`

## 1. บัญชีและเครื่อง

`[HUMAN]`

1. สมัคร [Google Play Console](https://play.google.com/console) ค่าธรรมเนียมครั้งเดียว 25 ดอลลาร์ แล้วยืนยันตัวตน
2. เปิดการยืนยันสองชั้นของบัญชี Google
3. ติดตั้ง JDK 21, Android SDK 36 และ Android Studio
4. สำหรับ Dead City Escape ติดตั้ง Unity `6000.3.11f1` พร้อมโมดูล Android
5. เตรียมอีเมลสนับสนุนและชื่อบุคคลหรือนิติบุคคลที่จะใส่ในหน้านโยบาย

## 2. แทนที่ตัวยึดกฎหมาย แล้วโฮสต์

`[HUMAN]`

ในแต่ละแอป เปิด `PRIVACY_POLICY.md`, `TERMS_OF_SERVICE.md` และ `RELEASE_URLS.md` แล้วแทนที่ `[LEGAL_NAME]`, `[SUPPORT_EMAIL]`, `[EFFECTIVE_DATE]` ให้ตรงกับของจริง จากนั้นให้ผู้รู้ตรวจเนื้อหา

นำหน้าที่ตรวจแล้วขึ้นเว็บที่เข้าถึงได้สาธารณะ เช่น Cloudflare Pages แล้วใส่ URL จริงใน `RELEASE_URLS.md` และในค่าคงที่ลิงก์ของแอป (ไฟล์ `src/config/legal.js` หรือ `src/privacy.ts` ของแอปนั้น) ก่อนสร้างชุด release

ข้อมูลที่นโยบายต้องตรงกับแอป: เกมเหล่านี้เก็บความคืบหน้าบนเครื่อง ไม่มีบัญชีผู้ใช้ ไม่มีโฆษณา และไม่ได้ส่งข้อมูลออกไปยังเซิร์ฟเวอร์ของแอป Dead City Escape เป็นเกมความรุนแรง

## 3. สร้าง upload keystore แยกต่อแอป

`[HUMAN]` สร้างคนละไฟล์ เก็บสำรองไว้นอก Git ถ้าทำหายจะอัปเดตแอปเดิมไม่ได้

ตัวอย่างคำสั่งอยู่ในโฟลเดอร์ `android` ของแอปนั้น:

```powershell
keytool -genkeypair -v -keystore upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

จากนั้นคัดลอกไฟล์ตัวอย่างแล้วใส่รหัสจริง อย่าคอมมิตไฟล์ที่ใส่รหัสแล้ว

- Career Quest: คัดลอก `Career_Quest/android/gradle.properties.example` เป็น `Career_Quest/android/gradle.properties` แล้วใส่ `RELEASE_STORE_FILE`, `RELEASE_STORE_PASSWORD`, `RELEASE_KEY_ALIAS`, `RELEASE_KEY_PASSWORD`
- WordSprint: คัดลอก `Typing_Game/android/keystore.properties.example` เป็น `keystore.properties`
- SpellingBee: ใช้ `SpellingBee/android/keystore.properties.example` แบบเดียวกัน
- LogicLabs, Word Blitz, Inventors Workshop, Musical Instruments, Learning Gen Alpha: ใช้ `android/gradle.properties.example` ในโฟลเดอร์ Android ของแอปนั้น
- Dead City Escape: คัดลอก `Dead_City_Escape/keystore.properties.example` แล้วใส่ค่าจริง คู่มือ build อยู่ใน `ANDROID_BUILD_CONFIGURATION.md`

## 4. สร้าง Android App Bundle

`[HUMAN]` รันหลังใส่คีย์แล้ว ไฟล์ `.aab` จะอยู่ใต้ `android/app/build/outputs/bundle/release/` ยกเว้น Dead City Escape

ตรวจชุดร้านก่อน build ได้ด้วยสคริปต์ของแต่ละแอป (`npm run release:prepare`, `npm run validate` หรือ `node scripts/validateRelease.js`)

```powershell
# Career Quest
cd Career_Quest
npm test
npm run android:build:release

# WordSprint
cd Typing_Game
npm test
npm run build
npm run mobile:sync
cd android
.\gradlew.bat bundleRelease

# SpellingBee
cd SpellingBee
npm run android:bundle:release

# LogicLabs
cd Education_App
npm test
npm run build
npx cap sync android
cd android
.\gradlew.bat bundleRelease

# Word Blitz
cd kids_learning_game
npm test
npm run build
npx cap sync android
cd android
.\gradlew.bat bundleRelease

# Inventors Workshop
cd Inventors_Workshop\game
npm test
npm run build
npx cap sync android
cd android
.\gradlew.bat bundleRelease

# Musical Instruments
cd Mobile_Musical_Game\mobile-musical-game
npm test
cd android
.\gradlew.bat bundleRelease

# Learning Gen Alpha
cd Learning_Gen_Alpha\packages\client
npm test
npm run build
npx cap sync android
cd android
.\gradlew.bat bundleRelease
```

Dead City Escape `[HUMAN]`: เปิดโปรเจกต์ด้วย Unity `6000.3.11f1` แล้วเลือกเมนู **Dead City Escape > Build Android AAB** ถ้าไม่มี `keystore.properties` การ build แบบ release จะหยุดและบอกชื่อ property ที่ขาด

ก่อนอัปโหลด ติดตั้งชุดทดสอบบนโทรศัพท์ Android จริงอย่างน้อยหนึ่งเครื่อง เช็กลิสต์แกนของแต่ละเกมอยู่ใน `docs/DEVICE_CHECKLIST.md` หรือ `DEVICE_CHECKLIST.md` ของแอปนั้น `[HUMAN]`

## 5. ส่งใน Play Console

ทำครบทุกแอปที่จะวางขาย `[HUMAN]`

1. สร้างแอปใหม่ ใช้ชื่อและแพ็กเกจจากตารางด้านบน
2. เปิด Play App Signing แล้วอัปโหลด `.aab` แรกด้วยมือเข้าแทร็ก Internal testing ครั้งแรกต้องอัปโหลดเอง
3. กรอกหน้าร้านจากไฟล์ในโฟลเดอร์ store ของแอป: ไอคอน 512, feature graphic 1024x500, ภาพหน้าจอโทรศัพท์, คำโปรยไม่เกิน 80 ตัวอักษร, คำอธิบายไม่เกิน 4000 ตัวอักษร ถ้าภาพที่สร้างไว้เป็นพื้นสีล้วน ให้ถ่ายภาพจากเครื่องจริงมาแทนก่อนส่ง production
4. ใส่ URL นโยบาย ข้อกำหนด และอีเมลสนับสนุนให้ตรงกับหน้าที่โฮสต์แล้ว
5. กรอก Data safety ให้ตรงนโยบาย: ข้อมูลอยู่บนเครื่อง ไม่มีการเก็บเพื่อส่งออก ไม่มีโฆษณา ประกาศว่าไม่มีโฆษณา
6. ทำแบบสอบถามเรตเนื้อหา คำตอบร่างอยู่ในไฟล์ content rating ของแต่ละแอป
7. แอปสำหรับเด็ก (WordSprint, SpellingBee, LogicLabs, Word Blitz, Inventors Workshop) ต้องทำแบบฟอร์ม Families และตั้งกลุ่มเป้าหมายให้ตรง Dead City Escape เรตความรุนแรง และไม่เข้า Families
8. ถ้าบัญชีบุคคลสร้างหลังวันที่ 13 พฤศจิกายน 2023 ต้องมีผู้ทดสอบปิดอย่างน้อย 12 คนที่เข้าร่วมต่อเนื่อง 14 วัน ก่อนขอสิทธิ์ production ควรหาผู้ทดสอบอย่างน้อย 20 คน
9. ขอสิทธิ์ production แล้วปล่อยแบบ staged rollout จาก internal ไป closed แล้วไป production

ทุกครั้งที่อัปโหลดชุดใหม่ `[HUMAN]` เพิ่ม `versionCode` ใน `android/app/build.gradle` หรือค่า Android ของ Unity ก่อน build

## 6. สิ่งที่ยังต้องมีคนทำให้แอปบางตัวสมบูรณ์ขึ้น

`[HUMAN]`

- สำรองคีย์สโตร์และรหัสไว้คนละที่กับเครื่องพัฒนา
- ถ่ายภาพหน้าจอจากเครื่องจริงแทนภาพพื้นสีที่ใช้ตรวจขนาดไฟล์
- Dead City Escape ต้อง build ด้วย Unity `6000.3.11f1` บนเครื่องที่มีโปรแกรมนี้
- Learning Gen Alpha เล่นคนเดียวได้ในชุดที่ส่งสโตร์ โหมดหลายคนจะใช้ได้เมื่อคุณเปิดเซิร์ฟเวอร์เองและใส่ URL ทีหลัง ไม่ต้องมีเซิร์ฟเวอร์ตอนผู้ตรวจเปิดแอปครั้งแรก
- Inventors Workshop ไม่มีชุมชนแชร์ผลงานออนไลน์ ผู้เล่นส่งออกเครื่องกลเป็นไฟล์บนเครื่องได้
- อย่านำไฟล์พจนานุกรมออกซฟอร์ดหรือคำจำกัดความที่คัดลอกกลับเข้า WordSprint หรือ SpellingBee
