
export const cybersecurityQuestions = [

    // SECTION 1: JUNIOR ANALYST & EARLY CAREER (Questions 1-10)

    {
        id: 'cs_001',
        text: {
            en: '🚨 The Sticky Note Discovery: It\'s your first week as a Junior SOC Analyst. While helping the Finance Director, Sarah, with a 2FA hardware token failure, she steps out for a coffee. You notice a yellow sticky note tucked under her keyboard. It contains the login "Global_Admin" and a complex password. This account controls the $40M quarterly payroll. What is your move?',
            th: '🚨 การค้นพบโน้ตแปะ: เป็นสัปดาห์แรกของคุณในฐานะ Junior SOC Analyst ขณะช่วยผู้อำนวยการฝ่ายการเงิน Sarah แก้ไขปัญหาโทเค็นฮาร์ดแวร์ 2FA ล้มเหลว เธอเดินออกไปทานกาแฟ คุณสังเกตเห็นโน้ตสีเหลืองแปะอยู่ใต้คีย์บอร์ด ระบุชื่อล็อกอิน "Global_Admin" และรหัสผ่านที่ซับซ้อน บัญชีนี้ควบคุมการจ่ายเงินปันผลรายไตรมาสมูลค่า $40M คุณจะทำอย่างไร?',
            zh: '🚨 便利贴发现：这是你作为初级SOC分析师的第一周。在协助财务总监Sarah解决2FA硬件令牌故障时，她离开去喝咖啡。你发现她键盘下塞着一张黄色便利贴。上面写着登录名“Global_Admin”和一个复杂的密码。该账户控制着4000万美元的季度薪酬。你该怎么办？'
        },
        options: [
            { id: 'A', text: { en: '📸 Formal Evidence Collection: "Photograph the note, confiscate it, and immediately escalate to the CISO. Integrity of the core financial system is paramount."', th: '📸 การเก็บหลักฐานอย่างเป็นทางการ: "ถ่ายรูปโน้ต ยึดไว้ และรายงานไปยัง CISO ทันที ความปลอดภัยของระบบการเงินหลักสำคัญที่สุด"', zh: '📸 正式证据收集：“为纸条拍照，将其没收，并立即上报给CISO。核心财务系统的完整性至关重要。”' }, consequence: { en: '✅ High-Compliance Win! Sarah is reprimanded but the audit logs back you up. You are praised by the CISO for your "Zero Trust" mindset. +15 Leadership.', th: '✅ ชนะด้วยการปฏิบัติตามกฎ! Sarah ถูกตำหนิแต่บันทึกการตรวจสอบสนับสนุนคุณ CISO ชมเชยแนวคิด "Zero Trust" ของคุณ +15 ผู้นำ', zh: '✅ 高合规性获胜！Sarah受到了训斥，但审计日志支持了你的做法。你因“零信任”思维受到CISO的表彰。+15 领导力。' }, stats: { competence: 40, ethics: 50, leadership: 35, innovation: 10 } },
            { id: 'B', text: { en: '🤝 The Peer Coach: "Wait for her return. Privately explain the risk, help her set up an encrypted vault, and watch her shred the note. Build a culture of security, not fear."', th: '🤝 ครูฝึกเพื่อนพนักงาน: "รอเธอกลับมา อธิบายความเสี่ยงเป็นการส่วนตัว ช่วยเธอตั้งค่าห้องนิรภัยที่เข้ารหัส และเฝ้าดูเธอทำลายโน้ต สร้างวัฒนธรรมความปลอดภัย ไม่ใช่ความกลัว"', zh: '🤝 同伴教练：“等她回来。私下解释风险，帮她设置加密保险库，并看着她粉碎那张纸条。建立安全文化，而不是恐惧文化。”' }, consequence: { en: '🤝 Influence Gained! Sarah becomes your biggest ally in Finance. She approves your security budget requests later because she trusts your judgment. +25 Leadership.', th: '🤝 ได้รับอิทธิพล! Sarah กลายเป็นพันธมิตรที่ใหญ่ที่สุดของคุณในฝ่ายการเงิน เธออนุมัติงบความปลอดภัยของคุณภายหลังเพราะเธอไว้ใจคุณ +25 ผู้นำ', zh: '🤝 赢得影响力！Sarah成了你在财务部最大的盟友。由于她信任你的判断，后来她批准了你的安全预算请求。+25 领导力。' }, stats: { competence: 30, ethics: 40, leadership: 50, innovation: 15 } },
            { id: 'C', text: { en: '🛡️ Anonymous Notification: "Shred the note while she\'s away. Later, send an anonymous tip to the IT helpdesk about potential credential exposure to trigger a policy refresh."', th: '🛡️ การแจ้งเตือนไม่ระบุตัวตน: "ทำลายโน้ตทิ้งตอนที่เธอไม่อยู่ แล้วค่อยส่งเบาะแสลับไปที่ IT helpdesk เกี่ยวกับการรั่วไหลของรหัสผ่านเพื่อกระตุ้นการปรับปรุงนโยบาย"', zh: '🛡️ 匿名通知：“趁她不在时粉碎纸条。稍后，向IT服务台发送关于潜在凭据泄露的匿名提示，以触发政策更新。”' }, consequence: { en: '⚠️ Passive-Aggressive Risk! You avoided confrontation, but Sarah panics thinking a corporate spy entered her office. A massive internal investigation is launched. -10 Leadership.', th: '⚠️ ความเสี่ยงจากความขัดแย้งลึกๆ! คุณเลี่ยงการเผชิญหน้าได้ แต่ Sarah ตื่นตระหนกคิดว่ามีสายลับบุกเข้าห้อง มีการสืบสวนภายในครั้งใหญ่ตามมา -10 ผู้นำ', zh: '⚠️ 被动攻击风险！你避开了冲突，但Sarah惊慌失措地认为有商业间谍进入了她的办公室。公司启动了一场大规模的内部调查。-10 领导力。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 25 } },
            { id: 'D', text: { en: '🙈 Tactical Ignorance: "Pretend you saw nothing. Challenging a Director on your first week is professional suicide. Focus on fixing the 2FA token instead."', th: '🙈 เพิกเฉยเชิงยุทธวิธี: "แกล้งทำเป็นไม่เห็น การท้าทายผู้อำนวยการในสัปดาห์แรกคือการฆ่าตัวตายในอาชีพ โฟกัสไปที่การซ่อมโทเค็น 2FA แทน"', zh: '🙈 战术性无视：“假装什么也没看见。在第一周挑战总监是职业自杀。还是专注于修复2FA令牌吧。”' }, consequence: { en: '💀 The Delayed Breach! Three months later, that account is compromised. The investigation shows you were the last IT person at her desk. You are fired for gross negligence. -50 Competence.', th: '💀 การเจาะระบบที่ล่าช้า! สามเดือนต่อมา บัญชีนั้นถูกบุกรุก การสืบสวนพบว่าคุณเป็นไอทีคนสุดท้ายที่โต้ะของเธอ คุณถูกไล่ออกฐานประมาทเลินเล่อร้ายแรง -50 ความสามารถ', zh: '💀 延迟的违规！三个月后，该账户被盗。调查显示你是最后一个出现在她办公桌前的IT人员。你因严重疏忽而被解雇。-50 能力。' }, stats: { competence: -20, ethics: -10, leadership: -20, innovation: 0 } }
        ]
    },

    {
        id: 'cs_002',
        text: {
            en: '🎣 The CEO Whaling Gambit: You receive a high-urgency email from the "CEO" (spoofed domain: CEO.NAME@CORP-IT.NET) asking for an immediate $85,000 "discretionary transfer" to a vendor in Hong Kong for a "covert M&A project." The CFO is CC\'d and has already replied: "Understood, prepping the wire now."',
            th: '🎣 กลหมาก CEO Whaling: คุณได้รับอีเมลด่วนพิเศษจาก "CEO" (โดเมนปลอม: CEO.NAME@CORP-IT.NET) ขอให้โอนเงิน "ตามดุลยพินิจ" มูลค่า $85,000 ทันทีไปยังผู้ขายในฮ่องกงสำหรับ "โครงการลับ" CFO ถูก CC ในอีเมลและตอบกลับแล้วว่า: "รับทราบ กำลังเตรียมโอนเงินครับ"',
            zh: '🎣 CEO鲸鱼博弈：你收到了来自“CEO”（伪造域名：CEO.NAME@CORP-IT.NET）的一封紧急邮件，要求立即向香港的一家供应商进行85,000美元的“全权转账”，用于一个“秘密项目”。CFO被抄送了，并且已经回复：“明白了，正在准备电汇。”'
        },
        options: [
            { id: 'A', text: { en: '🚨 The Kill-Switch: "Immediately disable the CFO\'s outbound network access, call their extension, and verify the request. Blacklist the spoofed domain globally."', th: '🚨 สวิตช์ทำลาย: "ตัดการเข้าถึงเครือข่ายขาออกของ CFO ทันที โทรเข้าเบอร์โต๊ะเพื่อยืนยันคำขอ บล็อกโดเมนปลอมทั่วโลก"', zh: '🚨 紧急开关：“立即禁用CFO的传出网络访问，拨打其分机并验证请求。在全球范围内将伪造域名列入黑名单。”' }, consequence: { en: '✅ Crisis Averted! You stopped the wire transfer with minutes to spare. The CEO is impressed by your decisiveness. +30 Competence.', th: '✅ เลี่ยงวิกฤตได้! คุณหยุดการโอนเงินได้ทันเวลา CEO ประทับใจในการตัดสินใจของคุณ +30 ความสามารถ', zh: '✅ 危机化解！你在最后几分钟内阻止了电汇。CEO对你的果断印象深刻。+30 能力。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '📧 The Header Analyst: "Analyze the email headers in a sandbox to trace the sender\'s IP and gather intelligence on the phishing kit before intervening."', th: '📧 นักวิเคราะห์ส่วนหัว: "วิเคราะห์ส่วนหัวอีเมลใน sandbox เพื่อตามรอย IP ผู้ส่งและเก็บข้อมูลชุดเครื่องมือฟิชชิ่งก่อนที่จะเข้าไปขัดจังหวะ"', zh: '📧 标头分析师：“在沙盒中分析邮件标头以追踪发送者的IP，并在干预前收集关于钓鱼工具包的情报。”' }, consequence: { en: '💀 Analysis Paralysis! While you were collecting "intel," the CFO completed the transfer. $85,000 is gone to an unrecoverable offshore account. -30 Leadership.', th: '💀 อัมพาตจากการวิเคราะห์! ขณะที่คุณมัวแต่เก็บข้อมูล CFO ก็โอนเงินเสร็จแล้ว เงิน $85,000 หายไปในบัญชีต่างประเทศที่ตามคืนไม่ได้ -30 ผู้นำ', zh: '💀 分析瘫痪！当你还在收集“情报”时，CFO已经完成了转账。85,000美元流向了一个无法追回的海外账户。-30 领导力。' }, stats: { competence: 10, ethics: 15, leadership: -20, innovation: 30 } },
            { id: 'C', text: { en: '🛡️ Managed Warning: "Reply to the email thread asking the CEO to confirm the request via an internal secure channel. Trust the existing controls."', th: '🛡️ คำเตือนแบบจัดการ: "ตอบกลับในเธรดอีเมลขอให้ CEO ยืนยันคำขอผ่านช่องทางที่ปลอดภัยภายในบริษัท ไว้ใจในระบบควบคุมที่มีอยู่"', zh: '🛡️ 受管警告：“回复邮件，请求CEO通过内部安全渠道确认请求。相信现有的控制措施。”' }, consequence: { en: '⚠️ Risk Exposure! The attacker replies with a convincing fake confirmation. Your slow response allows the transfer to proceed. The company loses the funds. -20 Competence.', th: '⚠️ ความเสี่ยงรั่วไหล! ผู้โจมตีตอบกลับด้วยการยืนยันปลอมที่น่าเชื่อถือ การตอบสนองที่ช้าของคุณทำให้การโอนดำเนินต่อ บริษัทสูญเงิน -20 ความสามารถ', zh: '⚠️ 风险暴露！攻击者回复了一份令人信服的虚假确认。你的缓慢反应导致转账继续。公司损失了资金。-20 能力。' }, stats: { competence: 25, ethics: 20, leadership: 15, innovation: 15 } },
            { id: 'D', text: { en: '🕵️ Counter-Intel: "Send a tracking link disguised as a Revision back to the attacker to get their real IP and browser fingerprint. Turn the tables."', th: '🕵️ ข่าวกรองย้อนกลับ: "ส่งลิงก์ติดตามที่ปลอมเป็นการแก้ไขงานกลับไปให้ผู้โจมตีเพื่อเอา IP จริงและข้อมูลเบราว์เซอร์ของเขา เอาคืนแฮกเกอร์"', zh: '🕵️ 反侦察：“向攻击者发送一个伪装成‘修订版’的追踪链接，以获取他们的真实IP和浏览器指纹。反击对方。”' }, consequence: { en: '🚀 Innovation Win! You get the attacker\'s IP and provider details. Security uses this to block them across all portals. The CFO is impressed by your "hacking." +25 Innovation.', th: '🚀 ชนะด้วยนวัตกรรม! คุณได้ IP และข้อมูลผู้ให้บริการของผู้โจมตี ฝ่ายความปลอดภัยใช้ข้อมูลนี้บล็อกพวกเขาในทุกพอร์ทัล CFO ประทับใจในการ "แฮก" ของคุณ +25 นวัตกรรม', zh: '🚀 创新获胜！你获得了攻击者的IP和提供商详细信息。安全部门利用这些信息在所有门户上封锁他们。CFO对你的“黑客行为”印象深刻。+25 创新。' }, stats: { competence: 35, ethics: 20, leadership: 20, innovation: 50 } }
        ]
    },

    {
        id: 'cs_003',
        text: {
            en: '💻 The Rogue Device: Network monitoring identifies a Raspberry Pi connected to a conference room port, scanning internal subnets. It is currently stripping SSL from connected users. Physical security finds it hidden behind a TV, plugged into an Ethernet port.',
            th: '💻 อุปกรณ์อันธพาล: เครื่องมือตรวจสอบเครือข่ายพบ Raspberry Pi เชื่อมต่อกับพอร์ตห้องประชุม กำลังสแกน subnet ภายในและดักข้อมูล SSL จากผู้ใช้ รปภ. พบมันซ่อนอยู่หลังทีวีเสียบสายแลนอยู่',
            zh: '💻 流氓设备：网络监控发现一个树莓派连接到会议室端口，正在扫描内部子网。它目前正在从已连接用户中剥离SSL。安保人员发现它藏在电视后面，插在以太网端口上。'
        },
        options: [
            { id: 'A', text: { en: '🔨 Physical Seizure & Forensics: "Physically unplug the device, isolate it in a Faraday bag, and begin forensic analysis of the logs. Identify every internal IP it contacted."', th: '🔨 การยึดและนิติวิทยาศาสตร์: "ดึงปลั๊กอุปกรณ์ออก เก็บในถุงฟาราเดย์ และเริ่มวิเคราะห์นิติวิทยาศาสตร์จาก log ระบุทุก IP ภายในที่มันติดต่อ"', zh: '🔨 物理查封与取证：“拔掉设备，将其隔离在法拉第袋中，并开始对日志进行取证分析。识别它接触过的每个内部IP。”' }, consequence: { en: '✅ Expert Cleanup! You discover the device was exfiltrating blueprints. You identify the 12 engineers who accidentally connected and reset their credentials. +30 Competence.', th: '✅ การเคลียร์พื้นที่ระดับมืออาชีพ! คุณพบว่าอุปกรณ์กำลังขโมยพิมพ์เขียว คุณระบุวิศวกร 12 คนที่เผลอเชื่อมต่อและรีเซ็ตรหัสผ่านให้พวกเขา +30 ความสามารถ', zh: '✅ 专家清理！你发现该设备正在外泄蓝图。你识别出了12名不小心连接的工程师并重置了他们的凭据。+30 能力。' }, stats: { competence: 50, ethics: 35, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '📡 The Silent Monitor: "Leave it active but route its traffic through a controlled proxy. Feed the attacker fake data while tracing the C2 server back to the source."', th: '📡 ผู้สังเกตการณ์เงียบ: "เปิดทิ้งไว้แต่ส่งทราฟฟิกผ่านพร็อกซีที่ควบคุมได้ ส่งข้อมูลปลอมให้ผู้โจมตีในขณะที่ตามรอยเซิร์ฟเวอร์ C2 กลับไปยังต้นตอ"', zh: '📡 静默监控：“保持其活跃，但通过受控代理路由其流量。在追踪C2服务器回到源头的同时，向攻击者提供虚假数据。”' }, consequence: { en: '🚀 Espionage Masterstroke! You lead a counter-intelligence operation that traces the attack to a rival firm. A major legal victory for the company. +40 Innovation.', th: '🚀 ผลงานจารกรรมที่ยอดเยี่ยม! คุณนำปฏิบัติการต่อต้านข่าวกรองที่ตามรอยการโจมตีไปถึงบริษัทคู่แข่ง นำไปสู่ชัยชนะทางกฎหมายครั้งใหญ่ของบริษัท +40 นวัตกรรม', zh: '🚀 间谍活动神来之笔！你领导了一场反情报行动，追踪到这是竞争对手公司的攻击。这对公司来说是一次重大的法律胜利。+40 创新。' }, stats: { competence: 40, ethics: 20, leadership: 35, innovation: 50 } },
            { id: 'C', text: { en: '🔇 Port Lockdown: "Remotely disable the Ethernet port on the switch immediately. Prioritize stopping the data leak over gathering physical evidence."', th: '🔇 ล็อกพอร์ต: "ปิดพอร์ตแลนบนสวิตช์จากระยะไกลทันที เน้นหยุดการรั่วไหลของข้อมูลมากกว่าการเก็บหลักฐานทางกายภาพ"', zh: '🔇 端口锁定：“立即远程禁用交换机上的以太网端口。优先停止数据泄露，而不是收集物理证据。”' }, consequence: { en: '⚖️ Neutral Outcome! The leak stops, but the attacker notices the port is dead and flees. You have no evidence to catch the person responsible. +10 Competence.', th: '⚖️ ผลลัพธ์เป็นกลาง! การรั่วไหลหยุดลง แต่ผู้โจมตีรู้ตัวและหนีไป คุณไม่มีหลักฐานที่จะจับคนทำได้ +10 ความสามารถ', zh: '⚖️ 中性结果！泄露停止了，但攻击者发现端口失效并逃走。你没有证据来抓获相关责任人。+10 能力。' }, stats: { competence: 35, ethics: 30, leadership: 20, innovation: 20 } },
            { id: 'D', text: { en: '📢 Urgent Warning: "Send a global email warning all staff about rogue WiFi and devices. Post a photo of the Pi on Slack to shame the culprit."', th: '📢 แจ้งเตือนด่วน: "ส่งอีเมลแจ้งพนักงานทุกคนเตือนเรื่อง WiFi และอุปกรณ์ปลอม โพสต์รูปของ Pi ลง Slack เพื่อประจานคนทำ"', zh: '📢 紧急警告：“向全体员工发送全球邮件，警告流氓WiFi和设备。在Slack上发布Pi的照片以羞辱罪魁祸首。”' }, consequence: { en: '💀 Operational Panic! You caused mass anxiety and everyone stopped working. The attacker saw your Slack post and remotely wiped the device. Evidence destroyed. -20 Leadership.', th: '💀 ความตื่นตระหนกในการทำงาน! คุณสร้างความกังวลให้คนหมู่มากจนทุกคนหยุดทำงาน ผู้โจมตีเห็นโพสต์ Slack และสั่งล้างข้อมูลในเครื่องจากระยะไกล หลักฐานถูกทำลาย -20 ผู้นำ', zh: '💀 运营恐慌！你引发了大范围焦虑，每个人都停止了工作。攻击者看到了你的Slack帖子，并远程清空了设备。证据被销毁。-20 领导力。' }, stats: { competence: 20, ethics: 25, leadership: -20, innovation: 10 } }
        ]
    },

    {
        id: 'cs_004',
        text: {
            en: '🐛 The SSL Bypass: A lead developer wants to push an update to the billing portal. To fix a "timeout issue," they disabled SSL certificate validation for internal API calls. They promise to fix it after the marketing launch. You are the gatekeeper.',
            th: '🐛 การข้าม SSL: หัวหน้านักพัฒนาต้องการอัปเดตพอร์ทัลเรียกเก็บเงิน เพื่อแก้ปัญหา "timeout" พวกเขาได้ปิดการตรวจสอบใบรับรอง SSL สำหรับ API ภายใน และสัญญาว่าจะแก้ให้หลังเปิดตัวทางการตลาด คุณคือผู้คุมประตู',
            zh: '🐛 SSL绕过：一名首席开发人员想要更新计费门户。为了修复“超时问题”，他们禁用了内部API调用的SSL证书验证。他们承诺在营销发布后修复。你是守门人。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Hard Block: "Request Denied. No unencrypted internal traffic allowed. Fix the timeout by optimizing the database query instead of lowering security."', th: '🛑 บล็อกอย่างเด็ดขาด: "ปฏิเสธคำขอ ไม่อนุญาตให้มีทราฟฟิกภายในที่ไม่เข้ารหัส แก้ปัญหา timeout ด้วยการปรับปรุงฐานข้อมูลแทนที่จะลดความปลอดภัย"', zh: '🛑 坚决拦截：“请求被拒绝。不允许任何未加密的内部流量。通过优化数据库查询来修复超时，而不是降低安全性。”' }, consequence: { en: '✅ Standard Saved! The launch is delayed by 2 days, but you avoid a MITM attack that would have leaked 50,000 credit card tokens. The CTO backs you. +25 Ethics.', th: '✅ รักษามาตรฐาน! การเปิดตัวล่าช้าไป 2 วัน แต่คุณเลี่ยงการโจมตี MITM ที่อาจทำข้อมูลบัตรเครดิต 50,000 ใบรั่วไหลได้ CTO สนับสนุนคุณ +25 จริยธรรม', zh: '✅ 标准得以捍卫！发布延迟了2天，但你避免了一场可能泄露5万个信用卡令牌的中间人攻击。CTO支持你。+25 职业道德。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🤝 Staging Compromise: "Deploy to staging only. I will monitor the logs for 24 hours. If there is zero anomalous traffic, we consider a temporary Production exception."', th: '🤝 ข้อตกลงใน Staging: "Deploy ใน Staging เท่านั้น ฉันจะเฝ้าดู log 24 ชั่วโมง ถ้าไม่มีอะไรผิดปกติค่อยพิจารณาให้เป็นข้อยกเว้นชั่วคราวใน Production"', zh: '🤝 暂存妥协：“仅部署到暂存环境。我将监控日志24小时。如果零异常流量，我们考虑临时的生产环境例外。”' }, consequence: { en: '⚠️ Technical Debt! You spent 24 hours staring at logs instead of your job. The "temporary" fix stays for 6 months because the team got busy. Persistent vulnerability. -10 Competence.', th: '⚠️ หนี้ทางเทคนิค! คุณเสียเวลา 24 ชั่วโมงจ้อง log แทนที่จะทำงานอื่น การแก้ไข "ชั่วคราว" อยู่ยาวถึง 6 เดือนเพราะทีมงานยุ่ง เกิดช่องโหว่ถาวร -10 ความสามารถ', zh: '⚠️ 技术债！你花了24小时盯着日志而不是做你的工作。由于团队忙碌，这个“临时”修复保持了6个月。持久的漏洞。-10 能力。' }, stats: { competence: 20, ethics: 20, leadership: 15, innovation: 15 } },
            { id: 'C', text: { en: '📝 Risk Acceptance: "Make the Lead Developer sign a Formal Risk Acceptance form taking personal responsibility. Then approve the deployment."', th: '📝 การยอมรับความเสี่ยง: "ให้หัวหน้านักพัฒนาเซ็นใบยอมรับความเสี่ยงสถาบันรับผิดชอบส่วนตัว แล้วค่อยอนุมัติการ Deploy"', zh: '📝 风险接受：“让首席开发人员签署正式的风险接受表，承担个人责任。然后批准部署。”' }, consequence: { en: '💀 Bureaucratic Failure! A breach occurs. The dev is fired, but the company loses $200k in fines. You are viewed as a "paper-pusher" who failed to defend. -30 Leadership.', th: '💀 ความล้มเหลวทางระเบียบงาน! เกิดการเจาะระบบ นักพัฒนาถูกไล่ออกแต่บริษัทเสียเงินค่าปรับ $200k คุณถูกมองว่าเป็นแค่คนทำตามหน้าที่แต่ป้องกันไม่ได้จริง -30 ผู้นำ', zh: '💀 官僚主义失败！发生了违规。开发人员被解雇，但公司损失了20万美元的罚款。你被看作是一个未能履行防御职责的“公文搬运工”。-30 领导力。' }, stats: { competence: 15, ethics: 10, leadership: -30, innovation: 15 } },
            { id: 'D', text: { en: '🛠️ Automation: "Reject the PR but write a script to automate self-signed cert generation for internal trust. Fix their problem the right way."', th: '🛠️ ระบบอัตโนมัติ: "ปฏิเสธ PR แต่เขียนสคริปต์สร้างใบรับรองอัตโนมัติเพื่อความเชื่อถือภายใน แก้ปัญหาให้พวกเขาด้วยวิธีที่ถูกต้อง"', zh: '🛠️ 自动化：“拒绝PR，但编写一个脚本来自动生成内部信任的自签名证书。以正确的方式解决他们的问题。”' }, consequence: { en: '🚀 Security Hero! You didn\'t just say no; you provided a solution. The dev team loves you. You are given a bonus for improving speed and security. +30 Innovation.', th: '🚀 ฮีโร่ความปลอดภัย! คุณไม่ได้แค่ปฏิเสธแต่เสนอทางออกให้ ทีมพัฒนารักคุณ คุณได้รับโบนัสเพื่อเพิ่มความเร็วและความปลอดภัย +30 นวัตกรรม', zh: '🚀 安全英雄！你不仅仅是说不；你提供了一个解决方案。开发团队非常爱你。你因提高了速度和安全性而获得了奖金。+30 创新。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 50 } }
        ]
    },

    {
        id: 'cs_005',
        text: {
            en: '🔐 The Password Spray: Logs show 50,000 failed login attempts across the user base from 400 IPs in 10 minutes. No accounts are locked yet because each IP only tries 2 passwords per hour, bypassing traditional thresholds.',
            th: '🔐 การพ่นรหัสผ่าน: บันทึกแสดงความพยายามล็อกอินล้มเหลว 50,000 ครั้งจาก IP 400 แห่งใน 10 นาที ยังไม่มีบัญชีถูกล็อกเพราะแต่ละ IP ลองแค่ 2 รหัสผ่านต่อชั่วโมง ทำให้ข้ามเกณฑ์ปกติไปได้',
            zh: '🔐 密码喷洒：日志显示10分钟内来自400个IP的用户群共有5万次登录失败尝试。由于每个IP每小时只尝试2个密码，绕过了传统阈值，目前还没有账户被锁定。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Geo-Blocking: "Immediately block all authentication attempts from outside your primary operational regions at the gateway level."', th: '🛡️ Geo-Blocking: "บล็อกการยืนยันตัวตนทั้งหมดจากนอกภูมิภาคที่ดำเนินการหลักในระดับเกตเวย์ทันที"', zh: '🛡️ 地理封锁：“立即在网关级别封锁来自主要运营区域以外的所有身份验证尝试。”' }, consequence: { en: '⚠️ Operational Friction! You blocked the attack, but you also blocked the CEO on vacation and the global sales team. Helpdesk is flooded with calls. -15 Leadership.', th: '⚠️ ข้อบกพร่องในการทำงาน! คุณบล็อกการโจมตีได้แต่ก็บล็อก CEO ที่พักร้อนและทีมขายทั่วโลกด้วย Helpdesk โดนกระหน่ำด้วยโทรศัพท์ -15 ผู้นำ', zh: '⚠️ 运营摩擦！你阻止了攻击，但也封锁了正在度假的CEO和全球销售团队。服务台接线员应接不暇。-15 领导力。' }, stats: { competence: 30, ethics: 20, leadership: -15, innovation: 10 } },
            { id: 'B', text: { en: '🚨 Adaptive MFA: "Enable a policy that forces MFA for all logins that trigger a medium risk score. Don\'t block IPs; block unauthorized behavior."', th: '🚨 Adaptive MFA: "เปิดใช้นโยบายบังคับ MFA สำหรับการล็อกอินที่เสี่ยงระดับกลาง ไม่บล็อก IP แต่บล็อกพฤติกรรมที่ไม่ได้รับอนุญาต"', zh: '🚨 自适应MFA：“启用一项策略，强制对所有触发中等风险评分的登录进行MFA。不要封锁IP；封锁未经授权的行为。”' }, consequence: { en: '✅ Tactical Mastery! Bots can\'t solve MFA. The attack fails completely. Genuine employees just have to tap a button. Frictionless security win. +25 Competence.', th: '✅ ความเชี่ยวชาญทางยุทธวิธี! บอทผ่าน MFA ไม่ได้ การโจมตีล้มเหลวสนิท พนักงานจริงแค่กดปุ่มเดียว ชัยชนะความปลอดภัยที่ราบรื่น +25 ความสามารถ', zh: '✅ 战术精湛！机器人无法解决MFA。攻击完全失败。真实的员工只需点击一个按钮。无缝的安全获胜。+25 能力。' }, stats: { competence: 50, ethics: 30, leadership: 35, innovation: 20 } },
            { id: 'C', text: { en: '🔢 Threshold Logic: "Lower the account lockout threshold to 3 attempts. Stop the attacker in their tracks by locking the door immediately."', th: '🔢 ตรรกะเกณฑ์: "ลดเกณฑ์การล็อกบัญชีเหลือแค่ 3 ครั้ง หยุดผู้โจมตีด้วยการล็อกประตูทันที"', zh: '🔢 阈值逻辑：“将账户锁定阈值降低到3次尝试。通过立即关门来阻止攻击者。”' }, consequence: { en: '💀 Denial of Service! Every employee is now locked out of email because the attacker is spraying the whole list. You helped the hacker DoS your own company. -40 Competence.', th: '💀 ปฏิเสธการให้บริการ! พนักงานทุกคนถูกล็อกไม่ให้เข้าอีเมลเพราะผู้โจมตีพ่นใส่รายชื่อทั้งหมด คุณช่วยแฮกเกอร์ทำ DoS ใส่บริษัทตัวเอง -40 ความสามารถ', zh: '💀 拒绝服务！由于攻击者正在扫描整个列表，每位员工现在都被锁定在邮件之外。你帮助黑客对自己公司进行了DoS攻击。-40 能力。' }, stats: { competence: -40, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🕵️ Advanced Hunting: "Use the logs to identify which legacy systems (IMAP) aren\'t protected by MFA. Disable legacy auth across the tenant."', th: '🕵️ การล่าขั้นสูง: "ใช้ log ระบุระบบเก่า (IMAP) ที่ไม่มี MFA ปิดการยืนยันตัวตนแบบเก่าในทุกส่วนของระบบ"', zh: '🕵️ 高级狩猎：“使用日志识别哪些旧系统（IMAP）没有受到MFA保护。在整个租户中禁用旧版身份验证。”' }, consequence: { en: '🚀 Architectural Transformation! You used a crisis to secure the company forever. You save $40k/year in future insurance premiums. +40 Innovation.', th: '🚀 การปฏิรูปสถาปัตยกรรม! คุณใช้วิกฤตเพื่อสร้างความปลอดภัยให้บริษัทถาวร ประหยัดเงินประกัน $40k ต่อปีในอนาคต +40 นวัตกรรม', zh: '🚀 架构转型！你利用一次危机永久地巩固了公司的安全。你每年节省了4万美元未来的保险费。+40 创新。' }, stats: { competence: 40, ethics: 30, leadership: 35, innovation: 50 } }
        ]
    },

    {
        id: 'cs_006',
        text: {
            en: '🦠 The Ransomware in HR: An HR recruiter opened a "Resume.pdf.exe". Now her laptop is encrypted with a red skull background demanding 5 BTC. The malware is attempting to spread to the file server. Backups were last successfully run... 3 weeks ago.',
            th: '🦠 แรนซัมแวร์ในฝ่ายบุคคล: พนักงานสรรหาเปิด "Resume.pdf.exe" ตอนนี้แล็ปท็อปของเธอถูกเข้ารหัสด้วยพื้นหลังกะโหลกแดงเรียกค่าไถ่ 5 BTC มัลแวร์พยายามแพร่กระจายไปยังเซิร์ฟเวอร์ไฟล์ การสำรองข้อมูลล่าสุดสำเร็จเมื่อ... 3 สัปดาห์ก่อน',
            zh: '🦠 人力资源部的勒索软件：一位HR招聘人员打开了“Resume.pdf.exe”。现在她的笔记本电脑被加密，红色骷髅背景要求支付5 BTC。恶意软件正试图传播到文件服务器。上次成功备份是……3周前。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔌 Cut the Cord: "Physically pull the network cables from the HR switch. Isolate the infection immediately before it hits the critical servers. We\'ll deal with the data loss later."',
                    th: '🔌 ตัดสาย: "ดึงสายเคเบิลเครือข่ายออกจากสวิตช์ HR ทันที แยกการติดเชื้อก่อนที่จะถึงเซิร์ฟเวอร์สำคัญ เราจะจัดการกับข้อมูลที่สูญหายทีหลัง"',
                    zh: '🔌 切断电源：“物理拔掉HR交换机的网线。在感染关键服务器之前立即隔离。我们稍后再处理数据丢失问题。”'
                },
                consequence: {
                    en: '✅ Crisis Contained! You sacrifice the HR laptop (it\'s wiped), and they lose 3 weeks of work. But the main servers are safe. It\'s a painful but necessary amputation.',
                    th: '✅ วิกฤตถูกควบคุม! คุณเสียสละแล็ปท็อป HR (ถูกล้าง) และพวกเขาเสียงาน 3 สัปดาห์ แต่เซิร์ฟเวอร์หลักปลอดภัย เป็นการตัดอวัยวะที่เจ็บปวดแต่จำเป็น',
                    zh: '✅ 危机被控制！你牺牲了HR笔记本电脑（被擦除），他们失去了3周的工作。但主服务器是安全的。这是一次痛苦但必要的截肢。'
                },
                stats: { competence: 20, ethics: 15, leadership: 20, innovation: 5 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Pay the Ransom: "HR data is too critical. It has social security numbers and offer letters. Insurance might cover it. Negotiate and pay."',
                    th: '💰 จ่ายค่าไถ่: "ข้อมูล HR สำคัญเกินไป มีหมายเลขประกันสังคมและจดหมายเสนอจ้าง ประกันอาจครอบคลุม เจรจาและจ่าย"',
                    zh: '💰 支付赎金：“HR数据太关键了。它包含社会安全号码和录用信。保险可能会承保。谈判并支付。”'
                },
                consequence: {
                    en: '💀 Double Extortion! You pay $150k. They give you a decryptor that works halfway. Then they demand another $150k to NOT leak the stolen SSNs to the dark web. You funded criminals and still lost.',
                    th: '💀 การกรรโชกซ้ำซ้อน! คุณจ่าย $150k พวกเขาให้ตัวถอดรหัสที่ทำงานได้ครึ่งเดียว แล้วเรียกอีก $150k เพื่อไม่ให้ปล่อย SSN ที่ขโมยมาลง dark web คุณให้ทุนอาชญากรและยังแพ้',
                    zh: '💀 双重勒索！你不仅支付了15万美元。他们给你的解密器只起一半作用。然后他们要求再支付15万美元，以不将被盗的SSN泄露到暗网。你资助了罪犯，却仍然输了。'
                },
                stats: { competence: -20, ethics: -25, leadership: -15, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Decryption Tool Search: "Search NoMoreRansom.org and threat intel forums. Maybe there\'s a known decryptor for this variant. Don\'t panic yet."',
                    th: '🕵️ ค้นหาเครื่องมือถอดรหัส: "ค้นหา NoMoreRansom.org และฟอรัมข่าวกรองภัยคุกคาม อาจมีตัวถอดรหัสที่รู้จักสำหรับสายพันธุ์นี้ อย่าเพิ่งตื่นตระหนก"',
                    zh: '🕵️ 解密工具搜索：“搜索NoMoreRansom.org和威胁情报论坛。也许这个变种有已知的解密器。先别慌。”'
                },
                consequence: {
                    en: '🎲 The Hail Mary! It takes 4 hours, but you find a match! A security researcher busted this key last month. You recover the data for free. Lucky, but you can\'t bank on luck next time.',
                    th: '🎲 ความหวังสุดท้าย! ใช้เวลา 4 ชั่วโมง แต่คุณพบสิ่งที่ตรงกัน! นักวิจัยความปลอดภัยเจาะคีย์นี้เมื่อเดือนที่แล้ว คุณกู้ข้อมูลคืนฟรี โชคดี แต่คุณพึ่งดวงครั้งหน้าไม่ได้',
                    zh: '🎲 孤注一掷！花了4个小时，但你找到了匹配的！一位安全研究员上个月破解了这个密钥。你免费恢复了数据。幸运，但你不能指望下次也有好运。'
                },
                stats: { competence: 25, ethics: 20, leadership: 10, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Transparent Disclosure: "Assume data breach. Wipe the machine. Notify all employees and applicants that their PII might be compromised. Offer credit monitoring."',
                    th: '📢 การเปิดเผยอย่างโปร่งใส: "สมมติว่ามีการละเมิดข้อมูล ล้างเครื่อง แจ้งพนักงานและผู้สมัครทุกคนว่า PII อาจถูกบุกรุก เสนอการตรวจสอบเครดิต"',
                    zh: '📢 透明披露：“假设数据泄露。擦除机器。通知所有员工和申请人他们的PII可能已被泄露。提供信用监控。”'
                },
                consequence: {
                    en: '✅ Ethics Gold Standard! It\'s embarrassing and costly (monitoring services), but you comply with GDPR/CCPA. HR is mad about re-doing work, but you protected the people, not just the computers.',
                    th: '✅ มาตรฐานทองคำจริยธรรม! มันน่าอายและมีค่าใช้จ่าย (บริการตรวจสอบ) แต่คุณปฏิบัติตาม GDPR/CCPA HR โกรธที่ต้องทำงานใหม่ แต่คุณปกป้องผู้คน ไม่ใช่แค่คอมพิวเตอร์',
                    zh: '✅ 道德黄金标准！这令人尴尬且昂贵（监控服务），但你遵守了GDPR/CCPA。HR对重做工作感到生气，但你保护了人，不仅仅是计算机。'
                },
                stats: { competence: 15, ethics: 30, leadership: 20, innovation: 5 }
            }
        ]
    },

    {
        id: 'cs_007',
        text: {
            en: '⏳ The Unpatched Critical Server: A new critical vulnerability (CVSS 9.8) is announced for your main web server OS. A patch is available. However, restarting this server costs the business $50,000 per hour in downtime, and the Sales VP says "Not until the weekend." It is Tuesday.',
            th: '⏳ เซิร์ฟเวอร์สำคัญที่ไม่ได้แพทช์: มีการประกาศช่องโหว่ร้ายแรงใหม่ (CVSS 9.8) สำหรับ OS ของเซิร์ฟเวอร์เว็บหลัก มีแพทช์พร้อมใช้งาน อย่างไรก็ตาม การรีสตาร์ทเซิร์ฟเวอร์นี้ทำให้ธุรกิจเสียเงิน $50,000 ต่อชั่วโมง และ VP ฝ่ายขายบอกว่า "ไม่ใช่จนกว่าจะสุดสัปดาห์" วันนี้วันอังคาร',
            zh: '⏳ 未修补的关键服务器：宣布你的主Web服务器操作系统存在一个新的严重漏洞（CVSS 9.8）。补丁可用。然而，重新启动该服务器将使企业每小时损失5万美元，销售副总裁说“直到周末才行”。今天是周二。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Override & Patch: "I\'m declaring a Severity 1 Incident. Security trumps potential revenue. If we get hacked, we lose millions, not thousands. Patching NOW."',
                    th: '🚀 ยกเลิกและแพทช์: "ฉันประกาศเหตุการณ์ความรุนแรงระดับ 1 ความปลอดภัยสำคัญกว่ารายได้ที่อาจเกิดขึ้น ถ้าเราถูกแฮก เราเสียหลักล้าน ไม่ใช่หลักพัน แพทช์เดี๋ยวนี้"',
                    zh: '🚀 覆盖并修补：“我宣布一级事故。安全胜过潜在收入。如果我们被黑，我们将损失数百万，而不是数千。现在就修补。”'
                },
                consequence: {
                    en: '⚖️ High Risk, High Reward! The system goes down for 30 mins ($25k loss). Sales VP is furious and tries to fire you. But the next day, news breaks that competitors got ransomware via this exact bug. You are vindicated as a savior.',
                    th: '⚖️ ความเสี่ยงสูง ผลตอบแทนสูง! ระบบหยุดทำงาน 30 นาที (เสีย $25k) VP ฝ่ายขายโกรธมากและพยายามไล่คุณออก แต่วันรุ่งขึ้น มีข่าวว่าคู่แข่งโดนแรนซัมแวร์จากบั๊กนี้พอดี คุณได้รับการพิสูจน์ว่าเป็นผู้ช่วยชีวิต',
                    zh: '⚖️ 高风险，高回报！系统停机30分钟（损失2.5万美元）。销售副总裁非常愤怒并试图解雇你。但第二天，新闻爆出竞争对手正是通过这个漏洞感染了勒索软件。你被证明是救世主。'
                },
                stats: { competence: 25, ethics: 20, leadership: 20, innovation: 5 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Virtual Patching: "Okay, no restart. I will implement an aggressive WAF rule to block the specific exploit vector at the network edge until Saturday."',
                    th: '🛡️ การแพทช์เสมือน: "โอเค ไม่รีสตาร์ท ฉันจะใช้กฎ WAF ที่ดุดันเพื่อบล็อกช่องทางโจมตีเฉพาะที่ขอบเครือข่ายจนกว่าจะถึงวันเสาร์"',
                    zh: '🛡️ 虚拟修补：“好的，不重启。我将实施激进的WAF规则，在网络边缘阻止特定的利用向量，直到周六。”'
                },
                consequence: {
                    en: '✅ Smart Engineer! The WAF blocks 200 attack attempts over the next 3 days. You saved the revenue AND kept the security. This is true operational excellence.',
                    th: '✅ วิศวกรฉลาด! WAF บล็อกความพยายามโจมตี 200 ครั้งใน 3 วันถัดไป คุณรักษารายได้และความปลอดภัย นี่คือความเป็นเลิศในการดำเนินงานที่แท้จริง',
                    zh: '✅ 聪明的工程师！在接下来的3天里，WAF阻止了200次攻击尝试。你不仅保住了收入，还保持了安全。这是真正的卓越运营。'
                },
                stats: { competence: 25, ethics: 15, leadership: 15, innovation: 25 }
            },
            {
                id: 'C',
                text: {
                    en: '🎲 Gamble on Obscurity: "We are small, maybe they won\'t find us. Monitor logs closely and patch on Saturday. Keep the VP happy."',
                    th: '🎲 พนันกับความไม่ชัดเจน: "เราเล็ก บางทีพวกเขาอาจไม่เจอเรา ตรวจสอบบันทึกอย่างใกล้ชิดและแพทช์วันเสาร์ เอาใจ VP"',
                    zh: '🎲 赌一把隐蔽性：“我们很小，也许他们找不到我们。密切监控日志并在周六修补。让副总裁高兴。”'
                },
                consequence: {
                    en: '😱 Automation doesn\'t care! Bots scan the entire internet. You get hit on Thursday. Data exfiltrated. The VP blames YOU for not emphasizing the risk enough.',
                    th: '😱 ระบบอัตโนมัติไม่สน! บอทสแกนอินเทอร์เน็ตทั้งหมด คุณโดนวันพฤหัสบดี ข้อมูลถูกขโมย VP โทษคุณที่ไม่เน้นความเสี่ยงให้ชัดเจนพอ',
                    zh: '😱 自动化不管这些！机器人扫描整个互联网。你在周四被击中。数据泄露。副总裁责怪你没有充分强调风险。'
                },
                stats: { competence: -15, ethics: -10, leadership: -15, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📝 Liability Waiver: "I will wait, but I need the Sales VP to sign this Risk Acceptance Form stating they accept full responsibility for any breach." ',
                    th: '📝 หนังสือสละสิทธิ์ความรับผิด: "ฉันจะรอ แต่ฉันต้องการให้ VP ฝ่ายขายเซ็นแบบฟอร์มยอมรับความเสี่ยงนี้ โดยระบุว่าพวกเขายอมรับความรับผิดชอบทั้งหมดสำหรับการละเมิดใดๆ"',
                    zh: '📝 责任豁免：“我会等，但我需要销售副总裁签署这份风险接受表，声明他们对任何违规行为承担全部责任。”'
                },
                consequence: {
                    en: '♟️ Checkmate! The VP reads the form, sees "Personal Accountability," gets scared, and says "Fine, patch it at lunch." You played the bureaucracy perfectly.',
                    th: '♟️ รุกฆาต! VP อ่านแบบฟอร์ม เห็น "ความรับผิดชอบส่วนบุคคล" กลัว และพูดว่า "ก็ได้ แพทช์ตอนเที่ยง" คุณเล่นเกมระเบียบราชการได้อย่างสมบูรณ์แบบ',
                    zh: '♟️ 将军！副总裁读了表格，看到“个人问责”，害怕了，说“好吧，午餐时修补。”你完美地运用了官僚主义。'
                },
                stats: { competence: 15, ethics: 15, leadership: 25, innovation: 10 }
            }
        ]
    },

    {
        id: 'cs_008',
        text: {
            en: '🕵️ The Insider Threat: You notice a departing engineer, who was passed over for promotion, downloading 50GB of sensitive code repositories to a personal USB drive at 2 AM. Their access is still valid until Friday.',
            th: '🕵️ ภัยคุกคามภายใน: คุณสังเกตเห็นวิศวกรที่กำลังจะลาออก ซึ่งพลาดการเลื่อนตำแหน่ง กำลังดาวน์โหลดโค้ด repository สำคัญ 50GB ลงใน USB ส่วนตัวตอนตี 2 สิทธิ์ของพวกเขายังใช้ได้จนถึงวันศุกร์',
            zh: '🕵️ 内部威胁：你注意到一位即将离职的工程师（曾错过晋升机会）在凌晨2点将50GB的敏感代码库下载到个人USB驱动器中。他们的访问权限在周五之前仍然有效。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔒 Immediate Lockout: "Disable their account immediately. Remotely lock the workstation. Call HR and Security to escort them out the next morning. Zero tolerance for data exfiltration."',
                    th: '🔒 ล็อกทันที: "ปิดบัญชีทันที ล็อกเครื่องจากระยะไกล โทรหา HR และฝ่ายความปลอดภัยเพื่อเชิญเขาออกในเช้าวันถัดไป ไม่มีการยอมรับสำหรับการขโมยข้อมูล"',
                    zh: '🔒 立即锁定：“立即禁用他们的帐户。远程锁定工作站。第二天早上致电人力资源部和安保人员将他们护送出去。对数据泄露零容忍。”'
                },
                consequence: {
                    en: '✅ Asset Protected! You stopped the leak. It turns out they were planning to take the code to a competitor. You receive a commendation for proactive monitoring.',
                    th: '✅ ทรัพย์สินได้รับการคุ้มครอง! คุณหยุดรอยรั่วได้ ปรากฏว่าพวกเขาวางแผนจะเอาโค้ดไปให้คู่แข่ง คุณได้รับคำชมเชยสำหรับการตรวจสอบเชิงรุก',
                    zh: '✅ 资产受保护！你堵住了漏洞。原来他们打算把代码带给竞争对手。你因主动监控而获得表彰。'
                },
                stats: { competence: 20, ethics: 15, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '📞 The "Casual" Call: "Call their desk phone right now. Ask \'Hey, working late? preventing a merge conflict?\'. Spook them into stopping."',
                    th: '📞 โทรหาแบบ "ชิลๆ": "โทรหาโต๊ะเขาตอนนี้เลย ถามว่า \'เห้ย ทำงานดึกหรอ? กัน merge conflict หรอ?\' ขู่ให้พวกเขาหยุด"',
                    zh: '📞 “随意”通话：“现在给他们办公桌打电话。问‘嘿，加班呢？防止合并冲突？’。吓唬他们让他们停下来。”'
                },
                consequence: {
                    en: '⚠️ Evidence Destroyed! They panic, unplug the drive, and format it. They claim they were "backing up personal files". You lost the proof of malicious intent, and HR is hesitant to fire without cause.',
                    th: '⚠️ หลักฐานถูกทำลาย! พวกเขาตื่นตระหนก ถอดไดรฟ์และฟอร์แมต อ้างว่า "สำรองข้อมูลส่วนตัว" คุณเสียหลักฐานเจตนาร้าย และ HR ลังเลที่จะไล่ออกโดยไม่มีสาเหตุ',
                    zh: '⚠️ 证据销毁！他们惊慌失措，拔掉驱动器并格式化。他们声称是在“备份个人文件”。你失去了恶意意图的证据，HR对此犹豫不决是否无故解雇。'
                },
                stats: { competence: 5, ethics: 0, leadership: -5, innovation: 5 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Silent Observation: "Let the transfer finish to gather full evidence of what was stolen. Then alert Legal to build a solid lawsuit."',
                    th: '🕵️ สังเกตการณ์เงียบๆ: "ปล่อยให้การถ่ายโอนเสร็จสิ้นเพื่อรวบรวมหลักฐานทั้งหมดว่าอะไรถูกขโมย แล้วแจ้งฝ่ายกฎหมายเพื่อสร้างคดีที่มั่นคง"',
                    zh: '🕵️ 沉默观察：“让传输完成以收集被盗物品的完整证据。然后通知法律部门建立坚实的诉讼。”'
                },
                consequence: {
                    en: '🛑 Too Risky! They leave the building with the drive before you can stop them. Now the data is in the wild. You prioritized the lawsuit over the data protection.',
                    th: '🛑 เสี่ยงเกินไป! พวกเขาออกจากตึกพร้อมไดรฟ์ก่อนที่คุณจะหยุดได้ ตอนนี้ข้อมูลหลุดไปข้างนอก คุณให้ความสำคัญกับคดีความมากกว่าการปกป้องข้อมูล',
                    zh: '🛑 太冒险了！在你阻止他们之前，他们带着驱动器离开了大楼。现在数据在外面了。你把诉讼置于数据保护之上。'
                },
                stats: { competence: -10, ethics: -5, leadership: -10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 DLP Policy Update: "We shouldn\'t rely on manual spotting. Update DLP policies to auto-block USB writes for all offboarding employees in the future."',
                    th: '🔄 อัปเดตนโยบาย DLP: "เราไม่ควรพึ่งพาการดูด้วยตา อัปเดตนโยบาย DLP เพื่อบล็อกการเขียน USB อัตโนมัติสำหรับพนักงานที่กำลังจะออกในอนาคต"',
                    zh: '🔄 DLP策略更新：“我们不应该依赖人工发现。更新DLP策略，以后自动阻止所有即将离职员工的USB写入。”'
                },
                consequence: {
                    en: '🐢 Too Late for Now! Good idea for next time, but you ignored the active robbery happening right in front of you. The data is gone.',
                    th: '🐢 ช้าไปสำหรับตอนนี้! ไอเดียดีสำหรับครั้งหน้า แต่คุณเพิกเฉยต่อการปล้นที่เกิดขึ้นต่อหน้าต่อตา ข้อมูลหายไปแล้ว',
                    zh: '🐢 现在太晚了！下次是个好主意，但你无视了眼前正在发生的抢劫。数据没了。'
                },
                stats: { competence: -5, ethics: 5, leadership: 5, innovation: 10 }
            }
        ]
    },

    {
        id: 'cs_009',
        text: {
            en: '🔗 The Vendor Loophole: A trusted third-party vendor requests a permanent "Site-to-Site VPN" to your data center to "monitor their appliance health" more easily. They currently used a scheduled WebEx.',
            th: '🔗 ช่องโหว่ผู้ขาย: ผู้ขายบุคคลที่สามที่เชื่อถือได้ขอ "Site-to-Site VPN" ถาวรไปยังศูนย์ข้อมูลของคุณเพื่อ "ตรวจสอบสุขภาพอุปกรณ์" ได้ง่ายขึ้น ปัจจุบันพวกเขาใช้ WebEx ตามกำหนดเวลา',
            zh: '🔗 供应商漏洞：一家受信任的第三方供应商请求建立到你数据中心的永久“站点到站点VPN”，以便更容易地“监控其设备运行状况”。他们目前使用的是定期的WebEx。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Deny & JIT: "Access denied. Permanent tunnels are attack vectors. Offer a Just-In-Time (JIT) account with MFA that is only enabled during active support tickets."',
                    th: '🛑 ปฏิเสธและ JIT: "ปฏิเสธการเข้าถึง ท่อถาวรคือช่องทางโจมตี เสนอบัญชี Just-In-Time (JIT) พร้อม MFA ที่เปิดใช้งานเฉพาะช่วงที่มีตั๋วสนับสนุนเท่านั้น"',
                    zh: '🛑 拒绝并JIT：“拒绝访问。永久隧道是攻击载体。提供一个仅在活动支持工单期间启用的带MFA的即时（JIT）帐户。”'
                },
                consequence: {
                    en: '✅ Zero Trust Win! The vendor complains about the "friction," but when they get ransomware next month, your network remains untouched. You secured the supply chain.',
                    th: '✅ ชัยชนะ Zero Trust! ผู้ขายบ่นเกี่ยวกับ "ความยุ่งยาก" แต่เมื่อพวกเขาโดนแรนซัมแวร์เดือนหน้า เครือข่ายของคุณยังปลอดภัย คุณรักษาความปลอดภัยห่วงโซ่อุปทาน',
                    zh: '✅ 零信任胜利！供应商抱怨“摩擦”，但当下个月他们遭遇勒索软件时，你的网络毫发无损。你确保了供应链的安全。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Grant w/ Restrictions: "Allow it, but firewall it strictly to ONLY their appliance IP on port 443. Nothing else."',
                    th: '🤝 อนุญาตแบบมีข้อจำกัด: "อนุญาต แต่ตั้งไฟร์วอลล์อย่างเคร่งครัดให้เฉพาะ IP อุปกรณ์ของพวกเขาที่พอร์ต 443 ไม่มีอะไรอื่น"',
                    zh: '🤝 限制性批准：“允许，但严格通过防火墙仅限制在其设备的IP和端口443上。没有别的。”'
                },
                consequence: {
                    en: '⚠️ Partial Protection: Better than open access, but if their admin PC is compromised, the attacker can still exploit vulnerabilities in the appliance to pivot into your network.',
                    th: '⚠️ การป้องกันบางส่วน: ดีกว่าเปิดหมด แต่ถ้า PC แอดมินพวกเขาถูกเจาะ ผู้โจมตียังใช้ช่องโหว่ในอุปกรณ์เพื่อข้ามมาเครือข่ายคุณได้',
                    zh: '⚠️ 部分保护：比完全开放要好，但如果他们的管理员PC受到攻击，攻击者仍然可以利用设备中的漏洞以此为跳板进入你的网络。'
                },
                stats: { competence: 10, ethics: 5, leadership: 5, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🔓 Approve for Efficiency: "Sure. We pay them for 99.9% uptime validation. Make it easy for them to do their job."',
                    th: '🔓 อนุมัติเพื่อประสิทธิภาพ: "ได้เลย เราจ่ายพวกเขาสำหรับความพร้อมใช้งาน 99.9% ทำให้งานพวกเขาง่ายเข้าไว้"',
                    zh: '🔓 为效率批准：“当然。我们付钱给他们是为了99.9%的正常运行时间验证。让他们轻松工作。”'
                },
                consequence: {
                    en: '💀 Supply Chain Attack! The vendor is breached (Target/Home Depot style). Attackers ride the VPN straight into your internal network, bypassing your perimeter firewalls completely.',
                    th: '💀 การโจมตีห่วงโซ่อุปทาน! ผู้ขายถูกเจาะ (สไตล์ Target/Home Depot) ผู้โจมตีขี่ VPN ตรงเข้าเครือข่ายภายในของคุณ เลี่ยงไฟร์วอลล์รอบนอกทั้งหมด',
                    zh: '💀 供应链攻击！供应商被攻破（Target/Home Depot风格）。攻击者通过VPN直接进入你的内部网络，完全绕过你的边界防火墙。'
                },
                stats: { competence: -15, ethics: -10, leadership: -15, innovation: -5 }
            }
        ]
    },

    {
        id: 'cs_010',
        text: {
            en: '☁️ The Leaky Bucket: You discover a public AWS S3 bucket named "prod-backups-2023" containing database dumps. It belongs to the DevOps team, who are asleep.',
            th: '☁️ ถังรั่ว: คุณพบ AWS S3 bucket สาธารณะชื่อ "prod-backups-2023" มีข้อมูลฐานข้อมูลสำรอง เป็นของทีม DevOps ที่กำลังหลับ',
            zh: '☁️ 泄漏的存储桶：你发现一个名为“prod-backups-2023”的公共AWS S3存储桶，其中包含数据库转储。它属于DevOps团队，他们正在睡觉。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔧 Emergency Fix: "Login to AWS immediately. Set the bucket to Private. Enable logging. Then rotate all database credentials found in the dumps. Wake up the CISO."',
                    th: '🔧 แก้ไขฉุกเฉิน: "ล็อกอิน AWS ทันที ตั้ง bucket เป็น Private เปิด logging แล้วหมุนเวียน credential ฐานข้อมูลทั้งหมดที่พบใน dump ปลุก CISO"',
                    zh: '🔧 紧急修复：“立即登录AWS。将存储桶设置为私有。启用日志记录。然后轮换转储中发现的所有数据库凭据。叫醒CISO。”'
                },
                consequence: {
                    en: '✅ Crisis Averted! You closed the door. Log analysis shows it was only accessed by Google crawlers (bad, but not disastrous). You prevented a massive breach.',
                    th: '✅ เลี่ยงวิกฤตได้! คุณปิดประตู การวิเคราะห์ log แสดงว่ามีแค่ Google crawler เข้าถึง (แย่ แต่ไม่หายนะ) คุณป้องกันการรั่วไหลครั้งใหญ่',
                    zh: '✅ 危机避免！你关上了门。日志分析显示只有Google爬虫访问过（很糟糕，但不是灾难性的）。你阻止了一次大规模违规。'
                },
                stats: { competence: 25, ethics: 15, leadership: 15, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '📧 Ticket It: "File a JIRA ticket marked \'High Priority\'. They will see it in the morning. Not my jurisdiction to touch infra."',
                    th: '📧 เปิดตั๋ว: "เปิดตั๋ว JIRA ทำเครื่องหมาย \'Priority High\' พวกเขาจะเห็นตอนเช้า ไม่ใช่เขตอำนาจฉันที่จะแตะโครงสร้างพื้นฐาน"',
                    zh: '📧 提交工单：“提交一张标记为‘高优先级’的JIRA工单。他们早上会看到的。触碰基础设施不是我的管辖范围。”'
                },
                consequence: {
                    en: '⏳ Too Slow! In the 6 hours you waited, a "bucket hunter" script found it. By morning, the data is on a hacker forum. Bureaucracy failed you.',
                    th: '⏳ ช้าไป! ใน 6 ชั่วโมงที่คุณรอ สคริปต์ "นักล่า bucket" เจอมัน ตอนเช้าข้อมูลอยู่บนฟอรัมแฮกเกอร์ ระบบราชการทำคุณล้มเหลว',
                    zh: '⏳ 太慢了！在你等待的6个小时里，一个“存储桶猎人”脚本发现了它。到了早上，数据已经在黑客论坛上了。官僚主义害了你。'
                },
                stats: { competence: -10, ethics: -10, leadership: -10, innovation: -5 }
            },
            {
                id: 'C',
                text: {
                    en: '💾 Download & Delete: "Download the data to your laptop for safe keeping, then delete the bucket content to stop the leak."',
                    th: '💾 ดาวน์โหลดและลบ: "ดาวน์โหลดข้อมูลลงแล็ปท็อปเพื่อเก็บรักษา แล้วลบเนื้อหาใน bucket เพื่อหยุดการรั่วไหล"',
                    zh: '💾 下载并删除：“将数据下载到你的笔记本电脑以妥善保管，然后删除存储桶内容以停止泄漏。”'
                },
                consequence: {
                    en: '🛑 Compliance Nightmare! You just moved PII to an unmanaged device (your laptop). You created a secondary breach. Plus, you might have broken the backups pipeline.',
                    th: '🛑 ฝันร้ายการปฏิบัติตามกฎ! คุณเพิ่งย้าย PII ไปยังอุปกรณ์ที่ไม่ได้จัดการ (แล็ปท็อปคุณ) คุณสร้างการรั่วไหลรอง แถมคุณอาจทำลายท่อส่ง backup',
                    zh: '🛑 合规噩梦！你刚把PII转移到了非托管设备（你的笔记本电脑）上。你制造了二次违规。此外，你可能破坏了备份管道。'
                },
                stats: { competence: -5, ethics: 5, leadership: -5, innovation: 0 }
            }
        ]
    },

    {
        id: 'cs_011',
        text: {
            en: '🐞 The Zero-Day Rumor: Twitter is exploding with rumors of a generic RCE vulnerability in your firewall brand. No official CVE or patch exists yet. Your boss asks "Are we safe?"',
            th: '🐞 ข่าวลือ Zero-Day: Twitter กำลังระเบิดด้วยข่าวลือช่องโหว่ RCE ทั่วไปในยี่ห้อไฟร์วอลล์ของคุณ ยังไม่มี CVE หรือแพทช์ทางการ เจ้านายถาม "เราปลอดภัยไหม?"',
            zh: '🐞 零日谣言：Twitter上关于你的防火墙品牌存在通用RCE漏洞的谣言满天飞。目前还没有官方的CVE或补丁。你的老板问“我们安全吗？”'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔒 Preemptive Lockdown: "Restrict management interfaces to internal LAN only. Enable strict geo-blocking. Monitor logs for anomalies. Tell boss: \'We are monitoring proactively.\'"',
                    th: '🔒 ล็อกดาวน์ล่วงหน้า: "จำกัดอินเทอร์เฟซการจัดการให้เฉพาะ LAN ภายใน เปิด geo-blocking ที่เข้มงวด ตรวจสอบ log หาความผิดปกติ บอกเจ้านาย: \'เรากำลังตรวจสอบเชิงรุก\'"',
                    zh: '🔒 先发制人的锁定：“将管理界面限制为仅内部LAN。启用严格的地理封锁。监控日志中的异常情况。告诉老板：‘我们正在主动监控。’”'
                },
                consequence: {
                    en: '✅ Prudent Defence! When the CVE drops 48 hours later, the mitigation (shutting down public admin ports) was exactly what you did. You stayed ahead of the curve.',
                    th: '✅ การป้องกันที่รอบคอบ! เมื่อ CVE ออกมา 48 ชั่วโมงต่อมา การบรรเทา (ปิดพอร์ตแอดมินสาธารณะ) คือสิ่งที่คุณทำเป๊ะ คุณนำหน้าสถานการณ์',
                    zh: '✅ 谨慎的防御！当CVE在48小时后发布时，缓解措施（关闭公共管理端口）正是你所做的。你走在了前面。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤷 Wait for Official Word: "Tell boss: \'It is just rumors. We wait for the vendor notification.\' Do nothing to avoid disrupting operations."',
                    th: '🤷 รอคำสั่งทางการ: "บอกเจ้านาย: \'แค่ข่าวลือ เรารอแจ้งเตือนจากผู้ขาย\' ไม่ทำอะไรเพื่อเลี่ยงการรบกวนการทำงาน"',
                    zh: '🤷 等待官方消息：“告诉老板：‘这只是谣言。我们等待供应商通知。’不做任何事情以避免中断运营。”'
                },
                consequence: {
                    en: '🔥 Burned by Inaction! The rumor was real. Hackers exploited the 0-day before the patch was ready. Your firewalls are now botnets. Reactive security is dead security.',
                    th: '🔥 ไหม้เพราะไม่ทำอะไร! ข่าวลือเป็นจริง แฮกเกอร์ใช้ 0-day ก่อนแพทช์พร้อม ไฟร์วอลล์คุณกลายเป็น botnet ความปลอดภัยแบบตั้งรับคือความปลอดภัยที่ตายแล้ว',
                    zh: '🔥 因不作为而引火烧身！谣言是真的。黑客在补丁准备好之前利用了0-day。你的防火墙现在变成了僵尸网络。被动安全就是死路一条。'
                },
                stats: { competence: -15, ethics: -5, leadership: -10, innovation: -5 }
            }
        ]
    },

    {
        id: 'cs_012',
        text: {
            en: '👁️ Biometrics vs. Passwords: The CEO wants to replace all passwords with FaceID because "usernames are outdated." He wants your sign-off.',
            th: '👁️ ไบโอเมตริกซ์ vs รหัสผ่าน: CEO ต้องการแทนที่รหัสผ่านทั้งหมดด้วย FaceID เพราะ "ชื่อผู้ใช้ล้าสมัย" เขาต้องการลายเซ็นคุณ',
            zh: '👁️ 生物识别与密码：CEO想用FaceID替换所有密码，因为“用户名已经过时了”。他需要你的签字。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📖 Educate: "FaceID is a username (Identification), not a password (Authentication). If your face data is stolen, you can\'t change your face. We need MFA: Face + Pin."',
                    th: '📖 ให้ความรู้: "FaceID คือชื่อผู้ใช้ (ระบุตัวตน) ไม่ใช่รหัสผ่าน (ยืนยันตัวตน) ถ้าข้อมูลหน้าถูกขโมย คุณเปลี่ยนหน้าไม่ได้ เราต้องการ MFA: หน้า + พิน"',
                    zh: '📖 教育：“FaceID是用户名（识别），而不是密码（验证）。如果你的面部数据被盗，你无法改变你的脸。我们需要MFA：人脸 + PIN。”'
                },
                consequence: {
                    en: '✅ Policy Saved! The CEO learns something new. You implement "Passwordless" technically using FIDO2 (Biometric + Device Key), which is actual security. Good architectural save.',
                    th: '✅ นโยบายรอด! CEO ได้เรียนรู้สิ่งใหม่ คุณใช้ "Passwordless" ทางเทคนิคด้วย FIDO2 (Biometric + Device Key) ซึ่งเป็นความปลอดภัยจริง การช่วยเชิงสถาปัตยกรรมที่ดี',
                    zh: '✅ 政策获救！CEO学到了新东西。你在技术上使用FIDO2（生物识别 + 设备密钥）实施“无密码”，这是真正的安全。很好的架构挽救。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '👍 Yes Man: "Sign off instantly. It is modern and cool. Let\'s do it."',
                    th: '👍 ครับผม: "เซ็นชื่อทันที มันทันสมัยและเท่ มาทำกันเถอะ"',
                    zh: '👍 是唯唯诺诺的人：“立即签字。它既现代又酷。我们就这么做吧。”'
                },
                consequence: {
                    en: '⚠️ Security Reduced! Without a fallback or second factor, a deepfake video or a high-res photo now unlocks company devices. You traded security for coolness.',
                    th: '⚠️ ความปลอดภัยลดลง! ไม่มีแผนสำรองหรือปัจจัยที่สอง วิดีโอ deepfake หรือรูปความละเอียดสูงปลดล็อกอุปกรณ์บริษัทได้แล้ว คุณแลกความปลอดภัยกับความเท่',
                    zh: '⚠️ 安全性降低！没有备用或第二因素，现在的deepfake视频或高分辨率照片就能解锁公司设备。你用安全换取了酷炫。'
                },
                stats: { competence: -10, ethics: -5, leadership: -5, innovation: 5 }
            }
        ]
    },

    {
        id: 'cs_013',
        text: {
            en: '💉 The SQL Injection: A pentest report reveals a Blind SQL Injection in the legacy billing portal. It\'s hard to exploit but technically possible to dump the DB.',
            th: '💉 SQL Injection: รายงาน pentest เผย Blind SQL Injection ในพอร์ทัลการเรียกเก็บเงินรุ่นเก่า เจาะยากแต่ทางเทคนิคเป็นไปได้ที่จะ dump DB',
            zh: '💉 SQL注入：渗透测试报告显示旧计费门户中存在盲SQL注入。很难利用，但在技术上可以转储数据库。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Code Red: "Critical Vulnerability. Take the portal offline for maintenance. Developers must rewrite the query using Prepared Statements/Parameterization immediately."',
                    th: '🚨 รหัสแดง: "ช่องโหว่ร้ายแรง เอาพอร์ทัลออฟไลน์เพื่อบำรุงรักษา นักพัฒนาต้องเขียน query ใหม่โดยใช้ Prepared Statements/Parameterization ทันที"',
                    zh: '🚨 红色代码：“严重漏洞。让门户下线维护。开发人员必须立即使用预处理语句/参数化重写查询。”'
                },
                consequence: {
                    en: '✅ Root Cause Fixed! It causes 1 day of downtime, but the vulnerability is eliminated forever. Prepared statements are the only real cure for SQLi.',
                    th: '✅ แก้สาเหตุรากเหง้า! ทำให้หยุดงาน 1 วัน แต่ช่องโหว่ถูกกำจัดตลอดไป Prepared statements คือยาแก้ SQLi ที่แท้จริงเพียงอย่างเดียว',
                    zh: '✅ 根本原因已修复！它导致了1天的停机时间，但漏洞被永远消除了。预处理语句是SQLi的唯一真正治愈方法。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 5 }
            },
            {
                id: 'B',
                text: {
                    en: '🩹 WAF Band-Aid: "Write a WAF rule to block suspicious characters like \';\' and \'drop\'. Keep the system running."',
                    th: '🩹 พลาสเตอร์ WAF: "เขียนกฎ WAF เพื่อบล็อกตัวอักษรน่าสงสัยเช่น \';\' และ \'drop\' ให้ระบบทำงานต่อไป"',
                    zh: '🩹 WAF创可贴：“编写WAF规则来阻止像‘;’和‘drop’这样的可疑字符。让系统保持运行。”'
                },
                consequence: {
                    en: '⚠️ Bypass! Attackers simply encode their payloads (URL encoding, hex) to bypass your keyword filters. The vulnerability remains. You just obscured it.',
                    th: '⚠️ บายพาส! ผู้โจมตีแค่เข้ารหัส payload (URL encoding, hex) เพื่อเลี่ยงตัวกรองคำของคุณ ช่องโหว่ยังอยู่ คุณแค่บังมันไว้',
                    zh: '⚠️ 绕过！攻击者只需对他们的有效载荷进行编码（URL编码，十六进制）即可绕过你的关键字过滤器。漏洞仍然存在。你只是把它掩盖了。'
                },
                stats: { competence: -5, ethics: 0, leadership: 0, innovation: 5 }
            }
        ]
    },

    {
        id: 'cs_014',
        text: {
            en: '📋 The Missing Audit: An external auditor asks for "evidence of manual quarterly access reviews" for the last year. You realize no one did them.',
            th: '📋 การตรวจสอบที่หายไป: ผู้ตรวจสอบภายนอกขอ "หลักฐานการทบทวนการเข้าถึงด้วยมือรายไตรมาส" สำหรับปีที่ผ่านมา คุณตระหนักว่าไม่มีใครทำ',
            zh: '📋 缺失的审计：外部审计师要求提供去年的“季度手动访问审查证据”。你意识到没人做过。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📝 Own It: "Admit the control failure. \'We missed this control. Here is a corrective action plan to perform a retroactive review this week and automate it moving forward.\'"',
                    th: '📝 ยอมรับมัน: "ยอมรับความล้มเหลวในการควบคุม \'เราพลาดการควบคุมนี้ นี่คือแผนแก้ไขเพื่อทบทวนย้อนหลังในสัปดาห์นี้และทำให้อัตโนมัติต่อไป\'"',
                    zh: '📝 承担责任：“承认控制失败。‘我们错过了这个控制。这是纠正措施计划，本周进行追溯审查，并在此后将其自动化。’”'
                },
                consequence: {
                    en: '✅ Trusted Partner! The auditor marks it as a "Finding" (Minor), but praises your transparency. You maintain the certification. Lying leads to "Major Non-Conformity".',
                    th: '✅ พันธมิตรที่เชื่อถือได้! ผู้ตรวจสอบทำเครื่องหมายว่าเป็น "ข้อค้นพบ" (เล็กน้อย) แต่ชื่นชมความโปร่งใสของคุณ คุณรักษาใบรับรอง การโกหกนำไปสู่ "ความไม่สอดคล้องหลัก"',
                    zh: '✅ 值得信赖的合作伙伴！审计师将其标记为“发现”（次要），但称赞你的透明度。你保留了认证。撒谎会导致“严重不符合”。'
                },
                stats: { competence: 15, ethics: 25, leadership: 15, innovation: 5 }
            },
            {
                id: 'B',
                text: {
                    en: '🤥 Fabricate Evidence: "Quickly export user lists, random checkmarks, and backdate the PDFs. They will never know."',
                    th: '🤥 ปลอมหลักฐาน: "รีบส่งออกรายชื่อผู้ใช้ ติ๊กถูกมั่วๆ และย้อนวันที่ PDF พวกเขาไม่มีทางรู้"',
                    zh: '🤥 伪造证据：“快速导出用户列表，随机打勾，并倒填PDF日期。他们永远不会知道。”'
                },
                consequence: {
                    en: '⛔ Fraud! The auditor checks file metadata and sees "Created: Today". You fail the audit instantly and might face legal action for fraud.',
                    th: '⛔ ฉ้อโกง! ผู้ตรวจสอบเช็ค metadata ไฟล์และเห็น "สร้างเมื่อ: วันนี้" คุณตกการตรวจสอบทันทีและอาจโดนคดีฉ้อโกง',
                    zh: '⛔ 欺诈！审计师检查文件元数据，看到“创建时间：今天”。你立即未能通过审计，并可能面临欺诈法律诉讼。'
                },
                stats: { competence: -20, ethics: -30, leadership: -20, innovation: -10 }
            }
        ]
    },

    {
        id: 'cs_015',
        text: {
            en: '🔓 The Public API Key: A GitHub scanner bot alerts you that a developer accidentally committed AWS API keys to a public repository 6 hours ago. The keys have full S3 and EC2 permissions.',
            th: '🔓 API Key สาธารณะ: บอทสแกน GitHub แจ้งเตือนว่านักพัฒนาคนหนึ่งเผลอคอมมิต AWS API keys ลง repository สาธารณะเมื่อ 6 ชั่วโมงก่อน คีย์นี้มีสิทธิ์เต็มใน S3 และ EC2',
            zh: '🔓 公开的API密钥：GitHub扫描机器人提醒你，一名开发人员6小时前不小心将AWS API密钥提交到了公共存储库。这些密钥拥有完整的S3和EC2权限。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Emergency Rotation: \"Immediately revoke the keys in AWS IAM. Check CloudTrail logs for unauthorized usage. Rotate all credentials. Scrub the Git history using BFG Repo-Cleaner.\"',
                    th: '🚨 หมุนเวียนฉุกเฉิน: \"เพิกถอนคีย์ใน AWS IAM ทันที เช็ค CloudTrail logs หาการใช้งานที่ไม่ได้รับอนุญาต หมุนเวียน credential ทั้งหมด ลบประวัติ Git ด้วย BFG Repo-Cleaner\"',
                    zh: '🚨 紧急轮换："立即在AWS IAM中撤销密钥。检查CloudTrail日志以查找未经授权的使用。轮换所有凭据。使用BFG Repo-Cleaner清理Git历史记录。"'
                },
                consequence: {
                    en: '✅ Breach Contained! CloudTrail shows 3 crypto-mining instances were spun up. You caught it early. Total damage: $47 in compute costs. You saved the company from a $50k+ bill.',
                    th: '✅ ควบคุมการรั่วไหลได้! CloudTrail แสดงว่ามี 3 instance ขุดคริปโตถูกสร้างขึ้น คุณจับได้เร็ว ความเสียหายรวม: $47 ค่าคอมพิวต์ คุณช่วยบริษัทจากบิล $50k+',
                    zh: '✅ 违规已控制！CloudTrail显示启动了3个加密挖矿实例。你及早发现了。总损失：47美元的计算成本。你为公司节省了超过5万美元的账单。'
                },
                stats: { competence: 30, ethics: 20, leadership: 25, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '🗑️ Delete the Repo: \"Just delete the entire public repository. Out of sight, out of mind. The keys are gone now.\"',
                    th: '🗑️ ลบ Repo: \"แค่ลบ repository สาธารณะทั้งหมด ไม่เห็นไม่นึก คีย์หายไปแล้ว\"',
                    zh: '🗑️ 删除存储库："直接删除整个公共存储库。眼不见心不烦。密钥现在没了。"'
                },
                consequence: {
                    en: '💀 Too Late! Deleting the repo doesn\'t revoke the keys. Bots already scraped them. Your AWS bill next month: $127,000 in unauthorized compute. The keys are still active.',
                    th: '💀 สายเกินไป! การลบ repo ไม่ได้เพิกถอนคีย์ บอทดูดไปแล้ว บิล AWS เดือนหน้า: $127,000 จากการใช้งานที่ไม่ได้รับอนุญาต คีย์ยังใช้งานได้อยู่',
                    zh: '💀 太晚了！删除存储库并不会撤销密钥。机器人已经抓取了它们。你下个月的AWS账单：未经授权的计算费用12.7万美元。密钥仍然有效。'
                },
                stats: { competence: -30, ethics: -10, leadership: -25, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📧 Email the Dev: \"Send the developer an email asking them to remove the keys from the commit. Wait for their response before taking action.\"',
                    th: '📧 อีเมลนักพัฒนา: \"ส่งอีเมลถามนักพัฒนาให้ลบคีย์ออกจาก commit รอคำตอบก่อนดำเนินการ\"',
                    zh: '📧 给开发人员发邮件："给开发人员发送电子邮件，要求他们从提交中删除密钥。在采取行动之前等待他们的回复。"'
                },
                consequence: {
                    en: '⚠️ Slow Response! By the time the dev wakes up and responds (8 hours later), attackers have already exfiltrated 200GB of S3 data. You prioritized politeness over urgency.',
                    th: '⚠️ ตอบสนองช้า! เมื่อนักพัฒนาตื่นและตอบกลับ (8 ชั่วโมงต่อมา) ผู้โจมตีขโมยข้อมูล S3 ไป 200GB แล้ว คุณให้ความสำคัญกับความสุภาพมากกว่าความเร่งด่วน',
                    zh: '⚠️ 响应缓慢！等到开发人员醒来并回复（8小时后），攻击者已经窃取了200GB的S3数据。你把礼貌置于紧急性之上。'
                },
                stats: { competence: -15, ethics: 10, leadership: -10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🛡️ Restrict Permissions: \"Don\'t revoke yet. Use AWS IAM to immediately restrict the keys to read-only access. Monitor what the attacker tries to do, then revoke.\"',
                    th: '🛡️ จำกัดสิทธิ์: \"อย่าเพิกถอนเลย ใช้ AWS IAM จำกัดคีย์ให้เป็นแค่อ่านอย่างเดียวทันที ดูว่าผู้โจมตีพยายามทำอะไร แล้วค่อยเพิกถอน\"',
                    zh: '🛡️ 限制权限："先不要撤销。使用AWS IAM立即将密钥限制为只读访问权限。监控攻击者试图做什么，然后再撤销。"'
                },
                consequence: {
                    en: '🎯 Honeypot Success! You observe the attacker\'s tactics and gather threat intelligence. You identify their IP range and report it to AWS. Creative defense, but risky.',
                    th: '🎯 กับดักสำเร็จ! คุณสังเกตยุทธวิธีของผู้โจมตีและรวบรวมข้อมูลภัยคุกคาม คุณระบุช่วง IP และรายงานไปยัง AWS การป้องกันสร้างสรรค์แต่เสี่ยง',
                    zh: '🎯 蜜罐成功！你观察了攻击者的策略并收集了威胁情报。你识别了他们的IP范围并向AWS报告。创造性的防御，但有风险。'
                },
                stats: { competence: 20, ethics: 15, leadership: 15, innovation: 35 }
            }
        ]
    },

    {
        id: 'cs_016',
        text: {
            en: '🎭 The Deepfake CFO: You receive a video call from the CFO requesting an urgent $500k transfer for an "off-the-record" project. The voice and face match perfectly, but the background looks slightly blurred, and they are unusually aggressive.',
            th: '🎭 CFO ตัวปลอม: คุณได้รับวิดีโอคอลจาก CFO ขอให้โอนเงินด่วน $500k สำหรับ "โปรเจกต์ลับ" เสียงและหน้าตาตรงเป๊ะ แต่ฉากหลังดูเบลอๆ และเขามีท่าทีดุดันผิดปกติ',
            zh: '🎭 深度伪造的CFO：你接到了CFO的视频通话，要求为一项“不记名”项目紧急转账50万美元。声音和面部完美匹配，但背景看起来略显模糊，且他们的态度异常激进。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤫 Secret Challenge: "Ask a pre-arranged \'Safe Word\' or a personal question like \'What was the name of the restaurant we met at last Tuesday?\' (Even if you didn\'t meet)."',
                    th: '🤫 คำถามลับ: "ถาม \'Safe Word\'ที่ตกลงกันไว้ หรือถามคำถามส่วนตัวเช่น \'เราไปกินข้าวร้านชื่ออะไรเมื่อวันอังคารที่แล้วนะ?\' (แม้คุณจะไม่ได้ไปก็ตาม)"',
                    zh: '🤫 秘密挑战：“询问预先约定的‘安全词’，或者问一个私人问题，比如‘我们上周二在哪个餐厅见的面？’（即使你们没见过面）。”'
                },
                consequence: {
                    en: '✅ Deepfake Exposed! The "CFO" stutters and hangs up. You just saved $500k and identified a sophisticated AI-driven attack. You are the office hero.',
                    th: '✅ เปิดโปง Deepfake! "CFO" อึกอักแล้วกดวางสาย คุณเพิ่งช่วยเงิน $500k และระบุการโจมตีด้วย AI ที่ซับซ้อน คุณคือฮีโร่ของบริษัท',
                    zh: '✅ 深度伪造揭晓！“CFO”支支吾吾后挂断了电话。你刚刚挽回了50万美元的损失，并识别出了一次复杂的AI驱动攻击。你是公司的英雄。'
                },
                stats: { competence: 25, ethics: 15, leadership: 15, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '💸 Trust the Boss: "It is the CFO. I saw them. The pressure is on. Process the transfer immediately to avoid getting fired."',
                    th: '💸 เชื่อใจบอส: "นั่นคือ CFO จริงๆ ฉันเห็นเขา งานเร่งมาก โอนเงินทันทีเพื่อจะได้ไม่โดนไล่ออก"',
                    zh: '💸 信任老板：“那是CFO。我看到他了。压力很大。立即处理转账，以免被辞职。”'
                },
                consequence: {
                    en: '💀 Financial Disaster! The money is gone to a money launderer in Southeast Asia. You fell for a deepfake. You are fired immediately.',
                    th: '💀 หายนะทางการเงิน! เงินถูกโอนไปยังบัญชีฟอกเงินในเอเชียตะวันออกเฉียงใต้ คุณตกหลุมพราง Deepfake คุณถูกไล่ออกทันที',
                    zh: '💀 财务灾难！钱被转到了东南亚的一个洗钱团伙。你陷入了深度伪造的圈套。你立即被撤职。'
                },
                stats: { competence: -30, ethics: -10, leadership: -20, innovation: -5 }
            }
        ]
    },

    {
        id: 'cs_017',
        text: {
            en: '📦 The Malicious Library: A developer wants to use a popular open-source JavaScript library "FastUtils" for a new projekt. Your automated scanner tags it with a high-severity supply chain vulnerability (CVE-2024-XXXX). The dev says it\'s a false positive.',
            th: '📦 ไลบรารีอันตราย: นักพัฒนาต้องการใช้ไลบรารีโอเพนซอร์สยอดนิยม "FastUtils" สำหรับโปรเจกต์ใหม่ สแกนเนอร์ของคุณแจ้งเตือนช่องโหว่ supply chain ร้ายแรง (CVE-2024-XXXX) แต่นักพัฒนาบอกว่ามันแจ้งเตือนผิด',
            zh: '📦 恶意库：一位开发人员想在项目中引入一个流行的开源JavaScript库“FastUtils”。你的自动化扫描器标记它存在高危供应链漏洞（CVE-2024-XXXX）。开发人员称这是误报。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔍 Deep Dive: "Don\'t take their word for it. Manually audit the library\'s source code on GitHub. Check the maintainers and the recent commits for any signs of account takeover."',
                    th: '🔍 ตรวจสอบเชิงลึก: "อย่าเพิ่งเชื่อคำพูดเขา ตรวจสอบซอร์สโค้ดของไลบรารีบน GitHub ด้วยตัวเอง ตรวจดูผู้ดูแลและการ commit ล่าสุดว่ามีสัญญาณการโดนแฮกบัญชีหรือไม่"',
                    zh: '🔍 深入调查：“不要听信他们的一面之词。手动审计GitHub上该库的内容。检查维护者和最近的提交记录，了解是否有任何账户被接管的迹象。”'
                },
                consequence: {
                    en: '✅ Supply Chain Defended! You find a hidden obfuscated backdoor added by a compromised maintainer. You prevent a SolarWinds-style breach. The CISO is impressed by your diligence.',
                    th: '✅ ปกป้อง Supply Chain! คุณพบ backdoor ที่ซ่อนอยู่ซึ่งเติมโดยผู้ดูแลที่โดนแฮก คุณป้องกันการรั่วไหลแบบ SolarWinds ได้ CISO ประทับใจในความละเอียดของคุณ',
                    zh: '✅ 供应链保卫成功！你发现了一个由受损维护者添加的隐藏后门。你阻止了SolarWinds式的入侵。CISO对你的勤奋印象深刻。'
                },
                stats: { competence: 25, ethics: 15, leadership: 15, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🟢 Whitelist: "The dev is a senior and under a deadline. If they say it\'s fine, whitelist it for this project only."',
                    th: '🟢 อนุญาตพิเศษ: "นักพัฒนาเป็นคนอาวุโสและงานเร่ง ถ้าเขาบอกว่าโอเค ก็อนุญาตให้ใช้เฉพาะโปรเจกต์นี้พอ"',
                    zh: '🟢 白名单：“那个开发人员是资深人士，且有期限限制。如果他们说没问题，就仅针对该项目将其加入白名单。”'
                },
                consequence: {
                    en: '💀 Infiltration! The library was indeed malicious. It exfiltrates environment variables (secrets) to an external server. You just opened the gates to the kingdom.',
                    th: '💀 การแทรกซึม! ไลบรารีนั้นอันตรายจริงๆ มันแอบส่งค่า environment variables (ความลับ) ไปยังเซิร์ฟเวอร์ภายนอก คุณเพิ่งเปิดประตูเมืองให้ข้าศึก',
                    zh: '💀 渗透！该库确实是恶意的。它将环境变量（秘密）窃取回外部服务器。你刚刚亲手打开了王国的城门。'
                },
                stats: { competence: -20, ethics: -10, leadership: -15, innovation: 0 }
            }
        ]
    },

    {
        id: 'cs_018',
        text: {
            en: '🗄️ The Forgotten Dev Server: You find a server running in a testing subnet that hasn\'t been patched in 3 years. It\'s running the office coffee machine software, but it\'s connected to the main corporate VLAN.',
            th: '🗄️ เซิร์ฟเวอร์ที่ถูกลืม: คุณพบเซิร์ฟเวอร์ใน subnet สำหรับทดสอบที่ไม่ได้อัปเดตแพทช์มา 3 ปีแล้ว มันรันซอฟต์แวร์เครื่องชงกาแฟในออฟฟิศ แต่ดันทดสอบเชื่อมต่อกับ VLAN หลักของบริษัท',
            zh: '🗄️ 被遗忘的开发服务器：你在一台测试子网中发现了一个三年未打补丁的服务器。它运行着办公室咖啡机的软件，但却连接到了公司的主VLAN。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Network Segmentation: "Shut it down immediately. If it must exist, move it to an isolated IoT VLAN with zero access to the corporate network."',
                    th: '🚫 แยกเครือข่าย: "สั่งปิดทันที ถ้าจำเป็นต้องมี ให้ย้ายไปยัง IoT VLAN ที่แยกเป็นสัดส่วนและไม่ให้เข้าถึงเครือข่ายบริษัทได้เลย"',
                    zh: '🚫 网络分段：“立即关掉它。如果必须存在，将其移至隔离的IoT VLAN，禁止访问公司网络。”'
                },
                consequence: {
                    en: '✅ Security Hardened! You eliminated a major shadow IT risk. You write a new policy for IoT device onboarding.',
                    th: '✅ ความปลอดภัยแข็งแกร่ง! คุณกำจัดความเสี่ยง Shadow IT ที่สำคัญได้ คุณเขียนนโยบายใหม่สำหรับการนำอุปกรณ์ IoT เข้ามาใช้ในออฟฟิศ',
                    zh: '✅ 安全加固！你消除了一个主要的影子IT风险。你为IoT设备的准入编写了新策略。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '☕ Ignore: "It\'s just a coffee machine. No one is going to hack a latte maker. Plus, the interns love the remote brewing feature."',
                    th: '☕ เมินเลย: "ก็นั่นมันแค่เครื่องชงกาแฟ ไม่มีใครมาแฮกเครื่องทำลาเต้หรอก แถมพวกเด็กฝึกงานยังชอบฟีเจอร์สั่งชงทางไกลด้วย"',
                    zh: '☕ 忽视：“那只是一台咖啡机。没人会去黑掉拿铁机。此外，实习生们喜欢远程煮咖啡的功能。”'
                },
                consequence: {
                    en: '💀 Pivot Point! An attacker gains access via a known exploit in the coffee software and uses the server as a jump box to steal data from the Finance VLAN. Your "latte" cost millions in damages.',
                    th: '💀 จุดยุทธศาสตร์! ผู้โจมตีเข้าถึงผ่านช่องโหว่ที่รู้จักในซอฟต์แวร์กาแฟ และใช้เซิร์ฟเวอร์นั้นเป็นทางผ่านไปขโมยข้อมูลจาก Finance VLAN ลาเต้ของคุณทำเสียหายหลักล้าน',
                    zh: '💀 跳板！攻击者通过咖啡机软件中的已知漏洞获得访问权限，并将该服务器用作跳转点，从财务VLAN窃取数据。你的“拿铁”造成了数百万美元的损失。'
                },
                stats: { competence: -20, ethics: -5, leadership: -10, innovation: 5 }
            }
        ]
    },

    {
        id: 'cs_019',
        text: {
            en: '🕵️ The Secret Whistleblower: You find evidence that your manager is bypassing security controls to give a preferred vendor (his friend) access to production data. Reporting it might end your career if the CISO doesn\'t back you.',
            th: '🕵️ นักสืบลับ: คุณพบหลักฐานว่าผู้จัดการของคุณกำลังข้ามขั้นตอนความปลอดภัยเพื่อให้ผู้ขายที่เขาชอบ (ซึ่งเป็นเพื่อนเขา) เข้าถึงข้อมูลโปรดักชันได้ การรายงานเรื่องนี้อาจจบอาชีพของคุณได้ถ้า CISO ไม่หนุนหลังคุณ',
            zh: '🕵️ 秘密举报人：你发现有证据表明你的经理正在绕过安全控制，向一家首选供应商（他的朋友）提供生产数据的访问权限。如果不被CISO支持，举报这事可能会终结你的职业生涯。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Ethical Reporting: "Document everything meticulously. Use the anonymous whistleblower hotline if available, or go directly to the Legal/Ethics department."',
                    th: '⚖️ รายงานตามจริยธรรม: "บันทึกทุกอย่างอย่างละเอียด ใช้ฮอตไลน์ผู้แจ้งเบาะแสลับถ้ามี หรือไปที่แผนกกฎหมาย/จริยธรรมโดยตรง"',
                    zh: '⚖️ 道德报告：“细致地记录一切。如果可以，利用匿名举报渠道，或者直接去法律/道德部门。”'
                },
                consequence: {
                    en: '✅ Moral Courage! An investigation confirms your findings. The manager is fired, and you are promoted to a leadership role for your integrity.',
                    th: '✅ กล้าหาญทางจริยธรรม! การสอบสวนยืนยันสิ่งที่คุณพบ ผู้จัดการคนนั้นถูกไล่ออก และคุณได้รับการเลื่อนตำแหน่งขึ้นเป็นผู้นำเพราะความซื่อสัตย์',
                    zh: '✅ 道德勇气！调查证实了你的发现。经理被解职，你因正直被提升为领导职务。'
                },
                stats: { competence: 15, ethics: 30, leadership: 25, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Stay Quiet: \"I need this job. I\'ll just look the other way. It\'s not worth the risk.\"',
                    th: '🤐 เงียบไว้: \"ฉันต้องการงานนี้ ฉันจะทำเป็นไม่รู้ไม่เห็นดีกว่า ไม่คุ้มเสี่ยง\"',
                    zh: '🤐 保持沉默："我需要这份工作。我就当没看见。这不值得冒险。"'
                },
                consequence: {
                    en: '💀 Complicity! The vendor eventually leaks the data. During the forensics, your knowledge of the breach is discovered. You are fired for negligence and failure to report.',
                    th: '💀 ผู้สมรู้ร่วมคิด! ในที่สุดผู้ขายคนนั้นก็ทำข้อมูลรั่วไหล ระหว่างการตรวจสอบนิติวิทยาศาสตร์ ความจริงถูกเปิดเผยว่าคุณรู้เรื่องแต่ไม่บอก คุณถูกไล่ออกฐานประมาทเลินเล่อ',
                    zh: '💀 共犯！该供应商最终泄露了数据。在取证过程中，你对该行为的知情被发现了。你因疏忽和知情不报被开除。'
                },
                stats: { competence: -10, ethics: -25, leadership: -20, innovation: 0 }
            }
        ]
    },

    {
        id: 'cs_020',
        text: {
            en: '🕵️ The Physical Social Engineer: A person in a high-vis vest and a clipboard walks past security, claiming they are there to "inspect the fire extinguishers." They are heading toward the server room.',
            th: '🕵️ นักสังคมสงคราะห์ทางกายภาพ: คนในชุดสะท้อนแสงถือคลิปบอร์ดเดินผ่านความปลอดภัยเข้ามา อ้างว่ามา "ตรวจเครื่องดับเพลิง" และกำลังมุ่งหน้าไปที่ห้องเซิร์ฟเวอร์',
            zh: '🕵️ 物理社会工程：一个穿着高可见度背心、拿着剪贴板的人绕过安保，声称他们是来“检查灭火器”的。他们正朝着服务器房走去。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Challenge & Verify: "Stop them. Ask for their ID and verify the appointment with the Facilities manager. Do not let them proceed without an escort."',
                    th: '🛡️ ท้าทายและตรวจสอบ: "หยุดเขาไว้ ขอดูบัตรประจำตัวและยืนยันการนัดหมายกับผู้จัดการอาคาร อย่าปล่อยให้เขาไปต่อโดยไม่มีคนคุม"',
                    zh: '🛡️ 质疑并核实：“拦住他们。要求出示证件，并向设施经理核实预约情况。在没有陪同的情况下，不允许他们继续前进。”'
                },
                consequence: {
                    en: '✅ Intrusion Prevented! It turns out to be a "Red Team" physical pentest. You passed! The security team uses this as a training example of good vigilance.',
                    th: '✅ ป้องกันการบุกรุก! ปรากฏว่าเป็นทีม "Red Team" มาทดสอบทางกายภาพ คุณผ่านการทดสอบ! ทีมรักษาความปลอดภัยใช้เรื่องนี้เป็นตัวอย่างที่ดีในการเฝ้าระวัง',
                    zh: '✅ 阻止入侵！结果证明这是一次“红队”物理渗透测试。你通过了！安全团队将其作为警惕性强的培训案例。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '👍 Assume Legitimacy: "They look official. Plus, who would fake being a fire extinguisher guy? Safety is important."',
                    th: '👍 เชื่อว่าจริง: "ดูเป็นทางการดีนะ แถมใครจะมาแกล้งเป็นช่างตรวจถังดับเพลิงล่ะ? ความปลอดภัยเป็นเรื่องสำคัญ"',
                    zh: '👍 假定其合法性：“他们看起来很正式。再说，谁会假装成检查灭火器的人？安全至关重要。”'
                },
                consequence: {
                    en: '💀 Physical Breach! While you weren\'t looking, they planted a "Rubber Ducky" USB injector into a server. They now have persistent remote access. You failed physical security 101.',
                    th: '💀 การบุกรุกทางกายภาพ! ช่วงที่คุณเผลอ เขาเสียบ USB "Rubber Ducky" เข้ากับเซิร์ฟเวอร์ ตอนนี้เขามีสิทธิ์เข้าถึงระยะไกลแบบถาวรแล้ว คุณสอบตกวิชาความปลอดภัยพื้นฐาน',
                    zh: '💀 物理入侵！在你没注意的时候，他们在服务器上插入了一个“橡皮鸭”USB注入器。他们现在拥有持久的远程访问权限。你没过物理安全101。'
                },
                stats: { competence: -20, ethics: 0, leadership: -10, innovation: 0 }
            }
        ]
    },

    {
        id: 'cs_021',
        text: {
            en: '💼 The BYOD Battle: The marketing team wants to use their personal iPads and MacBooks for work to be "more creative." They find the corporate-managed devices "too restrictive."',
            th: '💼 ศึก BYOD: ทีมการตลาดต้องการใช้ iPad และ MacBook ส่วนตัวทำงานเพื่อให้ "มีความคิดสร้างสรรค์มากขึ้น" พวกเขามองว่าอุปกรณ์ที่บริษัทจัดการนั้น "จำกัดเกินไป"',
            zh: '💼 BYOD之战：营销团队想用个人iPad和MacBook办公，以便“更有创意”。他们觉得公司统管的设备“限制太多”。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ MDM Enforcement: "Enforce a strict Mobile Device Management (MDM) policy. If they want to use personal devices, they must enroll them in Intune/Jamf with full encryption and remote wipe capabilities."',
                    th: '🛡️ บังคับใช้ MDM: "บังคับใช้นโยบาย MDM ที่เข้มงวด ถ้าจะใช้อุปกรณ์ส่วนตัวต้องลงทะเบียนใน Intune/Jamf พร้อมเข้ารหัสเต็มรูปแบบและสั่งลบข้อมูลระยะไกลได้"',
                    zh: '🛡️ 强制MDM：“强制执行严格的移动设备管理（MDM）策略。如果他们想使用个人设备，必须将其注册到Intune/Jamf中，并具有全盘加密和远程擦除功能。”'
                },
                consequence: {
                    en: '✅ Managed Flexibility! Marketing gets their fancy tools, but the data is secured. You implement containerization to separate work and personal data. A balanced win.',
                    th: '✅ ความยืดหยุ่นที่จัดการได้! ทีมการตลาดได้ใช้เครื่องมือสวยๆ แต่ข้อมูลยังปลอดภัย คุณใช้ระบบ container เพื่อแยกข้อมูลงานและส่วนตัวออกจากกัน ชนะทั้งสองฝ่าย',
                    zh: '✅ 托管灵活性！营销人员得到了他们的时髦工具，同时数据也得到了安全保障。你实现了容器化，将工作和个人数据分开。一个平衡的胜利。'
                },
                stats: { competence: 20, ethics: 10, leadership: 20, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Hard No: "Corporate data stays on corporate devices. No exceptions. Security is not a creative choice."',
                    th: '🛑 ไม่อนุญาตเด็ดขาด: "ข้อมูลบริษัทต้องอยู่ในอุปกรณ์ของบริษัทเท่านั้น ไม่มีข้อยกเว้น ความปลอดภัยไม่ใช่เรื่องของความคิดสร้างสรรค์"',
                    zh: '🛑 坚决拒绝：“公司数据保存在公司设备上。没有例外。安全不是创意选择。”'
                },
                consequence: {
                    en: '📉 Shadow IT! Marketing uses the devices anyway but hides it. They use personal iCloud and Dropbox to move data. You created a massive unmanaged risk because you were too rigid.',
                    th: '📉 Shadow IT เกิดขึ้น! ทีมการตลาดก็ใช้อยู่ดีแต่แอบใช้ เขาใช้ iCloud และ Dropbox ส่วนตัวย้ายข้อมูล คุณสร้างความเสี่ยงที่สุ่มเสี่ยงมากเพียงเพราะคุณตึงเกินไป',
                    zh: '📉 影子IT！营销人员还是用了那些设备，但藏了起来。他们使用个人的iCloud和Dropbox搬运数据。由于你过于死板，创造出了一个巨大的不受管风险。'
                },
                stats: { competence: 10, ethics: -5, leadership: -20, innovation: -10 }
            }
        ]
    },

    {
        id: 'cs_022',
        text: {
            en: '🕵️ The Suspicious Commits: Your automated code review tool flags a series of commits in the core encryption library that look like deliberate "math errors" that weaken the entropy of generated keys.',
            th: '🕵️ การ Commit ที่น่าสงสัย: เครื่องมือตรวจโค้ดอัตโนมัติแจ้งเตือนการ commit ในไลบรารีการเข้ารหัสหลัก ซึ่งดูเหมือน "ข้อผิดพลาดทางคณิตศาสตร์" ที่จงใจใส่มาเพื่อทำให้ความซับซ้อนของรหัสที่สร้างขึ้นอ่อนแอลง',
            zh: '🕵️ 可疑提交：你的自动化代码审查工具标记了核心加密库中的一系列提交，看起来像是故意的“数学错误”，旨在削弱生成密钥的熵。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔬 Peer Review & Audit: "Stop the release. Gather the best cryptographers in the company to audit these commits. Discreetly investigate the developer responsible."',
                    th: '🔬 ตรวจทานและตรวจสอบ: "หยุดการปล่อยเวอร์ชัน รวบรวมนักถอดรหัสที่เก่งที่สุดในบริษัทมาตรวจสอบการ commit นี้ และแอบสืบสวนพนักงานที่รับผิดชอบ"',
                    zh: '🔬 同行评审与审计：“停止发布。召集公司最优秀的密码学专家审计这些提交。秘密调查负责该代码的开发人员。”'
                },
                consequence: {
                    en: '✅ Disaster Averted! You found an intentional backdoor planted by a developer being blackmailed by a foreign intelligence service. You saved the company\'s reputation.',
                    th: '✅ เลี่ยงหายนะได้! คุณพบ backdoor ที่จงใจใส่ไว้โดยพนักงานที่ถูกหน่วยข่าวกรองต่างชาติขู่กรรโชก คุณช่วยชื่อเสียงของบริษัทไว้ได้',
                    zh: '✅ 避免灾难！你发现了一个由受外国情报机构勒索的开发人员植入的故意后门。你挽救了公司的声誉。'
                },
                stats: { competence: 25, ethics: 20, leadership: 15, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🩹 Auto-Fix: "Just revert the commits and tell the dev to be more careful with their math next time. It\'s probably just a mistake."',
                    th: '🩹 แก้ไขอัตโนมัติ: "แค่ถอยการ commit นั้นกลับ แล้วบอกให้พนักงานระวังเรื่องเลขรอบหน้าหน่อย น่าจะเป็นแค่ความผิดพลาดแหละ"',
                    zh: '🩹 自动修复：“撤回这些提交，并告诉开发人员下次数学算准点。这可能只是个失误。”'
                },
                consequence: {
                    en: '⚠️ Lingering Threat! The developer tries again later with a more subtle bug. You missed the opportunity to catch a malicious insider.',
                    th: '⚠️ ภัยที่ยังหลงเหลือ! พนักงานคนเดิมพยายามอีกครั้งด้วยบั๊กที่แนบเนียนกว่าเดิม คุณพลาดโอกาสที่จะจับคนร้ายภายในเครื่อง',
                    zh: '⚠️ 潜伏威胁！那个开发人员稍后又尝试了一个更微妙的Bug。你错失了抓住恶意内部人员的机会。'
                },
                stats: { competence: 0, ethics: -10, leadership: -10, innovation: 0 }
            }
        ]
    },

    {
        id: 'cs_023',
        text: {
            en: '🔐 The Password Policy Pivot: The CEO is tired of changing passwords every 90 days. He heard that NIST now recommends longer, unique passwords instead of frequent changes.',
            th: '🔐 นโยบายรหัสผ่านใหม่: CEO เบื่อที่จะต้องเปลี่ยนรหัสผ่านทุก 90 วัน เขาได้ยินมาว่า NIST แนะนำให้ใช้รหัสผ่านที่ยาวและไม่ซ้ำแทนที่จะเปลี่ยนบ่อยๆ',
            zh: '🔐 密码策略转变：CEO不想每90天换一次密码了。他听说NIST现在建议使用更长、唯一的密码，而不是频繁更换。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📘 Modernize: "Update the policy. No more forced rotations unless a breach is suspected. Minimum 16 characters, plus mandatory MFA. It\'s more secure and users will love you."',
                    th: '📘 อัปเดตให้ทันสมัย: "ปรับนโยบายใหม่ ไม่มีการบังคับเปลี่ยนรหัสผ่านเว้นแต่จะสงสัยว่าโดนแฮก กำหนดขั้นต่ำ 16 ตัวอักษรพร้อมบังคับ MFA มันปลอดภัยกว่าและผู้ใช้จะรักคุณ"',
                    zh: '📘 现代化：“更新策略。除非怀疑泄露，否则不再强制更换。至少16位字符，外加强制MFA。这更安全，用户也会感激你。”'
                },
                consequence: {
                    en: '✅ Security & UX Win! Passwords become stronger (passphrases), helpdesk tickets for locked accounts drop by 70%, and security increases due to actual complexity.',
                    th: '✅ ชนะทั้งความปลอดภัยและ UX! รหัสผ่านแข็งแกร่งขึ้น (passphrases) ตั๋วแจ้งขอปลดล็อกบัญชีลดลง 70% และความปลอดภัยเพิ่มขึ้นจากความซับซ้อนที่แท้จริง',
                    zh: '✅ 安全与UX双赢！密码变得更强（口令短语），因账户锁定而提交的报修单减少了70%，且安全性因实际复杂性而提高。'
                },
                stats: { competence: 20, ethics: 10, leadership: 20, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Stick to Tradition: "Forced rotation is what we\'ve always done. It\'s safer. Tell the CEO hygiene is more important than comfort."',
                    th: '🛑 ยึดติดประเพณี: "การบังคับเปลี่ยนคือสิ่งที่เราทำมาตลอด มันปลอดภัยกว่า บอก CEO ไปว่าความสะอาดสำคัญกว่าความสบาย"',
                    zh: '🛑 墨守成规：“强制轮换是我们的一贯做法。这更安全。告诉CEO，规范比舒适更重要。”'
                },
                consequence: {
                    en: '📉 Predictable Weakness! Users just change "Summer2023!" to "Autumn2023!". Attackers know this pattern. You have the worst of both worlds: friction and low security.',
                    th: '📉 จุดอ่อนที่เดาได้! ผู้ใช้แค่เปลี่ยนจาก "Summer2023!" เป็น "Autumn2023!" แฮกเกอร์รู้ทันแพทเทิร์นนี้ คุณได้สิ่งที่แย่ที่สุดทั้งสองอย่างคือความยุ่งยากและความปลอดภัยต่ำ',
                    zh: '📉 可预测的弱点！用户只是把“Summer2023!”改成“Autumn2023!”。攻击者知道这类模式。你得到了最差的结果：既麻烦又不安全。'
                },
                stats: { competence: -10, ethics: 0, leadership: -5, innovation: -10 }
            }
        ]
    },

    {
        id: 'cs_024',
        text: {
            en: '🚨 The Ransomware Note (Draft): You find a text file on the CISO\'s laptop desktop named "RANSOM_NEGOTIATION.txt" suggesting the company is secretly negotiating with a group that hit a subsidiary last month. The board was never notified.',
            th: '🚨 ร่างจดหมายเรียกค่าไถ่: คุณพบไฟล์ข้อความบนเดสก์ท็อปแล็ปท็อปของ CISO ชื่อ "RANSOM_NEGOTIATION.txt" ซึ่งแสดงว่าบริษัทกำลังแอบเจรจากับกลุ่มที่โจมตีบริษัทลูกเมื่อเดือนก่อน โดยที่บอร์ดบริหารไม่เคยรู้เรื่อง',
            zh: '🚨 勒索软件草案：你在CISO笔记本电脑的桌面上发现了一个名为“RANSOM_NEGOTIATION.txt”的文本文件，暗示公司正在秘密与上个月攻击其子公司的一伙人谈判。董事会从未接到通知。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Escalate Internally: "This is a major governance failure. Talk to the General Counsel or the Head of Internal Audit. Hiding breaches from the board is often illegal (SEC rules)."',
                    th: '⚖️ แจ้งระดับบน: "นี่คือความล้มเหลวครั้งใหญ่ในการบริหาร ไปคุยกับที่ปรึกษากฎหมายหรือหัวหน้าฝ่ายตรวจสอบภายใน การซ่อนเรื่องแฮกจากบอร์ดบริหารมักจะผิดกฎหมาย"',
                    zh: '⚖️ 内部上报：“这是重大的治理失败。向法律总顾问或内部审计主管报告。瞒报董事会通常是非法的（违反SEC规则）。”'
                },
                consequence: {
                    en: '✅ Governance Restored! The CISO is removed for unethical behavior. You are lauded for your integrity and for protecting the company from massive legal fines.',
                    th: '✅ การบริหารจัดการกลับมาถูกต้อง! CISO ถูกปลดฐานทำผิดจริยธรรม คุณได้รับคำชมจากความซื่อสัตย์และปกป้องบริษัทจากค่าปรับมหาศาล',
                    zh: '✅ 治理恢复！CISO因不道德行为被撤职。你因正直和保护公司免受巨额法律罚款而受到称赞。'
                },
                stats: { competence: 15, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Mind Your Business: "The CISO knows what he\'s doing. Maybe it\'s a clever trap for the hackers. Don\'t get involved in executive politics."',
                    th: '🤫 อย่าแส่หาเรื่อง: "CISO เขารู้ว่าเขากำลังทำอะไร บางทีอาจเป็นกับดักล่อแฮกเกอร์ก็ได้ อย่าไปยุ่งเรื่องการเมืองระดับบริหารเลย"',
                    zh: '🤫 少管闲事：“CISO知道他在做什么。也许这是个针对黑客的巧妙陷阱。别卷入高层政治。”'
                },
                consequence: {
                    en: '💀 Shipwreck! The hackers leak the negotiation logs anyway. The board discovers the cover-up. Because your access logs show you opened the file, you are fired as an accomplice to the cover-up.',
                    th: '💀 เรือล่ม! แฮกเกอร์ปล่อยบันทึกการเจาะอยู่ดี บอร์ดบริหารรู้เรื่องการซ่อนเร้น และเพราะประวัติการเข้าไฟล์โชว์ว่าคุณเปิดดู คุณจึงถูกไล่ออกในฐานะผู้สมรู้ร่วมคิด',
                    zh: '💀 翻船！黑客还是泄露了谈判日志。董事会发现了瞒报。由于你的访问日志显示你打开过该文件，你作为瞒报的从犯被解雇了。'
                },
                stats: { competence: -20, ethics: -20, leadership: -20, innovation: 0 }
            }
        ]
    },

    {
        id: 'cs_025',
        text: {
            en: '🕵️ The Suspicious API Usage: A partner company is calling your customer data API 100x more than their contract allows. They aren\'t stealing everything at once, but they are "scraping" slowly.',
            th: '🕵️ การใช้ API ที่น่าสงสัย: บริษัทพาร์ทเนอร์เรียกใช้ API ข้อมูลลูกค้าของคุณมากกว่าที่ระบุในสัญญา 100 เท่า เขาไม่ได้ขโมยทีเดียวหมด แต่ค่อยๆ "ขูด" ข้อมูลไปทีละนิด',
            zh: '🕵️ 可疑的API使用：一家合作伙伴公司调用你的客户数据API的次数超过了合同允许的100倍。他们没有一次性偷走所有东西，但正在缓慢地“爬取”。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Rate Limit & Revoke: "Immediately enforce hard rate limits. Contact the partner\'s technical lead to demand an explanation. Suspend access if they don\'t comply."',
                    th: '🛑 จำกัดความเร็วและเพิกถอน: "บังคับใช้การจำกัดความเร็ว (Rate Limit) ทันที ติดต่อเทคนิคลีดของพาร์ทเนอร์เพื่อขอคำอธิบาย ถ้าไม่ทำตามก็ระงับการเข้าถึง"',
                    zh: '🛑 限流与撤销：“立即实施严格的限流。联系合作伙伴的技术负责人要求解释。如果不配合，则暂停其访问权限。”'
                },
                consequence: {
                    en: '✅ Intellectual Property Secured! It turns out a junior dev at the partner company wrote a buggy recursive loop. You saved the data and enforced contract compliance.',
                    th: '✅ ปกป้องทรัพย์สินทางปัญญา! ปรากฏว่านักพัฒนารุ่นน้องของบริษัทพาร์ทเนอร์เขียนลูปวนซ้ำผิดพลาด คุณช่วยข้อมูลไว้ได้และบังคับให้ทำตามสัญญา',
                    zh: '✅ 知识产权获保！原来是合作伙伴公司的一名初级开发写了一个有Bug的递归循环。你保护了数据并强制执行了合同合规。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💸 Upsell Opportunity: "Don\'t block them. Tell Sales to send them a huge bill for the extra usage. Data is a commodity."',
                    th: '💸 โอกาสขายเพิ่ม: "อย่าไปบล็อกเขา บอกฝ่ายขายให้ส่งบิลเรียกเก็บเงินก้อนโตสำหรับส่วนที่เกิน ข้อมูลคือสินค้า"',
                    zh: '💸 追加销售机会：“别拦着。告诉销售部给他们寄一张巨额账单。数据就是商品。”'
                },
                consequence: {
                    en: '⚠️ Data Leak! The partner was actually compromised, and an attacker was using their keys to scrape your DB. You traded privacy for a invoice that will never be paid.',
                    th: '⚠️ ข้อมูลรั่วไหล! จริงๆ แล้วพาร์ทเนอร์โดนแฮก และแฮกเกอร์ใช้คีย์ของเขาขูดข้อมูลคุณ คุณแลกความเป็นส่วนตัวกับบิลที่ไม่มีวันได้รับชำระ',
                    zh: '⚠️ 数据泄密！该合作伙伴其实已经被攻破了，攻击者正在利用他们的密钥爬取你的数据库。你用隐私换取了一张永远不会被支付的账单。'
                },
                stats: { competence: 0, ethics: -20, leadership: -10, innovation: 10 }
            }
        ]
    },
    {
        id: 'cs_026',
        text: {
            en: '🤖 The AI Leak: You notice the Marketing team is pasting full confidential board meeting minutes into a public LLM (like ChatGPT) to "summarize them for the intranet." This data is now potentially training the public model.',
            th: '🤖 การรั่วไหลของ AI: คุณสังเกตเห็นทีมการตลาดกำลังวางบันทึกการประชุมบอร์ดที่ลับที่สุดลงใน LLM สาธารณะ (เช่น ChatGPT) เพื่อ "สรุปสำหรับอินทราเน็ต" ข้อมูลนี้อาจกำลังถูกใช้ฝึกโมเดลสาธารณะ',
            zh: '🤖 AI泄露：你注意到营销团队正在将完整的机密董事会会议纪要粘贴到公共LLM（如ChatGPT）中，以“为内网进行总结”。这些数据现在可能正在训练公共模型。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Enterprise Sandbox: "Block public AI access immediately. Purchase an Enterprise license with \'Zero Retention\' policy. Train them to use the secure version."', th: '🛡️ พื้นที่ปลอดภัยสำหรับองค์กร: "บล็อกการเข้าถึง AI สาธารณะทันที ซื้อใบอนุญาต Enterprise ที่มีนโยบาย \'ไม่เก็บข้อมูล\' ฝึกอบรมให้พวกเขาใช้เวอร์ชันที่ปลอดภัย"', zh: '🛡️ 企业沙箱：“立即阻止公共AI访问。购买具有‘零保留’策略的企业许可证。培训他们使用安全版本。”' }, consequence: { en: '✅ Innovation Secured! You enabled productivity while protecting IP. The board appreciates the summary and the security. +25 Innovation.', th: '✅ นวัตกรรมที่ปลอดภัย! คุณเปิดใช้งานผลผลิตในขณะที่ปกป้องทรัพย์สินทางปัญญา บอร์ดชื่นชมทั้งสรุปและความปลอดภัย +25 นวัตกรรม', zh: '✅ 创新得到保障！你在保护知识产权的同时实现了生产力。董事会赞赏总结和安全性。+25 创新。' }, stats: { competence: 20, ethics: 10, leadership: 15, innovation: 25 } },
            { id: 'B', text: { en: '🛑 Total Ban: "AI is too risky. Block all AI domains (OpenAI, Anthropic, etc.) at the firewall level. Back to manual writing."', th: '🛑 แบนทั้งหมด: "AI เสี่ยงเกินไป บล็อกโดเมน AI ทั้งหมด (OpenAI, Anthropic ฯลฯ) ที่ระดับไฟร์วอลล์ กลับไปเขียนด้วยมือ"', zh: '🛑 全面禁止：“AI风险太大。在防火墙级别封锁所有AI域名（OpenAI, Anthropic等）。回到手动写作。”' }, consequence: { en: '📉 Competitive Disadvantage! Employees riot. Marketing speed drops by 50%. People start using AI on their personal phones via 5G, creating a worse Shadow AI problem.', th: '📉 เสียบเปรียบทางการแข่งขัน! พนักงานก่อจลาจล ความเร็วการตลาดลดลง 50% คนเริ่มใช้ AI บนมือถือส่วนตัวผ่าน 5G สร้างปัญหา Shadow AI ที่แย่กว่าเดิม', zh: '📉 竞争劣势！员工抗议。营销速度下降50%。人们开始通过5G在个人手机上使用AI，造成了更糟糕的影子AI问题。' }, stats: { competence: 0, ethics: 0, leadership: -20, innovation: -30 } },
            { id: 'C', text: { en: '📝 Policy Email: "Send an email reminding them that \'Confidential data should not be shared.\' Trust them to follow the rules."', th: '📝 อีเมลนโยบาย: "ส่งอีเมลเตือนว่า \'ข้อมูลลับไม่ควรถูกแชร์\' เชื่อใจว่าพวกเขาจะทำตามกฎ"', zh: '📝 政策邮件：“发送电子邮件提醒他们‘不得共享机密数据’。相信他们会遵守规则。”' }, consequence: { en: '⚠️ Ineffective! No one reads the email. The board minutes leak online 3 months later. "Policy without enforcement is just a wish." -10 Competence.', th: '⚠️ ไร้ผล! ไม่มีใครอ่านอีเมล บันทึกการประชุมหลุดออนไลน์ 3 เดือนต่อมา "นโยบายที่ไม่มีการบังคับใช้ก็แค่ความปรารถนา" -10 ความสามารถ', zh: '⚠️ 无效！没人读那封邮件。3个月后董事会纪要在线泄露。“没有执行的政策只是愿望。”-10 能力。' }, stats: { competence: -10, ethics: 0, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '👺 Data Poisoning: "Feed the AI fake data to confuse it. Paste contradictory info to dilute the leak."', th: '👺 การวางยาพิษข้อมูล: "ป้อนข้อมูลปลอมให้ AI สับสน วางข้อมูลที่ขัดแย้งกันเพื่อเจือจางการรั่วไหล"', zh: '👺 数据投毒：“向AI提供虚假数据以混淆视听。粘贴矛盾信息以稀释泄露。”' }, consequence: { en: '🤡 Professional Clown! This achieves nothing and you wasted time. The original data is still there. You look ridiculous.', th: '🤡 ตัวตลกมืออาชีพ! นี่ไม่ได้ช่วยอะไรและคุณเสียเวลา ข้อมูลเดิมยังคงอยู่ คุณดูน่าขัน', zh: '🤡 职业小丑！这毫无用处，还浪费了时间。原始数据还在那里。你看起来很可笑。' }, stats: { competence: -20, ethics: -20, leadership: -20, innovation: -10 } }
        ]
    },

    {
        id: 'cs_027',
        text: {
            en: '☁️ The Wild West Cloud: A developer complains that permissions are too hard. They changed an S3 bucket policy to "Principal: *" and "Action: *" to "just get the code working." It works, but the bucket contains customer passports.',
            th: '☁️ คลาวด์แดนเถื่อน: นักพัฒนาร้องเรียนว่าสิทธิ์ใช้งานยากเกินไป เขาเปลี่ยน S3 bucket policy เป็น "Principal: *" และ "Action: *" เพื่อ "ให้โค้ดทำงานได้ก็พอ" มันทำงานได้ แต่ bucket มีพาสปอร์ตลูกค้า',
            zh: '☁️ 狂野西部云：开发人员抱怨权限太难搞。为了“让代码能跑”，他们把S3存储桶策略改成了“Principal: *”和“Action: *”。能跑是能跑，但存储桶里有客户护照。'
        },
        options: [
            { id: 'A', text: { en: '🤖 Automated Remediation: "Implement a Cloud Custodian bot that auto-reverts public buckets to private immediately and alerts the manager. Code Infrastructure as Code (IaC) properly."', th: '🤖 การแก้ไขอัตโนมัติ: "ใช้บอท Cloud Custodian ที่เปลี่ยน bucket สาธารณะกลับเป็นส่วนตัวทันทีและแจ้งเตือนผู้จัดการ เขียน Infrastructure as Code (IaC) ให้ถูกต้อง"', zh: '🤖 自动补救：“实施Cloud Custodian机器人，立即将公共存储桶自动恢复为私有并提醒经理。正确编写基础设施即代码（IaC）。”' }, consequence: { en: '✅ Guardrails Deployed! The bucket is secured in seconds. The dev learns to use correct roles. You build a "self-healing" cloud environment. +30 Competence.', th: '✅ ราวกั้นถูกติดตั้ง! bucket ปลอดภัยในไม่กี่วินาที นักพัฒนาเรียนรู้ที่จะใช้ role ที่ถูกต้อง คุณสร้างสภาพแวดล้อมคลาวด์ที่ "รักษาตัวเองได้" +30 ความสามารถ', zh: '✅ 护栏已部署！存储桶在几秒钟内变得安全。开发人员学会了使用正确的角色。你建立了一个“自愈”的云环境。+30 能力。' }, stats: { competence: 30, ethics: 10, leadership: 15, innovation: 25 } },
            { id: 'B', text: { en: '👨‍🏫 Manual Review: "Revert the change yourself. Schedule a 1-hour meetings with the dev to explain IAM policies line-by-line."', th: '👨‍🏫 ตรวจสอบด้วยมือ: "แก้คืนด้วยตัวคุณเอง นัดประชุม 1 ชั่วโมงกับนักพัฒนาเพื่ออธิบาย IAM policy ทีละบรรทัด"', zh: '👨‍🏫 手动审查：“自己撤销更改。安排与开发人员开1小时的会，以此逐行解释IAM策略。”' }, consequence: { en: '⚠️ Unscalable! You fixed this one, but 10 other devs are doing the same thing. You become the bottleneck and burnout. -5 Innovation.', th: '⚠️ ขยายผลไม่ได้! คุณแก้ได้ครั้งนี้ แต่อีก 10 คนก็ทำเหมือนเดิม คุณกลายเป็คอขวดและหมดไฟ -5 นวัตกรรม', zh: '⚠️ 无法扩展！你修复了这一个，但其他10个开发人员也在做同样的事。你成了瓶颈并筋疲力尽。-5 创新。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: -5 } },
            { id: 'C', text: { en: '🔓 Allow Temporarily: "Let it stay open for the weekend demo, but make them promise to fix it Monday."', th: '🔓 อนุญาตชั่วคราว: "ปล่อยเปิดไว้สำหรับการเดโมสุดสัปดาห์ แต่ให้พวกเขาสัญญาว่าจะแก้ในวันจันทร์"', zh: '🔓 暂时允许：“为了周末的演示先开着，但让他们承诺周一修复。”' }, consequence: { en: '💀 Data Breach! Bots scan all public buckets constantly. The passports are stolen 15 minutes later. You are liable for GDPR fines.', th: '💀 ข้อมูลรั่วไหล! บอทสแกน bucket สาธารณะตลอดเวลา พาสปอร์ตถูกขโมยใน 15 นาทีต่อมา คุณต้องรับผิดชอบค่าปรับ GDPR', zh: '💀 数据泄露！机器人不断扫描所有公共存储桶。护照在15分钟后被盗。你需要承担GDPR罚款责任。' }, stats: { competence: -25, ethics: -20, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🏗️ Build a Platform: "Create pre-approved Terraform modules with embedded security. Tell devs: \'Use these blocks, don\'t write your own IAM.\'"', th: '🏗️ สร้างแพลตฟอร์ม: "สร้างโมดูล Terraform ที่ผ่านการอนุมัติและมีความปลอดภัยในตัว บอกนักพัฒนา: \'ใช้บล็อกพวกนี้ อย่าเขียน IAM เอง\'"', zh: '🏗️以此构建平台：“创建具有嵌入式安全性的预批准Terraform模块。告诉开发人员：‘用这些模块，别自己写IAM。’”' }, consequence: { en: '🚀 Scalable Security! Devs find it easier to use your secure modules than to hack their own. Security becomes the path of least resistance. +30 Leadership.', th: '🚀 ความปลอดภัยที่ขยายผลได้! นักพัฒนาพบว่าใช้ง่ายกว่าที่จะแฮกเอง ความปลอดภัยกลายเป็นทางที่ง่ายที่สุด +30 ผู้นำ', zh: '🚀 可扩展的安全性！开发人员发现使用你的安全模块比自己瞎搞更容易。安全性成为了阻力最小的路径。+30 领导力。' }, stats: { competence: 25, ethics: 10, leadership: 30, innovation: 20 } }
        ]
    },

    {
        id: 'cs_028',
        text: {
            en: '🔗 The Broken Link: An old marketing campaign subdomain "promo2020.company.com" is pointing to an Azure Traffic Manager profile that has been deleted. The DNS record still exists.',
            th: '🔗 ลิงก์ที่เสีย: ซับโดเมนแคมเปญการตลาดเก่า "promo2020.company.com" ชี้ไปยังโปรไฟล์ Azure Traffic Manager ที่ถูกลบไปแล้ว แต่ DNS record ยังอยู่',
            zh: '🔗 断链：一个旧的营销活动子域名“promo2020.company.com”指向一个已被删除的Azure流量管理器配置文件。DNS记录仍然存在。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Claim it (Subdomain Takeover): "Immediately register that Azure resource yourself to control the traffic. Then safely delete the DNS record. Beat the hackers to it."', th: '🛡️ ยึดครอง (Subdomain Takeover): "รีบลงทะเบียนทรัพยากร Azure นั้นด้วยตัวเองเพื่อควบคุมทราฟฟิก แล้วค่อยลบ DNS record อย่างปลอดภัย ชิงทำก่อนแฮกเกอร์"', zh: '🛡️ 认领（子域名接管）：“立即自己注册该Azure资源以控制流量。然后安全删除DNS记录。抢在黑客之前。”' }, consequence: { en: '✅ Defensive Win! You see malicious traffic hitting it effectively immediately. You successfully prevented a phishing campaign hosted on your own domain.', th: '✅ ชนะแบบป้องกัน! คุณเห็นทราฟฟิกอันตรายเข้ามาทันที คุณป้องกันแคมเปญฟิชชิ่งที่โฮสต์บนโดเมนตัวเองได้สำเร็จ', zh: '✅ 防御性胜利！你看到恶意流量几乎立即袭来。你成功阻止了一场托管在你自有域名上的网络钓鱼活动。' }, stats: { competence: 25, ethics: 15, leadership: 10, innovation: 15 } },
            { id: 'B', text: { en: '🗑️ Just Delete: "Submit a ticket to the Networking team to delete the CNAME record. Priority: Low."', th: '🗑️ ลบมันซะ: "ส่งตั๋วให้ทีมเครือข่ายลบ CNAME record ความสำคัญ: ต่ำ"', zh: '🗑️ 直接删除：“向网络团队提交工单以删除CNAME记录。优先级：低。”' }, consequence: { en: '⏳ Race Condition! In the 2 days it took to process the ticket, a bug hunter claimed the domain and hosted a "Proof of Concept". Embarrassing but not fatal.', th: '⏳ แข่งกับเวลา! ใน 2 วันที่รอดำเนินการ นักล่าบั๊กยึดโดเมนและโฮสต์ "Proof of Concept" น่าอายแต่ไม่ถึงตาย', zh: '⏳ 竞态条件！在处理工单的2天里，一个漏洞猎人认领了该域名并托管了一个“概念验证”。尴尬但不致命。' }, stats: { competence: 0, ethics: 10, leadership: -5, innovation: 0 } },
            { id: 'C', text: { en: '👀 Monitoring: "Leave it. I want to see if anyone checks old links. Use it as a honeypot."', th: '👀 เฝ้าดู: "ปล่อยไว้ ฉันอยากรู้ว่ามีใครเข้าลิงก์เก่าไหม ใช้เป็น Honeypot"', zh: '👀 监控：“留着它。我想看看是否有人检查旧链接。把它当作蜜罐。”' }, consequence: { en: '💀 Dangerous Game! A malicious actor creates a fake login page on YOUR domain. Cookies are scoped to *.company.com. They steal valid session tokens from staff.', th: '💀 เกมอันตราย! ผู้ไม่หวังดีสร้างหน้าล็อกอินปลอมบนโดเมนของคุณ คุกกี้มีขอบเขต *.company.com พวกเขาขโมย session tokens จากพนักงาน', zh: '💀 危险游戏！恶意行为者在你的域名上创建了一个虚假登录页面。Cookies的作用域是*.company.com。他们从员工那里窃取了有效的会话令牌。' }, stats: { competence: -20, ethics: -10, leadership: -15, innovation: 0 } },
            { id: 'D', text: { en: '📣 Blame Game: "Email Marketing screaming at them for poor hygiene. Tell them to clean up their own mess."', th: '📣 เกมโทษกัน: "ส่งอีเมลด่าฝ่ายการตลาดเรื่องความไม่เรียบร้อย บอกให้พวกเขาเก็บกวาดขยะตัวเอง"', zh: '📣以此推卸责任：“发邮件对营销部门大吼大叫，指责他们卫生差。让他们自己收拾烂摊子。”' }, consequence: { en: '❌ Toxic Culture! Marketing hides future campaigns from you. You gain an enemy and the vulnerability triggers later anyway. -15 Leadership.', th: '❌ วัฒนธรรมเป็นพิษ! การตลาดจะซ่อนแคมเปญในอนาคตจากคุณ คุณได้ศัตรูและช่องโหว่ก็ยังเกิดอยู่ดี -15 ผู้นำ', zh: '❌ 有毒文化！营销部门向你隐瞒未来的活动。你树立了敌人，而漏洞反正稍后也会触发。-15 领导力。' }, stats: { competence: 0, ethics: 0, leadership: -15, innovation: -5 } }
        ]
    },

    {
        id: 'cs_029',
        text: {
            en: '📶 The Evil Twin: You detect a WiFi signal named "Company_Guest_Fast" broadcasting from the lobby with strong signal. Your official network is "Company_Guest". Employees are connecting to the "Fast" one.',
            th: '📶 แฝดปีศาจ: คุณตรวจพบสัญญาณ WiFi ชื่อ "Company_Guest_Fast" ปล่อยมาจากล็อบบี้ด้วยสัญญาณแรง เครือข่ายทางการคือ "Company_Guest" พนักงานกำลังเชื่อมต่ออัน "Fast"',
            zh: '📶 邪恶双子：你检测到一个名为“Company_Guest_Fast”的WiFi信号从大厅发出，信号很强。你的官方网络是“Company_Guest”。员工们正在连接那个“Fast”网络。'
        },
        options: [
            { id: 'A', text: { en: '📡 WIPS Containment: "Use the Wireless Intrusion Prevention System to send de-auth packets to the rogue AP. Neutralize the threat remotely."', th: '📡 การควบคุมด้วย WIPS: "ใช้ระบบป้องกันการบุกรุกไร้สายส่งแพ็กเก็ต de-auth ไปยัง AP ปลอม กำจัดภัยคุกคามจากระยะไกล"', zh: '📡 WIPS遏制：“使用无线入侵防御系统向流氓AP发送解除认证数据包。远程消除威胁。”' }, consequence: { en: '⚠️ Legal Grey Area! You successfully jammed the device, but it turns out it was a coffee shop next door. You technically jammed public spectrum. FCC is not happy.', th: '⚠️ พื้นที่สีเทาทางกฎหมาย! คุณรบกวนอุปกรณ์สำเร็จ แต่กลายเป็นว่าเป็นของร้านกาแฟข้างๆ ทางเทคนิคคุณรบกวนคลื่นสาธารณะ FCC ไม่ปลื้ม', zh: '⚠️ 法律灰色地带！你成功干扰了该设备，但结果发现它是隔壁咖啡店的。你在技术上干扰了公共频谱。FCC很不高兴。' }, stats: { competence: 10, ethics: -5, leadership: 0, innovation: 10 } },
            { id: 'B', text: { en: '🏃 Physical Hunt: "Grab a signal analyzer app on your phone. Walk the lobby. Find the device (probably a WiFi Pineapple) and confiscate it."', th: '🏃 การล่าทางกายภาพ: "หยิบแอปวิเคราะห์สัญญาณบนมือถือ เดินไปที่ล็อบบี้ หาอุปกรณ์ (น่าจะเป็น WiFi Pineapple) และยึดมา"', zh: '🏃 物理搜寻：“拿起手机上的信号分析应用。去大厅转转。找到该设备（可能是WiFi Pineapple）并将其没收。”' }, consequence: { en: '✅ Threat Removed! You find a Pineapple hidden in a plant pot. You check the logs and see 50 captured credentials. Change passwords immediately. Good legwork.', th: '✅ ภัยคุกคามถูกกำจัด! คุณเจอ Pineapple ซ่อนในกระถางต้นไม้ เช็ค log แล้วเห็นรหัสผ่านถูกดัก 50 รายการ เปลี่ยนรหัสผ่านทันที งานเดินเท้าที่ดี', zh: '✅ 威胁消除！你在花盆里发现了一个Pineapple。你检查日志，看到50个被捕获的凭据。立即更改密码。跑腿跑得好。' }, stats: { competence: 25, ethics: 15, leadership: 10, innovation: 5 } },
            { id: 'C', text: { en: '📧 User Attention: "Send an email warning staff not to connect to unknown WiFi. If they did, reset their passwords."', th: '📧 เตือนผู้ใช้: "ส่งอีเมลเตือนพนักงานอย่าเชื่อมต่อ WiFi ที่ไม่รู้จัก ถ้าทำไปแล้ว ให้รีเซ็ตรหัสผ่าน"', zh: '📧 用户注意：“发送电子邮件警告员工不要连接未知的WiFi。如果连过了，重置密码。”' }, consequence: { en: '⏳ Slow Response! Users don\'t check email while on "Fast" WiFi because their creds are being stolen. By the time they read it, it\'s too late.', th: '⏳ ตอบสนองช้า! ผู้ใช้ไม่เช็คอีเมลตอนต่อ "Fast" WiFi เพราะรหัสกำลังถูกขโมย กว่าจะอ่านก็สายไปแล้ว', zh: '⏳ 反应迟钝！用户在连接“Fast”WiFi时无法查看邮件，因为他们的凭据正在被窃取。等他们读到邮件时，已经太晚了。' }, stats: { competence: 0, ethics: 5, leadership: -5, innovation: 0 } },
            { id: 'D', text: { en: '🔒 Certificate Pinning: "Ensure managed devices use certificate pinning and valid 802.1x auth. They shouldn\'t be able to connect to rogue APs automatically."', th: '🔒 การตรึงใบรับรอง: "ตรวจสอบให้แน่ใจว่าอุปกรณ์ที่จัดการใช้ certificate pinning และ 802.1x auth ที่ถูกต้อง พวกเขาไม่ควรเชื่อมต่อ AP ปลอมได้อัตโนมัติ"', zh: '🔒 证书固定：“确保受管设备使用证书固定和有效的802.1x认证。它们不应该能够自动连接到流氓AP。”' }, consequence: { en: '🚀 Systemic Fix! Your corporate devices refuse to connect. Only guest phones are affected. You protected the core assets via architecture. +20 Competence.', th: '🚀 การแก้ไขเชิงระบบ! อุปกรณ์บริษัทปฏิเสธที่จะเชื่อมต่อ มีแค่มือถือแขกที่ได้รับผลกระทบ คุณปกป้องสินทรัพย์หลักด้วยสถาปัตยกรรม +20 ความสามารถ', zh: '🚀 系统性修复！你的公司设备拒绝连接。只有客人的手机受到影响。你通过架构保护了核心资产。+20 能力。' }, stats: { competence: 20, ethics: 10, leadership: 15, innovation: 15 } }
        ]
    },

    {
        id: 'cs_030',
        text: {
            en: '📦 Typo-Squatting: A developer accidentally installed "node-sasss" (3 "s") instead of "node-sass". The package script ran immediately upon installation. It\'s a popular attack vector.',
            th: '📦 การพิมพ์ผิดเพื่อโจมตี: นักพัฒนาเผลอติดตั้ง "node-sasss" (มี s 3 ตัว) แทน "node-sass" สกริปต์แพ็คเกจรันทันทีที่ติดตั้ง นี่คือช่องทางโจมตียอดนิยม',
            zh: '📦 误植域名：开发人员不小心安装了“node-sasss”（3个“s”），而不是“node-sass”。包脚本在安装时立即运行。这是一种流行的攻击媒介。'
        },
        options: [
            { id: 'A', text: { en: '💣 Nuke the Laptop: "Assume full compromise. Isolate the laptop. Re-image the machine. Revoke all tokens present in the user\'s env variables."', th: '💣 ล้างเครื่อง: "ถือว่าโดนเจาะสมบูรณ์ แยกแล็ปท็อป ลงวินโดว์ใหม่ เพิกถอน token ทั้งหมดที่มีใน env variables ของผู้ใช้"', zh: '💣以此重置笔记本：“假设完全受损。隔离笔记本电脑。重新制作机器镜像。撤销用户环境变量中存在的所有令牌。”' }, consequence: { en: '✅ Safe & Sure! The package was a reverse shell. By nuking it, you cut off the attacker before lateral movement. Aggressive but necessary.', th: '✅ ปลอดภัยและชัวร์! แพ็คเกจนั้นคือ reverse shell การล้างเครื่องช่วยตัดขาดผู้โจมตีก่อนจะขยับไปไหน รุนแรงแต่จำเป็น', zh: '✅ 安全且确信！该包是一个反向Shell。通过重置，你在横向移动之前切断了攻击者。激进但必要。' }, stats: { competence: 25, ethics: 10, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🔍 Code Review: "Look at the package code in node_modules. If it looks empty, just uninstall it and move on."', th: '🔍 ตรวจโค้ด: "ดูโค้ดแพ็คเกจใน node_modules ถ้าดูว่างเปล่า ก็แค่ถอนการติดตั้งและททำงานต่อ"', zh: '🔍 代码审查：“查看node_modules中的包代码。如果看起来是空的，只需卸载它并继续。”' }, consequence: { en: '💀 Hidden Script! The `postinstall` script deleted itself after running. You looked at an empty folder, but the malware is already in memory. You missed it.', th: '💀 สกริปต์ซ่อน! สกริปต์ `postinstall` ลบตัวเองหลังรัน คุณดูโฟลเดอร์ว่างเปล่าแต่มัลแวร์อยู่ในหน่วยความจำแล้ว คุณพลาดแล้ว', zh: '💀 隐藏脚本！`postinstall`脚本在运行后删除了自己。你看着一个空文件夹，但恶意软件已经在内存中了。你错过了。' }, stats: { competence: -15, ethics: 0, leadership: -5, innovation: 0 } },
            { id: 'C', text: { en: '🧱 Private Nexus: "Set up a private NPM proxy (Nexus/Artifactory). Block direct downloads from public npm. Only allow vetted packages."', th: '🧱 Nexus ส่วนตัว: "ตั้งค่า NPM proxy ส่วนตัว (Nexus/Artifactory) บล็อกการโหลดตรงจาก npm สาธารณะ อนุญาตเฉพาะแพ็คเกจที่ตรวจสอบแล้ว"', zh: '🧱 私有中心：“设置私有NPM代理（Nexus/Artifactory）。阻止从公共npm直接下载。只允许经过审查的包。”' }, consequence: { en: '🚀 Supply Chain Secured! A structural fix. Developers can\'t accidentally pull bad packages anymore. Productivity dips slightly, security skyrockets.', th: '🚀 Supply Chain ปลอดภัย! การแก้ไขเชิงโครงสร้าง นักพัฒนาไม่สามารถเผลอดึงแพ็คเกจแย่ๆ ได้อีก ผลผลิตตกนิดหน่อย ความปลอดภัยพุ่ง', zh: '🚀 供应链安全！结构性修复。开发人员再也不会意外拉取错误的包了。生产力略有下降，安全性飙升。' }, stats: { competence: 20, ethics: 10, leadership: 20, innovation: 20 } },
            { id: 'D', text: { en: '📧 Scold Developer: "Tell them to learn how to spell. This is basic competency."', th: '📧 ดุนักพัฒนา: "บอกให้เขาหัดสะกดคำให้ถูก นี่มันความสามารถพื้นฐานนะ"', zh: '📧 斥责开发人员：“告诉他们去学拼写。这是基本能力。”' }, consequence: { en: '❌ Human Error is Inevitable! You blame the human instead of the system. The next typo (by a senior dev) brings down the network. Bad culture.', th: '❌ ความผิดพลาดของมนุษย์เลี่ยงไม่ได้! คุณโทษคนแทนระบบ การพิมพ์ผิดครั้งหน้า (โดยรุ่นพี่) ทำเครือข่ายล่ม วัฒนธรรมแย่', zh: '❌ 人为错误不可避免！你责怪人而不是系统。下一个拼写错误（由高级开发人员犯的）搞垮了网络。糟糕的文化。' }, stats: { competence: -10, ethics: -10, leadership: -20, innovation: -10 } }
        ]
    },

    {
        id: 'cs_031',
        text: {
            en: '💼 The Departing VP: The VP of Sales resigns to join a competitor. DLP (Data Loss Prevention) logs show he downloaded 50GB of "Customer_Lists" to a USB drive 2 days ago. He is currently in his exit interview.',
            th: '💼 VP ที่กำลังจากไป: VP ฝ่ายขายลาออกไปร่วมกับคู่แข่ง บันทึก DLP แสดงว่าเขาดาวน์โหลด "Customer_Lists" 50GB ลง USB เมื่อ 2 วันก่อน ตอนนี้เขากำลังสัมภาษณ์ก่อนออก',
            zh: '💼 离职副总裁：销售副总裁辞职加入竞争对手。DLP（数据丢失防护）日志显示他2天前将50GB的“客户列表”下载到了USB驱动器上。他目前正在进行离职面谈。'
        },
        options: [
            { id: 'A', text: { en: '👮 Confront & Confiscate: "Walk into the interview. Recover the USB drive legally. Inform Legal immediately. Do not let him leave with data."', th: '👮 เผชิญหน้าและยึด: "เดินเข้าไปในการสัมภาษณ์ กู้คืน USB อย่างถูกกฎหมาย แจ้งฝ่ายกฎหมายทันที อย่าปล่อยให้เขาออกไปพร้อมข้อมูล"', zh: '👮 对质并没收：“走进面试室。合法收回USB驱动器。立即通知法务。别让他带着数据离开。”' }, consequence: { en: '✅ IP Protected! He claims it was "personal photos" but hands it over. You verify it contains the CRM DB. Legal sends a cease-and-desist. You saved the client base.', th: '✅ ทรัพย์สินทางปัญญารอด! เขาอ้างว่าเป็น "รูปส่วนตัว" แต่ก็ยอมคืน คุณตรวจสอบพบฐานข้อมูล CRM ฝ่ายกฎหมายส่งจดหมายตักเตือน คุณรักษากลุ่มลูกค้าไว้ได้', zh: '✅ 知识产权受保护！他声称那是“个人照片”，但还是交了出来。你核实其中包含CRM数据库。法务部门发出了停止侵权函。你挽救了客户群。' }, stats: { competence: 20, ethics: 10, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '👀 Silent Monitor: "Let him leave. See if he uses the data at the new company. Then sue for massive damages using forensic evidence."', th: '👀 เฝ้าดูเงียบๆ: "ปล่อยเขาไป ดูว่าเขาใช้ข้อมูลที่บริษัทใหม่ไหม แล้วฟ้องเรียกค่าเสียหายมหาศาลโดยใช้หลักฐานนิติวิทยาศาสตร์"', zh: '👀 静默监控：“让他走。看看他是否在新公司使用这些数据。然后利用取证证据起诉索赔巨额损失。”' }, consequence: { en: '⚠️ High Risk Gamble! The competitor uses the data to steal your top 5 clients ($10M loss). The lawsuit takes 3 years and settles for $2M. You lost net $8M.', th: '⚠️ การพนันความเสี่ยงสูง! คู่แข่งใช้ข้อมูลขโมยลูกค้าท็อป 5 ของคุณ (เสียหาย $10M) คดีใช้เวลา 3 ปีและจบที่ $2M คุณขาดทุนสุทธิ $8M', zh: '⚠️ 高风险赌博！竞争对手利用数据窃取了你的前5大客户（损失1000万美元）。诉讼耗时3年，以200万美元和解。你净亏损800万美元。' }, stats: { competence: -10, ethics: -10, leadership: -15, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Gentleman\'s Agreement: "Ask him to delete it. He\'s been here 10 years. We trust him."', th: '🤝 สุภาพบุรุษสัญญา: "ขอให้เขาลบมัน เขาอยู่ที่นี่มา 10 ปี เราไว้ใจเขา"', zh: '🤝 君子协定：“请他删除。他在这里呆了10年。我们信任他。”' }, consequence: { en: '💀 Naive! He deletes the copy on the USB but kept a backup on his home NAS. Business is war. Trust is not a control.', th: '💀 ไร้เดียงสา! เขาลบสำเนาใน USB แต่เก็บ Backup ไว้ใน NAS ที่บ้าน ธุรกิจคือสงคราม ความเชื่อใจไม่ใช่การควบคุม', zh: '💀以此天真！他删除了USB上的副本，但在家里的NAS上保留了备份。商场如战场。信任不是一种控制手段。' }, stats: { competence: -20, ethics: 0, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🔒 Technical Lock: "Remotely wipe his corporate laptop and mobile now. Disable his accounts. Too late for the USB, but stop further leaks."', th: '🔒 ล็อกทางเทคนิค: "ล้างข้อมูลแล็ปท็อปและมือถือบริษัทของเขาจากระยะไกลเดี๋ยวนี้ ปิดบัญชี สายไปสำหรับ USB แต่หยุดการรั่วไหลเพิ่มเติม"', zh: '🔒 技术锁定：“立即远程擦除他的公司笔记本电脑和手机。禁用他的账户。USB已经太晚了，但要阻止进一步泄露。”' }, consequence: { en: '😐 Partial Win. You stopped access, but the USB walked out the door. You need stricter USB policies in the future.', th: '😐 ชนะครึ่งเดียว คุณหยุดการเข้าถึงได้ แต่ USB เดินออกจากประตูไปแล้ว คุณต้องมีนโยบาย USB ที่เข้มงวดขึ้นในอนาคต', zh: '😐 部分胜利。你阻止了访问，但USB已经被带走了。未来你需要更严格的USB策略。' }, stats: { competence: 10, ethics: 0, leadership: 5, innovation: 0 } }
        ]
    },

    {
        id: 'cs_032',
        text: {
            en: '📜 Secrets in Logs: A developer is debugging a failed CI/CD pipeline. To see what\'s wrong, they print the entire environment variable set to the console logs. This includes AWS_ACCESS_KEY and DB_PASSWORD.',
            th: '📜 ความลับใน Log: นักพัฒนากำลังแก้ปัญหา CI/CD pipeline ที่ล้มเหลว เพื่อดูว่าอะไรผิดพลาด เขาพริ้นต์ environment variable ทั้งหมดลง console log ซึ่งรวมถึง AWS_ACCESS_KEY และ DB_PASSWORD',
            zh: '📜 日志中的秘密：开发人员正在调试失败的CI/CD管道。为了查看出了什么问题，他们将整个环境变量集打印到控制台日志中。这包括AWS_ACCESS_KEY和DB_PASSWORD。'
        },
        options: [
            { id: 'A', text: { en: '🔄 Rotate & Mask: "Immediately rotate ALL exposed credentials. Update the CI/CD configuration to mask secrets in logs automatically. Delete the specific build log."', th: '🔄 หมุนเวียนและปิดบัง: "หมุนเวียนรหัสผ่านที่หลุดทั้งหมดทันที อัปเดตการตั้งค่า CI/CD ให้ปิดบังความลับใน log อัตโนมัติ ลบ log ของ build นั้น"', zh: '🔄 轮换与掩码：“立即轮换所有暴露的凭据。更新CI/CD配置以自动在日志中掩码秘密。删除特定的构建日志。”' }, consequence: { en: '✅ Clean Slate! It\'s painful to rotate keys, but you ensured safety. You also implemented a systemic fix for the future.', th: '✅ ล้างกระดาน! การหมุนเวียนคีย์มันเจ็บปวด แต่คุณรับประกันความปลอดภัย คุณยังติดตั้งการแก้ไขเชิงระบบสำหรับอนาคตด้วย', zh: '✅以此重新开始！轮换密钥很痛苦，但你确保了安全。你还为未来实施了系统性修复。' }, stats: { competence: 25, ethics: 10, leadership: 15, innovation: 10 } },
            { id: 'B', text: { en: '🗑️ Just Delete Log: "Delete the build history log. It was only visible internally for 5 minutes. No need to rotate keys, that breaks production."', th: '🗑️ แค่ลบ Log: "ลบประวัติ build log มันเห็นแค่ภายในแค่ 5 นาที ไม่ต้องหมุนเวียนคีย์ เดี๋ยว production พัง"', zh: '🗑️ 仅删除日志：“删除构建历史日志。它而在内部可见仅5分钟。无需轮换密钥，那样会破坏生产环境。”' }, consequence: { en: '💀 Persistent Threat! Logs are often cached or scraped by third-party plugins. An attacker finds the key in a cached artifact 2 months later. You were lazy.', th: '💀 ภัยคุกคามถาวร! Log มักถูกแคชหรือดึงโดยปลั๊กอินบุคคลที่สาม แฮกเกอร์เจอคีย์ใน artifact ที่แคชไว้ 2 เดือนต่อมา คุณขี้เกียจเอง', zh: '💀 持久威胁！日志经常被缓存或被第三方插件抓取。2个月后，攻击者在缓存的工件中发现了密钥。你太懒了。' }, stats: { competence: -20, ethics: -10, leadership: -10, innovation: -5 } },
            { id: 'C', text: { en: '🛠️ Secrets Manager: "Move all secrets to a dedicated Vault (HashiCorp/AWS Secrets Manager). Inject them only at runtime. Stop using simple env vars."', th: '🛠️ ตัวจัดการความลับ: "ย้ายความลับทั้งหมดไป Vault เฉพาะ (HashiCorp/AWS Secrets Manager) inject เฉพาะตอน runtime เลิกใช้ env var ธรรมดา"', zh: '🛠️ 秘密管理器：“将所有秘密移至专用保险库（HashiCorp/AWS Secrets Manager）。仅在运行时注入它们。停止使用简单的环境变量。”' }, consequence: { en: '🚀 Architectural Upgrade! This prevents the problem entirely. Even if they print env vars, they won\'t see the actual secrets, just references. +30 Innovation.', th: '🚀 อัปเกรดสถาปัตยกรรม! นี่ป้องกันปัญหาได้หมดจด แม้เขาจะพริ้นต์ env var ก็จะไม่เห็นความลับจริง เห็นแค่ reference +30 นวัตกรรม', zh: '🚀 架构升级！这完全防止了该问题。即使他们打印环境变量，也看不到实际的秘密，只能看到引用。+30 创新。' }, stats: { competence: 25, ethics: 10, leadership: 20, innovation: 30 } },
            { id: 'D', text: { en: '👀 Ignore: "It\'s a private repo. Only we can see it. It\'s fine."', th: '👀 เมิน: "มันเป็น repo ส่วนตัว มีแค่เราที่เห็น ไม่เป็นไรหรอก"', zh: '👀 忽视：“这是私人存储库。只有我们可以看到。没事的。”' }, consequence: { en: '❌ Lateral Movement! A contractor with read access sees the key. They use it to mine crypto on your AWS account. You pay the bill.', th: '❌ การเคลื่อนย้ายแนวราบ! ผู้รับเหมาที่มีสิทธิ์อ่านเห็นคีย์ เขาใช้มันขุดคริปโตบนบัญชี AWS ของคุณ คุณจ่ายบิล', zh: '❌ 横向移动！拥有读取权限的承包商看到了密钥。他们用它在你的AWS账户上挖掘加密货币。你来买单。' }, stats: { competence: -15, ethics: 0, leadership: -10, innovation: 0 } }
        ]
    },

    {
        id: 'cs_033',
        text: {
            en: '🎣 The LinkedIn Lure: Key engineers report receiving job offers from "Meta Recruiters" on LinkedIn with a PDF "Job Translation" attached. The PDF is actually a vector for a RAT (Remote Access Trojan).',
            th: '🎣 กับดัก LinkedIn: วิศวกรหลักรายงานว่าได้รับข้อเสนองานจาก "Meta Recruiters" บน LinkedIn พร้อมแนบ PDF "Job Translation" จริงๆ แล้ว PDF คือพาหะสำหรับ RAT (Remote Access Trojan)',
            zh: '🎣 LinkedIn诱饵：关键工程师报告称收到LinkedIn上“Meta招聘人员”的工作邀请，并附有PDF“工作翻译”。该PDF实际上是RAT（远程访问木马）的载体。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Endpoint Block: "Configure EDR to block execution of all scripts spawned by PDF readers. Send a warning to staff about \'Operation Dream Job\'."', th: '🛑 บล็อกที่ Endpoint: "ตั้งค่า EDR ให้บล็อกการรันสคริปต์ทั้งหมดที่เกิดจากตัวอ่าน PDF ส่งคำเตือนพนักงานเรื่อง \'Operation Dream Job\'"', zh: '🛑 端点阻止：“配置EDR以阻止PDF阅读器生成的所有脚本的执行。向员工发送有关‘梦想工作行动’的警告。”' }, consequence: { en: '✅ Attack Neutralized! One engineer clicked, but the EDR killed the process. The warning alerted others. You successfully defended against a state-sponsored actor.', th: '✅ การโจมตีเป็นกลาง! วิศวกรคนหนึ่งคลิก แต่ EDR ฆ่าโปรเซส คำเตือนช่วยคนอื่น คุณป้องกันตัวแสดงระดับรัฐได้สำเร็จ', zh: '✅ 攻击被瓦解！一名工程师点击了，但EDR终止了进程。警告提醒了其他人。你成功防御了国家支持的攻击者。' }, stats: { competence: 25, ethics: 10, leadership: 15, innovation: 10 } },
            { id: 'B', text: { en: '📄 PDF Ban: "Block all PDF downloads from the internet. Convert everything to text files in the cloud first."', th: '📄 แบน PDF: "บล็อกการโหลด PDF ทั้งหมดจากอินเทอร์เน็ต แปลงทุกอย่างเป็นไฟล์ข้อความในคลาวด์ก่อน"', zh: '📄 PDF禁令：“阻止从互联网下载所有PDF。先将云端的所有内容转换为文本文件。”' }, consequence: { en: '📉 Business Stalls! Contracts, invoices, and manuals are all PDFs. You halted the company. Users bypass you by using personal emails. Too extreme.', th: '📉 ธุรกิจชะงัก! สัญญา ใบแจ้งหนี้ คู่มือ ล้วนเป็น PDF คุณหยุดบริษัท ผู้ใช้บายพาสคุณโดยใช้อีเมลส่วนตัว รุนแรงไป', zh: '📉 业务停滞！合同、发票和手册都是PDF。你让公司停摆了。用户通过使用个人电子邮件绕过你。太极端了。' }, stats: { competence: -10, ethics: 0, leadership: -20, innovation: -5 } },
            { id: 'C', text: { en: '🕵️ Counter-Ops: "Create a fake employee profile. Accept the file. Reverse engineer the malware to find C2 infrastructure."', th: '🕵️ ปฏิบัติการสวนกลับ: "สร้างโปรไฟล์พนักงานปลอม รับไฟล์ วิศวกรรมย้อนกลับมัลแวร์เพื่อหาโครงสร้าง C2"', zh: '🕵️ 反击行动：“创建一个虚假员工档案。接收文件。逆向工程恶意软件以查找C2基础设施。”' }, consequence: { en: '🚀 Intel Win! You identify the North Korean group Lazarus. Sharing this intel with the FBI gives your company "Trusted Partner" status.', th: '🚀 ชนะข่าวกรอง! คุณระบุกลุ่ม Lazarus ของเกาหลีเหนือได้ การแชร์ข้อมูลนี้กับ FBI ทำให้บริษัทคุณได้สถานะ "Trusted Partner"', zh: '🚀 情报胜利！你认出了朝鲜组织Lazarus。与FBI分享此情报使你的公司获得了“值得信赖的合作伙伴”地位。' }, stats: { competence: 30, ethics: 10, leadership: 10, innovation: 25 } },
            { id: 'D', text: { en: '🤷 Ignore: "It\'s LinkedIn. Not our infrastructure. Not our problem."', th: '🤷 เมิน: "มันคือ LinkedIn ไม่ใช่ระบบเรา ไม่ใช่ปัญหาเรา"', zh: '🤷 忽视：“这是LinkedIn。不是我们的基础设施。不是我们的问题。”' }, consequence: { en: '💀 Targeted Compromise! The malware installs a keylogger on the engineer\'s work laptop (BYOD). Attackers steal VPN certs and enter your network.', th: '💀 การเจาะเจาะจง! มัลแวร์ติด keylogger บนแล็ปท็อปงาน (BYOD) ของวิศวกร แฮกเกอร์ขโมย VPN certs และเข้าเครือข่ายคุณ', zh: '💀以此定向入侵！恶意软件在工程师的工作笔记本电脑（BYOD）上安装了键盘记录器。攻击者窃取VPN证书并进入你的网络。' }, stats: { competence: -20, ethics: -10, leadership: -15, innovation: 0 } }
        ]
    },

    {
        id: 'cs_034',
        text: {
            en: '💾 The Elevator USB: You find a USB drive labeled "Confidential_Executive_Salaries_2024" on the elevator floor. It looks brand new.',
            th: '💾 USB ในลิฟต์: คุณเจอ USB drive แปะป้าย "Confidential_Executive_Salaries_2024" บนพื้นลิฟต์ ดูเหมือนของใหม่',
            zh: '💾 电梯里的USB：你在电梯地板上发现了一个标有“2024年机密高管薪资”的USB驱动器。看起来是全新的。'
        },
        options: [
            { id: 'A', text: { en: '♻️ Secure Disposal: "Don\'t plug it in. Destroy it physically (hammer/shredder). Send a note to Execs asking if anyone lost a drive, but assume it\'s a trap."', th: '♻️ ทำลายอย่างปลอดภัย: "อย่าเสียบ ทำลายทางกายภาพ (ค้อน/เครื่องย่อย) ส่งโน้ตถามผู้บริหารว่าใครทำหาย แต่ให้คิดว่าเป็นกับดักไว้ก่อน"', zh: '♻️ 安全销毁：“别插进去。物理销毁（锤子/碎纸机）。给高管发个条，问有没有人丢了驱动器，但假设这是个陷阱。”' }, consequence: { en: '✅ Curiosity Killed... No one! It was a pen-test drive loaded with ransomware. By destroying it, you passed the test perfectly.', th: '✅ ความอยากรู้ฆ่า... ไม่ฆ่าใคร! มันเป็น drive ทดสอบระบบที่มี ransomware การทำลายมันคือการสอบผ่านที่สมบูรณ์แบบ', zh: '✅ 好奇心害死……并没有！那个装有勒索软件的渗透测试驱动器。通过销毁它，你完美地通过了测试。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🕵️ Air-Gapped Analysis: "Take it to a dedicated non-networked analysis station. Inspect contents. If it\'s real data, return it. If malware, study it."', th: '🕵️ วิเคราะห์แบบ Air-Gapped: "เอามันไปที่เครื่องวิเคราะห์ที่ไม่ได้ต่อเน็ต ตรวจสอบเนื้อหา ถ้าข้อมูลจริง ก็คืน ถ้ามัลแวร์ ก็ศึกษา"', zh: '🕵️ 气隙分析：“把它带到专门的非联网分析站。检查内容。如果是真实数据，归还。如果是恶意软件，研究它。”' }, consequence: { en: '⚠️ Risky Business! It used a "USB Killer" capacitor that fried your analysis laptop hardware instantly. At least it wasn\'t the network, but you lost hardware.', th: '⚠️ ธุรกิจเสี่ยง! มันใช้ตัวเก็บประจุ "USB Killer" ที่ทำให้แล็ปท็อปวิเคราะห์ของคุณพังทันที อย่างน้อยก็ไม่ใช่เครือข่าย แต่คุณเสียฮาร์ดแวร์', zh: '⚠️ 冒险的生意！它使用了一个“USB杀手”电容，瞬间烧毁了你的分析笔记本电脑硬件。至少不是网络，但你损失了硬件。' }, stats: { competence: 10, ethics: 0, leadership: -5, innovation: 10 } },
            { id: 'C', text: { en: '👀 Quick Peek: "Plug it in quickly to check the first file. If it\'s salaries, I need to give it back to HR."', th: '👀 แอบดูนิดนึง: "เสียบแป๊บเดียวเพื่อเช็คไฟล์แรก ถ้าเป็นเงินเดือน ฉันต้องคืน HR"', zh: '👀 快速看一眼：“快速插进去检查第一个文件。如果是薪资，我得还给HR。”' }, consequence: { en: '💀 Human Interface Device (HID) Attack! It registers as a keyboard and types a PowerShell download command in 0.5 seconds. You are pwnd.', th: '💀 การโจมตี HID! มันลงทะเบียนเป็นคีย์บอร์ดและพิมพ์คำสั่งโหลด PowerShell ใน 0.5 วินาที คุณโดนแล้ว', zh: '💀 人机接口设备（HID）攻击！它注册为键盘，并在0.5秒内输入PowerShell下载命令。你被黑了。' }, stats: { competence: -25, ethics: 0, leadership: -15, innovation: 0 } },
            { id: 'D', text: { en: '📢 Lost & Found: "Give it to the front desk reception. Let them handle it."', th: '📢 แจ้งของหาย: "ให้แผนกต้อนรับจัดการ ให้พวกเขาดู"', zh: '📢 失物招领：“交给前台接待。让他们处理。”' }, consequence: { en: '❌ Passed the Buck! The receptionist plugged it in to check "who it belongs to." The whole network is infected. You held the bomb and passed it to a civilian.', th: '❌ โยนภาระ! พนักงานต้อนรับเสียบเพื่อเช็คว่า "เป็นของใคร" เครือข่ายทั้งหมดติดเชื้อ คุณถือระเบิดแล้วส่งให้พลเรือน', zh: '❌ 推卸责任！接待员插进去检查“它属于谁”。整个网络都被感染了。你拿着炸弹却把它传给了平民。' }, stats: { competence: -10, ethics: -10, leadership: -10, innovation: 0 } }
        ]
    },

    {
        id: 'cs_035',
        text: {
            en: '🧟 The Zombie API: During an asset inventory, you find an old API endpoint `api.company.com/v1/users` that was supposed to be decommissioned 3 years ago. It has no authentication and dumps the user table.',
            th: '🧟 ซอมบี้ API: ระหว่างการเช็คสินทรัพย์ คุณเจอ endpoint เก่า `api.company.com/v1/users` ที่น่าจะเลิกใช้ไป 3 ปีแล้ว มันไม่มีการยืนยันตัวตนและ dump ตารางผู้ใช้ได้เลย',
            zh: '🧟 僵尸API：在资产盘点期间，你发现了一个旧的API端点`api.company.com/v1/users`，它本应在3年前退役。它没有身份验证，并且会转储用户表。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Kill Command: "Decommission the server/route immediately. Break any legacy apps relying on it. Security trumps backwards compatibility for clear text leaks."', th: '🛑 คำสั่งฆ่า: "ปิดเซิร์ฟเวอร์/เส้นทางทันที ยอมให้แอปเก่าพัง ความปลอดภัยสำคัญกว่าความเข้ากันได้ย้อนหลังสำหรับการรั่วไหลแบบ plaintext"', zh: '🛑 终止命令：“立即停用服务器/路由。中断任何依赖它的遗留应用程序。对于明文泄露，安全性胜过向后兼容性。”' }, consequence: { en: '✅ Breach Plugged! A few internal scripts failed, but you prevented a massive PII leak. You force the move to v2 (Oauth).', th: '✅ อุดรอยรั่ว! สกริปต์ภายในพังนิดหน่อย แต่คุณป้องกันการรั่วไหล PII ครั้งใหญ่ คุณบังคับให้ย้ายไป v2 (Oauth)', zh: '✅ 堵住漏洞！一些内部脚本失败了，但你阻止了一次大规模PII泄露。你强制迁移到v2（Oauth）。' }, stats: { competence: 25, ethics: 10, leadership: 15, innovation: 5 } },
            { id: 'B', text: { en: '📊 Monitoring Mode: "Add logging to see who is using it. I don\'t want to break production if a key partner depends on it."', th: '📊 โหมดเฝ้าดู: "เพิ่ม logging เพื่อดูว่าใครใช้ ฉันไม่อยากทำ production พังถ้าพาร์ทเนอร์หลักยังใช้อยู่"', zh: '📊 监控模式：“添加日志以查看谁在使用它。如果有关键合作伙伴依赖它，我不想破坏生产环境。”' }, consequence: { en: '⏳ Too Risky! While you analyzed logs, a scraper found the endpoint. 100k user records leaked on Pastebin. You knew about the hole and left it open.', th: '⏳ เสี่ยงเกินไป! ขณะคุณวิเคราะห์ log นักขูดเจอ endpoint ข้อมูลผู้ใช้ 100k หลุดบน Pastebin คุณรู้อยู่แล้วแต่ปล่อยเปิดไว้', zh: '⏳ 太冒险！当你分析日志时，一个爬虫发现了该端点。10万条用户记录泄露在Pastebin上。你知道这个漏洞却让它开着。' }, stats: { competence: -15, ethics: -10, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🛡️ Retro-Auth: "Put the endpoint behind a WAF or Gateway that enforces an API Key. Keep the old code but wrap it in security."', th: '🛡️ เสริมความปลอดภัยย้อนหลัง: "เอา endpoint ไปไว้หลัง WAF หรือ Gateway ที่บังคับใช้ API Key เก็บโค้ดเก่าไว้แต่ห่อหุ้มด้วยความปลอดภัย"', zh: '🛡️ 追溯认证：“将端点置于强制执行API密钥的WAF或网关之后。保留旧代码但将其包裹在安全措施中。”' }, consequence: { en: '🚀 Smart Compromise! You secured the data without rewriting legacy code. Partners can still use it (once they get a key). +20 Innovation.', th: '🚀 การประนีประนอมที่ฉลาด! คุณรักษาความปลอดภัยโดยไม่ต้องเขียนหโค้ดเก่าใหม่ พาร์ทเนอร์ยังใช้ได้ (เมื่อได้คีย์) +20 นวัตกรรม', zh: '🚀 明智的妥协！你在不重写遗留代码的情况下保护了数据。合作伙伴仍然可以使用它（一旦他们获得了密钥）。+20 创新。' }, stats: { competence: 20, ethics: 0, leadership: 10, innovation: 20 } },
            { id: 'D', text: { en: '🙈 Document It: "Update the API docs to say \'Deprecated - Do Not Use\'. Trust devs to read."', th: '🙈 ทำเอกสาร: "อัปเดตเอกสาร API ว่า \'เลิกใช้แล้ว - ห้ามใช้\' เชื่อว่านักพัฒนาจะอ่าน"', zh: '🙈 记录文档：“更新API文档，注明‘已弃用 - 请勿使用’。相信开发人员会读。”' }, consequence: { en: '📜 Useless! Hackers don\'t read documentation. They scan IPs. You failed to act.', th: '📜 ไร้ค่า! แฮกเกอร์ไม่อ่านเอกสาร พวกเขาสแกน IP คุณล้มเหลวที่จะลงมือทำ', zh: '📜 没用！黑客不读文档。他们扫描IP。你未能采取行动。' }, stats: { competence: -20, ethics: -5, leadership: -15, innovation: -10 } }
        ]
    },
    {
        id: 'cs_036',
        text: {
            en: '🔥 The Black Friday Hotfix: It\'s Black Friday. The checkout page is crashing. A developer has a fix but wants to bypass the 2-hour security scan to deploy it immediately. "We are losing $10k a minute!"',
            th: '🔥 การแก้ด่วนแบล็คฟรายเดย์: วันแบล็คฟรายเดย์ หน้าจ่ายเงินล่ม นักพัฒนามีตัวแก้แต่ขอข้ามการสแกนความปลอดภัย 2 ชั่วโมงเพื่อปล่อยของทันที "เรากำลังเสียเงินนาทีละ 3 แสน!"',
            zh: '🔥 黑色星期五热修复：今天是黑色星期五。结账页面崩溃了。开发人员有一个修复程序，但希望绕过2小时的安全扫描立即部署。“我们每分钟损失1万美元！”'
        },
        options: [
            { id: 'A', text: { en: '🚀 Bypass Scan: "Deploy it! Business survival comes first. I\'ll monitor the logs manually." ', th: '🚀 ข้ามสแกน: "ปล่อยเลย! ความอยู่รอดของธุรกิจต้องมาก่อน เดี๋ยวฉันดูกราฟเอาเอง"', zh: '🚀 绕过扫描：“部署它！企业生存至上。我会手动监控日志。”' }, consequence: { en: '✅ Lucky Gamble. The code was fine. Revenue is saved. The CEO praises your "business alignment." But you set a dangerous precedent.', th: '✅ เดิมพันที่โช็คดี โค้ดไม่มีปัญหา รายได้ถูกกู้คืน CEO ชมว่าคุณ "เข้าใจธุรกิจ" แต่คุณสร้างมาตรฐานที่อันตรายไว้', zh: '✅ 幸运的赌博。代码没问题。收入保住了。CEO称赞你的“商业一致性”。但你树立了一个危险的先例。' }, stats: { competence: 10, ethics: -10, leadership: 10, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Enforce Process: "No. If we deploy a bug, we could lose millions or leak customer credit cards. Run the scan. We eat the downtime."', th: '🛑 บังคับใช้กระบวนการ: "ไม่ ถ้าเราปล่อยบั๊ก เราอาจเสียหลายล้านหรือบัตรเครดิตลูกค้าหลุด รันสแกนซะ เรายอมรับช่วงล่ม"', zh: '🛑 强制流程：“不行。如果我们部署了Bug，可能会损失数百万或泄露客户信用卡。运行扫描。我们要承担停机损失。”' }, consequence: { en: '📉 Short Term Loss. The company loses $1.2M during the scan. The CEO is furious initially. BUT the scan catches a Critical SQL Injection. You saved the company from bankruptcy.', th: '📉 เจ็บสั้น: บริษัทเสียเงิน 40 ล้านระหว่างสแกน CEO โกรธมากตอนแรก แต่! สแกนเจอ SQL Injection ระดับวิกฤต คุณช่วยบริษัทจากการล้มละลาย', zh: '📉 短期损失。公司在扫描期间损失了120万美元。CEO最初很愤怒。但是扫描发现了一个关键的SQL注入。你把公司从破产中救了出来。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: -10 } }
        ]
    },

    {
        id: 'cs_037',
        text: {
            en: '📈 The Cloud Bill Shock: Your AWS bill spiked by 500% ($50k) overnight. Logs show massive compute usage. It could be a legitimate viral marketing success or a crypto-mining hack.',
            th: '📈 บิลคลาวด์ช็อคโลก: บิล AWS พุ่งขึ้น 500% (1.5 ล้านบาท) ในคืนเดียว Log โชว์การใช้ CPU มหาศาล อาจจะเป็นการตลาดไวรัลที่ปังหรือโดนแฮกไปขุดเหรียญ',
            zh: '📈 云账单休克：你的AWS账单一夜之间飙升了500%（5万美元）。日志显示大量的计算使用。这可能是合法的病毒式营销成功，也可能是加密货币挖掘黑客攻击。'
        },
        options: [
            { id: 'A', text: { en: '🔌 Pull the Plug: "Shut down the new instances immediately to stop the bleeding. Investigate later."', th: '🔌 ดึงปลั๊ก: "ปิดอินสแตนซ์ใหม่ทันทีเพื่อหยุดเลือดไหล ค่อยตรวจสอบทีหลัง"', zh: '🔌 拔掉插头：“立即关闭新实例以止损。稍后调查。”' }, consequence: { en: '💀 False Positive! It WAS a viral campaign. You just took down the site during its peak moment. Marketing hates you.', th: '💀 สัญญาณหลอก! มันคือแคมเปญไวรัลจริงๆ คุณเพิ่งปิดเว็บตอนช่วงพีคสุด การตลาดเกลียดคุณ', zh: '💀 误报！那是病毒式营销活动。你在网站的巅峰时刻把它搞崩了。营销部门恨你。' }, stats: { competence: -20, ethics: 0, leadership: -20, innovation: -10 } },
            { id: 'B', text: { en: '🔍 Traffic Analysis: "Check the traffic source and process patterns. If it\'s mining xmr-stak, kill it. If it\'s customer traffic, scale it."', th: '🔍 วิเคราะห์ทราฟฟิก: "เช็คต้นทางและแพทเทิร์นโปรเซส ถ้าเป็น xmr-stak ขุดเหรียญ ฆ่ามัน ถ้าเป็นลูกค้า ขยายรับ"', zh: '🔍 流量分析：“检查流量来源和进程模式。如果是挖掘xmr-stak，杀掉它。如果是客户流量，扩展它。”' }, consequence: { en: '✅ Precision Response. It was a miner installed via a leaky container. You nuked the miner but kept the valid app running. Perfect handling.', th: '✅ ตอบสนองแม่นยำ: มันคือตัวขุดเหรียญที่เข้ามาทาง container ที่รั่ว คุณกำจัดตัวขุดแต่ให้แอปทำงานต่อ จัดการได้สมบูรณ์แบบ', zh: '✅ 精准响应。它是一个通过泄漏容器安装的矿工。你干掉了矿工，但让有效的应用程序继续运行。完美处理。' }, stats: { competence: 30, ethics: 0, leadership: 15, innovation: 10 } }
        ]
    },

    {
        id: 'cs_038',
        text: {
            en: '🔑 The CEO\'s Password: You discover the CEO is using "Company2024!" for his email, banking, and admin portal. He refuses to change it because "MFA is annoying enough."',
            th: '🔑 รหัสผ่าน CEO: คุณค้นพบว่า CEO ใช้ "Company2024!" กับอีเมล ธนาคาร และพอร์ทัลแอดมิน เขาไม่ยอมเปลี่ยนเพราะ "แค่ MFA ก็น่ารำคาญพอแล้ว"',
            zh: '🔑 CEO的密码：你发现CEO的电子邮件、银行和管理门户都使用“Company2024!”。他拒绝更改，因为“MFA已经够烦人了。”'
        },
        options: [
            { id: 'A', text: { en: '🕴️ Executive Exception: "He signs my checks. Whitelist his account from the complex password policy. Setup extrabackend monitoring instead."', th: '🕴️ ข้อยกเว้นผู้บริหาร: "เขาเซ็นเช็คเงินเดือนฉัน ใส่ชื่อเขาใน Whitelist ไม่ต้องใช้นโยบายรหัสผ่านยาก ตั้งระบบเฝ้าระวังหลังบ้านเพิ่มแทน"', zh: '🕴️ 高管例外：“他签我的支票。将他的帐户从复杂密码策略中列入白名单。设置额外的后端监控代替。”' }, consequence: { en: '💀 Spear Phished. Attackers guess his password in 3 tries. They perform a SIM swap to bypass MFA. Company funds drained. Exception denied.', th: '💀 โดนตกเบ็ด แฮกเกอร์เดารหัสเขาได้ใน 3 ครั้ง แล้วทำ SIM swap เพื่อข้าม MFA เงินบริษัทถูกดูดเกลี้ยง ข้อยกเว้นถูกปฏิเสธ', zh: '💀 鱼叉式网络钓鱼。攻击者分3次猜出了他的密码。他们进行SIM卡交换以绕过MFA。公司资金被耗尽。例外被拒绝。' }, stats: { competence: -20, ethics: -10, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🔐 Passwordless Pivot: "Implement Hardware Keys (YubiKey) or Biometrics (FaceID) for him. No passwords to remember. More secure and convenient."', th: '🔐 เลิกใช้รหัสผ่าน: "ใช้ Hardware Key (YubiKey) หรือ Biometrics (FaceID) ให้เขาเลย ไม่ต้องจำรหัส ปลอดภัยกว่าและสะดวกกว่า"', zh: '🔐 无密码转型：“为他实施硬件密钥（YubiKey）或生物识别（FaceID）。无需以此密码。更安全、更方便。”' }, consequence: { en: '✅ Win-Win. The CEO loves the "high tech" feel of touching a key. Security is upgraded to Phishing-Resistant MFA. You get a budget increase.', th: '✅ วิน-วิน: CEO ชอบความรู้สึก "ไฮเทค" ตอนแตะคีย์ ความปลอดภัยอัปเกรดเป็น Phishing-Resistant MFA คุณได้งบเพิ่ม', zh: '✅以此双赢。CEO以此触摸密钥的“以此”以此。安全性升级为抗网络钓鱼MFA。你以此了预算以此。' }, stats: { competence: 20, ethics: 10, leadership: 20, innovation: 25 } }
        ]
    },

    {
        id: 'cs_039',
        text: {
            en: '📶 The "Free" Wi-Fi: You are at a massive tech conference. You see an open Wi-Fi network named "Conference_Official_5G". Your phone auto-connects. You get a prompt to install a "Security Certificate" to access internet.',
            th: '📶 WiFi "ฟรี": คุณอยู่ที่งานประชุม Tech ใหญ่ เจอ WiFi เปิดชื่อ "Conference_Official_5G" มือถือคุณต่อเอง มันเด้งเตือนให้ลง "Security Certificate" เพื่อใช้งานเน็ต',
            zh: '📶 “免费”WiFi：你正处于一个大型科技会议中。你看到一个名为“Conference_Official_5G”的开放WiFi网络。你的手机自动连接。你收到安装“安全证书”以访问互联网的提示。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Disconnect Hard: "That\'s a Man-in-the-Middle (MitM) attack! Installing the root cert allows them to decrypt my SSL traffic. Turn off WiFi. Use 5G data."', th: '🛑 ตัดเน็ตทันที: "นั่นมันการโจมตี MitM! การลง root cert ทำให้เขาถอดรหัส SSL เราได้ ปิด WiFi ใช้ 5G เดี๋ยวนี้"', zh: '🛑 强行断开：“那是中间人（MitM）攻击！安装根证书允许他们解密我的SSL流量。关闭WiFi。使用5G数据。”' }, consequence: { en: '✅ Dodge. You look around and see people typing passwords while connected. You know they are compromised. You keep your data safe.', th: '✅ หลบได้: คุณมองไปรอบๆ เห็นคนพิมพ์รหัสผ่านขณะต่อเน็ตนั้น คุณรู้ว่าเขาเสร็จแน่ คุณรักษาข้อมูลตัวเองปลอดภัย', zh: '✅ 躲闪。你环顾四周，看到人们在连接时输入密码。你知道他们受损了。你以此你的以此安全。' }, stats: { competence: 15, ethics: 0, leadership: 0, innovation: 0 } },
            { id: 'B', text: { en: '🦠 Curiosity: "Install it on a burner VM on my laptop to capture THEIR traffic. Maybe I can hack the hackers."', th: '🦠 อยากรู้อยากเห็น: "ลงใน VM ที่ใช้แล้วทิ้งบนแล็ปท็อปเพื่อดักทราฟฟิกของ \'มัน\' บ้าง เผื่อจะแฮกคนแฮกคืน"', zh: '🦠 好奇心：“把它安装在我笔记本电脑上的燃烧器VM上以捕获以此流量。也许我可以黑掉黑客。”' }, consequence: { en: '⚠️ Dangerous Territory. You find the attacker\'s C2 server, but you technically violated the Computer Fraud and Abuse Act. Be careful.', th: '⚠️ แดนอันตราย: คุณเจอเซิร์ฟเวอร์ C2 ของผู้โจมตี แต่ทางเทคนิคคุณผิดกฎหมายคอมพิวเตอร์ ระวังตัวด้วย', zh: '⚠️ 危险领域。你发现了攻击者的C2服务器，但在技术上你违反了计算机欺诈和滥用法案。小心点。' }, stats: { competence: 25, ethics: -10, leadership: 0, innovation: 10 } }
        ]
    },

    {
        id: 'cs_040',
        text: {
            en: '🤝 Sales vs Security: A potential $10M client says their legacy firewall blocks your MFA requests. They demand you DISABLE MFA for their admin account or they walk away.',
            th: '🤝 การขายปะทะความปลอดภัย: ลูกค้า 300 ล้านบาทบอกว่า Firewall โบราณของเขาบล็อก MFA ของคุณ เขาขอให้คุณ "ปิด" MFA สำหรับบัญชีผู้ดูแล ไม่งั้นเขาไม่ซื้อ',
            zh: '🤝 销售与安全：一个潜在的1000万美元客户说他们的旧防火墙阻止了你的MFA请求。他们要求你为他们的管理员帐户禁用MFA，否则他们就走人。'
        },
        options: [
            { id: 'A', text: { en: '🛑 The Hard Line: "I cannot do that. Without MFA, a single compromised password exposes ALL our clients to a supply chain attack. It\'s non-negotiable."', th: '🛑 เส้นตาย: "ผมทำให้ไม่ได้ ถ้าไม่มี MFA แค่รหัสผ่านหลุดตัวเดียว ข้อมูลลูกค้าทุกคนของเราจะเสี่ยงต่อ Supply Chain Attack เรื่องนี้ต่อรองไม่ได้"', zh: '🛑以此以此：“我不能那样做。没有MFA，一个受损的密码会使我们所有的客户以此于供应链攻击。这是不可以此的。”' }, consequence: { en: '✅ Respect. The client\'s CISO steps in and agrees with you. "Finally, a vendor with a backbone." contract signed. You protected the herd.', th: '✅ ความเคารพ: CISO ของลูกค้าเข้ามาแทรกและเห็นด้วยกับคุณ "ในที่สุดก็เจอที่มีกระดูกสันหลัง" สัญญาผ่าน คุณปกป้องฝูงได้', zh: '✅ 尊重。客户的CISO介入并同意你的观点。 “终于，一个有以此的以此。”合同以此。你保护了以此。' }, stats: { competence: 20, ethics: 10, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🔓 IP Whitelist Compromise: "We turn off MFA, but we restrict login to ONLY their static corporate IP address. A reasonable middle ground."', th: '🔓 พบกันครึ่งทางด้วย IP Whitelist: "เราปิด MFA ให้ แต่จำกัดการล็อกอินเฉพาะจาก IP ของบริษัทเขาเท่านั้น ทางสายกลางที่สมเหตุสมผล"', zh: '🔓 IP白名单妥协：“我们关闭MFA，但我们将登录限制为仅限其静态公司IP地址。合理的中间立场。”' }, consequence: { en: '⚠️ Technical Debt. It works for now. But then they acquire a company with dynamic IPs, and the rule becomes messy. You created a maintenance nightmare.', th: '⚠️ หนี้ทางเทคนิค: ตอนนี้มันเวิร์ค แต่พอเขาซื้อบริษัทที่มี Dynamic IP กฎก็เละเทะ คุณสร้างฝันร้ายในการดูแลรักษา', zh: '⚠️ 技术债务。目前以此。但后来他们以此了一家拥有动态IP的公司，规则以此以此。你以此了一个以此以此。' }, stats: { competence: 10, ethics: 0, leadership: -5, innovation: 5 } }
        ]
    },

    {
        id: 'cs_041',
        text: {
            en: '🐛 Bug Bounty Extortion: A researcher reports a Remote Code Execution (RCE) bug via email. Your max bounty is $10k. They demand $50k or they will "unfortunately maintain full disclosure on Twitter tomorrow."',
            th: '🐛 การกรรโชก Bug Bounty: นักวิจัยแจ้งบั๊ก RCE ผ่านอีเมล จ่ายสูงสุดคือ 3 แสน เขาเรียก 1.5 ล้าน ไม่งั้นจะ "เปิดเผยข้อมูลทั้งหมดบน Twitter พรุ่งนี้"',
            zh: '🐛 漏洞以此以此：一位研究人员通过电子邮件以此RCE漏洞。你的最高以此是1万美元。他们要求5万美元，否则他们将“以此以此明天在Twitter上以此全面以此”。'
        },
        options: [
            { id: 'A', text: { en: '👮 Call the Feds: "That is blackmail, not research. Do not pay. Contact legal and law enforcement. Patch the bug silently tonight."', th: '👮 เรียกตำรวจ: "นั่นมันแบล็คเมล์ ไม่ใช่วิจัย ไม่จ่าย ติดต่อฝ่ายกฎหมายและตำรวจ แอบแพทช์บั๊กคืนนี้เลย"', zh: '👮以此以此：“那是以此，不是以此。不要付钱。以此以此和以此以此。今晚以此以此该漏洞。”' }, consequence: { en: '✅ Extortion Failed. Seeing the legal threat, they ghost you. You patched the bug. You didn\'t feed the trolls.', th: '✅ กรรโชกล้มเหลว: พอเห็นการขู่ทางกฎหมาย เขาหายหัวไปเลย คุณแพทช์บั๊กเสร็จ คุณไม่ได้ให้อาหารโทรลล์', zh: '✅以此失败。以此以此威胁，他们以此了你。你以此了该漏洞。你没有以此以此。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '💰 Pay the Ransom: "RCE is too dangerous. Pay the $50k as a \'Consulting Fee.\' We can\'t afford the PR hit."', th: '💰 จ่ายค่าไถ่: "RCE มันอันตรายไป จ่าย 1.5 ล้านเป็น \'ค่าที่ปรึกษา\' เรารับมือข่าวเสียไม่ได้หรอก"', zh: '💰以此赎金：“RCE太危险了。以此5万美元作为‘以此费’。我们以此以此PR以此。”' }, consequence: { en: '📉 Signal Weakness. Word gets out you pay extortionists. Next week you get 5 more "reports" demanding huge sums. You created a market for bad actors.', th: '📉 สัญญาณอ่อนแอ: ข่าวหลุดว่าคุณยอมจ่ายพวกกรรโชก อาทิตย์หน้าคุณเจออีก 5 "รายงาน" เรียกเงินก้อนโต คุณสร้างตลาดให้คนเลวแท้ๆ', zh: '📉以此以此。以此传出你以此以此以此。下周你会以此另外5份以此巨额款项的“以此”。你为坏人以此了一个市场。' }, stats: { competence: -10, ethics: -10, leadership: -20, innovation: 0 } }
        ]
    },

    {
        id: 'cs_042',
        text: {
            en: '🗑️ Data Retention Fight: The GDPR law says user data must be deleted after 3 years of inactivity. The VP of Data Science wants to keep it FOREVER to train the AI models. "Data is the new oil!"',
            th: '🗑️ ศึกการเก็บรักษาข้อมูล: กฎหมาย GDPR บอกต้องลบข้อมูลหลังไม่ใช้งาน 3 ปี VP ฝ่าย Data Science จะเก็บ "ตลอดไป" เพื่อเทรน AI "ข้อมูลคือน้ำมันบ่อใหม่นะ!"',
            zh: '🗑️ 数据保留以此：GDPR法律规定用户数据必须在以此3年后删除。数据科学以此希望以此它以此来以此AI模型。 “数据是以此！”'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Enforce Deletion: "The law is clear. Delete the raw data. Work with Anonymized/Aggregated datasets only. The fines are 4% of revenue."', th: '⚖️ บังคับลบ: "กฎหมายชัดเจน ลบข้อมูลดิบซะ ทำงานกับข้อมูลนิรนาม/ภาพรวมเท่านั้น ค่าปรับมัน 4% ของรายได้นะ"', zh: '⚖️以此删除：“以此以此。删除以此数据。仅使用以此/以此数据集。罚款为收入的4%。”' }, consequence: { en: '✅ Safe & Compliant. The Data Science team grumbles but adapts to use synthetic data. You avoid a massive lawsuit next year.', th: '✅ ปลอดภัยและตามกฎ: ทีม Data บ่นอุบแต่ก็ปรับไปใช้ข้อมูลสังเคราะห์ คุณเลี่ยงคดีใหญ่ในปีหน้าไปได้', zh: '✅ 安全且合规。数据科学团队以此，但以此使用合成数据。你以此了明年的大规模以此。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 5 } },
            { id: 'B', text: { en: '🙈 Look Away: "Fine, move it to \'Cold Storage\' and don\'t index it. Maybe the auditors won\'t look there."', th: '🙈 ทำเป็นไม่เห็น: "เออๆ ย้ายไป \'Cold Storage\' แล้วอย่าทำดัชนี เผื่อผู้ตรวจสอบจะไปไม่ดูตรงนั้น"', zh: '🙈以此以此：“以此，将其以此到‘以此以此’并且不要以此。以此以此不会看那里。”' }, consequence: { en: '💀 Audit Fail. A whistleblower helps the auditors find the shadow archive. The fine is €20 Million. You are personally named in the negligence report.', th: '💀 ตรวจสอบไม่ผ่าน: สายลับช่วยผู้ตรวจสอบเจอคลังข้อมูลลับ ค่าปรับ 20 ล้านยูโร คุณมีชื่อในรายงานความละเลย', zh: '💀以此以此。以此以此帮助以此发现了以此以此。罚款2000万欧元。你在以此以此中被以此以此。' }, stats: { competence: -20, ethics: -20, leadership: -20, innovation: 0 } }
        ]
    },

    {
        id: 'cs_043',
        text: {
            en: '🚁 The Hijacked Drone: You are testing a new autonomous delivery drone. Suddenly, it deviates from the flight path and heads towards the CEO\'s window. Logs show an external override command.',
            th: '🚁 โดรนโดนยึด: คุณกำลังทดสอบโดรนส่งของอัตโนมัติ จู่ๆ มันเบี่ยงเส้นทางพุ่งไปที่หน้าต่างห้อง CEO! Log โชว์คำสั่งควบคุมจากภายนอก',
            zh: '🚁以此的以此：你正在测试一个新的自动以此无人机。突然，它偏离以此以此并朝CEO的以此以此。日志显示外部以此以此。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Emergency Kill Switch: "Activate the hardware kill switch! Drop the drone from the sky instantly. Better a broken drone than a dead CEO."', th: '🛑 ปุ่มฆ่าฉุกเฉิน: "กดปุ่ม Kill Switch ฮาร์ดแวร์! ให้โดรนร่วงเดี๋ยวนี้ โดรนพังดีกว่า CEO ตาย"', zh: '🛑以此以此开关：“以此硬件以此开关！立即从空中以此以此。坏以此总比死CEO好。”' }, consequence: { en: '✅ Crisis Averted. The drone smashes into the parking lot. Forensics reveal a competitor was trying to spy/assassinate. You acted decisively.', th: '✅ วิกฤตคลี่คลาย: โดรนตกลานจอดรถพังยับ นิติวิทยาศาสตร์เผยว่าคู่แข่งพยายามสอดแนม/ลอบสังหาร คุณตัดสินใจเด็ดขาด', zh: '✅以此以此。无人机以此以此以此。以此显示竞争对手试图以此/以此。你以此以此。' }, stats: { competence: 30, ethics: 0, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '💻 Attempt to Regain Control: "I can out-hack them! Jam the signal and counter-upload the return home command!"', th: '💻 พยายามยึดคืน: "ฉันแฮกชนะมันแน่! รบกวนสัญญาณแล้วอัปโหลดคำสั่งกลับฐาน!"', zh: '💻以此以此以此：“我可以以此他们！以此信号并以此以此以此命令！”' }, consequence: { en: '💀 Too Late. The latency is too high. The drone crashes through the window. It was carrying a "glitter bomb" (luckily). You failed physical safety.', th: '💀 สายไป: Latency สูงเกิน โดรนพุ่งทะลุกระจกเข้าไป โชคดีที่เป็นแค่ "ระเบิดกากเพชร" คุณสอบตกความปลอดภัยทางกายภาพ', zh: '💀以此。延迟太高。无人机以此窗户。它以此以此“以此以此”（以此）。你以此了物理安全。' }, stats: { competence: -10, ethics: 0, leadership: -10, innovation: 10 } }
        ]
    },

    {
        id: 'cs_044',
        text: {
            en: '🥦 The "Smart" Fridge Spam: The network is slowing down. Packet capture shows the Internet-Connected Fridge in the breakroom is sending 50,000 spam emails an hour. It\'s part of a botnet.',
            th: '🥦 ตู้เย็น "อัจฉริยะ" สแปม: เครือข่ายช้าลง จับแพ็กเก็ตดูพบว่าตู้เย็นต่อเน็ตในห้องพักเบรกกำลังส่งสแปม 50,000 ฉบับต่อชั่วโมง มันเป็นส่วนหนึ่งของ Botnet',
            zh: '🥦 “智能”冰箱以此：网络正在以此。数据包以此显示休息室的以此以此冰箱以此以此发送50,000封垃圾邮件。它是以此的一部分。'
        },
        options: [
            { id: 'A', text: { en: '🔨 IoT Isolation: "VLAN it off! Put all smart devices on a dirty network with NO access to the internet or corporate/internal resources. Why does a fridge need email?"', th: '🔨 แยก IoT: "จับแยก VLAN! เอาอุปกรณ์ smart ทั้งหมดไปไว้ network สกปรก ห้ามออกเน็ตหรือเข้าภายใน ตู้เย็นจะเอาอีเมลไปทำซากอะไร?"', zh: '🔨 IoT以此：“以此VLAN！将所有智能设备以此以此网络上，以此访问互联网或以此/内部资源。为什么冰箱需要电子邮件？”' }, consequence: { en: '✅ Network Restored. You draft a policy banning unapproved IoT devices. The fridge is dumb again, but the network is smart.', th: '✅ เครือข่ายฟื้นคืน: คุณร่างนโยบายแบน IoT ที่ไม่อนุมัติ ตู้เย็นกลับมาโง่เหมือนเดิม แต่เครือข่ายฉลาดขึ้น', zh: '✅ 网络恢复。你以此以此一项以此未经以此的IoT设备的政策。冰箱又以此了，但网络以此了。' }, stats: { competence: 20, ethics: 0, leadership: 10, innovation: 5 } },
            { id: 'B', text: { en: '🧹 Patch the Fridge: "Contact the manufacturer for firmware updates. Maintain the fridge like a server."', th: '🧹 แพทช์ตู้เย็น: "ติดต่อผู้ผลิตขอเฟิร์มแวร์อัปเดต ดูแลตู้เย็นให้เหมือนเซิร์ฟเวอร์"', zh: '🧹以此冰箱：“联系以此以此固件更新。像以此服务器一样以此冰箱。”' }, consequence: { en: '⏳ Eternal Wait. The manufacturer went bankrupt 2 years ago. There are no patches. You wasted 3 days trying to debug a compressor controller.', th: '⏳ รอชั่วนิรันดร์: ผู้ผลิตเจ๊งไป 2 ปีแล้ว ไม่มีแพทช์ คุณเสียเวลา 3 วันพยายามแก้บั๊กตัวคุมคอมเพรสเซอร์', zh: '⏳以此等待。制造商2年前以此了。没有补丁。你浪费了3天以此以此以此控制器。' }, stats: { competence: 0, ethics: 0, leadership: -5, innovation: 0 } }
        ]
    },

    {
        id: 'cs_045',
        text: {
            en: '🌑 Dark Web Drop: A threat intel service alerts you. A sample of your main user database (emails, hashes, addresses) is hosted on a dark web auction site. Bidding starts at 1 BTC.',
            th: '🌑 ดาร์กเว็บหลุด: บริการข่าวกรองแจ้งเตือน ตัวอย่างฐานข้อมูลผู้ใช้หลัก (อีเมล, hash, ที่อยู่) อยู่บนเว็บประมูลดาร์กเว็บ เริ่มประมูลที่ 1 BTC',
            zh: '🌑以此网络以此：威胁以此服务以此你。你的主要用户数据库（电子邮件、哈希、地址）的样本以此在以此网络以此网站上。竞价以此1 BTC。'
        },
        options: [
            { id: 'A', text: { en: '📢 Incident Response: "Trigger the breach protocol. Reset ALL user passwords. Notify regulators within 72 hours. Publicly disclose. Honesty is the only way."', th: '📢 ตอบสนองเหตุการณ์: "เริ่มโปรโตคอลรั่วไหล รีเซ็ตรหัสผ่านทุกคน แจ้งผู้คุมกฎใน 72 ชม. แถลงการณ์สาธารณะ ความซื่อสัตย์คือทางเดียว"', zh: '📢以此响应：“以此违规协议。重置所有用户密码。在72小时内以此以此机构。以此以此。诚实是以此的出路。”' }, consequence: { en: '✅ Trust Retained. It hurts, stock drops 5%, but recovers because you handled it like a pro. Users appreciate the proactive password reset.', th: '✅ รักษาความเชื่อมั่น: เจ็บตัว หุ้นตก 5% แต่ฟื้นเพราะคุณจัดการอย่างมือโปร ผู้ใช้ขอบคุณที่คุณรีเซ็ตรหัสให้ก่อน', zh: '✅以此信任。很以此，股票以此5%，但因为你像以此一样以此而以此。用户以此以此的密码重置。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🤫 Buy it Back: "Use the dark fund. Buy the data ourselves to take it off the market. If we own it, nobody sees it. No breach to report."', th: '🤫 ซื้อคืน: "ใช้เงินลับ ซื้อข้อมูลกลับมาเองเพื่อเอาออกจากตลาด ถ้าเราเป็นเจ้าของ ก็ไม่มีใครเห็น ไม่ต้องรายงานว่ารั่ว"', zh: '🤫以此以此：“使用以此资金。以此以此数据以此将其以此市场。如果我们拥有它，没人以此看到。没有违规以此。”' }, consequence: { en: '💀 Doublecrossed. You pay 1 BTC. They keep the money AND sell the data to 10 other buyers. Now you are funding criminals and still breached.', th: '💀 โดนตลบหลัง: คุณจ่าย 1 BTC มันเก็บเงิน "และ" ขายข้อมูลให้คนอื่นอีก 10 เจ้า ตอนนี้คุณให้เงินทุนโจรแถมข้อมูลก็รั่วอยู่ดี', zh: '💀以此。你以此1 BTC。他们以此以此以此将数据卖给其他10个买家。现在你在为罪犯提供以此，并且仍然以此。' }, stats: { competence: -20, ethics: -30, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'cs_046',
        text: {
            en: '🕵️ The "Free" Audit: A security vendor offers a free network scan. They send you a report showing "Critical Vulnerabilities" but refuse to show the details unless you buy their $100k platform.',
            th: '🕵️ การตรวจสอบ "ฟรี": ผู้ขายรายหนึ่งเสนอสแกนเน็ตฟรี ส่งรายงานว่าเจอ "ช่องโหว่วิกฤต" แต่ไม่บอกจุดนอกจากคุณจะซื้อแพลตฟอร์มราคา 3 ล้านของเขา',
            zh: '🕵️ “免费”审计：以此安全以此以此以此免费网络扫描。他们发给你一份显示“关键漏洞”的报告，但拒绝显示详细信息，除非你购买他们10万美元的平台。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Hire Independent Pen-Tester: "Ignore them. Hire a trusted third party to validate. If they find nothing, the vendor is a fraud."', th: '🛡️ จ้าง Pen-Tester อิสระ: "เมินมันซะ จ้างคนนอกที่เราไว้ใจมาตรวจ ถ้าไม่เจออะไร ไอ้คนขายนั้นมันต้มตุ๋น"', zh: '🛡️以此独立渗透测试人员：“以此他们。以此以此信任的以此方进行以此。如果他们什么也没发现，那个以此就是以此。”' }, consequence: { en: '✅ Smart Move. The third party finds normal bugs, nothing critical. The vendor was lying to scare you into a sale. You saved $90k.', th: '✅ ตาเดินที่ฉลาด: คนที่จ้างมาเจอบั๊กปกติ ไม่ใช่วิกฤต คนขายมันโกหกขู่ให้กลัวเพื่อขายของ คุณประหยัดไป 2.7 ล้าน', zh: '✅以此以此。第三方发现了以此漏洞，没有什么以此以此。以此以此是在以此你以此以此。你以此了9万美元。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '💸 Panic Buy: "We can\'t risk it! Buy the platform immediately. We need to see those vulns."', th: '💸 ตระหนกซื้อ: "เราเสี่ยงไม่ได้! ซื้อแพลตฟอร์มเดี๋ยวนี้ เราต้องเห็นช่องโหว่พวกนั้น"', zh: '💸以此购买：“我们不能冒险！立即购买该平台。我们需要看到那些漏洞。”' }, consequence: { en: '📉 Scammed. The "platform" is just a reskinned open-source scanner. The "Critical" bugs were false positives. You look gullible.', th: '📉 โดนต้ม: "แพลตฟอร์ม" นั่นมันแค่ Open Source Scanner มาเปลี่ยนธีม ช่องโหว่ "วิกฤต" ก็แค่ False Positive คุณดูเป็นคนเชื่อง่าย', zh: '📉以此。 “平台”只是一个以此以此的开源扫描仪。 “关键”漏洞是以此。你看起来以此以此。' }, stats: { competence: -20, ethics: 0, leadership: -20, innovation: -10 } }
        ]
    },

    {
        id: 'cs_047',
        text: {
            en: '🔍 The Hardware Implant: A new batch of servers arrives from a supplier. You notice a tiny chip on the motherboard that isn\'t on the schematics. It has a tiny antenna.',
            th: '🔍 ฮาร์ดแวร์แปลกปลอม: เซิร์ฟเวอร์ล็อตใหม่ส่งมาถึง คุณสังเกตเห็นชิปจิ๋วบนเมนบอร์ดที่ไม่มีในผังวงจร มันมีเสาอากาศเล็กๆ ด้วย',
            zh: '🔍 硬件植入：一批新的服务器从供应商处运抵。你注意到主板上有一个微小的芯片，不在原理图中。它有一个微小的天线。'
        },
        options: [
            { id: 'A', text: { en: '🔬 Microscope Analysis: "Halt deployment! Send the board to a hardware lab for X-ray and signal analysis. This looks like a supply chain interdiction."', th: '🔬 วิเคราะห์ด้วยกล้องจุลทรรศน์: "หยุดการติดตั้ง! ส่งบอร์ดไปแล็บฮาร์ดแวร์เพื่อ X-ray และวิเคราะห์สัญญาณ นี่มัน Supply Chain Interdiction ชัดๆ"', zh: '🔬以此分析：“以此以此！将主板发送到硬件以此进行X射线和信号分析。这看起来像供应链以此。”' }, consequence: { en: '✅ Spy Caught. It\'s a sophisticated spy chip. You alert the authorities. This is global news. You are the hero who caught "The Big One."', th: '✅ จับสายลับได้: มันคือชิปสายลับสุดล้ำ คุณแจ้งทางการ นี่มันข่าวระดับโลก คุณคือฮีโร่ที่จับ "ตัวเป้ง" ได้', zh: '✅以此以此。这是一个以此以此的以此芯片。你以此了当局。这是全球新闻。你是以此了“大以此”的英雄。' }, stats: { competence: 40, ethics: 10, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🤷 Ignore: "Probably just a revision update from the factory. Put them in the rack. We need the compute power now."', th: '🤷 เมิน: "คงแค่โรงงานปรับปรุงรุ่นใหม่แหละ ใส่ตู้เลย เราต้องการ CPU เดี๋ยวนี้"', zh: '🤷以此：“但这可能只是工厂的以此以此。把它们放以此以此里。我们现在需要以此以此。”' }, consequence: { en: '💀 Total Compromise. The chip allows attackers to dump RAM directly via radio frequency. Your entire data center is compromised at the hardware level.', th: '💀 โดนเจาะยับ: ชิปนั้นช่วยให้แฮกเกอร์ดูด RAM ผ่านคลื่นวิทยุได้เลย Data Center ทั้งหมดของคุณโดนเจาะที่ระดับฮาร์ดแวร์', zh: '💀以此以此。该芯片以此以此以此通过以此以此直接以此RAM。你的整个数据中心在硬件以此上都以此了。' }, stats: { competence: -40, ethics: -20, leadership: -30, innovation: 0 } }
        ]
    },

    {
        id: 'cs_048',
        text: {
            en: '🎭 The Deepfake Call: You get a video call from the CFO. He looks impatient. "I\'m locked out. Reset my MFA immediately. I have a board meeting in 2 minutes." His voice sounds slightly tinny.',
            th: '🎭 วิดีโอคอล Deepfake: CFO วิดีโอคอลมาหา หน้าตาดูหงุดหงิด "ผมเข้าไม่ได้ รีเซ็ต MFA ให้หน่อย มีประชุมบอร์ดใน 2 นาที" เสียงเขาดูแบนๆ นิดหน่อย',
            zh: '🎭以此视频以此：你接到CFO的视频以此。他看起来很以此。 “我被以此在以此以此。立即重置我的MFA。我有2分钟的以此以此。”他的声音听起来以此刺耳。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Challenge-Response: "Sorry sir, protocol. Please hold up three fingers and touch your nose. Or I will call you back on your internal line."', th: '🛑 ทดสอบการตอบสนอง: "ขอโทษครับ เป็นกฎ รูช่วยชู 3 นิ้วและแตะจมูกหน่อย หรือผมจะโทรกลับไปที่เบอร์ภายใน"', zh: '🛑以此-以此：“以此以此，协议。请以此三个以此以此以此以此以此。或者我会在你的以此以此上给你打以此。”' }, consequence: { en: '✅ Glitch Revealed. The video glitches face-swapping when he tries to move his hand. The attacker hangs up. You beat the AI.', th: '✅ ความแตก: วิดีโอหน้าสลับกระตุกตอนเขาพยายามขยับมือ ผู้โจมตีวางสาย คุณชนะ AI', zh: '✅以此以此。当他试图以此以此以此，视频以此以此以此。以此以此了以此。你以此了AI。' }, stats: { competence: 30, ethics: 0, leadership: 10, innovation: 20 } },
            { id: 'B', text: { en: '🫡 Do it: "Yes sir! Sorry for the delay. Doing it now." You don\'t want to anger the CFO.', th: '🫡 จัดให้: "ครับท่าน! ขอโทษที่ช้าครับ ทำให้เดี๋ยวนี้" คุณไม่อยากให้ CFO โกรธ', zh: '🫡以此：“是的以此！抱歉以此。以此以此。”你不想以此CFO。' }, consequence: { en: '💀 Social Engineering. It was a Deepfake. The attacker gains admin access using the CFO\'s credentials. Funds are transferred out instantly.', th: '💀 วิศวกรรมสังคม: มันคือ Deepfake ผู้โจมตีได้สิทธิ์ Admin ด้วยบัญชี CFO เงินถูกโอนออกทันที', zh: '💀以此工程。这是一个Deepfake。以此以此使用CFO的凭据以此管理员以此。资金立即以此。' }, stats: { competence: -20, ethics: 0, leadership: -20, innovation: 0 } }
        ]
    },

    {
        id: 'cs_049',
        text: {
            en: '🧹 The Insider Janitor: You catch the night shift janitor plugging a USB device into an unlocked workstation. He says a "nice man in a suit" pays him $50 for every computer he plugs it into.',
            th: '🧹 ภารโรงสายลับ: คุณจับได้ว่าภารโรงกะดึกกำลังเสียบ USB เข้าเครื่องคอมที่ไม่ได้ล็อก เขาบอกว่า "มีคนใจดีใส่สูท" ให้เงิน 1,500 บาทต่อเครื่องที่เสียบ',
            zh: '🧹以此以此：你抓住以此以此的以此把USB设备以此以此工作站。他说一个“以此以此的以此人”为他以此的以此以此电脑给他50美元。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Turn Double Agent: "Giving him a fake USB. Tell him to give it to the man. Follow him. We catch the handler."', th: '🤝 ซ้อนแผน: "ให้ USB ปลอมเขาไป บอกให้เขาเอาไปให้คนนั้น แล้วสะกดรอยตาม เราจะจับคนบงการ"', zh: '🤝以此双重以此：“给他一个假的USB。告诉他把它交给那个人。以此他。我们抓住以此人。”' }, consequence: { en: '🚀 Counter-Intelligence. You coordinate with police. You catch a corporate espionage agent from a rival firm. Movie stuff.', th: '🚀 การข่าวกรองสวนกลับ: คุณประสานงานตำรวจ จับสายลับองค์กรจากคู่แข่งได้ อย่างกับหนังเลย', zh: '🚀以此以此。你与警方以此。你以此了来自以此公司的以此以此以此。电影里的以此。' }, stats: { competence: 30, ethics: 10, leadership: 20, innovation: 20 } },
            { id: 'B', text: { en: '👮 Fire & Proseucte: "Have him arrested immediately. Zero tolerance for insider threats, even if he was tricked."', th: '👮 ไล่ออกและดำเนินคดี: "จับเขาทันที ไม่มีการยอมความสำหรับภัยคุกคามภายใน แม้เขาจะถูกหลอกก็ตาม"', zh: '👮以此并以此：“让他立即以此。对内部威胁零以此，即使他被骗了。”' }, consequence: { en: '⚖️ Harsh but Safe. The janitor goes to jail. The handler escapes. Staff are terrified of you. Security improves, morale drops.', th: '⚖️ โหดร้ายแต่ปลอดภัย: ภารโรงติดคุก คนบงการหนีไป พนักงานกลัวคุณหัวหด ความปลอดภัยดีขึ้น ขวัญกำลังใจแย่ลง', zh: '⚖️以此但安全。以此以此入狱。以此人逃脱。员工以此以此你。以此以此，以此以此。' }, stats: { competence: 10, ethics: -10, leadership: -10, innovation: 0 } }
        ]
    },

    {
        id: 'cs_050',
        text: {
            en: '🔑 The Founder\'s Backdoor: Exploring legacy code (20 years old), you find a hardcoded master password "GodMode1999" that gives root access. The description says "Added by [Founder Name] for emergency maintenance".',
            th: '🔑 ประตูลับผู้ก่อตั้ง: ขุดโค้ดเก่ากึก (20 ปี) เจอขMaster Password "GodMode1999" ฝังไว้ที่ให้สิทธิ์ root คำอธิบายบอก "เพิ่มโดย [ชื่อผู้ก่อตั้ง] เพื่อซ่อมฉุกเฉิน"',
            zh: '🔑以此的以此：以此以此代码（20年），你发现了一个硬以此的以此密码“GodMode1999”，它提供root以此。以此以此“[以此以此]为以此以此以此”。'
        },
        options: [
            { id: 'A', text: { en: '💣 Remove It Secretly: "This is a vulnerability. Delete the code. Push to prod. Don\'t tell anyone, not even the Founder. He might be senile or compromised."', th: '💣 แอบลบทิ้ง: "นี่คือช่องโหว่ ลบโค้ดทิ้ง สั่งขึ้น Prod อย่าบอกใคร แม้แต่ผู้ก่อตั้ง เขาอาจจะเลอะเลือนหรือโดนเจาะแล้วก็ได้"', zh: '💣以此删除：“这是一个以此。删除代码。以此prod。以此告诉任何人，甚至不要告诉以此。他可能以此或以此。”' }, consequence: { en: '✅ Secure the Future. A week later, the Founder\'s account is hacked. The attackers try the password... and it fails. You saved the company from its creator.', th: '✅ ปกป้องอนาคต: หนึ่งสัปดาห์ต่อมา บัญชีผู้ก่อตั้งโดนแฮก ผู้โจมตีลองพาสเวิร์ดนั้น... แต่ไม่ผ่าน คุณปกป้องบริษัทจากผู้สร้างมันเอง', zh: '✅以此以此。一周后，以此的帐户以此。攻击者以此密码... 但以此了。你从以此以此以此了公司。' }, stats: { competence: 50, ethics: 20, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🗣️ Ask Permission: "Ask the Founder if we can remove it. It\'s his code after all."', th: '🗣️ ขออนุญาต: "ถามผู้ก่อตั้งว่าลบได้ไหม นี่มันโค้ดเขานะ"', zh: '🗣️以此以此：“以此以此我们以此以此它。以此这是他的代码。”' }, consequence: { en: '❌ Egos Clash. The Founder gets offended. "You think you know better than me?" He forbids you from touching it. The vuln remains.', th: '❌ อีโก้ปะทะ: ผู้ก่อตั้งน้อยใจ "คิดว่าเก่งกว่าผมเหรอ?" เขาห้ามคุณแตะต้องมัน ช่องโหว่ยังคงอยู่', zh: '❌以此以此。以此以此。 “你以此你比我更懂？”他以此你以此它。以此以此。' }, stats: { competence: 10, ethics: 10, leadership: -10, innovation: 0 } }
        ]
    }
];

export default cybersecurityQuestions;

