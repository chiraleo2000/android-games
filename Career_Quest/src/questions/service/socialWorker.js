// Social Worker Career Questions
// Ultra-Comprehensive set: 43 detailed, story-rich questions
// Each scenario is a mini-case study with deep consequences and realistic stat impacts

export const socialWorkerQuestions = [

    {
        id: 'sw_001',
        text: {
            en: '🏚️ The Sibling Split: Two siblings need foster care. You can place them together in a"mediocre"home, or split them up into two"excellent"homes. What is your priority?',
            th: '🏚️ พี่น้องต้องแยกจาก: พี่น้องสองคนต้องไปอยู่บ้านรับเลี้ยง คุณเลือกได้ระหว่าง"บ้านเกรดกลางๆ"ที่รับคู่ หรือ"บ้านเกรดดีเยี่ยม"แต่รับได้ทีละคน ต้องจับแยก จะเลือกอะไร?',
            zh: '🏚️ 兄妹分离：两兄妹需要寄养。你可以把他们一起安置在一个“普通”家庭，或者分开安置在两个“优秀”家庭。你的优先事项是什么？'
        },
        options: [
            {
                id: 'A',
                text: { en: '👨‍👩‍👧 Keep them Together', th: '👨‍👩‍👧 ให้อยู่ด้วยกัน', zh: '👨‍👩‍👧 让他们在一起' },
                consequence: { en: '✅ Bond Saved. The home isn\'t perfect, but they have each other. They survive the trauma better together. Mental health win.', th: '✅ รักษาใจ! บ้านไม่หรูแต่มีกันและกัน สภาพจิตใจดีกว่าเพราะไม่โดนจับแยก', zh: '✅ 纽带得以保留。家庭并不完美，但他们拥有彼此。在一起能更好地度过创伤。心理健康获胜。' },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🏠 Optimize Environment', th: '🏠 เลือกบ้านที่ดีที่สุด', zh: '优化环境' },
                consequence: { en: '⚠️ Emotional Damage. They get great schools and food, but cry every night missing each other. One runs away.', th: '⚠️ แผลใจ! ได้โรงเรียนดีอาหารดี แต่ร้องไห้คิดถึงกันทุกคืน คนนึงหนีออกจากบ้าน', zh: '⚠️ 情感伤害。他们有很好的学校和食物，但每晚哭着想念对方。其中一个离家出走了。' },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '🔄 Rotate Them', th: '🔄 ผลัดกันอยู่', zh: '轮流居住' },
                consequence: { en: '❌ Instability. Moving them back and forth destroys their sense of security. Worst outcome.', th: '❌ ไม่มั่นคง! ย้ายไปมาทำลายความรู้สึกปลอดภัย เป็นผลลัพธ์ที่แย่ที่สุด', zh: '❌ 不稳定。来回搬动破坏了他们的安全感。最坏的结果。' },
                stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '🤝 Convince Rich Home', th: '🤝 กล่อมบ้านรวย', zh: '说服有钱家庭' },
                consequence: { en: '✅ Heroic Effort. You spent weeks convincing the"Excellent"home to take both. They agreed. Perfect outcome.', th: '✅ ฮีโร่! ใช้เวลาเป็นอาทิตย์กล่อมบ้านเกรดเอให้รับเลี้ยงคู่ ยอมตกลง จบสวยสุดๆ', zh: '✅ 英勇的努力。你花了数周说服“优秀”家庭同时接收两个孩子。他们同意了。完美的结果。' },
                stats: { competence: 60, ethics: 70, leadership: 60, innovation: 50 }
            }
        ]
    },


    {
        id: 'sw_002',
        text: {
            en: '🎁 The Client Gift: A struggling single mother gives you a $50 gift card to say thanks. She can\'t afford this. Rules say"No gifts >$10."Do you accept?',
            th: '🎁 ของขวัญจากใจ: คุณแม่เลี้ยงเดี่ยวฐานะยากจนมอบบัตรของขวัญ $50 ให้คุณเพื่อขอบคุณ กฎบอก"ห้ามรับเกิน $10"คุณรู้ว่าเธอเจียดเงินมา... จะรับไหม?',
            zh: '🎁 客户礼物：一位苦苦挣扎的单身母亲给你一张 50 美元的礼品卡以示感谢。她负担不起。规定说“不收超过 10 美元的礼物”。你收吗？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🎁 Accept Gratefully', th: '🎁 รับไว้ด้วยความยินดี', zh: '🎁 感激地接受' },
                consequence: { en: '⚠️ Ethics Violation. She feels empowered, but if your boss finds out, you are fired. High risk.', th: '⚠️ ผิดกฎ! เธอรู้สึกดีที่ได้ให้ แต่ถ้าเจ้านายรู้นี่ซวยหนัก เสี่ยงโดนไล่ออก', zh: '⚠️ 违反道德。她感到被赋予了权力，但如果你老板发现，你会被解雇。高风险。' },
                stats: { competence: 40, ethics: 20, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '✋ Decline Firmly', th: '✋ ปฏิเสธเสียงแข็ง', zh: '坚决拒绝' },
                consequence: { en: '❌ Shame. She feels rejected and embarrassed. Rapport is damaged."You think I\'m too poor to give?"', th: '❌ หน้าแตก! เธอรู้สึกโดนดูถูก ความสัมพันธ์ร้าวฉาน"คิดว่าฉันจนจนไม่มีปัญญาให้รึไง?"', zh: '❌ 羞耻。她感到被拒绝和尴尬。关系受损。“你觉得我穷到送不起礼物吗？”' },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🔄"Buy Groceries"', th: '🔄"เอาไปซื้อของเข้าบ้าน"', zh: '“买杂货”' },
                consequence: { en: '✅ Gentle Redirection."I can\'t check this, but let\'s use it to buy dinner for the kids right now together."', th: '✅ เปลี่ยนทิศทางบวก!"ผมรับไม่ได้ครับ แต่เราเอาไปซื้อข้าวเย็นให้เด็กๆ กินกันตอนนี้เลยดีกว่า"', zh: '✅ 委婉引导。“我不能收这个，但我们现在一起用它给孩子们买晚饭吧。”' },
                stats: { competence: 60, ethics: 70, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '🤝 Accept for Office', th: '🤝 รับเข้ากองกลาง', zh: '接受归公' },
                consequence: { en: '✅ Bureaucracy. You accept it on behalf of the agency to buy office toys. Safe but impersonal.', th: '✅ ตามระเบียบ! รับในนามองค์กรเอาไปซื้อของเล่นส่วนกลาง ปลอดภัยแต่ดูห่างเหิน', zh: '✅ 官僚主义。你代表机构接受它去买办公室玩具。安全但不近人情。' },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 10 }
            }
        ]
    },


    {
        id: 'sw_003',
        text: {
            en: '🔥 Burnout Case Load: The limit is 15 cases. You have 35. You are missing visits. A supervisor asks you to take"just one more"emergency case.',
            th: '🔥 โอเวอร์โหลด: ลิมิตคือ 15 เคส คุณถืออยู่ 35 เริ่มเยี่ยมไม่ครบแล้ว หัวหน้าขอให้รับเคสฉุกเฉิน"อีกแค่คนเดียว"',
            zh: '🔥 倦怠负荷：上限是 15 个案子。你有 35 个。你错过了探访。主管让你“再接一个”紧急案子。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🦸 Take It', th: '🦸 รับมาทำ', zh: '接下' },
                consequence: { en: '💀 Failure. You miss a critical sign in another case because you are tired. A child gets hurt. Your fault.', th: '💀 ล้มเหลว! เหนื่อยจนพลาดสัญญาณเตือนในเคสอื่น เด็กบาดเจ็บ ความผิดคุณเต็มๆ', zh: '💀 失败。因为太累，你错过了另一个案子的关键信号。一个孩子受伤了。你的错。' },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🛑 Refuse', th: '🛑 ปฏิเสธ', zh: '拒绝' },
                consequence: { en: '✅ Boundaries. The supervisor is mad, but assigns it to someone else. You preserved quality for your current 35.', th: '✅ ขีดเส้น! หัวหน้าโกรธแต่ก็ส่งให้คนอื่น คุณรักษาคุณภาพดูแล 35 คนเดิมไว้ได้', zh: '✅ 界限。主管很生气，但把它分给了别人。你保住了现有 35 个案子的质量。' },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '📢 Whistleblow', th: '📢 ร้องเรียนสื่อ', zh: '吹哨' },
                consequence: { en: '⚠️ Career Risk. You expose the understaffing to news. Public outrage. Funding increases, but you are blacklisted.', th: '⚠️ เสี่ยงตกงาน! แฉเรื่องคนไม่พอกับสื่อ สังคมประณาม ได้งบเพิ่มแต่คุณโดนหมายหัว', zh: '⚠️ 职业风险。你向新闻曝光人手不足。公众愤怒。资金增加，但你被列入黑名单。' },
                stats: { competence: 40, ethics: 50, leadership: 70, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '📋 Quiet Quit', th: '📋 ทำเท่าที่ไหว', zh: '安静辞职' },
                consequence: { en: '❌ Neglect. You do the bare minimum paperwork. Real people suffer. You become part of the broken system.', th: '❌ ละเลย! ทำแค่เอกสารผักชีโรยหน้า คนเดือดร้อนจริง คุณกลายเป็นส่วนหนึ่งของระบบเฮงซวย', zh: '❌ 忽视。你只做最低限度的文书工作。真正的人在受苦。你成了破碎系统的一部分。' },
                stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 }
            }
        ]
    },


    {
        id: 'sw_004',
        text: {
            en: '📱 The Personal Number: A teen client is in crisis at 2 AM. He calls your personal cell phone (which he shouldn\'t have). He says he has a knife.',
            th: '📱 สายด่วนส่วนตัว: วัยรุ่นในความดูแลโทรหาเบอร์ส่วนตัวตอนตี 2 (ซึ่งไม่ควรจะมีเบอร์) บอกว่ากำลังถือมีดอยู่',
            zh: '📱 私人电话：一名青少年客户在凌晨 2 点陷入危机。他打你的私人手机（他不该有这个号码）。他说他有把刀。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📞 Hang Up & Call 911', th: '📞 วางสายแล้วแจ้งตำรวจ', zh: '📞 挂断并报警' },
                consequence: { en: '✅ Protocol. Police arrive. He is safe but feels betrayed you didn\'t talk to him.', th: '✅ ตามกฎ! ตำรวจไปถึง เขาปลอดภัยแต่รู้สึกเหมือนโดนหักหลังที่คุณไม่คุยด้วย', zh: '✅ 协议。警察赶到。他安全了，但因为你没和他说话而感到被出卖。' },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '💬 Talk Him Down', th: '💬 คุยกล่อม', zh: '劝说他' },
                consequence: { en: '✅ Life Saved. You talk for 3 hours. He drops the knife. You cross a boundary, but he is alive.', th: '✅ ช่วยชีวิต! คุยกัน 3 ชั่วโมงจนยอมวางมีด ล้ำเส้นความเป็นส่วนตัวแต่ช่วยชีวิตได้', zh: '✅ 挽救生命。你谈了 3 个小时。他放下了刀。你越界了，但他活着。' },
                stats: { competence: 60, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '🚗 Drive There', th: '🚗 ขับรถไปหา', zh: '开车过去' },
                consequence: { en: '💀 Dangerous. Never go alone to an armed crisis. You could get hurt. Creating dependency.', th: '💀 อันตราย! ห้ามไปหาคนถืออาวุธคนเดียวเด็ดขาด อาจโดนลูกหลง สร้างพฤติกรรมติดพึ่งพา', zh: '💀 危险。永远不要独自去面对武装危机。你可能会受伤。制造依赖。' },
                stats: { competence: 10, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '💤 Ignore (Sleep)', th: '💤 นอนต่อ', zh: '无视（睡觉）' },
                consequence: { en: '💀 Tragedy. You assume he\'s bluffing. He isn\'t. He harms himself. Negligence.', th: '💀 โศกนาฏกรรม! นึกว่าขู่เล่น ที่ไหนได้ทำจริง โดนข้อหาละเลย', zh: '💀 悲剧。你以为他在虚张声势。他没有。他伤害了自己。玩忽职守。' },
                stats: { competence: 0, ethics: -50, leadership: 0, innovation: 0 }
            }
        ]
    },


    {
        id: 'sw_005',
        text: {
            en: '👴 Elder Abuse?: You visit an elderly home. The grandma has bruises. The son says"She fell."She is silent and looks scared. No other proof.',
            th: '👴 คนแก่โดนทำร้าย?: ไปเยี่ยมบ้านคนชรา ยายมีรอยช้ำ ลูกชายบอก"แม่ล้มเอง"ยายนั่งเงียบตาตื่น ไม่มีหลักฐานอื่น',
            zh: '👴 虐待老人？：你拜访老人院。老奶奶身上有淤青。儿子说“她摔倒了”。她沉默不语，看起很害怕。没有其他证据。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📝 Report Suspicion', th: '📝 รายงานข้อสงสัย', zh: '📝 报告嫌疑' },
                consequence: { en: '✅ Investigation. APS investigates. They find more abuse. She is moved to safety. You did your job.', th: '✅ สืบสวน! หน่วยงานเข้าตรวจสอบ เจอหลักฐานเพิ่ม ย้ายยายไปที่ปลอดภัย ทำหน้าที่ได้ดี', zh: '✅ 调查。APS 介入调查。他们发现了更多虐待行为。她被转移到安全地带。你尽职了。' },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🗣️ Confront Son', th: '🗣️ คาดคั้นลูกชาย', zh: '与儿子对质' },
                consequence: { en: '❌ Dangerous. He gets angry and kicks you out. Now he knows you suspect him and might hide her better.', th: '❌ พลาด! เขาโกรธไล่คุณกลับ ตอนนี้เขารู้ตัวแล้วอาจจะซ่อนยายมิดชิดกว่าเดิม', zh: '❌ 危险。他生气把你赶了出去。现在他知道你怀疑他，可能会把她藏得更严实。' },
                stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '📸 Secret Photo', th: '📸 แอบถ่ายรูป', zh: '偷拍照片' },
                consequence: { en: '⚠️ Grey Area. Taking photos without consent is tricky, but it serves as evidence. Risky but effective.', th: '⚠️ เทาๆ! แอบถ่ายโดยไม่ขออนุญาตมันเสี่ยงผิดกฎ แต่เป็นหลักฐานชั้นดี ได้ผลแต่เสี่ยง', zh: '⚠️ 灰色地带。未经同意拍照很棘手，但能作为证据。有风险但有效。' },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 30 }
            },
            {
                id: 'D',
                text: { en: '🤝 Believe Son', th: '🤝 เชื่อลูกชาย', zh: '相信儿子' },
                consequence: { en: '💀 Negligence. You leave. She ends up hospitalized next week. You missed the signs.', th: '💀 ละเลย! คุณกลับไป อาทิตย์หน้ายายเข้าโรงพยาบาลหนัก คุณพลาดสัญญาณเตือน', zh: '💀 玩忽职守。你走了。下周她进了医院。你错过了信号。' },
                stats: { competence: 10, ethics: -20, leadership: 0, innovation: 0 }
            }
        ]
    },


    {
        id: 'sw_006',
        text: {
            en: '🍺 The Relapse: A father has been sober for 6 months to get his kids back. You catch him with a beer. He begs:"It\'s just one, don\'t reset the clock."',
            th: '🍺 กลับไปดื่ม: พ่อเลิกเหล้ามา 6 เดือนเพื่อขอลูกคืน คุณจับได้ว่าเขาดื่มเบียร์ เขาขอร้อง"แค่กระป๋องเดียว อย่าเริ่มนับหนึ่งใหม่เลย"',
            zh: '🍺 复发：一位父亲为了要回孩子已经戒酒 6 个月。你抓到他喝啤酒。他求你：“就这一瓶，别重置时间。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '📝 Report Failure', th: '📝 รายงานว่าไม่ผ่าน', zh: '📝 报告失败' },
                consequence: { en: '✅ Strict Safety. He fails the check. Kids stay in foster care. Hard, but ensures sobriety is real.', th: '✅ เข้มงวด! เขาไม่ผ่านเกณฑ์ ลูกต้องอยู่บ้านรับเลี้ยงต่อ โหดร้ายแต่มั่นใจว่าเขาเลิกได้จริง', zh: '✅ 严格安全。他没通过检查。孩子留在寄养家庭。很难，但确保了真正的清醒。' },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤫 Warning Only', th: '🤫 ให้ใบเตือน', zh: '仅警告' },
                consequence: { en: '⚠️ Compassion Risk. You give him a chance. Data shows 80% relapse fully. If he hurts the kids later, it\'s on you.', th: '⚠️ เมตตาพาซวย! ให้โอกาสเขา สถิติบอก 80% กลับไปติดใหม่ ถ้าเขาทำร้ายลูกทีหลัง ความผิดคุณ', zh: '⚠️ 同情风险。你给了他机会。数据显示 80% 会完全复发。如果他后来伤害孩子，算你的。' },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '🧪 Immediate Test', th: '🧪 สั่งตรวจฉี่ทันที', zh: '立即检测' },
                consequence: { en: '✅ Fact Based."If you blow 0.0, okay. If not, failed."Fair and objective.', th: '✅ อิงความจริง!"ถ้าเป่าแล้วเป็น 0 ก็รอด ถ้าขึ้นก็ตก"แฟร์ๆ ไม่ใช้ความรู้สึก', zh: '✅ 基于事实。“如果你吹出来是 0.0，行。如果不是，失败。”公平客观。' },
                stats: { competence: 60, ethics: 50, leadership: 50, innovation: 20 }
            },
            {
                id: 'D',
                text: { en: '🍺 Join Him', th: '🍺 นั่งดื่มด้วย', zh: '加入他' },
                consequence: { en: '💀 Fired. Unprofessional boundary crossing. You lose your license.', th: '💀 ไล่ออก! ล้ำเส้นความเป็นมืออาชีพสุดกู่ โดนยึดใบอนุญาต', zh: '💀 被解雇。不专业的越界。你吊销执照。' },
                stats: { competence: 0, ethics: -50, leadership: 0, innovation: 0 }
            }
        ]
    },


    {
        id: 'sw_007',
        text: {
            en: '🏡 The Housing Crisis: A family is perfect but homeless due to rent eviction. You must take the kids unless they find a home in 24h. Shelters are full.',
            th: '🏡 วิกฤตที่อยู่: ครอบครัวอบอุ่นแต่โดนไล่ที่จนไร้บ้าน ต้องยึดลูกมาดูแลถ้าหาบ้านไม่ได้ใน 24 ชม. ศูนย์พักพิงเต็มหมด',
            zh: '🏡 住房危机：一个家庭很完美，但因欠租被驱逐而无家可归。除非他们在 24 小时内找到住处，否则你必须带走孩子。收容所满了。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🏨 Pay Motel Yourself', th: '🏨 จ่ายค่าโมเต็ลให้', zh: '🏨 自己付汽车旅馆费' },
                consequence: { en: '✅ Savior. You pay $100 for a room. They stay together. You are broke but happy. Not sustainable though.', th: '✅ พ่อพระ! ควัก 3,000 จ่ายค่าห้องให้ เขาได้อยู่ด้วยกัน คุณถังแตกแต่สุขใจ (แต่ทำบ่อยไม่ได้นะ)', zh: '✅ 救星。你付 100 美元开了房。他们在一起。你破产但开心。但这不可持续。' },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🚗 Allow Car Sleeping', th: '🚗 ยอมให้นอนในรถ', zh: '允许睡车里' },
                consequence: { en: '⚠️ Grey Area. Legally"homeless,"but better than separation. You look the other way. Risky.', th: '⚠️ สีเทา! ตามกฎคือ"ไร้บ้าน"แต่ดีกว่าโดนพรากลูก แกล้งทำเป็นไม่เห็น เสี่ยงหน่อย', zh: '⚠️ 灰色地带。法律上是“无家可归”，但比分离好。你睁只眼闭只眼。冒险。' },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '👮 Remove Kids', th: '👮 พาเด็กไปศูนย์', zh: '带走孩子' },
                consequence: { en: '❌ Heartbreak. It\'s the law, but traumatizing. Parents scream. You hate your job today.', th: '❌ ใจสลาย! กฎคือกฎ พ่อแม่กรีดร้อง เป็นวันที่คุณเกลียดงานตัวเองที่สุด', zh: '❌ 心碎。这是法律，但造成创伤。父母尖叫。你今天恨你的工作。' },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '📞 Call Media/Charity', th: '📞 โทรหาสื่อ/วัด', zh: '致电媒体/慈善机构' },
                consequence: { en: '✅ Resourceful. You call a local church or post an anon plea. Community steps in with an RV. Win.', th: '✅ หัวไว! โทรหาวัดหรือโพสต์ขอบริจาค ชุมชนเอารถบ้านมาให้ ยอดเยี่ยม', zh: '✅ 足智多谋。你给当地教堂打电话或发布匿名求助。社区提供了一辆房车。赢了。' },
                stats: { competence: 60, ethics: 60, leadership: 70, innovation: 60 }
            }
        ]
    },


    {
        id: 'sw_008',
        text: {
            en: '🏫 The Bully Client: Your 12-year-old client is being bullied, but you discover HE is actually the ringleader terrorizing the school.',
            th: '🏫 เด็กในความดูแลเป็นอันธพาล: เด็ก 12 ขวบบอกว่าโดนแกล้ง แต่คุณสืบเจอว่าจริงๆ แล้ว "เขา" นั่นแหละคือหัวโจกที่รังแกคนทั้งโรงเรียน',
            zh: '🏫 霸凌客户：你 12 岁的客户声称被霸凌，但你发现“他”其实是恐吓全校的头目。'
        },
        options: [
            { id: 'A', text: { en: '🧱 Defend Him: "He is traumatized. School is scapegoating him."', th: '🧱 ปกป้อง: "เขามีปม โรงเรียนแค่หาแพะรับบาป"', zh: '🧱 维护他：“他受过创伤。学校在让他背黑锅。”' }, consequence: { en: '❌ Enabling. He feels invincible. His behavior worsens. He hurts someone badly later.', th: '❌ ให้ท้าย! เขาได้ใจ พฤติกรรมแย่ลง สุดท้ายไปทำร้ายคนอื่นบาดเจ็บหนัก', zh: '❌ 纵容。他觉得自己无敌。行为恶化。后来他重伤了别人。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '👮 Tough Love: "Confront him with evidence. Demand apology or report to police."', th: '👮 ยาแรง: "เอาหลักฐานฟาดหน้า บังคับขอโทษไม่งั้นแจ้งตำรวจ"', zh: '👮 严厉的爱：“拿着证据与其对质。要求道歉否则报警。”' }, consequence: { en: '✅ Breakthrough. He cries and admits fear. You start real therapy.', th: '✅ ได้ผล!เขาร้องไห้และยอมรับว่ากลัว เริ่มบำบัดที่ต้นเหตุได้จริง', zh: '✅ 突破。他哭着承认恐惧。你开始了真正的治疗。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '🔄 Transfer Schools: "Fresh start will fix it."', th: '🔄 ย้ายโรงเรียน: "เริ่มใหม่เดี๋ยวก็ดีเอง"', zh: '🔄 转学：“新的开始会解决问题。”' }, consequence: { en: '⚠️ Band-aid. He bullies kids at the new school. Problem moved, not solved.', th: '⚠️ แก้ผ้าเอาหน้ารอด! ไปที่ใหม่ก็ไปแกล้งคนอื่นต่อ ย้ายปัญหาไม่ได้แก้', zh: '⚠️ 权宜之计。他在新学校欺负孩子。问题转移了，没解决。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'D', text: { en: '👪 Family Meeting: "Bring in the parents. Address the cycle of violence."', th: '👪 เรียกผู้ปกครอง: "เรียกพ่อแม่มาคุย ตัดวงจรความรุนแรง"', zh: '👪 家庭会议：“把父母叫来。解决暴力循环。”' }, consequence: { en: '✅ Root Cause. You find the dad is aggressive. You intervene with family therapy.', th: '✅ เกาถูกที่คัน! เจอว่าพ่อชอบใช้ความรุนแรง ส่งบำบัดทั้งครอบครัว', zh: '✅ 根本原因。你发现父亲有攻击性。你介入家庭治疗。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 20 } }
        ]
    },



    {
        id: 'sw_009',
        text: {
            en: '🌏 Cultural Discipline: An immigrant father hits his son with a stick. In his culture, it is duty. In yours, it is abuse. The child loves the dad.',
            th: '🌏 ไม้เรียวสร้างคน?: พ่อชาวต่างชาติใช้ไม้ตีลูกสอนสั่ง ในวัฒนธรรมเขาคือหน้าที่ แต่ที่นี่คือทำร้ายร่างกาย เด็กรักพ่อมาก',
            zh: '🌏 文化纪律：一位移民父亲用棍子打儿子。在他的文化里，这是责任。在这里，这是虐待。孩子爱爸爸。'
        },
        options: [
            { id: 'A', text: { en: '👮 Remove Child: "Zero tolerance. Abuse is abuse."', th: '👮 แยกเด็ก: "ไม่ยอมความ ทำร้ายคือทำร้าย"', zh: '👮 带走孩子：“零容忍。虐待就是虐待。”' }, consequence: { en: '❌ Trauma. Family destroyed. Child hates you. System failure.', th: '❌ แผลใจ! ครอบครัวพัง เด็กเกลียดคุณ ความล้มเหลวของระบบ', zh: '❌ 创伤。家庭破碎。孩子恨你。系统性失败。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '📚 Education Plan: "Teach dad local laws. Compromise on discipline methods."', th: '📚 ให้ความรู้: "สอนกฎหมายที่นี่ให้พ่อเข้าใจ หาตรงกลางเรื่องการลงโทษ"', zh: '📚 教育计划：“教父亲当地法律。在管教方法上妥协。”' }, consequence: { en: '✅ Cultural Bridge. He agrees to stop hitting. Family stays together. Hard work but worth it.', th: '✅ สะพานวัฒนธรรม! เขายอมเลิกตี ครอบครัวอยู่รอด เหนื่อยเข็นแต่คุ้มค่า', zh: '✅ 文化桥梁。他同意不再打人。家庭团聚。辛苦但值得。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '👀 Ignore Once: "Just a warning. Don\'t document it."', th: '👀 หยวนๆ: "แค่เตือน ไม่ลงบันทึก"', zh: '👀 忽略一次：“只是警告。不记录。”' }, consequence: { en: '⚠️ Liability. If he hits harder next time, you are complicit. Dangerous precedent.', th: '⚠️ เสี่ยงคุก! ถ้าครั้งหน้าเขาตีแรงขึ้น คุณคือผู้สมรู้ร่วมคิด', zh: '⚠️ 责任。如果下次他打得更重，你就是同谋。危险的先例。' }, stats: { competence: 20, ethics: -10, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🗣️ Scold Dad Publicly: "Shame him into submission."', th: '🗣️ ประจาน: "ด่าให้ได้อายจะได้จำ"', zh: '🗣️ 当众斥责父亲：“羞辱他让他屈服。”' }, consequence: { en: '❌ Hostility. He closes off. Cooperation ends. Child hidden from you.', th: '❌ ศัตรู! เขาปิดกั้น เลิกให้ความร่วมมือ แอบซ่อนเด็กจากคุณ', zh: '❌ 敌意。他封闭了。合作结束。孩子躲着你。' }, stats: { competence: 10, ethics: 20, leadership: 0, innovation: 0 } }
        ]
    },



    {
        id: 'sw_010',
        text: {
            en: '✂️ Budget Cuts: Your "After-School Art Program" loses funding. 20 at-risk kids have nowhere to go but the streets.',
            th: '✂️ ตัดงบ: "ชมรมศิลปะหลังเลิกเรียน" โดนตัดงบ เด็กกลุ่มเสี่ยง 20 คนไม่มีที่ไปนอกจากข้างถนน',
            zh: '✂️ 预算削减：你的“课后艺术项目”失去了资金。20 名高危儿童除了街头无处可去。'
        },
        options: [
            { id: 'A', text: { en: '🤷 Accept It: "Budget is math. I can\'t change it."', th: '🤷 ทำใจ: "ไม่มีเงินก็จบ ผมแก้ตัวเลขไม่ได้"', zh: '🤷 接受：“预算就是数学。我改变不了。”' }, consequence: { en: '📉 Kids Lost. 3 kids get arrested within a month. Impact failure.', th: '📉 เสียเด็ก! 3 คนโดนจับในเดือนเดียว ความล้มเหลวของงาน', zh: '📉 孩子迷失。一个月内有 3 个孩子被捕。影响失败。' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🎨 Volunteer Time: "Run it yourself unpaid."', th: '🎨 อาสาเอง: "ทำเองฟรีๆ ไม่ต้องใช้งบ"', zh: '🎨 志愿者时间：“自己无偿运营。”' }, consequence: { en: '⚠️ Burnout. Noble, but you collapse after 2 months. Sustainable solution needed.', th: '⚠️ หมดไฟ! พระเอก แต่ทำได้ 2 เดือนก็ร่วง ต้องหาทางที่ยั่งยืนกว่านี้', zh: '⚠️ 倦怠。高尚，但 2 个月后你累垮了。需要可持续的解决方案。' }, stats: { competence: 40, ethics: 60, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Corporate Sponsor: "Cold-call local businesses. \'Sponsor a Kid\' campaign."', th: '🤝 หาเสี่ยเลี้ยง: "โทรหาบริษัทแถวนั้น จัดแคมเปญ \'พ่อบุญทุ่ม\'"', zh: '🤝 企业赞助：“冷致电当地企业。‘资助一个孩子’活动。”' }, consequence: { en: '✅ Innovator. A local Tech CEO funds it for tax breaks. Program expands.', th: '✅ นักนวัตกรรม! CEO บริษัทเทคยอมจ่ายแลกลดหย่อนภาษี โครงการปังกว่าเดิม', zh: '✅ 创新者。一位当地科技 CEO 为了减税资助了它。项目扩大。' }, stats: { competence: 60, ethics: 50, leadership: 60, innovation: 70 } },
            { id: 'D', text: { en: '📢 Protest: "Organize kids to paint a mural on City Hall. Media stunt."', th: '📢 ประท้วง: "เกณฑ์เด็กไปเพ้นท์กำแพงศาลากลาง เรียกร้องความสนใจ"', zh: '📢 抗议：“组织孩子们在市政厅画壁画。媒体噱头。”' }, consequence: { en: '🎭 High Risk. Mayor is embarrassed. Might fund you or fire you.', th: '🎭 เสี่ยงสูง! นายกเทศมนตรีอาย อาจจะให้เงินหรือไล่คุณออก', zh: '🎭 高风险。市长很尴尬。可能资助你，也可能解雇你。' }, stats: { competence: 40, ethics: 40, leadership: 50, innovation: 50 } }
        ]
    },



    {
        id: 'sw_011',
        text: {
            en: '🧬 Adoption War: A rich, loving family wants to adopt 4yo Mia. But her biological Aunt (unstable, jobless) suddenly claims rights.',
            th: '🧬 ศึกสายเลือด: ครอบครัวรวยอบอุ่นจะรับน้องเมีย 4 ขวบ แต่อยู่ๆ ป้าแท้ๆ (ตกงาน, อารมณ์แปรปรวน) โผล่มาทวงสิทธิ์',
            zh: '🧬 收养之战：一个富有的、充满爱的家庭想收养 4 岁的米娅。但她的亲姨妈（情绪不稳定，失业）突然主张权利。'
        },
        options: [
            { id: 'A', text: { en: '🩸 Blood First: "Kinship care is priority. Give to Aunt."', th: '🩸 เลือดข้นกว่าน้ำ: "ญาติสำคัญสุด ให้ป้าไป"', zh: '🩸 血缘优先：“亲属抚养优先。给姨妈。”' }, consequence: { en: '📉 Cycle Continues. Aunt neglects Mia. She ends up back in system in 2 years.', th: '📉 วงจรอุบาทว์! ป้าเลี้ยงทิ้งๆ ขว้างๆ 2 ปีต่อมาเด็กกลับมาเข้าระบบใหม่', zh: '📉 循环继续。姨妈忽视米娅。2 年后她又回到了系统里。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🏰 Best Interest: "Fight for the Adoptive Family. Stability wins."', th: '🏰 เพื่อเด็ก: "สู้ให้ครอบครัวใหม่ ความมั่นคงต้องชนะ"', zh: '🏰 最大利益：“为收养家庭而战。稳定胜出。”' }, consequence: { en: '✅ Future Secured. Mia grows up happy and safe. You fought the law involved and won.', th: '✅ อนาคตสดใส! เด็กโตมามีความสุข คุณงัดข้อกับกฎหมายและชนะเพื่อเด็ก', zh: '✅ 未来有保障。米娅健康快乐地长大了。你与法律抗争并获胜。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '🤝 Mediation: "Open Adoption. Family keeps Mia, Aunt gets visits."', th: '🤝 คนละครึ่งทาง: "รับเลี้ยงแบบเปิด ครอบครัวได้เด็ก ป้าได้มาเยี่ยม"', zh: '🤝 调解：“开放式收养。家庭抚养米娅，姨妈可以探视。”' }, consequence: { en: '✅ Harmony. Best of both. Mia knows her roots but lives in safety.', th: '✅ ลงตัว! ได้ทั้งขึ้นทั้งล่อง เด็กรูรากเหง้าแต่นอนอุ่น', zh: '✅ 和谐。两全其美。米娅知道自己的根，但生活在安全中。' }, stats: { competence: 60, ethics: 70, leadership: 60, innovation: 50 } },
            { id: 'D', text: { en: '🕵️ Dig Dirt on Aunt: "Find reasons to disqualify her."', th: '🕵️ ขุดประวัติป้า: "หาเรื่องตัดสิทธิ์นางให้ได้"', zh: '🕵️ 挖姨妈黑料：“找理由取消她的资格。”' }, consequence: { en: '⚔️ Ugly but Necessary. You find dragged charges. Aunt disqualified. You feel slimy.', th: '⚔️ สกปรกแต่จำเป็น! เจอคดีเก่า ป้าอดเลี้ยง คุณรู้สึกแย่แต่เด็กปลอดภัย', zh: '⚔️ 丑陋但必要。你翻出了旧案。姨妈被取消资格。你感觉很卑鄙。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 10 } }
        ]
    },



    {
        id: 'sw_012',
        text: {
            en: '🔫 The Gang Choice: A 15yo client wants to join a gang. "They protect me, you just talk," he says. He demands you let him go.',
            th: '🔫 ทางเลือกนักเลง: เด็ก 15 จะเข้าแก๊ง "พวกนั้นคุ้มครองผมได้ คุณมีแต่น้ำลาย" เขาไล่ให้คุณไปไกลๆ',
            zh: '🔫 帮派选择：一名 15 岁的客户想加入帮派。“他们保护我，你只会说空话，”他说。他要求你放手。'
        },
        options: [
            { id: 'A', text: { en: '🥊 Confront Leader: "Go talk to the Gang Leader for him."', th: '🥊 คุยกับลูกพี่: "เดินเข้าไปคุยกับหัวหน้าแก๊งเลย"', zh: '🥊 与头目对质：“替他去找帮派头目谈谈。”' }, consequence: { en: '💀 Death Wish. You get assaulted. Gangs don\'t respect social workers.', th: '💀 รอนหาที่! โดนกระทืบ แก๊งไม่สนนักสังคมสงเคราะห์หรอก', zh: '💀 找死。你被袭击了。帮派不尊重社工。' }, stats: { competence: 10, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🥊 Boxing Gym: "Connect him with a local boxing coach/mentor."', th: '🥊 ค่ายมวย: "ส่งไปค่ายมวย หาโค้ชโหดๆ มาคุม"', zh: '🥊 拳击馆：“把他介绍给当地的拳击教练/导师。”' }, consequence: { en: '✅ Replacement Family. He finds brotherhood and protection in the gym. Gang avoided.', th: '✅ บ้านหลังใหม่! เขาได้พี่น้องและการคุ้มครองในค่ายมวย หลุดพ้นวงจรแก๊ง', zh: '✅ 替代家庭。他在拳馆里找到了兄弟情谊和保护。避开了帮派。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 50 } },
            { id: 'C', text: { en: '🛑 Lock Him Up: "call Juvie. Better jail than dead."', th: '🛑 ส่งสถานพินิจ: "แจ้งจับเลย ติดคุกดีกว่าตายข้างถนน"', zh: '🛑 关起来：“叫少管所。坐牢总比死了好。”' }, consequence: { en: '📉 Hardened. He goes to Juvie and creates deeper gang connections. Fail.', th: '📉 แกร่งกว่าเดิม! ไปสถานพินิจได้คอนเนคชั่นโจรเพิ่ม ล้มเหลว', zh: '📉 变本加厉。他去了少管所，建立了更深的帮派联系。失败。' }, stats: { competence: 20, ethics: 10, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '🗣️ Real Talk: "Show him photos of your dead clients."', th: '🗣️ ของจริง: "เอารูปงานศพเด็กในสังกัดให้ดู"', zh: '🗣️ 实话实说：“给他看你死去的客户的照片。”' }, consequence: { en: '⚠️ Scare Tactic. It shocks him. He hesitates. 50% chance it works.', th: '⚠️ ขู่ให้กลัว! เขาช็อกและลังเล โอกาสรอด 50/50', zh: '⚠️ 恐吓战术。这让他感到震惊。他犹豫了。50% 的机会奏效。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 } }
        ]
    },



    {
        id: 'sw_013',
        text: {
            en: '🗑️ The Hoarder: An elderly couple lives in a house filled with trash. Fire hazard. But they are happy and holding hands. Eviction means separating them to nursing homes.',
            th: '🗑️ บ้านขยะ: ตายายคู่นึงอยู่ในบ้านที่เต็มไปด้วยขยะ เสี่ยงไฟไหม้ แต่พวกเขารรักกันมาก ถ้าไล่ที่คือต้องจับแยกไปบ้านพักคนชราคนละที่',
            zh: '🗑️ 囤积者：一对老夫妇住在堆满垃圾的房子里。火灾隐患。但他们很开心，手牵手。驱逐意味着把他们分开送到疗养院。'
        },
        options: [
            { id: 'A', text: { en: '🧹 Clean it Yourself: "Put on a hazmat suit and start throwing things."', th: '🧹 ล้างบาง: "ใส่ชุด PPE แล้วลุยเก็บขยะเองเลย"', zh: '🧹 自己打扫：“穿上防护服开始扔东西。”' }, consequence: { en: '❌ Betrayal. They scream and cry. Hoarding is mental, not physical. They fill it back up in week.', th: '❌ หักหลัง! เขาร้องไห้โวยวาย โรคนี้อยู่ที่ใจไม่ใช่ห้อง อาทิตย์เดียวก็รกใหม่', zh: '❌ 背叛。他们尖叫哭泣。囤积是心理问题，不是生理问题。一周内他们又填满了。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🚑 Evict for Safety: "Fire Marshal Order. Sorry."', th: '🚑 ไล่เพื่อรอด: "คำสั่งเจ้าหน้าที่ดับเพลิง ขอโทษด้วยครับ"', zh: '🚑 为了安全驱逐：“消防局长的命令。对不起。”' }, consequence: { en: '💀 Broken Hearts. They die within months of separation. Depression.', th: '💀 ตรอมใจ! แยกกันไม่กี่เดือนก็ตายทั้งคู่ โรคซึมเศร้า', zh: '💀 心碎。分离数月后双双去世。抑郁症。' }, stats: { competence: 30, ethics: 10, leadership: 0, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Harm Reduction: "Clear just pathways. Declutter slowly with consent."', th: '🤝 ค่อยเป็นค่อยไป: "ขอเคลียร์แค่ทางเดินก่อน ค่อยๆ เก็บนิดๆ ให้เขายอมรับ"', zh: '🤝 减少伤害：“只清理过道。经同意慢慢清理。”' }, consequence: { en: '✅ Respect. They stay safe(r) and together. Trust built. Slow progress is still progress.', th: '✅ เคารพกัน! ปลอดภัยขึ้นและได้อยู่ด้วยกัน ได้ใจ คืบหน้าช้าก็คือคืบหน้า', zh: '✅ 尊重。他们更安全且在一起。建立了信任。缓慢的进步也是进步。' }, stats: { competence: 60, ethics: 60, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '💸 Pay Cleaners: "Hire professional trauma cleaners."', th: '💸 จ้างมือโปร: "จ้างบริษัทเก็บขยะคลีนบ้าน"', zh: '💸 雇清洁工：“雇佣专业的创伤清洁工。”' }, consequence: { en: '⚠️ Expensive/Relapse. House clean, bank empty. Without therapy, cycle repeats.', th: '⚠️ แพง/ซ้ำซาก! บ้านสะอาดแต่เงินหมด ไม่บำบัดจิตก็กลับมาเป็นอีก', zh: '⚠️ 昂贵/复发。房子干净了，银行空了。没有治疗，循环往复。' }, stats: { competence: 40, ethics: 20, leadership: 20, innovation: 10 } }
        ]
    },



    {
        id: 'sw_014',
        text: {
            en: '📄 Paperwork vs People: Grant deadline is 5PM. It funds your salary. Urgent call: "Mom passed out drunk, kids alone." You can\'t do both.',
            th: '📄 กระดาษกับชีวิต: เส้นตายส่งขอทุน 5 โมง (เงินเดือนคุณเอง) มีสายด่วน: "แม่เมาสลบ เด็กอยู่กันเอง" ทำได้แค่อย่างเดียว',
            zh: '📄 文书与人：拨款截止时间是下午 5 点。这关系到你的薪水。紧急电话：“妈妈醉倒了，孩子独自一人。”你不能两者兼顾。'
        },
        options: [
            { id: 'A', text: { en: '🏃 Save Kids: "Drive to the house. Money can wait."', th: '🏃 ช่วยเด็ก: "ขับไปดูเด็ก เรื่องเงินช่างมัน"', zh: '🏃 救孩子：“开车去那个家。钱可以等。”' }, consequence: { en: '✅ Hero/Broke. Kids safe. Agency loses funding. You might get laid off, but you slept well.', th: '✅ ฮีโร่ถังแตก! เด็กปลอดภัยแต่บริษัทอดเงินทุน คุณอาจโดนเด้งแต่นอนฝันดี', zh: '✅ 英雄/破产。孩子安全。机构失去资金。你可能会被解雇，但你睡得安稳。' }, stats: { competence: 50, ethics: 80, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '💰 Submit Grant: "Call Police to check house. I save the program."', th: '💰 ส่งงาน: "โทรให้ตำรวจไปดู ฉันต้องรักษาโครงการไว้"', zh: '💰 提交拨款申请：“叫警察去检查房子。我保住项目。”' }, consequence: { en: '😐 Pragmatic. Police handle it rough. Kids scared. But agency survives another year.', th: '😐 สัจนิยม ตำรวจจัดการแบบหยาบๆ เด็กกลัว แต่บริษัทอยู่รอดไปอีกปี', zh: '😐 务实。警察处理得很粗暴。孩子吓坏了。但机构又活了一年。' }, stats: { competence: 40, ethics: 20, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '👥 Delegate: "Scream at intern to finish the grant. You go."', th: '👥 โยนงาน: "ตะคอกสั่งเด็กฝึกงานให้ทำเอกสารให้จบ ส่วนคุณไป"', zh: '👥 委派：“吼实习生让他完成申请。你去。”' }, consequence: { en: '⚠️ Risk. Grant has typos. Got 50% funding. Kids safe. Survival mode.', th: '⚠️ เสี่ยง! เอกสารผิดๆ ถูกๆ ได้เงินมาครึ่งเดียว เด็กปลอดภัย รอดแบบทุลักทุเล', zh: '⚠️ 风险。申请有错别字。拿到 50% 资金。孩子安全。生存模式。' }, stats: { competence: 30, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🤖 AI Write Grant: "ChatGPT please write specific federal grant..."', th: '🤖 AI ช่วยด้วย: "ChatGPT เขียนขอทุนรัฐบาลให้หน่อย..."', zh: '🤖 AI 写申请：“ChatGPT 请撰写具体的联邦拨款申请……”' }, consequence: { en: '✅ Modern Win. It writes a generic but passable grant in 10 mins. You do both!', th: '✅ ชนะแบบโมเดิร์น! เขียนไวใน 10 นาที งานพอผ่าน คุณทำทันทั้งสองอย่าง!', zh: '✅ 现代胜利。它在 10 分钟内写了一份通用但通过的申请。你两者都兼顾了！' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 80 } }
        ]
    },



    {
        id: 'sw_015',
        text: {
            en: '🏁 The Career Crossroads: You are burnt out. A Corporate HR Headhunter offers you 3x salary to run "Employee Wellness" at a Tech Giant.',
            th: '🏁 ทางแยกชีวิต: คุณหมดไฟสุดๆ เฮดฮันเตอร์เสนองาน HR "ดูแลสุขภาวะพนักงาน" บริษัทเทค เงินเดือน 3 เท่า',
            zh: '🏁 职业十字路口：你精疲力竭。一位企业猎头提供 3 倍薪水让你去科技巨头管理“员工福利”。'
        },
        options: [
            { id: 'A', text: { en: '👋 Take It: "I did my time. I deserve money and peace."', th: '👋 ไปดิครับ: "ฉันทำมาพอแล้ว ขอเงินและความสงบบ้าง"', zh: '👋 接下：“我尽力了。我应得金钱和安宁。”' }, consequence: { en: '💰 Wealthy Civilian. You retire comfortably. You donate money back. A good life.', th: '💰 คนรวย! เกษียณสบายๆ บริจาคเงินกลับมาช่วย ชีวิตดี๊ดี', zh: '💰 富有的平民。你舒适地退休。你捐钱回馈。美好的生活。' }, stats: { competence: 40, ethics: 30, leadership: 0, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Stay: "These kids need me. Corporate is soulless."', th: '🛑 อยู่ต่อ: "เด็กพวกนี้ต้องการฉัน งานบริษัทมันไร้วิญญาณ"', zh: '🛑 留下：“这些孩子需要我。企业没有灵魂。”' }, consequence: { en: '❤️ Martyr. You work till 70. Changed 1,000 lives. Died poor but beloved.', th: '❤️ ผู้พลีชีพ! ทำงานยัน 70 เปลี่ยนชีวิตคนเป็นพัน ตายจนแต่คนรัก', zh: '❤️ 烈士。你工作到 70 岁。改变了 1000 个生命。死时贫穷但受人爱戴。' }, stats: { competence: 50, ethics: 80, leadership: 60, innovation: 10 } },
            { id: 'C', text: { en: '🔄 Consult: "Take the job, but use money to start your own Non-Profit."', th: '🔄 เอาเงินมาหมุน: "รับงานโกยเงิน แล้วเอามาเปิดมูลนิธิของตัวเอง"', zh: '🔄 咨询：“接下工作，但用这笔钱创办你自己的非营利组织。”' }, consequence: { en: '🌟 Strategic Legend. You play the system to scale your impact. Best ending.', th: '🌟 ตำนานนักกลยุทธ์! ใช้ระบบทุนนิยมขยายความดี ฉลาดที่สุด', zh: '🌟 战略传奇。利用体制扩大你的影响力。最好的结局。' }, stats: { competence: 60, ethics: 60, leadership: 80, innovation: 70 } },
            { id: 'D', text: { en: '📉 Part-Time: "Ask to do both?"', th: '📉 ควบสอง: "ขอทำคู่กันได้ไหม?"', zh: '📉 兼职：“要求两样都做？”' }, consequence: { en: '❌ Collapse. You fail at both. Fired from Tech, too tired for Social Work.', th: '❌ พัง! ล้มเหลวทั้งคู่ โดนไล่ออกแถมหมดแรงทำงานเพื่อสังคม', zh: '❌ 崩溃。你两样都搞砸了。被科技公司解雇，做社工又太累。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 } }
        ]
    },


    {
        id: 'sw_016',
        text: {
            en: '🔒 Confidentiality Clash: A client admits to a minor crime but expresses deep suicidal ideation. If you report the ideation to the authorities, the admission of the crime might leak. What do you do?',
            th: '🔒 ความลับขัดแย้ง: ลูกความยอมรับว่าก่อคดีเล็กน้อยแต่มีความคิดฆ่าตัวตายรุนแรง ถ้าคุณแจ้งเรื่องคิดสั้น ข้อมูลการก่อคดีอาจรั่วไหล จะทำอย่างไร?',
            zh: '🔒 隐私冲突：一位客户承认犯有轻微罪行，但表现出严重的自杀倾向。如果你向当局报告自杀倾向，该犯罪行为可能会泄露。你该怎么办？'
        },
        options: [
            { id: 'A', text: { en: '🚑 Report Immediately', th: '🚑 แจ้งเหตุทันที', zh: '🚑 立即报告' }, consequence: { en: '✅ Life First. Protocol followed. He is hospitalized. The crime is investigated, but he is alive. You chose the lesser of two evils.', th: '✅ ชีวิตต้องมาก่อน! ทำตามระเบียบ เขาถูกส่งโรงพยาบาล คดีโดนสอบแต่เขารอดตาย คุณเลือกสิ่งที่แย่น้อยกว่า', zh: '✅ 生命第一。遵循协议。他住院了。犯罪行为受到调查，但他还活着。你选择了两害相权取其轻。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '💬 Keep Secret', th: '💬 เก็บเป็นความลับ', zh: '保持秘密' }, consequence: { en: '💀 Tragedy. You try to counsel him privately. He attempts suicide next week. You failed to use emergency resources.', th: '💀 โศกนาฏกรรม! คุณพยายามปลอบส่วนตัว แต่อาทิตย์หน้าเขาพยายามฆ่าตัวตาย คุณพลาดการใช้ทรัพยากรฉุกเฉินช่วยเขา', zh: '💀 悲剧。你尝试私下咨询他。他下周企图自杀。你未能利用紧急资源。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Negotiate Consent', th: '🤝 เจรจาขอความยินยอม', zh: '协商同意' }, consequence: { en: '✅ Masterful Counseling. You spend hours getting him to agree to check into a voluntary clinic without involving the police. Trust preserved.', th: '✅ ขั้นเทพ! ใช้เวลาหลายชั่วโมงจนเขายอมเข้าคลินิกบำบัดด้วยความสมัครใจโดยไม่แจ้งตำรวจ รักษาความเชื่อใจได้', zh: '✅ 高明的咨询。你花了数小时让他同意在不通知警察的情况下入住自愿诊所。信任得以保留。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '💼 Consult Legal', th: '💼 ปรึกษาฝ่ายกฎหมาย', zh: '咨询法律' }, consequence: { en: '⏳ Delayed. By the time legal clears the report, it\'s too late. You acted too slowly in a crisis.', th: '⏳ ล่าช้า! กว่าฝ่ายกฎหมายจะอนุมัติก็สายไปแล้ว คุณตัดสินใจช้าเกินไปในภาวะวิกฤต', zh: '延迟。等到法律程序结案时，已经太晚了。你在危机中行动太慢。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } }
        ]
    },


    {
        id: 'sw_017',
        text: {
            en: '🛐 Religious Conflict: A family refuses life-saving blood transfusions for their child due to religious beliefs. You are the caseworker assigned to decide whether to file for a court order.',
            th: '🛐 ความเชื่อทางศาสนา: ครอบครัวปฏิเสธการให้เลือดช่วยชีวิตลูกเพราะความเชื่อทางศาสนา คุณเป็นเจ้าหน้าที่ผู้รับผิดชอบต้องตัดสินใจว่าจะยื่นคำร้องต่อศาลไหม',
            zh: '🛐 宗教冲突：由于宗教信仰，一个家庭拒绝为他们的孩子进行挽救生命的输血。你是负责决定是否向法院申请命令的个案工作者。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ File Court Order', th: '⚖️ ยื่นคำร้องต่อศาล', zh: '⚖️ 申请法院命令' }, consequence: { en: '✅ Child Saved. The court grants the order. The child lives, but the family feels violated and never trusts social services again.', th: '✅ เด็กชีวิตรอด! ศาลมีคำสั่งให้เด็กได้รับเลือด เด็กมีชีวิตอยู่ต่อแต่ครอบครัวเจ็บปวดและไม่ไว้ใจภาครัฐอีกเลย', zh: '✅ 孩子得救了。法院批准了命令。孩子活了下来，但这个家庭感到了被侵犯，再也不信任社会服务机构了。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🙏 Support Family', th: '🙏 สนับสนุนครอบครัว', zh: '支持家庭' }, consequence: { en: '💀 Tragedy. The child dies. You are sued for professional negligence. You prioritized ideology over an innocent life.', th: '💀 โศกนาฏกรรม! เด็กเสียชีวิต คุณโดนฟ้องฐานละเว้นการปฏิบัติหน้าที่ คุณให้ความสำคัญกับอุดมการณ์มากกว่าชีวิตคน', zh: '💀 悲剧。孩子死了。你因专业过失被起诉。你把意识形态看得比一个无辜的生命还重。' }, stats: { competence: 10, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Mediate with Clergy', th: '🤝 ปรึกษาผู้นำทางศาสนา', zh: '与神职人员调解' }, consequence: { en: '✅ Visionary. You bring in a progressive leader from their faith who finds a theological middle ground. Transfusion happens without trauma.', th: '✅ วิสัยทัศน์! เชิญผู้นำทางศาสนาหัวก้าวหน้ามาช่วยหาจุดร่วม สรุปยอมให้เลือดโดยไม่ฝืนความเชื่อจนเกินไป', zh: '✅ 有远见。你从他们的信仰中请来了一位进步的领导者，找到了神学上的中间地带。输血在没有创伤的情况下进行。' }, stats: { competence: 60, ethics: 60, leadership: 60, innovation: 50 } },
            { id: 'D', text: { en: '🏃 Transfer Case', th: '🏃 โยนเคส', zh: '转交案件' }, consequence: { en: '❌ Cowardice. You didn\'t want the responsibility. The next worker is slower and the child suffers longer.', th: '❌ ขี้ขลาด! คุณไม่อยากรับผิดชอบ เจ้าหน้าที่คนใหม่ใช้เวลาเริ่มเคสใหม่ช้าลง เด็กต้องทรมานนานขึ้น', zh: '❌ 懦弱。你不想承担责任。下一个工作人员的速度较慢，孩子受苦的时间更长。' }, stats: { competence: 20, ethics: 10, leadership: 0, innovation: 0 } }
        ]
    },


    {
        id: 'sw_018',
        text: {
            en: '💔 Domestic Dilemma: A mother refuses to leave her abusive partner, even though her children are witnessing the violence. If she stays, you must remove the children.',
            th: '💔 รักพ่ายหรือลูกพัง: แม่ไม่ยอมทิ้งสามีที่ชอบทำร้ายร่างกายแม้ลูกจะเห็นความรุนแรงตลอด ถ้าเธอไม่ไป คุณต้องพาลูกหนี',
            zh: '💔 家庭困境：一位母亲拒绝离开她虐待成性的伴侣，即使她的孩子们正在目睹暴力。如果她不离开，你必须带走孩子。'
        },
        options: [
            { id: 'A', text: { en: '🚨 Remove Children', th: '🚨 พาลูกหนี', zh: '🚨 带走孩子' }, consequence: { en: '✅ Safety Secured. The children are in foster care. They are safe from physical harm but traumatized by the separation.', th: '✅ ปลอดภัยไว้ก่อน! เด็กอยู่ในสถานรับเลี้ยง ปลอดภัยจากการโดนทำร้ายแต่มีแผลใจจากการพรากจากแม่', zh: '✅ 安全保障。孩子们被安置在寄养家庭。他们免受身体伤害，但因分离而受到创伤。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🤝 Offer Intensive Therapy', th: '🤝 เสนอบำบัดเข้มข้น', zh: '提供集中的治疗' }, consequence: { en: '⚠️ High Risk. You try to keep them together with supervision. A minor incident occurs a week later. You get a warning from your boss.', th: '⚠️ เสี่ยงสูง! พยายามให้เขาอยู่ด้วยกันภายใต้การดูแล อาทิตย์ต่อมาเกิดเหตุอีกรอบ คุณโดนหัวหน้าตำหนิ', zh: '⚠️ 高风险。你尝试在监督下让他们在一起。一周后发生了一起轻微事故。你收到了老板的警告。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 20 } },
            { id: 'C', text: { en: '📦 Transitional Housing', th: '📦 หาบ้านพักชั่วคราว', zh: '过渡性住房' }, consequence: { en: '✅ Success. You secure a secret spot in a high-security domestic violence shelter. She agrees to go only because you personally drive the van.', th: '✅ สำเร็จ! คุณหาที่หลบภัยลับที่มีการป้องกันสูงให้เธอ เธอยอมไปเพราะคุณเป็นคนขับรถไปส่งเองกับมือ', zh: '✅ 成功。你在一个高度安全的家暴避难所里找到了一个秘密据点。她同意去是因为你亲自开车。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 30 } },
            { id: 'D', text: { en: '📞 Call Police', th: '📞 แจ้งตำรวจ', zh: '报警' }, consequence: { en: '❌ Escalation. The partner is arrested but released on bail hours later. He returns furious. The family is in more danger now.', th: '❌ เรื่องใหญ่กว่าเดิม! สามีโดนจับแต่ได้ประกันตัวออกมาในไม่กี่ชั่วโมง เขาโมโหจัดกลับมาล้างแค้น ครอบครัวอันตรายกว่าเดิม', zh: '❌ 升级。伴侣被捕，但几小时后被保释。他愤怒地回来。这个家庭现在面临更大的危险。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 } }
        ]
    },


    {
        id: 'sw_019',
        text: {
            en: '🏫 Bullying Crisis: A student with autism is being severely bullied. The school is dismissive, saying"kids will be kids."The student is now refusing to eat.',
            th: '🏫 วิกฤตโดนรังแก: เด็กออทิสติกโดนแกล้งหนักมาก โรงเรียนทำเฉยบอก"เด็กก็งี้แหละ"ตอนนี้เด็กเริ่มไม่ยอมกินข้าวแล้ว',
            zh: '🏫 欺凌危机：一名患有自闭症的学生受到严重欺凌。学校不予理会，说“孩子就是孩子”。这名学生现在拒绝进食。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Sue the District', th: '⚖️ ฟ้องเขตการศึกษา', zh: '⚖️ 起诉学区' }, consequence: { en: '✅ Policy Change. The legal threat forces the district to implement new anti-bullying protocols. A victory for all special needs kids.', th: '✅ เปลี่ยนระเบียบ! คำขู่อาจฟ้องร้องทำให้เขตต้องประกาศนโยบายต้านการกลั่นแกล้งใหม่ เป็นชัยชนะของเด็กพิเศษทุกคน', zh: '✅ 政策变动。法律威胁迫使学区实施新的反欺凌协议。这是所有特殊需求孩子的胜利。' }, stats: { competence: 50, ethics: 50, leadership: 60, innovation: 40 } },
            { id: 'B', text: { en: '🤝 Individual Education Plan', th: '🤝 ทำแผนการส่วนตัว (IEP)', zh: '个别化教育计划' }, consequence: { en: '✅ Academic Win. You get him an IEP with a 1-on-1 aide. He feels safer in class, but the bullies remain in the hallway.', th: '✅ ชนะทางวิชาการ! คุณขอให้เขาเรียนแบบมีพี่เลี้ยงตัวต่อตัว เขารู้สึกปลอดภัยในห้องเรียน แต่พวกขี้แกล้งยังรออยู่ข้างนอก', zh: '✅ 学业上的成功。你为他争取到了一个个别化教育计划，并配有一对一助手。他在课堂上感到更安全，但欺凌者仍在走廊里。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '📣 Parent Advocacy Group', th: '📣 รวมตัวกลุ่มผู้ปกครอง', zh: '家长宣传小组' }, consequence: { en: '✅ Power in Numbers. You organize other parents. The school principal is replaced due to public pressure.', th: '✅ พลังกลุ่ม! คุณชวนผู้ปกครองคนอื่นมารวมตัว กดดันจนครูใหญ่โดนสั่งย้ายตำแหน่ง', zh: '✅ 人多力量大。你组织了其他家长。由于公众压力，学校校长被更换。' }, stats: { competence: 40, ethics: 50, leadership: 70, innovation: 50 } },
            { id: 'D', text: { en: '🏠 Recommend Homeschool', th: '🏠 แนะนำเรียนที่บ้าน', zh: '建议在家上学' }, consequence: { en: '❌ Isolation. He avoids the bullies, but loses vital social development opportunities. The school wins by getting rid of the problem.', th: '❌ โดดเดี่ยว! เขาไม่ต้องโดนแกล้งแต่ขาดสังคม เด็กเสียการพัฒนา โรงเรียนรอดตัวเพราะกำจัดตัวปัญหาออกไปได้', zh: '❌ 孤立。他避开了欺凌者，但也失去了至关重要的社会发展机会。学校以通过摆脱问题而获胜。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 } }
        ]
    },


    {
        id: 'sw_020',
        text: {
            en: '👶 Adoption Regret: A family that adopted an older child 6 months ago says they can\'t handle his trauma and want to"return"him to the system.',
            th: '👶 คืนลูกดีไหม: ครอบครัวที่รับเด็กโตมาเลี้ยงเมื่อ 6 เดือนก่อน บอกว่ารับมือกับปัญหาสุขภาพจิตของเด็กไม่ไหว อยากจะ"คืน"เด็กกลับสู่ระบบ',
            zh: '👶 收养后悔：一个 6 个月前收养了一个大孩子的家庭说，他们无法处理孩子的创伤，想把他“退回”给系统。'
        },
        options: [
            { id: 'A', text: { en: '🛋️ Mandatory Family Therapy', th: '🛋️ บังคับทำบำบัดครอบครัว', zh: '强制家庭治疗' }, consequence: { en: '✅ Resilience. They hate it at first, but slowly learn attachment techniques. The adoption is saved. You saved a child from more rejection.', th: '✅ แกร่งขึ้น! ตอนแรกพวกเขาเกลียดมาก แต่ค่อยๆ เรียนรู้วิธีผูกพัน สรุปอยู่ด้วยกันต่อได้ คุณช่วยเด็กไม่ให้โดนทิ้งซ้ำสอง', zh: '✅ 复原力。他们起初很讨厌这样做，但慢慢学会了依恋技巧。收养得以挽救。你把一个孩子从更多的拒绝中拯救了出来。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '📝 Process the Return', th: '📝 ทำเรื่องคืนเด็ก', zh: '处理退回' }, consequence: { en: '💀 Trauma. The child is devastated. He believes he is unlovable. His behavior worsens in the next group home.', th: '💀 แผลใจสาหัส! เด็กพังทลาย เขาเชื่อว่าไม่มีใครรักเขาแล้ว นิสัยเด็กแย่ลงเรื่อยๆ ในบ้านรับเลี้ยงแห่งใหม่', zh: '💀 创伤。孩子彻底垮了。他相信自己不值得被爱。他在下一个集体之家的表现变得更糟。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '👥 Find a Specific"Bridge"Home', th: '👥 หาบ้านพักหัวเลี้ยวหัวต่อ', zh: '寻找特定的“桥梁”之家' }, consequence: { en: '✅ Strategic Transition. You find a therapeutic foster home while the parents train for 3 months. They reunite with better skills.', th: '✅ พลิกแพลง! ส่งเด็กไปอยู่สถานบำบัดช่วงสั้นๆ ในขณะที่พ่อแม่เข้าคอร์สฝึก 3 เดือน สรุปได้กลับมาอยู่อย่างเข้าใจกันมากขึ้น', zh: '✅ 战略过渡。父母参加 3 个月的培训，期间你找到了一家治疗型寄养家庭。他们带着更好的技巧重新团聚。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '📢 Shame the Parents', th: '📢 ตักเตือนรุนแรง', zh: '羞辱家长' }, consequence: { en: '❌ Professional Failure. You lecture them. They get defensive and file the return anyway. You lost any chance of helping.', th: '❌ ล้มเหลว! คุณไปเทศนาเขา พวกเขาเลยยิ่งต่อต้านและยืนยันจะคืนเด็กอยู่ดี คุณเสียโอกาสที่จะช่วยไปเลย', zh: '❌ 职业上的失败。你训斥了他们。他们变得充满防御性，无论如何还是处理了退回手续。你失去了任何提供帮助的机会。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } }
        ]
    },


    {
        id: 'sw_021',
        text: {
            en: '💉 Raid Situation: You are accompanying police during a drug den raid. There is a toddler in the house. The mother is high and erratic. The house is filthy.',
            th: '💉 นาทีบุกรังยา: คุณไปกับตำรวจตอนบุกทลายแหล่งค้ายา เจอเด็กหัดเดินอยู่ในนั้น แม่เด็กเมาค้างคุมสติไม่ได้ บ้านสกปรกซากขยะเต็ม',
            zh: '💉 突袭现场：你在警察突袭毒窝期间陪同。房子里有一个学步儿童。母亲正亢奋且情绪不稳定。房子肮脏不堪。'
        },
        options: [
            { id: 'A', text: { en: '👶 Remove Child Immediately', th: '👶 อุ้มเด็กออกทันที', zh: '👶 立即带走孩子' }, consequence: { en: '✅ Emergency Action. The child is safety-planned with a grandmother. You prevent accidental ingestion of drugs during the chaotic raid.', th: '✅ ปลอดภัยที่สุด! ส่งเด็กไปอยู่กับยายทันที คุณช่วยกันไม่ให้เด็กหยิบยาเข้าปากท่ามกลางความวุ่นวายตอนบุกจับ', zh: '✅ 紧急行动。孩子被安排在祖母家中，制定了安全计划。你在混乱的突袭中防止了意外摄入药物。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '👩‍👦 Attempt Social Detox for Mom', th: '👩‍👦 พยายามให้แม่บำบัด', zh: '尝试为妈妈进行社交排毒' }, consequence: { en: '⚠️ Dangerous. She lashes out. The police have to restrain her forcibly. The child is even more traumatized.', th: '⚠️ อันตราย! เธอคลั่งและขัดขืน ตำรวจต้องใช้กำลังเข้าคุม เด็กยิ่งกลัวและเสียขวัญหนักกว่าเดิม', zh: '⚠️ 危险。她大发雷霆。警察不得不采取武力制止。孩子受到更大的创伤。' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Safe-Environment Pivot', th: '🤝 ปรับสภาพแวดล้อมฉุกเฉิน', zh: '安全环境中枢' }, consequence: { en: '✅ Efficiency. You organize an emergency cleaning crew and medical eval for mom within 4 hours. Child stays in kinship care.', th: '✅ ฉับไว! จ้างทีมทำความสะอาดด่วนและส่งแม่ไปตรวจร่างกายใน 4 ชม. เด็กได้อยู่กับญาติอย่างปลอดภัย', zh: '✅ 效率。你在 4 小时内组织了紧急清洁人员并为妈妈进行了医疗评估。孩子留在亲属照料下。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 60 } },
            { id: 'D', text: { en: '👮 Stay in Van', th: '👮 รอในรถ', zh: '待在面包车里' }, consequence: { en: '❌ Neglect. You were scared. The child was left in the line of fire. You are lucky no one died.', th: '❌ ขี้ขลาด! คุณกลัวจนไม่กล้าลงรถ ปล่อยเด็กไว้ในจุดเสี่ยง โชคดีที่ไม่มีใครตาย', zh: '❌ 玩忽职守。你害怕了。孩子被留在火线上。你很幸运没有人死亡。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } }
        ]
    },


    {
        id: 'sw_022',
        text: {
            en: '🏚️ Poverty vs Neglect: A home is extremely dirty/smelly, but the kids are happy and loved. Is this a lack of resources (poverty) or a lack of care (neglect)?',
            th: '🏚️ ยากจนหรือละเลย: บ้านเหม็นและสกปรกมาก แต่เด็กดูร่าเริงและได้รับการดูแลอย่างดี นี่คือขาดแคลนทุนทรัพย์ (จน) หรือขาดความเอาใจใส่ (ละเลย)?',
            zh: '🏚️ 贫困还是忽视：家里非常脏且有异味，但孩子们很快乐，并感受到了爱。这是缺乏资源（贫困）还是缺乏照顾（忽视）？'
        },
        options: [
            { id: 'A', text: { en: '🧹 Mandatory Cleaning Order', th: '🧹 สั่งทำความสะอาดด่วน', zh: '强制清洁令' }, consequence: { en: '⚠️ Rigid. They spend money they don\'t have on professional cleaners. They skip meals to pay for it. Stress increases.', th: '⚠️ เข้มงวดเกินไป! พวกเขาต้องเจียดเงินค่าข้าวมาจ้างคนทำความสะอาดตามสั่ง ความเครียดในบ้านพุ่งสูง', zh: '⚠️ 死板。他们把本来没有的钱花在专业清洁工身上。为了付这笔钱，他们不吃饭。压力增加了。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Resource Support', th: '🤝 สนับสนุนทรัพยากร', zh: '资源支持' }, consequence: { en: '✅ Empathetic. You don\'t report neglect. Instead, you secure a free community cleaning day and new laundry machines. The house stays clean.', th: '✅ เข้าใจความรู้สึก! คุณไม่แจ้งข้อหาละเลย แต่ชวนอาสาสมัครมาช่วยทำความสะอาดและหาเครื่องซักผ้าใหม่ให้ บ้านสะอาดถาวร', zh: '✅ 感同身受。你没有报告忽视。相反，你争取到了一个免费的社区清洁日和新的洗衣机。房子保持干净。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '📝 Report for Neglect', th: '📝 รายงานข้อหาละเลย', zh: '报告忽视' }, consequence: { en: '💀 Trauma. The kids are removed. They cry for their parents. The court later rules it was "just poverty" and returns them, but the bond is broken.', th: '💀 แผลใจ! เด็กโดนแยกตัวพรากจากพ่อแม่ ศาลตัดสินทีหลังว่าเป็น"แค่ความจน"และส่งตัวกลับ แต่ความผูกพันพังไปแล้ว', zh: '💀 创伤。孩子们被带走了。他们哭着要父母。法院后来裁定那“只是贫困”并将他们送回，但纽带已经断裂。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🤷 Ignore It', th: '🤷 เมินไป', zh: '忽视它' }, consequence: { en: '⚠️ Health Risk. If a child gets a staph infection due to the filth, you are liable. Doing nothing is not an option.', th: '⚠️ เสี่ยงสุขภาพ! ถ้าเด็กติดเชื้อรุนแรงเพราะความสกปรก คุณจะโดนฟ้อง การนิ่งเฉยไม่ใช่ทางออก', zh: '⚠️ 健康风险。如果孩子因为肮脏而感染葡萄球菌，你要负责。无所作为不是一种选择。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },


    {
        id: 'sw_023',
        text: {
            en: '🏥 Hospital Exit: A homeless client with a broken leg is being discharged. He has nowhere to go. The hospital needs the bed. What is your move?',
            th: '🏥 ขาหักไร้ที่ไป: ลูกความคนไร้บ้านขาหักกำลังโดนไล่ออกจากโรงพยาบาลเพราะเตียงเต็ม เขาไม่มีที่พัก จะทำยังไง?',
            zh: '🏥 医院出口：一名腿部骨折的无家可归客户即将出院。他无处可去。医院需要床位。你该怎么做？'
        },
        options: [
            { id: 'A', text: { en: '🚐 Discharge to Shelter', th: '🚐 ส่งศูนย์พักพิง', zh: '出院到避难所' }, consequence: { en: '❌ Medical Risk. High-bottom shelters aren\'t equipped for medical care. His leg gets infected and he returns to the ER in 2 days.', th: '❌ เสี่ยงติดเชื้อ! ศูนย์พักพิงทั่วไปไม่มีคนดูแลแผล ขาเขาเน่าและต้องกลับมาเข้าฉุกเฉินใหม่ใน 2 วัน', zh: '❌ 医疗风险。低端避难所不具备医疗护理条件。他的腿被感染了，两天后又回到了急诊室。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Refuse Discharge', th: '🛑 ปฏิเสธการให้ออก', zh: '拒绝出院' }, consequence: { en: '⚠️ Admin War. You fight the hospital admin. You keep him for 2 more days, but you burn your bridge with the medical team.', th: '⚠️ สงครามประสาท! คุณสู้กับฝ่ายบริหารโรงพยาบาล ยื้อเตียงได้อีก 2 วัน แต่ทีมหมอพยาบาลเริ่มเกลียดขี้หน้าคุณ', zh: '⚠️ 行政战争。你与医院管理员作斗争。你让他多住了两天，但你与医疗团队的关系也随之破格。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🏨 Medical Respite Bed', th: '🏨 หาที่พักฟื้นเฉพาะทาง', zh: '医疗延期护理床位' }, consequence: { en: '✅ Success. You spend 6 hours on the phone finding a specific"Medical Respite"facility. He heals safely and receives housing support.', th: '✅ สำเร็จ! โทรตามสาย 6 ชั่วโมงจนหา"ศูนย์พักฟื้นทางการแพทย์"ให้เขาได้ เขาหายดีและมีแผนหาที่อยู่ใหม่ไปพร้อมกัน', zh: '✅ 成功。你花了 6 个小时打电话寻找一个专门的“医疗延期护理”设施。他安全康复并获得了住房支持。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 30 } },
            { id: 'D', text: { en: '🚕 Give Cab Fare', th: '🚕 ให้ค่าแท็กซี่ไป', zh: '给出租车费' }, consequence: { en: '💀 Heartless. You dump him on a random street corner. He is found unconscious by police later that night. Career ending error.', th: '💀 ใจดำ! ปล่อยเขาทิ้งไว้ข้างถนนคนเดียว ตำรวจไปเจอเขาหมดสติกลางดึก เป็นความผิดที่อาจทำให้คุณเสียงานได้', zh: '💀 没心没肺。你把他丢在随便一个街角。那天深夜警察发现他昏迷不醒。结束职业生涯的错误。' }, stats: { competence: 10, ethics: -100, leadership: 0, innovation: 0 } }
        ]
    },


    {
        id: 'sw_024',
        text: {
            en: '🤰 Teen Secrets: A 15-year-old girl tells you she is pregnant and doesn\'t want her strict parents to know. She asks for clinical resources.',
            th: '🤰 ความลับวัยทีน: เด็กสาว 15 ปีบอกคุณว่าท้องและไม่อยากให้พ่อแม่ที่เจ้าระเบียบรู้ เธอขอให้คุณหาที่ปรึกษาทางการแพทย์ให้',
            zh: '🤰 少女的秘密：一名 15 岁的少女告诉你她怀孕了，不想让她严厉的父母知道。她寻求临床资源。'
        },
        options: [
            { id: 'A', text: { en: '📢 Tell Parents', th: '📢 แจ้งผู้ปกครอง', zh: '告诉父母' }, consequence: { en: '❌ Trust Broken. They kick her out. She goes missing. You prioritized your own moral comfort over her safety.', th: '❌ ความเชื่อใจพัง! พ่อแม่ไล่เธอออกจากบ้าน เธอหายสาบสูญ คุณให้ความสำคัญกับความสบายใจของตัวเองมากกว่าความปลอดภัยของเด็ก', zh: '❌ 信任破裂。他们把她赶了出去。她失踪了。你优先考虑自己的道德舒适感，而不是她的安全。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Confidential Support', th: '🤝 สนับสนุนทางลับ', zh: '私下支持' }, consequence: { en: '✅ Law Abiding. In many states, this is protected. You get her to a clinic for options. You help her brainstorm how to eventually tell them.', th: '✅ ทำตามกฎหมาย! หลายแห่งคุ้มครองสิทธิ์นี้ คุณพาเธอไปคลินิกและช่วยหาแผนว่าจะบอกพ่อแม่ยังไงในอนาคต', zh: '✅ 守法。在许多州，这是受保护的。你带她去诊所寻求选择。你帮她动脑筋思考最终如何告诉他们。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '👪 Family Mediation', th: '👪 เป็นกาวใจครอบครัว', zh: '家庭调解' }, consequence: { en: '✅ Leadership. You spend 4 sessions preparing her, then sit in the room when she tells them. The explosion is contained. They supporting her.', th: '✅ ภาวะผู้นำ! เตรียมใจเด็ก 4 ครั้ง แล้วเข้าไปอยู่ด้วยตอนวันบอกความจริง ช่วยคุมสถานการณ์จนพ่อแมยอมรับได้และซัพพอร์ตเธอ', zh: '✅ 领导力。你花了 4 个课时为她做准备，然后在她告诉他们时坐在房间里。局势得到了控制。他们支持她。' }, stats: { competence: 60, ethics: 60, leadership: 60, innovation: 30 } },
            { id: 'D', text: { en: '🤷 Advice Only', th: '🤷 ให้แค่คำปรึกษา', zh: '仅建议' }, consequence: { en: '⚠️ Ineffective. She is too overwhelmed to follow through. She ends up in a dangerous underground clinic.', th: '⚠️ ไม่ได้ผล! เด็กเครียดเกินกว่าจะจัดการเองได้ สรุปไปเข้าคลินิกเถื่อนที่อันตราย', zh: '⚠️ 无效。她太不知所措，无法坚持到底。她最后去了一家危险的地下诊所。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } }
        ]
    },


    {
        id: 'sw_025',
        text: {
            en: '⚧️ Identity Struggle: A transgender teen in a foster home is being forced to wear clothes of their assigned-at-birth gender. The foster parents say it\'s their "house rules."',
            th: '⚧️ ตัวตนที่ขัดแย้ง: วัยรุ่นข้ามเพศในบ้านรับเลี้ยงโดนบังคับให้ใส่เสื้อผ้าตามเพศกำเนิด พ่อแม่บุญธรรมอ้างว่าคือ"กฎของบ้าน"',
            zh: '⚧️ 身份挣扎：一名寄养家庭的跨性别青少年被强迫穿着其出生性别的衣服。寄养父母说这是他们的“家规”。'
        },
        options: [
            { id: 'A', text: { en: '🏠 Enforce House Rules', th: '🏠 ทำตามกฎบ้าน', zh: '执行家规' }, consequence: { en: '💀 Severe Trauma. The teen attempts self-harm. You failed to protect their identity and mental health.', th: '💀 แผลใจรุนแรง! เด็กพยายามทำร้ายตัวเอง คุณล้มเหลวในการปกป้องตัวตนและสุขภาพจิตของเด็ก', zh: '💀 严重的创伤。由于你未能保护他们的身份和心理健康，该青少年企图自残。' }, stats: { competence: 10, ethics: 20, leadership: 0, innovation: 0 } },
            { id: 'B', text: { en: '⚖️ File Compliance Violation', th: '⚖️ แจ้งผิดระเบียบ', zh: '提交合规违规' }, consequence: { en: '✅ Rights Protected. The agency cites the parents for a civil rights violation. The teen is moved to an affirming home.', th: '✅ สิทธิ์ได้รับคุ้มครอง! องค์กรสั่งลงโทษพ่อแม่บุญธรรมฐานละเมิดสิทธิ์ เด็กถูกย้ายไปอยู่บ้านที่เข้าใจตัวตนเขาจริงๆ', zh: '✅ 权利得到保护。该机构因侵犯公民权利而向父母提出诉讼。该青少年被转移到一个肯定的环境中。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🎓 Sensitize Foster Parents', th: '🎓 ให้ความรู้พ่อแม่บุญธรรม', zh: '使寄养父母敏感化' }, consequence: { en: '✅ Educational Win. You bring in a consultant. The parents realize the harm they were causing. They buy the teen new clothes.', th: '✅ ชนะใจด้วยความรู้! คุณพากูรูมาให้คำปรึกษา พ่อแม่สำนึกผิดและไปซื้อเสื้อผ้าใหม่ให้เด็กด้วยกัน', zh: '✅ 教育上的胜利。你请来了一位顾问。父母意识到了他们造成的伤害。他们给青少年买了新衣服。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '🤫 Tell Teen to Hide It', th: '🤫 บอกเด็กให้ซ่อนไว้', zh: '告诉青少年隐藏它' }, consequence: { en: '❌ Inauthentic. "Just wear what they want until you turn 18." The teen feels unsupported by the very system designed to help.', th: '❌ ปลอมเปลือก! "ใส่ๆ ไปก่อนจนกว่าจะ 18 ละกัน" เด็กเสียใจที่ระบบที่ควรจะช่วยกลับมาซ้ำเติมเขาแบบนี้', zh: '❌ 不真实。“直到你 18 岁以前，穿他们想要你穿的衣服就行了。”青少年感到没有得到这个专门为提供帮助而设计的系统的支持。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 } }
        ]
    },


    {
        id: 'sw_026',
        text: {
            en: '🪖 Veteran in Need: A homeless veteran with PTSD is acting aggressively in a lobby. Security wants to taser him. You are the on-call social worker.',
            th: '🪖 อดีตทหารผ่านศึกที่มีอาการ PTSD กำลังอาละวาดที่ล็อบบี้ รปภ. เตรียมจะเป่าด้วยปืนไฟฟ้า คุณเป็นเจ้าหน้าที่เวรที่ต้องจัดการ',
            zh: '🪖 遇困退伍军人：一名患有创伤后应激障碍（PTSD）的无家可归退伍军人在大厅表现出攻击行为。安保人员想对他使用电击枪。你是值班的社会工作者。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Step Between Them', th: '🛑 เข้าไปขวางกลาง', zh: '站在他们之间' }, consequence: { en: '⚠️ Dangerous. You get pushed, but you stop the violence. You use your specialized training to de-escalate him verbally.', th: '⚠️ เสี่ยงอันตราย! คุณโดนผลักแต่หยุดความรุนแรงได้ คุณใช้ทักษะเฉพาะทางพูดกล่อมจนเขาใจเย็นลง', zh: '⚠️ 危险。你被推了一下，但你制止了暴力。你利用专业训练对他进行口头降温。' }, stats: { competence: 60, ethics: 60, leadership: 60, innovation: 30 } },
            { id: 'B', text: { en: '👮 Let Security Handle It', th: '👮 ปล่อย รปภ. จัดการ', zh: '让安保处理' }, consequence: { en: '❌ Escalation. He is tasered and arrested. His PTSD worsens in jail. You missed a chance to provide trauma-informed care.', th: '❌ เรื่องใหญ่ขึ้น! เขาโดนช็อตไฟฟ้าและโดนจับ อาการ PTSD ทรุดหนักลงในคุก คุณพลาดโอกาสที่จะช่วยเขาด้วยความเข้าใจ', zh: '❌ 升级。他被电击并被捕。他在监狱里创伤后应激障碍加重。你错过了一个提供创伤知情护理的机会。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🗣️ Use specific military jargon', th: '🗣️ ใช้ศัพท์ทหารกล่อม', zh: '🗣️ 使用特定的军事术语' }, consequence: { en: '✅ Genius. You mirror his background. He recognizes the "rank" and follows your orders to a safe area. Incredible connection.', th: '✅ อัจฉริยะ! คุณใช้ภาษาทหารจนเขาเชื่อใจ เขารู้สึกถึง"ชั้นยศ"และทำตามคำสั่งคุณไปยังที่ปลอดภัย สร้างความสัมพันธ์ได้สุดยอด', zh: '✅ 天才。你模仿了他的背景。他认出了“军衔”并服从你的命令，前往安全地带。令人难以置信的联系。' }, stats: { competence: 70, ethics: 50, leadership: 70, innovation: 60 } },
            { id: 'D', text: { en: '📞 Call the VA', th: '📞 โทรหาหน่วยทหารผ่านศึก', zh: '给退伍军人事务部打电话' }, consequence: { en: '⏳ Slow. By the time they answer, the situation has already turned violent. You need to act now, not call.', th: '⏳ ช้าไป! กว่าเขาจะรับสาย เรื่องก็บานปลายไปแล้ว นาทีนี้ต้องลงมือทำไม่ใช่โทร', zh: '⏳ 慢。等到他们接电话时，局势已经演变成暴力。你需要现在就行动，而不是打电话。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } }
        ]
    },


    {
        id: 'sw_027',
        text: {
            en: '🌍 Refugee Roadblock: A refugee family is facing eviction because they don\'t understand the lease in English. The landlord thinks they are ignoring him.',
            th: '🌍 กำแพงภาษาผู้ลี้ภัย: ครอบครัวผู้ลี้ภัยกำลังจะโดนไล่ที่เพราะอ่านสัญญาเช่าภาษาอังกฤษไม่ออก เจ้าของบ้านนึกว่าพวกเขาจงใจกวนประสาท',
            zh: '🌍 难民路障：一个难民家庭面临被驱逐，因为他们看不懂英文租约。房东以为他们在无视他。'
        },
        options: [
            { id: 'A', text: { en: '🗣️ Translate Directly', th: '🗣️ ช่วยแปลให้', zh: '直接翻译' }, consequence: { en: '✅ Fix. You clarify the misunderstanding. The landlord feels better, but the family still lacks a long-term language solution.', th: '✅ แก้ปัญหาได้! คุณช่วยอธิบายความหมาย เจ้าของบ้านเข้าใจขึ้น แต่ครอบครัวนี้ก็ยังไม่มีแผนแก้ปัญหาเรื่องภาษาในระยะยาว', zh: '✅ 固定。你澄清了误解。房东感觉好多了，但这个家庭仍然缺乏长期的语言方案。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🤝 Connect with Cultural Center', th: '🤝 ประสานศูนย์วัฒนธรรม', zh: '与文化中心联系' }, consequence: { en: '✅ Sustainable. You get a community volunteer to visit them weekly. They learn English and the landlord has a reliable contact.', th: '✅ ยั่งยืน! คุณหาอาสาสมัครมาเยี่ยมเขาทุกอาทิตย์ สอนภาษาไทย(หรือภาษาท้องถิ่น) และเป็นตัวกลางให้เจ้าของบ้านอุ่นใจ', zh: '✅ 可持续。你找了一名社区志愿者每周看望他们。他们学习英语，房东也有了一个可靠的联系人。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '⚖️ File Discrimination Complaint', th: '⚖️ ร้องเรียนฐานเลือกปฏิบัติ', zh: '提交歧视投诉' }, consequence: { en: '❌ Aggressive. It wasn\'t discrimination, just a misunderstanding. Now the landlord hates them and will evict them legally the first chance he gets.', th: '❌ ก้าวร้าวเกินไป! จริงๆ มันไม่ใช่การเหยียดแต่แค่ไม่เข้าใจกัน พอไปฟ้องเจ้าของบ้านยิ่งเกลียดและหาทางไล่ออกทันทีที่สบโอกาส', zh: '❌ 挑衅。这不是歧视，只是误解。现在房东恨他们，一有机会就会合法地把他们赶走。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '🤷 Tell Them to Find a Translator', th: '🤷 บอกให้เขาไปหาคนแปลเอง', zh: '让他们找个翻译' }, consequence: { en: '💀 Negligence. They are new to the country and have no money. They end up on the street. You failed as an advocate.', th: '💀 ละเลย! เขาเพิ่งมาอยู่แถมไม่มีเงิน สรุปต้องไปเร่ร่อนข้างถนน คุณล้มเหลวในการเป็นผู้ช่วยเหลือ', zh: '💀 玩忽职守。他们刚到这个国家，没有钱。他们最终流落街头。你作为一个倡导者失败了。' }, stats: { competence: 10, ethics: -20, leadership: 0, innovation: 0 } }
        ]
    },


    {
        id: 'sw_028',
        text: {
            en: '⚖️ Courtroom Truth: You are testifying in a custody case. You know the father is a "good guy" but he technically broke a minor safety rule once. Do you mention it?',
            th: '⚖️ ความจริงในศาล: คุณต้องขึ้นให้การเรื่องสิทธิ์ดูแลบุตร คุณรู้ว่าพ่อเด็กเป็น"คนดี"แต่เขาเคยทำผิดกฎความปลอดภัยเล็กๆ อยู่ครั้งหนึ่ง จะบอกศาลไหม?',
            zh: '⚖️ 法庭真相：你在一起监护权案件中出庭作证。你知道父亲是个“好人”，但从技术上讲，他曾经违反过一次轻微的安全规则。你会提吗？'
        },
        options: [
            { id: 'A', text: { en: '📝 Mention Everything', th: '📝 บอกทุกอย่าง', zh: '提及一切' }, consequence: { en: '✅ Ethical. You are an officer of the court. You tell the truth. The judge values your honesty, even if it slightly hurts the father\'s case.', th: '✅ มีจริยธรรม! คุณคือเจ้าหน้าที่รัฐ ต้องพูดความจริง ศาลเชื่อถือในความสัตย์จริงของคุณ แม้จะทำให้พ่อยุ่งยากนิดหน่อย', zh: '✅ 合乎道德。你是法庭官员。你说实话。法官看重你的诚实，即使这稍微损害了父亲的案子。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🤫 Omit the Minor Slip', th: '🤫 ข้ามเรื่องเล็กน้อยไป', zh: '省略轻微的失误' }, consequence: { en: '⚠️ Risky. If the other lawyer finds out, your entire testimony is discredited. You could lose your license for perjury.', th: '⚠️ เสี่ยง! ถ้าทนายอีกฝ่ายรู้เข้า คำให้การทั้งหมดของคุณจะเป็นโมฆะและคุณอาจโดนยึดตั๋วฐานให้การเท็จ', zh: '⚠️ 风险。如果对方律师发现，你的全部证词都会失去公信力。你可能会因为伪证罪而被吊销执照。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🗣️ Frame with Context', th: '🗣️ เล่าแบบอธิบายบริบท', zh: '结合语境进行架构' }, consequence: { en: '✅ Masterful. You mention the slip-up but immediately explain how he corrected it and why he is still the better parent. Professional and balanced.', th: '✅ ขั้นเทพ! บอกความผิดพลาดแต่รีบอธิบายว่าเขาแก้ไขยังไงและทำไมเขายังควรเป็นคนดูแลเด็ก เป็นมืออาชีพและยุติธรรม', zh: '✅ 高明。你提到了失误，但立即解释了他如何改正，以及为什么他仍然是更好的家长。专业且平衡。' }, stats: { competence: 60, ethics: 50, leadership: 60, innovation: 30 } },
            { id: 'D', text: { en: '🤷 Act Confused', th: '🤷 ทำเป็นงง', zh: '装作困惑' }, consequence: { en: '❌ Unprofessional. The judge thinks you are incompetent or hiding something. You look bad for the agency.', th: '❌ เสี้ยหมา! ศาลมองว่าคุณห่วยหรือไม่ก็กำลังซ่อนความลับ ทำภาพลักษณ์องค์กรเสียหมด', zh: '❌ 不专业。法官认为你无能或在隐瞒什么。你让机构丢脸了。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } }
        ]
    },


    {
        id: 'sw_029',
        text: {
            en: '🐕 The Dangerous Dog: A single mom relies on her pitbull for safety in a bad neighborhood. However, the dog growled at her toddler during your visit. Policy says "immediate removal of aggressive animals."',
            th: '🐕 สุนัขพันธุ์ดุ: คุณแม่เลี้ยงเดี่ยวเลี้ยงพิตบูลไว้เฝ้าบ้านในย่านจิ๊กโก๋ แต่หมามันขู่ลูกวัยเตาะแตะตอนคุณไปเยี่ยม กฎบอกว่า "ต้องย้ายสัตว์ดุร้ายออกทันที"',
            zh: '🐕 危险的狗：一位单身母亲在一个糟糕的社区依靠她的比特犬来保证安全。然而，在你拜访期间，这只狗对她蹒跚学步的孩子咆哮。政策规定“立即移走攻击性动物”。'
        },
        options: [
            { id: 'A', text: { en: '👮 Remove Dog', th: '👮 ย้ายหมาออก', zh: '移走狗' }, consequence: { en: '☠️ Robbed. The home is robbed two days later without the dog. The mom blames you. Child is physically safe but traumatized by the break-in.', th: '☠️ โดนปล้น! สองวันต่อมาบ้านโดนงัดเพราะไม่มีหมา แม่โทษว่าเป็นความผิดคุณ เด็กปลอดภัยจากหมาแต่ขวัญเสียเพราะโจร', zh: '☠️以此：被盗。两天后，没有狗的家被盗了。妈妈怪你。孩子身体安全，但因入室盗窃受到创伤。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🐕 Ignore It', th: '🐕 ทำเป็นไม่เห็น', zh: '忽视它' }, consequence: { en: '💀 Tragedy. The dog bites the childs face next week. You are investigated for negligence. Career ending.', th: '💀 โศกนาฏกรรม! อาทิตย์หน้าหมากัดหน้าเด็กเละ คุณ โดนสอบสวนฐานละเลย จบเห่', zh: '💀 悲剧。下周狗咬了孩子的脸。你因疏忽大意受到调查。职业生涯结束。' }, stats: { competence: 10, ethics: -50, leadership: 0, innovation: 0 } },
            { id: 'C', text: { en: '🚧 Fence & Muzzle', th: '🚧 สร้างรั้วและใส่ตะกร้อ', zh: '围栏和嘴套' }, consequence: { en: '✅ Compromise. You use discretionary funds to build a baby gate and mandate a muzzle. Mom keeps her protector, baby is safe.', th: '✅ พบกันครึ่งทาง! เจียดงบฉุกเฉินมาทำรั้วกั้นเด็กและบังคับใส่ตะกร้อครอบปาก แม่ได้คนคุ้มกัน ลูกปลอดภัย', zh: '✅ 折中。你动用自由裁量资金建了一个婴儿门并强制使用嘴套。妈妈保留了她的保护者，宝宝安全了。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '🏡 Move Family', th: '🏡 ย้ายบ้าน', zh: '搬家' }, consequence: { en: '⏳ Timeline Issues. Moving takes months. The risk remains in the meantime. Good idea, bad execution.', th: '⏳ ช้าไป! กว่าจะย้ายได้เป็นเดือน ระหว่างนั้นความเสี่ยงยังมีอยู่ ไอเดียดีแต่ปฏิบัติยาก', zh: '⏳ 时间线问题。搬家需要几个月。在此期间风险仍然存在。好主意，坏执行。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } }
        ]
    },


    {
        id: 'sw_030',
        text: {
            en: '💑 The Teen Mom\'s Boyfriend: Your 16-year-old client (a new mom) wants to move in with her 22-year-old boyfriend. He has a job and a car, but the age gap is a legal red flag. She threatens to run away if you say no.',
            th: '💑 แฟนหนุ่มของแม่วัยใส: คุณแม่วัย 16 อยากย้ายไปอยู่กับแฟนหนุ่มอายุ 22 เขามีงานมีรถ แต่ช่องว่างอายุมันส่อผิดกฎหมาย เธอขู่ว่าจะหนีถ้าคุณห้าม',
            zh: '💑 少女妈妈的男朋友：你 16 岁的客户（一位新妈妈）想和她 22 岁的男朋友搬到一起住。他有工作也有车，但这年龄差距是一个法律红灯。如果你说不，她威胁要离家出走。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Forbid It', th: '🛑 ห้ามเด็ดขาด', zh: '禁止' }, consequence: { en: '🏃 Runaway. She disappears with the baby. You lose all contact. Worst possible outcome.', th: '🏃 หนีตามผู้ชาย! เธอหอบลูกหนีหายไปเลย ติดต่อไม่ได้อีก ผลลัพธ์แย่ที่สุด', zh: '🏃 离家出走。她带着宝宝消失了。你失去了所有联系。最坏的结果。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '📝 Conditional Approval', th: '📝 ยอมแบบมีเงื่อนไข', zh: '有条件批准' }, consequence: { en: '⚠️ Risk. You allow it but require weekly visits. It works for now, but legally you are on thin ice.', th: '⚠️ เสี่ยง! คุณยอมแต่ขอไปเยี่ยมทุกอาทิตย์ ตอนนี้ยังโอเคแต่ทางกฎหมายคุณยืนอยู่บนปากเหว', zh: '⚠️ 风险。你允许了，但要求每周访问。目前有效，但在法律上你处于危险边缘。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 30 } },
            { id: 'C', text: { en: '🏠 Mother-Baby Unit', th: '🏠 ศูนย์แม่และเด็ก', zh: '母婴单元' }, consequence: { en: '✅ Safe Haven. You convince her to try a specialized teen mom group home first. "Just for a month." She ends up liking the support.', th: '✅ เพื่อความชัวร์! กล่อมให้ไปลองอยู่บ้านพักแม่วัยใสก่อน "แค่เดือนเดียว" สรุปเธอชอบที่มีเพื่อนช่วยเลี้ยงลูก', zh: '✅以此：避风港。你说服她先尝试一个专门的少女妈妈集体之家。“只住一个月。”结果她很通过这种支持。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '👮 Report Statutory Rape', th: '👮 แจ้งจับพรากผู้เยาว์', zh: '报告法定强奸' }, consequence: { en: '❌ Destruction. Boyfriend arrested. Mom devastated and hates you. Baby goes to foster care. System wins, family loses.', th: '❌ พังพินาศ! แฟนโดนจับ แม่เด็กใจสลายและเกลียดคุณ ลูกโดนส่งสถานรับเลี้ยง ระบบชนะแต่ครอบครัวพัง', zh: '❌ 毁灭。男朋友被捕。妈妈崩溃并恨你。宝宝去了寄养家庭。系统赢了，家庭输了。' }, stats: { competence: 30, ethics: 20, leadership: 0, innovation: 0 } }
        ]
    },


    {
        id: 'sw_031',
        text: {
            en: '👴 The Dementia Flight: Mr. Chen (80, dementia) keeps escaping his unlocked home to "find his wife" (who died 10 years ago). His daughter refuses to lock him in ("It\'s a prison!"). You must ensure safety.',
            th: '👴 คุณปู่ขี้ลืม: คุณปู่เฉิน (80, ความจำเสื่อม) ชอบหนีออกจากบ้านที่ไม่ได้ล็อกเพื่อไป "ตามหาเมีย" (ที่ตายไป 10 ปีแล้ว) ลูกสาวไม่ยอมขังพ่อ ("มันเหมือนคุก!") คุณต้องดูเรื่องความปลอดภัย',
            zh: '👴 痴呆症出逃：陈先生（80 岁，患有痴呆症）不断逃离未上锁的家去“找他的妻子”（10 年前去世）。他的女儿拒绝把他锁在家里（“那是监狱！”）。你必须确保安全。'
        },
        options: [
            { id: 'A', text: { en: '🔒 Mandatory Locks', th: '🔒 บังคับล็อกประตู', zh: '强制锁门' }, consequence: { en: '❌ Fire Risk. Locking him in without 24/7 supervision is illegal and dangerous. Daughter furious.', th: '❌ เสี่ยงไฟไหม้! การขังโดยไม่มีคนเฝ้าตลอดเวลาผิดกฎหมายและอันตราย ลูกสาวโกรธมาก', zh: '❌ 火灾风险。在没有 24/7 监管的情况下把他锁在里面是非法且危险的。女儿很生气。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '📡 GPS Tracker', th: '📡 ติด GPS', zh: 'GPS 追踪器' }, consequence: { en: '✅ Tech Solution. You get him a "watch" that tracks location. He has freedom, daughter has peace of mind.', th: '✅ ใช้เทคโนโลยี! หา "นาฬิกา" ติดตามตัวให้ ปู่มีอิสระ ลูกสาวสบายใจ', zh: '✅ 技术解决方案。你给他买了一块可以追踪位置的“手表”。他有自由，女儿也放心。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 60 } },
            { id: 'C', text: { en: '🏥 Nursing Home', th: '🏥 ส่งบ้านพักคนชรา', zh: '疗养院' }, consequence: { en: '📉 Decline. He moves to a facility and stops eating due to depression. "Transfer Trauma" is real.', th: '📉 ทรุดลง! ย้ายไปศูนย์แล้วแกตรอมใจไม่ยอมกินข้าว ภาวะช็อกจากการย้ายที่อยู่มีจริงนะ', zh: '📉 衰退。他搬到了设施里，因为抑郁而停止进食。“转移创伤”是真实存在的。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🚪 Door Chimes', th: '🚪 กริ่งประตู', zh: '门铃' }, consequence: { en: '⚠️ Exhaustion. Daughter hears him leave but has to chase him 10 times a night. She burns out in a week.', th: '⚠️ เหนื่อยตาย! ลูกสาวได้ยินเสียงออกแต่ต้องวิ่งไล่จับคืนละ 10 รอบ อาทิตย์เดียวก็โทรม', zh: '⚠️ 筋疲力尽。女儿听到他离开，但在晚上不得不追他 10 次。她在一周内累垮了。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 20 } }
        ]
    },


    {
        id: 'sw_032',
        text: {
            en: '💰 The Donation Scandal: You accidentally see a spreadsheet showing your Agency Director is using "Orphan Holiday Fund" money for personal vacations. He is your mentor and the reason you have a job.',
            th: '💰 สแกนดัลเงินบริจาค: คุณบังเอิญไปเห็นบัญชีลับ ผอ. ศูนย์ฯ เอาเงิน "กองทุนวันหยุดเด็กกำพร้า" ไปเที่ยวส่วนตัว เขาคืออาจารย์ของคุณและเป็นคนรับคุณเข้าทำงาน',
            zh: '💰 捐款丑闻：你无意中看到一张电子表格，显示你的机构主管正在通过挪用“孤儿度假基金”里的钱来进行个人度假。他是你的导师，也是你有这份工作的原因。'
        },
        options: [
            { id: 'A', text: { en: '📢 Whistleblow', th: '📢 แฉให้ยับ', zh: '揭发' }, consequence: { en: '✅ Justice/Chaos. He is arrested. The agency freezes. You are a pariah to his loyalists but a hero to the public.', th: '✅ ยุติธรรมที่วุ่นวาย! เขาโดนจับ องค์กรชะงักงัน คุณกลายเป็นแกะดำในหมู่ลูกน้องเขาแต่เป็นฮีโร่สังคม', zh: '✅ 正义/混乱。他被捕了。机构冻结。你是他死忠粉的弃儿，却是公众的英雄。' }, stats: { competence: 50, ethics: 80, leadership: 60, innovation: 20 } },
            { id: 'B', text: { en: '🤫 Blackmail', th: '🤫 แบล็กเมล์', zh: '勒索' }, consequence: { en: '💀 Corruption. "Put the money back or I tell." He does, but now he owns you. You verified your price.', th: '💀 ทุจริต! "เอาเงินมาคืนไม่งั้นแฉ" เขายอมคืนแต่ตอนนี้คุณตกเป็นเบี้ยล่างเขาแล้ว', zh: '💀 腐败。“把钱放回去，否则我就说出去。”他照做了，但现在他控制了你。你证实了自己的身价。' }, stats: { competence: 40, ethics: -60, leadership: 20, innovation: 20 } },
            { id: 'C', text: { en: '🙈 Ignore', th: '🙈 ทำไม่รู้ไม่ชี้', zh: '忽视' }, consequence: { en: '⚠️ Complicit. The audit next year catches him... and you. "Why didn\'t you report it?" You are fired.', th: '⚠️ สมรู้ร่วมคิด! ปีหน้าตรวจสอบบัญชีเจอเขา... และคุณ "ทำไมไม่รายงาน?" โดนไล่ออกคู่', zh: '⚠️ 同谋。明年的审计抓住了他……还有你。“你为什么不报告？”你被解雇了。' }, stats: { competence: 20, ethics: -40, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '👥 Anonymous Tip', th: '👥 บัตรสนเท่ห์', zh: '匿名举报' }, consequence: { en: '✅ Smart. You tip off the board. They inspect quietly. He resigns "for health reasons." Agency reputation saved.', th: '✅ ฉลาด! แจ้งบอร์ดบริหารเงียบๆ เขาตรวจเจอและให้ลาออก "เพื่อรักษาสุขภาพ" องค์กรรอด', zh: '✅ 聪明。你向董事会透露消息。他们悄悄检查。他“因健康原因”辞职。机构声誉得以保全。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 50 } }
        ]
    },


    {
        id: 'sw_033',
        text: {
            en: '👻 The Ghost Client: You notice a colleague, Sarah, logs 10 hours a week visiting a client named "John Doe." You check the address; it\'s an empty lot. Sarah has 3 kids and needs the overtime pay.',
            th: '👻 เคสผี: คุณจับได้ว่าเพื่อนร่วมงานชื่อซาร่า ลงเวลา 10 ชม./วีค ไปเยี่ยมเคสชื่อ "จอน โด" เช็คที่อยู่ดูเป็นที่ดินเปล่า ซาร่ามีลูก 3 คนและต้องการค่าล่วงเวลา',
            zh: '👻 幽灵客户：你注意到同事莎拉每周记录 10 小时拜访一位名叫“无名氏”的客户。你查了地址；那是一块空地。莎拉有 3 个孩子，需要加班费。'
        },
        options: [
            { id: 'A', text: { en: '📝 Report Fraud', th: '📝 รายงานการโกง', zh: '报告欺诈' }, consequence: { en: '✅ Integrity. Sarah is fired and prosecuted. Her kids go into the system. You followed the code, but at what cost?', th: '✅ ซื่อสัตย์! ซาร่าโดนไล่ออกและดำเนินคดี ลูกเธอต้องมารับการสงเคราะห์เอง ทำถูกกฎแต่ราคาที่จ่ายแพงเหลือเกิน', zh: '✅ 正直。莎拉被解雇并被起诉。她的孩子进入了系统。你遵守了准则，但代价是什么？' }, stats: { competence: 50, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🗣️ Confront Sarah', th: '🗣️ เคลียร์กับซาร่า', zh: '与莎拉对质' }, consequence: { en: '✅ Correction. "Stop now or I report." She breaks down, deletes the hours, and takes a second job. You saved her from jail.', th: '✅ แก้ไข! "หยุดเดี๋ยวนี้ไม่งั้นแจ้งจับ" เธอร้องไห้ ยอมลบเวลาทิ้งและไปหางานเสริม คุณช่วยเธอไม่ต้องติดคุก', zh: '✅以此：纠正。“现在停止，否则我就报告。”她崩溃了，删除了工时，并找了第二份工作。你把她从监狱里救了出来。' }, stats: { competence: 60, ethics: 40, leadership: 60, innovation: 20 } },
            { id: 'C', text: { en: '🙈 Cover for Her', th: '🙈 ช่วยปิดบัง', zh: '以此：掩护她' }, consequence: { en: '⚠️ Conspiracy. You say nothing. She gets greedy and adds more fake clients. Eventually, the whole department is audited.', th: '⚠️ ร่วมขบวนการ! คุณเงียบ เธอเลยได้ใจเพิ่มเคสปลอมอีก สุดท้ายโดนตรวจสอบยกแผนกซวยกันหมด', zh: '⚠️ 阴谋。你什么也没说。她变得贪婪，增加了更多假客户。最终，整个部门都被审计。' }, stats: { competence: 20, ethics: -30, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '💸 Loan Her Money', th: '💸 ให้ยืมเงิน', zh: '借给她钱' }, consequence: { en: '❌ Boundary Issue. You lend her money so she stops fraud. She never pays you back. You are now personally involved in her mess.', th: '❌ ล้ำเส้น! ให้ยืมเงินเพื่อให้เธอหยุดโกง เธอไม่คืนหรอก ตอนนี้คุณเลยพัวพันกับปัญหาของเธอเต็มๆ', zh: '❌ 边界问题。你借钱给她，这样她就停止欺诈。她从没还过。你现在亲自卷入了她的烂摊子。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } }
        ]
    },


    {
        id: 'sw_034',
        text: {
            en: '🐕 The Animal Hoarder: An elderly client has 40 cats in a small apartment. It\'s a health hazard. Eviction is imminent. She says, "They are my only family. If they go, I die."',
            th: '🐕 ยายกับแมว 40 ตัว: ลูกความสูงอายุเลี้ยงแมว 40 ตัวในห้องเล็กๆ สกปรกจนเสี่ยงโดนไล่ที่ เธอบอก "พวกมันคือครอบครัว ถ้าเอามันไป ฉันตายดีกว่า"',
            zh: '🐕 动物囤积者：一位老人在小公寓里养了 40 只猫。这是健康隐患。即将被驱逐。她说：“它们是我唯一的家人。如果它们走了，我就去死。”'
        },
        options: [
            { id: 'A', text: { en: '🧹 Call Animal Control', th: '🧹 เรียกเทศบาลจับแมว', zh: 'A 呼叫动物管制' }, consequence: { en: '💀 Heartbreak. They take all the cats. She goes into shock and depression. She stops trusting anyone. The "problem" is solved, but the human is broken.', th: '💀 ใจสลาย! เทศบาลกวาดเรียบ ยายช็อกและซึมเศร้า ไม่ไว้ใจใครอีก ปัญหาจบแต่คนพัง', zh: '💀 心碎。他们带走了所有的猫。她陷入休克和抑郁。她不再信任任何人。“问题”解决了，但人垮了。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🤝 "Keep 2" Compromise', th: '🤝 ต่อรอง "เหลือ 2 ตัว"', zh: 'B “保留 2 只”妥协' }, consequence: { en: '✅ Successful Negotiation. You spend days finding no-kill shelters for 38 cats, and let her keep 2 favorites. She grieves but accepts it to save her home.', th: '✅ เจรจาสำเร็จ! ใช้เวลาหลายวันหาบ้านใหม่ให้ 38 ตัว ยอมให้ยายเก็บ 2 ตัวโปรดไว้ ยายเสียใจแต่ยอมเพื่อรักษาสิทธิ์ที่อยู่', zh: '✅ 成功的谈判。你花了几天时间为 38 只猫找到免杀收容所，并让她保留 2 只最喜欢的。她很悲伤，但为了保住家而接受了。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🏚️ Fight the Landlord', th: '🏚️ งัดข้อเจ้าของตึก', zh: 'C 对抗房东' }, consequence: { en: '❌ Losing Battle. The smell is undeniable. You lose in court. She is evicted WITH the cats. Now she is homeless with 40 animals.', th: '❌ แพ้ราบคาบ! กลิ่นมันเหม็นจริง ศาลสั่งแพ้ ยายโดนไล่ออกพร้อมแมว กลายเป็นคนไร้บ้านที่มีภาระ 40 ชีวิต', zh: '❌ 必败之战。气味无可否认。你在法庭上输了。她连同猫一起被驱逐。现在她带着 40 只动物无家可归。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '🩹 Secret Cleaning Crew', th: '🩹 แอบจ้างคนมาคลีน', zh: 'D 秘密清洁队' }, consequence: { en: '⚠️ Exhausting. You pay cleaners monthly to hide the mess. It drains your resources and creates a dependency. The cats keep breeding.', th: '⚠️ เหนื่อยฟรี! จ้างคนมาถูทุกเดือนเพื่อกลบเกลื่อน หมดเงินและแก้ที่ปลายเหตุ แมวก็ออกลูกเพิ่มเรื่อยๆ', zh: '⚠️ 筋疲力尽。你每月付钱给清洁工来掩盖混乱。这耗尽了你的资源并造成了依赖。猫继续繁殖。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 20 } }
        ]
    },


    {
        id: 'sw_035',
        text: {
            en: '🦋 Emancipated Teen: A 16-year-old wants legal emancipation to escape foster care. She is smart but has no job or savings. If you support her, she might end up on the street.',
            th: '🦋 ปีกกล้าขาแข็ง: เด็ก 16 ขอศาลสั่งให้เป็นผู้บรรลุนิติภาวะเพื่อหนีบ้านรับเลี้ยง เธอฉลาดแต่ไม่มีงานไม่มีเงินเก็บ ถ้าคุณหนุนหลัง เธออาจไปไม่รอด',
            zh: '🦋 独立少年：一名 16 岁的少年希望获得法律上的独立，以逃避寄养。她很聪明，但没有工作或积蓄。如果你支持她，她可能会流落街头。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Oppose Petition', th: '🚫 คัดค้านหัวชนฝา', zh: 'A 反对请愿' }, consequence: { en: '❌ Rebellion. She runs away anyway. Now she is illegal and vulnerable to exploitation. You lost your influence.', th: '❌ ยิ่งห้ามเหมือนยิ่งยุ! เธอหนีออกจากบ้าน กลายเป็นเด็กเร่ร่อนผิดกฎหมาย เสี่ยงโดนหลอกใช้งาน คุณหมดความหมาย', zh: '❌ 叛逆。不管怎样她还是跑了。现在她是非法的，容易受剥削。你失去了你的影响力。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '✅ Support Fully', th: '✅ สนับสนุนเต็มที่', zh: 'B 全力支持' }, consequence: { en: '📉 Reality Check. She wins, leaves, and runs out of money in 2 weeks. She calls you crying, but you can no longer legally help.', th: '📉 เจอของจริง! เธอชนะและย้ายออก แต่เงินหมดใน 2 อาทิตย์ โทรมาร้องไห้แต่คุณช่วยในนามเจ้าหน้าที่ไม่ได้แล้ว', zh: '📉 现实检验。她赢了，离开了，两周后钱花光了。她哭着给你打电话，但你在法律上已无法提供帮助。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'C', text: { en: '📝 Construct a Plan', th: '📝 สร้างแผนรองรับ', zh: 'C 制定计划' }, consequence: { en: '✅ Mentorship. "I will support you IF you save $2,000 and finish this semester." She works hard, learns budgeting, and succeeds later.', th: '✅ พี่เลี้ยง: "พี่จะช่วย ถ้าหนูเก็บเงินได้ $2,000 และเรียนจบเทอมนี้" เธอฮึดสู้ เรียนรู้วินัยการเงิน และรอดในที่สุด', zh: '✅ 导师制。“如果你存够 2000 美元并完成这学期学业，我就支持你。”她努力工作，学会了预算，后来成功了。' }, stats: { competence: 60, ethics: 50, leadership: 60, innovation: 40 } },
            { id: 'D', text: { en: '🏘️ Independent Living Program', th: '🏘️ โครงการหอพักกึ่งอิสระ', zh: 'D 独立生活项目' }, consequence: { en: '✅ Soft Landing. You compromise. She moves into a supervised apartment. Freedom with a safety net. Best practice.', th: '✅ ลงจอดนิ่มๆ! เจอกันครึ่งทาง ย้ายไปหอพักที่มีเจ้าหน้าที่ดูแล ได้อิสระแต่ยังมีเบาะรองรับ เป็นทางออกที่ดีที่สุด', zh: '✅ 软着陆。你妥协了。她搬进了一间受监督的公寓。有安全网的自由。最佳实践。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 30 } }
        ]
    },


    {
        id: 'sw_036',
        text: {
            en: '❤️ Dangerous Love: A client with cognitive delays is dating a man with a violent criminal record. She says she is happy. Is it protection or controlling behavior to intervene?',
            th: '❤️ ความรักอันตราย: ลูกความที่มีพัฒนาการช้าคบกับผู้ชายที่มีประวัติความรุนแรง เธอบอกว่ามีความสุข การเข้าไปแทรกแซงคือความหวังดีหรือการบงการ?',
            zh: '❤️ 危险的爱：一位有认知迟缓的客户正在和一个有暴力犯罪记录的男人约会。她说她很开心。干预是保护还是控制行为？'
        },
        options: [
            { id: 'A', text: { en: '🚫 Forbid the Relationship', th: '🚫 สั่งห้ามคบ', zh: 'A 禁止这段关系' }, consequence: { en: '❌ Alienation. She hides him. You lose oversight. He isolates her further. You played right into the abuser\'s narrative.', th: '❌ ยิ่งห่างเหิน! เธอซ่อนเขาไว้ คุณตรวจสอบไม่ได้ เขาเลยกีดกันเธอจากคนอื่น คุณเข้าทางคนทำร้ายร่างเลยแบบนี้', zh: '❌ 疏远。她把他藏起来。你失去了监督权。他进一步孤立了她。你正中施虐者下怀。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🕵️ Background Check & Educate', th: '🕵️ เช็คประวัติและให้ความรู้', zh: 'B 背景调查与教育' }, consequence: { en: '✅ Empowerment. You show her his record gently. Teach her "Red Flags" safely. She eventually recognizes the signs herself.', th: '✅ ให้พลัง! เอาประวัติเขาให้ดูอย่างนุ่มนวล สอนเรื่อง"สัญญาณอันตราย" สุดท้ายเธอเริ่มเอะใจและเห็นธาตุแท้เอง', zh: '✅ 赋权。你温和地向她展示他的记录。安全地教她识别“危险信号”。她最终自己识别出了这些迹象。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '👮 Call Parole Officer', th: '👮 แจ้งเจ้าหน้าที่คุมประพฤติ', zh: 'C 呼叫假释官' }, consequence: { en: '⚠️ Nuclear Option. He goes back to jail. She is devastated and hates you. You saved her physically but destroyed her autonomy.', th: '⚠️ ระเบิดลง! เขาโดนจับกลับคุก เธอเสียใจและเกลียดคุณ ร่างกายปลอดภัยแต่ใจพังยับ', zh: '⚠️ 核选项。他回到了监狱。她崩溃了，恨你。你在身体上拯救了她，但摧毁了她的自主权。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'D', text: { en: '🤷 Respect Choices', th: '🤷 เคารพการตัดสินใจ', zh: 'D 尊重选择' }, consequence: { en: '💀 Negligence. He assaults her badly a month later. You knew the risk and did nothing.', th: '💀 ละเลย! เดือนต่อมาเธอโดนซ้อมปางตาย คุณรู้ทั้งรู้แต่ไม่ทำอะไร', zh: '💀 玩忽职守。一个月后他严重袭击了她。你知道风险却什么也没做。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } }
        ]
    },


    {
        id: 'sw_037',
        text: {
            en: '⏳ Voucher Expiry: A family\'s housing voucher expires in 2 days. The landlord office is "closed for renovation" until next week. They will lose the house on a technicality.',
            th: '⏳ คูปองบ้านพยาเคราะห์จะหมดอายุใน 2 วัน สำนักงานเช่าดัน"ปิดปรับปรุง"ถึงอาทิตย์หน้า พวกเขาจะเสียสิทธิ์เพราะเรื่องงี่เง่านี้',
            zh: '⏳ 代金券过期：一个家庭的住房代金券将在 2 天后过期。房东办公室“装修关闭”直到下周。他们将因为技术原因失去房子。'
        },
        options: [
            { id: 'A', text: { en: '🪟 Break Protocol', th: '🪟 แหกกฎ', zh: 'A 打破协议' }, consequence: { en: '✅ Risky Hero. You go to the landlord\'s home and force a signature. Unprofessional but effective. Family saved.', th: '✅ ฮีโร่สายลุย! บุกไปบ้านเจ้าของตึกเพื่อขอลายเซ็น ไม่เป็นมืออาชีพแต่ได้ผล ครอบครัวรอด', zh: '✅ 冒险的英雄。你去房东家强迫签字。不专业但有效。家庭得救了。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 40 } },
            { id: 'B', text: { en: '📝 Extension Request', th: '📝 ยื่นขอขยายเวลา', zh: 'B 延期请求' }, consequence: { en: '⏳ Bureaucracy Hell. The request takes 30 days. They are evicted in the meantime. System failed.', th: '⏳ นรกระบบราชการ! ยื่นเรื่องรอ 30 วัน ระหว่างนั้นโดนไล่ออก ระบบล้มเหลว', zh: '⏳ 官僚地狱。请求需要 30 天。在此期间他们被驱逐。系统失败。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🗞️ Media Threat', th: '🗞️ ขู่ลงข่าว', zh: 'C 媒体威胁' }, consequence: { en: '✅ Public Pressure. You tweet the situation. The office miraculously opens for 1 hour to sign. You create an enemy but win the battle.', th: '✅ พลังโซเชียล! ทวีตแฉเลย จู่ๆ ออฟฟิศก็เปิดให้เซ็นเฉย ได้ศัตรูเพิ่มแต่ชนะศึกนี้', zh: '✅ 公众压力。你在推特上发布了情况。办公室奇迹般地开放了 1 小时进行签字。你树立了一个敌人，但赢得了战斗。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 60 } },
            { id: 'D', text: { en: '🤷 Wait it Out', th: '🤷 ก็รอไป', zh: 'D 等待' }, consequence: { en: '❌ Homelessness. "Rules are rules." They sleep in a car. You failed to advocate.', th: '❌ ไร้บ้าน! "กฎก็คือกฎ" พวกเขาต้องไปนอนในรถ คุณไม่ได้ช่วยเรียกร้องอะไรเลย', zh: '❌ 无家可归。“规则就是规则。”他们睡在车里。你未能进行倡导。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } }
        ]
    },


    {
        id: 'sw_038',
        text: {
            en: '🧬 Genetic Reveal: An adopted child (now 18) finds you. He wants to know his birth parents. The file is sealed/closed adoption. The birth mom begged for eternal secrecy due to trauma.',
            th: '🧬 ความลับทางพันธุกรรม: เด็กที่ถูกรับเลี้ยง (ตอนนี้ 18) ตามหาคุณ เขาอยากรู้พ่อแม่จริง แต่ไฟล์เป็นความลับขั้นสุด แม่แท้ๆ เคยขอร้องให้เหยียบให้มิดเพราะปมในอดีต',
            zh: '🧬 基因揭秘：一名被收养的孩子（现年 18 岁）找到了你。他想知道他的亲生父母是谁。档案是密封/封闭式收养。亲生母亲因创伤恳求永远保密。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Refuse Request', th: '🚫 ปฏิเสธการให้ข้อมูล', zh: 'A 拒绝请求' }, consequence: { en: '✅ Ethical Boundary. You respect the birth mother\'s request for secrecy. The son is angry but the legal contract is honored.', th: '✅ รักษาคำมั่น! คุณเคารพความต้องการของแม่แท้ๆ ลูกชายโกรธมากแต่คุณทำตามกฎหมายและสัญญาที่ให้ไว้', zh: '✅ 道德界限。你尊重亲生母亲保密的请求。儿子很生气，但法律合同得到了遵守。' }, stats: { competence: 50, ethics: 60, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Offer Mediation', th: '🤝 ช่วยเป็นตัวกลาง', zh: 'B 提供调解' }, consequence: { en: '✅ Balanced. You offer to contact the birth mother to see if she has changed her mind. She agrees to a letter exchange. Progress without trauma.', th: '✅ พบกันครึ่งทาง! คุณอาสาติดต่อแม่แท้ๆ ให้ก่อนว่าเธอเปลี่ยนใจไหม สรุปเธอยอมแลกเปลี่ยนจดหมายกัน Progress without trauma.', zh: '✅ 平衡。你提议联系亲生母亲，看看她是否改变了主意。她同意交换信件。在没有创伤的情况下取得进展。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '📖 Open the File', th: '📖 เปิดเผยข้อมูล', zh: 'C 打开档案' }, consequence: { en: '⚠️ Radical Honesty. You believe he has a right to his identity. He finds her. She is re-traumatized and sues the agency. You lose your job.', th: '⚠️ ซื่อสัตย์จนตัวตาย! คุณเชื่อว่าเขามีสิทธิ์รู้ตัวตน สรุปเขาไปหาแม่ แม่ช็อกและฟ้องร้ององค์กร คุณโดนไล่ออก', zh: '⚠️ 激进的诚实。你认为他有权了解自己的身份。他找到了她。她再次受到创伤并起诉了该机构。你丢了工作。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'D', text: { en: '🕵️ Hint at DNA Test', th: '🕵️ ชี้ทาง DNA', zh: 'D 暗示 DNA 测试' }, consequence: { en: '⚠️ Loophole. "I can\'t tell you, but 23andMe exists." He finds her anyway. You bypassed ethics technically.', th: '⚠️ ช่องโหว่! "บอกไม่ได้ แต่ลองตรวจ DNA ดูสิ" สุดท้ายเขาก็หาเจออยู่ดี เลี่ยงบาลีชัดๆ', zh: '⚠️ 漏洞。“我不能告诉你，但 23andMe 是存在的。”不管怎样他还是找到了她。你在技术上绕过了道德。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 20 } }
        ]
    },


    {
        id: 'sw_039',
        text: {
            en: '🪧 The Strike: Social workers remain unpaid and overworked. The union calls a total strike. If you strike, your vulnerable clients have no one. If you don\'t, the system never improves.',
            th: '🪧 การประท้วงหยุดงาน: นักสังคมสงเคราะห์ทำงานหนักแต่เงินน้อย สหภาพสั่งสไตรค์หยุดงาน ถ้าคุณหยุด ลูกความผู้อ่อนแอจะเคว้ง แต่ถ้าไม่หยุด ระบบก็เน่าเฟะต่อไป',
            zh: '🪧 罢工：社工仍然没有报酬且过度劳累。工会号召全面罢工。如果你罢工，你的弱势客户将无人照看。如果你不罢工，系统永远不会改善。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Strike Hard', th: '🛑 หยุดงานประท้วง', zh: 'A 强硬罢工' }, consequence: { en: '📉 Short-term Pain/Long-term Gain. Chaos for a week. But the state caves and hires 50 more workers. Meaningful change.', th: '📉 เจ็บแต่จบ! วุ่นวายทั้งอาทิตย์ แต่รัฐยอมถอยและจ้างคนเพิ่ม 50 คน การเปลี่ยนแปลงที่คุ้มค่า', zh: '📉 短痛/长益。混乱了一周。但州政府屈服了，多雇了 50 名工人。有意义的改变。' }, stats: { competence: 40, ethics: 50, leadership: 70, innovation: 40 } },
            { id: 'B', text: { en: '💼 Scab/Work', th: '💼 เข้าทำงานต่อ', zh: 'B 破坏罢工/工作' }, consequence: { en: '❤️ Martyrdom. You handle emergencies alone. The strike fails because too many worked. Suffering continues indefinitely.', th: '❤️ พ่อพระจำยอม! คุณลุยงานฉุกเฉินคนเดียว การประท้วงล่มเพราะคนไม่เอาด้วยเยอะ ความทุกข์ระทมดำเนินต่อไป', zh: '❤️ 殉道。你独自处理紧急情况。罢工失败了，因为太多人工作。痛苦无限期地持续下去。' }, stats: { competence: 50, ethics: 40, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🚑 Essential Services Only', th: '🚑 ทำเฉพาะเคสวิกฤต', zh: 'C 仅限基本服务' }, consequence: { en: '✅ Balanced approach. You strike for paperwork but respond to "Life or Death" calls. Public supports you.', th: '✅ ทางสายกลาง! งานเอกสารหยุดทำแต่วิ่งรอกเฉพาะเคสคอขาดบาดตาย ประชาชนเห็นใจและสนับสนุน', zh: '✅ 平衡的方法。你因文书工作罢工，但响应“生死攸关”的电话。公众支持你。' }, stats: { competence: 60, ethics: 60, leadership: 60, innovation: 30 } },
            { id: 'D', text: { en: '🤒 Call in Sick', th: '🤒 ลาป่วยการเมือง', zh: 'D 请病假' }, consequence: { en: '❌ Avoidance. You hide. Neither side respects you. Zero impact.', th: '❌ หนีปัญหา! คุณหลบหน้า ไม่มีฝ่ายไหนนับถือคุณ ไม่มีอะไรเปลี่ยนแปลง', zh: '❌ 逃避。你躲起来。双方都不尊重你。零影响。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } }
        ]
    },


    {
        id: 'sw_040',
        text: {
            en: '📱 Digital Boundaries: A former teen client (now 19) sends you a friend request. He is doing well and wants to stay in touch. He tags you in a "Thank You" post.',
            th: '📱 เส้นแบ่งดิจิทัล: อดีตเด็กในดูแล (ตอนนี้ 19) แอดเฟรนด์มา เขาชีวิตดีขึ้นและอยากติดต่อ เขาแท็กคุณในโพสต์ "ขอบคุณครับครู"',
            zh: '📱 数字边界：一名前青少年客户（现年 19 岁）向你发送好友请求。他过得很好，想保持联系。他在一个“谢谢”帖子中标记了你。'
        },
        options: [
            { id: 'A', text: { en: '👍 Accept Request', th: '👍 รับแอด', zh: 'A 接受请求' }, consequence: { en: '⚠️ Slippery Slope. It blurs lines. Other clients see it and get jealous or confused. Professionalism compromised.', th: '⚠️ ทางลาดชัน! เส้นแบ่งเริ่มเบลอ ลูกความคนอื่นเห็นแล้วอิจฉาหรืองง ความเป็นมืออาชีพเสียไป', zh: '⚠️ 滑坡。这模糊了界限。其他客户看到后会嫉妒或困惑。专业性受损。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🚫 Block/Ignore', th: '🚫 บล็อก/เมิน', zh: 'B 屏蔽/忽略' }, consequence: { en: '💔 Cold. He feels hurt. "I\'m just a file number to them." Connection severed abruptly.', th: '💔 เย็นชา! เขาเสียใจ "ฉันก็แค่เลขเคสสำหรับเขาสินะ" ตัดรอนกันเกินไป', zh: '💔 冷漠。他感到受伤害。“对他们来说，我只是一个档案号码。”联系突然中断。' }, stats: { competence: 40, ethics: 40, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '📧 Professional Redirect', th: '📧 ตอบกลับอย่างมืออาชีพ', zh: 'C 专业重定向' }, consequence: { en: '✅ Standard of Care. Send a private message: "So proud of you! I can\'t add clients on FB, but keep me updated via email/LinkedIn." Kind but firm.', th: '✅ มาตรฐานเป๊ะ! ส่งข้อความลับ: "ภูมิใจในตัวหนูมาก! พี่แอดเฟรนด์ไม่ได้ผิดกฎ แต่ทักทายผ่านอีเมล/LinkedIn ได้นะ" ใจดีแต่ชัดเจน', zh: '✅护理标准。发送私信：“为你感到骄傲！我不能在 FB 上加客户，但可以通过电子邮件/LinkedIn 跟我保持联系。”和蔼但坚定。' }, stats: { competence: 60, ethics: 70, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '📢 Repost Publicly', th: '📢 แชร์ต่อสาธารณะ', zh: 'D 公开转发' }, consequence: { en: '❌ Breach. Identifying him as a client publicly violates privacy laws. You could be fined.', th: '❌ ผิดเต็มประตู! การระบุตัวตนเขาว่าเป็นลูกความในที่สาธารณะผิดกฎหมายความเป็นส่วนตัว เตรียมโดนปรับ', zh: '❌ 违约。公开确认他是客户违反了隐私法。你可能会被罚款。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 } }
        ]
    },


    {
        id: 'sw_041',
        text: {
            en: '🪶 Heritage vs Bond: An indigenous child has been in a non-native foster home for 3 years. They love him. The tribe finds a distant native relative and demands return under ICWA laws. The child cries and wants to stay.',
            th: '🪶 สายเลือดหรือความรัก: เด็กชนเผ่าพื้นเมืองอยู่บ้านรับเลี้ยงต่างชาติมา 3 ปีจนรักกันแล้ว ชนเผ่าหาญาติห่างๆ เจอและทวงคืนตามกฎหมาย เด็กไม่อยากไป',
            zh: '🪶 遗产与纽带：一名土著儿童在一个非本地寄养家庭生活了 3 年。他们爱他。部落找到了一位远房的土著亲戚，并根据 ICWA 法律要求归还。孩子哭着想留下。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Follow Law (Return)', th: '⚖️ ทำตามกฎหมาย (คืนเด็ก)', zh: 'A 遵守法律（归还）' }, consequence: { en: '📉 Heartbreak/Legacy. Short-term trauma for the child, but preservation of culture and identity long-term. A painful, complex right.', th: '📉 เจ็บปวดเพื่อรากเหง้า! เด็กเสียใจระยะสั้น แต่ได้รักษาวัฒนธรรมและตัวตนระยะยาว ความถูกต้องที่เจ็บปวด', zh: '📉 心碎/遗产。对孩子来说是短期的创伤，但长期来看是对文化和身份的保护。一个痛苦、复杂的权利。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🏠 Fight for Foster Parents', th: '🏠 สู้เพื่อพ่อแม่บุญธรรม', zh: 'B 为寄养父母而战' }, consequence: { en: '⚠️ Legal Failure. You fight the tribe. You lose (ICWA is powerful). You create animosity between the families. Worst transition.', th: '⚠️ แพ้คดี! คุณงัดข้อกับชนเผ่า แต่กฎหมายนี้แข็งมาก คุณแพ้และสร้างความบาดหมางระหว่างสองบ้าน การส่งต่อเด็กพังพินาศ', zh: '⚠️ 法律失败。你与部落对抗。你输了（ICWA 很强大）。你在两个家庭之间制造了敌意。最糟糕的过渡。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🌉 Cultural Transition Plan', th: '🌉 แผนเชื่อมวัฒนธรรม', zh: 'C 文化过渡计划' }, consequence: { en: '✅ Best Possible. You work with the tribe to allow a slow transition and permanent visitation for the foster family. Tribe agrees for the child\'s sake.', th: '✅ ดีที่สุดเท่าที่ทำได้! เจรจากับเผ่าขอส่งตัวช้าๆ และให้พ่อแม่เก่าเยี่ยมได้ตลอด เผ่ายอมเพื่อเห็นแก่เด็ก', zh: '✅ 尽可能最好。你与部落合作，允许缓慢过渡，并允许寄养家庭永久探视。部落为了孩子同意了。' }, stats: { competence: 60, ethics: 60, leadership: 60, innovation: 50 } },
            { id: 'D', text: { en: '🏃 Hide the Child', th: '🏃 ซ่อนเด็ก', zh: 'D 把孩子藏起来' }, consequence: { en: '💀 Kidnapping. That is a federal crime. You go to jail. The child is traumatized by the arrest.', th: '💀 ลักพาตัว! นี่มันคดีระดับชาติ คุณติดคุก เด็กฝังใจกับภาพตำรวจจับคุณ', zh: '💀 绑架。那是联邦重罪。你进监狱。孩子因逮捕而受到创伤。' }, stats: { competence: 0, ethics: -20, leadership: 0, innovation: 0 } }
        ]
    },




    {
        id: 'sw_042',
        text: {
            en: '🏥 Medical Mystery: A mom brings her daughter to the ER constantly. Doctors suspect "Munchausen by Proxy" (she makes the child sick for attention). The mom threatens to sue you if you investigate.',
            th: '🏥 ปริศนาโรงพยาบาล: แม่พาลูกเข้าฉุกเฉินบ่อยเกิน หมอสงสัยว่าแม่แกล้งทำลูกป่วยเรียกร้องความสนใจ (Munchausen) แม่ขู่จะฟ้องถ้าคุณเริ่มสืบ',
            zh: '🏥 医学谜团：一位妈妈经常带女儿去急诊室。医生怀疑“代理孟乔森综合症”（她为了博取关注而让孩子生病）。这名妈妈威胁说如果你调查就起诉你。'
        },
        options: [
            { id: 'A', text: { en: '🕵️ Investigate Covertly', th: '🕵️ แอบสืบเงียบๆ', zh: 'A 秘密调查' }, consequence: { en: '✅ Evidence Found. You verify she was poisoning the IV. Child removed just in time. You saved a life.', th: '✅ เจอหลักฐาน! จับได้ว่าเธอแอบฉีดยาพิษใส่สายน้ำเกลือ ช่วยเด็กทันเวลาเฉียดฉิว', zh: '✅ 发现证据。你证实她在静脉注射中下毒。孩子被及时带走。你救了一条命。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '😨 Back Off', th: '😨 ถอยดีกว่า', zh: 'B以此为由' }, consequence: { en: '💀 Fatal Error. The child dies of "mysterious causes" two weeks later. The lawsuit threat worked on you.', th: '💀 พลาดมหันต์! เด็กตายจาก "สาเหตุปริศนา" สองอาทิตย์ต่อมา คำขู่ได้ผลกับคุณ', zh: '💀 致命错误。两周后孩子死于“神秘原因”。诉讼威胁对你起作用了。' }, stats: { competence: 10, ethics: -10, leadership: 0, innovation: 0 } },
            { id: 'C', text: { en: '⚖️ Emergency Custody Order', th: '⚖️ ขอหมายศาลคุ้มครองฉุกเฉิน', zh: 'C 紧急监护令' }, consequence: { en: '⚠️ High Conflict. Valid move, but requires strong proof. If doctors are wrong, you traumatized a sick child and family. High stakes.', th: '⚠️ เดิมพันสูง! เป็นทางที่ถูกแต่ต้องมีหลักฐานแน่น ถ้าหมอวินิจฉัยผิดขึ้นมาคืองานเข้า บาปกรรมเด็กป่วยด้วย', zh: '⚠️ 高冲突。有效的举措，但需要强有力的证据。如果医生错了，你就给生病的孩子和家庭造成了创伤。高风险。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '📹 Install Hidden Camera', th: '📹 ติดกล้องแอบถ่าย', zh: 'D 安装隐形摄像头' }, consequence: { en: '❌ Illegal. Evidence is inadmissible in court. You get fired and the mom walks free with the child.', th: '❌ ผิดกฎหมาย! หลักฐานใช้ในศาลไม่ได้ คุณโดนไล่ออก แม่ลอยหน้าลอยตาพาเด็กกลับบ้าน', zh: '❌ 非法。证据在法庭上不可采纳。你被解雇了，妈妈带着孩子大摇大摆地走了。' }, stats: { competence: 30, ethics: 10, leadership: 20, innovation: 20 } }
        ]
    },


    {
        id: 'sw_043',
        text: {
            en: '🏨 The NIMBY Protest: You maintain a plan to convert an old hotel into a homeless shelter. The wealthy neighbors protest: "Not In My Backyard! Think of the property values!" They pressure the mayor.',
            th: '🏨 ม็อบคนรวย: คุณมีแผนเปลี่ยนโรงแรมเก่าเป็นศูนย์พักคนไร้บ้าน เพื่อนบ้านไฮโซประท้วง "อย่ามาตั้งแถวบ้านฉัน! ราคาที่ดินตกหมด!" พวกเขากดดันนายกเทศมนตรี',
            zh: '🏨 邻避抗议：你计划将一家旧酒店改建成无家可归者收容所。富有的邻居抗议：“别在我家后院！想想房产价值！”他们向市长施压。'
        },
        options: [
            { id: 'A', text: { en: '🏳️ Cancel Project', th: '🏳️ ยกเลิกโครงการ', zh: 'A 取消项目' }, consequence: { en: '❌ Defeat. The homeless remain in the rain. Wealth wins over humanity. You look weak.', th: '❌ พ่ายแพ้! คนไร้บ้านตากฝนต่อไป เงินชนะมนุษยธรรม คุณดูอ่อนแอมาก', zh: '❌ 失败。无家可归者留在雨中。财富战胜了人性。你看起来很软弱。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🗣️ Town Hall Defense', th: '🗣️ ดีเบตกลางสภา', zh: 'B 市政厅辩护' }, consequence: { en: '✅ Persuasion. You show data: "Shelters actually stabilize neighborhoods vs street camping." A compromise is reached with strict rules.', th: '✅ โน้มน้าว! เอาข้อมูลฟาด "มีศูนย์พักพิงดีกว่าปล่อยเขานอนริมถนนหน้าบ้านพวกคุณนะ" จบที่ยอมให้สร้างแต่กฎเข้มงวด', zh: '✅ 说服。你展示数据：“收容所比街头露营更能稳定社区。”达成了有严格规则的妥协。' }, stats: { competence: 60, ethics: 60, leadership: 60, innovation: 30 } },
            { id: 'C', text: { en: '🕵️ Move in Secrecy', th: '🕵️ แอบสร้างเงียบๆ', zh: 'C 秘密搬入' }, consequence: { en: '⚠️ Backlash. You move them in at night. The neighborhood sues. The shelter is shut down in month. Trust destroyed.', th: '⚠️ ตีกลับรุนแรง! คุณแอบขนคนเข้าตอนกลางคืน เพื่อนบ้านฟ้องยับ ศูนย์โดนสั่งปิดในเดือนเดียว พังทลาย', zh: '⚠️ 强烈反对。你在晚上把他们搬进去。邻居起诉。收容所在一个月内被迫关闭。信任被摧毁。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'D', text: { en: '📺 Shame the Neighbors', th: '📺 ประจานเพื่อนบ้าน', zh: 'D 羞辱邻居' }, consequence: { en: '🎭 Viral War. You call them "Classicist Monsters" on TV. It gets national attention. Donations pour in, but local hostility is permanent.', th: '🎭 สงครามไวรัล! คุณด่ากราดออกทีวี ดังทั่วประเทศ เงินบริจาคไหลมาเทมา แต่เพื่อนบ้านเกลียดคุณเข้าไส้ตลอดไป', zh: '🎭 病毒式战争。你在电视上称他们为“阶级主义怪物”。这引起了全国的关注。捐款涌入，但当地的敌意是永久的。' }, stats: { competence: 40, ethics: 30, leadership: 50, innovation: 50 } }
        ]
    },


    {
        id: 'sw_044',
        text: {
            en: '🏥 The Organ Donor: A 17-year-old client wants to donate a kidney to his dying father. The father is an alcoholic and might relapse. The son is desperate to save him. Do you support the transplant?',
            th: '🏥 บริจาคไตให้พ่อ: ลูกความวัย 17 อยากบริจาคไตให้พ่อที่กำลังจะตาย แต่พ่อมีประวัติติดเหล้าและอาจกลับไปดื่มอีก ลูกชายขอร้องให้คุณช่วยเซ็นอนุญาต จะเอาด้วยไหม?',
            zh: '🏥 器官捐赠：一名 17 岁的客户想把肾脏捐给垂死的父亲。父亲是个酗酒者，可能会复发。儿子拼命想救他。你支持移植吗？'
        },
        options: [
            { id: 'A', text: { en: '✅ Support Fully', th: '✅ สนับสนุนเต็มที่', zh: 'A 全力支持' }, consequence: { en: '❤️ Emotional Win. The transplant is successful. The father is grateful and stays sober. The bond is unbreakable.', th: '❤️ ชนะใจ! การผ่าตัดผ่านไปด้วยดี พ่อซาบซึ้งและเลิกเหล้าถาวร ความผูกพันแน่นแฟ้น', zh: '❤️ 情感上的胜利。移植成功。父亲心存感激并保持清醒。纽带牢不可破。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Oppose Transplant', th: '🛑 คัดค้านการย้ายอวัยวะ', zh: 'B 反对移植' }, consequence: { en: '⚖️ Legal Safety. You block it because he is a minor. The father dies. The son hates you forever, but you followed medical ethics.', th: '⚖️ ปลอดภัยไว้ก่อน! คุณคัดค้านเพราะเด็กยังไม่บรรลุนิติภาวะ พ่อเสียชีวิต เด็กเกลียดคุณเข้าไส้แต่คุณทำตามจรรยาบรรณเป๊ะ', zh: '⚖️ 法律安全。因为他是未成年人，你阻止了移植。父亲去世了。儿子永远恨你，但你遵守了医学道德。' }, stats: { competence: 50, ethics: 60, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '📜 Sobriety Contract', th: '📜 สัญญาเลิกเหล้า', zh: 'C 戒酒合同' }, consequence: { en: '⚠️ High Risk. You mandate one year of sobriety. The father fails in month 3. The father dies, the son thinks you killed him with rules.', th: '⚠️ เสี่ยงสูง! คุณบังเอิญให้พ่อเลิกเหล้าให้ได้ 1 ปีก่อน สรุปเดือนที่ 3 พ่อดื่มและเสียชีวิต ลูกชายคิดว่าคุณฆ่าพ่อเขาด้วยกฎงี่เง่า', zh: '⚠️ 高风险。你要求戒酒一年。父亲在第 3 个月失败了。父亲去世了，儿子认为是你用规则杀死了他。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🧠 Psychological Eval', th: '🧠 ประเมินจิตวิทยา', zh: 'D 心理评估' }, consequence: { en: '✅ Professional. You find the son was feeling guilty-tripped. You offer counseling instead. The father passes peacefully, the son finds peace.', th: '✅ มืออาชีพ! เจอว่าเด็กโดนกดดันทางอ้อมจากญาติคนอื่น คุณเลยส่งบำบัดจิตแทน พ่อจากไปอย่างสงบและเด็กไม่รู้สึกผิด', zh: '✅ 专业。你发现儿子感到愧疚。你转而提供咨询。父亲平安去世，儿子找到了宁静。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 30 } }
        ]
    },
    {
        id: 'sw_045',
        text: {
            en: '🏫 The Threat: A quiet teen client draws a detailed map of the school with "X" marks on the cafeteria. He says it\'s "just a game," but you are worried about a potential shooting. Do you report it?',
            th: '🏫 แผนผังอันตราย: เด็กในความดูแลวาดแผนที่โรงเรียนและกากบาทที่โรงอาหาร เขาบอกว่า "แค่เกม" แต่คุณกลัวว่าจะเป็นแผนกราดยิง จะแจ้งความไหม?',
            zh: '🏫 威胁：一名安静的青少年客户画了一张详细的学校地图，并在食堂标上了“X”。他说这“只是个游戏”，但你担心可能会发生枪击事件。你举报吗？'
        },
        options: [
            { id: 'A', text: { en: '🚨 Report Immediately', th: '🚨 แจ้งความทันที', zh: 'A 立即举报' }, consequence: { en: '✅ Safety First. The school is swarmed by police. No weapon is found, but the teen is expelled. You might have saved lives, but his life is derailed.', th: '✅ ปลอดภัยไว้ก่อน! ตำรวจบุกโรงเรียน ไม่เจออาวุธแต่เด็กโดนไล่ออก คุณอาจช่วยชีวิตคนเป็นร้อยแต่อนาคตเด็กคนนี้พัง', zh: '✅ 安全第一。警察包围了学校。没有发现武器，但该青少年被开除了。你可能救了人命，但他的生活出轨了。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '💬 Confront Privately', th: '💬 คุยกันส่วนตัว', zh: 'B 私下对质' }, consequence: { en: '⚠️ High Stakes. You talk and realize he is being bullied. You don\'t report. A week later, he brings a knife to school. You are liable.', th: '⚠️ เสี่ยงตาย! คุยแล้วรู้ว่าเด็กโดนแกล้งเลยไม่ได้แจ้งความ อาทิตย์ต่อมาเด็กเอามีดไปโรงเรียน คุณโดนสอบสวนฐานละเลย', zh: '⚠️ 高风险。你交谈后意识到他正在被霸凌。你没有举报。一周后，他带了一把刀去学校。你要负责。' }, stats: { competence: 30, ethics: 20, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🕵️ Watchful Waiting', th: '🕵️ เฝ้าระวังเงียบๆ', zh: 'C 警惕等待' }, consequence: { en: '❌ Failure. While you "observed," he posted more threats online. The FBI knocks on your door asking why you didn\'t report the map.', th: '❌ ล้มเหลว! มัวแต่เฝ้าสังเกต เด็กไปโพสต์ขู่ในเน็ตเพิ่ม FBI บุกบ้านคุณถามว่าทำไมไม่แจ้งตั้งแต่เห็นแผนที่', zh: '❌ 失败。当你还在“观察”时，他在网上发布了更多威胁。FBI 敲开你的门，问你为什么没有上报那张地图。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '🤝 Team Evaluation', th: '🤝 ประเมินร่วมกับทีม', zh: 'D 团队评估' }, consequence: { en: '✅ Best Practice. You bring in a threat assessment team. They find he needs mental health help, not jail. Crisis averted correctly.', th: '✅ ยอดเยี่ยม! เรียกทีมประเมินวิกฤตมาช่วย สรุปเด็กต้องการโรงพยาบาลไม่ใช่คุก ระงับเหตุได้ถูกทุกขั้นตอน', zh: '✅ 最佳实践。你请来了一支威胁评估团队。他们发现他需要心理健康帮助，而不是进监狱。危机得到了正确的化解。' }, stats: { competence: 60, ethics: 50, leadership: 60, innovation: 40 } }
        ]
    },
    {
        id: 'sw_046',
        text: {
            en: '💼 Workplace Corruption: You catch a senior social worker accepting "favors" from a contractor who provide foster homes. She says she is "just making the system faster." Do you blow the whistle?',
            th: '💼 ทุจริตในที่ทำงาน: คุณจับได้ว่ารุ่นพี่รับ "ของกำนัล" จากบริษัทจัดหาบ้านรับเลี้ยง เธออ้างว่าเพื่อให้งานไวขึ้น จะแฉไหม?',
            zh: '💼 职场腐败：你抓到一个资深社工收受提供寄养家庭服务的承包商的“好处”。她说她只是为了“让系统运行更快”。你揭发吗？'
        },
        options: [
            { id: 'A', text: { en: '📢 Blow the Whistle', th: '📢 แฉความจริง', zh: 'A 揭发' }, consequence: { en: '✅ Integrity. She is fired. The agency is audited. It\'s a mess for months, but the corruption is gone. You are the "moral compass."', th: '✅ ซื่อสัตย์! รุ่นพี่โดนไล่ออก องค์กรโดนตรวจสอบยับ วุ่นวายอยู่หลายเดือนแต่ความเน่าเฟะหายไป คุณคือเข็มทิศศีลธรรม', zh: '✅ 正直。她被解雇了。机构受到了审计。几个月来一团糟，但腐败消失了。你是“道德指南针”。' }, stats: { competence: 50, ethics: 80, leadership: 60, innovation: 20 } },
            { id: 'B', text: { en: '🤫 Keep Quiet', th: '🤫 เงียบไว้', zh: 'B 保持沉默' }, consequence: { en: '⚠️ Complicit. You get promoted but feel sick inside. Eventually, a child is hurt in one of those "favored" homes. You are part of the problem.', th: '⚠️ สมรู้ร่วมคิด! ได้เลื่อนตำแหน่งแต่ใจพัง สุดท้ายมีเด็กเจ็บในบ้านกลุ่มนั้น คุณคือส่วนหนึ่งของความเลวร้ายนี้', zh: '⚠️ 共犯。你获得了晋升，但内心感到恶心。最终，一个孩子在其中一个受“优待”的家庭中受伤了。你成了问题的一部分。' }, stats: { competence: 40, ethics: 10, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🗣️ Confront Her', th: '🗣️ เคลียร์ส่วนตัว', zh: 'C 对质' }, consequence: { en: '❌ Dangerous. She threatens to frame you for her mistakes. Now you are in a cold war at the office. Your caseload suffers.', th: '❌ พัง! เธอขู่จะโยนขี้ให้คุณแทน ตอนนี้ที่ทำงานกลายเป็นสมรภูมิเย็น งานเคสคุณเละเทะไปหมด', zh: '❌ 危险。她威胁要嫁祸你，让你为她的错误负责。现在你在办公室陷入了冷战。你的办案量受损。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '📝 Anonymous Tip', th: '📝 ส่งเบาะแสลับ', zh: 'D 匿名举报' }, consequence: { en: '✅ Smart. An internal investigation starts without your name attached. She is removed quietly. You kept your job and your soul.', th: '✅ ฉลาด! การสอบสวนภายในเริ่มขึ้นโดยไม่มีชื่อคุณเกี่ยวข้อง เธอโดนย้ายออกเงียบๆ คุณรักษางานและจิตวิญญาณไว้ได้', zh: '✅以此：聪明。内部调查开始了，没有署你的名字。她被悄悄撤职。你保住了你的工作和灵魂。' }, stats: { competence: 60, ethics: 70, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'sw_047',
        text: {
            en: '🏚️ The Squatters: A family with kids is living in a foreclosed mansion. They have water and power. The bank wants them evicted immediately into the winter cold. Do you cooperate with the eviction?',
            th: '🏚️ ครอบครัวคฤหาสน์ร้าง: ครอบครัวที่มีลูกแอบอยู่ในบ้านที่โดนยึด ธนาคารสั่งขับไล่ทันทีท่ามกลางความหนาวเหน็บ จะยอมร่วมมือขับไล่ไหม?',
            zh: '🏚️ 占屋者：一个带着孩子的家庭住在一座被没收的豪宅里。他们有水有电。银行想在寒冬腊月立即把他们驱逐出去。你配合驱逐吗？'
        },
        options: [
            { id: 'A', text: { en: '👮 Call the Police', th: '👮 แจ้งตำรวจ', zh: 'A 报警' }, consequence: { en: '❌ Legal but Cruel. The family is on the sidewalk. The kids are shivering. You followed the law, but lost your humanity.', th: '❌ ถูกกฎหมายแต่ใจร้าย! ครอบครัวไปนอนริมถนน เด็กนั่งตัวสั่น คุณทำตามกฎแต่เสียความเป็นคน', zh: '❌ 合法但残酷。这家人流落街头。孩子们在发抖。你遵守了法律，但失去了人性。' }, stats: { competence: 40, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '⏳ Delay the Process', th: '⏳ ถ่วงเวลา', zh: 'B 延迟程序' }, consequence: { en: '✅ Compassion. You use paperwork errors to stall the bank for 2 weeks until a shelter bed opens. The family stays warm.', th: '✅ เมตตาธรรม! ใช้ช่องโหว่ทางเอกสารเตะถ่วงธนาคารได้ 2 อาทิตย์จนหาที่พักใหม่ให้ได้ ครอบครัวไม่ต้องทนหนาว', zh: '✅ 同情。你利用文书错误拖延银行两周，直到收容所床位空出。这家人保持温暖。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🏢 Fight the Bank', th: '🏢 งัดกะธนาคาร', zh: 'C 对抗银行' }, consequence: { en: '⚠️ Radical. You call a press conference at the mansion. The bank looks evil and backs off for now, but you are in trouble with your boss.', th: '⚠️ สายโหด! เรียกนักข่าวมาหน้าบ้านเลย ธนาคารยอมถอยเพราะกลัวเสียชื่อ แต่คุณโดนหัวหน้าเรียกไปเฉ่งหนัก', zh: '⚠️ 激进。你在豪宅举行新闻发布会。银行显得邪恶并暂时退缩，但你惹恼了老板。' }, stats: { competence: 40, ethics: 60, leadership: 70, innovation: 60 } },
            { id: 'D', text: { en: '🤷 Advice Only', th: '🤷 ให้แค่คำแนะนำ', zh: 'D 仅建议' }, consequence: { en: '❌ Ineffective. You tell them to find another place. They can\'t. They are evicted by force. You did the bare minimum.', th: '❌ ไร้ผล! บอกให้เขาไปหาที่อื่นเอาเอง สรุปเขาย้ายไม่ได้และโดนกวาดต้อนออกไป คุณทำหน้าที่แค่ตามพิธี', zh: '❌ 无效。你让他们换个地方。他们找不到。他们被强制驱逐。你只做了最低限度的工作。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'sw_048',
        text: {
            en: '🧪 Experimental Mercy: A terminal child\'s parents want to try a dangerous, unapproved drug. Doctors refuse. The parents beg you to support their "Right to Try" in court.',
            th: '🧪 ยาเสี่ยงตาย: พ่อแม่เด็กที่ใกล้เสียชีวิตอยากลองยาที่ยังไม่ผ่านการรับรอง หมอปฏิเสธ พ่อแม่ขอให้คุณช่วยเป็นพยานในศาลเรื่อง "สิทธิ์ในการลองยา"',
            zh: '🧪 实验性的仁慈：一名绝症儿童的父母想尝试一种危险的、未经批准的药物。医生拒绝了。父母恳求你在法庭上支持他们的“尝试权”。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Support the Parents', th: '⚖️ สนับสนุนพ่อแม่', zh: 'A 支持父母' }, consequence: { en: '⚠️ Miracles or Misery. The court allows it. The drug fails and the child dies in pain. You feel responsible for their false hope.', th: '⚠️ ปาฏิหาริย์หรือฝันร้าย! ศาลอนุญาต แต่ยาไม่ได้ผล เด็กจากไปอย่างทรมาน คุณรู้สึกผิดที่ให้ความหวังปลอมๆ', zh: '⚠️ 奇迹或痛苦。法院允许了。药物失败，孩子在痛苦中去世。你感觉要为他们的虚假希望负责。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '🏥 Support the Doctors', th: '🏥 สนับสนุนทีมหมอ', zh: 'B 支持医生' }, consequence: { en: '✅ Ethical Science. The drug is blocked. The child passes peacefully with palliative care. The parents hate the system but the child didn\'t suffer more.', th: '✅ จรรยาบรรณวิทย์! ระงับการใช้ยา เด็กจากไปอย่างสงบด้วยการดูแลประคับประคอง พ่อแม่โกรธระะบบแต่เด็กไม่ต้องทรมานเพิ่ม', zh: '✅ 合乎道德的科学。药物被封锁。孩子在姑息治疗中平静去世。父母恨这个系统，但孩子没有遭受更多的痛苦。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Seek Second Opinion', th: '🤝 หาความเห็นที่สอง', zh: 'C 寻求第二意见' }, consequence: { en: '✅ Professionalism. You find a specialist who suggests a safer clinical trial. The child gets treatment with fewer risks. A win for everyone.', th: '✅ มืออาชีพ! หาผู้เชี่ยวชาญเจอและแนะนำให้เข้าโครงการวิจัยที่ปลอดภัยกว่า เด็กได้รับการรักษาที่เสี่ยงน้อยลง จบสวยทุกฝ่าย', zh: '✅ 专业。你找到了一位建议进行更安全临床试验的专家。孩子得到了风险更小的治疗。这对每个人来说都是胜利。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🏃 Recuse Yourself', th: '🏃 ถอนตัวจากเคส', zh: 'D 回避' }, consequence: { en: '❌ Cowardice. You couldn\'t handle the moral weight. The family feels abandoned in their darkest hour.', th: '❌ ขี้ขลาด! คุณรับแรงกดดันทางศีลธรรมไม่ไหว ครอบครัวรู้สึกเหมือนโดนทิ้งในวันที่แย่ที่สุด', zh: '❌ 懦弱。你承受不了道德压力。这家人在他们最黑暗的时刻感到了被抛弃。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'sw_049',
        text: {
            en: '⚖️ The Survival Crime: A mother is arrested for stealing high-end formula to sell for rent. It\'s her third strike. She faces 10 years. She begs you to lie and say she was coerced.',
            th: '⚖️ อาชญากรรมเพื่อรอด: แม่ขโมยนมผงไปขายจ่ายค่าเช่า ผิดครั้งที่ 3 เสี่ยงติดคุก 10 ปี เธอขอให้คุณโกหกรายงานว่าเธอโดนบังคับมา จะช่วยไหม?',
            zh: '⚖️ 生存犯罪：一位母亲因偷窃高端配方奶粉出售以支付房租而被捕。这是她第三次犯罪。她面临 10 年监禁。她恳求你撒谎，说她是受人胁迫的。'
        },
        options: [
            { id: 'A', text: { en: '🤥 Lie for Her', th: '🤥 โกหกช่วยเธอ', zh: 'A 为她撒谎' }, consequence: { en: '❌ Career Ending. You are caught. She goes to jail anyway, and you are barred from social work forever. Integrity failure.', th: '❌ จบอาชีพ! คุณโดนจับได้ เธอติดคุกอยู่ดีและคุณโดนแบนจากอาชีพนักสังคมสงเคราะห์ตลอดไป ล้มเหลวทางจริยธรรมยับเยิน', zh: '❌ 职业生涯结束。你被抓住了。无论如何她都要进监狱，而你被永远禁止从事社会工作。正直失败。' }, stats: { competence: 20, ethics: 0, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '📝 Tell the Truth', th: '📝 พูดความจริง', zh: 'B 说实话' }, consequence: { en: '✅ Ethical Duty. You report the facts. She is sentenced. Her kids go into foster care. You feel terrible but the law is the law.', th: '✅ หน้าที่มาเหนือสิ่งอื่นใด! รายงานตามจริง เธอโดนตัดสินจำคุก ลูกๆ เข้าสถานรับเลี้ยง คุณรู้สึกแย่แต่กฎก็คือกฎ', zh: '✅ 道德义务。你报告了事实。她被判刑了。她的孩子去了寄养家庭。你感到很难过，但法律就是法律。' }, stats: { competence: 50, ethics: 70, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '⚖️ Advocate for Leniency', th: '⚖️ ร้องขอความเมตตา', zh: 'C 争取宽大处理' }, consequence: { en: '✅ Strategic Win. You tell the truth but write a powerful letter about system failure. The judge gives her a suspended sentence and mandatory job training.', th: '✅ นักกลยุทธ์! พูดความจริงแต่เขียนบรรยายความล้มเหลวของระบบจนกินใจ ศาลรอลงอาญาและสั่งให้เธอเข้าฝึกงานแทน', zh: '✅ 战略性的胜利。你说实话，但写了一封关于系统性失败的强有力的信。法官判处她缓刑，并要求她接受强制性的职业培训。' }, stats: { competence: 60, ethics: 60, leadership: 70, innovation: 50 } },
            { id: 'D', text: { en: '🤷 No Action', th: '🤷 ไม่ทำอะไรเลย', zh: 'D 不采取行动' }, consequence: { en: '❌ Neglect. You provide the standard report without context. The maximum sentence is given. You are a robot in the machine.', th: '❌ ละเลย! ส่งรายงานตามแบบฟอร์มโดยไม่อธิบายอะไรเพิ่ม เธอโดนโทษสูงสุด คุณคือหุ่นยนต์ในระบบที่เย็นชา', zh: '❌ 忽视。你提供了没有背景的标准报告。被判处最高刑罚。你是机器里的机器人。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'sw_050',
        text: {
            en: '🌟 The Legacy Path: You are offered a high-level government role to change policy nationwide. But it means leaving your 25 families behind in a broken system tonight. What is your choice?',
            th: '🌟 เส้นทางสู่ตำนาน: ได้ตำแหน่งใหญ่ในรัฐบาลเพื่อเปลี่ยนนโยบายระดับชาติ แต่ต้องทิ้ง 25 ครอบครัวที่ดูแลอยู่ไปทันที จะเลือกอะไร?',
            zh: '🌟 遗产之路：你获得了一个政府高级职位，可以改变全国的政策。但这意味着今晚就要把你照顾的 25 个家庭留在一个破碎的系统中。你的选择是什么？'
        },
        options: [
            { id: 'A', text: { en: '🏢 Take the Promotion', th: '🏢 รับตำแหน่งใหม่', zh: 'A 接受升职' }, consequence: { en: '✅ Macro Impact. You pass "The Children First Act." It helps millions, but your 25 families feel abandoned and struggle.', th: '✅ ผลกระทบระดับมหภาค! คุณผลักดัน "พ.ร.บ. เด็กมาก่อน" ช่วยคนได้เป็นล้าน แต่ 25 ครอบครัวเดิมของคุณต้องลำบากและรู้สึกโดนทิ้ง', zh: '✅ 宏观影响。你通过了“儿童优先法案”。它帮助了数百万人，但你照顾的 25 个家庭感到被抛弃并陷入挣扎。' }, stats: { competence: 60, ethics: 30, leadership: 80, innovation: 60 } },
            { id: 'B', text: { en: '❤️ Stay with Families', th: '❤️ อยู่กับครอบครัวเดิม', zh: 'B 与家庭在一起' }, consequence: { en: '✅ Heart Center. You save your families. You become a local legend. But the broken national system continues to hurt others.', th: '✅ เจ้าพ่อหัวใจทองคำ! คุณช่วยครอบครัวเดิมได้สำเร็จ กลายเป็นตำนานท้องถิ่น แต่ระบบที่พังพยาบาลระดับชาติก็ยังทำร้ายคนอื่นต่อไป', zh: '✅ 核心。你拯救了你的家庭。你成了当地的传奇。但破碎的国家体系继续伤害着其他人。' }, stats: { competence: 40, ethics: 80, leadership: 50, innovation: 10 } },
            { id: 'C', text: { en: '🌉 Transition Phase', th: '🌉 ช่วงเปลี่ยนผ่าน', zh: 'C 过渡阶段' }, consequence: { en: '✅ Balance. You negotiate a 3-month overlap to train your replacement personally. You achieve both impact and integrity.', th: '✅ ลงตัวสุดๆ! ต่อรองขอควบตำแหน่ง 3 เดือนเพื่อเทรนคนใหม่มาแทนด้วยตัวเอง คุณได้ทั้งตำแหน่งและไม่ทิ้งคนข้างหลัง', zh: '✅ 平衡。你协商了 3 个月的重叠期，亲自培训你的接班人。你既实现了影响力，又保持了正直。' }, stats: { competence: 70, ethics: 70, leadership: 70, innovation: 50 } },
            { id: 'D', text: { en: '🏃 Quit Everything', th: '🏃 ลาออกหมดเลย', zh: 'D 辞职' }, consequence: { en: '💀 Collapse. The pressure was too much. You burn out and leave social work forever. A huge loss to the profession.', th: '💀 พังทลาย! ความกดดันมันหนักเกินไป คุณหมดไฟและเลิกเป็นนักสังคมสงเคราะห์ถาวร การสูญเสียครั้งใหญ่ของวงการ', zh: '💀 崩溃。压力太大了。你精疲力竭，永远离开了社会工作。这是该行业的巨大损失。' }, stats: { competence: 0, ethics: 0, leadership: 0, innovation: 0 } }
        ]
    }
];
