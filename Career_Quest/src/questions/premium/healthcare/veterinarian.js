
export const veterinarianQuestions = [
    {
        id: 'vet_001',
        text: {
            en: '💔 The Economic Euthanasia: A family brings in a 2-year-old dog with a broken leg. It\'s totally fixable ($3000 surgery). The family can\'t afford it. They ask you to euthanize the dog because "it\'s cheaper."',
            th: '💔 การการุณยฆาตทางเศรษฐกิจ: ครอบครัวหนึ่งพาสุนัข 2 ปีขาหักมา รักษาได้แน่นอน (ผ่าตัด $3000) ครอบครัวจ่ายไม่ไหว พวกเขาขอให้คุณการุณยฆาตเพราะ "ถูกกว่า"',
            zh: '💔 经济安乐死：一个家庭带来了一只2岁的腿部骨折的狗。完全可以治愈（3000美元手术费）。这家人负担不起。他们要求你安乐死这只狗，因为"更便宜"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💉 Do It: "It\'s their property. If I don\'t do it, they might shoot it themselves. It\'s the humane, legal option."',
                    th: '💉 ทำเลย: "มันเป็นทรัพย์สินของเขา ถ้าฉันไม่ทำ พวกเขาอาจยิงมันเอง เป็นทางเลือกที่มีมนุษยธรรมและถูกกฎหมาย"',
                    zh: '💉 动手吧："这是他们的财产。如果我不做，他们可能会自己开枪。这是人道、合法的选择。"'
                },
                consequence: {
                    en: '⚰️ Soul Crushing. The dog trusts you as the injection starts. You go home and cry. You followed the law, but lost a piece of your heart.',
                    th: '⚰️ ใจสลาย หมาไว้ใจคุณตอนเริ่มฉีดยา คุณกลับบ้านร้องไห้ คุณทำตามกฎหมาย แต่เสียเศษเสี้ยวของหัวใจ',
                    zh: '⚰️ 灵魂破碎。注射一开始，狗还信任着你。你回家哭了。你遵守了法律，但失去了一部分心。'
                },
                stats: { competence: 20, ethics: -30, leadership: -10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Pro Bono: "I\'ll do the surgery for free. Pay me $50 a month for 5 years. I can\'t kill a healthy dog."',
                    th: '🤝 ทำให้ฟรี: "ฉันจะผ่าให้ฟรี จ่ายเดือนละ $50 นาน 5 ปี ฉันฆ่าหมาสุขภาพดีไม่ได้"',
                    zh: '🤝 公益服务："我免费做手术。每个月付我不50美元，付5年。我不能杀死一只健康的狗。"'
                },
                consequence: {
                    en: '💸 Financial Hit. The family pays twice then ghosts you. Your practice loses money. But the dog lives happily. You sleep well at night.',
                    th: '💸 เจ็บตัวเรื่องเงิน ครอบครัวจ่าย 2 ทีแล้วหายจ้อย คลินิกคุณขาดทุน แต่หมามีชีวิตที่มีความสุข คุณนอนหลับสบาย',
                    zh: '💸 财务打击。这家人付了两次钱然后消失了。你的诊所赔钱了。但这只狗快乐地活着。你晚上睡得很香。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Surrender Option: "Sign the dog over to me. I will fix him and re-home him. You lose ownership immediately."',
                    th: '🔄 ทางเลือกสละสิทธิ์: "เซ็นยกหมาให้ฉัน ฉันจะรักษาและหาบ้านใหม่ให้ คุณเสียสิทธิ์ความเป็นเจ้าของทันที"',
                    zh: '🔄 放弃选项："把狗签给我。我会治好他并给他找个新家。你立即失去所有权。"'
                },
                consequence: {
                    en: '🏆 Win-Win. The family agrees. You fix the dog and a nurse adopts him. It costs you money, but saves the life ethically.',
                    th: '🏆 วิน-วิน ครอบครัวตกลง คุณรักษาหมาและพยาบาลรับเลี้ยง คุณเสียเงิน แต่รักษาชีวิตไว้อย่างมีจริยธรรม',
                    zh: '🏆 双赢。这家人同意了。你治好了狗，一名护士领养了他。这花了你的钱，但在道德上拯救了生命。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🦴 Amputation: "Amputation is cheaper ($500). Dogs do fine on 3 legs. It\'s better than death."',
                    th: '🦴 ตัดขา: "ตัดขาถูกกว่า ($500) หมาอยู่ได้สบาย 3 ขา ดีกว่าตาย"',
                    zh: '🦴 截肢："截肢更便宜（500美元）。狗用3条腿也能过得很好。这比死好。"'
                },
                consequence: {
                    en: '🏥 Brutal Pragmatism. The family affords it. The dog recovers and adapts quickly. Ugly solution, but effective.',
                    th: '🏥 ยึดความจริงที่โหดร้าย ครอบครัวจ่ายไหว หมาฟื้นตัวและปรับตัวเร็ว ทางออกน่าเกลียด แต่ได้ผล',
                    zh: '🏥 残酷的实用主义。这家人付得起。狗恢复并适应得很快。丑陋的解决方案，但有效。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 30 }
            }
        ]
    },
    {
        id: 'vet_002',
        text: {
            en: '🐕 The Aggressive Patient: A 120lb Rottweiler needs a blood draw. The owner refuses to muzzle him ("He\'s a baby!"). The dog is growling and snapping at your vet tech.',
            th: '🐕 ผู้ป่วยก้าวร้าว: ร็อตไวเลอร์ 120 ปอนด์ต้องเจาะเลือด เจ้าของไม่ยอมใส่ตะกร้อครอบปาก ("น้องเป็นเด็กดี!") หมากำลังขู่และงับผู้ช่วยสัตวแพทย์ของคุณ',
            zh: '🐕 攻击性病人：一只120磅的罗威纳犬需要抽血。主人拒绝给他戴嘴套（"他是个宝宝！"）。狗正在对你的兽医技术员咆哮和猛咬。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Fire the Client: "Muzzle on, or get out. My staff\'s safety comes first. I don\'t care about your Yelp review."', th: '🛑 ไล่ลูกค้า: "ใส่ตะกร้อ หรือออกไป ความปลอดภัยลูกน้องผมมาก่อน ผมไม่สนรีวิว Yelp ของคุณ"', zh: '🛑 解雇客户："戴上嘴套，或者滚出去。我的员工安全第一。我不在乎你的Yelp评论。"' },
                consequence: { en: '🛡️ Staff Hero. The owner storms out leaving a 1-star review. Your staff applauds you. Morale skyrockets. You protected your pack.', th: '🛡️ ฮีโร่ของพนักงาน เจ้าของเดินปึงปังออกไปทิ้งรีวิว 1 ดาว พนักงานปรบมือให้คุณ ขวัญกำลังใจพุ่ง คุณปกป้องฝูงของคุณ', zh: '🛡️ 员工英雄。主人气冲冲地离开，留下了1星差评。你的员工为你鼓掌。士气飙升。你保护了你的团队。' },
                stats: { competence: 30, ethics: 40, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '💉 Sedation: "We aren\'t wrestling him. Give him a sedative injection in the heavy muscle. Charge the owner extra."', th: '💉 ยาสลบ: "เราจะไม่ปล้ำกับมัน ฉีดยาสลบเข้ากล้ามเนื้อใหญ่ คิดเงินเพิ่ม"', zh: '💉 镇静："我们不跟他搏斗。给他肌肉注射镇静剂。收主人额外的钱。"' },
                consequence: { en: '💤 Safe & Effective. The dog sleeps. The blood is drawn calmly. The owner is annoyed by the cost, but nobody got bitten.', th: '💤 ปลอดภัยและได้ผล หมาหลับ เจาะเลือดนิ่งๆ เจ้าของบ่นเรื่องราคา แต่ไม่มีใครโดนกัด', zh: '💤 安全有效。狗睡着了。血抽得很平静。主人对费用感到恼火，但没人被咬。' },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💪 Wrestling Match: "Hold him down! Techs, grab the legs! I\'ll grab the neck! Let\'s get this done!"', th: '💪 แมตช์ปล้ำ: "กดมันไว้! ผู้ช่วย จับขา! ฉันจะจับคอ! ลุยให้จบๆ ไป!"', zh: '💪 摔跤比赛："按住他！技术员，抓住腿！我抓住脖子！搞定它！"' },
                consequence: { en: '🏥 Bloodshed. The dog bites your tech\'s face. 20 stitches. Lawsuit pending. Worker\'s Comp claim. Stupid macho move.', th: '🏥 นองเลือด หมากัดหน้าผู้ช่วย 20 เข็ม โดนฟ้องแน่ เคลมประกันพนักงาน การกระทำอวดเก่งที่โง่เขลา', zh: '🏥 流血事件。狗咬了你技术员的脸。缝了20针。诉讼待定。工伤索赔。愚蠢的大男子主义举动。' },
                stats: { competence: 10, ethics: -20, leadership: -50, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '🍬 Distraction: "Peanut butter on the wall. Baby talk. Go slow. Use low-stress handling techniques."', th: '🍬 เบี่ยงเบนความสนใจ: "เนยถั่วทาผนัง พูดเสียงเด็ก ช้าๆ ใช้เทคนิคลดความเครียด"', zh: '🍬 分散注意力："墙上涂花生酱。用婴儿语。慢慢来。使用低压力处理技巧。"' },
                consequence: { en: '🎓 New School Win. It takes 20 minutes of patience, but the dog relaxes. You get the blood without force. Owner is impressed.', th: '🎓 ชัยชนะแบบใหม่ ใช้ความอดทน 20 นาที แต่หมาผ่อนคลาย คุณได้เลือดโดยไม่ต้องใช้กำลัง เจ้าของประทับใจ', zh: '🎓 新派胜利。这花了20分钟的耐心，但狗放松了。你不费吹灰之力就抽到了血。主人印象深刻。' },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'vet_003',
        text: {
            en: '🕵️ The Puppy Mill: A "Breeder" brings in a litter of 10 puppies. They are malnourished, full of parasites, and kept in filth. He pays in cash and asks for "minimum vaccines to sell them."',
            th: '🕵️ โรงงานลูกสุนัข: "ผู้เพาะพันธุ์" นำลูกสุนัขครอก 10 ตัวมา พวกมันขาดสารอาหาร พยาธิเต็มตัว และอยู่อย่างสกปรก เขาจ่ายเงินสดและขอ "วัคซีนขั้นต่ำเพื่อขายต่อ"',
            zh: '🕵️ 小狗工厂：一个"饲养员"带来了一窝10只小狗。它们营养不良，满身寄生虫，生活在肮脏的环境中。他付现金并要求"打最少的疫苗以便出售"。'
        },
        options: [
            { id: 'A', text: { en: '📞 Report Him: "Document everything. Call Animal Control immediately. Stall him until they arrive."', th: '📞 แจ้งจับ: "บันทึกทุกอย่าง โทรหากรมปศุสัตว์ทันที ถ่วงเวลาจนกว่าเขาจะมา"', zh: '📞 举报他："记录一切。立即致电动物管制中心。拖住他直到他们到达。"' }, consequence: { en: '🚨 Raid! The authorities seize his animals. You lose a "good paying" client, but you saved hundreds of future dogs. Karma points maxed.', th: '🚨 บุกจับ! เจ้าหน้าที่ยึดสัตว์ของเขา คุณเสียลูกค้า "กระเป๋าหนัก" แต่ช่วยหมาในอนาคตได้เป็นร้อย แต้มบุญเต็มแม็กซ์', zh: '🚨 突袭！当局查封了他的动物。你失去了一个"付钱爽快"的客户，但你拯救了数百只未来的狗。业力值拉满。' }, stats: { competence: 40, ethics: 60, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '💉 Treat & Educate: "Treat them fully. Discount the parasites meds. Try to teach him about better care standards."', th: '💉 รักษาและสอน: "รักษาเต็มที่ ลดค่ายาถ่ายพยาธิ พยายามสอนเขาเรื่องมาตรฐานการดูแลที่ดีขึ้น"', zh: '💉 治疗和教育："全面治疗。给驱虫药打折。试着教他以此获得更好的护理标准。"' }, consequence: { en: '🐢 Uphill Battle. He ignores your advice but takes the meds. The puppies survive to be sold. You helped the victims but not the problem.', th: '🐢 เข็นครกขึ้นภูเขา เขาเมินคำแนะนำแต่เอายาไป ลูกหมามีชีวิตรอดเพื่อไปขายต่อ คุณช่วยเหยื่อแต่ไม่ได้แก้ปัญหา', zh: '🐢 艰难的战斗。他无视你的建议但拿了药。小狗幸存下来被卖掉。你帮助了受害者但没有解决问题。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 20 } },
            { id: 'C', text: { en: '🤐 Just Business: "Vaccine only? Okay. $200. Next patient." Don\'t get involved.', th: '🤐 ธุรกิจเพียวๆ: "แค่วัคซีน? โอเค $200 ผู้ป่วยคนต่อไป" อย่าไปยุ่ง', zh: '🤐 只是生意："只打疫苗？好的。200美元。下一位。"不卷入其中。' }, consequence: { en: '💀 Complicity. You enabled his abuse. Those puppies likely get sick later. You took blood money.', th: '💀 การสมรู้ร่วมคิด คุณช่วยให้เขาทารุณสัตว์ต่อ ลูกหมาพวกนั้นน่าจะป่วยทีหลัง คุณรับเงินเปื้อนเลือด', zh: '💀 共犯。你纵容了他的虐待。那些小狗后来可能会生病。你拿了血汗钱。' }, stats: { competence: 10, ethics: -50, leadership: -30, innovation: 0 } },
            { id: 'D', text: { en: '🛑 Refuse Service: "I won\'t treat animals from a mill. Get out." Demand he leaves.', th: '🛑 ปฏิเสธบริการ: "ฉันไม่รักษาสัตว์จากโรงงานนรก ออกไป" ไล่เขาไป', zh: '🛑 拒绝服务："我不治疗来自工厂的动物。滚出去。"要求他离开。' }, consequence: { en: '📉 Missed Chance. He goes to the cheap clinic down the road. You lost the chance to document the abuse or help the pups. Moral high ground, practical failure.', th: '📉 พลาดโอกาส เขาไปคลินิกราคาถูกข้างหน้า คุณเสียโอกาสบันทึกหลักฐานหรือช่วยลูกหมา สูงส่งทางศีลธรรม ล้มเหลวทางปฏิบัติ', zh: '📉 错失良机。他去了路那边的廉价诊所。你失去了记录虐待或帮助小狗的机会。道德制高点，实际从失败。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'vet_004',
        text: {
            en: '💊 The Mistake: Your head vet tech accidentally administers 10x the dose of insulin to a diabetic cat. The cat seizes and dies. The owner is in the waiting room expecting to pick up "Fluffy."',
            th: '💊 ความผิดพลาด: หัวหน้าผู้ช่วยของคุณเผลอฉีดอินซูลิน 10 เท่าให้แมวเบาหวาน แมวชักและตาย เจ้าของรออยู่ข้างนอกกะว่าจะมารับ "เจ้าปุย"',
            zh: '💊 错误：你的首席兽医技术员不小心给患有糖尿病的猫注射了10倍剂量的胰岛素。猫抽搐并死亡。主人正在候诊室等着接"毛毛"。'
        },
        options: [
            { id: 'A', text: { en: '📢 Full Disclosure: "Tell the owner exactly what happened. Apologize. Offer compensation. We made a mistake."', th: '📢 เปิดเผยทั้งหมด: "บอกเจ้าของตามตรงว่าเกิดอะไรขึ้น ขอโทษ เสนอค่าชดเชย เราทำพลาด"', zh: '📢 全面披露："确切告诉主人发生了什么。道歉。提供赔偿。我们犯了一个错误。"' }, consequence: { en: '⚖️ Integrity Pain. They scream. They cry. They sue. But your insurance covers it. Your staff trusts that you won\'t throw them under the bus to lie.', th: '⚖️ ความเจ็บปวดแห่งความซื่อสัตย์ พวกเขากรีดร้อง ร้องไห้ ฟ้องร้อง แต่ประกันจ่าย พนักงานไว้ใจว่าคุณจะไม่โกหกเพื่อเอาตัวรอด', zh: '⚖️ 正直的痛苦。他们尖叫。他们哭泣。他们起诉。但你的保险涵盖了这一点。你的员工相信你不会为了撒谎而出卖他们。' }, stats: { competence: 30, ethics: 60, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🤥 The Lie: "Tell them the diabetes was unstable and he had a sudden stroke. It happens. Don\'t admit the overdose."', th: '🤥 คำโกหก: "บอกว่าเบาหวานไม่คงที่และเขามีอาการสโตรกเฉียบพลัน มันเกิดขึ้นได้ อย่ารับเรื่องยาเกิน"', zh: '🤥 谎言："告诉他们糖尿病不稳定，那是突发中风。这很常见。不要承认吸毒过量。"' }, consequence: { en: '💣 Time Bomb. The owner believes you. But your tech is traumatized by the lie. 3 months later, the tech quits and posts the truth on Facebook. Disaster.', th: '💣 ระเบิดเวลา เจ้าของเชื่อคุณ แต่ผู้ช่วยฝังใจกับคำโกหก 3 เดือนต่อมา ผู้ช่วยลาออกและโพสต์ความจริงลงเฟสบุ๊ค หายนะ', zh: '💣 定时炸弹。主人相信你。但你的技术员因谎言而受到创伤。3个月后，技术员辞职并在Facebook上发布了真相。灾难。' }, stats: { competence: 20, ethics: -60, leadership: -40, innovation: 10 } },
            { id: 'C', text: { en: '🎯 Blame the Tech: "It was HER fault. I wasn\'t even in the room. Fire her in front of the owner."', th: '🎯 โทษผู้ช่วย: "ความผิดหล่อน ฉันไม่อยู่ในห้องด้วยซ้ำ ไล่หล่อนออกต่อหน้าเจ้าของ"', zh: '🎯 怪罪技术员："是她的错。我甚至不在房间里。在主人面前解雇她。"' }, consequence: { en: '❄️ Cold Leader. You save your reputation, but destroy your team. Everyone starts looking for new jobs. You are alone.', th: '❄️ ผู้นำเลือดเย็น คุณรักษาชื่อเสียง แต่ทำลายทีม ทุกคนเริ่มหางานใหม่ คุณเหลือตัวคนเดียว', zh: '❄️ 冷漠的领袖。你保住了声誉，但摧毁了团队。每个人都开始找新工作。你孤身一人。' }, stats: { competence: 10, ethics: -40, leadership: -60, innovation: 0 } },
            { id: 'D', text: { en: '🕊️ Private Settlement: "Pull the owner aside. Explain gently. Offer a cash settlement immediately to sign an NDA."', th: '🕊️ ไกล่เกลี่ยส่วนตัว: "ดึงเจ้าของมาคุย อธิบายอย่างนุ่มนวล เสนอเงินสดแลกกับการเซ็นปิดปาก"', zh: '🕊️ 私下和解："把主人拉到一边。温柔地解释。立即提供现金和解以签署保密协。"' }, consequence: { en: '💼 Hush Money. It works. The problem goes away quietly. But you feel dirty. Was that vet medicine or mafia work?', th: '💼 ค่าปิดปาก ได้ผล ปัญหาจบเงียบๆ แต่คุณรู้สึกสกปรก นั่นเป็นสัตวแพทย์หรือมาเฟีย?', zh: '💼 封口费。奏效了。问题悄悄消失了。但你觉得自己很脏。那是兽医还是黑手党的工作？' }, stats: { competence: 40, ethics: -20, leadership: 10, innovation: 30 } }
        ]
    },
    {
        id: 'vet_005',
        text: {
            en: '🐅 The Illegal Patient: A wealthy donor brings in a sick tiger cub. "It\'s my pet. Don\'t report me. Cure him, and I\'ll buy you that new MRI machine." Possession is illegal. Reporting means the cub is euthanized.',
            th: '🐅 ผู้ป่วยผิดกฎหมาย: ผู้บริจาครายใหญ่พาลูกเสือป่วยมา "นี่สัตว์เลี้ยงฉัน อย่าแจ้งจับนะ รักษาให้หาย แล้วฉันจะซื้อเครื่อง MRI ใหม่ให้" การครอบครองผิดกฎหมาย การแจ้งความหมายถึงลูกเสือถูกการุณยฆาต',
            zh: '🐅 非法病人：一位富有的捐赠者带来了一只生病的老虎幼崽。"它是我的宠物。别举报我。治好他，我就给你买那台新的核磁共振机。"拥有它是违法的。举报意味着幼崽会被安乐死。'
        },
        options: [
            { id: 'A', text: { en: '🤫 Treat Secretly: "Back door. Now. I treat him. You buy the MRI. No paper trail." Save the cub, get the gear.', th: '🤫 แอบรักษา: "เข้าหลังร้าน เดี๋ยวนี้ ฉันจะรักษา คุณซื้อ MRI ห้ามมีเอกสาร" ช่วยลูกเสือ ได้เครื่องมือ', zh: '🤫 秘密治疗："走后门。现在。我治疗他。你买核磁共振机。不要留下书面记录。"救幼崽，拿设备。' }, consequence: { en: '🕶️ Dangerous Game. The cub recovers. You get the MRI. But now the donor owns you. He brings more exotics later.', th: '🕶️ เกมอันตราย ลูกเสือหายดี คุณได้ MRI แต่ตอนนี้ผู้บริจาคเป็นเจ้าชีวิตคุณ เขาจะพาสัตว์แปลกๆ มาอีก', zh: '🕶️ 危险游戏。幼崽康复了。你得到了核磁共振机。但现在捐赠者控制了你。他以后会带更多珍稀动物来。' }, stats: { competence: 60, ethics: -60, leadership: -20, innovation: 40 } },
            { id: 'B', text: { en: '📞 Report Immediately: "I am calling the authorities. Stay right there." Uphold the law.', th: '📞 แจ้งทันที: "ฉันจะโทรแจ้งเจ้าหน้าที่ รอตรงนั้น" รักษากฎหมาย', zh: '📞 立即举报："我要报警了。待在那儿别动。"维护法律。' }, consequence: { en: '⚖️ Legal but Lethal. Authorities seize the cub and euthanize it for testing. The donor sues you and destroys your reputation online.', th: '⚖️ ถูกกฎหมายแต่ถึงตาย เจ้าหน้าที่ยึดลูกเสือไปการุณยฆาตเพื่อตรวจโรค ผู้บริจาคฟ้องและทำลายชื่อเสียงคุณออนไลน์', zh: '⚖️ 合法但致命。当局查封了幼崽并将其安乐死以进行检测。捐赠者起诉你并在网上破坏你的名誉。' }, stats: { competence: 20, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Stabilize & Transfer: "I\'ll stabilize him, but you must surrender him to a sanctuary. Or I report you." Ultimatum.', th: '🤝 รักษาและส่งต่อ: "ฉันจะประคองอาการ แต่คุณต้องมอบให้ศูนย์พักพิง ไม่งั้นฉันแจ้งจับ" ยื่นคำขาด', zh: '🤝 稳定并转移："我会稳定他的病情，但你必须把他交给以此庇护所。否则我就举报你。"最后通牒。' }, consequence: { en: '🏆 Moral Victory. He agrees reluctantly. The cub goes to a zoo. You lose the MRI, but sleep with a clear conscience.', th: '🏆 ชัยชนะทางศีลธรรม เขายอมอย่างเสียไม่ได้ ลูกเสือไปสวนสัตว์ คุณอดได้ MRI แต่นอนหลับสบายใจ', zh: '🏆 道德胜利。他不情愿地同意了。幼崽去了动物园。你失去了核磁共振机，但问心无愧。' }, stats: { competence: 50, ethics: 70, leadership: 60, innovation: 20 } },
            { id: 'D', text: { en: '💉 Euthanize: "It\'s suffering and illegal. I\'m putting it down. It\'s the only legal medical option."', th: '💉 การุณยฆาต: "มันทรมานและผิดกฎหมาย ฉันจะให้มันหลับ นี่เป็นทางเลือกทางการแพทย์เดียวที่ถูกกฎหมาย"', zh: '💉 安乐死："它很痛苦而且是非法的。我要把它安乐死。这是唯一合法的医疗选择。"' }, consequence: { en: '💀 Enemy Made. You kill the cub. The donor threatens your life. You need security at the clinic for a month.', th: '💀 สร้างศัตรู คุณฆ่าลูกเสือ ผู้บริจาคขู่ฆ่าคุณ คุณต้องจ้างรปภ.เฝ้าคลินิกเป็นเดือน', zh: '💀 树敌。你杀了幼崽。捐赠者威胁要你的命。你的诊所需要一个月的安保。' }, stats: { competence: 30, ethics: 10, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'vet_006',
        text: {
            en: '💔 The Divorce Custody: A bitter divorcing couple is fighting over "Buster." The husband brings Buster in. "Put him down. He\'s old and sick (he isn\'t). I\'d rather he die than she gets him."',
            th: '💔 การแย่งสิทธิ์เลี้ยงดู: คู่หย่าร้างที่ขมขื่นกำลังแย่ง "บัสเตอร์" สามีพาบัสเตอร์มา "ทำให้มันหลับซะ มันแก่และป่วย (จริงๆ ไม่ป่วย) ฉันยอมให้มันตายดีกว่าให้ยัยนั่นได้ไป"',
            zh: '💔 离婚监护权：一对痛苦的离婚夫妇正在争夺"巴斯特"。丈夫把巴斯特带进来。"把它安乐死。它又老又病（其实没有）。我宁愿它死也不给她。"'
        },
        options: [
            { id: 'A', text: { en: '🛑 Refuse & Call Wife: "This dog is healthy. I\'m calling the microchip contact—your wife." Block the euthanasia.', th: '🛑 ปฏิเสธและโทรหาภรรยา: "หมาตัวนี้แข็งแรง ฉันจะโทรหาเบอร์ในไมโครชิป—ภรรยาคุณ" ขัดขวางการการุณยฆาต', zh: '🛑 拒绝并致电妻子："这只狗很健康。我要拨打微芯片上的联系人——你的妻子。"阻止安乐死。' }, consequence: { en: '🛡️ Protector. The wife rushes in. She takes the dog. The husband screams. You saved a life from spite.', th: '🛡️ ผู้ปกป้อง ภรรยารีบมา เธอรับหมาไป สามีกรีดร้อง คุณช่วยชีวิตหนึ่งชีวิตจากความอาฆาต', zh: '🛡️ 保护者。妻子冲了进来。她带走了狗。丈夫尖叫。你从怨恨中挽救了一条生命。' }, stats: { competence: 40, ethics: 80, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '💉 Do It (Lie): "Sedate the dog. Tell husband it\'s done. Wake dog up later and call a rescue." Fake the death.', th: '💉 แกล้งทำ: "วางยาซึม บอกสามีว่าเรียบร้อย ปลุกหมาทีหลังแล้วโทรเรียกกู้ภัย" แกล้งตาย', zh: '💉 动手（撒谎）："给狗注射镇静剂。告诉丈夫已经完成了。稍后叫醒狗并联系救援组织。"伪造死亡。' }, consequence: { en: '🕶️ Risky Fraud. It works, but if you are caught, you lose your license for fraud and theft. High stakes altruism.', th: '🕶️ การฉ้อโกงเสี่ยงสูง ได้ผล แต่ถ้าโดนจับ คุณโดนยึดใบอนุญาตข้อหาฉ้อโกงและขโมย การทำดีที่เดิมพันสูง', zh: '🕶️ 风险欺诈。奏效了，但如果你被抓到，你会因欺诈和盗窃而被吊销执照。高风险的利他主义。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 60 } },
            { id: 'C', text: { en: '⚖️ Neutral Ground: "I cannot rely on your word. Only with a court order or both signatures. Take the dog."', th: '⚖️ เป็นกลาง: "ฉันเชื่อคำพูดคุณไม่ได้ ต้องมีคำสั่งศาลหรือลายเซ็นทั้งคู่ เอาหมากลับไป"', zh: '⚖️ 中立立场："我不能相信你的话。只有法院命令或双方签字才行。把狗带走。"' }, consequence: { en: '🐢 Bureaucracy. The husband takes the dog. He likely goes to another clinic or kills it himself. You washed your hands of it.', th: '🐢 ระบบราชการ สามีเอาหมากลับ เขาคงไปคลินิกอื่นหรือฆ่าเอง คุณลอยตัวเหนือปัญหา', zh: '🐢 官僚主义。丈夫把狗带走了。他可能会去另一家诊所或自己杀了它。你洗手不干了。' }, stats: { competence: 30, ethics: 10, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '💰 Fee Hike: "Euthanizing healthy animals costs $5000. Clinic policy." Price him out.', th: '💰 ขึ้นค่าธรรมเนียม: "การุณยฆาตสัตว์สุขภาพดีราคา $5000 นโยบายคลินิก" ตั้งราคาไล่แขก', zh: '💰 提高费用："安乐死健康动物要5000美元。诊所政策。"用价格让他知难而退。' }, consequence: { en: '🧠 Clever Deterrent. He balks at the price and leaves. You bought the dog time without checking explicit refusal.', th: '🧠 การป้องปรามที่ฉลาด เขาชะงักกับราคาและกลับไป คุณซื้อเวลาให้หมาโดยไม่ต้องปฏิเสธตรงๆ', zh: '🧠 聪明的威慑。他对价格望而却步并离开了。你为狗争取了时间，而没有直接拒绝。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'vet_007',
        text: {
            en: '🐎 The Performance Horse: A prize racehorse has a hairline fracture. The owner wants you to inject painkillers/steroids so it can run the "Big Race" on Saturday. "If he wins, I retire him. If he doesn\'t run, he\'s glue."',
            th: '🐎 ม้าแข่ง: ม้าแข่งตัวเก่งมีรอยร้าวที่กระดูก เจ้าของต้องการให้คุณฉีดยาแก้ปวด/เตียรอยด์เพื่อให้มันลงแข่ง "บิ๊กแมตช์" วันเสาร์ "ถ้าชนะ ฉันจะให้เกษียณ ถ้าไม่ได้แข่ง มันกลายเป็นกาวแน่"',
            zh: '🐎 赛马：一匹获奖赛马有发际线骨折。马主要求你注射止痛药/类固醇，以便它能在周六参加"大赛"。"如果为了赢了，我就让它退役。如果不跑，它就是胶水原料。"'
        },
        options: [
            { id: 'A', text: { en: '💉 Inject: "Fine. One last run. But use a heavy wrap." Risk catastrophic breakdown.', th: '💉 ฉีดให้: "ก็ได้ แข่งครั้งสุดท้าย แต่ต้องพันขาหนาๆ" เสี่ยงขาหักสยอง', zh: '💉 注射："好吧。最后一次。但要包扎好。"冒着灾难性崩溃的风险。' }, consequence: { en: '💥 Tragedy on Track. The leg shatters on the home stretch. The horse is euthanized on live TV. You are investigated for doping.', th: '💥 โศกนาฏกรรมในสนาม ขาหักกระจุยตอนทางตรงสุดท้าย ม้าถูกการุณยฆาตออกทีวีสด คุณถูกสอบสวนเรื่องโด๊ปยา', zh: '💥 赛道悲剧。腿在最后直道粉碎。马在直播中被安乐死。你因使用兴奋剂受到调查。' }, stats: { competence: 20, ethics: -70, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Refuse & Report: "No. He is unfit. I\'m scratching him from the race officials." Report to the Jockey Club.', th: '🛑 ปฏิเสธและรายงาน: "ไม่ มันไม่ไหว ฉันจะแจ้งถอนตัวกับกรรมการ" รายงานสมาคมขี่ม้า', zh: '🛑 拒绝并报告："不行。它不适合。我要向赛事官员取消它的资格。"向赛马会报告。' }, consequence: { en: '🛡️ Integrity. The horse is saved from the race but sold to a petting zoo. The owner fires you. You kept your oath.', th: '🛡️ ความซื่อสัตย์ ม้ารอดจากสนามแข่งแต่ถูกขายไปสวนสัตว์ลูบคลำ เจ้าของไล่คุณออก คุณรักษาคำปฏิญาณ', zh: '🛡️ 正直。马免于参赛，但被卖给了宠物动物园。马主解雇流你。你信守了誓言。' }, stats: { competence: 50, ethics: 80, leadership: 60, innovation: 10 } },
            { id: 'C', text: { en: '🧙 Magic Salve: "Give a placebo injection. Tell owner it\'s distinct tech. The horse will run slower due to pain but won\'t break."', th: '🧙 ยาวิเศษ: "ฉีดยาหลอก บอกเจ้าของว่าเป็นเทคใหม่ ม้าจะวิ่งช้าลงเพราะเจ็บแต่ขาไม่หัก"', zh: '🧙 魔法药膏："注射安慰剂。告诉马主这是独特的技术。马会因为疼痛跑得慢一些，但不会骨折。"' }, consequence: { en: '📉 Calculated Loss. The horse loses badly. Owner retires him "in disgrace." The horse lives. You tricked the system.', th: '📉 ความพ่ายแพ้ที่คำนวณไว้ ม้าแพ้ยับ เจ้าของให้เกษียณ "อย่างน่าอับอาย" ม้ารอด คุณหลอกระบบ', zh: '📉 计算好的失败。马输得很惨。马主让它"不光彩地"退役。马活下来了。你欺骗了系统。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 50 } },
            { id: 'D', text: { en: '🤝 Buy the Horse: "I\'ll buy him. Right now. Meat price + $1000." rescue him yourself.', th: '🤝 ซื้อม้า: "ฉันซื้อเอง ตอนนี้เลย ราคาเนื้อ + $1000" ช่วยเองเลย', zh: '🤝 买马："我买下它。就在现在。肉价 + 1000美元。"你自己救它。' }, consequence: { en: '💸 Expensive Pet. You now own a crippled racehorse. It costs a fortune to rehab. But he is a good boy. Financial drain.', th: '💸 สัตว์เลี้ยงราคาแพง ตอนนี้คุณเป็นเจ้าของม้าขาเป๋ ค่ารักษาบานเบอะ แต่เขาเป็นเด็กดี กระเป๋าฉีก', zh: '💸 昂贵的宠物。你现在拥有一匹残疾的赛马。康复花费巨大。但它是个好孩子。财务流失。' }, stats: { competence: 30, ethics: 60, leadership: 40, innovation: 20 } }
        ]
    },
    {
        id: 'vet_008',
        text: {
            en: '🏠 The Hoarding Case: You do a house call. An elderly woman has 50 cats in a small trailer. The smell of ammonia burns your eyes. The cats are sick, but she loves them and knows them all by name.',
            th: '🏠 เคสสะสมสัตว์: คุณไปตรวจที่บ้าน หญิงชรามีแมว 50 ตัวในรถบ้านเล็กๆ กลิ่นแอมโมเนียแสบตา แมวป่วย แต่เธอรักและจำชื่อได้ทุกตัว',
            zh: '🏠 囤积案：你出诊。一位老妇人在一个小拖车里养了50只猫。氨气味辣眼睛。猫病了，但她爱它们，能叫出每只猫的名字。'
        },
        options: [
            { id: 'A', text: { en: '📞 Call Clean-out: "Unsafe environment. Calling Animal Control and Adult Protective Services. Seize them all."', th: '📞 แจ้งกวาดล้าง: "สภาพแวดล้อมไม่ปลอดภัย แจ้งกรมปศุสัตว์และหน่วยคุ้มครองผู้สูงอายุ ยึดให้หมด"', zh: '📞 呼叫清理："环境不安全。呼叫动物管制和成人保护服务。全部查封。"' }, consequence: { en: '💔 Tragedy. The woman has a heart attack from stress. The cats are dispersed/euthanized. Problem solved, humanity failed.', th: '💔 โศกนาฏกรรม หญิงชราหัวใจวายเพราะเครียด แมวถูกแยกย้าย/การุณยฆาต แก้ปัญหาได้ แต่มนุษยธรรมล้มเหลว', zh: '💔 悲剧。老妇人因压力导致心脏病发作。猫被驱散/安乐死。问题解决了，人性失败了。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Slow Fix: "Build a relationship. Offer to spay/neuter 5 cats a week for free. Slowly reduce the population."', th: '🤝 ค่อยๆ แก้: "สร้างความสัมพันธ์ เสนอทำหมันฟรีอาทิตย์ละ 5 ตัว ค่อยๆ ลดประชากร"', zh: '🤝 缓慢修复："建立关系。提出每周免费绝育5只猫。慢慢减少数量。"' }, consequence: { en: '⏳ Long Road. It takes 2 years. Conditions improve slowly. She trusts you. You save most of the cats without destroying her life.', th: '⏳ หนทางยาวไกล ใช้เวลา 2 ปี สภาพความเป็นอยู่ค่อยๆ ดีขึ้น เธอไว้ใจคุณ คุณช่วยแมวส่วนใหญ่ได้โดยไม่ทำลายชีวิตเธอ', zh: '⏳ 漫漫长路。花了2年时间。情况缓慢改善。她信任你。你在不毁掉她生活的情况下救了大多数猫。' }, stats: { competence: 50, ethics: 70, leadership: 60, innovation: 30 } },
            { id: 'C', text: { en: '💊 Treat & Leave: "Treat the sickest ones. Ignore the environment. Not my job to police people\'s lives."', th: '💊 รักษาแล้วไป: "รักษาตัวที่ป่วยหนักสุด เมินสภาพแวดล้อม ไม่ใช่งานฉันที่ต้องคุมชีวิตชาวบ้าน"', zh: '💊 治疗并离开："治疗最严重的。无视环境。监管人们的生活不是我的工作。"' }, consequence: { en: '📉 Cycle Continues. The cats get sick again next week. The population grows to 70. You enabled the hoarding.', th: '📉 วงจรซ้ำซาก แมวป่วยอีกอาทิตย์หน้า ประชากรเพิ่มเป็น 70 คุณส่งเสริมการสะสมสัตว์', zh: '📉 循环继续。下周猫又病了。数量增加到70只。你纵容了囤积行为。' }, stats: { competence: 30, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🧹 Secret Rescue: "Every visit, \'adopt\' (steal) 2 healthy kittens. Rehome them. Tell her they ran away."', th: '🧹 แอบช่วย: "ทุกครั้งที่ไป \'รับเลี้ยง\' (ขโมย) ลูกแมวสุขภาพดี 2 ตัว หาบ้านใหม่ บอกเธอว่าแมวหนีเที่ยว"', zh: '🧹 秘密救援："每次访问，\'领养\'（偷）2只健康的小猫。给它们找新家。告诉她它们跑了。"' }, consequence: { en: '🕵️ Cat Burglar. You lower the numbers. She is sad but accepts it. Illegal, unethical, but effective.', th: '🕵️ จอมโจรแมวเหมียว คุณลดจำนวนแมว เธอเศร้าแต่ยอมรับ ผิดกฎหมาย ผิดจริยธรรม แต่ได้ผล', zh: '🕵️ 猫大盗。你减少了数量。她很伤心但接受了。非法，不道德，但有效。' }, stats: { competence: 40, ethics: -30, leadership: 10, innovation: 50 } }
        ]
    },
    {
        id: 'vet_009',
        text: {
            en: '⚠️ The Lab Mistake: You had two black labs scheduled. "Bella" (dental cleaning) and "Stella" (spay). You mixed them up. You just spayed Bella, the champion show dog. Her career is over.',
            th: '⚠️ ความผิดพลาดแล็บ: คุณมีนัดลาบราดอร์ดำสองตัว "เบลล่า" (ขูดหินปูน) และ "สเตลล่า" (ทำหมัน) คุณสลับตัว คุณเพิ่งทำหมันเบลล่า แชมป์สุนัขประกวด อาชีพมันจบแล้ว',
            zh: '⚠️ 实验室错误：你预定了两只拉布拉多。"贝拉"（洁牙）和"斯特拉"（绝育）。你把它们搞混了。你刚刚给冠军表演犬贝拉做了绝育。她的职业生涯结束了。'
        },
        options: [
            { id: 'A', text: { en: '📢 Admit It: "Call the owner immediately. \'I made a terrible mistake.\' Face the wrath."', th: '📢 ยอมรับ: "โทรหาเจ้าของทันที \'ฉันทำผิดพลาดมหันต์\' ยอมรับโทสะ"', zh: '📢 承认："立即致电主人。\'我犯了一个可怕的错误。\'面对愤怒。"' }, consequence: { en: '⚖️ Lawsuit & Respect. They sue for millions (future earnings). Insurance pays. But the community respects your honesty. You survive.', th: '⚖️ ฟ้องร้องและความเคารพ เขาฟ้องเรียกหลายล้าน (รายได้ในอนาคต) ประกันจ่าย แต่ชุมชนเคารพความซื่อสัตย์คุณ คุณรอด', zh: '⚖️ 诉讼与尊重。他们起诉索赔数百万（未来收入）。保险赔付。但社区尊重你的诚实。你幸存下来。' }, stats: { competence: 20, ethics: 80, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '😰 Cover Up: "Tell owner there was an infection in the uterus. Pyometra. \'I had to remove it to save her life.\'" Lie.', th: '😰 ปกปิด: "บอกเจ้าของว่ามดลูกติดเชื้อ มดลูกอักเสบ \'ฉันต้องตัดทิ้งเพื่อช่วยชีวิต\'" โกหก', zh: '😰 掩盖："告诉主人子宫有感染。子宫蓄脓。\'为了救她的命，我不得不切除它。\'"撒谎。' }, consequence: { en: '🤥 The Web Retangled. The pathology report comes back clean. The owner finds out. Fraud charges filed. License revoked.', th: '🤥 สานต่อคำโกหก ผลแล็บออกมาปกติ เจ้าของจับได้ โดนข้อหาฉ้อโกง ยึดใบอนุญาต', zh: '🤥 谎言被揭穿。病理报告显示干净。主人发现了。提出欺诈指控。执照被吊销。' }, stats: { competence: 10, ethics: -80, leadership: -50, innovation: 10 } },
            { id: 'C', text: { en: '💰 Payoff: "Offer them $50,000 cash right now to sign a release. Buy your way out."', th: '💰 จ่ายจบ: "เสนอเงินสด $50,000 ตอนนี้เพื่อให้เซ็นยอมความ ใช้เงินแก้ปัญหา"', zh: '💰 收买："现在给他们5万美元现金签署免责书。花钱以此摆脱困境。"' }, consequence: { en: '💸 Broke but Safe. They take the money. You are broke for 5 years. But you keep your license. Expensive lesson.', th: '💸 ถังแตกแต่รอด เขารับเงิน คุณถังแตกไป 5 ปี แต่รักษาใบอนุญาตไว้ได้ บทเรียนราคาแพง', zh: '💸 破产但安全。他们拿了钱。你破产了5年。但你保住了执照。昂贵的教训。' }, stats: { competence: 30, ethics: -20, leadership: -10, innovation: 20 } },
            { id: 'D', text: { en: '🤷 Blame Staff: "My tech brought me the wrong dog! I just operate on what\'s on the table!" Shift blame.', th: '🤷 โทษลูกน้อง: "ผู้ช่วยฉันเอาหมามาผิดตัว! ฉันแค่ผ่าตามที่อยู่บนเตียง!" โยนความผิด', zh: '🤷 怪罪员工："我的技术员给我带错了狗！我只是在手术台上操作！"推卸责任。' }, consequence: { en: '📉 Team Mutiny. It works regarding the client, but your entire staff walks out. Clinic closes due to no staff. Leadership failure.', th: '📉 ทีมก่อกบฏ ได้ผลกับลูกค้า แต่พนักงานลาออกยกทีม คลินิกปิดเพราะไม่มีคน ความล้มเหลวของผู้นำ', zh: '📉 团队哗变。对客户奏效了，但你全体员工都走了。诊所因无人手而关闭。领导失败。' }, stats: { competence: 10, ethics: -60, leadership: -80, innovation: 0 } }
        ]
    },
    {
        id: 'vet_010',
        text: {
            en: '🦅 The Wildlife Rehabilitation: A local brings in a bald eagle hit by a car. It need complex orthopedic surgery ($5k cost). You aren\'t licensed for wildlife. It dies without immediate help.',
            th: '🦅 การฟื้นฟูสัตว์ป่า: ชาวบ้านพานกอินทรีหัวขาวถูกรถชนมา ต้องผ่าตัดกระดูกซับซ้อน (ค่าใช้จ่าย $5k) คุณไม่มีใบอนุญาตสัตว์ป่า มันจะตายถ้าไม่ช่วยทันที',
            zh: '🦅 野生动物康复：当地人带了一只被车撞的白头海雕来。它需要复杂的骨科手术（花费5000美元）。你没有野生动物许可证。没有立即帮助它就会死。'
        },
        options: [
            { id: 'A', text: { en: '⚔️ Operate Anyway: "Screw the license. It\'s an eagle. Fix the wing. Transfer later."', th: '⚔️ ผ่าไปเถอะ: "ช่างหัวใบอนุญาต นี่นกอินทรีนะ ผ่าปีกก่อน ส่งต่อทีหลัง"', zh: '⚔️ 无论如何都要手术："去他的许可证。这是只鹰。修好翅膀。以后再转移。"' }, consequence: { en: '🇺🇸 Patriot Hero. You save the eagle. Fish & Wildlife fines you $500, but the news coverage makes you a local celebrity.', th: '🇺🇸 ฮีโร่ผู้รักชาติ คุณช่วยนกอินทรี กรมอุทยานฯ ปรับ $500 แต่ข่าวทำให้คุณดังระเบิดในท้องถิ่น', zh: '🇺🇸 爱国英雄。你救了鹰。鱼类和野生动物管理局罚了你500美元，但新闻报道让你成为了当地的名人。' }, stats: { competence: 70, ethics: 60, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '💉 Euthanize: "I can\'t fix it legally. End its suffering. It\'s the only legal option."', th: '💉 การุณยฆาต: "ฉันรักษาไม่ได้ตามกฎหมาย ให้มันพ้นทุกข์เถอะ เป็นทางเลือกเดียวที่ถูกกฎหมาย"', zh: '💉 安乐死："我在法律上无法治愈它。结束它的痛苦。这是唯一合法的选择。"' }, consequence: { en: '📉 Public Hate. You kill the national bird. People are furious. "Why didn\'t you try?!" Pragmastic but hated.', th: '📉 สังคมรังเกียจ คุณฆ่านกประจำชาติ คนโกรธแค้น "ทำไมไม่พยายาม?!" ยึดหลักการแต่คนเกลียด', zh: '📉 公众仇恨。你杀了国鸟。人们很愤怒。"为什么你不试试？！"务实但被视为可恨。' }, stats: { competence: 30, ethics: 10, leadership: 0, innovation: 0 } },
            { id: 'C', text: { en: '📞 Transfer Only: "Stabilize and drive 3 hours to the university clinic. Do not cut."', th: '📞 ส่งต่อเท่านั้น: "ประคองอาการแล้วขับ 3 ชั่วโมงไปคลินิกมหาวิทยาลัย ห้ามผ่า"', zh: '📞 仅转移："稳定病情并开车3小时去大学诊所。不要开刀。"' }, consequence: { en: '⚰️ Died in Transit. The drive was too long. It bleeds out. Good intentions, bad logistics.', th: '⚰️ ตายกลางทาง ขับนานไป เลือดหมดตัว เจตนาดี แต่การขนส่งแย่', zh: '⚰️ 死在路上。车程太长了。它失血过多。好心办坏事。' }, stats: { competence: 20, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '📹 Live Stream Surgery: "I\'m doing it live! Raising money for the fine! Watch me work!"', th: '📹 ไลฟ์สตรีมผ่าตัด: "ฉันจะผ่าสด! ระดมเงินจ่ายค่าปรับ! ดูฉันทำงาน!"', zh: '📹 直播手术："我要直播！为罚款筹款！看我操作！"' }, consequence: { en: '🚀 Viral Sensation. The surgery is a success. Donations cover the fine and buy a new X-ray. Risky but huge payoff.', th: '🚀 ดังเปรี้ยงปร้าง ผ่าตัดสำเร็จ เงินบริจาคพอจ่ายค่าปรับและซื้อเครื่อง X-ray ใหม่ เสี่ยงแต่คุ้มมหาศาล', zh: '🚀 病毒式传播。手术成功。捐款支付了罚款并买了新的X光机。冒险但回报巨大。' }, stats: { competence: 60, ethics: 40, leadership: 80, innovation: 90 } }
        ]
    },
    {
        id: 'vet_011',
        text: {
            en: '🐕 The Dangerous Dog Appeal: "Cujo," a dog that mauled a child\'s face, is on death row. A rescue group wants you to sign an expert witness statement saying "He can be rehabilitated" to stop the execution. You saw the video; the attack was unprovoked and predatory.',
            th: '🐕 คำร้องหมาอันตราย: "คูโจ" หมาที่ขย้ำหน้าเด็กกำลังจะโดนประหาร กลุ่มช่วยเหลือขอให้คุณเซ็นคำให้การผู้เชี่ยวชาญว่า "เขาบำบัดได้" เพื่อหยุดการประหาร คุณดูคลิปแล้ว การโจมตีเกิดโดยไม่มีสิ่งยั่วยุและเป็นแบบนักล่า',
            zh: '🐕 危险犬只上诉："Cujo"，一只咬伤孩子脸的狗，正面临处决。一个救援组织希望你签署专家证人声明，称"它可以被改造"，以阻止处决。你看过视频；那次攻击是无端的掠夺性的。'
        },
        options: [
            { id: 'A', text: { en: '✍️ Sign It: "Save the dog. Blame the bad owners. I can fix him." Ego trip.', th: '✍️ เซ็นชื่อ: "ช่วยหมา โทษเจ้าของแย่ๆ ฉันซ่อมมันได้" อีโก้จัด', zh: '✍️ 签字："救救狗。怪那些坏主人。我能治好它。"自我膨胀。' }, consequence: { en: '🏥 Second Attack. Cujo gets released. 2 weeks later he kills a poodle and bites a cop. Your name is mud. You are sued for negligence.', th: '🏥 การโจมตีครั้งที่สอง คูโจถูกปล่อย 2 อาทิตย์ต่อมามันกัดพุดเดิ้ลตายและกัดตำรวจ ชื่อคุณเน่า คุณโดนฟ้องฐานละเลย', zh: '🏥 二次攻击。Cujo被释放了。2周后它咬死了一只贵宾犬并咬了一名警察。你名声扫地。你因疏忽而被起诉。' }, stats: { competence: 20, ethics: -60, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Refuse & Testify: "I will testify FOR the state. This dog is a monster. It needs to be put down for safety."', th: '🛑 ปฏิเสธและเป็นพยาน: "ฉันจะเรึยกร้องให้รัฐ หมาตัวนี้เป็นสัตว์ประหลาด ต้องกำจัดเพื่อความปลอดภัย"', zh: '🛑 拒绝并作证："我会为州政府作证。这只狗是怪物。为了安全必须把它安乐死。"' }, consequence: { en: '🛡️ Public Safety. The rescue group pickets your clinic ("Murderer!"). But parents thank you. You did the hard, right thing.', th: '🛡️ ความปลอดภัยสาธารณะ กลุ่มช่วยเหลือประท้วงคลินิกคุณ ("ฆาตกร!") แต่ผู้ปกครองขอบคุณคุณ คุณทำสิ่งที่ยากและถูกต้อง', zh: '🛡️ 公共安全。救援组织在你的诊所外抗议（"凶手！"）。但家长们感谢你。你做了艰难但正确的事。' }, stats: { competence: 60, ethics: 70, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🤐 Stay Silent: "I am too busy. Find another expert." Dodge the bullet.', th: '🤐 เงียบไว้: "ฉันยุ่ง หาผู้เชี่ยวชาญคนอื่นเถอะ" หลบกระสุน', zh: '🤐 保持沉默："我太忙了。找别的专家吧。"躲过一劫。' }, consequence: { en: '😑 Cowardice. They find a "quack" vet to sign it. The dog is released. You could have stopped it but didn\'t.', th: '😑 ความขี้ขลาด เขาหาหมอ "เถื่อน" มาเซ็น หมาถูกปล่อย คุณหยุดมันได้แต่ไม่ทำ', zh: '😑 懦弱。他们找了个"庸医"兽医签字。狗被释放了。你本可以阻止但没有。' }, stats: { competence: 30, ethics: 30, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🧠 Offer Eval: "I won\'t sign blindly. I need to evaluate him myself in person. High risk assessment."', th: '🧠 เสนอประเมิน: "ฉันไม่เซ็นมั่วๆ ฉันต้องประเมินเขาด้วยตัวเอง การประเมินความเสี่ยงสูง"', zh: '🧠 提供评估："我不会盲目签字。我需要亲自评估他。高风险评估。"' }, consequence: { en: '⚠️ Close Call. During the eval, he snaps at your throat. You barely dodge. You write a report confirming he is dangerous. Definitive proof.', th: '⚠️ เฉียดตาย ระหว่างประเมิน มันงับคอคุณ คุณหลบทันหวุดหวิด คุณเขียนรายงานยืนยันว่ามันอันตราย หลักฐานชัดเจน', zh: '⚠️ 险些丧命。在评估过程中，它咬向你的喉咙。你勉强躲开了。你写了一份报告确认它是危险的。确凿的证据。' }, stats: { competence: 70, ethics: 60, leadership: 50, innovation: 30 } }
        ]
    },
    {
        id: 'vet_012',
        text: {
            en: '🦠 The Pandemic Panic: You investigate a poultry farm. 100 birds dead. Symptoms look like a new, deadly Zoonotic Flu (bird-to-human). Confirming it triggers a mandatory cull of 100,000 birds and bankrupts the farmer.',
            th: '🦠 โรคระบาดตื่นตระหนก: คุณตรวจสอบฟาร์มไก่ ไก่ตาย 100 ตัว อาการเหมือนไข้หวัดใหญ่สัตว์สู่คนที่รุนแรงชนิดใหม่ การยืนยันจะทำให้ต้องกำจัดไก่ 100,000 ตัว และเกษตรกรล้มละลาย',
            zh: '🦠 大流行恐慌：你调查一家家禽养殖场。100只鸟死亡。症状看起来像是一种新的、致命的人畜共患流感（禽传人）。确认这一点将引发强制扑杀10万只鸟，并导致农民破产。'
        },
        options: [
            { id: 'A', text: { en: '📢 Alert State Vet: "Code Red. Seal the farm. Call the Feds. Burn it all down." Maximum precaution.', th: '📢 แจ้งบิ๊ก: "โค้ดแดง ปิดฟาร์ม เรียกส่วนกลาง เผาให้ราบ" ป้องกันสูงสุด', zh: '📢 警报州兽医："红色代码。封锁农场。呼叫联邦调查局。全部烧毁。"最大程度的预防措施。' }, consequence: { en: '🌏 Outbreak Prevented. The farmer attacks you. You ruin the local economy. But you stopped a pandemic. Unsung hero.', th: '🌏 ป้องกันการระบาด เกษตรกรทำร้ายคุณ คุณทำลายเศรษฐกิจท้องถิ่น แต่หยุดโรคระบาดได้ ฮีโร่ผู้ปิดทองหลังพระ', zh: '🌏 疫情得以预防。农民攻击你。你毁了当地经济。但你阻止了一场大流行。无名英雄。' }, stats: { competence: 60, ethics: 80, leadership: 70, innovation: 10 } },
            { id: 'B', text: { en: '🤫 Wait & See: "Let\'s send samples privately first. Don\'t panic yet. Isolate the sick barn only."', th: '🤫 รอดูก่อน: "ส่งตัวอย่างลับๆ ก่อน อย่าเพิ่งตื่นตูม แยกโรงเรือนที่ป่วยพอ"', zh: '🤫 拭目以待："先私下送样。别慌。只隔离生病的谷仓。"' }, consequence: { en: '🔥 Spread. In the 3 days waiting for results, sample collectors track the virus to 5 other farms. Now 1 million birds die. You hesitated.', th: '🔥 แพร่กระจาย 3 วันที่รอผล คนเก็บตัวอย่างแพร่เชื้อไปอีก 5 ฟาร์ม ตอนนี้ไก่ตาย 1 ล้านตัว คุณลังเล', zh: '🔥 传播。在等待结果的3天里，样本采集者将病毒追踪到了另外5个农场。现在有100万只鸟死亡。你犹豫了。' }, stats: { competence: 20, ethics: -40, leadership: -30, innovation: 10 } },
            { id: 'C', text: { en: '💰 Hide It: "It\'s probably just Newcastle Disease. Vaccinate and hush. The farmer pays you $10k."', th: '💰 ปิดข่าว: "น่าจะแค่นิวคาสเซิล ฉีดวัคซีนแล้วเงียบไว้ เกษตรกรจ่ายคุณ $10k"', zh: '💰 隐瞒："可能只是新城疫。接种疫苗并保密。农民付给你1万美元。"' }, consequence: { en: '☠️ Patient Zero. A farm worker catches it and dies. The virus mutates. It becomes the next global pandemic. You caused the end of the world.', th: '☠️ ผู้ป่วยหมายเลขศูนย์ คนงานติดเชื้อและตาย ไวรัสกลายพันธุ์ กลายเป็นโรคระบาดระดับโลกครั้งต่อไป คุณทำให้โลกจบสิ้น', zh: '☠️ 零号病人。一名农场工人感染致死。病毒变异。它成为下一个全球大流行。你导致了世界末日。' }, stats: { competence: 0, ethics: -100, leadership: -100, innovation: 0 } },
            { id: 'D', text: { en: '🔬 Field Test: "I\'ll do a rapid necropsy right here. If I see the lesions, I call it in. If not, we wait." Dangerous exposure.', th: '🔬 ตรวจภาคสนาม: "ฉันจะผ่าซากด่วนตรงนี้ ถ้าเจอแผล ฉันแจ้งเลย ถ้าไม่ รอก่อน" เสี่ยงติดเชื้อ', zh: '🔬 现场测试："我就在这里做快速尸检。如果我看到病变，我就报警。如果没有，我们就等。"危险的暴露。' }, consequence: { en: '✅ Fast & Accurate. You find the lesions. You make the call 2 days early. You get exposed but your PPE holds. Good science.', th: '✅ เร็วและแม่นยำ คุณเจอแผล คุณแจ้งเร็วขึ้น 2 วัน คุณสัมผัสเชื้อแต่ PPE เอาอยู่ วิทยาศาสตร์เยี่ยม', zh: '✅ 快速准确。你发现了病变。你提前2天打了电话。你暴露了，但你的个人防护装备顶住了。好科学。' }, stats: { competence: 80, ethics: 60, leadership: 50, innovation: 40 } }
        ]
    },
    {
        id: 'vet_013',
        text: {
            en: '🔮 The "Holistic" Owner: A dog has treatable lymphoma (chemo has 80% success). The owner insists on "Coffee Enemas and Crystal Healing." The dog is wasting away and suffering. She refuses chemo.',
            th: '🔮 เจ้าของสาย "องค์รวม": หมาเป็นมะเร็งต่อมน้ำเหลืองที่รักษาได้ (คีโมสำเร็จ 80%) เจ้าของยืนกรานจะใช้ "สวนกาแฟและพลังหินบำบัด" หมาผอมแห้งและทรมาน เธอไม่ยอมคีโม',
            zh: '🔮 "整体"主人：一只狗患有可治疗的淋巴瘤（化疗成功率为80%）。主人坚持"咖啡灌肠和水晶疗法"。狗正在消瘦和受苦。她拒绝化疗。'
        },
        options: [
            { id: 'A', text: { en: '🤬 Fire Her: "This is abuse. I am reporting you for neglect if you don\'t treat him. Get out."', th: '🤬 ไล่ออก: "นี่มันทารุณกรรม ฉันจะแจ้งจับฐานละเลยถ้าคุณไม่รักษา ออกไป"', zh: '🤬 解雇她："这是虐待。如果你不给他治疗，我就举报你忽视。滚出去。"' }, consequence: { en: '🛡️ Tough Love. She leaves crying. She goes to another vet who convinces her. You lost the client but pushed her to reality.', th: '🛡️ รักวัวให้ผูก เธอร้องไห้จากไป เธอไปหาหมออื่นที่เกลี้ยกล่อมเธอได้ คุณเสียลูกค้าแต่ผลักเธอสู่ความจริง', zh: '🛡️ 严厉的爱。她哭着离开了。她去找了另一位兽医，那位兽医说服了她。你失去了客户，但把她推向了现实。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Compromise: "Do your crystals. But let me give Prednisone (steroid) to \'enhance the energy flow.\'" Trick her into palliative care.', th: '🤝 ประนีประนอม: "ใช้หินของคุณไป แต่ให้ฉันฉีดเพรดนิโซน (สเตียรอยด์) เพื่อ \'เสริมการไหลเวียนพลังงาน\'" หลอกให้ดูแลแบบประคับประคอง', zh: '🤝 妥协："用你的水晶。但让我给泼尼松（类固醇）来\'增强能量流动。\'"诱骗她进行姑息治疗。' }, consequence: { en: '🦊 Sly Fox. The dog feels way better due to steroids. She thinks it\'s the crystals. The dog dies comfortably later. You reduced suffering.', th: '🦊 จิ้งจอกเจ้าเล่ห์ หมาดีขึ้นมากเพราะยา เธอคิดว่าเป็นเพราะหิน หมาตายอย่างสบายในภายหลัง คุณลดความทรมาน', zh: '🦊 狡猾的狐狸。由于类固醇，狗感觉好多了。她认为是水晶的作用。狗后来安详地去世了。你减轻了痛苦。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 60 } },
            { id: 'C', text: { en: '💸 Embrace the Woo: "I sell special \'Healing Water\' for $100/bottle. It cures cancer." Sell water (it\'s just saline).', th: '💸 ขายของมู: "ฉันขาย \'น้ำมนต์บำบัด\' ขวดละ $100 รักษามะเร็ง" ขายน้ำเปล่า (แค่น้ำเกลือ)', zh: '💸 拥抱伪科学："我卖特效\'圣水\'，100美元/瓶。它治愈癌症。"卖水（只是生理盐水）。' }, consequence: { en: '👺 Snake Oil. You make money. The dog dies in agony. You are a scam artist.', th: '👺 น้ำมันพราย คุณทำเงิน หมาตายทรมาน คุณคือนักต้มตุ๋น', zh: '👺 蛇油。你赚钱了。狗痛苦地死去。你是个骗子。' }, stats: { competence: 10, ethics: -70, leadership: -20, innovation: 20 } },
            { id: 'D', text: { en: '👨‍⚖️ Court Order: "I am seizing the animal under medical urgency laws to administer chemo." Go nuclear.', th: '👨‍⚖️ คำสั่งศาล: "ฉันจะยึดสัตว์ตามกฎหมายฉุกเฉินทางการแพทย์เพื่อทำคีโม" จัดหนัก', zh: '👨‍⚖️ 法院命令："根据医疗紧急法，我要扣押这只动物进行化疗。"采取极端措施。' }, consequence: { en: '🏛️ Legal Nightmare. You spend 6 months in court. The dog goes into remission! But you are bankrupt from legal fees.', th: '🏛️ ฝันร้ายทางกฎหมาย คุณขึ้นศาล 6 เดือน หมาอาการดีขึ้น! แต่คุณถังแตกเพราะค่าทนาย', zh: '🏛️ 法律噩梦。你在法庭上度过了6个月。狗的病情缓解了！但你因律师费而破产。' }, stats: { competence: 60, ethics: 60, leadership: 40, innovation: 10 } }
        ]
    },
    {
        id: 'vet_014',
        text: {
            en: '🎓 The Mentorship: Your student intern accidentally cuts the bladder during a spay. It\'s fixable, but a serious error. If you report it officially, she fails her rotation and might drop out.',
            th: '🎓 การเป็นพี่เลี้ยง: นักศึกษาฝึกงานของคุณเผลอตัดกระเพาะปัสสาวะตอนทำหมัน แก้ไขได้ แต่เป็นความผิดร้ายแรง ถ้าคุณรายงานทางการ เธอจะตกและอาจต้องออก',
            zh: '🎓 导师指导：你的实习生在绝育手术中不小心割破了膀胱。这是可以修复的，但这是一个严重的错误。如果你正式报告，她的轮转就不及格，可能会退学。'
        },
        options: [
            { id: 'A', text: { en: '📝 Report Truth: "Errors must be documented. If she can\'t handle the failure, she shouldn\'t be a surgeon."', th: '📝 รายงานความจริง: "ความผิดพลาดต้องบันทึก ถ้าเธอรับความล้มเหลวไม่ได้ ก็ไม่ควรเป็นหมอผ่าตัด"', zh: '📝 报告真相："错误必须记录在案。如果她不能处理失败，她就不应该当外科医生。"' }, consequence: { en: '🛑 Harsh Lesson. She fails. She cries. But years later, she thanks you for teaching her accountability. She becomes a dermatologist.', th: '🛑 บทเรียนราคาแพง เธอตก ร้องไห้ แต่หลายปีต่อมา เธอขอบคุณที่คุณสอนความรับผิดชอบ เธอไปเป็นหมอผิวหนัง', zh: '🛑 严厉的教训。她不及格。她哭了。但多年后，她感谢你教会了她负责任。她成了一名皮肤科医生。' }, stats: { competence: 60, ethics: 70, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '🛡️ Take the Blame: "I did it. My hand slipped. Fix the bladder. Mark her eval as perfect."', th: '🛡️ รับผิดแทน: "ฉันทำเอง มือลั่น ซ่อมกระเพาะปัสสาวะ ให้คะแนนเธอเต็ม"', zh: '🛡️ 承担责任："我干的。我手滑了。修好膀胱。把她的评估标记为完美。"' }, consequence: { en: '🤝 Loyalty? No. You saved her now, but she learns nothing. Next year she kills a dog and blames a nurse. You created a monster.', th: '🤝 ภักดี? ไม่ คุณช่วยเธอตอนนี้ แต่เธอไม่ได้เรียนรู้อะไร ปีหน้าเธอฆ่าหมาแล้วโทษพยาบาล คุณสร้างปีศาจ', zh: '🤝 忠诚？不。你现在救了她，但她什么也没学到。明年她杀了一只狗并怪罪护士。你创造了一个怪物。' }, stats: { competence: 40, ethics: -40, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🔧 Fix & Teach: "We fix this together. NOW. I won\'t fail you, but you are scrubbing toilets for a month to remember this."', th: '🔧 ซ่อมและสอน: "เราจะซ่อมด้วยกัน เดี๋ยวนี้ ฉันจะไม่ให้เธอตก แต่เธอต้องขัดส้วมเดือนนึงเพื่อจำไว้"', zh: '🔧 修复和教学："我们一起修复。现在。我不会让你不及格，但你要刷一个月厕所以此记住这一点。"' }, consequence: { en: '🏆 True Mentor. She learns to fix her mistake under pressure. The punishment drives the lesson home. She becomes a great vet.', th: '🏆 ครูที่แท้จริง เธอเรียนรู้ที่จะแก้ผิดภายใต้ความกดดัน บทลงโทษทำให้จำฝังใจ เธอกลายเป็นสัตวแพทย์ที่ยอดเยี่ยม', zh: '🏆 真正的导师。她学会了在压力下纠正错误。惩罚让她铭记在心。她成了一名伟大的兽医。' }, stats: { competence: 70, ethics: 60, leadership: 80, innovation: 30 } },
            { id: 'D', text: { en: '🚪 Kick Her Out: "Get out of my OR. You are dangerous." Ban her from surgery forever.', th: '🚪 ไล่ออก: "ออกไปจากห้องผ่าตัดฉัน เธออันตราย" แบนเธอจากศัลยกรรมตลอดไป', zh: '🚪把她踢出去："滚出我的手术室。你很危险。"永远禁止她做手术。' }, consequence: { en: '❄️ Cold. She quits vet medicine entirely. Maybe right, maybe too harsh. A potential career destroyed.', th: '❄️ เย็นชา เธอเลิกเป็นสัตวแพทย์ไปเลย อาจจะถูก อาจจะแรงไป ทำลายอนาคตคน', zh: '❄️ 冷漠。她完全退出了兽医学。也许是对的，也许太严厉了。一个潜在的职业生涯被毁了。' }, stats: { competence: 30, ethics: 20, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'vet_015',
        text: {
            en: '💰 The Insurance Fraud: A client asks you to backdate medical records to make a pre-existing condition look new so insurance will cover a $15k surgery. "Just change the date, doc."',
            th: '💰 การฉ้อโกงประกัน: ลูกค้าขอให้คุณปรับปรุงเวลาในระเบียนการรักษาให้ดูเหมือนว่าเป็นอาการใหม่ เพื่อให้ประกันจ่ายค่าผ่าตัด $15k "แค่เปลี่ยนวันที่นะครับหมอ"',
            zh: '💰 保险欺诈：客户要求你倒填病历，使既往疾病看起来像是新病，以便保险公司支付15000美元的手术费。"只要改个日期，医生。"'
        },
        options: [
            { id: 'A', text: { en: '🛑 Refuse: "That\'s insurance fraud. I could lose my license. The answer is no."', th: '🛑 ปฏิเสธ: "นั่นคือการฉ้อโกงประกัน ฉันอาจเสียใบอนุญาต คำตอบคือไม่"', zh: '🛑 拒绝："那是保险欺诈。我可能会失去执照。答案是不。"' }, consequence: { en: '🛡️ Clean Hands. The client leaves angry but you kept your integrity. Word spreads that you\'re honest—some respect it, others avoid you.', th: '🛡️ มือสะอาด ลูกค้าโมโหแต่คุณรักษาความซื่อสัตย์ คำบอกต่อว่าคุณซื่อตรง—บางคนนับถือ บางคนหลีกเลี่ยง', zh: '🛡️ 清白之手。客户愤怒地离开了，但你保持了正直。消息传开说你诚实——有人尊重，有人回避你。' }, stats: { competence: 40, ethics: 80, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '📝 Do It: "Fine. Just this once. But you owe me." Change the dates.', th: '📝 ทำให้: "ก็ได้ แค่ครั้งเดียว แต่คุณติดฉันไว้" เปลี่ยนวันที่', zh: '📝 照做："好吧。就这一次。但你欠我人情。"更改日期。' }, consequence: { en: '💣 Slippery Slope. Insurance pays. But now 5 other clients ask for the same "favor." An audit exposes you. License suspended.', th: '💣 ลาดลื่นไปหมด ประกันจ่าย แต่ตอนนี้มีลูกค้าอีก 5 คนขอ "ความช่วยเหลือ" เดียวกัน การตรวจสอบเจอ ถูกพักใบอนุญาต', zh: '💣 滑坡。保险赔付了。但现在又有5个客户要求同样的"帮忙"。审计暴露了你。执照被吊销。' }, stats: { competence: 30, ethics: -70, leadership: -40, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Payment Plan: "I won\'t commit fraud, but I\'ll give you 0% financing over 3 years."', th: '🤝 แผนการชำระเงิน: "ฉันจะไม่ฉ้อโกง แต่ฉันจะให้คุณผ่อน 0% นาน 3 ปี"', zh: '🤝 付款计划："我不会诈骗，但我会给你3年零利率分期付款。"' }, consequence: { en: '💼 Business Solution. They agree reluctantly. You make less profit but sleep well. Half the payments come through.', th: '💼 วิธีทางธุรกิจ เขายอมอย่างไม่เต็มใจ คุณกำไรน้อยลงแต่นอนหลับสบาย เงินครึ่งหนึ่งโอนมา', zh: '💼 商业解决方案。他们勉强同意了。你利润减少但睡得安稳。一半的付款到账。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 30 } },
            { id: 'D', text: { en: '🤐 Don\'t Ask Don\'t Tell: "Leave the forms on the counter. If you fill them out wrong dates, I didn\'t see it."', th: '🤐 ไม่ถามไม่บอก: "วางแบบฟอร์มไว้บนเคาน์เตอร์ ถ้าคุณกรอกวันที่ผิด ฉันไม่เห็นนะ"', zh: '🤐如果不问就不说："把表格放在柜台上。如果你填错了日期，我也没看见。"' }, consequence: { en: '🫣 Plausible Deniability. The client does it. You feel sleazy. Your staff loses respect for you.', th: '🫣 การปฏิเสธความรับผิดชอบ ลูกค้าทำ คุณรู้สึกแย่ พนักงานหมดศรัทธาในตัวคุณ', zh: '🫣 推诿责任。客户做了。你觉得自己很卑鄙。你的员工失去了对你的尊重。' }, stats: { competence: 20, ethics: -30, leadership: -20, innovation: 10 } }
        ]
    },
    {
        id: 'vet_016',
        text: {
            en: '🐢 The Smuggler: A frantic man brings in a suitcase full of rare tortoises. "They are dying! Help them! I\'ll pay double!" They are clearly smuggled illegal wildlife.',
            th: '🐢 ผู้ลักลอบขนสัตว์: ชายคนหนึ่งถือกระเป๋าเดินทางที่เต็มไปด้วยเต่าหายากเข้ามา "พวกมันกำลังจะตาย! ช่วยด้วย! ฉันจ่ายสองเท่า!" ชัดเจนว่าเป็นสัตว์ป่าลักลอบนำเข้าผิดกฎหมาย',
            zh: '🐢 走私者：一个惊慌失措的男人提着装满稀有乌龟的手提箱进来。"它们快死了！救救它们！我付双倍价钱！"显然是走私的非法野生动物。'
        },
        options: [
            { id: 'A', text: { en: '📞 Call Authorities: "Lock the door. Call Fish & Wildlife immediately." Trap him.', th: '📞 แจ้งเจ้าหน้าที่: "ล็อกประตู โทรแจ้งกรมอุทยานฯ ทันที" ขังเขาไว้', zh: '📞 致电当局："锁上门。立即致电鱼类和野生动物管理局。"困住他。' }, consequence: { en: '👮 Bust. He gets arrested. The tortoises go to a rehab center. You risked your safety but stopped a crime ring.', th: '👮 จับกุม เขาโดนจับ เต่าถูกส่งไปศูนย์ฟื้นฟู คุณเสี่ยงภัยแต่หยุดขบวนการค้าสัตว์ได้', zh: '👮 突袭。他被捕了。乌龟去了康复中心。你冒着生命危险，但阻止了一个犯罪团伙。' }, stats: { competence: 50, ethics: 80, leadership: 60, innovation: 0 } },
            { id: 'B', text: { en: '💉 Treat & Release: "I will treat them, but you must surrender them to me. Or I call the cops." Ultimatum.', th: '💉 รักษาและปล่อย: "ฉันจะรักษา แต่คุณต้องมอบพวกมันให้ฉัน ไม่งั้นฉันแจ้งตำรวจ" ยื่นคำขาด', zh: '💉 治疗并释放："我会治疗它们，但你必须把它们交给我。否则我就报警。"最后通牒。' }, consequence: { en: '🐢 Rescue. He panics and runs, leaving the suitcase. You save 20 endangered tortoises. Heroic.', th: '🐢 ช่วยเหลือ เขาตกใจวิ่งหนี ทิ้งกระเป๋าไว้ คุณช่วยเต่าใกล้สูญพันธุ์ 20 ตัว ฮีโร่ชัดๆ', zh: '🐢 救援。他惊慌失措地跑了，留下了手提箱。你救了20只濒危乌龟。英雄。' }, stats: { competence: 70, ethics: 70, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '💰 Take the Cash: "Cash up front. No names on the file. I treat them, you leave." mercenary.', th: '💰 รับเงิน: "จ่ายเงินสดมาก่อน ห้ามลงชื่อในไฟล์ ฉันรักษา คุณกลับไป" รับจ้างทำของ', zh: '💰拿钱："先付现金。档案上没有名字。我治疗它们，你离开。"雇佣兵。' }, consequence: { en: '💀 Enabled. The tortoises live, but he sells them into the black market. They die in captivity later. You profit from crime.', th: '💀 ส่งเสริม เต่ารอด แต่เขาเอาไปขายตลาดมืด พวกมันตายในกรงขังทีหลัง คุณหากินกับอาชญากรรม', zh: '💀 纵容。乌龟活下来了，但他把它们卖到了黑市。它们后来死于囚禁。你从犯罪中获利。' }, stats: { competence: 40, ethics: -60, leadership: -30, innovation: 0 } },
            { id: 'D', text: { en: '🚪 Turn Away: "Get those out of here. I don\'t want trouble." Refuse involvement.', th: '🚪 ไล่กลับ: "เอาออกไปให้พ้น ฉันไม่อยากมีปัญหา" ปฏิเสธความเกี่ยวข้อง', zh: '🚪 赶走："把那些东西拿走。我不想惹麻烦。"拒绝卷入。' }, consequence: { en: '⚰️ Cowardice. He dumps them in a ditch down the road. They all freeze to death. You stayed safe but failed nature.', th: '⚰️ ความขี้ขลาด เขาเอาไปทิ้งคูน้ำข้างทาง พวกมันหนาวตายหมด คุณปลอดภัยแต่ล้มเหลวต่อธรรมชาติ', zh: '⚰️ 懦弱。他把它们扔在路边的沟里。它们都冻死了。你很安全，但辜负了大自然。' }, stats: { competence: 10, ethics: -10, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'vet_017',
        text: {
            en: '🧟 The Zombie Deer: A hunter brings a deer carcass into the clinic. "It was acting crazy, foaming. I shot it. Is the meat safe to eat?" It looks like Chronic Wasting Disease (Prions). Highly contagious and indestructible.',
            th: '🧟 กวางซอมบี้: นายพรานลากซากกวางเข้ามา "มันทำท่าทางบ้าคลั่ง น้ำลายฟูมปาก ผมเลยยิงมัน เนื้อกินได้ไหม?" ดูเหมือนโรคกวางซอมบี้ (พรีออน) ติดต่อง่ายและทำลายไม่ได้',
            zh: '🧟 僵尸鹿：一个猎人把一具鹿尸带进诊所。"它表现得很疯狂，口吐白沫。我开枪打死了它。肉可以安全食用吗？"看起来像是慢性消耗性疾病（朊病毒）。具有高度传染性和不可破坏性。'
        },
        options: [
            { id: 'A', text: { en: '🔥 Incinerate: "Do not eat that! It\'s Prions. We must incinerate the carcass immediately. And your clothes."', th: '🔥 เผาทำลาย: "อย่ากินนะ! มันคือพรีออน เราต้องเผาซากทันที รวมทั้งเสื้อผ้าคุณด้วย"', zh: '🔥 焚烧："别吃那个！那是朊病毒。我们必须立即焚烧尸体。还有你的衣服。"' }, consequence: { en: '🛡️ Biohazard Contained. You prevent him from poisoning his family. The clinic smells like burnt hair for a week.', th: '🛡️ ควบคุมชีวภาพ คุณป้องกันเขาจากการวางยาพิษครอบครัว คลินิกเหม็นไหม้ไปเป็นอาทิตย์', zh: '🛡️ 生物危害得到控制。你阻止了他毒害家人。诊所里烧焦的头发味持续了一周。' }, stats: { competence: 80, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🤷 Dismissive: "I don\'t treat dead wildlife. Take it to the DNR check station." Pass the buck.', th: '🤷 ปัดสวะ: "ฉันไม่รักษาสัตว์ป่าตายแล้ว เอาไปที่จุดตรวจกรมอุทยานฯ นู่น" โยนภาระ', zh: '🤷 不屑一顾："我不治疗死去的野生动物。把它带到自然资源部检查站。"推卸责任。' }, consequence: { en: '🤒 Mistake. He eats it. Prion disease incubation is long, but you missed a critical public health intervention.', th: '🤒 พลาดมหันต์ เขากินมัน โรคพรีออนฟักตัวนาน แต่คุณพลาดการแทรกแซงทางสาธารณสุขที่สำคัญ', zh: '🤒 错误。他吃了它。朊病毒病的潜伏期很长，但你错过了关键的公共卫生干预。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🔬 Keep for Study: "Leave it here. I want to dissect the brain for research." Educational curiosity.', th: '🔬 เก็บไว้ศึกษา: "ทิ้งไว้ที่นี่ ฉันอยากผ่าสมองเพื่อวิจัย" ความอยากรู้อยากเห็นทางการศึกษา', zh: '🔬 留作研究："把它留在这里。我想解剖大脑进行研究。"教育好奇心。' }, consequence: { en: '⚠️ Contamination. You contaminate your clinic with prions. They are impossible to clean. You have to close for deep hazmat cleaning.', th: '⚠️ ปนเปื้อน คุณทำคลินิกปนเปื้อนพรีออน มันล้างไม่ออก คุณต้องปิดคลินิกเพื่อทำความสะอาดระดับสารเคมี', zh: '⚠️ 污染。你用朊病毒污染了你的诊所。它们无法清洗。你必须关闭诊所进行深度危险品清洁。' }, stats: { competence: 40, ethics: 10, leadership: -30, innovation: 30 } },
            { id: 'D', text: { en: '🍽️ "Probably Fine": "Cook it well. Should be okay." Ignorance.', th: '🍽️ "น่าจะโอเค": "ปรุงสุกๆ น่าจะกินได้" ความไม่รู้', zh: '🍽️ "可能没事"："煮熟点。应该没问题。"无知。' }, consequence: { en: '💀 Malpractice. That is terrible advice. You endangered human lives. If found out, you lose everything.', th: '💀 ผิดจรรยาบรรณ เป็นคำแนะนำที่แย่มาก คุณทำให้ชิวิตคนเสี่ยง ถ้าความแตก คุณหมดตัว', zh: '💀 玩忽职守。这是糟糕的建议。你危及了人类生命。如果被发现，你将失去一切。' }, stats: { competence: 0, ethics: -80, leadership: -50, innovation: 0 } }
        ]
    },
    {
        id: 'vet_018',
        text: {
            en: '🧠 The Rabies Scare: An unvaccinated stray cat bites your receptionist deeply. The cat dies overnight. You need to send the head for rabies testing, but the receptionist is begging you not to "decapitate the kitty."',
            th: '🧠 ความกลัวพิษสุนัขบ้า: แมวจรจัดไม่ได้ฉีดวัคซีนกัดพนักงานต้อนรับของคุณลึกมาก แมวตายในคืนนั้น คุณต้องส่งหัวไปตรวจพิษสุนัขบ้า แต่พนักงานขอร้องไม่ให้ "ตัดหัวน้องแมว"',
            zh: '🧠 狂犬病恐慌：一只未接种疫苗的流浪猫深深咬伤了你的前台接待员。猫连夜死了。你需要把猫头送去检测狂犬病，但接待员求你不要"砍掉小猫的头"。'
        },
        options: [
            { id: 'A', text: { en: '🔪 Send the Head: "I\'m sorry. It\'s the law and your life is at risk. We must confirm." Do it professionally.', th: '🔪 ส่งหัวไป: "ขอโทษนะ มันเป็นกฎหมายและชีวิตคุณเสี่ยงอยู่ เราต้องยืนยัน" ทำอย่างมืออาชีพ', zh: '🔪 送头："对不起。这是法律，你的生命处于危险之中。我们必须确认。"专业地做。' }, consequence: { en: '✅ Life Saved. The cat was positive. The receptionist gets PEP shots immediately. She is traumatized but alive.', th: '✅ ช่วยชีวิตได้ ผลเป็นบวก พนักงานได้รับวัคซีนทันที เธอเสียขวัญแต่รอดชีวิต', zh: '✅ 挽救了生命。猫呈阳性。接待员立即注射了暴露后预防针。她受了创伤但活着。' }, stats: { competence: 80, ethics: 70, leadership: 60, innovation: 0 } },
            { id: 'B', text: { en: '🚫 Respect Wishes: "Okay. We will treat you as if positive (PEP shots) but bury the cat whole." Skip the test.', th: '🚫 เคารพความต้องการ: "โอเค เราจะรักษาคุณเหมือนติดเชื้อ (ฉีดวัคซีน) แต่ฝังแมวทั้งตัว" ข้ามการตรวจ', zh: '🚫 尊重意愿："好的。我们会像对待阳性患者一样治疗你（注射预防针），但把猫完整埋葬。"跳过测试。' }, consequence: { en: '📉 Protocol Breach. The Health Dept finds out. You get fined/cited. But the receptionist feels heard.', th: '📉 ละเมิดระเบียบ กรมอนามัยรู้เรื่อง คุณโดนปรับ/ตักเตือน แต่พนักงานรู้สึกว่าคุณรับฟัง', zh: '📉 违反协议。卫生部发现了。你被罚款/传唤。但接待员觉得被倾听了。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🤷 Wait and See: "It looked healthy. Just clean the wound. Don\'t worry about shots." Gamble.', th: '🤷 รอดูก่อน: "มันดูแข็งแรงนะ ล้างแผลก็พอ ไม่ต้องฉีดยาหรอก" เสี่ยงดวง', zh: '🤷 等着瞧："它看起来很健康。只要清洗伤口。别担心打针。"赌一把。' }, consequence: { en: '💀 Fatal Error. Rabies is 100% fatal once symptoms start. If you are wrong, she dies a horrible death.', th: '💀 ความผิดพลาดถึงตาย พิษสุนัขบ้าตาย 100% เมื่อเริ่มมีอาการ ถ้าคุณพลาด เธอจะตายอย่างทรมาน', zh: '💀 致命错误。一旦出现症状，狂犬病是100%致命的。如果你错了，她会得很惨。' }, stats: { competence: 0, ethics: -90, leadership: -80, innovation: 0 } },
            { id: 'D', text: { en: '🔬 Secret Test: "Decapitate it secretly. Tell her you buried it whole. Send the head." Lie for her good.', th: '🔬 แอบตรวจ: "แอบตัดหัวมัน บอกเธอว่าฝังทั้งตัว ส่งหัวไปตรวจ" โกหกเพื่อตัวเธอเอง', zh: '🔬 秘密测试："秘密砍头。告诉她你把这一整只都埋了。把头送去。"为了她好撒谎。' }, consequence: { en: '🤥 Paternalism. Effective medical care, but ethical dishonesty. If she finds out, trust is broken.', th: '🤥 เจตนาดีแบบพ่อปกครองลูก การรักษาได้ผล แต่ผิดจริยธรรม ถ้าเธอรู้ ความไว้ใจพังทลาย', zh: '🤥 家长作风。有效的医疗护理，但不诚实。如果她发现了，信任就破裂了。' }, stats: { competence: 70, ethics: 20, leadership: 40, innovation: 0 } }
        ]
    },
    {
        id: 'vet_019',
        text: {
            en: '🕯️ Compassion Fatigue: You have euthanized 5 animals today. You are exhausted and numb. A client walks in with a minor issue (broken nail) and screams at you for waiting 5 minutes.',
            th: '🕯️ ภาวะหมดไฟจากความเห็นอกเห็นใจ: วันนี้คุณการุณยฆาตสัตว์ไป 5 ตัวแล้ว คุณเหนื่อยล้าและชาชิน ลูกค้าเข้ามาด้วยเรื่องเล็กน้อย (เล็บฉีก) และตะคอกใส่คุณที่ต้องรอ 5 นาที',
            zh: '🕯️ 同情疲劳：你今天已经安乐死了5只动物。你筋疲力尽，麻木了。一个客户因为一个小问题（指甲断了）走进来，因为等了5分钟就对你大喊大叫。'
        },
        options: [
            { id: 'A', text: { en: '🤬 Snap: "I just killed 5 dogs today! Shut up about a nail! Get out!" Explosion.', th: '🤬 สติแตก: "วันนี้ฉันเพิ่งฆ่าหมาไป 5 ตัว! หุบปากเรื่องเล็บซะ! ออกไป!" ระเบิดอารมณ์', zh: '🤬 爆发："我今天刚杀了5条狗！别再提指甲了！滚出去！"爆发。' }, consequence: { en: '📉 Viral Meltdown. Someone films it. You look unhinged. You need a vacation immediately. Reputation hit.', th: '📉 ไวรัสสติหลุด มีคนถ่ายคลิป คุณดูเหมือนคนบ้า คุณต้องพักร้อนด่วน ชื่อเสียงพัง', zh: '📉 病毒式崩溃。有人拍下来了。你看起来精神错乱。你需要立即休假。声誉受损。' }, stats: { competence: 30, ethics: 20, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: '🧘 Professional Mask: "Deep breath. \'I apologize for the wait. Let\'s look at that nail.\'" Suppress it.', th: '🧘 สวมหน้ากากมืออาชีพ: "หายใจลึกๆ \'ขอโทษที่ให้รอครับ มาดูเล็บนั่นกัน\'" ข่มอารมณ์ไว้', zh: '🧘 专业伪装："深呼吸。\'抱歉让您久等了。让我们看看那个指甲。\'"压抑住。' }, consequence: { en: '🤖 Robot Mode. You get through the day. But inside, something dies. Burnout accelerates. You drink alone tonight.', th: '🤖 โหมดหุ่นยนต์ คุณผ่านวันนั้นไปได้ แต่ข้างในมีบางอย่างตายไป ภาวะหมดไฟเร่งตัว คืนนี้คุณดื่มคนเดียว', zh: '🤖 机器人模式。你熬过了一天。但在内心深处，某种东西死去了。职业倦怠加速。今晚你独自饮酒。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🚪 Delegate: "Walk away. \'Sarah, please handle Room 2. I need a moment.\'" Step out.', th: '🚪 มอบหมายงาน: "เดินหนี \'ซาร่า ช่วยดูห้อง 2 ที ฉันขอเวลาแป๊บ\'" หลบออกมา', zh: '🚪 委派："走开。\'莎拉，请处理2号房间。我需要一点时间。\'"走出房间。' }, consequence: { en: '🛡️ Self Care. You cry in the breakroom for 10 mins. You return composed. Good boundary setting.', th: '🛡️ ดูแลตัวเอง คุณร้องไห้ในห้องพัก 10 นาที กลับมาอย่างสงบ การกำหนดขอบเขตที่ดี', zh: '🛡️ 自我照顾。你在休息室哭了10分钟。你镇定地回来了。设定了良好的界限。' }, stats: { competence: 50, ethics: 70, leadership: 60, innovation: 10 } },
            { id: 'D', text: { en: '💊 Self Medicate: "Pop a Xanax from the pharmacy inventory. Wash it down with water. Smile."', th: '💊 ใช้ยาช่วย: "กินซาแน็กซ์จากสต็อกยา ดื่มน้ำตาม ยิ้มสู้"', zh: '💊 自我用药："从药房库存里拿一片阿普唑仑。用水送服。微笑。"' }, consequence: { en: '⚠️ Addiction Risk. It works too well. You start doing it daily. A dangerous path begins.', th: '⚠️ เสี่ยงติดยา มันได้ผลเกินคาด คุณเริ่มทำทุกวัน เส้นทางอันตรายเริ่มต้นขึ้น', zh: '⚠️ 成瘾风险。效果太好了。你开始每天都这样。一条危险的道路开始了。' }, stats: { competence: 40, ethics: -30, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'vet_020',
        text: {
            en: '🤳 The Influencer: An Instagram model brings in her "Vegetarian Cat." The cat is blind and dying from taurine deficiency. She livestreams the exam: "The vet is going to tell us how healthy Vegan is!"',
            th: '🤳 อินฟลูเอนเซอร์: นางแบบไอจีพา "แมวมังสวิรัติ" มา แมวตาบอดและกำลังจะตายเพราะขาดทอรีน เธอไลฟ์สดตอนตรวจ: "หมอกำลังจะบอกเราว่าวีแกนสุขภาพดีแค่ไหน!"',
            zh: '🤳 网红：一位Instagram模特带来了她的"素食猫"。这只猫失明了，正死于牛磺酸缺乏症。她直播检查过程："兽医会告诉我们纯素食有多健康！"'
        },
        options: [
            { id: 'A', text: { en: '📢 Truth Bomb: "Stop the stream. Your cat is dying of malnutrition. Cats are carnivores. You are killing it."', th: '📢 ระเบิดความจริง: "หยุดไลฟ์ แมวคุณกำลังจะตายเพราะขาดสารอาหาร แมวเป็นสัตว์กินเนื้อ คุณกำลังฆ่ามัน"', zh: '📢 真相炸弹："停止直播。你的猫死于营养不良。猫是食肉动物。你在杀它。"' }, consequence: { en: '🔥🔥 Internet War. Her followers attack you. Others defend you. Viral chaos. But you saved the cat (she surrenders it).', th: '🔥🔥 สงครามอินเทอร์เน็ต แฟนคลับเธอโจนตีคุณ คนอื่นปกป้องคุณ วุ่นวายทั้งโซเชียล แต่คุณช่วยแมวไว้ได้ (เธอยอมยกให้)', zh: '🔥🔥 网络战。她的粉丝攻击你。其他人为你辩护。病毒式混乱。但你救了猫（她把它交出来了）。' }, stats: { competence: 70, ethics: 80, leadership: 60, innovation: 0 } },
            { id: 'B', text: { en: '🤫 Quiet Treatment: "Give taurine injections. Say it\'s \'vitamins.\' Don\'t challenge her ideology on camera."', th: '🤫 รักษาเงียบๆ: "ฉีดทอรีน บอกว่าเป็น \'วิตามิน\' อย่าท้าทายอุดมการณ์เธอหน้ากล้อง"', zh: '🤫 安静治疗："注射牛磺酸。说是\'维生素\'。不要在镜头前挑战她的意识形态。"' }, consequence: { en: '🐢 Temporary Fix. The cat feels better. She thinks Vegan works. She continues the diet. The cat will die later.', th: '🐢 แก้ชั่วคราว แมวดีขึ้น เธอคิดว่าวีแกนได้ผล เธอให้กินต่อ แมวจะตายทีหลัง', zh: '🐢 临时修复。猫感觉好些了。她认为纯素食有效。她继续这种饮食。猫以后会死。' }, stats: { competence: 30, ethics: -20, leadership: -10, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Educate Gently: "Vegan is great for humans! But cats need specific proteins. Let\'s try a supplement?"', th: '🤝 สอนอย่างนุ่มนวล: "วีแกนดีต่อคน! แต่แมวต้องการโปรตีนเฉพาะ ลองอาหารเสริมไหม?"', zh: '🤝 温和教育："纯素食对人类很好！但猫需要特定的蛋白质。让我们试试补充剂？"' }, consequence: { en: '📉 Ignored. She nods but throws the supplements away. "Chemicals!" Logic failed against delusion.', th: '📉 ถูกเมิน เธอพยักหน้าแต่ทิ้งอาหารเสริม "สารเคมี!" ตรรกะแพ้ความหลงผิด', zh: '📉 被忽视。她点点头，但把补充剂扔掉了。"化学物质！"逻辑败给了妄想。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'D', text: { en: '📞 Report Abuse: "Call animal control during the stream. \'I am reporting animal cruelty live.\'"', th: '📞 แจ้งทารุณกรรม: "โทรเรียกกรมปศุสัตว์ระหว่างไลฟ์ \'ฉันกำลังแจ้งความทารุณสัตว์สดๆ\'"', zh: '📞 举报虐待："在直播期间致电动物管制中心。\'我正在直播举报虐待动物。\'"' }, consequence: { en: '💣 Legendary Moment. The stream goes black as cops arrive. You are a hero to vets everywhere.', th: '💣 ตำนาน ไลฟ์ดับตอนตำรวจมา คุณเป็นฮีโร่ของสัตวแพทย์ทั่วโลก', zh: '💣 传奇时刻。警察到达时直播变黑了。你是各地兽医的英雄。' }, stats: { competence: 60, ethics: 90, leadership: 80, innovation: 10 } }
        ]
    },
    {
        id: 'vet_021',
        text: {
            en: '🏥 The Triage: A waiting room crisis. 1. A dog bloat (will die in 1 hour). 2. A cat hit by car (bleeding out). 3. A screaming donor\'s poodle with a broken nail. You are the only vet.',
            th: '🏥 การคัดแยกผู้ป่วย: วิกฤตห้องรอ 1. หมากระเพาะบิด (ตายใน 1 ชม.) 2. แมวถูกรถชน (เลือดออกมาก) 3. พุดเดิ้ลของผู้บริจาคที่กรีดร้องเพราะเล็บฉีก คุณเป็นหมอคนเดียว',
            zh: '🏥 分诊：候诊室危机。1. 狗腹胀（1小时内死亡）。2. 猫被车撞（失血过多）。3. 一位尖叫的捐赠者的贵宾犬指甲断了。你是唯一的兽医。'
        },
        options: [
            { id: 'A', text: { en: '🐕 Treat Bloat First: "Surgery on Dog. Techs pressure bandage Cat. Donor waits." Triage by survival chance.', th: '🐕 รักษากระเพาะบิดก่อน: "ผ่าตัดหมา ผู้ช่วยกดแผลแมว ผู้บริจาครอก่อน" คัดแยกตามโอกาสรอด', zh: '🐕 先治疗腹胀："给狗做手术。技术员给猫加压包扎。捐赠者等待。"按生存机会分诊。' }, consequence: { en: '⚖️ Standard of Care. Dog lives. Cat stabilizes. Donor is furious but poodle is fine. Correct medical decision.', th: '⚖️ มาตรฐานการรักษา หมารอด แมวอาการคงที่ ผู้บริจาคโกรธแต่พุดเดิ้ลสบายดี การตัดสินใจที่ถูกต้อง', zh: '⚖️ 护理标准。狗活了。猫稳定了。捐赠者很愤怒，但贵宾犬没事。正确的医疗决定。' }, stats: { competence: 80, ethics: 70, leadership: 60, innovation: 0 } },
            { id: 'B', text: { en: '🐈 Treat Cat First: "Cat is bleeding active! Surgery on cat!" Dog waits.', th: '🐈 รักษาแมวก่อน: "แมวเลือดกำลังไหล! ผ่าแมวก่อน!" หมารอไป', zh: '🐈 先治猫："猫正在流血！给猫做手术！"狗等着。' }, consequence: { en: '☠️ Dog Dies. The GDV (bloat) twists too far. Dog dies in cage. Cat lives. You chose the wrong priority (GDV is faster killer).', th: '☠️ หมาตาย กระเพาะบิดหมุนมากไป หมาตายในกรง แมวรอด คุณลำดับความสำคัญผิด (โรคกระเพาะบิดฆ่าเร็วกว่า)', zh: '☠️ 狗死了。GDV（腹胀）扭转得太厉害。狗死在笼子里。猫活了。你选择了错误的优先级（GDV是更快的杀手）。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🐩 Treat Donor: "Fix the nail quickly to silence the screaming and get money." Ignore emergencies.', th: '🐩 รักษาผู้บริจาค: "ซ่อมเล็บเร็วๆ ให้หยุดกรี๊ดและรับเงิน" เมินเคสฉุกเฉิน', zh: '🐩 治疗捐赠者："快速修好指甲以平息尖叫并赚钱。"无视紧急情况。' }, consequence: { en: '💀 Twin Tragedy. While you did the nail, the dog died. The cat went into shock. You lost 2 lives for a broken nail.', th: '💀 โศกนาฏกรรมคู่ ตอนทำเล็บ หมาตาย แมวช็อก คุณเสีย 2 ชีวิตแลกกับเล็บฉีก', zh: '💀 双重悲剧。当你修指甲时，狗死了。猫休克了。你为了一个断指甲失去了两条生命。' }, stats: { competence: 0, ethics: -100, leadership: -50, innovation: 0 } },
            { id: 'D', text: { en: '👯 Manage All: "Tech start fluids on Cat. I convert Dog triage to surgery. Rinse bandage on Poodle." Multi-task.', th: '👯 จัดการทั้งหมด: "ผู้ช่วยให้สายเกลือแมว ฉันผ่าหมา ล้างแผลพุดเดิ้ล" ทำหลายอย่าง', zh: '👯 全部管理："技术员给猫输液。我给狗做手术。冲洗贵宾犬的绷带。"多任务处理。' }, consequence: { en: '🚀 High Stress Win. It is chaos. You sweat buckets. But everyone lives. You are a surgery god today.', th: '🚀 ความเครียดสูงแต่ชนะ วุ่นวายมาก เหงื่อท่วม แต่ทุกคนรอด วันนี้คุณคือเทพศัลยกรรม', zh: '🚀 高压胜利。一片混乱。你汗流浃背。但大家都活下来了。今天你是手术之神。' }, stats: { competence: 90, ethics: 80, leadership: 80, innovation: 20 } }
        ]
    },
    {
        id: 'vet_022',
        text: {
            en: '💊 Antibiotic Resistance: A farmer wants 500 doses of strong antibiotics for "growth promotion" (illegal). He offers a huge bribe. "Everyone does it. If you say no, I buy online from China."',
            th: '💊 เชื้อดื้อยา: เกษตรกรต้องการยาปฏิชีวนะแรงๆ 500 โดสเพื่อ "เร่งโต" (ผิดกฎหมาย) เขาเสนอสินบนก้อนโต "ใครๆ ก็ทำกัน ถ้าคุณไม่ขาย ผมก็ซื้อออนไลน์จากจีน"',
            zh: '💊 抗生素耐药性：一位农民想要500剂强效抗生素用于"促进生长"（非法）。他提供了巨额贿赂。"大家都这么做。如果你说不，我就从中国网购。"'
        },
        options: [
            { id: 'A', text: { en: '🛑 Refuse Strictly: "No. That creates superbugs. It ends with me. I won\'t sell."', th: '🛑 ปฏิเสธเสียงแข็ง: "ไม่ นั่นสร้างเชื้อดื้อยา จบที่ผม ผมไม่ขาย"', zh: '🛑 严词拒绝："不。那会制造超级细菌。到此为止。我不会卖的。"' }, consequence: { en: '🛡️ Gatekeeper. He leaves angry. He probably buys online, but your hands are clean. You upheld science.', th: '🛡️ ผู้พิทักษ์ เขาโกรธกลับไป เขาคงซื้อออนไลน์ แต่มือคุณสะอาด คุณยึดมั่นวิทยาศาสตร์', zh: '🛡️以此把关人。他愤怒地离开了。他可能会网购，但你是清白的。你坚持了科学。' }, stats: { competence: 50, ethics: 80, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '💰 Sell It: "Cash only. Don\'t tell anyone." Take the money.', th: '💰 ขายไป: "เงินสดเท่านั้น ห้ามบอกใคร" รับเงิน', zh: '💰 卖掉它："只收现金。别告诉任何人。"拿钱。' }, consequence: { en: '☣️ Superbug Era. You contribute to global resistance. A year later, a resistant strain hits the local hospital. Guilty conscience?', th: '☣️ ยุคเชื้อดื้อยา คุณมีส่วนสร้างเชื้อดื้อยา ปีต่อมา เชื้อดื้อยาระบาดในโรงพยาบาลท้องถิ่น รู้สึกผิดไหม?', zh: '☣️ 超级细菌时代。你助长了全球耐药性。一年后，一种耐药菌株袭击了当地医院。良心不安？' }, stats: { competence: 40, ethics: -60, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '🔄 Harm Reduction: "I won\'t give you that. But I will sell you Probiotics and a valid treatment plan for sick ones only."', th: '🔄 ลดอันตราย: "ฉันให้ยาตัวนั้นไม่ได้ แต่จะขายโปรไบโอติกและแผนการรักษาสำหรับตัวที่ป่วยเท่านั้น"', zh: '🔄 减少伤害："我不会给你那个。但我会卖给你益生菌和只针对病畜的有效治疗方案。"' }, consequence: { en: '🎓 Education win. He tries the probiotics. They work okay. Use of antibiotics drops by 50%.', th: '🎓 ชัยชนะทางการศึกษาเขาลองโปรไบโอติก ได้ผลโอเค การใช้ยาปฏิชีวนะลดลง 50%', zh: '🎓 教育胜利。他尝试了益生菌。效果还可以。抗生素的使用量下降了50%。' }, stats: { competence: 70, ethics: 60, leadership: 60, innovation: 40 } },
            { id: 'D', text: { en: '📞 Report Farm: "I\'m reporting you for intended misuse." Call valid authorities.', th: '📞 แจ้งจับฟาร์ม: "ฉันจะแจ้งจับคุณฐานตั้งใจใช้ผิดวัตถุประสงค์" แจ้งเจ้าหน้าที่', zh: '📞 举报农场："我要举报你蓄意滥用。"致电相关部门。' }, consequence: { en: '⚔️ War. The farmer community boycotts you. You lose business. But maybe you scared them straight.', th: '⚔️ สงคราม ชุมชนเกษตรกรแบนคุณ ธุรกิจเสียหาย แต่บางทีคุณอาจขู่ให้พวกเขากลัวได้', zh: '⚔️ 战争。农民社区抵制你。你失去了生意。但也许你吓住了他们。' }, stats: { competence: 40, ethics: 70, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'vet_023',
        text: {
            en: '🐕 The Fighting Dog: A man brings in a Pitbull with bite wounds all over, torn ears, and old scars. "He got in a scrap with a raccoon." It is obviously a fighting dog. The man looks dangerous.',
            th: '🐕 หมากัด: ชายคนหนึ่งพาพิตบูลที่มีแผลกัดทั่วตัว หูขาด และแผลเป็นเก่า "มันฟัดกับแรคคูนมา" ชัดเจนว่าเป็นหมากัด ชายคนนั้นดูอันตราย',
            zh: '🐕 斗狗：一个男人带了一只斗牛犬进来，浑身是咬伤，耳朵撕裂，还有旧伤疤。"它和浣熊打了一架。"这显然是一只斗狗。那个男人看起来很危险。'
        },
        options: [
            { id: 'A', text: { en: '🤫 Treat & Silence: "stitch him up. antibiotics. No questions asked." Avoid conflict.', th: '🤫 รักษาและเงียบ: "เย็บแผล ยาปฏิชีวนะ ไม่ถามอะไร" เลี่ยงความขัดแย้ง', zh: '🤫 治疗并保持沉默："缝合。抗生素。不问问题。"避免冲突。' }, consequence: { en: '🤐 Complicit. The dog goes back to the ring to fight again. You enabled the torture to stay safe.', th: '🤐 สมรู้ร่วมคิด หมากลับไปกัดกันที่สังเวียนอีก คุณยอมให้เกิดการทรมานเพื่อความปลอดภัย', zh: '🤐 共谋。狗回到拳击台再次打斗。你为了安全纵容了折磨。' }, stats: { competence: 50, ethics: -40, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '📞 Police Ambush: "I need to keep him overnight for observation. (Call cops)." Trap him.', th: '📞 ตำรวจดักซุ่ม: "ฉันต้องดูอาการข้ามคืน (โทรเรียกตำรวจ)" ดักจับเขา', zh: '📞 警察埋伏："我要留它过夜观察。（报警）。"设陷阱抓他。' }, consequence: { en: '🚨 Bust. Police raid the clinic. The guy is arrested. You are a key witness. Scary but heroic.', th: '🚨 จับกุม ตำรวจบุกคลินิก ชายคนนั้นโดนจับ คุณเป็นพยานปากเอก น่ากลัวแต่ฮีโร่', zh: '🚨 突袭。警察突袭诊所。那家伙被捕了。你是关键证人。可怕但英勇。' }, stats: { competence: 60, ethics: 80, leadership: 60, innovation: 10 } },
            { id: 'C', text: { en: '🛑 Refuse Service: "I don\'t treat fighting dogs. Leave. Now."', th: '🛑 ปฏิเสธบริการ: "ฉันไม่รักษาหมากัด ออกไป เดี๋ยวนี้"', zh: '🛑 拒绝服务："我不治疗斗狗。离开。现在。"' }, consequence: { en: '🤕 Assault. He punches you in the face. He leaves with the dog. The dog dies of infection later.', th: '🤕 ทำร้ายร่างกาย เขาชกหน้าคุณ เขาพาหมากลับ หมาติดเชื้อตายทีหลัง', zh: '🤕 袭击。他打了你的脸。他带着狗离开了。狗后来死于感染。' }, stats: { competence: 20, ethics: 40, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '💊 Euthanize Claim: "His injuries are fatal. He died on the table (Lie)." Euthanize to end suffering.', th: '💊 อ้่างการุณยฆาต: "แผลสาหัสมาก มันตายบนเตียง (โกหก)" การุณยฆาตเพื่อให้พ้นทุกข์', zh: '💊 安乐死声明："它的伤势是致命的。它死在了手术台上（撒谎）。"安乐死以结束痛苦。' }, consequence: { en: '⚰️ Mercy Kill. You save the dog from more fights. The owner is suspicious but leaves. You carry the secret.', th: '⚰️ การฆ่าอย่างเมตตา คุณช่วยหมาจากการต่อสู้ เจ้าของสงสัยแต่กลับไป คุณแบกความลับไว้', zh: '⚰️ 仁慈的杀戮。你把狗从更多的打斗中解救出来。主人很怀疑，但还是离开了。你保守着秘密。' }, stats: { competence: 40, ethics: 50, leadership: 20, innovation: 30 } }
        ]
    },
    {
        id: 'vet_024',
        text: {
            en: '🌪️ The Flood: A hurricane hits. Your clinic is flooded but functional. People bring in hundreds of injured pets, strays, and wildlife. You are low on supplies and staff.',
            th: '🌪️ น้ำท่วม: พายุเฮอริเคนถล่ม คลินิกน้ำท่วมแต่ยังไหว คนพาสัตว์เจ็บ สัตว์จร สัตว์ป่ามาเป็นร้อย คุณขาดแคลนของและคน',
            zh: '🌪️ 洪水：飓风来袭。你的诊所被淹但还能运作。人们带来了数百只受伤的宠物、流浪动物和野生动物。你的物资和人员紧缺。'
        },
        options: [
            { id: 'A', text: { en: '💪 Field Hospital: "Open the doors! Everyone helps! Use tablecloths for bandages! Triage station in the parking lot!"', th: '💪 โรงพยาบาลสนาม: "เปิดประตู! ทุกคนช่วยกัน! ใช้ผ้าปูโต๊ะพันแผล! จุดคัดแยกที่ลานจอดรถ!"', zh: '💪 野战医院："打开大门！大家帮忙！用桌布做绷带！停车场设分诊站！"' }, consequence: { en: '🏆 Community Hero. You save hundreds. The community rallies. Donations pour in later. A defining career moments.', th: '🏆 ฮีโร่ชุมชน คุณช่วยเป็นร้อย ชุมชนร่วมใจ เงินบริจาคไหลมาทีหลัง ช่วงเวลาสำคัญของอาชีพ', zh: '🏆 社区英雄。你救了数百人。社区团结起来。捐款随后涌入。职业生涯的高光时刻。' }, stats: { competence: 80, ethics: 80, leadership: 90, innovation: 70 } },
            { id: 'B', text: { en: '🔒 Close Up: "It\'s unsafe. We have no sterile supplies. Direct everyone to the shelter." Protect standards.', th: '🔒 ปิดคลินิก: "ไม่ปลอดภัย เราไม่มีของปลอดเชื้อ ส่งทุกคนไปศูนย์พักพิง" รักษามาตรฐาน', zh: '🔒 关闭："不安全。我们没有无菌用品。指引大家去避难所。"保护标准。' }, consequence: { en: '❄️ Cold Prudence. Many animals die in transport. You protected your license but failed the moral test.', th: '❄️ ความรอบคอบที่เย็นชา สัตว์ตายระหว่างขนย้ายเยอะ คุณรักษาใบอนุญาตไว้ได้แต่สอบตกจริยธรรม', zh: '❄️ 冷酷的谨慎。许多动物在运输途中死亡。你保住了执照，但未能通过道德测试。' }, stats: { competence: 50, ethics: -20, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '💰 Price Gouge: "Supply and demand. Emergency fees apply. $200 min upfront." Profit from disaster.', th: '💰 โก่งราคา: "อุปสงค์อุปทาน คิดค่าฉุกเฉิน ขั้นต่ำ $200 จ่ายก่อน" หากินกับภัยพิบัติ', zh: '💰 哄抬物价："供需关系。收取紧急费用。预付最低200美元。"从灾难中获利。' }, consequence: { en: '☠️ Pariah. You make money today, but get run out of town tomorrow. "The vet who charged drowning dogs."', th: '☠️ คนนอกคอก วันนี้ได้เงิน พรุ่งนี้โดนไล่ออกจากเมือง "หมอที่เก็บเงินหมาจมน้ำ"', zh: '☠️ 贱民。你今天赚钱，明天就被赶出城。"向溺水狗收费的兽医。"' }, stats: { competence: 20, ethics: -80, leadership: -60, innovation: 20 } },
            { id: 'D', text: { en: '🤝 Focus on Own Clients: "We only have supplies for existing records. Strays must go elsewhere."', th: '🤝 เน้นลูกค้าตัวเอง: "เรามีของแค่พอให้ลูกค้าเก่า สัตว์จรไปที่อื่น"', zh: '🤝 专注于自己的客户："我们的物资只够现有的记录。流浪动物必须去别处。"' }, consequence: { en: '📉 Mixed Bag. Loyal clients love you. The public hates you. A safe, selfish middle ground.', th: '📉 กึ่งดีกึ่งร้าย ลูกค้าประจำรักคุณ คนทั่วไปเกลียดคุณ ทางสายกลางที่ปลอดภัยแต่แก่ตัว', zh: '📉 毁誉参半。忠诚的客户爱你。公众恨你。一个安全、自私的中间立场。' }, stats: { competence: 60, ethics: 30, leadership: 30, innovation: 0 } }
        ]
    },
    {
        id: 'vet_025',
        text: {
            en: '🐅 The Illegal Patient: A local gangster brings in a sick tiger cub. "Found it," he says. It has metabolic bone disease from a bad diet. He pays cash, heavy.',
            th: '🐅 คนไข้ผิดกฎหมาย: นักเลงท้องถิ่นพาลูกเสือป่วยมา "เจอมา" เขาบอก มันเป็นโรคกระดูกเมตาบอลิกจากอาหารที่ไม่ดี เขาจ่ายเงินสดก้อนโต',
            zh: '🐅 非法病人：当地一名歹徒带了一只生病的老虎幼崽进来。"捡到的，"他说。由于饮食不良，它患有代谢性骨病。他付现金，很重。'
        },
        options: [
            { id: 'A', text: { en: '🤫 Treat & Release: "Fix the diet, give calcium shots. Send it home." Avoid the mafia.', th: '🤫 รักษาและปล่อยไป: "แก้เรื่องอาหาร ฉีดแคลเซียม ให้กลับบ้าน" เลี่ยงมาเฟีย', zh: '🤫 治疗并释放："修正饮食，注射钙。送它回家。"避开黑手党。' }, consequence: { en: '🏰 Glass Castle. The cub improves, but lives in a cage. You are now the "mob vet." They bring more weird animals.', th: '🏰 ปราสาทแก้ว ลูกเสือดีขึ้น แต่อยู่ในกรง คุณกลายเป็น "หมอมาเฟีย" พวกเขาพาสัตว์แปลกๆ มาอีก', zh: '🏰 玻璃城堡。幼崽好转了，但生活在笼子里。你现在是"黑帮兽医"。他们带来了更多奇怪的动物。' }, stats: { competence: 60, ethics: -50, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🚔 Report Immediately: "Stall him. Call wildlife authorities and police." Risk your safety.', th: '🚔 แจ้งทันที: "ถ่วงเวลา โทรเรียกเจ้าหน้าที่สัตว์ป่าและตำรวจ" เสี่ยงความปลอดภัย', zh: '🚔 立即报告："拖住他。致电野生动物主管部门和警察。"冒着生命危险。' }, consequence: { en: '🎯 Target. The tiger is rescued to a sanctuary. The gangster is arrested but his friends threaten you. You need security.', th: '🎯 เป้าหมาย เสือถูกช่วยไปศูนย์พักพิง นักเลงโดนจับแต่เพื่อนเขาขู่คุณ คุณต้องมีการ์ด', zh: '🎯 目标。老虎被救到避难所。歹徒被捕，但他的朋友威胁你。你需要安保。' }, stats: { competence: 50, ethics: 90, leadership: 70, innovation: 0 } },
            { id: 'C', text: { en: '💉 Euthanize: "It\'s suffering too much. I will end it." Tell him it died of natural causes.', th: '💉 การุณยฆาต: "มันทรมานเกินไป ฉันจะจบมันเอง" บอกเขาว่ามันตายเอง', zh: '💉 安乐死："它太痛苦了。我会结束它。"告诉他它是自然死亡的。' }, consequence: { en: '😠 Dangerous Lie. He suspects you killed it. You lose a powerful "ally" but saved the tiger from a life of misery.', th: '😠 คำโกหกอันตราย เขาสงสัยว่าคุณฆ่ามัน คุณเสีย "พันธมิตร" ผู้มีอิทธิพล แต่ช่วยเสือจากการทรมาน', zh: '😠 危险的谎言。他怀疑你杀了它。你失去了一个强大的"盟友"，但把老虎从痛苦的生活中解救了出来。' }, stats: { competence: 30, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'D', text: { en: '🦁 Confiscate: "I am seizing this animal under federal law. Leave or I call the cops." Bluff.', th: '🦁 ยึดสัตว์: "ฉันขอยึดสัตว์ตัวนี้ตามกฎหมายรัฐบาลกลาง ออกไปไม่งั้นฉันแจ้งตำรวจ" ขู่', zh: '🦁 没收："根据联邦法律，我要扣押这只动物。离开，否则我报警。"虚张声势。' }, consequence: { en: '🎰 High Stakes. He hesitates, then leaves, scared of the "Feds." You rush the cub to a zoo. Big win.', th: '🎰 เดิมพันสูง เขาลังเล แล้วกลับไป กลัว "เจ้าหน้าที่รัฐ" คุณรีบส่งลูกเสือไปสวนสัตว์ ชนะครั้งใหญ่', zh: '🎰 高风险。他犹豫了，然后离开了，害怕"联邦探员"。你把幼崽送到动物园。大获全胜。' }, stats: { competence: 70, ethics: 80, leadership: 90, innovation: 20 } }
        ]
    },
    {
        id: 'vet_026',
        text: {
            en: '👂 The Show Dog: A breeder wants you to crop the ears of a litter of Dobermans. "It\'s breed standard! I can\'t show them with floppy ears." It is cosmetic surgery, painful and unnecessary.',
            th: '👂 สุนัขประกวด: นักเพาะพันธุ์ต้องการให้คุณตัดหูเหล่าลูกสุนัขโดเบอร์แมน "มันเป็นมาตรฐานสายพันธุ์! ฉันเอามันขึ้นประกวดทั้งหูตกๆ ไม่ได้" มันคือศัลยกรรมเพื่อความงาม เจ็บปวดและไม่จำเป็น',
            zh: '👂 展示犬：一位饲养员想让你给一窝杜宾犬剪耳。"这是品种标准！我不能带着耷拉着耳朵的它们去参展。"这是整容手术，痛苦且不必要。'
        },
        options: [
            { id: 'A', text: { en: '🔪 Do It: "Fine. Standard procedure. $$." It pays well.', th: '🔪 ทำเลย: "ได้ ขั้นตอนมาตรฐาน $$" จ่ายดี', zh: '🔪 做吧："好的。标准程序。$$。"报酬很高。' }, consequence: { en: '🩸 Blood Money. You cause pain to puppies for fashion. Your staff loses respect for you.', th: '🩸 เงินเปื้อนเลือด คุณทำลูกหมาเจ็บเพื่อแฟชั่น พนักงานหมดศรัทธาในตัวคุณ', zh: '🩸 血腥钱。你为了时尚给小狗带来痛苦。你的员失去了对你的尊重。' }, stats: { competence: 40, ethics: -40, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Stick to Ethics: "I don\'t do cosmetic surgeries. It\'s cruel. Try another vet."', th: '🛑 ยึดมั่นจริยธรรม: "ฉันไม่ทำศัลยกรรมเพื่อความงาม มันโหดร้าย ลองหาหมออื่น"', zh: '🛑 坚守道德："我不做整容手术。这很残忍。找别的兽医吧。"' }, consequence: { en: '👋 Lost Client. She storms out. badmouths you to the breeder club. But you sleep well at night.', th: '👋 เสียลูกค้า เธอโวยวายออกไป นินทาคุณให้ชมรมคนเลี้ยงหมาฟัง แต่คุณนอนหลับสบาย', zh: '👋 失去客户。她冲了出去。在饲养员俱乐部说你坏话。但你晚上睡得很香。' }, stats: { competence: 50, ethics: 70, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '📜 Educate: "Actually, standards are changing. Judges prefer natural ears now (Lie/Stretch)."', th: '📜 ให้ความรู้: "จริงๆ แล้วมาตรฐานกำลังเปลี่ยน กรรมการชอบหูธรรมชาติมากกว่า (โกหก/แถ)"', zh: '📜 教育："实际上，标准正在改变。裁判现在更喜欢自然的耳朵（撒谎/夸大）。"' }, consequence: { en: '🤔 Conversion. She believes you. Keep the puppies natural. You saved their ears with a white lie.', th: '🤔 เปลี่ยนใจ เธอเชื่อคุณ เก็บหูลูกหมาไว้แบบธรรมชาติ คุณช่วยหูพวกมันด้วยคำโกหกสีขาว', zh: '🤔 转化。她相信了你。保持小狗自然。你用善意的谎言保住了它们的耳朵。' }, stats: { competence: 60, ethics: 60, leadership: 70, innovation: 40 } },
            { id: 'D', text: { en: '📢 Public Stand: "I am banning cosmetic surgeries at this clinic officially." Post a sign.', th: '📢 ประกาศจุดยืน: "ฉันแบนศัลยกรรมเพื่อความงามที่คลินิกนี้อย่างเป็นทางการ" ติดป้ายประกาศ', zh: '📢 公开立场："我正式禁止在本诊所进行整容手术。"张贴告示。' }, consequence: { en: '🌟 Modern Vet. Younger clients love this. Old school breeders hate it. Clinic reputation shifts to "progressive."', th: '🌟 สัตวแพทย์สมัยใหม่ ลูกค้ารุ่นใหม่ชอบ นักเพาะพันธุ์หัวเก่าเกลียด ชื่อเสียงคลินิกเปลี่ยนเป็น "ก้าวหน้า"', zh: '🌟 现代兽医。年轻客户喜欢这个。老派饲养员讨厌这个。诊所声誉转向"进步"。' }, stats: { competence: 50, ethics: 80, leadership: 80, innovation: 20 } }
        ]
    },
    {
        id: 'vet_027',
        text: {
            en: '🏚️ The Hoarder: Police call you to a house with 80 cats. The air burns your eyes (ammonia). The owner is an elderly woman who "loves them all." Most are sick. There is no space in shelters.',
            th: '🏚️ นักสะสมสัตว์: ตำรวจเรียกคุณไปบ้านที่มีแมว 80 ตัว อากาศแสบตา (แอมโมเนีย) เจ้าของเป็นยายแก่ที่ "รักพวกมันทุกตัว" ส่วนใหญ่ป่วย ศูนย์พักพิงเต็ม',
            zh: '🏚️ 囤积者：警察打电话让你去一个有80只猫的房子。空气灼烧着你的眼睛（氨气）。主人是一位"爱它们所有人"的老妇人。大多数都病了。避难所没有空间了。'
        },
        options: [
            { id: 'A', text: { en: '💉 Mass Euthanasia: "They are suffering. Feline Leukemia is rampant. It is the kindest thing."', th: '💉 การุณยฆาตหมู่: "พวกมันทรมาน ลิวคีเมียแมวระบาด นี่คือสิ่งที่เมตตาที่สุด"', zh: '💉 大规模安乐死："它们在受苦。猫白血病猖獗。这是最仁慈的事情。"' }, consequence: { en: '🌑 Dark Day. You spend 6 hours injecting death. It breaks you. The owner screams the whole time. Justifiable but traumatic.', th: '🌑 วันมืดมน คุณใช้เวลา 6 ชั่วโมงฉีดยาแห่งความตาย มันทำลายใจคุณ ยายเจ้าของกรีดร้องตลอดเวลา สมเหตุสมผลแต่ฝังใจ', zh: '🌑 黑暗的一天。你花了6个小时注射死亡。这让你崩溃。主人一直在尖叫。虽然有理可据，但造成了创伤。' }, stats: { competence: 60, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '⛺ Triage Camp: "Set up a tent outside. Test everyone. Treat the treatable. Adopt out aggressively."', th: '⛺ ค่ายคัดแยก: "ตั้งเต็นท์ข้างนอก ตรวจทุกตัว รักษาตัวที่ไหว หาบ้านด่วน"', zh: '⛺ 分诊营地："在外面搭个帐篷。测试每一只。治疗可治疗的。积极安排领养。"' }, consequence: { en: '🏃‍♂️ Exhaustion. You save 40 cats. It costs a fortune and weeks of work. You are a local saint.', th: '🏃‍♂️ หมดแรง คุณช่วยแมวได้ 40 ตัว ใช้เงินมหาศาลและทำงานเป็นสัปดาห์ คุณคือพ่อพระท้องถิ่น', zh: '🏃‍♂️ 精疲力竭。你救了40只猫。这花费了一大笔钱和数周的工作。你是当地的圣人。' }, stats: { competence: 80, ethics: 90, leadership: 80, innovation: 10 } },
            { id: 'C', text: { en: '👵 Treat the Owner: "This is mental health. Call Social Services for her. Leave cats for Animal Control."', th: '👵 รักษาเจ้าของ: "นี่คือปัญหาสุขภาพจิต โทรเรียกสังคมสงเคราะห์ช่วยยาย ปล่อยเรื่องแมวให้กรมปศุสัตว์"', zh: '👵 治疗主人："这是心理健康问题。为她致电社会服务机构。把猫留给动物管制中心。"' }, consequence: { en: '🏛️ Bureaucracy. The cats get taken to a kill shelter mostly. The woman gets help. You stayed in your lane.', th: '🏛️ ระบบราชการ แมวส่วนใหญ่ถูกส่งไปศูนย์การุณยฆาต ยายได้รับความช่วยเหลือ คุณทำตามหน้าที่', zh: '🏛️ 官僚主义。猫大多被送到安乐死收容所。那女人得到了帮助。你守住了本分。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'D', text: { en: '📺 Media Plea: "Go live. Show the conditions. Beg for fosters and donations."', th: '📺 วอนสื่อ: "ไลฟ์สด ให้เห็นสภาพ ขออาสาสมัครและเงินบริจาค"', zh: '📺 媒体恳求："直播。展示状况。乞求寄养和捐款。"' }, consequence: { en: '🌪️ Viral Storm. People flock to help. Some chaos, but 60 cats are saved. You orchestrated a miracle.', th: '🌪️ พายุไวรัล คนแห่มาช่วย วุ่นวายหน่อย แต่แมว 60 ตัวรอด คุณสร้างปาฏิหาริย์', zh: '🌪️ 病毒风暴。人们蜂拥而至提供帮助。有些混乱，但60只猫获救了。你策划了一个奇迹。' }, stats: { competence: 70, ethics: 90, leadership: 100, innovation: 50 } }
        ]
    },
    {
        id: 'vet_028',
        text: {
            en: '🔬 The Cloning Request: A tech billionaire\'s beloved dog died. He has a tissue sample. He offers $1M if you "facilitate" the cloning process with a shady overseas lab.',
            th: '🔬 คำขอโคลนนิ่ง: หมาสุดรักของมหาเศรษฐีตาย เขาเก็บตัวอย่างเนื้อเยื่อไว้ เขาเสนอ 1 ล้านเหรียญถ้าคุณ "อำนวยความสะดวก" กระบวนการโคลนนิ่งกับแล็บเถื่อนต่างประเทศ',
            zh: '🔬 克隆请求：一位科技亿万富翁的爱犬去世了。他有组织样本。如果你能与一家可疑的海外实验室"协助"克隆过程，他提供100万美元。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Take the Deal: "Science is science. I\'ll prep the sample and handle shipping." $1M is life-changing.', th: '🤝 รับข้อเสนอ: "วิทย์ก็คือวิทย์ ฉันจะเตรียมตัวอย่างและจัดการขนส่ง" 1 ล้านเปลี่ยนชีวิตได้', zh: '🤝 接受交易："科学就是科学。我会准备样本并处理运输。"100万美元改变人生。' }, consequence: { en: '🤑 Rich & Dirty. You get the money. The clone has health issues. You feel like a sellout.', th: '🤑 รวยแต่สกปรก คุณได้เงิน ตัวโคลนมีปัญหาสุขภาพ คุณรู้สึกเหมือนคนขายวิญญาณ', zh: '🤑 富有且肮脏。你拿到了钱。克隆体有健康问题。你觉得自己是个叛徒。' }, stats: { competence: 50, ethics: -60, leadership: -20, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Ethics Lecture: "Cloning is prone to defects. It won\'t be the same dog. Grief counseling is better."', th: '🛑 เทศนาจริยธรรม: "การโคลนนิ่งมักมีความบกพร่อง มันไม่ใช่หมาตัวเดิม ปรึกษาจิตแพทย์ดีกว่า"', zh: '🛑 道德讲座："克隆容易出现缺陷。它不会是同一只狗。悲伤咨询更好。"' }, consequence: { en: '🚪 Dismissed. He fires you. "You lack vision." He finds someone else. You kept your dignity.', th: '🚪 ไล่ออก เขาไล่คุณออก "คุณไร้วิสัยทัศน์" เขาหาคนอื่น คุณรักษาศักดิ์ศรีไว้ได้', zh: '🚪 解雇。他解雇了你。"你缺乏远见。"他找了别人。你保持了尊严。' }, stats: { competence: 60, ethics: 80, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🐶 Suggest Rescue: "Honor his memory by saving 100 dogs with that money. Start a foundation."', th: '🐶 เสนอช่วยเหลือ: "ให้เกียรติความทรงจำเขาด้วยการช่วยหมา 100 ตัวด้วยเงินนั่น ตั้งมูลนิธิสิ"', zh: '🐶 建议救援："用那笔钱救100只狗来纪念它。成立一个基金会。"' }, consequence: { en: '💡 Pivot. He listens. He starts the "Rex Foundation." You become the head advisor. Huge impact.', th: '💡 จุดเปลี่ยน เขาฟัง เขาตั้ง "มูลนิธิเร็กซ์" คุณเป็นที่ปรึกษาหลัก ผลกระทบมหาศาล', zh: '💡 转折点。他听了。他创办了"雷克斯基金会"。你成为首席顾问。巨大的影响。' }, stats: { competence: 70, ethics: 100, leadership: 90, innovation: 30 } },
            { id: 'D', text: { en: '🧪 Fake It: "Sure." Take the money, send a random puppy that looks like it. "Cloning success!"', th: '🧪 ย้อมแมว: "ได้เลย" รับเงิน ส่งลูกหมาหน้าเหมือนไปให้ "โคลนนิ่งสำเร็จ!"', zh: '🧪 伪造："当然。"拿钱，送一只看起来很像的随机小狗。"克隆成功！"' }, consequence: { en: '🃏 The Con. He loves the new dog. You are rich but a fraud. Hope he never DNA tests it.', th: '🃏 การต้มตุ๋น เขารักหมาใหม่ คุณรวยแต่เป็นพวกต้มตุ๋น หวังว่าเขาจะไม่ตรวจ DNA นะ', zh: '🃏 骗局。他喜欢那只新狗。你有钱但你是个骗子。希望他永远不要对它进行DNA测试。' }, stats: { competence: 30, ethics: -100, leadership: -50, innovation: 40 } }
        ]
    },
    {
        id: 'vet_029',
        text: {
            en: '🦠 The Mystery Virus: Three dogs come in vomiting blood. Rapid deterioration. It looks like Parvo but tests negative. It could be a new outbreak.',
            th: '🦠 ไวรัสปริศนา: หมา 3 ตัวเข้ามาอาเจียนเป็นเลือด ทรุดเร็ว เหมือนพาร์โวแต่ผลเป็นลบ อาจเป็นการระบาดใหม่',
            zh: '🦠 神秘病毒：三只狗进来吐血。迅速恶化。看起来像细小病毒，但测试呈阴性。这可能是新的爆发。'
        },
        options: [
            { id: 'A', text: { en: '🔒 Quarantine: "Lock down the clinic. No one in or out. Full HAZMAT protocols."', th: '🔒 กักกันโรค: "ปิดคลินิก ห้ามเข้าออก ชุด HAZMAT เต็มรูปแบบ"', zh: '🔒 隔离："封锁诊所。只进不出。全套危险品防护协议。"' }, consequence: { en: '🛡️ Caution Saves. It was a new Hemorrhagic strain. You contained it. Business lost for a week, but town saved.', th: '🛡️ ความระมัดระวังช่วยได้ มันเป็นสายพันธุ์ตกเลือดใหม่ คุณควบคุมมันได้ ธุรกิจเจ๊งไปอาทิตย์นึง แต่เมืองรอด', zh: '🛡️ 谨慎拯救。这是一种新的出血株。你遏制了它。生意损失了一周，但城镇获救了。' }, stats: { competence: 90, ethics: 80, leadership: 70, innovation: 20 } },
            { id: 'B', text: { en: '💊 Empirical Treat: "Treat for Parvo/Lepto anyway. Aggressive fluids and antibiotics." Hope for best.', th: '💊 รักษาตามอาการ: "รักษาแบบพาร์โว/เลปโตไปเลย อัดน้ำเกลือและยาฆ่าเชื้อ" หวังว่าจะดี', zh: '💊 经验治疗："无论如何都要治疗细小病毒/钩端螺旋体。积极输液和抗生素。"希望能好起来。' }, consequence: { en: '🎲 50/50. Two die, one lives. You missed the chance to identify the pathogen early. It spreads to other clinics.', th: '🎲 50/50 ตายสอง รอดหนึ่ง คุณพลาดโอกาสระบุเชื้อแต่เนิ่นๆ มันลามไปคลินิกอื่น', zh: '🎲 50/50。两死一活。你错过了早期识别病原体的机会。它传播到了其他诊所。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🔬 Send to University: "I can\'t handle this. Refer immediately to the state vet school."', th: '🔬 ส่งมหาลัย: "ฉันรับมือไม่ไหว ส่งต่อโรงเรียนสัตวแพทย์รัฐทันที"', zh: '🔬 送往大学："我处理不了这个。立即转诊给州兽医学校。"' }, consequence: { en: '🐢 Slow Response. The dogs die in transport. The university identifies it too late. Outbreak spreads.', th: '🐢 ตอบสนองช้า หมาตายระหว่างขนส่ง มหาลัยระบุเชื้อช้าไป ระบาดลาม', zh: '🐢 反应迟钝。狗在运输途中死亡。大学识别得太晚了。疫情蔓延。' }, stats: { competence: 40, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🧪 Experimental: "Try a new antiviral drug approved for cats but not dogs yet." Off-label risk.', th: '🧪 ทดลองยา: "ลองยาต้านไวรัสใหม่ของแมวที่ยังไม่รับรองในหมา" เสี่ยงใช้นอกข้อบ่งใช้', zh: '🧪 实验性："尝试一种批准用于猫但尚未用于狗的新抗病毒药物。"标签外使用的风险。' }, consequence: { en: '🚀 Lucky Break. It works! You found a cure for "Canine Hemorrhagic X." Fame follows.', th: '🚀 โชคช่วย มันได้ผล! คุณเจอทางรักษา "โรคตกเลือดสุนัข X" ชื่อเสียงตามมา', zh: '🚀 好运。有效！你找到了"犬出血性X"的治疗方法。名声随之而来。' }, stats: { competence: 80, ethics: 60, leadership: 50, innovation: 100 } }
        ]
    },
    {
        id: 'vet_030',
        text: {
            en: '👴 The Old Mentor: Your senior partner, Dr. Bob (75), is making mistakes. He overdosed a cat yesterday (it survived, barely). He refuses to retire. "I built this place!"',
            th: '👴 อาจารย์เก่าแก่: หุ้นส่วนอาวุโสของคุณ หมอบ๊อบ (75) เริ่มทำพลาด เขาให้ยาแมวเกินขนาดเมื่อวาน (รอดมาได้หวุดหวิด) เขาไม่ยอมเกษียณ "ฉันสร้างที่นี่มา!"',
            zh: '👴 老导师：你的高级合伙人，鲍勃医生（75岁），正在犯错。他昨天给一只猫用药过量（它勉强活了下来）。他拒绝退休。"我建立了这个地方！"'
        },
        options: [
            { id: 'A', text: { en: '🛑 Force Exit: "Retire or I report you to the board. You are dangerous." Hard love.', th: '🛑 บีบออก: "เกษียณซะ ไม่งั้นผมแจ้งคณะกรรมการ คุณเป็นตัวอันตราย" รักต้องโหด', zh: '🛑 强制退出："退休，否则我向董事会举报你。你很危险。"严厉的爱。' }, consequence: { en: '💔 Broken Friendship. He leaves, betrayed and broken. The clinic is safe, but you lost a father figure.', th: '💔 มิตรภาพแตกหัก เขาจากไป รู้สึกโดนหักหลังและใจสลาย คลินิกปลอดภัย แต่คุณเสียผู้นับถือเหมือนพ่อ', zh: '💔 破碎的友谊。他离开了，感到被背叛和心碎。诊所安全了，但你失去了一位父亲般的人物。' }, stats: { competence: 60, ethics: 80, leadership: 70, innovation: 0 } },
            { id: 'B', text: { en: '👀 Supervision: "You can stay, but no surgeries/prescriptions without my sign-off." Micro-management.', th: '👀 ควบคุมดูแล: "อยู่ต่อได้ แต่ห้ามผ่าตัด/สั่งยาถ้าผมไม่เซ็น" จู้จี้จุกจิก', zh: '👀 监督："你可以留下，但没有我的签字不能进行手术/处方。"微观管理。' }, consequence: { en: '😓 Exhausting. You are doing two jobs. He feels humiliated. It ends badly eventually.', th: '😓 เหนื่อยโฮก คุณทำงาน 2 หน้าที่ เขารู้สึกอาย จบไม่สวยอยู่ดี', zh: '😓 筋疲力尽。你在做两份工作。他感到羞由于。最终结局很糟糕。' }, stats: { competence: 50, ethics: 60, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🙈 Ignore It: "He has good days and bad days. I\'ll just fix his mistakes quietly." Respect him.', th: '🙈 เมินเฉย: "เขามีวันที่ดีและแย่ ฉันจะตามแก้เงียบๆ เอง" ให้เกียรติเขา', zh: '🙈 忽略它："他有时好有时坏。我会悄悄地纠正他的错误。"尊重他。' }, consequence: { en: '☠️ Fatal Error. He kills a prize horse next week. Lawsuit bankrupts the clinic.', th: '☠️ ความผิดพลาดถึงตาย เขาทำม้าแข่งราคาแพงตายอาทิตย์หน้า โดนฟ้องจนคลินิกเจ๊ง', zh: '☠️ 致命错误。下周他弄死了一匹名马。诉讼使诊所破产。' }, stats: { competence: 20, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'D', text: { en: '🎓 New Role: "Stop clinical work. Teach the interns and manage PR. Be the face of the clinic."', th: '🎓 บทบาทใหม่: "หยุดตรวจคนไข้ สอนเด็กฝึกงานและดู PR เป็นหน้าตาของคลินิกพอ"', zh: '🎓以此新角色："停止临床工作。教导实习生并管理公关。做诊所的门面。"' }, consequence: { en: '✅ Graceful Transition. He feels valued as a mentor. Patients are safe. Perfect solution.', th: '✅ เปลี่ยนผ่านสวยงาม เขารู้สึกมีค่าในฐานะครู คนไข้ปลอดภัย ทางออกที่สมบูรณ์แบบ', zh: '✅ 优雅过渡。他觉得自己作为导师很有价值。病人很安全。完美的解决方案。' }, stats: { competence: 80, ethics: 90, leadership: 90, innovation: 20 } }
        ]
    },
    {
        id: 'vet_031',
        text: {
            en: '🏢 The Corporate Buyout: A massive vet chain "PetHealthInc" offers to buy your practice for 2x market value. "We standardize protocols and maximize profit." They have a bad reputation for overcharging.',
            th: '🏢 การเทคโอเวอร์: เครือสัตวแพทย์ยักษ์ใหญ่ "PetHealthInc" เสนอซื้อคลินิกคุณในราคา 2 เท่าของตลาด "เราสร้างมาตรฐานและกำไรสูงสุด" พวกเขามีชื่อเสียเรื่องฟันราคา',
            zh: '🏢 企业收购：一家大型兽医连锁店"PetHealthInc"提出以2倍的市场价值收购你的诊所。"我们标准化协议并使利润最大化。"他们在乱收费方面声誉不佳。'
        },
        options: [
            { id: 'A', text: { en: '💰 Sell Out: "I\'m burned out. Take it. I\'ll retire on a yacht."', th: '💰 ขายกิจการ: "ฉันหมดไฟแล้ว เอาไปเลย ฉันจะไปนอนบนยอร์ช"', zh: '💰 卖掉："我精疲力竭了。拿去吧。我要在游艇上退休。"' }, consequence: { en: '🏖️ Rich but Regretful. You leave. Prices triple. Your old clients can\'t afford care. The clinic becomes a factory.', th: '🏖️ รวยแต่เสียใจ คุณจากไป ราคาขึ้น 3 เท่า ลูกค้าเก่าจ่ายไม่ไหว คลินิกกลายเป็นโรงงาน', zh: '🏖️ 富有但遗憾。你离开了。价格翻了三倍。你的老客户负担不起医疗费。诊所变成了工厂。' }, stats: { competence: 0, ethics: -50, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🛡️ Stay Independent: "No thanks. My patients are family, not numbers." Struggle with finances.', th: '🛡️ อิสระต่อไป: "ไม่ล่ะ ขอบคุณ คนไข้ฉันคือครอบครัว ไม่ใช่ตัวเลข" สู้เรื่องการเงินต่อ', zh: '🛡️ 保持独立："不，谢谢。我的病人是家人，不是数字。"在此财政上挣扎。' }, consequence: { en: '✊ Hard Road. You serve the community. Money is tight, but you sleep well. Community loyalty increases.', th: '✊ หนทางยากลำบาก คุณรับใช้ชุมชน เงินตึงมือ แต่นอนหลับสบาย ชุมชนภักดีขึ้น', zh: '✊ 艰难的道路。你服务社区。钱很紧，但你睡得很香。社区忠诚度增加。' }, stats: { competence: 60, ethics: 80, leadership: 60, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Merge & Influence: "I\'ll sell 49%, but I stay as Medical Director with full veto power on prices."', th: '🤝 ควบรวมและต่อรอง: "ขายให้ 49% แต่ฉันเป็น ผอ.แพทย์ มีสิทธิ์ขาดเรื่องราคา"', zh: '🤝 合并并施加影响："我会卖出49%，但我留任医疗主管，对价格拥有完全否决权。"' }, consequence: { en: '⚖️ Constant Battle. You fight the corporate suits daily. You extract resources for the clinic but it is stressful.', th: '⚖️ การต่อสู้ไม่จบสิ้น คุณทุบโต๊ะกับพวกใส่สูททุกวัน คุณดึงงบมาลงคลินิกได้แต่เครียดจัด', zh: '⚖️ 持续的战斗。你每天都在和企业高管斗争。你为诊所争取资源，但压力很大。' }, stats: { competence: 80, ethics: 50, leadership: 70, innovation: 40 } },
            { id: 'D', text: { en: '📣 Unionize: "Reject offer. Form a co-op with other local vets to share costs and compete."', th: '📣 ตั้งสหภาพ: "ปัดตก รวมตัวตั้งสหกรณ์กับหมอแถวนี้ แชร์ค่าใช้จ่ายแล้วแข่งกับมัน"', zh: '📣 组建工会："拒绝提议。与其他当地兽医组成合作社以分担成本并进行竞争。"' }, consequence: { en: '🛡️ Stronger Together. A new business model. You survive the corporate invasion and thrive locally.', th: '🛡️ รวมกันเราอยู่ โมเดลธุรกิจใหม่ คุณรอดจากการรุกรานของนายทุนและเติบโตในท้องถิ่น', zh: '🛡️ 团结更强大。一种新的商业模式。你幸免于企业的入侵，并在当地蓬勃发展。' }, stats: { competence: 70, ethics: 80, leadership: 90, innovation: 80 } }
        ]
    },
    {
        id: 'vet_032',
        text: {
            en: '📸 The Influencer: A TikTok star poses her Pug in funny outfits. The dog is obese, struggling to breathe, and stressed. "He loves it! Look at the likes!" She wants anxiety meds so he "sits still" for photos.',
            th: '📸 อินฟลูเอนเซอร์: ดาว TikTok จับปั๊กแต่งตัวตลกๆ หมาอ้วน หายใจลำบาก และเครียด "มันชอบจะตาย ดูยอดไลก์สิ!" เธอขอยาคลายเครียดเพื่อให้มัน "นั่งนิ่งๆ" ถ่ายรูป',
            zh: '📸 网红：一位TikTok明星让她的哈巴狗摆出有趣的姿势。这只狗肥胖，呼吸困难，压力很大。"它喜欢的！看那些点赞！"她想要抗焦虑药物，这样它就能"坐着不动"拍照。'
        },
        options: [
            { id: 'A', text: { en: '💊 Prescribe: "Here is Acepromazine. mild sedative." Keep the client happy.', th: '💊 สั่งยา: "นี่คือ Acepromazine ยาซึมและคลายเครียดอ่อนๆ" เอาใจลูกค้า', zh: '💊 开药："这是乙酰丙嗪。轻度镇静剂。"让客户高兴。' }, consequence: { en: '😴 Drugged Prop. The dog lives life in a haze. You enabled animal exploitation.', th: '😴 ตัวประกอบขี้ยุ หมาใช้ชีวิตแบบเบลอๆ คุณสนับสนุนการเอาเปรียบสัตว์', zh: '😴 被麻醉的道具。狗在迷茫中度过一生。你纵容了动物剥削。' }, stats: { competence: 30, ethics: -40, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '📢 Reality Check: "This is abuse. He is suffocating. Weight loss plan NOW, or I call control."', th: '📢 ดึงสติ: "นี่คือการทารุณ มันกำลังจะขาดใจตาย ลดน้ำหนักเดี๋ยวนี้ ไม่งั้นแจ้งจับ"', zh: '📢 现实核查："这是虐待。它快窒息了。现在制定减肥计划，否则我报警。"' }, consequence: { en: '😡 Cancelled? She blasts you online. But her smarter followers agree with you. You spark a debate.', th: '😡 โดนแคนเซิล? เธอด่าคุณยับ แต่แฟนคลับฉลาดๆ เห็นด้วยกับคุณ เกิดดีเบตใหญ่', zh: '😡 被取消？她在网上抨击你。但她更聪明的追随者同意你的观点。你引发了一场辩论。' }, stats: { competence: 60, ethics: 80, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Compromise: "No meds. But I will help you with a diet plan if you post about \'Pet Health\' instead."', th: '🤝 ประนีประนอม: "ไม่ให้ยา แต่หมอจะช่วยคุมอาหาร ถ้าคุณโพสต์เรื่อง \'สุขภาพสัตว์\' แทน"', zh: '🤝 妥协："没有药。但如果你改发关于\'宠物健康\'的帖子，我会帮你制定饮食计划。"' }, consequence: { en: '📉 Positive Spin. She pivots content. The dog loses weight. You used her platform for good.', th: '📉 พลิกวิกฤต เธอเปลี่ยนคอนเทนต์ หมาผอมลง คุณใช้พื้นที่สื่อเธอให้เป็นประโยชน์', zh: '📉 积极引导。她转变内容。狗减肥了。你利用她的平台做了好事。' }, stats: { competence: 70, ethics: 60, leadership: 70, innovation: 50 } },
            { id: 'D', text: { en: '🏥 Medical Hold: "He is in respiratory distress. I am admitting him immediately." Take the dog.', th: '🏥 สั่งแอดมิท: "มันกำลังหายใจล้มเหลว หมอขอแอดมิทเดี๋ยวนี้" ยึดหมาไว้', zh: '🏥 医疗扣留："它呼吸窘迫。我立即收治它。"带走狗。' }, consequence: { en: '💸 Costly Rescue. She pays the bill but takes him back later. A temporary reprieve.', th: '💸 การช่วยที่แสนแพง เธอจ่ายบิลแต่ก็พามันกลับไปทีหลัง ผ่อนหนักเป็นเบาชั่วคราว', zh: '💸 昂贵的救援。她付了账单，但后来把它带回去了。暂时的缓刑。' }, stats: { competence: 50, ethics: 50, leadership: 30, innovation: 0 } }
        ]
    },
    {
        id: 'vet_033',
        text: {
            en: '⛺ The Homeless Companion: A homeless man enters with a sick Golden Retriever. "He\'s my only friend. He won\'t eat." The dog has a blockage (swallowed a sock). Surgery is $2000. He has $5.',
            th: '⛺ เพื่อนข้างถนน: คนไร้บ้านเข้ามาพร้อมโกลเด้นป่วย "มันเป็นเพื่อนคนเดียวของผม มันไม่กินข้าว" หมาลำไส้อุดตัน (กลืนถุงเท้า) ผ่าตัด $2000เขามี $5',
            zh: '⛺ 无家可归的伴侣：一个流浪汉带着一只生病的金毛猎犬进来。"它是我唯一的朋友。它不吃东西。"狗有堵塞（吞下了一只袜子）。手术费是2000美元。他有5美元。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Charitable Surgery: "I\'ll do it for free. You clean the cages for a week covering recovery."', th: '🤝 ผ่าตัดการกุศล: "หมอทำให้ฟรี คุณมาช่วยล้างกรงอาทิตย์นึงระหว่างมันพักฟื้นนะ"', zh: '🤝 慈善手术："我免费做。你在康复期间打扫一周笼子。"' }, consequence: { en: '💖 Heartwarming. The man works hard. The dog recovers. The story inspires staff.', th: '💖 อบอุ่นหัวใจ ลุงแกขยันมาก หมาหายดี เรื่องราวสร้างแรงบันดาลใจให้พนักงาน', zh: '💖 暖心。那个男人工作很努力。狗康复了。这个故事激励了员工。' }, stats: { competence: 60, ethics: 90, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Policy Refusal: "I can\'t work for free. Try the ASPCA across town." Turn them away.', th: '🛑 ปฏิเสธตามกฎ: "หมอทำให้ฟรีไม่ได้ ลองไป ASPCA อีกฝั่งเมืองนะ" ไล่กลับ', zh: '🛑 政策拒绝："我不能免费工作。去城那边的ASPCA试试。"拒绝他们。' }, consequence: { en: '⚰️ Too Late. The dog dies on the way to the other clinic. You followed protocol, but at what cost?', th: '⚰️ สายเกินไป หมาตายระหว่างทางไปอีกคลินิก คุณทำตามกฎ แต่แลกด้วยอะไร?', zh: '⚰️ 太晚了。狗在去另一家诊所的路上死了。你遵守了协议，但代价是什么？' }, stats: { competence: 40, ethics: -40, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '💉 Euthanize: "Surgery is too expensive. Let\'s end his suffering calmly." Offering the cheap option.', th: '💉 การุณยฆาต: "ผ่าตัดแพงเกินไป ให้มันไปสบายเถอะ" เสนอทางเลือกราคาถูก', zh: '💉 安乐死："手术太贵了。让我们平静地结束它的痛苦。"提供便宜的选择。' }, consequence: { en: '😢 Devastated Man. He agrees, sobbing. He leaves the clinic alone and broken. A tragic day.', th: '😢 ชายผู้ใจสลาย เขายอมทั้งน้ำตา เขาเดินออกจากคลินิกคนเดียวอย่างแตกสลาย วันที่น่าเศร้า', zh: '😢 崩溃的男人。他哭泣着答应了。他孤独而破碎地离开了诊所。悲惨的一天。' }, stats: { competence: 30, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🎟️ Crowd Fund: "Wait here. I\'m posting this on Facebook." Ask the community for $2000.', th: '🎟️ ระดมทุน: "รอเดี๋ยวนะ หมอจะโพสต์ลงเฟซบุ๊ก" ขอเงินชาวเน็ต $2000', zh: '🎟️ 众筹："等一下。我要把这个发到Facebook上。"向社区寻求2000美元。' }, consequence: { en: '💰 Funded. The money is raised in 2 hours. Dog saved. You built community goodwill.', th: '💰 ได้ทุน ได้เงินครบใน 2 ชม. หมารอด คุณสร้างความดีความชอบในชุมชน', zh: '💰 获得资助。2小时内筹集到了钱。狗获救了。你建立了社区善意。' }, stats: { competence: 60, ethics: 80, leadership: 70, innovation: 60 } }
        ]
    },
    {
        id: 'vet_034',
        text: {
            en: '🧪 The Lab Error: You diagnosed a dog with cancer and started Chemo. It\'s making him sick. A week later, the lab calls: "Opps, mixed up samples. The dog is fine. It was just an infection."',
            th: '🧪 ความผิดพลาดของแล็บ: คุณวินิจฉัยหมาเป็นมะเร็งและเริ่มคีโม มันป่วยหนักเพราะยา อาทิตย์ถัดมา แล็บโทรแจ้ง: "อุ๊ย สลับตัวอย่างครับ หมาสบายดี แค่ติดเชื้อเฉยๆ"',
            zh: '🧪 实验室错误：你诊断出一只狗患有癌症并开始化疗。这让它生病了。一周后，实验室打电话："糟糕，搞混了样本。狗没事。只是感染。"'
        },
        options: [
            { id: 'A', text: { en: '🤫 Cover Up: "The chemo worked! He is cured! Miracle!" Stop chemo, treat infection.', th: '🤫 ปิดบัง: "คีโมได้ผล! หายแล้ว! ปาฏิหาริย์!" หยุดคีโม รักษาติดเชื้อ', zh: '🤫 掩盖："化疗起作用了！它被治愈了！奇迹！"停止化疗，治疗感染。' }, consequence: { en: '🤥 False Prophet. The owners worship you. You lied, but everyone is happy. Risky ethics.', th: '🤥 ศาสดาจอมปลอม เจ้าของบูชาคุณ คุณโกหกแต่ทุกคนแฮปปี้ จริยธรรมเสี่ยงสูง', zh: '🤥 假先知。主人们崇拜你。你撒谎了，但每个人都很高兴。冒险的道德。' }, stats: { competence: 40, ethics: -70, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '📢 Full Disclosure: "I am so sorry. The lab made a mistake. We will refund everything and treat the infection for free."', th: '📢 เปิดเผยความจริง: "หมอขอโทษจริงๆ แล็บพลาด เราจะคืนเงินทั้งหมดและรักษาติดเชื้อให้ฟรี"', zh: '📢 全面披露："非常抱歉。实验室犯了个错误。我们将退还所有费用并免费治疗感染。"' }, consequence: { en: '🤝 Trust Rebuilt. They are angry at first, but respect your honesty. You sue the lab.', th: '🤝 สร้างความเชื่อมั่น พวกเขาโกรธตอนแรกแต่เคารพความซื่อสัตย์ คุณฟ้องแล็บกลับ', zh: '🤝 重建信任。他们起初很生气，但尊重你的诚实。你起诉了实验室。' }, stats: { competence: 60, ethics: 90, leadership: 60, innovation: 0 } },
            { id: 'C', text: { en: '👉 Blame Lab: "This incompetent lab ruined us! I am furious!" Shift all blame to them immediately.', th: '👉 โทษแล็บ: "แล็บห่วยแตกนี่ทำเราพัง! หมอโมโหมาก!" โยนขี้ให้แล็บทันที', zh: '👉 怪罪实验室："这个无能的实验室毁了我们！我很愤怒！"立即将所有责任推给他们。' }, consequence: { en: '🛡️ Deflection. It works, but you look unprofessional screaming. The client leaves confused.', th: '🛡️ ปัดความรับผิดชอบ ได้ผล แต่ดูไม่มืออาชีพที่โวยวาย ลูกค้างงๆ กลับไป', zh: '🛡️ 转移视线。这很有效，但你大喊大叫看起来很不专业。客户困惑地离开了。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🐢 Slow Fade: "The cancer is in remission... let\'s taper off drugs." Don\'t admit the mistake explicitly.', th: '🐢 ค่อยๆ เฟด: "มะเร็งสงบแล้ว... มาค่อยๆ ลดยากัน" ไม่ยอมรับความผิดตรงๆ', zh: '🐢 缓慢消退："癌症已经缓解……让我们逐渐停药。"不要明确承认错误。' }, consequence: { en: '🕸️ Web of Lies. Hard to keep track of the story. You feel anxious every time they visit.', th: '🕸️ ใยแมงมุมแห่งคำลวง ยากจะคุมเรื่องราว คุณประสาทกินทุกครั้งที่พวกเขามา', zh: '🕸️ 谎言之网。很难跟踪故事。每次他们来访你都会感到焦虑。' }, stats: { competence: 40, ethics: -30, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'vet_035',
        text: {
            en: '🌊 The Aftermath: Following the flood, Leptospirosis is spiking from rat urine in the water. Vaccine supply is low. You have 50 doses and 500 dogs.',
            th: '🌊 ควันหลงน้ำท่วม: หลังน้ำลด โรคฉี่หนูพุ่งสูงจากฉี่หนูในน้ำ วัคซีนมีน้อย มีแค่ 50 โดส กับหมา 500 ตัว',
            zh: '🌊 后果：洪水过后，水中的鼠尿导致钩端螺旋体病激增。疫苗供应不足。你有50剂疫苗和500只狗。'
        },
        options: [
            { id: 'A', text: { en: '💰 Highest Bidder: "Auction them. $100 a shot." Ration by wealth.', th: '💰 ประมูล: "ใครจ่ายสูงได้ไป เข็มละ $100" คัดด้วยเงิน', zh: '💰 价高者得："拍卖它们。100美元一针。"按财富配给。' }, consequence: { en: '💸 Profitable villain. Rich dogs live. Poor dogs die. The community despises you.', th: '💸 ตัวร้ายร่ำรวย หมาคนรวยรอด หมาจนตาย ชุมชนรังเกียจคุณ', zh: '💸 盈利的恶棍。富狗活。穷狗死。社区鄙视你。' }, stats: { competence: 30, ethics: -80, leadership: -40, innovation: 10 } },
            { id: 'B', text: { en: '🎲 Lottery: "Pull names from a hat. Fair chance for everyone."', th: '🎲 จับสลาก: "จับรายชื่อจากหมวก โอกาสเท่ากันทุกคน"', zh: '🎲 彩票："从帽子里抽名字。每个人机会均等。"' }, consequence: { en: '⚖️ Fairness. People accept luck. It is sad but perceived as just. No riots.', th: '⚖️ ความยุติธรรม คนยอมรับดวง เศร้าแต่แฟร์ ไม่จลาจล', zh: '⚖️ 公平。人们接受运气。虽然悲伤但被认为是公正的。没有暴乱。' }, stats: { competence: 50, ethics: 70, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🛡️ Triage: "Vaccinate only working dogs and those in high-risk zones." Strategic usage.', th: '🛡️ คัดกรองความเสี่ยง: "ฉีดเฉพาะสุนัขใช้งานและตัวที่อยู่ในพื้นที่เสี่ยงสูง" ใช้เชิงกลยุทธ์', zh: '🛡️ 分诊："只给工作犬和高风险区域的狗接种。"战略使用。' }, consequence: { en: '🧠 Smart Defense. You stop the spread effectively by targeting vectors. Epidemiology win.', th: '🧠 การป้องกันฉลาด คุณหยุดการแพร่ระบาดได้โดยจัดการพาหะ ชนะทางระบาดวิทยา', zh: '🧠 聪明的防御。你通过针对载体有效地阻止了传播。流行病学的胜利。' }, stats: { competence: 90, ethics: 70, leadership: 80, innovation: 30 } },
            { id: 'D', text: { en: '💧 Dilute: "Split doses in half. Try to cover 100 dogs." Medical gamble.', th: '💧 เจือจาง: "แบ่งครึ่งโดส พยายามฉีดให้ได้ 100 ตัว" การพนันทางการแพทย์', zh: '💧 稀释："将剂量减半。试图覆盖100只狗。"医疗赌博。' }, consequence: { en: '📉 Failure. The immunity is too weak. Dogs get sick anyway. Bad science.', th: '📉 ล้มเหลว ภูมิคุ้มกันต่ำไป หมาป่วยอยู่ดี วิทย์แย่', zh: '📉 失败。免疫力太弱。狗还是生病了。伪科学。' }, stats: { competence: 30, ethics: 30, leadership: 40, innovation: 20 } }
        ]
    },
    {
        id: 'vet_036',
        text: {
            en: '🦒 The City Zoo: The Zoo vet is sick. They need you to perform a C-section on a Giraffe. You have never done this. "Mother and calf are in distress."',
            th: '🦒 สวนสัตว์เมือง: สัตวแพทย์สวนสัตว์ป่วย เขาให้คุณไปผ่าคลอดเลียงผา คุณไม่เคยทำ "แม่และลูกกำลังแย่"',
            zh: '🦒 城市动物园：动物园兽医病了。他们需要你给一只长颈鹿做剖腹产。你从没做过这个。"母子都有危险。"'
        },
        options: [
            { id: 'A', text: { en: '🚫 Decline: "I only know cats and dogs. I might kill them. Call a specialist." Stay safe.', th: '🚫 ปฏิเสธ: "ฉันรู้แค่หมาแมว ฉันอาจทำมันตาย เรียกผู้เชี่ยวชาญเถอะ" เพลย์เซฟ', zh: '🚫 拒绝："我只懂猫和狗。我可能会杀了它们。叫专家。"保持安全。' }, consequence: { en: '⚰️ Tragedy. The giraffe dies waiting for the specialist. You wonder "What if?"', th: '⚰️ โศกนาฏกรรม ยีราฟตายระหว่างรอผู้เชี่ยวชาญ คุณได้แต่สงสัย "ถ้าฉันทำล่ะ?"', zh: '⚰️ 悲剧。长颈鹿在等待专家时死亡。你想"如果呢？"' }, stats: { competence: 40, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '📚 Cram & Try: "Bring me the anatomy book! I\'m going in!" Brave attempt.', th: '📚 อ่านติวแล้วลุย: "เอาตาราอนาโตมี่มา! ฉันจะผ่า!" ความกล้าหาญ', zh: '📚 恶补并尝试："给我解剖书！我要进去了！"勇敢的尝试。' }, consequence: { en: '🦒 Miracle Baby. It is terrifying. You need a ladder. But you deliver a healthy calf. Local legend.', th: '🦒 ลูกปาฏิหาริย์ น่ากลัวมาก ต้องใช้บันได แต่คุณทำคลอดสำเร็จ เป็นตำนานท้องถิ่น', zh: '🦒 奇迹宝宝。这很可怕。你需要梯子。但你接生了一只健康的小牛。当地传说。' }, stats: { competence: 80, ethics: 80, leadership: 90, innovation: 70 } },
            { id: 'C', text: { en: '📞 Tele-Medicine: "Video call the Zoo Vet from his sickbed. Walk me through it!" Teamwork.', th: '📞 ทางไกล: "วิดีโอคอลหาหมอสวนสัตว์ที่ป่วยอยู่ สอนฉันทำทีละก้าว!" ทีมเวิร์ค', zh: '📞 远程医疗："跟病床上的动物园兽医视频通话。一步步指导我！"团队合作。' }, consequence: { en: '🤝 Success. Guided hands. You learn a lot. The vet gets partial credit, but animals live.', th: '🤝 สำเร็จ มือที่ถูกชี้แนะ คุณได้เรียนรู้เยอะ หมอคนนั้นได้รับเครดิตบ้าง แต่สัตว์รอด', zh: '🤝 成功。指导之手。你学到了很多。兽医得到了一部分功劳，但动物活下来了。' }, stats: { competence: 70, ethics: 80, leadership: 60, innovation: 50 } },
            { id: 'D', text: { en: '💉 Sedate Only: "I will keep her calm until the specialist arrives." Stall.', th: '💉 ให้ยาซึม: "ฉันจะทำให้มันสงบรอผู้เชี่ยวชาญ" ถ่วงเวลา', zh: '💉 仅镇静："我会让她保持冷静直到专家到达。"拖延。' }, consequence: { en: '⏳ Time Runs Out. The calf suffocates. The mother survives. Half a win.', th: '⏳ เวลาหมด ลูกยีราฟขาดอากาศตาย แม่รอด ชนะครึ่งเดียว', zh: '⏳ 时间耗尽。小牛窒息而死。母亲活了下来。一半的胜利。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 } }
        ]
    },
    {
        id: 'vet_037',
        text: {
            en: '💊 The Missing Ketamine: Inventory check shows 3 bottles of Ketamine missing. You suspect your best technician, Sarah. She has been acting weird lately.',
            th: '💊 เคตามีนหาย: เช็คสต็อกพบเคตามีนหายไป 3 ขวด คุณสงสัยซาร่าห์ เทคนิคเชียนมือหนึ่ง ช่วงนี้เธอทำตัวแปลกๆ',
            zh: '💊 丢失的氯胺酮：库存检查显示少了3瓶氯胺酮。你怀疑你最好的技术员莎拉。她最近表现很奇怪。'
        },
        options: [
            { id: 'A', text: { en: '👮 Call Police: "Controlled substance theft is a felony. Zero tolerance." Arrest her.', th: '👮 แจ้งตำรวจ: "ขโมยวัตถุออกฤทธิ์เป็นอาชญากรรม ไม่มีการอลุ่มอล่วย" จับเธอ', zh: '👮 报警："受控物质盗窃是重罪。零容忍。"逮捕她。' }, consequence: { en: '🚔 Handcuffs. She is dragged away. The clinic is safe, but the team is traumatized and understaffed.', th: '🚔 กุญแจมือ เธอโดนลากไป คลินิกปลอดภัย แต่ทีมเสียขวัญและคนขาด', zh: '🚔 手铐。她被拖走了。诊所安全了，但团队受到了创伤，人手不足。' }, stats: { competence: 60, ethics: 80, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🗣️ Confront Privately: "Sarah, I know. Give it back and go to rehab, or I call the cops." Intervention.', th: '🗣️ คุยส่วนตัว: "ซาร่าห์ ฉันรู้ คืนมาและไปบำบัด ไม่งั้นแจ้งตำรวจ" แทรกแซง', zh: '🗣️ 私下对质："莎拉，我知道。还回来并去康复中心，否则我报警。"干预。' }, consequence: { en: '😭 Breakdown. She confesses. She seeks help. You saved her life, not just her job.', th: '😭 ปล่อยโฮ เธอสารภาพ เธอยอมไปบำบัด คุณช่วยชีวิตเธอ ไม่ใช่แค่งาน', zh: '😭 崩溃。她招供了。她寻求帮助。你救了她的命，不仅仅是她的工作。' }, stats: { competence: 70, ethics: 90, leadership: 80, innovation: 20 } },
            { id: 'C', text: { en: '👀 Ignore: "Maybe it was a clerical error? I\'ll just adjust the logs." Denial.', th: '👀 เมินเฉย: "อาจจะจดผิดก็ได้? เดี๋ยวแก้เลขในบัญชีละกัน" ปฏิเสธความจริง', zh: '👀 忽略："也许是笔误？我就调整一下日志。"否认。' }, consequence: { en: '📉 Downward Spiral. She steals more. Eventually she overdoses in the bathroom. Your fault.', th: '📉 ดิ่งลงเหว เธอขโมยเพิ่ม สุดท้ายเธอโอเวอร์โดสในห้องน้ำ ความผิดคุณ', zh: '📉 螺旋式下降。她偷得更多。最终她在浴室里服药过量。你的错。' }, stats: { competence: 20, ethics: -60, leadership: -50, innovation: 0 } },
            { id: 'D', text: { en: '📹 Install Cameras: "Say nothing. Put hidden cams to catch her in the act." Trap.', th: '📹 ติดกล้อง: "เงียบไว้ ติดกล้องแอบถ่ายให้คาหนังคาเขา" กับดัก', zh: '📹 安装摄像头："什么也别说。安装隐形摄像头当场抓住她。"陷阱。' }, consequence: { en: '🕵️ Evidence. You catch her. It is irrefutable. But the trust in the clinic is destroyed by spying.', th: '🕵️ หลักฐาน คุณจับเธอได้ ดิ้นไม่หลุด แต่ความไว้ใจในคลินิกพังเพราะการสอดแนม', zh: '🕵️ 证据。你抓住了她。这是无可辩驳的。但诊所的信任被监视破坏了。' }, stats: { competence: 60, ethics: 60, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'vet_038',
        text: {
            en: '🐦 The Smuggled Macaw: A client brings in a beautiful Hyacinth Macaw. "Don\'t check the microchip," he says. "I got him from a... friend in Brazil." The bird is sick with Psittacosis (parrot fever).',
            th: '🐦 นกแก้วเถื่อน: ลูกค้าพานกแก้ว Hyacinth Macaw แสนสวยมา "ไม่ต้องเช็คไมโครชิปนะ" เขาบอก "ผมได้มาจาก... เพื่อนที่บราซิล" นกป่วยเป็นไข้นกแก้ว (Psittacosis)',
            zh: '🐦 走私的金刚鹦鹉：一位客户带来了一只美丽的紫蓝金刚鹦鹉。"别查微芯片，"他说。"我从……巴西的一个朋友那里得到的。"这只鸟患有鹦鹉热。'
        },
        options: [
            { id: 'A', text: { en: '🚔 Report Smuggling: "This is a CITES endangered species. I am calling authorities." Risk losing a client.', th: '🚔 แจ้งลักลอบ: "นี่คือสัตว์สงวน CITES ฉันจะแจ้งเจ้าหน้าที่" ยอมเสียลูกค้า', zh: '🚔 报告走私："这是CITES濒危物种。我要报警。"冒着失去客户的风险。' }, consequence: { en: '🦜 Justice. The bird is confiscated and sent to a zoo. You are fined for handling it but cleared later.', th: '🦜 ความยุติธรรม นกถูกยึดส่งสวนสัตว์ คุณโดนปรับที่รักษามันแต่เคลียร์ได้ทีหลัง', zh: '🦜 正义。这只鸟被没收并送往动物园。你因处理它而被罚款，但后来被澄清了。' }, stats: { competence: 60, ethics: 90, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🤫 Treat Secretly: "I will treat the fever. Keep him quarantined. But I never saw this bird."', th: '🤫 แอบรักษา: "ฉันจะรักษาไข้ให้ กักตัวมันไว้ แต่ฉันไม่เคยเห็นนกตัวนี้นะ"', zh: '🤫 秘密治疗："我会治疗发烧。隔离它。但我从未见过这只鸟。"' }, consequence: { en: '😷 Zoonosis. You cure the bird, but you catch Psittacosis. You are out sick for a month.', th: '😷 โรคติดต่อสู่คน คุณรักษานกหาย แต่คุณติดโรคไข้นกแก้วเอง ป่วยไปเป็นเดือน', zh: '😷 人畜共患病。你治好了鸟，但你得了鹦鹉热。你病了一个月。' }, stats: { competence: 50, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🚫 Refuse: "I don\'t treat exotics. Especially illegal ones. Get out."', th: '🚫 ปฏิเสธ: "ฉันไม่รักษาสัตว์แปลก โดยเฉพาะตัวที่ผิดกฎหมาย ออกไป"', zh: '🚫 拒绝："我不治疗外来物种。尤其是不合法的。出去。"' }, consequence: { en: '💀 Dead Bird. He tries to treat it himself with home remedies. The bird dies tragically.', th: '💀 นกตาย เขาพยายามรักษาเองด้วยยาผีบอก นกตายอย่างน่าเศร้า', zh: '💀 死鸟。他试图用家庭疗法自己治疗。鸟悲惨地死去了。' }, stats: { competence: 20, ethics: 40, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '📜 Legal Amnesty: "Sign this form surrendering the bird to me immediately. I will treat it and find a legal home via loopholes."', th: '📜 นิรโทษกรรม: "เซ็นยกนกให้ผมเดี๋ยวนี้ ผมจะรักษาและหาบ้านที่ถูกกฎหมายให้ตามช่องโหว่"', zh: '📜 法律大赦："立即签署这份表格将鸟交给我。我会治疗它并通过漏洞找到一个合法的家。"' }, consequence: { en: '🧠 Mastermind. You save the bird and keep it as a "clinic mascot" legally. Best outcome.', th: '🧠 จอมวางแผน คุณช่วยนกและเลี้ยงเป็น "มาสคอตคลินิก" อย่างถูกกฎหมาย ผลลัพธ์ดีสุด', zh: '🧠 策划者。你救了这只鸟，并合法地将其作为"诊所吉祥物"。最好的结果。' }, stats: { competence: 80, ethics: 70, leadership: 80, innovation: 60 } }
        ]
    },
    {
        id: 'vet_039',
        text: {
            en: '🏭 The Puppy Mill: You discover a local "breeder" is actually a puppy mill. 200 dogs in filth. Genetic defects everywhere. He brings in a box of sick puppies. "Patch \'em up cheap."',
            th: '🏭 โรงงานผลิตหมา: คุณค้นพบว่า "นักเพาะพันธุ์" ท้องถิ่นจริงๆ คือโรงงานนรก หมา 200 ตัวในความสกปรก โรคพันธุกรรมเพียบ เขาพาลูกหมาป่วยมาลังนึง "ซ่อมพวกมันแบบถูกๆ หน่อย"',
            zh: '🏭 小狗工厂：你发现当地的一个"饲养员"实际上是一个小狗工厂。200只狗生活在污秽中。到处都是遗传缺陷。他带了一箱生病的小狗进来。"便宜点治好它们。"'
        },
        options: [
            { id: 'A', text: { en: '🕵️ Undercover: "Sure, let me see the facility to give a bulk discount." Gather evidence.', th: '🕵️ สายลับ: "ได้สิ ขอฉันดูฟาร์มหน่อยเผื่อลดราคาเหมาให้" เก็บหลักฐาน', zh: '🕵️ 卧底："当然，让我看看设施，以便批量打折。"收集证据。' }, consequence: { en: '📸 Exposed. You take photos. Police raid the place. You testify. You are a hero.', th: '📸 แฉยับ คุณถ่ายรูป ตำรวจบุกจับ คุณเป็นพยาน คุณคือฮีโร่', zh: '📸 曝光。你拍照。警察突袭了这个地方。你作证。你是个英雄。' }, stats: { competence: 70, ethics: 100, leadership: 90, innovation: 40 } },
            { id: 'B', text: { en: '💊 Treat & Bill: "I will treat them. Full price." Save the puppies in front of you.', th: '💊 รักษาและเก็บเงิน: "ฉันจะรักษา ราคาเต็ม" ช่วยลูกหมาตรงหน้าก่อน', zh: '💊 治疗并收费："我会治疗它们。全价。"救救你面前的小狗。' }, consequence: { en: '🔁 Cycle Continues. Puppies live, are sold, and he breeds more. You profit from misery.', th: '🔁 วงจรอุบาทว์ ลูกหมาจายได้ โดนขาย เขาเพาะเพิ่ม คุณหากินกับความทุกข์', zh: '🔁 循环继续。小狗活下来，被卖掉，他繁殖更多。你从痛苦中获利。' }, stats: { competence: 50, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🤬 Public Confrontation: "You monster! I\'m calling the news!" Scream at him in the lobby.', th: '🤬 ด่ากราด: "ไอ้ปีศาจ! ฉันจะเรียกนักข่าว!" ตะโกนด่าเขากลางล็อบบี้', zh: '🤬 公开对抗："你这个怪物！我要叫新闻界！"在大厅里对他大喊大叫。' }, consequence: { en: '🏃‍♂️ Flight. He runs. Moves his operation to another county. You scared him off but didn\'t stop him.', th: '🏃‍♂️ หนีหาย เขาหนี ย้ายฐานไปอำเภออื่น คุณไล่เขาได้แต่หยุดเขาไม่ได้', zh: '🏃‍♂️ 逃跑。他跑了。把他的行动转移到另一个县。你吓跑了他，但没有阻止他。' }, stats: { competence: 30, ethics: 60, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '💉 Seize & Treat: "These animals are in critical condition. I am keeping them. Sue me."', th: '💉 ยึดและรักษา: "สัตว์พวกนี้โคม่า ฉันจะยึดไว้ ฟ้องฉันสิ"', zh: '💉 扣押并治疗："这些动物情况危急。我要留下它们。告我吧。"' }, consequence: { en: '⚖️ Legal Battle. He sues. You win in court because of animal cruelty laws. Expensive but worth it.', th: '⚖️ ศึกกฎหมาย เขาฟ้อง คุณชนะในศาลเพราะกฎหมายทารุณสัตว์ แพงแต่คุ้ม', zh: '⚖️ 法律战。他起诉。因为虐待动物法，你在法庭上赢了。昂贵但值得。' }, stats: { competence: 60, ethics: 90, leadership: 70, innovation: 10 } }
        ]
    },
    {
        id: 'vet_040',
        text: {
            en: '📝 Insurance Fraud: A nice family\'s dog swallowed a rock. Surgery is $4000. They have insurance, but the waiting period ends tomorrow. "Can you write the date as the day after tomorrow? Please, we have no money."',
            th: '📝 โกงประกัน: หมาของครอบครัวแสนดีกลืนก้อนหิน ผ่าตัด $4000 มีประกันแต่ระยะรอคอยหมดพรุ่งนี้ "ช่วยเขียนวันที่เป็นมะรืนได้ไหม? ได้โปรด เราไม่มีเงิน"',
            zh: '📝 保险欺诈：一个好心家庭的狗吞下了一块石头。手术费是4000美元。他们有保险，但等待期明天结束。"你能把日期写成后天吗？求求你，我们没有钱。"'
        },
        options: [
            { id: 'A', text: { en: '🖊️ Do It: "Fine. For the dog. But never ask me again." Falsify records.', th: '🖊️ ทำเลย: "ก็ได้ เพื่อหมา แต่ห้ามขออีกนะ" ปลอมแปลงเอกสาร', zh: '🖊️ 做吧："好吧。为了狗。但别再问我了。"伪造记录。' }, consequence: { en: '😓 Secret Burden. Insurance pays. Dog lives. You could lose your license if caught. Sleepless nights.', th: '😓 ความลับหนักอึ้ง ประกันจ่าย หมารอด คุณอาจโดนยึดใบถ้ารู้ นอนไม่หลับ', zh: '😓 秘密负担。保险赔付。狗活了。如果被抓到，可能会失去执照。不眠之夜。' }, stats: { competence: 50, ethics: -60, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Refuse: "I cannot commit fraud. It is a crime. Surgery is $4000 upfront."', th: '🛑 ปฏิเสธ: "ฉ้อโกงไม่ได้ มันเป็นอาชญากรรม ค่าผ่า $4000 จ่ายก่อน"', zh: '🛑 拒绝："我不能欺诈。这是犯罪。手术费预付4000美元。"' }, consequence: { en: '😢 Surrender. They surrender the dog to you because they can\'t pay. You fix it and rehome it.', th: '😢 ยอมแพ้ พวกเขายกหมาให้คุณเพราะไม่มีเงินจ่าย คุณรักษาและหาบ้านใหม่', zh: '😢 投降。他们因为付不起钱把狗交给了你。你治好它并重新安置。' }, stats: { competence: 60, ethics: 80, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '💡 Payment Plan: "No fraud. But I will offer a 24-month payment plan, interest-free."', th: '💡 ผ่อนชำระ: "โกงไม่ได้ แต่หมอให้ผ่อน 24 เดือน ดอกเบี้ย 0%"', zh: '💡 付款计划："不欺诈。但我会提供24个月的付款计划，免息。"' }, consequence: { en: '📉 Financial Risk. They pay slowly. But you kept your integrity and saved the dog.', th: '📉 ความเสี่ยงการเงิน เขาผ่อนช้า แต่คุณรักษาจริยธรรมและช่วยหมาไว้', zh: '📉 财务风险。他们付得很慢。但你保持了正直并救了狗。' }, stats: { competence: 70, ethics: 90, leadership: 60, innovation: 30 } },
            { id: 'D', text: { en: '🏥 Stabilize Only: "I can wait 2 days for surgery if we monitor carefully. Risky but legal."', th: '🏥 ประคองอาการ: "หมอรอผ่าอีก 2 วันได้ถ้าเฝ้าระวังดีๆ เสี่ยงแต่ถูกกฎหมาย"', zh: '🏥 仅稳定："如果我们仔细监测，我可以等2天再做手术。有风险但合法。"' }, consequence: { en: '🎲 Medical Gamble. It works! The waiting period passes. Insurance covers it legally. Genius.', th: '🎲 พนันการแพทย์ ได้ผล! ระยะรอคอยหมด ประกันจ่ายแบบถูกกฎหมาย อัจฉริยะ', zh: '🎲 医疗赌博。有效！等待期过去了。保险合法承保。天才。' }, stats: { competence: 90, ethics: 70, leadership: 60, innovation: 50 } }
        ]
    },
    {
        id: 'vet_041',
        text: {
            en: '🦇 The Rabies Scares: An unvaccinated dog bit a neighborhood child. The law says "Euthanize and test brain" or "6-month strict quarantine". The owners beg for quarantine. The parents want the head tested NOW.',
            th: '🦇 ความกลัวพิษสุนัขบ้า: หมาไม่ได้ฉีดวัคซีนกัดเด็กแถวบ้าน กฎหมายบอก "การุณยฆาตและตรวจสมอง" หรือ "กักโรคเข้มข้น 6 เดือน" เจ้าของขอกักโรค พ่อแม่เด็กอยากให้ตรวจสมองเดี๋ยวนี้',
            zh: '🦇 狂犬病恐慌：一只未接种疫苗的狗咬了邻居的孩子。法律规定"安乐死并测试大脑"或"6个月严格隔离"。主人乞求隔离。父母现在就要测试头部。'
        },
        options: [
            { id: 'A', text: { en: '💀 Euthanize: "Human life comes first. I must test the brain to ensure the child is safe."', th: '💀 การุณยฆาต: "ชีวิตคนมาก่อน หมอต้องตรวจสมองเพื่อให้แน่ใจว่าเด็กปลอดภัย"', zh: '💀 安乐死："人的生命至上。我必须测试大脑以确保孩子安全。"' }, consequence: { en: '😭 Grief. Owners are devastated. The test is negative. The dog died for nothing? No, for safety.', th: '😭 โศกเศร้า เจ้าของเสียใจมาก ผลเป็นลบ หมาตายฟรี? ไม่หรอก เพื่อความปลอดภัย', zh: '😭 悲伤。主人被摧毁了。测试呈阴性。狗白死了？不，为了安全。' }, stats: { competence: 80, ethics: 60, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '🔒 Quarantine: "I will supervise strict quarantine. If any symptoms appear, we act." Stand by the dog.', th: '🔒 กักโรค: "หมอจะคุมการกักโรคเอง ถ้ามีอาการค่อยว่ากัน" ยืนหยัดเพื่อหมา', zh: '🔒 隔离："我会监督严格隔离。如果出现任何症状，我们就行动。"支持狗。' }, consequence: { en: '😡 Angry Parents. They sue you. The quarantine passes safely, but your legal fees are high.', th: '😡 พ่อแม่โกรธ ฟ้องคุณ กักโรคผ่านไปได้ด้วยดี แต่ค่าทนายอ่วม', zh: '😡 愤怒的父母。他们起诉你。隔离安全通过，但你的法律费用很高。' }, stats: { competence: 50, ethics: 70, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🩸 Titer Test: "Let\'s test for antibodies first! Maybe he was vaccinated before?" (Unlikely to be accepted legally).', th: '🩸 ตรวจภูมิ: "ตรวจภูมิคุ้มกันก่อน! เผื่อเคยฉีดมา?" (กฎหมายมักไม่ยอมรับ)', zh: '🩸 滴度测试："让我们先测试抗体！也许他以前接种过疫苗？"（法律上不太可能被接受）。' }, consequence: { en: '📉 False Hope. Legal authorities reject the titer. You still have to choose A or B. Wasted time.', th: '📉 ความหวังลมๆ แล้งๆ ทางการปัดตกผลกภูมิ ยังไงก็ต้องเลือก A หรือ B เสียเวลา', zh: '📉 错误的希望。法律当局拒绝了滴度。你仍然必须选择A或B。浪费时间。' }, stats: { competence: 40, ethics: 50, leadership: 20, innovation: 10 } },
            { id: 'D', text: { en: '📢 Mediate: "Convince the parents to start PEP (Post Exposure Prophylaxis) immediately while we quarantine dog." Best of both.', th: '📢 ไกล่เกลี่ย: "เกลี้ยกล่อมพ่อแม่ให้ฉีดยาป้องกันทันทีระหว่างกักหมา" ดีทั้งสองฝ่าย', zh: '📢 调解："说服父母在隔离狗的同时立即开始PEP（暴露后预防）。"两全其美。' }, consequence: { en: '🏆 Diplomat. The child is safe (vaccine). The dog lives (quarantine). You navigated a legal minefield.', th: '🏆 นักการทูต เด็กปลอดภัย (วัคซีน) หมารอด (กักโรค) คุณผ่านดงระเบิดกฎหมายมาได้', zh: '🏆 外交官。孩子安全（疫苗）。狗活着（隔离）。你穿越了法律雷区。' }, stats: { competence: 70, ethics: 80, leadership: 90, innovation: 30 } }
        ]
    },
    {
        id: 'vet_042',
        text: {
            en: '🥩 The Raw Food Zealot: A client feeds her Great Dane only "raw chicken carcasses." bacteria levels are off the charts. The dog has Salmonella and is shedding it everywhere. She has a toddler at home.',
            th: '🥩 ลัทธิบาร์ฟ: ลูกค้าให้เกรตเดนกินแต่ "โครงไก่ดิบ" แบคทีเรียพุ่งปรี๊ด หมาติดซาลโมเนลลาและแพร่เชื้อไปทั่ว เธอมีลูกเล็กที่บ้าน',
            zh: '🥩 生食狂热者：一位客户只给以此的大丹犬喂"生鸡架"。细菌含量爆表。这只狗患有沙门氏菌，并且到处排毒。家里有个蹒跚学步的孩子。'
        },
        options: [
            { id: 'A', text: { en: '👶 Warn about Child: "This bacteria can kill your baby. Stop the diet or I report a public health hazard."', th: '👶 เตือนเรื่องเด็ก: "แบคทีเรียนี่ฆ่าลูกคุณได้นะ หยุดให้ดิบไม่งั้นหมอแจ้งสาธารณสุข"', zh: '👶 警告孩子："这种细菌会杀死你的宝宝。停止这种饮食，否则我报告公共健康危害。"' }, consequence: { en: '😱 Shock. She didn\'t realize. She switches to cooked food. You saved the kid.', th: '😱 ช็อก เธอไม่รู้ตัว เธอยอมเปลี่ยนเป็นอาหารปรุงสุก คุณช่วยเด็กไว้', zh: '😱 震惊。她没意识到。她改吃熟食。你救了孩子。' }, stats: { competence: 70, ethics: 90, leadership: 70, innovation: 0 } },
            { id: 'B', text: { en: '💊 Treat Dog Only: "Antibiotics for the dog." Ignore the diet to keep the client.', th: '💊 รักษาแต่หมา: "จ่ายยาฆ่าเชื้อให้หมา" เมินเรื่องอาหารเพื่อรักษาลูกค้า', zh: '💊 只治狗："给狗抗生素。"为了留住客户而忽略饮食。' }, consequence: { en: '☣️ Recurrence. The dog gets sick again in a month. The toddler gets sick too. Disaster.', th: '☣️ เป็นซ้ำ หมาป่วยอีกในหนึ่งเดือน ลูกเด็กก็ป่วยด้วย หายนะ', zh: '☣️ 复发。狗一个月后又病了。蹒跚学步的孩子也病了。灾难。' }, stats: { competence: 40, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🤔 Compromise: "High Pressure Pasteurization (HPP) raw food only. It kills the bugs." Middle ground.', th: '🤔 ประนีประนอม: "กินบาร์ฟแบบฆ่าเชื้อด้วยแรงดันสูง (HPP) เท่านั้น มันฆ่าเชื้อโรค" ทางสายกลาง', zh: '🤔 妥协："仅限高压巴氏杀菌（HPP）生食。它能杀虫。"中间立场。' }, consequence: { en: '🤝 Happy Client. She gets to keep her "raw" philosophy but safely. Good consulting.', th: '🤝 ลูกค้าแฮปปี้ เธอได้ยึดวิถี "ดิบ" แต่ปลอดภัย ที่ปรึกษาที่ดี', zh: '🤝 快乐的客户。她得以安全地保持她的"生食"哲学。很好的咨询。' }, stats: { competence: 80, ethics: 70, leadership: 60, innovation: 40 } },
            { id: 'D', text: { en: '🚪 Fire Client: "I won\'t treat animals on dangerous diets. Please leave."', th: '🚪 ไล่ลูกค้า: "ฉันไม่รักษาสัตว์ที่กินอาหารอันตราย เชิญ"', zh: '🚪 解雇客户："我不治疗饮食危险的动物。请离开。"' }, consequence: { en: '📉 Revenue Loss. She leaves angry. But your clinic stays salmonella-free.', th: '📉 รายได้หาย เธอโกรธจัด แต่คลินิกคุณปลอดซาลโมเนลลา', zh: '📉 收入损失。她愤怒地离开了。但你的诊所没有沙门氏菌。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 0 } }
        ]
    },
    {
        id: 'vet_043',
        text: {
            en: '🧠 The Burnout: You have worked 20 days in a row. You are shaking. A difficult surgery is scheduled. You might make a mistake.',
            th: '🧠 ภาวะหมดไฟ: คุณทำงาน 20 วันติด มือสั่น มีคิวผ่าตัดยากรออยู่ คุณอาจทำพลาด',
            zh: '🧠 倦怠：你连续工作了20天。你在发抖。安排了一个艰难的手术。你可能会犯错。'
        },
        options: [
            { id: 'A', text: { en: '☕ Power Through: "Coffee. Red Bull. I can do this." Hero syndrome.', th: '☕ ฝืนทำ: "กาแฟ กระทิงแดง ฉันไหว" โรคยอดมนุษย์', zh: '☕ 坚持到底："咖啡。红牛。我能行。"英雄综合症。' }, consequence: { en: '✂️ Nicked Artery. Your hand slips. Massive bleed. The animal dies. Malpractice suit.', th: '✂️ มือลั่น มือลื่นไปโดนเส้นเลือดใหญ่ เลือดสาด สัตว์ตาย โดนฟ้อง', zh: '✂️ 切断动脉。你的手滑了。大出血。动物死亡。医疗事故诉讼。' }, stats: { competence: -20, ethics: -40, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '📅 Reschedule: "I am unwell. We must push surgery to tomorrow." Honest.', th: '📅 เลื่อนนัด: "หมอไม่สบาย ต้องเลื่อนผ่าไปพรุ่งนี้" ซื่อสัตย์', zh: '📅 重新安排："我不舒服。我们必须把手术推迟到明天。"诚实。' }, consequence: { en: '🗓️ Angry Owner. They scream about "inconvenience." But the surgery goes perfectly the next day.', th: '🗓️ เจ้าของโมโห โวยวายเรื่อง "เสียเวลา" แต่วันรุ่งขึ้นผ่าตัดผ่านไปได้ด้วยดี', zh: '🗓️ 愤怒的主人。他们尖叫着"不便"。但第二天的手术非常完美。' }, stats: { competence: 80, ethics: 80, leadership: 60, innovation: 0 } },
            { id: 'C', text: { en: '👨‍⚕️ Delegate: "Let the Junior Vet do it. I\'ll supervise from a chair." Use the team.', th: '👨‍⚕️ กระจายงาน: "ให้หมอรุ่นน้องทำ หมอนั่งคุม" ใช้ทีมงาน', zh: '👨‍⚕️ 委派："让初级兽医做。我坐在椅子上监督。"利用团队。' }, consequence: { en: '🎓 Growth. The junior steps up and does well. You get rest. Team gets stronger.', th: '🎓 การเติบโต รุ่นน้องโชว์ฝีมือ คุณได้พัก ทีมแกร่งขึ้น', zh: '🎓 成长。初级兽医挺身而出，做得很好。你得到了休息。团队变强了。' }, stats: { competence: 70, ethics: 70, leadership: 90, innovation: 20 } },
            { id: 'D', text: { en: '🏖️ Quit: "I can\'t do this anymore. I quit." Walk out instantly.', th: '🏖️ ลาออก: "ไม่ไหวแล้วโว้ย ลาออก" เดินหนีเลย', zh: '🏖️ 辞职："我再也受不了了。我不干了。"立刻走出去。' }, consequence: { en: '📉 Career Suicide. The clinic collapses without you. You need months to recover mentally.', th: '📉 ฆ่าตัวตายทางอาชีพ คลินิกล่มสลายถ้าไม่มีคุณ คุณต้องพักใจเป็นเดือน', zh: '📉以此职业自杀。没有你，诊所就垮了。你需要在精神上恢复几个月。' }, stats: { competence: 0, ethics: 0, leadership: -100, innovation: 0 } }
        ]
    },
    {
        id: 'vet_044',
        text: {
            en: '🐎 The Million Dollar Leg: A famous racehorse is slightly lame. The owner (mob ties) wants you to inject painkillers so it can race in the Derby tomorrow. "He just needs to run one last race."',
            th: '🐎 ขาเงินล้าน: ม้าแข่งชื่อดังขาเจ็บนิดหน่อย เจ้าของ (มีเอี่ยวมาเฟีย) อยากให้ฉีดยาชาเพื่อให้ลงแข่งดาร์บี้พรุ่งนี้ได้ "มันแค่วิ่งอีกรอบเดียว"',
            zh: '🐎 百万金腿：一匹著名的赛马有点瘸。主人（有黑帮关系）想让你注射止痛药，这样它明天就能参加德比大赛。"它只需要跑最后一场比赛。"'
        },
        options: [
            { id: 'A', text: { en: '💉 Inject: "Okay. Just this once." Take the risk.', th: '💉 ฉีดให้: "ก็ได้ แค่ครั้งเดียวนะ" เสี่ยงดู', zh: '💉 注射："好吧。就这一次。"冒险。' }, consequence: { en: '💥 Shattered Leg. The horse runs, breaks the leg mid-race, and has to be euthanized on live TV. You are disgraced.', th: '💥 ขาหักยับ ม้าวิ่ง ขาหักกลางสนาม ต้องการุณยฆาตออกทีวี คุณเสียชื่อเสียงย่อยยับ', zh: '💥 腿碎了。马跑了，半路断了腿，必须在电视直播中被安乐死。你丢脸了。' }, stats: { competence: 20, ethics: -100, leadership: -50, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Refuse: "He is lame. No race. I will scratch him from the list officially."', th: '🛑 ปฏิเสธ: "ขาเจ็บ ห้ามแข่ง หมอจะตัดชื่อออกอย่างเป็นทางการ"', zh: '🛑 拒绝："它瘸了。不准比赛。我会正式把它从名单上划掉。"' }, consequence: { en: '👊 Threat. You find your car tires slashed. But the horse survives to retire. You stood tall.', th: '👊 คำขู่ ยางรถโดนกรีด แต่ม้ารอดไปเกษียณ คุณยืนหยัดได้', zh: '👊 威胁。你发现你的车胎被割破了。但马活到了退休。你挺直了腰杆。' }, stats: { competence: 70, ethics: 90, leadership: 70, innovation: 0 } },
            { id: 'C', text: { en: '🤥 Fake Injection: "I injected Saline. He feels \'pain relief\' (Placebo)." He will run slow.', th: '🤥 ฉีดน้ำเกลือ: "ฉีดน้ำเกลือให้ รู้สึก \'หายปวด\' แล้วนะ (ยาหลอก)" เขาจะวิ่งช้า', zh: '🤥 假注射："我注射了生理盐水。它感觉\'缓解了疼痛\'（安慰剂）。"它会跑得很慢。' }, consequence: { en: '🐢 Lost Race. The horse protects the leg and loses safe. Owner blames you, but horse is okay.', th: '🐢 แพ้การแข่ง ม้าเซฟขาตัวเองและแพ้อย่างปลอดภัย เจ้าของโทษคุณ แต่ม้าโอเค', zh: '🐢 输掉比赛。马保护了腿，安全地输了。主人怪你，但马没事。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '📢 Whistleblower: "Call the Racing Commission anonymously. Tip them off about the pressure."', th: '📢 เป่านกหวีด: "โทรแจ้งคณะกรรมการแข่งม้าแบบนิรนาม แฉเรื่องแรงกดดัน"', zh: '📢 举报人："匿名致电赛马委员会。向他们透露有关压力的消息。"' }, consequence: { en: '🔍 Investigation. The owner is suspended. You are suspected but safe. Racing cleanup creates chaos.', th: '🔍 การสืบสวน เจ้าของโดนแบน คุณถูกสงสัยแต่รอด วงการม้าวุ่นวาย', zh: '🔍 调查。主人被停职。你被怀疑但很安全。赛马清理造成混乱。' }, stats: { competence: 60, ethics: 80, leadership: 60, innovation: 20 } }
        ]
    },
    {
        id: 'vet_045',
        text: {
            en: '🐔 Backyard Bird Flu: A hipster chicken coop in the city has birds dropping dead. It tests positive for H5N1 (Avian Flu). Very contagious to humans.',
            th: '🐔 ไข้หวัดนกหลังบ้าน: เล้าไก่ฮิปสเตอร์ในเมือง ไก่ตายร่วง ผลตรวจ H5N1 (ไข้หวัดนก) เป็นบวก ติดคนง่ายมาก',
            zh: '🐔 后院禽流感：城里的一个嬉皮士鸡舍有鸟倒地死亡。H5N1（禽流感）检测呈阳性。对人类传染性极强。'
        },
        options: [
            { id: 'A', text: { en: '🔥 Cull All: "We must depopulate the entire flock immediately. Bio-hazard suits on!"', th: '🔥 ฆ่าล้างบาง: "ต้องกำจัดทั้งฝูงเดี๋ยวนี้ ใส่ชุดป้องกันเชื้อโรค!"', zh: '🔥 全部扑杀："我们必须立即消灭整个鸡群。穿上生化防护服！"' }, consequence: { en: '🛡️ Public Safety. Sad owners, but you prevented a city epidemic. Department of Agriculture praises you.', th: '🛡️ ความปลอดภัยสาธารณะ เจ้าของเศร้า แต่คุณกันโรคระบาดในเมือง กรมปศุสัตว์ชมเชย', zh: '🛡️以此公共安全。悲伤的主人，但你阻止了城市流行病。农业部表扬了你。' }, stats: { competence: 90, ethics: 80, leadership: 80, innovation: 0 } },
            { id: 'B', text: { en: '🧪 Try to Save: "Isolate the sick ones. Treat with antivirals." Compassion over safety.', th: '🧪 พยายามช่วย: "แยกตัวป่วย ให้ยาต้านไวรัส" เมตตาเหนือความปลอดภัย', zh: '🧪 试图拯救："隔离病鸟。用抗病毒药物治疗。"同情心高于安全。' }, consequence: { en: '😷 Patient Zero. The owner catches it from a "healthy" looking bird. It creates a global news scare.', th: '😷 ผู้ป่วยหมายเลข 0 เจ้าของติดโรคจากไก่ที่ดู "แข็งแรง" เป็นข่าวดังทั่วโลก', zh: '😷 零号病人。主人从一只看起来"健康"的鸟那里感染了它。这制造了全球新闻恐慌。' }, stats: { competence: 30, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'C', text: { en: '🤐 Keep Quiet: "Just bury the dead ones. Don\'t tell the government or they will kill them all."', th: '🤐 เงียบไว้: "ฝังตัวที่ตาย ห้ามบอกรัฐ ไม่งั้นโดนฆ่ายกเล้า"', zh: '🤐 保持安静："把死鸟埋了就好。别告诉政府，否则他们会把它们全杀了。"' }, consequence: { en: '☠️ Outbreak. Wild birds catch it. It spreads across the state. You are liable for millions.', th: '☠️ ระบาด นกป่าติดเชื้อ ลามไปทั่วรัฐ คุณโดนฟ้องเละเทะ', zh: '☠️ 爆发。野生鸟类感染了它。它蔓延到全州。你要负数百万的责任。' }, stats: { competence: 20, ethics: -80, leadership: -50, innovation: 0 } },
            { id: 'D', text: { en: '📡 Notify & Monitor: "Report to State Vet. Let them decide. Quarantine in mean time."', th: '📡 แจ้งและเฝ้า: "รายงานสัตวแพทย์รัฐ ให้เขาตัดสินใจ กักโรคไปก่อน"', zh: '📡 通知并监控："向州兽医报告。让他们决定。同时隔离。"' }, consequence: { en: '✅ By the Book. The state orders culling anyway, but it is not on your hands. Protocol followed.', th: '✅ ตามระเบียบ รัฐสั่งฆ่าอยู่ดี แต่ไม่ใช่ความผิดคุณ ทำตามขั้นตอน', zh: '✅ 按章办事。州政府还是下令扑杀，但这不是你的责任。遵守了协议。' }, stats: { competence: 70, ethics: 70, leadership: 40, innovation: 0 } }
        ]
    },
    {
        id: 'vet_046',
        text: {
            en: '📱 The Telehealth App: "VetZoom" wants to hire you. "Diagnose pets via video chat! Prescribe meds instantly!" Easy money, but you can\'t listen to hearts or palpate abdomens.',
            th: '📱 แอปทางไกล: "VetZoom" อยากจ้างคุณ "วินิจฉัยสัตว์ผ่านวิดีโอคอล! สั่งยาได้เลย!" เงินง่าย แต่ไม่ได้ฟังหัวใจหรือคลำท้อง',
            zh: '📱 远程医疗应用："VetZoom"想雇你。"通过视频聊天诊断宠物！立即开药！"钱好赚，但你不能听心脏或触诊腹部。'
        },
        options: [
            { id: 'A', text: { en: '🤑 Join: "Sign me up. Volume is king." Prescribe antibiotics like candy.', th: '🤑 เข้าร่วม: "เอาด้วย เน้นปริมาณ" จ่ายยาฆ่าเชื้อเป็นขนม', zh: '🤑 加入："给我报名。量大为王。"想糖果一样开抗生素。' }, consequence: { en: '📉 Missed Diagnosis. A "coughing" dog had heart failure, not kennel cough. It dies. You are banned.', th: '📉 วินิจฉัยพลาด หมา "ไอ" เป็นโรคหัวใจ ไม่ใช่หวัด หมาตาย คุณโดนแบน', zh: '📉 误诊。一只"咳嗽"的狗患有心力衰竭，而不是犬舍咳。它死了。你被禁了。' }, stats: { competence: 40, ethics: -40, leadership: -20, innovation: 30 } },
            { id: 'B', text: { en: '🛡️ Triage Only: "I will join but only for triage/advice. No prescriptions without physical exam."', th: '🛡️ ให้คำปรึกษาเท่านั้น: "ร่วมด้วยแต่แค่ให้คำแนะนำ ไม่สั่งยาถ้าไม่ได้ตรวจจริง"', zh: '🛡️ 仅分诊："我会加入，但仅限于分诊/建议。没有体检不开处方。"' }, consequence: { en: '🌟 Ethical Tech. You set the standard for safe telehealth. It grows slower but safely.', th: '🌟 เทคโนโลยีมีจริยธรรม คุณสร้างมาตรฐานโทรเวชกรรมที่ปลอดภัย โตช้าแต่ชัวร์', zh: '🌟 道德科技。你设定了安全远程医疗的标准。发展较慢但安全。' }, stats: { competence: 80, ethics: 80, leadership: 70, innovation: 60 } },
            { id: 'C', text: { en: '🛑 Rebuttal: "This is dangerous malpractice. I will write an op-ed against it."', th: '🛑 โต้แย้ง: "นี่คือการรักษาที่ผิดพลาดและอันตราย ฉันจะเขียนบทความต่อต้าน"', zh: '🛑 反驳："这是危险的医疗事故。我要写一篇反对它的专栏文章。"' }, consequence: { en: '🦕 Old Guard. The app succeeds anyway. You look like a luddite, though you were right about risks.', th: '🦕 หัวโบราณ แอปประสบความสำเร็จอยู่ดี คุณดูเหมือนคนต่อต้านเทคโนโลยี แม้คุณจะพูดถูกเรื่องความเสี่ยง', zh: '🦕 老派。该应用程序还是成功了。虽然你对风险的看法是正确的，但你看起来像是个反对技术进步的人。' }, stats: { competence: 60, ethics: 70, leadership: 50, innovation: -20 } },
            { id: 'D', text: { en: '🤖 AI Assist: "Use the app to train an AI diagnostic tool, but keep human oversight."', th: '🤖 AI ผู้ช่วย: "ใช้แอปเทรน AI วินิจฉัย แต่ให้คนคอยคุม"', zh: '🤖 AI辅助："利用该应用训练AI诊断工具，但保持人工监督。"' }, consequence: { en: '🚀 Futurist. You help build the "Jarvis for Vets." High innovation score.', th: '🚀 นักอนาคตศาสตร์ คุณช่วยสร้าง "จาร์วิสสำหรับสัตวแพทย์" คะแนนล้ำเลิศ', zh: '🚀 未来主义者。你帮助建立了"兽医版贾维斯"。高创新分。' }, stats: { competence: 80, ethics: 60, leadership: 60, innovation: 100 } }
        ]
    },
    {
        id: 'vet_047',
        text: {
            en: '🐕 The Stray Epidemic: The city is overrun with stray dogs. The Mayor orders a "Cull Solution." He wants you to lead the mass euthanasia team. "Clean the streets."',
            th: '🐕 โรคระบาดสัตว์จร: เมืองเต็มไปด้วยหมาจร นายกสั่ง "มาตรการกำจัด" เขาอยากให้คุณคุมทีมการุณยฆาตหมู่ "ล้างบางให้ถนนสะอาด"',
            zh: '🐕 流浪流行病：城市里到处都是流浪狗。市长下令"扑杀解决方案"。他想让你领导大规模安乐死小组。"清理街道。"'
        },
        options: [
            { id: 'A', text: { en: '💉 Accept: "It is ugly, but necessary work. Better me than a butcher." Do it professionally.', th: '💉 ยอมรับ: "งานสกปรกแต่จำเป็น ให้ฉันทำดีกว่าให้คนฆ่าสัตว์ทำ" ทำอย่างมืออาชีพ', zh: '💉 接受："这很丑陋，但是必要的工作。我做总比屠夫做好。"专业地做。' }, consequence: { en: '🌑 The Reaper. You clean the city. PTSD haunts you. The public fears you.', th: '🌑 ยมทูต คุณล้างเมือง PTSD หลอนคุณชาวบ้านกลัวคุณ', zh: '🌑 收割者。你清理了城市。PTSD困扰着你。公众害怕你。' }, stats: { competence: 70, ethics: -20, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Protest: "Absolutely not. TNR (Trap-Neuter-Return) is the only ethical way." Refuse.', th: '🛑 ประท้วง: "ไม่เด็ดขาด TNR (จับ-ทำหมัน-ปล่อย) คือทางเดียวที่มีจริยธรรม" ปฏิเสธ', zh: '🛑 抗议："绝对不行。TNR（诱捕-绝育-放归）是唯一合乎道德的方式。"拒绝。' }, consequence: { en: '✊ Activist. You lose the city contract. But you start a massive TNR campaign that works slowly.', th: '✊ นักกิจกรรม คุณเสียสัญญาจ้างรัฐ แต่เริ่มแคมเปญ TNR ใหญ่ที่ได้ผลช้าๆ', zh: '✊ 活动家。你失去了城市合同。但你发起了一场大规模的TNR运动，见效缓慢。' }, stats: { competence: 60, ethics: 90, leadership: 70, innovation: 30 } },
            { id: 'C', text: { en: '💡 Sanctuary Plan: "Give me the budget for killing, and I will build a sanctuary instead." Pivot.', th: '💡 แผนศูนย์พักพิง: "เอางบฆ่ามาให้ฉัน แล้วฉันจะสร้างศูนย์พักพิงแทน" พลิกแผน', zh: '💡 避难所计划："把杀戮的预算给我，我会建一个避难所。"以此为转折点。' }, consequence: { en: '🏗️ Builder. The Mayor agrees. It is hard work, but you save thousands. A legacy project.', th: '🏗️ ผู้สร้าง นายกตกลง งานหนักแต่ช่วยได้เป็นพัน โปรเจกต์ตำนาน', zh: '🏗️ 建设者。市长同意了。工作很辛苦，但你救了数千人。一个遗产项目。' }, stats: { competence: 80, ethics: 100, leadership: 100, innovation: 50 } },
            { id: 'D', text: { en: '🤐 Silent Sabotage: "Take the job, but euthanize only the sickest. Relocate the rest secretly."', th: '🤐 แอบขัดขวาง: "รับงาน แต่ฆ่าแค่ตัวที่ป่วยหนัก แอบย้ายที่เหลือไปที่อื่น"', zh: '🤐 沉默破坏："接受工作，但只安乐死病情最严重的。秘密转移其余的。"' }, consequence: { en: '🕵️ Double Agent. Risky. If found out, you go to jail for fraud. But you slept better.', th: '🕵️ สายลับสองหน้า เสี่ยง ถ้าโดนจับคือคุกข้อหาฉ้อโกง แต่นอนหลับสบายขึ้น', zh: '🕵️ 双重间谍。有风险。如果被发现，你会因欺诈入狱。但你睡得更好了。' }, stats: { competence: 60, ethics: 60, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'vet_048',
        text: {
            en: '🐍 The Venomous Bite: A King Cobra bites its owner. He has no license for it. He brings the snake IN A BAG to your clinic. "Save the snake, it\'s stressed! Unzip the bag!" He is dying of venom.',
            th: '🐍 งูพิษกัด: จงอางกัดเจ้าของ เขาไม่มีใบอนุญาต เขาพางูใส่ถุงมาคลินิก "ช่วยงูด้วย มันเครียด! รูดซิปเปิดเลย!" ตัวเขาเองกำลังจะตายเพราะพิษ',
            zh: '🐍 毒蛇咬伤：一条眼镜王蛇咬了它的主人。他没有执照。他把蛇装在袋子里带到你的诊所。"救救蛇，它压力很大！拉开袋子！"他快要死于毒液了。'
        },
        options: [
            { id: 'A', text: { en: '🚑 Treat Human: "Forget the snake! Call ambulance! Tourniquet arm!" Save the man.', th: '🚑 รักษาคน: "ช่างหัวงู! เรียกรถพยาบาล! ขันชะเนาะแขน!" ช่วยคน', zh: '🚑 救人："别管蛇了！叫救护车！止血带绑胳膊！"救人。' }, consequence: { en: '🏥 Human Lives. He survives. The snake dies in the bag from overheating. Priority correct.', th: '🏥 ชีวิตคนรอด เขารอด งูตายในถุงเพราะร้อน ลำดับความสำคัญถูกต้อง', zh: '🏥 人命关天。他活了下来。蛇在袋子里因过热而死。优先级正确。' }, stats: { competence: 80, ethics: 60, leadership: 70, innovation: 0 } },
            { id: 'B', text: { en: '🐍 Secure Snake: "Do not open that bag! Lock it in a steel crate." Safety first.', th: '🐍 ล็อกงู: "ห้ามเปิดถุง! เอามันไปขังในกรงเหล็ก" ปลอดภัยไว้ก่อน', zh: '🐍 固定蛇："别打开那个袋子！把它锁在这个钢箱里。"安全第一。' }, consequence: { en: '🔒 Safe Clinic. The man collapses. Ambulance takes him. Snake is secure. Crisis averted.', th: '🔒 คลินิกปลอดภัย ผู้ชายล้มลง รถพยาบาลมารับ งูถูกขัง วิกฤตผ่านไป', zh: '🔒 安全诊所。那个男人倒下了。救护车把他带走了。蛇很安全。危机解除。' }, stats: { competence: 90, ethics: 50, leadership: 80, innovation: 0 } },
            { id: 'C', text: { en: '🔪 Decapitate: "That snake is a lethal weapon. I am killing it to protect my staff." Chop.', th: '🔪 ตัดหัว: "งูนั่นคืออาวุธสังหาร ฉันจะฆ่ามันเพื่อปกป้องลูกน้อง" ฉับ', zh: '🔪 斩首："那条蛇是致命武器。我要杀了它以保护我的员工。"砍。' }, consequence: { en: '🩸 Messy. The owner survives and sues you for "killing his baby." But staff felt safe.', th: '🩸 เละเทะ เจ้าของรอดและฟ้องคุณที่ "ฆ่าลูกเขา" แต่พนักงานรู้สึกปลอดภัย', zh: '🩸 混乱。主人活了下来，还要起诉你"杀了他的宝贝"。但员工感到安全。' }, stats: { competence: 40, ethics: 30, leadership: 50, innovation: 0 } },
            { id: 'D', text: { en: '💉 Antivenom Search: "I have general antivenom! Try it on the man!" (Vet antivenom is for dogs).', th: '💉 หาเซรุ่ม: "ฉันมีเซรุ่มรวม! ลองฉีดให้คนดู!" (เซรุ่มสัตว์สำหรับหมา)', zh: '💉 寻找抗毒血清："我有普通抗毒血清！在人身上试试！"（兽医抗毒血清是给狗用的）。' }, consequence: { en: '⚠️ Anaphylaxis. The man has a severe allergic reaction to horse serum. He nearly dies twice.', th: '⚠️ แพ้รุนแรง ผู้ชายแพ้เซรุ่มม้าอย่างหนัก เกือบตายสองรอบ', zh: '⚠️ 过敏反应。该男子对马血清有严重的过敏反应。他差点死了两次。' }, stats: { competence: 20, ethics: 50, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'vet_049',
        text: {
            en: '🔮 The Holistic Rival: A "Natural Healer" opens next door. She uses crystals and oils to treat cancer. Your clients are flocking to her. "She says chemo is poison!"',
            th: '🔮 คู่แข่งสายมู: "นักบำบัดธรรมชาติ" มาเปิดข้างๆ เธอใช้คริสตัลและน้ำมันรักษามะเร็ง ลูกค้าคุณแห่ไปหาเธอ "เธอบอกว่าคีโมคือยาพิษ!"',
            zh: '🔮 整体竞争对手：一位"自然治疗师"在隔壁开业。她用水晶和精油治疗癌症。你的客户蜂拥而至。"她说化疗是毒药！"'
        },
        options: [
            { id: 'A', text: { en: '⚔️ Attack: "She is a quack! A fraud! Do not go there!" Publicly denounce her.', th: '⚔️ โจมตี: "ยัยนั่นหมอเถื่อน! ต้มตุ๋น! อย่าไปนะ!" ประจานออกสื่อ', zh: '⚔️ 攻击："她是个庸医！骗子！别去那里！"公开谴责她。' }, consequence: { en: '🔥 Backfire. You look jealous. Clients like "options." The feud fuels her business.', th: '🔥 เข้าตัว คุณดูขี้อิจฉา ลูกค้าชอบ "ทางเลือก" ยิ่งทะเลาะยิ่งดัง', zh: '🔥 事与愿违。你看起来很嫉妒。客户喜欢"选择"。这场争执助长了她的生意。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Integrate: "Hire an acupuncturist. Offer \'Integrative Medicine\' (Science + Wellness)." Compete.', th: '🤝 ผสมผสาน: "จ้างหมอฝังเข็ม เปิดแผนก \'แพทย์ทางเลือก\' (วิทย์ + สุขภาพ)" แข่งเลย', zh: '🤝 整合："雇佣针灸师。提供\'综合医学\'（科学+健康）。"竞争。' }, consequence: { en: '🧠 Smart Move. You win back clients. They get the "feel good" stuff PLUS real medicine.', th: '🧠 ฉลาดมาก ดึงลูกค้ากลับมาได้ พวกเขาได้ความ "รู้สึกดี" บวกกับยาจริง', zh: '🧠 明智之举。你赢回了客户。他们得到了"感觉良好"的东西加上真正的药物。' }, stats: { competence: 80, ethics: 70, leadership: 80, innovation: 60 } },
            { id: 'C', text: { en: '🕵️ Report: "Practicing medicine without a license." Quietly file complaints with the board.', th: '🕵️ แจ้งจับ: "รักษาโรคโดยไม่มีใบอนุญาต" แอบร้องเรียนคณะกรรมการ', zh: '🕵️ 举报："无照行医。"悄悄地向委员会投诉。' }, consequence: { en: '⚖️ Slow Burn. It takes a year, but she is eventually shut down. Many pets died in the meantime.', th: '⚖️ ช้าแต่ชัวร์ ใช้เวลาเป็นปี แต่สุดท้ายเธอก็โดนปิด มีสัตว์ตายไปหลายตัวระหว่างนั้น', zh: '⚖️ 缓慢燃烧。花了一年时间，但她最终还是倒闭了。在此期间，许多宠物死亡。' }, stats: { competence: 60, ethics: 80, leadership: 40, innovation: 0 } },
            { id: 'D', text: { en: '🤷 Ignore: "Science will prevail. When the crystals fail, they will come back." Wait it out.', th: '🤷 ปล่อยวาง: "วิทยาศาสตร์จะชนะ เมื่อคริสตัลไม่ได้ผล เดี๋ยวก็กลับมาเอง" รอไป', zh: '🤷 忽略："科学将战胜一切。当水晶失效时，他们会回来的。"以此等待。' }, consequence: { en: '⚰️ Tragic Corpses. They come back, but too late. "The oil didn\'t stop the tumor." Sad vindication.', th: '⚰️ ศพที่น่าเศร้า พวกเขากลับมา แต่สายไป "น้ำมันหยุดก้อนเนื้อไม่ได้" ชนะบนกองฟอน', zh: '⚰️ 悲惨的尸体。他们回来了，但太晚了。"油并没有阻止肿瘤。"悲伤的平反。' }, stats: { competence: 50, ethics: 30, leadership: 30, innovation: 0 } }
        ]
    },
    {
        id: 'vet_050',
        text: {
            en: '🎓 The Legacy: You have been a vet for 40 years. You are tired. A young, brilliant, but arrogant vet wants to take over. Or a big corporation makes an offer. Time to choose.',
            th: '🎓 ตำนาน: เป็นหมอมา 40 ปี เหนื่อยแล้ว สัตวแพทย์หนุ่มอัจฉริยะแต่หยิ่งอยากมาสานต่อ หรือจะขายให้นายทุนใหญ่ ถึงเวลาเลือก',
            zh: '🎓 遗产：你当了40年兽医。你累了。一位年轻、才华横溢但傲慢的兽医想接手。或者一家大公司提出了报价。是时候选择了。'
        },
        options: [
            { id: 'A', text: { en: '🧑‍🎓 Mentor the Kid: "I will sell to you, if you let me mentor you for 2 years. Teach you humility."', th: '🧑‍🎓 สอนเด็ก: "ฉันจะขายให้คุณ ถ้าคุณยอมให้ฉันสอนงาน 2 ปี สอนความถ่อมตน"', zh: '🧑‍🎓 指导孩子："如果你让我指导你2年，我就卖给你。教你谦以此逊。"' }, consequence: { en: '🌳 Roots. It is hard. You butt heads. But he grows into a great healer. Your legacy lives on.', th: '🌳 รากฐาน ยากนะ ทะเลาะกัน แต่เขาโตเป็นหมอที่ดี ตำนานคุณยังคงอยู่', zh: '🌳 根。很难。你们针锋相对。但他成长为一名伟大的治疗师。你的遗产得以延续。' }, stats: { competence: 80, ethics: 90, leadership: 100, innovation: 40 } },
            { id: 'B', text: { en: '🏢 Sell to Corp: "Take the money. I earned it. Good luck everyone." Cash out.', th: '🏢 ขายให้นายทุน: "เอาเงินมา ฉันสมควรได้รับ โชคดีทุกคน" รับทรัพย์', zh: '🏢 卖给公司："拿钱。这是我应得的。祝大家好运。"套现。' }, consequence: { en: '💰 Golden Sunset. You are rich. You travel the world. The clinic loses its soul. You try not to look back.', th: '💰 อาทิตย์อัสดงสีทอง รวย เที่ยวรอบโลก คลินิกจิตวิญญาณหาย คุณพยายามไม่มองกลับหลัง', zh: '💰 金色的日落。你有钱。你环游世界。诊所失去了灵魂。你试着不回头看。' }, stats: { competence: 50, ethics: 40, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🏥 Foundation: "Donate the clinic to a non-profit. Make it a teaching hospital." Give it away.', th: '🏥 มูลนิธิ: "บริจาคคลินิกให้องค์กรไม่แสวงผลกำไร ทำเป็นโรงพยาบาลสอน" ให้ฟรี', zh: '🏥 基金会："把诊所捐给非营利组织。把它变成教学医院。"捐以此赠。' }, consequence: { en: '🏛️ Immortal. You make no money, but your name is on the building. Generations of vets learn here.', th: '🏛️ อมตะ ไม่ได้เงิน แต่ชื่อติดตึก สัตวแพทย์หลายรุ่นเรียนที่นี่', zh: '🏛️ 不朽。你没赚到钱，但你的名字在楼上。几代兽医在这里学习。' }, stats: { competence: 60, ethics: 100, leadership: 90, innovation: 50 } },
            { id: 'D', text: { en: '🔄 Keep Working: "I will die in this exam room! I am not done!" Refuse retirement.', th: '🔄 ทำต่อ: "ฉันจะตายในห้องตรวจนี้! ฉันยังไม่จบ!" ไม่เกษียณ', zh: '🔄 继续工作："我会死在这个检查室里！我还没完！"拒绝退休。' }, consequence: { en: '☠️ The End. You work until the very end. You are beloved, but you never saw Paris. Was it worth it?', th: '☠️ จุดจบ คุณทำจนวันสุดท้าย คนรักคุณ แต่คุณไม่เคยเห็นปารีส คุ้มไหม?', zh: '☠️ 结局。你工作到最后一刻。你受人爱戴，但你从未见过巴黎。这值得吗？' }, stats: { competence: 100, ethics: 80, leadership: 60, innovation: 10 } }
        ]
    }
];

