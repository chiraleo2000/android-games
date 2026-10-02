
// Nurse Career Questions
// Ultra-Comprehensive set: 50 detailed, story-rich questions
// Each scenario is a mini-case study with deep consequences and realistic stat impacts

export const nurseQuestions = [

    // SECTION 1: THE ROOKIE PHASE / FOUNDATION (Questions 1-15)

    {
        id: 'nu_001',
        text: {
            en: '💉 The Impossible IV: It\'s your first week. You have a dehydrated, elderly patient who needs antibiotics NOW. You\'ve missed the vein twice. The family is watching like hawks and whispering about your competence. The Charge Nurse is busy.',
            th: '💉 เจาะเลือดที่เป็นไปไม่ได้: สัปดาห์แรกของคุณ มีคนไข้สูงอายุขาดน้ำที่ต้องได้รับยาฆ่าเชื้อด่วน คุณเจาะพลาดมาสองรอบแล้ว ญาตินั่งจ้องตาไม่กะพริบและซุบซิบเรื่องฝีมือคุณ หัวหน้าเวรก็ยุ่งมาก',
            zh: '💉 不可能的静脉注射：这是你的第一周。你有一位脱水的老年病人现在需要抗生素。你已经扎偏了两次。家属像鹰一样盯着，窃窃私语你的能力。护士长很忙。'
        },
        options: [
            { id: 'A', text: { en: '💪 Try One More Time: "I know I can get it. I\'ll use the smaller gauge needle and go for the hand. Confidence is key."', th: '💪 ลองอีกครั้ง: "ฉันรู้ว่าฉันทำได้ ฉันจะใช้เข็มเบอร์เล็กกว่านี้เจาะที่หลังมือ ความมั่นใจคือพรรด"', zh: '💪 再试一次："我知道我能行。我会用更小号的针头扎手部。自信是关键。"' }, consequence: { en: '❌ Hematoma Horror! You blow the vein. It swells up instantly. The daughter yells "Get someone who knows what they\'re doing!" You leave in shame. Patient gets meds 1 hour late.', th: '❌ ฝันร้ายเลือดคั่ง! เส้นแตก บวมเป่งทันที ลูกสาวตะโกน "ไปเรียกคนที่ทำเป็นมา!" คุณเดินออกไปอย่างอับอาย คนไข้ได้ยาช้าไป 1 ชั่วโมง', zh: '❌ 血肿噩梦！静脉破裂。瞬间肿胀。女儿大喊"找个懂行的人来！"你羞愧地离开。病人晚了1小时才用药。' }, stats: { competence: -10, ethics: 20, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '🤝 Ask a Peer: "Hey Sarah, I really need help with room 302. I\'ve missed twice and don\'t want to hurt him again. Can you teach me your trick?"', th: '🤝 ขอความช่วยเหลือเพื่อน: "เฮ้ซาร่า ช่วยห้อง 302 หน่อย ฉันพลาดมาสองรอบแล้วไม่อยากให้เขาเจ็บอีก สอนเทคนิคเธอหน่อยได้ไหม?"', zh: '🤝 求助同事："嘿Sarah，302房真的需要帮忙。我错了两次，不想再让他受伤。能教我你的技巧吗？"' }, consequence: { en: '✅ Teamwork Win! Sarah gets it in one shot. She shows you how to anchor the rolling vein. Family thanks you for getting help. You learned a skill and built trust.', th: '✅ ชนะด้วยทีมเวิร์ค! ซาร่าเจาะทีเดียวได้ เธอสอนวิธีตรึงเส้นเลือดที่ดิ้นหนี ญาติขอบคุณที่คุณไปตามคนมาช่วย คุณได้ทักษะและสร้างความเชื่อใจ', zh: '✅ 团队胜利！Sarah一次成功。她教你如何通过固定滚动的静脉。家属感谢你寻求帮助。你学到了技能并建立了信任。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🔦 Use Vein Finder Tech: "I\'ll go grab the AccuVein light from the other unit. Better to be slow and accurate than fast and wrong."', th: '🔦 ใช้เครื่องส่องเส้นเลือด: "เดี๋ยวไปเอาเครื่อง AccuVein จากอีกตึก ช้าแต่ชัวร์ดีกว่าเร็วแล้วผิด"', zh: '🔦 使用静脉显像仪："我去另一个科室拿AccuVein灯。慢而准总比快而错好。"' }, consequence: { en: '✅ Tech Solution! The light reveals a hidden branch vein. You stick it perfectly. The family is impressed by the technology. "High tech hospital!" they say.', th: '✅ ทางออกด้วยเทคโนโลยี! แสงส่องให้เห็นเส้นเลือดที่ซ่อนอยู่ คุณเจาะได้เป๊ะ ญาติประทับใจเทคโนโลยี "โรงพยาบาลไฮเทค!"', zh: '✅ 技术解决方案！灯光显示出隐藏的静脉分支。你完美扎入。家属对技术印象深刻。"高科技医院！"' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 50 } },
            { id: 'D', text: { en: '🤐 Hide and Wait: "I\'ll give him some water and come back in 20 mins. Maybe the veins will pop up." (Avoiding the problem)', th: '🤐 หลบไปก่อน: "เดี๋ยวให้ดื่มน้ำแล้วอีก 20 นาทีมาดูใหม่ เผื่อเส้นจะขึ้น" (หนีปัญหา)', zh: '🤐 躲避等待："我给他喝点水，20分钟后再来。也许静脉会鼓起来。"（逃避问题）' }, consequence: { en: '💀 Sepsis Risk! The antibiotics are critical. In that 20 minutes, his fever spikes. Charge Nurse finds out and writes you up. "Delay of care is negligence!"', th: '💀 เสี่ยงติดเชื้อในกระแสเลือด! ยาฆ่าเชื้อสำคัญมาก ใน 20 นาทีนั้นไข้เขาขึ้นสูง หัวหน้าเวรรู้เข้าและทำทัณฑ์บน "การรักษาล่าช้าคือความประมาท!"', zh: '💀 败血症风险！抗生素至关重要。在这20分钟里，他发高烧。护士长发现并记过。"延误治疗就是疏忽！"' }, stats: { competence: -20, ethics: -30, leadership: -20, innovation: 0 } }
        ]
    },

    {
        id: 'nu_002',
        text: {
            en: '💊 The Medication Math: It\'s 3 AM. You\'re exhausted. The doctor ordered a complex pediatric insulin drip based on weight in lbs, but the pump handles kg. Your calculation says 4.5ml/hr. Your gut says "that looks like too much for a baby."',
            th: '💊 คณิตศาสตร์ยา: ตี 3 คุณเหนื่อยมาก หมอสั่งดริปอินซูลินเด็กที่ซับซ้อนโดยใช้น้ำหนักปอนด์ แต่เครื่องใช้กิโลกรัม คุณคำนวณได้ 4.5ml/hr สัญชาตญาณบอกว่า "มันดูเยอะไปสำหรับเด็กทารกนะ"',
            zh: '💊 药物计算：凌晨3点。你筋疲力尽。医生根据磅为单位的体重开了一个复杂的儿科胰岛素滴注，但泵使用的是千克。你的计算结果是4.5ml/hr。你的直觉说"这对婴儿来说太多了"。'
        },
        options: [
            { id: 'A', text: { en: '🔢 Recalculate Alone: "I\'ll just do the math again on paper. I was good at math in school. Don\'t want to bother anyone."', th: '🔢 คำนวณใหม่คนเดียว: "เดี๋ยวคิดเลขในกระดาษอีกรอบ ฉันเก่งเลขตอนเรียน ไม่อยากกวนใคร"', zh: '🔢 独自重新计算："我会在纸上再算一遍。我在学校数学很好。不想打扰任何人。"' }, consequence: { en: '⚠️ Close Call! You find you missed a decimal. It should be 0.45ml/hr. You almost killed the baby. You catch it, but relying on tired brains is dangerous.', th: '⚠️ เกือบไป! คุณเจอว่าทศนิยมผิด มันต้อง 0.45ml/hr คุณเกือบฆ่าเด็กแล้ว คุณแก้ทัน แต่การไว้ใจสมองที่ล้าอันตรายมาก', zh: '⚠️ 险些出错！你发现你看错了一个小数点。应该是0.45ml/hr。你差点杀了那个婴儿。你发现了，但依赖疲惫的大脑是危险的。' }, stats: { competence: 30, ethics: 20, leadership: 0, innovation: 0 } },
            { id: 'B', text: { en: '👥 Double Check Policy: "Hey Mark, can you independently calculate this drip rate? I want to verify before I program the pump."', th: '👥 นโยบายเช็คคู่: "เฮ้มาร์ค ช่วยคำนวณเรทนี้แยกกันหน่อยได้ไหม? อยากยืนยันก่อนตั้งเครื่อง"', zh: '👥 双重检查政策："嘿Mark，你能独立计算这个滴注速度吗？我想在设置泵之前验证一下。"' }, consequence: { en: '✅ Safety Standard! Mark calculates 0.45. You compare. You realize the error safely. This is the gold standard of nursing care.', th: '✅ มาตรฐานความปลอดภัย! มาร์คได้ 0.45 คุณเทียบกัน รู้เลยว่าผิด นี่คือมาตรฐานทองคำของการพยาบาล', zh: '✅ 安全标准！Mark算出0.45。你们对比。安全发现了错误。这是护理的金标准。' }, stats: { competence: 50, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '📞 Wake the Doctor: "Dr. Evans, your order is confusing. Did you mean lbs or kg? Please clarify."', th: '📞 ปลุกหมอ: "หมออีแวนส์คะ ออเดอร์งงๆ หมอหมายถึงปอนด์หรือกิโล? ช่วยเคลียร์หน่อย"', zh: '📞 叫醒医生："Evans医生，你的医嘱很乱。你是说磅还是千克？请澄清。"' }, consequence: { en: '😡 Grumpy but Safe. Doctor is annoyed at being woken but confirms the weight. He respects you for checking, even if he grumbles.', th: '😡 หงุดหงิดแต่ปลอดภัย หมอรำคาญที่โดนปลุกแต่ยืนยันน้ำหนัก เขาเคารพที่คุณเช็ค แม้จะบ่นงึมงำ', zh: '😡 脾气暴躁但安全。医生因被叫醒而恼火，但确认了体重。他尊重你的核查，即使他在发牢骚。' }, stats: { competence: 40, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '💉 Run the 4.5ml: "The math doesn\'t lie. Doctor knows best. I\'ll start it."', th: '💉 เดินเครื่อง 4.5ml: "คณิตศาสตร์ไม่โกหก หมอรู้ดีที่สุด เดินเครื่องเลย"', zh: '💉 执行4.5ml："数学不会撒谎。医生最清楚。我开始了。"' }, consequence: { en: '💀 FATAL ERROR. Hypoglycemic crash within 30 mins. Code Blue. The baby suffers brain damage. You lose your license and face manslaughter charges.', th: '💀 ความผิดพลาดถึงตาย! น้ำตาลตกวูบใน 30 นาที Code Blue เด็กสมองเสียหาย คุณถูกยึดใบประกอบและโดนข้อหาฆ่าคนโดยไม่เจตนา', zh: '💀 致命错误。30分钟内低血糖休克。蓝色代码。婴儿遭受脑损伤。你吊销执照并将面临过失杀人指控。' }, stats: { competence: -50, ethics: -60, leadership: -40, innovation: 0 } }
        ]
    },

    {
        id: 'nu_003',
        text: {
            en: '🚿 The Unpleasant Task: A morbidly obese patient has had a massive explosive accident in bed. It\'s everywhere. He is embarrassed and crying. The CNA (assistant) is on break. It\'s just you.',
            th: '🚿 งานที่ไม่น่าอภิรมย์: คนไข้โรคอ้วนถ่ายหนักระเบิดเลอะเทอะเต็มเตียง เขาอายและกำลังร้องไห้ ผู้ช่วยพยาบาลพักอยู่ มีแค่คุณคนเดียว',
            zh: '🚿 令人不愉快的任务：一位病态肥胖的病人在床上发生了大规模排泄事故。到处都是。他感到尴尬并哭了。护士助理在休息。只有你。'
        },
        options: [
            { id: 'A', text: { en: '❤️ Clean Him with Dignity: "It happens to everyone, Mr. Jones. Don\'t worry. Let\'s get you fresh and comfortable." You dive in.', th: '❤️ ทำความสะอาดอย่างให้เกียรติ: "มันเกิดขึ้นกับทุกคนค่ะคุณโจนส์ อย่ากังวล เดี๋ยวทำความสะอาดให้สบายตัวนะ" คุณลงมือทำทันที', zh: '❤️ 有尊严地为他清洗："这也是常有的事，Jones先生。别担心。让我们让你清爽舒适。"你开始动手。' }, consequence: { en: '✅ True Compassion. It takes 45 mins. You are sweating. But he looks at you like an angel. "Thank you for not making me feel small." This is the heart of nursing.', th: '✅ ความเมตตาที่แท้จริง! ใช้เวลา 45 นาที คุณเหงื่อท่วม แต่เขามองคุณเหมือนนางฟ้า "ขอบคุณที่ไม่ทำให้ผมรู้สึกต่ำต้อย" นี่คือหัวใจของการพยาบาล', zh: '✅ 真正的同情心。花了45分钟。你满头大汗。但他像看天使一样看着你。"谢谢你没有让我感到卑微。"这是护理的核心。' }, stats: { competence: 30, ethics: 60, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '⏳ Wait for CNA: "Let me just cover you up... we need two people for safety." (Trutfully, you just don\'t want to do it alone).', th: '⏳ รอผู้ช่วย: "ขอคลุมผ้าไว้ก่อนนะ... เราต้องใช้สองคนเพื่อความปลอดภัย" (จริงๆ คือไม่อยากทำคนเดียว)', zh: '⏳ 等待护士助理："让我先把你盖起来...为了安全我们需要两个人。"（说实话，你只是不想独自做这件事）。' }, consequence: { en: '😔 Loss of Dignity. He lies in his own mess for 20 minutes waiting. He feels humiliated. The connection is broken.', th: '😔 สูญเสียศักดิ์ศรี เขานอนจมกองอึตัวเอง 20 นาทีเพื่อรอ เขารู้สึกอัปยศ ความสัมพันธ์พังทลาย', zh: '😔 丧失尊严。他在自己的排泄物中躺了20分钟等待。他感到羞辱。这种连接破裂了。' }, stats: { competence: 10, ethics: -10, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🤢 Show Disgust: "Oh god, the smell... I need a mask." You gag visibly.', th: '🤢 แสดงความรังเกียจ: "โอ้พระเจ้า กลิ่น... ขอหน้ากากหน่อย" คุณทำท่าจะอ้วกให้เห็น', zh: '🤢 表现出厌恶："天哪，这味道...我需要个口罩。"你明显地干呕。' }, consequence: { en: '💀 Trauma. He remembers your face of disgust for the rest of his life. He avoids calling for help next time and gets a bedsore. Professionalism fail.', th: '💀 บาดแผลทางใจ เขาจำหน้าขยะแขยงของคุณไปตลอดชีวิต ครั้งหน้าเขาไม่กล้าเรียกและเป็นแผลกดทับ ความเป็นมืออาชีพล้มเหลว', zh: '💀 创伤。他这辈子都记得你厌恶的表情。下次他不敢求助，导致褥疮。专业性失败。' }, stats: { competence: -10, ethics: -50, leadership: -30, innovation: 0 } }
        ]
    },

    {
        id: 'nu_004',
        text: {
            en: '🩺 The Arrogant Surgeon: Dr. Viper is famous but toxic. He screams at you in front of the patient: "Why isn\'t this tray set up correctly? Are you stupid?" The tray IS set up correctly, per the new protocol he didn\'t read.',
            th: '🩺 ศัลยแพทย์ขี้โอ่: หมอไวเปอร์ดังแต่เป็นพิษ เขาตะคอกคุณต่อหน้าคนไข้: "ทำไมจัดถาดไม่ถูก? โง่หรือเปล่า?" ถาดจัดถูกแล้วตามระเบียบใหม่ที่เขาไม่ได้อ่าน',
            zh: '🩺 傲慢的外科医生：Viper医生很有名但很恶毒。他在病人面前对你大吼："为什么这个托盘没摆好？你是傻瓜吗？"托盘是按新规程摆好的，是他没看。'
        },
        options: [
            { id: 'A', text: { en: '🤐 Swallow it: Apologize to de-escalate. "Sorry Doctor, I\'ll fix it." (Peacekeeper)', th: '🤐 กลืนเลือด: ขอโทษเพื่อลดแรงปะทะ "ขอโทษค่ะหมอ เดี๋ยวแก้ให้" (ผู้รักษาสันติภาพ)', zh: '🤐 忍气吞声：道歉以缓和局势。"对不起医生，我会改。"（维和者）' }, consequence: { en: '📉 Enabled. He calms down but learns he can abuse you. Patient loses confidence in you. You go home feeling small.', th: '📉 ให้ท้าย! เขาเย็นลงแต่เรียนรู้ว่าข่มเหงคุณได้ คนไข้หมดความเชื่อถือในตัวคุณ คุณกลับบ้านด้วยความรู้สึกต้อยต่ำ', zh: '📉 纵容。他冷静下来，但意识到可以虐待你。病人对你失去信心。你回家时感到渺小。' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🛡️ Correct Him Firmly: "Dr. Viper, this is the new protocol sent out Tuesday. I set it up safely. Please don\'t yell at me."', th: '🛡️ แก้ต่างอย่างหนักแน่น: "หมอไวเปอร์คะ นี่คือระเบียบใหม่ที่ส่งมาเมื่อวันอังคาร ฉันจัดถูกแล้ว กรุณาอย่าตะคอก"', zh: '🛡️ 坚定纠正："Viper医生，这是周二发出的新规程。我摆放得很安全。请不要对我大吼。"' }, consequence: { en: '✅ Respect Earned. The room goes silent. He checks the protocol later and grunts an apology. You established boundaries.', th: '✅ ได้รับความเคารพ ห้องเงียบกริบ เขาไปเช็คระเบียบทีหลังแล้วบ่นขอโทษอุบอิบ คุณสร้างขอบเขตสำเร็จ', zh: '✅ 赢得尊重。房间瞬间安静。他后来检查了规程并咕哝着道歉。你确立了界限。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🔥 Snap Back: "Do it yourself then if you\'re so smart!" Throw the gloves.', th: '🔥 สวนกลับ: "งั้นก็ทำเองสิถ้าเก่งนัก!" ปาถุงมือใส่', zh: '🔥 反击："如果你那么聪明，那你自己做！"摔手套。' }, consequence: { en: '💀 HR Nightmare. You are written up for insubordination. Even if he was wrong, your reaction was unprofessional.', th: '💀 ฝันร้าย HR คุณโดนทัณฑ์บนข้อหากระด้างกระเดื่อง ต่อให้เขาผิด ปฏิกิริยาของคุณก็ไม่เป็นมืออาชีพ', zh: '💀 HR噩梦。你因不服从命令被记过。即使他错了，你的反应也不专业。' }, stats: { competence: -10, ethics: -20, leadership: -40, innovation: 0 } }
        ]
    },

    {
        id: 'nu_005',
        text: {
            en: '🗑️ The Narcotics Count: End of shift. The morphine count is off by one vial. Your friend Jessica says "Oh, I probably dropped one and forgot to log it. Just sign off so we can go home, I\'m exhausted."',
            th: '🗑️ นับยาเสพติด: จบเวร มอร์ฟีนหายไปขวดนึง เพื่อนคุณเจสสิก้าบอก "อ้อ สงสัยทำหล่นแล้วลืมลงบันทึก เซ็นๆ ไปเหอะจะได้กลับบ้าน เหนื่อยจะตายแล้ว"',
            zh: '🗑️ 麻醉药清点：换班结束。吗啡少了一瓶。你的朋友Jessica说"哦，我可能掉了一瓶忘了记录。签字吧我们可以回家了，我累坏了。"'
        },
        options: [
            { id: 'A', text: { en: '✍️ Sign it: "Okay, I trust you Jess. Let\'s get out of here."', th: '✍️ เซ็นไป: "เค เชื่อใจนะเจส กลับบ้านกัน"', zh: '✍️ 签字："好吧，我相信你Jess。我们走吧。"' }, consequence: { en: '🚩 Red Flag. A month later, Jessica is caught diverting drugs. You are investigated for "falsifying records." Suspension pending.', th: '🚩 สัญญาณอันตราย เดือนต่อมาเจสสิก้าโดนจับข้อหาขโมยยา คุณโดนสอบสวนฐาน "ปลอมแปลงบันทึก" รอโดนพักงาน', zh: '🚩 红旗警告。一个月后，Jessica因挪用药物被抓。你因"伪造记录"被调查。面临停职。' }, stats: { competence: 10, ethics: -40, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Refuse to Sign: "We have to find it or report it Jess. I can\'t sign a false count. My license is on the line."', th: '🛑 ไม่เซ็น: "ต้องหาให้เจอหรือรายงานนะเจส ฉันเซ็นมั่วไม่ได้ ใบประกอบฉันแขวนอยู่บนเส้นด้ายนะ"', zh: '🛑 拒绝签字："我们必须找到它或报告它Jess。我不能签虚假计数。我的执照受到威胁。"' }, consequence: { en: '✅ Integrity Keeper. You spend an hour searching. Turns out it was in the reject bin. Logged correctly. Jessica is annoyed but you slept well.', th: '✅ ผู้รักษาความสัตย์! หาอยู่เป็นชั่วโมง ปรากฏว่าอยู่ในถังขยะอันตราย ลงบันทึกถูกต้อง เจสสิก้ารำคาญแต่คุณนอนหลับสนิท', zh: '✅ 诚信守护者。你们花了一个小时寻找。原来是在废弃箱里。记录正确。Jessica很恼火，但你睡得很香。' }, stats: { competence: 40, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '📝 Report Immediately: "I\'m calling the Supervisor. This is a disparity."', th: '📝 รายงานทันที: "ฉันจะโทรหาหัวหน้า นี่มันยอดไม่ตรง"', zh: '📝 立即报告："我打电话给主管。这是差异。"' }, consequence: { en: '⚖️ Strict Protocol. Supervisor comes. Jessica gets drug tested (she passes). It creates tension, but you followed the law 100%.', th: '⚖️ กฎเหล็ก หัวหน้ามา เจสสิก้าโดนตรวจฉี่ (ผ่าน) บรรยากาศตึงเครียด แต่คุณทำตามกฎหมาย 100%', zh: '⚖️ 严格规程。主管来了。Jessica接受药物测试（通过）。制造了紧张气氛，但你100%遵守了法律。' }, stats: { competence: 50, ethics: 70, leadership: 30, innovation: 0 } }
        ]
    },

    {
        id: 'nu_006',
        text: {
            en: '🍕 The Lunch Break: You haven\'t eaten in 8 hours. Your blood sugar is crashing. You sit down with your sandwich. Suddenly, a patient\'s alarm beeps. It\'s likely just a low battery, but no one else is around.',
            th: '🍕 พักเที่ยง: ไม่ได้กินอะไรมา 8 ชั่วโมง น้ำตาลตก กำลังจะกัดแซนด์วิช จู่ๆ สัญญาณคนไข้ดัง น่าจะแค่แบตอ่อน แต่แถวนั้นไม่มีใครเลย',
            zh: '🍕 午餐休息：你8小时没吃东西了。血糖急剧下降。你坐下来拿起三明治。突然，病人的警报响了。很可能只是电池电量低，但周围没别人。'
        },
        options: [
            { id: 'A', text: { en: '🏃 Check it: "Hunger can wait. Safety can\'t." Drop the food, run to the room.', th: '🏃 ไปดู: "หิวรอได้ ความปลอดภัยรอไม่ได้" วางอาหาร วิ่งไปดู', zh: '🏃 检查："饿肚子可以等。安全不能等。"放下食物，跑去病房。' }, consequence: { en: '✅ Good Call. It wasn\'t a battery. Patient had disconnected their O2. You fixed it. You eat a soggy sandwich later, but you have no regrets.', th: '✅ ตัดสินใจถูก! ไม่ใช่แบต คนไข้ทำสายออกซิเจนหลุด คุณต่อให้ แซนด์วิชชื้นไปแล้วแต่คุณไม่เสียใจ', zh: '✅ 明智之举。不是电池。病人弄掉了氧气管。你修好了。后来你吃了湿透的三明治，但你不后悔。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🎧 Ignore/Finish Bite: "I\'m off the clock. Someone else will get it." Takes 2 minutes to finish eating.', th: '🎧 เมิน/กินให้หมด: "ฉันพักอยู่ เดี๋ยวคนอื่นก็ไปดูมั้ง" กินต่ออีก 2 นาที', zh: '🎧 无视/吃完："我在休息。别人会处理的。"花2分钟吃完。' }, consequence: { en: '⚠️ Negligence. The Charge Nurse walks by and sees you eating while an alarm blares. "Get up NOW." You look lazy and uncaring.', th: '⚠️ ละเลย! หัวหน้าเวรเดินมาเห็นคุณกินในขณะที่เสียงดัง "ลุกเดี๋ยวนี้!" คุณดูขี้เกียจและไม่ใส่ใจ', zh: '⚠️ 疏忽。护士长走过看到你在警报声中吃东西。"马上起来。"你看起来既懒惰又冷漠。' }, stats: { competence: -10, ethics: -20, leadership: -20, innovation: 0 } }
        ]
    },

    {
        id: 'nu_007',
        text: {
            en: '👻 The Superstitious Patient: A patient demands you open the window to "let the evil spirits out" before surgery. It\'s against hospital policy (sterile environment). He refuses surgery otherwise.',
            th: '👻 คนไข้ถือโชคลาง: คนไข้สั่งให้เปิดหน้าต่างเพื่อ "ปล่อยวิญญาณชั่วร้าย" ก่อนผ่าตัด ผิดกฎรพ. (ต้องการความปลอดเชื้อ) ไม่งั้นเขาไม่ยอมผ่า',
            zh: '👻 迷信的病人：病人在手术前要求你打开窗户"让恶灵出去"。这违反了医院规定（无菌环境）。否则他拒绝手术。'
        },
        options: [
            { id: 'A', text: { en: '🎭 The Placebo Ritual: "I can\'t open the window, but I have this \'Purification Spray\' (sterile saline). Shall we use this to cleanse the room?"', th: '🎭 พิธีกรรมหลอก: "เปิดหน้าต่างไม่ได้ค่ะ แต่ฉันมี \'สเปรย์ชำระล้าง\' (น้ำเกลือ) ให้ฉีดไล่ไหมคะ?"', zh: '🎭 安慰剂仪式："我不能开窗，但我有这个\'净化喷雾\'（无菌生理盐水）。我们用这个清洁房间好吗？"' }, consequence: { en: '✅ Psychology Win! He agrees. He feels safe. Surgery proceeds sterile. You treated the anxiety, not just the body. Innovative care.', th: '✅ จิตวิทยาชนะเลิศ! เขาตกลง เขาสบายใจ การผ่าตัดดำเนินไปอย่างปลอดเชื้อ คุณรักษาความวิตกกังวลไม่ใช่แค่ร่างกาย', zh: '✅ 心理学胜利！他同意了。他感到安全。手术在无菌状态下进行。你治疗了焦虑，不只是身体。创新护理。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 60 } },
            { id: 'B', text: { en: '🛑 Hard No: "Policy is policy. No windows. Stop being silly or we cancel the surgery."', th: '🛑 ปฏิเสธเสียงแข็ง: "กฎคือกฎ ห้ามเปิด เลิกงี่เง่าได้แล้วไม่งั้นยกเลิกผ่าตัด"', zh: '🛑 坚决拒绝："规定就是规定。不开窗。别犯傻了，否则我们就取消手术。"' }, consequence: { en: '❌ Escalation. He panics and rips out his IV. Security called. Surgery cancelled. His condition worsens. You won the argument but lost the patient.', th: '❌ เรื่องบานปลาย เขาตกใจดึงสายน้ำเกลือ เรียก รปภ. ยกเลิกผ่าตัด อาการแย่ลง คุณชนะเถียงแต่เสียคนไข้', zh: '❌ 升级。他恐慌并拔掉静脉注射。保安介入。手术取消。病情恶化。你赢了争论但输了病人。' }, stats: { competence: 30, ethics: -10, leadership: -10, innovation: -10 } }
        ]
    },

    {
        id: 'nu_008',
        text: {
            en: '📱 The Social Media Slip: You post a cute selfie with a recovered patient to celebrate their discharge. They gave verbal permission. You forgot their medical chart is visible on the table in the background.',
            th: '📱 พลาดลงโซเชียล: ลงรูปน่ารักคู่คนไข้ที่หายดีเพื่อฉลอง เขาอนุญาตปากเปล่าแล้ว แต่ลืมไปว่าเห็นชาร์ตประวัติวางอยู่บนโต๊ะข้างหลัง',
            zh: '📱 社交媒体失误：你发布了一张与康复病人的可爱自拍庆祝出院。他们口头答应了。你忘了背景桌上可以看到他们的病历。'
        },
        options: [
            { id: 'A', text: { en: '📢 Self-Report Immediately: "I messed up. Delete photo. Contact Privacy Officer. Tell the patient." Own it before it spreads.', th: '📢 รายงานตัวเองทันที: "ฉันพลาดแล้ว ลบรูป แจ้งเจ้าหน้าที่ข้อมูล บอกคนไข้" รับผิดก่อนเรื่องจะกระจาย', zh: '📢 立即自首："我搞砸了。删除照片。联系隐私官。告诉病人。"在传播之前承担责任。"' }, consequence: { en: '✅ Damage Control. You get a formal warning, but honesty saves your job. The hospital appreciates the self-report. HIPAA breach contained.', th: '✅ ควบคุมความเสียหาย โดนเตือนเป็นลายลักษณ์อักษร แต่ความซื่อสัตย์ช่วยรักษาหางานไว้ รพ.ชื่นชมที่แจ้งเอง การละเมิด HIPAA ถูกจำกัด', zh: '✅ 损害控制。你收到正式警告，但诚实保住了你的工作。医院赞赏你的自首。HIPAA违规得到控制。' }, stats: { competence: 40, ethics: 70, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '🙈 Delete and Pray: "I\'ll just delete it. It only had 12 likes. No one saw it."', th: '🙈 ลบและสวดมนต์: "ลบเงียบๆ แล้วกัน มีแค่ 12 ไลค์ คงไม่มีใครเห็น"', zh: '🙈 删除并祈祷："我就把它删了。只有12个赞。没人看到。"' }, consequence: { en: '💀 Viral Disaster. Someone screenshotted it. A week later, you explain to the Board why a patient\'s diagnosis is on Reddit. Termination.', th: '💀 หายนะไวรัล! มีคนแคปทัน สัปดาห์ต่อมาคุณต้องอธิบายบอร์ดว่าทำไมประวัติคนไข้ไปอยู่บน Reddit โดนไล่ออก', zh: '💀 病毒式灾难。有人截图了。一周后，你要向董事会解释为什么病人的诊断出现在Reddit上。解雇。' }, stats: { competence: 10, ethics: -60, leadership: -40, innovation: 0 } }
        ]
    },

    {
        id: 'nu_009',
        text: {
            en: '👵 The Frequent Flyer: Mrs. Higgins is here for the 10th time this month complaining of "foot pain." She lives alone and is lonely. The doctors want to discharge her immediately. She begs you for "just one more night."',
            th: '👵 ขาประจำ: คุณยายฮิจกินส์มาเป็นรอบที่ 10 ของเดือนบ่นว่า "เจ็บเท้า" แกอยู่คนเดียวและเหงา หมอจะให้กลับบ้านเดี๋ยวนี้ แกอ้อนวอนขอ "แค่อีกคืนเดียว"',
            zh: '👵 常客：Higgins太太这个月第10次来了，抱怨"脚痛"。她独居且孤独。医生想让她立即出院。她求你"再住一晚"。'
        },
        options: [
            { id: 'A', text: { en: '🕵️ Social Work Consult: "I can\'t keep you here, Mrs. Higgins, but let me call the community center and arrange a home visitor for you."', th: '🕵️ ปรึกษาสังคมสงเคราะห์: "ให้อยู่ต่อไม่ได้ค่ะยาย แต่เดี๋ยวหนูโทรศูนย์ชุมชนหาคนไปเยี่ยมที่บ้านให้นะ"', zh: '🕵️ 社工咨询："我不能让你留在这，Higgins太太，但让我联系社区中心为你安排家庭访视。"' }, consequence: { en: '✅ Root Cause Fixed. She didn\'t need meds, she needed connection. She stops coming to ER. You solved the actual problem.', th: '✅ แก้ที่ต้นเหตุ แกไม่ได้ต้องการยา แกต้องการเพื่อน แกเลิกมา ER คุณแก้ปัญหาที่แท้จริง', zh: '✅ 根源解决。她不需要药，她需要联系。她不再来急诊室。你解决了实际问题。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🛌 Sneak Her a Sandwich/Bed: "Okay, I\'ll stash you in the overflow room for a few hours. Don\'t tell the doctor."', th: '🛌 แอบให้นอน: "โอเค ยายไปนอนห้องสำรองเงียบๆ สักพักนะ ห้ามบอกหมอล่ะ"', zh: '🛌 偷偷给她三明治/床位："好吧，我把你藏在溢流室几个小时。别告诉医生。"' }, consequence: { en: '⚠️ Band-Aid Fix. She sleeps, but now she expects this treatment every time. You created a dependency and filled a bed needed for emergencies.', th: '⚠️ แก้ผ้าเอาหน้ารอด แกได้นอน แต่ทีนี้แกจะหวังแบบนี้ทุกรอบ คุณสร้างภาระผูกพันและแย่งเตียงฉุกเฉิน', zh: '⚠️ 创可贴式修复。她睡了，但现在她每次都期望这种待遇。你制造了依赖并占用了一个急需的床位。' }, stats: { competence: 20, ethics: 30, leadership: -10, innovation: 0 } }
        ]
    },

    {
        id: 'nu_010',
        text: {
            en: '🤰 The Labor Dilemma: A laboring mother wants a natural birth. The fetal heart rate drops slightly. The OB-GYN, who is golf buddies with the CEO, wants to do a C-section immediately so he can make his tee time. The monitors show the baby is recovering well.',
            th: '🤰 ทางเลือกทำคลอด: แม่ต้องการคลอดธรรมชาติ ชีพจรเด็กดรอปนิดหน่อย หมอสูติฯ (เพื่อนกอล์ฟ CEO) จะจับผ่าคลอดเลยเพราะจะรีบไปตีกอล์ฟ แต่กราฟโชว์ว่าเด็กฟื้นตัวดี',
            zh: '🤰 分娩困境：一位产妇想要自然分娩。胎儿心率略有下降。产科医生（CEO的高尔夫球友）想立即剖腹产，以便他能赶上开球时间。监视器显示婴儿恢复良好。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Advocate for Mom: "Doctor, look at the variability. The baby is recovering. Mom wants to wait. Let\'s give it 15 more minutes."', th: '🛡️ เรียกร้องเพื่อแม่: "หมอคะ ดูกราฟสิ เด็กฟื้นตัวดี แม่เขาอยากรอ ขออีกสัก 15 นาทีนะคะ"', zh: '🛡️ 为母亲辩护："医生，看这变异性。婴儿正在恢复。妈妈想等。我们再等15分钟吧。"' }, consequence: { en: '✅ Patient Champion. He fumes but waits. 20 mins later, normal vaginal birth. Mom cries "Thank you for fighting for me." You risked his anger for her.', th: '✅ แชมเปี้ยนของคนไข้! เขาฟึดฟัดแต่ยอมรอ 20 นาทีต่อมาคลอดเองปกติ แม่ร้องไห้ "ขอบคุณที่สู้เพื่อหนู"', zh: '✅ 患者冠军。他发火但等待。20分钟后，正常顺产。妈妈哭着说"谢谢你为我争取。"你为了她冒犯了他。' }, stats: { competence: 60, ethics: 70, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🤐 Stay Quiet: "Prep the OR." It\'s not worth fighting a powerful doctor. He knows best... right?', th: '🤐 เงียบไว้: "เตรียมห้องผ่าตัดค่ะ" ไม่คุ้มไปงัดข้อหมอใหญ่ หมอรู้ดีสุด...ใช่มะ?', zh: '🤐 保持沉默："准备手术室。"不值得与有权势的医生对抗。他最清楚...对吧？' }, consequence: { en: '💔 Unnecessary Surgery. Mom has a major surgery she didn\'t need. Long recovery. She feels traumatized and ignored. You feel like an accomplice.', th: '💔 ผ่าตัดที่ไม่จำเป็น แม่เจ็บตัวฟรี พักฟื้นนาน เธอรู้สึกแย่ที่ไม่มีใครฟัง คุณรู้สึกเหมือนผู้สมรู้ร่วมคิด', zh: '💔 不必要的手术。妈妈做了一个她不需要的大手术。恢复期长。她感到受创和被忽视。你觉得是帮凶。' }, stats: { competence: 20, ethics: -30, leadership: -20, innovation: 0 } }
        ]
    },

    // SECTION 2: EMERGENCY & CRITICAL CARE / THE TRENCHES (Questions 11-15)

    {
        id: 'nu_011',
        text: {
            en: '🚑 Triage Traffic: Mass Casualty Incident (bus crash). A screaming man with a broken arm (pain scale 10/10) is demanding help. A quiet woman in the corner is holding her chest and gasping, pale skin. You only have one bed left.',
            th: '🚑 จราจรคัดกรอง: อุบัติเหตุหมู่ (รถบัสชน) ชายคนหนึ่งแขนหักตะโกนโวยวาย (ปวด 10/10) เรียกร้องความสนใจ ผู้หญิงเงียบๆ ที่มุมห้องกุมหน้าอก หายใจรวยริน หน้าซีด คุณเหลือเตียงเดียว',
            zh: '🚑 分诊交通：大规模伤亡事件（公交车祸）。一个手臂骨折的男人尖叫（疼痛等级10/10）要求帮助。角落里一个安静的女人捂着胸口喘气，面色苍白。你只剩一张床。'
        },
        options: [
            { id: 'A', text: { en: '🛌 Take the Screamer: "He\'s clearly in agony. Let\'s fix the broken bone."', th: '🛌 เอาคนโวยวายมา: "เขาเจ็บเจียนตาย มาดามกระดูกกัน"', zh: '🛌 接收尖叫者："他显然很痛苦。让我们固定骨折。"' }, consequence: { en: '💀 Triage Fail. The quiet woman had a tension pneumothorax and collapsed/died 5 mins later. The arm could wait. Rookie mistake: noise ≠ urgency.', th: '💀 คัดกรองล้มเหลว! ผู้หญิงเงียบๆ ปอดรั่วและล้มตายใน 5 นาที แขนหักรอได้ ความผิดพลาดมือใหม่: เสียงดัง ≠ เร่งด่วน', zh: '💀 分诊失败。安静的女人患有张力性气胸，5分钟后倒下/死亡。手臂可以等。新手错误：噪音 ≠ 紧急。' }, stats: { competence: -40, ethics: 10, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '🛌 Take the Quiet One: "Sir, sit down! Ma\'am, come with me immediately." You assess for shock.', th: '🛌 เอาคนเงียบมา: "คุณคะ นั่งลง! คุณผู้หญิง มากับฉันทันที" คุณประเมินภาวะช็อก', zh: '🛌 接收安静者："先生，坐下！女士，马上跟我来。"你评估休克。"' }, consequence: { en: '✅ Life Saved. She needed a chest tube instantly. You saved her life. The man complained but got a splint in the hallway.', th: '✅ ช่วยชีวิต! เธอต้องเจาะปอดทันที คุณช่วยชีวิตเธอ ผู้ชายบ่นแต่ก็ได้เข้าเฝือกที่ทางเดิน', zh: '✅ 挽救生命。她需要立即插胸管。你救了她的命。那个男人虽然抱怨但在走廊里接受了夹板固定。' }, stats: { competence: 60, ethics: 50, leadership: 70, innovation: 10 } },
            { id: 'C', text: { en: '📢 Call for Backup: "I can\'t decide! Dr. Smith, who do I take?"', th: '📢 เรียกกำลังเสริม: "ตัดสินใจไม่ได้! หมอสมิธ เอาใครดี?"', zh: '📢 呼叫支援："我无法决定！Smith医生，我接收谁？"' }, consequence: { en: '⚠️ Delayed Care. Doctor is busy intubating. You wasted 2 minutes. Decision paralysis in ER is dangerous.', th: '⚠️ รักษาช้า หมอกำลังใส่ท่อช่วยหายใจคนอื่น คุณเสียเวลา 2 นาที การตัดสินใจไม่ได้ใน ER คืออันตราย', zh: '⚠️ 延误护理。医生正忙着插管。你浪费了2分钟。急诊室的决策瘫痪是危险的。' }, stats: { competence: 10, ethics: 20, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '💊 Medicate the Man: "Give him morphine in the waiting room so he shuts up, then take the woman."', th: '💊 ให้ยาผู้ชาย: "ฉีดมอร์ฟีนให้เขาที่ห้องรอ จะได้เงียบ แล้วเอาผู้หญิงไป"', zh: '💊 给男人用药："在候诊室给他吗啡让他闭嘴，然后接收那个女人。"' }, consequence: { en: '⚖️ Risky Efficiency. You treated pain but medicating without a full exam/orders is illegal. But you prioritized the bed correctly.', th: '⚖️ ประสิทธิภาพที่เสี่ยง คุณรักษาปวดแต่ให้ยาโดยไม่ตรวจละเอียด/ไม่มีคำสั่งแพทย์คือผิดกฎหมาย แต่คุณจัดลำดับเตียงถูก', zh: '⚖️ 冒险的效率。你治疗了疼痛，但在没有全面检查/医嘱的情况下用药是非法的。但你正确优先分配了床位。' }, stats: { competence: 30, ethics: -20, leadership: 40, innovation: 30 } }
        ]
    },

    {
        id: 'nu_012',
        text: {
            en: '🧠 The Stroke Clock: Patient arrives with slurred speech. Symptoms started "about 3 hours ago." The cutoff for tPA (clot buster drug) is 4.5 hours door-to-needle. CT scan is backed up.',
            th: '🧠 นาฬิกาสโตรก: คนไข้มาถึงพูดไม่ชัด อาการเริ่ม "ประมาณ 3 ชั่วโมงที่แล้ว" เส้นตายการฉีดยาละลายลิ่มเลือดคือ 4.5 ชม. เครื่อง CT คิวยาวเหยียด',
            zh: '🧠 中风时钟：病人口齿不清。症状开始于"大约3小时前"。tPA（溶栓药物）的截止时间是4.5小时。CT扫描积压。'
        },
        options: [
            { id: 'A', text: { en: '🚨 Code Stroke - Bully the CT Tech: "I don\'t care who is on the table, I need this scanner NOW. Time is brain!" Move the other patient out.', th: '🚨 Code Stroke - บุกห้อง CT: "ไม่สนว่าใครนอนอยู่ ฉันต้องใช้เครื่องเดี๋ยวนี้! เวลาคือสมอง!" เข็นคนอื่นออกมาเลย', zh: '🚨 中风代码 - 逼迫CT技师："我不管谁在台上，我现在就要这台扫描仪。时间就是大脑！"把其他病人移出去。' }, consequence: { en: '✅ Aggressive Advocacy. You made enemies in Radiology, but the patient got the scan and drug at 4 hours 15 mins. Full recovery. You saved his speech.', th: '✅ การเรียกร้องที่ดุดัน คุณสร้างศัตรูในแผนกรังสี แต่คนไข้ได้ยาตอน 4 ชม. 15 นาที หายปกติ คุณกู้การพูดเขากลับมา', zh: '✅ 激进倡导。你在放射科树敌，但病人在4小时15分钟时进行了扫描并用药。完全康复。你挽救了他的语言能力。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '⏳ Follow Queue: "We are next in line. I\'ll monitor vitals." You wait 45 mins.', th: '⏳ ตามคิว: "เราคิวต่อไป เดี๋ยวเฝ้าชีพจรไว้" รอนาน 45 นาที', zh: '⏳ 排队："我们是下一个。我会监测生命体征。"你等了45分钟。' }, consequence: { en: '❌ Window Missed. By the time scan is done, it\'s been 5 hours. No tPA. Patient suffers permanent brain damage and paralysis.', th: '❌ พลาดโอกาส กว่าจะสแกนเสร็จปาไป 5 ชม. อดยา คนไข้สมองเสียหายถาวรและเป็นอัมพาต', zh: '❌ 错失窗口。扫描完成时已过5小时。不能用tPA。病人遭受永久性脑损伤和瘫痪。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } }
        ]
    },

    {
        id: 'nu_013',
        text: {
            en: '🫁 The Ventilator Shortage: Pandemic peak. You have 1 ventilator left. Patient A is 75, amazing grandpa, high survival chance. Patient B is 30, single mom, but has multiple organ failure (very low survival chance). Protocol says "Save the most saveable." Emotions say "Save the young mom."',
            th: '🫁 เครื่องช่วยหายใจขาดแคลน: ช่วงพีคของโรคระบาด เหลือเครื่องเดียว คนไข้ A อายุ 75 ปู่แสนดี โอกาสรอดสูง คนไข้ B อายุ 30 แม่เลี้ยงเดี่ยว แต่อวัยวะล้มเหลวหลายระบบ (โอกาสรอดต่ำมาก) ระเบียบบอก "ช่วยคนที่รอดแน่" อารมณ์บอก "ช่วยแม่ยังสาว"',
            zh: '🫁 呼吸机短缺：大流行高峰。你只剩1台呼吸机。病人A 75岁，很棒的爷爷，存活率高。病人B 30岁，单亲妈妈，但多器官衰竭（存活率极低）。规程说"救最有希望的"。情感说"救年轻妈妈"。'
        },
        options: [
            { id: 'A', text: { en: '👴 Give to Grandpa (Protocol): "Outcome probability dictates Patient A. It\'s logic, not heart."', th: '👴 ให้คุณปู่ (ตามระเบียบ): "ความน่าจะเป็นชี้ไปที่คนไข้ A มันคือตรรกะ ไม่ใช่หัวใจ"', zh: '👴 给爷爷（规程）："结果概率决定是病人A。这是逻辑，不是情感。"' }, consequence: { en: '⚖️ Ethical Burden. Grandpa survives. Mom dies. Her kids are orphans. It destroys you emotionally, but medically it was the correct allocation of scarce resources.', th: '⚖️ ภาระทางจริยธรรม ปู่รอด แม่ตาย ลูกเป็นกำพร้า ใจคุณพังสลาย แต่ทางการแพทย์คือการจัดสรรทรัพยากรที่ถูกต้อง', zh: '⚖️ 道德负担。爷爷活了下来。妈妈死了。她的孩子成了孤儿。这在情感上摧毁了你，但在医学上是稀缺资源的正确分配。' }, stats: { competence: 60, ethics: 30, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '👩 Give to Mom (Emotion): "She has kids! She has a whole life! We have to try!"', th: '👩 ให้แม่ (ตามอารมณ์): "เขามีลูกนะ! ชีวิตยังอีกยาวไกล! เราต้องลอง!"', zh: '👩 给妈妈（情感）："她有孩子！她还有整个人生！我们必须尝试！"' }, consequence: { en: '💀 Double Loss. Mom dies anyway 2 days later (too sick). Grandpa died waiting. Both died because you gambled on a low probability. Protocols exist for a reason.', th: '💀 สูญเสียคู่ แม่ตายใน 2 วัน (หนักเกิน) ปู่ตายขณะรอ ตายคู่เพราะคุณพนันกับโอกาสที่ต่ำ ระเบียบมีเหตุผลของมัน', zh: '💀 双重损失。妈妈两天后还是死了（病太重）。爷爷在等待中去世。两人都死了，因为你赌了一个低概率。规程存在是有原因的。' }, stats: { competence: 30, ethics: -20, leadership: -30, innovation: 0 } }
        ]
    },

    {
        id: 'nu_014',
        text: {
            en: '🚔 The Prisoner Patient: You are treating a convicted child abuser who was stabbed in prison. He is rude, spits at you, and is in pain. A sweet old lady next door needs water. You find yourself delaying his pain meds deliberately.',
            th: '🚔 คนไข้นักโทษ: คุณกำลังรักษาผู้ต้องหาคดีทำร้ายเด็กที่โดนแทงมา เขาหยาบคาย ถ่มน้ำลายใส่ และปวดแผล ยายห้องข้างๆ ขอน้ำ คุณเผลอแกล้งดึงเวลาจ่ายยาแก้ปวดเขา',
            zh: '🚔 囚犯病人：你正在治疗一名在狱中被刺伤的已被定罪的虐童犯。他粗鲁，向你吐口水，并处于痛苦中。隔壁一位可爱的老太太需要水。你发现自己故意拖延他的止痛药。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Check Your Bias: "He is a patient. Punishment is for the courts, care is for me. Give the meds now."', th: '⚖️ เช็คอคติ: "เขาคือคนไข้ การลงโทษเป็นของศาล การรักษาเป็นของฉัน ให้ยาเดี๋ยวนี้"', zh: '⚖️ 检查你的偏见："他是病人。惩罚是法院的事，护理是我的事。现在给药。"' }, consequence: { en: '✅ Professional Integrity. You treat the monster like a human. It\'s hard, but you maintain your oath. You sleep knowing you are incorruptible.', th: '✅ ความซื่อสัตย์ในวิชาชีพ คุณรักษาปีศาจเหมือนมนุษย์ ยากนะ แต่คุณรักษาคำปฏิญาณ คุณนอนหลับโดยรู้ว่าตัวเองไร้มลทิน', zh: '✅ 专业诚信。你像对待人一样对待这个怪物。这很难，但你遵守了誓言。你睡得很安稳，知道自己廉洁。' }, stats: { competence: 50, ethics: 80, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '😈 Delay "Accidentally": "Oops, got busy with grandma. Sorry inmate, nurse triage." (Quiet Revenge)', th: '😈 แกล้ง "ลืม": "อุ๊ย ยุ่งกับคุณยายอยู่ โทษทีนะนักโทษ จัดลำดับความสำคัญน่ะ" (การแก้แค้นเงียบๆ)', zh: '😈 "意外"延误："哎呀，忙着照顾老奶奶。抱歉囚犯，护士分诊。"（无声复仇）' }, consequence: { en: '⚠️ Slippery Slope. He suffers. You feel justice, but you compromised your neutrality. Next time, who else do you judge unworthy of care? A slippery ethical slope.', th: '⚠️ ทางลาดชัน เขาเจ็บปวด คุณสะใจ แต่คุณเสียความเป็นกลาง ครั้งหน้าคุณจะตัดสินใครอีกว่าไม่ควรได้รับการรักษา? จริยธรรมเสื่อมถอย', zh: '⚠️ 滑坡谬误。他受苦。你感到正义，但你妥协了中立性。下次，你还会判定谁不值得护理？道德滑坡。' }, stats: { competence: 30, ethics: -40, leadership: 10, innovation: 0 } }
        ]
    },

    {
        id: 'nu_015',
        text: {
            en: '🦠 The Exposure: While intubating a COVID/Ebola/Flu patient, they cough directly in your face. Your mask had slipped slightly. You are terrified.',
            th: '🦠 การสัมผัสเชื้อ: ตอนกำลังใส่ท่อคนไข้โควิด/อีโบลา/ไข้หวัดใหญ่ เขาไอใส่หน้าเต็มๆ หน้ากากคุณเลื่อนหลุดนิดหน่อย คุณกลัวสุดขีด',
            zh: '🦠 暴露：在为COVID/埃博拉/流感病人插管时，他们直接对着你的脸咳嗽。你的口罩稍微滑落了。你吓坏了。'
        },
        options: [
            { id: 'A', text: { en: '🧼 Protocol Wash & PEP: "Step out. Scrub for 5 minutes. Report to occupational health. Start preventative meds."', th: '🧼 ล้างตามระเบียบ & ยาต้าน: "ออกมา ล้าง 5 นาที รายงานอาชีวอนามัย เริ่มยาป้องกัน"', zh: '🧼 规程清洗 & PEP："走出来。刷洗5分钟。向职业健康部门报告。开始预防性用药。"' }, consequence: { en: '✅ Safety. You follow the book. You spend a week anxious in quarantine, but you don\'t get sick. The system worked because you used it.', th: '✅ ปลอดภัย ทำตามคู่มือเป๊ะ กักตัวเครียด 1 สัปดาห์แต่ไม่ติดเชื้อ ระบบช่วยคุณเพราะคุณใช้มัน', zh: '✅ 安全。你照章办事。你在隔离中焦虑了一周，但没生病。系统奏效是因为你使用了它。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🙈 Keep Working: "We are short staffed. I\'ll just wash my face and keep going. I\'m probably fine."', th: '🙈 ทำงานต่อ: "คนขาด ล้างหน้าแล้วลุยต่อ คงไม่เป็นไรมั้ง"', zh: '🙈 继续工作："我们人手不足。我就洗把脸继续。我可能没事。"' }, consequence: { en: '💀 Outbreak Vector. You were infected. You worked for 3 days asymptomatic and infected 4 immune-compromised patients. 2 die. You are patient zero for the ward outbreak.', th: '💀 พาหะระบาด! คุณติดเชื้อ ทำงานต่อ 3 วันโดยไม่มีอาการ แพร่เชื้อใส่คนไข้ภูมิคุ้มกันต่ำ 4 คน ตาย 2 คุณคือต้นตอการระบาดในวอร์ด', zh: '💀 爆发源。你被感染了。你无症状工作了3天，感染了4名免疫受损的病人。2人死亡。你是病房爆发的零号病人。' }, stats: { competence: -30, ethics: -50, leadership: -20, innovation: 0 } }
        ]
    },
    // SECTION 3: SPECIALIZED CARE & ETHICAL TIGHTROPES (Questions 16-30)

    {
        id: 'nu_016',
        text: {
            en: '🩺 The Silent Killer: You\'re monitoring a post-op patient. His vitals are "stable" but something feels off. He\'s slightly more confused than an hour ago. The doctor says, "He\'s just groggy from anesthesia, stop being paranoid." Your gut says "Internal Bleed."',
            th: '🩺 มฤตยูเงียบ: คุณกำลังเฝ้าคนไข้หลังผ่าตัด สัญญาณชีพ "ปกติ" แต่คุณรู้สึกหน่วงๆ เขามีอาการสับสนมากกว่าเมื่อชั่วโมงที่แล้ว หมอบอก "เขาแค่เบลอยาสลบ อย่าระแวงไปหน่อยเลย" แต่สัญชาตญาณคุณบอกว่า "เลือดออกข้างใน"',
            zh: '🩺 无声杀手：你正在监测一名术后病人。他的生命体征"稳定"，但你感觉有些不对劲。他比一小时前稍微更加困惑。医生说："他只是麻醉还没醒，别疑神疑鬼。"你的直觉告诉你是"内出血"。'
        },
        options: [
            { id: 'A', text: { en: '👨‍⚕️ Trust the Doctor: "He has 30 years experience. I\'m just a nurse. I\'ll wait and see."', th: '👨‍⚕️ เชื่อหมอ: "หมอมีประสบการณ์ 30 ปี ฉันเป็นแค่พยาบาล เดี๋ยวรอดูอาการไปก่อน"', zh: '👨‍⚕️ 信任医生："他有30年经验。我只是个护士。我再观察看看。"' }, consequence: { en: '💀 Tragedy. Two hours later, the patient codes. Massive internal hemorrhage. By the time they get him back to the OR, it\'s too late. You knew, but you didn\'t act.', th: '💀 โศกนาฏกรรม: สองชั่วโมงต่อมา คนไข้หัวใจหยุดเต้น เลือดออกในตัวอย่างหนัก กว่าจะพาไปห้องผ่าตัดได้ก็สายไปแล้ว คุณรู้แต่คุณไม่ลงมือทำ', zh: '💀 悲剧。两小时后，病人心脏骤停。大面积内出血。当他们把他带回手术室时，已经太晚了。你知道，但你没有采取行动。' }, stats: { competence: 10, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🚨 Escalate anyway: "I am calling a Rapid Response. His mental status is changing. I need another set of eyes NOW."', th: '🚨 ยกระดับการรักษา: "ฉันจะเรียกทีมช่วยชีวิตฉุกเฉิน (Rapid Response) ระดับสติสัมปชัญญะเขาเปลี่ยนไป ฉันต้องการคนมาช่วยดูเดี๋ยวนี้"', zh: '🚨 无论如何都要上报："我要启动快速反应小组。他的精神状态正在改变。我现在需要其他人来评估。"' }, consequence: { en: '✅ Life Saved! The Rapid Response team finds his hemoglobin has tanked. He\'s rushed to surgery. The surgeon later admits you were right. You saved a life by trusting your intuition over authority.', th: '✅ ช่วยชีวิตได้สำเร็จ! ทีมกู้ชีพพบว่าระดับฮีโมโกลบินเขาลดฮวบ เขาถูกส่งเข้าห้องผ่าตัดทันที หมอมาสารภาพทีหลังว่าคุณคิดถูก คุณช่วยชีวิตคนได้เพราะเชื่อสัญชาตญาณตัวเองมากกว่าอำนาจ', zh: '✅ 挽救生命！快速反应小组发现他的血红蛋白暴跌。他被紧急送往手术室。外科医生后来承认是对的。你通过相信直觉而不是权威挽救了一个生命。' }, stats: { competence: 60, ethics: 50, leadership: 60, innovation: 30 } },
            { id: 'C', text: { en: '📊 Data Mining: "I\'ll do a bedside ultrasound myself to look for fluid. I need proof before I fight the doctor again."', th: '📊 หาหลักฐาน: "ฉันจะทำอัลตราซาวด์ข้างเตียงเองเพื่อดูว่ามีของเหลวไหม ฉันต้องการหลักฐานก่อนจะไปงัดกับหมออีกรอบ"', zh: '📊 数据挖掘："我自己做床边超声检查液位。在我再次对抗医生之前，我需要证据。"' }, consequence: { en: '⚖️ Risky Competence. You find fluid! You show the doctor. He is impressed but you are technically outside your scope of practice. You saved the guy, but the nursing board gives you a warning about "Scope Creep."', th: '⚖️ เก่งแต่เสี่ยง: คุณเจอของเหลว! คุณเอาให้หมอดู เขาประทับใจนะแต่จริงๆ มันเกินหน้าที่พยาบาล คุณช่วยคนไข้ได้ แต่สภาการพยาบาลตักเตือนคุณเรื่องการทำเกินหน้าที่', zh: '⚖️ 风险能力。你发现了积液！你给医生看。他印象深刻，但你在技术上超出了执业范围。你救了那个人，但护理委员会给你发出了关于"超越职权"的警告。' }, stats: { competence: 70, ethics: 30, leadership: 40, innovation: 50 } }
        ]
    },

    {
        id: 'nu_017',
        text: {
            en: '💊 The Friendly Error: Your best work friend, Maria, tells you she accidentally gave double the dose of blood pressure meds to a patient. "He seems fine, his BP is just 90/50. Please don\'t report me, I\'ll lose my job and I have 3 kids!"',
            th: '💊 ความผิดพลาดของเพื่อน: มาเรีย เพื่อนสนิทที่สุดในที่ทำงาน บอกคุณว่าเธอเผลอให้ยาความดันเกินไปสองเท่า "เขาดูปกตินะ ความดันแค่ 90/50 เอง อย่ารายงานฉันเลยนะ ฉันจะตกงานเอา ฉันมีลูกต้องเลี้ยง 3 คน!"',
            zh: '💊 友好的错误：你最好的工作伙伴Maria告诉你，她不小心给病人服用了双倍剂量的血压药。"他看起来还好，血压只有90/50。请不要举报我，我会丢掉工作的，我有三个孩子要养！"'
        },
        options: [
            { id: 'A', text: { en: '🤫 Keep the Secret: "Okay, we\'ll monitor him closely together. It\'ll be our secret. Everyone makes mistakes."', th: '🤫 เก็บความลับ: "โอเค เดี๋ยวเราช่วยกันเฝ้าดูอาการอย่างใกล้ชิดนะ จะเป็นความลับของเรา สี่เท้ายังรู้พลาด"', zh: '🤫 保守秘密："好吧，我们会一起密切监测他。这是我们的秘密。谁都会犯错。"' }, consequence: { en: '💀 Critical Crash. The patient falls attempting to go to the bathroom due to dizziness. Hits his head. Now it\'s a major incident. Since it wasn\'t reported, the doctors are confused by his symptoms. Maria eventually confesses and YOU are fired too for the cover-up.', th: '💀 อาการทรุดวูบ: คนไข้หน้ามืดล้มขณะจะไปเข้าห้องน้ำ หัวฟาดพื้น กลายเป็นเรื่องใหญ่ พอไม่ได้รายงานไว้ หมอก็สับสนว่าอาการเกิดจากอะไร สุดท้ายมาเรียสารภาพและคุณก็โดนไล่ออกด้วยข้อหาปกปิดความจริง', zh: '💀 严重崩溃。病人因头晕在试着去洗手间时摔倒了。撞到了头。现在成了一起重大事故。由于没有上报，医生对他出现的症状感到困惑。Maria最后坦白了，你也因为隐瞒而被解雇。' }, stats: { competence: 10, ethics: -100, leadership: -50, innovation: 0 } },
            { id: 'B', text: { en: '📢 Mandatory Disclosure: "Maria, I love you, but the patient\'s safety is non-negotiable. We are reporting this together. I\'ll stand by you in the meeting."', th: '📢 รายงานตามระเบียบ: "มาเรีย ฉันรักเธอนะ แต่ความปลอดภัยคนไข้ต่อรองไม่ได้ เราต้องรายงานเรื่องนี้ด้วยกัน ฉันจะอยู่เคียงข้างเธอตอนคุยกับหัวหน้าเอง"', zh: '📢 强制披露："Maria，我爱你，但病人的安全是不容商量的。我们要一起上报。在会议上我会支持你的。"' }, consequence: { en: '✅ Ethical Integrity. The doctor orders IV fluids to stabilize the BP. No harm to patient. Maria is disciplined but keeps her job because she came forward. Your friendship is strained but your license is clean.', th: '✅ จริยธรรมเหนือสิ่งอื่นใด: หมอสั่งน้ำเกลือเพื่อดึงความดันให้คงที่ คนไข้ไม่เป็นอะไร มาเรียถูกทำทัณฑ์บนแต่ไม่ตกงานเพราะเธอกล้ารับความจริง มิตรภาพอาจตึงเครียดแต่ใบประกอบวิชาชีพคุณยังสะอาด', zh: '✅ 伦理诚信。医生开了静脉补液以稳定血压。病人没有大碍。Maria受到了处分，但因为主动坦白保住了工作。你们的友谊变得紧张，但你的执照是清白的。' }, stats: { competence: 50, ethics: 100, leadership: 60, innovation: 0 } },
            { id: 'C', text: { en: '🤔 The Shadow Fix: "Don\'t report, but I\'ll sneak him some extra salt in his dinner and hold his next dose. He\'ll be fine."', th: '🤔 แก้ไขอย่างเงียบๆ: "ไม่ต้องรายงานหรอก เดี๋ยวฉันแอบเติมเกลือในอาหารเย็นให้ แล้วข้ามยามื้อถัดไปเอา เขาไม่เป็นไรหรอก"', zh: '🤔 暗中修复："别举报，但我会在他的晚餐里偷偷多加点盐，并停止下一次服药。他会没事的。"' }, consequence: { en: '💀 Malpractice. Messing with orders to cover an error is a felony. The patient develops fluid overload from the salt. You are caught. Career over.', th: '💀 ผิดจรรยาบรรณร้ายแรง: การแก้คำสั่งแพทย์เพื่อปกปิดความผิดคืออาชญากรรม คนไข้เกิดภาวะน้ำเกินเพราะเค็มเกินไป คุณโดนจับได้ จบสิ้นอาชีพการงาน', zh: '💀 医疗事故。为了掩盖错误而干预医嘱是重罪。病人因为盐分过多而出现液体负荷过重。你被抓住了。职业生涯结束。' }, stats: { competence: 10, ethics: -150, leadership: -80, innovation: 0 } }
        ]
    },

    {
        id: 'nu_018',
        text: {
            en: '🌍 The Language Barrier: A non-English speaking patient is clearly in pain after a car accident. You need to get consent for an emergency blood transfusion. No official translator is available. His 8-year-old daughter offers to translate.',
            th: '🌍 กำแพงภาษา: คนไข้ต่างชาติพูดไทยไม่ได้ และเจ็บปวดอย่างมากหลังอุบัติเหตุรถยนต์ คุณต้องขอความยินยอมเพื่อถ่ายเลือดฉุกเฉิน ไม่มีล่ามทางการเลย ลูกสาววัย 8 ขวบอาสาจะช่วยแปลให้',
            zh: '🌍 语言障碍：一名不讲英语的病人在车祸后显然非常痛苦。你需要获得紧急输血的同意。没有官方翻译人员。他8岁的女儿主动提出帮忙翻译。'
        },
        options: [
            { id: 'A', text: { en: '👧 Use the Daughter: "I have no choice, she\'s the only one who speaks the language. Let\'s do it quickly."', th: '👧 ให้ลูกช่วย: "ไม่มีทางเลือกแล้ว เธอเป็นคนเดียวที่พูดภาษาได้ ทำรีบๆ ให้จบเถอะ"', zh: '👧 让女儿翻译："我没得选择，她是唯一会说这种语言的人。让我们快点做。"' }, consequence: { en: '⚠️ Legal Gray Area. The daughter is traumatized by describing her father\'s internal bleeding. The consent is legally shaky. You get the blood in, but the hospital gets sued later for lack of informed consent. You are blamed for not using the phone translator service.', th: '⚠️ พื้นที่สีเททางกฎหมาย: เด็กหญิงเกิดอาการสะเทือนใจจากการต้องบรรยายอาการเลือดออกในตัวพ่อตัวเอง ผลทางกฎหมายของการยินยอมไม่มั่นคง คุณให้เลือดได้แต่รพ.โดนฟ้องทีหลังเพราะข้อมูลการยินยอมไม่ชัดเจน คุณโดนตำหนิที่ไม่ใช้บริการสั่งล่าช้าทางโทรศัพท์', zh: '⚠️ 法律灰色地带。女儿因为描述父亲的内出血而受到创伤。同意书在法律上是不稳固的。你完成了输血，但医院后来因为缺乏知情同意而被起诉。你因为没有使用电话翻译服务而受到责备。' }, stats: { competence: 30, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '📱 App/Phone Translation: "I cannot use a child for this. I\'m calling the remote video interpretation service, even if it delays us by 5 minutes."', th: '📱 ใช้แอป/โทรศัพท์แปล: "ฉันจะใช้เด็กมาแปลเรื่องนี้ไม่ได้ ฉันจะวิดีโอคอลหาระบบล่าช้าทางไกล แม้จะช้าไป 5 นาทีก็ตาม"', zh: '📱 使用App/电话翻译："我不能让孩子来做这件事。我要呼叫远程视频口译服务，即使这会让我们耽误5分钟。"' }, consequence: { en: '✅ Professional Standard. The translator explains the risks properly. Consent is valid. Patient feels respected. You followed federal law regarding language access.', th: '✅ มาตรฐานมือชีพ: ล่ามช่วยอธิบายความเสี่ยงได้อย่างถูกต้อง ใบยินยอมมีผลสมบูรณ์ คนเจ็บรู้สึกว่าได้รับความเคารพ คุณทำตามกฎหมายเรื่องการเข้าถึงภาษาอย่างเคร่งครัด', zh: '✅ 专业标准。翻译人员妥善解释了风险。同意书有效。病人感到受到了尊重。你遵守了关于语言准入的法律。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🤷 Implied Consent: "It\'s an emergency. He\'ll die without it. Just give the blood, we\'ll deal with the paperwork when he\'s stable."', th: '🤷 การยินยอมโดยนัย: "มันเป็นเรื่องฉุกเฉิน ไม่ให้เขาก็ตายสิ ให้เลือดไปก่อนเถอะ เดี๋ยวอาการนิ่งค่อยมาทำเอกสาร"', zh: '🤷 默示同意："这是紧急情况。没有输血他会死的。直接输血，等他稳定了再处理文书工作。"' }, consequence: { en: '⚖️ Courtroom Bound. Turns out the patient is a Jehovah\'s Witness. He would have refused blood even at the risk of death. You violated his religious rights. Huge lawsuit. You lose your license.', th: '⚖️ ขึ้นศาลแน่นอน: ปรากฏว่าคนไข้เป็นพยานพระยะโฮวา (Jehovah\'s Witness) ซึ่งเขาจะปฏิเสธการรับเลือดแม้จะต้องตายก็ตาม คุณละเมิดสิทธิทางศาสนาของเขา โดนฟ้องเละและถูกยึดใบประกอบวิชาชีพ', zh: '⚖️ 庭审警告。结果病人是耶和华见证人。即使面临死亡风险，他也会拒绝输血。你侵犯了他的宗教权利。巨额诉讼。你失去了执照。' }, stats: { competence: 20, ethics: -150, leadership: -90, innovation: 0 } }
        ]
    },

    {
        id: 'nu_019',
        text: {
            en: '👊 The Violent Withdrawal: A patient in alcohol withdrawal is hallucinating and trying to pull out his IV and punch the air. He is a 250lb linebacker. You are alone in the room.',
            th: '👊 อาการลงแดงรุนแรง: คนไข้ถอนพิษสุราเกิดอาการประสาทหลอน พยายามจะดึงสายน้ำเกลือและชกลม เขาตัวใหญ่หนักกว่า 100 กิโล คุณอยู่ในห้องคนเดียว',
            zh: '👊 暴力戒断：一名正在戒断酒精的病人幻觉发作，正试图拔掉静脉注射并挥拳。他是个250磅重的橄榄球后卫。你独自在房间里。'
        },
        options: [
            { id: 'A', text: { en: '🧘 De-escalation: "Stay calm, stay out of arm\'s reach. Talk in a low, soothing voice. Use his name repeatedly."', th: '🧘 ยับยั้งเหตุ: "ใจเย็นๆ ยืนให้พ้นระยะหมัด พูดด้วยเสียงนิ่งๆ ทุ้มๆ เรียกชื่อเขาซ้ำๆ"', zh: '🧘 降级处理："保持冷静，保持在伸手可及的范围之外。用低沉、舒缓的声音说话。重复喊他的名字。"' }, consequence: { en: '✅ Crisis Management. He slows down. You buy enough time for the tech to arrive with soft restraints and Vitamin B. No one gets hurt.', th: '✅ การจัดการวิกฤต: เขาเริ่มช้าลง คุณซื้อเวลาพอให้ผู้ช่วยพยาบาลเอาอุปกรณ์พันธนาการแบบนุ่มมาถึงพอดี ไม่มีใครเจ็บตัว', zh: '✅ 危机管理。他慢了下来。你争取到了足够的时间，让技师带着软质约束带和维生素B赶到。没有人受伤。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🚨 Code Grey: "Push the panic button immediately. Get security and 4 other nurses here to pin him down."', th: '🚨 กดรหัสเทา: "กดปุ่มแจ้งเหตุฉุกเฉินทันที เรียก รปภ. และพยาบาลอีก 4 คนมาช่วยกันกดตัวเขาไว้"', zh: '🚨 灰色代码："立即按下恐慌按钮。让保安和另外4名护士赶来制服他。"' }, consequence: { en: '⚠️ Physical Incident. Security is aggressive. The patient ends up with a broken rib during the scuffle. It was safe for YOU, but the patient suffered. You are investigated for "excessive use of force."', th: '⚠️ บาดเจ็บทางกาย: รปภ. ใช้ความรุนแรง คนไข้ซี่โครงหักระหว่างชุลมุน คุณปลอดภัยนะแต่คนไข้เจ็บ คุณโดนสอบสวนเรื่อง "การใช้กำลังเกินกว่าเหตุ"', zh: '⚠️ 身体冲突。保安很咄咄逼人。病人在扭打中肋骨骨折。对你来说是安全的，但病人受苦了。你因为"过度使用武力"而受到调查。' }, stats: { competence: 30, ethics: 30, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '💉 The Ninja Sedative: "I\'ll sneak up while he\'s distracted and give him a dose of IM Haldol without asking. Better for everyone."', th: '💉 ยาสลบนินจา: "เดี๋ยวตอนเขาเผลอ ฉันจะแอบเข้าไปฉีด Haldol เข้ากล้ามเนื้อโดยไม่ต้องขอ ความสงบจะได้เกิดแก่ทุกคน"', zh: '💉 忍者镇静剂："趁他不注意，我会溜过去在他不知情的情况下给他注射一剂IM氟哌啶醇。这对大家都好。"' }, consequence: { en: '💀 Chemical Restraint Fail. He turns around right as you poke him. He punches you in the face. Broken nose. Also, medicating without consent/order in this way is battery. You are fired.', th: '💀 ทำคุณบูชาโทษ: เขาหันมาจังหวะที่คุณแทงเข็มพอดี คุณโดนชกหน้าหัก แถมการให้ยาโดยไม่ได้รับความยินยอมหรือมีคำสั่งแพทย์ในลักษณะนี้ถือเป็นคดีทำร้ายร่างกาย คุณโดนไล่ออก', zh: '💀 化学约束失败。正当你戳他时，他转过身来。他一拳打在你的脸上。鼻子被打断。此外，在没有同意/医嘱的情况下进行这种治疗属于殴打罪。你被解雇了。' }, stats: { competence: 10, ethics: -80, leadership: -40, innovation: 0 } }
        ]
    },

    {
        id: 'nu_020',
        text: {
            en: '🦋 The Hospice Choice: A terminally ill patient is in agony. The dose of morphine required to stop his pain might also stop his breathing. The family says "Please, just stop the pain, whatever it takes."',
            th: '🦋 ทางเลือกแห่งวาระสุดท้าย: คนไข้ระยะสุดท้ายทรมานมาก ปริมาณมอร์ฟีนที่พอจะระงับความเจ็บปวดได้ อาจจะทำให้เขาหยุดหายใจด้วย ครอบครัวบอกว่า "ได้โปรด หยุดความเจ็บปวดที จะเกิดอะไรขึ้นก็ได้"',
            zh: '🦋 安宁疗护的选择：一名患有绝症的病人处于剧痛之中。停止疼痛所需的吗啡剂量也可能会让他呼吸停止。家属说："拜托，只要能止痛，不惜一切代价。"'
        },
        options: [
            { id: 'A', text: { en: '⚖️ The Rule of Double Effect: "Give the dose. The intent is to relieve pain, not cause death. This is ethically supported in hospice care."', th: '⚖️ หลักการผลกระทบซ้อน: "ให้ยาไป เจตนาคือเพื่อบรรเทาความปวด ไม่ใช่เพื่อฆ่า ในการดูแลระยะสุดท้ายถือว่ามีจริยธรรมรองรับ"', zh: '⚖️ 双重效应原则："给予该剂量。目的是缓解疼痛，而不是导致死亡。这在安宁疗护中得到了伦理支持。"' }, consequence: { en: '✅ Peaceful Passing. The pain subsides. He breathes shallowly for an hour and then passes away comfortably. The family is grateful. You provided a "good death."', th: '✅ จากไปอย่างสงบ: ความปวดหายไป เขาหายใจแผ่วๆ อยู่หนึ่งชั่วโมงแล้วจากไปอย่างสบาย ครอบครัวซาบซึ้งใจ คุณได้มอบ "การตายที่ดี" ให้เขา', zh: '✅ 平静离世。疼痛减轻了。他浅浅地呼吸了一个小时，然后安详地离开了。家属非常感激。你提供了一次"善终"。' }, stats: { competence: 50, ethics: 80, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '🚫 Conservative Dosing: "I can\'t risk killing him. I\'ll give a half dose. He\'ll still be in pain, but he\'ll be alive."', th: '🚫 ให้ยาแบบระวัง: "ฉันเสี่ยงทำให้เขาตายไม่ได้หรอก ให้แค่ครึ่งโดสพอ เขาอาจจะยังปวดอยู่แต่เขายังหายใจนะ"', zh: '🚫 保守用药："我不能冒险害死他。我会给半个剂量。他仍然会痛，但他还活着。"' }, consequence: { en: '💔 Agonal Suffering. The patient spends his last 4 hours gasping and moaning in visible distress. The family is traumatized. You valued a few hours of "life" over quality of death.', th: '💔 ทรมานก่อนตาย: คนไข้ใช้เวลา 4 ชั่วโมงสุดท้ายด้วยการนอนกระสับกระส่ายและร้องครางด้วยความเจ็บปวด ครอบครัวฝังใจกับภาพที่เห็น คุณให้ค่ากับการ "มีชีวิต" ต่ออีกไม่กี่ชั่วโมงมากกว่าคุณภาพของการจากไป', zh: '💔 临终痛苦。病人在最后的四个小时里一直大口喘气，在明显的痛苦中呻吟。家属受到了创伤。你认为几个小时的"寿命"比死亡质量更重要。' }, stats: { competence: 40, ethics: 30, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '📞 Call the MD: "I\'m uncomfortable. I want the doctor to come and give the dose himself."', th: '📞 ตามหมอ: "ฉันไม่กล้าทำเอง อยากให้หมอมาฉีดยาให้เขาเองเลยค่ะ"', zh: '📞 打电话给医生："我不舒服。我希望医生过来亲自给药。"' }, consequence: { en: '⚠️ Delayed Comfort. The doctor is in another building. It takes 45 minutes to arrive. The patient suffers unnecessarily for nearly an hour because you were afraid of the responsibility.', th: '⚠️ ช้าไป: หมออยู่อีกตึกหนึ่ง กว่าจะมาถึงใช้เวลา 45 นาที คนไข้ต้องทรมานฟรีๆ เกือบชั่วโมงเพียงเพราะคุณกลัวที่จะต้องรับผิดชอบ', zh: '⚠️ 延迟安抚。医生在另一栋楼里。45分钟后才赶到。病人因为你害怕承担责任而白白受苦了近一个小时。' }, stats: { competence: 20, ethics: 20, leadership: -30, innovation: 0 } }
        ]
    },

    {
        id: 'nu_021',
        text: {
            en: '📉 The Short-Staffed Shift: You are the Charge Nurse. Two nurses called out sick. You are left with 3 nurses for 24 patients. The hospital refuses to pay for "agency" help. One of your nurses is crying in the breakroom.',
            th: '📉 เวรคนขาด: คุณเป็นพยาบาลหัวหน้าเวร พยาบาล 2 คนลาป่วย ทำให้เหลือพยาบาลแค่ 3 คนดูแลคนไข้ 24 ราย โรงพยาบาลปฏิเสธจะจ้างพยาบาลนอกพาร์ทไทม์มาช่วย หนึ่งในพยาบาลของคุณกำลังนั่งร้องไห้ในห้องพักพนักงาน',
            zh: '📉 人手不足的班次：你是护士长。两名护士请病假。你只剩3名护士来照顾24名病人。医院拒绝支付"机构"代班费用。你的一名护士正在休息室里哭泣。'
        },
        options: [
            { id: 'A', text: { en: '💪 Lead from the Front: "I\'ll take a full patient assignment myself. We can do this! Everyone skip lunches, I\'ll buy pizza later."', th: '💪 นำทีมลุยวอร์ด: "ฉันจะรับคนไข้เองเต็มจำนวนเหมือนกัน เราทำได้! ทุกคนงดพักเที่ยงไปก่อน เดี๋ยวฉันเลี้ยงพิซซ่าเอง"', zh: '💪 身先士卒："我自己也会承担全额病人护理任务。我们能行！大家都别吃午饭了，晚点我买比萨。"' }, consequence: { en: '🔥 Burnout Factor. You get through the shift. No one died. BUT everyone is exhausted and hates the hospital. 2 nurses quit the next week. Pizza doesn\'t fix unsafe staffing ratios.', th: '🔥 ปัจจัยหมดไฟ: คุณผ่านเวรนั้นมาได้ ไม่มีคนตาย แต่ทุกคนพังพินาศและเกลียดโรงพยาบาล สัปดาห์ต่อมาพยาบาล 2 คนลาออก พิซซ่าช่วยอะไรไม่ได้เมื่อเทียบกับอัตรากำลังที่ไม่ปลอดภัย', zh: '🔥 职业倦怠。你熬过了这个班次。没死人。但是每个人都精疲力竭，讨厌这家医院。下周有2名护士辞职。比萨饼解决不了不安全的人员配置比例。' }, stats: { competence: 50, ethics: 30, leadership: 60, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Refuse the Assignment: "Call the Nursing Supervisor. This is unsafe. We are blocking new admissions until we get help."', th: '🛑 ปฏิเสธการรับงาน: "โทรหาซุปเปอร์ไวเซอร์ นี่มันไม่ปลอดภัย เราจะไม่รับคนไข้ใหม่จนกว่าจะมีคนมาช่วย"', zh: '🛑 拒绝任务："给护理主管打电话。这不安全。在得到帮助之前，我们拒绝接收新病人。"' }, consequence: { en: '✅ Safety Advocate. Management is furious. But you documented "Assignment Despite Objection." You forced the hospital to move a nurse from another unit. You protected your team\'s licenses.', th: '✅ พิทักษ์ความปลอดภัย: ผู้บริหารโกรธจัด แต่คุณทำบันทึก "ปฏิบัติงานภายใต้ข้อโต้แย้ง" คุณกดดันจนรพ.ต้องดึงพยาบาลจากหน่วยอื่นมาช่วย คุณช่วยปกป้องใบประกอบวิชาชีพของทีมคุณไว้ได้', zh: '✅ 安全倡导者。管理层大发雷霆。但你记录了"虽抗议仍执行任务"。你迫使医院从其他部门调来了一名护士。你保护了团队的执照。' }, stats: { competence: 40, ethics: 60, leadership: 80, innovation: 20 } },
            { id: 'C', text: { en: '📈 The Lean Workflow: "We only do meds and vitals today. No baths, no walking, no non-essential talks. Survival mode active."', th: '📈 กระบวนการทำงานแบบลีน: "วันนี้เราจะทำแค่ให้ยากับวัดสัญญาณชีพเท่านั้น งดเช็ดตัว งดเดิม งดคุยเล่นทุกกรณี เข้าสู่โหมดเอาตัวรอด"', zh: '📈 精简化工作流程："我们今天只负责给药和测量生命体征。不洗澡，不散步，不进行非必要的谈话。开启生存模式。"' }, consequence: { en: '⚠️ Quality Drop. Patients complain about being ignored. A patient develops a bed sore because they weren\'t turned. It\'s a "safe" shift in terms of tasks, but the care quality is terrible.', th: '⚠️ คุณภาพตกต่ำ: คนไข้บ่นว่าถูกทอดทิ้ง มีคนหนึ่งเป็นแผลกดทับเพราะไม่มีใครไปพลิกตัวให้ แม้จะเป็นเวรที่ "รอด" ในเรื่องตัวงานสำคัญ แต่คุณภาพการพยาบาลคือแย่มาก', zh: '⚠️ 质量下降。病人投诉被忽视。一名病人因为没有翻身而得了褥疮。就任务而言，这是一个"安全"的班次，但护理质量很糟糕。' }, stats: { competence: 30, ethics: 20, leadership: 40, innovation: 50 } }
        ]
    },

    {
        id: 'nu_022',
        text: {
            en: '📱 The Telemetry Glitch: You notice the central monitor shows a flatline for Room 402. But the patient was just talking to you 2 minutes ago. The AI alarm system didn\'t go off.',
            th: '📱 ระบบเตือนภัยผิดพลาด: คุณสังเกตเห็นหน้าจอกลางโชว์คลื่นนิ่ง (Flatline) ในห้อง 402 แต่คนไข้เพิ่งคุยกับคุณเมื่อ 2 นาทีที่แล้วเองนะ แถมระบบ AI เตือนภัยก็ไม่ดังด้วย',
            zh: '📱 遥测系统故障：你发现中央监视器显示402房间的曲线变平。但病两分钟前还在跟你说话。AI报警系统没有响。'
        },
        options: [
            { id: 'A', text: { en: '🏃 Physical Check: "Don\'t trust the monitor. Run to the room immediately."', th: '🏃 ไปดูด้วยตา: "อย่าเชื่อจอมอนิเตอร์ วิ่งไปที่ห้องเดี๋ยวนี้"', zh: '🏃 现场检查："别相信监视器。立即跑去病房。"' }, consequence: { en: '✅ Good Instincts! The patient had disconnected their lead to scratch a rash. But while you were there, you noticed they were actually starting to have a real seizure. You caught it early because you went in.', th: '✅ สัญชาตญาณเยี่ยม: คนไข้แค่แกะสายขั้วติดอกเพื่อเกาผื่น แต่ระหว่างที่คุณอยู่นั่น คุณดันเห็นเขากำลังเริ่มชักจริงๆ คุณตรวจเจอได้เร็วเพราะคุณเข้าไปดูเองกับตา', zh: '✅ 直觉很准！病人为了抓痒拔掉了导线。但在你在场的时候，你发现他们实际上正开始真正的癫痫发作。因为你进去了，所以你及早发现了病情。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🖥️ Restart the System: "It\'s a software bug. I\'ll reset the monitor from the desk."', th: '🖥️ รีสตาร์ทระบบ: "มันเป็นบักของซอฟต์แวร์ เดี๋ยวฉันรีเซตมอนิเตอร์จากเคาน์เตอร์นี่แหละ"', zh: '🖥️ 重启系统："这是个软件Bug。我在工作台重启监视器。"' }, consequence: { en: '💀 Technology Failure. While you were clicking through menus, the patient actually entered V-Fib. The 3-minute delay in starting CPR leads to permanent damage. Never choose a screen over a human.', th: '💀 ความล้มเหลวของเทคโนโลยี: ขณะที่คุณกำลังคลิกหาเมนู คนไข้เกิดหัวใจเต้นผิดจังหวะ (V-Fib) จริงๆ การเริ่ม CPR ช้าไป 3 นาทีทำให้เขาสมองตายถาวร อย่าเลือกหน้าจอมากกว่ามนุษย์', zh: '💀 技术故障。当你点击菜单时，病人实际上进入了室颤。开始心肺复苏的3分钟延迟导致了永久性损伤。永远不要选择屏幕而不是人。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 40 } }
        ]
    },

    {
        id: 'nu_023',
        text: {
            en: '🍺 The Hungover Colleague: You smell alcohol on the breath of the night shift nurse coming to relieve you. She is slurring slightly but says "It\'s just mouthwash, I\'m fine. Please, I need this shift pay."',
            th: '🍺 เพื่อนร่วมงานเมาค้าง: คุณได้กลิ่นเหล้าจากลมหายใจของพยาบาลเวรดึกที่จะมาเปลี่ยนเวรกับคุณ เธอพูดลิ้นพันกันนิดหน่อยแต่บอกว่า "มันแค่กลิ่นน้ำยาบ้วนปาก ฉันโอเค ขอร้องล่ะ ฉันต้องการค่าเวรนี้จริงๆ"',
            zh: '🍺 宿醉的同事：你在接班的夜班护士呼出的气味中闻到了酒精味。她说话有点语无伦次，但她说："只是漱口水，我没事。拜托，我需要这份班次的工资。"'
        },
        options: [
            { id: 'A', text: { en: '📞 Report to Supervisor: "I cannot hand over patients to an impaired nurse. I\'m calling the manager."', th: '📞 รายงานหัวหน้า: "ฉันรับส่งเวรให้พยาบาลที่ไม่อยู่ในสภาพพร้อมทำงานไม่ได้ ฉันจะโทรหาผู้จัดการ"', zh: '📞 报告给主管："我不能把病人交给一名状态受损的护士。我要给经理打电话。"' }, consequence: { en: '✅ Patient Safety First. The supervisor comes, she is breathalyzed and sent home/to rehab. You have to stay and work a double shift. You are exhausted but you protected the patients from a deadly error.', th: '✅ ปลอดภัยไว้ก่อน: หัวหน้ามา เธอถูกตรวจแอลกอฮอล์และส่งกลับบ้านหรือส่งบำบัด คุณต้องอยู่ต่อเพื่อขึ้นเวรควบ คุณเหนื่อยมากแต่คุณช่วยปกป้องคนไข้จากความผิดพลาดที่อาจถึงตายได้', zh: '✅ 病人安全第一。主管来了，她接受了酒精测试并被送回家/送去康复中心。你不得不加班工作两个班次。你精疲力竭，但你保护了病人免于致命错误。' }, stats: { competence: 40, ethics: 90, leadership: 60, innovation: 0 } },
            { id: 'B', text: { en: '🤫 Help Her Out: "Okay, just sit at the desk. I\'ll do the heavy lifting for the first 2 hours until you sober up."', th: '🤫 ช่วยเหลือเพื่อน: "โอเค งั้นเธอนั่งอยู่ที่เคาน์เตอร์เฉยๆ นะ เดี๋ยว 2 ชั่วโมงแรกฉันทำส่วนที่หนักให้เองจนกว่าเธอจะตื่นเต็มตา"', zh: '🤫 帮她一把："好吧，你就在桌子旁坐着。前两个小时我来做繁重的工作，直到你清醒过来。"' }, consequence: { en: '💀 Disaster Strikes. You are busy with another patient. She tries to hang an IV bag, grabs the wrong one, and the patient dies. You are both held criminally liable. Being "nice" killed someone.', th: '💀 หายนะมาเยือน: คุณยุ่งอยู่กับคนไข้อีกคน เธอพยายามจะแขวนถุงน้ำเกลือแต่หยิบผิดขวด คนไข้ตาย ทั้งคู่ถูกดำเนินคดีอาญา ความ "ใจดี" ของคุณฆ่าคนได้', zh: '💀 灾难降临。你正忙着照顾另一个病人。她试图挂上静脉输液袋，抓错了袋子，导致病人死亡。你们都要承担刑事责任。"好心"害死了人。' }, stats: { competence: 20, ethics: -80, leadership: -40, innovation: 0 } }
        ]
    },

    {
        id: 'nu_024',
        text: {
            en: '🏥 The Wasteful Habit: You notice the hospital throws away $2,000 worth of un-opened sterile supplies every day because they were "in a room" where a patient was discharged, even if never touched.',
            th: '🏥 นิสัยสิ้นเปลือง: คุณสังเกตเห็นว่าโรงพยาบาลทิ้งอุปกรณ์ปลอดเชื้อที่ยังไม่เปิดมูลค่ากว่า 2,000 ดอลลาร์ทุกวัน เพียงเพราะมันเคย "วางอยู่ในห้อง" ของคนไข้ที่ออกจากรพ.ไปแล้ว ทั้งที่ยังไม่ได้แตะต้องเลยด้วยซ้ำ',
            zh: '🏥 浪费的习惯：你发现由于病房里的病人出院了，即使从未被碰过，医院每天也会扔掉价值2000美元的未开启无菌用品。'
        },
        options: [
            { id: 'A', text: { en: '💡 Propose a Donation Program: "Let\'s partner with a NGO to donate these to developing nations instead of the trash."', th: '💡 เสนอโครงการบริจาค: "เรามาจับมือกับ NGO เพื่อบริจาคของพวกนี้ให้ประเทศกำลังพัฒนาแทนที่จะทิ้งลงถังขยะกันเถอะ"', zh: '💡 提议捐赠计划："让我们与非政府组织合作，把这些捐给发展中国家，而不是扔进垃圾桶。"' }, consequence: { en: '✅ Sustainability Hero. The program launches. Within a year, your hospital has saved $1M in tax write-offs and helped 3 overseas clinics. You are promoted to Quality Improvement Lead.', th: '✅ ฮีโร่แห่งความยั่งยืน: โครงการเริ่มต้นขึ้น ภายในหนึ่งปี โรงพยาบาลประหยัดภาษีไปได้ 1 ล้านดอลลาร์ และช่วยคลินิกในต่างประเทศได้ 3 แห่ง คุณได้รับการเลื่อนตำแหน่งเป็นหัวหน้าฝ่ายปรับปรุงคุณภาพ', zh: '✅ 可持续发展英雄。计划启动。一年之内，你的医院节省了100万美元的税收减免，并帮助了3个海外诊所。你被提升为质量改进主管。' }, stats: { competence: 50, ethics: 60, leadership: 60, innovation: 100 } },
            { id: 'B', text: { en: '🤫 Take them Home: "I might need these for my first aid kit. Better me than the landfill."', th: '🤫 แอบเอากลับบ้าน: "เอาไปใส่กล่องยาที่บ้านดีกว่า ให้ฉันใช้ยังดีกว่าทิ้งไปเปล่าๆ"', zh: '🤫 带回家："我的急救箱可能需要这些。给我总比填埋好。"' }, consequence: { en: '💀 Caught on Camera. You are fired for theft for "stealing" items that were destined for the trash. The hospital has a zero-tolerance policy. Your integrity is gone.', th: '💀 โดนกล้องจับได้: คุณถูกไล่ออกข้อหาลักทรัพย์จากการ "ขโมย" ของที่กำลังจะกลายเป็นขยะ โรงพยาบาลมีกฎเหล็กเรื่องนี้ ความน่าเชื่อถือของคุณหายวับไปกับตา', zh: '💀 监控拍个正着。你因为"偷窃"本该扔进垃圾桶的东西而被解雇。医院实行零容忍政策。你的诚信荡然无存。' }, stats: { competence: 20, ethics: -60, leadership: 20, innovation: 20 } }
        ]
    },

    {
        id: 'nu_025',
        text: {
            en: '🧠 The Brain Dead Donor: A 19-year-old is brain dead. The family is fighting. Mom wants to donate organs to "let him live on." Dad thinks it\'s "mutilation" and wants to stop the process.',
            th: '🧠 ผู้บริจาคสมองตาย: วัยรุ่นอายุ 19 ปีอยู่ในภาวะสมองตาย ครอบครัวกำลังทะเลาะกัน แม่ต้องการบริจาคอวัยวะเพื่อ "ให้เขามีชีวิตอยู่ต่อไป" พ่อคิดว่ามันคือ "การทำลายศพ" และต้องการหยุดกระบวนการนี้',
            zh: '🧠 脑死亡捐献者：一名19岁的青年脑死亡。家属在争执。母亲想捐献器官以"让他继续活下去"。父亲认为这是"残害"，想停止这一进程。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Mediation: "I\'ll bring in the Ethics Committee and the hospital chaplain to help the family reach a consensus before we do anything."', th: '🤝 การกลั่นกรอง: "ฉันจะเรียกคณะกรรมการจริยธรรมและอนุศาสนาจารย์มาช่วยพูดคุยให้ครอบครัวตกลงกันได้ก่อนที่เราจะทำอะไรต่อไป"', zh: '🤝 调解："我会请伦理委员会和医院牧师来，在采取任何行动之前帮助家属达成共识。"' }, consequence: { en: '✅ Professional Sensitivity. After hours of talking, Dad realizes his son had checked the "Donor" box on his DL years ago. He agrees. You saved the family relations and 6 other lives on the transplant list.', th: '✅ ความเป็นมืออาชีพที่ละเอียดอ่อน: หลังคุยกันอยู่นาน พ่อก็นึกได้ว่าลูกเคยติ๊กช่อง "บริจาคอวัยวะ" ในใบขับขี่ไว้เมื่อปีก่อน เขาจึงยอมตกลง คุณช่วยรักษาความสัมพันธ์ในครอบครัวและช่วยชีวิตคนได้อีก 6 คนในรายชื่อรอเปลี่ยนอวัยวะ', zh: '✅ 专业敏感度。经过几个小时的谈话，父亲意识到儿子在几年前的驾照上勾选了"捐献者"框。他同意了。你挽救了家庭关系，以及移植名单上的另外6条生命。' }, stats: { competence: 50, ethics: 70, leadership: 60, innovation: 10 } },
            { id: 'B', text: { en: '👩 Side with the Mother: "The organs are dying. We need to hurry. I\'ll convince the Dad to back down."', th: '👩 เข้าข้างแม่: "อวัยวะกำลังจะเสียนะ เราต้องรีบแล้ว ฉันจะไปเกลี้ยกล่อมให้พ่อยอมถอยเอง"', zh: '👩 站在母亲一边："器官正在坏死。我们需要快点。我会说服父亲退让。"' }, consequence: { en: '⚖️ Legal Injunction. The Dad gets a lawyer and sues the hospital. The process is frozen for 3 days. The organs become non-viable due to infection. No one wins. 6 people on the waiting list die.', th: '⚖️ คำสั่งศาล: พ่อจ้างทนายมาฟ้องโรงพยาบาล กระบวนการทั้งหมดถูกระงับไว้ 3 วัน อวัยวะใช้การไม่ได้อีกต่อไปเพราะติดเชื้อ ไม่มีใครชนะเลย และคนที่รออวัยวะ 6 คนต้องตายลง', zh: '⚖️ 法律禁令。父亲找了律师起诉医院。该程序被冻结了3天。由于感染，器官变得无法使用。没有人获胜。等待名单上的6人死亡。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 0 } }
        ]
    },

    {
        id: 'nu_026',
        text: {
            en: '🩺 The High-Dose Myth: A wealthy patient demands a high dose of Vitamin C IV drip, claiming they read it "cures cancer" on a blog. There is no evidence for this, and it could cause kidney stones. The doctor is willing to do it "to keep the patient happy."',
            th: '🩺 ตำนานวิตามินซีโดสสูง: คนไข้เศรษฐีเรียกร้องขอให้ดริปวิตามินซีเข้าเส้นเลือดปริมาณสูง โดยอ้างว่าอ่านเจอในบล็อกว่ามัน "รักษามะเร็งได้" ซึ่งไม่มีหลักฐานรองรับและอาจทำให้เกิดนิ่วในไตได้ หมอยอมตกลงทำ "เพื่อให้คนไข้พอใจ"',
            zh: '🩺 高剂量神话：一名富有的病人要求静脉滴注高剂量的维生素C，声称他们在博客上读到这能"治愈癌症"。这没有证据支持，而且可能会导致肾结石。医生愿意为了"让病人开心"而去做。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Refuse to Administer: "I cannot give a treatment that has no benefit and known risks. My professional ethics come first."', th: '🛑 ปฏิเสธการให้ยา: "ฉันไม่สามารถให้การรักษาที่ไม่มีประโยชน์และมีความเสี่ยงที่ชัดเจนได้ จริยธรรมวิชาชีพต้องมาเป็นอันดับหนึ่ง"', zh: '🛑 拒绝执行："我不能提供没有益处且有已知风险的治疗。我的职业道德第一。"' }, consequence: { en: '✅ Integrity Win. The patient is angry and leaves. You are written up by the manager for "poor customer service," but the doctor later admits he felt pressured. You stood up for science and safety.', th: '✅ ชนะด้วยความสัตย์จริง: คนไข้โกรธและย้ายโรงพยาบาล คุณโดนผู้จัดการบันทึกตักเตือนเรื่อง "บริการลูกค้าไม่ดี" แต่หมอมายอมรับทีหลังว่าเขาก็รู้สึกกดดัน คุณยืนหยัดเพื่อวิทยาศาสตร์และความปลอดภัย', zh: '✅ 诚信获胜。病人很生气并离开了。你因为"客户服务糟糕"而受到经理的记过处分，但医生后来承认他感到了压力。你维护了科学和安全。' }, stats: { competence: 60, ethics: 90, leadership: 50, innovation: -20 } },
            { id: 'B', text: { en: '💉 Just do it: "The doctor signed it. It\'s on his license, not mine. I\'ll just give it slowly."', th: '💉 ทำตามสั่ง: "หมอเซ็นออร์เดอร์แล้ว อยู่ในความรับผิดชอบของหมอ ไม่ใช่ฉัน เดี๋ยวค่อยๆ ให้ไปละกัน"', zh: '💉 就照做吧："医生签字了。那是他的执照负责，不是我的。我只是慢慢给药。"' }, consequence: { en: '💀 Patient Harm. The patient develops a massive kidney stone and needs surgery. They sue the hospital. You are named in the lawsuit. "I was just following orders" is not a legal defense for nurses.', th: '💀 คนไข้ได้รับบาดเจ็บ: คนไข้เกิดนิ่วในไตขนาดใหญ่ต้องผ่าตัด เขาฟ้องโรงพยาบาลและคุณมีชื่ออยู่ในการฟ้องร้องนั้นด้วย คำว่า "ฉันแค่ทำตามคำสั่ง" ไม่ใช่ข้อแก้ตัวทางกฎหมายสำหรับพยาบาล', zh: '💀 病人伤害。病人长了一个巨大的肾结石，需要手术。他们起诉了医院。你在起诉名单中。"我只是听从命令"对护士来说不是法律辩护。' }, stats: { competence: 30, ethics: -40, leadership: -30, innovation: 0 } }
        ]
    },

    {
        id: 'nu_027',
        text: {
            en: '🏥 The PR Nightmare: A famous celebrity is in room 502 with an overdose. A paparazzi with a camera is pretending to be a cousin to get in. You recognize him from TV.',
            th: '🏥 ฝันร้ายของฝ่ายประชาสัมพันธ์: ดาราดังนอนโอเวอร์โดสอยู่ในห้อง 502 ปาปารัสซี่พร้อมกล้องปลอมตัวเป็นลูกพี่ลูกน้องพยายามจะเข้าไป คุณจำหน้าเขาได้จากในทีวี',
            zh: '🏥 公关噩梦：一名著名名流因过量服用药物住在502病房。一名带着相机的狗仔队成员正冒充表哥试图混进去。你从电视上认出了他。'
        },
        options: [
            { id: 'A', text: { en: '👮 Call Security & Lockdown: "Confirm ID with the patient\'s manager. No one enters without 2-factor verification today."', th: '👮 เรียก รปภ. และล็อกดาวน์: "ให้ยืนยันตัวตนกับผู้จัดการส่วนตัวของคนไข้ ห้ามใครเข้าถ้าไม่มีการยืนยันตัวตนสองชั้นในวันนี้"', zh: '👮 呼叫保安并封锁："与病人的经理确认身份。今天没有双重身份验证，谁也不能进去。"' }, consequence: { en: '✅ HIPAA Guardian. You stop the paparazzi. The celebrity\'s team is incredibly grateful. You are given a commendation for protecting patient privacy under extreme pressure.', th: '✅ ผู้พิทักษ์กฎ HIPAA: คุณสกัดปาปารัสซี่ไว้ได้ ทีมของดาราซาบซึ้งใจมาก คุณได้รับคำชมเชยในการปกป้องความเป็นส่วนตัวของคนไข้ภายใต้ความกดดันมหาศาล', zh: '✅ HIPAA卫士。你阻止了狗仔队。名流的团队非常感激。由于你在极大的压力下保护了病人的隐私，你获得了表彰。' }, stats: { competence: 50, ethics: 80, leadership: 70, innovation: 30 } },
            { id: 'B', text: { en: '📸 The Bribe: He whispers, "Just look the other way for 1 minute while I get one shot, and I\'ll give you $10,000 cash."', th: '📸 ข้อเสนอสินบน: เขากระซิบว่า "แค่แกล้งมองไปทางอื่นนาทีเดียวตอนฉันแอบถ่ายรูป แล้วฉันจะให้เงินสดคุณ 10,000 ดอลลาร์"', zh: '📸 贿赂：他小声说："我就拍一张照片，你假装看别处一分钟，我给你1万美元现金。"' }, consequence: { en: '💀 Jail Time. You take the money. The photo goes world-wide. The celebrity sues. The investigation finds your bank deposit. You lose your license, your job, and face criminal charges for privacy violation.', th: '💀 ติดคุกแน่: คุณรับเงิน รูปหลุดไปทั่วโลก ดาราฟ้องร้อง การสอบสวนเจอเงินฝากในบัญชีคุณ คุณถูกยึดใบประกอบ ตกงาน และโดนคดีอาญาข้อหาละเมิดความเป็นส่วนตัว', zh: '💀 牢狱之灾。你拿了钱。照片流传到全世界。名流起诉了。调查发现了你的银行存款。你失去了执照和工作，并面临侵犯隐私的刑事指控。' }, stats: { competence: 10, ethics: -200, leadership: -100, innovation: 10 } }
        ]
    },

    {
        id: 'nu_028',
        text: {
            en: '🩺 The Error-Prone Pump: You realize the new brand of IV pumps has a software lag that causes them to sometimes skip the decimal point when typing fast. One nurse already almost gave 100 insulin instead of 10.0.',
            th: '🩺 เครื่องดริปยาเจ้าปัญหา: คุณพบว่าเครื่องดริปยายี่ห้อใหม่มีอาการซอฟต์แวร์หน่วง ทำให้บางครั้งมันข้ามจุดทศนิยมไปถ้ากดเร็วๆ พยาบาลคนหนึ่งเกือบจะให้ตัวยาอินซูลิน 100 ยูนิตแทนที่จะเป็น 10.0 แล้ว',
            zh: '🩺 易出错的泵：你发现新品牌的静脉输液泵存在软件延迟，导致在快速打字时有时会跳过小数点。一名护士已经差点给了100个单位的胰岛素，而不是10.0。'
        },
        options: [
            { id: 'A', text: { en: '📢 Inform Management & Manufacturer: "This is a sentinel event waiting to happen. We need a mass recall or a patch immediately."', th: '📢 แจ้งผู้บริหารและผู้ผลิต: "นี่คือหายนะที่รอวันเกิด เราต้องเรียกคืนทั้งหมดหรืออัปเดตซอฟต์แวร์เดี๋ยวนี้"', zh: '📢 通知管理层和制造商："这是一起迟早会发生的重大事故。我们需要立即大规模召回或打补丁。"' }, consequence: { en: '✅ Systems Thinking. The hospital replaces all 500 pumps. The manufacturer fixes the bug. You likely saved hundreds of lives across the country by speaking up about a system flaw.', th: '✅ คิดอย่างเป็นระบบ: โรงพยาบาลเปลี่ยนเครื่องดริปยาทั้ง 500 เครื่อง ผู้ผลิตแก้ไขบักได้สำเร็จ คุณช่วยชีวิตคนนับร้อยทั่วประเทศด้วยการออกมาพูดเรื่องข้อบกพร่องของระบบ', zh: '✅ 系统思维。医院更换了所有500个泵。制造商修复了Bug。通过揭露系统缺陷，你可能挽救了全国数百人的生命。' }, stats: { competence: 60, ethics: 50, leadership: 90, innovation: 80 } },
            { id: 'B', text: { en: '📝 Post a Sticky Note: "I\'ll just put a sticky note on each pump saying \'Type Slow.\' It\'s easier."', th: '📝 แปะโพสต์อิท: "ฉันจะเอาโพสต์อิทไปแปะที่เครื่องว่า \'กดช้าๆ\' ก็พอ ง่ายดี"', zh: '📝 贴张便利贴："我直接在每个泵上贴张便利贴，写上\'输入慢点\'。这样更简单。"' }, consequence: { en: '💀 Inadequate. The sticky note falls off. A night shift nurse, tired and rushing, skips the decimal. A patient dies. You are held partially responsible for not escalating a known dangerous equipment failure.', th: '💀 ไม่เพียงพอ: โพสต์อิทหลุดหายไป พยาบาลเวรดึกที่เหนื่อยและกำลังรีบกดข้ามจุดทศนิยม คนไข้ตาย คุณต้องร่วมรับผิดชอบฐานไม่รายงานความชำรุดของอุปกรณ์ที่อันตรายถึงชีวิต', zh: '💀 不足。便利贴掉了。一名夜班护士在疲惫和匆忙中跳过了小数点。病人死亡。你因为没有上报已知的危险设备故障而承担部分责任。' }, stats: { competence: 30, ethics: 20, leadership: -40, innovation: 10 } }
        ]
    },

    {
        id: 'nu_029',
        text: {
            en: '👶 The NICU Moral Distress: A baby is born at 22 weeks. The chances of survival are less than 5%, and if they survive, they will have severe disabilities. The parents want "everything possible" done. The intensive procedures look like torture.',
            th: '👶 ความทุกข์ใจใน NICU: เด็กเกิดที่อายุครรภ์ 22 สัปดาห์ โอกาสรอดน้อยกว่า 5% และถ้ารอดก็จะเป็นผู้พิการรุนแรง พ่อแม่ต้องการให้ทำ "ทุกวิถีทาง" แต่กระบวนการช่วยชีวิตดูเหมือนการทรมานเด็ก',
            zh: '👶 新生儿重症监护室的道德困境：一个22周出生的婴儿。存活几率不到5%，如果存活，将会有严重的残疾。父母希望"尽一切可能"。高强度的救治程序看起来就像折磨。'
        },
        options: [
            { id: 'A', text: { en: '🩺 Execute Parents\' Wishes: "They have the legal right. I will provide the best care possible, however painful it looks."', th: '🩺 ทำตามความต้องการพ่อแม่: "พวกเขามีสิทธิ์ตามกฎหมาย ฉันจะให้การดูแลที่ดีที่สุดเท่าที่ทำได้ ไม่ว่ามันจะดูทรมานแค่ไหนก็ตาม"', zh: '🩺 执行父母的意愿："他们有法律权利。无论看起来多么痛苦，我都会提供最好的护理。"' }, consequence: { en: '💔 Moral Injury. You perform painful procedures daily for 2 months. The baby eventually dies. You feel burnt out and traumatized. You start questioning if modern medicine goes too far.', th: '💔 บาดแผลทางใจ: คุณต้องทำหัตถการที่สร้างความเจ็บปวดทุกวันเป็นเวลา 2 เดือน สุดท้ายเด็กก็ตาย คุณรู้สึกหมดไฟและสะเทือนใจ คุณเริ่มตั้งคำถามว่าการแพทย์สมัยใหม่มันทำเกินไปหรือเปล่า', zh: '💔 道德伤害。你连续两个月每天进行痛苦的程序。婴儿最终还是死了。你感到精疲力竭，深受创伤。你开始质疑现代医学是否走得太远。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🕊️ Palliative Consultation: "Let\'s gently suggest a meeting with the Palliative Care team to discuss quality of life and comfort care options."', th: '🕊️ ปรึกษาเรื่องการดูแลประคับประคอง: "ลองค่อยๆ แนะนำให้พบทีม Palliative Care เพื่อคุยเรื่องคุณภาพชีวิตและทางเลือกในการดูแลให้เด็กสบายตัวที่สุดดีไหม"', zh: '🕊️ 舒缓疗护咨询："让我们温和地建议与舒缓疗护团队见个面，讨论生活质量和舒适护理的选择。"' }, consequence: { en: '✅ Gentle Transition. The parents realize that "saving" might mean "suffering." They transition to comfort care. You hold the baby during their final moments. It is sad, but peaceful. You avoided unnecessary pain.', th: '✅ การเปลี่ยนผ่านที่นุ่มนวล: พ่อแม่เริ่มตระหนักว่า "การช่วยชีวิต" อาจหมายถึง "การทรมาน" พวกเขาเปลี่ยนมาเป็นการดูแลแบบประคับประคอง คุณอุ้มเด็กไว้ในอ้อมกอดในช่วงสุดท้าย มันเศร้าแต่ก็สงบ คุณช่วยให้เด็กไม่ต้องเจ็บปวดฟรีๆ', zh: '✅ 温和的过渡。父母意识到"救命"可能意味着"痛苦"。他们转向了舒适护理。你在婴儿最后的时刻抱着他。虽然悲伤，但很平静。你避免了不必要的痛苦。' }, stats: { competence: 50, ethics: 70, leadership: 50, innovation: 30 } }
        ]
    },

    {
        id: 'nu_030',
        text: {
            en: '📝 The Falsified Chart: You realize the nurse from the previous shift logged that she turned a patient at 2 AM, 4 AM, and 6 AM. But the patient has a fresh pressure ulcer and tells you "No one has been in here since midnight."',
            th: '📝 การปลอมแปลงประวัติ: คุณพบว่าพยาบาลเวรก่อนหน้าลงบันทึกว่าเธอพลิกตัวคนไข้ตอนตี 2 ตี 4 และตี 6 แต่คนไข้กลับมีแผลกดทับเกิดขึ้นมาใหม่แล้วบอกคุณว่า "ไม่มีใครเข้ามาในนี้เลยตั้งแต่เที่ยงคืน"',
            zh: '📝 伪造的病历：你发现上一班的护士记录她在凌晨2点、4点和6点为病人翻了身。但病人长了新的褥疮，并告诉你"从午夜起就没人进来过"。'
        },
        options: [
            { id: 'A', text: { en: '🗣️ Confront the Colleague: "I saw your logs, but the patient has a stage 2 ulcer. What happened?"', th: '🗣️ เผชิญหน้ากับเพื่อนร่วมงาน: "ฉันเห็นที่พี่จดนะ แต่คนไข้มีแผลกดทับระดับ 2 แล้วนะ มันเกิดอะไรขึ้นคะ?"', zh: '🗣️ 与同事对质："我看到你的记录了，但病人有二期褥疮。发生了什么？"' }, consequence: { en: '⚠️ Internal Conflict. She gets defensive and cries, claiming she was busy with a code. She begs you not to report it. If you don\'t, you are now complicit in falsifying a legal medical document.', th: '⚠️ ความขัดแย้งภายใน: เธอเริ่มตั้งการ์ดและร้องไห้ อ้างว่ายุ่งกับเคสฉุกเฉินอื่นอยู่ เธออ้อนวอนไม่ให้คุณรายงาน ถ้าคุณไม่ทำ คุณจะกลายเป็นผู้สมรู้ร่วมคิดในการปลอมแปลงเอกสารทางการแพทย์ทันที', zh: '⚠️ 内部冲突。她变得很抵触并哭了，声称自己正忙着处理一起紧急救治。她求你不要上报。如果你不上报，你现在就成了伪造法律医疗文件的共犯。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '📢 Inform Quality Management: "This is a safety issue. Falsifying skin checks leads to patient harm. I must report the ulcer and the log disparity."', th: '📢 แจ้งฝ่ายบริหารคุณภาพ: "นี่คือปัญหาด้านความปลอดภัย การปลอมแปลงการตรวจผิวพรรณทำให้คนไข้ได้รับบาดเจ็บ ฉันต้องรายงานทั้งเรื่องแผลและข้อมูลที่ไม่ตรงกันในบันทึก"', zh: '📢 通知质量管理部门："这是一个安全问题。伪造皮肤检查会导致病人受到伤害。我必须报告褥疮和记录不符的情况。"' }, consequence: { en: '✅ High Ethics. The other nurse is fired. It\'s sad, but patients are safer now. You get the reputation of being a "by the book" nurse—some colleagues are afraid of you, but patients trust you 100%.', th: '✅ จริยธรรมสูงส่ง: พยาบาลคนนั้นถูกไล่ออก เป็นเรื่องเศร้าแต่วอร์ดปลอดภัยขึ้น คุณได้ชื่อว่าเป็นพยาบาล "สายระเบียบ" เพื่อนบางคนอาจจะกลัวคุณ แต่คนไข้ไว้ใจคุณ 100%', zh: '✅ 高尚的伦理。另一名护士被解雇了。虽然很悲哀，但病人现在更安全了。你赢得了"循规蹈矩"护士的名声——有些同事怕你，但病人100%信任你。' }, stats: { competence: 50, ethics: 90, leadership: 50, innovation: 0 } }
        ]
    },

    // SECTION 4: LEADERSHIP, INNOVATION & LEGACY (Questions 31-50)

    {
        id: 'nu_031',
        text: {
            en: '👔 The Promotion Offer: You\'ve been offered the Charge Nurse position. It means more pay and power, but less time with patients and more time dealing with hospital politics and staff scheduling conflicts.',
            th: '👔 ข้อเสนอเลื่อนตำแหน่ง: คุณได้รับข้อเสนอให้เป็นพยาบาลหัวหน้าเวร (Charge Nurse) ซึ่งหมายถึงเงินเดือนและอำนาจที่มากขึ้น แต่เวลาดูแลคนไข้จะน้อยลง และต้องไปปวดหัวกับเรื่องการเมืองในรพ.และการจัดตารางเวรแทน',
            zh: '👔 晋升机会：你被提拔为护士长。这意味着更高的薪水和更大的权力，但与病人相处的时间会减少，更多时间要处理医院政治和员工排班冲突。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Accept the Challenge: "I can make a bigger difference by improving the system and supporting my team."', th: '🚀 รับคำท้า: "ฉันสามารถสร้างความเปลี่ยนแปลงที่ยิ่งใหญ่กว่าได้ด้วยการพัฒนาระบบและสนับสนุนทีมของฉัน"', zh: '🚀 接受挑战："我可以通过改进系统和支持我的团队来发挥更大的作用。"' }, consequence: { en: '✅ Leadership Growth. You are excellent at organizing. The ward runs smoother, and your staff feels supported. You miss the bedside, but your impact is scaled.', th: '✅ การเติบโตด้านความเป็นผู้นำ: คุณจัดการเก่งมาก วอร์ดรันไปได้อย่างราบรื่นและลูกน้องรู้สึกมั่นใจ คุณอาจคิดถึงการดูแลคนไข้ข้างเตียง แต่ผลงานของคุณขยายวงกว้างขึ้นมาก', zh: '✅ 领导力成长。你非常擅长组织。病房运转得更顺畅，你的员工感到得到了支持。你怀念临床工作，但你的影响力扩大了。' }, stats: { competence: 40, ethics: 30, leadership: 90, innovation: 40 } },
            { id: 'B', text: { en: '🩺 Stay at the Bedside: "My heart is with the patients. Management isn\'t for me."', th: '🩺 อยู่ข้างเตียงต่อ: "หัวใจของฉันอยู่กับคนไข้ งานบริหารคงไม่ใช่ทางของฉัน"', zh: '🩺 留在临床："我的心与病人在一起。管理工作不适合我。"' }, consequence: { en: '❤️ Clinical Mastery. You become the most trusted senior nurse on the floor. Patients ask for you by name. You are happy, though your bank account is a bit slimmer.', th: '❤️ ความเชี่ยวชาญทางคลินิก: คุณกลายเป็นพยาบาลรุ่นพี่ที่ได้รับความไว้วางใจที่สุดในวอร์ด คนไข้เรียกหาแต่ชื่อคุณ คุณมีความสุข แม้เงินในบัญชีจะน้อยกว่าการขึ้นเป็นหัวหน้านิดหน่อย', zh: '❤️ 临床精通。你成为了病房里最受信任的高级护士。病人指名找你。你很快乐，尽管你的银行存款稍微少了一点点。' }, stats: { competence: 80, ethics: 50, leadership: 20, innovation: 10 } }
        ]
    },

    {
        id: 'nu_032',
        text: {
            en: '🪧 The Nursing Strike: The union is striking for better ratios and pay. If you strike, the hospital will be dangerously understaffed. If you don\'t, you\'re seen as a "scab" by your colleagues.',
            th: '🪧 การประท้วงหยุดงาน: สหภาพกำลังประท้วงเพื่อขออัตรากำลังพยาบาลและค่าจ้างที่ดีขึ้น ถ้าคุณหยุดงาน รพ.จะขาดคนจนอันตราย แต่ถ้าไม่หยุด เพื่อนร่วมงานจะมองว่าคุณเป็นพวก "หักหลังพวกพ้อง"',
            zh: '🪧 护士罢工：工会正在为更好的配比和待遇进行罢工。如果你参加罢工，医院将面临危险的人手不足。如果你不参加，你会被同事视为"罢工破坏者"。'
        },
        options: [
            { id: 'A', text: { en: '✊ Join the Strike: "Safe ratios save lives in the long run. We must fight for a better system now."', th: '✊ ร่วมประท้วง: "อัตรากำลังที่ปลอดภัยช่วยชีวิตคนได้ยาวๆ เราต้องสู้เพื่อระบบที่ดีกว่าในตอนนี้"', zh: '✊ 参加罢工："从长远来看，安全的配比能挽救生命。我们现在必须为更好的系统而战。"' }, consequence: { en: '⚖️ Collective Power. The strike lasts 3 days. The hospital gives in. Ratios improve. You lost pay this week but improved the profession for years to come.', th: '⚖️ พลังมวลชน: การประท้วงกินเวลา 3 วัน รพ.ยอมแพ้และปรับอัตรากำลังให้ดีขึ้น คุณเสียรายได้สัปดาห์นี้แต่คุณช่วยพัฒนาวิชาชีพไปอีกหลายปี', zh: '⚖️ 集体力量。罢工持续了3天。医院让步了。配比得到了改善。你这周损失了工资，但在未来的岁月里改善了这个行业。' }, stats: { competence: 20, ethics: 60, leadership: 80, innovation: 0 } },
            { id: 'B', text: { en: '🏥 Stay with the Patients: "I can\'t abandon my patients. They didn\'t ask for this politics."', th: '🏥 อยู่กับคนไข้: "ฉันทิ้งคนไข้ไม่ได้ พวกเขาไม่ได้เกี่ยวอะไรกับการเมืองเรื่องนี้"', zh: '🏥 留在病人身边："我不能抛弃我的病人。他们不需要这些政治。"' }, consequence: { en: '💔 Social Isolation. You keep the ward running during a crisis. Management loves you, but your colleagues stop talking to you. The tension in the breakroom is unbearable.', th: '💔 ถูกโดดเดี่ยว: คุณช่วยให้วอร์ดรันได้ในช่วงวิกฤต ผู้บริหารรักคุณมาก แต่เพื่อนร่วมงานเลิกคุยกับคุณ บรรยากาศในห้องพักพยาบาลตึงเครียดจนแทบหายใจไม่ออก', zh: '💔 社交孤立。你在危机期间维持了病房的运转。管理层很爱你，但你的同事不再理你。休息室里的紧张气氛令人难以忍受。' }, stats: { competence: 50, ethics: 50, leadership: -40, innovation: 0 } }
        ]
    },

    {
        id: 'nu_033',
        text: {
            en: '🤖 The AI Diagnostic: The hospital introduces a new AI tool that predicts sepsis 4 hours before vitals crash. It\'s flagging a patient you think looks perfect. Do you trust the "Black Box" or your eyes?',
            th: '🤖 AI วินิจฉัย: รพ.เริ่มใช้ระบบ AI ใหม่ที่ทำนายภาวะติดเชื้อในกระแสเลือดได้ก่อนสัญญาณชีพจะแย่ลง 4 ชั่วโมง มันกำลังแจ้งเตือนคนไข้คนหนึ่งที่คุณดูแล้ว "ปกติดีทุกอย่าง" คุณจะเชื่อระบบหรือเชื่อตาตัวเอง?',
            zh: '🤖 AI 诊断：医院引入了一种新的AI工具，可以在生命体征崩溃前4小时预测败血症。它对一个你认为看起来完美的病人发出了警告。你相信这个"黑匣子"还是你自己的眼睛？'
        },
        options: [
            { id: 'A', text: { en: '🔍 Investigate Deeply: "The AI sees something I don\'t. I\'ll order a stat lactate and blood cultures just in case."', th: '🔍 ตรวจสอบอย่างละเอียด: "AI อาจเห็นสิ่งที่ฉันไม่เห็น ฉันจะส่งตรวจแล็บด่วนเพื่อความชัวร์"', zh: '🔍 深入调查："AI看到了我没看到的东西。我会加做一项乳酸和血培养以防万一。"' }, consequence: { en: '✅ Innovation Win. The labs come back sky-high. The patient was trending toward a massive crash. The AI was right, and you were smart to listen. You become a champion for new tech.', th: '✅ นวัตกรรมชนะเลิศ: ผลแล็บออกมาแย่มาก คนไข้กำลังจะช็อกจริงๆ AI ทายถูก และคุณฉลาดที่รับฟัง คุณกลายเป็นผู้นำด้านการใช้เทคโนโลยีในวอร์ด', zh: '✅ 创新获胜。实验结果非常高。病人正趋于大规模崩溃。AI是对的，你听从它的建议是明智的。你成为了新技术的拥护者。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 90 } },
            { id: 'B', text: { en: '🚫 Dismiss as Glitch: "These machines have too many false alarms. I\'ll just monitor as usual."', th: '🚫 มองว่าเป็นบั๊ก: "เครื่องพวกนี้แจ้งเตือนมั่วบ่อยจะตาย เดี๋ยวชั้นเฝ้าระวังตามปกติก็พอ"', zh: '🚫 视为故障："这些机器误报太多了。我还是照常监测吧。"' }, consequence: { en: '💀 Late Detection. The patient crashes exactly 4 hours later. You are behind the curve. It takes twice as long to stabilize them because you ignored the early warning.', th: '💀 ตรวจเจอช้า: คนไข้ช็อกในอีก 4 ชั่วโมงต่อมาเป๊ะๆ คุณตามเกมไม่ทัน ต้องใช้เวลาฟื้นฟูเป็นสองเท่าเพราะคุณหมางเมินคำเตือนล่วงหน้า', zh: '💀 检测延迟。病人果然在4小时后崩溃。你落后于形势。由于你忽略了早期预警，稳定他们的病情花了两倍的时间。' }, stats: { competence: 20, ethics: 20, leadership: -20, innovation: -50 } }
        ]
    },

    {
        id: 'nu_034',
        text: {
            en: '🔬 The Clinical Trial: A pharmaceutical company wants you to help lead a clinical trial for a new pain med on your unit. It pays well and is great for your CV, but the documentation is grueling and takes away from patient care.',
            th: '🔬 การทดลองทางคลินิก: บริษัทยาต้องการให้คุณช่วยนำการทดลองทางคลินิกสำหรับยาแก้ปวดตัวใหม่ในวอร์ดของคุณ รายได้ดีและประวัติงานจะสวยมาก แต่เอกสารเยอะมหาศาลและจะเบียดบังเวลาดูแลคนไข้',
            zh: '🔬 临床试验：一家制药公司希望你帮助在你的病房领导一项新镇痛药的临床试验。报酬丰厚，对你的简历很有帮助，但文书工作非常繁重，会占用护理病人的时间。'
        },
        options: [
            { id: 'A', text: { en: '📚 Join the Research: "Advancing science is part of the nursing mission. I\'ll stay late to finish the paperwork."', th: '📚 ร่วมงานวิจัย: "การพัฒนาวิทยาศาสตร์คือส่วนหนึ่งของภารกิจพยาบาล ฉันจะยอมอยู่ดึกเพื่อเคลียร์เอกสารเอง"', zh: '📚 加入研究："推进科学是护理使命的一部分。我会留下来加班完成文书工作。"' }, consequence: { en: '✅ Future Focused. You become a published co-author. You are now the "Research Nurse" of the hospital and have a new career path in academia or industry.', th: '✅ มุ่งสู่อนาคต: คุณได้มีชื่อร่วมในผลงานวิจัยที่ตีพิมพ์ ตอนนี้คุณกลายเป็น "พยาบาลวิจัย" ของรพ. และมีทางเลือกใหม่ในสายวิชาการหรืออุตสาหกรรมยา', zh: '✅ 专注未来。你成为了一名发表论文的合著者。你现在是医院的"研究护士"，在学术界或工业界有了新的职业道路。' }, stats: { competence: 70, ethics: 40, leadership: 60, innovation: 80 } },
            { id: 'B', text: { en: '❌ Decline: "I\'m a clinician, not a data entry clerk. My patients need me present, not buried in forms."', th: '❌ ปฏิเสธ: "ฉันคือพยาบาลคลินิก ไม่ใช่พนักงานคีย์ข้อมูล คนไข้ต้องการตัวฉัน ไม่ใช่เห็นฉันจมกองเอกสาร"', zh: '❌ 拒绝："我是一名临床医生，不是数据录入员。我的病人需要我在场，而不是埋头于表格中。"' }, consequence: { en: '❤️ Patient Presence. Your patients get 100% of your attention. You are happy at the bedside, but you see younger nurses getting promoted over you due to their "extra-curriculars."', th: '❤️ อยู่กับคนไข้: คนไข้ได้รับความสนใจจากคุณเต็มๆ คุณมีความสุขข้างเตียง แต่คุณเห็นพยาบาลรุ่นน้องได้รับการเลื่อนตำแหน่งข้ามหน้าคุณไปเพราะพวกเขามี "ผลงานพิเศษ"', zh: '❤️ 病人在场。你的病人得到了你100%的关注。你在临床工作中很快乐，但你看到年轻护士因为他们的"课外活动"而比你更早获得晋升。' }, stats: { competence: 80, ethics: 50, leadership: 20, innovation: -10 } }
        ]
    },

    {
        id: 'nu_035',
        text: {
            en: '🌪️ The Natural Disaster: A massive hurricane has knocked out the power. The generators are failing. You have two patients on ventilators and only one manual resuscitation bag (Ambu bag). Help is 30 minutes away.',
            th: '🌪️ ภัยธรรมชาติ: พายุเฮอริเคนถล่มจนไฟดับ เครื่องปั่นไฟสำรองเริ่มมีปัญหา คุณมีคนไข้ใส่ท่อช่วยหายใจ 2 คน แต่มีถุงลมช่วยหายใจ (Ambu bag) ชุดเดียวที่ใช้บีบด้วยมือได้ ความช่วยเหลือจะมาถึงในอีก 30 นาที',
            zh: '🌪️ 自然灾害：一场巨大的飓风导致断电。发电机正在失效。你有两名依靠呼吸机的病人，却只有一个手动复苏球（简易呼吸器）。救援要在30分钟后才能到达。'
        },
        options: [
            { id: 'A', text: { en: '🔄 Alternate Manual Breaths: "I\'ll rotate between them. 10 breaths for A, then 10 for B. I won\'t stop until help arrives."', th: '🔄 บีบสลับกัน: "ฉันจะสลับบีบให้ทีละคน 10 ครั้งให้คนไข้ A แล้วสลับไป B ฉันจะไม่หยุดจนกว่าคนจะมาช่วย"', zh: '🔄 交替手动呼吸："我会轮流为他们呼吸。给A呼吸10次，然后给B呼吸10次。直到救援到达我才会停止。"' }, consequence: { en: '✅ Heroic Effort. Your arms are screaming in pain. You are exhausted. But both survive the Gap. You are featured on the news for your determination under pressure.', th: '✅ พยายามอย่างฮีโร่: แขนคุณล้าจนเหมือนจะหลุด คุณเหนื่อยแทบขาดใจ แต่คนไข้ทั้งคู่รอดจนถึงมือหมอ เรื่องราวความอึดของคุณถูกเอาไปลงข่าว', zh: '✅ 英勇努力。你的双臂疼痛难忍。你筋疲力尽。但两人都挺过了这段空窗期。你因在压力下的果决表现而登上了新闻报道。' }, stats: { competence: 90, ethics: 60, leadership: 80, innovation: 60 } },
            { id: 'B', text: { en: '👴 Prioritize One: "Patient A has much better odds. I\'ll focus on ensuring he survives rather than risking both dying."', th: '👴 เลือกช่วยคนที่รอดแน่: "คนไข้ A มีโอกาสรอดมากกว่า ฉันจะทุ่มสมาธิช่วยเขาให้รอดดีกว่าเสี่ยงที่จะตายทั้งคู่"', zh: '👴 优先救一个："病人A的胜算大得多。我会集中精力确保他生存，而不是冒着两个都死的风险。"' }, consequence: { en: '💔 Cold Reality. Patient A survives. Patient B dies. You followed the "grim math" of disaster nursing. You saved a life, but the "what if" haunts you forever.', th: '💔 ความจริงที่โหดร้าย: คนไข้ A รอด แต่ B ตาย คุณทำตามตรรกะ "คณิตศาสตร์มรณะ" ของการพยาบาลในภาวะภัยพิบัติ คุณช่วยชีวิตคนได้ แต่คำว่า "ถ้าเกิด..." จะหลอกหลอนคุณตลอดไป', zh: '💔 冷酷的现实。病人A幸存。病人B死亡。你遵循了灾害护理中"残酷的数学"。你救了一个生命，但"如果当初"的念头将永远缠绕着你。' }, stats: { competence: 60, ethics: 30, leadership: 50, innovation: 20 } }
        ]
    },

    {
        id: 'nu_036',
        text: {
            en: '🎓 The Struggling Student: You are precepting a student nurse who is kind but keeps making technical errors—wrong dose calculations, breakages in sterile fields. Today is her final evaluation.',
            th: '🎓 นักศึกษาจอมโก๊ะ: คุณเป็นพี่เลี้ยงให้นักศึกษาพยาบาลที่นิสัยดีมาก แต่ชอบพลาดเรื่องเทคนิค—คำนวณยาผิดบ้าง ทำเครื่องมือปลอดเชื้อปนเปื้อนบ้าง วันนี้คือวันประเมินวันสุดท้ายของเธอแล้ว',
            zh: '🎓 困难学生：你正在指导一名带教学生，她人很好，但总是在技术上出错——算错剂量、破坏无菌场。今天是她的最终考核。'
        },
        options: [
            { id: 'A', text: { en: '📉 Pass her with Warnings: "She has the heart for it. She\'ll learn the skills with more experience. I don\'t want to crush her dreams."', th: '📉 ให้ผ่านแบบคาดโทษ: "เขามีใจรักพยาบาล ทักษะพวกนี้เดี๋ยวทำบ่อยๆ ก็เก่งเอง ฉันไม่อยากทำลายความฝันเด็ก"', zh: '📉 警告过关："她有颗热诚的心。随着经验的增加，她会学好这些技能的。我不想摧毁她的梦想。"' }, consequence: { en: '⚠️ Gatekeeping Fail. Six months later, she is involved in a major med error at another hospital. You realized you passed someone who wasn\'t ready, and patients paid the price.', th: '⚠️ ความล้มเหลวในการคัดกรอง: หกเดือนต่อมา เธอไปทำพยาบาลผิดพลาดยิ่งใหญ่ที่รพ.อื่น คุณเพิ่งรู้ว่าคุณปล่อยคนที่ยังไม่พร้อมออกไป และคนไข้คือคนที่ต้องรับกรรม', zh: '⚠️ 关卡失守。六个月后，她在另一家医院卷入了一起严重的用药错误。你意识到你让一个没准备好的人通过了，而病人为此付出了代价。' }, stats: { competence: 20, ethics: 30, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Fail Her: "I like you, but for the safety of future patients, I cannot sign off on your competency today. You need more remediation."', th: '🛑 ให้ตก: "พี่ชอบเรานะ แต่เพื่อความปลอดภัยของคนไข้ในอนาคต พี่เซ็นให้ผ่านไม่ได้จริงๆ เราต้องไปเรียนเสริมและฝึกมากกว่านี้"', zh: '🛑 让她不及格："我很喜欢你，但为了以后病人的安全，我今天不能签字确认你的能力。你需要更多的补救培训。"' }, consequence: { en: '✅ Safety First. She cries, but returns next year as a much stronger, more careful nurse. She thanks you later for being the only one honest enough to tell her she wasn\'t ready.', th: '✅ ปลอดภัยไว้ก่อน: เธอร้องไห้หนักมาก แต่ปีหน้าเธอกลับมาใหม่ในฐานะพยาบาลที่แกร่งและรอบคอบขึ้นมาก เธอมาขอบคุณทีหลังที่เป็นคนเดียวที่ซื่อสัตย์พอจะบอกว่าเธอไม่พร้อม', zh: '✅ 安全第一。她哭了，但次年回来时成为了一名更优秀、更细心的护士。她后来感谢你，因为你是唯一一个诚实地告诉她她还没准备好的人。' }, stats: { competence: 60, ethics: 80, leadership: 90, innovation: 20 } }
        ]
    },

    {
        id: 'nu_037',
        text: {
            en: '💰 The Budget Cut: The hospital is cutting costs. They want to switch to a cheaper brand of urinary catheters that have a slightly higher risk of causing infections (UTIs). Management says "The data shows the risk increase is negligible."',
            th: '💰 ตัดงบประมาณ: รพ.กำลังพยายามลดต้นทุน เขาจะเปลี่ยนไปใช้สายสวนปัสสาวะยี่ห้อที่ถูกลง ซึ่งมีความเสี่ยงทำให้ติดเชื้อในทางเดินปัสสาวะ (UTI) สูงขึ้นนิดหน่อย ผู้บริหารบอกว่า "ข้อมูลชี้ว่าความเสี่ยงที่เพิ่มขึ้นน่ะจิ๊บๆ"',
            zh: '💰 预算削减：医院正在削减成本。他们想换成一种更便宜的导尿管品牌，这种导尿管引起感染（尿路感染）的风险略高。管理层说："数据显示风险的增加是微不足道的。"'
        },
        options: [
            { id: 'A', text: { en: '📊 Demand Better Data: "Negligible based on what? I want to see the infection rate projections before we switch."', th: '📊 ขอดูข้อมูล: "จิ๊บๆ นี่คือเทียบกับอะไร? ฉันขอเห็นตัวเลขทำนายอัตราการติดเชื้อก่อนที่จะเปลี่ยนนะคะ"', zh: '🔍 要求更好的数据："微不足道是基于什么？我想在更换之前看到感染率的预测。"' }, consequence: { en: '✅ Evidence-Based Practice. You lead a committee that proves the "cheap" catheters would actually cost the hospital triple in treating infections. Management backs down. You saved the hospital money and patients pain.', th: '✅ การปฏิบัติบนฐานหลักฐาน: คุณนำทีมพิสูจน์ได้ว่าสายสวน "ราคาถูก" จะทำให้รพ.เสียเงินเพิ่มขึ้น 3 เท่าจากค่ารักษากรณีติดเชื้อ ผู้บริหารยอมถอย คุณช่วยทั้งเงินรพ.และช่วยคนไข้ไม่ต้องเจ็บตัว', zh: '✅ 基于证据的实践。你领导一个委员会证明了"便宜"的导尿管实际上会因为治疗感染而让医院付出三倍的代价。管理层退缩了。你为医院节省了开支，也减少了病人的痛苦。' }, stats: { competence: 60, ethics: 60, leadership: 80, innovation: 70 } },
            { id: 'B', text: { en: '🤷 Accept the Change: "It\'s not my money. I\'ll just be extra careful with sterile technique."', th: '🤷 ยอมรับการเปลี่ยนแปลง: "เงินไม่ใช่ของฉัน เดี๋ยวฉันจะระวังเรื่องความสะอาดให้มากขึ้นตอนสวนแล้วกัน"', zh: '🤷 接受改变："那又不是我的钱。我只要在无菌技术上格外小心就行了。"' }, consequence: { en: '❌ Infection Spike. Despite your care, infections on the unit rise by 15%. Patients stay longer and suffer. You feel guilty every time you open a package of the "cheap stuff."', th: '❌ ติดเชื้อพุ่งสูง: แม้คุณจะระวัง แต่อัตราติดเชื้อในวอร์ดพุ่งขึ้น 15% คนไข้อยู่โรงพยาบาลนานขึ้นและทรมาน คุณรู้สึกผิดทุกครั้งที่ต้องแกะห่อของ "เกรดต่ำ" พวกนี้มาใช้', zh: '❌ 感染飙升。尽管你很用心，但病房的感染率上升了15%。病人住院时间延长且备受煎熬。每次你打开"便宜货"的包装时，都会感到愧疚。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } }
        ]
    },

    {
        id: 'nu_038',
        text: {
            en: '🏅 The Promotion Rivalry: You and your close friend David are both up for the same Clinical Educator role. David is a better teacher, but you have more experience. Management asks you for your opinion on David\'s candidacy.',
            th: '🏅 อริร่วมศึก: คุณกับเดวิดเพื่อนสนิท กำลังแข่งกันชิงตำแหน่งเทรนเนอร์ (Clinical Educator) เดวิดสอนเก่งกว่าแต่คุณประสบการณ์มากกว่า ผู้บริหารมาถามความเห็นคุณว่าเดวิดเหมาะกับงานนี้ไหม',
            zh: '🏅 晋升竞争：你和你亲密的朋友David都在竞争同一个临床教育员的职位。David是更好的老师，但你更有经验。管理层询问你对David候选人资格的看法。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Support David: "David is a natural educator. His teaching style is what the new nurses need right now. He\'s the better fit."', th: '🤝 สนับสนุนเดวิด: "เดวิดเกิดมาเพื่อเป็นครูจริงๆ วิธีสอนของเขาคือสิ่งที่พยาบาลใหม่ต้องการในตอนนี้ เขาเหมาะกับงานนี้ที่สุดค่ะ"', zh: '🤝 支持David："David天生就是个教育家。他的教学风格正是新护士现在所需要的。他更合适。"' }, consequence: { en: '✅ High Leadership. David gets the job and revolutionizes training. You stay on the floor but David creates a "special project" for you. Your integrity builds a powerful alliance.', th: '✅ ความเป็นผู้นำสูงส่ง: เดวิดได้งานและปฏิวัติวงการเทรนนิ่ง คุณทำงานข้างเตียงต่อแต่เดวิดชวนคุณทำ "โปรเจกต์พิเศษ" ความมีน้ำใจของคุณสร้างพันธมิตรที่แข็งแกร่ง', zh: '✅ 高领导力。David得到了这份工作并革新了培训。你留在临床，但David为你创建了一个"特殊项目"。你的诚信建立了一个强大的联盟。' }, stats: { competence: 50, ethics: 90, leadership: 90, innovation: 50 } },
            { id: 'B', text: { en: '🏆 Advocate for Yourself: "David is great, but I have the clinical depth needed for such a senior role. I am the more stable choice."', th: '🏆 เชียร์ตัวเอง: "เดวิดก็นะดีคะ แต่ฉันมีความเก๋าในเกมคลินิกมากกว่าสำหรับตำแหน่งที่ต้องรับผิดชอบสูงแบบนี้ ฉันคือตัวเลือกที่มั่นใจได้มากกว่า"', zh: '🏆 为自己辩护："David很好，但我具备这种高级职位所需的临床深度。我是更稳妥的选择。"' }, consequence: { en: '📉 Career Win, Personal Loss. You get the job. David is hurt and distances himself. You realize you are a decent educator, but you struggle with the teaching aspects. Your ego won, but your team lost.', th: '📉 งานชนะแต่ใจแพ้: คุณได้งาน เดวิดเสียใจและเหินห่างไป คุณพบว่าตัวเองก็เป็นครูที่โอเคนะแต่ก็ตะกุกตะกักเรื่องการสอน อีโก้คุณชนะ แต่ทีมไม่ได้สิ่งที่ดีที่สุด', zh: '📉 职业获胜，个人失落。你得到了这份工作。David受到了伤害并渐渐疏远。你意识到你是个还不错的教育员，但在教学方面很吃力。你的自尊赢了，但你的团队输了。' }, stats: { competence: 60, ethics: 30, leadership: 40, innovation: 10 } }
        ]
    },

    {
        id: 'nu_039',
        text: {
            en: '🕊️ The DNR Confusion: A terminal patient starts gasping for air. The family is screaming "Do something!" The chart says "DNR" (Do Not Resuscitate), but the wife says "I changed my mind! Save him!"',
            th: '🕊️ ความสับสนของ DNR: คนไข้ระยะสุดท้ายเริ่มหอบแรงจนเหมือนจะหยุดหายใจ ญาติกรีดร้อง "ทำอะไรสักอย่างสิ!" ในชาร์ตระบุว่า "DNR" (ห้ามปั๊มหัวใจ) แต่ภรรยาตะโกนว่า "ฉันเปลี่ยนใจแล้ว! ปั๊มเขาขึ้นมาที!"',
            zh: '🕊️ DNR 混乱：一名终末期病人开始喘息。家属尖叫道"快做点什么！"病历上写着"DNR"（不作心脏复苏），但妻子说"我改主意了！救救他！"'
        },
        options: [
            { id: 'A', text: { en: '🛑 Honor the DNR: "Ma\'am, I know this is hard, but he chose this. Let\'s hold his hand and make him comfortable instead."', th: '🛑 ทำตาม DNR: "คุณนายคะ ฉันรู้ว่ามันทำใจยาก แต่เขาเป็นคนเลือกสิ่งนี้เอง ให้เรากุมมือเขาไว้และช่วยให้เขาจากไปอย่างสบายที่สุดเถอะนะคะ"', zh: '🛑 尊重 DNR："夫人，我知道这很难，但这是他自己的选择。让我们握住他的手，让他舒服一点。"' }, consequence: { en: '✅ Ethics Titan. You provide comfort care while his heart stops. The wife is angry initially but thanks you a week later for following her husband\'s wishes. You protected his dignity.', th: '✅ ยอดมนุษย์จริยธรรม: คุณให้การพยาบาลแบบประคับประคองขณะที่หัวใจเขาหยุดเต้น ภรรยาโกรธคุณในตอนแรกแต่กลับมาขอบคุณหลังจากนั้นหนึ่งสัปดาห์ที่ทำตามเจตจำนงของสามี คุณปกป้องศักดิ์ศรีของเขาไว้ได้', zh: '✅ 伦理泰斗。在他的心脏停止跳动时，你提供了舒缓护理。妻子最初很生气，但一周后感谢你遵循了她丈夫的意愿。你维护了他的尊严。' }, stats: { competence: 50, ethics: 100, leadership: 60, innovation: 0 } },
            { id: 'B', text: { en: '🚨 Start CPR: "The family is the legal surrogate now. Start chest compressions!"', th: '🚨 เริ่มทำ CPR: "ตอนนี้ญาติคือผู้ตัดสินใจแทนตามกฎหมาย เริ่มกดหน้าอก!"', zh: '🚨 开始 CPR："家属现在是法定代理人。开始胸外按压！"' }, consequence: { en: '💀 Moral and Legal Mess. You break his ribs and intubate him. He lives on a ventilator for 2 days in agony before dying anyway. The son sues you for battery and violating the advance directive.', th: '💀 ความฉิบหายทางจริยธรรมและกฎหมาย: คุณทำให้ซี่โครงเขาหักและใส่ท่อช่วยหายใจ เขานอนทรมานกับเครื่องช่วยหายใจไปอีก 2 วันก่อนจะตายอยู่ดี ลูกชายเขาฟ้องคุณข้อหาทำร้ายร่างกายและละเมิดเจตจำนงของคนไข้', zh: '💀 道德和法律上的混乱。你弄断了他的肋骨并为他插了管。他在呼吸机上痛苦地度过了2天还是死了。儿子起诉你身体伤害并违反了预设医疗指示。' }, stats: { competence: 30, ethics: -100, leadership: -40, innovation: 0 } }
        ]
    },

    {
        id: 'nu_040',
        text: {
            en: '🧠 The Burnout Wall: It\'s your 6th shift in a row. You are crying in the bathroom. You just realized you don\'t care if the patient in 402 is pain-free or not. You are losing your empathy.',
            th: '🧠 กำแพงนกกระจอกเทศ (หมดไฟ): คุณทำงานติดต่อกันมา 6 เวรแล้ว คุณกำลังร้องไห้ในห้องน้ำ คุณเพิ่งตระหนักว่าตัวเองไม่สนแล้วว่าคนไข้ห้อง 402 จะปวดไหม คุณกำลังสูญเสียความเห็นอกเห็นใจไป',
            zh: '🧠 职业倦怠期：这是你连续第6个班。你在厕所里哭。你刚意识到你并不关心402房的病人是否摆脱了痛苦。你正在失去共情能力。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Take Mental Health Leave: "I am a danger to my patients right now. I need to call out and seek help."', th: '🛑 ลาพักใจ: "ตอนนี้ฉันเป็นอันตรายต่อคนไข้ ฉันต้องลาหยุดและหาคนไปช่วยดึงสติกลับมา"', zh: '🛑 休心理健康假："我现在对我的病人来说是个危险。我需要请假并寻求帮助。"' }, consequence: { en: '✅ Self-Preservation. You take a week off. Management is annoyed, but you return with your heart restored. You saved your career by knowing when to stop.', th: '✅ การรักษาสมดุล: คุณลาหยุดหนึ่งสัปดาห์ ผู้บริหารอาจรำคาญบ้าง แต่คุณกลับมาด้วยหัวใจที่ฟื้นฟูแล้ว คุณกู้อาชีพการงานไว้ได้เพราะรู้ว่าเมื่อไหร่ควรหยุด', zh: '✅ 自我保护。你休了一周假。管理层很不爽，但你回来时心境得到了恢复。因为知道何时停止，你挽救了自己的职业生涯。' }, stats: { competence: 40, ethics: 70, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '💉 Push Through: "Nursing is sacrifice. I\'ll drink another coffee and go back out there. I\'ll fake it."', th: '💉 ทนถึกต่อไป: "การพยาบาลคือการเสียสละ เดี๋ยวซดกาแฟอีกแก้วแล้วลุยต่อ แกล้งทำให้มันจบๆ ไป"', zh: '💉 挺过去："护理就是牺牲。我再喝杯咖啡就出去。我会装出来的。"' }, consequence: { en: '💀 The Robot Nurse. You become cold and mechanical. You stop listening to patients. You make a major mistake due to exhaustion. You don\'t even feel bad about it. You are a shell of a nurse.', th: '💀 พยาบาลหุ่นยนต์: คุณกลายเป็นคนเย็นชาและทำงานเหมือนเครื่องจักร คุณเลิกฟังคนไข้ และทำพลาดมหันต์เพราะความล้า แถมคุณยังไม่รู้สึกเสียใจด้วยซ้ำ คุณเหลือเพียงเปลือกของความเป็นพยาบาล', zh: '💀 机器人护士。你变得冷酷而机械。你不再倾听病人的声音。由于疲惫你犯了一个重大错误。你甚至对此没有负罪感。你成了护士的一具空壳。' }, stats: { competence: 20, ethics: -20, leadership: -50, innovation: -40 } }
        ]
    },

    {
        id: 'nu_041',
        text: {
            en: '⚖️ The Policy Punch: You are invited to testify at the state capitol about a new bill that would mandate safe nurse-to-patient staffing ratios. The hospital lobby is strongly against it and subtly hints that testifying might "hurt your career advancement."',
            th: '⚖️ หมัดนโยบาย: คุณได้รับการเรียนเชิญไปให้การที่รัฐสภาเกี่ยวกับร่างกฎหมายใหม่ที่จะบังคับใช้ "อัตราส่วนพยาบาลต่อคนไข้ที่ปลอดภัย" กลุ่มล็อบบี้ของโรงพยาบาลต่อต้านเรื่องนี้อย่างหนัก และแอบส่งสัญญาณเตือนคุณว่าการไปให้การอาจจะ "ขัดขวางความก้าวหน้าในอาชีพ" ของคุณได้',
            zh: '⚖️ 政策重击：你被邀请到州议会就一项旨在强制执行安全护患比例的新法案作证。医院游说团体强烈反对该法案，并微妙地暗示作证可能会"损害你的职业晋升"。'
        },
        options: [
            { id: 'A', text: { en: '📢 Speak Truth to Power: "I will testify. The public needs to know the reality of the bedside. I\'ll take the risk."', th: '📢 พูดความจริงกับผู้มีอำนาจ: "ฉันจะไปให้การ ประชาชนต้องได้รู้ความจริงที่เกิดขึ้นข้างเตียงคนไข้ ฉันยอมรับความเสี่ยงนี้ได้"', zh: '📢 向权力说真话："我会去作证。公众需要了解临床的真实情况。我愿意承担风险。"' }, consequence: { en: '✅ Professional Hero. Your testimony goes viral. The bill passes. You are targeted by your own hospital management, but you are recruited by a national nursing organization to lead their advocacy department. You are now a policy-maker.', th: '✅ ฮีโร่ของวิชาชีพ: คำให้การของคุณกลายเป็นไวรัล ร่างกฎหมายผ่านการอนุมัติ! แม้คุณจะถูกผู้บริหารรพ.หมายหัว แต่คุณกลับได้รับการทาบทามจากองค์กรพยาบาลระดับชาติให้ไปเป็นหัวหน้าแผนกผลักดันนโยบาย ตอนนี้คุณคือผู้กำหนดชะตาวิจาชีพแล้ว', zh: '✅ 专业英雄。你的证词引发了轰动。法案通过了。你虽然被自己医院的管理层针对，但被一家全国性的护理组织聘请去领导他们的倡导部门。你现在是一名政策制定者了。' }, stats: { competence: 50, ethics: 90, leadership: 100, innovation: 60 } },
            { id: 'B', text: { en: '🤐 Decline for Safety: "I have a family to feed. I\'ll support the union from the background instead."', th: '🤐 ปฏิเสธเพื่อความมั่นคง: "ฉันยังมีครอบครัวต้องดูแล เดี๋ยวฉันจะช่วยสนับสนุนสหภาพอยู่เบื้องหลังแทนแล้วกัน"', zh: '🤐 为了安全而拒绝："我有家要养。我会转而在幕后支持工会。"' }, consequence: { en: '⚠️ Silent Support. You keep your job and your path to supervisor remains clear. The bill fails by one vote. You wonder for years if your voice could have been the one that changed everything.', th: '⚠️ ผู้สนับสนุนที่เงียบงัน: คุณรักษาหน้าที่การงานและเส้นทางสู่การเป็นซุปเปอร์ไวเซอร์ไว้ได้ แต่ร่างกฎหมายแพ้ไปเพียงแค่คะแนนเดียว คุณต้องสงสัยไปอีกหลายปีว่าถ้าคุณยอมพูดในวันนั้น ผลลัพธ์จะเปลี่ยนไปไหม', zh: '⚠️ 沉默的支持。你保留了工作，通往主管的道路依然畅通。法案以一票之差未能通过。多年来你一直在想，如果当时你发声了，是否就能改变一切。' }, stats: { competence: 40, ethics: 40, leadership: 20, innovation: 0 } }
        ]
    },

    {
        id: 'nu_042',
        text: {
            en: '🌍 The Global Call: A clinical humanitarian organization needs experienced nurses to help with a cholera outbreak in a developing nation. It\'s dangerous work with minimal resources, but the need is desperate.',
            th: '🌍 เสียงเรียกจากโลกกว้าง: องค์กรช่วยเหลือด้านมนุษยธรรมต้องการพยาบาลที่มีประสบการณ์ไปช่วยรับมือกับการระบาดของอหิวาตกโรคในประเทศกำลังพัฒนา งานนี้อันตรายและทรัพยากรมีจำกัดมาก แต่ผู้คนกำลังโหยหาความช่วยเหลืออย่างที่สุด',
            zh: '🌍 全球呼唤：一个临床人道主义组织需要有经验的护士帮助应对一个发展中国家的霍乱爆发。那是项资源匮乏的危险工作，但那里极度需要帮助。'
        },
        options: [
            { id: 'A', text: { en: '✈️ Go on Mission: "This is why I became a nurse. To help the most vulnerable."', th: '✈️ ออกเดินทาง: "นี่คือเหตุผลที่ฉันมาเป็นพยาบาล เพื่อช่วยเหลือคนที่เปราะบางที่สุด"', zh: '✈️ 参加任务："这就是我成为护士的原因。为了帮助最弱势的人。"' }, consequence: { en: '✅ Global Impact. You work 20-hour days in the heat. You save hundreds of lives with simple rehydration salt protocols. You return with a perspective that makes hospital politics seem trivial. You are a different person.', th: '✅ ผลกระทบระดับโลก: คุณทำงานวันละ 20 ชั่วโมงท่ามกลางอากาศร้อนระอุ คุณช่วยคนได้เป็นร้อยด้วยแค่ผงเกลือแร่และการจัดการที่ถูกต้อง คุณกลับมาด้วยมุมมองที่มองว่าการเมืองในรพ.เป็นเรื่องขี้ปะติ๋วไปเลย คุณกลายเป็นคนละคน', zh: '✅ 全球影响。你在酷热中每天工作20小时。你用简单的补液盐方案挽救了数百人的生命。你带着一种让医院政治显得琐碎的视角回来。你脱胎换骨了。' }, stats: { competence: 90, ethics: 80, leadership: 70, innovation: 60 } },
            { id: 'B', text: { en: '🏠 Stay Home: "I contribute enough in my local community. It\'s too risky."', th: '🏠 อยู่บ้าน: "ฉันช่วยชุมชนแถวบ้านก็พอแล้ว งานนั้นมันเสี่ยงเกินไป"', zh: '🏠 留在家里："我在本地社区已经贡献够多了。那太冒险了。"' }, consequence: { en: '🛡️ Local Stability. You stay safe and continue to provide great care to your assigned patients. You have a stable, predictable life, but you sometimes feel a pang of guilt watching the news.', th: '🛡️ ความมั่นคงในพื้นที่: คุณปลอดภัยและดูแลคนไข้ที่ได้รับมอบหมายอย่างดีต่อไป คุณมีชีวิตที่มั่นคงและคาดเดาได้ แต่บางครั้งคุณจะรู้สึกเจ็บจี๊ดๆ ในใจเวลาดูข่าวต่างประเทศ', zh: '🛡️ 地方稳定。你保持安全，并继续为你负责的病人提供卓越的护理。你过着稳定、可预测的生活，但有时看新闻时会感到一阵愧疚。' }, stats: { competence: 60, ethics: 50, leadership: 30, innovation: 0 } }
        ]
    },

    {
        id: 'nu_043',
        text: {
            en: '🎓 The Professor Path: A local university offers you a full-time teaching position. You would be training the next generation of nurses, but you would lose your clinical "touch" as you spend all day in a classroom.',
            th: '🎓 เส้นทางแม่พิมพ์: มหาวิทยาลัยแถวบ้านเสนอตำแหน่งอาจารย์พยาบาลให้คุณ คุณจะได้ปั้นพยาบาลรุ่นใหม่ขึ้นมา แต่คุณจะเริ่มเสีย "สัมผัสคลินิก" ไปเพราะต้องคลุกตัวอยู่ในห้องเรียนทั้งวัน',
            zh: '🎓 教授之路：当地的一所大学为你提供了一个全职教学职位。你将培训下一代护士，但由于整天待在教室里，你将失去临床"手感"。'
        },
        options: [
            { id: 'A', text: { en: '👩‍🏫 Become an Educator: "I can impact more patients by training 100 great nurses than by treating 10 patients a day myself."', th: '👩‍🏫 เป็นอาจารย์: "ฉันสร้างผลกระทบต่อคนไข้ได้มากกว่าด้วยการปั้นพยาบาลเก่งๆ 100 คน ดีกว่ามานั่งรักษาคนไข้วันละ 10 คนด้วยตัวคนเดียว"', zh: '👩‍🏫 成为一名教育家："通过培训100名优秀的护士，我比每天亲自治疗10名病人能对更多病人产生影响。"' }, consequence: { en: '✅ Legacy Builder. Years later, you walk through the hospital and see your students in every unit, providing excellent care because of your lessons. Your impact is exponential.', th: '✅ ผู้สร้างตำนาน: หลายปีต่อมา คุณเดินผ่านรพ.แล้วเห็นลูกศิษย์คุณอยู่ในทุกวอร์ด พวกเขาดูแลคนไข้อย่างดีเยี่ยมเพราะคำสอนของคุณ ผลงานของคุณงอกเงยเป็นทวีคูณ', zh: '✅ 传承缔造者。多年后，你走在医院里，看到每个科室都有你的学生，他们因为你的教导而提供卓越的护理。你的影响力是呈指数级的。' }, stats: { competence: 60, ethics: 50, leadership: 90, innovation: 40 } },
            { id: 'B', text: { en: '🩺 Stay Clinical: "I\'m a doer, not a talker. I need the adrenaline of the ward."', th: '🩺 อยู่สายปฏิบัติ: "ฉันคือนักทำ ไม่ใช่นักพูด ฉันยังต้องการอะดรีนาลีนจากในวอร์ดอยู่"', zh: '🩺 留在临床："我是个实干家，不是个说客。我需要病房里的肾上腺素。"' }, consequence: { en: '🔥 Master Clinician. You reach the peak of clinical expertise. You are the one everyone calls when a case is impossible. You are a legend in the trenches, but your knees are starting to hurt.', th: '🔥 ปรมาจารย์พยาบาล: คุณมาถึงจุดสูงสุดของความเชี่ยวชาญด้านคลินิก คุณคือคนที่ทุกคนต้องเรียกเวลาเจอเคสที่เป็นไปไม่ได้ คุณคือตำนานในสนามรบ แต่เข่าคุณเริ่มจะประท้วงความล้าแล้วล่ะ', zh: '🔥 大师级临床医生。你达到了临床专业知识的顶峰。当有棘手病例时，你是每个人都会找的人。你是战斗在一线的传奇，但你的膝盖开始疼了。' }, stats: { competence: 100, ethics: 50, leadership: 40, innovation: 20 } }
        ]
    },

    {
        id: 'nu_044',
        text: {
            en: '💡 The Patent Hack: You\'ve invented a new type of IV dressing that prevents tape-related skin tears in elderly patients. A company wants to buy the patent for a small fee, or you can try to launch a startup yourself.',
            th: '💡 แฮกความรู้เป็นสิทธิบัตร: คุณคิดค้นพลาสเตอร์ปิดสายน้ำเกลือแบบใหม่ที่ช่วยป้องกันผิวลอกในคนแก่ได้ บริษัทยารายใหญ่ขอซื้อสิทธิบัตรด้วยเงินก้อนเล็กๆ หรือคุณจะลองปั้นสตาร์ทอัพเองดู?',
            zh: '💡 专利窍门：你发明了一种新型的静脉输液敷料，可以防止老年病人因胶带引起的皮肤撕裂。一家公司想以少量的费用购买该专利，或者你可以尝试自己创办一家初创公司。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Launch Startup: "I know the market, and I know the problem. I\'ll bet on myself."', th: '🚀 ปั้นสตาร์ทอัพ: "ฉันรู้จักตลาดและรู้ซึ้งถึงปัญหา ฉันขอวางเดิมพันกับตัวเองเถอะ"', zh: '🚀 创办初创公司："我了解市场，也了解问题所在。我会在自己身上下注。"' }, consequence: { en: '✅ Nursing Entrepreneur. It\'s stressful, but your product becomes a global standard. You are now a wealthy CEO, proving that nurses are the best innovators in healthcare.', th: '✅ พยาบาลนักธุรกิจ: มันเครียดนะ แต่ผลิตภัณฑ์ของคุณกลายเป็นมาตรฐานระดับโลก ตอนนี้คุณคือ CEO ผู้มั่งคั่ง พิสูจน์ให้เห็นว่าพยาบาลคือนักนวัตกรรมที่เก่งที่สุดในวงการสาธารณสุข', zh: '✅ 护理企业家。虽然压力很大，但你的产品成为了全球标准。你现在是一位富有的CEO，证明了护士是医疗保健领域最好的创新者。' }, stats: { competence: 50, ethics: 30, leadership: 80, innovation: 100 } },
            { id: 'B', text: { en: '🤝 Sell Patent: "I don\'t want the stress of a business. Just get this product to patients quickly."', th: '🤝 ขายสิทธิบัตร: "ฉันไม่อยากปวดหัวกับเรื่องธุรกิจ แค่เอาของชิ้นนี้ไปถึงมือคนไข้ให้เร็วที่สุดก็พอ"', zh: '🤝 出售专利："我不想承担做生意的压力。只要能让这个产品尽快用到病人身上就行。"' }, consequence: { en: '✅ Pure Innovation. The company buys it, markets it well, and skin tears drop worldwide. You didn\'t get rich, but you changed healthcare for millions. You sleep well.', th: '✅ นวัตกรรมบริสุทธิ์: บริษัทซื้อไปและทำการตลาดได้ดีมาก อัตราผิวลอกลดลงทั่วโลก คุณไม่ได้รวยล้นฟ้า แต่คุณได้เปลี่ยนวิชารักษาสุขภาพเพื่อผู้คนนับล้าน คุณนอนหลับสนิทใจ', zh: '✅ 纯粹的创新。公司购买了它，销售得很好，全球范围内的皮肤撕裂现象减少了。你没变富，但你改变了数百万人的医疗保健。你会睡得很香。' }, stats: { competence: 50, ethics: 60, leadership: 30, innovation: 80 } }
        ]
    },

    {
        id: 'nu_045',
        text: {
            en: '⚖️ The Expert Witness: A lawyer asks you to testify in a malpractice case against a prestigious hospital (not your own). The evidence shows clear nursing negligence. Your colleagues say "Nurses shouldn\'t testify against nurses."',
            th: '⚖️ พยานผู้เชี่ยวชาญ: ทนายขอให้คุณไปให้การเป็นพยานในคดีฟ้องร้องโรงพยาบาลชื่อดัง (ไม่ใช่ที่ที่คุณทำงาน) หลักฐานชี้ชัดว่าพยาบาลที่นั่นละเลยต่อหน้าที่ เพื่อนร่วมงานคุณบอกว่า "พยาบาลไม่ควรไปให้การเล่นงานพยาบาลด้วยกันนะ"',
            zh: '⚖️ 专家证人：一名律师请你在一起针对一家名牌医院（不是你自己的医院）的医疗纠纷案中作证。证据显示存在明显的护理过失。你的同事说"护士不应该出庭指证护士"。'
        },
        options: [
            { id: 'A', text: { en: '🏛️ Testify for the Patient: "The truth is the truth. If we don\'t hold ourselves accountable, we lose our profession\'s integrity."', th: '🏛️ ให้การเพื่อคนไข้: "ความจริงก็คือความจริง ถ้าเราไม่ยืดหยัดในความถูกต้อง เราจะเสียศักดิ์ศรีของวิชาชีพไป"', zh: '🏛️ 为病人作证："事实就是事实。如果我们不问责自己，我们就会失去行业的诚信。"' }, consequence: { en: '🛡️ Integrity Champion. The patient gets a fair settlement. You gain a reputation as a fierce advocate for standards. You might be unpopular with some, but you are respected by the judicial system.', th: '🛡️ แชมเปี้ยนแห่งความสัตย์จริง: คนไข้ได้รับการเยียวยาที่เป็นธรรม คุณได้ชื่อว่าเป็นผู้พิทักษ์มาตรฐานวิชาชีพอย่างดุดัน แม้เพื่อนบางคนอาจจะไม่ปลื้ม แต่คุณได้รับความเคารพอย่างสูงจากระบบยุติธรรม', zh: '🛡️ Integrity 冠军。病人得到了公平的赔偿。你赢得了标准坚定倡导者的名声。你可能不受某些人欢迎，但你受到了司法系统的尊重。' }, stats: { competence: 60, ethics: 100, leadership: 60, innovation: 0 } },
            { id: 'B', text: { en: '🤐 Refuse: "I won\'t be the one to bring down another nurse. The system is hard enough already."', th: '🤐 ปฏิเสธ: "ฉันจะไม่เป็นคนเหยียบซ้ำพยาบาลด้วยกัน แค่นี้ระบบมันก็อยู่ยากพอแล้ว"', zh: '🤐 拒绝："我不会成为那个击垮另一名护士的人。这个系统已经够艰难了。"' }, consequence: { en: '⚠️ Professional Silence. The case is dismissed. The negligent nurse continues to work and eventually makes the same mistake again. You protected a peer but failed a patient.', th: '⚠️ ความเงียบทางวิชาชีพ: คดีถูกยกฟ้อง พยาบาลที่ละเลยหน้าที่คนนั้นยังทำงานต่อและสุดท้ายก็ทำพลาดซ้ำเดิมอีก คุณปกป้องเพื่อนร่วมอาชีพได้ แต่คุณล้มเหลวต่อคนไข้', zh: '⚠️ 专业沉默。案件被驳回。那名过失护士继续工作，并最终再次犯了同样的错误。你保护了同行，但辜负了病人。' }, stats: { competence: 40, ethics: 20, leadership: -20, innovation: 0 } }
        ]
    },

    {
        id: 'nu_046',
        text: {
            en: '💻 The Digital Frontier: The hospital wants you to move to a 100% telehealth role, monitoring patients via remote sensors and AI. It\'s safer and more flexible, but you\'ll never touch a patient again.',
            th: '💻 พรมแดนดิจิทัล: รพ.อยากให้คุณย้ายไปทำงาน Telehealth 100% คอยมอนิเตอร์คนไข้ผ่านเซนเซอร์และ AI มันปลอดภัยและยืดหยุ่นกว่ามาก แต่คุณจะไม่ได้สัมผัสตัวคนไข้จริงๆ อีกเลยนะ',
            zh: '💻 数字前沿：医院希望你转入100%的远程医疗职位，通过远程传感器和AI监测病人。这更安全、更灵活，但你将再也无法接触病人。'
        },
        options: [
            { id: 'A', text: { en: '🌐 Embrace Tele-nursing: "This is the future. I can monitor 50 patients at once and catch problems before they even reach the hospital."', th: '🌐 เข้าสู่โลก Tele-nursing: "นี่แหละอนาคต ฉันสามารถดูคนไข้ได้ทีละ 50 คนและดักจับปัญหาได้ตั้งแต่พวกเขายังไม่ถึงรพ.ด้วยซ้ำ"', zh: '🌐 拥抱远程护理："这就是未来。我可以同时监测50名病人，并在他们到医院之前就发现问题。"' }, consequence: { en: '✅ Tech Pioneer. You become an expert in remote algorithms. You save lives by the thousands by preventing hospital admissions. You define the standards for this new field.', th: '✅ ผู้บุกเบิกเทคโนโลยี: คุณกลายเป็นผู้เชี่ยวชาญด้านอัลกอริทึมทางไกล คุณช่วยชีวิตคนได้เป็นพันด้วยการป้องกันไม่ให้พวกเขาต้องเข้าไอซียู คุณคือผู้กำหนดมาตรฐานให้วิชาชีพแขนงใหม่นี้', zh: '✅ 技术先锋。你成为了远程算法方面的专家。通过防止入院，你挽救了成千上万人的生命。你为这个新领域定义了标准。' }, stats: { competence: 60, ethics: 40, leadership: 60, innovation: 100 } },
            { id: 'B', text: { en: '🤝 Need the Human Touch: "Nursing is a physical act of presence. I need to be in the room."', th: '🤝 ต้องการสัมผัสของมนุษย์: "การพยาบาลคือการมีตัวตนอยู่จริงๆ ฉันต้องอยู่ในห้องกับคนไข้"', zh: '🤝 需要人文关怀："护理是一种身体在场的行为。我需要待在病房里。"' }, consequence: { en: '❤️ Clinical Soul. You stay at the bedside. You are the nurse patients hold hands with during their hardest moments. You are less productive by "tech standards," but you provide the soul of healthcare.', th: '❤️ จิตวิญญาณแห่งคลินิก: คุณทำงานข้างเตียงต่อ คุณคือพยาบาลที่คนไข้กุมมือไว้ในยามที่ยากลำบากที่สุด คุณอาจจะดูไม่ "Productive" ในสายตาเทคโนโลยี แต่คุณคือจิตวิญญาณของการรักษาพยาบาล', zh: '❤️ 临床之魂。你留在临床。你是病人在最艰难时刻握住手的护士。按"技术标准"衡量，你的产出较低，但你提供了医疗保健的灵魂。' }, stats: { competence: 80, ethics: 60, leadership: 40, innovation: 10 } }
        ]
    },

    {
        id: 'nu_047',
        text: {
            en: '🏙️ The Community Reform: You are offered a role as Director of Public Health for your city. You will have to fight for funding for clean water, vaccination clinics, and addiction services in poor neighborhoods.',
            th: '🏙️ ปฏิรูปชุมชน: คุณได้รับข้อเสนอให้เป็นผู้อำนวยการสาธารณสุขของเมือง คุณต้องสู้เพื่อของบประมาณทำน้ำสะอาด คลินิกวัคซีน และศูนย์บำบัดยาเสพติดในย่านคนจน',
            zh: '🏙️ 社区改革：你被提供了一个担任城市公共卫生局局长的职位。你将不得不为贫困地区的清洁饮水、疫苗接种诊所和成瘾服务争取资金。'
        },
        options: [
            { id: 'A', text: { en: '📢 Take the Political Role: "Nursing is more than hospitals. It\'s about the environment people live in."', th: '📢 รับบทบาทนักการเมือง: "การพยาบาลมีอะไรมากกว่าแค่ในรพ. มันคือการดูแลสภาพแวดล้อมที่ผู้คนอยู่อาศัย"', zh: '📢 担任政治职务："护理不仅仅是医院里的事。它关系到人们的生活环境。"' }, consequence: { en: '✅ Macro Reformer. You close the life-expectancy gap between rich and poor zip codes in your city. You are no longer "just a nurse," you are a civic architect. You changed the map of health.', th: '✅ นักปฏิรูปมหาภาค: คุณช่วยลดช่องว่างอายุขัยระหว่างคนรวยและคนจนในเมืองได้สำเร็จ คุณไม่ใช่แค่ "พยาบาล" อีกต่อไป แต่คุณคือสถาปนิกของสังคม คุณคือผู้เปลี่ยนแผนที่สุขภาพ', zh: '✅ 宏观改革者。你缩小了所在城市贫富邮政编码之间的预期寿命差距。你不再仅仅是"一名护士"，你是一名公民建筑师。你改变了健康的版图。' }, stats: { competence: 40, ethics: 60, leadership: 100, innovation: 80 } },
            { id: 'B', text: { en: '🏥 Stay Clinical: "Politics is too dirty for me. I\'ll stick to what I know: clinical excellence."', th: '🏥 อยู่สายคลินิก: "การเมืองมันสกปรกเกินไปสำหรับฉัน ฉันขออยู่กับสิ่งที่ฉันถนัดดีกว่า อย่างความเก่งกาจทางคลินิกนี่ไง"', zh: '🏥 留在临床："政治对我来说太肮脏了。我会坚持我所熟悉的：临床卓越。"' }, consequence: { en: '🛡️ Respected Anchor. You remain the rock of your unit. You provide stability through generations of management changes. You are the "memory" of the hospital, keep standards high while others chase fads.', th: '🛡️ เสาหลักที่น่านับถือ: คุณยังคงเป็นหัวใจของวอร์ด คุณสร้างความมั่นคงท่ามกลางการเปลี่ยนผ่านของผู้บริหารหลายยุคหลายสมัย คุณคือ "ความจำ" ของรพ. ที่รักษามาตรฐานไว้สูงลิ่วในขณะที่คนอื่นวิ่งตามแฟชั่น', zh: '🛡️ 受人尊敬的锚。你依然是科室的中流砥柱。在几代管理层更迭中，你提供了稳定性。你是医院的"记忆"，在别人追求时尚时保持着高标准。' }, stats: { competence: 100, ethics: 50, leadership: 50, innovation: 10 } }
        ]
    },

    {
        id: 'nu_048',
        text: {
            en: '🤝 The Final Mentorship: A young, terrified nurse asks you: "Does it ever get easier? Does the pain of losing patients ever go away?" You remember your first day.',
            th: '🤝 บทเรียนสุดท้ายจากรุ่นพี่: พยาบาลจบใหม่ที่กำลังขวัญเสียถามคุณว่า "มันจะง่ายขึ้นไหมคะพี่? ความเจ็บปวดเวลาที่เสียคนไข้ไปมันจะเคยหายไปไหม?" คุณนึกย้อนกลับไปถึงวันแรกของตัวเอง',
            zh: '🤝 最后的指导：一名年轻、惊恐的护士问你："情况会变好吗？失去病人的痛苦会消失吗？"你回想起了你的第一天。'
        },
        options: [
            { id: 'A', text: { en: '❤️ Be Real: "It never gets easier, you just get stronger. And you never want the pain to go away entirely—it\'s what keeps you human."', th: '❤️ พูดความจริง: "มันไม่เคยง่ายขึ้นหรอกน้องเอย แค่เราจะแกร่งขึ้น และเราก็ไม่อยากให้ความเจ็บปวดนั้นหายไปทั้งหมดหรอก เพราะนั่นคือสิ่งที่ทำให้เรายังเป็นมนุษย์อยู่"', zh: '❤️ 真实一点："从来都不会变容易，你只会变得更坚强。而且你永远不希望痛苦完全消失——那是让你保持人性。"' }, consequence: { en: '✅ Torch Passed. She wipes her eyes and goes back in. You have just prevented burnout and given her the philosophy to survive a 30-year career. You are a true ancestor of the profession.', th: '✅ ส่งต่อคบเพลิง: เธอเช็ดน้ำตาแล้วกลับไปลุยงานต่อ คุณเพิ่งช่วยป้องกันไม่ให้เธอหมดไฟและมอบปรัชญาในการยืนหยัดในอาชีพไปอีก 30 ปี คุณคือบรรพบุรุษที่แท้จริงของวิชาชีพนี้', zh: '✅ 火炬传递。她擦干眼泪走了进去。你刚才防止了职业倦怠，并给了她一个在30年职业生涯中生存下去的哲学。你是这个行业真正的先驱。' }, stats: { competence: 50, ethics: 80, leadership: 100, innovation: 20 } },
            { id: 'B', text: { en: '🛡️ Professional Distance: "Don\'t take it home. It\'s just a job. Toughen up or you won\'t last a year."', th: '🛡️ สร้างระยะห่าง: "อย่าเอากลับไปบ้านสิ คิดซะว่าเป็นแค่งาน ทำตัวให้ถึกเข้าไว้ไม่งั้นอยู่ไม่ถึงปีหรอก"', zh: '🛡️ 专业距离："别带回家。这只是一份工作。坚强点，否则你撑不过一年。"' }, consequence: { en: '📉 Harsh Wisdom. She toughens up, but she becomes cold like you. You helped her survive, but you might have killed her empathy. The cycle of "nurses eating their young" continues.', th: '📉 บทเรียนที่โหดร้าย: เธอแกร่งขึ้นนะ แต่เธอก็กลายเป็นคนเย็นชาเหมือนคุณ คุณช่วยให้เธอรอดชีวิตในอาชีพได้ แต่อาจจะช่วยฆ่าความเห็นอกเห็นใจในตัวเธอไปด้วย วงจร "พยาบาลรุ่นพี่กินรุ่นน้อง" ยังคงดำเนินต่อไป', zh: '📉 严酷的智慧。她变坚强了，但她变得像你一样冷酷。你帮助她生存了下来，但你可能杀死了她的共感能力。"护士欺负新人"的循环还在继续。' }, stats: { competence: 40, ethics: 20, leadership: 20, innovation: 0 } }
        ]
    },

    {
        id: 'nu_049',
        text: {
            en: '🕯️ The Retirement Wall: Your last shift. A patient arrives with the exact same dehydration/IV problem you had in question 1 thirty years ago. Your hands are a bit shaky now. Your student is watching.',
            th: '🕯️ ผนังแห่งการเกษียณ: เวรสุดท้ายของคุณ คนไข้มาด้วยปัญหาขาดน้ำและเจาะเส้นเลือดเป๊ะๆ เหมือนเคสแรกเมื่อ 30 ปีก่อน มือคุณเริ่มสั่นนิดๆ แล้ว และเด็กฝึกงานก็กำลังจ้องมองคุณอยู่',
            zh: '🕯️ 退休之墙：你的最后一个班。一名病人的脱水/静脉注射问题与你三十年前在第一个问题中遇到的完全一样。你的手现在有点抖。你的学生正在看着。'
        },
        options: [
            { id: 'A', text: { en: '🎯 Do it one last time: "Watch closely. One smooth motion. Experience beats a shaky hand every time."', th: '🎯 ทำเป็นครั้งสุดท้าย: "ดูให้ดีนะ ครั้งเดียวต้องจบ ประสบการณ์จะชนะอาการมือสั่นเสมอ"', zh: '🎯 最后再做一次："看仔细了。动作要连贯。经验每次都能战胜颤抖的手。"' }, consequence: { en: '✅ Perfect Finish. You get the IV in one shot. It\'s the perfect ending to a legendary career. You walk out to a standing ovation in the hallway. You gave everything, and it was enough.', th: '✅ การปิดฉากที่สมบูรณ์แบบ: คุณเจาะครั้งเดียวผ่าน! เป็นตอนจบที่สวยงามที่สุดสำหรับอาชีพในตำนาน คุณเดินออกจากวอร์ดท่ามกลางเสียตบมือกึกก้องของเพื่อนร่วมงาน คุณทุ่มเททุกอย่างแล้ว และมันคุ้มค่าที่สุด', zh: '✅ 完美的结局。你一次就成功静脉穿刺。这是一个传奇职业生涯的完美终点。你在走廊里的起立鼓掌声中走了出去。你付出了一切，这就足够了。' }, stats: { competence: 100, ethics: 50, leadership: 70, innovation: 30 } },
            { id: 'B', text: { en: '🤝 Let the Student Try: "You do it. I\'ve done enough. I\'ll guide your hand."', th: '🤝 ให้นักเรียนลอง: "เธอทำเลย พี่ทำมาพอแล้ว เดี๋ยวพี่จะคอยประคองมือเธอเอง"', zh: '🤝 让学生尝试："你来做。我已经做得够多了。我会指导你的。"' }, consequence: { en: '✅ Empowerment. She gets it. She feels like she can conquer the world. You realize your greatest skill in the end wasn\'t your hands, but your ability to lift others up. You leave in peace.', th: '✅ การมอบพลัง: เธอทำได้! เธอรู้สึกเหมือนจะครองโลกได้เลยล่ะ คุณเพิ่งพบว่าทักษะที่ยิ่งใหญ่ที่สุดของคุณในบั้นปลาย ไม่ใช่ความแม่นยำของมือ แต่คือความสามารถในการผลักดันผู้อื่น คุณจากไปอย่างสงบ', zh: '✅ 赋权。她做到了。她觉得她可以征服世界。你意识到，最终你最伟大的技能不是你的双手，而是你提拔他人的能力。你在宁静中离开。' }, stats: { competence: 60, ethics: 80, leadership: 100, innovation: 50 } }
        ]
    },

    {
        id: 'nu_050',
        text: {
            en: '🌌 The Final Reflection: You are sitting on a park bench, retired. A stranger approaches and says: "You probably don\'t remember me, but 20 years ago, you stayed with my mother when she died. You were the only one who cared." Was it worth it?',
            th: '🌌 การไตร่ตรองครั้งสุดท้าย: คุณนั่งอยู่ที่ม้านั่งในสวนหลังเกษียณ คนแปลกหน้าเดินมาทักว่า "คุณคงจำผมไม่ได้ แต่เมื่อ 20 ปีก่อน คุณอยู่เคียงข้างแม่ผมจนนาทีสุดท้าย คุณเป็นคนเดียวที่ใส่ใจท่านจริงๆ" ...มันคุ้มค่าไหมที่คุณทำมาทั้งหมดนี้?',
            zh: '🌌 最后的沉思：退休后的你坐在公园长椅上。一个陌生人走过来说："你可能不记得我了，但20年前，在我母亲去世时你一直陪着她。你是唯一关心她的人。"这一切值得吗？'
        },
        options: [
            { id: 'A', text: { en: '💖 Yes, Every Moment: "If I could go back, I\'d do it all again. The pain, the fatigue, the joy—it was a life well lived."', th: '💖 คุ้มเสียยิ่งกว่าคุ้ม: "ถ้าย้อนเวลาไปได้ ฉันก็จะทำแบบเดิม ทั้งความปวดร้าว ความเหนื่อยล้า และความสุข... มันคือชีวิตที่ใช้อย่างคุ้มค่าแล้ว"', zh: '💖 是的，每一刻："如果我能回去，我会再做一遍。痛苦、疲劳、喜悦——这是精彩的一生。"' }, consequence: { en: '🏆 Universal Respect. You end your story with a Perfect Legacy. Your stats don\'t matter anymore—you have achieved the hidden stat: "Internal Peace."', th: '🏆 การยอมรับจากสากล: คุณจบเรื่องราวด้วยตำนานที่สมบูรณ์แบบ ค่าพลังต่างๆ ไม่สำคัญอีกต่อไป... เพราะคุณบรรลุค่าพลังลับที่ชื่อว่า "ความสงบในใจ"', zh: '🏆 普遍的尊重。你以完美的传承结束了你的故事。你的数据不再重要了——你已经获得了隐藏属性："内心平和"。' }, stats: { competence: 100, ethics: 100, leadership: 100, innovation: 100 } },
            { id: 'B', text: { en: '🚬 It was Hard: "I\'m glad I helped, but I gave too much of myself away. I hope the next generation finds a better balance."', th: '🚬 มันหนักหนาสาหัสมาก: "ฉันก็ดีใจที่ได้ช่วยนะ แต่ฉันเสียสละตัวเองมากเกินไป ฉันหวังว่าคนรุ่นหลังจะหาสมดุลชีวิตที่ดีกว่าฉันได้"', zh: '🚬 这很难："我很高兴我帮了忙，但我牺牲了太多的自我。我希望下一代能找到更好的平衡。"' }, consequence: { en: '📜 The Weary Veteran. You saved thousands, but you carry heavy scars. You are a hero, but a tired one. Your legacy is warning others that self-care is not optional.', th: '📜 ทหารผ่านศึกผู้เหนื่อยล้า: คุณช่วยคนมาเป็นพัน แต่คุณก็แบกบาดแผลฉกรรจ์ไว้กับตัว คุณคือฮีโร่... แต่เป็นฮีโร่ที่ล้าเหลือเกิน ตำนานของคุณคือการเตือนใจคนอื่นว่า การดูแลตัวเองไม่ใช่ทางเลือก แต่คือสิ่งที่ต้องทำ', zh: '📜 疲惫的老兵。你挽救了成千上万的人，但你也带着沉重的伤疤。你是个英雄，但是个疲惫的英雄。你的传承是在告诫他人，自我关怀绝非可有可无。' }, stats: { competence: 80, ethics: 80, leadership: 80, innovation: 80 } }
        ]
    }
];



