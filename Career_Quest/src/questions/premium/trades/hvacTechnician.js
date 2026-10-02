export const hvacTechnicianQuestions = [
    {
        id: 'hvac_001',
        text: {
            en: '❄️ The Heatwave Hustle: It\'s 105°F (40°C) outside, the hottest day of the year. You arrive at an elderly couple\'s home. Their AC capacitor is blown—a $20 part that takes 5 minutes to swap. However, your boss has ordered everyone to "upsell" new units today or risk being fired. The couple clearly doesn\'t have much money.',
            th: '❄️ การเร่งทำยอดช่วงคลื่นความร้อน: ข้างนอกอุณหภูมิ 105°F (40°C) เป็นวันที่ร้อนที่สุดของปี คุณมาถึงบ้านของคู่สามีภรรยาสูงอายุ คาปาซิเตอร์แอร์ของพวกเขาเสีย—อะไหล่ราคา 20 ดอลลาร์ที่ใช้เวลาเปลี่ยนแค่ 5 นาที อย่างไรก็ตาม เจ้านายของคุณสั่งให้ทุกคน "ขายของแพง" เครื่องใหม่ในวันนี้ ไม่งั้นอาจโดนไล่ออก คู่สามีภรรยาดูเหมือนจะไม่มีเงินมากนัก',
            zh: '❄️ 热浪骗局：外面气温高达 105°F (40°C)，是一年中最热的一天。你来到一对老夫妇家。他们的空调电容器烧坏了——这是一个只需 20 美元、5 分钟就能换好的零件。然而，你的老板命令所有人今天都要"推销"新机组，否则就面临被解雇的风险。这对夫妇显然没有多少钱。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔧 The Quick Fix: "Ma\'am, it\'s just a small part. I\'ll fix it for the standard service fee. Don\'t worry about a new unit." You risk your job to help them.',
                    th: '🔧 การซ่อมด่วน: "คุณป้าครับ มันแค่ชิ้นส่วนเล็กๆ ผมจะซ่อมให้ในค่าบริการมาตรฐาน ไม่ต้องห่วงเรื่องเครื่องใหม่หรอกครับ" คุณเสี่ยงตกงานเพื่อช่วยพวกเขา',
                    zh: '🔧 快速维修："夫人，只是一个小零件。我会按标准服务费给您修好。不用担心买新机器的事。"你冒着丢工作的风险帮助他们。'
                },
                consequence: {
                    en: '💖 Customer Hero! The couple writes a glowing review calling you a "saint." The review goes viral locally. Your boss can\'t fire you because phone won\'t stop ringing with requests specifically for YOU.',
                    th: '💖 ฮีโร่ของลูกค้า! คู่สามีภรรยาเขียนรีวิวชมเชยเรียกคุณว่า "พ่อพระ" รีวิวกลายเป็นไวรัลในท้องถิ่น เจ้านายไล่คุณออกไม่ได้เพราะโทรศัพท์ดังไม่หยุด มีแต่คนเจาะจงขอตัวคุณ',
                    zh: '💖 客户英雄！这对夫妇写了一篇热情洋溢的评论，称你为"圣人"。这篇评论在当地疯传。你的老板没法解雇你，因为指名要你的电话响个不停。'
                },
                stats: { competence: 50, ethics: 50, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 The Hard Sell: "Look, this unit is ancient. I can patch it, but it will break again in a week. You really need the Platinum Cool System for $5,000. It\'s for your safety."',
                    th: '💰 การขายอย่างหนัก: "ดูสิครับ เครื่องนี้เก่ามาก ผมพอถูไถซ่อมได้แต่มันจะพังอีกในอาทิตย์หน้า คุณจำเป็นต้องใช้ระบบ Platinum Cool ราคา 5,000 ดอลลาร์จริงๆ เพื่อความปลอดภัยของคุณเอง"',
                    zh: '💰 强行推销："听着，这台机器太老了。我可以修补一下，但一周后它还会坏。为了您的安全，您真的需要价值 5,000 美元的白金冷却系统。"'
                },
                consequence: {
                    en: '😔 Guilt & Karma! They drain their savings to buy it. You get a fat commission. But the installation is rushed, and the new unit leaks, causing water damage. They sue the company.',
                    th: '😔 ความรู้สึกผิดและเวรกรรม! พวกเขาถอนเงินเก็บทั้งหมดมาซื้อ คุณได้ค่าคอมมิชชั่นก้อนโต แต่การติดตั้งเร่งรีบ และเครื่องใหม่รั่ว ทำให้เกิดความเสียหายจากน้ำ พวกเขาฟ้องร้องบริษัท',
                    zh: '😔 内疚与报应！他们花光积蓄买了它。你得到了一笔丰厚的佣金。但安装很匆忙，新机器漏水，造成了水灾。他们起诉了公司。'
                },
                stats: { competence: 20, ethics: -40, leadership: -10, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 The Side Hustle: Whisper: "Call me after 5 PM on my personal number. I\'ll come back and fix it for $50 cash. Don\'t tell my boss."',
                    th: '🤫 งานนอก: กระซิบ: "โทรหาผมหลัง 5 โมงเย็นที่เบอร์ส่วนตัว ผมจะกลับมาซ่อมให้ในราคา 50 ดอลลาร์เงินสด อย่าบอกเจ้านายผมนะ"',
                    zh: '🤫 私活：低语："下午 5 点以后打我私人电话。我会回来给你们修好，只收 50 美元现金。别告诉我老板。"'
                },
                consequence: {
                    en: '⚖️ Risky Business! You fix it and make pocket money. But a neighbor sees your personal truck. Word gets back to your boss. You\'re fired for stealing leads.',
                    th: '⚖️ ธุรกิจเสี่ยง! คุณซ่อมมันและได้เงินค่าขนม แต่เพื่อนบ้านเห็นรถส่วนตัวของคุณ เรื่องเข้าหูเจ้านาย คุณถูกไล่ออกฐานขโมยลูกค้า',
                    zh: '⚖️ 危险生意！你修好了它并赚了点零花钱。但邻居看到了你的私家车。话传到了你老板那里。你因抢单被解雇了。'
                },
                stats: { competence: 40, ethics: -20, leadership: -20, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '📋 By the Book (Malicious Compliance): install the capacitor but document EVERY other tiny flaw. "Sign here acknowledging that your ductwork is sub-optimal but you declined upgrades."',
                    th: '📋 ตามระเบียบเป๊ะ (การทำตามคำสั่งแบบประชด): ติดตั้งคาปาซิเตอร์แต่บันทึกข้อบกพร่องเล็กๆ น้อยๆ ทุกจุด "เซ็นตรงนี้เพื่อรับทราบว่าท่อลมของคุณไม่ได้มาตรฐานแต่คุณปฏิเสธการอัปเกรด"',
                    zh: '📋 按章办事（恶意服从）：安装电容器，但记录下每一个微小的缺陷。"在这里签字，确认您的管道系统不理想但您拒绝了升级。"'
                },
                consequence: {
                    en: '📝 Covered Bases! You protected the elderly couple AND your job. The boss isn\'t thrilled with no sale, but your paperwork is legally bulletproof. You survive to cool another day.',
                    th: '📝 รัดกุม! คุณปกป้องคู่สามีภรรยาและงานของคุณ เจ้านายไม่ปลื้มที่ขายไม่ได้ แต่เอกสารของคุณรัดกุมตามกฎหมาย คุณรอดไปซ่อมแอร์ได้อีกวัน',
                    zh: '📝 面面俱到！你既保护了那对老夫妇，也保住了你的工作。老板对没有销售额不太高兴，但你的文书工作在法律上无懈可击。你活到了下一天。'
                },
                stats: { competence: 45, ethics: 30, leadership: 10, innovation: 20 }
            }
        ]
    },
    {
        id: 'hvac_002',
        text: {
            en: '🕷️ The Crawlspace Encounter: You\'re under a frantic client\'s house fixing a furnace. You discover a massive infestation of black widow spiders protecting their nests all around the unit. Also, you smell a faint gas leak that isn\'t from your equipment.',
            th: '🕷️ การเผชิญหน้าในพื้นที่ใต้ถุน: คุณอยู่ใต้บ้านของลูกค้าที่กำลังตื่นตระหนกเพื่อซ่อมเตาเผา คุณพบการระบาดครั้งใหญ่ของแมงมุมแม่ม่ายดำที่ปกป้องรังของพวกมันรอบๆ เครื่อง นอกจากนี้ คุณยังได้กลิ่นแก๊สรั่วจางๆ ที่ไม่ได้มาจากอุปกรณ์ของคุณ',
            zh: '🕷️ 爬行空间遭遇战：你正在一位焦急的客户房子底下修理炉子。你发现了一大群黑寡妇蜘蛛在机组周围保护它们的巢穴。此外，你闻到了微弱的煤气泄漏味，那不是来自你的设备。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Evacuate & Hazmat: "GET OUT OF THE HOUSE NOW!" Shut off the main gas, evacuate the family, and call the fire department and exterminators. Refuse to re-enter until certified safe.',
                    th: '🔥 อพยพ & วัตถุอันตราย: "ออกจากบ้านเดี๋ยวนี้!" ปิดวาล์วแก๊สหลัก อพยพครอบครัว และโทรเรียกแผนกดับเพลิงและบริษัทกำจัดแมลง ปฏิเสธที่จะกลับเข้าไปจนกว่าจะได้รับการรับรองว่าปลอดภัย',
                    zh: '🔥 疏散与危险品处理："马上离开房子！"关闭煤气总阀，疏散家人，并打电话给消防队和灭虫公司。在获得安全认证之前拒绝再次进入。'
                },
                consequence: {
                    en: '🏆 Lifesaver! The gas leak was a ticking bomb. The spiders were a secondary issue. The client is horrified but grateful you saved their lives. You are hailed as a safety expert.',
                    th: '🏆 ผู้ช่วยชีวิต! แก๊สรั่วคือระเบิดเวลา แมงมุมเป็นเรื่องรอง ลูกค้าหวาดผวาแต่ซาบซึ้งที่คุณช่วยชีวิตพวกเขา คุณได้รับการยกย่องว่าเป็นผู้เชี่ยวชาญด้านความปลอดภัย',
                    zh: '🏆 救命恩人！煤气泄漏是一个定时炸弹。蜘蛛只是次要问题。客户吓坏了，但很感激你救了他们的命。你被誉为安全专家。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '⚔️ War Mode: Grab your torch and a can of spray. Burn/spray the spiders, find the leak yourself with soapy water, and patch it. "I handle everything."',
                    th: '⚔️ โหมดสงคราม: หยิบไฟฉายและสเปรย์กระป๋อง เผา/ฉีดแมงมุม หาจุดรั่วด้วยตัวเองโดยใช้น้ำสบู่ แล้วปะมันซะ "ผมจัดการทุกอย่างเอง"',
                    zh: '⚔️ 战争模式：拿起你的火把和一罐喷雾。烧死/喷死蜘蛛，自己用肥皂水找到泄漏点，并将其修补好。"我搞定一切。"'
                },
                consequence: {
                    en: '🚑 Hospital Trip! You fix the leak, but get bitten three times. You finish the job sweating and shaking before driving yourself to the ER. Heroic, but stupid.',
                    th: '🚑 เข้าโรงพยาบาล! คุณซ่อมรอยรั่วเสร็จ แต่โดนกัดสามที คุณทำงานเสร็จแบบเหงื่อท่วมและตัวสั่นก่อนขับรถไปห้องฉุกเฉินเอง กล้าหาญ แต่โง่',
                    zh: '🚑 进医院！你修好了泄漏，但被咬了三次。你在浑身冒汗、发抖的情况下完成了工作，然后自己开车去了急诊室。英勇，但愚蠢。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🏃 Denial Exit: Fix the furnace as fast as humanly possible, ignore the spiders and the smell. Collect payment and vanish. "Not my job description."',
                    th: '🏃 หนีปัญหา: ซ่อมเตาเผาให้เร็วที่สุดเท่าที่มนุษย์จะทำได้ เมินเฉยต่อแมงมุมและกลิ่น รับเงินแล้วหายตัวไป "ไม่อยู่ในรายละเอียดงานของผม"',
                    zh: '🏃 否认逃避：以人类最快的速度修好炉子，无视蜘蛛和气味。收钱消失。"这不是我的工作职责。"'
                },
                consequence: {
                    en: '💥 Catastrophe! The house explodes two hours later. Investigators trace your footprints in the crawlspace. You face criminal negligence charges.',
                    th: '💥 หายนะ! บ้านระเบิดในอีกสองชั่วโมงต่อมา ผู้ตรวจสอบพบรอยเท้าของคุณในพื้นที่ใต้ถุน คุณเผชิญกับข้อหาประมาทเลินเล่อทางอาญา',
                    zh: '💥 灾难！两小时后房子爆炸了。调查人员在爬行空间发现了你的脚印。你面临刑事过失指控制。'
                },
                stats: { competence: -10, ethics: -50, leadership: -40, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '📱 Delegate: Call your apprentice. "Hey kid, great learning opportunity. There\'s some spiders, but you break them, you buy them. I\'ll supervise from the truck."',
                    th: '📱 มอบหมายงาน: โทรหาเด็กฝึกงานของคุณ "เฮ้ไอน้อง โอกาสเรียนรู้เยี่ยมยอด มีแมงมุมนิดหน่อย แต่ถ้าทำพัง เอ็งจ่ายนะ พี่จะคุมอยู่บนรถ"',
                    zh: '📱 委派：打电话给你的学徒。"嘿小子，绝佳的学习机会。这有点蜘蛛，但弄坏了你得赔。我在车上监督。"'
                },
                consequence: {
                    en: '🤡 Bad Leader! The apprentice quits immediately upon seeing the nest. You are left alone, looking cowardly, and the client witnessed the whole exchange.',
                    th: '🤡 ผู้นำแย่! เด็กฝึกงานลาออกทันทีที่เห็นรังแมงมุม คุณถูกทิ้งไว้คนเดียว ดูขี้ขลาด และลูกค้าเห็นการแลกเปลี่ยนทั้งหมด',
                    zh: '🤡 糟糕的领导！学徒一看到巢穴就立刻辞职了。你独自一人，看起来很懦弱，而且客户目睹了整个过程。'
                },
                stats: { competence: 10, ethics: -10, leadership: -50, innovation: 15 }
            }
        ]
    },
    {
        id: 'hvac_003',
        text: {
            en: '🏠 The Hoarder\'s Ductwork: You enter a home to clean ducts, but it\'s a severe hoarding situation. There\'s a narrow path to the vents, but the air quality is toxic (mold, rot). The homeowner is embarrassed but desperate for clean air.',
            th: '🏠 ท่อลมของนักสะสมขยะ: คุณเข้าไปในบ้านเพื่อทำความสะอาดท่อลม แต่มันเป็นสภาพการสะสมขยะขั้นรุนแรง มีทางเดินแคบๆ ไปยังช่องระบายอากาศ แต่คุณภาพอากาศเป็นพิษ (เชื้อรา, ของเน่าเสีย) เจ้าของบ้านอับอายแต่ต้องการอากาศบริสุทธิ์อย่างมาก',
            zh: '🏠 囤积者的管道：你进入一所房子清理管道，但这是一个严重的囤积现场。通往通风口的只有一条狭窄的小路，但空气质量有毒（霉菌、腐烂）。房主很尴尬，但极度渴望清洁的空气。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Refuse Service: "I\'m sorry, this environment is unsafe for me. You need a biohazard team first. I\'m leaving."',
                    th: '🛑 ปฏิเสธการให้บริการ: "ขอโทษครับ สภาพแวดล้อมนี้ไม่ปลอดภัยสำหรับผม คุณต้องให้ทีมชีวภาพมาจัดการก่อน ผมขอกลับครับ"',
                    zh: '🛑 拒绝服务："对不起，这环境对我来说不安全。你需要先生化处理团队。我走了。"'
                },
                consequence: {
                    en: '🛡️ Health Preserved: You protect your lungs. The homeowner cries, but you avoid a respiratory infection. Your boss supports you.',
                    th: '🛡️ รักษาสุขภาพ: คุณปกป้องปอดของคุณ เจ้าของบ้านร้องไห้ แต่คุณเลี่ยงการติดเชื้อทางเดินหายใจได้ เจ้านายสนับสนุนคุณ',
                    zh: '🛡️ 保持健康：你保护了你的肺。房主哭了，但你避免了呼吸道感染。你的老板支持你。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '😷 Suit Up & clean: "Put on full Tyvek suit and respirator. Do the job efficiently. treating the customer with basic dignity."',
                    th: '😷 ใส่ชุด & ทำความสะอาด: "ใส่ชุด Tyvek เต็มยศและหน้ากากกันพิษ ทำงานอย่างมีประสิทธิภาพ ปฏิบัติกับลูกค้าด้วยความเคารพพื้นฐาน"',
                    zh: '😷 穿防护服 & 清理："穿上全套 Tyvek 防护服和呼吸器。高效地完成工作。给予客户基本的尊严。"'
                },
                consequence: {
                    en: '🤝 Compassionate Pro: It\'s gross work, but you get it done. The homeowner is incredibly grateful and tips you $100. You feel like a true helper.',
                    th: '🤝 มืออาชีพผู้เมตตา: งานน่าขยะแขยง แต่คุณก็ทำสำเร็จ เจ้าของบ้านซาบซึ้งใจมากและทริปคุณ 100 ดอลลาร์ คุณรู้สึกเหมือนเป็นผู้ช่วยเหลือที่แท้จริง',
                    zh: '🤝 富有同情心的专业人士：这活很恶心，但你搞定了。房主非常感激，给了你 100 美元小费。你觉得自己是个真正的帮助者。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📸 Social Media Shame: "Sneak photos of the mess and post them on SnapChat (anonymously). \'Look at this nightmare!\'"',
                    th: '📸 ประจานลงโซเชียล: "แอบถ่ายรูปความเละเทะแล้วโพสต์ลง SnapChat (แบบไม่ระบุตัวตน) \'ดูฝันร้ายนี่สิ!\'"',
                    zh: '📸 社交媒体羞辱："偷偷拍下烂摊子的照片并发到 SnapChat（匿名）。‘看这噩梦！’"'
                },
                consequence: {
                    en: '⚖️ Privacy Violation: The post goes viral. The homeowner recognizes their house and sues your company. You are tracked down and fired instantly.',
                    th: '⚖️ ละเมิดความเป็นส่วนตัว: โพสต์กลายเป็นไวรัล เจ้าของบ้านจำบ้านตัวเองได้และฟ้องบริษัทคุณ คุณถูกตามตัวเจอและถูกไล่ออกทันที',
                    zh: '⚖️ 侵犯隐私：帖子疯传。房主认出了他们的房子并起诉了你的公司。你被查出来并立即被解雇。'
                },
                stats: { competence: -10, ethics: -50, leadership: -40, innovation: -20 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Hazard Pay Extortion: "I\'ll do it, but it\'s triple the price due to \'environmental fees\'. Cash up front."',
                    th: '💰 รีดไถค่าความเสี่ยง: "ผมจะทำให้ แต่ราคา 3 เท่าเป็นค่า \'ธรรมเนียมสิ่งแวดล้อม\' จ่ายเงินสดก่อนทำ"',
                    zh: '💰 危险津贴勒索："我可以做，但因为‘环境费’要收三倍价格。先付现金。"'
                },
                consequence: {
                    en: '💸 Exploitation: They pay because they have no choice. You make money, but feel grimy inside. Later, they dispute the charge on their credit card.',
                    th: '💸 การขูดรีด: พวกเขายอมจ่ายเพราะไม่มีทางเลือก คุณได้เงิน แต่รู้สึกสกปรกข้างใน ทีหลังพวกเขาไปปฏิเสธยอดนี้กับบัตรเครดิต',
                    zh: '💸 剥削：他们付钱是因为别无选择。你赚了钱，但内心感觉肮脏。后来，他们在信用卡上对这笔费用提出异议。'
                },
                stats: { competence: 20, ethics: -30, leadership: -10, innovation: 10 }
            }
        ]
    },
    {
        id: 'hvac_004',
        text: {
            en: '🏫 The School Freeze: It\'s winter. A primary school\'s boiler has died. It\'s 20°F (-6°C) inside. Kids are being sent home. You find a cracked heat exchanger. Parts are 2 weeks away. The principal begs you to "bypass the safety" and fire it up just for today so parents can pick kids up safely.',
            th: '🏫 โรงเรียนแช่แข็ง: หน้าหนาว หม้อต้มของโรงเรียนประถมศึกษาพัง ข้างในอุณหภูมิ 20°F (-6°C) เด็กๆ ถูกส่งกลับบ้าน คุณพบตัวแลกเปลี่ยนความร้อนร้าว อะไหล่ต้องรอ 2 สัปดาห์ ครูใหญ่ขอร้องให้คุณ "มองข้ามความปลอดภัย" และจุดไฟทำงานแค่วันนี้เพื่อให้ผู้ปกครองมารับเด็กได้อย่างปลอดภัย',
            zh: '🏫 学校冻结：冬天。一所小学的锅炉坏了。里面只有 20°F (-6°C)。孩子们正被送回家。你发现热交换器破裂了。零件要 2 周才能到。校长求你"绕过安全装置"，就在今天启动它，以便家长能安全接走孩子。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Absolute No: "Carbon Monoxide kills. If I turn this on, kids could die. Keep their coats on. No heat."',
                    th: '🚫 ไม่เด็ดขาด: "คาร์บอนมอนอกไซด์ฆ่าคนได้ ถ้าผมเปิด เด็กอาจตาย ให้ใส่เสื้อโค้ทไว้ ไม่มีฮีตเตอร์"',
                    zh: '🚫 绝对不行："一氧化碳会死人的。如果我打开这个，孩子可能会死。让他们穿着外套。没有暖气。"'
                },
                consequence: {
                    en: '🛡️ Safety Hero: Cold but alive. The principal is angry, but later the fire department confirms the CO levels would have been lethal. You saved lives.',
                    th: '🛡️ ฮีโร่ความปลอดภัย: หนาวแต่รอด ครูใหญ่โกรธ แต่ทีหลังดับเพลิงยืนยันว่าระดับ CO จะถึงตาย คุณช่วยชีวิตคน',
                    zh: '🛡️ 安全英雄：虽然冷但活着。校长很生气，但随后消防部门确认一氧化碳水平本来会致。你救了命。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔧 Dangerous Rig: "I\'ll patch it with high-temp sealant. It might hold for 4 hours. Keep windows open just in case."',
                    th: '🔧 การดัดแปลงอันตราย: "ผมจะปะมันด้วยกาวทนความร้อนสูง มันอาจจะอยู่ได้ 4 ชั่วโมง เปิดหน้าต่างไว้เผื่อด้วย"',
                    zh: '🔧 危险改装："我会用高温密封胶补一下。可能能撑 4 小时。把窗户打开以防万一。"'
                },
                consequence: {
                    en: '⚠ Near Miss: It holds, but a teacher reports feeling dizzy (CO poisoning symptoms). You are lucky no one died. The school bans your company.',
                    th: '⚠ เกือบไป: มันอยู่ได้ แต่ครูรายงานว่าเวียนหัว (อาการพิษ CO) คุณโชคดีที่ไม่มีใครตาย โรงเรียนแบนบริษัทคุณ',
                    zh: '⚠ 险些出事：撑住了，但一位老师报告感到头晕（一氧化碳中毒症状）。你很幸运没人死。学校封杀了你的公司。'
                },
                stats: { competence: 20, ethics: -40, leadership: -20, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🌡️ Portable Solution: "Shut down the boiler. I\'ll call every shop in town and rent 20 industrial space heaters. We\'ll warm the cafeteria only."',
                    th: '🌡️ ทางออกเคลื่อนที่: "ปิดหม้อต้มซะ ผมจะโทรหาร้านทุกร้านในเมืองและเช่าเครื่องทำความร้อนอุตสาหกรรม 20 เครื่อง เราจะทำความอุ่นแค่โรงอาหาร"',
                    zh: '🌡️ 便携式方案："关闭锅炉。我会给城里所有的商店打电话，租 20 台工业加热器。我们只给食堂供暖。"'
                },
                consequence: {
                    en: '🧠 Problem Solver: It costs money, but it works safely. The kids stay warm in one room. Excellent crisis management.',
                    th: '🧠 นักแก้ปัญหา: ใช้เงินหน่อย แต่ปลอดภัย เด็กๆ อุ่นในห้องเดียว การจัดการวิกฤตยอดเยี่ยม',
                    zh: '🧠 问题解决者：这要花钱，但安全有效。孩子们在一个房间里保持温暖。出色的危机管理。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🏃 Walk Away: "Parts are on backorder. See you in 2 weeks. Good luck." Leave them freezing.',
                    th: '🏃 เดินหนี: "อะไหล่ต้องรอของ เจอกันอีก 2 อาทิตย์ โชคดีนะ" ปล่อยให้พวกเขาหนาวตาย',
                    zh: '🏃 一走了之："零件缺货。2 周后见。祝好运。"留他们在寒风中。'
                },
                consequence: {
                    en: '❄️ Cold Hearted: You tracked protocol, but lack empathy. The school contract is cancelled, and parents badmouth your business.',
                    th: '❄️ ใจร้าย: คุณทำตามระเบียบ แต่ไร้ความเห็นอกเห็นใจ สัญญาโรงเรียนถูกยกเลิก และผู้ปกครองด่าบริษัทคุณ',
                    zh: '❄️ 冷酷无情：你遵守了协议，但缺乏同情心。学校合同取消，家长们说你生意的坏话。'
                },
                stats: { competence: 10, ethics: 0, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'hvac_005',
        text: {
            en: '🏢 The Rooftop Lockout: You are servicing a unit on the roof of a 20-story building. It\'s 5 PM on a Friday. You finish up, but realize the door to the stairs has locked behind you. Your phone is dead. No one can hear you scream.',
            th: '🏢 การถูกขังบนดาดฟ้า: คุณกำลังซ่อมเครื่องบนดาดฟ้าตึก 20 ชั้น 5 โมงเย็นวันศุกร์ คุณทำเสร็จ แต่ตระหนักว่าประตูบันไดล็อกขังคุณไว้ โทรศัพท์แบตหมด ไม่มีใครได้ยินเสียงคุณตะโกน',
            zh: '🏢 屋顶被困：你正在并没有 20 层大楼的屋顶维修设备。周五下午 5 点。你干完了，但发现楼梯门在你身后锁上了。你手机没电了。没人能听到你的尖叫。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧵 MacGyver It: Use your tools to dissassemble the lock mechanism from the outside. Might damage the door.',
                    th: '🧵 แมคกายเวอร์: ใช้เครื่องมือถอดกลไกล็อกจาด้านนอก อาจทำประตูพัง',
                    zh: '🧵 麦盖弗式自救：用你的工具从外面拆开锁具。可能会损坏门。'
                },
                consequence: {
                    en: '🔓 Skilled Escape: You get it open in 20 minutes. The building manager is annoyed about the damaged lock, but impressed you got out.',
                    th: '🔓 การหนีด้วยทักษะ: คุณเปิดมันได้ใน 20 นาที ผู้จัดการตึกหงุดหงิดที่ล็อกพัง แต่ประทับใจที่คุณออกมาได้',
                    zh: '🔓 技术逃脱：你 20 分钟就弄开了。物业经理对损坏的锁很恼火，但对你能出来印象深刻。'
                },
                stats: { competence: 40, ethics: 30, leadership: 10, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '👋 Signal Flag: Use your reflective safety vest and a pole to flag down a drone or helicopter or pedestrian from the edge.',
                    th: '👋 ธงสัญญาณ: ใช้เสื้อกั๊กสะท้อนแสงและเสาโบกเรียกโดรนหรือเฮลิคอปเตอร์หรือคนเดินเท้าจากขอบตึก',
                    zh: '👋 信号旗：利用你的反光安全背心和一根杆子在边缘向无人机、直升机或行人发出信号。'
                },
                consequence: {
                    en: '🚓 Police Rescue: Someone sees you and calls 911. The fire department ladder truck gets you. Huge scene, very embarrassing.',
                    th: '🚓 ตำรวจกู้ภัย: มีคนเห็นคุณและโทร 911 รถกระเช้าดับเพลิงมารับคุณ เรื่องใหญ่โต น่าอายมาก',
                    zh: '🚓 警察救援：有人看到你并报了警。消防队的云梯车把你救了下来。场面很大，非常尴尬。'
                },
                stats: { competence: 10, ethics: 30, leadership: 0, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🔌 Cut the Power: "Find the main power feed to the building\'s AC on the roof and shut it ALL down. Someone will come check why the AC died."',
                    th: '🔌 ตัดไฟ: "หาจุดจ่ายไฟหลักของแอร์ตึกบนดาดฟ้าและสับสวิตช์ดับทั้งหมด เดี๋ยวก็มีคนขึ้นมาดูว่าทำไมแอร์ดับ"',
                    zh: '🔌 切断电源："在屋顶找到大楼空调的主电源并全部切断。会有人上来检查为什么空调停了。"'
                },
                consequence: {
                    en: '💡 Clever & Chaos: It takes 30 minutes, but the maintenance guy storms up, furious. You get rescued, but the building is hot and angry. Effective.',
                    th: '💡 ฉลาด & วุ่นวาย: ใช้เวลา 30 นาที ช่างซ่อมบำรุงวิ่งขึ้นมาอย่างโกรธจัด คุณรอด แต่ตึกร้อนและคนโมโห ได้ผล',
                    zh: '💡 聪明 & 混乱：花了 30 分钟，维修工怒气冲冲地跑上来了。你获救了，但大楼很热，人很生气。有效。'
                },
                stats: { competence: 30, ethics: -10, leadership: 20, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '⛺ Hunker Down: "Sleep in the AC housing unit. Wait for Monday. Survival mode."',
                    th: '⛺ ปักหลัก: "นอนในตู้แอร์ รอวันจันทร์ โหมดเอาตัวรอด"',
                    zh: '⛺ 蹲守："睡在空调机箱里。等到周一。生存模式。"'
                },
                consequence: {
                    en: '🧟 Dehydration: By Saturday noon you are delirious. You are found Sunday by a security guard. Hospitalized for 2 days.',
                    th: '🧟 ภาวะขาดน้ำ: บ่ายวันเสาร์คุณเริ่มเพ้อ รปภ. มาเจอวันอาทิตย์ นอนโรงพยาบาล 2 วัน',
                    zh: '🧟 脱水：到了周六中午你就神志不清了。周日被保安发现。住院 2 天。'
                },
                stats: { competence: -10, ethics: 20, leadership: -20, innovation: 10 }
            }
        ]
    },
    {
        id: 'hvac_006',
        text: {
            en: '🐀 The Rat King: In a restaurant ceiling, you find a rat nest clogging the intake. As you pull it out, rats scatter into the dining room during lunch rush. Chaos ensues.',
            th: '🐀 ราชาหนู: ในฝ้าเพดานร้านอาหาร คุณเจอรังหนูอุดตันท่อดูด ขณะที่คุณดึงมันออก หนูแตกฮือลงไปในห้องทานอาหารช่วงพักเที่ยง ความโกลาหลตามมา',
            zh: '🐀 鼠王：在一家餐馆的天花板里，你发现一个老鼠窝堵塞了进气口。当你把它拉出来时，老鼠在午餐高峰期四散到餐厅里。一片混乱。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Damage Control: "Jump down! Help catch them! Shouting \'Sorry! Maintenance issue!\' Try to contain the PR disaster."',
                    th: '🛡️ ควบคุมความเสียหาย: "กระโดดลงไป! ช่วยจับพวกมัน! ตะโกน \'ขอโทษครับ! ปัญหาซ่อมบำรุง!\' พยายามคุมหายนะ PR"',
                    zh: '🛡️ 损害控制："跳下去！帮忙抓它们！大喊‘对不起！维修问题！’试图控制公关灾难。"'
                },
                consequence: {
                    en: '🏃 Action Man: You look ridiculous chasing rats, but the owner appreciates the help. Customers leave, but you showed you care.',
                    th: '🏃 ยอดมนุษย์: คุณดูตลกที่ไล่จับหนู แต่เจ้าของซาบซึ้งที่ช่วย ลูกค้าหนีหมด แต่คุณแสดงให้เห็นว่าคุณแคร์',
                    zh: '🏃 行动派：你追老鼠的样子很滑稽，但店主感谢你的帮助。顾客走了，但你表现出了你的关心。'
                },
                stats: { competence: 30, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🏃 Flee the Scene: "Close the tile. Pack up ladder. Walk out the back door like nothing happened. \'Wasn\'t me.\'"',
                    th: '🏃 หนีจากที่เกิดเหตุ: "ปิดฝ้า เก็บคาบันได เดินออกประตูหลังเหมือนไม่มีอะไรเกิดขึ้น \'ไม่ใช่ผม\'"',
                    zh: '🏃 逃离现场："合上瓷砖。收起梯子。像什么都没发生一样从后门走出去。‘不是我干的。’"'
                },
                consequence: {
                    en: '🤥 Coward\'s Way: The restaurant is shut down by health inspectors. The owner checks security cameras and bans your company forever.',
                    th: '🤥 วิถีคนขี้ขลาด: ร้านอาหารถูกสั่งปิดโดยผู้ตรวจสอบสาธารณสุข เจ้าของเช็คกล้องวงจรปิดและแบนบริษัทคุณตลอดไป',
                    zh: '🤥 懦夫行径：餐馆被卫生检查员查封。店主查看监控并不再录用你的公司。'
                },
                stats: { competence: -10, ethics: -40, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Blame the Duct: "Yell \'Holy Cow! The vent broke open!\' Pretend it was a structural failure, not your handling."',
                    th: '🛑 โทษท่อ: "ตะโกน \'คุณพระช่วย! ท่อแตก!\' แกล้งทำเป็นว่าโครงสร้างพัง ไม่ใช่ฝีมือคุณ"',
                    zh: '🛑 怪管道："大喊‘天哪！通风口裂开了！’假装是结构故障，不是你的操作问题。"'
                },
                consequence: {
                    en: '🎭 Bad Acting: No one believes walls just explode rats. You look incompetent and dishonest.',
                    th: '🎭 การแสดงห่วย: ไม่มีใครเชื่อว่าผนังจะระเบิดหนูออกมาเอง คุณดูไร้ความสามารถและไม่ซื่อสัตย์',
                    zh: '🎭 拙劣的表演：没人相信墙壁会自己爆出老鼠。你看起来既无能又不诚实。'
                },
                stats: { competence: 10, ethics: -30, leadership: -20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🧹 Vacuum Power: "Use your industrial shop vac to try and suck up the stragglers quickly before they hit the floor."',
                    th: '🧹 พลังดูดฝุ่น: "ใช้เครื่องดูดฝุ่นอุตสาหกรรมของคุณพยายามดูดตัวที่เหลืออย่างเร็วก่อนที่มันจะถึงพื้น"',
                    zh: '🧹 真空吸力："使用你的工业车间吸尘器，试图在它们落地之前迅速吸走散兵游勇。"'
                },
                consequence: {
                    en: '🔫 Ghostbuster: You catch half of them. It\'s gross but effective. The video of you "vacuuming rats" goes viral.',
                    th: '🔫 บริษัทกำจัดผี: คุณจับได้ครึ่งหนึ่ง น่าแหวะแต่ได้ผล วิดีโอคุณ "ดูดหนู" กลายเป็นไวรัล',
                    zh: '🔫 捉鬼敢死队：你抓住了其中一半。虽然恶心但有效。你"吸老鼠"的视频疯传。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 50 }
            }
        ]
    },
    {
        id: 'hvac_007',
        text: {
            en: '🧪 The Ammonia Leak: Industrial refrigeration job. You smell ammonia—strong. It\'s a deadly leak in a meat packing plant. 50 workers are on the floor. The alarm isn\'t sounding.',
            th: '🧪 แอมโมเนียรั่ว: งานตู้แช่อุตสาหกรรม คุณได้กลิ่นแอมโมเนีย—แรงมาก มันคือการรั่วไหลมรณะในโรงงานบรรจุเนื้อสัตว์ คนงาน 50 คนอยู่ในพื้นที่ สัญญาณเตือนภัยไม่ดัง',
            zh: '🧪 氨气泄漏：工业制冷工作。你闻到了氨气味——很浓。这是一家肉类加工厂的致命泄漏。车间里有 50 名工人。警报没有响。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Pull the Manual Alarm: "Smash the glass! RUN! Everyone get out! upwind!" Take command of the evacuation.',
                    th: '🚨 ดึงสัญญาณเตือนมือ: "ทุบกระจก! วิ่ง! ทุกคนออกไป! เหนือลม!" สั่งการอพยพ',
                    zh: '🚨 拉响手动警报："砸碎玻璃！跑！所有人出去！逆风跑！"指挥疏散。'
                },
                consequence: {
                    en: '🏅 Lifesaver: You saved 50 people from lung damage. The plant manager is grateful, even though production stopped. Hero status.',
                    th: '🏅 ผู้ช่วยชีวิต: คุณช่วย 50 คนจากปอดพัง ผู้จัดการโรงงานซาบซึ้งใจ แม้การผลิตจะหยุดชะงัก สถานะฮีโร่',
                    zh: '🏅 救命恩人：你从肺损伤中拯救了 50 人。工厂经理很感激，尽管生产停止了。英雄地位。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '👺 Mask Up & Find Valve: "Put on your respirator. Run INTO the cloud to find the shutoff valve. Stop the leak at the source."',
                    th: '👺 ใส่หน้ากาก & หาวาล์ว: "ใส่หน้ากากกันพิษ วิ่งผ่าเมฆก๊าซเพื่อหาวาล์วปิด หยุดการรั่วที่ต้นตอ"',
                    zh: '👺 戴上面具 & 找阀门："戴上呼吸器。跑进云团找到截止阀。从源头阻止泄漏。"'
                },
                consequence: {
                    en: '⚰️ Death Wish: Your standard mask isn\'t rated for this concentration. You pass out. Firefighters have to rescue YOU. Very reckless.',
                    th: '⚰️ รนหาที่ตาย: หน้ากากมาตรฐานของคุณรับความเข้มข้นระดับนี้ไม่ไหว คุณหมดสติ นักดับเพลิงต้องมาช่วยคุณ ประมาทมาก',
                    zh: '⚰️ 作死：你的标准面具无法承受这种浓度。你晕倒了。消防员得来救你。非常鲁莽。'
                },
                stats: { competence: 30, ethics: 40, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📱 Call Boss: "Go outside to fresh air immediately. Call your supervisor. \'Hey, methinks there is a leak.\' Wait for instructions."',
                    th: '📱 โทรหาเจ้านาย: "ออกไปสูดอากาศบริสุทธิ์ทั้นที โทรหาหัวหน้า \'เฮ้ ผมว่ามีก๊าซรั่วนะ\' รอคำสั่ง"',
                    zh: '📱 给老板打电话："立即到外面呼吸新鲜空气。给主管打电话。‘嘿，我觉得有泄漏。’等待指示。"'
                },
                consequence: {
                    en: '🐌 Too Slow: By the time you get instructions, workers are fainting. You protected yourself but failed to warn others.',
                    th: '🐌 ช้าเกินไป: กว่าจะได้คำสั่ง คนงานก็เป็นลมกันแล้ว คุณปกป้องตัวเองแต่ล้มเหลวที่จะเตือนคนอื่น',
                    zh: '🐌 太慢了：等你得到指示时，工人们已经晕倒了。你保护了自己，但没能警告他人。'
                },
                stats: { competence: 20, ethics: -20, leadership: -30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🔧 Fix the Alarm: "Run to the control panel and try to rewire the alarm horn so it sounds. Technical solution."',
                    th: '🔧 ซ่อมสัญญาณเตือน: "วิ่งไปที่แผงควบคุมและพยายามต่อสายแตรเตือนภัยให้ดัง ทางออกเชิงเทคนิค"',
                    zh: '🔧 修理警报："跑到控制面板，试着重新连接警报喇叭让它响起来。技术解决方案。"'
                },
                consequence: {
                    en: '🎼 Fiddling while Rome Burns: You spend precious minutes on wiring while gas spreads. Wrong priority.',
                    th: '🎼 สีซอขณะกรุงโรมถูกเผา: คุณเสียเวลาอันมีค่าไปกับการต่อสายไฟขณะที่ก๊าซกระจาย ลำดับความสำคัญผิดพลาด',
                    zh: '🎼 罗马着火时拉小提琴：你在接线上浪费了宝贵的几分钟，而气体正在扩散。错误的优先级。'
                },
                stats: { competence: 30, ethics: 10, leadership: -10, innovation: 20 }
            }
        ]
    },
    {
        id: 'hvac_008',
        text: {
            en: '👻 The Haunted Attic: You are in a crawlspace of a 100-year-old Victorian house. You hear scratching and moaning. Your flashlight flickers. The homeowner warned you of "spirits."',
            th: '👻 ห้องใต้หลังคาผีสิง: คุณอยู่ในช่องใต้หลังคาบ้านวิคตอเรียนอายุ 100 ปี คุณได้ยินเสียงข่วนและเสียงคราง ไฟฉายคุณกะพริบ เจ้าของบ้านเตือนเรื่อง "วิญญาณ"',
            zh: '👻 闹鬼的阁楼：你在一座有 100 年历史的维多利亚式房屋的爬行空间里。你听到抓挠声和呻吟声。你的手电筒闪烁不定。房主警告过你有"幽灵"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔦 Investigate Fearlessly: "Spirits don\'t pay bills. Crawl deeper to find the noise. It\'s probably loose duct tape vibrating."',
                    th: '🔦 สำรวจอย่างไม่เกรงกลัว: "ผีไม่ได้จ่ายค่าน้ำไฟ คลานเข้าไปลึกกว่าเดิมเพื่อหาต้นตอเสียง น่าจะเป็นเทปกาวหลวมสั่น"',
                    zh: '🔦 无畏地调查："幽灵不去付账单。爬进深处寻找声音。可能是松动的管道胶带在震动。"'
                },
                consequence: {
                    en: '🦝 Raccoon Discovery: It was a family of raccoons. You are startled, but you identify the entry point. Realistic solution.',
                    th: '🦝 การค้นพบแรคคูน: มันคือครอบครัวแรคคูน คุณตกใจ แต่ก็หาจุดเข้าได้ ทางออกที่สมจริง',
                    zh: '🦝 浣熊发现：是一窝浣熊。你吓了一跳，但你找到了入口点。现实的解决方案。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏃 Panic Exit: "Nope. Nope. Nope. Squeeze out backwards fast. Tell homeowner \'You need an exorcist, not HVAC.\'"',
                    th: '🏃 แพนิคหนี: "ไม่เอาๆๆ ถอยหลังออกอย่างไว บอกเจ้าของบ้าน \'คุณต้องจ้างหมอผี ไม่ใช่ช่างแอร์\'"',
                    zh: '🏃 恐慌退出："不。不。不。快速倒着挤出来。告诉房主‘你需要驱魔人，不是暖通空调技工。’"'
                },
                consequence: {
                    en: '🐔 Reputation Hit: You look silly. The homeowner leaves a review saying you are easily scared. You lose the job.',
                    th: '🐔 เสียชื่อ: คุณดูตลก เจ้าของบ้านรีวิวว่าคุณขวัญอ่อน คุณเสียงาน',
                    zh: '🐔 毁誉：你看起来很傻。房主留评说你很容易被吓到。你丢了这份工作。'
                },
                stats: { competence: -10, ethics: 0, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📹 Ghost Hunter: "Pull out your phone. Record a video for YouTube. \'Yo, scary sounds in this attic!\' Forget the repair."',
                    th: '📹 นักล่าผี: "หยิบมือถือขึ้นมา อัดวิดีโอลงยูทูบ \'โย่ เสียงน่ากลัวในห้องใต้หลังคานี้!\' ลืมเรื่องซ่อมไปก่อน"',
                    zh: '📹 幽灵猎人："掏出手机。为 YouTube 录制视频。‘哟，这阁楼里有可怕的声音！’忘了修理吧。"'
                },
                consequence: {
                    en: '🎬 Viral Clown: Video gets views, but your boss sees it and writes you up for wasting time.',
                    th: '🎬 ตัวตลกไวรัล: วิดีโอคนดูเยอะ แต่เจ้านายเห็นและคาดโทษคุณฐานเสียเวลา',
                    zh: '🎬 病毒式小丑：视频有了点击量，但你老板看到了，记你一笔浪费时间。'
                },
                stats: { competence: -20, ethics: -10, leadership: 0, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🛠️ Scientific approach: "Measure airflow. Check loose dampeners. Use thermal camera to detect heat sources (animals). Logic wins."',
                    th: '🛠️ แนวทางวิทยาศาสตร์: "วัดการไหลของลม เช็คตัวกันสั่นหลวม ใช้กล้องจับความร้อนหาแหล่งความร้อน (สัตว์) ตรรกะชนะ"',
                    zh: '🛠️ 科学方法："测量气流。检查松动的阻尼器。使用热成像仪检测热源（动物）。逻辑致胜。"'
                },
                consequence: {
                    en: '🧠 Pro Diagnosis: Thermal camera spots the nesting animal. You suggest pest control. Professional and calm.',
                    th: '🧠 การวินิจฉัยโปร: กล้องจับความร้อนเห็นสัตว์ทำรัง คุณแนะนำบริษัทกำจัดสัตว์ มืออาชีพและนิ่ง',
                    zh: '🧠 专业诊断：热成像仪发现了筑巢的动物。你建议进行害虫防治。专业且冷静。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 40 }
            }
        ]
    },
    {
        id: 'hvac_009',
        text: {
            en: '👵 The Upsell Pressure: A sweet 80-year-old lady has a broken AC. It\'s just a $20 capacitor. Your boss told you to "Push unit replacements" this month or get fired. A new unit is $5,000.',
            th: '👵 แรงกดดันยอดขาย: คุณยายใจดีวัย 80 ปีแอร์เสีย มันแค่ตัวคาปาซิเตอร์ 20 ดอลลาร์พัง เจ้านายสั่งให้ "ดันยอดเปลี่ยนเครื่องใหม่" เดือนนี้ไม่งั้นโดนไล่ออก เครื่องใหม่ราคา 5,000',
            zh: '👵 推销压力：一位和蔼的 80 岁老奶奶的空调坏了。只是一个 20 美元的电容器坏了。你老板让你这个月"以此为空调更换"，否则就会被解雇。一台新机组要 5,000 美元。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '😈 Lie and Sell: "Ma\'am, the compressor is shot. You need a whole new system." Sell the $5k unit.',
                    th: '😈 โกหกแล้วขาย: "คุณนายครับ คอมเพรสเซอร์พังแล้ว คุณต้องเปลี่ยนระบบใหม่หมด" ขายเครื่อง 5 พัน',
                    zh: '😈 撒谎推销："女士，压缩机坏了。你需要一整套新系统。"卖掉了 5000 美元的机组。'
                },
                consequence: {
                    en: '💰 Sales Bonus: Boss loves you. You get a huge commission. But you can\'t sleep at night. You robbed a grandma.',
                    th: '💰 โบนัสการขาย: เจ้านายรักคุณ คุณได้ค่าคอมก้อนโต แต่คุณนอนไม่หลับ คุณปล้นคนแก่',
                    zh: '💰 销售奖金：老板爱你。你得到了一大笔佣金。但你晚上睡不着觉。你抢劫了一位老奶奶。'
                },
                stats: { competence: 10, ethics: -50, leadership: -10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '😇 Honest Fix: "It\'s a cheap part, Ma\'am. Fixed for $150 total." Ignore the boss\'s quota.',
                    th: '😇 ซ่อมอย่างซื่อสัตย์: "อะไหล่ถูกๆ ครับคุณนาย ซ่อมเสร็จรวม 150 ครับ" เมินยอดเจ้านาย',
                    zh: '😇 诚实修复："是个便宜零件，女士。修好总共 150 美元。"无视老板的配额。'
                },
                consequence: {
                    en: '🔥 Fired but Proud: The lady gives you cookies. Your boss fires you for "low performance." You leave with your integrity.',
                    th: '🔥 โดนไล่ออกแต่ภูมิใจ: คุณยายให้คุ้กกี้ เจ้านายไล่คุณออกฐาน "ผลงานต่ำ" คุณเดินออกมาพร้อมศักดิ์ศรี',
                    zh: '🔥 被解雇但自豪：老奶奶给了你饼干。老板因"业绩低"解雇了你。你带着正直离开了。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Middle Ground: "Fix the part, but strongly recommend a maintenance plan for $500/year to satisfy the boss."',
                    th: '⚖️ ทางสายกลาง: "ซ่อมอะไหล่ แต่แนะนำแพ็คเกจซ่อมบำรุง 500 ต่อปีอย่างจริงจังเพื่อเอาใจเจ้านาย"',
                    zh: '⚖️ 中间立场："修理零件，但强烈建议每年 500 美元的维护计划以满足老板。" '
                },
                consequence: {
                    en: '🧠 Clever Survival: The lady gets cooling. Boss gets some consistent revenue. You keep your job and your soul (mostly).',
                    th: '🧠 การเอาตัวรอดที่ฉลาด: คุณยายได้แอร์เย็น เจ้านายได้รายได้ประจำ คุณรักษาอานและวิญญาณ (ส่วนใหญ่) ไว้ได้',
                    zh: '🧠 聪明的生存：老奶奶得到了凉爽。老板得到了一些持续的收入。你保住了工作和良心（大部分）。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🔧 Secret Freebie: "I\'ll fix it for free off the books. Just don\'t tell my company." Risk theft of the part.',
                    th: '🔧 แอบทำให้ฟรี: "ผมจะซ่อมให้ฟรีนอกบัญชี อย่าบอกบริษัทผมนะ" เสี่ยงข้อหาขโมยอะไหล่',
                    zh: '🔧 秘密免费赠送："我会私下免费给你修。别告诉我公司就行。"冒偷窃零件的风险。'
                },
                consequence: {
                    en: '🕵️ Risky Charity: You are a Robin Hood. If caught, it\'s theft. But she is happy.',
                    th: '🕵️ การกุศลเสี่ยงๆ: คุณคือโรบินฮู้ด ถ้าโดนจับคือขโมย แต่เธอมีความสุข',
                    zh: '🕵️ 冒险的慈善：你是个罗宾汉。如果被抓到，那就是偷窃。但她很高兴。'
                },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'hvac_010',
        text: {
            en: '🐈 The Cat in the Vent: A customer\'s beloved cat "Mittens" crawled into the return air duct and is stuck 20 feet in. It\'s wailing. The ducts are sealed in the drywall.',
            th: '🐈 แมวในท่อ: แมวสุดที่รักของลูกค้า "มิตเทนส์" คลานเข้าไปในท่อลมกลับและติดอยู่ลึก 20 ฟุต มันกำลังร้องโหยหวน ท่อถูกปิดตายในผนัง',
            zh: '🐈 通风口里的猫：客户心爱的猫"Mittens"爬进了回风管道，被困在 20 英尺深处。它在哀嚎。管道密封在干墙里。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🪚 Cut the Wall: "I have to saw through the ceiling to get to the duct. It will make a mess and cost $$$ to repair."',
                    th: '🪚 ตัดผนัง: "ผมต้องเลื่อยเพดานเพื่อเข้าถึงท่อ มันจะเละเทะและเสียเงินซ่อมเยอะนะ"',
                    zh: '🪚 切开墙壁："我必须锯开天花板才能接触到管道。这会弄得一团糟，而且维修要花很多钱。"'
                },
                consequence: {
                    en: '🔨 Brutal Efficiency: You get the cat out in 10 mins. The house is a mess, but the cat is safe. Customer pays happily.',
                    th: '🔨 ประสิทธิภาพโหด: คุณเอาแมวออกมาได้ใน 10 นาที บ้านเละ แต่แมวปลอดภัย ลูกค้ายอมจ่ายอย่างมีความสุข',
                    zh: '🔨 残酷的高效：你 10 分钟就把猫弄出来了。房子一团糟，但猫很安全。客户开心地付钱。'
                },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🐟 The Tuna Lure: "Put a can of tuna and a fan at the opening. Wait. Don\'t damage the house."',
                    th: '🐟 เหยื่อทูน่า: "วางกระป๋องทูน่าและพัดลมไว้ที่ปากท่อ รอ อย่าทำบ้านพัง"',
                    zh: '🐟 金枪鱼诱饵："在开口处放一罐金枪鱼和一个风扇。等待。不要损坏房子。"'
                },
                consequence: {
                    en: '⏳ Patience Pays: It takes 3 hours. You bill for the time. The cat comes out hungry. No damage.',
                    th: '⏳ ความอดทนคุ้มค่า: ใช้เวลา 3 ชั่วโมง คุณคิดเงินตามเวลา แมวออกมาอย่างหิวโหย ไม่มีอะไรพัง',
                    zh: '⏳ 耐心会有回报：花了 3 个小时。你按时间收费。猫饿着肚子出来了。没有损坏。'
                },
                stats: { competence: 30, ethics: 30, leadership: 10, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '💨 Blow It Out: "Turn the HVAC blower to MAX. Try to push the cat out with air pressure."',
                    th: '💨 เป่ามันออกมา: "เปิดพัดลมแอร์ให้สุด พยายามดันแมวออกมาด้วยแรงดันลม"',
                    zh: '💨 把它吹出来："把暖通空调鼓风机开到最大。试着用气压把猫推出来。"'
                },
                consequence: {
                    en: '🙀 Traumatized Cat: The cat tumbles out like a fur ball. Scared for life. The owner is horrified but it worked.',
                    th: '🙀 แมวขวัญเสีย: แมวกลิ้งออกมาเป็นก้อนขน กลัวไปตลอดชีวิต เจ้าของสยองแต่ก็ได้ผล',
                    zh: '🙀 受惊的猫：猫像个毛球一样滚了出来。吓得半死。主人吓坏了，但这招奏效了。'
                },
                stats: { competence: 10, ethics: -10, leadership: -20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Call Fire Dept Not My Job: "I do AC, not animal control. Call the fire department."',
                    th: '📞 โทรดับเพลิง ไม่ใช่งานผม: "ผมทำแอร์ ไม่ใช่จับสัตว์ โทรเรียกดับเพลิงเถอะ"',
                    zh: '📞 叫消防队不是我的工作："我是修空调的，不是管动物的。叫消防队吧。"'
                },
                consequence: {
                    en: '👎 Service Fail: You leave. They leave a 1-star review: "Technician acts like a robot. No heart."',
                    th: '👎 บริการล้มเหลว: คุณกลับ พวกเขารีวิว 1 ดาว: "ช่างทำตัวเหมือนหุ่นยนต์ ไร้หัวใจ"',
                    zh: '👎 服务失败：你走了。他们留下了 1 星评价："技术员像个机器人。没良心。"'
                },
                stats: { competence: 0, ethics: -20, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'hvac_011',
        text: {
            en: '💻 The Server Room Crisis: A bank\'s main server room cooling failed. It\'s 100°F rising to 120°F. If servers melt, millions lost. The safety switch keeps tripping the unit. The bank VP screams "Bypass the safety! Just run it!"',
            th: '💻 วิกฤตห้องเซิร์ฟเวอร์: แอร์ห้องเซิร์ฟเวอร์หลักของธนาคารเสีย อุณหภูมิ 100°F กำลังขึ้นไป 120°F ถ้าเซิร์ฟเวอร์ละลาย เงินหายหลายล้าน สวิตช์นิรภัยตัดการทำงานตลอด รองประธานธนาคารตะโกน "ข้ามระบบความปลอดภัย! เดินเครื่องไปเลย!"',
            zh: '💻 服务器机房危机：一家银行的主服务器机房冷却系统出现故障。温度 100°F 正在升至 120°F。如果服务器熔毁，损失数百万。安全开关不断使机组跳闸。银行副总裁尖叫道"绕过安全装置！运行它！"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚡ Hotwire It: "Okay. I\'ll jump the safety. The compressor might explode/burn out, but it will cool for a few hours."',
                    th: '⚡ ต่อตรง: "โอเค ผมจะต่อตรงข้ามเซฟตี้ คอมเพรสเซอร์อาจระเบิด/ไหม้ แต่มันจะเย็นไปได้สักพัก"',
                    zh: '⚡以此连接："好吧。我跳过安全装置。压缩机可能会爆炸/烧毁，但它能冷却几个小时。"'
                },
                consequence: {
                    en: '💥 Compressor Death: It cools for 3 hours, then the compressor melts down permanently. But the bank saved their data. Expensive repair later.',
                    th: '💥 คอมเพรสเซอร์ตาย: เย็นได้ 3 ชั่วโมง แล้วคอมก็ละลายถาวร แต่ธนาคารเซฟข้อมูลได้ ค่าซ่อมทีหลังอ้วก',
                    zh: '💥 压缩机死亡：它冷却了 3 个小时，然后压缩机永久熔毁。但银行保存了他们的数据。以后的维修费用昂贵。'
                },
                stats: { competence: 50, ethics: 10, leadership: 20, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Refuse Risk: "No. Jumping safeties is illegal and causing a fire hazard. I won\'t do it."',
                    th: '🛑 ปฏิเสธความเสี่ยง: "ไม่ การต่อตรงผิดกฎหมายและเสี่ยงไฟไหม้ ผมไม่ทำ"',
                    zh: '🛑 拒绝风险："不。跳过安全装置是非法的，并且会导致火灾隐患。我不会做的。"'
                },
                consequence: {
                    en: '📉 Data Loss: The servers shut down to protect themselves. The bank loses huge service time. They blame you.',
                    th: '📉 ข้อมูลสูญหาย: เซิร์ฟเวอร์ปิดตัวเองเพื่อป้องกันตัว ธนาคารเสียเวลาให้บริการมหาศาล พวกเขาโทษคุณ',
                    zh: '📉 数据丢失：服务器为了自我保护而关机。银行损失了巨大的服务时间。他们怪你。'
                },
                stats: { competence: 40, ethics: 50, leadership: 10, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧊 Dry Ice Emergency: "Turn off the AC. Send interns to buy 500lbs of dry ice and fans immediately. Cool it manually."',
                    th: '🧊 ฉุกเฉินน้ำแข็งแห้ง: "ปิดแอร์ ส่งเด็กฝึกงานไปซื้อน้ำแข็งแห้ง 500 ปอนด์และพัดลมเดี๋ยวนี้ ทำความเย็นด้วยมือ"',
                    zh: '🧊 干冰急救："关掉空调。让实习生马上去买 500 磅干冰和风扇。手动冷却。"'
                },
                consequence: {
                    en: '🧠 MacGyver Save: It works perfectly. The room stays at 80°F until parts arrive. You are a genius.',
                    th: '🧠 แมคกายเวอร์กู้ชีพ: ได้ผลสมบูรณ์ ห้องอยู่ที่ 80°F จนอะไหล่มา คุณคืออัจฉริยะ',
                    zh: '🧠 麦盖弗式救援：效果完美。房间保持在 80°F 直到零件以此。你是个天才。'
                },
                stats: { competence: 30, ethics: 40, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '💦 Garden Hose Spray: "Run a hose and spray water on the condenser coil outside to lower pressure. Keep it running."',
                    th: '💦 สายยางรดน้ำ: "ลากสายยางมาฉีดน้ำใส่คอยล์ร้อนข้างนอกเพื่อลดแรงดัน ให้มันทำงานต่อไป"',
                    zh: '💦 花园软管喷水："接一根软管，向外面的冷凝器盘管喷水以降低压力。让它保持运行。"'
                },
                consequence: {
                    en: '🔧 Old School Trick: It lowers the head pressure enough to stop tripping. Simple physics saving the day.',
                    th: '🔧 ทริคโบราณ: มันลดแรงดันได้พอที่จะไม่ตัด ฟิสิกส์ง่ายๆ กู้สถานการณ์',
                    zh: '🔧 老派技巧：它降低了压头压力，足以停止跳闸。简单的物理学挽救了局面。'
                },
                stats: { competence: 45, ethics: 30, leadership: 20, innovation: 30 }
            }
        ]
    },
    {
        id: 'hvac_012',
        text: {
            en: '💥 The DIY Disaster: A homeowner tried to install their own gas furnace watching YouTube. It\'s leaking gas, venting exhaust into the house, and the wiring is a fire hazard. They say "Just hook up the final wire for me."',
            th: '💥 หายนะ DIY: เจ้าของบ้านพยายามติดตั้งเตาแก๊สเองโดยดูยูทูบ แก๊สรั่ว ท่อไอเสียพ่นเข้าบ้าน และสายไฟเสี่ยงไฟไหม้ เขาบอก "แค่ต่อสายสุดท้ายให้หน่อย"',
            zh: '💥 DIY 灾难：一位房主试图看着 YouTube 自己安装燃气炉。它在漏气，废气排进屋里，接线有火灾隐患。他们说"帮我接上最后那根线就行。" '
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Red Tag It: "Absolutely not. This is a death trap. I am \'Red Tagging\' this unit and shutting off gas. You cannot turn it on until fully re-installed."',
                    th: '🚫 ติดป้ายแดง: "ไม่มีทาง นี่มันกับดักมรณะ ผมจะ \'ติดป้ายแดง\' เครื่องนี้และปิดแก๊ส คุณเปิดไม่ได้จนกว่าจะติดตั้งใหม่หมด"',
                    zh: '🚫 贴红标签："绝对不行。这是死亡陷阱。我要给这台机组‘贴红标签’并切断煤气。在完全重新安装之前你不能打开它。"'
                },
                consequence: {
                    en: '🛡️ Enforced Safety: They scream at you, but you likely saved a family from CO poisoning or explosion. Law is on your side.',
                    th: '🛡️ บังคับความปลอดภัย: เขาตะคอกใส่คุณ แต่คุณน่าจะช่วยครอบครัวจากพิษ CO หรือระเบิด กฎหมายอยู่ข้างคุณ',
                    zh: '🛡️ 强制安全：他们对你大吼大叫，但你可能从一氧化碳中毒或爆炸中拯救了一个家庭。法律站在你这一边。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤑 Fix Everything: "I will do it, but I have to rip it all out and start over. It will cost $2,000 labor."',
                    th: '🤑 แก้ให้หมด: "ผมทำให้ได้ แต่ต้องรื้อทำใหม่หมด คิดค่าแรง 2,000"',
                    zh: '🤑 修复一切："我会做的，但我必须把它全部拆掉重新开始。人工费要 2000 美元。"'
                },
                consequence: {
                    en: '💰 Expensive Lesson: They pay grudgingly. You fix it properly. Safe revenue.',
                    th: '💰 บทเรียนราคาแพง: พวกเขายอมจ่ายแบบไม่เต็มใจ คุณซ่อมให้เรียบร้อย รายได้ที่ปลอดภัย',
                    zh: '💰 昂贵的教训：他们不情愿地付了钱。你把它修好了。安全的收入。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🔌 Just Hook It Up: "Okay, I\'ll connect the wire. But sign this waiver saying I didn\'t touch the rest."',
                    th: '🔌 แค่ต่อให้: "โอเค ผมต่อสายให้ แต่เซ็นใบสละสิทธิ์นะว่าผมไม่ได้แตะส่วนอื่น"',
                    zh: '🔌 就接上它："好的，我接线。但签这份弃权书，说我没动其他部分。"'
                },
                consequence: {
                    en: '⚖️ Waiver Worthless: The house has a gas leak later. The waiver doesn\'t hold up in court because you saw the danger and ignored it. License lost.',
                    th: '⚖️ ใบสละสิทธิ์ไร้ค่า: บ้านแก๊สรั่วทีหลัง ใบสละสิทธิ์ใช้ในศาลไม่ได้เพราะคุณเห็นอันตรายแต่เพิกเฉย โดนยึดใบอนุญาต',
                    zh: '⚖️ 弃权书毫无价值：后来房子煤气泄漏。弃权书在法庭上站不住脚，因你看到了危险却视而不见。执照丢失。'
                },
                stats: { competence: 10, ethics: -50, leadership: -30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🏃 Walk Away: "I can\'t touch this. Too much liability. Goodbye." Leave them with the bomb.',
                    th: '🏃 เดินหนี: "ผมแตะไม่ได้ ความรับผิดชอบเยอะไป ลาก่อน" ทิ้งพวกเขาไว้กับระเบิดเวลา',
                    zh: '🏃 走开："我不能碰这个。责任太大了。再见。"留他们守着那颗炸弹。'
                },
                consequence: {
                    en: '❄️ Cold Shoulder: You protect yourself legally, but morally you left a dangerous situation active. Hope they don\'t blow up.',
                    th: '❄️ เย็นชา: คุณปกป้องตัวเองทางกฎหมาย แต่ทางศีลธรรมคุณทิ้งสถานการณ์อันตรายไว้ หวังว่าบ้านเขาจะไม่บึ้มนะ',
                    zh: '❄️ 冷漠：你在法律上保护了自己，但在道德上你任由危险情况发生。希望他们别炸了。'
                },
                stats: { competence: 20, ethics: -10, leadership: -10, innovation: 0 }
            }
        ]
    },
    {
        id: 'hvac_013',
        text: {
            en: '🍷 The Millionaire\'s Wine: A wealthy client calls at 11 PM. His $500,000 wine collection is at risk because the specialized cooling unit failed. The temperature is rising. You reach the unit and realize you don\'t have the specific OEM part.',
            th: '🍷 ไวน์ของเศรษฐี: ลูกค้าผูกขาดโทรหาตอน 5 ทุ่ม คอลเลกชันไวน์มูลค่า 5 แสนดอลลาร์ตกอยู่ในอันตรายเพราะเครื่องทำความเย็นพิเศษเสีย อุณหภูมิกำลังสูงขึ้น คุณไปถึงหน้างานแต่พบว่าไม่มีอะไหล่แท้ (OEM) ติดมาด้วย',
            zh: '🍷 百万富翁的酒：一位富有的客户在晚上 11 点打来电话。由于专门的冷却装置故障，他价值 50 万美元的藏酒面临风险。温度正在上升。你到达现场后发现你没有特定的原厂零件。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛠️ The MacGyver Fix: "I can bypass the sensor and bridge the relay with a standard part. It\'ll hold for 24 hours until the shop opens, but it technically voids the warranty."',
                    th: '🛠️ การซ่อมแบบแมคไกเวอร์: "ผมข้ามเซนเซอร์แล้วเชื่อมรีเลย์ด้วยอะไหล่มาตรฐานแทนได้ มันจะอยู่ได้ถึง 24 ชั่วโมงจนกว่าร้านจะเปิด แต่ในทางเทคนิคคือจะทำให้ประกันขาดนะ"',
                    zh: '🛠️ 临时修补："我可以绕过传感器，用标准零件桥接继电器。这可以撑 24 小时直到商店开门，但在技术上，这会使保修失效。"'
                },
                consequence: {
                    en: '🍷 Wine Saved: The client doesn\'t care about the warranty; he cares about his Petrus. You saved the collection. Big tip and a loyal customer.',
                    th: '🍷 เซฟไวน์สำเร็จ: ลูกค้าไม่สนเรื่องประกันหรอก เขาสนใจไวน์ของเขามากกว่า คุณกู้ชีวิตคอลเลกชันไว้ได้ ทิปหนักและได้ลูกค้าขาประจำ',
                    zh: '🍷 救酒成功：客户不在乎保修；他在乎他的帕图斯红酒。你挽救了那些藏酒。丰厚的小费和一位忠实客户。'
                },
                stats: { competence: 40, ethics: 10, leadership: 0, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '❄️ Emergency Cooling: "I can\'t touch the unit without the right part. Let\'s buy 500 lbs of dry ice and put it in the cellar to buy time."',
                    th: '❄️ ทำความเย็นฉุกเฉิน: "ผมแตะเครื่องไม่ได้ถ้าไม่มีอะไหล่ที่ถูกต้อง ไปซื้อน้ำแข็งแห้ง 500 ปอนด์มาใส่ในห้องใต้ดินเพื่อซื้อเวลากันดีกว่า"',
                    zh: '❄️ 紧急冷却："在没有合适零件的情况下，我不能动这个装置。去买 500 磅干冰放进酒窖里争取时间。"'
                },
                consequence: {
                    en: '💨 Close Call: The dry ice keeps it cool, but the CO2 levels spike. You almost passed out. Expensive and dangerous, but the wine is safe.',
                    th: '💨 เกือบไปแล้ว: น้ำแข็งแห้งช่วยให้เย็น แต่ระดับ CO2 พุ่งสูงขึ้น คุณเกือบหมดสติ แพงและอันตราย แต่ไวน์ปลอดภัย',
                    zh: '💨 险些遇险：干冰保持了冷却，但二氧化碳浓度激增。你差点晕了过去。昂贵且危险，但酒保住了。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🚫 Professional Delay: "I am sorry, sir. Without the correct OEM parts, I cannot guarantee the repair. I will return at 8 AM tomorrow."',
                    th: '🚫 เลื่อนแบบมืออาชีพ: "ผมขอโทษครับท่าน ถ้าไม่มีอะไหล่แท้ ผมไม่สามารถรับประกันการซ่อมได้ ผมจะกลับมาใหม่ตอน 8 โมงเช้าพรุ่งนี้"',
                    zh: 'C：延迟修理："对不起，先生。如果没有正确的原厂零件，我无法保证维修质量。我明天早上 8 点再来。"'
                },
                consequence: {
                    en: '📉 Bitter Loss: The temperature hits 75°F overnight. The wine is \'cooked.\' The client sues your company for damages.',
                    th: '📉 ความสูญเสียที่ขมขื่น: อุณหภูมิพุ่งถึง 75 องศาฟาเรนไฮต์ในคืนเดียว ไวน์ "เสีย" ไปแล้ว ลูกค้าฟ้องเรียกค่าเสียหายจากบริษัทคุณ',
                    zh: '📉 惨痛损失：一夜之间温度达到 75 华氏度。酒"变质"了。客户起诉你的公司要求赔偿。'
                },
                stats: { competence: 10, ethics: 40, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📱 Call the OEM Rep: "Call my buddy who works for the manufacturer. He has a spare in his garage. It\'ll cost double, but we get it tonight."',
                    th: '📱 เรียกตัวแทน OEM: "โทรหาเพื่อนที่ทำงานบริษัทผู้ผลิต เขามีอะไหล่สำรองอยู่ในอู่ ราคาสองเท่าแต่ได้ของคืนนี้เลย"',
                    zh: 'D：致电原厂代表："给我那个在制造商公司工作的朋友打电话。他车库里有个备件。价格翻倍，但我们今晚就能拿到。"'
                },
                consequence: {
                    en: '🤝 Networking Hero: You got the part. The repair is perfect. The client is happy to pay the premium. You look like a magician.',
                    th: '🤝 ฮีโร่คอนเนคชั่น: คุณได้อะไหล่มา การซ่อมสมบูรณ์แบบ ลูกค้ายินดีจ่ายแพง คุณดูเหมือนผู้วิเศษเลย',
                    zh: '🤝 人脉英雄：你拿到了零件。维修很完美。客户乐于支付额外费用。你看起来就像个魔术师。'
                },
                stats: { competence: 30, ethics: 20, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'hvac_014',
        text: {
            en: '🍄 The Toxic Mold: You crawl into an attic to fix a duct leak and find the entire space covered in black mold. The homeowner (an elderly lady) says, "Just spray some bleach on it and fix the AC, dear."',
            th: '🍄 ราพิษ: คุณคลานเข้าไปในคอกเพื่อซ่อมท่อรั่วแล้วพบว่าพื้นที่ทั้งหมดเต็มไปด้วยราดำ เจ้าของบ้าน (คุณยายท่านหนึ่ง) บอกว่า "ลูกจ๋า ก็แค่ฉีดไฮเตอร์แล้วก็ซ่อมแอร์ไปเถอะจ้ะ"',
            zh: '🍄 有毒霉菌：你爬进阁楼修理管道泄漏，发现整个空间布满了黑霉。屋主（一位老妇人）说："亲爱的，就在上面喷点漂白剂，然后把空调修好就行。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Stop Work: "Ma\'am, this is a health hazard. I cannot legally work here or turn on your AC, which would blow spores into the house. You need a remediation team."',
                    th: '🛑 หยุดงาน: "คุณยายครับ นี่มันอันตรายต่อสุขภาพมาก ผมทำงานต่อไม่ได้ตามกฎหมาย และเปิดแอร์ไม่ได้ด้วย เพราะมันจะเป่าสปอร์เข้าบ้าน คุณต้องเรียกทีมกำจัดราดำครับ"',
                    zh: '🛑 停止工作："女士，这对健康有害。我不能合法地在这里工作，也不能开启你的空调，那会将孢子吹进屋里。你需要一个修复团队。"'
                },
                consequence: {
                    en: '🛡️ Responsible Action: She is upset about the cost, but you likely saved her life from respiratory failure. You get a referral from the mold company.',
                    th: '🛡️ การกระทำที่รับผิดชอบ: คุณยายอารมณ์เสียเรื่องค่าใช้จ่าย แต่คุณน่าจะช่วยชีวิตท่านจากระบบทางเดินหายใจล้มเหลว คุณได้คอมมิชชั่นแนะนำงานจากบริษัทกำจัดราด้วย',
                    zh: '🛡️ 负责任的行动：她对费用感到不快，但你可能救了她的命，避免了呼吸衰竭。你从霉菌修复公司获得了推荐佣金。'
                },
                stats: { competence: 40, ethics: 50, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '😷 Suit Up and Solve: "I have a respirator and a Tyvek suit. I\'ll scrub it down with professional fungicide and fix the AC myself for an extra $500."',
                    th: '😷 สวมชุดและลุย: "ผมมีหน้ากากกันสารพิษและชุดคลุม ผมจะขัดมันด้วยยาฆ่าเชื้อราเกรดโปรและซ่อมแอร์ให้เอง คิดเพิ่มแค่ 500 ดอลลาร์"',
                    zh: '😷 着装去解决："我有呼吸器和防护服。我会用专业杀菌剂擦洗，并额外加收 500 美元亲自修好空调。"'
                },
                consequence: {
                    en: '🤒 Health Risk: You fixed it, but your PPE wasn\'t perfect. You develop a chronic cough. You made money but damaged your lungs.',
                    th: '🤒 ความเสี่ยงต่อสุขภาพ: คุณซ่อมได้ แต่ PPE ไม่สมบูรณ์แบบ คุณเริ่มมีอาการไอเรื้อรัง ได้เงินแต่ปอดพัง',
                    zh: '🤒 健康风险：你把它修好了，但你的个人防护装备并不完善。你出现了慢性咳嗽。你赚了钱，但损害了肺部。'
                },
                stats: { competence: 30, ethics: 10, leadership: -10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '💦 Bleach and Bolt: "Do exactly what she asked. Spray bleach, tape the leak, and get out of there as fast as possible."',
                    th: '💦 ฉีดแล้วชิ่ง: "ทำตามที่ขอเลย ฉีดไฮเตอร์ แปะเทปที่รอยรั่ว แล้วรีบออกมาให้ไวที่สุด"',
                    zh: '💦 漂白后跑路："完全按照她的要求做。喷漂白剂，贴好泄漏处，尽快撤离。"'
                },
                consequence: {
                    en: '💀 Disaster: Bleach doesn\'t kill mold roots. Two months later, the lady is hospitalized. Your company is sued for negligence.',
                    th: '💀 หายนะ: ไฮเตอร์ทำลายราไม่ถึงราก สองเดือนต่อมาคุณยายต้องเข้าโรงพยาบาล บริษัทคุณถูกฟ้องฐานประมาทเลินเล่อ',
                    zh: '💀 灾难：漂白剂杀不死霉菌根。两个月后，老太太住院了。你的公司因疏忽大意被起诉。'
                },
                stats: { competence: -20, ethics: -40, leadership: -30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🏗️ Sealing Strategy: "Don\'t clean it, but encapsulate the ducts in heavy plastic so no spores can get in. Then fix the unit. Fast and cheap."',
                    th: '🏗️ กลยุทธ์การซีล: "ไม่ต้องทำความสะอาด แต่หุ้มท่อด้วยพลาสติกหนาเพื่อไม่ให้สปอร์เข้าไปได้ แล้วค่อยซ่อมเครื่อง ทั้งไวและถูก"',
                    zh: 'D：密封策略："不要清理，而是用厚塑料封死管道，这样就不会有孢子进入。然后修理装置。既快又便宜。"'
                },
                consequence: {
                    en: '⚠️ Temporary Fix: It works for a while, but the mold eventually eats through the plastic. You delayed the inevitable.',
                    th: '⚠️ เรื่องชั่วคราว: ได้ผลแค่แป๊บเดียว สุดท้ายราก็กัดทะลุพลาสติกอยู่ดี คุณแค่ประวิงเวลาเท่านั้น',
                    zh: '⚠️ 临时修复：奏效了一段时间，但霉菌最终腐蚀了塑料。你只是推迟了不可避免的结果。'
                },
                stats: { competence: 20, ethics: -10, leadership: 0, innovation: 30 }
            }
        ]
    },
    {
        id: 'hvac_015',
        text: {
            en: '🔥 The Heatwave Burnout: It\'s 105°F. You\'ve been working 14 hours. Your dispatcher sends you one more "Emergency Call" for a nursing home. You are dizzy from dehydration.',
            th: '🔥 ความเหนื่อยล้าช่วงคลื่นความร้อน: อุณหภูมิ 105 องศาฟาเรนไฮต์ คุณทำงานมา 14 ชั่วโมงแล้ว ศูนย์วิทยุส่ง "งานด่วน" มาให้อีกงานที่บ้านพักคนชรา คุณเริ่มหน้ามืดจากการขาดน้ำ',
            zh: '🔥 热浪倦怠：气温 105 华氏度。你已经连续工作了 14 个小时。调度员又给了你一个要去养老院的"紧急电话"。你因为脱水而感到头晕。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚑 Priority Call: "Drink two Gatorades, splash water on my face, and go. Those seniors will die without AC in this heat. I\'ll rest after."',
                    th: '🚑 งานเร่งด่วน: "ดื่มเกลือแร่ไป 2 ขวด เอาน้ำลูบหน้าแล้วไปต่อ ผู้สูงอายุจะตายเอาถ้าไม่มีแอร์ในอากาศแบบนี้ ผมค่อยพักทีหลัง"',
                    zh: '🚑 优先通话："喝两瓶佳得乐，往脸上泼点水，然后出发。在这样的高温下，没有空调那些老人会死的。我以后再休息。"'
                },
                consequence: {
                    en: '🌟 Hero Status: You fixed the main chiller. The manager calls you a saint. You collapse in your truck afterward but saved 50 lives.',
                    th: '🌟 สถานะฮีโร่: คุณซ่อมเครื่องทำความเย็นหลักได้ ผู้จัดการชมว่าคุณเป็นนักบุญเลย คุณไปสลบในรถหลังจากนั้นแต่ช่วยชีวิตคนไว้ได้ 50 คน',
                    zh: '🌟 英雄地位：你修好了主制冷机。经理称你为圣人。你事后瘫倒在卡车里，但救了 50 条人命。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Know Your Limits: "No. I am a safety risk to myself and the job. I\'m heading to the ER for an IV. Send someone else."',
                    th: '🛑 รู้ลิมิตตัวเอง: "ไม่ ผมกำลังเป็นความเสี่ยงต่อความปลอดภัยของตัวเองและงาน ผมจะไปโรงพยาบาลเพื่อให้น้ำเกลือ ส่งคนอื่นไปแทน"',
                    zh: '🛑 明确你的极限："不。对自己和这份工作来说，我都是一个安全隐患。我要去急诊室输液。派别人去吧。"'
                },
                consequence: {
                    en: '🛡️ Self-Preservation: You avoided a heatstroke-induced accident. Your boss is mad until they see your medical report. You live to work another day.',
                    th: '🛡️ การรักษาตัวเอง: คุณเลี่ยงอุบัติเหตุจากฮีโรกฟรุคได้ เจ้านายโมโหจนกระทั่งเห็นใบรับรองแพทย์ คุณยังมีชีวิตอยู่เพื่อทำงานในวันหน้า',
                    zh: '🛡️ 自我保护：你避免了因中暑导致的事故。在你老板看到你的医疗报告之前，他一直在生气。你活着看到了第二天的太阳。'
                },
                stats: { competence: 30, ethics: 20, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🏢 Remote Guidance: "I can\'t drive there, but the nursing home has a maintenance guy. I\'ll FaceTime him and walk him through the reset."',
                    th: '🏢 คำแนะนำทางไกล: "ผมขับไปไม่ไหว แต่ที่นั่นมีช่างอาคารอยู่ ผมจะ FaceTime หาแล้วบอกขั้นตอนการรีเซ็ตเครื่องให้เขาเอง"',
                    zh: '🏢 远程指导："我没法开车过去，但养老院有一个维修工。我会和他视频通话，引导他完成重置。"'
                },
                consequence: {
                    en: '🧠 Innovative Solution: It works! The maintenance guy fixed a simple tripped breaker. You solved the crisis from your couch.',
                    th: '🧠 วิธีแก้ที่แปลกใหม่: ได้ผล! ช่างอาคารแค่แก้เบรกเกอร์ที่ทริป คุณแก้ปัญหาได้แม้จะนั่งอยู่บนโซฟา',
                    zh: '🧠 创新解决方案：行得通！维修工修好了一个跳闸的断路器。你在沙发上解决了危机。'
                },
                stats: { competence: 40, ethics: 30, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🏎️ Rush and Crash: "Try to drive there fast. Maybe I\'ll feel better once I\'m in the AC."',
                    th: '🏎️ รีบไปจนพัง: "พยายามขับไปให้ไวที่สุด บางทีถ้าเจอแอร์แล้วอาจจะรู้สึกดีขึ้น"',
                    zh: '🏎️ 冲动行事："尽量快点开车。也许进了空调房我的感觉会好点。"'
                },
                consequence: {
                    en: '💥 Accident: You black out for a second and clip a parked car. Now you have a police report and no one fixed the nursing home.',
                    th: '💥 อุบัติเหตุ: คุณวูบไปนิดเดียวแล้วไปเบียดกับรถที่จอดอยู่ ตอนนี้คุณต้องไปโรงพักและไม่มีใครไปซ่อมแอร์ที่บ้านพักคนชราด้วย',
                    zh: '💥 事故：你晕厥了一秒钟，蹭到了一辆停着的车。现在你有了警察报告，而且养老院的空调也没人修。'
                },
                stats: { competence: -40, ethics: -20, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'hvac_016',
        text: {
            en: '🔌 The Apprentice\'s Blunder: Your trainee wired a 240V compressor to a 120V circuit. The unit hummed and then smoked. He\'s terrified and asks you to tell the customer "it was a faulty part from the factory."',
            th: '🔌 ความผิดพลาดของเด็กฝึกงาน: เด็กฝึกงานของคุณต่อสายคอมเพรสเซอร์ 240V เข้ากับวงจร 120V เครื่องฮัมดังสนั่นแล้วก็มีควันขึ้น เขาตกใจมากและขอให้คุณบอกลูกค้าว่า "มันเป็นอะไหล่ที่เสียมาจากโรงงาน"',
            zh: '🔌 学徒的失误：你的实习生将一个 240V 的压缩机连接到了 120V 的电路上。装置发出嗡嗡声，然后冒烟了。他吓坏了，让你告诉客户"这是工厂出产的故障零件。" '
        },
        options: [
            {
                id: 'A',
                text: {
                    en: ' honesty is Best: "Tell the customer the truth. We made a mistake. We will replace the unit at our cost and I\'ll use this as a learning moment for the kid."',
                    th: 'ความซื่อสัตย์ดีที่สุด: "บอกความจริงกับลูกค้า เราทำพลาดเอง เราจะเปลี่ยนเครื่องใหม่ให้โดยบริษัทรับผิดชอบค่าใช้จ่าย และผมจะใช้เรื่องนี้สอนบทเรียนให้เด็กด้วย"',
                    zh: 'A：诚实至上："告诉客户真相。我们犯了一个错误。我们将自费更换装置，我会以此作为这孩子的学习机会。"'
                },
                consequence: {
                    en: '🤝 Respect Earned: The customer appreciates the honesty. The apprentice learns responsibility. Your company loses $2k but keeps its soul.',
                    th: '🤝 ได้รับความเคารพ: ลูกค้าชอบในความซื่อสัตย์ เด็กฝึกงานได้เรียนรู้ความรับผิดชอบ บริษัทเสียเงิน 2 พันดอลลาร์แต่รักษาจรรยาบรรณไว้ได้',
                    zh: '🤝 赢得尊重：客户赞赏你的诚实。学徒学会了责任。你的公司损失了 2000 美元，但保留了灵魂。'
                },
                stats: { competence: 30, ethics: 50, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤥 Cover it Up: "Fine. I\'ll file the warranty claim as a \'Dead on Arrival\' factory defect. Don\'t ever do it again."',
                    th: '🤥 ช่วยปกปิด: "ก็ได้ ผมจะทำเรื่องเคลมประกันว่าเป็น \'ของเสียมาแต่แรก\' จากโรงงาน อย่าทำแบบนี้อีกนะ"',
                    zh: '🤥 掩盖事实："行吧。我会把保修申请作为‘到货即损’的工厂缺陷提交。以后绝不许再犯。"'
                },
                consequence: {
                    en: '🤐 Temporary Peace: The unit is replaced for free. But the apprentice thinks lying is how the industry works. You\'ve corrupted a future tech.',
                    th: '🤐 ความสงบชั่วคราว: ได้เปลี่ยนเครื่องใหม่ฟรี แต่เด็กฝึกงานจะจำว่าการโกหกคือเรื่องปกติของวงการนี้ คุณได้ทำลายอนาคตของเด็กไปแล้ว',
                    zh: '🤐 短暂和平：装置免费更换了。但学徒认为说谎是这个行业的运行方式。你带坏了一个未来的技术员。'
                },
                stats: { competence: 20, ethics: -50, leadership: -40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🛠️ The Secret Fix: "I think I can swap the burnt start capacitor and save it. If it works, no one needs to know. If it fails again, then we tell the truth."',
                    th: '🛠️ ซ่อมเงียบๆ: "ผมว่าผมเปลี่ยนตัวเก็บประจุสตาร์ทที่ไหม้แล้วกู้มันได้นะ ถ้าได้ผลก็ไม่มีใครต้องรู้ ถ้าพังอีกค่อยบอกความจริง"',
                    zh: '🛠️ 秘密修复："我觉得我可以更换烧坏的启动电容器并救活它。如果行得通，就没人需要知道了。如果再次失败，那我们就实话实说。"'
                },
                consequence: {
                    en: '🎰 Gamble: It works! For now. But the compressor life is shortened. You effectively sold the customer a damaged product.',
                    th: '🎰 การเดิมพัน: ได้ผล! สำหรับตอนนี้อะนะ แต่อายุการใช้งานคอมเพรสเซอร์จะสั้นลง เท่ากับคุณขายของพังๆ ให้ลูกค้า',
                    zh: '🎰 赌博：行得通！暂时如此。但压缩机寿命缩短了。你实际上向客户出售了一个受损的产品。'
                },
                stats: { competence: 40, ethics: -20, leadership: -10, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '😡 Punish and Fire: "Tell the customer he\'s fired. I can\'t have incompetent people on my team. He pays for the unit out of his final check."',
                    th: '😡 ทำโทษและไล่ออก: "บอกลูกค้าไปเลยว่าเขาโดนไล่ออก ผมเอาคนไม่ได้เรื่องไว้ในทีมไม่ได้ เขาต้องจ่ายค่าเครื่องจากเงินเดือนงวดสุดท้ายของเขาเอง"',
                    zh: '😡 惩罚并开除："告诉客户他被开除了。我的团队里不能有无能的人。他要从最后的支票里扣除装置的钱。"'
                },
                consequence: {
                    en: '💀 Toxic Leader: The apprentice is broken. The legal department tells you that you can\'t legally deduct that from his pay. You look like a jerk.',
                    th: '💀 ผู้นำที่แย่: เด็กฝึกงานเสียขวัญ ฝ่ายกฎหมายบอกว่าคุณทำแบบนั้นไม่ได้ตามกฎหมาย คุณดูเป็นคนนิสัยเสียเลย',
                    zh: '💀 毒性领导：学徒崩溃了。法律部门告诉你，你不能合法地从他的工资中扣除那笔钱。你看起来像是个混蛋。'
                },
                stats: { competence: -10, ethics: -30, leadership: -50, innovation: 0 }
            }
        ]
    },
    {
        id: 'hvac_017',
        text: {
            en: '📱 The Smart Home Glitch: A client\'s high-end "Self-Learning" thermostat has gone rogue. It\'s heating the house to 90°F in summer. The cloud server is down. You arrive and the client is screaming about their $400 electricity bill.',
            th: '📱 บั๊กบ้านอัจฉริยะ: เทอร์โมสแตทแบบ "เรียนรู้ด้วยตัวเอง" ของลูกค้าเกิดรวน มันทำความร้อนในบ้านจนถึง 90 องศาในหน้าร้อน เซิร์ฟเวอร์คลาวด์ล่ม คุณไปถึงแล้วลูกค้ากำลังโวยวายเรื่องค่าไฟ 400 ดอลลาร์',
            zh: '📱 智能家居故障：一位客户的高端"自学习"恒温器出了故障。它在夏天把房子加热到了 90 华氏度。云服务器宕机了。你到达时，客户正因他们 400 美元的电费单而大声尖叫。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔙 Back to Basics: "Rip it out. Install a high-quality non-smart thermostat. Technology is great until it\'s not. I\'ll give you a discount for the trouble."',
                    th: '🔙 กลับสู่พื้นฐาน: "ถอดมันออกเลย ติดเทอร์โมสแตทแบบธรรมดาที่คุณภาพสูงแทน เทคโนโลยีมันก็ดีจนกระทั่งมันไม่ดีนั่นแหละ ผมจะลดราคาให้เป็นการขอโทษ"',
                    zh: 'A：返璞归真："把它拔了。安装一个优质的非智能恒温器。技术在出问题之前都是伟大的。我会给你打个折作为补偿。"'
                },
                consequence: {
                    en: '🛡️ Reliability Win: The client is relieved. It never fails again. You lost the high-tech upsell but gained a lifetime of trust.',
                    th: '🛡️ ชนะด้วยความมั่นใจ: ลูกค้าเบาใจ มันไม่เคยเสียอีกเลย คุณเสียยอดขายไฮเทคไปแต่ได้ความไว้ใจตลอดชีวิตกลับมาแทน',
                    zh: '🛡️ 可靠胜出：客户松了一口气。从此再没出过故障。你失去了高科技产品的追加销售，但赢得了一辈子的信任。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '💾 Firmware Hack: "I can connect my laptop, bypass the cloud lock, and force-flash an older stable firmware. It\'ll fix the bug but it\'s unauthorized."',
                    th: '💾 แฮ็กเฟิร์มแวร์: "ผมเชื่อมต่อโน้ตบุ๊ก ข้ามการล็อคของคลาวด์ และบังคับลงเฟิร์มแวร์ตัวเก่าที่เสถียรกว่าได้ มันจะแก้บั๊กได้แม้จะไม่ได้รับอนุญาตอย่างเป็นทางการ"',
                    zh: 'B：固件黑客："我可以连接我的笔记本电脑，绕过云锁定，强制刷入旧的稳定固件。这会修复漏洞，但这是未经授权的。"'
                },
                consequence: {
                    en: '🧠 Tech Master: It works perfectly. The client is amazed by your IT skills. You are now the "HVAC Tech of the Future."',
                    th: '🧠 เจ้าพ่อเทคโนโลยี: ได้ผลสมบูรณ์แบบ ลูกค้าทึ่งในทักษะ IT ของคุณ ตอนนี้คุณกลายเป็น "ช่างแอร์แห่งอนาคต" ไปแล้ว',
                    zh: '🧠 技术大师：运行完美。客户被你的 IT 技能惊呆了。你现在是"未来的空调技师"了。'
                },
                stats: { competence: 50, ethics: 10, leadership: 30, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🤷 Wait it Out: "It\'s a server issue, sir. I can\'t do anything until the company fixes the cloud. Call me when the app works again."',
                    th: '🤷 รอไปก่อน: "มันเป็นปัญหาทางเซิร์ฟเวอร์ครับ ผมทำอะไรไม่ได้จนกว่าบริษัทจะแก้คลาวด์เสร็จ แอปใช้งานได้เมื่อไหร่ค่อยโทรหาผมนะครับ"',
                    zh: 'C：等待观望："先生，这是服务器问题。在公司修复云端之前，我无能为力。等应用程序再次运行后给我打电话。"'
                },
                consequence: {
                    en: '📉 Angry Client: The client fires you. They find another tech who just bypasses the smart unit with a jumper wire to get the cooling going. You looked lazy.',
                    th: '📉 ลูกค้าโกรธ: ลูกค้าไล่คุณออก เขาไปหาช่างคนอื่นที่แค่ใช้สายจัมเปอร์ข้ามหน่วยอัจฉริยะเพื่อให้แอร์กลับมาเย็นได้ คุณดูขี้เกียจไปเลย',
                    zh: '📉 愤怒的客户：客户解雇了你。他们找到了另一个技术员，那人只是用跳线绕过了智能装置来启动冷却。你看起来很懒。'
                },
                stats: { competence: 10, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Corporate Liaison: "I\'ll call the thermostat manufacturer\'s VIP tech line. I\'ll demand a refund for your electric bill and a free replacement unit."',
                    th: '📞 ผู้ประสานงานองค์กร: "ผมจะโทรหาสายด่วน VIP ของบริษัทผู้ผลิต ผมจะเรียกค่าชดเชยค่าไฟและขอเปลี่ยนเครื่องใหม่ให้ฟรี"',
                    zh: 'D：公司联络人："我会拨打恒温器制造商的 VIP 技术专线。我会要求退还你的电费，并免费更换一台装置。"'
                },
                consequence: {
                    en: '💼 Customer Advocate: You spend 2 hours on hold, but you get them the refund. The client is a fan for life. Your boss is annoyed you "wasted" time on the phone.',
                    th: '💼 ทนายประจำตัวลูกค้า: คุณถือสายรอ 2 ชั่วโมงแต่ก็ได้เงินคืนให้เขา ลูกค้าเป็นแฟนคลับคุณตลอดชีวิต เจ้านายหงุดหงิดที่คุณ "เสียเวลา" คุยโทรศัพท์นานเกินไป',
                    zh: '💼 客户拥护者：你花了 2 小时等待，但你为他们争取到了退款。客户成了你一辈子的粉丝。你老板因你在电话上"浪费"时间而感到恼火。'
                },
                stats: { competence: 20, ethics: 40, leadership: 50, innovation: 10 }
            }
        ]
    },
    {
        id: 'hvac_018',
        text: {
            en: '🏛️ The Historic Theatre: You are upgrading the HVAC in a 100-year-old theatre. You find asbestos insulation around the old pipes. Removing it professionally costs $20k and stops the show premiere.',
            th: '🏛️ โรงละครเก่ายุคประวัติศาสตร์: คุณกำลังอัปเกรดระบบแอร์ในโรงละครอายุกว่า 100 ปี คุณเจอฉนวนใยหินรอบท่อเก่า การกำจัดอย่างมืออาชีพใช้เงิน 2 หมื่นดอลลาร์และต้องเลื่อนการแสดงรอบพรีเมียร์',
            zh: '🏛️ 历史剧院：你正在升级一座有着 100 年历史的剧院的空调。你发现旧管道周围有石棉绝缘层。专业移除需要花费 2 万美元，并且会导致首演停止。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Ethical Wall: "This is a carcinogen. I\'m stopping work. I don\'t care about the premiere. Safety of the audience and my crew is non-negotiable."',
                    th: '🛑 กำแพงศีลธรรม: "นี่คือสารก่อมะเร็ง ผมจะหยุดงาน ผมไม่สนเรื่องรอบพรีเมียร์ ความปลอดภัยของผู้ชมและทีมงานต่อรองไม่ได้"',
                    zh: 'A：道德墙："这是致癌物质。我要停止工作。我不在乎首演。观众和我的工作人员的安全是不容商量的。"'
                },
                consequence: {
                    en: '🛡️ Life Saver: The theatre tries to ignore you, but you report it to the health board. You are banned from the theatre, but respected by the community.',
                    th: '🛡️ ผู้ช่วยชีวิต: โรงละครพยายามเมินคุณ แต่คุณรายงานต่อคณะกรรมการสุขภาพ คุณโดนแบนจากโรงละครแต่ได้รับความเคารพจากสังคม',
                    zh: '🛡️ 生命救星：剧院试图不理睬你，但你将其举报给了卫生局。你被剧院禁止入内，但受到了社区的尊重。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '📦 Encapsulate: "Don\'t remove it. Wrap it in specialized sealant and plastic. It stays undisturbed and safe. We can finish the AC in 2 days."',
                    th: '📦 การคงสภาพ: "ไม่ต้องเอาออก หุ้มด้วยสารเคลือบพิเศษและพลาสติกซะ ให้มันอยู่นิ่งๆ อย่างนั้นแหละปลอดภัยดี เราจะซ่อมแอร์ให้เสร็จใน 2 วัน"',
                    zh: 'B：封装："不要移动它。用专门的密封剂和塑料包装起来。保持原状就很安全。我们可以在 2 天内完成空调安装。"'
                },
                consequence: {
                    en: '🧠 Expert Compromise: This is a legal and safe method. You saved the premiere and the budget. The owner gives you season tickets.',
                    th: '🧠 การประนีประนอมแบบผู้เชี่ยวชาญ: นี่เป็นวิธีที่ถูกกฎหมายและปลอดภัย คุณเซฟทั้งรอบพรีเมียร์และงบประมาณ เจ้าของให้ตั๋วปีคุณเลย',
                    zh: 'B：专家折中方案：这是一种合法且安全的方法。你挽救了首演和预算。老板送了你季票。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🏃 Just Work Around It: "Tell the guys: \'Don\'t touch the white stuff, don\'t breathe heavy.\' Just install the new ducts next to the old ones."',
                    th: '🏃 ทำงานรอบๆ มันไป: "บอกพวกลูกน้องว่า \'อย่าไปแตะไอ้สีขาวๆ นั่นนะ อย่าหายใจแรงด้วย\' ติดท่อใหม่ข้างๆ ท่อเก่านั้นแหละ"',
                    zh: 'C：绕过去工作："告诉伙计们：‘别碰那些白色的东西，别大声喘气。’就在旧管道旁边安装新管道。"'
                },
                consequence: {
                    en: '💀 Exposure: One of your workers accidentally hits a pipe with a hammer. White dust enters the ventilation. Massive lawsuit and health crisis.',
                    th: '💀 การปนเปื้อน: ลูกน้องคนหนึ่งเผลอเอาค้อนไปโดนท่อ ฝุ่นสีขาวกระจายไปทั่วระบบระบายอากาศ โดนฟ้องรุนแรงและเกิดวิกฤตสุขภาพ',
                    zh: 'C：暴露：你的一名工人不小心用锤子砸到了管道。白色粉尘进入了通风系统。引发大规模诉讼和健康危机。'
                },
                stats: { competence: -30, ethics: -40, leadership: -50, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ The Midnight Rip: "Come back with the crew at 2 AM. Rip it out, put it in trash bags, and drop it at the dump. No paperwork, no problem."',
                    th: '🕵️ เก็บกวาดตอนเที่ยงคืน: "กลับมาพร้อมทีมงานตอนตี 2 ขนมันออกมา ใส่ถุงดำแล้วเอาไปทิ้งบ่อขยะ ไม่มีเอกสาร ก็ไม่มีปัญหา"',
                    zh: 'D：深夜清理："凌晨 2 点带着伙计们回来。把它拆了，装进垃圾袋，扔到垃圾场。没文书工作，就没问题。"'
                },
                consequence: {
                    en: '🚔 Criminal: You are caught by a security guard. Prison time for illegal disposal of hazardous waste. Career over.',
                    th: '🚔 อาชญากร: คุณโดนรปภ. จับได้ ติดคุกฐานทิ้งขยะอันตรายผิดกฎหมาย จบสิ้นอาชีพ',
                    zh: 'D：犯罪：你被保安抓住了。因非法处理危险废物而入狱。职业生涯结束。'
                },
                stats: { competence: 10, ethics: -50, leadership: -40, innovation: 10 }
            }
        ]
    },
    {
        id: 'hvac_019',
        text: {
            en: '🚢 The Luxury Yacht: A billionaire\'s yacht has a failing AC in the master suite while docked. The saltwater has corroded the internals. He wants it fixed in 4 hours before they sail to Ibiza.',
            th: '🚢 เรือยอร์ชสุดหรู: เรือยอร์ชของมหาเศรษฐีมีปัญหาแอร์เสียในห้องมาสเตอร์สูทขณะจอดเทียบท่า น้ำเค็มกัดกร่อนไส้ในเครื่อง เขาต้องการให้ซ่อมเสร็จใน 4 ชั่วโมงก่อนจะล่องเรือไปอิบิซา',
            zh: '🚢 豪华游艇：一艘亿万富翁的游艇在靠岸时主卧套房的空调出了故障。海水腐蚀了内部。他希望在他们启航前往伊维萨岛之前的 4 小时内修好它。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛠️ Custom Mod: "I can\'t get the marine parts in time. I\'ll modify a high-end residential unit to fit. I\'ll coat the coils in epoxy to protect against the salt."',
                    th: '🛠️ โมดิฟายพิเศษ: "ผมสั่งอะไหล่เรือไม่ทันหรอก ผมจะดัดแปลงแอร์บ้านเกรดพรีเมียมมาใส่แทน แล้วเอาอีพ็อกซี่เคลือบคอยล์ไว้กันน้ำเค็ม"',
                    zh: 'A：自定义改装："我没法及时拿到船舶零件。我会改装一个高端住宅机组来适应。我会在线圈上涂上环氧树脂以防止盐分腐蚀。"'
                },
                consequence: {
                    en: '💡 Innovation Victory: It works and lasts longer than the original! The billionaire hires you as his global fleet consultant.',
                    th: '💡 ชัยชนะของนวัตกรรม: ได้ผลและทนกว่าของเดิมอีก! มหาเศรษฐีจ้างคุณเป็นที่ปรึกษาระบบแอร์ในกองเรือทั่วโลกของเขาเลย',
                    zh: 'A：创新胜利：行得通，而且比原装的还耐用！亿万富翁雇你担任他全球船队的咨询顾问。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🚁 Helicopter Parts: "Pay $5,000 for a helicopter to fly the correct part from the mainland. We can make the deadline."',
                    th: '🚁 อะไหล่ทางเฮลิคอปเตอร์: "จ่าย 5,000 ดอลลาร์ให้เฮลิคอปเตอร์ขนอะไหล่แท้มาจากฝั่ง เราจะทำเสร็จทันกำหนดการ"',
                    zh: 'B：直升机零件："花 5000 美元叫直升机把正确的零件从大陆运过来。我们可以按时完成。"'
                },
                consequence: {
                    en: '💸 Money No Object: You delivered. The billionaire respects the "Get it done" attitude. You made a $2k profit on the part markup.',
                    th: '💸 เงินไม่ใช่ปัญหา: คุณทำสำเร็จ มหาเศรษฐีชอบทัศนคติ "กัดไม่ปล่อย" ของคุณ คุณได้กำไร 2 พันดอลลาร์จากค่าอะไหล่',
                    zh: 'B：金钱不是问题：你拿下了。亿万富翁尊重这种"搞定它"的态度。你在零件加价上赚了 2000 美元。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🚢 Join the Crew: "I can\'t fix it in 4 hours. But I\'ll sail with you to Ibiza and fix it during the voyage. Just pay my day rate."',
                    th: '🚢 ร่วมขบวนเรือ: "ผมซ่อมไม่ทันใน 4 ชั่วโมงหรอก แต่ผมจะล่องเรือไปอิบิซาด้วยแล้วซ่อมระหว่างทางเอง แค่จ่ายค่าแรงรายวันให้ผมก็พอ"',
                    zh: 'C：加入船员："我没法在 4 小时内修好。但我会和你们一起去伊维萨岛，在航行期间修好它。只需按天付我工资即可。"'
                },
                consequence: {
                    en: '🌴 Working Vacation: You fix it, get a free trip to Ibiza, and meet high-end clients. But you left your local customers hanging for a week.',
                    th: '🌴 พักผ่อนพร้อมทำงาน: คุณซ่อมได้ ได้เที่ยวอิบิซาฟรี และได้เจอคอนเนคชั่นระดับสูง แต่คุณทิ้งลูกค้าในพื้นที่ไว้ตั้งหนึ่งสัปดาห์',
                    zh: 'C：工作休假：你把它修好了，获得了一次免费的伊维萨岛之旅，并结识了高端客户。但你为此冷落了当地客户一周时间。'
                },
                stats: { competence: 30, ethics: -10, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Realistic Refusal: "Salt corrosion is too deep. This needs a full yard refit. I won\'t touch it for a 4-hour quick fix."',
                    th: '🤷 ปฏิเสธตามจริง: "น้ำเค็มกัดกร่อนลึกไปครับ นี่ต้องยกเครื่องใหม่ในอู่เรือ ผมไม่ทำซ่อมด่วนใน 4 ชั่วโมงหรอก"',
                    zh: 'D：现实的拒绝："盐腐蚀太深了。这需要全面的船厂改装。我不会为了 4 小时的快速修复而碰它。"'
                },
                consequence: {
                    en: '🛡️ Professional Integrity: You didn\'t waste his time. He hires another guy who fails, then calls you back after his vacation to do the full job.',
                    th: '🛡️ จรรยาบรรณวิชาชีพ: คุณไม่เสียเวลาเขา เขาไปจ้างคนอื่นแล้วพัง สุดท้ายหลังกลับจากหยุดพักร้อนเขาก็โทรมาจ้างคุณให้ทำชุดใหญ่',
                    zh: 'D：职业操守：你没有浪费他的时间。他雇了另一个没修好的人，度假回来后又找你完成了全部工作。'
                },
                stats: { competence: 40, ethics: 40, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'hvac_020',
        text: {
            en: '⛪ The Cathedral Organ: The historical cathedral\'s organ is going out of tune because the humidity control failed. The choir director is frantic. You discover the humidity sensor is buried inside a 12th-century stone wall.',
            th: '⛪ ออร์แกนของมหาวิหาร: ออร์แกนของมหาวิหารประวัติศาสตร์เริ่มเสียงเพี้ยนเพราะระบบควบคุมความชื้นเสีย ผู้อำนวยการนักร้องประสานเสียงกำลังคลั่ง คุณพบว่าเซนเซอร์ความชื้นถูกฝังอยู่ในกำแพงหินศตวรรษที่ 12',
            zh: '⛪ 大教堂风琴：由于湿度控制失效，历史悠久的大教堂风琴正变得音调不准。合唱团主管心急如焚。你发现湿度传感器被埋在 12 世纪的一面石墙里。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧩 Wireless Upgrade: "Don\'t break the wall. I\'ll install a modern wireless sensor system and bridge it to the old controller. Keep the history, fix the air."',
                    th: '🧩 อัปเกรดไร้สาย: "อย่าพังกองหินครับ ผมจะติดตั้งระบบเซนเซอร์ไร้สายรุ่นใหม่แล้วจัมเปอร์เข้ากับคอนโทรลเลอร์ตัวเก่า รักษาประวัติศาสตร์ แต่แก้ปัญหาอากาศได้"',
                    zh: 'A：无线升级："不要破坏墙壁。我会安装一个现代化的无线传感器系统，并将其桥接到旧控制器上。保留历史，修复空气。"'
                },
                consequence: {
                    en: '🧠 Preservation Hero: The church and the historical society are thrilled. The organ stays in perfect tune. You get a commendation from the Bishop.',
                    th: '🧠 ฮีโร่นักอนุรักษ์: โบสถ์และสมาคมประวัติศาสตร์ดีใจมาก ออร์แกนยังคงเสียงใส คุณได้รับคำชมจากบิชอปเลยนะ',
                    zh: 'A：保护英雄：教会和历史协会都非常激动。风琴保持了完美的音调。你得到了主教的表彰。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '⛏️ Careful Excavation: "I need to drill a small access hole to reach the sensor. I\'ll use a jeweler\'s drill to minimize damage."',
                    th: '⛏️ ขุดเจาะอย่างระมัดระวัง: "ผมต้องเจาะรูเล็กๆ เพื่อเข้าถึงเซนเซอร์ ผมจะใช้สว่านขนาดเล็กพิเศษเพื่อลดความเสียหายให้เหลือน้อยที่สุด"',
                    zh: 'B：小心挖掘："我需要钻一个小通道孔来触及传感器。我会使用珠宝钻来尽量减少损伤。"'
                },
                consequence: {
                    en: '⚠️ Structural Risk: You reached the sensor, but a crack formed in the ancient stone. It cost more to repair the wall than the HVAC.',
                    th: '⚠️ ความเสี่ยงต่อโครงสร้าง: คุณเข้าถึงเซนเซอร์ได้ แต่เกิดรอยร้าวบนหินโบราณ ค่าซ่อมกำแพงแพงกว่าค่าซ่อมแอร์อีก',
                    zh: 'B：结构风险：你触及了传感器，但那块古老的石头裂开了。修复墙壁的费用比修空调还贵。'
                },
                stats: { competence: 30, ethics: 10, leadership: 0, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚪 Surface Mount: "Just mount the new sensor on the outside of the wall. It won\'t look as pretty, but it works and it\'s fast."',
                    th: '門 ฐานบนผิว: "แค่ติดเซนเซอร์ตัวใหม่ไว้ข้างนอกกำแพงนั่นแหละ มันอาจจะไม่สวยเท่าไหร่แต่ได้ผลและไว"',
                    zh: 'C：表面安装："直接把新传感器安装在墙外。它看起来没那么美观，但行之有效且速度快。"'
                },
                consequence: {
                    en: '🏢 Ugly Utility: It works, but it looks terrible in the historic setting. The tourists keep asking what the plastic box is.',
                    th: '🏢 ประโยชน์ใช้สอยที่น่าเกลียด: ก็ใช้ได้นะ แต่มันดูแย่มากในที่ประวัติศาสตร์แบบนี้ นักท่องเที่ยวถามกันใหญ่ว่ากล่องพลาสติกนั่นคืออะไร',
                    zh: 'C：难看的设施：有效，但在历史环境中看起来很糟糕。游客一直在问那个塑料盒子是什么。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Humidity Guesswork: "I\'ll just set the unit to run at a constant 50%. We don\'t need a sensor if the cycle is stable."',
                    th: '📉 คาดเดาความชื้น: "ผมจะตั้งเครื่องให้รันที่ 50% คงที่ไปเลย เราไม่จำเป็นต้องมีเซนเซอร์หรอกถ้าวงจรมันเสถียร"',
                    zh: 'D：湿度推测："我只需将装置设定为以恒定的 50% 运行。如果运行周期稳定，我们就不需要传感器。"'
                },
                consequence: {
                    en: '🌧️ Condensation Disaster: A sudden rainstorm spikes the humidity outside. The organ pipes swell and crack. Irreparable damage.',
                    th: '🌧️ หายนะจากไอน้ำ: พายุฝนทำความชื้นข้างนอกพุ่งสูง ท่อออร์แกนบวมและร้าว เสียหายจนซ่อมไม่ได้',
                    zh: 'D：冷凝灾难：突然的一场暴雨使外部湿度激增。风琴管膨胀并开裂。造成了不可挽回的损失。'
                },
                stats: { competence: -20, ethics: -10, leadership: -20, innovation: -30 }
            }
        ]
    },
    {
        id: 'hvac_021',
        text: {
            en: '🏫 School Boiler Failure: A primary school boiler fails in the middle of winter. 500 kids are freezing. The custom part is 3 days away. You can rig a temporary bypass but it is against code.',
            th: '🏫 หม้อต้มโรงเรียนล้มเหลว: หม้อต้มโรงเรียนประถมเสียกลางฤดูหนาว เด็ก 500 คนหนาวสั่น อะไหล่สั่งทำต้องรอ 3 วัน คุณสามารถทำบายพาสชั่วคราวได้แต่มันผิดกฎ',
            zh: '🏫 学校锅炉故障：一所小学的锅炉在冬天坏了。500个孩子在挨冻。定制零件需要3天。你可以临时搭接旁路，但这违反规范。'
        },
        options: [
            { id: 'A', text: { en: '🔧 Rig the Bypass', th: '🔧 ทำบายพาส', zh: '🔧 搭接旁路' }, consequence: { en: '🔥 Kids Warm, Risk Taken. The school stays open. You monitor it 24/7 until the part arrives. Hero, but risky.', th: '🔥 เด็กอุ่น รับความเสี่ยง โรงเรียนเปิดต่อ คุณเฝ้า 24 ชม. จนอะไหล่มา ฮีโร่แต่เสี่ยง', zh: '🔥 孩子们暖和了，承担风险。学校保持开放。你全天候监控直到零件到达。英雄，但有风险。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 } },
            { id: 'B', text: { en: '🚫 Follow Code', th: '🚫 ทำตามกฎ', zh: '🚫 遵守规范' }, consequence: { en: '🥶 School Closed. Parents are furious. Kids miss 3 days. But you kept your license safe.', th: '🥶 โรงเรียนปิด พ่อแม่โกรธจัด เด็กหยุด 3 วัน แต่ใบอนุญาตคุณปลอดภัย', zh: '🥶 学校关闭。家长愤怒。孩子们缺课3天。但你保住了执照。' }, stats: { competence: 40, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🔥 Space Heaters', th: '🔥 ฮีตเตอร์พกพา', zh: '🔥 空间加热器' }, consequence: { en: '🔌 Power Outage! You bring in 50 space heaters and blow the school\'s main breaker. Now no lights either.', th: '🔌 ไฟดับ! คุณเอาฮีตเตอร์มา 50 ตัวทำเบรกเกอร์ทริป ตอนนี้ไฟก็ไม่มี', zh: '🔌 停电！你带进50个空间加热器，烧断了学校的主断路器。现在连灯都没了。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '🔩 Rush Custom Part', th: '🔩 เร่งอะไหล่สั่งทำ', zh: '🔩 催促定制零件' }, consequence: { en: '💰 Expensive Hero. You pay $2000 express shipping out of pocket. Fixed next morning. Principal loves you.', th: '💰 ฮีโร่ราคาแพง ควักตังค์ 2000 ค่าส่งด่วน ซ่อมเสร็จเช้าวันรุ่งขึ้น ครูใหญ่รักคุณ', zh: '💰 昂贵的英雄。你自掏腰包支付2000美元快递费。第二天早上修好。校长爱你。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 30 } }
        ]
    },
    {
        id: 'hvac_022',
        text: {
            en: '🦠 Mold Discovery: While cleaning ducts in a luxury hotel, you find extensive black mold. The manager offers you $5000 to just "clean what is visible" and not report it.',
            th: '🦠 พบเชื้อรา: ขณะทำความสะอาดท่อลมในโรงแรมหรู เจอราดำเพียบ ผู้จัดการเสนอเงิน 5000 ให้ "ทำความสะอาดเท่าที่เห็น" และไม่ต้องรายงาน',
            zh: '🦠 发现霉菌：在清理一家豪华酒店的管道时，你发现了大面积的黑霉。经理给你5000美元让你只"清理可见部分"而不报告。'
        },
        options: [
            { id: 'A', text: { en: '💰 Take the Bribe', th: '💰 รับสินบน', zh: '💰 接受贿赂' }, consequence: { en: '😷 Guests Sick. A month later, a convention gets sick. Lawsuits fly. You are implicated.', th: '😷 แขกป่วย เดือนต่อมางานประชุมป่วยยกงาน ฟ้องร้องว่อน คุณโดนหางเลข', zh: '😷 客人生病。一个月后，一个会议的人都病了。诉讼满天飞。你受到牵连。' }, stats: { competence: 20, ethics: -50, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '📢 Report to Health Dept', th: '📢 แจ้งสาธารณสุข', zh: '📢 报告卫生部门' }, consequence: { en: '⚖️ Hotel Closed. You lose the client forever. But you prevented a health crisis. Integrity wins.', th: '⚖️ โรงแรมปิด เสียลูกค้าถาวร แต่ป้องกันวิกฤตสุขภาพ ความซื่อสัตย์ชนะ', zh: '⚖️ 酒店关闭。你永远失去了客户。但你阻止了健康危机。正直获胜。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Convince Manager', th: '🤝 โน้มน้าวผู้จัดการ', zh: '🤝 说服经理' }, consequence: { en: '🛠️ Mitigation Project. You convince him remediation is cheaper than lawsuits. You get a huge mold removal contract.', th: '🛠️ โครงการบรรเทา โน้มน้าวว่าแก้ไขถูกกว่าโดนฟ้อง ได้สัญญาจ้างกำจัดราก้อนโต', zh: '🛠️ 缓解项目。你说服他补救比诉讼更便宜。你获得了一份巨大的除霉合同。' }, stats: { competence: 70, ethics: 50, leadership: 60, innovation: 50 } },
            { id: 'D', text: { en: '🏃 Walk Away', th: '🏃 เดินหนี', zh: '🏃 离开' }, consequence: { en: '😶 Silent Complicity. You refuse the job but say nothing. Someone else does the dirty work.', th: '😶 สมรู้ร่วมคิดเงียบๆ ปฏิเสธงานแต่ไม่พูดอะไร คนอื่นมาทำเรื่องสกปรกแทน', zh: '😶 沉默的共谋。你拒绝了工作但什么也没说。别人做了脏活。' }, stats: { competence: 30, ethics: 10, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_023',
        text: {
            en: '🧊 Frozen Coil Mystery: A commercial AC keeps freezing up. You have replaced the filter and checked airflow. It happens again.',
            th: '🧊 ปริศนาคอยล์เย็นเป็นน้ำแข็ง: แอร์พาณิชย์เป็นน้ำแข็งตลอด เปลี่ยนฟิลเตอร์เช็คลมแล้วก็ยังเป็น',
            zh: '🧊 冻结线圈之谜：商用空调不断冻结。你更换了过滤器并检查了气流。它又发生了。'
        },
        options: [
            { id: 'A', text: { en: '🔍 Deep Dive Diagnosis', th: '🔍 วินิจฉัยเชิงลึก', zh: '🔍 深入诊断' }, consequence: { en: '🎯 Found It! A tiny restriction in the metering device. Hard to find, easy to fix. Client impressed.', th: '🎯 เจอแล้ว! การอุดตันเล็กๆ ในอุปกรณ์วัด หาดยากแต่ซ่อมง่าย ลูกค้าประทับใจ', zh: '🎯 找到了！计量装置中的微小限制。难找，易修。客户印象深刻。' }, stats: { competence: 80, ethics: 50, leadership: 40, innovation: 40 } },
            { id: 'B', text: { en: '🔄 Top Off Refrigerant', th: '🔄 เติมน้ำยาแอร์', zh: '🔄 加注制冷剂' }, consequence: { en: '⚠️ Wrong Fix. Overcharging kills the compressor next week. Now it is a $3000 repair.', th: '⚠️ แก้ผิด เติมเกินทำคอมเพรสเซอร์พังอาทิตย์หน้า กลายเป็นค่าซ่อม 3000', zh: '⚠️ 错误的修复。过度充电导致压缩机下周损坏。现在是3000美元的修理费。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🔧 Replace Blower Motor', th: '🔧 เปลี่ยนมอเตอร์พัดลม', zh: '🔧 更换鼓风机电机' }, consequence: { en: '💸 Expensive Guess. It helps airflow but does not fix the root cause. Client unhappy with bill.', th: '💸 การเดาราคาแพง ช่วยเรื่องลมแต่ไม่แก้ต้นเหตุ ลูกค้าไม่พอใจบิล', zh: '💸 昂贵的猜测。它有助于气流，但不能解决根本原因。客户对账单不满意。' }, stats: { competence: 40, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'D', text: { en: '👴 Blame Age', th: '👴 โทษอายุเครื่อง', zh: '👴以此怪设备老旧' }, consequence: { en: '🛒 Sales Pitch. You convince them to buy a new unit. High commision, but the old one was fixable.', th: '🛒 ขายเก่ง โน้มน้าวให้ซื้อใหม่ ค่าคอมสูง แต่ตัวเก่าซ่อมได้นะ', zh: '🛒 推销。你说服他们买一台新设备。佣金高，但旧的是可以修好的。' }, stats: { competence: 50, ethics: 20, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'hvac_024',
        text: {
            en: '🏗️ Crane Lift Danger: Placing a rooftop unit (RTU) in high winds. The crane operator says it is borderline but he can do it if you guide him. Postponing costs $2000.',
            th: '🏗️ อันตรายยกเครน: วางเครื่อง RTU บนดาดฟ้าในลมแรง คนขับเครนบอกหมิ่นเหม่แต่ทำได้ถ้าคุณช่วยดู เลื่อนงานเสีย 2000',
            zh: '🏗️ 起重机吊装危险：在大风中放置屋顶机组（RTU）。起重机操作员说这是临界状态，但如果你引导他，他可以做到。推迟费用为2000美元。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Call It Off', th: '🛑 ยกเลิก', zh: '🛑以此取消' }, consequence: { en: '🛡️ Expensive Safety. Client angry about delay fee. But an hour later, gusts hit 60mph. You saved lives.', th: '🛡️ ความปลอดภัยราคาแพง ลูกค้าโกรธค่าปรับ แต่ชั่วโมงต่อมาลมพัด 60 ไมล์ คุณช่วยชีวิตคน', zh: '🛡️ 昂贵的安全。客户对延误费感到愤怒。但一小时后，阵风达到60英里/小时。你救了命。' }, stats: { competence: 60, ethics: 60, leadership: 70, innovation: 20 } },
            { id: 'B', text: { en: '🤞 Go For It', th: '🤞 ลุยเลย', zh: '🤞 放手去做' }, consequence: { en: '💥 Disaster! The load swings wildly, damaging the roof and the unit. Insurance nightmare.', th: '💥 หายนะ! ของแกว่งแรง ทำลายหลังคาและเครื่อง ฝันร้ายประกันภัย', zh: '💥 灾难！负载剧烈摆动，损坏了屋顶和机组。保险噩梦。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🧵 Use Tag Lines', th: '🧵 ใช้เชือกประคอง', zh: '🧵 使用牵引绳' }, consequence: { en: '💪 Manual Muscle. You and 3 guys hold ropes to stabilize. Sketchy, hard work, but successful.', th: '💪 ใช้แรงงาน คุณกับอีก 3 คนดึงเชือกช่วยประคอง เสี่ยง เหนื่อย แต่สำเร็จ', zh: '💪 人力。你和3个人拉绳子稳定。危险，辛苦，但成功了。' }, stats: { competence: 70, ethics: 40, leadership: 50, innovation: 30 } },
            { id: 'D', text: { en: '🚁 Helicopter Lift', th: '🚁 เฮลิคอปเตอร์ยก', zh: '🚁 直升机吊装' }, consequence: { en: '💸 Overkill. Helicopters handle wind better but cost $10k. Client fires you for budget mismanagement.', th: '💸 เกินความจำเป็น ฮ. สู้ลมดีกว่าแต่ค่าใช้จ่าย 10k ลูกค้าไล่ออกเพราะคุมงบไม่ได้', zh: '💸 过度杀伤。直升机抗风能力更好，但花费1万美元。客户因预算管理不善解雇你。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'hvac_025',
        text: {
            en: '🕸️ Spider Infestation: A crawlspace is full of spiders. You need to access the handler. You are terrified of spiders.',
            th: '🕸️ แมงมุมบุก: พื้นที่คลานใต้ถุนเต็มไปด้วยแมงมุม ต้องเข้าไปซ่อมเครื่อง คุณกลัวแมงมุมมาก',
            zh: '🕸️ 蜘蛛侵扰：爬行空间里满是蜘蛛。你需要进入处理机。你非常害怕蜘蛛。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Hazmat Suit', th: '🛡️ ชุด Hazmat', zh: '🛡️ 防护服' }, consequence: { en: '🥵 Sweaty Success. You wear full gear. Hot and miserable, but no bites. Job done.', th: '🥵 เหงื่อท่วมแต่สำเร็จ ใส่ชุดเต็มยศ ร้อนทรมานแต่ไม่โดนกัด งานเสร็จ', zh: '🥵 汗流浃背的成功。你穿戴全套装备。又热又惨，但没被咬。工作完成。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🏃 Refuse Job', th: '🏃 ปฏิเสธงาน', zh: '🏃 拒绝工作' }, consequence: { en: '🐔 Chicken! You leave. Boss is annoyed. Co-workers make fun of you.', th: '🐔 ไก่อ่อน! คุณกลับ หัวหน้าหงุดหงิด เพื่อนร่วมงานล้อเลียน', zh: '🐔 胆小鬼！你离开了。老板很恼火。同事取笑你。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '👷 Send the Apprentice', th: '👷 ส่งเด็กฝึกงาน', zh: '👷 派学徒去' }, consequence: { en: '😈 Delegation. The kid hates it but does it. He learns resilience? Or just hates you.', th: '😈 การมอบหมายงาน เด็กเกลียดแต่ก็ทำ เขาเรียนรู้ความอึด? หรือแค่เกลียดคุณ', zh: '😈 授权。这孩子讨厌它但做了。他学会了韧性？或者只是恨你。' }, stats: { competence: 50, ethics: 20, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🧹 Vacuum Warfare', th: '🧹 สงครามเครื่องดูดฝุ่น', zh: '🧹 真空战' }, consequence: { en: '⚔️ Cleared Path. You shop-vac your way in. Slow, but effective access established.', th: '⚔️ เคลียร์ทาง ดูดฝุ่นเปิดทางเข้าไป ช้าแต่ได้ผล', zh: '⚔️ 清除路径。你用吸尘器开路。慢，但建立了有效的通道。' }, stats: { competence: 70, ethics: 50, leadership: 50, innovation: 40 } }
        ]
    },
    {
        id: 'hvac_026',
        text: {
            en: '🏥 Hospital Isolation Room: Negative pressure fails in a contagious disease ward. The HEPA filter is clogged. You must enter to change it, but there are no spare Hazmat suits.',
            th: '🏥 ห้องแยกโรคโรงพยาบาล: แรงดันลบในหอผู้ป่วยโรคติดต่อล้มเหลว ตัวกรอง HEPA อุดตัน คุณต้องเข้าไปเปลี่ยน แต่ไม่มีชุด Hazmat สำรอง',
            zh: '🏥 医院隔离室：传染病房的负压失效。HEPA过滤器堵塞。你必须进去更换，但没有备用的防护服。'
        },
        options: [
            { id: 'A', text: { en: '😷 Double Mask & Pray', th: '😷 ใส่แมสก์สองชั้นแล้วสวดมนต์', zh: '😷 双层口罩并祈祷' }, consequence: { en: '🦠 Risky Exposure. You fix it fast. But you worry for weeks about infection. The hospital is grateful but negligent.', th: '🦠 เสี่ยงติดเชื้อ ซ่อมเสร็จไว แต่กังวลไปเป็นเดือน โรงพยาบาลขอบคุณแต่ประมาท', zh: '🦠 危险暴露。你很快修好了。但你担心被感染好几周。医院很感激但疏忽了。' }, stats: { competence: 40, ethics: 50, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Refuse Entry', th: '🛑 ปฏิเสธการเข้า', zh: '🛑 拒绝进入' }, consequence: { en: '🛡️ Protocol Enforced. You demand a suit from another department. It takes 2 hours. Doctors are mad, but you are safe.', th: '🛡️ บังคับใช้ระเบียบ เรียกชุดจากแผนกอื่น รอ 2 ชั่วโมง หมอโกรธแต่คุณปลอดภัย', zh: '🛡️ 执行协议。你要求从其他部门调一套防护服。花了2小时。医生很生气，但你很安全。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🔨 Roof Access Cut', th: '🔨 เจาะทางเข้าจากหลังคา', zh: '🔨以此屋顶切入' }, consequence: { en: '🧠 Lateral Thinking. You bypass the room by cutting into the duct from the roof. Smart, but expensive damage preventing contagion.', th: '🧠 คิดนอกกรอบ เจาะท่อจากหลังคา ฉลาดแต่เสียเงินซ่อมเยอะเพื่อกันการระบาด', zh: '🧠 侧向思维。你从屋顶切入管道以此绕过房间。聪明，但为防止传染造成了昂贵的损坏。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 60 } },
            { id: 'D', text: { en: '🏃 Quit Contract', th: '🏃 ยกเลิกสัญญา', zh: '🏃 退出合同' }, consequence: { en: '🐔 Abandonment. You leave them stranded. The hospital sues for breach of contract during an emergency.', th: '🐔 ทิ้งงาน ปล่อยเขาลอยแพ โรงพยาบาลฟ้องฐานละเมิดสัญญายามฉุกเฉิน', zh: '🐔 抛弃。你让他们陷入困境。医院因紧急情况违约而起诉。' }, stats: { competence: 10, ethics: -40, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_027',
        text: {
            en: '🎨 Museum Humidity Crisis: A humidity spike threatens a Renaissance painting exhibit. The humidifier is broken. The curator is crying.',
            th: '🎨 วิกฤตความชื้นพิพิธภัณฑ์: ความชื้นพุ่งสูงคุกคามนิทรรศการภาพวาดเรเนสซองส์ เครื่องทำความชื้นเสีย ภัณฑารักษ์กำลังร้องไห้',
            zh: '🎨 博物馆湿度危机：湿度激增威胁到文艺复兴时期的绘画展览。加湿器坏了。馆长在哭。'
        },
        options: [
            { id: 'A', text: { en: '🔧 Bypass Controls', th: '🔧 ข้ามระบบควบคุม', zh: '🔧 绕过控制' }, consequence: { en: '📉 Too Dry! You force the AC to run 100%. Humidity drops too low. Paint cracks. You destroyed art.', th: '📉 แห้งไป! บังคับแอร์เดิน 100% ความชื้นต่ำเกิน สีแตก คุณทำลายศิลปะ', zh: '📉 太干了！你强制空调100%运行。湿度降得太低。油漆开裂。你毁了艺术品。' }, stats: { competence: 20, ethics: 10, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '💦 Wet Towels Trick', th: '💦 ทริคผ้าเปียก', zh: '💦 湿毛巾技巧' }, consequence: { en: '🧠 Low Tech Save. You hang wet towels in the airstream as a temporary humidifier. It stabilizes the room until parts arrive.', th: '🧠 วิธีบ้านๆ แต่รอด แขวนผ้าเปียกในทางลม ช่วยประคองความชื้นจนอะไหล่มา', zh: '🧠 低科技救援。你在气流中挂湿毛巾作为临时加湿器。它稳定了房间直到零件到达。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 70 } },
            { id: 'C', text: { en: '🚚 Rent Portable Unit', th: '🚚 เช่าเครื่องพกพา', zh: '🚚 租用便携式设备' }, consequence: { en: '🛡️ Safe Bet. You manage the logistics to get industrial units in fast. Professional and effective.', th: '🛡️ ทางรอดปลอดภัย จัดการเช่าเครื่องอุตสาหกรรมมาด่วน มืออาชีพและได้ผล', zh: '🛡️ 安全的做法。你设法迅速搞到工业设备。专业且有效。' }, stats: { competence: 60, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '🤷 Do Nothing', th: '🤷 ไม่ทำอะไร', zh: '🤷 什么也不做' }, consequence: { en: '📉 Art Damaged. You say "Parts are 2 weeks out". The collection is ruined. You are banned from the art world.', th: '📉 ศิลปะเสียหาย บอกว่า "อะไหล่อีก 2 อาทิตย์" คอลเลกชันพังพินาศ คุณโดนแบนจากวงการศิลปะ', zh: '📉 艺术品受损。你说"零件要2周"。藏品毁了。你被艺术界封杀。' }, stats: { competence: 10, ethics: -20, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_028',
        text: {
            en: '🐕 The Guard Dog: A condenser is in a backyard guarded by a growling Pitbull. The homeowner is not home. It is 100°F.',
            th: '🐕 สุนัขเฝ้ายาม: คอนเดนเซอร์อยู่หลังบ้านที่มีพิตบูลขู่คำราม เจ้าของไม่อยู่บ้าน อากาศร้อน 100 องศา',
            zh: '🐕 看门狗：冷凝器在后院，有一只咆哮的比特斗牛犬看守。房主不在家。气温100华氏度。'
        },
        options: [
            { id: 'A', text: { en: '🥩 Steak Distraction', th: '🥩 เอาสเต็กหลอกล่อ', zh: '🥩 牛排分心' }, consequence: { en: '🍖 Dog Friend. You buy a steak and toss it. The dog eats, you fix. Expensive lunch but safe.', th: '🍖 ได้เพื่อนหมา ซื้อสเต็กโยนให้ หมากิน คุณซ่อม มื้อเที่ยงราคาแพงแต่ปลอดภัย', zh: '🍖 狗狗朋友。你买了一块牛排扔过去。狗吃，你修。昂贵的午餐但安全。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 40 } },
            { id: 'B', text: { en: '🤺 Fight Mode', th: '🤺 โหมดต่อสู้', zh: '🤺 战斗模式' }, consequence: { en: '🚑 Bitten. You try to fend it off with a wrench. You get bitten. Hospital trip. No repair.', th: '🚑 โดนกัด เอาประแจไล่แต่โดนกัด ไปโรงพยาบาล ไม่ได้ซ่อม', zh: '🚑 被咬。你试图用扳手击退它。你被咬了。去医院。没修好。' }, stats: { competence: 20, ethics: 10, leadership: 0, innovation: 0 } },
            { id: 'C', text: { en: '📞 Reschedule', th: '📞 นัดใหม่', zh: '📞 重新安排' }, consequence: { en: '📅 Safe Delay. You refuse to enter without the owner. They are annoyed but understand. Safety first.', th: '📅 เลื่อนปลอดภัย ปฏิเสธเข้าถ้าเจ้าของไม่อยู่ เขาหงุดหงิดแต่เข้าใจ ปลอดภัยไว้ก่อน', zh: '📅 安全延期。没有主人你拒绝进入。他们很恼火但理解。安全第一。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'D', text: { en: '🪜 Fence Hop', th: '🪜 กระโดดข้ามรั้ว', zh: '🪜 跳过栅栏' }, consequence: { en: '🏃 Chase Scene. You hop the fence, fix it fast, and barely escape. Adrenaline high, professionalism low.', th: '🏃 ฉากไล่ล่า โดดข้ามรั้ว ซ่อมด่วน หนีตายฉิวเฉียด อะดรีนาลีนพุ่ง ความเป็นมืออาชีพต่ำ', zh: '🏃 追逐场面。你跳过栅栏，快速修好，勉强逃脱。肾上腺素飙升，专业度低。' }, stats: { competence: 40, ethics: 20, leadership: 10, innovation: 20 } }
        ]
    },
    {
        id: 'hvac_029',
        text: {
            en: '🕵️ Competitor Sabotage: You service a unit and find wires intentionally cut. A sticker from a rival company "Budget HVAC" is on the unit.',
            th: '🕵️ การก่อวินาศกรรมคู่แข่ง: คุณซ่อมเครื่องและเจอสายไฟถูกตัดโดยเจตนา มีสติกเกอร์ของบริษัทคู่แข่ง "Budget HVAC" แปะอยู่',
            zh: '🕵️ 竞争对手破坏：你维修一台设备，发现电线被故意切断。设备上贴着竞争对手"预算暖通"的贴纸。'
        },
        options: [
            { id: 'A', text: { en: '📸 Document & Report', th: '📸 เก็บหลักฐานและรายงาน', zh: '📸 记录并报告' }, consequence: { en: '⚖️ Justice. You take photos and help the owner file a police report. The rival loses their license.', th: '⚖️ ยุติธรรม ถ่ายรูปช่วยเจ้าของแจ้งความ คู่แข่งโดนยึดใบอนุญาต', zh: '⚖️ 正义。你拍照并帮助业主报案。竞争对手失去了执照。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🤫 Just Fix It', th: '🤫 ก็แค่ซ่อม', zh: '🤫 只是修好它' }, consequence: { en: '😶 Ignoring Crime. You fix it and say nothing to avoid drama. The rival continues sabotaging others.', th: '😶 เมินเฉยอาชญากรรม ซ่อมแล้วเงียบไม่อยากมีเรื่อง คู่แข่งก็ไปทำคนอื่นต่อ', zh: '😶 无视犯罪。你修好了它，什么也没说以避免麻烦。对手继续破坏其他人。' }, stats: { competence: 40, ethics: 10, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🗣️ Badmouth Them', th: '🗣️ ด่ากราด', zh: '🗣️ 说他们坏话' }, consequence: { en: '📢 Gossip. You rant to the customer about "Budget HVAC". It looks unprofessional, even if true.', th: '📢 นินทา บ่นเรื่อง "Budget HVAC" ให้ลูกค้าฟัง ดูไม่มืออาชีพถึงจะเป็นเรื่องจริง', zh: '📢以此八卦。你向客户抱怨"预算暖通"。这看起来不专业，即使是真的。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🔪 Retaliate', th: '🔪 เอาคืน', zh: '🔪 报复' }, consequence: { en: '⚔️ War. You go to a "Budget HVAC" site and cut their wires. A turf war starts. Both companies suffer.', th: '⚔️ สงคราม คุณไปไซต์งานคู่แข่งแล้วตัดสายไฟบ้าง เปิดศึก ยับเยินทั้งคู่', zh: '⚔️ 战争。你去"预算暖通"的工地切断他们的电线。地盘争夺战开始。两家公司都受损。' }, stats: { competence: 10, ethics: -50, leadership: -40, innovation: -20 } }
        ]
    },
    {
        id: 'hvac_030',
        text: {
            en: '🧪 Clean Room Contamination: You accidentally drop a dirty wrench into a sterile pharmaceutical clean room vent duct.',
            th: '🧪 การปนเปื้อนห้องคลีนรูม: คุณเผลอทำประแจสกปรกตกลงในท่อลมห้องคลีนรูมยาที่ปลอดเชื้อ',
            zh: '🧪 洁净室污染：你不小心把一把脏扳手掉进了无菌制药洁净室的通风管道里。'
        },
        options: [
            { id: 'A', text: { en: '🎣 Fish It Out', th: '🎣 ตกมันขึ้นมา', zh: '🎣 把它钓出来' }, consequence: { en: '🦠 Invisible Dust. You get the wrench, but dust from it contaminates the batch worth $50k. You are sued.', th: '🦠 ฝุ่นที่มองไม่เห็น เอาประแจขึ้นมาได้ แต่ฝุ่นทำยาเสียมูลค่า 50k โดนฟ้อง', zh: '🦠 看不见的灰尘。你拿到了扳手，但灰尘污染了价值5万美元的批次。你被起诉了。' }, stats: { competence: 20, ethics: -10, leadership: -20, innovation: 10 } },
            { id: 'B', text: { en: '🚨 Confess Immediately', th: '🚨 สารภาพทันที', zh: '🚨 立即坦白' }, consequence: { en: '🛑 Production Stop. They stop the line and reclean. It costs money, but you saved the integrity of the medicine. Respect.', th: '🛑 หยุดการผลิต หยุดไลน์แล้วล้างใหม่ เสียเงินแต่รักษาคุณภาพยา ได้รับความเคารพ', zh: '🛑 停止生产。他们停线重新清洗。这要花钱，但你挽救了药物的完整性。尊重。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🤐 Leave It', th: '🤐 ทิ้งไว้งั้น', zh: '🤐 把它留下' }, consequence: { en: '💣 Time Bomb. The wrench rattles later. They find it and trace it to you. Major negligence lawsuit.', th: '💣 ระเบิดเวลา ประแจสั่นทีหลัง เขาเจอแล้วสืบถึงตัวคุณ ฟ้องร้องประมาทเลินเล่อครั้งใหญ่', zh: '💣 定时炸弹。扳手后来发出咔嗒声。他们找到了它并追踪到你。重大过失诉讼。' }, stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'D', text: { en: '🧲 Magnet Robot', th: '🧲 หุ่นยนต์แม่เหล็ก', zh: '🧲 磁铁机器人' }, consequence: { en: '🤖 Tech Save. You build a sanitizable RC magnet tool to retrieve it without entering. Genius solution.', th: '🤖 เทคโนโลยีกู้ชีพ สร้างหุ่นแม่เหล็กฆ่าเชื้อไปดูดกลับมาโดยไม่ต้องเข้าห้อง วิธีอัจฉริยะ', zh: '🤖 技术救援。你制造了一个可消毒的遥控磁铁工具，在不进入的情况下取回它。天才的解决方案。' }, stats: { competence: 60, ethics: 40, leadership: 30, innovation: 60 } }
        ]
    },
    {
        id: 'hvac_031',
        text: {
            en: '🧊 The Frozen Zoo: A cryogenic freezer holding endangered rhino embryos warns of temp rise. The grid is down. The backup generator failed.',
            th: '🧊 สวนสัตว์แช่แข็ง: ตู้แช่แข็งไครโอเจนิคที่เก็บตัวอ่อนแรดใกล้สูญพันธุ์เตือนอุณหภูมิสูงขึ้น ไฟดับ เครื่องปั่นไฟสำรองเจ๊ง',
            zh: '🧊 冷冻动物园：保存濒危犀牛胚胎的低温冷冻柜发出温度升高警告。电网瘫痪。备用发电机故障。'
        },
        options: [
            { id: 'A', text: { en: '🚗 Truck Battery Rig', th: '🚗 ต่อแบตรถกระบะ', zh: '🚗 卡车电池装置' }, consequence: { en: '⚡ Power Restored. You daisy-chain truck batteries to run the cryo-cooler. It works just long enough. Species saved.', th: '⚡ ไฟกลับมา คุณพ่วงแบตรถบรรทุกเพื่อเดินเครื่องแช่แข็ง ได้ผลนานพอที่จะช่วยสายพันธุ์', zh: '⚡ 电力恢复。你串联卡车电池来运行低温冷却器。它的运行时间刚好够用。物种获救。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 60 } },
            { id: 'B', text: { en: '🧊 Buy All Ice', th: '🧊 เหมาน้ำแข็งหมดตลาด', zh: '🧊 买光所有的冰' }, consequence: { en: '❄️ Temporary Cold. You pack it with dry ice. It buys 4 hours. Power returns in 3. Close call.', th: '❄️ ความเย็นชั่วคราว ใส่น้ำแข็งแห้งซื้อเวลาได้ 4 ชม. ไฟมาตอน ชม. ที่ 3 เกือบไป', zh: '❄️ 暂时寒冷。你用干冰填充它。争取了4个小时。3小时后电力恢复。好险。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '💨 Liquid Nitrogen Pour', th: '💨 เทไนโตรเจนเหลว', zh: '💨 液氮倾倒' }, consequence: { en: '🥶 Thermal Shock. Direct pouring cracks the vials. Embryos destroyed. You killed a future generation.', th: '🥶 ช็อคความเย็น เทใส่โดยตรงทำหลอดแก้วแตก ตัวอ่อนตายเรียบ คุณฆ่าอนาคตของสายพันธุ์', zh: '🥶 热冲击。直接倾倒会导致小瓶破裂。胚胎被毁。你扼杀了一代未来。' }, stats: { competence: 20, ethics: 0, leadership: -20, innovation: -10 } },
            { id: 'D', text: { en: '🤷 Give Up', th: '🤷 ยอมแพ้', zh: '🤷 放弃' }, consequence: { en: '💀 Extincion. You watch the gauge rise. The embryos spoil. The world blames you.', th: '💀 สูญพันธุ์ คุณดูเกจขึ้น ตัวอ่อนเน่า โลกโทษคุณ', zh: '💀 灭绝。你看着仪表上升。胚胎变质。世界怪罪你。' }, stats: { competence: 10, ethics: -40, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_032',
        text: {
            en: '🐝 The Bee Hive: A 5-ton unit is vibrating strangely. You open the panel and find a massive honeybee colony. 20,000 bees. They are swarming.',
            th: '🐝 รังผึ้ง: เครื่องขนาด 5 ตันสั่นแปลกๆ เปิดฝาดูเจอรังผึ้งยักษ์ ผึ้ง 20,000 ตัวกำลังฮือ',
            zh: '🐝 蜂巢：一台5吨重的机器震动异常。你打开面板，发现一个巨大的蜜蜂群。20,000只蜜蜂。它们正在群集。'
        },
        options: [
            { id: 'A', text: { en: '☠️ Spray Poison', th: '☠️ ฉีดยาฆ่าแมลง', zh: '☠️ 喷洒毒药' }, consequence: { en: '⚠️ Environmental Crime. You kill them all. The client is happy, but you killed pollinators. Plus, dead bees rot and smell.', th: '⚠️ อาชญากรรมสิ่งแวดล้อม ฆ่าเรียบ ลูกค้าแฮปปี้ แต่คุณฆ่าแมลงผสมเกสร แถมศพผึ้งเน่าเหม็น', zh: '⚠️ 环境犯罪。你把它们都杀了。客户很高兴，但你杀死了传粉者。此外，死蜜蜂会腐烂发臭。' }, stats: { competence: 40, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🍯 Call Beekeeper', th: '🍯 เรียกคนเลี้ยงผึ้ง', zh: '🍯 叫养蜂人' }, consequence: { en: '🛡️ Safe Relocation. A specialist removes them alive. It takes a day delay, but it is the right thing to do.', th: '🛡️ ย้ายปลอดภัย ผู้เชี่ยวชาญมาย้ายแบบมีชีวิต ช้าไปวันนึง แต่เป็นสิ่งที่ถูกต้อง', zh: '🛡️以此安全搬迁。专家活着把它们移走。虽然耽误了一天，但这是正确的做法。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '💨 Smoke Them Out', th: '💨 รมควันไล่', zh: '💨 熏走它们' }, consequence: { en: '🔥 Fire Hazard. You use a smoker. It triggers the building fire alarm. Fire trucks arrive.', th: '🔥 เสี่ยงไฟไหม้ คุณใช้เครื่องรมควัน สัญญาณไฟไหม้ตึกดัง รถดับเพลิงมา', zh: '🔥 火灾隐患。你使用熏烟器。它触发了大楼火灾警报。消防车来了。' }, stats: { competence: 20, ethics: 10, leadership: -10, innovation: 10 } },
            { id: 'D', text: { en: '🏃 Run Away', th: '🏃 วิ่งหนี', zh: '🏃 逃跑' }, consequence: { en: '🐔 Bee Phobia. You sprint to your truck. You abandon the tools on the roof. Very unprofessional.', th: '🐔 กลัวผึ้ง วิ่งขึ้นรถ ทิ้งเครื่องมือไว้บนดาดฟ้า ไม่มืออาชีพสุดๆ', zh: '🐔 蜜蜂恐惧症。你冲向你的卡车。你把工具留在了屋顶上。非常不专业。' }, stats: { competence: 10, ethics: 0, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_033',
        text: {
            en: '🌊 The Undersea Cable Station: A cooling station for an internet cable coming from the ocean is overheating. It is in a remote coastal bunker. Salt spray is everywhere.',
            th: '🌊 สถานีสายเคเบิลใต้น้ำ: สถานีทำความเย็นสายอินเทอร์เน็ตจากทะเลร้อนจัด อยู่ในบังเกอร์ชายฝั่งห่างไกล ละอองน้ำเค็มเต็มไปหมด',
            zh: '🌊 海底电缆站：一条来自海洋的互联网电缆的冷却站过热。它在一个偏远的沿海掩体里。到处都是盐雾。'
        },
        options: [
            { id: 'A', text: { en: '🧼 Acid Wash Coils', th: '🧼 ล้างคอยล์ด้วยกรด', zh: '🧼 酸洗线圈' }, consequence: { en: '✨ Clean but Corroded. You remove the salt buildup, but the acid weakens the fins. It fails a month later.', th: '✨ สะอาดแต่กัดกร่อน ล้างเกลือออกแต่กรดกัดครีบบาง พังในอีกเดือน', zh: '✨ 干净但腐蚀。你除去了盐分堆积，但酸削弱了散热片。一个月后失效了。' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🛡️ Apply Marine Coating', th: '🛡️ เคลือบน้ำยาเกรดเรือ', zh: '🛡️ 涂上船用涂层' }, consequence: { en: '🧠 Pro Solution. You clean and then apply a heavy-duty marine epoxy. It withstands the salt. Long-term fix.', th: '🧠 วิธีโปร ล้างแล้วเคลือบอีพ็อกซี่เกรดเรือ ทนเกลือได้เยี่ยม แก้ปัญหาระยะยาว', zh: '🧠以此专业解决方案。你清洁后涂上重型船用环氧树脂。它经受住了盐分。长期修复。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '🚿 Freshwater Rinse', th: '🚿 ล้างน้ำจืด', zh: '🚿以此淡水冲洗' }, consequence: { en: '⏳ Temporary. You rinse it. It helps for a week. The salt returns instantly.', th: '⏳ ชั่วคราว ล้างน้ำช่วยได้อาทิตย์เดียว เกลือกลับมาทันที', zh: '⏳ 临时。你冲洗它。这能管用一周。盐分立刻回来了。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🔌 Bypass Overheat Sensor', th: '🔌 ข้ามเซนเซอร์ความร้อน', zh: '🔌 绕过过热传感器' }, consequence: { en: '💥 Internet Blackout. The system melts down. A whole country loses internet for 6 hours. International incident.', th: '💥 เน็ตล่ม ระบบละลาย ประเทศเน็ตตัด 6 ชั่วโมง เรื่องระดับชาติ', zh: '💥 断网。系统崩溃。整个国家断网6小时。国际事件。' }, stats: { competence: 10, ethics: -40, leadership: -50, innovation: -10 } }
        ]
    },
    {
        id: 'hvac_034',
        text: {
            en: '🏢 Skyscraper Active Damper: A 100-story building swaying in wind needs its massive Tuned Mass Damper cooling system serviced. It involves climbing inside the pendulum mechanism.',
            th: '🏢 แดมเปอร์ตึกระฟ้า: ตึก 100 ชั้นสั่นไหวในลม ต้องซ่อมระบบหล่อเย็น Tuned Mass Damper ยักษ์ ต้องปีนเข้าไปในกลไกลูกตุ้ม',
            zh: '🏢 摩天大楼主动阻尼器：一座在风中摇晃的100层建筑需要维修其巨大的调谐质量阻尼器冷却系统。这涉及爬进钟摆机构内部。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Lock Out Tag Out', th: '🛑 ล็อคเอาท์ แท็กเอาท์', zh: '🛑 挂牌上锁' }, consequence: { en: '🛡️ Safety First. You shut down the damper. The building sways more, annoying tenants, but you don\'t get crushed.', th: '🛡️ ปลอดภัยไว้ก่อน ปิดแดมเปอร์ ตึกสั่นคนบ่น แต่คุณไม่โดนทับตาย', zh: '🛡️ 安全第一。你关闭阻尼器。大楼摇晃得更厉害，租户很恼火，但你没有被压扁。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '🤞 Hot Service', th: '🤞 ซ่อมสด', zh: '🤞以此热维修' }, consequence: { en: '💀 Crushed. The wind shifts, the pendulum moves. You lose an arm. Why did you risk it?', th: '💀 เละ ลมเปลี่ยนทิศ ลูกตุ้มขยับ แขนขาด เสี่ยงทำไมเนี่ย?', zh: '💀以此被压碎。风向改变，钟摆移动。你失去了一条胳膊。你为什么要冒险？' }, stats: { competence: 20, ethics: 0, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🤖 Drone Inspection', th: '🤖 โดรนตรวจสอบ', zh: '🤖 无人机检查' }, consequence: { en: '🎥 High Tech. You fly a drone inside to check leaks. Safe and effective diagnosis.', th: '🎥 ไฮเทค บินโดรนเข้าไปเช็ครอยรั่ว ปลอดภัยและวินิจฉัยแม่นยำ', zh: '🎥 高科技。你飞无人机进去检查泄漏。安全有效的诊断。' }, stats: { competence: 60, ethics: 40, leadership: 30, innovation: 70 } },
            { id: 'D', text: { en: '🏃 Too High', th: '🏃 สูงไป', zh: '🏃 太高了' }, consequence: { en: '🐔 Acrophobia. You refuse the ticket. "I do HVAC, not mountain climbing."', th: '🐔 โรคกลัวความสูง ปฏิเสธงาน "ผมซ่อมแอร์ ไม่ใช่ปีนเขา"', zh: '🐔 恐高症。你拒绝了工单。"我是修空调的，不是登山的。"' }, stats: { competence: 30, ethics: 20, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_035',
        text: {
            en: '💥 Old Boiler Explosion Risk: An Apartment boiler hasn\'t been serviced in 20 years. The relief valve is rusted shut. Pressure is dangerously high.',
            th: '💥 ความเสี่ยงระเบิดหม้อต้มเก่า: หม้อต้มหอพักไม่ได้ซ่อมมา 20 ปี วาล์วนิรภัยสนิมกินค้าง แรงดันสูงอันตราย',
            zh: '💥 旧锅炉爆炸风险：公寓锅炉20年没修了。安全阀锈死了。压力高得危险。'
        },
        options: [
            { id: 'A', text: { en: '🚨 Evacuate Building', th: '🚨 อพยพตึก', zh: '🚨 疏散大楼' }, consequence: { en: '📢 Panic but Safe. You trigger the fire alarm. People run. You vent the pressure safely from outside. Hero.', th: '📢 ตื่นตระหนกแต่รอด กดสัญญาณไฟไหม้ คนวิ่งหนี คุณระบายแรงดันจากข้างนอก ฮีโร่', zh: '📢 恐慌但安全。你触发火灾警报。人们逃跑。你在外面安全地释放压力。英雄。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🔨 Hit Valve with Hammer', th: '🔨 เอาค้อนทุบวาล์ว', zh: '🔨 用锤子敲阀门' }, consequence: { en: '💣 Boom. The valve breaks off. Steam explosion kills you instantly. Bad idea.', th: '💣 บึ้ม วาล์วขาด ระเบิดไอน้ำฆ่าคุณตายคาที่ ไอเดียห่วย', zh: '💣 轰。阀门断裂。蒸汽爆炸瞬间炸死你。馊主意。' }, stats: { competence: 0, ethics: 0, leadership: 0, innovation: 0 } },
            { id: 'C', text: { en: '🏃 Run Away', th: '🏃 วิ่งหนี', zh: '🏃 逃跑' }, consequence: { en: '💥 It Blows Up. You saved yourself, but the building has a hole in it. 10 injured.', th: '💥 ระเบิด คุณรอดแต่ตึกเป็นรู เจ็บ 10', zh: '💥 炸了。你救了自己，但那栋楼炸了个洞。10人受伤。' }, stats: { competence: -20, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'D', text: { en: '🔧 Slow Depressurize', th: '🔧 ค่อยๆ ลดแรงดัน', zh: '🔧 缓慢减压' }, consequence: { en: '🛡️ Careful Hands. You find a secondary drain and slowly bleed pressure over 4 hours. Nerve-wracking but works.', th: '🛡️ มือเบา หารูระบายรองแล้วค่อยๆ ปล่อยแรงดัน 4 ชม. เครียดแต่ได้ผล', zh: '🛡️ 小心翼翼。你找到一个次级排水口，在4小时内缓慢释放压力。伤脑筋但管用。' }, stats: { competence: 70, ethics: 40, leadership: 30, innovation: 30 } }
        ]
    },
    {
        id: 'hvac_036',
        text: {
            en: '⚗️ The Meth Lab: You enter a rental property basement to fix a furnace. You see glass beakers, tubing, and smell strong chemicals. It is a meth lab.',
            th: '⚗️ ห้องแล็บยาไอซ์: คุณเข้าไปในห้องใต้ดินบ้านเช่าเพื่อซ่อมเตา เจอขวดแก้ว สายยาง และกลิ่นสารเคมีแรง มันคือห้องผลิตยาไอซ์',
            zh: '⚗️ 冰毒实验室：你进入出租屋地下室修理炉子。看到玻璃烧杯、管子，闻到强烈的化学气味。这是一个冰毒实验室。'
        },
        options: [
            { id: 'A', text: { en: '📞 Call 911', th: '📞 โทร 911', zh: '📞 拨打911' }, consequence: { en: '🚔 Raid. Police storm the house. You give a statement. You are safe, but the landlord is furious.', th: '🚔 บุกค้น ตำรวจบุกบ้าน คุณให้ปากคำ คุณปลอดภัยแต่เจ้าของบ้านโกรธจัด', zh: '🚔 突袭。警察冲进房子。你发表声明。你很安全，但房东很生气。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🏃 Run and Drive', th: '🏃 วิ่งและขับหนี', zh: '🏃 跑开并开车离开' }, consequence: { en: '🐔 Flight. You flee the scene. You don\'t report it out of fear. A week later the house explodes.', th: '🐔 หนี คุณหนีจากที่เกิดเหตุ ไม่กล้าแจ้งความ อาทิตย์ต่อมาบ้านระเบิด', zh: '🐔 逃跑。你逃离现场。出于恐惧你没有报告。一周后房子爆炸了。' }, stats: { competence: 20, ethics: -20, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '🔧 Fix and Ignore', th: '🔧 ซ่อมและเมิน', zh: '🔧 修理并无视' }, consequence: { en: '💰 Blind Eye. "I didn\'t see anything." You get paid in cash. Very risky. You are technically an accessory.', th: '💰 ปิดตาข้างเดียว "ผมไม่เห็นอะไรทั้งนั้น" ได้เงินสด เสี่ยงมาก คุณมีส่วนรู้เห็น', zh: '💰 视而不见。"我什么也没看见。"你拿到现金。非常有风险。你在技术上是从犯。' }, stats: { competence: 40, ethics: -50, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: ' blackmail', th: ' แบล็คเมล์', zh: ' 勒索' }, consequence: { en: '🔫 Bad Move. You try to extort them. They pull a gun. You run for your life without tools.', th: '🔫 เดินเกมผิด คุณพยายามรีดไถ โดนเอาปืนจ่อ วิ่งหนีตายทิ้งเครื่องมือ', zh: '🔫 糟糕的一步。你试图勒索他们。他们拔枪。你丢下工具逃命。' }, stats: { competence: 0, ethics: -60, leadership: -50, innovation: -20 } }
        ]
    },
    {
        id: 'hvac_037',
        text: {
            en: '🎤 Celebrity Panic Room: A pop star is stuck in her panic room. The dedicated air supply fan has failed. She has 1 hour of air left.',
            th: '🎤 ห้องแพนิคดารา: ป๊อปสตาร์ติดอยู่ในห้องแพนิค พัดลมระบายอากาศเสีย เธอเหลืออากาศหายใจ 1 ชั่วโมง',
            zh: '🎤 名人避难室：一位流行歌星被困在她的避难室里。专用供气风扇故障。她只剩下1小时的空气了。'
        },
        options: [
            { id: 'A', text: { en: '🔨 Drill the Door', th: '🔨 เจาะประตู', zh: '🔨 钻门' }, consequence: { en: '🚫 Impenetrable. It is hardened steel. You break your drill. You wasted 20 minutes.', th: '🚫 เจาะไม่เข้า เหล็กกล้า สว่านพัง เสียเวลาไป 20 นาที', zh: '🚫 坚不可摧。这是硬化钢。你弄坏了钻头。你浪费了20分钟。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '💨 Oxygen Tank Rig', th: '💨 ต่อถังออกซิเจน', zh: '💨 氧气罐装置' }, consequence: { en: '🧠 Saved. You hook your welding oxygen tank to the intake vent. It buys time for the locksmith.', th: '🧠 รอด คุณเอาถังออกซิเจนเชื่อมต่อเข้าท่อลม ซื้อเวลาให้ช่างกุญแจ', zh: '🧠 获救。你把焊接氧气罐接到进气口。为锁匠争取了时间。' }, stats: { competence: 70, ethics: 50, leadership: 50, innovation: 60 } },
            { id: 'C', text: { en: '🏎️ Speed Fix Fan', th: '🏎️ ซ่อมพัดลมด่วน', zh: '🏎️ 快速修理风扇' }, consequence: { en: '⚡ Success. You bypass the burnt controller on the fan. Air starts flowing. She faints but survives.', th: '⚡ สำเร็จ คุณจัมพ์ตรงข้ามตัวคุมที่ไหม้ ลมมา เธอเป็นลมแต่รอด', zh: '⚡ 成功。你绕过风扇上烧坏的控制器。空气开始流动。她晕倒了但活了下来。' }, stats: { competence: 60, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '📸 Take a Selfie', th: '📸 เซลฟี่', zh: '📸 自拍' }, consequence: { en: '🤳 Cancelled. You post "Saving [Star]!". Security tackles you. She is saved by fire dept. You are sued.', th: '🤳 โดนแบน คุณโพสต์ "กำลังช่วย [ดารา]!" การ์ดรวบตัว ดับเพลิงมาช่วยเธอ คุณโดนฟ้อง', zh: '🤳 取消。你发帖"正在拯救[明星]！"。保安把你按倒。她被消防队救出。你被起诉。' }, stats: { competence: -10, ethics: -50, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_038',
        text: {
            en: '💾 Data Center Halon Risk: Working in a server room, a sensor malfunctions and threatens to dump Halon gas (which sucks out oxygen). The countdown starts: 30 seconds.',
            th: '💾 ความเสี่ยงก๊าซฮาลอน: ทำงานในห้องเซิร์ฟเวอร์ เซนเซอร์รวนขู่จะปล่อยก๊าซฮาลอน (ที่ดูดออกซิเจน) นับถอยหลัง: 30 วินาที',
            zh: '💾 数据中心哈龙风险：在服务器机房工作，传感器故障，威胁释放哈龙气体（会吸走氧气）。倒计时开始：30秒。'
        },
        options: [
            { id: 'A', text: { en: '🏃 Run Out', th: '🏃 วิ่งออก', zh: '🏃 跑出去' }, consequence: { en: '💨 Escape. You get out. The gas dumps. Millions in hardware saved, but operation disrupted. You live.', th: '💨 หนี คุณออกมาได้ ก๊าซปล่อย ฮาร์ดแวร์รอดแต่งานสะดุด คุณรอด', zh: '💨 逃跑。你出去了。气体释放。数百万硬件获救，但运营中断。你活下来了。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '✂️ Cut the Wire', th: '✂️ ตัดสายไฟ', zh: '✂️ 切断电线' }, consequence: { en: '💣 50/50 Chance. You cut the blue wire. It stops! You feel like James Bond. Boss buys you a drink.', th: '💣 โอกาส 50/50 ตัดสายสีฟ้า หยุด! รู้สึกเหมือนเจมส์บอนด์ เจ้านายเลี้ยงเหล้า', zh: '💣 50/50的机会。你剪断了蓝线。停了！你感觉像詹姆斯·邦德。老板请你喝一杯。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'C', text: { en: '🛑 Abort Button', th: '🛑 ปุ่มยกเลิก', zh: '🛑 中止按钮' }, consequence: { en: '🐢 Too Far. The button is across the room. You trip. The gas hits. You wake up in the ER.', th: '🐢 ไกลไป ปุ่มอยู่อีกฝั่ง สะดุดล้ม ก๊าซปล่อย ตื่นที่ห้องฉุกเฉิน', zh: '🐢 太远了。按钮在房间另一头。你绊倒了。气体释放。你在急诊室醒来。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🧘 Hold Breath', th: '🧘 กลั้นหายใจ', zh: '🧘 屏住呼吸' }, consequence: { en: '💀 Bad Science. Halon doesn\'t just displace O2, it\'s heavy. You pass out and suffocate.', th: '💀 วิทย์มั่ว ฮาลอนไม่ได้แค่แทนที่ O2 มันหนัก คุณหมดสติและขาดอากาศ', zh: '💀 糟糕的科学。哈龙不仅仅是置换氧气，以此很重。你晕倒窒息。' }, stats: { competence: 0, ethics: 0, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_039',
        text: {
            en: '🐦 Pigeon Apocalypse: A rooftop unit is covered in 6 inches of pigeon poop. It is a biohazard. The unit is overheating because fins are clogged.',
            th: '🐦 วันสิ้นโลกของนกพิราบ: คอมเพรสเซอร์ดาดฟ้าปกคลุมด้วยขี้นกหนา 6 นิ้ว เป็นขยะติดเชื้อ เครื่องร้อนจัดเพราะครีบตัน',
            zh: '🐦 鸽子启示录：屋顶机组覆盖着6英寸厚的鸽子粪便。这是生物危害。机组因散热片堵塞而过热。'
        },
        options: [
            { id: 'A', text: { en: '🚿 Power Wash It', th: '🚿 ฉีดน้ำแรงดันสูง', zh: '🚿以此动力清洗' }, consequence: { en: '💩 Poop Mist. You blast it. Aerosolized poop covers the neighborhood. People vomit. You get fined.', th: '💩 ละอองขี้ ฉีดปุ๊บ ละอองขี้ฟุ้งกระจายทั่วระแวก คนอ้วกแตก โดนปรับ', zh: '💩 粪便雾。你喷射它。气溶胶化的粪便覆盖了社区。人们呕吐。你被罚款。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🥄 Shovel First', th: '🥄 ตักออกก่อน', zh: '🥄 先铲除' }, consequence: { en: '😷 Hard Work. You suit up and shovel for 4 hours. Then wash. Safe, clean, and professional.', th: '😷 งานหนัก ใส่ชุดตักขี้ 4 ชม. แล้วค่อยล้าง ปลอดภัย สะอาด มืออาชีพ', zh: '😷 艰苦的工作。你穿上装备铲了4个小时。然后清洗。安全，清洁，专业。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🔥 Burn It Off', th: '🔥 เผามัน', zh: '🔥 烧掉它' }, consequence: { en: '👃 The Smell. You use a torch. The smell of burning poop evacuates the building. You are fired.', th: '👃 กลิ่นนรก ใช้หัวพ่นไฟ กลิ่นขี้ไหม้ทำคนหนีทั้งตึก โดนไล่ออก', zh: '👃 那味道。你用火炬。燃烧粪便的味道让大楼疏散。你被解雇了。' }, stats: { competence: 10, ethics: -30, leadership: -40, innovation: 10 } },
            { id: 'D', text: { en: '💰 Hire Subcontractor', th: '💰 จ้างผู้รับเหมาช่วง', zh: '💰 雇用分包商' }, consequence: { en: '📉 Loss. You pay a cleaning crew $500. You make no profit, but you didn\'t touch poop.', th: '📉 ขาดทุน จ้างทีมทำความสะอาด 500 ไม่ได้กำไร แต่ไม่ต้องจับขี้', zh: '📉以此亏损。你付给清洁队500美元。你没赚到钱，但你没碰粪便。' }, stats: { competence: 40, ethics: 30, leadership: 50, innovation: 20 } }
        ]
    },
    {
        id: 'hvac_040',
        text: {
            en: '🏺 Ancient Crypt Cooling: An archeological dig needs cooling for a newly opened crypt to prevent degradation. The air inside is 2000 years old.',
            th: '🏺 ความเย็นสุสานโบราณ: แหล่งขุดค้นต้องการความเย็นให้สุสานที่เพิ่งเปิดเพื่อกันการเสื่อมสภาพ อากาศข้างในอายุ 2000 ปี',
            zh: '🏺以此古代地下室冷却：考古发掘需要为新打开的地下室降温以防止降解。里面的空气有2000年的历史。'
        },
        options: [
            { id: 'A', text: { en: '🌀 Positive Pressure', th: '🌀 แรงดันบวก', zh: '🌀 正压' }, consequence: { en: '🧠 Preserved. You pump filtered dry air IN, keeping outside moisture out. The artifacts are safe.', th: '🧠 อนุรักษ์ไว้ ปั๊มลมแห้งกรองแล้วเข้าไป กันความชื้นข้างนอก โบราณวัตถุปลอดภัย', zh: '🧠以此保存。你泵入过滤后的干燥空气，将外部湿气挡在外面。文物是安全的。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '❄️ Standard AC', th: '❄️ แอร์ทั่วไป', zh: '❄️以此标准空调' }, consequence: { en: '💧 Condensation. The temp drop causes water to form on the mummies. They turn into mush. History destroyed.', th: '💧 ไอน้ำ อุณหภูมิลดทำน้ำเกาะมัมมี่ กลายเป็นเละๆ ประวัติศาสตร์พัง', zh: '💧以此冷凝。温度下降导致木乃伊上形成水。它们变成了糊状。历史被毁。' }, stats: { competence: 20, ethics: -10, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🌬️ Vent It Out', th: '🌬️ ระบายออก', zh: '🌬️ 排出去' }, consequence: { en: '🤢 Ancient Curse/Virus. You pump ancient air out. The crew gets sick from ancient spores. Quarantine.', th: '🤢 คำสาป/ไวรัสโบราณ ปั๊มอากาศเก่าออก ทีมงานป่วยจากสปอร์โบราณ กักตัว', zh: '🤢 古老的诅咒/病毒。你把古老的空气抽出来。船员因古老的孢子而生病。隔离。' }, stats: { competence: 30, ethics: 10, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🚫 Refuse - Too Spooky', th: '🚫 ปฏิเสธ - น่ากลัวไป', zh: '🚫以此拒绝 - 太诡异了' }, consequence: { en: '👻 Coward. You leave. They hire a braver tech who gets famous on Discovery Channel.', th: '👻 ขี้ขลาด คุณหนี เขาจ้างช่างคนอื่นที่กล้ากว่า ซึ่งดังช่อง Discovery เลย', zh: '👻 懦夫。你离开了。他们雇了一个更勇敢的技术员，他在探索频道出名了。' }, stats: { competence: 20, ethics: 0, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_041',
        text: {
            en: '🌿 The Grow Room: You are hired to cool a massive "tomato" warehouse. It is obviously a large-scale illegal cannabis operation. They pay double in cash.',
            th: '🌿 ห้องเพาะปลูก: คุณถูกจ้างให้ทำความเย็นโกดัง "มะเขือเทศ" ยักษ์ แต่ดูยังไงก็ไร่กัญชาผิดกฎหมายชัดๆ เขาจ่ายสดสองเท่า',
            zh: '🌿 种植室：你被雇佣来冷却一个巨大的"番茄"仓库。这显然是一个大规模的非法大麻行动。他们付双倍现金。'
        },
        options: [
            { id: 'A', text: { en: '🤑 Take the Cash', th: '🤑 รับเงิน', zh: '🤑 拿钱' }, consequence: { en: '💰 Rich but Looking Over Shoulder. You make $10k in a day. But you are now on their payroll. No way out.', th: '💰 รวยแต่ระแวง ได้ 10k ในวันเดียว แต่ตอนนี้คุณอยู่ในบัญชีพวกเขาแล้ว หาทางออกยาก', zh: '💰 富有但提心吊胆。你一天赚了1万美元。但你现在在他们的工资单上。无路可退。' }, stats: { competence: 50, ethics: -10, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '📞 Anonymous Tip', th: '📞 แจ้งเบาะแสไม่ระบุตัว', zh: '📞 匿名举报' }, consequence: { en: '⚖️ Good Citizen. Police raid it. You lose the job but feel safe. Though you wonder if they tracked the call.', th: '⚖️ พลเมืองดี ตำรวจบุก คุณเสียงานแต่โล่งใจ แต่ก็แอบระแวงว่าเขาจะตามรอยโทรศัพท์ไหม', zh: '⚖️以此好公民。警方突袭。你丢了工作但感到安全。虽然你怀疑他们是否追踪了电话。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🔧 Sabotage Unit', th: '🔧 วางยาเครื่อง', zh: '🔧 破坏装置' }, consequence: { en: '💀 Death Threat. You break the AC to kill the plants. They find out. You have to leave town.', th: '💀 ขู่ฆ่า คุณทำแอร์พังให้ต้นไม้ตาย เขาจับได้ คุณต้องหนีไปอยู่เมืองอื่น', zh: '💀 死亡威胁。你弄坏空调杀死植物。他们发现了。你必须离开这个城镇。' }, stats: { competence: 20, ethics: 20, leadership: -40, innovation: 0 } },
            { id: 'D', text: { en: '🏃 Just Leave', th: '🏃 หนีไปเฉยๆ', zh: '🏃 离开' }, consequence: { en: '🛡️ Neutral. "I don\'t employ enough guys for this size." You walk away. Safe but broke.', th: '🛡️ เป็นกลาง "คนผมไม่พอทำไซต์ใหญ่ขนาดนี้" เดินออกมา ปลอดภัยแต่ถังแตก', zh: '🛡️ 中立。"我没有足够的人手做这么大的规模。"你走开了。安全但破产。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_042',
        text: {
            en: '🧲 MRI Quench Valve: At a hospital, the MRI helium dump valve is blocked by a bird nest. If the MRI quenches (explodes) without venting, it blows the roof off.',
            th: '🧲 วาล์ว MRI: ที่โรงพยาบาล วาล์วปล่อยฮีเลียมของ MRI ตันเพราะรังนก ถ้า MRI ระเบิดโดยระบายไม่ได้ หลังคาเปิดแน่',
            zh: '🧲 MRI淬火阀：在医院，MRI氦气排放阀被鸟巢堵塞。如果MRI在不通风的情况下淬火（爆炸），它会掀翻屋顶。'
        },
        options: [
            { id: 'A', text: { en: '🧗 Free Solo Climb', th: '🧗 ปีนตัวเปล่า', zh: '🧗 徒手攀登' }, consequence: { en: '🚀 Adrenaline. You climb the vent stack without a harness to clear it fast. Heroic, stupid, effective.', th: '🚀 อะดรีนาลีน ปีนปล่องระบายโดยไม่มีเซฟตี้เพื่อเคลียร์ให้ไว ฮีโร่ โง่ แต่ได้ผล', zh: '🚀 肾上腺素。你在没有安全带的情况下爬上通风管道快速清理。英勇，愚蠢，有效。' }, stats: { competence: 60, ethics: 40, leadership: 20, innovation: 20 } },
            { id: 'B', text: { en: '🏗️ Wait for Lift', th: '🏗️ รอรถกระเช้า', zh: '🏗️ 等待升降机' }, consequence: { en: '💥 Too Late. While waiting, the magnet quenches. The buildup blows a hole in the wall. You followed safety rules though.', th: '💥 ไม่ทัน ระหว่างรอ แม่เหล็กระเบิด แรงดันเจาะกำแพงเป็นรู แต่คุณทำตามกฎความปลอดภัยนะ', zh: '💥 太晚了。在等待时，磁铁淬火。积聚的压力在墙上炸了一个洞。虽然你遵守了安全规则。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🔫 Shotgun Solution', th: '🔫 วิธีลูกซอง', zh: '🔫 霰弹枪解决方案' }, consequence: { en: '🤠 Redneck Engineering. You ask security for a gun and shoot the nest out. It works! But you are fired for firing a gun at a hospital.', th: '🤠 วิศวกรรมบ้านนา ขอปืนรปภ. มายิงรังนก ได้ผล! แต่โดนไล่ออกฐานยิงปืนในโรงพยาบาล', zh: '🤠 乡巴佬工程。你向保安要了一把枪，把鸟巢射了出来。以此管用！但你因为在医院开枪被解雇了。' }, stats: { competence: 40, ethics: 0, leadership: -10, innovation: 50 } },
            { id: 'D', text: { en: '🐦 Poke from Inside', th: '🐦 กระทุ้งจากข้างใน', zh: '🐦以此从里面戳' }, consequence: { en: '🌬️ Frozen Arm. You reach up. The helium vents just then! It freezes your arm instantly. Frostbite.', th: '🌬️ แขนแข็ง คุณล้วงเข้าไป ฮีเลียมพุ่งพอดี! แขนแข็งเป๊ก โดนหิมะกัด', zh: '🌬️ 冻僵的手臂。你把手伸上去。氦气就在那时排出！瞬间冻住了你的手臂。冻伤。' }, stats: { competence: 10, ethics: 20, leadership: -10, innovation: 10 } }
        ]
    },
    {
        id: 'hvac_043',
        text: {
            en: '🥗 Vertical Farming Crisis: A hydroponic tower\'s chiller failed. 100,000 heads of lettuce will wilt in 2 hours. It is 110°F inside the glass structure.',
            th: '🥗 วิกฤตฟาร์มแนวตั้ง: ชิลเลอร์ของหอไฮโดรโปนิกส์พัง ผักกาดหอม 1 แสนต้นจะเหี่ยวใน 2 ชั่วโมง ข้างในเรือนกระจก 110 องศา',
            zh: '🥗 垂直农业危机：水培塔的冷却器故障。10万棵生菜将在2小时内枯萎。玻璃结构内部温度为110华氏度。'
        },
        options: [
            { id: 'A', text: { en: '💦 Open Sprinklers', th: '💦 เปิดสปริงเกอร์', zh: '💦以此打开洒水器' }, consequence: { en: '📉 Evaporative Cooling. You trigger the fire sprinklers. It cools the air but floods the nutrient tanks. Half crop saved.', th: '📉 ระบายความร้อนด้วยน้ำ คุณเปิดสปริงเกอร์ดับเพลิง อากาศเย็นลงแต่น้ำท่วมถังสารอาหาร รอดครึ่งเดียว', zh: '📉 蒸发冷却。你触发了消防喷淋系统。它冷却了空气，但淹没了营养槽。一半作物获救。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 40 } },
            { id: 'B', text: { en: '🔨 Smash Windows', th: '🔨 ทุบกระจก', zh: '🔨以此砸碎窗户' }, consequence: { en: '🌬️ Ventilation. You break lower and upper windows to create a draft. It works. The glass is cheaper than the crop.', th: '🌬️ ระบายอากาศ ทุบกระจกบนล่างเพื่อให้ลมถ่ายเท ได้ผล ค่ากระจกถูกกว่าค่าผัก', zh: '🌬️以此通风。你打破上下窗户以产生对流。以此管用。玻璃比庄稼便宜。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'C', text: { en: '🧊 Order Ice Truck', th: '🧊 สั่งรถน้ำแข็ง', zh: '🧊以此订购冰车' }, consequence: { en: '🐢 Traffic Jam. The truck gets stuck in traffic. The crop dies while you wait. Poor logistics.', th: '🐢 รถติด รถน้ำแข็งติดแหง็ก ผักตายระหว่างรอ การจัดการห่วย', zh: '🐢以此交通堵塞。卡车被困在交通中。庄稼在你等待时死了。物流很差。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🔧 Bypass Safety', th: '🔧 ข้ามระบบความปลอดภัย', zh: '🔧以此绕过安全' }, consequence: { en: '💥 Boom again. You force the compressor. It blows a seal. Now you have no chiller and a chemical leak.', th: '💥 บึ้มอีกแล้ว ฝืนคอมเพรสเซอร์ ซีลแตก ตอนนี้ไม่มีทั้งชิลเลอร์แถมสารเคมีรั่ว', zh: '💥以此又炸了。你强行启动压缩机。它炸毁了密封件。现在你没有冷却器，还有化学泄漏。' }, stats: { competence: 10, ethics: -20, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_044',
        text: {
            en: '🚀 Pseudo-Space Station: You are servicing a Mars simulation habitat. The crew is sealed inside for "training". Their CO2 scrubber failed. They ask you to fix it from the OUTSIDE without breaking the seal.',
            th: '🚀 สถานีอวกาศจำลอง: คุณซ่อมที่อยู่อาศัยจำลองดาวอังคาร ลูกเรือถูกปิดตายข้างในเพื่อ "ฝึก" เครื่องกำจัด CO2 เสีย เขาขอให้ซ่อมจาก "ข้างนอก" ห้ามเปิดซีล',
            zh: '🚀以此伪空间站：你正在维修火星模拟栖息地。船员被封在里面进行"训练"。他们的二氧化碳洗涤器坏了。他们让你从外面修好它，不要破坏密封。'
        },
        options: [
            { id: 'A', text: { en: '🗣️ Walk Them Through It', th: '🗣️ สอนซ่อมผ่านวิทยุ', zh: '🗣️以此逐步指导他们' }, consequence: { en: '👨‍🏫 Remote Teacher. You spend 4 hours instructing a biologist how to solder. It works! You are a great teacher.', th: '👨‍🏫 ครูทางไกล สอนนักชีววิทยาบัดกรีอยู่ 4 ชั่วโมง ได้ผล! คุณเป็นครูที่ยอดเยี่ยม', zh: '👨‍🏫以此远程教师。你花了4个小时指导生物学家如何焊接。以此管用！你是个好老师。' }, stats: { competence: 60, ethics: 50, leadership: 60, innovation: 30 } },
            { id: 'B', text: { en: '🚪 Break Seal', th: '🚪 พังซีลเข้าไป', zh: '🚪以此打破密封' }, consequence: { en: '🌬️ Mission Failed. You open the door to fix it. The simulation is ruined. Millions in grant money lost. But they breathe.', th: '🌬️ ภารกิจล้มเหลว เปิดประตูเข้าไปซ่อม การจำลองพัง เงินทุนวิจัยล้านสูญ แต่พวกเขารอด', zh: '🌬️以此任务失败。你打开门修好了它。模拟被毁。数百万赠款损失。但他们还能呼吸。' }, stats: { competence: 40, ethics: 60, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🧲 External Patch', th: '🧲 ปะจากข้างนอก', zh: '🧲以此外部补丁' }, consequence: { en: '🎈 Hack Job. You tape a filter over the intake. It barely works. They suffer headaches but survive the "mission".', th: '🎈 งานลวก เอาฟิลเตอร์แปะท่อดูด แทบไม่ได้ช่วย พวกเขาปวดหัวแต่รอดจนจบ "ภารกิจ"', zh: '🎈以此黑客工作。你在进气口贴了一个过滤器。几乎不起作用。他们头痛，但在"任务"中幸存下来。' }, stats: { competence: 30, ethics: 10, leadership: 10, innovation: 40 } },
            { id: 'D', text: { en: '🧪 Pump Oxygen', th: '🧪 อัดออกซิเจน', zh: '🧪以此泵入氧气' }, consequence: { en: '💥 Explosion Risk. You pump pure O2 into a closed machinery space. A spark ignites it. Simulation Ends Badly.', th: '💥 เสี่ยงระเบิด อัด O2 บริสุทธิ์เข้าห้องเครื่องปิดตาย ประกายไฟจุดระเบิด จบไม่สวย', zh: '💥以此爆炸风险。你把纯氧泵入封闭的机械空间。火花点燃了它。模拟以糟糕的方式结束。' }, stats: { competence: 0, ethics: -20, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_045',
        text: {
            en: '🔐 The Locked Basement: A creepy client locks the basement door behind you "so the cat doesn\'t get out". You fix the furnace, but he won\'t unlock the door. He wants to "chat".',
            th: '🔐 ห้องใต้ดินที่ถูกล็อค: ลูกค้าหลอนๆ ล็อคประตูห้องใต้ดินขังคุณ "เพื่อกันแมวออก" คุณซ่อมเตาเสร็จ แต่เขาไม่ยอมเปิด อยากจะ "คุย" ด้วย',
            zh: '🔐 被锁的地下室：一个令人毛骨悚然的客户把你锁在地下室门后，"这样猫就不会跑出去了"。你修好了炉子，但他不肯开门。他想"聊聊"。'
        },
        options: [
            { id: 'A', text: { en: '🔨 Dismantle Door', th: '🔨 รื้อประตู', zh: '🔨以此拆门' }, consequence: { en: '🔓 Escape. You use your tools to take the hinges off. You run to the truck. He leaves a 1-star review "Rude".', th: '🔓 หนี ใช้เครื่องมือสอดบานพับ วิ่งขึ้นรถ เขาให้ 1 ดาว "หยาบคาย"', zh: '🔓以此逃跑。你用工具把铰链卸下来。你跑向卡车。他留下了1星评价"粗鲁"。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 30 } },
            { id: 'B', text: { en: '📞 Call Police', th: '📞 โทรหาตำรวจ', zh: '📞以此报警' }, consequence: { en: '👮 Rescue. Cops arrive. Turns out he is wanted. You get a reward. Safe and legal.', th: '👮 ช่วยเหลือ ตำรวจมา ปรากฏว่าเขาเป็นผู้ต้องหา คุณได้รางวัล ปลอดภัยและถูกกฎหมาย', zh: '👮以此救援。警察来了。原来他是通缉犯。你得到奖励。安全合法。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🗣️ Chat', th: '🗣️ คุย', zh: '🗣️以此聊天' }, consequence: { en: '⏳ Time Waste. He talks for 3 hours about aliens. You lose your next appointment. But you get out unharmed.', th: '⏳ เสียเวลา เขาโม้เรื่องเอเลี่ยน 3 ชั่วโมง เสียนัดถัดไป แต่รอดมาได้ครบ 32', zh: '⏳以此浪费时间。他谈论了3个小时的外星人。你错过了下一个预约。但你毫发无损地出来了。' }, stats: { competence: 20, ethics: 10, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '🔥 Threaten with Torch', th: '🔥 เอาหัวพ่นไฟขู่', zh: '🔥以此用火炬威胁' }, consequence: { en: '⚖️ Assault Charge. You threaten him. He records it. You go to jail. Overreaction.', th: '⚖️ ข้อหาทำร้ายร่างกาย คุณขู่เขา เขาอัดคลิปไว้ ติดคุก เล่นใหญ่ไป', zh: '⚖️以此攻击指控。你威胁他。他录了下来。你去坐牢。反应过度。' }, stats: { competence: 0, ethics: -40, leadership: -50, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_046',
        text: {
            en: '🗑️ Hoarder House Fire Risk: You need to solder a pipe in a basement filled floor-to-ceiling with newspapers and old clothes. It is a tinderbox.',
            th: '🗑️ บ้านสะสมขยะเสี่ยงไฟไหม้: คุณต้องบัดกรีท่อในห้องใต้ดินที่เต็มไปด้วยหนังสือพิมพ์และเสื้อผ้าเก่าสูงจรดเพดาน มันคือเชื้อเพลิงชั้นดี',
            zh: '🗑️ 囤积屋火灾风险：你需要在充满报纸和旧衣服的地下室焊接管道。这简直是个火药桶。'
        },
        options: [
            { id: 'A', text: { en: '🔥 Solder Anyway', th: '🔥 บัดกรีไปเถอะ', zh: '🔥 照样焊接' }, consequence: { en: '🔥 Fire! A spark lands on a stack of National Geographics. The house burns down. You narrowly escape.', th: '🔥 ไฟไหม้! ประกายไฟตกใส่นิตยสาร บ้านวอดวาย คุณหนีรอดหวุดหวิด', zh: '🔥 火灾！火花落在了一堆国家地理杂志上。房子烧毁了。你侥幸逃脱。' }, stats: { competence: 20, ethics: -20, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '🛡️ Shield and Wet', th: '🛡️ กั้นและพรมน้ำ', zh: '🛡️ 屏蔽并弄湿' }, consequence: { en: '🧠 Safe Method. You spend an hour clearing a zone, wetting it, and using a heat shield. Safe repair.', th: '🧠 วิธีปลอดภัย เสียเวลาชั่วโมงเคลียร์พื้นที่ พรมน้ำ และใช้ฉนวนกันความร้อน ซ่อมอย่างปลอดภัย', zh: '🧠以此安全的方法。你花了一个小时清理一个区域，弄湿它，并使用隔热罩。安全修复。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🔗 Propress Fitting', th: '🔗 ใช้ข้อต่อบีบอัด', zh: '🔗以此压接配件' }, consequence: { en: '🔧 Flame-Free. You go buy expensive Propress fittings to avoid using a torch. Smart choice. Client pays for parts.', th: '🔧 ไร้เปลวไฟ ซื้อข้อต่อบีบอัดแพงๆ มาใช้แทนการเชื่อม ฉลาดมากลูกค้าจ่ายค่าของ', zh: '🔧以此无火焰。你去买了昂贵的压接配件以避免使用火炬。明智的选择。客户支付零件费用。' }, stats: { competence: 70, ethics: 60, leadership: 30, innovation: 60 } },
            { id: 'D', text: { en: '🏃 Refuse Service', th: '🏃 ปฏิเสธงาน', zh: '🏃以此拒绝服务' }, consequence: { en: '🛑 Walk Away. "Clean this up first." You leave. They never call back. Probably for the best.', th: '🛑 ไม่ทำ "เก็บกวาดก่อนนะ" คุณกลับ เขาไม่โทรมาอีกเลย ดีแล้วล่ะ', zh: '🛑以此走开。"先清理一下。"你离开了。他们再也没打电话来。可能这样最好。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_047',
        text: {
            en: '🎲 Casino High Roller Suite: You must fix the AC in a VIP suite while a famous billionaire is gambling inside. You are told to be "invisible" and silent.',
            th: '🎲 ห้องสูทวีไอพีคาสิโน: ต้องซ่อมแอร์ในห้องวีไอพีขณะที่มหาเศรษฐีกำลังเล่นพนันอยู่ เขาบอกให้ทำตัว "ล่องหน" และเงียบกริบ',
            zh: '🎲 赌场豪客套房：你必须在著名的亿万富翁在里面赌博时修理VIP套房的空调。你被告知要"隐形"并保持沉默。'
        },
        options: [
            { id: 'A', text: { en: '🤫 Ninja Repair', th: '🤫 นินจาซ่อม', zh: '🤫以此忍者修理' }, consequence: { en: '🥷 Stealth Mode. You work slowly and quietly. It takes twice as long, but he tips you a $500 chip.', th: '🥷 โหมดลอบเร้น ทำช้าๆ เงียบๆ นานกว่าเดิมสองเท่า แต่เขาให้ทิปชิป 500 เหรียญ', zh: '🥷 隐身模式。你慢慢地、安静地工作。花了在这个两倍的时间，但他给了你一个500美元的筹码作为小费。' }, stats: { competence: 60, ethics: 40, leadership: 30, innovation: 30 } },
            { id: 'B', text: { en: '🔊 Dropped Tool', th: '🔊 ทำเครื่องมือตก', zh: '🔊 掉落的工具' }, consequence: { en: '📢 Clang! You drop a wrench. He loses his concentration and a bet. He screams at you. You are kicked out.', th: '📢 เคร้ง! ทำประแจตก เขาเสียสมาธิและเสียพนัน เขาตะคอกใส่ คุณโดนไล่ออก', zh: '📢 当啷！你掉了一个扳手。他失去了注意力并输了赌注。他冲你尖叫。你被赶了出去。' }, stats: { competence: 20, ethics: 20, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🕶️ Ask for Autograph', th: '🕶️ ขอลายเซ็น', zh: '🕶️以此要签名' }, consequence: { en: '🚫 Unprofessional. Security drags you out instantly. Your boss loses the casino contract.', th: '🚫 ไม่มืออาชีพ การ์ดลากคุณออกทันที เจ้านายเสียสัญญาคาสิโน', zh: '🚫以此不专业。保安立刻把你拖了出去。老板失去了赌场合同。' }, stats: { competence: 10, ethics: -20, leadership: -30, innovation: 0 } },
            { id: 'D', text: { en: '🔧 Plan B from Hallway', th: '🔧 แผนสองซ่อมจากโถง', zh: '🔧以此从走廊执行B计划' }, consequence: { en: '🧠 Clever. You adjust the dampers from the hallway to force air in. Not a perfect fix, but avoids entry.', th: '🧠 ฉลาด ปรับแดมเปอร์จากโถงทางเดินเพื่อบีบลมเข้า ไม่ใช่วิธีแก้ถาวรแต่ไม่ต้องเข้าห้อง', zh: '🧠以此聪明。你从走廊调整阻尼器以迫使空气进入。不是完美的修复，但避免了进入。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'hvac_048',
        text: {
            en: '☢️ Nuclear Bunker Test: You are certifying the air filtration for a doomsday prepper\'s bunker. He locks the door and releases tear gas to "test your work" with you inside.',
            th: '☢️ ทดสอบบังเกอร์นิวเคลียร์: คุณกำลังรับรองระบบกรองอากาศให้บังเกอร์คนเตรียมวันสิ้นโลกเขาล็อคประตูแล้วปล่อยแก๊สน้ำตาเพื่อ "ทดสอบงาน" โดยมีคุณอยู่ข้างใน',
            zh: '☢️以此核掩体测试：你正在为世界末日准备者的掩体认证空气过滤。他锁上门并释放催泪瓦斯来，以此"测试你的工作"，而你在里面。'
        },
        options: [
            { id: 'A', text: { en: '😷 Put on Mask', th: '😷 ใส่หน้ากาก', zh: '😷 戴上面具' }, consequence: { en: '🛡️ Prepared. You always carry a respirator. You sit calmly while he coughs. Your system works perfectly.', th: '🛡️ เตรียมพร้อม พกหน้ากากตลอด นั่งชิลขณะที่เขาไอสำลัก ระบบคุณทำงานสมบูรณ์แบบ', zh: '🛡️以此有备而来。你总是带着呼吸器。你冷静地坐着，而他在咳嗽。你的系统运行完美。' }, stats: { competence: 70, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '😭 Panic and Choke', th: '😭 ตื่นตระหนกสำลัก', zh: '😭以此恐慌窒息' }, consequence: { en: '💀 Fail. The filter wasn\'t seated right. You both choke. He sues you for "attempted murder" via incompetence.', th: '💀 พลาด ใส่ฟิลเตอร์ไม่แน่น สำลักทั้งคู่ เขาฟ้องคุณข้อหา "พยายามฆ่า" ด้วยความห่วย', zh: '💀以此失败。过滤器没装好。你们都窒息了。他因无能而起诉你"谋杀未遂"。' }, stats: { competence: 10, ethics: 0, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '👊 Punch Him', th: '👊 ต่อยมัน', zh: '👊以此揍他' }, consequence: { en: '🥊 Survival. You knock him out and unlock the door. Justified defense? Maybe. He respects you now.', th: '🥊 เอาตัวรอด น็อคเขาแล้วเปิดประตู ป้องกันตัวโดยชอบธรรม? มั้ง เขาเคารพคุณเฉย', zh: '🥊以此生存。你打昏他并打开门。正当防卫？也许吧。他现在尊重你了。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '🔧 Override Fan Speed', th: '🔧 เร่งพัดลมสุดแรง', zh: '🔧以此覆盖风扇速度' }, consequence: { en: '🌪️ Turbo Clear. You hack the panel to run fans at 200%. It clears the gas in 10 seconds. Impressive.', th: '🌪️ เทอร์โบแฮกเร่งพัดลม 200% ดูดแก๊สเกลี้ยงใน 10 วิ เจ๋งเป้ง', zh: '🌪️以此涡轮清除。你黑进面板让风扇以200%运行。10秒内清除了气体。令人印象深刻。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 60 } }
        ]
    },
    {
        id: 'hvac_049',
        text: {
            en: '📱 The Influencer: A TikTok star hires you. She films your butt crack while you work and livestreams it to 2 million people. She refuses to stop.',
            th: '📱 อินฟลูเอนเซอร์: ดาว TikTok จ้างคุณ เธอถ่ายร่องก้นคุณตอนทำงานแล้วไลฟ์ให้คน 2 ล้านดู บอกให้หยุดก็ไม่ยอม',
            zh: '📱 网红：一位TikTok明星雇佣了你。她拍摄你工作时的股沟并向200万人直播。她拒绝停止。'
        },
        options: [
            { id: 'A', text: { en: '🍑 Pull Up Pants', th: '🍑 ดึงกางเกงขึ้น', zh: '🍑以此拉起裤子' }, consequence: { en: '👔 Professional. You adjust your belt, ignore her, and finish the job. Comments say "Nice work ethic".', th: '👔 มืออาชีพ จัดเข็มขัด เมินเธอ ทำงานต่อ คอมเมนต์ชม "ขยันจัง"', zh: '👔以此专业。你调整皮带，无视她，完成工作。评论说"很好的职业道德"。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🤬 Swear at Her', th: '🤬 ด่าเธอ', zh: '🤬以此骂她' }, consequence: { en: '📉 Viral Villain. You explode. The clip goes viral. You are "Angry HVAC Guy". Business tanks.', th: '📉 ตัวร้ายไวรัล คุณระเบิดอารมณ์ คลิปดัง คุณกลายเป็น "ช่างแอร์หัวร้อน" ธุรกิจเจ๊ง', zh: '📉以此病毒式反派。你爆发了。片段疯传。你是"愤怒的暖通家伙"。生意一落千丈。' }, stats: { competence: 30, ethics: -20, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '🎸 Perform', th: '🎸 โชว์ของ', zh: '🎸 表演' }, consequence: { en: '🌟 Viral Hero. You start breakdancing or singing. The internet loves it. You get famous and triple your rates.', th: '🌟 ฮีโร่ไวรัล คุณเต้นเบรกแดนซ์หรือร้องเพลง ชาวเน็ตชอบ ดังเฉย ขึ้นค่าตัวสามเท่า', zh: '🌟以此病毒式英雄。你开始霹雳舞或唱歌。互联网喜欢它。你出名了，费率翻了三倍。' }, stats: { competence: 40, ethics: 30, leadership: 60, innovation: 70 } },
            { id: 'D', text: { en: '🚶 Walk Out', th: '🚶 เดินออก', zh: '🚶以此走人' }, consequence: { en: '🚫 Boundaries. You pack up and leave. "Unsafe work environment." You keep your dignity.', th: '🚫 ขอบเขต เก็บของกลับ "สภาพงานคุกคาม" รักษาศักดิ์ศรีไว้ได้', zh: '🚫 界限。你收拾东西离开。"不安全的工作环境。"你保持了尊严。' }, stats: { competence: 40, ethics: 60, leadership: 50, innovation: 0 } }
        ]
    },
    {
        id: 'hvac_050',
        text: {
            en: '🎓 The Apprentice Exam: You are now a Master Tech. Your apprentice is taking his licensure exam. He calls you, panicked, during the test asking for an answer.',
            th: '🎓 สอบใบอนุญาต: ตอนนี้คุณเป็นช่างระดับปรมาจารย์ เด็กฝึกงานของคุณกำลังสอบใบอนุญาต เขาโทรหาคุณตอนสอบด้วยความตื่นตระหนกเพื่อถามคำตอบ',
            zh: '🎓 学徒考试：你现在是一名大师级技师。你的学徒正在参加入职考试。他在考试期间惊慌失措地给你打电话寻求答案。'
        },
        options: [
            { id: 'A', text: { en: '🤐 Hang Up', th: '🤐 วางสาย', zh: '🤐 挂断' }, consequence: { en: '⚖️ Tough Love. You hang up. He fails. He studies harder and passes next time. He learns integrity.', th: '⚖️ รักวัวให้ผูก วางสาย เขาตก เขาขยันขึ้นแล้วผ่านรอบหน้า เขาได้เรียนรู้ความซื่อสัตย์', zh: '⚖️ 严厉的爱。你挂断电话。他不及格。他更努力学习并在下次通过。他学会了正直。' }, stats: { competence: 20, ethics: 60, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '🗣️ Give Answer', th: '🗣️ บอกคำตอบ', zh: '🗣️以此给答案' }, consequence: { en: '🤥 Cheater. You help him pass. He becomes a tech but relies on you forever. He burns a compressor next week.', th: '🤥 ขี้โกง ช่วยเขาผ่าน เขาได้เป็นช่างแต่พึ่งคุณตลอดไป อาทิตย์หน้าทำคอมเพรสเซอร์ไหม้', zh: '🤥以此作弊者。你帮他通过。他成为了一名技师，但永远依赖你。下周他烧毁了一个压缩机。' }, stats: { competence: 50, ethics: -40, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '💡 Give Hint', th: '💡 ให้คำใบ้', zh: '💡以此给提示' }, consequence: { en: '🤝 Grey Area. You guide his thinking without giving the answer. He figures it out. Is it cheating? Maybe.', th: '🤝 พื้นที่สีเทา ไกด์วิธีคิดแต่ไม่บอกคำตอบ เขาคิดออก โกงไหม? อาจจะ', zh: '🤝以此灰色地带。你引导他的思维而不给出答案。他想通了。这是作弊吗？也许吧。' }, stats: { competence: 40, ethics: 20, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '📢 Report Him', th: '📢 รายงานเขา', zh: '📢以此举报他' }, consequence: { en: '👮 Strict. You call the proctor. He is banned for life. You lost a friend but kept the industry pure.', th: '👮 เฮี้ยบ โทรบอกคนคุมสอบ เขาโดนแบนตลอดชีพ เสียเพื่อนแต่รักษามาตรฐานวงการ', zh: '👮以此严格。你给监考人打电话。他被终身禁赛。你失去了一个朋友，但保持了行业的纯洁。' }, stats: { competence: 30, ethics: 80, leadership: 10, innovation: 0 } }
        ]
    },
];



