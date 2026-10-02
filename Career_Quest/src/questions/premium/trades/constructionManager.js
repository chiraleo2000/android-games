export const constructionManagerQuestions = [
    {
        id: 'construction_001',
        text: {
            en: '🏗️ The Foundation Flaw: During a routine check of a skyscraper project, you notice the concrete mix for the foundation is slightly below grade. It passes the bare minimum code, but cracks could develop in 20 years. Re-pouring would cost millions and delay the project by 2 months.',
            th: '🏗️ รอยตำหนิที่ฐานราก: ระหว่างการตรวจสอบตึกระฟ้าตามปกติ คุณสังเกตเห็นว่าส่วนผสมคอนกรีตสำหรับฐานรากต่ำกว่าเกรดเล็กน้อย มันผ่านเกณฑ์ขั้นต่ำแต่รอยร้าวอาจเกิดขึ้นใน 20 ปี การเทใหม่จะใช้เงินหลายล้านและทำให้โครงการล่าช้าไป 2 เดือน',
            zh: '🏗️ 地基缺陷：在检查摩天大楼项目时，你发现地基的混凝土混合料略低于等级。它勉强通过了最低规范，但20年后可能会出现裂缝。重新浇筑将耗资数百万，并使项目推迟2个月。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Halt and Redo: "Tear it out. I won\'t put my name on a building that isn\'t 100%. Quality lasts longer than the schedule."',
                    th: '🛑 หยุดและทำใหม่: "รื้อออก ผมจะไม่เอาชื่อไปแปะบนตึกที่ไม่สมบูรณ์ 100% คุณภาพอยู่ยาวนานกว่ากำหนดการ"',
                    zh: '🛑 停工重做："拆掉它。我不会把名字挂在一座不是100%完美的建筑上。质量比工期更长久。"'
                },
                consequence: {
                    en: '📉 Budget Blow, Reputation Gold: The investors are furious at the delay. You lose your bonus. But 10 years later, you are known as the most reliable builder in the city.',
                    th: '📉 งบบานปลาย ชื่อเสียงดั่งทอง: นักลงทุนโกรธแค้นที่ล่าช้า คุณอดโบนัส แต่อีก 10 ปีต่อมา คุณเป็นที่รู้จักในฐานะผู้สร้างที่ไว้ใจได้ที่สุดในเมือง',
                    zh: '📉 预算超支，信誉如金：投资者对延误感到愤怒。你失去了奖金。但10年后，你被称为城市里最可靠的建筑商。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Stay Silent: "It meets code. Pour the next layer. We are already behind schedule, and technicalities shouldn\'t bankrup us."',
                    th: '🤫 เงียบไว้: "มันผ่านเกณฑ์ เทชั้นต่อไปเลย เราล่าช้าอยู่แล้ว และเรื่องทางเทคนิคไม่ควรทำให้เราล้มละลาย"',
                    zh: '🤫 保持沉默："符合规范。浇筑下一层。我们进度已经落后了，技术细节不应该让我们破产。"'
                },
                consequence: {
                    en: '⏱️ Ticking Time Bomb: The building goes up fast. You get promoted. But years later, reports of settling issues surface, and you live with the anxiety of a potential collapse.',
                    th: '⏱️ ระเบิดเวลา: ตึกสร้างเสร็จเร็ว คุณได้เลื่อนตำแหน่ง แต่หลายปีต่อมา รายงานเรื่องการทรุดตัวเริ่มโผล่ และคุณต้องอยู่กับความกังวลว่าตึกอาจถล่ม',
                    zh: '⏱️ 定时炸弹：大楼很快建成了。你升职了。但几年后，关于沉降问题的报告浮出水面，你生活在潜在倒塌的焦虑中。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🛠️ Reinforce Later: "Continue building, but I\'ll engineer a stronger structural support system for the upper levels to compensate for the base."',
                    th: '🛠️ เสริมแรงทีหลัง: "สร้างต่อ แต่ผมจะออกแบบระบบโครงสร้างรับน้ำหนักที่แข็งแรงกว่าสำหรับชั้นบนเพื่อชดเชยฐานราก"',
                    zh: '🛠️ 后期加固："继续建造，但我会为上层设计更强的结构支撑系统来弥补底部的不足。"'
                },
                consequence: {
                    en: '🧠 Smart Compromise: You save the schedule and ensure safety through engineering. It costs a bit more for steel, but solves the problem creatively.',
                    th: '🧠 การประนีประนอมที่ชาญฉลาด: คุณรักษาตารางเวลาและรับประกันความปลอดภัยผ่านวิศวกรรม เปลืองค่าเหล็กอีกนิด แต่แก้ปัญหาได้อย่างสร้างสรรค์',
                    zh: '🧠 明智的妥协：你保住了工期并通过工程手段确保了安全。钢材成本增加了一点，但创造性地解决了问题。'
                },
                stats: { competence: 45, ethics: 35, leadership: 35, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Blame the Supplier: "Sue the concrete company immediately. Halt work and make it their problem. We shouldn\'t pay for this."',
                    th: '💰 โทษซัพพลายเออร์: "ฟ้องบริษัทคอนกรีตทันที หยุดงานและโยนให้เป็นปัญหาของพวกเขา เราไม่ควรต้องจ่ายเรื่องนี้"',
                    zh: '💰 怪罪供应商："立即起诉混凝土公司。停工并让他们解决这个问题。我们不应该为此买单。"'
                },
                consequence: {
                    en: '⚖️ Legal deadlock: The project freezes for months in litigation. The site becomes an eyesore. Everyone loses money, and your project management is questioned.',
                    th: '⚖️ ทางตันทางกฎหมาย: โครงการหยุดชะงักหลายเดือนเพราะการฟ้องร้อง ไซต์งานกลายเป็นที่รกร้าง ทุกคนเสียเงิน และการบริหารโครงการของคุณถูกตั้งคำถาม',
                    zh: '⚖️ 法律僵局：项目因诉讼冻结数月。工地变得碍眼。每个人都赔了钱，你的项目管理能力受到质疑。'
                },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_002',
        text: {
            en: '👷 The Crew Mutiny: To meet a deadline, you\'ve ordered mandatory overtime for 3 weeks straight. The crew is exhausted and morale is dangerously low. The foreman warns that they might walk off the job tomorrow.',
            th: '👷 การกบฏของคนงาน: เพื่อให้ทันกำหนดส่ง คุณสั่งล่วงเวลาบังคับติดต่อกัน 3 สัปดาห์ คนงานเหนื่อยล้าและขวัญกำลังใจต่ำถึงขีดอันตราย หัวหน้าคนงานเตือนว่าพวกเขาอาจทิ้งงานพรุ่งนี้',
            zh: '👷 船员哗变：为了赶截止日期，你下令连续3周强制加班。工人们筋疲力尽，士气极其低落。工头警告说，他们明天可能会罢工。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🍖 The BBQ Morale Boost: "Stop work early today. I\'m buying steaks and beer for everyone. We rest tomorrow morning, then hit it hard."',
                    th: '🍖 บาร์บีคิวปลุกใจ: "เลิกงานเร็ววันนี้ ผมเลี้ยงสเต็กและเบียร์ทุกคน พรุ่งนี้เช้าพักผ่อน แล้วค่อยลุยหนักกันต่อ"',
                    zh: '🍖 烧烤士气提振："今天早点收工。我请大家吃牛排喝啤酒。明天早上休息，然后全力以赴。"'
                },
                consequence: {
                    en: '🤝 Leadership Win: The small break and gesture recharge the team. They see you care. Productivity actually increases despite fewer hours.',
                    th: '🤝 ชัยชนะของผู้นำ: การพักเล็กน้อยและการแสดงน้ำใจช่วยชาร์จพลังให้ทีม พวกเขาเห็นว่าคุณแคร์ ประสิทธิภาพงานเพิ่มขึ้นจริงทั้งที่ชั่วโมงงานน้อยลง',
                    zh: '🤝 领导力的胜利：短暂的休息和姿态让团队重新充满活力。他们看到你在乎。尽管工作时间减少，但生产力实际上提高了。'
                },
                stats: { competence: 35, ethics: 40, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '😡 Threaten Termination: "Anyone who walks off doesn\'t come back. There are a hundred guys waiting for this job. Get back to work!"',
                    th: '😡 ขู่ไล่ออก: "ใครทิ้งงานไม่ต้องกลับมา มีคนอีกร้อยคนรองานนี้อยู่ กลับไปทำงานซะ!"',
                    zh: '😡 威胁解雇："谁敢走就别回来。有一百个人等着这份工作呢。回去干活！"'
                },
                consequence: {
                    en: '🌑 Toxic Workplace: They stay out of fear, but sabotage the work in small ways. Quality drops, and you constantly watch your back. Turnover skyrockets after the project.',
                    th: '🌑 ที่ทำงานเป็นพิษ: พวกเขาอยู่เพราะกลัว แต่แอบทำลายงานเล็กๆ น้อยๆ คุณภาพลดลง และคุณต้องระวังหลังตลอดเวลา อัตราการลาออกพุ่งสูงหลังจบโครงการ',
                    zh: '🌑 糟糕的工作场所：他们因恐惧留下来，但在小处搞破坏。质量下降，你不得不时刻提防。项目结束后离职率飙升。'
                },
                stats: { competence: 20, ethics: 10, leadership: -10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📅 Extension Negotiation: "I\'ll call the client. I\'d rather pay the late penalty fee myself than kill my crew. We need an extra week."',
                    th: '📅 เจรจาต่อเวลา: "ผมจะโทรหาลูกค้า ผมยอมจ่ายค่าปรับล่าช้าเองดีกว่าฆ่าลูกน้องผม เราขอเวลาเพิ่มหนึ่งสัปดาห์"',
                    zh: '📅 延期谈判："我会给客户打电话。我宁愿自己支付逾期罚款也不愿累死我的手下。我们需要多一个星期。"'
                },
                consequence: {
                    en: '🛡️ Protective Leader: The client is annoyed, but respects your honesty. The crew respects you immensely for taking the hit for them. Long-term loyalty secured.',
                    th: '🛡️ ผู้นำผู้ปกป้อง: ลูกค้ารำคาญ แต่เคารพความซื่อสัตย์ของคุณ ทีมงานเคารพคุณมากที่คุณยอมรับผิดแทนพวกเขา ได้ใจกันยาวๆ',
                    zh: '🛡️ 保护型领导：客户很恼火，但尊重你的诚实。团队非常尊重你为他们顶雷。赢得了长期的忠诚。'
                },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '💵 Bonus Incentives: "Double time for the next week. Cash bonuses for finishing on time. Money talks."',
                    th: '💵 โบนัสจูงใจ: "เบิ้ลค่าแรงสัปดาห์หน้า โบนัสเงินสดถ้าเสร็จทันเวลา เงินคือคำตอบ"',
                    zh: '💵 奖金激励："下周双倍工资。按时完工有现金奖金。钱能通神。"'
                },
                consequence: {
                    en: '💸 Costly Speed: The budget takes a hit, but the work gets done fast. Note that this sets a precedent; they will expect this every time.',
                    th: '💸 ความเร็วราคาแพง: งบประมาณกระทบ แต่งานเสร็จเร็ว จำไว้ว่านี่เป็นการสร้างบรรทัดฐาน พวกเขาจะคาดหวังแบบนี้ทุกครั้ง',
                    zh: '💸 昂贵的速度：预算受到打击，但工作很快完成了。注意这开了个先例；他们以后每次都会这样期待。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_003',
        text: {
            en: '🌳 The Ancient Tree: Site clearing has begun, but you discover a massive, ancient oak tree right in the middle of the planned main entrance. It\'s likely hundreds of years old but not legally protected.',
            th: '🌳 ต้นไม้โบราณ: การเคลียร์พื้นที่เริ่มขึ้นแล้ว แต่คุณพบต้นโอ๊กโบราณขนาดมหึมาอยู่ตรงกลางทางเข้าหลักที่วางแผนไว้ มันน่าจะมีอายุหลายร้อยปีแต่ไม่ได้รับความคุ้มครองตามกฎหมาย',
            zh: '🌳 古树：场地清理已经开始，但你发现在计划的主入口正中央有一棵巨大的古橡树。它可能有几百年的历史，但在法律上不受保护。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🪓 Cut It Down: "It\'s in the way. We have a blueprint, and changing it now costs too much. Timber!"',
                    th: '🪓 ตัดมันทิ้ง: "มันขวางทาง เรามีแบบแปลนแล้ว และการแก้ตอนนี้แพงเกินไป โค่นมันลง!"',
                    zh: '🪓 砍掉它："它挡路了。我们有蓝图，现在更改成本太高。砍倒它！"'
                },
                consequence: {
                    en: '🏢 Efficient but Soulless: The project proceeds on schedule. However, locals protest, and the building feels sterile. Opportunity for unique character lost.',
                    th: '🏢 มีประสิทธิภาพแต่ไร้วิญญาณ: โครงการดำเนินไปตามกำหนด อย่างไรก็ตาม ชาวบ้านประท้วง และตึกดูแห้งแล้ง โอกาสที่จะมีเอกลักษณ์เฉพาะตัวหายไป',
                    zh: '🏢 高效但没有灵魂：项目按计划进行。然而，当地人抗议，建筑感觉毫无生气。失去了独特个性的机会。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Redesign Entrance: "We move the entrance. We build AROUND the tree. Make it the centerpiece of the lobby courtyard."',
                    th: '🔄 ออกแบบทางเข้าใหม่: "เราย้ายทางเข้า เราจะสร้างล้อมรอบต้นไม้ ให้มันเป็นจุดเด่นของลานล็อบบี้"',
                    zh: '🔄 重新设计入口："我们移动入口。我们绕着树建。让它成为大堂庭院的中心装饰。"'
                },
                consequence: {
                    en: '🌟 Architectural Marvel: The redesign wins awards for sustainability. Tenants love the "nature-integrated" feel. Value of the property skyrockets.',
                    th: '🌟 สิ่งมหัศจรรย์ทางสถาปัตยกรรม: การออกแบบใหม่ได้รับรางวัลด้านความยั่งยืน ผู้เช่าชอบความรู้สึก "ผสมผสานธรรมชาติ" มูลค่าทรัพย์สินพุ่งสูง',
                    zh: '🌟 建筑奇迹：重新设计赢得了可持续发展奖项。租户喜欢这种"自然融合"的感觉。房产价值飙升。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🚜 Replant It: "Hire specialists to dig it up and move it to the corner of the lot. Expensive, but we keep the tree and the design."',
                    th: '🚜 ย้ายไปปลูกใหม่: "จ้างผู้เชี่ยวชาญขุดและย้ายไปไว้มุมที่ดิน แพงหน่อย แต่เรารักษาทั้งต้นไม้และแบบแปลนไว้ได้"',
                    zh: '🚜 重新种植："聘请专家把它挖出来移到地段的角落。很贵，但我们保留了树和设计。"'
                },
                consequence: {
                    en: '💸 Risky Gamble: It costs a fortune. The tree survives the move but looks sickly for years. You tried to please everyone but strained the budget.',
                    th: '💸 การพนันที่เสี่ยง: ใช้เงินมหาศาล ต้นไม้รอดจากการย้ายแต่ดูโทรมไปหลายปี คุณพยายามเอาใจทุกคนแต่งบประมาณตึงตัว',
                    zh: '💸 冒险的赌博：这花了一大笔钱。这棵树虽然活下来了，但几年里看起来都病恹恹的。你试图取悦每个人，但让预算紧张。'
                },
                stats: { competence: 30, ethics: 30, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🤥 Nighttime Accident: "Oops, the bulldozer slipped at night. Terrible accident. Clear the debris by morning."',
                    th: '🤥 อุบัติเหตุยามวิกาล: "อุ๊ย รถปราบดินไถลตอนกลางคืน อุบัติเหตุร้ายแรง เคลียร์เศษซากให้เสร็จก่อนเช้า"',
                    zh: '🤥 夜间事故："哎呀，推土机晚上滑坡了。可怕的事故。早上之前清理好碎片。"'
                },
                consequence: {
                    en: '🕵️ Public Scandal: No one believes it was an accident. The press investigates. You are fined for environmental negligence and look shady.',
                    th: '🕵️ เรื่องอื้อฉาวสาธารณะ: ไม่มีใครเชื่อว่าเป็นอุบัติเหตุ สื่อเข้ามาสอบสวน คุณถูกปรับฐานละเลยสิ่งแวดล้อมและดูมีลับลมคมใน',
                    zh: '🕵️ 公众丑闻：没人相信那是意外。媒体进行调查。你因环境疏忽被罚款，而且看起来很阴暗。'
                }
            }
        ]
    },
    {
        id: 'construction_004',
        text: {
            en: '👷‍♀️ The Experienced Hire vs. The Nepotism Kid: You need a new site supervisor. Candidate A is a woman with 15 years of experience and stellar references. Candidate B is the client\'s nephew, fresh out of college with zero experience, but the client has hinted that hiring him would "grease the wheels" on future contracts.',
            th: '👷‍♀️ การจ้างงานผู้มีประสบการณ์ vs. เด็กเส้น: คุณต้องการหัวหน้างานไซต์คนใหม่ ผู้สมัคร A เป็นผู้หญิงที่มีประสบการณ์ 15 ปีและมีหนังสือรับรองที่ยอดเยี่ยม ผู้สมัคร B เป็นหลานชายของลูกค้า เพิ่งจบใหม่ไม่มีประสบการณ์ แต่ลูกค้าเปรยว่าการจ้างเขาจะช่วยให้สัญญาในอนาคต "ราบรื่น"',
            zh: '👷‍♀️ 经验丰富的雇员 vs. 裙带关系的小子：你需要一名新的现场主管。候选人 A 是一名拥有 15 年经验且拥有出色推荐信的女性。候选人 B 是客户的侄子，刚大学毕业，没有任何经验，但客户暗示雇用他将使未来的合同"顺风顺水"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👩‍t Hire the Pro: "I need competence, not connections. Hire Candidate A. We build buildings, we don\'t babysit."',
                    th: '👩‍t จ้างมืออาชีพ: "ผมต้องการความสามารถ ไม่ใช่เส้นสาย จ้างผู้สมัคร A เราสร้างตึก ไม่ได้รับเลี้ยงเด็ก"',
                    zh: '👩‍t 聘请专业人士："我需要能力，而不是关系。聘请候选人 A。我们是在盖楼，不是在保姆。"'
                },
                consequence: {
                    en: '📈 Efficiency Spike: She is amazing. The project finishes 2 weeks early. The client is initially cold, but the results shut him up. You gain a reputation for meritocracy.',
                    th: '📈 ประสิทธิภาพพุ่ง: เธอสุดยอดมาก โครงการเสร็จก่อนกำหนด 2 สัปดาห์ ลูกค้าตอนแรกเย็นชา แต่ผลงานทำให้เขาเงียบ คุณได้รับชื่อเสียงด้านระบบคุณธรรม',
                    zh: '📈 效率激增：她太棒了。项目提前 2 周完工。客户一开始很冷淡，但结果让他闭嘴了。你赢得了任人唯贤的名声。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '👶 Hire the Nephew: "Welcome aboard, kid. Put him in a role with a fancy title but no real power. Let the assistant foreman do the actual work."',
                    th: '👶 จ้างหลานชาย: "ยินดีต้อนรับไอ้หนู ให้เขาทำงานตำแหน่งชื่อหรูๆ แต่ไม่มีอำนาจจริง ให้ผู้ช่วยหัวหน้างานทำงานจริงแทน"',
                    zh: '👶 聘请侄子："欢迎加入，孩子。给他安排一个头衔好听但没有实权的职位。让副工头干实际的活。"'
                },
                consequence: {
                    en: '🤝 Political Gain, Operational Drag: The client is thrilled and awards you a massive new contract. But the nephew is annoying and demoralizes the crew. You traded culture for cash.',
                    th: '🤝 ได้กำไรทางการเมือง, การดำเนินงานถ่วง: ลูกค้าปลื้มและมอบสัญญาใหญ่ใหม่ให้คุณ แต่หลานชายทำตัวน่ารำคาญและทำลายขวัญกำลังใจทีมงาน คุณแลกวัฒนธรรมองค์กรกับเงิน',
                    zh: '🤝 政治收益，运营拖累：客户很高兴，并给了你一份巨额新合同。但这个侄子很烦人，让团队士气低落。你用文化换取了现金。'
                },
                stats: { competence: 10, ethics: -20, leadership: -10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ The Compromise: "Hire Candidate A as Supervisor and Create a \'Junior Assistant\' role for the nephew. mentor him properly."',
                    th: '⚖️ การประนีประนอม: "จ้างผู้สมัคร A เป็นหัวหน้างานและสร้างตำแหน่ง \'ผู้ช่วยจูเนียร์\' ให้หลานชาย สอนงานเขาอย่างถูกต้อง"',
                    zh: '⚖️ 妥协："聘请候选人 A 担任主管，并未那个侄子设立一个‘初级助理’职位。好好指导他。"'
                },
                consequence: {
                    en: '💰 Expensive Harmony: You have to pay two salaries for one job. Margins are thinner. But the nephew actually learns from the pro, and the client is happy. Everyone wins, mostly.',
                    th: '💰 ความกลมเกลียวราคาแพง: คุณต้องจ่ายเงินเดือนสองคนสำหรับงานเดียว กำไรบางลง แต่หลานชายได้เรียนรู้จากมืออาชีพจริงๆ และลูกค้าก็พอใจ วิน-วินกันเกือบทุกคน',
                    zh: '💰 昂贵的和谐：你必须为一份工作支付两份薪水。利润率变薄了。但侄子实际上从专业人士那里学到了东西，客户也很高兴。皆大欢喜，基本上是。'
                },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🤥 The Fake Rejection: "Tell the client his nephew is \'overqualified\' and should pursue finance. Hire A secretly."',
                    th: '🤥 การปฏิเสธปลอมๆ: "บอกลูกค้าว่าหลานชายของเขา \'คุณสมบัติสูงเกินไป\' และควรไปทำงานสายการเงิน จ้าง A แบบลับๆ"',
                    zh: '🤥 虚假拒绝："告诉客户他的侄子‘资历过高’，应该去搞金融。秘密聘请 A。"'
                },
                consequence: {
                    en: '🔥 Backfire: The nephew finds out on LinkedIn. The client feels insulted by your lie and pulls the next contract. You lose big.',
                    th: '🔥 ผลย้อนกลับ: หลานชายรู้เรื่องใน LinkedIn ลูกค้ารู้สึกถูกดูถูกด้วยคำโกหกของคุณและถอนสัญญาถัดไป คุณเสียหายหนัก',
                    zh: '🔥 事与愿违：侄子在 LinkedIn 上发现了。客户觉得被你的谎言侮辱了，撤回了下一份合同。你损失惨重。'
                },
                stats: { competence: 10, ethics: -30, leadership: -20, innovation: 10 }
            }
        ]
    },
    {
        id: 'construction_005',
        text: {
            en: '🏚️ The Asbestos Surprise: During renovation of a historic school, your team smashes a wall and finds a layer of material that looks suspiciously like asbestos. Halting for tests takes a week. ignoring it keeps you on schedule for the school opening in September.',
            th: '🏚️ เซอร์ไพรส์แร่ใยหิน: ระหว่างการปรับปรุงโรงเรียนเก่าแก ทีมของคุณทุบผนังและเจอชั้นวัสดุที่ดูน่าสงสัยเหมือนแร่ใยหิน การหยุดเพื่อทดสอบใช้เวลาหนึ่งสัปดาห์ การเมินมันจะทำให้คุณทันกำหนดการเปิดเทอมในเดือนกันยายน',
            zh: '🏚️ 石棉惊魂：在翻修一所历史悠久的学校时，你的团队砸了一堵墙，发现一层看起来非常像石棉的材料。停工检测需要一周。忽视它可以让你按时赶上九月份的开学。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧪 Halt and Test: "Everyone out! Seal the room. Call the hazmat lab. I don\'t care if school opens late, I\'m not poisoning kids."',
                    th: '🧪 หยุดและทดสอบ: "ทุกคนออกไป! ปิดผนึกห้อง โทรหาห้องแล็บวัตถุอันตราย ผมไม่สนว่าโรงเรียนจะเปิดช้า ผมจะไม่วางยาพิษเด็กๆ"',
                    zh: '🧪 停工检测："所有人出去！封锁房间。打电话给危化品实验室。我不在这乎学校是否晚开学，我不能毒害孩子。"'
                },
                consequence: {
                    en: '🛡️ Safety Champion: It WAS asbestos. You delayed the opening, and parents are annoyed, but the school board thanks you for avoiding a massive lawsuit and health crisis.',
                    th: '🛡️ แชมป์ความปลอดภัย: มันคือแร่ใยหินจริงๆ คุณทำให้โรงเรียนเปิดช้า และผู้ปกครองหงุดหงิด แต่คณะกรรมการโรงเรียนขอบคุณคุณที่ช่วยเลี่ยงการฟ้องร้องครั้งใหญ่และวิกฤตสุขภาพ',
                    zh: '🛡️ 安全卫士：确实是石棉。你推迟了开学，家长们很恼火，但校董会感谢你避免了一场巨大的诉讼和健康危机。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '😷 The Quiet Cleanup: "Issue N95 masks to the crew. Wet it down so dust doesn\'t fly. Bag it and bury it. Don\'t log it."',
                    th: '😷 การทำความสะอาดแบบเงียบๆ: "แจกหน้ากาก N95 ให้ลูกน้อง พรมน้ำอย่าให้ฝุ่นฟุ้ง ใส่ถุงแล้วฝัง อย่าบันทึกลงในรายงาน"',
                    zh: '😷 悄悄清理："给工人们发 N95 口罩。把它弄湿，别让粉尘飞扬。装袋掩埋。不要记录。"'
                },
                consequence: {
                    en: '🚑 Future Lawsuit: Ten years later, a teacher gets mesothelioma. Records show you renovated that room. You are sued for millions and face jail time.',
                    th: '🚑 การฟ้องร้องในอนาคต: สิบปีต่อมา ครูคนหนึ่งเป็นมะเร็งเยื่อหุ้มปอด บันทึกแสดงว่าคุณปรับปรุงห้องนั้น คุณถูกฟ้องเรียกค่าเสียหายหลายล้านและเผชิญโทษจำคุก',
                    zh: '🚑 未来的诉讼：十年后，一位老师得了间皮瘤。记录显示你翻修了那个房间。你被起诉索赔数百万，并面临牢狱之灾。'
                },
                stats: { competence: -10, ethics: -50, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🏗️ Encapsulate It: "Don\'t disturb it. Build a sealed false wall over it. It\'s legal to leave it if it\'s contained. Keep moving."',
                    th: '🏗️ หุ้มมันไว้: "อย่าไปยุ่งกับมัน สร้างผนังปลอมปิดทับแบบผนึกสนิท มันถูกกฎหมายที่จะทิ้งมันไว้ถ้ามันถูกกักเก็บ ไปต่อเลย"',
                    zh: '🏗️ 封装它："别动它。在上面建一堵密封的假墙。如果它被封存，把它留在那里是合法的。继续干活。"'
                },
                consequence: {
                    en: '🧠 Valid Solution: It saves time and money, and it is technically legal. However, if that wall ever gets drilled into, it\'s a problem. A risky but efficient fix.',
                    th: '🧠 วิธีแก้ปัญหาที่ใช้ได้: ประหยัดเวลาและเงิน และถูกต้องตามหลักเทคนิค อย่างไรก็ตาม ถ้าผนังนั้นถูกเจาะเมื่อไหร่ เป็นเรื่องแน่ การแก้ไขที่เสี่ยงแต่มีประสิทธิภาพ',
                    zh: '🧠 有效的解决方案：既省时又省钱，而且在技术上是合法的。但是，如果那堵墙被钻穿，那就麻烦了。这是一个有风险但在效率上可行的修复方案。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Ignore It: "Probably just plaster. Smash it down. If no one asks, don\'t tell."',
                    th: '🤷 เมินมันซะ: "คงเป็นแค่ปูนปลาสเตอร์ ทุบมันเลย ถ้าไม่มีใครถาม ก็ไม่ต้องบอก"',
                    zh: '🤷 无视它："可能只是石膏。砸了它。如果没人问，就别说。"'
                },
                consequence: {
                    en: '🤢 Immediate Illness: The dust spreads through the vents. Workers start coughing blood. The site is condemned. Your career is over instantly.',
                    th: '🤢 เจ็บป่วยทันที: ฝุ่นกระจายไปตามท่อระบายอากาศ คนงานเริ่มไอเป็นเลือด ไซต์งานถูกสั่งปิด อาชีพของคุณจบลงทันที',
                    zh: '🤢 立即患病：粉尘通过通风口扩散。工人们开始咳血。工地被查封。你的职业生涯瞬间结束。'
                },
                stats: { competence: -30, ethics: -50, leadership: -50, innovation: -10 }
            }
        ]
    },
    {
        id: 'construction_006',
        text: {
            en: '🌧️ The Mud Slide: Heavy rains have turned your site into a swamp. A delivery truck with steel beams is stuck in the mud, blocking the only access road. A crane is needed to pull it out, but the ground is too soft to support the crane\'s outriggers safely.',
            th: '🌧️ โคลนถล่ม: ฝนตกหนักทำให้ไซต์งานของคุณกลายเป็นหนองน้ำ รถบรรทุกคานเหล็กติดหล่ม ขวางทางเข้าออกเดียวที่มี ต้องใช้เครนดึงออก แต่พื้นดินนิ่มเกินไปที่จะรองรับขาหยั่งของเครนได้อย่างปลอดภัย',
            zh: '🌧️ 泥石流：大雨把你的工地变成了沼泽。一辆装有钢梁的送货卡车陷在泥里，堵住了唯一的通道。需要起重机把它拉出来，但地面太软，无法安全支撑起重机的支腿。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚧 Build a Mat: "Delay operations. Get timber mats and steel plates to build a stable platform for the crane. Safety first, even if it takes all day."',
                    th: '🚧 สร้างฐานรอง: "ชะลอการทำงาน เอาแผ่นไม้และแผ่นเหล็กมาสร้างฐานที่มั่นคงสำหรับเครน ปลอดภัยไว้ก่อน แม้จะต้องใช้เวลาทั้งวัน"',
                    zh: '🚧 搭建垫层："暂停作业。弄些木垫和钢板来为起重机搭建一个稳定的平台。安全第一，即使这要花上一整天。"'
                },
                consequence: {
                    en: '🐢 Slow but Sure: You lose a day of work, but the truck is recovered safely without damaging the equipment or hurting anyone. The owner commends your caution.',
                    th: '🐢 ช้าแต่ชัวร์: คุณเสียเวลาทำงานไปหนึ่งวัน แต่กู้รถบรรทุกได้อย่างปลอดภัยโดยอุปกรณ์ไม่เสียหายและไม่มีใครเจ็บตัว เจ้าของชื่นชมความระมัดระวังของคุณ',
                    zh: '🐢 慢但稳妥：你损失了一天的工作，但卡车被安全回收，没有损坏设备或伤到任何人。业主称赞你的谨慎。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚜 Use Bulldozers: "Hook two bulldozers to it and drag it out by force. It might damage the undercarriage, but we need that road open NOW."',
                    th: '🚜 ใช้รถปราบดิน: "เอารถปราบดินสองคันมาเกี่ยวแล้วลากมันออกมาเลย ช่วงล่างอาจพัง แต่เราต้องการเปิดทางเดี๋ยวนี้"',
                    zh: '🚜 使用推土机："把两台推土机挂上去，强行把它拖出来。可能会损坏底盘，但我们现在必须打通那条路。"'
                },
                consequence: {
                    en: '💥 Snap and Break: The chain snaps, whipping back and smashing the truck\'s windshield. The driver is shaken. The truck axle is bent. You cleared the road but caused $20k in damage.',
                    th: '💥 ขาดและพัง: โซ่ขาด ดีดกลับมาฟาดกระจกหน้ารถบรรทุกแตก คนขับขวัญเสีย เพลารถบรรทุกงอ คุณเคลียร์ทางได้แต่ก่อความเสียหาย 20,000 ดอลลาร์',
                    zh: '💥 断裂破碎：链条断了，抽回来砸碎了卡车的挡风玻璃。司机吓坏了。卡车车轴弯了。你清理了道路，但造成了 2 万美元的损失。'
                },
                stats: { competence: 30, ethics: 0, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🏗️ Risk the Crane: "Put some plywood down and try the crane anyway. If the operator is good, he can balance it."',
                    th: '🏗️ เสี่ยงใช้เครน: "เอาไม้อัดวางรองแล้วลองใช้เครนดู ถ้าคนขับเก่ง เขาคงทรงตัวได้"',
                    zh: '🏗️ 冒险用起重机："在下面垫点胶合板，不管怎样试着用起重机。如果操作员技术好，他能保持平衡。"'
                },
                consequence: {
                    en: '📉 Toppling Terror: The ground gives way. The crane tips over, crushing the delivery truck. Miraculously no one dies, but the site is shut down for months of OSHA investigation.',
                    th: '📉 ความน่ากลัวของการล้มคว่ำ: พื้นดินยุบตัว เครนล้มทับรถบรรทุก ปาฏิหาริย์ที่ไม่มีใครตาย แต่ไซต์งานถูกสั่งปิดหลายเดือนเพื่อสอบสวนโดย OSHA',
                    zh: '📉 倾以此之恐：地面塌陷。起重机翻倒，压碎了送货卡车。奇迹般地没有人死亡，但工地因职业安全与健康管理局（OSHA）的调查而关闭了数月。'
                },
                stats: { competence: -20, ethics: -40, leadership: -30, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '📦 Unload Here: "Unload the beams right there in the mud. We\'ll carry them by hand or forklift later. Just get the clear truck out."',
                    th: '📦 ลงของตรงนี้: "ลงคานเหล็กตรงโคลนนั่นแหละ เดี๋ยวเราค่อยใช้มือคนหรือรถยกขนไปทีหลัง เอาแค่รถบรรทุกออกไปให้พ้นก็พอ"',
                    zh: '📦 就地卸货："就把梁卸在泥里。也就是我们稍后用手搬或用叉车运。先把空车弄出去。"'
                },
                consequence: {
                    en: '🤔 Messy Solution: The beams get caked in mud and rust, requiring expensive acid cleaning later. The driver gets out, but your materials look like trash.',
                    th: '🤔 วิธีแก้ที่เลอะเทอะ: คานเหล็กเปรอะโคลนและสนิมเกาะ ต้องมาล้างด้วยกรดราคาแพงทีหลัง คนขับรอดไปได้ แต่วัสดุของคุณดูเหมือนขยะ',
                    zh: '🤔 脏乱的解决方案：梁上结满了泥且生锈了，通过后来需要昂贵的酸洗。司机出去了，但你的材料看起来像垃圾。'
                },
                stats: { competence: 20, ethics: 20, leadership: 20, innovation: 20 }
            }
        ]
    },
    {
        id: 'construction_007',
        text: {
            en: '📜 The Permit Hell: You are ready to start electrical rough-in, but the city permit hasn\'t been approved yet due to a clerical error at City Hall. Your electrician sub-contractor is here with 20 guys. If they don\'t work today, they move to another job for 3 weeks.',
            th: '📜 นรกใบอนุญาต: คุณพร้อมที่จะเริ่มงานเดินสายไฟแล้ว แต่ใบอนุญาตจากเมืองยังไม่ได้รับอนุมัติเนื่องจากความผิดพลาดทางธุรการที่ศาลากลาง ผู้รับเหมาช่วงช่างไฟของคุณมาพร้อมกับลูกน้อง 20 คน ถ้าพวกเขาไม่ได้ทำวันนี้ พวกเขาจะย้ายไปงานอื่น 3 สัปดาห์',
            zh: '📜 许可证地狱：你准备好了开始电气粗加工，但由于市政厅的文书错误，城市许可证尚未获批。你的电工分包商带着 20 个人在这里。如果他们今天不干活，他们就会去另一个工地干 3 个星期。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏃 Start Anyway: "It\'s a clerical error. The paperwork will catch up. Start pulling wire. I\'ll distract the inspector if he shows up."',
                    th: '🏃 เริ่มไปก่อนเลย: "มันเป็นความผิดพลาดทางเอกสาร เดี๋ยวเอกสารก็ตามมาเอง เริ่มดึงสายไฟเลย ผมจะเบี่ยงเบนความสนใจผู้ตรวจสอบเองถ้าเขาโผล่มา"',
                    zh: '🏃 不管怎樣先开始："这是文书错误。文件后续会补上的。开始拉线。如果检查员来了，以此引开他。"'
                },
                consequence: {
                    en: '🎰 Lucky Break: You finish the rough-in. The permit arrives 2 days later. No one noticed. You saved the schedule, but you sweat bullets the whole time.',
                    th: '🎰 โชคเข้าข้าง: คุณทำงานเดินสายเสร็จ ใบอนุญาตมาถึงในอีก 2 วัน ไม่มีใครสังเกตเห็น คุณรักษาตารางเวลาไว้ได้ แต่คุณเหงื่อตกตลอดเวลา',
                    zh: '🎰 幸运时刻：你完成了粗加工。许可证 2 天后到了。没人注意。保住了工期，但这期间你一直提心吊胆。'
                },
                stats: { competence: 30, ethics: -20, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Send Them Home: "I can\'t let you work without the permit on site. It\'s illegal. Go to the other job. We\'ll adjust our schedule."',
                    th: '🛑 ส่งพวกเขากลับ: "ผมให้คุณทำงานไม่ได้ถ้าไม่มีใบอนุญาตที่หน้างาน มันผิดกฎหมาย ไปทำงานอื่นเถอะ เราจะปรับตารางของเราเอง"',
                    zh: '🛑 让他们回家："现场没有许可证我不能让你们干活。这是违法的。去另一个工地吧。我们会调整我们的时间表。"'
                },
                consequence: {
                    en: '📅 Painful Integrity: The 3-week delay hurts badly. Other trades are blocked. But the Fire Marshal visits randomly and praises your adherence to protocol.',
                    th: '📅 ความซื่อสัตย์ที่เจ็บปวด: ความล่าช้า 3 สัปดาห์เจ็บปวดมาก ชางงานระบบอื่นก็ชะงัก แต่เจ้าหน้าที่ดับเพลิงมาตรวจสุ่มและชื่นชมที่คุณเคร่งครัดตามระเบียบ',
                    zh: '📅 痛苦的诚信：3 周的延误造成了严重伤害。其他工种受阻。但消防局长随机视察时称赞你遵守协议。'
                },
                stats: { competence: 20, ethics: 50, leadership: 20, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🏢 City Hall Sit-In: "Guys, wait in the truck. I\'m driving to City Hall and I\'m not leaving until I get that stamp. Give me 2 hours."',
                    th: '🏢 ประท้วงที่ศาลากลาง: "พวกนายรอในรถ ผมจะขับไปศาลากลางและจะไม่กลับจนกว่าจะได้ตราประนั่นท ให้เวลาผม 2 ชั่วโมง"',
                    zh: '🏢 市政厅静坐："伙计们，在车里等着。我开车去市政厅，拿不到那个章我就不走。给我 2 个小时。"'
                },
                consequence: {
                    en: '🦸 Action Hero: You annoy the clerks but get the stamp manually. You rush back. The crew works a half-day. You saved the project with sheer sheer persistence.',
                    th: '🦸 แอ็คชั่นฮีโร่: คุณทำเสมียนรำคาญแต่ก็ได้ตราประทับมาด้วยมือ คุณรีบซิ่งกลับมา ทีมงานได้ทำครึ่งวัน คุณกู้โครงการด้วยความตื้อล้วนๆ',
                    zh: '🦸 行动英雄：你惹恼了文员，但手动搞到了章。你赶回来。团队干了半天活。你凭纯粹的毅力挽救了项目。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🧹 Alternative Work: "You can\'t do electrical, but can you guy\'s help clean up and organize materials for cash? Stay busy while I call."',
                    th: '🧹 งานทางเลือก: "คุณทำไฟไม่ได้ แต่พวกคุณช่วยทำความสะอาดและจัดระเบียบวัสดุแลกเงินสดได้มั้ย? หาอะไรทำไปก่อนระหว่างผมโทรศัพท์"',
                    zh: '🧹 替代工作："你们不能干电气活，但你们能帮忙清理和整理材料赚点现金吗？在我打电话的时候别闲着。"'
                },
                consequence: {
                    en: '💵 Expensive Cleaning: You pay skilled electricians electrician rates to sweep floors. It keeps them on site, but burns budget fast. A partial win.',
                    th: '💵 การทำความสะอาดราคาแพง: คุณจ่ายค่าแรงช่างไฟทักษะสูงในอัตราผู้เชี่ยวชาญเพื่อมากวาดพื้น มันรั้งพวกเขาไว้ที่ไซต์ได้ แต่ผลาญงบเร็วมาก ชนะครึ่งเดียว',
                    zh: '💵 昂贵的清洁：你付熟练电工的钱去扫地。这让他们留在了现场，但预算烧得很快。算是局部胜利。'
                },
                stats: { competence: 30, ethics: 40, leadership: 30, innovation: 30 }
            }
        ]
    },
    {
        id: 'construction_008',
        text: {
            en: '🥪 The Food Truck Fight: A popular food truck parks inside your site gates every lunch, feeding your crew well. However, the site owner hates the "low class" look and demands you ban it. The crew loves the cheap, hot food and threatens to extend lunch breaks if they have to walk to restaurants.',
            th: '🥪 ศึกรถขายอาหาร: รถขายอาหารยอดนิยมมาจอดในเขตไซต์งานของคุณทุกพักเที่ยง เลี้ยงดูทีมงานของคุณอย่างดี อย่างไรก็ตาม เจ้าของไซต์เกลียดลุค "โลว์คลาส" และสั่งให้คุณแบนมัน ทีมงานชอบอาหารร้อนๆ ราคาถูกและขู่ว่าจะพักเที่ยงนานขึ้นถ้าต้องเดินไปร้านอาหาร',
            zh: '🥪 餐车之争：一辆很受欢迎的流动餐车每天午餐时间都停在你的工地大门里，把你的工人们喂得饱饱的。然而，工地业主讨厌这种"低级"的样子，要求你禁止它。工人们喜欢便宜热乎的食物，并威胁说如果必须走到餐馆去，就要延长午休时间。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚚 Ban the Truck: "Owner\'s orders. Get out. Crew, bring your own lunch or walk fast. I don\'t make the rules."',
                    th: '🚚 แบนรถ: "คำสั่งเจ้าของ ออกไปเลย พวกนายเตรียมข้าวมาเองหรือเดินเร็วๆ ผมไม่ได้เป็นคนออกกฎ"',
                    zh: '🚚 禁止餐车："业主的命令。出去。工人们，自己带午饭或者是走快点。规矩不是我定的。"'
                },
                consequence: {
                    en: '😠 Hunger Strike: Morale plummets. Workers return late from lunch every day. Productivity drops in the afternoon due to hangry workers.',
                    th: '😠 ประท้วงความหิว: ขวัญกำลังใจดิ่งลงเหว คนงานกลับจากพักเที่ยงสายทุกวัน ประสิทธิภาพช่วงบ่ายลดลงเพราะคนงานโมโหหิว',
                    zh: '😠 绝食抗议：士气骤降。工人们每天午休回来都迟到。下午因工人又饿又气，生产力下降。'
                },
                stats: { competence: 20, ethics: 10, leadership: -20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🎨 Make it Classy: "Tell the truck to paint his van and clean up. Build a designated \'eating zone\' with trellis to hide it from the owner."',
                    th: '🎨 ทำให้ดูดีมีระดับ: "บอกให้รถทำสีใหม่และทำความสะอาด สร้าง \'โซนกินข้าว\' เฉพาะที่มีระแนงบังตาเพื่อซ่อนจากเจ้าของ"',
                    zh: '🎨 上档次："告诉餐车把车漆一下，打扫干净。建一个专门的带有格架的‘就餐区’，把餐车藏起来不让业主看到。"'
                },
                consequence: {
                    en: '🧠 Creative Win: The owner sees the neat eating area and approves. The crew keeps their food. The truck driver is happy with the upgrade. Problem solved.',
                    th: '🧠 ชัยชนะที่สร้างสรรค์: เจ้าของเห็นพื้นที่กินข้าวที่เป็นระเบียบและอนุมัติ ทีมงานยังมีของกิน คนขับรถแฮปปี้กับการอัปเกรด แก้ปัญหาจบสวย',
                    zh: '🧠 创意胜利：业主看到整洁的就餐区后批准了。工人们保留了食物。餐车司机对升级很高兴。问题解决了。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ Defend the Truck: "Tell the owner: \'This truck is the fuel for your building. If it goes, we lose 5 man-hours a day. It stays.\'"',
                    th: '🗣️ ปกป้องรถ: "บอกเจ้าของ: \'รถคันนี้คือเชื้อเพลิงสำหรับตึกของคุณ ถ้ามันไป เราเสียเวลาทำงาน 5 ชั่วโมงคนต่อวัน มันต้องอยู่\'"',
                    zh: '🗣️ 捍卫餐车："告诉业主：‘这辆车是你大楼的燃料。如果它走了，我们每天损失 5 个工时。它必须留下。’"'
                },
                consequence: {
                    en: '🦁 Bold Stance: The owner is shocked by your pushback but backs down when he sees the numbers. The crew cheers for you.',
                    th: '🦁 จุดยืนที่กล้าหาญ: เจ้าของช็อกที่คุณโต้กลับแต่ก็ยอมถอยเมื่อเห็นตัวเลข ทีมงานและเชียร์คุณ',
                    zh: '🦁 大胆的立场：业主对你的反击感到震惊，但在看到数据后退缩了。工人们为你欢呼。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🥡 Order Catering: "Ban the truck, but order catering from a \'nice\' restaurant using project petty cash to replace it."',
                    th: '🥡 สั่งจัดเลี้ยง: "แบนรถ แต่สั่งจัดเลี้ยงจากร้านอาหาร \'ดีๆ\' โดยใช้งบย่อยของโครงการมาทดแทน"',
                    zh: '🥡 订外卖："禁止餐车，但用项目零用金从‘好’餐馆订外卖来代替。"'
                },
                consequence: {
                    en: '💸 Audit Nightmare: The food is great, but accounting flags the $500/day lunch expense. You get in trouble for misuse of funds.',
                    th: '💸 ฝันร้ายการตรวจสอบบัญชี: อาหารอร่อย แต่บัญชีธงแดงเรื่องค่าอาหารกลางวัน 500 ดอลลาร์ต่อวัน คุณเดือดร้อนข้อหาใช้เงินผิดประเภท',
                    zh: '💸 审计噩梦：食物很棒，但会计部门标记了每天 500 美元的午餐费用。你因滥用资金而惹上麻烦。'
                },
                stats: { competence: 10, ethics: -10, leadership: 30, innovation: 10 }
            }
        ]
    },
    {
        id: 'construction_009',
        text: {
            en: '🧱 The Subcontractor Dispute: Your trusted drywall sub is using thinner boards (1/2") than specified (5/8" fire-rated) to save money. He says "No one will check behind the paint." You catch him mid-installation.',
            th: '🧱 ข้อพิพาทผู้รับเหมาช่วง: ผู้รับเหมางานฝ้าที่คุณไว้ใจใช้แผ่นที่บางกว่า (1/2 นิ้ว) ที่ระบุไว้ (5/8 นิ้ว กันไฟ) เพื่อประหยัดเงิน เขาบอกว่า "ไม่มีใครเช็คหลังทาสีหรอก" คุณจับเขาได้ระหว่างติดตั้ง',
            zh: '🧱 分包商纠纷：你信任的干墙分包商为了省钱，使用的是比规定（5/8英寸防火级）更薄的板材（1/2英寸）。他说"没人会检查油漆后面。"你在安装中途抓住了他。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Tear It Down: "Stop immediatley. Rip it all out. Install the spec. You pay for the wasted material or you are fired."',
                    th: '🛑 รื้อทิ้ง: "หยุดทันที รื้อออกให้หมด ติดตั้งตามสเปค คุณต้องจ่ายค่าของที่เสียไปไม่งั้นก็โดนไล่ออก"',
                    zh: '🛑 拆掉："立即停止。全部拆除。按规格安装。你为浪费的材料买单，否则就被解雇。"'
                },
                consequence: {
                    en: '⚖️ Integrity Win: He is furious and loses money, but respects your strictness. The building inspector praises your quality control.',
                    th: '⚖️ ชัยชนะแห่งความซื่อสัตย์: เขาโกรธและเสียเงิน แต่เคารพความเข้มงวดของคุณ ผู้ตรวจสอบอาคารชื่นชมการควบคุมคุณภาพของคุณ',
                    zh: '⚖️ 诚信的胜利：他很生气并亏了钱，但尊重你的严格。建筑检查员称赞你的质量控制。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Secret Compromise: "Double layer the 1/2 inch in critical fire zones. Leave the rest. Don\'t do it again."',
                    th: '🤫 การประนีประนอมลับ: "ซ้อน 1/2 นิ้วสองชั้นในโซนกันไฟที่สำคัญ ที่เหลือปล่อยไว้ อย่าทำแบบนี้อีก"',
                    zh: '🤫 秘密妥协："在关键防火区使用双层 1/2 英寸板。其余的保持原样。下不为例。"'
                },
                consequence: {
                    en: '🎲 Risky Fix: It technically meets fire rating but increases labor cost. The sub is grumpy. You feel like you cut a corner.',
                    th: '🎲 การแก้ไขที่เสี่ยง: ในทางเทคนิคมันผ่านเกณฑ์กันไฟแต่เพิ่มค่าแรง ผู้รับเหมาบ่นอุบ คุณรู้สึกเหมือนลดสเปคงาน',
                    zh: '🎲 冒险的修复：这在技术上符合防火等级，但增加了人工成本。分包商脾气暴躁。你觉得自己偷工减料了。'
                },
                stats: { competence: 20, ethics: -10, leadership: 10, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🙈 Ignore It: "I didn\'t see anything. Just get it done. We are behind schedule."',
                    th: '🙈 ทำเป็นไม่เห็น: "ผมไม่เห็นอะไรทั้งนั้น ทำให้เสร็จๆ ไปเถอะ เราล่าช้าแล้ว"',
                    zh: '🙈 视而不见："我什么都没看见。搞定它。我们进度落后了。"'
                },
                consequence: {
                    en: '🔥 Future Lawsuit: 5 years later, a small fire spreads between units because of the thin wall. You are sued for negligence. License revoked.',
                    th: '🔥 คดีความในอนาคต: 5 ปีต่อมา ไฟไหม้เล็กๆ ลามข้ามห้องเพราะผนังบาง คุณถูกฟ้องฐานละเลย ใบอนุญาตถูกเพิกถอน',
                    zh: '🔥 未来的诉讼：5 年后，由于墙壁太薄，一场小火在单元之间蔓延。你因疏忽而被起诉。执照被吊销。'
                },
                stats: { competence: -20, ethics: -50, leadership: -30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📝 Change Order: "Let\'s officialy change the spec to 1/2 inch where code allows to save budget, but keep 5/8 in corridors. Paperwork first."',
                    th: '📝 ใบสั่งเปลี่ยนแปลงงาน: "เรามาเปลี่ยนสเปคเป็น 1/2 นิ้วอย่างเป็นทางการในจุดที่กฎหมายยอมเพื่อประหยัดงบ แต่คง 5/8 ไว้ที่ทางเดิน ทำเอกสารก่อน"',
                    zh: '📝 变更单："让我们正式将规格更改为 1/2 英寸，在规范允许的地方节省预算，但在走廊保留 5/8 英寸。先办手续。"'
                },
                consequence: {
                    en: '🧠 Official Pivot: The architect approves the partial change. You save the sub\'s mistake legally. Everyone is relieved.',
                    th: '🧠 การปรับเปลี่ยนทางการ: สถาปนิกอนุมัติการเปลี่ยนแปลงบางส่วน คุณช่วยแก้ผิดให้ผู้รับเหมาอย่างถูกกฎหมาย ทุกคนโล่งอก',
                    zh: '🧠 官方调整：建筑师批准了部分变更。你合法地挽救了分包商的错误。大家都松了一口气。'
                },
                stats: { competence: 30, ethics: 30, leadership: 30, innovation: 40 }
            }
        ]
    },
    {
        id: 'construction_010',
        text: {
            en: '🏺 The Historic Discovery: Excavating the foundation, your crew hits a buried brick archway. It looks like colonial-era ruins. Reporting it stops construction for months for archeology.',
            th: '🏺 การค้นพบทางประวัติศาสตร์: ขณะขุดฐานราก ทีมงานของคุณเจอซุ้มอิฐโบราณ ดูเหมือนซากปรักหักพังยุคอาณานิคม การรายงานจะหยุดการก่อสร้างหลายเดือนเพื่อการโบราณคดี',
            zh: '🏺 历史发现：挖掘地基时，你的船员挖到了一个埋在地下的砖拱门。它看起来像殖民时代的废墟。报告此事将导致施工停止数月以进行考古。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📞 Report It: "Stop digging. Call the Historical Society. It\'s the right thing to do, even if it kills the schedule."',
                    th: '📞 รายงานเลย: "หยุดขุด โทรหาสมาคมประวัติศาสตร์ มันเป็นสิ่งที่ถูกต้อง แม้จะทำลายตารางงานก็ตาม"',
                    zh: '📞 报告："停止挖掘。致电历史学会。这是正确的事，即使会通过工期。"'
                },
                consequence: {
                    en: '🐢 Delay BUT Fame: Project delayed 6 months. Client is mad. BUT the site becomes a historic landmark and your firm gets positive national press.',
                    th: '🐢 ล่าช้าแต่ดัง: โครงการล่าช้า 6 เดือน ลูกค้าโมโห แต่ไซต์งานกลายเป็นแลนด์มาร์คประวัติศาสตร์และบริษัทคุณได้ข่าวดีระดับชาติ',
                    zh: '🐢 延误但成名：项目延误 6 个月。客户很生气。但该地点成为了历史地标，你的公司获得了正面的全国性报道。'
                },
                stats: { competence: 10, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🚜 Smash It: "Tell the operator to grind it into dust. Mix it with the dirt. \'Just old rubble, boss.\' Pour the concrete."',
                    th: '🚜 ทำลายมัน: "บอกคนขับรถแม็คโครให้บดมันเป็นผง ผสมกับดิน \'แค่เศษซากเก่าๆ ครับหัวหน้า\' เทคอนกรีตเลย"',
                    zh: '🚜 砸碎它："告诉操作员把它磨成灰。把它和泥土混合。‘只是一些旧瓦砾，老板。’倒混凝土。"'
                },
                consequence: {
                    en: '🔨 History Lost: You destroyed heritage. The building goes up on time. A worker whispers about it later, but no proof exists. Karma watches.',
                    th: '🔨 ประวัติศาสตร์สูญหาย: คุณทำลายมรดก ตึกสร้างเสร็จทันเวลา คนงานซุบซิบทีหลังแต่ไม่มีหลักฐาน เวรกรรมตามดูอยู่',
                    zh: '🔨 历史遗失：你摧毁了遗产。大楼按时盖起来了。一名工人后来窃窃私语，但没有证据。业力在看着。'
                },
                stats: { competence: 30, ethics: -50, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🗺️ Re-Design Foundation: "Shift the piles 5 feet to miss the arch. Leave it buried but intact. Don\'t ask, don\'t tell."',
                    th: '🗺️ ออกแบบฐานรากใหม่: "ขยับเสาเข็ม 5 ฟุตเพื่อหลบซุ้มอิฐ ปล่อยให้มันฝังอยู่แต่ไม่เสียหาย ไม่ถาม ไม่บอก"',
                    zh: '🗺️ 重新设计地基："将桩移开 5 英尺以避开拱门。让它埋在地下但完好无损。不问，不说。"'
                },
                consequence: {
                    en: '🤫 Silent Preservation: You save the history for future generations (maybe) and save the schedule. Expensive engineer change, but clever.',
                    th: '🤫 การอนุรักษ์เงียบ: คุณเก็บประวัติศาสตร์ไว้ให้คนรุ่นหลัง (มั้ง) และรักษากำหนดการ ค่าแก้แบบวิศวกรแพงแต่ฉลาด',
                    zh: '🤫 沉默的保护：你为后代（也许）保存了历史，并保存了工期。昂贵的工程变更，但很聪明。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📸 Anonymous Tip: "Leak a photo to the press anonymously. Let the public outrage stop the client, so it\'s not \'your fault\'."',
                    th: '📸 แจ้งเบาะแสไม่ระบุตัวตน: "ปล่อยภาพหลุดให้นักข่าว ให้กระแสสังคมหยุดลูกค้า จะได้ไม่ใช่ \'ความผิดคุณ\'"',
                    zh: '📸 匿名举报："匿名向媒体泄露照片。让公众的愤怒阻止客户，这样就不是‘你的错’了。"'
                },
                consequence: {
                    en: '📰 Media Circus: The site is swarmed by protesters. Construction halts. The client suspects you. Moral, but cowardly.',
                    th: '📰 ละครสัตว์สื่อมวลชน: ผู้ประท้วงแห่มาที่ไซต์ ก่อสร้างหยุดชะงัก ลูกค้าสงสัยคุณ มีคุณธรรมแต่ขี้ขลาด',
                    zh: '📰 媒体马戏团：示威者蜂拥而至。施工停止。客户怀疑你。道德，但懦弱。'
                },
                stats: { competence: 0, ethics: 30, leadership: -10, innovation: 10 }
            }
        ]
    },
    {
        id: 'construction_011',
        text: {
            en: '✊ The Strike Threat: It\'s 95°F (35°C). The portable toilets are full and smelly. The break trailer AC is broken. The union steward threatens to walk off the job at noon if not fixed.',
            th: '✊ ภัยคุกคามการประท้วง: อากาศ 95°F (35°C) ห้องน้ำเคลื่อนที่เต็มและเหม็น แอร์ในตู้พักเบรกเสีย ตัวแทนสหภาพขู่ว่าจะหยุดงานตอนเที่ยงถ้าไม่ซ่อม',
            zh: '✊ 罢工威胁：室外 95°F (35°C)。移动厕所满了，很臭。休息拖车的空调坏了。工会代表威胁说如果不修好，中午就罢工。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚚 Emergency Services: "Pay triple for same-day toilet pumping. Buy 5 window AC units at Home Depot NOW. Treat the crew right."',
                    th: '🚚 บริการฉุกเฉิน: "จ่าย 3 เท่าเพื่อดูดส้วมภายในวันนี้ ซื้อแอร์หน้าต่าง 5 เครื่องที่ Home Depot เดี๋ยวนี้ ดูแลลูกน้องให้ดี"',
                    zh: '🚚 紧急服务："付三倍的钱进行当天厕所抽吸。现在就在 Home Depot 买 5 台窗式空调。善待船员。"'
                },
                consequence: {
                    en: '🤝 Respect Earned: You spent $2000 over budget, but the strike is averted. Morale skyrockets. Men work harder for you.',
                    th: '🤝 ได้รับความเคารพ: คุณใช้เงินเกินงบ 2000 ดอลลาร์ แต่เลี่ยงการประท้วงได้ ขวัญกำลังใจพุ่ง ทีมงานทำงานหนักขึ้นเพื่อคุณ',
                    zh: '🤝 赢得尊重：你超支了 2000 美元，但罢工得以避免。士气高涨。大家为你更努力地工作。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤬 Hardball: "Tell them to get back to work or they are fired. There are 10 guys waiting at the gate for a job."',
                    th: '🤬 ไม้แข็ง: "บอกให้พวกเขากลับไปทำงานไม่งันไล่ออก มีคนรอเสียบงานหน้าประตูอีก 10 คน"',
                    zh: '🤬 强硬手段："告诉他们回去工作，否则就会被解雇。大门口有 10 个人在等着找工作呢。"'
                },
                consequence: {
                    en: '🛑 Sabotage: They don\'t strike, but they work slow. Tools investigate missing. Tires get slashed. You lost the room.',
                    th: '🛑 การก่อวินาศกรรม: พวกเขาไม่ประท้วง แต่ทำงานช้า เครื่องมือหาย ยางรถโดนกรีด คุณเสียการควบคุม',
                    zh: '🛑 怠工：他们没有罢工，但工作缓慢。工具不知所踪。轮胎被割破。你失去了人心。'
                },
                stats: { competence: -10, ethics: -30, leadership: -50, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🍦 Ice Cream Diplomacy: "Buy everyone ice cream and cold Gatorade. Promise to fix toilets tomorrow. Appease them temporarily."',
                    th: '🍦 การทูตไอศกรีม: "เลี้ยงไอศกรีมและเกลือแร่เย็นๆ ทุกคน สัญญาว่าจะซ่อมห้องน้ำพรุ่งนี้ ทำให้พอใจชั่วคราว"',
                    zh: '🍦 冰淇淋外交："给大家买冰淇淋和冰佳得乐。承诺明天修厕所。暂时安抚他们。"'
                },
                consequence: {
                    en: '🕒 Temporary Fix: It works for 2 hours. Then the heat returns and they leave anyway. Too little, too late.',
                    th: '🕒 แก้ขัด: ได้ผลแค่ 2 ชั่วโมง แล้วความร้อนก็กลับมา พวกเขาก็ไปอยู่ดี น้อยไป สายไป',
                    zh: '🕒 临时修复：奏效了 2 小时。然后高温袭来，他们还是走了。太少，太晚。'
                },
                stats: { competence: 10, ethics: 10, leadership: 0, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '👷 Send Everyone Home: "You\'re right. It\'s inhumane. Site closed for half-day. We work Saturday to make it up."',
                    th: '👷 ส่งทุกคนกลับบ้าน: "คุณพูดถูก มันผิดมนุษยธรรม ปิดไซต์ครึ่งวัน เรามาทำชดเชยวันเสาร์"',
                    zh: '👷 遣散所有人："你是对的。这不人道。工地关闭半天。我们周六补班。"'
                },
                consequence: {
                    en: '⚖️ Fair Trade: The timeline slides slightly, but the union respects the fair deal. Most show up Saturday.',
                    th: '⚖️ ข้อแลกเปลี่ยนที่แฟร์: กำหนดการเลื่อนนิดหน่อย แต่สหภาพเคารพข้อตกลงที่ยุติธรรม ส่วนใหญ่มาทำวันเสาร์',
                    zh: '⚖️ 公平交易：时间表略有推迟，但工会尊重这笔公平交易。大多数人周六都来了。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_012',
        text: {
            en: '🔄 The Client\'s Change Order: The luxury condo is framed and wired. The client walks in and says, "Move this wall 2 feet." It contains the main plumbing stack. He refuses to pay a "change fee" and says "make it happen."',
            th: '🔄 ใบสั่งเปลี่ยนแปลงของลูกค้า: คอนโดหรูขึ้นโครงและเดินสายไฟแล้ว ลูกค้าเดินเข้ามาบอก "ขยับผนังนี้ 2 ฟุต" มันมีท่อประปาหลักอยู่ เขาปฏิเสธที่จะจ่าย "ค่าธรรมเนียมการเปลี่ยน" และบอก "ไปจัดการซะ"',
            zh: '🔄 客户的变更单：豪华公寓已经框架成型并布好线了。客户走进来说，"把这面墙移 2 英尺。"里面有主管道立管。他拒绝支付"变更费"，并说"搞定它"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Hold The Line: "No. The contract says signed change orders for rework. Sign the $15,000 check or the wall stays."',
                    th: '🛑 ยืนกราน: "ไม่ สัญญาระบุว่าต้องเซ็นเปลี่ยนงานสำหรับการทำใหม่ เซ็นเช็ค 15,000 ดอลลาร์มา ไม่งั้นผนังอยู่ที่เดิม"',
                    zh: '🛑 坚持底线："不行。合同规定返工要有签署的变更单。签那张 15,000 美元的支票，否则墙不动。"'
                },
                consequence: {
                    en: '🧱 Contract Win: He blows up, threatens to sue, then reads the contract and pays. Relationship strained/professional.',
                    th: '🧱 ชัยชนะตามสัญญา: เขาระเบิดลง ขู่จะฟ้อง แล้วก็นั่งอ่านสัญญาและยอมจ่าย ความสัมพันธ์ตึงเครียด/เป็นมืออาชีพ',
                    zh: '🧱 合同胜利：他大发雷霆，威胁要起诉，然后读了合同并付了款。关系紧张/职业化。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🙇 Cave In: "Okay, we want you happy. I\'ll eat the cost." You force the plumbers to work overtime for free/cheap.',
                    th: '🙇 ยอมจำนน: "โอเค เราอยากให้คุณแฮปปี้ ผมจะรับผิดชอบค่าใช้จ่ายเอง" คุณบังคับช่างประปาให้ทำโอทีฟรี/ถูกๆ',
                    zh: '🙇 屈服："好的，我们想让你高兴。我会承担费用。"你强迫水管工免费/廉价加班。'
                },
                consequence: {
                    en: '💸 Margins Destroyed: You lose money on the job. The plumbers hate you. The client now asks for 50 more "free" changes.',
                    th: '💸 กำไรหดหาย: คุณขาดทุนงานนี้ ช่างประปาเกลียดคุณ ลูกค้าตอนนี้ขอเปลี่ยนฟรีอีก 50 อย่าง',
                    zh: '💸 利润尽毁：这活你亏了。水管工恨你。客户现在要求再做 50 个"免费"变更。'
                },
                stats: { competence: -10, ethics: -20, leadership: -40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🎨 Illusion Fix: "We can\'t move the stack, but I can furr out the other wall to make the room FEEL bigger. Only cost $500."',
                    th: '🎨 แก้ด้วยภาพลวงตา: "เราย้ายท่อไม่ได้ แต่ผมเบิ้ลผนังอีกฝั่งออกมาทำให้ห้องรู้สึกใหญ่ขึ้นได้ จ่ายแค่ 500"',
                    zh: '🎨 错觉修复："我们不能移动立管，但我可以将另一面墙加厚，让房间感觉更大。只需 500 美元。"'
                },
                consequence: {
                    en: '✨ Sales Magic: You convinced him. He thinks it\'s brilliant. You saved the schedule and the profit.',
                    th: '✨ เวทมนตร์การขาย: คุณกล่อมเขาสำเร็จ เขาคิดว่ามันยอดเยี่ยม คุณรักษากำหนดการและกำไรไว้ได้',
                    zh: '✨ 销售魔术：你说服了他。他觉得这主意很棒。你保住了工期和利润。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🔧 Hack Job: "Move the wall but use illegal flexible plumbing connectors to avoid re-piping. Hide it in the wall."',
                    th: '🔧 งานลวก: "ย้ายผนังแต่ใช้ข้อต่อท่ออ่อนผิดกฎหมายเพื่อไม่ต้องเดินท่อใหม่ ซ่อนไว้ในผนัง"',
                    zh: '🔧 砍柴工："移动墙壁，但使用非法的柔性管道连接器以避免重新铺设管道。把它藏在墙里。"'
                },
                consequence: {
                    en: '💦 Leak Disaster: It leaks before the building opens. Water damage everywhere. You are liable for $50k.',
                    th: '💦 หายนะรอยรั่ว: มันรั่วก่อนตึกเปิด น้ำเสียหายทุกที่ คุณต้องรับผิดชอบ 50,000 ดอลลาร์',
                    zh: '💦 泄漏灾难：大楼开放前就漏水了。到处都是水损。你负有 5 万美元的责任。'
                },
                stats: { competence: -20, ethics: -40, leadership: -20, innovation: 10 }
            }
        ]
    },
    {
        id: 'construction_013',
        text: {
            en: '🌚 The Midnight Theft: Your copper wire is disappearing at night. You suspect it\'s one of your own crew members who has a key to the container. Police say they can\'t watch the site 24/7.',
            th: '🌚 ขโมยยามวิกาล: สายไฟทองแดงของคุณหายไปตอนกลางคืน คุณสงสัยว่าเป็นลูกทีมคนนึงที่มีกุญแจตู้คอนเทนเนอร์ ตำรวจบอกเฝ้าให้ 24 ชม. ไม่ได้',
            zh: '🌚 午夜盗窃：你的铜线在晚上消失了。你怀疑是你的一名拥有集装箱钥匙的船员干的。警察说他们不能 24 小时看守工地。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📹 Bait & Camera: "Leave a fresh coil of wire out. Hide a trail cam. Catch them on video."',
                    th: '📹 เหยื่อล่อ & กล้อง: "วางม้วนสายไฟใหม่ทิ้งไว้ ซ่อนกล้องดักถ่าย จับภาพวิดีโอตอนทำ"',
                    zh: '📹 诱饵 & 相机："在这个线圈在那。藏好追踪摄像机。拍下他们的视频。"'
                },
                consequence: {
                    en: '🕵️ Justice Served: It was the new guy. You have proof. He is arrested. The crew learns you aren\'t to be messed with.',
                    th: '🕵️ ความยุติธรรมทำงาน: เป็นเด็กใหม่จริงๆ คุณมีหลักฐาน เขาโดนจับ ทีมงานรู้ว่าคุณไม่ใช่คนที่จะมาล้อเล่นได้',
                    zh: '🕵️ 正义得到伸张：是那个新人。你有证据。他被捕了。工人们知道你不是好惹的。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🐕 Guard Dog: "Rent two scary German Shepherds to patrol the fence line at night. Post \'Beware of Dog\' signs."',
                    th: '🐕 สุนัขเฝ้ายาม: "เช่าเยอรมันเชพเพิร์ดน่ากลัวๆ 2 ตัวมาเดินตรวจรั้วตอนกลางคืน ติดป้าย \'ระวังสุนัขดุ\'"',
                    zh: '🐕 看门狗："租两只吓人的德国牧羊犬在围栏线上巡逻。张贴‘小心恶犬’的标志。"'
                },
                consequence: {
                    en: '🦴 Liability Issue: A neighborhood kid climbs the fence to get a ball and gets bitten. Lawsuit. Theft stopped, but at what cost?',
                    th: '🦴 ปัญหาความรับผิด: เด็กแถวนั้นปีนรั้วมาเก็บบอลแล้วโดนกัด โดนฟ้อง ขโมยหยุด แต่คุ้มมั้ย?',
                    zh: '🦴 责任问题：一个邻居的小孩爬过围栏捡球被咬了。官司。偷窃停止了，但代价是什么？'
                },
                stats: { competence: 20, ethics: -10, leadership: 0, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🌙 Personal Stakeout: "Sleep in your truck with a baseball bat. Wait for them."',
                    th: '🌙 ซุ่มโป่งด้วยตัวเอง: "นอนในรถกระบะพร้อมไม้เบสบอล รอจับพวกมัน"',
                    zh: '🌙 个人监视："带着棒球棍睡在卡车里。等他们。"'
                },
                consequence: {
                    en: '🤕 Dangerous Confrontation: Three guys show up. They are armed. You get beaten up. The copper is stolen anyway.',
                    th: '🤕 การเผชิญหน้าอันตราย: มากัน 3 คน มีอาวุธ คุณโดนรุมซ้อม ทองแดงก็ยังโดนขโมยไป',
                    zh: '🤕 危险的对抗：来了三个人。他们有武器。你被揍了一顿。铜线照样被偷了。'
                },
                stats: { competence: -10, ethics: 10, leadership: 20, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔒 Change Locks: "Quietly change the container locks. Say nothing. See who complains their key doesn\'t work anymore."',
                    th: '🔒 เปลี่ยนแม่กุญแจ: "แอบเปลี่ยนแม่กุญแจตู้เงียบๆ ไม่ต้องบอกใคร ดูซิว่าใครจะมาบ่นว่าไขกุญแจไม่ได้"',
                    zh: '🔒 换锁："悄悄把集装箱锁换了。什么也别说。看谁抱怨他们的钥匙不灵了。"'
                },
                consequence: {
                    en: '🧠 Psychological Trap: The thief exposes themselves by asking about the lock. You fire them quietly. Smart.',
                    th: '🧠 กับดักจิตวิทยา: ขโมยเผยตัวออกมาโดยการถามเรื่องแม่กุญแจ คุณไล่ออกเงียบๆ ฉลาด',
                    zh: '🧠 心理陷阱：小偷通过询问锁的事暴露了自己。你悄悄解雇了他们。聪明。'
                },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'construction_014',
        text: {
            en: '🗑️ The Toxic Discovery: While clearing the basement, your crew finds 20 rusted barrels of what looks like industrial solvent. Disposing of it legally will cost $10k and stop work for 2 weeks. The client says, "Just bury it under the concrete slab."',
            th: '🗑️ การค้นพบสารพิษ: ขณะเคลียร์ชั้นใต้ดิน ทีมงานเจอถังสนิม 20 ใบที่ดูเหมือนตัวทำละลายอุตสาหกรรม การกำจัดอย่างถูกกฎหมายต้องใช้เงิน 1 หมื่นดอลลาร์และต้องหยุดงาน 2 สัปดาห์ ลูกค้าบอกว่า "ก็แค่ฝังไว้ใต้พื้นคอนกรีตสิ"',
            zh: '🗑️ 有毒发现：在清理地下室时，你的工作伙伴发现了 20 桶锈迹斑斑的工业溶剂。依法处理将花费 1 万美元并停工 2 周。客户说："就把它埋在混凝土板下面吧。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Follow Law: "I won\'t risk the environment or my license. We call the EPA and dispose of it properly. The client pays."',
                    th: '🛑 ทำตามกฎหมาย: "ผมจะไม่เสี่ยงกับสิ่งแวดล้อมหรือใบอนุญาตของผม เราจะโทรหา EPA และกำจัดให้ถูกต้อง ลูกค้าเป็นคนจ่าย"',
                    zh: '🛑 遵守法律："我不会拿环境或我的执照冒险。我们给环保署打电话，妥善处理。由客户出钱。"'
                },
                consequence: {
                    en: '⚖️ Ethical Victory: The client is furious about the cost, but years later, soil tests show the site is clean. You avoided a massive liability.',
                    th: '⚖️ ชัยชนะทางศีลธรรม: ลูกค้าโมโหเรื่องค่าใช้จ่าย แต่หลายปีต่อมา ผลตรวจดินพบว่าไซต์สะอาด คุณเลี่ยงความรับผิดชอบอันมหาศาลได้',
                    zh: '⚖️ 道德胜利：客户对费用大发雷霆，但数年后，土壤测试显示该地点是干净的。你避免了巨大的赔偿责任。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 The Midnight Bury: "Do it at night. Pour the slab over it. No one will ever know."',
                    th: '🤫 ฝังยามวิกาล: "ทำตอนกลางคืนเลย เทพื้นทับซะ ไม่มีใครรู้หรอก"',
                    zh: '🤫 深夜掩埋："晚上干。把板浇在上面。没人会知道。"'
                },
                consequence: {
                    en: '💀 Ground Poisoned: 10 years later, the chemical leaks into the groundwater of the neighborhood. A class-action lawsuit ruins you. Prison time.',
                    th: '💀 พิศดิน: 10 ปีต่อมา สารเคมีรั่วลงสู่น้ำใต้ดินของละแวกนั้น คดีความแบบรวมกลุ่มทำให้คุณย่อยยับ และติดคุก',
                    zh: '💀 土壤中毒：10 年后，化学物质泄露到邻近的地下水中。集体诉讼毁了你。入狱服刑。'
                },
                stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🚚 Abandon Site: "This is too hot to handle. I\'m pulling my crew and cancelling the contract. Keep your barrels."',
                    th: '🚚 ถอนตัวจากไซต์: "นี่มันอันตรายเกินไป ผมจะถอนทีมงานและยกเลิกสัญญา คุณเก็บถังของคุณไว้เองเถอะ"',
                    zh: '🚚 弃场："这太棘手了。我带着我的人走，取消合同。留着你的桶吧。"'
                },
                consequence: {
                    en: '🏃 Cowardly Out: You avoided the crime, but your company gets a reputation for quitting when things get hard. No profit.',
                    th: '🏃 ทางออกที่ขี้ขลาด: คุณเลี่ยงอาชญากรรมได้ แต่บริษัทคุณเสียชื่อเรื่องทิ้งงานเมื่อสถานการณ์ยากลำบาก ไม่มีกำไร',
                    zh: '🏃 懦弱退出：你避开了犯罪，但你的公司在遇到困难时会退出，名声受损。没有利润。'
                },
                stats: { competence: -10, ethics: 20, leadership: -20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🧪 Dilution Strategy: "Mix the solvent with the fill dirt in small amounts across the whole site. Dilution is the solution to pollution!"',
                    th: '🧪 กลยุทธ์การเจือจาง: "ผสมตัวทำละลายลงในดินถมทีละน้อยให้ทั่วไซต์ การเจือจางคือทางออกของมลพิษ!"',
                    zh: '🧪 稀释策略："将溶剂少量混合在整个工地的填土中。稀释是解决污染的办法！"'
                },
                consequence: {
                    en: '🤦 Failed Logic: It doesn\'t work. The stench is obvious. The inspector smells it immediately. Fined $100k plus clean-up costs.',
                    th: '🤦 ตรรกะพัง: ไม่ได้ผล กลิ่นฉุนแรงมาก ผู้ตรวจสอบได้กลิ่นทันที โดนปรับ 1 แสนดอลลาร์บวกค่าทำความสะอาด',
                    zh: '🤦 逻辑失败：行不通。恶臭很明显。检查员立刻就闻到了。被罚款 10 万美元，外加清理费用。'
                },
                stats: { competence: -30, ethics: -40, leadership: -10, innovation: 10 }
            }
        ]
    },
    {
        id: 'construction_015',
        text: {
            en: '🤝 The Nephew Factor: The owner of the development wants you to hire his nephew as the site safety officer. The kid has ZERO experience and spends all day on his phone.',
            th: '🤝 ปัจจัยหลานชาย: เจ้าของโครงการอยากให้คุณจ้างหลานชายเขาเป็นเจ้าหน้าที่ความปลอดภัยประจำไซต์ เด็กคนนี้ไม่มีประสบการณ์เลย แถมทั้งวันเอาแต่เล่นโทรศัพท์',
            zh: '🤝 侄子因素：开发负责人想让你雇他的侄子担任现场安全员。这孩子完全没有经验，整天都在玩手机。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👨‍🏫 Training Duty: "I\'ll hire him, but I\'m personally training him for 2 weeks. If he fails my test, he\'s assigned to sweeping floors."',
                    th: '👨‍🏫 หน้าที่ฝึกสอน: "ผมจะจ้างเขา แต่ผมจะเทรนเขาด้วยตัวเอง 2 สัปดาห์ ถ้าเขาสอบไม่ผ่าน ผมจะให้เขาไปกวาดพื้นแทน"',
                    zh: '👨‍🏫 培训责任："我会雇他，但我会亲自对他进行为期 2 周的培训。如果他没通过我的考试，他就被派去扫地。"'
                },
                consequence: {
                    en: '📈 Growth: The kid actually learns and becomes a decent employee. The owner is impressed with your mentoring.',
                    th: '📈 การเติบโต: เด็กคนนี้เรียนรู้จริงๆ และกลายเป็นพนักงานที่ดี เจ้าของประทับใจความสามารถในการสอนงานของคุณ',
                    zh: '📈 成长：这孩子居然学会了，成了一名体面的员工。负责人对你的指导印象深刻。'
                },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Hard No: "Safety is non-negotiable. I need a pro. Your nephew can work in the marketing office instead."',
                    th: '🚫 ปฏิเสธเด็ดขาด: "ความปลอดภัยต่อรองไม่ได้ ผมต้องการมือโปร หลานคุณไปทำงานฝ่ายการตลาดแทนแล้วกัน"',
                    zh: '🚫 坚决拒绝："安全不容商量。我需要专业人士。你的侄子可以去营销部门工作。"'
                },
                consequence: {
                    en: '🛡️ Safe Site: You kept the site safe. The owner is slightly annoyed but respects your backbone. Safety record remains 100%.',
                    th: '🛡️ ไซต์ปลอดภัย: คุณรักษาความปลอดภัยของไซต์ไว้ได้ เจ้าของหงุดหงิดนิดหน่อยแต่เคารพในจุดยืนของคุณ สถิติความปลอดภัยยังคง 100%',
                    zh: '🛡️ 安全现场：你保证了现场的安全。负责人略感不快，但尊重你的骨气。安全记录保持在 100%。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📱 Ghost Employee: "Hire him, give him the salary, tell him to stay in the trailer and stay out of the way."',
                    th: '📱 พนักงานผี: "จ้างเขาไปเถอะ ให้เงินเดือน บอกให้เขาอยู่ในตู้คอนเทนเนอร์ อย่ามาเกะกะการทำงาน"',
                    zh: '📱 幽灵员工："雇了他，给他发工资，让他待在拖车里，别挡道。"'
                },
                consequence: {
                    en: '👎 Toxic Culture: The rest of the crew sees the favoritism. Morale drops. They stop caring about safety because the "safety guy" doesn\'t.',
                    th: '👎 วัฒนธรรมแย่: ทีมงานคนอื่นเห็นการเล่นพรรคเล่นพวก ขวัญกำลังใจลดลง พวกเขาเริ่มไม่สนเรื่องความปลอดภัยเพราะ "คนคุม" ยังไม่สนเลย',
                    zh: '👎 毒性文化：其他伙伴看到了偏袒。士气下降。由于"安全员"不关心安全，他们也不再关心了。'
                },
                stats: { competence: -20, ethics: -30, leadership: -50, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '💣 Trial by Fire: "Make him redo the safety orientation for the whole crew. If he makes one mistake, the crew will eat him alive. He\'ll quit on his own."',
                    th: '💣 บททดสอบสุดโหด: "ให้เขาปฐมนิเทศความปลอดภัยให้ทีมงานทั้งหมด ถ้าเขาพลาดนิดเดียว ทีมงานจะรุมเขมือบเขาเอง เดี๋ยวเขาก็ลาออกไปเอง"',
                    zh: '💣 烈火审判："让他为全体成员重新进行安全导向培训。如果他犯了一个错误，伙伴们会把他‘生吞活剥’了。他自己会辞职的。"'
                },
                consequence: {
                    en: '💥 Backfire: The kid gives terrible advice, a worker gets hurt following it. You are blamed for letting a novice lead training.',
                    th: '💥 ตีกลับ: เด็กคนนี้ให้คำแนะนำแย่ๆ มีคนงานบาดเจ็บเพราะทำตาม คุณโดนตำหนิที่ปล่อยให้มือใหม่มานำการเทรน',
                    zh: '💥 适得其反：这孩子给出了糟糕的建议，一名工人因遵循建议而受伤。你因让新手指导培训而受到指责。'
                },
                stats: { competence: -10, ethics: -20, leadership: -30, innovation: 20 }
            }
        ]
    },
    {
        id: 'construction_016',
        text: {
            en: '🏗️ The Equipment Catastrophe: Your main tower crane has a hydraulic failure with a 10-ton load hanging over the site. It\'s stable for now, but any movement could drop it. There are 100 workers below.',
            th: '🏗️ หายนะของเครื่องจักร: เครนทาวเวอร์หลักเกิดระบบไฮดรอลิกล้มเหลวขณะมีน้ำหนัก 10 ตันแขวนอยู่เหนือไซต์งาน ตอนนี้ยังทรงตัวได้ แต่ถ้าขยับนิดเดียวอาจหล่นลงมา มีคนงาน 100 คนอยู่ข้างล่าง',
            zh: '🏗️ 设备灾难：你的主塔式起重机发生液压故障，当时正有 10 吨重物悬在工地上方。目前还稳定，但任何移动都可能导致其坠落。下面有 100 名工人。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Full Evacuation: "Sound the alarm! Everyone out of the radius NOW. I don\'t care about the concrete pour, get everyone out!"',
                    th: '🚨 อพยพด่วน: "กดสัญญาณเตือน! ทุกคนออกจากรัศมีเดี๋ยวนี้ ไม่ต้องสนเรื่องเทคอนกรีต เอาทุกคนออกมา!"',
                    zh: '🚨 全面疏散："拉响警报！所有人立即撤离该半径范围。我不管混凝土浇筑了，让所有人都出来！"'
                },
                consequence: {
                    en: '🛡️ Safety Priority: No one is hurt. The concrete in the pump lines hardens and ruins $20k of equipment. The client yells about money, but the crew trusts you with their lives.',
                    th: '🛡️ ความปลอดภัยมาก่อน: ไม่มีใครบาดเจ็บ คอนกรีตในท่อปั๊มแข็งตัวทำให้เครื่องจักรเสียหาย 2 หมื่นดอลลาร์ ลูกค้าโวยเรื่องเงินแต่ทีมงานเชื่อมั่นในชีวิตกับคุณ',
                    zh: '🛡️ 安全优先：没有人受伤。泵管里的混凝土凝固了，毁掉了价值 2 万美元的设备。客户在钱的问题上大吼大叫，但组员们把性命托付给了你。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛠️ Surgical Repair: "Keep working under the crane. I\'ll send two mechanics up to the cab to fix the valve while the load is suspended. Fast and quiet."',
                    th: '🛠️ การซ่อมแบบเร่งด่วน: "ทำงานใต้เครนต่อไป ผมจะส่งช่าง 2 คนขึ้นไปบนห้องควบคุมเพื่อซ่อมวาล์วขณะที่ของยังแขวนอยู่ ทำงานให้ไวและเงียบที่สุด"',
                    zh: '🛠️ 外科修理："继续在起重机下面工作。我会派两名机械师到驾驶舱，在重物悬挂时修理阀门。迅速且安静。"'
                },
                consequence: {
                    en: '💀 Catastrophic Failure: The valve blows during repair. The load falls. 3 workers killed. You face manslaughter charges.',
                    th: '💀 ความล้มเหลวครั้งใหญ่: วาล์วระเบิดระหว่างซ่อม ของหล่นลงมา คนงานตาย 3 คน คุณถูกตั้งข้อหาฆ่าคนตายโดยประมาท',
                    zh: '💀 灾难性失败：修理期间阀门爆炸。重物坠落。3 名工人死亡。你面临过失杀人罪指控。'
                },
                stats: { competence: -50, ethics: -50, leadership: -40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🏗️ Counter-Balance Gamble: "Rig a second crane to the load to take the weight, then lower both together. It\'s risky for the second crane but might save the day."',
                    th: '🏗️ การเดิมพันด้วยเครนตัวที่สอง: "ใช้เครนตัวที่สองมาช่วยรับน้ำหนัก แล้วค่อยๆ เอาลงพร้อมกัน มันเสี่ยงสำหรับเครนตัวที่สองมากแต่ก็น่าจะช่วยได้"',
                    zh: '🏗️ 平衡赌博："用另一台起重机吊起重物以分担重量，然后两台起重机一起下降。这对第二台起重机来说风险很大，但可能会挽救局面。"'
                },
                consequence: {
                    en: '🧠 Engineering Hero: It works. The load is grounded safely. You saved the schedule and the equipment. Risky but brilliant.',
                    th: '🧠 ฮีโร่วิศวกรรม: ได้ผล ของถูกวางลงอย่างปลอดภัย คุณรักษากำหนดการและเครื่องจักรไว้ได้ เสี่ยงแต่สุดยอด',
                    zh: '🧠 工程英雄：行得通。重物安全着陆。你挽救了工期和设备。冒险但精明。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🧱 The Controlled Drop: "Move the equipment from below. Drop the load into the dirt pit intentionally. Salvage the crane afterward."',
                    th: '🧱 การปล่อยลงแบบควบคุม: "ย้ายเครื่องจักรข้างล่างออก จงใจปล่อยของลงในหลุมดิน แล้วค่อยกู้ซากเครนทีหลัง"',
                    zh: 'D：受控坠落："移开下面的设备。故意将重物掉进土坑。事后回收起重机。"'
                },
                consequence: {
                    en: '⚖️ Middle Ground: The load is destroyed ($50k loss). The crane is damaged. No one dies. Professional but expensive.',
                    th: '⚖️ ทางสายกลาง: ของพังเสียหาย (เสีย 5 หมื่นดอลลาร์) เครนพัง ไม่มีคนตาย เป็นมืออาชีพแต่จ่ายแพง',
                    zh: '⚖️ 中庸之道：重物被毁（损失 5 万美元）。起重机损坏。没有人死亡。职业但昂贵。'
                },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'construction_017',
        text: {
            en: '💰 The Inspector\'s Wink: A city safety inspector finds 3 minor violations that will delay your opening by a month. He whispers, "I could overlook these for a $5,000 \'consulting fee\' to my brother\'s company."',
            th: '💰 การขยิบตาของผู้ตรวจสอบ: ผู้ตรวจสอบความปลอดภัยของเมืองพบข้อบกพร่องเล็กๆ 3 จุด ซึ่งจะทำให้งานล่าช้าไป 1 เดือน เขากระซิบว่า "ผมแกล้งมองข้ามเรื่องนี้ได้นะ แลกกับ \'ค่าปรึกษา\' 5,000 ดอลลาร์ให้บริษัทน้องชายผม"',
            zh: '💰 检查员的示意：一名城市安全检查员发现了 3 处轻微违规，会将你的开工日期推迟一个月。他低声说："只要给我兄弟的公司支付 5000 美元的‘咨询费’，我可以忽略这些。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Report the Bribe: "Absolutely not. Record the conversation and report him to the city ethics board immediately."',
                    th: '⚖️ รายงานการติดสินบน: "ไม่มีทาง ผมจะอัดเสียงและรายงานเขาต่อคณะกรรมการจริยธรรมของเมืองทันที"',
                    zh: '⚖️ 举报贿赂："绝对不行。录音并将他立即举报给城市道德委员会。"'
                },
                consequence: {
                    en: '🏛️ Justice Served: The inspector is fired and arrested. The city fast-tracks your permit as an apology. Your ethics score is legendary.',
                    th: '🏛️ ความยุติธรรมทำงาน: ผู้ตรวจสอบถูกไล่ออกและโดนจับ เมืองเร่งตรวจอนุญาตให้คุณเป็นการขอโทษ คะแนนจริยธรรมคุณกลายเป็นตำนาน',
                    zh: '🏛️ 正义伸张：检查员被开除并逮捕。作为道歉，城市以此了你的许可证申请。你的道德评分登峰造极。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '💸 Pay to Play: "Fine. $5k is cheaper than waiting a month. Write the check to his brother. Just get us the permit."',
                    th: '💸 จ่ายเพื่อจบ: "ก็ได้ 5 พันถูกกว่าต้องรอ 1 เดือนอีก เขียนเช็คให้น้องชายเขาซะ ขอแค่ใบอนุญาตมาก็พอ"',
                    zh: '💸 金钱交易："行吧。5000 美元比等一个月划算。给他的兄弟写支票。只要把许可证给我们。"'
                },
                consequence: {
                    en: '🖤 Secret Shame: You get the permit. The building opens on time. But he keeps coming back every 6 months for more "fees." You are his ATM now.',
                    th: '🖤 ความละอายที่เป็นความลับ: คุณได้ใบอนุญาต ตึกเปิดทันเวลา แต่เขาจะกลับมาทุกๆ 6 เดือนเพื่อขอ "ค่าธรรมเนียม" เพิ่ม ตอนนี้คุณกลายเป็นตู้ ATM ของเขาแล้ว',
                    zh: '🖤 秘密耻辱：你拿到了许可证。建筑按时开放。但他每隔 6 个月就回来要更多的"费用"。你现在成了他的自动提款机。'
                },
                stats: { competence: 10, ethics: -50, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🛠️ Fix it Fast: "Reject the offer. Put the entire crew on 24-hour shifts to fix the violations. We do it right."',
                    th: '🛠️ แก้ให้ไว: "ปฏิเสธข้อเสนอ เอาคนงานทั้งทีมมาทำกะ 24 ชั่วโมงเพื่อแก้จุดที่ผิด เราจะทำสิ่งที่ถูกต้อง"',
                    zh: '🛠️ 迅速修复："拒绝提议。让全员 24 小时轮班以修复违规项。我们要把事情做好。"'
                },
                consequence: {
                    en: '💪 Respect: The crew is exhausted but proud. The violations are fixed in 3 days. The inspector is embarrassed and signs off without another word.',
                    th: '💪 ความเคารพ: ทีมงานเหนื่อยล้าแต่ภูมิใจ จุดที่ผิดถูกแก้ไขใน 3 วัน ผู้ตรวจสอบหน้าเสียและเซ็นผ่านให้โดยไม่พูดอะไรอีก',
                    zh: '💪 尊重：伙计们精疲力竭但很自豪。违规项在 3 天内修复。检查员感到尴尬，二话没说就签了字。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🃏 The Counter-Blackmail: "I recorded that. Now sign the permit for free, or I go to the media. Your choice."',
                    th: '🃏 การขู่กลับ: "ผมอัดเสียงไว้แล้ว เซ็นใบอนุญาตให้ฟรีๆ เดี๋ยวนี้ ไม่งั้นผมเอาเรื่องส่งสื่อ เลือกเอา"',
                    zh: '🃏 反向勒索："我已经录音了。现在免费签署许可证，否则我就去媒体那。你自己选。"'
                },
                consequence: {
                    en: '👺 Dirty Victory: He signs it. You saved money. But you used dirty tactics and made a powerful enemy who will haunt your future projects.',
                    th: '👺 ชัยชนะที่สกปรก: เขาเซ็นให้ คุณประหยัดเงิน แต่คุณใช้เล่ห์เหลี่ยมและสร้างศัตรูที่ทรงอิทธิพลซึ่งจะตามรังควานโครงการในอนาคตของคุณ',
                    zh: '👺 肮脏胜局：他签了。你省了钱。但你使用了卑鄙手段，结下了一个会在你未来的项目中纠缠不放的强大敌人。'
                },
                stats: { competence: 20, ethics: -30, leadership: 10, innovation: 20 }
            }
        ]
    },
    {
        id: 'construction_018',
        text: {
            en: '🏗️ The Design Flaw: You realize the architect placed a major structural pillar 3 feet away from where it should be to support the top floor. It\'s already poured. Correcting it costs $100k. The architect says "It\'s within tolerance, ignore it."',
            th: '🏗️ ข้อบกพร่องของการออกแบบ: คุณพบว่าสถาปนิกวางเสาโครงสร้างหลักห่างจากจุดที่ควรจะเป็นถึง 3 ฟุตเพื่อรับน้ำหนักชั้นบนสุด เสานั้นเทปูนไปแล้ว การแก้ไขต้องใช้เงิน 1 แสนดอลลาร์ สถาปนิกบอกว่า "มันอยู่ในเกณฑ์ที่ยอมรับได้ เมินมันไปเถอะ"',
            zh: '🏗️ 设计缺陷：你意识到建筑师将一根主要结构柱放置在距离支撑顶层应在位置 3 英尺远的地方。已经浇筑好了。纠正它需要花费 10 万美元。建筑师说"这在公差范围内，忽略它。" '
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Stop Production: "I don\'t care what the architect says. I\'m calling a third-party structural engineer to audit this. Safety first."',
                    th: '🛑 หยุดงาน: "ผมไม่สนว่าสถาปนิกจะพูดยังไง ผมจะเรียกวิศวกรโครงสร้างภายนอกมาตรวจสอบเรื่องนี้ ความปลอดภัยต้องมาก่อน"',
                    zh: '🛑 停止生产："我不管建筑师怎么说。我要请第三方结构工程师来对此进行审计。安全第一。"'
                },
                consequence: {
                    en: '🔬 Truth Found: The third-party engineer confirms the building would collapse under snow load. You are a hero. The architect loses their license.',
                    th: '🔬 พบความจริง: วิศวกรภายนอกยืนยันว่าตึกจะถล่มถ้ามีหิมะหรือน้ำหนักบรรทุก คุณกลายเป็นฮีโร่ ส่วนสถาปนิกโดนยึดใบอนุญาต',
                    zh: '🔬 真相大白：第三方工程师证实大楼在积雪载荷下会倒塌。你成了英雄。建筑师失去了执照。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Architect\'s Word: "He designed it, he takes the liability. I just follow the blueprints. Leave it."',
                    th: '🤫 ตามคำสถาปนิก: "เขาเป็นคนออกแบบ เขาต้องรับผิดชอบเอง ผมแค่ทำตามแบบแปลน ปล่อยมันไว้อย่างนั้นแหละ"',
                    zh: '🤫 遵循建筑师的话："他设计的，他承担责任。我只是按照蓝图办事。别管。"'
                },
                consequence: {
                    en: '🏚️ Structural Issues: 2 years later, the top floor develops massive cracks. The building is condemned. You are sued along with the architect.',
                    th: '🏚️ ปัญหาโครงสร้าง: 2 ปีต่อมา ชั้นบนสุดเกิดรอยร้าวขนาดใหญ่ ตึกถูกสั่งห้ามเข้า คุณถูกฟ้องไปพร้อมกับสถาปนิก',
                    zh: '🏚️ 结构问题：2 年后，顶层出现巨大裂缝。该建筑被宣告为危房。你和建筑师一起被起诉。'
                },
                stats: { competence: -20, ethics: -10, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🛠️ Hidden Reinforcement: "Don\'t move the pillar, but add two steel I-beams hidden in the ceiling to transfer the load. I\'ll pay for it secretly to avoid the fight."',
                    th: '🛠️ การเสริมความแข็งแรงแบบลับๆ: "ไม่ต้องย้ายเสา แต่เพิ่มคานเหล็ก I-beam สองตัวซ่อนไว้ในเพดานเพื่อกระจายน้ำหนัก ผมจะออกเงินค่าของเองเงียบๆ เพื่อเลี่ยงการทะเลาะ"',
                    zh: '🛠️ 隐蔽加固："不要移动柱子，但在天花板内隐藏两根工字钢梁以传递载荷。我会偷偷付钱，以避免争端。"'
                },
                consequence: {
                    en: '💸 Lost Profit: You fixed the problem and kept people safe. But you lost your entire bonus for the year paying for the steel.',
                    th: '💸 เสียกำไร: คุณแก้ปัญหาได้และช่วยให้คนปลอดภัย แต่คุณต้องเสียโบนัสทั้งปีไปกับค่าเหล็กพวกนั้น',
                    zh: '💸 利润流失：你解决了问题并保证了人员安全。但你因支付钢材费用而失去了全年的奖金。'
                },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🧱 The Re-Design: "Officialy issue a RFIs (Request for Information). Force the developer to pay for the fix because the architect made a mistake. Paperwork saves lives."',
                    th: '🧱 การออกแบบใหม่: "ออก RFI (คำขอข้อมูล) อย่างเป็นทางการ บังคับให้ผู้พัฒนาโครงการจ่ายค่าแก้ไขเพราะสถาปนิกทำพลาด เอกสารช่วยชีวิตคนได้"',
                    zh: 'D：重新设计："正式发布 RFI（信息请求）。强迫开发商为修复买单，因为建筑师犯了错。文书工作挽救生命。"'
                },
                consequence: {
                    en: '🏛️ Legal Battle: Project stops for 3 months while lawyers fight. You aren\'t blamed, but the delay is brutal on your stats.',
                    th: '🏛️ ศึกกฎหมาย: โครงการหยุดไป 3 เดือนขณะที่ทนายสู้กัน คุณไม่โดนว่า แต่ความล่าช้าทำลายสถิติการทำงานของคุณยับเยิน',
                    zh: '🏛️ 法律战：项目停下 3 个月，律师们在打官司。你没有受到指责，但延误对你的统计数据来说是致命的。'
                },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: 10 }
            }
        ]
    },
    {
        id: 'construction_019',
        text: {
            en: '🏗️ The Concrete Crisis: The cement truck arrives for a massive 400-cubic yard pour. You do a "slump test" and the concrete is too wet (watery). It won\'t reach full strength. $20k of concrete is sitting there, hardening in the sun.',
            th: '🏗️ วิกฤตคอนกรีต: รถโม่ปูนมาถึงเพื่อเตรียมเทปูนขนาดใหญ่ 400 ลูกบาศก์หลา คุณทำการทดสอบ "Slump Test" แล้วพบว่าปูนเหลวเกินไป (ใส่น้ำเยอะ) มันจะไม่ได้ความแข็งแรงตามสเปค คอนกรีตมูลค่า 2 หมื่นดอลลาร์จอดรออยู่และเริ่มแข็งตัวกลางแดด',
            zh: '🏗️ 混凝土危机：水泥罐车正准备进行 400 立方码的大规模浇筑。你做了"坍落度测试"，发现混凝土太稀了（水分太多）。它无法达到全强度。价值 2 万美元的混凝土就停在那里，在阳光下凝固。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Reject the Batch: "Send it back! I don\'t care if we lose the money. I won\'t pour weak concrete. Batch plant pays or we sue."',
                    th: '🚫 ปฏิเสธปูนล็อตนี้: "ส่งกลับไป! ผมไม่สนว่าจะเสียเงินมั้ย ผมจะไม่เทปูนที่ไม่ได้มาตรฐาน โรงปูนต้องจ่ายไม่งั้นเราฟ้อง"',
                    zh: '🚫 拒收这批货："退回去！我不在乎是否会损失这笔钱。我不会浇筑强度不够的混凝土。要么搅拌站赔钱，要么我们起诉。"'
                },
                consequence: {
                    en: '⚔️ Manufacturer Fight: The plant is mad, but your strictness saves the building. The client is impressed you caught a supplier mistake.',
                    th: '⚔️ ศึกผู้ผลิต: โรงปูนโมโหมาก แต่ความเข้มงวดของคุณช่วยรักษามาตรฐานตึกไว้ได้ ลูกค้าประทับใจที่คุณจับผิดซัพพลายเออร์ได้',
                    zh: '⚔️ 制造商之争：工厂很生气，但你的严格挽救了建筑。客户对你发现了供应商的错误印象深刻。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧪 Chemical Fix: "Add extra dry cement and additives manually to the trucks to stiffen it up. It\'s not perfect, but we can save the pour."',
                    th: '🧪 แก้ด้วยสารเคมี: "เติมปูนซีเมนต์ผงและสารผสมเพิ่มลงในรถโม่เพื่อช่วยให้ปูนข้นขึ้น มันไม่สมบูรณ์แบบหรอกแต่ก็กู้สถานการณ์การเทปูนได้"',
                    zh: '🧪 化学修复："手动向罐车添加额外的干水泥和添加剂以使其变稠。虽然不完美，但我们可以挽救这次浇筑。"'
                },
                consequence: {
                    en: '🧠 Quick Thinking: It works! Strength tests come back acceptable. You saved $20k and the schedule.',
                    th: '🧠 ความคิดไว: ได้ผล! ผลทดสอบความแข็งแรงอยู่ในเกณฑ์ที่รับได้ คุณเซฟเงิน 2 หมื่นดอลลาร์และรักษาตารางงานไว้ได้',
                    zh: '🧠 反应迅捷：行得通！强度测试结果可以接受。你挽救了 2 万美元和进度。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🙇 Pour It Anyway: "We have deadlines. The moisture will evaporate. Just pour it and vibrate it extra long."',
                    th: '🙇 เทไปเถอะ: "เรามีงานต้องส่ง เดี๋ยวความชื้นก็ระเหยไปเอง เทไปเถอะแล้วใช้เครื่องสั่นคอนกรีตให้นานกว่าปกติเอา"',
                    zh: '🙇 照样浇筑："我们有最后期限。水分会蒸发的。浇筑吧，震捣时间加长一点。"'
                },
                consequence: {
                    en: '🏚️ Soft Slabs: The concrete cures with air pockets and low strength. The floor tiles start cracking 6 months later. You are sued.',
                    th: '🏚️ พื้นนิ่ม: คอนกรีตแห้งตัวแบบมีฟองอากาศและไม่มีแรง กระเบื้องพื้นเริ่มแตกใน 6 เดือนต่อมา คุณโดนฟ้อง',
                    zh: '🏚️ 软板：混凝土固化后留下了气囊，强度低。6 个月后地砖开始开裂。你被起诉了。'
                },
                stats: { competence: -30, ethics: -40, leadership: -20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🏗️ Repurpose: "Change of plan! We won\'t use this for the structural slab. Pour it for the temporary parking lot instead. It\'s fine for that."',
                    th: '🏗️ ปรับเปลี่ยนการใช้งาน: "เปลี่ยนแผน! เราจะไม่ใช้ปูนนี้ทำพื้นโครงสร้าง เอาไปเทลานจอดรถชั่วคราวแทน มันใช้ได้ไม่มีปัญหา"',
                    zh: '🏗️ 改变用途："改变计划！我们不把这个用于结构板。把它浇在临时停车场。那个可以用。"'
                },
                consequence: {
                    en: '🧠 Resourceful: You wasted nothing. The donor of the batch is billed for the difference in grade. Efficient.',
                    th: '🧠 ความมีทรัพยากร: คุณไม่เสียของเลย โรงปูนถูกเรียกเก็บส่วนต่างของเกรดปูน มีประสิทธิภาพมาก',
                    zh: '🧠 足智多谋：你没有浪费任何东西。这批货的供应商被要求支付等级差价。高效。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'construction_020',
        text: {
            en: '🚢 The Supply Chain Crisis: All your steel rebar is stuck at the port due to a strike. Work will stop for 3 weeks unless you pay $50,000 extra for premium local steel. The developer says "Wait it out."',
            th: '🚢 วิกฤตซัพพลายเชน: เหล็กเส้นทั้งหมดของคุณติดอยู่ที่ท่าเรือเพราะมีการประท้วง งานต้องหยุดไป 3 สัปดาห์นอกจากคุณจะยอมจ่ายเพิ่ม 50,000 ดอลลาร์เพื่อซื้อเหล็กท้องถิ่นเกรดพรีเมียม ผู้พัฒนาโครงการบอกว่า "รอไปก่อน"',
            zh: '🚢 供应链危机：由于罢工，你所有的钢筋都滞留在港口。除非你额外支付 5 万美元购买优质的本地钢材，否则工程将停工 3 周。开发商说"等着吧。" '
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛠️ Shift Work: "Don\'t stop work. Pivot the whole crew to electrical and plumbing tasks that don\'t need steel yet. Keep moving."',
                    th: '🛠️ สลับงาน: "อย่าหยุดงาน สลับทีมงานทั้งหมดไปทำไฟฟ้าและประปาที่ยังไม่ต้องใช้เหล็กไปก่อน เดินหน้าต่อ"',
                    zh: '🛠️ 转换工作："不要停工。将全员转向尚不需要钢材的电气和管道任务。保持进度。"'
                },
                consequence: {
                    en: '🏗️ Efficient Pivot: It\'s a logistical nightmare to manage but work never stops. You saved the budget and limited the delay.',
                    th: '🏗️ การปรับเปลี่ยนที่มีประสิทธิภาพ: มันเป็นเรื่องยุ่งยากในการจัดการ แต่ถ้างานไม่เคยหยุด คุณก็เซฟงบและจำกัดความล่าช้าได้',
                    zh: '🏗️ 高效转型：虽然物流管理是一场噩梦，但工作从未停止。你节省了预算并减少了延误。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '💸 Buy Local: "Pay the $50k. The overhead cost of the site sitting empty for 3 weeks is $100k anyway. Real math says pay now."',
                    th: '💸 ซื้อของใกล้เคียง: "จ่าย 5 หมื่นไปเลย ค่าใช้จ่ายที่ปล่อยไซต์ทิ้งไว้เฉยๆ 3 สัปดาห์คือแสนดอลลาร์นะ ตามตรรกะคือจ่ายตอนนี้คุ้มกว่า"',
                    zh: '💸 购买本地产："支付 5 万美元。工地闲置 3 周的管理费用也要 10 万美元。真正的账目是现在就付钱。"'
                },
                consequence: {
                    en: '🧠 Financial Logic: The developer is mad at first, but realizes later you saved them $50k in total costs. You are promoted.',
                    th: '🧠 ตรรกะการเงิน: ตอนแรกผู้พัฒนาโมโห แต่ตอนหลังมาคิดได้ว่าคุณช่วยเซฟเขาไป 5 หมื่นดอลลาร์ คุณได้เลื่อนตำแหน่ง',
                    zh: '🧠 财务逻辑：开发商起初很生气，但后来意识到你为他们节省了 5 万美元的总成本。你获得了晋升。'
                },
                stats: { competence: 40, ethics: 30, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '😴 Take a Break: "Everyone home. Unpaid leave for 3 weeks. See you when the ships move."',
                    th: '😴 พักผ่อน: "ทุกคนกลับบ้าน ลางานไม่รับเงิน 3 สัปดาห์เจอกันตอนเรือออก"',
                    zh: '😴 休息一下："所有人回家。3 周无薪假。等船开了再见。"'
                },
                consequence: {
                    en: '📉 Lost Crew: Your best workers find other jobs during the break. When the steel arrives, you have a novice crew. Quality drops.',
                    th: '📉 เสียทีมงาน: คนเก่งๆ ของคุณไปหางานอื่นตอนพัก พอเหล็กมาคุณเหลือแต่เด็กใหม่ คุณภาพงานลดลง',
                    zh: '📉 客流流失：你最出色的工人。在休息期间找到了其他工作。当钢材运抵时，你的组员全是新手。质量下降。'
                },
                stats: { competence: -10, ethics: -20, leadership: -40, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Scavenge: "Check nearby halted projects. See if we can buy or borrow steel from them at a discount."',
                    th: '🕵️ ค้นหาทรัพยากร: "ไปเช็คโครงการแถวนี้ที่หยุดอยู่ ดูว่าเราพอจะซื้อหรือยืมเหล็กจากเขาในราคาลดพิเศษได้มั้ย"',
                    zh: '🕵️ 搜寻："检查附近停工的项目。看看我们是否能以折扣价从他们那里购买或借用钢材。"'
                },
                consequence: {
                    en: '🤝 Networking Win: You found a site with excess stock. You got it cheap and kept your crew working. Brilliant networking.',
                    th: '🤝 ชัยชนะของคอนเนคชั่น: คุณเจอไซต์ที่มีเหล็กเหลือเฟือ คุณได้มันมาในราคาถูกและทีมงานทำงานต่อได้ คอนเนคชั่นเยี่ยมมาก',
                    zh: '🤝 人脉胜利：你发现了一个库存过剩的工地。你以此了廉价材料，并让你的伙计们继续工作。出色的人脉。'
                },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'construction_021',
        text: {
            en: '🏗️ The Crane Tilt: During a heavy lift, the ground under one of the crane\'s outriggers begins to sink. The crane is tilting, and a 10-ton beam is swinging over the site.',
            th: '🏗️ เครนเอียง: ระหว่างการยกของหนัก พื้นดินใต้ขาค้ำจานหนึ่งของเครนเริ่มยุบตัว เครนเริ่มเอียง และคานเหล็กหนัก 10 ตันกำลังแกว่งอยู่เหนือพื้นที่ก่อสร้าง',
            zh: '🏗️ 起重机倾斜：在一次重物吊装过程中，起重机其中一个支腿下的地面开始下沉。起重机正在倾斜，一根 10 吨重的梁正在工地上方摆动。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🆘 Emergency Drop: "Lower the load immediately to the ground, even if it damages the structure below. Clear the area! Priority is preventing the crane from tipping."',
                    th: '🆘 ปล่อยของฉุกเฉิน: "วางของลงพื้นทันที ต่อให้มันจะทับโครงสร้างข้างล่างพังก็ต้องทำ เคลียร์พื้นที่ด่วน! ต้องกันไม่ให้เครนล้มก่อน"',
                    zh: 'A：紧急降落："立即将负载降至地面，即使这会损坏下方的结构。清理区域！首要任务是防止起重机倾倒。"'
                },
                consequence: {
                    en: '🛡️ Disaster Averted: The crane stabilizes. The beam crushed some expensive scaffolding, but nobody was hurt. You are hailed for your quick thinking.',
                    th: '🛡️ หยุดยั้งหายนะ: เครนกลับมานิ่งเหมือนเดิม คานเหล็กอาจจะทับนั่งร้านราคาแพงพังไปบ้างแต่ไม่มีใครบาดเจ็บ ทุกคนชมที่คุณตัดสินใจไว',
                    zh: '🛡️ 化险为夷：起重机稳定了下来。梁砸坏了一些昂贵的脚手架，但无人受伤。你因反应迅速而受到称赞。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏗️ Slow Recovery: "Tell the operator to swing the load back towards the center of gravity slowly. Don\'t drop it, just balance it."',
                    th: '🏗️ ประคองสติ: "บอกคนขับเครนให้เหวี่ยงคานกลับมาที่ศูนย์ถ่วงช้าๆ อย่าเพิ่งวาง แค่พยายามรักษาสมดุลไว้"',
                    zh: 'B：缓慢恢复："告诉操纵员缓慢地将负载摆回重心位置。不要放下，只需保持平衡。"'
                },
                consequence: {
                    en: '💀 Catastrophe: The slow movement wasn\'t enough. The outrigger sank further and the crane toppled. Massive damage and multiple injuries.',
                    th: '💀 หายนะ: การขยับช้าๆ มันไม่ทันการ ขาค้ำจมลึกลงไปอีกจนเครนล้มคว่ำ ความเสียหายมหาศาลและมีคนบาดเจ็บหลายราย',
                    zh: 'B：大难临头：缓慢的移动并不够。支腿进一步下沉，起重机翻倒。造成了巨大损失和多人受伤。'
                },
                stats: { competence: 10, ethics: 10, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '👷 Manual Support: "Get the crew to shove timber mats under the sinking outrigger while the crane holds the load still."',
                    th: '👷 เสริมฐานด่วน: "สั่งให้ทีมงานเอาแผ่นไม้ไปหนุนใต้ขาค้ำที่กำลังจม ในขณะที่เครนประคองของค้างไว้"',
                    zh: 'C：手动支撑："在起重机保持负载不动的同时，让团队向沉降的支推下塞进木垫。"'
                },
                consequence: {
                    en: '⚠️ High Risk: A worker almost got crushed when the crane shifted. You stopped the tilt, but the safety inspector is writing a massive fine for the risk.',
                    th: '⚠️ ความเสี่ยงสูง: คนงานเกือบโดนทับตอนเครนขยับตัว คุณหยุดการเอียงได้ก็จริงแต่เจ้าหน้าที่ความปลอดภัยกำลังเขียนใบสั่งค่าปรับมหาศาลจากความเสี่ยงนี้',
                    zh: 'C：高风险：起重机移位时，一名工人险些被压扁。你阻止了倾斜，但安全检查员正因这种冒险行为开出巨额罚单。'
                },
                stats: { competence: 30, ethics: 10, leadership: 10, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🧠 counterweight Hack: "Swing the jib to the opposite side immediately to use the crane\'s own weight to counter the sink."',
                    th: '🧠 แฮ็กน้ำหนักถ่วง: "เหวี่ยงแขนเครนไปฝั่งตรงข้ามทันทีเพื่อใช้น้ำหนักของตัวเครนเองถ่วงดุลการจม"',
                    zh: 'D：配重技巧："立即将起重臂摆向相反方向，利用起重机自身的重量来对抗沉降。"'
                },
                consequence: {
                    en: '💡 Physics Win: It works perfectly. The crane levels out. You then lower the load safely. The operator thinks you\'re a genius.',
                    th: '💡 ชนะด้วยฟิสิกส์: ได้ผลสมบูรณ์แบบ เครนกลับมาขนานกับพื้น จากนั้นคุณค่อยๆ วางของลงอย่างปลอดภัย คนขับเครนมองว่าคุณเป็นอัจฉริยะเลยล่ะ',
                    zh: 'D：物理学胜利：效果完美。起重机平稳了下来。随后你安全地下放了负载。操纵员认为你是个天才。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'construction_022',
        text: {
            en: '⚖️ The Local Mafia: A local "community leader" visits your site and hints that unless you hire their "security firm," trucks might start getting flat tires. It\'s blatant extortion.',
            th: '⚖️ มาเฟียถิ่น: "ผู้นำชุมชน" ในพื้นที่แวะมาหาที่ไซต์งานแล้วเปรยว่า ถ้าไม่จ้าง "บริษัทรักษาความปลอดภัย" ของเขา รถบรรทุกอาจจะยางแบนบ่อยๆ นะ นี่มันคือการกรรโชกชัดๆ',
            zh: '⚖️ 当地黑帮：一位当地的"社区领袖"访问了你的工地，并暗示除非你雇佣他们的"保安公司"，否则卡车可能会开始爆胎。这是公然的敲诈勒索。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👮 Call the Cops: "I don\'t negotiate with criminals. I\'m calling the police and the city council immediately. Get off my site."',
                    th: '👮 แจ้งตำรวจ: "ผมไม่เจรจากับอาชญากร ผมจะแจ้งตำรวจและสภาเมืองเดี๋ยวนี้ ออกไปจากไซต์งานของผมซะ"',
                    zh: 'A：报警："我不与罪犯谈判。我立刻打电话给警察和市议会。离开我的工地。"'
                },
                consequence: {
                    en: '🚔 Uphill Battle: The site is vandalized that night. Progress slows due to police statements. You did the right thing, but at a huge cost to the schedule.',
                    th: '🚔 การต่อสู้ที่ยากลำบาก: ไซต์งานถูกบุกรุกทำลายในคืนนั้น งานล่าช้าเพราะต้องให้ปากคำกับตำรวจ คุณทำสิ่งที่ถูกต้องแต่ต้องแลกมาด้วยความล่าช้าของงาน',
                    zh: 'A：坚苦的斗争：工地当晚遭到了破坏。由于需要做警察陈述，进度放缓。你做了正确的事，但进度表付出了巨大代价。'
                },
                stats: { competence: 20, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Hire Them: "Look, it\'s just the cost of doing business in this neighborhood. Hire two of his guys as night watchmen to keep the peace."',
                    th: '🤝 ยอมจ้าง: "ฟังนะ มันก็แค่ค่าคุ้มครองในการทำธุรกิจแถวนี้นั่นแหละ จ้างลูกน้องเขาสักสองคนมาเป็นยามตอนกลางคืนเพื่อความสงบสุขแล้วกัน"',
                    zh: 'B：雇佣他们："听着，这只是在这一带做生意的成本。雇佣他的两个伙计当更夫以维持太平。"'
                },
                consequence: {
                    en: '📉 Slippery Slope: The "security" guys just sleep on the job and extort the sub-contractors too. You lost the respect of your crew.',
                    th: '📉 ถลำลึก: พวก "ยาม" เอาแต่หลับในงานและยังไปกรรโชกพวกผู้รับเหมาช่วงต่ออีก คุณสูญเสียความเคารพจากทีมงานไปหมดเลน',
                    zh: 'B：滑坡效应："保安"们只是在上班时睡觉，而且还敲诈分包商。你失去了团队对你的尊重。'
                },
                stats: { competence: 10, ethics: -10, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🏗️ High-Tech Security: "Decline the offer politely. Instead, spend that budget on automated AI cameras, drone patrols, and high-intensity fencing."',
                    th: '🏗️ ระบบรักษาความปลอดภัยไฮเทค: "ปฏิเสธข้อเสนออย่างสุภาพ แล้วเอางบนั้นไปซื้อกล้อง AI อัตโนมัติ โดรนตรวจการณ์ และรั้วไฟฟ้าแรงสูงแทน"',
                    zh: 'C：高科技安保："婉言谢绝。相反，将这笔预算花在自动化 AI 监控、无人机巡逻和高压围栏上。"'
                },
                consequence: {
                    en: '🧠 Tech Shield: The intimidation fails. The cameras catch a vandal the first night and they are arrested. You protected the site and your ethics.',
                    th: '🧠 เกราะป้องกันไฮเทค: การข่มขู่ไม่ได้ผล กล้องจับภาพผู้บุกรุกได้ในคืนแรกและโดนจับกุม คุณปกป้องได้ทั้งคที่งานและจรรยาบรรณ',
                    zh: 'C：技术护盾：恐吓失败了。监控在第一晚就抓获了一名破坏者，他们随后被捕。你保护了工地和你的道德准则。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '👷 The General\'s Stand: "Call a meeting with the local residents. Offer to hire 20 local workers for actual labor positions instead of paying for protection."',
                    th: '👷 พลังมวลชน: "เรียกประชุมชาวบ้านในพื้นที่ เสนอจ้างงานคนแถวนี้ 20 ตำแหน่งให้มาทำงานจริงๆ แทนการจ่ายค่าคุ้มครอง"',
                    zh: 'D：将军的立场："召集当地居民开会。提议雇用 20 名当地工人从事真实的劳动岗位，而不是支付保护费。"'
                },
                consequence: {
                    en: '🌟 Community Win: The residents are happy. The "leader" loses his influence because the community now supports the project. Real leadership.',
                    th: '🌟 ชนะใจชุมชน: ชาวบ้านดีใจมาก "ผู้นำ" คนนั้นสูญเสียอิทธิพลเพราะคนในพื้นที่หันมาสนับสนุนโครงการของคุณ ความเป็นผู้นำที่แท้จริงคือแบบนี้',
                    zh: 'D：社区双赢：居民们很高兴。"领袖"失去了影响力，因为社区现在支持这个项目。真正的领导力。'
                },
                stats: { competence: 30, ethics: 40, leadership: 50, innovation: 10 }
            }
        ]
    },
    {
        id: 'construction_023',
        text: {
            en: '🌊 The Flash Flood: A massive unforecasted storm hits. Your foundation pit, which is 30 feet deep, is starting to fill with water. The pumps can\'t keep up, and the neighbors\' sewer line is nearby.',
            th: '🌊 น้ำท่วมฉับพลัน: พายุใหญ่ที่ไม่ได้พยากรณ์ไว้ถล่มเข้าหา หลุมฐานรากลึก 30 ฟุตของคุณเริ่มเต็มไปด้วยน้ำ เครื่องสูบน้ำเอาไม่อยู่ และท่อระบายน้ำของเพื่อนบ้านก็อยู่ใกล้ๆ เสียด้วย',
            zh: '🌊 突发洪水：一场巨大的未经预报的风暴来袭。你 30 英尺深的基坑开始积水。水泵供不应求，邻居家的下水道管线就在附近。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚧 Sacrifice the Pit: "Let it flood. Divert the runoff away from the neighbors even if it means ruining our concrete pour from this morning. Protect the surrounding infrastructure."',
                    th: '🚧 ยอมเสียสละหลุม: "ปล่อยให้มันท่วมไป ระบายน้ำออกไปให้พ้นทางเพื่อนบ้าน ต่อให้มันจะทำให้ปูนที่เพิ่งเทไปเมื่อเช้าพังก็ยอม ปกป้องโครงสร้างพื้นฐานรอบๆ ไว้ก่อน"',
                    zh: 'A：牺牲基坑："让它淹吧。引导径流远离邻居，即使这意味着会毁掉我们今天早上的混凝土浇筑。保护周围的基础设施。"'
                },
                consequence: {
                    en: '🛡️ Responsible Neighbor: You lost $50k in concrete and labor, but you saved the city from a sewer disaster. The council grants you future permits faster.',
                    th: '🛡️ เพื่อนบ้านที่มีความรับผิดชอบ: คุณเสียเงินค่าปูนและค่าแรงไป 5 หมื่นดอลลาร์ แต่คุณช่วยเมืองจากหายนะท่อระบายน้ำได้ สภาเมืองเลยอนุมัติใบอนุญาตงานหน้าให้คุณไวขึ้น',
                    zh: 'A：负责任的邻居：你损失了 5 万美元的混凝土和人工，但你使城市免受下水道灾难。委员会以后批准你的许可证会更快。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛠️ Improvised Dam: "Get every piece of heavy machinery to push dirt around the pit edge to create a levee. We have to save our work."',
                    th: '🛠️ เขื่อนเฉพาะกิจ: "เอาเครื่องจักรหนักทุกคันมาไถดินล้อมรอบขอบหลุมไว้ทำเป็นคันกั้นน้ำ เราต้องรักษาหน้างานเอาไว้ให้ได้"',
                    zh: 'B：临时堤坝："调动每一台重型机械，将泥土推向坑边缘以建造堤坝。我们必须保住我们的成果。"'
                },
                consequence: {
                    en: '💥 Failure: The pressure was too high. The improvised dam broke. The water surged and burst the neighbor\'s sewer anyway. Total mess.',
                    th: '💥 ความล้มเหลว: แรงดันน้ำสูงเกินไป เขื่อนชั่วคราวแตก น้ำทะลักไปทำท่อระบายน้ำเพื่อนบ้านแตกอยู่ดี เละเทะไปหมด',
                    zh: 'B：失败：压力太大。临时堤坝崩塌。洪水汹涌而出，还是冲断了邻居的下水道。一团糟。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Siphon Strategy: "Instead of small pumps, use the long drainage pipes and the natural gravity of the slope to create a massive siphon. It\'s faster than electricity."',
                    th: '🧠 กลยุทธ์กาลักน้ำ: "แทนที่จะใช้เครื่องสูบคันเล็ก ใช้ท่อระบายน้ำยาวๆ กับแรงโน้มถ่วงตามธรรมชาติของทางลาดสร้างกาลักน้ำยักษ์ขึ้นมา มันเร็วกว่าใช้ไฟฟ้าซะอีก"',
                    zh: 'C：虹吸策略："与其使用小型水泵，不如利用长排水管和坡道的自然重力建立一个巨大的虹吸系统。这比用电快。"'
                },
                consequence: {
                    en: '💡 Physics Win: The siphon clears the water in record time. You saved the site and the neighbors. The engineering firm is impressed.',
                    th: '💡 ชนะด้วยฟิสิกส์: กาลักน้ำระบายน้ำออกได้ในเวลาอันรวดเร็ว คุณช่วยได้ทั้งหน้างานและเพื่อนบ้าน บริษัทวิศวกรรมทึ่งในตัวคุณมาก',
                    zh: 'C：物理学胜利：虹吸系统以创纪录的时间清空了积水。你挽救了工地和邻居。工程公司对此印象深刻。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Call Emergency Services: "It\'s a municipal emergency. Call the fire department and ask them to use their high-capacity water tenders to help."',
                    th: '📞 เรียกหน่วยกู้ภัย: "นี่เป็นเหตุฉุกเฉินระดับเมือง โทรหาดับเพลิงแล้วขอให้เขาเอารถสูบน้ำพลังสูงมาช่วยหน่อย"',
                    zh: 'D：拨打紧急服务电话："这是市政紧急情况。打电话给消防部门，请求他们使用大容量水罐车提供帮助。"'
                },
                consequence: {
                    en: '📉 Bureaucratic Stalling: They tell you it\'s private property and they can\'t help unless there\'s a fire. By the time you argue, it\'s too late.',
                    th: '📉 ติดขัดระบบราชการ: เขาบอกว่านี่คือพื้นที่ส่วนบุคคลและช่วยไม่ได้ถ้าไม่มีไฟไหม้ กว่าจะเถียงกันเสร็จก็สายไปเสียแล้ว',
                    zh: 'D：官僚主义的拖延：他们告诉你这是私有财产，除非发生火灾否则无法帮忙。等你有理有据地争论完，一切都太迟了。'
                },
                stats: { competence: 10, ethics: 20, leadership: -10, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_024',
        text: {
            en: '🏺 The Archeological Find: Excavators uncover a 500-year-old burial site or artifacts. By law, you must stop work. Your client stands to lose $1M per month of delay and pressure you to "bury it and move on."',
            th: '🏺 การค้นพบทางโบราณคดี: รถขุดไปเจอสุสานหรือโบราณวัตถุอายุกว่า 500 ปี ตามกฎหมายคุณต้องหยุดงาน ลูกค้าของคุณจะเสียเงินเดือนละ 1 ล้านดอลลาร์หากงานล่าช้า และกดดันให้คุณ "ฝังมันซะแล้วทำงานต่อ"',
            zh: '🏺 考古发现：挖掘机挖出了一个有 500 年历史的墓地或文物。根据法律，你必须停止工作。由于延期，你的客户每月将损失 100 万美元，并施压让你"把它埋了，继续干案子"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏛️ Report Immediately: "History belongs to the public. I\'m calling the Antiquities Department. We stop now, regardless of the cost."',
                    th: '🏛️ รายงานทันที: "ประวัติศาสตร์เป็นของสาธารณะ ผมจะโทรหากรมศิลปากร เราจะหยุดเดี๋ยวนี้ ไม่ว่าความเสียหายจะเท่าไหร่ก็ตาม"',
                    zh: 'A：立即报告："历史属于公众。我正致电文物局。无论代价如何，我们现在停工。"'
                },
                consequence: {
                    en: '🛡️ Ethical Pillar: You are a hero to historians. The client sues you, but the city protects you. The site becomes a protected landmark.',
                    th: '🛡️ เสาหลักแห่งจริยธรรม: คุณเป็นฮีโร่ของเหล่านักประวัติศาสตร์ ลูกค้าฟ้องคุณแต่เมืองคุ้มครองคุณไว้ ไซต์งานนี้กลายเป็นโบราณสถานแห่งชาติ',
                    zh: 'A：道德支柱：你是历史学家眼中的英雄。客户起诉了你，但市政府保护了你。工地变成了一处受保护的地标。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏃 Follow Client Orders: "Just spread some dirt over it and move the excavators to the other side. What they don\'t know won\'t hurt them."',
                    th: '🏃 ทำตามคำสั่งลูกค้า: "แค่เอาดินกลบไว้แล้วย้ายรถขุดไปอีกฝั่ง อะไรที่เขาไม่เห็นก็ไม่เป็นปัญหาหรอก"',
                    zh: 'B：遵循客户指示："直接撒些土在上面，把挖掘机移到另一边。他们不知道的东西伤不到他们。"'
                },
                consequence: {
                    en: '🚔 Jail Time: A whistle-blowing worker leaked photos to the press. You face criminal charges for destroying national heritage. Career destroyed.',
                    th: '🚔 เข้าคุก: คนงานคนหนึ่งแอบส่งรูปให้สื่อ คุณโดนข้อหาอาญาฐานทำลายมรดกของชาติ จบสิ้นอาชีพ',
                    zh: 'B：入狱：一名吹哨工人向媒体泄露了照片。你因破坏国家遗产而面临刑事指控。职业生涯毁于一旦。'
                },
                stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Bridge Over History: "Redesign the foundation to span over the find. Create a glass viewing floor in the building lobby. It makes the project unique."',
                    th: '🧠 สะพานเชื่อมประวัติศาสตร์: "ออกแบบฐานรากใหม่ให้ข้ามจุดที่ค้นพบไปซะ แล้วทำพื้นกระจกให้คนดูได้จากล็อบบี้ตึก มันจะทำให้โปรเจกต์นี้ไม่เหมือนใคร"',
                    zh: 'C：跨越历史的桥梁："重新设计地基，使其跨越发现物。在建筑大厅建造一个玻璃观景地板。这会让项目独一无二。"'
                },
                consequence: {
                    en: '💡 Dynamic Solution: The client loves the marketing potential. The city agrees to the compromise. You saved history and the project.',
                    th: '💡 ทางออกที่ลงตัว: ลูกค้าชอบไอเดียมาร์เก็ตติ้งนี้มาก เมืองก็โอเคกับการประนีประนอม คุณช่วยรักษาไว้ได้ทั้งประวัติศาสตร์และโปรเจกต์',
                    zh: 'C：动态解决方案：客户非常看好其推广潜力。市政府同意了折中方案。你既保护了历史，又挽救了项目。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '⏳ Tactical Delay: "Stop work for a week \'for maintenance.\' Hire a private archeologist to assess the value quietly before deciding."',
                    th: '⏳ ถ่วงเวลา: "หยุดงานหนึ่งสัปดาห์โดยอ้างว่า \'ซ่อมบำรุง\' แล้วจ้างนักโบราณคดีส่วนตัวมาประเมินค่าอย่างเงียบๆ ก่อนค่อยตัดสินใจ"',
                    zh: 'D：战术延期："以‘维修’为由停工一周。在决定之前，雇佣一名私人考古学家悄悄评估其价值。"'
                },
                consequence: {
                    en: '📉 Conflict of Interest: The private archeologist tries to blackmail the client. It gets messy and expensive. You look indecisive.',
                    th: '📉 ผลประโยชน์ทับซ้อน: นักโบราณคดีคนนั้นพยายามขู่กรรโชกเงินลูกค้า เรื่องราววุ่นวายและเปลืองเงินกว่าเดิม คุณดูเป็นคนโลเลไปเลย',
                    zh: 'D：利益冲突：私人考古学家试图勒索客户。事情变得一团糟且代价昂贵。你看起来优柔寡断。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'construction_025',
        text: {
            en: '🧪 Toxic Soil: Halfway through digging the basement, you find barrels of unidentified chemicals leaking into the soil. Disposing of this legally will bankrup the developer.',
            th: '🧪 ดินปนเปื้อนพิษ: ระหว่างขุดห้องใต้ดิน คุณเจอถังสารเคมีที่ไม่ระบุชื่อรั่วไหลลงไปในดิน การกำจัดอย่างถูกกฎหมายจะทำให้ผู้พัฒนาโปรเจกต์ล้มละลายได้เนื้อๆ',
            zh: '🧪 有毒土壤：地下室挖掘到一半时，你发现几桶不明化学物质正泄漏到土壤中。合法处置这些物质将使开发商破产。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Stop and Seal: "Stop work immediately. We need a HAZMAT team. I don\'t care who goes bankrupt; we cannot build on poisoned land."',
                    th: '🛑 หยุดและปิดกั้น: "หยุดงานทันที เราต้องเรียกทีมจัดการสารพิษ (HAZMAT) ผมไม่สนว่าใครจะล้มละลาย เราจะสร้างตึกบนดินที่มีพิษไม่ได้"',
                    zh: 'A：停止并封锁："立即停工。我们需要危化品处置团队。我不在乎谁会破产；我们不能在有毒的土地上建筑。"'
                },
                consequence: {
                    en: '🛡️ Integrity: You lost your job and the developer hates you, but 500 future residents won\'t get cancer. You sleep well at night.',
                    th: '🛡️ มีศักดิ์ศรี: คุณตกงานและผู้พัฒนาโปรเจกต์เกลียดคุณ แต่คนที่จะมาอยู่ 500 คนในอนาคตจะไม่เป็นมะเร็ง คุณนอนหลับสบายใจแน่นอน',
                    zh: 'A：正直：你失业了，开发商恨透了你，但 500 名未来的居民将不会因此患癌。你问心无愧。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏗️ Encapsulation: "Build a concrete sarcophagus around the site. Seal it in and continue the build above it. It\'s technically safe."',
                    th: '🏗️ การปิดกั้น: "สร้างโลงศพคอนกรีตล้อมรอบจุดนั้นไว้ ปิดตายมันไปเลยแล้วสร้างตึกทับข้างบนแทน ในทางเทคนิคน่ะมันปลอดภัยนะ"',
                    zh: 'B：封装："在现场周围建造一个混凝土石棺。将其密封并在其上方继续作业。技术上是安全的。"'
                },
                consequence: {
                    en: '🧠 Engineering Compromise: You saved the project budget. Experts confirm the seal is 99% effective, but the property value drops when rumors leak.',
                    th: '🧠 ประนีประนอมทางวิศวกรรม: คุณเซฟงบประมาณโปรเจกต์ได้ ผู้เชี่ยวชาญยืนยันว่าปิดกั้นได้ผล 99% แต่ราคาอสังหาฯ ร่วงกราวทันทีที่มีข่าวลือหลุดไป',
                    zh: 'B：工程折中：你节省了项目预算。专家确认密封效率达 99%，但消息泄露后房产价值大跌。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🌿 Bio-Remediation: "Instead of expensive removal, use a specific type of fungi and bacteria to eat the toxins. It takes 3 months but it\'s cheap and natural."',
                    th: '🌿 การบำบัดทางชีวภาพ: "แทนที่จะขนไปทิ้งแพงๆ ใช้เชื้อราและแบคทีเรียเฉพาะทางมากินสารพิษสิ ใช้เวลา 3 เดือนแต่ประหยัดและเป็นธรรมชาติ"',
                    zh: 'C：生物修复："与其花费昂贵的费用进行清理，不如利用特定种类的真菌和细菌来吞噬毒素。这需要 3 个月，但既便宜又自然。"'
                },
                consequence: {
                    en: '💡 Innovation Win: It works perfectly! You clear the soil for 10% of the cost. You become a leader in "Green Construction."',
                    th: '💡 ชัยชนะของนวัตกรรม: ได้ผลสมบูรณ์แบบ! คุณเคลียร์ดินได้ด้วยต้นทุนแค่ 10% คุณกลายเป็นผู้นำด้าน "การก่อสร้างสีเขียว" ไปแล้ว',
                    zh: 'C：创新胜利：效果完美！你以 10% 的成本清理了土壤。你成为了"绿色建筑"领域的领导者。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🚚 Night Haul: "Load the soil onto unmarked trucks tonight. Drop it at an old quarry far from here. Nobody will know."',
                    th: '🚚 ขนทิ้งตอนตี 2: "ขนดินใส่รถบรรทุกไม่ติดป้ายคืนนี้เลย เอาไปทิ้งในเหมืองเก่าไกลๆ นู่น ไม่มีใครรู้หรอก"',
                    zh: 'D：夜间装运："今晚将土壤装上无标识卡车。运到远离此地的一个旧采石场。没人会知道。"'
                },
                consequence: {
                    en: '💀 Environmental Criminal: The chemicals leak into the town\'s water table. Mass poisoning occurs. You spend 20 years in prison.',
                    th: '💀 อาชญากรสิ่งแวดล้อม: สารเคมีรั่วลงสู่น้ำใต้ดินของเมือง เกิดสารพิษแพร่ระบาดกว้างขวาง คุณติดคุก 20 ปี',
                    zh: 'D：环境罪犯：化学物质渗入了城镇的地下水位。发生了大规模中毒事件。你被判处 20 年监禁。'
                },
                stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_026',
        text: {
            en: '🚁 The Prefab Disaster: A modular apartment building is being assembled. The factory sent the wrong connectors. The units are 2 inches off, making the whole stack unstable.',
            th: '🚁 หายนะบ้านสำเร็จรูป: อาคารอพาร์ตเมนต์แบบโมดูลาร์กำลังถูกประกอบ แต่โรงงานส่งตัวเชื่อมต่อมาผิดแบบ ยูนิตห้องห่างกันไป 2 นิ้ว ทำให้ทั้งตึกไม่มั่นคง',
            zh: '🚁 预制件灾难：一座模块化公寓楼正在组装。工厂发错了连接件。组件产生了 2 英寸的偏差，使整个结构变得不稳定。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Stop and Resend: "Send them back. I don\'t care about the deadline. If the connections aren\'t factory-spec, I won\'t sign off on it."',
                    th: '🛑 หยุดและส่งคืน: "ส่งกลับไปให้หมด ผมไม่สนกำหนดส่งงาน ถ้าพาร์ทเชื่อมต่อไม่ได้มาตรฐานโรงงาน ผมจะไม่เซ็นรับงานเด็ดขาด"',
                    zh: 'A：停止并重发："退回它们。我不在乎期限。如果连接件不符合工厂规格，我不会签字。"'
                },
                consequence: {
                    en: '🛡️ Safety First: Massive delay, but the building is built correctly. 2 years later, a neighboring prefab building with similar issues collapses, and you are vindicated.',
                    th: '🛡️ ปลอดภัยไว้ก่อน: งานล่าช้ากะทันหันแต่ตึกถูกสร้างอย่างถูกต้อง 2 ปีต่อมาตึกข้างๆ ที่ใช้ของผิดแบบพังถล่มลงมา และทุกคนก็รู้ว่าคุณตัดสินใจถูก',
                    zh: 'A：安全第一：虽然大延期，但建筑被正确建造了。2 年后，一座有着类似问题的邻近预制建筑倒塌了，你由此证明了自己的正确。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛠️ Field Fix: "Tell the welders to bridge the 2-inch gap with steel plates. We\'ll reinforce it locally. It\'ll hold fine."',
                    th: '🛠️ แก้หน้างาน: "บอกช่างเชื่อมให้เอาแผ่นเหล็กมาต่อช่องว่าง 2 นิ้วนั้นให้ติดกัน เสริมแรงเข้าไปเอง เดี๋ยวก็อยู่เองแหละ"',
                    zh: 'B：现场修复："告诉焊工用钢板跨接这 2 英寸的缺口。我们在局部加以强化。这能撑得住。"'
                },
                consequence: {
                    en: '⚠️ Structural Failure: The steel plates were strong, but the stress points were wrong. The building developed major cracks after 6 months. Huge lawsuit.',
                    th: '⚠️ โครงสร้างล้มเหลว: แผ่นเหล็กน่ะแข็งแรงดีแต่จุดรับแรงมันผิด ตึกเริ่มเกิดรอยร้าวขนาดใหญ่หลังผ่านไป 6 เดือน โดนฟ้องเละแน่นอน',
                    zh: 'B：结构失效：钢板很坚固，但受力点不对。建筑在 6 个月后出现了重大裂缝。引发了巨额诉讼。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Digital Twin Audit: "Use the 3D laser scanner to model the exact error. Send the data to the factory and have them custom-mill 500 shim plates to fit the gap perfectly."',
                    th: '🧠 ตรวจสอบด้วยคู่เสมือน: "ใช้เครื่องสแกนเลเซอร์ 3D จำลองข้อผิดพลาดที่แน่นอน ส่งข้อมูลไปที่โรงงานให้เขาตัดแผ่นชิม (shim plate) ขนาดพิเศษมาอุดช่องว่างให้พอดีเป๊ะ"',
                    zh: 'C：数字孪生审计："使用 3D 激光扫描仪对具体错误进行建模。将数据发送回工厂，让他们定制切割 500 个填隙片，以完美填补缺口。"'
                },
                consequence: {
                    en: '💡 Tech Solution: It takes 3 days, but the fit is perfect and engineered to spec. The building is safe and the delay was minimal. Innovation win.',
                    th: '💡 ทางแก้ไฮเทค: ใช้เวลา 3 วันแต่เข้าล็อคพอดีและได้มาตรฐานวิศวกรรม ตึกปลอดภัยและล่าช้าไปนิดเดียว ชนะด้วยนวัตกรรมจริงๆ',
                    zh: 'C：技术方案：花了 3 天时间，但契合完美并符合工程规范。建筑很安全，延期也很短暂。创新的胜利。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Hide it with Drywall: "It\'s just aesthetic. Pull them as close as possible and hide the gap with extra drywall and siding. Move move move!"',
                    th: '🤷 กลบเกลื่อนด้วยฝ้า: "มันก็แค่เรื่องความสวยงามน่ะ ดึงมันให้ชิดที่สุดแล้วเอาแผ่นยิปซั่มปิดทับไปซะ ทำงานต่อเร็วเข้า!"',
                    zh: 'D：用干壁掩盖："这只是美观问题。把它们尽可能拉近，并用额外的干壁和壁板掩盖缺口。快快快！"'
                },
                consequence: {
                    en: '💀 Catastrophe: The building collapsed during a minor earthquake. 12 people died. You are charged with manslaughter.',
                    th: '💀 หายนะ: ตึกถล่มลงมาตอนเกิดแผ่นดินไหวเบาๆ มีคนตาย 12 คน คุณโดนข้อหาฆ่าคนตายโดยไม่เจตนา',
                    zh: 'D：大难临头：建筑在一次轻微地震中倒塌。12 人遇难。你被指控犯有过失杀人罪。'
                },
                stats: { competence: -30, ethics: -50, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_027',
        text: {
            en: '💰 The Budget Squeeze: The price of steel triples overnight due to international tariffs. You are $2M over budget. The client tells you to swap the structural steel for a cheaper grade from an uncertified supplier.',
            th: '💰 งบประมาณที่บีบคั้น: ราคาเหล็กพุ่งสูงขึ้น 3 เท่าในชั่วข้ามคืนเพราะภาษีนำเข้า คุณงบเกินไป 2 ล้านดอลลาร์ ลูกค้าสั่งให้คุณเปลี่ยนไปใช้เกรดที่ถูกกว่าจากซัพพลายเออร์ที่ไม่ได้รับรองมาตรฐานแทน',
            zh: '💰 预算缩减：由于国际关税，钢铁价格一夜之间翻了三倍。你的预算超支了 2000 万美元。客户让你把结构钢换成来自未经认证供应商的廉价钢材。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Stand Your Ground: "Structural integrity isn\'t a variable. If we use uncertified steel, I\'m walking off the job and reporting this to the building department."',
                    th: '🚫 ยืนกรานคำเดิม: "ความแข็งแรงเชิงโครงสร้างต่อรองไม่ได้ ถ้าเราใช้เหล็กที่ไม่มีใบรับรอง ผมจะทิ้งงานและจะแจ้งกรมควบคุมอาคารด้วย"',
                    zh: 'A：坚守阵地："结构完整性不是一个变量。如果我们使用未经认证的钢材，我就会辞职，并将此事报告给建筑部门。"'
                },
                consequence: {
                    en: '🛡️ Integrity High: The client backs down and finds the money elsewhere. You are known as a manager who can\'t be bought or bullied.',
                    th: '🛡️ ศักดิ์ศรีที่สูงส่ง: ลูกค้ายอมถอยและไปหาเงินมาจากทางอื่นแทน คุณกลายเป็นผู้จัดการที่ใครก็ใช้เงินซื้อหรือข่มขู่ไม่ได้',
                    zh: 'A：正直诚信：客户退让了，并从别处筹到了钱。你作为一名不收买、不畏缩的经理而闻名。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏗️ Hybrid Design: "Redesign the upper floors to use reinforced timber instead of steel. It\'s cheaper, certified, and looks modern."',
                    th: '🏗️ ดีไซน์แบบผสมผสาน: "ออกแบบชั้นบนใหม่ให้ใช้ไม้แปรรูปแทนเหล็กสิ มันถูกกว่า มีใบรับรอง และยังดูทันสมัยด้วยนะ"',
                    zh: 'B：混合设计："重新设计高层楼层，使用强化木材代替钢材。它更便宜、已获认证，而且看起来很现代。"'
                },
                consequence: {
                    en: '💡 Innovation Victory: The building becomes an award-winning "Eco-Skyscraper." You saved the budget and improved the design.',
                    th: '💡 ชัยชนะของนวัตกรรม: ตึกนี้กลายเป็น "ตึกระฟ้าที่เป็นมิตรต่อสิ่งแวดล้อม" ที่ได้รับรางวัล คุณเซฟเงินได้และยังได้ดีไซน์ที่ดีขึ้นด้วย',
                    zh: 'B：创新胜利：这座建筑成为了一座获奖的"生态摩天大楼"。你节省了预算并改善了设计。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🎰 Take a Cut: "I\'ll use the cheaper steel, but skip the inspection. Nobody will ever check the chemical composition of the beams once they\'re in concrete."',
                    th: '🎰 ยอมลดสเปค: "ผมจะใช้เหล็กราคาถูกนั่นแหละ แต่จะข้ามการตรวจสอบไป ไม่มีใครมานั่งเช็กส่วนประกอบเคมีของคานหรอกถ้ามันถูกฝังในปูนไปแล้ว"',
                    zh: 'C：冒险： "我会使用更便宜的钢材，但跳过检查。一旦梁埋入混凝土，就没人会去检查它们的化学成分。"'
                },
                consequence: {
                    en: '💀 Catastrophe: A beam snapped during construction. Two workers died. You are facing life in prison and the building is demolished.',
                    th: '💀 หายนะ: คานเหล็กหักระหว่างก่อสร้าง มีคนงานตาย 2 คน คุณเจอโทษจำคุกตลอดชีวิตและตึกถูกสั่งทุบทิ้ง',
                    zh: 'C：大难临头：施工期间一根梁折断了。两名工人遇难。你面临终身监禁，建筑被拆除。'
                },
                stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Partial Order: "Order half the amount of premium steel. We\'ll try to thin out the structural density to save weight. The engineers can make it work, right?"',
                    th: '📉 สั่งของครึ่งเดียว: "สั่งเหล็กพรีเมียมมาครึ่งของที่ต้องใช้พอ เราจะพยายามลดความหนาแน่นเชิงโครงสร้างเพื่อลดน้ำหนัก วิศวกรน่าจะทำได้ใช่ไหม?"',
                    zh: 'D：部分订购："订购一半数量的高质钢材。我们试着减薄结构密度以减轻重量。工程师能做到的，对吧？"'
                },
                consequence: {
                    en: '⚠️ Structural Risk: The building is safe now, but it sways too much in high winds. The office workers on the top floor get seasick every day.',
                    th: '⚠️ ความเสี่ยงต่อโครงสร้าง: ตอนนี้ตึกน่ะปลอดภัยดี แต่มันแกว่งมากเวลาลมแรง พนักงานออฟฟิศชั้นบนสุดเมาเรือกันทุกๆ วันเลยล่ะ',
                    zh: 'D：结构风险：目前建筑是安全的，但在强风中摆动太大。顶层的上班族每天都会晕车。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'construction_028',
        text: {
            en: '🏗️ The Strike: Your concrete team goes on strike for better pay. You are in the middle of a continuous pour for the foundation. If the pour stops, the foundation will have a weak "cold joint" and fail.',
            th: '🏗️ การประท้วงหยุดงาน: ทีมงานเทปูนของคุณประท้วงนัดหยุดงานเพื่อเรียกค่าแรงเพิ่ม คุณกำลังอยู่ระหว่างการเทปูนฐานรากแบบต่อเนื่อง ถ้าหยุดเท ฐานรากจะมี "รอยจำเจ" (cold joint) และจะพังเอาได้',
            zh: '🏗️ 罢工：你的混凝土团队为提高薪资而罢工。你正处于基础连续浇筑的过程中。如果浇筑停止，基础将出现薄弱的"冷接缝"并导致失效。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Immediate Raise: "I\'ll sign the new contract right now. Just get back to work. We can\'t lose this foundation."',
                    th: '🤝 ให้ขึ้นเงินทันที: "ผมจะเซ็นสัญญาใหม่เดี๋ยวนี้เลย กลับไปทำงานเดี๋ยวนี้ เราจะเสียฐานรากนี้ไปไม่ได้"',
                    zh: 'A：立即加薪："我现在就签署新合同。快回去工作。我们不能失去这个地基。"'
                },
                consequence: {
                    en: '🛡️ Disaster Averted: The pour continues. You saved the building, but the developer is furious that you blew the labor budget without approval.',
                    th: '🛡️ หยุดยั้งหายนะ: งานเทปูนดำเนินต่อ คุณช่วยตึกไว้ได้ แต่ผู้พัฒนาโปรเจกต์โกรธจัดที่คุณไปเพิ่มงบค่าแรงโดยไม่ได้รับอนุญาต',
                    zh: 'A：化险为夷：浇筑继续进行。你挽救了建筑，但开发商对你未经批准就超出了人工预算感到愤怒。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '👷 Grab a Shovel: "Get every office staff, the engineers, and the client out here with shovels and vibrators. We\'re finishing this ourselves!"',
                    th: '👷 ลงมือเองเลย: "เรียกพนักงานออฟฟิศ วิศวกร และลูกค้ามาที่นี่ให้หมด ถือพลั่วกับเครื่องสั่นปูนมาด้วย เราจะทำให้เสร็จด้วยตัวเอง!"',
                    zh: 'B：拿起铁锹："让所有办公室职员、工程师和客户都拿着铁锹和振捣器到场。我们要由自己来完成它！"'
                },
                consequence: {
                    en: '🌟 Heroic Stand: It\'s messy and exhausting, but the crew sees the client bonding with them. The strikers feel guilty and return to help. Leadership 100.',
                    th: '🌟 การยืนหยัดของฮีโร่: มันอาจจะเละเทะและเหนื่อยสุดๆ แต่ทีมงานเห็นลูกค้าลงมาช่วย Strikers เลยรู้สึกผิดแล้วกลับมาช่วยต่อ ความเป็นผู้นำเต็มร้อยเลยครับ',
                    zh: '🌟 英雄般的立场：虽然现场一团糟且精疲力竭，但团队们看到了客户与他们团结在一起。罢工者感到愧疚并回来帮忙。领导力满分。'
                },
                stats: { competence: 30, ethics: 30, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '📉 Let it Fail: "We are not being extorted. Stop the pour. We will sue the union later for the demolition and re-pour costs."',
                    th: '📉 ปล่อยมันพังไป: "เราจะไม่ยอมโดนขู่กรรโชก หยุดเทปูนซะ เราจะฟ้องสหภาพแรงงานทีหลังเรื่องค่าทุบและค่าเทใหม่"',
                    zh: 'C：让它失败："我们不接受勒索。停止浇筑。我们稍后将就拆除和重新浇筑的费用起诉工会。"'
                },
                consequence: {
                    en: '💀 Financial Ruin: The lawsuit takes 10 years. The company goes bankrupt in 1 year. The half-finished site becomes an eyesore.',
                    th: '💀 พังพินาศทางการเงิน: การฟ้องร้องใช้เวลา 10 ปี แต่บริษัทล้มละลายใน 1 ปี ไซต์งานที่ค้างคาอยู่อย่างนั้นกลายเป็นจุดอุจาดของเมือง',
                    zh: 'C：财务破产：诉讼历时 10 年。公司在 1 年内破产。半途而废的工地变成了一个令人头疼的眼中钉。'
                },
                stats: { competence: 10, ethics: 10, leadership: -40, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🧠 Retarder Hack: "Add massive amounts of sugar or retarder chemical to the mix in the trucks. It keeps the concrete wet for 12 hours. It buys us time to negotiate."',
                    th: '🧠 ทริคหน่วงเวลา: "ใส่น้ำตาลหรือสารหน่วงปูนลงไปในรถปูนเยอะๆ เลย มันจะช่วยให้ปูนไม่แข็งตัวไปอีก 12 ชั่วโมง ช่วยซื้อเวลาให้เราเจรจาได้"',
                    zh: 'D：减速剂策略："在卡车的搅拌物中加入大量的糖或减速剂。这能让混凝土保持 12 小时不凝固。这为我们赢得了谈的时间。"'
                },
                consequence: {
                    en: '💡 Chemistry Win: The trick works. You negotiate a fair deal by midnight and finish the pour. The concrete strength is tested and passes.',
                    th: '💡 ชนะด้วยเคมี: ทริคนี้ได้ผล! คุณเจรจาได้สำเร็จตอนเที่ยงคืนและเทปูนต่อจนเสร็จ ผลการทดสอบกำลังอัดปูนผ่านฉลุย',
                    zh: 'D：化学胜利：这一招奏效了。你在午夜前通过谈达成了一个公平的协议并完成了浇筑。混凝土强度经过测试并合格。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'construction_029',
        text: {
            en: '🚁 The Unstable Slope: You are building a luxury house on a cliff. Heavy rain causes a mudslide that exposes the foundation piers. The house is literally hanging by a thread over the ocean.',
            th: '🚁 หน้าผาที่ไม่มั่นคง: คุณกำลังสร้างบ้านหรูบนหน้าผา ฝนที่ตกหนักทำให้เกิดโคลนถล่มจนเห็นเสาเข็มฐานราก บ้านกำลังแขวนอยู่เหนือมหาสมุทรด้วยความหวังอันน้อยนิด',
            zh: '🚁 不稳定的斜坡：你正在断崖上建造一座豪宅。大雨引发了泥石流，使地基桩基暴露在外。房子简直是岌岌可危地悬在海洋上方。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🆘 Evacuate and Abandon: "It\'s a total loss. Get everyone out, cut the power, and let it go. We can\'t risk lives for a house."',
                    th: '🆘 อพยพและทิ้งงาน: "เสียหมดแล้วครับ พาทุกคนออกมา ตัดไฟ แล้วปล่อยมันไป เราเอาชีวิตคนมาเสี่ยงกับบ้านหลังเดียวไม่ได้"',
                    zh: 'A：疏散并放弃："彻底损失。疏散所有人，切断电源，随它去吧。我们不能为了房子而拿生命冒险。"'
                },
                consequence: {
                    en: '🛡️ Heroic Safety: The house falls 20 minutes later. Nobody dies. The owner is devastated but thanks you for saving his life.',
                    th: '🛡️ ความปลอดภัยคือที่สุด: บ้านถล่มลงไปในอีก 20 นาทีต่อมา ไม่มีใครตาย เจ้าของบ้านเสียใจมากแต่ขอบคุณที่คุณช่วยชีวิตเขาไว้',
                    zh: 'A：英雄般的安全决策：20 分钟后房子坍塌了。无人伤亡。房主虽然心碎，但感谢你救了他的命。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏗️ Anchor Cables: "Get the heavy-lift crane here and anchor the house to the bedrock with emergency steel cables while we reinforce the cliff."',
                    th: '🏗️ สลิงยึด: "เอาเครนยกของหนักมาที่นี่แล้วยึดบ้านไว้กับหินผาด้วยสลิงเหล็กฉุกเฉิน ระหว่างที่เราเสริมกำลังหน้าผา"',
                    zh: 'B：锚固电缆："调派重型起重机到场，在加固悬崖的同时，用应急钢缆将房子锚固在基岩上。"'
                },
                consequence: {
                    en: '⚠️ Lucky Save: It worked, but it cost $500k in emergency rentals. You saved the house, but the client is arguing about the bill.',
                    th: '⚠️ รอดหวุดหวิด: ได้ผลนะแต่เสียค่าเช่าอุปกรณ์ฉุกเฉินไป 5 แสนดอลลาร์ คุณช่วยบ้านไว้ได้แต่ลูกค้ากำลังโวยวายเรื่องบิลค่าใช้จ่าย',
                    zh: 'B：侥幸挽救：奏效了，但应急租赁花费了 50 万美元。你保住了房子，但客户正为账单争论不休。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Shotcrete Injection: "Don\'t move the house. Inject high-pressure expanding foam and shotcrete into the mudslide area to solidify the ground instantly."',
                    th: '🧠 อัดฉีดช็อตกรีต: "อย่าขยับบ้าน อัดโฟมขยายตัวแรงดันสูงกับช็อตกรีต (Shotcrete) ลงไปในจุดที่โคลนถล่มเพื่อทำให้ดินแข็งตัวทันที"',
                    zh: 'C：喷射混凝土注入："不要移动房子。向泥石流区域注入高压膨胀泡沫和喷射混凝土，使其瞬间固化。"'
                },
                consequence: {
                    en: '💡 Dynamic Solution: The ground turns to solid rock in 2 hours. The house is saved. Geologists use your method as a case study for cliff stability.',
                    th: '💡 ทางออกที่ลงตัว: ดินกลายเป็นหินแข็งใน 2 ชั่วโมง บ้านรอดตาย! เหล่านักธรณีวิทยาเอากรรมวิธีของคุณไปเป็นกรณีศึกษาเรื่องความมั่นคงของหน้าผาด้วยนะ',
                    zh: 'C：动态解决方案：地面在 2 小时内变成了坚硬的岩石。房子保住了。地质学家将你的方法作为悬崖稳定性研究的案例。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Hope for the Best: "The storm will pass. The piers are deep enough. Just put some sandbags to stop further erosion and wait."',
                    th: '🤷 ฝากไว้กับโชค: "เดี๋ยวพายุก็ผ่านไป เสาเข็มเราลึกพออยู่แล้ว แค่เอาที่กั้นทรายไปวางกันหน้าดินทรุดเพิ่มแล้วรอดูอาการแล้วกัน"',
                    zh: 'D：抱最好的希望："暴雨会过去的。桩基够深。只需放置一些沙袋以阻止进一步侵蚀，然后等待。"'
                },
                consequence: {
                    en: '💀 Catastrophe: The house slid into the ocean at midnight. You are sued for gross negligence.',
                    th: '💀 หายนะ: บ้านสไลด์ลงมหาสมุทรตอนเที่ยงคืน คุณโดนฟ้องฐานประมาทเลินเล่ออย่างร้ายแรง',
                    zh: 'D：大难临头：房子在午夜滑入了大海。你因重大过失而被起诉。'
                },
                stats: { competence: 10, ethics: 10, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_030',
        text: {
            en: '🚢 The Shipping Container Mix-up: You are building a sustainable container home development. 50 containers arrived from overseas, but they were used to transport hazardous chemicals previously and were never cleaned.',
            th: '🚢 ตู้คอนเทนเนอร์เจ้าปัญหา: คุณกำลังสร้างโครงการบ้านตู้คอนเทนเนอร์เพื่อความยั่งยืน ตู้ 50 ใบส่งมาจากต่างประเทศ แต่ปรากฏว่ามันเคยใช้ขนสารเคมีอันตรายมาก่อนและไม่เคยผ่านการล้างทำความสะอาดเลย',
            zh: '🚢 集装箱混淆：你正在建造一个可持续集装箱住宅开发项目。从海外运来了 50 个集装箱，但它们以前曾被用来运输危险化学品，且从未清理过。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Reject the Shipment: "Send them back. It\'s too dangerous. I\'m not building houses for families out of toxic metal boxes."',
                    th: '🛑 ปฏิเสธการรับของ: "ส่งกลับไปเดี๋ยวนี้ มันอันตรายเกินไป ผมจะไม่สร้างบ้านให้ครอบครัวคนอื่นด้วยกล่องเหล็กที่มีสารพิษเด็ดขาด"',
                    zh: 'A：拒绝货： "退回它们。太危险了。我不会用有毒的金属箱子给家庭盖房子。"'
                },
                consequence: {
                    en: '🛡️ Ethical Pillar: The supplier is angry and you lose the $100k shipping deposit, but the local news praises your commitment to health.',
                    th: '🛡️ เสาหลักแห่งจริยธรรม: ซัพพลายเออร์โกรธจัดและคุณเสียเงินมัดจำค่ามัดจำ 1 แสนดอลลาร์ไปฟรีๆ แต่สื่อท้องถิ่นชมคุณเปาะเรื่องการใส่ใจสุขภาพผู้คน',
                    zh: 'A：道德支柱：供应商很生气，你损失了 10 万美元的海运押金，但当地新闻赞扬了你对健康的承诺。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧪 Steam Clean: "Hire a professional cleaning crew to sandblast the insides and steam clean them with industrial solvents. It\'ll be fine once we paint them."',
                    th: '🧪 ล้างอัดฉีด: "จ้างทีมทำความสะอาดมืออาชีพมาขัดพ่นทรายข้างในให้เกลี้ยงแล้วพ่นไอน้ำด้วยสารละลายอุตสาหกรรม ทาสีทับก็โอเคแล้ว"',
                    zh: 'B：蒸汽清理："雇佣专业的清洁团队对内部进行喷砂处理，并用工业溶剂进行蒸汽清理。一旦我们刷上漆就没事了。"'
                },
                consequence: {
                    en: '⚠️ Health Scares: After a year, residents report strange smells. Some chemicals had soaked into the corner welds. Minor lawsuits and bad PR.',
                    th: '⚠️ ปัญหาสุขภาพ: ผ่านไปปีนึง คนอยู่บ่นว่ามีกลิ่นแปลกๆ สารเคมีบางส่วนมันซึมเข้าไปในรอยเชื่อมตรงมุมตู้ โดนฟ้องและเสียชื่อเสียงนิดหน่อย',
                    zh: 'B：健康恐慌：一年后，居民举报由于不明气体。一些化学物质渗入了角落的焊缝。引发了轻微诉讼和负面公关。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Gas-Phase Treatment: "Use an ozone-generator and activated carbon filters to neutralize the residual chemicals at a molecular level. It\'s cheaper than shipping them back."',
                    th: '🧠 การบำบัดด้วยก๊าซ: "ใช้เครื่องกำเนิดโอโซนกับฟิลเตอร์คาร์บอนกัมมันต์เพื่อกำจัดสารเคมีตกค้างในระดับโมเลกุลไปเลย ถูกกว่าส่งคืนเยอะ"',
                    zh: 'C：气相处理："使用臭氧发生器和活性炭过滤器在分子水平上中和残留化学物质。这比把它们运回去便宜。"'
                },
                consequence: {
                    en: '💡 Innovation Victory: Independent testing shows 0.0% toxins. You developed a new protocol for container recycling. Patent pending!',
                    th: '💡 ชัยชนะของนวัตกรรม: ผลการทดสอบอิสระพบสารพิษ 0.0% คุณได้สร้างมาตรฐานใหม่ในการรีไซเคิลตู้คอนเทนเนอร์ เตรียมจดสิทธิบัตรได้เลย!',
                    zh: 'C：创新胜利：独立测试显示毒素为 0.0%。你开发了一套全新的集装箱回收协议。专利申请中！'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Ignore and Build: "The insulation and drywall will cover it. Zinc primers are strong enough to seal anything. Start the framing today."',
                    th: '🤷 เมินเฉยแล้วสร้างต่อ: "เดี๋ยวฉนวนกับฝ้ายิปซั่มก็บังหมดเอง สีรองพื้นที่ผสมซิงค์น่ะมันแข็งแรงพอจะกันทุกอย่างได้อยู่แล้ว เริ่มขึ้นโครงวันนี้เลย"',
                    zh: 'D：无视并建造："隔热层和干壁会盖住它的。锌底漆强度足够密封任何东西。今天就开始框架施工。"'
                },
                consequence: {
                    en: '💀 Disaster: Within 3 months of moving in, children develop respiratory issues. You are sued for millions and lose your license.',
                    th: '💀 หายนะ: ภายใน 3 เดือนหลังเข้าอยู่ เด็กๆ เริ่มมาปัญหาทางเดินหายใจ คุณโดนฟ้องเรียกเงินล้านและโดนยึดใบอนุญาต',
                    zh: 'D：灾难：搬入 3 个月内，儿童出现了呼吸系统问题。你被起诉并赔偿数百万美元，且失去了执照。'
                },
                stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_031',
        text: {
            en: '🚢 The Modular Delay: You are building a modular hotel. The modules are manufactured off-site. The factory just informed you that 50 modules have been damaged in a flood. Sticking to the schedule with traditional construction would be impossible.',
            th: '🚢 ความล่าช้าของโมดูลาร์: คุณกำลังสร้างโรงแรมแบบโมดูลาร์ (Modular Hotel) ซึ่งชิ้นส่วนถูกผลิตจากโรงงาน โรงงานเพิ่งแจ้งว่าโมดูล 50 ห้องเสียหายจากน้ำท่วม การจะเปลี่ยนมาสร้างแบบดั้งเดิมเพื่อให้ทันกำหนดการนั้นแทบจะเป็นไปไม่ได้',
            zh: '🚢 模块化延误：你正在建造一家模块化酒店。这些模块是在异地制造的。工厂刚刚通知你，有 50 个模块在洪水中损坏。采用传统建筑方式按期完成是不可能的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏗️ Hybrid Pivot: "Pivot to traditional concrete for the first two floors immediately. Use local crews to start while the factory rebuilds the remaining modules. We can still hit the partial opening date."',
                    th: '🏗️ ปรับเปลี่ยนแบบไฮบริด: "เปลี่ยนมาใช้คอนกรีตแบบดั้งเดิมสำหรับสองชั้นแรกทันที จ้างคนงานในพื้นที่เริ่มงานก่อนระหว่างรอโรงงานซ่อมโมดูลที่เหลือ เรายังทันวันเปิดบริการบางส่วนนะ"',
                    zh: 'A：混合转产：“立即将前两层改为传统混凝土施工。由本地施工队先行开工，同时让工厂重建剩余模块。我们仍能赶上部分开业日期。”'
                },
                consequence: {
                    en: '🛡️ Efficient Management: You saved the project from total collapse. The client is impressed by your flexibility. The hotel opens on time, albeit with two different construction styles.',
                    th: '🛡️ การจัดการที่มีประสิทธิภาพ: คุณช่วยโปรเจกต์ไม่ให้พังพินาศ ลูกค้าประทับใจในความยืดหยุ่นของคุณ โรงแรมเปิดได้ทันเวลา ถึงแม้ว่ารูปแบบการสร้างของสองชั้นแรกจะต่างออกไปนิดหน่อยก็ตาม',
                    zh: '🛡️ 高效管理：你从彻底崩盘中挽救了项目。客户对你的灵活性印象深刻。酒店按时开业，尽管采用了两种不同的建筑风格。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '⏳ Wait for Factory: "We committed to modular. Just wait for the factory. Tell the client it\'s an \'Act of God\' (Force Majeure) and we are not liable for the delay."',
                    th: '⏳ รอโรงงาน: "เราตกลงจะทำแบบโมดูลาร์แล้ว ก็ต้องรอโรงงานแหละ บอกลูกค้าว่าเป็นเหตุสุดวิสัย (Force Majeure) และเราไม่ต้องรับผิดชอบในความล่าช้านี้"',
                    zh: 'B：等待工厂：“我们承诺了模块化。就等工厂吧。告诉客户这是‘天灾’（不可抗力），我们不对延误负责。”'
                },
                consequence: {
                    en: '💀 Client Loss: The client sued you anyway, arguing you should have had a backup supplier. The project is stalled for a year. You lost the account.',
                    th: '💀 เสียลูกค้า: ลูกค้าฟ้องคุณอยู่ดี โดยอ้างว่าคุณควรจะมีซัพพลายเออร์สำรอง โปรเจกต์หยุดชะงักไปเป็นปี และคุณก็เสียลูกค้ารายนี้ไปตลอดกาล',
                    zh: 'B：流失客户：客户还是起诉了你，认为你应该有备用供应商。项目停滞了一年。你失去了这个客户。'
                },
                stats: { competence: 10, ethics: 10, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Accelerated Traditional: "Abandon modular entirely for this project. Hire triple the labor force and work 24/7 shifts using traditional methods. We will prove we can do it faster the old way."',
                    th: '🧠 เร่งงานแบบดั้งเดิม: "ทิ้งระบบโมดูลาร์ไปเลยในโปรเจกต์นี้ จ้างคนงานเพิ่มเป็นสามเท่าแล้วทำกะ 24 ชั่วโมงโดยใช้วิธีสร้างแบบดั้งเดิม เราจะพิสูจน์ว่าทำแบบเก่าก็เร็วได้"',
                    zh: 'C：加速传统施工：“完全放弃这个项目的模块化方案。雇佣三倍的劳动力，采用传统方法 24 小时轮班作业。我们要证明用老办法能做得更快。”'
                },
                consequence: {
                    en: '📉 Budget Blowout: You finished on time, but the labor costs were 400% over budget. The profit margin is gone. Your boss is furious.',
                    th: '📉 งบบานปลาย: คุณทำงานเสร็จทันเวลา แต่ค่าแรงสูงกว่างบที่ตั้งไว้ถึง 400% กำไรหายหมดเลย เจ้านายคุณโกรธมาก',
                    zh: 'C：预算爆炸：你按时完工了，但劳动力成本超出了预算 400%。利润空间荡然无存。你的老板怒不可遏。'
                },
                stats: { competence: 30, ethics: 20, leadership: 40, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Negotiate Scope: "Ask the client if they can reduce the hotel size by 50 rooms to match the surviving modules. We can finish early and save them money."',
                    th: '📞 เจรจาขอบเขตงาน: "ถามลูกค้าว่าเขาลดจำนวนห้องลง 50 ห้องให้พอดีกับโมดูลที่เหลือได้ไหม เราจะงานเสร็จเร็วขึ้นและช่วยเขาประหยัดเงินด้วย"',
                    zh: 'D：协商范围：“询问客户是否可以将酒店规模缩减 50 间房，以匹配幸存的模块。我们可以提前完工并为他们省钱。”'
                },
                consequence: {
                    en: '⚠️ Reputation Hit: The client agreed, but they perceive you as someone who can\'t deliver on big promises. You won\'t get the contract for the next hotel.',
                    th: '⚠️ เสียชื่อเสียง: ลูกค้ายอมตกลง แต่เขามองว่าคุณเป็นคนที่ไม่สามารถทำตามสัญญาใหญ่ๆ ได้ คุณจะไม่ได้งานสร้างโรงแรมแห่งต่อไปของเขาแน่นอน',
                    zh: 'D：名誉受损：客户同意了，但他们觉得你是个无法兑现重大承诺的人。你拿不到下一家酒店的合同了。'
                },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_032',
        text: {
            en: '⚖️ The "Good Ol\' Boy" Subcontractor: Your plumbing subcontractor is a personal friend of the CEO. They are doing sloppy work and failing safety inspections, but they are "untouchable" in the company hierarchy.',
            th: '⚖️ ผู้รับเหมาเด็กเส้น: ผู้รับเหมางานประปาเป็นเพื่อนสนิทของ CEO งานที่พวกเขาทำออกมาแย่มากและไม่ผ่านเกณฑ์ความปลอดภัยหลายอย่าง แต่ในตำแหน่งหน้าที่ของบริษัทแล้ว พวกเขาเหมือนเป็น "คนแตะต้องไม่ได้"',
            zh: '⚖️ “老伙计”分包商：你的管道分包商是首席执行官的私人朋友。他们工作马虎，未能通过安全检查，但在公司层级中却是“动不得”的人物。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📋 Documentation War: "Document every single failure. Photo evidence, third-party inspection reports, and cost of rework. Present the folder to HR and the CEO directly. Facts over friends."',
                    th: '📋 สู้ด้วยเอกสาร: "จดบันทึกทุกความผิดพลาด พยานเป็นภาพถ่าย รายงานการตรวจจากบุคคลที่สาม และค่าใช้จ่ายในการแก้งาน ส่งแฟ้มนี้ให้ HR และ CEO โดยตรง ข้อเท็จจริงต้องมาก่อนความเป็นเพื่อน"',
                    zh: 'A：文档战争：“记录每一次失败。照片证据、第三方检查报告以及返工成本。直接向人力资源部门和首席执行官呈递文件夹。事实胜过交情。”'
                },
                consequence: {
                    en: '🛡️ Ethical Victory: The CEO was embarrassed but couldn\'t ignore the data. The sub was replaced. You established yourself as a professional who puts quality first.',
                    th: '🛡️ ชัยชนะทางศีลธรรม: CEO ถึงกับหน้าเสียแต่ก็ปฏิเสธข้อมูลไม่ได้ สุดท้ายผู้รับเหมารายนั้นก็ถูกเปลี่ยนตัว คุณพิสูจน์ตัวเองว่าเป็นมืออาชีพที่เอาคุณภาพงานเป็นที่ตั้ง',
                    zh: '🛡️ 职业道德的胜利：首席执行官感到尴尬，但无法忽视数据。分包商被更换了。你树立了质量优先的专业形象。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Fix it Quietly: "Don\'t rock the boat. Use my own crew to fix their mistakes at night. I want to keep my job and keep the CEO happy."',
                    th: '🤫 แอบแก้เงียบๆ: "อย่าทำให้เรื่องบานปลาย ใช้คนงานของฉันแอบแก้งานที่พวกเขาทำพลาดตอนกลางคืน ฉันอยากรักษาเก้าอี้ไว้และทำให้ CEO แฮปปี้"',
                    zh: 'B：悄悄修复：“不要兴风作浪。夜里派我自己的施工队去修复他们的错误。我想保住工作并让首席执行官满意。”'
                },
                consequence: {
                    en: '💀 Safety Breach: A pipe burst a month after completion because the shortcut was too deep. The CEO blamed YOU for not supervising correctly. You are the scapegoat.',
                    th: '💀 ความปลอดภัยบกพร่อง: หนึ่งเดือนหลังงานจบ ท่อเกิดระเบิดขึ้นเพราะรอยรั่วที่แอบแก้นั้นมันลึกเกินไป CEO โทษคุณที่ไม่คุมงานให้ดี คุณกลายเป็นแพะรับบาปเฉยเลย',
                    zh: 'B：安全违规：完工一个月后一根水管爆裂了，因为采取的捷径隐患太大。首席执行官指责你监督不力。你成了替罪羊。'
                },
                stats: { competence: 20, ethics: 10, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Quality Coaching: "Invite the sub to lunch. Show them the reports privately. Offer to lend them my best foreman to \'consult\' on their work. Help them improve so the CEO looks good."',
                    th: '🧠 สอนงานเนียนๆ: "ชวนผู้รับเหมารายนั้นไปกินข้าวกลางวัน เปิดรายงานให้เขาดูเป็นการส่วนตัว แล้วเสนอว่าจ้างหัวหน้างานมือหนึ่งของฉันไปเป็น ‘ที่ปรึกษา’ ให้เขา ช่วยเขาพัฒนาให้งานออกมาดีเพื่อให้ CEO ดูดีไปด้วย"',
                    zh: 'C：质量指导：“请分包商吃午饭。私下给他们看报告。主动提出借给他们我最优秀的工头，为他们的工作提供‘咨询’。帮助他们改进，让首席执行官面子上有光。”'
                },
                consequence: {
                    en: '💡 Dynamic Leadership: They appreciated the help. The quality improved drastically. You built a powerful internal alliance without embarrassing the boss.',
                    th: '💡 ภาวะผู้นำที่ชาญฉลาด: พวกเขาขอบคุณที่คุณช่วย คุณภาพงานดีขึ้นอย่างเห็นได้ชัด คุณสร้างพันธมิตรภายในที่แข็งแกร่งโดยไม่ต้องทำให้เจ้านายเสียหน้าเลยสักนิด',
                    zh: '💡 动态领导力：他们对帮助表示感谢。工作质量大幅提高。你在不让老板尴尬的情况下，建立了强大的内部联盟。'
                },
                stats: { competence: 40, ethics: 30, leadership: 50, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Ignore it: "If the CEO wants a leaky building, they get a leaky building. Not my problem."',
                    th: '🤷 ช่างมัน: "ถ้า CEO อยากได้ตึกที่มีน้ำรั่ว ก็จัดให้สิ ไม่ใช่ปัญหาของฉันสักหน่อย"',
                    zh: 'D：不管不顾：“如果首席执行官想要一栋漏水的建筑，那就给他们一栋漏水的建筑。不关我的事。”'
                },
                consequence: {
                    en: '📉 Career Stagnation: You developed a reputation for being lazy and unobservant. You are passed over for the next major promotion.',
                    th: '📉 หน้าที่การงานหยุดชะงัก: คุณถูกมองว่าเป็นคนขี้เกียจและไม่มีไหวพริบ สุดท้ายคุณก็วืดตำแหน่งสำคัญในการเลื่อนขั้นครั้งต่อไป',
                    zh: 'D：职业停滞：你落下了懒惰、察觉力差的名声。你在下一次重大晋升中落选了。'
                },
                stats: { competence: 10, ethics: 20, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_033',
        text: {
            en: '🏗️ The Concrete Cure: It\'s a cold winter. You need to pour a massive foundation. The owner wants it poured tomorrow to meet a tax deadline, but the temperature is below freezing. Pouring now risks structural failure in 5 years.',
            th: '🏗️ การเซ็ตตัวของคอนกรีต: ช่วงฤดูหนาวที่อากาศเย็นจัด คุณต้องเทรากฐานขนาดใหญ่ เจ้าของงานอยากให้เทพรุ่งนี้เลยเพื่อจะได้ทันกำหนดเสียภาษี แต่อุณหภูมิมันต่ำกว่าจุดเยือกแข็ง การเทตอนนี้มีความเสี่ยงที่โครงสร้างจะพังภายใน 5 ปีข้างหน้า',
            zh: '🏗️ 混凝土养护：现在是寒冬。你需要浇筑一个巨大的地基。业主希望明天就浇筑以赶上税务截止日期，但气温在冰点以下。现在浇筑可能会导致 5 年后出现结构失效风险。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Hard No: "I will not pour until we have heating blankets and enclosures. The cold will freeze the water in the mix before it hydrates. I prioritize integrity over taxes."',
                    th: '🛑 ปฏิเสธหัวชนฝา: "ผมจะไม่เทจนกว่าเราจะมีแผ่นกันความร้อนและที่กั้น อากาศหนาวจะทำให้น้ำในส่วนผสมกลายเป็นน้ำแข็งก่อนที่จะเซ็ตตัว ผมให้ความสำคัญกับความปลอดภัยของอาคารมากกว่าเรื่องภาษี"',
                    zh: 'A：坚决拒绝：“在没有加热毯和围挡之前，我不会进行浇筑。低温会在水化作用发生前冻结混合物中的水分。正直重于税务。”'
                },
                consequence: {
                    en: '🛡️ Safety Standard: The owner was angry, but when the neighboring site\'s foundation cracked a month later, they bought you dinner. You saved the building.',
                    th: '🛡️ มาตรฐานความปลอดภัย: เจ้าของงานโกรธมาก แต่พอเดือนต่อมารากฐานของตึกข้างๆ เกิดรอยร้าว เขาก็ยอมเลี้ยงข้าวขอบคุณคุณเลยล่ะ คุณช่วยไม่ให้ตึกถล่มนะเนี่ย',
                    zh: '🛡️ 安全准则：业主很生气，但当一个月后邻近工地的地基开裂时，他们请你吃了饭。你挽救了这座建筑。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧪 Add Chemical Heat: "Use a heavy dose of calcium chloride to speed up the set. It\'s risky for the rebar, but it will work for the tax deadline."',
                    th: '🧪 ใส่สารเคมีเร่งความร้อน: "ใส่แคลเซียมคลอไรด์เยอะๆ เพื่อให้มันเซ็ตตัวไวขึ้น มันเสี่ยงที่เหล็กเส้นจะเป็นสนิมนะ แต่น่าจะทันกำหนดภาษีแหละ"',
                    zh: 'B：添加化学热量：“使用大剂量的氯化钙来加速固化。这对钢筋有风险，但能赶上税务截止日期。”'
                },
                consequence: {
                    en: '💀 Long-term Failure: The foundation held... for 3 years. Then the rebar corroded and the building started leaning. You were sued for negligence.',
                    th: '💀 พังในระยะยาว: รากฐานอยู่ได้แค่ 3 ปี แล้วเหล็กเส้นก็เริ่มผุกร่อนจนตึกเอียง คุณถูกฟ้องฐานประมาทเลินเล่อ',
                    zh: 'B：长期失效：地基维持了……3 年。然后钢筋腐蚀，建筑开始倾斜。你因疏忽被起诉。'
                },
                stats: { competence: 20, ethics: 10, leadership: -20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Hot Water & Enclosure: "Order hot water for the mix. Set up temporary heaters and insulated tents over the site tonight. It adds $50k to the cost, but we can pour safely."',
                    th: '🧠 น้ำร้อนและโรงเรือน: "สั่งน้ำร้อนมาผสมปูน คืนนี้จัดวางฮีตเตอร์และเต็นท์ฉนวนกันความร้อนทั่วไซต์งานเลย มันต้องจ่ายเพิ่ม 5 หมื่นเหรียญนะแต่เราจะเทงานได้อย่างปลอดภัย"',
                    zh: 'C：热水与围挡：“订购用于混合的热水。今晚在工地上架设临时加热器和绝缘帐篷。这会增加 5 万美元成本，但我们可以安全浇筑。”'
                },
                consequence: {
                    en: '💡 Technical Masterclass: You solved the problem. The owner paid the extra cost happily to save millions in taxes. The concrete cured perfectly.',
                    th: '💡 มาสเตอร์คลาสเทคนิค: คุณแก้ปัญหาได้ เจ้าของงานยอมจ่ายเงินเพิ่มอย่างเต็มใจเพราะมันประหยัดภาษีได้เป็นล้าน คอนกรีตเซ็ตตัวออกมาอย่างไร้ที่ติ',
                    zh: 'C：技术大师课：你解决了问题。业主乐意支付额外费用，以节省数百万美元的税款。混凝土养护得非常完美。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Let the Owner Sign a Waiver: "I\'ll pour, but only if you sign this document saying it\'s your fault if it fails. I\'m covered."',
                    th: '🤷 ให้เจ้าของเซ็นใบยินยอม: "ผมจะเทให้ก็ได้ แต่คุณต้องเซ็นเอกสารนี่ว่าถ้ามันพังเป็นความผิดคุณนะ ผมจะได้ไม่ต้องรับผิดชอบ"',
                    zh: 'D：让业主签署免责声明：“我会浇筑，但前提是你签署这份文件，声明如果失效由你负责。这样我就免责了。”'
                },
                consequence: {
                    en: '📉 Reputation Damage: The owner signed it, but they told everyone in the city you aren\'t a "real" manager who solves problems—you just cover your own back.',
                    th: '📉 เสียชื่อเสียง: เจ้าของเซ็นให้นะ แต่เขาเอาไปนินทาทั่วเมืองว่าคุณไม่ใช่ผู้จัดการ “ตัวจริง” ที่ช่วยแก้ปัญหา คุณแค่พยายามเอาตัวรอดไปวันๆ เท่านั้น',
                    zh: 'D：名誉受损：业主签了字，但他们告诉城里的每一个人，你不是一个能解决难题的“真”经理——你只是在自保。'
                },
                stats: { competence: 10, ethics: 20, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_034',
        text: {
            en: '🏗️ The Union Walkout: Your site is 50% union and 50% non-union. A dispute over break times elsewhere has caused a sympathy strike. The union workers just walked off. The concrete trucks for the second floor are 10 minutes away.',
            th: '🏗️ สหภาพแรงงานประท้วง: ไซต์งานของคุณมีทั้งแรงงานที่เป็นสมาชิกสหภาพและไม่ใช่สมาชิกอย่างละครึ่ง จู่ๆ การประท้วงจากที่อื่นก็ทำให้คนงานสหภาพที่นี่ขอประท้วงตามไปด้วยแล้วเดินออกจากงานทันที ขณะที่รถปูนสำหรับเทชั้นสองกำลังจะมาถึงในอีก 10 นาที',
            zh: '🏗️ 工会罢工：你的工地由 50% 的工会工人和 50% 的非工会工人组成。其他地方关于休息时间的纠纷引发了同情罢工。工会工人刚刚离场。用于二楼浇筑的混凝土车将在 10 分钟后到达。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Stop the Pour: "Cancel the trucks immediately. We don\'t have enough hands to finish the surface properly. A cold joint will ruin the floor. Negotiate with the Union rep now."',
                    th: '🛑 ระงับการเทปูน: "ยกเลิกปูนเดี๋ยวนี้เลย เรามีคนไม่พอที่จะเกลี่ยผิวหน้าให้เรียบ รอยต่อของปูนที่แห้งไม่เท่ากันจะทำลายพื้นทั้งชั้น ไปเจรจากับตัวแทนสหภาพด่วน"',
                    zh: 'A：停止浇筑：“立即取消混凝土车。我们没有足够的人力来妥善处理表面。施工缝会毁了地板。立即与工会代表谈判。”'
                },
                consequence: {
                    en: '🛡️ Quality Control: You paid a cancellation fee for the concrete, but you saved the structural integrity of the building. The Union respected your calm approach.',
                    th: '🛡️ ควบคุมคุณภาพ: คุณยอมเสียค่าปรับยกเลิกปูน แต่คุณรักษาโครงสร้างของอาคารไว้ได้ สหภาพแรงงานก็นับถือในการแก้ปัญหาที่ใจเย็นของคุณ',
                    zh: 'A：质量控制：你支付了混凝土取消费用，但保住了建筑的结构完整性。工会尊重你冷静的处理方式。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏗️ Force the Non-Union: "Tell the non-union guys they have to work double-time. We are pouring this concrete whether the union likes it or not. Don\'t let them win."',
                    th: '🏗️ บังคับคนงานที่ไม่ใช่สมาชิก: "บอกพวกที่ไม่ใช่สหภาพว่าต้องทำงานเพิ่มเป็นสองเท่า เราจะเทปูนนี้ต่อไม่ว่าพวกสหภาพจะชอบหรือไม่ก็ตาม อย่าให้พวกเขาชนะเราได้"',
                    zh: 'B：强迫非工会工人：“告诉非工会工人他们必须加班。不管工会喜不喜欢，我们都要浇筑这批混凝土。别让他们得逞。”'
                },
                consequence: {
                    en: '💀 Site Violence: A fight broke out between a striker and a non-union worker. Police were called. The concrete set in the trucks because the drivers (union) refused to pour. Disaster.',
                    th: '💀 ความรุนแรงในไซต์งาน: เกิดการปะทะกันระหว่างคนประท้วงกับคนงานที่ไม่ใช่สหภาพ ตำรวจต้องเข้ามาระงับเหตุ ปูนแห้งคาเข็มขัดรถเพราะคนขับรถ (ซึ่งเป็กสมาชิกสหภาพ) ไม่ยอมเท หายนะชัดๆ',
                    zh: 'B：工地暴力：罢工者和非工会工人之间爆发了冲突。随后报警。混凝土由于司机（工会成员）拒绝浇筑而凝固在车内。简直是场灾难。'
                },
                stats: { competence: 10, ethics: 10, leadership: -40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Tactical Negotiation: "Call the Union Lead. Promise to audit the break times myself if they finish this one pour so the concrete doesn\'t waste. Appeal to their pride as craftsmen."',
                    th: '🧠 เจรจาเชิงกลยุทธ์: "เรียกหัวหน้าสหภาพมาคุย สัญญาว่าฉันจะเข้าไปดูเรื่องเวลาพักด้วยตัวเองถ้าเขายอมเทปูนชุดนี้ให้เสร็จเพื่อไม่ให้เสียของ บอกเขาว่านี่คือศักดิ์ศรีของช่างฝีมือนะ"',
                    zh: 'C：战术谈判：“给工会负责人打电话。承诺如果他们完成这次浇筑以避免混凝土浪费，我将亲自审计休息时间。诉诸他们作为工匠的自豪感。”'
                },
                consequence: {
                    en: '💡 Skillful Mediation: They agreed to a "one-time exception" for the pour. The floor was completed. You settled the strike the next morning over coffee.',
                    th: '💡 การไกล่เกลี่ยที่ยอดเยี่ยม: พวกเขายอมตกลงเป็น "กรณีพิเศษเฉพาะคราวนี้" เพื่อเทปูนให้จบ พื้นชั้นสองเสร็จสมบูรณ์ และคุณก็จบเรื่องประท้วงได้ในเช้าวันถัดมาตอนนั่งจิบกาแฟคุยกัน',
                    zh: 'C：娴熟的调解：他们同意针对这次浇筑给予“一次性例外”。地板完工了。第二天早上，你通过喝咖啡聊天解决了罢工问题。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🚜 Grab the Shovel: "I\'ll do it myself! I was a laborer once. Everyone follow me, we are finishing this pour!"',
                    th: '🚜 ลงมือทำเอง: "ฉันจะทำเอง! ฉันก็เคยเป็นกรรมกรมาก่อนนะ ทุกคนตามมา เราจะช่วยกันเทปูนให้จบ!"',
                    zh: 'D：拿起铲子：“我自己来！我也当过苦力。大家跟我来，我们要完成这次浇筑！”'
                },
                consequence: {
                    en: '📉 Leadership Failure: You looked heroic for 5 minutes, but a Manager shouldn\'t be in the mud. You missed three important calls while shoveling, and the finish was still poor.',
                    th: '📉 ความล้มเหลวของผู้นำ: คุณดูเป็นฮีโร่อยู่ 5 นาที แต่ระดับผู้จัดการไม่ควรลงไปคลุกโคลนเอง คุณพลาดสายสำคัญไป 3 สายตอนมัวแต่โกยปูน และงานที่ออกมาก็ยังดูแย่อยู่ดี',
                    zh: 'D：领导力失败：你表现得像个英雄，但这只持续了 5 分钟。经理不该把自己搞得灰头土脸。你在铲土时漏掉了三个重要电话，而且完工质量依然很差。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: -10 }
            }
        ]
    },
    {
        id: 'construction_035',
        text: {
            en: '🏗️ The Endangered Nest: While clearing trees for a new residential development, your operator finds a nest of a rare, protected bird species. Stopping work will cost $20k a day. Moving the nest is illegal.',
            th: '🏗️ รังนกใกล้สูญพันธุ์: ขณะกำลังเคลียร์พื้นที่ต้นไม้สำหรับโครงการบ้านจัดสรรใหม่ คนขับรถขุดเจอภาษีของนกหายากที่ได้รับการคุ้มครอง การหยุดงานจะทำให้เสียเงินวันละ 2 หมื่นเหรียญ ส่วนการย้ายรังก็เป็นเรื่องผิดกฎหมาย',
            zh: '🏗️ 濒危鸟巢：在为新的住宅开发项目清理树木时，你的操作员发现了一个稀有受保护鸟类的巢穴。停工每天将损失 2 万美元。挪动鸟巢是违法的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Full Stop: "Shut it down. Mark a 100-foot buffer zone. Call the wildlife agency immediately. We are not going to be the company that kills a species for a condo."',
                    th: '🛑 หยุดงานทันที: "ปิดไซต์งาน กั้นระเบียบระยะ 100 ฟุตเป็นเขตปลอดภัย โทรแจ้งหน่วยงานคุ้มครองสัตว์ป่าเดี๋ยวนี้ เราจะไม่ยอมเป็นบริษัทที่ฆ่าล้างเผ่าพันธุ์สัตว์เพียงเพราะจะสร้างคอนโด"',
                    zh: 'A：全面停工：“关停施工。划出 100 英尺的缓冲区。立即联系野生动物保护机构。我们绝不做为了盖公寓而灭绝物种的公司。”'
                },
                consequence: {
                    en: '🛡️ Ethical Standard: The delay lasted 3 weeks. The local news featured your story, branding you as the "Eco-Hero Builder." Your next three projects sold out in pre-orders.',
                    th: '🛡️ มาตรฐานทางศีลธรรม: งานล่าช้าไป 3 สัปดาห์ แต่ข่าวท้องถิ่นเอาเรื่องของคุณไปลงจนคุณได้รับฉายา "นักสร้างหัวใจสีเขียว" โปรเจกต์ต่อๆ ไปของคุณขายหมดเกลี้ยงตั้งแต่ยังไม่เปิดจองเลย',
                    zh: '🛡️ 道德标准：延误持续了 3 周。当地新闻报道了你的故事，把你打造成“生态英雄开发者”。你的下三个项目在预售阶段就售罄了。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 "Oops" Method: "Tell the operator to keep going. If the nest is gone, there\'s no evidence. I didn\'t see anything, and neither did you."',
                    th: '🤫 วิธี "อุ๊ย ไม่เห็นนะ": "บอกคนขับให้ทำต่อไป ถ้าไม่เหลือรั้งก็ไม่มีหลักฐาน ฉันไม่เห็นอะไรทั้งนั้น และเธอเองก็ไม่เห็นด้วย"',
                    zh: 'B：“意外”法：“告诉操作员继续施工。只要巢穴没了，就没证据了。我什么都没看见，你也没看见。”'
                },
                consequence: {
                    en: '💀 Legal Nightmare: A whistleblower on the crew took a video. You were fined $1M, the project was canceled, and you are facing jail time. Reputation destroyed.',
                    th: '💀 ฝันร้ายทางกฎหมาย: มีลูกน้องในทีมแอบถ่ายวิดีโอไว้ คุณถูกปรับ 1 ล้านเหรียญ โปรเจกต์โดนสั่งยกเลิก และคุณยังอาจต้องติดคุก ชื่อเสียงพังพินาศเลยทีเดียว',
                    zh: 'B：法律噩梦：团队里的举报人拍到了视频。你被罚款 100 万美元，项目被取消，你还面临牢狱之灾。名誉扫地。'
                },
                stats: { competence: 10, ethics: 10, leadership: -50, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Project Redesign: "Bring in the architects tonight. We can redesign the layout to turn this tree into a central park feature. No need to stop work on the other side of the site."',
                    th: '🧠 ออกแบบโปรเจกต์ใหม่: "ตามสถาปนิกมาด่วนคืนนี้ เราจะปรับผังโครงการให้ต้นไม้นี้เป็นจุดเด่นของสวนส่วนกลาง เราจะได้ทำงานส่วนอื่นของไซต์งานต่อไปได้โดยไม่ต้องหยุดทั้งหมด"',
                    zh: 'C：项目重新设计：“今晚请建筑师过来。我们可以重新设计布局，将这棵树变为中心公园景观。不需要停止工地另一侧的施工。”'
                },
                consequence: {
                    en: '💡 Dynamic Solution: The redesign actually added value to the project. The bird became the "mascot" of the neighborhood. You saved the budget and the environment.',
                    th: '💡 ทางออกที่ชาญฉลาด: การออกแบบใหม่กลับช่วยเพิ่มมูลค่าให้โครงการ นกตัวนั้นได้กลายเป็น "มาสคอต" ของหมู่บ้านไปเลย คุณช่วยทั้งงบประมาณและสิ่งแวดล้อมได้พร้อมๆ กัน',
                    zh: 'C：动态解决方案：重新设计实际上增加了项目的价值。这只鸟成了社区的“吉祥物”。你既节省了预算，又保护了环境。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Delegate to Sub: "Tell the clearing subcontractor to handle it. It\'s their contract, their responsibility. I don\'t want to know the details."',
                    th: '📞 โยนให้ผู้รับเหมาช่วง: "บอกบริษัทเคลียร์พื้นที่ให้เป็นคนจัดการ มันอยู่ในสัญญาเขา ความรับผิดชอบเขานะ ฉันไม่อยากรู้รายละเอียดหรอก"',
                    zh: 'D：委派分包商：“告诉清理分包商去处理。那是他们的合同，他们的责任。我不想知道细节。”'
                },
                consequence: {
                    en: '📉 Lack of Authority: They did exactly what Option B did. You are still legally liable as the Project Manager. You ignored your duty of care.',
                    th: '📉 ขาดอำนาจการสั่งการ: พวกเขาทำเหมือนตัวเลือก B เป๊ะ และคุณในฐานะผู้จัดการโครงการก็ยังต้องรับผิดชอบทางกฎหมายอยู่ดี คุณละเลยหน้าที่ในการกำกับดูแลงานงานนะเนี่ย',
                    zh: 'D：缺乏威信：他们做的和 B 选项一模一样。作为项目经理，你依然负有法律责任。你忽略了尽责履职。'
                },
                stats: { competence: 20, ethics: 20, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_036',
        text: {
            en: '🏗️ The Faulty Steel: You just discovered that the steel beams used for the top three floors of a skyscraper came with forged test certificates. They might be 20% weaker than specified. The building is already topped out.',
            th: '🏗️ เหล็กเจ้าปัญหา: คุณเพิ่งพบว่าคานเหล็กที่ใช้ในสามชั้นบนสุดของตึกระฟ้ามีใบรับรองผลการทดสอบที่ปลอมแปลงมา มันอาจจะรับน้ำหนักได้น้อยกว่าที่กำหนดไว้ถึง 20% และตอนนี้ตึกก็สร้างจนถึงยอดเสร็จแล้วด้วย',
            zh: '🏗️ 有缺陷的钢材：你刚刚发现摩天大楼顶三层使用的钢梁测试证书是伪造的。它们的强度可能比规定低 20%。而大楼已经封顶了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Full Disclosure: "Report it to the engineers and the city immediately. We have to tear down the top floors and replace the steel. Zero chance of taking a risk on a collapse."',
                    th: '🛑 เปิดเผยข้อมูลทั้งหมด: "รายงานเรื่องนี้ให้วิศวกรและเทศบาลทราบทันที เราต้องรื้อชั้นบนทิ้งแล้วเปลี่ยนเหล็กใหม่ ไม่มีการยอมรับความเสี่ยงเรื่องตึกถล่มเด็ดขาด"',
                    zh: 'A：全面披露：“立即向工程师和市政府报告。我们必须拆除顶层并更换钢材。绝不拿大楼倒塌的风险开玩笑。”'
                },
                consequence: {
                    en: '🛡️ Professional Integrity: It cost millions, but you saved lives. The company was sued by the supplier, but your reputation as the "most honest manager in the state" was born.',
                    th: '🛡️ ศักดิ์ศรีความเป็นมืออาชีพ: แม้มันจะเป็นเงินมหาศาล แต่คุณช่วยรักษาชีวิตคนไว้ได้ บริษัทฟ้องร้องซัพพลายเออร์เจ้าปัญหา และชื่อเสียงของคุณในฐานะ "ผู้จัดการที่ซื่อสัตย์ที่สุดในรัฐ" ก็เริ่มต้นขึ้น',
                    zh: 'A：职业诚信：花费了数百万美元，但你挽救了生命。虽然公司被供应商起诉了，但你“全州最诚实经理”的名声也就此建立。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏗️ Independent Testing: "Don\'t tell anyone yet. Take samples and run our own lab tests. If it\'s within an acceptable margin of safety, we just keep quiet and move on."',
                    th: '🏗️ ตรวจสอบแยกอีกทาง: "อย่าเพิ่งบอกใคร เอาตัวอย่างไปตรวจในแล็บของเราเอง ถ้ามันยังอยู่ในขอบเขตความปลอดภัยที่พอรับได้ เราก็นิ่งไว้แล้วทำงานต่อไป"',
                    zh: 'B：独立测试：“先别告诉任何人。采样并进行我们自己的实验室测试。如果处于可接受的安全余量内，我们就守口如瓶，继续干活。”'
                },
                consequence: {
                    en: '💀 Catastrophe: A small earthquake hit. The top floors pancaked. Hundreds died. You are currently serving life in prison.',
                    th: '💀 หายนะ: เกิดแผ่นดินไหวขนาดเล็ก ตึกชั้นบนพังครืนลงมาเป็นชั้นๆ มีคนเสียชีวิตหลายร้อยคน และตอนนี้คุณกำลังรับโทษจำคุกตลอดชีวิต',
                    zh: 'B：大难临头：发生了一场小地震。顶层像烙饼一样坍塌。数百人丧生。你目前正在服刑。'
                },
                stats: { competence: 20, ethics: 10, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 External Bracing Hack: "Call the structural engineers for a secret consult. Instead of tearing it down, can we weld external carbon-fiber wraps or steel plates to reinforce the existing beams? Faster and safer."',
                    th: '🧠 เสริมแรงคานเหล็ก: "เรียกวิศวกรโครงสร้างมาปรึกษาลับๆ แทนที่จะรื้อทิ้ง เราสามารถเชื่อมแผ่นเหล็กหรือหุ้มคาร์บอนไฟเบอร์ภายนอกเพื่อเสริมความแข็งแรงให้คานเดิมได้ไหม? วิธีนี้เร็วกว่าและปลอดภัยด้วย"',
                    zh: 'C：外部加固方案：“找结构工程师进行秘密咨询。与其拆除，我们能不能通过焊接外部碳纤维包裹层或钢板来加固现有钢梁？这样更快也更安全。”'
                },
                consequence: {
                    en: '💡 Technical Masterclass: The engineers approved the reinforcement. You saved the schedule and ensured 100% safety. Your "Retrofit Strategy" becomes a case study in remediation.',
                    th: '💡 มาสเตอร์คลาสเทคนิค: วิศวกรอนุมัติแผนการเสริมความแข็งแรง คุณรักษาตารางงานไว้ได้และมั่นใจความปลอดภัย 100% "กลยุทธ์การปรับปรุงโครงสร้าง" ของคุณกลายเป็นกรณีศึกษาเรื่องการแก้ไขงานเลยทีเดียว',
                    zh: 'C：技术大师课：工程师批准了加固方案。你保住了工期并确保了 100% 的安全。你的“改造策略”成为了补救检查的案例研究。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Blame the Procurement: "Find whoever bought this steel and fire them immediately. Then let legal handle the paperwork while we keep construction moving."',
                    th: '📞 โทษฝ่ายจัดซื้อ: "ไปหามาว่าใครเป็นคนซื้อเหล็กนี่แล้วไล่ออกทันที จากนั้นให้ฝ่ายกฎหมายจัดการเรื่องเอกสารไป ส่วนเราก็สร้างตึกต่อกันเถอะ"',
                    zh: 'D：归咎于采购：“找出采购这批钢材的人并立即开除。然后在法律部门处理文书工作的同时，让施工继续进行。”'
                },
                consequence: {
                    en: '📉 Leadership Deficit: Firing someone didn\'t fix the physical weakness in the building. You focused on blame instead of safety. The inspectors shut down the site.',
                    th: '📉 ขาดภาวะผู้นำ: การไล่คนออกไม่ได้ทำให้โครงสร้างตึกแข็งแรงขึ้น คุณมัวแต่หาคนผิดแทนที่จะแก้เรื่องความปลอดภัย สุดท้ายเจ้าหน้าที่ตรวจสอบก็สั่งปิดไซต์งานอยู่ดี',
                    zh: 'D：领导力缺失：开除他人并不能解决建筑物的物理缺陷。你只顾推卸责任而忽视了安全。最后质检员关闭了工地。'
                },
                stats: { competence: 10, ethics: 20, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_037',
        text: {
            en: '🏗️ The Unexpected Tomb: While digging a subway tunnel, your TBM (Tunnel Boring Machine) hits an undocumented ancient catacomb. Archaeologists would want to stop work for 2 years. The city needs the subway functioning in 6 months.',
            th: '🏗️ สุสานเกินคาด: ขณะขุดอุโมงค์รถไฟใต้ดิน เครื่องเจาะอุโมงค์ (TBM) ของคุณไปชนกับสุสานโบราณที่ไม่มีในบันทึก นักโบราณคดีคงอยากให้หยุดงานสัก 2 ปีเพื่อขุดค้น แต่คนในเมืองต้องการใช้รถไฟใต้ดินในอีก 6 เดือนข้างหน้า',
            zh: '🏗️ 意外发现的古墓：在挖掘地铁隧道时，你的隧道掘进机（TBM）撞上了一处未记载的古代地下墓穴。考古学家希望能停工 2 年进行科考，但城市要求地铁在 6 个月内运行。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Protect the History: "Stop the machine. Notify the university and the city. Our history is priceless; we will find a way to reroute or wait. Respect the ancestors."',
                    th: '🛑 ปกป้องประวัติศาสตร์: "หยุดเครื่องเจาะ แจ้งมหาวิทยาลัยและหน่วยงานเมือง ประวัติศาสตร์ประเมินค่าไม่ได้ เราจะหาทางอ้อมทางอื่นหรือจะรอคอยก็ได้ ต้องให้ความเคารพแก่บรรพบุรุษ"',
                    zh: 'A：保护历史：“停止机器。通知大学和政府。我们的历史是无价的；我们会寻找改道方案或者选择等待。尊重先祖。”'
                },
                consequence: {
                    en: '🛡️ Cultural Heritage Hero: You were awarded the Key to the City. The subway was rerouted, costing more but preserving a world-class archaeological find.',
                    th: '🛡️ ฮีโร่มรดกทางวัฒนธรรม: คุณได้รับกุญแจทองคำของเมืองเลยนะ รถไฟใต้ดินต้องอ้อมไปทางอื่นซึ่งเสียเงินเพิ่มแต่ช่วยรักษาโบราณสถานระดับโลกไว้ได้',
                    zh: '🛡️ 文化遗产英雄：你被授予了城市之钥。地铁改道了，虽然成本更高，但保护了世界级的考古发现。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏗️ Keep Boring: "Just crush through it. It\'s just old bones and dust. The living need transportation more than the dead need privacy. Don\'t report it."',
                    th: '🏗️ เจาะต่อไป: "บดมันไปเลย ก็แค่เศษกระดูกกับฝุ่น คนเป็นต้องการระบบขนส่งมากกว่าคนตายที่ต้องการความสงบ อย่ารายงานเรื่องนี้เด็ดขาด"',
                    zh: 'B：继续掘进：“直接碾碎它。那只是一些陈年旧骨和尘土。生者对交通的需求远大于死者对私密的需求。不要上报。”'
                },
                consequence: {
                    en: '💀 Haunted PR: A worker leaked photos. The public outrage was so intense the Mayor resigned, and the project was canceled entirely. You are blacklisted.',
                    th: '💀 หายนะจากโซเชียล: คนงานแอบส่งรูปหลุดออกไป กระแสสังคมตีกลับรุนแรงจนนายกเทศมนตรีต้องลาออก และโครงการถูกยกเลิกถาวร ส่วนคุณก็โดนขึ้นบัญชีดำ',
                    zh: 'B：负面公关噩梦：一名员工泄露了照片。公众的愤怒如此强烈，以至于市长辞职，项目被撤销。你被列入了黑名单。'
                },
                stats: { competence: 20, ethics: 10, leadership: -50, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Accelerated Curation: "Negotiate a 24/7 archaeology shift. Hire students and experts to clear the tomb in 30 days while we build an bypass section for the TBM. Incorporate the tomb into the station design."',
                    th: '🧠 การกู้ซากเร่งด่วน: "ประสานงานกับนักโบราณคดีให้ทำงานกะ 24 ชั่วโมง จ้างนักศึกษาและผู้เชี่ยวชาญมาเคลียร์สุสานให้เสร็จใน 30 วันระหว่างที่เราสร้างส่วนเลี่ยงทางเจาะ แล้วเอาดีไซน์สุสานโบราณมาผสมในดีไซน์สถานีรถไฟไปเลย"',
                    zh: 'C：加速清理方案：“商定考古团队 24 小时轮班作业。雇佣学生和专家在 30 天内清理完墓穴，同时我们为隧道掘进机建造一个旁路。将墓穴设计融入地铁站设计中。”'
                },
                consequence: {
                    en: '💡 Dynamic Solution: The station became a global tourist attraction ("The Catacomb Station"). You finished only 2 months late, with a massive business boost.',
                    th: '💡 ทางออกที่ชาญฉลาด: สถานีนี้กลายเป็นจุดเช็กอินระดับโลกในชื่อ "สถานีสุสานโบราณ" คุณงานเสร็จช้าไปแค่ 2 เดือนแต่เป็นการกระตุ้นธุรกิจครั้งใหญ่เลยล่ะ',
                    zh: '💡 动态解决方案：该车站成为了全球旅游景点（“地下墓穴车站”）。你仅延误了 2 个月，却带来了巨大的业务提升。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Move the Artifacts secretly: "Hire a private team to move the stuff at night to a nearby cave, then report the finding there. Keep the tunnel moving."',
                    th: '📞 แอบย้ายของลับๆ: "จ้างคนมาประเป๋าย้ายของพวกนี้ตอนกลางคืนไปไว้ในถ้ำแถวๆ นี้ แล้วค่อยรายงานว่าเจอที่นั่นแทน ส่วนอุโมงค์ก็ขุดต่อไป"',
                    zh: 'D：秘密挪动文物：“雇佣私人团队连夜将文物搬到附近的洞穴，然后在那里报告发现。隧道施工不要停。”'
                },
                consequence: {
                    en: '📉 Legal Jailtime: You were caught. Disturbing a burial site is a felony. Your career is over, and your company is bankrupt.',
                    th: '📉 คุกรออยู่: คุณโดนจับได้ การรบกวนสุสานถือเป็นคดีอาญาร้ายแรง อาชีพคุณจบลงและบริษัทก็ล้มละลายด้วย',
                    zh: 'D：面临起诉：你被抓了。破坏墓葬区是重罪。你的职业生涯终结了，你的公司也破产了。'
                },
                stats: { competence: 10, ethics: 10, leadership: -40, innovation: 10 }
            }
        ]
    },
    {
        id: 'construction_038',
        text: {
            en: '🏗️ The Hostile Neighborhood: You are building an affordable housing complex in a wealthy neighborhood. Residents have blocked the site entrance with their luxury cars, protesting the "loss of property value."',
            th: '🏗️ ย่านเจ้าที่แรง: คุณกำลังสร้างบ้านพักราคาประหยัดในย่านคนรวย ชาวบ้านแถวนั้นเอารถหรูมาจอดขวางทางเข้าไซต์งานเพื่อประท้วง โดยอ้างว่าโครงการนี้จะทำให้ "มูลค่าที่ดินเขาตก"',
            zh: '🏗️ 敌对的社区：你正在一个富裕社区建造廉租房综合体。居民们用豪车堵住了工地入口，抗议“房产贬值”。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Legal Force: "Call the sheriff and tow trucks immediately. We have a legal permit. I don\'t care who they are; the law is the law. Clear the entrance."',
                    th: '⚖️ ใช้กฎหมายฟัน: "เรียกตำรวจและรถยกมาเดี๋ยวนี้เลย เรามีใบอนุญาตถูกต้องตามกฎหมาย ฉันไม่สนว่าเขาจะเป็นใคร กฎหมายก็คือกฎหมาย เคลียร์ทางเข้าให้ได้"',
                    zh: 'A：法律手段：“立即呼叫警察和拖车。我们拥有法定许可证。我不管他们是谁；法律就是法律。清理入口。”'
                },
                consequence: {
                    en: '🛡️ Efficiency Win: The site was cleared in an hour. You showed you can\'t be bullied. However, the neighbors now sabotage your site at night.',
                    th: '🛡️ ชนะด้วยความเด็ดขาด: เคลียร์พื้นที่ได้ในชั่วโมงเดียว คุณพิสูจน์ให้เห็นว่าไม่มีใครข่มขู่คุณได้ แต่ปัญหาคือพวกเพื่อนบ้านเริ่มแอบมาป่วนไซต์งานตอนกลางคืนแทนแล้วล่ะ',
                    zh: 'A：效率上的胜利：工地入口在一小时内清理完毕。你表明了你是不好欺负的。然而，邻居们现在开始在夜间破坏你的工地。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏳️ Temporary Shutdown: "Close the site for the day. I don\'t want bad publicity. Let\'s wait until they get bored and go home."',
                    th: '🏳️ ยอมถอยชั่วคราว: "วันนี้ปิดไซต์งานไปก่อน ฉันไม่อยากให้มันเป็นภาพลบออกไป รอจนกว่าพวกเขาจะเบื่อแล้วกลับบ้านไปเองเถอะ"',
                    zh: 'B：临时停工：“今天关闭工地。我不想要负面宣传。等他们无聊回家再说吧。”'
                },
                consequence: {
                    en: '💀 Weakness: They didn\'t get bored; they got emboldened. The protest grew into a month-long blockade. You lost the project due to delays.',
                    th: '💀 แสดงความอ่อนแอ: พวกเขาไม่เบื่อหรอกแต่กลับได้ใจมากกว่าเดิม การประท้วงลามไปเป็นการปิดถนนยาวเป็นเดือน สุดท้ายคุณก็เสียโปรเจกต์นี้ไปเพราะมันช้าเกินกำหนด',
                    zh: 'B：软弱：他们非但没有无聊，反而变得更大胆了。抗议演变成了长达一个月的封锁。你因延误而失去了该项目。'
                },
                stats: { competence: 10, ethics: 20, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Town Hall Charm: "Invite the protest leaders to my trailer. Show them the high-end architectural renderings. Explain how we will provide 24/7 security and professional landscaping that will actually raise property values."',
                    th: '🧠 ล็อบบี้ด้วยวิสัยทัศน์: "เชิญหัวหน้ากลุ่มประท้วงเข้ามาคุยในออฟฟิศไซต์งาน เปิดรูปภาพโครงการสวยๆ ให้เขาดู อธิบายว่าเราจะมีระบบรักษาส่วนกลาง 24 ชั่วโมงและมีจัดสวนระดับพรีเมียม ซึ่งจริงๆ แล้วมันจะช่วยดึงมูลค่าที่ดินแถวนี้ให้สูงขึ้นไปอีก"',
                    zh: 'C：市政厅式沟通：“邀请抗议领袖到我的拖车办工室。向他们展示高端的建筑效果图。解释我们将如何提供 24/7 的安保和专业的景观设计，这实际上会提升房产价值。”'
                },
                consequence: {
                    en: '💡 Dynamic Solution: Your "Community Engagement" strategy worked. Three leaders actually invested in the project. You turned enemies into allies.',
                    th: '💡 ทางออกที่ชาญฉลาด: กลยุทธ์ "การมีส่วนร่วมของชุมชน" ของคุณได้ผล หัวหน้ากลุ่ม 3 คนกลับมาขอลงทุนในโครงการนี้แทน คุณได้เปลี่ยนศัตรูให้กลายเป็นมิตรได้สำเร็จ',
                    zh: 'C：动态解决方案：你的“社区参与”策略奏效了。三位领袖实际上还投资了这个项目。你化敌为友。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🚜 Intimidation: "Start the heavy excavators. Roll them slowly toward the cars. They\'ll move if they value their paint jobs."',
                    th: '🚜 ข่มขวัญ: "สตาร์ทรถขุดตีนตะขาบคันใหญ่ๆ เลย ขับเข้าใกล้พวกรถหรูพวกนั้นช้าๆ เขารักรถก็คงรีบถอยไปเองแหละ"',
                    zh: 'D：威慑：“启动重型挖掘机。慢慢朝那些车开过去。如果他们惜车，自然会挪开的。”'
                },
                consequence: {
                    en: '📉 PR Disaster: A video of a bulldozer "threatening" a soccer mom went viral. You were fired, and the company faced a massive lawsuit for intimidation.',
                    th: '📉 หายนะทาง PR: คลิปวิดีโอที่รถตักดินกำลัง "คุกคาม" คุณแม่บ้านชาวบ้านย่านนั้นกลายเป็นไวรัล คุณถูกไล่ออกและบริษัทโดนฟ้องเรียกค่าเสียหายมหาศาลฐานข่มขู่',
                    zh: 'D：公关灾难：一段推土机“威胁”社区居民的视频疯传。你被开除了，公司因恐吓面临巨额诉讼。'
                },
                stats: { competence: 20, ethics: 10, leadership: -50, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_039',
        text: {
            en: '🏗️ The High-Altitude Crane: A sudden gale-force wind gust hits your site while a crane is carrying a 10-ton load. The crane is swaying dangerously near a neighboring glass tower. The operator has frozen in fear.',
            th: '🏗️ เครนความสูงระทึก: จู่ๆ ลมพายุพัดแรงกระแทกไซต์งานในขณะที่เครนกำลังยกของหนัก 10 ตัน เครนแกว่งไปมาอย่างน่าหวาดเสียวใกล้กับตึกกระจกข้างๆ และคนคุมเครนก็ดันตกใจตัวแข็งทื่อทำอะไรไม่ถูก',
            zh: '🏗️ 高空起重机：在起重机吊运 10 吨重物时，突如其来的狂风袭击了工地。起重机在相邻的玻璃塔附近危险地晃动。操作员因恐惧而僵住了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📞 Direct Command: "Get on the radio. Calibrate his breathing. Give him step-by-step instructions to lower the load to the nearest safe floor level immediately. Precise leadership now."',
                    th: '📞 สั่งการโดยตรง: "ใช้วิทยุสื่อสาร เรียกสติให้เขาหายใจลึกๆ บอกขั้นตอนการทำงานทีละสเต็ปเพื่อวางของลงที่ชั้นที่ปลอดภัยที่สุดที่ใกล้ที่สุดด่วน ความเป็นผู้นำที่เฉียบขาดต้องมาตอนนี้แหละ"',
                    zh: 'A：直接指挥：“通过无线电联系。调整他的呼吸。分步指导他立即将载荷降至最近的安全楼层。现在需要精准的领导力。”'
                },
                consequence: {
                    en: '🛡️ Safety Standard: He snapped out of it and landed the load. No damage was done. Your calm voice saved millions in glass repairs.',
                    th: '🛡️ มาตรฐานความปลอดภัย: เขาเรียกสติกลับมาได้และวางของลงสำเร็จ ไม่มีความเสียหายเกิดขึ้น ความใจเย็นของคุณช่วยประหยัดเงินค่าซ่อมกระจกให้ตึกข้างๆ ได้เป็นล้าน',
                    zh: '🛡️ 安全准则：他清醒过来了并将载荷降稳了。没有造成损坏。你冷静的声音省下了数百万美元的玻璃维修费用。'
                },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧗 Climb the Tower: "I\'m going up there! I\'ll take over the controls myself. Out of the way!"',
                    th: '🧗 ปีนขึ้นไปเอง: "ฉันจะขึ้นไปเอง! ฉันจะไปคุมเครื่องแทนเขา หลบไป!"',
                    zh: 'B：爬上塔架：“我要上去！我自己来接管控制。让开！”'
                },
                consequence: {
                    en: '💀 Fatal Delay: The crane swayed so hard while you were climbing that the cable snapped. The load smashed through 5 floors of the next building. You can\'t climb faster than the wind.',
                    th: '💀 ล่าช้าจนเกิดหายนะ: ระหว่างที่คุณกำลังปีน เครนแกว่งแรงมากจนสลิงขาด ของหนักร่วงทะลุตึกข้างๆ ไป 5 ชั้น คุณไม่มีทางปีนได้เร็วกว่าลมที่พัดมาหรอกนะ',
                    zh: 'B：致命延误：当你还在攀爬时，起重机剧烈摇摆导致缆绳断裂。载荷撞穿了相邻建筑的 5 层楼。你爬的速度快不过风。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Emergency Weathervane: "Instruct the operator to release the slew brake. Let the crane rotate freely like a weathervane with the wind. The load will swing, but the tower won\'t collapse."',
                    th: '🧠 ปล่อยเครนตามลม: "สั่งให้คนคุมปล่อยเบรกหมุน (Slew brake) ปล่อยให้เครื่องหมุนได้อย่างอิสระเหมือนศรลมตามแรงลม ของที่อยู่ปลายเครนจะแกว่งนั่นแหละ แต่ตัวหอคอยเครนจะไม่ถล่มลงมา"',
                    zh: 'C：紧急顺风指令：“指示操作员释放回转制动器。让起重机像风向标一样随风自由旋转。载荷会晃动，但塔架不会坍塌。”'
                },
                consequence: {
                    en: '💡 Technical Masterclass: Using physics, you prevented a structural collapse of the crane tower. The load hit some scaffolding, but the main buildings were untouched.',
                    th: '💡 มาสเตอร์คลาสเทคนิค: คุณใช้หลักฟิสิกส์หยุดยั้งการถล่มของหอคอยเครนได้ ของอาจจะไปชนนั่งร้านนิดหน่อย แต่ตึกหลักทั้งสองตึกไม่เป็นอะไรเลย',
                    zh: 'C：技术大师课：利用物理原理，你防止了起重机塔架的结构性坍塌。载荷撞到了一些脚手架，但主建筑完好无损。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Evacuate the Street: "Forget the crane. Scream into the megaphone for everyone in the glass tower to move to the back of the building! Focus on life, not property."',
                    th: '📢 สั่งอพยพคนบนถนน: "ไม่ต้องไปสนเครนแล้ว ตะโกนบอกทุกคนในตึกกระจกผ่านโทรโข่งให้ย้ายไปอยู่หลังตึกเดี๋ยวนี้! สนใจแค่ชีวิตคน ไม่ต้องสนทรัพย์สิน"',
                    zh: 'D：疏散街道：“别管起重机了。对着喇叭大声喊，让玻璃塔里的每一个人都搬到大楼后面去！专注于生命，而非财产。”'
                },
                consequence: {
                    en: '📉 Partial Failure: You saved lives, but the crane eventually collapsed and destroyed the neighboring building. Your lack of technical effort to save the machine was criticized.',
                    th: '📉 ความล้มเหลวบางส่วน: คุณช่วยชีวิตคนไว้ได้นั่นแหละ แต่สุดท้ายเครนก็พังไปทับตึกข้างๆ จนเละเทะ คุณถูกวิจารณ์ว่าขาดความพยายามทางเทคนิคในการกู้สถานการณ์เครื่องจักร',
                    zh: 'D：部分失效：你挽救了生命，但起重机最终倒塌并摧毁了邻近建筑。你由于缺乏拯救机器的技术尝试而受到了批评。'
                },
                stats: { competence: 10, ethics: 40, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_040',
        text: {
            en: '🏗️ The "Green" Cement: A new startup offers carbon-sequestering cement at half the price of traditional concrete. Using it would make this the greenest building in the city, but it hasn\'t been tested for long-term load-bearing in high-rises.',
            th: '🏗️ ซีเมนต์ "หัวใจสีเขียว": บริษัทสตาร์ทอัพแห่งหนึ่งเสนอขายซีเมนต์แบบดักจับคาร์บอนในราคาแค่ครึ่งเดียวของคอนกรีตปกติ ถ้าใช้มัน ตึกนี้จะเป็นตึกที่รักษ์โลกที่สุดในเมือง แต่ปัญหาก็คือมันยังไม่เคยถูกทดสอบในตึกสูงเรื่องการรับน้ำหนักระยะยาวเลย',
            zh: '🏗️ “绿色”水泥：一家初创公司提供碳封存水泥，价格仅为传统混凝土的一半。使用它将使这座建筑成为全城最绿色的建筑，但它尚未经过高层建筑长期承载能力的测试。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Proven Only: "I will not use unproven materials on a skyscraper. Stay with traditional Portland cement. We can go green with the solar panels and windows instead."',
                    th: '🛑 ใช้ของที่ชัวร์แล้วเท่านั้น: "ผมจะไม่ใช้วัสดุที่ยังไม่ผ่านพิสูจน์กับตึกระฟ้าเด็ดขาด ใช้ซิเมนต์ปอร์ตแลนด์แบบดั้งเดิมไปก่อน เราไปรักษ์โลกด้วยการใช้โซลาร์เซลล์กับหน้าต่างแทนแล้วกัน"',
                    zh: 'A：仅限成熟技术：“我不会在摩天大楼上使用未经证实的材料。继续使用传统的硅酸盐水泥。我们可以改用太阳能电池板和窗户来实现绿色环保。”'
                },
                consequence: {
                    en: '🛡️ Reliability Standard: You are known as a "Safe Pair of Hands." The project is 100% structurally sound. A month later, the startup cement was recalled due to micro-cracking.',
                    th: '🛡️ มาตรฐานความน่าเชื่อถือ: คุณถูกมองว่าเป็น "มือโปรที่ไว้ใจได้" โปรเจกต์นี้แข็งแรง 100% หนึ่งเดือนต่อมา ซีเมนต์ของสตาร์ทอัพเจ้านั้นโดนเรียกคืนเพราะเจอปัญหารอยร้าวขนาดจิ๋ว คุณรอดตัวไปนะ',
                    zh: '🛡️ 可靠性准则：你被誉为“稳健的管理者”。项目的结构完整性达到了 100%。一个月后，该初创公司的水泥因出现微裂缝而被召回。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 Leading Edge: "Let\'s be the pioneers! The savings alone are worth the risk. The startup has valid lab data. Sign the contract and start the pour."',
                    th: '🚀 ผู้นำนวัตกรรม: "มาเป็นผู้บุกเบิกกันเถอะ! แค่เงินที่ประหยัดได้ก็คุ้มที่จะเสี่ยงแล้ว สตาร์ทอัพเขาก็มีข้อมูลในแล็บบอรอง เซ็นสัญญาแล้วเริ่มเทปูนเลย"',
                    zh: 'B：勇攀高峰：“让我们成为开拓者！单是节省下来的资金就值得冒险。这家初创公司拥有有效的实验室数据。签署合同，开始浇筑。”'
                },
                consequence: {
                    en: '💀 Catastrophic Structural Creep: 2 years later, the building began to "sink" unevenly. The balconies started snapping off. You are the center of a $200M class-action lawsuit.',
                    th: '💀 โครงสร้างทรุดตัวที่เลวร้าย: 2 ปีต่อมา ตึกเริ่ม "ทรุด" แบบไม่เท่ากัน ระเบียงเริ่มหักร่วงลงมา คุณกลายเป็นจำเลยในคดีฟ้องร้องเรียกค่าเสียหาย 200 ล้านเหรียญ',
                    zh: 'B：灾难性的结构蠕变：2 年后，建筑开始出现不均匀“下沉”。阳台开始断裂脱落。你成了 2 亿美元集体诉讼的中心人物。'
                },
                stats: { competence: 10, ethics: 10, leadership: 20, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Hybrid Test: "Use the green cement for non-load-bearing elements like parking garage floors and landscape features. Stay traditional for the core and columns. Let\'s gather real-world data safely."',
                    th: '🧠 ทดสอบแบบไฮบริด: "ใช้ซีเมนต์รักษ์โลกกับจุดที่ไม่รับน้ำหนักหลัก เช่น พื้นลานจอดรถหรืองานจัดสวน ส่วนที่เป็นโครงสร้างหลักกับเสาให้ใช้แบบเดิมไปก่อน มาเก็บข้อมูลในโลกการทำงานจริงกันแบบปลอดภัยดีกว่า"',
                    zh: 'C：进行混合测试：“将绿色水泥用于非承重部分，如车库地板和景观设施。核心筒和柱子继续使用传统材料。让我们在安全的情况下收集真实世界的数据。”'
                },
                consequence: {
                    en: '💡 Technical Masterclass: You won a "Sustainable Innovator" award. Your data showed where the cement worked and where it failed. The startup hired you as a consultant.',
                    th: '💡 มาสเตอร์คลาสเทคนิค: คุณได้รับรางวัล "นวัตกรเพื่อความยั่งยืน" ข้อมูลของคุณช่วยพิสูจน์ว่าจุดไหนใช้ซีเมนต์นี้ได้ผล จุดไหนใช้ไม่ได้ สุดท้ายสตาร์ทอัพเจ้านั้นก็มาจ้างคุณเป็นที่ปรึกษาเลยล่ะ',
                    zh: '💡 技术大师课：你获得了“可持续创新者”奖。你的数据展示了这种水泥在哪些方面奏效，在哪些方面失败。那家初创公司聘请你担任顾问。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Delegate to Engineers: "Ask the Structural Engineers to sign a letter saying it\'s 100% safe. If they won\'t sign it, we won\'t use it. Put the liability on them."',
                    th: '📞 โยนให้วิศวกร: "ให้วิศวกรโครงสร้างเซ็นยืนยันมาว่ามันปลอดภัย 100% ถ้าเขาไม่เซ็นเราก็ไม่ใช้ โยนความรับผิดชอบไปให้เขาซะ"',
                    zh: 'D：委派给工程师：“请结构工程师签署一份声明，证明 100% 安全。如果他们不签，我们就不使用。把责任推给他们。”'
                },
                consequence: {
                    en: '📉 Lack of Initiative: Naturally, the engineers refused to sign for a product they didn\'t design. You wasted weeks in meetings trying to avoid making a decision yourself.',
                    th: '📉 ขาดความริเริ่ม: แน่นอนว่าวิศวกรไม่มีทางเซ็นรับรองสินค้าที่เขาไม่ได้ออกแบบเองหรอก คุณเสียเวลาไปหลายสัปดาห์ในการประชุมเพียงเพื่อจะเลี่ยงการตัดสินใจของตัวเอง',
                    zh: 'D：缺乏主观能动性：自然地，工程师们拒绝为他们并未设计的产品签字。你为了推卸责任，在会议上浪费了数周时间，试图逃避由自己做出决定。'
                },
                stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'construction_041',
        text: {
            en: '🔨 The Apprenticeship Program: A local high school asks if you can take on 5 students as apprentices. They work for free but need supervision and training.',
            th: '🔨 โปรแกรมเด็กฝึกงาน: โรงเรียนมัธยมในพื้นที่ถามว่าคุณรับนักเรียน 5 คนเข้ามาเป็นเด็กฝึกงานได้ไหม พวกเขาทำงานฟรีแต่ต้องการการดูแลและฝึกอบรม',
            zh: '🔨 学徒计划：当地一所高中询问你是否可以接收5名学生作为学徒。他们免费工作但需要监督和培训。'
        },
        options: [
            { id: 'A', text: { en: '🎓 Mentor Them', th: '🎓 เป็นพี่เลี้ยง', zh: '🎓 指导他们' }, consequence: { en: '🌟 Future Stars! One becomes your best foreman in 10 years. Community loves you.', th: '🌟 ดาวแห่งอนาคต! คนนึงกลายเป็นหัวหน้างานที่ดีที่สุดใน 10 ปี ชุมชนรักคุณ', zh: '🌟 未来之星！其中一人在10年后成为你最好的工头。社区爱你。' }, stats: { competence: 30, ethics: 50, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🚫 Too Busy', th: '🚫 ยุ่งเกิน', zh: '🚫 太忙了' }, consequence: { en: '📉 Missed Opportunity. No benefit, but also no hassle.', th: '📉 พลาดโอกาส ไม่ได้ประโยชน์แต่ก็ไม่ยุ่งยาก', zh: '📉 错失良机。没有好处，但也没有麻烦。' }, stats: { competence: 0, ethics: -10, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '💰 Charge the School', th: '💰 เก็บค่าใช้จ่ายโรงเรียน', zh: '💰 向学校收费' }, consequence: { en: '💸 Greed Backfires. School declines. Community thinks you are greedy.', th: '💸 โลภจนตีหน้ากลับ โรงเรียนปฏิเสธ ชุมชนว่าคุณโลภ', zh: '💸 贪婪适得其反。学校拒绝。社区认为你贪婪。' }, stats: { competence: 0, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🧹 Only Cleanup', th: '🧹 ให้ทำความสะอาดอย่างเดียว', zh: '🧹 只做清洁' }, consequence: { en: '😞 Wasted Talent. They learn nothing and quit early.', th: '😞 เสียความสามารถ พวกเขาไม่ได้เรียนรู้อะไรและลาออกเร็ว', zh: '😞 浪费才能。他们什么都没学到，很早就退出了。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'construction_042',
        text: {
            en: '🏗️ The Overtime Dispute: Workers claim they worked 60 hours but your timekeeper says 50. The union threatens arbitration.',
            th: '🏗️ ข้อพิพาทโอที: คนงานอ้างว่าทำงาน 60 ชม. แต่คนจดเวลาของคุณบอก 50 ชม. สหภาพขู่ว่าจะฟ้องอนุญาโตตุลาการ',
            zh: '🏗️ 加班纠纷：工人声称他们工作了60小时，但你的计时员说是50小时。工会威胁要仲裁。'
        },
        options: [
            { id: 'A', text: { en: '💰 Pay the Difference', th: '💰 จ่ายส่วนต่าง', zh: '💰 支付差额' }, consequence: { en: '🤝 Goodwill Wins. Peace restored, but sets precedent.', th: '🤝 ชนะใจ สันติภาพกลับมาแต่สร้างบรรทัดฐาน', zh: '🤝 善意获胜。恢复和平，但开了先例。' }, stats: { competence: 20, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '📹 Review Footage', th: '📹 ดูกล้อง', zh: '📹 查看录像' }, consequence: { en: '🎯 Evidence! Timekeeper was right. Union backs down.', th: '🎯 หลักฐาน! คนจดเวลาพูดถูก สหภาพถอย', zh: '🎯 证据！计时员是对的。工会让步了。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🤝 Split Difference', th: '🤝 แบ่งครึ่ง', zh: '🤝 折中' }, consequence: { en: '⚖️ Compromise. Both sides unhappy but accept it.', th: '⚖️ ประนีประนอม ทั้งสองฝ่ายไม่พอใจแต่ยอมรับ', zh: '⚖️ 妥协。双方都不满意但接受了。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '⚔️ Fight It', th: '⚔️ สู้เต็มที่', zh: '⚔️ 对抗到底' }, consequence: { en: '💢 Strike! Work stops for 3 weeks. Costly legal battle.', th: '💢 ประท้วง! งานหยุด 3 สัปดาห์ ศึกกฎหมายแพง', zh: '💢 罢工！停工3周。代价高昂的法律战。' }, stats: { competence: 10, ethics: 10, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'construction_043',
        text: {
            en: '🌊 The Flood Zone Build: City approved your permit, but new FEMA maps show this is a 100-year flood zone. Insurance will be expensive for tenants.',
            th: '🌊 สร้างในเขตน้ำท่วม: เทศบาลอนุมัติใบอนุญาตแล้ว แต่แผนที่ FEMA ฉบับใหม่แสดงว่านี่คือเขตน้ำท่วม 100 ปี ประกันจะแพงสำหรับผู้เช่า',
            zh: '🌊 洪水区建设：市政府批准了你的许可证，但新的联邦应急管理局地图显示这是百年洪水区。租户保险费会很贵。'
        },
        options: [
            { id: 'A', text: { en: '🏗️ Elevate First Floor', th: '🏗️ ยกชั้นหนึ่งสูงขึ้น', zh: '🏗️ 抬高一楼' }, consequence: { en: '💡 Smart Design! Flood-proof building sells at premium.', th: '💡 ออกแบบฉลาด! ตึกกันน้ำท่วมขายได้ราคาพรีเมียม', zh: '💡 聪明设计！防洪建筑以溢价出售。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 } },
            { id: 'B', text: { en: '🤫 Hide the Maps', th: '🤫 ซ่อนแผนที่', zh: '🤫 隐瞒地图' }, consequence: { en: '⚖️ Lawsuit! Tenants sue when they discover. Huge settlement.', th: '⚖️ ถูกฟ้อง! ผู้เช่าฟ้องเมื่อรู้ ค่าเสียหายมหาศาล', zh: '⚖️ 诉讼！租户发现后起诉。巨额和解。' }, stats: { competence: -20, ethics: -50, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '📢 Full Disclosure', th: '📢 เปิดเผยทุกอย่าง', zh: '📢 完全披露' }, consequence: { en: '🛡️ Honest Reputation. Sales slow but buyers trust you.', th: '🛡️ ชื่อเสียงซื่อสัตย์ ขายช้าแต่ผู้ซื้อไว้ใจ', zh: '🛡️ 诚实声誉。销售缓慢但买家信任你。' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'D', text: { en: '🏃 Sell and Run', th: '🏃 ขายแล้วหนี', zh: '🏃 卖掉跑路' }, consequence: { en: '💸 Quick Profit but reputation destroyed forever.', th: '💸 กำไรเร็วแต่ชื่อเสียงพังตลอดกาล', zh: '💸 快速获利但声誉永远被毁。' }, stats: { competence: 10, ethics: -40, leadership: -50, innovation: 0 } }
        ]
    },
    {
        id: 'construction_044',
        text: {
            en: '🎭 The Celebrity Client: A famous actor wants you to build his mansion but constantly changes design mid-construction.',
            th: '🎭 ลูกค้าคนดัง: นักแสดงชื่อดังอยากให้คุณสร้างคฤหาสน์ แต่เปลี่ยนแบบตลอดเวลาระหว่างก่อสร้าง',
            zh: '🎭 名人客户：一位著名演员想让你建造他的豪宅，但在施工期间不断更改设计。'
        },
        options: [
            { id: 'A', text: { en: '📝 Charge Per Change', th: '📝 เก็บค่าแก้ไขทุกครั้ง', zh: '📝 每次变更收费' }, consequence: { en: '💰 Profit! He pays millions in change orders. Great payday.', th: '💰 กำไร! เขาจ่ายหลายล้านในค่าแก้ไข วันแจ๊คพอต', zh: '💰 利润！他为变更支付了数百万。大丰收。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '🙇 Please Him', th: '🙇 เอาใจเขา', zh: '🙇 取悦他' }, consequence: { en: '😫 Nightmare! You lose money but gain celebrity endorsement.', th: '😫 ฝันร้าย! คุณขาดทุนแต่ได้การรับรองจากคนดัง', zh: '😫 噩梦！你亏了钱但获得了名人代言。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 30 } },
            { id: 'C', text: { en: '🛑 Design Freeze', th: '🛑 ล็อคแบบ', zh: '🛑 冻结设计' }, consequence: { en: '⚖️ He sues but you win. Contract protects you.', th: '⚖️ เขาฟ้องแต่คุณชนะ สัญญาปกป้องคุณ', zh: '⚖️ 他起诉但你赢了。合同保护你。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 0 } },
            { id: 'D', text: { en: '🎬 Social Media', th: '🎬 โซเชียลมีเดีย', zh: '🎬 社交媒体' }, consequence: { en: '📸 Viral Marketing! Your firm becomes famous.', th: '📸 การตลาดไวรัล! บริษัทคุณดังทั่ว', zh: '📸 病毒式营销！你的公司出名了。' }, stats: { competence: 30, ethics: 20, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'construction_045',
        text: {
            en: '🏚️ The Condemned Building: City wants you to demolish a historic but unsafe building. Preservationists are protesting.',
            th: '🏚️ ตึกถูกประณาม: เทศบาลอยากให้คุณรื้อตึกเก่าที่ไม่ปลอดภัย นักอนุรักษ์ประท้วง',
            zh: '🏚️ 被谴责的建筑：市政府要你拆除一座历史建筑但不安全的建筑。保护主义者在抗议。'
        },
        options: [
            { id: 'A', text: { en: '🏗️ Salvage & Rebuild', th: '🏗️ กู้ชิ้นส่วนแล้วสร้างใหม่', zh: '🏗️ 抢救重建' }, consequence: { en: '🏆 Award Winner! You preserved history and made it safe.', th: '🏆 ได้รางวัล! คุณรักษาประวัติศาสตร์และทำให้ปลอดภัย', zh: '🏆 获奖者！你保留了历史并使其安全。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '💥 Quick Demo', th: '💥 รื้อเร็ว', zh: '💥 快速拆除' }, consequence: { en: '😡 Public Outrage! Protests delay future projects.', th: '😡 ประชาชนโกรธ! การประท้วงชะลอโครงการอนาคต', zh: '😡 公众愤怒！抗议延迟未来项目。' }, stats: { competence: 30, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '📸 Document Everything', th: '📸 บันทึกทุกอย่าง', zh: '📸 记录一切' }, consequence: { en: '🎓 Historical Archive! You create 3D scans before demo.', th: '🎓 คลังประวัติศาสตร์! คุณสร้างภาพ 3D ก่อนรื้อ', zh: '🎓 历史档案！你在拆除前创建3D扫描。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 40 } },
            { id: 'D', text: { en: '🤝 Donate Materials', th: '🤝 บริจาควัสดุ', zh: '🤝 捐赠材料' }, consequence: { en: '🌟 Community Hero! Bricks used in park memorial.', th: '🌟 ฮีโร่ชุมชน! อิฐนำไปใช้สร้างอนุสรณ์ในสวน', zh: '🌟 社区英雄！砖块用于公园纪念碑。' }, stats: { competence: 30, ethics: 50, leadership: 50, innovation: 30 } }
        ]
    },
    {
        id: 'construction_046',
        text: {
            en: '🔧 The Tool Thief Returns: The worker you suspected of theft 6 months ago applies for rehire. He claims he was wrongly accused.',
            th: '🔧 ขโมยเครื่องมือกลับมา: คนงานที่คุณสงสัยว่าขโมยเมื่อ 6 เดือนก่อนสมัครงานใหม่ เขาอ้างว่าถูกกล่าวหาผิด',
            zh: '🔧 盗贼回归：你6个月前怀疑偷窃的工人申请重新雇用。他声称自己被错误指控。'
        },
        options: [
            { id: 'A', text: { en: '✅ Second Chance', th: '✅ โอกาสครั้งที่สอง', zh: '✅ 第二次机会' }, consequence: { en: '🤝 Redemption! He becomes your most loyal worker.', th: '🤝 การไถ่บาป! เขากลายเป็นคนงานที่ภักดีที่สุด', zh: '🤝 救赎！他成为你最忠诚的工人。' }, stats: { competence: 30, ethics: 40, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🚫 Ban Forever', th: '🚫 แบนตลอดกาล', zh: '🚫 永久禁止' }, consequence: { en: '⚖️ Safe Choice. No issues, but you may have been wrong.', th: '⚖️ ตัวเลือกปลอดภัย ไม่มีปัญหาแต่คุณอาจผิด', zh: '⚖️ 安全选择。没问题，但你可能错了。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🕵️ Background Check', th: '🕵️ เช็คประวัติ', zh: '🕵️ 背景调查' }, consequence: { en: '✅ Clean Record! You hire him with confidence.', th: '✅ ประวัติสะอาด! คุณจ้างเขาอย่างมั่นใจ', zh: '✅ 记录清白！你有信心地雇用了他。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '⏰ Probation Period', th: '⏰ ช่วงทดลองงาน', zh: '⏰ 试用期' }, consequence: { en: '🎯 Smart Hire! He proves himself over 90 days.', th: '🎯 จ้างฉลาด! เขาพิสูจน์ตัวเองใน 90 วัน', zh: '🎯 聪明雇佣！他在90天内证明了自己。' }, stats: { competence: 35, ethics: 35, leadership: 40, innovation: 10 } }
        ]
    },
    {
        id: 'construction_047',
        text: {
            en: '💼 The Competitor Offer: Your best project manager gets a job offer from your biggest competitor for 50% more pay.',
            th: '💼 ข้อเสนอคู่แข่ง: ผู้จัดการโครงการที่ดีที่สุดของคุณได้รับข้อเสนองานจากคู่แข่งรายใหญ่ที่สุดเงินเดือนเพิ่ม 50%',
            zh: '💼 竞争对手报价：你最好的项目经理收到最大竞争对手的工作邀请，薪水高出50%。'
        },
        options: [
            { id: 'A', text: { en: '💰 Match the Offer', th: '💰 จ่ายเท่ากัน', zh: '💰 匹配报价' }, consequence: { en: '🤝 Loyalty Retained but sets precedent for others.', th: '🤝 รักษาความภักดีแต่สร้างบรรทัดฐานให้คนอื่น', zh: '🤝 保住忠诚但为他人开了先例。' }, stats: { competence: 30, ethics: 30, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '👋 Let Him Go', th: '👋 ปล่อยเขาไป', zh: '👋 让他走' }, consequence: { en: '📉 Short-term Pain. You train a replacement successfully.', th: '📉 เจ็บปวดระยะสั้น คุณฝึกคนทดแทนสำเร็จ', zh: '📉 短期痛苦。你成功培训了替代者。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 20 } },
            { id: 'C', text: { en: '🎁 Equity Offer', th: '🎁 เสนอหุ้น', zh: '🎁 股权提议' }, consequence: { en: '🚀 Partnership! He stays and becomes co-owner.', th: '🚀 หุ้นส่วน! เขาอยู่และกลายเป็นเจ้าของร่วม', zh: '🚀 合作伙伴！他留下并成为共同所有者。' }, stats: { competence: 40, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '🗣️ Guilt Trip', th: '🗣️ เล่นอารมณ์', zh: '🗣️ 情感绑架' }, consequence: { en: '😞 He stays but resents you. Performance drops.', th: '😞 เขาอยู่แต่ขุ่นเคืองคุณ ผลงานลดลง', zh: '😞 他留下但怨恨你。表现下降。' }, stats: { competence: 10, ethics: -20, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'construction_048',
        text: {
            en: '🏗️ The Smart City Sensor: A tech company wants to embed IoT sensors in your concrete for "smart building" data. Free installation but they own the data.',
            th: '🏗️ เซนเซอร์สมาร์ทซิตี้: บริษัทเทคโอกให้ฝังเซนเซอร์ IoT ในคอนกรีตของคุณเพื่อข้อมูล "อาคารอัจฉริยะ" ติดตั้งฟรีแต่พวกเขาเป็นเจ้าของข้อมูล',
            zh: '🏗️ 智慧城市传感器：一家科技公司想在你的混凝土中嵌入物联网传感器用于"智能建筑"数据。免费安装但他们拥有数据。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Full Partnership', th: '🚀 หุ้นส่วนเต็ม', zh: '🚀 全面合作' }, consequence: { en: '🏆 Innovation Leader! Building becomes showcase for tech.', th: '🏆 ผู้นำนวัตกรรม! ตึกกลายเป็นโชว์เคสเทคโนโลยี', zh: '🏆 创新领导者！建筑成为技术展示。' }, stats: { competence: 40, ethics: 20, leadership: 40, innovation: 60 } },
            { id: 'B', text: { en: '🛑 Privacy Concerns', th: '🛑 กังวลความเป็นส่วนตัว', zh: '🛑 隐私担忧' }, consequence: { en: '🛡️ Tenant Trust. No data mining in your buildings.', th: '🛡️ ผู้เช่าไว้ใจ ไม่มีการขุดข้อมูลในตึกคุณ', zh: '🛡️ 租户信任。你的建筑中没有数据挖掘。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: -10 } },
            { id: 'C', text: { en: '💰 Negotiate Revenue Split', th: '💰 เจรจาแบ่งรายได้', zh: '💰 协商收入分成' }, consequence: { en: '💡 Smart Deal! You get 30% of data profits annually.', th: '💡 ข้อตกลงฉลาด! คุณได้ 30% ของกำไรข้อมูลทุกปี', zh: '💡 聪明交易！你每年获得30%的数据利润。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🕵️ Counter-Spy', th: '🕵️ สอดแนมกลับ', zh: '🕵️ 反间谍' }, consequence: { en: '📉 Paranoia! You waste money on security consultants.', th: '📉 หวาดระแวง! คุณเสียเงินกับที่ปรึกษาความปลอดภัย', zh: '📉 偏执！你把钱浪费在安全顾问上。' }, stats: { competence: 10, ethics: 20, leadership: 0, innovation: 10 } }
        ]
    },
    {
        id: 'construction_049',
        text: {
            en: '🌍 The International Project: You win a bid to build a hotel in a developing country. Bribes are "normal business practice" there.',
            th: '🌍 โครงการต่างประเทศ: คุณชนะประมูลสร้างโรงแรมในประเทศกำลังพัฒนา สินบนคือ "ธุรกิจปกติ" ที่นั่น',
            zh: '🌍 国际项目：你赢得了在发展中国家建造酒店的投标。贿赂是那里的"正常商业惯例"。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Walk Away', th: '🛑 ถอนตัว', zh: '🛑 退出' }, consequence: { en: '🛡️ Clean Reputation. You maintain ethical standards.', th: '🛡️ ชื่อเสียงสะอาด คุณรักษามาตรฐานจริยธรรม', zh: '🛡️ 清白声誉。你保持道德标准。' }, stats: { competence: 20, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '💰 Pay Up', th: '💰 จ่ายตามที่เขาต้องการ', zh: '💰 付款' }, consequence: { en: '⚖️ FCPA Violation! FBI investigates. Career destroyed.', th: '⚖️ ละเมิด FCPA! FBI สอบสวน อาชีพจบ', zh: '⚖️ 违反反海外腐败法！FBI调查。职业生涯毁了。' }, stats: { competence: 30, ethics: -60, leadership: -40, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Local Partner', th: '🤝 หุ้นส่วนท้องถิ่น', zh: '🤝 本地合作伙伴' }, consequence: { en: '💡 Smart! Partner handles local customs legally.', th: '💡 ฉลาด! หุ้นส่วนจัดการท้องถิ่นอย่างถูกกฎหมาย', zh: '💡 聪明！合作伙伴合法处理当地习俗。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '📢 Report Corruption', th: '📢 รายงานคอร์รัปชั่น', zh: '📢 举报腐败' }, consequence: { en: '🎖️ Heroic but blacklisted. No more international work.', th: '🎖️ กล้าหาญแต่ถูกแบน ไม่มีงานต่างประเทศอีก', zh: '🎖️ 英勇但被列入黑名单。不再有国际工作。' }, stats: { competence: 30, ethics: 70, leadership: 40, innovation: 0 } }
        ]
    },
    {
        id: 'construction_050',
        text: {
            en: '🎓 Retirement: After 30 years, you are retiring. The company offers you a consulting role or a clean break with full pension.',
            th: '🎓 เกษียณ: หลังจาก 30 ปี คุณจะเกษียณ บริษัทเสนอให้คุณเป็นที่ปรึกษาหรือพักเต็มที่กับบำนาญเต็ม',
            zh: '🎓 退休：经过30年，你即将退休。公司提供你顾问职位或全额退休金彻底离开。'
        },
        options: [
            { id: 'A', text: { en: '🎓 Mentor Young Builders', th: '🎓 เป็นพี่เลี้ยงคนรุ่นใหม่', zh: '🎓 指导年轻建筑者' }, consequence: { en: '🌟 Legacy! Your knowledge lives on through students.', th: '🌟 มรดก! ความรู้ของคุณอยู่ต่อในลูกศิษย์', zh: '🌟 遗产！你的知识通过学生传承下去。' }, stats: { competence: 40, ethics: 50, leadership: 60, innovation: 30 } },
            { id: 'B', text: { en: '🏖️ Full Retirement', th: '🏖️ เกษียณเต็มที่', zh: '🏖️ 完全退休' }, consequence: { en: '😌 Peaceful! You enjoy family time guilt-free.', th: '😌 สงบ! คุณมีเวลากับครอบครัวอย่างไร้กังวล', zh: '😌 平静！你无愧地享受家庭时光。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🏗️ Start Own Firm', th: '🏗️ เปิดบริษัทเอง', zh: '🏗️ 自己创业' }, consequence: { en: '🚀 Entrepreneurship! You build your dream projects.', th: '🚀 เป็นผู้ประกอบการ! คุณสร้างโครงการในฝัน', zh: '🚀 创业！你建造梦想项目。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 60 } },
            { id: 'D', text: { en: '📚 Write a Book', th: '📚 เขียนหนังสือ', zh: '📚 写书' }, consequence: { en: '📖 Bestseller! "The Construction Managers Handbook" becomes industry standard.', th: '📖 ขายดี! "คู่มือผู้จัดการก่อสร้าง" กลายเป็นมาตรฐานอุตสาหกรรม', zh: '📖 畅销书！《建筑经理手册》成为行业标准。' }, stats: { competence: 40, ethics: 40, leadership: 40, innovation: 50 } }
        ]
    }
];


