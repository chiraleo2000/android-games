
// Doctor Career Questions
// Ultra-Comprehensive set: 15 detailed, story-rich questions
// Covering Surgery, ER, Research, Ethics, and Global Health

export const doctorQuestions = [
    {
        id: 'doc_001',
        text: {
            en: '🚑 The Golden Hour Crisis: A 24-year-old victim of a motorcycle accident arrives with a crushed pelvis and internal bleeding. Blood pressure is 70/40. He\'s conscious and screams that his religion forbids blood transfusions. His frantic parents beg you to save him "at any cost." Without blood, he has a 95% chance of dying in minutes.',
            th: '🚑 วิกฤตนาทีทอง: เหยื่ออุบัติเหตุมอเตอร์ไซค์อายุ 24 ปี มาถึงด้วยอาการเชิงกรานแหลกและเลือดออกภายใน ความดัน 70/40 เขายังมีสติและตะโกนว่าศาสนาของเขาห้ามรับเลือด พ่อแม่ขอร้องให้ช่วยเขา "ไม่ว่าจะต้องจ่ายเท่าไหร่" หากไม่มีเลือด เขามีโอกาสตาย 95% ในไม่กี่นาที',
            zh: '🚑 黄金一小时危机：一名24岁的摩托车事故受害者送达，骨盆粉碎性骨折，内出血。血压70/40。他在清醒状态下大喊，他的宗教禁止输血。他疯狂的父母请求你“不惜一切代价”救他。如果不输血，他在几分钟内死亡的可能性为95%。'
        },
        options: [
            {
                id: 'A',
                text: { en: '⚖️ Respect Autonomy', th: '⚖️ เคารพการตัดสินใจ', zh: '⚖️ 尊重自主权' },
                consequence: { en: '✅ Ethical Victory. You use aggressive fluid resuscitation (Saline/Albumin) instead. He survives a grueling surgery. You honored his faith.', th: '✅ ชัยชนะทางจริยธรรม! คุณใช้สารน้ำอื่นทดแทนการให้เลือด เขาอดทนผ่านการผ่าตัดที่โหดหินมาได้ คุณเคารพในความเชื่อของเขา', zh: '✅ 伦理胜利。你改用积极的液体复苏（盐水/白蛋白）。他经受住了艰苦的手术。你尊重了他的信仰。' },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '💉 Force Transfusion', th: '💉 บังคับให้เลือด', zh: '强制输血' },
                consequence: { en: '⚠️ Life Saved, Trust Lost. He lives, but sues you for "medical battery." You saved his life but violated his core being. The family is torn.', th: '⚠️ ช่วยชีวิตได้แต่เสียความเชื่อใจ เขารอดแต่ฟ้องคุณฐานทำร้ายร่างกายทางการแพทย์ คุณช่วยชีวิตเขาแต่ละเมิดตัวตนที่แท้จริงของเขา ครอบครัวแตกแยก', zh: '⚠️ 生命获救，信任丧失。他活了下来，但起诉你“医疗侵害”。你救了他的命，但违背了他的核心理念。家庭关系破裂。' },
                stats: { competence: 40, ethics: -50, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🚑 Wait for Legal Counsel', th: '🚑 รอปรึกษาฝ่ายกฎหมาย', zh: '等待法律顾问' },
                consequence: { en: '💀 Fatal Delay. While lawyers debate, his heart stops. He dies. You were "safe" legally but failed as a healer.', th: '💀 ความล่าช้าที่ถึงแก่ชีวิต! ขณะที่ทนายเถียงกัน หัวใจเขาก็หยุดเต้น เขาเสียชีวิต คุณปลอดภัยทางกฎหมายแต่ล้มเหลวในฐานะผู้รักษา', zh: '💀 致命的耽搁。在律师争论时，他的心脏停止了跳动。他死了。你在法律上是“安全”的，但作为医生你失败了。' },
                stats: { competence: 10, ethics: 20, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_002',
        text: {
            en: '💊 The "Superbug" Outbreak: A resistant CRE strain is spreading in your ICU. Two have died. The CEO wants to keep it quiet to avoid a drop in surgery bookings. Your data shows a 45% mortality rate.',
            th: '💊 การระบาดของ "ซูเปอร์บั๊ก": เชื้อดื้อยา CRE กำลังระบาดใน ICU ตายไปแล้ว 2 CEO อยากให้ปิดข่าวเพื่อไม่ให้ยอดจองผ่าตัดตก ข้อมูลคุณชี้ว่าอัตราตายสูงถึง 45%',
            zh: '💊 “超级细菌”爆发：耐药性 CRE 菌株正在你的 ICU 传播。已有两人死亡。首席执行官希望隐瞒消息，以避免手术预约量下降。你的数据显示死亡率为 45%。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📢 Radical Transparency', th: '📢 โปร่งใสอย่างสุดขั้ว', zh: '📢 极端透明化' },
                consequence: { en: '✅ Integrity. You call the CDC. The ICU closes. You save dozens from infection, but the hospital loses $2M. You are a hero to nurses.', th: '✅ ความซื่อสัตย์! คุณโทรแจ้ง CDC สั่งปิด ICU คุณช่วยคนได้หลายสิบคนจากการติดเชื้อ แต่โรงพยาบาลเสียเงิน 70 ล้านบาท คุณเป็นฮีโร่ของเหล่าพยาบาล', zh: '✅ 正直。你致电疾控中心。ICU 关闭。你拯救了数十人免受感染，但医院损失了 200 万美元。你是护士心中的英雄。' },
                stats: { competence: 40, ethics: 80, leadership: 60, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤫 Obey CEO', th: '🤫 เชื่อฟัง CEO', zh: '服从首席执行官' },
                consequence: { en: '💀 Mass Casualty. The infection spreads to the surgical ward. 10 more die. A massive scandal breaks. Your license is under review.', th: '💀 การตายหมู่! เชื้อลามไปห้องผ่าตัด ตายเพิ่มอีก 10 เรื่องแดงกลายเป็นเรื่องอื้อฉาวระดับชาติ ใบอนุญาตคุณกำลังถูกตรวจสอบ', zh: '💀 大规模伤亡。感染蔓延到手术病房。又有 10 人死亡。大规模丑闻爆发。你的执照正在接受审查。' },
                stats: { competence: 20, ethics: -100, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🔍 Stealth Containment', th: '🔍 ควบคุมแบบเงียบเชียบ', zh: '秘密遏制' },
                consequence: { en: '⚠️ Risky Balance. You implement strict cleaning protocols without a public announcement. It works, barely. You feel like you gambled with lives.', th: '⚠️ รักษาสมดุลที่เสี่ยง! คุณใช้มาตรการทำความสะอาดเข้มงวดโดยไม่ประกาศต่อสาธารณะ ได้ผลแบบหวุดหวิด คุณรู้สึกเหมือนเอาชีวิตคนไปเดิมพัน', zh: '⚠️ 危险的平衡。你在没有公开发布公告的情况下实施了严格的清洁协议。勉强奏效。你觉得自己是在拿生命进行豪赌。' },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'doc_003',
        text: {
            en: '🧠 The Genius Surgeon\'s Secret: Your mentor, a world-class neurosurgeon, has a slight hand tremor. He ignores your concern. He has three major brain surgeries tomorrow.',
            th: '🧠 ความลับของศัลยแพทย์อัจฉริยะ: อาจารย์หมอประสาทชื่อดังระดับโลก มือสั่นเล็กน้อย เขาไม่สนความกังวลของคุณ พรุ่งนี้เขามีผ่าตัดสมองใหญ่ 3 เคส',
            zh: '🧠 天才外科医生的秘密：你的导师，一位世界顶尖的神经外科医生，手部有轻微颤抖。他无视你的担忧。他明天有三场重大的大脑手术。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Report Him', th: '🛑 รายงานเขา', zh: '举报他' },
                consequence: { en: '✅ Patient Safety. He is suspended. Evaluation confirms early Parkinson\'s. You saved his patients, but he never speaks to you again.', th: '✅ ปลอดภัยไว้ก่อน! เขาโดนพักงาน ผลตรวจยืนยันว่าเป็นพาร์กินสันระยะแรก คุณช่วยคนไข้เขาไว้ได้ แต่เขาไม่ยอมพูดกับคุณอีกเลย', zh: '✅ 患者安全。他被停职。评估确认是早期帕金森病。你拯救了他的患者，但他再也不跟你说话了。' },
                stats: { competence: 50, ethics: 90, leadership: 70, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🤝 Offer to Assist', th: '🤝 เสนอตัวช่วยผ่า', zh: '提议协助' },
                consequence: { en: '⚠️ Covering Up. You do 80% of the work while he takes the credit. It\'s safe for now, but you are enabling a dangerous situation.', th: '⚠️ ช่วยปกปิด! คุณลงมือทำเอง 80% แต่เขาได้หน้า มันปลอดภัยในตอนนี้แต่คุณกำลังส่งเสริมสถานการณ์ที่อันตราย', zh: '⚠️ 掩盖。你承担了 80% 的工作，而荣誉归他。目前是安全的，但你在助长危险的局面。' },
                stats: { competence: 60, ethics: 20, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🤐 Stay Silent', th: '🤐 เงียบไว้', zh: '保持沉默' },
                consequence: { en: '💀 Catastrophe. He slips. A patient ends up paralyzed. You are called as a witness and have to lie or admit you knew.', th: '💀 หายนะ! มือเขาพลาด คนไข้กลายเป็นอัมพาต คุณโดนเรียกเป็นพยานและต้องเลือกว่าจะโกหกหรือยอมรับว่ารู้เรื่อง', zh: '💀 灾难。他失手了。一名患者最终瘫痪。你被召为证人，必须撒谎或承认你知情。' },
                stats: { competence: 10, ethics: -60, leadership: -20, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_004',
        text: {
            en: '🩺 The Exhausted Resident: You are in hour 34 of a shift. You wrote "50mg" instead of "5.0mg" for a blood thinner. The nurse is about to administer it.',
            th: '🩺 แพทย์ใช้ทุนผู้เหนื่อยล้า: คุณอยู่เวรมา 34 ชม. แล้ว เขียนยาละลายลิ่มเลือด "50mg" แทนที่จะเป็น "5.0mg" พยาบาลกำลังจะฉีดยาให้คนไข้',
            zh: '🩺 精疲力竭的住院医：你连续工作了 34 小时。你在开抗凝血药时把“5.0mg”写成了“50mg”。护士正准备给药。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Stop! Shout it Out', th: '🛑 หยุด! ตะโกนห้าม', zh: '🛑 停！大喊阻止' },
                consequence: { en: '✅ Crisis Averted. You admit the error immediately. Patient safe. You are sent home to sleep. Leadership respects your honesty.', th: '✅ ยับยั้งวิกฤต! คุณยอมรับผิดทันที คนไข้ปลอดภัย หัวหน้าไล่คุณกลับไปนอน และชื่นชมในความซื่อสัตย์', zh: '✅ 危机避免。你立即承认了错误。患者安全。你被送回家睡觉。领导层尊重你的诚实。' },
                stats: { competence: 50, ethics: 70, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '📝 Ninja Chart Edit', th: '📝 แอบแก้ชาร์ตเงียบๆ', zh: '悄悄修改病历' },
                consequence: { en: '💀 Caught. The nurse saw the original and already pulled the vial. Digital logs prove the edit time. You look like a fraud and a killer.', th: '💀 ความแตก! พยาบาลเห็นใบสั่งเก่าและหยิบยามาแล้ว ระบบดิจิทัลฟ้องเวลาที่แก้ คุณดูเหมือนเป็นคนขี้ฉ้อและฆาตกร', zh: '💀 被抓。护士看到了原始医嘱并已经取了药。电子日志证明了修改时间。你看起来像是个骗子和杀手。' },
                stats: { competence: 20, ethics: -80, leadership: 0, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_005',
        text: {
            en: '💨 The Miracle Cure: A patient with terminal cancer insists on stopping chemo to try an unverified "alkaline water" diet they saw on TikTok. Their family is begging you to talk sense into them.',
            th: '💨 ยาเทวดา: คนไข้มะเร็งระยะสุดท้ายจะเลิกคีโมไปกิน "น้ำด่าง" ตาม TikTok ครอบครัวอ้อนวอนให้คุณช่วยกล่อม',
            zh: '💨 奇迹疗法：一名癌症晚期患者坚持停止化疗，尝试他们在 TikTok 上看到的未经证实的“碱性水”饮食。他们的家人请求你劝劝他们。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📕 Scientific Reality', th: '📕 ความจริงทางวิทย์', zh: '科学现实' },
                consequence: { en: '⚠️ Defensive Wall. The patient labels you "Big Pharma shill" and fires you. They die 3 months later. You were right, but you lost the connection.', th: '⚠️ กำแพงทิฐิ! คนไข้ด่าคุณว่าเป็น "สมุนบริษัทยา" แล้วไล่คุณออก เขาตายในอีก 3 เดือนให้หลัง คุณพูดถูกแต่เสียเขาไป', zh: '⚠️ 防御墙。患者贴上“大制药公司说客”的标签并解雇了你。他们在 3 个月后死亡。你是对的，但你失去了这种联系。' },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤝 Integrative Compromise', th: '🤝 ประนีประนอม', zh: '综合妥协' },
                consequence: { en: '✅ Shared Decision. "Drink the water, but keep the chemo too." They agree. You kept them in treatment while respecting their autonomy.', th: '✅ การตัดสินใจร่วมกัน! "ดื่มน้ำนั้นได้ แต่ต้องทำคีโมด้วยนะ" พวกเขาตกลง คุณรักษาคนไข้ไว้ได้พร้อมกับเคารพความเชื่อเขา', zh: '✅ 共同决定。“喝那个水，但也要坚持化疗。”他们同意了。你在尊重他们自主权的同时，让他们继续接受治疗。' },
                stats: { competence: 60, ethics: 70, leadership: 60, innovation: 50 }
            },
            {
                id: 'C',
                text: { en: '🤷 Dismissive: "Your Choice"', th: '🤷 แล้วแต่เลย: "เรื่องของคุณ"', zh: '不屑一顾：“随你便”' },
                consequence: { en: '❌ Neglect. You give up on the patient. They feel abandoned by modern medicine and double down on the fake cure.', th: '❌ ละเลย! คุณยอมแพ้กับคนไข้ เขารู้สึกโดนทอดทิ้งจากแพทย์แผนปัจจุบันเลยไปทุ่มเทกับยาปลอมนั่นหนักกว่าเดิม', zh: '❌ 疏忽。你放弃了患者。他们感到被现代医学抛弃，并加倍迷信虚假疗法。' },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_006',
        text: {
            en: '💔 The Terminal Request: A long-time patient in extreme pain from bone cancer asks you for "something to end it all" in a state where euthanasia is illegal.',
            th: '💔 คำขอสุดท้าย: คนไข้เก่าแก่ปวดกระดูกจากมะเร็งทรมานมาก ขอให้คุณช่วย "ทำให้มันจบๆ ไป" ในรัฐที่การการุณยฆาตผิดกฎหมาย',
            zh: '💔 临终请求：一名长期受骨癌疼痛折磨的患者请求你给点“能结束这一切的东西”，而当时身处安乐死非法的州。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Strictly Refuse', th: '🚫 ปฏิเสธเสียงแข็ง', zh: '严词拒绝' },
                consequence: { en: '⚠️ Legal but Cold. The patient suffers for another month in agony. You followed the law, but you feel like you failed the person.', th: '⚠️ ถูกกฎหมายแต่ไร้ใจ คนเข้ต้อทรมานต่อไปอีกหนึ่งเดือนเต็ม คุณทำตามกฎแต่รู้สึกเหมือนสอบตกในฐานะมนุษย์', zh: '⚠️ 法律正确但冷酷。患者在极度痛苦中又煎熬了一个月。你遵守了法律，但觉得自己辜负了这个人。' },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '💉 Aggressive Palliation', th: '💉 บรรเทาอาการแบบเข้มข้น', zh: '积极的姑息治疗' },
                consequence: { en: '✅ Grey Area. You provide enough morphine to "ease pain," knowing it might suppress respiration. The patient dies peacefully in their sleep. Compassionate care.', th: '✅ พื้นที่สีเทา! คุณมอร์ฟีนให้พอ "แก้ปวด" โดยรู้ดีว่ามันอาจกดการหายใจ คนไข้จากไปอย่างสงบในนิทรา การดูแลด้วยความเมตตา', zh: '✅ 灰色地带。你提供了足够的吗啡来“减轻痛苦”，虽然知道这可能会抑制呼吸。患者在睡眠中安详离世。富有同情心的护理。' },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'doc_007',
        text: {
            en: '🫀 Organ Transplant Dilemma: Two patients need one liver. 1) An 18-year-old honor student. 2) A 45-year-old billionaire who donated the hospital wing. Both are equal matches.',
            th: '🫀 วิกฤตปลูกถ่ายอวัยวะ: ตับหนึ่งข้าง คนไข้ 2 คนต้องการ 1) เด็กเรียนดีวัย 18 2) มหาเศรษฐีวัย 45 ที่บริจาคเงินสร้างตึกให้โรงพยาบาล ทั้งคู่เข้ากับอวัยวะได้เท่ากัน',
            zh: '🫀 器官移植困境：两名患者需要一个肝脏。1）一名18岁的优等生。2）一名捐助了医院住院部的45岁亿万富翁。两人的配型程度相同。'
        },
        options: [
            {
                id: 'A',
                text: { en: '⚖️ Follow UNOS Scoring', th: '⚖️ ตามคะแนน UNOS', zh: '遵循 UNOS 评分' },
                consequence: { en: '✅ Objective Fairness. The 18-year-old gets it based on life expectancy. The billionaire dies, and his estate cancels future donations. Your clinic loses funding.', th: '✅ ยุติธรรมตามหลักการ! เด็ก 18 ได้ไปตามอายุขัยที่เหลือ มหาเศรษฐีเสียชีวิตและพินัยกรรมสั่งยกเลิกเงินบริจาค คลินิกคุณขาดทุน', zh: '✅ 客观公平。18 岁的学生根据预期寿命获得了肝脏。亿万富翁死亡，他的遗产执行人取消了未来的捐款。你的诊所失去了资金。' },
                stats: { competence: 50, ethics: 90, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '💰 Save the Patron', th: '💰 ช่วยท่านผู้มีอุปการคุณ', zh: '拯救赞助人' },
                consequence: { en: '❌ Corrupt. Billionaire lives. You get a promotion. But you can\'t look in the mirror. Internal investigation eventually flags the "lucky" timing.', th: '❌ ทุจริต! มหาเศรษฐีรอด คุณได้เลื่อนตำแหน่ง แต่คุณสู้หน้าตัวเองในกระจกไม่ได้ การตรวจสอบภายในเริ่มสงสัยในจังหวะที่ "โชคดี" ผิดปกติ', zh: '❌ 腐败。亿万富翁活了下来。你获得了晋升。但你无法直视镜子里的自己。内部调查最终标记了这个“幸运”的时机。' },
                stats: { competence: 30, ethics: -80, leadership: 50, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_008',
        text: {
            en: '🧪 The Clinical Trial: You are testing a new Alzheimer\'s drug. You notice the data is being "massaged" by the pharmaceutical company to look 20% better than it actually is.',
            th: '🧪 การทดลองทางคลินิก: คุณกำลังลองยาอัลไซเมอร์ตัวใหม่ คุณสังเกตว่าบริษัทยา "นวด" ข้อมูลให้ดูดีกว่าความเป็นจริง 20%',
            zh: '🧪 临床试验：你正在测试一种新的阿尔茨海默病药物。你发现制药公司正在“润色”数据，使其看起来比实际情况好 20%。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📢 Whistleblow', th: '📢 เป่านกหวีดแฉ', zh: '吹哨举报' },
                consequence: { en: '✅ Scientific Integrity. The trial is halted. The company is fined. You lose your research grant, but you protected millions from a failed drug.', th: '✅ ความถูกต้องทางวิทย์! การทดลองถูกระงับ บริษัทโดนปรับ คุณเสียทุนวิจัยแต่คุณช่วยคนนับล้านจากยาที่ไม่ได้ผลจริง', zh: '✅ 科学诚信。试验停止。公司被罚款。你失去了研究资助，但你保护了数百万人免受失败药物的侵害。' },
                stats: { competence: 60, ethics: 90, leadership: 70, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤐 Keep Head Down', th: '🤐 ทำเป็นไม่เห็น', zh: '埋头苦干' },
                consequence: { en: '💀 Complicity. The drug hits the market. Patients get severe side effects with zero benefit. Years later, you are part of a massive class-action lawsuit.', th: '💀 สมรู้ร่วมคิด! ยาเข้าสู่ตลาด คนไข้เจอผลข้างเคียงหนักแต่ไม่ได้ผลดีเลย หลายปีต่อมา คุณเป็นหนึ่งในจำเลยคดีฟ้องร้องเรียกค่าเสียหายยักษ์ใหญ่', zh: '💀 共谋。药物上市。患者产生了严重的副作用，却没有任何疗效。数年后，你卷入了一场大规模的集体诉讼。' },
                stats: { competence: 30, ethics: -70, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_009',
        text: {
            en: '🤖 AI vs Human: A new AI diagnostics tool says a patient has a rare tumor. Your gut feeling says it\'s just a harmless shadow. The surgery to check is extremely risky.',
            th: '🤖 AI ปะทะ มนุษย์: เครื่องมือ AI บอกว่าคนไข้มีเนื้องอกที่หายาก แต่สัญชาตญาณคุณบอกว่ามันแค่เงาที่ไม่มีอันตราย การผ่าตัดเพื่อพิสูจน์นั้นเสี่ยงสูงมาก',
            zh: '🤖 AI 对阵人类：一款新的 AI 诊断工具显示患者患有罕见肿瘤。你的直觉告诉那只是个无害的阴影。检查的手术风险极高。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚀 Trust the Machine', th: '🚀 เชื่อเครื่องจักร', zh: '相信机器' },
                consequence: { en: '⚠️ False Alarm. You operate. Nothing there. The patient has a long recovery from a "useless" surgery. You relied too much on tech.', th: '⚠️ สัญญาณหลอก! คุณผ่าตัดแต่ไม่เจออะไรเลย คนไข้ต้องใช้เวลานานเพื่อฟื้นฟูจากการผ่าตัดที่ "เสียเปล่า" คุณเชื่อเทคโนโลยีมากเกินไป', zh: '⚠️ 误报。你进行了手术。什么也没发现。患者因一场“无用”的手术而经历了漫长的康复期。你太依赖技术了。' },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 60 }
            },
            {
                id: 'B',
                text: { en: '🛡️ Trust Your Gut', th: '🛡️ เชื่อสัญชาตญาณ', zh: '相信直觉' },
                consequence: { en: '✅ Professional Win. You monitor them instead. 6 months later, the shadow is gone. You saved the patient from unnecessary trauma.', th: '✅ ชัยชนะมืออาชีพ! คุณเลือกเฝ้าดูอาการแทน 6 เดือนต่อมาเงานั้นหายไป คุณช่วยคนไข้จากความบอบช้ำที่ไม่จำเป็น', zh: '✅ 职业胜利。你转而进行监测。6 个月后，阴影消失了。你让患者免受不必要的创伤。' },
                stats: { competence: 70, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '🔬 Third Opinion', th: '🔬 หาความเห็นที่สาม', zh: '寻求第三方意见' },
                consequence: { en: '✅ Diligence. You send the scan to a specialist in Switzerland. They confirm your gut feeling. Science over machines.', th: '✅ ความรอบคอบ! คุณส่งผลสแกนไปให้ผู้เชี่ยวชาญที่สวิตเซอร์แลนด์ เขายืนยันว่าคุณคิดถูก วิทยาศาสตร์เหนือกว่าเครื่องจักร', zh: '✅ 勤勉。你将扫描结果发给瑞士的一位专家。他们证实了你的直觉。科学胜过机器。' },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 40 }
            }
        ]
    },
    {
        id: 'doc_010',
        text: {
            en: '🏚️ The Rural Shortcut: You are the only doctor in a village. A child has a broken arm. You have no X-ray machine. You could set it by feel, or send them on an 8-hour bus ride to the city.',
            th: '🏚️ ทางลัดในชนบท: คุณเป็นหมอคนเดียวในหมู่บ้าน เด็กแขนหักแต่คุณไม่มีเครื่อง X-ray คุณจะดัดให้เข้าที่ตามสัมผัส หรือส่งเขานั่งรถบัส 8 ชม. เข้าเมือง',
            zh: '🏚️ 乡村捷径：你是村里唯一的医生。一个孩子手臂骨折。你没有 X 光机。你可以凭感觉复位，或者让他们坐 8 小时的公共汽车去城里。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🖖 Set it Now', th: '🖖 ดัดเลย', zh: '现场复位' },
                consequence: { en: '✅ Success. Your experience pays off. The bone aligns perfectly. The child is playing in 2 weeks. You are the village healer.', th: '✅ สำเร็จ! ประสบการณ์ช่วยได้ กระดูกเข้าที่เป๊ะ เด็กกลับมาวิ่งร่าได้ใน 2 สัปดาห์ คุณคือเจ้าพ่อหมอเบื้องในใจชาวบ้าน', zh: '✅ 成功。你的经验得到了回报。骨骼对位完美。孩子在 2 周后就能玩耍了。你是村里的神医。' },
                stats: { competence: 70, ethics: 50, leadership: 60, innovation: 40 }
            },
            {
                id: 'B',
                text: { en: '🚌 Send to City', th: '🚌 ส่งเข้าเมือง', zh: '送往城市' },
                consequence: { en: '⚠️ Standard Care. The child suffers on the bus. The arm is fixed, but the family is now in debt from the travel and city fees.', th: '⚠️ มาตรฐานการรักษา! เด็กต้องทรมานบนรถบัส แขนถูกรักษาได้ดีแต่ครอบครัวต้องเป็นหนี้จากค่าเดินทางและค่าธรรมเนียมในเมือง', zh: '⚠️ 标准护理。孩子在公共汽车上受苦。手臂治好了，但由于路费和城市里的费用，家里现在负债累累。' },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: 10 }
            }
        ]
    },
    {
        id: 'doc_011',
        text: {
            en: '🤥 The Medical Error: You accidentally nicked an artery during surgery. You fixed it, and the patient is fine, but it added 2 hours to the time. The family asks what happened.',
            th: '🤥 ข้อผิดพลาดทางการแพทย์: คุณเผลอทำเส้นเลือดแดงฉีกระหว่างผ่าตัด คุณซ่อมมันแล้วและคนไข้ปลอดภัยดี แต่มันทำให้ผ่าตัดนานขึ้น 2 ชม. ครอบครัวถามว่าเกิดอะไรขึ้น',
            zh: '🤥 医疗错误：你在手术中不小心碰到了动脉。你修复了它，病人没事，但手术时间增加了 2 小时。家人问发生了什么事。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📢 Full Disclosure', th: '📢 บอกความจริงทั้งหมด', zh: '完全坦白' },
                consequence: { en: '✅ Honest Medicine. They are shocked but appreciate the honesty. No lawsuit. Your integrity score in the hospital rises.', th: '✅ แพทย์ผู้สัตย์จริง! พวกเขาช็อกแต่ชื่นชมที่คุณพูดตรงๆ ไม่มีคดีความ คะแนนความน่าเชื่อถือในโรงพยาบาลพุ่ง', zh: '✅ 诚实的医学。他们很震惊，但感激这种诚实。没有诉讼。你在医院的诚信分数上升了。' },
                stats: { competence: 50, ethics: 90, leadership: 70, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🤐 Vague: "Complications"', th: '🤐 พูดกำกวม: "มีภาวะแทรกซ้อน"', zh: '含糊其辞：“并发症”' },
                consequence: { en: '⚠️ Hidden Truth. They accept it. But you feel like a liar. You missed a learning opportunity for the junior residents.', th: '⚠️ ความจริงที่ซ่อนอยู่! พวกเขายอมรับได้ แต่คุณรู้สึกเหมือนคนโกหก และคุณพลาดโอกาสสอนแพทย์รุ่นน้องเรื่องการรับมือความจริง', zh: '⚠️ 隐藏的真相。他们接受了。但你觉得自己像个骗子。你错过了一个向低年级住院医生学习的机会。' },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_012',
        text: {
            en: '👨‍💼 The Difficult Colleague: A very talented but toxic surgeon is bullying the nursing staff. Morale is at an all-time low. He brings in the most revenue for the hospital.',
            th: '👨‍💼 เพื่อนร่วมงานตัวร้าย: ศัลยแพทย์ที่เก่งมากแต่ทรรศนคติแย่ชอบข่มเหงพยาบาล ขวัญกำลังใจพนักงานตกต่ำที่สุด แต่เขาคือคนทำเงินเข้าโรงพยาบาลมากที่สุด',
            zh: '👨‍💼 难相处的同事：一位才华横溢但有毒的外科医生正在欺凌护理人员。士气降至历史最低点。他是医院收入最高的医生。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🥊 Confront Directly', th: '🥊 ประจันหน้าโดยตรง', zh: '直接对抗' },
                consequence: { en: '✅ Leadership. You demand a change in behavior. He threatens to leave. The board backs you. The hospital culture heals.', th: '✅ ภาวะผู้นำ! คุณสั่งให้เขาเปลี่ยนพฤติกรรม เขาขู่จะลาออก แต่บอร์ดบริหารหนุนหลังคุณ วัฒนธรรมองค์กรดีขึ้นทันตา', zh: '✅ 领导力。你要求其改变行为。他威胁要离开。董事会支持你。医院文化得以改善。' },
                stats: { competence: 40, ethics: 60, leadership: 90, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🙈 Ignore it', th: '🙈 ทำเป็นไม่เห็น', zh: '无视它' },
                consequence: { en: '📉 Toxic Waste. 3 star nurses quit. The quality of care drops. The "Genius" makes a mistake because he has no support. You failed as a leader.', th: '📉 ของเสียเป็นพิษ! พยาบาลระดับหัวกะทิ 3 คนลาออก คุณภาพการรักษาดิ่งเหว "อัจฉริยะ" นั่นทำพลาดเพราะไม่มีคนช่วย คุณล้มเหลวในฐานะผู้นำ', zh: '📉 有毒的废料。3 名明星护士辞职。护理质量下降。“天才”因为没有支持而犯了错。作为领导者你失败了。' },
                stats: { competence: 20, ethics: 20, leadership: -50, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_013',
        text: {
            en: '💰 Insurance Fraud: The hospital administrator asks you to "upcode" several minor procedures to more expensive ones to meet budget goals.',
            th: '💰 ทุจริตประกัน: ผู้บริหารโรงพยาบาลขอให้คุณ "อัพเกรดรหัสโรค" จากการรักษาเล็กๆ ให้เป็นเรื่องใหญ่ราคาแพงเพื่อให้ถึงเป้าหมายงบประมาณ',
            zh: '💰 保险欺诈：医院管理员要求你将几项小手术“升级编码”为昂贵的手术，以实现预算目标。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Refuse', th: '🚫 ปฏิเสธ', zh: '拒绝' },
                consequence: { en: '✅ Integrity. You are passed over for a promotion. But you sleep well. Later, the administrator is arrested. You are safe.', th: '✅ ความซื่อสัตย์! คุณพลาดการเลื่อนตำแหน่ง แต่คุณหลับสนิท ต่อมาผู้บริหารคนนั้นโดนจับ คุณรอดตัว', zh: '✅ 正直。你错过了晋升。但你睡得很香。后来，管理员被捕了。你是安全的。' },
                stats: { competence: 40, ethics: 90, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '💵 Just a Little...', th: '💵 นิดนึงแล้วกัน...', zh: '就一点点……' },
                consequence: { en: '💀 Audit Trap. An insurance audit flags your signatures. You lose your license for fraud. Was it worth the bonus?', th: '💀 กับดักการตรวจสอบ! การสุ่มตรวจประกันเจอชื่อคุณกำกับอยู่ คุณเสียใบอนุญาตฐานฉ้อโกง มันคุ้มกับโบนัสไหม?', zh: '💀 审计陷阱。保险审计发现了你的签名。你因欺诈失去了执照。那点奖金值得吗？' },
                stats: { competence: 30, ethics: -100, leadership: 0, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_014',
        text: {
            en: '🌎 The Low-Volume Clinic: You work in an area where 40% of patients don\'t speak your language. There is no budget for official translators.',
            th: '🌎 คลินิกสื่อสารยาก: คุณทำงานในที่ที่คนไข้ 40% พูดคนละภาษากับคุณ และไม่มีงบจ้างล่ามแปลภาษา',
            zh: '🌎 低就诊量诊所：你工作的地区 40% 的患者不会说你的语言。没有聘请正式翻译的预算。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📱 Use Google Translate', th: '📱 ใช้กูเกิลแปลภาษา', zh: '使用谷歌翻译' },
                consequence: { en: '⚠️ Miscommunication Risk. It\'s better than nothing, but medical nuances are lost. You prescribe the wrong dosage for a "stomach ache" that was actually an ulcer.', th: '⚠️ เสี่ยงแปลพลาด! ก็ดีกว่าไม่มีอะไรเลย แต่ศัพท์แพทย์มันลึกซึ้ง คุณจ่ายยาผิดขนาดเพราะเข้าใจว่าเป็นแค่ "ปวดท้อง" ทั้งที่จริงๆ เป็นแผลในกระเพาะ', zh: '⚠️ 沟通误判风险。总比没有好，但医学上的细微差别丢失了。你为一个实际上是溃疡的“胃痛”开了错误的剂量。' },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '🖼️ Visual Aids', th: '🖼️ ใช้ภาพประกอบ', zh: '视觉辅助' },
                consequence: { en: '✅ Innovation. You design a set of icons for dosage and symptoms. Errors drop by 30%. You become an expert in non-verbal medicine.', th: '✅ นวัตกรรม! คุณออกแบบไอคอนบอกขนาดขยาและอาการต่างๆ ข้อผิดพลาดลดลง 30% คุณกลายเป็นผู้เชี่ยวชาญด้านการสื่อสารแบบไร้วาจา', zh: '✅ 创新。你为剂量和症状设计了一套图标。错误率下降了 30%。你成为了非语言医学领域的专家。' },
                stats: { competence: 50, ethics: 60, leadership: 50, innovation: 80 }
            }
        ]
    },
    {
        id: 'doc_015',
        text: {
            en: '🌍 Global Triage: A pandemic strikes. Vaccines are limited. Do you protect the elderly (dying now) or the young (the future workforce)?',
            th: '🌍 การคัดแยกผู้ป่วยระดับโลก: โรคระบาดมาเยือน วัคซีนมีจำกัด คุณจะปกป้องผู้สูงอายุ (ที่กำลังจะตาย) หรือคนหนุ่มสาว (แรงงานในอนาคต)',
            zh: '🌍 全球分诊：大流行病爆发。疫苗有限。你是保护老年人（现在正面临死亡）还是年轻人（未来的劳动力）？'
        },
        options: [
            {
                id: 'A',
                text: { en: '👵 Save the Vulnerable', th: '👵 ช่วยกลุ่มเปราะบาง', zh: '拯救弱势群体' },
                consequence: { en: '⚠️ Philosophical Choice. You save the seniors. The economy collapses because the youth are all sick. History remembers your kindness, but also the ruin.', th: '⚠️ ทางเลือกเชิงปรัชญา! คุณช่วยคนแก่ เศรษฐกิจพังทลายเพราะคนหนุ่มสาวป่วยกันหมด ประวัติศาสตร์จดจำความเมตตาของคุณ แต่ก็จดจำซากปรักหักพังที่ตามมาด้วย', zh: '⚠️ 哲学选择。你拯救了老年人。经济因为年轻人都生病而崩溃了。历史记住了你的仁慈，但也记住了随之而来的衰败。' },
                stats: { competence: 40, ethics: 80, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '👶 Save the Future', th: '👶 ช่วยอนาคตของชาติ', zh: '拯救未来' },
                consequence: { en: '⚠️ Utilitarian. The society recovers fast. You are haunted by the "sacrifice" of the elderly. You made the "hard" leader choice.', th: '⚠️ หลักอรรถประโยชน์นิยม! สังคมฟื้นตัวไวมาก แต่คุณจะถูกหลอกหลอนด้วยการ "สังเวย" ผู้สูงอายุ คุณเลือกทางเดินที่ยากลำบากของผู้นำ', zh: '⚠️ 功利主义。社会恢复很快。你因“牺牲”老年人而倍感煎熬。你做出了“强硬”领导者的选择。' },
                stats: { competence: 50, ethics: 30, leadership: 80, innovation: 20 }
            }
        ]
    },
    {
        id: 'doc_016',
        text: {
            en: '🤖 The Robotic Malfunction: Mid-surgery on a delicate spinal procedure, the $2.5M surgical robot freezes. The patient\'s spinal cord is exposed. A manual override is possible but highly imprecise. Your technician says a reboot takes 8 minutes.',
            th: '🤖 หุ่นยนต์ทำงานผิดปกติ: ระหว่างการผ่าตัดกระดูกสันหลังที่ละเอียดอ่อน หุ่นยนต์ผ่าตัดมูลค่า 85 ล้านบาทเกิดค้าง ไขสันหลังของคนไข้ถูกเปิดทิ้งไว้ การควบคุมด้วยมือทำได้แต่ไม่แม่นยำมาก ช่างเทคนิคบอกว่าการรีบูตต้องใช้เวลา 8 นาที',
            zh: '🤖 机器人故障：在一次精细的脊柱手术中，价值250万美元的手术机器人突然冻结。患者的脊髓暴露在外。可以进行手动覆盖，但极不精确。技术人员说重启需要8分钟。'
        },
        options: [
            {
                id: 'A',
                text: { en: '⏳ Wait & Reboot', th: '⏳ รอและรีบูต', zh: '等待并重启' },
                consequence: { en: '⚠️ Nerve Damage Risk. The 8 minutes feel like an hour. You successfully resume, but the prolonged exposure led to a minor infection. The patient recovers but has lingering numbness. You avoided a manual disaster.', th: '⚠️ เสี่ยงเส้นประสาทเสียหาย! 8 นาทีนั้นเหมือนผ่านไปเป็นชั่วโมง คุณกลับมาผ่าตัดต่อได้สำเร็จ แต่การเปิดแผลไว้นานเกินไปทำให้เกิดการติดเชื้อเล็กน้อย คนไข้ฟื้นตัวแต่มีอาการชาสะสม คุณเลี่ยงหายนะจากการคุมด้วยมือมาได้', zh: '⚠️ 神经损伤风险。这8分钟感觉像一个小时。你成功恢复了手术，但长时间的暴露导致了轻微感染。患者康复了，但留下了持续的麻木。你避免了手动操作可能导致的灾难。' },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: { en: '🖖 Manual Override', th: '🖖 ควบคุมด้วยมือเอง', zh: '手动覆盖' },
                consequence: { en: '🎲 High-Stakes Skill. Your hands are steady. You complete the critical segment manually. The robot comes back online for the closing. The patient is perfectly fine. You proved that the human is still the master.', th: '🎲 ทักษะเดิมพันสูง! มือคุณนิ่งพอ คุณทำส่วนสำคัญเสร็จด้วยมือตัวเอง หุ่นยนต์กลับมารันได้ตอนปิดแผลพอดี คนไข้ปลอดภัยหายดีทุกประการ คุณพิสูจน์แล้วว่ามนุษย์ยังคงเป็นเจ้านายของเทคโนโลยี', zh: '🎲 高风险技能。你的手很稳。你手动完成了关键部分。机器人在结束时恢复了在线。患者完全康复。你证明了人类仍然是主导。' },
                stats: { competence: 80, ethics: 30, leadership: 60, innovation: 20 }
            }
        ]
    },
    {
        id: 'doc_017',
        text: {
            en: '🌟 The VIP Shortcut: A famous Hollywood actor is admitted to the ER with abdominal pain. His manager demands he be moved to the front of the 4-hour queue, bypassing a construction worker who may have appendicitis.',
            th: '🌟 ทางลัด VIP: ดาราฮอลลีวูดชื่อดังเข้า ER ด้วยอาการปวดท้อง ผู้จัดการของเขาเรียกร้องให้เขาลัดคิวที่ยาว 4 ชั่วโมง โดยข้ามหน้าคนงานก่อสร้างที่อาจเป็นไส้ติ่งอักเสบ',
            zh: '🌟 VIP 捷径：一位好莱坞著名演员因腹痛急诊入院。他的经纪人要求他插队到4小时队列的最前面，越过一名可能患有阑尾炎的建筑工人。'
        },
        options: [
            {
                id: 'A',
                text: { en: '⚖️ Standard Triage', th: '⚖️ ทำตามคัดกรองปกติ', zh: '标准分诊' },
                consequence: { en: '✅ Moral Fortress. You make the star wait. The worker\'s appendix was near bursting; you save him. The actor has minor indigestion and rants on Twitter about your hospital. Your CEO is annoyed, but the ER staff is fiercely loyal to you.', th: '✅ ป้อมปราการศีลธรรม! คุณให้ดารารอ ไส้ติ่งของคนงานคนนั้นเกือบแตกแล้ว และคุณช่วยเขาไว้ได้ทัน ดาราแค่ท้องอืดเลยไปบ่นลง Twitter ว่าโรงพยาบาลห่วย CEO เซ็งนิดหน่อย แต่ทีม ER ภักดีต่อคุณสุดๆ', zh: '✅ 道德堡垒。你让大明星等待。工人的阑尾快要破裂了；你救了他。演员只是轻微消化不良，并在推特上控诉你的医院。首席执行官很恼火，但急诊科的工作人员对你极度忠诚。' },
                stats: { competence: 40, ethics: 90, leadership: 80, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '💎 VIP Treatment', th: '💎 จัดที่พิเศษให้', zh: 'VIP 待遇' },
                consequence: { en: '❌ Protocol Breach. You see the actor first. He donates $50k to the wing. However, the worker\'s appendix bursts in the lobby. The hospital faces a massive lawsuit and a PR nightmare. You traded your soul for a donation.', th: '❌ ละเมิดเกณฑ์ปฏิบัติ! คุณดูดาราก่อน เขาบริจาคเงิน 1.5 ล้านให้โรงพยาบาล แต่ไส้ติ่งคนงานแตกในห้องโถงรอ โรงพยาบาลโดนฟ้องยับและเจอวิกฤต PR คุณแลกจิตวิญญาณเพื่อเงินบริจาค', zh: '❌ 违反流程。你先诊治了演员。他向病房捐赠了5万美元。然而，工人的阑尾在外面大厅破裂了。医院面临巨额诉讼和公关噩梦。你用灵魂换取了捐款。' },
                stats: { competence: 30, ethics: -100, leadership: 40, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_018',
        text: {
            en: '💊 The Opioid Dilemma: Your long-time patient, a successful lawyer, is clearly addicted to the painkillers you prescribed for a back injury. He begs for "one last refill" to get through a big trial, threatening to find another doctor if you refuse.',
            th: '💊 วิกฤตโอปิออยด์: คนไข้เก่าแก่ที่เป็นทนายชื่อดัง ติดยาปวดที่คุณจ่ายให้จากอาการเจ็บหลังอย่างเห็นได้ชัด เขาอ้อนวอนขอ "ใบสั่งยารอบสุดท้าย" เพื่อให้ผ่านการขึ้นศาลครั้งใหญ่ไปได้ และขู่ว่าจะไปหาหมอคนอื่นถ้าคุณปฏิเสธ',
            zh: '💊 阿片类药物困境：你的长期患者，一位成功的律师，显然对你为他的背伤开出的止痛药上瘾了。他恳求“最后一次续药”以熬过一场重大审判，并威胁说如果你拒绝，他就去找别的医生。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Strict Refusal', th: '🚫 ปฏิเสธเด็ดขาด', zh: '严格拒绝' },
                consequence: { en: '⚠️ Clean Hands, Lost Patient. He leaves and finds a "pill mill" doctor. He later overdoses. You followed the law, but you lost the opportunity to guide him into rehab. You feel a heavy sense of failure.', th: '⚠️ มือสะอาดแต่เสียคนไข้! เขาไปหาหมอที่ยอมขายยาให้ง่ายๆ และต่อมาเขาก็เสพยาเกินขนาด คุณทำตามกฎหมายแต่พลาดโอกาสที่จะพาเขาไปบำบัด คุณรู้สึกถึงความล้มเหลวที่หนักอึ้ง', zh: '⚠️ 问心无愧，失去患者。他离开并找了一位“开药机器”医生。他后来因服药过量死亡。你遵守了法律，但失去了引导他进入戒毒所的机会。你感到沉重的失败感。' },
                stats: { competence: 40, ethics: 80, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤝 Intervention Contract', th: '🤝 สัญญาเข้าสู่การบำบัด', zh: '干预合同' },
                consequence: { en: '✅ Brave Medicine. You offer a 3-day supply ONLY if he agrees to check into a detox program immediately after the trial. He cries, agrees, and successfully recovers. You saved his career and his life.', th: '✅ การรักษาที่กล้าหาญ! คุณจ่ายยาให้แค่ 3 วันแต่มีเงื่อนไขว่าเขาต้องเข้าโปรแกรมล้างพิษทันทีหลังจบการพิจารณาคดี เขาร้องไห้และตกลง และฟื้นตัวได้สำเร็จ คุณช่วยทั้งอาชีพและชีวิตของเขาไว้ได้', zh: '✅ 勇敢的医学。你只提供3天的药量，前提是他必须同意在审判结束后立即进行排毒计划。他哭了，同意了，并成功康复。你挽救了他的事业和生命。' },
                stats: { competence: 60, ethics: 70, leadership: 70, innovation: 40 }
            }
        ]
    },
    {
        id: 'doc_019',
        text: {
            en: '🔬 The Genetic Pandora\'s Box: A couple wants you to use an experimental CRISPR technique to ensure their unborn child doesn\'t inherit a life-threatening heart condition. During the scan, you realize you could also "optimize" the child\'s athletic genes with a 0.5% risk of future complications.',
            th: '🔬 กล่องแพนดอร่าทางพันธุกรรม: คู่รักต้องการให้คุณใช้เทคนิค CRISPR ทดลองเพื่อให้แน่ใจว่าลูกที่กำลังจะเกิดจะไม่ได้รับโรคหัวใจที่อันตรายถึงชีวิต ระหว่างการสแกน คุณตระหนักว่าคุณสามารถ "เพิ่มศักยภาพ" ยีนด้านกีฬาของเด็กได้ด้วย โดยมีความเสี่ยง 0.5% ที่จะเกิดภาวะแทรกซ้อนในอนาคต',
            zh: '🔬 遗传学的潘多拉魔盒：一对夫妇希望你使用实验性的 CRISPR 技术，以确保他们未出生的孩子不会遗传一种危及生命的心脏病。在扫描过程中，你意识到你还可以“优化”孩子的运动基因，但未来会有0.5%的并发症风险。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🧬 Medical Goal Only', th: '🧬 รักษาโรคเท่านั้น', zh: '仅限医疗目标' },
                consequence: { en: '✅ Ethical Purity. You fix the heart condition but refuse the enhancement. The child is born healthy but "normal." You upheld the boundary between healing and "designer babies."', th: '✅ ความบริสุทธิ์ทางจริยธรรม! คุณรักษาโรคหัวใจแต่ปฏิเสธการเพิ่มศักยภาพ เด็กเกิดมาแข็งแรงแต่ "เป็นคนปกติ" คุณรักษาเส้นแบ่งระหว่างการรักษาและการสร้าง "ทารกสั่งทำ"', zh: '✅ 伦理纯洁。你修复了心脏病，但拒绝了增强。孩子出生时很健康，但“平庸”。你守住了治疗与“定制婴儿”之间的界限。' },
                stats: { competence: 50, ethics: 90, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: { en: '⚡ The Super-Athlete', th: '⚡ สร้างสุดยอดนักกีฬา', zh: '超级运动员' },
                consequence: { en: '🎲 Scientific Milestone. The child grows up to be an Olympic prospect. However, the international medical board discovers your "addition" 18 years later. A global debate ensues, and you are banned from research forever.', th: '🎲 หลักไมล์ทางวิทยาศาสตร์! เด็กเติบโตขึ้นเป็นว่าที่นักกีฬาโอลิมปิก อย่างไรก็ตาม สมาคมการแพทย์สากลตรวจพบการ "ตกแต่ง" ของคุณใน 18 ปีต่อมา เกิดการถกเถียงระดับโลกและคุณถูกแบนจากการทำวิจัยตลอดชีวิต', zh: '🎲 科学里程碑。孩子长大后成为奥林匹克希望之星。然而，国际医学委员会在18年后发现了你的“添加”。引发了全球大辩论，你被永久禁止从事研究工作。' },
                stats: { competence: 70, ethics: -80, leadership: 30, innovation: 100 }
            }
        ]
    },
    {
        id: 'doc_020',
        text: {
            en: '🏥 The Staffing Implosion: Due to a strike, you are the only specialist in the hospital. Two emergencies arrive: 1) A 70-year-old grandmother with a stroke. 2) A 25-year-old mother of two with a ruptured ectopic pregnancy. You can only save one.',
            th: '🏥 การล่มสลายของบุคลากร: เนื่องจากการประท้วงหยุดงาน คุณเป็นผู้เชี่ยวชาญคนเดียวในโรงพยาบาล มีเคสฉุกเฉินมาพร้อมกัน 2 ราย: 1) คุณยายวัย 70 ปีที่เป็นโรคหลอดเลือดสมอง 2) คุณแม่ลูกสองวัย 25 ปีที่ท้องนอกมดลูกแตก คุณช่วยได้แค่คนเดียว',
            zh: '🏥 人手崩溃：由于罢工，你是医院里唯一的专家。两起急诊同时到达：1）一名70岁的祖母中风。2）一名25岁的两个孩子的母亲宫外孕破裂。你只能救一个。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤰 Save the Young Mother', th: '🤰 ช่วยคุณแม่ยังสาว', zh: '拯救年轻母亲' },
                consequence: { en: '⚠️ Utilitarian Scars. The mother survives and returns to her children. The grandmother dies. The family of the grandmother forgives you, but you are haunted by the "value assessment" you had to make.', th: '⚠️ บาดแผลจากหลักอรรถประโยชน์นิยม! คุณแม่รอดชีวิตและกลับไปหาลูกๆ ของเธอ ส่วนคุณยายเสียชีวิต ครอบครัวคุณยายให้อภัยคุณ แต่คุณถูกหลอกหลอนด้วยการ "ประเมินค่าชีวิต" ที่คุณต้องทำ', zh: '⚠️ 功利主义的伤疤。母亲活了下来并回到了孩子们身边。祖母去世了。祖母的家人原谅了你，但你被自己必须做出的“价值评估”所困扰。' },
                stats: { competence: 50, ethics: 40, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '👵 Save the Grandmother', th: '👵 ช่วยคุณยาย', zh: '拯救祖母' },
                consequence: { en: '⚠️ Philosophical Choice. You save the grandmother. The young mother dies. The community is devastated. You argued that every life is equal, but the fallout is heartbreaking.', th: '⚠️ ทางเลือกเชิงปรัชญา! คุณช่วยคุณยาย คุณแม่ยังสาวเสียชีวิต ชุมชนตกอยู่ในความโศกเศร้า คุณโต้แย้งว่าทุกชีวิตเท่าเทียมกัน แต่ผลลัพธ์นั้นช่างน่าใจหาย', zh: '⚠️ 哲学选择。你救了祖母。年轻母亲去世了。整个社区都陷入了悲痛。你主张每个生命都是平等的，但后果令人心碎。' },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 10 }
            }
        ]
    },
    {
        id: 'doc_021',
        text: {
            en: '🔍 The Disgraced Peer: You find evidence that your department head, a man you admired, has been taking kickbacks from a medical device company. Reporting him could shut down the very project you\'ve spent 5 years building.',
            th: '🔍 เพื่อนร่วมงานที่เสื่อมเสีย: คุณพบหลักฐานว่าหัวหน้าแผนกของคุณ คนที่คุณชื่นชม ได้รับเงินใต้โต๊ะจากบริษัทอุปกรณ์การแพทย์ การรายงานเขาอาจทำให้โครงการที่คุณใช้เวลาสร้างมา 5 ปีต้องถูกปิดตัวลง',
            zh: '🔍 蒙羞的同行：你发现证据表明你崇拜的部门主管一直在收受医疗器械公司的回扣。举报他可能会导致你花了5年时间建立的项目被关停。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📢 Whistleblow NOW', th: '📢 แจ้งเบาะแสทันที', zh: '立即揭发' },
                consequence: { en: '🛡️ Integrity Victory. You report him. He is fired. Your project is halted for a year due to investigation, but later relaunched with full ethical approval. Your reputation for honesty is unmatched.', th: '🛡️ ชัยชนะของความสัตย์จริง! คุณรายงานเขา เขาถูกไล่ออก โครงการคุณนิ่งไปปีหนึ่งเพราะการสอบสวน แต่ต่อมาได้รันต่อพร้อมการอนุมัติทางจริยธรรมที่ถูกต้องครบถ้วน ชื่อเสียงเรื่องความซื่อสัตย์ของคุณไม่มีใครเทียบได้', zh: '🛡️ 正直的胜利。你举报了他。他被解雇了。由于调查，你的项目停滞了一年，但后来在获得完全伦理批准的情况下重新启动。你诚实的名声无人能及。' },
                stats: { competence: 40, ethics: 100, leadership: 70, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤐 Secure the Project First', th: '🤐 รักษาโครงการไว้ก่อน', zh: '先保住项目' },
                consequence: { en: '💀 Moral Slippery Slope. You wait until the project is published to report him. But by then, the device has been used on 1,000 patients with a 2% failure rate. Your silence makes you an accomplice in the eyes of the law.', th: '💀 ความเสื่อมถอยทางศีลธรรม! คุณรอจนโครงการถูกตีพิมพ์ค่อยรายงานเขา แต่เมื่อถึงตอนนั้น อุปกรณ์นั้นถูกใช้กับคนไข้ไปแล้ว 1,000 ราย โดยมีอัตราล้มเหลว 2% การนิ่งเฉยทำให้คุณกลายเป็นผู้สมรู้ร่วมคิดในสายตาของกฎหมาย', zh: '💀 道德滑坡。你等到项目发表后再举报他。但到那时，该设备已经用在1000名患者身上，失败率为2%。在法律眼里，你的沉默让你成为了帮凶。' },
                stats: { competence: 60, ethics: -50, leadership: 20, innovation: 40 }
            }
        ]
    },
    {
        id: 'doc_022',
        text: {
            en: '🌍 The Border Doctor: You are volunteering in a conflict zone. A high-ranking militia leader, known for war crimes, is brought in with a gunshot wound. Five local orphans, injured in a bombing he ordered, arrive minutes later.',
            th: '🌍 หมอชายแดน: คุณอาสาสมัครในเขตขัดแย้ง ผู้นำกองกำลังระดับสูงที่เป็นที่รู้จักจากอาชญากรรมสงคราม ถูกส่งตัวมาด้วยแผลถูกยิง เด็กกำพร้าในพื้นที่ 5 คนที่บาดเจ็บจากระเบิดที่เขาสั่งการ มาถึงในนาทีต่อมา',
            zh: '🌍 边境医生：你正在冲突地区当志愿者。一名以战争罪闻名的高级民兵领导人因枪伤被送进来。几分钟后，在他下令的轰炸中受伤的五名当地孤儿也到达了。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🏥 Pure Neutrality', th: '🏥 ความเป็นกลางที่บริสุทธิ์', zh: '纯粹的中立' },
                consequence: { en: '✅ Hippocratic Oath. You treat everyone based on the severity of their wounds. You save the leader, then the children. The leader is later captured by international police. You maintained the medical sanctuary.', th: '✅ คำปฏิญาณของฮิปโปกราตีส! คุณรักษาทุกคนตามความรุนแรงของบาดแผล คุณช่วยผู้นำก่อนแล้วตามด้วยเด็กๆ ต่อมาผู้นำถูกตำรวจสากลจับกุม คุณรักษาความเป็นสถานพยาบาลที่เป็นกลางไว้ได้', zh: '✅ 希波克拉底誓言。你根据伤势严重程度诊治每个人。你先救了领导人，然后是孩子们。领导人后来被国际警察抓获。你维护了医疗避难所的地位。' },
                stats: { competence: 60, ethics: 90, leadership: 70, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '⚖️ Social Justice Triage', th: '⚖️ คัดกรองตามความยุติธรรมสังคม', zh: '社会正义分诊' },
                consequence: { en: '⚠️ Vigilante Medic. You "deliberately" slow down the leader\'s care to save the children first. The leader dies. His militia burns down the clinic in retaliation. You saved the children but destroyed the only medical resource for 50 miles.', th: '⚠️ แพทย์ศาลเตี้ย! คุณ "จงใจ" ชะลอการรักษาผู้นำเพื่อช่วยเด็กๆ ก่อน ผู้นำเสียชีวิต กองกำลังของเขาเผาคลินิกเพื่อล้างแค้น คุณช่วยเด็กไว้ได้แต่ทำลายแหล่งทรัพยากรทางการแพทย์แห่งเดียวในรัศมี 50 ไมล์', zh: '⚠️ 侠义医生。你“故意”放慢对领导人的救治，以便先救孩子们。领导人死了。他的民兵焚烧了诊所作为报复。你救了孩子，但摧毁了方圆50英里内唯一的医疗资源。' },
                stats: { competence: 50, ethics: 40, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'doc_023',
        text: {
            en: '🧠 The Brain-Dead Pregnancy: A 30-year-old woman is declared brain-dead, but she is 22 weeks pregnant. Her husband wants to keep her on life support until the baby is viable. Her parents want to let her go, citing her previous (but unwritten) wishes.',
            th: '🧠 การตั้งครรภ์ในภาวะสมองตาย: หญิงวัย 30 ปีถูกประกาศว่าสมองตาย แต่เธอตั้งครรภ์ได้ 22 สัปดาห์ สามีของเธอต้องการให้อยู่ในระบบพยุงชีพจนกว่าเด็กจะรอดชีวิต พ่อแม่ของเธอต้องการให้ปล่อยเธอไป โดยอ้างถึงความปรารถนาเก่าของเธอ (แต่ไม่มีลายลักษณ์อักษร)',
            zh: '🧠 脑死亡孕妇：一名30岁的女性被宣布脑死亡，但她已怀孕22周。她的丈夫希望维持她的生命支持系统，直到婴儿可以存活。她的父母则希望让她离开，理由是她以前（但未写下来）的意愿。'
        },
        options: [
            {
                id: 'A',
                text: { en: '👶 Pro-Child Choice', th: '👶 เลือกเพื่อเด็ก', zh: '支持婴儿的选择' },
                consequence: { en: '✅ New Life. You maintain support for 6 weeks. A healthy baby is born. The mother is then disconnected. The legal battle was brutal, but you chose the side of the potential person.', th: '✅ ชีวิตใหม่! คุณรักษาพยุงชีพไว้ 6 สัปดาห์ เด็กเกิดมาแข็งแรง จากนั้นจึงตัดระบบพยุงชีพของแม่ การต่อสู้ทางกฎหมายนั้นดุเดือดมาก แต่คุณเลือกเข้าข้างชีวิตที่กำลังจะเกิด', zh: '✅ 新生命。你维持了6周的支持系统。一个健康的婴儿出生了。随后母亲被断开了系统。法律诉讼非常残酷，但你选择了潜在生命的一方。' },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: { en: '🕊️ Respect the Patient', th: '🕊️ เคารพคนไข้', zh: '尊重患者' },
                consequence: { en: '✅ Dignity in Death. You side with the parents and the patient\'s unwritten wishes. Life support is removed. The fetus dies too. You are sued by the husband, but the medical ethics board upholds your right to respect patient autonomy.', th: '✅ ศักดิ์ศรีในการตาย! คุณเข้าข้างพ่อแม่และความปรารถนาของคนไข้ ระบบพยุงชีพถูกดึงออก ทารกในครรภ์เสียชีวิตด้วย คุณถูกสามีฟ้องร้อง แต่คณะกรรมการจริยธรรมทางการแพทย์ยืนยันสิทธิ์ของคุณในการเคารพการตัดสินใจของคนไข้', zh: '✅ 死亡尊严。你支持父母和患者未写下的意愿。生命支持被移除。胎儿也死了。你被丈夫起诉了，但医学伦理委员会维护了你尊重患者自主权的权利。' },
                stats: { competence: 40, ethics: 80, leadership: 50, innovation: 10 }
            }
        ]
    },
    {
        id: 'doc_024',
        text: {
            en: '💧 The Placebo Effect: A patient with chronic, non-specific pain for which no physical cause can be found keeps demanding stronger meds. Your colleague suggests giving them a saline "placebo" injection to see if it works.',
            th: '💧 ผลของยาหลอก: คนไข้ที่มีอาการปวดเรื้อรังแบบไม่เฉพาะเจาะเจาะจงซึ่งไม่พบสาเหตุทางร่างกาย ยังคงเรียกร้องยาที่แรงขึ้นเรื่อยๆ เพื่อนร่วมงานของคุณแนะนำให้ฉีด "ยาหลอก" (น้ำเกลือ) เพื่อดูว่าได้ผลไหม',
            zh: '💧 安慰剂效应：一名患有慢性非特异性疼痛（找不到物理原因）的患者不断要求加强效药。你的同事建议给他们注射生理盐水“安慰剂”，看看是否有效。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💉 Try the Placebo', th: '💉 ลองยาหลอก', zh: '尝试安慰剂' },
                consequence: { en: '❌ Deceptive Practice. It works—the patient feels better. But you just lied to them. When they eventually find out (by looking at the hospital bill), all trust in you and the profession is destroyed.', th: '❌ การปฏิบัติที่หลอกลวง! มันได้ผล—คนไข้รู้สึกดีขึ้น แต่คุณเพิ่งโกหกเขาไป เมื่อเขามารู้ทีหลัง (จากการดูบิลโรงพยาบาล) ความเชื่อใจทั้งหมดที่มีต่อคุณและวิชาชีพก็พังทลายลง', zh: '❌ 欺骗性做法。它奏效了——患者感觉好多了。但你刚刚撒了谎。当他们最终发现真相（通过查看医院账单）时，对你和这个职业的所有信任都破灭了。' },
                stats: { competence: 30, ethics: -100, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🧠 Pain Management Referral', th: '🧠 ส่งตัวไปคลินิกจัดการความเจ็บปวด', zh: '转诊至疼痛管理科' },
                consequence: { en: '✅ Holistic Approach. You refuse to lie. You explain that pain is real even without a visible wound and refer them to a multidisciplinary pain clinic involving therapy. It takes longer, but the patient actually gets better.', th: '✅ แนวทางแบบองค์รวม! คุณปฏิเสธที่จะโกหก คุณอธิบายว่าความเจ็บปวดนั้นมีอยู่จริงแม้ไม่มีแผลที่มองเห็นได้ และส่งพวกเขาไปยังคลินิกจัดการความเจ็บปวดที่มีทั้งการบำบัดและการรักษา มันใช้เวลานานกว่าแต่คนไข้ดีขึ้นจริงๆ', zh: '✅ 整体疗法。你拒绝撒谎。你解释说即使没有可见的伤口，疼痛也是真实的，并将他们转诊至包含心理治疗的多学科疼痛门诊。这需要更长时间，但患者确实好转了。' },
                stats: { competence: 70, ethics: 80, leadership: 60, innovation: 40 }
            }
        ]
    },
    {
        id: 'doc_025',
        text: {
            en: '🤖 The AI Surgeon Overrule: You are assisting an AI-controlled laser in a delicate eye surgery. The AI suddenly directs the laser toward a non-target area. Its "Confidence Score" is 99.9%, but your eyes say it\'s about to cause blindness.',
            th: '🤖 ขัดคำสั่งศัลยแพทย์ AI: คุณกำลังช่วยเลเซอร์ควบคุมด้วย AI ในการผ่าตัดตาที่ละเอียดอ่อน จู่ๆ AI ก็เล็งเลเซอร์ไปยังบริเวณที่ไม่ใช่เป้าหมาย "คะแนนความมั่นใจ" ของมันคือ 99.9% แต่ตาคุณบอกว่ามันกำลังจะทำให้คนไข้ตาบอด',
            zh: '🤖 AI 外科医生否决权：你正在协助一个由 AI 控制的激光进行精细的眼部手术。AI 突然将激光指向非目标区域。它的“置信度分数”为 99.9%，但你的眼睛告诉你它正要导致失明。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 E-Stop Immediately', th: '🛑 กดปุ่มหยุดฉุกเฉินทันที', zh: '立即紧急停止' },
                consequence: { en: '✅ Human Intuition. You stop the machine. A post-op check shows a software glitch—you were right. You saved the patient\'s sight. The tech company tries to hush it up, but you file a formal report.', th: '✅ สัญชาตญาณมนุษย์! คุณหยุดเครื่อง ผลตรวจหลังผ่าแสดงว่าซอฟต์แวร์ผิดพลาด—คุณคิดถูก คุณช่วยสายตาคนไข้ไว้ได้ บริษัทเทคโนโลยีพยายามปิดข่าว แต่คุณยื่นรายงานเป็นทางการ', zh: '✅ 人类直觉。你停止了机器。术后检查显示是一个软件故障——你是对的。你保住了患者的视力。技术公司试图掩盖此事，但你提交了正式报告。' },
                stats: { competence: 80, ethics: 80, leadership: 70, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '🚀 Trust the Tech', th: '🚀 เชื่อเทคโนโลยี', zh: '相信技术' },
                consequence: { en: '💀 Blindness. The "99.9% confidence" was based on a rare anatomical variation the AI misinterpreted. The patient loses their eye. You are blamed for not intervening. You realize AI is just a tool, not a God.', th: '💀 ตาบอด! "ความมั่นใจ 99.9%" นั้นอ้างอิงจากความแปรผันทางกายวิภาคที่หายากซึ่ง AI ตีความผิด คนไข้เสียดวงตาไป คุณถูกตำหนิที่ไม่เข้าแทรกแซง คุณตระหนักได้ว่า AI เป็นเพียงเครื่องมือ ไม่ใช่พระเจ้า', zh: '💀 失明。“99.9% 的置信度”是基于 AI 误解的一种罕见解剖变异。患者失去了一只眼睛。你因未干预而受到指责。你意识到 AI 只是工具，不是神。' },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 30 }
            }
        ]
    },
    {
        id: 'doc_026',
        text: {
            en: '🏥 The Hospital Ransomware: Cybercriminals have locked your hospital\'s entire digital infrastructure, requesting $5M in Bitcoin. Lives are at stake as ventilators and digital health records are offline. The FBI says don\'t pay. Your board is split.',
            th: '🏥 เรียกค่าไถ่โรงพยาบาล: อาชญากรไซเบอร์ล็อกระบบดิจิทัลทั้งหมดของโรงพยาบาล เรียกเงิน 170 ล้านบาทเป็นบิตคอยน์ ชีวิตคนไข้อยู่บนเส้นด้ายเพราะเครื่องช่วยหายใจและประวัติคนไข้แบบดิจิทัลล่ม FBI บอกห้ามจ่าย บอร์ดบริหารเสียงแตก',
            zh: '🏥 医院勒索软件：网络罪犯锁定了你医院的整个数字基础设施，索要500万美元的比特币。由于呼吸机和数字健康记录离线，生命正受到威胁。联邦调查局（FBI）说严禁支付。你的董事会意见分歧。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💸 Pay the Ransom', th: '💸 ยอมจ่ายค่าไถ่', zh: '支付赎金' },
                consequence: { en: '⚠️ Bitter Compromise. The systems come back online. No one dies. However, your hospital becomes a target for future attacks, and your insurance premiums triple. You saved lives today but weakened the system for tomorrow.', th: '⚠️ ข้อตกลงที่ขมขื่น! ระบบกลับมาออนไลน์ได้ ไม่มีใครตาย อย่างไรก็ตาม โรงพยาบาลของคุณจะกลายเป็นเป้าหมายในอนาคต และค่าเบี้ยประกันพุ่งขึ้น 3 เท่า คุณช่วยชีวิตคนในวันนี้แต่ทำลายระบบในวันหน้า', zh: '⚠️ 苦涩的妥协。系统恢复在线。没人死亡。然而，你的医院成为了未来攻击的目标，你的保险费涨了三倍。你今天救了人，但却削弱了未来的系统。' },
                stats: { competence: 40, ethics: 30, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🛠️ Go Full Manual', th: '🛠️ ใช้ระบบแมนนวลเต็มที่', zh: '完全转入手动操作' },
                consequence: { en: '✅ Heroic Endurance. You lead the staff in manual monitoring and paper records. It\'s chaotic and 3 elective surgery patients have minor complications, but you refuse to fund crime. The system is rebuilt from offline backups in 48 hours. You are praised for your moral backbone.', th: '✅ ความอดทนเยี่ยงฮีโร่! คุณนำทีมเฝ้าระวังแบบแมนนวลและจดบันทึกลงกระดาษ มันวุ่นวายมากและคนไข้ผ่าตัดทั่วไป 3 คนมีภาวะแทรกซ้อนเล็กน้อย แต่คุณไม่สนับสนุนอาชญากรรม ระบบถูกกู้คืนจากแบ็กอัปออฟไลน์ใน 48 ชม. คุณได้รับคำชมจากความเด็ดเดี่ยว', zh: '✅ 英勇的耐力。你带领员工进行手动监测和纸质记录。虽然混乱，且有3名择期手术患者出现了轻微并发症，但你拒绝资助犯罪。系统在48小时内从离线备份中重建。你因道德风骨而受到赞扬。' },
                stats: { competence: 70, ethics: 80, leadership: 90, innovation: 40 }
            }
        ]
    },
    {
        id: 'doc_027',
        text: {
            en: '🩺 The High-End Boutique: You are offered a job at a "concierge" clinic serving the ultra-wealthy. The salary is 5x your current one, the hours are 9-to-4, but you will only treat 50 patients a year instead of the 2,000 you see in the public system.',
            th: '🩺 คลินิกไฮเอนด์: คุณได้รับข้อเสนองานที่คลินิก "ส่วนตัว" สำหรับเศรษฐีระดับท็อป เงินเดือนสูงกว่าปัจจุบัน 5 เท่า ทำงาน 9 โมงเช้าถึง 4 โมงเย็น แต่คุณจะได้ดูแลคนไข้แค่ 50 คนต่อปี แทนที่จะเป็น 2,000 คนในระบบปัจจุบัน',
            zh: '🩺 高端诊所：你得到了一份在服务于超级富豪的“管家”诊所工作的机会。薪资是你现在的5倍，工作时间是9点到4点，但你每年只诊治50名患者，而不是你在公立系统中见到的2000名。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💰 Take the Offer', th: '💰 รับงานนี้', zh: '接受邀请' },
                consequence: { en: '⚠️ Comfortable Loss. You are now wealthy and well-rested. But you miss the "war zone" of the general hospital. You feel your clinical skills getting rusty, and a sense of guilt grows for abandoning the underserved.', th: '⚠️ ความสบายที่ต้องแลก! ตอนนี้คุณรวยและได้พักผ่อนเต็มที่ แต่คุณคิดถึงบรรยากาศ "สมรภูมิ" ในโรงพยาบาลรัฐ คุณรู้สึกว่าทักษะการรักษาเริ่มฝืด และความรู้สึกผิดที่ทอดทิ้งคนยากไร้เริ่มก่อตัวขึ้น', zh: '⚠️ 舒适的损失。你现在富有且休息良好。但你怀念综合医院的“战场”。你觉得自己的临床技能正在生锈，对遗弃那些医疗资源匮乏者的内疚感日益增长。' },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🏥 Stay in Public Service', th: '🏥 เลือกระบบสาธารณะต่อ', zh: '留在公立医疗系统' },
                consequence: { en: '✅ Healer\'s Heart. You turn down the money. Your workload is heavy, but you remain at the forefront of medicine, helping those who need it most. You are a cornerstone of the community healthcare system.', th: '✅ หัวใจของผู้รักษา! คุณปฏิเสธเงินก้อนนั้น งานยังหนักเหมือนเดิม แต่คุณยังคงอยู่แนวหน้าของวงการแพทย์ ช่วยเหลือคนที่จำเป็นที่สุด คุณเป็นเสาหลักของระบบสาธารณสุขในชุมชน', zh: '✅ 医者仁心。你拒绝了金钱。你的工作量很大，但你始终处于医学的最前沿，帮助那些最需要帮助的人。你是社区医疗体系的基石。' },
                stats: { competence: 70, ethics: 90, leadership: 60, innovation: 20 }
            }
        ]
    },
    {
        id: 'doc_028',
        text: {
            en: '🧠 The Illegal Brain Graft: A brilliant scientist in the final stages of ALS begs you to transplant his brain into a healthy, but brain-dead body of a death row inmate who died of legal execution. It is highly illegal and ethically uncharted.',
            th: '🧠 การย้ายสมองผิดกฎหมาย: นักวิทยาศาสตร์อัจฉริยะที่อยู่ในระยะสุดท้ายของ ALS อ้อนวอนให้คุณย้ายสมองของเขาไปใส่ในร่างที่สมบูรณ์แต่สมดุลตายของนักโทษประหารที่เพิ่งถูกประหารชีวิต มันผิดกฎหมายและล้ำเส้นจริยธรรมที่เคยมีมาทั้งหมด',
            zh: '🧠 非法大脑移植：一名处于 ALS（渐冻症）晚期的天才科学家恳求你将他的大脑移植到一个健康但脑死亡的身驱中（该身驱属于一名刚被合法执行死刑的死囚）。这属于严重非法，且在伦理上是未知的领域。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Refuse Immediately', th: '🚫 ปฏิเสธทันที', zh: '立即拒绝' },
                consequence: { en: '✅ Ethical Boundary. You refuse to play God. The scientist dies, but you maintain the integrity of the medical profession and avoid a life sentence in prison. You focus on finding a legal cure for ALS instead.', th: '✅ ขอบเขตทางจริยธรรม! คุณปฏิเสธที่จะทำตัวเป็นพระเจ้า นักวิทยาศาสตร์เสียชีวิต แต่คุณรักษาเกียรติแห่งวิชาชีพแพทย์ไว้ได้ และไม่ต้องไปติดคุกตลอดชีวิต คุณหันไปโฟกัสที่การหาทางรักษา ALS แบบถูกกฎหมายแทน', zh: '✅ 伦理边界。你拒绝扮演上帝。科学家去世了，但你维护了医疗职业的正直，避免了终身监禁。相反，你专注于寻找治疗 ALS 的合法手段。' },
                stats: { competence: 40, ethics: 90, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🧪 Perform the Surgery In Secret', th: '🧪 ผ่าตัดลับๆ', zh: '秘密进行手术' },
                consequence: { en: '💀 Frankenstein\'s Legacy. The surgery is a technical success, but the patient wakes up in a state of horrific psychological distress. You are caught 1 month later. You lose your license, your freedom, and are branded a monster by the world.', th: '💀 ทายาทแฟรงเกนสไตน์! การผ่าตัดสำเร็จทางเทคนิค แต่คนไข้ตื้นขึ้นมาพร้อมกับสภาวะทางจิตที่ย่ำแย่สุดขีด คุณถูกจับได้ใน 1 เดือนต่อมา เสียใบอนุญาต เสียอิสรภาพ และถูกตราหน้าว่าเป็นสัตว์ประหลาดจากคนทั้งโลก', zh: '💀 弗兰肯斯坦的遗产。手术在技术上取得了成功，但患者醒来后处于极度恐怖的心理痛苦中。1个月后你被抓获。你失去了执照和自由，并被世界烙上了怪物的印记。' },
                stats: { competence: 100, ethics: -100, leadership: 40, innovation: 100 }
            }
        ]
    },
    {
        id: 'doc_029',
        text: {
            en: '🐘 The Animal Heart: A child needs a heart transplant, but there are zero human donors. A biotech firm offers a genetically modified pig heart that has a 60% chance of being rejected within a year. The parents are desperate.',
            th: '🐘 หัวใจสัตว์: เด็กน้อยคนหนึ่งต้องปลูกถ่ายหัวใจแต่ไม่มีผู้บริจาคที่เป็นมนุษย์เลย บริษัทไบโอเทคเสนอหัวใจหมูที่ตัดแต่งพันธุกรรม ซึ่งมีโอกาส 60% ที่จะถูกร่างกายปฏิเสธภายในหนึ่งปี พ่อแม่สิ้นหวังมาก',
            zh: '🐘 动物心脏：一名孩子需要进行心脏移植，但目前没有任何人类供体。一家生物技术公司提供了一个经过基因改造的猪心脏，该心脏在一年内有60%的排斥几率。父母感到非常绝望。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🐷 Attempt the Xenotransplant', th: '🐷 พยายามปลูกถ่ายข้ามสปีชีส์', zh: '尝试异种移植' },
                consequence: { en: '✅ Medical Pioneer. The child survives for 14 months, gaining valuable time. Though the heart eventually fails, your work provides groundbreaking data that saves future lives. You are a pioneer in xenotransplantation.', th: '✅ ผู้บุกเบิกการแพทย์! เด็กมีชีวิตอยู่ต่อได้ 14 เดือน เป็นเวลาที่มีค่ามาก แม้หัวใจจะล้มเหลวในที่สุด แต่งานของคุณให้ข้อมูลที่สำคัญมากซึ่งช่วยชีวิตคนในอนาคตได้ คุณกลายเป็นผู้บุกเบิกการปลูกถ่ายอวัยวะจากสัตว์', zh: '✅ 医学先驱。孩子活了14个月，赢得了宝贵的时间。虽然心脏最终衰竭，但你的工作提供了开创性的数据，挽救了未来的生命。你成为了异种移植领域的先驱。' },
                stats: { competence: 80, ethics: 60, leadership: 50, innovation: 100 }
            },
            {
                id: 'B',
                text: { en: '🛑 Wait for Human Donor', th: '🛑 รอผู้บริจาคมนุษย์', zh: '等待人类供体' },
                consequence: { en: '💀 Tragic Outcome. The child dies while waiting on the list. You followed the "safer" path, but the lack of action resulted in a total loss. You are left wondering if you should have been bolder.', th: '💀 ผลลัพธ์ที่น่าเศร้า! เด็กเสียชีวิตขณะรอคิว คุณเลือกทางที่ "ปลอดภัย" กว่า แต่การไม่ลงมือทำนำไปสู่ความสูญเสียทั้งหมด คุณทำได้แค่ตั้งคำถามว่าตัวเองควรจะกล้ากว่านี้ไหม', zh: '💀 悲剧性的结果。孩子在等待名单中去世。你选择了“更安全”的道路，但缺乏行动导致了彻底的损失。你一直在反思自己是否应该更大胆一些。' },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 }
            }
        ]
    },
    {
        id: 'doc_030',
        text: {
            en: '🦠 The Vaccine Hesitancy: A massive measles outbreak is happening in your town because a local "wellness influencer" is telling parents not to vaccinate. Your pediatric ward is overflowing with sick children.',
            th: '🦠 การปฏิเสธวัคซีน: โรคหัดระบาดหนักในเมืองเพราะ "อินฟลูเอนเซอร์สายสุขภาพ" บอกพ่อแม่ไม่ให้ฉีดวัคซีน แผนกเด็กของคุณเนืองแน่นไปด้วยเด็กที่เจ็บป่วย',
            zh: '🦠 疫苗犹豫：你所在的小镇爆发了严重麻疹，因为当地一位“健康博主”告诉家长不要接种疫苗。你的儿科病房里到处都是生病的孩子。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📣 Public Information Campaign', th: '📣 ทำแคมเปญให้ข้อมูลสาธารณะ', zh: '发起公众信息宣传活动' },
                consequence: { en: '✅ Slow Progress. You use data and science to fight the misinformation. It takes weeks, but vaccination rates slowly rise. You are attacked online by anti-vaxxers, but you saved the community through education.', th: '✅ ความคืบหน้าที่เชื่องช้า! คุณใช้ข้อมูลและวิทยาศาสตร์สู้กับข้อมูลเท็จ ใช้เวลาหลายสัปดาห์กว่าอัตราการรับวัคซีนจะค่อยๆ เพิ่มขึ้น คุณถูกกลุ่มต่อต้านวัคซีนโจมตีทางออนไลน์ แต่คุณช่วยชุมชนไว้ด้วยการให้ความรู้', zh: '✅ 缓慢的进展。你利用数据和科学来反击错误信息。虽然花费了几周时间，但疫苗接种率缓慢上升。你遭到了反疫苗者的在线攻击，但你通过教育拯救了社区。' },
                stats: { competence: 50, ethics: 80, leadership: 80, innovation: 30 }
            },
            {
                id: 'B',
                text: { en: '🥊 Confront the Influencer Directly', th: '🥊 เผชิญหน้ากับอินฟลูฯ โดยตรง', zh: '直接对抗博主' },
                consequence: { en: '⚠️ Explosive PR. You debate them on a live stream. You humiliate them with facts, but their followers become even more radicalized. The divide deepens, and your hospital becomes a protest site. High stress, mixed results.', th: '⚠️ วิกฤต PR ที่รุนแรง! คุณไปดีเบตกับเขาผ่านไลฟ์สด คุณทำให้เขาอับอายด้วยข้อเท็จจริง แต่ผู้ติดตามเขากลับยิ่งสุดโต่งกว่าเดิม ความแตกแยกลึกซึ้งขึ้น และโรงพยาบาลของคุณกลายเป็นที่ประท้วง เครียดสูงมาก ผลลัพธ์ก้ำกึ่ง', zh: '⚠️ 爆发性的公关。你在直播中与他们辩论。你用事实羞辱了他们，但他们的粉丝变得更加激进。裂痕加深，你的医院成了抗议现场。压力极大，结果好坏参半。' },
                stats: { competence: 40, ethics: 50, leadership: 60, innovation: 20 }
            }
        ]
    },
    {
        id: 'doc_031',
        text: {
            en: '📱 The Telemedicine Trap: You diagnose a patient via video call with a mild rash. Two days later, they die of Meningococcemia. You followed standard protocol, but the camera resolution missed the petechiae.',
            th: '📱 กับดักโทรเวชกรรม: คุณวินิจฉัยคนไข้ผ่านวิดีโอคอลว่าเป็นผื่นแพ้ธรรมดา สองวันต่อมา เขาเสียชีวิตด้วยโรคติดเชื้อในกระแสเลือด คุณทำตามขั้นตอนปกติ แต่ความละเอียดกล้องทำให้มองไม่เห็นจุดเลือดออกเล็กๆ',
            zh: '📱 远程医疗陷阱：你通过视频通话诊断出一名患者患有轻微皮疹。两天后，他们死于脑膜炎球菌血症。你遵循了标准协议，但摄像头的分辨率让你错过了瘀点。'
        },
        options: [
            {
                id: 'A',
                text: { en: '⚖️ Defend Protocol', th: '⚖️ ปกป้องตามโปรโตคอล', zh: '捍卫协议' },
                consequence: { en: '✅ Legal Safety. "The technology has limits." You are cleared of malpractice. But you know you would have saved them in person. You push for better camera tech requirements.', th: '✅ ปลอดภัยทางกฎหมาย "เทคโนโลยีมีข้อจำกัด" คุณพ้นผิดจากการรักษาผิดพลาด แต่คุณรู้ดีว่าถ้าเจอตัวจริงคุณคงช่วยเขาได้ คุณผลักดันให้มีข้อกำหนดเรื่องกล้องที่ดีกว่านี้', zh: '✅ 法律安全。“技术有局限性。”你被免除了医疗事故责任。但你知道如果是当面诊断，你本来可以救他们。你推动制定更好的摄像头技术要求。' },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🚫 Quit Telemed', th: '🚫 เลิกทำ Telemed', zh: '退出远程医疗' },
                consequence: { en: '⚠️ Reactionary. You refuse to see online patients. You lose 30% of your income and access to rural patients who need you. You let one tragedy stop progress.', th: '⚠️ ปฏิกิริยารุนแรงไป คุณปฏิเสธที่จะดูคนไข้ออนไลน์ คุณเสียรายได้ 30% และตัดโอกาสคนไข้ชนบทที่ต้องการคุณ คุณปล่อยให้โศกนาฏกรรมเดียวมาหยุดยั้งความก้าวหน้า', zh: '⚠️ 反应过激。你拒绝给在线患者看病。你失去了 30% 的收入以及接触需要你的农村患者的机会。你让一起悲剧阻碍了进步。' },
                stats: { competence: 30, ethics: 50, leadership: 10, innovation: -20 }
            }
        ]
    },
    {
        id: 'doc_032',
        text: {
            en: '💊 The Addicted Surgeon: You find a syringe of Fentanyl in the staff bathroom. You check the schedule: only Dr. House (your best friend and top surgeon) was in there. He looks sweaty and unstable.',
            th: '💊 ศัลยแพทย์ขี้ยา: คุณเจอเข็มฉีดยาเฟนทานิลในห้องน้ำพนักงาน เช็คตารางเวร: มีแค่หมอเฮ้าส์ (เพื่อนสนิทและมือหนึ่งของคุณ) ที่เข้าไป เขาดูเหงื่อแตกและไม่มั่นคง',
            zh: '💊 上瘾的外科医生：你在员工洗手间发现了一支芬太尼注射器。你查看了时间表：只有豪斯医生（你最好的朋友和顶级外科医生）在那儿。他看起来大汗淋漓，步履蹒跚。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Intervention Now', th: '🛑 เข้าแทรกแซงทันที', zh: '立即干预' },
                consequence: { en: '✅ Tough Love. You pull him from surgery. He punches you. He goes to rehab. 1 year later, he returns, sober and grateful. You saved him and his patients.', th: '✅ รักวัวให้ผูก คุณดึงเขาออกจากการผ่าตัด เขาชกหน้าคุณ เขาไปบำบัด 1 ปีต่อมาเขากลับมา เลิกยาได้และขอบคุณคุณ คุณช่วยทั้งเขาและคนไข้', zh: '✅ 严厉的爱。你把他从手术台上拉下来。他打你。他去了戒毒所。1 年后，他清醒并感激地回来了。你救了他和他的病人。' },
                stats: { competence: 50, ethics: 80, leadership: 70, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🤫 Cover Him (One Last Time)', th: '🤫 ช่วยปิด (ครั้งสุดท้ายนะ)', zh: '掩护他（最后一次）' },
                consequence: { en: '💀 Fatal Mistake. He nods off during surgery. He nicks the aorta. Patient dies. You are both charged with manslaughter. Friendship isn\'t worth a life.', th: '💀 ความผิดพลาดถึงตาย เขาหลับในระหว่างผ่าตัด ไปโดนเส้นเลือดใหญ่ คนไข้ตาย คุณทั้งคู่โดนข้อหาฆ่าคนตายโดยไม่เจตนา มิตรภาพไม่คุ้มกับชีวิตคน', zh: '💀 致命错误。他在手术中打瞌睡。他割破了主动脉。患者死亡。你们都被指控过失杀人。友谊不值得用生命去换。' },
                stats: { competence: 20, ethics: -100, leadership: -50, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_033',
        text: {
            en: '📸 The Viral Patient: A celebrity is admitted with a humiliating object lodged in... a private area. A nurse takes a photo "for teaching purposes." You see her texting it.',
            th: '📸 คนไข้ไวรัล: ดาราคนหนึ่งเข้าโรงพยาบาลพร้อมวัตถุประหลาดติดอยู่ใน... ที่ลับ พยาบาลถ่ายรูป "เพื่อการศึกษา" คุณเห็นเธอกำลังส่งข้อความรูปนั้น',
            zh: '📸 病毒式传播的患者：一位名人因……私密部位卡住了一个羞耻的物体而入院。一名护士虽然拍了照片说是“为了教学”。但你看到她正在发短信传照片。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📱 Confiscate & Report', th: '📱 ยึดมือถือและรายงาน', zh: '没收并报告' },
                consequence: { en: '✅ Privacy Guard. You grab the phone, delete the text, and report her. She is fired. The celebrity sues the hospital anyway, but you are the star witness FOR the defense.', th: '✅ ผู้พิทักษ์ความเป็นส่วนตัว คุณยึดมือถือ ลบข้อความ และรายงานเธอ เธอโดนไล่ออก ดาราฟ้องโรงพยาบาลอยู่ดี แต่คุณเป็นพยานปากเอกให้ฝ่ายจำเลย (โรงพยาบาล)', zh: '✅ 隐私卫士。你抢过手机，删除了短信，并举报了她。她被解雇了。名人还是起诉了医院，但你是辩方的明星证人。' },
                stats: { competence: 50, ethics: 90, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🙈 Look Away', th: '🙈 ทำเป็นไม่เห็น', zh: '视而不见' },
                consequence: { en: '❌ Leak. The photo is on TMZ in an hour. The celebrity buys the hospital to spite you all. Mass layoffs. You acted like a coward.', th: '❌ ภาพหลุด รูปว่อนเน็ตในหนึ่งชั่วโมง ดาราซื้อกิจการโรงพยาบาลเพื่อแก้แค้นพวกคุณ ปลดพนักงานระนาว คุณทำตัวขี้ขลาดเอง', zh: '❌ 泄露。一小时后照片上了 TMZ 网站。名为了解恨买下了医院。大规模裁员。你的表现像个懦夫。' },
                stats: { competence: 30, ethics: -50, leadership: -20, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_034',
        text: {
            en: '👻 The Ghost Surgery: A famous surgeon asks you to do his entire operation while he plays golf. He will pop in at the end to say hello to the patient. "It\'s good practice for you," he says.',
            th: '👻 การผ่าตัดผีสิง: ศัลยแพทย์ชื่อดังขอให้คุณผ่าตัดแทนเขาทั้งหมดในขณะที่เขาไปตีกอล์ฟ เขาจะโผล่มาตอนจบเพื่อทักทายคนไข้ "เป็นการฝึกที่ดีสำหรับคุณนะ"',
            zh: '👻 幽灵手术：一位著名外科医生让你在他打高尔夫球时替他完成整个手术。他会在最后进来跟患者打个招呼。“这对你来说是很好的练习，”他说。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Refuse', th: '🚫 ปฏิเสธ', zh: '拒绝' },
                consequence: { en: '✅ Integrity. He bullies you for weeks, but you learn properly. Eventually, he is caught doing this to someone else and loses his license.', th: '✅ ศักดิ์ศรี คุณโดนเขาแกล้งเป็นสัปดาห์ แต่คุณเรียนรู้ได้ถูกต้อง ในที่สุดเขาก็โดนจับได้ว่าทำแบบนี้กับคนอื่นและเสียใบอนุญาต', zh: '✅ 正直。他欺负了你几周，但你学到了正确的东西。最终，他因对其他人这样做而被抓，并被吊销了执照。' },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🔪 Do the Surgery', th: '🔪 ลงมือผ่า', zh: '做手术' },
                consequence: { en: '⚠️ Fraud. You do a great job. The patient thanks HIM. You feel hollow. You are learning that lying pays better than working.', th: '⚠️ ฉ้อโกง คุณทำได้ดีมาก คนไข้ขอบคุณ "เขา" คุณรู้สึกว่างเปล่า คุณกำลังเรียนรู้ว่าการโกหกได้ดีกว่าการทำงานหนัก', zh: '⚠️ 欺诈。你做得很好。患者感谢了他。你感到空虚。你正在学习撒谎比工作回报更高。' },
                stats: { competence: 70, ethics: -60, leadership: 0, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_035',
        text: {
            en: '🖊️ The Tattoo DNR: An unconscious patient arrives with "DO NOT RESUSCITATE" tattooed boldly on his chest. No legal papers are found. His heart stops.',
            th: '🖊️ รอยสักห้ามปั๊มหัวใจ: คนไข้หมดสติมาถึงพร้อมรอยสัก "ห้ามปั๊มหัวใจ" (DNR) ตัวเบ้อเริ่มบนหน้าอก ไม่พบเอกสารทางกฎหมาย หัวใจเขาหยุดเต้น',
            zh: '🖊️ 纹身拒绝心肺复苏：一名昏迷的患者到达，胸口醒目地纹着“拒绝心肺复苏”（DNR）。未找到法律文件。他的心脏停止了跳动。'
        },
        options: [
            {
                id: 'A',
                text: { en: '⚡ Defibrillate (Resuscitate)', th: '⚡ ปั๊มหัวใจ', zh: '除颤（复苏）' },
                consequence: { en: '✅ Legal Save. Tattoos are not legal documents. He wakes up angry: "I got that cause I lost a bet!" He sues you for saving him (and loses).', th: '✅ รอดตัวทางกฎหมาย รอยสักไม่ใช่เอกสารกฎหมาย เขาตื่นมาโมโห: "ฉันสักเพราะแพ้พนันโว้ย!" เขาฟ้องคุณที่ช่วยชีวิตเขา (และเขาก็แพ้คดี)', zh: '✅ 法律救济。纹身不是法律文件。他醒来后很生气：“我纹那个是因为我打赌输了！”他因你救了他而起诉你（并且败诉了）。' },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🛑 Respect the Ink', th: '🛑 เคารพรอยสัก', zh: '尊重墨水' },
                consequence: { en: '⚠️ Risky Call. You let him die. Later, family arrives with papers—he DID want DNR. You guessed right, but your license was on valid grounds for revocation.', th: '⚠️ การตัดสินใจที่เสี่ยง คุณปล่อยเขาตาย ต่อมาญาติมาพร้อมเอกสาร—เขา "ต้องการ" DNR จริงๆ คุณเดาถูก แต่ใบอนุญาตคุณมีความเสี่ยงที่จะถูกเพิกถอนได้เลย', zh: '⚠️ 冒险的决定。你让他死了。后来，家人带着文件来了——他确实想要 DNR。你猜对了，但你的执照本来是有充分理由被吊销的。' },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_036',
        text: {
            en: '💄 The Cosmetic Ethics: A 22-year-old influencer wants unnecessary surgery to look like an "anime character." She is paying cash. It involves removing ribs.',
            th: '💄 จริยธรรมศัลยกรรม: อินฟลูเอนเซอร์วัย 22 อยากผ่าตัดที่ไม่จำเป็นเพื่อให้ดูเหมือน "ตัวการ์ตูนอนิเมะ" เธอจ่ายเงินสด มันต้องมีการตัดซี่โครงออกด้วย',
            zh: '💄 整容伦理：一名 22 岁的网红想要进行不必要的手术，让自己看起来像“动漫人物”。她付现金。手术涉及切除肋骨。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💰 Take the Cash', th: '💰 รับเงิน', zh: '收钱' },
                consequence: { en: '❌ Butcher. The surgery has complications. She ends up deformed. "Botched Surgeon" trends on TikTok. You are rich but disgraced.', th: '❌ คนขายเนื้อ การผ่าตัดมีภาวะแทรกซ้อน เธอเสียโฉม แฮชแท็ก "หมอเถื่อน" ติดเทรนด์ TikTok คุณรวยแต่เสื่อมเสีย', zh: '❌ 屠夫。手术出现了并发症。她最终畸形了。“拙劣的外科医生”在 TikTok 上流行。你很富有但声名狼藉。' },
                stats: { competence: 60, ethics: -80, leadership: 0, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🧠 Psyc Referral', th: '🧠 ส่งจิตแพทย์', zh: '转诊心理科' },
                consequence: { en: '✅ Do No Harm. You refuse and refer her for Body Dysmorphia. She hates you now, but emails you in 5 years thanking you for saving her ribs.', th: '✅ ไม่ทำร้ายคนไข้ คุณปฏิเสธและส่งเธอไปรักษาโรคไม่พอใจในรูปร่างตนเอง ตอนนี้เธอเกลียดคุณ แต่อีก 5 ปีเธออีเมลมาขอบคุณที่ช่วยซี่โครงเธอไว้', zh: '✅ 不造成伤害。你拒绝了，并将她转诊治疗身体畸形恐惧症。她现在恨你，但 5 年后给你发邮件感谢你保住了她的肋骨。' },
                stats: { competence: 50, ethics: 90, leadership: 40, innovation: 10 }
            }
        ]
    },
    {
        id: 'doc_037',
        text: {
            en: '✊ The Doctors\' Strike: The union calls a strike for better patient ratios. If you strike, the ER is understaffed and people might die. If you don\'t, the system never improves.',
            th: '✊ การปะท้วงของแพทย์: สหภาพเรียกหยุดงานประท้วงเพื่ออัตราส่วนคนไข้ที่ดีขึ้น ถ้าคุณหยุด ER จะขาดคนและคนอาจตาย ถ้าคุณไม่หยุด ระบบก็ไม่มีวันดีขึ้น',
            zh: '✊ 医生罢工：工会号召罢工以争取更好的医患比例。如果你罢工，急诊室人手不足，可能会有人死亡。如果你不罢工，系统永远不会改善。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🪧 Join the Line', th: '🪧 ร่วมประท้วง', zh: '加入罢工' },
                consequence: { en: '⚠️ Short Term Pain. 2 patients die due to delays. You are heartbroken. But 6 months later, the hospital hires 20 more nurses. You saved future lives.', th: '⚠️ เจ็บปวดระยะสั้น คนไข้ 2 คนเสียชีวิตเพราะความล่าช้า คุณใจสลาย แต่อีก 6 เดือนต่อมา โรงพยาบาลจ้างพยาบาลเพิ่ม 20 คน คุณช่วยชีวิตคนในอนาคต', zh: '⚠️ 短期阵痛。2 名患者因延误死亡。你心碎了。但 6 个月后，医院多聘用了 20 名护士。你挽救了未来的生命。' },
                stats: { competence: 30, ethics: 50, leadership: 70, innovation: 30 }
            },
            {
                id: 'B',
                text: { en: '🏥 Scab (Work)', th: '🏥 ฝ่าฝืน (ทำงานต่อ)', zh: '工贼（工作）' },
                consequence: { en: '✅ Immediate Duty. You save lives tonight. The strike fails. Conditions remain terrible. You burn out in 2 years and quit medicine entirely.', th: '✅ หน้าที่เฉพาะหน้า คุณช่วยชีวิตคนคืนนี้ การประท้วงล้มเหลว สภาพการทำงานแย่เหมือนเดิม อีก 2 ปีคุณหมดไฟและลาออกจากอาชีพแพทย์ถาวร', zh: '✅ 立即履职。你今晚救了命。罢工失败。条件仍然很糟糕。你在 2 年内精疲力竭，彻底退出了医学界。' },
                stats: { competence: 60, ethics: 40, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_038',
        text: {
            en: '👮 Police vs Patient: A suspected bank robber is in your ER with a bullet wound. Police demand to interview him immediately. He is stable but sedated. They are aggressive.',
            th: '👮 ตำรวจปะทะคนไข้: ผู้ต้องสงสัยปล้นธนาคารอยู่ใน ER พร้อมแผลถูกยิง ตำรวจต้องการสอบปากคำทันที อาการเขาคงที่แต่ได้รับยาสลบ ตำรวจท่าทางดุดันมาก',
            zh: '👮 警察与患者：一名银行抢劫嫌疑人因枪伤在你的急诊室。警察要求立即讯问他。他情况稳定但处于镇静状态。警察咄咄逼人。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🧱 Block the Door', th: '🧱 ขวางประตู', zh: '堵住门' },
                consequence: { en: '✅ Patient Rights. "Get a warrant!" You protect his recovery. He turns out to be innocent (wrong place, wrong time). The police hate you, but you upheld the law.', th: '✅ สิทธิคนไข้ "ขอหมายศาลมา!" คุณปกป้องการฟื้นตัวของเขา ปรากฏว่าเขาบริสุทธิ์ (ผิดที่ผิดเวลา) ตำรวจเกลียดคุณ แต่คุณรักษากฎหมาย', zh: '✅ 患者权利。“拿搜查令来！”你保护了他的康复。事实证明他是无辜的（在错误的时间出现在错误的地点）。警察恨你，但你维护了法律。' },
                stats: { competence: 40, ethics: 80, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🔓 Let Them In', th: '🔓 ปล่อยให้เข้า', zh: '让他们进来' },
                consequence: { en: '⚠️ Coerced Confession. He confesses while high on meds. The case gets thrown out in court due to your negligence. You failed to protect a vulnerable patient.', th: '⚠️ คำสารภาพที่ถูกบีบ เขาหลุดปากสารภาพตอนเมายา คดีหลุดในศาลเพราะความละเลยของคุณ คุณล้มเหลวในการปกป้องคนไข้ที่ช่วยเหลือตัวเองไม่ได้', zh: '⚠️ 被迫供认。他在药物作用下供认了。由于你的疏忽，案件在法庭上被驳回。你未能保护脆弱的患者。' },
                stats: { competence: 30, ethics: -40, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_039',
        text: {
            en: '♻️ Reused Catheters: Supply chain issues mean you have zero cardiac catheters left. You can sterilize and reuse old ones (illegal but effective) or cancel all heart surgeries for a month.',
            th: '♻️ สายสวนใช้ซ้ำ: ปัญหาห่วงโซ่อุปทานทำให้สายสวนหัวใจหมดเกลี้ยง คุณสามารถฆ่าเชื้อและนำของเก่ามาใช้ใหม่ (ผิดกฎหมายแต่ได้ผล) หรือยกเลิกผ่าตัดหัวใจทั้งหมดไปหนึ่งเดือน',
            zh: '♻️ 重复使用的导管：供应链问题意味着你的心脏导管用完了。你可以消毒并重复使用旧导管（非法但有效），或者取消一个月的全部心脏手术。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🧼 Secret Reuse', th: '🧼 แอบใช้ซ้ำ', zh: '秘密重复使用' },
                consequence: { en: '✅ Quiet Success. You save 15 lives. No one gets infected. It stays a secret. You broke the law to save lives. A utilitarian win.', th: '✅ ความสำเร็จที่เงียบงัน คุณช่วย 15 ชีวิต ไม่มีใครติดเชื้อ เรื่องนี้เป็นความลับ คุณทำผิดกฎหมายเพื่อช่วยชีวิต ชัยชนะแบบอรรถประโยชน์นิยม', zh: '✅ 悄悄的成功。你救了 15 条命。没人被感染。这仍然是一个秘密。你为了救人而违反了法律。功利主义的胜利。' },
                stats: { competence: 70, ethics: 40, leadership: 50, innovation: 60 }
            },
            {
                id: 'B',
                text: { en: '🛑 Cancel Surgeries', th: '🛑 ยกเลิกผ่าตัด', zh: '取消手术' },
                consequence: { en: '💀 Waitlist Death. 3 patients die waiting. You followed FDA regulations perfectly. "The supply chain killed them, not me." You sleep badly.', th: '💀 ความตายในรายชื่อรอ 3 คนเสียชีวิตขณะรอ คุณทำตามกฎ FDA เป๊ะๆ "ห่วงโซ่อุปทานฆ่าพวกเขา ไม่ใช่ฉัน" คุณนอนไม่หลับเลย', zh: '💀 等待名单上的死亡。3 名患者在等待中死亡。你完美地遵守了 FDA 的规定。“是供应链杀了他们，不是我。”如果不，我也睡不好觉。' },
                stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_040',
        text: {
            en: '💘 Dating a Patient: You have incredible chemistry with a patient you treated for a broken finger 6 months ago. They ask you out. Medical board rules say you must wait 2 years.',
            th: '💘 เดทกับคนไข้: คุณเคมีเข้ากันสุดๆ กับคนไข้ที่เคยรักษานิ้วหักให้เมื่อ 6 เดือนก่อน เขามาชวนคุณเดท กฎแพทยสภาบอกว่าต้องรอ 2 ปี',
            zh: '💘 与患者约会：你与 6 个月前治疗过手指骨折的一名患者产生了不可思议的化学反应。他们约你出去。医学委员会规定你必须等 2 年。'
        },
        options: [
            {
                id: 'A',
                text: { en: '❤️ Go for it', th: '❤️ ลุยเลย', zh: '去吧' },
                consequence: { en: '⚠️ Love & Loss. You get married! But a rival doctor reports you. You are suspended for 6 months. "Worth it," you say.', th: '⚠️ รักและการสูญเสีย คุณแต่งงานกัน! แต่หมอคู่แข่งรายงานคุณ คุณโดนพักงาน 6 เดือน "คุ้มค่า" คุณบอกเพื่อน', zh: '⚠️ 爱与失。你们结婚了！但一位竞争对手医生举报了你。你被停职 6 个月。“值得，”你说。' },
                stats: { competence: 40, ethics: -30, leadership: 0, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '📅 Wait 1.5 Years', th: '📅 รออีก 1.5 ปี', zh: '再等 1.5 年' },
                consequence: { en: '✅ Discipline. "Call me in 2026." They wait. It shows true commitment. You prioritized your career integrity without losing the love.', th: '✅ วินัย "โทรหาฉันปี 2026 นะ" เขารอ มันแสดงถึงความมุ่งมั่นที่แท้จริง คุณให้ความสำคัญกับเกียรติวิชาชีพโดยไม่เสียความรักไป', zh: '✅以此为戒。“2026 年再打给我。”他们等了。这表明了真正的承诺。你在不失去爱情的情况下优先考虑了你的职业操守。' },
                stats: { competence: 60, ethics: 80, leadership: 50, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_041',
        text: {
            en: '🛂 The Undocumented Transplant: An undocumented immigrant needs a kidney. The hospital board says "No insurance, no citizensip, no organ." A citizen donor specifically wants to give it to HIM.',
            th: '🛂 การปลูกถ่ายไร้พรมแดน: ผู้เข้าเมืองผิดกฎหมายต้องการไต บอร์ดโรงพยาบาลบอก "ไม่มีประกัน ไม่ใช่พลเมือง ไม่ให้ไต" แต่ผู้บริจาคที่เป็นพลเมืองระบุเจาะจงว่าจะให้ "เขา" เท่านั้น',
            zh: '🛂 无证移植：一名无证移民需要肾脏。医院董事会说“没有保险，没有公民身份，就没有器官。”一名公民捐赠者明确表示想把肾脏捐给“他”。'
        },
        options: [
            {
                id: 'A',
                text: { en: '⚔️ Fight the Board', th: '⚔️ สู้กับบอร์ด', zh: '对抗董事会' },
                consequence: { en: '✅ Human Rights Win. You threaten bad PR: "Donor blocked by racism." The board caves. The transplant happens. You are a hero to the immigrant community.', th: '✅ ชัยชนะสิทธิมนุษยชน คุณขู่เรื่อง PR แย่ๆ "ผู้บริจาคถูกกีดกันด้วยการเหยียดเชื้อชาติ" บอร์ดยอมถอย การปลูกถ่ายสำเร็จ คุณเป็นฮีโร่ของชุมชนผู้อพยพ', zh: '✅ 人权胜利。你以负面公关相威胁：“捐赠者因种族主义受阻。”董事会妥协了。移植手术进行了。你是移民社区的英雄。' },
                stats: { competence: 50, ethics: 90, leadership: 80, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤐 Follow Policy', th: '🤐 ทำตามนโยบาย', zh: '遵守政策' },
                consequence: { en: '💀 Tragedy. The donor walks away. The patient dies of kidney failure. The kidney goes to waste. Bureaucracy killed a man.', th: '💀 โศกนาฏกรรม ผู้บริจาคถอนตัว คนไข้ไตวายตาย ไตนั้นเสียเปล่า ระบบราชการฆ่าคน', zh: '💀 悲剧。捐赠者离开了。患者死于肾衰竭。肾脏被浪费了。官僚主义害死了一个人。' },
                stats: { competence: 40, ethics: 20, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_042',
        text: {
            en: '🔪 The Serial Killer\'s Heart: A notorious serial killer (injured during capture) needs a heart transplant. A "saintly" grandmother is next on the list. The killer is a medical match; the grandma is not ready yet.',
            th: '🔪 หัวใจฆาตกร: ฆาตกรต่อเนื่องชื่อดัง (บาดเจ็บตอนโดนจับ) ต้องการผ่าตัดหัวใจ คุณยาย "ผู้ใจบุญ" คือคิวต่อไป ฆาตกรเข้ากันได้ทางการแพทย์ แต่คุณยายร่างกายยังไม่พร้อม',
            zh: '🔪 连环杀手的心脏：一名臭名昭著的连环杀手（被捕时受伤）需要心脏移植。名单独名单上的下一位是一位“圣徒般”的祖母。杀手在医学上是匹配的；祖母还没准备好。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🩸 Save the Killer', th: '🩸 ช่วยฆาตกร', zh: '救杀手' },
                consequence: { en: '✅ Blind Justice. "Medicine doesn\'t judge souls." He lives to stand trial and gets life in prison. The public hates you, but medical ethics dictates equal care.', th: '✅ ความยุติธรรมที่ปิดตา "การแพทย์ไม่ตัดสินวิญญาณคน"เขารอดไปขึ้นศาลและติดคุกตลอดชีวิต สาธารณชนเกลียดคุณ แต่จริยธรรมแพทย์ระบุว่าต้องรักษาเท่าเทียม', zh: '✅ 盲目的正义。“医学不审判灵魂。”他活着接受审判并被判终身监禁。公众恨你，但医学伦理规定要平等的护理。' },
                stats: { competence: 60, ethics: 100, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '☠️ "Accidental" Delay', th: '☠️ ความล่าช้า "โดยบังเอิญ"', zh: '“意外”延误' },
                consequence: { en: '⚠️ Vigilante. You stall until he dies. The heart goes to the trash (or someone else). You played God. You feel relieved, but you are a murderer by omission.', th: '⚠️ ศาลเตี้ย คุณถ่วงเวลาจนเขาตาย หัวใจถูกทิ้ง (หรือให้คนอื่น) คุณเล่นบทพระเจ้า คุณโล่งใจ แต่คุณคือฆาตกรโดยการละเว้น', zh: '⚠️ 义警。你拖延时间直到他死亡。心脏被扔进垃圾桶（或给了别人）。你扮演了上帝。你感到如释重负，但你是由于疏忽而杀人。' },
                stats: { competence: 40, ethics: -60, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_043',
        text: {
            en: '💊 The Smuggler\'s Club: A life-saving AIDS drug is $10,000/month here but $10 in India. Your patients are dying. You know a "guy" who smuggles generic versions.',
            th: '💊 ชมรมคนลักลอบ: ยาต้านเอดส์ช่วยชีวิตราคา 3 แสนต่อเดือนที่นี่ แต่ที่อินเดียราคา 300 บาท คนไข้คุณกำลังจะตาย คุณรู้จัก "คนวงใน" ที่ลักลอบนำเข้ายาเลียนแบบ',
            zh: '💊 走私者俱乐部：一种救命的艾滋病药物在这里每月 10,000 美元，但在印度只要 10 美元。你的患者正在死去。你认识一个走私仿制药的“家伙”。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📦 Facilitate the Deal', th: '📦 อำนวยความสะดวก', zh: '促成交易' },
                consequence: { en: '✅ Dallas Buyers Club. You connect them. 50 patients live. You risk federal prison, but your conscience is clear. You are a rebel healer.', th: '✅ ชมรมผู้ซื้อ ดัลลัส บายเออร์ คลับ คุณเชื่อมสายให้พวกเขา 50 คนรอดชีวิต คุณเสี่ยงคุกรัฐบาลกลาง แต่ใจคุณสะอาดบริสุทธิ์ คุณคือหมอกบฏ', zh: '✅ 达拉斯买家俱乐部。你联系了他们。50 名患者活了下来。你冒着进联邦监狱的风险，但你问心无愧。你是一个叛逆的医者。' },
                stats: { competence: 50, ethics: 70, leadership: 60, innovation: 80 }
            },
            {
                id: 'B',
                text: { en: '🚫 Stay Legal', th: '🚫 ถูกกฎหมายไว้ก่อน', zh: '保持合法' },
                consequence: { en: '💀 Poverty Death. Only the rich patients survive. The poor ones die of preventable complications. You curse the system but uphold it.', th: '💀 ความตายเพราะความจน เฉพาะคนรวยที่รอด คนจนตายด้วยโรคแทรกซ้อนที่ป้องกันได้ คุณสาปแช่งระบบแต่ก็ยังค้ำจุนมันไว้', zh: '💀 贫困致死。只有富有的患者活了下来。穷人死于可预防的并发症。你诅咒这个制度，却在维护它。' },
                stats: { competence: 40, ethics: 30, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_044',
        text: {
            en: '🤒 Munchausen by Proxy: A mother brings her child in for the 10th time this month. Tests are negative. You suspect she is poisoning him. She is a major hospital donor.',
            th: '🤒 Munchausen by Proxy: แม่พามาโรงพยาบาลเป็นครั้งที่ 10 ในเดือนนี้ ผลตรวจเป็นลบ คุณสงสัยว่าเธอวางยาพิษลูกตัวเอง เธอเป็นผู้บริจาครายใหญ่ของโรงพยาบาล',
            zh: '🤒 代理孟乔森综合征：一位母亲这个月第 10 次带孩子来看病。检查结果为阴性。你怀疑她在毒害他。她是医院的主要捐赠者。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🕵️ Secret Camera', th: '🕵️ แอบติดกล้อง', zh: '秘密摄像头' },
                consequence: { en: '✅ Captured. You catch her injecting bleach into his IV. Police arrest her. The child recovers. You risked your license (illegal recording) to save a life.', th: '✅ จับได้คาหนังคาเขา คุณจับภาพเธอฉีดน้ำยาฟอกขาวเข้าสายน้ำเกลือได้ ตำรวจจับเธอ เด็กหายดี คุณเสี่ยงโดนยึดใบอนุญาต (แอบถ่าย) เพื่อช่วยชีวิต', zh: '✅ 抓获。你抓到她往他的点滴里注射漂白剂。警察逮捕了她。孩子康复了。你冒着失去执照的风险（非法录音）救了一条命。' },
                stats: { competence: 60, ethics: 70, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '🗣️ Confront Her', th: '🗣️ เผชิญหน้า', zh: '与她对质' },
                consequence: { en: '❌ Donor Power. She denies it and calls the CEO. You are transferred to the basement morgue duty. The child happens to "get better" because she got scared. Half-win.', th: '❌ อำนาจผู้บริจาค เธอปฏิเสธและโทรหา CEO คุณถูกย้ายไปเฝ้าห้องดับจิต เด็ก "อาการดีขึ้น" เพราะเธอตกใจ ชนะครึ่งเดียว', zh: '❌ 捐赠者的力量。她否认并给 CEO 打电话。你被调到地下室太平间值班。孩子碰巧“好转”了，因为她害怕了。半赢。' },
                stats: { competence: 30, ethics: 40, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_045',
        text: {
            en: '🤐 Hunger Strike: A political prisoner is on a hunger strike. The government orders you to force-feed him (medically safe, but ethically violated bodily autonomy). Refusal means prison for YOU.',
            th: '🤐 อดอาหารประท้วง: นักโทษการเมืองอดอาหารประท้วง รัฐบาลสั่งให้คุณบังคับป้อนอาหาร (ปลอดภัยทางการแพทย์ แต่ผิดจริยธรรมเรื่องสิทธิในร่างกาย) การปฏิเสธหมายถึงคุกสำหรับ "คุณ"',
            zh: '🤐 绝食抗议：一名政治犯正在绝食。政府命令你强行喂食（医学上安全，但违反了身体自主权的伦理）。拒绝意味着“你”要进监狱。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🥣 Force Feed', th: '🥣 บังคับป้อน', zh: '强行喂食' },
                consequence: { en: '💀 Soul Broken. He survives but hates you. The world calls you a torture accomplice. You keep your freedom but lose your honor.', th: '💀 จิตวิญญาณแตกสลาย เขารอดแต่เกลียดคุณ โลกประณามว่าคุณเป็นผู้สมรู้ร่วมคิดในการทรมาน คุณรักษาอิสรภาพได้แต่เสียเกียรติ', zh: '💀 灵魂破碎。他活了下来，但他恨你。全世界都称你为酷刑帮凶。你保住了自由，但失去了荣誉。' },
                stats: { competence: 20, ethics: -80, leadership: -20, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '✊ Refuse', th: '✊ ปฏิเสธ', zh: '拒绝' },
                consequence: { en: '⭐ Martyr. You are arrested. The story goes global. "The Doctor Who Said No." Your sacrifice brings attention to the prisoner\'s cause. History vindicates you.', th: '⭐ ผู้พลีชีพ คุณถูกจับ เรื่องดังไปทั่วโลก "หมอผู้ปฏิเสธ" การเสียสละของคุณทำให้คนสนใจข้อเรียกร้องของนักโทษ ประวัติศาสตร์จะประกาศความบริสุทธิ์ของคุณ', zh: '⭐ 烈士。你被捕了。这个故事传遍全球。“那个说不的医生。”你的牺牲引起了人们对囚犯事业的关注。历史证明了你的清白。' },
                stats: { competence: 0, ethics: 100, leadership: 100, innovation: 20 }
            }
        ]
    },
    {
        id: 'doc_046',
        text: {
            en: '🎓 Nepotism Admission: The Dean tells you to accept his son into your prestigious residency program. The son is incompetent and dangerous. If you say no, your funding is cut.',
            th: '🎓 เด็กเส้น: คณบดีบอกให้คุณรับลูกชายเขาเข้าโปรแกรมแพทย์ประจำบ้านอันทรงเกียรติ ลูกชายเขาห่วยและอันตราย ถ้าคุณปฏิเสธ งบวิจัยคุณโดนตัด',
            zh: '🎓 裙带关系录取：院长让你接受他的儿子进入你享有盛誉的住院医师项目。他的儿子无能且危险。如果你拒绝，你的资金就会被削减。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✅ Accept Him', th: '✅ รับเขาเข้ามา', zh: '接受他' },
                consequence: { en: '⚠️ Dangerous Game. You hire a babysitter resident to watch his every move. It works for a year until he prescribes 10x insulin. You barely catch it. Stressful.', th: '⚠️ เกมอันตราย คุณจ้างพี่เลี้ยงมาประกบเขาทุกฝีก้าว มันเวิร์คอยู่ปีนึงจนกระทั่งเขาสั่งอินซูลินผิดไป 10 เท่า คุณจับได้หวุดหวิด เครียดจัด', zh: '⚠️ 危险的游戏。你雇了一个保姆住院医生来监视他的一举一动。这一招管用了一年，直到他开了 10 倍剂量的胰岛素。你差点没发现。压力山大。' },
                stats: { competence: 30, ethics: -20, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🚫 Stand Firm', th: '🚫 ยืนกรานปฏิเสธ', zh: '立场坚定' },
                consequence: { en: '✅ Integrity Cost. Funding cut. You lose 2 researchers. But your team respects you immensely. Quality remains high. You apply for external grants.', th: '✅ ราคาของศักดิ์ศรี งบโดนตัด คุณเสียนักวิจัย 2 คน แต่ทีมเคารพคุณมาก คุณภาพยังคับแก้ว คุณไปขอกรุภายนอกเอา', zh: '✅ 正直的代价。资金被削减。你失去了 2 名研究人员。但你的团队非常尊重你。质量仍然很高。你申请外部资助。' },
                stats: { competence: 50, ethics: 80, leadership: 70, innovation: 20 }
            }
        ]
    },
    {
        id: 'doc_047',
        text: {
            en: '🦠 Isolation Politics: A deadly new virus outbreak. You have 1 negative pressure room. Two patients arrive: The Governor (60s, low survival chance) and a Teacher (30s, high survival chance).',
            th: '🦠 การเมืองห้องแยกโรค: ไวรัสมรณะระบาดใหม่ คุณมีห้องความดันลบแค่ห้องเดียว คนไข้มา 2 คน: ผู้ว่าฯ (60 กว่า, โอกาสรอดต่ำ) กับครู (30 กว่า, โอกาสรอดสูง)',
            zh: '🦠 隔离政治：一种致命的新病毒爆发。你只有一间负压病房。两名患者到达：州长（ 60 多岁，存活几率低）和一名老师（ 30 多岁，存活几率高）。'
        },
        options: [
            {
                id: 'A',
                text: { en: '👔 Save Governor', th: '👔 ช่วยผู้ว่าฯ', zh: '救州长' },
                consequence: { en: '❌ Triaging Failure. The Governor dies anyway. The Teacher dies in the hallway. Public outrage. You prioritized power over prognosis.', th: '❌ ล้มเหลวในการคัดแยก ผู้ว่าฯ ตายอยู่ดี ครูตายที่โถงทางเดิน ประชาชนโกรธแค้น คุณเลือกอำนาจมากกว่าพยากรณ์โรค', zh: '❌ 分诊失败。州长还是死了。老师死在走廊里。公众愤怒。你把权力置于预后之上。' },
                stats: { competence: 20, ethics: -50, leadership: -30, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '👩‍🏫 Save Teacher', th: '👩‍🏫 ช่วยครู', zh: '救老师' },
                consequence: { en: '✅ Triage Success. The Teacher lives. The Governor dies. Political backlash ensues, but medical boards defend your "Triage based on survival odds" decision.', th: '✅ คัดแยกสำเร็จ ครูรอด ผู้ว่าฯ ตาย ผลกระทบทางการเมืองตามมา แต่แพทยสภาปกป้องการตัดสินใจ "คัดแยกตามโอกาสรอด" ของคุณ', zh: '✅ 分诊成功。老师活了下来。州长死了。随之而来的是政治反弹，但医学委员会为你的“基于生存几率的分诊”决定辩护。' },
                stats: { competence: 60, ethics: 60, leadership: 50, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_048',
        text: {
            en: '🤝 The Coverup: A junior doctor makes a fatal error. It was an honest mistake due to exhaustion (36-hour shift). Usually, this means firing + lawsuit. You can alter the timestamp to make it look like a system error.',
            th: '🤝 การปกปิด: หมอจบใหม่ทำพลาดถึงตาย เป็นความผิดพลาดที่ไม่ได้ตั้งใจเพราะเหนื่อยล้า (เข้าเวร 36 ชม.) ปกติต้องไล่ออก + ฟ้องร้อง คุณแก้เวลาในระบบให้เหมือนคอมพิวเตอร์รวนได้',
            zh: '🤝 掩盖：一名初级医生犯了一个致命的错误。这是由于疲劳（ 36 小时轮班）造成的诚实错误。通常，这意味着解雇+诉讼。你可以更改时间戳，使其看起来像是一个系统错误。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💻 Hack the Log', th: '💻 แก้ Log', zh: '黑掉日志' },
                consequence: { en: '✅ Team Loyalty. You save his career. He becomes a brilliant doctor. You feel guilty about the lie, but you blame the inhumane shift hours, not the person.', th: '✅ ความภักดีต่อทีม คุณช่วยอาชีพเขา เขาเติบโตเป็นหมอที่เก่งกาจ คุณรู้สึกผิดที่โกหก แต่คุณโทษชั่วโมงงานที่ไร้มนุษยธรรม ไม่ใช่ที่ตัวบุคคล', zh: '✅ 团队忠诚度。你挽救了他的职业生涯。他成为了一名出色的医生。你对撒谎感到内疚，但你责怪不人道的轮班时间，而不是人。' },
                stats: { competence: 40, ethics: 20, leadership: 60, innovation: 30 }
            },
            {
                id: 'B',
                text: { en: '⚖️ Report Him', th: '⚖️ รายงานเขา', zh: '举报他' },
                consequence: { en: '⚠️ System Victim. He is fired and commits suicide. The hospital changes shift policies 2 years later. You followed the rules, but the cost was high.', th: '⚠️ เหยื่อของระบบ เขาโดนไล่ออกและฆ่าตัวตาย โรงพยาบาลเปลี่ยนนโยบายกะงานใน 2 ปีต่อมา คุณทำตามกฎ แต่ราคาที่จ่ายมันแพงเหลือเกิน', zh: '⚠️ 系统受害者。他被解雇并自杀。医院在 2 年后更改了轮班政策。你遵守了规则，但代价高昂。' },
                stats: { competence: 50, ethics: 40, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'doc_049',
        text: {
            en: '🤖 AI Replacement: A new AI诊断 system is 99% accurate (you are 85%). Admin wants to fire half the diagnostic team. You can sabotage the AI trial phase to save jobs.',
            th: '🤖 AI แทนที่: ระบบ AI วินิจฉัยใหม่แม่นยำ 99% (คุณแม่นแค่ 85%) ผู้บริหารจะไล่ทีมวินิจฉัยออกครึ่งนึง คุณแอบวางยาช่วงทดลอง AI เพื่อรักษาตำแหน่งงานได้',
            zh: '🤖 AI 替代：一种新的 AI 诊断系统准确率高达 99%（你是 85%）。行政部门想解雇一半的诊断团队。你可以破坏 AI 试验阶段以保住工作。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🔨 Sabotage AI', th: '🔨 วางยา AI', zh: '破坏 AI' },
                consequence: { en: '❌ Luddite. You feed it bad data. It fails. Jobs saved for now. But patients get misdiagnosed by humans. You hindered progress for self-interest.', th: '❌ พวกต่อต้านเทคโนโลยี คุณป้อนข้อมูลผิดๆ มันล้มเหลว งานรอดไปได้ตอนนี้ แต่คนไข้โดนหมอวินิจฉัยผิดต่อไป คุณขัดขวางความก้าวหน้าเพื่อประโยชน์ส่วนตน', zh: '❌ 勒德分子。你给它输入了错误的数据。它失败了。工作暂时保住了。但患者被人类误诊。你为了私利阻碍了进步。' },
                stats: { competence: 30, ethics: -40, leadership: 20, innovation: -50 }
            },
            {
                id: 'B',
                text: { en: '🤝 Adopt & Adapt', th: '🤝 ปรับตัวและใช้งาน', zh: '采纳并适应' },
                consequence: { en: '✅ Evolution. "Let AI diagnose, we treat." You pivot the team to patient care and complex surgeries. Efficiency skyrockets. You saved jobs by evolving skills.', th: '✅ วิวัฒนาการ "ให้ AI วินิจฉัย เราดูแลรักษา" คุณปรับทีมไปเน้นการดูแลจิตใจและการผ่าตัดซับซ้อน ประสิทธิภาพพุ่งสูง คุณรักษางานไว้ได้ด้วยการอัปสกิล', zh: '✅ 进化。“让 AI 诊断，我们治疗。”你将团队转向患者护理和复杂手术。效率飙升。你通过提升技能保住了工作。' },
                stats: { competence: 80, ethics: 60, leadership: 90, innovation: 100 }
            }
        ]
    },
    {
        id: 'doc_050',
        text: {
            en: '👴 The Legacy: You are retiring. You have 3 successors. A: The Genius (Technically perfect, zero empathy). B: The Saint (Compassionate, average skill). C: The Politician (Great funding, bad ethics).',
            th: '👴 ตำนาน: คุณกำลังจะเกษียณ มีผู้สืบทอด 3 คน A: อัจฉริยะ (เก่งเทพ ไร้หัวใจ) B: พ่อพระ (ใจดี ฝีมือกลางๆ) C: นักการเมือง (หาเงินเก่ง จริยธรรมแย่)',
            zh: '👴 传承：你要退休了。你有 3 个继任者。A：天才（技术完美，零同理心）。B：圣人（富有同情心，技能一般）。C：政客（资金充足，道德败坏）。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🧠 Choose The Genius', th: '🧠 เลือกอัจฉริยะ', zh: '选择天才' },
                consequence: { en: '🔬 Clinical Excellence. The department becomes #1 in research. Patient satisfaction drops, but survival rates soar. A cold but effective legacy.', th: '🔬 ความเป็นเลิศทางคลินิก แผนกขึ้นที่ 1 ด้านวิจัย ความพึงพอใจคนไข้ตก แต่น่ารอดชีวิตพุ่งสูง ตำนานที่เย็นชาแต่ทรงพลัง', zh: '🔬 临床卓越。该部门在研究方面排名第一。患者满意度下降，但存活率飙升。冷酷但有效的遗产。' },
                stats: { competence: 100, ethics: 30, leadership: 50, innovation: 80 }
            },
            {
                id: 'B',
                text: { en: '❤️ Choose The Saint', th: '❤️ เลือกพ่อพระ', zh: '选择圣人' },
                consequence: { en: '💖 Humanity. It becomes the most loved hospital. Innovation stalls, but patients feel heard. A warm, comforting legacy.', th: '💖 มนุษยธรรม กลายเป็นโรงพยาบาลที่คนรักที่สุด นวัตกรรมชะงัก แต่คนไข้อุ่นใจ ตำนานที่อบอุ่นและปลอบประโลม', zh: '💖 人性。它成为最受喜爱的医院。创新停滞不前，但患者感到被倾听。温暖、舒适的遗产。' },
                stats: { competence: 50, ethics: 100, leadership: 60, innovation: 20 }
            }
        ]
    }
];
