
// Pharmacist Career Questions
// Ultra-Comprehensive set: 50 detailed, story-rich questions
// Covering Clinical, Retail, Legal, Ethical, and Management scenarios

export const pharmacistQuestions = [

    // SECTION 1: CLINICAL & PATIENT SAFETY (Questions 1-10)

    {
        id: 'ph_001',
        text: {
            en: '💊 The Opioid Red Flag: A frantic customer hands you a prescription for 120 Oxycontin tablets. The patient is from two towns over, the doctor is from a different state, and the diagnosis code is vague "pain". The customer is sweating and tapping their foot impatiently. They offer to pay cash because "the insurance system is down".',
            th: '💊 สัญญาณอันตรายโอปิออยด์: ลูกค้าที่มีท่าทีลุกลนยื่นใบสั่งยา Oxycontin 120 เม็ดให้คุณ คนไข้มาจากต่างอำเภอ หมอมาจากต่างรัฐ และรหัสการวินิจฉัยระบุแค่ "ปวด" แบบกว้างๆ ลูกค้าเหงื่อแตกและเคาะเท้าอย่างไม่อดทน เขาเสนอที่จะจ่ายเงินสดเพราะ "ระบบประกันล่ม"',
            zh: '💊 阿片类药物危险信号：一位焦急的顾客递给你一张120片奥施康定的处方。病人来自两个城镇之外，医生来自另一个州，诊断代码是模糊的“疼痛”。顾客出汗并不耐烦地跺着脚。他们提议付现金，因为“保险系统瘫痪了”。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🕵️ The Detective Protocol: "I need to verify this with the prescriber. It will take at least 24 hours. Please leave your ID copy." (Call the doctor and check the PMP database).', th: '🕵️ โปรโตคอลนักสืบ: "ผมต้องตรวจสอบกับผู้สั่งจ่ายยาก่อนครับ ต้องใช้เวลาอย่างน้อย 24 ชั่วโมง รบกวนทิ้งสำเนาบัตรประชาชนไว้ด้วยครับ" (โทรหาหมอและเช็คฐานข้อมูล PMP)', zh: '🕵️ 侦探协议：“我也需要向开处方者核实。这将至少需要24小时。请留下您的身份证复印件。”（致电医生并检查PMP数据库）。' },
                consequence: { en: '✅ Crisis Averted! The doctor\'s office confirms the patient was discharged months ago. You identify a pill-mill ring. The customer flees when you ask for ID. You flag the patient in the state database, preventing future diversion. DEA commends your vigilance.', th: '✅ ป้องกันวิกฤตได้! คลินิกยืนยันว่าคนไข้ถูกส่งตัวกลับบ้านไปหลายเดือนแล้ว คุณระบุได้ว่าเป็นขบวนการโรงงานผลิตยาเถื่อน ลูกค้าหนีไปเมื่อคุณขอบัตร ID คุณปักธงคนไข้ในฐานข้อมูลรัฐ ป้องกันการกระจายยาในอนาคต ป.ป.ส. ชื่นชมความรอบคอบของคุณ', zh: '✅ 危机得以避免！医生办公室确认病人几个月前已出院。你识别出了一个非法药物团伙。当你索要身份证时，顾客逃跑了。你在州数据库中标记了该病人，防止了未来的转移。缉毒局表扬了你的警惕性。' },
                stats: { competence: 60, ethics: 60, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '💰 The Quick Cash Fill: "Cash is fine. It\'s $400. Here you go." (Avoid confrontation, make the sale, clear the queue).', th: '💰 รับเงินสดด่วน: "เงินสดก็ได้ครับ $400 เรียบร้อยครับ" (เลี่ยงการปะทะ ทำยอดขาย เคลียร์คิว)', zh: '💰 快速现金交易：“现金可以。400美元。给您。”（避免对抗，达成交易，清理排队）。' },
                consequence: { en: '💀 License Revoked! The "patient" was an undercover agent testing pharmacy compliance. You ignored three major red flags. You are fired immediately, reported to the Board of Pharmacy, and face criminal negligence charges. Career over.', th: '💀 ถูกเพิกถอนใบอนุญาต! "คนไข้" คือสายลับที่มาทดสอบความถูกต้องของร้านยา คุณเพิกเฉยต่อสัญญาณอันตรายใหญ่สามอย่าง คุณถูกไล่ออกทันที ถูกรายงานต่อสภาเภสัช และเผชิญข้อหาประมาทเลินเล่อ อาชีพจบเห่', zh: '💀 执照被吊销！那名“病人”是测试药房合规性的卧底探员。你忽视了三个主要危险信号。你立即被解雇，被报告给药房委员会，并面临刑事过失指控。职业生涯结束。' },
                stats: { competence: -20, ethics: -60, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '👮 Silent Alarm & Stall: "We verify stock. Wait a moment." (Trigger silent alarm for police intervention immediately).', th: '👮 กดสัญญาณเงียบและถ่วงเวลา: "เดี๋ยวเช็คสต็อกให้นะครับ รอสักครู่" (กดสัญญาณเงียบเรียกตำรวจทันที)', zh: '👮 无声警报与拖延：“我们核实一下库存。稍等。”（立即触发无声警报请求警察干预）。' },
                consequence: { en: '⚖️ High-Stakes Escalation. Police arrive. The customer gets violent and shoves a technician before being arrested. You stopped the drugs but endangered your staff. The corporate office warns you about "escalating non-violent situations."', th: '⚖️ การยกระดับความเสี่ยงสูง ตำรวจมาถึง ลูกค้าเริ่มก้าวร้าวและผลักผู้ช่วยก่อนถูกจับกุม คุณหยุดยาได้แต่ทำให้พนักงานตกอยู่ในอันตราย สำนักงานใหญ่เตือนคุณเรื่อง "การทำให้สถานการณ์ที่ไม่รุนแรงบานปลาย"', zh: '⚖️ 高风险升级。警察赶到。顾客变得暴力，在被捕前推搡了一名技术员。你拦截了毒品但危及了员工。公司总部警告你不要“激化非暴力局势”。' },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: { en: '🙅 Professional Refusal: "I am not comfortable filling this prescription due to verification issues. I am returning it to you. Please try your local pharmacy."', th: '🙅 ปฏิเสธอย่างมืออาชีพ: "ผมไม่สบายใจที่จะจ่ายยานี้เนื่องจากปัญหาการตรวจสอบ ผมขอคืนใบสั่งยาให้ครับ รบกวนลองไปร้านยาแถวบ้านนะครับ"', zh: '🙅 专业拒绝：“由于核实问题，我无法配这种药。我把它退还给您。请尝试您当地的药房。”' },
                consequence: { en: '✅ Safe & Standard. The customer curses at you and leaves. You didn\'t catch the criminal, but you protected your license and staff safety. You log the incident in the system. A solid, defensive pharmacy move.', th: '✅ ปลอดภัยและได้มาตรฐาน ลูกค้าด่าคุณแล้วเดินออกไป คุณจับคนร้ายไม่ได้แต่คุณปกป้องใบอนุญาตและความปลอดภัยของพนักงาน คุณบันทึกเหตุการณ์ลงระบบ เป็นการเดินหมากที่รัดกุม', zh: '✅ 安全且标准。顾客骂着离开了。你没有抓住罪犯，但你保护了执照和员工安全。你在系统中记录了该事件。扎实的防御性药房举措。' },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 }
            }
        ]
    },

    {
        id: 'ph_002',
        text: {
            en: '💔 The Insurance Heartbreak: A young mother with a sobbing toddler needs a life-saving EpiPen. The insurance claim is rejected: "Prior Authorization Required." The cash price is $600. She has $40 in her wallet and pleads, "He can\'t breathe well, please help me."',
            th: '💔 ความเจ็บปวดเรื่องประกัน: คุณแม่วัยสาวกับลูกวัยเตาะแตะที่กำลังร้องไห้ต้องการ EpiPen เพื่อช่วยชีวิต การเคลมประกันถูกปฏิเสธ: "ต้องการการอนุมัติล่วงหน้า" ราคาเงินสดคือ $600 เธอมีเงิน $40 ในกระเป๋าและร้องขอ "เขาหายใจไม่ออก ช่วยฉันด้วย"',
            zh: '💔 保险心碎时刻：一位年轻母亲带着抽泣的幼儿需要救命的EpiPen。保险理赔被拒：“需要预先授权。”现金价格是600美元。她钱包里只有40美元，她恳求道：“他呼吸困难，请帮帮我。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🎁 Compassionate Override: "Take it. I\'ll figure out the paperwork later or pay it myself." (Give medication immediately without payment).', th: '🎁 การอนุมัติด้วยความเมตตา: "เอาไปเลยครับ เดี๋ยวผมจัดการเอกสารทีหลังหรือไม่ก็จ่ายเอง" (ให้ยาไปเลยโดยไม่รับเงิน)', zh: '🎁 同情覆盖：“拿去吧。我以后再处理文书工作或者自己垫付。”（立即给药而不收钱）。' },
                consequence: { en: '❤️ Heroic Loss. The child stabilizes instantly. You can\'t fix the claim and pay $600 from your paycheck. Your manager writes you up for "giving away inventory," but the mother\'s thank-you card becomes your most prized possession.', th: '❤️ การขาดทุนแบบฮีโร่ เด็กอาการคงที่ทันที คุณแก้การเคลมไม่ได้และต้องจ่าย $600 จากเงินเดือนตัวเอง ผู้จัดการทำทัณฑ์บนคุณฐาน "แจกสินค้าฟรี" แต่การ์ดขอบคุณจากแม่กลายเป็นของล้ำค่าที่สุดของคุณ', zh: '❤️ 英雄式的损失。孩子立刻稳定下来。你无法搞定理赔，从自己工资里付了600美元。经理因为你“赠送库存”记了你的过，但母亲的感谢卡成了你最珍贵的财产。' },
                stats: { competence: 40, ethics: 90, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '💻 The System Hacker: "Give me 15 minutes." (Spend valuable time calling insurance, finding obscure manufacturing coupons, and splitting billing codes).', th: '💻 แฮกเกอร์ระบบ: "ขอเวลา 15 นาทีครับ" (ใช้เวลาอันมีค่าโทรหาประกัน หาคูปองผู้ผลิตที่ซ่อนอยู่ และแยกโค้ดการเรียกเก็บเงิน)', zh: '💻 系统黑客：“给我15分钟。”（花宝贵的时间给保险公司打电话，寻找晦涩的制造商优惠券，并拆分账单代码）。' },
                consequence: { en: '✅ The Miracle Worker. You find a loophole and a coupon that drops the price to $10. The line behind her grows angry at the wait, but you solved the core problem sustainably. You are a wizard of bureaucracy.', th: '✅ ผู้สร้างปาฏิหาริย์ คุณเจอช่องโหว่และคูปองที่ลดราคาเหลือ $10 แถวข้างหลังเริ่มโกรธที่รอนาน แต่คุณแก้ปัญหาหลักได้อย่างยั่งยืน คุณคือพ่อมดแห่งระบบราชการ', zh: '✅ 奇迹创造者。你找到了一个漏洞和一张优惠券，将价格降至10美元。后面的队伍因等待而愤怒，但你可持续地解决了核心问题。你是官僚机构的巫师。' },
                stats: { competence: 80, ethics: 70, leadership: 60, innovation: 70 }
            },
            {
                id: 'C',
                text: { en: '🚑 Call 911: "If he can\'t breathe, this is an emergency. I\'m calling an ambulance. They can treat him immediately." (Deflect to emergency services).', th: '🚑 โทร 911: "ถ้าเขาหายใจไม่ออก นี่คือฉุกเฉินครับ ผมจะโทรเรียกรถพยาบาล พวกเขารักษาได้ทันที" (เบนเข็มไปหาบริการฉุกเฉิน)', zh: '🚑 拨打911：“如果他无法呼吸，这就是紧急情况。我叫救护车。他们可以立即治疗他。”（转向紧急服务）。' },
                consequence: { en: '⚖️ Medically Sound, Financially Brutal. The ambulance arrives and saves the child. However, the mother now faces a $2,000 ambulance bill instead of a $600 pharmacy bill. You followed protocol, but maybe not the "human" spirit.', th: '⚖️ ถูกต้องทางการแพทย์ แต่โหดร้ายทางการเงิน รถพยาบาลมาถึงและช่วยเด็กไว้ อย่างไรก็ตาม แม่ต้องเจอค่ารถพยาบาล $2,000 แทนที่จะเป็นค่ายา $600 คุณทำตามระเบียบ แต่อาจจะไม่ใช่ทาง "มนุษยธรรม" เท่าไหร่', zh: '⚖️ 医学上合理，财务上残酷。救护车赶到并救了孩子。然而，母亲现在面临2000美元的救护车账单，而不是600美元的药费。你遵循了规程，但可能缺乏“人道”精神。' },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 10 }
            },
            {
                id: 'D',
                text: { en: '🚫 "Policy is Policy": "I\'m sorry, without payment or authorization, I cannot release the medication. Try the ER." (Strict adherence to rules).', th: '🚫 "กฎคือกฎ": "ขอโทษครับ ถ้าไม่มีการชำระเงินหรือการอนุมัติ ผมปล่อยยาให้ไม่ได้ ลองไปห้องฉุกเฉินดูลนะครับ" (ยึดตามกฎอย่างเคร่งครัด)', zh: '🚫 “政策就是政策”：“对不起，没有付款或授权，我不能发药。去急诊室吧。”（严格遵守规则）。' },
                consequence: { en: '💀 Moral Failure. The mother leaves sobbing. You hear later on the news a child died on the way to the hospital. You are legally protected, but you will never sleep soundly again. Your soul takes a permanent hit.', th: '💀 ความล้มเหลวทางศีลธรรม แม่เดินร้องไห้ออกไป คุณได้ยินข่าวทีหลังว่าเด็กเสียชีวิตระหว่างทางไปโรงพยาบาล กฎหมายคุ้มครองคุณ แต่คุณจะนอนไม่หลับไปตลอดกาล จิตวิญญาณของคุณบอบช้ำถาวร', zh: '💀 道德败坏。母亲哭泣着离开。后来你在新闻上听到一个孩子在去医院的路上死了。你受法律保护，但你再也睡不安稳了。你的灵魂受到永久性打击。' },
                stats: { competence: 20, ethics: -80, leadership: -20, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_003',
        text: {
            en: '😵 The Near-Miss Nightmare: It\'s 5:30 PM, the pharmacy is chaos. You are doing the final check on a basket for "Mrs. Smith." You glance inside: the bottle is labeled "Atorvastatin" (cholesterol) but the pills inside are clearly "Warfarin" (blood thinner). Your star technician filled this. If Mrs. Smith took this, she could bleed to death internally.',
            th: '😵 ฝันร้ายเฉียดตาย: 17:30 น. ร้านยาวุ่นวายมาก คุณกำลังตรวจตะกร้าสุดท้ายของ "คุณนายสมิธ" คุณเหลือบไปเห็น: ขวดแปะป้าย "Atorvastatin" (ลดไขมัน) แต่ยาข้างในคือ "Warfarin" (ละลายลิ่มเลือด) ชัดๆ มือขวาของคุณเป็นคนจัด ถ้าคุณนายสมิธกินเข้าไป เธออาจเลือดออกภายในจนตาย',
            zh: '😵 险些酿成噩梦：下午5:30，药房一片混乱。你正在对“史密斯夫人”的篮子进行最后检查。你往里瞥了一眼：瓶子上贴着“阿托伐他汀”（胆固醇），但里面的药片显然是“华法林”（血液稀释剂）。你的明星技术员配了这个药。如果史密斯夫人吃了这个，她可能会因内出血而死。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📢 Public Correction: "Stop everything! Who filled this? This is a lethal error! Everyone pay attention!" (Shout to the team to emphasize severity).', th: '📢 แก้ไขกลางวง: "หยุดทุกอย่าง! ใครจัดยานี้? นี่มันผิดพลาดถึงตายนะ! ทุกคนตั้งใจหน่อย!" (ตะโกนบอกทีมเพื่อเน้นความรุนแรง)', zh: '📢 公开纠正：“停下手中的活！这是谁配的？这是致命错误！大家都要注意！”（向团队大喊以强调严重性）。' },
                consequence: { en: '⚠️ Team Moral Crush. You stopped the error, but you humiliated your best technician in front of customers. They go to the bathroom to cry and quit the next week. You created a culture of fear, leading to more hidden errors.', th: '⚠️ ขวัญกำลังใจทีมพังพินาศ คุณหยุดความผิดพลาดได้ แต่คุณฉีกหน้ามือขวาของคุณต่อหน้าลูกค้า เขาไปร้องไห้ในห้องน้ำและลาออกอาทิตย์ถัดมา คุณสร้างวัฒนธรรมแห่งความกลัว นำไปสู่การปกปิดความผิดพลาดมากขึ้น', zh: '⚠️ 团队士气受挫。你阻止了错误，但在顾客面前羞辱了你最好的技术员。他们去洗手间哭并在下周辞职。你制造了恐惧文化，导致更多隐藏错误。' },
                stats: { competence: 50, ethics: 40, leadership: -30, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🤫 Discreet Fix: "Dump the pills, refill it yourself correctly, hand it to the patient. Talk to the tech later privately."', th: '🤫 แก้แบบเงียบๆ: "เทยาทิ้ง จัดใหม่เองให้ถูก ส่งให้คนไข้ ค่อยไปคุยกับผู้ช่วยทีหลังส่วนตัว"', zh: '🤫 悄悄修正：“倒掉药片，自己重新配好，交给病人。稍后私下跟技术员谈。”' },
                consequence: { en: '✅ Smooth Operator. Mrs. Smith is safe and unaware. You have a constructive 1-on-1 with the tech later. They appreciate the discretion and promise to double-check. However, you didn\'t document the "near miss," so system flaws remain hidden.', th: '✅ ผู้จัดการสุดเนียน คุณนายสมิธปลอดภัยและไม่รู้เรื่อง คุณคุยตัวต่อตัวแบบสร้างสรรค์กับผู้ช่วยทีหลัง เขาซึ้งในความรอบคอบและสัญญาจะเช็คสองรอบ แต่คุณไม่ได้บันทึก "เหตุการณ์เกือบพลาด" จุดบอดของระบบเลยยังถูกซ่อนอยู่', zh: '✅ 圆滑操作。史密斯夫人很安全且不知情。稍后你与技术员进行了建设性的一对一谈话。他们感激你的谨慎并承诺加倍检查。然而，你没有记录这次“险些失误”，因此系统缺陷仍然隐藏。' },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '📋 System Overhaul: "Fix the meds. Then, log the error formally. Implement a new rule: \'Look-Alike-Sound-Alike\' drugs must be stored on separate shelves."', th: '📋 ยกเครื่องระบบ: "แก้เรื่องยา แล้วลงบันทึกข้อผิดพลาดอย่างเป็นทางการ ออกกฎใหม่: ยาที่ \'look-alike-sound-alike\' ต้องเก็บแยกชั้นกัน"', zh: '📋 系统检修：“修正药物。然后，正式记录错误。实施新规则：‘听起来像/看起来像’的药物必须分架存放。”' },
                consequence: { en: '🌟 Operational Excellence. You turn a mistake into a safety upgrade. The separate shelving prevents 5 future errors this year. Corporate adopts your layout as a standard. You acted like a leader, not just a checker.', th: '🌟 ความเป็นเลิศในการปฏิบัติงาน คุณเปลี่ยนความผิดพลาดเป็นการยกระดับความปลอดภัย การแยกชั้นเก็บป้องกันความผิดพลาดในอนาคตได้ 5 ครั้งในปีนี้ บริษัทแม่นำแผนผังของคุณไปเป็นมาตรฐาน คุณทำตัวสมเป็นผู้นำ ไม่ใช่แค่คนตรวจงาน', zh: '🌟 卓越运营。你将错误转化为安全升级。分架存放防止了今年的5次未来错误。公司采用了你的布局作为标准。你表现得像个领导者，而不只是个检查员。' },
                stats: { competence: 70, ethics: 70, leadership: 80, innovation: 80 }
            },
            {
                id: 'D',
                text: { en: '😨 The Panic Fill: "Just hand it over. Wait, no! Correct it! My hands are shaking. I need a break." (Freeze under pressure).', th: '😨 ตื่นตระหนก: "ส่งๆ ไปเลย เดี๋ยว! ไม่! แก้ก่อน! มือสั่นไปหมดแล้ว ขอพักก่อน" (ตัวแข็งทื่อภายใต้ความกดดัน)', zh: '😨 恐慌配药：“交给她。等等，不！改过来！我的手在发抖。我需要休息。”（在高压下僵住）。' },
                consequence: { en: '📉 Crisis of Confidence. The patient sees you shaking and muttering. She asks, "Are you sure this is right?" You correct it, but she loses trust and transfers her prescriptions to CVS. You need stress management training.', th: '📉 วิกฤตศรัทธา คนไข้เห็นคุณมือสั่นและพึมพำ เธอถาม "แน่ใจนะว่าถูก?" คุณแก้ให้ถูก แต่เธอหมดความเชื่อถือและย้ายไปรับยาที่ CVS แทน คุณต้องการการฝึกจัดการความเครียดด่วน', zh: '📉 信任危机。病人看到你在发抖并喃喃自语。她问：“你确定这是对的吗？”你纠正了，但她失去了信任，把处方转到了CVS。你需要压力管理培训。' },
                stats: { competence: 10, ethics: 30, leadership: 0, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_004',
        text: {
            en: '🔫 The Silent Note: A young man waiting at the counter hands you a crumpled note instead of a prescription. It reads: "I have a gun. Give me all the Oxy and Xanax in the safe. Do not press the alarm or I start shooting." He looks terrified and twitchy.',
            th: '🔫 จดหมายเงียบ: ชายหนุ่มที่รอหน้าเคาน์เตอร์ยื่นกระดาษยับยู่ยี่ให้คุณแทนใบสั่งยา เขียนว่า: "ผมมีปืน เอา Oxy กับ Xanax ในตู้เซฟมาให้หมด ห้ามกดสัญญาณเลิกไม่งั้นผมยิง" เขาดูหวาดกลัวและกระตุก',
            zh: '🔫 无声纸条：一名在柜台等待的年轻人递给你一张揉皱的纸条而不是处方。上面写着：“我有枪。把保险箱里所有的奥施康定和阿普唑仑给我。别按警报，否则我就开枪。”他看起来很害怕且神经质。'
        },
        options: [
            {
                id: 'A',
                text: { en: '👐 Comply Fully: "Okay. Stay calm. I am getting it now." (Unlock the safe, put drugs in a bag, hand them over).', th: '👐 ยอมทำตามทุกอย่าง: "โอเคครับ ใจเย็นๆ นะ ผมกำลังหยิบให้" (ไขตู้เซฟ เอาใส่ถุง ส่งให้)', zh: '👐 完全服从：“好的。保持冷静。我现在就拿。”（打开保险箱，把毒品放进袋子，递交）。' },
                consequence: { en: '✅ Survivor. He grabs the bag and runs. No one is hurt. Police arrive 10 minutes later to take a report. You lost $500 in inventory, but insurance covers it. Your staff goes home safe to their families.', th: '✅ ผู้รอดชีวิต เขาคว้าถุงแล้ววิ่งหนีไป ไม่มีใครบาดเจ็บ ตำรวจมาถึงใน 10 นาทีเพื่อรับแจ้งความ คุณเสียของไป $500 แต่ประกันจ่าย พนักงานทุกคนกลับบ้านไปหาครอบครัวได้อย่างปลอดภัย', zh: '✅ 幸存者。他抓起袋子跑了。没人受伤。警察10分钟后赶到做笔录。你损失了500美元库存，但保险覆盖。你的员工安全地回家与家人团聚。' },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '👊 The Hero Tackle: "Wait for him to look away, then jump the counter and tackle him!"', th: '👊 ฮีโร่พุ่งชน: "รอจังหวะเขาเผลอ แล้วกระโดดข้ามเคาน์เตอร์ไปชาร์จ!"', zh: '👊 英雄擒拿：“等他转移视线，然后跳过柜台扑倒他！”' },
                consequence: { en: '💀 Fatal Mistake. He reacted faster than you thought. The gun goes off. You take a bullet to the chest. He escapes anyway. You died protecting insured pills. A tragic, avoidable loss.', th: '💀 ความผิดพลาดถึงตาย เขาตอบสนองเร็วกว่าที่คุณคิด ปืนลั่น คุณโดนยิงที่หน้าอก เขาก็หนีไปได้อยู่ดี คุณตายเพื่อปกป้องยาที่มีประกัน การสูญเสียที่น่าเศร้าและหลีกเลี่ยงได้', zh: '💀 致命错误。他的反应比你想的快。枪响了。你胸部中弹。反正他还是逃了。你为了保护投保的药片而死。可悲的、可避免的损失。' },
                stats: { competence: 0, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '📍 The Bait Bottle: "Here is what we have." (include a hidden GPS tracker bottle in the bag).', th: '📍 ขวดนกต่อ: "นี่คือทั้งหมดที่มีครับ" (ใส่ขวดที่ซ่อน GPS ไว้ในถุงด้วย)', zh: '📍 诱饵瓶：“这就是我们所有的。”（在袋子里放一个隐藏的GPS追踪瓶）。' },
                consequence: { en: '🌟 Justice Served. He runs, but police track him to his apartment within 15 minutes. The drugs are recovered. You are hailed as a smart, cool-headed hero in the local paper.', th: '🌟 ความยุติธรรมบังเกิด เขาหนีไป แต่ตำรวจตามสัญญาณไปถึงอพาร์ตเมนต์ใน 15 นาที ได้ยาคืนมา คุณได้รับการยกย่องว่าเป็นฮีโร่ที่ฉลาดและใจเย็นในหนังสือพิมพ์ท้องถิ่น', zh: '🌟 正义得到伸张。他跑了，但警察在15分钟内追踪到了他的公寓。毒品被追回。当地报纸称赞你是聪明、冷静的英雄。' },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 80 }
            },
            {
                id: 'D',
                text: { en: '🗣️ The Negotiator: "I can\'t open the safe, it has a time lock. You have to wait 15 minutes." (Lie to stall for time).', th: '🗣️ นักเจรจา: "ผมเปิดเซฟไม่ได้ครับ มันมีระบบล็อคเวลา คุณต้องรอ 15 นาที" (โกหกเพื่อถ่วงเวลา)', zh: '🗣️ 谈判专家：“我打不开保险箱，它有定时锁。你得等15分钟。”（撒谎拖延时间）。' },
                consequence: { en: '⚠️ Dangerous gamble. He panics and pistol-whips you in frustration before running off empty-handed. You need 12 stitches. You saved the drugs, but at significant personal injury.', th: '⚠️ การพนันที่อันตราย เขาตื่นตระหนกและเอาด้ามปืนตบหน้าคุณด้วยความหงุดหงิดก่อนวิ่งหนีไปมือเปล่า คุณต้องเย็บ 12 เข็ม คุณรักษายาไว้ได้ แต่เจ็บตัวหนัก', zh: '⚠️ 危险的赌博。他恐慌了，沮丧地用手枪柄打了你，然后空手跑了。你缝了12针。你保住了毒品，但受了重伤。' },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 30 }
            }
        ]
    },

    {
        id: 'ph_005',
        text: {
            en: '🤢 The Silent Interaction: A regular patient, Mr. Jones, picks up clarithromycin (antibiotic). You verify his profile. He is also taking simvastatin (cholesterol). The computer flags a "Moderate Interaction." Many pharmacists ignore this suitable-for-most risk, but you know in rare cases it causes rhabdomyolysis (muscle breakdown). It\'s Friday 5 PM.',
            th: '🤢 ปฏิกิริยาเงียบ: ลูกค้าประจำ คุณโจนส์ มารับยา clarithromycin (ยาปฏิชีวนะ) คุณเช็คประวัติ เขาใช้ simvastatin (ลดไขมัน) อยู่ด้วย คอมพิวเตอร์เตือน "ปฏิกิริยาระดับปานกลาง" เภสัชหลายคนเพิกเฉยเพราะความเสี่ยงต่ำ แต่คุณรู้ว่าในเคสหายากมันทำให้กล้ามเนื้อสลายตัว (rhabdomyolysis) ได้ นี่คือวันศุกร์ 5 โมงเย็น',
            zh: '🤢 无声的相互作用：老病人琼斯先生来取克拉霉素（抗生素）。你核实了他的资料。他也在服用辛伐他汀（胆固醇）。电脑标记“中度相互作用”。许多药剂师忽略这种适合大多数人的风险，但你知道在极少数情况下会导致横纹肌溶解（肌肉分解）。现在是周五下午5点。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📞 The Pursuit: "Call the doctor immediately. If no answer, refuse to dispense until confirmed." (Strict clinical safety).', th: '📞 การไล่ล่า: "โทรหาหมอทันที ถ้าไม่รับสาย ไม่จ่ายยาจนกว่าจะยืนยัน" (ความปลอดภัยทางคลินิกแบบเข้มข้น)', zh: '📞 追查：“立即打电话给医生。如果没人接，在确认之前拒绝发药。”（严格的临床安全）。' },
                consequence: { en: '✅ Persistence Pays. Doctor has left, but you reach the on-call physician. They switch the antibiotic to Azithromycin. Mr. Jones is annoyed by the delay but safe. You practiced top-tier pharmacy.', th: '✅ ความพยายามสัมฤทธิ์ผล หมอกลับไปแล้ว แต่คุณติดต่อหมอเวรได้ เขาเปลี่ยนยาเป็น Azithromycin คุณโจนส์รำคาญที่ช้าแต่ปลอดภัย คุณปฏิบัติหน้าที่เภสัชกรระดับท็อป', zh: '✅ 坚持有了回报。医生已经离开了，但你联系上了值班医生。他们把抗生素换成了阿奇霉素。琼斯先生因延误而恼火，但很安全。你实践了顶级药学。' },
                stats: { competence: 70, ethics: 60, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '👨‍🏫 Counsel & Hold: "Explain the risk to Mr. Jones. Tell him to stop taking Simvastatin while on the antibiotic." (Managed care intervention).', th: '👨‍🏫 ปรึกษาและระงับ: "อธิบายความเสี่ยงให้คุณโจนส์ฟัง บอกให้เขาหยุดยา Simvastatin ชั่วคราวระหว่างกินยาปฏิชีวนะ" (การจัดการดูแลแบบแทรกแซง)', zh: '👨‍🏫 咨询与暂停：“向琼斯先生解释风险。告诉他在服用抗生素期间停止服用辛伐他汀。”（管理式医疗干预）。' },
                consequence: { en: '✅ Practical Solution. This is the standard clinical workaround. Mr. Jones creates a plan with you. No need to bother the doctor. Efficient and safe.', th: '✅ ทางออกที่ปฏิบัติได้จริง นี่คือวิธีแก้ปัญหามาตรฐานทางคลินิก คุณโจนส์วางแผนร่วมกับคุณ ไม่ต้องกวนหมอ มีประสิทธิภาพและปลอดภัย', zh: '✅ 实用的解决方案。这是标准的临床变通方法。琼斯先生和你制定了一个计划。不需要打扰医生。高效且安全。' },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '🤷 Ignore & Dispense: "It\'s only a moderate flag. He\'ll probably be fine. Just hand it out." (Complacency).', th: '🤷 เพิกเฉยและจ่ายยา: "แค่เตือนระดับกลางเอง เขาคงไม่เป็นไรหรอก จ่ายๆ ไปเถอะ" (ความชะล่าใจ)', zh: '🤷 忽略并发药：“这只是个中度标记。他可能会没事的。给他就行了。”（自满）。' },
                consequence: { en: '🎲 Russian Roulette. 99% chance he is fine. But if he is the 1%, he ends up with kidney failure. You saved 5 minutes but gambled with a patient\'s organs. Bad habit.', th: '🎲 รัสเชียนรูเล็ต 99% เขาจะสบายดี แต่ถ้าเขาคือ 1% นั้น เขาจะไตวาย คุณประหยัดเวลา 5 นาทีแต่เอาอวัยวะคนไข้มาเดิมพัน นิสัยแย่', zh: '🎲 俄罗斯轮盘赌。99%的几率他没事。但如果他是那1%，他最终会肾衰竭。你省了5分钟，但拿病人的器官赌博。坏习惯。' },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '📜 The Warning Label: "Slap an extra sticker on the bottle about muscle pain. Hope he reads it." (Minimum effort).', th: '📜 ป้ายเตือน: "แปะสติ๊กเกอร์เพิ่มบนขวดเรื่องปวดกล้ามเนื้อ หวังว่าเขาจะอ่านนะ" (ความพยายามขั้นต่ำ)', zh: '📜 警告标签：“在瓶子上多贴一张关于肌肉疼痛的贴纸。希望他能看到。”（最小努力）。' },
                consequence: { en: '⚠️ Passive Care. He doesn\'t read the sticker (nobody does). He feels muscle ache 3 days later but thinks it\'s the flu. He gets lucky and stops meds, but you failed to actively prevent harm.', th: '⚠️ การดูแลแบบเฉื่อยชา เขาไม่อ่านสติ๊กเกอร์ (ไม่มีใครอ่านหรอก) เขาปวดกล้ามเนื้อ 3 วันให้หลังแต่นึกว่าเป็นไข้หวัด เขาโชคดีที่หยุดยาเอง แต่คุณล้มเหลวในการป้องกันอันตรายเชิงรุก', zh: '⚠️ 被动护理。他不看贴纸（没人看）。3天后他感到肌肉酸痛，但以为是流感。他很幸运停了药，但你未能积极防止伤害。' },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 }
            }
        ]
    },


    {
        id: 'ph_006',
        text: {
            en: '👶 The Pediatric Puzzle: A distracted pediatrician prescribes a high dose of Amoxicillin for a 6-month-old baby. The script says "5ml three times daily". You calculate the weight-based dose: it’s triple the safe limit. The baby could get severe diarrhea or worse.',
            th: '👶 ปริศนาขนาดยาเด็ก: กุมารแพทย์ผู้เหม่อลอยสั่งยา Amoxicillin ขนาดสูงให้ทารก 6 เดือน ใบสั่งยาระบุ "5ml วันละ 3 ครั้ง" คุณคำนวณตามน้ำหนักตัว: มันเกินขนาดปลอดภัยไป 3 เท่า เด็กอาจท้องเสียรุนแรงหรือแย่กว่านั้น',
            zh: '👶 儿科难题：一位心不在焉的儿科医生给一个6个月大的婴儿开了高剂量的阿莫西林。处方写着“每次5毫升，每日三次”。你根据体重计算剂量：这是安全限量的三倍。婴儿可能会出现严重腹泻甚至更糟。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📞 Soft Call: "Call the doctor nicely. \'Hey, just double-checking the weight here?\' Allow them to save face."', th: '📞 โทรแบบนุ่มนวล: "โทรหาหมอดีๆ \'สวัสดีครับ แค่อยากเช็คน้ำหนักน้องอีกทีครับ?\' เปิดช่องให้หมอแก้ตัวแบบไม่เสียหน้า"', zh: '📞 温和致电：“客气地给医生打电话。‘嘿，只是复核一下这里的体重？’给他们留面子。”' },
                consequence: { en: '✅ Relationship Builder. The doctor realizes the math error immediately, thanks you profusely, and corrects it. You built trust without being arrogant. The baby is safe.', th: '✅ ผู้สร้างความสัมพันธ์ หมอรู้ตัวว่าคิดเลขผิดทันที ขอบคุณคุณยกใหญ่ และแก้ไขให้ คุณสร้างความเชื่อถือโดยไม่ดูหยิ่ง เด็กปลอดภัย', zh: '✅ 建立关系。医生立即意识到算术错误，连连道谢，并纠正了错误。你在不傲慢的情况下建立了信任。婴儿安全了。' },
                stats: { competence: 70, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🛑 Hard Stop: "Tell the parent: \'The doctor made a dangerous mistake. Do not give this.\' Then fix it yourself."', th: '🛑 เบรกหัวทิ่ม: "บอกผู้ปกครองว่า: \'หมอทำพลาดอย่างอันตราย ห้ามป้อนยานี้นะครับ\' แล้วแก้ขนาดยาเอง"', zh: '🛑 强硬阻止：“告诉家长：‘医生犯了一个危险的错误。不要给孩子吃这个。’然后你自己修正。”' },
                consequence: { en: '⚠️ Bridge Burner. The parent panics and sues the doctor. The doctor bans your pharmacy. You protected the patient but started a local medical war. Professional etiquette score: 0.', th: '⚠️ เผาสะพาน ผู้ปกครองตื่นตระหนกและฟ้องหมอ หมอแบนร้านยาคุณ คุณปกป้องคนไข้แต่ก่อสงครามการแพทย์ในท้องถิ่น คะแนนมารยาทวิชาชีพ: 0', zh: '⚠️ 过河拆桥。家长恐慌并起诉医生。医生抵制你的药房。你保护了病人，但引发了当地的医疗战争。职业礼仪得分：0。' },
                stats: { competence: 60, ethics: 30, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '📉 Under-dose: "Just change it to the safe dose (1.5ml) without calling. Doctors appreciate not being bothered."', th: '📉 ลดขนาดยาเอง: "เปลี่ยนเป็นขนาดปลอดภัย (1.5ml) เลยโดยไม่โทร หมอคงชอบที่ไม่ต้องโดนกวน"', zh: '📉 减少剂量：“直接改成安全剂量（1.5毫升），不用打电话。医生喜欢不被打扰。”' },
                consequence: { en: '💀 Legal Nightmare. You practiced medicine without a license. It turns out the baby has a resistant infection requiring a higher dose (though not THAT high). The baby doesn\'t get better. You are liable.', th: '💀 ฝันร้ายทางกฎหมาย คุณรักษาโรคโดยไม่มีใบอนุญาต ปรากฏว่าเด็กติดเชื้อดื้อยาที่ต้องใช้ยาแรงขึ้น (แต่ไม่แรงขนาดนั้น) เด็กไม่หาย คุณต้องรับผิดชอบ', zh: '💀 法律噩梦。你无证行医。结果婴儿患有需要更高剂量（虽然没那么高）的耐药性感染。婴儿没有好转。你要负责。' },
                stats: { competence: 40, ethics: -20, leadership: -10, innovation: -10 }
            },
            {
                id: 'D',
                text: { en: '🤷 Dispense as Written: "Doctors know best. Maybe it\'s a special protocol." (Blind trust).', th: '🤷 จ่ายตามสั่ง: "หมอรู้ดีที่สุดแหละ อาจจะเป็นสูตรพิเศษก็ได้" (เชื่อแบบหลับหูหลับตา)', zh: '🤷 按方配药：“医生最清楚。也许这是特殊方案。”（盲目信任）。' },
                consequence: { en: '🚑 Baby ER Trip. The baby vomits uncontrollably and dehydrates. The ER doctor flags the overdose. You, the pharmacist, are the last line of defense, and you failed. Negligence lawsuit filed.', th: '🚑 ทริปฉุกเฉินของทารก เด็กอาเจียนไม่หยุดและขาดน้ำ หมอห้องฉุกเฉินระบุว่าได้ยาเกินขนาด คุณคือเภสัชกร ปราการด่านสุดท้าย และคุณพลาด โดนฟ้องข้อหาละเลย', zh: '🚑 婴儿急诊之旅。婴儿无法控制地呕吐并脱水。急诊医生标记药物过量。你，药剂师，是最后一道防线，你失职了。面临过失诉讼。' },
                stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_007',
        text: {
            en: '📉 The Shortage Rage: There is a nationwide shortage of Adderall. A college student needs it for finals next week. He sees you check the computer and yells, "I know you have it in the safe! You\'re just saving it for your friends! Give it to me!" He is causing a scene.',
            th: '📉 วิกฤตยาขาด: Adderall ขาดตลาดทั่วประเทศ นักศึกษามหาวิทยาลัยต้องใช้สอบอาทิตย์หน้า เขาเห็นคุณเช็คคอมฯ แล้วตะโกน "ผมรู้นะว่ามีของในตู้เซฟ! กั๊กไว้ให้พวกพ้องตัวเองล่ะสิ! เอามาให้ผมเดี๋ยวนี้!" เขาเริ่มอาละวาด',
            zh: '📉 短缺之怒：阿德拉全国性短缺。一名大学生下周考试急需用药。他看到你查电脑，大喊：“我知道保险箱里有！你只是留给你的朋友！给我！”他在制造骚乱。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤥 The White Lie: "We really don\'t have any. The computer count is wrong." (Lie to de-escalate, even if you have 3 pills left).', th: '🤥 คำโกหกสีขาว: "เราไม่มีจริงๆ ครับ ตัวเลขในคอมฯ มันผิด" (โกหกเพื่อลดความรุนแรง แม้จะเหลือ 3 เม็ด)', zh: '🤥 善意的谎言：“我们真的没有了。电脑计数是错的。”（撒谎以平息事态，即使你还剩3片）。' },
                consequence: { en: '✅ Situation Diffused. He grumbles and leaves. It wasn\'t honest, but it protected staff from a potential meltdown. Sometimes peace is worth a small fib.', th: '✅ สถานการณ์คลี่คลาย เขาบ่นอุบแล้วเดินออกไป มันไม่ซื่อสัตย์หรอก แต่ช่วยป้องกันพนักงานจากคนบ้าคลั่ง บางครั้งความสงบก็คุ้มค่าที่จะโกหกเล็กน้อย', zh: '✅ 局势得到了缓解。他发着牢骚离开了。这不诚实，但保护了员工免受潜在崩溃的影响。有时和平值得撒个小谎。' },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🧘 Empathy and Truth: "I understand you are stressed about finals. It is frustrating. We truly have zero stock nationwide. I can call your doctor for an alternative."', th: '🧘 เห็นใจและพูดความจริง: "ผมเข้าใจครับว่าเครียดเรื่องสอบ มันน่าหงุดหงิดจริงๆ แต่ของขาดทั่วประเทศเลยครับ ผมโทรหาหมอเปลี่ยนตัวยาให้ได้นะ"', zh: '🧘 同理心与真诚：“我理解你为考试感到压力。这很令人沮丧。此时全国真的都没有库存。我可以打电话给你的医生寻求替代方案。”' },
                consequence: { en: '🌟 De-escalation Master. Your calm tone validates his feelings. He calms down and apologizes. You find a therapeutic alternative with his doctor. Excellent soft skills.', th: '🌟 ปรมาจารย์ด้านการลดโว น้ำเสียงที่ใจเย็นช่วยให้เขารู้สึกว่ามีคนเข้าใจ เขาใจเย็นลงและขอโทษ คุณหายาตัวอื่นทดแทนกับหมอให้ ทักษะ Soft skill ยอดเยี่ยม', zh: '🌟 降级大师。你冷静的语气证实了他的感受。他平静下来并道歉。你和他的医生找到了治疗替代方案。出色的人际软技能。' },
                stats: { competence: 80, ethics: 80, leadership: 70, innovation: 50 }
            },
            {
                id: 'C',
                text: { en: '👮 Kick Him Out: "Sir, if you yell again, I am banning you from the store. Security!" (Zero tolerance).', th: '👮 ไล่ออกไป: "คุณครับ ถ้าตะโกนอีกผมจะแบนคุณจากร้านนะ รปภ.!" (ไม่ยอมความ)', zh: '👮 把他赶出去：“先生，如果你再大喊大叫，我就禁止你进入本店。保安！”（零容忍）。' },
                consequence: { en: '⚖️ Order Restored, Customer Lost. He leaves in a huff and writes a 1-star Yelp review accusing you of discrimination. You kept the store peaceful but lost a patient forever.', th: '⚖️ คืนความสงบ แต่เสียลูกค้า เขาเดินกระแทกส้นออกไปและเขียนรีวิว 1 ดาวใน Yelp หาว่าคุณเลือกปฏิบัติ คุณรักษาร้านให้สงบได้ แต่เสียลูกค้าไปตลอดกาล', zh: '⚖️ 秩序恢复，顾客流失。他气冲冲地离开，并在Yelp上写了一星评论指责你歧视。你保持了店铺的宁静，但永远失去了一位病人。' },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '😠 Match Aggression: "Don\'t shout at me! I don\'t make the drugs! Get out!"', th: '😠 ตาต่อตาฟันต่อฟัน: "อย่ามาตะคอกใส่ผมนะ! ผมไม่ได้ผลิตยาเอง! ออกไป!"', zh: '😠 以暴制暴：“别对我大喊大叫！药又不是我造的！滚出去！”' },
                consequence: { en: '⚠️ Unprofessional Meltdown. Other customers look uncomfortable. The student records you on TikTok. You go viral as "Angry Pharmacist." Corporate calls you the next day.', th: '⚠️ สติแตกอย่างไม่เป็นมืออาชีพ ลูกค้าคนอื่นอึดอัด นักศึกษาถ่ายคลิปคุณลง TikTok คุณดังเป็นไวรัลในชื่อ "เภสัชขี้โมโห" สำนักงานใหญ่โทรหาคุณวันรุ่งขึ้น', zh: '⚠️ 不专业的崩溃。其他顾客看起来很不舒服。那个学生在TikTok上录下了你的视频。你作为“愤怒的药剂师”走红。公司第二天给你打电话。' },
                stats: { competence: 20, ethics: 10, leadership: -40, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_008',
        text: {
            en: '💊 The "Doctor is God": Dr. House (arrogant specialist) prescribes Methotrexate ' + "'daily'" + ' for rheumatoid arthritis. It should be WEEKLY. Daily dosing is often fatal. When you call, he snaps: "I\'ve been a doctor for 30 years, just fill it!"',
            th: '💊 "หมอคือพระเจ้า": ดร.เฮาส์ (ผู้เชี่ยวชาญจอมหยิ่ง) สั่ง Methotrexate "ทุกวัน" สำหรับโรคไขข้ออักเสบ จริงๆ ต้องกิน "ทุกสัปดาห์" การกินทุกวันมักถึงตาย พอคุณโทรไป เขาตะคอก: "ฉันเป็นหมอมา 30 ปีแล้ว จ่ายๆ ไปเถอะ!"',
            zh: '💊 “医生就是上帝”：豪斯医生（傲慢的专家）给类风湿性关节炎开了甲氨蝶呤，“每日一次”。这应该是“每周一次”。每日服用通常是致命的。当你打电话时，他厉声说道：“我当了30年医生了，给药就是了！”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🧱 The Regulatory Wall: "I cannot legally fill a lethal dose, Doctor. I am documenting your refusal to change it. If you want it daily, fax me a confirmation stating you take full liability for toxicity." (Hardball).', th: '🧱 กำแพงกฎระเบียบ: "ผมจ่ายยาขนาดถึงตายผิดกฎหมายไม่ได้ครับหมอ ผมจะบันทึกว่าหมอปฏิเสธที่จะแก้ไข ถ้าหมอจะเอาแบบรายวันจริงๆ แฟกซ์ใบยืนยันการรับผิดชอบต่อความเป็นพิษมาให้ผมด้วย" (ไม้แข็ง)', zh: '🧱 监管之墙：“医生，我在法律上不能配致死剂量。我正在记录你拒绝更改的情况。如果你想要每日服用，请传真一份确认书给我，声明你对毒性承担全部责任。”（强硬手段）。' },
                consequence: { en: '🏆 Patient Saved. The mention of "liability" snaps him out of it. He pauses, checks his chart, and grumbles, "Fine, make it weekly." You stood your ground against a giant and won.', th: '🏆 ช่วยคนไข้ได้ พอได้ยินคำว่า "รับผิดชอบ" เขาก็ชะงัก หยุดเช็คชาร์ต แล้วบ่นอุบ "เออๆ งั้นเอาเป็นรายสัปดาห์" คุณยืนหยัดต่อสู้กับยักษ์ใหญ่และชนะ', zh: '🏆 病人获救。提到“责任”让他清醒了。他停顿了一下，检查了他的病历，嘟囔道：“好吧，改成每周一次。”你对抗巨人并赢了。' },
                stats: { competence: 90, ethics: 80, leadership: 80, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🙅 Refuse and Refer: "I won\'t fill this. Patient will have to go elsewhere." (Wash your hands of it).', th: '🙅 ปฏิเสธและส่งต่อ: "ผมไม่จ่ายให้ครับ คนไข้ต้องไปร้านอื่น" (ล้างมือจากเรื่องนี้)', zh: '🙅 拒绝并转诊：“我不会配这个。病人得去别处。”（洗手不干）。' },
                consequence: { en: '💀 Passed the Buck. The patient goes to a less experienced pharmacist down the street who fills it. The patient dies of bone marrow suppression 2 weeks later. You are clear legally, but ethically?', th: '💀 โยนขี้ คนไข้ไปร้านยาท้ายซอยที่เภสัชประสบการณ์น้อยกว่าซึ่งยอมจ่ายยา คนไข้ตายจากไขกระดูกฝ่อ 2 อาทิตย์ต่อมา คุณรอดทางกฎหมาย แต่ทางจริยธรรมล่ะ?', zh: '💀 推卸责任。病人去了街那头经验不足的药剂师那里，那人给配了药。病人两周后死于骨髓抑制。你在法律上是清白的，但在道德上呢？' },
                stats: { competence: 40, ethics: -10, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '😰 Submissive Fill: "Okay doctor, sorry to bother you." (Fill as daily).', th: '😰 ยอมจำนน: "ครับหมอ ขอโทษที่รบกวนครับ" (จ่ายแบบรายวัน)', zh: '😰 顺从配药：“好的医生，抱歉打扰您。”（按每日配药）。' },
                consequence: { en: '☠️ Manslaughter. The patient dies. Investigating board sees you knew it was wrong (you called!) but filled it anyway. You are stripped of your license and likely go to prison.', th: '☠️ ฆ่าคนตายโดยไม่เจตนา คนไข้เสียชีวิต กรรมการสอบสวนเห็นว่าคุณรู้อยู่แล้วว่าผิด (คุณโทรไปแล้ว!) แต่ก็ยังจ่าย คุณโดนยึดใบอนุญาตและน่าจะได้ไปนอนคุก', zh: '☠️ 过失杀人。病人死亡。调查委员会发现你知道这是错的（你打了电话！）但还是配了药。你被吊销执照，很可能进监狱。' },
                stats: { competence: -100, ethics: -100, leadership: -100, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_009',
        text: {
            en: '💉 The Vaccine Faint: You give a flu shot to a burly construction worker. He says "I\'m fine," stands up, takes two steps, and passes out cold, hitting his head on the waiting room floor. He is bleeding and seizing.',
            th: '💉 เป็นลมหลังฉีด: คุณฉีดวัคซีนไข้หวัดใหญ่ให้คนงานก่อสร้างร่างบึก เขาบอก "ผมไหว" ลุกขึ้น เดินสองก้าว แล้วร่วงผล็อย หัวฟาดพื้นห้องรอเลือดอาบและเริ่มชัก',
            zh: '💉 疫苗晕厥：你给一个结实的建筑工人打了流感疫苗。他说“我没事”，站起来，走了两步，然后晕倒了，头撞在候诊室的地板上。他在流血并抽搐。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚑 Code Blue Protocol: "Call 911! Clear the area! Protect his head!" (Time the seizure, check airway, apply first aid).', th: '🚑 โปรโตคอล Code Blue: "โทร 911! เคลียร์พื้นที่! กันกระแทกที่หัว!" (จับเวลาการชัก เช็คทางเดินหายใจ ปฐมพยาบาล)', zh: '🚑 蓝色代码协议：“打911！清理区域！保护他的头部！”（给癫痫发作计时，检查气道，进行急救）。' },
                consequence: { en: '✅ Textbook Response. Paramedics arrive. He had a vasovagal syncope concussed. Because you protected his airway and head, he recovers fully. You review "waiting peroids" policy to prevent recurrence.', th: '✅ การตอบสนองตามตำรา แพทย์ฉุกเฉินมาถึงเข้าเป็นลมจากภาวะ vasovagal และสมองกระทบกระเทือน เพราะคุณดูแลทางเดินหายใจและศีรษะ เขาฟื้นตัวเต็มที่ คุณทบทวนนโยบาย "นั่งพักดูอาการ" เพื่อป้องกันการเกิดซ้ำ', zh: '✅ 教科书式的反应。这护人员赶到。他是迷走神经性晕厥脑震荡。因为你保护了他的气道和头部，他完全康复了。你审查了“等待期”政策以防止复发。' },
                stats: { competence: 80, ethics: 60, leadership: 70, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '💧 Water and Wait: "Throw water on his face! Wake him up!" (Outdated, dangerous amateur move).', th: '💧 สาดน้ำแล้วรอ: "เอาน้ำสาดหน้าเลย! ปลุกให้ตื่น!" (วิธีบ้านๆ ที่ล้าสมัยและอันตราย)', zh: '💧 泼水等待：“往他脸上泼水！弄醒他！”（过时的、危险的业余举动）。' },
                consequence: { en: '⚠️ Choking Hazard. He inhales the water while seizing, leading to aspiration pneumonia. You turned a simple faint into a complex ICU stay. First aid certification expired?', th: '⚠️ อันตรายสำลักน้ำ เขาสำลักน้ำตอนชัก ทำให้ปอดอักเสบจากการสำลัก คุณเปลี่ยนเรื่องเป็นลมธรรมดาให้กลายเป็นเคส ICU ซับซ้อน ใบรับรองปฐมพยาบาลหมดอายุรึยัง?', zh: '⚠️ 窒息危险。他在抽搐时吸入了水，导致吸入性肺炎。你把简单的晕厥变成了复杂的ICU住院。急救证书过期了？' },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🏃 Run Away: "I\'m not a doctor! Someone help him!" (Panic and abandonment).', th: '🏃 วิ่งหนี: "ฉันไม่ใช่หมอนะ! ใครก็ได้ช่วยที!" (ตื่นตระหนกและทอดทิ้ง)', zh: '🏃 逃跑：“我不是医生！谁来帮帮他！”（恐慌并遗弃）。' },
                consequence: { en: '💀 Dereliction of Duty. Customers react, but your licensing board views this as abandonment of a patient under your care. Highly shameful.', th: '💀 ละเลยหน้าที่ ลูกค้าคนอื่นเข้ามาช่วย แต่สภาเภสัชมองว่านี่คือการทอดทิ้งคนไข้ในความดูแล น่าอับอายมาก', zh: '💀 玩忽职守。顾客反应过来了，但你的执照委员会认为这是遗弃你照顾下的病人。非常可耻。' },
                stats: { competence: 0, ethics: -50, leadership: -50, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_010',
        text: {
            en: '🤐 The Neighborhood Gossip: You are at the grocery store. Your neighbor asks, "I saw Bob at your pharmacy yesterday. Is his cancer back? He looked terrible."',
            th: '🤐 เพื่อนบ้านขี้นินทา: คุณอยู่ที่ร้านขายของชำ เพื่อนบ้านถาม "เมื่อวานฉันเห็นบ็อบที่ร้านเธอ มะเร็งเขากลับมาเหรอ? เขาดูแย่มากเลย"',
            zh: '🤐 邻里八卦：你在杂货店。你的邻居问：“我昨天在你的药房看到鲍勃了。他的癌症复发了吗？他看起来糟透了。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤐 The Stone Wall: "I cannot discuss any patients or who visits the pharmacy. How is your dog doing?" (Strict HIPAA pivot).', th: '🤐 กำแพงหิน: "ผมพูดเรื่องคนไข้หรือใครมาร้านยาไม่ได้ครับ หมาคุณเป็นไงบ้าง?" (เลี่ยงด้วย HIPAA แบบเคร่งครัด)', zh: '🤐 铜墙铁壁：“我不能讨论任何病人或谁去了药房。你的狗怎么样？”（严格的HIPAA转移话题）。' },
                consequence: { en: '✅ Trust Secured. The neighbor pouts, but Bob\'s privacy is safe. You maintained professional boundaries perfectly outside of work.', th: '✅ รักษาความเชื่อใจ เพื่อนบ้านหน้ามุ่ย แต่ความเป็นส่วนตัวของบ็อบปลอดภัย คุณรักษาระยะห่างทางวิชาชีพนอกเวลางานได้อย่างสมบูรณ์แบบ', zh: '✅ 信任得以保全。邻居虽然撇嘴，但鲍勃的隐私是安全的。你在工作之外完美地保持了职业界限。' },
                stats: { competence: 50, ethics: 90, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🗣️ The Slip: "Yeah, it\'s sad. He\'s on a lot of strong meds." (Casual violation).', th: '🗣️ หลุดปาก: "ใช่ครับ น่าเศร้า เขาต้องกินยาแรงๆ เยอะเลย" (ละเมิดแบบไม่ตั้งใจ)', zh: '🗣️ 说漏嘴：“是啊，很惨。他在吃很多强效药。”（随意的违规）。' },
                consequence: { en: '⚖️ HIPAA Nightmare. The neighbor tells Bob\'s wife "The pharmacist said Bob is dying." Bob sues the pharmacy for privacy violation. Fines start at $50,000.', th: '⚖️ ฝันร้าย HIPAA เพื่อนบ้านไปบอกเมียบ็อบ "เภสัชบอกว่าบ็อบใกล้ตาย" บ็อบฟ้องร้านยาฐานละเมิดความเป็นส่วนตัว ค่าปรับเริ่มที่ $50,000', zh: '⚖️ HIPAA噩梦。邻居告诉鲍勃的妻子“药剂师说鲍勃快死了。”鲍勃起诉药房侵犯隐私。罚款5万美元起步。' },
                stats: { competence: 30, ethics: -60, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🤥 Active Denial: "Bob? I haven\'t seen Bob in months." (Lie to protect privacy).', th: '🤥 ปฏิเสธเสียงแข็ง: "บ็อบเหรอ? ผมไม่เจอบ็อบมาหลายเดือนแล้วนะ" (โกหกเพื่อปกป้อง)', zh: '🤥 主动否认：“鲍勃？我好几个月没见鲍勃了。”（撒谎以保护隐私）。' },
                consequence: { en: '⚠️ Risky Strategy. If the neighbor SAW him, she knows you are lying. It protects privacy, but makes you look untrustworthy. Better to just refuse to answer.', th: '⚠️ กลยุทธ์เสี่ยง ถ้าเพื่อนบ้าน "เห็น" เขาจริงๆ เธอก็รู้ว่าคุณโกหก มันปกป้องความเป็นส่วนตัวก็จริง แต่ทำให้คุณดูไม่น่าเชื่อถือ ปฏิเสธที่จะตอบไปเลยดีกว่า', zh: '⚠️ 冒险的策略。如果邻居看到了他，她就知道你在撒谎。这保护了隐私，但让你看起来不值得信任。最好直接拒绝回答。' },
                stats: { competence: 40, ethics: 50, leadership: 20, innovation: 10 }
            }
        ]
    },


    {
        id: 'ph_011',
        text: {
            en: '🕵️ Internal Affairs: You catch your lead technician, who is a single mom, slipping a bottle of Xanax into her purse. She cries and begs: "I can\'t afford to see a doctor for my anxiety. I\'ll pay for them. Please don\'t fire me, my kids need me."',
            th: '🕵️ เรื่องภายใน: คุณจับได้ว่าผู้ช่วยมือหนึ่งของคุณที่เป็นแม่เลี้ยงเดี่ยว แอบเอาขวด Xanax ใส่กระเป๋า เธอนั่งร้องไห้และอ้อนวอน: "ฉันไม่มีเงินไปหาหมอรักษาวิตกกังวล ฉันจะจ่ายค่ายาให้ ได้โปรดอย่าไล่ฉันออก ลูกๆ ต้องการฉัน"',
            zh: '🕵️ 内部事务：你抓到你的首席技术员——一位单身母亲，正把一瓶阿普唑仑塞进她的钱包。她哭着乞求：“我没钱看医生治焦虑症。我会付药费的。请别解雇我，我的孩子需要我。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🔨 Zero Tolerance: "I am sorry. Theft of controlled substances is a felony. I have to call the police and the Board." (Immediate termination).', th: '🔨 ไม่ยอมความ: "ผมเสียใจนะ แต่การขโมยวัตถุออกฤทธิ์เป็นคดีอาญา ผมต้องเรียกตำรวจและแจ้งสภาฯ" (ไล่ออกทันที)', zh: '🔨 零容忍：“对不起。盗窃受控物质是重罪。我必须报警并通知委员会。”（立即解雇）。' },
                consequence: { en: '⚖️ Hard Justice. She is arrested in front of the team. It is heartbreaking, but you protected the pharmacy\'s license. The vibe in the pharmacy is grim for months.', th: '⚖️ ความยุติธรรมที่แข็งกร้าว เธอถูกจับต่อหน้าทีม มันน่าสะเทือนใจ แต่คุณรักษาใบอนุญาตของร้านไว้ได้ บรรยากาศในร้านอึมครึมไปหลายเดือน', zh: '⚖️ 严厉的正义。她在团队面前被捕。这令人心碎，但你保护了药房的执照。药房的气氛几个月都很严峻。' },
                stats: { competence: 60, ethics: 60, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤝 The Second Chance: "Put it back. Go home. Take a week off to see a doctor. If you ever do this again, you are done." (Unofficial probation).', th: '🤝 โอกาสที่สอง: "เอากลับไปวางที่เดิม กลับบ้านไป หยุดงานอาทิตย์นึงไปหาหมอซะ ถ้าทำอีกคุณจบแน่" (ทัณฑ์บนแบบไม่ออกสื่อ)', zh: '🤝 第二次机会：“放回去。回家吧。请一周假去看医生。如果你再这样做，你就完了。”（非正式缓刑）。' },
                consequence: { en: '⚠️ Dangerous Mercy. She gets help and becomes loyal. BUT, if the inventory count is audited, YOU are liable for the missing pills. You are risking your career for her.', th: '⚠️ ความเมตตาที่อันตราย เธอไปรักษาและซื่อสัตย์ต่อคุณ แต่ถ้ามีการตรวจสอบสต็อก คุณนั่นแหละต้องรับผิดชอบยาที่หายไป คุณกำลังเอาอาชีพตัวเองไปเสี่ยงเพื่อเธอ', zh: '⚠️ 危险的仁慈。她得到了帮助并变得忠诚。但是，如果库存审计，你需要对丢失的药片负责。你在拿你的职业生涯为她冒险。' },
                stats: { competence: 20, ethics: 40, leadership: 50, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💼 The Resignation Deal: "I won\'t call the police if you resign immediately and never work in pharmacy again." (Quiet dismissal).', th: '💼 ข้อเสนอลาออก: "ผมจะไม่เรียกตำรวจถ้าคุณลาออกตอนนี้และไม่ทำงานสายร้านยาอีกตลอดชีวิต" (ไล่ออกแบบเงียบๆ)', zh: '💼 辞职协议：“如果你立即辞职并且再也不在药房工作，我就不报警。”（悄悄解雇）。' },
                consequence: { en: '✅ Clean Break. She leaves voluntarily. No police record for her, no drama for the store. A compassionate but firm middle ground.', th: '✅ จบสวย เธอลาออกโดยสมัครใจ ไม่มีประวัติตำรวจ ร้านไม่มีดราม่า เป็นทางสายกลางที่เมตตาแต่เด็ดขาด', zh: '✅ 干脆利落。她自愿离开。她没有犯罪记录，因为店里没有闹剧。一个富有同情心但坚定的中间立场。' },
                stats: { competence: 50, ethics: 70, leadership: 60, innovation: 20 }
            }
        ]
    },

    {
        id: 'ph_012',
        text: {
            en: '🌿 The "Safe" Natural Remedy: Mrs. Higgins buys St. John\'s Wort for "winter blues." You know she takes Warfarin (blood thinner) and Cyclosporine (anti-rejection for transplant). St. John\'s Wort induces enzymes that flush these drugs out, risking organ rejection and clots.',
            th: '🌿 ยาธรรมชาติที่ "ปลอดภัย": คุณนายฮิ กกินส์ซื้อสมุนไพร St. John\'s Wort แก้ "ซึมเศร้าหน้าหนาว" คุณรู้ว่าเธอกิน Warfarin (ยาละลายลิ่มเลือด) และ Cyclosporine (ยากันการต่อต้านการปลูกถ่าย) St. John\'s Wort กระตุ้นเอนไซม์ที่ขับยาพวกนี้ออก เสี่ยงต่อการปฏิเสธอวัยวะและลิ่มเลือดอุดตัน',
            zh: '🌿 “安全”的天然疗法：希金斯太太买圣约翰草治“冬季抑郁”。你知道她在服用华法林（血液稀释剂）和环孢素（移植抗排斥药）。圣约翰草诱导酶排出这些药物，有器官排斥和血栓的风险。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 The Register Block: "I cannot sell you this. It will essentially neutralize your transplant meds. It is dangerous." (Refuse sale).', th: '🛑 บล็อกที่แคชเชียร์: "ผมขายให้ไม่ได้ครับ มันจะไปล้างฤทธิ์ยากันการต่อต้านของคุณหมด อันตรายมากครับ" (ปฏิเสธการขาย)', zh: '🛑 收银台拦截：“我不能卖给您这个。它基本上会中和您的移植药物。这很危险。”（拒绝出售）。' },
                consequence: { en: '✅ Crisis Prevented. She is shocked but grateful. "Nobody told me herbs act like pulling the plug on my meds!" You saved her kidney.', th: '✅ ป้องกันวิกฤต เธอตกใจแต่ซึ้งใจ "ไม่มีใครบอกฉันเลยว่าสมุนไพรทำฤทธิ์เหมือนถอดปลั๊กยาฉัน!" คุณรักษาไตของเธอไว้ได้', zh: '✅ 危机得以预防。她很震惊但很感激。“没人告诉我草药的作用就像拔掉了我的药引子！”你救了她的肾。' },
                stats: { competence: 80, ethics: 60, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🤷 "It\'s Natural": "Just be careful and maybe ask your doctor." (Sell it anyway).', th: '🤷 "มันมาจากธรรมชาติ": "ระวังหน่อยนะครับ ลองถามหมอดูนะ" (ขายไปเถอะ)', zh: '🤷 “这是天然的”：“只要小心点，也许问问你的医生。”（照样卖）。' },
                consequence: { en: '💀 Organ Rejection. She takes it. Her body rejects the kidney 3 weeks later. She ends up back on dialysis. A tragic failure of interaction monitoring.', th: '💀 ร่างกายต่อต้านอวัยวะ เธอกินเข้าไป ร่างกายเธอต่อต้านไตใหม่ใน 3 อาทิตย์ต่อมา เธอต้องกลับไปฟอกไต ล้มเหลวอย่างน่าเศร้าในการตรวจสอบปฏิกิริยายา', zh: '💀 器官排斥。她吃了。她的身体在3周后排斥了肾脏。她最后又要透析。相互作用监测的悲惨失败。' },
                stats: { competence: -60, ethics: -40, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💡 Alternative Suggestion: "St. John\'s Wort is risky for you. Have you tried Light Therapy or Vitamin D for winter blues? They are safe with your meds."', th: '💡 เสนอทางเลือก: "St. John\'s Wort เสี่ยงไปครับ ลองบำบัดด้วยแสงหรือกินวิตามิน D แก้เศร้าดีไหมครับ? ปลอดภัยกับยาที่กินอยู่"', zh: '💡 替代建议：“圣约翰草对你有风险。你试过光疗或维生素D治疗冬季抑郁吗？它们与你的药物一起使用是安全的。”' },
                consequence: { en: '🌟 Holistic Hero. You denied the sale but provided a solution. She buys Vitamin D instead. You solved the patient\'s problem, not just the drug problem.', th: '🌟 ฮีโร่แบบองค์รวม คุณไม่ขายให้แต่ให้ทางออก เธอซื้อวิตามิน D แทน คุณแก้ปัญหาที่คนไข้ ไม่ใช่แค่ปัญหาเรื่องยา', zh: '🌟 整体英雄。你拒绝了出售但他提供了一个解决方案。她买了维生素D代替。你解决了病人的问题，而不仅仅是药物问题。' },
                stats: { competence: 90, ethics: 80, leadership: 60, innovation: 70 }
            }
        ]
    },

    {
        id: 'ph_013',
        text: {
            en: '🌀 Hurricane Protocol: A Category 4 hurricane is hitting tomorrow. A patient needs his insulin, but insurance says "Refill too soon" (he has a 5-day supply, but evacuation might last weeks). He cannot afford the $800 cash price.',
            th: '🌀 โปรโตคอลพายุ: พายุระดับ 4 จะเข้าพรุ่งนี้ คนไข้ต้องการอินซูลิน แต่ประกันแจ้ง "เร็วเกินกำหนด" (เขามียาเหลือ 5 วัน แต่การอพยพอาจนานหลายสัปดาห์) เขาไม่มีเงินจ่ายสด $800',
            zh: '🌀 飓风协议：四级飓风明天来袭。一名病人需要胰岛素，但保险显示“过早续药”（他有5天的药量，但疏散可能持续数周）。他付不起800美元的现金。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚑 Emergency Override: "I am using the \'Submission Clarification Code 13\' (Disaster/Emergency). The system should force it through."', th: '🚑 การอนุมัติฉุกเฉิน: "ผมจะใช้ \'รหัสชี้แจง 13\' (ภัยพิบัติ/ฉุกเฉิน) ระบบน่าจะบังคับผ่านให้"', zh: '🚑 紧急覆盖：“我正在使用‘提交澄清代码13’（灾难/紧急情况）。系统应该会强制通过。”' },
                consequence: { en: '✅ Tech Wizard. You know your billing codes! The claim goes through as "Paid." He gets his insulin for $0 copay. He leaves ready to evacuate safely.', th: '✅ พ่อมดเทคนิค คุณรู้รหัสเคลม! การเคลมผ่านเป็น "จ่ายแล้ว" เขาได้อินซูลินฟรี เขาจากไปพร้อมอพยพอย่างปลอดภัย', zh: '✅ 技术巫师。你懂账单代码！索赔通过显示“已付”。他以0自付额拿到了胰岛素。他准备好安全撤离了。' },
                stats: { competence: 90, ethics: 80, leadership: 60, innovation: 60 }
            },
            {
                id: 'B',
                text: { en: '🤝 The Loan: "I\'ll give you one box now as a loan. Pay me back when you can or bring it back if unused."', th: '🤝 ให้ยืม: "ผมให้ยืมไปก่อนกล่องนึง มีเมื่อไหร่ค่อยมาจ่าย หรือถ้าไม่ได้ใช้ก็เอามาคืน"', zh: '🤝 借贷：“我现在借给你一盒。有钱了再还我，或者如果没用就拿回来。”' },
                consequence: { en: '❤️ Risky Kindness. The store might lose money, but he survives. It\'s against corporate policy, but morally sound.', th: '❤️ ความใจดีที่เสี่ยง ร้านอาจเสียเงิน แต่เขารอดชีวิต ผิดกฎบริษัทแต่ถูกต้องทางศีลธรรม', zh: '❤️ 冒险的善意。商店可能会亏钱，但他活了下来。这违反了公司政策，但在道德上是正确的。' },
                stats: { competence: 40, ethics: 90, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '🤷 "Hands Tied": "Sorry, insurance denied it. Try a hospital shelter." (Bureaucratic failure).', th: '🤷 "จนปัญญา": "ขอโทษครับ ประกันปฏิเสธ ลองไปศูนย์พักพิงที่โรงพยาบาลดูนะ" (ความล้มเหลวของระบบราชการ)', zh: '🤷 “无能为力”：“抱歉，保险拒赔。去医院避难所试试吧。”（官僚主义的失败）。' },
                consequence: { en: '📉 Public Health Failure. Hospital shelters are overflowing. He rations his insulin, goes into bacterial ketoacidosis, and is hospitalized during the storm.', th: '📉 ความล้มเหลวทางสาธารณสุข ศูนย์พักพิงเต็ม เขาต้องประหยัดอินซูลินจนเกิดภาวะเลือดเป็นกรดและต้องเข้าโรงพยาบาลระหว่างพายุ', zh: '📉 公共卫生失败。医院避难所爆满。他配给使用胰岛素，导致细菌性酮症酸中毒，在暴风雨期间住院。' },
                stats: { competence: 30, ethics: -20, leadership: -10, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_014',
        text: {
            en: '⏱️ The Metric Squeeze: Your District Manager is screaming: "Your wait times are 20 minutes! Get them under 10 minutes or I write you up!" To go faster, you would have to skip the "Drug Utilization Review" screen (checking for interactions) on every script.',
            th: '⏱️ บีบยอด: ผู้จัดการเขตตะคอก: "เวลารอคอย 20 นาทีแล้ว! ทำให้เหลือต่ำกว่า 10 นาทีเดี๋ยวนี้ไม่งั้นฉันทำทัณฑ์บนแน่!" ถ้าจะให้เร็วขนาดนั้น คุณต้องข้ามหน้าจอ "Drug Utilization Review" (เช็คปฏิกิริยายา) ทุกเคส',
            zh: '⏱️ 指标挤压：你的区域经理在咆哮：“你的等待时间是20分钟！把它降到10分钟以下，否则我就记你的过！”为了加快速度，你必须在每张处方上跳过“药物利用审查”屏幕（检查相互作用）。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Safety First: "I cannot skip safety checks. If you write me up, I will attach a rebuttal stating I refused to endanger patients for metrics." (Defiant professional).', th: '🛑 ความปลอดภัยต้องมาก่อน: "ผมข้ามขั้นตอนความปลอดภัยไม่ได้ครับ ถ้าคุณทำทัณฑ์บน ผมจะยื่นคำโต้แย้งแนบไปว่าผมปฏิเสธที่จะทำให้คนไข้เสี่ยงเพื่อแลกกับตัวเลข" (มืออาชีพผู้ท้าทาย)', zh: '🛑 安全第一：“我不能跳过安全检查。如果你记我的过，我会附上一份反驳声明，声明我拒绝为了指标而危及病人。”（挑衅的专业人士）。' },
                consequence: { en: '🛡️ Shield of Integrity. The DM backs off, fearing an HR or Board complaint. You keep your slow but safe pace. You don\'t get a bonus, but you sleep well.', th: '🛡️ โล่แห่งความซื่อสัตย์ ผจก.เขต ถอยฉาก กลัวเรื่องถึง HR หรือสภาฯ คุณรักษาจังหวะช้าแต่ชัวร์ต่อไป ไม่ได้โบนัส แต่นอนหลับสบาย', zh: '🛡️ 正直之盾。区域经理退缩了，害怕人力资源部或董事会的投诉。你保持缓慢但安全的节奏。你拿不到奖金，但你睡得安稳。' },
                stats: { competence: 70, ethics: 80, leadership: 60, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🏎️ Speed Demon: "Fine! Override everything! Fast mode engaged!" (Compliance with bad orders).', th: '🏎️ ปีศาจความเร็ว: "ได้! กดข้ามแม่มให้หมด! โหมดความเร็วแสงทำงาน!" (ทำตามคำสั่งห่วยๆ)', zh: '🏎️ 速度恶魔：“行！覆盖所有内容！快速模式启动！”（服从糟糕的命令）。' },
                consequence: { en: '🎲 Risk Explosion. You hit the metric and verify 400 scripts. But you miss a penicillin allergy that sends a kid to the ER. Was saving 10 minutes worth a lawsuit?', th: '🎲 ระเบิดเวลา คุณทำยอดได้และตรวจสอบ 400 เคส แต่คุณหลุดเคสแพ้เพนิซิลลินจนเด็กต้องเข้า ER ประหยัดเวลา 10 นาทีคุ้มกับการโดนฟ้องไหม?', zh: '🎲 风险爆炸。你达到了指标并核实了400张处方。但你漏掉了一个青霉素过敏，把孩子送进了急诊室。为了省10分钟值得惹官司吗？' },
                stats: { competence: 40, ethics: -40, leadership: -30, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '🤖 Tech Optimization: "We are slow because the typing station is a bottleneck. I\'m moving a technician there specifically." (Fix the workflow, not the safety).', th: '🤖 ปรับปรุงเทคนิค: "เราช้าเพราะขั้นตอนพิมพ์ยามันคอขวดครับ ผมจะย้ายผู้ช่วยไปประจำตรงนั้นโดยเฉพาะ" (แก้ที่กระบวนการ ไม่ใช่ลดความปลอดภัย)', zh: '🤖 技术优化：“我们慢是因为打字站是瓶颈。我专门调一个技术员去那里。”（修复工作流程，而不是牺牲安全）。' },
                consequence: { en: '🌟 Management Gold. You diagnosed the operational issue successfully. Times drop to 12 minutes safely. The DM is impressed by your problem-solving.', th: '🌟 ผู้บริหารทองคำ คุณวินิจฉัยปัญหาการปฏิบัติงานได้สำเร็จ เวลดลดเหลือ 12 นาทีอย่างปลอดภัย ผจก.เขต ประทับใจการแก้ปัญหาของคุณ', zh: '🌟 管理金点子。你成功诊断了运营问题。时间安全地降至12分钟。区域经理对你的解决问题能力印象深刻。' },
                stats: { competence: 80, ethics: 60, leadership: 80, innovation: 80 }
            }
        ]
    },

    {
        id: 'ph_015',
        text: {
            en: '🎭 The Perfect Forgery: You receive a prescription for "Promethazine/Codeine Syrup" (Purple Drank). The paper looks perfect. The DEA number checks out. The doctor exists. But the signature looks... slightly too practiced. A "spidey sense" tingles.',
            th: '🎭 ของปลอมเกรดเอ: คุณได้รับใบสั่งยา "Promethazine/Codeine Syrup" (Purple Drank) กระดาษดูเหมือนของจริงเป๊ะ เลข DEA ตรง หมอมีตัวตนจริง แต่ลายเซ็นดู... คล่องเกินไปนิดๆ "สัญชาตญาณ" มันเตือน',
            zh: '🎭 完美的伪造品：你收到一张“异丙嗪/可待因糖浆”（紫水）的处方。纸张看起来很完美。缉毒局号码核对无误。医生确实存在。但签名看起来……稍微有点太熟练了。“蜘蛛感应”在刺痛。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🕵️ The Callback: "I need to confirm the diagnosis with the office." (Call doctor).', th: '🕵️ โทรเช็ค: "ผมขอเช็คการวินิจฉัยกับที่คลินิกหน่อยครับ" (โทรหาหมอ)', zh: '🕵️ 回访：“我需要跟诊所确认诊断。”（打电话给医生）。' },
                consequence: { en: '✅ Caught Red-Handed. The receptionist says, "Dr. Smith is on vacation in Hawaii this week. He isn\'t writing scripts." The forger runs when you pick up the phone.', th: '✅ จับได้คาหนังคาเขา พนักงานต้อนรับบอก "หมอสมิธไปฮาวายอาทิตย์นี้นะคะ ไม่ได้สั่งยา" คนปลอมลายเซ็นวิ่งหนีทันทีที่คุณยกหู', zh: '✅以此当场抓获。接待员说：“史密斯医生这周在夏威夷度假。他没开处方。”当你拿起电话时，伪造者跑了。' },
                stats: { competence: 70, ethics: 60, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '💸 Fill It: "Everything checks out technically. Not my job to be CSI." (Willful ignorance).', th: '💸 จ่ายๆ ไป: "ทางเทคนิคทุกอย่างเป๊ะ ไม่ใช่หน้าที่ผมต้องมาเป็น CSI" (แกล้งโง่)', zh: '💸 配药：“技术上一切都核对无误。当CSI不是我的工作。”（故意无视）。' },
                consequence: { en: '⚠️ Diversion Enabled. You just supplied the local street trade. Word gets out you are "easy." Next week, five more "perfect" scripts appear. You are now a target.', th: '⚠️ สนับสนุนการกระจายยา คุณเพิ่งส่งเสบียงให้ตลาดมืดแถวบ้าน ข่าวลือกระจายว่าร้านคุณ "ง่าย" อาทิตย์หน้า ใบสั่งยา "เป๊ะๆ" จะโผล่มาอีก 5 ใบ ตอนนี้คุณตกเป็นเป้าแล้ว', zh: '⚠️ 助长转移。你刚刚供应了当地的街头交易。消息传出你很“好说话”。下周，又有五张“完美”的处方出现。你现在成了目标。' },
                stats: { competence: 30, ethics: -40, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🧪 The Test: "Ask the patient: \'What cough symptoms are you having?\' Watch their reaction."', th: '🧪 บททดสอบ: "ถามคนไข้: \'มีอาการไอยังไงบ้างครับ?\' แล้วดูปฏิกิริยา"', zh: '🧪 测试：“问病人：‘你有什么咳嗽症状？’观察他们的反应。”' },
                consequence: { en: '✅ Behavioral Assessment. He stammers, "Uhh, dry cough?" but he isn\'t coughing. He looks nervous. You refuse based on "clinical judgment." Safer effective refusal.', th: '✅ การประเมินพฤติกรรม เขาอึกอัก "เอ่อ ไอแห้ง?" แต่เขาไม่ได้ไอ เขาดูประหม่า คุณปฏิเสธโดยอ้าง "วิจารณญาณทางคลินิก" เป็นการปฏิเสธที่ปลอดภัยและได้ผล', zh: '✅ 行为评估。他结结巴巴地说：“呃，干咳？”但他没咳嗽。他看起来很紧张。你基于“临床判断”拒绝了。更安全有效的拒绝。' },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 30 }
            }
        ]
    },


    {
        id: 'ph_016',
        text: {
            en: '🧪 The Math Mistake: You are compounding a custom cream for a baby. You are tired. You weigh 10 grams of active powder instead of 1.0 grams. You realize it just as you are about to mix it into the base. It would have been a 10x overdose.',
            th: '🧪 ความผิดพลาดทางคณิตศาสตร์: คุณกำลังปรุงยาครีมสูตรเฉพาะให้ทารก คุณเหนื่อยมาก คุณชั่งผงยา 10 กรัม แทนที่จะเป็น 1.0 กรัม คุณรู้ตัวตอนกำลังจะผสมลงในครีมเบสพอดี ถ้าผสมไปมันจะเป็นยาเกินขนาด 10 เท่า',
            zh: '🧪 数学错误：你正在为婴儿配制一种定制药膏。你很累。你称了10克活性粉末而不是1.0克。就在你要把它混入基质时，你意识到了这一点。这将是10倍的过量。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🗑️ Trash and Restart: "Throw it all away immediately. Wash the mortar. Start over fresh. No shortcuts." (Safe reset).', th: '🗑️ ทิ้งแล้วเริ่มใหม่: "เททิ้งให้หมดเดี๋ยวนี้ ล้างโกร่งยา เริ่มใหม่หมด ห้ามลัดขั้นตอน" (รีเซ็ตเพื่อความปลอดภัย)', zh: '🗑️ 扔掉重来：“立即全部扔掉。清洗研钵。重新开始。不走捷径。”（安全重置）。' },
                consequence: { en: '✅ Crisis Averted. You wasted $20 of powder, but saved a baby\'s life. You take a coffee break to wake up before continuing. Good self-regulation.', th: '✅ ป้องกันวิกฤต คุณเสียผงยาไป $20 แต่ช่วยชีวิตเด็กไว้ คุณพักดื่มกาแฟให้ตาสว่างก่อนทำต่อ เป็นการควบคุมตัวเองที่ดี', zh: '✅ 危机得以避免。你浪费了20美元的粉末，但救了婴儿一命。你喝杯咖啡提神后再继续。良好的自我调节。' },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '💧 Dilute It: "I\'ll just add 10 times more base cream. Then it will be the right concentration." (Risky math correction).', th: '💧 เจือจางเอา: "งั้นเติมครีมเบสไปอีก 10 เท่า ความเข้มข้นก็น่าจะถูกแล้วนี่" (การแก้เลขที่เสี่ยง)', zh: '💧 稀释：“我就再加10倍的基质霜。那样浓度就对了。”（冒险的数学修正）。' },
                consequence: { en: '⚠️ Quality Control Fail. Do you have a mixer big enough for 10x volume? Is the mixing uniform? You end up with "hot spots" of concentrated drug. The baby gets burns. Negligence.', th: '⚠️ ควบคุมคุณภาพล้มเหลว คุณมีเครื่องปั่นใหญ่พอใส่ครีม 10 เท่าไหม? ปั่นทั่วถึงรึเปล่า? สุดท้ายยาจะไม่สม่ำเสมอเป็นหย่อมๆ เด็กผิวไหม้ ประมาท', zh: '⚠️ 质量控制失败。你有足以为10倍体积混合的搅拌机吗？混合均匀吗？最终你会得到集中药物的“热点”。婴儿被灼伤。疏忽。' },
                stats: { competence: 20, ethics: 30, leadership: -10, innovation: -10 }
            },
            {
                id: 'C',
                text: { en: '🤷 Scoop Out: "Just scoop out 90% of the powder. Close enough." (Lazy and dangerous).', th: '🤷 ตักออก: "ตักผงออก 90% ก็พอ ใกล้เคียงแหละ" (ขี้เกียจและอันตราย)', zh: '🤷 舀出来：“把90%的粉末舀出来就行了。差不多了。”（懒惰且危险）。' },
                consequence: { en: '☠️ Wildly Inaccurate. You can\'t eyeball milligrams. The dose ends up being 3x or 0.5x. Unpredictable therapy. You should lose your compounding license.', th: '☠️ มั่วซั่วมาก คุณกะปริมาณมิลลิกรัมด้วยสายตาไม่ได้หรอก ยาอาจจะเกิน 3 เท่าหรือขาดเหลือครึ่งเดียว การรักษาคาดเดาไม่ได้ คุณควรโดนยึดใบอนุญาตปรุงยา', zh: '☠️ 极不准确。你不能用肉眼估算毫克。剂量最终可能是3倍或0.5倍。不可预测的治疗。你应该失去你的配药执照。' },
                stats: { competence: -50, ethics: -60, leadership: -30, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_017',
        text: {
            en: '🤢 The Creepy Customer: An older male customer is making explicit sexual comments to your young female pharmacy intern. She looks terrified but is too polite to say anything. He asks for her phone number "to discuss his Viagra."',
            th: '🤢 ลูกค้าจอมหื่น: ลูกค้าชายสูงวัยกำลังพูดจาลามกใส่เด็กฝึกงานเภสัชหญิงของคุณ เธอดูหวาดกลัวแต่เกรงใจเกินกว่าจะพูดอะไร เขาขอเบอร์เธอ "เพื่อปรึกษาเรื่องไวอากร้า"',
            zh: '🤢 猥琐顾客：一位年长的男性顾客正在对你年轻的女性药房实习生发表露骨的性评论。她看起来很害怕，但太客气了，不敢说什么。他要她的电话号码“讨论他的伟哥”。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛡️ The Interceptor: "Sir! Stop right there. That behavior is harassment and is not tolerated here. I will help you from now on. Jane, go take a break." (Protect and Serve).', th: '🛡️ ผู้สกัดกั้น: "คุณครับ! หยุดเดี๋ยวนี้ พฤติกรรมนี้เป็นการคุกคามและเราไม่ยอมรับนะครับ จากนี้ผมจะดูแลคุณเอง เจน ไปพักก่อนไป" (ปกป้องและดูแล)', zh: '🛡️ 拦截者：“先生！停下。那种行为是骚扰，这里不容忍。从现在开始我来为您服务。简，去休息一下。”（保护和服务）。' },
                consequence: { en: '✅ Leadership Moment. You drew a hard line. The intern feels safe and protected. The customer is embarrassed and shuts up. You set the standard for respect.', th: '✅ ภาวะผู้นำ คุณขีดเส้นตาย น้องฝึกงานรู้สึกปลอดภัย ลูกค้าหน้าแตกและหุบปาก คุณสร้างมาตรฐานแห่งความเคารพ', zh: '✅ 领导时刻。你划清了界限。实习生感到安全和受保护。顾客很尴尬，闭嘴了。你树立了尊重的标准。' },
                stats: { competence: 50, ethics: 80, leadership: 90, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '👀 Ignore It: "He\'s just a harmless old man. Dealing with weirdos is part of the job, Jane." (Gaslighting).', th: '👀 ทำเมิน: "แกก็แค่คนแก่ไม่มีพิษภัย รับมือคนแปลกๆ ก็เป็นส่วนหนึ่งของงานนะเจน" (Gaslighting)', zh: '👀 无视：“他只是个无害的老头。和怪人打交道是工作的一部分，简。”（煤气灯效应）。' },
                consequence: { en: '⚠️ Moral Fail. Jane quits the profession entirely because she feels unsafe. You allowed a hostile work environment. "Part of the job" should not mean abuse.', th: '⚠️ จริยธรรมสอบตก เจนลาออกจากวงการไปเลยเพราะรู้สึกไม่ปลอดภัย คุณปล่อยให้ที่ทำงานเป็นพิษ "ส่วนหนึ่งของงาน" ไม่ควรหมายถึงการถูกคุกคาม', zh: '⚠️ 道德败坏。简因为感到不安全而彻底退出了这个行业。你允许了敌对的工作环境。“工作的一部分”不应意味着虐待。' },
                stats: { competence: 30, ethics: -40, leadership: -50, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '😂 Laugh it Off: "Haha, you are popular today Jane!" (Joking to diffuse tension).', th: '😂 หัวเราะกลบเกลื่อน: "ฮ่าๆ วันนี้หนูเนื้อหอมนะเจน!" (ตลกฝืดลดความตึงเครียด)', zh: '😂 一笑置之：“哈哈，简，你今天很受欢迎啊！”（开玩笑缓解紧张）。' },
                consequence: { en: '🤮 Disgusting. You just validated the harasser. Jane loses all respect for you and sees you as an accomplice. The customer escalates his behavior next time.', th: '🤮 น่ารังเกียจ คุณเพิ่งให้ท้ายคนคุกคาม เจนหมดศรัทธาในตัวคุณและมองว่าคุณเป็นผู้สมรู้ร่วมคิด คราวหน้าลูกค้าจะทำหนักกว่าเดิม', zh: '🤮 恶心。你刚刚认可了骚扰者。简对你失去了一切尊重，并将你视为帮凶。顾客下次会变本加厉。' },
                stats: { competence: 20, ethics: -60, leadership: -60, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_018',
        text: {
            en: '🤝 The Friend Discount: Your best friend comes in. He is buying $200 worth of vitamins and supplements. "Come on, hook me up with your employee discount. I know the code. Nobody will know."',
            th: '🤝 ส่วนลดเพื่อนซี้: เพื่อนสนิทของคุณเข้ามาซื้อวิตามินและอาหารเสริมราคา $200 "เอาน่า ของส่วนลดพนักงานให้หน่อย ฉันรู้นะว่านายมีโค้ด ไม่มีใครรู้หรอก"',
            zh: '🤝 朋友折扣：你最好的朋友进来了。他要买价值200美元的维生素和补充剂。“拜托，给我用用你的员工折扣。我知道代码。没人会知道的。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '⚖️ Integrity Move: "I can\'t do that, man. It\'s theft. I can find you some coupons though." (Honest refusal).', th: '⚖️ ความซื่อสัตย์: "ทำไม่ได้ว่ะเพื่อน มันคือขโมยของ เดี๋ยวฉันหาคูปองลดราคาให้แทนละกัน" (ปฏิเสธอย่างซื่อสัตย์)', zh: '⚖️ 正直之举：“我不行，伙计。那是偷窃。不过我可以帮你找些优惠券。”（诚实拒绝）。' },
                consequence: { en: '✅ Respect. He complains but pays. You kept your job. A true friend wouldn\'t ask you to risk your income for $30.', th: '✅ ความเคารพ เขาบ่นแต่ก็จ่าย คุณรักษางานไว้ได้ เพื่อนแท้จะไม่ขอให้คุณเสี่ยงตกงานเพื่อแลกกับเงิน $30 หรอก', zh: '✅ 尊重。他虽然抱怨但还是付了钱。你保住了工作。真正的朋友不会让你为了30美元拿收入冒险。' },
                stats: { competence: 50, ethics: 70, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '💸 Apply Code: "Fine, just this once. Keep it quiet." (Discount applied - 20% off).', th: '💸 ใส่โค้ด: "เออๆ ครั้งเดียวพอนะ เงียบไว้ล่ะ" (ลดให้ 20%)', zh: '💸 应用代码：“好吧，就这一次。别声张。”（应用折扣 - 20%）。' },
                consequence: { en: '⚠️ Slippery Slope. He comes back next week. Then implies he will tell others if you don\'t do it again. Loss prevention software tracks employee discount usage. You are flagged.', th: '⚠️ ทางลาดชัน อาทิตย์หน้าเขากลับมาอีก แล้วขู่กลายๆ ว่าจะบอกคนอื่นถ้าไม่ลดให้อีก ซอฟต์แวร์กันขโมยจับตามองการใช้ส่วนลดพนักงาน คุณโดนหมายหัวแล้ว', zh: '⚠️ 滑坡效应。下周他又来了。然后暗示如果你不这样做他就告诉别人。防损软件追踪员工折扣的使用。你被标记了。' },
                stats: { competence: 30, ethics: -30, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🎁 Pay for Him: "I can\'t use the code, but I\'ll pay for half as a gift." (Personal generosity).', th: '🎁 จ่ายให้: "ฉันใช้โค้ดให้ไม่ได้ แต่เดี๋ยวออกให้ครึ่งนึงถือเป็นของขวัญ" (ใจป๋า)', zh: '🎁 为他买单：“我不能用代码，但我付一半作为礼物。”（个人慷慨）。' },
                consequence: { en: '✅ Safe and Kind. You valued the friendship and the rules. It cost you money, but your conscience is clear.', th: '✅ ปลอดภัยและใจดี คุณให้ค่ามิตรภาพและกฎระเบียบ เสียเงินหน่อย แต่สบายใจ', zh: '✅ 安全且友善。你重视友谊和规则。这花了你的钱，但你问心无愧。' },
                stats: { competence: 40, ethics: 80, leadership: 30, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_019',
        text: {
            en: '👵 Nursing Home Crisis: A local nursing home admits a patient at 6 PM on Friday. They fax 15 prescriptions. They need them "packaged in blister packs" immediately. Packaging takes 2 hours. Your shift ends in 10 minutes.',
            th: '👵 วิกฤตบ้านพักคนชรา: บ้านพักคนชราแถวนี้รับคนไข้ใหม่ตอน 6 โมงเย็นวันศุกร์ ส่งแฟกซ์ใบสั่งยามา 15 ใบ เขาต้องการ "แพ็คใส่แผงตุ่ม" (blister packs) เดี๋ยวนี้ การแพ็คใช้เวลา 2 ชั่วโมง กะคุณจะหมดใน 10 นาที',
            zh: '👵 疗养院危机：当地一家疗养院周五下午6点接收了一名病人。他们传真了15张处方。他们需要立即“用泡罩包装”。包装需要2小时。你在10分钟后下班。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💪 Stay and Grind: "I\'ll stay late and do it. Patients come first." (Self-sacrifice).', th: '💪 อยู่ลุยต่อ: "เดี๋ยวผมอยู่ทำต่อเอง คนไข้ต้องมาก่อน" (เสียสละ)', zh: '💪 留下来苦干：“我会加班做完。病人至上。”（自我牺牲）。' },
                consequence: { en: '✅ Heroic Service. You leave at 9 PM. The nursing home loves you. BUT, you are exhausted for your Saturday shift. Burnout is creeping in closer.', th: '✅ บริการระดับฮีโร่ คุณกลับ 3 ทุ่ม บ้านพักคนชรารักคุณตาย แต่คุณหมดแรงสำหรับกะวันเสาร์ อาการหมดไฟเริ่มคืบคลานเข้ามา', zh: '✅ 英雄服务。你晚上9点离开。疗养院很喜欢你。但是，周六的班把你累坏了。职业倦怠正在悄然逼近。' },
                stats: { competence: 70, ethics: 70, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '📦 Loose Pills Compromise: "I can send bottles tonight so he has meds, and we will package them properly on Monday. Is that okay?" (Negotiation).', th: '📦 ประนีประนอมแบบขวด: "คืนนี้ผมส่งเป็นขวดไปให้ก่อนคนไข้จะได้มียากิน แล้ววันจันทร์ค่อยแพ็คใส่แผงให้ โอเคไหมครับ?" (เจรจาต่อรอง)', zh: '📦 散装药片妥协方案：“我可以今晚送瓶装药去，这样他就有药了，周一我们会把它们包装好。行吗？”（谈判）。' },
                consequence: { en: '🌟 Operational Win. They usually say yes. The patient gets meds. You go home on time. This is smart workload management.', th: '🌟 ชัยชนะในการทำงาน ปกติเขาก็ยอมแหละ คนไข้ได้ยา คุณกลับบ้านตรงเวลา นี่คือการบริหารงานที่ชาญฉลาด', zh: '🌟 运营胜利。他们通常会同意。病人拿到了药。你准时回家。这是聪明的工作量管理。' },
                stats: { competence: 80, ethics: 60, leadership: 70, innovation: 60 }
            },
            {
                id: 'C',
                text: { en: '🙅 Refuse Service: "Cut-off time for packaging is 4 PM. We can\'t do it." (Strict Policy).', th: '🙅 ปฏิเสธบริการ: "หมดเวลาส่งแพ็คยาตอน 4 โมงครับ เราทำให้ไม่ได้" (กฎเข้ม)', zh: '🙅 拒绝服务：“包装的截止时间是下午4点。我们做不了。”（严格的政策）。' },
                consequence: { en: '⚠️ Care Delay. The patient might miss doses. The nursing home complains to your manager about your "inflexibility." You followed the rules but failed the human test.', th: '⚠️ การดูแลล่าช้า คนไข้รอาจขาดยา บ้านพักคนชราร้องเรียนผู้จัดการเรื่องความ "ไร้น้ำใจ" ของคุณ คุณทำตามกฎแต่สอบตกความเป็นมนุษย์', zh: '⚠️ 护理延误。病人可能会漏服药物。疗养院向你的经理抱怨你“不灵活”。你遵守了规则，但没通过人性测试。' },
                stats: { competence: 40, ethics: 30, leadership: 10, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_020',
        text: {
            en: '💉 The Flu Shot Quota: Corporate commands: "Every pharmacist must give 50 flu shots this week or lose their bonus." It is late April. Flu season is basically over. Customers are annoyed by your constant asking.',
            th: '💉 โควตาวัคซีน: บริษัทสั่ง: "เภสัชทุกคนต้องฉีดวัคซีนไข้หวัดใหญ่ 50 เข็มอาทิตย์นี้ไม่งั้นอดโบนัส" นี่มันปลายพฤษภาฯ หน้าไข้หวัดหมดไปแล้ว ลูกค้ารำคาญที่คุณถามเซ้าซี้',
            zh: '💉 流感疫苗配额：公司命令：“每个药剂师本周必须打50针流感疫苗，否则对此失去奖金。”现在是四月下旬。流感季节基本结束了。顾客对你不断的询问感到恼火。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🧟 Zombie Salesman: "Ask everyone. \'Do you want a shot? Do you want a shot?\' Pester them until they agree." (Blind compliance).', th: '🧟 เซลส์แมนซอมบี้: "ถามทุกคน \'ฉีดวัคซีนไหมคะ? ฉีดวัคซีนไหมครับ?\' ตื้อจนกว่าจะยอม"', zh: '🧟 僵尸推销员：“问每个人。‘你想打针吗？你想打针吗？’纠缠他们直到他们同意。”（盲目服从）。' },
                consequence: { en: '📉 Reputation Damage. You get 50 shots, but regulars start avoiding eye contact. You feel like a used car salesman, not a healthcare provider. Soul-sucking work.', th: '📉 ชื่อเสียงป่นปี้ คุณทำยอดได้ 50 เข็มก็จริง แต่ลูกค้าประจำเริ่มหลบตา คุณรู้สึกเหมือนคนขายรถมือสอง ไม่ใช่บุคลากรทางการแพทย์ งานสูบวิญญาณ', zh: '📉 声誉受损。你打了50针，但常客开始避免眼神接触。你觉得自己像个二手车推销员，而不是医疗保健提供者。吸干灵魂的工作。' },
                stats: { competence: 40, ethics: 30, leadership: -20, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '⚖️ Ethical Refusal: "I will offer it to high-risk patients only. I won\'t push unnecessary medical procedures for profit." (Ethical stance).', th: '⚖️ ปฏิเสธแบบมีจริยธรรม: "ผมจะเสนอให้กลุ่มเสี่ยงเท่านั้น ผมจะไม่ยัดเยียดหัตถการทางการแพทย์ที่ไม่จำเป็นเพื่อเอากำไร" (จุดยืนทางจริยธรรม)', zh: '⚖️ 道德拒绝：“我只会向高危病人提供。我不会为了利润推销不必要的医疗程序。”（道德立场）。' },
                consequence: { en: '🛡️ Integrity Protected. You miss the bonus. Regional manager yells at you. But you know you didn\'t treat patients like cattle. Your staff respects you more.', th: '🛡️ ปกป้องความซื่อสัตย์ อดโบนัส ผจก.ภาค ด่าเปิง แต่คุณรู้ว่าคุณไม่ได้เห็นคนไข้เป็นวัวควาย ลูกน้องเคารพคุณมากขึ้น', zh: '🛡️ 正直受保护。你错过了奖金。区域经理对你大吼大叫。但你知道你没有像对待牲畜一样对待病人。你的员工更尊重你了。' },
                stats: { competence: 60, ethics: 90, leadership: 60, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💡 Creative Campaign: "Market it as \'Travel Protection\' for people going on summer trips to the Southern Hemisphere (where it is winter)." (Smart reframing).', th: '💡 แคมเปญสร้างสรรค์: "ขายว่าเป็น \'เกราะป้องกันนักเดินทาง\' สำหรับคนที่จะไปเที่ยวซีกโลกใต้ช่วงซัมเมอร์ (ที่นั่นเป็นหน้าหนาว)" (พลิกแพลงอย่างฉลาด)', zh: '💡 创意活动：“把它作为‘旅行保护’向去南半球（那里是冬天）夏季旅行的人推销。”（聪明的重构）。' },
                consequence: { en: '🌟 Innovation Win. You hit the target honestly by finding the right audience! Corporate shares your strategy as a "Best Practice." You win the game.', th: '🌟 ชัยชนะแห่งนวัตกรรม คุณทำยอดได้แบบใสสะอาดโดยหากลุ่มเป้าหมายที่ใช่! บริษัทแชร์กลยุทธ์คุณเป็น "Best Practice" คุณชนะเกมนี้', zh: '🌟 创新胜利。你通过找到合适的受众诚实地达到了目标！公司将你的策略作为“最佳实践”分享。你赢了这场游戏。' },
                stats: { competence: 80, ethics: 70, leadership: 80, innovation: 90 }
            }
        ]
    },


    {
        id: 'ph_021',
        text: {
            en: '🍺 The Intoxicated Pickup: A patient comes to pick up Vicodin (opioid) and muscle relaxants. He smells strongly of alcohol, is slurring his words, and stumbles into the counter. The interaction between alcohol and these meds can stop breathing.',
            th: '🍺 มารับยาตอนเมา: คนไข้มารับ Vicodin (โอปิออยด์) และยาคลายกล้ามเนื้อ เขามีกลิ่นเหล้าหึ่ง พูดลิ้นพันกัน และเดินเซชนเคาน์เตอร์ ปฏิกิริยาระหว่างแอลกอฮอล์กับยาพวกนี้อาจทำให้หยุดหายใจได้',
            zh: '🍺 醉酒取药：一名病人来取维柯丁（阿片类药物）和肌肉松弛剂。他身上有强烈的酒味，说话含糊不清，踉踉跄跄地撞到柜台上。酒精和这些药物的相互作用会导致呼吸停止。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Refuse for Safety: "Sir, I cannot give you these while you are under the influence. It is deadly. Please come back tomorrow." (Hard no).', th: '🛑 ปฏิเสธเพื่อความปลอดภัย: "คุณครับ ผมจ่ายยาให้ไม่ได้ตอนที่คุณเมาอยู่นะครับ มันอันตรายถึงตาย พรุ่งนี้ค่อยมาใหม่นะครับ" (ปฏิเสธแข็งขัน)', zh: '🛑 为了安全拒绝：“先生，您在受影响期间我不能给您这些药。这是致命的。请明天再来。”（坚决拒绝）。' },
                consequence: { en: '✅ Life Saved. He gets angry and yells, but stumbles out. If he had taken them tonight, he likely would have aspirated vomit and died. You made the tough call.', th: '✅ ช่วยชีวิตไว้ได้ เขาโกรธและตะโกนด่า แต่ก็เดินเซออกไป ถ้าเขากินคืนนี้ เขาคงสำลักอาเจียนและตายไปแล้ว คุณตัดสินใจได้เด็ดขาด', zh: '✅ 挽救了生命。他生气大喊，但跌跌撞撞地走了。如果他今晚吃了药，很可能会吸入呕吐物而死。你做出了艰难的决定。' },
                stats: { competence: 70, ethics: 80, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤷 Warn and Dispense: "Make sure you don\'t take these tonight, okay? Promise me?" (Wishful thinking).', th: '🤷 เตือนแล้วจ่าย: "ห้ามกินคืนนี้นะครับ โอเคไหม? สัญญานะ?" (โลกสวย)', zh: '🤷 警告并发药：“确保今晚别吃这些，好吗？向我保证？”（一厢情愿）。' },
                consequence: { en: '☠️ Fatal Combination. He forgets your warning 5 minutes later, pops the pills, and dies in his sleep. His family sues. "You gave pills to a drunk man?" Indefensible.', th: '☠️ ส่วนผสมมรณะ 5 นาทีต่อมาเขาก็ลืมคำเตือนคุณ กินยาเข้าไป และไหลตาย ครอบครัวฟ้องคุณ "คุณจ่ายยาให้คนเมาเนี่ยนะ?" แก้ตัวไม่ขึ้นเลย', zh: '☠️ 致命组合。5分钟后虽然他忘了你的警告，吞下药片，并在睡眠中死亡。他的家人起诉。“你给醉汉配药？”无法辩护。' },
                stats: { competence: -50, ethics: -60, leadership: -40, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '📞 Call a Ride: "I will hold the meds for tomorrow, but let me call you an Uber. You shouldn\'t be driving." (Holistic care).', th: '📞 เรียกรถให้: "ผมเก็บยาไว้ให้พรุ่งนี้นะครับ แต่เดี๋ยวผมเรียก Uber ให้ คุณไม่ควรขับรถ" (ดูแลแบบองค์รวม)', zh: '📞 叫车：“我也把药留到明天，但我给你叫一辆优步。你不应该开车。”（整体护理）。' },
                consequence: { en: '🌟 Community Hero. You not only prevented overdose but also a DUI/accident. Steps beyond the counter like this build immense community respect.', th: '🌟 ฮีโร่ชุมชน คุณไม่เพียงป้องกันยาเกินขนาดแต่ยังกันเมาแล้วขับ/อุบัติเหตุด้วย การก้าวออกมาดูแลนอกเคาน์เตอร์แบบนี้สร้างความศรัทธาในชุมชนได้มหาศาล', zh: '🌟 社区英雄。你不仅防止了药物过量，还防止了酒驾/事故。像这样走出柜台的举措建立了巨大的社区尊重。' },
                stats: { competence: 60, ethics: 90, leadership: 80, innovation: 40 }
            }
        ]
    },

    {
        id: 'ph_022',
        text: {
            en: '📅 The Expired Bottle: You find a $1000 bottle of HIV medication that expired 2 weeks ago. A patient needs it NOW. Insurance won\'t pay for a new order until tomorrow. The manager whispers: "It\'s barely expired. Just dispense it. Don\'t lose the sale."',
            th: '📅 ขวดยาหมดอายุ: คุณเจอยาต้านไวรัส HIV ราคา $1000 หมดอายุไป 2 อาทิตย์ คนไข้ต้องใช้เดี๋ยวนี้ ประกันไม่อนุมัติสั่งใหม่จนกว่าจะพรุ่งนี้ ผู้จัดการกระซิบ: "เพิ่งหมดอายุเอง จ่ายๆ ไปเถอะ อย่าให้เสียยอด"',
            zh: '📅 过期药瓶：你发现一瓶价值1000美元的艾滋病药物两周前过期了。一名病人现在急需。保险明天才会支付新订单。经理低声说：“才刚过期。配给他吧。别丢了这单生意。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Hard No: "Absolutely not. It is illegal and unsafe (degrades quickly). I will call another store to trade stock." (Correct procedure).', th: '🛑 ไม่เด็ดขาด: "ไม่ได้ครับ ผิดกฎหมายและไม่ปลอดภัย (ยาเสื่อมสภาพเร็ว) เดี๋ยวผมโทรขอยืมสต็อกร้านอื่นให้" (ขั้นตอนที่ถูกต้อง)', zh: '🛑 坚决不行：“绝对不行。这是违法的且不安全（降解很快）。我会打电话给另一家店调货。”（正确程序）。' },
                consequence: { en: '✅ Problem Solved Correctly. You find the drug at a nearby store. The patient drives 15 mins to get it. You lost the sale but kept your license clean. Integrity intact.', th: '✅ แก้ปัญหาได้ถูกต้อง คุณเจอยาที่ร้านใกล้ๆ คนไข้ขับรถไป 15 นาที คุณเสียยอดขายแต่รักษาใบอนุญาตไว้ได้ ความซื่อสัตย์ยังอยู่ครบ', zh: '✅ 正确解决问题。你在附近的商店找到了药。病人开了15分钟车去取。你失去了这单生意，但保住了执照清白。正直无损。' },
                stats: { competence: 80, ethics: 80, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤝 Dispense Expired: "Here is the bottle. I\'ll discount it 50% for cash since insurance is down." (Illegal fix).', th: '🤝 จ่ายยาหมดอายุ: "เอานี่ครับ ผมลดให้ 50% จ่ายสดนะ เพราะระบบประกันล่ม" (ทางออกผิดกฎหมาย)', zh: '🤝 配发过期药：“这瓶给您。付现金打五折，因为保险系统瘫痪了。”（非法补救）。' },
                consequence: { en: '⚖️ Fraud and Misbranding. Illegal on two counts. If the patient gets sick or reports you, you face federal fines. Expiration dates are legal boundaries, not suggestions.', th: '⚖️ ฉ้อโกงและปลอมปน ผิดกฎหมายสองกระทง ถ้าคนไข้ป่วยหรือแจ้งจับ คุณโดนค่าปรับระดับรัฐบาลกลาง วันหมดอายุคือกฎหมาย ไม่ใช่คำแนะนำ', zh: '⚖️ 欺诈和虚假标签。两项非法。如果病人通过生病或举报你，你将面临联邦罚款。有效期是法律界限，不是建议。' },
                stats: { competence: -20, ethics: -70, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💊 The "Sample" stash: "I have some physician samples in the back for emergencies. Here is a 3-day supply to tide you over until the new bottle arrives." (Resourceful).', th: '💊 คลัง "ตัวอย่างยา": "ผมมีตัวอย่างยาจากหมอเก็บไว้เผื่อฉุกเฉินครับ เอาไปกินก่อน 3 วันระหว่างรอขวดใหม่มา" (หัวไว)', zh: '💊 “样品”藏匿处：“我在后面有一些医生样品以备急需。这三天的量帮您撑到新药瓶到货。”（足智多谋）。' },
                consequence: { en: '🌟 Patient Hero. Samples are valid and free. You bridge the gap without breaking the law. The patient is incredibly relieved.', th: '🌟 ฮีโร่ของคนไข้ ตัวอย่างยายังดีและฟรีด้วย คุณช่วยต่อลมหายใจโดยไม่ผิดกฎหมาย คนไข้โล่งอกมาก', zh: '🌟 病人英雄。样品有效且免费。你在不违法的情况下度过了难关。病人如释重负。' },
                stats: { competence: 70, ethics: 80, leadership: 60, innovation: 70 }
            }
        ]
    },

    {
        id: 'ph_023',
        text: {
            en: '🗺️ The Language Gap: A patient speaks only a rare dialect. You explain "Take 1 tablet every 4 hours." He nods and smiles too much. You suspect he doesn\'t understand. He might take them all at once.',
            th: '🗺️ กำแพงภาษา: คนไข้พูดภาษาถิ่นหายาก คุณอธิบาย "กิน 1 เม็ดทุก 4 ชั่วโมง" เขาพยักหน้าและยิ้มเยอะไป คุณสงสัยว่าเขาไม่เข้าใจ เขาอาจจะกินทีเดียวหมดเลยก็ได้',
            zh: '🗺️ 语言障碍：一名病人只会说一种罕见的方言。你解释“每4小时吃1片”。他点头且笑得太多。你怀疑他没听懂。他可能会一次全吃下去。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📱 Tech Translator: "Use Google Translate app on voice mode to converse until he repeats the instructions back correctly." (Modern adaptation).', th: '📱 ล่ามไฮเทค: "ใช้แอป Google Translate โหมดเสียงเพื่อคุยจนกว่าเขาจะทวนคำสั่งได้ถูกต้อง" (การปรับตัวยุคใหม่)', zh: '📱 技术翻译：“使用谷歌翻译APP的语音模式对话，直到他正确复述说明。”（现代适应）。' },
                consequence: { en: '✅ Validated Understanding. It takes 10 minutes, but he finally says (translated): "One pill when sun is here, one when sun is there." Close enough. Safe.', th: '✅ ยืนยันความเข้าใจ ใช้เวลา 10 นาที แต่สุดท้ายเขาก็ตอบ (แปลมา): "เม็ดนึงตอนแดดอยู่ตรงนี้ เม็ดนึงตอนแดดอยู่ตรงนั้น" ใกล้เคียง ปลอดภัย', zh: '✅ 验证理解。花了10分钟，但他终于说（通过翻译）：“太阳在这儿吃一片，太阳在那儿吃一片。”够接近了。安全。' },
                stats: { competence: 60, ethics: 70, leadership: 50, innovation: 60 }
            },
            {
                id: 'B',
                text: { en: '👋 Hand Signals: "Point to pill, hold up 1 finger. Point to clock, hold up 4 fingers." (Primitive).', th: '👋 ภาษามือ: "ชี้ที่ยา ชู 1 นิ้ว ชี้ที่นาฬิกา ชู 4 นิ้ว" (ดึกดำบรรพ์)', zh: '👋 手势：“指指药片，竖起1根手指。指指时钟，竖起4根手指。”（原始）。' },
                consequence: { en: '⚠️ Miscommunication. He thinks you mean "Take 1 pill at 4 o\'clock." He misses most doses. Visual aids are better than charades.', th: '⚠️ สื่อสารผิดพลาด เขาคิดว่าคุณหมายถึง "กิน 1 เม็ดตอน 4 โมง" เขาขาดยาเกือบทุกมื้อ สื่อการสอนภาพประกอบดีกว่ามาเล่นใบ้คำนะ', zh: '⚠️ 沟通误解。他以为你的意思是“4点钟吃1片”。他漏服了大部分药物。视觉辅助比猜谜游戏好。' },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '📞 Language Line: "Call the corporate interpreter service. Wait on hold for 15 minutes to get a translator." (Standard Gold Protocol).', th: '📞 สายด่วนภาษา: "โทรหาบริการล่ามของบริษัท รอสาย 15 นาทีเพื่อคุยกับล่าม" (โปรโตคอลมาตรฐานทองคำ)', zh: '📞 语言专线：“拨打公司翻译服务电话。在线等待15分钟接通翻译。”（标准黄金协议）。' },
                consequence: { en: '🌟 Best Practice. It is slow, but legally defensible and perfectly accurate. This is how professional pharmacy is practiced.', th: '🌟 แนวทางปฏิบัติที่ดีที่สุด ช้าหน่อย แต่ถูกต้องตามกฎหมายและแม่นยำเป๊ะ นี่แหละวิถีเภสัชกรมืออาชีพ', zh: '🌟 最佳实践。虽然慢，但在法律上站得住脚且完全准确。这就是专业药房的运作方式。' },
                stats: { competence: 80, ethics: 80, leadership: 60, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_024',
        text: {
            en: '🔫 The Active Robbery: Two masked men jump the counter with knives. "Open the safe! Give us the Oxy!" Your technician is screaming. You have a concealed carry permit (but it is against company policy to carry at work).',
            th: '🔫 ปล้นซึ่งหน้า: ชายสวมหน้ากากสองคนกระโดดข้ามเคาน์เตอร์พร้อมมีด "เปิดตู้เซฟ! เอา Oxy มา!" ผู้ช่วยคุณกรีดร้อง คุณมีใบพกปืน (แต่ผิดกฎบริษัทที่จะพกมาทำงาน)',
            zh: '🔫 正在抢劫：两名蒙面男子持刀跳过柜台。“打开保险箱！把奥施康定给我们！”你的技术员在尖叫。你有隐蔽携带许可证（但携带上班违反公司政策）。'
        },
        options: [
            {
                id: 'A',
                text: { en: '👐 Surrender: "Okay! Take it! Just don\'t hurt us." (Prioritize life over stock).', th: '👐 ยอมจำนน: "โอเค! เอาไปเลย! อย่าทำอะไรพวกเรานะ" (ชีวิตสำคัญกว่าของ)', zh: '👐 投降：“好的！拿去！别伤害我们。”（生命重于库存）。' },
                consequence: { en: '✅ Everyone Lives. They take the drugs and flee. Corporate replaces the stock. You and your tech are shaken but physically unharmed. This is the correct corporate procedure.', th: '✅ ทุกคนรอด พวกเขาเอายาไปและหนี บริษัทเติมของให้ คุณและผู้ช่วยขวัญเสียแต่ร่างกายปลอดภัย นี่คือขั้นตอนปฏิบัติที่ถูกต้องของบริษัท', zh: '✅ 大家都活着。他们拿走了毒品并不逃跑。公司补充库存。你和你的技术员受到惊吓但身体未受伤害。这是正确的公司程序。' },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '💥 Draw Weapon: "Pull your concealed pistol and order them down." (Vigilante justice).', th: '💥 ชักอาวุธ: "ชักปืนที่ซ่อนไว้ออกมาแล้วสั่งให้หมอบลง" (ศาลเตี้ย)', zh: '💥 拔出武器：“拔出你藏着的手枪喝令他们趴下。”（私刑正义）。' },
                consequence: { en: '💀 Bloodbath or Fired. Best case: they run, and you are fired for bringing a gun. Worst case: they attack, someone dies. You are a pharmacist, not John Wick.', th: '💀 นองเลือดหรือโดนไล่ออก ดีสุด: พวกมันหนี คุณโดนไล่ออกฐานพกปืน แย่สุด: พวกมันสู้ มีคนตาย คุณคือเภสัชกรนะ ไม่ใช่ จอห์น วิค', zh: '💀 血以此或解雇。最好的情况：他们跑了，你因以此带枪被解雇。最坏的情况：他们攻击，有人死亡。你是药剂师，不是约翰·威克。' },
                stats: { competence: -20, ethics: -20, leadership: -40, innovation: -10 }
            },
            {
                id: 'C',
                text: { en: '🏃 Fight Back Physically: "Hit the panic button and throw a stapler at them!"', th: '🏃 สู้ตาย: "กดปุ่มฉุกเฉินแล้วปาที่เย็บกระดาษใส่มัน!"', zh: '🏃 肢体反击：“按下紧急按钮并向他们扔订书机！”' },
                consequence: { en: '⚠️ Unnecessary Risk. You escalate the violence. The tech gets slashed in the arm during the chaos. Never fight for insured property.', th: '⚠️ ความเสี่ยงที่ไม่จำเป็น คุณยกระดับความรุนแรง ผู้ช่วยโดนมีดบาดที่แขนช่วงชุลมุน อย่าเอาตัวเข้าแลกเพื่อปกป้องของที่มีประกัน', zh: '⚠️ 不必要的风险。你升级了暴力。混乱中技术员的手臂被划伤。永远不要为了以此投保的财产而战。' },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 }
            }
        ]
    },

    {
        id: 'ph_025',
        text: {
            en: '📸 The Celebrity Patient: A famous movie star comes in for herpes medication. Your staff is freaking out, trying to take sneak photos. The star looks humiliated and just wants to leave.',
            th: '📸 คนไข้ซุปตาร์: ดาราหนังชื่อดังมาซื้อยาเริม พนักงานคุณตื่นเต้นจัด พยายามแอบถ่ายรูป ดาราดูอับอายและอยากรีบๆ ไป',
            zh: '📸 名人病人：一位著名影星来买疱疹药物。你的员工都疯了，试图偷拍照片。这位明星看起来很受辱，只想离开。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛡️ Privacy Shield: "Ordering staff: \'Phones away NOW. Go to the back.\' You help the star personally and discreetly." (Professional protection).', th: '🛡️ โล่ความเป็นส่วนตัว: "สั่งพนักงาน: \'เก็บมือถือเดี๋ยวนี้ ไปหลังร้าน\' คุณให้บริการดาราด้วยตัวเองอย่างเงียบเชียบ" (การปกป้องแบบมืออาชีพ)', zh: '🛡️ 隐私盾牌：“命令员工：‘马上收起手机。去后面。’你亲自并谨慎地帮助这位明星。”（专业保护）。' },
                consequence: { en: '✅ VIP Service. The star whispers "Thank you" and leaves feeling safe. Your staff is annoyed, but you prevented a lawsuit and a PR disaster.', th: '✅ บริการ VIP ดารากระซิบ "ขอบคุณ" และจากไปอย่างสบายใจ พนักงานเซ็ง แต่คุณป้องกันการฟ้องร้องและหายนะทาง PR ได้', zh: '✅ VIP服务。明星低声说“谢谢”并感到安全地离开了。你的员工很恼火，但你避免了一场官司和公关灾难。' },
                stats: { competence: 80, ethics: 90, leadership: 80, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '📸 Join In: "Ask for a selfie too! It\'s not every day we see a star!" (Fanboy mode).', th: '📸 แจมด้วย: "ขอเซลฟี่ด้วยคน! ไม่ได้เจอดาราทุกวันนะ!" (โหมดติ่ง)', zh: '📸 加入：“也求自拍！我们不是每天都能见到明星！”（粉丝模式）。' },
                consequence: { en: '⚖️ Privacy Violation. The star sues the chain for harassment and breach of privacy. You are fired before the photo hits Instagram.', th: '⚖️ ละเมิดความเป็นส่วนตัว ดาราฟ้องเชนร้านยาฐานคุกคามและละเมิดความเป็นส่วนตัว คุณโดนไล่ออกก่อนรูปจะลงอินสตาแกรมซะอีก', zh: '⚖️ 侵犯隐私。明星起诉连锁店骚扰和侵犯隐私。照片还没上Instagram你就被被解雇了。' },
                stats: { competence: 0, ethics: -80, leadership: -60, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🤐 Ignore the Chaos: "Just ring them up quickly and let the staff do what they want." (Passive).', th: '🤐 เมินความวุ่นวาย: "รีบๆ คิดเงินแล้วปล่อยให้พนักงานทำตามใจชอบ" (เฉยเมย)', zh: '🤐 无视混乱：“赶紧结账，让员工随心所欲。”（被动）。' },
                consequence: { en: '⚠️ Leadership Void. The sneaked photos leak to TMZ. The pharmacy is identified. Corporate blames you for not controlling your staff.', th: '⚠️ ขาดผู้นำ รูปแอบถ่ายหลุดไป TMZ-ร้านยาถูกระบุพิกัด บริษัทโทษคุณที่ไม่ควบคุมลูกน้อง', zh: '⚠️ 领导力缺失。偷拍照片泄露给了TMZ。药房被认出。公司责怪你没有管好员工。' },
                stats: { competence: 30, ethics: 20, leadership: -40, innovation: 0 }
            }
        ]
    },


    {
        id: 'ph_026',
        text: {
            en: '🔌 The Power Outage: A storm knocks out power for 8 hours. The pharmacy fridge temperature rises to 15°C (59°F). It contains $50,000 worth of insulin and vaccines. The manufacturer says "discard if >8°C for 4 hours."',
            th: '🔌 ไฟดับ: พายุทำไฟดับไป 8 ชั่วโมง ตู้เย็นยาอุณหภูมิพุ่งไป 15°C ข้างในมีอินซูลินและวัคซีนมูลค่า $50,000 บริษัทผู้ผลิตระบุว่า "ทิ้งทันทีถ้าเกิน 8°C นานกว่า 4 ชั่วโมง"',
            zh: '🔌 停电：暴风雨导致停电8小时。药房冰箱温度升至15°C（59°F）。里面有价值5万美元的胰岛素和疫苗。制造商说“如果高于8°C超过4小时，请丢弃。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🗑️ The Expensive Loss: "Mark it all as damaged. Destroy it. Order fresh stock." (Strict adherence).', th: '🗑️ การสูญเสียราคาแพง: "ตีตราว่าเสียหายทั้งหมด ทำลายทิ้ง สั่งของใหม่" (ปฏิบัติตามเคร่งครัด)', zh: '🗑️ 昂贵的损失：“全部标记为损坏。销毁。订购新库存。”（严格遵守）。' },
                consequence: { en: '✅ Expensive but Safe. Corporate is unhappy about the loss ($50k!), but insurance covers it. You slept at night knowing nobody got ineffective compounds.', th: '✅ แพงแต่ปลอดภัย บริษัทไม่พอใจที่เสียของ ($50k!) แต่ประกันจ่าย คุณนอนหลับสบายเพราะรู้ว่าไม่มีใครได้รับยาไร้คุณภาพไปฉีด', zh: '✅ 昂贵但安全。公司对损失感到不快（5万美元！），但保险涵盖了。你晚上睡得安稳，知道没人用了无效的药物。' },
                stats: { competence: 60, ethics: 80, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤞 "It\'s Probably Fine": "It was only warm for a few hours. Just sell it quickly." (Hidden risk).', th: '🤞 "น่าจะไม่เป็นไร": "มันแค่อุ่นขึ้นไม่กี่ชั่วโมงเอง รีบๆ ขายออกไปให้หมด" (ความเสี่ยงที่ซ่อนเร้น)', zh: '🤞 “应该没事”：“只热了几个小时。赶快把它卖掉。”（隐藏风险）。' },
                consequence: { en: '☠️ Silent Failure. The vaccines became inert. 50 kids you vaccinated get the flu next season. One ends up in ICU. You are responsible for distributing "spoiled milk" medicine.', th: '☠️ ความล้มเหลวเงียบ วัคซีนเสื่อมสภาพ เด็ก 50 คนที่คุณฉีดให้ติดไข้หวัดใหญ่ปีหน้า คนนึงต้องเข้า ICU คุณต้องรับผิดชอบฐานแจกจ่ายยา "เน่าเสีย"', zh: '☠️ 无声的失败。疫苗失效了。你接种疫苗的50个孩子在下一个季节得了流感。一个进了ICU。你要对分发“变质牛奶”药物负责。' },
                stats: { competence: -40, ethics: -60, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🧪 Stability Data Check: "Call the manufacturer medial affairs for \'excursion data\'. Often drugs are stable longer than the label says." (Scientific approach).', th: '🧪 เช็คข้อมูลความคงตัว: "โทรหาฝ่ายการแพทย์ของผู้ผลิตขอข้อมูล \'excursion data\' บ่อยครั้งที่ยาทนทานกว่าที่ฉลากบอก" (แนวทางวิทยาศาสตร์)', zh: '🧪 稳定性数据检查：“致电制造商医疗事务部索取‘偏差数据’。通常药物比标签上说的更稳定。”（科学方法）。' },
                consequence: { en: '🌟 Money Saved. They confirm the insulin is good for 24 hours at 15°C! You save $40,000 of stock. Only the vaccines need tossing. You are a hero to the profit margin.', th: '🌟 ประหยัดเงิน พวกเขายืนยันว่าอินซูลินอยู่ได้ 24 ชม. ที่ 15°C! คุณกู้สต็อกคืนได้ $40,000 ทิ้งแค่วัคซีน คุณคือฮีโร่ผู้กอบกู้กำไร', zh: '🌟 省钱了。他们确认胰岛素在15°C下24小时内有效！你挽救了4万美元的库存。只有疫苗需要扔掉。你是利润率的英雄。' },
                stats: { competence: 90, ethics: 70, leadership: 70, innovation: 50 }
            }
        ]
    },

    {
        id: 'ph_027',
        text: {
            en: '✊ The Strike: The pharmacy technicians\' union declares a strike for better wages. You are the manager (non-union). Corporate orders you: "Keep the store open. Run it alone if you have to."',
            th: '✊ การประท้วงหยุดงาน: สหภาพผู้ช่วยเภสัชประกาศหยุดงานประท้วงขอค่าแรงเพิ่ม คุณเป็นผู้จัดการ (ไม่ได้อยู่สหภาพ) บริษัทสั่ง: "เปิดร้านต่อไป ทำคนเดียวก็ต้องทำ"',
            zh: '✊ 罢工：药房技术员工会宣布罢工要求提高工资。你是经理（非工会成员）。公司命令你：“维持店铺营业。必要时你一个人也要经营。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚶‍♂️ Close the Gates: "I cannot safely run a pharmacy doing 500 scripts alone. It is dangerous. I am closing." (Safety stand).', th: '🚶‍♂️ ปิดประตู: "ผมรันร้านยา 500 เคสคนเดียวอย่างปลอดภัยไม่ได้หรอกครับ มันอันตราย ผมขอปิดร้าน" (ยืนหยัดเพื่อความปลอดภัย)', zh: '🚶‍♂️ 关门：“我一个人无法安全地经营每天500张处方的药房。这很危险。我要关门。”（安全立场）。' },
                consequence: { en: '🛡️ Brave Stand. Corporate threatens you, but you cite license safety laws. They eventually send emergency floaters. You protected your license and supported the point that staffing is needed.', th: '🛡️ การยืนหยัดที่กล้าหาญ บริษัทขู่คุณ แต่คุณอ้างกฎหมายความปลอดภัยใบอนุญาต สุดท้ายเขาก็ส่งพนักงานชั่วคราวมาช่วย คุณปกป้องใบอนุญาตและสนับสนุนประเด็นที่ว่า "คนไม่พอ"', zh: '🛡️ 勇敢的立场。公司威胁你，但你引用了执照安全法。他们最终派来了紧急替补人员。你保护了你的执照并支持了需要人员配备的观点。' },
                stats: { competence: 60, ethics: 80, leadership: 80, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🏃‍♀️ One-Man Army: "I\'ll do my best! I will run like crazy!" (Hero complex).', th: '🏃‍♀️ กองทัพวันแมนโชว์: "ผมจะทำให้ดีที่สุด! จะวิ่งให้ตีนแตกเลย!" (บ้าพลัง)', zh: '🏃‍♀️ 一人军队：“我会尽力的！我会像疯了一样通过！”（英雄情结）。' },
                consequence: { en: '💀 Burnout & Error. By 2 PM, you are exhausted. You give a child the wrong medication in the chaos. You crossed the picket line just to fail. Both sides hate you now.', th: '💀 หมดไฟ & ผิดพลาด บ่าย 2 คุณก็หมดสภาพ คุณจ่ายยาผิดให้เด็กท่ามกลางความวุ่นวาย คุณข้ามเส้นประท้วงมาเพื่อล้มเหลว ตอนนี้เกลียดคุณทั้งสองฝ่ายเลย', zh: '💀 倦怠与错误。到了下午2点，你已经筋疲力尽。混乱中你给了一个孩子错误的药物。你越过纠察线结果只是失败。现在双方都恨你。' },
                stats: { competence: 30, ethics: -20, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🤝 Private Support: "Run the store, but buy pizza for the strikers outside. Tell them you support them but have to care for patients." (Diplomacy).', th: '🤝 การสนับสนุนส่วนตัว: "เปิดร้าน แต่สั่งพิซซ่าเลี้ยงคนประท้วงข้างนอก บอกเขาว่าคุณสนับสนุนนะแต่ต้องดูคนไข้ข้างใน" (การทูต)', zh: '🤝 私下支持：“经营店铺，但给外面的罢工者买披萨。告诉他们你支持他们，但必须照顾病人。”（外交手段）。' },
                consequence: { en: '🌟 Diplomatic Survivor. You keep the patients alive AND maintain respect with your team. When the strike ends, your team works harder for you because you weren\'t a jerk.', th: '🌟 ผู้รอดชีวิตทางการทูต คุณรักษาชีวิตคนไข้ และยังรักษาน้ำใจลูกน้อง พอจบการประท้วง ทีมงานขยันขึ้นเพราะคุณไม่ทำตัวงี่เง่า', zh: '🌟 外交幸存者。你保住了病人的性命，同时也保持了团队的尊重。罢工结束后，你的团队为你工作得更努力，因为你不是个混蛋。' },
                stats: { competence: 70, ethics: 60, leadership: 90, innovation: 40 }
            }
        ]
    },

    {
        id: 'ph_028',
        text: {
            en: '💻 Cyber Ransom: You turn on the computers. A red skull appears: "All files encrypted. Pay 1 Bitcoin to restore." You cannot access patient profiles or history. A patient needs heart medication urgently.',
            th: '💻 ไซเบอร์เรียกค่าไถ่: คุณเปิดคอมพิวเตอร์ กะโหลกแดงโผล่มา: "ไฟล์ทั้งหมดถูกเข้ารหัส จ่าย 1 Bitcoin เพื่อกู้คืน" คุณเข้าดูประวัติคนไข้ไม่ได้เลย มีคนไข้โรคหัวใจต้องการยาด่วน',
            zh: '💻 网络勒索：你打开电脑。出现一个红色骷髅：“所有文件已加密。支付1比特币恢复。”你无法访问病人资料或历史记录。一名病人急需心脏药物。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📝 Paper Mode: "Ask to see his old bottle. Call his doctor to verbal verify. Dispense and record on paper to enter later." (Old school resilience).', th: '📝 โหมดกระดาษ: "ขอดูขวดเก่า โทรหาหมอเพื่อยืนยันปากเปล่า จ่ายยาและจดลงกระดาษค่อยคีย์ย้อนหลัง" (ความเก๋าแบบรุ่นเดอะ)', zh: '📝 纸质模式：“要求看他的旧药瓶。打电话给他的医生口头核实。配药并记录在纸上稍后输入。”（老派的韧性）。' },
                consequence: { en: '✅ Continuity of Care. You prove that a pharmacist is more than a computer operator. The system is down for 3 days, but your patients are safe.', th: '✅ ความต่อเนื่องในการรักษา คุณพิสูจน์ว่าเภสัชกรเป็นมากกว่าพนักงานคอมพิวเตอร์ ระบบล่มไป 3 วัน แต่คนไข้คุณปลอดภัยทุกคน', zh: '✅ 护理的连续性。你证明了药剂师不仅仅是电脑操作员。系统瘫痪了3天，但你的病人是安全的。' },
                stats: { competence: 90, ethics: 80, leadership: 70, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🚫 "System Down": "I can\'t do anything without the computer. Corporate policy." (Helplessness).', th: '🚫 "ระบบล่ม": "ผมทำอะไรไม่ได้ถ้าไม่มีคอมฯ กฎบริษัทครับ" (ไร้หนทาง)', zh: '🚫 “系统瘫痪”：“没有电脑我什么也做不了。公司政策。”（无助）。' },
                consequence: { en: '📉 Uselessness. You stand around for 8 hours turning away sick people. The community sees the pharmacy as fragile and unreliable.', th: '📉 ไร้ประโยชน์ คุณยืนบื้ออยู่ 8 ชั่วโมงไล่คนป่วยกลับบ้าน ชุมชนมองว่าร้านยานี้เปราะบางและพึ่งพาไม่ได้', zh: '📉 无用。你闲站了8个小时，把病人拒之门外。社区认为药房脆弱且不可靠。' },
                stats: { competence: -20, ethics: -10, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💰 Pay the Hacker: "Use the petty cash card to buy Bitcoin. We need to open NOW." (Panic response).', th: '💰 จ่ายแฮกเกอร์: "เอาบัตรเงินสดย่อยไปซื้อ Bitcoin เราต้องเปิดร้านเดี๋ยวนี้" (ตื่นตระหนก)', zh: '💰 支付黑客：“用备用金卡买比特币。我们需要现在就开业。”（恐慌反应）。' },
                consequence: { en: '⚠️ Security Breach. You pay, but they demand more. Corporate IT fires you for negotiating with terrorists and compromising financial security.', th: '⚠️ ความปลอดภัยรั่วไหล คุณจ่ายไป แต่มันขอเพิ่ม ฝ่าย IT ไล่คุณออกฐานเจรจากับผู้ก่อการร้ายและทำให้ระบบการเงินไม่ปลอดภัย', zh: '⚠️ 安全漏洞。你付了钱，但他们要求更多。公司IT部门因你与恐怖分子谈判并危及财务安全而解雇你。' },
                stats: { competence: 20, ethics: -30, leadership: -50, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_029',
        text: {
            en: '❤️ The Conflict Match: You match with a cute guy on Tinder. You go on a date. It goes great. The next day, he walks into your pharmacy to pick up Valtrex (herpes medication). He doesn\'t see you in the back.',
            th: '❤️ คู่แมทช์เจ้าปัญหา: คุณแมทช์กับหนุ่มน่ารักใน Tinder เดตกันหวานชื่น วันต่อมา เขาเดินเข้าร้านยาคุณมารับ Valtrex (ยาเริม) เขาไม่เห็นคุณที่อยู่หลังร้าน',
            zh: '❤️ 冲突配对：你在Tinder上配对了一个可爱的家伙。你们去约会了。感觉很棒。第二天，他走进你的药房取Valtrex（疱疹药物）。他没在后面看到你。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🕵️ Check Profile: "Look up his profile to see how often he gets it and if he has other STDs." (Snooping).', th: '🕵️ เช็คประวัติ: "แอบดูประวัติเขาว่ามารับบ่อยแค่ไหนและมีโรคติดต่อทางเพศสัมพันธ์อื่นอีกไหม" (สอดรู้สอดเห็น)', zh: '🕵️ 检查资料：“查看他的资料，看看他多久以此，以及是否有其他性病。”（窥探）。' },
                consequence: { en: '⚖️ HIPAA Violation + Heartbreak. You find out he is frequent. But snooping for personal reasons is illegal. If caught, you lose your license. Also, the romance is dead.', th: '⚖️ ละเมิด HIPAA + อกหัก คุณรู้ความจริงว่าเขาเป็นขาประจำ แต่การส่องประวัติเรื่องส่วนตัวมันผิดกฎหมาย ถ้าโดนจับได้ ใบอนุญาตปลิว แถมความรักก็จบเห่', zh: '⚖️ 违反HIPAA + 心碎。你发现他是常客。但出于个人原因窥探是非法的。如果被抓到，你会失去执照。而且，恋情告吹。' },
                stats: { competence: 10, ethics: -90, leadership: -20, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '👻 Ghost Him: "Process the prescription normally, then never reply to his texts again." (Avoidance).', th: '👻 เททิ้งซะ: "จ่ายยาไปตามปกติ แล้วไม่ต้องตอบไลน์เขาอีกเลย" (หนีปัญหา)', zh: '👻 玩失踪：“正常处理处方，然后永远不再回复他的短信。”（逃避）。' },
                consequence: { en: '✅ Safe Exit. You protect his privacy and your own health. It\'s awkward, but professionally valid.', th: '✅ ทางออกที่ปลอดภัย คุณปกป้องความเป็นส่วนตัวเขาและสุขภาพตัวเอง มันกระอักกระอ่วนแต่ถูกต้องในทางวิชาชีพ', zh: '✅ 安全退出。你保护了他的隐私和你自己的健康。这很尴尬，但在职业上是有效的。' },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🗨️ The Gentle Disclosure: "Text him later: \'Hey, small world, I realized I work at your pharmacy. I can\'t date you due to professional conflict.\'" (Honesty).', th: '🗨️ เปิดอกคุย: "ไลน์หาเขาทีหลัง: \'เฮ้ย โลกกลมจัง เราเพิ่งรู้ตัวว่าเราทำงานร้านยาที่เธอมา เราคบกันไม่ได้นะเพราะมันขัดกันเรื่องงาน\'" (จริงใจ)', zh: '🗨️ 温和披露：“稍后发短信给他：‘嘿，世界真小，我发现我在你的药房工作。由于职业冲突，我不能和你约会。’”（诚实）。' },
                consequence: { en: '🌟 Classy Move. He appreciates the honesty/privacy. No trust was broken. You maintain high ethical standards.', th: '🌟 การกระทำที่ดูแพง เขาซึ้งในความจริงใจ/ความเป็นส่วนตัว ไม่มีความลับที่ถูกเปิดเผย คุณรักษามาตรฐานจริยธรรมไว้ได้สูงส่ง', zh: '🌟 优雅的举动。他感激你的诚实/隐私。没有破坏信任。你保持了高道德标准。' },
                stats: { competence: 60, ethics: 90, leadership: 60, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_030',
        text: {
            en: '💉 The Needle Exchange: A visibly addicted person asks to buy a pack of clean syringes. In your state, this is legal without a prescription to prevent HIV/Hepatitis. Other customers are staring and whispering judgingly.',
            th: '💉 แลกเปลี่ยนเข็ม: คนที่ดูก็รู้ว่าติดยามาขอซื้อเข็มฉีดยาสะอาดแพ็คหนึ่ง ในรัฐของคุณขายได้โดยไม่ต้องใช้ใบสั่งหมอเพื่อป้องกัน HIV/ไวรัสตับอักเสบ ลูกค้าคนอื่นมองและซุบซิบนินทา',
            zh: '💉 针头交换：一个明显的瘾君子要求买一包干净的注射器。在你所在的州，为了预防艾滋病/肝炎，无需处方即可合法购买。其他顾客盯着看并窃窃私语地评判。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Deny Sale: "We are out of stock." (Lie to preserve store image).', th: '🛑 ปฏิเสธการขาย: "ของหมดครับ" (โกหกเพื่อรักษาภาพลักษณ์ร้าน)', zh: '🛑 拒绝出售：“我们没货了。”（撒谎以维护商店形象）。' },
                consequence: { en: '☠️ Harm Maximization. He shares a dirty needle later that day and contracts Hepatitis C. You protected the "comfort" of soccer moms but failed public health duties.', th: '☠️ เพิ่มอันตรายสูงสุด เขาไปใช้เข็มสกปรกและติดไวรัสตับอักเสบ C คุณปกป้อง "ความสบายใจ" ของคุณป้าขี้เม้าท์แต่ล้มเหลวในหน้าที่สาธารณสุข', zh: '☠️ 伤害最大化。那天晚些时候他共用了一个脏针头并感染了丙型肝炎。你保护了足球妈妈们的“舒适”，但未能履行公共卫生职责。' },
                stats: { competence: 20, ethics: -40, leadership: -30, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤝 Sell and Educate: "Here are the syringes. I also put a pamphlet for a local recovery center in the bag. Be safe." (Harm Reduction).', th: '🤝 ขายและให้ความรู้: "นี่ครับเข็ม ผมใส่แผ่นพับศูนย์บำบัดใกล้ๆ ไว้ในถุงด้วยนะ ดูแลตัวเองด้วยครับ" (การลดอันตราย)', zh: '🤝 出售并教育：“这是注射器。我在袋子里放了一本当地康复中心的小册子。注意安全。”（减少伤害）。' },
                consequence: { en: '🌟 Public Health Win. Treating him with dignity means he might actually read the pamphlet. You reduced disease spread. This is modern healthcare.', th: '🌟 ชัยชนะทางสาธารณสุข การปฏิบัติกับเขาอย่างมีศักดิ์ศรีอาจทำให้เขายอมอ่านแผ่นพับ คุณลดการแพร่กระจายโรค นี่คือสาธารณสุขยุคใหม่', zh: '🌟 公共卫生胜利。有尊严地对待他意味着他可能真的会读那本小册子。你减少了疾病传播。这是现代医疗保健。' },
                stats: { competence: 80, ethics: 80, leadership: 60, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '😠 Shaming: "I\'m not helping you utilize drugs. Get help." (Moralizing).', th: '😠 ประจาน: "ผมไม่ช่วยคุณเสพยาหรอกนะ ไปหาหมอซะไป" (เทศนาสั่งสอน)', zh: '😠 羞辱：“我不会帮你吸毒。去寻求帮助吧。”（道德说教）。' },
                consequence: { en: '⚠️ Alienation. He leaves feeling worthless. Shame fuels addiction. He is now less likely to ever seek professional help from a pharmacy again.', th: '⚠️ ผลักไส เขาจากไปพร้อมความรู้สึกไร้ค่า ความละอายยิ่งเติมเชื้อไฟให้การเสพยา ตอนนี้เขายิ่งไม่กล้ามาขอความช่วยเหลือจากร้านยาอีกเลย', zh: '⚠️ 疏远。他带着毫无价值的感觉离开了。羞耻感助长了成瘾。他现在不太可能从药房寻求专业帮助了。' },
                stats: { competence: 40, ethics: -20, leadership: -40, innovation: 0 }
            }
        ]
    },


    {
        id: 'ph_041',
        text: {
            en: '🚩 The Pill Mill: You notice a pattern. Every Friday, 20 people from the same county (2 hours away) arrive in a van. They all have scripts for "Oxycodone 30mg + Xanax 2mg" from "Dr. Feelgood Pain Clinic." They pay cash.',
            th: '🚩 โรงงานผลิตคนติดยา: คุณสังเกตเห็นรูปแบบ ทุกวันศุกร์ คน 20 คนจากอำเภอเดียวกัน (ห่างไป 2 ชม.) นั่งรถตู้มาพร้อมกัน ทุกคนมีใบสั่งยา "Oxycodone 30mg + Xanax 2mg" จาก "คลินิกระงับปวดหมอฟีลกู๊ด" พวกเขาจ่ายเงินสด',
            zh: '🚩 药丸工厂：你注意到一个模式。每逢周五，有20人从同一个县（2小时车程）乘面包车抵达。他们都有来自“感觉好疼痛诊所”的“羟考酮30mg + 阿普唑仑2mg”的处方。他们付现金。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Blanket Ban: "I am obstructing this whole clinic. I will not fill for Dr. Feelgood anymore. Get out." (Hard Stop).', th: '🚫 แบนยกแผง: "ผมจะระงับการจ่ายยาให้คลินิกนี้ทั้งหมด ผมไม่จ่ายให้หมอฟีลกู๊ดอีกแล้ว ออกไปซะ" (หยุดทันที)', zh: '🚫 全面禁令：“我要阻断这整个诊所。我再也不会为感觉好医生配药了。出去。”（硬性停止）。' },
                consequence: { en: '✅ DEA Ally. You report the pattern. The DEA raids the clinic a month later. You cut off a major supply line for the cartel. You faced threats but stood tall.', th: '✅ พันธมิตร DEA คุณแจ้งเบาะแส DEA บุกทลายคลินิกในเดือนต่อมา คุณตัดเส้นทางลำเลียงยาเสพติดหลัก คุณโดนขู่แต่ก็ยืนหยัดได้', zh: '✅ DEA盟友。你报告了这个模式。一个月后DEA突袭了该诊所。你切断了卡特尔的一条主要供应线。你面临威胁但屹立不倒。' },
                stats: { competence: 80, ethics: 90, leadership: 60, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '💸 Fill Them All: "Hey, scripts are valid. Who am I to deny pain relief? That\'s $2000 profit every Friday." (Complicity).', th: '💸 จ่ายให้หมด: "เฮ้ย ใบสั่งยาถูกต้องนี่ ผมเป็นใครถึงจะไปปฏิเสธยาแก้ปวด? นั่นกำไรศุกร์ละ $2000 เชียวนะ" (สมรู้ร่วมคิด)', zh: '💸 全配了：“嘿，处方是有效的。我是谁，敢拒绝缓解疼痛？那是每周五2000美元的利润。”（同谋）。' },
                consequence: { en: '⚖️ Indictment. You are arrested along with the doctor for "conspiracy to distribute." You lose your license, your savings, and your freedom. Ignorance is no excuse.', th: '⚖️ โดนฟ้อง คุณถูกจับพร้อมหมอข้อหา "สมคบคิดจำหน่ายยาเสพติด" คุณเสียใบอนุญาต เงินเก็บ และอิสรภาพ ความไม่รู้ไม่ใช่ข้อแก้ตัว', zh: '⚖️ 起诉。你因“共谋分销”与医生一起被捕。你失去了执照、积蓄和自由。无知不是借口。' },
                stats: { competence: 0, ethics: -100, leadership: -50, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '📉 Slow Walk: "Tell them we are out of stock. Make it inconvenient so they go elsewhere." (Soft refusal).', th: '📉 ถ่วงเวลา: "บอกว่าของหมด ทำให้มันยุ่งยากเขาจะได้ไปที่อื่น" (ปฏิเสธแบบนุ่มนวล)', zh: '📉 拖延：“告诉他们我们没货了。制造不便，让他们去别处。”（软拒绝）。' },
                consequence: { en: '⚠️ Problem Moved. They just go to the pharmacy down the street. You protected yourself but didn\'t solve the community problem.', th: '⚠️ ปัดสวะ พวกเขาก็แค่ไปร้านยาถัดไป คุณรอดตัวแต่ไม่ได้แก้ปัญหาให้ชุมชน', zh: '⚠️ 问题转移。他们只是去了街尾的药房。你保护了自己，但没有解决社区问题。' },
                stats: { competence: 40, ethics: 20, leadership: -10, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_042',
        text: {
            en: '☣️ The Chemo Spill: A tech drops a bottle of Methotrexate (chemo drug) on the floor. Tablets shatter. Dust goes into the air. She reaches for a broom/dustpan to sweep it up without a mask.',
            th: '☣️ เคมีบำบัดหก: ผู้ช่วยทำขวด Methotrexate (ยาเคมีบำบัด) ตกแตก เม็ดยาแตกกระจาย ฝุ่นฟุ้ง เธอคว้าไม้กวาดจะไปกวาดโดยไม่ใส่หน้ากาก',
            zh: '☣️ 化疗药物泄漏：一名技术员把一瓶甲氨蝶呤（化疗药）掉在地上。药片碎了。粉尘进入空气。她伸手拿扫帚/簸箕去扫，没戴口罩。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 STOP!: "Don\'t breathe! Evacuate the area! Use the Hazardous Waste Spill Kit (P100 mask, double gloves). Do not sweep (creates dust)!" (Protocol).', th: '🛑 หยุด!: "ห้ามหายใจ! ออกจากพื้นที่! ใช้ชุดกู้ภัยสารเคมีอันตราย (หน้ากาก P100, ถุงมือสองชั้น) ห้ามกวาด (ฝุ่นจะฟุ้ง)!" (โปรโตคอล)', zh: '🛑 停下！：“以此呼吸！撤离该区域！使用危险废物泄漏以此包（P100口罩，双层手套）。不要扫（会产生粉尘）！”（协议）。' },
                consequence: { en: '✅ Safety Expert. You prevented inhalation of carcinogenic dust. You cleaned it properly. The tech is shaken but safe. OSHA would be proud.', th: '✅ ผู้เชี่ยวชาญความปลอดภัย คุณป้องกันการสูดดมฝุ่นก่อมะเร็ง คุณทำความสะอาดถูกต้อง ผู้ช่วยขวัญเสียแต่ปลอดภัย OSHA ต้องภูมิใจ', zh: '✅ 安全专家。你防止了吸入致癌粉尘。你清理得很彻底。技术员受到惊吓但很安全。OSHA会为此感到骄傲。' },
                stats: { competence: 90, ethics: 80, leadership: 70, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🧹 Let Her Sweep: "Just clean it up quickly before a customer sees the mess." (Efficiency).', th: '🧹 ปล่อยให้กวาด: "รีบๆ กวาดให้เสร็จก่อนลูกค้าจะมาเห็นความเละเทะ" (เน้นไว)', zh: '🧹 让她扫：“趁顾客看到这一团以此之前赶紧清理干净。”（效率）。' },
                consequence: { en: '☠️ Exposure. She inhales the dust. Years later, she develops fertility issues or cancer. It is traced back to lax safety protocols at your store.', th: '☠️ สัมผัสสารพิษ เธอสูดฝุ่นเข้าไป หลายปีต่อมาเธอมีลูกยากหรือเป็นมะเร็ง สืบย้อนกลับมาที่มาตรการความปลอดภัยที่หละหลวมของร้านคุณ', zh: '☠️ 暴露。她吸入了以此。几年后，以此怀孕问题或以此。这追溯到你店里松懈的安全协议。' },
                stats: { competence: -40, ethics: -60, leadership: -50, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💦 Wet Mop: "Throw water on it first, then mop it." (Half-measure).', th: '💦 ม็อบเปียก: "เอาน้ำราดก่อน แล้วค่อยถู" (แก้ขัด)', zh: '💦 湿拖：“先泼点水，以此拖把拖。”（以此措施）。' },
                consequence: { en: '⚠️ Contamination. You spread the dissolved chemo drug all over the floor with the mop. Now the whole floor is hazardous. A hazmat team is needed.', th: '⚠️ ปนเปื้อน คุณถูยาเคมีที่ละลายน้ำกระจายไปทั่วพื้น ตอนนี้พื้นทั้งหมดกลายเป็นพื้นที่อันตราย ต้องเรียกหน่วยเก็บกู้สารเคมีมา', zh: '⚠️ 污染。以此把溶解的化疗以此拖得到以此。以此整个以此都是危险以此。需要危险品以此。' },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_043',
        text: {
            en: '📱 The TikTok Pharmacist: You start making "Educational" TikToks. One day, you tell a funny story about a "crazy lady who thought her pills were bugged." You don\'t name her, but she is the only person in town with blue hair.',
            th: '📱 เภสัช TikTok: คุณเริ่มทำคลิป "ให้ความรู้" ลง TikTok วันนึงคุณเล่าเรื่องตลกเกี่ยวกับ "ยัยป้าประสาทหลอนที่คิดว่ามียาถูกดักฟัง" คุณไม่เอ่ยชื่อ แต่ทั้งเมืองมีแกคนเดียวที่ทำผมสีฟ้า',
            zh: '📱 TikTok药剂师：你开始以此“教育性”TikTok视频。有一天，你讲了一个以此关于“疯女人以为她的以此被窃听”的故事。你没以此她的名字，但她是以此唯一以此子。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🔥 Keep it Up: "It went viral! 100k views! I am an influencer now!" (Fame seeker).', th: '🔥 ทำต่อไป: "คลิปแมสแล้ว! ยอดวิวแสนนึง! ฉันเป็นอินฟลูฯ แล้วเว้ย!" (หิวแสง)', zh: '🔥 继续：“以此！10万以此！我现在是网红了！”（以此）。' },
                consequence: { en: '⚖️ HIPAA Breach. She sees it. Patients recognize her. She sues. The BoP revokes your license for unprofessional conduct/breach of privacy. Social media is not a HIPAA-free zone.', th: '⚖️ ละเมิด HIPAA ป้าแกเห็น คนไข้คนอื่นก็จำได้ แกฟ้อง สภาฯ ยึดใบอนุญาตฐานประพฤติผิดจรรยาบรรณ/ละเมิดความเป็นส่วนตัว โซเชียลไม่ใช่พื้นที่ยกเว้น HIPAA นะ', zh: '⚖️ 以此HIPAA。她看到了。病人以此出了她。她起诉。以此因以此不以此/侵犯以此而撤以此你的以此。社交以此不是HIPAA以此。' },
                stats: { competence: 20, ethics: -80, leadership: -40, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🗑️ Delete and Apologize: "Realize the risk immediately. Delete the video. Post a generic apology." (Damage Control).', th: '🗑️ ลบและขอโทษ: "รู้ตัวทันทีว่าเสี่ยง ลบคลิป โพสต์ขอโทษรวมๆ" (ควบคุมความเสียหาย)', zh: '🗑️ 删除并道歉：“立即以此以此。删除以此。发布以此道歉。”（以此控制）。' },
                consequence: { en: '✅ Lesson Learned. A few people saw it, but it didn\'t spread. You narrowly swerved a career-ending mistake. Stick to general drug facts, no patient stories.', th: '✅ บทเรียนราคาแพง มีคนเห็นบ้างแต่ยังไม่กระจาย คุณรอดตายจากความผิดพลาดจบอาชีพมาได้อย่างหวุดหวิด จากนี้เอาแค่เรื่องยาทั่วไปนะ ห้ามเอาเรื่องคนไข้มาเม้าท์', zh: '✅ 以此以此。有些人以此，但以此以此。以此以此以此了一个以此以此以此。以此以此以此药物以此，以此病人以此。' },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '🔒 Anonymize Better: "Change details in future stories. Say it was a \'man with a hat\' instead." (Persistence).', th: '🔒 ปิดบังให้เนียนขึ้น: "เปลี่ยนรายละเอียในเรื่องหน้า บอกว่าเป็น \'ผู้ชายใส่หมวก\' แทน" (ดื้อด้าน)', zh: '🔒 更好地匿名：“在以此的故事以此以此以此。说是一个‘以此以此的以此’。”（以此）。' },
                consequence: { en: '⚠️ Slippery Slope. You might get away with it for a while, but mocking patients for content eventually erodes your professional soul and reputation.', th: '⚠️ ทางลาดชัน คุณอาจรอดไปได้สักพัก แต่การเอาคนไข้มาล้อเลียนเพื่อทำคอนเทนต์ สุดท้ายมันจะกัดกินจิตวิญญาณและความน่าเชื่อถือของคุณ', zh: '⚠️ 以此。你以此以此以此一段时间，但以此以此以此以此以此。' },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 40 }
            }
        ]
    },

    {
        id: 'ph_044',
        text: {
            en: '🤱 The Lactation Question: A new mom needs antibiotics for mastitis. Her doctor prescribed "Cipro." She asks, "Is this safe for breastfeeding?" The package insert says "Use with caution." The doctor said "It\'s fine, don\'t worry."',
            th: '🤱 คำถามให้นมบุตร: คุณแม่มือใหม่ต้องกินยาปฏิชีวนะแก้เต้านมอักเสบ หมอสั่ง "Cipro" เธอถาม "กินแล้วให้นมลูกได้ไหมคะ?" ฉลากยาบอก "ใช้ด้วยความระมัดระวัง" หมอบอก "ไม่เป็นไรหรอก อย่ากังวล"',
            zh: '🤱 哺乳期问题：一位新妈妈需要抗生素治疗乳腺炎。她的医生开了“环丙沙星”。她问：“这对母乳喂养安全吗？”包装说明书上写着“以此使用”。医生说：“没事的，别担心。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '📚 Check LactMed: "Let me check the NIH LactMed database... It says it is safer to use Cephalexin if possible. I will call the doctor to switch." (Gold Standard).', th: '📚 เช็ค LactMed: "เดี๋ยวผมเช็คฐานข้อมูล NIH LactMed ให้นะครับ... มันระบุว่าถ้าใช้ Cephalexin จะปลอดภัยกว่า เดี๋ยวผมโทรขอหมอเปลี่ยนให้ครับ" (มาตรฐานทองคำ)', zh: '📚 检查LactMed：“让我查以此NIH LactMed数据库……它说以此以此以此以此以此头孢以此。以此以此医生以此。”（以此标准）。' },
                consequence: { en: '✅ Optimal Care. The doctor agrees to switch. The mom feels relieved and validated. You used specialized resources to optimize infant safety.', th: '✅ การดูแลที่ดีที่สุด หมอยอมเปลี่ยนยา แม่โล่งใจและมั่นใจ คุณใช้แหล่งข้อมูลเฉพาะทางเพื่อความปลอดภัยสูงสุดของทารก', zh: '✅ 以此以此。医生以此以此。妈妈以此以此以此。你以此了以此以此以此以此以此以此。' },
                stats: { competence: 90, ethics: 80, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🤷 Defer to Doctor: "If the doctor said it\'s fine, go ahead." (Lazy).', th: '🤷 โยนให้หมอ: "ถ้าหมอบอกว่าได้ ก็ตามนั้นครับ" (มักง่าย)', zh: '🤷 听医生的：“如果医生说以此，以此。”（懒惰）。' },
                consequence: { en: '⚠️ Potential Issue. Cipro can cause joint issues in developing animals (though rare in humans via milk). It\'s not the *best* choice. You missed a chance to be an expert.', th: '⚠️ ปัญหาที่อาจเกิด Cipro อาจทำให้เกิดปัญหาข้อต่อในสัตว์ที่กำลังโต (แม้จะพบน้อยในคนผ่านน้ำนม) มันไม่ใช่ตัวเลือกที่ *ดีที่สุด* คุณพลาดโอกาสที่จะแสดงความเป็นผู้เชี่ยวชาญ', zh: '⚠️ 以此以此。环丙沙星会导致以此动物的以此以此（以此以此以此以此以此）。这以此以此的选择。以此以此以此以此以此以此以此。' },
                stats: { competence: 50, ethics: 40, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🚫 Stop Breastfeeding: "You must pump and dump for 1 week just to be safe." (Overcautious).', th: '🚫 หยุดให้นม: "คุณต้องปั๊มนมทิ้ง 1 อาทิตย์ครับเพื่อความชัวร์" (ระวังเกินเหตุ)', zh: '🚫 停止以此：“为了以此，你以此以此以此以。”（以此）。' },
                consequence: { en: '📉 Lactation Failure. The baby refuses the bottle. The mom\'s milk supply dries up. She gives up breastfeeding unnecessarily because you were too lazy to look up the data.', th: '📉 การให้นมล้มเหลว ลูกไม่ยอมดูดขวด น้ำนมแม่แห้ง เธอต้องเลิกให้นมทั้งที่ไม่จำเป็น เพียงเพราะคุณขี้เกียจเปิดข้อมูลดู', zh: '📉 以此以此。宝宝以此以此。以此以此以此。她以此以此以此以此，因为以此以此以此以此以此。' },
                stats: { competence: 30, ethics: 40, leadership: -10, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_045',
        text: {
            en: '💵 The Price Hike: The price of the generic EpiPen suddenly jumps from $100 to $600 overnight due to a monopoly. A mom is crying at your counter. "I can\'t afford this to save my peanut-allergic son."',
            th: '💵 ขึ้นราคาโหด: ราคา EpiPen สามัญพุ่งจาก $100 เป็น $600 ชั่วข้ามคืนเพราะการผูกขาด แม่คนหนึ่งยืนร้องไห้หน้าเคาน์เตอร์ "ฉันไม่มีเงินซื้อยาช่วยชีวิตลูกชายที่แพ้ถั่วหรอก"',
            zh: '💵 价格以此：由于以此，以此EpiPen以此以此从100美元以此以此600美元。以此以此以此以此以此。我以此以此以此以此以此以此以此以此。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💡 Syringe Kit: "I can prescribe a vial of Epinephrine and regular syringes for $20. I will teach you how to draw it up." (The "MacGyver" fix).', th: '💡 ชุดเข็มฉีดยา: "ผมสั่ง Epinephrine แบบขวดกับเข็มธรรมดาให้ได้ครับ ราคา $20 เดี๋ยวผมสอนวิธีดึงยาให้" (ทางออกสไตล์แมคกายเวอร์)', zh: '💡 以此：“我可以以此以此以此以此以此，以此20美元。我以此以此以此以此。”（“以此”以此）。' },
                consequence: { en: '🌟 Innovation Hero. It is technically harder to use, but you provided a life-saving alternative she can afford. Extensive counseling makes it safe.', th: '🌟 ฮีโร่นักประดิษฐ์ มันใช้ยากกว่าก็จริง แต่คุณมอบทางเลือกช่วยชีวิตที่เธอจ่ายไหว การให้คำปรึกษาอย่างละเอียดทำให้มันปลอดภัย', zh: '🌟 以此以此。以此以此以此以此，但以此以此以此以此以此以此以此。以此以此以此以此以此。' },
                stats: { competence: 90, ethics: 90, leadership: 70, innovation: 100 }
            },
            {
                id: 'B',
                text: { en: '😢 Sympathy Only: "I am so sorry. It\'s the drug companies. Maybe try GoodRx?" (Helpless).', th: '😢 เห็นใจแต่ช่วยไม่ได้: "ผมเสียใจด้วยจริงๆ ครับ มันเป็นที่บริษัทยา ลองเช็ค GoodRx ดูไหม?" (ไร้ประโยชน์)', zh: '😢 以此：“以此以此。是以此。以此GoodRx以此？”（以此）。' },
                consequence: { en: '📉 System Failure. Even with coupons, it is $400. She leaves without it. The system failed her, and you offered no creative solution.', th: '📉 ระบบล้มเหลว ต่อให้ใช้คูปองก็ยัง $400 เธอกลับไปมือเปล่า ระบบทอดทิ้งเธอ และคุณก็ไม่มีทางออกสร้างสรรค์ให้', zh: '📉 以此以此。以此以此以此，以此以此400美元。以此以此。以此以此以此，以此以此以此以此以此以此。' },
                stats: { competence: 40, ethics: 50, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '😠 Manager Override: "Sell it at cost ($550). We lose profit, but help a little." (Small gesture).', th: '😠 ผู้จัดการสั่งลุย: "ขายราคาทุน ($550) ไปเลย เรายอมขาดทุนกำไร แต่ช่วยได้นิดนึง" (น้ำใจเล็กน้อย)', zh: '😠 以此以此：“以此以此（550美元）以此。以此以此，但以此以此。”（以此）。' },
                consequence: { en: '⚠️ Limited Impact. It helps a tiny bit, but she still can\'t afford $550. Good sentiment, ineffective outcome.', th: '⚠️ ผลกระทบจำกัด ช่วยได้นิดเดียว แต่เธอก็ยังไม่มีเงินจ่าย $550 อยู่ดี เจตนาดีแต่ผลลัพธ์ไม่ได้เรื่อง', zh: '⚠️ 以此以此。以此以此，但以此以此以此550美元。以此以此，以此以此。' },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 10 }
            }
        ]
    },


    {
        id: 'ph_046',
        text: {
            en: '🔍 The Missing Patch: You are a hospital pharmacist. A nurse claims she "accidentally threw away" a used Fentanyl patch, so she doesn\'t have it for the witness waste count. This is the 3rd time this month she has "lost" waste.',
            th: '🔍 แผ่นแปะที่หายไป: คุณเป็นเภสัชกรโรงพยาบาล พยาบาลอ้างว่าเธอ "เผลอทิ้ง" แผ่นแปะเฟนทานิลใช้แล้วไป เธอเลยไม่มีของมาโชว์ตอนนับขยะทิ้ง นี่เป็นครั้งที่ 3 ในรอบเดือนที่เธอ "ทำของหาย"',
            zh: '🔍 丢失的贴片：你是一名医院以此师。一名以此以此她“不以此以此”了一个用以此芬太尼以此，以此以此她没以此以此以此以此。这以此本月她第3次“以此”以此。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🕵️ Report Suspicion: "I cannot sign this waste form. I am reporting this pattern to the Nursing Director and Diversion Officer immediately." (Whistleblower).', th: '🕵️ รายงานความน่าสงสัย: "ผมเซ็นใบทำลายขยะนี้ไม่ได้ ผมจะรายงานรูปแบบนี้ต่อผอ.ฝ่ายพยาบาลและจนท.ตรวจสอบการรั่วไหลทันที" (ผู้เปิดโปง)', zh: '🕵️ 以此以此：“我不能以此以此以此。我以此以此将此以此以此以此以此以此以此以此以此。”（以此）。' },
                consequence: { en: '✅ Diversion Stopped. An investigation reveals she was sucking the gel out of patches. She goes to rehab. You protected patients from an impaired nurse.', th: '✅ หยุดการรั่วไหล การสอบสวนพบว่าเธอแอบดูดเจลยาออกจากแผ่นแปะ เธอถูกส่งไปบำบัด คุณปกป้องคนไข้จากพยาบาลที่ติดยา', zh: '✅ 以此以此。调查显示她正在以此以此以此以此。她以此以此。你以此了病人以此以此以此以此。' },
                stats: { competence: 80, ethics: 80, leadership: 60, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '✍️ Sign It Off: "I\'ll sign it this last time, but be careful." (Enabling).', th: '✍️ เซ็นผ่านให้: "ผมจะเซ็นให้ครั้งสุดท้ายนะ แต่ระวังหน่อยล่ะ" (ให้ท้าย)', zh: '✍️ 以此：“我以此以此以此以此，但要以此。”（以此）。' },
                consequence: { en: '☠️ Overdose. Next week, she is found unconscious in the breakroom with a needle. A patient in her care was neglected and died. You enabled her addiction.', th: '☠️ ยาเกินขนาด อาทิตย์หน้าพบเธอหมดสติในห้องพักพร้อมเข็มฉีดยา คนไข้ในความดูแลของเธอถูกละเลยจนเสียชีวิต คุณมีส่วนสนับสนุนการเสพติดของเธอ', zh: '☠️ 以此。以此，她被以此以此在以此以此以此以此。以此以此以此以此以此以此以此以此。你以此了以此以此。' },
                stats: { competence: -30, ethics: -60, leadership: -40, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🧪 Drug Test Threat: "I will sign if you agree to a urine drug screen right now." (Vigilante).', th: '🧪 ขู่ตรวจฉี่: "ผมจะเซ็นให้ถ้าคุณยอมตรวจปัสสาวะตอนนี้เลย" (ศาลเตี้ย)', zh: '🧪 以此以此：“以此你以此以此以此尿以此，以此以此以此。”（以此）。' },
                consequence: { en: '⚠️ Procedural Error. You don\'t have authority to demand tests. HR writes you up for harassment. She gets away with it because you didn\'t follow protocol.', th: '⚠️ ผิดขั้นตอน คุณไม่มีอำนาจสั่งตรวจ HR เรียกคุณไปสอบฐานคุกคาม เธอรอดตัวไปได้เพราะคุณไม่ทำตามโปรโตคอล', zh: '⚠️ 以此以此。你以此以此以此以。人事以此以此以此以此以此。她以此以此，以此以此以此以此以此。' },
                stats: { competence: 30, ethics: 20, leadership: -20, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_047',
        text: {
            en: '🧬 The Trial Candidate: You manage a clinical trial. A patient with terminal cancer wants to join. He meets all criteria EXCEPT his liver enzymes are slightly too high (10% over limit). He begs: "This is my last hope."',
            th: '🧬 ผู้สมัครทดลองยา: คุณดูแลการทดลองทางคลินิก คนไข้มะเร็งระยะสุดท้ายขอเข้าร่วม เขาผ่านทุกเกณฑ์ "ยกเว้น" ค่าเอนไซม์ตับสูงเกินไปนิดหน่อย (เกินมา 10%) เขาขอร้อง: "นี่คือความหวังสุดท้ายของผม"',
            zh: '🧬 以此以此：你以此以此临床以此。一名以此以此以此以此以此以此。他以此以此以此，以此以此以此10%。以此以此：“这以此以此以此以此。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '📉 Slight Fudge: "Record the value as just under the limit. It\'s close enough. Give him a chance." (Data Manipulation).', th: '📉 แก้ตัวเลขนิดหน่อย: "บันทึกค่าว่าปริ่มๆ ขีดจำกัดละกัน มันใกล้เคียงมาก ให้โอกาสเขาเถอะ" (บิดเบือนข้อมูล)', zh: '📉 以此以此：“以此以此以此以此以此以此以此。以此以此。以此以此机会。”（以此以此）。' },
                consequence: { en: '☠️ Safety Failure. The experimental drug is hepatotoxic. His liver fails completely in week 2, and he dies a painful death. The trial is audited and shut down. You are fired.', th: '☠️ ความปลอดภัยล้มเหลว ยาทดลองเป็นพิษต่อตับ ตับเขาวายสนิทในสัปดาห์ที่ 2 และเสียชีวิตอย่างทรมาน การทดลองถูกตรวจสอบและสั่งยุติ คุณโดนไล่ออก', zh: '☠️ 安全失败。以此以此以此以此。以此以此以此以此以此，以此以此以此。以此以此以此以此以此。以此以此。' },
                stats: { competence: -50, ethics: -80, leadership: -40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🛡️ Stick to Protocol: "I am devastated, but I cannot enroll you. The safety limits are there to prevent the drug from killing you faster." (Hard Truth).', th: '🛡️ ยึดตามโปรโตคอล: "ผมเสียใจมากครับแต่รับคุณเข้าไม่ได้ ตัวเลขความปลอดภัยมีไว้เพื่อกันไม่ให้ยาฆ่าคุณเร็วกว่าเดิม" (ความจริงที่เจ็บปวด)', zh: '🛡️ 以此以此：“我很以此，但我不能以此你。以此以此以此以此以此以此以此以此以此以此。”（以此以此）。' },
                consequence: { en: '✅ Ethical Science. It is heartbreaking, but correct. You refer him to a compassionate use program instead. You upheld the integrity of the data.', th: '✅ วิทยาศาสตร์ที่มีจริยธรรม มันน่าเศร้าแต่ถูกต้อง คุณแนะนำเขาไปโครงการ "Compassionate Use" (การขอใช้ยาเพื่อเมตตาธรรม) แทน คุณรักษาความถูกต้องของข้อมูล', zh: '✅ 以此以此。这以此以此，但以此。你以此以此一个以此以此以此。你以此了以此以此以此。' },
                stats: { competence: 70, ethics: 80, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '📞 Waiver Request: "Contact the Medical Monitor for an exception waiver. Argue the risk/benefit ratio." (Advocacy).', th: '📞 ขอยกเว้น: "ติดต่อผู้ดูแลทางการแพทย์เพื่อขอใบยกเว้นเป็นกรณีพิเศษ โต้แย้งเรื่องความเสี่ยงเทียบกับผลประโยชน์" (การต่อรอง)', zh: '📞 以此以此：“以此以此以此以此以此以此。以此以此以此以此。”（以此）。' },
                consequence: { en: '🌟 Best Outcome. The monitor approves the waiver with extra monitoring. He gets the drug legally. You advocated without lying.', th: '🌟 ผลลัพธ์ที่ดีที่สุด ผู้ดูแลอนุมัติใบยกเว้นโดยมีการติดตามผลเป็นพิเศษ เขาได้รับยาอย่างถูกกฎหมาย คุณช่วยต่อรองโดยไม่ต้องโกหก', zh: '🌟 以此以此。监以此以此以此以此以此，以此以此以此以此。他合以此以此。你以此以此以此。' },
                stats: { competence: 80, ethics: 90, leadership: 60, innovation: 50 }
            }
        ]
    },

    {
        id: 'ph_048',
        text: {
            en: '✈️ The Safari Trip: A couple is going to a high-risk Malaria zone. They want "Malorone" but their insurance rejects it ($200). They ask, "Can we just drink Gin and Tonic? Or take thiamine? I read online it works."',
            th: '✈️ ทริปซาฟารี: คู่รักจะไปเขตมาลาเรียระบาดหนัก อยากได้ยา "Malarone" แต่ประกันปฏิเสธ (ราคา $200) เขาถาม "กินจินโทนิคแทนได้ไหม? หรือกินวิตามินบี? อ่านในเน็ตเขาว่าช่วยได้"',
            zh: '✈️ 以此以此：一对以此要以此以此以此以此。他们以此以此“Malarone”，但以此以此（200美元）。他们问：“我们可以以此Gin and Tonic吗？或者以此以此？以此以此以此以此以此。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🗺️ Map Check & Doxy: "Gin/Thiamine is a myth. You will get sick. Let me call the doctor to switch to Doxycycline. It is $10 and works just as well." (Cost-effective).', th: '🗺️ เช็คแผนที่ & Doxy: "จิน/วิตามินบี เป็นเรื่องหลอกลวงครับ เดี๋ยวคุณจะป่วยหนัก ผมจะโทรขอหมอเปลี่ยนเป็น Doxycycline ให้ ราคา $10 ได้ผลเหมือนกัน" (คุ้มค่า)', zh: '🗺️ 以此以此：“Gin/以此是以此。你以此以此。以此以此以此以此以此Doxycycline。以此10美元，以此以此。”（以此）。' },
                consequence: { en: '✅ Protection Secured. They buy the Doxy. They have a great trip and stay healthy. You solved the financial barrier with clinical knowledge.', th: '✅ ป้องกันเรียบร้อย พวกเขาซื้อ Doxy ไป ได้เที่ยวสนุกและสุขภาพดี คุณแก้ปัญหาเรื่องเงินด้วยความรู้ทางคลินิก', zh: '✅ 以此以此。他们以此Doxy。他们以此以此以此以此以此以此。你以此以此以此以此以此以此。' },
                stats: { competence: 80, ethics: 70, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: { en: '🤷 Myth Validation: "Yeah, some people say B-vitamins work. Better than nothing if you can\'t afford the pills." (Spreading misinformation).', th: '🤷 สนับสนุนเรื่องมั่ว: "อืม บางคนก็ว่าวิตามินบีได้ผลนะ ก็ดีกว่าไม่ทำอะไรถ้าสู้ค่ายาไม่ไหว" (แพร่ข้อมูลเท็จ)', zh: '🤷 以此以此：“是以此，以此以此以此以此。如果你以此以此，以此以此以此。”（以此以此）。' },
                consequence: { en: '☠️ Tropical ICU. They contract Falciparum Malaria. The wife ends up in a coma in Kenya. Your advice was medically baseless and dangerous.', th: '☠️ ICU ป่าดงดิบ พวกเขาติดมาลาเรียสายพันธุ์ฟัลซิปารัม ภรรยาโคม่าอยู่ที่เคนยา คำแนะนำคุณไม่มีมูลความจริงทางการแพทย์และอันตรายมาก', zh: '☠️ 以此ICU。他们以此以此以此。以此以此以此。你以此以此以此以此以此以此以此。' },
                stats: { competence: -40, ethics: -50, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💳 Upsell DEET: "Forget the pills. Just buy these 5 bottles of 100% DEET spray." (Revenue focus).', th: '💳 เชียร์ขาย DEET: "ช่างยาเถอะ ซื้อสเปรย์ DEET 100% 5 ขวดนี้ไปดีกว่า" (เน้นยอด)', zh: '💳 以此DEET：“以此以此。以此以此以此5种100% DEET以此。”（以此）。' },
                consequence: { en: '⚠️ Incomplete Protection. Sprays help, but pills are required for high-risk zones. They get lucky and don\'t catch it, but you gambled with their health.', th: '⚠️ ป้องกันไม่ครบ สเปรย์ช่วยได้ แต่ยาเม็ดจำเป็นสำหรับพื้นที่เสี่ยงสูง พวกขาโชคดีไม่ติดเชื้อ แต่คุณเอาสุขภาพเขามาเสี่ยงดวง', zh: '⚠️ 以此以此。以此以此，但以此以此以此以此以此。他们以此以此，但你以此以此以此以此。' },
                stats: { competence: 40, ethics: 20, leadership: 10, innovation: 0 }
            }
        ]
    },

    {
        id: 'ph_049',
        text: {
            en: '🏢 The Big Buyout: A massive chain (CVS/Walgreens equivalent) buys your independent pharmacy. The new District Manager arrives: "Cut staff hours by 30%. Metrics must increase 20%. No mostly talking to patients anymore."',
            th: '🏢 การเทคโอเวอร์ครั้งใหญ่: เครือข่ายยักษ์ใหญ่ (ระดับ CVS/Walgreens) ซื้อกิจการร้านยาของคุณ ผู้จัดการเขตคนใหม่มาถึง: "ตัดชั่วโมงพนักงาน 30% ยอดต้องเพิ่ม 20% เลิกคุยกับคนไข้ได้แล้ว"',
            zh: '🏢 以此以此：以此以此以此（CVS/Walgreens以此）以此以此以此以此。以此以此以此以此：“以此以此30%。以此以此以此20%。以此以此以此以此。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤖 The Corporate Drone: "Yes sir. I will fire the part-timers today. Efficiency is key." (Sellout).', th: '🤖 หุ่นยนต์บริษัท: "ครับผม ผมจะไล่พาร์ทไทม์ออกวันนี้แหละ ประสิทธิภาพคือกุญแจสำคัญ" (ขายวิญญาณ)', zh: '🤖 以此以此：“是以此。我以此以此以此以此。以此以此以此。”（以此）。' },
                consequence: { en: '📉 Soul Death. You keep your job, but the store becomes a miserable factory. Errors increase. Patients leave. You hate going to work every day.', th: '📉 จิตวิญญาณตายด้าน คุณรักษางานไว้ได้ แต่ร้านกลายเป็นนรกโรงงาน ความผิดพลาดพุ่ง คนไข้หนี คุณเกลียดการไปทำงานทุกวัน', zh: '📉 以此死亡。你以此以此，但以此以此以此以此以此。以此以此。以此以此。以此以此以此以此。' },
                stats: { competence: 40, ethics: -40, leadership: -60, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🛡️ The Resistance: "I cannot safely operate with those cuts. I will maintain current staffing levels and sacrifice the metric bonus to pay for it." (Principled).', th: '🛡️ ฝ่ายต่อต้าน: "ผมทำงานอย่างปลอดภัยไม่ได้ถ้าตัดขนาดนั้น ผมจะคงจำนวนคนเท่าเดิม ยอมสละโบนัสยอดขายมาจ่ายค่าจ้างแทน" (มีอุดมการณ์)', zh: '🛡️ 以此：“我以此以此以此以此以此。我以此以此以此以此以此以此以此以此以此。”（以此）。' },
                consequence: { en: '✅ Respect. The DM hates you, but the staff loves you. The store runs smoothly. Eventually, the DM realizes your store is the most profitable because customers actually like it.', th: '✅ ความเคารพ ผู้จัดการเขตเกลียดคุณ แต่ลูกน้องรักคุณ ร้านดำเนินไปอย่างราบรื่น สุดท้ายผู้จัดการก็รู้ว่าร้านคุณกำไรดีสุดเพราะลูกค้าชอบ', zh: '✅ 以此。DM以此你，但以此以此你。以此以此以此。最以此，DM以此你的以此是最以此，以此以此以此以此。' },
                stats: { competence: 80, ethics: 90, leadership: 90, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '🚪 Quit and Open Rival: "I quit. I\'m taking my patient list and opening a shop across the street." (Entrepreneur).', th: '🚪 ลาออกไปเปิดแข่ง: "ผมลาออก ผมจะเอาฐานลูกค้าไปเปิดร้านแข่งฝั่งตรงข้าม" (ผู้ประกอบการ)', zh: '🚪 以此以此：“我以此。以此以此以此以此以此以此以此。”（以此）。' },
                consequence: { en: '🌟 New Beginning. It is a huge risk, but 60% of patients follow you. You build a new "Concierge Pharmacy" model. You are free.', th: '🌟 การเริ่มต้นใหม่ เสี่ยงมหาศาล แต่คนไข้ 60% ตามคุณมา คุณสร้างโมเดล "ร้านยาดูแลดุจญาติมิตร" ใหม่ คุณเป็นอิสระแล้ว', zh: '🌟 以此以此。这以此以此，但60%以此以此以此以此。你以此以此“以此以此”以此。你以此以此。' },
                stats: { competence: 90, ethics: 70, leadership: 100, innovation: 90 }
            }
        ]
    },

    {
        id: 'ph_050',
        text: {
            en: '❤️ The "Right to Try": A 20-year-old with ALS wants an experimental drug not yet FDA approved. The manufacturer agrees to provide it, but they need a pharmacist to compound and dispense it. It requires complex sterile sterile handling.',
            th: '❤️ สิทธิที่จะลอง: เด็กอายุ 20 ที่ป่วยเป็น ALS ต้องการยาทดลองที่ FDA ยังไม่รับรอง ผู้ผลิตยอมให้ยา แต่ต้องมีเภสัชกรปรุงและจ่ายยาให้ มันต้องใช้เทคนิคปลอดเชื้อขั้นสูง',
            zh: '❤️ “以此以此”：一名20岁以此ALS以此以此以此以此FDA以此的以此以此。以此以此以此以此，但需要以此以此以此以此。这需要以此以此以此以此。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🙅 Too Risky: "I don\'t want the liability if he dies. Find a research hospital." (Defensive Medicine).', th: '🙅 เสี่ยงเกิน: "ผมไม่อยากรับผิดชอบถ้าเขาตาย ไปหาโรงพยาบาลวิจัยเถอะ" (เวชปฏิบัติป้องกันตัว)', zh: '🙅 以此以此：“他以此以此以此我以此以此。以此以此以此以此。”（以此以此）。' },
                consequence: { en: '📉 Opportunity Lost. He dies while waiting for transfer. You protected your license but lost your humanity. Pharmacists are meant to solve drug problems.', th: '📉 พลาดโอกาส เขาตายระหว่างรอส่งตัว คุณรักษาใบอนุญาตไว้ได้แต่สูญเสียความเป็นมนุษย์ เภสัชกรมีหน้าที่แก้ปัญหาเรื่องยานะ', zh: '📉 以此以此。他以此以此以此。你以此以此以此但以此以此以此。以此以此以此以此drug以此。' },
                stats: { competence: 50, ethics: -20, leadership: -30, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🧪 Build the Lab: "I will upgrade my clean room and get certified for this. I will manage his entire protocol personally." (Pioneer).', th: '🧪 สร้างห้องแล็บ: "ผมจะอัปเกรดห้องคลีนรูมและสอบใบรับรองเพื่อการนี้ ผมจะดูแลโปรโตคอลเขาทั้งหมดด้วยตัวเอง" (ผู้บุกเบิก)', zh: '🧪 以此以此：“我以此以此以此以此以此以此以此。我以此以此以此以此以此以此。”（以此）。' },
                consequence: { en: '🌟 Legacy. It costs money, but you successfully administer the drug. He lives another 2 years. You become the regional expert for rare disease compounding.', th: '🌟 ตำนาน เสียเงินหน่อย แต่คุณจ่ายยาได้สำเร็จ เขามีชีวิตต่ออีก 2 ปี คุณกลายเป็นผู้เชี่ยวชาญระดับภูมิภาคด้านการปรุงยาโรคหายาก', zh: '🌟 以此。这以此以此，但你以此以此以此。他以此以此2年。你以此以此以此以此以此专家。' },
                stats: { competence: 100, ethics: 90, leadership: 80, innovation: 100 }
            },
            {
                id: 'C',
                text: { en: '💧 Kitchen Sink Mix: "I\'ll mix it on the counter. It\'s better than nothing." (Reckless).', th: '💧 ผสมแบบลูกทุ่ง: "ผสมบนเคาน์เตอร์นี่แหละ ดีกว่าไม่ได้ยา" (บ้าระห่ำ)', zh: '💧 以此以此：“以此以此以此以此。以此以此以此以此。”（以此）。' },
                consequence: { en: '☠️ Septic Shock. The injection wasn\'t sterile. He gets a blood infection and dies immediately. You are sued for malpractice and manslaughter.', th: '☠️ ช็อกจากการติดเชื้อ ยาฉีดไม่ปลอดเชื้อ เขาติดเชื้อในกระแสเลือดและตายทันที คุณโดนฟ้องฐานประมาทเลินเล่อและฆ่าคนตาย', zh: '☠️ 以此以此。以此以此以此。他以此以此以此以此以此。你以此以此以此以此以此。' },
                stats: { competence: -60, ethics: -50, leadership: -50, innovation: 0 }
            }
        ]
    }
];