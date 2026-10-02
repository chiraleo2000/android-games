export const marineBiologistQuestions = [
    {
        id: 'marine_001',
        text: {
            en: '🛢️ The Oil Spill: A tanker has run aground near a pristine coral reef you’ve studied for years. The company offers you a huge grant to lead their "independent" assessment team, but hints they expect favorable results.',
            th: '🛢️ น้ำมันรั่ว: เรือบรรทุกน้ำมันเกยตื้นใกล้แนวปะการังอันบริสุทธิ์ที่คุณศึกษามาหลายปี บริษัทนั้นเสนอเงินช่วยเหลือจำนวนมหาศาลให้คุณนำทีมประเมิน "อิสระ" ของพวกเขา แต่บอกใบ้ว่าพวกเขาคาดหวังผลลัพธ์ที่เป็นประโยชน์',
            zh: '🛢️ 石油泄漏：一艘油轮在你研究多年的原始珊瑚礁附近搁浅。该公司为你提供巨额资助，让你领导他们的"独立"评估团队，但暗示他们期望得到有利的结果。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Accept & Whitewash: "Take the money. Minimize the damage in the report. Use the funds to build a new research center."',
                    th: '🤝 รับเงินและฟอกขาว: "รับเงิน ลดความเสียหายในรายงาน ใช้เงินทุนเพื่อสร้างศูนย์วิจัยใหม่"',
                    zh: '🤝 接受并粉饰："拿钱。在报告中尽量减少损失。用这笔资金建立一个新的研究中心。"'
                },
                consequence: {
                    en: '🤑 Rich but Hated: You build a state-of-the-art lab, but the scientific community ostracizes you. The reef dies within 5 years.',
                    th: '🤑 รวยแต่ถูกเกลียดชัง: คุณสร้างห้องทดลองล้ำสมัย แต่ชุมชนวิทยาศาสตร์กีดกันคุณ แนวปะการังตายภายใน 5 ปี',
                    zh: '🤑 富有但被憎恨：你建了一个最先进的实验室，但科学界排斥你。珊瑚礁在5年内死亡。'
                },
                stats: { competence: 10, ethics: -50, leadership: -20, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '📢 Whistleblow: "Refuse the offer and go to the press immediately. Expose their attempt to bribe a scientist."',
                    th: '📢 แฉให้โลกรู้: "ปฏิเสธข้อเสนอและไปหาสื่อทันที เปิดเผยความพยายามของพวกเขาที่จะติดสินบนนักวิทยาศาสตร์"',
                    zh: '📢 吹哨："拒绝提议并立即去找媒体。揭露他们试图贿赂科学家。"'
                },
                consequence: {
                    en: '🗣️ Public Hero: You become the face of ocean conservation. Donations pour in, but the oil company sues you for defamation.',
                    th: '🗣️ ฮีโร่ของสาธารณชน: คุณกลายเป็นสัญลักษณ์ของการอนุรักษ์มหาสมุทร เงินบริจาคหลั่งไหลเข้ามา แต่บริษัทน้ำมันฟ้องคุณฐานหมิ่นประมาท',
                    zh: '🗣️ 公众英雄：你成为海洋保护的代言人。捐款涌入，但石油公司起诉你诽谤。'
                },
                stats: { competence: 20, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Double Agent: "Take the job, but collect real data. Release a scathing, accurate report at the press conference."',
                    th: '🕵️ สายลับสองหน้า: "รับงาน แต่เก็บข้อมูลจริง ปล่อยรายงานที่รุนแรงและแม่นยำในงานแถลงข่าว"',
                    zh: '🕵️ 双重间谍："接受这份工作，但收集真实数据。在新闻发布会上发布一份严厉、准确的报告。"'
                },
                consequence: {
                    en: '💥 Explosive Impact: The company is blindsided. Stock plunges. You are fired but hailed as a legend of integrity.',
                    th: '💥 ผลกระทบรุนแรง: บริษัทไม่ทันตั้งตัว หุ้นร่วงกราวรูด คุณถูกไล่ออกแต่ได้รับการยกย่องว่าเป็นตำนานแห่งความซื่อสัตย์',
                    zh: '💥 爆炸性影响：公司措手不及。股票暴跌。你被解雇了，通过但被誉为正直的传奇。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🧪 Independent Study: "Decline politely. Fund your own study with meager university budget. Publish quietly in a journal."',
                    th: '🧪 การศึกษาอิสระ: "ปฏิเสธอย่างสุภาพ ให้ทุนการศึกษาของคุณเองด้วยงบประมาณมหาวิทยาลัยอันน้อยนิด ตีพิมพ์เงียบๆ ในวารสาร"',
                    zh: '🧪 独立研究："礼貌拒绝。用微薄的大学预算资助你自己的研究。在期刊上悄悄发表。"'
                },
                consequence: {
                    en: '📄 Solid Science: Your paper is cited for decades as the definitive account. No fame, no fortune, just pure truth.',
                    th: '📄 วิทยาศาสตร์แข็งแกร่ง: บทความของคุณได้รับการอ้างอิงมาหลายทศวรรษว่าเป็นบัญชีที่แน่นอน ไม่มีชื่อเสียง ไม่มีความมั่งคั่ง มีเพียงความจริงล้วนๆ',
                    zh: '📄 扎实的科学：你的论文几十年来一直被引为权威。没有名声，没有财富，只有纯粹的真理。'
                },
                stats: { competence: 50, ethics: 30, leadership: 0, innovation: 10 }
            }
        ]
    },
    {
        id: 'marine_002',
        text: {
            en: '🦈 The Megalodon Myth: A blurry photo suggests a thought-extinct shark species exists in the deep trench. A TV network wants to fund a sensationalist documentary hunt for "The Monster."',
            th: '🦈 ตำนานเมกาโลดอน: ภาพถ่ายเบลอๆ บ่งชี้ว่าฉลามสายพันธุ์ที่คิดว่าสูญพันธุ์ไปแล้วยังมีชีวิตอยู่ในร่องลึกก้นสมุทร เครือข่ายทีวีต้องการให้ทุนทำสารคดีล่า "สัตว์ประหลาด" ที่เน้นความตื่นเต้น',
            zh: '🦈 巨齿鲨神话：一张模糊的照片表明深海海沟中存在一种被认为已灭绝的鲨鱼。一家电视网络想资助一部寻找"怪物"的哗众取宠的纪录片。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📺 Sell Out: "Host the show! Wave raw meat at the water! Scream at shadows! It pays for your lab for 10 years."',
                    th: '📺 ขายวิญญาณ: "เป็นพิธีกรรายการซะ! โบกเนื้อสดใส่น้ำ! กรีดร้องใส่เงา! มันจ่ายค่าแล็บของคุณได้ 10 ปีเลยนะ"',
                    zh: '📺 出卖："主持节目！向水中挥舞生肉！对着影子尖叫！这能支付你实验室10年的费用。"'
                },
                consequence: {
                    en: '🤡 Celebrity Scientist: You become famous but no serious journal will accept your papers. You are now an entertainer.',
                    th: '🤡 นักวิทยาศาสตร์ดารา: คุณมีชื่อเสียงแต่วารสารจริงจังจะไม่รับบทความของคุณ ตอนนี้คุณเป็นนักแสดงตลกแล้ว',
                    zh: '🤡 名人科学家：你成名了，但没有严肃的期刊会接受你的论文。你现在是个艺人了。'
                },
                stats: { competence: -10, ethics: -20, leadership: -10, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🔬 Scientific Expedition: "Accept the funding only if you have final cut and scientific control. Turn it into a real educational deep-sea mission."',
                    th: '🔬 การเดินทางทางวิทยาศาสตร์: "รับทุนเฉพาะในกรณีที่คุณมีสิทธิ์ตัดสินใจขั้นสุดท้ายและควบคุมทางวิทยาศาสตร์ เปลี่ยนมันเป็นภารกิจสำรวจทะเลลึกเพื่อการศึกษาอย่างแท้จริง"',
                    zh: '🔬 科学考察："只有在你拥有最终剪辑权和科学控制权的情况下才接受资助。把它变成真正的教育性深海任务。"'
                },
                consequence: {
                    en: '🎓 Edutainment Win: The show is less exciting but wins awards for cinematography and education. You discover 3 new jellyfish species.',
                    th: '🎓 ชนะใจทั้งสาระและบันเทิง: รายการตื่นเต้นน้อยลงแต่ได้รับรางวัลด้านการถ่ายภาพและการศึกษา คุณค้นพบแมงกะพรุนสายพันธุ์ใหม่ 3 ชนิด',
                    zh: '🎓 寓教于乐的胜利：节目不那么刺激，但赢得了摄影和教育奖项。你发现了3种新水母。'
                },
                stats: { competence: 30, ethics: 20, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🚫 Denounce It: "Publicly call the photo a fake. Explain why a 60-foot shark couldn\'t hide. Kill the hype with facts."',
                    th: '🚫 ประณามมัน: "ประกาศต่อสาธารณะว่าภาพถ่ายเป็นของปลอม อธิบายว่าทำไมฉลามขนาด 60 ฟุตถึงซ่อนตัวไม่ได้ ฆ่ากระแสด้วยความจริง"',
                    zh: '🚫 谴责它："公开称照片是假的。解释为什么一条60英尺长的鲨鱼藏不住。用事实扼杀炒作。"'
                },
                consequence: {
                    en: '🧊 Buzzkill: The TV network hates you. The public is bored. But your peers respect you for stopping pseudoscience.',
                    th: '🧊 ตัวขัดลาภ: เครือข่ายทีวีเกลียดคุณ ประชาชนเบื่อหน่าย แต่เพื่อนร่วมงานเคารพคุณที่หยุดความเชื่อผิดๆ ทางวิทยาศาสตร์',
                    zh: '🧊 扫兴：电视网络讨厌你。公众感到无聊。但你的同行尊重你阻止伪科学。'
                },
                stats: { competence: 20, ethics: 40, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🚢 Go Alone: "Ignore the TV offer. Take a small university boat and check it out yourself. Just in case."',
                    th: '🚢 ลุยเดี่ยว: "เมินข้อเสนอทีวี เอาเรือมหาวิทยาลัยลำเล็กไปตรวจดูด้วยตัวเอง เผื่อว่ามันจะมีจริง"',
                    zh: '🚢 独自前往："忽略电视提议。带一艘小型大学船自己去看看。以防万一。"'
                },
                consequence: {
                    en: '🌊 Empty Waters: You find nothing but old fishing nets. You wasted a month, but you slept well knowing you checked.',
                    th: '🌊 น่านน้ำว่างเปล่า: คุณไม่พบอะไรเลยนอกจากอวนจับปลาเก่าๆ คุณเสียเวลาไปหนึ่งเดือน แต่นอนหลับสบายที่รู้ว่าได้ตรวจสอบแล้ว',
                    zh: '🌊 空水域：除了旧渔网你什么也没发现。你浪费了一个月，但知道自己检查过了，睡得很香。'
                },
                stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 }
            }
        ]
    },
    {
        id: 'marine_003',
        text: {
            en: '🐢 The Plastic Patch: You\'ve engineered a bacteria that eats plastic in the ocean. Lab tests are 90% successful, but there\'s a 10% chance it mutates and eats boat hulls.',
            th: '🐢 แพขยะพลาสติก: คุณได้ดัดแปลงแบคทีเรียที่กินพลาสติกในมหาสมุทร การทดสอบในห้องปฏิบัติการประสบความสำเร็จ 90% แต่มีโอกาส 10% ที่มันจะกลายพันธุ์และกินตัวเรือ',
            zh: '🐢 塑料带：你设计了一种在海洋中吃塑料的细菌。实验室测试90%成功，但有10%的几率它会变异并吃掉船体。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Release It: "The ocean is dying NOW. We have to take the risk. Release the bacteria in the Pacific Garbage Patch!"',
                    th: '🚀 ปล่อยเลย: "มหาสมุทรกำลังจะตาย ตอนนี้ เราต้องเสี่ยง ปล่อยแบคทีเรียในแพขยะแปซิฟิก!"',
                    zh: '🚀 释放它："海洋正在此时此刻死去。我们必须冒险。在太平洋垃圾带释放细菌！"'
                },
                consequence: {
                    en: '🦠 Mutation Disaster! It eats the plastic... and then starts eating fiberglass boats. You are sued for billions in damages.',
                    th: '🦠 หายนะกลายพันธุ์! มันกินพลาสติก... แล้วเริ่มกินเรือไฟเบอร์กลาส คุณถูกฟ้องเรียกค่าเสียหายหลายพันล้าน',
                    zh: '🦠 变异灾难！它吃掉了塑料……然后开始吃玻璃纤维船。你因损害赔偿被起诉数十亿。'
                },
                stats: { competence: 30, ethics: -30, leadership: -40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🧪 Controlled Trial: "Fence off a small lagoon. Test it in a real but contained environment for 2 years first."',
                    th: '🧪 การทดลองแบบควบคุม: "กั้นทะเลสาบขนาดเล็ก ทดสอบในสภาพแวดล้อมจริงแบบจำกัดพื้นที่เป็นเวลา 2 ปีก่อน"',
                    zh: '🧪 对照试验："围出一个小泻湖。先在真实但受控的环境中测试2年。"'
                },
                consequence: {
                    en: '✅ Safe Success: You find the mutation trigger and fix it. 2 years late, but you save the oceans safely.',
                    th: '✅ ความสำเร็จที่ปลอดภัย: คุณพบตัวกระตุ้นการกลายพันธุ์และแก้ไขมัน ช้าไป 2 ปี แต่คุณช่วยมหาสมุทรได้อย่างปลอดภัย',
                    zh: '✅ 安全成功：你发现了变异触发因素并修复了它。晚了2年，但你安全地拯救了海洋。'
                },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🦠 Genetic Kill-Switch: "Delay release to engineer a \'kill-switch\' gene that kills the bacteria if exposed to a specific chemical."',
                    th: '🦠 สวิตช์ฆ่าทางพันธุกรรม: "ชะลอการปล่อยเพื่อสร้างยีน \'kill-switch\' ที่จะฆ่าแบคทีเรียหากสัมผัสกับสารเคมีเฉพาะ"',
                    zh: '🦠 基因自毁开关："推迟释放，设计一种\'自毁开关\'基因，如果暴露于特定化学物质，就会杀死细菌。"'
                },
                consequence: {
                    en: '🛡️ Engineering Marvel: The failsafe works. Even the skeptical governments approve the trial. Smart engineering.',
                    th: '🛡️ สิ่งมหัศจรรย์ทางวิศวกรรม: ระบบป้องกันความผิดพลาดทำงานได้ แม้แต่รัฐบาลที่สงสัยก็อนุมัติการทดลอง วิศวกรรมที่ชาญฉลาด',
                    zh: '🛡️ 工程奇迹：故障安全装置奏效了。即使持怀疑态度的政府也批准了试验。聪明的工程。'
                },
                stats: { competence: 50, ethics: 30, leadership: 30, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🗑️ Abandon Project: "Too risky. We can\'t risk creating a bio-weapon. Destroy the samples and focus on mechanical cleanup."',
                    th: '🗑️ ทิ้งโปรเจกต์: "เสี่ยงเกินไป เราไม่สามารถเสี่ยงสร้างอาวุธชีวภาพได้ ทำลายตัวอย่างและมุ่งเน้นไปที่การทำความสะอาดด้วยเครื่องจักร"',
                    zh: '🗑️ 放弃项目："太冒险了。我们不能冒险制造生物武器。销毁样本，专注于机械清理。"'
                },
                consequence: {
                    en: '📉 Status Quo: The plastic remains. Mechanical cleanup is too slow. You played it safe, but the problem gets worse.',
                    th: '📉 สถานะเดิม: พลาสติกยังคงอยู่ การทำความสะอาดด้วยเครื่องจักรช้าเกินไป คุณเล่นเพลย์เซฟ แต่ปัญหาเลวร้ายลง',
                    zh: '📉 现状：塑料还在。机械清理太慢了。你求稳，但问题变得更糟。'
                },
                stats: { competence: 0, ethics: 20, leadership: -10, innovation: -20 }
            }
        ]
    },
    {
        id: 'marine_004',
        text: {
            en: '⛏️ Deep Sea Dilemma: A mining corporation discovers a rare earth metal deposit near a unique hydrothermal vent ecosystem you discovered. They promise to use "green tech" that minimizes damage and to fund your research forever.',
            th: '⛏️ ภาวะกลืนไม่เข้าคายไม่ออกในทะเลลึก: บริษัทเหมืองแร่ค้นพบแหล่งแร่ธาตุหายากใกล้ระบบนิเวศปล่องน้ำพุร้อนที่คุณค้นพบ พวกเขาสัญญาว่าจะใช้ "เทคโนโลยีสีเขียว" ที่ลดความเสียหายและให้ทุนวิจัยของคุณตลอดไป',
            zh: '⛏️ 深海两难：一家矿业公司在你发现的独特热液喷口生态系统附近发现了稀土金属矿床。他们承诺使用尽量减少损害的"绿色技术"，并永远资助你的研究。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Block Them: "Use your discovery to designate the area as a protected Marine Reserve. No mining allowed!"',
                    th: '🛑 ขัดขวางพวกเขา: "ใช้การค้นพบของคุณเพื่อกำหนดให้พื้นที่นี้เป็นเขตสงวนทางทะเล ห้ามทำเหมืองเด็ดขาด!"',
                    zh: '🛑 阻止他们："利用你的发现将该区域指定为受保护的海洋保护区。禁止采矿！"'
                },
                consequence: {
                    en: '🛡️ Nature Saved: The vents are safe. The company moves elsewhere. You have no money, but the worms and crabs are alive.',
                    th: '🛡️ ธรรมชาติรอดพ้น: ปล่องน้ำพุร้อนปลอดภัย บริษัทไปที่อื่น คุณไม่มีเงิน แต่หนอนและปูยังมีชีวิตอยู่',
                    zh: '🛡️ 大自然得救了：喷口是安全的。公司搬到了别处。你没钱，但蠕虫和螃蟹还活着。'
                },
                stats: { competence: 20, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Collaborator: "Work with them. If we guide the mining, we can save 80% of the vents and get the precious metals needed for electric cars."',
                    th: '🤝 ผู้ร่วมมือ: "ทำงานกับพวกเขา ถ้าเราชี้นำการทำเหมือง เราสามารถรักษาปล่องน้ำพุร้อนได้ 80% และได้โลหะมีค่าสำหรับรถยนต์ไฟฟ้า"',
                    zh: '🤝 合作者："与他们合作。如果我们指导采矿，我们可以拯救80%的喷口，并获得电动汽车所需的贵金属。"'
                },
                consequence: {
                    en: '⚖️ Difficult Balance: It works mostly. Some species die, but the funding leads to breakthroughs in deep-sea biology. A pragmatic win.',
                    th: '⚖️ ความสมดุลที่ยากลำบาก: มันได้ผลส่วนใหญ่ บางสายพันธุ์ตาย แต่เงินทุนนำไปสู่การค้นพบครั้งสำคัญในชีววิทยาทะเลลึก ชัยชนะแบบปฏิบัติจริง',
                    zh: '⚖️艰难的平衡：基本上行得通。一些物种灭绝了，但资金带来了深海生物学的突破。务实的胜利。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '💰 Silent Partner: "Let them mine. Sign the NDA. Take the money. The vents are doomed anyway due to ocean acidification."',
                    th: '💰 หุ้นส่วนเงียบ: "ปล่อยให้พวกเขาทำเหมือง เซ็นสัญญา NDA รับเงิน ปล่องน้ำพุร้อนก็ไม่รออยู่แล้วเพราะความเป็นกรดของมหาสมุทร"',
                    zh: '💰 沉默的合作伙伴："让他们通过。签署保密协议。拿钱。反正因为海洋酸化，喷口也难逃厄运。"'
                },
                consequence: {
                    en: '🌪️ Environmental Ruin: They destroy everything. The silt plume kills reefs miles away. You watch from your expensive yacht with regret.',
                    th: '🌪️ หายนะสิ่งแวดล้อม: พวกเขาทำลายทุกอย่าง ตะกอนฆ่าปะการังห่างออกไปหลายไมล์ คุณมองดูจากเรือยอทช์ราคาแพงด้วยความเสียใจ',
                    zh: '🌪️ 环境破坏：他们摧毁了一切。淤泥羽流杀死了几英里外的珊瑚礁。你带着遗憾坐在昂贵的游艇上看着。'
                },
                stats: { competence: 0, ethics: -40, leadership: -20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔬 Relocation Project: "Propose a radical plan to transplant the core species to a new vent system before mining starts."',
                    th: '🔬 โครงการย้ายถิ่น: "เสนอแผนการสุดโต่งเพื่อย้ายสายพันธุ์หลักไปยังระบบปล่องน้ำพุร้อนใหม่ก่อนเริ่มทำเหมือง"',
                    zh: '🔬 搬迁项目："提出一个激进的计划，在采矿开始前将核心物种移植到新的喷口系统。"'
                },
                consequence: {
                    en: '🧪 Risky Rescue: Only 50% survive the transplant. It\'s better than extinction, but critics call you "Noah of the Deep."',
                    th: '🧪 การช่วยเหลือที่เสี่ยง: มีเพียง 50% ที่รอดชีวิตจากการย้าย มันดีกว่าสูญพันธุ์ แต่นักวิจารณ์เรียกคุณว่า "โนอาห์แห่งทะเลลึก"',
                    zh: '🧪 冒险救援：只有50%在移植中幸存。这总比灭绝好，但批评者称你为"深海诺亚"。'
                },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'marine_005',
        text: {
            en: '🐋 The Whaler: You are on a small research vessel in international waters. You spot an illegal whaling ship harpooning a mother whale. You have a radio and a flare gun. The nearest coast guard is days away.',
            th: '🐋 นักล่าปลาวาฬ: คุณอยู่บนเรือวิจัยขนาดเล็กในน่านน้ำสากล คุณเห็นเรือล่าวาฬผิดกฎหมายกำลังยิงฉมวกใส่แม่วาฬ คุณมีวิทยุและปืนยิงพลุ หน่วยยามฝั่งที่ใกล้ที่สุดอยู่ห่างออกไปหลายวัน',
            zh: '🐋 捕鲸者：你在一艘处于国际水域的小型科考船上。你发现一艘非法捕鲸船正在对一头母鲸发射鱼叉。你有无线电和信号枪。最近的海岸警卫队在几天路程之外。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚔️ Intercept: "Ramming speed! Position our small boat between the harpoon and the whale. Block their shot physically!"',
                    th: '⚔️ สกัดกั้น: "เร่งความเร็วข้าชน! เอาเรือเล็กของเราไปขวางระหว่างฉมวกกับปลาวาฬ บังวิถียิงด้วยตัวเราเอง!"',
                    zh: '⚔️ 拦截："全速撞击！把我们的小船停在鱼叉和鲸鱼之间。用身体挡住他们的射击！"'
                },
                consequence: {
                    en: '🛡️ Brave & Broken: The whalers hesitate and turn away. But your boat is damaged in the maneuver. You are a global viral hero.',
                    th: '🛡️ กล้าหาญและพังยับ: นักล่าวาฬลังเลและหันหัวเรือกลับ แต่เรือของคุณเสียหายจากการเคลื่อนไหว คุณกลายเป็นฮีโร่ไวรัลระดับโลก',
                    zh: '🛡️ 勇敢与破碎：捕鲸者犹豫了，转身离开。但你的船在机动中受损。你是全球病毒式传播的英雄。'
                },
                stats: { competence: 10, ethics: 50, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '📹 Record Everything: "Stay back. Use the drone to film their faces, the ship name, and the act. Upload it via satellite." ',
                    th: '📹 บันทึกทุกอย่าง: "ถอยออกมา ใช้โดรนถ่ายหน้าพวกเขา ชื่อเรือ และการกระทำ อัปโหลดผ่านดาวเทียม"',
                    zh: '📹 记录一切："退后。用无人机拍摄他们的脸、船名和行为。通过卫星上传。"'
                },
                consequence: {
                    en: '⚖️ Justice Served: The video leads to international sanctions. The captain is arrested at port. You used data as a weapon.',
                    th: '⚖️ ความยุติธรรมทำงาน: วิดีโอนำไปสู่การคว่ำบาตรระหว่างประเทศ กัปตันถูกจับที่ท่าเรือ คุณใช้ข้อมูลเป็นอาวุธ',
                    zh: '⚖️ 正义伸张：视频导致了国际制裁。船长在港口被捕。你把数据当作武器。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🔥 Flare Attack: "Fire the flare gun onto their deck! Maybe start a small fire to distract them. It\'s technically piracy..."',
                    th: '🔥 โจมตีด้วยพลุ: "ยิงปืนพลุขึ้นไปบนดาดฟ้าเรือของพวกเขา! อาจทำให้เกิดไฟไหม้เล็กน้อยเพื่อเบี่ยงเบนความสนใจ ทางเทคนิคแล้วมันคือโจรสลัด..."',
                    zh: '🔥 信号弹攻击："把信号枪射到他们的甲板上！也许生点小火来分散他们的注意力。从技术上讲这是海盗行为……"'
                },
                consequence: {
                    en: '🏴‍☠️ Dangerous Escalation: It works, the whale escapes. But they fire water cannons back. You are arrested for attacking a ship.',
                    th: '🏴‍☠️ การยกระดับที่อันตราย: มันได้ผล ปลาวาฬหนีไป แต่พวกเขายิงปืนฉีดน้ำตอบโต้ คุณถูกจับข้อหาโจมตีเรือ',
                    zh: '🏴‍☠️ 危险升级：奏效了，鲸鱼逃脱了。但他们用水炮回击。你因攻击船只而被捕。'
                },
                stats: { competence: 20, ethics: 10, leadership: 30, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '📻 Radio Warning: "Bluff them. \'This is Coast Guard Vessel 101, weapons armed. Disengage immediately.\'"',
                    th: '📻 วิทยุเตือน: "บลัฟพวกเขา \'นี่คือเรือยามฝั่ง 101 อาวุธพร้อม ยุติการกระทำทันที\'"',
                    zh: '📻 无线电警告："虚张声势。\'这是海岸警卫队101号船，武器已准备就绪。立即脱离接触。\'"'
                },
                consequence: {
                    en: '🙄 Called Bluff: They see your tiny boat and laugh. They kill the whale while you watch. You feel powerless.',
                    th: '🙄 โดนจับได้: พวกเขาเห็นเรือลำจิ๋วของคุณแล้วหัวเราะ พวกเขาฆ่าปลาวาฬต่อหน้าต่อตาคุณ คุณรู้สึกไร้พลัง',
                    zh: '🙄 虚张声势被揭穿：他们看到你的小船并大笑。他们在你看着的时候杀死了鲸鱼。你感到无能为力。'
                },
                stats: { competence: -10, ethics: 10, leadership: -20, innovation: 10 }
            }
        ]
    },
    {
        id: 'marine_006',
        text: {
            en: '🪸 Coral Bleaching Crisis: Your research shows 90% of the reef will be dead in 5 years. You can: publish doom (accurate), test experimental super-coral (unproven), lobby for emissions cuts (political), or relocate species (expensive).',
            th: '🪸 วิกฤตปะการังฟอกขาว: การวิจัยของคุณแสดงว่า 90% ของแนวปะการังจะตายใน 5 ปี คุณสามารถ: เผยแพร่ข่าวร้าย (ถูกต้อง), ทดสอบปะการังซูเปอร์ทดลอง (ไม่พิสูจน์)',
            zh: '🪸 珊瑚白化危机：你的研究显示90%的珊瑚礁将在5年内死亡。你可以：发布厄运（准确），测试实验性超级珊瑚（未证实），游说削减排放（政治），或迁移物种（昂贵）。'
        },
        options: [
            { id: 'A', text: { en: '📢 Publish Doom: "The truth is the reef is dying. Public must know. Peer-reviewed paper, no sugar-coating."', th: '📢 เผยแพร่ข่าวร้าย', zh: '📢 发布厄运' }, consequence: { en: '😰 Panic Without Solutions. People feel helpless. Tourism industry collapses early. No one knows what to do.', th: '😰 ตื่นตระหนกโดยไม่มีทางแก้', zh: '😰 恐慌无解。' }, stats: { competence: 40, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🧬 Super-Coral Experiment: "Gene-edit heat-resistant coral. It might save the reef or create an invasive nightmare."', th: '🧬 ทดลองปะการังซูเปอร์', zh: '🧬 超级珊瑚实验' }, consequence: { en: '🌊 Genetic Gamble! The super-coral thrives and spreads, outcompeting native species. Ecosystem transformed.', th: '🌊 การพนันทางพันธุกรรม!', zh: '🌊 基因赌博！' }, stats: { competence: 30, ethics: -10, leadership: 30, innovation: 50 } },
            { id: 'C', text: { en: '🏛️ Political Lobbying: "Spend 5 years lobbying for emission cuts. Reef dies during negotiations."', th: '🏛️ ล็อบบี้การเมือง', zh: '🏛️ 政治游说' }, consequence: { en: '⏳ Too Late. Policy changes take 10 years. The reef dies before implementation.', th: '⏳ สายเกินไป', zh: '⏳ 太晚了。' }, stats: { competence: 20, ethics: 30, leadership: 40, innovation: 0 } },
            { id: 'D', text: { en: '🚢 Species Relocation: "Move healthy coral to cooler waters. Build artificial reefs as lifeboats."', th: '🚢 ย้ายสายพันธุ์', zh: '🚢 物种迁移' }, consequence: { en: '🏗️ Ark Project Success! 40% of biodiversity saved. New reef ecosystems established in cooler zones.', th: '🏗️ ความสำเร็จโครงการหีบ!', zh: '🏗️ 方舟项目成功！' }, stats: { competence: 50, ethics: 35, leadership: 45, innovation: 45 } }
        ]
    },
    {
        id: 'marine_007',
        text: {
            en: '🦈 Shark Cull Debate: After a tourist is killed, the government orders a shark cull. You know culls do not reduce attacks. Do you: stay silent (safe), oppose publicly (risky), offer tracking alternative (expensive), or fake support?',
            th: '🦈 การถกเถียงการคัดฉลาม: หลังจากนักท่องเที่ยวถูกฆ่า รัฐบาลสั่งคัดฉลาม คุณรู้ว่าการคัดไม่ลดการโจมตี',
            zh: '🦈 鲨鱼扑杀辩论：一名游客被杀后，政府下令扑杀鲨鱼。你知道扑杀不会减少攻击。你是：保持沉默（安全），公开反对（冒险），提供跟踪替代方案（昂贵），还是假装支持？'
        },
        options: [
            { id: 'A', text: { en: '🤐 Stay Silent: "Not my fight. I study fish, not politics."', th: '🤐 เงียบ', zh: '🤐 保持沉默' }, consequence: { en: '😔 Coward. 500 sharks killed. Other scientists call you out for not using your expertise when it mattered.', th: '😔 ขี้ขลาด', zh: '😔 懦夫。' }, stats: { competence: 10, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '📢 Public Opposition: "Shark culls are scientifically useless. I testify against the policy."', th: '📢 ต่อต้านสาธารณะ', zh: '📢 公开反对' }, consequence: { en: '🎯 Brave Stand! You are vilified by politicians but vindicated when attacks continue post-cull.', th: '🎯 การยืนหยัดกล้าหาญ!', zh: '🎯 勇敢立场！' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🏷️ Tagging Program: "Offer to tag sharks with real-time trackers. Beach alerts when sharks near. $2M cost."', th: '🏷️ โปรแกรมแท็ก', zh: '🏷️ 标记计划' }, consequence: { en: '📡 High-Tech Win! Government funds it. Attacks drop 80% with zero sharks killed. Nobel potential.', th: '📡 ชัยชนะไฮเทค!', zh: '📡 高科技胜利！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '🎭 Fake Support: "Publicly support the cull but secretly sabotage the operation."', th: '🎭 สนับสนุนปลอม', zh: '🎭 假装支持' }, consequence: { en: '🚨 Caught! Whistleblower exposes your double game. You are fired for insubordination.', th: '🚨 ถูกจับได้!', zh: '🚨 被抓！' }, stats: { competence: 0, ethics: -40, leadership: -50, innovation: 10 } }
        ]
    },
    {
        id: 'marine_008',
        text: {
            en: '🌊 Deep-Sea Mining: A corporation wants to mine rare metals from the ocean floor. They offer you $10M to conduct an environmental impact study. You know the study will be used to justify mining regardless of findings.',
            th: '🌊 การทำเหมืองใต้ท้องทะเลลึก: บริษัทต้องการขุดโลหะหายากจากพื้นมหาสมุทร พวกเขาเสนอ 10 ล้านเหรียญให้ทำการศึกษาผลกระทบสิ่งแวดล้อม',
            zh: '🌊 深海采矿：一家公司想从海床开采稀有金属。他们提供1000万美元让你进行环境影响研究。你知道无论研究结果如何，都会被用来证明采矿的合理性。'
        },
        options: [
            { id: 'A', text: { en: '💰 Take the Money: "Do the study honestly. If the data says no, they have to listen."', th: '💰 รับเงิน', zh: '💰 拿钱' }, consequence: { en: '📋 Ignored Science! Your damning report is buried. They mine anyway. You financed opposition with their money though.', th: '📋 วิทยาศาสตร์ถูกเพิกเฉย!', zh: '📋 科学被忽视！' }, stats: { competence: 30, ethics: -10, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🚫 Refuse Firmly: "I will not legitimize destruction. Do not contact me again."', th: '🚫 ปฏิเสธแน่วแน่', zh: '🚫 坚决拒绝' }, consequence: { en: '🎖️ Integrity Intact. They hire a less ethical scientist who rubber-stamps approval. You kept your soul.', th: '🎖️ ความซื่อตรงยังคงอยู่', zh: '🎖️ 正直完整。' }, stats: { competence: 20, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Counter-Offer: "I will do it for free IF you commit to halt mining if I find critical habitat."', th: '🤝 เสนอย้อนกลับ', zh: '🤝 反提议' }, consequence: { en: '⚖️ Binding Agreement! They sign. You find endemic species. Mining halted. Legal victory!', th: '⚖️ ข้อตกลงผูกมัด!', zh: '⚖️ 有约束力的协议！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 35 } },
            { id: 'D', text: { en: '🎬 Public Shaming: "Reject them publicly and call them out on social media for environmental crimes."', th: '🎬 ทำให้อับอายต่อสาธารณะ', zh: '🎬 公开羞辱' }, consequence: { en: '🔥 Backlash! They sue you for defamation. You cannot prove pre-crime. Lose $500K in legal fees.', th: '🔥 ปฏิกิริยาย้อนกลับ!', zh: '🔥 反弹！' }, stats: { competence: 10, ethics: 20, leadership: -10, innovation: 20 } }
        ]
    },
    {
        id: 'marine_009',
        text: {
            en: '🐢 Turtle Tracking Dilemma: Your GPS trackers on endangered turtles reveal they migrate through waters controlled by pirates. Publishing the data could help conservation or endanger fishermen.',
            th: '🐢 ภาวะที่กลืนไม่เข้าคายไม่ออกของการติดตามเต่า: GPS ติดตามเต่าที่ใกล้สูญพันธุ์ของคุณเปิดเผยว่าพวกมันอพยพผ่านน่านน้ำที่โจรสลัดควบคุม',
            zh: '🐢 海龟追踪困境：你在濒危海龟身上的GPS追踪器显示它们穿越海盗控制的水域迁徙。发布数据可能有助于保护或危及渔民。'
        },
        options: [
            { id: 'A', text: { en: '📊 Publish Everything: "Science must be open. The data is public regardless of risks."', th: '📊 เผยแพร่ทุกอย่าง', zh: '📊 发布一切' }, consequence: { en: '🎣 Pirate Fishing! They use your data to find turtle nesting sites and poach eggs. Populations crash.', th: '🎣 การตกปลาของโจรสลัด!', zh: '🎣 海盗捕鱼！' }, stats: { competence: 20, ethics: -20, leadership: 10, innovation: 30 } },
            { id: 'B', text: { en: '🔒 Redact Locations: "Publish migration patterns but blur exact coordinates. Protect specific sites."', th: '🔒 ซ่อนตำแหน่ง', zh: '🔒 编辑位置' }, consequence: { en: '⚖️ Balanced Approach. Conservation groups get enough data to help. Pirates cannot exploit it.', th: '⚖️ แนวทางสมดุล', zh: '⚖️ 平衡方法。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '🤝 Partner with Navy: "Share data with coast guard. Military escorts for fishing boats in turtle corridors."', th: '🤝 เป็นพันธมิตรกับกองทัพเรือ', zh: '🤝 与海军合作' }, consequence: { en: '🛡️ Armed Protection! Piracy drops 90%. Turtles and fishermen both protected. Win-win!', th: '🛡️ การป้องกันติดอาวุธ!', zh: '🛡️ 武装保护！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🤐 Suppress Data: "Too dangerous. Keep findings classified. Protect human lives first."', th: '🤐 ปิดกั้นข้อมูล', zh: '🤐 隐瞒数据' }, consequence: { en: '📉 Science Suppressed. Other researchers cannot build on your work. Turtle conservation stalls for years.', th: '📉 วิทยาศาสตร์ถูกปราบปราม', zh: '📉 科学被压制。' }, stats: { competence: 10, ethics: 20, leadership: -10, innovation: -20 } }
        ]
    },
    {
        id: 'marine_010',
        text: {
            en: '🦑 Giant Squid Discovery: You capture the first live giant squid. It is injured. Options: release (dies), euthanize (ethical), study in captivity (cruel but scientifically valuable), or sell to aquarium (profitable).',
            th: '🦑 การค้นพบปลาหมึกยักษ์: คุณจับปลาหมึกยักษ์ตัวแรกที่มีชีวิต มันบาดเจ็บ ตัวเลือก: ปล่อย (ตาย), การุณยฆาต (จริยธรรม), ศึกษาในกรง (โหดร้ายแต่มีคุณค่าทางวิทยาศาสตร์)',
            zh: '🦑 巨型鱿鱼发现：你捕获了第一只活体巨型鱿鱼。它受伤了。选项：释放（死亡），安乐死（道德），圈养研究（残忍但有科学价值），或卖给水族馆（有利可图）。'
        },
        options: [
            { id: 'A', text: { en: '🌊 Release Immediately: "It belongs in the ocean. Release it and hope for the best."', th: '🌊 ปล่อยทันที', zh: '🌊 立即释放' }, consequence: { en: '💀 Dead in Hours. The injury was fatal. You gained nothing. Opportunity wasted.', th: '💀 ตายในเวลาชั่วโมง', zh: '💀 几小时后死亡。' }, stats: { competence: 10, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '💉 Humane Euthanasia: "Its suffering is more important than our curiosity. End it painlessly."', th: '💉 การุณยฆาต', zh: '💉 人道安乐死' }, consequence: { en: '🕊️ Compassionate Choice. Tissue samples taken. Some research value. Ethicists praise you.', th: '🕊️ ทางเลือกที่เห็นอกเห็นใจ', zh: '🕊️ 富有同情心的选择。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '🔬 Study Alive: "This is a once-in-a-lifetime chance. Keep it alive for 72 hours of intensive study."', th: '🔬 ศึกษาขณะมีชีวิต', zh: '🔬 活体研究' }, consequence: { en: '📚 Breakthrough Data! You learn secrets of deep-sea biology. But the squid dies in agony. Mixed legacy.', th: '📚 ข้อมูลความก้าวหน้า!', zh: '📚 突破性数据！' }, stats: { competence: 50, ethics: -20, leadership: 30, innovation: 50 } },
            { id: 'D', text: { en: '💰 Sell to Aquarium: "They offer $2M. They have better facilities to keep it alive long-term."', th: '💰 ขายให้พิพิธภัณฑ์สัตว์น้ำ', zh: '💰 卖给水族馆' }, consequence: { en: '🎪 Spectacle Over Science. It dies in 3 days in captivity. You are called a sellout. Research community shuns you.', th: '🎪 การแสดงเหนือวิทยาศาสตร์', zh: '🎪 奇观胜过科学。' }, stats: { competence: 0, ethics: -40, leadership: -30, innovation: -10 } }
        ]
    },
    {
        id: 'marine_011',
        text: {
            en: '🏝️ Island Rat Eradication: An island has invasive rats destroying seabird colonies. Poison will kill rats but also some native species. Do nothing and birds go extinct. What is your call?',
            th: '🏝️ การกำจัดหนูบนเกาะ: เกาะมีหนูรุกรานทำลายอาณานิคมนกทะเล ยาพิษจะฆ่าหนูแต่ก็รวมถึงสายพันธุ์พื้นเมืองบางชนิด ไม่ทำอะไรนกจะสูญพันธุ์',
            zh: '🏝️ 岛屿灭鼠：一个岛屿上的入侵老鼠正在摧毁海鸟栖息地。毒药会杀死老鼠但也会杀死一些本地物种。什么都不做，鸟类会灭绝。你的决定是什么？'
        },
        options: [
            { id: 'A', text: { en: '☠️ Full Poison Drop: "Aerial poison bombing. Accept collateral damage. Greater good."', th: '☠️ ทิ้งยาพิษเต็มรูปแบบ', zh: '☠️ 完全投毒' }, consequence: { en: '🐦 Mission Accomplished! Rats eliminated. 15% of native lizards die but seabird colonies rebound.', th: '🐦 ภารกิจสำเร็จ!', zh: '🐦 任务完成！' }, stats: { competence: 40, ethics: 20, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '🪤 Traps Only: "Manual trapping. Labor-intensive but no poison. Takes 5 years instead of 1."', th: '🪤 กับดักเท่านั้น', zh: '🪤 仅陷阱' }, consequence: { en: '⏳ Too Slow! By year 3, the last seabird dies. You were too cautious. Extinction on your watch.', th: '⏳ ช้าเกินไป!', zh: '⏳ 太慢了！' }, stats: { competence: 15, ethics: 40, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🧬 Genetic Modification: "Release gene-drive rats that make offspring infertile. Rats gone in 3 generations."', th: '🧬 การดัดแปลงพันธุกรรม', zh: '🧬 基因改造' }, consequence: { en: '🧪 Risky Innovation! It works! Rats gone with zero collateral. But you unleashed gene drive in the wild.', th: '🧪 นวัตกรรมที่เสี่ยง!', zh: '🧪 冒险创新！' }, stats: { competence: 50, ethics: 10, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🐱 Feral Cats: "Import sterilized feral cats. They will hunt rats naturally."', th: '🐱 แมวป่า', zh: '🐱 野猫' }, consequence: { en: '🙀 Disaster! Cats prefer birds over rats. You just introduced a second invasive predator.', th: '🙀 ภัยพิบัติ!', zh: '🙀 灾难！' }, stats: { competence: -20, ethics: -30, leadership: -20, innovation: 10 } }
        ]
    },
    {
        id: 'marine_012',
        text: {
            en: '🎣 Sustainable Fishing Certification: A fishing company wants your certification for "sustainable" practices. They meet minimum standards but you know they lobby against stronger regulations.',
            th: '🎣 การรับรองประมงยั่งยืน: บริษัทประมงต้องการการรับรองสำหรับการปฏิบัติ "ยั่งยืน" พวกเขาตรงตามมาตรฐานขั้นต่ำแต่คุณรู้ว่าพวกเขาล็อบบี้ต่อต้านกฎระเบียบที่เข้มงวด',
            zh: '🎣 可持续捕鱼认证：一家渔业公司想要你对"可持续"做法的认证。他们符合最低标准，但你知道他们游说反对更严格的法规。'
        },
        options: [
            { id: 'A', text: { en: '✅ Certify Them: "They meet the written criteria. My job is to apply standards, not judge politics."', th: '✅ รับรองพวกเขา', zh: '✅ 认证他们' }, consequence: { en: '🏷️ Letter of the Law. They use your seal to greenwash. Your certification becomes meaningless.', th: '🏷️ ตัวอักษรของกฎหมาย', zh: '🏷️ 法律条文。' }, stats: { competence: 20, ethics: -20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🚫 Deny Certification: "You meet minimums but your lobbying undermines ocean health. Denied."', th: '🚫 ปฏิเสธการรับรอง', zh: '🚫 拒绝认证' }, consequence: { en: '⚖️ Principled Stand! They sue for breach of contract. You win in court. Your standards become industry gold standard.', th: '⚖️ การยืนหยัดตามหลักการ!', zh: '⚖️ 有原则的立场！' }, stats: { competence: 45, ethics: 50, leadership: 45, innovation: 20 } },
            { id: 'C', text: { en: '🤝 Conditional Approval: "Certified for 1 year IF you stop lobbying against regulations."', th: '🤝 การอนุมัติแบบมีเงื่อนไข', zh: '🤝 有条件批准' }, consequence: { en: '🎯 Strategic Leverage! They agree. Within 2 years, stronger regs pass. Your leverage worked.', th: '🎯 การใช้ประโยชน์เชิงกลยุทธ์!', zh: '🎯 战略杠杆！' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 35 } },
            { id: 'D', text: { en: '💰 Raise the Bar: "I will certify you IF you exceed standards by 50%. Aspirational certification."', th: '💰 ยกระดับมาตรฐาน', zh: '💰 提高标准' }, consequence: { en: '📈 Industry Transformation! They invest heavily and succeed. Others follow to compete. Ocean health improves.', th: '📈 การเปลี่ยนแปลงอุตสาหกรรม!', zh: '📈 行业转型！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 40 } }
        ]
    },
    {
        id: 'marine_013',
        text: {
            en: '🧊 Arctic Research Station: Your climate data shows the Arctic will be ice-free in 10 years. Oil companies want to drill there immediately. Environmentalists want a total ban. You are the tie-breaking expert.',
            th: '🧊 สถานีวิจัยอาร์กติก: ข้อมูลสภาพอากาศของคุณแสดงว่าอาร์กติกจะปราศจากน้ำแข็งใน 10 ปี บริษัทน้ำมันต้องการขุดทันที',
            zh: '🧊 北极研究站：你的气候数据显示北极将在10年内无冰。石油公司想立即在那里钻探。环保主义者想要全面禁止。你是决定性的专家。'
        },
        options: [
            { id: 'A', text: { en: '⛽ Allow Drilling: "It is melting anyway. Extract resources before they are underwater. Tax revenue funds green tech."', th: '⛽ อนุญาตขุด', zh: '⛽ 允许钻探' }, consequence: { en: '🌡️ Acceleration! Drilling speeds Arctic melt 2x. Feedback loops trigger. You enabled a tipping point.', th: '🌡️ การเร่ง!', zh: '🌡️ 加速！' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: 20 } },
            { id: 'B', text: { en: '🚫 Total Ban: "This is sacred ground. No drilling ever. Declare it a protected zone."', th: '🚫 ห้ามสมบูรณ์', zh: '🚫 全面禁止' }, consequence: { en: '🏔️ Sanctuary Created! Arctic becomes off-limits. But Russia and China ignore the ban. Only Western companies comply.', th: '🏔️ สร้างเขตรักษาพันธุ์!', zh: '🏔️ 保护区建立！' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '⚖️ Compromise: "Limited drilling in 30% of area IF 70% becomes permanent wildlife refuge."', th: '⚖️ ประนีประนอม', zh: '⚖️ 妥协' }, consequence: { en: '🤝 Pragmatic Deal. Both sides hate it. But the refuge protects critical habitat while providing some revenue.', th: '🤝 ข้อตกลงปันผลสมบูรณ์', zh: '🤝 务实交易。' }, stats: { competence: 40, ethics: 25, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🔬 Science First: "Delay decision 5 years. Fund massive research to understand impacts fully before acting."', th: '🔬 วิทยาศาสตร์ก่อน', zh: '🔬 科学第一' }, consequence: { en: '⏳ Analysis Paralysis! By year 5, ice is gone. Window for prevention closed. Both outcomes happened anyway.', th: '⏳ การวิเคราะห์เป็นอัมพาต!', zh: '⏳ 分析瘫痪！' }, stats: { competence: 25, ethics: 20, leadership: -10, innovation: 30 } }
        ]
    },
    {
        id: 'marine_014',
        text: {
            en: '🦀 Crab Population Crash: A keystone crab species population crashed 95%. Cause unknown. Could be warming, disease, overfishing, or pollution. You have funding for ONE research focus.',
            th: '🦀 ประชากรปูล่มสลาย: ประชากรปูสายพันธุ์หลักลดลง 95% สาเหตุไม่ทราบ อาจเป็นภาวะโลกร้อน, โรค, การจับมากเกินไป, หรือมลพิษ',
            zh: '🦀 螃蟹种群崩溃：一个关键螃蟹物种的种群崩溃了95%。原因不明。可能是变暖、疾病、过度捕捞或污染。你有一个研究重点的资金。'
        },
        options: [
            { id: 'A', text: { en: '🌡️ Climate Focus: "It is warming. Study temperature tolerance and adaptation potential."', th: '🌡️ มุ่งเน้นสภาพอากาศ', zh: '🌡️ 气候重点' }, consequence: { en: '❌ Wrong Guess! It was actually disease. By the time you pivot, the species is extinct.', th: '❌ เดาผิด!', zh: '❌ 猜错了！' }, stats: { competence: 10, ethics: 20, leadership: 10, innovation: 20 } },
            { id: 'B', text: { en: '🦠 Disease Investigation: "Collect sick crabs. Sequence pathogens. Find patient zero."', th: '🦠 สอบสวนโรค', zh: '🦠 疾病调查' }, consequence: { en: '🎯 Correct! You identify a novel virus. Develop treatment. Population recovers over 5 years.', th: '🎯 ถูกต้อง!', zh: '🎯 正确！' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 45 } },
            { id: 'C', text: { en: '🎣 Fishing Ban: "Halt all crab fishing immediately. Give the population time to recover."', th: '🎣 ห้ามจับปลา', zh: '🎣 捕捞禁令' }, consequence: { en: '📉 Political Backlash! Fishing communities revolt. The ban is overturned. Crabs continue dying.', th: '📉 ปฏิกิริยาทางการเมือง!', zh: '📉 政治反弹！' }, stats: { competence: 20, ethics: 30, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🔬 Multi-Factor Study: "Small budget for each cause. Breadth over depth."', th: '🔬 การศึกษาหลายปัจจัย', zh: '🔬 多因素研究' }, consequence: { en: '📊 Shallow Findings! You identify disease as likely but lack funding to develop cure. Partial credit.', th: '📊 ข้อค้นพบตื้น!', zh: '📊 浅层发现！' }, stats: { competence: 30, ethics: 30, leadership: 25, innovation: 30 } }
        ]
    },
    {
        id: 'marine_015',
        text: {
            en: '🌪️ Hurricane Aftermath: A hurricane destroyed your 10-year research site. Insurance will cover rebuilding OR relocating to a safer area. The original site has irreplaceable baseline data.',
            th: '🌪️ หลังพายุเฮอริเคน: พายุเฮอริเคนทำลายสถานีวิจัย 10 ปีของคุณ ประกันจะครอบคลุมการสร้างใหม่หรือย้ายไปพื้นที่ปลอดภัย',
            zh: '🌪️ 飓风余波：飓风摧毁了你的10年研究站。保险将承保重建或搬迁到更安全的地区。原始地点有不可替代的基线数据。'
        },
        options: [
            { id: 'A', text: { en: '🏗️ Rebuild On-Site: "The continuity of data is worth the risk. Rebuild stronger."', th: '🏗️ สร้างใหม่ในที่', zh: '🏗️ 原地重建' }, consequence: { en: '🌊 Hurricane 2.0! Three years later, another hurricane destroys it again. 13 years of data lost forever.', th: '🌊 เฮอริเคน 2.0!', zh: '🌊 飓风2.0！' }, stats: { competence: 15, ethics: 20, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '🚚 Relocate: "Climate is changing. Move to safer ground. Start fresh data baseline."', th: '🚚 ย้าย', zh: '🚚 搬迁' }, consequence: { en: '📊 Fresh Start! New site yields better data. Old site becomes a cautionary tale.', th: '📊 เริ่มใหม่!', zh: '📊 重新开始！' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 35 } },
            { id: 'C', text: { en: '🤝 Dual Sites: "Split budget. Skeleton crew at old site. Main operations at new safer location."', th: '🤝 สองสถานี', zh: '🤝 双站点' }, consequence: { en: '⚖️ Best of Both! You maintain data continuity while building resilience. Expensive but works.', th: '⚖️ ดีที่สุดทั้งคู่!', zh: '⚖️ 两全其美！' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '💰 Cash Out: "Take insurance money. Pivot to less infrastructure-heavy research methods."', th: '💰 เบิกเงิน', zh: '💰 兑现' }, consequence: { en: '🔬 Paradigm Shift! You pioneer drone-based monitoring. No buildings needed. Revolutionary approach.', th: '🔬 การเปลี่ยนแบบแผน!', zh: '🔬 范式转变！' }, stats: { competence: 45, ethics: 30, leadership: 35, innovation: 50 } }
        ]
    },
    {
        id: 'marine_016',
        text: {
            en: '🐟 Bycatch Solution: Your fishing net design reduces bycatch by 80% but costs 3x more. Fishermen cannot afford it. Options: subsidize (expensive), mandate (bankrupts fishermen), or give away free (unsustainable)?',
            th: '🐟 แก้ปัญหาการจับโดยบังเอิญ: การออกแบบอวนของคุณลดการจับโดยบังเอิญ 80% แต่ราคาแพงกว่า 3 เท่า ชาวประมงไม่มีเงินซื้อ',
            zh: '🐟 副渔获解决方案：你的渔网设计将副渔获减少80%但成本高3倍。渔民买不起。选项：补贴（昂贵），强制（使渔民破产），或免费赠送（不可持续）？'
        },
        options: [
            { id: 'A', text: { en: '💰 Government Subsidy: "Lobby for subsidies to cover the cost difference. Takes 3 years."', th: '💰 เงินอุดหนุนรัฐบาล', zh: '💰政府补贴' }, consequence: { en: '⏳ Bureaucratic Win! Subsidies approved. Nets adopted slowly. 40% bycatch reduction achieved after 5 years.', th: '⏳ ชัยชนะราชการ!', zh: '⏳ 官僚胜利！' }, stats: { competence: 40, ethics: 35, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '⚖️ Mandate It: "Regulation requiring new nets in 2 years. Fishermen must adapt or quit."', th: '⚖️ บังคับ', zh: '⚖️ 强制执行' }, consequence: { en: '📉 Industry Collapse! Half of small fishermen go bankrupt. Consolidation to big corps. Bycatch reduced but at human cost.', th: '📉 อุตสาหกรรมล่มสลาย!', zh: '📉 行业崩溃！' }, stats: { competence: 30, ethics: -20, leadership: 20, innovation: 40 } },
            { id: 'C', text: { en: '🎁 Free Distribution: "Fundraise $50M. Give nets away free. One-time solution."', th: '🎁 แจกฟรี', zh: '🎁 免费分发' }, consequence: { en: '🌟 Viral Campaign! You raise $80M from celebrities. Every fisherman gets nets. Bycatch crashes globally.', th: '🌟 แคมเปญไวรัล!', zh: '🌟 病毒式运动！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 45 } },
            { id: 'D', text: { en: '🏭 Mass Production: "License design to manufacturers for low-cost production. Sacrifice some quality."', th: '🏭 การผลิตจำนวนมาก', zh: '🏭 大规模生产' }, consequence: { en: '📈 Affordable Innovation! Cheap versions are 60% effective instead of 80%. But adoption is 10x faster.', th: '📈 นวัตกรรมราคาไม่แพง!', zh: '📈 价格合理的创新！' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'marine_017',
        text: {
            en: '🧪 Ocean Acidification Experiment: You can geo-engineer local pH by dumping alkaline minerals. It works in labs. But ocean-scale has unknown consequences. Climate crisis demands action now.',
            th: '🧪 การทดลองความเป็นกรดของมหาสมุทร: คุณสามารถวิศวกรรมภูมิศาสตร์ pH ท้องถิ่นโดยทิ้งแร่ด่าง มันใช้ได้ในห้องทดลอง',
            zh: '🧪 海洋酸化实验：你可以通过倾倒碱性矿物质对局部pH进行地球工程。在实验室有效。但海洋规模的后果未知。气候危机需要立即行动。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Deploy Now: "Climate emergency overrides caution. Deploy in 1000 sq km test zone."', th: '🚀 ปรับใช้ตอนนี้', zh: '🚀 立即部署' }, consequence: { en: '🌊 Unintended Cascade! pH stabilizes but causes toxic algal bloom. Entire zone becomes dead water for 2 years.', th: '🌊 ผลลูพธ์ที่ไม่ได้ตั้งใจ!', zh: '🌊 意外级联！' }, stats: { competence: 20, ethics: -10, leadership: 30, innovation: 40 } },
            { id: 'B', text: { en: '🔬 Small Pilot: "Test on 1 sq km for 5 years. Rigorous monitoring before scaling."', th: '🔬 นำร่องเล็ก', zh: '🔬 小试点' }, consequence: { en: '⏳ Too Slow! By the time you have results, coral reefs are extinct. Your caution was academic cowardice.', th: '⏳ ช้าเกินไป!', zh: '⏳ 太慢了！' }, stats: { competence: 25, ethics: 30, leadership: -10, innovation: 20 } },
            { id: 'C', text: { en: '🌍 International Consortium: "Coordinate with 20 nations. Share costs and risks. Takes 10 years to organize."', th: '🌍 คอนสอร์เทียมระหว่างประเทศ', zh: '🌍 国际财团' }, consequence: { en: '🤝 Global Scale! Slow start but massive deployment by year 15. Ocean pH recovers. You prevented collapse.', th: '🤝 ระดับโลก!', zh: '🤝 全球规模！' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 45 } },
            { id: 'D', text: { en: '🚫 Oppose Geo-Engineering: "This is playing God. Focus on emissions reduction instead."', th: '🚫 ต่อต้านการวิศวกรรมภูมิศาสตร์', zh: '🚫 反对地球工程' }, consequence: { en: '📉 Purist Position. Emissions talks fail. Ocean becomes acidic soup. You had the solution and refused to use it.', th: '📉 ตำแหน่งที่บริสุทธิ์', zh: '📉 纯粹主义立场。' }, stats: { competence: 10, ethics: 20, leadership: -20, innovation: -10 } }
        ]
    },
    {
        id: 'marine_018',
        text: {
            en: '🐋 Whale Stranding: 50 whales beached. You can: euthanize quickly (humane), attempt re-float (risky), or take tissue samples while they die (scientifically valuable but cruel).',
            th: '🐋 ปลาวาฬเกยตื้น: ปลาวาฬ 50 ตัวเกยหาด คุณสามารถ: การุณยฆาตอย่างรวดเร็ว (มนุษยธรรม), พยายามลอยใหม่ (เสี่ยง), หรือเก็บตัวอย่างเนื้อเยื่อขณะที่พวกมันตาย',
            zh: '🐋 鲸鱼搁浅：50头鲸鱼搁浅。你可以：快速安乐死（人道），试图重新漂浮（冒险），或在它们死亡时采集组织样本（有科学价值但残忍）。'
        },
        options: [
            { id: 'A', text: { en: '💉 Mass Euthanasia: "End their suffering immediately. This is the kindest option."', th: '💉 การุณยฆาตจำนวนมาก', zh: '💉 大规模安乐死' }, consequence: { en: '🕊️ Mercy Granted. But activists accuse you of giving up too quickly. "You could have saved them!"', th: '🕊️ ให้ความเมตตา', zh: '🕊️ 给予怜悯。' }, stats: { competence: 30, ethics: 40, leadership: 25, innovation: 0 } },
            { id: 'B', text: { en: '🌊 Re-Float Attempt: "Full rescue operation. High tide + tugboats + 200 volunteers."', th: '🌊 พยายามลอยใหม่', zh: '🌊 重新漂浮尝试' }, consequence: { en: '🎉 Miracle! 35 whales saved. 15 die in attempt. Global media celebrates your heroism.', th: '🎉 ปาฏิหาริย์!', zh: '🎉 奇迹！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '🔬 Scientific Sampling: "They are dying anyway. Maximize research value. Sample everything."', th: '🔬 การสุ่มตัวอย่างทางวิทยาศาสตร์', zh: '🔬 科学采样' }, consequence: { en: '📚 Data Goldmine! You discover a novel pathogen causing mass strandings. But videos of you sampling dying whales go viral. Career ruined.', th: '📚 เหมืองทองข้อมูล!', zh: '📚 数据金矿！' }, stats: { competence: 40, ethics: -40, leadership: -30, innovation: 50 } },
            { id: 'D', text: { en: '⏰ Triage: "Save the 20 healthiest. Euthanize the 30 worst. Pragmatic middle ground."', th: '⏰ การคัดกรอง', zh: '⏰ 分诊' }, consequence: { en: '⚖️ Balanced Approach. 18 saved, 32 die quickly. Most reasonable outcome given resources.', th: '⚖️ แนวทางสมดุล', zh: '⚖️ 平衡方法。' }, stats: { competence: 45, ethics: 35, leadership: 40, innovation: 20 } }
        ]
    },
    {
        id: 'marine_019',
        text: {
            en: '💎 Underwater Mining Rights: A mining company offers your university $100M for research if you support their application. Your data shows the site is critical habitat. Accept funding or integrity?',
            th: '💎 สิทธิ์การทำเหมืองใต้น้ำ: บริษัทเหมืองเสนอให้มหาวิทยาลัย 100 ล้านเหรียญสำหรับการวิจัยถ้าคุณสนับสนุนใบสมัครของพวกเขา',
            zh: '💎 水下采矿权：一家矿业公司向你的大学提供1亿美元用于研究，如果你支持他们的申请。你的数据显示该地点是关键栖息地。接受资金还是正直？'
        },
        options: [
            { id: 'A', text: { en: '💰 Take the Money: "Fund 20 PhD students. Use their money against them. Academia thrives."', th: '💰 รับเงิน', zh: '💰 拿钱' }, consequence: { en: '🎓 Compromised Science. Your students find damning evidence. Company buries it. Your reputation as sellout is permanent.', th: '🎓 วิทยาศาสตร์ถูกประนีประนอม', zh: '🎓 妥协的科学。' }, stats: { competence: 25, ethics: -30, leadership: 20, innovation: 30 } },
            { id: 'B', text: { en: '🚫 Refuse Publicly: "We cannot be bought. Release data showing critical habitat. No deal."', th: '🚫 ปฏิเสธต่อสาธารณะ', zh: '🚫 公开拒绝' }, consequence: { en: '⚖️ David vs Goliath! They sue university for $500M in lost opportunity. You win in court. Become legendary.', th: '⚖️ ดาวิดต่อสู้โกลิอัท!', zh: '⚖️ 大卫与歌利亚！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '🤝 Conditional Deal: "We accept IF you bind to halt if we find endangered species."', th: '🤝 ข้อตกลงมีเงื่อนไข', zh: '🤝 有条件交易' }, consequence: { en: '📋 Legal Loophole! They agree, you find species, they claim it was known and exempted. Lawyers win.', th: '📋 ช่องว่างทางกฎหมาย!', zh: '📋 法律漏洞！' }, stats: { competence: 30, ethics: 10, leadership: 25, innovation: 20 } },
            { id: 'D', text: { en: '🎯 Counter-Proposal: "We will survey for free. Publish results publicly. No strings attached."', th: '🎯 ข้อเสนอย้อนกลับ', zh: '🎯 反提议' }, consequence: { en: '🔬 Independence Maintained! They reject. You crowdfund $5M. Data proves critical habitat. Mining denied.', th: '🔬 รักษาความเป็นอิสระ!', zh: '🔬 保持独立！' }, stats: { competence: 50, ethics: 50, leadership: 45, innovation: 40 } }
        ]
    },
    {
        id: 'marine_020',
        text: {
            en: '🔦 Bioluminescence Discovery: You discover a deep-sea creature with potent bioluminescence that could revolutionize medicine. Pharma offers $50M. Publish freely or patent?',
            th: '🔦 การค้นพบการเรืองแสงชีวภาพ: คุณค้นพบสิ่งมีชีวิตใต้น้ำลึกที่มีการเรืองแสงชีวภาพที่ทรงพลังซึ่งสามารถปฏิวัติการแพทย์',
            zh: '🔦 生物发光发现：你发现了一种深海生物，具有强大的生物发光能力，可能革新医学。制药公司提供5000万美元。自由发布还是申请专利？'
        },
        options: [
            { id: 'A', text: { en: '💰 Sell to Pharma: "$50M funds your lab for 20 years. They get exclusive rights."', th: '💰 ขายให้ยา', zh: '💰 卖给制药公司' }, consequence: { en: '💊 Lifesaving Drug! They develop cancer treatment. But price is $500K per dose. Only rich survive.', th: '💊 ยาช่วยชีวิต!', zh: '💊 救命药物！' }, stats: { competence: 40, ethics: -20, leadership: 30, innovation: 45 } },
            { id: 'B', text: { en: '🌍 Open Source: "Publish genome freely. Let humanity benefit equally. No patents."', th: '🌍 โอเพนซอร์ส', zh: '🌍 开源' }, consequence: { en: '🏆 Nobel Prize! 50 companies develop affordable versions. You revolutionize medicine for all.', th: '🏆 รางวัลโนเบล!', zh: '🏆 诺贝尔奖！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 } },
            { id: 'C', text: { en: '⚖️ University Patent: "Patent it. License affordably. Balance access and funding."', th: '⚖️ สิทธิบัตรมหาวิทยาลัย', zh: '⚖️ 大学专利' }, consequence: { en: '🎓 Academic Model! Generic versions available for $100/dose. University gets $10M/year royalties.', th: '🎓 โมเดลวิชาการ!', zh: '🎓 学术模式！' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 45 } },
            { id: 'D', text: { en: '🤐 Keep Secret: "This is too powerful. Suppress discovery. Humanity is not ready."', th: '🤐 เก็บเป็นความลับ', zh: '🤐 保守秘密' }, consequence: { en: '😤 Paternalistic Failure! A student leaks it anyway. You look like a hoarder. Discovery tarnished.', th: '😤 ความล้มเหลวแบบปกครอง!', zh: '😤 家长式失败！' }, stats: { competence: 10, ethics: -30, leadership: -40, innovation: 20 } }
        ]
    },
    {
        id: 'marine_021',
        text: {
            en: '🏖️ Beach Nourishment: A tourist beach is eroding. Options: pump sand from offshore (damages ecosystems), build seawall (ugly), managed retreat (economic disaster), or do nothing (beach gone in 10 years).',
            th: '🏖️ การบำรุงชายหาด: ชายหาดท่องเที่ยวกำลังพังทลาย ตัวเลือก: สูบทรายจากนอกชายฝั่ง (ทำลายระบบนิเวศ), สร้างกำแพงกันคลื่น (น่าเกลียด), ถอยร่นที่จัดการ',
            zh: '🏖️ 海滩养护：旅游海滩正在侵蚀。选项：从近海抽沙（破坏生态系统），建造海堤（丑陋），管理性撤退（经济灾难），或什么都不做（10年海滩消失）。'
        },
        options: [
            { id: 'A', text: { en: '⛏️ Offshore Dredging: "Pump 2M tons of sand. Beach saved. Offshore habitat destroyed."', th: '⛏️ การขุดลอกนอกชายฝั่ง', zh: '⛏️ 近海疏浚' }, consequence: { en: '🏖️ Beach Restored! Tourists return. But you killed a rare sponge reef. Ecosystem collapse offshore.', th: '🏖️ ชายหาดถูกบูรณะ!', zh: '🏖️ 海滩恢复！' }, stats: { competence: 30, ethics: -20, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '🧱 Concrete Seawall: "Build 10-mile wall. Permanent solution. Visual blight but works."', th: '🧱 กำแพงคอนกรีต', zh: '🧱 混凝土海堤' }, consequence: { en: '🏗️ Fortress Beach! Erosion stops. But sea turtles cannot nest. Beach becomes sterile recreation zone.', th: '🏗️ ชายหาดป้อมปราการ!', zh: '🏗️ 堡垒海滩！' }, stats: { competence: 35, ethics: 10, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🚶 Managed Retreat: "Relocate beachfront properties inland. Return coast to nature."', th: '🚶 ถอยร่นที่จัดการ', zh: '🚶 管理性撤退' }, consequence: { en: '🌿 Long-Term Vision! Initial uproar. 20 years later, the natural beach is pristine. You were ahead of your time.', th: '🌿 วิสัยทัศน์ระยะยาว!', zh: '🌿 长期愿景！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🤷 Do Nothing: "Nature will stabilize eventually. Stop fighting the ocean."', th: '🤷 ไม่ทำอะไร', zh: '🤷 什么都不做' }, consequence: { en: '🌊 Beach Gone! Tourism collapses. Town becomes ghost town. You were technically right but cruel.', th: '🌊 ชายหาดหายไป!', zh: '🌊 海滩消失！' }, stats: { competence: 10, ethics: 20, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'marine_022',
        text: {
            en: '🦐 Invasive Shrimp: An invasive shrimp species is destroying native ecosystems. You can: introduce a predator (risky), harvest commercially (profit from problem), poison waterways (collateral damage), or do nothing.',
            th: '🦐 กุ้งรุกราน: กุ้งสายพันธุ์รุกรานกำลังทำลายระบบนิเวศพื้นเมือง คุณสามารถ: นำเข้าผู้ล่า (เสี่ยง), เก็บเกี่ยวเชิงพาณิชย์ (กำไรจากปัญหา)',
            zh: '🦐 入侵虾类：一种入侵虾类正在破坏本地生态系统。你可以：引入捕食者（冒险），商业捕捞（从问题中获利），毒化水道（附带损害），或什么都不做。'
        },
        options: [
            { id: 'A', text: { en: '🐟 Introduce Predator: "Import natural predator from native region. Biological control."', th: '🐟 นำเข้าผู้ล่า', zh: '🐟 引入捕食者' }, consequence: { en: '😱 Second Invasion! Predator ignores invasive shrimp. Eats native fish instead. Double disaster.', th: '😱 การรุกรานครั้งที่สอง!', zh: '😱 第二次入侵！' }, stats: { competence: -10, ethics: -20, leadership: -20, innovation: 20 } },
            { id: 'B', text: { en: '🍤 Commercial Harvest: "Create shrimp fishery. Profit while controlling population."', th: '🍤 การเก็บเกี่ยวเชิงพาณิชย์', zh: '🍤 商业捕捞' }, consequence: { en: '💼 Win-Win! Shrimp industry created. 500 jobs. Population controlled through harvesting. Ecosystem stabilizes.', th: '💼 ชนะ-ชนะ!', zh: '💼 双赢！' }, stats: { competence: 50, ethics: 35, leadership: 45, innovation: 45 } },
            { id: 'C', text: { en: '☠️ Targeted Poison: "Deploy shrimp-specific pesticide. Calculated collateral damage."', th: '☠️ ยาพิษที่มุ่งเป้า', zh: '☠️ 定向毒药' }, consequence: { en: '🧪 Partial Success! 80% of invasive shrimp die. But 30% of native crustaceans too. Pyrrhic victory.', th: '🧪 ความสำเร็จบางส่วน!', zh: '🧪 部分成功！' }, stats: { competence: 30, ethics: -10, leadership: 25, innovation: 30 } },
            { id: 'D', text: { en: '🤷 Accept New Normal: "Ecosystems adapt. Invasive species becomes part of new equilibrium."', th: '🤷 ยอมรับความปกติใหม่', zh: '🤷 接受新常态' }, consequence: { en: '⚖️ Controversial Pragmatism! 10 years later, ecosystem reaches new balance. You were patient, not lazy.', th: '⚖️ ความเป็นจริงที่ขัดแย้ง!', zh: '⚖️ 有争议的实用主义！' }, stats: { competence: 35, ethics: 20, leadership: 20, innovation: 20 } }
        ]
    },
    {
        id: 'marine_023',
        text: {
            en: '🌊 Plastic Island Research: You want to study the Great Pacific Garbage Patch for 5 years. Funders want you to clean it up instead. Study creates knowledge, cleanup creates press. Which serves ocean better?',
            th: '🌊 การวิจัยเกาะขยะพลาสติก: คุณต้องการศึกษาแพขยะแปซิฟิกใหญ่เป็นเวลา 5 ปี ผู้สนับสนุนต้องการให้คุณทำความสะอาดแทน',
            zh: '🌊 塑料岛研究：你想研究太平洋大垃圾带5年。资助者希望你清理它。研究创造知识，清理创造新闻。哪个更好地服务海洋？'
        },
        options: [
            { id: 'A', text: { en: '🔬 Pure Research: "Ignore funders. Study the patch. Understand before acting."', th: '🔬 การวิจัยบริสุทธิ์', zh: '🔬 纯研究' }, consequence: { en: '📚 Knowledge Gained! You publish groundbreaking papers. But plastic keeps accumulating. Theory perfect, ocean dying.', th: '📚 ได้รับความรู้!', zh: '📚 获得知识！' }, stats: { competence: 40, ethics: 20, leadership: 10, innovation: 40 } },
            { id: 'B', text: { en: '🚢 Cleanup Mission: "Deploy cleanup ships. Tangible results. Remove 10K tons/year."', th: '🚢 ภารกิจทำความสะอาด', zh: '🚢 清理任务' }, consequence: { en: '📸 PR Victory! Media loves it. But you remove 10K tons while 100K tons added. Symbolic gesture.', th: '📸 ชัยชนะ PR!', zh: '�18 公关胜利！' }, stats: { competence: 30, ethics: 30, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🎯 Integrated Approach: "Study while cleaning. Pilot cleanup methods. Science + action."', th: '🎯 แนวทางบูรณาการ', zh: '🎯 综合方法' }, consequence: { en: '🏆 Best of Both! Your research identifies most harmful plastics. Targeted cleanup 5x more effective.', th: '🏆 ดีที่สุดทั้งคู่!', zh: '🏆 两全其美！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '🏭 Attack Source: "Forget the patch. Lobby to stop plastic production. Prevent, do not clean."', th: '🏭 โจมตีแหล่งกำเนิด', zh: '🏭 攻击源头' }, consequence: { en: '⚖️ Systemic Change! 7 countries ban single-use plastics. Patch still grows but rate slows 60%.', th: '⚖️ การเปลี่ยนแปลงระบบ!', zh: '⚖️ 系统性变革！' }, stats: { competence: 45, ethics: 50, leadership: 50, innovation: 35 } }
        ]
    },
    {
        id: 'marine_024',
        text: {
            en: '🐙 Octopus Intelligence: Your research proves octopuses are sentient and feel pain. This could ban octopus farming (good) but also ban all octopus research (bad). Publish or suppress?',
            th: '🐙 ความฉลาดของปลาหมึก: การวิจัยของคุณพิสูจน์ว่าปลาหมึกมีสติและรู้สึกเจ็บปวด นี่อาจห้ามการเลี้ยงปลาหมึก (ดี) แต่ยังห้ามการวิจัยปลาหมึกทั้งหมด (ไม่ดี)',
            zh: '🐙 章鱼智能：你的研究证明章鱼有意识并感到疼痛。这可能禁止章鱼养殖（好）但也禁止所有章鱼研究（坏）。发布还是隐瞒？'
        },
        options: [
            { id: 'A', text: { en: '📢 Publish Full Research: "The truth must be known. Let ethics follow science."', th: '📢 เผยแพร่การวิจัยทั้งหมด', zh: '📢 发布完整研究' }, consequence: { en: '⚖️ Ethical Earthquake! Octopus farming banned globally. But your lab shut down too. You killed your own field.', th: '⚖️ แผ่นดินไหวทางจริยธรรม!', zh: '⚖️ 道德地震！' }, stats: { competence: 45, ethics: 50, leadership: 30, innovation: -20 } },
            { id: 'B', text: { en: '🤐 Suppress Findings: "Too disruptive. File it away. Continue research quietly."', th: '🤐 ปิดกั้นข้อค้นพบ', zh: '🤐 隐瞒发现' }, consequence: { en: '🚨 Leak! A student publishes it anyway. You are vilified for cover-up. Scientific integrity destroyed.', th: '🚨 รั่ว!', zh: '🚨 泄漏！' }, stats: { competence: 10, ethics: -40, leadership: -40, innovation: 20 } },
            { id: 'C', text: { en: '📝 Publish with Nuance: "Present evidence but argue for regulated research exceptions."', th: '📝 เผยแพร่ด้วยความละเอียดอ่อน', zh: '📝 细微发布' }, consequence: { en: '🎓 Academic Balance! Farming banned. Research continues under strict welfare protocols. Best outcome.', th: '🎓 ความสมดุลทางวิชาการ!', zh: '🎓 学术平衡！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🎬 Media Blitz: "Go big! Documentary + book + TED talk. Maximize impact for octopuses."', th: '🎬 การโจมตีสื่อ', zh: '🎬 媒体闪电战' }, consequence: { en: '🌟 Cultural Shift! Octopuses protected like dolphins. Your career as scientist ends. You become activist celebrity.', th: '🌟 การเปลี่ยนแปลงทางวัฒนธรรม!', zh: '🌟 文化转变！' }, stats: { competence: 35, ethics: 50, leadership: 40, innovation: 30 } }
        ]
    },
    {
        id: 'marine_025',
        text: {
            en: '🌴 Marine Protected Area: Government proposes MPA that would ban fishing in 40% of coastline. Local fishermen will starve. Conservation or livelihoods? You are the expert they trust.',
            th: '🌴 พื้นที่คุ้มครองทางทะเล: รัฐบาลเสนอ MPA ที่จะห้ามตกปลาใน 40% ของแนวชายฝั่ง ชาวประมงท้องถิ่นจะอดตาย การอนุรักษ์หรือการดำรงชีวิต?',
            zh: '🌴 海洋保护区：政府提议建立MPA，将禁止40%海岸线捕鱼。当地渔民会挨饿。保护还是生计？你是他们信任的专家。'
        },
        options: [
            { id: 'A', text: { en: '🐟 Support Full MPA: "Short-term pain, long-term gain. Fish stocks will recover in 10 years."', th: '🐟 สนับสนุน MPA เต็มรูปแบบ', zh: '🐟 支持完整MPA' }, consequence: { en: '📉 Social Collapse! Fishing communities riot. MPA established but widely violated. Tragedy all around.', th: '📉 การล่มสลายทางสังคม!', zh: '📉 社会崩溃！' }, stats: { competence: 30, ethics: 20, leadership: -20, innovation: 20 } },
            { id: 'B', text: { en: '🚫 Oppose MPA: "People over fish. Find another way to conserve."', th: '🚫 ต่อต้าน MPA', zh: '🚫 反对MPA' }, consequence: { en: '🐠 Stocks Crash! Without MPA, overfishing continues. Fish gone in 5 years. Everyone loses.', th: '🐠 หุ้นล่มสลาย!', zh: '🐠 鱼类崩溃！' }, stats: { competence: 10, ethics: 10, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '⚖️ Phased Approach: "20% MPA year 1. Expand to 40% over 10 years + compensation fund."', th: '⚖️ แนวทางแบบเป็นระยะ', zh: '⚖️ 分阶段方法' }, consequence: { en: '🤝 Gradual Success! Fishermen adapt. Stocks recover. By year 10, total catch is higher than before.', th: '🤝 ความสำเร็จค่อยเป็นค่อยไป!', zh: '🤝 逐步成功！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🎣 Alternative Livelihoods: "Ban fishing BUT fund aquaculture training + eco-tourism jobs."', th: '🎣 การดำรงชีวิตทางเลือก', zh: '🎣 替代生计' }, consequence: { en: '🔄 Economic Transition! Hard first 3 years. Then boom in sustainable tourism. MPA becomes goldmine.', th: '🔄 การเปลี่ยนผ่านทางเศรษฐกิจ!', zh: '🔄 经济转型！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'marine_026',
        text: {
            en: '🏭 Fish Farm Escape: 10,000 farmed salmon escape into wild waters. They are genetically modified, disease-prone, and will interbreed with wild salmon. Options: recapture (impossible), cull wild populations (controversial), accept interbreeding?',
            th: '🏭 ปลาหนีฟาร์ม: ปลาแซลมอนฟาร์ม 10,000 ตัวหนีออก สู่น่านน้ำป่า พวกมันถูกดัดแปลงพันธุกรรม เสี่ยงต่อโรค และจะผสมพันธุ์กับแซลมอนป่า',
            zh: '🏭 养殖鱼逃逸：10,000条养殖三文鱼逃入野生水域。它们经过基因改造，易患疾病，会与野生三文鱼杂交。选项：重新捕获（不可能），扑杀野生种群（有争议），接受杂交？'
        },
        options: [
            { id: 'A', text: { en: '�� Impossible Recapture: "Deploy every net. Try to recapture. Waste $10M on 5% success rate."', th: '🎣 การจับที่เป็นไปไม่ได้', zh: '🎣 不可能重新捕获' }, consequence: { en: '💸 Money Wasted! Recapture 500 out of 10,000. The 9,500 escapees breed. Wild salmon gene pool contaminated.', th: '💸 เงินสูญเปล่า!', zh: '💸 浪费金钱！' }, stats: { competence: 15, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🔪 Cull Wild Salmon: "Kill threatened wild populations to prevent interbreeding. Counterintuitive but effective."', th: '🔪 คัดแซลมอนป่า', zh: '🔪 扑杀野生三文鱼' }, consequence: { en: '💔 Genetic Purity at What Cost! Wild salmon extinct. Farmed genetics dominate. You saved the gene pool by destroying it.', th: '💔 ความบริสุทธิ์ทางพันธุกรรมมีค่าอะไร!', zh: '💔 以什么代价保持基因纯净！' }, stats: { competence: 25, ethics: -40, leadership: 20, innovation: 30 } },
            { id: 'C', text: { en: '🤷 Accept Hybridization: "Evolution is adaptive. Let nature select. Monitor long-term."', th: '🤷 ยอมรับการผสมพันธุ์', zh: '🤷 接受杂交' }, consequence: { en: '🧬 Unintended Experiment! 20 years later, hybrid salmon are weaker. Wild runs collapse. You gambled and lost.', th: '🧬 การทดลองที่ไม่ได้ตั้งใจ!', zh: '🧬 意外实验！' }, stats: { competence: 20, ethics: 10, leadership: -10, innovation: 20 } },
            { id: 'D', text: { en: '🏛️ Industry Shutdown: "Ban all open net-pen farms. Mandate closed containment. Prevent future escapes."', th: '🏛️ ปิดอุตสาหกรรม', zh: '🏛️ 行业关闭' }, consequence: { en: '⚖️ Regulatory Victory! New standards adopted globally. This escape was the last. Wild salmon saved long-term.', th: '⚖️ ชัยชนะด้านกฎระเบียบ!', zh: '⚖️ 监管胜利！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 } }
        ]
    },
    {
        id: 'marine_027',
        text: {
            en: '🔊 Navy Sonar Testing: Military wants to test submarine-hunting sonar in whale migration routes. Testing kills whales via deafness and disorientation. But national security demands it. Science vs. security.',
            th: '🔊 การทดสอบโซนาร์กองทัพเรือ: กองทัพต้องการทดสอบโซนาร์ล่าเรือดำน้ำในเส้นทางอพยพปลาวาฬ การทดสอบทำให้ปลาวาฬตายเพราะหูหนวกและสับสน',
            zh: '🔊 海军声纳测试：军方想在鲸鱼迁徙路线测试潜艇捕捉声纳。测试通过耳聋和迷失方向杀死鲸鱼。但国家安全需要它。科学与安全。'
        },
        options: [
            { id: 'A', text: { en: '🐋 Oppose Testing: "Cetace​an welfare over war games. Find alternative test sites."', th: '🐋 ต่อต้านการทดสอบ', zh: '🐋 反对测试' }, consequence: { en: '🎖️ Security Backlash! Military vilifies you as unpatriotic. Testing happens anyway in international waters.', th: '🎖️ ปฏิกิริยาด้านความปลอดภัย!', zh: '🎖️ 安全反弹！' }, stats: { competence: 20, ethics: 40, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '⚓ Support Military: "National security comes first. Document whale deaths scientifically but allow testing."', th: '⚓ สนับสนุนกองทัพ', zh: '⚓ 支持军方' }, consequence: { en: '💀 200 Whales Dead! Your credibility as conservationist destroyed. But Admiral sends thank-you letter. Empty victory.', th: '💀 ปลาวาฬตาย 200 ตัว!', zh: '💀 200头鲸鱼死亡！' }, stats: { competence: 20, ethics: -40, leadership: 25, innovation: 0 } },
            { id: 'C', text: { en: '🗓️ Seasonal Compromise: "Test outside migration season. Whales safe 9 months/year. Military gets 3 months."', th: '🗓️ ประนีประนอมตามฤดูกาล', zh: '🗓️ 季节性妥协' }, consequence: { en: '⚖️ Win-Win! Navy accepts. Whale deaths drop 80%. You achieved balance without compromising either side.', th: '⚖️ ชนะ-ชนะ!', zh: '⚖️ 双赢！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🔬 Alternative Tech: "Fund research into whale-safe sonar frequencies. $20M solution."', th: '🔬 เทคโนโลยีทางเลือก', zh: '🔬 替代技术' }, consequence: { en: '💡 Innovation Breakthrough! New sonar works equally well with zero whale impact. Patent it. Game-changer!', th: '💡 ความก้าวหน้านวัตกรรม!', zh: '💡 创新突破！' }, stats: { competence: 50, ethics: 50, leadership: 45, innovation: 50 } }
        ]
    },
    {
        id: 'marine_028',
        text: {
            en: '🎐 Jellyfish Bloom: Climate change causes massive jellyfish blooms that are clogging fishing nets, stinging tourists, and killing fish farms. Do you: harvest for food, poison blooms, or accept new reality?',
            th: '🎐 ฝูงแมงกะพรุน: การเปลี่ยนแปลงสภาพภูมิอากาศทำให้เกิดฝูงแมงกะพรุนขนาดใหญ่ที่อุดตันอวนปลา ต่อยนักท่องเที่ยว และฆ่าฟาร์มปลา',
            zh: '🎐 水母潮：气候变化导致大规模水母潮，堵塞渔网，蜇伤游客，杀死养殖场。你是：收获作食物，毒杀潮汐，还是接受新现实？'
        },
        options: [
            { id: 'A', text: { en: '🍜 Jellyfish Cuisine: "Market them as sustainable protein. Create demand. Problem becomes resource."', th: '🍜 อาหารแมงกะพรุน', zh: '🍜 水母美食' }, consequence: { en: '🍴 Culinary Revolution! Jellyfish tacos become trend. Fishing industry booms. Bloom controlled through harvesting.', th: '🍴 การปฏิวัติทางอาหาร!', zh: '🍴 烹饪革命！' }, stats: { competence: 50, ethics: 35, leadership: 45, innovation: 50 } },
            { id: 'B', text: { en: '☠️ Chemical Warfare: "Deploy jellyfish-specific toxin. Kill the blooms. Cross your fingers on side effects."', th: '☠️ สงครามเคมี', zh: '☠️ 化学战' }, consequence: { en: '🧪 Ecosystem Crash! Toxin kills jellyfish but also larvae of commercial fish. You traded one problem for worse.', th: '🧪 ระบบนิเวศล่มสลาย!', zh: '🧪 生态系统崩溃！' }, stats: { competence: 15, ethics: -30, leadership: 10, innovation: 20 } },
            { id: 'C', text: { en: '🐢 Natural Predators: "Protect sea turtles and sunfish that eat jellyfish. Long-term ecological solution."', th: '🐢 ผู้ล่าธรรมชาติ', zh: '🐢 自然捕食者' }, consequence: { en: '🌊 Slow But Sure! 10 years later, predator populations rebound. Jellyfish bloom calms. Patience vindicated.', th: '🌊 ช้าแต่แน่นอน!', zh: '🌊 缓慢但确定！' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 35 } },
            { id: 'D', text: { en: '🤷 New Normal: "Jellyfish oceans are the future. Adapt fishing practices. Accept reality."', th: '🤷 ความปกติใหม่', zh: '🤷 新常态' }, consequence: { en: '😔 Resigned Acceptance. Tourism dies. Fishing industry adapts but diminished. You were realistic but defeatist.', th: '😔 การยอมรับที่ลาออก', zh: '😔 托付接受。' }, stats: { competence: 25, ethics: 20, leadership: -10, innovation: 10 } }
        ]
    },
    {
        id: 'marine_029',
        text: {
            en: '🦅 Seabird vs. Wind Farm: Offshore wind farms kill thousands of seabirds. But wind energy is crucial for climate. Do you: relocate wind farms (expensive), accept bird deaths (pragmatic), or halt construction?',
            th: '🦅 นกทะเลต่อสู้กังหันลม: กังหันลมชายฝั่งฆ่านกทะเลหลายพันตัว แต่พลังงานลมสำคัญต่อสภาพภูมิอากาศ',
            zh: '🦅 海鸟对风电场：海上风电场杀死数千只海鸟。但风能对气候至关重要。你是：重新安置风电场（昂贵），接受鸟类死亡（务实），还是停止建设？'
        },
        options: [
            { id: 'A', text: { en: '🚫 Halt Construction: "Climate solutions cannot destroy biodiversity. Cancel the project."', th: '🚫 หยุดการก่อสร้าง', zh: '🚫 停止建设' }, consequence: { en: '⚡ Energy Crisis! Region keeps using coal. Climate worsens. Birds saved locally, planet dies globally.', th: '⚡ วิกฤตพลังงาน!', zh: '⚡ 能源危机！' }, stats: { competence: 20, ethics: 30, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '💸 Relocate Turbines: "Move wind farm 50 miles offshore. Costs triple but birds safe."', th: '💸 ย้ายกังหัน', zh: '💸 重新安置涡轮机' }, consequence: { en: '💰 Expensive Compromise! Project delayed 5 years. Eventually built. Birds AND climate both win.', th: '💰 ประนีประนอมที่แพง!', zh: '💰 昂贵的妥协！' }, stats: { competence: 45, ethics: 45, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '⚖️ Acceptable Loss: "The climate crisis kills more birds than turbines. Build it. Document deaths."', th: '⚖️ การสูญเสียที่ยอมรับได้', zh: '⚖️ 可接受的损失' }, consequence: { en: '🌍 Greater Good Logic! Wind farm built. 5,000 birds die but millions saved from climate impacts.', th: '🌍 ตรรกะเพื่อส่วนรวม!', zh: '🌍 更大的好逻辑！' }, stats: { competence: 40, ethics: 20, leadership: 35, innovation: 30 } },
            { id: 'D', text: { en: '🤖 AI Bird Deterrents: "Install radar + AI to shut turbines when birds approach. $10M tech solution."', th: '🤖 ตัวขับไล่นกด้วย AI', zh: '🤖 AI鸟类威慑' }, consequence: { en: '🏆 Tech Saves the Day! Bird deaths drop 95%. Energy production drops only 3%. Perfect solution.', th: '🏆 เทคโนโลยีช่วยวัน!', zh: '🏆 技术拯救世界！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'marine_030',
        text: {
            en: '🌳 Mangrove Restoration: You can restore mangroves (critical habitat) but it requires evicting 500 families living there. Their ancestors lived there for 200 years. Ecology vs. Indigenous rights.',
            th: '🌳 การฟื้นฟูป่าชายเลน: คุณสามารถฟื้นฟูป่าชายเลน (ที่อยู่อาศัยสำคัญ) แต่ต้องขับไล่ 500 ครอบครัวที่อาศัยอยู่ที่นั่น บรรพบุรุษของพวกเขาอาศัยอยู่ที่นั่นมา 200 ปี',
            zh: '🌳 红树林恢复：你可以恢复红树林（关键栖息地）但需要驱逐居住在那里的500个家庭。他们的祖先在那里生活了200年。生态与土著权利。'
        },
        options: [
            { id: 'A', text: { en: '🌿 Ecology First: "Evict families. Restore mangroves. Biodiversity over human settlement."', th: '🌿 นิเวศวิทยาก่อน', zh: '🌿 生态第一' }, consequence: { en: '😡 Social Justice Nightmare! Violent evictions. International condemnation. You are called eco-fascist.', th: '😡 ฝันร้ายความยุติธรรมทาง��ังคม!', zh: '😡 社会正义噩梦！' }, stats: { competence: 30, ethics: -40, leadership: -30, innovation: 20 } },
            { id: 'B', text: { en: '🏘️ People First: "Leave families. Mangroves cannot be restored. Accept degraded ecosystem."', th: '🏘️ ผู้คนก่อน', zh: '🏘️ 人民第一' }, consequence: { en: '🌊 Ecosystem Lost! Storm surge kills 50 people 5 years later. Mangroves would have protected them.', th: '🌊 ระบบนิเวศสูญหาย!', zh: '🌊 生态系统丧失！' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Co-Management: "Families stay BUT become mangrove guardians. Sustainable livelihoods + conservation."', th: '🤝 การจัดการร่วม', zh: '🤝 共同管理' }, consequence: { en: '🌟 Indigenous Partnership! Families protect mangroves better than any agency. Habitat thrives. Win-win!', th: '🌟 ห้างหุ้นส่วนพื้นเมือง!', zh: '🌟 土著伙伴关系！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 45 } },
            { id: 'D', text: { en: '💰 Relocation Compensation: "Pay families generous resettlement package. Restore mangroves. Voluntary departure."', th: '💰 ค่าชดเชยการย้าย', zh: '💰 搬迁补偿' }, consequence: { en: '⚖️ Expensive But Clean! Most families accept. Mangroves restored. A few holdouts create legal battles.', th: '⚖️ แพงแต่สะอาด!', zh: '⚖️ 昂贵但干净！' }, stats: { competence: 45, ethics: 35, leadership: 40, innovation: 30 } }
        ]
    },
    {
        id: 'marine_031',
        text: {
            en: '🧬 De-Extinction Project: You can bring back the Caribbean Monk Seal (extinct since 1952) using cloning. But habitat is now occupied by other species. Is resurrection ethical if home is gone?',
            th: '🧬 โครงการคืนชีพสายพันธุ์: คุณสามารถนำแมวน้ำคาริเบียน (สูญพันธุ์ตั้งแต่ 1952) กลับมาโดยใช้การโคลน แต่ที่อยู่อาศัยตอนนี้ถูกครอบครองโดยสายพันธุ์อื่น',
            zh: '🧬 去灭绝项目：你可以使用克隆技术让加勒比僧海豹（1952年灭绝）回归。但栖息地现在被其他物种占据。如果家园消失，复活是否符合伦理？'
        },
        options: [
            { id: 'A', text: { en: '🧪 Clone It: "Bring them back! We owe it to the species we destroyed."', th: '🧪 โคลนมัน', zh: '🧪 克隆它' }, consequence: { en: '💀 Doomed From Start! Cloned seals cannot compete. Outcompeted by sea lions. They starve. Expensive failure.', th: '💀 ถึงซวงแต่เริ่ม!', zh: '💀 从一开始就注定失败！' }, stats: { competence: 20, ethics: -10, leadership: 20, innovation: 40 } },
            { id: 'B', text: { en: '🚫 Oppose De-Extinction: "Species are adapted to ecosystems. Phantoms have no place in modern oceans."', th: '🚫 ต่อต้านการคืนชีพ', zh: '🚫 反对去灭绝' }, consequence: { en: '🎓 Scientific Pragmatism! You save $50M for living species conservation. More effective use of resources.', th: '🎓 ความเป็นจริงทางวิทยาศาสตร์!', zh: '🎓 科学实用主义！' }, stats: { competence: 45, ethics: 35, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🏝️ Create New Habitat: "Engineer artificial islands specifically for monk seals. $100M but gives them home."', th: '🏝️ สร้างที่อยู่ใหม่', zh: '🏝️ 创造新栖息地' }, consequence: { en: '🌴 Jurassic Park Vibes! Island becomes tourist attraction. Seals thrive. You created a living museum.', th: '🌴 กลิ่นอายจูราสสิคปาร์ค!', zh: '🌴 侏罗纪公园氛围！' }, stats: { competence: 50, ethics: 30, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '🔬 Learn First: "Use the DNA research but do not clone. Study extinction genetics to prevent future losses."', th: '🔬 เรียนรู้ก่อน', zh: '🔬 先学习' }, consequence: { en: '📚 Knowledge Gained! Your research prevents 3 other extinctions. More valuable than resurrection.', th: '📚 ได้ความรู้!', zh: '📚 获得知识！' }, stats: { competence: 50, ethics: 45, leadership: 40, innovation: 45 } }
        ]
    },
    {
        id: 'marine_032',
        text: {
            en: '🎥 Documentary Dilemma: Netflix offers $5M for documentary BUT demands you exaggerate threats for drama. Accurate documentary gets no funding. Entertainment vs. truth.',
            th: '🎥 ภาวะที่กลืนไม่เข้าคายไม่ออกของสารคดี: Netflix เสนอ 5 ล้านเหรียญสำหรับสารคดีแต่เรียกร้องให้คุณพูดเกินจริงเรื่องภัยคุกคามเพื่อดราม่า',
            zh: '🎥 纪录片困境：Netflix提供500万美元拍摄纪录片，但要求你夸大威胁以营造戏剧性。准确的纪录片无法获得资金。娱乐与真相。'
        },
        options: [
            { id: 'A', text: { en: '💰 Take the Deal: "Compromise scientifically. 80% accurate is better than 0% reach."', th: '💰 รับข้อตกลง', zh: '💰 接受交易' }, consequence: { en: '📺 Viral Success! 50M viewers. But scientists call you out for sensationalism. Credibility damaged.', th: '📺 ความสำเร็จแบบไวรัล!', zh: '📺 病毒式成功！' }, stats: { competence: 30, ethics: -20, leadership: 35, innovation: 30 } },
            { id: 'B', text: { en: '🚫 Refuse: "Scientific integrity is non-negotiable. Make low-budget YouTube series instead."', th: '🚫 ปฏิเสธ', zh: '🚫 拒绝' }, consequence: { en: '📊 Limited Reach! 100K views vs. 50M. Accurate but ineffective. You were right but irrelevant.', th: '📊 การเข้าถึงจำกัด!', zh: '📊 有限的覆盖面！' }, stats: { competence: 25, ethics: 50, leadership: 10, innovation: 20 } },
            { id: 'C', text: { en: '🎬 Creative Control: "Negotiate for final cut approval. Make dramatic AND accurate documentary."', th: '🎬 การควบคุมสร้างสรรค์', zh: '🎬 创意控制' }, consequence: { en: '🏆 Best of Both! Netflix agrees. Documentary wins Emmy. Raises $200M for ocean conservation.', th: '🏆 ดีที่สุดทั้งคู่!', zh: '🏆 两全其美！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 45 } },
            { id: 'D', text: { en: '📢 Whistleblow: "Accept deal, then expose their editorial demands publicly. Burn the bridge."', th: '📢 เป่าหวีด', zh: '📢 举报' }, consequence: { en: '🔥 Industry Blacklist! Netflix cancels. But your exposé goes viral. You become martyr for science communication.', th: '🔥 บัญชีดำอุตสาหกรรม!', zh: '🔥 行业黑名单！' }, stats: { competence: 35, ethics: 40, leadership: 30, innovation: 25 } }
        ]
    },
    {
        id: 'marine_033',
        text: {
            en: '🏖️ Turtle Tourism: A beach has nesting sea turtles. Tourism brings $10M/year but disturbs nesting. Ban tourists (economic disaster) or regulate (turtles still harmed)?',
            th: '🏖️ การท่องเที่ยวเต่า: ชายหาดมีเต่าทะเลมาทำรัง การท่องเที่ยวนำมา 10 ล้านเหรียญ/ปี แต่รบกวนการทำรัง ห้ามนักท่องเที่ยว (ภัยพิบัติทางเศรษฐกิจ) หรือควบคุม (เต่ายังได้รับอันตราย)?',
            zh: '🏖️ 海龟旅游：一个海滩有筑巢的海龟。旅游每年带来1000万美元但干扰筑巢。禁止游客（经济灾难）还是监管（海龟仍然受害）？'
        },
        options: [
            { id: 'A', text: { en: '🚫 Total Ban: "Close beach during nesting season. Tourists go elsewhere. Protect turtles absolutely."', th: '🚫 ห้ามทั้งหมด', zh: '🚫 全面禁止' }, consequence: { en: '🏚️ Ghost Town! Local economy collapses. People poach turtle eggs for food. Ban backfires.', th: '🏚️ เมืองร้าง!', zh: '🏚️ 鬼城！' }, stats: { competence: 20, ethics: 30, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '📋 Strict Regulations: "Limited permits. Guided tours only. $200/person. Revenue funds enforcement."', th: '📋 กฎระเบียบเข้มงวด', zh: '📋 严格监管' }, consequence: { en: '⚖️ Compromise Works! Tourism revenue drops to $3M but turtles protected. Sustainable balance achieved.', th: '⚖️ ประนีประนอมได้ผล!', zh: '⚖️ 妥协有效！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 35 } },
            { id: 'C', text: { en: '🦸 Volunteer Program: "Tourists PAY to be turtle nest guards. Protect turtles while watching."', th: '🦸 โปรแกรมอาสาสมัคร', zh: '🦸 志愿者计划' }, consequence: { en: '🌟 Eco-Tourism Gold! Tourists love it. Revenue increases to $15M. Turtle survival soars. Everyone wins!', th: '🌟 ทองการท่องเที่ยวเชิงนิเวศ!', zh: '🌟 生态旅游黄金！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '🏗️ Alternative Beach: "Build artificial beach 2 miles away. Divert tourists. Leave turtles alone."', th: '🏗️ ชายหาดทางเลือก', zh: '🏗️ 替代海滩' }, consequence: { en: '🏖️ Expensive Solution! Works but costs $20M. Debt burden on local government. Turtles saved though.', th: '🏖️ การแก้ปัญหาที่แพง!', zh: '🏖️ 昂贵的解决方案！' }, stats: { competence: 40, ethics: 40, leadership: 35, innovation: 45 } }
        ]
    },
    {
        id: 'marine_034',
        text: {
            en: '🌊 Sea Level Rise Data: Your models show Miami underwater by 2070. Publishing triggers real estate collapse NOW. Suppress to prevent panic or publish for preparedness?',
            th: '🌊 ข้อมูลระดับน้ำทะเลสูงขึ้น: โมเดลของคุณแสดงให้เห็นว่าไมอามี่จะอยู่ใต้น้ำภายในปี 2070 การเผยแพร่ทำให้ตลาดอสังหาริมทรัพย์ล่มสลายตอนนี้',
            zh: '🌊 海平面上升数据：你的模型显示迈阿密将在2070年被淹没。发布会引发房地产现在崩溃。隐瞒以防止恐慌还是发布以准备？'
        },
        options: [
            { id: 'A', text: { en: '📢 Publish Immediately: "Truth above economics. People deserve to know. Let markets adjust."', th: '📢 เผยแพร่ทันที', zh: '📢 立即发布' }, consequence: { en: '📉 Economic Crash! $500B in property value lost overnight. Mass migration begins. You triggered chaos.', th: '📉 ล่มสลายทางเศรษฐกิจ!', zh: '📉 经济崩溃！' }, stats: { competence: 40, ethics: 40, leadership: -20, innovation: 30 } },
            { id: 'B', text: { en: '🤐 Suppress Data: "Prevent panic. Brief policymakers privately. No public release."', th: '🤐 ปิดกั้นข้อมูล', zh: '🤐 隐瞒数据' }, consequence: { en: '💔 Betrayal! Data leaks anyway. You are accused of cover-up. Lose all credibility.', th: '💔 ทรยศ!', zh: '💔 背叛！' }, stats: { competence: 10, ethics: -40, leadership: -40, innovation: 0 } },
            { id: 'C', text: { en: '📊 Phased Release: "Publish with 10-year adaptation roadmap. Data + solutions together."', th: '📊 เปิดเผยแบบเป็นระยะ', zh: '📊 分阶段发布' }, consequence: { en: '⚖️ Responsible Disclosure! Markets adjust gradually. Miami begins managed retreat. You enabled adaptation.', th: '⚖️ การเปิดเผยที่รับผิดชอบ!', zh: '⚖️ 负责任的披露！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 45 } },
            { id: 'D', text: { en: '🤝 Insurance Industry First: "Brief insurers privately. Let them price in risk. Market-driven revelation."', th: '🤝 อุตสาหกรรมประกันก่อน', zh: '🤝 保险行业第一' }, consequence: { en: '💼 Corporate Collusion! Insurers withdraw coverage. Homeowners trapped. You enabled predatory behavior.', th: '💼 การสมรู้ร่วมคิดของบริษัท!', zh: '💼 企业勾结！' }, stats: { competence: 25, ethics: -30, leadership: 10, innovation: 30 } }
        ]
    },
    {
        id: 'marine_035',
        text: {
            en: '💊 Pharmaceutical Prospecting: Your research discovers a deep-sea sponge that cures Alzheimer\'s. Pharma wants to harvest it to extinction for profit. Regulate harvest or ban entirely?',
            th: '💊 การสำรวจทางเภสัชกรรม: การวิจัยของคุณค้นพบฟองน้ำใต้น้ำลึกที่รักษาอัลไซเมอร์ได้ ยาต้องการเก็บเกี่ยวจนสูญพันธุ์เพื่อผลกำไร',
            zh: '💊 药物勘探：你的研究发现了一种可治愈阿尔茨海默病的深海海绵。制药公司想要采集到灭绝以获利。监管采集还是完全禁止？'
        },
        options: [
            { id: 'A', text: { en: '⛏️ Unlimited Harvest: "Cure is more important. Harvest everything. Synthesize later."', th: '⛏️ การเก็บเกี่ยวไม่จำกัด', zh: '⛏️ 无限采集' }, consequence: { en: '💀 Extinction for Cure! Sponge extinct in 5 years. Synthetic version takes 20 years. Millions suffer.', th: '💀 สูญพันธุ์เพื่อการรักษา!', zh: '💀 为治愈而灭绝！' }, stats: { competence: 20, ethics: -30, leadership: 10, innovation: 30 } },
            {
                id: 'B', text: { en: '🚫 Total Ban: "Protect the species. Fund synthetic research only. No wild harvest."', th: '🚫 ห้ามทั้งหมด', zh: '🚫 全面禁止' }, consequence: {
                    en: '⏳ Slow Science! Synthesis works but takes 15 years. Grandparents with Alzheimer\'s die waiting.', th: '⏳ วิทยาศาสตร์ช้า!', zh: '⏳ 缓慢科学！'
                }, stats: { competence: 35, ethics: 40, leadership: 30, innovation: 20 }
            },
            { id: 'C', text: { en: '⚖️ Sustainable Quota: "Harvest 10% annually. Allows regrowth. Parallel synthetic research."', th: '⚖️ โควต้ายั่งยืน', zh: '⚖️ 可持续配额' }, consequence: { en: '🌟 Best Practice! Sponge population stable. Drug available in 5 years. Both conservation AND medicine win.', th: '🌟 การทำที่ดีที่สุด!', zh: '🌟 最佳实践！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 45 } },
            { id: 'D', text: { en: '🧬 Aquaculture: "Farm the sponge in controlled environments. No wild harvest needed."', th: '🧬 การเพาะเลี้ยงสัตว์น้ำ', zh: '🧬 养殖' }, consequence: { en: '💡 Innovation Triumph! Sponge farms supply unlimited drug. Wild populations untouched. Nobel Prize!', th: '💡 ชัยชนะทางนวัตกรรม!', zh: '💡 创新胜利！' }, stats: { competence: 50, ethics: 50, leadership: 45, innovation: 50 } }
        ]
    },
    {
        id: 'marine_036',
        text: {
            en: '🔬 Lab Automation: Your lab just received a grant for a state-of-the-art AI system that can classify plankton samples 100x faster than humans. However, implementing it would make three of your graduate students redundant. Their funding is tied to manual sorting duties.',
            th: '🔬 ระบบอัตโนมัติของห้องปฏิบัติการ: ห้องปฏิบัติการของคุณเพิ่งได้รับเงินทุนสำหรับระบบ AI ล้ำสมัยที่สามารถจำแนกตัวอย่างแพลงก์ตอนได้เร็วกว่ามนุษย์ 100 เท่า อย่างไรก็ตาม การนำระบบนี้มาใช้อาจทำให้นักศึกษาระดับบัณฑิตศึกษาของคุณ 3 คนต้องตกงาน เนื่องจากทุนการศึกษาของพวกเขาผูกติดอยู่กับหน้าที่การคัดแยกด้วยมือ',
            zh: '🔬 实验室自动化：你的实验室刚刚获得了一笔用于最先进AI系统的拨款，该系统可以将浮游生物样本的分类速度提高为人力的100倍。然而，实施该系统将使你的三名研究生变得多余。他们的资助是与人工分类职责挂钩的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤖 Full Automation: "Science waits for no one. Adopt the AI immediately. I\'ll try to find other funding for the students, but efficiency is paramount."',
                    th: '🤖 อัตโนมัติเต็มรูปแบบ: "วิทยาศาสตร์ไม่รอใคร นำ AI มาใช้ทันที ฉันจะพยายามหาทุนอื่นให้นักศึกษา แต่ประสิทธิภาพคือสิ่งสำคัญที่สุด"',
                    zh: '🤖 全面自动化：“科学不等人。立即采用AI。我会尝试为学生寻找其他资助，但效率至关重要。”'
                },
                consequence: {
                    en: '⚡ Research Accelerates! Your lab publishes 5 groundbreaking papers in a year. However, two promising students drop out due to lack of funding, and morale plummets.',
                    th: '⚡ การวิจัยเร่งตัวขึ้น! ห้องปฏิบัติการของคุณตีพิมพ์งานวิจัยที่ล้ำสมัย 5 ฉบับในหนึ่งปี อย่างไรก็ตาม นักศึกษาที่มีอนาคตไกล 2 คนลาออกเนื่องจากขาดแคลนทุน และขวัญกำลังใจตกต่ำ',
                    zh: '⚡ 研究加速！你的实验室一年内发表了5篇突破性论文。然而，两名有前途的学生因缺乏资金退学，士气暴跌。'
                },
                stats: { competence: 50, ethics: 10, leadership: 20, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Reject Automation: "Training the next generation is my priority. We will continue manual sorting. The AI grant can be returned or repurposed."',
                    th: '🚫 ปฏิเสธระบบอัตโนมัติ: "การฝึกอบรมคนรุ่นต่อไปคือสิ่งสำคัญที่สุดของฉัน เราจะคัดแยกด้วยมือต่อไป เงินทุน AI สามารถส่งคืนหรือนำไปใช้ใหม่ได้"',
                    zh: '🚫 拒绝自动化：“培养下一代是我的首要任务。我们将继续人工分类。AI拨款可以退还或改变用途。”'
                },
                consequence: {
                    en: '📉 Falling Behind! Competitor labs adopt the tech and scoop your discoveries. Your students are grateful but graduate with outdated skills in a data-driven field.',
                    th: '📉 ล้าหลัง! ห้องปฏิบัติการคู่แข่งนำเทคโนโลยีมาใช้และแย่งชิงการค้นพบของคุณ นักศึกษาของคุณขอบคุณแต่จบการศึกษาด้วยทักษะที่ล้าสมัยในสาขาที่ขับเคลื่อนด้วยข้อมูล',
                    zh: '📉 落后！竞争对手的实验室采用了该技术并抢先发表了你的发现。你的学生虽然感激，但在数据驱动的领域带着过时的技能毕业。'
                },
                stats: { competence: 20, ethics: 40, leadership: 30, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Hybrid Integration: "Use the AI for preliminary sorting only. Students will focus on verifying tricky cases and analyzing the data trends. Their roles evolve, not disappear."',
                    th: '⚖️ การบูรณาการแบบลูกผสม: "ใช้ AI การคัดแยกเบื้องต้นเท่านั้น นักศึกษาจะมุ่งเน้นไปที่การตรวจสอบกรณีที่ซับซ้อนและการวิเคราะห์แนวโน้มข้อมูล บทบาทของพวกเขาจะพัฒนาขึ้น ไม่ใช่หายไป"',
                    zh: '⚖️ 混合整合：“仅将AI用于初步分类。学生将专注于验证棘手的案例并分析数据趋势。他们的角色是进化，而不是消失。”'
                },
                consequence: {
                    en: '🎓 Perfect Balance! Research output triples, and students gain valuable skills in overseeing AI systems. They become highly sought-after graduates.',
                    th: '🎓 ความสมดุลที่สมบูรณ์แบบ! ผลงานวิจัยเพิ่มขึ้นสามเท่า และนักศึกษาได้รับทักษะอันมีค่าในการดูแลระบบ AI พวกเขากลายเป็นบัณฑิต เป็นที่ต้องการตัวอย่างมาก',
                    zh: '🎓 完美平衡！研究产出增加了三倍，学生获得了监督AI系统的宝贵技能。他们成为备受追捧的毕业生。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Commercialize Service: "We will use the AI to offer sorting services to other labs for a fee. The revenue will fund the students\' stipends directly."',
                    th: '💰 บริการเชิงพาณิชย์: "เราจะใช้ AI เพื่อเสนอบริการคัดแยกให้กับห้องปฏิบัติการอื่นโดยมีค่าธรรมเนียม รายได้จะนำมาเป็นทุนการศึกษาให้นักศึกษาโดยตรง"',
                    zh: '💰 商业化服务：“我们将利用AI向其他实验室提供收费的分类服务。收入将直接资助学生的津贴。”'
                },
                consequence: {
                    en: '💼 Lab Inc.! Your lab becomes a profitable service center. Students are funded but spend all their time managing client orders instead of doing original research.',
                    th: '💼 บริษัทห้องปฏิบัติการ! ห้องปฏิบัติการของคุณกลายเป็นศูนย์บริการที่ทำกำไร นักศึกษาได้รับทุนแต่ใช้เวลาทั้งหมดไปกับการจัดการคำสั่งซื้อของลูกค้าแทนที่จะทำงานวิจัยที่เป็นต้นฉบับ',
                    zh: '💼 实验室公司！你的实验室变成了一个盈利的服务中心。学生虽然有资金，但不得不把所有时间花在管理客户订单上，而不是做原创研究。'
                },
                stats: { competence: 40, ethics: 20, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'marine_037',
        text: {
            en: '🛳️ Sunken Treasure vs. Reef: During a coral survey in a protected sanctuary, your team discovers a 17th-century Spanish galleon laden with gold worth estimated $500 million. However, the wreck is completely encrusted in rare, slow-growing coral species.',
            th: '🛳️ สมบัติที่จมอยู่ใต้น้ำกับแนวปะการัง: ในระหว่างการสำรวจปะการังในเขตคุ้มครอง ทีมของคุณค้นพบเรือใบสเปนสมัยศตวรรษที่ 17 ที่บรรทุกทองคำมูลค่าประมาณ 500 ล้านดอลลาร์ อย่างไรก็ตาม ซากเรือถูกปกคลุมไปด้วยปะการังหายากที่โตช้าจนมิด',
            zh: '🛳️ 沉没宝藏与珊瑚礁：在保护区进行珊瑚调查时，你的团队发现了一艘载有估计价值5亿美元黄金的17世纪西班牙大帆船。然而，沉船完全被稀有的、生长缓慢的珊瑚物种所覆盖。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Excavate and Restore: "The gold can fund ocean conservation for decades. We will carefully remove the gold, even if it damages the coral on top. The net benefit is positive."',
                    th: '💰 ขุดและฟื้นฟู: "ทองคำสามารถเป็นทุนในการอนุรักษ์มหาสมุทรได้หลายทศวรรษ เราจะนำทองคำออกมาอย่างระมัดระวัง แม้ว่าจะทำให้ปะการังด้านบนเสียหาย ผลประโยชน์สุทธิเป็นบวก"',
                    zh: '💰 发掘与恢复：“这些黄金可以资助海洋保护几十年。我们会小心地移走黄金，即使它会破坏上面的珊瑚。净收益是正的。”'
                },
                consequence: {
                    en: '💔 Tragic Loss! The excavation proves messier than planned, destroying a unique ecosystem. You get the money, but the sanctuary is ruined. History judges you harshly.',
                    th: '💔 ความสูญเสียที่น่าเศร้า! การขุดค้นยุ่งยากกว่าที่วางแผนไว้ ทำลายระบบนิเวศที่มีเอกลักษณ์ คุณได้เงิน แต่เขตคุ้มครองถูกทำลาย ประวัติศาสตร์ตัดสินคุณอย่างรุนแรง',
                    zh: '💔 悲剧性的损失！挖掘工作比计划的要混乱得多，摧毁了一个独特的生态系统。你得到了钱，但保护区被毁了。历史严厉地评判你。'
                },
                stats: { competence: 30, ethics: -30, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Leave It Bury: "The wreck is now part of the reef. Disturbing it violates the sanctity of the reserve. We mask the location data and tell no one."',
                    th: '🛡️ ปล่อยให้ถูกฝัง: "ซากเรือเป็นส่วนหนึ่งของแนวปะการังแล้ว การรบกวนมันเป็นการละเมิดความศักดิ์สิทธิ์ของเขตอนุรักษ์ เราจะปิดบังข้อมูลตำแหน่งและไม่บอกใคร"',
                    zh: '🛡️ 让它埋藏：“沉船现在是珊瑚礁的一部分。打扰它违反了保护区的神圣性。我们会掩盖位置数据，不告诉任何人。”'
                },
                consequence: {
                    en: '🤫 Secret Keeper! The reef remains pristine. Years later, a rogue treasure hunter finds it anyway and loots it destructively because it wasn\'t officially managed.',
                    th: '🤫 ผู้รักษาความลับ! แนวปะการังยังคงบริสุทธิ์ หลายปีต่อมา นักล่าสมบัติเถื่อนก็พบมันและปล้นมันอย่างทำลายล้างเพราะไม่มีการจัดการอย่างเป็นทางการ',
                    zh: '🤫 秘密保守者！珊瑚礁保持原始状态。多年后，一个流氓寻宝者发现了它，并进行了破坏性的掠夺，因为它没有得到官方管理。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🏛️ In-Situ Museum: "Designate it as an underwater cultural heritage site. Allow regulated diving tours but strictly forbid removal of artifacts. Use tourism revenue for the park."',
                    th: '🏛️ พิพิธภัณฑ์ในสถานที่: "กำหนดให้เป็นแหล่งมรดกทางวัฒนธรรมใต้น้ำ อนุญาตให้ทัวร์ดำน้ำตามกฎระเบียบแต่ห้ามนำโบราณวัตถุออกโดยเด็ดขาด รายได้จากการท่องเที่ยวใช้เพื่ออุทยาน"',
                    zh: '🏛️ 原地博物馆：“将其指定为水下文化遗产地。允许受管制的潜水旅游，但严禁带走文物。利用旅游收入资助公园。”'
                },
                consequence: {
                    en: '🌟 Living Legacy! The site becomes world-famous. The gold stays safely under the coral, protecting both history and nature. A triumph of management.',
                    th: '🌟 มรดกที่มีชีวิต! สถานที่นี้กลายเป็นที่มีชื่อเสียงระดับโลก ทองคำยังคงอยู่อย่างปลอดภัยใต้ปะการัง ปกป้องทั้งประวัติศาสตร์และธรรมชาติ ชัยชนะของการจัดการ',
                    zh: '🌟 活着的遗产！该地点举世闻名。黄金安全地留在珊瑚下，既保护了历史又保护了自然。管理的胜利。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Collaborate with State: "Report it to the government immediately. Let them decide. It\'s likely they will auction salvage rights, but it follows the law."',
                    th: '🤝 ร่วมมือกับรัฐ: "รายงานต่อรัฐบาลทันที ให้พวกเขาตัดสินใจ มีแนวโน้มว่าพวกเขาจะประมูลสิทธิ์การกอบกู้ แต่มันเป็นไปตามกฎหมาย"',
                    zh: '🤝 与国家合作：“立即向政府报告。让他们决定。他们很可能会拍卖打捞权，但这符合法律。”'
                },
                consequence: {
                    en: '⚖️ Bureaucratic Outcome! The state sells rights to a careful salvage firm. They extract some gold with moderate damage. It\'s legal, but uninspiring.',
                    th: '⚖️ ผลลัพธ์ทางราชการ! รัฐขายสิทธิ์ให้กับบริษัทกอบกู้ที่ระมัดระวัง พวกเขาขุดทองบางส่วนออกมาด้วยความเสียหายปานกลาง ถูกกฎหมายแต่ไม่น่าประทับใจ',
                    zh: '⚖️ 官僚结果！国家将权利卖给了一家谨慎的打捞公司。他们提取了一些黄金，造成了中度破坏。这合法，但平淡无奇。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'marine_038',
        text: {
            en: '🌡️ Thermal Vents vs. Mining: You have discovered a unique hydrothermal vent ecosystem with chemosynthetic life never seen before. A mining corporation has rights to the block and plans to start extracting rare earth minerals in six months.',
            th: '🌡️ ปล่องความร้อนกับการทำเหมือง: คุณค้นพบระบบนิเวศปล่องน้ำพุร้อนที่มีสิ่งมีชีวิตสังเคราะห์เคมีที่ไม่เคยเห็นมาก่อน บริษัทเหมืองแร่มีสิทธิ์ในพื้นที่นั้นและวางแผนที่จะเริ่มสกัดแร่หายากในอีกหกเดือน',
            zh: '🌡️ 热液喷口与采矿：你发现了一个独特的热液喷口生态系统，拥有以前从未见过的化学合成生命。一家矿业公司拥有该区块的权利，并计划在六个月内开始开采稀土矿物。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Emotional Media Blitz: "Launch a global \'Save the Vents\' campaign. Focus on the beauty and mystery of the life there. Shame the company publicly."',
                    th: '📢 การโจมตีสื่อด้วยอารมณ์: "เปิดตัวแคมเปญ \'ช่วยปล่องน้ำพุ\' ระดับโลก เน้นความงามและความลึกลับของชีวิตที่นั่น ประณามบริษัทต่อสาธารณะ"',
                    zh: '📢 情感媒体攻势：“发起全球‘拯救喷口’运动。关注那里的生命之美和神秘。公开羞以此公司。”'
                },
                consequence: {
                    en: '🌍 Viral but Short-lived! The campaign trends for a week. The company waits it out, then mines anyway. You made noise but achieved no policy change.',
                    th: '🌍 เป็นกระแสแต่สั้น! แคมเปญเป็นเทรนด์อยู่หนึ่งสัปดาห์ บริษัทรอให้เงียบแล้วทำเหมืองอยู่ดี คุณทำเสียงดังแต่ไม่ได้เปลี่ยนแปลงนโยบาย',
                    zh: '🌍 病毒式传播但短暂！这项运动流行了一周。公司等风头过去，然后照样开采。你制造了噪音，但没有实现任何政策改变。'
                },
                stats: { competence: 20, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '💊 The Pharmaceutical Argument: "Approach the board privately. Present evidence that the unique bacteria could generate billions in medical patents—far more than the minerals."',
                    th: '💊 ข้อโต้แย้งทางเภสัชกรรม: "เข้าหาคณะกรรมการเป็นการส่วนตัว เสนอหลักฐานว่าแบคทีเรียที่มีเอกลักษณ์สามารถสร้างสิทธิบัตรทางการแพทย์มูลค่าหลายพันล้าน มากกว่าแร่ธาตุมาก"',
                    zh: '💊 药物论点：“私下接触董事会。提出证据表明这种独特的细菌可以产生数十亿的医疗专利——远超矿物。”'
                },
                consequence: {
                    en: '💰 Greed for Good! The company halts mining to investigate biotech potential. The ecosystem is saved, though now it\'s owned by Pharma. A pragmatic win.',
                    th: '💰 ความโลภเพื่อสิ่งที่ดี! บริษัทหยุดทำเหมืองเพื่อตรวจสอบศักยภาพทางเทคโนโลยีชีวภาพ ระบบนิเวศรอดพ้น แม้ตอนนี้จะเป็นของบริษัทยา ชัยชนะเชิงปฏิบัติ',
                    zh: '💰 为善的贪婪！公司停止采矿以调查生物技术潜力。生态系统得救了，尽管现在它归制药公司所有。务实的胜利。'
                },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 45 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Legal Injunction: "Deploy scientists to physically block the site with submersibles while filing emergency disruption lawsuits based on international maritime law."',
                    th: '🛑 คำสั่งห้ามทางกฎหมาย: "ส่งนักวิทยาศาสตร์ไปปิดกั้นสถานที่ด้วยเรือดำน้ำ ในขณะที่ยื่นฟ้องร้องฉุกเฉินตามกฎหมายทะเลระหว่างประเทศ"',
                    zh: '🛑 法律禁令：“部署科学家用潜水器物理封锁现场，同时根据国际海事法提起紧急中断诉讼。”'
                },
                consequence: {
                    en: '⚔️ High-Seas Standoff! It becomes a major incident. You delay them for 2 years, but eventually run out of legal funds. You are viewed as a radical eco-terrorist.',
                    th: '⚔️ การเผชิญหน้ากลางทะเล! กลายเป็นเหตุการณ์ใหญ่ คุณถ่วงเวลาได้ 2 ปี แต่สุดท้ายเงินทุนทางกฎหมายหมด คุณถูกมองว่าเป็นผู้ก่อการร้ายสิ่งแวดล้อมหัวรุนแรง',
                    zh: '⚔️ 公海对峙！这变成了一个重大事件。你拖延了他们2年，但最终耗尽了法律资金。你被视为激进的生态恐怖分子。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Ecological Swap: "Identify a nearby vent system that is dormant and has similar mineral deposits but no life. Propose they mine that one instead with your endorsement."',
                    th: '🤝 การแลกเปลี่ยนระบบนิเวศ: "ระบุระบบปล่องน้ำพุใกล้เคียงที่สงบแล้วและมีแหล่งแร่คล้ายกันแต่ไม่มีชีวิต เสนอให้พวกเขาทำเหมืองที่นั่นแทนโดยมีการรับรองจากคุณ"',
                    zh: '🤝 生态交换：“确定附近一个休眠且有类似矿藏但没有生命的喷口系统。建议他们在他处开采，并得到你的背书。”'
                },
                consequence: {
                    en: '🎯 Masterful Negotiation! The company agrees to avoid bad PR. The unique life is saved, and industry gets its minerals. You are hailed as a reasonable saviour.',
                    th: '🎯 การเจรจาระดับปรมาจารย์! บริษัทตกลงเพื่อหลีกเลี่ยงการประชาสัมพันธ์ที่ไม่ดี ชีวิตที่มีเอกลักษณ์รอดพ้น และอุตสาหกรรมได้แร่ธาตุ คุณได้รับการยกย่องว่าเป็นผู้กอบกู้ที่มีเหตุผล',
                    zh: '🎯 高超的谈判！公司同意以避免糟糕的公关。独特的生命得救了，工业界得到了矿物。你被誉为通情达理的救星。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 }
            }
        ]
    },
    {
        id: 'marine_039',
        text: {
            en: '🎓 The Academic Trap: Your university administration demands you double your teaching load to "improve undergraduate satisfaction." This will effectively leave you zero time for your deep-sea research, right as you are on the verge of a breakthrough.',
            th: '🎓 กับดักวิชาการ: ฝ่ายบริหารมหาวิทยาลัยของคุณเรียกร้องให้คุณเพิ่มภาระการสอนเป็นสองเท่าเพื่อ "ปรับปรุงความพึงพอใจของนักศึกษาระดับปริญญาตรี" สิ่งนี้จะทำให้คุณไม่มีเวลาสำหรับการวิจัยทะเลลึก ในขณะที่คุณกำลังจะประสบความสำเร็จ',
            zh: '🎓 学术陷阱：你的大学管理层要求你将教学工作量增加一倍，以“提高本科生的满意度”。这将实际上让你没有时间进行深海研究，而你正处于突破的边缘。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧑‍🏫 Embrace Teaching: "The students are the future. I will deduct time from my sleep if I have to, but I will be the best professor they ever had."',
                    th: '🧑‍🏫 ยอมรับการสอน: "นักศึกษาคืออนาคต ฉันจะลดเวลานอนถ้าจำเป็น แต่ฉันจะเป็นศาสตราจารย์ที่ดีที่สุดที่พวกเขาเคยมี"',
                    zh: '🧑‍🏫 拥抱教学：“学生是未来。如果有必要，我会牺牲睡眠时间，但我会成为他们遇到过的最好的教授。”'
                },
                consequence: {
                    en: '🍎 Campus Legend! You win "Teacher of the Year" three times. Your research stalls completely, and your lab eventually closes, but thousands of students cite you as their inspiration.',
                    th: '🍎 ตำนานมหาวิทยาลัย! คุณได้รับรางวัล "ครูแห่งปี" สามครั้ง การวิจัยของคุณหยุดชะงักอย่างสมบูรณ์ และห้องปฏิบัติการของคุณปิดตัวลงในที่สุด แต่นักศึกษานับพันอ้างถึงคุณว่าเป็นแรงบันดาลใจ',
                    zh: '🍎 校园传奇！你三次获得“年度教师”。你的研究完全停滞，实验室最终关闭，但成千上万的学生称你为他们的灵感来源。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🔬 Research or Die: "Refuse the extra load. Tell the Dean that your research brings in millions in grants and prestige. Threaten to move to a rival university."',
                    th: '🔬 วิจัยหรือตาย: "ปฏิเสธภาระงานเพิ่ม บอกคณบดีว่าการวิจัยของคุณนำเงินทุนและชื่อเสียงมาให้หลายล้าน ขู่ว่าจะย้ายไปมหาวิทยาลัยคู่แข่ง"',
                    zh: '🔬 不研究毋宁死：“拒绝额外的工作量。告诉院长你的研究带来了数百万的拨款和声望。威胁要转到竞争对手的大学。”'
                },
                consequence: {
                    en: '♟️ Power Play Won! The Dean backs down, terrified of losing your grant money. You keep your research time, but the administration now hates you and cuts your admin support.',
                    th: '♟️ ชนะเกมอำนาจ! คณบดีถอยด้วยความกลัวว่าจะเสียเงินทุนของคุณ คุณรักษาเวลาวิจัยไว้ได้ แต่ฝ่ายบริหารเกลียดคุณและตัดการสนับสนุนด้านบริหาร',
                    zh: '♟️ 权力博弈胜利！院长退缩了，害怕失去你的拨款。你保留了研究时间，但管理层现在讨厌你并削减了你的行政支持。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Delegate Everything: "Accept the load on paper, but have your PhD students teach all the classes. You show up for the first and last lecture only."',
                    th: '🔄 มอบหมายทุกอย่าง: "รับภาระงานในกระดาษ แต่ให้นักศึกษาปริญญาเอกสอนทุกคาบ คุณปรากฏตัวเฉพาะเลกเชอร์แรกและท้ายสุดเท่านั้น"',
                    zh: '🔄 授权一切：“名义上接受工作量，但让你的博士生教授所有课程。你只在第一堂和最后一堂课出现。”'
                },
                consequence: {
                    en: '😠 Scandal! Undergrads feel cheated and file a formal complaint. You are reprimanded and forced to teach remedial biology as punishment. Research ruined.',
                    th: '😠 เรื่องอื้อฉาว! นักศึกษาปริญญาตรีรู้สึกถูกโกงและยื่นเรื่องร้องเรียนทางการ คุณถูกตำหนิและบังคับให้สอนชีววิทยาซ่อมเสริมเป็นการลงโทษ การวิจัยพังทลาย',
                    zh: '😠 注意！本科生感到受骗并提起正式投诉。你受到谴责并被迫教授补习生物学作为惩罚。研究被毁。'
                },
                stats: { competence: 20, ethics: -20, leadership: -30, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '💡 Course Innovation: "Redesign the courses to be research-based. Use the hundreds of undergraduates as data collectors for your project. Integrate teaching AND research."',
                    th: '💡 นวัตกรรมหลักสูตร: "ออกแบบหลักสูตรใหม่ให้เป็นฐานการวิจัย ใช้นักศึกษานับร้อยเป็นผู้เก็บข้อมูลสำหรับโครงการของคุณ บูรณาการการสอนและการวิจัย"',
                    zh: '💡 课程创新：“重新设计课程，使其以研究为基础。利用数百名本科生作为你项目的数据收集者。整合教学与研究。”'
                },
                consequence: {
                    en: '🚀 Massive Scalability! You turn a burden into an asset. Students love doing "real science," and your data collection rate explodes. A pedagogical masterpiece.',
                    th: '🚀 การขยายตัวมหาศาล! คุณเปลี่ยนภาระให้เป็นสินทรัพย์ นักศึกษาชอบทำ "วิทยาศาสตร์จริง" และอัตราการเก็บข้อมูลของคุณพุ่งสูงขึ้น ผลงานชิ้นเอกทางการสอน',
                    zh: '🚀 大规模可扩展性！你把负担变成了资产。学生们喜欢做“真正的科学”，你的数据收集率呈爆炸式增长。教学杰作。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 }
            }
        ]
    },
    {
        id: 'marine_040',
        text: {
            en: '🧬 The Microplastic Bombshell: Your team finds conclusive evidence that microplastics in common seafood are causing subtle cognitive decline in humans. Publishing will destroy the global fishing industry overnight.',
            th: '🧬 ข่าวใหญ่ไมโครพลาสติก: ทีมของคุณพบหลักฐานที่สรุปได้ว่าไมโครพลาสติกในอาหารทะเลทั่วไปทำให้เกิดความเสื่อมถอยทางสติปัญญาในมนุษย์อย่างแนบเนียน การตีพิมพ์จะทำลายอุตสาหกรรมประมงทั่วโลกในชั่วข้ามคืน',
            zh: '🧬 微塑料炸弹：你的团队发现了确凿的证据，表明普通海鲜中的微塑料正在导致人类认知能力的微妙下降。发布这一消息将在一夜之间摧毁全球渔业。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Publish Immediately: "The public has a right to know. Health comes first, regardless of economic cost. Upload the preprint tonight."',
                    th: '📢 ตีพิมพ์ทันที: "ประชาชนมีสิทธิ์รู้ สุขภาพมาก่อน โดยไม่คำนึงถึงต้นทุนทางเศรษฐกิจ อัปโหลดบทความฉบับร่างคืนนี้"',
                    zh: '📢 立即发布：“公众有权知道。无论经济代价如何，健康至上。今晚上传预印本。”'
                },
                consequence: {
                    en: '📉 Economic Collapse! Seafood sales drop 90%. Coastal economies crash. You receive death threats from fishermen, but you likely saved millions of IQ points.',
                    th: '📉 เศรษฐกิจพังทลาย! ยอดขายอาหารทะเลลดลง 90% เศรษฐกิจชายฝั่งตกต่ำ คุณได้รับคำขู่ฆ่าจากชาวประมง แต่คุณน่าจะช่วยรักษา IQ ของผู้คนนับล้าน',
                    zh: '📉 经济崩溃！海鲜销量下降90%。沿海经济崩溃。你收到渔民的死亡威胁，但你可能挽救了数百万的智商点。'
                },
                stats: { competence: 40, ethics: 50, leadership: 20, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🕵️ Covert Action: "Brief the WHO and top government officials in a closed-door session. Let them manage the transition and regulation gradually without panic."',
                    th: '🕵️ การดำเนินการลับ: "สรุปให้ WHO และเจ้าหน้าที่รัฐระดับสูงฟังในเซสชันปิดประตู ให้พวกเขาจัดการการเปลี่ยนแปลงและกฎระเบียบอย่างค่อยเป็นค่อยไปโดยไม่แตกตื่น"',
                    zh: '🕵️ 秘密行动：“在闭门会议上向世卫组织和高级政府官员通报情况。让他们在不引起恐慌的情况下逐步管理过渡和监管。”'
                },
                consequence: {
                    en: '🕴️ Deep State Science! Regulations tighten quietly over 5 years. The industry adapts. But when the truth leaks, you are accused of a conspiracy of silence.',
                    th: '🕴️ วิทยาศาสตร์รัฐลึก! กฎระเบียบเข้มงวดขึ้นอย่างเงียบๆ ใน 5 ปี อุตสาหกรรมปรับตัว แต่เมื่อความจริงรั่วไหล คุณถูกกล่าวหาว่าสมรู้ร่วมคิดปิดบัง',
                    zh: '🕴️以此深层国家科学！法规在5年内悄然收紧。行业适应了。但当真相泄露时，你被指控参与沉默阴谋。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🔬 Seek a Solution First: "Delay publication for 1 year. Focus the lab entirely on finding a filtration method or enzyme that removes the plastic. Offer the problem AND the cure."',
                    th: '🔬 หาวิธีแก้ไขก่อน: "ชะลอการตีพิมพ์ 1 ปี มุ่งเน้นห้องปฏิบัติการไปที่การหาวิธีการกรองหรือเอนไซม์ที่กำจัดพลาสติก เสนอปัญหาและวิธีรักษา"',
                    zh: '🔬 首先寻求解决方案：“推迟1年发布。将实验室完全集中在寻找去除塑料的过滤方法或酶上。同时提供问题和治疗方案。”'
                },
                consequence: {
                    en: '💊 The Complete Package! You delay the warning, which is risky, but you unveil a solution alongside the bad news. The industry adopts your tech to save itself.',
                    th: '💊 แพ็คเกจที่สมบูรณ์! คุณชะลอคำเตือนซึ่งเสี่ยง แต่คุณเปิดเผยวิธีแก้ไขพร้อมกับข่าวร้าย อุตสาหกรรมรับเทคโนโลยีของคุณไปใช้เพื่อช่วยตัวเอง',
                    zh: '💊 完整方案！你推迟了警告，这有风险，但在发布坏消息的同时你也公布了解决方案。行业采用你的技术来自救。'
                },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🗑️ Delete the Data: "The chaos isn\'t worth it. The decline is subtle anyway. We bury the study and shift research focus. I won\'t be the destroyer of worlds."',
                    th: '🗑️ ลบข้อมูล: "ความวุ่นวายไม่คุ้มค่า ความเสื่อมถอยนั้นแนบเนียนอยู่แล้ว เราจะฝังการศึกษาและเปลี่ยนจุดเน้นการวิจัย ฉันจะ ไม่เป็นผู้ทำลายล้างโลก"',
                    zh: '🗑️ 删除数据：“混乱是不值得的。反正这种下降是微妙的。我们埋葬这项研究并转移研究重心。我不会成为世界的毁灭者。”'
                },
                consequence: {
                    en: '😶 Soul Erosion. You keep the secret. The industry thrives, but every time you see a child eat fish, you feel a pang of guilt. You burn out and quit science early.',
                    th: '😶 การกัดกร่อนจิตวิญญาณ คุณเก็บความลับ อุตสาหกรรมเติบโต แต่ทุกครั้งที่คุณเห็นเด็กกินปลา คุณรู้สึกผิด คุณหมดไฟและเลิกทำวิทยาศาสตร์ก่อนกำหนด',
                    zh: '😶 灵魂侵蚀。你保守秘密。行业繁荣，但每当你看到孩子吃鱼，你都会感到一阵内疚。你精疲力竭，早早退出了科学界。'
                },
                stats: { competence: -10, ethics: -50, leadership: -20, innovation: -10 }
            }
        ]
    },
    {
        id: 'marine_041',
        text: {
            en: '🎪 The Aquarium Dilemma: A billionaire wants to fund your entire research institute for 10 years ($100M). In exchange, he wants you to capture a live Giant Squid for his new "Mega-Aquarium" in Dubai. It will likely live only a few months in captivity.',
            th: '🎪 ภาวะกลืนไม่เข้าคายไม่ออกของพิพิธภัณฑ์สัตว์น้ำ: มหาเศรษฐีต้องการระดมทุนสถาบันวิจัยของคุณทั้งหมดเป็นเวลา 10 ปี (100 ล้านดอลลาร์) เพื่อแลกเปลี่ยน เขาต้องการให้คุณจับปลาหมึกยักษ์ที่มีชีวิตสำหรับ "เมกะพิพิธภัณฑ์สัตว์น้ำ" ใหม่ของเขาในดูไบ มันน่าจะมีชีวิตอยู่ได้เพียงไม่กี่เดือนในที่กักขัง',
            zh: '🎪 水族馆的困境：一位亿万富翁想为你的整个研究所提供10年的在资助（1亿美元）。做为交换，他希望你为他在迪拜的新“超级水族馆”捕捉一只活的大王乌贼。它在圈养中可能只能活几个月。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎣 Capture It: "The sacrifice of one animal will fund the conservation of thousands. It is a necessary evil for the greater good of the institute."',
                    th: '🎣 จับมัน: "การเสียสละสัตว์หนึ่งตัวจะเป็นทุนในการอนุรักษ์สัตว์พันตัว มันเป็นความชั่วร้ายที่จำเป็นเพื่อประโยชน์ที่ยิ่งใหญ่ของสถาบัน"',
                    zh: '🎣 捕捉它：“牺牲一只动物将资助数千只动物的保护。为了研究所更大的利益，这是一种必要的恶。”'
                },
                consequence: {
                    en: '💸 Blood Money! The institute flourishes with cash. The squid dies in 3 weeks, depressing the public. Conservationists call you a sellout, but your data output is huge.',
                    th: '💸 เงินเปื้อนเลือด! สถาบันเจริญรุ่งเรืองด้วยเงินสด ปลาหมึกตายใน 3 สัปดาห์ ทำให้ประชาชนหดหู่ นักอนุรักษ์เรียกคุณว่าคนขายชาติ แต่ผลลัพธ์ข้อมูลของคุณมหาศาล',
                    zh: '💸以此血腥的钱！研究所在资金的支持下蓬勃发展。乌贼3周后死亡，让公众感到沮丧。保护主义者称你为叛徒，但你的数据产出是巨大的。'
                },
                stats: { competence: 40, ethics: -30, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🙅 Refuse on Principle: "We study life; we don\'t sell it for entertainment. Keep your money. We will scrape by on government grants."',
                    th: '🙅 ปฏิเสธตามหลักการ: "เราศึกษาชีวิต เราไม่ขายมันเพื่อความบันเทิง เก็บเงินของคุณไว้ เราจะอยู่ได้ด้วยเงินทุนรัฐบาล"',
                    zh: '🙅 原则上拒绝：“我们研究生命；我们不出售它用于娱乐。留着你的钱吧。我们将通过政府拨款勉强度日。”'
                },
                consequence: {
                    en: '🎖️ Dignity Intact! The staff respects you immensely. However, budget cuts follow, and you have to lay off 20% of your researchers. It\'s a hard road.',
                    th: '🎖️ ศักดิ์ศรีครบถ้วน! พนักงานเคารพคุณอย่างมาก อย่างไรก็ตาม การตัดงบประมาณตามมา และคุณต้องเลิกจ้างนักวิจัย 20% เป็นเส้นทางที่ยากลำบาก',
                    zh: '🎖️ 尊严完好！员工非常尊重你。然而，随后预算削减，你不得不解雇20%的研究人员。这是一条艰难的道路。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤖 Counter-Offer: "A live squid will die and look sad. Let\'s use 5% of that donation to build the world\'s most realistic animatronic squid robot. It\'s cooler and ethical."',
                    th: '🤖 ข้อเสนอสวนกลับ: "ปลาหมึกที่มีชีวิตจะตายและดูเศร้า ใช้เงินบริจาค 5% เพื่อสร้างหุ่นยนต์ปลาหมึกแอนิเมโทรนิกที่สมจริงที่สุดในโลกกันเถอะ มันเจ๋งกว่าและมีจริยธรรม"',
                    zh: '🤖 反报价：“活乌贼会死，看起来很悲伤。让我们用这笔捐款的5%来建造世界上最逼真的仿生乌贼机器人。这更酷且合乎道德。”'
                },
                consequence: {
                    en: '💡 Tech Pivot! The billionaire loves the "tech angle." You get the funding AND establish a marine robotics division. A win for everyone.',
                    th: '💡 การหมุนเทคโนโลยี! มหาเศรษฐีชอบ "มุมเทคโนโลยี" คุณได้เงินทุนและก่อตั้งแผนกหุ่นยนต์ทางทะเล ชัยชนะสำหรับทุกคน',
                    zh: '💡 技术转型！亿万富翁喜欢“技术角度”。你获得了资金并建立了海洋机器人部门。这对每个人都是胜利。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🎞️ The Documentary Swap: "No captivity. Instead, finance a high-tech expedition to FILM the squid in 8K 3D. Create an immersive VR experience for the aquarium."',
                    th: '🎞️ การแลกเปลี่ยนสารคดี: "ไม่มีการกักขัง ให้เงินทุนการเดินทางไฮเทคเพื่อถ่ายภาพปลาหมึกใน 8K 3D แทน สร้างประสบการณ์ VR ที่ดื่มด่ำสำหรับพิพิธภัณฑ์สัตว์น้ำ"',
                    zh: '🎞️ 纪录片交换：“不圈养。相反，资助高科技探险队以8K 3D拍摄乌贼。为水族馆创造身临其境的VR体验。”'
                },
                consequence: {
                    en: '🎥 Media Sensation! The VR exhibit is a massive hit. You get funded for the expedition, and the squid stays in the deep. Public engagement skyrockets.',
                    th: '🎥 ความฮือฮาของสื่อ! นิทรรศการ VR ประสบความสำเร็จอย่างมาก คุณได้รับทุนสำหรับการเดินทางและปลาหมึกยังคงอยู่ในความลึก การมีส่วนร่วมของสาธารณะพุ่งสูงขึ้น',
                    zh: '🎥 媒体轰动！VR展览获得了巨大的成功。你获得了探险资助，乌贼留在了深海。公众参与度飙升。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 40 }
            }
        ]
    },
    {
        id: 'marine_042',
        text: {
            en: '🌊 Rogue Wave Prediction: You\'ve developed an algorithm that predicts deadly rogue waves 20 minutes in advance. However, it has a 40% false alarm rate. A massive storm is approaching a busy shipping lane.',
            th: '🌊 การทำนายคลื่นยักษ์: คุณได้พัฒนาอัลกอริทึมที่ทำนายคลื่นยักษ์อันตรายล่วงหน้า 20 นาที อย่างไรก็ตาม มีอัตราการเตือนผิดพลาด 40% พายุใหญ่กำลังเข้าใกล้เส้นทางเดินเรือที่พลุกพล่าน',
            zh: '🌊 异常波浪预测：你开发了一种算法，可以提前20分钟预测致命的异常波浪。然而，它的误报率为40%。一场巨大的风暴正在逼近繁忙的航道。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Issue All Warnings: "If the algorithm says wave, we warn. Better to panic 10 ships unnecessarily than let one sink. Safety first."',
                    th: '📢 ออกคำเตือนทั้งหมด: "ถ้าอัลกอริทึมบอกว่าคลื่น เราเตือน ให้เรือ 10 ลำแตกตื่นโดยไม่จำเป็นดีกว่าปล่อยให้ 1 ลำจม ปลอดภัยไว้ก่อน"',
                    zh: '📢 发布所有警告：“如果算法说有波浪，我们就警告。让10艘船不必要地恐慌总比让一艘沉没好。安全第一。”'
                },
                consequence: {
                    en: '🐺 Boy Who Cried Wolf! Captains lose trust in the system after repeated false alarms. Weeks later, they ignore a real warning, and a ship is lost.',
                    th: '🐺 เด็กเลี้ยงแกะ! กัปตันสูญเสียความไว้วางใจในระบบหลังจากเตือนผิดซ้ำซาก หลายสัปดาห์ต่อมา พวกเขาเพิกเฉยต่อคำเตือนจริง และเรือก็สูญหาย',
                    zh: '🐺 狼来了！经过多次误报，船长们失去了对系统的信任。几周后，他们无视了真正的警告，一艘船失踪了。'
                },
                stats: { competence: 30, ethics: 40, leadership: -10, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Suppress Until Perfected: "Do not release the system live yet. Gather data from this storm to train the AI. We cannot release a flawed safety product."',
                    th: '🤐 ปิดบังจนกว่าจะสมบูรณ์: "อย่าเพิ่งปล่อยระบบใช้งานจริง รวบรวมข้อมูลจากพายุนี้เพื่อฝึก AI เราไม่สามารถปล่อยผลิตภัณฑ์ความปลอดภัยที่มีข้อบกพร่องได้"',
                    zh: '🤐 压制直到完善：“还不要发布该系统。从这场风暴中收集数据来训练AI。我们不能发布有缺陷的安全产品。”'
                },
                consequence: {
                    en: '💀 Silent Observer! You watch the data as a rogue wave hits a tanker. You could have saved them, but you didn\'t. The guilt haunts you, but your Version 2.0 saves thousands later.',
                    th: '💀 ผู้สังเกตการณ์เงียบ! คุณดูข้อมูลขณะที่คลื่นยักษ์โจมตีเรือบรรทุกน้ำมัน คุณช่วยพวกเขาได้ แต่คุณไม่ทำ ความรู้สึกผิดตามหลอกหลอน แต่เวอร์ชัน 2.0 ของคุณช่วยคนนับพันในภายหลัง',
                    zh: '💀 沉默的观察者！你看着数据，异常波浪击中了一艘油轮。你本可以救他们，但你没有。内疚困扰着你，但你的2.0版本后来拯救了数千人。'
                },
                stats: { competence: 50, ethics: -20, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '📊 Probability Broadcasting: "Don\'t issue \'Warnings\'. Issue \'Risk Probabilities\'. Send the raw % chance to captains and let them decide their own risk tolerance."',
                    th: '📊 การออกอากาศความน่าจะเป็น: "ไม่ออก \'คำเตือน\' ออก \'ความน่าจะเป็นของความเสี่ยง\' ส่ง % โอกาสดิบให้กัปตันและให้พวกเขาตัดสินใจยอมรับความเสี่ยงเอง"',
                    zh: '📊 概率广播：“不要发布‘警告’。发布‘风险概率’。将原始百分比几率发送给船长，让他们决定自己的风险承受能力。”'
                },
                consequence: {
                    en: '🤝 Distributed Trust! Smart captains divert, reckless ones don\'t. The system is respected because it\'s transparent. It becomes the maritime standard.',
                    th: '🤝 ความไว้วางใจแบบกระจาย! กัปตันที่ฉลาดเบี่ยงเส้นทาง คนที่ประมาทไม่ทำ ระบบได้รับความเคารพเพราะโปร่งใส กลายเป็นมาตรฐานทางทะเล',
                    zh: '🤝 分布式信任！聪明的船长会改道，鲁莽的则不会。系统受到尊重，因为它是透明的。它成为海事标准。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📡 Only High-Confidence Alerts: "Filter the output. Only warn when the AI is >90% sure. We will miss some smaller rogue waves, but every warning we send will be real."',
                    th: '📡 การแจ้งเตือนความมั่นใจสูงเท่านั้น: "กรองเอาต์พุต เตือนเฉพาะเมื่อ AI มั่นใจ >90% เราจะพลาดคลื่นยักษ์ขนาดเล็กบ้าง แต่ทุกคำเตือนที่เราส่งจะเป็นจริง"',
                    zh: '📡 仅高置信度警报：“过滤输出。仅当AI确信度>90%时才发出警告。我们会错过一些较小的异常波浪，但我们发出的每一个警告都是真实的。”'
                },
                consequence: {
                    en: '🎯 Credibility King! You miss a few waves, causing minor damage, but no one dies. Trust in the system builds slowly but surely.',
                    th: '🎯 ราชาความน่าเชื่อถือ! คุณพลาดคลื่นไม่กี่ลูก ทำให้เกิดความเสียหายเล็กน้อย แต่ไม่มีใครตาย ความไว้วางใจในระบบสร้างขึ้นอย่างช้าๆ แต่แน่นอน',
                    zh: '🎯 信誉之王！你错过了一些波浪，造成了轻微的破坏，但没有人死亡。对系统的信任缓慢但肯定地建立起来。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 30 }
            }
        ]
    }
    ,
    {
        id: 'marine_043',
        text: {
            en: '🏴 The Pirate Fishing Fleet: Your satellite data reveals a massive illegal fishing fleet operating in international waters, using slave labor and destroying seabed ecosystems. Reporting them to local authorities is useless due to corruption.',
            th: '🏴 กองเรือประมงโจรสลัด: ข้อมูลดาวเทียมของคุณเผยให้เห็นกองเรือประมงผิดกฎหมายขนาดใหญ่ที่ปฏิบัติการในน่านน้ำสากล ใช้แรงงานทาสและทำลายระบบนิเวศพื้นทะเล การรายงานต่อเจ้าหน้าที่ท้องถิ่นไม่มีประโยชน์เนื่องจากการทุจริต',
            zh: '🏴 海盗捕鱼船队：你的卫星数据显示，一支庞大的非法捕鱼船队正在国际水域作业，使用奴隶劳工并破坏海床生态系统。由于腐败，向当地政府报告毫无用处。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚔️ Direct Action: "Leak the coordinates to a radical vigilante group that sinks illegal ships. It\'s illegal, but it\'s the only way to stop them."',
                    th: '⚔️ การดำเนินการโดยตรง: "รั่วไหลพิกัดให้กับกลุ่มศาลเตี้ยหัวรุนแรงที่จมเรือผิดกฎหมาย มันผิดกฎหมาย แต่มันเป็นวิธีเดียวที่จะหยุดพวกเขา"',
                    zh: '⚔️ 直接行动：“将坐标泄露给一个激进的义务警员团体，他们会击沉非法船只。这是非法的，但这是阻止他们的唯一方法。”'
                },
                consequence: {
                    en: '💥 Vigilante Justice! Three ships are sunk. The fleet disperses in fear. You are secretly investigated by Interpol but are a hero to the fish.',
                    th: '💥 ความยุติธรรมแบบศาลเตี้ย! เรือสามลำถูกจม กองเรือกระจัดกระจายด้วยความกลัว คุณถูกตำรวจสากลสอบสวนอย่างลับๆ แต่เป็นฮีโร่สำหรับปลา',
                    zh: '💥 义务警员的正义！三艘船沉没。船队在恐惧中散去。国际刑警组织秘密调查你，但你是鱼类的英雄。'
                },
                stats: { competence: 40, ethics: -20, leadership: -30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '📰 Media Exposure: "Send the high-res images to the New York Times and CNN. Shame the countries flagging these ships into action."',
                    th: '📰 การเปิดเผยต่อสื่อ: "ส่งภาพความละเอียดสูงให้กับ New York Times และ CNN ประณามประเทศที่ติดธงเรือเหล่านี้ให้ดำเนินการ"',
                    zh: '📰 媒体曝光：“将高分辨率图像发送给《纽约时报》和CNN。羞辱悬挂这些船只旗帜的国家采取行动。”'
                },
                consequence: {
                    en: '📰 Global Scandal! The story wins a Pulitzer. The public boycotts the seafood brands involved, forcing a major cleanup.',
                    th: '📰 เรื่องอื้อฉาวระดับโลก! เรื่องนี้ได้รับรางวัลพูลิตเซอร์ ประชาชนคว่ำบาตรแบรนด์อาหารทะเลที่เกี่ยวข้อง บังคับให้เกิดการกวาดล้างครั้งใหญ่',
                    zh: '📰 全球丑闻！这篇报道获得了普利策奖。公众抵制相关海鲜品牌，迫使进行大规模清理。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Build a Case: "Work quietly with international prosecutors to build a bulletproof legal case against the owners. It takes years, but aims for the head."',
                    th: '🕵️ สร้างคดี: "ทำงานเงียบๆ กับอัยการระหว่างประเทศเพื่อสร้างคดีทางกฎหมายที่รัดกุมต่อเจ้าของ ใช้เวลาหลายปีแต่มุ่งเป้าไปที่หัวหน้า"',
                    zh: '🕵️ 建立案件：“与国际检察官悄悄合作，针对船主建立无懈可击的法律案件。这需要数年时间，但目标是首脑。”'
                },
                consequence: {
                    en: '⚖️ The Long Game! The fleet continues fishing for 3 years, killing millions of tons. Eventually, you jail the kingpin, but the ocean paid the price.',
                    th: '⚖️ เกมยาว! กองเรือยังคงจับปลาต่อไปเป็นเวลา 3 ปี ฆ่าปลาไปหลายล้านตัน ในที่สุดคุณก็จับตัวการใหญ่ได้ แต่มหาสมุทรต้องจ่ายราคา',
                    zh: '⚖️ 持久战！船队继续捕鱼3年，杀死了数百万吨鱼类。最终你把主谋关进了监狱，但海洋付出了代价。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🛰️ Tech Disruption: "Hack their navigation systems to report false locations, or jam their comms. Make it too expensive and frustrating for them to operate."',
                    th: '🛰️ การรบกวนทางเทคโนโลยี: "แฮ็กระบบนำทางของพวกเขาเพื่อรายงานตำแหน่งเท็จ หรือรบกวนการสื่อสาร ทำให้ค่าใช้จ่ายสูงและน่าหงุดหงิดเกินกว่าจะดำเนินงาน"',
                    zh: '🛰️ 技术干扰：“入侵他们的导航系统以报告虚假位置，或干扰他们的通讯。让他们运营起来太昂贵、太令人沮丧。”'
                },
                consequence: {
                    en: '💻 Cyber-Saboteur! You create chaos in the fleet without firing a shot. They move to easier waters. Clever, illegally effective, and slightly dangerous.',
                    th: '💻 ผู้ก่อวินาศกรรมไซเบอร์! คุณสร้างความโกลาหลในกองเรือโดยไม่ต้องยิงกระสุน พวกเขาย้ายไปน่านน้ำที่ง่ายกว่า ฉลาด ผิดกฎหมายแต่ได้ผล และอันตรายเล็กน้อย',
                    zh: '💻 网络破坏者！你不费一枪一弹就在船队中制造了混乱。他们转移到了更容易的水域。聪明，非法有效，有点危险。'
                },
                stats: { competence: 50, ethics: 10, leadership: -10, innovation: 50 }
            }
        ]
    },
    {
        id: 'marine_044',
        text: {
            en: '👽 The Abyssal Anomaly: Your deep-sea rover brings back an organism that defies known biology—it has triple-helix DNA and silicon-based structures. It could be ancient Earth life or... something else.',
            th: '👽 ความผิดปกติในห้วงลึก: ยานสำรวจทะเลลึกของคุณนำสิ่งมีชีวิตที่ท้าทายชีววิทยาที่เรารู้จักกลับมา มันมี DNA เกลียวสามและโครงสร้างฐานซิลิคอน มันอาจเป็นสิ่งมีชีวิตโบราณของโลกหรือ...อย่างอื่น',
            zh: '👽 深渊异常：你的深海探测车带回了一种违背已知生物学的生物——它具有三螺旋DNA和硅基结构。它可能是古老的地球生命，或者……其他东西。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Open Source Discovery: "This belongs to humanity. Upload the genetic sequence to the internet immediately. Let the global hive-mind analyze it."',
                    th: '📢 การค้นพบแบบโอเพ่นซอร์ส: "สิ่งนี้เป็นของมนุษยชาติ อัปโหลดลำดับพันธุกรรมสู่อินเทอร์เน็ตทันที ให้สมองกลรวมทั่วโลกช่วยกันวิเคราะห์"',
                    zh: '📢 开源发现：“这属于全人类。立即将基因序列上传到互联网。让全球蜂巢思维来分析它。”'
                },
                consequence: {
                    en: '🌍 Pandora\'s Box! A bio-hacker in a garage synthesizes a dangerous protein from your data. But science advances 100 years in a month.',
                    th: '🌍 กล่องแพนดอร่า! ไบโอแฮ็กเกอร์ในโรงรถสังเคราะห์โปรตีนอันตรายจากข้อมูลของคุณ แต่วิทยาศาสตร์ก้าวหน้าไป 100 ปีในหนึ่งเดือน',
                    zh: '🌍 潘多拉魔盒！车库里的生物黑客根据你的数据合成了一种危险的蛋白质。但科学在一个月内进步了100年。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🔐 Classified Quarantine: "This is potentially a bio-hazard or alien contact. Lockdown the lab. Call the military and the CDC. No one leaves."',
                    th: '🔐 การกักกันแบบลับ: "นี่อาจเป็นอันตรายทางชีวภาพหรือการติดต่อกับต่างดาว ล็อกดาวน์ห้องปฏิบัติการ เรียกทหารและ CDC ห้ามใครออก"',
                    zh: '🔐 机密隔离：“这可能是生物危害或外星接触。封锁实验室。呼叫军队和疾控中心。没人能离开。”'
                },
                consequence: {
                    en: '🔒 Dark Site! The government seizes your lab. You disappear into a secret facility for 10 years. The world never knows, but you stay safe.',
                    th: '🔒 สถานที่มืด! รัฐบาลยึดห้องปฏิบัติการของคุณ คุณหายตัวไปในสถานที่ลับ 10 ปี โลกไม่เคยรู้ แต่คุณปลอดภัย',
                    zh: '🔒 黑暗地点！政府接管了你的实验室。你在一个秘密设施里消失了10年。世界永远不知道，但你保持安全。'
                },
                stats: { competence: 40, ethics: 10, leadership: -20, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔬 Careful Consortium: "Invite 5 world-leading experts to a secret summit. Verify, re-verify, and publish a joint paper in Nature to control the narrative."',
                    th: '🔬 การรวมกลุ่มอย่างระมัดระวัง: "เชิญผู้เชี่ยวชาญชั้นนำระดับโลก 5 คนเข้าร่วมการประชุมลับ ตรวจสอบ ซ้ำ แล้วตีพิมพ์บทความร่วมใน Nature เพื่อควบคุมการเล่าเรื่อง"',
                    zh: '🔬 谨慎的联盟：“邀请5位世界顶尖专家参加秘密峰会。验证，再验证，并在《自然》杂志上发表联合论文以控制叙事。”'
                },
                consequence: {
                    en: '🏆 Scientific Nobel! The discovery is handled perfectly. You are etched in history as the discoverer of "Life 2.0".',
                    th: '🏆 รางวัลโนเบลทางวิทยาศาสตร์! การค้นพบได้รับการจัดการอย่างสมบูรณ์แบบ คุณถูกจารึกในประวัติศาสตร์ว่าเป็นผู้ค้นพบ "Life 2.0"',
                    zh: '🏆 科学诺贝尔奖！这一发现得到了完美的处理。你作为“生命2.0”的发现者载入史册。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Patent the Genome: "This biochemistry is unique. File patents on the silicon structures before publishing. This will fund the institute forever."',
                    th: '💰 จดสิทธิบัตรจีโนม: "ชีวเคมีนี้มีเอกลักษณ์ ยื่นจดสิทธิบัตรโครงสร้างซิลิคอนก่อนตีพิมพ์ สิ่งนี้จะเป็นทุนให้สถาบันตลอดไป"',
                    zh: '💰 基因组专利：“这种生物化学是独特的。在发布之前申请硅结构的专利。这将永远资助研究所。”'
                },
                consequence: {
                    en: '💲 Corporate Monopoly! You get rich, but lawyers stifle research on the organism for decades. Humanity loses out on the knowledge.',
                    th: '💲 การผูกขาดของบริษัท! คุณร่ำรวย แต่ทนายความขัดขวางการวิจัยเกี่ยวกับสิ่งมีชีวิตนี้นานหลายทศวรรษ มนุษยชาติสูญเสียความรู้',
                    zh: '💲 企业垄断！你发财了，但律师几十年来一直扼杀对该生物的研究。人类失去了这些知识。'
                },
                stats: { competence: 20, ethics: -40, leadership: -10, innovation: 10 }
            }
        ]
    },
    {
        id: 'marine_045',
        text: {
            en: '🎣 Indigenous Rights vs. Conservation: A local indigenous tribe has hunted dugongs for thousands of years as part of their culture. But the dugong population is crashing due to industrial fishing and climate change. The tribe wants to continue their small quota.',
            th: '🎣 สิทธิ์ชนพื้นเมืองกับการอนุรักษ์: ชนเผ่าพื้นเมืองในท้องถิ่นล่าพะยูนมานานหลายพันปีซึ่งเป็นส่วนหนึ่งของวัฒนธรรม แต่ประชากรพะยูนกำลังลดลงอย่างรวดเร็วเนื่องจากการประมงอุตสาหกรรมและการเปลี่ยนแปลงสภาพภูมิอากาศ ชนเผ่าต้องการโควต้าเล็กน้อยต่อไป',
            zh: '🎣 土著权利与保护：当地一个土著部落几千年来一直捕猎儒艮，这是他们文化的一部分。但由于工业捕鱼和气候变化，儒艮的数量正在锐减。部落希望继续他们的小配额。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Enforce Total Ban: "Mathematically, the species cannot sustain ANY loss. I must recommend a total ban, even if it destroys their tradition."',
                    th: '🚫 บังคับใช้การห้ามทั้งหมด: "ทางคณิตศาสตร์ สายพันธุ์ไม่สามารถรองรับการสูญเสียใดๆ ได้ ฉันต้องแนะนำให้ห้ามทั้งหมด แม้ว่าจะทำลายประเพณีของพวกเขาก็ตาม"',
                    zh: '🚫 实施全面禁令：“从数学上讲，该物种无法承受任何损失。我必须建议全面禁令，即使这会破坏他们的传统。”'
                },
                consequence: {
                    en: '💔 Colonial Science! The tribe ignores the ban out of spite. Conflict erupts. You saved the dugong on paper, but in reality, poaching increases.',
                    th: '💔 วิทยาศาสตร์อาณานิคม! ชนเผ่าเพิกเฉยต่อการห้ามด้วยความโกรธ ความขัดแย้งปะทุขึ้น คุณช่วยพะยูนในกระดาษ แต่ในความเป็นจริง การลักลอบล่าเพิ่มขึ้น',
                    zh: '💔 殖民科学！部落出于怨恨无视禁令。冲突爆发。你在纸面上拯救了儒艮，但在现实中，偷猎增加了。'
                },
                stats: { competence: 30, ethics: -20, leadership: -10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Guardianship Program: "Empower the tribe as the legal guardians of the dugong. Pay them to patrol against industrial boats. Allow a ceremonial hunt only if the population recovers."',
                    th: '🤝 โครงการผู้พิทักษ์: "ให้อำนาจชนลเผ่าเป็นผู้พิทักษ์พะยูนตามกฎหมาย จ่ายเงินให้พวกเขาลาดตระเวนต่อต้านเรืออุตสาหกรรม อนุญาตให้ล่าเชิงพิธีการได้ต่อเมื่อประชากรฟื้นตัว"',
                    zh: '🤝 监护计划：“赋予部落作为儒艮法定监护人的权力。付钱让他们巡逻以对抗工业船只。只有在种群恢复的情况下才允许仪式性捕猎。”'
                },
                consequence: {
                    en: '🌟 Cultural Conservation! The tribe becomes the fiercest protectors of the animals. Industrial boats are driven away. The population stabilizes.',
                    th: '🌟 การอนุรักษ์วัฒนธรรม! ชนเผ่ากลายเป็นผู้ปกป้องสัตว์ที่ดุเดือดที่สุด เรืออุตสาหกรรมถูกขับไล่ ประชากรคงที่',
                    zh: '🌟 文化保护！部落成为这些动物最凶猛的保护者。工业船只被赶走。种群稳定下来。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🧪 Lab-Grown Meat: "Offer to synthesize dugong meat in the lab for their ceremonies. Keep the tradition alive without killing the animal."',
                    th: '🧪 เนื้อสังเคราะห์ในห้องแล็บ: "เสนอที่จะสังเคราะห์เนื้อพะยูนในห้องปฏิบัติการสำหรับพิธีกรรมของพวกเขา รักษาประเพณีโดยไม่ต้องฆ่าสัตว์"',
                    zh: '🧪 实验室培育的肉：“提议在实验室为他们的仪式合成儒艮肉。在不杀死动物的情况下保持传统的活力。”'
                },
                consequence: {
                    en: '🤔 Cultural Insult? Elders are offended, but the youth are interested. It\'s a weird, futuristic compromise that sort of works.',
                    th: '🤔 การดูถูกวัฒนธรรม? ผู้เฒ่ารู้สึกขุ่นเคือง แต่คนรุ่นใหม่สนใจ เป็นการประนีประนอมที่แปลกประหลาดและล้ำยุคที่พอจะใช้ได้',
                    zh: '🤔 文化侮辱？长辈们感到被冒犯，但年轻人很感兴趣。这是一个奇怪的、未来主义的妥协，有点用。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🙈 Ignore the Tribe: "Focus only on the industrial threats. The tribe\'s impact is negligible compared to the trawlers. Let them be."',
                    th: '🙈 เพิกเฉยต่อชนเผ่า: "มุ่งเน้นที่ภัยคุกคามทางอุตสาหกรรมเท่านั้น ผลกระทบของชนเผ่านั้นเล็กน้อยเมื่อเทียบกับเรือลากอวน ปล่อยพวกเขาไป"',
                    zh: '🙈 无视部落：“只关注工业威胁。与拖网渔船相比，部落的影响微乎其微。随他们去吧。”'
                },
                consequence: {
                    en: '📉 Partial Success. You stop the big boats, but the dugong population struggles to bounce back because every individual counts. Science required harder choices.',
                    th: '📉 ความสำเร็จบางส่วน คุณหยุดเรือใหญ่ได้ แต่ประชากรพะยูนดิ้นรนที่จะฟื้นตัวเพราะทุกตัวมีค่า วิทยาศาสตร์ต้องการทางเลือกที่ยากกว่า',
                    zh: '📉 部分成功。你阻止了大船，但儒艮种群难以反弹，因为每一只都很重要。科学需要更艰难的选择。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'marine_046',
        text: {
            en: '🌊 Ocean Literacy Crisis: A survey reveals that 80% of schoolchildren know more about the surface of Mars than the bottom of the ocean. You have a budget to launch a national education initiative.',
            th: '🌊 วิกฤตความรู้ทางมหาสมุทร: การสำรวจพบว่า 80% ของเด็กนักเรียนรู้เกี่ยวกับพื้นผิวดาวอังคารมากกว่าก้นมหาสมุทร คุณมีงบประมาณในการเปิดตัวโครงการริเริ่มด้านการศึกษาระดับชาติ',
            zh: '🌊 海洋素养危机：一项调查显示，80%的小学生对火星表面的了解超过了海底。你有预算发起一项国家教育倡议。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎮 The "Blue Fortnite": "Commission a hit video game studio to make an addictive, scientifically accurate survival game set in the deep ocean."',
                    th: '🎮 "Fortnite สีน้ำเงิน": "ว่าจ้างสตูดิโอวิดีโอเกมฮิตสร้างเกมเอาชีวิตรอดที่แม่นยำทางวิทยาศาสตร์และน่าติดตามซึ่งมีฉากในทะเลลึก"',
                    zh: '🎮 “蓝色堡垒之夜”：“委托一家热门视频游戏工作室制作一款令人上瘾、科学准确的深海生存游戏。”'
                },
                consequence: {
                    en: '🕹️ Cultural Phenomenon! 50 million kids play the game. They learn species names and mechanics. A generation of marine biologists is born.',
                    th: '🕹️ ปรากฏการณ์ทางวัฒนธรรม! เด็ก 50 ล้านคนเล่นเกม พวกเขาเรียนรู้ชื่อสายพันธุ์และกลไก นักชีววิทยาทางทะเลรุ่นหนึ่งถือกำเนิดขึ้น',
                    zh: '🕹️ 文化现象！5000万孩子玩这个游戏。他们学习物种名称和机制。一代海洋生物学家诞生了。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '📚 Standard Curriculum: "Rewrite the national science textbooks. Ensure every 5th grader dissects a squid and learns about currents. Old school but effective."',
                    th: '📚 หลักสูตรมาตรฐาน: "เขียนหนังสือเรียนวิทยาศาสตร์แห่งชาติใหม่ ตรวจสอบให้แน่ใจว่านักเรียนชั้นประถมปีที่ 5 ทุกคนได้ผ่าปลาหมึกและเรียนรู้เกี่ยวกับกระแสน้ำ แบบเก่าแต่ได้ผล"',
                    zh: '📚 标准课程：“重写国家科学教科书。确保每个五年级学生都解剖乌贼并学习洋流。老派但有效。”'
                },
                consequence: {
                    en: '🏫 Slow Burn. Knowledge improves steadily over 15 years. It\'s not flashy, but it builds a solid foundation of literacy.',
                    th: '🏫 การเผาผลาญช้า ความรู้ดีขึ้นอย่างมั่นคงใ 15 ปี ไม่หวือหวา แต่สร้างรากฐานความรู้ที่มั่นคง',
                    zh: '🏫 缓慢燃烧。知识在15年内稳步提高。它并不浮华，但建立了坚实的素养基础。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '📺 Netflix Series: "Partner with David Attenborough\'s successor for a 10-part high-budget documentary series. Emotional storytelling is key."',
                    th: '📺 ซีรีส์ Netflix: "ร่วมมือกับผู้สืบทอดของ David Attenborough สำหรับซีรีส์สารคดีงบสูง 10 ตอน การเล่าเรื่องด้วยอารมณ์คือกุญแจสำคัญ"',
                    zh: '📺 Netflix系列：“与大卫·爱登堡的继任者合作，通过一部10集的高预算纪录片系列。情感叙事是关键。”'
                },
                consequence: {
                    en: '🍿 Awareness Spike. Everyone talks about it for a month. Donations to charities rise, but actual knowledge retention is lower than the game.',
                    th: '🍿 ความตระหนักรู้พุ่งสูงขึ้น ทุกคนพูดถึงมันเป็นเวลาหนึ่งเดือน การบริจาคให้องค์กรการกุศลเพิ่มขึ้น แต่การจดจำความรู้จริงต่ำกว่าเกม',
                    zh: '🍿 意识激增。大家谈论了一个月。给慈善机构的捐款增加了，但实际知识保留率低于游戏。'
                },
                stats: { competence: 30, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🚌 Field Trips for All: "Spend the entire budget busing inland kids to the coast for one day. Let them touch the ocean."',
                    th: '🚌 ทัศนศึกษาสำหรับทุกคน: "ใช้งบประมาณทั้งหมดพารถบัสเด็กในพื้นที่ห่างไกลไปยังชายฝั่งเป็นเวลาหนึ่งวัน ให้พวกเขาได้สัมผัสมหาสมุทร"',
                    zh: '🚌 全员实地考察：“花光所有预算，用巴士把内陆的孩子送到海边待一天。让他们触摸海洋。”'
                },
                consequence: {
                    en: '💖 Core Memories. You blow the budget fast and reach fewer kids, but for those you reached, the experience is life-changing. Quality over quantity.',
                    th: '💖 ความทรงจำหลัก คุณใช้งบหมดเร็วและเข้าถึงเด็กน้อยลง แต่สำหรับคนที่คุณเข้าถึง ประสบการณ์นั้นเปลี่ยนชีวิต คุณภาพเหนือปริมาณ',
                    zh: '💖 核心记忆。你很快花光了预算，接触到的孩子较少，为了那些你接触到的孩子，这段经历改变了生活。质量胜于数量。'
                },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 40 }
            }
        ]
    },
    {
        id: 'marine_047',
        text: {
            en: '🌡️ The Coral Biobank: As ocean temperatures rise, reefs are dying. You have the chance to spearhead a "Noah\'s Ark" project: a cryogenic facility to store the DNA and embryos of every coral species. It costs $50M—money that could be used for reef restoration NOW.',
            th: '🌡️ ธนาคารชีวภาพปะการัง: เมื่ออุณหภูมิมหาสมุทรสูงขึ้น แนวปะการังกำลังตาย คุณมีโอกาสเป็นหัวหน้าโครงการ "เรือโนอาห์": สถานที่แช่แข็งเพื่อเก็บ DNA และตัวอ่อนของปะการังทุกสายพันธุ์ มีค่าใช้จ่าย 50 ล้านดอลลาร์ ซึ่งเป็นเงินที่สามารถใช้ฟื้นฟูแนวปะการังได้ทันที',
            zh: '🌡️ 珊瑚生物库：随着海洋温度升高，珊瑚礁正在死亡。你有机会带头开展“诺亚方舟”项目：一个低温设施，用于存储每种珊瑚物种的DNA和胚胎。耗资5000万美元——这笔钱本可以现在用于珊瑚礁恢复。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧊 Build the Ark: "Restoration is futile if the ocean keeps heating. We must save the genetic code for the future when we can terraform the oceans back."',
                    th: '🧊 สร้างเรือ: "การฟื้นฟูนั้นไร้ประโยชน์หากมหาสมุทรยังคงร้อนขึ้น เราต้องรหัสพันธุกรรมเก็บไว้สำหรับอนาคตเมื่อเราสามารถปรับสภาพมหาสมุทรกลับคืนมาได้"',
                    zh: '🧊 建造方舟：“如果海洋继续变暖，恢复是徒劳的。我们必须保存遗传密码，以便将来我们能够改造海洋时使用。”'
                },
                consequence: {
                    en: '❄️ Future Secured. The reefs die today, but in 2100, scientists use your bank to resurrect them. You are the grandfather of the Rebirth.',
                    th: '❄️ อนาคตปลอดภัย แนวปะการังตายวันนี้ แต่ในปี 2100 นักวิทยาศาสตร์ใช้ธนาคารของคุณเพื่อชุบชีวิตพวกมันขึ้นมา คุณคือปู่ของการเกิดใหม่',
                    zh: '❄️ 未来得到保障。今天的珊瑚礁死亡了，但在2100年，科学家利用你的生物库让它们复活。你是重生之祖。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🌿 Active Restoration: "Forget the freezer. Spend the money on heat-resistant super-corals and plant them NOW. Fight for every inch of living reef."',
                    th: '🌿 การฟื้นฟูเชิงรุก: "ลืมตู้แช่แข็งไปเลย ใช้เงินกับปะการังซูเปอร์ที่ทนความร้อนและปลูกมันทันที ต่อสู้เพื่อแนวปะการังที่มีชีวิตทุกนิ้ว"',
                    zh: '🌿 积极恢复：“忘掉冷冻柜。把钱花在耐热超级珊瑚上，现在就种植。为每一寸活珊瑚礁而战。”'
                },
                consequence: {
                    en: '⚔️ The Resistance. You save 20% of the reefs. It\'s not everything, but it\'s a living ecosystem rather than a frozen museum.',
                    th: '⚔️ การต่อต้าน คุณช่วยแนวปะการังได้ 20% ไม่ใช่ทั้งหมด แต่เป็นระบบนิเวศที่มีชีวิตมากกว่าพิพิธภัณฑ์แช่แข็ง',
                    zh: '⚔️ 抵抗。你挽救了20%的珊瑚礁。这不是全部，但它是一个活的生态系统，而不是一个冷冻博物馆。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '💸 Split the Pot: "Do both badly. spend $25M on a small freezer and $25M on planting. Hedge our bets."',
                    th: '💸 แบ่งเงินกองกลาง: "ทำทั้งสองอย่างแบบแย่ๆ ใช้ 25 ล้านกับตู้แช่แข็งเล็กๆ และ 25 ล้านกับการปลูก กระจายความเสี่ยง"',
                    zh: '💸 分摊资金：“两件事都做不好。花2500万在一个小冷冻柜上，2500万用于种植。两面下注。”'
                },
                consequence: {
                    en: '📉 Jack of No Trades. The freezer is too small to capture diversity, and the planting is underfunded. Compromise led to mediocrity.',
                    th: '📉 เป็ดทำอะไรไม่เก่งสักอย่าง ตู้แช่แข็งเล็กเกินกว่าจะเก็บความหลากหลาย และการปลูกขาดแคลนทุน การประนีประนอมนำไปสู่ความสามัญ',
                    zh: '📉 一无所长。冷冻柜太小无法捕捉多样性，种植资金不足。妥协导致了平庸。'
                },
                stats: { competence: 30, ethics: 30, leadership: 30, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🧪 Genetic Engineering: "Use CRISPR to edit coral DNA to survive acidity. Release modified organisms into the wild. It\'s risky but necessary."',
                    th: '🧪 วิศวกรรมพันธุกรรม: "ใช้ CRISPR แก้ไข DNA ปะการังให้อยู่รอดในสภาพกรด ปล่อยสิ่งมีชีวิตดัดแปลงสู่ธรรมชาติ มันเสี่ยงแต่จำเป็น"',
                    zh: '🧪 基因工程：“利用CRISPR编辑珊瑚DNA以在酸性环境中生存。将改良生物释放到野外。这有风险，但很有必要。”'
                },
                consequence: {
                    en: '🧬 A New Nature. The modified corals thrive, but they outcompete native species. You created a monolithic, resilient reef system. It works, sort of.',
                    th: '🧬 ธรรมชาติใหม่ ปะการังดัดแปลงเติบโตได้ดี แต่พวกมันชนะสายพันธุ์พื้นเมือง คุณสร้างระบบแนวปะการังที่แข็งแกร่งและเป็นหนึ่งเดียว มันได้ผล...มั้ง',
                    zh: '🧬 新的大自然。改良后的珊瑚茁壮成长，但它们战胜了本地物种。你建立了一个单一的、有弹性的珊瑚礁系统。它奏效了，算是吧。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 60 }
            }
        ]
    },
    {
        id: 'marine_048',
        text: {
            en: '🚢 The Nameless Ship: A fossil-fuel tycoon offers to donate a state-of-the-art research vessel ($150M value) to your organization. The only catch: it must be named "The Petroleum Pioneer" and he wants a photo op painting the hull green.',
            th: '🚢 เรือไร้ชื่อ: เจ้าพ่อเชื้อเพลิงฟอสซิลเสนอที่จะบริจาคเรือวิจัยล้ำสมัย (มูลค่า 150 ล้านดอลลาร์) ให้กับองค์กรของคุณ ข้อแม้เดียว: ต้องตั้งชื่อว่า "The Petroleum Pioneer" และเขาต้องการถ่ายรูปทาสีตัวเรือเป็นสีเขียว',
            zh: '🚢 无名之船：一位化石燃料大亨提议向你的组织捐赠一艘最先进的研究船（价值1.5亿美元）。唯一的条件：必须命名为“石油先驱号”，而且他想要一张把船体漆成绿色的照片。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Take the Ship: "A ship is a tool. We will use his dirty money to do clean science. The name is ironic, but the data is real."',
                    th: '🤝 รับเรือ: "เรือคือเครื่องมือ เราจะใช้เงินสกปรกของเขาทำงานวิทยาศาสตร์ที่สะอาด ชื่อมันแดกดัน แต่ข้อมูลเป็นของจริง"',
                    zh: '🤝 接受这艘船：“船只是工具。我们将利用他的脏钱做干净的科学。名字很讽刺，但数据是真实的。”'
                },
                consequence: {
                    en: '🚢 Greenwashed Science. You get the best ship in the fleet. However, activists protest your departures, and your credibility on climate change is questioned.',
                    th: '🚢 วิทยาศาสตร์ฟอกเขียว คุณได้เรือที่ดีที่สุดในกองเรือ อย่างไรก็ตาม นักเคลื่อนไหวประท้วงการออกเดินทางของคุณ และความน่าเชื่อถือของคุณเกี่ยวกับการเปลี่ยนแปลงสภาพภูมิอากาศถูกตั้งคำถาม',
                    zh: '🚢 漂绿科学。你得到了船队中最好的船。然而，活动人士抗议你的离开，你在气候变化方面的可信度受到质疑。'
                },
                stats: { competence: 50, ethics: -30, leadership: 20, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '😤 Public Refusal: "Reject the donation publicly. Write an op-ed about how science cannot be bought by the exact industry destroying the ocean."',
                    th: '😤 ปฏิเสธต่อสาธารณะ: "ปฏิเสธการบริจาคต่อสาธารณะ เขียนบทความเกี่ยวกับวิธีที่วิทยศาสตร์ไม่สามารถซื้อได้ด้วยอุตสาหกรรมที่ทำลายมหาสมุทร"',
                    zh: '😤 公开拒绝：“公开拒绝捐赠。写一篇专栏文章，论述科学如何不能被破坏海洋的行业收买。”'
                },
                consequence: {
                    en: '✊ Moral Victory. Donations pour in from small donors, totaling $5M. It\'s not enough for a ship, but you fund a great drone program instead.',
                    th: '✊ ชัยชนะทางศีลธรรม เงินบริจาคหลั่งไหลมาจากผู้บริจาครายย่อย รวม 5 ล้านดอลลาร์ ไม่พอสำหรับเรือ แต่คุณใช้เป็นทุนสำหรับโครงการโดรนที่ยอดเยี่ยมแทน',
                    zh: '✊ 道德胜利。小额捐赠者的捐款涌入，总计500万美元。这不够买一艘船，但你资助了一个伟大的无人机项目。'
                },
                stats: { competence: 30, ethics: 50, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 The Loophole: "Accept the ship but find a contract loophole to rename it after 6 months. Play the tycoons at their own game."',
                    th: '🤫 ช่องโหว่: "รับเรือแต่หาช่องโหว่ในสัญญาเพื่อเปลี่ยนชื่อหลังจาก 6 เดือน เล่นเกมเดียวกับพวกเจ้าพ่อ"',
                    zh: '🤫 漏洞：“接受这艘船，但找到合同漏洞，在6个月后重新命名。以其人之道还治其人之身。”'
                },
                consequence: {
                    en: '⚖️ Legal Battle. The tycoon sues. The ship is impounded in port for 4 years during the lawsuit. No science gets done.',
                    th: '⚖️ การต่อสู้ทางกฎหมาย เจ้าพ่อฟ้องร้อง เรือถูกยึดที่ท่าเรือเป็นเวลา 4 ปีระหว่างการฟ้องร้อง ไม่มีการทำวิทยาศาสตร์เกิดขึ้น',
                    zh: '⚖️ 法律战。大亨起诉。在这场官司中，这艘船被扣押在港口4年。没有进行任何科学研究。'
                },
                stats: { competence: 20, ethics: -20, leadership: -20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ The Negotiation: "Tell him: \'Make it the first hydrogen-powered research vessel, and we will keep the name.\' Challenge his ego to actually innovate."',
                    th: '🗣️ การเจรจา: "บอกเขา: \'ทำให้มันเป็นเรือวิจัยพลังงานไฮโดรเจนลำแรก แล้วเราจะใช้ชื่อนั้น\' ท้าทายอีโก้ของเขาให้สร้างนวัตกรรมจริงๆ"',
                    zh: '🗣️ 谈判：“告诉他：‘把它建成第一艘氢动力研究船，我们就保留这个名字。’挑战他的自负，让他真正创新。”'
                },
                consequence: {
                    en: '🚀 Ego Hacking. He accepts the challenge to look like a visionary. You get a green ship AND funding. Masterful manipulation.',
                    th: '🚀 การแฮ็กอีโก้ เขารับคำท้าเพื่อให้ดูเหมือนผู้มีวิสัยทัศน์ คุณได้เรือสีเขียวและเงินทุน การจัดการระดับปรมาจารย์',
                    zh: '🚀 自负黑客。他接受挑战以展示远见。你得到了一艘绿色船只和资金。高超的操作。'
                },
                stats: { competence: 50, ethics: 40, leadership: 60, innovation: 50 }
            }
        ]
    },
    {
        id: 'marine_049',
        text: {
            en: '🎯 The Crossroads: After 20 years, you are offered three divergent paths. The Head of NOAA (National Policy), a Tenured Chair at Harvard (Pure Research), or CEO of a Billion-dollar Ocean Cleanup Startup.',
            th: '🎯 ทางแยก: หลังจาก 20 ปี คุณได้รับเสนอเส้นทางที่แตกต่างกันสามทาง หัวหน้า NOAA (นโยบายระดับชาติ), ศาสตราจารย์ประจำที่ Harvard (การวิจัยบริสุทธิ์), หรือ CEO ของสตาร์ทอัพทำความสะอาดมหาสมุทรพันล้านดอลลาร์',
            zh: '🎯 十字路口：20年后，你面临三条截然不同的道路。NOAA负责人（国家政策）、哈佛大学终身教授（纯研究）或一家价值十亿美元的海洋清理初创公司的CEO。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏛️ Head of NOAA: "I can write laws that protect 30% of the ocean. Politics is messy, but it\'s where the real power is."',
                    th: '🏛️ หัวหน้า NOAA: "ฉันสามารถเขียนกฎหมายคุ้มครองมหาสมุทรได้ 30% การเมืองเป็นเรื่องยุ่งเหยิง แต่นั่นคือที่ที่มีอำนาจจริง"',
                    zh: '🏛️ NOAA负责人：“我可以制定保护30%海洋的法律。政治是混乱的，但这才是真正权力的所在。”'
                },
                consequence: {
                    en: '🦅 The Policymaker. You spend years fighting congress. You age 10 years in 4, but you sign the "Blue New Deal" into law. A majestic legacy.',
                    th: '🦅 ผู้กำหนดนโยบาย คุณใช้เวลาหลายปีต่อสู้กับสภาคองเกรส คุณแก่ลง 10 ปีใน 4 ปี แต่คุณลงนาม "ข้อตกลงใหม่สีน้ำเงิน" เป็นกฎหมาย มรดกที่ยิ่งใหญ่',
                    zh: '🦅 决策者。你花了几年时间与国会斗争。你在4年里老了10岁，但你签署了《蓝色新政》使其成为法律。宏伟的遗产。'
                },
                stats: { competence: 40, ethics: 40, leadership: 60, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🎓 Harvard Chair: "I will mentor the next 1,000 marine biologists. My ideas will live on through them. Knowledge is eternal."',
                    th: '🎓 ศาสตราจารย์ Harvard: "ฉันจะเป็นที่ปรึกษาให้กับนักชีววิทยาทางทะเลคนต่อไป 1,000 คน ความคิดของฉันจะคงอยู่ผ่านพวกเขา ความรู้เป็นนิรันดร์"',
                    zh: '🎓 哈佛教授：“我将指导下一代1000名海洋生物学家。我的思想将通过他们延续。知识是永恒的。”'
                },
                consequence: {
                    en: '🦉 The Sage. You enjoy a life of intellectual freedom. Your former students captain ships and run agencies worldwide. You are the "Grandparent of the Ocean."',
                    th: '🦉 ปราชญ์ คุณมีความสุขกับชีวิตที่มีอิสระทางปัญญา อดีตนักเรียนของคุณเป็นกัปตันเรือและบริหารหน่วยงานทั่วโลก คุณคือ "ปู่ย่าตายายแห่งมหาสมุทร"',
                    zh: '🦉 圣人。你享受着智力自由的生活。你以前的学生在世界各地担任船长和管理机构。你是“海洋的祖父母”。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Startup CEO: "Government moves too slow. With venture capital, I can deploy 10,000 cleaning drones next year. Action over talk."',
                    th: '🚀 CEO สตาร์ทอัพ: "รัฐบาลเคลื่อนไหวช้าเกินไป ด้วยเงินร่วมลงทุน ฉันสามารถส่งโดรนทำความสะอาด 10,000 ตัวในปีหน้า การกระทำสำคัญกว่าคำพูด"',
                    zh: '🚀 创业CEO：“政府行动太慢。有了风险投资，我明年可以部署10,000架清洁无人机。行动胜于空谈。”'
                },
                consequence: {
                    en: '🦄 The Disruptor. You actually clean up the Great Pacific Garbage Patch. You get rich, criticized, and stressed, but you fixed a problem no one else could.',
                    th: '🦄 ผู้ทำลายล้าง คุณทำความสะอาดแพขยะใหญ่แปซิฟิกได้จริง คุณรวย ถูกวิจารณ์ และเครียด แต่คุณแก้ไขปัญหาที่ไม่มีใครทำได้',
                    zh: '🦄 颠覆者。你实际上清理了太平洋垃圾带。你发财了，受到了批评，压力很大，但你解决了别人解决不了的问题。'
                },
                stats: { competence: 45, ethics: 30, leadership: 50, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🏝️ Retire to a Lighthouse: "I\'ve done enough. I will write my memoirs and watch the waves. The new generation can handle the burden."',
                    th: '🏝️ เกษียณที่ประภาคาร: "ฉันทำมาพอแล้ว ฉันจะเขียนบันทึกความทรงจำและดูคลื่น คนรุ่นใหม่รับภาระต่อไปได้"',
                    zh: '🏝️ 退休到灯塔：“我做得够多了。我会写回忆录，看海浪。新一代可以承担这个重担。”'
                },
                consequence: {
                    en: '🌅 Measured Peace. You find personal happiness. The world struggles on without you, but you lived a good life. Was it selfish? Maybe.',
                    th: '🌅 ความสงบที่พอประมาณ คุณพบความสุขส่วนตัว โลกดิ้นรนต่อไปโดยไม่มีคุณ แต่คุณใช้ชีวิตที่ดี เห็นแก่ตัวไหม? อาจจะ',
                    zh: '🌅 有节制的平静。你找到了个人的幸福。世界在你缺席的情况下继续挣扎，但你过得很好。这是自私吗？也许吧。'
                },
                stats: { competence: 30, ethics: 30, leadership: 0, innovation: 0 }
            }
        ]
    },
    {
        id: 'marine_050',
        text: {
            en: '🌏 The Final Legacy: You are 80 years old, looking back at a lifetime spent studying the sea. A journalist asks: "In the end, what was the most important thing you did?"',
            th: '🌏 มรดกสุดท้าย: คุณอายุ 80 ปี มองย้อนกลับไปในช่วงชีวิตที่ใช้ไปกับการศึกษาสามุทร นักข่าวถาม: "ท้ายที่สุดแล้ว อะไรคือสิ่งที่สำคัญที่สุดที่คุณทำ?"',
            zh: '🌏 最终遗产：你80岁了，回首一生对海洋的研究。一位记者问：“到底，你做的最重要的事情是什么？”'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📚 "The Knowledge I Created": Point to your 200 papers and the species named after you. "I added to the sum of human understanding."',
                    th: '📚 "ความรู้ที่ฉันสร้างขึ้น": ชี้ไปที่เอกสาร 200 ฉบับของคุณและสายพันธุ์ที่ตั้งชื่อตามคุณ "ฉันเพิ่มความเข้าใจของมนุษย์"',
                    zh: '📚 “我创造的知识”：指着你的200篇论文和以你命名的物种。“我增加了人类理解的总和。”'
                },
                consequence: {
                    en: '📖 The Scholar. Your name is in textbooks. Future scientists build on your work. You achieved immortality through data.',
                    th: '📖 นักวิชาการ ชื่อของคุณอยู่ในหนังสือเรียน นักวิทยาศาสตร์ในอนาคตต่อยอดงานของคุณ คุณเป็นอมตะผ่านข้อมูล',
                    zh: '📖 学者。你的名字出现在教科书中。未来的科学家在你的工作基础上继续努力。你通过数据实现了不朽。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🌱 "The Ecosystems I Saved": "I didn\'t just study the reef; I fought for it. Those coral gardens exist because I existed."',
                    th: '🌱 "ระบบนิเวศที่ฉันช่วย": "ฉันไม่ได้แค่ศึกษาแนวปะการัง ฉันต่อสู้เพื่อมัน สวนปะการังเหล่านั้นมีอยู่เพราะฉันมีอยู่"',
                    zh: '🌱 “我拯救的生态系统”：“我不仅研究了珊瑚礁；我还为之奋斗。那些珊瑚花园的存在是因为我的存在。”'
                },
                consequence: {
                    en: '🛡️ The Guardian. You leave a physical mark on the planet. Life swims in the ocean because of you. The ultimate biological success.',
                    th: '🛡️ ผู้พิทักษ์ คุณทิ้งร่องรอยทางกายภาพไว้บนโลก ชีวิตว่ายน้ำในมหาสมุทรเพราะคุณ ความสำเร็จทางชีวภาพสูงสุด',
                    zh: '🛡️ 守护者。你在星球上留下了物理印记。生命因为而在海洋中游动。终极的生物学成功。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🔥 "The Fires I Lit": "I inspired millions to care. The movement is my legacy, not any single fish or paper."',
                    th: '🔥 "ไฟที่ฉันจุด": "ฉันเป็นแรงบันดาลใจให้คนนับล้านใส่ใจ การเคลื่อนไหวคือมรดกของฉัน ไม่ใช่ปลาหรือกระดาษแผ่นเดียว"',
                    zh: '🔥 “我点燃的火”：“我激励了数百万人去关心。这场运动是我的遗产，而不是任何一条鱼或一篇论文。”'
                },
                consequence: {
                    en: '🕯️ The Spark. You started a revolution. The culture of the world shifted towards blue-consciousness because of your voice.',
                    th: '🕯️ ประกายไฟ คุณเริ่มปฏิวัติ วัฒนธรรมของโลกเปลี่ยนไปสู่จิตสำนึกสีน้ำเงินเพราะเสียงของคุณ',
                    zh: '🕯️ 火花。你引发了一场革命。因为你的声音，世界文化转向了蓝色意识。'
                },
                stats: { competence: 30, ethics: 40, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🐋 "I Was Just a Witness": "The ocean was here before me and will be here after. I was lucky enough to see its wonders. That is enough."',
                    th: '🐋 "ฉันเป็นแค่พยาน": "มหาสมุทรอยู่ที่นี่ก่อนฉันและจะอยู่ที่นี่หลังจากนี้ ฉันโชคดีพอที่จะเห็นความมหัศจรรย์ของมัน แค่นั้นก็พอแล้ว"',
                    zh: '🐋 “我只是一个见证人”：“海洋在我之前就在这里，在我之后也会在这里。我有幸目睹了它的奇迹。这就足够了。”'
                },
                consequence: {
                    en: '🧘 The Zen Master. You die with a smile, completely at peace with your place in the universe. A humble, beautiful end.',
                    th: '🧘 ปรมาจารย์เซน คุณตายด้วยรอยยิ้ม สงบสุขอย่างสมบูรณ์กับที่ของคุณในจักรวาล จุดจบที่ถ่อมตัวและสวยงาม',
                    zh: '🧘 禅师。你带着微笑死去，完全平静地接受了你在宇宙中的位置。一个谦逊、美丽的结局。'
                },
                stats: { competence: 30, ethics: 50, leadership: 10, innovation: 10 }
            }
        ]
    }
    ,
    {
        id: 'marine_051',
        text: {
            en: '🔊 The "Bloop" Returns: Listeners in the Pacific detect a low-frequency sound matching the famous "Bloop" from 1997, but louder and rhythmic. It could be a massive unknown animal, a geological event, or a secret military sub.',
            th: '🔊 "Bloop" กลับมา: ผู้ฟังในแปซิฟิกตรวจพบเสียงความถี่ต่ำที่ตรงกับ "Bloop" อันโด่งดังจากปี 1997 แต่ดังกว่าและมีจังหวะ มันอาจเป็นสัตว์ขนาดใหญ่ที่ไม่รู้จัก เหตุการณ์ทางธรณีวิทยา หรือเรือดำน้ำลับทางทหาร',
            zh: '🔊 “Bloop”归来：太平洋的监听者发现了一种低频声音，与1997年著名的“Bloop”相符，但声音更大且有节奏。这可能是一种巨大的未知动物、地质事件或秘密军事潜艇。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🦑 Hunt the Creature: "It’s organic. I know it. Launch a manned deep-sea expedition to find the Leviathan. History awaits!"',
                    th: '🦑 ล่าสิ่งมีชีวิต: "มันเป็นสิ่งมีชีวิต ฉันรู้ เปิดตัวการเดินทางใต้ทะเลลึกที่มีมนุษย์ควบคุมเพื่อค้นหาเลวีอาธาน ประวัติศาสตร์รออยู่!"',
                    zh: '🦑 狩猎生物：“是有机的。我知道。发起载人深海探险去寻找利维坦。历史在等待！”'
                },
                consequence: {
                    en: '🦕 Discovery of the Century? You find… nothing but shifting ice shelves. But the expedition maps 10,000 sq miles of sea floor. Disappointing but useful.',
                    th: '🦕 การค้นพบแห่งศตวรรษ? คุณพบ... ไม่มีอะไรนอกจากชั้นน้ำแข็งที่เคลื่อนตัว แต่การเดินทางได้ทำแผนที่พื้นทะเล 10,000 ตารางไมล์ น่าผิดหวังแต่มีประโยชน์',
                    zh: '🦕 世纪发现？你发现……除了移动的冰架什么都没有。但这次探险绘制了10,000平方英里的海床地图。令人失望但有用。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔬 Analyze the Spectrogram: "Don\'t jump to conclusions. Analyze the audio data with global seismologists. Science needs rigor, not monster hunters."',
                    th: '🔬 วิเคราะห์สเปกตรัม: "อย่าด่วนสรุป วิเคราะห์ข้อมูลเสียงกับนักธรณีวิทยาทั่วโลก วิทยาศาสตร์ต้องการความแม่นยำ ไม่ใช่นักล่าสัตว์ประหลาด"',
                    zh: '🔬 分析声谱图：“不要妄下结论。与全球地震学家一起分析音频数据。科学需要严谨，而不是怪物猎人。”'
                },
                consequence: {
                    en: '📊 Geological Truth. You prove it\'s a new type of methane vent release. Less sexy than a monster, but critical for climate models.',
                    th: '📊 ความจริงทางธรณีวิทยา คุณพิสูจน์ได้ว่ามันเป็นการปล่อยก๊าซมีเทนแบบใหม่ เซ็กซี่น้อยกว่าสัตว์ประหลาด แต่สำคัญต่อโมเดลสภาพภูมิอากาศ',
                    zh: '📊 地质真相。你证明这是新型甲烷喷口释放。虽然不如怪物性感，但对气候模型至关重要。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '📡 Military Hotline: "This rhythm suggests machinery. Contact the Navy quietly. If it\'s a foreign sub, we shouldn\'t be poking it."',
                    th: '📡 สายด่วนทหาร: "จังหวะนี้บ่งบอกถึงเครื่องจักร ติดต่อกองทัพเรืออย่างเงียบๆ ถ้าเป็นเรือดำน้ำต่างชาติ เราไม่ควรไปยุ่งกับมัน"',
                    zh: '📡 军事热线：“这种节奏暗示着机械。悄悄联系海军。如果是外国潜艇，我们不应该招惹它。”'
                },
                consequence: {
                    en: '🎖️ Classified Thanks. The Navy confirms nothing but your grant funding triples overnight. You silence the data. You chose country over curiosity.',
                    th: '🎖️ คำขอบคุณที่เป็นความลับ กองทัพเรือไม่ยืนยันอะไรแต่เงินทุนวิจัยของคุณเพิ่มขึ้นสามเท่าในชั่วข้ามคืน คุณปิดบังข้อมูล คุณเลือกประเทศเหนือความอยากรู้อยากเห็น',
                    zh: '🎖️ 机密感谢。海军什么也没确认，但你的拨款一夜之间增加了两倍。你让数据沉默。你选择了国家而不是好奇心。'
                },
                stats: { competence: 30, ethics: -20, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🎧 Crowdsource the Search: "Release the audio live. ‘Poseidon’s Song’. Let the internet triangulate the source using amateur hydrophones."',
                    th: '🎧 การค้นหาแบบระดมสมอง: "ปล่อยเสียงสด ‘Poseidon’s Song’ ให้อินเทอร์เน็ตช่วยหาแหล่งที่มาโดยใช้ไฮโดรโฟนสมัครเล่น"',
                    zh: '🎧 众包搜索：“发布实时音频。‘波塞冬之歌’。让互联网利用业余水听器三角测量来源。”'
                },
                consequence: {
                    en: '🌐 Global Obsession. Millions listen. The "hive mind" tracks it to a dying blue whale singing a unique dirge. A tragic, beautiful global moment.',
                    th: '🌐 ความหลงใหลระดับโลก คนนับล้านฟัง "สมองกลรวม" ติดตามไปจนพบวาฬสีน้ำเงินที่กำลังจะตายร้องเพลงไว้อาลัยที่มีเอกลักษณ์ ช่วงเวลาที่น่าเศร้าและสวยงามของโลก',
                    zh: '🌐 全球痴迷。数百万人在听。“蜂巢思维”追踪到一头垂死的蓝鲸在唱着独特的挽歌。一个悲惨、美丽的全球时刻。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 50 }
            }
        ]
    },
    {
        id: 'marine_052',
        text: {
            en: '🧪 Iron Fertilization: To fight climate change, a billionaire wants to dump tons of iron dust into the ocean to stimulate plankton blooms (which eat CO2). It\'s geoengineering. If it works, it saves the planet. If it fails, it creates a toxic dead zone.',
            th: '🧪 การให้ปุ๋ยเหล็ก: เพื่อต่อสู้กับการเปลี่ยนแปลงสภาพภูมิอากาศ มหาเศรษฐีต้องการทิ้งฝุ่นเหล็กจำนวนมหาศาลลงในมหาสมุทรเพื่อกระตุ้นการแพร่พันธุ์ของแพลงก์ตอน (ซึ่งกิน CO2) มันคือวิศวกรรมภูมิศาสตร์ ถ้าสำเร็จ มันช่วยโลก ถ้าล้มเหลว มันสร้างโซนแห่งความตายที่เป็นพิษ',
            zh: '🧪 铁施肥：为了应对气候变化，一位亿万富翁想向海洋倾倒成吨的铁粉，以刺激浮游生物大量繁殖（吸收二氧化碳）。这是地球工程。如果成功，它将拯救地球。如果失败，它将创造一个有毒的死亡区。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Approve Full Scale: "We are out of time. The risk of doing nothing is higher. Dump the iron. Save the atmosphere!"',
                    th: '🚀 อนุมัติเต็มรูปแบบ: "เราไม่มีเวลาแล้ว ความเสี่ยงของการไม่ทำอะไรเลยนั้นสูงกว่า ทิ้งเหล็ก กอบกู้บรรยากาศ!"',
                    zh: '🚀 全面批准：“我们没时间了。什么都不做的风险更高。倾倒铁粉。拯救大气层！”'
                },
                consequence: {
                    en: '☣️ Toxic Bloom. It worked too well. The plankton bloom turns toxic, killing fish for 1,000 miles. You cooled the earth slightly but killed the ocean.',
                    th: '☣️ การแพร่พันธุ์ที่เป็นพิษ มันได้ผลดีเกินไป แพลงก์ตอนเปลี่ยนเป็นพิษ ฆ่าปลาเป็นระยะทาง 1,000 ไมล์ คุณทำให้โลกเย็นลงเล็กน้อยแต่ฆ่ามหาสมุทร',
                    zh: '☣️ 有毒藻华。效果太好了。浮游生物大量繁殖变得有毒，杀死了1000英里内的鱼类。你让地球稍微降温了，但杀死了海洋。'
                },
                stats: { competence: 30, ethics: -30, leadership: 40, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🔬 Controlled Micro-Test: "Allow a 50-mile test zone with strict monitoring. If oxygen levels drop, we stop immediately."',
                    th: '🔬 การทดสอบขนาดเล็กแบบควบคุม: "อนุญาตให้ใช้โซนทดสอบ 50 ไมล์พร้อมการตรวจสอบอย่างเข้มงวด ถ้าระดับออกซิเจนลดลง เราหยุดทันที"',
                    zh: '🔬 受控微测试：“允许50英里的测试区，进行严格监控。如果氧气水平下降，我们立即停止。”'
                },
                consequence: {
                    en: '📊 Valuable Data. The test shows moderate success with manageable side effects. You publish the definitive guide on safe geoengineering.',
                    th: '📊 ข้อมูลที่มีค่า การทดสอบแสดงความสำเร็จปานกลางและผลข้างเคียงที่จัดการได้ คุณตีพิมพ์คู่มือที่ชัดเจนเกี่ยวกับวิศวกรรมภูมิศาสตร์ที่ปลอดภัย',
                    zh: '📊 宝贵数据。测试显示出中等成功，副作用可控。你发布了关于安全地球工程的权威指南。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🚫 Ban It: "The ocean is not a chemistry set. This is hubris. Focus on reducing emissions, not hacking the sea."',
                    th: '🚫 ห้ามมัน: "มหาสมุทรไม่ใช่ชุดเคมี นี่คือความโอหัง มุ่งเน้นไปที่การลดการปล่อยมลพิษ ไม่ใช่การแฮ็กทะเล"',
                    zh: '🚫 禁止它：“海洋不是化学试剂。这是傲慢。专注于减少排放，而不是入侵海洋。”'
                },
                consequence: {
                    en: '⚖️ Principle Upheld. The billionaire moves to international waters and does it anyway (badly). You kept your hands clean but lost control of the outcome.',
                    th: '⚖️ ยึดมั่นในหลักการ มหาเศรษฐีย้ายไปน่านน้ำสากลและทำมันอยู่ดี (แบบแย่ๆ) คุณรักษาความสะอาดของมือแต่สูญเสียการควบคุมผลลัพธ์',
                    zh: '⚖️ 坚持原则。亿万富翁转移到国际水域，无论如何还是做了（做得不好）。你保持了双手干净，但失去了对结果的控制。'
                },
                stats: { competence: 20, ethics: 50, leadership: -10, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Tax the Experiment: "Charge him $1B for the permit. Use the money to restore mangroves. Let him play his game while we fund real conservation."',
                    th: '💰 ภาษีการทดลอง: "เรียกเก็บเงินเขา 1 พันล้านสำหรับใบอนุญาต ใช้เงินเพื่อฟื้นฟูป่าชายเลน ปล่อยให้เขาเล่นเกมของเขาในขณะที่เราให้ทุนการอนุรักษ์จริง"',
                    zh: '💰 对实验征税：“向他收取10亿美元的许可证费用。用这笔钱恢复红树林。让他玩他的游戏，而我们资助真正的保护。”'
                },
                consequence: {
                    en: '🌳 Robin Hood of the Sea. The iron dumping does little, but the mangroves you planted capture huge amounts of carbon. Net positive!',
                    th: '🌳 โรบินฮู้ดแห่งท้องทะเล การทิ้งเหล็กช่วยได้น้อย แต่ป่าชายเลนที่คุณปลูกดักจับคาร์บอนได้มหาศาล ผลบวกสุทธิ!',
                    zh: '🌳 海洋罗宾汉。铁倾倒作用不大，但你种植的红树林吸收了大量的碳。净正值！'
                },
                stats: { competence: 40, ethics: 20, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'marine_053',
        text: {
            en: '🐬 The Last Vaquita: Only 8 Vaquita porpoises remain in the Gulf of California. Cartels use gillnets in their habitat to catch illegal Totoaba fish. You have a plan to create a floating fortress sanctuary, but it requires armed mercenaries.',
            th: '🐬 วากีต้าตัวสุดท้าย: เหลือโลมาวากีต้าเพียง 8 ตัวในอ่าวแคลิฟอร์เนีย แก๊งค้ายาใช้อวนลอยในที่อยู่ของพวกมันเพื่อจับปลาโทโทอาบาผิดกฎหมาย คุณมีแผนที่จะสร้างป้อมปราการลอยน้ำ แต่ต้องใช้ทหารรับจ้างติดอาวุธ',
            zh: '🐬 最后的小头鼠海豚：加利福尼亚湾仅存8只小头鼠海豚。贩毒集团在其栖息地使用刺网非法捕捞加利福尼亚湾石首鱼。你计划建立一个漂浮的堡垒保护区，但需要武装雇佣兵。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔫 Armed Defense: "Hire the mercenaries. Shoot on sight if poachers enter the zone. Extinction is not an option."',
                    th: '🔫 การป้องกันด้วยอาวุธ: "จ้างทหารรับจ้าง ยิงทันทีที่เห็นหากผู้ลักลอบล่าสัตว์เข้ามาในเขต การสูญพันธุ์ไม่ใช่ทางเลือก"',
                    zh: '🔫 武装防御：“雇佣雇佣兵。如果偷猎者进入该区域，格杀勿论。灭绝不是选项。”'
                },
                consequence: {
                    en: '⚔️ War for Wildlife. A firefight ensues. Poachers die. You are investigated for murder, but the Vaquita population stabilizes at 8. You bought them time.',
                    th: '⚔️ สงครามเพื่อสัตว์ป่า การยิงปะทะเกิดขึ้น ผู้ลักลอบล่าสัตว์ตาย คุณถูกสอบสวนข้อหาฆาตกรรม แต่ประชากรวากีต้าคงที่ที่ 8 ตัว คุณซื้อเวลาให้พวกมัน',
                    zh: '⚔️ 野生动物之战。交火随之而来。偷猎者死亡。你因谋杀受到调查，但小头鼠海豚的数量稳定在8只。你为它们争取了时间。'
                },
                stats: { competence: 40, ethics: 10, leadership: 50, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🔬 Captive Breeding Mary Hail: "Capture all 8. Move them to a sea-pen in San Francisco. It\'s never been done and might kill them from stress."',
                    th: '🔬 การเพาะพันธุ์ในกรง: "จับทั้ง 8 ตัว ย้ายไปที่กรงทะเลในซานฟรานซิสโก ไม่เคยทำมาก่อนและอาจฆ่าพวกมันจากความเครียด"',
                    zh: '🔬 圈养繁殖孤注一掷：“捕获所有8只。将它们转移到旧金山的海围栏。这从未做过，可能会因压力杀死它们。”'
                },
                consequence: {
                    en: '💀 Tragic End. Two die during capture. The rest refuse to eat. You watch the species go extinct in your hands. Attempted rescue became execution.',
                    th: '💀 จุดจบที่น่าเศร้า สองตัวตายระหว่างการจับ ที่เหลือปฏิเสธที่จะกิน คุณดูสายพันธุ์สูญพันธุ์ในมือของคุณ การพยายามช่วยเหลือกลายเป็นการประหารชีวิต',
                    zh: '💀 悲剧结局。两只在捕获过程中死亡。其余的拒绝进食。你看着物种在你手中灭绝。试图救援变成了处决。'
                },
                stats: { competence: 20, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '💰 Buy Out the Cartel: "Offer the cartel a \'conservation tax\'. We pay them $10M a year to NOT fish there. Cheaper than a war."',
                    th: '💰 ซื้อตัวแก๊ง: "เสนอ \'ภาษีการอนุรักษ์\' ให้แก๊ง เราจ่ายให้พวกเขา 10 ล้านต่อปีเพื่อไม่ให้ตกปลาที่นั่น ถูกกว่าสงคราม"',
                    zh: '💰 收买由于贩毒集团：“向贩毒集团提供‘保护税’。我们每年付给他们1000万，让他们不要在那里捕鱼。比战争便宜。”'
                },
                consequence: {
                    en: '🤝 Devil\'s Bargain. It works. The cartel protects the area to protect their income. The Vaquita survive, but you are funding organized crime.',
                    th: '🤝 ข้อตกลงของปีศาจ มันได้ผล แก๊งปกป้องพื้นที่เพื่อปกป้องรายได้ของพวกเขา วากีต้ารอด แต่คุณกำลังให้ทุนอาชญากรรมองค์กร',
                    zh: '🤝 魔鬼交易。奏效了。贩毒集团保护该地区以保护他们的收入。小头鼠海豚幸存下来，但你在资助有组织犯罪。'
                },
                stats: { competence: 50, ethics: -40, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🎣 Alternative Gear: "Give local fishermen free \'Vaquita-safe\' nets that don\'t catch porpoises. Flood the market with legal, safe gear."',
                    th: '🎣 อุปกรณ์ทางเลือก: "แจกอวน \'ปลอดภัยสำหรับวากีต้า\' ให้ชาวประมงท้องถิ่นฟรี ซึ่งไม่จับโลมา ท่วมตลาดด้วยอุปกรณ์ที่ถูกกฎหมายและปลอดภัย"',
                    zh: '🎣 替代装备：“向当地渔民免费提供不捕获鼠海豚的‘小头鼠海豚安全’网。用合法、安全的装备充斥市场。”'
                },
                consequence: {
                    en: '📉 Too Little, Too Late. The legal fishermen use them, but the illegal ones don\'t. The species drifts closer to the edge. Good intent, weak execution.',
                    th: '📉 น้อยเกินไป สายเกินไป ชาวประมงถูกกฎหมายใช้มัน แต่คนผิดกฎหมายไม่ใช้ สายพันธุ์ล่องลอยเข้าใกล้ขอบเหว เจตนาดี แต่การดำเนินการอ่อนแอ',
                    zh: '📉 太少，太晚。合法渔民使用它们，但非法渔民不使用。该物种濒临灭绝。意图虽好，执行不力。'
                },
                stats: { competence: 30, ethics: 40, leadership: 10, innovation: 30 }
            }
        ]
    },
    {
        id: 'marine_054',
        text: {
            en: '💻 Data Center Reefs: A tech giant wants to sink 500 data center pods onto your studied reef. They claim the heat will be minimal and the pods create artificial reef structure. They offer unlimited cloud compute for your research.',
            th: '💻 แนวปะการังศูนย์ข้อมูล: ยักษ์ใหญ่ด้านเทคโนโลยีต้องการจมโป๊ะศูนย์ข้อมูล 500 อันลงบนแนวปะการังที่คุณศึกษา พวกเขาอ้างว่าความร้อนจะน้อยที่สุดและโป๊ะสร้างโครงสร้างแนวปะการังเทียม พวกเขาเสนอการคำนวณบนคลาวด์ไม่จำกัดสำหรับการวิจัยของคุณ',
            zh: '💻 数据中心珊瑚礁：一家科技巨头想在你研究的珊瑚礁上沉设500个数据中心吊舱。他们声称热量极低，吊舱可以创造人工鱼礁结构。他们为你的研究提供无限的云计算。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Partner Up: "We need the compute power to model climate change. Accept the pods. Monitor them closely."',
                    th: '🤝 ร่วมมือ: "เราต้องการพลังการคำนวณเพื่อจำลองการเปลี่ยนแปลงสภาพภูมิอากาศ รับโป๊ะ ตรวจสอบพวกมันอย่างใกล้ชิด"',
                    zh: '🤝 合作：“我们需要计算能力来模拟气候变化。接受吊舱。密切监控它们。”'
                },
                consequence: {
                    en: '🌡️ Local Warming. The heat is higher than promised. The reef around the pods bleaches. But your climate models using the free compute predict global trends perfectly.',
                    th: '🌡️ ภาวะโลกร้อนในท้องถิ่น ความร้อนสูงกว่าที่สัญญาไว้ แนวปะการังรอบโป๊ะฟอกขาว แต่โมเดลสภาพภูมิอากาศของคุณที่ใช้การคำนวณฟรีทำนายแนวโน้มทั่วโลกได้อย่างสมบูรณ์แบบ',
                    zh: '🌡️ 局部变暖。热量比承诺的要高。吊舱周围的珊瑚礁白化。但你使用免费计算的气候模型完美地预测了全球趋势。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Not on My Reef: "Data centers belong on land. The ocean is not a heatsink for your emails. Deny the permit."',
                    th: '🚫 ไม่ใช่บนแนวปะการังของฉัน: "ศูนย์ข้อมูลควรอยู่บนบก มหาสมุทรไม่ใช่ที่ระบายความร้อนสำหรับอีเมลของคุณ ปฏิเสธใบอนุญาต"',
                    zh: '🚫 别在我的珊瑚礁上：“数据中心属于陆地。海洋不是你们邮件的散热器。拒绝许可证。”'
                },
                consequence: {
                    en: '🛡️ Guardian. The project is cancelled. The reef stays natural. You lose the compute grant, but you sleep well at night.',
                    th: '🛡️ ผู้พิทักษ์ โครงการถูกยกเลิก แนวปะการังยังคงความเป็นธรรมชาติ คุณเสียเงินทุนการคำนวณ แต่นอนหลับสบาย',
                    zh: '🛡️ 守护者。项目取消。珊瑚礁保持自然。你失去了计算资助，但你晚上睡得很香。'
                },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🎨 Design the Pods: "Agree IF I can design the exterior of the pods to optimize coral settlement. Make them functional reefs first, servers second."',
                    th: '🎨 ออกแบบโป๊ะ: "ตกลง ถ้าฉันสามารถออกแบบภายนอกของโป๊ะเพื่อปรับปรุงการตั้งถิ่นฐานของปะการัง ทำให้มันเป็นแนวปะการังที่ใช้งานได้ก่อน เซิร์ฟเวอร์รองลงมา"',
                    zh: '🎨 设计吊舱：“如果我可以设计吊舱的外部以优化珊瑚附着，我就同意。让它们首先是功能性珊瑚礁，其次才是服务器。”'
                },
                consequence: {
                    en: '🏗️ Symbiosis? You create a weird cyborg reef. Corals grow on the warm servers. It attracts unique heat-loving species. A new ecosystem is born.',
                    th: '🏗️ ภาวะพึ่งพาอาศัย? คุณสร้างแนวปะการังไซบอร์กแปลกๆ ปะการังเติบโตบนเซิร์ฟเวอร์ที่อุ่น มันดึงดูดสายพันธุ์ที่ชอบความร้อนที่ไม่เหมือนใคร ระบบนิเวศใหม่ถือกำเนิดขึ้น',
                    zh: '🏗️ 共生？你创造了一个奇怪的半机械珊瑚礁。珊瑚在温暖的服务器上生长。它吸引了独特的喜热物种。一个新的生态系统诞生了。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '💸 Lease the Space: "Charge them rent per square meter. Put the money into a trust for marine cleanup. If they pollute, we evict them."',
                    th: '💸 ให้เช่าพื้นที่: "คิดค่าเช่าต่อตารางเมตร นำเงินเข้ากองทุนเพื่อการทำความสะอาดทางทะเล ถ้าพวกเขามลพิษ เราไล่พวกเขาออก"',
                    zh: '💸以此出租空间：“按每平方米向他们收取租金。把钱存入海洋清理信托基金。如果他们造成污染，我们就驱逐他们。”'
                },
                consequence: {
                    en: '💰 Funding Secured. The rent pays for 5 new research boats. The environmental impact is minimal, and the funding is transformative.',
                    th: '💰 เงินทุนปลอดภัย ค่าเช่าจ่ายสำหรับเรือวิจัยใหม่ 5 ลำ ผลกระทบต่อสิ่งแวดล้อมมีน้อย และเงินทุนทำให้เกิดการเปลี่ยนแปลง',
                    zh: '💰 资金到位。租金支付了5艘新研究船的费用。环境影响微乎其微，而资金具有变革性。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 30 }
            }
        ]
    },
    {
        id: 'marine_055',
        text: {
            en: '🪼 Immortal Jellyfish Research: You unlock the secret of Turritopsis dohrnii, the jellyfish that can revert to childhood and live forever. A cosmetics company offers unlimited funding to put it in a face cream.',
            th: '🪼 การวิจัยแมงกะพรุนอมตะ: คุณไขความลับของ Turritopsis dohrnii แมงกะพรุนที่สามารถย้อนกลับสู่วัยเด็กและมีชีวิตอยู่ตลอดไป บริษัทเครื่องสำอางเสนอเงินทุนไม่จำกัดเพื่อใส่ในครีมทาหน้า',
            zh: '🪼 不朽水母研究：你解开了灯塔水母的秘密，这种水母可以返老还童并永生。一家化妆品公司提供无限资金将其放入面霜中。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💅 Sell the Formula: "Humanity wants to look young. Use the billions to fund ocean conservation. A small price for saving the seas."',
                    th: '💅 ขายสูตร: "มนุษยชาติอยากดูเด็ก ใช้เงินหลายพันล้านเพื่อเป็นทุนในการอนุรักษ์มหาสมุทร ราคาเล็กน้่อยสำหรับการช่วยทะเล"',
                    zh: '💅 出售配方：“人类想要看起来年轻。利用这数十亿资金资助海洋保护。拯救海洋的小代价。”'
                },
                consequence: {
                    en: '🧖‍♀️ Botox of the Sea. You become a billionaire. The cream works. But the jellyfish are harvested by the millions to supply the demand. Irony.',
                    th: '🧖‍♀️ โบท็อกซ์แห่งทะเล คุณกลายเป็นมหาเศรษฐี ครีมใช้ได้ผล แต่แมงกะพรุนถูกเก็บเกี่ยวหลายล้านเพื่อตอบสนองความต้องการ แดกดัน',
                    zh: '🧖‍♀️ 海洋肉毒杆菌。你成为了亿万富翁。面霜有效。但为了满足需求，数百万只水母被捕捞。讽刺。'
                },
                stats: { competence: 40, ethics: -30, leadership: 30, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🧠 Medical Application Only: "Block the cosmetic deal. License it ONLY for regenerative medicine—healing burn victims and organ repair."',
                    th: '🧠 การประยุกต์ใช้ทางการแพทย์เท่านั้น: "บล็อกดีลเครื่องสำอาง อนุญาตให้ใช้เฉพาะเวชศาสตร์ฟื้นฟู—รักษาผู้ประสบภัยไฟไหม้และซ่อมแซมอวัยวะ"',
                    zh: '🧠 仅限医疗应用：“阻止化妆品交易。仅将其授权用于再生医学——治愈烧伤受害者和器官修复。”'
                },
                consequence: {
                    en: '🏥 Healing the World. No billions, but you revolutionize medicine. You help people live longer, healthier lives. The Nobel Prize is yours.',
                    th: '🏥 รักษาโลก ไม่มีเงินพันล้าน แต่คุณปฏิวัติการแพทย์ คุณช่วยให้ผู้คนมีชีวิตยืนยาวและสุขภาพดีขึ้น รางวัลโนเบลเป็นของคุณ',
                    zh: '🏥 治愈世界。没有数十亿，但你彻底改变了医学。你帮助人们活得更长、更健康。诺贝尔奖是你的。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '🚫 Suppress the Secret: "Immortality is a curse. The planet is already overpopulated. Destroy the data. Some doors shouldn\'t be opened."',
                    th: '🚫 ปิดบังความลับ: "ความเป็นอมตะคือคำสาป โลกมีประชากรมากเกินไปแล้ว ทำลายข้อมูล ประตูบางบานไม่ควรเปิด"',
                    zh: '🚫 压制秘密：“永生是一种诅咒。地球早已人口过剩。销毁数据。有些门不应该被打开。”'
                },
                consequence: {
                    en: '📉 The Gatekeeper. You destroy your life\'s work. You die mortal and forgotten, but you saved humanity from stagnation and collapse. A silent guardian.',
                    th: '📉 ผู้เฝ้าประตู คุณทำลายผลงานชั่วชีวิตของคุณ คุณตายอย่างปุถุชนและถูกลืม แต่คุณช่วยมนุษยชาติจากความซบเซาและการล่มสลาย ผู้พิทักษ์เงียบ',
                    zh: '📉 看门人。你毁掉了你一生的工作。你凡人般死去并被遗忘，但你从停滞和崩溃中拯救了人类。默默的守护者。'
                },
                stats: { competence: 30, ethics: 40, leadership: -20, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🌍 Open Source the DNA: "Publish the genome. Let everyone research it. Break the corporate monopoly before it starts."',
                    th: '🌍 โอเพนซอร์ส DNA: "เผยแพร่จีโนม ให้ทุกคนวิจัย ทำลายการผูกขาดของบริษัทก่อนที่จะเริ่ม"',
                    zh: '🌍 开源DNA：“发布基因组。让每个人都去研究它。在企业垄断开始之前打破它。”'
                },
                consequence: {
                    en: '⚡ Chaos and Progress. Every lab in the world works on it. Cheap generic youth serums flood the market in 5 years. Society changes forever.',
                    th: '⚡ ความโกลาหลและความก้าวหน้า ทุกห้องปฏิบัติการในโลกทำงานกับมัน เซรั่มเยาว์วัยราคาถูกท่วมตลาดใน 5 ปี สังคมเปลี่ยนไปตลอดกาล',
                    zh: '⚡ 混乱与进步。世界上的每个实验室都在研究它。便宜的仿制青春血清在5年内充斥市场。社会永远改变了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            }
        ]
    }
];
