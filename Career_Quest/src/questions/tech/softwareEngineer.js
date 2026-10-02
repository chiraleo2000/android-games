export const softwareEngineerQuestions = [

    // -------------------------------------------------------------------------
    // SECTION 1: JUNIOR DEVELOPER (Questions 1-10)
    // -------------------------------------------------------------------------

    {
        id: 'se_001',
        text: {
            en: '🚨 The "Quick Fix" Dilemma: It is 3:00 AM on a Tuesday. The production server is crashing every 15 minutes due to a memory leak in a new feature you deployed. Your Tech Lead is silent. You find a "dirty" hack on StackOverflow that stops the crashes but bypasses a key security validation. Do you push it?',
            th: '🚨 ภาวะ "Quick Fix": ตี 3 วันอังคาร เซิร์ฟเวอร์โปรดักชันล่มทุก 15 นาทีเพราะหน่วยความจำรั่วจากฟีเจอร์ที่คุณเพิ่งปล่อย Tech Lead เงียบกริบ คุณเจอวิธีแก้แบบ "ลวกๆ" ใน StackOverflow ที่หยุดการล่มได้แต่ข้ามการตรวจสอบความปลอดภัยสำคัญ คุณจะดันโค้ดนี้ไหม?',
            zh: '🚨 “快速修复”困境：周二凌晨3点。因你部署的新功能致内存泄漏，生产服每15分钟崩一次。技术主管失联。你在StackOverflow找到个“脏”路子能止崩但会绕过关键安全验证。推不推？'
        },
        options: [
            { id: 'A', text: { en: '🚀 Push the Hack: "Uptime is king. I\'ll patch the security hole tomorrow morning. Nobody will hack us in 4 hours."', th: '🚀 ดันโค้ดเลย: "Uptime คือพระเจ้า เดี๋ยวพรุ่งนี้เช้าค่อยมาอุดรูรั่ว ไม่มีใครแฮ็กเราใน 4 ชั่วโมงหรอก"', zh: '🚀 推送Hack：“运行时间为王。明早再补安全洞。4小时内没人黑我们。”' }, consequence: { en: '⚠️ Stability with a Cost! The crashing stops. Management praises your "heroic" save. But a bot scans the vulnerability 2 hours later and injects a crypto-miner. You spend a month cleaning up. Labeled "Fast but Dangerous."', th: '⚠️ เสถียรแต่เจ็บ! การล่มหยุด ผู้บริหารชมเชย แต่บอทเจอช่องโหว่ใน 2 ชม. และฝังตัวขุดเหรียญ คุณเสียเวลาทั้งเดือนตามแก้ ถูกแปะป้าย "เร็วแต่ร้ากาจ"', zh: '⚠️ 稳定的代价！崩溃停止。管理层赞你“英勇”。但2小时后机器人扫描到漏洞注入挖矿木马。你花一个月清理。被贴上“快但危险”标签。' }, stats: { competence: 35, ethics: -20, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '⏸️ Rollback Immediately: "Revert to the previous version. The new feature is gone, but data is safe. I won\'t compromise security."', th: '⏸️ ย้อนกลับเวอร์ชัน: "กลับไปใช้เวอร์ชันก่อนหน้า ฟีเจอร์หายแต่ข้อมูลปลอดภัย ฉันไม่ยอมแลกความปลอดภัย"', zh: '⏸️ 立即回滚：“回退到上个版本。新功能没了但数据安全。我不牺牲安全性。”' }, consequence: { en: '✅ The Professional Choice! Customers complain about the missing feature, but the system is stable. You fix the leak properly the next day. Tech Lead respects your maturity.', th: '✅ ทางเลือกมืออาชีพ! ลูกค้าบ่นเรื่องฟีเจอร์หายแต่ระบบเสถียร คุณแก้จุดรั่วอย่างถูกต้องในวันถัดไป Tech Lead เคารพวุฒิภาวะคุณ', zh: '✅ 专业选择！客户抱怨没功能，但系统稳。次日你正确修复泄漏。技术主管尊重你的成熟。' }, stats: { competence: 45, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🛠️ Scripted Restart: "Write a script to auto-restart the service every 10 minutes. Ugly, but keeps the site up AND safe while I debug."', th: '🛠️ เขียนสคริปต์รีสตาร์ท: "เขียนสคริปต์ให้รีสตาร์ทเองทุก 10 นาที น่าเกลียดหน่อยแต่เว็บยังอยู่และปลอดภัยระหว่างรอแก้"', zh: '🛠️ 脚本重启：“写个脚本每10分钟重启服务。难看，但在依然安全且在线，方便我调试。”' }, consequence: { en: '✨ Creative Engineering! A smart band-aid. Users notice minor glitches but no downtime. You fix the root cause by 7 AM. Team impressed by your calm under pressure.', th: '✨ วิศวกรรมสร้างสรรค์! พลาสเตอร์ยาที่ฉลาด ผู้ใช้เห็นกระตุกนิดหน่อยแต่ไม่ล่ม คุณแก้ต้นเหตุเสร็จ 7 โมง ทีมประทับใจความใจเย็นของคุณ', zh: '✨ 创意工程！聪明的权宜计。用户觉察轻微故障但没停机。早上7点你根除病因。团队佩服你的抗压能力。' }, stats: { competence: 55, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '😴 Go to Sleep: "I\'m not paid enough for 3 AM ops. I\'ll fix it at 9 AM. If they wanted 24/7 uptime, hire SREs."', th: '😴 ไปนอน: "เงินเดือนไม่คุ้มงานตี 3 เดี๋ยว 9 โมงมาแก้ ถ้าอยากได้ 24/7 ก็จ้าง SRE สิ"', zh: '😴 去睡觉：“这点钱不值得凌晨3点拼命。早9点再说。要想7x24小时去找SRE。”' }, consequence: { en: '❌ Career Limiting Move. Site is down for 6 hours. Cost company $50k. CTO is furious. You keep your sleep but get moved to a "maintenance" project.', th: '❌ อนาคตดับ เว็บล่ม 6 ชม. บริษัทเสีย 1.5 ล้าน CTO โกรธจัด ได้นอนเต็มอิ่มแต่โดนย้ายไปโปรเจกต์ "งานซ่อมบำรุง"', zh: '❌ 职业受限。网站挂6小时。损5万刀。CTO暴怒。你保住睡眠但被调去“维护”项目。' }, stats: { competence: 10, ethics: 10, leadership: -40, innovation: 0 } }
        ]
    },

    {
        id: 'se_002',
        text: {
            en: '😱 The Drop Database Disaster: You are mentoring an intern who accidentally runs a DELETE script on PRODUCTION. 5,000 user accounts disappear. Backups are 12 hours old. CTO screams "WHO DID THIS?"',
            th: '😱 หายนะลบฐานข้อมูล: คุณสอนงานเด็กฝึกงานที่เผลอรันสคริปต์ DELETE บน PRODUCTION บัญชี 5,000 รายหายวับ แบ็คอัพเก่า 12 ชม. CTO ตะโกน "ใครทำ?"',
            zh: '😱 删库灾难：你带的实习生误在生产环境跑DELETE脚本。5000账户消失。备份是12小时前的。CTO咆哮“谁干的？”'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Take the Bullet: "It was me. I authorized the script. It\'s a process failure, not a personnel one."', th: '🛡️ รับแทน: "ผมเอง ผมอนุมัติสคริปต์ เป็นความผิดพลาดของกระบวนการ ไม่ใช่ตัวบุคคล"', zh: '🛡️ 挡枪：“是我。我批的脚本。是流程失误非个人失误。”' }, consequence: { en: '🏆 Leadership Gold! CTO yells but respects your ownership. You add DB locks. Intern becomes your most loyal engineer. You built a team for life.', th: '🏆 ผู้นำทองคำ! CTO ด่าแต่เคารพที่คุณรับผิดชอบ คุณเพิ่มตัวล็อก DB เด็กฝึกงานซึ้งใจและภักดีกับคุณตลอดไป', zh: '🏆 领导力金牌！CTO吼你但尊重你的担当。你加了DB锁。实习生成为你最忠诚的工程师。你赢得了一生的团队。' }, stats: { competence: 30, ethics: 60, leadership: 60, innovation: 20 } },
            { id: 'B', text: { en: '👉 Blame the Intern: "The intern ignored my instructions. They need to learn a hard lesson."', th: '👉 โทษเด็กฝึกงาน: "เด็กไม่ฟังคำสั่งผม ต้องให้ได้รับบทเรียนจำจนตาย"', zh: '👉 怪实习生：“实习生无视我指令。得让他长长记性。”' }, consequence: { en: '💀 Trust Destroyed. Intern fired. Team sees you as a snake. Culture becomes toxic and paranoid.', th: '💀 ความเชื่อใจพัง เด็กโดนไล่ออก ทีมมองคุณเป็นงูพิษ วัฒนธรรมองค์กรเสีย', zh: '💀 信任崩塌。实习生被开。团队视你有毒。文化变得偏执。' }, stats: { competence: 20, ethics: -40, leadership: -50, innovation: 0 } },
            { id: 'C', text: { en: '🕵️ Forensic Recovery: "Don\'t panic. I can reconstruct rows from transaction logs. Give me 30 mins."', th: '🕵️ กู้ข้อมูล: "อย่าตกใจ ผมกู้จาก log ได้ ขอ 30 นาที"', zh: '🕵️ 取证恢复：“别慌。我能从事务日志重构行。给我30分钟。”' }, consequence: { en: '✨ Technical Wizardry! You save the day. Restored 99.9%. CTO stunned. But you miss improving safety processes because "you fixed it."', th: '✨ เทพเทคนิค! คุณกู้ได้ 99.9% CTO อึ้ง แต่คุณพลาดโอกาสแก้ระบบความปลอดภัยเพราะ "มึงเก่งไป"', zh: '✨ 技术巫术！挽救局面。恢复99.9%。CTO惊呆。亦错失改进流程机会因“你搞定了”。' }, stats: { competence: 70, ethics: 20, leadership: 30, innovation: 40 } },
            { id: 'D', text: { en: '🤷 Partial Cover-up: "Restore 12-hour backup. Blame \'corrupt disk\'. Nobody will know."', th: '🤷 ปิดข่าว: "กู้แบ็คอัพ 12 ชม. โทษ \'ดิสก์พัง\' ไม่มีใครรู้หรอก"', zh: '🤷 部分掩盖：“恢复12小时前备份。赖‘磁盘损坏’。没人知道。”' }, consequence: { en: '🤥 Dangerous Lie. You survive, but users notice missing data. You lie to support too. Integrity rots.', th: '🤥 โกหกอันตราย คุณรอด แต่ผู้ใช้สงสัยข้อมูลหาย คุณต้องโกหกฝ่ายซัพพอร์ตด้วย ศักดิ์ศรีป่นปี้', zh: '🤥 危险谎言。你苟活，但用户发现数据丢了。你也得骗客服。诚信腐烂。' }, stats: { competence: 20, ethics: -50, leadership: -20, innovation: 10 } }
        ]
    },

    {
        id: 'se_003',
        text: {
            en: '📚 Spaghetti Code: You inherit a billing module, 5,000 lines, no comments. Management wants a new feature by Friday. You don\'t understand the code yet.',
            th: '📚 โค้ดสปาเก็ตตี้: รับมรดกโมดูลเก็บเงิน 5,000 บรรทัด ไร้คอมเมนต์ ผู้บริหารจะเอาฟีเจอร์ใหม่วันศุกร์ คุณยังอ่านโค้ดไม่รู้เรื่องเลย',
            zh: '📚 意大利面代码：继承一计费模块，5000行无注释。管理层要周五上新功能。你连代码都没看懂。'
        },
        options: [
            { id: 'A', text: { en: '🧬 Refactor First: "I can\'t build on quicksand. Need 2 weeks to test & refactor first."', th: '🧬 รื้อใหม่ก่อน: "สร้างบ้านบนทรายไม่ได้ ขอ 2 อาทิตย์ทำเทสต์และรื้อโค้ดก่อน"', zh: '🧬 先重构：“流沙上盖不了楼。先给我2周测试重构。”' }, consequence: { en: '✅ Painful but Correct. PM angry, but you hold ground. Future features take 2 days, not 2 weeks. Project saved.', th: '✅ เจ็บแต่จบ PM โกรธแต่คุณยืนกราน อนาคตงานไวขึ้น โปรเจกต์รอด', zh: '✅ 痛但正确。PM怒但你坚持。未来功能耗时从2周变2天。项目得救。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '🩹 Just Patch It: "Add code to bottom with try-catch. If it works, ship it."', th: '🩹 แปะๆ ไป: "เขียนต่อท้าย ใส่ try-catch เวิร์คก็ปล่อยเลย"', zh: '🩹 凑合补：“try-catch加到底部。能跑就发。”' }, consequence: { en: '⚠️ Tech Debt Bomb. You hit deadline. File grows to 6,000 lines. Next bug takes 3 days to find. Fear cycle.', th: '⚠️ ระเบิดหนี้เทคนิค ทันเส้นตาย แต่ไฟล์พองเป็น 6,000 บรรทัด บั๊กหน้าหา 3 วัน วงจรอุบาทว์', zh: '⚠️ 技术债炸弹。赶上死线。文件涨到6000行。下个bug找3天。恐惧循环。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🔥 Rewrite Scratch: "Unsalvageable. I\'ll stay up 3 nights to rewrite in modern framework."', th: '🔥 เขียนใหม่หมด: "ไม่ไหวจะเคลียร์ อดนอน 3 คืนเขียนใหม่แม่งเลย"', zh: '🔥 重写：“没救了。我熬3宿用新框架重写。”' }, consequence: { en: '🎲 High Risk. Rewrite finished, but you missed an edge case. Company loses $10k. Burnout.', th: '⚠️ เสี่ยงสูง เขียนเสร็จแต่พลาดเคสยาก บริษัทเสียเงิน 3 แสน หมดไฟ', zh: '🎲 高风险。写完了但漏了个边缘情况。公司亏1万。累垮。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 40 } },
            { id: 'D', text: { en: '🤖 AI Assist: "Feed code to LLM to explain and write tests. Then modify carefully."', th: '🤖 ให้ AI ช่วย: "โยนให้ AI อธิบายและเขียนเทสต์ แล้วค่อยแก้"', zh: '🤖 AI辅助：“喂给LLM解释并写测试。然后小心改。”' }, consequence: { en: '✨ Modern Efficiency. AI maps logic. You catch 2 old bugs. Shipped on time with tests.', th: '✨ ประสิทธิภาพใหม่ AI ช่วยแกะตรรกะ เจอบั๊กเก่า 2 ตัว ส่งงานทันพร้อมเทสต์', zh: '✨ 现代效率。AI理清逻辑。抓出2个老bug。带测试按时发版。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 50 } }
        ]
    },
    {
        id: 'se_004',
        text: {
            en: '🔄 The dependency Hell: A critical security update for a library breaks your build. Updating fixing it requires upgrading React, Node, and Webpack. It is a 2-week rabbit hole. Leaving it means risking a known vulnerability.',
            th: '🔄 นรก Dependency: อัปเดตความปลอดภัยไลบรารีทำ Build พัง จะแก้ต้องอัปเกรด React, Node, Webpack งานงอก 2 อาทิตย์ ถ้าไม่ทำก็เสี่ยงโดนเจาะ',
            zh: '🔄 依赖地狱：关键库安全更新搞挂构建。修复得升React、Node、Webpack。两周的大坑。不修就冒已知漏洞风险。'
        },
        options: [
            { id: 'A', text: { en: '🚧 Freeze & Ignore: "Pin the old version. We are behind a firewall/VPN anyway. Low risk."', th: '🚧 แช่แข็งและเมิน: "ล็อกเวอร์ชันเก่า เราอยู่หลัง VPN เสี่ยงต่ำน่า"', zh: '🚧 锁定忽略：“锁死旧版。反正有防火墙/VPN。风险低。”' }, consequence: { en: '📉 False Security. 6 months later, a hacker pivots from a phished employee laptop to your server via this exact hole.', th: '📉 ความปลอดภัยลวงตา 6 เดือนต่อมา แฮ็กเกอร์เจาะผ่านแล็ปท็อปพนักงานเข้าเซิร์ฟเวอร์รูนี้เป๊ะ', zh: '📉 虚假安全。6个月后黑客通过钓鱼员工电脑以此漏洞跳板进服务器。' }, stats: { competence: 20, ethics: -10, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🧹 The Great Upgrade: "Stop all feature work. We pay the maintenance tax NOW before it gets worse."', th: '🧹 มหกรรมการอัปเกรด: "หยุดฟีเจอร์ทุกอย่าง เราจะจ่ายภาษีการดูแลรักษาเดี๋ยวนี้ก่อนมันจะแย่กว่าเดิม"', zh: '🧹 大升级：“停掉所有特性开发。现在就以此维护税，否则会更糟。”' }, consequence: { en: '✅ Healthy Codebase. It\'s a boring 2 weeks. But dev experience improves massively afterwards. Builds are faster.', th: '✅ โค้ดสุขภาพดี 2 อาทิตย์ที่น่าเบื่อ แต่ชีวิตดีขึ้นมหาศาล Build เร็วขึ้น', zh: '✅ 健康代码库。无聊的两周。但之后开发体验巨幅提升。构建变快。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🍴 Fork & Patch: "Fork the library, cherry-pick the security fix manually. Keep our old stack."', th: '🍴 Fork แล้วแปะ: "Fork ไลบรารีมาแก้เองแบบ manual ใช้ stack เดิมไป"', zh: '🍴 分支修补：“Fork库，手动cherry-pick安全补丁。保持旧架构。”' }, consequence: { en: '⚖️ Maintenance Burden. You solve it today. But now you own a custom library version. Nobody updates it. Years later, it\'s a nightmare.', th: '⚖️ ภาระดูแล แก้ได้วันนี้ แต่ตอนนี้คุณมีไลบรารีเถื่อนที่ต้องดูแลเอง ปีหลังๆ กลายเป็นฝันร้าย', zh: '⚖️ 维护负担。今天搞定。但现在你得维护个私有版。没人更新它。几年后成噩梦。' }, stats: { competence: 40, ethics: 20, leadership: 10, innovation: 20 } },
            { id: 'D', text: { en: '🕵️ Micro-Service It: "Isolate the vulnerable part into a cheap separate service. Rewrite just that part."', th: '🕵️ แยกส่วน: "ตัดส่วนที่มีปัญหาไปทำเป็น service แยกราคาถูก เขียนใหม่แค่ตรงนั้น"', zh: '🕵️ 微服务化：“把漏洞部分隔离成独立廉价服务。只重写那部分。”' }, consequence: { en: '✨ Modern Isolation. You contain the risk and upgrade the core system piecemeal. Smart architecture move.', th: '✨ การแยกส่วนทันสมัย คุณจำกัดความเสี่ยงและค่อยๆ อัปเกรดระบบหลัก ฉลาดมาก', zh: '✨ 现代隔离。你控制了风险并逐步升级核心系统。聪明的架构招数。' }, stats: { competence: 50, ethics: 30, leadership: 30, innovation: 50 } }
        ]
    },

    // -------------------------------------------------------------------------
    // SECTION 2: MID-LEVEL ENGINEER (Questions 5-15)
    // -------------------------------------------------------------------------

    {
        id: 'se_005',
        text: {
            en: '🧠 Framework War: Team needs a new dashboard. Half wants React (safe), half wants Svelte (fast, new). Arguments getting personal. You are the vote.',
            th: '🧠 สงครามเฟรมเวิร์ก: จะทำแดชบอร์ด ครึ่งทีมเชียร์ React (เซฟ) ครึ่งทีมเชียร์ Svelte (เร็ว, ใหม่) เริ่มด่ากันเรื่องส่วนตัว คุณคือเสียงชี้ขาด',
            zh: '🧠 框架战争：要做新仪表盘。一半人要React（稳），一半要Svelte（快、新）。吵到人身攻击。你有一票。'
        },
        options: [
            { id: 'A', text: { en: '🗳️ Choose Boring Tech (React): "Hiring is easy. Risk management > dev happiness."', th: '🗳️ เลือกของน่าเบื่อ (React): "หาคนง่าย บริหารความเสี่ยงสำคัญกว่าความสุข dev"', zh: '🗳️ 选无聊的（React）：“好招人。风控>开发爽度。”' }, consequence: { en: '✅ Stability Win. Svelte fans grumble but work. No "learning curve" delays. Maintenance easy.', th: '✅ มั่นคง แฟน Svelte บ่นแต่ก็ทำ ไม่เสียเวลาเรียนรู้ ดูแลง่าย', zh: '✅ 稳定赢。Svelte粉抱怨但干活。无“学习曲线”延迟。维护易。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🚀 Choose New Tech (Svelte): "React is bloated. Less code with Svelte. Let\'s innovate."', th: '🚀 เลือกของใหม่ (Svelte): "React มันอืด Svelte โค้ดน้อยกว่า มาสร้างนวัตกรรมกัน"', zh: '🚀 选新的（Svelte）：“React臃肿。Svelte代码少。创新吧。”' }, consequence: { en: '✨ High Morale/Risk. Team energized. App fast. BUT no StackOverflow answers for bugs. Extra debugging time.', th: '✨ กำลังใจดี/เสี่ยง ทีมคึก แอปเร็ว แต่เจอบั๊กไม่มีใครช่วยในเน็ต เสียเวลาแก้เอง', zh: '✨ 士气高/风险高。团队带劲。App快。但Bug没现成答案。调试耗时。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'C', text: { en: '🤝 Prototype Bake-off: "2 days POC for both. Compare metrics. Data decides."', th: '🤝 แข่งกันทำ: "ทำ POC 2 วันทั้งคู่ วัดผล ข้อมูลตัดสิน"', zh: '🤝 原型PK：“各搞2天POC。比指标。数据说话。”' }, consequence: { en: '🏆 Culture Victory. Tension vanishes. The winner is clear. You taught team how to decide.', th: '🏆 ชัยชนะวัฒนธรรม ความตึงเครียดหาย ผู้ชนะชัดเจน คุณสอนทีมให้ตัดสินใจเป็น', zh: '🏆 文化胜利。紧张消散。胜负已分。你教会团队决策。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 30 } },
            { id: 'D', text: { en: '🏛️ Micro-Frontend Mess: "Use both! Isolate in micro-frontends."', th: '🏛️ เละแบบ Micro-Frontend: "ใช้แม่มทั้งคู่! แยกส่วนกันทำ"', zh: '🏛️ 微前端乱炖：“都用！微前端隔离。”' }, consequence: { en: '💀 Arch Disaster. Load 2 times. Slow app. State sharing nightmare. Bad solution.', th: '💀 หายนะ โหลด 2 เท่า แอปอืด แชร์ state ไม่ได้ วิธีห่วยแตก', zh: '💀 架构灾难。加载两套。App慢。状态共享噩梦。烂招。' }, stats: { competence: 10, ethics: 20, leadership: -20, innovation: -10 } }
        ]
    },
    {
        id: 'se_006',
        text: {
            en: '🧟 The Zombie Feature: PM wants a feature requiring a huge database refactor. You know this specific feature was tried 2 years ago and failed miserably with users. PM is new and doesn\'t know.',
            th: '🧟 ฟีเจอร์ซอมบี้: PM อยากได้ฟีเจอร์ที่ต้องรื้อฐานข้อมูลครั้งใหญ่ คุณรู้ว่าฟีเจอร์นี้เคยทำแล้วเมื่อ 2 ปีก่อนและเจ๊งไม่เป็นท่า PM คนใหม่ไม่รู้เรื่อง',
            zh: '🧟 僵尸需求：PM想要个功能，得大改数据库。你知道这功能2年前试过，用户根本不用。PM刚来不知道。'
        },
        options: [
            { id: 'A', text: { en: '🤐 Just Build It: "They pay me to code, not to product manage. If it fails, I still get paid."', th: '🤐 ทำๆ ไป: "เขาจ้างมาเขียนโค้ด ไม่ได้มาเป็น PM เจ๊งกูก็ได้เงินเดือน"', zh: '🤐 照做：“给钱写代码又不背产品锅。挂了我照样拿钱。”' }, consequence: { en: '📉 Wasted Quarter. You spend 3 months. It flops again. Engineering team morale tanks creating "trash".', th: '📉 เสียเวลา 3 เดือน เจ๊งเหมือนเดิม ทีมวิศวกรหมดไฟที่ต้องสร้าง "ขยะ"', zh: '📉 浪费一季度。花3个月。又挂了。团队造“垃圾”士气大跌。' }, stats: { competence: 30, ethics: 10, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '📊 Data Pushback: "Dig up old git logs and analytics. \'We tried this in 2024. Here is why it failed. What is different now?\'"', th: '📊 โต้ด้วยข้อมูล: "ขุด log เก่า \'เราทำไปแล้วปี 2024 นี่คือสาเหตุที่เจ๊ง คราวนี้มีไรต่าง?\'"', zh: '📊 数据回击：“挖旧日志分析。‘24年试过。这是失败原因。这次有何不同？’”' }, consequence: { en: '✅ Strategic Value. PM is grateful (or embarrassed). You pivot to a better version. You saved $100k in dev time.', th: '✅ มีคุณค่า PM ขอบคุณ (หรืออาย) เปลี่ยนไปทำเวอร์ชันที่ดีกว่า ประหยัดเงินบริษัทไปหลายแสน', zh: '✅ 战略价值。PM感激（或尴尬）。转向更好版本。省十万开发费。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '⚔️ Public Refusal: "This is a stupid idea. I refuse to let my team waste time."', th: '⚔️ ปฏิเสธกลางวง: "ไอเดียโง่ๆ ผมไม่ให้ทีมเสียเวลาหรอก"', zh: '⚔️ 公开拒绝：“蠢主意。我不让我团队浪费时间。”' }, consequence: { en: '🔥 Political Enemy. You are right, but PM hates you. They labeled you "uncooperative". Future specs are withheld from you.', th: '🔥 ศัตรูการเมือง คุณถูก แต่ PM เกลียดคุณ แปะป้าย "ไม่ให้ความร่วมมือ" งานหน้าโดนแกล้งแน่', zh: '🔥 政治树敌。你对了，但PM恨你。贴你“不配合”标签。以后给你穿小鞋。' }, stats: { competence: 40, ethics: 20, leadership: -10, innovation: 10 } },
            { id: 'D', text: { en: '🎨 Malicious Compliance: "Build exactly what they asked, knowing it fails, but design the code so it\'s easy to delete later."', th: '🎨 ยอมแบบวางยา: "ทำให้เป๊ะทั้งที่รู้ว่าเจ๊ง แต่ออกแบบให้ลบทิ้งง่ายๆ ทีหลัง"', zh: '🎨 恶意合规：“按要求做，明知会挂，但代码设计成容易删除。”' }, consequence: { en: '⚖️ Cynical Safety. You protect the codebase, but not the business. Efficient waste.', th: '⚖️ ปลอดภัยแบบเสียดสี รักษาโค้ดได้แต่ไม่ได้รักษาธุรกิจ ความสูญเปล่าที่มีประสิทธิภาพ', zh: '⚖️ 犬儒式安全。保住了代码库，没保住业务。高效的浪费。' }, stats: { competence: 40, ethics: 10, leadership: 0, innovation: 10 } }
        ]
    },
    {
        id: 'se_007',
        text: {
            en: '🐌 The Perf Bottleneck: A core API endpoint is reaching 5s response time. Customers are churning. You find the culprit: a nested loop in a legacy function written by the current VP of Engineering.',
            th: '🐌 คอขวด: API หลักช้า 5 วิ ลูกค้าหาย เจอต้นเหตุ: ลูปซ้อนลูปในฟังก์ชันเก่าที่เขียนโดย VP วิศวกรรมคนปัจจุบัน',
            zh: '🐌 性能瓶颈：核心API响应5秒。客户流失。凶手：现任工程VP写的嵌套循环。'
        },
        options: [
            { id: 'A', text: { en: '🧹 Silent Refactor: "rewrite it, merge it. Don\'t mention names. \'Optimized generic logic\' in commit message."', th: '🧹 แอบแก้: "เขียนใหม่ รวมโค้ด อย่าเอ่ยชื่อ เขียน commit ว่า \'ปรับปรุงตรรกะทั่วไป\'"', zh: '🧹 悄悄重构：“重写，合并。别提名字。提交信息写‘优化通用逻辑’。”' }, consequence: { en: '✅ Smooth Operator. Performance up 1000%. VP doesn\'t lose face. You get results without politics.', th: '✅ เนียนกริบ เร็วขึ้น 1000% VP หน้าไม่แตก ได้งานไม่ต้องการเมือง', zh: '✅ 圆滑操作。性能升1000%。VP不丢面。无为了结果避开政治。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '📢 Call Out Bad Code: "In standup: \'Found terrible O(n^3) code from 2018. Fixing it now.\'"', th: '📢 ประจานโค้ด: "บอกใน standup: \'เจอโค้ดห่วยแตก O(n^3) จากปี 2018 กำลังแก้\'"', zh: '📢 抨击烂代码：“站会说：‘发现18年的垃圾O(n^3)代码。正在修。’”' }, consequence: { en: '😬 Career Limit. VP hears about it. Feels attacked. You are technically right, but socially dead.', th: '😬 อนาคตดับ VP ได้ยิน รู้สึกโดนด่า คุณถูกทางเทคนิค แต่ตายทางสังคม', zh: '😬 职业受限。VP听到了。觉得被冒犯。技术上你对，社交上你死。' }, stats: { competence: 40, ethics: 20, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🐢 Add Caching: "Don\'t touch the messy code. Just cache the result in Redis for 1 hour."', th: '🐢 ใส่ Cache: "อย่าแตะโค้ดเน่าๆ แคชผลลัพธ์ใน Redis สักชั่วโมงก็พอ"', zh: '🐢 加缓存：“别碰烂代码。Redis缓存1小时结果。”' }, consequence: { en: '⚠️ Stale Data Risk. It\'s fast, but now users see old data. Complexity increases. You masked the root cause.', th: '⚠️ เสี่ยงข้อมูลเก่า เร็วก็จริงแต่ข้อมูลเก่า ความซับซ้อนเพิ่ม คุณแค่กลบเกลื่อนต้นเหตุ', zh: '⚠️ 脏数据风险。快是快，用户看旧数据。复杂度增加。掩盖病根。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '📧 Ask Permission: "Email VP: \'I noticed your old code here. Mind if I optimize it?\'"', th: '📧 ขออนุญาต: "เมลหา VP: \'เห็นโค้ดเก่าพี่ตรงนี้ ขออนุญาตปรับปรุงนะครับ\'"', zh: '📧 请求许可：“发邮件给VP：‘看到您以前代码。介意我优化吗？’”' }, consequence: { en: '🤝 Relationship Builder. VP says "OMG please, I was a junior back then." They appreciate the respect. You get a mentor.', th: '🤝 สร้างสัมพันธ์ VP บอก "เชิญเลย ตอนนั้นพี่ยังไก่อ่อน" เขาชอบที่คุณให้เกียรติ ได้เมนเทอร์เพิ่ม', zh: '🤝 建立关系。VP说“天哪请便，那时我还是菜鸟。”感激尊重。得一导师。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 10 } }
        ]
    },
    {
        id: 'se_008',
        text: {
            en: '🚢 The Friday Deploy: Sales team closed a huge deal, but requires a feature to be LIVE by Monday morning. It\'s 4 PM Friday. Tests are passing, but you haven\'t done manual QA.',
            th: '🚢 ดีพลอยวันศุกร์: เซลส์ปิดดีลใหญ่ แต่ต้องเอาฟีเจอร์ขึ้นวันจันทร์เช้า 4 โมงเย็นวันศุกร์ เทสต์ผ่าน แต่ยังไม่ได้ QA มือ',
            zh: '🚢 周五发布：销售签了大单，要求周一晨上线。周五下午4点。测试过了，没做人工QA。'
        },
        options: [
            { id: 'A', text: { en: '🚀 YOLO Deploy: "Ship it. I\'ll keep my phone on. If it breaks, I\'ll fix it Saturday."', th: '🚀 YOLO: "ปล่อยแม่ง เปิดมือถือรอ พังเดี๋ยววันเสาร์มาแก้"', zh: '🚀 硬上：“发。我不关机。挂了我周六修。”' }, consequence: { en: '🎲 Ruined Weekend. It breaks. You spend Saturday/Sunday coding while frantic sales people text you. Burnout city.', th: '🎲 วันหยุดพังทลาย ระบบพัง นั่งแก้เสาร์อาทิตย์ เซลส์ไลน์ตามยิกๆ ไหม้เกรียม', zh: '🎲 毁周末。挂了。周六日修代码，销售狂发短信。累觉不爱。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '✋ Feature Toggle: "Deploy code behind a feature flag. Enable it ONLY for that one client account. Risk contained."', th: '✋ Feature Flag: "ปล่อยโค้ดแต่ซ่อนหลัง flag เปิดให้ลูกค้าเจ้านั้นเจ้าเดียว ความเสี่ยงจำกัด"', zh: '✋ 功能开关：“发代码但加开关。只对那一个客户开。风险可控。”' }, consequence: { en: '✅ Senior Move. Risk is near zero. If it breaks, only 1 user assumes it. You sleep well.', th: '✅ โปรมาก ความเสี่ยงเป็นศูนย์ ถ้าพังก็โดนแค่คนเดียว นอนหลับสบาย', zh: '✅ 高级操作。零风险。挂了就一个用户知道。睡好觉。' }, stats: { competence: 60, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '🛑 Refuse: "No Friday Deploys. It is engineer law. They can get it Tuesday."', th: '🛑 ปฏิเสธ: "กฎเหล็กห้ามดีพลอยวันศุกร์ เอาไปวันอังคารนู่น"', zh: '🛑 拒绝：“周五不发布。工程师铁律。周二再说。”' }, consequence: { en: '📉 Sales Conflict. Deal signed promised Monday. You breach contract. Business loses trustworthiness.', th: '📉 ขัดแย้งยอดขาย สัญญาระบุวันจันทร์ คุณทำผิดสัญญา ธุรกิจเสียเครดิต', zh: '📉 销售冲突。合同签的周一。你违约。商业失信。' }, stats: { competence: 20, ethics: 30, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🕵️ QA Staging Access: "Give client access to Staging environment for demo. Deploy Prod Monday."', th: '🕵️ ให้ใช้ Staging: "ให้ลูกค้าเล่น Staging ไปก่อน วันจันทร์ค่อยขึ้น Prod"', zh: '🕵️ QA环境演示：“给客户Staging环境演示。周一发生产。”' }, consequence: { en: '✨ Clever Compromise. Client sees it works. You uphold safety standards. Win-Win.', th: '✨ ประนีประนอมฉลาด ลูกค้าเห็นของ คุณรักษามาตรฐาน วิน-วิน', zh: '✨ 聪明妥协。客户看到能用。你守住安全标准。双赢。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 20 } }
        ]
    },

    {
        id: 'se_009',
        text: {
            en: '💻 The Legacy Kraken: Your main revenue-generating system is built on a 25-year-old COBOL codebase. Only one person in the company knows how it works, and they just retired. A critical bug appears. Do you rewrite or patch?',
            th: '💻 อสูรกายระบบเก่า: ระบบทำเงินหลักของบริษัทสร้างขึ้นจากโค้ด COBOL เมื่อ 25 ปีที่แล้ว มีคนเดียวในบริษัทที่รู้ว่ามันทำงานยังไง และเขากำลังเกษียณ จู่ๆ บั๊กร้ายแรงก็โผล่มา คุณจะเขียนใหม่หรือแค่ปะผุ?',
            zh: '💻 遗留系统克拉肯：你的主要收入来源系统建立在 25 年前的 COBOL 代码库之上。公司只有一个人知道它是如何运作的，而他们刚刚退休。出现了一个严重错误。你会重写还是修补？'
        },
        options: [
            { id: 'A', text: { en: '🔥 Full Cloud Rewrite: "Burn the boats. We rebuild in Cloud Native. It will cost millions but save us later."', th: '🔥 รื้อเขียนใหม่บนคลาวด์ทั้งหมด: "ทุบหม้อข้าว รื้อทำใหม่เป็น Cloud Native แพงหน่อยแต่ระยะยาวคุ้ม"', zh: '🔥 全面云端重写：“破釜沉舟。用云原生重构。耗资巨大但未来省钱。”' }, consequence: { en: '⚠️ Million-Dollar Gamble. You start the rewrite. It takes more than a year and costs millions. Halfway through, the company almost runs out of cash. High stress, but eventually a modern system.', th: '⚠️ เดิมพันพันล้าน คุณเริ่มรื้อเขียนใหม่ ใช้เวลาเกินปีและผลาญเงินมหาศาล ระหว่างทางบริษัทเกือบขาดสภาพคล่อง เครียดสุดๆ แต่สุดท้ายก็ได้ระบบที่ทันสมัย', zh: '⚠️ 百万美元豪赌。你开始重写。这花费了一年多时间，耗资数百万。进行一半时，公司几乎耗尽现金。压力巨大，但最终得到一个现代化系统。' }, stats: { competence: 30, ethics: 10, leadership: 40, innovation: 70 } },
            { id: 'B', text: { en: '🩹 The "Ghost" Patch: "I will learn COBOL in 2 days and patch the binary. Pray it works."', th: '🩹 ปะผุแบบ "วิญญาณสถิต": "ขอ 2 วันเรียน COBOL แล้วแก้ไบนารีเลย สวดมนต์เอา"', zh: '🩹 “幽灵”修补：“我花2天学COBOL然后补丁丁。祈祷能跑。”' }, consequence: { en: '✅ Temporary Success. You spend weeks learning COBOL yourself and fix the bug. The system lives! You are safe for another year, but the clock is ticking.', th: '✅ สำเร็จชั่วคราว คุณเสียเวลาหลายอาทิตย์เรียน COBOL ด้วยตัวเองจนแก้บั๊กสำเร็จ ระบบยังหายใจต่อได้! คุณรอดไปได้อีกปีแต่เวลาของคุณเริ่มเหลือน้อยลงทุกที', zh: '✅ 临时成功。你花了几周时间自学 COBOL 并修复了漏洞。系统活了下来！你还能平安度过一年，但时间不等人。' }, stats: { competence: 60, ethics: 10, leadership: 10, innovation: -20 } },
            { id: 'C', text: { en: '🤝 Hire the Retiree as Consultant: "Pay them whatever they want. We are hostages."', th: '🤝 จ้างคนที่เกษียณกลับมา: "จ่ายเท่าไหร่ก็ยอม เราเป็นตัวประกันเขาแล้ว"', zh: '🤝 聘请退休人员作为顾问：“要多少给多少。我们被绑架了。”' }, consequence: { en: '😐 Practical but Pricey. He charges $500 an hour. He fixes it in a day. You learn nothing, and the dependency grows. You are safe, but lazy.', th: '😐 สิ้นเปลืองแต่จบงานได้ เขาคิดชั่วโมงละ 15,000 เขาซ่อมเสร็จในวันเดียว คุณไม่ได้ความรู้อะไรเลยและต้องพึ่งพาเขาหนักกว่าเดิม คุณรอดตัวแต่ขี้เกียจไปนะ', zh: '😐 实用但昂贵。他每小时收费 500 美元。他在一天内修复了它。你学不到任何东西，依赖性却增加了。你是安全的，但很懒。' }, stats: { competence: 10, ethics: 20, leadership: 30, innovation: -30 } },
            { id: 'D', text: { en: '🚀 Build a Modern Wrapper: "Wrap the legacy core in a clean API. We migrate piece by piece safely."', th: '🚀 สร้างระบบครอบที่ทันสมัย: "สร้าง API ใหม่ครอบของเก่าไว้ แล้วค่อยๆ ย้ายไส้ในทีละชิ้น"', zh: '🚀 构建现代包装器：“用干净API封装旧核心。安全地逐块迁移。”' }, consequence: { en: '✨ Engineering Excellence. You build a modern microservice layer on top of the old COBOL core. You gradually migrate pieces over time. This is the smart way to handle technical debt. Legend.', th: '✨ ความเป็นเลิศทางวิศวกรรม คุณสร้างเลเยอร์ไมโครเซอร์วิสครอบแกน COBOL เดิมไว้ แล้วค่อยๆ ย้ายส่วนประกอบทีละนิด เป็นวิธีจัดการหนี้ทางเทคนิคที่ฉลาดที่สุดในโลก คุณคือตำนาน', zh: '✨ 卓越工程。你在旧 COBOL 核心之上构建了一个现代微服务层。随着时间的推移，你逐渐迁移各个部分。这是处理技术债务的明智方法。传奇。' }, stats: { competence: 70, ethics: 20, leadership: 50, innovation: 60 } }
        ]
    },
    {
        id: 'se_010',
        text: {
            en: '🤖 The AI Displacement: The Board wants to replace 50% of the engineering team with an "AI Coder" tool to save $5M. Your team is terrified. You are the CTO. How do you lead?',
            th: '🤖 การแทนที่ด้วย AI: บอร์ดต้องการปลดคนในทีมวิศวกรรมออก 50% แล้วใช้เครื่องมือ "AI Coder" แทนเพื่อลดค่าใช้จ่าย 150 ล้านบาท ทีมคุณกำลังเสียขวัญ คุณคือ CTO จะนำทีมยังไง?',
            zh: '🤖 AI 取代：董事会希望用“AI 编程”工具取代 50% 的工程团队，以节省 500 万美元。你的团队被吓坏了。你是 CTO。你如何领导？'
        },
        options: [
            { id: 'A', text: { en: '🚀 Adopt Aggressively: "Fire them. Numbers don\'t lie. The future is automated."', th: '🚀 รับมาใช้แบบเต็มสูบ: "ไล่ออกเลย ตัวเลขไม่โกหก อนาคตคือระบบอัตโนมัติ"', zh: '🚀 积极采用：“开除他们。数字不会说谎。未来是自动化的。”' }, consequence: { en: '⚠️ Efficiency at a Price. You fire half the team. The remaining half works with the AI. Profits go up, but culture dies. You are seen as a cold corporate machine. Innovation slows later.', th: '⚠️ ประสิทธิภาพที่แลกมาด้วยความเจ็บปวด คุณไล่ทีมออกครึ่งนึง คนที่เหลือต้องทำงานกับ AI กำไรพุ่งพยานแต่วัฒนธรรมองค์กรพินาศ ทุกคนมองว่าคุณเป็นเครื่องจักรที่เลือดเย็น นวัตกรรมจะเริ่มถอยหลังในภายหลัง', zh: '⚠️ 有代价的效率。你解雇了一半的团队。剩下的一半与 AI 合作。利润上升，但文化消失了。你被视为冷酷的企业机器。创新随后放缓。' }, stats: { competence: 30, ethics: -80, leadership: -50, innovation: 80 } },
            { id: 'B', text: { en: '📚 Retrain and Evolve: "Keep everyone. Use AI to double our output. We don\'t shrink, we grow."', th: '📚 ฝึกใหม่และพัฒนาไปต่อ: "เก็บทุกคนไว้ ใช้ AI เพิ่มผลงาน 2 เท่า เราจะไม่หดตัว เราจะโต"', zh: '📚 重新培训和发展：“留住所有人。利用 AI 使产出翻倍。我们不收缩，我们扩张。”' }, consequence: { en: '✅ Visionary Leader. You convince the board to keep everyone but use AI to make them 2x faster. You launch 3x more products. The company thrives, and your team is the most elite in the industry. Masterpiece.', th: '✅ ผู้นำที่มีวิสัยทัศน์ คุณกล่อมบอร์ดให้รักษาทุกคนไว้แต่ใช้ AI เพื่อให้พนักงานทำงานเร็วขึ้น 2 เท่า คุณเปิดตัวสินค้าได้มากกว่าเดิม 3 เท่า บริษัทเติบโตและทีมคุณคือทีมระดับเทพที่สุดในวงการ สุดยอดฝีมือ', zh: '✅ 有远见的领导者。你说明董事会保留所有人，但利用 AI 使他们的速度提高 2 倍。你发布了 3 倍多的产品。公司蓬勃发展，你的团队是业内最精英的。杰作。' }, stats: { competence: 50, ethics: 50, leadership: 90, innovation: 90 } },
            { id: 'C', text: { en: '✊ Protest the Board: "I refuse to fire good people for a bot. I resign."', th: '✊ ประท้วงบอร์ด: "ผมไม่ไล่คนเก่งออกเพื่อหุ่นยนต์หรอก ผมลาออก"', zh: '✊ 抗议董事会：“我拒绝为了机器人开除好员工。我辞职。”' }, consequence: { en: '❌ Career Suicide. You refuse to implement the plan. The board fires you and replaces you with someone who will. You lose your job, but kept your soul. The team misses you.', th: '❌ ฆ่าตัวตายทางการทำงาน คุณปฏิเสธที่จะทำตามแผน บอร์ดไล่คุณออกและหาคนอื่นมาทำแทน คุณเสียงานแต่รักษาจิตวิญญาณไว้ได้ ทีมงานโหยหาและคิดถึงคุณมาก', zh: '❌ 职业自杀。你拒绝执行该计划。董事会解雇了你，并换了一个会执行的人。你丢了工作，但保留了灵魂。团队很想念你。' }, stats: { competence: 20, ethics: 80, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '🤔 Gradual Trial: "Let\'s test it in one small team first. Don\'t rush."', th: '🤔 ค่อยๆ เริ่มทีละนิด: "ขอลองกับทีมเล็กๆ ก่อน อย่าเพิ่งรีบ"', zh: '🤔 逐步试验：“先在一个小团队测试。别急。”' }, consequence: { en: '😐 Mediocre Middle. You test it in one small department. It’s slow and produces mixed results. The board is annoyed at the delay, and the team is still anxious. Indecisive.', th: '😐 ทางสายกลางที่ง่อยๆ คุณทดสอบในแผนกเล็กๆ แผนกเดียว มันช้าและผลลัพธ์ก็กึ่งๆ กลางๆ บอร์ดรำคาญที่ล่าช้าและทีมก็ยังกังวลอยู่ตลอด ไม่เฉียบขาดพอ', zh: '😐 平庸的中间路线。你在一个部门进行测试。速度缓慢，结果复杂。董事会对延误感到恼火，团队依然焦虑。犹豫不决。' }, stats: { competence: 10, ethics: 30, leadership: 10, innovation: 30 } }
        ]
    },
    {
        id: 'se_011',
        text: {
            en: '⚔️ The Code Review War: You find a critical logic flaw in a Senior Engineer\'s pull request. He replies, "I wrote this system before you were born. It works." and merges it anyway. It crashes prod 2 hours later.',
            th: '⚔️ สงครามรีวิวโค้ด: คุณเจอบั๊กร้ายแรงใน PR ของรุ่นพี่ซีเนียร์ เขาตอบกลับว่า "พี่เขียนระบบนี้ตั้งแต่เอ็งยังไม่เกิด มันเวิร์คเชื่อพี่" แล้วกด Merge เลย 2 ชั่วโมงต่อมา Production ล่ม',
            zh: '⚔️ 代码审查战争：你在高级工程师的PR中发现严重逻辑漏洞。他回：“我写这系统时你还没生呢。没问题。”然后强行合并。2小时后生产环境崩了。'
        },
        options: [
            { id: 'A', text: { en: '🤐 Fix it Silently: "Revert his commit, fix it, force push. Don\'t embarrass him."', th: '🤐 แอบแก้: "Revert แล้วแก้ แล้ว Force Push อย่าให้พี่เขาเสียหน้า"', zh: '🤐 悄悄修：“回滚，修复，强推。别让他难堪。”' }, consequence: { en: '😐 Peacekeeper. Site is up. Senior keeps his ego. But he learns nothing and will do it again.', th: '😐 ผู้รักษาสันติภาพ เว็บใช้ได้ พี่แกหน้าไม่แตก แต่แกไม่ได้เรียนรู้อะไรเลย เดี๋ยวก็ทำอีก', zh: '😐 维和者。网站好了。前辈保住了面子。但他啥也没学到，下次还敢。' }, stats: { competence: 40, ethics: 20, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '📢 "I Told You So": "Post the crash logs in the public channel and tag him. \'See? I warned you.\'"', th: '📢 "บอกแล้วไม่ฟัง": "แปะ Log ความพังลงแชทกลุ่มแล้วแท็กแก \'เห็นมั้ย? ผมเตือนแล้ว\'"', zh: '📢 “早说了”：“把崩溃日志发公群并@他。‘看吧？警告过你了。’”' }, consequence: { en: '🔥 Toxic Victory. You are right, but everyone hates you. You win the battle, lose the war.', th: '🔥 ชนะแบบเป็นพิษ คุณถูก แต่ทุกคนเกลียดขี้หน้า ชนะศึกแต่แพ้สงคราม', zh: '🔥 有毒的胜利。你对了，但大家都恨你。赢了战役，输了战争。' }, stats: { competence: 40, ethics: 10, leadership: -40, innovation: 0 } },
            { id: 'C', text: { en: '🧹 Post-Mortem Leadership: "Lead the RCA meeting. Focus on \'Process\' not \'Person\'. Add a rule blocking merges with unresolved comments."', th: '🧹 เป็นผู้นำการสรุปบทเรียน: "นำประชุม RCA เน้นที่ \'กระบวนการ\' ไม่ใช่ \'ตัวบุคคล\' เพิ่มกฎห้าม Merge ถ้ายังมีคอมเมนต์ค้าง"', zh: '🧹 复盘领导力：“主导复盘会。对事不对人。定规矩：有未解决评论禁止合并。”' }, consequence: { en: '✅ Senior Maturity. You turn a disaster into a team improvement. The Senior eventually apologizes privately.', th: '✅ วุฒิภาวะสูง เปลี่ยนหายนะเป็นการพัฒนาทีม สุดท้ายรุ่นพี่มาขอโทษส่วนตัว', zh: '✅ 高级成熟度。变灾难为团队改进。前辈最终私下道歉。' }, stats: { competence: 60, ethics: 50, leadership: 60, innovation: 20 } },
            { id: 'D', text: { en: '🚪 Let Him Fix It: "Wake him up at 2 AM. \'Your merge broke prod. Your fix.\'"', th: '🚪 ให้แกแก้เอง: "โทรปลุกแกตอนตี 2 \'พี่ Merge พัง พี่มาแก้เอง\'"', zh: '🚪 让他修：“凌晨2点叫醒他。‘你搞崩的。你来修。’”' }, consequence: { en: '⚖️ Harsh Justice. He fixes it. He hates you, but he respects the code more now.', th: '⚖️ ยุติธรรมที่โหดร้าย แกซ่อมเสร็จ แกเกลียดคุณ แต่แกเคารพโค้ดมากขึ้น', zh: '⚖️ 严厉的正义。他修好了。他恨你，但他现在更敬畏代码了。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'se_012',
        text: {
            en: '🐛 The Phantom Bug: A critical bug is affecting 10% of users. You cannot reproduce it locally. Logs are empty. Marketing is screaming. It "works on my machine".',
            th: '🐛 บั๊กผีสิง: บั๊กร้ายแรงกระทบผู้ใช้ 10% คุณจำลองปัญหาที่เครื่องตัวเองไม่ได้ Log ก็ว่างเปล่า การตลาดโวยวาย แต่มัน "เวิร์คที่เครื่องผมนะ"',
            zh: '🐛 幽灵Bug：严重Bug影响10%用户。本地无法复现。日志空白。市场部咆哮。但“在我机器上是好的”。'
        },
        options: [
            { id: 'A', text: { en: '🕵️ Add Excessive Logging: "Deploy a version with debug logs enabled everywhere. Watch the stream."', th: '🕵️ อัด Log ยับๆ: "ปล่อยเวอร์ชันติด Debug Log ทุกจุด แล้วนั่งเฝ้าจอ"', zh: '🕵️ 狂加日志：“发个全开Debug日志的版本。盯着流看。”' }, consequence: { en: '✅ Data Wins. You catch the edge case (a specific browser extension). Fixed in hour.', th: '✅ ข้อมูลชนะ คุณเจอเคสเฉพาะ (Extension บางตัว) แก้เสร็จในชั่วโมงเดียว', zh: '✅ 数据胜利。抓到了边缘情况（某个浏览器插件）。1小时搞定。' }, stats: { competence: 60, ethics: 30, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '🤷 Ignore Unknowns: "If I can\'t reproduce it, it doesn\'t exist. Tell users to clear cache."', th: '🤷 ช่างมัน: "ถ้าเครื่องผมไม่เป็น แปลว่าไม่มีบั๊ก บอกลูกค้าเคลียร์ Cache ไป"', zh: '🤷 无视未知：“复现不了就是不存在。叫用户清缓存。”' }, consequence: { en: '📉 Churn. It was a race condition. Users leave. You look lazy.', th: '📉 ลูกค้าหาย มันคือ Race condition ลูกค้าหนี คุณดูขี้เกียจ', zh: '📉 流失。那是竞态条件。用户跑了。你显懒。' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '📞 Call Customers: "Get on a Zoom call with an affected user and debug live."', th: '📞 โทรหาลูกค้า: "ขอ Zoom กับคนที่เจอปัญหาแล้ว Debug สดๆ"', zh: '📞 致电客户：“找个受影响用户Zoom连线，现场调试。”' }, consequence: { en: '✨ Customer Hero. User feels valued. You find the bug (environment variable missing).', th: '✨ ฮีโร่ของลูกค้า ลูกค้าปลื้ม คุณเจอบั๊ก (Environment variable หาย)', zh: '✨ 客户英雄。用户感动。你找到Bug（环境变量缺失）。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '🔄 Restart Servers: "Have you tried turning it off and on again?"', th: '🔄 รีเซิร์ฟเวอร์: "ลองปิดแล้วเปิดใหม่ยัง?"', zh: '🔄 重启服务器：“试试重启？”' }, consequence: { en: '🩹 Band-aid. It fixes it for 10 minutes. Then it comes back. You look incompetent.', th: '🩹 พลาสเตอร์ยา หายไป 10 นาทีแล้วก็กลับมาอีก คุณดูไร้น้ำยา', zh: '🩹 创可贴。好了10分钟。又出来了。显得你无能。' }, stats: { competence: 10, ethics: 10, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'se_013',
        text: {
            en: '📄 The Documentation Debt: You finish a complex feature. You can ship it NOW (on time) without docs, or spend 2 days documenting it (late). The team relies on this docs.',
            th: '📄 หนี้เอกสาร: ทำฟีเจอร์ซับซ้อนเสร็จแล้ว จะปล่อยของ "ตอนนี้" (ทันเวลา) แต่ไม่มีเอกสาร หรือขอเวลา 2 วันทำเอกสาร (ส่งช้า) ทีมต้องใช้เอกสารนี้',
            zh: '📄 文档债：完成复杂功能。是“现在”发（准时）但无文档，还是花2天写文档（迟到）。团队依赖这就文档。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Ship No Docs: "Code is the documentation. Read the source, Luke."', th: '🚀 ส่งเลยไม่ง้อ Docs: "โค้ดคือเอกสาร ไปอ่าน Source เอาสิ"', zh: '🚀 发版无文档：“代码即文档。去读源码吧年轻人。”' }, consequence: { en: '⚠️ Instant Regret. Next week, 5 devs ask you the same questions. You spend 10 hours explaining. Net loss.', th: '⚠️ กรรมตามสนอง อาทิตย์หน้า dev 5 คนมาถามคำถามเดิมๆ คุณเสียเวลา 10 ชม. อธิบาย ขาดทุนยับ', zh: '⚠️ 即刻后悔。下周5个开发问同样问题。你花10小时解释。亏大了。' }, stats: { competence: 30, ethics: 10, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '📝 Delay for Docs: "I refuse to ship unmaintainable code. We launch Tuesday."', th: '📝 เลื่อนเพื่อเขียน Docs: "ผมไม่ปล่อยโค้ดที่ดูแลไม่ได้ เจอกันวันอังคาร"', zh: '📝 延期写文档：“拒绝发不可维护的代码。周二见。”' }, consequence: { en: '✅ Quality Standard. PM grumbles, but onboarding new devs becomes 5x faster. Long term win.', th: '✅ มาตรฐานคุณภาพ PM บ่นอุบ แต่สอนงานเด็กใหม่เร็วขึ้น 5 เท่า ชนะระยะยาว', zh: '✅ 质量标准。PM嘀咕，但新人上手快了5倍。长远赢。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Wiki Later: "Ship now, I promise to write docs on the weekend." (Narrator: He did not.)', th: '🤝 เดี๋ยวมาเขียน: "ส่งก่อน สัญญาว่าเสาร์อาทิตย์จะมาเขียน" (คนบรรยาย: เขาไม่เขียน)', zh: '🤝 以后写Wiki：“先发，发誓周末写文档。”（旁白：他没写。）' }, consequence: { en: '🤥 common Lie. Knowledge is lost. 6 months later, you forget how it works too.', th: '🤥 คำโกหกยอดฮิต ความรู้หายสาบสูญ 6 เดือนต่อมาตัวคุณเองก็ลืมว่ามันทำงานไง', zh: '🤥 常见谎言。知识丢失。6个月后你自己也忘了咋回事。' }, stats: { competence: 20, ethics: -10, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🎥 Quick Loom Video: "Record a 5-min screencast walking through the code. Ship it."', th: '🎥 อัดคลิปสั้น: "อัดคลิป 5 นาทีพาดูโค้ด แล้วส่งเลย"', zh: '🎥 快速录屏：“录个5分钟代码以此视频。发版。”' }, consequence: { en: '✨ Efficiency Hack. Better than nothing, fast to make. Team loves it.', th: '✨ ทางลัดทรงประสิทธิภาพ ดีกว่าไม่มี ทำเร็วด้วย ทีมชอบ', zh: '✨ 效率黑客。聊胜于无，制作快。团队很喜欢。' }, stats: { competence: 50, ethics: 30, leadership: 30, innovation: 40 } }
        ]
    },
    {
        id: 'se_014',
        text: {
            en: '⏰ The 3AM Alert: You are on-call. A "High CPU" alert wakes you up at 3 AM. It recovers automatically in 2 minutes. This is the 4th night in a row. You are exhausted.',
            th: '⏰ ปลุกตี 3: คุณเข้าเวร on-call แจ้งเตือน "CPU สูง" ปลุกคุณตอนตี 3 แล้วมันก็หายเองใน 2 นาที นี่คืนที่ 4 แล้ว คุณเพลียร่างพัง',
            zh: '⏰ 凌晨3点警报：值班中。“CPU过高”警报3点把你吵醒。2分钟后自动恢复。这是连续第4晚。你累瘫了。'
        },
        options: [
            { id: 'A', text: { en: '🔕 Snooze Alert: "Silence the alarm. If it breaks effectively, they will call me."', th: '🔕 ปิดแจ้งเตือน: "ปิดแม่ง ถ้าพังจริงเดี๋ยวก็โทรมาเองแหละ"', zh: '🔕 关掉警报：“静音。真炸了会有人给我打电话的。”' }, consequence: { en: '⚠️ Gamble. It might be a memory leak growing. You sleep, but risk a real outage.', th: '⚠️ เสี่ยงดวง มันอาจเป็น Memory leak ที่กำลังโต คุณได้นอนแต่เสี่ยงล่มจริง', zh: '⚠️ 赌博。可能是内存泄漏。你睡了，但冒着真宕机的风险。' }, stats: { competence: 20, ethics: 10, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🔧 Fix Root Cause: "Stay awake, analyze logs, find the cron job causing the spike, reschedule it."', th: '🔧 แก้ต้นเหตุ: "ตื่นมาดู Log หา Cron job ตัวการ แล้วตั้งเวลาใหม่"', zh: '🔧 治本：“不睡了，查日志，找到导致峰值的定时任务，改时间。”' }, consequence: { en: '✅ Sleep Restored. Painful hour now, but peaceful nights forever. Team thanks you.', th: '✅ ได้คืนเวลานอน เจ็บชั่วโมงนี้แต่สบายตลอดไป ทีมขอบคุณ', zh: '✅ 睡眠回归。痛苦一小时，幸福千万夜。团队谢你。' }, stats: { competence: 60, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '📉 Adjust Threshold: "Change alert threshold from 80% to 95%. Problem solved."', th: '📉 ขยับเกณฑ์: "เปลี่ยนเกณฑ์เตือนจาก 80% เป็น 95% จบข่าว"', zh: '📉 调阈值：“把报警阈值从80%调到95%。问题解决。”' }, consequence: { en: '🤔 Lazy Fix. It stops the noise but hides the symptom. Acceptable if CPU is cheap.', th: '🤔 แก้แบบขี้เกียจ เสียงเงียบแต่ซ่อนอาการ พอรับได้ถ้า CPU ถูก', zh: '🤔 懒办法。止噪但掩疾。如果CPU便宜还能接受。' }, stats: { competence: 40, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🔄 Pass to Junior: "Reassign the ticket to the intern. let them learn suffering."', th: '🔄 โยนให้เด็ก: "Assign งานให้เด็กฝึกงาน ให้มันเรียนรู้ความเจ็บปวด"', zh: '🔄 甩给新人：“转单给实习生。让他以此体会痛苦。”' }, consequence: { en: '💀 Toxic Delegation. Junior quits. You are still on call.', th: '💀 โยนงานเป็นพิษ เด็กลาออก คุณก็ยังต้อง on-call อยู่ดี', zh: '💀 有毒甩锅。新人跑路。你还在值班。' }, stats: { competence: 20, ethics: -20, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'se_015',
        text: {
            en: '🎈 The Scope Creep: 2 days before launch, the CEO walks in: "Can we add a dark mode button? It is just CSS, right?" It is NOT just CSS.',
            th: '🎈 ฟีเจอร์งอก: 2 วันก่อนเปิดตัว CEO เดินมาบอก "ขอปุ่ม Dark Mode ด้วยได้ไหม แค่ CSS เองนิ?" มันไม่ใช่แค่ CSS เว้ย!',
            zh: '🎈 范围蔓延：发布前2天，CEO进来说：“加个夜间模式按钮呗？就是点CSS对吧？” 这绝对不止是CSS。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Hard No: "Code freeze was Monday. We launch as is. We can do it in v1.1."', th: '🛑 ไม่!: "เราแช่แข็งโค้ดไปตั้งแต่วันจันทร์ เปิดตัวตามนี้ v1.1 ค่อยว่ากัน"', zh: '🛑 坚决不：“周一就封版了。按原样发。v1.1再说。”' }, consequence: { en: '✅ Boundaries. CEO respects the launch discipline. Product is stable.', th: '✅ ขอบเขตชัดเจน CEO เคารพวินัย โปรดักต์เสถียร', zh: '✅ 边界。CEO尊重发布纪律。产品稳定。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '🤕 Yes (Crunch Time): "Okay... team, cancel your weekend plans. We are doing Dark Mode."', th: '🤕 ได้ครับ (นรกแตก): "โอเค... ทุกคน ยกเลิกนัดเสาร์อาทิตย์ เราจะทำ Dark Mode"', zh: '🤕 好（加班）：“好吧…大家取消周末计划。我们要搞夜间模式。”' }, consequence: { en: '💀 Team Revolt. You ship Dark Mode, but it flickers. 2 devs burn out instantly.', th: '💀 ทีมลุกฮือ ได้ Dark Mode แต่มันกระพริบ วิศวกร 2 คนหมดไฟทันที', zh: '💀 团队造反。发了夜间模式，但是闪屏。2个开发当场累瘫。' }, stats: { competence: 30, ethics: 10, leadership: -40, innovation: 10 } },
            { id: 'C', text: { en: '🎨 Fake It: "Add a button that says \'Coming Soon\'. CEO sees the button, he is happy."', th: '🎨 หลอกทำ: "ใส่ปุ่มไป พอกดขึ้ว่า \'เร็วๆ นี้\' CEO เห็นปุ่มก็พอใจแล้ว"', zh: '🎨 糊弄：“加个按钮点开显示‘以此敬请期待’。CEO看见按钮就开心了。”' }, consequence: { en: '✨ Clever UI. Marketing loves the teaser. Zero code risk.', th: '✨ UI ฉลาดๆ การตลาดชอบ Teaser ไม่เสี่ยงบั๊ก', zh: '✨ 聪明UI。市场部喜欢预告。零代码风险。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '🤝 Phase 2: "Yes, but we trade it for the \'Search\' feature. Can\'t have both."', th: '🤝 เฟส 2: "ได้ครับ แต่ต้องแลกกับฟีเจอร์ \'ค้นหา\' นะ เอาทั้งคู่ไม่ทัน"', zh: '🤝 二期：“行，但得拿‘搜索’功能换。鱼熊不可兼得。”' }, consequence: { en: '⚖️ Trade-off. CEO realizes costs. Backs down. You defended the timeline.', th: '⚖️ ข้อแลกเปลี่ยน CEO รู้ซึ้งถึงต้นทุน และยอมถอย คุณปกป้องไทม์ไลน์สำเร็จ', zh: '⚖️ 权衡。CEO意识到成本。退缩。你守住了进度。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 } }
        ]
    },

    // -------------------------------------------------------------------------
    // SECTION 3: SENIOR ENGINEER (Questions 16-25)
    // -------------------------------------------------------------------------

    {
        id: 'se_016',
        text: {
            en: '☁️ AWS Shock: Cloud bill projected $50k (usually $5k). A dev left a GPU cluster running all weekend. Finance screaming.',
            th: '☁️ ช็อกบิล AWS: บิลคลาวด์พุ่ง 50k (ปกติ 5k) dev ลืมปิด GPU ทั้งเสาร์อาทิตย์ การเงินกรีดร้อง',
            zh: '☁️ AWS惊魂：云账单预估5万（平时5千）。开发忘关GPU集群跑了周末。财务咆哮。'
        },
        options: [
            { id: 'A', text: { en: '🐁 Hide Cost: "Use Spot Instances aggressively aggressively rest of month to average down."', th: '🐁 แอบลด: "ใช้ Spot Instances แบบบ้าระห่ำถัวเฉลี่ยลงมา"', zh: '🐁 藏成本：“剩下日子全用Spot实例把平均拉下来。”' }, consequence: { en: '⚠️ Risky Coverup. App performance unstable. Playing shell game with money.', th: '⚠️ ปกปิดเสี่ยง แอปไม่นิ่ง เล่นปาหี่การเงิน', zh: '⚠️ 冒险掩盖。应用不稳。玩弄财务游戏。' }, stats: { competence: 30, ethics: -10, leadership: 10, innovation: 20 } },
            { id: 'B', text: { en: '🗣️ Own & Negotiate: "Talk to Finance. Call AWS for one-time refund credit."', th: '🗣️ ยอมรับและเจรจา: "คุยการเงิน โทรขอ AWS ลดหย่อนครั้งแรก"', zh: '🗣️ 担当谈判：“找财务。找AWS要一次性退款额度。”' }, consequence: { en: '✅ Senior Move. 80% refund. Implement budget alerts. Process improved.', th: '✅ โปรมาก ได้คืน 80% ตั้งแจ้งเตือนงบ ปรับปรุงระบบ', zh: '✅ 高级操作。退80%。设预算警报。流程改进。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 10 } },
            { id: 'C', text: { en: '🔪 Throw Dev Under Bus: "It was Kevin. Dock his bonus."', th: '🔪 โทษลูกน้อง: "ไอ้เควินทำ หักโบนัสมัน"', zh: '🔪 拉垫背：“是Kevin。扣他奖金。”' }, consequence: { en: '💀 Moral Suicide. Money resolved, team hates you. Kevin quits.', th: '💀 ตายทางศีลธรรม เรื่องจบ ทีมเกลียด เควินออก', zh: '💀 道德自杀。钱平了，团队恨你。Kevin跑路。' }, stats: { competence: 20, ethics: -60, leadership: -60, innovation: 0 } },
            { id: 'D', text: { en: '🛠️ Auto-Kill Switch: "Write Lambda to kill untagged instances Friday 6PM."', th: '🛠️ ระบบฆ่าออโต้: "เขียน Lambda ปิดเครื่องไม่มีแท็กตอน 6 โมงศุกร์"', zh: '🛠️ 自动灭杀：“写Lambda周五6点杀未标记实例。”' }, consequence: { en: '✨ Engineering Soln. Prevent future error with code. Finance happy.', th: '✨ แก้ด้วยวิศวกรรม กันพลาดอนาคต การเงินชอบ', zh: '✨ 工程解法。代码防错。财务满意。' }, stats: { competence: 60, ethics: 30, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'se_017',
        text: {
            en: '🏚️ The Monolith: Core system takes 40m to deploy. Fragile. CTO wants Microservices. Team not ready for distributed complexity.',
            th: '🏚️ Monolith: ระบบหลักดีพลอย 40 นาที เปราะบาง CTO อยากได้ Microservices ทีมยังไม่พร้อมรับความซับซ้อน',
            zh: '🏚️ 单体怪兽：核心系统部署40分钟。脆弱。CTO要微服务。团队搞不定分布式复杂度。'
        },
        options: [
            { id: 'A', text: { en: '🧱 Modular Monolith: "Keep codebase, strict boundaries. Clean up first."', th: '🧱 Modular Monolith: "โค้ดเดิม แต่แบ่งขอบเขตให้ชัด จัดระเบียบก่อน"', zh: '🧱 模块化单体：“保留代码库，严控边界。先清理。”' }, consequence: { en: '✅ Pragmatic. Improve speed without DevOps tax. Stepping stone.', th: '✅ ปฏิบัติจริง เร็วขึ้นไม่ต้องจ่ายภาษี DevOps ก้าวแรกที่ดี', zh: '✅ 务实。提速且无DevOps税。坚实的一步。' }, stats: { competence: 60, ethics: 30, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '💥 Big Bang Rewrite: "Pause 6 months. Split to 20 services. Kubernetes!"', th: '💥 รื้อใหญ่: "หยุด 6 เดือน แยก 20 services ลง K8s!"', zh: '💥 大爆炸重写：“停工6个月。拆20个服务。上K8s！”' }, consequence: { en: '💀 Disaster. Latency explodes. Debugging nightmare. Business stalls.', th: '💀 หายนะ Latency ทะลุ ดีบักยาก ธุรกิจชะงัก', zh: '💀 灾难。延迟爆炸。调试噩梦。业务停滞。' }, stats: { competence: 20, ethics: 20, leadership: -10, innovation: 40 } },
            { id: 'C', text: { en: '🕵️ Strangler Pattern: "Peel off ONE service (Search). Prove it. Repeat."', th: '🕵️ Strangler: "แยกออกมาตัวเดียว (Search) พิสูจน์ว่าเวิร์ค แล้วค่อยทำต่อ"', zh: '🕵️ 绞杀者模式：“剥离一个服务（搜索）。验证。重复。”' }, consequence: { en: '✨ Textbook. Lower risk. Early value. Team learns incrementally.', th: '✨ ตามตำรา เสี่ยงต่ำ ได้ค่าเร็ว ทีมค่อยๆ เรียนรู้', zh: '✨ 教科书。低风险。早期价值。团队渐进学习。' }, stats: { competence: 60, ethics: 30, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '🚫 Do Nothing: "Microservices are fad. Add RAM."', th: '🚫 ไม่ทำไร: "Microservices กระแสหลอก เพิ่ม RAM จบ"', zh: '🚫 啥也不做：“微服务是噱头。加内存。”' }, consequence: { en: '📉 Stagnation. Devs leave. Changes risky. Slow business.', th: '📉 หยุดนิ่ง คนออก เปลี่ยนยาก ธุรกิจช้า', zh: '📉 停滞。人跑了。变更险。业务慢。' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: -30 } }
        ]
    },
    {
        id: 'se_018',
        text: {
            en: '🎤 The Tech Conference: You are invited to speak at a major conf. Same day as critical product launch you lead. CEO implies you should skip conf.',
            th: '🎤 งานคอนฯ: ได้เชิญพูดงานใหญ่ วันเดียวกับเปิดตัวโปรดักชันที่คุณเป็นหัวหอก CEO เปาลมให้เทงานพูด',
            zh: '🎤 技术大会：受邀演讲大厂会。同天你负责的核心产品上线。CEO暗示你别去了。'
        },
        options: [
            { id: 'A', text: { en: '🤐 Skip Conf: "Team needs me. Career can wait."', th: '🤐 เทงานพูด: "ทีมต้องการผม ชื่อเสียงรอได้"', zh: '🤐 鸽演讲：“团队需要我。职业生涯能等。”' }, consequence: { en: '😐 Loyal but Invisible. Launch succeeds. You are exhausted/unrecognized outside.', th: '😐 ภักดีแต่ไร้ตัวตน งานสำเร็จ แต่คุณหมดแรงและโลกลืม', zh: '😐 忠诚但透明。上线成功。你累且默默无闻。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '✈️ Go to Conf: "Delegate launch to deputy. I represent company brand."', th: '✈️ ไปพูด: "มอบหมายรองหัวหน้า ผมไปสร้างแบรนด์บริษัท"', zh: '✈️ 去演讲：“授权副手。我代表公司品牌。”' }, consequence: { en: '✅ Growth. Deputy steps up (good test). You recruit 3 engineers at conf.', th: '✅ เติบโต รองได้โชว์ของ คุณได้ dev ใหม่ 3 คนจากงาน', zh: '✅ 成长。副手上位（好测试）。你在大会招了3人。' }, stats: { competence: 40, ethics: 40, leadership: 60, innovation: 30 } },
            { id: 'C', text: { en: '💻 Remote Talk: "Pre-record talk or zoom in from war room."', th: '💻 พูดทางไกล: "อัดวิดีโอหรือ Zoom จากห้อง war room"', zh: '💻 远程讲：“录播或者从作战室连线。”' }, consequence: { en: '✨ Compromise. Do both. Stressful day, but you pull it off.', th: '✨ พบกันครึ่งทาง ทำทั้งคู่ วันที่เครียดแต่รอด', zh: '✨ 妥协。都要。压力大，但搞定了。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🔥 Quit: "If CEO doesn\'t support my growth, I leave."', th: '🔥 ลาออก: "CEO ไม่หนุนก็บ้ายบาย"', zh: '🔥 辞职：“CEO不支持我成长，那就拜拜。”' }, consequence: { en: '❌ Extreme. You are jobless. Tech world thinks you are unstable.', th: '❌ สุดโต่ง ตกงาน วงการมองว่าวุฒิภาวะต่ำ', zh: '❌ 极端。失业。圈里觉得你不稳。' }, stats: { competence: 20, ethics: 20, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'se_019',
        text: {
            en: '🔐 The Backdoor Request: Government agency approaches you with a warrant to build a "law enforcement access portal" into your encrypted messaging app. Refusal means potential jail time for contempt of court. Doing it destroys your product\'s core promise.',
            th: '🔐 คำขอประตูหลัง: หน่วยงานรัฐมีหมายศาลให้สร้าง "พอร์ทัลสำหรับเจ้าหน้าที่" เข้าแอปแชทเข้ารหัสของคุณ ปฏิเสธอาจติดคุก ทำไปก็ทำลายจุดขายหลักของโปรดักต์',
            zh: '🔐 后门请求：政府机构带着搜查令来，要在你的加密聊天App里建“执法访问门户”。拒绝可能因藐视法庭坐牢。做了就毁了产品的核心承诺。'
        },
        options: [
            { id: 'A', text: { en: '🙅 Refuse & Fight: "Privacy is a human right. Fight it in the Supreme Court. Leak the warrant to the press."', th: '🙅 สู้ยิบตา: "ความเป็นส่วนตัวคือสิทธิมนุษยชน สู้ในศาลสูงสุด ปล่อยหมายให้สื่อ"', zh: '🙅 拒绝抗争：“隐私是人权。上最高法打官司。把搜查令捅给媒体。”' }, consequence: { en: '⚖️ Martyrdom. Legal fees bankrupt you, but you become a global privacy icon. Brand loyalty skyrockets.', th: '⚖️ ยอมพลีชีพ ค่าทนายทำหมดตัว แต่กลายเป็นไอคอนความเป็นส่วนตัวโลก แบรนด์แกร่งขึ้น', zh: '⚖️ 殉道者。律师费让你破产，但你成全球隐私偶像。品牌忠诚度暴涨。' }, stats: { competence: 40, ethics: 100, leadership: 80, innovation: 20 } },
            { id: 'B', text: { en: '👷 Comply Quietly: "Build the portal. Add strict audit logs. Hope nobody notices."', th: '👷 ยอมทำเงียบๆ: "สร้างให้ ใส่ log ตรวจสอบเข้มงวด หวังว่าจะไม่มีใครรู้"', zh: '👷 悄悄配合：“建门户。加严格审计日志。祈祷没人发现。”' }, consequence: { en: '💀 Trust Death. It leaks eventually. Users leave en masse. Security researchers roast you. Company folds.', th: '💀 ความเชื่อใจตาย สุดท้ายข่าวหลุด ผู้ใช้หนีหมด นักวิจัยด่าเละ บริษัทเจ๊ง', zh: '💀 信任死亡。迟早泄露。用户大规模出走。安全研究员喷死你。公司倒闭。' }, stats: { competence: 30, ethics: -80, leadership: -40, innovation: 10 } },
            { id: 'C', text: { en: '🧨 Canary Trap: "Comply, but update the \'Warrant Canary\' on website to signal users we are compromised."', th: '🧨 กับดักนกขมิ้น: "ยอมทำ แต่ลบ \'Warrant Canary\' หน้าเว็บเพื่อส่งซิกบอกผู้ใช้ว่าเราโดนแล้ว"', zh: '🧨 金丝雀陷阱：“配合，但在网站更新‘金丝雀’信号，暗示用户我们已受损。”' }, consequence: { en: '✨ Clever Rebellion. Users who care notice and leave safely. You followed the law technically but saved your soul.', th: '✨ กบฏฉลาด ผู้ใช้ที่แคร์รู้ทันและหนีทัน คุณทำตามกฎหมายแต่ยังรักษาจิตวิญญาณ', zh: '✨ 聪明的反叛。在意的用户发现并安全撤离。技术上守法，灵魂得救。' }, stats: { competence: 50, ethics: 80, leadership: 60, innovation: 40 } },
            { id: 'D', text: { en: '👋 Quit Job: "I will not build this. Here is my resignation. Good luck replacing me."', th: '👋 ลาออก: "ผมไม่ทำให้ นี่ใบลาออก เชิญหาคนใหม่"', zh: '👋 辞职：“我不干。这是辞呈。祝你们找得到人替我。”' }, consequence: { en: '🛡️ Personal Safety. You avoid jail and the unethical work. But the feature gets built by someone else anyway.', th: '🛡️ รอดตัว ไม่ติดคุกไม่ต้องทำเลว แต่สุดท้ายก็มีคนอื่นมาทำอยู่ดี', zh: '🛡️ 个人安全。躲过牢狱和缺德活。但这功能反正会有别人来做。' }, stats: { competence: 20, ethics: 60, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'se_020',
        text: {
            en: '🤝 The Acquisition: Big Tech Co wants to buy your startup for $50M. They promise to keep the product alive. You know they usually kill products in 18 months. You have 1% equity ($500k).',
            th: '🤝 การเข้าซื้อ: บริษัทยักษ์ใหญ่ขอซื้อสตาร์ทอัพคุณ 1,500 ล้านบาท สัญญาว่าจะให้โปรดักต์อยู่ต่อ คุณรู้ว่าปกติ 18 เดือนก็ปิดทิ้ง คุณมีหุ้น 1% (15 ล้าน)',
            zh: '🤝 收购：大厂要5000万买你创业公司。承诺保留产品。你知道他们通常18个月砍产品。你有1%期权（50万）。'
        },
        options: [
            { id: 'A', text: { en: '💰 Support Deal: "I have student loans. $500k changes my life. Let\'s sell."', th: '💰 เชียร์ขาย: "ผมมีหนี้กยศ. 15 ล้านเปลี่ยนชีวิตผม ขายเถอะ"', zh: '💰 支持交易：“我有助学贷款。50万改变人生。卖吧。”' }, consequence: { en: '💵 Cash Out. You get the money. Product dies in 2 years as predicted. You feel slightly guilty in your Tesla.', th: '💵 รับเงิน โปรดักต์ตายใน 2 ปีตามคาด คุณรู้สึกผิดนิดหน่อยตอนขับ Tesla', zh: '💵 套现。拿到钱。产品2年如期死亡。你坐在特斯拉里有点内疚。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Oppose Deal: "We are growing. We can be worth $500M. Building > Selling."', th: '🛑 ค้านหัวชนฝา: "เรากำลังโต เราไปได้ถึงหมื่นล้าน สร้างดีกว่าขาย"', zh: '🛑 反对交易：“我们在增长。能值5亿。建设>变现。”' }, consequence: { en: '🎲 Risk. Founders sell anyway. You are labeled "troublemaker". Or, they don\'t sell, and company goes bust next year.', th: '🎲 เสี่ยง ผู้ก่อตั้งขายอยู่ดี คุณโดนกาหัว หรือไม่ขายแล้วปีหน้าเจ๊ง', zh: '🎲 风险。创始人照卖。你成“刺头”。或者没卖，明年倒闭。' }, stats: { competence: 40, ethics: 40, leadership: 40, innovation: 40 } },
            { id: 'C', text: { en: '📝 Demands: "Sell only if vest schedule is accelerated and product independence is in contract."', th: '📝 ยื่นเงื่อนไข: "ขายได้แต่ต้อง vest หุ้นเร็วขึ้นและระบุความอิสระในสัญญา"', zh: '📝 提要求：“加速行权且合同保证产品独立才卖。”' }, consequence: { en: '✅ Smart Negotiator. You get better terms. Product survives a bit longer. Founders respect your grit.', th: '✅ นักเจรจา ได้เงื่อนไขดีขึ้น โปรดักต์อยู่นานขึ้นอีกนิด ผู้ก่อตั้งนับถือ', zh: '✅ 精明谈判。条款更好。产品多活一阵。创始人敬佩。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 20 } },
            { id: 'D', text: { en: '🏃 Quiet Exit: "Vote neutral, but start interviewing immediately. I know what comes next."', th: '🏃 เตรียมชิ่ง: "งดออกเสียง แต่เริ่มสัมภาษณ์งานใหม่เลย รู้นะว่าจะเกิดไรขึ้น"', zh: '🏃 悄悄撤：“中立投票，马上面试。我知道接下来会怎样。”' }, consequence: { en: '🛡️ Self Preservation. You land a new job before the "integration" chaos begins. Smart career move.', th: '🛡️ ตัวใครตัวมัน ได้งานใหม่ก่อนมหกรรม "ควบรวม" จะเริ่ม ฉลาดเลือก', zh: '🛡️ 自保。在“整合”混乱前找到下家。职场聪明人。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 } }
        ]
    },

    // -------------------------------------------------------------------------
    // SECTION 4: LEAD / STAFF ENGINEER (Questions 21-30)
    // -------------------------------------------------------------------------

    {
        id: 'se_021',
        text: {
            en: '🔄 The Rewrite Trap: New CTO wants to rewrite the legacy Java monolith into Go. "It will be faster." You know the logic is hidden in 10 years of bug fixes, not documentation.',
            th: '🔄 กับดัก Rewrite: CTO ใหม่จะรื้อ Java Monolith ไปเขียน Go บอก "มันจะเร็วขึ้น" คุณรู้ว่าตรรกะมันซ่อนอยู่ใน Bug fixes 10 ปี ไม่ใช่ในเอกสาร',
            zh: '🔄 重写陷阱：新CTO要把Java单体重写成Go。“会更快”。你知道逻辑都在10年的补丁里，不在文档里。'
        },
        options: [
            { id: 'A', text: { en: '🚦 Stop It: "I will lie in front of the bulldozers. Rewrites kill companies. Refactor incrementally."', th: '🚦 ขวางรถถัง: "ข้ามศพผมไปก่อน Rewrite ฆ่าบริษัทมาเยอะแล้ว ค่อยๆ Refactor เถอะ"', zh: '🚦 叫停：“我会躺在推土机前。重写搞死公司。渐进重构。”' }, consequence: { en: '✅ Voice of Reason. CTO annoyed but listens. You save company from 2 years of zero features.', th: '✅ เสียงแห่งเหตุผล CTO รำคาญแต่ฟัง คุณช่วยบริษัทจาก 2 ปีที่ไม่มีฟีเจอร์ใหม่', zh: '✅ 理性之声。CTO烦但听了。救了公司免于2年无产出。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🤷 Let Them Burn: "Sure, Go is fun. I\'ll learn Go on company time while this projects crashes."', th: '🤷 ปล่อยให้ไหม้: "เอาสิ Go สนุกดี ผมจะเรียน Go กินเงินเดือนตอนโปรเจกต์พัง"', zh: '🤷 随它去：“好啊，Go好玩。趁项目崩盘我公费学Go。”' }, consequence: { en: '📉 Selfish Gain. You learn Go. Project fails miserably. CTO fired. You survive with new skills.', th: '📉 เห็นแก่ตัว ได้สกิล Go โปรเจกต์พังเละ CTO โดนไล่ออก คุณรอดพร้อมสกิลใหม่', zh: '📉 自私获利。学会Go。项目惨败。CTO被开。你带着新技能幸存。' }, stats: { competence: 40, ethics: 10, leadership: -20, innovation: 40 } },
            { id: 'C', text: { en: '🔍 Isolate Core: "Rewrite only the high-throughput payment service in Go. Keep the messy business logic in Java."', th: '🔍 แยกส่วนหลัก: "เขียนใหม่แค่ระบบจ่ายเงินที่โหลดเยอะเป็น Go ตรรกะธุรกิจรกๆ เก็บไว้ที่ Java"', zh: '🔍 隔离核心：“只把高并发支付服务改成Go。复杂业务逻辑留Java。”' }, consequence: { en: '✨ Architecture Win. Best tool for the job. Performance wins without losing business logic.', th: '✨ ชนะสถาปัตยกรรม เลือกเครื่องมือถูกงาน ประสิทธิภาพดีโดยไม่เสียตรรกะธุรกิจ', zh: '✨ 架构赢。工欲善其事。性能赢且不丢业务逻辑。' }, stats: { competence: 60, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🤖 AI Transpile: "Use AI to convert Java to Go line-by-line using creating mappings."', th: '🤖 AI แปลภาษา: "ใช้ AI แปล Java เป็น Go ทีละบรรทัดสร้าง mapping เอา"', zh: '🤖 AI转译：“用AI把Java逐行转Go。”' }, consequence: { en: '💀 Maintainability Hell. Now you have unreadable "Java-style Go" code. Worst of both worlds.', th: '💀 นรกดูแลรักษา ได้โค้ด "Go สไตล์ Java" ที่อ่านไม่รู้เรื่อง แย่ทั้งคู่', zh: '💀 维护地狱。得到不可读的“Java味Go”代码。最差组合。' }, stats: { competence: 20, ethics: 20, leadership: -10, innovation: 30 } }
        ]
    },
    {
        id: 'se_022',
        text: {
            en: '📉 The Layoff Survivor: 20% of engineering was let go. You kept your job. Remaining team is demoralized. Code quality dropping. CEO says "Do more with less."',
            th: '📉 ผู้รอดชีวิต: เพื่อน 20% โดนให้ออก คุณรอด ทีมที่เหลือหมดอาลัยตายอยาก คุณภาพโค้ดดิ่ง CEO สั่ง "ทำน้อยให้ได้มาก"',
            zh: '📉 裁员幸存者：20%工程被裁。你留下了。剩下面如死灰。代码质量跳水。CEO说“少花钱多办事”。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Reduce Scope: "We have fewer people. We cut the roadmap by 40%. Quality over quantity."', th: '🛡️ ลดเนื้องาน: "คนน้อยลง ตัด Roadmap 40% คุณภาพมาก่อนปริมาณ"', zh: '🛡️ 砍需求：“人少了。Roadmap砍40%。质量第一。”' }, consequence: { en: '✅ Reality Check. Management screams but accepts. Team stabilizes. You prevent burnout.', th: '✅ เช็คความจริง ผู้บริหารกรี๊ดแต่ยอม ทีมเริ่มนิ่ง กันอาการหมดไฟ', zh: '✅ 现实检验。管理层叫唤但接受。团队稳住。防猝死。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 10 } },
            { id: 'B', text: { en: '🔨 Grind Harder: "Push the team. We need to prove we are worth keeping. Late nights for a while."', th: '🔨 ลุยแหลก: "กดดันทีม เราต้องพิสูจน์ความคุ้มค่ากลับบริษัท โต้รุ่งกันหน่อยช่วงนี้"', zh: '🔨 死磕：“逼团队。证明我们值得留。这阵子通宵吧。”' }, consequence: { en: '💀 Second Wave Quit. The best remaining engineers quit due to pressure. You are left with juniors. Project collapses.', th: '💀 ระลอกสอง พนักงานเก่งๆ ที่เหลือลาออกเพราะกดดัน เหลือแต่เด็กใหม่ โปรเจกต์พัง', zh: '💀 第二波离职。剩下最好的也跑了。只剩菜鸟。项目崩。' }, stats: { competence: 30, ethics: 10, leadership: -40, innovation: 10 } },
            { id: 'C', text: { en: '🤖 Automate Everything: "Use the budget we saved on salaries to buy better CI/CD and AI tools."', th: '🤖 ออโตเมตทุกสิ่ง: "เอางบเงินเดือนที่ลดไปมาซื้อ CI/CD และ AI เทพๆ"', zh: '🤖 全自动化：“省下的工资买更好的CI/CD和AI工具。”' }, consequence: { en: '✨ Efficiency Pivot. You force multiplication through tools. Team feels supported by tech.', th: '✨ พลิกวิกฤต ใช้เครื่องมือทูนแรง ทีมรู้สึกมีเทคโนโลยีช่วย', zh: '✨ 效率转型。工具倍增。团队感觉得到了技术支持。' }, stats: { competence: 60, ethics: 30, leadership: 50, innovation: 60 } },
            { id: 'D', text: { en: '🏃 Look for Job: "This ship is sinking. I\'ll do bare minimum while interviewing."', th: '🏃 หางาน: "เรือกำลังจม ทำงานขั้นต่ำพอ แล้วไปสัมภาษณ์"', zh: '🏃 找下家：“船要沉。摸鱼面试。”' }, consequence: { en: '😐 Safety. You leave in 2 months. Company struggles on.', th: '😐 รอดตัว 2 เดือนคุณไป บริษัทดิ้นรนต่อ', zh: '😐 安全。2个月后你走了。公司苟延残喘。' }, stats: { competence: 30, ethics: 20, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'se_023',
        text: {
            en: '🕷️ Technical Debt Interest: The "temporary" NoSQL database you chose 3 years ago is now crashing daily under load. Migration is a 3-month freeze. PM wants new features.',
            th: '🕷️ ดอกเบี้ยหนี้: NoSQL "ชั่วคราว" ที่เลือกเมื่อ 3 ปีก่อนตอนนี้ล่มทุกวัน ย้ายต้องหยุด 3 เดือน PM อยากได้ฟีเจอร์ใหม่',
            zh: '🕷️ 技术债利息：3年前选的“临时”NoSQL现在天天挂。迁移要停工3个月。PM要新功能。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Ultimatum: "System will die in 2 months. We migrate NOW or we have no product."', th: '🛑 คำขาด: "ระบบจะตายใน 2 เดือน ย้ายเดี๋ยวนี้ไม่งั้นไม่มีของขาย"', zh: '🛑 通牒：“系统2个月内必死。现在迁否则没产品。”' }, consequence: { en: '✅ Hard Reset. Painful 3 months, but system is saved. You earn reputation for foresight.', th: '✅ รีเซ็ต เจ็บ 3 เดือนแต่ระบบรอด ได้ชื่อว่าเป็นผู้มีวิสัยทัศน์', zh: '✅ 硬重启。痛苦3个月，系统得救。赢得远见名声。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🩹 Sharding Band-aid: "Shard the NoSQL DB manually in code. It\'s ugly complexity but buys 6 months."', th: '🩹 ทำ Sharding มือในโค้ด ซับซ้อนน่าเกลียดแต่ซื้อเวลาได้ 6 เดือน"', zh: '🩹 分片止血：“代码里手动分片。丑陋复杂但能续6个月。”' }, consequence: { en: '⚠️ Kicking the Can. You survive now. 6 months later, the sharding logic has bugs and migration is 2x harder.', th: '⚠️ เตะถ่วง เวลาผ่านไป Logic Sharding มีบั๊ก การย้ายยากขึ้น 2 เท่า', zh: '⚠️ 踢皮球。现在活了。6个月后分片逻辑出bug，迁移难2倍。' }, stats: { competence: 40, ethics: 20, leadership: 20, innovation: 30 } },
            { id: 'C', text: { en: '🔥 Let it Crash: "Let users see the errors. When customers scream, Management will approve migration."', th: '🔥 ปล่อยล่ม: "ให้ลูกค้าเห็น error พอลูกค้าด่า ผู้บริหารจะอนุมัติย้ายเอง"', zh: '🔥 让它挂：“让用户看报错。客户骂娘了管理层自然批迁移。”' }, consequence: { en: '📉 Machiavellian. It works, but you lose user trust. And you look incompetent for not preventing it.', th: '📉 โหดเหี้ยม ได้ผลแต่เสียความเชื่อใจ ดูไร้น้ำยาที่กันไว้ไม่ได้', zh: '📉 马基雅维利。管用但也丢用户信任。显得你无能没防住。' }, stats: { competence: 20, ethics: 0, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🏗️ Double Write: "Start writing to new SQL DB in background. Dual run. Switch over gradually."', th: '🏗️ เขียนคู่: "เริ่มเขียนลง SQL ใหม่เบื้องหลัง รันคู่ ค่อยๆ สลับ"', zh: '🏗️ 双写：“后台写新SQL库。双跑。逐步切。”' }, consequence: { en: '✨ Zero Downtime. Hardest engineering challenge, but best result. Transition is invisible to users.', th: '✨ ไม่ล่มเลย ยากสุดแต่ผลลัพธ์ดีสุด การเปลี่ยนผ่านเนียนกริบ', zh: '✨ 零停机。最难工程挑战，最好结果。用户无感切换。' }, stats: { competence: 70, ethics: 40, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'se_024',
        text: {
            en: '👑 The Title Inflation: HR creates "Staff Engineer II" titles to give raises without changing responsibility. Your juniors are generating these titles. The actual Staff engineers are insulted.',
            th: '👑 เงินเฟ้อตำแหน่ง: HR สร้าง "Staff Engineer II" เพื่อขึ้นเงินเดือนโดยงานเท่าเดิม เด็กจูเนียร์ได้ตำแหน่งนี้ Staff ตัวจริงรู้สึกโดนหยาม',
            zh: '👑 通货膨胀：HR搞出“主任工程师II”只为加薪不加责。菜鸟都拿这头衔。真主任感觉被侮辱。'
        },
        options: [
            { id: 'A', text: { en: '📢 Standardize Levels: "Write a public Engineering Ladder. Define exactly what Staff means. Enforce it."', th: '📢 มาตรฐานเลเวล: "เขียนบันไดอาชีพสาธารณะ นิยาม Staff ให้เป๊ะ บังคับใช้"', zh: '📢 标准化职级：“写公开工程阶梯。定义啥是主任。强制执行。”' }, consequence: { en: '✅ Clarity. Some "fake" Staffs quit. The real ones stay. Meritocracy restored.', th: '✅ ชัดเจน พวก Staff ปลอมลาออก ตัวจริงอยู่ คืนความยุติธรรม', zh: '✅ 清晰。伪主任跑路。真主任留下。优胜劣汰归位。' }, stats: { competence: 40, ethics: 50, leadership: 60, innovation: 10 } },
            { id: 'B', text: { en: '🤐 Accept it: "Titles are free. If it keeps people happy, who cares? I know who the real seniors are."', th: '🤐 ช่างมัน: "ตำแหน่งของฟรี ถ้าคนแฮปปี้ก็ช่างมัน เรารู้ว่าใครของจริง"', zh: '🤐 接受：“头衔不花钱。大家开心就好。我知道谁是真神。”' }, consequence: { en: '📉 Resume Driven Development. People optimize for promotion packets, not impact. Org becomes bloated.', th: '📉 ทำงานล่าโปรไฟล์ คนเน้นทำยอดเลื่อนขั้นมากกว่าผลงาน องค์กรบวม', zh: '📉 简历驱动开发。全在刷晋升PPT，不干实事。组织虚胖。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🏰 Create "Principal" Tier: "Make a new VIP tier for the ACTUAL leaders. Let the inflation happen below."', th: '🏰 สร้างชั้น "Principal": "สร้างชั้น VIP ใหม่สำหรับผู้นำตัวจริง ปล่อยข้างล่างเฟ้อไป"', zh: '🏰 搞“首席”层：“给真大佬搞个新VIP层。下面随它膨胀。”' }, consequence: { en: '⚖️ Kick Can Upwards. Solves the ego problem for top tier. But entry-level titles become meaningless.', th: '⚖️ แก้ปัญหาเฉพาะหน้า ตัวท็อปพอใจ แต่ตำแหน่งล่างๆ ไร้ความหมาย', zh: '⚖️ 矛盾上移。搞定顶层自尊。但入门头衔废了。' }, stats: { competence: 30, ethics: 20, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '❌ Block Promotions: "Veto any promotion that doesn\'t meet the strict bar. Be the bad guy."', th: '❌ ขวางเลื่อนขั้น: "วีโต้ทุกการเลื่อนขั้นที่ไม่ถึงเกณฑ์ ยอมเป็นตัวร้าย"', zh: '❌ 阻击晋升：“否决任何不达标晋升。做坏人。”' }, consequence: { en: '🛡️ Quality Gate. High friction effectively. You are respected but feared.', th: '🛡️ คัดกรองคุณภาพ ความขัดแย้งสูงแต่ได้ผล คนเกรงกลัวแต่เคารพ', zh: '🛡️ 质量门槛。摩擦大但有效。又敬又怕。' }, stats: { competence: 40, ethics: 40, leadership: 40, innovation: 0 } }
        ]
    },
    {
        id: 'se_025',
        text: {
            en: '🧙 The Bus Factor of 1: Jeff wrote the core trading engine in Assembly optimized for a specific CPU. Jeff is 60 and retiring next month. Nobody understands the code.',
            th: '🧙 ปัจจัยรถชน 1: เจฟฟ์เขียน engine เทรดด้วย Assembly จูนสำหรับ CPU เฉพาะ เจฟฟ์ 60 จะเกษียณเดือนหน้า ไม่มีใครอ่านโค้ดออก',
            zh: '🧙 巴士系数1：Jeff用汇编写的核心交易引擎，针对特定CPU优化。Jeff 60岁下月退休。没人懂代码。'
        },
        options: [
            { id: 'A', text: { en: '🎥 Brain Dump: "Record Jeff explaining every line of code for 4 weeks. Pay him triple."', th: '🎥 ดูดสมอง: "อัดวิดีโอเจฟฟ์อธิบายทุกบรรทัด 4 อาทิตย์ จ่าย 3 เท่า"', zh: '🎥 脑吸：“录Jeff解释每一行代码。录4周。给3倍薪。”' }, consequence: { en: '⚠️ Better than nothing. You have documentation. But still no maintenance skills. You survive day 1.', th: '⚠️ ดีกว่าไม่มี ได้เอกสาร แต่ยังไม่มีสกิลดูแล รอดวันแรก', zh: '⚠️ 聊胜于无。有文档。但还是没维护技能。能活过第一天。' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Retain as Consultant: "Pay Jeff $200k/year to just answer the phone 5 hours a month."', th: '🤝 จ้างเป็นที่ปรึกษา: "จ้างเจฟฟ์ 6 ล้านต่อปี แค่รับโทรศัพท์เดือนละ 5 ชม."', zh: '🤝 留作顾问：“年薪20万刀留Jeff，每月只接5小时电话。”' }, consequence: { en: '🩹 Golden Handcuffs. Expensive insurance. You kick the problem down the road 5 years.', th: '🩹 กุญแจมือทองคำ ประกันราคาแพง ยื้อปัญหาไปอีก 5 ปี', zh: '🩹 金手铐。昂贵保险。问题推迟5年。' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🚧 Black Box It: "Wrap the engine in an API. Treat it as hardware. Build a replacement in Rust in parallel."', th: '🚧 กล่องดำ: "หุ้ม Engine ด้วย API มองเป็นฮาร์ดแวร์ สร้างตัวใหม่ด้วย Rust ขนานกันไป"', zh: '🚧 黑盒化：“API封装引擎。当硬件看。并行用Rust造新的。”' }, consequence: { en: '✨ Strategy. Risk mitigation. You accept you can\'t modify it, so you isolate it.', th: '✨ กลยุทธ์ ลดเสี่ยง ยอมรับว่าแก้ไม่ได้ ก็แยกมันออกมา', zh: '✨ 战略。降险。承认改不了，那就隔离。' }, stats: { competence: 60, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🧬 Pair Programming: "Force Jeff to pair with a Senior dev 8 hours a day. No documentation, transfer intuition."', th: '🧬 จับคู่เขียน: "บังคับเจฟฟ์ประกบ Senior วันละ 8 ชม. ไม่เอาเอกสาร เอาสัญชาตญาณ"', zh: '🧬 结对编程：“逼Jeff跟高级开发每天8小时结对。不要文档，要传直觉。”' }, consequence: { en: '✅ Knowledge Transfer. Exhausting for Jeff. But checking intuition is key. The Senior becomes the new Jeff.', th: '✅ ถ่ายทอดความรู้ เจฟฟ์เหนื่อย แต่สัญชาตญาณสำคัญ Senior กลายเป็นเจฟฟ์คนใหม่', zh: '✅ 知识转移。Jeff累死。但直觉最关键。那个高级开发成了新Jeff。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 10 } }
        ]
    },
    // ... CONTINUED IN NEXT STEP FOR FINAL PART (30-50) ...
    {
        id: 'se_026',
        text: {
            en: '🚨 The Open Source Injection: You discover a popular open-source library used by 70% of the internet (including your app) has a malicious backdoor introduced by a new maintainer. It is "left-pad" level chaos.',
            th: '🚨 การฝังยาพิษ Open Source: คุณเจอว่าไลบรารียอดฮิตที่คนใช้ทั้งโลก (รวมถึงแอปคุณ) มี Backdoor ฝังโดยคนดูแลคนใหม่ มันคือความโกลาหลระดับ "left-pad"',
            zh: '🚨 开源注入：你发现70%互联网（包括你司）都在用的热门开源库被新维护者植入了后门。这是“left-pad”级的混乱。'
        },
        options: [
            { id: 'A', text: { en: '🩹 Pin Version: "Hardcode the previous safe version in package.json. Ignore the chaos. Not my circus."', th: '🩹 ล็อกเวอร์ชัน: "ล็อกเวอร์ชันเก่าที่ปลอดภัยไว้ ช่างหัวชาวบ้าน ไม่ใช่เรื่องของตู"', zh: '🩹 锁版本：“package.json写死上个安全版。无视混乱。不关我事。”' }, consequence: { en: '🛡️ Selfish Safety. You are safe. But the ecosystem burns. Eventually, the safe version becomes incompatible with other dependencies.', th: '🛡️ ปลอดภัยแบบเห็นแก่ตัว คุณรอด แต่โลกไหม้ นานไปเวอร์ชันเก่าก็เข้ากับตัวอื่นไม่ได้', zh: '🛡️ 自私安全。你没事。圈子烧了。最终旧版跟别的依赖也不兼容了。' }, stats: { competence: 30, ethics: 20, leadership: 0, innovation: 0 } },
            { id: 'B', text: { en: '📢 Public Disclosure: "Write a blog post exposing the backdoor immediately. Alert the community."', th: '📢 แฉทันที: "เขียนบล็อกแฉ Backdoor เดี๋ยวนี้ เตือนชุมชนนักพัฒนา"', zh: '📢 公开披露：“马上写博客曝光后门。拉响警报。”' }, consequence: { en: '🏆 Hero Status. You save thousands of companies. You become famous in cybersecurity circles.', th: '🏆 สเตตัสฮีโร่ ช่วยบริษัทเป็นพัน ดังในวงการไซเบอร์', zh: '🏆 英雄。救了数千家公司。安全圈成名。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🍴 Maintain Fork: "Fork the repo to a safe state. Maintain it yourself. Offer it as a trusted alternative."', th: '🍴 ดูแลเอง: "Fork มาทำเองให้ปลอดภัย แจกจ่ายเป็นทางเลือกที่ไว้ใจได้"', zh: '🍴 维护分支：“Fork个安全版自己维护。提供受信替代品。”' }, consequence: { en: '⚙️ Workload Spike. You solve the problem but now maintain a library for free. You get GitHub stars but no sleep.', th: '⚙️ งานงอก แก้ได้แต่ต้องดูแลของฟรี ได้ดาว GitHub แต่ไม่ได้นอน', zh: '⚙️ 工作量剧增。解决问题但免费维护库。赚了Star亏了睡眠。' }, stats: { competence: 60, ethics: 50, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🕵️ Silent Patch: "Patch our servers silently. Don\'t tell anyone to give us a competitive advantage."', th: '🕵️ เงียบกริบ: "แก้เซิร์ฟเวอร์เราเงียบๆ อย่าบอกใคร เราจะได้ได้เปรียบคู่แข่งที่โดนแฮ็ก"', zh: '🕵️ 沉默补丁：“悄悄补自家。别声张，让竞对被黑，以此获利。”' }, consequence: { en: '💀 Villan Arc. Your company survives while competitors get hacked. Karma hits when employees leak your silence.', th: '💀 บทตัวร้าย บริษัทรอด คู่แข่งเละ เวรกรรมตามทันเมื่อพนักงานแฉว่าคุณรู้แต่ไม่บอก', zh: '💀 反派剧本。你活下来竞对被黑。员工泄露你的沉默时报应就来了。' }, stats: { competence: 40, ethics: -60, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'se_027',
        text: {
            en: '📉 The Dead Product: You are the Lead Engineer on "Project X". It has no users. Management loves it, but you know it is a failure. Continuing to build it is a waste of life.',
            th: '📉 โปรดักต์ผีดิบ: คุณเป็น Lead ของ "Project X" ไม่มีคนใช้เลย ผู้บริหารชอบ แต่คุณรู้ว่ามันเจ๊งแน่ การทำต่อคือการเสียชาติเกิด',
            zh: '📉 死产品：你是“X项目”的Lead。没用户。管理层很爱，但你知道它是个败笔。继续做就是浪费生命。'
        },
        options: [
            { id: 'A', text: { en: '🧟 Keep Building: "Collect the paycheck. If they want to pay me to build useless features, fine."', th: '🧟 ทำต่อไป: "กินเงินเดือนไป เขาจ้างให้ทำก็ทำ ดีกว่าตกงาน"', zh: '🧟 继续做：“领工资。给钱做无用功能？行呗。”' }, consequence: { en: '📉 Soul Death. You stagnate. Code quality drops because you don\'t care. You become unhirable.', th: '📉 จิตวิญญาณตาย สกิลหยุดนิ่ง โค้ดห่วยเพราะไม่แคร์ ต่อไปหางานยาก', zh: '📉 灵魂枯竭。停滞。代码烂因为不在乎。变得没人要。' }, stats: { competence: 20, ethics: 10, leadership: -10, innovation: -20 } },
            { id: 'B', text: { en: '🔪 Kill It: "Write a memo to the CEO recommending we shut down the project and pivot resources."', th: '🔪 ฆ่ามันซะ: "เขียน Memo ถึง CEO แนะนำให้ปิดโปรเจกต์และโยกทรัพยากรไปทำอย่างอื่น"', zh: '🔪 杀掉它：“写备忘录给CEO建议关停项目，转移资源。”' }, consequence: { en: '✅ Respect. CEO might be mad initially, but appreciates the honesty. You get moved to a better project.', th: '✅ ได้ใจ CEO อาจโกรธตอนแรกแต่ชอบความจริงใจ คุณโดนย้ายไปโปรเจกต์ที่ดีกว่า', zh: '✅ 尊重。CEO可能先气但感激诚实。你被调去好项目。' }, stats: { competence: 50, ethics: 50, leadership: 60, innovation: 20 } },
            { id: 'C', text: { en: '🎨 Pivot Stealthily: "Slowly morph the product into something users actually want, without asking permission."', th: '🎨 เนียนเปลี่ยนทิศ: "ค่อยๆ แอบเปลี่ยนโปรดักต์ไปเป็นสิ่งที่คนอยากได้จริงๆ โดยไม่บอกข้างบน"', zh: '🎨 潜行转型：“不请求许可，慢慢把产品改成用户真想要的样子。”' }, consequence: { en: '✨ Skunkworks Success. You launch the "v2" and it explodes in popularity. You are hailed as a visionary genius.', th: '✨ ความสำเร็จลับๆ เปิดตัว v2 แล้วปังระเบิด ได้รับการยกย่องว่าเป็นอัจฉริยะ', zh: '✨ 地下工厂的胜利。发布v2爆红。被称为远见天才。' }, stats: { competence: 60, ethics: 30, leadership: 50, innovation: 60 } },
            { id: 'D', text: { en: '🏃 Transfer Teams: "Request a transfer to the AI team. Let Project X be someone else\'s grave."', th: '🏃 ย้ายทีม: "ขอย้ายไปทีม AI ปล่อย Project X เป็นหลุมศพคนอื่น"', zh: '🏃 转组：“申请转去AI组。让X项目成别人的坟墓。”' }, consequence: { en: '🛡️ Escape. You survive. The project lingers on for another year before dying.', th: '🛡️ หนีเอาตัวรอด คุณรอด โปรดักต์เน่าต่ออีกปีค่อยตาย', zh: '🛡️ 逃生。你活了。项目苟了一年才死。' }, stats: { competence: 40, ethics: 20, leadership: 0, innovation: 10 } }
        ]
    },

    // -------------------------------------------------------------------------
    // SECTION 5: ENGINEERING MANAGER / DIRECTOR (Questions 28-35)
    // -------------------------------------------------------------------------

    {
        id: 'se_028',
        text: {
            en: '👥 The Toxic Rockstsar: Your best coder "Dave" closes 2x more tickets than anyone else. But he is rude, refuses to write documentation, and makes junior developers cry in code reviews.',
            th: '👥 ร็อคสตาร์ขยะ: นักเขียนโค้ดเทพ "เดฟ" ปิดงานได้ 2 เท่าของคนอื่น แต่ปากหมา ไม่เขียนเอกสาร และชอบด่าเด็กใหม่จนร้องไห้',
            zh: '👥 毒瘤大神：头号黑客“Dave”干活顶俩。但粗鲁、不写文档，代码审查把新人骂哭。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Protect Dave: "He is too valuable. I\'ll hire a \'handler\' to interface between him and the team."', th: '🛡️ โอ๋เดฟ: "เขาเก่งเกินจะไล่ออก เดี๋ยวหาคนมาคอยเป็นกันชนให้"', zh: '🛡️ 护着Dave：“他太重要。我也个‘保姆’做他和团队的接口。”' }, consequence: { en: '💀 Team Exodus. The "handler" quits. The juniors quit. You are left with Dave and a toxic wasteland.', th: '💀 ทีมแตก คนประสานงานลาออก เด็กใหม่ลาออก เหลือแค่เดฟกับแผนกร้างๆ', zh: '💀 团队出逃。保姆跑了。新人跑了。只剩Dave和一片毒废土。' }, stats: { competence: 30, ethics: -20, leadership: -40, innovation: 10 } },
            { id: 'B', text: { en: '🔨 Fire Dave: "No jerks allowed. Calculate the cost of replacing him vs the cost of team morale."', th: '🔨 ไล่เดฟออก: "ห้ามมีคนถ่อย คำนวณความคุ้มค่าเทียบกับขวัญกำลังใจทีมแล้ว เชิญออก"', zh: '🔨 开除Dave：“拒绝混蛋。算算换他的成本vs团队士气成本。”' }, consequence: { en: '✅ Culture Win. Productivity dips for 2 weeks, then skyrockets because the team feels safe. Collaboration returns.', th: '✅ วัฒนธรรมชนะ งานช้าลง 2 อาทิตย์แล้วพุ่งกระฉูด เพราะทีมสบายใจ ความร่วมมือกลับมา', zh: '✅ 文化赢。产出跌2周，然后暴涨因为团队有了安全感。协作回归。' }, stats: { competence: 50, ethics: 50, leadership: 60, innovation: 0 } },
            { id: 'C', text: { en: '🗣️ Coaching Plan: "Put Dave on a Performance Improvement Plan (PIP) strictly for behavior. Give him 30 days."', th: '🗣️ จับดัดนิสัย: "จับเข้าโปรแกรม PIP เน้นแก้พฤติกรรม ให้เวลา 30 วัน"', zh: '🗣️ 教练计划：“给Dave上PIP（绩效改进），只针对行为。给30天。”' }, consequence: { en: '⚖️ Fair Chance. Dave likely quits or fails, but the team sees you tried. You documented everything for HR.', th: '⚖️ ให้โอกาส เดฟอาจลาออก แต่ทีมเห็นว่าคุณพยายามแล้ว และมีหลักฐานให้ HR', zh: '⚖️ 公平机会。Dave大概率跑或挂，但团队看你在努力。给HR留了底。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 10 } },
            { id: 'D', text: { en: '🏠 Isolate Him: "Let Dave work remotely 100% and only assign him solo R&D projects."', th: '🏠 แยกเดี่ยว: "ให้เดฟทำงานที่บ้าน 100% สั่งแต่งานเดี่ยว R&D"', zh: '🏠 隔离他：“让Dave全远程，只派单人R&D项目。”' }, consequence: { en: '🤔 Temporary Fix. Dave is happy. Team is relieved. But Dave\'s code becomes a mysterious "black box".', th: '🤔 แก้ขัด เดฟแฮปปี้ ทีมโล่ง แต่โค้ดเดฟกลายเป็นกล่องดำพิศวง', zh: '🤔 权宜计。Dave乐意。团队解脱。但Dave的代码成了神秘“黑盒”。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 30 } }
        ]
    },
    {
        id: 'se_029',
        text: {
            en: '⏳ The Estimate Trap: CEO asks "How long to build the AI recommendation engine?" You honestly think 3 months. Marketing wants to announce it in 1 month.',
            th: '⏳ กับดักประเมินเวลา: CEO ถาม "สร้างระบบ AI แนะนำสินค้าใช้กี่เดือน?" คุณคิดว่า 3 เดือน แต่การตลาดจะเปิดตัวเดือนหน้า',
            zh: '⏳ 估时陷阱：CEO问“搞个AI推荐引擎要多久？”你觉得3个月。市场部想1个月后发。'
        },
        options: [
            { id: 'A', text: { en: '🤥 Lie & Crunch: "Say 1 month. Then force the team to work 80 hours/week."', th: '🤥 โกหกแล้วปั่น: "บอก 1 เดือน แล้วบังคับทีมทำงานสัปดาห์ละ 80 ชม."', zh: '🤥 撒谎死磕：“说1个月。然后逼团队一周干80小时。”' }, consequence: { en: '💀 Burnout & Bugs. You deliver a broken demo. Best devs quit. CEO loses trust.', th: '💀 หมดไฟและบั๊กกระจาย งานพัง เดฟเก่งๆ ออก CEO หมดศรัทธา', zh: '💀 猝死&Bug。交个烂Demo。最好的走了。CEO不再信你。' }, stats: { competence: 20, ethics: -40, leadership: -50, innovation: 10 } },
            { id: 'B', text: { en: '🛡️ Honest Pushback: "It takes 3 months. We can deliver a hard-coded demo in 1 month, but not the real thing."', th: '🛡️ พูดตรงๆ: "ใช้ 3 เดือนครับ แต่ถ้าจะเอาเดโมหลอกๆ ให้ทันเดือนหน้าพอได้"', zh: '🛡️ 诚实回绝：“要3个月。1个月只能给个写死的Demo，不是真家伙。”' }, consequence: { en: '✅ Trust. Marketing adjusts campaign. You deliver quality in 3 months. Safety established.', th: '✅ ความเชื่อใจ การตลาดปรับแผน คุณส่งงานดีตอนครบ 3 เดือน', zh: '✅ 下任。市场部调计划。3个月交优品。建立了安全感。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '✂️ Cut Scope: "We can do it in 1 month if we remove personalization, history, and real-time updates."', th: '✂️ ตัดฟีเจอร์: "1 เดือนได้ แต่ตัด Personalization, History และ Real-time ทิ้งนะ"', zh: '✂️ 砍范围：“去个性化、历史记录、实时更新，1个月能做完。”' }, consequence: { en: '✨ Agile Win. You ship an MVP. It sucks, but it exists. You iterate later.', th: '✨ ชนะแบบ Agile ส่ง MVP ห่วยๆ ไปก่อนค่อยแก้', zh: '✨ 敏捷赢。发了个MVP。虽烂但有。以后再迭。”' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🤷 Sandbag Extra: "Tell them 6 months. So when they negotiate down to 3, you get what you wanted."', th: '🤷 เผื่อต่อ: "บอกแม่ง 6 เดือน พอโดนต่อเหลือ 3 ก็เข้าแผนพอดี"', zh: '🤷 虚报：“告诉他们6个月。砍到3个月正好是你想要的。”' }, consequence: { en: '🎲 Negotiation Game. Risky if they say "Too long, we buy a vendor solution". But effective here.', th: '🎲 เกมเจรจา เสี่ยงตรงถ้าเขาบอกนานไปแล้วไปซื้อเจ้าอื่นแทน แต่วิธีนี้ก็ได้ผลบ่อย', zh: '🎲 谈判博弈。如果他们说“太久了买现成的”就崩。但这次管用了。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'se_030',
        text: {
            en: '🕵️ The Hiring Bias: You notice your hiring committee keeps rejecting qualified female candidates because they "don\'t fit the culture" (i.e., they aren\'t gamers/bros). HR ignores it.',
            th: '🕵️ อคติคนจ้าง: กรรมการคัดคนปัดตกผู้หญิงเก่งๆ เพราะ "ไม่เข้ากับวัฒนธรรม" (คือไม่ใช่เกมเมอร์/ขี้เมา) HR ก็ทำมึน',
            zh: '🕵️ 招聘偏见：你发现招聘委老拒优秀的女性候选人，理由是“文化不合”（即不是玩家/兄弟会）。HR装瞎。'
        },
        options: [
            { id: 'A', text: { en: '📢 Intervene: "Force a review of the interview scorecards. Call out the bias in the meeting."', th: '📢 แทรกแซง: "รื้อคะแนนสัมภาษณ์ใหม่ ด่าเรื่องอคติกลางที่ประชุม"', zh: '📢 干预：“强行审查面试打分卡。会上点名批评偏见。”' }, consequence: { en: '✅ Culture Shift. Uncomfortable, but necessary. Diversity improves. Code quality improves (diverse teams perform better).', th: '✅ เปลี่ยนวัฒนธรรม อึดอัดแต่จำเป็น ความหลากหลายดีขึ้น ผลงานดีขึ้น', zh: '✅ 文化转变。不适但必要。多样性提升。代码质量提升（多元团队更强）。' }, stats: { competence: 40, ethics: 60, leadership: 60, innovation: 30 } },
            { id: 'B', text: { en: '🤐 Stay Silent: "I don\'t want to be the \'PC Police\'. I just want to code."', th: '🤐 เงียบ: "ไม่อยากเป็นตำรวจศีลธรรม อยากแค่เขียนโค้ด"', zh: '🤐 沉默：“不想当‘政治正确警察’。只想写代码。”' }, consequence: { en: '📉 Mono-culture Rot. The team becomes an echo chamber. Blind spots miss market opportunities. Talent pool shrinks.', th: '📉 วัฒนธรรมเน่า ทีมกลายเป็นกะลา พลาดโอกาสตลาด หาคนยากขึ้น', zh: '📉 单一文化腐烂。团队成回音室。盲区错失市场。人才池缩水。' }, stats: { competence: 20, ethics: -40, leadership: -30, innovation: -20 } },
            { id: 'C', text: { en: '🕵️ Blind Hiring: "Implement a code-test-first process where names/genders are hidden until the final round."', th: '🕵️ จ้างแบบบอด: "ให้สอบเขียนโค้ดก่อน ปิดชื่อปิดเพศจนกว่าจะรอบสุดท้าย"', zh: '🕵️ 盲聘：“实施先试代码流程。终面前隐藏姓名/性别。”' }, consequence: { en: '✨ Systematic Fix. Bias is removed structurally. Logic wins arguments.', th: '✨ แก้ที่ระบบ ตัดอคติด้วยโครงสร้าง ตรรกะชนะ', zh: '✨ 系统性修复。结构上消除偏见。逻辑胜出。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🚪 Quit: "I cannot work in a sexist environment."', th: '🚪 ลาออก: "ทำงานกับพวกเหยียดเพศไม่ไหว ไปล่ะ"', zh: '🚪 辞职：“无法在歧视环境工作。”' }, consequence: { en: '🛡️ Integrity. You leave. The company doesn\'t change, but you sleep well.', th: '🛡️ ศักดิ์ศรี คุณไป บริษัทเหมือนเดิม แต่คุณสบายใจ', zh: '🛡️ 正直。你走了。公司没变，但你睡得香。' }, stats: { competence: 30, ethics: 50, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'se_031',
        text: {
            en: '💸 The SaaS Pricing Bug: A bug in the billing system charged 1,000 enterprise customers $0.01 instead of $10,000 for last month. CFO wants you to "silently retry" the charges.',
            th: '💸 บั๊กราคา SaaS: ระบบคิดเงินผิด คิดลูกค้าองค์กร 1,000 รายแค่ 0.3 บาท แทนที่จะเป็น 3 แสนบาท CFO สั่งให้ "แอบตัดบัตรใหม่เงียบๆ"',
            zh: '💸 SaaS定价Bug：计费Bug让1000个企业客户上月只付了1分钱而不是1万刀。CFO让你“悄悄重扣”。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Refuse Silent Retry: "That is credit card fraud. We must email customers explaining the error first."', th: '🛑 ปฏิเสธ: "นั่นมันโกงบัตรเครดิต ต้องเมลบอกลูกค้าก่อน"', zh: '🛑 通牒：“系统2个月内必死。现在迁否则没产品。”' }, consequence: { en: '✅ Trust & Legality. Customers are annoyed but pay. You avoid a lawsuit.', th: '✅ ความเชื่อใจและกฎหมาย ลูกค้าเคืองแต่ยอมจ่าย คุณเลี่ยงคุก', zh: '✅以此信任&合法。客户烦但付了。你避开了官司。' }, stats: { competence: 40, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '💸 Do It: "Run the script. CFO calls the shots. The company needs the $10M."', th: '💸 ทำตามสั่ง: "รันสคริปต์ CFO สั่ง บริษัทต้องการเงิน 300 ล้าน"', zh: '💸 照做：“跑脚本。CFO说了算。公司急需这1000万。”' }, consequence: { en: '💀 Chargeback Hell. Banks flag the transactions as fraud. 100% processing fees. Customers terminate contracts.', th: '💀 นรก Chargeback ธนาคารมองว่าโกง โดนค่าปรับ ลูกค้ายกเลิกสัญญา', zh: '💀 拒付地狱。银行标记欺诈。100%手续费。客户解约。' }, stats: { competence: 30, ethics: -50, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🎁 Write it Off: "Advise CFO to forgive the month in exchange for 1-year renewals. Turn fail into sales."', th: '🎁 ยกหนี้: "แนะนำ CFO ให้ยกยอดเดือนนี้แลกกับสัญญาต่ออายุ 1 ปี เปลี่ยนวิกฤตเป็นยอดขาย"', zh: '🎁 一笔勾销：“建议CFO免此月单，换1年续约。化败为销。”' }, consequence: { en: '✨ Genius Biz Move. Customers love the "gift". Retention hits 100%. CFO promotes you.', th: '✨ เกมธุรกิจอัจฉริยะ ลูกค้าปลื้ม "ของขวัญ" ต่อสัญญาครบ CFO เลื่อนตำแหน่งให้', zh: '✨ 商业天才。客户爱这“礼物”。留存率100%。CFO升你职。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 60 } },
            { id: 'D', text: { en: '🤷 Blame Stripe: "Tell users the payment provider had a glitch. Not our fault."', th: '🤷 โทษ Stripe: "บอกผู้ใช้ว่าระบบตัดบัตรมีปัญหา ไม่ใช่ความผิดเรา"', zh: '🤷 怪Stripe：“告诉用户支付商故障。不赖我们。”' }, consequence: { en: '🤥 Weak Lie. Tech users confirm with Stripe it wasn\'t them. You look dumb.', th: '🤥 โกหกไม่เนียน ลูกค้าเช็คกับ Stripe ก็รู้ว่าตอแหล ดูโง่เลย', zh: '🤥 拙劣谎言。懂技术的找Stripe一问便知。你像个傻子。' }, stats: { competence: 20, ethics: -30, leadership: -10, innovation: 10 } }
        ]
    },
    {
        id: 'se_032',
        text: {
            en: '🚢 Build vs Buy: You need an authentication system. Junior team wants to build a custom OAuth provider "to learn". Auth0 costs $5k/month.',
            th: '🚢 สร้าง vs ซื้อ: ต้องใช้ระบบล็อกอิน ทีมเด็กอยากเขียน OAuth เอง "เพื่อการเรียนรู้" Auth0 ราคาเดือนละ 1.5 แสน',
            zh: '🚢 自研vs购买：需认证系统。新人想自研OAuth“为了学习”。Auth0一月5千刀。'
        },
        options: [
            { id: 'A', text: { en: '🧱 Build It: "Save the money. Let the team learn security the hard way."', th: '🧱 สร้างเอง: "ประหยัดเงิน ให้ทีมเรียนรู้ความปลอดภัยแบบเจ็บจริง"', zh: '🧱 自研：“省钱。让团队硬啃安全。”' }, consequence: { en: '💀 Security Disaster. 6 months later, you are hacked via a JWT token flaw. Costs $1M to fix.', th: '💀 หายนะความปลอดภัย 6 เดือนต่อมาโดนแฮ็กผ่าน JWT เสียเงินแก้ 30 ล้าน', zh: '💀 安全灾难。6个月后JWT漏洞被黑。修补花100万。' }, stats: { competence: 30, ethics: 10, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '💳 Buy It: "Auth is commoditized. We build value, not plumbing. Pay Auth0."', th: '💳 ซื้อเหอะ: "ระบบยืนยันตัวตนมันของดาษดื่น เราสร้างมูลค่า ไม่ใช่สร้างท่อประปา จ่าย Auth0 ไป"', zh: '💳 买：“认证是大路货。我们造价值不是造轮子。买Auth0。”' }, consequence: { en: '✅ Focus. Integration takes 2 days. Team focuses on core product features.', th: '✅ โฟกัส เชื่อมต่อเสร็จใน 2 วัน ทีมไปลุยฟีเจอร์หลัก', zh: '✅ 聚焦。集成2天搞定。团队专注核心功能。' }, stats: { competence: 60, ethics: 30, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🏫 Hackathon: "Let them try to break a demo Auth system for 2 days. When they fail, buy Auth0."', th: '🏫 แฮ็กกะธอน: "ให้เวลา 2 วันลองเจาะระบบเดโม พอทำไม่ได้ค่อยซื้อ Auth0"', zh: '🏫 黑客松：“让他们试着破2天Demo认证。搞不定就买Auth0。”' }, consequence: { en: '✨ Educational. Team learns WHY security is hard, then accepts the buy decision happily.', th: '✨ ได้ความรู้ ทีมซึ้งว่าทำไมยาก แล้วยอมรับการซื้ออย่างเต็มใจ', zh: '✨ 教育。团队懂了安全多难，开心地接受购买决定。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 20 } },
            { id: 'D', text: { en: '🛠️ Open Source: "Use Keycloak. Self-hosted. Free but standard."', th: '🛠️ Open Source: "ใช้ Keycloak โฮสต์เอง ฟรีและได้มาตรฐาน"', zh: '🛠️ 开源：“用Keycloak。自托管。免费且标准。”' }, consequence: { en: '⚙️ Operational Tax. It works, but upgrading/managing Keycloak becomes a part-time job.', th: '⚙️ ภาษีการดูแล เวิร์ค แต่ต้องมานั่งอัปเดต Keycloak เป็นงานงอก', zh: '⚙️ 运维税。能用，但维护Keycloak成了兼职。' }, stats: { competence: 50, ethics: 30, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'se_033',
        text: {
            en: '🌴 The "Unlimited" PTO Trap: Company switches to Unlimited PTO. You notice nobody takes leave anymore because of "hustle culture". You are burnt out.',
            th: '🌴 กับดักวันลาไม่จำกัด: บริษัทประกาศใช้วันลาพักร้อนไม่จำกัด (Unlimited PTO) แต่ไม่มีใครกล้าลาเพราะวัฒนธรรม "บ้างาน" คุณกำลังจะหมดไฟ',
            zh: '🌴 “无限”年假陷阱：公司切换到无限PTO。你发现没人敢休假因为“奋斗文化”。你快累垮了。'
        },
        options: [
            { id: 'A', text: { en: '🗓️ Model Behavior: "Publicly book 4 weeks off. Tell the team: \'I am modeling healthy behavior.\'"', th: '🗓️ ทำให้ดูเป็นตัวอย่าง: "ลาพักร้อน 4 อาทิตย์ประกาศให้โลกรู้ บอกทีมว่า \'พี่ทำให้ดูเป็นตัวอย่าง\'"', zh: '🗓️ 榜样行为：“公开休4周。告诉团队：‘我在示范健康行为。’”' }, consequence: { en: '✅ Culture Leader. You enjoy your break. Team starts taking leave too. Productivity actually goes up.', th: '✅ ผู้นำวัฒนธรรม คุณได้พัก ทีมกล้าลาตาม ผลงานดีขึ้นเฉย', zh: '✅ 文化领袖。你享受假期。团队也开始休。产出反而升了。' }, stats: { competence: 40, ethics: 50, leadership: 60, innovation: 10 } },
            { id: 'B', text: { en: '🔋 The "Sick" Leaf: "Don\'t call it vacation. Call it \'medical leave\' for burnout. HR can\'t say no."', th: '🔋 แกล้งป่วย: "อย่าเรียกว่าพักร้อน เรียกว่า \'ลาป่วย\' เพราะหมดไฟ HR ปฏิเสธไม่ได้"', zh: '🔋 “病”假：“别叫度假。叫‘过劳病假’。HR不能拒。”' }, consequence: { en: '😐 Survival. You get rest, but the toxic culture remains. You are seen as "fragile".', th: '😐 เอาตัวรอด ได้พักแต่วัฒนธรรมแย่เหมือนเดิม โดนมองว่า "เปราะบาง"', zh: '😐 幸存。休息了，但有毒文化还在。被视为“脆弱”。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🏃 Hustle Harder: "Vacation is for the weak. I\'ll sleep when I exit."', th: '🏃 บ้างานต่อ: "วันหยุดมีไว้สำหรับคนอ่อนแอ เดี๋ยวค่อยนอนตอนลาออก"', zh: '🏃 死磕更狠：“弱者才度假。离职了再睡。”' }, consequence: { en: '💀 Meltdown. You snap at the CTO 3 months later. Fired.', th: '💀 สติแตก 3 เดือนต่อมาด่า CTO กราด โดนไล่ออก', zh: '💀 崩溃。3个月后吼CTO。被开。' }, stats: { competence: 20, ethics: 10, leadership: -30, innovation: 0 } },
            { id: 'D', text: { en: '📢 Unionize: "Organize the team to demand defined minimum PTO days."', th: '📢 รวมตัวเรียกร้อง: "ปลุกระดมทีมเรียกร้องวันลาขั้นต่ำที่ชัดเจน"', zh: '📢 组工会：“组织团队要求明确最低年假天数。”' }, consequence: { en: '⚔️ High Friction. HR flags you as a risk. But policy eventually changes.', th: '⚔️ แตกหัก HR กาหัวคุณ แต่สุดท้ายนโยบายเปลี่ยน', zh: '⚔️ 高摩擦。HR标记你为风险。但政策最终变了。' }, stats: { competence: 30, ethics: 40, leadership: 50, innovation: 20 } }
        ]
    },
    {
        id: 'se_034',
        text: {
            en: '🏠 The RTO Mandate: CEO demands "Return to Office" 5 days a week. "Innovation happens at the watercooler." Your best engineers live 2 hours away.',
            th: '🏠 คำสั่งกลับออฟฟิศ: CEO สั่งเข้าออฟฟิศ 5 วัน "นวัตกรรมเกิดที่ตู้น้ำดื่ม" วิศวกรเก่งสุดของคุณบ้านไกล 2 ชม.',
            zh: '🏠 返岗令：CEO要求每周5天回办公室。“创新发生在饮水机旁。”你最好的工程师住2小时车程外。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Exception Policy: "Negotiate \'Team Days\' only 2 days a week. Prove productivity metrics don\'t drop."', th: '🛡️ ขอยกเว้น: "ต่อรองเข้าแค่ 2 วัน \'Team Days\' พิสูจน์ด้วยกราฟว่างานไม่ตก"', zh: '🛡️ 例外政策：“谈只要每周2天‘团队日’。证明产出没掉。”' }, consequence: { en: '✅ Senior Management. You save the team. CEO accepts the data. Hybrid model adopted.', th: '✅ บริหารงานเป็น ช่วยทีมได้ CEO ยอมจำนนต่อข้อมูล ได้แบบ Hybrid', zh: '✅ 高级管理。救了团队。CEO接受数据。采用混合模式。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 20 } },
            { id: 'B', text: { en: '👋 Let Them Leave: "Rules are rules. If they can\'t commute, hire locals."', th: '👋 ปล่อยไป: "กฎคือกฎ ถ้ามาไม่ได้ก็หาคนแถวนี้ทำ"', zh: '👋 让他们走：“规矩就是规矩。来不了就招本地人。”' }, consequence: { en: '📉 Talent Drain. You lose senior knowledge. Hire juniors who live nearby. Code quality tanks.', th: '📉 สมองไหล เสียคนเก่ง ได้เด็กใหม่บ้านใกล้มาแทน คุณภาพโค้ดดิ่ง', zh: '📉 人才流失。失去高级知识。招住得近的菜鸟。代码质量跳水。' }, stats: { competence: 20, ethics: 20, leadership: -40, innovation: -10 } },
            { id: 'C', text: { en: '🤫 Secret Remote: "Tell team to ignore it. \'If you deliver, I don\'t check swipe cards.\'"', th: '🤫 แอบ Remote: "บอกทีมไม่ต้องสน \'ถ้างานเสร็จ พี่ไม่เช็คบัตรตอก\'"', zh: '🤫 秘密远程：“叫团队无视。‘活干完我不查打卡。’”' }, consequence: { en: '⚠️ Risky Loyalty. Team loves you. HR catches you 6 months later. You take the fall.', th: '⚠️ ภักดีบนความเสี่ยง ทีมรักตาย HR จับได้ 6 เดือนหลัง คุณซวยคนเดียว', zh: '⚠️ 冒险忠诚。团队爱你。6个月后HR抓包。你背锅。' }, stats: { competence: 40, ethics: 30, leadership: 50, innovation: 10 } },
            { id: 'D', text: { en: '🏢 Compliance: "Force everyone back. Start tracking attendance. micro-manage punctuality."', th: '🏢 บังคับทำ: "ลากทุกคนกลับมา เช็คชื่อ จู้จี้เรื่องเวลาเข้างาน"', zh: '🏢 合规：“逼所有人回。开始查考勤。微管理准时性。”' }, consequence: { en: '💀 Mutiny. Morale destroys. People do "Malicious Compliance" (work exactly 9-5, zero extra).', th: '💀 กบฏ ขวัญกำลังใจพัง พนักงานประท้วงเงียบ (ทำตามเวลางานเป๊ะ ไม่ทำเกินแม้แต่นิดเดียว)', zh: '💀 兵变。士气崩。大家“恶意合规”（只干9-5，绝不多干）。' }, stats: { competence: 30, ethics: 10, leadership: -50, innovation: -20 } }
        ]
    },
    {
        id: 'se_035',
        text: {
            en: '♿ The Accessibility Audit: A lawsuit claims your site is unusable by blind users. A full fix takes 6 weeks. Product Owner says "Blind people aren\'t our target market."',
            th: '♿ การตรวจสอบการเข้าถึง: โดนฟ้องว่าเว็บใช้ไม่ได้สำหรับคนตาบอด แก้ให้สมบูรณ์ใช้ 6 สัปดาห์ Product Owner บอก "คนตาบอดไม่ใช่ลูกค้าเรา"',
            zh: '♿ 无障碍审计：被起诉网站盲人无法使用。全修要6周。PO说“盲人不是我们的目标客户。”'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Enforce Standards: "It\'s the law and it\'s the right thing. We freeze new features until we are WCAG compliant."', th: '⚖️ บังคับมาตรฐาน: "มันคือกฎหมายและสิ่งที่ถูกต้อง หยุดฟีเจอร์ใหม่จนกว่าจะผ่าน WCAG"', zh: '⚖️ 强制标准：“这是法律也是正道。冻结新功能直到WCAG合规。”' }, consequence: { en: '✅ Ethics Win. Users praise the improvement. Lawsuit dropped. SEO improves significantly.', th: '✅ ชนะใจ ผู้ใช้ชมเชย คดีตก SEO ดีขึ้นมหาศาล', zh: '✅ 道德赢。用户称赞。官司撤诉。SEO显著提升。' }, stats: { competence: 40, ethics: 60, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🩹 The Accessiblity Overlay: "Install a $50/mo \'Accessibility Widget\'. It claims to fix everything automatically."', th: '🩹 ใช้วิดเจ็ตแปะ: "ลงวิดเจ็ตเดือนละ 1,500 บาท ที่เคลมว่าแก้ทุกอย่างออโต้"', zh: '🩹 无障碍外挂：“装个50刀/月的‘无障碍小部件’。号称自动全修。”' }, consequence: { en: '💀 Scam. Expert users hate these overlays. Lawsuit continues because overlays don\'t actually work. Money wasted.', th: '💀 โดนหลอก ผู้ใช้เกลียดสิ่งนี้ คดียังอยู่เพราะมันไม่ได้แก้จริง เสียเงินฟรี', zh: '💀 骗局。专家痛恨这玩意。官司继续因为那东西根本没用。钱白花。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🤐 Ignore: "Fight the lawsuit. It\'s cheaper than delaying 6 weeks."', th: '🤐 ช่างมัน: "สู้คดีเอา ค่าทนายถูกกว่าหยุดงาน 6 อาทิตย์"', zh: '🤐 无视：“打官司。比停工6周便宜。”' }, consequence: { en: '📉 PR Nightmare. Twitter/X drags you. Brand damaged. You look like a villain.', th: '📉 ฝันร้าย PR ทัวร์ลง แบรนด์เสีย ดูเป็นตัวร้าย', zh: '📉 公关噩梦。全网喷。品牌受损。你像个反派。' }, stats: { competence: 30, ethics: -40, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🏗️ Incremental Fix: "Dedicate 20% of every sprint to accessibility. Show progress to lawyers to stall."', th: '🏗️ ค่อยๆ แก้: "แบ่ง 20% ของทุก Sprint มาแก้ โชว์ความคืบหน้าถ่วงเวลาทนาย"', zh: '🏗️ 增量修：“每Sprint以此20%修无障碍。以此进度拖住律师。”' }, consequence: { en: '✨ Pragmatism. You eventually get there without stopping business. Good balance.', th: '✨ ปฏิบัติจริง สุดท้ายก็แก้เสร็จโดยธุรกิจไม่สะดุด สมดุลดี', zh: '✨ 务实。最终修好了也没停业务。平衡得好。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 } }
        ]
    },
    {
        id: 'se_036',
        text: {
            en: '🕵️ Data Privacy Breach: Marketing uploaded 10,000 user emails to a public Trello board by accident. GDPR fines could be €20M. It has been up for 48 hours.',
            th: '🕵️ ข้อมูลรั่ว: การตลาดเผลออัปโหลดอีเมลผู้ใช้ 10,000 รายขึ้น Trello สาธารณะ ค่าปรับ GDPR อาจถึง 700 ล้านบาท มันอยู่บนนั้นมา 48 ชม. แล้ว',
            zh: '🕵️ 隐私泄露：市场部误把1万用户邮箱传到公开Trello看板。GDPR罚款可达2000万欧。已挂了48小时。'
        },
        options: [
            { id: 'A', text: { en: '🧹 Delete & Pray: "Delete the board. Check traffic logs. If nobody saw it, we never admit it."', th: '🧹 ลบแล้วสวดมนต์: "ลบบอร์ด เช็ค log ถ้าไม่มีใครเห็นก็ทำเนียนไป"', zh: '🧹 删了祈祷：“删看板。查日志。没人看过就不认账。”' }, consequence: { en: '💀 Jail Time Risk. If logs are audited later, this is a felony cover-up. High anxiety life.', th: '💀 เสี่ยงคุก ถ้าโดนตรวจสอบทีหลังคือนอนคุก ข้อหาปกปิด ชีวิตอยู่ไม่เป็นสุข', zh: '💀 牢狱风险。日后被查就是重罪掩盖。提心吊胆。' }, stats: { competence: 20, ethics: -80, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: '📢 GDPR Report: "Report to authorities within 72h. Notify users. Apologize sincerely."', th: '📢 แจ้งตามกฎ: "รายงานทางการภายใน 72 ชม. แจ้งผู้ใช้ ขอโทษอย่างจริงใจ"', zh: '📢 GDPR报告：“72小时内上报当局。通知用户。诚恳道歉。”' }, consequence: { en: '✅ Trust Retained. Fine is reduced due to cooperation. Users appreciate honesty.', th: '✅ รักษาความเชื่อใจ ค่าปรับลดลงเพราะให้ความร่วมมือ ผู้ใช้ชื่นชมความซื่อสัตย์', zh: '✅ 保住信任。配合监管罚款减免。用户感激诚实。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🔪 Fire Marketer: "Publicly fire the Junior Marketer who did it. Scapegoat them."', th: '🔪 เชือดไก่: "ไล่เด็กการตลาดคนนั้นออกโชว์สื่อ โยนขี้ให้มัน"', zh: '🔪 开除替罪羊：“公开开除那个初级市场人员。拿他祭旗。”' }, consequence: { en: '📉 Morale Crash. Everyone knows it was a process failure (no training). You look weak.', th: '📉 กำลังใจดิ่ง ใครก็รู้ว่าระบบผิด (ไม่ได้เทรน) คุณดูไร้น้ำยา', zh: '📉 士气崩。都知道是流程缺失（没培训）。你显得软弱。' }, stats: { competence: 20, ethics: -20, leadership: -30, innovation: 0 } },
            { id: 'D', text: { en: '🔒 Process Fix: "Report it, but also automate Trello scanning for PII. Never happen again."', th: '🔒 แก้ระบบ: "รายงานเรื่อง แล้วทำบอทสแกน Trello หาข้อมูลส่วนตัว ไม่ให้เกิดซ้ำ"', zh: '🔒 修复流程：“上报，同时自动化扫描Trello敏感信息。绝不再犯。”' }, consequence: { en: '✨ Engineering Leader. You turn a legal mess into a technical win.', th: '✨ ผู้นำวิศวกรรม เปลี่ยนเรื่องกฎหมายให้เป็นชัยชนะทางเทคนิค', zh: '✨ 工程领袖。把法律烂摊子变成技术胜利。' }, stats: { competence: 60, ethics: 50, leadership: 60, innovation: 30 } }
        ]
    },
    {
        id: 'se_037',
        text: {
            en: '📋 The Promo Packet Plagiarism: You review a Junior\'s promotion packet. It claims credit for the architecture YOU designed. They are friends with the Director.',
            th: '📋 ลอกผลงาน: ตรวจเอกสารเลื่อนขั้นของเด็กในทีม มันเคลมว่าออกแบบสถาปัตยกรรมที่คุณเป็นคนทำ! แถมมันสนิทกับ Director ด้วย',
            zh: '📋 晋升PPT抄袭：你审阅某菜鸟的晋升PPT。他把你的架构设计说成是他的。他跟总监是哥们。'
        },
        options: [
            { id: 'A', text: { en: '📝 Paper Trail: "Comment on the doc with links to git commits proving authorship. CC HR."', th: '📝 หลักฐานมัด: "คอมเมนต์ในเอกสาร แปะลิงก์ git commit ยืนยันว่าใครเขียน CC HR"', zh: '📝 证据链：“文档评论贴git提交记录证明作者。抄送HR。”' }, consequence: { en: '✅ Fact Check. Facts win. The Junior is embarrassed. Director backs off.', th: '✅ ความจริงชนะ เด็กหน้าแตก Director ถอย', zh: '✅ 事实核查。事实胜于雄辩。菜鸟尴尬。总监退缩。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🤫 Let it Slide: "I\'m already Senior. Let them have the win. I want to be liked."', th: '🤫 ปล่อยผ่าน: "ผมซีเนียร์แล้ว ให้ๆ น้องมันไป อยากให้คนรัก"', zh: '🤫 放过：“我都高级了。让他赢一次。我想讨人喜。”' }, consequence: { en: '📉 Doormat. Junior learns theft works. Steals more credit next month.', th: '📉 พรมเช็ดเท้า เด็กได้ใจ เดือนหน้าขโมยอีก', zh: '📉 软蛋。菜鸟学到了偷窃有用。下月偷更多。' }, stats: { competence: 20, ethics: 20, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🗣️ Confrontation: "Pull them into a 1:1. \'Remove this or I expose you.\'"', th: '🗣️ เปิดอก: "เรียกคุย 1:1 \'ลบซะ ไม่งั้นพี่แฉ\'"', zh: '🗣️ 对峙：“拉小黑屋1:1。‘删了否则曝光你。’”' }, consequence: { en: '⚖️ Direct Management. High conflict but solves it quickly.', th: '⚖️ จัดการตรงๆ ขัดแย้งสูงแต่จบเร็ว', zh: '⚖️ 直接管理。冲突大但解决快。' }, stats: { competence: 40, ethics: 30, leadership: 50, innovation: 0 } },
            { id: 'D', text: { en: '🎭 Innovation Defense: "Propose a new, better architecture. Make theirs look obsolete immediately."', th: '🎭 โชว์เหนือ: "เสนอสถาปัตยกรรมใหม่ที่ดีกว่า ทำให้ของที่มันเคลมดูตกรุ่นไปเลย"', zh: '🎭 创新防御：“提出更好新架构。让他偷的那个立马过时。”' }, consequence: { en: '✨ 4D Chess. You assert dominance by being better, not by complaining.', th: '✨ หมากรุก 4 มิติ ข่มด้วยฝีมือ ไม่ใช่การฟ้องครู', zh: '✨ 降维打击。用实力碾压，而不是抱怨。' }, stats: { competence: 70, ethics: 40, leadership: 50, innovation: 60 } }
        ]
    },
    {
        id: 'se_038',
        text: {
            en: '🧩 The No-Code Revolution: Marketing builds a landing page using Webflow because "Devs are too slow". It gets 100k views but crashes your main API due to bad configuration.',
            th: '🧩 ปฏิวัติ No-Code: การตลาดสร้างเว็บเองด้วย Webflow เพราะ "Dev ทำงานช้า" คนเข้าแสนคนแต่ทำ API หลักคุณล่มเพราะตั้งค่ามั่ว',
            zh: '🧩 无代码革命：市场部用Webflow自己搭落地页，因为“开发太慢”。10万访问量把你的主API搞挂了，配置全错。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Ban No-Code: "Block Webflow on corporate network. All pages must go through Engineering."', th: '🚫 แบน No-Code: "บล็อก Webflow ทั้งบริษัท ทุกหน้าเว็บต้องผ่านทีมวิศวะ"', zh: '🚫 封杀无代码：“公司网屏蔽Webflow。所有页面必须过工程部。”' }, consequence: { en: '🐢 Bottleneck. Marketing hates you. You now have to build 50 landing pages a year.', th: '🐢 คอขวด การตลาดเกลียด งานงอกต้องมานั่งทำ landing page 50 หน้าต่อปี', zh: '🐢 瓶颈。市场部恨你。你现在一年得做50个落地页。' }, stats: { competence: 30, ethics: 20, leadership: -10, innovation: -30 } },
            { id: 'B', text: { en: '🤝 Enable & Guard: "Setup a dedicated API gateway for them with rate limits. Train them on config."', th: '🤝 สนับสนุนแต่กันไว้: "ทำ Gateway แยกให้พวกเขา จำกัด Rate limit สอนเขาวิธีตั้งค่า"', zh: '🤝 赋能加护栏：“给他们设专用API网关加限流。培训配置。”' }, consequence: { en: '✨ DevRel Win. Marketing moves fast. Core system stays safe. You are a hero.', th: '✨ ชนะเลิศ การตลาดงานไว ระบบหลักปลอดภัย คุณคือฮีโร่', zh: '✨ DevRel赢。市场部快。核心系统稳。你是英雄。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🔥 Let it Burn: "Not my code, not my problem. API 500s are their fault."', th: '🔥 ช่างแม่ง: "ไม่ใช่โค้ดผม ไม่ใช่ปัญหาผม ล่มก็เรื่องของมัน"', zh: '🔥 让它烧：“非我代码，非我问题。API 500报措赖他们。”' }, consequence: { en: '📉 Company Loss. Users don\'t distinguish departments. The brand looks broken.', th: '📉 บริษัทเสียหาย ผู้ใช้ไม่สนหรอกแผนกไหน แบรนด์ดูพังไปแล้ว', zh: '📉 公司损失。用户不管部门。品牌形象破裂。' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🏗️ Absorb It: "Export their Webflow code and host it ourselves properly."', th: '🏗️ ยึดมาทำ: "Export โค้ด Webflow มาโฮสต์เองให้ถูกต้อง"', zh: '🏗️ 吸收：“导出Webflow代码我们自己正规托管。”' }, consequence: { en: '⚙️ Maintenance Hell. Webflow exports ugly code. Now you maintain generated HTML soup.', th: '⚙️ นรกรักษา โค้ดที่ export มาโคตรเน่า ต้องมานั่งแก้ซุป HTML', zh: '⚙️ 维护地狱。Webflow导出的代码巨烂。你现在得维护一坨HTML屎。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'se_039',
        text: {
            en: '📢 The Junior Salary Leak: A spreadsheet leaks showing a new Junior hire makes more than your Senior Engineer (due to inflation). Team is rioting.',
            th: '📢 เงินเดือนหลุด: ไฟล์หลุดโชว์ว่าเด็กจบใหม่ได้เงินเดือนเยอะกว่า Senior (เพราะเงินเฟ้อ) ทีมลุกฮือประท้วง',
            zh: '📢 倒挂泄露：表格泄露显示新招菜鸟工资比高级工程师高（通胀导致）。团队炸锅。'
        },
        options: [
            { id: 'A', text: { en: '🤐 Silence: "Salaries are confidential. Discussing them is against policy (illegal to say, but you say it)."', th: '🤐 หุบปาก: "เงินเดือนเป็นความลับ ห้ามคุยกัน (ผิดกฎหมายแรงงานนะแต่ก็จะขู่)"', zh: '🤐 噤声：“薪资保密。讨论违规（违法但你还是说了）。”' }, consequence: { en: '💀 Trust Death. Seniors quit immediately. You are a corporate shill.', th: '💀 หมดศรัทธา Senior ลาออกทันที คุณคือสุนัขรับใช้บริษัท', zh: '💀 信任死亡。高级立刻离职。你是公司走狗。' }, stats: { competence: 20, ethics: -40, leadership: -50, innovation: 0 } },
            { id: 'B', text: { en: '📣 Transparency Fight: "Go to VP. \'We need market adjustments for Seniors NOW or we lose them all.\'"', th: '📣 สู้เพื่อความโปร่งใส: "ไปหา VP \'ต้องปรับฐานเงินเดือน Senior เดี๋ยวนี้ ไม่งั้นลาออกหมดแน่\'"', zh: '📣 透明抗争：“找VP。‘立刻给高级做市场调薪否则人全跑光。’”' }, consequence: { en: '✅ Leader. You might get budget. Even if not, team sees you fighting for them.', th: '✅ ผู้นำตัวจริง อาจได้งบ หรือถ้าไม่ได้ ทีมก็เห็นว่าคุณสู้เพื่อเขา', zh: '✅ 领袖。可能拿到预算。即使没拿到，团队看你在为他们战。' }, stats: { competence: 50, ethics: 60, leadership: 70, innovation: 10 } },
            { id: 'C', text: { en: '🤫 Quiet Bonuses: "Give smaller \'retention bonuses\' to Seniors to shut them up."', th: '🤫 อัดฉีดลับ: "ให้ \'โบนัสอยู่ต่อ\' กับ Senior เพื่อปิดปาก"', zh: '🤫 悄悄发奖：“给高级发点‘留任奖金’堵嘴。”' }, consequence: { en: '🩹 Band-aid. They stay for 6 months then leave. The discrepancy remains.', th: '🩹 แก้ผ้าเอาหน้ารอด อยู่ต่อ 6 เดือนแล้วก็ไป ความไม่เท่าเทียมยังอยู่', zh: '🩹 通用创可贴。留6个月然后跑。差距依然在。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🔄 Level Up: "Promote everyone to \'Staff\' to justify a raise."', th: '🔄 เลื่อนขั้นยกแผง: "ปรับทุกคนเป็น \'Staff\' จะได้มีเหตุผลขึ้นเงิน"', zh: '🔄 升级：“全升‘主任’好有名目加薪。”' }, consequence: { en: '⚠️ Title Inflation. Solves money, destroys title meaning. (See se_024)', th: '⚠️ ตำแหน่งเฟ้อ แก้เรื่องเงินแต่ทำลายความหมายตำแหน่ง (ดูข้อ se_024)', zh: '⚠️ 头衔通胀。搞定钱，毁了头衔。（见se_024）' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'se_040',
        text: {
            en: '🔒 The Vendor Lock-in: Microsoft offers $100k credits if you migrate everything to Azure. You are currently on AWS. CEO wants the free money.',
            th: '🔒 กับดัก Vendor: Microsoft เสนอเครดิต 3 ล้านบาทถ้าย้ายทุกอย่างไป Azure ตอนนี้ใช้ AWS CEO อยากได้ของฟรี',
            zh: '🔒 厂商锁定：微软送10万刀额度让你全迁Azure。你现在用AWS。CEO想要这免费钱。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Refuse: "Migration costs $200k in engineer hours. It is net loss."', th: '🛑 ปฏิเสธ: "ค่าย้ายใช้แรงงาน 6 ล้านบาท ขาดทุนเห็นๆ"', zh: '🛑 拒绝：“迁移要耗20万人工时。净亏。”' }, consequence: { en: '✅ Business Logic. CEO understands ROI. You stay on AWS.', th: '✅ ตรรกะธุรกิจ CEO เข้าใจ ROI อยู่ AWS ต่อ', zh: '✅ 商业逻辑。CEO懂ROI。留AWS。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '💸 Accept: "Take the credits. Migration is painful but we learn Azure."', th: '💸 เอาหมด: "รับเครดิต ย้ายยากหน่อยแต่ได้เรียนรู้ Azure"', zh: '💸 接受：“拿钱。迁移痛但能学Azure。”' }, consequence: { en: '📉 Productivity Dip. Team spends 3 months relearning cloud primitives. No features shipped.', th: '📉 งานหด ทีมเสียเวลา 3 เดือนเรียนรู้ระบบใหม่ ฟีเจอร์ไม่เดิน', zh: '📉 产出跌。团队花3个月重学云基础。无功能发布。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 20 } },
            { id: 'C', text: { en: '☁️ Multi-Cloud: "Use credits for backup/disaster recovery only. Keep main app on AWS."', th: '☁️ ใช้คู่: "เอาเครดิตไว้ทำระบบสำรอง Backup พอ แอปหลักอยู่ AWS"', zh: '☁️ 多云：“额度只做灾备。主应用留AWS。”' }, consequence: { en: '✨ Strategy. You get the money AND reliability. Complexity manageable.', th: '✨ กลยุทธ์ ได้เงินด้วย ได้ความชัวร์ด้วย ความซับซ้อนพอรับได้', zh: '✨ 战略。钱也要可靠也要。复杂度可控。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🏗️ Containerize: "Move to Kubernetes first. Then cloud doesn\'t matter."', th: '🏗️ Containerize: "ย้ายลง Kubernetes ก่อน ทีนี้จะคลาวด์ไหนก็ได้"', zh: '🏗️ 容器化：“先上K8s。然后云无所谓。”' }, consequence: { en: '⚙️ Long Game. Good architecture, but delays the credit usage. CEO impatient.', th: '⚙️ เกมยาว สถาปัตยกรรมดี แต่กว่าจะได้ใช้เครดิตก็นาน CEO หงุดหงิด', zh: '⚙️ 长期博弈。架构好，但拖慢用额度。CEO不耐烦。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'se_041',
        text: {
            en: '⚔️ The Code Review War: You request changes on a PR because the architecture is flawed. The author argues back for 3 days. The ticket is blocked. Deadline is tomorrow.',
            th: '⚔️ สงครามรีวิวโค้ด: คุณขอให้แก้ PR เพราะโครงสร้างมันพัง คนทำเถียงกลับมา 3 วันแล้ว งานไม่เดิน เส้นตายคือพรุ่งนี้',
            zh: '⚔️ 代码审查战争：你因为架构缺陷要求改PR。作者跟你杠了3天。票卡住了。明天死线。'
        },
        options: [
            { id: 'A', text: { en: '🏳️ Approve & Tech Debt: "Fine, merge it. I\'ll file a ticket to fix it later (which we never will)."', th: '🏳️ ยอมๆ ไป: "เออๆ เมิทมา เดี๋ยวเปิดตั๋วแก้ทีหลัง (ซึ่งไม่เคยแก้หรอก)"', zh: '🏳️ 通过&欠债：“行吧合吧。我建个票回头修（虽然永远不会修）。”' }, consequence: { en: '⚠️ Slippery Slope. The team learns that arguing works. Codebase quality degrades.', th: '⚠️ ทางลาดชัน ทีมเรียนรู้ว่าเถียงแล้วชนะ คุณภาพโค้ดเน่าลงเรื่อยๆ', zh: '⚠️ 滑坡谬误。团队学到了杠能赢。代码库质量下降。' }, stats: { competence: 30, ethics: 20, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🔨 Override Merge: "I am blocking this. We miss the deadline. Better late than broken."', th: '🔨 หักดิบ: "พี่ขวางไว้เลย ยอมส่งงานช้า ดีกว่าส่งงานพัง"', zh: '🔨 否决合并：“我卡住了。错过死线也认。晚发好过发烂代码。”' }, consequence: { en: '✅ Quality Guard. Management is annoyed, but the bug-free release proves you right.', th: '✅ ผู้พิทักษ์คุณภาพ ผู้บริหารเคือง แต่ของที่ปล่อยไม่มีบั๊ก พิสูจน์ว่าคุณคิดถูก', zh: '✅ 质量守门员。管理层烦但无Bug发布证明你对了。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '📞 Face to Face: "Stop typing. Jump on a call. Pair program the fix together right now."', th: '📞 จับเข่าคุย: "เลิกพิมพ์ โทรคุยกัน เดี๋ยวพี่พาแก้โค้ดตอนนี้เลย"', zh: '📞 面对面：“别打了。上电话。现在结对修好它。”' }, consequence: { en: '✨ Conflict Resolution. You clear the air and fix the code in 30 mins. Relationship saved.', th: '✨ แก้ความขัดแย้ง เคลียร์ใจ แก้เสร็จในครึ่งชั่วโมง รักษาความสัมพันธ์', zh: '✨ 冲突解决。你消除误会30分钟修好。关系保住了。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 20 } },
            { id: 'D', text: { en: '🧹 Rewrite it Yourself: "Push a commit to their branch fixing it. Merge it. Move on."', th: '🧹 ทำให้จบๆ: "แก้ให้แม่งใน branch มันเลย แล้ว merge จบ"', zh: '🧹 自己重写：“推个commit帮他修了。合并。翻篇。”' }, consequence: { en: '😬 Resentment. The author feels disrespected. You become the bottleneck for everything.', th: '😬 ขุ่นเคือง คนทำรู้สึกโดนหยาม คุณกลายเป็นคนแบกทุกอย่าง', zh: '😬 怨恨。作者觉得被冒犯。你成了所有事的瓶颈。' }, stats: { competence: 40, ethics: 20, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'se_042',
        text: {
            en: '🎭 The "Acting" Lead: Your manager goes on parental leave for 6 months. You are asked to be "Acting Lead" with no pay raise, just "exposure".',
            th: '🎭 หัวหน้า "รักษาการ": หัวหน้าลาคลอด 6 เดือน คุณโดนตั้งเป็น "รักษาการหัวหน้า" งานเพิ่ม เงินเท่าเดิม ได้แค่ "โอกาสโชว์"',
            zh: '🎭 “代理”组长：主管休育儿假6个月。让你做“代理组长”不涨薪，只给“曝光度”。'
        },
        options: [
            { id: 'A', text: { en: '🙅 Refuse: "Pay me or I stay an IC. Exposure doesn\'t pay rent."', th: '🙅 ไม่ทำ: "จ่ายเพิ่มไม่งั้นผมเป็น dev เหมือนเดิม โอกาสโชว์จ่ายค่าห้องไม่ได้"', zh: '🙅 拒绝：“给钱否则我只写代码。曝光度付不了房租。”' }, consequence: { en: '🛡️ Self Respect. They might find someone else, but you avoid exploitation.', th: '🛡️ เคารพตัวเอง เขาอาจหาคนอื่น แต่คุณไม่โดนเอาเปรียบ', zh: '🛡️ 自尊。他们可能找别人，但你免于被剥削。' }, stats: { competence: 40, ethics: 40, leadership: 0, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Acceptance Condition: "I\'ll do it if there is a written guarantee of promotion assessment upon return."', th: '🤝 รับแบบมีเงื่อนไข: "ผมทำ แต่ต้องมีลายลักษณ์อักษรว่าจะประเมินเลื่อนขั้นเมื่อจบงาน"', zh: '🤝 有条件接受：“我做，如果有书面保证回来后评估晋升。”' }, consequence: { en: '✅ Leverage. You get the experience and a contract. Best path to promotion.', th: '✅ มีแต้มต่อ ได้ประสบการณ์และสัญญา ทางลัดสู่การเลื่อนขั้นที่ดีที่สุด', zh: '✅ 筹码。拿到了经验和合同。晋升最佳路径。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 10 } },
            { id: 'C', text: { en: '🏃 Hustle Mode: "Take it! Work 12 hours a day. Prove I am undeniable."', th: '🏃 ทุ่มสุดตัว: "เอา! ทำงานวันละ 12 ชม. พิสูจน์ให้โลกเห็นว่ากูแน่"', zh: '🏃 拼命模式：“接！每天干12小时。证明我是不可战胜的。”' }, consequence: { en: '🛑 Burnout Trap. You do great, but they keep you as Acting Lead for 1 year because it\'s cheap.', th: '🛑 กับดักหมดไฟ คุณทำดี แต่เขาจะดองคุณในตำแหน่งรักษาการเป็นปีเพราะมันถูก', zh: '🛑 耗尽陷阱。你干得好，但他们让你代理1年因为便宜。' }, stats: { competence: 40, ethics: 10, leadership: 30, innovation: 0 } },
            { id: 'D', text: { en: '🤷 Minimum Effort: "Take the title for the resume, but delegate everything back to the team."', th: '🤷 ทำพอเป็นพิธี: "เอาตำแหน่งมาประดับเรซูเม่ แต่งานโยนกลับให้ทีมทำ"', zh: '🤷 摸鱼：“拿头衔写简历，但活儿全甩回给团队。”' }, consequence: { en: '😐 Resume Padding. Team hates you for being useless. But you get a better job elsewhere.', th: '😐 แต่งเรซูเม่สวย ทีมเกลียดที่คุณไร้ประโยชน์ แต่คุณได้งานใหม่ที่อื่น', zh: '😐 简历填充。团队恨你没用。但你跳槽去了好地儿。' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'se_043',
        text: {
            en: '👻 The Shadow IT: Sales team hired a random agency to build a Critical CRM app bypassing your team. It is full of security holes and just crashed. They want you to takeover.',
            th: '👻 ไอทีเถื่อน: ทีมเซลส์จ้างเอเจนซี่ไก่กาทำแอป CRM เองโดยไม่ผ่านทีมคุณ รูรั่วเพียบและเพิ่งเจ๊ง จะให้คุณไปรับช่วงต่อ',
            zh: '👻 影子IT：销售部绕过你找野鸡外包做了关键CRM App。全是洞刚崩了。想要你接盘。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Let it Die: "We cannot support this. It must be rebuilt on our stack. Start over."', th: '🛑 ปล่อยตาย: "ซัพพอร์ตไม่ไหว ต้องเขียนใหม่บนระบบเรา เริ่มนับหนึ่งใหม่"', zh: '🛑 让它死：“维护不了。必须在我们的栈上重写。重来。”' }, consequence: { en: '✅ Expensive Lesson. Sales is furious but learns. You maintain standard.', th: '✅ บทเรียนราคาแพง เซลส์โกรธแต่จำ คุณรักษามาตรฐานไว้ได้', zh: '✅ 昂贵教训。销售暴怒但学乖了。你守住了标准。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🩹 Emergency Patch: "Fix the crash. Secure the database. Put it behind VPN. Don\'t touch logic."', th: '🩹 ปะผุฉุกเฉิน: "แก้ที่ล่ม ล็อก DB จับยัดหลัง VPN อย่าแตะ Logic"', zh: '🩹 紧急修补：“修崩溃。锁DB。扔VPN后面。别碰逻辑。”' }, consequence: { en: '⚠️ Zombie App. It stays alive, haunting you forever. Sales thinks they succeeded.', th: '⚠️ แอปซอมบี้ มันยังอยู่ หลอกหลอนคุณตลอดไป เซลส์คิดว่าตัวเองทำสำเร็จ', zh: '⚠️ 僵尸App。它活着，永远缠着你。销售以为他们成了。' }, stats: { competence: 30, ethics: 20, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🕵️ Audit & Charge: "We will take it, but audit costs come from Sales budget. And we hire 1 dev."', th: '🕵️ คิดเงิน: "รับก็ได้ แต่ค่า Audit หักงบเซลส์นะ และขอโควต้าจ้าง dev เพิ่ม 1 คน"', zh: '🕵️审计&收费：“接，但审计费算销售的。且给我们加1个HC。”' }, consequence: { en: '✨ Political Judo. You turn their mess into budget for your team.', th: '✨ ยูโดการเมือง เปลี่ยนเรื่องขี้ๆ ของเขาให้เป็นงบของทีมเรา', zh: '✨ 政治柔道。把他们的烂摊子变成你团队的预算。' }, stats: { competence: 50, ethics: 30, leadership: 60, innovation: 20 } },
            { id: 'D', text: { en: '🏃 Run Away: "Not my circus. I have core work to do."', th: '🏃 ชิ่ง: "ไม่ใช่เรื่องของตู มีงานหลักต้องทำ"', zh: '🏃 跑路：“不关我事。我有核心活要干。”' }, consequence: { en: '📉 Friction. The CRM crashes again, company loses leads. You get blamed for "not helping".', th: '📉 ขัดแย้ง CRM เจ๊งอีก บริษัทเสียลูกค้า คุณโดนด่าว่า "ไร้น้ำใจ"', zh: '📉 摩擦。CRM又崩，公司丟客。你被怪“不帮忙”。' }, stats: { competence: 20, ethics: 10, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'se_044',
        text: {
            en: '💍 The Broken Promise: You promised your team "No weekend work" this quarter. A critical partner integration deadline drops from the sky. It requires weekend work.',
            th: '💍 สัญญาใจ: สัญญากับทีมว่าไตรมาสนี้ "ไม่มีทำงานเสาร์อาทิตย์" จู่ๆ งานเชื่อมต่อพาร์ทเนอร์สำคัญก็หล่นทับ ต้องทำเสาร์อาทิตย์',
            zh: '💍 违背诺言：你承诺团队本季“不加班”。天降关键合作伙伴集成死线。必须周末干。'
        },
        options: [
            { id: 'A', text: { en: '🫡 Do it Alone: "I promised. I will code it myself this weekend. You guys rest."', th: '🫡 ลุยเดี่ยว: "พี่สัญญาไว้ เดี๋ยวพี่ทำเองเสาร์อาทิตย์นี้ พวกน้องพักผ่อน"', zh: '🫡 自己扛：“我承诺过。这周末我自己写。你们休息。”' }, consequence: { en: '🏆 Hero Leader. Team respects you immensely. But you are exhausted.', th: '🏆 หัวหน้าพระเอก ทีมนับถือสุดหัวใจ แต่คุณโทรมเป็นศพ', zh: '🏆 英雄领袖。团队以此敬重。但你累趴了。' }, stats: { competence: 40, ethics: 60, leadership: 80, innovation: 0 } },
            { id: 'B', text: { en: '💰 Buy Them Out: "Weekend work, but everyone gets double pay AND 2 comp days next week."', th: '💰 ใช้เงินแก้: "ทำเสาร์อาทิตย์ แต่จ่ายคูณสอง แถมวันหยุดชดเชยอาทิตย์หน้า 2 วัน"', zh: '💰 买断：“周末干，但双倍薪水+下周调休2天。”' }, consequence: { en: '✅ Fair Trade. Team grumbles but accepts the deal. Burning budget to save morale.', th: '✅ แลกเปลี่ยนที่เป็นธรรม ทีมบ่นแต่ยอม เผางบเพื่อรักษาใจคน', zh: '✅ 公平交易。团队嘟囔但接受。烧钱保士气。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🤥 Break Promise: "Sorry guys, business needs change. We have to work. Pizza is on me."', th: '🤥 ผิดสัญญา: "โทษทีน้อง สถานการณ์เปลี่ยน ต้องมาทำนะ เดี๋ยวเลี้ยงพิซซ่า"', zh: '🤥 毁约：“对不住大伙，业务变了。得干。披萨我请。”' }, consequence: { en: '💀 Moral Injury. Your word means nothing now. "Pizza" becomes a meme for exploitation.', th: '💀 เสียสัตย์ คำพูดคุณไม่มีค่าแล้ว "พิซซ่า" กลายเป็นมีมของการเอาเปรียบ', zh: '💀 道德伤害。你的话以此放屁。“披萨”成了剥削梗。' }, stats: { competence: 20, ethics: -20, leadership: -60, innovation: 0 } },
            { id: 'D', text: { en: '🛑 Push Back Partner: "Tell Partner: We integrate Monday. Our team is out."', th: '🛑 เลื่อนพาร์ทเนอร์: "บอกพาร์ทเนอร์: เริ่มทำวันจันทร์ ทีมเราไม่อยู่"', zh: '🛑 推回去：“告诉伙伴：周一接。我们团队不在。”' }, consequence: { en: '🎲 Risky Biz. Partner might walk. But if they stay, you set a healthy boundary.', th: '🎲 เสี่ยงธุรกิจ พาร์ทเนอร์อาจชิ่ง แต่ถ้าเขาอยู่ คุณสร้างขอบเขตที่ดีได้', zh: '🎲 险招。伙伴可能跑。但若留下，以此立了健康边界。' }, stats: { competence: 40, ethics: 50, leadership: 60, innovation: 0 } }
        ]
    },
    {
        id: 'se_045',
        text: {
            en: '🏙️ The Open Plan Office: Company moves to a hip "Open Plan" office to "foster collaboration". Noise levels are 85dB. Productivity drops 40%.',
            th: '🏙️ ออฟฟิศเปิดโล่ง: ย้ายไปออฟฟิศแบบ Open Plan สุดฮิปเพื่อ "กระตุ้นการร่วมมือ" เสียงดัง 85dB งานเสร็จน้อยลง 40%',
            zh: '🏙️ 开放式办公：公司搬去潮酷“开放式”办公室“促进协作”。噪音85分贝。效率跌40%。'
        },
        options: [
            { id: 'A', text: { en: '🎧 Expense Headphones: "Buy top-tier Noise Cancelling headphones for everyone on company card."', th: '🎧 เบิกหูฟัง: "ซื้อหูฟังตัดเสียงเทพๆ ให้ทุกคน รูดบัตรบริษัท"', zh: '🎧 报销耳机：“给全员买顶级降噪耳机。刷公司卡。”' }, consequence: { en: '✅ Hardware Fix. It helps. It\'s passive aggressive, but effective.', th: '✅ แก้ด้วยฮาร์ดแวร์ ช่วยได้ เป็นการประท้วงเงียบๆ ที่ได้ผล', zh: '✅ 硬件修复。有用。消极抵抗但有效。' }, stats: { competence: 40, ethics: 40, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🏚️ Library Rules: "Enforce \'Library Hours\' (quiet time) from 1pm-5pm. No talking allowed."', th: '🏚️ กฎห้องสมุด: "บังคับกฎ \'Library Hours\' บ่ายโมงถึง 5 โมง ห้ามคุย"', zh: '🏚️ 图书馆规则：“强制‘图书馆时间’（静默）下午1-5点。禁言。”' }, consequence: { en: '✨ Process Fix. Cost-free. People pile up meetings in the morning and code in afternoon.', th: '✨ แก้ด้วยระบบ ฟรี คนจะอัดประชุมตอนเช้าแล้วปั่นโค้ดตอนบ่าย', zh: '✨ 流程修复。免费。大家把会堆早上，下午写代码。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '🏠 WFH Rebellion: "Unofficially encourage working from home when \'Deep Work\' is needed."', th: '🏠 หนีไปทำบ้าน: "แอบบอกน้องว่าถ้าต้องใช้สมาธิก็ WFH เถอะ"', zh: '🏠 WFH起义：“私下鼓励需‘深度工作’时在家办公。”' }, consequence: { en: '🤔 Cat & Mouse. Productivity returns, but office is empty. Management gets suspicious.', th: '🤔 แมวไล่จับหนู งานเสร็จแต่ออฟฟิศร้าง ผู้บริหารเริ่มสงสัย', zh: '🤔 猫鼠游戏。效率回来了，办公室空了。管理层起疑。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '🗣️ Complain Loudly: "Code requires silence! This environment is hostile to engineering!"', th: '🗣️ โวยวาย: "เขียนโค้ดต้องใช้สมาธิ! ที่นี่มันเป็นศัตรูกับวิศวกร!"', zh: '🗣️ 大声抱怨：“代码需要安静！这环境对工程部有敌意！”' }, consequence: { en: '😐 Whiner. You are right, but labelled as "not adaptable". Nothing changes.', th: '😐 ขี้บ่น คุณพูดถูกแต่โดนหาว่า "ปรับตัวไม่เก่ง" ไม่มีอะไรเปลี่ยน', zh: '😐 怨妇。你对，但被打标“不适应”。啥也没变。' }, stats: { competence: 20, ethics: 20, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'se_046',
        text: {
            en: '🤑 The Competing Offer: You get an offer from a competitor for +50% salary. You like your current team, but the money is life-changing. Current company can\'t match it.',
            th: '🤑 ข้อเสนอซื้อตัว: คู่แข่งเสนอเงินเพิ่ม 50% คุณรักทีมปัจจุบันแต่เงินมันเปลี่ยนชีวิตได้ บริษัทปัจจุบันสู้ราคาไม่ไหว',
            zh: '🤑 竞业Offer：竞对开出涨薪50%挖你。你喜欢现在的团队，但这钱能改变人生。现司给不起。'
        },
        options: [
            { id: 'A', text: { en: '👋 Leave: "It\'s business. I sent my resignation. I\'ll miss you guys."', th: '👋 ไปครับ: "มันคือธุรกิจ ยื่นใบลาออก คิดถึงทุกคนนะ"', zh: '👋 走人：“在商言商。已发辞呈。会想念大伙。”' }, consequence: { en: '✅ Wealth. You are rich. New job is harder, but you retire 10 years earlier.', th: '✅ รวย งานใหม่หนักกว่าแต่เกษียณเร็วขึ้น 10 ปี', zh: '✅ 富裕。你富了。新工作更累，但能早退休10年。' }, stats: { competence: 40, ethics: 40, leadership: 0, innovation: 0 } },
            { id: 'B', text: { en: '🛡️ Stay for Culture: "Money isn\'t everything. Happiness matters more."', th: '🛡️ อยู่ต่อเพื่อใจ: "เงินไม่ใช่ทุกอย่าง ความสุขสำคัญกว่า"', zh: '🛡️ 为文化以此：“钱不是一切。开心最重要。”' }, consequence: { en: '🤔 Comfort Trap. You are happy now, but 2 years later you resent the low pay as inflation hits.', th: '🤔 กับดักความสบาย ตอนนี้แฮปปี้ อีก 2 ปีจะเริ่มแค้นที่เงินน้อยตอนเจอเงินเฟ้อ', zh: '🤔 舒适陷阱。现在开心，2年后通胀来了你会恨工资低。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Boomerang: "Take the new job, stay for 2 years, come back as VP later."', th: '🤝 บูมเมอแรง: "ไปก่อน อีก 2 ปีค่อยกลับมาใหม่ในฐานะ VP"', zh: '🤝 回旋镖：“接新Offer，干2年，以后回来当VP。”' }, consequence: { en: '✨ Career Optimization. The "Alumni" route is the fastest way to exec level.', th: '✨ เส้นทางผู้บริหาร การลาออกแล้วกลับมาคือทางลัดสู่ตำแหน่งใหญ่', zh: '✨ 职业优化。“校友”路线是升维高管的最快路径。' }, stats: { competence: 60, ethics: 30, leadership: 50, innovation: 20 } },
            { id: 'D', text: { en: '🎰 Moonlight: "Keep current job and take new job remotely. r/overemployed."', th: '🎰 ควบสอง: "ทำงานเดิมไปด้วย รับงานใหม่แบบ Remote ด้วย สองจ๊อบแม่ง"', zh: '🎰 兼职：“保留现职，远程接新活。r/overemployed走起。”' }, consequence: { en: '🎲 High & Dry. You make bank for 3 months, then burn out or get caught. High risk.', th: '🎲 ได้คุ้มเสีย รับเงินเละ 3 เดือนแล้วน็อก หรือโดนจับได้ เสี่ยงจัด', zh: '🎲 玩火。赚翻3个月，然后猝死或被抓。高危。' }, stats: { competence: 50, ethics: 10, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'se_047',
        text: {
            en: '🔑 The Production Access: Junior dev asks for SSH keys to Prod to "debug faster". They are smart but impulsive. Security policy says "No".',
            th: '🔑 กุญแจเข้า Prod: น้องใหม่อยากได้ SSH เข้า Prod "จะได้ดีบักไวๆ" น้องมันเก่งแต่ใจร้อน กฎความปลอดภัยบอก "ห้าม"',
            zh: '🔑 生产权限：菜鸟要Prod SSH密钥“为了调试快”。他聪明但冲动。安全策略说“不”。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Deny: "No. Replicate the bug locally. If you can\'t, add more logs."', th: '🚫 ห้าม: "ไม่ จำลองบั๊กที่เครื่องตัวเอง ถ้าทำไม่ได้ก็เพิ่ม log"', zh: '🚫 拒绝：“不行。本地复现。复现不了以此加日志。”' }, consequence: { en: '✅ Secure. It\'s annoying, but you prevent a potential disaster. Discipline is taught.', th: '✅ ปลอดภัย น่ารำคาญแต่กันหายนะ สอนวินัยน้อง', zh: '✅ 安全。烦人但在防灾。教会了纪律。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🔓 Grant Temporary: "Here is a 1-hour key. I watch your screen. Don\'t touch anything."', th: '🔓 ให้ชั่วคราว: "เอากุญแจ 1 ชม. พี่จะดูจอห้ามกะพริบตา ห้ามแตะอะไรมั่ว"', zh: '🔓 临时授权：“给1小时密钥。我盯着你屏。别瞎碰。”' }, consequence: { en: '⚠️ Micromanagement. Safe, but waste of your time. Junior doesn\'t learn to allow logging.', th: '⚠️ จู้จี้ ปลอดภัยแต่เสียเวลาคุณ น้องไม่รู้จักใช้ log', zh: '⚠️ 微管理。安全，但费你时间。菜鸟学不会用日志。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🔑 Give Keys: "Sure, just be careful. Treat it like your own server."', th: '🔑 ให้ไปเลย: "เอาไป ระวังหน่อยนะ คิดซะว่าเป็นเซิร์ฟเวอร์ตัวเอง"', zh: '🔑 给密钥：“行，小心点。当自家服务器弄。”' }, consequence: { en: '💀 Incident. 2 weeks later they `rm -rf` the wrong folder. You are fired for bypassing protocol.', th: '💀 งานงอก 2 อาทิตย์ต่อมาน้องลบโฟลเดอร์ผิด คุณโดนไล่ออกฐานละเมิดกฎ', zh: '💀 事故。2周后他在错的目录`rm -rf`。你因违规被开。' }, stats: { competence: 20, ethics: -20, leadership: -40, innovation: 0 } },
            { id: 'D', text: { en: '🛠️ Build Tooling: "If you need SSH, our observability tools suck. Lets fix the logs/metrics dashboard instead."', th: '🛠️ สร้างเครื่องมือ: "ถ้าต้อง SSH แปลว่าเครื่องมือเราห่วย มาแก้ Dashboard กันดีกว่า"', zh: '🛠️ 造工具：“如果你需要SSH，说明我们监控太烂。来修日志/仪表盘。”' }, consequence: { en: '✨ Root Cause Fix. You solve the debugging problem for everyone forever.', th: '✨ แก้ต้นเหตุ แก้ปัญหาการดีบักให้ทุกคนตลอดไป', zh: '✨ 根因修复。彻底解决全员调试难。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 40 } }
        ]
    },
    {
        id: 'se_048',
        text: {
            en: '🎃 The "Hacktoberfest" Spam: Your open source project is flooded with 500 spam PRs (adding spaces/typos) for free t-shirts. You are the only person maintaining it.',
            th: '🎃 สแปม Hacktoberfest: โปรเจกต์ Open Source คุณโดนถล่มด้วย PR ขยะ 500 อัน (แก้เว้นวรรค/คำผิด) เพื่อแลกเสื้อฟรี คุณดูแลอยู่คนเดียว',
            zh: '🎃 Hacktoberfest垃圾：你的开源项目被500个垃圾PR（加空格/改错字）淹没，只为骗T恤。只有你在维护。'
        },
        options: [
            { id: 'A', text: { en: '🔒 Archive Repo: "I surrender. Mark read-only until November. Can\'t deal with this."', th: '🔒 ปิด Repo: "ยอมแพ้ ปรับเป็น Read-only จนกว่าจะพฤศจิกา ไม่ไหวแล้ว"', zh: '🔒 归档仓库：“投降。设为只读直到11月。搞不定。”' }, consequence: { en: '😐 Survival. Project stalls, but you keep your sanity.', th: '😐 รักษาชีวิต โปรเจกต์หยุดเดิน แต่คุณไม่ประสาทกิน', zh: '😐 幸存。项目停滞，但你保住了理智。' }, stats: { competence: 30, ethics: 30, leadership: 0, innovation: 0 } },
            { id: 'B', text: { en: '🤬 Rage Quit: "Delete the repo. Open source is a mistake. I hate people."', th: '🤬 ลบทิ้ง: "ลบ repot แม่ง Open Source คือความผิดพลาด เกลียดมนุษย์"', zh: '🤬 怒删：“删库。开源是个错误。讨厌人类。”' }, consequence: { en: '💀 Destruction. Years of work gone. Community mourns. You are bitter.', th: '💀 ทำลายล้าง งานหลายปีหายวับ ชุมชนไว้อาลัย คุณกลายเป็นคนขมขื่น', zh: '💀 毁灭。数年心血没了。社区哀悼。你变得愤世嫉俗。' }, stats: { competence: 20, ethics: 10, leadership: -40, innovation: -20 } },
            { id: 'C', text: { en: '🤖 Automate Defense: "Write a GitHub Action to auto-close PRs from known spam accounts or non-code changes."', th: '🤖 บอทป้องกัน: "เขียน GitHub Action ปิด PR ขยะออโต้ กรองพวกแก้ text"', zh: '🤖 自动防御：“写GitHub Action自动关垃圾账号或非代码变更的PR。”' }, consequence: { en: '✨ Automation Win. You filter 99% of spam. You share the action and it goes viral.', th: '✨ ชนะด้วยออโตเมชั่น กรองขยะได้ 99% แจก Action นี้แล้วดังระเบิด', zh: '✨ 自动化赢。过滤99%垃圾。分享Action后火了。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '🏷️ Label "Spam": "Spend weekend manually tagging them \'invalid\'. Determine to shame them."', th: '🏷️ แปะป้ายประจาน: "นั่งไล่กด invalid ทั้งเสาร์อาทิตย์ กะจะประจานให้หมด"', zh: '🏷️ 标“垃圾”：“花周末手动标‘无效’。决心羞辱他们。”' }, consequence: { en: '📉 Wasted Time. You feed the trolls. They don\'t care. You lose your weekend.', th: '📉 เสียเวลาเปล่า ให้อาหารโทรลล์ มันไม่สนหรอก คุณเสียวันหยุดฟรี', zh: '📉 浪费时间。喂食巨魔。由于他们不在乎。你毁了周末。' }, stats: { competence: 40, ethics: 20, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'se_049',
        text: {
            en: '🧪 The User Testing Reality: You watch a user try to use your feature. They can\'t find the button you spent 2 weeks polishing. They close the tab in frustration.',
            th: '🧪 ความจริงของผู้ใช้: นั่งดูผู้ใช้ลองเล่นฟีเจอร์ เขาหาปุ่มที่คุณนั่งขัดเงามา 2 อาทิตย์ไม่เจอ แล้วปิดเว็บหนีด้วยความหงุดหงิด',
            zh: '🧪 用户测试真相：你看用户试用功能。他找不到你磨了2周的那个按钮。他气得关了网页。'
        },
        options: [
            { id: 'A', text: { en: '🤦 Blame User: "Users are stupid. Put a tooltip huge arrow pointing to it."', th: '🤦 โทษผู้ใช้: "โง่จังวะ ใส่ลูกศรชี้ปุ่มแม่งเลย"', zh: '🤦 怪用户：“用户是蠢蛋。加个巨大箭头指着它。”' }, consequence: { en: '📉 Bad UX. You treat symptoms, not the disease. The interface becomes cluttered.', th: '📉 UX ห่วย แก้ที่ปลายเหตุ หน้าจอรกรุงรัง', zh: '📉 烂UX。治标不治本。界面变得杂乱。' }, stats: { competence: 30, ethics: 20, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '📝 Acceptance: "My design failed. Scrap the polish. Make the button native and ugly but visible."', th: '📝 ยอมรับ: "ดีไซน์ผมล้มเหลว ลบความสวยทิ้ง เอาปุ่มแบบดิบๆ แต่เห็นชัดๆ"', zh: '📝 接受：“设计失败。不要特效。把按钮做成原生虽丑但显眼。”' }, consequence: { en: '✅ Humility. Conversion rate doubles. You learn that clarity > beauty.', th: '✅ อ่อนน้อม ยอดใช้พุ่ง 2 เท่า เรียนรู้ว่าความชัดเจนสำคัญกว่าความสวย', zh: '✅ 谦逊。转化率翻倍。学到了清晰>美观。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '📚 Tutorial Mode: "Force a 5-step tutorial walkthrough on first login."', th: '📚 บังคับสอน: "ใส่ Tutorial 5 ขั้นตอนตอนเข้าครั้งแรก บังคับดู"', zh: '📚 教程模式：“首次登录强制走5步教程。”' }, consequence: { en: '💀 Friction. Users hate unskippable tutorials. Bounce rate increases.', th: '💀 ขัดใจ ผู้ใช้เกลียดติวเตอร์เรียลที่ข้ามไม่ได้ คนหนีหมด', zh: '💀 摩擦。用户恨不可跳过教程。跳出率增加。' }, stats: { competence: 30, ethics: 30, leadership: 0, innovation: -10 } },
            { id: 'D', text: { en: '🧠 Rethink Flow: "Why do they need looking for a button? Make the action automatic based on context."', th: '🧠 คิดใหม่: "ทำไมต้องกดปุ่ม? ทำให้มันออโต้ตามบริบทไปเลยสิ"', zh: '🧠 重以此流程：“以此找按钮？根据上下文自动触发操作好了。”' }, consequence: { en: '✨ Innovation. Zero-UI approach. Best possible experience.', th: '✨ นวัตกรรม Zero-UI ประสบการณ์ที่ดีที่สุด', zh: '✨ 创新。零UI路径。最佳体验。' }, stats: { competence: 60, ethics: 40, leadership: 40, innovation: 60 } }
        ]
    },
    {
        id: 'se_050',
        text: {
            en: '🔥 The Final Burnout: You have launched the product. It is successful. But you feel nothing. You are empty. You haven\'t seen friends in 3 months.',
            th: '🔥 ไฟมอดดับ: เปิดตัวโปรดักต์สำเร็จ ยอดปัง แต่คุณไม่รู้สึกอะไรเลย ว่างเปล่า ไม่เจอเพื่อนมา 3 เดือนแล้ว',
            zh: '🔥 最终燃尽：产品发布了。很成功。但你毫无感觉。空虚。3个月没见朋友了。'
        },
        options: [
            { id: 'A', text: { en: '🏃 Sabbatical: "Take 3 months unpaid leave. Go hike a mountain. Reconnect with humanity."', th: '🏃 พักยาว: "ลาไม่รับเงิน 3 เดือน ไปปีนเขา กลับไปเป็นมนุษย์อีกครั้ง"', zh: '🏃 间隔年：“停薪留职3个月。去爬山。重连人类社会。”' }, consequence: { en: '✅ Recovery. You come back recharged (or realize you want to be a farmer). You survive.', th: '✅ ฟื้นฟู ชาร์จแบตเต็ม (หรือค้นพบว่าอยากไปทำสวน) คุณรอดชีวิต', zh: '✅以此。充满电归来（或发现想当农民）。你活下来了。' }, stats: { competence: 40, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '💊 Medicate & Push: "Caffeine, sleeping pills, repeat. Start the next project immediately."', th: '💊 โด๊ปแล้วลุย: "กาแฟ ยานอนหลับ วนไป เริ่มโปรเจกต์ใหม่ทันที"', zh: '💊 嗑药死磕：“咖啡因、安眠药，循环。立马开新项目。”' }, consequence: { en: '💀 Collapse. Health crisis within a year. Forced retirement at 35.', th: '💀 ร่างพัง ป่วยหนักใน 1 ปี โดนบังคับเกษียณตอน 35', zh: '💀 崩溃。一年内健康危机。35岁被迫退休。' }, stats: { competence: 20, ethics: 0, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '👨‍🏫 Pivot to Teaching: "Become a DevRel or Bootcamp instructor. Share knowledge, less pressure."', th: '👨‍🏫 ผันตัวไปสอน: "ไปเป็น DevRel หรือครู Bootcamp แบ่งความรู้ กดดันน้อยกว่า"', zh: '👨‍🏫 转行教学：“做DevRel或训练营讲师。分享知识，压力小。”' }, consequence: { en: '✨ New Chapter. You find fulfillment in helping others. Legacy built.', th: '✨ บทใหม่ เติมเต็มใจด้วยการช่วยคนอื่น สร้างตำนานบทใหม่', zh: '✨ 新篇章。在助人中找到满足。以此传承。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '🏢 Founder Mode: "My lack of feeling means I am ready to be CEO. Start my own company."', th: '🏢 โหมดผู้ก่อตั้ง: "ไร้ความรู้สึกแปลว่าพร้อมเป็น CEO แล้ว เปิดบริษัทเองแม่ง"', zh: '🏢 创始人模式：“没感觉说明我能在当CEO。自己开公司。”' }, consequence: { en: '🎲 High Stakes. You might build a unicorn, or destroy yourself completely. The ultimate gamble.', th: '🎲 เดิมพันสูง อาจได้ยูนิคอร์น หรือไม่ก็พังพินาศ การพนันครั้งสุดท้าย', zh: '🎲 豪赌。可能以此独角兽，或彻底毁灭。终极赌博。' }, stats: { competence: 60, ethics: 20, leadership: 60, innovation: 60 } }
        ]
    }

];
