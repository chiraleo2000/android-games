// Accountant Career Questions
// Comprehensive set: 50 detailed questions covering all aspects of Accountant
// Sections: Ethics, Tax, Reporting, Clients, Strategy

export const accountantQuestions = [

    // SECTION 1: PROFESSIONAL ETHICS & INTEGRITY (Questions 1-10)

    {
        id: 'ac_001',
        text: {
            en: '📊 A major client asks you to "adjust" the inventory numbers to meet a loan covenant requirement, implying they might take their business elsewhere if you refuse.',
            th: '📊 ลูกค้ารายใหญ่ขอให้คุณ "ปรับ" ตัวเลขสินค้าคงคลังเพื่อให้เป็นไปตามข้อกำหนดสัญญาเงินกู้ โดยบอกเป็นนัยว่าอาจย้ายธุรกิจไปที่อื่นหากคุณปฏิเสธ',
            zh: '📊 客户要求你“调整”库存数据以满足贷款契约要求，暗示如果你拒绝，他们可能会将业务转移到别处。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Refuse firmly and explain that fraudulent reporting constitutes a criminal offense and violates professional standards', th: '🚫 ปฏิเสธอย่างหนักแน่นและอธิบายว่าการรายงานเท็จถือเป็นการกระทำผิดทางอาญาและละเมิดมาตรฐานวิชาชีพ', zh: '🚫 坚决拒绝，并解释欺诈性报告构成刑事犯罪并违反专业标准' }, consequence: { en: '✅ Integrity Maintained! You lose the client but avoid prison and disbarment. Your reputation for honesty eventually attracts better clients.', th: '✅ รักษาความซื่อสัตย์! คุณเสียลูกค้าแต่หลีกเลี่ยงคุกและการถูกเพิกถอนใบอนุญาต', zh: '✅ 保持诚信！你失去了客户，但避免了监禁和被取消资格。' }, stats: { competence: 20, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '📝 Make the adjustment "just this once" to save the client relationship', th: '📝 ทำการปรับเปลี่ยน "แค่ครั้งนี้ครั้งเดียว" เพื่อรักษาความสัมพันธ์กับลูกค้า', zh: '📝 “仅此一次”进行调整以挽救客户关系' }, consequence: { en: '😱 Fraud Committed! The bank discovers the discrepancy later. You face legal action and loss of your CPA license.', th: '😱 การฉ้อโกงเกิดขึ้น! ธนาคารพบความคลาดเคลื่อนในภายหลัง คุณต้องเผชิญกับการดำเนินการทางกฎหมาย', zh: '😱 犯下欺诈罪！银行随后发现了差异。你面临法律诉讼并失去CPA执照。' }, stats: { competence: -20, ethics: -50, leadership: -30, innovation: -20 } },
            { id: 'C', text: { en: '🔍 Review the inventory valuation methods to see if a legitimate change (like FIFO to Weighted Average) helps, while staying compliant', th: '🔍 ตรวจสอบวิธีการประเมินมูลค่าสินค้าคงคลังว่าการเปลี่ยนที่ถูกกฎหมาย (เช่น FIFO เป็น Weighted Average) ช่วยได้หรือไม่ โดยยังคงปฏิบัติตามกฎระเบียบ', zh: '🔍 审查库存估值方法，看是否可以通过合法的变更（如从FIFO改为加权平均法）来提供帮助，同时保持合规' }, consequence: { en: '✅ Expert Problem Solving! You find a legal solution or confirm none exists. You advocate for the client without crossing the line.', th: '✅ การแก้ปัญหาโดยผู้เชี่ยวชาญ! คุณหาทางออกที่ถูกกฎหมาย', zh: '✅ 专家解决问题！你找到了合法的解决方案。' }, stats: { competence: 45, ethics: 40, leadership: 35, innovation: 30 } },
            { id: 'D', text: { en: '🤐 Ignore the request and file the correct numbers without telling the client', th: '🤐 เพิกเฉยต่อคำขอและยื่นตัวเลขที่ถูกต้องโดยไม่บอกลูกค้า', zh: '🤐 忽略请求并提交正确的数字而不告诉客户' }, consequence: { en: '⚠️ Communication Breakdown! The client is blindsided when the loan is denied and fires you for lack of communication.', th: '⚠️ การสื่อสารล้มเหลว! ลูกค้าตกใจเมื่อเงินกู้และไล่คุณออก', zh: '⚠️ 沟通崩溃！当贷款被拒时客户措手不及，因缺乏沟通解雇了你。' }, stats: { competence: 10, ethics: 20, leadership: -25, innovation: -10 } }
        ]
    },

    {
        id: 'ac_002',
        text: {
            en: '💼 You discover that a junior accountant on your team has been accidentally under-reporting expenses for a client for six months.',
            th: '💼 คุณค้นพบว่านักบัญชีระดับล่างในทีมของคุณรายงานค่าใช้จ่ายต่ำกว่าความเป็นจริงสำหรับลูกค้าโดยบังเอิญเป็นเวลาหกเดือน',
            zh: '💼 你发现团队中的一名初级会计师在过去六个月里意外地少报了客户的费用。'
        },
        options: [
            { id: 'A', text: { en: '📢 Immediately inform the client, apologize, and file amended returns while waiving your fees for the extra work', th: '📢 แจ้งลูกค้าทันที ขอโทษ และยื่นแบบแสดงรายการแก้ไขพร้อมยกเว้นค่าธรรมเนียมสำหรับงานพิเศษ', zh: '📢 立即通知客户，道歉，并提交修正申报表，同时免除额外工作的费用' }, consequence: { en: '✅ Trust Rebuilt! The client appreciates the transparency and accountability. Your firm\'s reputation for owning mistakes is strengthened.', th: '✅ สร้างความไว้วางใจใหม่! ลูกค้าชื่นชมความโปร่งใส', zh: '✅ 重建信任！客户赞赏透明度和问责制。' }, stats: { competence: 30, ethics: 45, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🤫 Fix it quietly in the next period\'s report hoping no one notices', th: '🤫 แก้ไขอย่างเงียบๆ ในรายงานรอบถัดไปโดยหวังว่าจะไม่มีใครสังเกตเห็น', zh: '🤫 希望没人注意，在下一期的报告中悄悄修正' }, consequence: { en: '⚠️ Ethical Risk! If noticed, this looks like cover-up vs. mistake. Can destroy trust completely.', th: '⚠️ ความเสี่ยงทางจริยธรรม! หากถูกจับได้จะดูเหมือนการปกปิด', zh: '⚠️ 道德风险！如果被发现，这看起来像是掩盖而非错误。' }, stats: { competence: -10, ethics: -30, leadership: -20, innovation: -10 } },
            { id: 'C', text: { en: '👉 Blame the software and tell the client it was a technical glitch', th: '👉 โทษซอฟต์แวร์และบอกลูกค้าว่าเป็นข้อผิดพลาดทางเทคนิค', zh: '👉 怪罪软件并告诉客户这是技术故障' }, consequence: { en: '😱 Lying! You shift blame falsely. If the client asks IT audit, you are exposed.', th: '😱 โกหก! คุณโยนความผิด', zh: '😱 撒谎！你错误地推卸责任。' }, stats: { competence: -15, ethics: -40, leadership: -30, innovation: -5 } },
            { id: 'D', text: { en: '👨‍🏫 Use it as a teaching moment for the junior staff but check all their work personally before fixing', th: '👨‍🏫 ใช้เป็นบทเรียนสำหรับพนักงานระดับล่างแต่ตรวจสอบงานทั้งหมดด้วยตนเองก่อนแก้ไข', zh: '👉 将其作为初级员工的教学时刻，但在修正前亲自检查所有工作' }, consequence: { en: '✅ Management Success! You ensure accuracy going forward and mentor the team member.', th: '✅ ความสำเร็จในการจัดการ! คุณรับรองความถูกต้อง', zh: '✅ 管理成功！你确保了未来的准确性并指导团队成员。' }, stats: { competence: 35, ethics: 35, leadership: 45, innovation: 15 } }
        ]
    },

    {
        id: 'ac_003',
        text: {
            en: '🎁 A vendor you audit sends you expensive tickets to a major sporting event just before auditing season begins.',
            th: '🎁 ผู้ขายที่คุณตรวจสอบส่งตั๋วราคาแพงสำหรับงานกีฬารายการใหญ่ให้คุณก่อนเริ่มฤดูกาลตรวจสอบ',
            zh: '🎁 你审计的一家供应商在审计季节开始前给你寄了一张昂贵的体育赛事门票。'
        },
        options: [
            { id: 'A', text: { en: '🔙 Return the tickets politely, citing firm policy on auditor independence and gifts', th: '🔙 คืนตั๋วอย่างสุภาพ โดยอ้างนโยบายบริษัทเกี่ยวกับความเป็นอิสระของผู้ตรวจสอบและของขวัญ', zh: '🔙 礼貌地退回门票，引用公司关于审计员独立性和礼物的政策' }, consequence: { en: '✅ Independence Preserved! You maintain objectivity and professional distance.', th: '✅ รักษาความเป็นอิสระ! คุณรักษาความเป็นกลาง', zh: '✅ 保持独立性！你保持客观性和专业距离。' }, stats: { competence: 20, ethics: 40, leadership: 25, innovation: 5 } },
            { id: 'B', text: { en: '🎟️ Accept the tickets but promise yourself it won\'t affect your judgment', th: '🎟️ รับตั๋วแต่สัญญากับตัวเองว่าจะไม่ส่งผลต่อนิจฉัยของคุณ', zh: '🎟️ 接受门票但向自己保证这不会影响你的判断' }, consequence: { en: '⚠️ Concept Conflict! Even if unbiased, the *appearance* of conflict invalidates the audit.', th: '⚠️ ความขัดแย้งเชิงแนวคิด! แม้ว่าจะไม่ลำเอียง แต่รูปลักษณ์ความขัดแย้งทำให้การตรวจสอบเป็นโมฆะ', zh: '⚠️ 概念冲突！即使没有偏见，冲突的*表象*也会使审计无效。' }, stats: { competence: -10, ethics: -30, leadership: -15, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Give the tickets to a colleague who isn\'t involved in this specific audit', th: '🤝 ให้ตั๋วแก่เพื่อนร่วมงานที่ไม่ได้เกี่ยวข้องกับการตรวจสอบนี้', zh: '🤝 把门票给没有参与此特定审计的同事' }, consequence: { en: '⚠️ Grey Area! Still creates a relationship of debt between the firm and the auditee.', th: '⚠️ พื้นที่สีเทา! ยังคงสร้างความสัมพันธ์แห่งหนี้บุญคุณ', zh: '⚠️ 灰色地带！仍然在事务所和被审计方之间建立了债务关系。' }, stats: { competence: 5, ethics: -10, leadership: 0, innovation: 5 } },
            { id: 'D', text: { en: '📢 Disclose the gift to your ethics partner and ask for ruling', th: '📢 เปิดเผยของขวัญต่อหุ้นส่วนจริยธรรมของคุณและขอคำตัดสิน', zh: '📢 向你的道德合伙人披露礼物并寻求裁决' }, consequence: { en: '✅ Transparent! By following protocol, you protect yourself and the firm.', th: '✅ โปร่งใส! การทำตามโปรโตคอลช่วยปกป้องคุณ', zh: '✅ 透明！通过遵循协议，你保护了自己和公司。' }, stats: { competence: 25, ethics: 35, leadership: 30, innovation: 10 } }
        ]
    },

    {
        id: 'ac_004',
        text: {
            en: '📉 Your analysis predicts a client company will fail within 12 months (Going Concern), but the CEO begs you not to include this note as it will "seal their fate."',
            th: '📉 การวิเคราะห์ของคุณทำนายว่าบริษัทลูกค้าจะล้มเหลวภายใน 12 เดือน (Going Concern) แต่ CEO ขอร้องไม่ให้รวมบันทึกนี้เพราะจะ "ตัดสินชะตากรรมของพวกเขา"',
            zh: '📉 你的分析预测一家客户公司将在12个月内倒闭（持续经营），但CEO恳求你不要包含这条注记，因为它将“决定他们的命运”。'
        },
        options: [
            { id: 'A', text: { en: '📝 Include the Going Concern note regardless. Investors and creditors have a right to know the financial reality.', th: '📝 รวมบันทึก Going Concern ไม่ว่าอย่างไร นักลงทุนและเจ้าหนี้มีสิทธิ์รู้ความจริงทางการเงิน', zh: '📝 无论如何都要包含持续经营注记。投资者和债权人有权了解财务真相。' }, consequence: { en: '✅ Duty Fulfilled! It\'s painful, but your primary duty is to the public and truth in financial reporting.', th: '✅ ปฏิบัติหน้าที่ครบถ้วน! มันเจ็บปวด แต่หน้าที่หลักของคุณคือต่อสาธารณะ', zh: '✅ 履行职责！这很痛苦，但你的主要职责是对公众和财务报告的真实性负责。' }, stats: { competence: 40, ethics: 45, leadership: 35, innovation: 10 } },
            { id: 'B', text: { en: '🤝 Agree to omit it if they provide a "strong" turnaround plan, even if you doubt it', th: '🤝 ตกลงที่จะละเว้นหากพวกเขามีแผนฟื้นฟูที่ "แข็งแกร่ง" แม้ว่าคุณจะสงสัยก็ตาม', zh: '🤝 如果他们提供“强有力”的扭亏计划，同意省略它，即使你对此表示怀疑' }, consequence: { en: '⚠️ Negligence Risk! If they fail, you will be sued for misleading investors.', th: '⚠️ ความเสี่ยงต่อความประมาท! หากพวกเขาล้มเหลว คุณจะถูกฟ้อง', zh: '⚠️ 疏忽风险！如果他们失败，你将因误导投资者而被起诉。' }, stats: { competence: -20, ethics: -40, leadership: -20, innovation: -10 } },
            { id: 'C', text: { en: '🤐 Soften the language to hint at issues without explicitly stating "doubt about ability to continue"', th: '🤐 ลดความรุนแรงของภาษาเพื่อบอกใบ้ถึงปัญหาโดยไม่ต้องระบุชัดเจนว่า "สงสัยในความสามารถที่จะดำเนินการต่อ"', zh: '🤐 软化措辞，暗示问题而不明确说明“对持续能力的怀疑”' }, consequence: { en: '⚠️ Ambiguity! Vague reporting puts you at risk and fails stakeholders.', th: '⚠️ ความกำกวม! การรายงานที่คลุมเครือทำให้คุณเสี่ยง', zh: '⚠️ 模棱两可！含糊的报告让你面临风险并辜负了利益相关者。' }, stats: { competence: -10, ethics: -25, leadership: -15, innovation: 5 } },
            { id: 'D', text: { en: '📊 Work with them to identify immediate liquidity options that might objectively remove the doubt before issuance', th: '📊 ทำงานร่วมกับพวกเขาเพื่อระบุตัวเลือกสภาพคล่องทันทีที่อาจขจัดข้อสงสัยอย่างเป็นกลางก่อนออกรายงาน', zh: '📊 与他们合作确定可能在发布前客观消除疑虑的即时流动性选项' }, consequence: { en: '✅ Proactive Advisory! You help the client potentially save the business while sticking to facts.', th: '✅ การให้คำปรึกษาเชิงรุก! คุณช่วยลูกค้า', zh: '✅ 主动咨询！你在坚持事实的同时帮助客户可能挽救业务。' }, stats: { competence: 45, ethics: 40, leadership: 45, innovation: 40 } }
        ]
    },

    {
        id: 'ac_005',
        text: {
            en: '🔍 You find a pattern of small payments to foreign government officials labeled as "consulting fees" in a client\'s ledger.',
            th: '🔍 คุณพบรูปแบบการจ่ายเงินจำนวนเล็กน้อยให้กับเจ้าหน้าที่รัฐบาลต่างประเทศที่ระบุว่าเป็น "ค่าที่ปรึกษา" ในบัญชีแยกประเภทของลูกค้า',
            zh: '🔍 你在客户的分类账中发现了一系列标记为“咨询费”的向外国政府官员支付的小额款项。'
        },
        options: [
            { id: 'A', text: { en: '🚨 Immediately flag as potential FCPA (Foreign Corrupt Practices Act) violation and escalate to senior partner', th: '🚨 แจ้งเตือนทันทีว่าอาจเป็นการละเมิด FCPA และส่งต่อให้หุ้นส่วนอาวุโส', zh: '🚨 立即标记为潜在的FCPA（反海外腐败法）违规行为并上报给高级合伙人' }, consequence: { en: '✅ Compliance Alert! You spotted bribery risk that could cost millions in fines.', th: '✅ การแจ้งเตือนการปฏิบัติตามกฎ! คุณพบความเสี่ยงสินบน', zh: '✅ 合规警报！你发现了可能导致数百万罚款的贿赂风险。' }, stats: { competence: 40, ethics: 45, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🤷 Assume it\'s just "cost of doing business" in that country and ignore it', th: '🤷 สมมติว่าเป็นเพียง "ต้นทุนในการทำธุรกิจ" ในประเทศนั้นและเพิกเฉย', zh: '🤷 假设这只是那个国家的“经商成本”并忽略它' }, consequence: { en: '😱 Complicity! Ignoring bribery makes you an accessory. Federal investigation likely.', th: '😱 การสมรู้ร่วมคิด! การเพิกเฉยต่อสินบน', zh: '😱 同谋！无视贿赂使你成为从犯。可能会有联邦调查。' }, stats: { competence: -30, ethics: -50, leadership: -40, innovation: -15 } },
            { id: 'C', text: { en: '💬 Ask the client to rename the account to "Facilitation Expenses" so it looks better', th: '💬 ขอให้ลูกค้าเปลี่ยนชื่อบัญชีเป็น "ค่าใช้จ่ายในการอำนวยความสะดวก" เพื่อให้ดูดีขึ้น', zh: '💬 要求客户将账户重命名为“疏通费”以便看起来更好' }, consequence: { en: '😱 Active Concealment! You are now helping hide the crime.', th: '😱 การปกปิดอย่างแข็งขัน! คุณกำลังช่วยซ่อนอาชญากรรม', zh: '😱 主动隐瞒！你现在正在帮助隐瞒犯罪。' }, stats: { competence: -25, ethics: -55, leadership: -35, innovation: -10 } },
            { id: 'D', text: { en: '📄 Request detailed contracts and deliverables for every "consultant" to verify legitimacy', th: '📄 ขอสัญญาและผลงานโดยละเอียดสำหรับ "ที่ปรึกษา" ทุกคนเพื่อตรวจสอบความถูกต้อง', zh: '📄 要求每个“顾问”提供详细合同和交付成果以验证合法性' }, consequence: { en: '✅ Thorough Auditing! You dig for evidence rather than jumping to conclusions, but stay vigilant.', th: '✅ การตรวจสอบที่ละเอียด! คุณขุดหาหลักฐาน', zh: '✅ 彻底审计！你挖掘证据而不是草率下结论，但保持警惕。' }, stats: { competence: 35, ethics: 35, leadership: 30, innovation: 20 } }
        ]
    },

    {
        id: 'ac_006',
        text: {
            en: '🔐 A hacker claims to have stolen client data from your laptop. You realize you forgot to encrypt the hard drive.',
            th: '🔐 แฮ็กเกอร์อ้างว่าได้ขโมยข้อมูลลูกค้าจากแล็ปท็อปของคุณ คุณตระหนักว่าคุณลืมเข้ารหัสฮาร์ดไดรฟ์',
            zh: '🔐 一名黑客声称从你的笔记本电脑中窃取了客户数据。你意识到你忘记加密硬盘了。'
        },
        options: [
            { id: 'A', text: { en: '📢 Trigger the data breach protocol immediately: notify IT, legal, and affected clients despite personal embarrassment', th: '📢 เปิดใช้งานโปรโตคอลการละเมิดข้อมูลทันที: แจ้ง IT กฎหมาย และลูกค้าที่ได้รับผลกระทบแม้จะอับอายส่วนตัว', zh: '📢 立即启动数据泄露协议：尽管个人感到尴尬，仍通知IT、法律部门和受影响的客户' }, consequence: { en: '✅ Crisis Management! It hurts, but rapid response mitigates damage and legal liability.', th: '✅ การจัดการวิกฤต! มันเจ็บปวด แต่ตอบสนองเร็วลดความเสียหาย', zh: '✅ 危机管理！虽然痛苦，但快速反应减轻了损害和法律责任。' }, stats: { competence: 10, ethics: 35, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '💰 Pay the hacker personally to delete the data and tell no one', th: '💰 จ่ายเงินให้แฮ็กเกอร์เป็นการส่วนตัวเพื่อลบข้อมูลและไม่บอกใคร', zh: '💰 私下付钱给黑客删除数据，不告诉任何人' }, consequence: { en: '😱 Extortion Trap! They will ask for more later, and you surely violated breach notification laws.', th: '😱 กับดักการกรรโชก! พวกเขาจะขอเพิ่มในภายหลัง', zh: '😱 勒索陷阱！他们以后会要更多，而且你肯定违反了违规通知法。' }, stats: { competence: -40, ethics: -45, leadership: -40, innovation: -20 } },
            { id: 'C', text: { en: '😶 Wipe your laptop and claim it was lost/stolen empty', th: '😶 ล้างข้อมูลในแล็ปท็อปและอ้างว่าหาย/ถูกขโมยตอนว่างเปล่า', zh: '😶 擦除笔记本电脑并声称它丢失/被盗时是空的' }, consequence: { en: '😱 Cover-up! If client data appears on the dark web, you are indefensible.', th: '😱 การปกปิด! หากข้อมูลลูกค้าปรากฏ', zh: '😱 掩盖！如果客户数据出现在暗网上，你将无法辩解。' }, stats: { competence: -30, ethics: -50, leadership: -35, innovation: -15 } },
            { id: 'D', text: { en: '💻 Consult with a cybersecurity expert immediately to verify the claim before panicking', th: '💻 ปรึกษาผู้เชี่ยวชาญด้านความปลอดภัยทางไซเบอร์ทันทีเพื่อตรวจสอบคำกล่าวอ้างก่อนตื่นตระหนก', zh: '💻 立即咨询网络安全专家以在恐慌前验证声明' }, consequence: { en: '✅ Verification First! Assess the threat level rationally, then act responsibly.', th: '✅ การตรวจสอบต้องมาก่อน! ประเมินระดับภัยคุกคาม', zh: '✅ 核实第一！理性评估威胁等级，然后负责任地行动。' }, stats: { competence: 30, ethics: 30, leadership: 25, innovation: 20 } }
        ]
    },

    {
        id: 'ac_007',
        text: {
            en: '👥 You are close friends with a client who is now going through a messy divorce. They ask you to undervalue their business assets in this year\'s report.',
            th: '👥 คุณเป็นเพื่อนสนิทกับลูกค้าที่กำลังผ่านการหย่าร้างที่ยุ่งยาก พวกเขาขอให้คุณประเมินมูลค่าทรัพย์สินทางธุรกิจต่ำกว่าความเป็นจริงในรายงานปีนี้',
            zh: '👥 你与一位正在经历混乱离婚的客户是密友。他们要求你在今年的报告中低估他们的商业资产。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Recuse yourself from the engagement citing conflict of interest, and hand it to a partner', th: '🚫 ถอนตัวจากการมีส่วนร่วมโดยอ้างความขัดแย้งทางผลประโยชน์ และส่งต่อให้หุ้นส่วน', zh: '🚫 以利益冲突为由回避该业务，并将其移交给合伙人' }, consequence: { en: '✅ Professional Distance! You cannot be objective here. Stepping aside is the only ethical choice.', th: '✅ ระยะห่างทางวิชาชีพ! คุณไม่สามารถเป็นกลางได้', zh: '✅ 专业距离！你在这里无法客观。回避是唯一的道德选择。' }, stats: { competence: 20, ethics: 50, leadership: 35, innovation: 0 } },
            { id: 'B', text: { en: '📉 Lower the valuation slightly using "conservative estimates" to help your friend', th: '📉 ลดการประเมินค่าลงเล็กน้อยโดยใช้ "การประมาณการที่ระมัดระวัง" เพื่อช่วยเพื่อนของคุณ', zh: '📉 使用“保守估计”略微降低估值以帮助你的朋友' }, consequence: { en: '⚠️ Bias! You are facilitating fraud against the spouse. The court may subpoena your files.', th: '⚠️ ความลำเอียง! คุณกำลังอำนวยความสะดวกในการฉ้อโกง', zh: '⚠️ 偏见！你正在协助对配偶的欺诈。法院可能会传唤你的档案。' }, stats: { competence: -15, ethics: -40, leadership: -25, innovation: -10 } },
            { id: 'C', text: { en: '😐 Treat them exactly like any other client, denying the request and valuing strictly on standards', th: '😐 ปฏิบัติต่อพวกเขาเหมือนลูกค้าคนอื่นทุกประการ ปฏิเสธคำขอและประเมินค่าตามมาตรฐานอย่างเคร่งครัด', zh: '😐 像对待其他客户一样对待他们，拒绝请求并严格按照标准估值' }, consequence: { en: '⚠️ High Difficulty! Theoretically correct, but extremely hard to prove lack of bias if challenged.', th: '⚠️ ความยากสูง! ถูกต้องตามทฤษฎี แต่ยากที่จะพิสูจน์', zh: '⚠️ 难度极高！理论上正确，但如果受到质疑，极难证明没有偏见。' }, stats: { competence: 30, ethics: 20, leadership: 15, innovation: 0 } },
            { id: 'D', text: { en: '🗣️ Advise them that hiding assets is illegal and could lead to them losing everything in court', th: '🗣️ แนะนำพวกเขาว่าการซ่อนทรัพย์สินเป็นสิ่งผิดกฎหมายและอาจนำไปสู่การสูญเสียทุกอย่างในศาล', zh: '🗣️ 建议他们隐瞒资产是非法的，可能导致他们在法庭上失去一切' }, consequence: { en: '✅ Tough Love! Protecting the client from their own bad impulses.', th: '✅ ความรักที่ยากลำบาก! ปกป้องลูกค้าจากแรงกระตุ้นที่ไม่ดี', zh: '✅ 严厉的爱！保护客户免受自己不良冲动的影响。' }, stats: { competence: 35, ethics: 40, leadership: 30, innovation: 10 } }
        ]
    },

    {
        id: 'ac_008',
        text: {
            en: '⏳ It is April 14th (tax deadline eve). You are overwhelmed. A client sends a shoebox of disorganized receipts expecting a filing tomorrow.',
            th: '⏳ วันที่ 14 เมษายน (วันก่อนกำหนดภาษี) คุณงานล้นมือ ลูกค้าส่งกล่องรองเท้าที่มีใบเสร็จไม่เป็นระเบียบมาโดยหวังว่าจะยื่นแบบพรุ่งนี้',
            zh: '⏳ 4月14日（报税截止前夜）。你不知所措。一位客户寄来一鞋盒杂乱无章的收据，期望明天报税。'
        },
        options: [
            { id: 'A', text: { en: '📄 Automatically file an extension for them and schedule a proper compilation time later', th: '📄 ยื่นขอขยายเวลาให้พวกเขาโดยอัตโนมัติและกำหนดเวลาการรวบรวมที่เหมาะสมในภายหลัง', zh: '📄 自动为他们申请延期，并安排以后的适当整理时间' }, consequence: { en: '✅ Procedure Management! Prioritizes accuracy over speed. Prevents burnout and errors.', th: '✅ การจัดการขั้นตอน! ให้ความสำคัญกับความถูกต้อง', zh: '✅ 程序管理！优先考虑准确性而非速度。防止倦怠和错误。' }, stats: { competence: 35, ethics: 30, leadership: 40, innovation: 15 } },
            { id: 'B', text: { en: '💪 Stay up all night trying to tally the receipts to please the client', th: '💪 อดหลับอดนอนทั้งคืนพยายามนับใบเสร็จเพื่อเอาใจลูกค้า', zh: '💪 熬通宵试图统计收据以取悦客户' }, consequence: { en: '⚠️ Error Prone! Exhaustion leads to mistakes. Client learns bad behavior is rewarded.', th: '⚠️ มีแนวโน้มผิดพลาด! ความเหนื่อยล้านำไปสู่ความผิดพลาด', zh: '⚠️ 易出错！疲劳导致错误。客户了解到不良行为会得到回报。' }, stats: { competence: -5, ethics: 10, leadership: -15, innovation: -5 } },
            { id: 'C', text: { en: '🎲 Estimate the expenses based on last year\'s numbers to file on time', th: '🎲 ประมาณการค่าใช้จ่ายโดยอิงจากตัวเลขปีก่อนเพื่อยื่นให้ทันเวลา', zh: '🎲 根据去年的数字估算费用以按时申报' }, consequence: { en: '😱 Malpractice! Filing based on guesses is negligence. IRS penalties likely.', th: '😱 การปฏิบัติหน้าที่โดยมิชอบ! การยื่นแบบโดยการเดา', zh: '😱 渎职！基于猜测申报是疏忽。国税局可能会罚款。' }, stats: { competence: -30, ethics: -45, leadership: -35, innovation: -10 } },
            { id: 'D', text: { en: '💵 Charge a triple "emergency rush fee" and hire immediate temp help', th: '💵 คิด "ค่าธรรมเนียมเร่งด่วนฉุกเฉิน" สามเท่าและจ้างพนักงานชั่วคราวทันที', zh: '💵 收取三倍的“紧急加急费”并立即雇用临时工' }, consequence: { en: '✅ Market Solution! If client pays, resource problem solved. If not, extension filed.', th: '✅ วิธีแก้ไขตลาด! หากลูกค้าจ่าย ปัญหาทรัพยากรจบ', zh: '✅ 市场解决方案！如果客户付款，资源问题解决。如果不付，申请延期。' }, stats: { competence: 30, ethics: 25, leadership: 35, innovation: 25 } }
        ]
    },

    {
        id: 'ac_009',
        text: {
            en: '💬 A partner at another firm offers to pay you for a list of your high-net-worth clients.',
            th: '💬 หุ้นส่วนที่บริษัทอื่นเสนอจะจ่ายเงินให้คุณสำหรับรายชื่อลูกค้าที่มีสินทรัพย์สูงของคุณ',
            zh: '💬 另一家公司的合伙人提议为你拥有的高净值客户名单付费。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Refuse immediately. Client data confidentiality is absolute.', th: '🚫 ปฏิเสธทันที ความลับของข้อมูลลูกค้าเป็นสิ่งสัมบูรณ์', zh: '🚫 立即拒绝。客户数据保密是绝对的。' }, consequence: { en: '✅ Ethical Standard! You protect your clients and your firm\'s assets.', th: '✅ มาตรฐานจริยธรรม! คุณปกป้องลูกค้า', zh: '✅ 道德标准！你保护了你的客户和公司的资产。' }, stats: { competence: 15, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Agree to verify commission rates but sell the list', th: '🤝 ตกลงที่จะตรวจสอบอัตราค่าคอมมิชชั่นแต่ขายรายชื่อ', zh: '🤝 同意核实佣金率但出售名单' }, consequence: { en: '😱 Data Theft! You legally stole proprietary information. Career ending lawsuit.', th: '😱 การขโมยข้อมูล! คุณขโมยข้อมูลกรรมสิทธิ์', zh: '😱 数据盗窃！你在法律上窃取了专有信息。职业生涯终结诉讼。' }, stats: { competence: -20, ethics: -60, leadership: -40, innovation: -20 } },
            { id: 'C', text: { en: '🤔 Offer to introduce clients on a case-by-case basis if it benefits them, openly', th: '🤔 เสนอแนะนำลูกค้าเป็นรายกรณีหากเป็นประโยชน์กับพวกเขา อย่างเปิดเผย', zh: '🤔 如果对他们有利，提议按个案公开介绍客户' }, consequence: { en: '✅ Networking! Done transparently with client permission, this is a referral partnership.', th: '✅ เน็ตเวิร์กกิ้ง! ทด้วยความโปร่งใส', zh: '✅ 建立人脉！在征得客户许可的情况下透明地进行，这是推荐合作伙伴关系。' }, stats: { competence: 30, ethics: 35, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '🤐 Sell only the "inactive" clients list', th: '🤐 ขายเฉพาะรายชื่อลูกค้า "ที่ไม่เคลื่อนไหว"', zh: '🤐 只出售“非活跃”客户名单' }, consequence: { en: '⚠️ Privacy Violation! Even inactive data is protected confidentially.', th: '⚠️ การละเมิดความเป็นส่วนตัว! แม้ข้อมูลที่ไม่เคลื่อนไหวก็ได้รับการปกป้อง', zh: '⚠️ 侵犯隐私！即使是非活跃数据也受保密保护。' }, stats: { competence: -10, ethics: -40, leadership: -20, innovation: -10 } }
        ]
    },

    {
        id: 'ac_010',
        text: {
            en: '🔄 The new AI accounting software flagged a discrepancy that your manual calculations missed. You feel threatened by the tech.',
            th: '🔄 ซอฟต์แวร์บัญชี AI ใหม่พบความคลาดเคลื่อนที่การคำนวณด้วยมือของคุณพลาดไป คุณรู้สึกถูกคุกคามโดยเทคโนโลยี',
            zh: '🔄 新的AI会计软件标记了你人工计算遗漏的差异。你感到受到技术的威胁。'
        },
        options: [
            { id: 'A', text: { en: '🤖 Embrace the tool! Investigate the discrepancy and learn how to use the AI to verify your work faster', th: '🤖 ยอมรับเครื่องมือ! ตรวจสอบความคลาดเคลื่อนและเรียนรู้วิธีใช้ AI เพื่อตรวจสอบงานของคุณเร็วขึ้น', zh: '🤖 拥抱工具！调查差异并学习如何使用AI更快地验证你的工作' }, consequence: { en: '✅ Tech Adaptation! You evolve into an advisory role, leveraging AI for compliance.', th: '✅ การปรับตัวทางเทคโนโลยี! คุณพัฒนาเป็นบทบาทที่ปรึกษา', zh: '✅ 技术适应！你演变为咨询角色，利用AI进行合规。' }, stats: { competence: 40, ethics: 30, leadership: 35, innovation: 50 } },
            { id: 'B', text: { en: '🗑️ Override the AI flag, assuming the machine is wrong and you are right', th: '🗑️ ยกเลิกการแจ้งเตือน AI โดยสมมติว่าเครื่องผิดและคุณถูก', zh: '🗑️ 覆盖AI标记，假设机器错了而你是对的' }, consequence: { en: '⚠️ Hubris! The machine was right. You missed an error due to ego.', th: '⚠️ ความโอหัง! เครื่องจักรถูกต้อง คุณพลาดข้อผิดพลาดเพราะอัตตา', zh: '⚠️ 傲慢！机器是对的。你因为自负而犯错。' }, stats: { competence: -25, ethics: -10, leadership: -15, innovation: -30 } },
            { id: 'C', text: { en: '💬 Complain to management that the AI is "unreliable" and slows you down', th: '💬 บ่นกับฝ่ายบริหารว่า AI "ไม่น่าเชื่อถือ" และทำให้คุณช้าลง', zh: '💬 向管理层抱怨AI“不可靠”并拖慢你的速度' }, consequence: { en: '⚠️ Obsolescence! You are tagged as resistant to change. Future career growth limited.', th: '⚠️ ความล้าสมัย! คุณถูกระบุว่าต่อต้านการเปลี่ยนแปลง', zh: '⚠️ 淘汰！你被标记为抵制变革。未来职业发展受限。' }, stats: { competence: -10, ethics: 0, leadership: -20, innovation: -40 } },
            { id: 'D', text: { en: '🔍 Double check everything manually again, spending double the time', th: '🔍 ตรวจสอบทุกอย่างด้วยมืออีกครั้ง โดยใช้เวลาสองเท่า', zh: '🔍 再次手动仔细检查所有内容，花费双倍时间' }, consequence: { en: '😐 Inefficiency! Safe, but not sustainable profitably.', th: '😐 ไร้ประสิทธิภาพ! ปลอดภัยแต่ไม่ยั่งยืนหากหากไร', zh: '😐 低效！安全，但无法持续盈利。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: -20 } }
        ]
    },

    // SECTION 2: TAXATION & COMPLIANCE (Questions 11-20)

    {
        id: 'ac_011',
        text: {
            en: '🗺️ A client wants to register their company in a tax haven where they have no operations, purely to avoid domestic taxes.',
            th: '🗺️ ลูกค้าต้องการจดทะเบียนบริษัทในแหล่งภาษีต่ำที่พวกเขาไม่มีการดำเนินงาน เพื่อหลีกเลี่ยงภาษีในประเทศ',
            zh: '🗺️ 客户想在一个他们没有任何业务的避税天堂注册公司，纯粹是为了避开国内税收。'
        },
        options: [
            { id: 'A', text: { en: '⛔ Explain "Economic Substance" rules: without real operations, tax authorities will look through the structure and penalize heavily', th: '⛔ อธิบายกฎ "สาระสำคัญทางเศรษฐกิจ": หากไม่มีการดำเนินงานจริง สรรพากรจะมองทะลุโครงสร้างและลงโทษหนัก', zh: '⛔ 解释“经济实质”规则：如果没有实际业务，税务机关将看穿该结构并处以重罚' }, consequence: { en: '✅ Expert Guidance! You prevented a tax avoidance scheme that would fail legallly.', th: '✅ คำแนะนำจากผู้เชี่ยวชาญ! คุณป้องกันโครงการหลีกเลี่ยงภาษี', zh: '✅ 专家指导！你阻止了一个在法律上会失败的避税计划。' }, stats: { competence: 45, ethics: 35, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '🏝️ Set it up for them immediately; big fees for offshore structuring', th: '🏝️ ตั้งค่าให้พวกเขาทันที ค่าธรรมเนียมก้อนโตสำหรับการจัดโครงสร้างต่างประเทศ', zh: '🏝️ 立即为他们设立；离岸结构收费高昂' }, consequence: { en: '⚠️ Risk Exposure! Often illegal or borderline. You risk liability for promoting tax shelters.', th: '⚠️ การเปิดรับความเสี่ยง! มักผิดกฎหมายหรือก้ำกึ่ง', zh: '⚠️ 风险暴露！通常也是非法或边缘的。你冒着推销避税所的责任风险。' }, stats: { competence: 10, ethics: -30, leadership: -10, innovation: 10 } },
            { id: 'C', text: { en: '🤷 Simply say "I don\'t know how to do that" to avoid the conversation', th: '🤷 เพียงแค่พูดว่า "ฉันไม่รู้วิธีทำ" เพื่อหลีกเลี่ยงการสนทนา', zh: '🤷 简单地说“我不知道怎么做”以避开话题' }, consequence: { en: '⚠️ Opportunity Missed! Failed to educate client or provide better legal alternatives.', th: '⚠️ พลาดโอกาส! ล้มเหลวในการให้ความรู้ลูกค้า', zh: '⚠️ 错失机会！未能教育客户或提供更好的法律替代方案。' }, stats: { competence: -20, ethics: 0, leadership: -10, innovation: -10 } },
            { id: 'D', text: { en: '🔍 Research compliant incentives or zones within domestic jurisdiction (like Opportunity Zones)', th: '🔍 วิจัยสิ่งจูงใจหรือโซนที่ปฏิบัติตามกฎภายในเขตอำนาจศาลในประเทศ (เช่น Opportunity Zones)', zh: '🔍 研究国内管辖区内的合规激励措施或区域（如机会区）' }, consequence: { en: '✅ Value Creation! Found a legal tax benefit that aids business goals.', th: '✅ การสร้างมูลค่า! พบผลประโยชน์ทางภาษีที่ถูกกฎหมาย', zh: '✅ 创造价值！找到了有助于商业目标的合法税务利益。' }, stats: { competence: 40, ethics: 40, leadership: 35, innovation: 40 } }
        ]
    },

    {
        id: 'ac_012',
        text: {
            en: '🚗 Client uses their company car 100% for personal family trips but wants to claim 100% business use deduction.',
            th: '🚗 ลูกค้าใช้รถบริษัท 100% สำหรับการเดินทางส่วนตัวของครอบครัวแต่ต้องการลดหย่อนการใช้ธุรกิจ 100%',
            zh: '🚗 客户将公司车辆100%用于个人家庭旅行，但想要求100%的商务使用扣除。'
        },
        options: [
            { id: 'A', text: { en: '📏 Demand a mileage log. Explain that IRS/Revenue requires proof and you can only deduct substantiated business miles', th: '📏 ขอบันทึกระยะทาง อธิบายว่าสรรพากรต้องการหลักฐานและคุณสามารถหักลดหย่อนได้เฉพาะไมล์ธุรกิจที่มีหลักฐาน', zh: '📏 要求提供里程记录。解释国税局/税务局需要证明，你只能扣除经证实的商务里程' }, consequence: { en: '✅ Standard Enforcement! You uphold the law. If they have no log, no deduction.', th: '✅ การบังคับใช้มาตรฐาน! คุณยึดมั่นกฎหมาย', zh: '✅ 标准执行！你维护法律。如果他们没有记录，就不能扣除。' }, stats: { competence: 30, ethics: 40, leadership: 25, innovation: 5 } },
            { id: 'B', text: { en: '😉 Deduct 100% and hope they don\'t get audited', th: '😉 หัก 100% และหวังว่าพวกเขาจะไม่ถูกตรวจสอบ', zh: '😉 扣除100%并希望他们不被审计' }, consequence: { en: '⚠️ Negligence penalty! Easy fix for audit seeking low-hanging fruit.', th: '⚠️ โทษประมาท! แก้ไขง่ายสำหรับผู้ตรวจสอบ', zh: '⚠️ 疏忽惩罚！审计寻找唾手可得目标的简单修复。' }, stats: { competence: -15, ethics: -25, leadership: -20, innovation: -5 } },
            { id: 'C', text: { en: '📉 Bargain them down to 50% as a "safe" number', th: '📉 ต่อรองลงเหลือ 50% เป็นตัวเลขที่ "ปลอดภัย"', zh: '📉 将他们讨价还价到50%作为一个“安全”数字' }, consequence: { en: '⚠️ Arbitrary! Without a log, even 50% is indefensible. Still incorrect.', th: '⚠️ ตามอำเภอใจ! หากไม่มีบันทึก แม้แต่ 50% ก็แก้ต่างไม่ได้', zh: '⚠️ 任意！没有记录，即使是50%也无法辩解。仍然不正确。' }, stats: { competence: -10, ethics: -15, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '📱 Recommend a mileage tracking app to build a valid log for next year', th: '📱 แนะนำแอปติดตามระยะทางเพื่อสร้างบันทึกที่ถูกต้องสำหรับปีหน้า', zh: '📱 推荐里程跟踪应用程序以便为明年建立有效的记录' }, consequence: { en: '✅ Forward Thinking! Solves the compliance issue for the future with tech.', th: '✅ การคิดล่วงหน้า! แก้ปัญหาการปฏิบัติตามกฎ', zh: '✅ 前瞻性思维！用技术解决未来的合规问题。' }, stats: { competence: 35, ethics: 35, leadership: 30, innovation: 30 } }
        ]
    },

    {
        id: 'ac_013',
        text: {
            en: '🏫 A startup client has been paying freelancers as "contractors" (1099) but treats them like employees (set hours, equipment provided).',
            th: '🏫 ลูกค้าสตาร์ทอัพจ่ายเงินให้ฟรีแลนซ์เป็น "ผู้รับเหมา" (1099) แต่ปฏิบัติต่อพวกเขาเหมือนพนักงาน (กำหนดเวลา ให้อุปกรณ์)',
            zh: '🏫 一家初创客户一直作为“承包商”(1099)向自由职业者付款，但像对待员工一样对待他们（规定时间，提供设备）。'
        },
        options: [
            { id: 'A', text: { en: '⚠️ Conduct a classification audit. Warn them of massive back-tax/penalty risks and advise converting to W-2 immediately', th: '⚠️ ดำเนินการตรวจสอบการจำแนกประเภท เตือนพวกเขาถึงความเสี่ยงภาษีย้อนหลัง/บทลงโทษมหาศาลและแนะนำให้เปลี่ยนเป็น W-2 ทันที', zh: '⚠️ 进行分类审计。警告他们存在巨额补税/罚款风险，并建议立即转换为W-2' }, consequence: { en: '✅ Risk Mitigation! You saved them from a potential lawsuit or DOL investigation.', th: '✅ การลดความเสี่ยง! คุณช่วยพวกเขาจากการถูกฟ้องร้อง', zh: '✅ 风险缓解！你使他们免于潜在的诉讼或劳工部调查。' }, stats: { competence: 40, ethics: 40, leadership: 35, innovation: 15 } },
            { id: 'B', text: { en: '🤐 Keep filing 1099s; it\'s cheaper for the client right now', th: '🤐 ยื่น 1099 ต่อไป; มันถูกกว่าสำหรับลูกค้าในตอนนี้', zh: '🤐 继续申报1099；现在对客户来说更便宜' }, consequence: { en: '😱 Ticking Time Bomb! When one contractor files for unemployment, the whole scheme unravels.', th: '😱 ระเบิดเวลา! เมื่อผู้รับเหมาคนหนึ่งขอสวัสดิการว่างงาน', zh: '😱 定时炸弹！当一个承包商申请失业救济时，整个计划就会瓦解。' }, stats: { competence: -20, ethics: -30, leadership: -25, innovation: -10 } },
            { id: 'C', text: { en: '📄 Rewrite the contracts to "look" like independent contractor agreements without changing behavior', th: '📄 เขียนสัญญาใหม่ให้ "ดูเหมือน" ข้อตกลงผู้รับเหมาอิสระโดยไม่เปลี่ยนพฤติกรรม', zh: '📄 重写合同使其“看起来”像独立承包商协议，而不改变行为' }, consequence: { en: '⚠️ Substance over Form! Agency audits follow facts, not paper. Ineffective protection.', th: '⚠️ สาระสำคัญเหนือรูปแบบ! การตรวจสอบของหน่วยงานตามข้อเท็จจริง', zh: '⚠️ 实质重于形式！机构审计遵循事实，而非纸面。无效的保护。' }, stats: { competence: -10, ethics: -20, leadership: -10, innovation: 5 } },
            { id: 'D', text: { en: '🤝 Suggest a third-party PEO (Professional Employer Organization) to handle payroll compliance', th: '🤝 แนะนำ PEO (องค์กรนายจ้างมือชีพ) บุคคลที่สามเพื่อจัดการการปฏิบัติตามกฎเงินเดือน', zh: '🤝 建议第三方PEO（专业雇主组织）处理薪资合规' }, consequence: { en: '✅ Operational Solution! Offloads the risk and headache professionally.', th: '✅ โซลูชันการดำเนินงาน! ลดความเสี่ยงและความปวดหัว', zh: '✅ 运营解决方案！专业地卸下风险和麻烦。' }, stats: { competence: 35, ethics: 30, leadership: 35, innovation: 35 } }
        ]
    },

    {
        id: 'ac_014',
        text: {
            en: '📉 You find a mistake in a tax return filed 2 years ago that resulted in the client paying LESS tax than owed.',
            th: '📉 คุณพบข้อผิดพลาดในแบบแสดงรายการภาษีที่ยื่นเมื่อ 2 ปีก่อนซึ่งส่งผลให้ลูกค้าจ่ายภาษีน้อยกว่าที่ค้างชำระ',
            zh: '📉 你发现2年前提交的纳税申报表中有一个错误，导致客户缴纳的税款少于应缴税款。'
        },
        options: [
            { id: 'A', text: { en: '📢 Inform client of the error and obligation to amend. Explain that voluntary correction minimizes penalties', th: '📢 แจ้งลูกค้าถึงข้อผิดพลาดและหน้าที่ในการแก้ไข อธิบายว่าการแก้ไขโดยสมัครใจช่วยลดบทลงโทษ', zh: '📢 通知客户错误和修改义务。解释自愿更正可最大限度减少处罚' }, consequence: { en: '✅ Proper Protocol! Integrity shown. Client avoids steeper penalties later.', th: '✅ โปรโตคอลที่เหมาะสม! แสดงความซื่อสัตย์', zh: '✅ 适当的协议！展示诚信。客户避免了以后更严厉的处罚。' }, stats: { competence: 35, ethics: 45, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🤫 Bury it. The statute of limitations might run out soon.', th: '🤫 ฝังมันไว้ อายุความอาจหมดเร็วๆ นี้', zh: '🤫 埋葬它。诉讼时效可能很快就到了。' }, consequence: { en: '⚠️ Gambling! If audited, "willful neglect" penalties apply. Unethical.', th: '⚠️ การพนัน! หากถูกตรวจสอบ โทษ "ละเลยโดยเจตนา" จะถูกนำมาใช้', zh: '⚠️ 赌博！如果被审计，适用“故意忽视”处罚。不道德。' }, stats: { competence: -10, ethics: -35, leadership: -20, innovation: -5 } },
            { id: 'C', text: { en: '📈 Overpay taxes slightly this year to "balance it out"', th: '📈 จ่ายภาษีเกินเล็กน้อยในปีนี้เพื่อ "ให้สมดุล"', zh: '📈 今年稍微多缴点税以“平衡一下”' }, consequence: { en: '❌ Incorrect Method! Tax years stand alone. Does not fix the prior liability.', th: '❌ วิธีผิด! ปีภาษีแยกจากกัน ไม่ได้แก้หนี้สินก่อนหน้า', zh: '❌ 错误的方法！纳税年度是独立的。不能解决之前的债务。' }, stats: { competence: -25, ethics: -20, leadership: -15, innovation: -15 } },
            { id: 'D', text: { en: '💡 Calculate the exact interest/penalty impact before telling the client so they have the full picture', th: '💡 คำนวณผลกระทบดอกเบี้ย/ค่าปรับที่แน่นอนก่อนบอกลูกค้าเพื่อให้พวกเขาเห็นภาพรวม', zh: '💡 在告诉客户之前计算确切的利息/罚款影响，以便他们了解全貌' }, consequence: { en: '✅ Prepared Advisory! Delivering bad news with data allows for decision making.', th: '✅ การให้คำปรึกษาที่เตรียมพร้อม! ส่งข่าวร้ายพร้อมข้อมูล', zh: '✅ 有准备的咨询！用数据传达坏消息以便决策。' }, stats: { competence: 40, ethics: 40, leadership: 35, innovation: 20 } }
        ]
    },

    {
        id: 'ac_015',
        text: {
            en: '💹 Crypto Boom! A client traded thousands of crypto assets using bots but has no consolidated records.',
            th: '💹 คริปโตบูม! ลูกค้าซื้อขายสินทรัพย์คริปโตพันรายการโดยใช้บอทแต่ไม่มีบันทึกรวม',
            zh: '💹 加密货币繁荣！一位客户使用机器人交易了数千种加密资产，但没有合并记录。'
        },
        options: [
            { id: 'A', text: { en: '💻 Implement specialized crypto-tax software to API-sync with their wallets/exchanges and reconstruct the ledger', th: '💻 ใช้ซอฟต์แวร์ภาษีคริปโตเฉพาะทางเพื่อซิงค์ API กับกระเป๋าเงิน/การแลกเปลี่ยนของพวกเขาและสร้างบัญชีแยกประเภทใหม่', zh: '💻 实施专门的加密税务软件与他们的钱包/交易所API同步并重建分类账' }, consequence: { en: '✅ Tech Savvy! Only way to handle volume accurately. Revenue stream created.', th: '✅ รู้ทันเทคโนโลยี! วิธีเดียวที่จะจัดการปริมาณได้อย่างถูกต้อง', zh: '✅ 精通技术！处理大量数据的唯一准确方法。创造了收入流。' }, stats: { competence: 50, ethics: 30, leadership: 30, innovation: 50 } },
            { id: 'B', text: { en: '🚫 Refuse the engagement unless they provide a summarized spreadsheet', th: '🚫 ปฏิเสธการมีส่วนร่วมเว้นแต่พวกเขาจะให้สเปรดชีตสรุป', zh: '🚫 除非他们提供汇总电子表格，否则拒绝该业务' }, consequence: { en: '⚠️ Client Loss! They cannot do it manually. You turned away business.', th: '⚠️ สูญเสียลูกค้า! พวกเขาทำด้วยมือไม่ได้', zh: '⚠️ 失去客户！他们无法手动完成。你拒之门外。' }, stats: { competence: -10, ethics: 0, leadership: -20, innovation: -30 } },
            { id: 'C', text: { en: '🎲 Treat it as "hobby income" and estimate a lump sum', th: '🎲 ปฏิบัติต่อมันเป็น "รายได้จากงานอดิเรก" และประมาณยอดรวม', zh: '🎲 将其视为“业余收入”并估算总额' }, consequence: { en: '😱 Non-Compliance! Crypto trading rules are specific (capital gains). Estimation is dangerous.', th: '😱 การไม่ปฏิบัติตามกฎ! กฎการซื้อขายคริปโตเฉพาะเจาะจง', zh: '😱 不合规！加密交易规则很具体（资本利得）。估算是危险的。' }, stats: { competence: -20, ethics: -25, leadership: -15, innovation: -10 } },
            { id: 'D', text: { en: '⏳ Ask them to liquidate everything so you only calculate the final cash difference', th: '⏳ ขอให้พวกเขาล้างพอร์ตทั้งหมดเพื่อที่คุณจะคำนวณส่วนต่างเงินสดสุดท้ายเท่านั้น', zh: '⏳ 要求他们清算所有资产，以便你只需计算最终的差额' }, consequence: { en: '❌ Bad Advice! Forcing investment decisions for accounting convenience is unprofessional.', th: '❌ คำแนะนำแย่! บังคับการตัดสินใจลงทุนเพื่อความสะดวกทางบัญชี', zh: '❌ 糟糕的建议！为了会计上的方便而强行影响投资决策是非常不专业的。' }, stats: { competence: -15, ethics: -10, leadership: -25, innovation: -20 } }
        ]
    },

    {
        id: 'ac_016',
        text: {
            en: '🏗️ A construction client wants to recognize revenue on a project early to show profit to the bank, even though the milestones aren\'t signed off.',
            th: '🏗️ ลูกค้าก่อสร้างต้องการรับรู้รายได้จากโครงการก่อนกำหนดเพื่อแสดงผลกำไรให้ธนาคารเห็น แม้ว่าเหตุการณ์สำคัญจะยังไม่ได้ลงนาม',
            zh: '🏗️ 建筑客户希望提前确认项目收入以便向银行展示利润，尽管里程碑尚未签署。'
        },
        options: [
            { id: 'A', text: { en: '📉 Adhere strictly to Percentage of Completion method requiring verified progress reports (engineer sign-off)', th: '📉 ปฏิบัติตามวิธีร้อยละของความสำเร็จอย่างเคร่งครัดที่ต้องการรายงานความคืบหน้าที่มีการตรวจสอบ (วิศวกรลงนาม)', zh: '📉 严格遵守完工百分比法，要求经过验证的进度报告（工程师签字）' }, consequence: { en: '✅ Standard Compliance! Revenue matches reality. Bank trusts the financials.', th: '✅ การปฏิบัติตามมาตรฐาน! รายได้ตรงกับความเป็นจริง', zh: '✅ 标准合规！收入符合现实。银行信任财务状况。' }, stats: { competence: 35, ethics: 40, leadership: 30, innovation: 5 } },
            { id: 'B', text: { en: '📝 Accrue the revenue based on client\'s "word" that it\'s done', th: '📝 บันทึกรายได้ตาม "คำพูด" ของลูกค้าว่าเสร็จแล้ว', zh: '📝 根据客户“口头”说已完成来应计收入' }, consequence: { en: '⚠️ Material Misstatement! Without proof, this is overstatement. If project stalls, you have to restate later.', th: '⚠️ การแสดงข้อมูลที่ขัดต่อข้อเท็จจริงอันเป็นสาระสำคัญ!', zh: '⚠️ 重大错报！没有证据，这就是虚报。如果项目停滞，你以后不得不重述。' }, stats: { competence: -20, ethics: -30, leadership: -15, innovation: -10 } },
            { id: 'C', text: { en: '🚫 Delay all revenue until the project is 100% complete just to be "safe"', th: '🚫 ชะลอรายได้ทั้งหมดจนกว่าโครงการจะเสร็จสมบูรณ์ 100% เพื่อความ "ปลอดภัย"', zh: '🚫 将所有收入推迟到项目100%完成，只是为了“安全”' }, consequence: { en: '❌ GAAP Violation! Completed Contract method is rarely allowed for large entities. Distorts performance.', th: '❌ การละเมิด GAAP! วิธีสัญญาเสร็จสมบูรณ์ไม่ค่อยได้รับอนุญาต', zh: '❌ 违反GAAP！完工合同法很少允许大型实体使用。扭曲绩效。' }, stats: { competence: -15, ethics: 10, leadership: -10, innovation: -20 } },
            { id: 'D', text: { en: '💡 Help them accelerate the sign-off process by creating a digital workflow for the site engineers', th: '💡 ช่วยพวกเขาเร่งกระบวนการลงนามโดยสร้างเวิร์กโฟลว์ดิจิทัลสำหรับวิศวกรหน้างาน', zh: '💡 通过为现场工程师创建数字工作流程，帮助他们加快签字流程' }, consequence: { en: '✅ Operational Improvement! solves the bottleneck legally.', th: '✅ การปรับปรุงการดำเนินงาน! แก้ปัญหาคอขวดอย่างถูกกฎหมาย', zh: '✅ 运营改进！合法解决瓶颈。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 45 } }
        ]
    },

    {
        id: 'ac_017',
        text: {
            en: '📦 A retail client counts inventory manually once a year and it\'s always a disaster. They ask for your help.',
            th: '📦 ลูกค้าค้าปลีกนับสินค้าคงคลังด้วยมือปีละครั้งและมันหายนะเสมอ พวกเขาขอความช่วยเหลือจากคุณ',
            zh: '📦 零售客户每年手动盘点一次库存，但这总是一场灾难。他们请求你的帮助。'
        },
        options: [
            { id: 'A', text: { en: '🔄 Implement a "Cycle Counting" program: count small sections daily so the whole warehouse is verified periodically without shutting down', th: '🔄 ใช้โปรแกรม "Cycle Counting": นับส่วนเล็กๆ ทุกวันเพื่อให้คลังสินค้าทั้งหมดได้รับการตรวจสอบเป็นระยะโดยไม่ต้องปิด', zh: '🔄 实施“循环盘点”计划：每天盘点部分区域，确保定期核实整个仓库而无需停工' }, consequence: { en: '✅ Process Efficiency! Accuracy improves dramatically, year-end stress vanishes.', th: '✅ ประสิทธิภาพกระบวนการ! ความถูกต้องดีขึ้นอย่างมาก', zh: '✅ 流程效率提升！准确性得到显著提高，年终盘点的压力烟消云散。' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '👨‍👩‍👧‍👦 Send your own accounting staff to count the boxes for them', th: '👨‍👩‍👧‍👦 ส่งพนักงานบัญชีของคุณไปนับกล่องให้พวกเขา', zh: '👨‍👩‍👧‍👦 派你自己的会计人员为他们数箱子' }, consequence: { en: '⚠️ Use of Resources! Expensive misuse of accountant time. Clients should count operations.', th: '⚠️ การใช้ทรัพยากร! การใช้เวลาของนักบัญชีอย่างสิ้นเปลือง', zh: '⚠️ 资源使用！昂贵地滥用会计师时间。客户应清点运营。' }, stats: { competence: 10, ethics: 20, leadership: 0, innovation: -10 } },
            { id: 'C', text: { en: '🤷 Estimate inventory based on gross margin %', th: '🤷 ประมาณการสินค้าคงคลังตาม % กำไรขั้นต้น', zh: '🤷 根据毛利率%估算库存' }, consequence: { en: '❌ Impermissible! Physical inventory verification is required. Estimates hide shrinkage/theft.', th: '❌ ไม่อนุญาต! ต้องการการตรวจสอบสินค้าคงคลังทางกายภาพ', zh: '❌ 不允许！需要实物库存验证。估算掩盖了损耗/盗窃。' }, stats: { competence: -25, ethics: -15, leadership: -10, innovation: -15 } },
            { id: 'D', text: { en: '🏷️ Advise RFID tagging system implementation for automated counting', th: '🏷️ แนะนำให้ใช้ระบบแท็ก RFID สำหรับการนับอัตโนมัติ', zh: '🏷️ 建议实施RFID标签系统以进行自动计数' }, consequence: { en: '✅ Tech Forward! High initial cost but best long-term solution.', th: '✅ เทคโนโลยีก้าวหน้า! ต้นทุนเริ่มต้นสูงแต่เป็นทางออกระยะยาวที่ดีที่สุด', zh: '✅ 技术前瞻！初始成本高但长期解决方案最佳。' }, stats: { competence: 40, ethics: 25, leadership: 35, innovation: 50 } }
        ]
    },

    {
        id: 'ac_018',
        text: {
            en: '📄 You notice a client has $50k in "Miscellaneous Expenses" with no details.',
            th: '📄 คุณสังเกตเห็นลูกค้ามีเงิน $50k ใน "ค่าใช้จ่ายเบ็ดเตล็ด" โดยไม่มีรายละเอียด',
            zh: '📄 你注意到一位客户有5万美元的“杂项费用”但没有详细信息。'
        },
        options: [
            { id: 'A', text: { en: '🔍 Review every transaction in that bucket and reclassify them to correct accounts (travel, meals, supplies)', th: '🔍 ตรวจสอบทุกธุรกรรมในถังนั้นและจัดประเภทใหม่ไปยังบัญชีที่ถูกต้อง (การเดินทาง อาหาร วัสดุสิ้นเปลือง)', zh: '🔍 审查该类别中的每一笔交易并将其重新分类到正确的账户（差旅、餐饮、用品）' }, consequence: { en: '✅ Precision! "Misc" is a red flag for auditors. Cleaning it up protects the client.', th: '✅ ความแม่นยำ! "เบ็ดเตล็ด" เป็นธงแดงสำหรับผู้ตรวจสอบ', zh: '✅ 精确！“杂项”是审计员的危险信号。清理它保护了客户。' }, stats: { competence: 35, ethics: 30, leadership: 20, innovation: 5 } },
            { id: 'B', text: { en: '🧹 Leave it. It\'s immaterial compared to their total revenue.', th: '🧹 ปล่อยไว้ มันไม่มีสาระสำคัญเทียบกับรายได้รวม', zh: '🧹 留着吧。与其总收入相比，这无关紧要。' }, consequence: { en: '⚠️ Sloppy! Even if immaterial, it indicates poor bookkeeping hygiene.', th: '⚠️ สะเพร่า! แม้ว่าจะไม่มีสาระสำคัญ แต่ระบุถึงสุขอนามัยการทำบัญชีที่ไม่ดี', zh: '⚠️ 草率！即使无关紧要，这也表明记账卫生状况不佳。' }, stats: { competence: -15, ethics: -5, leadership: -10, innovation: -5 } },
            { id: 'C', text: { en: '🚩 Flag it as "Suspense" and force the client to explain each item', th: '🚩 ธงว่าเป็น "บัญชีพัก" และบังคับให้ลูกค้าอธิบายแต่ละรายการ', zh: '🚩 将其标记为“暂记”并强迫客户解释每一项' }, consequence: { en: '✅ Accountability! Forces the client to take ownership of their spending data.', th: '✅ ความรับผิดชอบ! บังคับให้ลูกค้าเป็นเจ้าของข้อมูล', zh: '✅ 问责！迫使客户对自己的支出数据负责。' }, stats: { competence: 30, ethics: 25, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🗑️ Write it off as "Office Expense" to make it look legitimate', th: '🗑️ ตัดออกเป็น "ค่าใช้จ่ายสำนักงาน" เพื่อให้ดูถูกต้อง', zh: '🗑️ 将其注销为“办公费用”以使其看起来合法' }, consequence: { en: '⚠️ Misclassification! You are guessing. Distortion of financial metrics.', th: '⚠️ การจัดประเภทผิด! คุณกำลังเดา', zh: '⚠️ 分类错误！你在猜测。扭曲财务指标。' }, stats: { competence: -10, ethics: -20, leadership: -10, innovation: -5 } }
        ]
    },

    {
        id: 'ac_019',
        text: {
            en: '🤝 A family-owned business client is paying the founder\'s children huge salaries for doing nothing (Ghost Employees).',
            th: '🤝 ลูกค้าธุรกิจครอบครัวจ่ายเงินเดือนมหาศาลให้กับลูกๆ ของผู้ก่อตั้งโดยไม่ทำอะไรเลย (พนักงานผี)',
            zh: '🤝 一家家族企业客户向创始人的子女支付巨额薪水，却什么都不做（幽灵员工）。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Reclassify the payments as "Dividends/Distributions". Explain that salaries require actual work performed to be deductible.', th: '⚖️ จัดประเภทการจ่ายเงินใหม่เป็น "เงินปันผล/การแบ่งปันผลกำไร" อธิบายว่าเงินเดือนต้องมีการทำงานจริงถึงจะหักลดหย่อนได้', zh: '⚖️ 将付款重新分类为“股息/分配”。解释薪水需要实际工作表现才能扣除。' }, consequence: { en: '✅ Tax Compliance! Salaries must be "reasonable." You prevent IRS audit triggers while keeping money in the family.', th: '✅ การปฏิบัติตามภาษี! เงินเดือนต้อง "สมเหตุสมผล"', zh: '✅ 税务合规！薪水必须“合理”。你在让钱留在家里的同时也防止了国税局审计触发。' }, stats: { competence: 45, ethics: 40, leadership: 35, innovation: 20 } },
            { id: 'B', text: { en: '👻 Keep them on payroll; it\'s their company, they can do what they want', th: '👻 เก็บพวกเขาไว้ในบัญชีเงินเดือน; มันเป็นบริษัทของพวกเขา พวกเขาทำอะไรก็ได้', zh: '👻 把他们留在工资单上；这是他们的公司，他们想干嘛就干嘛' }, consequence: { en: '😱 Tax Fraud! Deducting non-business expenses (fake wages) is illegal.', th: '😱 การฉ้อโกงภาษี! การหักค่าใช้จ่ายที่ไม่ใช่ธุรกิจ', zh: '😱 税务欺诈！扣除非商业费用（虚假工资）是非法的。' }, stats: { competence: -25, ethics: -45, leadership: -20, innovation: -15 } },
            { id: 'C', text: { en: '📝 Create fake job descriptions and timesheets for the kids', th: '📝 สร้างคำอธิบายงานและใบบันทึกเวลาปลอมสำหรับเด็กๆ', zh: '📝 为孩子们制作虚假的工作描述和考勤表' }, consequence: { en: '😱 Fraud Conspiracy! Manufacturing evidence creates criminal intent.', th: '😱 การสมรู้ร่วมคิดในการฉ้อโกง! การสร้างหลักฐาน', zh: '😱 欺诈阴谋！伪造证据制造犯罪意图。' }, stats: { competence: -30, ethics: -60, leadership: -40, innovation: -10 } },
            { id: 'D', text: { en: '🗣️ Advise setting up a Family Trust to distribute wealth efficiently instead', th: '🗣️ แนะนำให้ตั้ง Trust ครอบครัวเพื่อกระจายความมั่งคั่งอย่างมีประสิทธิภาพแทน', zh: '🗣️ 建议设立家族信托以更有效地分配财富' }, consequence: { en: '✅ Strategic Wealth Planning! Professional solution to the underlying goal.', th: '✅ การวางแผนความมั่งคั่งเชิงกลยุทธ์! โซลูชันระดับมืออาชีพ', zh: '✅ 战略财富规划！针对根本目标的专业解决方案。' }, stats: { competence: 40, ethics: 35, leadership: 40, innovation: 35 } }
        ]
    },

    {
        id: 'ac_020',
        text: {
            en: '💵 Client receives a lot of cash payments and keeps "forgetting" to deposit them into the business account.',
            th: '💵 ลูกค้ารับเงินสดจำนวนมากและมักลืมนำฝากเข้าบัญชีธุรกิจ',
            zh: '💵 客户收到大量现金支付，总是“忘记”存入商业账户。'
        },
        options: [
            { id: 'A', text: { en: '📉 Reconstruct income based on inventory depletion or appointments (markup analysis) to prove the missing revenue', th: '📉 สร้างรายได้ใหม่โดยอิงจากการลดลงของสินค้าคงคลังหรือการนัดหมาย (การวิเคราะห์ส่วนเพิ่ม) เพื่อพิสูจน์รายได้ที่หายไป', zh: '📉 根据库存消耗或预约（加价分析）重建收入以证明缺失的收入' }, consequence: { en: '✅ Investigative Accounting! You ensure they report accurately despite their "amnesia."', th: '✅ การบัญชีสืบสวน! คุณรับรองว่าพวกเขารายงานถูกต้อง', zh: '✅ 调查会计！尽管他们“健忘”，你仍确保他们准确报告。' }, stats: { competence: 45, ethics: 40, leadership: 30, innovation: 25 } },
            { id: 'B', text: { en: '🤷 Only report what hits the bank statement', th: '🤷 รายงานเฉพาะสิ่งที่เข้าบัญชีธนาคาร', zh: '🤷 只报告银行对账单上的内容' }, consequence: { en: '⚠️ Under-reporting! You are complicit in skimming. IRS lifestyle audits track this easily.', th: '⚠️ การรายงานต่ำกว่าจริง! คุณสมรู้ร่วมคิด', zh: '⚠️ 少报！你是撇脂的同谋。国税局生活方式审计很容易追踪到这一点。' }, stats: { competence: -20, ethics: -35, leadership: -20, innovation: -10 } },
            { id: 'C', text: { en: '👮 Threaten to fire them if they don\'t deposit cash weekly', th: '👮 ขู่ว่าจะไล่ออกถ้าไม่ฝากเงินสดทุกสัปดาห์', zh: '👮 如果他们不每周存现金就威胁解雇他们' }, consequence: { en: '✅ Hard Line! Necessary for uncooperative clients. Protects your firm.', th: '✅ เส้นตายแข็งกร้าว! จำเป็นสำหรับลูกค้าที่ไม่ให้ความร่วมมือ', zh: '✅ 强硬路线！对不合作的客户是必要的。保护你的公司。' }, stats: { competence: 20, ethics: 30, leadership: 40, innovation: 0 } },
            { id: 'D', text: { en: '📱 Setup a POS (Point of Sale) system that records cash sales automatically so deposit discrepancies are obvious', th: '📱 ติดตั้งระบบ POS ที่บันทึกยอดขายเงินสดอัตโนมัติเพื่อให้ความคลาดเคลื่อนของการฝากเห็นได้ชัด', zh: '📱 设置POS（销售点）系统自动记录现金销售，使存款差异显而易见' }, consequence: { en: '✅ Systemic Control! Technology forces compliance and creates an audit trail.', th: '✅ การควบคุมเชิงระบบ! เทคโนโลยีบังคับการปฏิบัติตามกฎ', zh: '✅ 系统控制！技术强制合规并创建审计跟踪。' }, stats: { competence: 40, ethics: 35, leadership: 35, innovation: 40 } }
        ]
    },

    // SECTION 3: FINANCIAL REPORTING & ANALYSIS (Questions 21-30)

    {
        id: 'ac_021',
        text: {
            en: '💹 The new lease accounting standard (ASC 842 / IFRS 16) requires putting all operating leases on the Balance Sheet. The client hates how it increases their liabilities.',
            th: '💹 มาตรฐานการบัญชีสัญญาเช่าใหม่ (ASC 842 / IFRS 16) กำหนดให้ใส่สัญญาเช่าดำเนินงานทั้งหมดในงบดุล ลูกค้าเกลียดที่มันเพิ่มหนี้สิน',
            zh: '💹 新的租赁会计准则(ASC 842 / IFRS 16)要求将所有经营租赁计入资产负债表。客户讨厌这增加了他们的负债。'
        },
        options: [
            { id: 'A', text: { en: '🗣️ Educate them: "It adds an Asset (Right of Use) too, so Net Equity is mostly unchanged." Prepare impact analysis for their lenders.', th: '🗣️ ให้ความรู้พวกเขา: "มันเพิ่มสินทรัพย์ (สิทธิการใช้) ด้วย ดังนั้นส่วนของผู้ถือหุ้นสุทธิส่วนใหญ่ไม่เปลี่ยนแปลง" เตรียมการวิเคราะห์ผลกระทบสำหรับผู้ให้กู้', zh: '🗣️ 教育他们：“这也增加了一项资产（使用权），所以净权益基本不变。”为他们的贷款人准备影响分析。' }, consequence: { en: '✅ Technical Mastery! You calm their fears with knowledge and proactive stakeholder management.', th: '✅ ความเชี่ยวชาญทางเทคนิค! คุณทำให้พวกเขาสงบลง', zh: '✅ 技术精通！你用知识和主动的利益相关者管理平息了他们的恐惧。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '📝 Structure leases as "service contracts" to keep them off-balance sheet', th: '📝 จัดโครงสร้างสัญญาเช่าเป็น "สัญญาบริการ" เพื่อให้อยู่นอกงบดุล', zh: '📝 将租赁构建为“服务合同”以使其保留在资产负债表外' }, consequence: { en: '⚠️ Loophole Seeking! Auditors are trained to spot embedded leases. Risky strategy.', th: '⚠️ การหาช่องโหว่! ผู้ตรวจสอบได้รับการฝึกฝนให้สังเกตสัญญาเช่าแฝง', zh: '⚠️ 寻找漏洞！审计员受过训练，能发现嵌入式租赁。冒险的策略。' }, stats: { competence: 15, ethics: -10, leadership: -5, innovation: 10 } },
            { id: 'C', text: { en: '🙈 Ignore the standard for small clients, hoping no one notices', th: '🙈 เพิกเฉยต่อมาตรฐานสำหรับลูกค้ารายย่อย หวังว่าจะไม่มีใครสังเกตเห็น', zh: '🙈 对小客户忽略该标准，希望没人注意' }, consequence: { en: '❌ GAAP Failure! Their financial statements are now non-compliant and useless for loans.', th: '❌ ความล้มเหลวของ GAAP! งบการเงินของพวกเขาไม่เป็นไปตามกฎ', zh: '❌ GAAP失败！他们的财务报表现在不合规，对贷款无用。' }, stats: { competence: -25, ethics: -20, leadership: -15, innovation: -10 } },
            { id: 'D', text: { en: '📅 Switch to "Short Term Leases" (<12 months) everywhere', th: '📅 เปลี่ยนเป็น "สัญญาเช่าระยะสั้น" (<12 เดือน) ทุกที่', zh: '📅 到处切换到“短期租赁”（<12个月）' }, consequence: { en: '✅ Valid Exception! Compliant way to stay off-balance sheet, but operationally risky (landlord can eviction).', th: '✅ ข้อยกเว้นที่ถูกต้อง! วิธีที่ปฏิบัติตามกฎ', zh: '✅ 有效例外！合规的表外方式，但运营风险大（房东可以驱逐）。' }, stats: { competence: 30, ethics: 35, leadership: 20, innovation: 10 } }
        ]
    },

    {
        id: 'ac_022',
        text: {
            en: '📉 A client has excess cash losing value in a low-interest checking account. They ask, "What should I do?"',
            th: '📉 ลูกค้ามีเงินสดส่วนเกินที่สูญเสียมูลค่าในบัญชีกระแสรายวันที่มีดอกเบี้ยต่ำ พวกเขาถามว่า "ฉันควรทำอย่างไร?"',
            zh: '📉 一位客户的过剩现金在低息支票账户中贬值。他们问：“我该怎么办？”'
        },
        options: [
            { id: 'A', text: { en: '📊 Analyze Cash Flow needs first, then suggest a tiered approach: operating cash, emergency fund (Money Market), and excess (T-Bills/CDs)', th: '📊 วิเคราะห์ความต้องการกระแสเงินสดก่อน จากนั้นเสนอแนวทางเป็นชั้น: เงินสดดำเนินงาน กองทุนฉุกเฉิน และส่วนเกิน (พันธบัตร/เงินฝากประจำ)', zh: '📊 首先分析现金流需求，然后建议分层方法：运营现金、应急基金（货币市场）和过剩资金（国库券/存单）' }, consequence: { en: '✅ Treasury Management! Optimizes yield while ensuring liquidity. High value add.', th: '✅ การจัดการการคลัง! เพิ่มผลตอบแทนสูงสุด', zh: '✅ 资金管理！优化收益同时确保流动性。高附加值。' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🎰 Tell them to buy volatile tech stocks for high returns', th: '🎰 บอกให้พวกเขาซื้อหุ้นเทคโนโลยีที่ผันผวนเพื่อผลตอบแทนสูง', zh: '🎰 告诉他们购买波动大的科技股以获得高回报' }, consequence: { en: '⚠️ Investment Soliciation! Unless you are a licensed advisor, giving specific stock tips creates huge liability.', th: '⚠️ การชักชวนลงทุน! เว้นแต่คุณจะมีใบอนุญาต', zh: '⚠️ 投资招揽！除非你是持牌顾问，否则提供具体的股票建议会带来巨大责任。' }, stats: { competence: -10, ethics: -20, leadership: -10, innovation: -5 } },
            { id: 'C', text: { en: '😶 "I only record history, I don\'t plan the future." Stay in your lane.', th: '😶 "ฉันบันทึกประวัติศาสตร์เท่านั้น ฉันไม่ได้วางแผนอนาคต" อยู่ในเลนของคุณ', zh: '😶 “我只记录历史，不规划未来。”守好本分。' }, consequence: { en: '💤 Commoditization! You are just a bookkeeper. They will find a CFO service elsewhere.', th: '💤 การกลายเป็นสินค้า! คุณเป็นเพียงพนักงานบัญชี', zh: '💤 商品化！你只是个记账员。他们会去别处找CFO服务。' }, stats: { competence: -15, ethics: 10, leadership: -30, innovation: -20 } },
            { id: 'D', text: { en: '💵 Refer them to a trusted Financial Planner partner', th: '💵 แนะนำพวกเขาให้กับพันธมิตรนักวางแผนการเงินที่เชื่อถือได้', zh: '💵 把他们推荐给值得信赖的理财规划师合作伙伴' }, consequence: { en: '✅ Professional Network! Good delegation. Client served, liability avoided.', th: '✅ เครือข่ายมืออาชีพ! การมอบหมายที่ดี', zh: '✅ 专业网络！良好的授权。服务了客户，避免了责任。' }, stats: { competence: 30, ethics: 35, leadership: 30, innovation: 10 } }
        ]
    },

    {
        id: 'ac_023',
        text: {
            en: '🏭 Manufacturing client has huge "Variance" costs every month. The owner doesn\'t understand why profit is lower than expected.',
            th: '🏭 ลูกค้าการผลิตมีต้นทุน "ความแปรปรวน" มหาศาลทุกเดือน เจ้าของไม่เข้าใจว่าทำไมกำไรถึงต่ำกว่าที่คาดไว้',
            zh: '🏭 制造客户每个月都有巨大的“差异”成本。业主不明白为什么利润低于预期。'
        },
        options: [
            { id: 'A', text: { en: '🔦 Perform a Deep Dive Cost Accounting analysis: breakdown material use variance vs. labor rate variance vs. overhead absorption', th: '🔦 ทำการวิเคราะห์บัญชีต้นทุนเชิงลึก: แยกแยะความแปรปรวนการใช้วัสดุ เทียบกับอัตราค่าแรง เทียบกับการดูดซับค่าใช้จ่าย', zh: '🔦 进行深入的成本会计分析：细分材料使用差异 vs 人工费率差异 vs 间接费用吸收' }, consequence: { en: '✅ Root Cause Analysis! You identify that waste is high or pricing is wrong. Business saving insight.', th: '✅ การวิเคราะห์สาเหตุที่แท้จริง! คุณระบุได้ว่าของเสียสูง', zh: '✅ 根本原因分析！你发现浪费严重或定价错误。节省业务的洞察力。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🤷 Simply plug the variance into "Cost of Goods Sold" to balance the books', th: '🤷 เพียงแค่เสียบความแปรปรวนลงใน "ต้นทุนสินค้าขาย" เพื่อให้บัญชีสมดุล', zh: '🤷 简单地将差异塞进“销货成本”以平衡账目' }, consequence: { en: '⚠️ Band-aid Solution! Hides the bleeding. The books balance, but the business continues to lose money efficiency.', th: '⚠️ วิธีแก้ปัญหาแบบปลาสเตอร์ยา! ซ่อนเลือดออก', zh: '⚠️ 权宜之计！掩盖了出血点。账目平衡了，但企业继续损失资金效率。' }, stats: { competence: 10, ethics: 10, leadership: -10, innovation: -10 } },
            { id: 'C', text: { en: '📈 Tell them to raise prices to cover it', th: '📈 บอกให้พวกเขาขึ้นราคาเพื่อครอบคลุมมัน', zh: '📈 告诉他们涨价以弥补它' }, consequence: { en: '⚠️ Surface Level! If the problem is theft or waste, raising prices just kills sales.', th: '⚠️ ระดับผิวเผิน! หากปัญหาคือการขโมยหรือของเสีย', zh: '⚠️ 表面水平！如果问题是偷窃或浪费，涨价只会扼杀销售。' }, stats: { competence: 5, ethics: 20, leadership: 10, innovation: -5 } },
            { id: 'D', text: { en: '🏭 Walk the factory floor yourself to see the operations', th: '🏭 เดินดูโรงงานด้วยตัวเองเพื่อดูการดำเนินงาน', zh: '🏭 亲自去工厂车间看看运营情况' }, consequence: { en: '✅ Hands-on Understanding! Accountants who understand operations are gold. You might see the waste physically.', th: '✅ ความเข้าใจแบบลงมือทำ! นักบัญชีที่เข้าใจการดำเนินงานคือทองคำ', zh: '✅ 亲身理解！懂运营的会计师是金子。你可能会亲眼看到浪费。' }, stats: { competence: 40, ethics: 35, leadership: 45, innovation: 25 } }
        ]
    },

    {
        id: 'ac_024',
        text: {
            en: '🤝 A partnership is dissolving. Partner A wants to buy out Partner B. You are the accountant for the FIRM.',
            th: '🤝 ห้างหุ้นส่วนกำลังยุบเลิก หุ้นส่วน A ต้องการขอซื้อหุ้นส่วน B คุณเป็นนักบัญชีให้กับบริษัท',
            zh: '🤝 合伙企业正在解散。合伙人A想买断合伙人B。你是公司的会计师。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Remain neutral. Provide audited financial statements to both. Advise each to get their own valuation expert/counsel.', th: '⚖️ เป็นกลาง ให้งบการเงินที่ตรวจสอบแล้วแก่ทั้งคู่ แนะนำให้แต่ละฝ่ายหาผู้เชี่ยวชาญ/ที่ปรึกษาการประเมินค่าของตนเอง', zh: '⚖️ 保持中立。向双方提供经审计的财务报表。建议各方聘请自己的估值专家/顾问。' }, consequence: { en: '✅ Conflict Managed! You serve the entity, not the individuals. Safe and professional.', th: '✅ จัดการความขัดแย้ง! คุณรับใช้หน่วยงาน', zh: '✅ 冲突管理！你服务于实体，而非个人。安全且专业。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 5 } },
            { id: 'B', text: { en: '🤫 Secretly help Partner A (who will keep the business) get a lower valuation', th: '🤫 แอบช่วยหุ้นส่วน A (ที่จะทำธุรกิจต่อ) ให้ได้การประเมินค่าที่ต่ำกว่า', zh: '🤫 秘密帮助合伙人A（将保留业务的人）获得较低的估值' }, consequence: { en: '😱 Fiduciary Breach! Partner B can sue you for helping defraud them.', th: '😱 การละเมิดหน้าที่ที่ได้รับความไว้วางใจ! หุ้นส่วน B สามารถฟ้องคุณ', zh: '😱 违背信托责任！合伙人B可以起诉你协助欺诈他们。' }, stats: { competence: -20, ethics: -50, leadership: -30, innovation: -15 } },
            { id: 'C', text: { en: '📉 Depress earnings this year so the buy-out price is cheaper for the Survivor', th: '📉 กดรายได้ปีนี้ให้ต่ำลงเพื่อราคาซื้อออกจะถูกลงสำหรับผู้รอดชีวิต', zh: '📉 压低今年的收益，从而降低幸存合伙人的买断价格' }, consequence: { en: '😱 Manipulation! Blatant bias and fraud.', th: '😱 การบิดเบือน! ความลำเอียงและการฉ้อโกงที่ชัดเจน', zh: '😱 操纵行为！这是公然的偏见与欺诈。' }, stats: { competence: -25, ethics: -55, leadership: -35, innovation: -20 } },
            { id: 'D', text: { en: '🤝 Mediate the negotiation yourself to save them legal fees', th: '🤝 ไกล่เกลี่ยการเจรจาด้วยตัวเองเพื่อประหยัดค่าธรรมเนียมกฎหมายให้พวกเขา', zh: '🤝 亲自调解谈判以通过节省法律费用' }, consequence: { en: '⚠️ Out of Scope! Unless certified in mediation, you will likely anger both side and lose the client entirely.', th: '⚠️ นอกขอบเขต! เว้นแต่จะได้รับการรับรองในการไกล่เกลี่ย', zh: '⚠️ 超出范围！除非拥有调解认证，否则你可能会激怒双方并完全失去客户。' }, stats: { competence: 15, ethics: 10, leadership: 10, innovation: 5 } }
        ]
    },

    {
        id: 'ac_025',
        text: {
            en: '📄 You are preparing a presentation for a non-financial Board of Directors. They usually fall asleep during the "Numbers" part.',
            th: '📄 คุณกำลังเตรียมการนำเสนอสำหรับคณะกรรมการที่ไม่ใช่สายการเงิน พวกเขามักจะหลับในช่วง "ตัวเลข"',
            zh: '📄 你正在为非财务董事会准备演示文稿。他们通常在“数字”部分睡着。'
        },
        options: [
            { id: 'A', text: { en: '📊 Use Data Visualization: Dashboards, KPIs, and red/green indicators. Focus on the "Story" behind the numbers, not the spreadsheet.', th: '📊 ใช้การแสดงภาพข้อมูล: แดชบอร์ด KPI และตัวบ่งชี้แดง/เขียว เน้นที่ "เรื่องราว" เบื้องหลังตัวเลข ไม่ใช่สเปรดชีต', zh: '📊 使用数据可视化：仪表板、KPI和红/绿指标。关注数字背后的“故事”，而不是电子表格。' }, consequence: { en: '✅ Communication Win! The board engages, understands strategic implications, and values your input.', th: '✅ ชัยชนะในการสื่อสาร! คณะกรรมการมีส่วนร่วม', zh: '✅ 沟通胜利！董事会参与其中，理解战略含义，并重视你的投入。' }, stats: { competence: 45, ethics: 30, leadership: 45, innovation: 45 } },
            { id: 'B', text: { en: '📑 Read the P&L line-by-line to be thorough', th: '📑 อ่านงบกำไรขาดทุนทีละบรรทัดเพื่อให้ละเอียด', zh: '📑 逐行阅读损益表以求详尽' }, consequence: { en: '💤 Bore-out! You lose their attention and respect. They see you as a bean counter.', th: '💤 น่าเบื่อ! คุณสูญเสียความสนใจ', zh: '💤 无聊至极！你失去了他们的注意力和尊重。他们把你视为只会计较的小职员。' }, stats: { competence: 20, ethics: 20, leadership: -20, innovation: -30 } },
            { id: 'C', text: { en: '⏭️ Skip the financials and just say "We are good"', th: '⏭️ ข้ามเรื่องการเงินและเพียงแค่พูดว่า "เราสบายดี"', zh: '⏭️ 跳过财务数据，只说“我们很好”' }, consequence: { en: '⚠️ Governance Failure! The board has a fiduciary duty to review. You denied them oversight.', th: '⚠️ ความล้มเหลวในการกำกับดูแล! คณะกรรมการมีหน้าที่', zh: '⚠️ 治理失败！董事会有受托责任进行审查。你剥夺了他们的监督权。' }, stats: { competence: -10, ethics: -20, leadership: -10, innovation: -5 } },
            { id: 'D', text: { en: '😨 Scare them with worst-case scenarios to wake them up', th: '😨 ขู่พวกเขาด้วยสถานการณ์เลวร้ายที่สุดเพื่อให้ตื่น', zh: '😨 用最坏的情况吓唬他们以令其清醒' }, consequence: { en: '⚠️ Alarmist! Works once, but you lose credibility as a steady hand.', th: '⚠️ ผู้ตื่นตระหนก! ได้ผลครั้งเดียว', zh: '⚠️ 危言耸听！一次有效，但你失去了作为稳健派的信誉。' }, stats: { competence: 10, ethics: 15, leadership: -5, innovation: 10 } }
        ]
    },

    {
        id: 'ac_026',
        text: {
            en: '🌍 A client starts selling products online to customers in 30 different states/countries.',
            th: '🌍 ลูกค้าเริ่มขายสินค้าออนไลน์ให้กับลูกค้าใน 30 รัฐ/ประเทศที่แตกต่างกัน',
            zh: '🌍 客户开始向30个不同州/国家的客户在线销售产品。'
        },
        options: [
            { id: 'A', text: { en: '🛒 Sales Tax Nexus Study! Immediately check thresholds (Wayfair ruling). Implement automated sales tax engine (Avalara/TaxJar).', th: '🛒 ศึกษา Nexus ภาษีขาย! ตรวจสอบเกณฑ์ทันที (คำตัดสิน Wayfair) ใช้เครื่องมือภาษีขายอัตโนมัติ', zh: '🛒 开展销售税关联研究！立即检查起征门槛。实施自动销售税引擎系统。' }, consequence: { en: '✅ Scalability! You handle the complexity automagically. Client prevents massive future liability.', th: '✅ ความสามารถในการขยายขนาด! คุณจัดการความซับซ้อนอัตโนมัติ', zh: '✅ 极佳的可扩展性！你自动化处理了复杂流程，为客户规避了未来的巨额税务责任。' }, stats: { competence: 50, ethics: 35, leadership: 35, innovation: 45 } },
            { id: 'B', text: { en: '🙈 Ignore other states; just collect tax for the home state', th: '🙈 เพิกเฉยต่อรัฐอื่น; เก็บภาษีเฉพาะรัฐบ้านเกิด', zh: '🙈 忽略其他州；只代收本州税款。' }, consequence: { en: '😱 Liability Accumulation! States will audit eventually. The back taxes + penalties will bankrupt the client.', th: '😱 การสะสมความรับผิด! รัฐจะตรวจสอบในที่สุด', zh: '😱 责任累积！各州最终会进行审计。补缴税款和罚金可能会让客户破产。' }, stats: { competence: -15, ethics: -25, leadership: -20, innovation: -10 } },
            { id: 'C', text: { en: '🛑 Tell them to stop selling out of state because the paperwork is too hard', th: '🛑 บอกให้พวกเขาหยุดขายนอกรัฐเพราะงานเอกสารยากเกินไป', zh: '🛑 告诉他们停止向州外销售，因为文书工作太难了' }, consequence: { en: '🛑 Business Prevention! You are checking growth because of accounting laziness.', th: '🛑 การป้องกันธุรกิจ! คุณกำลังขัดขวางการเติบโต', zh: '🛑 阻碍业务！你因为会计懒惰而阻碍增长。' }, stats: { competence: -10, ethics: -10, leadership: -40, innovation: -30 } },
            { id: 'D', text: { en: '📝 Try to register and file manually in all 30 jurisdictions', th: '📝 พยายามจดทะเบียนและยื่นด้วยตนเองในทั้ง 30 เขตอำนาจศาล', zh: '📝 尝试在所有30个辖区手动注册和申报' }, consequence: { en: '🤯 Administrative Collapse! You will drown in paperwork and miss deadlines. Not scalable.', th: '🤯 การล่มสลายทางการบริหาร! คุณจะจมอยู่ในกองเอกสาร', zh: '🤯 行政崩溃！你会被文书工作淹没并错过截止日期。不可扩展。' }, stats: { competence: 20, ethics: 20, leadership: -10, innovation: -20 } }
        ]
    },

    {
        id: 'ac_027',
        text: {
            en: '📉 Interest rates rise sharply. Your client has a massive variable-rate loan that is eating up cash flow.',
            th: '📉 อัตราดอกเบี้ยพุ่งสูงขึ้น ลูกค้าของคุณมีเงินกู้อัตราดอกเบี้ยลอยตัวจำนวนมหาศาลที่กัดกินกระแสเงินสด',
            zh: '📉 利率急剧上升。你的客户有一笔巨大的浮动利率贷款正在吞噬现金流。'
        },
        options: [
            { id: 'A', text: { en: '🔄 Analyze Refinancing vs. Hedging (Interest Rate Swap). Present Cost-Benefit of locking in a fixed rate now.', th: '🔄 วิเคราะห์การรีไฟแนนซ์เทียบกับการป้องกันความเสี่ยง (Interest Rate Swap) เสนอต้นทุน-ผลประโยชน์ของการล็อคอัตราคงที่ตอนนี้', zh: '🔄 分析再融资与对冲（利率掉期）。展示现在锁定固定利率的成本效益。' }, consequence: { en: '✅ Strategic Finance! You act as a CFO, proposing tools to stabilize risk.', th: '✅ การเงินเชิงกลยุทธ์! คุณทำหน้าที่เป็น CFO', zh: '✅ 战略金融！你充当CFO，提出稳定风险的工具。' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 35 } },
            { id: 'B', text: { en: '😱 Panic and tell them to pay off the loan immediately using all cash reserves', th: '😱 ตื่นตระหนกและบอกอให้พวกเขาชำระคืนเงินกู้ทันทีโดยใช้เงินสดสำรองทั้งหมด', zh: '😱 恐慌并告诉他们立即用所有现金储备偿还贷款' }, consequence: { en: '⚠️ Liquidity Crisis! Solving the interest problem caused a cash shortage problem.', th: '⚠️ วิกฤตสภาพคล่อง! แก้ปัญหาดอกเบี้ยแต่เกิดปัญหาขาดแคลนเงินสด', zh: '⚠️ 流动性危机！解决了利息问题却导致了现金如同短缺问题。' }, stats: { competence: 10, ethics: 20, leadership: -10, innovation: -10 } },
            { id: 'C', text: { en: '🤷 "Not my problem, I just record the interest expense."', th: '🤷 "ไม่ใช่ปัญหาของฉัน ฉันแค่บันทึกค่าใช้จ่ายดอกเบี้ย"', zh: '🤷 “不是我的问题，我只记录利息支出。”' }, consequence: { en: 'zzZ Passive! Client goes bust, you lose a client.', th: 'zzZ เฉื่อยชา! ลูกค้าเจ๊ง คุณเสียลูกค้า', zh: 'zzZ 被动！客户破产，你失去客户。' }, stats: { competence: -10, ethics: 10, leadership: -30, innovation: -20 } },
            { id: 'D', text: { en: '📉 Blame the central bank in monthly meetings but offer no solutions', th: '📉 โทษธนาคารกลางในการประชุมประจำเดือนแต่ไม่เสนอทางแก้', zh: '📉 在月度会议上指责央行但不提供解决方案' }, consequence: { en: '🗣️ Useless Commentary! Complaint without action is noise.', th: '🗣️ ความเห็นที่ไร้ประโยชน์! การบ่นโดยไม่ทำอะไรคือเสียงรบกวน', zh: '🗣️ 无用的评论！没有行动的抱怨是噪音。' }, stats: { competence: 0, ethics: 10, leadership: -10, innovation: -5 } }
        ]
    },

    {
        id: 'ac_028',
        text: {
            en: '👥 Two co-founders are fighting. One asks you to provide financial data to them without copying the other.',
            th: '👥 ผู้ก่อตั้งร่วมสองคนกำลังทะเลาะกัน คนหนึ่งขอให้คุณให้ข้อมูลทางการเงินแก่พวกเขาโดยไม่ต้องสำเนาให้อีกคน',
            zh: '👥 两名联合创始人正在吵架。其中一人要求你向他们提供财务数据，而不抄送给另一人。'
        },
        options: [
            { id: 'A', text: { en: '📢 "I serve the Company." Refuse to provide secret data. All communication must include both directors.', th: '📢 "ฉันรับใช้บริษัท" ปฏิเสธการให้ข้อมูลลับ การสื่อสารทั้งหมดต้องรวมกรรมการทั้งสองคน', zh: '📢 “我为公司服务。”拒绝提供秘密数据。所有沟通必须包括两位董事。' }, consequence: { en: '✅ Corporate Governance! You maintain neutrality and adhere to the corporate structure.', th: '✅ การกำกับดูแลกิจการ! คุณรักษาความเป็นกลาง', zh: '✅ 公司治理！你保持中立并遵守公司结构。' }, stats: { competence: 30, ethics: 50, leadership: 35, innovation: 10 } },
            { id: 'B', text: { en: '🤫 Provide the data secretly to the one you like more', th: '🤫 ให้ข้อมูลอย่างลับๆ กับคนที่คุณชอบมากกว่า', zh: '🤫 秘密向你更喜欢的人提供数据' }, consequence: { en: '⚠️ Ethical Breach! You are fueling a coup. Legal liability if the other sues.', th: '⚠️ การละเมิดทางจริยธรรม! คุณกำลังเติมเชื้อไฟให้กับการรัฐประหาร', zh: '⚠️ 道德违规！你在助长政变。如果另一方起诉，你有法律责任。' }, stats: { competence: -10, ethics: -40, leadership: -20, innovation: -10 } },
            { id: 'C', text: { en: '🏃 Quit immediately to avoid the drama', th: '🏃 ลาออกทันทีเพื่อหลีกเลี่ยงดราม่า', zh: '🏃 立即辞职以避开戏剧性事件' }, consequence: { en: '🏳️ Abandonment! Safe option, but revenue lost.', th: '🏳️ การละทิ้ง! ทางเลือกที่ปลอดภัย แต่รายได้หาย', zh: '🏳️ 放弃！安全的选择，但收入损失。' }, stats: { competence: 0, ethics: 20, leadership: -30, innovation: -10 } },
            { id: 'D', text: { en: '📂 Give data to both simultaneously, replying "Attached is the requested info for the board"', th: '📂 ให้ข้อมูลกับทั้งคู่พร้อมกัน ตอบกลับว่า "แนบมานี้คือข้อมูลที่ขอสำหรับคณะกรรมการ"', zh: '📂 同时向两人提供数据，回复“附上董事会所需信息”' }, consequence: { en: '✅ Professional Deflection! You fulfill the request transparently.', th: '✅ การบ่ายเบี่ยงแบบมืออาชีพ! คุณทำตามคำขออย่างโปร่งใส', zh: '✅ 专业转移！你透明地满足请求。' }, stats: { competence: 35, ethics: 40, leadership: 30, innovation: 20 } }
        ]
    },

    {
        id: 'ac_029',
        text: {
            en: '🏗️ Capitalization Policy: Client buys 50 small laptops ($400 each). They want to Capitalize them to boost assets/profit vs. Expensing them.',
            th: '🏗️ นโยบายการใช้ทุน: ลูกค้าซื้อแล็ปท็อปขนาดเล็ก 50 เครื่อง (เครื่องละ $400) พวกเขาต้องการแปลงเป็นทุนเพื่อเพิ่มสินทรัพย์/กำไร เทียบกับการตัดเป็นค่าใช้จ่าย',
            zh: '🏗️ 资本化政策：客户购买了50台小型笔记本电脑（每台400美元）。他们想将其资本化以增加资产/利润，而不是作为费用报销。'
        },
        options: [
            { id: 'A', text: { en: '📐 Check the "De Minimis Safe Harbor" threshold (usually $2,500). Explain that expensing is likely better for tax (immediate deduction) and audit simplicity.', th: '📐 ตรวจสอบเกณฑ์ "De Minimis Safe Harbor" (ปกติ $2,500) อธิบายว่าการตัดเป็นค่าใช้จ่ายน่าจะดีกว่าสำหรับภาษี (หักลดหย่อนทันที) และความง่ายในการตรวจสอบ', zh: '📐 检查“最低安全港”门槛（通常为2500美元）。解释费用化可能对税务（立即扣除）和审计简化更好。' }, consequence: { en: '✅ Technical Advice! You guide them to the optimal tax/compliance position despite their initial instinct.', th: '✅ คำแนะนำทางเทคนิค! คุณนำทางพวกเขาไปยังจุดที่เหมาะสม', zh: '✅ 技术建议！尽管他们有最初的直觉，你还是引导他们通过最佳的税务/合规位置。' }, stats: { competence: 40, ethics: 35, leadership: 30, innovation: 15 } },
            { id: 'B', text: { en: '📊 Capitalize them because the total ($20k) is material', th: '📊 แปลงเป็นทุนเพราะยอดรวม ($20k) มีสาระสำคัญ', zh: '📊 资本化，因为总额（2万美元）至关重要' }, consequence: { en: '😐 Allowable but Inefficient! Now you have to track depreciation on 50 cheap items for 5 years.', th: '😐 ทำได้แต่ไร้ประสิทธิภาพ! ตอนนี้คุณต้องติดตามค่าเสื่อมราคา', zh: '😐 允许但低效！现在你必须在5年内追踪50件廉价物品的折旧。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: -10 } },
            { id: 'C', text: { en: '💪 Do whatever the client wants', th: '💪 ทำอะไรก็ได้ตามที่ลูกค้าต้องการ', zh: '💪 客户想怎么做就怎么做' }, consequence: { en: '⚠️ Order Taker! You add no value. Tracking these assets will be a nightmare.', th: '⚠️ ผู้รับคำสั่ง! คุณไม่มีมูลค่าเพิ่ม', zh: '⚠️ 接单员！你没有增加价值。追踪这些资产将是一场噩梦。' }, stats: { competence: 0, ethics: 10, leadership: -20, innovation: -10 } },
            { id: 'D', text: { en: '🧱 Group them as a "Network Asset" single line item to capitalize efficiency', th: '🧱 จัดกลุ่มเป็นรายการ "สินทรัพย์เครือข่าย" บรรทัดเดียวเพื่อแปลงเป็นทุนอย่างมีประสิทธิภาพ', zh: '🧱 将其归类为“网络资产”单行项目以有效地资本化' }, consequence: { en: '✅ Creative Compliance! Meets client goal (Asset boost) without the administrative burden of 50 items.', th: '✅ การปฏิบัติตามกฎอย่างสร้างสรรค์! บรรลุเป้าหมายลูกค้า', zh: '✅ 创意合规！达到客户目标（资产提升）而无需50个项目的行政负担。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: 40 } }
        ]
    },

    {
        id: 'ac_030',
        text: {
            en: '🔍 During a routine review, you spot a duplicate invoice payment of $10,000 to a vendor.',
            th: '🔍 ระหว่างการตรวจสอบกิจวัตร คุณพบการจ่ายเงินตามใบแจ้งหนี้ซ้ำซ้อนจำนวน $10,000 ให้กับผู้ขาย',
            zh: '🔍 在例行审查中，你发现向供应商重复支付了1万美元的发票。'
        },
        options: [
            { id: 'A', text: { en: '💵 Recover it! Contact vendor immediately for credit/refund. Setup "Duplicate Invoice" checks in the AP system.', th: '💵 กู้คืน! ติดต่อผู้ขายทันทีเพื่อขอเครดิต/คืนเงิน ตั้งค่าตรวจสอบ "ใบแจ้งหนี้ซ้ำ" ในระบบ AP', zh: '💵 追回！立即联系供应商要求抵免/退款。在AP系统中设置“重复发票”检查。' }, consequence: { en: '✅ Heroic ROI! You just paid for your own fee by finding "found money." Client loves you.', th: '✅ ROI ฮีโร่! คุณเพิ่งจ่ายค่าธรรมเนียมของตัวเองโดยการหา "เงินที่พบ"', zh: '✅ 英雄般的投资回报率！你通过找到“意外之财”支付了自己的费用。客户爱你。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 25 } },
            { id: 'B', text: { en: '🤷 Assume the vendor will credit it eventually', th: '🤷 สมมติว่าผู้ขายจะให้เครดิตในที่สุด', zh: '🤷 假设供应商最终会抵免' }, consequence: { en: '⚠️ Naive! Vendors often keep mistakes unless asked. Cash lost.', th: '⚠️ ไร้เดียงสา! ผู้ขายมักเก็บข้อผิดพลาดไว้เว้นแต่จะถูกถาม', zh: '⚠️ 天真！除非被要求，否则供应商通过通常会保留错误款项。现金损失。' }, stats: { competence: -10, ethics: 10, leadership: -10, innovation: -10 } },
            { id: 'C', text: { en: '🤐 Split the fee with the vendor if they keep quiet', th: '🤐 แบ่งค่าธรรมเนียมกับผู้ขายถ้าพวกเขาเงียบ', zh: '🤐 如果他们保持沉默，就在供应商那里分一杯羹' }, consequence: { en: '😱 Kickback Fraud! Direct theft/embezzlement.', th: '😱 การฉ้อโกงเงินทอน! การขโมย/ยักยอกโดยตรง', zh: '😱 回扣欺诈！直接盗窃/挪用公款。' }, stats: { competence: -30, ethics: -60, leadership: -40, innovation: -20 } },
            { id: 'D', text: { en: '📝 Write it off as "Bad Debt" expense', th: '📝 ตัดเป็นค่าใช้จ่าย "หนี้สูญ"', zh: '📝 将其注销为“坏账”费用' }, consequence: { en: '❌ Incorrect! Bad debt is for receivables, not payables. Showing incompetence.', th: '❌ ผิด! หนี้สูญมีไว้สำหรับลูกหนี้ ไม่ใช่เจ้าหนี้', zh: '❌ 不正确！坏账是针对应收账款，而不是应付账款。显示无能。' }, stats: { competence: -25, ethics: -10, leadership: -20, innovation: -10 } }
        ]
    },

    // SECTION 4: CLIENT & STAKEHOLDER MANAGEMENT (Questions 31-40)

    {
        id: 'ac_031',
        text: {
            en: '🗣️ Scope Creep: A client paying for "Basic Bookkeeping" keeps calling you for strategic tax advice and complex financial modeling.',
            th: '🗣️ Scope Creep: ลูกค้าที่จ่ายเงินสำหรับ "การทำบัญชีพื้นฐาน" โทรหาคุณเพื่อขอคำแนะนำด้านภาษีเชิงกลยุทธ์และการสร้างแบบจำลองทางการเงินที่ซับซ้อน',
            zh: '🗣️ 范围蔓延：一位支付“基本记账”费用的客户不断打电话给你寻求战略税务建议和复杂的财务建模。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Pause and Pivot: "I love helping with this. These requests fall under our CFO Advisory tier. Shall I send a proposal to upgrade your plan?"', th: '🛑 หยุดและเปลี่ยนทิศทาง: "ฉันชอบช่วยเรื่องนี้ แต่คำขอเหล่านี้อยู่ใต่ระดับบริการ CFO Advisory ของเรา ให้ฉันส่งข้อเสนออัปเกรดแผนได้ไหม?"', zh: '🛑 暂停并转折：“我很乐意提供帮助。这些请求属于我们的CFO咨询层级。我们要不要升级您的计划？”' }, consequence: { en: '✅ Business Growth! You value your time and upsell the client successfully.', th: '✅ การเติบโตของธุรกิจ! คุณให้ความสำคัญกับเวลาของคุณ', zh: '✅ 业务增长！你看重自己的时间并成功向客户追加销售。' }, stats: { competence: 35, ethics: 30, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '😅 Answer everything for free, hoping they refer others', th: '😅 ตอบทุกอย่างฟรี หวังว่าพวกเขาจะแนะนำคนอื่น', zh: '😅 免费回答所有问题，希望他们推荐其他人' }, consequence: { en: '📉 Burnout! You are working for free. They will just demand more.', th: '📉 หมดไฟ! คุณทำงานฟรี', zh: '📉 倦怠！你在免费工作。他们只会索取更多。' }, stats: { competence: 10, ethics: 10, leadership: -30, innovation: -10 } },
            { id: 'C', text: { en: '😤 Ghost them until they catch the hint', th: '😤 หายเงียบไปจนกว่าพวกเขาจะรู้ตัว', zh: '😤 玩失踪直到他们明白暗示' }, consequence: { en: '⚠️ Unprofessional! Passive-aggressive behavior damages reputation.', th: '⚠️ ไม่เป็นมืออาชีพ! พฤติกรรมก้าวร้าวแบบเงียบๆ', zh: '⚠️ 不专业！消极攻击行为损害声誉。' }, stats: { competence: -20, ethics: -10, leadership: -30, innovation: -10 } },
            { id: 'D', text: { en: '📉 Give quick, half-baked answers to get them off the phone', th: '📉 ให้คำตอบเร็วๆ แบบขอไปทีเพื่อให้พวกเขาวางสาย', zh: '📉 给出快速、不成熟的答案以打发他们' }, consequence: { en: '⚠️ Liability Risk! Giving advice without proper analysis is negligence.', th: '⚠️ ความเสี่ยงต่อความรับผิด! การให้คำแนะนำโดยไม่วิเคราะห์', zh: '⚠️ 责任风险！没有经过适当分析就给出建议是疏忽。' }, stats: { competence: -25, ethics: -20, leadership: -10, innovation: -10 } }
        ]
    },

    {
        id: 'ac_032',
        text: {
            en: '🏫 A non-profit client asks you to allocate 90% of their expenses to "Program Services" to improve their rating, even though admins do most of the work.',
            th: '🏫 ลูกค้าองค์กรไม่แสวงหากำไรขอให้คุณจัดสรรค่าใช้จ่าย 90% ให้กับ "บริการโครงการ" เพื่อปรับปรุงการจัดอันดับ แม้ว่าผู้ดูแลระบบจะทำงานส่วนใหญ่',
            zh: '🏫 一家非营利客户要求你将90%的费用分配给“项目服务”以提高他们的评级，尽管行政人员做了大部分工作。'
        },
        options: [
            { id: 'A', text: { en: '⏱️ Require a Functional Expense Allocation study (time tracking) to determine the true split.', th: '⏱️ ต้องการการศึกษาการจัดสรรค่าใช้จ่ายตามหน้าที่ (การติดตามเวลา) เพื่อกำหนดส่วนแบ่งที่แท้จริง', zh: '⏱️ 要求进行功能性费用分配研究（时间跟踪）以确定真实的分摊。' }, consequence: { en: '✅ Accurate Reporting! You rely on data, not wishes. Protects their 501(c)(3) status.', th: '✅ การรายงานที่ถูกต้อง! คุณพึ่งพาข้อมูล', zh: '✅ 准确的报告！你依靠数据，而不是愿望。保护他们的501(c)(3)地位。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 15 } },
            { id: 'B', text: { en: '🖌️ Fudge the numbers to 85% to help them get grants', th: '🖌️ ปรับตัวเลขเป็น 85% เพื่อช่วยให้พวกเขาได้รับเงินช่วยเหลือ', zh: '🖌️ 捏造数字到85%以帮助他们获得赠款' }, consequence: { en: '😱 Grant Fraud! Misleading donors is serious.', th: '😱 การฉ้อโกงเงินช่วยเหลือ! การทำให้ผู้บริจาคเข้าใจผิดเป็นเรื่องร้ายแรง', zh: '😱 赠款欺诈！误导捐助者很严重。' }, stats: { competence: -20, ethics: -50, leadership: -20, innovation: -10 } },
            { id: 'C', text: { en: '🤷 Allocate everything based on salary dollars without analyzing roles', th: '🤷 จัดสรรทุกอย่างตามเงินเดือนโดยไม่วิเคราะห์บทบาท', zh: '🤷 不分析角色，根据工资数额分配一切' }, consequence: { en: '⚠️ Lazy Accounting! Inaccurate meaningful ratios.', th: '⚠️ การบัญชีที่ขี้เกียจ! อัตราส่วนที่ไม่ถูกต้อง', zh: '⚠️ 懒惰会计！不准确的有意义比率。' }, stats: { competence: -15, ethics: 0, leadership: -10, innovation: -10 } },
            { id: 'D', text: { en: '💡 Help them redesign admin roles to include more direct program work, legitimately shifting the ratio', th: '💡 ช่วยพวกเขาออกแบบบทบาทผู้ดูแลระบบใหม่ให้รวมงานโครงการโดยตรงมากขึ้น เพื่อเปลี่ยนอัตราส่วนอย่างถูกกฎหมาย', zh: '💡 帮助他们重新设计行政角色以包括更多直接项目工作，合法地转移比率' }, consequence: { en: '✅ Operational Consulting! You solved the root problem (rating) by changing reality, not just the report.', th: '✅ การให้คำปรึกษาด้านการดำเนินงาน! คุณแก้ปัญหาที่ต้นเหตุ', zh: '✅ 运营咨询！你通过改变现实而不仅仅是报告，解决了根本问题（评级）。' }, stats: { competence: 40, ethics: 35, leadership: 45, innovation: 40 } }
        ]
    },

    {
        id: 'ac_033',
        text: {
            en: '📉 Client is confused: "Why do I have to pay taxes if I have no cash in the bank?" (They made profit but spent it on loan principal/inventory).',
            th: '📉 ลูกค้าสับสน: "ทำไมฉันต้องจ่ายภาษีถ้าฉันไม่มีเงินสดในธนาคาร?" (พวกเขามีกำไรแต่ใช้ไปกับเงินต้นกู้ยืม/สินค้าคงคลัง)',
            zh: '📉 客户很困惑：“如果在银行里没钱，为什么还要交税？”（他们盈利了，但把钱花在了贷款本金/库存上）。'
        },
        options: [
            { id: 'A', text: { en: '🏫 The "Cash vs. Profit" Talk: Explain that Principal payments and Inventory buildup are not expenses. Show the Cash Flow Statement.', th: '🏫 การพูดคุยเรื่อง "เงินสด vs กำไร": อธิบายว่าการจ่ายเงินต้นและการสะสมสินค้าคงคลังไม่ใช่ค่าใช้จ่าย แสดงงบกระแสเงินสด', zh: '🏫 “现金与利润”谈话：解释本金支付和库存积累不是费用。展示现金流量表。' }, consequence: { en: '✅ Education! The lightbulb moment for clients. They finally understand their business.', th: '✅ การศึกษา! ช่วงเวลาที่ลูกค้าเข้าใจธุรกิจของตน', zh: '✅ 教育！客户的顿悟时刻。他们终于理解了自己的生意。' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🤷 "The IRS says so." Offer no further explanation.', th: '🤷 "สรรพากรว่าอย่างนั้น" ไม่เสนอคำอธิบายเพิ่มเติม', zh: '🤷 “国税局就是这么说的。”不提供进一步解释。' }, consequence: { en: '😒 Frustration! Client leaves feeling cheated and confused.', th: '😒 ความหงุดหงิด! ลูกค้ารู้สึกถูกโกง', zh: '😒 沮丧！客户感到被欺骗和困惑地离开。' }, stats: { competence: 10, ethics: 10, leadership: -20, innovation: -20 } },
            { id: 'C', text: { en: '🤥 "Must be a mistake." Book the principal payments as Rent Expense provided they don\'t get audited.', th: '🤥 "ต้องเป็นข้อผิดพลาดแน่ๆ" บันทึกการจ่ายเงินต้นเป็นค่าเช่า', zh: '🤥 “肯定是个错误。”把本金支付记为租金费用，只要不被审计就行。' }, consequence: { en: '😱 Fraud! Deliberately misclassifying non-deductible items.', th: '😱 การฉ้อโกง! การจัดประเภทรายการที่ไม่สามารถหักลดหย่อนผิดโดยเจตนา', zh: '😱 欺诈！故意错误分类不可扣除项目。' }, stats: { competence: -20, ethics: -50, leadership: -30, innovation: -10 } },
            { id: 'D', text: { en: '📉 Advise them to stop paying down debt aggressively to save tax cash', th: '📉 แนะนำให้พวกเขาหยุดชำระหนี้อย่างหนักเพื่อประหยัดเงินสดสำหรับภาษี', zh: '📉 建议他们停止积极偿还债务以节省税款现金' }, consequence: { en: '✅ Cash Management! Strategic advice on balancing leverage vs. liquidity.', th: '✅ การจัดการเงินสด! คำแนะนำเชิงกลยุทธ์', zh: '✅ 现金管理！关于平衡杠杆与流动性的战略建议。' }, stats: { competence: 35, ethics: 35, leadership: 30, innovation: 20 } }
        ]
    },

    {
        id: 'ac_034',
        text: {
            en: '👷 A client wants to hire a sub-contractor who insists on being paid int cash with no W-9 form.',
            th: '👷 ลูกค้าต้องการจ้างผู้รับเหมาช่วงที่ยืนยันว่าจะรับเงินสดโดยไม่มีแบบฟอร์ม W-9',
            zh: '👷 一位客户想雇佣一个坚持要现金且不提供W-9表格的分包商。'
        },
        options: [
            { id: 'A', text: { en: '⛔ "No W-9, No Check." Explain that without the Tax ID, the client cannot deduct the expense, effectively increasing the cost by ~30% (tax bracket).', th: '⛔ "ไม่มี W-9 ไม่จ่ายเช็ค" อธิบายว่าหากไม่มีรหัสผู้เสียภาษี ลูกค้าไม่สามารถหักค่าใช้จ่ายได้ ซึ่งจะเพิ่มต้นทุนจริงประมาณ ~30%', zh: '⛔ “没有W-9，就没有支票。”解释没有税号，客户无法扣除费用，实际上成本增加了约30%（税率）。' }, consequence: { en: '✅ Bottom Line Argument! Showing the effective cost makes the business decision easy.', th: '✅ ข้อโต้แย้งบรรทัดสุดท้าย! การแสดงต้นทุนจริงทำให้การตัดสินใจง่ายขึ้น', zh: '✅ 底线论据！展示实际成本使商业决策变得容易。' }, stats: { competence: 40, ethics: 40, leadership: 35, innovation: 10 } },
            { id: 'B', text: { en: '🤫 Pay them cash and book it as "Supplies"', th: '🤫 จ่ายเงินสดและบันทึกเป็น "วัสดุสิ้นเปลือง"', zh: '🤫 付现金并记为“用品”' }, consequence: { en: '😱 Camouflage! Hiding labor costs violates IRS rules. Fraud.', th: '😱 การพรางตัว! การซ่อนค่าแรง', zh: '😱 伪装！隐瞒劳动力成本违反国税局规则。欺诈。' }, stats: { competence: -20, ethics: -45, leadership: -25, innovation: -10 } },
            { id: 'C', text: { en: '🤷 Let them do it but warn you won\'t sign the return', th: '🤷 ปล่อยให้พวกเขาทำแต่เตือนว่าคุณจะไม่เซ็นแบบแสดงรายการ', zh: '🤷 让他们做但我警告你不会在申报表上签字' }, consequence: { en: '⚠️ Withdrawal! You protect yourself but abandon the client to bad habits.', th: '⚠️ การถอนตัว! คุณปกป้องตัวเอง', zh: '⚠️ 撤退！你保护了自己，却任由客户养成坏习惯。' }, stats: { competence: 10, ethics: 20, leadership: -10, innovation: -10 } },
            { id: 'D', text: { en: '💡 Suggest using a freelancing platform (Upwork/Fiverr) as a middleman to handle the compliance', th: '💡 แนะนำให้ใช้แพลตฟอร์มฟรีแลนซ์เป็นตัวกลางจัดการการปฏิบัติตามกฎ', zh: '💡 建议使用自由职业平台（Upwork/Fiverr）作为中间人处理合规问题' }, consequence: { en: '✅ Tech Solution! Removes the friction and compliance risk.', th: '✅ โซลูชันเทคโนโลยี! ขจัดความขัดแย้งและความเสี่ยง', zh: '✅ 技术解决方案！消除摩擦和合规风险。' }, stats: { competence: 35, ethics: 35, leadership: 30, innovation: 40 } }
        ]
    },

    {
        id: 'ac_035',
        text: {
            en: '👴 An aging client has no succession plan and keeps all financial passwords in a notebook in their desk.',
            th: '👴 ลูกค้าสูงอายุไม่มีแผนสืบทอดตำแหน่งและเก็บรหัสผ่านทางการเงินทั้งหมดไว้ในสมุดโน้ตในโต๊ะทำงาน',
            zh: '👴 一位年迈的客户没有继任计划，并将所有财务密码保存在办公桌的笔记本里。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ "Bus Factor" Intervention: Implement a Password Manager (LastPass/1Password) shared with a successor. Push for a legal Continuity Plan.', th: '🛡️ การแทรกแซง "Bus Factor": ใช้ตัวจัดการรหัสผ่านที่แบ่งปันกับผู้สืบทอด ผลักดันแผนความต่อเนื่องทางกฎหมาย', zh: '🛡️ “巴士系数”干预：实施与继任者共享的密码管理器（LastPass/1Password）。推动法律连续性计划。' }, consequence: { en: '✅ Risk Management! You protect the business from sudden collapse. Critical value.', th: '✅ การบริหารความเสี่ยง! คุณปกป้องธุรกิจ', zh: '✅ 风险管理！你保护企业免于突然崩溃。关键价值。' }, stats: { competence: 40, ethics: 35, leadership: 45, innovation: 40 } },
            { id: 'B', text: { en: '👀 Photocopy the notebook for yourself "just in case"', th: '👀 ถ่ายเอกสารสมุดโน้ตเก็บไว้เอง "เผื่อไว้"', zh: '👀 复印笔记本留给自己“以防万一”' }, consequence: { en: '⚠️ Security Risk! Storing unencrypted credentials is a massive liability for you.', th: '⚠️ ความเสี่ยงด้านความปลอดภัย! การเก็บข้อมูลรับรองที่ไม่เข้ารหัส', zh: '⚠️ 安全风险！存储未加密的凭据对你来说是巨大的责任。' }, stats: { competence: -10, ethics: -10, leadership: -5, innovation: -10 } },
            { id: 'C', text: { en: '🥱 Not your job. You just do the taxes.', th: '🥱 ไม่ใช่งานของคุณ คุณแค่ทำภาษี', zh: '🥱 不关你的事。你只管报税。' }, consequence: { en: '📉 Short-sighted! When they pass away, you lose a client and deal with chaos.', th: '📉 สายตาสั้น! เมื่อพวกเขาเสียชีวิต คุณเสียลูกค้า', zh: '📉 目光短浅！当他们去世时，你失去客户并面临混乱。' }, stats: { competence: -5, ethics: 0, leadership: -20, innovation: -10 } },
            { id: 'D', text: { en: '🤝 Ask to be named the Executor of their estate ($$$)', th: '🤝 ขอให้ได้รับการแต่งตั้งเป็นผู้จัดการมรดก ($$$)', zh: '🤝 要求被指定为遗产执行人（$$$）' }, consequence: { en: '⚠️ Conflict of Interest? Potential windfall, but ethically tricky to solicit.', th: '⚠️ ความขัดแย้งทางผลประโยชน์? อาจได้ลาภลอย', zh: '⚠️ 利益冲突？潜在的横财，但在道德上很难请求。' }, stats: { competence: 20, ethics: -10, leadership: 10, innovation: 0 } }
        ]
    },

    {
        id: 'ac_036',
        text: {
            en: '🔐 Ransomware Attack! A client calls you in panic. Their server is encrypted, and hackers want 5 Bitcoin. They ask, "Should I pay?"',
            th: '🔐 การโจมตี Ransomware! ลูกค้าโทรหาคุณด้วยความตื่นตระหนก เซิร์ฟเวอร์ของพวกเขาถูกเข้ารหัสและแฮ็กเกอร์ต้องการ 5 Bitcoin พวกเขาถามว่า "ฉันควรจ่ายไหม?"',
            zh: '🔐 勒索软件攻击！一位客户惊慌失措地给你打电话。他们的服务器被加密，黑客想要5个比特币。他们问：“我该付钱吗？”'
        },
        options: [
            { id: 'A', text: { en: '👮 Stop! Disconnect internet. Call FBI/Police and Cyber Insurance carrier. Restore from the off-site backups you insisted they keep.', th: '👮 หยุด! ตัดการเชื่อมต่ออินเทอร์เน็ต โทรหา FBI/ตำรวจ และประกันภัยไซเบอร์ กู้คืนจากข้อมูลสำรองนอกสถานที่ที่คุณยืนยันให้พวกเขาเก็บไว้', zh: '👮 停！断开网络连接。呼叫FBI/警察和网络保险公司。从你坚持让他们保留的异地备份中恢复。' }, consequence: { en: '✅ Crisis Management! Your foresight on backups saved the company. You are a hero.', th: '✅ การจัดการวิกฤต! การมองการณ์ไกลของคุณ', zh: '✅ 危机管理！你在备份方面的远见拯救了公司。你是英雄。' }, stats: { competence: 40, ethics: 30, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '💸 "Just pay it." It\'s cheaper than downtime.', th: '💸 "จ่ายไปเถอะ" มันถูกกว่าเวลาที่เสียไป', zh: '💸 “付钱就是了。”这比停机时间便宜。' }, consequence: { en: '⚠️ High Risk! You fuel criminal industry, and 50% of the time they don\'t give the key. IRS may verify if payment is deductible (often not).', th: '⚠️ ความเสี่ยงสูง! คุณเติมเชื้อไฟให้อุตสาหกรรมอาชญากรรม', zh: '⚠️ 高风险！你助长了犯罪行业，而且50%的情况他们不给密钥。国税局可能会核实付款是否可扣除（通常不可）。' }, stats: { competence: -10, ethics: -20, leadership: -20, innovation: -10 } },
            { id: 'C', text: { en: '🏃 "Not my scope." Hang up.', th: '🏃 "ไม่ใช่งานฉัน" วางสาย', zh: '🏃 “不在我的范围内。”挂断电话。' }, consequence: { en: '📉 Abandonment! They needed a trusted advisor. They will fire you after the crisis.', th: '📉 การละทิ้ง! พวกเขาต้องการที่ปรึกษา', zh: '📉 抛弃！他们需要值得信赖的顾问。危机过后他们会解雇你。' }, stats: { competence: 0, ethics: -10, leadership: -40, innovation: -10 } },
            { id: 'D', text: { en: '💻 Try to hack the hackers back', th: '💻 พยายามแฮ็กแฮ็กเกอร์กลับ', zh: '💻 试图反黑黑客' }, consequence: { en: '☠️ Illegal! You are not Batman. You will likely trigger them to leak data.', th: '☠️ ผิดกฎหมาย! คุณไม่ใช่แบทแมน', zh: '☠️ 非法！你不是蝙蝠侠。你可能会触发他们泄露数据。' }, stats: { competence: -30, ethics: -20, leadership: -30, innovation: 0 } }
        ]
    },

    {
        id: 'ac_037',
        text: {
            en: '🤝 Barter Deal: A web designer client built a website for a dentist in exchange for $5,000 worth of dental work. They don\'t want to record it.',
            th: '🤝 ข้อตกลงแลกเปลี่ยน: ลูกค้าออกแบบเว็บไซต์สร้างเว็บไซต์ให้กับทันตแพทย์เพื่อแลกกับงานทันตกรรมมูลค่า $5,000 พวกเขาไม่ต้องการบันทึก',
            zh: '🤝 易货交易：一位网页设计师客户为一位牙医建立了一个网站，以换取价值5000美元的牙科服务。他们不想记录它。'
        },
        options: [
            { id: 'A', text: { en: '📝 Record it! Barter is taxable income at Fair Market Value. Issue a 1099-B if applicable or journal entry revenue/expense.', th: '📝 บันทึกมัน! การแลกเปลี่ยนเป็นรายได้ที่ต้องเสียภาษีตามมูลค่ายุติธรรม', zh: '📝 记录下来！易货按公平市场价值计算为应税收入。如果适用，签发1099-B或日记账条目收入/费用。' }, consequence: { en: '✅ Compliance! You prevent a common tax audit trap. The expense (Medical) might not be business deductible though.', th: '✅ การปฏิบัติตามกฎ! คุณป้องกันกับดักการตรวจสอบ', zh: '✅ 合规！你防止了一个常见的税务审计陷阱。虽然费用（医疗）可能无法作为商业扣除。' }, stats: { competence: 45, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🙈 "What deal?" Act like you never heard it.', th: '🙈 "ข้อตกลงอะไร?" ทำเหมือนคุณไม่เคยได้ยิน', zh: '🙈 “什么交易？”假装没听过。' }, consequence: { en: '⚠️ Tax Evasion! Technical fraud. Small scale, but bad habit.', th: '⚠️ การเลี่ยงภาษี! การฉ้อโกงทางเทคนิค', zh: '⚠️ 逃税！技术欺诈。规模虽小，但习惯不好。' }, stats: { competence: -10, ethics: -25, leadership: -10, innovation: -5 } },
            { id: 'C', text: { en: '🥗 "Call it a business meal." Deduct the dentist work as 50% meal.', th: '🥗 "เรียกว่าอาหารมื้อดึกธุรกิจ" หักงานทันตกรรมเป็นค่าอาหาร 50%', zh: '🥗 “称其为商务餐费。” 将牙科服务按 50% 的餐饮费进行扣除。' }, consequence: { en: '😂 Ridiculous! Aggressive and nonsensical. Audit flag.', th: '😂 ตลกสิ้นดี! รุนแรงและไร้สาระ', zh: '😂 荒谬至极！这种处理方式极其激进且毫无根据，是典型的审计预警信号。' }, stats: { competence: -25, ethics: -30, leadership: -20, innovation: -15 } },
            { id: 'D', text: { en: '📉 Net them out to zero so no tax is due', th: '📉 หักกลบกันเป็นศูนย์เพื่อให้ไม่ต้องเสียภาษี', zh: '📉 将它们相互抵消至零，这样就不必纳税' }, consequence: { en: '❌ Incorrect! The Revenue is taxable income (Self-Employment tax). The expense is likely personal (medical). They do NOT offset for SE tax.', th: '❌ ผิด! รายได้ต้องเสียภาษี', zh: '❌ 不正确！收入是应税收入（自雇税）。费用可能是个人的（医疗）。它们不能用于抵消自雇税。' }, stats: { competence: -20, ethics: -10, leadership: -10, innovation: -10 } }
        ]
    },

    {
        id: 'ac_038',
        text: {
            en: '☁️ Cloud Migration: A client is still using Desktop Accounting 2005. The file is corrupting constantly. They are terrified of "The Cloud".',
            th: '☁️ การย้ายไปคลาวด์: ลูกค้ายังคงใช้โปรแกรมบัญชีเดสก์ท็อปปี 2005 ไฟล์เสียหายตลอดเวลา พวกเขาหวาดกลัว "The Cloud"',
            zh: '☁️ 云迁移：一位客户仍在使用2005版桌面会计软件。文件经常损坏。他们害怕“云”。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Lead the Migration: "I will manage the conversion, train your staff, and show you the real-time app on your phone. It is safer than your old PC."', th: '🚀 นำการย้ายข้อมูล: "ฉันจะจัดการการแปลง ฝึกอบรมพนักงานของคุณ และแสดงแอปเรียลไทม์บนมือถือของคุณ มันปลอดภัยกว่าพีซีเครื่องเก่าของคุณ"', zh: '🚀 领导迁移：“我将管理转换，培训您的员工，并向您展示手机上的实时应用程序。这比您的旧PC更安全。”' }, consequence: { en: '✅ Digital Transformation! You modernize their business and lock in their loyalty.', th: '✅ การเปลี่ยนแปลงทางดิจิทัล! คุณทำให้ธุรกิจของพวกเขาทันสมัย', zh: '✅ 数字化转型！你让他们的业务现代化并锁定了他们的忠诚度。' }, stats: { competence: 45, ethics: 30, leadership: 50, innovation: 50 } },
            { id: 'B', text: { en: '💾 Keep patching the old file. If it breaks, bill them for recovery hours.', th: '💾 ปะไฟล์เก่าต่อไป ถ้ามันพัง เก็บค่ากู้คืน', zh: '💾 继续修补旧文件。如果坏了，就向他们收取恢复时间的费用。' }, consequence: { en: '💸 Extracting Value! Profitable short term, but eventually they will crash and blame you.', th: '💸 การดึงมูลค่า! กำไรระยะสั้น แต่ท้ายที่สุดพวกเขาจะพังและโทษคุณ', zh: '💸 榨取价值！短期有利可图，但最终他们会崩溃并责怪你。' }, stats: { competence: 10, ethics: 0, leadership: -10, innovation: -30 } },
            { id: 'C', text: { en: '🐌 "The cloud is dangerous." Agree with them to validate their fear.', th: '🐌 "คลาวด์อันตราย" เห็นด้วยกับพวกเขาเพื่อยืนยันความกลัว', zh: '🐌 “云很危险。”同意他们的观点以证实他们的恐惧。' }, consequence: { en: '🧛 Luddite! You are holding them back. When the hard drive fails, it\'s over.', th: '🧛 ล้าหลัง! คุณกำลังรั้งพวกเขาไว้', zh: '🧛 勒德分子！你在拖他们的后腿。当硬盘坏了，一切都结束了。' }, stats: { competence: -20, ethics: 10, leadership: -20, innovation: -50 } },
            { id: 'D', text: { en: '📦 Force them to switch overnight without training', th: '📦 บังคับให้พวกเขาเปลี่ยนข้ามคืนโดยไม่มีการฝึกอบรม', zh: '📦 强迫他们一夜之间切换而无需培训' }, consequence: { en: '🤯 Chaos! Staff revolt. Data entry errors multiply.', th: '🤯 ความโกลาหล! พนักงานประท้วง', zh: '🤯 混乱！员工造反。数据录入错误成倍增加。' }, stats: { competence: 20, ethics: 10, leadership: -30, innovation: 10 } }
        ]
    },

    {
        id: 'ac_039',
        text: {
            en: '🎉 A client wants to run a "No Sales Tax" holiday promotion to boost sales, but your state doesn\'t have an official holiday.',
            th: '🎉 ลูกค้าต้องการจัดโปรโมชั่น "งดเว้นภาษีขาย" เพื่อกระตุ้นยอดขาย แต่รัฐของคุณไม่มีวันหยุดราชการ',
            zh: '🎉 一位客户想举办“免销售税”假期促销活动以促进销售，但你所在的州没有法定假期。'
        },
        options: [
            { id: 'A', text: { en: '💰 "We can do \'Tax on Us\'. You discount the item by the tax amount, then we still calculate and remit tax on the discounted price." (Check local laws)', th: '💰 "เราทำ \'ภาษีเราจ่ายให้\' ได้ คุณลดราคาสินค้าเท่ากับจำนวนภาษี จากนั้นเรายังคำนวณและนำส่งภาษีจากราคาที่ลดแล้ว" (ตรวจสอบกฎหมายท้องถิ่น)', zh: '💰 “我们可以做‘包税’。您将商品按税额打折，然后我们仍然按折后价格计算并缴纳税款。”（检查当地法律）' }, consequence: { en: '✅ Marketing Savvy! You found a legal way to achieve the marketing goal. Client is happy.', th: '✅ ความรอบรู้ด้านการตลาด! คุณพบวิธีที่ถูกกฎหมาย', zh: '✅ 精通营销！你找到了实现营销目标的合法途径。客户很高兴。' }, stats: { competence: 45, ethics: 35, leadership: 30, innovation: 40 } },
            { id: 'B', text: { en: '🚫 "Impossible. Illegal." Shut it down.', th: '🚫 "เป็นไปไม่ได้ ผิดกฎหมาย" ปิดมัน', zh: '🚫 “不可能。非法。”关掉它。' }, consequence: { en: '😒 Dream Killer! While technically safe, you offered no creative alternative.', th: '😒 นักฆ่าความฝัน! แม้ว่าจะปลอดภัยทางเทคนิค', zh: '😒 梦想杀手！虽然技术上是安全的，但你没有提供创造性的替代方案。' }, stats: { competence: 10, ethics: 10, leadership: -20, innovation: -30 } },
            { id: 'C', text: { en: '🙈 Just don\'t collect tax that weekend.', th: '🙈 แค่ไม่เก็บภาษีในสุดสัปดาห์นั้น', zh: '🙈 那个周末干脆不代收销售税。' }, consequence: { en: '💸 Costly! The client will have to pay the tax out of pocket anyway during audit, plus penalties.', th: '💸 แพง! ลูกค้าจะต้องจ่ายภาษีเอง', zh: '💸 代价昂贵！在审计期间，客户最终还是得自掏腰包补缴这笔税款，外加罚金。' }, stats: { competence: -15, ethics: -20, leadership: -10, innovation: -10 } },
            { id: 'D', text: { en: '📊 Adjust the sales tax settings to 0% permanently and forget to switch it back', th: '📊 ปรับการตั้งค่าภาษีขายเป็น 0% อย่างถาวรและลืมเปลี่ยนกลับ', zh: '📊 将销售税设置永久调整为0%并忘记切换回来' }, consequence: { en: '😱 Systemic Failure! Massive liability accrues unnoticed.', th: '😱 ความล้มเหลวของระบบ! ความรับผิดมหาศาล', zh: '😱 系统性故障！不知不觉中累积了巨大的责任。' }, stats: { competence: -30, ethics: -10, leadership: -20, innovation: -20 } }
        ]
    },

    {
        id: 'ac_040',
        text: {
            en: '👋 Firing a Client: A client is abusive to your staff, pays late, and constantly demands unethical changes.',
            th: '👋 การไล่ลูกค้าออก: ลูกค้าหยาบคายกับพนักงานของคุณ จ่ายเงินช้า และเรียกร้องการเปลี่ยนแปลงที่ผิดจรรยาบรรณตลอดเวลา',
            zh: '👋 解雇客户：一位客户对你的员工辱骂，迟迟不付款，并不断要求进行不道德的更改。'
        },
        options: [
            { id: 'A', text: { en: '✉️ The "Disengagement Letter": Professional, firm, and final. "Our strategic direction has changed. Here are your files. Good luck."', th: '✉️ "จดหมายยกเลิกสัญญา": มืออาชีพ มั่นคง และเป็นที่สิ้นสุด "ทิศทางกลยุทธ์ของเราเปลี่ยนไป นี่คือไฟล์ของคุณ โชคดี"', zh: '✉️ “脱离接触信”：专业、坚定且最终。“我们的战略方向发生了变化。这是您的文件。祝您好运。”' }, consequence: { en: '✅ Leadership! You protect your team\'s mental health and free up capacity for better clients.', th: '✅ ความเป็นผู้นำ! คุณปกป้องสุขภาพจิตของทีม', zh: '✅ 领导力！你保护了团队的心理健康，并为更好的客户腾出了能力。' }, stats: { competence: 30, ethics: 50, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🤬 Call them and yell back!', th: '🤬 โทรหาพวกเขาและตะโกนกลับ!', zh: '🤬 打电话给他们反击！' }, consequence: { en: '🔥 Bridge Burning! Felt good, but unprofessional. Reputation risk if they leave bad reviews.', th: '🔥 เผาสะพาน! รู้สึกดีแต่ไม่เป็นมืออาชีพ', zh: '🔥 过河拆桥！虽然出一时之气，但显得极不专业。如果他们留下差评，会对你的声誉造成风险。' }, stats: { competence: -10, ethics: -10, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🪜 Raise their fees by 300% (The "Go Away" Price)', th: '🪜 ขึ้นค่าธรรมเนียม 300% (ราคา "ไปให้พ้น")', zh: '🪜 将费用提高300%（“滚蛋”价）' }, consequence: { en: '🤔 Gamble! If they accept, you are stuck with them but rich. If they leave, mission accomplished.', th: '🤔 การพนัน! ถ้าพวกเขายอมรับ คุณจะติดอยู่กับพวกเขาแต่รวย', zh: '🤔 赌博！如果他们接受，你就被他们缠住了，但很有钱。如果他们离开，任务完成。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 30 } },
            { id: 'D', text: { en: '😨 Keep them because you need the revenue', th: '😨 เก็บพวกเขาไว้เพราะคุณต้องการรายได้', zh: '😨 留住他们，因为你需要收入' }, consequence: { en: '📉 Toxic Culture! Your best staff will quit. The bad money drives out the good.', th: '📉 วัฒนธรรมเป็นพิษ! พนักงานที่ดีที่สุดของคุณจะลาออก', zh: '📉 有毒文化！你最好的员工会辞职。劣币驱逐良币。' }, stats: { competence: -10, ethics: 0, leadership: -40, innovation: -10 } }
        ]
    },

    // SECTION 5: STRATEGY & FUTURE (Questions 41-50)

    {
        id: 'ac_041',
        text: {
            en: '🤖 AI Revolution: A new AI tool claims it can categorize 90% of transactions automatically. Your junior staff is worried about their jobs.',
            th: '🤖 การปฏิวัติ AI: เครื่องมือ AI ใหม่ระบุว่าสามารถจัดหมวดหมู่ธุรกรรมได้ 90% โดยอัตโนมัติ พนักงานรุ่นน้องของคุณกังวลเรื่องงานของพวกเขา',
            zh: '🤖 AI革命：一种新的AI工具声称可以自动分类90%的交易。你的初级员工担心他们的工作。'
        },
        options: [
            { id: 'A', text: { en: '🎓 "Upskill or Die": Implement the AI. Retrain staff to handle "Exception Management" and "Advisory" (interpreting data) instead of data entry.', th: '🎓 "พัฒนาทักษะหรือตาย": ใช้ AI ฝึกอบรมพนักงานใหม่ให้จัดการ "การจัดการข้อยกเว้น" และ "การให้คำปรึกษา" (การตีความข้อมูล) แทนการป้อนข้อมูล', zh: '🎓 “不提升就淘汰”：实施AI。重新培训员工处理“异常管理”和“咨询”（解释数据），而不是数据录入。' }, consequence: { en: '✅ Future Proof! You increase margins and value. Staff career paths improve.', th: '✅ พิสูจน์อนาคต! คุณเพิ่มอัตรากำไรและมูลค่า', zh: '✅ 面向未来！提高了利润率和价值。员工职业道路得到改善。' }, stats: { competence: 45, ethics: 30, leadership: 45, innovation: 50 } },
            { id: 'B', text: { en: '🚫 Ban AI to protect jobs', th: '🚫 แบน AI เพื่อปกป้องงาน', zh: '🚫 禁止使用 AI 以保护岗位' }, consequence: { en: '🦕 Extinction! Competitors will undercut your prices. You will become obsolete.', th: '🦕 การสูญพันธุ์! คู่แข่งจะตัดราคาคุณ', zh: '🦕 走向灭亡！竞争对手会利用 AI 优势压低价格，你将逐渐被市场淘汰。' }, stats: { competence: -10, ethics: 10, leadership: -20, innovation: -40 } },
            { id: 'C', text: { en: '🤫 Use AI secretly and fire the staff without warning', th: '🤫 ใช้ AI อย่างลับๆ และไล่พนักงานออกโดยไม่เตือน', zh: '🤫 秘密使用AI并毫无预警地解雇员工' }, consequence: { en: '❄️ Ruthless Efficiency! Profitable, but destroys company culture and trust.', th: '❄️ ประสิทธิภาพที่โหดเหี้ยม! กำไรดี แต่ทำลายวัฒนธรรมองค์กร', zh: '❄️ 冷酷的效率！有利可图，但破坏了公司文化和信任。' }, stats: { competence: 20, ethics: -40, leadership: -50, innovation: 30 } },
            { id: 'D', text: { en: '🤷 Wait and see if other firms use it first', th: '🤷 รอดูว่าบริษัทอื่นใช้ก่อนไหม', zh: '🤷 保持观望，看其他事务所是否先采用' }, consequence: { en: '🐢 Follower! You lose the first-mover advantage.', th: '🐢 ผู้ตาม! คุณเสียเปรียบผู้ที่เริ่มก่อน', zh: '🐢 随波逐流！你失去了先发优势。' }, stats: { competence: 0, ethics: 0, leadership: -10, innovation: -20 } }
        ]
    },

    {
        id: 'ac_042',
        text: {
            en: '✈️ Digital Nomad Client: A graphic designer moves countries every 3 months and asks, "Where do I pay tax?"',
            th: '✈️ ลูกค้า Digital Nomad: นักออกแบบกราฟิกย้ายประเทศทุก 3 เดือนและถามว่า "ฉันต้องจ่ายภาษีที่ไหน?"',
            zh: '✈️ 数字游民客户：一位平面设计师每3个月搬一次国家，并问：“我在哪里交税？”'
        },
        options: [
            { id: 'A', text: { en: '🌐 The Global Map: Analyze tax residency rules (183-day rule). Check Tax Treaties. Likely still owes US tax (citizenship-based) but gets Foreign Earned Income Exclusion.', th: '🌐 แผนที่โลก: วิเคราะห์กฎถิ่นที่อยู่ทางภาษี (กฎ 183 วัน) ตรวจสอบสนธิสัญญาภาษี น่าจะยังคงเป็นหนี้ภาษีสหรัฐฯ (ตามสัญชาติ) แต่ได้รับการยกเว้นรายได้ที่ได้รับจากต่างประเทศ', zh: '🌐 全球地图：分析税务居民规则（183天规则）。检查税收协定。可能仍然欠美国税（基于公民身份），但获得外国收入免税额。' }, consequence: { en: '✅ Expert Knowledge! Complex cross-border advice commands high fees.', th: '✅ ความรู้ระดับผู้เชี่ยวชาญ! คำแนะนำข้ามพรมแดนที่ซับซ้อน', zh: '✅ 专家知识！复杂的跨境建议收费很高。' }, stats: { competence: 50, ethics: 30, leadership: 20, innovation: 40 } },
            { id: 'B', text: { en: '🤷 "Nowhere! You are a citizen of the world!"', th: '🤷 "ไม่ต้องจ่ายที่ไหน! คุณเป็นพลเมืองของโลก!"', zh: '🤷 “不用交！你是世界公民！”' }, consequence: { en: '😱 Stateless Fraud! Most countries tax income earned on their soil. You are creating an international fugitive.', th: '😱 การฉ้อโกงไร้สัญชาติ! ประเทศส่วนใหญ่เก็บภาษี', zh: '😱无国籍欺诈！大多数国家对在其领土上获得的收入征税。你在制造国际逃犯。' }, stats: { competence: -30, ethics: -30, leadership: -10, innovation: -10 } },
            { id: 'C', text: { en: '🇺🇸 "Just pay the US tax and ignore the rest"', th: '🇺🇸 "แค่จ่ายภาษีสหรัฐฯ และเพิกเฉยส่วนที่เหลือ"', zh: '🇺🇸 “只交美国税，其他的不管”' }, consequence: { en: '⚠️ Risk! Local countries might detain them at the border for evasion. Ignoring local laws is negligence.', th: '⚠️ ความเสี่ยง! ประเทศท้องถิ่นอาจกักตัวพวกเขา', zh: '⚠️ 风险！当地国家可能会因逃税而在边境扣留他们。无视当地法律是疏忽。' }, stats: { competence: -10, ethics: -10, leadership: -5, innovation: -10 } },
            { id: 'D', text: { en: '🏢 Tell them to incorporate in a tax haven (Cayman Islands)', th: '🏢 บอกให้พวกเขาจดทะเบียนในสวรรค์ภาษี (หมู่เกาะเคย์แมน)', zh: '🏢 告诉他们在避税天堂（开曼群岛）注册' }, consequence: { en: '🔍 Scrutiny! Unless they actually live there, this is likely "Manage & Control" tax evasion. Complex and risky.', th: '🔍 การตรวจสอบ! เว้นแต่พวกเขาจะอาศัยอยู่ที่นั่นจริง', zh: '🔍 审查！除非他们真的住在那里，否则这很可能是“管理与控制”逃税。复杂且危险。' }, stats: { competence: 10, ethics: 15, leadership: -5, innovation: 10 } }
        ]
    },

    {
        id: 'ac_043',
        text: {
            en: '🌱 ESG Reporting: A big client wants to issue an "Environmental Impact Report" alongside financials. They have no data.',
            th: '🌱 การรายงาน ESG: ลูกค้ารายใหญ่ต้องการออก "รายงานผลกระทบต่อสิ่งแวดล้อม" ควบคู่ไปกับการเงิน พวกเขาไม่มีข้อมูล',
            zh: '🌱 ESG报告：一位大客户想在发布财务报告的同时发布“环境影响报告”。他们没有数据。'
        },
        options: [
            { id: 'A', text: { en: '📊 Framework Setup: Adopt SASB/GRI standards. Start by measuring carbon footprint of energy bills and travel. Audit the non-financial data.', th: '📊 การตั้งค่ากรอบงาน: ใช้มาตรฐาน SASB/GRI เริ่มด้วยการวัดรอยเท้าคาร์บอนจากบิลพลังงานและการเดินทาง ตรวจสอบข้อมูลที่ไม่ใช่ตัวเงิน', zh: '📊 框架设置：采用SASB/GRI标准。从测量能源账单和旅行的碳足迹开始。审计非财务数据。' }, consequence: { en: '✅ New Service Line! You are now a Sustainability Accountant. Huge future growth.', th: '✅ สายบริการใหม่! ตอนนี้คุณเป็นนักบัญชีความยั่งยืน', zh: '✅ 新服务线！你现在是可持续发展会计师。未来增长巨大。' }, stats: { competence: 40, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '🎨 "Just paint it green." Make up some fluffy marketing language.', th: '🎨 "แค่ทาสีเขียว" สร้างภาษาการตลาดฟุ้งๆ ขึ้นมา', zh: '🎨 “把它刷绿就行。”编一些虚浮的营销语言。' }, consequence: { en: '⚠️ Greenwashing! Regulatory bodies (SEC/EU) are cracking down on this. Reputational bomb.', th: '⚠️ การฟอกเขียว! หน่วยงานกำกับดูแลกำลังปราบปราม', zh: '⚠️ 漂绿！监管机构（SEC/EU）正在对此进行打击。声誉炸弹。' }, stats: { competence: -10, ethics: -40, leadership: -20, innovation: -10 } },
            { id: 'C', text: { en: '🌳 "We don\'t do trees." Refuse the work.', th: '🌳 "เราไม่ทำเรื่องต้นไม้" ปฏิเสธงาน', zh: '🌳 “我们不做树。”拒绝工作。' }, consequence: { en: '📉 Missed Opportunity! They will hire a Big 4 firm and eventually move the audit there too.', th: '📉 พลาดโอกาส! พวกเขาจะจ้างบริษัท Big 4', zh: '📉 错失良机！他们会聘请四大公司，最终也会把审计工作转过去。' }, stats: { competence: 0, ethics: 0, leadership: -20, innovation: -30 } },
            { id: 'D', text: { en: '📉 Estimate impact based on industry averages without checking actuals', th: '📉 ประมาณการผลกระทบจากค่าเฉลี่ยอุตสาหกรรมโดยไม่ตรวจสอบของจริง', zh: '📉 在不检查实际情况的情况下根据行业平均水平估算影响' }, consequence: { en: '⚠️ Inaccurate! Defeats the purpose of "Reporting." Safe initially, but weak.', th: '⚠️ ไม่ถูกต้อง! ขัดกับวัตถุประสงค์', zh: '⚠️ 不准确！违背了“报告”的目的。最初安全，但很弱。' }, stats: { competence: 15, ethics: 10, leadership: 0, innovation: 5 } }
        ]
    },

    {
        id: 'ac_044',
        text: {
            en: '🔗 Niche Strategy: You are thinking of specializing solely in "Crypto & Web3 Accounting".',
            th: '🔗 กลยุทธ์เฉพาะทาง: คุณกำลังคิดที่จะเชี่ยวชาญเฉพาะใน "Crypto & Web3 Accounting"',
            zh: '🔗 利基战略：你正考虑专门从事“加密货币与 Web3 会计”。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Go All In: "The Crypto CPA." Build tech stack (CoinTracker/Bitwave). Charge premium fees for the complexity and risk.', th: '🚀 ทุ่มสุดตัว: "The Crypto CPA" สร้างเทคสแต็ค (CoinTracker/Bitwave) คิดค่าธรรมเนียมพรีเมียมสำหรับความซับซ้อนและความเสี่ยง', zh: '🚀 全力以赴：“加密CPA”。构建技术栈（CoinTracker/Bitwave）。为复杂性和风险收取高额费用。' }, consequence: { en: '✅ High Risk/High Reward! You become the go-to expert nationally. Volatile but lucrative.', th: '✅ ความเสี่ยงสูง/ผลตอบแทนสูง! คุณกลายเป็นผู้เชี่ยวชาญ', zh: '✅ 高风险/高回报！你成为全国首选专家。波动大但利润丰厚。' }, stats: { competence: 40, ethics: 20, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '🚫 Stay Generalist: "Crypto is a fad." Focus on dentists and restaurants.', th: '🚫 เป็นทั่วไป: "คริปโตเป็นกระแสชั่วคราว" เน้นทันตแพทย์และร้านอาหาร', zh: '🚫 保持通才：“加密只是昙花一现。”专注于牙医和餐馆。' }, consequence: { en: '💤 Safe/Stable! Lower growth, but steady cash flow. Boring but reliable.', th: '💤 ปลอดภัย/มั่นคง! การเติบโตต่ำกว่า', zh: '💤 安全/稳定！增长较慢，但现金流稳定。无聊但可靠。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: -20 } },
            { id: 'C', text: { en: '⚖️ Hybrid: Take a few clients to test waters', th: '⚖️ ลูกผสม: รรับลูกค้าสองสามรายเพื่อทดลองตลาด', zh: '⚖️ 混合：接几个客户试水' }, consequence: { en: '✅ Prudent! Good way to build skills without betting the firm.', th: '✅ รอบคอบ! วิธีที่ดีในการสร้างทักษะ', zh: '✅ 谨慎！在不拿公司做赌注的情况下培养技能的好方法。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 20 } },
            { id: 'D', text: { en: '🕵️ Accept clients but don\'t report their crypto (Cash basis only)', th: '🕵️ รับลูกค้าแต่ไม่รายงานคริปโตของพวกเขา (เกณฑ์เงินสดเท่านั้น)', zh: '🕵️ 接客户但不报告他们的加密货币（仅限收付实现制）' }, consequence: { en: '❌ Malpractice! Deliberate omission. You will lose your license.', th: '❌ การปฏิบัติหน้าที่โดยมิชอบ! การละเลยโดยเจตนา', zh: '❌ 玩忽职守！故意遗漏。你会失去执照。' }, stats: { competence: -20, ethics: -50, leadership: -30, innovation: -10 } }
        ]
    },

    {
        id: 'ac_045',
        text: {
            en: '💲 Value-Based Pricing: You want to stop billing by the hour ($150/hr) and bill by value (fixed monthly subscription).',
            th: '💲 การตั้งราคาตามมูลค่า: คุณต้องการหยุดเก็บเงินตามชั่วโมง ($150/ชม.) และเก็บตามมูลค่า (สมัครสมาชิกรายเดือนคงที่)',
            zh: '💲 基于价值的定价：你想停止按小时计费（150美元/小时），改为按价值收费（固定每月订阅制）。'
        },
        options: [
            { id: 'A', text: { en: '📦 Productize Services: Create "Gold/Silver/Bronze" packages. Include advisory. Price based on outcome (saved taxes, peace of mind), not hours.', th: '📦 ทำบริการให้เป็นผลิตภัณฑ์: สร้างแพ็คเกจ "ทอง/เงิน/ทองแดง" รวมการให้คำปรึกษา ราคาตามผลลัพธ์ (ประหยัดภาษี ความสบายใจ) ไม่ใช่ชั่วโมง', zh: '📦 服务产品化：创建“金/银/铜”套餐。包括咨询。根据结果（节省税款、安心）而非小时定价。' }, consequence: { en: '✅ Profit Margin Explosion! You decouple revenue from time. Efficiency now makes you money.', th: '✅ อัตรากำไรระเบิด! คุณแยกรายได้ออกจากเวลา', zh: '✅ 利润率爆炸！你将收入与时间脱钩。效率现在能为你赚钱。' }, stats: { competence: 30, ethics: 30, leadership: 50, innovation: 45 } },
            { id: 'B', text: { en: '🕓 Stick to Hourly: "It\'s the only fair way. If I work 10 minutes, I charge 10 minutes."', th: '🕓 ยึดติดกับรายชั่วโมง: "เป็นวิธีเดียวที่ยุติธรรม ถ้าฉันทำ 10 นาที ฉันคิด 10 นาที"', zh: '🕓 坚持按小时：“这是唯一公平的方式。如果我工作10分钟，我就收10分钟的钱。”' }, consequence: { en: '📉 Income Ceiling! You can only work so many hours. You punish yourself for being fast.', th: '📉 เพดานรายได้! คุณลงโทษตัวเองที่ทำงานเร็ว', zh: '📉 收入上限！你只能工作这么多小时。你因为做得快而惩罚自己。' }, stats: { competence: 10, ethics: 20, leadership: -10, innovation: -20 } },
            { id: 'C', text: { en: '🏷️ Guess a high fixed number and hope they say yes', th: '🏷️ เดาตัวเลขคงที่สูงๆ แล้วหวังว่าพวกเขาจะตอบตกลง', zh: '🏷️ 猜一个高的固定数字，希望他们答应' }, consequence: { en: '⚠️ Risky! Without clear scope definition, you might end up working for $5/hr effectively.', th: '⚠️ เสี่ยง! หากไม่มีขอบเขตที่ชัดเจน', zh: '⚠️ 冒险！如果没有明确的范围定义，你的实际时薪可能只有5美元。' }, stats: { competence: -5, ethics: 10, leadership: 0, innovation: 10 } },
            { id: 'D', text: { en: '📉 Lowball fixed price to win clients', th: '📉 กดราคาคงที่ต่ำๆ เพื่อให้ได้ลูกค้า', zh: '📉 以极低价抢占市场以赢得客户' }, consequence: { en: '🥵 Race to the Bottom! You fill capacity with low-value work. Poverty trap.', th: '🥵 แข่งกันลงเหว! กับดักความยากจน', zh: '🥵 恶性竞争！你让低价值的工作填满了产能，陷入了贫困陷阱。' }, stats: { competence: -10, ethics: 0, leadership: -30, innovation: -10 } }
        ]
    },

    {
        id: 'ac_046',
        text: {
            en: '🌏 Global Talent: You are struggling to find qualified staff locally. You consider hiring remote accountants from the Philippines or India.',
            th: '🌏 บุคลากรระดับโลก: คุณกำลังดิ้นรนเพื่อหาพนักงานที่มีคุณสมบัติในท้องถิ่น คุณพิจารณาจ้างนักบัญชีทางไกลจากฟิลิปปินส์หรืออินเดีย',
            zh: '🌏 全球人才：你在当地很难找到合格的员工。你考虑从菲律宾或印度招聘远程会计师。'
        },
        options: [
            { id: 'A', text: { en: '🏗️ Build an International Hub: Hire through a reputable BPO, implement strict data security (VPN, SOC2), and integrate them into daily meetings.', th: '🏗️ สร้างศูนย์กลางนานาชาติ: จ้างผ่าน BPO ที่มีชื่อเสียง ใช้ระบบรักษาความปลอดภัยข้อมูลที่เข้มงวด และรวมพวกเขาเข้าไว้ในการประชุมประจำวัน', zh: '🏗️ 建立国际中心：通过信誉良好的BPO招聘，实施严格的数据安全（VPN, SOC2），并将他们融入日常会议。' }, consequence: { en: '✅ Global Scalability! You access talent at 1/3 the cost, allowing you to scale rapidly without compromising quality.', th: '✅ ความสามารถในการขยายระดับโลก! คุณเข้าถึงบุคลากรในราคา 1/3 ของต้นทุน', zh: '✅ 全球可扩展性！你以1/3的成本获得人才，让你可以在不牺牲质量的情况下快速扩张。' }, stats: { competence: 40, ethics: 30, leadership: 45, innovation: 45 } },
            { id: 'B', text: { en: '💸 Buy-it-cheap: Hire the lowest-cost freelancers you find on Upwork and give them full admin access.', th: '💸 ซื้อของถูก: จ้างฟรีแลนซ์ราคาถูกที่สุดที่หาได้ใน Upwork และให้สิทธิ์เข้าถึงระดับผู้ดูแลระบบอย่างเต็มที่', zh: '💸 贪便宜：在Upwork上找成本最低的自由职业者，并给他们完整的管理员访问权限。' }, consequence: { en: '😱 Data Breach Risk! No vetting + full access = disaster. If they disappear with client data, you are liable.', th: '😱 ความเสี่ยงข้อมูลรั่วไหล! ไม่มีการตรวจสอบ + เข้าถึงได้เต็มที่ = หายนะ', zh: '😱 数据泄露风险！没有审查+完整权限=灾难。如果他们带着客户数据消失，你要承担责任。' }, stats: { competence: -20, ethics: -25, leadership: -30, innovation: 10 } },
            { id: 'C', text: { en: '🚫 "Local Only": Refuse to hire outside your city. Pay double for local staff even if it means zero profit.', th: '🚫 "คนท้องถิ่นเท่านั้น": ปฏิเสธการจ้างงานนอกเมือง แลกกับการจ่ายแพงกว่าสองเท่าแม้จะไม่มีกำไร', zh: '🚫 “仅限当地”：拒绝在你的城市之外招聘。即使意味着零利润，也要为当地员工支付双倍薪水。' }, consequence: { en: '📉 Financial Strain! You cannot compete with modern firms. You become a small lifestyle business with no growth.', th: '📉 ความเครียดทางการเงิน! คุณไม่สามารถแข่งขันกับบริษัทสมัยใหม่ได้', zh: '📉 财务压力！你无法与现代公司竞争。你变成了一家没有增长的小型生活方式公司。' }, stats: { competence: 10, ethics: 30, leadership: -10, innovation: -40 } },
            { id: 'D', text: { en: '🤖 Automate instead of hiring anyone', th: '🤖 ใช้ระบบอัตโนมัติแทนการจ้างงานใครเลย', zh: '🤖 用自动化代替招聘任何人' }, consequence: { en: '⚠️ Technical Debt! Software cannot handle "grey areas" yet. You will end up doing the work yourself at 2 AM.', th: '⚠️ หนี้ทางเทคนิค! ซอฟต์แวร์ยังไม่สามารถจัดการ "พื้นที่สีเทา" ได้', zh: '⚠️ 技术债！软件还无法处理“灰色地带”。你最终会在凌晨2点自己干活。' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: 35 } }
        ]
    },

    {
        id: 'ac_047',
        text: {
            en: '📈 The Advisory Pivot: A client asks, "Stop telling me what happened last month. Tell me what will happen next year."',
            th: '📈 การเปลี่ยนไปสู่การเป็นที่ปรึกษา: ลูกค้าถามว่า "หยุดบอกฉันว่าเกิดอะไรขึ้นเมื่อเดือนที่แล้ว บอกฉันว่าปีหน้าจะเกิดอะไรขึ้น"',
            zh: '📈 咨询转型：一位客户问：“别告诉我上个月发生了什么。告诉我明年会发生什么。”'
        },
        options: [
            { id: 'A', text: { en: '🔮 Predictive Modeling: Implement "Rolling Forecasts" and "3-Way Cash Flow" projections. Meet monthly to adjust strategy based on data.', th: '🔮 การสร้างแบบจำลองคาดการณ์: ใช้ "การพยากรณ์ล่วงหน้า" และการคาดการณ์ "กระแสเงินสด 3 ทาง" ประชุมทุกเดือนเพื่อปรับกลยุทธ์ตามข้อมูล', zh: '🔮 预测建模：实施“滚动预测”和“三方现金流”预测。每月开会根据数据调整战略。' }, consequence: { en: '✅ Trusted Advisor Status! You moved from a cost center to a profit partner. Your fees double.', th: '✅ สถานะที่ปรึกษาที่ได้รับความไว้วางใจ! คุณเปลี่ยนจากศูนย์ต้นทุนเป็นพันธมิตรด้านกำไร', zh: '✅ 值得信赖的顾问地位！你从成本中心转变为利润合作伙伴。你的费用翻倍。' }, stats: { competence: 50, ethics: 30, leadership: 45, innovation: 45 } },
            { id: 'B', text: { en: '🤷 Guess: "Business looks good, keep it up!"', th: '🤷 เดา: "ธุรกิจดูดีนะ ทำต่อไป!"', zh: '🤷 猜测：“生意看起来不错，保持下去！”' }, consequence: { en: '📉 Loss of Respect! Vague advice is worthless. They will find a real CFO.', th: '📉 สูญเสียความเคารพ! คำแนะนำที่คลุมเครือไม่มีค่า', zh: '📉 失去尊重！模糊的建议毫无价值。他们会找一个真正的CFO。' }, stats: { competence: -10, ethics: 10, leadership: -20, innovation: -10 } },
            { id: 'C', text: { en: '📊 Print the same P&L but put "Pro Forma" at the top', th: '📊 พิมพ์งบกำไรขาดทุนแบบเดิมแต่ใส่คำว่า "Pro Forma" ไว้ด้านบน', zh: '📊 打印同样的损益表，但在上面标注“预计”' }, consequence: { en: '⚠️ Laziness! Projections based on 0 logic will fail. Client will make bad investments based on your junk data.', th: '⚠️ ความขี้เกียจ! การคาดการณ์ที่ไม่มีตรรกะจะล้มเหลว', zh: '⚠️ 懒惰！基于零逻辑的预测会失败。客户会根据你的垃圾数据做出糟糕的投资。' }, stats: { competence: -25, ethics: -10, leadership: -20, innovation: -20 } },
            { id: 'D', text: { en: '📉 Tell them you are an Accountant, not a Fortune Teller', th: '📉 บอกพวกเขาว่าคุณเป็นนักบัญชี ไม่ใช่หมอดู', zh: '📉 告诉他们你是会计师，不是算命先生' }, consequence: { en: '🧛 Obsolescence! Historical-only accounting is being commoditized. You are failing to adapt.', th: '🧛 ความล้าหลัง! การบัญชีประวัติศาสตร์เพียงอย่างเดียวจะถูกแทนที่', zh: '🧛 过时！仅提供历史数据的会计正在商品化。你没有适应。' }, stats: { competence: 0, ethics: 20, leadership: -40, innovation: -40 } }
        ]
    },

    {
        id: 'ac_048',
        text: {
            en: '🏢 M&A Opportunity: A client is buying a competitor and wants you to handle the Financial Due Diligence.',
            th: '🏢 โอกาสควบรวมกิจการ: ลูกค้ากำลังซื้อคู่แข่งและต้องการให้คุณจัดการการตรวจสอบวิเคราะห์สถานะทางการเงิน (Due Diligence)',
            zh: '🏢 并购机会：一位客户正在收购一个竞争对手，并希望你处理财务尽职调查。'
        },
        options: [
            { id: 'A', text: { en: '🕵️ Forensic Review: Verify "Quality of Earnings" (QofE). Check for hidden liabilities, tax liens, and verify that the "add-backs" are legitimate.', th: '🕵️ การตรวจสอบทางนิติบัญชี: ตรวจสอบ "คุณภาพของกำไร" (QofE) เช็คหนี้สินที่ซ่อนอยู่ และตรวจสอบว่าส่วนที่บวกกลับเข้ามานั้นถูกต้อง', zh: '🕵️ 法证审查：验证“收益质量”（QofE）。检查隐藏细节的负债、税务留置权，并验证“加回项”是否合法。' }, consequence: { en: '✅ Deal Saver/Maker! You found a $1M hole in the books. You saved the client from a bad acquisition.', th: '✅ ผู้ช่วยกอบกู้/สร้างข้อตกลง! คุณพบช่องโหว่ $1M ในบัญชี', zh: '✅ 交易拯救者/促成者！你发现了账目中一个100万美元的漏洞。你把客户从一桩糟糕的收购中救了出来。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 30 } },
            { id: 'B', text: { en: '👌 Just trust the seller\'s tax returns', th: '👌 เชื่อรายงานภาษีของผู้ขายก็พอ', zh: '👌 只要信任卖家的纳税申报单就行了' }, consequence: { en: '😱 Negligence! Tax returns can be faked or biased. You failed to protect your client.', th: '😱 ความประมาทเลินเล่อ! รายงานภาษาสามารถปลอมแปลงได้', zh: '😱 玩忽职守！纳税申报单可能造假或有偏差。你未能保护你的客户。' }, stats: { competence: -30, ethics: -10, leadership: -30, innovation: -10 } },
            { id: 'C', text: { en: '💰 Push for the deal to go through so you can get a "success fee"', th: '💰 ผลักดันให้ปิดดีลเพื่อให้ได้ "ค่าธรรมเนียมความสำเร็จ"', zh: '💰 推动交易完成，这样你就能得到“成功费”' }, consequence: { en: '⚠️ Ethical Conflict! Your advice is now biased by the payout. This is a massive conflict of interest.', th: '⚠️ ความขัดแย้งทางจริยธรรม! คำแนะนำของคุณตอนนี้ลำเอียง', zh: '⚠️ 道德冲突！你的建议现在受酬劳影响而有偏差。这是巨大的利益冲突。' }, stats: { competence: 10, ethics: -50, leadership: -20, innovation: 10 } },
            { id: 'D', text: { en: '🤷 Tell them to hire a larger, specialized M&A firm', th: '🤷 บอกให้พวกเขาจ้างบริษัท M&A เฉพาะทางที่ใหญ่กว่า', zh: '🤷 告诉他们聘请一家更大型、专业的并购公司' }, consequence: { en: '✅ Prudent Delegation! If you aren\'t qualified, referring out is the ethical choice.', th: '✅ การมอบหมายที่รอบคอบ! หากคุณไม่มีคุณสมบัติ การแนะนำต่อคือทางเลือกที่มีจริยธรรม', zh: '✅ 谨慎授权！如果你不胜任，转介出去是符合道德的选择。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 5 } }
        ]
    },

    {
        id: 'ac_049',
        text: {
            en: '🚀 Startup Sweat Equity: A high-growth tech startup offers you 2% equity instead of paying your $20,000 fee. They might be the next Unicorn.',
            th: '🚀 หุ้นในสตาร์ทอัพ: สตาร์ทอัพเทคโนโลยีที่เติบโตสูงเสนอหุ้น 2% ให้คุณแทนการจ่ายค่าธรรมเนียม $20,000 พวกเขาอาจเป็น Unicorn รายต่อไป',
            zh: '🚀 创业公司汗水股权：一家高速增长的科技初创公司向你提供2%的股权，以代替支付2万美元的费用。他们可能是下一个独角兽。'
        },
        options: [
            { id: 'A', text: { en: '🎲 Calculated Risk: Perform your own valuation of the cap table. If it fits your risk profile, take the equity. Formalize it with an Equity-for-Service agreement.', th: '🎲 ความเสี่ยงที่คำนวณแล้ว: ประเมินมูลค่า cap table ด้วยตัวเอง หากตรงกับโปรไฟล์ความเสี่ยงของคุณ ก็รับหุ้นไว้ ทำสัญญา Equity-for-Service ให้เป็นทางการ', zh: '🎲 经计算的风险：对自己对股上限表进行估值。如果符合你的风险状况，就持有股权。通过股权服务协议将其正式化。' }, consequence: { en: '🚀 700x Return! Or 0. They hit it big, and your $20k is now $14 million. You are a legendary investor-accountant.', th: '🚀 ผลตอบแทน 700 เท่า! หรือ 0 พวกเขาดังระเบิด และเงิน $20k ของคุณตอนนี้กลายเป็น 14 ล้านเหรียญ', zh: '🚀 700倍回报！或者归零。他们大获成功，你那2万美元现在变成了1400万美元。你成了传奇的投资型会计师。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '💵 "Cash is King": Demand the $20,000. Startups usually fail.', th: '💵 "เงินสดคือที่หนึ่ง": เรียกร้องเงิน $20,000 สตาร์ทอัพมักจะล้มเหลว', zh: '💵 “现金为王”：要求支付2万美元。初创公司通常会失败。' }, consequence: { en: '✅ Guaranteed Revenue! You keep your firm liquid. You missed the moon mission, but you can pay rent.', th: '✅ รายได้ที่รับประกัน! คุณรักษาความคล่องตัวของบริษัท', zh: '✅ 保证收入！你保持公司的流动性。你错过了登月任务，但你能交得起房租。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: -10 } },
            { id: 'C', text: { en: '😱 Accept without reading the legal documents', th: '😱 ยอมรับโดยไม่อ่านเอกสารทางกฎหมาย', zh: '😱 在不阅读法律文件的情况下接受' }, consequence: { en: '🤡 Dilution Nightmare! They issue more shares and your 2% becomes 0.0002%. You worked for free.', th: '🤡 ฝันร้ายของการถูกลดสัดส่วนหุ้น! พวกเขาออกหุ้นเพิ่มและหุ้น 2% ของคุณเหลือ 0.0002%', zh: '🤡 稀释噩梦！他们发行更多股票，你那2%变成了0.0002%。你白干了。' }, stats: { competence: -20, ethics: 10, leadership: -20, innovation: 10 } },
            { id: 'D', text: { en: '🛑 Refuse because "Accountancy laws forbid equity for fees"', th: '🛑 ปฏิเสธเพราะ "กฎหมายการบัญชีห้ามรับหุ้นแทนค่าธรรมเนียม"', zh: '🛑 拒绝，因为“会计法律禁止以股权充抵费用”' }, consequence: { en: '❌ Incorrect! It varies by jurisdiction, but usually allowed for non-audit services if disclosed. You used a fake rule to avoid a hard decision.', th: '❌ ผิด! ขึ้นอยู่กับเขตอำนาจศาล แต่มักจะอนุญาตสำหรับบริการที่ไม่ใช่การตรวจสอบ', zh: '❌ 不正确！这因辖区而异，但如果予以披露，非审计服务通常是允许的。你用一个虚假的规则来逃避艰难的决定。' }, stats: { competence: -10, ethics: 30, leadership: -20, innovation: -30 } }
        ]
    },

    {
        id: 'ac_050',
        text: {
            en: '🏆 The Final Exit: After 30 years, you are ready to retire. A larger firm offers to buy your practice for 1.5x Gross Revenue.',
            th: '🏆 ทางออกสุดท้าย: หลังจาก 30 ปี คุณพร้อมที่จะเกษียณ บริษัทที่ใหญ่กว่าเสนอซื้อสำนักงานของคุณในราคา 1.5 เท่าของรายได้รวม',
            zh: '🏆 最终退出：30年后，你准备退休了。一家更大的公司提议以总收入的1.5倍收购你的业务。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Strategic Sale: Negotiate a "Transition Period" where you stay 1 year to ensure clients stay. Protect your staff\'s jobs in the contract.', th: '🤝 การขายเชิงกลยุทธ์: เจรจา "ช่วงการเปลี่ยนผ่าน" โดยคุณจะอยู่ต่อ 1 ปีเพื่อให้แน่ใจว่าลูกค้าจะไม่หนี ปกป้องงานของพนักงานในสัญญา', zh: '🤝 战略销售：谈判一个“过渡期”，你留任一年以确保客户留存。在合同中保护员工的工作。' }, consequence: { en: '✅ Legacy Secured! You cash out big, your clients are taken care of, and your team is safe. Career Goal Achieved.', th: '✅ รักษาเกียรติประวัติ! คุณได้เงินก้อนโต ลูกค้าได้รับการดูแล และทีมของคุณปลอดภัย', zh: '✅ 传奇传承！你套现了大笔资金，你的客户得到了照顾，你的团队也很安全。职业目标达成。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '🏃 Take the money and run: Disappear on the day the check clears.', th: '🏃 รับเงินแล้วหนี: หายตัวไปในวันที่เช็คขึ้นเงินได้', zh: '🏃 拿钱走人：在支票兑现的那天消失。' }, consequence: { en: '⚠️ Reputation Ruin! The buyer sues you as clients leave in droves. Your name in the industry is mud.', th: '⚠️ ชื่อเสียงป่นปี้! ผู้ซื้อฟ้องคุณเพราะลูกค้าหนีกันหมด', zh: '⚠️ 声誉受损！由于客户成批离开，买家起诉你。你在行业里的名声臭了。' }, stats: { competence: 10, ethics: -40, leadership: -50, innovation: 0 } },
            { id: 'C', text: { en: '🤥 Hide your worst clients from the buyer to get a better price', th: '🤥 ซ่อนลูกค้าที่แย่ที่สุดของคุณจากผู้ซื้อเพื่อให้ได้ราคาที่ดีกว่า', zh: '🤥 向买家隐瞒你最糟糕的客户以获得更好的价格' }, consequence: { en: '😱 Legal Fraud! This is "Fraudulent Inducement." They will claw back the money and sue you for every penny.', th: '😱 ฉ้อโกงทางกฎหมาย! นี่คือการจูงใจที่เป็นเท็จ พวกเขาจะเรียกเงินคืนและฟ้องคุณทุกบาททุกสตางค์', zh: '😱 法律欺诈！这是“欺诈性诱导”。他们会追回资金并起诉你赔偿每一分钱。' }, stats: { competence: 10, ethics: -60, leadership: -30, innovation: 10 } },
            { id: 'D', text: { en: '🏢 Refuse to sell: "I will work until I die at this desk."', th: '🏢 ปฏิเสธที่จะขาย: "ฉันจะทำงานที่โต๊ะนี้ไปจนตาย"', zh: '🏢 拒绝出售：“我会在这张办公桌前工作到死。”' }, consequence: { en: '📉 Decay! As you age, your competence drops. The firm value slowly bleeds to zero as you lose touch with tech.', th: '📉 ความเสื่อมถอย! เมื่อคุณอายุมากขึ้น ความสามารถของคุณก็ลดลง มูลค่าบริษัทค่อยๆ ลดลงจนเหลือศูนย์', zh: '📉 衰落！随着年龄增长，你的能力下降。随着你与技术脱节，公司价值慢慢流失至零。' }, stats: { competence: -10, ethics: 10, leadership: -30, innovation: -50 } }
        ]
    }
];

