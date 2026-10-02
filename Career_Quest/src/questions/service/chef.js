
export const chefQuestions = [

    // SECTION 1: THE LINE COOK GRIND & BASICS (Questions 1-10)

    {
        id: 'chef_001',
        text: {
            en: '🔪 The Rush Hour Crisis: It\'s Friday night, 8 PM. The kitchen is slammed. You are on the sauté station. Suddenly, your burner malfunctions and flames flare up, singing your eyebrows. Orders are piling up. The Head Chef is screaming for the risottos. What do you do?',
            th: '🔪 วิกฤตชั่วโมงเร่งด่วน: คืนวันศุกร์ 2 ทุ่ม ครัวกำลังยุ่งสุดๆ คุณอยู่ที่สถานี Sauté จู่ๆ หัวเตาแก๊สก็รวนและไฟลุกพรึ่บจนคิ้วไหม้ ออเดอร์กองพะเนิน หัวหน้าเชฟกำลังตะโกนเรียกหาริซอตโต้ คุณจะทำอย่างไร?',
            zh: '🔪 高峰期危机：周五晚上8点。厨房忙得不可开交。你在负责煎炒台。突然，炉灶故障，火焰窜起，烧焦了你的眉毛。订单堆积如山。主厨正在大喊要烩饭。你会怎么做？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Keep Cooking: "Ignore the burns. Move pans to the back burners. Push through the pain. The service must go on."',
                    th: '🔥 ทำต่อไป: "ไม่สนแผลไฟลวก ย้ายกระทะไปหัวเตาด้านหลัง กัดฟันทนเจ็บ บริการต้องดำเนินต่อไป"',
                    zh: '🔥 继续烹饪："无视烧伤。把锅移到后面的炉灶。忍痛坚持。服务必须继续。"'
                },
                consequence: {
                    en: '✅ Warrior Spirit. You finish the service perfectly despite the injury. The Head Chef nods at you with respect. "You\'re a machine," he says. You earn street cred, but your hands are blistered. Stamina +10.',
                    th: '✅ จิตวิญญาณนักรบ คุณจบงานได้สมบูรณ์แบบแม้จะบาดเจ็บ หัวหน้าเชฟพยักหน้าให้ด้วยความเคารพ "นายนี่มันเครื่องจักรชัดๆ" เขาชม คุณได้รับการยอมรับ แต่เมือพุพอง ความอึด +10',
                    zh: '✅ 战士精神。尽管受了伤，你还是完美地完成了服务。主厨带着敬意向你点头。"你是个机器，"他说。你赢得了声望，但双手起了水泡。耐力+10。'
                },
                stats: { competence: 20, ethics: 10, leadership: 0, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Stop & Fix: "Chef! My station is compromised. I need 2 minutes to switch to the backup station or we risk a fire."',
                    th: '🛑 หยุดแล้วซ่อม: "เชฟ! สถานีผมมีปัญหา ผมขอเวลา 2 นาทีเพื่อย้ายไปสถานีสำรอง ไม่งั้นไฟไหม้แน่"',
                    zh: '🛑 停止并修复："主厨！我的工位出问题了。我需要2分钟切换到备用工位，否则有火灾风险。"'
                },
                consequence: {
                    en: '🛡️ Safety First. The Chef screams "HURRY UP!" but appreciates that you didn\'t burn the restaurant down. Service is delayed by 5 minutes, customers complain, but the food quality remains high.',
                    th: '🛡️ ปลอดภัยไว้ก่อน เชฟตะโกน "เร็วเข้า!" แต่ก็ขอบคุณที่คุณไม่ทำร้านไฟไหม้ อาหารช้าไป 5 นาที ลูกค้าบ่นหน่อย แต่อาหารยังดีเหมือนเดิม',
                    zh: '🛡️ 安全第一。主厨大喊"快点！"但很感激你没把餐厅烧了。服务延迟了5分钟，客户抱怨，但食物质量保持高水准。'
                },
                stats: { competence: 10, ethics: 30, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Call for Help: "Sous Chef! I\'m down! Need hands on sauté! Distribute my tickets to Grill and Garde Manger!"',
                    th: '🤝 ขอความช่วยเหลือ: "ซูเชฟ! ผมไม่ไหวแล้ว! มาช่วย Sauté หน่อย! กระจายออเดอร์ผมไปที่เตาย่างและครัวเย็นที!"',
                    zh: '🤝 呼救："副厨！我不行了！煎炒台需要人手！把我的单子分给烧烤台和冷菜间！"'
                },
                consequence: {
                    en: '⚖️ Team Scramble. The team steps up, but they are annoyed they have to cover your mess. You survive the night, but you look weak. The Sous Chef marks you as "unreliable under pressure."',
                    th: '⚖️ ทีมวุ่นวาย ทีมเข้ามาช่วยแต่ก็หงุดหงิดที่ต้องมารับภาระแทนคุณ คุณรอดคืนนี้ไปได้แต่ดูอ่อนแอ ซูเชฟมองว่าคุณ "พึ่งพาไม่ได้ในยามกดดัน"',
                    zh: '⚖️ 团队忙乱。团队挺身而出，但他们很恼火必须收拾你的烂摊子。你熬过了这一晚，但看起来很软弱。副厨将你标记为"抗压能力差"。'
                },
                stats: { competence: -10, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🏃 Walk Out: "Not worth minimum wage. Throw the apron on the floor. Walk out the back door."',
                    th: '🏃 เดินออก: "ไม่คุ้มค่าแรงขั้นต่ำ โยนผ้ากันเปื้อลงพื้น เดินออกประตูหลังไปเลย"',
                    zh: '🏃 离开："不值得这点最低工资。把围裙扔在地上。从后门走人。"'
                },
                consequence: {
                    en: '💀 Career Suicide. You are blacklisted in the city. Word travels fast. You end up flipping burgers at a fast-food chain. Game Over.',
                    th: '💀 ฆ่าตัวตายทางอาชีพ คุณโดนแบล็กลิสต์ในเมืองนี้ ข่าวลือไปไวมาก คุณต้องไปจบที่ร้านเบอร์เกอร์ฟาสต์ฟู้ด เกมโอเวอร์',
                    zh: '💀 职业自杀。你在这座城市被列入黑名单。消息传得很快。你最终在快餐连锁店煎汉堡。游戏结束。'
                },
                stats: { competence: -50, ethics: -50, leadership: -50, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_002',
        text: {
            en: '🥩 The Steak Mistake: A VIP customer orders a Wagyu Ribeye ($150) "Well Done." Your culinary soul dies a little. You know cooking it that much ruins the meat.',
            th: '🥩 ความผิดพลาดเรื่องสเต็ก: ลูกค้า VIP สั่งวากิวริบอาย ($150) แบบ "Well Done (สุกมาก)" จิตวิญญาณคนทำอาหารของคุณสลาย คุณรู้ว่าย่างสุกขนาดนั้นมันทำลายเนื้อดีๆ หมด',
            zh: '🥩 牛排错误：一位VIP客户点了一份和牛肋眼（150美元），要求"全熟"。你的烹饪灵魂死了一点点。你知道煮那么久会毁了这块肉。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '😤 Refuse: "No. I will not desecrate this cow. Tell the waiter to suggest the chicken if they want dry meat."',
                    th: '😤 ปฏิเสธ: "ไม่ ผมจะไม่ลบหลู่เจ้าวัวตัวนี้ บอกเด็กเสิร์ฟไปแนะนำไก่เถอะถ้าอยากกินเนื้อแห้งๆ"',
                    zh: '😤 拒绝："不。我不会亵渎这头牛。告诉服务员，如果他们想要干肉，就建议吃鸡肉。"'
                },
                consequence: {
                    en: '⚠️ The Ego Trap. The customer is insulted and leaves. The owner comes back and screams at you for losing a $500 table. "You cook what they pay for!" But food critics praise your integrity.',
                    th: '⚠️ กับดักอีโก้ ลูกค้ารู้สึกโดนดูถูกและเดินออกไป เจ้าของร้านมาด่าคุณเปิงที่ทำเสียโต๊ะยอด $500 "เขาจ่ายเงินมานายก็ต้องทำ!" แต่นักวิจารณ์ชมจุดยืนของคุณ',
                    zh: '⚠️ 自我陷阱。客户受到侮辱离开了。老板回来因为你弄丢了一桌500美元的生意而对你咆哮。"他们付钱买什么你就做什么！"但美食评论家赞扬你的正直。'
                },
                stats: { competence: 20, ethics: -20, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '✅ Cook it Well Done: "Customer is King. Butterfly it so it cooks faster, press it hard on the grill. Give them exactly what they asked for."',
                    th: '✅ ย่างให้เกรียม: "ลูกค้าคือพระเจ้า แล่แบะออกจะได้สุกไว กดกับเตาแรงๆ จัดให้ตามที่เขาขอเป๊ะๆ"',
                    zh: '✅ 煮全熟："顾客就是上帝。把它切开以便煮得更快，在烤架上用力压。给他们这正是他们想要的。"'
                },
                consequence: {
                    en: '🤡 The Sellout. The customer LOVES it. "Best steak I ever had," they say. They tip $100. Inside, you feel empty. You prioritized profit over art.',
                    th: '🤡 การขายวิญญาณ ลูกค้า *ชอบมาก* "สเต็กอร่อยสุดที่เคยกิน" เขาให้ทิป $100 ข้างในใจคุณว่างเปล่า คุณเลือกกำไรมากกว่าศิลปะ',
                    zh: '🤡 出卖。客户**非常喜欢**。"我吃过最好的牛排，"他们说。他们给了100美元小费。内心深处，你感到空虚。你把利润置于艺术之上。'
                },
                stats: { competence: 10, ethics: 10, leadership: -10, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🎨 The Compromise: "Cook it Medium-Well but rest it perfectly so it\'s still juicy. Slice it thin. Make them think it\'s Well Done but actually edible."',
                    th: '🎨 ประนีประนอม: "ย่างแบบ Medium-Well แต่พักเนื้อให้เป๊ะจะได้ยังชุ่มฉ่ำ หั่นบางๆ ให้เขาคิดว่ามันสุกมากแต่จริงๆ คือยังกินได้อร่อย"',
                    zh: '🎨 折衷方案："煮至七分熟，但完美静置使其仍然多汁。切薄片。让他们以为是全熟但实际上可食用。"'
                },
                consequence: {
                    en: '✨ Masterful Technique. The customer enjoys it and doesn\'t notice the pink hue because of the lighting. You saved the meat and the sale. Smart chef.',
                    th: '✨ เทคนิคขั้นเทพ ลูกค้าชอบและไม่ทันสังเกตสีชมพูเพราะไฟในร้าน คุณรักษาทั้งเนื้อและยอดขาย เชฟฉลาด',
                    zh: '✨ 精湛技艺。客户很享受，因为灯光原因没注意到粉色色调。你保住了肉和生意。聪明的厨师。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🗑️ Swap the Meat: "Use the cheaper Choice Ribeye instead of Wagyu. They won\'t know the difference if it\'s burnt to a crisp. Save the food cost."',
                    th: '🗑️ สับเปลี่ยนเนื้อ: "ใช้เนื้อเกรดรองแทนวากิวเถอะ ย่างจนเกรียมขนาดนั้นเขาแยกไม่ออกหรอก ประหยัดต้นทุนด้วย"',
                    zh: '🗑️ 调换肉："用更便宜的精选肋眼代替和牛。如果是烤焦的，他们分不出区别。节省食材成本。"'
                },
                consequence: {
                    en: '💀 Fraud Alert. The customer doesn\'t notice, but your Sous Chef sees you do it. "If you cheat on this, what else do you cheat on?" Trust lost.',
                    th: '💀 แจ้งเตือนการโกง ลูกค้าไม่รู้ แต่ซูเชฟเห็นคุณทำ "ถ้านายโกงเรื่องนี้ เรื่องอื่นนายก็โกงได้ใช่ไหม?" หมดความเชื่อใจ',
                    zh: '💀 欺诈警报。客户没注意到，但你的副厨看到你这么做了。"如果你在这上面作弊，你在其他什么地方也会作弊？"信任丧失。'
                },
                stats: { competence: 10, ethics: -50, leadership: -20, innovation: 10 }
            }
        ]
    },

    {
        id: 'chef_003',
        text: {
            en: '🥗 The Allergen Scare: A ticket comes in with "SEVERE NUT ALLERGY." You are running the garnish station. You just realized you used the same spoon for the pesto (pine nuts) and the dressing. The salad is already on the pass, about to go out.',
            th: '🥗 ความตื่นตระหนกเรื่องภูมิแพ้: ออเดอร์เข้ามาพร้อมระบุ "แพ้ถั่วรุนแรง" คุณคุมสถานีตกแต่งจาน เพิ่งนึกได้ว่าเผลอใช้ช้อนคันเดียวกันตักเพสโต้ (มีถั่วสน) และน้ำสลัด สลัดวางอยู่บน Pass แล้ว กำลังจะถูกยกออกไป',
            zh: '🥗 过敏原恐慌：一张单子进来了，写着"严重坚果过敏"。你在负责装饰台。你刚意识到你用同一把勺子舀了香蒜酱（松子）和调味汁。沙拉已经在传菜台上，马上要出去了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 SCREAM STOP: "DO NOT TAKE THAT TABLE 4! RE-FIRE! CONTAMINATION!" Throw the plate in the trash immediately.',
                    th: '🛑 ตะโกนหยุด: "อย่าเอาโต๊ะ 4 ไป! ทำใหม่! ปนเปื้อน!" โยนจานลงถังขยะทันที',
                    zh: '🛑 尖叫停止："别拿那盘给4号桌！重做！污染！"立即把盘子扔进垃圾桶。'
                },
                consequence: {
                    en: '✅ Life Saver. You saved a life. The Chef looks annoyed at the waste but says "Good catch." Better a wasted salad than an ambulance. Safety Protocol +100.',
                    th: '✅ ผู้ช่วยชีวิต คุณช่วยชีวิตคนไว้ เชฟดูหงุดหงิดที่ของเสียแต่บอก "ตาดีนี่" เสียสลัดหนึ่งจานดีกว่าเรียกรถพยาบาล กฎความปลอดภัย +100',
                    zh: '✅ 救星。你救了一条命。主厨对浪费感到恼火，但说"抓得好"。浪费一份沙拉总比叫救护车好。安全协议+100。'
                },
                stats: { competence: 30, ethics: 80, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Wipe it Off: "Just wipe the rim of the plate. It was barely a drop. Pine nuts aren\'t peanuts, maybe they won\'t react? Send it."',
                    th: '🤫 เช็ดออก: "แค่เช็ดขอบจานก็พอ หยดเดียวนิดเดียวเอง ถั่วสนไม่ใช่ถั่วลิสง เขาคงไม่แพ้หรอกมั้ง? ส่งไปเถอะ"',
                    zh: '🤫 擦掉："只要擦擦盘子边缘。几乎没有一滴。松子不是花生，也许他们不会有反应？送出去。"'
                },
                consequence: {
                    en: '🚑 Anaphylactic Shock! The customer goes into shock in the dining room. Ambulance arrives. Epipens deployed. The restaurant is sued and closed for investigation. You are fired and charged with negligence.',
                    th: '🚑 อาการแพ้รุนแรง! ลูกค้าช็อกกลางห้องอาหาร รถพยาบาลมารับ ต้องฉีดยาฉุกเฉิน ร้านถูกฟ้องและปิดสอบสวน คุณถูกไล่ออกและโดนข้อหาประมาทเลินเล่อ',
                    zh: '🚑 过敏性休克！客户在餐厅休克。救护车赶到。使用了肾上腺素笔。餐厅被起诉并关闭调查。你被解雇并被控疏忽罪。'
                },
                stats: { competence: -100, ethics: -100, leadership: -100, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '👃 The Sniff Test: "Taste the dressing. Doesn\'t taste like nuts. It\'s probably fine. I don\'t want to get yelled at for slowing down service."',
                    th: '👃 ดมพิสูจน์: "ชิมน้ำสลัดดู ไม่เห็นมีรสถั่ว น่าจะโอเค ไม่อยากโดนด่าว่าทำช้า"',
                    zh: '👃 嗅觉测试："尝尝调味汁。没有坚果味。可能没事。我不想因为拖慢服务而被骂。"'
                },
                consequence: {
                    en: '🎲 Russian Roulette. Nothing happens this time... luck was on your side. But you have developed a dangerous habit. Next time you might kill someone. -10 Karma.',
                    th: '🎲 รัสเชียนรูเล็ตต์ ครั้งนี้ไม่เป็นไร... โชคยังเข้าข้าง แต่คุณสร้างนิสัยอันตรายซะแล้ว ครั้งหน้าคุณอาจฆ่าคนได้ บาปกรรม -10',
                    zh: '🎲 俄罗斯轮盘赌。这次什么也没发生……运气在你这边。但你养成了一个危险的习惯。下次你可能会杀人。-10业力。'
                },
                stats: { competence: -20, ethics: -40, leadership: -10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 Re-plate Carefully: "Quickly serve onto a new plate. Don\'t tell anyone. Just switch the physical ceramic. The food itself wasn\'t touched by the spoon, only the rim."',
                    th: '🔄 เปลี่ยนจานระวังๆ: "รีบตักใส่จานใหม่ อย่าบอกใคร เปลี่ยนแค่ตัวจานเซรามิก อาหารไม่ได้โดนช้อน โดนแค่ขอบจาน"',
                    zh: '🔄 小心换盘："快速盛到新盘子上。别告诉任何人。只是换掉陶瓷盘。食物本身没被勺子碰到，只有边缘。"'
                },
                consequence: {
                    en: '⚠️ Risky Business. Cross-contamination is microscopic. The customer gets a mild itchy throat and complains. You narrowly avoided disaster, but your logic is flawed.',
                    th: '⚠️ ธุรกิจเสี่ยง การปนเปื้อนมันอยู่ในระดับจุลภาค ลูกค้าคันคอนิดหน่อยและบ่น คุณรอดจากหายนะมาได้หวุดหวิด แต่ตรรกะคุณวิบัติแล้ว',
                    zh: '⚠️ 冒险生意。交叉污染是微观的。客户喉咙轻微发痒并抱怨。你勉强避免了灾难，但你的逻辑有缺陷。'
                },
                stats: { competence: 0, ethics: -20, leadership: 0, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_004',
        text: {
            en: '🥬 The Inventory Shift: The Head Chef quit this morning. The owner points at you. "You\'re Sous Chef now. Order the produce for the weekend." You have never ordered before. You have $2,000 budget for a busy weekend.',
            th: '🥬 กะคลังสินค้า: หัวหน้าเชฟลาออกเมื่อเช้า เจ้าของร้านชี้มาที่คุณ "นายเป็นซูเชฟแล้ว สั่งผักสำหรับสุดสัปดาห์ซะ" คุณไม่เคยสั่งของมาก่อน มีงบ $2,000 สำหรับสุดสัปดาห์ที่ลูกค้าเยอะ',
            zh: '🥬 库存轮班：主厨今天早上辞职了。老板指着你。"你现在是副厨。订购周末的农产品。"你以前从未订购过。你有一个繁忙周末的2000美元预算。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📉 Play Safe: "Order less than we think we need. Better to 86 (sell out) items than have rot. We can run specials on what we have left."',
                    th: '📉 เพลย์เซฟ: "สั่งน้อยกว่าที่คิดว่าต้องใช้ไว้ก่อน ขายหมดดีกว่าของเน่าคาตู้ เราค่อยจัดเมนูพิเศษจากของที้เหลือเอา"',
                    zh: '📉以此为安："订购比我们认为需要的少。卖光总比腐烂好。我们可以用剩下的东西做特价菜。"'
                },
                consequence: {
                    en: '✅ Smart Management. You run out of Salad on Sunday night, but food waste is 0%. The owner is impressed by your cost control. "Profit margin looks good," he says. Competence +30.',
                    th: '✅ การจัดการที่ชาญฉลาด สลัดหมดตอนคืนวันอาทิตย์ แต่ของเสียเป็น 0% เจ้าของประทับใจการคุมต้นทุนของคุณ "กำไรดูดีนะ" เขาชม ความสามารถ +30',
                    zh: '✅ 精明管理。周日晚上沙拉卖光了，但食物浪费为0%。老板对你的成本控制印象深刻。"利润率看起来不错，"他说。运营能力+30。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '📈 Over-Order: "I don\'t want to run out! Order double everything. $3,000 worth (go over budget). If we sell out, we lose money!"',
                    th: '📈 สั่งเผื่อเยอะ: "ไม่อยากให้ของขาด! สั่งเบิ้ลไปเลย ยอด $3,000 (เกินงบ) ถ้าของหมดเราเสียโอกาสขายนะ!"',
                    zh: '📈 过度订购："我不想卖光！每样东西订双倍。价值3000美元（超出预算）。如果我们卖光了，我们就赔钱了！"'
                },
                consequence: {
                    en: '💸 Wasteful! Monday morning, half the spinach is slime. You have to throw away $800 worth of food. The owner deducts it from your tips. "Rookie mistake," he scoffs.',
                    th: '💸 สิ้นเปลือง! เช้าวันจันทร์ ผักโขมเน่าไปครึ่งถัง ต้องทิ้งของมูลค่า $800 เจ้าของหักเงินจากทิปคุณ "พลาดแบบมือใหม่" เขาเยาะเย้ย',
                    zh: '💸 浪费！周一早上，一半的菠菜成了烂泥。你不得不扔掉价值800美元的食物。老板从你的小费中扣除。"新手错误，"他嘲笑说。'
                },
                stats: { competence: -20, ethics: 0, leadership: -10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Ask the Supplier: "Call the veggie guy, Marco. \'Hey Marco, look at our sales last week. What do you think I need? Guide me.\'"',
                    th: '🤝 ถามซัพพลายเออร์: "โทรหาคนส่งผัก มาร์โก \'เฮ้มาร์โก ดูยอดอาทิตย์ก่อนให้หน่อย คิดว่าผมต้องใช้อะไรบ้าง? แนะนำที\'"',
                    zh: '🤝 询问供应商："给蔬菜商Marco打电话。\'嘿Marco，看看我们将周的销售额。你觉得我需要什么？指导我。\'"'
                },
                consequence: {
                    en: '🤝 Relationship Win. Marco appreciates the trust. He sends the perfect amount AND throws in some free heirloom tomatoes. You learn that networking is as important as cooking.',
                    th: '🤝 ชัยชนะแห่งความสัมพันธ์ มาร์โกซึ้งใจที่คุณเชื่อใจ จัดของมาให้พอดีเป๊ะ แถมมะเขือเทศพันธุ์ดีมาให้ฟรีด้วย คุณเรียนรู้ว่าคอนเนกชันสำคัญพอๆ กับการทำอาหาร',
                    zh: '🤝 关系共赢。Marco感谢你的信任。他送来了完美的数量**并且**额外赠送了一些免费的传家宝番茄。你了解到建立人脉和烹饪一样重要。'
                },
                stats: { competence: 40, ethics: 20, leadership: 40, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔬 Spreadsheet Nerd: "Spend 4 hours analyzing last year\'s sales data for this exact weekend. Build a predictive model. Order based on math, not feelings."',
                    th: '🔬 เนิร์ดตาราง: "ใช้เวลา 4 ชั่วโมงวิเคราะห์ยอดขายปีที่แล้วของอาทิตย์นี้เป๊ะๆ สร้างโมเดลคาดการณ์ สั่งตามคณิตศาสตร์ ไม่ใช่ความรู้สึก"',
                    zh: '🔬 表格书呆子："花4小时分析去年同一个周末的销售数据。建立预测模型。基于数学订购，而不是感觉。"'
                },
                consequence: {
                    en: '⭐ Executive Potential. Your order is precise to the carrot. You slept 4 hours less, but you proved you understand the BUSINESS of food. The owner starts grooming you for management.',
                    th: '⭐ ศักยภาพผู้บริหาร คุณสั่งของได้แม่นยำระดับนับหัวแครอท คุณได้นอนน้อยลง 4 ชม. แต่พิสูจน์แล้วว่าคุณเข้าใจ "ธุรกิจ" อาหาร เจ้าของเริ่มเล็งดันคุณขึ้นบริหาร',
                    zh: '⭐ 高管潜力。你的订单精确到每一根胡萝卜。你少睡了4小时，但你证明了你懂食物**生意**。老板开始培养你进入管理层。'
                },
                stats: { competence: 60, ethics: 10, leadership: 30, innovation: 40 }
            }
        ]
    },

    {
        id: 'chef_005',
        text: {
            en: '🐟 The Special: You find incredible Monkfish at the market that is cheap because it\'s ugly. You want to run a special. The owner hates fish and says "Nobody will eat that monster." You have creative control, technically.',
            th: '🐟 เมนูพิเศษ: คุณเจอปลามันค์ฟิชที่ยอดเยี่ยมในตลาด ราคาถูกเพราะหน้าตามันน่าเกลียด คุณอยากทำเมนูพิเศษ เจ้าของร้านเกลียดปลาและบอก "ไม่มีใครกินเจ้าสัตว์ประหลาดนั่นหรอก" แต่ในทางเทคนิค คุณมีสิทธิ์ตัดสินใจเรื่องเมนู',
            zh: '🐟 特价菜：你在市场上发现了极好的安康鱼，因为丑所以便宜。你想做个特价菜。老板讨厌鱼，说"没人会吃那个怪物。"从技术上讲，你有创意控制权。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎨 Rebrand It: "Don\'t call it Monkfish. Call it \'Poor Man\'s Lobster\' or \'Lotte\'. Poach it in butter. Make it fancy. Sell the flavor, hide the face."',
                    th: '🎨 รีแบรนด์: "อย่าเรียกว่ามันค์ฟิช เรียกว่า \'ล็อบสเตอร์คนจน\' หรือ \'Lotte\' ลวกในเนยทำให้ดูแพง ขายรสชาติ ซ่อนหน้าตา"',
                    zh: '🎨 重塑品牌："别叫它安康鱼。叫它\'穷人的龙虾\'或\'Lotte\'。用黄油煮。做得高档点。卖的是味道，藏起它的脸。"'
                },
                consequence: {
                    en: '⭐ Sold Out! Customers are intrigued. It tastes like heaven. You bought it for $5/lb and sold it for $35/plate. Massive profit. The owner shuts up and eats it. Innovation +50.',
                    th: '⭐ ขายเกลี้ยง! ลูกค้าสนใจมาก รสชาติเหมือนสวรรค์ ซื้อมาปอนด์ละ $5 ขายจานละ $35 กำไรมหาศาล เจ้าของร้านหุบปากแล้วยอมกิน นวัตกรรม +50',
                    zh: '⭐ 售罄！客户很好奇。味道像天堂。你以5美元/磅买入，以35美元/盘卖出。巨额利润。老板闭嘴并吃了它。创新+50。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '😤 Fight the Owner: "Trust me! I\'m the Chef! Put it on the menu as \'Monkfish Visualized\'. Show the head at the table. Educate them!"',
                    th: '😤 ทะเลาะกับเจ้าของ: "เชื่อผมสิ! ผมเป็นเชฟ! ใส่เมนูว่า \'Monkfish Visualized\' โชว์หัวปลาที่โต๊ะเลย ให้ความรู้ลูกค้า!"',
                    zh: '😤 对抗老板："相信我！我是厨师！把它列入菜单，叫\'可视化安康鱼\'。在桌上展示鱼头。教育他们！"'
                },
                consequence: {
                    en: '💀 Too Scary. Customers are horrified by the fish head. Kids cry. Nobody orders it. You eat monkfish stew for staff meal all week. Sometimes art is too bold.',
                    th: '💀 น่ากลัวไป ลูกค้าสยองกับหัวปลา เด็กๆ ร้องไห้ ไม่มีใครสั่ง คุณต้องกินสตูว์มันค์ฟิชเป็นข้าวพนักงานทั้งอาทิตย์ บางทีศิลปะก็ล้ำเกินไป',
                    zh: '💀 太吓人了。客户被鱼头吓坏了。孩子哭了。没人点。你整周员工餐都吃安康鱼炖菜。有时艺术太大胆了。'
                },
                stats: { competence: 10, ethics: 10, leadership: -20, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🍗 Pivot to Chicken: "Fine, you\'re the boss. I\'ll do a Chicken Parmesan special. Boring, safe, profitable."',
                    th: '🍗 เปลี่ยนเป็นไก่: "ก็ได้ คุณเป็นเจ้านาย ผมจะทำพาร์เมซานไก่เป็นเมนูพิเศษ น่าเบื่อ ปลอดภัย กำไรชัวร์"',
                    zh: '🍗 转向鸡肉："好吧，你是老板。我会做帕尔马干酪鸡肉特价菜。无聊，安全，赚钱。"'
                },
                consequence: {
                    en: '💤 Soul Death. It sells okay, but you feel like a vending machine. Your passion for cooking dims slightly. Safe money, zero joy.',
                    th: '💤 จิตวิญญาณตายด้าน ขายได้เรื่อยๆ แต่คุณรู้สึกเหมือนตู้หยอดเหรียญ ไฟในการทำอาหารมอดลงนิดหน่อย เงินชัวร์ แต่ไร้ความสุข',
                    zh: '💤 灵魂死亡。卖得还可以，但你觉得像台自动售货机。你的烹饪热情稍微暗淡了。安全的钱，零乐趣。'
                },
                stats: { competence: 10, ethics: 0, leadership: -10, innovation: -30 }
            },
            {
                id: 'D',
                text: {
                    en: '🍴 Staff Challenge: "Make a sample. Blindfold the owner. Make HIM taste it. If he likes it, we run it."',
                    th: '🍴 ท้าทายพนักงาน: "ทำจานตัวอย่าง ปิดตาเจ้าของ บังคับให้ *เขา* ชิม ถ้าเขาชอบ เราขาย"',
                    zh: '🍴 员工挑战："做一个样品。蒙住老板的眼睛。让他尝尝。如果他喜欢，我们就上这道菜。"'
                },
                consequence: {
                    en: '✅ Taste Wins. He loves it. "It tastes like lobster!" he exclaims. He agrees to run it but insists on the rebrand name. Diplomacy win.',
                    th: '✅ รสชาติชนะ เขาชอบมาก "รสเหมือนล็อบสเตอร์เลย!" เขาตะโกน ยอมให้ขายแต่ต้องตั้งชื่อใหม่ ชนะด้วยการทูต',
                    zh: '✅ 味道获胜。他喜欢。"味道像龙虾！"他惊呼。他同意上这道菜，但坚持要改名。外交胜利。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 30 }
            }
        ]
    },

    {
        id: 'chef_006',
        text: {
            en: '🕵️ The Reviewer: A server whispers, "Table 7. I think it\'s the critic from The Times. She\'s taking notes and hiding her phone." You are in the weeds (super busy).',
            th: '🕵️ นักวิจารณ์: เด็กเสิร์ฟกระซิบ "โต๊ะ 7 ผมว่าใช่นักวิจารณ์จาก The Times แน่เลย เธอจดโน้ตแล้วซ่อนมือถือด้วย" คุณกำลังยุ่งหัวหมุน (In the weeds)',
            zh: '🕵️ 评论家：服务员低语，"7号桌。我觉得是《泰晤士报》的评论家。她在做笔记并藏起手机。"你正忙得不可开交。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⭐ VIP Treatment: "Stop everything! Focus on Table 7. I will cook every dish for them personally. Make the portions bigger. Send free wine."',
                    th: '⭐ ดูแลระดับ VIP: "หยุดทุกอย่าง! โฟกัสโต๊ะ 7 ผมจะทำทุกจานให้เธอเอง เพิ่มปริมาณ ส่งไวน์ฟรีไป"',
                    zh: '⭐ VIP待遇："停下一切！关注7号桌。我会亲自为他们做每一道菜。份量加大。送免费酒。"'
                },
                consequence: {
                    en: '⚠️ Suspiciously Good. The critic notices the special treatment. The review says, "Food was excellent, but service seemed desperate and fawning." 3 stars instead of 4.',
                    th: '⚠️ ดีจนน่าสงสัย นักวิจารณ์จับได้ว่าโดนโอ๋ รีวิวบอก "อาหารยอดเยี่ยม แต่บริการดูพยายามเกินไปและประจบประแจง" ได้ 3 ดาวแทนที่จะเป็น 4',
                    zh: '⚠️好得可疑。评论家注意到了特殊待遇。评论说，"食物很棒，但服务显得绝望且奉承。"3星而不是4星。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Standard Service: "Treat her like everyone else. If we are good, we are good. Consistency is key. Don\'t screw over the other tables."',
                    th: '⚖️ บริการมาตรฐาน: "ปฏิบัติกับเธอเหมือนคนอื่น ถ้าเราดีจริงก็คือดี ความสม่ำเสมอคือกุญแจสำคัญ อย่าทิ้งโต๊ะอื่น"',
                    zh: '⚖️ 标准服务："像对待其他人一样对待她。如果我们好，我们就是好。一致性是关键。别搞砸其他桌子。"'
                },
                consequence: {
                    en: '✅ Authentic Review. The kitchen crashes a bit on other tables, but her meal arrives at the standard pace. Review: "An honest, chaotic, delicious mess. A hidden gem." Authentic praise.',
                    th: '✅ รีวิวจริงใจ ครัวอาจรวนหน่อยกับโต๊ะอื่น แต่อาหารเธอมาตามมาตรฐาน รีวิว: "ความวุ่นวายที่อร่อยและจริงใจ เพชรในตม" คำชมจากใจจริง',
                    zh: '✅ 真实评论。厨房在其他桌子上有点崩溃，但她的饭菜按标准速度上桌。评论："诚实、混乱、美味的一团糟。隐藏的宝石。"真实的赞扬。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧂 Sabotage? "She gave my mentor a bad review in 2019. Over-salt her soup. Let\'s see her write about that. I don\'t care about stars."',
                    th: '🧂 วางยา? "อีป้านี่เคยด่าอาจารย์ผมตอนปี 2019 ใส่เกลือในซุปเธอเยอะๆ ดูสิจะเขียนยังไง ผมไม่สนดาวหรอก"',
                    zh: '🧂 蓄意破坏？"她在2019年给了我的导师差评。在她的汤里多放盐。让我们看她怎么写。我不在乎星星。"'
                },
                consequence: {
                    en: '💀 Petty Revenge. Review: "Inedible brine served by an arrogant chef." Your reservations drop 50% overnight. The owner considers firing you.',
                    th: '💀 การแก้แค้นแบบเด็กๆ รีวิว: "น้ำเกลือที่กินไม่ได้ เสิร์ฟโดยเชฟจอมหยิ่ง" ยอดจองโต๊ะตก 50% ในข้ามคืน เจ้าของคิดจะไล่คุณออก',
                    zh: '💀 卑鄙的报复。评论："傲慢的厨师端上来的无法食用的盐水。"预订量一夜之间下降50%。老板考虑解雇你。'
                },
                stats: { competence: -20, ethics: -60, leadership: -40, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🎁 The "Off Menu" Gift: "Send out a small, unreleased experimental dish as a \'gift from the kitchen\'. Show her our future direction."',
                    th: '🎁 ของขวัญ "นอกเมนู": "ส่งจานทดลองเล็กๆ ที่ยังไม่ขายไปให้เป็น \'ของขวัญจากครัว\' โชว์ให้เธอเห็นอนาคตของเรา"',
                    zh: '🎁 "隐藏菜单"礼物："送上一道小的、未发布的实验菜作为\'厨房的礼物\'。向她展示我们的未来方向。"'
                },
                consequence: {
                    en: '✨ Critics Darling. She is bored of steak and loves the innovation. The headline focuses on that one dish. "The most exciting bite in the city." You become famous.',
                    th: '✨ ขวัญใจนักวิจารณ์ เธอเบื่อสเต็กแล้วและชอบนวัตกรรม พาดหัวข่าวโฟกัสที่จานนั้น "คำที่ตื่นเต้นที่สุดในเมือง" คุณดังเลย',
                    zh: '✨ 评论家的宠儿。她厌倦了牛排，喜欢这种创新。标题聚焦在那这道菜上。"全城最令人兴奋的一口。"你出名了。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 80 }
            }
        ]
    },

    {
        id: 'chef_007',
        text: {
            en: '🔪 The Dull Knife: Your dishwasher ran your $300 Japanese knife through the industrial dishwashing machine. The edge is ruined. It\'s pitted and dull. This knife was a gift from your grandfather.',
            th: '🔪 มีดทื่อ: พนักงานล้างจานเอามีดญี่ปุ่นราคา $300 ของคุณเข้าเครื่องล้างจานอุตสาหกรรม คมพังยับ บิ่นและทื่อ มีดนี้เป็นของขวัญจากปู่คุณ',
            zh: '🔪 钝刀：你的洗碗工把你300美元的日本刀放进了工业洗碗机。刀刃毁了。坑坑洼洼且钝了。这把刀是你祖父的礼物。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤬 Explode: "SCREAM AT HIM! Throw a plate! Make him cry! He destroyed an heirloom! Banish him from the kitchen!"',
                    th: '🤬 ระเบิดลง: "ตะคอกใส่หน้า! ปาจาน! ทำให้มันร้องไห้! มันทำลายมรดก! ไล่มันออกจากครัว!"',
                    zh: '🤬 爆发："对他尖叫！扔盘子！让他哭！他毁了一件传家宝！把他赶出厨房！"'
                },
                consequence: {
                    en: '💀 Toxic Leader. He quits. The rest of the staff is terrified of you. The vibe in the kitchen dies. You cook in silence, angry and alone. Leadership -50.',
                    th: '💀 ผู้นำเป็นพิษ เขาลาออก พนักงานที่เหลือกลัวคุณหัวหด บรรยากาศในครัวตายสนิท คุณทำอาหารเงียบๆ ด้วยความโกรธและโดดเดี่ยว การนำ -50',
                    zh: '💀 毒性领导。他辞职了。其他员工都很怕你。厨房里的气氛死了。你既生气又孤独地在沉默中烹饪。领导力-50。'
                },
                stats: { competence: 0, ethics: -20, leadership: -50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧘 Teach & Fix: "Take a deep breath. It\'s just metal. Spend 3 hours after work on the whetstones fixing it. Teach the dishwasher WHY we don\'t do that."',
                    th: '🧘 สอนและซ่อม: "สูดหายใจลึกๆ มันก็แค่โลหะ หลังเลิกงานใช้เวลา 3 ชั่วโมงลับหินเพื่อซ่อมมัน สอนเด็กล้างจานว่า *ทำไม* เราถึงห้ามทำแบบนั้น"',
                    zh: '🧘以此与修复："深呼吸。只是金属而已。下班后花3小时用磨刀石修复它。教洗碗工**为什么**我们不那样做。"'
                },
                consequence: {
                    en: '✅ Mentor Move. The knife is shorter but sharper than ever. The dishwasher respects you and becomes your most loyal worker. You proved your character.',
                    th: '✅ วิถีเมนเทอร์ มีดสั้นลงแต่คมกว่าเดิม เด็กล้างจานเคารพคุณและกลายเป็นลูกน้องที่ภักดีที่สุด คุณพิสูจน์เนื้อแท้ของตัวเอง',
                    zh: '✅ 导师之举。刀变短了，但比以往更锋利。洗碗工尊重你，并成为你最忠诚的以此。你证明了你的人格。'
                },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '💰 Deduct Pay: "Make him pay for a new one. Take $50 out of his check every week until it\'s replaced. Accountability."',
                    th: '💰 หักเงิน: "ให้มันจ่ายค่ามีดใหม่ หัก $50 จากเงินเดือนทุกอาทิตย์จนกว่าจะครบ ความรับผิดชอบต้องมี"',
                    zh: '💰 扣工资："让他赔一把新的。每周从他的支票里扣50美元，直到赔以此。问责制。"'
                },
                consequence: {
                    en: '⚖️ Harsh Justice. It\'s illegal in some places, but you enforce it. He resents you and steals steaks to make up the difference. You created a thief.',
                    th: '⚖️ ความยุติธรรมที่โหดร้าย ผิดกฎหมายในบางที่แต่คุณก็ทำ เขาแค้นคุณและขโมยสเต็กไปขายเพื่อชดเชยส่วนต่าง คุณสร้างขโมยขึ้นมา',
                    zh: '⚖️ 严厉的正义。在某些地方这是非法的，但你执行了。他怨以此你，并偷牛排来弥补差额。你制造了一个小偷。'
                },
                stats: { competence: 10, ethics: -30, leadership: -20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🔒 Lock Up Tools: "My fault for leaving it out. Fix it silently. Buy a knife roll with a lock. Trust no one."',
                    th: '🔒 ล็อกอุปกรณ์: "ความผิดฉันเองที่วางทิ้งไว้ ซ่อมเงียบๆ ซื้อกระเป๋ามีดที่มีกุญแจล็อก ไม่ไว้ใจใครทั้งนั้น"',
                    zh: '🔒 锁以此具："我把它以此外面是我的错。以此以此。买一个带锁的以此卷。谁也不信。"'
                },
                consequence: {
                    en: '🛡️ Isolated Pro. Your tools are safe, but you become distant. You don\'t share knowledge or tools anymore. Excellent chef, bad teacher.',
                    th: '🛡️ มือโปรผู้โดดเดี่ยว อุปกรณ์ปลอดภัยแต่คุณเหินห่าง คุณไม่แชร์ความรู้หรืออุปกรณ์อีกต่อไป เชฟยอดเยี่ยมแต่ครูแย่',
                    zh: '🛡️ 孤立的专业人士。你的工具很安全，但你变得疏远。你不再分享知识或工具。优秀的厨师，糟糕的老师。'
                },
                stats: { competence: 30, ethics: 0, leadership: -10, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_008',
        text: {
            en: '💡 The Fusion Idea: You want to put "Pad Thai Tacos" on the menu. The Mexican cook says it\'s an insult to tacos. The Thai server says it\'s an insult to Pad Thai. You think it tastes amazing.',
            th: '💡 ไอเดียฟิวชั่น: คุณอยากใส่ "ทาโก้ผัดไทย" ในเมนู กุ๊กเม็กซิกันบอกลบหลู่ทาโก้ เด็กเสิร์ฟไทยบอกหยามผัดไทย แต่คุณคิดว่ารสชาติมันสุดยอด',
            zh: '💡 融合以此：你想把"泰式炒河粉塔可"以此菜单。墨西哥厨师说这是对塔可的以此。泰国服务员说这是对泰式炒河粉的以此。你觉得以此以此。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌮 Do It Anyway: "Fusion is the future! Food has no borders. If it tastes good, it works. Put it on as the special."',
                    th: '🌮 ทำมันเลย: "ฟิวชั่นคืออนาคต! อาหารไม่มีพรมแดน ถ้ารสชาติดีก็จบ เอาขึ้นเมนูพิเศษเลย"',
                    zh: '🌮 以此以此："融合就是未来！以此没有边界。如果味道好，就以此。把它以此以此菜。" '
                },
                consequence: {
                    en: '✨ Viral Hit / Cultural cringe. Customers love it (it\'s delicious), but food bloggers mock it as "confused colonization food." It sells, but you lose respect from purists.',
                    th: '✨ ดังแต่โดนด่า ลูกค้าชอบ (มันอร่อย) แต่บล็อกเกอร์ล้อว่าเป็น "อาหารอาณานิคมที่สับสน" ขายดีแต่เสียความเคารพจากพวกหัวโบราณ',
                    zh: '✨ 病毒式以此/文化以此。客户以此（以此），但以此以此它以此"以此的殖民以此"。以此，但你以此以此主义者的以此。'
                },
                stats: { competence: 30, ethics: 0, leadership: 10, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Collaborative Refinement: "Ask the Mexican cook and Thai server to help you make it BETTER. Respect both traditions. Maybe \'Tamarind Glazed Pork Tacos with Peanut Salsa\'?"',
                    th: '🤝 ร่วมมือกันปรับ: "ขอกุ๊กเม็กซิกันและเด็กเสิร์ฟไทยมาช่วยทำให้มัน *ดีขึ้น* เคารพทั้งสองวัฒนธรรม อาจจะเป็น \'ทาโก้หมูซอสมะขามกับซัลซ่าถั่ว\'?"',
                    zh: '🤝 以此以此："以此墨西哥厨师和泰国服务员以此你以此它**更好**。以此以此以此。以此\'以此以此以此以此\'？" '
                },
                consequence: {
                    en: '✅ Fusion Done Right. The team feels heard. The resulting dish is nuanced, respectful, and incredible. It becomes a signature dish. Leadership +50.',
                    th: '✅ ฟิวชั่นที่ถูกต้อง ทีมรู้สึกมีส่วนร่วม จานที่ได้มีมิติ ให้เกียรติ และสุดยอด กลายเป็นเมนูซิกเนเจอร์ การนำ +50',
                    zh: '✅ 融合以此。团队以此被以此。以此的菜以此、以此、以此。它成为了招牌菜。领导力+50。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🌮 Drop It: "You\'re right. Authenticity matters more than gimmicks. Let\'s make the best traditional Tacos Al Pastor instead."',
                    th: '🌮 ทิ้งซะ: "พวกคุณพูดถูก ความแท้จริงสำคัญกว่าลูกเล่น มาทำทาโก้ Al Pastor แบบดั้งเดิมที่เจ๋งที่สุดดีกว่า"',
                    zh: '🌮 以此："你是对的。以此以此以此。让我们以此以此的以此以此以此塔可。" '
                },
                consequence: {
                    en: '🛡️ Respect Earned. The staff respects you for listening. The traditional tacos are solid, but boring. Zero innovation, high stability.',
                    th: '🛡️ ได้ใจลูกน้อง พนักงานเคารพที่คุณฟัง ทาโก้ดั้งเดิมอร่อยดีแต่น่าเบื่อ นวัตกรรมศูนย์ ความมั่นคงสูง',
                    zh: '🛡️ 以此以此。员工以此你以此。以此塔可以此，但以此。零创新，高稳定性。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: -20 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Hide It: "Serve it only to people who look like they like weird food. Don\'t print it. Secret menu item for hipsters."',
                    th: '📉 ซ่อนมัน: "เสิร์ฟเฉพาะคนที่ดูชอบของแปลก ไม่ต้องลงเมนู เป็นเมนูลับสำหรับพวกฮิปสเตอร์"',
                    zh: '📉 以此："只以此给以此以此以此以此的人。以此以此。以此的隐藏菜单以此。" '
                },
                consequence: {
                    en: '🕶️ Cult Following. It becomes an underground legend. "Request the P.T.T." Hipsters love it. You bypass the cultural critique by making it exclusive.',
                    th: '🕶️ ลัทธิบูชา กลายเป็นตำนานใต้ดิน "ต้องสั่ง P.T.T." ฮิปสเตอร์ชอบมาก คุณเลี่ยงดราม่าโดยทำให้มันเอ็กซ์คลูซีฟ',
                    zh: '🕶️ 以此以此。它成为了以此传奇。"以此P.T.T."以此以此。你以此以此以此以以此。'
                },
                stats: { competence: 30, ethics: 10, leadership: 10, innovation: 40 }
            }
        ]
    },

    {
        id: 'chef_009',
        text: {
            en: '🦠 The Fridge Failure: You walk in Monday morning. The walk-in fridge breaks over the weekend. It\'s 60°F (15°C) inside. $5,000 of meat, dairy, and prep is warm. It smells... okay, mostly.',
            th: '🦠 ตู้นรกแตก: คุณเดินเข้ามาเช้าวันจันทร์ ตู้เย็นห้องเย็นพังช่วงสุดสัปดาห์ ข้างในอุณหภูมิ 15°C เนื้อ นม และของที่เตรียมไว้มูลค่า $5,000 อุ่นหมด กลิ่นมัน... ก็ดูโอเคนะ ส่วนใหญ่',
            zh: '🦠 冰箱故障：你周一早上走以此。步入式冰箱周末坏了。里面是60°F（15°C）。5000美元的以此、以此和以此都以此了。闻起来……还好，以此。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🗑️ Toss EVERYTHING: "When in doubt, throw it out. Insurance will cover some of it. I am not poisoning anyone. We open with a limited menu tonight."',
                    th: '🗑️ ทิ้ง *ทุกอย่าง*: "ถ้าสงสัย ให้ทิ้ง ประกันน่าจะจ่ายบ้าง ผมจะไม่วางยาใคร คืนนี้เปิดด้วยเมนูจำกัดพอ"',
                    zh: '🗑️ 以此以此："以此以此，以此以此。保险会以此以此。我以此毒死任何人。我们今晚以有限的菜单以此。" '
                },
                consequence: {
                    en: '✅ Ethical Hero. You lose money, but you sleep at night. The insurance claim is a hassle, but your reputation remains spotless. Customers understand the limited menu.',
                    th: '✅ ฮีโร่จริยธรรม เสียเงินแต่หลับสบาย เคลมประกันยุ่งยากแต่ชื่อเสียงใสสะอาด ลูกค้าเข้าใจเรื่องเมนูจำกัด',
                    zh: '✅ 道德英雄。你赔钱，但你以此以此。保险以此以此，但你的声誉以此。客户以此有限的菜单。'
                },
                stats: { competence: 20, ethics: 100, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '👃 Savage Salvage: "Smell check everything. Keep the root veggies and hard cheeses. Cook the meat immediately into heavy stews to kill bacteria. Toss the milk."',
                    th: '👃 กู้ชีพสายโหด: "ดมเช็กทุกอย่าง เก็บผักหัวและชีสแข็งไว้ เอาเนื้อมาทำสตูว์เคี่ยวนานๆ ทันทีเพื่อฆ่าเชื้อ ทิ้งนมไป"',
                    zh: '👃 以此以此："以此以此以此。以此根茎蔬菜和硬以此。以此以此以此以以此。以此牛奶。" '
                },
                consequence: {
                    en: '🤢 Risk Factor High. You save $2,000 worth of food. The stew tastes a bit "funky" but you mask it with spices. No one dies, but a few Yelp reviews mention "upset stomachs."',
                    th: '🤢 ความเสี่ยงสูง กู้เงินได้ $2,000 สตูว์รส "แปลกๆ" หน่อยแต่เอาเครื่องเทศกลบ ไม่มีใครตายแต่รีวิว Yelp บ่น "ปวดท้อง"',
                    zh: '🤢 风险因素高。你以此了价值2000美元的食物。炖菜以此有点"以此"，但你用以此以此了。以此以此，但以此Yelp评论以此"以此以此"。'
                },
                stats: { competence: 10, ethics: -40, leadership: 0, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🏃 Emergency Sourcing: "Throw it out. Call every chef friend I know. \'Borrow\' prep from three neighboring restaurants. run a \'Community Dinner\' special."',
                    th: '🏃 หาของฉุกเฉิน: "ทิ้งหมด โทรหาเพื่อนเชฟทุกคนที่รู้จัก \'ยืม\' ของที่เตรียมแล้วจากร้านข้างๆ 3 ร้าน จัดเมนูพิเศษ \'มื้อค่ำชุมชน\'"',
                    zh: '🏃 以此以此："以此以此。以此以此我以此的厨师朋友。从三家以此餐厅\'以此\'以此。以此\'以此以此\'以此菜。" '
                },
                consequence: {
                    en: '✨ Legend of the Industry. The community rallies. You turn a disaster into a networking event. You owe a lot of favors, but you pulled off a miracle service.',
                    th: '✨ ตำนานวงการ ชุมชนรวมพลัง คุณเปลี่ยนหายนะเป็นงานสังสรรค์ คุณติดหนี้บุญคุณเพียบ แต่ก็ทำปาฏิหาริย์สำเร็จ',
                    zh: '✨ 行业传奇。以此以此。你把一场灾难变成了一个以此以此。你以此了以此人情，但你以此了一个以此服务。'
                },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🤫 Pretend it Just Happened: "Tell the owner it broke an hour ago so the food is still safe to serve. Lie to save my job."',
                    th: '🤫 แกล้งทำเป็นเพิ่งเกิด: "บอกเจ้าของว่าเพิ่งพังเมื่อชั่วโมงที่แล้ว อาหารยังกินได้ โกหกเพื่อรักษาเก้าอี้"',
                    zh: '🤫 以此以此："以此老板它以此以此以此，所以以此以此以此。以此以此以此。" '
                },
                consequence: {
                    en: '💀 Criminal Negligence. You serve spoiled food. 12 people get food poisoning. The health department traces it back. You are sued personally. The end.',
                    th: '💀 ประมาทเลินเล่อทางอาญา เสิร์ฟของเน่า 12 คนอาหารเป็นพิษ สาธารณสุขสืบเจอ คุณโดนฟ้องส่วนตัว จบเห่',
                    zh: '💀 以此以此。你以此以此食物。12人以此。卫生部门以此。你被以此起诉。结束。'
                },
                stats: { competence: -50, ethics: -100, leadership: -50, innovation: 0 }
            }
        ]
    },

    // SECTION 2: MANAGEMENT & MENU DEVELOPMENT (Questions 10-20 will go here)

    {
        id: 'chef_010',
        text: {
            en: '🔪 The Vegan Invasion: A group of 20 activists books the private room. They demand a fully 7-course Vegan Tasting Menu. Your restaurant is a Steakhouse. You have 4 hours to prep.',
            th: '🔪 การบุกรุกของชาววีแกน: กลุ่มนักเคลื่อนไหว 20 คนจองห้องส่วนตัว เรียกร้องเทสติ้งเมนูวีแกน 7 คอร์ส ร้านคุณเป็นร้านสเต็ก คุณมีเวลาเตรียมตัว 4 ชั่วโมง',
            zh: '🔪 纯素以此：一群20名以此以此以此了包间。他们要求以此7道菜的纯素以此菜单。你的餐厅是牛排馆。你有4小时以此。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🥓 The Passive Aggressive: "Serve them salads and grilled vegetables. Charge full price. If they come to a steakhouse, they get sides."',
                    th: '🥓 ประชดประชัน: "เสิร์ฟสลัดกับผักย่างไป คิดราคาเต็ม ถ้ามาตราหน้าร้านสเต็ก ก็กินเครื่องเคียงไปเถอะ"',
                    zh: '🥓 以此以此："以此以此沙拉和以此蔬菜。以此全价。如果他们来牛排馆，他们就以此配菜。"'
                },
                consequence: {
                    en: '💀 Bad Reviews. "Lazy, unimaginative, arrogant." They wreck you on social media. You missed a chance to show skill.',
                    th: '💀 รีวิวแย่ "ขี้เกียจ ไร้จินตนาการ หยิ่ง" พวกเขาถล่มคุณเละในโซเชียล คุณพลาดโอกาสโชว์ฝีมือ',
                    zh: '💀 以此评价。"以此，以此，以此。"他们在社交媒体上以此你。你错过了展示以此的机会。'
                },
                stats: { competence: 10, ethics: -10, leadership: -10, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '🥦 The Plant Master: "Challenge accepted. Smoked Beet Tartare, Cauliflower Steak with Chimichurri, Coconut Risotto. Show them that a meat chef can master plants too."',
                    th: '🥦 จอมขมังเวทย์พืช: "รับคำท้า ทาร์ทาร์บีทรูทรมควัน, สเต็กดอกกะหล่ำซอสชิมิชูรี่, ริซอตโต้กะทิ ให้เห็นไปเลยว่าเชฟเนื้อก็เซียนผักได้"',
                    zh: '🥦 植物大师："以此挑战。以此以此，以此花椰菜排配以此，椰子以此。向他们展示以此厨师也能以此植物。"'
                },
                consequence: {
                    en: '✨ New Clientele. They are blown away. The leader blogs about your "Hidden Vegan Mastery." You start getting regular vegan bookings. Revenue diversifies. Innovation +80.',
                    th: '✨ ลูกค้ากลุ่มใหม่ พวกเขาอึ้งไปเลย หัวหน้ากลุ่มเขียนบล็อกชม "ทักษะวีแกนที่ซ่อนเร้น" คุณเริ่มมียอดจองวีแกนประจำ รายได้หลากหลายขึ้น นวัตกรรม +80',
                    zh: '✨ 新客源。他们以此。领导者在博客上以此你的"隐藏以此以此"。你开始以此以此纯素预订。以此以此。创新+80。'
                },
                stats: { competence: 60, ethics: 40, leadership: 30, innovation: 80 }
            },
            {
                id: 'C',
                text: {
                    en: '🙅 Cancel Reservation: "Call them. Tell them we cannot accommodate their dietary restrictions safely. Suggest the vegan place down the street."',
                    th: '🙅 ยกเลิกการจอง: "โทรหาพวกเขา บอกว่าเราไม่สามารถรองรับข้อจำกัดอาหารได้อย่างปลอดภัย แนะนำร้านวีแกนถัดไปแทน"',
                    zh: '🙅 以此预订："给他们打电话。以此他们我们无法安全地以此他们的饮食限制。建议去街那边的纯素餐厅。"'
                },
                consequence: {
                    en: '🛡️ Honest & Safe. You lose revenue, but avoid stress and complaints. It\'s a neutral move. The owner is annoyed about the lost $1,500 check.',
                    th: '🛡️ จริงใจและปลอดภัย เสียรายได้แต่เลี่ยงความเครียดและคำบ่น เป็นตาเดินที่กลางๆ เจ้าของร้านเซ็งที่เงินหาย $1,500',
                    zh: '🛡️ 以此与安全。你失去以此，但避免了压力和投诉。这是一个中立的举动。老板对以此1500美元以此以此。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🍄 The Fake Meat: "Buy Impossible Meat from the store. Make \'burgers\'. Pretend we made it from scratch. Easy."',
                    th: '🍄 เนื้อปลอม: "ไปซื้อ Impossible Meat มา ทำ \'เบอร์เกอร์\' แกล้งบอกว่าทำเองจากศูนย์ ง่ายจะตาย"',
                    zh: '🍄 假肉："去商店买人造肉。做成\'汉堡\'。假装是我们从头做的。简单。"'
                },
                consequence: {
                    en: '🤡 Called Out. One of them recognizes the taste immediately. "This is store-bought." Embarrassing. You look like a fraud.',
                    th: '🤡 โดนจับได้ คนหนึ่งจำรสชาติได้ทันที "นี่มันซื้อมานี่นา" น่าอายมาก คุณดูเหมือนพวกต้มตุ๋น',
                    zh: '🤡 被揭穿。其中一人立刻认出了味道。"这是商店买的。"真尴尬。你看起来像个骗子。'
                },
                stats: { competence: -10, ethics: -30, leadership: -20, innovation: -10 }
            }
        ]
    },

    {
        id: 'chef_011',
        text: {
            en: '👔 The Sous Chef Dilemma: You need a new number two. Two candidates: "Old Joe" (your loyal friend, average cook, reliable) vs. "Young Wolf" (brilliant, ambitious, arrogant, will likely leave in a year).',
            th: '👔 ปัญหาเรื่องซูเชฟ: คุณต้องการมือขวาคนใหม่ มีผู้สมัคร 2 คน: "ลุงโจ" (เพื่อนยาก ฝีมือกลางๆ ไว้ใจได้) กับ "หมาป่าหนุ่ม" (อัจฉริยะ ทะเยอทะยาน หยิ่ง น่าจะอยู่แค่ปีเดียว)',
            zh: '👔 副厨困境：你需要一个新的二把手。两个人选："老乔"（你忠诚的朋友，厨艺一般，可靠）对战"年轻的狼"（才华横溢，野心勃勃，傲慢，可能一年后就会离开）。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Hire Old Joe: "Loyalty over talent. I need someone who has my back, even if I have to fix his plates sometimes."',
                    th: '🤝 จ้างลุงโจ: "ความภักดีสำคัญกว่าพรสวรรค์ ผมต้องการคนหนุนหลัง ถึงผมจะต้องตามแก้จานเขาบ้างก็เถอะ"',
                    zh: '🤝 雇佣老乔："忠诚胜过才华。我需要一个支持我的人，即使我有时必须修正他的摆盘。"'
                },
                consequence: {
                    en: '🛡️ Stable but Stale. The kitchen is peaceful, but the food never evolves. You get tired of carrying the creative load. Stability +50, Innovation -20.',
                    th: '🛡️ มั่นคงแต่จืดชืด ครัวสงบสุข แต่อาหารไม่พัฒนาเลย คุณเริ่มเหนื่อยที่ต้องแบกความสร้างสรรค์ไว้คนเดียว ความมั่นคง +50, นวัตกรรม -20',
                    zh: '🛡️ 稳定但陈旧。厨房很平静，但食物从未进化。你厌倦了独自承担创意重担。稳定性+50，创新-20。'
                },
                stats: { competence: 20, ethics: 30, leadership: 40, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔥 Hire Young Wolf: "I need excellence. Let him push the team. If he leaves, he leaves. We will be better for it."',
                    th: '🔥 จ้างหมาป่าหนุ่ม: "ผมต้องการความเป็นเลิศ ให้เขามากระตุ้นทีม ถ้าเขาจะไปก็ปล่อยเขาไป อย่างน้อยเราจะเก่งขึ้น"',
                    zh: '🔥 雇佣年轻的狼："我需要卓越。让他推动团队。如果他要走，就让他走。我们会因此变得更好。"'
                },
                consequence: {
                    en: '⚡ Explosive Growth. The food gets better immediately. But he challenges your authority constantly. The tension is high, but the stars are within reach.',
                    th: '⚡ การเติบโตแบบก้าวกระโดด อาหารดีขึ้นทันตาเห็น แต่เขาท้าทายอำนาจคุณตลอด ความตึงเครียดสูง แต่ดาวมิชลินอยู่แค่เอื้อม',
                    zh: '⚡ 爆炸性增长。食物立刻变好了。但他不断挑战你的权威。气氛紧张，但摘星触手可及。'
                },
                stats: { competence: 50, ethics: 0, leadership: 10, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '⚔️ Thunderdome: "Trial shift competition! Whoever creates the best special tonight gets the job. Survival of the fittest."',
                    th: '⚔️ สังเวียนเดือด: "แข่งทำอาหารคืนนี้! ใครทำเมนูพิเศษได้เริ่ดสุดได้งานไป ผู้อยู่รอดคือผู้ที่แข็งแกร่งที่สุด"',
                    zh: '⚔️ 疯狂竞技场："试岗比赛！今晚谁做的特价菜最好，谁就得到这份工作。适者生存。"'
                },
                consequence: {
                    en: '⚠️ Cutthroat Culture. Young Wolf wins easily, but minimizes Joe in front of the team. You set a precedent that only skill matters. Morale drops.',
                    th: '⚠️ วัฒนธรรมเชือดเฉือน หมาป่าหนุ่มชนะใสๆ แต่ฉีกหน้าโจต่อหน้าทีม คุณสร้างบรรทัดฐานว่าฝีมือคือทุกอย่าง ขวัญกำลังใจตก',
                    zh: '⚠️ 残酷的文化。年轻的狼轻松获胜，但在团队面前贬低了乔。你开了一个先例，即只有技能才是重要的。士气下降。'
                },
                stats: { competence: 30, ethics: -10, leadership: -20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🧑‍🍳 Do It Yourself: "I don\'t trust anyone yet. I will work double shifts, run the pass and the prep. I am Superman."',
                    th: '🧑‍🍳 ทำเองหมด: "ยังไม่ไว้ใจใคร ผมจะเข้ากะเบิ้ล คุมทั้งพาสและเตรียมของเอง ผมมันซูเปอร์แมน"',
                    zh: '🧑‍🍳 自己做："我还谁都不信。我会上双班，负责传菜和备料。我是超人。"'
                },
                consequence: {
                    en: '💤 Burnout. You last 2 weeks before collapsing. The quality suffers because you are exhausted. You cannot scale alone.',
                    th: '💤 ภาวะหมดไฟ คุณทนได้ 2 อาทิตย์ก่อนจะร่วง คุณภาพงานตกเพราะคุณเหนื่อยล้า คุณโตคนเดียวไม่ได้หรอก',
                    zh: '💤 倦怠。你坚持了2周就倒下了。因为你精疲力竭，质量受到影响。你无法独自扩张。'
                },
                stats: { competence: 10, ethics: 10, leadership: -30, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_012',
        text: {
            en: '📈 The Inflation Spike: Ingredient costs just jumped 20%. Your profit margin is dead. You can\'t survive without changing something by next week.',
            th: '📈 เงินเฟ้อพุ่ง: ค่าวัตถุดิบเพิ่งพุ่งขึ้น 20% กำไรคุณหายเกลี้ยง อยู่ไม่ได้แน่ถ้าไม่เปลี่ยนอะไรสักอย่างภายในอาทิตย์หน้า',
            zh: '📈 通胀飙升：食材成本刚刚上涨了20%。你的利润率完了。如果不改变点什么，你撑不过下周。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💸 Raise Prices: "Print new menus. Increase everything by 25%. Explain to customers that quality costs money. Risk losing regulars."',
                    th: '💸 ขึ้นราคา: "พิมพ์เมนูใหม่ ขึ้นราคาทุกอย่าง 25% อธิบายลูกค้าว่าของดีต้องใช้เงิน เสี่ยงเสียลูกค้าประจำ"',
                    zh: '💸 涨价："印新菜单。所有东西涨价25%。向客户解释质量需要成本。冒着失去常客的风险。"'
                },
                consequence: {
                    en: '📉 Volume Drop / Margin Up. You lose 15% of your customers, but the ones who stay pay more. You make the same money with less work. Valid pivot.',
                    th: '📉 ยอดขายตก / กำไรเพิ่ม ลูกค้าหายไป 15% แต่คนที่อยู่ยอมจ่ายแพงขึ้น ได้เงินเท่าเดิมแต่เหนื่อยน้อยลง การปรับตัวที่ถูกต้อง',
                    zh: '📉 客流下降/利润上升。你失去了15%的客户，但留下来的愿意付更多钱。你用更少的工作赚了同样的钱。有效的转型。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔍 Shrinkflation: "Keep prices the same. Make the steaks 1oz smaller. Put more fries on the plate. Illusion of value."',
                    th: '🔍 ลดปริมาณ (Shrinkflation): "ราคาเท่าเดิม ลดขนาดสเต็กลง 1 ออนซ์ เพิ่มเฟรนช์ฟรายส์เยอะๆ สร้างภาพลวงตาแห่งความคุ้มค่า"',
                    zh: '🔍 缩水式通胀："保持价格不变。牛排做小1盎司。盘子里多放点薯条。价值的错觉。"'
                },
                consequence: {
                    en: '🤡 The Deception. Customers notice eventually. "Product got smaller," Yelp reviews say. Trust eroded slowly but surely.',
                    th: '🤡 การหลอกลวง ลูกค้าสังเกตเห็นจนได้ รีวิวบอก "ของเล็กลง" ความเชื่อใจถูกกัดเซาะช้าๆ แต่ชัวร์',
                    zh: '🤡 欺骗。客户最终会注意到的。"产品变小了，"Yelp评论说。信任缓慢但肯定地受到侵蚀。'
                },
                stats: { competence: 10, ethics: -30, leadership: 0, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '♻️ Zero Waste: "We throw away too much. Use carrot tops for pesto. Use meat trimmings for ragu. Raise margin by efficiency, not price."',
                    th: '♻️ ขยะเป็นศูนย์: "เราทิ้งของเยอะไป เอาใบแครอทมาทำเพสโต้ เศษเนื้อทำรากู เพิ่มกำไรด้วยประสิทธิภาพ ไม่ใช่ขึ้นราคา"',
                    zh: '♻️ 零浪费："我们扔掉太多东西了。用胡萝卜缨做香蒜酱。用碎肉做肉酱。通过效率而不是价格来提高利润。"'
                },
                consequence: {
                    en: '✨ Operational Genius. Harder work for the kitchen, but you save the budget. The team learns respect for ingredients. Sustainable Model.',
                    th: '✨ อัจฉริยะฝ่ายปฏิบัติการ ครัวเหนื่อยขึ้น แต่เซฟงบได้ ทีมเรียนรู้ที่จะเคารพวัตถุดิบ โมเดลที่ยั่งยืน',
                    zh: '✨ 运营天才。厨房工作更辛苦，但你节省了预算。团队学会了尊重食材。可持续模式。'
                },
                stats: { competence: 60, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Cheat Ingredients: "Switch to frozen shrimp. Buy the lower grade oil. Customers won\'t notice if we season it heavily."',
                    th: '📉 โกงวัตถุดิบ: "เปลี่ยนใช้กุ้งแช่แข็ง ซื้อน้ำมันเกรดต่ำ ลูกค้าไม่รู้หรอกถ้าเราปรุงรสจัดๆ"',
                    zh: '📉 偷工减料："改用冷冻虾。买低级油。如果我们调味重一点，客户不会注意到的。"'
                },
                consequence: {
                    en: '💀 The Slide. Quality drops perceptibly. The restaurant loses its soul. You are now just another mediocre eatery. Brand ruined.',
                    th: '💀 ทางลงเหว คุณภาพตกลงแบบรู้สึกได้ ร้านเสียวิญญาณ ตอนนี้คุณเป็นแค่ร้านดาษดื่นทั่วไป แบรนด์พังยับ',
                    zh: '💀 下滑。质量明显下降。餐厅失去了灵魂。你现在只是另一家平庸的餐馆。品牌毁了。'
                },
                stats: { competence: -20, ethics: -50, leadership: -20, innovation: -10 }
            }
        ]
    },

    {
        id: 'chef_013',
        text: {
            en: '🍝 The Signature Trap: Your "Truffle Mac & Cheese" is famous. It pays the rent. But you HATE making it. It\'s boring, basic, and you want to cook complex French food.',
            th: '🍝 กับดักเมนูดัง: "แมคแอนด์ชีสทรัฟเฟิล" ของคุณดังมาก มันจ่านค่าเช่าให้ร้าน แต่คุณ *เกลียด* การทำมัน น่าเบื่อ พื้นๆ คุณอยากทำอาหารฝรั่งเศสซับซ้อน',
            zh: '🍝 招牌陷阱：你的"松露通心粉奶酪"很有名。它支付房租。但你**讨厌**做它。它无聊、基础，而你想做复杂的法餐。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '❌ Kill It: "Take it off the menu. Cold turkey. Tell customers \'We are moving forward.\' Force them to try new things."',
                    th: '❌ ฆ่ามันทิ้ง: "เอาออกจากเมนู หักดิบเลย บอกลูกค้าว่า \'เรากำลังก้าวไปข้างหน้า\' บังคับให้เขาลองของใหม่"',
                    zh: '❌ 砍掉它："把它从菜单上拿掉。彻底戒断。告诉客户\'我们在前进。\'强迫他们尝试新事物。"'
                },
                consequence: {
                    en: '📉 Revolt. Customers are angry. "Where is the Mac??" They leave bad reviews. Revenue drops 30%. You have artistic freedom but no money.',
                    th: '📉 จลาจล ลูกค้าโกรธ "แมคฉันอยู่ไหน??" เขารีวิวแย่ รายได้หาย 30% คุณมีอิสระทางศิลปะแต่ไม่มีตังค์',
                    zh: '📉 反抗。客户很生气。"通心粉在哪里？？"他们以此差评。收入下降30%。你有艺术自由但没有钱。'
                },
                stats: { competence: 10, ethics: 20, leadership: 10, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Keep It (Cash Cow): "Keep it exactly as is. It funds my experiments. I will suffer through the boredom for the financial stability."',
                    th: '💰 เก็บไว้ (วัวนม): "เก็บไว้เหมือนเดิมเป๊ะ มันเป็นทุนให้การทดลองของผม ผมจะทนเบื่อเพื่อความมั่นคงทางการเงิน"',
                    zh: '💰 保留它（摇钱树）："保持原样。它资助我的实验。为了财务稳定，我会忍受无聊。"'
                },
                consequence: {
                    en: '🛡️ Smart Business. You use the Mac money to buy Wagyu beef for a special. You learn that not every dish needs to be Art, some just need to be Rent.',
                    th: '🛡️ ธุรกิจที่ฉลาด คุณใช้เงินจากแมคไปซื้อวากิวมาทำเมนูพิเศษ คุณเรียนรู้ว่าไม่ใช่ทุกจานต้องเป็นศิลปะ บางจานเป็นแค่ค่าเช่า',
                    zh: '🛡️ 精明商业。你用通心粉的钱买和牛做特价菜。你明白了不是每一道菜都需要是艺术，有的只需要是房租。'
                },
                stats: { competence: 40, ethics: 10, leadership: 30, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Evolve It: "Make \'Deconstructed Truffle Mac\'. Use Gruyère foam and handmade Cavatelli. Elevate it so I respect it again."',
                    th: '🔄 วิวัฒนาการ: "ทำ \'Deconstructed Truffle Mac\' ใช้โฟมกรูแยร์และพาสต้าทำมือ ยกระดับมันให้ผมกลับมาเคารพมันได้อีกครั้ง"',
                    zh: '🔄 进化它："做\'解构松露通心粉\'。使用格鲁耶尔泡沫和手工意面。提升它，让我再次尊重它。"'
                },
                consequence: {
                    en: '⚠️ Hit or Miss. Half the customers miss the gooey comfort food. The other half loves the fancy version. You alienated the comfort crowd.',
                    th: '⚠️ วัดดวง ครึ่งหนึ่งคิดถึงรสมือแม่ฉ่ำๆ อีกครึ่งชอบเวอร์ชั่นหรู คุณเสียฐานลูกค้าสาย Comfort Food ไป',
                    zh: '⚠️ 碰运气。一半的客户想念那种粘稠的舒适食物。另一半喜欢豪华版本。你疏远了寻求舒适的群体。'
                },
                stats: { competence: 30, ethics: 10, leadership: 10, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🧑‍🍳 Delegate It: "Teach the prep cook to make it. It\'s easy. I never want to touch that pan again. I focus on the fish station."',
                    th: '🧑‍🍳 มอบหมายงาน: "สอนกุ๊กเตรียมของทำ มันง่ายจะตาย ผมไม่อยากแตะกระทะนั้นอีก ผมไปโฟกัสสเตชั่นปลาดีกว่า"',
                    zh: '🧑‍🍳 委派它："教备菜工做。这很简单。我再也不想碰平底锅。我专注于鱼台。"'
                },
                consequence: {
                    en: '📉 Quality Control. The prep cook overcooks the pasta. Customers notice: "It\'s not as good as it used to be." You learned delegation requires supervision.',
                    th: '📉 การคุมคุณภาพ กุ๊กเตรียมของลวกเส้นเละ ลูกค้าจับได้: "มันไม่อร่อยเหมือนเดิม" คุณได้เรียนรู้ว่าการมอบหมายงานต้องมีการกำกับดูแล',
                    zh: '📉 质量控制。备菜工把面煮过头了。客户注意到："没以前那么好了。"你学到了授权需要监督。'
                },
                stats: { competence: 10, ethics: 0, leadership: 20, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_014',
        text: {
            en: '⚔️ Front vs Back: The servers and cooks are at war. Cooks are ringing bells aggressively; servers are forgetting pick-ups. Food is dying in the window.',
            th: '⚔️ หน้าบ้าน vs หลังบ้าน: เด็กเสิร์ฟกับกุ๊กกำลังทำสงครามกัน กุ๊กกดกระดิ่งเรียกแบบเกรี้ยวกราด เด็กเสิร์ฟแกล้งลืมมารับอาหาร อาหารเย็นชืดอยู่ที่หน้าต่างส่งของ',
            zh: '⚔️ 前厅对后厨：服务员和厨师在开战。厨师疯狂按铃；服务员忘记端菜。食物在出餐口变凉。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🍽️ Family Meal: "Stop service for 10 mins. Force everyone to sit and eat together. We are ONE team. Hash it out now."',
                    th: '🍽️ มื้ออาหารครอบครัว: "หยุดเสิร์ฟ 10 นาที บังคับให้ทุกคนมานั่งกินข้าวด้วยกัน เราคือทีมเดียวกัน เคลียร์กันให้จบเดี๋ยวนี้"',
                    zh: '🍽️ 员工餐："停止服务10分钟。强迫大家坐下来一起吃饭。我们是一个团队。现在就解决它。"'
                },
                consequence: {
                    en: '✨ Unity Restored. It\'s awkward at first, but they talk. Tension breaks. Service resumes smoother. You prioritized culture over immediate speed.',
                    th: '✨ คืนความสามัคคี ตอนแรกก็อึดอัด แต่เขาคุยกัน ความตึงเครียดหายไป การบริการลื่นไหลขึ้น คุณเลือกวัฒนธรรมองค์กรมาก่อนความเร็วชั่วคราว',
                    zh: '✨ 恢复团结。起初很尴尬，但他们开始交谈。紧张气氛打破。服务恢复得更顺畅。你将文化置于眼前的速度之上。'
                },
                stats: { competence: 30, ethics: 40, leadership: 60, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔥 Fire Ringleaders: "Fire the loudest complainer from FOH and BOH. Make an example. I don\'t tolerate drama."',
                    th: '🔥 ไล่หัวโจกออก: "ไล่คนที่บ่นดังสุดของทั้งฝั่งหน้าบ้านและหลังบ้านออก เชือดไก่ให้ลิงดู ผมไม่ทนดราม่า"',
                    zh: '🔥 开除带头人："开除前厅和后厨抱怨最大声的人。杀鸡儆猴。我不容忍戏剧化。"'
                },
                consequence: {
                    en: '⚠️ Fear Tactics. The fighting stops instantly out of fear. But you are short-staffed and everyone hates you. Effective but costly.',
                    th: '⚠️ ยุทธการความกลัว การทะเลาะหยุดทันทีเพราะกลัว แต่คนขาดและทุกคนเกลียดคุณ ได้ผลแต่แลกมาด้วยราคาแพง',
                    zh: '⚠️ 恐惧战术。因为恐惧，争斗立刻停止。但你人手不足，大家都恨你。有效但代价高昂。'
                },
                stats: { competence: 20, ethics: -20, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 Bribe FOH: "Give the servers free dessert scraps. Be nice to them so they move faster. Kill them with kindness."',
                    th: '🤫 ติดสินบนเด็กเสิร์ฟ: "แจกเศษขนมให้เด็กเสิร์ฟฟรี ทำดีกับเขาหน่อยจะได้ทำงานไวๆ เอาความใจดีเข้าลูบ"',
                    zh: '🤫 贿赂前厅："给服务员免费的甜点边角料。对他们好点，让他们动作快点。用善意感化他们。"'
                },
                consequence: {
                    en: '🤡 Weak Leadership. The servers like you, but the cooks lose respect. "Why are you rewarding them for being lazy?" The war continues underground.',
                    th: '🤡 ผู้นำที่อ่อนแอ เด็กเสิร์ฟชอบคุณ แต่กุ๊กหมดศรัทธา "ทำไมเชฟให้รางวัลพวกขี้เกียจ?" สงครามเย็นยังดำเนินต่อไป',
                    zh: '🤡 软弱的领导。服务员喜欢你，但厨师失去了尊重。"你为什么要奖励他们的懒惰？"地下战争继续。'
                },
                stats: { competence: -10, ethics: 0, leadership: -30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ The Expo King: "I will stand at the pass. ALL communication goes through ME. No server talks to a cook directly. Military discipline."',
                    th: '🗣️ ราชาแห่ง Expo: "ผมจะยืนคุมที่พาส ทุกการสื่อสารต้องผ่าน *ผม* ห้ามเด็กเสิร์ฟคุยกับกุ๊กโดยตรง วินัยทหาร"',
                    zh: '🗣️ 传菜之王："我会站在传菜口。所有的沟通都经过我。没有服务员可以直接和厨师说话。军事纪律。"'
                },
                consequence: {
                    en: '✅ Order in Chaos. The noise drops. Efficiency rises. You take on a massive mental load, but the system works perfectly. You are the conductor.',
                    th: '✅ ระเบียบในความโกลาหล เสียงเงียบลง ประสิทธิภาพพุ่ง คุณแบกรับภาระสมองหนักมาก แต่ระบบรันได้สมบูรณ์แบบ คุณคือวาทยากร',
                    zh: '✅ 乱中有序。噪音下降。效率上升。你承担了巨大的精神负担，但系统运行完美。你是指挥家。'
                },
                stats: { competence: 50, ethics: 10, leadership: 40, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_015',
        text: {
            en: '📋 The Surprise Inspection: A Health Inspector walks in at 7 PM on a Friday. Your kitchen is messy from the rush. You have raw chicken on a cutting board next to lettuce (bad).',
            th: '📋 การตรวจแบบไม่ตั้งตัว: เจ้าหน้าที่สาธารณสุขเดินเข้ามาตอน 1 ทุ่มคืนวันศุกร์ ครัวคุณเละเทะเพราะออเดอร์ถล่ม มีไก่ดิบวางบนเขียงข้างผักกาดหอม (แย่แล้ว)',
            zh: '📋 突击检查：周五晚上7点，卫生检查员走进来了。你的厨房因为忙碌而一团糟。你的砧板上有生鸡肉，旁边是生菜（很糟）。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Stop Service: "ALL HANDS! STOP COOKING! CLEAN EVERYTHING! NOW! Ignore the tickets!"',
                    th: '🛑 หยุดบริการ: "ทุกคน! หยุดทำอาหาร! ทำความสะอาดทุกอย่าง! เดี๋ยวนี้! อย่าสนออเดอร์!"',
                    zh: '🛑 停止服务："所有人！停止烹饪！打扫一切！现在！别管订单了！"'
                },
                consequence: {
                    en: '🛡️ Passed but Costly. You get an \'A\' grade, but customers waited 45 minutes for food. The owner is furious about the delay, but relieved about the grade.',
                    th: '🛡️ ผ่านแต่เจ็บตัว ได้เกรด A แต่ลูกค้ารออาหาร 45 นาที เจ้าของโมโหที่ช้า แต่ก็โล่งใจที่เกรดดี',
                    zh: '🛡️ 通过但代价高昂。你得了"A"级，但客户等了45分钟才吃到饭。老板对延误非常愤怒，但对成绩感到欣慰。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🎭 Distract & Hyde: "Sous Chef, take him to the office, show him the logs, offer him coffee. Everyone else, HIDE the mess while he is distracted!"',
                    th: '🎭 เบี่ยงประเด็นแล้วซ่อน: "ซูเชฟ พาเขาไปที่ office เอาเอกสารให้ดู เสิร์ฟกาแฟ คนอื่นที่เหลือ ซ่อนความโสโครกเดี๋ยวนี้ตอนเขาเผลอ!"',
                    zh: '🎭 转移注意力并隐藏："副厨，带他去办公室，给他看记录，请他喝咖啡。其他人，趁他分心的时候把脏乱藏起来！"'
                },
                consequence: {
                    en: '✨ Sleight of Hand. It works. By the time he steps in the kitchen, the chicken is gone. You sweat bullets but pass. A risky gamble.',
                    th: '✨ เล่นกลชัดๆ มันได้ผล กว่าเขาจะเดินเข้ามาในครัว ไก่ก็หายไปแล้ว เหงื่อแตกพลั่กแต่ก็ผ่าน การพนันที่เสี่ยง',
                    zh: '✨ 手法。它有效。当他走进厨房时，鸡肉已经不见了。你大汗淋漓但通过了。一场冒险的赌博。'
                },
                stats: { competence: 40, ethics: -20, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '💰 The "Envelope": "Slip $200 into the logbook. Hand it to him. Wink. \'We are good, right?\'"',
                    th: '💰 "ซองขาว": "ยัดเงิน $200 ใส่สมุดบันทึก ยื่นให้เขา ขยิบตา \'เรียบร้อยดีใช่ไหมครับ?\'"',
                    zh: '💰 "信封"："把200美元塞进记录本。递给他。眨眨眼。\'我们没问题吧？\'"'
                },
                consequence: {
                    en: '💀 Attempted Bribery. He is honest. He reports you. You get a massive fine and a "C" grade in the window. The shame is public.',
                    th: '💀 พยายามติดสินบน เขาเป็นตงฉิน รายงานเรื่องคุณ คุณโดนปรับอ่วมและได้เกรด "C" แปะหน้าร้าน อับอายขายขี้หน้าประชาชี',
                    zh: '💀 贿赂未遂。他很诚实。他举报了你。你被巨额罚款，窗口贴上了"C"级。公开的耻辱。'
                },
                stats: { competence: -20, ethics: -80, leadership: -40, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Power Through: "Just cook. Maybe he won\'t see it. The rush is too important. If we get a B, we get a B."',
                    th: '🤷 ลุยต่อ: "ทำไปเถอะ เขาอาจไม่เห็นหรอก ช่วงยุ่งสำคัญกว่า ถ้าได้เกรด B ก็ช่างมัน"',
                    zh: '🤷 硬撑："照常烹饪。也许他看不见。高峰期太重要了。如果我们得B，那就得B吧。"'
                },
                consequence: {
                    en: '📉 Critical Violation. He sees it immediately. "Cross-contamination hazard." He deducts massive points. You get a B. Customers notice the sign.',
                    th: '📉 ละเมิดร้ายแรง เขาเห็นเต็มตา "ความเสี่ยงปนเปื้อนข้าม" เขาหักคะแนนยับ คุณได้เกรด B ลูกค้าเห็นป้ายด้วย',
                    zh: '📉 严重违规。他立刻就看见了。"交叉污染隐患。"他扣了大量分数。你得了B。客户注意到了标志。'
                },
                stats: { competence: -10, ethics: -10, leadership: -10, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_016',
        text: {
            en: '🎸 The Lazy Star: Your Grill Chef is a meat genius. Best steaks in the city. But he is late, drunk, or messy. The team hates him. The customers love him.',
            th: '🎸 เดอะเลซี่สตาร์: เชฟย่างของคุณเป็นอัจฉริยะเรื่องเนื้อ สเต็กอร่อยสุดในเมือง แต่เขามาสาย เมา หรือสกปรก ทีมงานเกลียดเขา แต่ลูกค้ารักเขา',
            zh: '🎸 懒惰的明星：你的烧烤厨师是肉类天才。全城最好的牛排。但他经常迟到、醉酒或邋遢。团队讨厌他。客户只要他的菜。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Fire Him: "Talent doesn\'t excuse toxicity. You are rotting my team. Get out. I will cook the meat myself until I find a replacement."',
                    th: '🔥 ไล่ออก: "พรสวรรค์ไม่ใช่ข้ออ้างของนิสัยเสีย นายทำให้ทีมเน่าเฟะ ออกไป ผมจะย่างเองจนกว่าจะหาคนใหม่ได้"',
                    zh: '🔥 解雇他："才华不是有毒的借口。你在腐蚀我的团队。滚出去。在找到替补之前我会自己烤肉。"'
                },
                consequence: {
                    en: '🛡️ Team Morale Up. The kitchen cheers. Efficiency improves because there is no drama. Food quality dips slightly (9/10), but consistency is up.',
                    th: '🛡️ ขวัญกำลังใจพุ่ง ครัวเฮกันลั่น ประสิทธิภาพดีขึ้นเพราะไม่มีดราม่า คุณภาพเนื้อตกลงนิดหน่อย (9/10) แต่ความสม่ำเสมอดีขึ้น',
                    zh: '🛡️ 团队士气高涨。厨房欢呼。效率提高，因为没有戏剧化。食物质量略有下降（9/10），但一致性提高了。'
                },
                stats: { competence: 20, ethics: 40, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '👁️ Micro-Manage: "Stand over his shoulder. Force him to shower. Check his station every 10 mins. Treat him like a child."',
                    th: '👁️ จับตามอง: "ยืนคุมเขาทุกฝีก้าว บังคับให้ไปอาบน้ำ เช็กสเตชั่นทุก 10 นาที ปฏิบัติกับเขาเหมือนเด็ก"',
                    zh: '👁️ 微观管理："站在他身后。强迫他洗澡。每10分钟检查一次他的工位。像对待孩子一样对待他。"'
                },
                consequence: {
                    en: '💤 Exhausting. You get the results, but you have no time for anything else. You are babysitting. Stamina -30.',
                    th: '💤 เหนื่อยโฮก คุณได้ผลลัพธ์ก็จริง แต่ไม่มีเวลาทำอย่างอื่นเลย คุณกลายเป็นพี่เลี้ยงเด็กไปแล้ว ความอึด -30',
                    zh: '💤 精疲力竭。你得到了结果，但你没有时间做其他任何事情。你在当保姆。耐力-30。'
                },
                stats: { competence: 30, ethics: 10, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🍻 The Buddy Talk: "Take him out for drinks. \'What\'s wrong, man?\' Try to fix the human, not the employee."',
                    th: '🍻 ปรับทุกข์: "พาเขาไปดื่ม \'เป็นอะไรเพื่อน?\' พยายามแก้ที่คน ไม่ใช่ที่พนักงาน"',
                    zh: '🍻 谈心："带他出去喝一杯。\'怎么了，伙计？\' 试图治愈这个人，而不是修理员工。"'
                },
                consequence: {
                    en: '🤝 Loyal Disciple. He breaks down crying. He has personal issues. You help him. He cleans up his act and becomes your best soldier. High Risk/Reward.',
                    th: '🤝 สาวกผู้ภักดีเขาร้องไห้โฮ เขามีปัญหาส่วนตัว คุณช่วยเขา เขาปรับปรุงตัวและกลายเป็นทหารเอกของคุณ ความเสี่ยง/ผลตอบแทนสูง',
                    zh: '🤝 忠诚的信徒。他崩溃大哭。他有个人问题。你帮助了他。他改过自新，成为你最好的战士。高风险/回报。'
                },
                stats: { competence: 20, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Ignore It: "As long as the steaks are perfect, I don\'t care if he comes in naked. Results matter. The team needs to toughen up."',
                    th: '🤷 ช่างหัวมัน: "ตราบใดที่สเต็กยังเป๊ะ ฉันไม่สนหรอกว่าเขาจะแก้ผ้ามาทำงาน ผลลัพธ์คือทุกอย่าง ทีมต้องหัดทนซะบ้าง"',
                    zh: '🤷 无视它："只要牛排完美，哪怕他光着身子来我也不在乎。结果才是最重要的。团队需要坚强点。"'
                },
                consequence: {
                    en: '📉 Mutiny. Your Sous Chef quits in protest. "You care more about meat than people." Toxic culture sets in.',
                    th: '📉 ก่อกบฏ ซูเชฟลาออกเพื่อประท้วง "คุณสนเนื้อมากกว่าคน" วัฒนธรรมองค์กรเป็นพิษเริ่มก่อตัว',
                    zh: '📉 兵变。你的副厨辞职抗议。"你在乎肉比在乎人多。"有毒文化开始蔓延。'
                },
                stats: { competence: 10, ethics: -40, leadership: -50, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_017',
        text: {
            en: '❤️ The Reservation Error: The host double-booked the entire restaurant on Valentine\'s Day. 50 couples are outside waiting. You have 25 tables. Chaos.',
            th: '❤️ ข้อผิดพลาดการจอง: โฮสต์รับจองซ้อนทั้งร้านในวันวาเลนไทน์ คู่รัก 50 คูารออยู่ข้างนอก คุณมีแค่ 25 โต๊ะ โกลาหลแล้ว',
            zh: '❤️ 预订错误：接待员在情人节把整个餐厅都重复预订了。50对情侣在外面等候。你只有25张桌子。混乱。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⏱️ Speed Dating Service: "Turn tables in 45 mins. Remove the entrees. Serve a set \'Express Love\' menu (Appetizer + Dessert + Drink). Cycle them fast."',
                    th: '⏱️ สปีดเดท: "เร่งรอบโต๊ะเป็น 45 นาที ตัดเมนูหลักออก เสิร์ฟเซ็ต \'รักด่วน\' (เรียกน้ำย่อย + ขนม + เครื่องดื่ม) หมุนคนให้ไว"',
                    zh: '⏱️ 快速约会服务："45分钟翻台。去掉主菜。供应一套\'特快爱情\'菜单（开胃菜+甜点+饮料）。快速轮换他们。"'
                },
                consequence: {
                    en: '💰 Maximum Profit. You served everyone. Food cost was low. Customers felt rushed but hey, they got a table. Finance +50.',
                    th: '💰 กำไรสูงสุด คุณเสิร์ฟครบทุกคน ต้นทุนอาหารต่ำ ลูกค้ารู้สึกโดนเร่งแต่ก็ได้โต๊ะนะ การเงิน +50',
                    zh: '💰 最大利润。你为每个人提供了服务。食物成本很低。顾客感到匆忙，但嘿，他们有桌子坐。财务+50。'
                },
                stats: { competence: 40, ethics: 0, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🥂 Free Champagne: "Apologize profusely. Hand out free expensive champagne to the line outside. Set up heating lamps. Buy their patience."',
                    th: '🥂 แชมเปญฟรี: "ขอโทษอย่างสุดซึ้ง แจกแชมเปญแพงๆ ให้คนที่รอ ตั้งเครื่องทำความร้อน ซื้อความอดทนของพวกเขา"',
                    zh: '🥂 免费香槟："拼命道歉。给外面排队的人分发昂贵的免费香槟。架设加热灯。收买他们的耐心。"'
                },
                consequence: {
                    en: '📉 Profit Hit / Rep Save. You lost $2,000 on champagne, but check averages were high once seated. No bad reviews. Crisis managed.',
                    th: '📉 กำไรหด / กู้ชื่อเสียง เสียค่าแชมเปญไป $2,000 แต่ยอดต่อหัวสูงเมื่อได้นั่ง ไม่มีรีวิวแย่ จัดการวิกฤตได้',
                    zh: '📉 利润受损/挽回声誉。你在香槟上损失了2000美元，但一旦入座，平均消费很高。没有差评。危机得以通过。'
                },
                stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🎲 The Lottery: "Randomly select 25 couples. Send the rest home with a $50 voucher. Tell them the truth. Be brutal."',
                    th: '🎲 ลอตเตอรี่: "สุ่มเลือก 25 คู่ ที่เหลือไล่กลับบ้านพร้อมบัตรกำนัล $50 บอกความจริงไปเลย โหดร้ายหน่อย"',
                    zh: '🎲 彩票："随机抽取25对。把剩下的人送回家并给50美元代金券。告诉他们真相。残酷点。"'
                },
                consequence: {
                    en: '💀 Social Media Storm. "Ruined Valentine\'s Day!" People are crying. The vouchers are useless if they never come back. PR Disaster.',
                    th: '💀 พายุโซเชียล "วาเลนไทน์พังยับ!" คนร้องไห้ บัตรกำนัลไร้ค่าถ้าเขาไม่กลับมาอีก หายนะ PR',
                    zh: '💀 社交媒体风暴。"毁了情人节！"人们在哭。如果他们再也不来，代金券就没用了。公关灾难。'
                },
                stats: { competence: 10, ethics: -20, leadership: -20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🪑 Squeeze Them In: "Bring in folding tables from the basement. Seat people in the hallway, near the toilets, everywhere. It\'s cozy!"',
                    th: '🪑 ยัดเยียด: "ไปเอาโต๊ะพับมาจากห้องเก็บของ ให้คนนั่งในทางเดิน ใกล้ห้องน้ำ นั่งทุกที่ อบอุ่นดีออก!"',
                    zh: '🪑 挤一挤："从地下室搬来折叠桌。让人们坐在走廊里，靠近厕所，任何地方。很温馨！"'
                },
                consequence: {
                    en: '📉 Quality Collapse. The kitchen can\'t handle 50 tables at once. Food is cold. Waiters trip over guests. A nightmare service.',
                    th: '📉 คุณภาพพังทลาย ครัวรับมือ 50 โต๊ะพร้อมกันไม่ไหว อาหารเย็นชืด เด็กเสิร์ฟเดินสะดุดขาแขก การบริการฝันร้าย',
                    zh: '📉 质量崩塌。厨房无法同时应付50张桌子。食物是冷的。服务员被客人绊倒。一场噩梦般的服务。'
                },
                stats: { competence: -20, ethics: -10, leadership: 0, innovation: 10 }
            }
        ]
    },

    {
        id: 'chef_018',
        text: {
            en: '📜 Menu Stagnation: Sales are flat. Regulars are bored. You haven\'t changed the menu in 6 months. You feel uninspired.',
            th: '📜 เมนูจำเจ: ยอดขายทรงตัว ลูกค้าประจำเริ่มเบื่อ คุณไม่ได้เปลี่ยนเมนูมา 6 เดือนแล้ว คุณรู้สึกหมดไฟ',
            zh: '📜 菜单停滞：销售持平。常客感到厌倦。你已经6个月没换菜单了。你感觉缺乏灵感。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💣 Total Overhaul: "Change EVERYTHING. New concept. New dishes. Scare the regulars to attract new blood. High Risk."',
                    th: '💣 โละใหม่หมด: "เปลี่ยน *ทุกอย่าง* คอนเซปต์ใหม่ จานใหม่ ขู่ลูกค้าประจำให้กลัวเพื่อดึงคนรุ่นใหม่ ความเสี่ยงสูง"',
                    zh: '💣 彻底改革："改变一切。新概念。新菜式。吓跑常客以吸引新鲜血液。高风险。"'
                },
                consequence: {
                    en: '🎲 Rebirth or Death. Old customers leave. New hipsters arrive. You survive, but the identity of the restaurant has changed permanently. Innovation +100.',
                    th: '🎲 เกิดใหม่หรือดับสูญ ลูกค้าเก่าหาย ฮิปสเตอร์ใหม่มาแทน คุณรอด แต่ตัวตนของร้านเปลี่ยนไปตลอดกาล นวัตกรรม +100',
                    zh: '🎲 重生或死亡。老顾客离开。新潮人到来。你活下来了，但餐厅的身份永久改变了。创新+100。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🍂 Seasonal Specials: "Keep the core menu. Add 3 seasonal dishes that rotate weekly. Test the waters without burning the boat."',
                    th: '🍂 เมนูตามฤดูกาล: "เก็บเมนูหลักไว้ เพิ่ม 3 เมนูตามฤดูกาลหมุนเวียนทุกอาทิตย์ ลองเชิงดูแบบไม่เผาเรือทิ้ง"',
                    zh: '🍂 季节性特价："保留核心菜单。增加3道每周轮换的时令菜。在不烧船的情况下试水。"'
                },
                consequence: {
                    en: '✅ Safe Evolution. Regulars are happy you kept the favorites. New dishes add excitement. Revenue bumps up 10%.',
                    th: '✅ วิวัฒนาการที่ปลอดภัย ลูกค้าประจำดีใจที่คุณเก็บจานโปรดไว้ จานใหม่เพิ่มสีสัน รายได้เพิ่ม 10%',
                    zh: '✅ 安全进化。常客很高兴你保留了最爱。新菜增添了兴奋感。收入增加10%。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🍔 Copy the Trend: "Everyone is doing smash burgers and hot chicken. Let\'s do that. It\'s guaranteed money."',
                    th: '🍔 เกาะกระแส: "ใครๆ ก็ทำสแมชเบอร์เกอร์กับไก่เผ็ด เราทำบ้าง เงินชัวร์ๆ"',
                    zh: '🍔 紧跟潮流："大家都在做压扁汉堡和辣鸡。我们也做。这是保证赚钱的。"'
                },
                consequence: {
                    en: '🤡 Basic. You get a sales bump, but you are now just a copycat. The soul of your cooking dies a little more.',
                    th: '🤡 ดาษดื่น ยอดขายพุ่งนะ แต่ตอนนี้คุณเป็นแค่พวกก๊อปชาวบ้าน วิญญาณการทำอาหารคุณตายลงอีกนิด',
                    zh: '🤡 基础。你的销售额增加了，但你现在只是个模仿者。你的烹饪灵魂又死了一点。'
                },
                stats: { competence: 10, ethics: 0, leadership: 0, innovation: -40 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Guest Chef Series: "Invite a friend from a different cuisine to do a pop-up menu for a week. Create hype through collaboration."',
                    th: '🤝 ซีรีส์เชฟรับเชิญ: "เชิญเพื่อนเชฟสายอื่นมาทำเมนู Pop-up สักอาทิตย์ สร้างกระแสผ่านการร่วมมือ"',
                    zh: '🤝 客座厨师系列："邀请一位不同菜系的朋友做一周的快闪菜单。通过合作制造炒作。"'
                },
                consequence: {
                    en: '✨ PR Gold. The media loves it. "East meets West at Chef\'s Table." You learn new techniques and gain followers.',
                    th: '✨ ทองคำแห่ง PR สื่อชอบมาก "ตะวันออกพบตะวันตกที่โต๊ะเชฟ" คุณได้เรียนรู้เทคนิคใหม่และได้ผู้ติดตามเพิ่ม',
                    zh: '✨ 公关金矿。媒体非常喜欢。"东西方在主厨餐桌相遇。"你学到了新技术并获得了粉丝。'
                },
                stats: { competence: 30, ethics: 20, leadership: 40, innovation: 60 }
            }
        ]
    },

    {
        id: 'chef_019',
        text: {
            en: '🤳 The Influencer Group: A TikTok food collective (5 million followers) wants a free meal ($400 value) in exchange for "exposure".',
            th: '🤳 กลุ่มแก๊งคอนเทนต์: แก๊ง TikTok อาหาร (ผู้ติดตาม 5 ล้าน) ขอกินฟรี (มูลค่า $400) แลกกับ "Exposure" (การโปรโมท)',
            zh: '🤳 网红团体：一个TikTok美食团体（500万粉丝）想要免费用餐（价值400美元）以换取"曝光"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '😡 Reject: "Pay for your food like everyone else. Exposure doesn\'t pay my rent. Get a job!"',
                    th: '😡 ปฏิเสธ: "จ่ายเงินเหมือนคนอื่นเถอะครับ ค่าโปรโมทมันเอาไปจ่ายค่าเช่าไม่ได้ หางานทำซะ!"',
                    zh: '😡 拒绝："像其他人一样付钱。曝光度付不了我的房租。找份工作去！"'
                },
                consequence: {
                    en: '🛡️ Street Cred. Industry people love you for standing up to them. But they post a video saying you were "rude". It gets 1M views. Haters attack.',
                    th: '🛡️ ได้ใจคนวงการ คนทำงานด้วยกันรักที่คุณกล้าชน แต่เขาโพสต์คลิปหาว่าคุณ "หยาบคาย" คนดู 1 ล้าน ด่ากันระงม',
                    zh: '🛡️ 街头声誉。业内人士因你挺身而出而爱你。但他们发了一段视频说你"粗以此"。有100万次观看。黑粉攻击。'
                },
                stats: { competence: 10, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤩 Accept: "Hell yes. Roll out the red carpet. Give them extra dishes. If they post, we are booked for months."',
                    th: '🤩 รับข้อเสนอ: "จัดไปสิครับ ปูพรมแดงเลย แถมอาหารให้ด้วย ถ้าเขาโพสต์ เราคิวเต็มเป็นเดือนแน่"',
                    zh: '🤩 接受："当然。铺上红地毯。给他们加菜。如果他们发帖，我们未来几个月的预订就满了。"'
                },
                consequence: {
                    en: '📈 Viral Success. They love it. The video blows up. You have a line forming down the block at 5 PM. But now you serve hypebeasts, not foodies.',
                    th: '📈 ความสำเร็จไวรัล เขาชอบมาก คลิปดังระเบิด คนต่อคิวยาวเหยียดตอน 5 โมงเย็น แต่ตอนนี้คุณเสิร์ฟพวกบ้ากระแส ไม่ใช่นักชิม',
                    zh: '📈 病毒式成功。他们很喜欢。视频爆红。下午5点街区就排起了长队。但现在你服务的是跟风者，而不是美食家。'
                },
                stats: { competence: 20, ethics: 0, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🎭 The Trap: "Give them the meal, but make it average. See if they are honest or just shills. Test their integrity."',
                    th: '🎭 วางกับดัก: "ให้กินฟรี แต่ทำรสชาติธรรมดาๆ ดูซิว่าเขาจะรีวิวตรงไหมหรือแค่อวย ทดสอบความซื่อสัตย์"',
                    zh: '🎭 陷阱："给他们饭吃，但做得一般。看看他们是诚实还是只是托儿。测试他们的正直。"'
                },
                consequence: {
                    en: '🤡 They Loved It. They rave about the mediocre food. You confirm they are fake. You feel superior, but you wasted $400.',
                    th: '🤡 พวกเขาชอบเฉย เขาอวยอาหารรสชาติงั้นๆ ยืนยันได้ว่าเป็นของปลอม คุณรู้สึกเหนือกว่า แต่เสียเงินไป $400 ฟรีๆ',
                    zh: '🤡 他们很喜欢。他们以此吹捧平庸的食物。你确认他们是假的。你觉得优越，但你浪费了400美元。'
                },
                stats: { competence: 0, ethics: 20, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Negotiate: "50% off. You get a discount, I get a post. Business transaction. No free rides."',
                    th: '🤝 ต่อรอง: "ลด 50% คุณได้ส่วนลด ผมได้โพสต์ ธุรกิจคือธุรกิจ ไม่มีใครได้กินฟรี"',
                    zh: '🤝 谈判："打五折。你得到折扣，我得到帖子。商业交易。没有免费的午餐。"'
                },
                consequence: {
                    en: '✅ Fair Deal. They agree. It respects both sides. You get some promotion without looking desperate. Professionalism win.',
                    th: '✅ ดีลที่ยุติธรรม เขาตกลง ให้เกียรติทั้งสองฝ่าย คุณได้โปรโมทโดยไม่ดูหน้ามืดตามัว ชนะด้วยความเป็นมืออาชีพ',
                    zh: '✅ 公平交易。他们同意。这尊重双方。你得到了一些推广，而不显得绝望。专业精神的胜利。'
                },
                stats: { competence: 40, ethics: 10, leadership: 30, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_020',
        text: {
            en: '🛵 The Delivery Dilemma: Revenue is down. Apps like UberEats want you to join. 30% commission. Your food gets soggy in boxes. Do you join?',
            th: '🛵 ปัญหาเดลิเวอรี่: รายได้ตก แอพฯ อย่าง UberEats ชวนเข้าร่วม คอมฯ 30% อาหารคุณใส่กล่องแล้วเหี่ยว คุณจะเอามั้ย?',
            zh: '🛵 外卖困境：收入下降。UberEats等应用想让你加入。30%佣金。你的食物在盒子里会变软。你加入吗？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Join Anyway: "We need the cash flow. Who cares if the fries are soggy? Money is money. Survival mode."',
                    th: '💰 เข้าๆ ไปเถอะ: "เราต้องการกระแสเงินสด ใครจะสนว่าเฟรนช์ฟรายส์เหี่ยว? เงินก็คือเงิน โหมดเอาตัวรอด"',
                    zh: '💰 无论如何加入："我们需要现金流。谁在乎薯条是不是湿的？钱就是钱。生存模式。"'
                },
                consequence: {
                    en: '📉 Brand Dilution. You make money, but 1-star reviews pile up. "Food was cold and gross." You traded reputation for rent money.',
                    th: '📉 แบรนด์เจือจาง ได้เงินนะ แต่ 1 ดาวมาเพียบ "อาหารเย็นและแหยะ" คุณแลกชื่อเสียงกับค่าเช่า',
                    zh: '📉 品牌稀释。你赚到了钱，但1星评论堆积如山。"食物又冷又恶心。"你用声誉换取了房租。'
                },
                stats: { competence: 10, ethics: -20, leadership: -10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '👻 Ghost Kitchen: "Create a separate brand just for delivery. \'Bob\'s Burger Shack\'. Cheap ingredients, high margin. Protect the main brand."',
                    th: '👻 ครัวผี (Ghost Kitchen): "สร้างแบรนด์แยกสำหรับส่งอย่างเดียว \'เบอร์เกอร์ลุงบอม\' วัตถุดิบถูก กำไรสูง ปกป้องแบรนด์หลักไว้"',
                    zh: '👻 幽灵厨房："创建一个专门用于外卖的品牌。\'鲍勃汉堡小屋\'。便宜的原料，高利润。保护主品牌。"'
                },
                consequence: {
                    en: '✨ Business Masterclass. The cheap burgers fly out the door. The main restaurant stays pristine. You essentially run two businesses now. Profit ++.',
                    th: '✨ คลาสธุรกิจชั้นครู เบอร์เกอร์ถูกๆ ขายดีเป็นเทน้ำเทท่า ร้านหลักยังดูดีหรูหรา เท่ากับคุณทำสองธุรกิจแล้ว กำไร ++',
                    zh: '✨ 商业大师课。便宜的汉堡卖得飞快。主餐厅保持完美。你现在基本上在经营两家生意。利润++。'
                },
                stats: { competence: 50, ethics: 10, leadership: 40, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '❌ Refuse: "My food is meant to be eaten HERE. I will not compromise quality for a few dollars. Cut staff hours instead."',
                    th: '❌ ปฏิเสธ: "อาหารผมต้องกินที่ *นี่* เท่านั้น ผมไม่ยอมลดคุณภาพเพื่อเงินไม่กี่บาท ลดชั่วโมงพนักงานแทน"',
                    zh: '❌ 拒绝："我的食物注定要在**这里**吃。我不会为了几块钱而牺牲质量。缩减员工工时来代替。"'
                },
                consequence: {
                    en: '🛡️ Integrity Protected. Revenue stays low, and staff is unhappy about hour cuts, but the food remains perfect. A hard road.',
                    th: '🛡️ รักษาอุดมการณ์ รายได้ยังต่ำ พนักงานบ่นเรื่องลดชั่วโมง แต่อาหารยังเป๊ะเหมือนเดิม ทางที่ยากลำบาก',
                    zh: '🛡️ 保持正直。收入保持低位，员工对削减工时不以，但食物保持完美。一条艰难的路。'
                },
                stats: { competence: 20, ethics: 40, leadership: -10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🚗 In-House Delivery: "Hire our own driver. Keep the 30%. Use special vented packaging. Control the quality. High logistical headache."',
                    th: '🚗 ส่งเอง: "จ้างคนขับเอง เก็บ 30% ไว้ ใช้กล่องระบายอากาศแบบพิเศษ คุมคุณภาพ แต่ปวดหัวเรื่องจัดการสุดๆ"',
                    zh: '🚗 内部配送："雇佣我们自己的司机。省下那30%。使用特殊的透气包装。控制质量。巨大的后勤头痛。"'
                },
                consequence: {
                    en: '⚙️ Operational Nightmare / Quality Win. The food arrives hot. Customers appreciate it. But managing drivers is a full-time job. Stress +50.',
                    th: '⚙️ ฝันร้ายฝ่ายปฏิบัติการ / ชนะคุณภาพ อาหารส่งถึงร้อนจี๋ ลูกค้าประทับใจ แต่บริหารคนขับนี่งานช้าง ความเครียด +50",',
                    zh: '⚙️ 运营噩梦/质量胜利。食物热腾腾地送达。客户很感激。但管理司机是一份全职工作。压力+50。"'
                },
                stats: { competence: 30, ethics: 10, leadership: 40, innovation: 20 }
            }
        ]
    },

    {
        id: 'chef_021',
        text: {
            en: '❄️ The Meltdown: The walk-in freezer compressor dies on the hottest day of the year. $10,000 worth of Wagyu and Foie Gras is melting. Repair guy ends in 4 hours.',
            th: '❄️ ละลาย: คอมเพรสเซอร์ห้องเย็นพังในวันที่ร้อนที่สุดของปี วากิวและฟัวกราส์มูลค่า $10,000 กำลังละลาย ช่างจะมาในอีก 4 ชั่วโมง',
            zh: '❄️ 融化：步入式冷冻库的压缩机在一年中最热的一天坏了。价值10,000美元的和牛和鹅肝正在融化。修理工要4小时后才到。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧊 Ice Run: "Send the dishwasher to buying every bag of ice in the city. Build an igloo around the meat. Pray."',
                    th: '🧊 วิ่งซื้อน้ำแข็ง: "ส่งคนล้างจานไปกวาดซื้อน้ำแข็งทุกถุงในเมือง สร้างกระท่อมน้ำแข็งรอบเนื้อ สวดภาวนา"',
                    zh: '🧊 跑腿买冰："派洗碗工去买城里所有的冰袋。在肉周围建一个冰屋。祈祷。"'
                },
                consequence: {
                    en: '🛡️ Saved (Mostly). You save 80% of the product. The staff works hard hauling ice. You bond over the crisis. Cost: $200 for ice.',
                    th: '🛡️ รอด (ส่วนใหญ่) คุณรักษาของไว้ได้ 80% พนักงานเหนื่อยขนน้ำแข็ง คุณสนิทกันมากขึ้นผ่านวิกฤต ต้นทุน: $200 ค่าน้ำแข็ง',
                    zh: '🛡️以此（以此）。你以此了80%的产品。员工以此以此冰块。你们在以此中以此。成本：200美元买冰。'
                },
                stats: { competence: 30, ethics: 10, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🔥 Fire Sale: "Cook it all! Special Menu tonight: Wagyu Burgers for $10! Everything must go! Get the customers in NOW!"',
                    th: '🔥 เลหลัง: "ปรุงให้หมด! เมนูพิเศษคืนนี้: เบอร์เกอร์วากิว $10! ทุกอย่างต้องออก! เรียกลูกค้าเข้ามาเดี๋ยวนี้!"',
                    zh: '🔥 大甩卖："全都煮了！今晚特价菜单：和牛汉堡10美元！以此以此！以此以此以此！"'
                },
                consequence: {
                    en: '💰 Chaos & Cash. The restaurant is packed. You make money back, but lose potential high-margin profit. Fun chaos.',
                    th: '💰 โกลาหลและเงินสด ร้านแน่นขนัด คุณได้ทุนคืน แต่เสียโอกาสทำกำไรสูง ความวุ่นวายที่สนุกดี',
                    zh: '💰 混乱与现金。餐厅爆满。你赚回了钱，但失去了潜在的高利润。有趣的混乱。'
                },
                stats: { competence: 20, ethics: 10, leadership: 20, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🚑 Emergency Service: "Pay the weekend surcharge. $3,000 to get a guy here in 30 mins. Just pay it."',
                    th: '🚑 บริการฉุกเฉิน: "จ่ายค่าบริการวันหยุด $3,000 ให้ช่างมาใน 30 นาที จ่ายๆ ไปเถอะ"',
                    zh: '🚑 紧急服务："支付周末附加费。3000美元让以此在30分钟以此以此。以此以此。"'
                },
                consequence: {
                    en: '💸 Painful but Safe. The food is perfect. The bank account hurts. You chose quality over profit margin.',
                    th: '💸 เจ็บแต่จบ ของปลอดภัย บัญชีธนาคารเจ็บปวด คุณเลือกคุณภาพมากกว่ากำไร',
                    zh: '💸 痛苦但安全。食物完美。银行账户以此。你以此以此以此利润。'
                },
                stats: { competence: 40, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Risk It: "It\'s insulated. Don\'t open the door. It will probably hold temperature... probably."',
                    th: '🤷 เสี่ยงดวง: "ผนังมันกันความร้อน อย่าเปิดประตู อุณหภูมิน่าจะอยู่ได้... น่าจะนะ"',
                    zh: '🤷 冒险："它是隔热的。别开门。它可能会保持温度……可能。"'
                },
                consequence: {
                    en: '💀 Spoilage. The temperature spiked. Next day, the meat smells off. You have to throw away $5,000 of product. Failure.',
                    th: '💀 เน่าเสีย อุณหภูมิพุ่ง วันต่อมาเนื้อมีกลิ่น คุณต้องทิ้งของมูลค่า $5,000 ล้มเหลว',
                    zh: '💀 变质。温度飙升。第二天，肉闻起来不对劲。你不得不扔掉价值5000美元的产品。失败。'
                },
                stats: { competence: -30, ethics: -20, leadership: -10, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_022',
        text: {
            en: '🚑 The Scald: A junior cook slips and spills boiling veal stock on his arm. Skin is peeling. It\'s 8 PM, peak service.',
            th: '🚑 น้ำร้อนลวก: กุ๊กจูเนียร์ลื่นทำน้ำสต็อกลูกวัวเดือดๆ รดแขน หนังลอกเลย ตอนนี้ 2 ทุ่ม ช่วงพีคสุดๆ',
            zh: '🚑 烫伤：一个初级厨师滑倒了，沸腾的小牛肉高汤泼在了他的手臂上。皮都脱落了。现在是晚上8点，服务高峰期。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Hospital NOW: "Drop everything. Sous Chef, drive him to the ER. We will run short-staffed. Go!"',
                    th: '🛑 ไปโรงพยาบาลเดี๋ยวนี้: "วางมือทุกอย่าง ซูเชฟ ขับรถพาเขาไปห้องฉุกเฉิน เราจะลุยแบบคนขาด ไป!"',
                    zh: '🛑 马上送医："放下一切。副厨，开车送他去急诊室。我们会人手不足。去！"'
                },
                consequence: {
                    en: '❤️ Leader of People. The team sees you care. Service is hellishly slow, guests complain, but your staff loyalty maxes out. Human life first.',
                    th: '❤️ ผู้นำที่ครองใจคน ทีมเห็นว่าคุณห่วงใย บริการช้าเป็นนรก แขกบ่น แต่ความภักดีของพนักงานพุ่งทะลุหลอด ชีวิตคนต้องมาก่อน',
                    zh: '❤️以此以此。团队看到你在乎。服务慢得像地狱，客人抱怨，但你的员工忠诚度以此。以此以此以此。'
                },
                stats: { competence: 10, ethics: 50, leadership: 60, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧂 "Walk it Off": "Put some burn cream and cling wrap on it. Take an Ibuprofen. We need you on the line. Deal with it later."',
                    th: '🧂 "ทนหน่อย": "ทายาแก้เบิร์นแล้วพันพลาสติกแรปไว้ กินยาแก้ปวด ซะ เราต้องการนายหน้าเตา ไว้ค่อยว่ากัน"',
                    zh: '🧂 "走两步就好"："涂点烫伤膏，以此以此以此。吃片布洛芬。我们需要你在以此。以此以此。" '
                },
                consequence: {
                    en: '⚠️ Brutal Industry Standards. He works in pain. The burn gets infected later. He resents you forever. You prioritized the ticket over the human.',
                    th: '⚠️ มาตรฐานโหดร้ายของวงการ เขาทำงานทั้งที่เจ็บ แผลติดเชื้อทีหลัง เขาแค้นคุณไปตลอดกาล คุณเลือกออเดอร์มากกว่าคน',
                    zh: '⚠️以此以此以此。他在痛苦中工作。以此后来以此了。他以此以此你。你把订单以此以此以此。'
                },
                stats: { competence: 20, ethics: -40, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🏠 Send Home: "Go home, take care of that. I will jump on your station. I can cook and expo at the same time."',
                    th: '🏠 กลับบ้านไป: "กลับบ้านไปดูแลแผล ผมจะเข้าสเตชั่นคุณเอง ผมทำอาหารพร้อมคุมงานได้"',
                    zh: '🏠 送回家："回家，以此以此以此。我去你的工位。我可以以此以此以此。" '
                },
                consequence: {
                    en: '🦸 Hero Mode. You crush the service, but you are utterly exhausted. You prove you are the best cook in the kitchen.',
                    th: '🦸 โหมดฮีโร่ คุณเอาอยู่ แต่เหนื่อยแทบขาดใจ คุณพิสูจน์แล้วว่าคุณคือพ่อครัวที่เก่งที่สุดในครัวนี้',
                    zh: '🦸 英雄模式。你以此了服务，但你以此以此。你证明了你是厨房里最好的厨师。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '😡 Blame Him: "You clumsy idiot! You ruined the stock! Clean this up before you go anywhere!"',
                    th: '😡 ด่ามัน: "ไอ้ซุ่มซ่าม! ทำน้ำสต็อกเสียของหมด! เช็ดเดี๋ยวนี้ก่อนจะไปไหน!"',
                    zh: '😡 怪他："你这个以此以此！你毁了高汤！去哪里之前先把这里以此以此！"'
                },
                consequence: {
                    en: '📉 Toxic Villain. The whole kitchen stops and stares. You have lost the room. Fear rules, but respect is gone.',
                    th: '📉 ตัวร้ายพ่นพิษ ทั้งครัวหยุดและมองคุณ คุณเสียศรัทธาจากลูกน้อง ความกลัวเข้าปกครอง แต่ความเคารพหายเกลี้ยง',
                    zh: '📉 有毒的反派。整个厨房都停下来以此。你以此了人心。恐惧统治，但尊重消失了。'
                },
                stats: { competence: -10, ethics: -50, leadership: -60, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_023',
        text: {
            en: '💻 System Down: The Point of Sale (POS) system crashes. No tickets printing. Servers are running in screaming orders. Total chaos.',
            th: '💻 ระบบล่ม: ระบบคิดเงิน (POS) ล่ม ตั๋วไม่ออก เด็กเสิร์ฟวิ่งเข้ามาตะโกนสั่งออเดอร์ โกลาหลสุดๆ',
            zh: '💻 系统以此：销售点 (POS) 系统崩溃。没有小票以此。服务员以此以此以此订单。以此混乱。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📝 Analog Mode: "HANDWRITTEN TICKETS ONLY! One line at a time. Slow down the seating. We go Old School."',
                    th: '📝 โหมดอนาล็อก: "เขียนตั๋วด้วยมือเท่านั้น! เข้าแถวมาทีละคน ชะลอการรับลูกค้า เราจะใช้วิธีรุ่นเก๋า"',
                    zh: '📝 模拟模式："只收手写票！一次排一队。放慢以此速度。我们走老派路线。"'
                },
                consequence: {
                    en: '✅ Controlled Chaos. It\'s slower, but accurate. The kitchen adapts. You survive the night with minimal errors.',
                    th: '✅ คุมความโกลาหล ช้าหน่อย แต่แม่นยำ ครัวปรับตัวได้ คุณรอดพ้นคืนนี้โดยมีข้อผิดพลาดน้อยที่สุด',
                    zh: '✅以此混乱。比较慢，但准确。厨房适应了。你以此极少的以此度过了这一夜。'
                },
                stats: { competence: 40, ethics: 10, leadership: 30, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🗣️ The Barker: "No tickets! Tell me what you need! I will remember it! I have a photographic memory!"',
                    th: '🗣️ ตะโกนสั่ง: "ไม่ต้องใช้ตั๋ว! บอกมาเลยว่าเอาอะไร! ผมจำได้! ผมมีความจำระดับภาพถ่าย!"',
                    zh: '🗣️ 叫以此："不用以此！告诉我你需要什么！我会以此！我有以此记忆！"'
                },
                consequence: {
                    en: '🤡 Hubris. You forgot table 4\'s allergies and table 7\'s steak temp. Mistakes everywhere. You are not a computer.',
                    th: '🤡 อวดเก่ง คุณลืมว่าโต๊ะ 4 แพ้อาหาร และโต๊ะ 7 เอาสเต็กความสุกไหน ผิดพลาดไปหมด คุณไม่ใช่คอมพิวเตอร์นะ',
                    zh: '🤡 狂妄。你以此了4号桌的以此和7号桌的牛排以此。以此以此以此。你不是电脑。'
                },
                stats: { competence: -20, ethics: -10, leadership: -10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🎁 Free Buffet: "Forget orders! Put all food on the pass! Tell customers it\'s \'Chef\'s Choice Tasting Menu\' tonight! Just feed them!"',
                    th: '🎁 บุฟเฟต์ฟรี: "ลืมออเดอร์ไปซะ! เอาอาหารทุกอย่างวางหน้าพาส! บอกลูกค้าว่าคืนนี้เป็น \'เมนูเชฟจัดให้\'! เอาให้เขากินก็พอ!"',
                    zh: '🎁 免费自助餐："忘了订单！把所有食物以此以此以此！告诉以此今晚是\'以此以此以此\'！以此他们以此！"'
                },
                consequence: {
                    en: '✨ Legend Status. Customers are confused but delighted by the free flow of food. You lose inventory control but gain cult status.',
                    th: '✨ ระดับตำนาน ลูกค้างงแต่ก็ดีใจที่อาหารไหลมาเทมา คุณคุมสต็อกไม่ได้เลยแต่ได้ใจลูกค้าไปเต็มๆ',
                    zh: '✨ 传奇以此。顾客很以此，但对源源不断的以此以此以此。你失去了以此以此，但获得了以此以此。'
                },
                stats: { competence: 10, ethics: 20, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🛑 Close Kitchen: "We can\'t operate safely. Shut it down. Apologize to everyone. Go home."',
                    th: '🛑 ปิดครัว: "เราทำงานอย่างปลอดภัยไม่ได้ ปิดครัว ขอโทษทุกคน กลับบ้าน"',
                    zh: '🛑 关闭厨房："我们无法安全运营。以此以此。向大家道歉。回家。"'
                },
                consequence: {
                    en: '📉 Massive Loss. You lose a whole night\'s revenue. Safer than messing up, but financially devastating. Owner is not happy.',
                    th: '📉 ขาดทุนยับ เสียรายได้ทั้งคืน ปลอดภัยกว่าทำผิดพลาดก็จริง แต่พังพินาศทางการเงิน เจ้าของไม่ปลื้ม',
                    zh: '📉 以此以此。你失去了一整晚的收入。比以此以此以此安全，但在以此上是毁灭性的。老板不以此。'
                },
                stats: { competence: 0, ethics: 10, leadership: -20, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_024',
        text: {
            en: '🕶️ The Heavy: A known local mobster wants the best table without a reservation. He tips $500 upfront but is rude to your waitress.',
            th: '🕶️ ขาใหญ่: มาเฟียเจ้าถิ่นอยากได้โต๊ะที่ดีที่สุดโดยไม่จอง ทิปหนัก $500 จ่ายก่อนเลย แต่หยาบคายกับพนักงานเสิร์ฟของคุณ',
            zh: '🕶️以此："以此"：一个以此的当地以此想要以此以此的以此，没有以此。他以此以此500美元，但对你的以此以此以此。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Kick Him Out: "I don\'t care who you are. Don\'t talk to my staff like that. Get out."',
                    th: '🚫 ไล่ออกไป: "ผมไม่สนว่าคุณเป็นใคร อย่ามาพูดกับพนักงานผมแบบนั้น ออกไป"',
                    zh: '🚫 赶他出去："我不在乎你是谁。别那样对我的员工说话。出去。"'
                },
                consequence: {
                    en: '🛡️ Integrity High / Safety Low. Staff feels safe with you. However, you might find a brick through your window tomorrow. Brave.',
                    th: '🛡️ ศักดิ์ศรีสูง / ความปลอดภัยต่ำ พนักงานรู้สึกปลอดภัยที่มีคุณ แต่พรุ่งนี้กระจกร้านอาจโดนปาหินใส่ กล้าหาญมาก',
                    zh: '🛡️以此以此/安全性低。员工以此以此以此以此。然而，明天你以此以此以此窗户以此以此一块砖头。勇敢。'
                },
                stats: { competence: 10, ethics: 50, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Take the Money: "Right this way, sir. VIP treatment." Tell the waitress to suck it up because we need the tips.',
                    th: '💰 รับเงิน: "เชิญทางนี้ครับท่าน บริการระดับ VIP" บอกเด็กเสิร์ฟให้ทนเอาหน่อยเพราะเราต้องการทิป',
                    zh: '💰 收钱："这边以此，先生。VIP以此。"告诉以此以此以此，因为我们需要以此。'
                },
                consequence: {
                    en: '📉 Moral Bankruptcy. You sold your team\'s dignity for $500. They look at you with disgust. Culture is damaged.',
                    th: '📉 ศีลธรรมล้มละลาย คุณขายศักดิ์ศรีลูกน้องแลกเงิน $500 พวกเขามองคุณด้วยความรังเกียจ วัฒนธรรมองค์กรพัง',
                    zh: '📉 道德以此。你以此了团队的以此以此500美元。他们以以此的以此看着你。文化以此。'
                },
                stats: { competence: 10, ethics: -40, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🛡️ Shield Her: "I will serve this table personally. Go take a break." You take the abuse yourself to protect her.',
                    th: '🛡️ ปกป้องเธอ: "เดี๋ยวผมเสิร์ฟโต๊ะนี้เอง คุณไปพักเถอะ" คุณยอมโดนด่าเองเพื่อปกป้องเธอ',
                    zh: '🛡️ 保护她："我会亲自以此这一桌。去以此以此。"你以此以此以此以保护她。'
                },
                consequence: {
                    en: '❤️ True Leader. You handle the difficult guest perfectly. The money goes to the house. The staff knows you have their back.',
                    th: '❤️ ผู้นำที่แท้จริง คุณรับมือแขกเรื่องมากได้สมบูรณ์แบบ เงินเข้ากองกลาง พนักงานรู้ว่าคุณหนุนหลังเขา',
                    zh: '❤️以此以此。你完美地以此以此以此以此。以此以此以此。员工知道你以此他们。'
                },
                stats: { competence: 40, ethics: 30, leadership: 50, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🧪 "Special" Sauce: "Sure, sit down." You cook his steak... after dropping it on the floor. Petty revenge.',
                    th: '🧪 ซอส "พิเศษ": "ได้สิครับ นั่งเลย" คุณย่างสเต็กให้เขา... หลังจากทำตกลงพื้น แก้แค้นแบบเด็กๆ',
                    zh: '🧪 "特制"酱汁："以此，以此。"你做他的牛排……在把它以此在地板上以此。以此以此。'
                },
                consequence: {
                    en: '🤡 Dangerous Game. He eats it and loves it. You feel smug. But if he found out, you would be in concrete shoes. Unprofessional.',
                    th: '🤡 เกมอันตราย เขากินแล้วชอบมาก คุณรู้สึกสะใจ แต่ถ้าเขารู้ คุณคงได้ไปคุยกับรากมะม่วง ไม่เป็นมืออาชีพเลย',
                    zh: '🤡 危险的游戏。他吃了而且很喜欢。你觉得以此。但如果他以此，你以此以此以此以此。不以此。'
                },
                stats: { competence: -20, ethics: -50, leadership: 0, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_025',
        text: {
            en: '📺 Reality Star: You are cast on "Kitchen Wars". You will be filming for 2 months. The prize is $100k. But you have to leave your restaurant.',
            th: '📺 เรียลลิตี้สตาร์: คุณผ่านแคสติ้งรายการ "สงครามครัวแตก" ต้องไปถ่ายทำ 2 เดือน รางวัล $100k แต่ต้องทิ้งร้านไป',
            zh: '📺以此以此：你被选角参加"厨房以此"。你将以此2个月。以此是10万美元。但你必须以此你的餐厅。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✈️ Go for Glory: "I\'m going! This is my big break. Sous Chef, you are in charge. Don\'t burn the place down!"',
                    th: '✈️ คว้าชัย: "ฉันไปแน่! นี่คือโอกาสดังของฉัน ซูเชฟ ฝากร้านด้วย อย่าทำร้านไฟไหม้ล่ะ!"',
                    zh: '✈️ 追求荣耀："我去了！这是我的大以此。副厨，你负责。别把地方以此了！"'
                },
                consequence: {
                    en: '✨ Fame vs Quality. You win 3rd place and get famous. Your restaurant is fully booked, but the food quality dropped while you were away.',
                    th: '✨ ชื่อเสียง vs คุณภาพ คุณได้ที่ 3 และดังเปรี้ยง ร้านจองเต็ม แต่รสชาติอาหารแย่ลงตอนคุณไม่อยู่',
                    zh: '✨ 名声 vs 质量。你得了第三名，成名了。你的餐厅以此以此，但在你离开以此食物质量以此了。'
                },
                stats: { competence: 20, ethics: 0, leadership: -20, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🏠 Stay Home: "I can\'t leave my baby. The restaurant needs me every night. Fame is fleeting; quality is forever."',
                    th: '🏠 อยู่เฝ้าร้าน: "ฉันทิ้งลูกรักไปไม่ได้ ร้านต้องการฉันทุกคืน ชื่อเสียงมันชั่วคราว แต่คุณภาพคือตลอดไป"',
                    zh: '🏠 留在家："我以此以此我的宝贝。餐厅以此需要我。名声以此以此；质量是永恒的。"'
                },
                consequence: {
                    en: '🛡️ Local Hero. You missed the TV chance, but your restaurant gets a literal Michelin Star that year because you were focused. Worth it.',
                    th: '🛡️ ฮีโร่ท้องถิ่น คุณพลาดโอกาสออกทีวี แต่ร้านคุณได้ดาวมิชลินปีนั้นเพราะคุณโฟกัสสุดๆ คุ้มค่ามาก',
                    zh: '🛡️ 当地英雄。你以此以此电视机会，但你的餐厅那年以此以此以此米其林星，因为你很以此。值了。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Send Sous Chef: "I\'m too old for this. You go, kid. Represent us. Make me proud."',
                    th: '🤝 ส่งซูเชฟไป: "ฉันแก่เกินแกงแล้ว นายไปเถอะไอ้หนู ไปเป็นตัวแทนเรา ทำให้ฉันภูมิใจนะ"',
                    zh: '🤝 派副厨去："我太以此以此。你去吧，以此。代表我们。以此我以此。" '
                },
                consequence: {
                    en: '❤️ Mentor Win. He goes and WINS. He mentions your name in every interview. You become the famous mentor. Best possible outcome.',
                    th: '❤️ ชัยชนะของเมนเทอร์ เขาไปแข่งและ *ชนะ* เขาเอ่ยชื่อคุณทุกสัมภาษณ์ คุณกลายเป็นเมนเทอร์คนดัง ผลลัพธ์ดีที่สุดเท่าที่เป็นไปได้',
                    zh: '❤️ 导师胜利。他去并且以此了。他在以此采访以此以此你的名字。你成为以此导师。以此以此的结果。'
                },
                stats: { competence: 30, ethics: 40, leadership: 60, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🎭 Fake Persona: "I go, but I act like a villain for airtime. I shout, throw plates. All PR is good PR."',
                    th: '🎭 สร้างคาแรคเตอร์ปลอม: "ไปสิ แต่จะแกล้งเป็นตัวร้ายเพื่อซีนตะโกน ปาจาน PR ทุกอย่างคือ PR ที่ดี"',
                    zh: '🎭 虚假以此："我去，但我以此以此以此以此以以此以此。我以此，以此以此。以此以此都是好以此。"'
                },
                consequence: {
                    en: '🤡 Brand Risk. You get famous for being a jerk. Millions hate you. People come to the restaurant just to insult you. Stressful.',
                    th: '🤡 ความเสี่ยงของแบรนด์ คุณดังเพราะทำตัวทุเรศ คนนับล้านเกลียดคุณ คนมาร้านเพื่อด่าคุณ เครียดจัด',
                    zh: '🤡 品牌风险。你因为是个以此以此以此而以此。以此以此以此你。人们来餐厅只是为了以此你。以此。'
                },
                stats: { competence: 0, ethics: -30, leadership: -40, innovation: 20 }
            }
        ]
    },

    {
        id: 'chef_026',
        text: {
            en: '👯 The Copycat: The bistro across the street just launched "Your" signature Duck Confit. It is $5 cheaper and looks identical.',
            th: '👯 จอมก๊อป: ร้านบิสโทรฝั่งตรงข้ามเพิ่งเปิดตัวเมนูเป็ดกงฟี "สูตรของคุณ" ถูกกว่า $5 และหน้าตาเหมือนกันเป๊ะ',
            zh: '👯 模仿者：对面的小酒馆刚刚推出了"你的"招牌油封鸭。便宜5美元，看起来一模一样。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🦁 Ignore It: "Lions do not lose sleep over the opinions of sheep. Ours is better. Let them serve trash."',
                    th: '🦁 เมินเฉย: "ราชสีห์ไม่เสียเวลากับแกะ ของเราดีกว่า ปล่อยให้มันเสิร์ฟขยะไป"',
                    zh: '🦁 无视它："狮子不会因为绵羊的意见而失眠。我们的更好。让他们去卖垃圾吧。"'
                },
                consequence: {
                    en: '🛡️ Class Act. Customers try theirs, realize it sucks, and come back to you. Your reputation as the Original stays solid.',
                    th: '🛡️ ชั้นเชิงเหนือกว่า ลูกค้าไปลองของมัน รู้ว่าห่วย แล้วกลับมาหาคุณ ชื่อเสียง "ต้นตำรับ" ของคุณแข็งแกร่ง',
                    zh: '🛡️ 一流表现。顾客尝试了他们的，发现很烂，然后回到了你这里。你作为原创者的声誉坚不可摧。'
                },
                stats: { competence: 20, ethics: 10, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🆙 Best Them: "Improve ours. Add truffle honey glaze. Raise the price by $5. Make theirs look like the cheap knockoff it is."',
                    th: '🆙 เกทับ: "พัฒนาของเรา เพิ่มน้ำผึ้งทรัฟเฟิล ขึ้นราคาอีก $5 ทำให้ของมันดูเป็นของก๊อปเกรดต่ำไปเลย"',
                    zh: '🆙 胜过他们："改进我们的。加入松露蜂蜜釉。涨价5美元。让他们看起来就像是廉价的仿制品。"'
                },
                consequence: {
                    en: '✨ Domination. You assert dominance. Foodies blog about the "Duck Wars" and declare you the winner. Revenue ++.',
                    th: '✨ ครองตลาด คุณประกาศศักดา นักชิมเขียนบล็อกเรื่อง "สงครามเป็ด" และยกให้คุณชนะ รายได้ ++',
                    zh: '✨ 统治。你确立了统治地位。美食家在博客上讨论"鸭子大战"并宣布你获胜。收入++。'
                },
                stats: { competence: 40, ethics: 10, leadership: 30, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Lawyer Up: "Send a Cease & Desist. I own the plating style. Scare them."',
                    th: '⚖️ จ้างทนาย: "ส่งจดหมายเตือนไป ฉันเป็นเจ้าของลิขสิทธิ์การจัดจาน ขู่ให้กลัว"',
                    zh: '⚖️ 找律师："发送停止侵权函。我拥有这种摆盘风格。吓唬他们。"'
                },
                consequence: {
                    en: '💸 Money Pit. You spend $2,000 on lawyers. They change one sprig of parsley and keep selling it. You look petty.',
                    th: '💸 หลุมดำการเงิน เสียค่าทนาย $2,000 มันแค่เปลี่ยนผักชีใบเดียวแล้วขายต่อ คุณดูใจแคบ',
                    zh: '💸 烧钱。你在律师身上花了2000美元。他们换了一根欧芹继续卖。你看起来很小气。'
                },
                stats: { competence: 0, ethics: -10, leadership: -20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🎭 The Prank: "Order 20 of them to go right at 7 PM. Overwhelm their kitchen. Then complain it\'s cold."',
                    th: '🎭 แกล้งมัน: "โทรสั่งกลับบ้าน 20 ที่ตอน 1 ทุ่ม ถล่มครัวมันให้รวน แล้วโทรไปด่าว่าอาหารเย็น"',
                    zh: '🎭 恶作剧："晚上7点以此点20份外卖。以此他们的厨房。然后以此说是冷的。"'
                },
                consequence: {
                    en: '🤡 Petty War. It feels good for a night. But they retaliate by egging your windows. The neighborhood gets toxic.',
                    th: '🤡 สงครามเด็กๆ สะใจแค่วันเดียว มันมาปาไข่ใส่กระจกคืน เพื่อนบ้านเกลียดกันเอง',
                    zh: '🤡 小规模战争。这一晚感觉不错。但他们扔鸡蛋以此你的窗户。以此变得有毒。'
                },
                stats: { competence: -10, ethics: -40, leadership: -30, innovation: 10 }
            }
        ]
    },

    {
        id: 'chef_027',
        text: {
            en: '⚖️ The Scale: You suspect your fish supplier "Big Tony" is shorting you. You weigh the delivery: 8lbs charged as 10lbs.',
            th: '⚖️ ตราชั่ง: คุณสงสัยว่าซัพพลายเออร์ปลา "บิ๊กโทนี่" โกงตาชั่ง คุณลองชั่งดู: ของ 8 ปอนด์แต่คิดราคา 10 ปอนด์',
            zh: '⚖️ 秤：你怀疑你的鱼类供应商"大托尼"缺斤少两。你称了一下货物：8磅收了10磅的钱。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🗣️ Call Him Out: "Hey Tony, look at the scale. Fix the invoice. Don\'t let it happen again."',
                    th: '🗣️ พูดตรงๆ: "เฮ้ยโทนี่ ดูตาชั่งสิ แก้บิลด้วย อย่าให้มีครั้งหน้า"',
                    zh: '🗣️ 揭穿他："嘿托尼，看秤。修改发票。别再发生了。"'
                },
                consequence: {
                    en: '🛡️ Respect. Tony realizes you aren\'t a pushover. He "fixes" it and gives you the best cuts next week. Trust verified.',
                    th: '🛡️ ความเคารพ โทนี่รู้ว่าคุณไม่ได้โง่ เขา "แก้" ให้และอาทิตย์หน้าเอาส่วนที่ดีที่สุดมาให้ ความเชื่อใจต้องตรวจสอบ',
                    zh: '🛡️ 尊重。托尼意识到你不好欺负。他"修复"了它，下周给了你最好的切块。信任以此以此验证。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '👋 Find New Vendor: "I don\'t deal with thieves. Call the expensive corporate supplier. Cut Tony loose."',
                    th: '👋 หาเจ้าใหม่: "ผมไม่ทำธุรกิจกับขโมย โทรหาซัพพลายเออร์บริษัทใหญ่ที่แพงกว่า ตัดหางโทนี่ซะ"',
                    zh: '👋 找新供应商："我不和以此做生意。打电话给昂贵的以此供应商。甩掉托尼。"'
                },
                consequence: {
                    en: '💰 Increased Costs. The new fish is consistent but costs 20% more. Tony badmouths you around town.',
                    th: '💰 ต้นทุนเพิ่ม ปลาเจ้าใหม่สม่ำเสมอแต่แพงขึ้น 20% โทนี่ไปนินทาคุณทั่วเมือง',
                    zh: '💰 成本增加。新鱼很以此，但贵了20%。托尼在城里以此你。'
                },
                stats: { competence: 20, ethics: 40, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 Silent Acceptance: "It\'s the Tony Tax. He gets hard-to-find items for us. I will just raise menu prices slightly."',
                    th: '🤫 ยอมรับเงียบๆ: "ภาษีโทนี่แหละ เขาหาของหายากให้เราได้ ผมจะแอบขึ้นราคาเมนูนิดหน่อยละกัน"',
                    zh: '🤫 沉默接受："这是托尼税。他为我们以此以此以此的以此。我会以此以此菜单价格。"'
                },
                consequence: {
                    en: '📉 Enabling. Tony starts shorting you 3lbs, then 4lbs. You are being bled dry slowly.',
                    th: '📉 ให้ท้าย โทนี่เริ่มโกง 3 ปอนด์ แล้วก็ 4 ปอนด์ คุณกำลังโดนสูบเลือดช้าๆ',
                    zh: '📉 纵容。托尼开始缺3磅，然后4磅。你正在被慢慢以此干。'
                },
                stats: { competence: -10, ethics: -20, leadership: -10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🔪 Eye for an Eye: "Short pay him. Check says $500? Write a check for $400. Send it. Let him figure it out."',
                    th: '🔪 ตาต่อตา: "จ่ายเงินขาด บิลมา $500 หรอ? เขียนเช็คให้ $400 ส่งไป ให้มันงงเอง"',
                    zh: '🔪 以眼还眼："少付钱。支票说500美元？写一张400美元的支票。以此。让他以此去以此。" '
                },
                consequence: {
                    en: '⚔️ War. Tony storms in screaming during service. It\'s a huge scene. Vendors blackllist you. Dangerous.',
                    th: '⚔️ สงคราม โทนี่บุกเข้ามาด่ากราดตอนร้านเปิด เรื่องใหญ่เลย ซัพพลายเออร์เจ้าอื่นแบนคุณ อันตราย',
                    zh: '⚔️ 战争。托尼在以此营业时冲以此以此。场面很大。供应商把你列入以此。危险。'
                },
                stats: { competence: -10, ethics: -30, leadership: -20, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_028',
        text: {
            en: '🔪 The Blade: A customer leaves a bag. Inside is a custom $800 Japanese Yanagiba knife. No ID. It balances perfectly in your hand.',
            th: '🔪 ใบมีด: ลูกค้าลืมกระเป๋าไว้ ข้างในมีมีดญี่ปุ่น ยานากิบะ สั่งทำพิเศษราคา $800 ไม่มีบัตรแสดงตน มันเข้ามือคุณเป๊ะ',
            zh: '🔪 刀刃：一位顾客落下了包。里面是一把定制的价值800美元的日本柳刃刀。没有身份证件。它在你手中完美平衡。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤫 Keep It: "Finders keepers. This knife chose me. I will cherish it more than any amateur could."',
                    th: '🤫 เก็บไว้: "ใครเจอคนนั้นได้ มีดเล่มนี้เลือกฉัน ฉันจะดูแลมันดีกว่าพวกมือสมัครเล่นแน่นอน"',
                    zh: '🤫 留下它："捡到就是我的。这把刀选择了我。我会比任何业余以此以此以此珍惜它。"'
                },
                consequence: {
                    en: '😈 Guilt & Edge. The knife cuts beautifully, but every time you use it, you feel a pang of guilt. Ethics -50.',
                    th: '😈 ตราบาป มีดคมกริบ แตาทุกครั้งที่ใช้คุณรู้สึกผิด จริยธรรม -50',
                    zh: '😈以此与以此。刀以此以此完美，但每次你使用它，你都以此以此。道德-50。'
                },
                stats: { competence: 10, ethics: -50, leadership: -10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '📱 Social Media Blast: "Found: Beautiful Yanagiba. Describe the handle to claim. Let\'s find the owner!"',
                    th: '📱 ประกาศโซเชียล: "เจอ: ยานากิบะงามหยด บอกลักษณะด้ามจับเพื่อขอรับ ช่วยกันหาเจ้าของหน่อย!"',
                    zh: '📱 社交媒体轰炸："捡到：美丽的柳刃。以此以此以以此。让我们找到以此！"'
                },
                consequence: {
                    en: '❤️ Good Karma. The owner is a famous sushi chef from Japan. He is so grateful he teaches you a fish butchery masterclass. Networking!',
                    th: '❤️ แต้มบุญ เจ้าของคือเชฟซูชิดังจากญี่ปุ่น เขาซาบซึ้งมากจนสอนคลาสแล่ปลาขั้นเทพให้คุณ ได้คอนเนคชั่น!',
                    zh: '❤️以此以此。拥有者是来自日本的著名寿司厨师。他非常以此，以此以此以此以此以此以此大师课。以此！'
                },
                stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📦 Lost & Found: "Put it in the office safe. Wait 30 days. If no one calls, it\'s mine."',
                    th: '📦 ของหายได้คืน: "เก็บใส่ตู้เซฟ รอ 30 วัน ถ้าไม่มีใครติดต่อมา เป็นของฉัน"',
                    zh: '📦 失物招领："把它放在办公室保险箱里。等30天。如果没人打电话，就是我的。"'
                },
                consequence: {
                    en: '⚖️ By the Book. No one calls. You get the knife honestly. It\'s a great tool, earned through patience.',
                    th: '⚖️ ตามกฎเป๊ะ ไม่มีใครโทรมา คุณได้มีดไปอย่างขาวสะอาด เครื่องมือชั้นยอดที่ได้มาด้วยความอดทน',
                    zh: '⚖️以此以此。没人打电话。你以此获得以此这把刀。这是一个伟大的工具，通过耐心以此。'
                },
                stats: { competence: 10, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🧑‍🍳 Give to Sous Chef: "Here, a gift. Don\'t ask where I got it. Just cook good food with it."',
                    th: '🧑‍🍳 ให้ซูเชฟ: "เอ้านี่ ของขวัญ อย่าถามว่าได้มาจากไหน ใช้มันทำอาหารดีๆ ก็พอ"',
                    zh: '🧑‍🍳 给副厨："给，礼物。别问我哪来的。用它做以此以此就行。"'
                },
                consequence: {
                    en: '⚠️ Complicit. Your sous chef loves it, but suspects it\'s stolen. You bond over the secret, but it\'s a shady bond.',
                    th: '⚠️ ผู้สมรู้ร่วมคิด ซูเชฟชอบมาก แต่สงสัยว่าเป็นของโจร คุณสนิทกันเพราะความลับ แต่มันเป็นความสัมพันธ์สีเทา',
                    zh: '⚠️ 同谋。你的副厨很喜欢，但怀疑是偷来的。你们因为以此以此而以此，但这是以此以此以此。'
                },
                stats: { competence: 0, ethics: -20, leadership: 10, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_029',
        text: {
            en: '🐀 The Visitor: You see a large rat run behind the dumpster in the back alley. It is *technically* the citys property, but it is close to your door.',
            th: '🐀 ผู้มาเยือน: คุณเห็นหนูตัวเบ้อเริ่มวิ่งหลังถังขยะในตรอก *ทางเทคนิค* มันเป็นที่ของเขต แต่ตมันอยู่ใกล้ประตูคุณมาก',
            zh: '🐀 访客：你看到一只大老鼠跑过后面小巷的垃圾箱。*严格来说*那是城市的财产，但它离你的门很近。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📞 Call Pro: "Exterminator. Now. Monthly contract. Seal the perimeter. I don\'t play games with rats."',
                    th: '📞 เรียกมือโปร: "กำจัดแมลง เดี๋ยวนี้ ทำสัญญาไปเลย ปิดรอยต่อให้หมด ผมไม่ล้อเล่นกับเรื่องหนู"',
                    zh: '📞以此以此："以此以此。现在。包月合同。以此以此。我不和老鼠以此以此。"'
                },
                consequence: {
                    en: '🛡️ Clean & Poor. It costs $300/month, but you never see a dropping. Health Inspector is impressed.',
                    th: '🛡️ สะอาดแต่จน จ่ายเดือนละ $300 แต่ไม่เคยเห็นขี้หนูสักเม็ด เจ้าหน้าที่สาธารณสุขประทับใจ',
                    zh: '🛡️ 干净且以此。每月花费300美元，但你从未以此以此以此。卫生检查员印象深刻。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🐈 Kitchen Cat: "Adopt a stray cat. Name him \'Gumbo\'. Feed him scraps. He patrols the alley."',
                    th: '🐈 แมวครัว: "รับเลี้ยงแมวจร ตั้งชื่อ \'กัมโบ้\' ให้กินเศษอาหาร ให้มันคุมตรอก"',
                    zh: '🐈 厨房猫："收养一只以此以此。以此他\'以此\'。以此以此以此。他以此以此以此。"'
                },
                consequence: {
                    en: '⚠️ Health Code Risk. Customers love Gumbo. The rats are gone. But if the inspector sees him inside -> FAILED.',
                    th: '⚠️ เสี่ยงกฎอนามัย ลูกค้ารักกัมโบ้ หนูหายเกลี้ยง แต่ถ้าจนท. เห็นมันเข้ามาในร้าน -> สอบตก',
                    zh: '⚠️ 卫生以此以此。顾客喜欢以此。老鼠没了。但如果检查员以此以此看到他 -> 失败。'
                },
                stats: { competence: 10, ethics: 10, leadership: 0, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '💣 DIY Trap: "Put poison traps everywhere in the alley. Do it myself. Save money."',
                    th: '💣 กับดักทำเอง: "วางยาวื่อหนูทั่วตรอก ทำเอง ประหยัดตังค์"',
                    zh: '💣 DIY陷阱："在巷子里以此以此毒以此。自己做。省钱。"'
                },
                consequence: {
                    en: '💀 Ecosystem Damage. A neighborhood dog eats the poison. Major community backlash. You are the villain.',
                    th: '💀 ทำลายระบบนิเวศ หมาแถวนั้นมากินยาเบื่อ ชุมชนรุมด่า คุณตกเป็นจำเลยสังคม',
                    zh: '💀以此以此破坏。以此以此吃了以此。社区以此反以此。你是以此。'
                },
                stats: { competence: 0, ethics: -40, leadership: -20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Ignore It: "It\'s outside. Not my building. Not my problem. Keep the back door shut."',
                    th: '🤷 ช่างมัน: "มันอยู่ข้างนอก ไม่ใช่ตึกเรา ไม่ใช่ปัญหาเรา ปิดประตูหลังให้สนิทก็พอ"',
                    zh: '🤷 无视它："在外面。不是我的以此。不是我的以此。以此以此以此。" '
                },
                consequence: {
                    en: '📉 The Invasion. Winter comes. The rat comes inside. He brings friends. Infestation. You have to close for a week.',
                    th: '📉 การรุกราน หน้าหนาวมาเยือน หนูเข้ามาข้างใน พาเพื่อนมาเพียบ หนูระบาด ต้องปิดร้านเป็นอาทิตย์',
                    zh: '📉以此。冬天来了。老鼠进了。他以此以此朋友。以此。你必须以此一周。'
                },
                stats: { competence: -40, ethics: -10, leadership: -30, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_030',
        text: {
            en: '🎪 The Street Fair: The city\'s biggest food festival is this weekend. Entry fee is $2,000. Potential revenue $20,000. But you will have to prep all night.',
            th: '🎪 งานวัดฝรั่ง: เทศกาลอาหารที่ใหญ่ที่สุดในเมืองคือสุดสัปดาห์นี้ ค่าเข้า $2,000 รายได้อาจถึง $20,000 แต่คุณต้องเตรียมของทั้งคืน',
            zh: '🎪 街头游园会：这周末是全城最大的美食节。入场费2000美元。潜在收入20000美元。但你必须通宵准备。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Go Big: "Rent the big tent. Hire temp staff. Serve 3 items. We are here to make MONEY!"',
                    th: '🚀 เล่นใหญ่: "เช่าเต็นท์ใหญ่ จ้างพนักงานชั่วคราว เสิร์ฟ 3 อย่าง เรามาเพื่อกอบโกย!"',
                    zh: '🚀以此："以此以此以此。以此以此以此。以此3样东西。我们是来以此的！"'
                },
                consequence: {
                    en: '💰 Cash Cow. You profit $15k in 2 days. You are dead tired, but the bank account looks beautiful.',
                    th: '💰 บ่อเงินบ่อทอง กำไร $15k ใน 2 วัน เหนื่อยแทบตายแต่บัญชีธนาคารสวยงาม',
                    zh: '💰 摇钱树。你在2天内以此1.5万美元。你以此以此，但银行账户看起来以此以此。'
                },
                stats: { competence: 30, ethics: 0, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🏠 Skip It: "Too much stress. Focus on the restaurant service. Don\'t stretch us too thin."',
                    th: '🏠 ข้ามไป: "เครียดเกิน โฟกัสที่ร้านดีกว่า อย่าฝืนจนขาด"',
                    zh: '🏠 跳过："压力太大。以此餐厅服务。别以此以此以此。" '
                },
                consequence: {
                    en: '🛡️ Consistent Quality. The restaurant runs smoothly. You miss the cash bump, but your staff is rested and happy.',
                    th: '🛡️ คุณภาพคงที่ ร้านรันไปอย่างราบรื่น อดได้เงินก้อน แต่พนักงานได้พักและมีความสุข',
                    zh: '🛡️以此质量。餐厅以此以此。你以此以此了以此，但你的员工以此以此以此以此。'
                },
                stats: { competence: 10, ethics: 10, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🥤 Drinks Only: "Sell Lemonade and Iced Tea. 90% Profit margin. No cooking. Easy money."',
                    th: '🥤 ขายแต่น้ำ: "ขายเลมอนเนดกับชาเย็น กำไร 90% ไม่ต้องทำอาหาร เงินง่ายๆ"',
                    zh: '🥤 只卖以此："卖柠檬水和冰茶。90%的利润率。不用以此。以此以此。" '
                },
                consequence: {
                    en: '🤡 Brand Confusion. You make money, but people ask "Why is the French Bistro selling lemonade?"',
                    th: '🤡 แบรนด์สับสน ได้เงินนะ แต่คนถาม "ทำไมร้านอาหารฝรั่งเศสมาขายน้ำมะนาว?"',
                    zh: '🤡 品牌混淆。你以此了钱，但人们问"为什么法式小酒馆在卖柠檬水？"'
                },
                stats: { competence: 0, ethics: 0, leadership: 10, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔥 Skeleton Crew: "Just me and the Sous Chef. No temps. We grind for 48 hours straight. Pure profit."',
                    th: '🔥 ทีมกระดูกเหล็ก: "แค่ฉันกับซูเชฟ ไม่จ้างเพิ่ม ลุยต่อเนื่อง 48 ชม. กำไรล้วนๆ"',
                    zh: '🔥以此以此："只有我和副厨。没有以此。我们连续以此48小时。以此以此。"'
                },
                consequence: {
                    en: '💤 Hospitalization. You both collapse from dehydration. The stand closes early. You lose money on the entry fee.',
                    th: '💤 หามส่งโรงพยาบาล ร่วงทั้งคู่เพราะขาดน้ำ บูธปิดก่อนกำหนด ขาดทุนค่าที่',
                    zh: '💤 住院。你们都因以此而以此。以此以此以此。你在以此以此以此了钱。'
                },
                stats: { competence: -20, ethics: 0, leadership: -30, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_031',
        text: {
            en: '🍾 The Buyout: A tech billionaire wants to rent the entire restaurant for Saturday night. He offers $50,000. You are fully booked with regulars.',
            th: '🍾 ซื้อเหมาร้าน: เศรษฐีไอทีอยากเหมาปิดร้านคืนวันเสาร์ เขาเสนอให้ $50,000 แต่คิวจองเต็มไปด้วยลูกค้าประจำ',
            zh: '🍾 收购：一位科技亿万富翁想在周六晚上包下整个餐厅。他出价50,000美元。你的预订已经满了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Accept: "Money talks. Call everyone and cancel. Give them a gift card for next time. We need the cash."',
                    th: '💰 รับข้อเสนอ: "เงินคือพระเจ้า โทรยกเลิกทุกคน แจกบัตรกำนัลชดเชย เราต้องการเงิน"',
                    zh: '💰 接受："有钱能使鬼推磨。打电话给所有人取消。给他们一张下次使用的礼品卡。我们需要现金。"'
                },
                consequence: {
                    en: '💸 Rich but Hated. You bank the money. But your 1-star reviews explode. "They kicked us out for a rich guy." Loyalty -50.',
                    th: '💸 รวยแต่คนเกลียด ได้เงินก้อนโต แต่ 1 ดาวถล่มทลาย "เทเราไปหาคนรวย" ความภักดี -50',
                    zh: '💸 富有但被讨厌。你存下了钱。但你的1星评论爆炸了。"他们为了一个富人把我们踢出去了。"忠诚度-50。'
                },
                stats: { competence: 10, ethics: -20, leadership: -10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🙅 Reject: "Sorry, we are booked. My word is my bond. We don\'t sell out our friends."',
                    th: '🙅 ปฏิเสธ: "ขอโทษครับร้านเต็ม คำพูดคือนายกาย เราไม่ทิ้งเพื่อน"',
                    zh: '🙅 拒绝："抱歉，我们订满了。我说到做到。我们不出卖朋友。"'
                },
                consequence: {
                    en: '🛡️ Integrity Legend. The billionaire is impressed by your spine. He comes back next week and spends $5,000 anyway. Regulars love you.',
                    th: '🛡️ ตำนานความซื่อสัตย์ เศรษฐีประทับใจที่คุณแน่วแน่ อาทิตย์หน้าเขากลับมาใช้เงิน $5,000 อยู่ดี ลูกค้าประจำรักคุณตาย',
                    zh: '🛡️ 正直传奇。亿万富翁对你的骨气印象深刻。他下周回来，还是花了5000美元。常客以此爱你。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📈 Double It: "Tell him $100,000. If he is crazy enough to pay that, I can buy my integrity back later."',
                    th: '📈 เรียกเพิ่ม: "บอกไป $100,000 ถ้าเขาบ้าจี้จ่าย ผมค่อยไปซื้อความซื่อสัตย์คืนทีหลัง"',
                    zh: '📈以此："以此10万美元。如果以此以此以此，以此以此以此以此以此。" '
                },
                consequence: {
                    en: '🎰 Jackpot. He pays it. You use half the money to throw a free party for the cancelled guests next week. Win-Win?',
                    th: '🎰 แจ็คพอต เขาจ่าย คุณใช้เงินครึ่งหนึ่งมาจัดปาร์ตี้ฟรีให้ลูกค้าที่โดนยกเลิกอาทิตย์หน้า วิน-วินมั้ง?',
                    zh: '🎰以此。他以此。你以此一半的钱以此下周为被取消的以此举办免费派对。双赢？'
                },
                stats: { competence: 50, ethics: 0, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🏡 Catering Pivot: "We can\'t close the restaurant, but I will come to your mansion and cook personally for $50k."',
                    th: '🏡 เสนอจัดเลี้ยงนอกสถานที่: "ปิดร้านไม่ได้ แต่ผมจะไปทำอาหารถึงคฤหาสน์คุณเอง คิด $50k"',
                    zh: '🏡 外烩以此："以此以此餐厅，但我会以此以此以此以此，以此5万美元。"'
                },
                consequence: {
                    en: '✨ The Hustle. He agrees. You work a double shift (restaurant prep + event). You suffer, but you keep both money and regulars.',
                    th: '✨ นักสู้ เขาตกลง คุณทำงานควงกะ (เตรียมของที่ร้าน + ไปงาน) เหนื่อยรากเลือด แต่รักษาได้ทั้งเงินและลูกค้า',
                    zh: '✨以此。他同意。你以此双班（餐厅准备 + 活动）。你以此，但你以此了金钱和常客。'
                },
                stats: { competence: 60, ethics: 30, leadership: 40, innovation: 10 }
            }
        ]
    },

    {
        id: 'chef_032',
        text: {
            en: '🤖 The Machine: A salesman offers you a top-tier Rational Combi-Oven. It costs $15,000 but can cook roast beef perfectly while you sleep.',
            th: '🤖 เจ้าเครื่องจักร: เซลส์เสนอขายเตา Rational Combi-Oven ตัวท็อป ราคา $15,000 มันอบเนื้อได้เพอร์เฟกต์ขณะที่คุณหลับ',
            zh: '🤖 机器：一个推销员向你兜售顶级的Rational万能蒸烤箱。售价15,000美元，但可以在你睡觉时完美烹饪烤牛肉。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💳 Buy It: "Finance it. The efficiency gains will pay for it in 6 months. Technology is the future."',
                    th: '💳 ซื้อเลย: "ผ่อนเอา ความคุ้มค่าจะคืนทุนใน 6 เดือน เทคโนโลยีคืออนาคต"',
                    zh: '💳 买："分期付款。效率提高将在6个月内以此。以此是未来。"'
                },
                consequence: {
                    en: '✅ Precision. The beef is perfect every time. Food waste drops 20%. You sleep more. Worth every penny.',
                    th: '✅ แม่นยำ เนื้อเป๊ะทุกรอบ เศษอาหารลดลง 20% คุณได้นอนมากขึ้น คุ้มทุกบาททุกสตางค์',
                    zh: '✅以此。牛肉以此以此以此。食物以此降低20%。你睡眠更多。物有所值。'
                },
                stats: { competence: 30, ethics: 0, leadership: 20, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🔥 Old School: "No robots in my kitchen. We cook with fire and touch. Get that computer out of here."',
                    th: '🔥 หัวโบราณ: "ไม่เอาหุ่นยนต์ในครัวฉัน เราทำอาหารด้วยไฟและสัมผัส เอาคอมพิวเตอร์นั่นออกไป"',
                    zh: '🔥 老派："我的厨房里不要机器人。我们用火和触觉烹饪。把那台电脑以此。" '
                },
                consequence: {
                    en: '🛡️ Purist Struggle. The food has "soul", but you are inconsistent. One night the beef is dry. You work harder for less result.',
                    th: '🛡️ การดิ้นรนของพวกอนุรักษ์ อาหารมี "จิตวิญญาณ" แต่ไม่นิ่ง บางคืนเนื้อแห้ง คุณทำงานหนักขึ้นแต่ได้ผลลัพธ์น้อยลง',
                    zh: '🛡️以此以此的以此。食物有"灵魂"，但你以此。以此以此牛肉干了。你工作更努力，结果更少。'
                },
                stats: { competence: 10, ethics: 20, leadership: 0, innovation: -30 }
            },
            {
                id: 'C',
                text: {
                    en: '🔧 Buy Used: "Find one on eBay from a failed restaurant. $5,000. Fix it up myself."',
                    th: '🔧 ซื้อของมือสอง: "หาใน eBay จากร้านที่เจ๊ง $5,000 เดี๋ยวมาซ่อมเอง"',
                    zh: '🔧 买二手的："在eBay上从一家倒闭的餐厅以此一个。5000美元。以此以此。" '
                },
                consequence: {
                    en: '⚠️ Mechanic Chef. It breaks down every Tuesday. You spend more time fixing it than cooking. Cheap is expensive.',
                    th: '⚠️ เชฟนักประดิษฐ์ มันพังทุกวันอังคาร คุณเสียเวลาซ่อมมากกว่าทำครัว เสียน้อยเสียยากเสียมากเสียง่าย',
                    zh: '⚠️ 机械厨师。它每周二都会坏。你花在修理上的时间多于烹饪。以此是昂贵的。'
                },
                stats: { competence: 20, ethics: 0, leadership: -10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '📄 Lease It: "Rent it for $300/mo including service. If I don\'t like it, I send it back."',
                    th: '📄 เช่าเอา: "เช่าเดือนละ $300 รวมค่าซ่อม ถ้าไม่ชอบก็ส่งคืน"',
                    zh: '📄 租赁："以此300美元/月以此。如果我不喜欢，以此以此。" '
                },
                consequence: {
                    en: '🛡️ Smart Move. Low risk. You realize it\'s great and eventually buy it out. Good cash flow management.',
                    th: '🛡️ ตาเดินที่ฉลาด ความเสี่ยงต่ำ คุณพบว่ามันเจ๋งแล้วค่อยซื้อขาดทีหลัง บริหารกระแสเงินสดดีเยี่ยม',
                    zh: '🛡️以此。低以此。你以此以此，并最终买断。以此以此以此管理。'
                },
                stats: { competence: 40, ethics: 0, leadership: 30, innovation: 20 }
            }
        ]
    },

    {
        id: 'chef_033',
        text: {
            en: '🧪 The Formula: A fast-food chain wants to buy your signature BBQ sauce recipe for $100,000. You lose the rights to use it.',
            th: '🧪 สูตรลับ: เชนฟาสต์ฟู้ดอยากขอซื้อสูตรซอสบาร์บีคิวของคุณในราคา $100,000 คุณจะเสียสิทธิ์ในการใช้มัน',
            zh: '🧪 配方：一家快餐连锁店想以10万美元购买你的招牌烧烤酱配方。你将失去使用它的权利。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Sell Out: "Show me the check. I can invent a new sauce tomorrow. $100k buys a lot of truffles."',
                    th: '💰 ขาย: "เอาเช็คมาเลย ผมคิดสูตรใหม่ได้พรุ่งนี้แหละ $100k ซื้อทรัฟเฟิลได้เพียบ"',
                    zh: '💰 卖掉："给我看支票。我明天就能发明一种新酱汁。10万美元以此买很多松露。"'
                },
                consequence: {
                    en: '📉 Brand Hit / Bank Win. Your sauce ends up on a cheap burger nationwide. Foodies mock you, but you are debt-free.',
                    th: '📉 แบรนด์เสียหาย / บัญชีรุ่งเรือง ซอสคุณไปอยู่ในเบอร์เกอร์ถูกๆ ทั่วประเทศ นักชิมล้อเลียนคุณ แต่คุณหมดหนี้',
                    zh: '📉 品牌受损/银行以此。你的酱汁以此以此在以此以此的汉堡上。美食家以此你，但你以此无债一身轻。'
                },
                stats: { competence: 20, ethics: -30, leadership: -10, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🔒 Keep It: "It\'s my grandmother\'s recipe. It is not for sale. Some things are sacred."',
                    th: '🔒 เก็บไว้: "นี่สูตรยายผม ไม่ได้มีไว้ขาย บางอย่างมันศักดิ์สิทธิ์นะ"',
                    zh: '🔒 保留："这是我祖母的配方。以此。有些东西是神圣的。"'
                },
                consequence: {
                    en: '🛡️ Soul Saved. You struggle to pay bills, but you kept your identity. Customers taste the love.',
                    th: '🛡️ รักษาจิตวิญญาณ จ่ายบิลลำบากหน่อย แต่รักษาตัวตนไว้ได้ ลูกค้ารับรู้ถึงความรักในรสชาติ',
                    zh: '🛡️ 灵魂以此。你以此支付账单，但你保留了你的以此。顾客尝到了爱。'
                },
                stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Licensing Deal: "I won\'t sell the rights, but I will license my name for a \'Chef Selection\' line. Royalty per bottle."',
                    th: '🤝 ดีลลิขสิทธิ์: "ไม่ขายขาด แต่จะให้ใช้ชื่อในไลน์ \'Chef Selection\' กินค่าตงต่อขวด"',
                    zh: '🤝 授权协议："我不会以此，但我会以此我的名字以此\'以此精选\'系列。每瓶收取版税。"'
                },
                consequence: {
                    en: '✨ Business Mogul. You become a household name. The passive income stream is huge. Scaling success.',
                    th: '✨ เจ้าสัวธุรกิจ คุณกลายเป็นชื่อติดปาก รายได้ Passive income มหาศาล การขยายตัวที่สำเร็จ',
                    zh: '✨ 商业大亨。你变得家喻户晓。被动收入流巨大。以此成功。'
                },
                stats: { competence: 50, ethics: 10, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🤥 Sell Fake: "Modify the recipe slightly. Sell them the bad version. Keep the real one. Haha!"',
                    th: '🤥 ย้อมแมวขาย: "แก้สูตรนิดหน่อย ขายเวอร์ชั่นห่วยให้มัน เก็บสูตรจริงไว้ ฮ่าๆ!"',
                    zh: '🤥 卖假的："稍微修改一下配方。卖给他们以此版本。保留真的。哈哈！"'
                },
                consequence: {
                    en: '⚖️ Lawsuit. They figure it out. Breach of contract. You get sued for the $100k plus damages. Dumb move.',
                    th: '⚖️ โดนฟ้อง เขาจับได้ ผิดสัญญา คุณโดนฟ้องเรียกเงินคืนบวกค่าเสียหาย โง่บรม',
                    zh: '⚖️以此。他们以此以此。以此合同。你因10万美元以此以此以此被以此。以此以此。'
                },
                stats: { competence: -20, ethics: -60, leadership: -30, innovation: 10 }
            }
        ]
    },

    {
        id: 'chef_034',
        text: {
            en: '🌱 Plastic Free: You want to eliminate single-use plastics. No cling film, no vacuum bags, no straws. It will cost 3x more and be annoying.',
            th: '🌱 ปลอดพลาสติก: คุณอยากเลิกใช้พลาสติกใช้แล้วทิ้ง ไม่มีแรป ไม่มีถุงสุญญากาศ ไม่มีหลอด แพงขึ้น 3 เท่าและน่ารำคาญ',
            zh: '🌱 无塑料：你想消除一次性塑料。没有保鲜膜，没有真空袋，没有吸管。成本是原来的3倍，而且很麻烦。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🟢 Do It: "We commit. Beeswax wraps, silicone lids, glass containers. It\'s the right thing to do."',
                    th: '🟢 ลุยเลย: "เราเอาจริง ผ้าขี้ผึ้ง ฝาซิลิโคน กล่องแก้ว มันคือสิ่งที่ถูกต้อง"',
                    zh: '🟢 做："我们承诺。蜂蜡包装，硅胶盖，玻璃容器。这是正确的事情。"'
                },
                consequence: {
                    en: '❤️ Eco-Warrior. The kitchen hates washing the glass, but the press coverage is glowing. You attract a conscious clientele.',
                    th: '❤️ นักรบสิ่งแวดล้อม คนในครัวเกลียดการล้างแก้ว แต่สื่อชมเปาะ คุณดึงดูดลูกค้าสายรักษ์โลก',
                    zh: '❤️ 环保战士。厨房讨厌洗玻璃，但新闻以此以此。你吸引了以此以此的以此。'
                },
                stats: { competence: 20, ethics: 60, leadership: 30, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🎨 Greenwashing: "Paper straws and recycled napkins. Keep the cling film in the back where they can\'t see."',
                    th: '🎨 ฟอกเขียว: "ใช้หลอดกระดาษกับทิชชู่รีไซเคิล แอบใช้แรปหลังครัวที่ลูกค้าไม่เห็น"',
                    zh: '🎨 洗绿："纸吸管和再生以此。把保鲜膜以此在他们以此以此以此的地方。"'
                },
                consequence: {
                    en: '🤡 Hypocrite. It works for a while, but you feel dirty. If exposed, the backlash will be severe.',
                    th: '🤡 มือถือสากปากถือศีล ได้ผลสักพัก แต่คุณรู้สึกสกปรก ถ้าความแตก โดนถล่มเละแน่',
                    zh: '🤡 伪君子。它有效了一段时间，但你觉得脏。如果以此，以此将是严厉的。'
                },
                stats: { competence: 10, ethics: -30, leadership: -10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Forget It: "I can\'t keep avocados fresh without plastic. The technology isn\'t there yet. Profit first."',
                    th: '🛑 ลืมไปเถอะ: "ผมเก็บอโวคาโดให้สดไม่ได้ถ้าไม่มีพลาสติก เทคโนโลยียังไม่ถึงขั้น กำไรต้องมาก่อน"',
                    zh: '🛑 忘了它："没有塑料我无法保持鳄梨以此。以此以此以此。利润至上。"'
                },
                consequence: {
                    en: '🛡️ Status Quo. Efficient, cheap, effective. You kill a few turtles, but you survive the fiscal year.',
                    th: '🛡️ สถานะเดิม มีประสิทธิภาพ ถูก ได้ผล คุณฆ่าเต่าไปไม่กี่ตัว แต่คุณรอดปีงบประมาณนี้',
                    zh: '🛡️ 现状。高效，便宜，有效。你以此了几只以此，但你以此了财政年度。'
                },
                stats: { competence: 30, ethics: -10, leadership: 10, innovation: -20 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Reduce: "Audit the trash. Cut usage by 50%. Switch only the easy stuff. A balanced approach."',
                    th: '📉 ลดละเลิก: "ตรวจสอบขยะ ลดการใช้ลง 50% เปลี่ยนเฉพาะอันที่ง่าย ทางสายกลาง"',
                    zh: '📉以此："以此以此。以此50%的使用量。只以此以此的东西。平衡的方法。"'
                },
                consequence: {
                    en: '✅ Pragmatic. You save money on waste reduction and look good. Sustainable in both senses.',
                    th: '✅ เน้นปฏิบัติจริง คุณประหยัดเงินจากการลดขยะและดูดี ยั่งยืนในทั้งสองความหมาย',
                    zh: '✅ 务实。你在以此以此上省了钱，看起来不错。在以此意义上以此。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 }
            }
        ]
    },

    {
        id: 'chef_035',
        text: {
            en: '🔪 The Prodigy: A 19-year-old culinary student walks in. He cuts onions faster than you. He balances flavors like a master. He is arrogant.',
            th: '🔪 อัจฉริยะ: เด็ก 19 เดินเข้ามา หั่นหอมเร็วกว่าคุณ ปรุงรสได้ระดับเทพ แต่โคตรหยิ่ง',
            zh: '🔪 天才：一个19岁的烹饪学生走进来。他切洋葱比你快。他像大师一样平衡味道。但他很傲慢。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎓 Mentor Him: "You are good, but you are messy. I will break you down and build you up. Prepare for hell."',
                    th: '🎓 สั่งสอน: "แกเก่งนะ แต่ไม่เป็นระเบียบ ฉันจะรื้อแกแล้วประกอบใหม่ เตรียมเจอขุมนรกได้เลย"',
                    zh: '🎓 指导他："你很好，但你很以此。我会以此以此你，以此以此你。以此以此地狱。"'
                },
                consequence: {
                    en: '✨ Legacy. He hates you for a year, then loves you. He wins awards under your banner. You created a star.',
                    th: '✨ ตำนาน เขาเกลียดคุณเป็นปี แล้วก็รักคุณ เขาคว้ารางวัลในนามคุณ คุณสร้างดาราขึ้นมาแล้ว',
                    zh: '✨ 遗产。他以此你一年，然后爱你。他在你的以此下获得奖项。你创造了一颗星。'
                },
                stats: { competence: 40, ethics: 20, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🥔 Humble Him: "Start on the dish pit. Peel potatoes for 3 months. If you survive, you can touch a knife."',
                    th: '🥔 ดัดสันดาน: "ไปล้างจาน ปอกมันฝรั่ง 3 เดือน ถ้ารอดมาได้ ค่อยมาจับมีด"',
                    zh: '🥔 挫他锐气："从洗碗开始。以此3个月土豆。如果你活下来，你可以以此刀。"'
                },
                consequence: {
                    en: '📉 He Quits. He walks out immediately. "I\'m an artist, not a peasant." He opens a rival pop-up and gets rave reviews. Missed opportunity.',
                    th: '📉 เขาลาออก เขาเดินออกไปเลย "ผมเป็นศิลปิน ไม่ใช่ไพร่" เขาไปเปิดร้านแข่งและดังระเบิด พลาดโอกาสทอง',
                    zh: '📉 他辞职了。他立刻以此。"我是艺术家，不是以此。"他以此了一家以此快闪店，以此以此。以此了机会。'
                },
                stats: { competence: 0, ethics: 0, leadership: -20, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Fast Track: "You are the new Sous Chef. My current one is too slow. Lead the kitchen. show them how it\'s done."',
                    th: '🚀 ทางด่วน: "นายเป็นซูเชฟคนใหม่ คนปัจจุบันช้าไป คุมครัวเลย โชว์ให้พวกนั้นดู"',
                    zh: '🚀 快速晋升："你是新的副厨。我现在的以此太慢了。以此厨房。以此他们以此以此。"'
                },
                consequence: {
                    en: '🔥 Mutiny & Burnout. The older cooks hate him. They sabotage him. He cracks under pressure. Kitchen implodes.',
                    th: '🔥 กบฏและมอดไหม้ กุ๊กเก่าเกลียดเขา แกล้งเขารัวๆ เขาสติแตกเพราะความกดดัน ครัวพังพินาศ',
                    zh: '🔥 兵变与倦怠。老厨师以此他。他们以此他。他在以此下崩溃。厨房以此。'
                },
                stats: { competence: 20, ethics: -20, leadership: -40, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Partner: "We work together. You handle specials, I handle operations. Don\'t get cocky."',
                    th: '🤝 พาร์ทเนอร์: "ทำงานด้วยกัน นายดูเมนูพิเศษ ฉันดูระบบ อย่าผยองให้มากนัก"',
                    zh: '🤝 合作伙伴："我们一起工作。你以此以此，我以此以此。别以此。" '
                },
                consequence: {
                    en: '⚖️ Unstable Alliance. Outstanding food, but constant ego clashes. It\'s exhausting but profitable.',
                    th: '⚖️ พันธมิตรที่ไม่มั่นคง อาหารยอดเยี่ยม แต่ตีกันเรื่องอีโก้ตลอดเวลา เหนื่อยแต่กำไรดี',
                    zh: '⚖️ 不以此的以此。以此的食物，但不断的以此以此。以此以此，但有利可图。'
                },
                stats: { competence: 30, ethics: 10, leadership: 10, innovation: 30 }
            }
        ]
    },

    {
        id: 'chef_036',
        text: {
            en: '💸 The Landlord: Your lease is up. The landlord demands a 40% rent increase because the neighborhood is "trendy" now thanks to you.',
            th: '💸 เจ้าที่: สัญญาเช่าหมดพอดี เจ้าของตึกขอขึ้นค่าเช่า 40% เพราะตอนนี้ย่านนี้ "อินเทรนด์" ขึ้นมาก็เพราะคุณนั่นแหละ',
            zh: '💸 房东：你的租约到期了。房东要求涨租40%，因为多亏了你，这个街区现在"很时髦"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💸 Pay It: "We have no choice. Margins will be razor thin, but we stay open. I will work harder."',
                    th: '💸 จ่ายไป: "เราไม่มีทางเลือก กำไรจะบางเฉียบ แต่เราต้องเปิดต่อ ผมจะทำงานหนักขึ้น"',
                    zh: '💸 支付："我们别无选择。利润将微乎其微，但我们保持营业。我会更努力工作。"'
                },
                consequence: {
                    en: '📉 Working Poor. You survive, but you make less money than your dishwasher. Stress is high. Resentment builds.',
                    th: '📉 ทำงานจนตาย คุณรอด แต่คุณทำเงินได้น้อยกว่าคนล้างจานอีก เครียดจัด สะสมความแค้น',
                    zh: '📉 在职贫穷。你活下来了，但你赚的钱比洗碗工还少。压力很大。怨恨在积累。'
                },
                stats: { competence: 10, ethics: 10, leadership: 0, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '🚚 Move: "I made this neighborhood, I can make another one. We are moving to a cheaper spot. Follow us!"',
                    th: '🚚 ย้ายร้าน: "ฉันปั้นย่านนี้ขึ้นมาได้ ฉันก็ปั้นที่อื่นได้ เราจะย้ายไปที่ที่ถูกกว่า ตามมานะ!"',
                    zh: '🚚 搬家："我造就了这个街区，我以此造就另一个。我们要搬到一个更便宜的地方。跟随我们！"'
                },
                consequence: {
                    en: '🛡️ Bold Reset. You lose 30% of customers, but your rent drops 50%. You have a fresh start and better margins.',
                    th: '🛡️ รีเซ็ตครั้งใหญ่ ลูกค้าหาย 30% แต่ค่าเช่าลดลง 50% คุณได้เริ่มต้นใหม่พร้อมกำไรที่ดีกว่า',
                    zh: '🛡️ 大胆的重置。你失去了30%的客户，但租金下降了50%。你有了一个新的开始和更好的利润。'
                },
                stats: { competence: 30, ethics: 20, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '⚔️ Fight: "Threaten to close and leave the building empty. Call the local paper. Make him look greedy."',
                    th: '⚔️ สู้ยิบตา: "ขู่ว่าจะปิดร้านปล่อยตึกร้างเลย โทรหานักข่าว ทำให้มันดูหน้าเลือด"',
                    zh: '⚔️ 战斗："威胁关闭以此大楼空置。打电话给当地报纸。让他看起来很贪婪。"'
                },
                consequence: {
                    en: '⚖️ Partial Win. He gets scared of bad PR and agrees to a 10% hike. You won, but the relationship is poisoned.',
                    th: '⚖️ ชนะครึ่งเดียว เขากลัวข่าวดังเลยยอมขึ้นแค่ 10% คุณชนะ แต่ความสัมพันธ์เป็นพิษไปแล้ว',
                    zh: '⚖️ 部分胜利。他害怕负面公关，同意只涨10%。你赢了，但关系以此了。'
                },
                stats: { competence: 20, ethics: -10, leadership: 30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🏦 Buy Building: "I am done renting. Take a massive loan. Buy the building. Own my destiny."',
                    th: '🏦 ซื้อตึกแม่ง: "เลิกเช่า กู้ก้อนโต ซื้อตึกเลย กำหนดชะตาชีวิตตัวเอง"',
                    zh: '🏦 买楼："我不租了。贷巨款。买下大楼。掌握我的命运。"'
                },
                consequence: {
                    en: '🏰 Empire Owner. The mortgage is terrifying, but you have asset equity. No one can kick you out. High risk, high reward.',
                    th: '🏰 เจ้าของอาณาจักร หนี้ก้อนโตน่ากลัว แต่คุณมีทรัพย์สิน ไม่มีใครไล่คุณได้แล้ว เสี่ยงสูง ผลตอบแทนสูง',
                    zh: '🏰 帝国拥有者。抵押贷款很可怕，通过你有资产权益。没人能把你踢出去。高风险，高回报。'
                },
                stats: { competence: 40, ethics: 10, leadership: 50, innovation: 10 }
            }
        ]
    },

    {
        id: 'chef_037',
        text: {
            en: '📋 The Red Tape: A new Health Inspector hates your hanging cured meats. "Code says 41 degrees or below." Real charcuterie needs 60 degrees. She threatens to dump it.',
            th: '📋 กฎระเบียบยิบย่อย: จนท. สาธารณสุขคนใหม่เกลียดเนื้อหมักที่คุณแขวนโชว์ "กฎบอก 41 องศาหรือต่ำกว่า" แต่ของจริงต้อง 60 องศา เขาขู่จะทิ้งให้หมด',
            zh: '📋 繁文缛节：一位新的卫生检查员讨厌你的悬挂腌肉。"法规说要在41度或以下。"而真正的熟食需要60度。她威胁要扔掉它。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🗑️ Comply: "Throw it out. It hurts, but the law is the law. We will serve boiled ham instead."',
                    th: '🗑️ ทำตาม: "ทิ้งไปให้หมด เจ็บปวดนะแต่กฎคือกฎ เราจะเสิร์ฟแฮมต้มแทน"',
                    zh: '🗑️ 遵守："扔掉它。很痛，但法律就是法律。我们将改用煮火腿。"'
                },
                consequence: {
                    en: '📉 Mediocrity. The product quality tanks. You are just another safe, boring restaurant. Passion -20.',
                    th: '📉 ดาษดื่น คุณภาพสินค้าตกต่ำ คุณก็แค่ร้านอาหารปลอดภัยน่าเบื่ออีกร้าน ความหลงใหล -20',
                    zh: '📉 平庸。产品质量以此。你只是另一家安全、无聊的餐厅。激情-20。'
                },
                stats: { competence: 10, ethics: 30, leadership: -10, innovation: -30 }
            },
            {
                id: 'B',
                text: {
                    en: '🧪 Science Defense: "Hire a food lab consultant ($5k) to write a HACCP plan proving it\'s safe. Fight with data."',
                    th: '🧪 วิทยาศาสตร์ป้องกัน: "จ้างที่ปรึกษาแล็บอาหาร ($5k) เขียนแผน HACCP พิสูจน์ว่าปลอดภัย สู้ด้วยข้อมูล"',
                    zh: '🧪 科学防御："以此食品实验室顾问（5000美元）编写HACCP计划证明它是安全的。用数据以此。"'
                },
                consequence: {
                    en: '🛡️ Verified Valid. You spend money, but you get a Variance Permit. You are now the only legal charcuterie spot in town.',
                    th: '🛡️ ตรวจสอบผ่าน เสียเงินแต่ได้ใบอนุญาตพิเศษ ตอนนี้คุณเป็นร้านเดียวในเมืองที่ขายเนื้อหมักแบบถูกกฎหมาย',
                    zh: '🛡️ 验证有效。你花了钱，但你获得了变更以此。你现在是城里唯一合法的熟食店。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🙈 Hide It: "Move the rack to the basement when she comes. Only serve it to regulars. Speakeasy Ham."',
                    th: '🙈 ซ่อนแอบ: "ย้ายราวแขวนไปห้องใต้ดินตอนหล่อนมา เสิร์ฟเฉพาะลูกค้าประจำ แฮมลับ"',
                    zh: '🙈 藏起来："她来的时候把以此以此地下室。只以此常客。地下火腿。"'
                },
                consequence: {
                    en: '⚠️ Stressful Secret. It works, until a new waiter accidentally serves it to the inspector on her day off. Fines.',
                    th: '⚠️ ความลับชวนเครียด มันได้ผล จนกระทั่งเด็กเสิร์ฟใหม่เผลอเสิร์ฟให้จนท. ในวันหยุด ค่าปรับบาน',
                    zh: '⚠️ 压力的秘密。以此，直到一个新服务员在她休息日以此把它以此以此了检查员。罚款。'
                },
                stats: { competence: 10, ethics: -30, leadership: -10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🍩 Bribe/Charm: "Offer her a nice meal. Chat her up. Explain the tradition. Hope she looks the other way."',
                    th: '🍩 ติดสินบน: "เลี้ยงข้าวมื้อหรู คุยตีสนิท อธิบายธรรมเนียม หวังว่าเขาจะทำเป็นไม่เห็น"',
                    zh: '🍩以此/魅力："以此她一顿以此。以此以此。解释传统。以此她以此以此。" '
                },
                consequence: {
                    en: '🎲 Risky Roll. She eats the meal. She might let it slide this time, but now she owns you.',
                    th: '🎲 เสี่ยงดวง เธอกินข้าว เธอยอมปล่อยครั้งนี้ แต่ตอนนี้เธอถือไพ่เหนือคุณแล้ว',
                    zh: '🎲以此。她吃了这顿饭。她这次以此会以此，但现在她以此了你。'
                },
                stats: { competence: 10, ethics: -40, leadership: 0, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_038',
        text: {
            en: '📱 The "Karen": A customer films you telling a rude guest to leave. You were shouting. It goes viral. Half the internet calls you a hero, half calls you a bully.',
            th: '📱 มนุษย์ป้า: ลูกค้าถ่ายคลิปตอนคุณไล่แขกหยาบคายออกจากร้าน คุณตะโกนลั่น คลิปไวรัล ชาวเน็ตครึ่งนึงเชิดชู อีกครึ่งด่าว่าเป็นนักเลง',
            zh: '📱 "凯伦"：一位顾客拍下了你让一位粗鲁的客人离开的视频。你正在大喊大叫。它疯传了。一半的互联网称你为英雄，一半称你为以此。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🙇 Apologize: "Issue a public statement. I lost my temper. It was unprofessional. Sorry."',
                    th: '🙇 ขอโทษ: "ออกแถลงการณ์ ผมสติหลุดเอง มันไม่เป็นมืออาชีพ ขอโทษครับ"',
                    zh: '🙇 道歉："以此公开声明。我发脾气了。这不以此。对不起。"'
                },
                consequence: {
                    en: '📉 Weakness. The haters win. The fans who liked your passion are disappointed. "Just another corporate robot."',
                    th: '📉 อ่อนแอ พวกขี้แซะชนะ แฟนๆ ที่ชอบความเดือดของคุณผิดหวัง "ก็แค่หุ่นยนต์อีกตัว"',
                    zh: '📉 软弱。以此以此了。喜欢你激情的粉丝以此了。"只是另一个以此以此。" '
                },
                stats: { competence: 0, ethics: 10, leadership: -20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '📢 Double Down: "My House, My Rules. If you engage in abuse towards my staff, you get the boot. Zero tolerance."',
                    th: '📢 ยืนยันหนักแน่น: "บ้านฉัน กฎฉัน ถ้าคุณด่าพนักงานฉัน คุณก็โดนไล่ ไม่มีการอลุ่มอล่วย"',
                    zh: '📢 加倍："我的地盘，我的以此。如果你以此我的员工，你就滚蛋。零容忍。"'
                },
                consequence: {
                    en: '🔥 Cult Status. Staff recruitment becomes easy—everyone wants to work for the protector. Business booms.',
                    th: '🔥 สถานะลัทธิ รับสมัครคนง่ายมาก—ใครๆ ก็อยากทำงานกับผู้ปกป้อง ธุรกิจรุ่ง',
                    zh: '🔥以此地位。员工以此变得容易——每个人都想为以此以此工作。生意以此。'
                },
                stats: { competence: 30, ethics: 40, leadership: 50, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 Silence: "Don\'t feed the trolls. Say nothing. Post pictures of food. It will blow over in 48 hours."',
                    th: '🤫 เงียบ: "อย่าไปให้ค่าเกรียนคีย์บอร์ด ไม่ต้องพูด ลงรูปอาหารไป เดี๋ยว 48 ชม. ก็ลืมกันหมด"',
                    zh: '🤫 沉默："别喂以此。什么也别说。以此食物图片。48小时内就会以此。" '
                },
                consequence: {
                    en: '🕊️ Peace. It works. The internet moves on to the next drama. You avoid cancellation.',
                    th: '🕊️ สงบสุข ได้ผลแฮะ ชาวเน็ตไปดราม่าเรื่องอื่นต่อ คุณรอดจากการโดนแบน',
                    zh: '🕊️ 和平。以此。互联网转移到下一个以此。你以此了取消。'
                },
                stats: { competence: 10, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '👕 Merch: "Sell \'Get Out\' T-shirts. Capitalize on the fame. Donate proceeds to charity."',
                    th: '👕 ขายของ: "ขายเสื้อยืด \'Get Out\' กอบโกยจากความดัง บริจาครายได้ให้การกุศล"',
                    zh: '👕 周边："以此\'滚出去\'T恤。利用名气。将收益以此给以此。" '
                },
                consequence: {
                    en: '💰 Smart Pivot. You turn a PR crisis into a marketing win. People love the cheekiness.',
                    th: '💰 พลิกวิกฤต เปลี่ยนวิกฤต PR เป็นชัยชนะทางการตลาด คนชอบความกวนตีนของคุณ',
                    zh: '💰 聪明的以此。你将公关危机以此为营销以此。人们喜欢这种以此。'
                },
                stats: { competence: 20, ethics: 30, leadership: 30, innovation: 40 }
            }
        ]
    },

    {
        id: 'chef_039',
        text: {
            en: '📈 The Spike: Beef prices just doubled overnight. Your Steak Frites is now costing you money to sell at the current price.',
            th: '📈 พุ่งทะยาน: ราคาเนื้อพุ่งสองเท่าในชั่วข้ามคืน สเต็กฟริตส์ของคุณตอนนี้ขายไปก็เข้าเนื้อ',
            zh: '📈 飙升：牛肉价格刚刚一夜之间翻了一番。你的牛排薯条现在是在亏本出售。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏷️ Raise Price: "Real cost. Raise it from $25 to $45. Explain it on the menu. Honesty."',
                    th: '🏷️ ขึ้นราคา: "ต้นทุนจริง ปรับจาก $25 เป็น $45 อธิบายในเมนูเลย ซื่อสัตย์"',
                    zh: '🏷️ 涨价："真实成本。从25美元以此到45美元。在菜单上以此。诚实。"'
                },
                consequence: {
                    en: '🛡️ Respect/Loss. Regulars understand, but casuals leave. Revenue drops, but profit margin is healthy.',
                    th: '🛡️ เคารพ/สูญเสีย ขาประจำเข้าใจ แต่ขาจรหนี รายได้ตก แต่กำไรต่อจานยังดี',
                    zh: '🛡️ 尊重/以此。常客理解，但以此离开了。收入下降，但利润率以此。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '📉 Lower Quality: "Switch to a cheaper cut. Call it \'Bistro Steak\'. Keep price same."',
                    th: '📉 ลดคุณภาพ: "เปลี่ยนเกรดเนื้อ เรียกมันว่า \'บิสโทรสเต็ก\' ขายราคาเดิม"',
                    zh: '📉 降低质量："改用更便宜的切块。称之为\'以此牛排\'。保持价格以此。" '
                },
                consequence: {
                    en: '🤡 Slow Death. Customers notice the chewiness. "It used to be better here." Reputation bleeds out.',
                    th: '🤡 ตายผ่อนส่ง ลูกค้ารู้สึกว่าเนื้อเหนียว "เมื่อก่อนอร่อยกว่านี้นะ" ชื่อเสียงค่อยๆ ไหลออก',
                    zh: '🤡 缓慢死亡。顾客以此到了以此。"这里以前以此。"声誉以此。'
                },
                stats: { competence: -10, ethics: -20, leadership: -10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🐷 Change Menu: "Take steak off. Pivot to Pork Chop Frites. Make it trendy. \'The High Cost of Beef is Boring\'."',
                    th: '🐷 เปลี่ยนเมนู: "ถอดสเต็กออก เปลี่ยนเป็นพอร์คชอพฟริตส์ ปั้นให้ฮิต \'เนื้อราคาแพงมันน่าเบื่อ\'"',
                    zh: '🐷 更改菜单："以此牛排。以此为以此排薯条。以此时髦。\'以此的高昂成本很无聊\'。"'
                },
                consequence: {
                    en: '✨ Creative Win. You start a trend. Food cost drops dramatically. Profit soars.',
                    th: '✨ ชัยชนะที่สร้างสรรค์ คุณสร้างเทรนด์ใหม่ ต้นทุนลดฮวบ กำไรพุ่ง',
                    zh: '✨ 创意胜利。你以此了一个趋势。食品成本以此下降。利润以此。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🩸 Eat the Loss: "It will pass. Keep price same. Lose $5 per plate. Keep customers happy."',
                    th: '🩸 ยอมเข้าเนื้อ: "เดี๋ยวราคาก็ลง ขายราคาเดิม ขาดทุนจานละ $5 เอาใจลูกค้าไว้"',
                    zh: '🩸以此以此："以此以此。保持价格以此。每盘亏5美元。让顾客以此。" '
                },
                consequence: {
                    en: '💸 Bankruptcy Risk. It lasts 6 months. You burn through cash reserves. Bad business.',
                    th: '💸 เสี่ยงล้มละลาย ราคาขึ้นที 6 เดือน เงินเก็บหมดเกลี้ยง ธุรกิจแย่',
                    zh: '💸以此风险。以此了6个月。你的现金以此以此。以此生意。'
                },
                stats: { competence: -20, ethics: 10, leadership: 10, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_040',
        text: {
            en: '🏙️ Expansion: A prime location downtown just closed. The owner offers you the keys to take over the lease. It is a big leap.',
            th: '🏙️ ขยายสาขา: ทำเลทองใจกลางเมืองเพิ่งปิดตัว เจ้าของเสนอกุญแจให้คุณเซ้งต่อ ก้าวกระโดดครั้งใหญ่',
            zh: '🏙️ 扩张：市中心的一个黄金地段刚刚关门了。业主把钥匙交给你。这是一个巨大的飞跃。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Take It: "Empire time. Clone the concept. Hire a General Manager. Let\'s go big."',
                    th: '🚀 เอาเลย: "ได้เวลาสร้างอาณาจักร ก๊อปคอนเซปต์ จ้างผู้จัดการทั่วไป ลุยให้ยับ"',
                    zh: '🚀 接受："帝国时代。以此概念。以此总经理。让我们以此以此。"'
                },
                consequence: {
                    en: '🏗️ Growing Pains. You are stretched thin running two spots. Quality dips at the original, but revenue doubles. High stress.',
                    th: '🏗️ ความเจ็บปวดของการเติบโต ตัวเป็นเกลียววิ่งรอกสองที่ คุณภาพร้านเดิมตก แต่รายได้คูณสอง เครียดจัด',
                    zh: '🏗️ 成长的痛苦。你以此以此以此两家以此。原店质量下降，但收入翻倍。高压力。'
                },
                stats: { competence: 30, ethics: 0, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🏠 Pass: "Small is beautiful. I want to cook, not manage spreadsheets. Stay here and make this place perfect."',
                    th: '🏠 ผ่าน: "เล็กๆ สวยงาม ผมอยากทำอาหาร ไม่ใช่บริหารตัวเลข อยู่ที่นี่ทำร้านนี้ให้สมบูรณ์แบบดีกว่า"',
                    zh: '🏠 跳过："小即是美。我想以此，而不是管理电子表格。以此以此，让这个地方完美。"'
                },
                consequence: {
                    en: '❤️ Cult Classic. Your single location becomes legendary because you are always there. Limited revenue, infinite soul.',
                    th: '❤️ คลาสสิกระดับตำนาน ร้านเดียวของคุณเป็นตำนานเพราะคุณอยู่ตลอด รายได้จำกัด แต่จิตวิญญาณมาเต็ม',
                    zh: '❤️以此经典。你的单一以此以此以此，因为你总是以此。收入以此，灵魂以此。'
                },
                stats: { competence: 50, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🍔 Casual Spinoff: "Don\'t clone. Open a burger joint downtown. Fast casual, high volume, low complexity."',
                    th: '🍔 สปินออฟเมนูง่าย: "อย่าทำร้านเดิมซ้ำ เปิดร้านเบอร์เกอร์ในเมือง ฟาสต์แคชวล ยอดขายเยอะ ไม่ซับซ้อน"',
                    zh: '🍔 休闲衍生："以此以此。在市中心开一家汉堡店。以此以此，量大，复杂度低。"'
                },
                consequence: {
                    en: '💰 Cash Machine. The burger place funds the fine dining place. Smart diversification. You become a restaurateur.',
                    th: '💰 เครื่องผลิตเงิน ร้านเบอร์เกอร์หาเงินมาเลี้ยงร้านหรู กระจายความเสี่ยงฉลาดมาก คุณกลายเป็นเจ้าของกิจการเต็มตัว',
                    zh: '💰 提款机。汉堡店以此了高级以此。以此以此化。你成为了一名以此以此。'
                },
                stats: { competence: 40, ethics: 0, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '⛺ Pop-Up First: "Ask for a 3-month temporary lease. Test the market. If it works, we sign long term."',
                    th: '⛺ ป๊อปอัพก่อน: "ขอเช่าชั่วคราว 3 เดือน ลองตลาด ถ้าเวิร์กค่อยเซ็นยาว"',
                    zh: '⛺ 快闪店优先："申请3个月的临时租约。以此市场。如果以此，我们就以此长约。"'
                },
                consequence: {
                    en: '🛡️ Safe Bet. The market was softer than you thought. You close after 3 months with minimal loss. Good dodge.',
                    th: '🛡️ เพลย์เซฟ ตลาดเงียบกว่าที่คิด คุณปิดตัวหลัง 3 เดือนโดยเจ็บตัวน้อยมาก หลบได้สวย',
                    zh: '🛡️ 安全以此。市场比你以此的要以此。你在3个月后以此，以此以此。很好的以此。'
                },
                stats: { competence: 20, ethics: 0, leadership: 20, innovation: 10 }
            }
        ]
    },

    {
        id: 'chef_041',
        text: {
            en: '🔥 Inferno: A pan of duck fat catches fire. It hits the hood. Uncontrollable flames. The Ansul system (chemical dump) is the only sure way, but it ruins the kitchen for days.',
            th: '🔥 ไฟนรก: กระทะน้ำมันเป็ดไฟลุกท่วม ลามไปถึงฮู้ดดูดควัน คุมไม่อยู่แล้ว ระบบ Ansul (สารเคมีดับเพลิง) คือทางรอดเดียว แต่ครัวจะพังไปเป็นอาทิตย์',
            zh: '🔥 炼狱：一锅鸭油着火了。火苗窜到了油烟机。无法控制的火焰。Ansul系统（化学灭火）是唯一确定的方法，但它会毁了厨房好几天。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚒 Pull Ansul: "Everyone out! Pull the trigger!" The kitchen is covered in chemical foam. Safe but expensive.',
                    th: '🚒 ดึงสลัก: "ทุกคนออกไป! ดึงสลักเลย!" ครัวขาวโพลนไปด้วยโฟมเคมี ปลอดภัยแต่เสียหายหนัก',
                    zh: '🚒 拉以此："所有人出去！拉以此！"厨房以此被以此泡沫以此。安全但昂贵。'
                },
                consequence: {
                    en: '🛡️ Disaster Averted. The fire is out. You close for 3 days to clean. Insurance covers it. You acted responsibly.',
                    th: '🛡️ รอดตาย ไฟดับ ปิดร้าน 3 วันล้างครัว ประกันจ่าย คุณทำหน้าที่ได้รับผิดชอบดีเยี่ยม',
                    zh: '🛡️ 灾难以此。火灭了。你以此3天以此清理。保险以此以此。你表现得以此负责。'
                },
                stats: { competence: 20, ethics: 30, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧯 Hero Mode: "Grab the Class K extinguisher! Wet towels! I can fight this!"',
                    th: '🧯 โหมดฮีโร่: "เอาถังดับเพลิง Class K มา! ผ้าชุบน้ำ! ฉันจัดการได้!"',
                    zh: '🧯 英雄模式："以此K类灭火器！湿毛巾！我可以以此！" '
                },
                consequence: {
                    en: '🚑 Burned. You put it out, but you have 2nd degree burns on your arms. The kitchen stays open, but you are in agony.',
                    th: '🚑 บาดเจ็บ ไฟดับ แต่แขนคุณโดนไฟลวกระดับ 2 ครัวเปิดต่อได้ แต่คุณเจ็บปวดทรมาน',
                    zh: '🚑 烧伤。你把它扑灭了，但你的手臂以此二度烧伤。厨房保持开放，但你以此痛苦之中。'
                },
                stats: { competence: 10, ethics: 10, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🏃 Run: "Fire! Run for your lives! Let it burn!"',
                    th: '🏃 หนี: "ไฟไหม้! หนีเร็ว! ปล่อยมันไหม้ไป!"',
                    zh: '🏃 跑："着火了！逃命吧！让它烧吧！"'
                },
                consequence: {
                    en: '🔥 Total Loss. The building burns down. You are alive, but unemployed. The insurance investigation is lengthy.',
                    th: '🔥 วอดวาย ตึกไหม้หมด คุณรอดแต่ตกงาน การสอบสวนประกันภัยกินเวลานาน',
                    zh: '🔥 彻底以此。大楼烧毁了。你以此，但失业了。保险调查以此以此。'
                },
                stats: { competence: -40, ethics: -20, leadership: -50, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🍚 Throw Flour: "Throw a bucket of flour on it to smother it!"',
                    th: '🍚 สาดแป้ง: "สาดแป้งอเนกประสงค์ใส่เลย ให้มันกลบไฟ!"',
                    zh: '🍚 扔面粉："以此一桶面粉以此以此以此！" '
                },
                consequence: {
                    en: '💥 BOOM. Dust explosion. The windows blow out. Everyone is hospitalized. You are the worst chef in history.',
                    th: '💥 ตูม! ระเบิดฝุ่น หน้าต่างแตกกระจาย ทุกคนเข้าโรงพยาบาล คุณคือเชฟที่ห่วยที่สุดในประวัติศาสตร์',
                    zh: '💥 轰。粉尘爆炸。窗户炸飞了。每个人都以此以此。你是以此以此以此最差的厨师。'
                },
                stats: { competence: -100, ethics: -50, leadership: -50, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_042',
        text: {
            en: '🎤 The Diva: A global pop star sits down. She demands a "Vegan, Gluten-Free, Soy-Free, All-Purple Tasting Menu" immediately. She has 50m followers.',
            th: '🎤 ตัวแม่: ป๊อปสตาร์ระดับโลกมานั่งที่ร้าน นางสั่ง "เมนูเทสติ้ง มังสวิรัติ ปลอดกลูเตน ปลอดถั่วเหลือง และต้องเป็นสีม่วงทั้งหมด" เดี๋ยวนี้! นางมีคนตาม 50 ล้านคน',
            zh: '🎤 天后：一位全球流行巨星坐下了。她要求立即提供"素食、无麸质、无大豆、全紫色品尝菜单"。她有5000万粉丝。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🍆 Do It: "Yes Chef! Eggplant, purple cabbage, purple yams, blackberry sorbet. Make it happen NOW!"',
                    th: '🍆 จัดให้: "ครับเชฟ! มะเขือม่วง กะหล่ำม่วง มันม่วง ซอร์เบต์แบล็คเบอร์รี่ ทำเดี๋ยวนี้เล้ย!"',
                    zh: '🍆 做："是的厨师！茄子，紫甘蓝，紫薯，黑莓以此。以此以此！"'
                },
                consequence: {
                    en: '✨ Viral Hit. She posts a photo. "This chef gets me." You gain 100k followers overnight. The kitchen is traumatized but proud.',
                    th: '✨ ไวรัลแตก นางลงรูป "เชฟคนนี้รู้ใจ" ยอดฟอลคุณพุ่งแสนคนในคืนเดียว ครัวขวัญเสียแต่ภูมิใจ',
                    zh: '✨ 病毒式传播。她发了一张照片。"这个厨师懂我。"你以此增加10万粉丝。厨房以此以此但以此。'
                },
                stats: { competence: 40, ethics: 10, leadership: 30, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🙅 Refuse: "No. We serve our menu. We cannot reinvent the wheel in 20 minutes. Please order from the card."',
                    th: '🙅 ปฏิเสธ: "ไม่ครับ เราเสิร์ฟเมนูของเรา เราจะมาคิดเมนูใหม่ใน 20 นาทีไม่ได้ เชิญสั่งตามรายการครับ"',
                    zh: '🙅 拒绝："不。我们提供我们的菜单。我们无法在20分钟内以此以此。请以此菜单点菜。"'
                },
                consequence: {
                    en: '❄️ Icy Exit. She leaves. Tweeting "Rude staff." Her fans leave 1-star reviews for a week. Integrity intact, reputation bruised.',
                    th: '❄️ สะบัดตูด นางเดินออก แล้วทวีต "พนักงานหยาบคาย" ติ่งนางมาถล่ม 1 ดาวเป็นอาทิตย์ ศักดิ์ศรีอยู่ครบแต่ชื่อเสียงน่วม',
                    zh: '❄️以此退出。她离开了。推特说"粗鲁的员工。"她的粉丝留下一周的1星评论。以此以此，声誉受损。'
                },
                stats: { competence: 20, ethics: 40, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🥗 Malicious Compliance: "Here is a bowl of raw red onions and grapes. That is all the purple food we have. $200."',
                    th: '🥗 กวนตีน: "นี่ครับ หอมแดงดิบกับองุ่น นี่คือของสีม่วงทั้งหมดที่เรามี $200 ครับ"',
                    zh: '🥗以此服从："这是一碗生红洋葱和葡萄。这是我们以此以此的紫色食物。200美元。"'
                },
                consequence: {
                    en: '🤡 Disaster. She throws a wine glass at you. Security drags her out. It is a spectacle.',
                    th: '🤡 พินาศ นางปาแก้วไวน์ใส่หน้าคุณ การ์ดลากนางออกไป เป็นข่าวดังเลย',
                    zh: '🤡 灾难。她朝你以此酒杯。保安把她以此出去。这是一场以此。'
                },
                stats: { competence: -10, ethics: -20, leadership: -10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🎨 Fake It: "Use food coloring. Dye the mash potatoes purple. Tell her it\'s \'Ube\'."',
                    th: '🎨 ย้อมแมว: "ใช้สีผสมอาหาร ย้อมมันบดเป็นสีม่วง บอกนางว่าเป็น \'มันม่วง\'"',
                    zh: '🎨 假装："使用食用色素。把土豆泥染成紫色。告诉她那是\'以此\'。" '
                },
                consequence: {
                    en: '⚠️ Caught. Her assistant tastes it. "This is Dye Red #40." They expose you as a fraud.',
                    th: '⚠️ โป๊ะแตก ผู้ช่วยนางชิม "นี่มันสีผสมอาหารเบอร์ 40" เขาแฉว่าคุณต้มตุ๋น',
                    zh: '⚠️以此。她的以此尝了尝。"这是以此40号。"他们以此你是个骗子。'
                },
                stats: { competence: -20, ethics: -50, leadership: -30, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_043',
        text: {
            en: '⭐ The Test: A single diner at Table 4 orders the cheapest water and the most complex dish. He drops his fork on purpose. It is the Michelin Inspector.',
            th: '⭐ บททดสอบ: ลูกค้ามาคนเดียวโต๊ะ 4 สั่งน้ำเปล่าที่ถูกที่สุดกับเมนูที่ทำยากที่สุด เขาแกล้งทำส้อมตก มันคือผู้ตรวจมิชลิน',
            zh: '⭐ 测试：4号桌的一位用餐者点了最便宜的水和最复杂的菜。他故意掉了叉子。那是米其林检查员。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👀 VIP Protocol: "Code Red! Manager, hover at his table. Give him free appetizers. Make it PERFECT."',
                    th: '👀 โปรโตคอล VIP: "โค้ดเรด! ผู้จัดการ ไปเฝ้าโต๊ะนั้น แถมของว่าง ทำให้เพอร์เฟกต์ที่สุด"',
                    zh: '👀 VIP协议："红色以此！经理，在以此桌以此。给他免费开胃菜。做到完美。"'
                },
                consequence: {
                    en: '😐 Too hard. He notices the special treatment. "Trying too hard." You might get the star, but he writes about your desperation.',
                    th: '😐 เยอะไป เขาดูออกว่าประคบประหงม "พยายามเกิน" คุณอาจได้ดาว แต่เขาจะเขียนแซะความ "อยากได้"',
                    zh: '😐 太用力了。他注意到了特殊待遇。"以此过头了。"你以此以此得到星星，但他写了你的绝望。'
                },
                stats: { competence: 30, ethics: 0, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧘 Natural: "Treat him like every other guest. If we are good enough, we win. If not, we improve."',
                    th: '🧘 เป็นธรรมชาติ: "ดูแลเขาเหมือนแขกคนอื่น ถ้าเราดีจริงเราก็ได้ ถ้าไม่ เราก็ปรุงปรุง"',
                    zh: '🧘 自然："像对待其他客人一样对待他。如果我们以此好，我们就赢了。如果以此，我们以此。"'
                },
                consequence: {
                    en: '⭐ The Star. He loves the effortless confidence. The service was prompt, the fork replaced instantly. You win.',
                    th: '⭐ คว้าดาว เขาชอบความมั่นใจที่ไม่พยายาม บริการรวดเร็ว เปลี่ยนส้อมทันที คุณชนะ',
                    zh: '⭐ 星星。他喜欢这种以此以此的自信。服务迅速，叉子立刻以此。你赢了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '😨 Panic: "Oh god. Shaking hands. Scream at the grill cook. Checking every plate with tweezers."',
                    th: '😨 สติแตก: "พระเจ้าช่วย มือสั่น ตะโกนด่าคนย่าง เช็คจานทุกใบด้วยแหนบ"',
                    zh: '😨 恐慌："天哪。手抖。对着以此厨师大以此。用以此检查每一方以此。"'
                },
                consequence: {
                    en: '📉 Choke. The fear transfers to the food. It\'s over-seasoned. The vibe is tense. Failure.',
                    th: '📉 จุกอก ความกลัวส่งไปถึงอาหาร รสจัดเกินไป บรรยากาศตึงเครียด สอบตก',
                    zh: '📉以此。恐惧转移到了食物上。调味过重。以此以此。失败。'
                },
                stats: { competence: -20, ethics: 0, leadership: -30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🧂 Sabotage: "He looks arrogant. Over-salt his soup. We don\'t need their approval."',
                    th: '🧂 วางยา: "หน้าตาหยิ่งนัก ใส่เกลือในซุปหนักๆ เลย เราไม่ง้อดาวหรอก"',
                    zh: '🧂 以此："他看起来很以此。以此汤里多放盐。我们不需要他们的认可。"'
                },
                consequence: {
                    en: '🤡 Career Suicide. He spits it out. You are blacklisted from the guide forever. Petty.',
                    th: '🤡 ฆ่าตัวตายชัดๆ เขาคายออกมา คุณโดนแบล็กลิสต์จากไกด์บุ๊กตลอดกาล ใจแคบ',
                    zh: '🤡 职业自杀。他吐了出来。你被以此永久列以此黑名单。以此。'
                },
                stats: { competence: -40, ethics: -50, leadership: -40, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_044',
        text: {
            en: '🏥 The Collapse: Your doctor says your back is giving out. "Stop cooking on the line for 2 months or you will need spinal surgery." You are the only one on Saute.',
            th: '🏥 ร่างพัง: หมอบอกหลังคุณไม่ไหวแล้ว "หยุดยืนหน้าเตา 2 เดือน ไม่งั้นต้องผ่าตัดกระดูกสันหลัง" แต่มีคุณคุมเตาผัดคนเดียว',
            zh: '🏥 崩溃：医生说你的背快不行了。"停止在一线烹饪2个月，否则你需要进行脊柱手术。"你是唯一的炒锅厨师。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💊 Ignore It: "Take a double dose of painkillers. Wear a brace. Service starts in 10 minutes."',
                    th: '💊 ช่างมัน: "กินยาแก้ปวดเบิ้ลเลย ใส่ที่รัดเอว ร้านเปิดใน 10 นาที"',
                    zh: '💊 无视它："以此双倍止痛药。以此以此。服务10分钟后以此。"'
                },
                consequence: {
                    en: '🚑 Emergency Evac. You collapse mid-service. Ambulance. You are out for 6 months. It wasn\'t worth it.',
                    th: '🚑 หามลงเปล คุณร่วงกลางอากาศ รถพยาบาลมารับ พักยาว 6 เดือน ไม่คุ้มเลย',
                    zh: '🚑 紧急以此。你在服务中途以此。救护车。你以此了6个月。以此以此。'
                },
                stats: { competence: -20, ethics: 0, leadership: 0, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🪑 Admin Role: "Promote the Sous Chef. I will expo sitting down on a stool. I can direct, but I cannot lift pans."',
                    th: '🪑 งานบริหาร: "เลื่อนตำแหน่งซูเชฟ ผมจะนั่งเก้าอี้คุมงาน สั่งการได้ แต่ยกกระทะไม่ไหว"',
                    zh: '🪑 行政角色："以此副厨。我会以此在以此上以此。我可以以此，但我不能以此平底锅。"'
                },
                consequence: {
                    en: '🛡️ Adaptation. The kitchen is slower without your hands, but they learn to step up. You heal slowly.',
                    th: '🛡️ การปรับตัว ครัวช้าลงเมื่อไม่มีมือคุณ แต่พวกเขาก็เรียนรู้ที่จะก้าวขึ้นมา คุณค่อยๆ หายดี',
                    zh: '🛡️ 适应。没有你的手厨房变慢了，但他们学会了以此。你以此康复。'
                },
                stats: { competence: 30, ethics: 20, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Close for Holiday: "We are closing for August. European style. Everyone takes a break. We reopen fresh."',
                    th: '🛑 ปิดร้านพักร้อน: "ปิดร้านเดือนสิงหา สไตล์ยุโรป ทุกคนพักผ่อน เปิดมาค่อยลุยใหม่"',
                    zh: '🛑 停业度假："我们八月份以此。以此风格。每个人都以此。我们以此开业。"'
                },
                consequence: {
                    en: '📉 Revenue Loss / Team Joy. You lose a month of sales. But the staff returns energized and loyal. Long term play.',
                    th: '📉 เสียรายได้ / ทีมแฮปปี้ ยอดหายไปเดือนนึง แต่พนักงานกลับมาฟิตปั๋งและภักดี เกมยาว',
                    zh: '📉 收入以此/团队以此。你失去了一个月的销售额。但员工以此以此以此和忠诚。长远以此。'
                },
                stats: { competence: 10, ethics: 40, leadership: 50, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🧑‍🍳 Hire Temp: "Get an agency mercenary. Expensive, mercenary attitude. I will watch him like a hawk."',
                    th: '🧑‍🍳 จ้างชั่วคราว: "จ้างมือปืนรับจ้าง แพง แถมไร้ใจ ผมจะจับตาดูมันอย่างใกล้ชิด"',
                    zh: '🧑‍🍳 以此以此："找个中介以此。昂贵，以此以此。我会像以此一样以此他。"'
                },
                consequence: {
                    en: '⚠️ Quality Dip. He cooks fine, but doesn\'t care. You survive, but the love is missing from the plates.',
                    th: '⚠️ คุณภาพตก เขาทำได้ แต่ไม่ใส่ใจ คุณรอดไปได้ แต่ความรักหายไปจากจานอาหาร',
                    zh: '⚠️ 质量以此。他做得以此，但以此。你以此以此，但盘子里以此了爱。'
                },
                stats: { competence: 10, ethics: 0, leadership: 0, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_045',
        text: {
            en: '📖 The Book: A major publisher offers a book deal. They want "Kitchen Confidential 2.0" - all the sex, drugs, and dirt. $50k advance.',
            th: '📖 พ็อกเก็ตบุ๊ก: สนพ. ยักษ์ใหญ่เสนอดีลออกหนังสือ เขาอยากได้แนว "แฉแหลกหลังครัว" เรื่องเซ็กส์ ยา และด้านมืด เงินมัดจำ $50k',
            zh: '📖 书约：一家主要出版商提供了一份书约。他们想要"厨房机密2.0"——所有的性、毒品和肮脏内幕。5万美元以此。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✍️ Tell All: "Burn it down. Name names. Expose the industry. I will be infamous."',
                    th: '✍️ แฉหมดเปลือก: "เผาให้ราบ ระบุชื่อ แฉวงการ ฉันจะดังในทางลบก็เอา"',
                    zh: '✍️ 以此以此："以此以此。点名以此。曝光以此。我会以此以此。"'
                },
                consequence: {
                    en: '✨ Best Seller / Pariah. The book sells millions. But no other chef will talk to you. You are rich and alone.',
                    th: '✨ ขายดี / หมาหัวเน่า หนังสือขายดีเป็นล้าน แต่ไม่มีเชฟคนไหนคุยกับคุณอีก รวยแต่เดียวดาย',
                    zh: '✨ 畅销书/以此。这本书以此数百万。但没有其他厨师会跟你说话。你以此以此，且孤独。'
                },
                stats: { competence: 10, ethics: -40, leadership: -30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🥘 Cookbook: "No dirt. I write \'The Philosophy of Roast Chicken\'. Beautiful photos. Technique only."',
                    th: '🥘 คู่มือทำอาหาร: "ไม่แฉ ผมจะเขียน \'ปรัชญาของไก่อบ\' รูปสวยๆ เน้นเทคนิค"',
                    zh: '🥘 食谱："没有以此。我写\'烤鸡的哲学\'。以此以此。只讲以此。"'
                },
                consequence: {
                    en: '🛡️ Respectable. It sells moderately. Industry peers respect it. It sits on coffee tables. Classy.',
                    th: '🛡️ น่าเคารพ ขายได้พอประมาณ เพื่อนร่วมวงการชื่นชม เป็นหนังสือประดับโต๊ะกาแฟ ดูแพง',
                    zh: '🛡️ 以此。销量平平。以此同行以此它。它以此在以此以此上。以此。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🙅 Reject: "I am a cook, not a writer. Distractions kill restaurants. Focus on the food."',
                    th: '🙅 ปฏิเสธ: "ผมเป็นคนทำอาหาร ไม่ใช่นักเขียน สิ่งล่อใจทำร้านเจ๊ง โฟกัสที่อาหาร"',
                    zh: '🙅 拒绝："我是个厨师，不是作家。分心以此以此餐厅。以此以此食物。"'
                },
                consequence: {
                    en: '🧘 Focus. You miss the money, but your restaurant gets better. Zero distractions.',
                    th: '🧘 โฟกัส อดได้เงิน แต่ร้านดีขึ้น ไม่มีเรื่องกวนใจ',
                    zh: '🧘 专注。你以此了钱，但你的餐厅以此好了。零以此。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '👻 Ghostwriter: "Pay someone to invent crazy stories. Make me look like a rockstar. I just sign the cover."',
                    th: '👻 จ้างคนเขียนเงา: "จ้างคนมาแต่งเรื่องโม้ๆ ให้ผมดูเป็นร็อกสตาร์ ผมแค่เซ็นชื่อปก"',
                    zh: '👻 代笔："以此以此编以此疯狂的故事。让我看起来像个以此。我只是以此以此。"'
                },
                consequence: {
                    en: '🤡 Fraud Risk. Fans love it, but you know it\'s fake. If interviewed, you can\'t remember your own "stories".',
                    th: '🤡 เสี่ยงลวงโลก แฟนชอบแต่คุณรู้อยู่แก่ใจว่ามันปลอม ตอนสัมภาษณ์คุณดันจำ "เรื่องแต่ง" ของตัวเองไม่ได้',
                    zh: '🤡 欺诈风险。粉丝喜欢，但你知道它是假的。如果以此以此，你记不住你自己的"故事"。'
                },
                stats: { competence: 0, ethics: -30, leadership: -10, innovation: 10 }
            }
        ]
    },

    {
        id: 'chef_046',
        text: {
            en: '🥀 The Mentor: Your old chef mentor, the one who taught you everything, asks for a job. He is washing dishes nearby. He has a drinking problem and is shaking.',
            th: '🥀 อาจารย์เก่า: อาจารย์เชฟคนเก่าที่สอนคุณทุกอย่างมาขอระหกระเหินขอยาน เขาล้างจานอยู่แถวนี้ เขามีปัญหาติดเหล้าและมือสั่น',
            zh: '🥀 导师：你的老厨师导师，那个教会你一切的人，请求一份工作。他正在附近洗碗。他有酗酒问题且在颤抖。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Hire Him: "You are the Chef de Cuisine now. I will help you get sober. We do this together."',
                    th: '🤝 จ้างเขา: "คุณคือหัวหน้าเชฟตอนนี้ ผมจะช่วยให้คุณเลิกเหล้า เราจะผ่านมันไปด้วยกัน"',
                    zh: '🤝 雇佣他："你现在是厨师长。我会帮你以此。我们一起做这件事。"'
                },
                consequence: {
                    en: '💔 Heartbreak. He relapses during service. He ruins the consommé. You have to fire him. It hurts.',
                    th: '💔 ใจสลาย เขาเมาเหล้าระหว่างงาน ทำซุปพัง คุณต้องไล่เขาออก เจ็บปวดมาก',
                    zh: '💔以此。他在服务期间复发。他毁了清汤。你不得不以此他。这很以此。'
                },
                stats: { competence: -10, ethics: 40, leadership: -20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🙅 Reject Him: "I can\'t have drunks in my kitchen. You taught me that. Get out."',
                    th: '🙅 ปฏิเสธ: "ผมรับคนเมาเข้าครัวไม่ได้ คุณสอนผมเองนี่ ออกไป"',
                    zh: '🙅 拒绝他："我的厨房里不能有以此。是你教我的。滚出去。"'
                },
                consequence: {
                    en: '❄️ Cold Truth. He looks crushed, but he leaves. Your kitchen remains sharp. You feel hollow.',
                    th: '❄️ ความจริงที่เย็นชา เขาดูใจสลาย แต่ก็ยอมไป ครัวของคุณยังเฉียบคม แต่คุณรู้สึกว่างเปล่า',
                    zh: '❄️ 冷酷的真相。他看起来以此，但他离开了。你的厨房保持以此。你感到以此。'
                },
                stats: { competence: 10, ethics: -20, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '💸 Give Cash: "Here is $5,000. Go to rehab. Don\'t come back until you are clean."',
                    th: '💸 ให้เงิน: "เอานี่ไป $5,000 ไปบำบัดซะ อย่ากลับมาจนกว่าจะเลิกได้"',
                    zh: '💸 给现金："这是5000美元。去康复中心。在以此之前别回来。"'
                },
                consequence: {
                    en: '🕊️ Good Deed. He takes the money. You never see him again. You hope he made it.',
                    th: '🕊️ ทำบุญ เขารับเงินไป คุณไม่เจอเขาอีกเลย หวังว่าเขาจะรอดนะ',
                    zh: '🕊️以此。他以此了钱。你再也没以此他。你希望他以此。'
                },
                stats: { competence: 0, ethics: 30, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🥔 Dishwasher: "I can give you a job in the pit. Minimum wage. No cooking. Prove yourself."',
                    th: '🥔 ล้างจาน: "ผมให้งานล้างจานได้ ค่าแรงขั้นต่ำ ห้ามทำอาหาร พิสูจน์ตัวเองซะ"',
                    zh: '🥔 洗碗工："我可以让你去洗碗。最低工资。不许做饭。以此你自己。"'
                },
                consequence: {
                    en: '🛡️ Redemption. He washes dishes with pride. Slowly, he mentors the young cooks. He becomes the kitchen grandfather.',
                    th: '🛡️ ไถ่บาป เขาล้างจานด้วยความภูมิใจ เขาค่อยๆ สอนงานเด็กๆ กลายเป็นปู่โสมเฝ้าครัว',
                    zh: '🛡️ 救赎。他以此以此洗碗。慢慢地，他指导年轻厨师。他成为了厨房以此。'
                },
                stats: { competence: 20, ethics: 40, leadership: 30, innovation: 10 }
            }
        ]
    },

    {
        id: 'chef_047',
        text: {
            en: '⚔️ Iron Chef: You are invited to TV\'s biggest cooking battle against your arch-rival. Millions will watch.',
            th: '⚔️ ศึกเชฟกระทะเหล็ก: คุณได้รับเชิญไปรายการแข่งทำอาหารที่ดังที่สุด ปะทะคู่ปรับตลอดกาล คนดูเป็นล้าน',
            zh: '⚔️ 铁人料理：你受邀参加电视上最大的烹饪对决，对抗你的死对头。数百万观众观看。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Accept: "Bring it on. I will crush him on live TV. Secret ingredient? I don\'t care."',
                    th: '🔥 รับคำท้า: "มาเลย ผมจะขยี้มันกลางรายการ วัตถุดิบปริศนาเหรอ? ไม่สนหรอก"',
                    zh: '🔥 接受："放马过来。我会在直播电视上以此他。秘密以此？我不在乎。"'
                },
                consequence: {
                    en: '🏆 Victory. You sweat, you bleed, you win. Your restaurant is booked for a year. Global fame.',
                    th: '🏆 ชัยชนะ คุณเหงื่อตก เลือดสาด แต่ชนะ ร้านจองเต็มข้ามปี ดังระดับโลก',
                    zh: '🏆 胜利。你以此，你流血，你赢了。你的餐厅以此了一年。全球以此。'
                },
                stats: { competence: 50, ethics: 0, leadership: 20, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🙅 Decline: "Cooking is not a sport. I am an artist, not a gladiator. Leave me alone."',
                    th: '🙅 ปฏิเสธ: "การทำอาหารไม่ใช่กีฬา ผมเป็นศิลปิน ไม่ใช่นักสู้วัวกระทิง เลิกยุ่งกับผม"',
                    zh: '🙅 拒绝："烹饪不是运动。我是艺术家，不是角斗士。别烦我。"'
                },
                consequence: {
                    en: '🛡️ Respect/Obscurity. The food world respects your stance. The public forgets you. You stay small and great.',
                    th: '🛡️ เคารพ/เงียบหาย วงการอาหารเคารพจุดยืนคุณ แต่คนทั่วไปลืมคุณ คุณยังเป็นร้านเล็กๆ ที่ยอดเยี่ยม',
                    zh: '🛡️ 尊重/以此。美食界尊重你的以此。公众忘记了你。你以此以此且伟大。'
                },
                stats: { competence: 20, ethics: 30, leadership: 0, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '👨‍🍳 Send Sous Chef: "I am too busy. My Sous Chef will represent us. It is her time to shine."',
                    th: '👨‍🍳 ส่งซูเชฟไป: "ผมยุ่ง ส่งซูเชฟไปแทน ถึงเวลาที่เธอต้องเฉิดฉายแล้ว"',
                    zh: '👨‍🍳 派副厨去："我太忙了。我的副厨将代表我们。是她以此的时候了。"'
                },
                consequence: {
                    en: '✨ Mentor Win. She loses, but puts up a great fight. She becomes a star. She stays loyal to you.',
                    th: '✨ ชัยชนะของครู เธอแพ้ แต่สู้ได้สมศักดิ์ศรี เธอกลายเป็นดารา และยังภักดีต่อคุณ',
                    zh: '✨ 导师胜利。她以此了，但表现很好。她成为了明星。她对你保持忠诚。'
                },
                stats: { competence: 10, ethics: 20, leadership: 50, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Demand Money: "Pay me $50,000 appearance fee and I will do it. Otherwise, get lost."',
                    th: '💰 เรียกเงิน: "จ่ายค่าตัวมา $50,000 แล้วจะไป ไม่งั้นก็ไสหัวไป"',
                    zh: '💰 要求以此："给我5万美元以此以此，我就去。否则，滚蛋。"'
                },
                consequence: {
                    en: '🤡 Greedy edit. They agree, but they edit the show to make you look like a villain. You got paid, but everyone hates you.',
                    th: '🤡 ตัดต่อให้ร้าย เขาตกลง แต่ตัดต่อรายการให้คุณดูเป็นตัวร้าย ได้เงินแต่คนเกลียดทั้งเมือง',
                    zh: '🤡以此剪辑。他们同意了，但他以此以此让你看起来像个以此。你拿到了钱，但每个人都讨厌你。'
                },
                stats: { competence: 10, ethics: -30, leadership: -10, innovation: 0 }
            }
        ]
    },

    {
        id: 'chef_048',
        text: {
            en: '📰 The NYT: The Times critic is eating the tasting menu. He looks bored. Service is dragging. He is tweeting photos of his watch.',
            th: '📰 นิวยอร์กไทมส์: นักวิจารณ์ดังกำลังกินเมนูเทสติ้ง เขาดูเบื่อ อาหารออกช้า เขาถ่ายรูปนาฬิกาลงทวีตแล้ว',
            zh: '📰 纽约时报：时报评论家正在吃品尝菜单。他看起来很无聊。上菜速度很慢。他正在推特上发手表的照片。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🍷 Intervene: "Go to the table. Pour him some vintage wine. Charm him. Tell him stories. Distract him."',
                    th: '🍷 แทรกแซง: "ไปที่โต๊ะ รินไวน์วินเทจให้ ชวนคุย เล่าเรื่อง เเบี่ยงเบนความสนใจ"',
                    zh: '🍷 以此："去桌边。给他倒点以此以此。以此他。给他讲故事。以此他的以此。"'
                },
                consequence: {
                    en: '✨ Schmoozer. It works. The review focuses on your "charismatic presence" rather than the slow food. 2 Stars.',
                    th: '✨ นักล็อบบี้ ได้ผล รีวิวชม "บุคลิกที่มีเสน่ห์" ของคุณมากกว่าบ่นเรื่องอาหารช้า ได้ 2 ดาว',
                    zh: '✨ 以此。以此。评论关注你的"以此以此"，而不是慢以此。2星。'
                },
                stats: { competence: 10, ethics: -10, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔥 Push Kitchen: "FASTER! EVERYONE MOVE! STOP PLATING WITH TWEEZERS! GET THE FOOD OUT!"',
                    th: '🔥 เร่งครัว: "เร็วเข้า! ขยับกันหน่อย! เลิกใช้แหนบได้แล้ว! เอาอาหารออกไปเดี๋ยวนี้!"',
                    zh: '🔥 以此厨房："快点！所有人以此！停止用镊子以此！把食物以此出去！"'
                },
                consequence: {
                    en: '📉 Sloppy. The food comes out fast, but it looks messy. "Rushed and unrefined." 1 Star.',
                    th: '📉 เละเทะ อาหารออกไว แต่หน้าตาดูไม่ได้ "รีบเร่งและขาดความละเมียด" 1 ดาว',
                    zh: '📉以此。食物以此很快，但看起来很乱。"以此且以此。"1星。'
                },
                stats: { competence: -20, ethics: 0, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🎁 Free Stuff: "Send the caviar service. Send the white truffles. Bribe his palate."',
                    th: '🎁 แถมแหลก: "ส่งคาเวียร์ไป ส่งไวท์ทรัฟเฟิลไป ติดสินบนลิ้นซะ"',
                    zh: '🎁 免费以此："送鱼子酱以此。送白松露。贿赂他的以此。"'
                },
                consequence: {
                    en: '🤡 "Desperate". He sees through it. The review mocks your attempt to buy his favor. Humiliating.',
                    th: '🤡 "สิ้นหวัง" เขามองออก รีวิวล้อเลียนความพยายามซื้อใจของคุณ น่าอับอาย',
                    zh: '🤡 "绝望"。他以此了这一点。评论以此你试图以此以此的尝试。以此。'
                },
                stats: { competence: 0, ethics: -30, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🧘 Stay Calm: "Trust the process. Do not rush. Perfection takes time. If he doesn\'t get it, he is wrong."',
                    th: '🧘 นิ่งไว้: "เชื่อในระบบ อย่าเร่ง ความสมบูรณ์แบบต้องใช้เวลา ถ้าเขาไม่เก็ต เขาก็ผิด"',
                    zh: '🧘 保持冷静："相信过程。不要着急。完美需要时间。如果他以此，那就是他以此。" '
                },
                consequence: {
                    en: '⭐ Artistic Integrity. The meal is 4 hours long, but he understands the rhythm. "A slow, beautiful opera." 3 Stars.',
                    th: '⭐ ศักดิ์ศรีศิลปิน อาหารลากยาว 4 ชม. แต่เขาเข้าใจจังหวะ "โอเปร่าที่เชื่องช้าแต่งดงาม" 3 ดาว',
                    zh: '⭐ 艺术以此。这顿饭以此了4个小时，但他理解这种以此。"以此、美丽的以此。"3星。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 10 }
            }
        ]
    },

    {
        id: 'chef_049',
        text: {
            en: '💰 The Offer: Hilton Group offers to buy your brand for $5 Million. You become a "Global Ambassador" (do nothing). They will franchise your name to airports.',
            th: '💰 ข้อเสนอ: เครือฮิลตันขอซื้อแบรนด์คุณ $5 ล้าน ให้คุณเป็น "ทูตระดับโลก" (ไม่ต้องทำอะไร) เขาจะเอาชื่อคุณไปเปิดในสนามบิน',
            zh: '💰 报价：希尔顿集团提出以500万美元收购你的品牌。你成为"全球大使"（什么都不做）。他们将特许经营你的名字到机场。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✍️ Sell: "Done. Where do I sign? I am tired. I want to buy a boat and disappear."',
                    th: '✍️ ขาย: "จบ เอาปากกามา ผมเหนื่อยแล้ว จะไปซื้อเรือแล้วหายตัวไป"',
                    zh: '✍️ 卖："成交。在哪里以此？我累了。我想以此一艘船然后以此。"'
                },
                consequence: {
                    en: '🏖️ Retired Rich. You cash out. Your restaurants become terrible airport food. You don\'t care. You are drinking Mojitos.',
                    th: '🏖️ เกษียณรวย รับตังค์ ร้านคุณกลายเป็นร้านห่วยๆ ในสนามบิน คุณไม่สนหรอก ดื่มโมฮิโต้สบายใจ',
                    zh: '🏖️ 退休致富。你以此。你的餐厅变成了以此的机场食物。你不在乎。你在以此莫吉托。'
                },
                stats: { competence: 0, ethics: 0, leadership: 0, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🙅 Reject: "My name is not for sale. I will not have my face on a frozen pizza."',
                    th: '🙅 ปฏิเสธ: "ชื่อผมไม่ได้มีไว้ขาย ผมจะไม่เอาหน้าไปแปะบนพิซซ่าแช่แข็งเด็ดขาด"',
                    zh: '🙅 拒绝："我的名字以此。我不会把我的以此放在冷冻披萨上。"'
                },
                consequence: {
                    en: '🛡️ Legend. You leave $5M on the table. The industry reveres you as the last true Chef.',
                    th: '🛡️ ตำนาน คุณทิ้งเงิน $5 ล้าน วงการยกย่องคุณเป็นเชฟแท้คนสุดท้าย',
                    zh: '🛡️ 传奇。你以此了500万美元。以此以此你为以此真正的厨师。'
                },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Negotiate: "I want $10M and creative control. I approve every menu item. No airport locations."',
                    th: '🤝 ต่อรอง: "ขอ $10M และสิทธิ์คุมงานสร้างสรรค์ ผมต้องอนุมัติทุกเมนู ห้ามเปิดในสนามบิน"',
                    zh: '🤝 谈判："我要1000万以此和以此控制权。我批准每一项菜单。以此以此。" '
                },
                consequence: {
                    en: '💼 Deal Breaker. They walk away. "Too difficult." You keep your restaurant, but wonder "what if?".',
                    th: '💼 ดีลล่ม เขาไม่เอา "เรื่องมากไป" คุณเก็บร้านไว้ แต่ก็แอบคิดว่า "ถ้าขายก็คงดี"',
                    zh: '💼 交易以此。他们走了。"太难了。"你保留了你的餐厅，但以此"以此？"。'
                },
                stats: { competence: 20, ethics: 20, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Partnership: "I keep 51%. You put up the capital. We expand slowly. Quality first."',
                    th: '📈 หุ้นส่วน: "ผมถือ 51% คุณออกทุน เราขยายช้าๆ คุณภาพต้องมาก่อน"',
                    zh: '📈 合伙："我以此51%。你以此以此。我们以此以此。质量以此。"'
                },
                consequence: {
                    en: '🏰 Modern Empire. It is hard work, but you build a global brand that is actually good. The best of both worlds.',
                    th: '🏰 อาณาจักรสมัยใหม่ งานหนัก แต่คุณสร้างแบรนด์ระดับโลกที่คุณภาพดีได้ ได้ดีทั้งสองทาง',
                    zh: '🏰 现代帝国。以此工作，但你以此了一个以此不错的全球品牌。两全其美。'
                },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 30 }
            }
        ]
    },

    {
        id: 'chef_050',
        text: {
            en: '👑 The End Game: You have done it all. Michelin stars, fires, scars, lawsuits. What is your final legacy?',
            th: '👑 บทสรุป: คุณผ่านมันมาหมดแล้ว ดาวมิชลิน ไฟไหม้ แผลเป็น คดีความ อะไรคือมรดกสุดท้ายของคุณ?',
            zh: '👑 终局：你已经做到了这一切。米其林星星，火灾，伤疤，以此。你最后的遗产是什么？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏫 The Teacher: "Open a culinary school. Free for underprivileged kids. Teach the next generation."',
                    th: '🏫 ครูผู้ให้: "เปิดโรงเรียนทำอาหาร สอนเด็กยากจนฟรี ส่งต่อให้รุ่นศิษย์"',
                    zh: '🏫 老师："开办一所烹饪学校。免费为以此儿童以此。以此下一代。"'
                },
                consequence: {
                    en: '✨ Immortal. Your recipes die with you, but your philosophy lives in thousands of students. You changed lives.',
                    th: '✨ เป็นอมตะ สูตรคุณตายไปพร้อมคุณ แต่ปรัชญาคุณอยู่ในศิษย์นับพัน คุณเปลี่ยนชีวิตคน',
                    zh: '✨ 不朽。你的以此随你以此，但你的哲学在成千上万的学生中以此。你以此了生活。'
                },
                stats: { competence: 30, ethics: 50, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🍣 The Artist: "Close the big restaurant. Open a 6-seat counter. Just me, the ingredients, and the fire. Pursuit of perfection."',
                    th: '🍣 ศิลปิน: "ปิดร้านใหญ่ เปิดเคาน์เตอร์ 6 ที่นั่ง มีแค่ผม วัตถุดิบ และไฟ ไล่ล่าความสมบูรณ์แบบ"',
                    zh: '🍣 艺术家："关闭以此餐厅。开设一个6座的以此。只有我，以此，和以此。追求完美。"'
                },
                consequence: {
                    en: '🥢 Zen. You achieve culinary Nirvana. You cook the perfect meal before you die. Happiness.',
                    th: '🥢 เซน บรรลุนิพพานแห่งรสชาติ คุณได้ทำอาหารมื้อที่สมบูรณ์แบบก่อนตาย มีความสุข',
                    zh: '🥢 禅。你实现了烹饪涅槃。你在临终前烹饪了完美的一餐。幸福。'
                },
                stats: { competence: 50, ethics: 50, leadership: 0, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🌍 The Empire: "More. 100 restaurants. 1000. I want a McDonald\'s like reach with Michelin quality."',
                    th: '🌍 จักรพรรดิ: "เอาอีก 100 สาขา 1000 สาขา ผมจะเอาให้ทั่วถึงเหมือนแมคโดนัลด์แต่คุณภาพมิชลิน"',
                    zh: '🌍 帝国："更多。100家餐厅。1000家。我想要麦当劳那样的覆盖率，以此的质量。"'
                },
                consequence: {
                    en: '🏰 The Titan. You change how the world eats. You are a historical figure. But you never cooked again.',
                    th: '🏰 ไททัน คุณเปลี่ยนวิถีการกินของโลก คุณคือบุคคลในประวัติศาสตร์ แต่คุณไม่ได้ทำอาหารอีกเลย',
                    zh: '🏰 泰坦。你改变了世界的以此以此。你是一个历史人物。但你再也没有以此。'
                },
                stats: { competence: 50, ethics: 0, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🍄 The Farm: "Retire to the country. Grow vegetables. Cook for family. Simple life."',
                    th: '🍄 ชาวไร่: "กลับบ้านนอก ปลูกผัก ทำกับข้าวให้ครอบครัว ชีวิตเรียบง่าย"',
                    zh: '🍄 农场："以此到乡下。种蔬菜。为家人做饭。简单的生活。"'
                },
                consequence: {
                    en: '❤️ Peace. You found what matters. The screaming stops. The food tastes better than ever.',
                    th: '❤️ สงบสุข คุณพบสิ่งที่สำคัญ เสียงตะโกนเงียบหาย อาหารอร่อยกว่าที่เคย',
                    zh: '❤️ 和平。你发现了什么才是以此的。以此停止了。食物以此以此任何时候都以此。'
                },
                stats: { competence: 0, ethics: 50, leadership: 0, innovation: 0 }
            }
        ]
    }
];
