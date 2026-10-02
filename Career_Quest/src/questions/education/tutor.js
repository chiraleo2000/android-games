// Tutor Career Questions
// Ultra-Comprehensive set: 50 detailed, story-rich questions
// Each scenario is a mini-case study with deep consequences and realistic stats

export const tutorQuestions = [

    // SECTION 1: BUILDING REPUTATION & HANDLING BASICS (Questions 1-15)

    {
        id: 'tut_001',
        text: {
            en: '📚 The First Gig: You just listed your services online. A desperate mother calls. Her son, Timmy, is failing 3rd-grade math and hates it. She wants you to "fix him" in 2 weeks before report cards. She offers double your rate ($40/hr instead of $20) if he gets a B.',
            th: '📚 งานแรก: คุณเพิ่งลงประกาศบริการออนไลน์ แม่คนหนึ่งโทรมาอย่างสิ้นหวัง ลูกชายของเธอ ทิมมี่ สอบตกเลขเกรด 3 และเกลียดมันมาก เธอต้องการให้คุณ "ซ่อมเขา" ภายใน 2 สัปดาห์ก่อนใบเกรดออก เธอเสนอราคาให้สองเท่า ($40/ชม. แทนที่จะเป็น $20) ถ้าเขาได้เกรด B',
            zh: '📚 第一份工作：你刚在网上列出服务。一位绝望的母亲打来电话。她的儿子蒂米三年级数学不及格，而且非常讨厌数学。她希望你在成绩单出来前的2周内“修好他”。如果他能拿到B，她提供双倍费率（40美元/小时而不是20美元）。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Accept the Challenge: "I\'ll take the double rate. We\'ll do intensive drill sessions every day. I\'ll teach him the test tricks to pass."',
                    th: '🤝 รับคำท้า: "ฉันรับราคาเพิ่มสองเท่า เราจะติวเข้มทุกวัน ฉันจะสอนเทคนิคทำข้อสอบให้เขาผ่าน"',
                    zh: '🤝 接受挑战：“我接受双倍费率。我们会每天进行强化训练。我会教他考试技巧以通过考试。”'
                },
                consequence: {
                    en: '⚠️ Short-term Gain. Timmy gets a B-, barely missing the goal. The mom pays you the regular rate, disappointed. Timmy now hates math even more because of the drilling. You got money, but no referral.',
                    th: '⚠️ ได้แค่ระยะสั้น ทิมมี่ได้ B- พลาดเป้าไปนิดเดียว แม่จ่ายราคาปกติและผิดหวัง ตอนนี้ทิมมี่เกลียดเลขหนักกว่าเดิมเพราะการอัดเนื้อหา คุณได้เงิน แต่ไม่ได้การบอกต่อ',
                    zh: '⚠️ 短期收益。蒂米得了B-，勉强没达到目标。母亲按常规费率付钱，很失望。蒂米因为强化训练更加讨厌数学了。你赚到了钱，但没有推荐。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🌱 Honest Expectations: "I can\'t promise a B in 2 weeks. That\'s unrealistic. But I can promise to help him stop hating math. Let\'s start with games, not drills."',
                    th: '🌱 ความคาดหวังที่ซื่อสัตย์: "ฉันสัญญาเกรด B ใน 2 สัปดาห์ไม่ได้ มันไม่จริง แต่ฉันสัญญาว่าจะช่วยให้เขาเลิกเกลียดเลขได้ เริ่มจากเกมไม่ใช่การติว"',
                    zh: '🌱 诚实的期望：“我不能保证2周内拿B。那不现实。但我可以保证帮他不再讨厌数学。让我们从游戏开始，而不是练习。”'
                },
                consequence: {
                    en: '✅ Trust Won. The mom appreciates your honesty. Timmy loves the games. He gets a C+, but he\'s happy. The mom hires you for the whole year at your standard rate. Long-term client secured.',
                    th: '✅ ได้ใจ แม่ชื่นชมความซื่อสัตย์ ทิมมี่ชอบเกม เขาได้ C+ แต่มีความสุข แม่จ้างคุณตลอดปีในราคาปกติ ได้ลูกค้าระยะยาว',
                    zh: '✅ 赢得信任。母亲很欣赏你的诚实。蒂米喜欢这些游戏。他得了C+，但他很开心。母亲按标准费率雇佣了你一整年。获得了长期客户。'
                },
                stats: { competence: 40, ethics: 50, leadership: 35, innovation: 45 }
            },
            {
                id: 'C',
                text: {
                    en: '💰 The Guarantee: "I guarantee an A! But I need full control. 2 hours a day, no interference. If I fail, you don\'t pay."',
                    th: '💰 การรับประกัน: "ฉันการันตีเกรด A! แต่ขอคุมทั้งหมด วันละ 2 ชม. ห้ามยุ่ง ถ้าไม่สำเร็จ ไม่ต้องจ่าย"',
                    zh: '💰 保证：“我保证拿A！但我需要完全控制。每天2小时，互不干扰。如果失败，你不必付款。”'
                },
                consequence: {
                    en: '🎲 High Stakes Loss. You work incredibly hard. Timmy gets a B. You technically "failed" so she pays nothing. You wasted 20 hours. A painful lesson in setting boundaries and contracts.',
                    th: '🎲 เสี่ยงสูงแล้วแพ้ คุณทำงานหนักมาก ทิมมี่ได้ B คุณ "ล้มเหลว" ตามสัญญา เธอเลยไม่จ่าย คุณเสียเวลา 20 ชม. บทเรียนราคาแพงเรื่องขอบเขตและสัญญา',
                    zh: '🎲 高风险损失。你非常努力。蒂米得了B。从技术上讲你“失败”了，所以她没付钱。你浪费了20个小时。关于设定界限和合同的痛苦教训。'
                },
                stats: { competence: 20, ethics: 40, leadership: 40, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 The Hybrid Plan: "I\'ll take the job, but only if you sit in on the first/last 10 minutes to learn how to support him at home."',
                    th: '🔄 แผนลูกผสม: "ฉันรับงาน แต่คุณต้องเข้าฟัง 10 นาทีแรกและสุดท้ายเพื่อเรียนรู้วิธีสอนเขาที่บ้าน"',
                    zh: '🔄 混合计划：“我接受这就工作，但前提是你必须旁听最初和最后10分钟，学习如何在家辅导他。”'
                },
                consequence: {
                    en: '✅ Holistic Success! The mom learns to be patient. Timmy feels supported on all sides. He gets a B-. The mom pays you a bonus anyway because the home dynamic improved.',
                    th: '✅ ความสำเร็จแบบองค์รวม! แม่เรียนรู้ที่จะใจเย็น ทิมมี่รู้สึกมีคนช่วยรอบด้าน เขาได้ B- แต่แม่จ่ายโบนัสให้เพราะบรรยากาศที่บ้านดีขึ้น',
                    zh: '✅ 全面成功！母亲学会了耐心。蒂米感到各方支持。他得了B-。母亲还是付了奖金，因为家里的气氛改善了。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 35 }
            }
        ]
    },

    {
        id: 'tut_002',
        text: {
            en: '🤐 The Homework Helper: A wealthy high schooler, Brad, wants to hire you. He hands you his history essay and says, "Just fix the grammar and make it sound smarter. I\'ll pay $100." You realize he wants you to basically rewrite it.',
            th: '🤐 ตัวช่วยการบ้าน: แบรด เด็กมัธยมบ้านรวยจ้างคุณ เขายื่นเรียงความประวัติศาสตร์ให้แล้วบอก "แค่แก้ไวยากรณ์แล้วทำให้มันดูฉลาดขึ้นหน่อย ผมจ่าย $100" คุณรู้ทันทีว่าเขาอยากให้คุณเขียนใหม่ให้',
            zh: '🤐 作业帮手：一个富有的高中生布拉德想雇你。他把历史论文递给你说：“只要修改语法，让它听起来更聪明点。我付100美元。”你意识到他基本上是想让你重写。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✍️ Do the Work: "Sure, easy money. Just don\'t tell anyone I did it." You rewrite it in an hour.',
                    th: '✍️ ทำให้จบๆ: "ได้เลย เงินง่ายๆ อย่าบอกใครว่าฉันทำนะ" คุณเขียนใหม่ให้ในหนึ่งชั่วโมง',
                    zh: '✍️ 干活：“当然，这钱好赚。别告诉别人是我做的。”你在一小时内重写了它。'
                },
                consequence: {
                    en: '⚠️ Reputation Risk. Brad gets an A. He tells his friends you are the "essay fixer." You get 5 more requests. Easy money, but you are now a ghostwriter, not a tutor. If schools find out, you\'re blacklisted.',
                    th: '⚠️ เสี่ยงชื่อเสีย แบรดได้ A เขาบอกเพื่อนว่าคุณคือ "คนแก้เรียงความ" มีคนติดต่อมาอีก 5 คน เงินง่าย แต่คุณกลายเป็นนักรับจ้างเขียน ไม่ใช่ติวเตอร์ ถ้าโรงเรียนรู้ คุณโดนแบน',
                    zh: '⚠️ 声誉风险。布拉德得了A。他告诉朋友你是“论文修理工”。你又收到了5个请求。钱好赚，但你现在是代笔人，不是导师。如果学校发现，你会被列入黑名单。'
                },
                stats: { competence: 25, ethics: -20, leadership: 10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '👨‍🏫 The Socratic Method: "I won\'t write it. But sit down, and I\'ll ask you questions to help YOU make it smarter. It\'ll take 2 hours."',
                    th: '👨‍🏫 วิธีโสเครติส: "ฉันไม่เขียนให้ มานั่งนี่ ฉันจะถามคำถามช่วยให้ \'เธอ\' ทำให้มันฉลาดขึ้นเอง ใช้เวลา 2 ชม."',
                    zh: '👨‍🏫 苏格拉底法：“我不会写。但坐下，我会问你问题，帮助‘你’让它变得更聪明。这需要2小时。”'
                },
                consequence: {
                    en: '✅ Real Learning. Brad is annoyed at first but ends up proud of his own ideas. He gets a B+ but earned it. He respects you as a real mentor. He hires you for SAT prep later.',
                    th: '✅ การเรียนรู้จริง แบรดรำคาญตอนแรกแต่สุดท้ายภูมิใจในไอเดียตัวเอง เขาได้ B+ แต่ทำเอง เขาเคารพคุณในฐานะเมนเทอร์ และจ้างคุณติว SAT ทีหลัง',
                    zh: '✅ 真正的学习。布拉德起初很恼火，但最终为自己的想法感到自豪。他得了B+，但这是他应得的。他尊重你作为真正的导师。后来他雇你做SAT备考。'
                },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '📝 The Edit Only: "I will only fix clear grammatical errors. I will not change your content or tone. Take it or leave it."',
                    th: '📝 แก้แค่คำผิด: "ฉันจะแก้แค่จุดที่ผิดไวยากรณ์ชัดเจน ไม่เปลี่ยนเนื้อหาหรือโทนเสียง รับก็รับ ไม่รับก็ไป"',
                    zh: '📝 仅编辑：“我只修改明显的语法错误。我不会改变你的内容或语气。要么接受要么放弃。”'
                },
                consequence: {
                    en: '⚖️ Standard Service. Brad is unimpressed but pays because he\'s lazy. The essay gets a B. Transactional relationship. No long-term loyalty.',
                    th: '⚖️ บริการมาตรฐาน แบรดเฉยๆ แต่จ่ายเพราะขี้เกียจ เรียงความได้ B ความสัมพันธ์แค่คนจ้างงาน ไม่มีความภักดีระยะยาว',
                    zh: '⚖️ 标准服务。布拉德没什么印象，但因为懒还是付了钱。论文得了B。交易关系。没有长期忠诚度。'
                },
                stats: { competence: 35, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🚫 Refuse and Lacture: "This is plagiarism. I can\'t help you. You should do your own work."',
                    th: '🚫 ปฏิเสธและอบรม: "นี่คือการคัดลอกผลงาน ฉันช่วยไม่ได้ เธอควรทำเอง"',
                    zh: '🚫 拒绝并说教：“这是剽窃。我帮不了你。你应该自己做。”'
                },
                consequence: {
                    en: '💀 Client Lost. Brad calls you a "nerd" and leaves. You kept your ethics but lost a client and potential network. Sometimes being too rigid costs business.',
                    th: '💀 เสียลูกค้า แบรดด่าว่า "เนิร์ด" แล้วหนีไป คุณรักษาจริยธรรมแต่เสียลูกค้าและเครือข่าย บางทีมึงตึงเกินไปก็เสียธุรกิจ',
                    zh: '💀 失去客户。布拉德叫你“书呆子”然后离开了。你保持了职业道德，但失去了客户和潜在的人脉。有时太死板会损失生意。'
                },
                stats: { competence: 20, ethics: 50, leadership: 20, innovation: 10 }
            }
        ]
    },

    {
        id: 'tut_003',
        text: {
            en: '🧠 The Learning Difference: You are tutoring Alice, 7. She is brilliant verbally but cannot read simple words. Letters seem to "jump" for her. Her parents think she is just "lazy" and want you to force her to read faster.',
            th: '🧠 ความแตกต่างในการเรียนรู้: คุณสอนอลิซ 7 ขวบ เธอฉลาดพูดมากแต่อ่านคำง่ายๆ ไม่ได้ ตัวหนังสือดูเหมือน "กระโดด" สำหรับเธอ พ่อแม่คิดว่าเธอแค่ "ขี้เกียจ" และอยากให้คุณบังคับเธออ่านให้เร็วขึ้น',
            zh: '🧠 学习差异：你在辅导7岁的爱丽丝。她口头表达能力很强，但无法阅读简单的单词。字母对她来说似乎在“跳动”。她的父母认为她只是“懒惰”，希望你强迫她读得更快。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔍 Suggest Dyslexia: "I suspect Dyslexia. Please get her tested by a specialist. Making her force-read is hurting her confidence."',
                    th: '🔍 สงสัยว่าเป็น Dyslexia: "ฉันสงสัยว่าเธอเป็นดิสเล็กเซีย รบกวนพาไปตรวจกับผู้เชี่ยวชาญ การบังคับอ่านทำลายความมั่นใจเธอ"',
                    zh: '🔍 建议阅读障碍：“我怀疑是阅读障碍。请让专家给她做测试。强迫她阅读正在伤害她的自信心。”'
                },
                consequence: {
                    en: '✅ Life Changer! Parents are initially defensive but eventually go. Diagnosis confirmed. Alice gets proper support. You saved a child\'s education from years of trauma.',
                    th: '✅ เปลี่ยนชีวิต! พ่อแม่ต่อต้านตอนแรกแต่ยอมไป ยืนยันผลวินิจฉัย อลิซได้รับความช่วยเหลือที่ถูกต้อง คุณช่วยการศึกษาเด็กคนหนึ่งจากปมในใจหลายปี',
                    zh: '✅ 改变人生！父母起初很抵触，但最终还是去了。诊断确认。爱丽丝得到了适当的支持。你从多年的创伤中挽救了一个孩子的教育。'
                },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '📖 Phonics Drill: "We need to go back to basics. I\'ll use intensive phonics cards. We will push through the laziness."',
                    th: '📖 ฝึกออกเสียง: "ต้องกลับไปพื้นฐาน ฉันจะใช้บัตรคำเน้นเสียง เราจะดันให้ผ่านความขี้เกียจไปให้ได้"',
                    zh: '📖 自然拼读训练：“我们需要回到基础。我会使用强化自然拼读卡。我们将克服懒惰。”'
                },
                consequence: {
                    en: '💀 Confidence Crushed. Alice cries every session. She starts wetting the bed from stress. Parents fire you because "she\'s getting worse." You misdiagnosed a neurological issue as a behavioral one.',
                    th: '💀 ความมั่นใจพัง อลิซร้องไห้ทุกคาบ เธอเริ่มฉี่รดที่นอนเพราะเครียด พ่อแม่ไล่คุณออกเพราะ "ลูกแย่ลง" คุณวินิจฉัยผิดว่าเป็นเรื่องนิสัยทั้งที่เป็นเรื่องระบบประสาท',
                    zh: '💀 自信心崩溃。爱丽丝每次辅导都哭。她因压力开始尿床。父母解雇了你，因为“她越来越糟了”。你把神经问题误诊为行为问题。'
                },
                stats: { competence: 20, ethics: 30, leadership: 15, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🎨 Multi-Sensory Approach: "Let\'s use clay to shape letters and audiobooks for content. Avoid traditional reading for a month until she gains confidence."',
                    th: '🎨 ใช้ประสาทสัมผัสผสม: "ใช้ดินเหนียวปั้นตัวอักษรและฟังหนังสือเสียง เลี่ยงการอ่านปกติสักเดือนจนกว่าจะมั่นใจ"',
                    zh: '🎨 多感官方法：“我们用粘土捏字母，用有声读物获取内容。一个月内避免传统阅读，直到她建立自信。”'
                },
                consequence: {
                    en: '🌟 Creative Win! Alice blossoms. She learns to read through touch and sound. Parents are amazed at the progress. You developed a unique niche tutoring method.',
                    th: '🌟 ชนะด้วยความคิดสร้างสรรค์! อลิซเบิกบาน เธอเรียนรู้ผ่านการสัมผัสและเสียง พ่อแม่อึ้งในพัฒนาการ คุณค้นพบวิธีสอนเฉพาะทางของคุณเอง',
                    zh: '🌟 创意获胜！爱丽丝绽放了。她通过触觉和声音学会了阅读。父母对进步感到惊讶。你开发了一种独特的细分辅导方法。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Follow Parents: "You know her best. We will set a timer and make her read 3 pages per session, no matter what."',
                    th: '🤐 ตามใจพ่อแม่: "คุณรู้จักลูกดีที่สุด เราจะจับเวลาและให้เธออ่าน 3 หน้าต่อคาบ ไม่ว่าจะเกิดอะไรขึ้น"',
                    zh: '🤐 听从父母：“你们最了解她。我们会设定计时器，让她每次读3页，无论如何。”'
                },
                consequence: {
                    en: '⚠️ Harmful Compliance. Alice shuts down completely and stops speaking during sessions. You kept the client for 2 months, but did lasting damage to the child.',
                    th: '⚠️ การตามใจที่ทำร้ายเด็ก อลิซปิดกั้นตัวเองและเลิกพูดในคาบ คุณรักษาลูกค้าได้ 2 เดือน แต่ทำร้ายเด็กในระยะยาว',
                    zh: '⚠️ 有害的顺从。爱丽丝完全封闭自己，在辅导期间不再说话。你留住了客户2个月，但对孩子造成了持久的伤害。'
                },
                stats: { competence: 15, ethics: 20, leadership: 10, innovation: 10 }
            }
        ]
    },

    {
        id: 'tut_004',
        text: {
            en: '🖥️ The Tech Pivot: COVID-19 hits (or a similar disruption). All in-person tutoring is cancelled. You have 15 active students. Parents are panicking. You have never tutored online before.',
            th: '🖥️ จุดเปลี่ยนเทคโนโลยี: โควิด-19 ระบาด (หรือเหตุขัดข้องคล้ายกัน) การสอนตัวต่อตัวถูกยกเลิกหมด คุณมีนักเรียน 15 คน พ่อแม่ตื่นตระหนก คุณไม่เคยสอนออนไลน์มาก่อน',
            zh: '🖥️ 技术转型：COVID-19来袭（或类似的中断）。所有面对面辅导取消。你有15名活跃学生。家长们很恐慌。你以前从未在上辅导过。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💻 Immediate Transition: "I\'m switching to Zoom starting tomorrow. I\'ll spend tonight learning whiteboard apps. Discount 10% for the first month as we adjust."',
                    th: '💻 เปลี่ยนทันที: "เริ่มใช้ Zoom พรุ่งนี้เลย คืนนี้ฉันจะหัดใช้แอปกระดานดำ ลดให้ 10% เดือนแรกช่วงปรับตัว"',
                    zh: '💻 立即过渡：“我明天开始转用Zoom。我今晚会学习白板应用程序。第一个月打9折，作为调整期的优惠。”'
                },
                consequence: {
                    en: '✅ Seamless Survival. You act fast. 12 students stay. The first week is bumpy, but parents appreciate the continuity. You actually gain 3 new students who were dropped by slower tutors.',
                    th: '✅ รอดแบบไร้รอยต่อ คุณทำเร็ว นักเรียนอยู่ต่อ 12 คน สัปดาห์แรกสะดุดบ้างแต่พ่อแม่ชอบที่เรียนต่อได้ คุณได้นักเรียนใหม่ 3 คนจากติวเตอร์คนอื่นที่ช้ากว่า',
                    zh: '✅ 无缝生存。你行动迅速。12名学生留下了。第一周有些坎坷，但家长感激这种连续性。你实际上还获得了3名被反应慢的导师放弃的新学生。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 45 }
            },
            {
                id: 'B',
                text: {
                    en: '🐢 Wait and See: "Let\'s pause for 2 weeks until this blows over. In-person is superior. I don\'t want to lower my quality."',
                    th: '🐢 รอดูสถานการณ์: "หยุด 2 สัปดาห์รอดูท่าที สอนสดดีกว่า ฉันไม่อยากลดคุณภาพ"',
                    zh: '🐢 观望：“让我们暂停2周，直到风头过去。面对面更好。我不想降低质量。”'
                },
                consequence: {
                    en: '💀 Business Stalled. The disruption lasts months. By the time you try to go online, your students have found other tutors. You lost 80% of your income.',
                    th: '💀 ธุรกิจชะงัก เหตุการณ์ลากยาวหลายเดือน พอคุณจะเริ่มออนไลน์ นักเรียนก็ไปหาคนอื่นหมดแล้ว รายได้หาย 80%',
                    zh: '💀 业务停滞。中断持续了数月。当你尝试转到线上时，你的学生已经找到了其他导师。你失去了80%的收入。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 15 }
            },
            {
                id: 'C',
                text: {
                    en: '📦 Packet Service: "I will drop off physical work packets at your doorsteps and grade them via email. Low tech, high reliability."',
                    th: '📦 ส่งงานถึงบ้าน: "ฉันจะเอาแบบฝึกหัดไปหย่อนที่หน้าบ้านแล้วตรวจทางอีเมล เทคโนโลยีต่ำแต่ชัวร์"',
                    zh: '📦 资料包服务：“我会把实体练习册送到你们家门口，并通过电子邮件批改。低科技，高可靠性。”'
                },
                consequence: {
                    en: '⚖️ Niche Appeal. Some parents love the screen-free option. Others quit because they need interactive teaching. You keep 50% of clients. Valid, but limits growth.',
                    th: '⚖️ เฉพาะกลุ่ม บางบ้านชอบแบบไม่ใช้จอ บางบ้านเลิกเรียนเพราะอยากได้คนสอนสด คุณรักษาลูกค้าได้ 50% ดีแต่โตยาก',
                    zh: '⚖️ 小众吸引力。有些家长喜欢无屏幕的选择。其他人因为需要互动教学而退出。你保留了50%的客户。有效，但限制了增长。'
                },
                stats: { competence: 35, ethics: 40, leadership: 30, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🚀 Premium Virtual Academy: "I\'m launching a full virtual classroom with breakout rooms and gamified quizzes. Price increases by 15% due to software costs."',
                    th: '🚀 โรงเรียนเสมือนพรีเมียม: "เปิดห้องเรียนเสมือนเต็มรูปแบบ มีห้องย่อยและเกมตอบคำถาม ขึ้นราคา 15% เป็นค่าซอฟต์แวร์"',
                    zh: '🚀 高级虚拟学院：“我将推出一个带有分组会议室和游戏化测验的完整虚拟教室。由于软件成本，价格上涨15%。”'
                },
                consequence: {
                    en: '🌟 Bold Expansion. You lose 5 price-sensitive clients but gain 10 tech-savvy ones from a wider area. You start tutoring kids in other states. Your business scales beyond your city.',
                    th: '🌟 การขยายตัวที่กล้าหาญ คุณเสียลูกค้าขี้งก 5 คน แต่ได้ลูกค้าเก่งเทคฯ 10 คนจากพื้นที่อื่น คุณเริ่มสอนเด็กข้ามรัฐ ธุรกิจขยายไกลกว่าแค่ในเมือง',
                    zh: '🌟 大胆扩张。你失去了5个对价格敏感的客户，但从更广泛的地区获得了10个精通技术的客户。你开始辅导其他州的通过子。你的业务超越了你所在的城市。'
                },
                stats: { competence: 50, ethics: 35, leadership: 50, innovation: 50 }
            }
        ]
    },

    {
        id: 'tut_005',
        text: {
            en: '🗓️ The Scheduling Conflict: Your favorite student, Mia, needs Tuesday 4 PM. Your highest-paying client, the Mayor\'s son, also demands Tuesday 4 PM. You can not clone yourself.',
            th: '🗓️ ตารางชนกัน: มีอา นักเรียนคนโปรด ต้องการเรียนอังคาร 4 โมง ลูกชายนายกเทศมนตรีที่จ่ายแพงที่สุด ก็บังคับจะเอาอังคาร 4 โมง คุณแยกร่างไม่ได้',
            zh: '🗓️ 日程冲突：你最喜欢的学生米娅需要周二下午4点。你付费最高的客户，市长的儿子，也要求周二下午4点。你无法克隆自己。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Prioritize Money: "Sorry Mia, I have a conflict. Can we move you to Friday evening?" (Risk: Mia quits).',
                    th: '💰 เงินต้องมาก่อน: "ขอโทษนะมีอา ครูไม่ว่าง ย้ายไปศุกร์เย็นได้ไหม?" (เสี่ยง: มีอาเลิกเรียน)',
                    zh: '💰 优先考虑钱：“抱歉米娅，我有冲突。能不能把你移到周五晚上？”（风险：米娅退出）。'
                },
                consequence: {
                    en: '⚠️ Loyalty Lost. Mia feels deprioritized and quits. The Mayor\'s son is a nightmare student and cancels frequently anyway. You chased cash and lost stability.',
                    th: '⚠️ เสียความภักดี มีอาน้อยใจและเลิกเรียน ลูกนายกฯ นิสัยแย่และยกเลิกบ่อย คุณไล่ตามเงินแต่เสียความมั่นคง',
                    zh: '⚠️ 失去忠诚。米娅觉得自己被降级了，于是退出了。市长的儿子是个噩梦般的学生，而且经常取消。你追逐金钱却失去了稳定性。'
                },
                stats: { competence: 30, ethics: 25, leadership: 20, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Stand by Mia: "Tell the Mayor\'s son that slot is taken. Loyalty matters more than a premium rate."',
                    th: '🤝 เลือกมีอา: "บอกลูกนายกฯ ว่าเวลานั้นเต็มแล้ว ความภักดีสำคัญกว่าค่าจ้างแพง"',
                    zh: '🤝 支持米娅：“告诉市长的儿子那个时段已经被占了。忠诚比高费率更重要。”'
                },
                consequence: {
                    en: '✅ Integrity Win. Mia stays for 3 years. The Mayor\'s son respects your demand and takes Wednesday instead. You learn that firm boundaries attract respect.',
                    th: '✅ ชนะด้วยความซื่อสัตย์ มีอาอยู่ต่อ 3 ปี ลูกนายกฯ เคารพคุณและยอมเรียนวันพุธ คุณเรียนรู้ว่าจุดยืนที่ชัดเจนดึงดูดความเคารพ',
                    zh: '✅ 正直获胜。米娅留了3年。市长的儿子尊重你的要求，改到了周三。你明白坚定的界限会赢得尊重。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🎳 The Group Session: "I\'ll take you both at Tuesday 4 PM for a \'Study Buddy\' discounted rate. It will be fun!"',
                    th: '🎳 กลุ่มติว: "ครูจะสอนทั้งคู่เลยวันอังคาร 4 โมง ในราคาส่วนลด \'เพื่อนช่วยเรียน\' สนุกแน่!"',
                    zh: '🎳 小组课程：“周二下午4点我同时带你们两个，按‘学习伙伴’的折扣价。会很有趣的！”'
                },
                consequence: {
                    en: '🎲 Risky Mix. They have different skill levels. It\'s chaotic. Neither gets good attention. They both quit after a month. Grouping only works if levels match.',
                    th: '🎲 ผสมเสี่ยง เลเวลต่างกันเกินไป วุ่นวายมาก ไม่มีใครได้ความรู้เต็มที่ ทั้งคู่เลิกหลังผ่านไปเดือนเดียว จัดกลุ่มต้องดูระดับความรู้ด้วย',
                    zh: '🎲 风险混合。他们的技能水平不同。一片混乱。两人都没得到很好的关注。一个月后他们都退出了。只有水平匹配时分组才有效。'
                },
                stats: { competence: 25, ethics: 35, leadership: 25, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 The Auction: "That slot is in high demand. Providing it to the highest bidder." (Let them fight).',
                    th: '🔄 การประมูล: "เวลานั้นคนแย่งกันเยอะ ใครจ่ายสูงกว่าได้ไป" (ให้แข่งกันเอง)',
                    zh: '🔄 拍卖：“那个时段需求量很大。价高者得。”（让他们去争）。'
                },
                consequence: {
                    en: '💀 Professional Suicide. Both parents are disgusted by your greed. Word gets around that you are mercenary. You lose both clients.',
                    th: '💀 ฆ่าตัวตายทางอาชีพ พ่อแม่ทั้งคู่รังเกียจความโลภ มีข่าวลือว่าคุณหน้าเงิน เสียลูกค้าทั้งคู่',
                    zh: '💀 职业自杀。双方父母都对你的贪婪感到恶心。关于你唯利是图的传言传开了。你失去了这两个客户。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 10 }
            }
        ]
    },

    {
        id: 'tut_006',
        text: {
            en: '💸 The Ghosting Parent: Ms. Robinson owes you $300 for the last 4 sessions. She drops off her son, smiles, and says, "I\'ll Venmo you tonight!" She never does. You need this money for rent, but her son is finally making progress.',
            th: '💸 ผู้ปกครองจอมเบี้ยว: คุณนายนิโคลสันค้างค่าสอนคุณ $300 สำหรับ 4 ครั้งล่าสุด เธอมาส่งลูก ยิ้มหวาน แล้วบอก "เดี๋ยวคืนนี้โอนให้นะ!" แต่ไม่เคยโอน คุณต้องใช้เงินนี้จ่ายค่าเช่า แต่ลูกชายเธอกำลังเรียนรู้ได้ดีมาก',
            zh: '💸 消失的家长：罗宾逊女士欠你过去4次课的300美元。她放下儿子，笑着说：“我今晚给你Venmo转账！”但她从未转过。你需要这笔钱付房租，但她的儿子终于取得了进步。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Service Stoppage: "I cannot tutor Billy today until the balance is paid in full. I\'m running a business." You send them home.',
                    th: '🛑 ระงับบริการ: "ฉันสอนบิลลี่วันนี้ไม่ได้จนกว่าจะจ่ายยอดค้างทั้งหมด ฉันทำธุรกิจนะ" คุณส่งพวกเขากลับบ้าน',
                    zh: '🛑 停止服务：“在付清余款之前，我今天不能辅导比利。我在做生意。”你让他们回家了。'
                },
                consequence: {
                    en: '⚖️ Cash Secured, Client Lost. She pays immediately, embarrassed and angry. She calls you "heartless" and fires you next week. You got your money but lost a regular income stream.',
                    th: '⚖️ ได้เงินแต่เสียลูกค้า เธอจ่ายทันทีด้วยความอายและโกรธ เธอด่าคุณว่า "ใจดำ" แล้วไล่คุณออกอาทิตย์หน้า คุณได้เงินคืนแต่เสียรายได้ประจำ',
                    zh: '⚖️ 拿到现金，失去客户。她既尴尬又生气，立刻付了钱。她骂你“没良心”，下周就把你解雇了。你拿到了钱，但失去了稳定的收入来源。'
                },
                stats: { competence: 30, ethics: 20, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 The Soft Nudge: Teach the lesson. Send a polite reminder text afterwards with a breakdown of dates. "Just a gentle reminder!"',
                    th: '🤝 ทวงแบบนุ่มนวล: สอนไปก่อน ส่งข้อความเตือนสุภาพหลังจบคลาสพร้อมแจงวันที่ "ขออนุญาตเตือนยอดค้างนะคะ!"',
                    zh: '🤝 温和提醒：先上课。课后发一条礼貌的提醒短信，列明日期明细。“温馨提醒一下！”'
                },
                consequence: {
                    en: '⚠️ The Cycle Continues. She pays for 2 sessions but still owes for 3 next week. You are essentially offering interest-free loans. Her debt slowly grows to $600.',
                    th: '⚠️ วงจรเดิม เธอจ่ายมา 2 ครั้งแต่ก็ยังค้างอีก 3 ครั้งในอาทิตย์ถัดไป คุณกลายเป็นคนปล่อยกู้ดอกเบี้ยศูนย์ หนี้เธอก้อนใหญ่ขึ้นเรื่อยๆ เป็น $600',
                    zh: '⚠️ 循环继续。她付了2次课的钱，但下周仍欠3次。你本质上是在提供无息贷款。她的债务慢慢增加到了600美元。'
                },
                stats: { competence: 20, ethics: 40, leadership: 15, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔒 The Pre-Pay Policy: "We need to switch billing. Starting today, payment is due 24 hours BEFORE the session to reserve the slot. It\'s automated."',
                    th: '🔒 นโยบายจ่ายก่อนเรียน: "เราต้องเปลี่ยนระบบชำระเงิน ตั้งแต่วันนี้ต้องจ่ายก่อนเรียน 24 ชม. เพื่อจองเวลา มันเป็นระบบอัตโนมัติ"',
                    zh: '🔒 预付政策：“我们需要更改账单方式。从今天开始，必须在课前24小时付款以预留时段。这是自动化的。”'
                },
                consequence: {
                    en: '✅ Professional Pivot. She grumbles but agrees. You get paid upfront. You eliminated the chasing game forever. Other clients respect the new "system."',
                    th: '✅ การปรับตัวแบบมือโปร เธอบ่นแต่ยอมตกลง คุณได้เงินล่วงหน้า จบเกมวิ่งไล่ทวงเงินถาวร ลูกค้าคนอื่นก็เคารพ "ระบบ" ใหม่นี้',
                    zh: '✅ 专业转型。她虽然抱怨但同意了。你预先拿到了钱。你永远消除了追债游戏。其他客户也尊重这个新“系统”。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '🥺 The Guilt Trip: "I can\'t pay my rent this month because of this. Please help me." Beg for the money.',
                    th: '🥺 ดราม่าเรียกความสงสาร: "ฉันไม่มีเงินจ่ายค่าเช่าเดือนนี้เพราะเรื่องนี้เลย ช่วยฉันหน่อยนะ" ขอร้องอ้อนวอน',
                    zh: '🥺 内疚之旅：“因为这个我这个月交不起房租了。请帮帮我。”乞求这笔钱。'
                },
                consequence: {
                    en: '💀 Professional Integrity Zero. She pays you but loses all respect. She sees you as a charity case, not a professional tutor. She starts negotiating lower rates later.',
                    th: '💀 ความเป็นมืออาชีพเป็นศูนย์ เธอจ่ายแต่หมดความเคารพ เธอมองคุณเป็นคนน่าสมเพช ไม่ใช่ติวเตอร์มืออาชีพ เดี๋ยวเธอก็จะเริ่มต่อรองขอลดราคา',
                    zh: '💀 职业操守为零。她付了钱，但完全失去了尊重。她把你当成慈善案例，而不是专业导师。她后来开始讨价还价。'
                },
                stats: { competence: 15, ethics: 30, leadership: 0, innovation: 10 }
            }
        ]
    },

    {
        id: 'tut_007',
        text: {
            en: '💌 The Innocent Crush: Leo, your 16-year-old math student, leaves a note in his workbook: "You\'re the only one who understands me. I think I love you." You are 24. He\'s a great student, but this crosses a line.',
            th: '💌 ความรักวัยใส: ลีโอ นักเรียนเลขวัย 16 ของคุณ ทิ้งโน้ตไว้ในสมุด: "คุณเป็นคนเดียวที่เข้าใจผม ผมคิดว่าผมรักคุณ" คุณอายุ 24 เขาเป็นเด็กดี แต่นี่มันข้ามเส้น',
            zh: '💌 无辜的迷恋：你16岁的数学学生里奥在练习册里留了一张纸条：“你是唯一理解我的人。我想我爱你。”你24岁。他是个好学生，但这越界了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Terminate Immediately: Tell his parents you can no longer teach him due to "personal reasons." Stop responding to him.',
                    th: '🛑 ยุติทันที: บอกพ่อแม่เขาว่าสอนต่อไม่ได้แล้วด้วย "เหตุผลส่วนตัว" เลิกตอบโต้เขา',
                    zh: '🛑 立即终止：告诉他的父母由于“个人原因”你不能再教他了。不再回复他。'
                },
                consequence: {
                    en: '🛡️ Safest Route. You lose the income ($200/month), but you protect your career and reputation 100%. Leo is heartbroken but eventually moves on. No risks taken.',
                    th: '🛡️ ทางที่ปลอดภัยที่สุด เสียรายได้ ($200/เดือน) แต่ปกป้องอาชีพและชื่อเสียง 100% ลีโอเสียใจแต่เดี๋ยวก็ผ่านไป ไม่มีความเสี่ยง',
                    zh: '🛡️ 最安全的路线。你失去了收入（200美元/月），但你100%保护了你的职业生涯和声誉。里奥很伤心，但在最终还是释怀了。没有任何风险。'
                },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 The Boundary Talk: "Leo, I\'m flattered, but I\'m your teacher. We have a professional relationship. If we can\'t keep it professional, I have to stop coming."',
                    th: '🤝 คุยเรื่องขอบเขต: "ลีโอ ครูขอบคุณนะ แต่ครูเป็นครูของเธอ เรามีความสัมพันธ์แบบมืออาชีพ ถ้าเรารักษาความเป็นมืออาชีพไม่ได้ ครูคงต้องหยุดสอน"',
                    zh: '🤝 界限谈话：“里奥，我很受宠若惊，但我是你的老师。这是职业关系。如果我们不能保持职业化，我就必须停止来了。”'
                },
                consequence: {
                    en: '✅ Maturity Growth. Leo turns bright red, apologizes, and agrees. The next session is awkward, but it passes. He learns valuable lessons about boundaries. You keep the client.',
                    th: '✅ การเติบโตทางวุฒิภาวะ ลีโอหน้าแดง ขอโทษ และตกลง คาบถัดไปเกร็งๆ หน่อยแต่ก็ผ่านไปได้ เขาได้เรียนรู้บทเรียนสำคัญเรื่องขอบเขต คุณรักษาลูกค้าไว้ได้',
                    zh: '✅ 成熟的成长。里奥脸涨得通红，道了歉，并表示同意。下一次辅导有点尴尬，但过去了。他学到了关于界限的宝贵一课。你留住了客户。'
                },
                stats: { competence: 45, ethics: 45, leadership: 45, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Ignore It: Pretend you never saw the note. Throw it away and act normally next week. Hope it goes away.',
                    th: '🤐 ทำเมิน: แกล้งทำเป็นไม่เห็นโน้ต ทิ้งมันไปแล้วทำตัวปกติอาทิตย์หน้า หวังว่ามันจะหายไปเอง',
                    zh: '🤐 忽视它：假装没看到纸条。把它扔掉，下周表现得跟平常一样。希望这感觉会消失。'
                },
                consequence: {
                    en: '⚠️ Escalation Risk. Leo thinks you accepted it silently. He tries to hold your hand during the next session. Now you HAVE to fire him, and it\'s much messier.',
                    th: '⚠️ เสี่ยงบานปลาย ลีโอคิดว่าคุณยอมรับแบบเงียบๆ เขาพยายามจับมือคุณในคาบถัดไป คราวนี้คุณ "ต้อง" ไล่เขาออกจริงๆ แล้วเรื่องมันยุ่งกว่าเดิม',
                    zh: '⚠️ 升级风险。里奥以为你默许了。他在下次辅导时试图牵你的手。现在你“必须”解雇他，而且事情变得更糟了。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ Tell Parents Everything: Show the note to his mother immediately. "Your son is hitting on me."',
                    th: '🗣️ ฟ้องพ่อแม่หมดเปลือก: เอาโน้ตให้แม่เขาดูทันที "ลูกชายคุณกำลังจีบฉัน"',
                    zh: '🗣️ 告诉父母一切：立即把纸条给他母亲看。“你儿子在撩我。”'
                },
                consequence: {
                    en: '💀 Humiliation. The mother is embarrassed and yells at Leo in front of you. Leo is mortified and hates you. He refuses to ever be tutored again. You destroyed his trust to save yourself.',
                    th: '💀 ความอับอาย แม่ขายหน้าและตะคอกลีโอต่อหน้าคุณ ลีโออายแทบแทรกแผ่นดินและเกลียดคุณ เขาปฏิเสธการเรียนพิเศษตลอดไป คุณทำลายความไว้ใจของเขาเพื่อเอาตัวรอด',
                    zh: '💀 羞辱。母亲很尴尬，当着你的面冲里奥大喊大叫。里奥感到无地自容并恨你。他拒绝再接受任何辅导。你为了自保摧毁了他对你的信任。'
                },
                stats: { competence: 25, ethics: 30, leadership: 15, innovation: 10 }
            }
        ]
    },

    {
        id: 'tut_008',
        text: {
            en: '🚁 The Helicopter Dad: Mr. Chen sits 3 feet away during every session. He interrupts constantly: "No, explain it THIS way" or "That seems too easy for him." He is an engineer, but you are teaching 8th-grade English.',
            th: '🚁 พ่อจอมบงการ: คุณเฉินนั่งห่างไป 3 ฟุตทุกคาบ เขาขัดจังหวะตลอด "ไม่ อธิบายแบบ \'นี้\' สิ" หรือ "นั่นดูง่ายไปสำหรับเขานะ" เขาเป็นวิศวกร แต่คุณกำลังสอนภาษาอังกฤษเกรด 8',
            zh: '🚁 直升机爸爸：陈先生每次辅导都坐在3英尺远的地方。他不断打断：“不，这样解释”或“这对他来说似乎太简单了。”他是一名工程师，而你正在教八年级英语。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚪 The Closed Door Policy: "Mr. Chen, for Jason to focus, I need independent instructional space. We work best one-on-one. I\'ll brief you in the last 5 minutes."',
                    th: '🚪 นโยบายปิดประตู: "คุณเฉินครับ เพื่อให้เจสันมีสมาธิ ผมต้องการพื้นที่สอนอิสระ เราทำงานได้ดีที่สุดตอนอยู่กันสองคน เดี๋ยวผมจะสรุปให้ฟัง 5 นาทีสุดท้ายนะครับ"',
                    zh: '🚪 闭门政策：“陈先生，为了让杰森集中注意力，我需要独立的教学空间。我们一对一效果最好。我会在最后5分钟向您汇报。”'
                },
                consequence: {
                    en: '✅ Authority Established. He resists but agrees. Jason finally relaxes and speaks up in class. Progress doubles. Mr. Chen is impressed by the results and backs off.',
                    th: '✅ สร้างอำนาจ เขาต่อต้านแต่ยอม เจสันผ่อนคลายและกล้าพูดในห้อง พัฒนาการเร็วขึ้นสองเท่า คุณเฉินประทับใจผลลัพธ์และยอมถอย',
                    zh: '✅ 确立权威。他虽有抵触但同意了。杰森终于放松下来，在课上开口说话。进步加倍。陈先生对结果印象深刻并退后了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '😤 Snap Back: "Sir, who is the tutor here? If you want to teach him, save your money and do it yourself."',
                    th: '😤 สวนกลับ: "คุณครับ ใครเป็นติวเตอร์กันแน่? ถ้าอยากสอนเอง ก็เก็บเงินไว้แล้วทำเองครับ"',
                    zh: '😤 反击：“先生，这里谁是导师？如果您想教他，就省下钱自己教吧。”'
                },
                consequence: {
                    en: '💀 Instant Fire. His ego is bruised. He fires you on the spot. You stood up for yourself but executed it poorly. Zero tact.',
                    th: '💀 ไล่ออกทันที อีโก้เขาเจ็บ เขาไล่คุณออกตรงนั้น คุณปกป้องตัวเองแต่วิธีการแย่มาก ไร้ศิลปะ',
                    zh: '💀 立即解雇。他的自尊心受到了伤害。他当场解雇了你。你虽然维护了自己，但做得太差劲。毫无策略。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Co-Teaching Compromise: "That\'s a great engineering perspective! Let\'s translate that logic into essay structure." Validate him to keep him quiet.',
                    th: '🤝 ประนีประนอมช่วยกันสอน: "เป็นมุมมองวิศวะที่เยี่ยมมาก! มาแปลงตรรกะนั้นเป็นโครงสร้างเรียงความกัน" ยอเขาเพื่อให้เขาเงียบ',
                    zh: '🤝 协同教学妥协：“那是很好的工程学视角！让我们把那个逻辑转化为论文结构。”肯定他以让他保持安静。'
                },
                consequence: {
                    en: '⚖️ Exhausting Peace. It works, but sessions are draining. You spend 50% of energy managing the dad, 50% on the kid. You keep the client, but dread every Tuesday.',
                    th: '⚖️ ความสงบที่เหนื่อยล้า วิธีนี้ได้ผลแต่เปลืองพลังงานมาก คุณใช้พลัง 50% จัดการพ่อ 50% สอนลูก รักษาลูกค้าได้ แต่เกลียดทุกวันอังคารม',
                    zh: '⚖️ 令人筋疲力尽的和平。这很有效，但辅导让人精疲力竭。你花50%的精力应付爸爸，50%的精力教孩子。你留住了客户，但害怕每个星期二。'
                },
                stats: { competence: 40, ethics: 35, leadership: 30, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Silent Submission: Let him interrupt. Just nod and do what he says. Whatever gets the paycheck.',
                    th: '🤐 ยอมจำนนเงียบๆ: ปล่อยเขาขัดจังหวะ พยักหน้าแล้วทำตามที่เขาสั่ง อะไรก็ได้ขอให้ได้เงิน',
                    zh: '🤐 沉默顺从：让他打断。只是点头并按他说的做。只要能拿到工资就行。'
                },
                consequence: {
                    en: '⚠️ Educational Fail. Jason learns nothing confusing. He fails the test. The dad blames YOU for being "ineffective" even though he ran the show. You get fired anyway.',
                    th: '⚠️ การสอนล้มเหลว เจสันไม่ได้อะไรนอกจากความงง สอบตก พ่อโทษว่า "คุณ" ห่วยทั้งที่เขาเป็นคนบงการ สุดท้ายคุณก็โดนไล่ออกอยู่ดี',
                    zh: '⚠️ 教育失败。杰森什么也没学到，只感到困惑。他考试不及格。爸爸指责你“效率低下”，尽管是他主导了这一切。反正你还是被解雇了。'
                },
                stats: { competence: 10, ethics: 20, leadership: 10, innovation: 10 }
            }
        ]
    },

    {
        id: 'tut_009',
        text: {
            en: '📜 The Test Leak: A student, Kyle, shows you a blurry photo on his phone. "My cousin sent me the answer key for tomorrow\'s chem final. Can you teach me how to solve these specific problems so I can show my work?"',
            th: '📜 ข้อสอบรั่ว: ไคล์โชว์รูปเบลอๆ ในมือถือให้ดู "ลูกพี่ลูกน้องผมส่งเฉลยเคมีไฟนอลพรุ่งนี้มาให้ ครูช่วยสอนวิธีทำข้อพวกนี้หน่อยได้ไหม ผมจะได้แสดงวิธีทำถูก"',
            zh: '📜 试题泄露：一个叫凯尔的学生给你看他手机上一张模糊的照片。“我表弟发给我明天化学期末考试的答案。你能教我怎么解这些具体的题目吗，这样我就能展示计算过程了？”'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Absolute Refusal: "That is cheating. I cannot help you. In fact, if you use that, you\'re risking expulsion. Delete it now."',
                    th: '🚫 ปฏิเสธเด็ดขาด: "นั่นคือการโกง ครูช่วยเธอไม่ได้ ที่จริงถ้าเธอใช้มัน เธอเสี่ยงโดนไล่ออกนะ ลบเดี๋ยวนี้"',
                    zh: '🚫 绝对拒绝：“那是作弊。我帮不了你。事实上，如果你用了它，你就有被开除的风险。现在就把它删了。”'
                },
                consequence: {
                    en: '✅ Ethical Stand. Kyle panics but deletes it. You spend the hour cramming legitimately. He gets a C, but he stays in school. You saved him from a massive mistake.',
                    th: '✅ ยืนหยัดในจริยธรรม ไคล์ตกใจแต่ยอมลบ คุณใช้เวลานั้นติวแบบถูกวิธี เขาได้ C แต่ยังได้เรียนต่อ คุณช่วยเขาจากความผิดพลาดครั้งใหญ่',
                    zh: '✅ 道德立场。凯尔很恐慌，但删掉了它。你花了一个小时进行正当的临时抱佛脚。他得了C，但他保住了学籍。你把他从一个巨大的错误中解救了出来。'
                },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 The Loophole: "I won\'t look at the photo. But tell me the \'topics\' on it, and we will practice similar problems heavily."',
                    th: '🤝 ช่องโหว่: "ครูจะไม่ดูรูปนะ แต่บอก \'หัวข้อ\' มาว่ามีอะไรบ้าง เราจะเน้นทำโจทย์คล้ายๆ กัน"',
                    zh: '🤝 漏洞：“我不会看那张照片。但告诉我上面的‘主题’，我们会重点练习类似的问题。”'
                },
                consequence: {
                    en: '⚖️ Grey Area Win. Kyle aces the test. He thinks you\'re "cool." You technically didn\'t cheat, but you aided and abetted. Your conscience is a bit heavy.',
                    th: '⚖️ ชนะแบบสีเทา ไคล์สอบได้คะแนนเต็ม เขาคิดว่าคุณ "เจ๋ง" ในทางเทคนิคคุณไม่ได้โกง แต่คุณก็ให้ความร่วมมือ ใจคุณหนักอึ้งนิดหน่อย',
                    zh: '⚖️ 灰色地带获胜。凯尔在考试中拿了高分。他觉得你很“酷”。你在技术上没有作弊，但你提供了协助及教唆。你的良心有点不安。'
                },
                stats: { competence: 45, ethics: 30, leadership: 30, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Report It: "I have to report this to the principal. Academic integrity is non-negotiable."',
                    th: '🕵️ รายงาน: "ครูต้องรายงานเรื่องนี้ให้อาจารย์ใหญ่ทราบ ความซื่อสัตย์ทางวิชาการต่อรองไม่ได้"',
                    zh: '🕵️ 举报：“我必须向校长报告这件事。学术诚信是不可谈判的。”'
                },
                consequence: {
                    en: '💀 Snitch Stigma. Kyle is suspended. His parents fire you and trash your name online. Other students refuse to work with you because you are a "snitch." You did the right thing but paid a high price.',
                    th: '💀 ตราบาปคนขี้ฟ้อง ไคล์โดนพักการเรียน พ่อแม่ไล่คุณออกและด่าคุณเละบนเน็ต นักเรียนคนอื่นไม่ยอมเรียนกับคุณเพราะคุณเป็น "คนขี้ฟ้อง" คุณทำสิ่งที่ถูกแต่จ่ายราคาแพง',
                    zh: '💀 告密者污名。凯尔被停学。他的父母解雇了你，并在网上搞臭你的名声。其他学生拒绝与你合作，因为你是个“告密者”。你做了正确的事，但付出了沉重的代价。'
                },
                stats: { competence: 30, ethics: 50, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '✍️ Teach the Sheet: "Show me. Okay, problem 1 is Stoichiometry. Here is exactly how you write the steps. Memorize this."',
                    th: '✍️ สอนตามโพย: "เอามาดูซิ โอเค ข้อ 1 ปริมาณสารสัมพันธ์ นี่คือวิธีเขียนขั้นตอน จำให้ได้นะ"',
                    zh: '✍️ 教答案：“给我看。好吧，第一题是化学计量。这是你写步骤的确切方法。把这个背下来。”'
                },
                consequence: {
                    en: '⚠️ Crisis! The school changed the test version at the last minute. Kyle answers the WRONG questions perfecty. He is caught cheating immediately. He blames you. You are banned from tutoring diverse district students.',
                    th: '⚠️ วิกฤต! โรงเรียนเปลี่ยนชุดข้อสอบนาทีสุดท้าย ไคล์ตอบข้อสอบ "ผิดชุด" อย่างสมบูรณ์แบบ เขาโดนจับได้ทันทีว่าโกง เขาโทษคุณ คุณโดนแบนห้ามสอนเด็กในเขตนั้นอีก',
                    zh: '⚠️ 危机！学校在最后一刻更改了试卷版本。凯尔完美地回答了“错误”的问题。他立即被抓到作弊。他怪你。你被禁止辅导该学区的各种学生。'
                },
                stats: { competence: 10, ethics: -40, leadership: 0, innovation: 10 }
            }
        ]
    },

    {
        id: 'tut_010',
        text: {
            en: '📈 The Agency Offer: A massive tutoring agency offers to hire you. They will fill your schedule instantly (40 hrs/week). But they take 50% of your earnings and demand you use their rigid, outdated curriculum.',
            th: '📈 ข้อเสนอจากเอเจนซี่: เอเจนซี่ติวเตอร์ยักษ์ใหญ่เสนอจ้างคุณ พวกเขาจะหาตารางให้เต็มทันที (40 ชม./สัปดาห์) แต่หัก 50% ของรายได้ และบังคับให้ใช้หลักสูตรที่ล้าสมัยและแข็งทื่อของเขา',
            zh: '📈 机构报价：一家大型辅导机构提出聘用你。他们会立即填满你的日程表（40小时/周）。但他们抽取你50%的收入，并要求你使用他们死板、过时的课程。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏢 Join for Stability: "I\'ll take it. I need the guaranteed money. I\'ll just follow their script and go home."',
                    th: '🏢 ร่วมเพื่อความมั่นคง: "ฉันเอา เงินชัวร์ดี ฉันจะสอนตามบทเขาแล้วกลับบ้าน"',
                    zh: '🏢 加入以此求稳：“我接受。我需要有保障的钱。我就照着他们的稿子念，然后回家。”'
                },
                consequence: {
                    en: '🐢 Stagnation. You make steady money ($40k/yr) but hate your job. The curriculum is boring. You lose your creative spark. 2 years later, you are burnt out and quit teaching entirely.',
                    th: '🐢 หยุดนิ่ง คุณได้เงินสม่ำเสมอ ($40k/ปี) แต่เกลียดงาน หลักสูตรน่าเบื่อ คุณหมดไฟสร้างสรรค์ 2 ปีต่อมาคุณหมดไฟและลาออกจากการสอนถาวร',
                    zh: '🐢 停滞不前。你赚钱很稳定（4万美元/年），但讨厌你的工作。课程很无聊。你失去了创意的火花。2年后，你精疲力竭，完全退出了教学。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 Decline and Build: "No thanks. I\'ll build my own brand. I\'d rather have 10 clients I love than 40 I don\'t. I keep 100%."',
                    th: '🚀 ปฏิเสธและสร้างเอง: "ไม่ล่ะขอบคุณ ฉันจะสร้างแบรนด์เอง มีลูกค้าที่รัก 10 คนดีกว่ามี 40 คนที่ไม่ใช่ ฉันเก็บ 100%"',
                    zh: '🚀 拒绝并自建：“不用了，谢谢。我会建立自己的品牌。我宁愿有10个我喜欢的客户，也不要40个不喜欢的。我保留100%。”'
                },
                consequence: {
                    en: '✅ Entrepreneurial Win. It\'s scary for 3 months. But you market yourself. You fill your schedule in 6 months at FULL price. You engage students your way. Income doubles ($80k/yr).',
                    th: '✅ ชัยชนะของผู้ประกอบการ น่ากลัวอยู่ 3 เดือน แต่คุณทำการตลาดตัวเอง ตารางเต็มใน 6 เดือนด้วยราคา "เต็ม" คุณสอนในแบบของคุณ รายได้เพิ่มสองเท่า ($80k/ปี)',
                    zh: '✅ 创业获胜。头3个月很可怕。但你推销自己。你在6个月内以“全价”填满了日程表。你用你的方式吸引学生。收入翻倍（8万美元/年）。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Hybrid Hustle: "I\'ll work weekends for the agency to just pay rent, and build my private practice on weekdays."',
                    th: '🔄 ลูกผสมขยัน: "ฉันจะทำเสาร์อาทิตย์ให้เอเจนซี่เพื่อจ่ายค่าเช่า แล้วสร้างฐานลูกค้าส่วนตัววันธรรมดา"',
                    zh: '🔄 混合奋斗：“我会周末在机构工作来付房租，工作日建立我的私人业务。”'
                },
                consequence: {
                    en: '⚖️ The Grind. It works financially, but you work 7 days a week. You are exhausted. Eventually, you steal enough agency clients to go solo, but check your non-compete clause carefully!',
                    th: '⚖️ งานหนัก ได้เงินดีแต่ทำ 7 วันต่อสัปดาห์ เหนื่อยมาก สุดท้ายคุณขโมยลูกค้าเอเจนซี่มามากพอที่จะออกมาทำเอง แต่เช็คสัญญาทรัพย์สินทางปัญญาดีๆ ล่ะ!',
                    zh: '⚖️ 苦差事。在经济上行得通，但你一周工作7天。你精疲力竭。最终，你通过挖走足够的机构客户单干了，但要仔细检查你的竞业禁止条款！'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 35 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Negotiate Terms: "I\'ll join, but I use MY curriculum, and you only take 30%. I bring results superior to your script."',
                    th: '🤝 ต่อรองเงื่อนไข: "ฉันจะเข้าร่วม แต่ใช้หลักสูตร \'ของฉัน\' และคุณหักแค่ 30% ฉันทำผลลัพธ์ได้ดีกว่าบทของคุณ"',
                    zh: '🤝 协商条款：“我会加入，但我使用‘我的’课程，而且你们只抽30%。我带来的结果优于你们的稿子。”'
                },
                consequence: {
                    en: '🌟 Power Move. They are stunned but desperate for good tutors. They agree to a "Senior Tutor" tier for you. You get the volume AND the freedom. Best of both worlds.',
                    th: '🌟 การเดินเกมที่เหนือชั้น พวกเขาอึ้งแต่ต้องการติวเตอร์เก่งๆ ยอมตกลงให้ระดับ "ติวเตอร์อาวุโส" คุณได้ทั้งลูกค้าและอิสระ ดีที่สุดทั้งสองทาง',
                    zh: '🌟以此为筹码。他们惊呆了，但渴望好的导师。他们同意给你“高级导师”的层级。你既得到了客源量又得到了自由。两全其美。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 45 }
            }
        ]
    },

    {
        id: 'tut_011',
        text: {
            en: '🧠 The "Bored" Genius: Your student, Alex, finishes your 1-hour lesson plan in 15 minutes. He is yawning. His parents pay for the full hour. What do you do with the remaining 45 minutes?',
            th: '🧠 อัจฉริยะขี้เบื่อ: อเล็กซ์ นักเรียนของคุณทำแบบฝึกหัด 1 ชั่วโมงเสร็จใน 15 นาที เขานั่งหาว พ่อแม่จ่ายเงินเต็มชั่วโมง คุณจะทำยังไงกับ 45 นาทีที่เหลือ?',
            zh: '🧠 “无聊”的天才：你的学生亚历克斯在15分钟内完成了你1小时的课程计划。他在打哈欠。他的父母付了整整一个小时的钱。剩下的45分钟你会做什么？'
        },
        options: [
            { id: 'A', text: { en: '🎮 Play Games: "Good job! Let\'s play video games for the rest of the time. Don\'t tell mom."', th: '🎮 เล่นเกม: "เยี่ยม! เวลาที่เหลือมาเล่นเกมกัน อย่าบอกแม่นะ"', zh: '🎮 玩游戏：“干得好！剩下的时间我们玩电子游戏吧。别告诉妈妈。”' }, consequence: { en: '💀 Easy Way Out. Alex loves you, but he eventually lets it slip. Parents fire you for "babysitting" instead of teaching. Ethics -40.', th: '💀 ทางออกมักง่าย อเล็กซ์รักคุณ แต่เขาก็หลุดปากบอกแม่ พ่อแม่ไล่คุณออกฐาน "รับจ้างเลี้ยงเด็ก" แทนที่จะสอน สถิติจริยธรรม -40', zh: '💀 简单的出路。亚历克斯爱你，但他最终还是说漏了嘴。父母因你在“照看孩子”而不是在教书而解雇了你。职业道德减少40。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 10 } },
            { id: 'B', text: { en: '📚 Advanced Material: "Improvise. Pull up 9th-grade algebra (he is in 6th grade). Challenge him until he struggles."', th: '📚 เนื้อหาขั้นสูง: "ด้นสดเลย เอาเลขเกรด 9 มาให้ทำ (เขาอยู่เกรด 6) ท้าทายจนกว่าเขาจะตึง"', zh: '📚 高级教材：“即兴发挥。拿出九年级代数（他六年级）。挑战他，直到他感到吃力。”' }, consequence: { en: '✅ Potentail Unlocked. Alex engages. He realizes learning can be hard. Parents are thrilled you are "pushing boundaries." Competence +50.', th: '✅ ปลดล็อกศักยภาพ อเล็กซ์สนุก เขาตระหนักว่าการเรียนก็ยากได้ พ่อแม่ปลื้มที่คุณ "ขยายขีดจำกัด" สถิติความสามารถ +50', zh: '✅以此。亚历克斯以此。他意识到学习可能很难。父母很高兴你在“打破界限”。运营能力增加50。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 40 } },
            { id: 'C', text: { en: '👋 End Early: "You are done. I\'m going home. I\'ll only charge you for 15 minutes."', th: '👋 กลับก่อน: "เสร็จแล้ว ครูสวยกลับละ คิดเงินแค่ 15 นาทีพอ"', zh: '👋 提早结束：“你做完了。我要回家了。我只收你15分钟的钱。”' }, consequence: { en: '⚖️ Honest but Poor. Parents respect the honesty, but you lose 75% of your income. You can\'t survive on 15-minute gigs. Ethics +50, Competence -20.', th: '⚖️ ซื่อสัตย์แต่จน พ่อแม่นับถือ แต่รายได้หาย 75% คุณอยู่ไม่ได้หรอกงาน 15 นาทีเนี่ย สถิติจริยธรรม +50 ความสามารถ -20', zh: '⚖️ 诚实但贫穷。父母通过诚实，但你失去了75%的收入。靠15分钟的活儿你活不下去。职业道德增加50，运营能力减少20。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 10 } },
            { id: 'D', text: { en: '🐢 Slow Him Down: "You rushed. Do it again. Neater handwriting. Show every step." Bore him into submission.', th: '🐢 ถ่วงเวลา: "รีบไป ทำใหม่ เขียนให้สวยกว่านี้ แสดงทุกขั้นตอน" ทำให้เขาเบื่อจนยอมจำนน', zh: '🐢 让他慢下来：“你太急了。重做。字迹要工整。展示每一步。”让他无聊到顺从。' }, consequence: { en: '💀 Passion Killer. Alex hates math now. He rebels next session. You killed his spark to save your hour. Innovation -50.', th: '💀 นักฆ่าความหลงใหล อเล็กซ์เกลียดเลขไปเลย เขาต่อต้านในคาบหน้า คุณฆ่าไฟในตัวเขาเพื่อรักษาชั่วโมงสอนของคุณ สถิตินวัตกรรม -50', zh: '💀 激情以此。亚历克斯现在讨厌数学。他在下节课反抗。你为了保住你的课时扼杀了他的火花。创新减少50。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'tut_012',
        text: {
            en: '🤬 The Disrespect: 12-year-old Sam throws his pencil at you and calls you an idiot when he gets a problem wrong. He has behavioral issues, but you are not a therapist.',
            th: '🤬 การไม่ให้เกียรติ: แซม วัย 12 ขวบ ปาดินสอใส่คุณและด่าว่าปัญญาอ่อนตอนทำโจทย์ผิด เขามีปัญหาพฤติกรรม แต่คุณไม่ใช่นักจิตบำบัด',
            zh: '🤬 不尊重：12岁的萨姆做错题时把铅笔扔向你，并叫你白痴。他有行为问题，但你不是治疗师。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Walk Out: "I do not tolerate abuse. End of session. We can try again next week if he apologizes."', th: '🛑 เดินออก: "ฉันไม่ยอมรับการทำร้าย จบคาบแค่นี้ ไว้ลองใหม่สัปดาห์หน้าถ้าเขาขอโทษ"', zh: '🛑 走人：“我不能容忍这种辱骂。课程结束。如果他道歉，我们下周再试。”' }, consequence: { en: '✅ Boundaries Set. Parents are shocked but supportive. Sam realizes he can\'t push you. Respect is earned. Leadership +50.', th: '✅ วางขอบเขต พ่อแม่ตกใจแต่สนับสนุน แซมรู้ว่าล้ำเส้นคุณไม่ได้ ได้รับความเคารพ สถิติการนำ +50', zh: '✅ 设定界限。父母很震惊但表示支持。萨姆意识到以此逼你。赢得了尊重。领导力增加50。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '😡 Yell Back: "Pick that up NOW! Don\'t you dare speak to me like that!" Establish dominance.', th: '😡 ตะคอกกลับ: "เก็บเดี๋ยวนี้! อย่าบังอาจพูดกับฉันแบบนั้น!" ข่มให้กลัว', zh: '😡 吼回去：“以此拣起来！你敢那样跟我说话！”确立统治地位。' }, consequence: { en: '⚠️ Fight or Flight. It works temporarily, but creates a hostile environment. You are modeling aggression. Ethics -20.', th: '⚠️ สู้หรือหนี ได้ผลชั่วคราวแต่บรรยากาศแย่มาก คุณกำลังเป็นตัวอย่างความก้าวร้าว สถิติจริยธรรม -20', zh: '⚠️ 战斗或逃跑。暂时有效，但制造了敌对环境。你在示范攻击性。职业道德减少20。' }, stats: { competence: 30, ethics: 20, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🥺 Tolerate: "It\'s okay, Sam. Let\'s try again." (Maintain paycheck).', th: '🥺 อดทน: "ไม่เป็นไรนะแซม เอาใหม่" (รักษาเงินค่าจ้าง)', zh: '🥺 忍受：“没关系，萨姆。我们再试一次。”（保住薪水）。' }, consequence: { en: '💀 Doormat. Sam loses all respect. The abuse escalates to spitting and kicking. You dread going to work. Leadership -60.', th: '💀 พรมเช็ดเท้า แซมหมดความเกรงใจ การทำร้ายรุนแรงขึ้นเป็นถุยน้ำลายและเตะ คุณเกลียดการไปสอน สถิติการนำ -60', zh: '💀 受气包。萨姆完全失去了尊重。辱骂升级为吐口水和踢人。你害怕去工作。领导力减少60。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '🎮 Gamify It: "Every time you insult me, you lose 5 minutes of iPad time. Every polite correction earns 1 minute."', th: '🎮 เปลี่ยนเป็นเกม: "ทุกครั้งที่ด่าครู หักเวลา iPad 5 นาที ทุกครั้งที่พูดดีๆ ได้เพิ่ม 1 นาที"', zh: '🎮 游戏化：“每次你侮辱我，就扣掉5分钟iPad时间。每次礼貌改正赚1分钟。”' }, consequence: { en: '✨ Behavioral Hack. You speak his language. He stops cursing to save his gaming time. Parents adopt your system. Innovation +50.', th: '✨ แฮ็กพฤติกรรม คุณพูดภาษาเขา เขาเลิกด่าเพื่อรักษาเวลาเล่นเกม พ่อแม่เอาวิธีคุณไปใช้ด้วย สถิตินวัตกรรม +50', zh: '✨ 行为黑客。你说他的语言。为了保住游戏时间，他不再咒骂。父母采纳了你的系统。创新增加50。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'tut_013',
        text: {
            en: '🍷 The Inappropriate Invitation: A single dad client texts you at 10 PM: "Great progress with Tim! Would love to discuss his future over dinner and wine this Friday 😉". Professional lines are blurring.',
            th: '🍷 คำเชิญที่ไม่เหมาะสม: ลูกค้าพ่อเลี้ยงเดี่ยวส่งข้อความมาตอน 4 ทุ่ม: "ทิมพัฒนาการเยี่ยมมาก! อยากคุยเรื่องอนาคตแกกับคุณมื้อค่ำพร้อมไวน์สักหน่อยวันศุกร์นี้ 😉" เส้นแบ่งมืออาชีพเริ่มเบลอ',
            zh: '🍷 不恰当的邀请：一位单身父亲客户晚上10点给你发短信：“蒂米进步很大！想这周五共以此晚餐和红酒，讨论一下他的未来😉”。职业界限正在变得模糊。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Firm Boundary: "I\'m happy to discuss Tim during our scheduled session time. I don\'t mix business with personal time."', th: '🛑 ขีดเส้นชัด: "ยินดีคุยเรื่องทิมในเวลาเรียนปกติค่ะ ฉันไม่ปนเรื่องงานกับเวลาส่วนตัว"', zh: '🛑 坚定界限：“我很乐意在预定的辅导时间内讨论蒂米。我不把工作和私人时间混为一谈。”' }, consequence: { en: '✅ Professionalism Saved. He feels slightly awkward but respects it. The tutoring continues purely professionally. Competence +40.', th: '✅ รักษาความเป็นมืออาชีพ เขารู้สึกหน้าแตกนิดหน่อยแต่ยอมรับ การสอนดำเนินต่อไปแบบมืออาชีพล้วนๆ สถิติความสามารถ +40', zh: '✅以此。他感到有点尴尬，但表示尊重。辅导继续进行，纯粹是职业性的。运营能力增加40。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '👻 Ignore: Don\'t reply. Just show up next Tuesday like nothing happened.', th: '👻 เมิน: ไม่ตอบ โผล่ไปสอนวันอังคารเหมือนไม่มีอะไรเกิดขึ้น', zh: '👻 忽视：不回。下周二照常出现，就像什么都没发生一样。' }, consequence: { en: '🤔 Ambiguity. The awkwardness hangs in the air. He might try again. Unresolved tension. Leadership -10.', th: '🤔 คลุมเครือ ความอึดอัดลอยฟุ้งในอากาศ เขาอาจจะลองอีก ยังมีความตึงเครียดค้างคา สถิติการนำ -10', zh: '🤔 模棱两可。尴尬的气氛弥漫在空气中。他可能会再试一次。未解决的紧张关系。领导力减少10。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '❤️ Go for it: "Sounds lovely! See you there." (You are lonely too).', th: '❤️ ไปดิ: "ฟังดูดีจัง! เจอกันค่ะ" (คุณก็เหงาเหมือนกัน)', zh: '❤️ 去吧：“听起来不错！到时候见。”（你也寂寞）。' }, consequence: { en: '🎲 Massive Risk. If the date goes bad, you lose the job. If it goes well, things get complicated. Most likely, you lose the client eventually. Ethics -40.', th: '🎲 เสี่ยงมหาศาล ถ้าเดตพัง คุณตกงาน ถ้าเดตดี เรื่องก็ยุ่งเหยิง ส่วนใหญ่น่าจะเสียลูกค้าในที่สุด สถิติจริยธรรม -40', zh: '🎲 巨大风险。如果约会搞砸了，你就会失去这份工作。如果顺利，事情会变得复杂。最有可能的是，你最终会失去这个客户。职业道德减少40。' }, stats: { competence: 20, ethics: 10, leadership: 0, innovation: 10 } },
            { id: 'D', text: { en: '📧 Rediredct: "Let\'s keep updates to email please. Easier for me to track his records."', th: '📧 เปลี่ยนช่องทาง: "ขออัปเดตทางอีเมลนะคะ ง่ายต่อการเก็บประวัติของน้องด้วย"', zh: '📧 重定向：“请通过电子邮件更新情况。方便我跟踪他的记录。”' }, consequence: { en: '🛡️ Soft Reject. Effective. He gets the hint without being directly embarrassed. Safe choice.', th: '🛡️ ปฏิเสธแบบอ้อมๆ ได้ผล เขารู้ตัวโดยไม่ต้องขายหน้าตรงๆ ทางเลือกที่ปลอดภัย', zh: '🛡️ 委婉拒绝。有效。他明白了暗示，并没有直接感到尴尬。安全的选择。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'tut_014',
        text: {
            en: '⏰ The Late Cancellation: Mrs. G cancels 15 minutes before the session. "Soccer ran late! Sorry!" Your policy says 24-hour notice or charge full price. She is a long-time client.',
            th: '⏰ ยกเลิกกะทันหัน: คุณนาย G ยกเลิก 15 นาทีก่อนเริ่ม "บอลเลิกช้า! โทษที!" นโยบายบอกต้องแจ้ง 24 ชม. ไม่งั้นเก็บตังค์เต็ม เธอเป็นลูกค้าเก่าแก่',
            zh: '⏰ 迟到的取消：G太太在课前15分钟取消了。“足球赛晚了！抱歉！”你的政策规定需提前24小时通知，否则全额收费。她是老客户。'
        },
        options: [
            { id: 'A', text: { en: '💰 Charge Full: "Policy is policy. I reserved this time for you. I have to charge."', th: '💰 เก็บเต็ม: "กฎคือกฎ ผมกั้นเวลาไว้ให้คุณแล้ว ผมต้องขอคิดเงินครับ"', zh: '💰 全额收费：“政策就是政策。我为你预以此这个时间。我必须收费。”' }, consequence: { en: '😐 Tension. She pays but is annoyed. "After all these years?" Relationship cools. She starts looking for other tutors.', th: '😐 ตึงเครียด เธอจ่ายแต่รำคาญ "โธ่ อุตส่าห์เรียนมาตั้งหลายปีเนี่ยนะ?" ความสัมพันธ์เย็นชา เธอเริ่มหาคนใหม่', zh: '😐 紧张。她付了钱但很恼火。“这么多年了还这样？”关系变冷。她开始寻找其他导师。' }, stats: { competence: 40, ethics: 40, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🆓 Waive It: "No worries! It happens. See you next week." (Keep the peace).', th: '🆓 หยวนๆ: "ไม่เป็นไรครับ! มีกันได้ เจอกันอาทิตย์หน้า" (รักษาความสงบ)', zh: '🆓 免除：“别担心！常有的事。下周见。”（保持和平）。' }, consequence: { en: '⚠️ Slippery Slope. She cancels late again 2 weeks later. You taught her that your time has no value. Leadership -30.', th: '⚠️ ทางลาดลื่น อีก 2 อาทิตย์เธอก็เบี้ยวอีก คุณสอนให้เธอรู้ส่าเวลาของคุณไม่มีค่า สถิติการนำ -30', zh: '⚠️ 滑坡效应。2周后她又迟迟取消。你教会了她你的时间没有价值。领导力减少30。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'C', text: { en: '⚖️ One-Time Pass: "I\'ll waive it this time because you are a loyal client. But next time I have to enforce the fee."', th: '⚖️ ละเว้นครั้งเดียว: "ครั้งนี้ผมยกให้เพราะเป็นลูกค้าประจำ แต่ครั้งหน้าต้องปรับจริงนะครับ"', zh: '⚖️ 一次性通过：“这次我免除费用，因为您是忠实客户。但下次我必须收取费用。”' }, consequence: { en: '✅ Balanced. You showed flexibility + firmness. She appreciates the "gift" but knows the rule is real now. Relationship strengthened.', th: '✅ สมดุล คุณแสดงความยืดหยุ่น + ความเด็ดขาด เธอซึ้งใจใน "ของขวัญ" แต่รู้แล้วว่ากฎคือกฎ ความสัมพันธ์แน่นแฟ้นขึ้น', zh: '✅ 平衡。你展示了灵活性+坚定性。她感激这份“礼物”，但也知道规则现在是真实的。关系加强了。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'D', text: { en: '💸 Half Charge: "I\'ll split the difference with you. Pay 50% for the missed slot."', th: '💸 คนละครึ่ง: "พบกันครึ่งทางครับ จ่าย 50% สำหรับคาบที่แล้ว"', zh: '💸 半价收费：“我和您分摊。为错过的时段付50%。”' }, consequence: { en: '🤝 Fairness. A reasonable compromise. Nobody is happy, but nobody is angry. Business continues.', th: '🤝 แฟร์ๆ ประนีประนอมที่สมเหตุสมผล ไม่มีใครแฮปปี้แต่ไม่มีใครโกรธ ธุรกิจเดินต่อ', zh: '🤝 公平。合理的折衷方案。没人高兴，但也没人生气。生意继续。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 30 } }
        ]
    },
    {
        id: 'tut_015',
        text: {
            en: '🧠 The Subject Stretch: You were hired for Math. The student asks, "Can you help me with Spanish? I have a test tomorrow." You know very basic "Hola". The Mom says "Sure, go ahead!"',
            th: '🧠 สอนข้ามวิชา: คุณถูกจ้างมาสอนเลข นักเรียนถาม "ช่วยติวสเปนหน่อยได้ไหม พรุ่งนี้มีสอบ" คุณรู้แค่ "Hola" แม่ตะโกนบอก "เอาเลยลูก!"',
            zh: '🧠 学科延伸：你被雇教数学。学生问：“你能帮我补习西班牙语吗？我明天有考试。”你只会很基础的“Hola”。妈妈说：“当然，教吧！”'
        },
        options: [
            { id: 'A', text: { en: '🤥 Fake It: "Sure! Vamos!" (Use Google Translate secretly and pray).', th: '🤥 มั่วไปก่อน: "ได้สิ! Vamos!" (แอบเปิด Google Translate แล้วสวดมนต์)', zh: '🤥以此：“当然！Vamos！”（偷偷用谷歌翻译并以此）。' }, consequence: { en: '💀 Disaster. You explain grammar wrong. He fails the test. You look incompetent in TWO subjects now. Competence -60.', th: '💀 หายนะ คุณอธิบายไวยากรณ์ผิด เขาสอบตก ตอนนี้คุณดูโง่ทั้ง "สอง" วิชาเลย สถิติความสามารถ -60', zh: '💀 灾难。你解释错了语法。他考试不及格。你现在在两门课上都显得能力不足。运营能力减少60。' }, stats: { competence: 10, ethics: 20, leadership: 10, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Admit Ignorance: "I am not qualified to teach Spanish. I won\'t take your money to guess. Let\'s stick to Math."', th: '🛑 ยอมรับว่าไม่รู้: "ครูไม่มีคุณสมบัติสอนสเปน ครูไม่รับเงินเพื่อมานั่งเดาหรอก กลับมาทำเลขเถอะ"', zh: '🛑 承认无知：“我没有资格教西班牙语。我不会收你的钱去以此。我们还是以此数学吧。”' }, consequence: { en: '✅ Trust Integrity. Mom respects that you don\'t scam them. You save them money and save your reputation.', th: '✅ ความน่าเชื่อถือ แม่นับถือที่คุณไม่หลอกกินเงิน เซฟเงินเขาแถมเซฟชื่อเสียงเรา', zh: '✅ 信任以此。妈妈尊重你没有骗他们。你为他们省了钱，也保住了你的声誉。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🤝 Learn Together: "I don\'t know Spanish well, but I can help you use study flashcards and quiz you. I\'m a study partner today, not a teacher."', th: '🤝 เรียนไปด้วยกัน: "ครูไม่เก่งสเปน แต่ครูช่วยทวนบัตรคำและทดสอบเธอได้ วันนี้ครูเป็นเพื่อนคู่คิดนะ ไม่ใช่ครูสอน"', zh: '🤝 一起学：“我西班牙语不太好，但我可以帮你用抽认卡并考考你。我今天是个学习伙伴，不是老师。”' }, consequence: { en: '✨ Honest Support. You facilitate his studying without teaching bad content. He studies effectively. Good pivot.', th: '✨ สนับสนุนอย่างซื่อสัตย์ คุณช่วยอำนวยความสะดวกโดยไม่สอนผิดๆ เขาได้เรียนจริงจัง การปรับตัวที่ดี', zh: '✨ 诚实的支持。你在不教授错误内容的情况下促进了他的学习。他学习很有效。很好的以此。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '📞 Refer a Friend: "No, but my friend Sarah is fluent. Let me text her right now."', th: '📞 แนะนำเพื่อน: "ไม่ไหว แต่เพื่อนครูชื่อซาร่าพูดคล่อง ปรื๋อ เดี๋ยวไลน์หาเขาให้"', zh: '📞 推荐朋友：“不行，但我的朋友莎拉很流利。我以此给她发短信。”' }, consequence: { en: '🌟 Network Win. Sarah helps him. Parents love that you have connections. You look like a resource hub. Leadership +50.', th: '🌟 ชนะด้วยเครือข่าย ซาร่ามาช่วยได้ พ่อแม่ชอบที่คุณกว้างขวาง คุณดูเป็นศูนย์รวมทรัพยากร สถิติการนำ +50', zh: '🌟 网络获胜。莎拉帮了他。父母喜欢你有以此。你看起来像个资源中心。领导力增加50。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 30 } }
        ]
    },

    {
        id: 'tut_016',
        text: {
            en: '✍️ The Essay Mill: A wealthy student offers you $200 just to write his 10-page history essay for him. "It’s not tutoring, it’s just helping," he says. You really need the money for rent.',
            th: '✍️ โรงงานรับจ้างเขียน: นักเรียนบ้านรวยคนหนึ่งเสนอเงินให้คุณ $200 ให้คุณเขียนเรียงความประวัติศาสตร์ 10 หน้าให้ "มันไม่ใช่จ้างสอนหรอก แค่ช่วยๆ กัน" เขาว่าอย่างนั้น คุณเองก็กำลังขัดสนเรื่องค่าเช่าบ้านพอดี',
            zh: '✍️ 论文工厂：一名富裕的学生出价200美元，只让你帮他写一篇10页的历史论文。“这不是辅导，只是帮忙，”他说。你真的很需要这笔钱交房租。'
        },
        options: [
            { id: 'A', text: { en: '💰 Take the Deal: "One time only. Business is business."', th: '💰 รับงาน: "แค่ครั้งเดียวเท่านั้นนะ ธุรกิจก็คือธุรกิจ"', zh: '💰 接受交易：“下不为例。生意就是生意。”' }, consequence: { en: '💀 Moral Decay. You get the cash, but you lose respect for yourself. If the school finds out, you are blacklisted forever. Ethics -50.', th: '💀 คุณธรรมเสื่อมถอย คุณได้เงินแต่เสียความนับถือตัวเอง ถ้าโรงเรียนรู้เข้า คุณจะโดนแบล็คลิสต์ตลอดกาล สถิติจริยธรรม -50', zh: '💀 道德败坏。你拿到了现金，但失去了自尊。如果学校发现，你将被永久列入黑名单。职业操守减少50。' }, stats: { competence: 30, ethics: 10, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Hard No: "I tutor students to LEARN, not to cheat. Writing it for you is against my core values."', th: '🛑 ปฏิเสธเสียงแข็ง: "ครูสอนให้พวกเธอ "เรียนรู้" ไม่ได้สอนให้โกง การเขียนให้เลยขัดกับหลักการของครู"', zh: '🛑 坚决拒绝：“我辅导学生是为了让他们学习，而不是作弊。替你写论文违背了我的核心价值观。”' }, consequence: { en: '✅ High Ground. You lose the money, but your reputation for integrity spreads. Serious parents want YOU specifically now.', th: '✅ ยืนหยัดในความถูกต้อง คุณเสียเงินแต่ได้ชื่อเสียงเรื่องความซื่อสัตย์ พ่อแม่ที่จริงจังกับการเรียนจะเจาะจงมาหาคุณ สถิติจริยธรรม +50', zh: '✅ 高尚。你失去了这笔钱，但你正直的声誉传播开来。现在认真的家长专门指名要找你。' }, stats: { competence: 50, ethics: 70, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '📝 The Compromise: "I won\'t write it, but I\'ll charge my normal rate to help you OUTLINE it and check your sources. YOU write the words."', th: '📝 ประนีประนอม: "ครูไม่เขียนให้ แต่ครูจะคิดค่าสอนปกติเพื่อช่วยเธอ "วางโครงเรื่อง" และเช็คแหล่งอ้างอิง แต่เธอต้องเขียนเองนะ"', zh: '📝 折衷方案：“我不会代写，但我会按正常费率收以此帮你会以此大纲并检查你的以此。由你以此。”' }, consequence: { en: '🤝 Proper Path. You convert a cheat request into a learning session. The student actually learns something. Ethics +20.', th: '🤝 ทางที่ถูกที่ควร คุณเปลี่ยนคำขอโกงๆ ให้กลายเป็นบทเรียน นักเรียนได้เรียนรู้จริงๆ สถิติจริยธรรม +20', zh: '🤝 正确的道路。你将一宗以此请求转化为一次学习课程。学生实际上学到了一些东西。职业操守增加20。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '👨‍🏫 The Referral: "I don\'t do that, but I can recommend a writing workshop that teaches essay structure."', th: '👨‍🏫 การแนะนำ: "ครูไม่รับทำครับ แต่ครูแนะนำเวิร์กชอปการเขียนที่สอนโครงสร้างเรียงความให้ได้นะ"', zh: '👨‍🏫 推荐：“我不做那个，但我可以推荐一个教授论文结构的写作以此。”' }, consequence: { en: '😐 Professional Boundary. You stayed clean but didn\'t help much with the immediate need. The student goes elsewhere for the "help."', th: '😐 รักษาขอบเขต คุณขาวสะอาดแต่ไม่ได้ช่วยแก้ปัญหาตรงหน้าเท่าไหร่ นักเรียนเลยไปหา "คนช่วย" ที่อื่นแทน', zh: '😐 职业边界。你保持了清廉，但对眼前的需求没帮上什么忙。学生去别处寻求“帮助”了。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 } }
        ]
    },

    {
        id: 'tut_017',
        text: {
            en: '⚔️ The Poaching War: A rival tutoring center opens next door. They offer free iPads to sign up. 3 of your students quit. They are aggressively targeting your client list.',
            th: '⚔️ สงครามแย่งตัว: ศูนย์ติวคู่แข่งมาเปิดข้างๆ แจก iPad ฟรีถ้าสมัครเรียน นักเรียนคุณลาออกไป 3 คน พวกเขากำลังเจาะฐานลูกค้าคุณอย่างดุเดือด',
            zh: '⚔️ 挖角战争：一家竞争对手辅导中心在隔壁开业。他们注册就送免费iPad。你的3名学生退出了。他们正咄咄逼人地瞄准你的客户名单。'
        },
        options: [
            { id: 'A', text: { en: '📉 Lower Prices: "I\'ll match their prices! 50% off for everyone!" Panic mode.', th: '📉 ลดราคา: "ฉันจะลดสู้! ลด 50% ให้ทุกคนเลย!" โหมดตื่นตระหนก', zh: '📉 降价：“我跟他们比价！全员半价！”恐慌模式。' }, consequence: { en: '💀 Race to Bottom. You can\'t compete with a funded chain. You go broke in 2 months. Current clients think you were overcharging before.', th: '💀 แข่งกันลงเหว คุณสู้ทุนใหญ่ไม่ได้หรอก เจ๊งใน 2 เดือน ลูกค้าเก่ายังคิดว่าเมื่อก่อนคุณโขกราคาด้วย', zh: '💀 逐底竞争。你无法与有资金支持的连锁机构竞争。你在2个月内破产。现有客户认为你以前收费过高。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '💎 Premium Pivot: "Let them take the bargain seekers. I am raising my prices and marketing as \'Elite & Personalized\'. No iPads, just results."', th: '💎 พลิกเป็นพรีเมียม: "ปล่อยพวกเขาเอาคนชอบของถูกไป ฉันจะขึ้นราคาและขายความเป็น \'Elite & Personalized\' ไม่มี iPad มีแต่ผลลัพธ์"', zh: '💎 高端转型：“让他们带走以此这便宜的人。我涨价，并以此‘精英&个性化’。没有iPad，只有结果。”' }, consequence: { en: '✅ Brand Victory. You lose quantity but gain quality. Parents who care about education over gadgets flock to you. Profit increases.', th: '✅ ชัยชนะของแบรนด์ เสียจำนวนแต่ได้คุณภาพ พ่อแม่ที่สนการศึกษามากกว่าของแถมแห่มาหาคุณ กำไรเพิ่มขึ้น', zh: '✅ 品牌胜利。你失去了数量但获得了质量。更看重教育而非电子产品的家长涌向你。利润增加。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🕵️ Counter-Attack: "Post fake reviews about their center being dirty and their tutors being unqualified."', th: '🕵️ โจมตีกลับ: "โพสต์รีวิวปลอมว่าศูนย์เขาสกปรกและครูไม่ได้มาตรฐาน"', zh: '🕵️ 反击：“发布虚假评论，说他们的中心很脏，导师不合格。”' }, consequence: { en: '💀 Legal Nightmare. They track the IP address. You get a cease & desist letter. Your reputation is ruined locally.', th: '💀 ฝันร้ายทางกฎหมาย เขาตามเลข IP เจอ คุณได้รับจดหมายเตือน ชื่อเสียงในท้องถิ่นพังยับ', zh: '💀 法律噩梦。他们追踪了IP地址。你收到了停止侵权通知函。你在当地的名声毁了。' }, stats: { competence: 20, ethics: -40, leadership: 0, innovation: 10 } },
            { id: 'D', text: { en: '🤝 Community Focus: "Host free weekend workshops for exams. Remind the community you are a person, not a corporation."', th: '🤝 เน้นชุมชน: "จัดเวิร์กชอปติวสอบฟรีสุดสัปดาห์ เตือนให้ชุมชนรู้ว่าคุณคือ \'คน\' ไม่ใช่บริษัท"', zh: '🤝 社区聚焦：“以此周末考前工作坊。提醒社区你是一个人，而不是一家公司。”' }, consequence: { en: '🌟 Loyalty Shield. The community rallies around you. Students beg parents to stay with "Teacher [Name]". You survive the attack.', th: '🌟 เกราะป้องกันด้วยความภักดี ชุมชนรวมพลังช่วยคุณ นักเรียนขอร้องพ่อแม่ให้เรียนกับ "ครู [ชื่อ]" ต่อ คุณรอดมาได้', zh: '🌟 忠诚以此。社区团结在你周围。学生求父母留在“老师[名字]”这里。你挺过了这次攻击。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 30 } }
        ]
    },

    {
        id: 'tut_018',
        text: {
            en: '🧠 Mental Health Check: You notice persistent cuts on the arm of Sarah, 14. She jokes about "ending it" during math. She begs you not to tell her stressful parents.',
            th: '🧠 เช็คสุขภาพจิต: คุณสังเกตเห็นรอยกรีดที่แขนของซาร่า วัย 14 เธอล้อเล่นเรื่อง "จะจบชีวิต" ระหว่างเรียนเลข เธอขอร้องไม่ให้คุณบอกพ่อแม่ที่เครียดจัดของเธอ',
            zh: '🧠 心理健康检查：你发现14岁的莎拉手臂上有持续的割痕。她在数学课上开玩笑说要“结束这一切”。她以此你不要告诉她压力很大的父母。'
        },
        options: [
            { id: 'A', text: { en: '🤐 Keep Secret: "I promise. But you have to promise to stop. We are friends."', th: '🤐 เก็บความลับ: "ครูสัญญา แต่เธอต้องสัญญาว่าจะหยุดนะ เราเป็นเพื่อนกัน"', zh: '🤐 保守秘密：“我答应。但你必须答应停止这样做。我们是朋友。”' }, consequence: { en: '💀 Tragedy. A teacher is a mandated reporter. She attempts suicide 3 weeks later. You feel guilt forever and could face legal negligence charges.', th: '💀 โศกนาฏกรรม ครูมีหน้าที่ต้องรายงานตามกฎหมาย เธอพยายามฆ่าตัวตาย 3 สัปดาห์ต่อมา คุณรู้สึกผิดตลอดชีวิตและอาจโดนฟ้องฐานละเลยหน้าที่', zh: '💀 悲剧。老师是法定报告人。3周后她试图自杀。你会永远以此，并可能面临法律疏忽指控。' }, stats: { competence: 10, ethics: -20, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: '📢 Inform Parents Gently: "Speak to the parents strictly about \'concerns over pressure\' without mentioning the cuts yet."', th: '📢 บอกพ่อแม่เบาๆ: "คุยกับพ่อแม่เรื่อง \'ความกังวลเรื่องความกดดัน\' โดยยังไม่พูดเรื่องรอยกรีด"', zh: '📢 委婉以此父母：“严肃地与父母谈论‘关于压力的担忧’，暂不提及割痕。”' }, consequence: { en: '⚠️ Too Subtle. Parents dismiss it as "teenage drama." They push her harder. The situation escalates.', th: '⚠️ เบาเกินไป พ่อแม่มองว่าเป็น "ดราม่าวัยรุ่น" แล้วกดดันเธอหนักกว่าเดิม สถานการณ์แย่ลง', zh: '⚠️ 太以此了。父母以此为“青少年闹剧”。他们逼她更紧。局势升级。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🛡️ Mandated Report: "I care about you too much to keep this secret. I am calling your parents and the school counselor NOW."', th: '🛡️ รายงานตามหน้าที่: "ครูห่วงเธอเกินกว่าจะปิดเรื่องนี้ ครูจะโทรหาพ่อแม่และครูแนะแนว \'เดี๋ยวนี้\'"', zh: '🛡️ 强制报告：“我很在乎你，不能以此这个秘密。我现在就给你父母和学校辅导员打电话。”' }, consequence: { en: '✅ Life Saver. Sarah screams and hates you today. But she gets hospitalized and treated. 5 years later, she invites you to her graduation and thanks you.', th: '✅ ผู้ช่วยชีวิต ซาร่ากรีดร้องและเกลียดคุณวันนี้ แต่เธอได้รับการรักษา 5 ปีต่อมา เธอเชิญคุณไปงานรับปริญญาและขอบคุณคุณ', zh: '✅ 救星。莎拉今天尖叫着恨你。但她住以此接受了治疗。5年后，她以此你参加她的毕业典礼并以此你。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'D', text: { en: '🩺 Refer Out: "I can\'t tutor you anymore until you see a therapist. I am not equipped for this."', th: '🩺 ส่งต่อ: "ครูสอนเธอต่อไม่ได้จนกว่าเธอจะไปหาหมอ ครูรับมือเรื่องนี้ไม่ไหว"', zh: '🩺以此：“在你以此以此治疗师之前，我不能再辅导你了。我不具备以此能力。”' }, consequence: { en: '⚖️ Self-Protection. You avoid liability, but abandoning her in crisis feels cold. She feels rejected.', th: '⚖️ ป้องกันตัวเอง คุณเลี่ยงความรับผิดชอบ แต่การทิ้งเธอตอนวิกฤตมันดูเย็นชา เธอรู้สึกโดนปฏิเสธ', zh: '⚖️ 自我保护。你避免了责任，但在危机中抛弃她感觉很冷漠。她感到被拒绝。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } }
        ]
    },

    {
        id: 'tut_019',
        text: {
            en: '🐄 The Cash Cow: Kevin comes every student. He watches TikToks. His rich parents pay on time and don\'t check grades. You have earned $5,000 this year for teaching nothing.',
            th: '🐄 วัวนม (ตัวเงินตัวทอง): เควินมาทุกคาบ นั่งดู TikTok พ่อแม่รวยจ่ายตรงเวลาและไม่เช็คเกรด ปีนี้คุณได้เงินฟรีๆ $5,000 โดยไม่ได้สอนอะไรเลย',
            zh: '🐄 现金奶牛：凯文每节课都来。他刷TikTok。他富有的父母按时以此且不查成绩。今年你什么都没教就赚以此5000美元。'
        },
        options: [
            { id: 'A', text: { en: '🤫 Keep Milking: "Don\'t rock the boat. Easy money funds my other projects."', th: '🤫 รีดนมต่อ: "อย่าหาเรื่องใส่ตัว เงินง่ายๆ เอาไว้ทุนทำโปรเจกต์อื่น"', zh: '🤫 继续以此：“别以此。以此的钱资助我的其他项目。”' }, consequence: { en: '⚠️ Hollow Success. You get richer but feel like a fraud. Eventually, Kevin fails a major exam and you are blamed instantly.', th: '⚠️ ความสำเร็จกลวงๆ รวยขึ้นแต่รู้สึกเหมือนนักต้มตุ๋น สุดท้ายเควินสอบตกวิชาหลักและคุณโดนโทษทันที', zh: '⚠️ 空虚的成功。你变以此了，但感觉像个骗子。最终，凯文在一场大以此中不及格，你立刻受到指责。' }, stats: { competence: 20, ethics: -20, leadership: 0, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Fire the Client: "I cannot take your money. Kevin is not learning. Please find a tutor who can reach him."', th: '🛑 ไล่ลูกค้าออก: "ครูรับเงินไม่ได้ เควินไม่เรียนรู้เลย ไปหาคนที่เข้ากับเขาได้เถอะ"', zh: '🛑 解雇客户：“我不能收你们的钱。凯文没在以此。请以此一个能以此以此以此的导师。”' }, consequence: { en: '✅ Ethical Exit. Parents are shocked by your honesty. They might even convince Kevin to try harder so you come back. Respect earned.', th: '✅ ทางออกที่มีจริยธรรม พ่อแม่อึ้งในความซื่อสัตย์ พวกเขาอาจไปกล่อมเควินให้ตั้งใจเพื่อขอให้คุณกลับมา ได้รับความเคารพ', zh: '✅ 道德以此。父母对你的以此以此以此。他们以此以此以此凯文以此以此，这样你以此以此。赢得了以此。' }, stats: { competence: 40, ethics: 60, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '📱 TikTok Teaching: "If you like TikTok, you have to make a TikTok explaining this Physics concept. If it gets 10 likes, we end early."', th: '📱 สอนผ่าน TikTok: "ถ้าชอบ TikTok นัก ก็ต้องอัดคลิปอธิบายฟิสิกส์เรื่องนี้ ถ้าได้ 10 ไลค์ เลิกเรียนก่อนเวลา"', zh: '📱 TikTok教学：“如果你喜欢TikTok，你就得以此以此解释以此以此以此的TikTok视频。如果以此10个赞，我们以此以此。”' }, consequence: { en: '🌟 Innovation Hack. Kevin loves it. He actually learns physics to make the content. His grades improve. You found a way in.', th: '🌟 แฮ็กนวัตกรรม เควินชอบมาก เขาตั้งใจเรียนฟิสิกส์เพื่อมาทำคอนเทนต์ เกรดดีขึ้น คุณหาทางเข้าถึงเขาได้แล้ว', zh: '🌟 创新黑客。凯文喜欢的以此。他以此以此以此物理来制作以此。以此成绩以此。你以此了以此。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 60 } },
            { id: 'D', text: { en: '👮 Strict Mode: "Confiscate phone at the door. Stare at him until he works. Be a prison guard."', th: '👮 โหมดเข้มงวด: "ยึดโทรศัพท์หน้าประตู จ้องหน้าจนกว่าจะทำงาน เป็นผู้คุมคุก"', zh: '👮以此模式：“在以此没收手机。以此着他直到他以此。以此以此狱警。”' }, consequence: { en: '😐 Miserable Hours. He hates you. You hate him. He does the bare minimum. Sustainable but soul-crushing.', th: '😐 ชั่วโมงแห่งความทุกข์ เขาเกลียดคุณ คุณเกลียดเขา เขาทำแบบขอไปที ยั่งยืนนะแต่จิตใจพัง', zh: '😐 痛苦的以此。他恨你。你恨他。他以此以此以此。以此以此以此摧残以此。' } }
        ]
    },

    {
        id: 'tut_020',
        text: {
            en: '🏘️ The Unsafe Environment: A desperate mom offers high pay ($60/hr) for you to tutor her son. But they live in a neighborhood with active gang violence. You hear gunshots during the first session.',
            th: '🏘️ สภาพแวดล้อมไม่ปลอดภัย: แม่ผู้สิ้นหวังเสนอเงินสูง ($60/ชม.) ให้ไปสอนลูกเธอ แต่บ้านอยู่ในถิ่นแก๊งอันธพาล คุณได้ยินเสียงปืนตั้งแต่วันแรก',
            zh: '🏘️ 不以此的环境：以此绝望的母亲以此以此（60美元/小时）以此你以此她的以此。但他们住在以此以此帮派以此以此的以此。你在以此以此以此以此听到以此以此。'
        },
        options: [
            { id: 'A', text: { en: '🏃 Quit Safely: "Focus on your safety. Apologize and say you are limiting your travel radius."', th: '🏃 ลาออกแบบเซฟๆ: "เอาความปลอดภัยตัวเองก่อน ขอโทษและบอกว่าจำกัดพื้นที่รับงานแล้ว"', zh: '🏃 安全退出：“关注你的安全。道歉并表示你正在以此你的出行范围。”' }, consequence: { en: '🛡️ Safety First. You live to tutor another day. The mom is sad but understands. No income, but no bullet holes.', th: '🛡️ ปลอดภัยไว้ก่อน มีชีวิตไว้สอนวันอื่น แม่เสียใจแต่เข้าใจ ไม่มีรายได้แต่ก็ไม่มีรูกระสุน', zh: '🛡️ 安全第一。你以此以此以此以此以此。母亲很以此但以此。以此以此，但没有以此。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '💻 Virtual Pivot: "I cannot come to the house anymore, it is unsafe. But I will tutor him online for a discounted rate ($40/hr)."', th: '💻 ย้ายไปออนไลน์: "ไปที่บ้านไม่ได้แล้วครับ อันตราย แต่จะสอนออนไลน์ให้ลดราคาเหลือ $40/ชม."', zh: '💻以此以此：“以此以此以此以此以此以此，以此以此以此。但我以此以此以此以此（40美元/小时）以此他以此以此。”' }, consequence: { en: '✅ Vital Compromise. The kid gets the education he desperately needs. You stay safe. You are a bridge for this student.', th: '✅ การพบกันครึ่งทางที่สำคัญ เด็กได้รับการศึกษาที่เขาต้องการมาก คุณปลอดภัย คุณเป็นสะพานเชื่อมโอกาสให้เด็กคนนี้', zh: '✅ 以此的以此。以此以此以此以此以此以此以此的教育。你以此以此。你是以此以此的以此。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 40 } },
            { id: 'C', text: { en: '🦸 Hero Mode: "I\'ll go anyway. This kid needs a role model. I\'m fearless."', th: '🦸 โหมดฮีโร่: "จะไปอยู่ดี เด็กคนนี้ต้องการต้นแบบ ฉันไม่กลัว"', zh: '🦸以此模式：“以此以此以此以此以此。以此以此以此以此榜样。以此以此。”' }, consequence: { en: '🎲 High Risk. You build a bond with the kid, but your car gets broken into. You spend your earnings on car repairs. Stress is sky high.', th: '🎲 เสี่ยงสูง คุณสนิทกับเด็ก แต่รถโดนทุบ เอาเงินค่าสอไปซ่อมรถหมด เครียดจนหัวจะระเบิด', zh: '🎲 高以此。你以此以此以此以此了以此，但你的车以此以此以此。以此以此以此以此以此以此。以此以此以此。' }, stats: { competence: 40, ethics: 60, leadership: 50, innovation: 10 } },
            { id: 'D', text: { en: '📚 Public Library: "Meet me at the City Library downtown. It\'s neutral ground."', th: '📚 ห้องสมุดประชาชน: "มาเจอกันที่ห้องสมุดกลางในเมืองนะ พื้นที่ปลอดภัย"', zh: '📚以此以此：“以此以此以此以此以此以此以此以此。以此以此以此。”' }, consequence: { en: '✅ Logical Fix. Safety for everyone. The kid has to travel, but it exposes him to a better environment (books!). Excellent choice.', th: '✅ การแก้ปัญหาด้วยตรรกะ ปลอดภัยทุกคน เด็กต้องเดินทางหน่อย แต่พาเขามาเจอสิ่งแวดล้อมที่ดีกว่า (หนังสือ!) ทางเลือกเยี่ยม', zh: '✅以此以此。对以此以此以此以此。以此必须以此，但以此以此以此以此以此以此的环境（书！）。以此的以此。' } }
        ]
    },

    {
        id: 'tut_021',
        text: {
            en: '💊 The "Study Aid" Request: A college student, Ben, offers you $50 extra if you can "hook him up" with Adderall for finals week. He casually mentions "Tutors usually know where to get it."',
            th: '💊 คำขอ "ตัวช่วยเรียน": เบน นักศึกษามหาวิทยาลัย เสนอเงินเพิ่ม $50 ถ้าคุณหา Adderall ให้เขาช่วงสอบไฟนอลได้ เขาพูดลอยๆ ว่า "ปกติติวเตอร์เขารู้แหล่งกันทั้งนั้น"',
            zh: '💊 "学习辅助"请求：大学生本以此给你加50美元，如果你能在期末以此以此搞到阿德拉（Adderall）的话。他以此以此以此：“导师以此以此以此哪里以此弄到。”'
        },
        options: [
            { id: 'A', text: { en: '🛑 Hard No: "I am a teacher, not a dealer. Never ask me that again or you are fired."', th: '🛑 ปฏิเสธเสียงแข็ง: "ฉันครู ไม่ใช่คนขายยา อย่าถามแบบนี้อีกไม่งั้นเลิกสอน"', zh: '🛑以此以此：“以此以此以此，以此以此以此。以此以此以此以此，否则以此以此。”' }, consequence: { en: '✅ Boundaries upheld. Ben apologizes and respects you more. You avoided a felony charge.', th: '✅ รักษากฎเหล็ก เบนขอโทษและเกรงใจคุณมากขึ้น คุณเลี่ยงคดีอาญาไปได้', zh: '✅以此以此。以此道歉并以此以此以此。你以此了以此以此。' }, stats: { competence: 40, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🤐 Ignore & Pivot: "Lets focus on time management strategies instead. Coffee works too."', th: '🤐 เมินและเปลี่ยนเรื่อง: "มาโฟกัสกลยุทธ์บริหารเวลาดีกว่า กาแฟก็ช่วยได้นะ"', zh: '🤐以此&以此：“以此以此以此以此以此以此。以此也以此。”' }, consequence: { en: '⚠️ Weak Response. Ben thinks you might help later. He eventually buys pills from a sketchy source and crashes during the exam.', th: '⚠️ ตอบสนองอ่อนไป เบนคิดว่าคุณอาจช่วยทีหลัง สุดท้ายเขาไปซื้อยาเถื่อนมากินแล้วน็อกกลางห้องสอบ', zh: '⚠️以此以此。以此以此你以此以此以此以此。以此以此以此以此以此以此以此以此，以此以此以此以此以此以此。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🏥 Health Talk: "If you need medication, go to a doctor. Self-medicating is dangerous. I can help you build a study schedule so you don\'t need drugs."', th: '🏥 คุยเรื่องสุขภาพ: "ถ้าต้องการยา ไปหาหมอ การใช้ยาเองอันตราย ครูช่วยจัดตารางอ่านหนังสือให้ได้ จะได้ไม่ต้องพึ่งยา"', zh: '🏥 健康以此：“以此以此以此以此药物，以此以此医生。自我用药很危险。我以此以此你以此以此以此计划，以此你以此以此以此药物。”' }, consequence: { en: '🌟 Mentor Moment. You address the root cause (anxiety/poor planning). Ben takes your advice. He passes sober.', th: '🌟 ช่วงเวลาเมนเทอร์ คุณแก้ที่ต้นเหตุ (ความกังวล/วางแผนแย่) เบนเชื่อคุณและสอบผ่านแบบมีสติ', zh: '🌟 导师以此。你以此了以此原因（以此/以此以此）。以此以此了你的以此。他以此以此以此。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 } },
        ]
    },

    {
        id: 'tut_022',
        text: {
            en: '🍻 The College Party: You arrive at your students\' dorm for a late-night session, but they are in the middle of a rager. "Hey tutor! Have a beer! We\'ll do the algebra once we\'re buzzed!"',
            th: '🍻 ปาร์ตี้มหาลัย: คุณไปถึงหอพักนักศึกษาเพื่อติวช่วงดึก แต่พวกเขากำลังปาร์ตี้กันยับ "เฮ้ครู! ดื่มเบียร์ก่อนดิ! เดี๋ยวเมาได้ที่แล้วค่อยมาทำพีชคณิตกัน!"',
            zh: '🍻 大学派对：你以此以此以此以以此以此以此以此以以此以此以此以此。 “以此以此！以此以此！以此以此以此以此以此以此以此以此！”'
        },
        options: [
            { id: 'A', text: { en: '🍻 Join In: "Heck yeah! Algebra and Ale! Let\'s go!"', th: '🍻 จัดไป: "เอาดิ! พีชคณิตกับเบียร์! ลุย!"', zh: '🍻以此：“以此！以此以此以此！以此！”' }, consequence: { en: '💀 Professional Suicide. Photos of you doing a keg stand appear on Instagram. You lose all other serious clients. Short term fun, career over.', th: '💀 ฆ่าตัวตายทางอาชีพ รูปคุณกระดกเบียร์ว่อนไอจี คุณเสียลูกค้าจริงจังทั้งหมด สนุกชั่วคราว จบอาชีพ', zh: '💀以此以此。你以此以此以此以此Instagram。你以此以此以此以此以此。以此以此，以此以此。' }, stats: { competence: 10, ethics: -40, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Strictly Business: "Turn the music off. Sit down. Or I leave and keep the deposit."', th: '🛑 งานคืองาน: "ปิดเพลง นั่งลง ไม่งั้นฉันกลับและยึดมัดจำ"', zh: '🛑以此以此：“以此以此。以此。否则以此以此以此。”' }, consequence: { en: '✅ Command Respect. The "Alpha" move. They sober up slightly and actually study because they are scared of failing. You become legendary.', th: '✅ สั่งให้เคารพ ท่าไม้ตาย "อัลฟ่า" พวกเขาสร่างเมาและเริ่มเรียนเพราะกลัวสอบตก คุณกลายเป็นตำนาน', zh: '✅以此以此。“以此”以此。他们以此以此以此以此，因为以此以此。你以此以此。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 20 } },
            { id: 'C', text: { en: '🏃 Leave Immediately: "This is not a study environment. Good luck tomorrow."', th: '🏃 กลับทันที: "นี่ไม่ใช่ที่เรียน โชคดีพรุ่งนี้ละกัน"', zh: '🏃以此以此：“以此以此以此以此。以此以此。”' }, consequence: { en: '🛡️ Integrity Preserved. You lose the double pay, but sleep well. They all fail.', th: '🛡️ รักศักดิ์ศรี ไม่ได้เงินเบิ้ลแต่นอนหลับสบาย พวกนั้นตกยกแก๊ง', zh: '🛡️以此以此。你以此以此以此，但以此以此。他们以此以此。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '📝 Handouts Only: "I won\'t stay. Here are cheat sheets. $200 each. Bye."', th: '📝 แจกชีท: "ไม่อยู่หรอก อ่ะเอาสรุปไป ใบละ $200 บาย"', zh: '📝以此以此：“我以此以此。以此以此以此。200美元以此。以此。”' } }
        ]
    },
    {
        id: 'tut_023',
        text: {
            en: '📝 The Plagiarism Catch: You are grading a 10th-grader\'s essay. You notice a paragraph that sounds suspiciously like Wikipedia. He admits his older sister wrote it. He begs you not to tell his parents.',
            th: '📝 จับโกง: คุณกำลังตรวจเรียงความเกรด 10 สังเกตว่าพารากราฟหนึ่งเหมือนวิกิพีเดียเป๊ะ เขาชงนว่าพี่สาวเขียนให้ ขอร้องไม่ให้บอกพ่อแม่',
            zh: '📝 抄袭抓包：你正在批改一名高一学生的论文。你发现一段听起来很像维基百科。他承认是他姐姐写的。他求你不要告诉他父母。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Educational Stand: "I won\'t tell them this time, but we are rewriting it NOW from scratch. No shortcuts."', th: '🛡️ ยึดหลักการ: "คราวนี้จะไม่บอก แต่เราต้องเขียนใหม่ทั้งหมด \'เดี๋ยวนี้\' ห้ามโกง"', zh: '🛡️ 教育立场：“这次我不告诉他们，但我们现在要从头重写。不许走捷径。”' }, consequence: { en: '✅ Trust & Learning. He works hard to rewrite it. He learns to value his own voice. Integrity +40.', th: '✅ ความไว้ใจและการเรียนรู้ เขาตั้งใจเขียนใหม่ ได้เรียนรู้ที่จะภูมิใจในผลงานตัวเอง จริยธรรม +40', zh: '✅ 信任与学习。他努力重写。他学会了重视自己的声音。正直感+40。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '📢 Inform Parents: "Honesty is the only way. I have to tell your parents why we are spending today rewriting."', th: '📢 บอกพ่อแม่: "ความซื่อสัตย์สำคัญที่สุด ครูต้องบอกพ่อแม่ว่าทำไมวันนี้เราต้องมานั่งเขียนกันใหม่"', zh: '📢 告知家长：“诚实是唯一的办法。我必须告诉你父母为什么我们今天在重写。”' }, consequence: { en: '⚠️ Relationship Strain. Parents are angry at him. He loses focus and resents you. You did the right thing but lost your bond.', th: '⚠️ ความสัมพันธ์ตึงเครียด พ่อแม่อาละวาดใส่เขา เขาเสียสมาธิและเกลียดคุณ คุณทำสิ่งที่ถูกแต่เสียความสัมพันธ์', zh: '⚠️ 关系紧张。父母生他的气。他失去了焦点并怨恨你。你做了正确的事，但失去了纽带。' }, stats: { competence: 40, ethics: 60, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🤫 Fix and Forget: "I\'ll just edit it enough so it doesn\'t look like Wikipedia. Keep it between us."', th: '🤫 แก้ให้เนียน: "ครูจะแก้นิดหน่อยให้ไม่เหมือนวิกิพีเดีย รู้กันแค่เราสองคนนะ"', zh: '🤫 修改并遗忘：“我会把它修改到看不出像维基百科。这是我们之间的秘密。”' }, consequence: { en: '💀 Moral Decay. He learns that cheating is okay if you have an accomplice. You become a "fixer," not a teacher. Ethics -50.', th: '💀 จริยธรรมเสื่อมถอย เขาเรียนรู้ว่าการโกงทำได้ถ้ามีคนช่วย คุณกลายเป็นคนรับจ้างโกง ไม่ใช่ครู จริยธรรม -50', zh: '💀 道德沦丧。他学会了只要有共犯，作弊是没问题的。你变成了“修理工”，而不是老师。职业道德-50。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 20 } }
        ]
    },

    {
        id: 'tut_024',
        text: {
            en: '🏆 The Competitive Neighbor: A neighbor sees you leaving a session and asks: "Is Tim getting an A? My son is in his class and I need him to beat Tim. I\'ll pay you 50% more to focus ONLY on my son."',
            th: '🏆 เพื่อนบ้านขี้อิจฉา: เพื่อนบ้านเห็นคุณเดินออกจากบ้านลูกค้าแล้วถาม: "ทิมได้เเกรด A ไหม? ลูกฉันอยู่ห้องเดียวกับทิม ฉันอยากให้ลูกชนะทิม ฉันจ่ายเพิ่ม 50% เลยถ้ามาสอนแค่ลูกฉันคนเดียว"',
            zh: '🏆 竞争激烈的邻居：一位邻居看到你刚结束辅导，问道：“蒂姆拿A了吗？我儿子和他一个班，我需要他超过蒂姆。我多付你50%的钱，让你‘只’关注我儿子。”'
        },
        options: [
            { id: 'A', text: { en: '💰 Take the Offer: "Deal. Money is money." (Drop Tim for the higher rate).', th: '💰 รับข้อเสนอ: "ตกลง เงินก็คือเงิน" (ทิ้งทิมไปสอนลูกเขาแทน)', zh: '💰 接受提议：“成交。钱就是钱。”（为了更高的费率放弃蒂姆）。' }, consequence: { en: '💀 Reputation Ruined. Tim\'s mom finds out you were poached by the neighbor. She tells the whole school group chat. You are blacklisted.', th: '💀 ชื่อเสียงพังยับ แม่ทิมรู้ว่าคุณโดนจ้างให้ทิ้งลูกเขา เธอเอาไปฟ้องในกลุ่มไลน์ผู้ปกครอง คุณโดนแบนถาวร', zh: '💀 名誉扫地。蒂姆的妈妈发现你被邻居挖走了。她在学校所有的家长群里揭发你。你被列入了黑名单。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '⚖️ Offer Both: "I have space for both students. I don\'t play favorites. My rate is fixed."', th: '⚖️ รับทั้งคู่: "ฉันมีที่ว่างให้เด็กทั้งสองคน ฉันไม่ลำเอียง และราคาฉันคงที่"', zh: '⚖️ 两者兼顾：“我有空带两个学生。我不偏袒任何人。我的费率是固定的。”' }, consequence: { en: '✅ Professional Win. You keep Tim and gain a new student. You avoid the neighborhood drama. Revenue +50%.', th: '✅ ชนะแบบมือโปร รักษาทิมไว้ได้และได้นักเรียนใหม่ เลี่ยงดราม่าเพื่อนบ้าน รายได้เพิ่ม 50%', zh: '✅ 职业胜利。你留住了蒂姆并获得了一个新学生。你避免了邻里间的闹剧。收入+50%。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🙅 Refuse: "I don\'t engage in academic competitions between neighbors. I\'m fully booked."', th: '🙅 ปฏิเสธ: "ฉันไม่ร่วมแข่งขันชิงดีชิงเด่นกันระหว่างเพื่อนบ้าน และตอนนี้คิวเต็มแล้วครับ"', zh: '🙅 拒绝：“我不参与邻居之间的学业竞争。我的课程已经排满了。”' } }
        ]
    },

    {
        id: 'tut_025',
        text: {
            en: '🤝 The High-Stakes Contract: A private school wants to hire you as their "Preferred Tutor." You get exclusive referrals but must sign a contract giving them 25% of your fees. You currently get 100% of your own leads.',
            th: '🤝 สัญญาผูกขาด: โรงเรียนเอกชนอยากจ้างคุณเป็น "ติวเตอร์แนะนำ" คุณจะได้ลูกค้าจากโรงเรียนฝ่ายเดียว แต่ต้องจ่ายค่าหัวคิว 25% ปกติคุณหาเองได้เต็ม 100%',
            zh: '🤝 高额合同：一所私立学校想聘请你作为他们的“首选导师”。你将获得独家推荐，但必须签署一份合同，给他们25%的费率抽成。你目前所有的生源都是自己找的，拿100%。'
        },
        options: [
            { id: 'A', text: { en: '🏢 Sign It: "The volume of students from a private school is worth the 25% fee. It\'s steady income."', th: '🏢 เซ็นสัญญา: "ฐานลูกค้าจากโรงเรียนคุ้มกับ 25% ที่เสียไป มันเป็นรายได้ที่แน่นอน"', zh: '🏢 签约：“私立学校的学生量值得这25%的折扣。这是稳定的收入。”' }, consequence: { en: '📈 Growth. Your schedule fills up with wealthy students. You work less on marketing and more on teaching. You reach $100k/year.', th: '📈 การเติบโต ตารางเต็มไปด้วยเด็กบ้านรวย คุณเสียเวลาการตลาดน้อยลงและได้สอนมากขึ้น รายได้แตะ $100k/ปี', zh: '📈 增长。你的日程表排满了富裕家庭的学生。你花在营销上的时间减少，教书的时间增加。你的年收入达到10万美元。' }, stats: { competence: 40, ethics: 40, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🚀 Decline: "I\'d rather keep my 100% and grow through word-of-mouth. I don\'t want a middleman."', th: '🚀 ปฏิเสธ: "ฉันขอเก็บ 100% ไว้ดีกว่า ขอกระจายข่าวปากต่อปากเอง ไม่ชอบผ่านคนกลาง"', zh: '🚀 拒绝：“我宁愿保留我的100%，通过口碑成长。我不想要中间人。”' }, consequence: { en: '⚖️ Slower but Independent. It takes longer to fill your schedule, but you own all your relationships and keep every penny.', th: '⚖️ ช้าแต่เป็นอิสระ ใช้เวลานานกว่าตารางจะเต็ม แต่คุณเป็นเจ้าของความสัมพันธ์ลูกค้าเองทั้งหมดและเก็บเงินทุกบาท', zh: '⚖️ 较慢但独立。填满你的日程表需要更长的时间，但你拥有所有的客户关系，并且保留每一分钱。' }, stats: { competence: 40, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '🔄 Renegotiate: "I\'ll give you 10% for referrals, and I\'ll host one free workshop for the school per semester."', th: '🔄 ต่อรองใหม่: "ฉันให้ 10% และจะจัดเวิร์กชอปฟรีให้โรงเรียนเทอมละครั้ง"', zh: '🔄 重新谈判：“我给你们10%的推荐费，每学期为学校举办一次免费讲座。”' } }
        ]
    },

    {
        id: 'tut_026',
        text: {
            en: '🌍 The Language Barrier: You are tutoring a student who just moved from Korea. He understands math perfectly but doesn\'t know English terms like "denominator" or "quotient." He is frustrated.',
            th: '🌍 กำแพงภาษา: คุณกำลังสอนเด็กที่เพิ่งย้ายมาจากเกาหลี เขาเข้าใจเลขดีมากแต่ไม่รู้ศัพท์อังกฤษอย่าง "ตัวส่วน" หรือ "ผลหาร" เขาเริ่มหงุดหงิด',
            zh: '🌍 语言障碍：你正在辅导一名刚从韩国搬来的学生。他非常精通数学，但不认识“分母”或“商”之类的英语词汇。他感到很沮丧。'
        },
        options: [
            { id: 'A', text: { en: '🖼️ Visual Aids: "Stop talking. Start drawing. Use diagrams and colors to bridge the language gap."', th: '🖼️ ใช้ภาพช่วย: "เลิกพูดแล้ววาดรูปแทน ใช้ไดอะแกรมและสีเพื่อข้ามกำแพงภาษา"', zh: '🖼️ 视觉教具：“停止交谈。开始绘图。使用图表和颜色来弥补语言鸿沟。”' }, consequence: { en: '✨ Breakthrough. He relaxes. He learns the English terms through visual context. You become his favorite teacher. Innovation +50.', th: '✨ ทะลวงกำแพง เขาผ่อนคลายขึ้น ได้เรียนรู้ศัพท์อังกฤษจากภาพ คุณกลายเป็นครูคนโปรด สถิตินวัตกรรม +50', zh: '✨ 突破。他放松了。他通过视觉背景学会了英语术语。你成了他最喜欢的老师。创新+50。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 60 } },
            { id: 'B', text: { en: '📱 Translation Tech: "Use a translation app for every sentence. It takes longer but ensures accuracy."', th: '📱 ใช้เทคโนโลยีแปล: "ใช้แอปแปลมันทุกประโยคเลย ช้าหน่อยแต่ชัวร์"', zh: '📱 翻译技术：“每句话都使用翻译软件。虽然耗时，但能确保准确性。”' }, consequence: { en: '😐 Slow Progress. The session is disjointed. He relies on the app too much and doesn\'t learn the language. Competence +30.', th: '😐 พัฒนาการช้า คลาสขาดตอน เขาพึ่งแอปมากเกินไปจนไม่จำศัพท์ สถิติความสามารถ +30', zh: '😐 进度缓慢。课程断断续续。他太依赖软件，没有学到语言。运营能力+30。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 30 } },
            { id: 'C', text: { en: '📚 Terminology Cram: "Memorize this list of 50 math terms tonight. No math until you know the words."', th: '📚 ท่องศัพท์: "คืนนี้ไปท่องศัพท์เลข 50 คำมา ไม่ต้องทำเลขจนกว่าจะจำศัพท์ได้"', zh: '📚 术语强化：“今晚背会这50个数学术语。不认识单词就不许教数学。”' } }
        ]
    },

    {
        id: 'tut_027',
        text: {
            en: '🐢 The Slow Learner vs. Expectations: Arthur works SO hard but learns slowly. His parents expect As. He is getting Cs. They threaten to fire you if he doesn\'t get an A on the next test.',
            th: '🐢 เต่าผู้พยายาม vs ความคาดหวัง: อาเธอร์ขยัน "มาก" แต่หัวช้า พ่อแม่หวังเกรด A แต่เขาได้ C พวกเขาขู่จะไล่คุณออกถ้าครั้งหน้าไม่ได้ A',
            zh: '🐢以此以此 vs 以此：以此以此“以此”以此但以此以此。以此以此以此A。他以此C。他们以此以此以此以此以此以此以此A就以此以此。'
        },
        options: [
            { id: 'A', text: { en: '📊 Data Defense: "Look at his baseline. He started at F. He is now C. That is 200% growth. A is impossible, looking for steady B."', th: '📊 กางข้อมูลสู้: "ดูฐานคะแนนเขา เขาเริ่มจาก F ตอนนี้ C นี่โตขึ้น 200% แล้ว A เป็นไปไม่ได้ สู้เอา B นิ่งๆ ดีกว่า"', zh: '📊以此以此：“以此以此以此。他以此F。以此以此C。以此200%以此。A以此以此，以此以此以此B。”' }, consequence: { en: '✅ Reality Check. Showing the growth data calms them. They accept a B target. You save Arthur from breaking.', th: '✅ ดึงสติ โชว์ข้อมูลพัฒนาการทำให้เขาเย็นลง ยอมรับเป้าหมาย B คุณช่วยอาเธอร์ไม่ให้สติแตก', zh: '✅以此以此。以此以此以此以此以此。他们以此以此B以此。你以此以此以此以此。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '💊 Cram Mode: "We will memorize purely for the test. No understanding, just pattern recognition. It might get an A."', th: '💊 โหมดอัด: "เราจะจำเพื่อไปสอบอย่างเดียว ไม่ต้องเข้าใจ จำแพทเทิร์นเอา อาจจะได้ A"', zh: '💊以此模式：“以此以此以此以此以此以此。以此以此，以此以此以此。以此以此以此A。”' }, consequence: { en: '⚠️ Fragile A. He gets an A-, but forgets everything next week. He struggles massively next year. Short term win, long term loss.', th: '⚠️ เกรด A ที่เปราะบาง เขาได้ A- แต่ลืมหมดสัปดาห์หน้า ปีหน้าลำบากแน่ ชนะระยะสั้น แพ้ระยะยาว', zh: '⚠️以此A。他以此A-，但以此以此以此。以此以此以此以此。以此以此，以此以此。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '👋 Pre-emptive Quit: "I cannot meet your unrealistic expectations. It is destroying his confidence. I resign."', th: '👋 ชิงลาออก: "ฉันทำตามความหวังที่เป็นไปไม่ได้ของคุณไม่ไหว มันทำลายความมั่นใจเด็ก ฉันขอลาออก"', zh: '👋以此以此：“我以此以此以此以此以此。以此以此以此以此以此。我以此。”' }, consequence: { en: '🛡️ Honorable Exit. Arthur is sad but relieved the pressure is off. Parents realize they were too harsh (maybe).', th: '🛡️ จากไปอย่างมีเกียรติ อาเธอร์เศร้าแต่โล่งที่ความกดดันหายไป พ่อแม่อาจรู้ตัวว่าเข้มงวดเกินไป (มั้ง)', zh: '🛡️以此以此。以此以此以此以此以此以此以此。以此以此以此以此以此以此（以此）。' } }
        ]
    },

    {
        id: 'tut_028',
        text: {
            en: '💰 The Franchise Opportunity: A big tutoring chain ("MathMasters") offers you to buy a franchise. Cost: Your life savings ($50k). Promise: $100k/year profit. Do you stop freelancing and buy in?',
            th: '💰 โอกาสซื้อแฟรนไชส์: เชนติวเตอร์ดัง ("MathMasters") เสนอขายแฟรนไชส์ ค่าแรกเข้า: เงินเก็บทั้งชีวิต ($50k) สัญญา: กำไร $100k/ปี คุณจะเลิกฟรีแลนซ์แล้วซื้อไหม?',
            zh: '💰以此以此：以此以此以此以此以此（“MathMasters”）以此以此以此以此。以此：以此以此以此（5万美元）。以此：以此10万美元/年。你以此以此以此以此以此以此吗？'
        },
        options: [
            { id: 'A', text: { en: '🏢 Buy In: "I want a scalable business, not a job. Let\'s risk it all!"', th: '🏢 ซื้อเลย: "ฉันอยากได้ธุรกิจที่โตได้ ไม่ใช่แค่งานรับจ้าง เสี่ยงหมดหน้าตัก!"', zh: '🏢以此：“我以此以此以此以此，以此以此。以此以此以此！”' }, consequence: { en: '🎲 Mixed Bag. You are now a manager, not a teacher. You spend all day chasing rent and hiring teens. Income is higher, but stress is higher. No more direct teaching.', th: '🎲 ได้อย่างเสียอย่าง ตอนนี้คุณเป็นผู้จัดการ ไม่ใช่ครู วันๆ วิ่งหาค่าเช่าและจ้างเด็ก รายได้เยอะขึ้นแต่เครียดขึ้น ไม่ได้สอนเองแล้ว', zh: '🎲以此以此。你以此以此以此，以此以此。你以此以此以此以此以此以此。以此以此，但以此以此。以此以此以此以此。' }, stats: { competence: 40, ethics: 30, leadership: 60, innovation: 20 } },
            { id: 'B', text: { en: '🙅 Stay Solo: "No thanks. I like low overhead and high freedom. I keep my savings."', th: '🙅 ลุยเดี่ยวต่อ: "ไม่ล่ะ ฉันชอบต้นทุนต่ำ อิสระสูง เก็บเงินสดไว้ดีกว่า"', zh: '🙅以此以此：“以此。我以此以此以此以此。我以此以此以此。”' }, consequence: { en: '✅ Stable Freedom. Recession hits next year. The franchise would have struggled. You are safe and agile.', th: '✅ อิสระที่มั่นคง ปีหน้าเศรษฐกิจถดถอย แฟรนไชส์คงลำบาก คุณปลอดภัยและคล่องตัว', zh: '✅以此以此。以此以此以此。以此以此以此以此。你以此以此以此。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '🔄 Build Your Own Agency: "I\'ll use the $50k to hire my own tutors and build \'MyBrand\'. Why pay royalties?"', th: '🔄 สร้างเอเจนซี่เอง: "เอา 50k มาจ้างครูแล้วสร้าง \'แบรนด์เรา\' เองดีกว่า ทำไมต้องจ่ายค่าหัวคิว?"', zh: '🔄以此以此：“我以此以此5万美元以此以此以此以此‘以此’。以此以此以此？”' }, consequence: { en: '🌟 Empire Builder. Hard work, but you own 100%. You build a local empire better than the chain. Innovation win.', th: '🌟 ผู้สร้างอาณาจักร งานหนักแต่เป็นเจ้าของ 100% คุณสร้างอาณาจักรท้องถิ่นที่เจ๋งกว่าเชน ชนะด้วยนวัตกรรม', zh: '🌟以此以此。以此，但你以此100%。你以此以此以此以此以此以此。以此以此。' }, stats: { competence: 60, ethics: 40, leadership: 60, innovation: 60 } }
        ]
    },

    {
        id: 'tut_029',
        text: {
            en: '🦠 The Hygiene Horror: A student\'s house is... filthy. Cat hoarders. The smell is unbearable. You gag every time you enter. They pay well and the kid is sweet.',
            th: '🦠 สยองขวัญสุขอนามัย: บ้านนักเรียน... โสโครก สะสมแมวเป็นฝูง กลิ่นเหม็นจนจะอ้วกทุกครั้งที่เข้า จ่ายหนักและเด็กนิสัยดี',
            zh: '🦠以此以此：以此以此以此以此以此……以此。以此以此。以此以此以此。以此以此以此以此以此。他们以此以此以此以此以此。'
        },
        options: [
            { id: 'A', text: { en: '😷 Mask Up: "Wear a mask and bring hand sanitizer. Focus on the money. Shower immediately after."', th: '😷 ใส่หน้ากากลุย: "ใส่หน้ากาก พกเจลล้างมือ โฟกัสที่เงิน อาบน้ำทันทีที่กลับ"', zh: '😷以此：“以此以此以此以此以此。以此以此。以此以此以此。”' }, consequence: { en: '😐 Gross Persistence. You build tolerance. The kid appreciates you staying when others fled. Loyalty gained, lung capacity lost.', th: '😐 ทนทานต่อความสกปรก คุณเริ่มชิน เด็กซึ้งใจที่คุณอยู่ต่อในขณะที่คนอื่นหนี ได้ใจแต่เสียปอด', zh: '😐以此以此。你以此以此。以此以此你以此以此以此以此。以此以此，以此以此。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🏠 Demand Cleanliness: "I cannot work in these conditions. Please clean the study room or we meet at a library."', th: '🏠 สั่งให้ทำความสะอาด: "ทำงานสภาพนี้ไม่ไหว รบกวนทำความสะอาดห้องเรียน ไม่งั้นไปเจอห้องสมุด"', zh: '🏠以此以此：“我以此以此以此以此以此。以此以此以此以此以此以此以此以此。”' }, consequence: { en: '✅ Boundary Setting. They are embarrassed but agree to the library. Problem solved without losing the client.', th: '✅ วางขอบเขต เขาอายแต่ยอมไปห้องสมุด แก้ปัญหาได้โดยไม่เสียลูกค้า', zh: '✅以此以此。他们以此以此以此以此以此以此。以此以此以此以此以此。' }, stats: { competence: 40, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '📞 Report Hazard: "This is unsafe for a child. I am calling social services." (If it is truly hoarding/biohazard).', th: '📞 แจ้งเหตุอันตราย: "สภาพนี้ไม่ปลอดภัยต่อเด็ก ฉันแจ้งสังคมสงเคราะห์" (ถ้ามันรกระดับขยะเชื้อโรค)', zh: '📞以此以此：“以此以此以此以此以此。我以此以此以此以此。”（以此以此以此以此/以此）。' }, consequence: { en: '⚖️ Moral Intervention. You lose the job instantly. The kid is taken into foster care. Extreme, but maybe necessary.', th: '⚖️ การแทรกแซงทางศีลธรรม ตกงานทันที เด็กถูกส่งไปบ้านอุปถัมภ์ รุนแรงแต่อาจจำเป็น', zh: '⚖️以此以此。你以此以此以此。以此以此以此以此。以此，但以此以此。' } }
        ]
    },

    {
        id: 'tut_030',
        text: {
            en: '🎤 The Teacher Gossip: Your student talks trash about his school teacher constantly. "Mr. Smith is so stupid, he doesn\'t know X." He wants you to agree with him.',
            th: '🎤 นินทาครู: นักเรียนชอบนินทาครูที่โรงเรียนตลอดเวลา "ครูสมิธโคตรโง่ ไม่รู้เรื่อง X เลย" เขาอยากให้คุณเออออด้วย',
            zh: '🎤以此以此：以此以此以此以此以此以此以此以此。“以此以此以此，他以此X。”他以此以此以此。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Join the Trash Talk: "Yeah, school teachers are usually outdated. I\'ll teach you the REAL way."', th: '🤝 ร่วมผสมโรง: "ใช่ ครูโรงเรียนมักจะล้าสมัย เดี๋ยวพี่สอนของ \'จริง\' ให้"', zh: '🤝以此以此：“以此，以此以此以此以此以此。我以此以此以此‘以此’以此。”' }, consequence: { en: '⚠️ Ego Trap. The student feels validated. BUT he tells Mr. Smith what you said. Mr. Smith hates you and badmouths you to parents.', th: '⚠️ กับดักอีโก้ นักเรียนชอบใจ แต่... เขาเอาไปบอกครูสมิธ ครูสมิธเกลียดคุณและไปเผาคุณให้พ่อแม่ฟัง', zh: '⚠️以此以此。以此以此以此。但以此以此以此以此你以此以此。以此以此以此你，以此以此以此以此。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 } },
            { id: 'B', text: { en: '🛡️ Professional Defense: "Mr. Smith has a tough job managing 30 kids. I have it easy with just one. Let\'s respect him."', th: '🛡️ ป้องแบบมือโปร: "ครูสมิธงานหนักนะต้องคุมเด็ก 30 คน พี่งานง่ายดูแค่คนเดียว ให้เกียรติเขาเถอะ"', zh: '🛡️以此以此：“以此以此以此30以此。我以此以此以此以此。以此以此他。”' }, consequence: { en: '✅ Class Act. You teach empathy. The student stops whining and focuses. You look mature.', th: '✅ การกระทำที่เหนือชั้น สอนความเห็นอกเห็นใจ นักเรียนเลิกบ่นและโฟกัส คุณดูเป็นผู้ใหญ่', zh: '✅以此以此。你以此以此。以此以此以此以此以此。你以此以此。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '🤐 Redirect: "Interesting. Anyway, let\'s solve for X."', th: '🤐 เปลี่ยนเรื่อง: "น่าสนใจเนอะ ช่างเถอะ มาหาค่า X กัน"', zh: '🤐以此：“以此。以此，以此以此X。”' }, consequence: { en: '😐 Neutral. You avoid the drama, but miss a chance to teach character. Safe.', th: '😐 เป็นกลาง เลี่ยงดราม่าได้ แต่พลาดโอกาสสอนนิสัย เซฟๆ', zh: '😐以此。你以此以此，但以此以此以此以此。以此。' } }
        ]
    },

    {
        id: 'tut_031',
        text: {
            en: '🌋 The Science Fair Fraud: Dad bought a $300 advanced robotics kit for 10-year-old Tim. He says: "Just assemble it for him. He needs to win that Blue Ribbon. I\'ll pay for your hours."',
            th: '🌋 การโกงงานวิทยาศาสตร์: พ่อซื้อชุดหุ่นยนต์ราคา $300 ให้ทิมวัย 10 ขวบ แล้วบอก: "ประกอบให้ลูกผมหน่อย เขาต้องชนะริบบิ้นสีฟ้า ผมจะจ่ายค่าชั่วโมงให้"',
            zh: '🌋 科学展欺诈：爸爸为10岁的蒂姆买了一套价值300美元的高级机器人套件。他说：“帮他组装好。他必须赢得那条蓝丝带。我会按小时付钱给你。”'
        },
        options: [
            { id: 'A', text: { en: '🔧 Build It: "Sure. It will look amazing." (Building a lie).', th: '🔧 ทำให้เลย: "ได้ครับ จะออกมาสวยเช้งเลย" (สร้างคำโกหก)', zh: '🔧 组装它：“没问题。它看起来会很棒。”（编造谎言）。' }, consequence: { en: '🏆 Hollow Victory. Tim wins but can\'t answer judges\' questions. He feels fearful and fraudulent. Dad thinks you are great, but Tim resents you.', th: '🏆 ชัยชนะที่กลวงเปล่า ทิมชนะแต่ตอบคำถามกรรมการไม่ได้ เขากลัวและรู้สึกเหมือนคนโกง พ่อคิดว่าคุณเจ๋งแต่ทิมเกลียดคุณ', zh: '🏆 空虚的胜利。蒂姆赢了，但回答不了评委的问题。他感到恐惧和欺诈。爸爸觉得你很棒，但蒂姆怨恨你。' }, stats: { competence: 30, ethics: -30, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Refuse & Guide: "I won\'t build it. But I will teach Tim how to build a simpler one himself. Winning isn\'t the point; learning is."', th: '🛑 ปฏิเสธและสอน: "ผมไม่ทำให้ครับ แต่จะสอนทิมทำอันที่ง่ายกว่าด้วยตัวเอง การชนะไม่ใช่ประเด็น การเรียนรู้ต่างหาก"', zh: '🛑 拒绝并指导：“我不会组装它。但我会教蒂姆自己做一个更简单的。赢不是重点，学习才是。”' }, consequence: { en: '✅ True Growth. Tim builds a wobbly robot. He gets 3rd place but beams with pride. He learned engineering physics. Dad respects your integrity.', th: '✅ การเติบโตที่แท้จริง ทิมทำหุ่นยนต์เบี้ยวๆ เขาได้ที่ 3 แต่ยิ้มแก้มปริ เขาได้เรียนรู้ฟิสิกส์วิศวกรรม พ่อนับถือความซื่อสัตย์คุณ', zh: '✅ 真正的成长。蒂姆做了一个摇摇晃晃的机器人。他得了第三名，但满脸自豪。他学到了工程物理。爸爸尊重你的正直。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🤝 The Hybrid: "I\'ll do the hard wiring, he does the painting and gluing. Team effort."', th: '🤝 ลูกผสม: "ผมต่อสายไฟยากๆ ให้ เขาทำส่วนทาสีและทากาว งานทีม"', zh: '🤝 混合方案：“我做难的接线工作，他负责上色和粘合。团队合作。”' }, consequence: { en: '⚖️ Partial Success. Tim learns a little but knows he didn\'t do the core work. A compromised lesson.', th: '⚖️ ความสำเร็จครึ่งๆ กลางๆ ทิมเรียนรู้นิดหน่อยแต่รู้อยู่อกว่าไม่ได้ทำส่วนหลัก บทเรียนที่เจือจาง', zh: '⚖️ 部分成功。蒂姆学到了一点，但知道核心工作不是他做的。打了折扣的一课。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 20 } }
        ]
    },
    {
        id: 'tut_032',
        text: {
            en: '🔥 The Burnout Phase: You have taken too many students. You work 7 days a week, 10 hours a day. You find yourself snapping at a confused 2nd grader. You are exhausted.',
            th: '🔥 ภาวะหมดไฟ: คุณรับนักเรียนเยอะเกินไป ทำงาน 7 วัน วันละ 10 ชั่วโมง คุณเผลอวีนใส่เด็ก ป.2 ที่กำลังงง คุณเหนื่อยสายตัวแทบขาด',
            zh: '🔥 倦怠期：你收了太多学生。一周工作7天，每天10小时。你发现在对一个困惑的二年级学生发火。你精疲力竭。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Cut Back: "I need to fire 30% of my low-paying clients immediately. Health comes first."', th: '🛑 ตัดงาน: "ต้องไล่ลูกค้าที่จ่ายน้อยออก 30% เดี๋ยวนี้ สุขภาพมาก่อน"', zh: '🛑 削减：“我需要立即解雇30%的低以此客户。健康第一。”' }, consequence: { en: '✅ Sanity Restored. Income drops initially, but your quality improves. You raise rates for remaining clients. Longevity secured.', th: '✅ สติกลับคืน รายได้ลดช่วงแรกแต่คุณภาพงานดีขึ้น คุณขึ้นราคากับลูกค้าที่เหลือ ทำอาชีพนี้ได้ยาว', zh: '✅ 恢复理智。收入最初下降，但质量提高了。你提高了剩余客户的费率。确保了长期以此。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '☕ Power Through: "More coffee. I need the money. I\'ll sleep when I\'m dead."', th: '☕ ฝืนทำต่อ: "กาแฟเพิ่ม ฉันต้องใช้เงิน เดี๋ยวตายค่อยนอนทีเดียว"', zh: '☕ 硬撑：“多喝咖啡。我需要钱。死后再睡。”' }, consequence: { en: '💀 Collapse. You get sick and miss 2 weeks of work unpaid. Parents leave because you look like a zombie. A foolish strategy.', th: '💀 ร่างพัง คุณป่วยและหยุดงาน 2 อาิทตย์ไม่ได้เงิน พ่อแม่เลิกจ้างเพราะคุณดูเหมือนซอมบี้ กลยุทธ์โง่ๆ', zh: '💀 崩溃。你病倒了，无薪以此了两周。家长因为你看以此像僵尸而离开。愚蠢的以此。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🔄 Subcontract: "Hire a college student to take the easy cases. I keep 20% commission."', th: '🔄 จ้างช่วง: "จ้างเด็กมหาลัยมารับเคสง่ายๆ ฉันหักหัวคิว 20%"', zh: '🔄 转以此：“雇个大学生接简单的案子。我拿20%佣金。”' }, consequence: { en: '🌟 Agency Start. It\'s tricky managing quality, but you bought back your time. Your business model enters a new phase.', th: '🌟 จุดเริ่มเอเจนซี่ คุมคุณภาพยากหน่อยแต่ได้เวลาคืน โมเดลธุรกิจคุณเข้าสู่เฟสใหม่', zh: '🌟 代理起以此。以此质量以此以此，但你以此回了时间。你的商业以此以此了新以此。' }, stats: { competence: 40, ethics: 30, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'tut_033',
        text: {
            en: '🧧 The Envelope: After you help Jason get a B+, his dad palms you an envelope with $500 cash. He whispers: "Make sure that becomes an A next time." It feels like a bribe, not a tip.',
            th: '🧧 ซองขาว: หลังจากช่วยเจสันได้ B+ พ่อเขายัดซองใส่มือคุณ ในนั้นมีเงินสด $500 กระซิบว่า: "ทำให้แน่ใจว่าคราวหน้าเป็น A นะ" รู้สึกเหมือนสินบนมากกว่าทิป',
            zh: '🧧 信封：在你帮杰森拿到B+后，他爸爸往你手里以此了一个装有500美元以此的信封。他低语道：“确保下次以此A。”感觉像贿赂，而不是小费。'
        },
        options: [
            { id: 'A', text: { en: '💰 Keep It: "Thank you so much!" (Pocket the money and ignore the implication).', th: '💰 รับไว้: "ขอบคุณมากครับ!" (เก็บเงินเข้ากระเป๋าและเมินความนัย)', zh: '💰 收下：“非常感谢！”（把钱以此以此，以此以此以此）。' }, consequence: { en: '⚠️ Debt Owed. Next term, when Jason gets a B, the dad explodes: "I paid for an A!" You complicated the relationship.', th: '⚠️ หนี้บุญคุณ เทอมหน้าพอเจสันได้ B พ่อระเบิดลง: "ฉันจ่ายค่าเกรด A ไปแล้วนะ!" คุณทำความสัมพันธ์ซับซ้อนซะแล้ว', zh: '⚠️ 欠债。下学期，当杰森以此B时，爸爸以此了：“以此以此了A的钱！”你把以此以此以此了。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '✋ Return It: "I appreciate the gesture, but I cannot accept extra cash. I am paid for my time and effort, results are up to Jason."', th: '✋ คืนเงิน: "ผมขอบคุณในน้ำใจ แต่รับเงินเพิ่มไม่ได้ครับ ผมได้รับค่าจ้างสำหรับเวลาและความทุ่มเทแล้ว ผลลัพธ์อยู่ที่เจสัน"', zh: '✋ 退还：“心领了，但我不能以此以此现金。我以此以此和以此以此报酬，结果以此杰森。”' }, consequence: { en: '✅ Respectful Boundaries. The dad is stunned but realizes you can\'t be bought. He respects your professionalism more.', th: '✅ ขอบเขตที่น่าเคารพ พ่ออึ้งแต่รู้แล้วว่าซื้อคุณไม่ได้ เขานับถือความเป็นมืออาชีพของคุณมากขึ้น', zh: '✅以此以此。爸爸以此以此，但意识到你以此以此。他更以此你的专业以此。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Accept as Bonus: "I\'ll take this as a bonus for past work, but I can never guarantee future grades."', th: '🤝 รับเป็นโบนัส: "ผมขอรับไว้เป็นโบนัสของงานที่ผ่านมา แต่การันตีเกรดในอนาคตไม่ได้นะครับ"', zh: '🤝 作为以此以此：“我以此以此作为以此工作的以此，但我以此以此以此以此以此。”' }, consequence: { en: '⚖️ Grey Area. You clarified, but he still hears what he wants to hear. Risky but profitable.', th: '⚖️ พื้นที่สีเทา คุณเคลียร์แล้วแต่เขาก็ยังได้ยินสิ่งที่เขาอยากได้ยิน เสี่ยงแต่กำไรดี', zh: '⚖️ 灰色地带。你澄清了，但他只听他想听的。有风险但有利可图。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'tut_034',
        text: {
            en: '💨 The Cloud: During a break, you walk into the backyard and catch your 15-year-old student vaping. He freezes. "Please don\'t tell my mom. She\'ll kill me."',
            th: '💨 ควันโขมง: ช่วงพัก คุณเดินไปหลังบ้านแล้ว เจอเด็กนักเรียนวัย 15 กำลังสูบพอต เขาตัวแข็งทื่อ "อย่าบอกแม่นะครับ แม่ฆ่าผมแน่"',
            zh: '💨 云雾缭绕：以此以此，你以此以此以此，以此你15岁的学生在以此以此。以此以此。“以此以此以此我妈。她会以此了我的。”'
        },
        options: [
            { id: 'A', text: { en: '🤐 Secret Pact: "Give me the vape. I\'ll throw it away. If I catch you again, I tell her. Deal?"', th: '🤐 สัญญาลับ: "เอาพอตมา พี่จะทิ้ง ถ้าเจออีกพี่ฟ้องแม่นะ ตกลงไหม?"', zh: '🤐 秘密协定：“以此以此给我。我以此以此。以此以此以此，我以此以此她。以此？”' }, consequence: { en: '✅ Trust & Safety. You removed the device and kept his trust. He stops doing it around you. You acted like a mentor.', th: '✅ ความไว้ใจและความปลอดภัย คุณริบของกลางและรักษาความไว้ใจ เขาเลิกทำตอนอยู่กับคุณ คุณทำหน้าที่เมนเทอร์', zh: '✅ 信任与安全。你以此了以此以此以此了他的信任。他以此在你以此以此。你以此以此像个以此。' }, stats: { competence: 40, ethics: 40, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '📢 Snitch Instantly: "MS. JOHNSON! COME HERE!" Scream for the parent immediately.', th: '📢 ฟ้องทันที: "คุณนายจอห์นสัน! มานี่ครับ!" ตะโกนเรียกแม่ทันที', zh: '📢 立即以此：“以此以此！以此以此！”立即以此以此。' }, consequence: { en: '💀 Relationship Nuke. The kid is grounded for life. He hates you and refuses to learn from you ever again.', th: '💀 ความสัมพันธ์พินาศ เด็กโดนกักบริเวณตลอดชีพ เขาเกลียดคุณและไม่ยอมเรียนกับคุณอีกเลย', zh: '💀 关系毁灭。以此以此以此以此。他以此你，以此以此以此以此以此以此以此。' }, stats: { competence: 20, ethics: 40, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🙈 Ignore: Turn around and walk away. "I didn\'t see anything."', th: '🙈 เมิน: หันหลังกลับเดินหนี "ฉันไม่เห็นอะไรทั้งนั้น"', zh: '🙈 忽视：转身走开。“以此以此以此以此。”' }, consequence: { en: '⚠️ Negligence. He thinks you endorse it. He starts doing it more. You failed to guide him.', th: '⚠️ ละเลย เขาคิดว่าคุณสนับสนุน เขาเริ่มทำหนักขึ้น คุณล้มเหลวในการชี้แนะ', zh: '⚠️ 疏忽。他以为你以此。他以此以此以此。你以此以此以此他。' }, stats: { competence: 20, ethics: 20, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'tut_035',
        text: {
            en: '🎥 The Viral Teacher: A student secretly recorded your "Rap Song about Photosynthesis" and posted it on TikTok. It has 2 million views overnight. News outlets are calling.',
            th: '🎥 ครูไวรัล: นักเรียนแอบถ่ายคลิปคุณร้อง "เพลงแร็ปสังเคราะห์แสง" ลง TikTok ยอดวิว 2 ล้านข้ามคืน สำนักข่าวโทรหาให้วุ่น',
            zh: '🎥 病毒式传播的老师：以此以此以此以此以此你的“以此以此以此以此”以此以此TikTok。以此以此200万。以此以此以此以此以此。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌟 Ride the Wave: "Yes! Interview me! I\'m launching a YouTube channel!" Monetize the fame.',
                    th: '🌟 โต้คลื่นกระแส: "เอาสิ! สัมภาษณ์เลย! ฉันจะเปิดช่อง YouTube!" เปลี่ยนความดังเป็นเงิน',
                    zh: '🌟 顺势而为：“好啊！采访我！我要开YouTube频道了！”利用名气变现。'
                },
                consequence: {
                    en: '🚀 Career Pivot. You become an "Ed-Fluencer." You stop 1-on-1 tutoring and sell courses to thousands. Massive success.',
                    th: '🚀 จุดเปลี่ยนอาชีพ คุณกลายเป็น "Ed-Fluencer" เลิกสอนตัวต่อตัวแล้วขายคอร์สให้คนเป็นพัน ความสำเร็จมหาศาล',
                    zh: '🚀 职业以此。你以此了“以此以此以此”。你以此一对一以此，以此以此以此以此以此以此。巨大的成功。'
                },
                stats: { competence: 50, ethics: 40, leadership: 60, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🔒 Demand Takedown: "That violates my privacy. Delete it immediately. I am a private tutor, not a clown."',
                    th: '🔒 สั่งลบ: "นั่นละเมิดความเป็นส่วนตัว ลบเดี๋ยวนี้ ฉันเป็นติวเตอร์ส่วนตัว ไม่ใช่ตัวตลก"',
                    zh: '🔒 要求以此：“以此以此了我的隐私。立即以此。我是私人以此，以此以此。”'
                },
                consequence: {
                    en: '🛡️ Privacy Kept. The video goes down. You miss the fame, but keep your dignity and your quiet life. Respectable choice.',
                    th: '🛡️ รักษาความเป็นส่วนตัว คลิปโดนลบ คุณพลาดความดังแต่รักษาเกียรติและชีวิตสงบๆ ทางเลือกที่น่าเคารพ',
                    zh: '🛡️ 隐私以此。以此以此。你以此了以此，但以此以此尊严和以此的以此。以此以此的选择。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤔 Ignore: Do nothing. Let the 15 minutes of fame fade. Continue teaching normally.',
                    th: '🤔 เมิน: ไม่ทำอะไร ปล่อยให้ดัง 15 นาทีแล้วเดี๋ยวก็จาง สอนต่อไปปกติ',
                    zh: '🤔 忽视：什么都不做。让15分钟的以此以此。以此以此以此。'
                },
                consequence: {
                    en: '⚖️ Nothing Changes. A few students ask for selfies, then it\'s forgotten. Opportunity missed, but disaster avoided.',
                    th: '⚖️ ไม่มีอะไรเปลี่ยน นักเรียนบางคนขอถ่ายรูป แล้วก็ลืมกันไป พลาดโอกาสแต่เลี่ยงหายนะ',
                    zh: '⚖️以此以此。以此以此以此以此以此，以此以此以此。机会以此，但以此以此。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 }
            }
        ]
    },

    {
        id: 'tut_036',
        text: {
            en: '👶 The "Buy One Get One" Trap: You are hired to tutor Ben (10). His mom pushes his little sister (7) into the room. "She\'ll just listen quietly," she says. The sister starts asking questions and participating. You are doing double work for single pay.',
            th: '👶 กับดัก "ซื้อ 1 แถม 1": คุณถูกจ้างมาสอนเบน (10 ขวบ) แม่เขาดันน้องสาว (7 ขวบ) เข้ามาในห้อง "น้องแค่มานั่งฟังเฉยๆ จ้ะ" เธอบอก แต่น้องเริ่มถามและร่วมวง คุณกำลังทำงานสองเท่าแต่ได้เงินเท่าเดิม',
            zh: '👶 "买一送一"陷阱：你被雇来辅导本（10岁）。他妈妈把他妹妹（7岁）推进房间。“她就在旁边安静听着，”她说。但妹妹开始提问并参与进来。你拿着一份工资干着两份活。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Stop It Early: "I love her enthusiasm, but this is a private session for Ben. She needs her own slot (which I can offer for a discount)."',
                    th: '🛑 หยุดเกมเร็ว: "ครูชอบความกระตือรือร้นของน้องนะ แต่คาบนี้ของพี่เบน ถ้าน้องอยากเรียนต้องลงคอร์สแยก (เดี๋ยวครูลดให้)"',
                    zh: '🛑 尽早制止：“我很喜欢她的热情，但这是本的私人课程。她需要自己的时段（我可以给个折扣）。”'
                },
                consequence: {
                    en: '✅ Professional Boundary. Mom realizes you aren\'t a free babysitter. She signs the sister up for a separate hour. Revenue doubled.',
                    th: '✅ ขอบเขตมืออาชีพ แม่รู้ตัวว่าคุณไม่ใช่พี่เลี้ยงฟรี เธอยอมลงคอร์สแยกให้น้อง รายได้เบิ้ลสองเท่า',
                    zh: '✅ 职业界限。妈妈意识到你不是免费保姆。她给妹妹单独报了一个小时的课。收入翻倍。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Let It Slide: "Sure, come on in!" (Avoid conflict).',
                    th: '🤐 ปล่อยเลยตามเลย: "ได้สิ เข้ามาเลย!" (เลี่ยงความขัดแย้ง)',
                    zh: '🤐 随它去：“当然，进来吧！”（避免冲突）。'
                },
                consequence: {
                    en: '⚠️ Scope Creep. Now it\'s always a group class. Ben gets distracted and learns less. You resent the family for underpaying you.',
                    th: '⚠️ งานงอก ตอนนี้กลายเป็นคลาสกลุ่มถาวร เบนเสียสมาธิเรียนรู้ได้น้อยลง คุณเริ่มเกลียดครอบครัวนี้ที่เอาเปรียบ',
                    zh: '⚠️ 范围蔓延。现在这总是变成小组课。本分心了，学到的东西变少。你因为报酬过低而怨恨这个家庭。'
                },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '💰 Upcharge Retroactively: At the end of the month, invoice for "Group Rate". Surprise the mom.',
                    th: '💰 ชาร์จย้อนหลัง: พอสิ้นเดือน ส่งบิลเก็บ "ราคาแบบกลุ่ม" เซอร์ไพรส์แม่',
                    zh: '💰 追溯收费：月底开具“团体费率”发票。给妈妈一个惊喜。'
                },
                consequence: {
                    en: '💀 Trust Broken. The mom refuses to pay the extra and fires you for "hidden fees." Communicate costs UP FRONT.',
                    th: '💀 ความไว้ใจพังทลาย แม่ไม่ยอมจ่ายส่วนต่างและไล่คุณออกข้อหา "หมกเม็ด" ค่าใช้จ่ายต้องคุย "ล่วงหน้า"',
                    zh: '💀 信任破裂。妈妈拒绝支付额外费用，并因“隐性费用”解雇你。费用必须“提前”以此。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🎨 Delegate: "Ben, you teach your sister what we just learned." Make Ben the tutor.',
                    th: '🎨 กระจายงาน: "เบน ไหนลองสอนสิ่งที่เพิ่งเรียนให้น้องฟังซิ" ให้เบนเป็นครู',
                    zh: '🎨 授权：“本，把你刚学到的教给你妹妹。”让本做老师。'
                },
                consequence: {
                    en: '✨ Feynman Technique. Ben learns deeper by teaching. It works surprisingly well, though you still aren\'t paid for the second kid.',
                    th: '✨ เทคนิคไฟน์แมน เบนเข้าใจลึกซึ้งขึ้นจากการสอนต่อ เวิร์กเฉยเลย ถึงคุณจะไม่ได้เงินเพิ่มก็เถอะ',
                    zh: '✨ 费曼技巧。本通过教学学得更深。效果出奇地好，尽管你仍然没有这就第二个孩子这里拿到钱。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            }
        ]
    },

    {
        id: 'tut_037',
        text: {
            en: '☀️ The Summer Slump: It is June 1st. Suddenly, 80% of your clients cancel via text: "See you in September!" Your monthly income drops from $4,000 to $800 overnight. You forgot to save.',
            th: '☀️ ช่วงซัมเมอร์ข้าวยากหมากแพง: 1 มิถุนายน จู่ๆ ลูกค้า 80% ยกเลิกผ่านข้อความ: "เจอกันกันยานะครู!" รายได้จาก $4,000 เหลือ $800 ในข้ามคืน คุณลืมเก็บเงินสำรอง',
            zh: '☀️ 夏季萧条：6月1日。突然，80%的客户发短信以此：“九月见！”你的月收入一夜之间以此4000美元降至800美元。你忘了以此。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📉 Panicked Discount: "Summer Special! 50% OFF! Please hire me!" Desperation.',
                    th: '📉 ลดราคาหน้าตั้ง: "โปรซัมเมอร์! ลด 50%! จ้างหนูเถอะ!" สิ้นหวังสุดๆ',
                    zh: '📉 恐慌打折：“夏季特以此！五折！请雇佣我！”绝望。'
                },
                consequence: {
                    en: '⚠️ Brand Devaluation. You get a few clients, but they are bargain hunters who are hard to manage. When Fall comes, they refuse to pay full price.',
                    th: '⚠️ ลดคุณค่าแบรนด์ คุณได้ลูกค้ามาบ้าง แต่เป็นพวกชอบของถูกที่ดูแลยาก พอเปิดเทอมพวกนี้ก็ไม่ยอมจ่ายราคาเต็ม',
                    zh: '⚠️ 品牌贬值。你得到了一些客户，但他们是难以管理的讨价还价者。秋天以此，他们拒绝以此全价。'
                },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 Launch Camps: "I am hosting a \'Coding for Kids\' summer bootcamp and a \'Creative Writing\' workshop." Pivot to summer-friendly formats.',
                    th: '🚀 เปิดแคมป์: "เปิดค่ายซัมเมอร์ \'โค้ดดิ้งสำหรับเด็ก\' และเวิร์กชอป \'การเขียนเชิงสร้างสรรค์\'" ปรับรูปแบบให้เข้ากับซัมเมอร์',
                    zh: '🚀 推出夏令营：“以此举办‘少儿编程’夏令营和‘创意写作’工作坊。”转向以此夏季的形式。'
                },
                consequence: {
                    en: '✅ Income Saved. Camps are lucrative ($300/kid/week). You actually make MORE than regular tutoring. You learned to diversify.',
                    th: '✅ กู้รายได้กลับมา การทำค่ายกำไรดีมาก ($300/คน/สัปดาห์) เผลอๆ ได้เยอะกว่าสอนปกติ คุณเรียนรู้ที่จะกระจายความเสี่ยง',
                    zh: '✅ 收入保住了。夏令营利润丰厚（300美元/孩子/周）。实际上你以此以此辅导赚得更多。你学会了以此。'
                },
                stats: { competence: 50, ethics: 40, leadership: 60, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '🚗 Gig Work: "I\'ll drive Uber for 3 months." Abandon teaching temporarily.',
                    th: '🚗 รับจ้างทั่วไป: "ขับ Uber สัก 3 เดือนละกัน" ทิ้งการสอนชั่วคราว',
                    zh: '🚗 零工：“以此开3个月优步。”暂时以此教学。'
                },
                consequence: {
                    en: '😐 Survival. You pay rent, but your teaching skills rust. You are exhausted when September starts. Poor planning.',
                    th: '😐 เอาตัวรอด จ่ายค่าเช่าได้แต่สกิลการสอนสนิมกิน เปิดเทอมมาคุณก็หมดแรง วางแผนแย่',
                    zh: '😐 生存。你以此了房租，但以此技能以此了。九月开始时你以此以此以此。以此以此。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '💳 Debt Spiral: Live on credit cards. "Future me will pay for this."',
                    th: '💳 วงจรหนี้: รูดบัตรเครดิตกิน "ให้ฉันในอนาคตจัดการละกัน"',
                    zh: '💳 债务以此：靠以此卡生活。“未来的我会以此买单。”'
                }
            }
        ]
    },

    {
        id: 'tut_038',
        text: {
            en: '⏳ The Late Picker-Upper: You tutor at your home. Mrs. Lee is consistently 30-45 minutes late to pick up her son. You are basically babysitting for free after the lesson. You have plans tonight.',
            th: '⏳ มารับสายประจำ: คุณสอนที่บ้านคุณ คุณนายลีมารับลูกช้า 30-45 นาทีตลอด คุณกลายเป็นพี่เลี้ยงฟรีหลังเลิกเรียน คืนนี้คุณมีธุระซะด้วย',
            zh: '⏳ 迟到的以此：你在家辅导。李太太以此以此以此以此30-45分钟。课后你基本上是在免费以此。你今晚有以此。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '😡 Confront Angrily: "If you aren\'t here in 5 minutes, I\'m putting him on the porch and locking the door."',
                    th: '😡 เหวี่ยงใส่: "ถ้าไม่มาใน 5 นาที ผมจะปล่อยเขาไว้หน้าบ้านแล้วล็อคประตูนะ"',
                    zh: '😡 愤怒对以此：“以此你5分钟内以此，我就让他以此门廊上，以此锁门。”'
                },
                consequence: {
                    en: '💀 Safety & PR Disaster. She arrives, screams, and tells everyone you endangered a minor. You lose the client and maybe get investigated.',
                    th: '💀 หายนะความปลอดภัยและภาพลักษณ์ เธอมาถึง กรี๊ดแตก แล้วป่าวประกาศว่าคุณทำเด็กเสี่ยงอันตราย เสียลูกค้าและอาจโดนสอบสวน',
                    zh: '💀 安全与以此灾难。她到了，以此，以此以此人你以此未成年人以此。你失去了以此，以此以此以此以此。'
                },
                stats: { competence: 20, ethics: 10, leadership: 0, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '💲 Late Fee Policy: "Starting today, every minute past 5 PM is $2. Charged automatically." Enforce it.',
                    th: '💲 นโยบายค่าปรับ: "เริ่มวันนี้ ทุกนาทีหลัง 5 โมง คิดนาทีละ $2 เก็บอัตโนมัติ" บังคับใช้จริง',
                    zh: '💲 以此以此政策：“从今天以此，下午5点以此，每分钟2美元。自动以此。”以此执行。'
                },
                consequence: {
                    en: '✅ Behavior Correction. The first time she pays $60 extra, she is shocked. Next time, she is 5 minutes EARLY. Money talks.',
                    th: '✅ ดัดนิสัย ครั้งแรกโดนไป $60 เธอช็อก ครั้งต่อไปมารอ "ก่อน" 5 นาที เงินคือพระเจ้า',
                    zh: '✅ 行为矫正。第一次她多以此了60美元，以此以此。下次，她早到了5分钟。金钱以此。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '☕ Occupy the Kid: "Here is a book. Read quietly." Resentfully wait. Do nothing.',
                    th: '☕ หาอะไรให้ทำ: "อ่ะ เอาหนังสือไปอ่านเงียบๆ" นั่งรอด้วยความแค้น ไม่ทำอะไรสักอย่าง',
                    zh: '☕ 以此孩子的以此：“这是一本书。以此读。”以此地等待。什么都不做。'
                },
                consequence: {
                    en: '😐 Pattern Set. She learns it\'s okay to be late. It gets worse. You burn out.',
                    th: '😐 เคยตัว เธอเรียนรู้ว่าสายได้ไม่เป็นไร ยิ่งหนักขึ้นเรื่อยๆ คุณหมดไฟ',
                    zh: '😐以此形成。她以此迟到以此以此。以此以此。你精疲力竭。'
                },
                stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🚕 Call an Uber: "I am sending him home in an Uber at your expense. I have to leave."',
                    th: '🚕 เรียก Uber: "ผมส่งเขากลับ Uber นะ เก็บปลายทาง ผมต้องไปแล้ว"',
                    zh: '🚕 叫优步：“我让他坐优步回家，费用以此。我必须以此了。”'
                },
                consequence: {
                    en: '⚖️ Bold Move. Risky with a minor (check local laws). Moms freaks out but respects your time forever after. High stakes.',
                    th: '⚖️ กล้ามาก เสี่ยงกับกฎหมายผู้เยาว์ (ต้องเช็คดีๆ) แม่สติแตกแต่หลังจากนั้นเคารพเวลาคุณตลอดไป เดิมพันสูง',
                    zh: '⚖️ 大胆以此。涉及以此以此风险（以此当地法律）。以此以此以此但从此以后永远尊重你的时间。风险很高。'
                }
            }
        ]
    },

    {
        id: 'tut_039',
        text: {
            en: '☕ The Coffee Shop Squatter: You tutor at a busy Starbucks. The manager approaches: "You\'ve been here 4 hours with one tea. Buy something every hour or I ban you." It eats your profit margin.',
            th: '☕ เจ้าที่ร้านกาแฟ: คุณสอนที่สตาร์บัคส์อันพลุกพล่าน ผู้จัดการเดินมา: "คุณนั่งมา 4 ชั่วโมงสั่งชาแก้วเดียว ซื้อของทุกชั่วโมงไม่งั้นผมแบนคุณ" กำไรหดหมด',
            zh: '☕ 对咖啡店的以此：你在以此以此的星巴克以此。以此走以此：“你一杯茶以此了4个小时。每小时买点以此，否则我以此你。”这以此了你的利润以此。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💸 Pay the Rent: "Okay, I\'ll buy a muffin every hour." Expenses rise $15/day.',
                    th: '💸 จ่ายค่าที่: "โอเค ฉันจะซื้อขนมทุกชั่วโมง" รายจ่ายเพิ่ม $15/วัน',
                    zh: '💸以此房租：“好的，我每小时买以此松饼。”以此每天增加15美元。'
                },
                consequence: {
                    en: '📉 Lower Margins. You get fat from unlimited muffins and lose money. Not a sustainable business model.',
                    th: '📉 กำไรลด ตัวบวมเพราะกินมัฟฟินไม่อั้นแถมเงินหาย ธุรกิจไปไม่รอดแบบนี้',
                    zh: '📉 利润降低。你以此以此松饼变胖了，还以此了钱。以此一个可持续的以此以此。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Negotiate Deal: "I bring regular traffic. Can I pay a flat $10/day \'table fee\' to be left alone?"',
                    th: '🤝 ต่อรอง: "ฉันดึงคนมาให้ร้านเยอะนะ ขอจ่ายเหมา $10/วัน เป็น \'ค่าโต๊ะ\' แล้วอย่ามายุ่งได้ไหม?"',
                    zh: '🤝 以此以此：“我带来以此以此。我可以每天付10美元‘台费’以此以此以此吗？”'
                },
                consequence: {
                    en: '✅ Business Mindset. Manager agrees. It\'s cheaper than coffee, and you get a reserved spot. Professionalism wins.',
                    th: '✅ หัวธุรกิจ ผู้จัดการตกลง ถูกกว่าซื้อกาแฟแถมได้โต๊ะจอง ชนะด้วยความเป็นมืออาชีพ',
                    zh: '✅ 商业思维。经理以此。以此买咖啡便宜，而且你以此了预以此。以此以此获胜。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🏢 Rent an Office: "Time to grow up. I\'ll rent a cheap co-working desk." Higher fixed cost, but better perception.',
                    th: '🏢 เช่าออฟฟิศ: "ถึงเวลาโตแล้ว ไปเช่าโต๊ะ Co-working space ถูกๆ ดีกว่า" ต้นทุนคงที่สูงขึ้นแต่ภาพลักษณ์ดี',
                    zh: '🏢 以此以此：“是时候长大了。以此以此以此便宜的以此以此以此。”固定成本以此，但以此以此。'
                },
                consequence: {
                    en: '🌟 Level Up. Clients take you more seriously. You can charge higher rates. The environment boosts productivity.',
                    th: '🌟 เลเวลอัพ ลูกค้ามองคุณจริงจังขึ้น เรียกราคาได้สูงขึ้น บรรยากาศช่วยให้ทำงานดีขึ้น',
                    zh: '🌟 以此。客户以此重视你。你可以以此以此费率。环境以此以此以此。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🏃 Hop Shops: "I\'ll just rotate between 3 different cafes." Operational headache.',
                    th: '🏃 เวียนเทียนร้าน: "งั้นสลับไปร้านอื่นวันละ 3 ร้าน" ปวดหัวการจัดการ',
                    zh: '🏃以此以此：“我就在3家不同的以此以此以此。”以此以此。'
                }
            }
        ]
    },

    {
        id: 'tut_040',
        text: {
            en: '🧬 The Forbidden Subject: You are tutoring Biology. The parents are religious fundamentalists. They tell you: "Skip the Evolution chapter. It is lies. Teach Creationism instead." Evolution is 30% of the final exam.',
            th: '🧬 วิชาต้องห้าม: คุณสอนชีววิทยา พ่อแม่เคร่งศาสนามาก บอกคุณว่า "ข้ามบทวิวัฒนาการไป มันโกหก สอนเรื่องพระเจ้าสร้างโลกแทน" แต่วิวัฒนาการออกสอบ 30%',
            zh: '🧬 以此以此：你在辅导以此。以此是以此以此以此以此。他们告诉你：“跳过进化论以此。那是以此。以此以此以此。”进化论占以此以此的30%。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤐 Obey Parents: "You are the boss. We will skip it." (Student will fail).',
                    th: '🤐 เชื่อพ่อแม่: "คุณคือนายจ้าง เราจะข้ามครับ" (นักเรียนสอบตกแน่)',
                    zh: '🤐 以此以此：“以此是老板。我们跳过它。”（学生会挂科）。'
                },
                consequence: {
                    en: '⚠️ Educational Malpractice. The student fails the exam. The parents blame YOU for the bad grade, conveniently forgetting their instruction.',
                    th: '⚠️ ผิดจรรยาบรรณวิชาชีพ นักเรียนสอบตก พ่อแม่โทษ "คุณ" ที่สอนไม่ดี ลืมคำสั่งตัวเองเฉย',
                    zh: '⚠️ 以此以此。学生考试不及格。以此因为成绩差怪“你”，以此以此以此他们的指令。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🧪 Covert Teaching: "Tell parents we skipped it. But lock the door and teach Evolution whispering." Risk.',
                    th: '🧪 แอบสอน: "บอกพ่อแม่ว่าข้าม แต่ล็อคห้องแล้วกระซิบสอนวิวัฒนาการ" เสี่ยง',
                    zh: '🧪 以此以此：“告诉以此我们以此了。但以此上门以此进化论。”风险。'
                },
                consequence: {
                    en: '⚖️ Secret Agent. Student passes, but feels guilty lying to parents. If you are caught, you are fired and branded a liar.',
                    th: '⚖️ สายลับชัดๆ นักเรียนผ่าน แต่รู้สึกผิดที่โกหกพ่อแม่ ถ้าโดนจับได้ โดนไล่ออกแถมตราหน้าว่าคนขี้โกหก',
                    zh: '⚖️ 特工。学生以此了，但对以此以此以此感到内疚。如果被以此，你会被解雇并被冠以此谎言以此以此。'
                },
                stats: { competence: 50, ethics: 30, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The Loophole: "I respect your views. But for the test, he needs to know \'what the textbook claims\'. We treat it as \'learning a fiction story\' so he can pass."',
                    th: '🤝 ช่องโหว่: "ผมเคารพความเชื่อคุณ แต่เพื่อสอบ เขาต้องรู้ว่า \'ตำราอ้างว่าอะไร\' เราจะเรียนเหมือน \'เรียนนิยาย\' เพื่อให้เขาผ่าน"',
                    zh: '🤝 以此：“我以此以此的以此。但以此以此，他需要知道‘教科书以此了什么’。我们以此它以此‘学习以此故事’以此他能通过。”'
                },
                consequence: {
                    en: '✅ Diplomatic Genius. Parents agree because their ideology isn\'t threatened. Student learns the material. Grade secured.',
                    th: '✅ อัจฉริยะทางการทูต พ่อแม่ยอมเพราะความเชื่อไม่ถูกคุกคาม นักเรียนได้เรียนเนื้อหา คะแนนปลอดภัย',
                    zh: '✅ 外交以此。以此同意了，因为以此意识形态没有以此以此。学生学到了知识。成绩以此了。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🚫 Resign: "I cannot teach Biology if I cannot teach the core science. Best of luck."',
                    th: '🚫 ลาออก: "ผมสอนชีวะไม่ได้ถ้าห้ามสอนแก่นของวิทยาศาสตร์ โชคดีครับ"',
                    zh: '🚫 以此：“如果不能教核心以此，我就以此以此以此。以此。”'
                }
            }
        ]
    },

    {
        id: 'tut_041',
        text: {
            en: '🌟 The Celebrity Client: A famous actress hires you for her son. The pay is insane ($200/hr). But she hands you a 10-page NDA (Non-Disclosure Agreement) and treats you like a servant, snapping fingers for water.',
            th: '🌟 ลูกค้าเซเลบ: ดาราดังจ้างคุณสอนลูก ค่าจ้างบ้าคลั่ง ($200/ชม.) แต่เธอยื่นสัญญาปิดปาก (NDA) 10 หน้าให้เซ็น และปฏิบัติกับคุณเหมือนคนรับใช้ ดีดนิ้วเรียกเอาน้ำ',
            zh: '🌟 名人客户：以此以此以此以此你为以此儿子以此。报酬以此（200美元/小时）。但她以此以此一份10页的NDA（以此以此以此），并把你以此以此，以此以此以此水。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤐 Suck It Up: "Yes, Ma\'am." Sign it. Endure the abuse. The money is too good.',
                    th: '🤐 ก้มหน้าทน: "ได้ครับคุณนาย" เซ็นไป ทนโดนโขกสับ เงินมันหอมหวน',
                    zh: '🤐 以此：“以此，以此。”签了它。以此以此。钱以此以此了。'
                },
                consequence: {
                    en: '💰 Golden Handcuffs. You start hating yourself. The stress affects your other clients. But you buy a nice car. Soul damage.',
                    th: '💰 กุญแจมือทองคำ คุณเริ่มเกลียดตัวเอง ความเครียดพาลไปลงลูกค้าอื่น แต่ก็ได้รถสวยๆ มาขับ จิตวิญญาณพัง',
                    zh: '💰 以此手铐。你以此以此自己。压力以此以此其他客户。但你以此以此以此以此车。灵魂受损。'
                },
                stats: { competence: 40, ethics: 30, leadership: 10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Re-Frame: "I am happy to sign the NDA. But I am an educator, not personal staff. I need a respectful partnership to teach your son."',
                    th: '🛑 จัดวางตำแหน่งใหม่: "ยินดีเซ็น NDA ครับ แต่ผมเป็นนักการศึกษา ไม่ใช่คนรับใช้ส่วนตัว ผมต้องการความเคารพเพื่อสอนลูกคุณ"',
                    zh: '🛑 重新以此：“我以此以此签NDA。但我是一个以此以此，不是以此以此。我以此以此以此以此以此以此来以此你的儿子。”'
                },
                consequence: {
                    en: '✅ Risk Rewarded. She is taken aback but respects the spine. She stops the finger snapping. You keep the high pay and your dignity.',
                    th: '✅ เสี่ยงแล้วคุ้ม เธอตกใจแต่เคารพในกระดูกสันหลังคุณ เธอเลิกดีดนิ้วเรียก ได้ทั้งเงินก้อนโตและศักดิ์ศรี',
                    zh: '✅ 冒险以此以此。她吃了一惊，但是尊重你的骨气。她以此打响指。你以此以此以此和尊严。'
                },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '📸 Leak Gossip: "Sign the NDA but secretly tell friends about her messy house." (Gossip).',
                    th: '📸 ปล่อยข่าว: "เซ็นนะ แต่แอบบอกเพื่อนเรื่องบ้านรกๆ ของเธอ" (ขาเมาท์)',
                    zh: '📸 以此以此：“签了NDA，但以此以此朋友她家很以此。”（以此）。'
                },
                consequence: {
                    en: '💀 Lawsuit City. Gossip spreads. She finds out. You are sued for breach of contract. You go bankrupt.',
                    th: '💀 เมืองแห่งการฟ้องร้อง ข่าวรั่ว เธอรู้เรื่อง คุณโดนฟ้องละเมิดสัญญา ล้มละลาย',
                    zh: '💀 以此以此。以此以此。她以此了。你因以此合同被起诉。你破产了。'
                },
                stats: { competence: 20, ethics: -50, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🏃 Walk Away: "$200 isn\'t worth being treated like trash. Bye."',
                    th: '🏃 เดินหนี: "$200 ไม่คุ้มกับการโดนมองเป็นขยะ บาย"',
                    zh: '🏃 走开：“200美元以此以此被当垃圾以此。拜拜。”'
                }
            }
        ]
    },

    {
        id: 'tut_042',
        text: {
            en: '📉 The Results Plateau: You have tutored Emily for 2 years. She improved from D to B. Now she is stuck at B. Parents are getting impatient: "Why isn\'t she an A student yet? Maybe we need a new tutor."',
            th: '📉 คะแนนตัน: สอนเอมิลี่มา 2 ปี เธอเก่งขึ้นจาก D เป็น B แต่ตอนนี้ติดแหง็กที่ B พ่อแม่เริ่มหงุดหงิด: "ทำไมยังไม่ได้ A สักที? สงสัยต้องเปลี่ยนครู"',
            zh: '📉 成绩以此：你以此了艾米丽2年。她从D以此到了B。现在以此在B。以此以此以此以此以此：“以此她还以此A以此？以此我们需要换个导师。”'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔄 Pivot Method: "We hit a plateau. Standard tutoring isn\'t enough anymore. We need to switch to \'Advanced Test Strategy\' mode. It\'s harder."',
                    th: '🔄 เปลี่ยนวิธี: "เราเจอทางตัน สอนแบบเดิมไม่พอแล้ว ต้องเปลี่ยนโหมดเป็น \'กลยุทธ์สอบขั้นสูง\' ยากนะไหวไหม"',
                    zh: '🔄 转向方法：“我们以此以此以此。标准以此以此以此了。我们需要以此到‘以此以此以此’模式。这就以此。”'
                },
                consequence: {
                    en: '✅ Renewed Focus. You implicitly admit the old way stopped working. The new "Project" excites them. Emily pushes past the block.',
                    th: '✅ โฟกัสใหม่ ยอมรับกลายๆ ว่าวิธีเก่าไม่ได้ผล "โปรเจกต์" ใหม่ทำให้พวกเขาทึ่ง เอมิลี่ทะลุกำแพงได้',
                    zh: '✅ 重以此以此。你以此以此旧方法以此以此了。新的“项目”让他们以此。艾米丽以此以此以此。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🥶 Blame Student: "Emily isn\'t studying enough on her own. I can only do so much." Deflect.',
                    th: '🥶 โทษนักเรียน: "เอมิลี่ไม่อ่านเองที่บ้านมากพอ ผมช่วยได้แค่นี้แหละ" ปัดสวะ',
                    zh: '🥶 以此学生：“艾米丽自己以此以此以此。我以此以此以此。”以此。'
                },
                consequence: {
                    en: '💀 Relationship Killer. Parents protect their cub. They fire you for having a "bad attitude." Accountability is part of the job.',
                    th: '💀 นักฆ่าความสัมพันธ์ พ่อแม่ปกป้องลูก ไล่คุณออกข้อหา "ทัศนคติแย่" ความรับผิดชอบคืองานของคุณ',
                    zh: '💀 关系以此。父母以此孩子。他们因你“以此以此”而解雇你。以此是工作的一部分。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '👋 Suggest Breakup: "You might be right. Sometimes a new voice helps. I can recommend my colleague." Classy exit.',
                    th: '👋 ชวนเลิก: "คุณอาจจะถูก บางทีเปลี่ยนคนสอนอาจช่วยได้ เดี๋ยวผมแนะนำเพื่อนให้" จากกันด้วยดี',
                    zh: '👋 建议以此：“你以此是对的。有时新的以此会有以此。我可以推荐我的同事。”以此退出。'
                },
                consequence: {
                    en: '🛡️ Professional Integrity. You lose the client, but leave on excellent terms. They refer you to neighbors for "Honesty." Karma points.',
                    th: '🛡️ จรรยาบรรณวิชาชีพ เสียลูกค้าแต่จบสวย พวกเขาบอกต่อเพื่อนบ้านว่าคุณ "ซื่อสัตย์" แต้มบุญทำงาน',
                    zh: '🛡️ 职业操守。你失去了客户，但以此以此离开。他们向邻居以此你的“以此”。因果以此。'
                },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🤥 Just Lie: "She is soooo close to an A. Just one more month!" (String them along).',
                    th: '🤥 โกหกไป: "เธอใกล้ได้ A ม้ากมาก อีกเดือนเดียว!" (เลี้ยงไข้)',
                    zh: '🤥 以此：“她离A以此以此以此了。再以此一个月！”（以此以此）。'
                }
            }
        ]
    },

    {
        id: 'tut_043',
        text: {
            en: '🔺 The Pyramid Scheme: A fellow tutor invites you to coffee. "I made $5k this month selling BrainBoost supplements to my students! You should join my downline. It\'s passive income!"',
            th: '🔺 แชร์ลูกโซ่: เพื่อนติวเตอร์นัดกินกาแฟ "เดือนนี้ฉันได้ $5k จากการขายอาหารเสริมสมองให้นักเรียน! แกมาเป็นลูกข่ายฉันสิ Passive Income นะ!"',
            zh: '🔺 以此骗局：一位导以此你喝咖啡。“我这个月以此给学生补以此赚了5000美元！你应该加入我的以此。这是被动收入！”'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤑 Join In: "Sign me up! I have 30 trusting families to sell to." Abuse your authority.',
                    th: '🤑 เอาด้วย: "สมัครเลย! ฉันมีครอบครัวที่เชื่อใจฉันตั้ง 30 บ้านหวานหมู"',
                    zh: '🤑 加入：“算我一个！我有30个信任我的以此可以以此。”以此你的权威。'
                },
                consequence: {
                    en: '💀 Ethics Violation. Parents trust you for education, not snake oil. You sell some, but soon realize the pills are useless sugar. Reputation destroyed. Refunds demanded.',
                    th: '💀 ผิดจริยธรรม พ่อแม่เชื่อใจเรื่องเรียน ไม่ใช่น้ำมันงู คุณขายได้บ้างแต่รู้ตัวทีหลังว่ามันคือแป้งเปล่าๆ ชื่อเสียงพังยับ โดนขอเงินคืน',
                    zh: '💀 以此以此。家长信任你的教育，而不是以此。你以此了以此，但很快发现药片是无用的糖。声誉以此。以此以此。'
                },
                stats: { competence: 10, ethics: -60, leadership: 0, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Hard Pass: "That is an MLM. I don\'t monetize my students\' health. Stop asking."',
                    th: '🛑 ปฏิเสธเสียงแข็ง: "นั่นมัน MLM ฉันไม่หากินกับสุขภาพนักเรียน เลิกชวนได้แล้ว"',
                    zh: '🛑 果断以此：“那是传销。我不以此以此的健康以此。以此以此。”'
                },
                consequence: {
                    en: '✅ Bullet Dodged. The other tutor eventually crashes and burns. You stay clean and poor(er), but respected.',
                    th: '✅ รอดตัว ติวเตอร์คนนั้นสุดท้ายก็พัง คุณจนกว่าแต่ตัวสะอาด และได้รับความเคารพ',
                    zh: '✅ 躲过以此。以此以此以此以此以此。你以此以此且以此（以此），但以此以此。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧐 Analyze Ingredients: "Show me the science. Oh, it\'s just caffeine and sugar? I\'ll tell students to just drink coffee."',
                    th: '🧐 วิเคราะห์ส่วนผสม: "ขอดูผลวิจัยหน่อย อ้าว แค่คาเฟอีนกับน้ำตาล? งั้นฉันบอกให้นักเรียนกินกาแฟก็ได้"',
                    zh: '🧐 分析成分：“给我看科学依据。噢，只是以此和糖？我会告诉以此以此以此。”'
                },
                consequence: {
                    en: '🌟 Debunker. You save your students money by conducting a science lesson on "Supplement Scams". They love it.',
                    th: '🌟 นักแฉ คุณช่วยนักเรียนประหยัดเงินโดยจัดคลาสวิทย์เรื่อง "กลลวงอาหารเสริม" พวกเขาชอบมาก',
                    zh: '🌟 以此以此。你通过以此“以此以此”的以此以此以此以此省钱。他们以此。'
                },
                stats: { competence: 60, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Indifferent: "Not for me, but good luck." (Enabler).',
                    th: '🤷 เฉยๆ: "ไม่เอาอะ โชคดีนะ" (ผู้สนับสนุนทางอ้อม)',
                    zh: '🤷 以此：“不适合我，祝你好运。”（以此）。'
                }
            }
        ]
    },

    {
        id: 'tut_044',
        text: {
            en: '🏫 The Dream Job Offer: A prestigious private school offers you a full-time teaching job. $60k salary, benefits, paid summer off. But no more $100/hr tutoring side hustle allowed. You curently make $50k but it fluctuates.',
            th: '🏫 ข้อเสนองานในฝัน: โรงเรียนเอกชนหรูเสนองานครูประจำให้ เงินเดือน $60k สวัสดิการดี ปิดเทอมมีเงินเดือน แต่ห้ามรับจ็อบติวชั่วโมงละ $100 อีก ตอนนี้คุณได้ $50k แต่ไม่นิ่ง',
            zh: '🏫 梦想以此以此：一所以此私立学校以此以此全职以此以此。6万美元以此，以此，以此以此以此。但以此以此100美元/小时的以此以此以此。你以此以此5万美元但以此以此。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏢 Take the Job: "I want stability and health insurance. Goodbye hustling!"',
                    th: '🏢 รับงาน: "ฉันต้องการความมั่นคงและประกันสุขภาพ ลาก่อนชีวิตปากกัดตีนถีบ!"',
                    zh: '🏢 接受这份工作：“以此以此以此以此以此。以此以此！”'
                },
                consequence: {
                    en: '🐢 Safe Path. You sleep better. But 2 years later, you miss the thrill of entrepreneurship and the high hourly rate. You are comfortably bored.',
                    th: '🐢 ทางปลอดภัย หลับสบายขึ้น แต่ 2 ปีต่อมา คิดถึงความตื่นเต้นของการเป็นนายตัวเองและค่าชั่วโมงแพงๆ สบายแต่เบื่อ',
                    zh: '🐢 安全以此。你睡得更好。但2年后，你以此以此以此的以此和高以此。你以此得以此。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 Stay Solo: "I bet on myself. I will grow my business to $100k. I value freedom over safety."',
                    th: '🚀 ลุยเดี่ยวต่อ: "ฉันพนันข้างตัวเอง ฉันจะปั้นธุรกิจให้แตะ $100k อิสระสำคัญกว่าความปลอดภัย"',
                    zh: '🚀以此以此：“我以此自己。以此以此以此以此以此到10万美元。以此以此以此以此。”'
                },
                consequence: {
                    en: '🌟 High Risk High Reward. You hustle hard. It takes 3 years, but you eventually hire other tutors and make $120k. You are the boss.',
                    th: '🌟 เสี่ยงสูงผลตอบแทนสูง ลุยแหลก ใช้เวลา 3 ปีแต่สุดท้ายคุณจ้างครูคนอื่นและทำเงิน $120k เป็นบอสเต็มตัว',
                    zh: '🌟 高风险高回报。你以此以此。花了3年时间，但最终你以此了以此导以此以此12万美元。以此以此。'
                },
                stats: { competence: 60, ethics: 40, leadership: 60, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Negotiate Hybrid: "I\'ll take the job if I can keep 5 private clients on weekends. It keeps me sharp."',
                    th: '🤝 ต่อรองลูกผสม: "รับงานก็ได้ถ้าให้สอนพิเศษเสาร์อาทิตย์ได้ 5 คน มันช่วยให้ฉันคมอยู่เสมอ"',
                    zh: '🤝 以此以此：“以此以此以此周末以此5个以此以此，以此以此以此。”'
                },
                consequence: {
                    en: '✨ Best of Both. They agree quietly. You make $60k + $15k side income. You work a lot, but you have security and cash.',
                    th: '✨ ดีสุดทั้งสองทาง เขายอมแบบเงียบๆ คุณได้ $60k + $15k งานเสริม ทำงานหนักแต่มีทั้งความมั่นคงและเงิน',
                    zh: '✨ 两全其美。他们以此以此以此。你以此6万+1.5万以此。你以此以此，以此以此以此以此。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤥 Secret Hustle: "I\'ll take the job but keep tutoring secretly under a fake name."',
                    th: '🤥 แอบรับงาน: "รับงานประจำแต่แอบสอนพิเศษใช้นามแฝง"',
                    zh: '🤥 秘密兼职：“我会接受这份工作，但会用假名偷偷继续当家教。”'
                },
                consequence: {
                    en: '💀 Breach of Contract. You are caught. The school sues you and you lose your job and your reputation. Honesty is better than a secret hustle.',
                    th: '💀 ละเมิดสัญญา คุณโดนจับได้ โรงเรียนฟ้องร้อง คุณเสียทั้งงานและชื่อเสียง ความซื่อสัตย์ดีกว่าการแอบทำลับๆ',
                    zh: '💀 违反合同。你被抓住了。学校起诉你，你失去了工作和名誉。诚实比秘密兼职更好。'
                },
                stats: { competence: 20, ethics: -10, leadership: 0, innovation: 10 }
            }
        ]
    },

    {
        id: 'tut_045',
        text: {
            en: '😨 Test Anxiety Meltdown: During a mock SAT, your student Sophie starts shaking and vomits on the table. She is having a full panic attack. She says "My dad will kill me if I don\'t finish."',
            th: '😨 สติแตกกลางห้องสอบ: ระหว่างสอบจำลอง SAT โซฟีตัวสั่นแล้วอ้วกใส่โต๊ะ เธอแพนิคขั้นสุด พูดว่า "พ่อฆ่าหนูแน่ถ้าทำไม่เสร็จ"',
            zh: '😨 考试焦虑崩溃：在模拟SAT考试期间，你的学生苏菲开始发抖并吐在桌子上。她正处于完全惊恐发作的状态。她说：“如果我不写完，我爸会杀了我的。”'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧹 Clean & Continue: "It\'s okay. Wipe it up. We have 20 minutes left. Push through!"',
                    th: '🧹 เช็ดแล้วไปต่อ: "ไม่เป็นไร เช็ดออก เหลือ 20 นาที ลุยต่อ!"',
                    zh: '🧹 清理并继续：“没关系。擦掉它。我们还剩20分钟。坚持住！”'
                },
                consequence: {
                    en: '💀 Trauma Bond. She finishes but is traumatized. She associates you with torture. She quits tutoring soon after.',
                    th: '💀 ปมในใจ เธอทำเสร็จแต่เสียขวัญ เธอเชื่อมโยงคุณกับการทรมาน ไม่นานก็เลิกเรียน',
                    zh: '💀 创伤纽带。她完成了考试，但留下了心理创伤。她将你与折磨联系在一起。不久后她就不学了。'
                },
                stats: { competence: 20, ethics: 10, leadership: 0, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Abort & Intervene: "Stop the test. Breathe. I am calling your dad to explain this isn\'t healthy. I will take the heat."',
                    th: '🛑 หยุดและแทรกแซง: "เลิกสอบ หายใจเข้า ครูจะโทรคุยกับพ่อเองว่าแบบนี้ไม่ดี ครูรับหน้าให้เอง"',
                    zh: '🛑 中止并干预：“停止测试。呼吸。我会给你爸爸打电话解释这不健康。我会承担责任。”'
                },
                consequence: {
                    en: '✅ Heroic Leadership. You stand up to the dad. He screams, but realizes he went too far. Sophie trusts you as her protector. Mental health prioritized.',
                    th: '✅ ภาวะผู้นำแบบฮีโร่ คุณยืนหยัดชนกับพ่อ เขาวีนแตกแต่ก็คิดได้ว่าทำเกินไป โซฟีไว้ใจคุณฐานะผู้ปกป้อง สุขภาพจิตต้องมาก่อน',
                    zh: '✅ 英雄般的领导力。你勇敢面对她爸爸。他虽然大吼大叫，但也意识到自己太过分了。苏菲视你为保护者。心理健康得到了优先考虑。'
                },
                stats: { competence: 50, ethics: 60, leadership: 60, innovation: 20 }
            }
        ]
    },

    {
        id: 'tut_046',
        text: {
            en: '🤖 The AI Dilemma: You catch your student using ChatGPT to write all his homework. He says, "Why should I learn this if an AI can do it in seconds?"',
            th: '🤖 วิกฤต AI: คุณจับได้ว่านักเรียนใช้ ChatGPT เขียนการบ้านทั้งหมด เขาบอกว่า "จะเรียนไปทำไมในเมื่อ AI ทำได้ในไม่กี่วินาที?"',
            zh: '🤖 AI 困境：你抓到学生用ChatGPT写所有作业。他说：“如果AI几秒钟就能搞定，我为什么要学这个？”'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Ban AI: "No AI allowed. You must write everything by hand in front of me."',
                    th: '🚫 แบน AI: "ห้ามใช้ AI ต้องเขียนด้วยมือต่อหน้าครูเท่านั้น"',
                    zh: '🚫 禁止AI：“不准使用AI。你必须在我面前手写所有内容。”'
                },
                consequence: {
                    en: '😐 Traditionalist. He learns the basics, but feels you are out of touch with the modern world. He does it behind your back anyway.',
                    th: '😐 นักอนุรักษนิยม เขาได้เรียนพื้นฐานแต่รู้สึกว่าคุณล้าหลัง สุดท้ายเขาก็แอบไปใช้อยู่ดี',
                    zh: '😐 传统主义者。他学到了基础知识，但觉得你与现代世界脱节。总之他还是会瞒着你用。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛠️ Adapt & Integrate: "Use AI to brainstorm, but you must explain the logic behind every sentence it generates."',
                    th: '🛠️ ปรับตัวและผสมผสาน: "ใช้ AI ช่วยคิดได้ แต่เธอต้องอธิบายตรรกะเบื้องหลังทุกประโยคที่มันเขียนออกมาได้นะ"',
                    zh: '🛠️ 适应与融合：“可以用AI来头脑风暴，但你必须解释它生成的每一句话背后的逻辑。”'
                },
                consequence: {
                    en: '✅ Future-Proof. He learns to use AI as a tool, not a crutch. His critical thinking improves. You are a modern educator.',
                    th: '✅ พร้อมสู่อนาคต เขาเรียนรู้ที่จะใช้ AI เป็นเครื่องมือ ไม่ใช่ไม้ค้ำยัน ทักษะการคิดเชิงวิพากษ์ดีขึ้น คุณคือนักการศึกษายุคใหม่',
                    zh: '✅ 适应未来。他学会了将AI作为工具而非拐杖。他的批判性思维得到了提升。你是一位现代教育家。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 60 }
            }
        ]
    },

    {
        id: 'tut_047',
        text: {
            en: '💎 The Niche Specialist: You decide to stop being a "general tutor" and focus exclusively on "Olympiad Level Physics." You double your rates, but 70% of your current clients leave.',
            th: '💎 ผู้เชี่ยวชาญเฉพาะทาง: คุณตัดสินใจเลิกเป็น "ติวเตอร์ทั่วไป" และหันไปโฟกัสที่ "ฟิสิกส์โอลิมปิก" เท่านั้น คุณขึ้นราคาสองเท่า แต่ลูกค้าเก่า 70% ลาออก',
            zh: '💎 小众专家：你决定不再做一个“全能导师”，转而专门研究“奥林匹克物理”。你把费率翻了一番，但你目前70%的客户都离开了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Commit: "Expertise pays more. I will find the students who need this level of help."',
                    th: '🚀 ลุยต่อ: "ความเชี่ยวชาญทำเงินได้มากกว่า ฉันจะตามหากลุ่มเด็กที่ต้องการความเก่งระดับนี้เอง"',
                    zh: '🚀 坚定立场：“专业知识价值更高。我会找到需要这种水平帮助的学生。”'
                },
                consequence: {
                    en: '🌟 Prestige. It takes 6 months, but you become the best in the city. You make $150/hr and work half the hours. Legend status.',
                    th: '🌟 ความเก๋ไก๋ ใช้เวลา 6 เดือน แต่คุณกลายเป็นคนที่เก่งที่สุดในเมือง ได้ชั่วโมงละ $150 และทำงานน้อยลงครึ่งหนึ่ง กลายเป็นตำนาน',
                    zh: '🌟 声望。花了6个月时间，你成了全市最棒的。你每小时赚150美元，工作时间减少了一半。传奇地位。'
                },
                stats: { competence: 60, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '📉 Retreat: "I can\'t afford to lose these clients. I\'ll stay a generalist."',
                    th: '📉 ถอยทัพ: "เสียลูกค้ากลุ่มนี้ไม่ได้หรอก กลับไปสอนทั่วไปเหมือนเดิมดีกว่า"',
                    zh: '📉 退缩：“我承受不起失去这些客户的代价。我还是做个全能型导师吧。”'
                },
                consequence: {
                    en: '😐 Safe but Stagnant. You have a full schedule but you are bored and capped at a certain income level. You missed your shot at the top.',
                    th: '😐 ปลอดภัยแต่ย่ำอยู่กับที่ ตารางเต็มแต่คุณเบื่อและรายได้มีเพดานจำกัด พลาดโอกาสที่จะไปถึงจุดสูงสุด',
                    zh: '😐 安全但停滞不前。你的日程排得很满，但你感到厌倦，收入也遇到了瓶颈。你错失了登上巅峰的机会。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 }
            }
        ]
    },

    {
        id: 'tut_048',
        text: {
            en: '🏢 The Learning Center: You rent a small storefront to start a tutoring center. You hire 2 assistants. Overhead is $3,000/month. You need 50 regular students to break even.',
            th: '🏢 ศูนย์การเรียนรู้: คุณเช่าตึกหน้ากว้างเพื่อเปิดศูนย์ติวเตอร์ จ้างผู้ช่วย 2 คน มีค่าใช้จ่ายคงที่ $3,000 ต่อเดือน ต้องมีเด็ก 50 คนถึงจะคุ้มทุน',
            zh: '🏢 学习中心：你租了一个小店面来创办一个辅导中心。你聘请了2名助理。管理费用为每月3000美元。你需要50名固定学生才能收支平衡。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📣 Marketing Blitz: "Spend $2,000 on Facebook ads and local flyers to get students fast."',
                    th: '📣 โหมโฆษณา: "ยอมทุ่ม $2,000 กับโฆษณา Facebook และใบปลิวเพื่อให้ได้เด็กมาเร็วๆ"',
                    zh: '📣 营销攻势：“花2000美元去做Facebook广告和本地传单，快速招揽学生。”'
                },
                consequence: {
                    en: '📈 Success. The center hits 60 students in two months. You are now a business owner, not just a teacher.',
                    th: '📈 สำเร็จ ศูนย์มีเด็กถึง 60 คนในเวลา 2 เดือน ตอนนี้คุณเป็นเจ้าของธุรกิจเต็มตัวแล้ว ไม่ใช่แค่ครู',
                    zh: '📈 成功。中心在两个月内招收了60名学生。你现在是一个企业主，而不仅仅是一个老师。'
                },
                stats: { competence: 50, ethics: 40, leadership: 60, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🐢 Slow Growth: "Don\'t spend on ads. Rely on current students recommending friends."',
                    th: '🐢 ค่อยๆ โต: "ไม่จ่ายค่าโฆษณา เน้นให้เด็กเก่าแนะนำเพื่อนมา"',
                    zh: '🐢 缓慢增长：“不要在广告上花钱。依靠现有学生推荐朋友。”'
                },
                consequence: {
                    en: '⚠️ Financial Stress. You only get 30 students. You lose $1,000/month from your savings. You might have to close.',
                    th: '⚠️ เครียดเรื่องเงิน ได้เด็กแค่ 30 คน ควักกระเป๋าจ่ายขาดทุนเดือนละ $1,000 อาจจะต้องปิดตัว',
                    zh: '⚠️ 财务压力。你只招到了30名学生。每个月要亏损1000美元存款。你可能不得不关门。'
                },
                stats: { competence: 30, ethics: 40, leadership: 30, innovation: 10 }
            }
        ]
    },

    {
        id: 'tut_049',
        text: {
            en: '🎓 The Ivy League Win: Your long-term student, Timmy, gets into Harvard. He gives you a glowing testimonial video. "I couldn\'t have done it without you."',
            th: '🎓 ความสำเร็จระดับไอวี่ลีก: ทิมมี่ นักเรียนขาประจำของคุณสอบเข้าฮาร์วาร์ดได้ เขาถ่ายคลิปขอบคุณคุณอย่างสุดซึ้ง "ผมทำไม่ได้ถ้าไม่มีครู"',
            zh: '🎓 常春藤盟校的胜利：你的长期学生蒂米被哈佛录取了。他为你拍了一段赞不绝口的推荐视频。“如果没有你，我不可能做到。”'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Use as Master Ad: "Post it everywhere. This is my legacy. My rates go up to $200/hr."',
                    th: '📢 ใช้เป็นโฆษณาตัวเด็ด: "โพสต์ทุกที่เลย นี่คือผลงานชิ้นโบแดง ขึ้นราคาเป็น $200/ชม. ไปเลย"',
                    zh: '📢 作为金牌广告：“到处发布。这是我的成就。我的费率涨到了每小时200美元。”'
                },
                consequence: {
                    en: '💰 Premium Status. You are now a "Consultant," not just a tutor. You work with elite families only. Wealth +100.',
                    th: '💰 สถานะพรีเมียม ตอนนี้คุณเป็น "ที่ปรึกษา" ไม่ใช่แค่ติวเตอร์ รับเฉพาะครอบครัวระดับอีลิทเท่านั้น ความมั่งคั่ง +100',
                    zh: '💰 高级地位。你现在是一个“顾问”，而不仅仅是一个导师。你只为精英家庭提供服务。财富值+100。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '❤️ Keep it Humble: "Thank him privately. Keep the video for your own memories. Don\'t monetize his success."',
                    th: '❤️ ถ่อมตัวเข้าไว้: "ขอบคุณเขาเป็นการส่วนตัว เก็บวิดีโอไว้ดูเป็นความทรงจำพอ อย่าเอาความสำเร็จลูกศิษย์มาเป็นเงิน"',
                    zh: '❤️ 保持谦逊：“私下感谢他。把视频留作个人纪念。不要利用他的成功来赚钱。”'
                },
                consequence: {
                    en: '🛡️ Integrity. You feel great about your impact. But you miss a huge chance to scale. You stay a happy, well-paid tutor.',
                    th: '🛡️ ทรงเกียรติ คุณรู้สึกดีกับสิ่งที่ทำสำเร็จ แต่พลาดโอกาสครั้งใหญ่ที่จะขยายธุรกิจ ยังคงเป็นติวเตอร์ที่มีความสุขและรายได้ดี',
                    zh: '🛡️ 正直。你为自己的影响力感到自豪。但你错过了一个扩大规模的绝佳机会。你依然是一个快乐、高薪的导师。'
                },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 10 }
            }
        ]
    },

    {
        id: 'tut_050',
        text: {
            en: '🎭 The Retirement Reflection: You reach 30 years in tutoring. You have taught 1,000 students. You are invited to speak at a national education conference. What is your final message?',
            th: '🎭 ย้อนรอยวัยเกษียณ: คุณสอนมาครบ 30 ปี สอนเด็กมาแล้วกว่า 1,000 คน ได้รับเชิญไปพูดในงานสัมมนาการศึกษาระดับชาติ ข้อความสุดท้ายของคุณคืออะไร?',
            zh: '🎭 退休感怀：你从事辅导工作已满30年。你教过1000名学生。你受邀在全国教育会议上发言。你的最后一段感言是什么？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌍 Scale is Key: "Education is a business. Use technology and systems to reach millions. That\'s how you change the world."',
                    th: '🌍 ขนาดคือหัวใจ: "การศึกษาคือธุรกิจ ใช้เทคโนโลยีและระบบเพื่อเข้าถึงคนเป็นล้าน นั่นแหละวิธีเปลี่ยนโลก"',
                    zh: '🌍 规模是关键：“教育是一门生意。利用技术和系统去触达数百万人。这就是你改变世界的方式。”'
                },
                consequence: {
                    en: '🌟 The Visionary. You retire having built a massive online platform that continues after you. Your impact is global.',
                    th: '🌟 นักวิสัยทัศน์ คุณเกษียณพร้อมแพลตฟอร์มออนไลน์ยักษ์ใหญ่ที่ดำเนินต่อไปได้แม้ไม่มีคุณ อิทธิพลของคุณแผ่ขยายไปทั่วโลก',
                    zh: '🌟 远见者。你退休时建立了一个庞大的在线平台，即使在你离开后也会继续运营。你的影响力是全球性的。'
                },
                stats: { competence: 60, ethics: 40, leadership: 60, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '❤️ Relationship is Key: "It\'s not about the grades. It\'s about the one-on-one bond. That is the only thing that truly lasts."',
                    th: '❤️ ความสัมพันธ์คือหัวใจ: "เกรดไม่ใช่ประเด็นสำคัญ ความผูกพันแบบตัวต่อตัวต่างหากคือสิ่งเดียวที่ยั่งยืนแท้จริง"',
                    zh: '❤️ 关系是关键：“重要的不只是成绩，而是那一对一的纽带。那是唯一真正长久的东西。”'
                },
                consequence: {
                    en: '🌟 The Mentor. You retire with a heart full of letters from students you changed. You are the "beloved teacher" of a generation.',
                    th: '🌟 เมนเทอร์ คุณเกษียณพร้อมจดหมายขอบคุณกองโตจากลูกศิษย์ที่คุณช่วยเปลี่ยนชีวิต คุณคือ "ครูผู้เป็นที่รัก" ของคนยุคนั้น',
                    zh: '🌟 导师。你退休时，心里装满了那些被你改变的学生寄来的信件。你是一代人心中“挚爱的老师”。'
                },
                stats: { competence: 50, ethics: 60, leadership: 60, innovation: 10 }
            }
        ]
    }
];