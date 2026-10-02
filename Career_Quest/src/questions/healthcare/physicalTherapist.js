
// Physical Therapist Career Questions
// Ultra-Comprehensive set: 50 detailed, story-rich questions
// Each scenario is a mini-case study with deep consequences and realistic stat impacts

export const physicalTherapistQuestions = [

    // SECTION 1: CLINICAL ETHICS & PROFESSIONAL BOUNDARIES (Questions 1-10)

    {
        id: 'pt_001',
        text: {
            en: '📜 The Faker: A patient claims severe back pain to get a large Worker\'s Comp settlement. When you turn away to grab a towel, you see him stretch perfectly and check his phone with zero pain behavior. He asks you to sign his "Total Disability" form which would guarantee him paid time off for 6 months.',
            th: '📜 จอมลวงโลก: คนไข้แกล้งปวดหลังรุนแรงเพื่อจะเอาเงินประกันสังคมก้อนโต พอคุณหันหลังไปหยิบผ้าเช็ดตัว คุณเห็นเขายืดตัวสบายปร๋อ เช็คโทรศัพท์เฉย ไม่มีอาการปวดเลย แล้วมาขอให้เซ็นใบ "พิการถาวร" เพื่อจะหยุดงานยาว 6 เดือนแบบได้เงินเดือน',
            zh: '📜 装病者：一名患者声称严重背痛以获得巨额工伤赔偿。当你转身拿毛巾时，你看到他完美地伸展身体，查看手机，没有任何疼痛表现。他让你签署他的“完全丧失劳动能力”表格，这将保证他带薪休假6个月。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Refuse & Report: "I cannot sign this based on my clinical observations today. I saw you move freely. I am ethically obligated to report this discrepancy."', th: '🛑 ปฏิเสธและรายงาน: "หมอเซ็นให้ไม่ได้ครับ จากที่ดูอาการวันนี้ หมอเห็นคุณขยับตัวได้ปกติ หมอมีหน้าที่ต้องรายงานความผิดปกตินี้ตามจรรยาบรรณ"', zh: '🛑 拒绝并报告：“基于今天的临床观察，我不能签署此文件。我看到你活动自如。我有道德义务报告这种差异。”' },
                consequence: { en: '✅ Ethical Fortress! The patient threatens to sue and storms out. However, you save the insurance system thousands. Your clinic manager praises your integrity, protecting the clinic from fraud liability. You lose one patient but gain meaningful respect.', th: '✅ ป้อมปราการจรรยาบรรณ! คนไข้ขู่จะฟ้องแล้วเดินปึงปังออกไป แต่คุณช่วยระบบประกันประหยัดเงินได้มหาศาล ผู้จัดการคลินิกชมเชยความซื่อสัตย์ของคุณ ที่ช่วยปกป้องคลินิกจากการถูกหาว่าสมรู้ร่วมคิด เสียคนไข้ 1 คนแต่ได้ความเคารพมหาศาล', zh: '✅ 道德堡垒！病人威胁要起诉并冲了出去。然而，你为保险系统节省了数千美元。你的诊所经理称赞你的正直，保护诊所免受欺诈责任。你失去了一个病人，但获得了极大的尊重。' },
                stats: { competence: 60, ethics: 90, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤔 Functional Capacity Test: "Before I sign, standard protocol requires a 2-hour Functional Capacity Evaluation today to document your limitations. Let\'s start with weighted carries."', th: '🤔 ทดสอบสมรรถภาพเต็มรูปแบบ: "ก่อนหมอจะเซ็น ตามกฎต้องทดสอบสมรรถภาพทางกาย (FCE) 2 ชั่วโมงเต็มเพื่อบันทึกข้อจำกัดของคุณ มาเริ่มด้วยการยกของหนักเดินกันเลย"', zh: '🤔 功能能力测试：“在我签署之前，标准流程要求今天进行2小时的功能能力评估以记录你的限制。让我们从负重搬运开始。”' },
                consequence: { en: '✅ Clever Strategy! Caught in the lie, the patient realizes they can\'t fake their way through a rigorous 2-hour exam. They suddenly "feel better" and leave. You avoided confrontation while upholding standards.', th: '✅ กลยุทธ์เฉียบขาด! พอรู้ว่าจะโดนจับเท็จด้วยการทดสอบโหด 2 ชั่วโมง คนไข้ก็ "ขี้เกียจแกล้ง" ทันที บอกว่า "ดีขึ้นแล้ว" แล้วรีบกลับ คุณเลี่ยงการปะทะแถมยังรักษามาตรฐานวิชาชีพไว้ได้', zh: '✅ 聪明策略！谎言败露，病人意识到他们无法通过严格的2小时检查来伪装。他们突然“感觉好多了”并离开了。你在坚持标准的同时避免了对抗。' },
                stats: { competence: 50, ethics: 70, leadership: 30, innovation: 60 }
            },
            {
                id: 'C',
                text: { en: '✍️ Sign It to Avoid Conflict: "Okay, I\'ll sign it. I don\'t want any trouble or bad reviews. Just be careful out there."', th: '✍️ เซ็นๆ ไปเพื่อเลี่ยงปัญหา: "โอเคครับ เซ็นให้ก็ได้ ผมไม่อยากมีเรื่องหรือโดนรีวิวแย่ๆ ระวังตัวด้วยนะครับ"', zh: '✍️ 签署以避免冲突：“好的，我会签的。我不想要任何麻烦或差评。在外面小心点。”' },
                consequence: { en: '⚠️ slippery Slope! You avoid the argument, but the insurance adjuster flags the claim. They investigate and find video of him jetskiing. You are implicated for falsifying medical records. Your license is under review.', th: '⚠️ ทางลาดชันสู่หายนะ! คุณเลี่ยงการทะเลาะได้จริง แต่บริษัทประกันจับพิรุธได้ เขาไปสืบเจอคลิปหมอนั่นขี่เจ็ทสกี คุณโดนร่างแหไปด้วยข้อหาปลอมแปลงเวชระเบียน ใบประกอบวิชาชีพสั่นคลอน', zh: '⚠️ 滑坡！你避免了争吵，但保险理赔员标记了该索赔。他们调查发现了他开摩托艇的视频。你因伪造医疗记录而受到牵连。你的执照正在接受审查。' },
                stats: { competence: 20, ethics: -60, leadership: -30, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '🤝 "Refer Out" Tactics: "This level of disability typically requires a specialist neurologist signature. I will refer you to Dr. Stone downtown."', th: '🤝 แทคติก "ส่งต่อ": "ระดับความพิการขนาดนี้ปกติวิชาชีพผมเซ็นไม่ได้ครับ ต้องให้แพทย์เฉพาะทางระบบประสาทเซ็น เดี๋ยวผมเขียนใบส่งตัวไปหาหมอที่ในเมืองให้นะ"', zh: '🤝 “转诊”策略：“这种程度的残疾通常需要神经专科医生的签名。我会把你转诊给市中心的斯通医生。”' },
                consequence: { en: '⚖️ Passing the Buck. You protect yourself legally, but you pass the problem to a colleague without warning them. It saves your skin but lacks professional courage.', th: '⚖️ โยนกลอง! คุณรอดตัวทางกฎหมาย แต่โยนภาระไปให้เพื่อนร่วมวิชาชีพโดยไม่เตือน รอดตัวไปวันๆ แต่ขาดความกล้าหาญทางวิชาชีพ', zh: '⚖️ 推卸责任。你在法律上保护了自己，但你在没有警告同事的情况下把问题推给了他们。这保全了你自己，但缺乏职业勇气。' },
                stats: { competence: 30, ethics: 40, leadership: 10, innovation: 20 }
            }
        ]
    },

    {
        id: 'pt_002',
        text: {
            en: '💘 Dangerous Curves: A young, attractive patient with a minor shoulder injury makes intense romantic advances during manual therapy. They invite you to dinner "to discuss the treatment plan" at a romantic restaurant. You are currently single and they are your type.',
            th: '💘 ทางโค้งอันตราย: คนไข้หนุ่มสาวหน้าตาดีที่เจ็บไหล่นิดหน่อย รุกจีบคุณหนักมากระหว่างทำกายภาพ ชวนไปดินเนอร์ "เพื่อคุยเรื่องแผนการรักษา" ที่ร้านอาหารสุดโรแมนติก คุณเองก็โสดและเขาก็ตรงสเปก',
            zh: '💘 危险的诱惑：一名患有轻微肩伤的年轻、有魅力的病人在手动治疗期间对你展开猛烈的浪漫攻势。他们邀请你去一家浪漫的餐厅共进晚餐“讨论治疗方案”。你目前是单身，而且他们是你喜欢的类型。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Strict Boundaries: "I appreciate the invitation, but ethical guidelines strictly forbid personal relationships with current patients. We must keep this professional."', th: '🚫 ขีดเส้นตาย: "ขอบคุณที่ชวนครับ/ค่ะ แต่จรรยาบรรณวิชาชีพห้ามมีความสัมพันธ์ส่วนตัวกับคนไข้เด็ดขาด เราต้องรักษาความเป็นมืออาชีพครับ/ค่ะ"', zh: '🚫 严格界限：“我很感激邀请，但道德准则严禁与现有患者建立私人关系。我们必须保持这种职业关系。”' },
                consequence: { en: '✅ Professionalism Wins. The patient is slightly embarrassed but respects the boundary. They complete their treatment successfully. Your reputation as a trustworthy clinician grows.', th: '✅ มืออาชีพชนะเลิศ! คนไข้เขินนิดหน่อยแต่ก็เคารพขอบเขต เขารักษาจนหายดี ชื่อเสียงของคุณในฐานะหมอที่ไว้ใจได้ก็เพิ่มขึ้น', zh: '✅ 专业胜出。病人有点尴尬，但尊重界限。他们成功完成了治疗。你作为值得信赖的临床医生的声誉随之增长。' },
                stats: { competence: 50, ethics: 90, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '💑 Accept the Date: "I\'d love to. Let\'s meet at 8. Treating shoulders is tiring work, I could use a drink."', th: '💑 รับนัด: "ยินดีเลยครับ เจอกันสองทุ่มนะ รักษาไหล่มาทั้งวันเหนื่อยจะแย่ อยากดื่มพอดี"', zh: '💑 接受约会：“我很乐意。8点见。治疗肩膀很累，我想喝一杯。”' },
                consequence: { en: '💀 License Revoked! A jealous ex sees you two. Reports you to the board. Even if it was consensual, it\'s a violation of power dynamics. You face a disciplinary hearing and license suspension.', th: '💀 โดนยึดใบประกอบ! แฟนเก่าขี้หึงของเขามาเห็น แล้วแจ้งสภาวิชาชีพ ถึงจะสมยอมแต่มันผิดเรื่องความสัมพันธ์เชิงอำนาจ คุณโดนสอบวินัยและพักใบอนุญาต', zh: '💀 吊销执照！嫉妒的前任看到了你们。向委员会举报你。即使是双方自愿的，这也违反了权力动态。你面临纪律听证会和执照停职。' },
                stats: { competence: 30, ethics: -80, leadership: -40, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🔄 Transfer Patient: "I think we have a conflict of interest developing. To ensure get the best unbiased care, I\'m transferring your case to my colleague, Sarah. Then... call me in 6 weeks."', th: '🔄 ส่งต่อคนไข้: "หมอคิดว่าเราเริ่มมีผลประโยชน์ทับซ้อน เพื่อให้คุณได้รับการรักษาที่เป็นกลางที่สุด หมอจะส่งเคสคุณให้เพื่อนหมอที่ชื่อซาร่าดูแลแทน แล้วหลังจากนั้น... อีก 6 อาทิตย์ค่อยโทรหาหมอนะ"', zh: '🔄 转移病人：“我认为我们在发展利益冲突。为了确保你得到最好的公正护理，我将你的病例转给我的同事莎拉。然后……6周后给我打电话。”' },
                consequence: { en: '⚖️ The Loophole. You follow the letter of the law but dance on the edge of the spirit. The patient gets care, and you date later. Risky, but technically compliant.', th: '⚖️ ช่องโหว่! คุณทำตามกฎเป๊ะแต่ก็เฉียดฉิวศีลธรรม คนไข้ได้รักษา แล้วค่อยไปเดทกันทีหลัง เสี่ยงนะแต่นับว่าไม่ผิดกฎ', zh: '⚖️ 漏洞。你遵守了法律条文，但在精神边缘试探。病人得到了治疗，你们之后约会。有风险，但在技术上合规。' },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: { en: '😅 Laugh in Off: "Haha, you\'re charming! But let\'s focus on that rotator cuff. Lift your arm up..." (Ignore it)', th: '😅 ขำกลบเกลื่อน: "ฮ่าๆ คุณนี่ตลกจัง! มาโฟกัสที่เอ็นไหล่กันต่อนะ ยกแขนขึ้นครับ..." (ทำเป็นไม่สนใจ)', zh: '😅 笑一笑：“哈哈，你很有魅力！但让我们专注于那个肩袖。抬起你的手臂……”（忽略它）' },
                consequence: { en: '⚠️ Awkward Ambiguity. The patient thinks you\'re playing hard to get. They keep flirting every session, making the clinic staff uncomfortable. You failed to set a clear boundary.', th: '⚠️ คลุมเครืออึดอัด! คนไข้คิดว่าคุณเล่นตัว เลยหยอดมุกจีบทุกครั้งที่มา จนเจ้าหน้าที่คนอื่นเริ่มอึดอัด คุณล้มเหลวในการขีดเส้นให้ชัดเจน', zh: '⚠️ 尴尬的模棱两可。病人以为你在欲擒故纵。他们每次治疗都继续调情，让诊所工作人员感到不舒服。你未能设定清晰的界限。' },
                stats: { competence: 30, ethics: 40, leadership: 10, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_003',
        text: {
            en: '🍪 Grandma\'s Gifts: An 85-year-old patient on a fixed income brings you expensive homemade lasagna and a $50 gift card every week. "You\'re the grandson I never had," she says. Your employee handbook bans gifts over $20.',
            th: '🍪 ของขวัญคุณยาย: คนไข้วัย 85 ที่มีรายได้จำกัด ทำลาซานญ่าก้อนโตมาฝากพร้อมบัตรของขวัญ $50 ทุกอาทิตย์ แกบอก "หมอเหมือนหลานชายที่ยายไม่เคยมี" แต่คู่มือพนักงานห้ามรับของขวัญเกิน $20',
            zh: '🍪 奶奶的礼物：一位靠固定收入生活的85岁病人每周给你带昂贵的自制千层面和50美元的礼品卡。“你就是我从未有过的孙子，”她说。你的员工手册禁止接受超过20美元的礼物。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤝 Accept & Share: "Thank you, Martha! I\'ll put this lasagna in the break room for the whole team to enjoy." (Return the gift card quietly later)', th: '🤝 รับแล้วแบ่งปัน: "ขอบคุณครับยาย! เดี๋ยวหมอเอาลาซานญ่าไปไว้ในห้องพักเบรกให้ทุกคนทานกันนะ" (แล้วค่อยแอบคืนบัตรของขวัญทีหลัง)', zh: '🤝 接受并分享：“谢谢你，玛莎！我会把千层面放在休息室让整个团队享用。”（稍后悄悄归还礼品卡）' },
                consequence: { en: '✅ Graceful Balance. You honor her gesture without breaking rules or exploiting her finances. Returning the cash card gently reinforces the professional boundary while keeping the warmth.', th: '✅ สมดุลที่งดงาม! คุณรักษาน้ำใจแกโดยไม่ผิดกฎหรือเอาเปรียบเงินแก การคืนบัตรเงินสดอย่างสุภาพช่วยย้ำขอบเขตวิชาชีพโดยไม่ทำลายความรู้สึกดีๆ', zh: '✅ 优雅的平衡。你在不违反规则或利用她财务状况的情况下尊重了她的姿态。温和地归还现金卡既加强了职业界限，又保持了温暖。' },
                stats: { competence: 40, ethics: 80, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🚫 Refuse Everything: "Martha, I cannot accept these. It violates policy. Please stop bringing things or I can\'t treat you."', th: '🚫 ปฏิเสธทุกอย่าง: "คุณยายครับ ผมรับไม่ได้ มันผิดกฎ กรุณาหยุดเอาของมาฝาก ไม่งั้นผมคงรักษาคุณยายต่อไม่ได้"', zh: '🚫 拒绝一切：“玛莎，我不能接受这些。这违反了政策。请不要再带东西来，否则我无法为你治疗。”' },
                consequence: { en: '💔 Emotional Crush. She feels rejected and ashamed. Her attendance drops off because she feels she "insulted" you. Physical decline follows. You prioritized rules over rapport entirely.', th: '💔 หักหาญน้ำใจ! แกน้อยใจและอาย แกเริ่มขาดนัดเพราะคิดว่า "ไปดูถูกหมอ" อาการแกแย่ลงตามมา คุณเอากฎนำหน้าความสัมพันธ์จนพังหมด', zh: '💔 情感打击。她感到被拒绝和羞愧。她的出勤率下降，因为她觉得她“侮辱”了你。身体状况随之恶化。你完全将规则置于融洽关系之上。' },
                stats: { competence: 30, ethics: 50, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🤐 Keep It Secret: "Wow, thanks! I love lasagna." (Pocket the card). "It\'ll be our little secret."', th: '🤐 รับไว้เงียบๆ: "ว้าว ขอบคุณครับ! ผมชอบลาซานญ่า" (เก็บดาร์ดเข้ากระเป๋า) "ให้เป็นความลับของเรานะ"', zh: '🤐 保密：“哇，谢谢！我喜欢千层面。”（把卡装进口袋）。“这将是我们的小秘密。”' },
                consequence: { en: '⚠️ Exploitative Path. You start expecting the treats. Other patients notice special treatment. Eventually, she can\'t afford her copay because she spent it on your gifts. Unethical.', th: '⚠️ เส้นทางเอาเปรียบ! คุณเริ่มคาดหวังของฝาก คนไข้คนอื่นเริ่มเห็นคุณเลือกปฏิบัติ ท้ายสุดยายไม่มีเงินจ่ายค่ารักษาเพราะเอามาปรนเปรอคุณหมด ไร้จริยธรรม', zh: '⚠️ 剥削之路。你开始期待这些款待。其他病人注意到了特殊待遇。最终，她因为把钱花在你的礼物上而付不起共付额。不道德。' },
                stats: { competence: 20, ethics: -40, leadership: -20, innovation: 0 }
            }
        ]
    },


    // SECTION 2: PATIENT CARE & DIFFICULT CLINICAL DECISIONS (Questions 11-20)

    {
        id: 'pt_004',
        text: {
            en: '😖 The "Stop" Signal: You are rehabilitating a post-op frozen shoulder (adhesive capsulitis). To restore range of motion, you MUST push past the pain barrier. The patient is crying and screaming "Stop!" If you stop, they will need surgery again. If you push, you might traumatize them.',
            th: '😖 สัญญาณ "หยุด": คุณกำลังทำกายภาพคนไข้ไหล่ติดหลังผ่าตัด (frozen shoulder) เพื่อคืนองศาการเคลื่อนไหว คุณ "จำเป็น" ต้องดัดให้ผ่านจุดที่เจ็บ คนไข้ร้องไห้และตะโกนว่า "หยุด!" ถ้าคุณหยุด เขาต้องผ่าตัดใหม่ ถ้าคุณฝืน คุณอาจสร้างปมในใจให้เขา',
            zh: '😖 “停止”信号：你正在进行术后冻结肩（粘连性关节囊炎）的康复治疗。为了恢复活动范围，你必须突破疼痛屏障。病人在哭喊“停下！”如果你停下，他们将需要再次手术。如果你强推，可能会给他们造成创伤。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💪 Controlled Push: "Breathe with me. We are going to hold for 10 more seconds. I know it hurts, but this saves you from surgery. 3... 2... 1..."', th: '💪 ดัดอย่างควบคุม: "หายใจพร้อมหมอนะครับ เราจะทนอีก 10 วินาที หมอรู้ว่าเจ็บ แต่นี่จะช่วยให้ไม่ต้องผ่าตัดซ้ำนะ 3... 2... 1..."', zh: '💪 控制下的推进：“跟我一起呼吸。我们要再坚持10秒。我知道这很疼，但这能让你免于再次手术。3... 2... 1...”' },
                consequence: { en: '✅ Tough Love Victory. They hate you in the moment, but the joint releases. Weeks later, they have full function and thank you profusely for being strong when they couldn\'t be.', th: '✅ ชัยชนะของยาขม! ตอนนั้นเขาเกลียดคุณมาก แต่ข้อไหล่หลุดจากพังผืด หลายอาทิตย์ต่อมาเขาใช้งานได้ปกติและขอบคุณที่คุณใจแข็งในตอนที่เขาใจฝ่อ', zh: '✅ 严厉之爱的胜利。那一刻他们恨你，但关节松开了。几周后，他们恢复了全部功能，并非常感谢你在他们无法坚持时表现得坚强。' },
                stats: { competence: 70, ethics: 50, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🛑 Immediate Halt: "Okay, I\'m stopping. I never want to cause you distress. We will try gentle stretching only."', th: '🛑 หยุดทันที: "โอเคครับ หมอหยุดแล้ว หมอไม่อยากให้คุณทรมาน เราจะลองแค่ยืดเบาๆ พอ"', zh: '🛑 立即停止：“好的，我停下来。我不想让你痛苦。我们将尝试只做温和的伸展。”' },
                consequence: { en: '📉 Frozen Forever. The shoulder lock returns. Range of motion decreases. 2 months later, the surgeon yells at you for being "too soft" and schedules another manipulation under anesthesia.', th: '📉 ติดถาวร! ไหล่กลับไปยึดเหมือนเดิม องศาการเคลื่อนไหวลเ 2 เดือนต่อมา หมอผ่าตัดด่าคุณว่า "ใจอ่อนเกิน" แล้วนัดคนไข้ไปดัดไหล่ใต้การดมยาสลบแทน', zh: '📉 永远冻结。肩部再次锁死。活动范围减小。2个月后，外科医生对你大吼大叫，说你“太软弱”，并安排了另一次麻醉下的手法松解。' },
                stats: { competence: 30, ethics: 60, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💊 Medicate First: "Let\'s stop. Take your prescribed pain meds, wait 30 minutes, and we try again. We can\'t skip this, but we can blunt it."', th: '💊 กินยาก่อน: "พอแค่นี้ก่อน ไปกินยาแก้ปวดที่หมอสั่ง รอ 30 นาที แล้วมาลองใหม่ เราข้ามขั้นตอนนี้ไม่ได้ แต่เราลดความเจ็บลงได้"', zh: '💊 先用药：“停下来。吃处方止痛药，等30分钟，我们再试一次。我们要么不做，要做就得减轻痛苦。”' },
                consequence: { en: '✅ Strategic Compliance. The break allows them to regroup mentally. The meds take the edge off. You get the range required with less emotional trauma. Smart clinical handling.', th: '✅ กลยุทธ์ความร่วมมือ! การพักช่วยให้เขาตั้งสติ ยาช่วยลดความเจ็บ คุณได้องศาที่ต้องการโดยลดความบอบช้ำทางใจ การจัดการทางคลินิกที่ฉลาด', zh: '✅ 战略性依从。休息让他们在心理上重新调整。药物减轻了疼痛。你以较少的情感创伤获得了所需的活动范围。聪明的临床处理。' },
                stats: { competence: 60, ethics: 60, leadership: 40, innovation: 40 }
            }
        ]
    },

    {
        id: 'pt_005',
        text: {
            en: '🩺 The Missed Diagnosis: You are treating a patient for "Low Back Pain" referred by a GP. After 3 sessions, nothing is improving. You notice they have night sweats and a pulsating mass in their abdomen. You suspect an Abdominal Aortic Aneurysm (AAA) - a ticking time bomb.',
            th: '🩺 การวินิจฉัยที่พลาดไป: คุณกำลังรักษาคนไข้ "ปวดหลังล่าง" ที่ส่งมาจากหมอทั่วไป รักษา 3 ครั้งอาการไม่ดีขึ้น คุณสังเกตว่าเขามีเหงื่อออกตอนกลางคืนและมีก้อนเต้นตุบๆ ในช่องท้อง คุณสงสัยว่าเป็นโรคหลอดเลือดแดงใหญ่โป่งพอง (AAA) - ระเบิดเวลาชัดๆ',
            zh: '🩺 漏诊：你正在治疗一名由全科医生转诊的“下背痛”患者。经过3次治疗，没有任何改善。你注意到他们有盗汗，腹部有搏动性肿块。你怀疑是腹主动脉瘤 (AAA) —— 一颗定时炸弹。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚑 Emergency Protocol: "I am stopping treatment. I need you to go to the ER immediately. I will call them to let them know you are coming. This is not back pain."', th: '🚑 สั่งเข้าฉุกเฉินทันที: "หมอขอยุติการรักษานะครับ คุณต้องไปห้องฉุกเฉินเดี๋ยวนี้ หมอจะโทรไปแจ้งทางนั้นว่าคุณกำลังไป นี่ไม่ใช่ปวดหลังธรรมดา"', zh: '🚑 紧急方案：“我要停止治疗。你需要立即去急诊室。我会给他们打电话告诉他们你要去。这不是背痛。”' },
                consequence: { en: '✅ Life Saved. The ER confirms a 6cm aneurysm. They operate that night. The patient sends you a card saying "You saved my life." You are a hero.', th: '✅ กู้ชีวิต! ห้องฉุกเฉินยืนยันหลอดเลือดโป่ง 6 ซม. ผ่าตัดคืนนั้นเลย คนไข้ส่งการ์ดมาบอก "คุณช่วยชีวิตผมไว้" คุณคือฮีโร่', zh: '✅ 挽救生命。急诊室确诊了一个6厘米的动脉瘤。他们当晚就进行了手术。病人寄给你一张卡片说“你救了我的命”。你是个英雄。' },
                stats: { competence: 100, ethics: 80, leadership: 80, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '📞 Call the GP first: "I don\'t want to alarm the patient or overstep. I\'ll leave a voicemail for his doctor to check it out next week."', th: '📞 โทรหาหมอเจ้าของไข้ก่อน: "ไม่อยากให้คนไข้ตื่นตูมหรือก้าวก่ายงานหมออื่น เดี๋ยวฝากข้อความเสียงให้หมอเขาเช็คอาทิตย์หน้าละกัน"', zh: '📞 先给全科医生打电话：“我不惊吓病人或越权。我会留言给他的医生，让他们下周检查一下。”' },
                consequence: { en: '💀 Fatal Delay. The aneurysm ruptures 2 days later before he sees his doctor. He passes away. You carry the guilt forever knowing you saw the signs and hesitated.', th: '💀 ความล่าช้าถึงตาย! หลอดเลือดแตกในอีก 2 วันถัดมา ก่อนจะได้เจอหมอ เขาเสียชีวิต คุณแบกความรู้สึกผิดไปตลอดชีวิตที่รู้ทั้งรู้แต่ลังเล', zh: '💀 致命延误。动脉瘤在2天后破裂，他还没来得及看医生。他去世了。你知道自己看到了迹象却犹豫了，这将永远背负着罪恶感。' },
                stats: { competence: 50, ethics: -50, leadership: -40, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💆 Continue Massage: "It\'s probably just muscle spasms. Let\'s try dry needling to relax the area."', th: '💆 นวดต่อไป: "น่าจะแค่กล้ามเกร็งแหละ ลองฝังเข็มคลายกล้ามเนื้อแถวนั้นดู"', zh: '💆 继续按摩：“可能只是肌肉痉挛。让我们试试干针来放松该区域。”' },
                consequence: { en: '⚠️ Dangerous Malpractice. Needling over an aneurysm is insanely risky. Luckily you don\'t puncture it, but the patient gets no better. Eventually, another doctor catches it and asks "Why didn\'t your PT see this?" Incompetence labeled.', th: '⚠️ ผิดพลาดร้ายแรง! การฝังเข็มเหนือหลอดเลือดโป่งพองมันเสี่ยงบ้าบอ โชคดีที่ไม่ไปทิ่มมันแตก แต่อาการคนไข้ไม่ดีขึ้น สุดท้ายหมออื่นมาเจอแล้วถาม "ทำไม PT ของคุณถึงดูไม่ออก?" ตราหน้าว่าไร้ฝีมือ', zh: '⚠️ 危险的医疗事故。在动脉瘤上施针是极度危险的。幸运的是你没有刺破它，但病人没有好转。最终，另一位医生发现了它并问“为什么你的理疗师没看出来？”被贴上无能的标签。' },
                stats: { competence: -20, ethics: 20, leadership: -30, innovation: -10 }
            }
        ]
    },


    // SECTION 3: SPORTS MEDICINE & HIGH PERFORMANCE (Questions 21-30)

    {
        id: 'pt_006',
        text: {
            en: '🏈 The Championship Game: The star quarterback grade 2 ankle sprain 3 days before the State Championship. The coach, the dad, and the kid are begging you to clear him. "Just tape it up doc!" If he plays, he risks a Grade 3 tear and surgery.',
            th: '🏈 นัดชิงแชมป์: ควอเตอร์แบ็คดาวรุ่ง ข้อเท้าแพลงระดับ 2 ก่อนแข่งชิงแชมป์รัฐ 3 วัน โค้ช พ่อ และตัวเด็กมาอ้อนวอนให้คุณเซ็นผ่าน "พันเทปแข็งๆ ก็พอครับหมอ!" ถ้าลงเล่น เสี่ยงเอ็นฉีกระดับ 3 และต้องผ่าตัด',
            zh: '🏈 冠军赛：明星四分卫在州冠军赛前3天遭遇2级脚踝扭伤。教练、父亲和孩子都在求你让他上场。“只要包扎一下就行了医生！”如果他上场，他面临3级撕裂和手术的风险。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🧱 The Wall: "No. He is out. The instability is too high. I will not risk his college career for one high school game. Sit him down."', th: '🧱 กำแพงเหล็ก: "ไม่ครับ ถอนตัวสถานเดียว ข้อเท้าไม่มั่นคงพอ หมอจะไม่เสี่ยงอนาคตระดับมหาลัยของเขาเพื่อเกมมัธยมเกมเดียว นั่งพักครับ"', zh: '🧱 铜墙铁壁：“不。他出局了。不稳定性太高。我不会为了通过一场高中比赛而拿他的大学生涯冒险。让他坐下。”' },
                consequence: { en: '✅ Protector of Futures. They scream at you. The team loses. But 4 years later, the kid gets drafted into the NFL and sends you a signed jersey saying "Thanks for saving my ankle."', th: '✅ ผู้ปกป้องอนาคต! พวกเขาตะคอกใส่คุณ ทีมแพ้ แต่ 4 ปีต่อมา เด็กคนนั้นได้รับเลือกเข้า NFL และส่งเสื้อพร้อมลายเซ็นมาให้ "ขอบคุณที่เซฟข้อเท้าผมวันนั้น"', zh: '✅ 未来的守护者。他们对你大喊大叫。球队输了。但4年后，这孩子被NFL选中，并寄给你一件签名球衣写着“谢谢你救了我的脚踝。”' },
                stats: { competence: 80, ethics: 80, leadership: 70, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤕 Tape & Pray: "We will heavy tape it. He plays only on 3rd downs. But you sign this waiver saying I advised against it."', th: '🤕 พันเทปแล้วสวดมนต์: "เราจะล็อคข้อเท้าให้แน่นที่สุด เล่นเฉพาะจังหวะ 3rd down เท่านั้น แต่พวกคุณต้องเซ็นใบสละสิทธิ์นะว่าหมอห้ามแล้ว"', zh: '🤕 包扎祈祷：“我们会重重包扎。他只在第3档进攻时上场。但你要签署这份豁免书，声明我建议不要这样做。”' },
                consequence: { en: '⚠️ Pyrrhic Victory. He plays. He scores the winning touchdown but collapses. Ligament snapped. He needs reconstruction surgery and misses his freshman college season. You won the game but lost the player.', th: '⚠️ ชัยชนะบนซากปรักหักพัง! เขาลงเล่น ทำทัชดาวน์ชนะแต่ล้มฟุบ เอ็นฉีกขาด ต้องผ่าตัดใหญ่และพลาดฤดูกาลแรกในมหาลัย คุณชนะเกมแต่เสียผู้เล่น', zh: '⚠️ 皮洛士式的胜利。他上场了。他触地得分获胜但倒下了。韧带断裂。他需要重建手术并错过了大学新生赛季。你赢了比赛但输了球员。' },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '💉 The "Shot": "I can\'t clear him... but I know a doctor who will give him a Cortisone shot to numb it totally." (Wink)', th: '💉 "ยาฉีด": "หมอเซ็นให้ไม่ได้... แต่หมอรู้จักหมออีกคนที่ฉีดสเตียรอยด์บล็อกเจ็บให้ได้นะ" (ขยิบตา)', zh: '💉 “那一针”：“我不能让他上场……但我认识一位医生，可以给他打一针可的松让他完全麻木。”（眨眼）' },
                consequence: { en: '💀 Negligent Referral. The shot masks the pain. He destroys his ankle cartilage completely because he lacks protective sensation. It\'s a career-ending injury. You are complicit.', th: '💀 การส่งต่อที่ประมาท! ยาฉีดบังความเจ็บมิด เขาทำลายกระดูกอ่อนข้อเท้าตัวเองพังยับเพราะไม่รู้สึกเจ็บ จบชีวิตนักกีฬาถาวร คุณคือผู้สมรู้ร่วมคิด', zh: '💀 疏忽转诊。这一针掩盖了疼痛。因为缺乏保护性感觉，他完全破坏了他的脚踝软骨。这是职业生涯终结的伤病。你是同谋。' },
                stats: { competence: 20, ethics: -60, leadership: -20, innovation: 0 }
            }
        ]
    },
    {
        id: 'pt_007',
        text: {
            en: '👵 The Stubborn Senior: An 88-year-old patient with a high fall risk refuses to use a walker, calling it a "sign of weakness." She had a near-miss fall in your clinic today. If you force her, she might quit therapy. If you don\'t, she might break her hip at home.',
            th: '👵 ผู้สูงอายุที่ดื้อรั้น: คนไข้วัย 88 ปีที่มีความเสี่ยงสูงในการล้ม ปฏิเสธที่จะใช้เครื่องช่วยเดิน (walker) โดยบอกว่าเป็น "สัญลักษณ์ของความอ่อนแอ" วันนี้เธอเกือบจะล้มในคลินิกของคุณแล้ว ถ้าคุณบังคับเธอ เธออาจจะเลิกทำกายภาพ แต่ถ้าคุณไม่บังคับ เธออาจจะสะโพกหักอยู่ที่บ้านได้',
            zh: '👵 固执的老人：一名88岁的高跌倒风险患者拒绝使用学步车，称其为“虚弱的标志”。她今天在你的诊所差点摔倒。如果你强迫她，她可能会停止治疗。如果你不强迫她，她可能会在家里摔断髋骨。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🎨 Aesthetic Choice: "Let\'s not call it a walker. This is your \'Stability Assistant.\' We can even pick a custom color or add a basket for your knitting." (Focus on dignity)', th: '🎨 ทางเลือกที่เน้นความสวยงาม: "อย่าไปเรียกมันว่าเครื่องช่วยเดินเลยครับ ให้คิดซะว่าเป็น \'ผู้ช่วยส่วนตัวเพิ่มความมั่นใจ\' เราสามารถเลือกสีเก๋ๆ หรือติดตะกร้าไว้ใส่ชุดถักนิตติ้งของคุณยายได้ด้วยนะ"', zh: '🎨 审美选择：“我们别叫它学步车。这是您的‘稳定性助手’。我们甚至可以挑选一个定制的颜色，或者为您加一个篮子放您的针织活儿。”（注重尊严）' },
                consequence: { en: '✅ Dignity Preserved. By reframing the tool as an accessory rather than a disability aid, she agrees to use it. She stays safe and your relationship remains strong. Emotional intelligence saves lives.', th: '✅ รักษาเกียรติ! ด้วยการเปลี่ยนมุมมองจากการเป็นอุปกรณ์คนพิการให้เป็นเครื่องประดับ เธอจึงตกลงที่จะใช้มัน เธอปลอดภัยและคุณยังรักษาความสัมพันธ์ที่ดีไว้ได้ ความฉลาดทางอารมณ์ช่วยชิวิตคนได้จริงๆ', zh: '✅ 尊严得以保留。通过将工具重新定义为附件而非残疾辅助工具，她同意使用了。她保持了安全，你们的关系依然稳固。情商挽救了生命。' },
                stats: { competence: 50, ethics: 70, leadership: 60, innovation: 40 }
            },
            {
                id: 'B',
                text: { en: '⚖️ The Liability Talk: "I cannot legally or ethically treat you if you don\'t use the equipment. It\'s for your safety and my license. Please use the walker or we stop today."', th: '⚖️ พูดเรื่องความรับผิดชอบ: "ตามกฎหมายและจรรยาบรรณ หมอไม่สามารถรักษาคุณยายต่อได้หากคุณยายไม่ใช้อุปกรณ์ มันเพื่อความปลอดภัยของคุณยายและเพื่อใบประกอบของหมอด้วย โปรดใช้มันเถอะครับไม่งั้นเราต้องหยุดแค่นี้"', zh: '⚖️ 法律责任谈话：“如果您不使用该设备，我在法律上或道德上都无法为您提供治疗。这是为了您的安全和我的执照。请使用学步车，否则我们今天就停止。”' },
                consequence: { en: '⚠️ Compliance through Fear. She uses it, but hates coming to PT. The lack of rapport reduces the effectiveness of your sessions. She stops coming once her insurance authorization ends. Short-term safety, long-term failure.', th: '⚠️ ยอมเพราะกลัว! เธอใช้มันแต่เกลียดการมาหาคุณ ความสัมพันธ์ที่แย่ลงทำให้ประสิทธิภาพในการรักษาลดลง เธอเลิกมาทันทีที่ประกันหมด ความปลอดภัยระยะสั้นแต่ล้มเหลวในระยะยาว', zh: '⚠️ 出于恐惧的服从。她使用了，但讨厌来理疗。互动缺乏降低了治疗的效果。保险授权一结束她就不再来了。短期安全，长期失败。' },
                stats: { competence: 40, ethics: 60, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'pt_008',
        text: {
            en: '📉 The Quantity vs Quality Dilemma: Your boss demands you see 4 patients per hour (double bookings) to keep the clinic profitable. You are currently seeing 2/hour and providing great care. If you refuse, you might be fired.',
            th: '📉 ปริมาณ vs คุณภาพ: หัวหน้าสั่งให้คุณดูคนไข้ 4 คนต่อชั่วโมง (นัดซ้อน) เพื่อให้คลินิกมีกำไร ตอนนี้คุณดู 2 คน/ชม. และดูแลดีมาก ถ้าปฏิเสธ คุณอาจโดนไล่ออก',
            zh: '📉 数量与质量的困境：你的老板要求你每小时看4个病人（双重预约）以保持诊所盈利。你目前每小时看2个，并提供优质的护理。如果你拒绝，你可能会被解雇。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🏃 The Mill Worker: "Yes boss." You run between 4 beds, giving everyone 10 minutes of hands-on and putting them on heat packs. Documentation becomes copy-paste.', th: '🏃 คนงานโรงงาน: "ได้ครับบอส" คุณวิ่งระหว่าง 4 เตียง จับคนไข้คนละ 10 นาทีแล้วแปะแผ่นร้อน เอกสารก็ก๊อปวางเอา', zh: '🏃 磨坊工人：“好的老板。”你在4张床之间奔波，给每个人10分钟的手法治疗，然后给他们热敷。文档变成复制粘贴。' },
                consequence: { en: '💸 Burnout & Churn. Revenue goes up initially. But patients realize they are just numbers and leave. You burn out in 6 months and quit rehabilitation entirely. Short-term gain, long-term ruin.', th: '💸 หมดไฟและคนหาย! รายได้พุ่งตอนแรก แต่คนไข้รู้ตัวว่าเป็นแค่ตัวเลขเลยเลิกมา คุณหมดไฟใน 6 เดือนแล้วลาออกจากวงการกายภาพไปเลย ได้สั้นเสียยาว', zh: '💸 倦怠与流失。收入最初上升。但病人意识到他们只是数字并离开。你在6个月内倦怠并完全退出康复行业。短期收益，长期毁灭。' },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: -10 }
            },
            {
                id: 'B',
                text: { en: '📊 The Value Proposition: "I can\'t do 4/hr safely. But, I propose we start a \'Premium Performance\' cash-based hour for athletes at $150. I\'ll market it. Give me 3 months."', th: '📊 ข้อเสนอเพิ่มมูลค่า: "ผมดู 4 คนไม่ไหวครับมันไม่ปลอดภัย แต่ผมเสนอให้เปิดคอร์ส \'Premium Performance\' จ่ายสดสำหรับนักกีฬา $150 เดี๋ยวผมทำการตลาดเอง ขอเวลา 3 เดือน"', zh: '📊 价值主张：“我无法安全地每小时看4个。但是，我建议我们为运动员推出每小时150美元的‘高级表现’现金项目。我会进行营销。给我3个月。”' },
                consequence: { en: '✅ Intrapreneurship! The boss listens. You build a lucrative niche within the clinic. You see fewer patients for more money. You saved your job and your standards.', th: '✅ ผู้ประกอบการภายใน! หัวหน้าฟัง คุณสร้างช่องทางทำเงินใหม่ในคลินิก ดูคนไข็น้อยลงแต่ได้เงินเยอะขึ้น รักษาทั้งงานและมาตรฐานไว้ได้', zh: '✅ 内部创业！老板听进去了。你在诊所内建立了一个利润丰厚的利基市场。你看的病人更少，赚的钱更多。你保住了工作和标准。' },
                stats: { competence: 70, ethics: 70, leadership: 80, innovation: 90 }
            },
            {
                id: 'C',
                text: { en: '🚪 Walk Away: "My license is not for sale. I quit." You leave without a backup plan.', th: '🚪 เดินออกมา: "ใบประกอบผมไม่ได้มีไว้ขาย ผมลาออก" คุณเดินออกมาโดยไม่มีแผนสำรอง', zh: '🚪 一走了之：“我的执照是非卖品。我不干了。”你在没有备选计划的情况下离开。' },
                consequence: { en: '📉 Moral Victory, Financial Loss. You are unemployed for 2 months. However, you eventually find a boutique clinic that values quality. It was a rough transition, but you sleep well at night.', th: '📉 ชนะใจแต่ไปไม่รอด(ช่วงแรก)! คุณตกงาน 2 เดือน แต่สุดท้ายก็หาคลินิกเล็กๆ ที่เน้นคุณภาพได้ เป็นช่วงเปลี่ยนผ่านที่ยากลำบาก แต่นอนหลับฝันดีทุกคืน', zh: '📉 道德胜利，经济损失。你失业了2个月。然而，你最终找到了一家重视质量的精品诊所。过渡期很艰难，但你晚上睡得很香。' },
                stats: { competence: 50, ethics: 90, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'pt_009',
        text: {
            en: '👶 The Pediatric Dilemma: You are treating a 6-year-old with cerebral palsy. The father is pushy and demands you use a "cutting-edge" vibration therapy he saw on TikTok, which has no clinical evidence for children. He threatens to stop all therapy if you don\'t comply.',
            th: '👶 ภาวะกลืนไม่เข้าคายไม่ออกในเด็ก: คุณกำลังรักษาเด็กวัย 6 ขวบที่เป็นสมองพิการ พ่อเด็กเร่งเร้าและต้องการให้คุณใช้ "การบำบัดด้วยการสั่นสะเทือน" ที่เขาเห็นใน TikTok ซึ่งไม่มีหลักฐานทางคลินิกสำหรับเด็ก เขาขู่ว่าจะหยุดการบำบัดทั้งหมดหากคุณไม่ยอมทำตาม',
            zh: '👶 语言康复困境：你正在治疗一名患有脑性瘫痪的6岁儿童。父亲非常急躁，要求你使用他在TikTok上看到的“尖端”振动疗法，而该疗法没有任何针对儿童的临床证据。他威胁说如果你不从，就停止所有治疗。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤝 The Compromise: "We won\'t replace our proven methods, but we can trial the vibration for 5 minutes at the end of sessions IF you help me track specific data points to see if it\'s actually working."', th: '🤝 การประนีประนอม: "เราจะไม่แทนที่วิธีการที่ได้รับการพิสูจน์แล้วของเรา แต่เราสามารถทดลองใช้การสั่นสะเทือนเป็นเวลา 5 นาทีในช่วงท้ายของการรักษาก็ต่อเมื่อคุณช่วยผมบันทึกข้อมูลเพื่อดูว่าได้ผลจริงหรือไม่"', zh: '🤝 妥协：“我们不会取代经证明有效的方法，但如果你能帮我记录特定数据点以观察它是否真的有效，我们可以在课程结束时试用5分钟振动疗法。”' },
                consequence: { en: '✅ Collaborative Win. The father feels heard and stays in the program. After 1 month, the data shows zero improvement from vibration. He admits defeat and lets you double down on proven neuro-developmental techniques.', th: '✅ ชนะใจด้วยความร่วมมือ! พ่อเด็กรู้สึกว่าได้รับการรับฟังและอยู่ในการรักษาต่อ หลังจากผ่านไป 1 เดือน ข้อมูลแสดงให้เห็นว่าการสั่นสะเทือนไม่ได้ช่วยอะไรเลย เขายอมรับความพ่ายแพ้และให้คุณเน้นเทคนิคทางระบบประสาทที่พิสูจน์แล้วอย่างเต็มที่', zh: '✅ 合作共赢。父亲感到被听取了意见并继续留在了计划中。一个月后，数据显示振动疗法没有任何改善。他承认失败，并让你加倍投入于经证实的神经发育技术。' },
                stats: { competence: 60, ethics: 70, leadership: 60, innovation: 40 }
            },
            {
                id: 'B',
                text: { en: '🛡️ Evidence-Based Hardline: "I will not perform unproven treatments on a minor. It is my ethical duty to protect your child from potentially harmful or useless interventions. I\'m happy to discuss the research with you."', th: '🛡️ ยืนหยัดตามหลักฐานวิจัย: "ผมจะไม่ทำการรักษาที่ไม่ได้รับการพิสูจน์กับเด็ก หน้าที่ตามจรรยาบรรณของผมคือการปกป้องลูกของคุณจากการรักษาที่อาจเป็นอันตรายหรือไร้ประโยชน์ ผมยินดีที่จะหารืองานวิจัยกับคุณ"', zh: '🛡️ 基于证据的强硬立场：“我不会对未成年人进行未经证实的治疗。保护您的孩子免受潜在有害或无用干预是我的道德职责。我很高兴与您讨论相关研究。”' },
                consequence: { en: '⚠️ Relationship Rupture. The father pulls the child from the clinic. The child loses 3 months of progress before the mother overrides him and returns. You were right, but the child suffered the gap in care.', th: '⚠️ ความสัมพันธ์พังพินาศ! พ่อพาเด็กออกจากคลินิก เด็กสูญเสียความก้าวหน้าไป 3 เดือนก่อนที่แม่จะคัดค้านและพาเขากลับมา คุณทำสิ่งที่ถูกต้อง แต่เด็กต้องทรมานจากช่วงเวลาที่ขาดการรักษา', zh: '⚠️ 关系破裂。父亲把孩子带离了诊所。在母亲推翻他的决定并带孩子康复之前，孩子失去了3个月的进度。你是正确的，但孩子却遭受了护理中断的痛苦。' },
                stats: { competence: 50, ethics: 90, leadership: 40, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_010',
        text: {
            en: '🏠 Home Health Safety: You enter a low-income patient\'s home and see multiple trip hazards (loose rugs, wires) and zero grab bars in the bathroom. The patient has already fallen twice this month. He tells you "I can\'t afford to fix any of this, just help me walk."',
            th: '🏠 ความปลอดภัยในการรักษาที่บ้าน: คุณเข้าไปในบ้านของคนไข้ที่มีรายได้น้อยและพบจุดเสี่ยงที่จะทำให้ล้มหลายแห่ง (พรมที่หลวม, สายไฟ) และไม่มีราวจับในห้องน้ำเลย คนไข้ล้มมาแล้วสองครั้งในเดือนนี้ เขาบอกคุณว่า "ผมไม่มีเงินซ่อมหรอก ช่วยให้ผมเดินได้ก็พอ"',
            zh: '🏠 居家康复安全：你进入一名低收入患者的家中，看到多处绊倒隐患（松动的地毯、电线），浴室里没有任何扶手。患者本月已经摔倒两次。他告诉你：“我没钱修这些，只要帮我练习走路就好。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛠️ Resourceful Advocate: Spend 30 minutes of your session calling local charities or "Rebuilding Together" to find free home modifications. Tape down the rugs with duct tape yourself.', th: '🛠️ ผู้สนับสนุนที่ชาญฉลาด: ใช้เวลา 30 นาทีของการรักษาโทรหาการกุศลในท้องถิ่นเพื่อหาคนมาปรับปรุงบ้านให้ฟรี ใช้เทปกาวติดพรมให้แน่นด้วยตัวเอง', zh: '🛠️ 资源丰富的提倡者：花30分钟拨打当地慈善机构或“共同重建”组织的电话，寻求免费的房屋改造。亲自动手用强力胶带固定好地毯。' },
                consequence: { en: '✅ Fall Risk Reduced. A local non-profit installs bars next week. The patient doesn\'t fall again. You acted as both a therapist and a social worker. Total success.', th: '✅ ลดความเสี่ยงในการล้มสำเร็จ! องค์กรไม่แสวงหาผลกำไรในท้องถิ่นเข้ามาติดตั้งราวจับให้ในอาทิตย์ถัดมา คนไข้ไม่ล้มอีกเลย คุณทำหน้าที่เป็นทั้งนักกายภาพและนักสังคมสงเคราะห์ในเวลาเดียวกัน', zh: '✅ 跌倒风险降低。当地的一家非营利组织下周安装了扶手。患者没有再摔倒。你同时充当了治疗师和社会工作者的角色。圆满成功。' },
                stats: { competence: 50, ethics: 80, leadership: 70, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '🚶 Focus on Mobility: "I understand. Let\'s practice your gait and balance so you can navigate these hazards better since they aren\'t going anywhere."', th: '🚶 เน้นที่การเคลื่อนไหว: "ผมเข้าใจครับ เรามาฝึกการเดินและการทรงตัวกัน เพื่อให้คุณสามารถจัดการกับจุดเสี่ยงเหล่านี้ได้ดีขึ้นในเมื่อมันยังแก้ไม่ได้"', zh: '🚶 专注于移动性：“我明白。让我们练习步态和平衡，这样既然这些隐患无法消除，你也能更好地应对它们。”' },
                consequence: { en: '⚠️ The Inevitable Fall. Despite better balance, the patient trips over a wire at 3 AM. He breaks his hip. You followed orders but ignored the environmental reality.', th: '⚠️ การล้มที่หลีกเลี่ยงไม่ได้! แม้จะทรงตัวได้ดีขึ้น แต่คนไข้ก็ยังสะดุดสายไฟตอนตี 3 จนสะโพกหัก คุณทำตามคำสั่งแต่เพิกเฉยต่อความเป็นจริงของสภาพแวดล้อม', zh: '⚠️ 不可避免的摔倒。尽管平衡能力有所提高，患者还是在凌晨3点被电线绊倒。他的髋部骨折了。你听从了指令，但忽视了环境现实。' },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_011',
        text: {
            en: '📱 The Viral Opportunity: A client with 2 million followers on Instagram offers to tag your clinic and give you a shoutout if you give them 10 sessions of "luxury sports massage" and "cupping" for free. They don\'t actually have an injury.',
            th: '📱 โอกาสเป็นไวรัล: คนไข้ที่มีผู้ติดตาม 2 ล้านคนใน Instagram เสนอที่จะแท็กคลินิกของคุณและโปรโมทให้ หากคุณนวด "นวดกีฬาแบบหรูหรา" และ "ครอบแก้ว" ให้ฟรี 10 ครั้ง โดยที่จริงๆ แล้วเขาไม่ได้บาดเจ็บอะไรเลย',
            zh: '📱 走红机会：一名在Instagram上拥有200万粉丝的客户提议，如果你免费为他们提供10次“豪华运动按摩”和“拔罐”，就在网上标注你的诊所并为你大肆宣传。他们其实并没有受伤。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚀 Acceptance for Marketing: "It\'s a marketing investment. 10 free sessions for millions of views is cheaper than a billboard. Let\'s do it."', th: '🚀 ยอมรับเพื่อการตลาด: "มันคือการลงทุนทางการตลาด การนวดฟรี 10 ครั้งแลกกับการเห็นเป็นล้านครั้งนั้นถูกกว่าป้ายบิลบอร์ดอีก ทำเลย"', zh: '🚀 接受营销：“这是一种营销投资。用10次免费课程换取数百万次的曝光比广告牌更便宜。干吧。”' },
                consequence: { en: '📈 Business Booms, Soul Shrinks. You get 500 new inquiries, but they all want "luxury spa treatment," not medical PT. Your clinic looks like a gym for influencers. Real patients start feeling neglected.', th: '📈 ธุรกิจรุ่งเรืองแต่จิตวิญญาณหดหาย! คุณได้รับการติดต่อใหม่ 500 ราย แต่ทุกคนต้องการ "สปาสุดหรู" ไม่ใช่นักกายภาพบำบัด คลินิกของคุณดูเหมือนยิมสำหรับอินฟลูเอนเซอร์ คนไข้ที่เจ็บป่วยจริงๆ เริ่มรู้สึกว่าถูกละเลย', zh: '📈 业务激增，灵魂缩减。你收到了500个新咨询，但他们都想要“豪华SPA待遇”，而不是医疗理疗。你的诊所看起来像是个网红健身房。真正的患者开始感到被忽视。' },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: { en: '🚫 Politely Decline: "I appreciate the offer, but as a medical facility, we allocate our sessions based on clinical necessity. I\'d be happy to treat you if you develop a specific injury at our standard rate."', th: '🚫 ปฏิเสธอย่างสุภาพ: "ขอบคุณสำหรับข้อเสนอครับ แต่ในฐานะสถานพยาบาล เราจัดสรรการรักษาตามความจำเป็นทางคลินิก ผมยินดีจะรักษาคุณหากคุณมีการบาดเจ็บเฉพาะทางในอัตราปกติของเรา"', zh: '🚫 委婉拒绝：“很感激您的提议，但作为医疗机构，我们根据临床必要性来分配疗程。如果您真的受了伤，我很乐意按标准费率为您的特定伤病进行治疗。”' },
                consequence: { en: '✅ Ethical Integrity. You lose the viral fame, but your colleagues respect you. You maintain the status of a medical professional rather than a service worker. Your core patient base of elderly and post-op feels safe with you.', th: '✅ ความซื่อสัตย์ในวิชาชีพ! คุณเสียโอกาสที่จะโด่งดัง แต่เพื่อนร่วมงานเคารพคุณ คุณยังคงสถานะผู้เชี่ยวชาญทางการแพทย์มากกว่าพนักงานบริการ กลุ่มคนไข้หลักของคุณทั้งผู้สูงอายุและคนไข้หลังผ่าตัดรู้สึกมั่นใจในตัวคุณ', zh: '✅ 道德正直。你失去了走红的机会，但你的同事们都很尊敬你。你保持了医疗专业人士而非服务业人员的地位。核心患者群（老年人和术后患者）和你在一起感到很安全。' },
                stats: { competence: 50, ethics: 90, leadership: 60, innovation: 10 }
            }
        ]
    },

    {
        id: 'pt_012',
        text: {
            en: '⚖️ The Over-Billing Pressure: Your billing manager shows you that using the "Neuro-Rehab" code (higher reimbursement) instead of "Therapeutic Exercise" for your stroke patients would increase revenue by 30%. Technically, it\'s a grey area, but you\'re mostly doing exercise.',
            th: '⚖️ แรงกดดันจากการเรียกเก็บเงินเกินจริง: ผู้จัดการฝ่ายบัญชีแสดงให้คุณเห็นว่าหากใช้รหัส "การฟื้นฟูระบบประสาท" (ซึ่งเบิกได้สูงกว่า) แทน "การออกกำลังกายเพื่อการบำบัด" สำหรับคนไข้สโตรก จะทำให้รายได้เพิ่มขึ้น 30% ทางเทคนิคแล้วมันเป็นพื้นที่สีเทา แต่จริงๆ แล้วคุณเน้นแค่การออกกำลังกาย',
            zh: '⚖️ 过度计费压力：你的财务经理告诉你，如果对中风患者使用“神经康复”代码（报销更高）而不是“治疗性练习”，收入将增加30%。从技术上讲这是一个灰色地带，但你实际上主要是在做练习。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✍️ Maximize Revenue: "If they had a stroke, it IS neuro-rehab. Change the codes. We need the money to buy that new treadmill anyway."', th: '✍️ เพิ่มรายได้สูงสุด: "ถ้าเขาเป็นสโตรก มันก็คือการฟื้นฟูระบบประสาทนั่นแหละ เปลี่ยนรหัสเลย เราต้องการเงินไปซื้อลู่วิ่งใหม่อยู่แล้ว"', zh: '✍️ 收入最大化：“如果他们中风了，那就是神经康复。更改代码。反正我们需要钱买那台新的跑步机。”' },
                consequence: { en: '💀 Audit Nightmare. Two years later, Medicare performs an audit. They determine your documentation doesn\'t support the high-level code. You are fined $50,000 and the clinic is banned from taking government insurance.', th: '💀 ฝันร้ายจากการตรวจสอบ! สองปีต่อมา หน่วยงานรัฐเข้ามาตรวจสอบ พวกเขาตัดสินว่าเอกสารของคุณไม่สอดคล้องกับรหัสระดับสูง คุณถูกปรับ 1,500,000 บาท และคลินิกถูกแบนจากการเบิกประกันของรัฐ', zh: '💀 审计噩梦。两年后，医疗保险机构进行审计。他们认定你的文档不支持高级别代码。你被罚款5万美元，诊所被禁止参加政府保险。' },
                stats: { competence: 30, ethics: -70, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🛡️ Honest Billing: "Only bill for exactly what we did. If I spend 30 minutes on balance/walking, it\'s therapeutic exercise. I won\'t risk an audit for 30% revenue."', th: '🛡️ การเรียกเก็บเงินที่ซื่อสัตย์: "เรียกเก็บเฉพาะสิ่งที่ทำจริงๆ เท่านั้น ถ้าผมใช้เวลา 30 นาทีไปกับการทรงตัว/การเดิน มันก็คือการออกกำลังกายเพื่อการบำบัด ผมจะไม่เสี่ยงโดนตรวจสอบเพื่อรายได้ 30%"', zh: '🛡️ 诚实计费：“只按实际操作计费。如果我花30分钟做平衡/走路训练，那就是治疗性练习。我不会为了30%的收入冒审计风险。”' },
                consequence: { en: '✅ Long-Term Safety. You pass a random audit with flying colors months later. Your clinical reputation is "bulletproof." Profit is lower, but the business is sustainable and ethical.', th: '✅ ความปลอดภัยระยะยาว! หลายเดือนต่อมาคุณผ่านการตรวจสอบแบบสุ่มได้อย่างฉลุย ชื่อเสียงทางคลินิกของคุณ "แกร่งดั่งหิน" กำไรอาจจะน้อยกว่า แต่ธุรกิจยั่งยืนและถูกต้องตามจรรยาบรรณ', zh: '✅ 长期安全。几个月后，你以优异成绩通过了随机审计。你的临床声誉是“无懈可击”的。利润虽然较低，但业务是可持续且合乎道德的。' },
                stats: { competence: 60, ethics: 100, leadership: 50, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_013',
        text: {
            en: '🤕 The Concussion Protocol: A local high school star athlete has a concussion. The parents want her to play in the regional qualifiers Friday. She "passes" your basic balance test but complains of a slight headache when the lights are bright. If you clear her, the school gives you a consulting contract.',
            th: '🤕 โปรโตคอลการกระทบกระเทือนทางสมอง: นักเรียนดีเด่นนักกีฬาในท้องถิ่นมีอาการสมองกระทบกระเทือน พ่อแม่ต้องการให้เธอลงแข่งในรอบคัดเลือกระดับภูมิภาคในวันศุกร์นี้ เธอ "ผ่าน" การทดสอบการทรงตัวพื้นฐานของคุณ แต่บ่นว่าปวดหัวนิดหน่อยตอนเจอแสงจ้า หากคุณเซ็นให้ผ่าน โรงเรียนจะจ้างคุณเป็นที่ปรึกษา',
            zh: '🤕 脑震荡协议：当地一名高中明星运动员患有脑震荡。父母希望她参加周五的地区预选赛。她通过了你的基础平衡测试，但在强光下抱怨轻微头痛。如果你让她上场，学校会给你一份咨询合同。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🧱 Deny Clearance: "Headaches in bright light are a red flag for ongoing concussion. She stays out until 100% asymptomatic during exertion. Contract or no contract, I won\'t risk her brain."', th: '🧱 ปฏิเสธการเช็คผ่าน: "อาการปวดหัวตอนเจอแสงจ้าคือสัญญาณอันตรายของสมองกระทบกระเทือนที่ยังไม่หายดี เธอต้องพักจนกว่าจะไม่มีอาการเลยตอนออกแรง ต่อให้จะมีสัญญาหรือไม่มี ผมก็จะไม่เสี่ยงกับสมองของเด็ก"', zh: '🧱 拒绝过关：“强光下的头痛是脑震荡未愈的危险信号。在运动过程中100%无症状之前，她必须停赛。管它有没有合同，我不会拿她的大脑冒险。”' },
                consequence: { en: '✅ Ethical Victory. You lose the school contract to a less scrupulous clinic. However, the girl collapses during a gym class a week later - proving the concussion was severe. You saved her from a potentially fatal Second Impact Syndrome.', th: '✅ ชัยชนะแห่งจรรยาบรรณ! คุณเสียสัญญาของโรงเรียนให้คลินิกที่เห็นแก่เงินมากกว่า แต่อีกหนึ่งสัปดาห์ต่อมา เด็กสาวคนนั้นหน้ามืดล้มลงในห้องยิม ซึ่งพิสูจน์ว่าสมองกระทบกระเทือนรุนแรงจริง คุณช่วยเธอจากกลุ่มอาการสมองได้รับความกระทบกระเทือนซ้ำซ้อนที่อาจถึงแก่ชีวิตได้', zh: '✅ 道德胜利。你把学校合同弄丢给了一家没那么正直的诊所。然而，一周后女孩在体育课上晕倒了——这证明脑震荡确实很严重。你救了她，使她免于潜在致命的“第二次冲击综合征”。' },
                stats: { competence: 70, ethics: 100, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🤝 The "Aggressive" Return: "I\'ll clear her but provide a strict headband and tell the coach to limit her minutes. It\'s better than her playing behind my back without supervision."', th: '🤝 การกลับมาแบบ "เชิงรุก": "ผมจะเซ็นให้ผ่านแต่ต้องใส่อุปกรณ์ป้องกันศีรษะและบอกโค้ชให้จำกัดเวลาลงเล่น มันดีกว่าปล่อยให้เธอแอบไปเล่นลับหลังผมโดยไม่มีคนดูแล"', zh: '🤝 “积极”回归：“我会让她过关，但要提供严格的头带，并告诉教练限制她的上场时间。总比她背着我悄悄上场而没有监管要好。”' },
                consequence: { en: '💀 Disastrous Outcome. She takes a minor hit during the game. Due to the unhealed brain, she suffers permanent cognitive impairment. The parents sue you for negligence. You lose your license. Never compromise on brain health.', th: '💀 ผลลัพธ์ที่หายนะ! เธอโดนกระแทกนิดเดียวระหว่างเกม แต่เพราะสมองยังไม่หายดี เธอจึงมีความพิการทางสมองถาวร พ่อแม่ฟ้องคุณฐานประมาทเลินเล่อ คุณเสียใบประกอบวิชาชีพ อย่าประนีประนอมกับเรื่องสมองเด็ดขาด', zh: '💀 灾难性后果。她在比赛中受到了轻微撞击。由于大脑未愈，她遭受了永久性的认知障碍。父母起诉你过失。你失去了执照。绝对不要在大脑健康问题上妥协。' },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_014',
        text: {
            en: '🏥 The Burnout Outbreak: 3 of your senior PT assistants just quit due to the high patient load. You are now the only therapist for 40 patients. You can either cancel half the appointments (huge revenue loss) or treat groups of 3 patients at a time.',
            th: '🏥 การแพร่ระบาดของความหมดไฟ: ผู้ช่วยนักกายภาพอาวุโส 3 คนเพิ่งลาออกเพราะรับภาระคนไข้ไม่ไหว ตอนนี้คุณเป็นนักกายภาพเพียงคนเดียวที่ต้องดูแลคนไข้ 40 คน คุณสามารถยกเลิกนัดครึ่งหนึ่ง (เสียรายได้มหาศาล) หรือรักษาคนไข้เป็นกลุ่มครั้งละ 3 คน',
            zh: '🏥 倦怠爆发：由于由于患者负荷过重，你的3名资深理疗助理刚刚辞职。现在你是40名患者唯一的治疗师。你可以取消一半的预约（巨大的收入损失），或者一次带3名患者进行小组治疗。'
        },
        options: [
            {
                id: 'A',
                text: { en: '👥 Group Therapy Pivot: "We are switching to evidence-based group classes for 2 weeks. Every session is now a stability/proprioception circuit. I can watch 3 of you at once safely."', th: '👥 เปลี่ยนเป็นบำบัดกลุ่ม: "เราจะเปลี่ยนไปใช้วิธีบำบัดแบบกลุ่มตามหลักฐานวิจัยเป็นเวลา 2 สัปดาห์ ทุกเซสชั่นจะเป็นการฝึกความมั่นคงและการรับรู้ตำแหน่งข้อต่อ ผมสามารถดูแลพวกคุณ 3 คนพร้อมกันได้อย่างปลอดภัย"', zh: '👥 转向小组治疗：“我们要临时转向为期两周的循证小组课程。每节课现在都是稳定性/本体感觉循环训练。我可以同时安全地观察你们三个人。”' },
                consequence: { en: '✅ Innovation Under Pressure. To your surprise, the patients love the social aspect. They encourage each other. Revenue stays stable. You eventually hire more staff, but you keep the group classes as a permanent high-profit feature.', th: '✅ นวัตกรรมภายใต้แรงกดดัน! คุณต้องแปลกใจที่คนไข้ชอบการเข้าสังคมแบบนี้ พวกเขาให้กำลังใจกันเอง รายได้ยังคงคงที่ ท้ายที่สุดคุณจ้างพนักงานเพิ่มได้ แต่คุณยังเก็บคลาสกลุ่มไว้เป็นจุดเด่นที่ทำกำไรสูงถาวร', zh: '✅ 压力下的创新。令你惊讶的是，患者非常喜欢社交环节。他们互相鼓励。收入保持稳定。你最终雇佣了更多员工，但你将小组课程保留为永久性的高利润特色。' },
                stats: { competence: 60, ethics: 60, leadership: 80, innovation: 90 }
            },
            {
                id: 'B',
                text: { en: '🚫 Mass Cancellation: "The quality of care would be unacceptable. Cancel 20 appointments per day. We will reschedule them when we have staff. Patients come first, not the bottom line."', th: '🚫 ยกเลิกนัดขนานใหญ่: "คุณภาพการรักษาจะรับไม่ได้หากทำแบบนั้น ยกเลิกนัดวันละ 20 ราย เราจะนัดใหม่เมื่อมีพนักงานพร้อม คนไข้ต้องมาก่อน ไม่ใช่ตัวเลขรายได้"', zh: '🚫 大规模取消：“这种情况下护理质量是不可接受的。每天取消20个预约。等我们有了人手再重新安排。患者第一，而不是财务收益。”' },
                consequence: { en: '⚠️ Financial Strain. The clinic barely makes rent this month. Some patients are furious and leave for competitors. However, the ones who stay trust you implicitly. It was a moral victory but a business nightmare.', th: '⚠️ ความตึงเครียดทางการเงิน! คลินิกแทบไม่มีเงินจ่ายค่าเช่าเดือนนี้ คนไข้บางคนโกรธและไปหาคู่แข่ง แต่คนที่ยังอยู่นั้นเชื่อมั่นในตัวคุณอย่างที่สุด มันคือชัยชนะทางศีลธรรมแต่เป็นฝันร้ายทางธุรกิจ', zh: '⚠️ 财务拮据。这个月诊所差点付不起房租。一些患者感到愤怒并流向了竞争对手。然而，留下来的患者绝对信任你。这是一次道德上的胜利，但却是商业上的噩梦。' },
                stats: { competence: 40, ethics: 90, leadership: 50, innovation: 10 }
            }
        ]
    },

    {
        id: 'pt_015',
        text: {
            en: '🤖 The Robotic Rehab: A startup offers you a free $100k exoskeleton to trial in your gait clinic. It looks cool and attracts high-paying private pay clients. However, the research suggests it\'s no more effective than a $10 gait belt and standard manual assistance.',
            th: '🤖 การฟื้นฟูด้วยหุ่นยนต์: สตาร์ทอัพเสนอชุดหุ่นยนต์ exoskeleton มูลค่า 3,000,000 บาทให้คุณใช้ฟรีในคลินิกฝึกเดิน มันดูเท่และดึงดูดคนไข้กระเป๋าหนักที่จ่ายสด แต่ผลวิจัยบอกว่ามันไม่ได้ผลดีไปกว่าสายรัดฝึกเดินราคา 300 บาทและการช่วยเหลือด้วยมือมาตรฐานเลย',
            zh: '🤖 机器人康复：一家初创公司向你提供价值10万美元的免费外骨骼，供你在步态诊所试用。它看起来很酷，能吸引高薪的私人付费客户。然而，研究表明它的效果并不比10美元的步态皮带和标准的人工辅助更好。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚀 Adopt for Prestige: "Innovation isn\'t just about outcomes, it\'s about perception. Using high-tech tools makes patients believe more in their recovery (placebo effect) and boosts our brand."', th: '🚀 รับมาเพื่อเสริมบารมี: "นวัตกรรมไม่ได้เป็นแค่เรื่องของผลลัพธ์ แต่มันคือเรื่องของการรับรู้ การใช้เครื่องมือไฮเทคทำให้คนไข้เชื่อมั่นในความใจฟื้นตัวมากขึ้น (ผลของยาหลอก) และสร้างแบรนด์ของเรา"', zh: '🚀 为了声望而采用：“创新不仅仅关乎结果，还关乎认知。使用高科技工具能让患者更相信自己的康复（安慰剂效应），并提升我们的品牌。”' },
                consequence: { en: '📈 Marketing Success. Your private pay revenue doubles. You are featured in local news. Ironically, outcomes stay the same, but patient satisfaction scores skyrocket. You traded clinical pragmatism for business growth.', th: '📈 ความสำเร็จทางการตลาด! รายได้จากการจ่ายสดเพิ่มขึ้นเป็นสองเท่า คุณได้รับการนำเสนอในข่าวท้องถิ่น เป็นเรื่องตลกที่ผลลัพธ์การรักษายังเท่าเดิม แต่คะแนนความพึงพอใจคนไข้พุ่งกระฉูด คุณแลกความจริงจังทางคลินิกกับการเติบโตทางธุรกิจ', zh: '📈 营销成功。你的私人付费收入翻了一番。当地新闻报道了你。讽刺的是，治疗结果保持不变，但患者满意度评分飙升。你用临床实用主义换取了业务增长。' },
                stats: { competence: 40, ethics: 50, leadership: 60, innovation: 100 }
            },
            {
                id: 'B',
                text: { en: '🙅 Decline & Education: "Clients are paying for my expertise, not expensive gadgets. I\'d rather spend that trial time perfecting our manual therapy protocols and functional strength work."', th: '🙅 ปฏิเสธและให้ความรู้: "คนไข้จ่ายเงินเพื่อความเชี่ยวชาญของผม ไม่ใช่เพื่ออุปกรณ์ราคาแพง ผมขอใช้เวลาทดลองนั้นไปกับการปรับปรุงโปรโตคอลการนวดบำบัดและการฝึกความแข็งแรงเพื่อการใช้งานจริงดีกว่า"', zh: '🙅 拒绝并教育：“客户支付的是我的专业知识，而不是昂贵的设备。我宁愿把试用时间花在完善我们的手动治疗协议和功能性力量训练上。”' },
                consequence: { en: '✅ Clinical Purity. You stay focused on what works. Some tech-hungry clients go elsewhere, but your referral sources (surgeons) send you more cases because they trust your no-nonsense, evidence-based approach.', th: '✅ ความบริสุทธิ์ทางคลินิก! คุณโฟกัสกับสิ่งที่ได้ผลจริง คนไข้ที่บ้าเทคโนโลยีบางรายอาจไปที่อื่น แต่แหล่งส่งต่อคนไข้ (หมอผ่าตัด) ส่งเคสให้คุณมากขึ้น เพราะเขาเชื่อมั่นในวิธีการที่เน้นหลักฐานวิจัยและไม่ไร้สาระของคุณ', zh: '✅ 临床纯洁。你专注于有效的方法。一些渴望技术的客户去了别处，但你的转诊来源（外科医生）会给你更多的案例，因为他们信任你那务实、基于证据的方法。' },
                stats: { competence: 80, ethics: 90, leadership: 40, innovation: -20 }
            }
        ]
    },

    {
        id: 'pt_016',
        text: {
            en: '💼 The Side-Gig Trap: You start a "Performance Coaching" business on weekends using the same equipment in your employer\'s clinic. You haven\'t asked permission. You treat 3 of your existing clinic patients there for cash at a lower price than their insurance copay.',
            th: '💼 กับดักงานเสริม: คุณเริ่มธุรกิจ "โค้ชเตรียมความพร้อมร่างกาย" ในวันเสาร์อาทิตย์โดยใช้เครื่องมือชิ้นเดียวกันในคลินิกของนายจ้าง คุณยังไม่ได้ขออนุญาต และคุณรักษาคนไข้เดิมของคลินิก 3 คนที่นั่นเป็นเงินสดในราคาที่ถูกกว่าค่าส่วนต่างที่เขาต้องจ่ายประกัน',
            zh: '💼 副业陷阱：你开始利用雇主诊所的设备在周末经营“表现教练”业务。你没有请求许可。你以低于保险自付额的现金价格，在那里治疗了3名诊所现有的患者。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤫 Keep it Quiet: "It\'s my extra time and my skills. The clinic wasn\'t using the space anyway. I\'m helping patients save money. No harm, no foul."', th: '🤫 ทำเงียบๆ ไป: "มันคือเวลาว่างและทักษะของผม คลินิกก็ไม่ได้ใช้พื้นที่อยู่แล้ว ผมช่วยคนไข้ประหยัดเงินนะ ไม่เสียหายอะไร"', zh: '🤫 保持沉默：“这是我的额外时间和我的技能。反正诊所当时也没用那个空间。我在帮患者省钱。没害处，也没犯规。”' },
                consequence: { en: '💀 Professional Suicide. Your boss checks the security cameras. You are fired immediately for "Theft of Services" and "Breach of Non-Compete." They report you to the licensing board. Your career is effectively over.', th: '💀 ฆ่าตัวตายในหน้าที่! หัวหน้าเช็คกล้องวงจรปิด คุณถูกไล่ออกทันทีฐาน "ขโมยการใช้บริการ" และ "ละเมิดสัญญาไม่แข่งขัน" เขาแจ้งเรื่องไปยังสภาวิชาชีพ อาชีพคุณจบเห่ทันที', zh: '💀 职业自杀。你的老板查看了监控。你因“盗窃服务”和“违反竞业禁止协议”被立即解雇。他们把你举报给了执照委员会。你的职业生涯实际上结束了。' },
                stats: { competence: 40, ethics: -100, leadership: -50, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤝 Official Partnership: "Stop the side gig. Pitch the idea to the owner as a new \'Cash Pay Wellness\' wing of the clinic where you get 60% of the revenue. Do it the right way."', th: '🤝 หุ้นส่วนอย่างเป็นทางการ: "หยุดงานเสริมนั้นเสีย แล้วเอาไอเดียไปเสนอกับเจ้าของในฐานะแผนก \'Cash Pay Wellness\' ใหม่ของคลินิก โดยคุณขอแบ่งรายได้ 60% ทำในสิ่งที่ถูกต้อง"', zh: '🤝 正式合作伙伴：停止副业。向老板提议将此作为一个新的“现金支付健康”部门，你可以获得60%的收入。用正确的方式去做。' },
                consequence: { en: '✅ Successful Expansion. The owner loves the initiative. You now have a legal, high-earning business without the fear of getting caught. You show leadership by growing the practice.', th: '✅ การขยายตัวที่ประสบความสำเร็จ! เจ้าของชอบความริเริ่มนี้ ตอนนี้คุณมีธุรกิจที่ถูกกฎหมายและทำรายได้สูงโดยไม่ต้องกลัวโดนจับ คุณแสดงความเป็นผู้นำโดยการทำให้คลินิกเติบโต', zh: '✅ 成功业务扩张。老板喜欢这个提议。你现在拥有一项合法、高收入的业务，而不用担心被抓。你通过扩大业务规模展现了领导力。' },
                stats: { competence: 60, ethics: 80, leadership: 90, innovation: 70 }
            }
        ]
    },

    {
        id: 'pt_017',
        text: {
            en: '👵 The Senior Scam: An elderly patient tells you her "financial advisor" is asking for her bank login to process her medical bills. You suspect she\'s being scammed. Intervening might delay your treatment session and upset her family.',
            th: '👵 การหลอกลวงผู้สูงอายุ: คนไข้สูงอายุบอกคุณว่า "ที่ปรึกษาทางการเงิน" ข้อมูลการเข้าสู่ระบบธนาคารของเธอเพื่อดำเนินการจ่ายบิลค่ารักษา คุณสงสัยว่าเธอกำลังถูกหลอก การเข้าไปก้าวก่ายอาจทำให้การรักษาของคุณล่าช้าและอาจทำให้ครอบครัวเธอไม่พอใจ',
            zh: '👵 老年诈骗：一名老年患者告诉你，她的“财务顾问”要求她提供银行登录信息以处理医疗账单。你怀疑她被骗了。干预可能会耽误你的治疗课并让她的家人不快。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛡️ Protective Intervention: "Listen, I\'ve seen this before. No advisor needs your login. Let\'s call Adult Protective Services or your local police non-emergency line right now. The exercises can wait."', th: '🛡️ การเข้าแทรกแซงเพื่อปกป้อง: "ฟังนะครับ ผมเคยเห็นแบบนี้มาก่อน ไม่มีที่ปรึกษาคนไหนต้องการรหัสเข้าเครื่องคุณหรอก เราโทรหาหน่วยคุ้มครองผู้สูงอายุหรือแจ้งตำรวจตอนนี้เลยดีกว่า การออกกำลังกายรอได้ครับ"', zh: '🛡️ 保护性干预：“听着，我以前见过这种情况。没有顾问需要你的登录信息。我们现在就给成人保护服务机构或当地警方的非紧急线路打电话。练习可以等一等。”' },
                consequence: { en: '✅ Ethical Hero. You stop a scammer from draining her life savings ($80k). The family is incredibly grateful. You gain a reputation for caring about the WHOLE person, not just the body. Your patient flows increase through word of mouth.', th: '✅ ฮีโร่แห่งจรรยาบรรณ! คุณหยุดนักต้มตุ๋นจากการสูบเงินเก็บทั้งชีวิตของเธอ (2,400,000 บาท) ได้ ครอบครัวซาบซึ้งใจมาก คุณได้ชื่อว่าเป็นคนที่ห่วงใยคนทั้งคน ไม่ใช่แค่ร่างกาย คนไข้แห่มาหาคุณจากการบอกต่อ', zh: '✅ 道德英雄。你阻止了一个诈骗者取走她毕生的积蓄（8万美元）。家人非常感激。你赢得了关心“完整的人”而非仅仅是身体的名声。你的口碑也随之变好，转诊量增加。' },
                stats: { competence: 40, ethics: 100, leadership: 80, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🧘 Focus on Therapy: "That sounds complicated! But let\'s focus on your knee. We only have 30 minutes left and we need to hit those goals for insurance to keep paying."', th: '🧘 เน้นที่การบำบัด: "นั่นฟังดูซับซ้อนจังครับ! แต่เรามาเน้นที่เข่ากันก่อนดีกว่า เราเหลือเวลาแค่ 30 นาที และเราต้องทำตามเป้าหมายเพื่อให้ประกันยังจ่ายต่อ"', zh: '🧘 专注于治疗：“那听起来挺复杂的！但让我们专注于你的膝盖。我们只剩30分钟了，我们需要达到目标，以便保险公司继续支付费用。”' },
                consequence: { en: '💔 Tragically Negligent. She loses her life savings. She can no longer afford therapy or her assisted living facility. Her health rapidly declines. You feel the weight of silence. Technically you did your job, but you failed the human.', th: '💔 ความประมาทที่น่าเศร้า! เธอเสียเงินเก็บทั้งชีวิตไป เธอไม่มีเงินพอจะจ้างคนดูแลหรือรับการบำบัดต่อ สุขภาพเธอดิ่งเหวอย่างรวดเร็ว คุณแบกรับน้ำหนักของความเงียบเฉยนั้นไว้ ทางเทคนิคแล้วคุณทำหน้าที่หมอ แต่คุณสอบตกความเป็นคน', zh: '💔 悲剧性的失职。她失去了毕生积蓄。她再也负担不起治疗或辅助生活设施的费用。她的健康状况迅速恶化。你感到了沉默的重压。从技术上讲你完成了工作，但你辜负了一个人。' },
                stats: { competence: 50, ethics: 30, leadership: 10, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_018',
        text: {
            en: '🏃 The "Super-Physio" Ego: You\'ve invented a new manual therapy technique that fixes lower back pain in "one session." You want to patent it and charge $500 per session. Research is still thin, but the results look miraculous in your clinic.',
            th: '🏃 อีโก้ "สุดยอดนักกายภาพ": คุณคิดค้นเทคนิคการนวดบำบัดแบบใหม่ที่แก้ปวดหลังได้ใน "ครั้งเดียว" คุณต้องการจดสิทธิบัตรและคิดค่าบริการครั้งละ 15,000 บาท งานวิจัยยังแทบไม่มี แต่ผลลัพธ์ในคลินิกคุณดูเหมือนปาฏิหาริย์',
            zh: '🏃 “超级理疗师”自尊：你发明了一种新的手法治疗技术，只需“一次见效”就能解决下背痛。你想申请专利，并每节课收费500美元。研究仍然匮乏，但在你的诊所里效果看起来就像奇迹。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💰 Launch and Monetize: "I have the results to prove it. People are suffering NOW. Why wait 10 years for a university study? Let\'s build the brand and get rich while helping people."', th: '💰 เปิดตัวและทำเงิน: "ผมมีผลลัพธ์ที่พิสูจน์ได้ คนกำลังทรมานอยู่ตอนนี้ จะไปรอผลวิจัยจากมหาลัยอีก 10 ปีทำไม? มาสร้างแบรนด์และรวยไปพร้อมกับการช่วยเหลือคนดีกว่า"', zh: '💰 发布并货币化：“我有结果来证明。人们现在就在遭受痛苦。为什么要等大学十年的研究？让我们在帮助人们的同时建立品牌并致富。”' },
                consequence: { en: '🎲 High Risk Gamble. You get rich fast. But a high-profile patient gets injured using your technique. Because there is no peer-reviewed data, you are defenseless in court. You lose everything. Scientific shortcutting has a high price.', th: '🎲 การพนันที่มีความเสี่ยงสูง! คุณรวยเร็วมาก แต่มีคนไข้โปรไฟล์สูงเกิดอาการบาดเจ็บจากเทคนิคของคุณ เพราะไม่มีข้อมูลวิจัยที่มีการรับรอง คุณเลยสู้ในศาลไม่ได้ คุณสูญเสียทุกอย่าง การใช้ทางลัดทางวิทยาศาสตร์มีราคาที่ต้องจ่ายสูงมาก', zh: '🎲 高风险赌博。你很快致富了。但一名知名患者在使用你的技术时受伤了。因为没有同行评审的数据，你在法庭上毫无防备。你失去了一切。科学捷径代价高昂。' },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 100 }
            },
            {
                id: 'B',
                text: { en: '🔬 The Academic Path: "I will partner with a local university for a double-blind study. If it\'s real, it belongs to science. I\'ll wait for the data before I market it as a cure."', th: '🔬 เส้นทางวิชาการ: "ผมจะร่วมมือกับมหาลัยในพื้นที่เพื่อทำการศึกษาแบบ double-blind ถ้ามันได้ผลจริง มันก็ควรเป็นสมบัติของวิทยาศาสตร์ ผมจะรอข้อมูลก่อนจะประกาศว่ามันคือยารักษา"', zh: '🔬 学术道路：“我将与当地大学合作进行双盲研究。如果它是真实的，它就属于科学。在将其作为疗法推向市场之前，我会等待数据支持。”' },
                consequence: { en: '✅ Global Impact. The study confirms 70% success rate. The "YourName Technique" becomes a worldwide standard in textbooks. You don\'t get "get-rich-quick" money, but you become a legend in the field with lifelong royalties and respect.', th: '✅ ผลกระทบระดับโลก! งานวิจัยยืนยันอัตราความสำเร็จ 70% "เทคนิคชื่อของคุณ" กลายเป็นมาตรฐานระดับโลกในตำราเรียน คุณอาจจะไม่ได้เงินแบบรวยเร็วฟ้าผ่า แต่คุณกลายเป็นตำนานในวิชาชีพ พร้อมค่าลิขสิทธิ์และความเคารพไปตลอดชีวิต', zh: '✅ 全球影响力。研究证实了70%的成功率。“[你的名字]技术”成为了教科书中的全球标准。你没有赚到那种“暴富钱”，但你成为了该领域的传奇，享有终身版权费和尊敬。' },
                stats: { competence: 90, ethics: 90, leadership: 70, innovation: 80 }
            }
        ]
    },

    {
        id: 'pt_019',
        text: {
            en: '🏥 The Insurance Limit: A patient with severe mobility issues has reached the visit limit set by their insurance. They still need 8 more sessions for a safe discharge, but they can\'t afford to pay out of pocket. Your clinic manager tells you to "wish them luck and discharge."',
            th: '🏥 ขีดจำกัดประกัน: คนไข้ที่มีปัญหาการเคลื่อนไหวรุนแรงใช้สิทธิ์ประกันจนครบจำนวนครั้งแล้ว เขายังต้องการอีก 8 เซสชั่นเพื่อให้กลับไปใช้ชีวิตได้อย่างปลอดภัย แต่เขาไม่มีเงินจ่ายเอง ผู้จัดการคลินิกบอกคุณว่า "อวยพรให้เขาโชคดีแล้วทำเรื่องจำหน่ายออกซะ"',
            zh: '🏥 保险限制：一名有严重行动问题的患者已达到保险公司规定的就诊次数限制。他们仍需要8次治疗才能安全出院，但他们无力自费支付。你的诊所经理告诉你要“祝他们好运并办理出院”。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤝 Pro Bono Work: "I\'ll treat him for free during my lunch breaks. He shouldn\'t suffer because of a spreadsheet."', th: '🤝 การรักษาฟรี (Pro Bono): "ผมจะรักษาเขาฟรีในช่วงพักเที่ยง เขาไม่ควรต้องทรมานเพราะตัวเลขในแผ่นงานสเปรดชีต"', zh: '🤝 义诊：“我会在午休时间免费为他治疗。他不应该因为电子表格上的数字而受苦。”' },
                consequence: { en: '✅ Ethical Victory. You burn some lunch hours, but the patient reaches his goals. The clinic owner finds out and is impressed by your dedication, though warns you not to make it a habit.', th: '✅ ชัยชนะแห่งจรรยาบรรณ! คุณเสียเวลาพักเที่ยงไปบ้างแต่คนไข้บรรลุเป้าหมาย เจ้าของคลินิกทราบเรื่องและประทับใจในความทุ่มเทของคุณ แม้จะเตือนว่าอย่าทำจนเป็นนิสัย', zh: '✅ 道德胜利。你牺牲了一些午休时间，但患者达到了他的目标。诊所老板发现了这件事，并对你的奉献精神印象深刻，尽管提醒你不要养成习惯。' },
                stats: { competence: 60, ethics: 100, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '📚 Home Program Focus: "I will spend the last 2 sessions creating a bulletproof home exercise video and training his family. It\'s not ideal, but it\'s the best we can do within the system."', th: '📚 เน้นโปรแกรมที่บ้าน: "ผมจะใช้ 2 เซสชั่นสุดท้ายสร้างวิดีโอออกกำลังกายที่บ้านและฝึกครอบครัวเขาไว้ มันอาจไม่สมบูรณ์แบบแต่มันคือสิ่งที่ดีที่สุดที่เราทำได้ภายใต้ระบบนี้"', zh: '📚 居家计划重点：“我将利用最后2次课程制作一套完美的居家练习视频并培训他的家人。虽然不理想，但在现有系统内这是我们能做的最好的了。”' },
                consequence: { en: '✅ Resourcefulness. The patient manages to continue progress at home. You worked within the constraints effectively without burning yourself out.', th: '✅ ความสามารถในการจัดการ! คนไข้สามารถพัฒนาต่อได้ที่บ้าน คุณทำงานภายใต้ข้อจำกัดได้อย่างมีประสิทธิภาพโดยไม่ทำให้ตัวเองหมดไฟ', zh: '✅ 智谋。患者设法在家里继续取得进展。你在限制范围内有效地工作，没有让自己精疲力竭。' },
                stats: { competence: 80, ethics: 70, leadership: 60, innovation: 50 }
            }
        ]
    },

    {
        id: 'pt_020',
        text: {
            en: '🩺 The Inappropriate Referral: A local surgeon sends you patients for "Post-Op Strength" but they are always referred too early—wounds are still draining and they are in too much pain. He is your biggest referral source. If you complain, he might stop sending patients.',
            th: '🩺 การส่งต่อที่ไม่เหมาะสม: ศัลยแพทย์ในพื้นที่ส่งคนไข้มาให้คุณเพื่อ "ฟื้นฟูความแข็งแรงหลังผ่าตัด" แต่เขามักจะส่งมาเร็วเกินไป แผลยังไม่แห้งและคนไข้เจ็บปวดมาก เขาเป็นแหล่งส่งต่อคนไข้รายใหญ่ที่สุดของคุณ ถ้าคุณบ่น เขาอาจหยุดส่งคนไข้มาเลย',
            zh: '🩺 不当转诊：当地一位外科医生送患者来做“术后力量训练”，但他们总是被转诊得太早——伤口还在渗液，而且他们痛苦不堪。他是你最大的转诊来源。如果你投诉，他可能会停止送病人来。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🍷 The Gentle Professional lunch: "Invite him to lunch. Show him the clinical data on wound healing timelines. Make it a collaborative professional talk, not a confrontation."', th: '🍷 มื้อเที่ยงแบบมืออาชีพ: "ชวนเขาไปทานมื้อเที่ยง แสดงข้อมูลทางคลินิกเรื่องระยะเวลาการหายของแผลให้เขาดู ทำให้เป็นการพูดคุยแบบมืออาชีพไม่ใช่การเผชิญหน้า"', zh: '🍷 温和的专业午餐：“邀请他吃午饭。向他展示关于伤口愈合时间线的临床数据。进行一次协作性的专业谈话，而不是对抗。”' },
                consequence: { en: '✅ Relationship Strengthening. The surgeon respects your expertise and adjusts his protocols. Your referrals actually INCREASE because he trusts you more. You improved patient safety and your business.', th: '✅ กระชับความสัมพันธ์! ศัลยแพทย์เคารพในความเชี่ยวชาญของคุณและปรับเปลี่ยนโปรโตคอลของเขา การส่งต่อคนไข้กลับเพิ่มขึ้นเพราะเขาไว้ใจคุณมากขึ้น คุณช่วยเพิ่มความปลอดภัยให้คนไข้และทำให้ธุรกิจดีขึ้น', zh: '✅ 关系加强。外科医生尊重你的专业知识并调整了他的方案。由于他更加信任你，你的转诊量实际上增加了。你提高了患者的安全性并改善了你的业务。' },
                stats: { competence: 70, ethics: 80, leadership: 90, innovation: 40 }
            },
            {
                id: 'B',
                text: { en: '🚪 Decline the Cases: "Tell the office to stop scheduling his patients until 4 weeks post-op. If he gets mad, fine. I won\'t risk an infection under my watch."', th: '🚪 ปฏิเสธเคส: "บอกที่ทำงานให้หยุดรับนัดคนไข้ของเขาจนกว่าจะผ่านไป 4 สัปดาห์หลังผ่าตัด ถ้าเขาโกรธก็ช่าง ผมจะไม่เสี่ยงให้เกิดการติดเชื้อในความดูแลของผม"', zh: '🚪 拒绝这些病例：“告诉办公室，术后4周内不要安排他的病人。如果他生气也没关系。我不会在我的看护下冒险让病人感染。”' },
                consequence: { en: '📉 Financial Hit. The surgeon is insulted and stops referring entirely. Your revenue drops by 25%. You saved the patients from potential harm, but now you might have to lay off staff.', th: '📉 ผลกระทบทางการเงิน! ศัลยแพทย์รู้สึกเสียหน้าและหยุดส่งคนไข้มาถาวร รายได้คุณลดลง 25% คุณช่วยคนไข้ให้พ้นอันตรายได้ แต่ตอนนี้คุณอาจต้องเลิกจ้างพนักงาน', zh: '📉 财务打击。外科医生感到受辱，完全停止了转诊。你的收入下降了25%。你使患者免受潜在伤害，但现在你可能不得不裁员。' },
                stats: { competence: 50, ethics: 90, leadership: 40, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_021',
        text: {
            en: '🧠 The Stroke Plateau: Your 55-year-old stroke patient has stopped making progress after 3 months. Insurance will stop paying if they don\'t see improvement. The patient is depressed and wants to give up. You could "embellish" the data to get 4 more weeks of coverage.',
            th: '🧠 จุดอิ่มตัวของผู้ป่วยสโตรก: คนไข้สโตรกวัย 55 ปีของคุณหยุดการพัฒนาหลังจากผ่านไป 3 เดือน ประกันจะหยุดจ่ายหากไม่เห็นความก้าวหน้า คนไข้เริ่มซึมเศร้าและอยากยอมแพ้ คุณสามารถ "เติมแต่ง" ข้อมูลเพื่อให้ประกันคุ้มครองต่ออีก 4 สัปดาห์',
            zh: '🧠 中风平台期：你的一名55岁中风患者在3个月后停止了进度。如果没有看到改善，保险公司将停止支付。患者感到沮丧并想放弃。你可以“润色”数据以获得另外4周的覆盖范围。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✍️ Embellish for the Patient: "The system is rigged against slow recoverers. I\'ll document a 5-degree increase in range of motion so we get the extra month. He needs the hope."', th: '✍️ เติมแต่งเพื่อคนไข้: "ระบบมันใจร้ายกับคนที่ฟื้นตัวช้า ผมจะลงบันทึกว่าองศาการขยับเพิ่มขึ้น 5 องศาเพื่อให้เราได้เวลาเพิ่มอีกเดือน เขาต้องการความหวังนะ"', zh: '✍️ 为患者润色：“系统对康复缓慢的人不公平。我会记录活动范围增加了5度，这样我们就能多获得一个月的时间。他需要希望。”' },
                consequence: { en: '⚠️ Ethical Compromise. You get the 4 weeks. He actually makes a huge breakthrough in week 3. However, you are now worried about a future audit. You did a "bad thing" for a good reason.', th: '⚠️ การประนีประนอมทางจรรยาบรรณ! คุณได้เพิ่ม 4 สัปดาห์ และเขาก็มีการพัฒนาครั้งใหญ่ในสัปดาห์ที่ 3 จริงๆ แต่ตอนนี้คุณต้องกังวลกับการตรวจสอบในอนาคต คุณทำสิ่งที่ไม่ดีเพื่อเหตุผลที่ดี', zh: '⚠️ 道德妥协。你得到了4周时间。他在第3周确实取得了巨大突破。然而，你现在担心未来的审计。你出于一个好的理由做了一件“坏事”。' },
                stats: { competence: 40, ethics: -40, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '📣 Pivot to Community: "We\'ve hit a plateau. Insurance won\'t pay for 1-on-1 anymore. I\'m referring you to a community adaptive gym. I\'ll volunteer there once a week to check on you."', th: '📣 เปลี่ยนแนวทางไปสู่ชุมชน: "เราถึงจุดอิ่มตัวแล้ว ประกันจะไม่จ่ายสำหรับการรักษาแบบตัวต่อตัวอีกต่อไป ผมจะส่งตัวคุณไปยังยิมสำหรับผู้พิการในชุมชน ผมจะไปเป็นอาสาสมัครที่นั่นอาทิตย์ละครั้งเพื่อดูอาการคุณ"', zh: '📣 转向社区：“我们遇到了平台期。保险不再支付一对一的费用了。我把你转到社区适应性健身房。我每周会去那里当一次志愿者去看望你。”' },
                consequence: { en: '✅ Ethical Advocacy. The patient feels supported through the transition. You maintain your integrity while ensuring they aren\'t abandoned. Your community reputation soars.', th: '✅ การสนับสนุนที่มีจรรยาบรรณ! คนไข้รู้สึกได้รับการดูแลในช่วงเปลี่ยนผ่าน คุณรักษาความซื่อสัตย์ไว้ได้ขณะที่มั่นใจว่าเขาจะไม่ถูกทอดทิ้ง ชื่อเสียงของคุณในชุมชนพุ่งสูงขึ้น', zh: '✅ 道德倡导。患者在过渡期间感到获得了支持。你保持了正直，同时也确保他们没有被抛弃。你在社区的声誉飙升。' },
                stats: { competence: 60, ethics: 90, leadership: 100, innovation: 20 }
            }
        ]
    },

    {
        id: 'pt_022',
        text: {
            en: '👴 The Parkinson\'s Boxing Class: You want to start a "Rock Steady" style boxing class for Parkinson\'s patients. Your clinic owner says it\'s too high risk for falls and won\'t provide the equipment. You have to decide how to launch it.',
            th: '👴 คลาสชกมวยพาร์กินสัน: คุณต้องการเปิดคลาสชกมวยสไตล์ "Rock Steady" สำหรับผู้ป่วยพาร์กินสัน เจ้าของคลินิกบอกว่ามันเสี่ยงต่อการล้มสูงเกินไปและจะไม่จัดหาอุปกรณ์ให้ คุณต้องตัดสินใจว่าจะเปิดคลาสนี้อย่างไร',
            zh: '👴 帕金森击剑课：你想为帕金森患者开设一个“稳如磐石”风格的击剑（拳击）课。你的诊所老板说跌倒风险太高，不提供设备。你必须决定如何启动它。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🌳 Park Sessions: "Fine. I\'ll buy my own pads and meet patients at the local park on Sunday mornings. We\'ll do it as a free community wellness group."', th: '🌳 ฝึกที่สวนสาธารณะ: "ก็ได้ครับ ผมจะซื้อเป้าชกเองและไปเจอคนไข้ที่สวนสาธารณะเช้าวันอาทิตย์ เราจะทำเป็นกลุ่มดูแลสุขภาพชุมชนฟรี"', zh: '🌳 公园课程：“好。我会买自己的护具，周日早上在当地公园见患者。我们会把它作为一个免费的社区健康小组来做。”' },
                consequence: { en: '🚀 Viral Success. The community loves it. Local news covers the "Therapist in the Park." The clinic owner sees the publicity and begs you to bring it back inside as a paid service.', th: '🚀 ประสบความสำเร็จเป็นไวรัล! ชุมชนชอบมาก ข่าวท้องถิ่นนำเสนอเรื่อง "นักกายภาพในสวน" เจ้าของคลินิกเห็นกระแสและมาอ้อนวอนให้คุณนำคลาสกลับไปทำในคลินิกเป็นบริการแบบเสียเงิน', zh: '🚀 走红成功。社区非常喜欢。当地新闻报道了“公园里的治疗师”。诊所老板看到了宣传，求你把它带回室内作为付费服务。' },
                stats: { competence: 50, ethics: 80, leadership: 90, innovation: 80 }
            },
            {
                id: 'B',
                text: { en: '📄 The Research Pitch: "Don\'t say no yet. Let me present 5 peer-reviewed studies showing boxing reduces fall risk in PD. I\'ll also draft a specific high-risk waiver."', th: '📄 เสนองานวิจัย: "อย่าเพิ่งปฏิเสธเลยครับ ให้ผมนำเสนองานวิจัย 5 ฉบับที่ยืนยันว่าการชกมวยช่วยลดความเสี่ยงในการล้มของผู้ป่วยพาร์กินสัน ผมจะร่างใบยินยอมรับความเสี่ยงเฉพาะสำหรับเคสนี้ด้วย"', zh: '📄 研究提议：“先别拒绝。让我展示5项经过同行评审的研究，证明击剑能降低帕金森患者的跌倒风险。我还会起草一份专门针对高风险的豁免书。”' },
                consequence: { en: '✅ Professional Convincing. The owner is impressed by your data-driven approach. They agree to a 3-month pilot. You changed clinic policy through clinical evidence.', th: '✅ การโน้มน้าวอย่างมืออาชีพ! เจ้าของประทับใจในแนวทางที่เน้นข้อมูลของคุณ เขาตกลงให้ทดลองทำ 3 เดือน คุณเปลี่ยนนโยบายคลินิกได้ด้วยหลักฐานทางคลินิก', zh: '✅ 专业说服。老板对你数据驱动的方法印象深刻。他们同意进行为期3个月的试点。你通过临床证据改变了诊所的政策。' },
                stats: { competence: 80, ethics: 60, leadership: 70, innovation: 60 }
            }
        ]
    },

    {
        id: 'pt_023',
        text: {
            en: '🦵 The Amputee\'s Ambition: A patient with a fresh transtibial amputation wants to return to marathon running in 6 months. Most protocols say 12-18 months. He has the money for a high-end Carbon Fiber Blade and wants you to "push him to the limit."',
            th: '🦵 ความทะเยอทะยานของผู้สูญเสียขา: คนไข้ที่เพิ่งตัดขาใต้เข่าต้องการกลับไปวิ่งมาราธอนใน 6 เดือน โปรโตคอลส่วนใหญ่บอกว่าต้องใช้เวลา 12-18 เดือน เขามีเงินซื้อขาเทียมคาร์บอนไฟเบอร์เกรดสูงและต้องการให้คุณ "ผลักดันทักษะเขาให้ถึงขีดสุด"',
            zh: '🦵 截肢者的雄心：一名刚接受过胫骨下截肢的患者想在6个月内回归马拉松比赛。大多数方案说是需要12-18个月。他有钱买高端碳纤维叶片，想让你“把他推向极限”。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🏃 Full Throttle: "Challenge accepted. We will use advanced load-monitoring sensors and train 5 days a week. If the stump tissue holds, we break the record."', th: '🏃 ลุยเต็มสูบ: "รับคำท้าครับ เราจะใช้เซนเซอร์ตรวจจับแรงกดขั้นสูงและฝึก 5 วันต่อสัปดาห์ ถ้าเนื้อเยื่อตอขารับไหว เราจะทำลายสถิติไปด้วยกัน"', zh: '🏃 全速前进：“接受挑战。我们将使用先进的载荷监测传感器，每周训练5天。如果残肢组织能撑住，我们就打破纪录。”' },
                consequence: { en: '✅ Extraordinary Outcome. He makes the race! You become known as the go-to therapist for elite adaptive athletes. However, you spent so much time on him that your other patients felt neglected.', th: '✅ ผลลัพธ์ที่ยอดเยี่ยม! เขาลงแข่งได้สำเร็จ! คุณกลายเป็นนักกายภาพที่นักกีฬาคนพิการระดับแนวหน้าต้องมาหา แต่คุณใช้เวลากับเขามากจนคนไข้คนอื่นเริ่มรู้สึกว่าถูกทอดทิ้ง', zh: '✅ 非凡的结果。他参加了比赛！你成为了精英适应性运动员的首选治疗师。然而，你在他身上花了太多时间，以至于你的其他病人感到被忽视。' },
                stats: { competence: 90, ethics: 50, leadership: 60, innovation: 90 }
            },
            {
                id: 'B',
                text: { en: '🐢 Safety First: "We follow the 12-month protocol. The risk of skin breakdown and revision surgery is too high. A marathon in 6 months is clinical negligence."', th: '🐢 ปลอดภัยไว้ก่อน: "เราจะทำตามโปรโตคอล 12 เดือน ความเสี่ยงของผิวหนังฉีกขาดและต้องผ่าตัดซ้ำนั้นสูงเกินไป การวิ่งมาราธอนใน 6 เดือนคือการละเลยหน้าที่ทางคลินิก"', zh: '🐢 安全第一：“我们遵守12个月的方案。皮肤破损和二次手术的风险太高。6个月跑马拉松是临床过失。”' },
                consequence: { en: '⚠️ Patient Defection. He leaves and finds a less experienced PT who says yes. He gets injured and blames the profession. You were safe, but you lost the opportunity to guide a high-stakes rehab safely.', th: '⚠️ คนไข้หนีหาย! เขาลาออกไปหา PT ที่ประสบการณ์น้อยกว่าแต่ยอมทำให้ เขาบาดเจ็บและโทษวงการกายภาพ คุณเลือกทางที่ปลอดภัย แต่เสียโอกาสในการดูแลการฟื้นฟูที่มีความเสี่ยงสูงอย่างปลอดภัย', zh: '⚠️ 患者流失。他离开了，找到了一位经验较少但答应了他的要求的理疗师。他受伤了并责怪这个行业。你是安全的，但你失去了安全指导高风险康复的机会。' },
                stats: { competence: 50, ethics: 70, leadership: 20, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_024',
        text: {
            en: '🏥 The ER Triage: Your hospital is so overcrowded that they want a PT in the ER to triage musculoskeletal cases (sprains/strains) so doctors can focus on life-threatening issues. You have no doctor supervision and have to make "discharge or x-ray" calls yourself.',
            th: '🏥 การคัดกรองในห้องฉุกเฉิน: โรงพยาบาลของคุณคนไข้ล้นจนต้องการให้นักกายภาพไปอยู่ในห้องฉุกเฉินเพื่อคัดกรองเคสกล้ามเนื้อและกระดูก (แพลง/ยืด) เพื่อให้หมอได้โฟกัสกับเคสวิกฤต คุณไม่มีหมอคอยคุมและต้องตัดสินใจเองว่าจะ "ให้กลับบ้านหรือให้ไปเอ็กซเรย์"',
            zh: '🏥 急诊分诊：你的医院非常拥挤，他们想让一名理疗师在急诊室分诊肌肉骨骼病例（扭伤/拉伤），以便医生专注于危及生命的问题。你没有医生的监督，必须自己做出“出院或X光”的决定。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💪 Expand the Scope: "I am trained for this. I\'ll use the Ottawa Ankle/Knee Rules to screen. This proves PTs are essential primary care providers."', th: '💪 ขยายขอบเขตงาน: "ผมได้รับการฝึกฝนมาเพื่อสิ่งนี้ ผมจะใช้กฎ Ottawa Ankle/Knee เพื่อคัดกรอง นี่จะพิสูจน์ว่านักกายภาพคือผู้ให้บริการปฐมภูมิที่สำคัญ"', zh: '💪 扩大范围：“我为此受过培训。我将使用渥太华脚踝/膝盖规则进行筛选。这证明了理疗师是必不可少的初级保健提供者。”' },
                consequence: { en: '✅ System Efficiency. You reduce ER wait times by 40%. The hospital creates a permanent "PT-First" triage role for you with a huge raise. You advanced the entire profession.', th: '✅ ประสิทธิภาพของระบบ! คุณลดเวลารอในห้องฉุกเฉินได้ถึง 40% โรงพยาบาลจึงสร้างตำแหน่งคัดกรองโดยนักกายภาพถาวรให้คุณพร้อมขึ้นเงินเดือนก้อนโต คุณทำให้วิชาชีพก้าวหน้าไปอีกขั้น', zh: '✅ 系统效率。你将急诊室等待时间缩短了40%。医院为你设立了一个永久性的“理疗优先”分诊职位，并大幅加薪。你提升了整个行业地位。' },
                stats: { competence: 90, ethics: 70, leadership: 100, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '🛡️ Liability Retreat: "I won\'t make those calls without a physician signing off. I don\'t want the legal risk if I miss a hairline fracture."', th: '🛡️ ถอยเพื่อความปลอดภัย: "ผมจะไม่ตัดสินใจโดยไม่มีหมอเซ็นรับรอง ผมไม่อยากรับความเสี่ยงทางกฎหมายหากผมพลาดรอยร้าวเล็กๆ ในกระดูกไป"', zh: '🛡️ 责任后退：“如果没有医生的签字，我不会做那些决定。如果我漏掉了细微骨折，我不想承担法律风险。”' },
                consequence: { en: '📉 Missed Opportunity. The ER remains chaotic. The hospital decides PTs aren\'t "ready" for primary care autonomy. You kept your license safe, but the profession stayed in the basement.', th: '📉 เสียโอกาส! ห้องฉุกเฉินยังคงวุ่นวาย โรงพยาบาลตัดสินใจว่านักกายภาพยังไม่ "พร้อม" สำหรับงานปฐมภูมิที่เป็นอิสระ คุณรักษาใบประกอบไว้ได้ แต่ไม่ได้ช่วยให้วิชาชีพก้าวไปไหน', zh: '📉 错失良机。急诊室依然混乱。医院认为理疗师还没“准备好”获得初级保健自主权。你保住了执照，但这个行业依然停滞不前。' },
                stats: { competence: 50, ethics: 60, leadership: 30, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_025',
        text: {
            en: '👶 The "W-Sitting" Parent: A mother is obsessed with her child "W-sitting" (which can affect hip development). Every other PT told her it\'s fine, but she wants you to use leg braces to force "proper" sitting. Braces are expensive and uncomfortable for the child.',
            th: '👶 พ่อแม่กับท่า "W-Sitting": แม่คนหนึ่งกังวลมากเรื่องลูกที่ชอบนั่งท่า W (ซึ่งอาจส่งผลต่อการพัฒนาของข้อสะโพก) นักกายภาพคนอื่นบอกว่าไม่เป็นไร แต่เธอต้องการให้คุณใช้กายอุปกรณ์ล็อคขาเพื่อบังคับให้นั่ง "ท่าที่ถูกต้อง" อุปกรณ์พวกนี้แพงและเด็กจะอึดอัดมาก',
            zh: '👶 “W型坐姿”家长：一位母亲执着于孩子的“W型坐姿”（这可能会影响髋部发育）。其他的理疗师都告诉她这没关系，但她想让你使用腿部支架来强迫“正确”的坐姿。支架很贵，而且会让孩子感到不舒服。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Refuse & Educate: "Braces are overkill and cause more harm than good. I will not prescribe them. Let\'s work on core strength and variety of movement instead."', th: '🚫 ปฏิเสธและให้ความรู้: "อุปกรณ์ล็อคขานั้นมากเกินไปและจะเกิดโทษมากกว่าประโยชน์ ผมจะไม่สั่งให้ครับ เรามาฝึกความแข็งแรงของแกนกลางกายและการขยับร่างกายที่หลากหลายแทน"', zh: '🚫 拒绝并教育：“支架是过度治疗，弊大于利。我不会开具这些。让我们转而加强核心力量和动作的多样性。”' },
                consequence: { en: '✅ Ethical Pedigree. The mother is annoyed but respects your firm stance. Later, she sees the child naturally stop W-sitting as they get stronger. She tells everyone you aren\'t "just in it for the money."', th: '✅ จรรยาบรรณที่น่าเชื่อถือ! แม่เด็กอาจจะหงุดหงิดแต่ก็เคารพในการยืนหยัดของคุณ ต่อมาเธอเห็นลูกหยุดนั่งท่า W เองเมื่อร่างกายแข็งแรงขึ้น เธอไปบอกทุกคนว่าคุณไม่ได้ "ทำเพื่อเงินอย่างเดียว"', zh: '✅ 道德典范。母亲感到烦恼，但尊重你坚定的立场。后来，她看到孩子随着身体变强壮自然而然地停止了W型坐姿。她告诉所有人你不是“只为了钱”。' },
                stats: { competence: 70, ethics: 90, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '💸 Sell the Braces: "If it makes you feel safe, we can order custom braces ($800). It will definitely stop the W-sitting."', th: '💸 ขายอุปกรณ์: "ถ้ามันทำให้คุณแม่สบายใจ เราสามารถสั่งทำอุปกรณ์ล็อคขาเฉพาะบุคคลได้ (25,000 บาท) มันจะช่วยหยุดการนั่งท่า W ได้แน่นอนครับ"', zh: '💸 出售支架：“如果您觉得这样安全，我们可以订制支架（800美元）。它肯定能阻止W型坐姿。”' },
                consequence: { en: '📉 Clinical Failure. The child develops skin sores from the braces and begins to hate physical therapy. You made a quick profit but lost the child\'s trust and caused unnecessary pain.', th: '📉 ความล้มเหลวทางคลินิก! เด็กเกิดแผลกดทับจากอุปกรณ์และเริ่มเกลียดการทำกายภาพ คุณได้กำไรเร็วแต่เสียความไว้ใจจากเด็กและสร้างความเจ็บปวดที่เกินจำเป็น', zh: '📉 临床失败。孩子因支架而产生皮肤疮，并开始讨厌理疗。你赚到了快钱，但失去了孩子的信任，并造成了不必要的痛苦。' },
                stats: { competence: 30, ethics: -60, leadership: -20, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_026',
        text: {
            en: '🧗 The "Weekend Warrior" ACL: A 45-year-old amateur rock climber tore his ACL. He wants to avoid surgery and do "Copers" rehab to get back on the wall. His surgeon says surgery is mandatory. He asks for your honest clinical opinion.',
            th: '🧗 นักปีนหน้าผาสมัครเล่นกับเอ็นไขว้หน้าขาด: นักปีนหน้าผาสมัครเล่นวัย 45 ปี เอ็นไขว้หน้าขาด (ACL) เขาต้องการเลี่ยงการผ่าตัดและทำกายภาพแบบ "Copers" เพื่อกลับไปปีนต่อ หมอผ่าตัดบอกว่าต้องผ่าเท่านั้น เขามาขอความเห็นแท้ๆ จากคุณ',
            zh: '🧗 “周末勇士”的前交叉韧带（ACL）：一名45岁的业余攀岩者撕裂了前交叉韧带。他想避免手术，进行“适应者”康复训练以回到岩壁。他的外科医生说必须手术。他征求你诚实的临床意见。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🔬 Evidence Review: "The latest research shows that for non-elites, intensive rehab can be as effective as surgery. Let\'s try 5 weeks of heavy strength work. If the knee is stable, we skip the knife."', th: '🔬 ทบทวนหลักฐานวิจัย: "งานวิจัยล่าสุดระบุว่า สำหรับคนที่ไม่ได้เป็นนักกีฬามืออาชีพ การทำกายภาพอย่างเข้มข้นได้ผลดีเท่ากับการผ่าตัด เรามาลองฝึกความแข็งแรงหนักๆ 5 สัปดาห์ดู ถ้าเข่ามั่นคง เราก็ไม่ต้องผ่า"', zh: '🔬 证据审查：“最新研究表明，对于非精英运动员，强化康复可以和手术一样有效。让我们尝试5周的重力训练。如果膝盖稳定，我们就不用动手术。”' },
                consequence: { en: '✅ Successful Non-Op. He becomes a "coper" and climbs again without surgery. He saves $20k and 9 months of rehab. You gain a reputation among the climbing community as a "smart" PT.', th: '✅ ความสำเร็จแบบไม่ต้องผ่าตัด! เขาทำสำเร็จและกลับไปปีนได้โดยไม่ต้องผ่าตัด ประหยัดเงินได้ 600,000 บาทและเวลาฟื้นฟู 9 เดือน คุณได้ชื่อว่าเป็น PT ที่ "ฉลาด" ในกลุ่มนักปีนหน้าผา', zh: '✅ 成功的非手术治疗。他康复了，并在没有手术的情况下再次攀岩。他节省了2万美元和9个月的康复时间。你在攀岩界赢得了“聪明”理疗师的名声。' },
                stats: { competence: 80, ethics: 80, leadership: 60, innovation: 70 }
            },
            {
                id: 'B',
                text: { en: '👨‍⚕️ Trust the Surgeon: "The surgeon knows best. Without an ACL, your knee will develop arthritis in 10 years if you keep climbing. Get the surgery."', th: '👨‍⚕️ เชื่อหมอผ่าตัดเถอะ: "หมอผ่าตัดเขารู้ดีที่สุด ถ้าไม่มีเอ็น ACL เข่าคุณจะอักเสบในอีก 10 ปีข้างหน้าถ้ายังปีนต่อ ไปผ่าเถอะครับ"', zh: '👨‍⚕️ 信任外科医生：“外科医生最清楚。如果没有ACL，如果你继续攀岩，你的膝盖在10年后会患上关节炎。去手术吧。”' },
                consequence: { en: '⚠️ Standard Care. He gets the surgery. It goes fine, but he loses a year of his life to rehab. You followed the traditional path but didn\'t offer the option of modern, evidence-based conservative management.', th: '⚠️ การรักษามาตรฐาน! เขาไปผ่าทุกอย่างเรียบร้อยดี แต่เสียเวลาชีวิตไปปีหนึ่งกับการฟื้นฟู คุณทำตามแนวทางเดิมแต่ไม่ได้เสนอทางเลือกการรักษาแบบอนุรักษ์นิยมที่ทันสมัยและอิงตามหลักฐานวิจัย', zh: '⚠️ 标准护理。他接受了手术。一切顺利，但他失去了一年的生活来康复。你走的是传统道路，但没有提供现代、循证的保守管理选项。' },
                stats: { competence: 50, ethics: 60, leadership: 20, innovation: -40 }
            }
        ]
    },

    {
        id: 'pt_027',
        text: {
            en: '📱 The Telehealth Glitch: During a remote session with a patient in a rural area, the video freezes. You suspect they said they fell, but you aren\'t sure. They aren\'t answering their phone. Their house is 3 hours away.',
            th: '📱 ความผิดพลาดของระบบทางไกล: ระหว่างการรักษาทางไกลกับคนไข้ในพื้นที่ห่างไกล วิดีโอเกิดค้าง คุณสงสัยว่าเขาพูดว่าเขาล้มลง แต่คุณไม่แน่ใจ เขาไม่รับโทรศัพท์ด้วย บ้านเขาอยู่ห่างไป 3 ชั่วโมง',
            zh: '📱 远程医疗故障：在与偏远地区的一名患者进行远程会诊时，视频冻结了。你怀疑他们刚才说自己摔倒了，但你不确定。他们不接电话。他们的家在3小时车程外。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚨 Dispatch Help: Call the local sheriff in their town and request a "Welfare Check" immediately. Better safe than sorry.', th: '🚨 ขอกำลังเสริม: โทรหาตำรวจในพื้นที่ของเขาและขอให้ไปตรวจสอบสวัสดิภาพ (Welfare Check) ทันที ปลอดภัยไว้ก่อนดีกว่า', zh: '🚨 派遣救援：给他们镇上的当地治安官打电话，立即要求进行“福利检查”。宁可信其有，不可信其无。' },
                consequence: { en: '✅ Life Saved. The sheriff finds them on the floor with a broken hip. They are airlifted to a hospital. Your quick thinking saved them from lying there for days. Your telehealth protocol is now a model for the state.', th: '✅ ชีวิตรอด! ตำรวจพบเขานอนอยู่ที่พื้นพร้อมสะโพกหัก เขาถูกนำส่งโรงพยาบาลทางอากาศ ความไวของคุณช่วยไม่ให้เขาต้องนอนทรมาณอยู่หลายวัน โปรโตคอลการรักษาทางไกลของคุณกลายเป็นต้นแบบของรัฐ', zh: '✅ 挽救生命。治安官发现他们躺在地上，髋部骨折。他们被空运到医院。你的果断处理防止了他们在那里躺上好几天。你的远程医疗协议现在成了该州的典范。' },
                stats: { competence: 70, ethics: 100, leadership: 90, innovation: 60 }
            },
            {
                id: 'B',
                text: { en: '⏳ Wait and See: "The internet there is terrible. I\'ll try calling back every 15 minutes. I don\'t want to cause a panic over a technical glitch."', th: '⏳ รอดูสถานการณ์: "อินเทอร์เน็ตที่นั่นแย่มาก เดี๋ยวจะลองโทรกลับทุก 15 นาที ไม่อยากทำให้แตกตื่นเพียงเพราะระบบขัดข้องทางเทคนิค"', zh: '⏳ 观望：“那里的网络很糟糕。我会每隔15分钟试着回拨一次。我不想因为技术故障而引起恐慌。”' },
                consequence: { en: '💀 Tragic Negligence. You finally get through 2 hours later. They were on the floor the whole time in pain. They lose trust in telehealth and you. Legal action follows for failue to provide emergency coordination.', th: '💀 ความประมาทที่น่าเศร้า! คุณเพิ่งติดต่อได้ในอีก 2 ชั่วโมงต่อมา เขานอนเจ็บอยู่ที่พื้นตลอดเวลา เขาเสียความศรัทธาทั้งในระบบทางไกลและในตัวคุณ ตามมาด้วยการฟ้องร้องฐานล้มเหลวในการประสานงานฉุกเฉิน', zh: '💀 悲剧性的过失。2个小时后你终于拨通了电话。他们一直躺在地上忍受痛苦。他们对远程医疗和你失去了信任。随后因未能提供紧急协调而引发法律诉讼。' },
                stats: { competence: 40, ethics: 20, leadership: -50, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_028',
        text: {
            en: '🧬 The Genetic Secret: A patient with unexplained muscle weakness accidentally mentions a family history of a rare genetic disorder they haven\'t told their insurance company about. If it\'s on your notes, their premiums might skyrocket or they could lose coverage.',
            th: '🧬 ความลับทางพันธุกรรม: คนไข้ที่มีอาการกล้ามเนื้ออ่อนแรงโดยไม่ทราบสาเหตุ เผลอหลุดปากพูดถึงประวัติครอบครัวที่มีความผิดปกติทางพันธุกรรมที่หาได้ยาก ซึ่งเขาไม่ได้แจ้งบริษัทประกันไว้ หากคุณบันทึกลงไป เบี้ยประกันเขาอาจพุ่งสูงขึ้นหรือเขาอาจเสียความคุ้มครอง',
            zh: '🧬 基因秘密：一名原因不明的肌肉无力患者无意中提到，家族中有某种罕见遗传病史，而他们并未告知保险公司。如果记录在你的笔记中，他们的保费可能会飙升，或者可能失去保险。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✍️ Absolute Accuracy: "I am a medical professional. My notes must reflect the truth for proper clinical diagnosis, regardless of insurance implications."', th: '✍️ ความถูกต้องแม่นยำ: "ผมคือวิชาชีพทางการแพทย์ บันทึกของผมต้องสะท้อนความจริงเพื่อการวินิจฉัยที่ถูกต้อง ไม่ว่าประกันจะว่าอย่างไรก็ตาม"', zh: '✍️ 绝对准确：“我是一名医疗专业人士。我的笔记必须反映临床诊断的真相，无论对保险有何影响。”' },
                consequence: { en: '⚖️ Legal Integrity, Human Cost. You protected your license. But the patient loses their insurance and has to stop treatment. You diagnosed them into poverty. A harsh reality of the medical system.', th: '⚖️ ความซื่อสัตย์ทางกฎหมาย แต่ต้องจ่ายด้วยน้ำตา! คุณปกป้องใบประกอบไว้ได้ แต่คนไข้เสียประกันและต้องหยุดการรักษา คุณวินิจฉัยจนเขาต้องยากจนลง นี่คือความเป็นจริงที่โหดร้ายของระบบการแพทย์', zh: '⚖️ 法律正直，人的代价。你保护了自己的执照。但患者失去了保险，不得不停止治疗。你的诊断让他们陷入贫困。这是医疗系统残酷的现实。' },
                stats: { competence: 80, ethics: 70, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤫 Omit the Detail: "I will focus my notes on the clinical presentation and symptoms, not the family history. He needs treatment more than the insurance company needs profit."', th: '🤫 ละเว้นรายละเอียด: "ผมจะเน้นบันทึกไปที่อาการที่ปรากฏและอาการทางคลินิกเท่านั้น ไม่ลงเรื่องประวัติครอบครัว เขาต้องการการรักษามากกว่าที่บริษัทประกันต้องการกำไร"', zh: '🤫 省略细节：“我会把笔记重点放在临床表现和症状上，而不是家族史。比起保险公司需要利润，他更需要治疗。”' },
                consequence: { en: '✅ Patient Advocate. The patient gets the care they need. However, you are technically committing insurance fraud by omission. If discovered, the consequences would be severe. You risked your career for a patient.', th: '✅ ผู้ปกป้องคนไข้! คนไข้ได้รับการรักษาที่จำเป็น แต่ทางเทคนิคคุณกำลังโกงประกันด้วยการปกปิดข้อมูล หากถูกจับได้ ผลที่ตามมาจะรุนแรงมาก คุณเสี่ยงอาชีพตัวเองเพื่อคนไข้คนเดียว', zh: '✅ 患者倡导者。患者得到了他们需要的护理。然而，从技术上讲，你在通过省略进行保险欺诈。一旦发现，后果将非常严重。你为一个病人冒了职业风险。' },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 20 }
            }
        ]
    },

    {
        id: 'pt_029',
        text: {
            en: '🧗 The Workplace Ergonomics: A huge tech company wants you to redesign their offices to reduce repetitive strain injuries. They want you to endorse a specific brand of $1,200 chairs that they get a kickback from. You know a $100 standing desk converter is actually better for the staff.',
            th: '🧗 สรีระศาสตร์ในที่ทำงาน: บริษัทเทคโนโลยียักษ์ใหญ่ต้องการให้คุณออกแบบออฟฟิศใหม่เพื่อลดการบาดเจ็บจากการทำงานซ้ำๆ เขาต้องการให้คุณรับรองเก้าอี้แบรนด์หนึ่งราคา 40,000 บาทที่เขาจะได้เงินทอน แต่คุณรู้ว่าโต๊ะปรับระดับราคา 3,500 บาทนั้นดีกับพนักงานมากกว่า',
            zh: '🧗 职场人体工程学：一家大型科技公司想让你重新设计他们的办公室，以减少重复性劳损。他们想让你认可某个品牌的椅子（单价1200美元），他们能从中获得回扣。而你清楚，100美元的立式办公桌转换器实际上对员工更好。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛡️ Evidence-Based Design: "I will only recommend what the data supports. Standing desk converters and frequent movement breaks are the priority. I won\'t endorse the expensive chairs."', th: '🛡️ การออกแบบตามหลักฐานวิจัย: "ผมจะแนะนำเฉพาะสิ่งที่ข้อมูลยืนยันเท่านั้น โต๊ะปรับระดับและการพักขยับร่างกายบ่อยๆ คือสิ่งสำคัญที่สุด ผมจะไม่รับรองเก้าอี้ราคาแพงนั่น"', zh: '🛡️ 基于证据的设计：“我只推荐数据支持的方案。立式办公桌转换器和频繁的站立活动才是重点。我不会认可那些昂贵的椅子。”' },
                consequence: { en: '✅ Integrity Wins. The company is annoyed, but the employees\' back pain drop by 60%. They fire the chairs and buy the desks. You are hired by 3 other firms for your honest, effective consulting.', th: '✅ ความซื่อสัตย์ชนะ! บริษัทอาจจะหงุดหงิด แต่อาการปวดหลังพนักงานลดลง 60% เขาเลยเลิกซื้อเก้าอี้แล้วมาซื้อโต๊ะแทน คุณถูกจ้างโดยอีก 3 บริษัทเพราะการเป็นที่ปรึกษาที่ซื่อสัตย์และได้ผลจริง', zh: '✅ 正直取胜。公司感到恼怒，但员工的背痛减少了60%。他们放弃了椅子，购买了桌子。因为你诚实、有效的咨询，另外3家公司也聘请了你。' },
                stats: { competence: 80, ethics: 90, leadership: 100, innovation: 40 }
            },
            {
                id: 'B',
                text: { en: '🤝 Play the Game: "Agree to the chairs. Use the extra funding from the company to build a world-class on-site PT clinic for the staff. It\'s a compromise for the greater good."', th: '🤝 ตามน้ำไปก่อน: "ยอมรับเรื่องเก้าอี้ไป แล้วนำเงินทุนพิเศษจากบริษัทมาสร้างคลินิกกายภาพในออฟฟิศระดับโลกให้พนักงานแทน เป็นการประนีประนอมเพื่อประโยชน์ที่ยิ่งใหญ่กว่า"', zh: '🤝 权宜之计：“同意使用这些椅子。利用公司提供的额外资金为员工建立一个世界级的现场理疗诊所。为了更广泛的利益，这是一种妥协。”' },
                consequence: { en: '⚠️ Grey Area Success. You got the clinic, which helps more people in the long run. But you helped a corporation waste millions on ineffective gear. Your ethics took a hit, but your resources grew.', th: '⚠️ ความสำเร็จในพื้นที่สีเทา! คุณได้คลินิกมาซึ่งช่วยคนได้มากขึ้นในระยะยาว แต่คุณก็มีส่วนช่วยให้บริษัทเสียเงินเปล่าไปหลายล้านกับอุปกรณ์ที่ไม่ได้ผล จรรยาบรรณคุณด่างพร้อยแต่ทรัพยากรในมือเพิ่มขึ้น', zh: '⚠️ 灰色地带的成功。你建立了诊所，从长远来看能帮助更多人。但你帮助一家公司在无效设备上浪费了数百万美元。你的道德收到了打击，但你的资源增长了。' },
                stats: { competence: 60, ethics: 40, leadership: 80, innovation: 60 }
            }
        ]
    },

    {
        id: 'pt_030',
        text: {
            en: '🧘 The Placebo Effect: A patient insists that "healing crystals" placed on their legs during therapy reduces their chronic pain by 50%. You know it\'s 100% placebo, but their actual functional movement is improving because they believe in it. Do you encourage it?',
            th: '🧘 พลังยาหลอก: คนไข้ยืนยันว่า "คริสตัลบำบัด" ที่วางไว้บนขาขณะรักษาช่วยลดปวดเรื้อรังได้ถึง 50% คุณรู้ว่ามันคือผลจากยาหลอก 100% แต่การเคลื่อนไหวเขาก็ดีขึ้นจริงๆ เพราะเขาเชื่อแบบนั้น คุณจะสนับสนุนไหม?',
            zh: '🧘 安慰剂效应：一名患者坚称，在治疗过程中放置在腿上的“治愈水晶”能减轻50%的慢性疼痛。你清楚这100%是安慰剂，但因为他们相信这一点，其实际功能性运动确实在改善。你会鼓励这种行为吗？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤝 Harness the Placebo: "If it helps you relax and move more, keep using them. Let\'s combine the crystals with these specific neuro-dynamic stretches."', th: '🤝 ใช้ประโยชน์จากยาหลอก: "ถ้ามันช่วยให้คุณผ่อนคลายและขยับตัวได้มากขึ้น ก็ใช้ต่อไปครับ เรามาใช้คริสตัลควบคู่ไปกับการยืดเหยียดเส้นประสาทเฉพาะจุดพวกนี้กัน"', zh: '🤝 利用安慰剂：“如果它能帮你放松并增加运动量，那就继续使用。让我们把水晶和这些特定的神经动力学拉伸结合起来。”' },
                consequence: { en: '✅ Functional Recovery. The "combined" therapy works wonders. You don\'t lie, but you don\'t debunk it either. The patient gets back to walking. You value the outcome over the chemical reality.', th: '✅ การฟื้นตัวที่ได้ผล! การรักษาแบบ "ผสมผสาน" ได้ผลมหัศจรรย์ คุณไม่ได้โกหกแต่ก็ไม่ได้ทำลายความเชื่อเขา คนไข้กลับมาเดินได้อีกครั้ง คุณให้ความสำคัญกับผลลัพธ์มากกว่าความเป็นจริงทางวิทยาศาสตร์', zh: '✅ 功能康复。“结合”疗法效果显著。你没有撒谎，但也没有拆穿。患者恢复了步行。你认为结果比化学现实更重要。' },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 80 }
            },
            {
                id: 'B',
                text: { en: '🛑 The Truth-Teller: "Those crystals do nothing biologically. It\'s a placebo. You are getting better because of the exercises I gave you. Let\'s stick to science."', th: '🛑 ผู้ประกาศความจริง: "คริสตัลพวกนั้นไม่มีผลทางชีวภาพเลยครับ มันคือยาหลอก คุณดีขึ้นได้เพราะท่าออกกำลังกายที่ผมให้ไปต่างหาก เรามาเน้นที่วิทยาศาสตร์กันเถอะ"', zh: '🛑 真相告知者：“这些水晶在生物学上没有任何作用。这是安慰剂。你之所以好转是因为我给你的练习。让我们坚持科学。”' },
                consequence: { en: '⚠️ Psychological Crash. The patient loses faith in their "magic" and their pain immediately returns. They stop doing exercises and their progress stalls. You values truth, but destroyed the patient\'s mental coping mechanism.', th: '⚠️ สภาพจิตใจดิ่งเหว! คนไข้เสียความเชื่อมั่นใน "เวทมนตร์" ของเขาและอาการปวดก็กลับมาทันที เขาเลิกทำท่าบริหารและการพัฒนาหยุดชะงัก คุณให้ความสำคัญกับความจริง แต่ทำลายกลไกการรับมือทางใจของคนไข้จนพัง', zh: '⚠️ 心理崩溃。患者失去了对“魔法”的信任，疼痛立即回归。他们停止练习，进度停滞。你重视真相，但摧毁了患者的心理应对机制。' },
                stats: { competence: 50, ethics: 90, leadership: 20, innovation: -50 }
            }
        ]
    },
    {
        id: 'pt_031',
        text: {
            en: '🥽 Virtual Reality Vertigo: You want to use VR goggles for vestibular (balance) rehab. A patient with severe vertigo has a panic attack the moment they put them on. The clinic owner thinks VR is a gimmick and wants to return the $5,000 headset if it doesn\'t work immediately.',
            th: '🥽 แพนิคจาก VR: คุณต้องการใช้แว่น VR สำหรับการฟื้นฟูระบบการทรงตัว คนไข้ที่มีอาการเวียนศีรษะรุนแรงเกิดอาการแพนิคทันทีที่สวม เจ้าของคลินิกคิดว่า VR เป็นแค่ของเล่นไร้สาระและจะคืนแว่นราคา 150,000 บาทนี้หากมันไม่ได้ผลทันที',
            zh: '🥽 虚拟现实眩晕：你想使用VR眼镜进行前庭（平衡）康复。一名患有严重眩晕的患者在戴上眼镜的一瞬间发生了惊恐发作。诊所老板认为VR只是个噱头，如果不能立即奏效，就想退掉价值5000美元的头显。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🧘 Slow Desensitization: "Let\'s keep it. I\'ll use it without the goggles first—just on a screen—then build up to 30 seconds of wearing it. It\'s the future of balance rehab, we just need a better protocol."', th: '🧘 ค่อยๆ สร้างความคุ้นเคย: "อย่าเพิ่งคืนเลยครับ ผมจะให้เขาดูผ่านหน้าจอก่อน แล้วค่อยๆ พัฒนาไปจนถึงการสวมจริงทีละ 30 วินาที มันคืออนาคตของการฟื้นฟูการทรงตัว เราแค่ต้องการโปรโตคอลที่ช่วยให้ดีขึ้น"', zh: '🧘 缓慢脱敏：“留着它吧。我会先不用眼镜——只在屏幕上使用——然后慢慢增加到佩戴30秒。这是平衡康复的未来，我们只是需要更好的方案。”' },
                consequence: { en: '✅ Innovation Saved. The patient eventually loves it and recovers 2x faster than traditional methods. The owner is silenced by the results and the publicity of your "High-Tech Lab."', th: '✅ นวัตกรรมสำเร็จ! สุดท้ายคนไข้ชอบมากและฟื้นตัวได้เร็วกว่าวิธีเดิม 2 เท่า เจ้าของคลินิกเงียบไปเลยเมื่อเห็นผลลัพธ์และสื่อที่มาทำข่าว "ห้องแล็บไฮเทค" ของคุณ', zh: '✅ 创新得以保留。患者最终喜欢上了这种方式，康复速度比传统方法快了两倍。老板被结果和你“高科技实验室”的名气所说服。' },
                stats: { competence: 70, ethics: 60, leadership: 50, innovation: 100 }
            },
            {
                id: 'B',
                text: { en: '🔙 Safety Return: "You\'re right, it\'s too risky for patients with severe anxiety. Let\'s return it and stick to the vestibular board and standard exercises."', th: '🔙 กลับไปใช้วิธีเดิมที่ปลอดภัย: "คุณพูดถูกครับ มันเสี่ยงเกินไปสำหรับคนไข้ที่มีความกังวลสูง คืนไปเถอะครับแล้วเรากลับไปใช้กระดานทรงตัวกับท่าบริหารมาตรฐานกันดีกว่า"', zh: '🔙 安全回归：“你是对的，对于严重焦虑的患者来说风险太高了。退了吧，我们坚持使用平衡板和标准练习。”' },
                consequence: { en: '📉 Tech Stagnation. You avoided a panic attack, but your clinic lost its competitive edge. You remain a standard therapist in a standard clinic. You are safe, but uninspired.', th: '📉 เทคโนโลยีหยุดชะงัก! คุณเลี่ยงการแพนิคได้ แต่คลินิกเสียความได้เปรียบทางการแข่งขันไป คุณยังคงเป็นนักกายภาพบำบัดทั่วไปในคลินิกทั่วไป คุณปลอดภัยแต่ขาดแรงบันดาลใจ', zh: '📉 技术停滞。你避免了惊恐发作，但你的诊所失去了竞争优势。你依然是一个标准诊所里的标准治疗师。你是安全的，但缺乏灵感。' },
                stats: { competence: 50, ethics: 70, leadership: 30, innovation: -40 }
            }
        ]
    },

    {
        id: 'pt_032',
        text: {
            en: '🤱 The Postpartum Silence: A woman 6-weeks postpartum tells you she is leaking urine whenever she picks up her baby. She is embarrassed and says her OBGYN told her it\'s "normal after birth." You suspect pelvic floor dysfunction that needs a specialist.',
            th: '🤱 ความเงียบงันหลังคลอด: คุณแม่หลังคลอด 6 สัปดาห์เล่าว่าเธอมีปัสสาวะเล็ดทุกครั้งที่อุ้มลูก เธออายและบอกว่าหมอสูติบอกว่าเป็นเรื่อง "ปกติหลังคลอด" คุณสงสัยว่าเธอมีความผิดปกติของกล้ามเนื้ออุ้งเชิงกรานที่ต้องพบผู้เชี่ยวชาญ',
            zh: '🤱 产后缄默：一名产后6周的女性告诉你，她在抱宝宝时会出现尿失禁。她感到很尴尬，并说她的妇产科医生告诉她这是“产后的正常现象”。你怀疑她有盆底功能障碍，需要找专家。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛡️ Professional Advocacy: "It\'s common, but it is NOT normal. You don\'t have to live with this. I\'m referring you to a Pelvic Floor PT specialist. I\'ll call your OBGYN to explain why."', th: '🛡️ ปกป้องสิทธิ์คนไข้: "มันเกิดขึ้นบ่อยแต่นี่ไม่ใช่เรื่องปกติครับ คุณไม่ต้องทนอยู่กับมัน ผมจะส่งคุณไปพบนักกายภาพเฉพาะทางด้านอุ้งเชิงกราน ผมจะโทรหาหมอสูติเพื่ออธิบายเหตุผลให้เอง"', zh: '🛡️ 专业维护：“这很常见，但并不正常。你不必忍受这种生活。我把你转给盆底理疗专家。我会打电话给你的妇产科医生解释原因。”' },
                consequence: { en: '✅ Life Quality Restored. The patient is cured after 4 sessions with the specialist. She becomes your biggest fan, referring 10 other moms to your clinic for general MSK care. You validated a woman\'s health issue when others dismissed it.', th: '✅ คืนคุณภาพชีวิต! หลังจากพบผู้เชี่ยวชาญ 4 ครั้งเธอก็หายเป็นปกติ เธอศรัทธาในตัวคุณมากและส่งต่อแม่ๆ อีก 10 คนมาที่คลินิกคุณเพื่อรักษากล้ามเนื้อทั่วไป คุณได้ช่วยเหลือเรื่องสุขภาพของผู้หญิงในขณะที่คนอื่นมองข้าม', zh: '✅ 生活质量恢复。在专家那里进行了4次治疗后，患者痊愈了。她成了你最忠实的粉丝，为你的诊所转诊了10位需要普通肌肉骨骼护理的母亲。在他人忽视女性健康问题时，你给予了认可。' },
                stats: { competence: 80, ethics: 100, leadership: 70, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🧘 Generic Core work: "Let\'s just strengthen your abs and see if that helps. Avoid heavy lifting for a few weeks."', th: '🧘 บริหารแกนกลางทั่วไป: "ลองมาฝึกหน้าท้องให้แข็งแรงขึ้นดูครับว่าช่วยไหม แล้วก็เลี่ยงการยกของหนักสักพักนะ"', zh: '🧘 常规核心训练：“让我们加强腹肌锻炼，看看是否有帮助。几周内避免重体力活。”' },
                consequence: { en: '⚠️ Ineffective Care. Core work alone doesn\'t fix pelvic floor issues. She gets frustrated that she\'s paying you and still leaking. She eventually quits PT and believes nothing can help her.', th: '⚠️ การรักษาที่ไม่ได้ผล! การฝึกแกนกลางกายอย่างเดียวแก้ปัญหาอุ้งเชิงกรานไม่ได้ เธอหงุดหงิดที่ยอมจ่ายเงินแล้วแต่ยังอาการไม่ดีขึ้น สุดท้ายเธอเลิกทำกายภาพและเชื่อไปเองว่าไม่มีอะไรช่วยเธอได้แล้ว', zh: '⚠️ 无效护理。盆底问题无法通过单纯的核心训练解决。她对付了钱却依然漏尿感到沮丧。她最终放弃了理疗，并认为没有什么能帮到她。' },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_033',
        text: {
            en: '🏟️ The Stadium Scandal: You are a PT for a pro football team. The star player has a mild hamstring strain. The billion-dollar owner walks into the training room and says, "Give him the experimental stem-cell patch. I don\'t care that it\'s not FDA approved yet. He plays Sunday."',
            th: '🏟️ เรื่องอื้อฉาวในสนาม: คุณคือนักกายภาพบำบัดของทีมฟุตบอลอาชีพ ผู้เล่นตัวท็อปมีอาการบาดเจ็บกล้ามเนื้อต้นขาด้านหลังเล็กน้อย เจ้าของทีมพันล้านเดินเข้ามาในห้องพักแล้วบอกว่า "เอาสเต็มเซลล์แผ่นแปะรุ่นทดลองมาใช้กับเขาซะ ผมไม่สนว่ามันจะยังไม่ได้รับการรับรองจาก FDA วันอาทิตย์นี้เขาต้องลงเล่น"',
            zh: '🏟️ 球场丑闻：你是一名职业足球队的理疗师。明星球员有轻微的大腿后群肌拉伤。资产过亿的老板走进训练室说：“给他用那个实验性的干细胞贴片。我不在乎它是否还没通过FDA批准。他周日必须上场。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Whistleblower Stance: "Sir, I cannot and will not administer unapproved medical treatments. It risks the player\'s health and my license. We follow the evidence-based return-to-play protocol."', th: '🛑 เป็นคนตงฉิน: "ท่านครับ ผมทำไม่ได้และจะไม่ใช้การรักษาที่ยังไม่ได้รับการรับรอง มันเสี่ยงต่อสุขภาพของผู้เล่นและใบประกอบวิชาชีพของผม เราต้องทำตามโปรโตคอลการกลับมาลงเล่นที่อิงตามหลักฐานวิจัยเท่านั้น"', zh: '🛑 举报者立场：“先生，我不能也不会实施未经批准的医疗处理。这会危及球员的健康和我的执照。我们遵守基于证据的重返赛场协议。”' },
                consequence: { en: '⚖️ Fired but Famous. You are fired that hour. However, the story leaks to the press. You are seen as a martyr for medical ethics. You are immediately hired as a lecturer and consultant for the national sports board.', th: '⚖️ โดนไล่ออกแต่ชื่อเสียงโด่งดัง! คุณโดนไล่ออกในชั่วโมงนั้นเลย แต่เรื่องนี้หลุดไปถึงมัชฌิม คุณถูกมองว่าเป็นผู้พลีชีพเพื่อจรรยาบรรณแพทย์ คุณถูกจ้างทันทีให้เป็นอาจารย์และที่ปรึกษาของคณะกรรมการกีฬาระดับชาติ', zh: '⚖️ 被解雇但出名。你当即被解雇。然而，消息走漏给了媒体。你被视为医学道德的殉道者。你立即被国家体育委员会聘为讲师和顾问。' },
                stats: { competence: 50, ethics: 100, leadership: 90, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🤫 Discreet Application: "I\'ll do it, but I want a written indemnity from you and a $50k bonus for the risk."', th: '🤫 ทำแบบเงียบๆ: "ผมจะทำให้ครับ แต่ผมขอหนังสือชดเชยความเสียหายจากท่านและขอโบนัสความเสี่ยง 1,500,000 บาท"', zh: '🤫 秘密实施：“我会做的，但我需要你的一份书面赔偿保证，以及5万美元的风险红利。”' },
                consequence: { en: '💀 Moral Corruption. You get the money, but the patch causes a massive infection. The player loses half his season. You are blacklisted from professional sports for life. The big check wasn\'t worth the soul.', th: '💀 ความเสื่อมทรามทางศีลธรรม! คุณได้เงินแต่แผ่นแปะทำให้เกิดการติดเชื้อรุนแรง ผู้เล่นต้องพักยาวครึ่งฤดูกาล คุณถูกขึ้นบัญชีดำจากวงการกีฬาอาชีพตลอดชีวิต เช็คใบใหญ่ใบนั้นไม่มีค่าเท่ากับจิตวิญญาณของคุณเลย', zh: '💀 道德腐败。你拿到了钱，但贴片导致了严重感染。球员缺席了半个赛季。你被职业体育界终身封杀。那张巨额支票不值得你出卖灵魂。' },
                stats: { competence: 40, ethics: -100, leadership: -50, innovation: 60 }
            }
        ]
    },

    {
        id: 'pt_034',
        text: {
            en: '🏥 The "Frequent Flyer": A patient with chronic pain has been coming to you for 3 years, twice a week. He doesn\'t do his exercises, he just wants you to massage him and listen to his problems. You are essentially a highly-paid friend. He is taking up space that acute patients need.',
            th: '🏥 คนไข้ขาประจำ: คนไข้ที่มีอาการปวดเรื้อรังมาพบคุณนาน 3 ปีแล้ว อาทิตย์ละ 2 ครั้ง เขาไม่ยอมทำท่าบริหารเลย เขาแค่ต้องการให้คุณนวดและรับฟังปัญหาของเขา คุณเป็นเหมือนเพื่อนที่ได้รับค่าจ้างสูง เขาแย่งโควต้าที่คนไข้เคสหนักคนอื่นต้องการ',
            zh: '🏥 “常客”：一名患有慢性疼痛的患者已经找了你3年，每周两次。他不练习，只想让你给他按摩并听他诉苦。你基本上成了一个薪酬丰厚的倾听者。他占据了急症患者需要的空间。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚪 Firm Discharge: "Bill, we\'ve reached a plateau. My role is to help you move, not just provide comfort. I\'m discharging you with a maintenance plan and a recommendation for a massage therapist."', th: '🚪 ตระเตรียมการย้าย: "คุณบิลครับ เรามาถึงจุดอิ่มตัวแล้ว บทบาทของผมคือช่วยให้คุณเคลื่อนไหวได้ ไม่ใช่แค่ให้ความสบาย ผมจะทำเรื่องจำหน่ายคุณออกพร้อมแผนการดูแลตัวเองและแนะนำช่างนวดให้แทนนะครับ"', zh: '🚪 坚定出院：“比尔，我们已经遇到了瓶颈。我的职责是帮助你行动，而不仅仅是提供舒适感。我要为你办理出院，并提供一份保养计划和一位按摩师的推荐名单。”' },
                consequence: { en: '✅ Professional Integrity. He is upset, but you free up 2 slots a week for patients who actually need medical rehab. You maintain your status as a medical clinician, not a service worker.', th: '✅ ความซื่อสัตย์ในวิชาชีพ! เขาอาจจะอารมณ์เสีย แต่คุณได้ตารางว่าง 2 วันต่ออาทิตย์คืนมาเพื่อรักษาคนไข้ที่ต้องการกายภาพบัดจริงๆ คุณรักษาฐานะผู้เชี่ยวชาญทางการแพทย์ไม่ใช่พนักงานบริการ', zh: '✅ 专业正直。他很不高兴，但你每周为真正需要医疗康复的患者腾出了两个名额。你保持了临床医生的身份，而不是服务业人员。' },
                stats: { competence: 60, ethics: 80, leadership: 60, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '💸 Stable Revenue: "Keep him on the schedule. He pays, he likes the service, and it\'s easy money for the clinic. Why stir the pot?"', th: '💸 รายได้ที่มั่นคง: "ให้เขาอยู่ในตารางต่อไปเถอะ เขาจ่ายเงิน เขาชอบบริการ และมันเป็นเงินที่หาได้ง่ายสำหรับคลินิก จะไปหาเรื่องทำไม?"', zh: '💸 稳定收入：“让他留在名单上。他付钱，他喜欢这项服务，这对诊所来说是容易赚到的钱。为什么要没事找事？”' },
                consequence: { en: '📉 Career Stagnation. Your skills start to atrophy. You become known as the "soft" therapist. New, challenging cases are referred to your more aggressive colleagues. You traded growth for comfort.', th: '📉 อาชีพหยุดนิ่ง! ทักษะของคุณเริ่มถดถอย คุณเริ่มเป็นที่รู้จักในนามนักกายภาพ "สายอ่อน" เคสใหม่ๆ ที่ท้าทายถูกส่งไปให้เพื่อนร่วมงานที่กระตือรือร้นกว่า คุณแลกความเติบโตกับความสบาย', zh: '📉 职业停滞。你的技能开始退化。你变得以“软弱”治疗师著称。新的、具有挑战性的案例都被转给了你那些更积极的同事。你用成长换取了安逸。' },
                stats: { competence: 30, ethics: 40, leadership: 10, innovation: -20 }
            }
        ]
    },

    {
        id: 'pt_035',
        text: {
            en: '🧠 The Coma Milestone: You are working with a patient in a semi-conscious state (minimally conscious state). You think you saw a finger twitch in response to a command to "move," but the neurologist says it was just a reflex and wants to stop therapy to focus on comfort care.',
            th: '🧠 ความก้าวหน้าในภาวะโคม่า: คุณกำลังรักษาคนไข้ในภาวะกึ่งรู้สึกตัว คุณคิดว่าเห็นนิ้วเขากระดิกเพื่อตอบรับคำสั่ง "ขยับ" แต่หมอระบบประสาทบอกว่ามันแค่ปฏิกิริยาสะท้อนกลับและต้องการหยุดบำบัดเพื่อเน้นแค่การดูแลตามอาการ',
            zh: '🧠 昏迷里程碑：你正在治疗一名处于半意识状态（最低意识状态）的患者。你认为你看到了他在听到“动一下”的指令后手指抽动了一下，但神经科医生说那只是反射，并想停止治疗，转而关注舒适护理。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🎥 The Evidence Trap: "Wait. Give me 48 hours. I will set up a camera and record these sessions. If it\'s a response, his life depends on us continuing."', th: '🎥 กับดักหลักฐาน: "รอเถอะครับ ขอเวลาผม 48 ชั่วโมง ผมจะตั้งกล้องและบันทึกภาพการรักษาเหล่านี้ไว้ หากมันเป็นการตอบสนองจริง ชีวิตเขาขึ้นอยู่กับว่าเราจะรักษาต่อไหม"', zh: '🎥 证据捕捉：“等等。给我48小时。我会架起摄像机记录这些过程。如果这是反应，他的生命就取决于我们的持续治疗。”' },
                consequence: { en: '✅ Miraculous Catch. You capture the response on video—it\'s clear and consistent. The neurologist agrees to keep therapy. 6 months later, the patient is speaking. You were the only one who didn\'t give up.', th: '✅ การจับภาพที่มหัศจรรย์! คุณบันทึกการตอบสนองลงในวิดีโอได้ชัดเจนและสม่ำเสมอ หมอระบบประสาทตกลงให้รักษาต่อ 6 เดือนต่อมาคนไข้สามารถพูดได้ คุณเป็นคนเดียวที่ไม่มีวันยอมแพ้', zh: '✅ 奇迹般的发现。你拍下了录像——反应清晰且一致。神经科医生同意继续治疗。6个月后，患者开口说话了。你是唯一没有放弃的人。' },
                stats: { competence: 90, ethics: 90, leadership: 80, innovation: 60 }
            },
            {
                id: 'B',
                text: { en: '👨‍⚕️ Respect the Hierarchy: "The neurologist is the lead of this case. If he says it\'s a reflex, I must defer to his diagnostic expertise. Let\'s transition to comfort care."', th: '👨‍⚕️ เคารพตามลำดับขั้น: "หมอระบบประสาทเป็นหัวหน้าเคสนี้ ถ้าเขาบอกว่าเป็นรีเฟล็กซ์ ผมก็ต้องเชื่อฟังความเชี่ยวชาญการวินิจฉัยของเขา เรามาเปลี่ยนเป็นการดูแลตามอาการเถอะ"', zh: '👨‍⚕️ 尊重层级：“神经科医生是这个病例的主管。如果他说那只是反射，我必须尊重他的诊断专业知识。让我们过渡到舒适护理吧。”' },
                consequence: { en: '📉 Quiet Exit. The patient is moved to hospice. You wonder forever if you saw a spark of life. You played it safe and followed protocol, but your intuition stayed silent.', th: '📉 การจากไปอย่างเงียบเชียบ! คนไข้ถูกย้ายไปศูนย์ดูแลผู้ป่วยระยะสุดท้าย คุณมักจะสงสัยตลอดไปว่าสิ่งที่คุณเห็นคือประกายแห่งชีวิตจริงไหม คุณเลือกทางที่ปลอดภัยและทำตามระเบียบ แต่สัญชาตญาณของคุณกลับเงียบสนิท', zh: '📉 悄然离场。患者被转入安宁疗护。你永远在怀疑自己是否看到了一丝生命的火花。你做得很稳妥并遵守了流程，但你的直觉被埋没了。' },
                stats: { competence: 50, ethics: 60, leadership: 20, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_036',
        text: {
            en: '💊 The Opioid Offer: A patient with chronic hip pain offers you a bottle of their "leftover" high-strength oxycodone in exchange for 3 sessions off-the-books. "I don\'t need them, and you look like you work hard," they say.',
            th: '💊 ข้อเสนอยาเสพติด: คนไข้ที่มีอาการปวดสะโพกเรื้อรังเสนอยาแก้ปวดกลุ่มโอปิออยด์ (Oxycodone) "ที่เหลือ" ให้คุณ แลกกับการรักษาฟรี 3 ครั้งแบบไม่ลงบันทึก "ผมไม่ใช้แล้ว และคุณดูเหมือนทำงานหนักนะ" เขาว่า',
            zh: '💊 阿片类药物诱惑：一名患有慢性髋部疼痛的患者提议用一瓶他们“剩下”的高强效羟考酮换取3次账外治疗。他们说：“我不需要它们了，而你看起工作挺辛苦的。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚨 Immediate Rejection: "I am a medical professional. Possession of those without a prescription is a felony, let alone trading therapy for them. Please dispose of those at a pharmacy drop-box immediately."', th: '🚨 ปฏิเสธทันที: "ผมคือวิชาชีพทางการแพทย์ การครอบครองยาพวกนั้นโดยไม่มีใบสั่งยาคืออาชญากรรมร้ายแรง นับประสาอะไรกับการเอามาแลกเปลี่ยนรักษา กรุณานำยาพวกนี้ไปทิ้งที่จุดรับทิ้งยาของร้านยาเดี๋ยวนี้เลยนะครับ"', zh: '🚨 立即拒绝：“我是一名医疗专业人士。在没有处方的情况下持有这些药物是重罪，更不用说用治疗来换取了。请立即将这些药物送到药店的回收箱。”' },
                consequence: { en: '✅ Ethical Fortress. You protected your license and acted as a wall against the opioid epidemic. The patient is embarrassed but safe. You document the encounter to protect yourself from future claims.', th: '✅ ป้อมปราการจรรยาบรรณ! คุณปกป้องใบประกอบวิชาชีพและทำหน้าที่เป็นปราการต้านการระบาดของยาเสพติดกลุ่มโอปิออยด์ คนไข้เขินอายแต่ปลอดภัย คุณบันทึกเหตุการณ์นี้ไว้เพื่อปกป้องตัวเองจากการเรียกร้องใดๆ ในอนาคต', zh: '✅ 道德堡垒。你保护了自己的执照，并充当了抵御阿片类药物流行的屏障。患者感到尴尬但安全。你记录了这次遭遇以保护自己免受未来的索赔。' },
                stats: { competence: 50, ethics: 100, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤫 Discreet Disposal: "I can\'t trade for them... but I\'ll take those off your hands so they don\'t end up on the street. I\'ll get rid of them for you." (And then you keep them for a "rainy day")', th: '🤫 กำจัดแบบลับๆ: "ผมแลกเปลี่ยนไม่ได้หรอกครับ... แต่เดี๋ยวผมช่วยรับไว้เอง ยาจะได้ไม่หลุดไปถึงมืองภายนอก เดี๋ยวผมจัดการให้" (แล้วคุณก็เก็บไว้ใช้เองใน "วันที่จำเป็น")', zh: '🤫 秘密处理：“我不能用来做交易……但我会把它们从你手里拿走，以免流落街头。我会帮你处理掉。”（然后你留着它们以备“不时之需”）' },
                consequence: { en: '💀 Criminal Path. This is a federal crime. You eventually get caught in a random desk search or through an anonymous tip. You lose your license, your career, and face prison time. A single bottle destroyed everything.', th: '💀 เส้นทางอาชญากร! นี่คืออาชญากรรมร้ายแรง ในที่สุดคุณก็โดนจับได้จากการตรวจค้นโต๊ะทำงานแบบสุ่มหรือการแจ้งเบาะแส คุณเสียใบประกอบ อาชีพ และต้องติดคุก ยาขวดเดียวทำลายทุกอย่าง', zh: '💀 犯罪之路。这是联邦罪行。你最终在一次随机的办公桌检查中或通过匿名举报被抓获。你失去了执照和职业生涯，并面临牢狱之灾。一瓶药毁了一切。' },
                stats: { competence: 20, ethics: -100, leadership: -90, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_037',
        text: {
            en: '🧗 The Aging Athlete: A 70-year-old former pro tennis player wants you to clear them for a high-intensity tournament. Their heart rate reaches 180 during exercises and they have a history of atrial fibrillation. They say, "I\'d rather die on the court than sit on the porch."',
            th: '🧗 นักกีฬาสูงวัย: อดีตนักเทนนิสมืออาชีพวัย 70 ปีต้องการให้คุณเซ็นอนุญาตให้ลงแข่งทัวร์นาเมนต์ที่เข้มข้นสูง อัตราการเต้นของหัวใจเขาพุ่งถึง 180 ระหว่างออกกำลังกายและมีประวัติหัวใจเต้นผิดจังหวะ เขาบอกว่า "ผมยอมตายในสนามดีกว่านั่งเฉยๆ ที่ระเบียงบ้าน"',
            zh: '🧗 老龄运动员：一名70岁的前职业网球选手想让你批准他们参加一项高强度锦标赛。他们在练习期间心率达到180，并且有心房颤动病史。他们说：“我宁愿死在球场上，也不愿坐在门廊里。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛡️ Informed Autonomy: "I will not clear you for high intensity. But I will design a workload monitoring plan with a heart rate chest strap. We play in the \'Safe Zone\' or we don\'t play at all."', th: '🛡️ ทางเลือกที่เป็นอิสระแบบมีข้อมูล: "ผมจะไม่เซ็นอนุญาตให้คุณเล่นแบบเข้มข้นสูง แต่ผมจะออกแบบแผนการติดตามการทำงานของร่างกายด้วยสายรัดหน้าอกวัดชีพจร เราจะเล่นใน \'โซนปลอดภัย\' เท่านั้นไม่งั้นก็ไม่ต้องเล่นเลยครับ"', zh: '🛡️ 知情自主：“我不会批准你进行高强度运动。但我会设计一个带有心率胸带负荷监测计划。我们只在‘安全区’内运动，否则根本不参加。”' },
                consequence: { en: '✅ Controlled Passion. He plays, but with "speed limits" you set. He doesn\'t win the trophy, but he stays alive and continues to compete for years. You balanced his identity with medical reality.', th: '✅ ความหลงใหลที่มีขอบเขต! เขาลงแข่งได้ แต่ต้องมี "จำกัดความเร็ว" ตามที่คุณกำหนด เขาอาจจะไม่ได้แชมป์ แต่เขายังมีชีวิตอยู่และแข่งต่อได้อีกหลายปี คุณปรับตัวตนของเขาให้สมดุลกับความจริงทางการแพทย์', zh: '✅ 受控的激情。他参加了比赛，但遵守了你设定的“速度限制”。他没有赢得奖杯，但他保住了性命，并能继续参赛多年。你在他的自我身份认同与医学现实之间取得了平衡。' },
                stats: { competence: 70, ethics: 80, leadership: 60, innovation: 40 }
            },
            {
                id: 'B',
                text: { en: '🧱 The Hard No: "It\'s too dangerous. I am revoking your clearance. You have a heart condition. Tennis at this level will kill you. Stick to walking."', th: '🧱 ปฏิเสธเสียงแข็ง: "มันอันตรายเกินไป ผมขอไม่อนุญาต คุณมีโรคประจำตัวเรื่องหัวใจ เทนนิสในระดับนี้จะฆ่าคุณได้ ไปเดินออกกำลังกายอย่างเดียวพอครับ"', zh: '🧱 强硬拒绝：“太危险了。我撤销对你的批准。你有心脏病。这个水平的网球会害死你。坚持散步吧。”' },
                consequence: { en: '📉 Psychological Decline. He feels his life is over. He stops all exercise and becomes depressed. His physical health declines faster than it would have with tennis. You were medically correct, but destroyed his spirit.', th: '📉 สภาพจิตใจดิ่งเหว! เขารู้สึกว่าชีวิตจบสิ้นแล้ว เขาหยุดออกกำลังกายทุกอย่างและซึมเศร้า สุขภาพกายเขาทรุดลงเร็วกว่าตอนที่เล่นเทนนิสเสียอีก คุณทำถูกต้องทางการแพทย์แต่ทำลายจิตใจเขาจนพัง', zh: '📉 心理衰退。他觉得生活结束了。他停止了一切锻炼并变得抑郁。他的身体健康状况比打网球时恶化得更快。你在医学上是正确的，但摧毁了他精神。' },
                stats: { competence: 50, ethics: 70, leadership: -20, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_038',
        text: {
            en: '🏥 The "One-Stop Shop" Pitch: A chiropractor wants to rent the back room of your clinic. He offers a "kickback" for every patient you refer to him for "spinal adjustments." You know his methods are pseudoscientific, but he could pay 50% of your rent.',
            th: '🏥 โมเดลร้านเดียวจบ: หมอนวดจัดกระดูก (Chiropractor) ต้องการเช่าห้องหลังคลินิกของคุณ เขาเสนอจะให้ "เงินทอน" ทุกครั้งที่คุณส่งคนไข้ไปให้เขา "จัดกระดูก" คุณรู้ว่าวิธีการของเขาไม่ใช่หลักวิทยาศาสตร์แท้ๆ แต่เขาสามารถช่วยจ่ายค่าเช่าคลินิกคุณได้ถึง 50%',
            zh: '🏥 “一站式商店”推销：一名脊椎按摩师想租你诊所的后屋。他提议，你每转介一个病人给他进行“脊柱调整”，他就给你“回扣”。你清楚他的方法带有伪科学色彩，但他可以分担你50%的房租。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Clear Separation: "I will not rent space to someone whose methods I don\'t trust, and kickbacks are illegal in this state. My clinic\'s brand stays 100% evidence-based."', th: '🚫 แยกส่วนชัดเจน: "ผมจะไม่ให้เช่าพื้นที่กับคนที่มีวิธีการที่ผมไม่เชื่อถือ และเงินทอนถือเป็นเรื่องผิดกฎหมายในรัฐนี้ แบรนด์คลินิกของผมต้องอิงตามหลักฐานวิจัย 100% เท่านั้น"', zh: '🚫 明确划分：“我不会把空间租给我不信任其方法的人，而且在本州回扣是非法的。我的诊所品牌必须保持100%基于证据。”' },
                consequence: { en: '✅ Ethical Purity. You struggle with rent for 6 months, but your clinic becomes known as the most reliable PT practice in town. High-end doctors start referring exclusively to you because they know you won\'t "sell" their patients.', th: '✅ ความบริสุทธิ์ทางจรรยาบรรณ! คุณอาจจะลำบากเรื่องค่าเช่าอยู่ 6 เดือน แต่คลินิกคุณจะกลายเป็นสถานกายภาพบำบัดที่น่าเชื่อถือที่สุดในเมือง หมอเก่งๆ เริ่มส่งคนไข้มาให้คุณคนเดียวเพราะเขารู้ว่าคุณจะไม่เอาคนไข้เขาไปเร่ขาย', zh: '✅ 道德纯洁。你为房租奋斗了6个月，但你的诊所成了镇上最可靠的理疗诊所。高端医生开始专门向你转诊，因为他们知道你不会“出卖”他们的病人。' },
                stats: { competence: 60, ethics: 100, leadership: 70, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤝 The Business Pivot: "Rent him the room, but he must use your name and clinic branding. You take a management fee instead of a kickback to keep it legal."', th: '🤝 ปรับเปลี่ยนทางธุรกิจ: "ให้เขาเช่าห้องไป แต่เขาต้องใช้ชื่อและแบรนด์คลินิกของคุณ คุณเก็บค่าธรรมเนียมการจัดการแทนเงินทอนเพื่อความถูกกฎหมาย"', zh: '🤝 业务转向：“把房间租给他，但他必须使用你的名字和诊所品牌。你收取管理费而不是回扣，以保持合法性。”' },
                consequence: { en: '📉 Brand Dilution. You get the money, but your evidence-based patients feel confused. One patient gets a rib fracture during his adjustment. Because he\'s under your roof, YOU get sued. Saving rent cost you your reputation.', th: '📉 แบรนด์เจือจาง! คุณได้เงินแต่คนไข้ที่เน้นเนื้อหาทางวิชาการจะรู้สึกงุนงง มีคนไข้รายหนึ่งซี่โครงหักระหว่างการจัดกระดูกของเขา เพราะเขาอยู่ภายใต้ชายคาเดียวกับคุณ คุณเลยโดนฟ้องไปด้วย การเซฟค่าเช่าทำให้คุณต้องเสียชื่อเสียง', zh: '📉 品牌淡化。你拿到了钱，但你那些看重证据的病人感到困惑。一名病人在他的调整过程中发生了肋骨骨折。因为他在你的招牌下，你也遭到了起诉。节省房租让你付出了名誉的代价。' },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: 50 }
            }
        ]
    },

    {
        id: 'pt_039',
        text: {
            en: '📱 The AI Overlord: A new AI software claims it can write all your clinical notes in 5 seconds by listening to the session. You trialed it, and it often makes up small details (hallucinations) like "patient had no pain" when they actually did. It saves you 2 hours of paperwork per day.',
            th: '📱 ยุคแห่ง AI: ซอฟต์แวร์ AI ใหม่บอกว่ามันสามารถเขียนบันทึกการรักษาทั้งหมดได้ใน 5 วินาทีเพียงแค่ฟังการรักษา คุณลองใช้ดูแล้วพบว่ามันมักจะ "มโน" รายละเอียดเล็กๆ ขึ้นมาเอง เช่น "คนไข้ไม่เจ็บ" ทั้งที่เขาเจ็บจริงๆ แต่มันช่วยคุณประหยัดงานเอกสารได้วันละ 2 ชั่วโมง',
            zh: '📱 AI主宰：一款新的AI软件声称只要通过听取疗程，就能在5秒内写完你所有的临床笔记。你试用了，它经常捏造一些小细节（幻觉），比如明明病人有痛感，它却写“病人无痛感”。它每天能为你节省2小时的文书工作。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🔬 Editor-in-Chief Mode: "I\'ll use the AI, but I will manually proofread every single note before signing. It still saves an hour, and accuracy is maintained."', th: '🔬 โหมดบรรณาธิการ: "ผมจะใช้ AI ครับ แต่ผมจะตรวจทานบันทึกทุกตัวอักษรด้วยมือตัวเองก่อนเซ็นรับรอง มันยังช่วยประหยัดเวลาได้เป็นชั่วโมงและยังรักษาความถูกต้องไว้ได้"', zh: '🔬 总编模式：“我会用AI，但在签名之前，我会手动校对每一条笔记。这样每天仍能节省一小时，并能保持准确性。”' },
                consequence: { en: '✅ Efficiency Gains. You find a perfect balance. You are the least stressed therapist in the clinic because your paperwork is handled safely. You use the extra hour to research new manual techniques.', th: '✅ เพิ่มประสิทธิภาพ! คุณพบสมดุลที่สมบูรณ์แบบ คุณคือนักกายภาพที่เครียดน้อยที่สุดในคลินิกเพราะงานเอกสารได้รับการจัดการอย่างปลอดภัย คุณใช้เวลาที่ว่างไปศึกษาวิจัยเทคนิคการบำบัดใหม่ๆ', zh: '✅ 效率提升。你找到了完美的平衡。你是诊所里压力最小的治疗师，因为你的文书工作得到了安全处理。你利用多出来的小时研究新的手法技术。' },
                stats: { competence: 70, ethics: 80, leadership: 60, innovation: 90 }
            },
            {
                id: 'B',
                text: { en: '⏩ Full Automation: "The AI is smart enough. I\'ll just trust the summary and sign them at the end of the day. Who actually reads these notes anyway?"', th: '⏩ อัตโนมัติเต็มรูปแบบ: "AI มันฉลาดพอแหละ ผมเชื่อใจสรุปของมันแล้วเซ็นรวดเดียวตอนจบวัน ใครจะมานั่งอ่านบันทึกพวกนี้จริงๆ กันเชียว?"', zh: '⏩ 全自动化：“AI足够聪明了。我会信任这些摘要，并在一天结束时签名。反正到底谁会真的看这些笔记呢？”' },
                consequence: { en: '⚠️ Legal Landmine. A legal case arises for a patient you saw. The opposing lawyer finds the hallucinated detail in your note that contradicts the patient\'s testimony. You look incompetent on the stand. Accuracy cannot be outsourced.', th: '⚠️ กับดักทางกฎหมาย! มีเคสฟ้องร้องคนไข้ที่คุณเคยดู ทนายฝ่ายตรงข้ามพบข้อผิดพลาดที่ AI มโนขึ้นมาในบันทึกของคุณ ซึ่งขัดกับคำให้การของคนไข้ คุณดูไร้ฝีมือทันทีในชั้นศาล ความถูกต้องเป็นสิ่งที่จ้างใครทำแทนไม่ได้จริงๆ', zh: '⚠️ 法律地雷。你诊治过的一名病人引发了一起法律诉讼。对方律师发现了你的笔记中与病人证词相矛盾的虚构细节。你在证人席上显得非常无能。由于准确性是不可以外包的。' },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 70 }
            }
        ]
    },

    {
        id: 'pt_040',
        text: {
            en: '🏥 The Public vs Private Split: You work in a government hospital with a 6-month waitlist. You also have a private clinic where people can pay to see you tomorrow. A patient in the government list is in agony. He begs you to see him at your private clinic for half-price.',
            th: '🏥 รัฐ vs เอกชน: คุณทำงานในโรงพยาบาลรัฐที่มีคิวรอยาว 6 เดือน ขณะที่คลินิกเอกชนของคุณคนไข้สามารถจ่ายตังค์มาเจอคุณในวันรุ่งขึ้นได้เลย คนไข้ในรายชื่อรอของรัฐกำลังทรมานมาก เขาอ้อนวอนขอเจอคุณที่คลินิกเอกชนในราคาลดครึ่งหนึ่ง',
            zh: '🏥 公立与私立的鸿沟：你在一家公立医院工作，等待名单长达6个月。你还有一家私人诊所，人们可以付钱在明天就见到你。公立医院名单上的一名患者正处于剧痛之中。他求你去你的私人诊所看病，并希望打五折。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤝 Ethical Compassion: "Treat him at the private clinic for half price. It\'s a conflict of interest, but he needs help now and the system has failed him."', th: '🤝 ความเมตตาในวิชาชีพ: "รักษาเขาที่คลินิกเอกชนในราคาลดครึ่งหนึ่ง แม้มันจะมีผลประโยชน์ทับซ้อน แต่เขาต้องการความช่วยเหลือเดี๋ยวนี้และระบบรัฐมันพึ่งพาไม่ได้"', zh: '🤝 道德同情：“在私人诊所按半价为他治疗。这存在利益冲突，但他现在需要帮助，而且系统辜负了他。”' },
                consequence: { en: '⚠️ Administrative Trouble. Your hospital boss finds out you are "stealing" government patients for your private practice. You face a disciplinary hearing. You saved a man, but risked your career for it.', th: '⚠️ ปัญหาทางทะเบียน! หัวหน้าโรงพยาบาลรัฐพบว่าคุณ "ขโมย" คนไข้รัฐมาที่คลิกนิกเอกชน คุณโดนสอบวินัย คุณช่วยคนได้หนึ่งคนแต่ต้องเสี่ยงกับอาชีพตัวเอง', zh: '⚠️ 行政麻烦。你的医院老板发现你在为自己的私人诊所“盗取”公立医院的病人。你面临纪律听证会。你救了一个人，但却为此冒了职业风险。' },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🛑 System Boundary: "I cannot do that. It violates my hospital contract. I will speak to the head of the department to see if we can move your government appointment forward due to severity."', th: '🛑 ขีดเส้นใต้ระบบ: "ผมทำไม่ได้ครับ มันผิดสัญญาที่ผมทำไว้กับโรงพยาบาล เดี๋ยวผมจะคุยกับหัวหน้าแผนกให้เผื่อจะเลื่อนนัดในระบบรัฐขึ้นมาได้เพราะอาการคุณหนัก"', zh: '🛑 系统边界：“我不能那样做。这违反了我的医院合同。我会向科室主任反映，看看能不能因为病情严重而把你的公立医院预约提前。”' },
                consequence: { en: '✅ Proper Procedure. You manage to move him up by 4 months using legitimate clinical priority channels. You stayed within the rules and still helped him. You showed leadership within a broken system.', th: '✅ ทำตามขั้นตอนที่ถูกต้อง! คุณช่วยเลื่อนนัดเขาขึ้นมาได้ 4 เดือนโดยใช้ช่องทางความสำคัญทางคลินิกที่ถูกกฎหมาย คุณอยู่ในกฎแต่ยังสามารถช่วยเขาได้ คุณแสดงความเป็นผู้นำในระบบที่พังพินาศ', zh: '✅ 正切的程序。你利用合法的临床优先级渠道，成功将他的预约提前了4个月。你遵守了规则，同时也帮助了他。你在一个破损的系统中展现了领导力。' },
                stats: { competence: 70, ethics: 90, leadership: 100, innovation: 20 }
            }
        ]
    },

    {
        id: 'pt_041',
        text: {
            en: '🏥 The Clinic Acquisition: A massive national healthcare corporation offers to buy your private clinic for $2 million. They promise to keep all your staff, but their internal policy is to reduce treatment times from 45 minutes to 20 minutes to "streamline operations."',
            th: '🏥 การควบรวมกิจการ: บริษัทเครือข่ายโรงพยาบาลระดับชาติเสนอซื้อคลินิกของคุณในราคา 60 ล้านบาท พวกเขาสัญญาว่าจะรับพนักงานทุกคนไว้ แต่มีนโยบายภายในที่จะลดเวลาการรักษาจาก 45 นาทีเหลือ 20 นาทีเพื่อ "เพิ่มประสิทธิภาพในการดำเนินงาน"',
            zh: '🏥 诊所收购：一家大型国家医疗保健公提议以200万美元收购你的私人诊所。他们承诺保留所有员工，但其内部政策是将治疗时间从45分钟缩短至20分钟，以“优化运营”。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚀 Sell and Exit: "It\'s a fair price. I can use the $2M to fund a free community rehab center. My staff gets to keep their jobs with benefits I couldn\'t provide."', th: '🚀 ขายและถอนตัว: "มันคือราคาที่ยุติธรรม ผมสามารถนำเงิน 60 ล้านนี้ไปสร้างศูนย์ฟื้นฟูชุมชนให้ใช้ฟรีได้ พนักงานของผมก็จะได้ทำงานต่อพร้อมสวัสดิการที่ผมให้พวกเขาไม่ได้"', zh: '🚀 出售并退出：“这是一个公平的价格。我可以用这200万美元资助一个免费的社区康复中心。我的员工可以保留工作，并享受我无法提供的福利。”' },
                consequence: { en: '✅ Financial Freedom. You retire wealthy and your community center helps thousands. However, you watch your old clinic become a "PT Mill" where quality suffers. You traded your legacy for a larger impact elsewhere.', th: '✅ อิสรภาพทางการเงิน! คุณเกษียณอย่างร่ำรวยและศูนย์ชุมชนของคุณช่วยคนได้นับพันคน อย่างไรก็ตาม คุณต้องทนเห็นคลินิกเก่าของคุณกลายเป็น "โรงงานผลิตนักกายภาพ" ที่คุณภาพลดลง คุณแลกมรดกทางวิชาชีพกับผลกระทบที่กว้างขึ้นในที่อื่น', zh: '✅ 财务自由。你带着财富退休，你的社区中心帮助了成千上万的人。然而，你看着你以前的诊所变成了一个质量受损的“理疗磨坊”。你用自己的遗产换取了在别处获得更大影响力的机会。' },
                stats: { competence: 50, ethics: 70, leadership: 80, innovation: 60 }
            },
            {
                id: 'B',
                text: { en: '🧱 Refuse the Offer: "My clinic stands for quality, not volume. I won\'t sell my soul or my patients\' recovery for a check. We stay independent."', th: '🧱 ปฏิเสธข้อเสนอ: "คลินิกของผมเน้นคุณภาพ ไม่ใช่ปริมาณ ผมจะไม่ขายจิตวิญญาณหรือการฟื้นตัวของคนไข้เพื่อแลกกับเงิน เราจะเป็นอิสระต่อไป"', zh: '🧱 拒绝提议：“我的诊所代表的是质量，而不是数量。我不会为了支票而出卖我的灵魂或患者的康复。我们要保持独立。”' },
                consequence: { en: '✅ Moral Fortress. You remain the gold standard in the area. Your staff loves your integrity. You struggle with rising costs, but you are the only clinic in town where patients get 1-on-1 care. Your reputation is priceless.', th: '✅ ป้อมปราการศีลธรรม! คุณยังคงเป็นมาตรฐานสูงสุดในพื้นที่ พนักงานรักในความซื่อสัตย์ของคุณ คุณต้องสู้กับต้นทุนที่สูงขึ้น แต่คุณคือคลินิกเดียวในเมืองที่คนไข้ได้รับการดูแลแบบตัวต่อตัว ชื่อเสียงของคุณประเมินค่าไม่ได้', zh: '✅ 道德堡垒。你仍然是该地区的黄金标准。你的员工喜欢你的正直。你虽然在与不断上涨的成本作斗争，但你是镇上唯一一家病人能得到一对一护理的诊所。你的名声是无价的。' },
                stats: { competence: 70, ethics: 100, leadership: 90, innovation: 10 }
            }
        ]
    },

    {
        id: 'pt_042',
        text: {
            en: '🩺 The "Ghost" Therapist: You find out one of your top therapists hasn\'t actually seen their last 10 patients. They\'ve been billing for sessions while sitting in their car, copy-pasting progress notes from previous weeks. They are a single parent struggling to make ends meet.',
            th: '🩺 นักกายภาพบำบัดล่องหน: คุณพบว่านักกายภาพมือดีคนหนึ่งไม่ได้เข้าไปรักษาคนไข้ 10 รายล่าสุดจริงๆ เขาเบิกเงินค่ารักษาขณะนั่งอยู่ในรถ และใช้วิธีก๊อปวางบันทึกความก้าวหน้าจากอาทิตย์ก่อนๆ เขาเป็นพ่อเลี้ยงเดี่ยวที่กำลังลำบากเรื่องเงิน',
            zh: '🩺 “幽灵”理疗师：你发现你的一名顶级理疗师实际上并没有看最近的10名病人。他们在车里坐着的时候就在计费，并从前几周复制粘贴进度笔记。他们是一名正为生计奔波的单身家长。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Zero Tolerance: "This is insurance fraud and patient neglect. I have to fire you and report this to the licensing board. I will help your child, but I cannot hide your crime."', th: '🛑 ไม่มีการประนีประนอม: "นี่คือการฉ้อโกงประกันและละเลยคนไข้ ผมจำเป็นต้องไล่คุณออกและแจ้งสภาวิชาชีพ ผมจะช่วยดูแลลูกของคุณเอง แต่ผมไม่สามารถปกปิดความผิดของคุณได้"', zh: '🛑 零容忍：“这是保险欺诈和对患者的忽视。我必须解雇你，并将此事上报给执照委员会。我会帮助你的孩子，但我不能隐瞒你的罪行。”' },
                consequence: { en: '⚖️ Harsh Justice. You protected the clinic and the profession. The therapist loses their license. It is a tragedy, but you maintained the integrity of medical billing. You set a standard that fraud will not be tolerated.', th: '⚖️ ความยุติธรรมที่โหดร้าย! คุณปกป้องคลินิกและวิชาชีพไว้ได้ นักกายภาพคนนั้นเสียใบประกอบวิชาชีพ มันเป็นเรื่องน่าเศร้า แต่คุณรักษาความตรงไปตรงมาของการเบิกจ่ายทางการแพทย์ไว้ได้ คุณสร้างมาตรฐานว่าการโกงจะไม่มีที่ยืน', zh: '⚖️ 严厉的正义。你保护了诊所和这个职业。该理疗师失去了执照。这是一个悲剧，但你维护了医疗计费的诚信。你设定了一个标准，即欺诈行为绝不被姑息。' },
                stats: { competence: 60, ethics: 100, leadership: 70, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤝 Restorative Probation: "Repay the billed amounts from your salary. You are on unpaid leave for 2 weeks. I will supervise every session you do for a year. This is your only chance."', th: '🤝 การคุมประพฤติเพื่อแก้ไข: "คืนเงินที่เบิกเกินไปทั้งหมดโดยหักจากเงินเดือน คุณต้องพักงานโดยไม่รับเงินเดือน 2 สัปดาห์ และผมจะคุมทุกเซสชั่นที่คุณรักษาเป็นเวลา 1 ปี นี่คือโอกาสเดียวของคุณ"', zh: '🤝 恢复性缓刑：“从你的工资中扣除已结算的金额。你停职两周。一年内，我将监督你的每一次治疗。这是你唯一的机会。”' },
                consequence: { en: '⚠️ Emotional Leadership. The therapist becomes your most loyal and hardest-working employee. You saved a family from ruin. However, if an audit finds those 10 fake notes, YOU are also liable. You took a massive legal risk for a human.', th: '⚠️ ภาวะผู้นำทางอารมณ์! นักกายภาพคนนั้นกลายเป็นพนักงานที่ซื่อสัตย์และขยันที่สุดของคุณ คุณช่วยครอบครัวหนึ่งไว้ได้ แต่หากมีการตรวจสอบจนเจอ 10 บันทึกปลอมนั้น คุณจะต้องรับผิดชอบด้วย คุณรับความเสี่ยงทางกฎหมายมหาศาลเพื่อช่วยเพื่อนมนุษย์', zh: '⚠️ 情感领导。该理疗师成了你最忠诚、最勤奋的员工。你挽救了一个家庭。然而，如果审计发现了那10条虚假笔记，你也负有责任。你为一个普通人承担了巨大的法律风险。' },
                stats: { competence: 50, ethics: 50, leadership: 90, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_043',
        text: {
            en: '🧠 The Neural Link: A tech giant invites you to be the primary consultant for a brain-computer interface (BCI) that helps paralyzed patients move robotic limbs. It\'s revolutionary, but the animal testing phase was controversial.',
            th: '🧠 ลิงก์ประสาท: ยักษ์ใหญ่ด้านเทคโนโลยีเชิญคุณเป็นที่ปรึกษาหลักสำหรับอินเทอร์เฟซสมองกับคอมพิวเตอร์ (BCI) ที่ช่วยให้ผู้ป่วยอัมพาตเคลื่อนไหวแขนขาหุ่นยนต์ได้ มันคือการปฏิวัติวงการ แต่ช่วงการทดลองในสัตว์นั้นมีข้อถกเถียงอย่างมาก',
            zh: '🧠 神经连接：一家科技巨头邀请你担任脑机接口（BCI）的主管顾问，旨在帮助瘫痪患者移动机器人肢体。这是革命性的，但动物测试阶段颇具争议。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚀 Join the Future: "This technology will end paralysis. The ethical cost of the past is heavy, but the future benefit to millions of humans outweighs it. I\'m in."', th: '🚀 สู่อนาคต: "เทคโนโลยีนี้จะทำให้อัมพาตหายไป ต้นทุนทางศีลธรรมในอดีตนั้นหนักหนา แต่ผลประโยชน์ต่อมนุษย์นับล้านในอนาคตนั้นมากกว่า ผมตกลงครับ"', zh: '🚀 加入未来：“这项技术将终结瘫痪。过去的道德成本是沉重的，但未来对数百万人类的益处远超于此。我加入。”' },
                consequence: { en: '✅ Visionary Status. You help design the training protocols that allow a quadriplegic man to walk again. You are on the cover of Time Magazine. You changed the definition of physical therapy forever.', th: '✅ สถานะผู้มีวิสัยทัศน์! คุณช่วยออกแบบโปรโตคอลการฝึกที่ทำให้คนเป็นอัมพาตทั้งตัวกลับมาเดินได้อีกครั้ง คุณได้ขึ้นปกนิตยสาร Time คุณเปลี่ยนนิยามของกายภาพบำบัดไปตลอดกาล', zh: '✅ 远见卓识的地位。你帮助设计了让四肢瘫痪患者重新行走的训练方案。你登上了《时代》杂志的封面。你永远改变了理疗的定义。' },
                stats: { competence: 100, ethics: 50, leadership: 80, innovation: 100 }
            },
            {
                id: 'B',
                text: { en: '🚫 Ethical Refusal: "I cannot associate my name with a project that has such a dark history of animal welfare violations. I will wait for a more ethical competitor to reach that milestone."', th: '🚫 ปฏิเสธทางศีลธรรม: "ผมไม่สามารถเอาชื่อตัวเองไปผูกกับโปรเจกต์ที่มีประวัติด่างพร้อยเรื่องสวัสดิภาพสัตว์ได้ ผมจะรอคู่แข่งที่มีจริยธรรมมากกว่าบรรลุเป้าหมายนั้นแทน"', zh: '🚫 道德拒绝：“我不能让我的名字与一个有如此黑暗的违反动物福利历史的项目联系在一起。我会等待一个更符合道德的竞争对手达到这一里程碑。”' },
                consequence: { en: '✅ Moral Consistency. You maintain your "clean" reputation. However, the technology succeeds without you, and you remain a specialist in "manual therapy" while the world moves toward neural integration. You are a saint, but a dinosaur.', th: '✅ ความเสมอต้นเสมอปลายทางศีลธรรม! คุณรักษาชื่อเสียงที่ "สะอาด" ไว้ได้ แต่เทคโนโลยีนั้นก็ประสบความสำเร็จได้โดยไม่มีคุณ และคุณยังคงเป็นผู้เชี่ยวชาญด้าน "การบำบัดด้วยมือ" ในขณะที่โลกมุ่งหน้าสู่การรวมระบบประสาท คุณคือเซนต์แต่ตกรุ่น', zh: '✅ 道德一致性。你保持了“干净”的名声。然而，这项技术在没有你的情况下也取得了成功，当世界步向神经整合时，你仍然是“手动治疗”方面的专家。你是个圣人，但已落伍。' },
                stats: { competence: 60, ethics: 100, leadership: 40, innovation: -50 }
            }
        ]
    },

    {
        id: 'pt_044',
        text: {
            en: '🏥 The Burnout Strike: Your hospital staff is striking for better pay and lower patient ratios. If you join the strike, your current patients (some in critical recovery phases) will miss their sessions. If you don\'t join, your staff will view you as a traitor.',
            th: '🏥 การประท้วงจากความหมดไฟ: พนักงานในโรงพยาบาลของคุณกำลังประท้วงเรียกร้องค่าจ้างที่ดีขึ้นและลดสัดส่วนคนไข้ต่อพนักงาน หากคุณเข้าร่วม คนไข้ปัจจุบัน (บางรายอยู่ในช่วงวิกฤตของการฟื้นตัว) จะขาดการรักษา หากคุณไม่เข้าร่วม พนักงานจะมองว่าคุณเป็นคนทรยศ',
            zh: '🏥 倦怠罢工：你医院的员工正为获得更高薪酬和更低患者比例而罢工。如果你参加罢工，你现有的患者（其中一些正处于关键康复阶段）将错过治疗。如果你不参加，你的员工会将你视为叛徒。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✊ Solidarity for Change: "The system is broken. Missing 3 days of therapy is bad, but a burnt-out workforce is worse for patients in the long run. I stand with the staff."', th: '✊ เคียงข้างเพื่อการเปลี่ยนแปลง: "ระบบมันพัง การขาดการรักษา 3 วันมันแย่ก็จริง แต่พนักงานที่หมดไฟน่ะแย่กว่าสำหรับคนไข้ในระยะยาว ผมขออยู่เคียงข้างพนักงานครับ"', zh: '✊ 团结一致求变革：“系统已经崩溃。错过3天的治疗很糟糕，但一个倦怠的员工群体在长远来看对患者更糟糕。我与员工站在一边。”' },
                consequence: { en: '✅ Systemic victory. The strike succeeds. Ratios are lowered, and quality of care improves for the next decade. Some individual patients had minor setbacks, but you helped save the future of the hospital.', th: '✅ ชัยชนะเชิงระบบ! การประท้วงสำเร็จ สัดส่วนคนไข้ลดลง และคุณภาพการดูแลดีขึ้นในทศวรรษหน้า คนไข้บางรายอาจมีการพัฒนาที่ล่าช้าไปบ้าง แต่คุณช่วยปกป้องอนาคตของโรงพยาบาลไว้ได้', zh: '✅ 系统性胜利。罢工取得了成功。患者比例降低了，未来十年的护理质量得到了提升。虽然个别患者进度有所倒退，但你帮助挽救了医院的未来。”' },
                stats: { competence: 50, ethics: 80, leadership: 100, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤱 Patient-First Commitment: "I will not abandon my post. My primary duty is to the person on my table today. I will work through the strike and donate my pay to the staff\'s legal fund."', th: '🤱 คำมั่นสัญญาคนไข้ต้องมาก่อน: "ผมจะไม่ละทิ้งหน้าที่ หน้าที่หลักของผมคือคนที่อยู่บนเตียงรักษาในวันนี้ ผมจะทำงานต่อและบริจาคค่าจ้างให้กองทุนกฎหมายของพนักงานแทน"', zh: '🤱 患者至上的承诺：“我不会离开岗位。我的首要职责是面对今天诊断台上的病人。我将在罢工期间继续工作，并将我的薪酬捐给员工的法律基金。”' },
                consequence: { en: '⚠️ Isolated Saint. Your patients reach their goals, and they adore you. However, the staff stops talking to you. You are no longer invited to meetings and your clinical influence vanishes. You are a hero to the few, but an outcast to the many.', th: '⚠️ เซนต์ที่โดดเดี่ยว! คนไข้บรรลุเป้าหมายและรักคุณมาก แต่พนักงานเลิกคุยกับคุณ คุณไม่ได้รับเชิญเข้าประชุมอีกเลยและอำนาจการต่อลองในคลิกนิกก็หายไป คุณคือฮีโร่ของคนส่วนน้อยแต่เป็นคนนอกของคนส่วนใหญ่', zh: '⚠️ 孤立的圣人。你的患者达到了他们的目标，他们崇拜你。然而，员工们不再理睬你。你不再被邀请参加会议，你的临床影响力也消失了。你是少数人的英雄，却是多数人的弃儿。' },
                stats: { competence: 70, ethics: 90, leadership: 20, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_045',
        text: {
            en: '🏟️ The Performance Enhancement: You notice an elite track athlete you treat has blood markers suggesting EPO (doping) use. They haven\'t failed a drug test yet. If you report them, their career is over. If you don\'t, you are complicit in cheating.',
            th: '🏟️ การเพิ่มประสิทธิภาพที่ผิดกฎ: คุณสังเกตเห็นผลเลือดของนักกรีฑาชื่อดังที่รักษาอยู่ มีร่องรอยของการใช้ EPO (สารกระตุ้น) เขายังไม่ตกตรวจโด๊ป หากคุณรายงาน อาชีพเขาจบเห่ หากคุณไม่พูด คุณคือผู้สมร่วมคิดในการโกง',
            zh: '🏟️ 表现增强：你注意到你治疗的一名精英田径运动员血液指标显示使用了EPO（兴奋剂）。他们还没有在药物检测中失败。如果你举报他们，他们的职业生涯就毁了。如果你不举，你就是作弊的共犯。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚨 Integrity First: "Report it to the Anti-Doping Agency. Medicine exists to restore health, not to facilitate dangerous, illegal performance cheating."', th: '🚨 ความซื่อสัตย์ต้องมาก่อน: "รายงานไปยังองค์กรต่อต้านการใช้สารต้องห้าม การแพทย์มีไว้เพื่อกู้คืนสุขภาพ ไม่ใช่เพื่ออำนวยความสะดวกในการโกงที่อันตรายและผิดกฎหมาย"', zh: '🚨 正直第一：“向反兴奋剂机构报告。医学的存在是为了恢复健康，而不是为了协助危险且非法的表现作弊。”' },
                consequence: { en: '✅ Clean Sport Defender. The athlete is banned. You receive death threats from angry fans initially, but win the respect of the International Olympic Committee. You are hired as a lead integrity consultant for global athletics.', th: '✅ ผู้พิทักษ์กีฬาที่สะอาด! นักกีฬาคนนั้นถูกแบน ตอนแรกคุณโดนแฟนคลับถล่มฆ่า แต่คุณได้รับความเคารพจากคณะกรรมการโอลิมปิกสากล คุณได้รับเชิญเป็นที่ปรึกษาด้านความตรงไปตรงมาให้สมาคมกีฬาระดับโลก', zh: '✅ 纯净体育卫士。该运动员被禁赛。最初你收到了愤怒粉丝的死亡威胁，但赢得了国际奥委会的尊重。你被聘为全球田径运动的首席诚信顾问。' },
                stats: { competence: 50, ethics: 100, leadership: 80, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤫 The Silent Doctor: "I am their therapist, not their judge. I will warn them about the health risks of EPO but keep it confidential to maintain our HIPAA/Privacy trust."', th: '🤫 หมอผู้เงียบงัน: "ผมคือนักกายภาพของเขา ไม่ใช่ผู้พิพากษา ผมจะเตือนเขาเรื่องความเสี่ยงต่อสุขภาพแต่จะเก็บเป็นความลับเพื่อรักษาความไว้วางใจในความเป็นส่วนตัว"', zh: '🤫 沉默的医生：“我是他们的治疗师，不是他们的审判官。我会警告他们EPO对健康的风险，但会保持机密，以维护我们的隐私信任。”' },
                consequence: { en: '💀 Professional Disgrace. The athlete later dies of a heart attack during a race (a side effect of EPO). The investigation finds you knew and said nothing. You are sued by the family and lose your license forever.', th: '💀 ความเสื่อมเสียในวิชาชีพ! ต่อมานักกีฬาคนนั้นเสียชีวิตจากหัวใจวายระหว่างการแข่งขัน (ผลข้างเคียงจาก EPO) การสืบสวนพบว่าคุณรู้เรื่องแต่ไม่พูดอะไร คุณโดนครอบครัวเขาฟ้องและเสียใบประกอบวิชาชีพถาวร', zh: '💀 职业耻辱。该运动员后来在一次比赛中死于心脏病（EPO的副作用）。调查发现你知情不报。你被其家人起诉，并永远失去了执照。' },
                stats: { competence: 40, ethics: -60, leadership: 10, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_046',
        text: {
            en: '🏥 The Tele-Physical Therapy Boom: A startup wants you to lead their "AI-Only" rehab platform. Patients will be "treated" by an avatar that tracks their movement via webcam. No human therapist involved. It will be 90% cheaper for patients in developing countries.',
            th: '🏥 ยุคกายภาพบำบัดทางไกลเฟื่องฟู: สตาร์ทอัพต้องการให้คุณนำทีมแพลตฟอร์มฟื้นฟู "AI ล้วน" คนไข้จะได้รับ "การรักษา" โดยอวตารที่ติดตามการเคลื่อนไหวผ่านเว็บแคม โดยไม่มีนักกายภาพที่เป็นคนเข้ามาเกี่ยวข้องเลย มันจะมีราคาถูกลง 90% สำหรับคนไข้ในประเทศกำลังพัฒนา',
            zh: '🏥 远程理疗热潮：一家初创公司想让你领导他们的“纯AI”康复平台。患者将由一个通过网络摄像头跟踪其动作的虚拟形象进行“治疗”。没有人类治疗师参与。对于发展中国家的患者来说，这将便宜90%。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚀 Democratize Health: "The lack of human touch is a drawback, but providing access to millions who currently have ZERO rehab is a moral imperative. I will build the smartest AI protocols possible."', th: '🚀 กระจายสุขภาพสู่ปวงชน: "การขาดสัมผัสจากมนุษย์คือข้อเสีย แต่การมอบโอกาสในการรักษาให้กับคนนับล้านที่ตอนนี้เข้าไม่ถึงการรักษาเลยคือสิ่งสำคัญทางศีลธรรม ผมจะสร้างโปรโตคอล AI ที่ฉลาดที่สุดเท่าที่จะทำได้"', zh: '🚀 健康民主化：“缺乏人际接触是一个缺点，但为目前无法获得康复服务的数百万人提供渠道是一种道德义务。我将建立尽可能最智能的AI方案。”' },
                consequence: { en: '✅ Global Impact. Your software helps 5 million people in Africa and Southeast Asia regain mobility. You are criticized by high-end clinics for "de-skilling" the profession, but you become a hero of global public health.', th: '✅ ผลกระทบระดับโลก! ซอฟต์แวร์ของคุณช่วยผู้คนกว่า 5 ล้านคนในแอฟริกาและเอเชียตะวันออกเฉียงใต้ให้กลับมาเคลื่อนไหวได้อีกครั้ง คุณโดนคลินิกไฮเอนด์วิจารณ์ว่าทำให้วิชาชีพด้อยค่าลง แต่คุณกลายเป็นฮีโร่ด้านสาธารณสุขระดับโลก', zh: '✅ 全球影响力。你的软件帮助了非洲和东南亚的500万人恢复了行动能力。高端诊所批评你降低了该行业的专业技能，但你成了全球公共卫生的英雄。' },
                stats: { competence: 80, ethics: 80, leadership: 90, innovation: 100 }
            },
            {
                id: 'B',
                text: { en: '🛡️ Defend the Human Touch: "Physical therapy requires human intuition and hands-on skill. AI-only rehab is dangerous and hollow. I will lead a campaign to require human oversight for all digital rehab."', th: '🛡️ ปกป้องสัมผัสจากมนุษย์: "กายภาพบำบัดต้องใช้สัญชาตญาณของมนุษย์และทักษะการสัมผัส การบำบัดด้วย AI อย่างเดียวมันอันตรายและว่างเปล่า ผมจะนำแคมเปญเรียกร้องให้ต้องมีคนคุมการบำบัดดิจิทัลทุกรูปแบบ"', zh: '🛡️ 捍卫人际接触：“物理治疗需要人类的直觉和动手能力。纯AI康复是危险且空洞的。我将发起一项运动，要求所有数字康复都必须有人类监督。”' },
                consequence: { en: '✅ Professional Gatekeeper. You successfully pass laws requiring human sign-off on AI rehab. You saved the "soul" of the profession and kept PT wages high, but millions in poverty still have no access to care.', th: '✅ ผู้พิทักษ์วิชาชีพ! คุณช่วยผลักดันกฎหมายให้การรักษาด้วย AI ต้องมีการเซ็นรับรองโดยมนุษย์ได้สำเร็จ คุณช่วยรักษา "จิตวิญญาณ" ของวิชาชีพและทำให้ค่าจ้างนักกายภาพยังคงสูงอยู่ แต่คนนับล้านที่ยากจนก็ยังเข้าไม่ถึงการรักษาอยู่ดี', zh: '✅ 行业守门人。你成功通过了法律，要求AI康复必须有人类签字确认。你保住了该职业的“灵魂”，维持了高薪，但数百万贫困人口仍然无法获得护理。' },
                stats: { competence: 70, ethics: 60, leadership: 100, innovation: -50 }
            }
        ]
    },

    {
        id: 'pt_047',
        text: {
            en: '👵 The Inheritance Trap: A wealthy, lonely elderly patient wants to change her will to leave you her $500k house because "you are the only person who listens to me." She has no children. Accepting would be a massive ethical violation, but she insists.',
            th: '👵 กับดักมรดก: คนไข้สูงอายุที่ร่ำรวยและโดดเดี่ยวต้องการเปลี่ยนพินัยกรรมมอบบ้านมูลค่า 15 ล้านบาทให้คุณ เพราะ "คุณคือคนเดียวที่ยอมรับฟังฉัน" เธอไม่มีลูกหลาน การตอบตกลงจะเป็นการทำผิดจริยธรรมอย่างร้ายแรง แต่เธอยืนกรานจะให้',
            zh: '👵 遗产陷阱：一名富有且孤独的老年患者想更改遗嘱，将她价值50万美元的房子留给你，因为“你是唯一愿意听我说话的人”。她没有子女。接受这将是严重的道德违规，但她坚持这样做。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛡️ Firm Boundary: "I am touched, but I cannot accept. It violates my professional ethics. Let\'s set up a scholarship fund in your name for student physical therapists who specialize in geriatrics instead."', th: '🛡️ ขีดเส้นใต้ความสัมพันธ์: "ผมซึ้งใจมากครับ แต่ผมรับไม่ได้จริงๆ มันผิดจรรยาบรรณวิชาชีพของผม เอาแบบนี้ไหมครับ เรามาตั้งกองทุนทุนการศึกษาในชื่อของคุณให้แก่นักกายภาพบำบัดรุ่นใหม่ที่จะมาดูแลผู้สูงอายุแทนนะครับ"', zh: '🛡️ 坚定边界：“我很感动，但我不能接受。这违反了我的职业道德。不如我们以你的名义设立一个奖学金基金，专门资助研究老年病学的物理治疗学生吧。”' },
                consequence: { en: '✅ Ethical Saint. You avoided a massive lawsuit and licensing battle. The "Patient Name Scholarship" becomes your greatest legacy, funding 20 new therapists a year. Your name is honored for generations.', th: '✅ เซนต์แห่งจรรยาบรรณ! คุณเลี่ยงการโดนฟ้องร้องและศึกแย่งชิงใบประกอบวิชาชีพได้ "ทุนการศึกษาชื่อคนไข้" กลายเป็นมรดกที่ยิ่งใหญ่ที่สุดของคุณ ช่วยสร้างนักกายภาพใหม่ได้ปีละ 20 คน ชื่อของคุณจะได้รับการยกย่องไปหลายรุ่น', zh: '✅ 道德圣人。你避免了一场大规模的诉讼和执照之争。以该患者名字命名的奖学金成为了你最伟大的遗产，每年资助20名新治疗师。你的名字被世代传颂。' },
                stats: { competence: 50, ethics: 100, leadership: 90, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🤫 Discreet Acceptance: "Accept the gift but don\'t tell the clinic. It\'s her money and her choice. She is mentally competent. This is a life-changing reward for years of dedicated service."', th: '🤫 ยอมรับเงียบๆ: "ยอมรับของขวัญแต่ไม่ต้องบอกคลินิก มันคือเงินของเขาและทางเลือกของเขา เขายังมีสติครบถ้วนดี นี่คือรางวัลเปลี่ยนชีวิตสำหรับการทุ่มเททำงานหนักมาหลายปี"', zh: '🤫 秘密接受：“接受这份礼物但不要告诉诊所。这是她的钱，她的选择。她在精神上是健全的。这是多年奉献服务的改变一生的回报。”' },
                consequence: { en: '💀 Professional Ruin. After she passes, a distant nephew sues you for "undue influence." The story hits the news. You look like a predator who preyed on a lonely woman. You lose your house, your license, and your dignity.', th: '💀 ความล่มจมในวิชาชีพ! หลังจากเธอเสียชีวิต หลานห่างๆ ฟ้องคุณฐาน "ใช้อิทธิพลเกินควร" เรื่องนี้กลายเป็นข่าวใหญ่ คุณดูเหมือนนักล่าที่จ้องฮุบเงินหญิงชราที่โดดเดี่ยว คุณต้องเสียบ้าน เสียใบประกอบ และเสียศักดิ์ศรี', zh: '💀 职业毁灭。她去世后，一位远房侄子起诉你“施加不正当影响”。消息登上了新闻。你看起来像是个掠夺孤独女性财富的掠食者。你失去了房子、执照和尊严。' },
                stats: { competence: 30, ethics: -100, leadership: -50, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_048',
        text: {
            en: '🏟️ The Olympic Call: You are offered the role of Head PT for the Olympic team. It requires you to be away from your family and clinic for 6 months a year. Your replacement at the clinic is "okay" but not as skilled as you. Your patient outcomes at home will drop.',
            th: '🏟️ เสียงเรียกจากโอลิมปิก: คุณได้รับข้อเสนอให้เป็นหัวหน้านักกายภาพบำบัดทีมโอลิมปิก มันกำหนดให้คุณต้องห่างจากครอบครัวและคลินิกปีละ 6 เดือน คนที่จะมาแทนคุณที่คลินิกก็แค่ "ใช้ได้" แต่ไม่เก่งเท่าคุณ ผลการรักษาที่คลินิกจะลดลงแน่นอน',
            zh: '🏟️ 奥运征战：你被邀请担任奥运代表队的首席理疗师。这要求你每年有6个月离开家人和诊所。你在诊所的接替者“还可以”，但不如你熟练。你留在家里的患者的康复效果将会下降。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🥇 Pursue the Glory: "This is a once-in-a-lifetime chance. I\'ll train my replacement the best I can, but the Olympics is the pinnacle of the profession. I\'m going."', th: '🥇 ไขว่คว้าเกียรติยศ: "นี่คือโอกาสครั้งเดียวในชีวิต ผมจะฝึกคนที่มาแทนให้ดีที่สุดเท่าที่ทำได้ แต่โอลิมปิกคือจุดสูงสุดของวิชาชีพนี้ ผมจะไปครับ"', zh: '🥇 追求荣耀：“这是一生一次的机会。我会尽力培训接班人，但奥运会是职业生涯的巅峰。我一定要去。”' },
                consequence: { en: '✅ National Hero. You lead the team to a record gold medal count. You return with international prestige. However, you missed your child\'s first steps and the clinic lost 20% of its regular clients. You chose greatness over stability.', th: '✅ ฮีโร่ของชาติ! คุณนำทีมคว้าเหรียญทองเป็นประวัติการณ์ คุณกลับมาพร้อมชื่อเสียงระดับนานาชาติ อย่างไรก็ตาม คุณไม่ได้เห็นก้าวแรกของลูก และคลินิกเสียลูกค้าประจำไป 20% คุณเลือกความยิ่งใหญ่เหนือความมั่นคง', zh: '✅ 民族英雄。你带领团队创造了金牌纪录。你带着国际声誉归来。然而，你错过了孩子的第一次走路，诊所也流失了20%的常客。你选择了卓越而非稳。' },
                stats: { competence: 90, ethics: 60, leadership: 100, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '🏡 Stay Rooted: "I am a community clinician first. My local patients shouldn\'t suffer because of my ego. I will decline the offer and suggest a younger colleague for the role."', th: '🏡 อยู่ดูแลถิ่นฐาน: "ผมคือนักกายภาพบำบัดของชุมชน คนไข้ที่นี่ไม่ควรลำบากเพราะอีโก้ของผม ผมขอปฏิเสธและเสนอชื่อเพื่อนร่วมงานรุ่นใหม่ให้รับตำแหน่งแทนครับ"', zh: '🏡 留守本土：“我首先是一名社区临床医生。我的当地病人不应该因为我的自尊而受苦。我将拒绝这份邀约，并建议由一位更年轻的同事担任此职。”' },
                consequence: { en: '✅ Pillar of the Community. Your clinic thrives and your family life is stable and happy. You never become famous, but your patients stay healthy and your "mentee" becomes the Olympic PT thanks to your recommendation. You are a kingmaker.', th: '✅ เสาหลักของชุมชน! คลินิกของคุณรุ่งเรืองและชีวิตครอบครัวมั่นคงมีความสุข คุณไม่มีวันโด่งดังระดับโลก แต่คนไข้ของคุณมีสุขภาพดี และ "ลูกศิษย์" ของคุณก็ได้เป็นนักกายภาพโอลิมปิกเพราะคำแนะนำของคุณ คุณคือผู้อยู่เบื้องหลังความสำเร็จ', zh: '✅ 社区支柱。你的诊所生意兴隆，家庭生活稳定幸福。你从未出名，但你的病人保持着健康，你的“徒弟”在你的推荐下成为了奥运理疗师。你是个伯乐。' },
                stats: { competence: 70, ethics: 90, leadership: 80, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_049',
        text: {
            en: '🧬 The Genetic Screening: A patient asks you to review their genetic map from a direct-to-consumer kit. You notice a marker for ALS (Lou Gehrig’s disease). They haven\'t noticed symptoms yet. If you tell them, you might trigger a severe mental health crisis. If you don\'t, they miss early intervention chances.',
            th: '🧬 การตรวจรหัสพันธุกรรม: คนไข้ขอให้คุณช่วยดูแผนที่พันธุกรรมจากชุดตรวจเองที่บ้าน คุณสังเกตเห็นตัวบ่งชี้ของโรค ALS (กล้ามเนื้ออ่อนแรง) เขายังไม่มีอาการ หากคุณบอก คุณอาจทำให้เขาเกิดวิกฤตสุขภาพจิตอย่างรุนแรง หากไม่บอก เขาจะเสียโอกาสในการรักษาตั้งแต่เนิ่นๆ',
            zh: '🧬 基因筛查：一名患者请你检查他们从直接面向消费者的检测试剂盒中获得的基因图谱。你注意到了ALS（渐冻症）的标志。他们还没有注意到症状。如果你告诉他们，可能会引发严重的心理健康危机。如果你不告诉他们，他们就会错过早期干预的机会。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤝 The Medical Bridge: "I will tell them, but I\'ll have a genetic counselor on the phone with us. We will face the truth together and start a preventative strengthening program TODAY."', th: '🤝 สะพานเชื่อมการแพทย์: "ผมจะบอกเขาครับ แต่ผมจะให้ที่ปรึกษาด้านพันธุกรรมมาร่วมคุยด้วย เราจะเผชิญความจริงด้วยกันและเริ่มโปรแกรมสร้างความแข็งแรงเพื่อป้องกันตั้งแต่วันนี้เลย"', zh: '🤝 医疗桥梁：“我会告诉他们，但会让遗传咨询师和我们一起通话。我们将共同面对真相，并从今天开始进行预防性强化训练。”' },
                consequence: { en: '✅ Graceful intervention. The patient is devastated but grateful. Because of the early start, they maintain their ability to walk for 3 years longer than they would have. You were more than a PT; you were a guardian.', th: '✅ การเข้าแทรกแซงที่นุ่มนวล! คนไข้เสียใจแต่ก็ซาบซึ้งใจ เพราะเริ่มต้นเร็ว เขาจึงยังเดินได้นานกว่าเดิมถึง 3 ปี คุณเป็นมากกว่านักกายภาพบำบัด แต่คุณคือผู้คุ้มครองชีวิตเขา', zh: '✅ 优雅的干预。患者感到极度悲伤但心存感激。由于开始得早，他们保持行走能力的时间比原来长了3年。你不仅仅是一名物理治疗师，你更是一位守护者。' },
                stats: { competence: 80, ethics: 100, leadership: 80, innovation: 30 }
            },
            {
                id: 'B',
                text: { en: '🚫 Stay in your Lane: "That is outside my scope of practice as a PT. I will tell them I am not qualified to interpret genetic data and urge them to see a medical doctor immediately."', th: '🚫 ไม่ก้าวก่ายหน้าที่: "นั่นนอกเหนือขอบเขตวิชาชีพนักกายภาพของผม ผมจะบอกเขาว่าผมไม่มีคุณสมบัติในการแปลผลพันธุกรรม และเตือนให้เขาไปพบแพทย์ทันทีแทน"', zh: '🚫 恪尽职守：“这超出了我作为物理治疗师的执业范围。我会告诉他们我没有资格解释基因数据，并敦促他们立即去看医生。”' },
                consequence: { en: '⚠️ Safe but Slow. You followed the legal rules perfectly. However, it takes the patient 6 months to get a doctor\'s appointment. By then, they have dropped foot and lost 40% of their strength. You protected yourself, but the patient suffered a delay.', th: '⚠️ ปลอดภัยแต่ล่าช้า! คุณทำตามกฎหมายเป๊ะ แต่คนไข้ต้องใช้เวลาถึง 6 เดือนกว่าจะนัดหมอได้ ถึงตอนนั้นเขาก็ทางอาการทรุดลงและแรงหายไป 40% แล้ว คุณปกป้องตัวเองได้ แต่คนไข้ต้องทนทุกข์เพราะความล่าช้า', zh: '⚠️ 安全但缓慢。你完美地遵守了法律规则。然而，患者花了6个月才预约到医生。到那时，他们已经出现了足下垂并失去了40%的力量。你保护了自己，但患者遭受了延误。' },
                stats: { competence: 50, ethics: 70, leadership: 40, innovation: 0 }
            }
        ]
    },

    {
        id: 'pt_050',
        text: {
            en: '📜 The Legacy Choice: You are 70 years old and retiring. You can either sell your clinic to a tech-rehab firm (more money) or gift it to the junior PT you’ve mentored for 10 years (poverty for you, legacy for the clinic). What is your final act?',
            th: '📜 ทางเลือกสุดท้าย: คุณอายุ 70 ปีและกำลังจะเกษียณ คุณสามารถเลือกขายคลินิกให้กับบริษัทเทคโนโลยีการแพทย์ (ได้เงินเยอะ) หรือมอบให้เป็นของขวัญแก่นักกายภาพรุ่นน้องที่คุณปั้นมา 10 ปี (คุณจะรวยน้อยลง แต่มรดกทางวิชาชีพจะคงอยู่) การกระทำสุดท้ายของคุณคืออะไร?',
            zh: '📜 遗产选择：你70岁了，即将退休。你可以选择将诊所卖给一家科技康复公司（赚更多的钱），或者将其赠送给你指导了10年的初级治疗师（你会变得贫穷，但诊所得以传承）。你的最后一举是什么？'
        },
        options: [
            {
                id: 'A',
                text: { en: '💰 The Golden Handshake: "Sell to the tech firm. I earned this retirement. The junior can go work for them; they hire everyone anyway. It\'s just business."', th: '💰 เงินก้อนสุดท้าย: "ขายให้บริษัทเทคโนโลยีเถอะ ผมสมควรได้รับเงินก้อนนี้วัยเกษียณ รุ่นน้องคนนั้นก็ไปทำงานกับเขาได้อยู่แล้วยังไงเขาก็รับทุกคน มันก็แค่ธุรกิจครับ"', zh: '💰 金色握手：“卖给科技公司。我理应得到这笔退休金。那个后辈可以去为他们工作；反正他们谁都雇。这只是生意。”' },
                consequence: { en: '✅ Wealthy Retirement. You live a luxury life. But the clinic branding is removed, the staff is replaced by robots, and your 30 years of manual therapy excellence is deleted from history in a month. You are rich, but forgotten.', th: '✅ เกษียณอย่างมั่งคั่ง! คุณใช้ชีวิตหรูหรา แต่แบรนด์คลินิกถูกลบหายไป พนักงานถูกแทนที่ด้วยหุ่นยนต์ และความเชี่ยวชาญ 30 ปีของคุณถูกลบออกไปจากประวัติศาสตร์ในเวลาเพียงเดือนเดียว คุณรวย แต่ไม่มีใครจำคุณได้', zh: '✅ 优渥退休。你过着奢侈的生活。但诊所的品牌被移除，员工被机器人取代，你30年的卓越手法治疗经验在一个月内就从历史上消失了。你很富有，但已被遗忘。' },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: { en: '🏛️ The Torch Bearer: "Gift the clinic to my protégé. He carries my hands, my heart, and my standards. My legacy lives through the people he will heal for the next 30 years."', th: '🏛️ ผู้ส่งต่อคบเพลิง: "ยกคลินิกให้ลูกศิษย์ผม เขาได้รับทั้งทักษะ จิตใจ และมาตรฐานของผมไปแล้ว มรดกของผมจะคงอยู่ผ่านผู้คนที่เขาจะรักษาต่อไปในอีก 30 ปีข้างหน้า"', zh: '🏛️ 火炬传递者：“将诊所送给我的得意门生。他继承了我的手艺、我的心和我的标准。我的遗产将通过他在未来30年里治愈的人们而延续。”' },
                consequence: { en: '✅ Immortal Legacy. You live modestly, but "YourName Physical Therapy" remains the #1 clinic for another generation. You are invited back as a guest of honor every year. You didn\'t take the money, but you became a legend.', th: '✅ มรดกที่เป็นนิรันดร์! คุณใช้ชีวิตอย่างประหยัด แต่คลินิกชื่อของคุณยังคงเป็นที่ #1 ไปอีกชั่วอายุคน คุณได้รับเชิญเป็นแขกผู้มีเกียรติกลับมาทุกปี คุณไม่ได้เอาเงิน แต่คุณกลายเป็นตำนาน', zh: '✅ 不朽的遗产。你过着朴素的生活，但以你名字命名的物理治疗室在下一代人中依然是排名第一的诊所。你每年都被作为上宾请回去。你没拿钱，但你成了传奇。' },
                stats: { competence: 70, ethics: 100, leadership: 100, innovation: 0 }
            }
        ]
    },
];