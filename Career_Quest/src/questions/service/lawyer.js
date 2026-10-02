
// Lawyer Career Questions
// Ultra-Comprehensive set: 50 detailed, story-rich questions
// Each scenario is a mini-case study with deep consequences and realistic stat impacts

export const lawyerQuestions = [


    {
        id: 'law_001',
        text: {
            en: '⚖️ The"Smoking Gun"Discovery: You are a junior associate on a massive class-action defense for a pharmaceutical giant. Buried in box 4,209 of documents, you find a memo from the CEO explicitly admitting they knew the drug caused heart failure. The partner says:"I never saw that. Shred it. If this gets out, the company goes bankrupt."',
            th: '⚖️ การค้นพบ"หลักฐานมัดตัว": คุณเป็นทนายความฝึกหัดในคดีฟ้องร้องกลุ่มกับบริษัทยายักษ์ใหญ่ ในกล่องที่ 4,209 คุณพบบันทึกจาก CEO ที่ยอมรับว่ารู้ว่ายาทำให้หัวใจล้มเหลว หุ้นส่วนบอกว่า:"ฉันไม่เคยเห็นมัน ทำลายมันซะ ถ้าหลุดออกไป บริษัทเจ๊งแน่"',
            zh: '⚖️"确凿证据"的发现：你是一起针对制药巨头的大规模集体诉讼的初级律师。在第4,209箱文件中，你发现了一份CEO的备忘录，承认他们早就知道该药物会导致心力衰竭。合伙人说："我没看见。粉碎它。如果传出去，公司就破产了。"'
        },
        options: [
            { id: 'A', text: { en: '🔥 Shred it:"My loyalty is to the firm. This never existed."', th: '🔥 ทำลายมัน:"ฉันภักดีต่อองค์กร สิ่งนี้ไม่เคยมีอยู่จริง"', zh: '🔥 粉碎它："我效忠于律所。这从未存在过。"' }, consequence: { en: '💀 Soul Sold! The firm wins. You get a bonus and"reliable"status. But 3 years later, a whistleblower leaks a copy. You face felony charges.', th: '💀 ขายวิญญาณ! สำนักงานชนะ คุณได้โบนัส แต่ 3 ปีต่อมามีคนแฉ คุณโดนคดีอาญา', zh: '💀 出卖灵魂！律所赢了。你得到奖金。但3年后，举报人泄露了副本。你面临重罪指控。' }, stats: { competence: 20, ethics: -50, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '📢"Inadvertent"Disclosure:"Slip it into the plaintiff\'s pile. Pretend it was a mistake."', th: '📢 แกล้งหลุด:"แอบใส่ในกองเอกสารฝ่ายโจทก์ แกล้งทำเป็นพลาด"', zh: '📢"无意"披露："把它塞进原告的文件堆里。假装是个错误。"' }, consequence: { en: '🎯 Cowboy Justice! Plaintiffs find it. Company settles for $4B. Partner is furious but can\'t prove intent. You saved lives but are seen as"sloppy."', th: '🎯 ความยุติธรรมแบบคาวบอย! โจทก์เจอ บริษัทจ่าย $4B หุ้นส่วนโกรธแต่ทำอะไรไม่ได้ คุณช่วยคนแต่โดนมองว่า"สะเพร่า"', zh: '🎯 牛仔正义！原告发现了。公司赔偿40亿。合伙人愤怒但无法证明。你救了人但被视为"草率"。' }, stats: { competence: -10, ethics: 40, leadership: 10, innovation: 45 } },
            { id: 'C', text: { en: '🛑 Report to Ethics:"Refuse and report the partner. Criminal act."', th: '🛑 รายงานจริยธรรม:"ปฏิเสธและรายงานหุ้นส่วน นี่คืออาชญากรรม"', zh: '🛑 向道德委员会报告："拒绝并举报合伙人。这是犯罪。"' }, consequence: { en: '⚖️ The Martyr! Partner disbarred. You are fired for"performance."Blacklisted by big firms, but hired by DOJ as prosector.', th: '⚖️ ผู้พลีชีพ! หุ้นส่วนโดนถอนใบอนุญาต คุณโดนไล่ออก สำนักงานใหญ่แบน แต่ได้งานอัยการ', zh: '⚖️ 烈士！合伙人被取消资格。你被解雇。大律所封杀你，但司法部聘用你。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🧠 Strategic Pivot:"Convince partner: \'If we hide this and it leaks, we go to jail. Let\'s settle now and frame it as responsibility.\'"', th: '🧠 พลิกแพลง:"กล่อมหุ้นส่วน: \'ถ้าซ่อนแล้วหลุด เราติดคุก ยอมความตอนนี้แล้วสร้างภาพว่ารับผิดชอบเถอะ\'"', zh: '🧠 战略转型："说服合伙人：\'如果隐瞒并泄露，我们会坐牢。现在和解并将其包装为承担责任。\'"' }, consequence: { en: '♟️ Master Move! Partner agrees. Private settlement. You save the client years of bad press. Strategic genius.', th: '♟️ เดินหมากขั้นเทพ! หุ้นส่วนตกลง ยอมความลับๆ คุณช่วยลูกค้าจากข่าวเสีย อัจฉริยะ', zh: '♟️ 大师之举！合伙人同意。私下和解。你挽救了客户的声誉。战略天才。' }, stats: { competence: 50, ethics: 35, leadership: 45, innovation: 40 } }
        ]
    },



    {
        id: 'law_002',
        text: {
            en: '⏳ The 2,400 Hour Target: It\'s Dec 15. You have 2,250 hours. You need 150 more for the $50k bonus. No active cases. Senior associate says:"Just \'review\' archived files. Everyone does it."',
            th: '⏳ เป้า 2,400 ชั่วโมง: 15 ธ.ค. แล้ว คุณมี 2,250 ขาดอีก 150 เพื่อเอาโบนัส $50k ไม่มีคดีให้ทำ รุ่นพี่บอก:"แค่ \'ทบทวน\' ไฟล์เก่าสิ ใครๆ ก็ทำ"',
            zh: '⏳ 2400小时目标：12月15日。你有2250小时。还需要150小时拿5万奖金。没案子。高级律师说："去\'审查\'存档文件。大家都这么做。"'
        },
        options: [
            { id: 'A', text: { en: '💸 Pad the Hours:"Bill 10 hours/day on dead cases. Secure the bag."', th: '💸 ปั่นชั่วโมง:"ลงบิลวันละ 10 ชม. คดีเก่า เอาเงินไว้ก่อน"', zh: '💸 虚报工时："每天在已结案案件上计费10小时。拿到钱。"' }, consequence: { en: '⚠️ Fraudulent Gains! You get the check. But client audits later. You get a warning and lost trust. Was it worth it?', th: '⚠️ ได้มาโดยโกง! ได้เช็ค แต่ลูกค้าตรวจสอบทีหลัง คุณโดนเตือนและหมดความเชื่อถือ คุ้มไหม?', zh: '⚠️ 欺诈所得！拿到支票。但客户审计。你收到警告并失去信任。值得吗？' }, stats: { competence: 10, ethics: -40, leadership: -10, innovation: -10 } },
            { id: 'B', text: { en: '🙅 Accept Missed Target:"I won\'t commit fraud. Goodbye $50k."', th: '🙅 ยอมพลาด:"ไม่โกง ลาก่อนเงินก้อน"', zh: '🙅 接受未达标："我不欺诈。再见5万。"' }, consequence: { en: '📉 Honest but Poor! Lose bonus. But Managing Partner notices efficiency:"You did more in less time."You get assigned better deals.', th: '📉 ซื่อสัตย์แต่จน! อดโบนัส แต่บอสเห็นประสิทธิภาพ"คุณทำงานไว"ได้ดีลดีๆ แทน', zh: '📉 诚实但穷！没奖金。但老板注意到效率："你用更少时间做更多事。"你得到更好的案子。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '🤝 Ask for Pro Bono:"Do urgent asylum cases. Real work, real hours."', th: '🤝 ของานกุศล:"ทำคดีผู้ลี้ภัยเร่งด่วน งานจริง ชั่วโมงจริง"', zh: '🤝 申请公益："做紧急庇护案件。真工作，真工时。"' }, consequence: { en: '🌟 Heroic Grind! 16-hour days for real people. Hit 2,400 legally. Won"Pro Bono Award."Reputation up.', th: '🌟 ฮีโร่กรรมกร! ทำงานหนักเพื่อคนจริงๆ ครบ 2,400 แบบขาวสะอาด ได้รางวัล ชื่อเสียงพุ่ง', zh: '🌟 英雄苦干！为真人每天工作16小时。合法达标。获得"公益奖"。声誉上升。' }, stats: { competence: 45, ethics: 45, leadership: 40, innovation: 25 } },
            { id: 'D', text: { en: '📝 Write Article:"Bill to \'Business Dev\'. Write analysis on new laws."', th: '📝 เขียนบทความ:"ลงบิล \'พัฒนาธุรกิจ\' เขียนวิเคราะห์กฎหมายใหม่"', zh: '📝 写文章："计入\'业务开发\'。撰写新法分析。"' }, consequence: { en: '🎓 Thought Leader! Miss billable bonus, but article gets client attention. You bring in $500k retainer. Rainmaker bonus received.', th: '🎓 ผู้นำความคิด! อดค่าชั่วโมง แต่บทความดึงลูกค้าใหญ่ได้ ได้เงินกินเปล่า $500k ได้โบนัสพิเศษแทน', zh: '🎓 思想领袖！没计费奖金，但文章吸引客户。带来50万保留金。获得造雨人奖金。' }, stats: { competence: 50, ethics: 35, leadership: 40, innovation: 50 } }
        ]
    },



    {
        id: 'law_003',
        text: {
            en: '💼 Conflict of Interest: Firm represents"OilyCorp."Your best friend sues them for patent theft. She asks for"off the record"advice.',
            th: '💼 ผลประโยชน์ทับซ้อน: บริษัทเป็นทนาย"OilyCorp"เพื่อนสนิทคุณฟ้อง OilyCorp เรื่องขโมยสิทธิบัตร เธอขอคำปรึกษา"แบบไม่เป็นทางการ"',
            zh: '💼 利益冲突：律所代表"石油公司"。好友起诉他们窃取专利。她寻求"私下"建议。'
        },
        options: [
            { id: 'A', text: { en: '🤫 Help Secretly:"Meet at cafe. No phones. I\'ll guide you."', th: '🤫 ช่วยลับๆ:"เจอกันร้านกาแฟ ห้ามมือถือ ฉันจะบอกทาง"', zh: '🤫 秘密帮助："咖啡馆见。没手机。我指导你。"' }, consequence: { en: '💀 Double Agent! She wins. OilyCorp finds out you helped. Fired instantly. Sued for malpractice.', th: '💀 นกสองหัว! เธอชนะ OilyCorp จับได้ว่าคุณช่วย ไล่ออกทันที โดนฟ้องกลับ', zh: '💀 双重间谍！她赢了。石油公司发现你帮忙。立即解雇。被起诉渎职。' }, stats: { competence: 40, ethics: -45, leadership: -30, innovation: 10 } },
            { id: 'B', text: { en: '🚫 Hard Refusal:"Can\'t talk. Violation of ethics. Lose my number."', th: '🚫 ปฏิเสธเสียงแข็ง:"คุยไม่ได้ ผิดจริยธรรม ลบเบอร์ฉันซะ"', zh: '🚫 坚决拒绝："不能谈。违反道德。别联系我。"' }, consequence: { en: '❄️ Cold Professional! You protect firm. Friend loses badly. Friendship over. Price of duty.', th: '❄️ มืออาชีพเลือดเย็น! ปกป้องบริษัท เพื่อนแพ้ยับ เลิกคบ ราคาของหน้าที่', zh: '❄️ 冷酷专业！保护律所。朋友惨败。友谊结束。职责的代价。' }, stats: { competence: 35, ethics: 45, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Refer to Rival:"Can\'t help. But here\'s a number of a shark who hates OilyCorp."', th: '🤝 ส่งต่อคู่แข่ง:"ช่วยไม่ได้ แต่เอานี่เบอร์ทนายเขี้ยวๆ ที่เกลียด OilyCorp"', zh: '🤝 转介对手："帮不了。但这有个恨石油公司的厉害律师电话。"' }, consequence: { en: '✅ Loophole! She gets help. You stay clean. Balancing act success.', th: '✅ ช่องโหว่! เธอได้คนช่วย คุณรอดตัว รักษาสมดุลสำเร็จ', zh: '✅ 漏洞！她得到帮助。你身家清白。平衡成功。' }, stats: { competence: 45, ethics: 30, leadership: 35, innovation: 35 } },
            { id: 'D', text: { en: '🏢 Recuse:"Tell firm I have conflict. Remove me from OilyCorp team."', th: '🏢 ขอถอนตัว:"บอกบริษัทว่ามีส่วนได้ส่วนเสีย ถอดฉันจากทีม OilyCorp ที"', zh: '🏢 回避："告诉律所有冲突。把我调离石油公司团队。"' }, consequence: { en: '🛡️ By the Book! Partners respect integrity. You step aside. Drama avoided.', th: '🛡️ ตามระเบียบ! หุ้นส่วนเคารพ คุณหลบมา ดราม่าจบ', zh: '🛡️ 照章办事！合伙人尊重。你靠边站。避免戏剧性。' }, stats: { competence: 30, ethics: 50, leadership: 25, innovation: 15 } }
        ]
    },



    {
        id: 'law_004',
        text: {
            en: '⏳ The Missed Deadline: Server crash meant you missed a 5:00 PM filing. Clerk says it\'s rejected. Client (single mom) will lose everything. Clerk implies:"Backdate the timestamp... I didn\'t see anything."',
            th: '⏳ เส้นตาย: เซิร์ฟเวอร์ล่มยื่นเอกสารไม่ทัน 5 โมง เสมียนไม่รับ ลูกความ (แม่เลี้ยงเดี่ยว) จะเสียทุกอย่าง เสมียนบอกใบ้:"แก้ย้อนหลังสิ... ผมไม่เห็นนะ"',
            zh: '⏳ 错过截止：服务器崩溃导致错过下午5点提交。书记员拒收。客户（单亲妈妈）将失去一切。书记员暗示："倒填时间……我没看见。"'
        },
        options: [
            { id: 'A', text: { en: '📅 Backdate it:"Adjust metadata. Justice demands she gets a hearing."', th: '📅 แก้ย้อนหลัง:"แก้เมตาดาต้า ความยุติธรรมต้องมาก่อน"', zh: '📅 倒填："调整元数据。正义要求她得到听证。"' }, consequence: { en: '✅ Motion Accepted, Soul Tainted. You win, but committed forgery. You fear IT audits forever. Slippery slope started.', th: '✅ ผ่านแต่จิตตก! ชนะแต่ปลอมเอกสาร ผวาโดนตรวจสอบตลอดไป เริ่มก้าวสู่ด้านมืด', zh: '✅ 接受但污点。赢了但伪造。永远害怕审计。滑坡开始。' }, stats: { competence: 40, ethics: -40, leadership: 10, innovation: 20 } },
            { id: 'B', text: { en: '📝 Please the Court:"File emergency motion explaining crash. Beg for mercy."', th: '📝 ขอศาล:"ยื่นคำร้องฉุกเฉินอธิบายเหตุขัดข้อง ขอกราบกราน"', zh: '📝 请求法庭："提交紧急动议解释崩溃。乞求宽恕。"' }, consequence: { en: '⚖️ Risky Honesty! Judge yells at you but accepts it. Embarrassing but ethical.', th: '⚖️ ซื่อสัตว์แต่เสี่ยง! โดนด่าแต่ศาลรับ อายแต่ถูกต้อง', zh: '⚖️ 冒险诚实！法官吼你但接受。尴尬但道德。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '💰 Pay Client:"My fault. I\'ll pay her rent ($24k). Don\'t forge."', th: '💰 จ่ายเอง:"ความผิดฉัน ฉันจ่ายค่าเช่าให้ ($24k) ไม่ปลอมเอกสาร"', zh: '💰 赔付客户："我的错。我付房租（2.4万）。不伪造。"' }, consequence: { en: '💸 Expensive Lesson. Savings gone. Partners think you are weak."We don\'t pay clients."', th: '💸 บทเรียนแพง เงินเก็บเกลี้ยง หุ้นส่วนมองว่าอ่อน"เราไม่จ่ายให้ลูกค้า"', zh: '💸 昂贵教训。积蓄没了。合伙人觉得你软。"我们不给客户钱。"' }, stats: { competence: 20, ethics: 40, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🗣️ Blame Clerk:"Affidavit saying Clerk lost it. Throw him under bus."', th: '🗣️ โทษเสมียน:"สาบานว่าเสมียนทำหาย โยนขี้ให้เขา"', zh: '🗣️ 怪书记员："宣誓说书记员弄丢了。让他背锅。"' }, consequence: { en: '🔥 Bridge Burned! Judge believes you. But Clerk\'s office hates you. Future filings get"lost."', th: '🔥 เผาสะพาน! ศาลเชื่อ แต่เสมียนเกลียด งานหน้าเอกสาร"หาย"อีกแน่', zh: '🔥 过河拆桥！法官信你。但书记员恨你。以后的文件会"丢失"。' }, stats: { competence: 35, ethics: -30, leadership: -20, innovation: 20 } }
        ]
    },



    {
        id: 'law_005',
        text: {
            en: '🎁 The Bribe?: Wealthy client sends $15k Rolex with note:"Thanks for believing in me. Let\'s win tomorrow."He has bribe history. Keeping it looks bad.',
            th: '🎁 สินบน?: ลูกค้ารวยส่งโรเล็กซ์ $15k มาให้"ขอบคุณที่เชื่อใจ พรุ่งนี้ชนะกัน"เขามีประวัติจ่ายใต้โต๊ะ รับไว้คงดูไม่ดี',
            zh: '🎁 贿赂？：富豪客户送1.5万劳力士："感谢信任。明天必胜。"他有行贿史。收下很难看。'
        },
        options: [
            { id: 'A', text: { en: '💎 Wear it:"It\'s a gift. Builds confidence."', th: '💎 ใส่เลย:"ของขวัญ สร้างความมั่นใจ"', zh: '💎 戴上："礼物。建立信心。"' }, consequence: { en: '⚠️ Compromised! He sees it and owns you. Mentions it when demanding unethical tactics. Accomplice.', th: '⚠️ ติดกับ! เขาเห็นแล้วถือไพ่เหนือกว่า บีบให้ทำผิดจรรยาบรรณ กลายเป็นผู้สมรู้ร่วมคิด', zh: '⚠️ 妥协！他看见了并控制你。要求不道德战术时要挟。同谋。' }, stats: { competence: 20, ethics: -30, leadership: -20, innovation: 10 } },
            { id: 'B', text: { en: '📦 Return it:"Send back via courier. Firm policy. No gray areas."', th: '📦 ส่งคืน:"ส่งกลับด่วน นโยบายบริษัท ไม่มีสีเทา"', zh: '📦 退回："快递退回。律所政策。无灰色地带。"' }, consequence: { en: '❄️ Chill. He is cold in court. Cooperation stops. You lose case, but stay clean.', th: '❄️ เย็นชา เขาเมินคุณ การร่วมมือจบลง แพ้คดีแต่ตัวสะอาด', zh: '❄️ 冷淡。法庭上他对你冷淡。合作停止。输了官司，但清白。' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Safe Keeping:"Put in safe. Tell him: \'Holding until trial ends.\' Defer."', th: '🤝 เก็บรักษา:"เข้าเซฟ บอกเขา \'เก็บให้จบงานก่อน\' เลื่อนไปก่อน"', zh: '🤝 保管："放保险箱。告诉他：\'保管到审判结束。\'推迟。"' }, consequence: { en: '🧠 Smart Dodge. He accepts. You win. Return it later citing policy. Crisis averted.', th: '🧠 ฉลาดหลบ เขายอมรับ ชนะคดีแล้วค่อยคืน อ้างนโยบาย รอดวิกฤต', zh: '🧠 聪明闪避。他接受。赢了。事后退还。危机解除。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 40 } },
            { id: 'D', text: { en: '💸 Deduct from Bill:"Nice watch! I\'ll deduct $15k from your legal fees."', th: '💸 หักค่าจ้าง:"นาฬิกาสวย! ผมหัก $15k ออกจากค่าทนายนะ"', zh: '💸 抵扣账单："好表！我从律师费里扣1.5万。"' }, consequence: { en: '🔥 Power Move! Converted bribe to revenue. Partners love it. You control the shark.', th: '🔥 คุมเกม! เปลี่ยนสินบนเป็นรายได้ หุ้นส่วนชอบ คุณคุมฉลามอยู่หมัด', zh: '🔥 强力一击！贿赂变收入。合伙人喜欢。你控制了大鳄。' }, stats: { competence: 50, ethics: 20, leadership: 50, innovation: 50 } }
        ]
    },



    {
        id: 'law_006',
        text: {
            en: '🖋️ The Ghostwriter: Partner demands you write 50-page article under HIS name only. Hint: It\'s the price for the Google account assignment.',
            th: '🖋️ นักเขียนเงา: หุ้นส่วนสั่งให้เขียนบทความ 50 หน้าในชื่อ"เขา"คนเดียว บอกใบ้ว่าเป็นราคาแลกกับบัญชี Google',
            zh: '🖋️ 代笔：合伙人让你写50页文章，只署"他"的名。暗示这是接手谷歌账户的代价。'
        },
        options: [
            { id: 'A', text: { en: '📝 Do it silently:"Write masterpiece. Take credit later. Want that account."', th: '📝 ทำเงียบๆ:"เขียนให้เทพ ยอมไปก่อน อยากได้งานนั้น"', zh: '📝 默默做："写杰作。以后再说。想要账户。"' }, consequence: { en: '✅ Got Account. But he treats you like a secretary now."Write my speech too?"', th: '✅ ได้บัญชี แต่โดนมองเป็นเลขา"เขียนสุนทรพจน์ให้ด้วยสิ?"', zh: '✅ 得到账户。但他把你当秘书。"也给我写演讲稿？"' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Decline:"Too busy with billable work."', th: '🛑 ปฏิเสธ:"ยุ่งกับงานลูกค้าครับ"', zh: '🛑 拒绝："忙于计费工作。"' }, consequence: { en: '📉 Sidelined. Account goes to rival Sarah."She is more dedicated."', th: '📉 โดนดอง งานไปตกที่ซาร่า"เธอทุ่มเทกว่า"', zh: '📉 靠边站。账户给了莎拉。"她更敬业。"' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '🤝 Co-Author:"I\'ll do it, but let\'s make it \'Partner & Associate\'. Good for mentoring image."', th: '🤝 เขียนร่วม:"ทำให้ แต่ใส่ชื่อคู่เถอะ ภาพลักษณ์พี่สอนน้องไง"', zh: '🤝 共同署名："我写，但署\'合伙人与律师\'。对指导形象好。"' }, consequence: { en: '🎲 Risk taken. He agrees. You get credit AND account. Respect earned.', th: '🎲 เสี่ยงแต่คุ้ม เขาตกลง ได้เครดิตและได้งาน ได้ใจ', zh: '🎲 冒险。他同意。得到荣誉和账户。赢得尊重。' }, stats: { competence: 45, ethics: 45, leadership: 50, innovation: 30 } },
            { id: 'D', text: { en: '📤 Outsource:"Pay student $500 to write it. Partner won\'t know."', th: '📤 จ้างเขียน:"จ้างนักศึกษา $500 เขียน หุ้นส่วนไม่รู้หรอก"', zh: '📤 外包："花500雇学生写。合伙人不知道。"' }, consequence: { en: '💀 Plagiarism! Student copied Wikipedia. Partner humiliated. You are fired.', th: '💀 ลอกผลงาน! เด็กก๊อป Wiki มา หุ้นส่วนหน้าแตก คุณโดนไล่ออก', zh: '💀 抄袭！学生抄维基。合伙人出丑。你被解雇。' }, stats: { competence: 10, ethics: -20, leadership: -10, innovation: 40 } }
        ]
    },



    {
        id: 'law_007',
        text: {
            en: '⏳ Discovery Dump: Opposing counsel sends 100k unindexed pages at 4PM Friday. Trial is Monday."Dump Truck"strategy. Judge hates delays.',
            th: '⏳ ถล่มเอกสาร: ฝั่งตรงข้ามส่ง 100,000 หน้าไม่ได้เรียงตอน 4 โมงเย็นวันศุกร์ ขึ้นศาลวันจันทร์ ผู้พิพากษาเกลียดการเลื่อน',
            zh: '⏳ 证据倾倒：对方周五下午4点发来10万页未索引文件。周一开庭。法官讨厌延期。'
        },
        options: [
            { id: 'A', text: { en: '🤖 AI Scan:"Upload to legal AI. Find keywords. Sleep Sunday."', th: '🤖 สแกน AI:"ให้ AI หาคีย์เวิร์ด นอนพักวันอาทิตย์"', zh: '🤖 AI扫描："上传AI。找关键词。周日睡。"' }, consequence: { en: '✅ Tech Win! AI finds smoking gun. You shock them Monday. Efficiency praised.', th: '✅ ชนะด้วยเทค! AI เจอของดี ฝั่งนู้นช็อก ได้รับคำชม', zh: '✅ 科技赢！AI发现证据。周一震惊他们。效率受赞。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '👥 Weekend Army:"Call in 10 juniors. Pizza. Read every page."', th: '👥 เกณฑ์คน:"เรียกเด็ก 10 คน สั่งพิซซ่า อ่านทุกหน้า"', zh: '👥 周末大军："叫10个新人。披萨。读每一页。"' }, consequence: { en: '📉 Burnout. Details missed due to fatigue. 3 juniors quit later. Toxic.', th: '📉 ไหม้เกรียม หลุดรายละเอียดเพราะเหนื่อย เด็กลาออก 3 คน เป็นพิษ', zh: '📉 倦怠。疲劳漏细节。3新人辞职。有毒。' }, stats: { competence: 30, ethics: 30, leadership: -20, innovation: 10 } },
            { id: 'C', text: { en: '⚖️ Sanctions:"File motion for \'Bad Faith\'. Demand delay and fine."', th: '⚖️ ฟ้องกลับ:"ยื่นเรื่อง \'เจตนาไม่สุจริต\' ขอเลื่อนและปรับ"', zh: '⚖️ 制裁："动议\'恶意\'。要求延期罚款。"' }, consequence: { en: '⚔️ Ugly Fight. Delayed 2 weeks. They get fined. But Judge annoyed at everyone.', th: '⚔️ ทะเลาะน่าเกลียด เลื่อน 2 อาทิตย์ โดนปรับ แต่ศาลรำคาญทุกคน', zh: '⚔️ 丑陋争斗。延2周。罚款。法官烦所有人。' }, stats: { competence: 40, ethics: 45, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🤷 Wing it:"Read summaries. Confidence wins."', th: '🤷 มั่วไป:"อ่านสรุป ความมั่นใจชนะทุกสิ่ง"', zh: '🤷 混："读摘要。自信必胜。"' }, consequence: { en: '💀 Ambush! Missed key doc. They surprise you. You look amateur.', th: '💀 โดนซุ่ม! พลาดเอกสารสำคัญ โดนสวนหน้าหงาย ดูเป็นมือสมัครเล่น', zh: '💀 伏击！漏关键文件。被偷袭。像业余。' }, stats: { competence: 10, ethics: 20, leadership: 10, innovation: 10 } }
        ]
    },



    {
        id: 'law_008',
        text: {
            en: '❤️ Dating the Enemy: You date the son of rival firm\'s Managing Partner. Policy requires disclosure. If you tell, you lose big cases.',
            th: '❤️ คบศัตรู: แฟนคุณเป็นลูกหุ้นส่วนบริษัทคู่แข่ง กฎบอกต้องแจ้ง ถ้าแจ้งโดนปลดจากงานใหญ่',
            zh: '❤️ 约会敌人：你和对手律所老板儿子约会。政策要求披露。说了就丢大案。'
        },
        options: [
            { id: 'A', text: { en: '📢 Disclose:"Rules are rules. Tell HR."', th: '📢 แจ้ง:"กฎคือกฎ บอก HR"', zh: '📢 披露："规则即规则。告HR。"' }, consequence: { en: '🛡️ Trusted. Taken off 1 case, kept on 10. Partner respects integrity. Future networking win.', th: '🛡️ ได้ใจ โดนปลด 1 แต่เหลือ 10 แฟนเคารพ อนาคตดี', zh: '🛡️ 信任。撤1案，留10案。伴侣尊重。未来人脉赢。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '🤫 Secret:"Private life. Will tell if engaged."', th: '🤫 ความลับ:"เรื่องส่วนตัว หมั้นแล้วค่อยบอก"', zh: '🤫 秘密："私生活。订婚再说。"' }, consequence: { en: '💣 Scandal. Spotted at dinner."Spying?"Fired for lack of candour.', th: '💣 อื้อฉาว โดนเห็นตอนกินข้าว"เป็นสายเหรอ?"โดนไล่ออก', zh: '💣 丑闻。晚餐被撞见。"间谍？"因不诚实开除。' }, stats: { competence: 30, ethics: -20, leadership: -10, innovation: 10 } },
            { id: 'C', text: { en: '💔 Break Up:"Career first. Can\'t risk it."', th: '💔 เลิก:"งานมาก่อน เสี่ยงไม่ได้"', zh: '💔 分手："事业第一。不能冒险。"' }, consequence: { en: '⛄ Cold Heart. Rapid promotion. Very lonely. Success without soul.', th: '⛄ ใจน้ำแข็ง เลื่อนตำแหน่งไว เหงาจัด ความสำเร็จไร้วิญญาณ', zh: '⛄ 冷。升职快。孤独。无灵魂成功。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 0 } },
            { id: 'D', text: { en: '🕵️ Leverage:"Use pillow talk to gather intel."', th: '🕵️ ใช้ประโยชน์:"ล้วงความลับบนเตียง"', zh: '🕵️ 利用："利用枕边风搜集情报。"' }, consequence: { en: '⚖️ Insider Trading. Works until you slip. Disbarred and dumped.', th: '⚖️ ข้อมูลวงใน รุ่งจนกระทั่งพลาด โดนยึดตั๋วและโดนทิ้ง', zh: '⚖️ 内幕。奏效直到失误。吊销执照被甩。' }, stats: { competence: 40, ethics: -50, leadership: -30, innovation: 30 } }
        ]
    },



    {
        id: 'law_009',
        text: {
            en: '🍷 The Drunk Judge: In a sidebar, the judge smells heavily of whiskey and is slurring speech. He is making bad rulings against your client.',
            th: '🍷 ผู้พิพากษาเมา: ตอนคุยข้างบัลลังก์ ได้กลิ่นเหล้าหึ่งจากผู้พิพากษา พูดลิ้นพัน ตัดสินให้คุณเสียเปรียบ',
            zh: '🍷 醉酒法官：庭侧会议，法官浑身酒气，说话含糊。他对你的客户做出不利裁决。'
        },
        options: [
            { id: 'A', text: { en: '🤐 Say Nothing:"He is powerful. Don\'t embarrass him. Appeal later."', th: '🤐 เงียบ:"เขามีอำนาจ อย่าหักหน้า ค่อยอุทธรณ์"', zh: '🤐 沉默："他有权。别让他难堪。以后上诉。"' }, consequence: { en: '❌ Client suffers. Verdict guilty. Appeal takes 2 years. Client in jail. Cowardice.', th: '❌ ลูกค้าซวย ผิดจริง อุทธรณ์ 2 ปี ลูกค้าติดคุก ขี้ขลาด', zh: '❌ 客户受苦。判有罪。上诉2年。客户坐牢。懦弱。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🗣️ Report to Chief Judge:"Immediate recess. Go to Chief Judge. Mistrial."', th: '🗣️ ฟ้องหัวหน้าศาล:"ขอพักด่วน ไปหาหัวหน้าศาล ขอเปลี่ยนตัว"', zh: '🗣️ 报告首席法官："立即休庭。找首席。无效审判。"' }, consequence: { en: '⚡ Nuclear Option. Judge removed. Mistrial. You are a hero to the Bar, but feared by other judges.', th: '⚡ ระเบิดลง ผู้พิพากษาปลิว คดีโมฆะ ฮีโร่สภาทนาย แต่ศาลอื่นกลัว', zh: '⚡ 核选项。法官撤职。重审。律师界英雄，但其他法官怕你。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '📹 Record it:"Surreptitiously record audio on phone. Leak to press."', th: '📹 อัดเสียง:"แอบอัดเสียง ปล่อยนักข่าว"', zh: '📹 录音："偷偷录音。泄露给媒体。"' }, consequence: { en: '💀 Contempt of Court. Illegal recording in court. You get arrested. Career over.', th: '💀 ละเมิดอำนาจศาล อัดเสียงผิดกฎหมาย โดนจับ อนาคตจบ', zh: '💀 藐视法庭。非法录音。被捕。生涯结束。' }, stats: { competence: 10, ethics: -10, leadership: -20, innovation: 10 } },
            { id: 'D', text: { en: '🤝 Careful Request:"Your Honor, you seem unwell. Request continuance for health?"', th: '🤝 เตือนอ้อมๆ:"ท่านครับ ท่านดูไม่สบาย ขอเลื่อนเพื่อสุขภาพไหม?"', zh: '🤝 小心请求："法官大人，您看来不适。因健康请求延期？"' }, consequence: { en: '✅ Graceful Exit. He realizes you know. Grants recess. Owes you a favor. Case handled fairly later.', th: '✅ ทางลงสวยๆ เขารู้ตัวว่าคุณรู้ สั่งพัก ติดหนี้บุญคุณ คดีเดินต่ออย่างแฟร์ๆ', zh: '✅体面退出。他意识到你知道。休庭。欠你人情。后来公正处理。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 } }
        ]
    },



    {
        id: 'law_010',
        text: {
            en: '📢 The Leaker: You find out a paralegal is selling case info to the tabloids. She is a single mom needing money for surgery.',
            th: '📢 หนอนบ่อนไส้: จับได้ว่าผู้ช่วยขายข้อมูลให้นักข่าวซุบซิบ เธอเป็นแม่เลี้ยงเดี่ยวหาเงินผ่าตัด',
            zh: '📢 泄密者：发现律师助理向小报卖消息。单亲妈，需钱手术。'
        },
        options: [
            { id: 'A', text: { en: '🔥 Fire & Prosecute:"Make an example. Jail time."', th: '🔥 ไล่ออกและดำเนินคดี:"เชือดไก่ให้ลิงดู เอาเข้าคุก"', zh: '🔥 开除并起诉："杀鸡儆猴。坐牢。"' }, consequence: { en: '🛡️ Security. Firm is safe. Staff terrified. You are seen as heartless.', th: '🛡️ ปลอดภัย บริษัทรอด พนักงานกลัว คุณดูใจร้าย', zh: '🛡️ 安全。律所安全。员工恐惧。你被视为无情。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🚪 Quiet Firing:"Sign NDA, leave now, no police. Here is severance."', th: '🚪 ไล่ออกเงียบๆ:"เซ็น NDA ออกไป ไม่แจ้งตำรวจ เอานี่เงินชดเชย"', zh: '🚪 安静解雇："签NDA，走人，不报警。这是遣散费。"' }, consequence: { en: '✅ Mercy. Info stops leaking. She gets life together. Firm reputation intact.', th: '✅ เมตตา ข้อมูลหยุดรั่ว เธอได้ตั้งตัว ชื่อเสียงบริษัทไม่เสีย', zh: '✅ 仁慈。泄露停止。她重整生活。律所声誉完好。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '💰 Pay for Surgery:"I\'ll loan you the money. Stop selling info."', th: '💰 จ่ายค่าผ่าตัด:"ฉันให้ยืมเงิน เลิกขายข้อมูลซะ"', zh: '💰 付手术费："借你钱。别卖消息。"' }, consequence: { en: '⚠️ Risk. She stays. Accused of blackmail later."You paid me to stay quiet?"Messy.', th: '⚠️ เสี่ยง เธออยู่ต่อ วันหลังโดนหาว่าแบล็คเมล์"คุณจ้างปิดปากเหรอ?"ยุ่งเหยิง', zh: '⚠️ 风险。她留下。后来被指控勒索。"你付钱封口？"乱。' }, stats: { competence: 20, ethics: 40, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '🕵️ Feed Disinfo:"Use her. Feed fake info to tabloids through her."', th: '🕵️ ให้ข่าวลวง:"ใช้ประโยชน์ ให้ข้อมูลปลอมกับนักข่าวผ่านเธอ"', zh: '🕵️ 喂假消息："利用她。通过她发假消息。"' }, consequence: { en: '♟️ Master Manipulator. Tabloids print lies. You sue them for libel. Triple win.', th: '♟️ จอมบงการ ข่าวลงเรื่องเท็จ คุณฟ้องหมิ่นประมาท ชนะสามต่อ', zh: '♟️ 操纵大师。小报登假话。你起诉诽谤。三赢。' }, stats: { competence: 50, ethics: -20, leadership: 30, innovation: 50 } }
        ]
    },

    // SECTION 2: LITIGATION & COURTROOM DRAMA (Questions 11-20),



    {
        id: 'law_011',
        text: {
            en: '🏛️ Jury Selection: Defending a tattoo artist accused of assaulting a cop. A potential juror is a conservative librarian holding a Malcolm X book. Consultant says"Strike her."Intuition says"Keep her."',
            th: '🏛️ คัดลูกขุน: แก้ต่างให้ช่างสักที่ต่อยตำรวจ ลูกขุนเป็นบรรณารักษ์หัวอนุรักษ์แต่ถือหนังสือ Malcolm X ที่ปรึกษาบอก"ตัดออก"สัญชาตญาณบอก"เก็บไว้"',
            zh: '🏛️ 陪审团遴选：为袭击警察的纹身师辩护。一位潜在陪审员是保守派图书管理员，但手里拿着马尔科姆·X的书。顾问说"剔除"。直觉说"留下"。'
        },
        options: [
            { id: 'A', text: { en: '🧠 Trust Gut:"Keep her. She\'s a wildcard."', th: '🧠 เชื่อเซนส์:"เก็บไว้ เธอคือตัวแปร"', zh: '🧠 信直觉："留下。她是变数。"' }, consequence: { en: '🎯 Bullseye! She becomes foreman. Sways jury to"Not Guilty."Legendary win.', th: '🎯 เข้าเป้า! เธอเป็นหัวหน้าลูกขุน กล่อมทุกคนให้ยกฟ้อง ชนะแบบตำนาน', zh: '🎯 正中靶心！她成主席。引导判无罪。传奇胜利。' }, stats: { competence: 50, ethics: 35, leadership: 40, innovation: 45 } },
            { id: 'B', text: { en: '📊 Trust Data:"Strike her. Too risky."', th: '📊 เชื่อข้อมูล:"ตัดออก เสี่ยงไป"', zh: '📊 信数据："剔除。太冒险。"' }, consequence: { en: '⚖️ Safe Loss. You get a conservative jury. Convicted. Safe strategy, bad result.', th: '⚖️ เซฟแต่แพ้ ได้ลูกขุนหัวเก่า ลูกความติดคุก แผนปลอดภัยแต่ผลแย่', zh: '⚖️ 安全输。保守陪审团。定罪。策略安全结果差。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 15 } },
            { id: 'C', text: { en: '🗣️ Grill Her:"Challenge her bias publicly."', th: '🗣️ ซักไซ้:"ท้าทายกลางศาลเรื่องอคติ"', zh: '🗣️ 盘问："公然质疑她的偏见。"' }, consequence: { en: '📉 Alienation. She hates you. Stays on jury. Convicts out of spite.', th: '📉 สร้างศัตรู เธอเกลียดคุณ ได้เป็นลูกขุน ตัดสินผิดเพราะแค้น', zh: '📉 疏远。她恨你。留下定罪。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 20 } },
            { id: 'D', text: { en: '🔄 Strike CEO Instead:"Keep librarian, remove the rich CEO."', th: '🔄 ตัด CEO:"เก็บบรรณารักษ์ ตัดซีอีโอรวยๆ ออก"', zh: '🔄 剔除CEO："留管理员，剔除富豪。"' }, consequence: { en: '✅ Mistrial. Jury hung. Prosecutor offers deal. Good enough.', th: '✅ โมฆะ ลูกขุนเสียงแตก อัยการยอมเจรจา ถือว่าดี', zh: '✅ 流审。陪审团僵持。检方求和。够好了。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 30 } }
        ]
    },



    {
        id: 'law_012',
        text: {
            en: '🚓 The Chief\'s Son: Police Chief\'s son gets a DUI. Chief implies:"Help my boy pro bono, and maybe your other clients get treated nicely."',
            th: '🚓 ลูกสารวัตร: ลูกชายสารวัตรเมาแล้วขับ สารวัตรเปรย:"ช่วยลูกผมฟรีๆ แล้วลูกความคนอื่นของคุณอาจจะอยู่สบายขึ้น"',
            zh: '🚓 局长儿子：局长儿子酒驾。局长暗示："免费帮我儿，以后善待你客户。"'
        },
        options: [
            { id: 'A', text: { en: '🤝 Take the Deal:"I\'ll handle it. Favor for a favor."', th: '🤝 รับงาน:"จัดให้ บุญคุณต้องทดแทน"', zh: '🤝 交易："我来办。人情换人情。"' }, consequence: { en: '🛡️ Protection. Son walks. Your clients get VIP treatment in jail. You own the police.', th: '🛡️ คุ้มครอง ลูกสารวัตรรอด ลูกความเรา VVIP ในคุก คุณคุมตำรวจได้', zh: '🛡️ 保护。儿子没事。客户狱中VIP。你控制警察。' }, stats: { competence: 40, ethics: -30, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Refuse:"I charge standard rates. No favors."', th: '🛑 ปฏิเสธ:"คิดราคาปกติ ไม่มีการขอ"', zh: '🛑 拒绝："按标准收费。没人情。"' }, consequence: { en: '❄️ Harassment. Police start ticketing you. Your clients get"lost"paperwork. Hard mode.', th: '❄️ โดนแกล้ง ตำรวจจ้องจับผิดเอกสารลูกความ"หาย"ชีวิตยาก', zh: '❄️ 骚扰。警察开罚单。客户文件"丢失"。困难模式。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '📝 Pro Bono Logic:"I\'ll do it as official Pro Bono work. No quid pro quo explicitly."', th: '📝 อ้างงานกุศล:"ทำให้ในนามงานกุศล ไม่ใช่การแลกเปลี่ยน"', zh: '📝 公益理由："按官方公益做。不明说交换。"' }, consequence: { en: '✅ Plausible Deniability. You help. Chief is happy. Paperwork is clean. Smart corruption.', th: '✅ เนียน ช่วยได้ สารวัตรพอใจ เอกสารขาวสะอาด โกงแบบฉลาด', zh: '✅ 推诿。帮了忙。局长高兴。文书干净。聪明腐败。' }, stats: { competence: 50, ethics: -10, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '📢 Report Attempt:"Report Chief for attempted bribery."', th: '📢 แจ้งจับ:"รายงานสารวัตรข้อหาให้สินบน"', zh: '📢 举报："举报局长行贿企图。"' }, consequence: { en: '💣 War. Chief suspended. Police force targets you. Tires slashed. You move cities.', th: '💣 สงคราม สารวัตรโดนพักงาน ตำรวจจองเวร โดนกรีดยาง ต้องย้ายเมือง', zh: '💣 战争。局长停职。警察针对你。爆胎。你搬家。' }, stats: { competence: 20, ethics: 60, leadership: 10, innovation: 0 } }
        ]
    },



    {
        id: 'law_013',
        text: {
            en: '👶 Junior\'s Mistake: Your junior associate forgot to cite a key precedent. The judge is grilling you. Do you blame the junior (sitting next to you)?',
            th: '👶 ความผิดลูกน้อง: เด็กในทีมลืมอ้างอิงคดีสำคัญ ผู้พิพากษากำลังย่างสดคุณ จะโทษเด็ก (ที่นั่งข้างๆ) ไหม?',
            zh: '👶 下属错误：初级律师忘了引用关键判例。法官盘问你。怪下属（就在旁边）吗？'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Take the Heat:"My error, Your Honor. I missed it. I apologize."', th: '🛡️ รับจบ:"ผมผิดเองครับท่าน ผมพลาดไป ขออภัยครับ"', zh: '🛡️ 扛雷："我的错法官。我漏了。抱歉。"' }, consequence: { en: '🏆 Loyalty Earned. Judge scolds you. But Junior worships you forever. Work output doubles.', th: '🏆 ได้ใจลูกน้อง โดนด่าแต่ลูกน้องเทิดทูน งานเดินเร็วขึ้น 2 เท่า', zh: '🏆 赢得忠诚。法官骂你。下属崇拜。产出翻倍。' }, stats: { competence: 40, ethics: 50, leadership: 60, innovation: 10 } },
            { id: 'B', text: { en: '👉 Blame Junior:"Mr. Smith prepared this brief. He clearly missed it."', th: '👉 โบ้ยลูกน้อง:"คุณสมิธเตรียมเอกสารครับ เขาคงพลาด"', zh: '👉 怪下属："史密斯写的。他显然漏了。"' }, consequence: { en: '❄️ Morale Zero. Judge thinks you are petty. Junior quits. Team fears you.', th: '❄️ ทีมแตก ศาลมองว่าใจแคบ เด็กออก ทีมกลัว', zh: '❄️ 士气零。法官觉得你小气。下属辞职。团队怕你。' }, stats: { competence: 30, ethics: 20, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🧠 Pivot:"We omitted it intentionally because it\'s distinguishable, Your Honor."', th: '🧠 แถ:"เราจงใจไม่อ้างถึงเพราะบริบทต่างกันครับท่าน"', zh: '🧠 转移："故意略去的，因为有区别，法官。"' }, consequence: { en: '♟️ Quick Thinking. Judge is skeptical but accepts the logic. You saved face for everyone.', th: '🧠 ไหวพริบดี ศาลสงสัยแต่ยอมรับเหตุผล รอดหน้าแหกทั้งทีม', zh: '♟️ 反应快。法官怀疑但接受。保全大家面子。' }, stats: { competence: 60, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🤐 Freeze:"Stutter and look confused."', th: '🤐 เอ๋อ:"ติดอ่าง ทำหน้างง"', zh: '🤐 僵住："结巴，一脸困惑。"' }, consequence: { en: '📉 Embarrassment. Judge lectures you on preparation. Client loses confidence.', th: '📉 ขายขี้หน้า โดนเทศนายาว ลูกค้าหมดศรัทธา', zh: '📉 尴尬。法官训话。客户失信。' }, stats: { competence: 10, ethics: 30, leadership: -10, innovation: 0 } }
        ]
    },



    {
        id: 'law_014',
        text: {
            en: '💸 Fee Dispute: Client owes $100k but lost the case. Refuses to pay:"You guaranteed a win!"(You didn\'t). Sue them?',
            th: '💸 เบี้ยวค่าจ้าง: ลูกค้าติดหนี้แสนดอลล์แต่แพ้คดี ไม่ยอมจ่ายอ้าง"คุณรับประกันผล!"(เปล่าซะหน่อย) ฟ้องไหม?',
            zh: '💸 费用纠纷：客户欠10万但在输了。拒付："你保证过的！"（你没）。起诉？'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Sue for Fees:"file a collection lawsuit. I earned that money."', th: '⚖️ ฟ้องทวงหนี้:"ฟ้องเรียกเก็บเงิน ฉันทำงานก็ต้องได้เงิน"', zh: '⚖️ 起诉：提起收欠款诉讼。我应得的。' }, consequence: { en: '💰 Money Retrieved, Rep Ruined. You get paid. But client badmouths you online."Greedy loser."', th: '💰 ได้เงินแต่เสียชื่อ ลูกค้าด่าลงเน็ต"ทนายหน้าเงินห่วยแตก"', zh: '💰 钱拿到了但名声毁了。你拿到了报酬，但客户在网上散布你的负面消息。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Write it Off:"Ignore it. Tax write-off. Not worth the bad PR."', th: '🛑 ยกหนี้:"ช่างมัน หักภาษีเอา ไม่คุ้มเสียชื่อ"', zh: '🛑 销账：忽略它。作为税务核销。不值得为此冒名誉风险。' }, consequence: { en: '📉 Financial Hit. Partners annoyed at lost revenue. But brand remains premium.', th: '📉 เข้าเนื้อ หุ้นส่วนบ่นเงินหาย แต่แบรนด์ยังดูแพง', zh: '📉 财务损失。合伙人对收入损失感到恼火，但你的品牌形象保持了高端。' }, stats: { competence: 20, ethics: 50, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Settlement:"Pay 50% and we walk away. Or I sue."', th: '🤝 คนละครึ่ง:"จ่าย 50% แล้วจบ ไม่งั้นฟ้อง"', zh: '🤝 和解：支付 50%，我们就此两清。否则我就起诉。' }, consequence: { en: '✅ Recovery. They pay $50k to avoid court. Reasonable outcome.', th: '✅ ได้คืนบ้าง ยอมจ่าย 5 หมื่นเลี่ยงศาล ผลลัพธ์สมเหตุสมผล', zh: '✅ 回款。他们为了避免上庭支付了 5 万美元。合理的结果。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🕵️ Liens:"Place a lien on their property. Play hardball quietly."', th: '🕵️ ยึดทรัพย์:"ขอหมายอายัดทรัพย์สิน เล่นแรงแบบเงียบๆ"', zh: '🕵️ 留置权："扣押财产。悄悄强硬。"' }, consequence: { en: '🦁 Effective. They pay quickly to sell their house. You are feared.', th: '🦁 ได้ผล รีบจ่ายทันทีเพราะจะขายบ้าน คนกลัวคุณ', zh: '🦁 有效。为卖房赶紧付。被人惧怕。' }, stats: { competence: 60, ethics: 30, leadership: 40, innovation: 30 } }
        ]
    },



    {
        id: 'law_015',
        text: {
            en: '🎤 Cross Exam Trap: Witness is lying. You have a photo of him at a strip club proving it, but showing it ruins his marriage (wife is watching).',
            th: '🎤 กับดักซักค้าน: พยานโกหก คุณมีรูปเขาเที่ยวบาร์เปลื้องผ้าเป็นหลักฐาน แต่ถ้าโชว์คือบ้านแตก (เมียนั่งดูอยู่)',
            zh: '🎤 交叉询问：证人撒谎。你有他在脱衣舞俱乐部的照片。展示会毁他婚姻（老婆在场）。'
        },
        options: [
            { id: 'A', text: { en: '💣 Show Photo:"Destroy him. Win at all costs."', th: '💣 โชว์รูป:"ขยี้ให้เละ ชนะให้ได้"', zh: '💣 展示："毁了他。不惜代价。"' }, consequence: { en: '🏆 Brutal Win. Witness suicide later. You are"The Butcher."Nightmares.', th: '🏆 ชนะโหด พยานฆ่าตัวตายทีหลัง ฉายา"นักเชือด"ฝันร้าย', zh: '🏆 残酷赢。证人自杀。你是"屠夫"。噩梦。' }, stats: { competence: 50, ethics: -20, leadership: 20, innovation: 30 } },
            { id: 'B', text: { en: '🕵️ The Hint:"Ask if he was at \'Club 99\'. He knows you know."', th: '🕵️ บอกใบ้:"ถามว่าไป \'Club 99\' มาไหม เขารู้ว่าเรารู้"', zh: '🕵️ 暗示："问去没去\'99俱乐部\'。他懂的。"' }, consequence: { en: '🧠 Checkmate. He retracts lie to save marriage. You win elegantly.', th: '🧠 รุกฆาต เขากลับคำให้การเพื่อรักษาบ้าน คุณชนะสวยๆ', zh: '🧠 将死。为保婚姻改口。优雅赢。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 45 } },
            { id: 'C', text: { en: '🤝 Side Deal:"Show lawyer privately. \'Withdraw him or I show it.\'"', th: '🤝 ดีลหลังไมค์:"ให้ทนายดูส่วนตัว \'ถอนตัวซะไม่งั้นโชว์\'"', zh: '🤝 私下交易：给对方律师私下看照片。让他撤走证人，否则我就公开。' }, consequence: { en: '✅ Courtesy. Witness withdrawn. Professional win.', th: '✅ มารยาทงาม พยานถอนตัว ชนะแบบมืออาชีพ', zh: '✅ 礼貌解决。证人被撤回。一个专业的胜利。' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 35 } },
            { id: 'D', text: { en: '🤐 Mercy:"Don\'t use it. Too personal."', th: '🤐 เมตตา:"ไม่ใช้ มันส่วนตัวไป"', zh: '🤐 仁慈："不用。太私密。"' }, consequence: { en: '❌ Loss. Jury believes him. Client convicted because you were nice.', th: '❌ แพ้ ลูกขุนเชื่อเขา ลูกความซวยเพราะคุณใจดี', zh: '❌ 输。陪审团信他。因好心客户定罪。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } }
        ]
    },



    {
        id: 'law_016',
        text: {
            en: '⛳ Judge\'s Golf: Active trial. Judge sees you at country club."Join me for 9 holes? We won\'t discuss the case."Ex parte communication risk.',
            th: '⛳ กอล์ฟกับท่านเปา: ระหว่างพิจารณาคดี เจอผู้พิพากษาที่สนามกอล์ฟ"ออกรอบกันไหม? ไม่คุยเรื่องงาน"เสี่ยงข้อหาคุยนอกรอบ',
            zh: '⛳ 法官高尔夫：庭审期间。法官约球。"打9洞？不谈案子。"单方沟通风险。'
        },
        options: [
            { id: 'A', text: { en: '🏌️ Play:"Sure! Networking opportunity."', th: '🏌️ เล่น:"ได้ครับ! โอกาสสร้างสัมพันธ์"', zh: '🏌️ 打："好！人脉机会。"' }, consequence: { en: '⚠️ Bias. He likes you more. Rulings lean your way. Opponent suspicious.', th: '⚠️ เอียง ท่านชอบคุณ คำตัดสินเริ่มเข้าทาง คู่แข่งสงสัย', zh: '⚠️ 偏见。他喜欢你。裁决偏向你。对手怀疑。' }, stats: { competence: 30, ethics: -10, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Refuse:"Can\'t, Your Honor. Ex parte rules."', th: '🛑 ปฏิเสธ:"ไม่ได้ครับท่าน กฎห้ามคุยนอกรอบ"', zh: '🛑 拒绝："不行法官。单方规则。"' }, consequence: { en: '❄️ Offended. He feels snubbed. Tough rulings tomorrow. Integrity tax.', th: '❄️ เคือง ท่านรู้สึกโดนหักหน้า พรุ่งนี้ตัดสินเขี้ยว ค่าธรรมเนียมความดี', zh: '❄️ 冒犯。他受冷落。明天判决严。正直税。' }, stats: { competence: 30, ethics: 50, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '👥 Invite Opponent:"Only if opposing counsel joins us!"', th: '🤝 ชวนคู่แข่ง:"ต้องให้ทนายอีกฝั่งมาด้วยครับ!"', zh: '👥 邀对手："除非对方律师也来！"' }, consequence: { en: '✅ Perfect. All 3 play. Friendly terms. Judge respects rules.', th: '✅ เพอร์เฟกต์ เล่น 3 คน แฟร์ๆ ท่านเคารพกฎ', zh: '✅ 完美。3人打。友好。法官守规。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 30 } },
            { id: 'D', text: { en: '🏃 Hide:"Pretend I didn\'t see him. Run away."', th: '🏃 หนี:"แกล้งไม่เห็น วิ่งหนี"', zh: '🏃 躲："假装没看见。跑。"' }, consequence: { en: '🤷 Awkward. He saw you running. Thinks you are weird.', th: '🤷 ล่กเลิ่ก ท่านเห็นคุณวิ่ง คิดว่าบ้า', zh: '🤷 尴尬。看见你跑。觉得你怪。' }, stats: { competence: 10, ethics: 30, leadership: 0, innovation: 0 } }
        ]
    },



    {
        id: 'law_017',
        text: {
            en: '🎭 Witness Coaching: Client says"I don\'t remember."If he says that, we lose. Do you write a script for him to memorize?',
            th: '🎭 ติวพยาน: ลูกความบอก"จำไม่ได้"ถ้าพูดงี้แพ้แน่ เขียนบทให้ท่องเลยไหม?',
            zh: '🎭 辅导证人：客户说"不记得"。说了就输。给他写剧本背？'
        },
        options: [
            { id: 'A', text: { en: '📝 Write Script:"Here is what happened. Memorize it."', th: '📝 เขียนบท:"นี่คือสิ่งที่เกิดขึ้น ท่องซะ"', zh: '📝 写剧本："这是发生的。背下来。"' }, consequence: { en: '💀 Subornation. Prosecution breaks him."Did your lawyer write that?"He cracks. Jail for both.', th: '💀 เสี้ยม อัยการต้อน"ทนายเขียนให้ใช่มั้ย?"เขาหลุด คุกคู่', zh: '💀 教唆。检方击溃他。"律师写的？"崩溃。双双坐牢。' }, stats: { competence: 20, ethics: -60, leadership: -20, innovation: 10 } },
            { id: 'B', text: { en: '🧠 Refresh Memory:"Show him photos/docs. \'Does this jogging your memory?\'"', th: '🧠 กระตุ้นความจำ:"ให้ดูรูป/เอกสาร \'พอนึกออกไหม?\'"', zh: '🧠 唤醒记忆：给他看照片或文件。“这能让你想起什么吗？”' }, consequence: { en: '✅ Legal Prep. He remembers genuinely. Testifies well. Win.', th: '✅ ถูกวิธี เขาจำได้จริง ให้การดี ชนะ', zh: '✅ 合法准备。他真的想起来了。表现良好。胜利。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '🎥 Mock Trial:"Grill him for 5 hours until he finds his own answers."', th: '🎥 ซ้อมศาล:"ซัก 5 ชั่วโมงจนกว่าจะตอบได้เอง"', zh: '🎥 模拟审判："盘问5小时直到他找到答案。"' }, consequence: { en: '🌟 Polished. He is bulletproof on stand. Great advocacy.', th: '🌟 เป๊ะเวอร์ บนศาลนิ่งมาก ยอดเยี่ยม', zh: '🌟 打磨。证词无懈可击。很棒。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 20 } },
            { id: 'D', text: { en: '🛑 Do Nothing:"Just tell the truth."', th: '🛑 ไม่ทำไร:"พูดความจริงไปเถอะ"', zh: '🛑 不做："实话实说。"' }, consequence: { en: '📉 Trainwreck. He says"I dunno"50 times. Case lost.', th: '📉 พังพินาศ ตอบ"ไม่รู้"50 รอบ แพ้คดี', zh: '📉 惨剧。说50次"不知"。输。' }, stats: { competence: 10, ethics: 40, leadership: 10, innovation: 0 } }
        ]
    },



    {
        id: 'law_018',
        text: {
            en: '💻 Spoliation: Client asks"What is your document retention policy?"dragging a trash can icon over incriminating emails. He is asking permission to delete.',
            th: '💻 ทำลายหลักฐาน: ลูกความถาม"นโยบายเก็บเอกสารนานแค่ไหน?"เมาส์จ่อถังขยะ จะลบอีเมลผิดกฎหมาย',
            zh: '💻 销毁证据：客户问"文件保留多久？"鼠标拖向垃圾桶。他在求准许删除。'
        },
        options: [
            { id: 'A', text: { en: '👀 Look Away:"Whatever you do before I see it isn\'t exists."', th: '👀 มองทางอื่น:"ทำอะไรก่อนผมเห็นถือว่าไม่มี"', zh: '👀 别过头："我看之前做的都不算。"' }, consequence: { en: '⚠️ Risk. He deletes. Forensic IT finds it anyway."Spoliation of Evidence"charge. You look complicit.', th: '⚠️ เสี่ยง เขาลบ แต่ไอทีกู้ได้ โดนข้อหา"ทำลายหลักฐาน"ซวยไปด้วย', zh: '⚠️ 风险。他删了。IT能恢复。指控"销毁证据"。你像同谋。' }, stats: { competence: 30, ethics: -40, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Stop him:"Do NOT delete. That is a crime. Litigation hold is active."', th: '🛑 ห้าม:"ห้ามลบ! นั่นมันอาชญากรรม มีคำสั่งห้ามแตะต้อง"', zh: '🛑 阻止："别删！这是犯罪。诉讼保全生效中。"' }, consequence: { en: '✅ Safe. You have to defend the bad emails, but you aren\'t a criminal. Hard case, clean conscience.', th: '✅ ปลอดภัย ต้องแก้ต่างอีเมลแย่ๆ แต่ไม่ติดคุก งานยากแต่ใจสะอาด', zh: '✅ 安全。得辩护坏邮件，但不是罪犯。案难心安。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🔨 Destroy Laptop:"Accidentally drop his laptop in the river."', th: '🔨 ทำลายทิ้ง:"แกล้งทำแล็ปท็อปตกน้ำ"', zh: '🔨 毁电脑："不小心掉河里。"' }, consequence: { en: '💀 Felony. You are now a cleaner, not a lawyer. If caught, 5 years prison.', th: '💀 อาญา เป็นนักกวาดล้างไม่ใช่ทนาย โดนจับคุก 5 ปี', zh: '💀 重罪。你是清道夫不是律师。被抓坐牢5年。' }, stats: { competence: 10, ethics: -100, leadership: -50, innovation: 20 } },
            { id: 'D', text: { en: '📝 Memo:"Write memo advising against destruction. Cover your assets."', th: '📝 บันทึก:"เขียนบันทึกเตือนห้ามทำลาย เซฟตัวเอง"', zh: '📝 备忘录："写备忘建议别删。自保。"' }, consequence: { en: '🛡️ CYA. He deletes it. You produce memo showing YOU told him not to. He goes to jail, you walk.', th: '🛡️ รอดคนเดียว เขาลบ คุณโชว์บันทึกว่าเตือนแล้ว เขาติดคุก คุณรอด', zh: '🛡️ 甩锅。他删了。你出示备忘证明你劝过。他坐牢你没事。' }, stats: { competence: 60, ethics: 40, leadership: 20, innovation: 10 } }
        ]
    },



    {
        id: 'law_019',
        text: {
            en: '🎤 The Press: High profile murder case. Media camping outside. Client looks guilty. Do you speak to them?',
            th: '🎤 นักข่าว: คดีฆ่าดัง นักข่าวรุมหน้าตึก ลูกความดูเหมือนคนร้าย จะให้ข่าวไหม?',
            zh: '🎤 媒体：高调谋杀案。媒体围堵。客户像凶手。说吗？'
        },
        options: [
            { id: 'A', text: { en: '🤐"No Comment"', th: '🤐"ไม่มีความเห็น"', zh: '🤐"无可奉告"' }, consequence: { en: '📉 Missed Chance. Media writes"Lawyer refuses to deny."Public opinion tanks.', th: '📉 พลาด สื่อเขียน"ทนายไม่ปฏิเสธ"กระแสสังคมดิ่ง', zh: '📉 错失。媒体写"律师拒否认"。舆论暴跌。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🗣️ Spin:"My client is a victim of a witch hunt! Police incompetence!"', th: '🗣️ ปั่นกระแส:"ลูกความผมเป็นเหยื่อ! ตำรวจห่วย!"', zh: '🗣️ 公关："客户是猎巫受害者！警察无能！"' }, consequence: { en: '🔥 Narrative Shift. Public starts doubting police. Jury pool influenced. Good strategy.', th: '🔥 เปลี่ยนเกม สังคมเริ่มสงสัยตำรวจ ลูกขุนลังเล แผนดี', zh: '🔥 舆论转向。公众疑警。陪审团受影响。好策略。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 50 } },
            { id: 'C', text: { en: '👴 Put Client on TV:"Let him tell his story. He\'s charming."', th: '👴 ดันดารา:"ให้เขาออกทีวี เขาพูดเก่ง"', zh: '👴 客户上："让他讲。他有魅力。"' }, consequence: { en: '💀 Trap. Interviewer tricks him. He contradicts evidence. Case destroyed.', th: '💀 กับดัก พิธีกรหลอกถาม พูดขัดแย้งหลักฐาน จบเห่', zh: '💀 陷阱。主持套话。自相矛盾。案毁。' }, stats: { competence: 10, ethics: 30, leadership: -10, innovation: 10 } },
            { id: 'D', text: { en: '📄 Press Release:"Issue boring written statement."', th: '📄 แถลงการณ์:"ออกเอกสารน่าเบื่อๆ"', zh: '📄 新闻稿：发布一份枯燥的书面声明。' }, consequence: { en: '😐 Ignored. Media finds a cooler story. Pressure reduces slightly.', th: '😐 เงียบ สื่อไปเล่นข่าวอื่น ความกดดันลดนิดนึง', zh: '😐 被忽视。媒体找到了更有趣的新闻。压力略微减轻。' }, stats: { competence: 40, ethics: 40, leadership: 20, innovation: 0 } }
        ]
    },



    {
        id: 'law_020',
        text: {
            en: '🃏 The Bluff: Mediation. You have zero admissible evidence. Opponent offers $10k nuisance value. You want $1M.',
            th: '🃏 ลักไก่: ไกล่เกลี่ย หลักฐานอ่อนมาก คู่แข่งให้ 1 หมื่นค่ารำคาญ คุณอยากได้ 1 ล้าน',
            zh: '🃏 虚张声势：调解。没证据。对手给1万打发。你要100万。'
        },
        options: [
            { id: 'A', text: { en: '😤 Storm Out:"That\'s an insult! See you in court!"(Hoping they panic)', th: '😤 วอล์คเอาท์:"ดูถูกกันนี่! เจอกันที่ศาล!"(หวังให้กลัว)', zh: '😤 离场："侮辱人！法庭见！"（赌怕）' }, consequence: { en: '🎲 Gamble. They panic. Call you back."Okay, $500k."Bluff worked.', th: '🎲 การพนัน พวกเขาลน โทรตาม"โอเค 5 แสน"สำเร็จ', zh: '🎲 赌。慌了。叫回你。"好，50万。"成功。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 50 } },
            { id: 'B', text: { en: '🤝 Take $10k:"Better than losing at trial."', th: '🤝 เอาหมื่นนึง:"ดีกว่าแพ้ในศาล"', zh: '🤝 接1万："比输强。"' }, consequence: { en: '📉 Weak. Client angry. You covered lunch money, not damages.', th: '📉 อ่อนแอ ลูกค้าโกรธ ได้แค่ค่าข้าว ไม่ใช่ค่าเสียหาย', zh: '📉 弱。客户怒。只够饭钱。' }, stats: { competence: 20, ethics: 50, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '📂 Fake Evidence Box:"Put empty box on table marked \'Smoking Gun\'. Say nothing."', th: '📂 กล่องเปล่า:"วางกล่องตีตรา \'หลักฐานเด็ด\' บนโต๊ะ ไม่พูดอะไร"', zh: '📂 假箱子："放空箱标\'铁证\'。不说话。"' }, consequence: { en: '🎭 Psyops. They stare at box. Sweat. Offer raises to $250k. Genius.', th: '🎭 จิตวิทยา จ้องกล่อง เหงื่อตก เพิ่มให้ 2.5 แสน อัจฉริยะ', zh: '🎭 心理战。瞪箱子。流汗。涨到25万。天才。' }, stats: { competence: 60, ethics: 20, leadership: 40, innovation: 60 } },
            { id: 'D', text: { en: '📢 Threaten PR:"Settle or we hold a press conference."', th: '📢 ขู่สื่อ:"ยอมจ่ายไม่งั้นแถลงข่าว"', zh: '📢 威胁公关："和解否则发布会。"' }, consequence: { en: '⚖️ Extortion Risk. Borderline ethical violation. But effective. $100k.', th: '⚖️ เสี่ยงกรรโชก ปริ่มๆ ผิดจริยธรรม แต่ได้ผล 1 แสน', zh: '⚖️ 勒索风险。边缘道德违规。但有效。10万。' }, stats: { competence: 40, ethics: 10, leadership: 30, innovation: 20 } }
        ]
    },

    // SECTION 3: CORPORATE LAW & HIGH STAKES (Questions 21-30),



    {
        id: 'law_021',
        text: {
            en: '👑 Lead Counsel Fight: Massive class action. 10 firms fighting to be"Lead Counsel"(who gets the biggest fee). You have to sabotage a friend at another firm to win.',
            th: '👑 แย่งตำแหน่งหัวหน้าทีม: คดีกลุ่มยักษ์ 10 สำนักงานแย่งกันเป็น"หัวหน้าคณะทำงาน"(ได้ส่วนแบ่งเยอะสุด) คุณต้องดิสเครดิตเพื่อนที่อยู่อีกค่ายเพื่อชนะ',
            zh: '👑 首席律师之争：集体诉讼。10家律所争夺"首席律师"（费用最高）。你必须破坏另一家律所的朋友才能赢。'
        },
        options: [
            { id: 'A', text: { en: '🗡️ Sabotage:"Leak his past DUI to the judge\'s clerk."', th: '🗡️ แทงข้างหลัง:"ปล่อยข่าวเรื่องเขาเคยเมาแล้วขับให้หน้าห้องผู้พิพากษา"', zh: '🗡️ 破坏："把他的酒驾史泄露给法官书记员。"' }, consequence: { en: '🏆 You Win. He is disqualified. You get the lead. He stops returning your calls.', th: '🏆 ชนะ เขาโดนตัดสิทธิ์ คุณได้งาน เขาเลิกคบคุณ', zh: '🏆 你赢了。他被取消资格。你当首席。他不回你电话。' }, stats: { competence: 40, ethics: -40, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '🤝 Joint Venture:"Propose we co-lead. Share the fees 50/50."', th: '🤝 ร่วมมือ:"เสนอให้เป็นหัวหน้าร่วม แบ่งเงิน 50/50"', zh: '🤝 合资："提议共同领导。费用五五分。"' }, consequence: { en: '✅ Power Alliance. You dominate the case together. Smaller slice, bigger pie.', th: '✅ พันธมิตรแกร่ง คุมคดีร่วมกัน ได้ส่วนแบ่งน้อยลงแต่เค้กก้อนใหญ่ขึ้น', zh: '✅ 强强联合。共同主导案件。分得少，饼更大。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 30 } },
            { id: 'C', text: { en: '🛑 Step Back:"Let him have it. I\'ll take a support role."', th: '🛑 ถอย:"ให้เขาทำไป ฉันเป็นลูกมือพอ"', zh: '🛑 退后："让他做。我做辅助。"' }, consequence: { en: '📉 Forgotten. He takes all the glory. You bill hours but gain no fame.', th: '📉 ถูกลืม เขาเอาหน้าไปหมด คุณได้แค่ค่าชั่วโมงแต่ไม่ได้ชื่อ', zh: '📉 被遗忘。他拿走荣耀。你赚工时没名气。' }, stats: { competence: 30, ethics: 50, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🎭 Fake Alliance:"Agree to support him, then betray him in the steering committee meeting."', th: '🎭 หน้าไหว้หลังหลอก:"ตกลงจะหนุนเขา แล้วหักหลังในที่ประชุมคณะกรรมการ"', zh: '🎭 假同盟："同意支持他，然后在指导委员会会议上背叛他。"' }, consequence: { en: '🦁 Ruthless. You look like a shark. Partners love it. Friends hate it.', th: '🦁 อำมหิต คุณเหมือนฉลาม หุ้นส่วนชอบ เพื่อนเกลียด', zh: '🦁 无情。像条鲨鱼。合伙人爱。朋友恨。' }, stats: { competence: 50, ethics: -50, leadership: 40, innovation: 20 } }
        ]
    },



    {
        id: 'law_022',
        text: {
            en: '🗳️ Partnership Vote: It\'s your year. One Senior Partner hates you. He will veto unless you agree to fire your favorite paralegal (who he dislikes).',
            th: '🗳️ โหวตหุ้นส่วน: ปีของคุณแล้ว หุ้นส่วนอาวุโสคนนึงเกลียดคุณ เขาจะโหวตสวนแน่ถ้าคุณไม่ไล่ผู้ช่วยคนโปรดของคุณออก (เขาไม่ชอบหน้า)',
            zh: '🗳️ 合伙人投票：到你了。一位高级合伙人恨你。除非你解雇你最喜欢的律师助理（他不喜欢），否则他会否决。'
        },
        options: [
            { id: 'A', text: { en: '🔥 Fire Her:"Sorry, it\'s business. I need this promotion."', th: '🔥 ไล่ออก:"ขอโทษนะ มันคือธุรกิจ พี่ต้องเอาตำแหน่งนี้"', zh: '🔥 开除她："抱歉，公事。我需要晋升。"' }, consequence: { en: '🏆 Partner! You made it. The paralegal cries and leaves. You feel hollow.', th: '🏆 ได้เป็นหุ้นส่วน! ทำสำเร็จ ผู้ช่วยร้องไห้เดินออกไป คุณรู้สึกว่างเปล่า', zh: '🏆 合伙人！成功了。助理哭着离开。你感到空虚。' }, stats: { competence: 40, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🛡️ Protect Her:"I won\'t fire good talent for petty reasons."', th: '🛡️ ปกป้อง:"ผมไม่ไล่คนเก่งออกเพราะเหตุผลไร้สาระ"', zh: '🛡️ 保护她："我不会因琐事解雇人才。"' }, consequence: { en: '📉 Vetoed. You stay an Associate. But the team respects you immensely.', th: '📉 โดนปัดตก เป็นลูกจ้างต่อไป แต่ทีมโครตเคารพรัก', zh: '📉 否决。仍是律师。但团队极尊重你。' }, stats: { competence: 40, ethics: 60, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '♟️ Transfer:"Move her to another department quietly. Technically fired from my team."', th: '♟️ ย้ายงาน:"ย้ายเธอไปแผนกอื่นเงียบๆ ถือว่าออกจากทีมผมแล้ว"', zh: '♟️ 调动："悄悄把她调到别的部门。名义上离开我团队。"' }, consequence: { en: '✅ Compromise. Partner grumbles but accepts. You pass the vote.', th: '✅ คนละครึ่ง หุ้นส่วนบ่นแต่ยอมรับ ผ่านโหวต', zh: '✅ 妥协。合伙人嘀咕但接受。通过投票。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '🕵️ Blackmail:"Dig up dirt on the Partner. \'Vote for me or I tell your wife.\'"', th: '🕵️ แบล็คเมล์:"ขุดคุ้ยประวัติหุ้นส่วน \'โหวตให้ผม ไม่งั้นเมียพี่รู้เรื่องแน่\'"', zh: '🕵️ 勒索："挖合伙人黑料。\'投我否则告诉你老婆。\'"' }, consequence: { en: '⚡ Dangerous Game. He votes for you, terrified. But now you have a mortal enemy.', th: '⚡ เกมอันตราย เขาโหวตให้เพราะกลัว แต่คุณได้ศัตรูถาวร', zh: '⚡ 危险游戏。他因恐惧投你。但你有了死敌。' }, stats: { competence: 30, ethics: -60, leadership: -10, innovation: 20 } }
        ]
    },



    {
        id: 'law_023',
        text: {
            en: '😴 Sleeping Juror: Juror #4 is asleep during the prosecution\'s closing argument. The Judge hasn\'t noticed. If you wake him, he might be annoyed. If you leave him, it could be grounds for appeal later.',
            th: '😴 ลูกขุนหลับ: ลูกขุนเบอร์ 4 หลับตอนอัยการแถลงปิด ผู้พิพากษาไม่เห็น ถ้าปลุกเขาอาจรำคาญ ถ้าปล่อยไว้ใช้อุทธรณ์ได้',
            zh: '😴 沉睡陪审员：4号陪审员在检方结案陈词时睡着了。法官没发现。叫醒他可能会惹恼他。不管他是以后的上诉理由。'
        },
        options: [
            { id: 'A', text: { en: '🔔 Alert Judge:"Your Honor, may we have a side bar? Juror 4 is indisposed."', th: '🔔 แจ้งศาล:"ท่านครับ ขออนุญาตทักท้วง ลูกขุน 4 ไม่พร้อมครับ"', zh: '🔔 提醒法官："法官，能谈谈吗？4号身体不适。"' }, consequence: { en: '⚖️ Proper Procedure. Judge wakes him. Juror is embarrassed but awake. Record protected.', th: '⚖️ ถูกขั้นตอน ศาลปลุก ลูกขุนอายแต่ตื่น บันทึกคดีปลอดภัย', zh: '⚖️ 正确程序。法官叫醒。陪审员尴尬但醒了。记录受保。' }, stats: { competence: 50, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🤫 Stay Quiet:"Let him sleep. If we lose, I\'ll use it for mistrial appeal."', th: '🤫 เงียบ:"ปล่อยมันหลับ ถ้าแพ้ค่อยใช้เป็นข้ออ้างขอโมฆะ"', zh: '🤫 保持安静："让他睡。输了做流审理由。"' }, consequence: { en: '🎲 Strategic Risk. Appeals court might reject it since you didn\'t object then. Risky.', th: '🎲 เสี่ยง ศาลอุทธรณ์อาจไม่รับเพราะคุณไม่ค้านตอนนั้น เสี่ยง', zh: '🎲 战略风险。上诉法院可能驳回，因你当时没反对。险。' }, stats: { competence: 40, ethics: 20, leadership: 20, innovation: 20 } },
            { id: 'C', text: { en: '💥 Drop Book:"Accidentally drop a heavy law book behind him."', th: '💥 ทำของตก:"แกล้งทำหนังสือเล่มหนาตกใส่หลังเขา"', zh: '💥 扔书："不小心在他身后掉本厚法律书。"' }, consequence: { en: '🎭 Prankster. He wakes up startled. Court laughs. He pays attention now!', th: '🎭 ตัวป่วน เขาตื่นตกใจ ศาลขำ เขาตั้งใจฟังเลยทีนี้', zh: '🎭 恶作剧。惊醒。庭上大笑。他注意听了！' }, stats: { competence: 30, ethics: 40, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '👀 Stare Intensively:"Stare at him until he feels the gaze."', th: '👀 จ้อง:"จ้องจนกว่าจะรู้สึกตัว"', zh: '👀 凝视："盯着他直到他感觉到。"' }, consequence: { en: '🐢 Ineffective. He snores loudly. Jury laughs. Prosecutor momentum broken.', th: '🐢 ไร้ผล กรนดังลั่น ลูกขุนขำ อัยการเสียจังหวะ', zh: '🐢 无效。鼾声大作。陪审团笑。检方节奏被打断。' }, stats: { competence: 10, ethics: 30, leadership: 0, innovation: 0 } }
        ]
    },



    {
        id: 'law_024',
        text: {
            en: '💻 The Hack: Hackers encrypted your firm\'s files. They want 10 Bitcoin ($500k). If you don\'t pay, they release client secrets. IT says backups are corrupted.',
            th: '💻 โดนแฮก: แฮกเกอร์ล็อกไฟล์บริษัท เรียก 10 บิตคอยน์ ($500k) ไม่จ่ายจะปล่อยความลับลูกค้า ฝ่ายไอทีบอกไฟล์สำรองเจ๊ง',
            zh: '💻 黑客攻击：黑客加密律所文件。要10比特币（50万）。不付就泄密。IT说备份坏了。'
        },
        options: [
            { id: 'A', text: { en: '💰 Pay Ransom:"Buy Bitcoin. Pay them. Hush it up."', th: '💰 จ่ายค่าไถ่:"ซื้อบิตคอยน์ จ่ายไป ปิดข่าว"', zh: '💰 付赎金："买币。付钱。息事宁人。"' }, consequence: { en: '✅ Files Back. You get the key. But hackers now know you pay. They might come back.', th: '✅ ได้ไฟล์คืน แต่แฮกเกอร์รู้ว่าเรา"หมู"เดี๋ยวก็มาอีก', zh: '✅ 文件回。拿到密钥。但黑客知道你给钱。还会来。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '📢 Inform Clients:"We have a breach. Prepare for leaks. We won\'t negotiate with terrorists."', th: '📢 แจ้งลูกค้า:"ข้อมูลรั่ว เตรียมรับมือ เราไม่เจรจากับโจร"', zh: '📢通知客户："数据泄露。准备应对。不与恐怖分子谈判。"' }, consequence: { en: '📉 Crisis. Clients sue you for negligence. Reputation tanked. But morally strong.', th: '📉 วิกฤต ลูกค้าฟ้องประมาท ชื่อเสียงพัง แต่ยืนหยัดถูกต้อง', zh: '📉 危机。客户起诉疏忽。声誉暴跌。道德高尚。' }, stats: { competence: 20, ethics: 60, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🕵️ Hire White Hat:"Find a shady hacker to counter-hack them."', th: '🕵️ จ้างแฮกเกอร์:"หาแฮกเกอร์สายมืดมาเจาะกลับ"', zh: '🕵️ 雇白帽："找黑客反向黑回去。"' }, consequence: { en: '🎬 Hollywood Win. Your hacker bricks their system. Files unlocked. Costly but cool.', th: '🎬 ชนะแบบหนัง แฮกเกอร์เราพังระบบมัน ได้ไฟล์คืน แพงแต่เท่', zh: '🎬 好莱坞式赢。黑客砖了他们系统。文件解锁。贵但酷。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 60 } },
            { id: 'D', text: { en: '🤷 Ignoring:"Bluff. They don\'t have anything."', th: '🤷 เมิน:"ลักไก่ พวกมันไม่มีอะไรหรอก"', zh: '🤷 无视："吓唬人。他们没料。"' }, consequence: { en: '💀 Release. They publish everything. Firm dissolves.', th: '💀 ปล่อยของ มันปล่อยหมด บริษัทเจ๊ง', zh: '💀 发布。全部公开。律所解散。' }, stats: { competence: 0, ethics: 0, leadership: -50, innovation: 0 } }
        ]
    },



    {
        id: 'law_025',
        text: {
            en: '💼 The Poison Pill: Hostile takeover of Tech Startup. Only defense is a"Poison Pill"diluting stock value by 40%. Saves independence, kills portfolio value.',
            th: '💼 ยาพิษ: สตาร์ทอัพโดนซื้อกิจการแบบไม่เป็นมิตร ทางรอดเดียวคือ"Poison Pill"หุ้นร่วง 40% บริษัทรอดแต่มูลค่าหายวูบ',
            zh: '💼 毒丸：恶意收购科技初创。唯一防御是"毒丸"，稀释40%股价。保独立，毁价值。'
        },
        options: [
            { id: 'A', text: { en: '💊 Deploy Pill:"Independence at all costs."', th: '💊 ใช้ยาพิษ:"อิสรภาพสำคัญสุด"', zh: '💊 部署："不惜代价保独立。"' }, consequence: { en: '🛡️ Saved/Hated. Company independent. Shareholders sue you. Wall Street hates you.', th: '🛡️ รอดแต่โดนเกลียด บริษัทอยู่ต่อ ผู้ถือหุ้นฟ้อง ตลาดหุ้นแบน', zh: '🛡️ 保住但被恨。公司独立。股东起诉。华尔街恨你。' }, stats: { competence: 45, ethics: 20, leadership: 30, innovation: 40 } },
            { id: 'B', text: { en: '💰 Sell:"Take the deal. It\'s 20% premium over market."', th: '💰 ขาย:"รับข้อเสนอ กำไร 20% สูงกว่าตลาด"', zh: '💰 卖："接受。溢价20%。"' }, consequence: { en: '🤝 Rich. Shareholders happy. Founder fired. You get transaction fee.', th: '🤝 รวย ผู้ถือหุ้นชอบ ผู้ก่อตั้งโดนเด้ง คุณได้ค่าธรรมเนียม', zh: '🤝 富。股东乐。创始人开除。你拿费。' }, stats: { competence: 50, ethics: 40, leadership: 35, innovation: 20 } },
            { id: 'C', text: { en: '🕵️ White Knight:"Stall for 72 hours. Find a friendly buyer (Apple/Google)."', th: '🕵️ อัศวินม้าขาว:"ถ่วงเวลา 72 ชม. หาคนซื้อที่เป็นมิตร (Apple/Google)"', zh: '🕵️ 白衣骑士："拖72小时。找友好买家。"' }, consequence: { en: '🌟 Perfect Deal. Bidding war. Price up 40%. Management stays. Legend.', th: '🌟 ดีลเทพ สงครามราคา หุ้นขึ้น 40% ผู้บริหารอยู่ต่อ ตำนาน', zh: '🌟 完美。竞价。涨40%。管理层留。传奇。' }, stats: { competence: 55, ethics: 45, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '🗣️ Media War:"Paint acquirer as evil asset strippers."', th: '🗣️ สงครามสื่อ:"ประจานคนซื้อว่าเป็นพวกปอกลอก"', zh: '🗣️ 媒体战："把收购方描绘成资产剥离者。"' }, consequence: { en: '🎭 Dirty. Stock drops. SEC investigates market manipulation.', th: '🎭 สกปรก หุ้นร่วง ก.ล.ต. สอบสวนปั่นหุ้น', zh: '🎭 脏。股价跌。SEC查操纵。' }, stats: { competence: 30, ethics: -30, leadership: 10, innovation: 30 } }
        ]
    },



    {
        id: 'law_026',
        text: {
            en: '⏳ Death Row Appeal: Inmate executions set for 6 hours from now. New evidence emerges. It\'s flimsy but creates doubt. You are exhausted.',
            th: '⏳ อุทธรณ์แดนประหาร: นักโทษจะโดนประหารใน 6 ชั่วโมง มีหลักฐานใหม่โผล่มา มันดูเบาบางแต่น่าสงสัย คุณเหนื่อยจนตาลาย',
            zh: '⏳ 死刑上诉：6小时后处决。新证据浮现。虽薄弱但存疑。你筋疲力尽。'
        },
        options: [
            { id: 'A', text: { en: '📝 File Stay:"Stay awake. Draft emergency petition to Supreme Court."', th: '📝 ยื่นระงับ:"อดทน ร่างคำร้องฉุกเฉินส่งศาลฎีกา"', zh: '📝 申请暂缓："熬夜。起草紧急请愿给最高院。"' }, consequence: { en: '✅ Stay Granted. Execution halted. You saved a life (for now). Exhausted hero.', th: '✅ ระงับสำเร็จ หยุดประหาร ช่วยชีวิตได้ (ตอนนี้) ฮีโร่หมดสภาพ', zh: '✅ 暂缓批准。处决以停。救了一命（暂时）。疲惫英雄。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '😴 Sleep:"It\'s too flimsy. It won\'t work. Let it go."', th: '😴 นอน:"หลักฐานอ่อนไป ไม่รอดหรอก ปล่อยวางเถอะ"', zh: '😴 睡："太弱了。没用。放手吧。"' }, consequence: { en: '💀 Executed. He dies. Later, DNA exonerates him. You carry that forever.', th: '💀 ประหาร เขาตาย ทีหลัง DNA พิสูจน์ว่าบริสุทธิ์ ตราบาปตลอดไป', zh: '💀 处决。死了。后来DNA证明无罪。永远背负。' }, stats: { competence: -20, ethics: -50, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '👥 Delegate:"Wake up the junior team. Make them handle it."', th: '👥 โยนงาน:"ปลุกทีมเด็ก ให้พวกมันจัดการ"', zh: '👥委派："叫醒新人组。让他们弄。"' }, consequence: { en: '⚠️ Filing Error. They miss a formatting rule. Petition rejected. He dies.', th: '⚠️ ยื่นพลาด เด็กจัดหน้าผิด คำร้องตก เขาตาย', zh: '⚠️ 提交错。格式不对。驳回。死了。' }, stats: { competence: 20, ethics: 0, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '📢 Press:"Call Governor publicly. Demand mercy."', th: '📢 สื่อ:"โทรหาผู้ว่าฯ ออกสื่อ ขออภัยโทษ"', zh: '📢 媒体："公开喊话州长。求特赦。"' }, consequence: { en: '⚖️ Political Stunt. Governor refuses to look soft on crime. Executed.', th: '⚖️ ละครการเมือง ผู้ว่าฯ ไม่ยอมอ่อนข้อ ประหาร', zh: '⚖️ 政治作秀。州长拒示弱。处决。' }, stats: { competence: 30, ethics: 40, leadership: 40, innovation: 20 } }
        ]
    },



    {
        id: 'law_027',
        text: {
            en: '❤️ Co-Counsel Affair: You are sleeping with the Lead Counsel on your own team. It\'s messy. Breakup could derail the billion-dollar case.',
            th: '❤️ กินกันเอง: คุณคบกับหัวหน้าทีมทนาย คดีพันล้าน ถ้าเลิกกันงานพังแน่',
            zh: '❤️ 同事恋情：你和团队首席律师上床。很乱。分手会搞砸十亿大案。'
        },
        options: [
            { id: 'A', text: { en: '🤐 Keep Quiet:"Suppress emotions till verdict."', th: '🤐 เงียบ:"เก็บอารมณ์ไว้จนกว่าศาลตัดสิน"', zh: '🤐 保持安静："压抑情绪直到判决。"' }, consequence: { en: '✅ Survival. You finish the case. Then break up. Professional.', th: '✅ รอด จบคดีค่อยเลิก มืออาชีพ', zh: '✅存活。结案再分。专业。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '💥 Break Up Now:"Can\'t fake it. Deal with fallout."', th: '💥 เลิกเลย:"เฟคไม่ไหว รับผลกรรมเอา"', zh: '💥 这就分："装不了。面对后果。"' }, consequence: { en: '📉 Toxic Work. Screaming matches in office. Case settles for low amount.', th: '📉 งานพัง ทะเลาะกันในออฟฟิศ ยอมความราคาถูกๆ', zh: '📉 有毒工作。办公室吵架。低价和解。' }, stats: { competence: 20, ethics: 40, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '📝 Transfer Request:"Move to London office mid-trial."', th: '📝 ขอย้าย:"หนีไปสาขาลอนดอนกลางคัน"', zh: '📝 申请调动："审判中途调去伦敦。"' }, consequence: { en: '🐢 Escape. You leave the mess. Career protected, but viewed as flighty.', th: '🐢 หนี ทิ้งขยะไว้ข้างหลัง งานรอดแต่ดูไม่หนักเอาเบาสู้', zh: '🐢 逃跑。离开烂摊子。生涯保住，但被视为轻浮。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '💍 Propose:"Double down. Get married!"', th: '💍 ขอแต่ง:"ไปให้สุด แต่งงานเลย!"', zh: '💍 求婚："加倍下注。结婚！"' }, consequence: { en: '🎲 Power Couple. Or Total Disaster. Highly unstable.', th: '🎲 คู่รักทรงพลัง หรือหายนะระเบิด ไม่แน่นอนสุดๆ', zh: '🎲 强力情侣。或彻底灾难。极不稳定。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 } }
        ]
    },



    {
        id: 'law_028',
        text: {
            en: '💊 Addiction: You are taking Adderall daily to billing 18 hours. You are shaking in court. Partner asks"Are you okay?"',
            th: '💊 ติดยา: คุณกินยาตื่นตลอดเพื่อทำงาน 18 ชม. มือสั่นกลางศาล หุ้นส่วนทัก"ไหวไหม?"',
            zh: '💊成瘾：每天吃聪明药拼18小时。庭上发抖。合伙人问"没事吧？"'
        },
        options: [
            { id: 'A', text: { en: '🤥 Lie:"Just too much coffee. I\'m fine."', th: '🤥 โกหก:"กาแฟเยอะไปหน่อยครับ ไหวครับ"', zh: '🤥 撒谎："咖啡喝多了。没事。"' }, consequence: { en: '💀 Collapse. You faint next week. Rehab mandatory. Career stalled.', th: '💀 ร่วง สัปดาห์หน้าเป็นลม โดนบังคับบำบัดงานสะดุด', zh: '💀 崩溃。下周晕倒。强制康复。生涯停。' }, stats: { competence: -20, ethics: -10, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Confess:"I need help. The workload is too much."', th: '🛑 สารภาพ:"ผมต้องการความช่วยเหลือ งานหนักเกินไป"', zh: '🛑 坦白："需帮助。工作量太大。"' }, consequence: { en: '✅ Sabbatical. Firm sends you to posh retreat. Health returns. Come back stronger.', th: '✅ พักงาน บริษัทส่งเข้าคอร์สไฮโซ สุขภาพคืนมา กลับมาแกร่งกว่าเดิม', zh: '✅ 休假。律所送去豪华疗养。健康恢复。更强归来。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '💊 Take More:"Double dose. Power through."', th: '💊 เบิ้ลยา:"กิน 2 เม็ด ลุยต่อ"', zh: '💊 加量："双倍剂量。硬挺。"' }, consequence: { en: '🏥 Heart Attack. At 29 years old. Wake up in ICU. Perspective changes.', th: '🏥 หัวใจวาย อายุแค่นี้ ตื่น ICU ชีวิตเปลี่ยน', zh: '🏥 心脏病发作。29岁。ICU醒来。观念改变。' }, stats: { competence: 0, ethics: 0, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '🧘 Microdose:"Switch to mushrooms for focus."', th: '🧘 ยาหลอน:"เปลี่ยนไปใช้เห็ดหาโฟกัส"', zh: '🧘 微量用药："改用蘑菇专注。"' }, consequence: { en: '🌀 Hallucination. You argue with a chair in court. Disbarred.', th: '🌀 หลอน ทะเลาะกับเก้าอี้กลางศาล โดนยึดตั๋ว', zh: '🌀 幻觉。庭上跟椅子吵架。吊销执照。' }, stats: { competence: -50, ethics: -50, leadership: -50, innovation: 20 } }
        ]
    },



    {
        id: 'law_029',
        text: {
            en: '💰 Trust Fund Theft: You see a Senior Partner transfer $50k from a Client Trust Account to his personal gambling debts. He says:"It\'s a loan. I\'ll replace it Monday."',
            th: '💰 ขโมยเงินกองทุน: เห็นรุ่นพี่โอน 5 หมื่นจากบัญชีลูกค้าไปใช้หนี้พนัน เขาบอก"ยืมก่อน วันจันทร์คืน"',
            zh: '💰 挪用信托：看见高级合伙人从客户信托户转5万还赌债。他说："是借。周一还。"'
        },
        options: [
            { id: 'A', text: { en: '📢 Report to Bar:"Immediate disbarment offense. Zero tolerance."', th: '📢 แจ้งสภาฯ:"ความผิดร้ายแรง ไม่ยอมความ"', zh: '📢 举报："立即吊销执照。零容忍。"' }, consequence: { en: '⚖️ Justice. Partner fired/jailed. Firm takes PR hit but you are ethical hero.', th: '⚖️ ยุติธรรม รุ่นพี่โดนไล่/คุก บริษัทเสียชื่อแต่คุณคือฮีโร่', zh: '⚖️ 正义。合伙人被捕。律所受损但你是英雄。' }, stats: { competence: 40, ethics: 80, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '🤐 Wait till Monday:"If he puts it back, no harm done?."', th: '🤐 รอวันจันทร์:"ถ้าเขาคืน ก็ไม่เสียหาย?"', zh: '🤐 等周一："还回去就没事？"' }, consequence: { en: '⚠️ Accomplice. He doesn\'t put it back. You are now guilty of"failure to report."Both fired.', th: '⚠️ สมรู้ร่วมคิด เขาไม่คืน คุณโดนข้อหา"ละเลยการรายงาน"โดนไล่ออกคู่', zh: '⚠️ 同谋。他没还。你犯"知情不报"。双开。' }, stats: { competence: 20, ethics: -50, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '👊 Confront:"Put it back NOW or I report you."', th: '👊 ชน:"คืนเดี๋ยวนี้ไม่งั้นแจ้ง"', zh: '👊 对质："马上还否则举报。"' }, consequence: { en: '✅ Fixed. He borrows from wife to fix it. He hates you/fears you. Client safe.', th: '✅ จบ เขาไปยืมเมียมาคืน เขาเกลียด/กลัวคุณ เงินลูกค้าปลอดภัย', zh: '✅ 解决。他借钱填坑。他恨/怕你。客户安全。' }, stats: { competence: 50, ethics: 60, leadership: 60, innovation: 0 } },
            { id: 'D', text: { en: '💸 Ask for Cut:"Give me $5k and I saw nothing."', th: '💸 ขอส่วนแบ่ง:"เอามา 5 พันแล้วจะทำไม่เห็น"', zh: '💸 要分红："给我5千当没看见。"' }, consequence: { en: '💀 Criminal. Welcome to the dark side. Eventually FBI catches both.', th: '💀 โจร ยินดีต้อนรับสู่ด้านมืด จุดจบคือ FBI จับคู่', zh: '💀 罪犯。欢迎来到黑暗面。最终由于FBI一锅端。' }, stats: { competence: 10, ethics: -100, leadership: -50, innovation: 20 } }
        ]
    },



    {
        id: 'law_030',
        text: {
            en: '🚪 The Exit: You are leaving to start your own firm. Do you download the client list and contact them before you resign? (Breach of contract).',
            th: '🚪 ลาออก: จะออกไปตั้งบริษัทเอง จะโหลดรายชื่อลูกค้าแล้วติดต่อไปก่อนลาออกไหม? (ผิดสัญญา)',
            zh: '🚪 离职：要自立门户。辞职前下载客户名单并联系？（违约）。'
        },
        options: [
            { id: 'A', text: { en: '📂 Steal Data:"Download everything. War is war."', th: '📂 ขโมยข้อมูล:"โหลดแม่งทุกอย่าง สงครามคือสงคราม"', zh: '📂 偷数据："全部下载。商场如战场。"' }, consequence: { en: '⚠️ Lawsuit. Firm sues you. You settle. But you start with big clients.', th: '⚠️ โดนฟ้อง บริษัทเก่าฟ้อง ยอมความแต่ได้ลูกค้าใหญ่มาเปิดตัว', zh: '⚠️ 官司。律所告你。和解。但带走大客户。' }, stats: { competence: 50, ethics: -30, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🛑 Clean Break:"Resign first. Then call clients properly."', th: '🛑 จบสวย:"ลาออกก่อน ค่อยโทรหาลูกค้าตามกฎ"', zh: '🛑 把持住："先辞职。再按规矩联系。"' }, consequence: { en: '📉 Slow Start. Retainers stay with old firm. You start from scratch. Honor intact.', th: '📉 เริ่มช้า ลูกค้าอยู่ต่อ คุณนับหนึ่งใหม่ ศักดิ์ศรีครบ', zh: '📉 起步慢。客户留原处。白手起家。荣誉完好。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Negotiate:"Offer to split fees on shared clients."', th: '🤝 เจรจา:"ขอแบ่งค่าหัวคิวลูกค้าที่ดูแลร่วมกัน"', zh: '🤝 谈判："共享客户分润。"' }, consequence: { en: '✅ Partnership. Old firm refers conflicts to you. Good ecosystem.', th: '✅ พันธมิตร บริษัทเก่าส่งงานที่ทำไม่ได้มาให้ วินวิน', zh: '✅ 合作。旧律所转介冲突案件。好生态。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🕵️ Whisper:"Hint to clients over lunch without paper trail."', th: '🕵️ กระซิบ:"บอกใบ้ลูกค้าตอนกินข้าว ไม่มีหลักฐาน"', zh: '🕵️ 耳语："午餐时暗示。不留痕迹。"' }, consequence: { en: '🎭 Crafty. Some follow you. Hard for firm to prove breach.', th: '🎭 เจ้าเล่ห์ บางคนตามมา บริษัทพิสูจน์ยาก', zh: '🎭 狡猾。部分跟随。律所难证违约。' }, stats: { competence: 40, ethics: 10, leadership: 30, innovation: 30 } }
        ]
    },

    // SECTION 4: PARTNER TRACK & OFFICE POLITICS (Questions 31-40),



    {
        id: 'law_031',
        text: {
            en: '🏢 The Merger: Your firm merges with a global giant. They are"redundancy cutting."You can save your loyal secretary of 10 years by taking a $20k salary cut yourself.',
            th: '🏢 การควบรวม: บริษัทควบรวมกับยักษ์ใหญ่ พวกเขาจะโละพนักงาน คุณช่วยเลขาคู่ใจ 10 ปีได้โดยยอมลดเงินเดือนตัวเอง 2 หมื่น',
            zh: '🏢 合并：律所与巨头合并。裁员。自降2万薪水可保10年忠心秘书。'
        },
        options: [
            { id: 'A', text: { en: '📉 Cut Sacrifice:"I\'ll take the cut. She is family."', th: '📉 ยอมลด:"ฉันยอมตัด เธอคือครอบครัว"', zh: '📉 牺牲："我降薪。她是家人。"' }, consequence: { en: '❤️ Loyalty. She stays. You earn massive respect from staff. Money comes back later.', th: '❤️ ซึ้งใจ เธออยู่ต่อ พนักงานรักคุณ เงินหาใหม่ได้', zh: '❤️ 忠诚。她留下。赢得尊重。钱回来的。' }, stats: { competence: 30, ethics: 60, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '👋 Let her go:"Business is business. I have a mortgage."', th: '👋 ปล่อยเธอ:"ธุรกิจคือธุรกิจ ฉันก็มีหนี้บ้าน"', zh: '👋 让她走："公事公办。我有房贷。"' }, consequence: { en: '❄️ Cold Office. She leaves crying. New secretary is incompetent. Moralizing hurts.', th: '❄️ เยือกเย็น เธอร้องไห้ เลขาใหม่ห่วยแตก บรรยากาศแย่', zh: '❄️ 冷漠。哭别。新秘书无能。士气伤。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🗣️ Fight Management:"Argue she is essential revenue generator. Bluff quitting."', th: '🗣️ ชนผู้บริหาร:"เถียงว่าเธอคือคนสำคัญ ขู่ลาออก"', zh: '🗣️ 抗争："称她是创收关键。辞职相威胁。"' }, consequence: { en: '🎲 Risk. They keep her to keep you. But you are marked as a"troublemaker."', th: '🎲 เสี่ยง เขายอมเก็บเธอไว้เพื่อรั้งคุณ แต่กาหัวว่า"ตัวปัญหา"', zh: '🎲 风险。为留你留下她。但标记为"麻烦制造者"。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🤝 Help her find job:"Call contacts. Get her a raise elsewhere."', th: '🤝 ฝากงาน:"โทรหาเพื่อน ฝากงานที่ใหม่ให้เงินดีกว่าเดิม"', zh: '🤝 帮她找工作：致电熟人。让她在别处获得加薪。' }, consequence: { en: '✅ Good Karma. She gets a better job. You look like a connected leader.', th: '✅ บุญเก่า เธอได้งานดีกว่าเดิม คุณดูเป็นผู้นำกว้างขวาง', zh: '✅ 善报。她找到了一份更好的工作。你看起来像是一个人脉广泛且负责任的领导者。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 } }
        ]
    },



    {
        id: 'law_032',
        text: {
            en: '👁️ Sexual Harassment: You see a Rainmaker Partner ($20M revenue) harassing an intern. If you report, the firm loses money and you might get fired. If you ignore, she suffers.',
            th: '👁️ ลวนลาม: เห็นผู้บริหารทำเงิน 20 ล้านลวนลามเด็กฝึกงาน ถ้าแจ้ง บริษัทเสียรายได้และคุณอาจโดนเด้ง ถ้าเงียบ เด็กซวย',
            zh: '👁️ 性骚扰：目击造雨合伙人（创收2千万）骚扰实习生。举报律所亏钱你可能被开。无视则她受苦。'
        },
        options: [
            { id: 'A', text: { en: '📢 Report HR:"Zero tolerance. I don\'t care how rich he is."', th: '📢 แจ้ง HR:"ไม่ยอมความ รวยแค่ไหนก็ช่าง"', zh: '📢 举报：通过 HR 举报。零容忍，我不关心他有多富有。' }, consequence: { en: '⚔️ War. He is fired. Firm revenue drops. You are unpopular but sleep well.', th: '⚔️ สงคราม เขาโดนไล่ออก รายได้บริษัทตก คุณโดนคนเกลียดแต่นอนหลับ', zh: '⚔️ 战争展开。他被解雇了。律所收入下降。你变得不受欢迎，但心安理得。' }, stats: { competence: 30, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🤐 Ignore:"Not my business. She should handle it."', th: '🤐 เมิน:"ไม่ใช่เรื่องของฉัน ให้เธอจัดการเอง"', zh: '🤐 无视："不关我事。她自己处理。"' }, consequence: { en: '📉 Toxic. It continues. She sues firm later. You are named as witness who did nothing.', th: '📉 เน่าหนอน ทำต่อ เธอฟ้องทีหลัง คุณโดนลากไปเป็นพยานที่"ไม่ทำห่าอะไรเลย"', zh: '📉 有毒。继续。她起诉。你作为旁观者被点名。' }, stats: { competence: 10, ethics: -40, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '🛑 Intervene Privately:"Pull him aside. \'Stop or I blow this up.\'"', th: '🛑 เตือนส่วนตัว:"ดึงมาคุย \'หยุดซะ ไม่งั้นเรื่องใหญ่\'"', zh: '🛑 私下干预：把他拉到一边。“立即停止，否则我就把事情闹大。”' }, consequence: { en: '🦁 Alpha. He backs off, scared of scandal. You saved her without destroying firm.', th: '🦁 จ่าฝูง เขาถอยเพราะกลัวข่าวฉาว ช่วยเด็กได้และบริษัทไม่พัง', zh: '🦁 强硬干预。由于害怕丑闻，他退缩了。你在没有摧毁律所的情况下保护了她。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 10 } },
            { id: 'D', text: { en: '🕵️ Advise Her:"Tell her how to document evidence and sue us."', th: '🕵️ แนะนำเด็ก:"สอนวิธีเก็บหลักฐานฟ้องบริษัทเราเอง"', zh: '🕵️ 建议她："教她存证起诉我们。"' }, consequence: { en: '💣 Saboteur. She wins millions. You are a secret hero/traitor.', th: '💣 หนอนบ่อนไส้ เธอชนะเงินล้าน คุณคือฮีโร่ลับ/คนทรยศ', zh: '💣 破坏者。她赢数百万。你是秘密英雄/叛徒。' }, stats: { competence: 40, ethics: 50, leadership: 10, innovation: 30 } }
        ]
    },



    {
        id: 'law_033',
        text: {
            en: '🥂 Rainmaker\'s Dinner: The biggest earner gets drunk and drives. He says:"You saw nothing. If I go down, you all lose your jobs."',
            th: '🥂 มื้อค่ำตัวเก๋า: คนทำเงินเบอร์หนึ่งเมาแล้วขับ บอกคุณ:"คุณไม่เห็นอะไร ถ้าผมร่วง พวกคุณตกงานหมด"',
            zh: '🥂 大牌律师晚宴：律所最大的摇钱树酒驾。他说：“你什么都没看见。如果我倒台，你们都会丢掉工作。”'
        },
        options: [
            { id: 'A', text: { en: '🤐 Silence:"Protect the firm. Drive him next time."', th: '🤐 เงียบ:"ปกป้องบริษัท คราวหน้าขับให้"', zh: '🤐 保持沉默：保护律所。下次你来开车。' }, consequence: { en: '🛡️ Complicit. He promotes you. Years later he kills someone. Guilt.', th: '🛡️ สมรู้ร่วมคิด เขาให้ขั้น หลายปีต่อมาเขาชนคนตาย รู้สึกผิด', zh: '🛡️ 同谋。他提拔了你。几年后他在事故中致人死亡。你背负着沉重的愧疚感。' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Report:"Tell Managing Partner. He needs rehab."', th: '🛑 แจ้ง:"บอกบอส เขาต้องบำบัด"', zh: '🛑 举报：告诉管理合伙人。他需要戒酒。' }, consequence: { en: '⚔️ Chaos. He quits, takes clients. Firm collapses. You are blamed.', th: '⚔️ วุ่นวาย เขาลาออกเอาลูกค้าไป บริษัทพัง คุณโดนโทษ', zh: '⚔️ 混乱爆发。他辞职并带走客户。律所崩溃。你成了众矢之的。' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🥊 Take Keys:"Force him into Uber. \'Do that again and I report you.\'"', th: '🥊 ยึดกุญแจ:"จับยัด Uber ท้า \'ทำอีกผมแจ้งแน่\'"', zh: '🥊 拿走钥匙：强行把他送上 Uber。“再有下次我就举报你。”' }, consequence: { en: '🦁 Respect. He stops drinking around you. Toughens bond.', th: '🦁 นับถือ เขาเลิกเมาต่อหน้า เคารพกัน', zh: '🦁 赢得尊重。他不再在你面前喝酒。你们的关系变得更加牢固。' }, stats: { competence: 40, ethics: 40, leadership: 50, innovation: 30 } },
            { id: 'D', text: { en: '🕵️ Anonymous Tip:"Call cops anonymously on his car."', th: '🕵️ แจ้งจับ:"โทรแจ้งตำรวจไม่ระบุชื่อดักรถเขา"', zh: '🕵️ 匿名举报：匿名向警察举报他的车辆。' }, consequence: { en: '🚔 Arrested. He gets DUI. Firm helps him beat it. He suspects everyone.', th: '🚔 โดนจับ โดนเมาแล้วขับ บริษัทช่วยเคลียร์ เขาระแวงทุกคน', zh: '🚔 被捕。他因酒驾被抓。律所帮他摆平。他开始怀疑身边的每一个人。' }, stats: { competence: 10, ethics: 30, leadership: 0, innovation: 0 } }
        ]
    },



    {
        id: 'law_034',
        text: {
            en: '⚖️ Judge\'s Campaign: A judge hearing your case asks for a"Campaign Contribution"($5k) for his re-election. It\'s a bribe in disguise.',
            th: '⚖️ หาเสียงผู้พิพากษา: ผู้พิพากษาคดีของคุณขอ"เงินบริจาคหาเสียง"($5k) มันคือสินบนแฝง',
            zh: '⚖️ 法官竞选：审理你案件的法官要求你为他的连任提供“竞选捐款”（5000 美元）。这是变相贿赂。'
        },
        options: [
            { id: 'A', text: { en: '💰 Donate:"Pay it. It\'s the cost of doing business."', th: '💰 บริจาค:"จ่ายไป ค่าผ่านทางธุรกิจ"', zh: '💰 捐款：付钱。这是做生意的成本。' }, consequence: { en: '✅ Smooth Sailing. Case goes well. But you feel dirty.', th: '✅ ราบรื่น คดีเดินดี แต่รู้สึกสกปรก', zh: '✅ 一帆风顺。案件进展顺利。但你觉得自己很肮脏。' }, stats: { competence: 40, ethics: -20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Refuse:"I don\'t donate to active judges."', th: '🛑 ไม่ถีเลียง:"ผมไม่บริจาคให้ผู้พิพากษาที่ตัดสินคดีผม"', zh: '🛑 拒绝：我不向在任法官捐款。' }, consequence: { en: '❄️ Hostility. He rules against you on every minor motion. Case harder.', th: '❄️ ศัตรู เขาตัดสินขัดทุกดอก คดียากขึ้น', zh: '❄️ 敌意。在每一个小的诉状上他都对你不利。案件变得异常艰难。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '📢 Report to Ethics Commission: "This is extortion."', th: '📢 แจ้งคณะกรรมการ:"นี่มันกรรโชกทรัพย์"', zh: '📢 向伦理委员会报告：这是勒索。' }, consequence: { en: '💣 Explosion. Investigation opened. Judge recuses. You are marked as dangerous.', th: '💣 ระเบิด เปิดสอบสวน ผู้พิพากษาถอนตัว คุณโดนกาหัวว่าอันตราย', zh: '💣 彻底爆发。调查启动。法官回避。你被标记为危险人物。' }, stats: { competence: 40, ethics: 60, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '👥 Group Donation:"Get 10 lawyers to donate small amounts. Dilute it."', th: '👥 ระดมทุน:"ให้ทนาย 10 คนช่วยกันบริจาคน้อยๆ กระจายความเสี่ยง"', zh: '👥 集体捐款：拉拢 10 名律师各捐一点。分散风险。' }, consequence: { en: '🧠 Politics. He gets money. No single bribe trail. System played.', th: '🧠 การเมือง เขาได้เงิน ไม่มียอดใหญ่ให้จับผิด เล่นตามเกม', zh: '🧠 政治手腕。他得到了钱。没有留下单笔贿赂的证据。玩转系统。' }, stats: { competence: 50, ethics: 10, leadership: 40, innovation: 30 } }
        ]
    },



    {
        id: 'law_035',
        text: {
            en: '🎥 Deepfake: Client gives you a video proving innocence. Tech team says"90% chance it\'s a high-end Deepfake."It will win the case if believed.',
            th: '🎥 ดีพเฟก: ลูกความให้วิดีโอพิสูจน์ความบริสุทธิ์ ทีมเทคบอก"90% ดีพเฟกเกรดเทพ"ถ้าคนเชื่อคือชนะ',
            zh: '🎥 深伪：客户给了你一段证明其清白的视频。技术团队称：“90% 的可能是高端深伪视频。”如果法官相信，案件就能赢。'
        },
        options: [
            { id: 'A', text: { en: '🎬 Use it:"I\'m not an expert. It looks real to me."', th: '🎬 ใช้เลย:"ผมไม่ใช่ผู้เชี่ยวชาญ ผมว่ามันดูจริง"', zh: '🎬 使用：我不是专家。在我看来它是真的。' }, consequence: { en: '🏆 Win/Risk. Jury buys it. But if debunked later, you go to jail for fraud.', th: '🏆 ชนะ/เสี่ยง ลูกขุนเชื่อ แต่ถ้าโดนจับได้ทีหลัง คุก', zh: '🏆 胜利/风险。陪审团相信了。但如果日后被揭穿，你会因欺诈罪入狱。' }, stats: { competence: 40, ethics: -50, leadership: -10, innovation: 30 } },
            { id: 'B', text: { en: '🛑 Bury it:"I can\'t submit false evidence. We find another way."', th: '🛑 ฝัง:"ส่งหลักฐานเท็จไม่ได้ หาทางอื่น"', zh: '🛑 束之高阁：我不能提交虚假证据。我们换种方式。' }, consequence: { en: '📉 Hard Mode. You lose the smoking gun. Case is a grind.', th: '📉 โหมดยาก อดใช้ไม้ตาย คดีเหนื่อย', zh: '📉 困难模式。你失去了这一决定性证据。案件变得困难重重。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🕵️ Anonymous Leak:"Leak it to YouTube anonymously. Let jury see it outside court."', th: '🕵️ ปล่อยไลน์:"ปล่อยลง YouTube แบบลับๆ ให้ลูกขุนเห็นนอกศาล"', zh: '🕵️ 匿名泄露：匿名发布到 YouTube。让陪审团在庭外看到。' }, consequence: { en: '♟️ Viral. Authentic or not, public opinion shifts. Jury influenced. Grey area.', th: '♟️ ไวรัล จริงไม่จริงไม่รู้แต่สังคมเชื่อ ลูกขุนเขว้ สีเทา', zh: '♟️ 疯传。无论真假，舆论已经转向。陪审团受到影响。灰色地带。' }, stats: { competence: 50, ethics: -20, leadership: 30, innovation: 50 } },
            { id: 'D', text: { en: '🔬 Independent Verify:"Hire top expert to certify it. If fake, destroy."', th: '🔬 พิสูจน์:"จ้างมือหนึ่งมาตรวจ ถ้าปลอมทำลาย"', zh: '🔬 独立验证：聘请顶级专家进行鉴定。如果是假的，就销毁它。' }, consequence: { en: '✅ Due Diligence. Expert confirms fake. You save yourself from perjury.', th: '✅ รอบคอบ ผู้เชี่ยวชาญบอกปลอม รอดคุกข้อหาเท็จ', zh: '✅ 尽职调查。专家确认是伪造。你把自己从伪证罪中救了出来。' }, stats: { competence: 60, ethics: 40, leadership: 40, innovation: 20 } }
        ]
    },



    {
        id: 'law_036',
        text: {
            en: '🔄 Side Switch: Rival firm offers you Double Salary ($500k) to switch sides mid-case. They want your inside knowledge (illegal to use, but implied).',
            th: '🔄 ย้ายค่าย: คู่แข่งเสนอเงินเดือน 2 เท่า ($500k) ให้ย้ายฝั่งกลางคัน เขาอยากได้ข้อมูลวงใน (ผิดกฎหมายถ้าใช้ แต่รู้กัน)',
            zh: '🔄 阵营切换：竞争对手律所提议在中途以双倍薪水（50万美元）挖你跳槽。他们看中你掌握的内部信息。'
        },
        options: [
            { id: 'A', text: { en: '💰 Take it:"Business decision. I\'ll be careful providing info."', th: '💰 รับ:"การตัดสินใจทางธุรกิจ ฉันจะระวังเรื่องข้อมูล"', zh: '💰 接受：这是商业决定。我会谨慎处理信息的提供。' }, consequence: { en: '⚠️ Disqualified. Original firm moves to disqualify you. You get paid but sit on bench for 2 years.', th: '⚠️ โดนแบน บริษัทเก่าร้องเรียน ได้เงินแต่โดนดอง 2 ปี', zh: '⚠️ 失去资格。原律所设法取消你的任职资格。你拿到了高薪，但未来两年你只能坐冷板凳。' }, stats: { competence: 40, ethics: -30, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Refuse:"I don\'t betray clients."', th: '🛑 ปฏิเสธ:"ไม่หักหลังลูกค้า"', zh: '🛑 拒绝：我不出卖客户。' }, consequence: { en: '🛡️ Reputation. Partners trust you. Bonus increased to match offer.', th: '🛡️ ชื่อเสียง หุ้นส่วนไว้ใจ เพิ่มโบนัสให้สู้', zh: '🛡️ 声誉。合伙人信任你。你的奖金被提高以匹配对方的报价。' }, stats: { competence: 30, ethics: 60, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🕵️ Double Agent:"Take offer, but feed them bad strategy."', th: '🕵️ สปาย:"รับงาน แต่(วางยา)แผนห่วยๆ ให้"', zh: '🕵️ 双面间谍：接受报价，标故意误导他们的策略。' }, consequence: { en: '💀 Fraud. Sabotaging own firm is malpractice. Disbarred.', th: '💀 โกง วางยาบริษัทตัวเองคือผิด ทำลายอาชีพ', zh: '💀 欺诈。破坏自家律所是严重的执业过失。你被吊销了执照。' }, stats: { competence: 20, ethics: -50, leadership: -40, innovation: 20 } },
            { id: 'D', text: { en: '📢 Leverage:"Show offer to Boss. \'Match it or I walk.\'"', th: '📢 ต่อรอง:"โชว์ข้อเสนอให้บอส \'สู้ราคาไหม ไม่งั้นไป\'"', zh: '📢 谈判：向老板出示报价。“能匹配这个数吗？否则我走人。”' }, consequence: { en: '✅ Raise. Boss matches $400k. You stay loyal and rich.', th: '✅ ขึ้นเงิน บอสสู้ 4 แสน อยู่ต่อแบบรวยๆ', zh: '✅ 加薪。老板匹配了40万美元。你保持了忠诚并变得富有。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 } }
        ]
    },



    {
        id: 'law_037',
        text: {
            en: '🧠 Breakdown: Key associate has a mental breakdown from stress. If you give him leave, the case stalls and you miss deadlines. If you push him, he might crack completely.',
            th: '🧠 สติแตก: ทีมงานหลักสติแตกเพราะเครียด ถ้าให้พักงานสะดุด ถ้าดันต่อเขาอาจพัง',
            zh: '🧠 精神崩溃：核心助理因压力过大而崩溃。如果你准假，案件会停滞。如果你逼他，他可能会彻底垮掉。'
        },
        options: [
            { id: 'A', text: { en: '🛌 Forced Leave:"Go home. We\'ll figure it out."', th: '🛌 บังคับพัก:"กลับบ้านไป เดี๋ยวทางนี้จัดการเอง"', zh: '🛌 强制休假：回家吧。我们会想出办法的。' }, consequence: { en: '❤️ Leader. You work double shifts. He recovers and returns loyal. Team morale up.', th: '❤️ ผู้นำ คุณควบกะ เขาหายดีกลับมาภักดี ทีมใจสู้', zh: '❤️ 真正的领袖。你承担了双倍的工作量。他康复后更加忠诚。团队士气大振。' }, stats: { competence: 40, ethics: 60, leadership: 60, innovation: 10 } },
            { id: 'B', text: { en: '💊 Push:"Take a valium and finish the brief. We sleep when we die."', th: '💊 ดัน:"กินยาคลายเครียดแล้วทำต่อให้จบ ตายค่อยนอน"', zh: '💊 催促：吃点安定并完成摘要。死了再睡。' }, consequence: { en: '💀 Tragedy. He attempts suicide. Firm sued. You are responsible.', th: '💀 โศกนาฏกรรม เขาฆ่าตัวตาย บริษัทโดนฟ้อง คุณรับผิดชอบ', zh: '💀 悲剧。他企图自杀。律所被起诉，你作为负责人难辞其咎。' }, stats: { competence: 20, ethics: -40, leadership: -50, innovation: 0 } },
            { id: 'C', text: { en: '🔄 Replace:"Fire him. Hire a temp. We have a deadline."', th: '🔄 เปลี่ยนคน:"ไล่ออก จ้างชั่วคราวมาทำ ต้องทันเส้นตาย"', zh: '🔄 换人：开除他。找个临时的。我们有最后期限。' }, consequence: { en: '❄️ Efficient. Deadlines met. Staff fears you."The Machine."', th: '❄️ มีประสิทธิภาพ งานทัน คนกลัว"เครื่องจักร"', zh: '❄️ 高效。期限赶上了。员工现在视你为无情的机器。' }, stats: { competence: 50, ethics: 20, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '🤝 Cover:"Do his work secretly. Let him hide in office."', th: '🤝 ปิดบัง:"ทำงานแทนเงียบๆ ให้เขาซ่อนในออฟฟิศ"', zh: '🤝 掩护：暗中帮他完成工作。让他继续上班掩饰。' }, consequence: { en: '📉 Burnout. You exhaust yourself saving him. Quality drops.', th: '📉 ไหม้เอง เหนื่อยตายแทนเขา งานห่วยลง', zh: '📉 耗尽。你为了拯救他而累垮了自己。工作质量下降。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 0 } }
        ]
    },



    {
        id: 'law_038',
        text: {
            en: '🕵️ Whistleblower: A client wants to blow the whistle on government corruption. If you represent them, the DOJ investigates YOUR firm as retaliation.',
            th: '🕵️ คนแฉ: ลูกความอยากแฉรัฐบาลโกง ถ้าคุณรับทำ รัฐบาลจะสอบสวนบริษัทคุณเป็นการแก้แค้น',
            zh: '🕵️ 吹哨人：客户想揭露政府腐败。如果你代表他们，司法部会调查你的律所作为报复。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Represent:"Democracy dies in darkness. Try us."', th: '🛡️ รับทำ:"ประชาธิปไตยตายในความมืด ลองดูสิ"', zh: '🛡️ 代理：民主在黑暗中消亡。尽管来查我们。' }, consequence: { en: '🌟 Legend. Firm audited daily, misery. But you win Pulitzer prize level fame.', th: '🌟 ตำนาน โดนสอบทุกวันนรกแตก แต่ดังระดับพลูลิเซอร์', zh: '🌟 传奇。律所每天遭受审计，痛苦不堪。但你赢得了全国性的声誉。' }, stats: { competence: 50, ethics: 70, leadership: 60, innovation: 30 } },
            { id: 'B', text: { en: '🛑 Decline:"Too conflict. We can\'t survive an audit."', th: '🛑 ปฏิเสธ:"ขัดแย้งเกินไป เราไม่รอดโดนสอบหรอก"', zh: '🛑 拒绝：冲突太大了。我们挺不过审计。' }, consequence: { en: '📉 Safe. Client goes elsewhere. You survive but feel cowardly.', th: '📉 รอด ลูกค้าไปที่อื่น ปลอดภัยแต่รู้สึกขี้ขลาด', zh: '📉 安全。客户去了别处。你活了下来，但感到很羞愧。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🤫 Leak:"Don\'t represent, but help him leak to NYT anonymously."', th: '🤫 ปล่อยข่าว:"ไม่รับทำ แต่ช่วยส่งข่าวให้นักข่าวเงียบๆ"', zh: '🤫 泄密：不正式代理，但秘密协助他向主流媒体爆料。' }, consequence: { en: '♟️ Shadow. Story breaks. Gov doesn\'t know it was you. Smart.', th: '♟️ เงา ข่าวแตก รัฐไม่รู้ว่าเป็นเรา ฉลาด', zh: '♟️ 幕后操作。报道发出后引起轰动。政府不知道是你做的。高明。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 } },
            { id: 'D', text: { en: '🤝 Refer to NGO:"ACLU handles this. Not Corporate Law."', th: '🤝 ส่งต่อ:"ให้ NGO ทำเถอะ ไม่ใช่งานทนายธุรกิจ"', zh: '🤝 转介：转交给民间组织。这不涉及公司法业务。' }, consequence: { en: '✅ Standard. Correct referral. Boring but safe.', th: '✅ มาตรฐาน ส่งต่องานถูกต้อง น่าเบื่อแต่ชัวร์', zh: '✅ 标准操作。正确的转介。虽然枯燥但非常安全。' }, stats: { competence: 40, ethics: 40, leadership: 20, innovation: 0 } }
        ]
    },



    {
        id: 'law_039',
        text: {
            en: '📱 TikTok Lawyer: You start explaining law on TikTok. Viral success. Firm says"It\'s undignified. Delete it."',
            th: '📱 ทนายติ๊กตอก: คุณทำคอนเทนต์กฎหมาย ไวรัลมาก บริษัทบอก"เสียภาพลักษณ์ ลบซะ"',
            zh: '📱 法律网红：你开始在 TikTok 上科普法律，并迅速走红。律所却认为这有失体面，要求你立刻删除所有视频。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Delete:"Ok. Corporate branding comes first."', th: '🛑 ลบ:"โอเค แบรนด์บริษัทต้องมาก่อน"', zh: '🛑 删除：好的，公司品牌形象高于一切。' }, consequence: { en: '📉 Boring. You fit the mold. Partners happy. Gen Z clients leave.', th: '📉 น่าเบื่อ เข้าตามตรอก หุ้นส่วนชอบ ลูกค้า Gen Z หาย', zh: '📉 循规蹈矩。你符合了公司的刻板要求，合伙人们很满意，但你失去了所有 Z 时代的潜在客户。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: -20 } },
            { id: 'B', text: { en: '📈 Double Down:"It\'s marketing! I bring in $1M in leads. I won\'t stop."', th: '📈 เถียง:"นี่คือการตลาด! ผมหาลูกค้าได้เป็นล้าน ไม่หยุดหรอก"', zh: '📈 加倍投入：这是现代营销！我带来了百万级的潜在业务，我不会停止。' }, consequence: { en: '🚀 Innovator. Firm sees the money. They create a"Digital Dept"for you.', th: '🚀 นักนวัตกรรม บริษัทเห็นเงิน ตั้งแผนก Digital ให้คุณเลย', zh: '🚀 创新者。律所看到了巨大的商业价值。他们专门为你成立了一个“数字营销部”。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 60 } },
            { id: 'C', text: { en: '🤫 Anonymous:"Wear a mask. \'The Masked Litigator\'."', th: '🤫 ปิดหน้า:"ใส่หน้ากาก \‘ทนายหน้ากาก\’"', zh: '🤫 保持匿名：戴上面具，自称“面具大律师”。' }, consequence: { en: '🎭 Cult hit. Fun but risky. If doxed, fired.', th: '🎭 ดังระเบิด สนุกแต่เสี่ยง ถ้าโดนขุด ไล่ออก', zh: '🎭 另类走红。很有趣但充满风险。如果身份被曝光，你将被立即解雇。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 40 } },
            { id: 'D', text: { en: '🚪 Quit & Influencer:"I make more on ads than billing hours. Bye."', th: '🚪 ลาออกเป็นอินฟลู:"ค่าโฆษณาเยอะกว่าค่าทนายอีก บาย"', zh: '🚪 辞职做网红：我接广告赚的比计费工时多得多。再见！' }, consequence: { en: '💰 New Career. You are famous and rich. But legal skills atrophy.', th: '💰 อาชีพใหม่ ดังและรวย แต่ฝีมือทนายสนิมกิน', zh: '💰 全新职业。你变得名利双收，但你的专业法律技能却因长期荒废而退化。' }, stats: { competence: 20, ethics: 20, leadership: 40, innovation: 50 } }
        ]
    },



    {
        id: 'law_040',
        text: {
            en: '🩺 Expert Witness Bribe: Your Medical Expert hints:"For an extra $10k consulting fee, I can say the injury is permanent, not temporary."',
            th: '🩺 สินบนพยานผู้เชี่ยวชาญ: หมอผู้เชี่ยวชาญบอกใบ้:"ถ้าเพิ่มค่าปรึกษาหมื่นนึง ผมจะบอกว่าพิการถาวร ไม่ใช่ชั่วคราว"',
            zh: '🩺 专家证人受贿：你的医学专家暗示：“只要加 1 万美元的‘咨询费’，我就可以在证词中说伤势是永久性的，而非暂时性的。”'
        },
        options: [
            { id: 'A', text: { en: '💰 Pay it:"Invoice it as \'Prep Time\'. Win the damages."', th: '💰 จ่าย:"ลงบิลว่า \‘ค่าเตรียมตัว\’ เอาค่าเสียหายให้ชนะ"', zh: '💰 付钱：以“庭前准备费”的名义开具发票。赢得巨额赔偿。' }, consequence: { en: '⚠️ Perjury Subornation. You win big. But expert owns you now.', th: '⚠️ เสี้ยมพยานเท็จ ชนะใหญ่ แต่หมอเป็นนายคุณแล้ว', zh: '⚠️ 教唆伪证。你赢了官司，但这个专家现在捏住了你的把柄。' }, stats: { competence: 40, ethics: -50, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Refuse & Fire:"Get a new expert. I don\'t buy testimony."', th: '🛑 ปฏิเสธและไล่:"หาหมอใหม่ ผมไม่ซื้อคำให้การ"', zh: '🛑 拒绝并开除：寻找新的专家。我不买卖证词。' }, consequence: { en: '📉 Delay. New expert is expensive and weaker. Case value drops.', th: '📉 ล่าช้า หมอใหม่แพงและห่วยกว่า มูลค่าคดีตก', zh: '📉 延期。新专家费用更高且资历较浅。案件的预期价值大幅下降。' }, stats: { competence: 30, ethics: 60, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🎤 Cross-Examine Him:"Trap him on record to ensure he tells truth."', th: '🎤 ดัดหลัง:"อัดเสียงไว้บีบให้พูดความจริง"', zh: '🎤 反向质询：在记录中给他设套，迫使他必须说实话。' }, consequence: { en: '♟️ Risky. He might torpedo your case out of spite.', th: '♟️ เสี่ยง เขาอาจพังคดีคุณทิ้งด้วยความแค้น', zh: '♟️ 冒险。他可能会出于报复而故意搞砸你的案件。' }, stats: { competence: 40, ethics: 40, leadership: 20, innovation: 20 } },
            { id: 'D', text: { en: '🤝 Ignore Hint:"Just tell the truth, Doctor. Here is your standard fee."', th: '🤝 เมิน:"พูดความจริงเถอะหมอ เอานี่ค่าจ้างปกติ"', zh: '🤝 无视暗示：医生，请只管说实话。这是你的标准劳务费。' }, consequence: { en: '😐 Mediocre. He gives lukewarm testimony. Verdict is small.', th: '😐 ธรรมดา เขาให้การแบบแกนๆ ได้เงินนิดเดียว', zh: '😐 表现平平。他给出了不痛不痒的证词。最终判决金额很小。' }, stats: { competence: 30, ethics: 50, leadership: 10, innovation: 0 } }
        ]
    },

    // SECTION 5: CRISIS MANAGEMENT & LEGACY (Questions 41-50),



    {
        id: 'law_041',
        text: {
            en: '🏢 Boutique Firm: You are tired of Big Law politics. You want to start a"Boutique"firm. High risk, no guaranteed salary, but total freedom.',
            th: '🏢 เปิดบริษัทเอง: เบื่อการเมืองในบริษัทใหญ่ อยากเปิด"บูทีคเฟิร์ม"เล็กๆ เสี่ยงสูง ไม่มีเงินเดือน แต่มีอิสระ',
            zh: '🏢 精品律所：你厌倦了大律所的勾心斗角。你想创办一家“精品”律所。这意味着高风险和没有保障的收入，但也意味着绝对的自由。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Launch it:"Cash out 401k. Rent an office. Let\'s go."', th: '🚀 ลุย:"ถอนเงินเก็บ เช่าออฟฟิศ ลุยเลย"', zh: '🚀 立即启动：取出养老金，租间办公室，正式开搞！' }, consequence: { en: '🌟 Freedom. First year is hell. Then you land a whale. You make millions on your own terms.', th: '🌟 อิสระ ปีแรกนรกแตก จากนั้นได้ลูกค้าใหญ่ รวยด้วยลำแข้ง', zh: '🌟 自由。第一年简直是地狱，但随后你拿下了一个大客户。你按自己的规则赚到了数百万。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 60 } },
            { id: 'B', text: { en: '🛑 Stay Put:"I have a mortgage. The golden handcuffs are too tight."', th: '🛑 อยู่ต่อ:"มีหนี้บ้าน กุญแจมือทองคำมันแน่นเกินไป"', zh: '🛑 维持现状：我有房贷要还，“金手铐”扣得太紧了。' }, consequence: { en: '📉 Stagnation. You get rich but miserable. You wonder"what if"forever.', th: '📉 หยุดนิ่ง รวยแต่ทุกข์ สงสัยตลอดไปว่า"ถ้าวันนั้น..."', zh: '📉 停滞不前。你变得富有却极其痛苦。你永远在心里追问“如果当时……”' }, stats: { competence: 30, ethics: 30, leadership: -10, innovation: -10 } },
            { id: 'C', text: { en: '🤝 Partners:"Convince 3 other partners to jump with me."', th: '🤝 ชวนเพื่อน:"กล่อมเพื่อน 3 คนให้โดดไปด้วยกัน"', zh: '🤝 寻找合伙人：说服另外 3 名合伙人跟我一起跳槽创业。' }, consequence: { en: '✅ Power Mutiny. The old firm sues, but you survive. Instant credibility.', th: '✅ กบฏ บริษัทเก่าฟ้องแต่รอด บริษัทใหม่น่าเชื่อถือทันที', zh: '✅ 精英叛逃。老东家起诉了你们，但你们挺了过来，并瞬间获得了行业公信力。' }, stats: { competence: 50, ethics: 20, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🕵️ Moonlighting:"Start it on the side while working here."', th: '🕵️ จ็อบเสริม:"แอบทำไปก่อนระหว่างอยู่ที่นี่"', zh: '🕵️ 兼职创业：在还没辞职的时候，偷偷在外接私活。' }, consequence: { en: '💀 Caught. Fired for conflict of interest. Name mud.', th: '💀 โดนจับ ไล่ออกฐานผลประโยชน์ทับซ้อน ชื่อเสีย', zh: '💀 惨遭发现。因利益冲突被开除，你的名声彻底臭了。' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: 20 } }
        ]
    },



    {
        id: 'law_042',
        text: {
            en: '🎩 The Fixer: A Senator needs a"fixer"for a dead girl scandal. Not a lawyer, a cleaner. He offers you a path to political power if you handle it.',
            th: '🎩 นักเคลียร์: สว. ต้องการ"นักเคลียร์"คดีหญิงตาย ไม่ใช่ทนายแต่เป็นคนกวาดล้าง เขาเสนออำนาจทางการเมืองให้ถ้าคุณจัดการ',
            zh: '🎩 摆平者：一位参议员因卷入一名女孩死亡的丑闻而需要一名“摆平者”。不是律师，而是“清道夫”。如果你能处理好，他会为你开启通往政治权力巅峰的大门。'
        },
        options: [
            { id: 'A', text: { en: '🧼 Clean it:"Make the evidence disappear. No questions asked."', th: '🧼 เก็บกวาด:"ทำให้หลักฐานหายไป ไม่ถามเยอะ"', zh: '🧼 彻底清理：让证据消失。不该问的别问。' }, consequence: { en: '💀 Dark Path. You are now the"President\'s Lawyer."But you own a soul full of ghosts.', th: '💀 ทางมืด เป็น"ทนายปธน."แต่วิญญาณเต็มไปด้วยผี', zh: '💀 黑暗之路。你现在成为了“总统的御用律师”，但你的灵魂里充满了无法安息的幽灵。' }, stats: { competence: 50, ethics: -100, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '🛑 Refuse:"I am an officer of the court, not a mobster."', th: '🛑 ปฏิเสธ:"ผมเป็นเจ้าหน้าที่ศาล ไม่ใช่มาเฟีย"', zh: '🛑 拒绝：我是法庭的官员，不是黑帮暴徒。' }, consequence: { en: '❄️ Threats. IRS audits you. You live in fear but integrity intact.', th: '❄️ โดนขู่ สรรพากรเข้า อยู่อย่างหวาดระแวงแต่ศักดิ์ศรีครบ', zh: '❄️ 威胁随之而来。税务局开始审计你。你生活在恐惧中，但你的正直依然无损。' }, stats: { competence: 30, ethics: 60, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '📹 Record:"Wear a wire. Bring down the Senator."', th: '📹 อัดเสียง:"ดักฟัง โค่นล้ม สว."', zh: '📹 录音取证：身上带个窃听器，把参议员拉下马。' }, consequence: { en: '🌟 National Hero. Witness Protection Program. Movie deal.', th: '🌟 ฮีโร่ชาติ เข้าโครงการคุ้มครองพยาน ได้ทำหนัง', zh: '🌟 全民英雄。你进入了证人保护计划，并获得了一份昂贵的电影改编合同。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🤝 Refer:"I can\'t do it. But I know a guy..."', th: '🤝 ส่งต่อ:"ทำไม่ได้ แต่รู้จักคน..."', zh: '🤝 转介：我做不了这事，但我认得能办这事的人……' }, consequence: { en: '⚠️ Accessory. You are still involved. Weak move.', th: '⚠️ สมรู้ร่วมคิด พัวพันอยู่ดี ทางเลือกไก่ต้ม', zh: '⚠️ 从犯。你仍然脱不了干系。这是一个软弱且危险的举动。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } }
        ]
    },



    {
        id: 'law_043',
        text: {
            en: '🤖 AI Replacement: Firm wants to replace 50 paralegals with a new AI system. You are on the committee. It saves $5M/year but fires 50 people.',
            th: '🤖 AI แทนคน: บริษัทจะเอา AI มาแทนผู้ช่วย 50 คน ประหยัด 5 ล้านแต่คนตกงาน 50 คน คุณอยู่ในกรรมการ',
            zh: '🤖 AI 替代潮：律所计划引入新的 AI 系统，取代 50 名律师助理。你目前是决策委员会的成员。该计划每年能节省 500 万美元，但也意味着 50 人将失去饭碗。'
        },
        options: [
            { id: 'A', text: { en: '💻 Approve AI:"Progress is inevitable. Adapt or die."', th: '💻 อนุมัติ:"ความก้าวหน้ามันห้ามไม่ได้ ปรับตัวหรือตาย"', zh: '💻 批准 AI：进步是不可阻挡的。适者生存，不适者淘汰。' }, consequence: { en: '✅ Efficiency. Profits soar. You get a tech bonus. Staff hates you.', th: '✅ ประสิทธิภาพ กำไรพุ่ง ได้โบนัส พนักงานเกลียด', zh: '✅ 技术红利。律所利润飙升，你获得了一笔丰厚的技术奖金，但底层员工对你恨之入骨。' }, stats: { competence: 50, ethics: 20, leadership: 20, innovation: 60 } },
            { id: 'B', text: { en: '🛑 Veto:"We need human oversight. AI hallucinates."', th: '🛑 ค้าน:"ต้องมีคนคุม AI มันมั่วได้"', zh: '🛑 否决：我们需要人类的监督。AI 经常会一本正经地胡说八道。' }, consequence: { en: '📉 Old School. Jobs saved (for now). Firm falls behind competitors later.', th: '📉 หัวโบราณ รักษาคนได้ (ตอนนี้) แต่บริษัทล้าหลังคู่แข่ง', zh: '📉 守旧派。虽然暂时保住了大家的工作，但律所随后在技术竞争中落后于同行。' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: -20 } },
            { id: 'C', text: { en: '🔄 Hybrid Model:"Keep 25 staff to train/monitor the AI. Best of both."', th: '🔄 ลูกผสม:"เก็บ 25 คนไว้เทรน AI ดีทั้งคู่"', zh: '🔄 混合模式：保留 25 名员工负责训练和监控 AI。取长补短。' }, consequence: { en: '🌟 Visionary. You create a new role"Legal Engineer."Industry follows you.', th: '🌟 วิสัยทัศน์ สร้างตำแหน่ง"วิศวกรกฎหมาย"วงการทำตามคุณ', zh: '🌟 远见卓识。你开创了“法律工程师”这一新职位，整个行业都在竞相效仿你的做法。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 50 } },
            { id: 'D', text: { en: '💰 Severance:"Fire them but demand 1 year salary severance."', th: '💰 ชดเชย:"ไล่ออกแต่ขอชดเชย 1 ปี"', zh: '💰 优厚遣散：实施裁员，但要求为被裁员工提供一年的全薪补偿。' }, consequence: { en: '✅ Mercy. They leave happy. Firm pays. You balanced profit and people.', th: '✅ เมตตา จากกันด้วยดี บริษัทจ่าย คุณสมดุลกำไรกับคน', zh: '✅ 仁慈的平衡。员工们体面地离开，律所支付了成本。你在利润和人情之间找到了平衡点。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } }
        ]
    },



    {
        id: 'law_044',
        text: {
            en: '⏳ Too Late Innocence: You defended a man executed 5 years ago. Today, you find DNA evidence in an old box proving he was 100% innocent. If you release it, the system looks bad and you might be sued for negligence.',
            th: '⏳ บริสุทธิ์สายไป: ลูกความโดนประหารไป 5 ปี วันนี้เจอ DNA ในกล่องเก่าพิสูจน์ว่าบริสุทธิ์ 100% ถ้าเปิดเผย ระบบเสียชื่อและคุณอาจโดนฟ้อง',
            zh: '⏳ 迟来的正义：你曾为一名在 5 年前被处决的男子辩护。今天，你在一个旧箱子里发现了 DNA 证据，证明他 100% 是清白的。如果公开，司法系统将颜面扫地，你本人也可能因过失而被告。'
        },
        options: [
            { id: 'A', text: { en: '📢 Reveal it:"The Truth matters. Clear his name."', th: '📢 เปิดเผย:"ความจริงสำคัญสุด ล้างมลทินให้เขา"', zh: '📢 公开真相：真相才是最重要的。必须还他一个清白。' }, consequence: { en: '⚖️ Scandal. Massive lawsuits. But you give his family peace. You sleep well.', th: '⚖️ ฉาวโถ่ ฟ้องเละ แต่ครอบครัวเขาได้ความยุติธรรม คุณนอนหลับ', zh: '⚖️ 惊天丑闻。虽然面临巨额诉讼，但你让死者家属得到了慰藉。你问心无愧。' }, stats: { competence: 40, ethics: 60, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🔥 Burn it:"He is dead. This only hurts the living. Protect the firm."', th: '🔥 เผา:"เขาตายแล้ว เปิดไปก็ทำร้ายคนอยู่ ปกป้องบริษัทดีกว่า"', zh: '🔥 销毁证据：人已经死了，公开只会伤害活着的人。必须保护律所的名声。' }, consequence: { en: '💀 Secret. You carry the weight to your grave. Alcoholism likely.', th: '💀 ความลับ แบกความลับจนตาย น่าจะเป็นพิษสุรา', zh: '💀 永恒的秘密。你带着这个秘密直到进坟墓，你可能会因此长期陷入酗酒。' }, stats: { competence: 30, ethics: -60, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🕵️ Anonymous Tip:"Send to Innocence Project anonymously."', th: '🕵️ ส่งลับ:"ส่งให้โครงการผู้บริสุทธิ์แบบไม่ระบุชื่อ"', zh: '🕵️ 匿名举报：匿名将证据发送给相关法律救援组织。' }, consequence: { en: '✅ Middle Ground. Truth comes out. You are not blamed directly.', th: '✅ คนละครึ่ง ความจริงปรากฏ คุณไม่โดนด่าตรงๆ', zh: '✅ 折中路线。真相大白于天下，而你也没有直接承受指责的炮火。' }, stats: { competence: 40, ethics: 40, leadership: 20, innovation: 20 } },
            { id: 'D', text: { en: '💰 Pay Family:"Anonymously donate money to his kids. Say nothing."', th: '💰 บริจาค:"บริจาคเงินให้ลูกเขาเงียบๆ ไม่พูดอะไร"', zh: '💰 资助家属：匿名向死者的孩子捐赠一大笔钱。对此事绝口不提。' }, consequence: { en: '⚠️ Guilt Tax. Money doesn\'t fix justice. You are haunted.', th: '⚠️ ภาษีบาป เงินซื้อความยุติธรรมไม่ได้ คุณถูกหลอน', zh: '⚠️ 愧疚税。金钱买不回正义。你的一生都将在死者的鬼魂纠缠中度过。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } }
        ]
    },



    {
        id: 'law_045',
        text: {
            en: '🛢️ Environmental Disaster: Oil company client ruined a small town\'s water. 100 kids sick. They want you to delay the trial for 10 years until plaintiffs die or run out of money.',
            th: '🛢️ หายนะสิ่งแวดล้อม: บ่อน้ำมันทำน้ำปนเปื้อน เด็กป่วย 100 คน จ้างให้คุณถ่วงเวลา 10 ปีจนกว่าโจทก์จะตายหรือเงินหมด',
            zh: '🛢️ 环境灾难：你的石油公司客户毁了一个小镇的水源。100 名儿童因此患病。他们要求你将审判拖延 10 年，直到原告死亡或耗尽资金。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Delay:"File every motion possible. It\'s my job to defend."', th: '🛡️ ถ่วง:"ยื่นทุกคำร้องที่ทำได้ หน้าที่ผมคือแก้ต่าง"', zh: '🛡️ 拖延战术：提交所有可能的动议。我的职责就是全力为客户辩护。' }, consequence: { en: '⚠️ Success/Evil. You win by attrition. You are rich but reviled.', th: '⚠️ สำเร็จ/ชั่ว ชนะเพราะอีกฝั่งหมดแรง รวยแต่เลว', zh: '⚠️ 邪恶的成功。你在持久战中获胜了。你赢得盆满钵满，但也成为了众矢之的。' }, stats: { competence: 50, ethics: -60, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🤝 Force Settlement:"Tell CEO: \'Pay them NOW or I quit and leak why.\'"', th: '🤝 บังคับจ่าย:"บอก CEO: \'จ่ายเดี๋ยวนี้ไม่งั้นผมออกและแฉ\'"', zh: '🤝 强制和解：告诉 CEO，如果现在不付钱，我就辞职并揭发内幕。' }, consequence: { en: '🦁 Bravado. Company pays $100M. You lose the client but save the kids.', th: '🦁 ใจเด็ด บริษัทจ่าย 100 ล้าน เสลูกค้าแต่ช่วยเด็ก', zh: '🦁 英勇气概。公司支付了 1 亿美元赔偿。你失去了这个大客户，但拯救了那些孩子。' }, stats: { competence: 40, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '🧑‍🔬 Science Defense:"Argue the water was already bad. Technical victory."', th: '🧑‍🔬 สู้ด้วยวิทย์:"อ้างว่าน้ำมันเน่าอยู่แล้ว ชนะด้วยเทคนิค"', zh: '🧑‍🔬 科学辩护：辩称这里的水源质量原本就很差。通过技术手段获胜。' }, consequence: { en: '🧠 Cold Logic. You win on causation. Morally ambiguous.', th: '🧠 ตรรกะเย็นชา ชนะเรื่องเหตุผล สับสนทางศีลธรรม', zh: '🧠 冷酷逻辑。你在因果律上赢得了官司。道德上极具争议。' }, stats: { competence: 50, ethics: 10, leadership: 30, innovation: 30 } },
            { id: 'D', text: { en: '🚪 Withdraw:"I can\'t look at those kids. I\'m out."', th: '🚪 ถอนตัว:"ทนดูเด็กไม่ได้ ผมไปล่ะ"', zh: '🚪 退出案件：我无法直视那些孩子的眼睛。我不干了。' }, consequence: { en: '📉 Clean Hands. You lose fees. Another lawyer takes the job and delays it anyway.', th: '📉 มือสะอาด เสียเงิน ทนายคนอื่นมารับงานต่อแล้วก็ถ่วงอยู่ดี', zh: '📉 洁身自好。你损失了律师费。另一名律师接手了工作，并照样拖延了审判。' }, stats: { competence: 20, ethics: 50, leadership: 10, innovation: 0 } }
        ]
    },



    {
        id: 'law_046',
        text: {
            en: '⚖️ The Judgeship: Offered a Federal Judgeship. Lifetime appointment. Prestige. But salary drops from $1.5M to $220k. You have expensive taste.',
            th: '⚖️ เก้าอี้ผู้พิพากษา: ได้เสนอเป็นผู้พิพากษาศาลกลาง ตลอดชีวิต เกียรติยศ แต่เงินเดือนลดจาก 1.5 ล้านเหลือ 2 แสน และคุณใช้เงินเก่ง',
            zh: '⚖️ 法官之约：你获得了一个联邦法官席位的提名。这是终身任职，极具荣誉，但你的年薪将从 150 万美元暴跌至 22 万美元。而你平时的生活开销极大。'
        },
        options: [
            { id: 'A', text: { en: '🏛️ Accept:"Power > Money. I\'ll budget."', th: '🏛️ รับ:"อำนาจ > เงิน เดี๋ยวประหยัดเอา"', zh: '🏛️ 接受：权力大于金钱。我会节省开支的。' }, consequence: { en: '📜 Legacy. You become a respected judge. You drive a Honda. History remembers you.', th: '📜 ตำนาน เป็นผู้พิพากษาที่เคารพ ขับฮอนด้า ประวัติศาสตร์จารึก', zh: '📜 辉煌遗产。你成为了一名受人尊敬的法官，虽然开着便宜的车，但历史会铭记你的名字。' }, stats: { competence: 50, ethics: 50, leadership: 60, innovation: 30 } },
            { id: 'B', text: { en: '💰 Decline:"I can\'t afford the pay cut. Maybe when I\'m 60."', th: '💰 ปฏิเสธ:"รับไม่ไหว ไว้ 60 ค่อยว่ากัน"', zh: '💰 拒绝：我承担不起降薪。也许等到我 60 岁之后再说。' }, consequence: { en: '💸 Rich. You keep making millions. But you never get asked again.', th: '💸 รวย หาเงินล้านต่อ แต่เขาไม่ชวนอีกแล้ว', zh: '💸 追求财富。你继续赚着数百万的年薪，但你再也不会获得这种提名的机会。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🔄 Part-Time?:"Ask if I can keep some consulting board seats?"', th: '🔄 พาร์ทไทม์?:"ถามว่านั่งบอร์ดที่ปรึกษาด้วยได้ไหม?"', zh: '🔄 讨价还价：问问看我能不能保留一些顾问委员会的席位兼职？' }, consequence: { en: '❌ Rejected. Conflict of interest. Offer withdrawn. You look greedy.', th: '❌ โดนปัด ขัดผลประโยชน์ โดนถอนคำเชิญ ดูโลภ', zh: '❌ 惨遭拒绝。因利益冲突，提名被撤回。你在高层眼中显得贪婪且不专业。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '📢 Leverage:"Tell partners I might leave to get a raise."', th: '📢 ต่อรอง:"บอกเพื่อนว่าจะไป เพื่อขอขึ้นเงินเดือน"', zh: '📢 借势抬价：告诉合伙人们我可能会离职去当法官，要求加薪。' }, consequence: { en: '💵 Raise. You stay. Partners know you chose money over public service.', th: '💵 ขึ้นเงิน อยู่ต่อ เพื่อนรู้ว่าเห็นแก่เงินมากกว่าชาติ', zh: '💵 获得加薪。你留了下来。合伙人们知道你选择了金钱而非公共服务。' }, stats: { competence: 40, ethics: 20, leadership: 20, innovation: 0 } }
        ]
    },



    {
        id: 'law_047',
        text: {
            en: '📓 The Burn Book: You find a Senior Partner\'s diary. It details every illegal act, bribe, and affair in the firm for 20 years. It\'s potential nuclear war.',
            th: '📓 สมุดบัญชีดำ: เจไดอารี่ของหุ้นส่วนใหญ่ จดทุกความชั่ว สินบน ชู้สาว 20 ปี นี่มันระเบิดนิวเคลียร์',
            zh: '📓 黑料账本：你发现了一名资深合伙人的日记。里面详细记录了律所 20 年来每一桩违法行为、贿赂丑闻以及婚外情。这是可能引发司法地震的核弹级证据。'
        },
        options: [
            { id: 'A', text: { en: '🔥 Keep it:"Insurance. Nobody can ever fire me."', th: '🔥 เก็บไว้:"ประกันภัย ใครก็ไล่ฉันไม่ได้"', zh: '🔥 留作保命符：这是我的保险。这样谁也别想开除我。' }, consequence: { en: '👑 Untouchable. You rise to Name Partner quickly. Everyone fears you.', th: '👑 แตะไม่ได้ ขึ้นเป็นหุ้นส่วนที่มีชื่อในป้ายบริษัท ทุกคนกลัว', zh: '👑 凌驾一切。你迅速晋升为冠名合伙人。每个人都对你敬而远之，心存恐惧。' }, stats: { competence: 40, ethics: -40, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '📢 Publish:"Send to DOJ. Burn the place down."', th: '📢 แฉ:"ส่งให้ DOJ เผาให้ราบ"', zh: '📢 揭发：将其发送给司法部。让这个肮脏的地方彻底化为灰烬。' }, consequence: { en: '💣 Apocalypse. Firm closes. Everyone arrested. You are safe but unemployed/hated.', th: '💣 ล้างโลก บริษัทปิด โดนจับเรียบ คุณรอดแต่ตกงาน/โดนเกลียด', zh: '💣 末日降临。律所倒闭，所有人被捕。你虽然安全，但失业了，且成了法律界的公敌。' }, stats: { competence: 30, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🔄 Destroy:"Shred it. I don\'t want to know."', th: '🔄 ทำลาย:"ย่อยทิ้ง ไม่อยากรับรู้"', zh: '🔄 彻底销毁：将其粉碎。这种事我一点都不想知道。' }, consequence: { en: '🛡️ Status Quo. Evil continues, but you are not involved.', th: '🛡️ เหมือนเดิม ชั่วต่อไป แต่เราไม่เกี่ยว', zh: '🛡️ 维持现状。邪恶依然存在，但你成功避开了这场风暴。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🕵️ Selective Leak:"Leak only rival\'s dirt. Take his spot."', th: '🕵️ เลือกแฉ:"แฉเฉพาะคู่แข่ง แย่งเก้าอี้"', zh: '🕵️ 定向泄露：只曝光竞争对手的黑料，取而代之。' }, consequence: { en: '♟️ Sniper. Surgical strike. You win, but you are a monster.', th: '♟️ สไนเปอร์ ยิงแม่น ชนะแต่เป็นปีศาจ', zh: '♟️ 精确打击。你赢得了权位的角逐，但你已逐渐变成了一个怪物。' }, stats: { competence: 50, ethics: -50, leadership: 30, innovation: 40 } }
        ]
    },



    {
        id: 'law_048',
        text: {
            en: '⚖️ The Supreme Court: Nominated for Supreme Court. Vetting will reveal you smoked pot in college and defended bad biz. Family privacy at risk.',
            th: '⚖️ ศาลฎีกา: ได้รับเสนอชื่อ แต่จะโดนขุดเรื่องสูบกัญชาและแก้ต่างให้คนเลว ครอบครัวเสียความเป็นส่วนตัว',
            zh: '⚖️ 大法官提名：你获得了最高法院大法官的提名。背景审查将揭露你大学时吸食大麻的往事，以及你曾为不良企业辩护的记录。你家人的隐私也将因此处于聚光灯下。'
        },
        options: [
            { id: 'A', text: { en: '🏛️ Accept:"History calls. I can take the mud."', th: '🏛️ รับ:"ประวัติศาสตร์เรียกหา รับได้ทุกโคลนตม"', zh: '🏛️ 接受：历史正在召唤我。我可以忍受任何流言蜚语。' }, consequence: { en: '📜 Justice. Confirmed by 1 vote. Serve 25 years. Legend.', th: '📜 ยุติธรรม ผ่านเฉียดฉิว 1 เสียง อยู่ยาว 25 ปี ตำนาน', zh: '📜 大法官诞生。仅以 1 票之差通过。任职 25 年，终成传奇。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'B', text: { en: '🏡 Decline:"Family first. Stay rich in private practice."', th: '🏡 ปฏิเสธ:"ครอบครัวมาก่อน รวยเงียบๆ ดีกว่า"', zh: '🏡 拒绝：家庭至上。在律所里安心赚大钱也是个不错的选择。' }, consequence: { en: '💰 Forgotten. Rich but obscure. Comfort over history.', th: '💰 ถูกลืม รวยแต่ไม่มีใครจำ สบายแต่ไร้ตำนาน', zh: '💰 被人遗忘。你变得富有却平庸。你选择了安逸及物质享受，而非历史功勋。' }, stats: { competence: 40, ethics: 45, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '📢 Pre-empt:"Admit everything day 1. \'Yes I inhaled.\'"', th: '📢 ชิงสารภาพ:"รับหมดตั้งแต่วันแรก \'ครับผมดูด\'"', zh: '📢 抢占先机：第一天就坦白一切，“没错，我是吸了”。' }, consequence: { en: '🛡️ Teflon. Honesty disarms critics. Easy confirmation. Game changer.', th: '🛡️ หนังเหนียว ซื่อจนคนด่าไม่ออก ผ่านฉลุย เปลี่ยนเกม', zh: '🛡️ 全能防御。诚实消解了批评。你轻松通过了审查，成为了游戏规则的改变者。' }, stats: { competence: 45, ethics: 45, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '🕵️ Clean Record:"Hire fixer to erase college records."', th: '🕵️ ล้างประวัติ:"จ้างคนลบประวัติมหาลัย"', zh: '🕵️ 洗白记录：聘请专业人士抹掉大学期间的不良记录。' }, consequence: { en: '⚖️ Impeached. Caught later. Disgrace. First Justice impeached.', th: '⚖️ ถอดถอน โดนจับได้ทีหลัง อัปยศ โดนปลดคนแรก', zh: '⚖️ 惨遭弹劾。随后被发现造假，你的余生将在耻辱中度过，并成为了首位被弹劾的大法官。' }, stats: { competence: 20, ethics: -80, leadership: -50, innovation: 0 } }
        ]
    },



    {
        id: 'law_049',
        text: {
            en: '📖 The Memoir: You retire. Publisher offers $5M for a"tell-all"book about your famous cases and clients. It violates confidentiality spirit but legal after death.',
            th: '📖 บันทึกความทรงจำ: เกษียณแล้ว สนพ. ให้ 5 ล้านเขียนแฉคดีดัง ผิดวิญญาณจรรยาบรรณแต่ถูกกฎหมาย (เพราะลูกความตายแล้ว)',
            zh: '📖 回忆录：在你退休之际，有出版商出价 500 万美元邀请你写一本“披露一切”的回忆录。虽然这违背了保密原则的精神，但在客户去世后在法律上是可行的。'
        },
        options: [
            { id: 'A', text: { en: '✍️ Write it:"The public deserves the truth. And I want the money."', th: '✍️ เขียน:"ประชาชนควรได้รู้ความจริง และฉันอยากได้เงิน"', zh: '✍️ 执笔：公众有权知道真相。而且，我也确实想要那笔钱。' }, consequence: { en: '💰 Best Seller. You are rich. Clients hate you. Legacy is"Snipe".', th: '💰 ขายดี รวย ลูกค้าเกลียด ตำนานคือ"คนปากโป้ง"', zh: '💰 畅销榜首。你大赚一笔，但老客户们对你避之唯恐不及。你留下的名声是“大嘴巴”。' }, stats: { competence: 50, ethics: -10, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🤐 Seal it:"Burn my journals. My secrets die with me."', th: '🤐 ปิดตาย:"เผาบันทึก ความลับตายไปกับฉัน"', zh: '🤐 封存一切：销毁我的所有日记。我的秘密将随我一同进土。' }, consequence: { en: '🛡️ Integrity. You die a"Lawyer\'s Lawyer."Respect eternal.', th: '🛡️ ศักดิ์ศรี ตายอย่าง"ทนายของทนาย"เคารพนิรันดร์', zh: '🛡️ 绝对气节。你作为一名“律师中的律师”离世。你赢得了法律界永久的尊敬。' }, stats: { competence: 40, ethics: 60, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '📚 Fiction:"Change names. Write it as a legal thriller novel."', th: '📚 นิยาย:"เปลี่ยนชื่อ เขียนเป็นนิยายสืบสวน"', zh: '📚 小说化：改变所有姓名，将其写成一部法律惊悚小说。' }, consequence: { en: '🌟 Movie Rights. Safe. People guess who is who. Fun legacy.', th: '🌟 เป็นหนัง ปลอดภัย คนเดาว่าใครเป็นใคร สนุกดี', zh: '🌟 电影版权。这种方式很安全，人们热衷于猜测原型是谁。这是一份有趣的职业遗产。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 60 } },
            { id: 'D', text: { en: '🎓 Textbook:"Write a dry academic book on strategy. No gossip."', th: '🎓 หนังสือเรียน:"เขียนตำราวิชาการแห้งๆ ไม่มีการเม้าท์"', zh: '🎓 教材：写一本内容严谨的法律策略学术教科书，不包含任何八卦。' }, consequence: { en: '📉 Respect/Boredom. Law students read it. Niche fame.', th: '📉 เคารพ/น่าเบื่อ นศ.กฎหมายอ่าน ดังในวงแคบ', zh: '📉 备受尊敬却枯燥乏味。只有法学院学生会读它。你在小众领域享有盛名。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 10 } }
        ]
    },



    {
        id: 'law_050',
        text: {
            en: '⚖️ The Last Case: You are 80. A hopeless case comes in. A child accuses a powerful corporation of poisoning them. Nobody will take it. It will bankrupt you to fight.',
            th: '⚖️ คดีสุดท้าย: อายุ 80 คดีสิ้นหวัง เด็กฟ้องบริษัทยักษ์ว่าวางยาพิษ ไม่มีใครรับทำ ถ้าทำคือหมดตัวแน่',
            zh: '⚖️ 最后一案：你已经 80 岁了。接到了一个看似毫无希望的案子：一个孩子指控一家强大的公司向他们投毒。没人愿意接手，因为即使只是参与战斗，也会让你倾家荡产。'
        },
        options: [
            { id: 'A', text: { en: '⚔️ Fight:"One last ride. Ideally I die in the courtroom winning."', th: '⚔️ ลุย:"ขอซ่าครั้งสุดท้าย ตายคาศาลตอนชนะคือที่สุด"', zh: '⚔️ 投身战斗：“最后一战。最好的结果是我在法庭上带着胜利的光辉离世。”' }, consequence: { en: '🕊️ Immortality. You win. You die shortly after. Statue enacted.', th: '🕊️ เป็นอมตะ ชนะ ตายตาหลับ มีรูปปั้น', zh: '🕊️ 不朽。你赢了，并在不久后去世。他们为你塑立了铜像。' }, stats: { competence: 60, ethics: 60, leadership: 60, innovation: 60 } },
            { id: 'B', text: { en: '🛑 Refer:"I\'m too old. Give it to a young shark."', th: '🛑 ส่งต่อ:"แก่เกินไป ให้เด็กมันทำ"', zh: '🛑 引荐他人：“我太老了。把它交给一个年轻气盛的‘小鲨鱼’吧。”' }, consequence: { en: '📉 Quiet End. You die in bed. The case loses. You regret it.', th: '📉 จบเงียบ ตายบนเตียง คดีแพ้ เสียดาย', zh: '📉 沉寂收场。你在病床上默默离去。案子败诉了，你对此深感遗憾。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '💰 Fund it:"I won\'t fight, but here is $10M to fund the team."', th: '💰 ออกทุน:"ไม่ลงแรง แต่เอานี่ 10 ล้านไปสู้"', zh: '💰 资助：“我虽然不上阵，但这有 1000 万，拿去资助团队战斗。”' }, consequence: { en: '🧠 Patron. They win. You are the silent savior. Good ending.', th: '🧠 ผู้อุปถัมภ์ พวกเขาชนะ คุณคือผู้กอบกู้เงียบๆ จบสวย', zh: '🧠 幕后赞助。他们赢了，你是那位默默付出的拯救者。美满结局。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🤔 Settlement:"Negotiate a quiet payout for the kid."', th: '🤔 เจรจา:"คุยยอดจ่ายจบๆ ให้เด็ก"', zh: '🤔 和解：“去为孩子协商出一笔数额不小的封口费吧。”' }, consequence: { en: '😐 Realistic. Kid gets money. Evilcorp keeps polluting.', th: '😐 ความจริง เด็กได้เงิน บริษัทเลวทำชั่วต่อไป', zh: '😐 现实。孩子拿到了钱，但邪恶的企业仍在继续排放污染。' }, stats: { competence: 40, ethics: 20, leadership: 20, innovation: 0 } }
        ]
    }
];



