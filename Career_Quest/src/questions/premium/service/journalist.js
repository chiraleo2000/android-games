export const journalistQuestions = [
    {
        id: 'journalist_001',
        text: {
            en: '🕵️ The Whistleblower\'s Dilemma: A high-ranking government official offers you classified documents proving corruption, but demands absolute anonymity. Publishing will topple the administration but puts your source at risk of treason charges.',
            th: '🕵️ ภาวะกลืนไม่เข้าคายไม่ออกของผู้แจ้งเบาะแส: เจ้าหน้าที่รัฐระดับสูงเสนอเอกสารลับที่พิสูจน์การทุจริตให้คุณ แต่เรียกร้องการไม่เปิดเผยตัวตนอย่างเด็ดขาด การเผยแพร่จะล้มรัฐบาลแต่ทำให้แหล่งข่าวเสี่ยงต่อข้อหากบฏ',
            zh: '🕵️ 举报人的困境：一位政府高官向你提供证明腐败的机密文件，但要求绝对匿名。发布这些文件将推翻政府，但会让你的消息来源面临叛国罪的指控。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Publish Everything: "The public has a right to know. We protect the source as best we can, but the truth comes first regardless of the fallout."',
                    th: '📢 เผยแพร่ทุกอย่าง: "ประชาชนมีสิทธิ์ที่จะรู้ เราจะปกป้องแหล่งข่าวให้ดีที่สุด แต่ความจริงต้องมาก่อนไม่ว่าจะเกิดผลกระทบอย่างไร"',
                    zh: '📢 发布一切："公众有权知道真相。我们会尽力保护消息来源，无论后果如何，真相至上。"'
                },
                consequence: {
                    en: '🏆 Truth Prevails! The government collapses, and you win a Pulitzer. However, the source is eventually identified and arrested. You are hailed as a hero, but carry the guilt.',
                    th: '🏆 ความจริงชนะ! รัฐบาลล้ม และคุณได้รับรางวัลพูลิตเซอร์ แต่แหล่งข่าวถูกระบุตัวและจับกุมในที่สุด คุณได้รับการยกย่องเป็นฮีโร่ แต่ต้องแบกรับความรู้สึกผิด',
                    zh: '🏆 真相大白！政府倒台，你赢得了普利策奖。然而，消息来源最终被确认并逮捕。你被誉为英雄，但背负着愧疚。'
                },
                stats: { competence: 50, ethics: 10, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔒 Verify and Redact: "We use the info to find other evidence. We don\'t publish the documents directly to protect the source\'s identity at all costs."',
                    th: '🔒 ตรวจสอบและแก้ไข: "เราใช้ข้อมูลเพื่อหาหลักฐานอื่น เราไม่เผยแพร่เอกสารโดยตรงเพื่อปกป้องตัวตนของแหล่งข่าวไม่ว่าจะต้องแลกด้วยอะไรก็ตาม"',
                    zh: '🔒 核实并删减："我们利用这些信息寻找其他证据。我们不直接发布文件，不惜一切代价保护消息来源的身份。"'
                },
                consequence: {
                    en: '🛡️ Safe Journalism! The story takes longer and is less explosive, but leads to inquiries. The source remains safe. You build a reputation for integrity and responsibility.',
                    th: '🛡️ วารสารศาสตร์ที่ปลอดภัย! ข่าวใช้เวลานานขึ้นและรุนแรงน้อยลง แต่นำไปสู่การสอบสวน แหล่งข่าวปลอดภัย คุณสร้างชื่อเสียงด้านความซื่อสัตย์และความรับผิดชอบ',
                    zh: '🛡️ 安全的新闻报道！报道通过的时间更长，爆炸性较小，但引发了调查。消息来源保持安全。你建立了正直和负责任的声誉。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚫 Refuse the Story: "This is too dangerous. I won\'t risk someone\'s life or freedom for a headline. Find another reporter."',
                    th: '🚫 ปฏิเสธข่าว: "มันอันตรายเกินไป ฉันจะไม่เสี่ยงชีวิตหรืออิสรภาพของใครเพื่อพาดหัวข่าว ไปหานักข่าวคนอื่นเถอะ"',
                    zh: '🚫 拒绝报道："这太危险了。我不会为了头条新闻拿别人的生命或自由冒险。找别的记者吧。"'
                },
                consequence: {
                    en: '📉 Story Lost! Another paper breaks the news poorly, causing chaos. Your editor is furious you passed up the scoop of the century. Credibility takes a hit.',
                    th: '📉 เสียข่าว! หนังสือพิมพ์อื่นลงข่าวไม่ดี ทำให้เกิดความวุ่นวาย บรรณาธิการโกรธที่คุณพลาดข่าวดังแห่งศตวรรษ ความน่าเชื่อถือลดลง',
                    zh: '📉 有个故事也不见了！另一家报纸报道得很糟糕，造成混乱。你的编辑对你放弃世纪独家新闻感到愤怒。信誉受到打击。'
                },
                stats: { competence: 10, ethics: 30, leadership: -10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Sell the Info: "This is worth millions to the right people. Let\'s make a deal with a private intelligence firm instead of publishing."',
                    th: '💰 ขายข้อมูล: "ข้อมูลนี้มีค่าหลายล้านสำหรับคนที่เหมาะสม มาตกลงกับบริษัทข่าวกรองเอกชนแทนที่จะเผยแพร่กันเถอะ"',
                    zh: '💰 出售信息："这对合适的人来说价值连城。让我们与私人情报公司做交易，而不是发布。"'
                },
                consequence: {
                    en: '💸 Moral Bankruptcy! You get rich but are fired and blacklisted from journalism forever when the deal leaks. You acted as a spy, not a reporter.',
                    th: '💸 ล้มละลายทางศีลธรรม! คุณรวยขึ้นแต่ถูกไล่ออกและขึ้นบัญชีดำจากวงการสื่อตลอดไปเมื่อข้อตกลงรั่วไหล คุณทำตัวเหมือนสายลับ ไม่ใช่นักข่าว',
                    zh: '💸 道德破产！你发财了，但交易泄露后被解雇并永远被列入新闻界黑名单。你的行为像个间谍，而不是记者。'
                }
            }
        ]
    },
    {
        id: 'journalist_002',
        text: {
            en: '📸 The Disaster Shot: You are covering a tragic earthquake. You see a child trapped in rubble, crying. You can capture a photo that will define the disaster and win awards, or put down the camera to help rescue immediately.',
            th: '📸 ภาพถ่ายหายนะ: คุณกำลังทำข่าวแผ่นดินไหวครั้งใหญ่ คุณเห็นเด็กติดอยู่ในซากปรักหักพังกำลังร้องไห้ คุณสามารถถ่ายภาพที่จะนิยามเหตุการณ์และคว้ารางวัล หรือวางกล้องลงเพื่อช่วยกู้ภัยทันที',
            zh: '📸 灾难镜头：你正在报道一场悲惨的地震。你看到一个孩子被困在废墟中哭泣。你可以拍下一张能定义这场灾难并获奖的照片，或者放下相机立即帮忙救援。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📸 Take the Photo First: "I\'m here to document history. The rescuers are coming. This image will bring international aid."',
                    th: '📸 ถ่ายภาพก่อน: "ฉันมาที่นี่เพื่อบันทึกประวัติศาสตร์ หน่วยกู้ภัยกำลังมา ภาพนี้จะนำความช่วยเหลือจากนานาชาติมาให้"',
                    zh: '📸 先拍照："我是来记录历史的。救援人员就要来了。这张照片将带来国际援助。"'
                },
                consequence: {
                    en: '🏆 Award Winning, Soul Crushing: The photo goes viral and raises millions in aid. But you have nightmares about the seconds you wasted. The child survived, but you feel hollow.',
                    th: '🏆 ได้รับรางวัลแต่ใจสลาย: ภาพกลายเป็นไวรัลและระดมทุนช่วยเหลือได้หลายล้าน แต่คุณฝันร้ายเกี่ยวกับวินาทีที่คุณเสียไป เด็กรอดชีวิต แต่คุณรู้สึกว่างเปล่า',
                    zh: '🏆 获奖，心碎：这张照片疯传并筹集了数百万援助。但你对浪费的那几秒钟做噩梦。孩子幸存下来了，但你感到空虚。'
                },
                stats: { competence: 45, ethics: 10, leadership: 20, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Help Immediately: "Screw the photo! Human life comes first." You drop your gear and start digging with your bare hands.',
                    th: '🤝 ช่วยเหลือทันที: "ช่างหัวรูปถ่ายสิ! ชีวิตคนต้องมาก่อน" คุณทิ้งอุปกรณ์และเริ่มขุดด้วยมือเปล่า',
                    zh: '🤝 立即帮助："去他的照片！人命关天。"你扔下装备，开始徒手挖掘。'
                },
                consequence: {
                    en: '❤️ Heroic but Unpublished: You save the child before rescuers arrive. You miss the "money shot," but the locals treat you like family. Your story is written with deep empathy.',
                    th: '❤️ เป็นฮีโร่แต่ไม่ได้ลงข่าว: คุณช่วยเด็กได้ก่อนทีมกู้ภัยจะมาถึง คุณพลาด "ช็อตเด็ด" แต่ชาวบ้านดูแลคุณเหมือนครอบครัว เรื่องราวของคุณถูกเขียนด้วยความเห็นอกเห็นใจอย่างลึกซึ้ง',
                    zh: '❤️ 英雄但未发表：你在救援人员到达前救了孩子。你错过了"赚钱的镜头"，但当地人像家人一样对待你。你的报道充满了深切的同情。'
                },
                stats: { competence: 20, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🎥 Livestream the Rescue: "I can do both. I\'ll stream the rescue efforts to show the reality while calling for help."',
                    th: '🎥 ไลฟ์สตรีมการกู้ภัย: "ฉันทำได้ทั้งสองอย่าง ฉันจะถ่ายทอดสดความพยายามในการกู้ภัยเพื่อแสดงความจริงในขณะที่เรียกความช่วยเหลือ"',
                    zh: '🎥 直播救援："我可以两者兼顾。我会直播救援工作，展示现实情况，同时呼救。"'
                },
                consequence: {
                    en: '🌐 Viral Impact: Millions watch live. It raises awareness instantly, but some criticize you for exploiting a victim\'s pain for views. It\'s a gray area.',
                    th: '🌐 ผลกระทบไวรัล: คนนับล้านดูสด มันสร้างความตระหนักได้ทันที แต่บางคนวิจารณ์ว่าคุณหาผลประโยชน์จากความเจ็บปวดของเหยื่อเพื่อยอดวิว มันเป็นพื้นที่สีเทา',
                    zh: '🌐 病毒式影响：数百万人直播观看。它立即引起了关注，但有些人批评你利用受害者的痛苦来博取眼球。这是一个灰色地带。'
                },
                stats: { competence: 35, ethics: 25, leadership: 30, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '🏃 Walk Away: "I can\'t handle this. It\'s too traumatic." You retreat to the safe zone to report from a distance.',
                    th: '🏃 เดินหนี: "ฉันรับมือไม่ไหว มันสะเทือนใจเกินไป" คุณถอยไปที่โซนปลอดภัยเพื่อรายงานข่าวจากระยะไกล',
                    zh: '🏃 走开："我受不了这个。太受创伤了。"你撤退到安全区进行远程报道。'
                },
                consequence: {
                    en: '📉 Dereliction of Duty: You miss the real story on the ground. Your report is generic and lacks emotion. Your editor questions your toughness for field work.',
                    th: '📉 ละเลยหน้าที่: คุณพลาดเรื่องราวที่แท้จริงในพื้นที่ รายงานของคุณธรรมดาและขาดอารมณ์ บรรณาธิการตั้งคำถามถึงความอดทนในการทำงานภาคสนามของคุณ',
                    zh: '📉 玩忽职守：你错过了现场的真实故事。你的报道平淡无奇，缺乏情感。你的编辑质疑你是否能在外勤工作中吃苦。'
                },
                stats: { competence: 0, ethics: 10, leadership: -20, innovation: 0 }
            }
        ]
    },
    {
        id: 'journalist_003',
        text: {
            en: '🕴️ The Tech Giant Cover-up: A trillion-dollar tech company is secretly harvesting illegal user data. They invite you for an exclusive interview with the CEO, likely to bribe or threaten you into silence about your investigation.',
            th: '🕴️ การปกปิดของยักษ์ใหญ่ไอที: บริษัทเทคโนโลยีมูลค่าล้านล้านดอลลาร์กำลังแอบเก็บข้อมูลผู้ใช้ที่ผิดกฎหมาย พวกเขาเชิญคุณสัมภาษณ์พิเศษกับซีอีโอ น่าจะเพื่อติดสินบนหรือข่มขู่ให้คุณเงียบเรื่องการสอบสวน',
            zh: '🕴️ 科技巨头的掩盖：一家万亿美元的科技公司正在秘密收集非法用户数据。他们邀请你独家采访CEO，很可能是为了贿赂或威胁你对调查保持沉默。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕵️ Wear a Wire: "I\'ll go, but I\'m recording everything secretly. If they try to bribe me, I\'ll have them on tape."',
                    th: '🕵️ แอบติดเครื่องดักฟัง: "ฉันจะไป แต่ฉันจะอัดเสียงทุกอย่างไว้ลับๆ ถ้าพวกเขาพยายามติดสินบน ฉันจะมีหลักฐาน"',
                    zh: '🕵️ 佩戴窃听器："我会去，但我会秘密录下一切。如果他们试图贿赂我，我就有录音为证。"'
                },
                consequence: {
                    en: '💥 Explosive Exposé! You catch them offering a bribe. The story destroys their stock value. However, recording without consent might be illegal, leading to lawsuits.',
                    th: '💥 การแฉที่รุนแรง! คุณจับได้ว่าพวกเขาเสนอสินบน ข่าวทำลายมูลค่าหุ้นของพวกเขา อย่างไรก็ตาม การบันทึกโดยไม่ได้รับความยินยอมอาจผิดกฎหมาย นำไปสู่การฟ้องร้อง',
                    zh: '💥 爆炸性曝光！你抓住了他们行贿的把柄。这篇报道摧毁了他们的股价。然而，未经同意录音可能是违法的，会导致诉讼。'
                },
                stats: { competence: 45, ethics: 30, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🚪 Refuse and Publish: "I don\'t need their spin. I represent the people. I\'ll publish what I have now and decline the meeting."',
                    th: '🚪 ปฏิเสธและเผยแพร่: "ฉันไม่ต้องการคำแก้ตัวของพวกเขา ฉันเป็นตัวแทนประชาชน ฉันจะเผยแพร่สิ่งที่ฉันมีตอนนี้และปฏิเสธการนัดพบ"',
                    zh: '🚪 拒绝并发布："我不需要他们的公关辞令。我代表人民。我会发布我现在掌握的资料并拒绝会面。"'
                },
                consequence: {
                    en: '⚖️ Solid Reporting: The story is strong, but lacks the company\'s direct comment. They deny everything and sue for libel. It becomes a long legal battle.',
                    th: '⚖️ การรายงานที่หนักแน่น: ข่าวมีน้ำหนัก แต่ขาดความเห็นโดยตรงจากบริษัท พวกเขาปฏิเสธทุกอย่างและฟ้องหมิ่นประมาท กลายเป็นการต่อสู้ทางกฎหมายที่ยาวนาน',
                    zh: '⚖️ 扎实的报道：故事很有力，但缺乏公司的直接评论。他们否认一切并起诉诽谤。这变成了一场漫长的法律战。'
                },
                stats: { competence: 35, ethics: 45, leadership: 35, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Conduct a Soft Interview: "I\'ll go and ask easy questions to gain their trust, then dig deeper later." Play the long game.',
                    th: '🤝 สัมภาษณ์แบบนุ่มนวล: "ฉันจะไปถามคำถามง่ายๆ เพื่อให้พวกเขาไว้ใจ แล้วค่อยขุดคุ้ยทีหลัง" เล่นเกมยาว',
                    zh: '🤝 进行软采访："我会去问一些简单的问题来赢得他们的信任，然后再深入挖掘。"放长线钓大鱼。'
                },
                consequence: {
                    en: '⏳ Lost Momentum: By the time you try to dig deeper, they\'ve covered their tracks. You got an exclusive, but it was fluff. The real story slipped away.',
                    th: '⏳ สูญเสียแรงส่ง: กว่าคุณจะพยายามขุดคุ้ย พวกเขาก็กลบเกลื่อนร่องรอยไปหมดแล้ว คุณได้ข่าวเอ็กซ์คลูซีฟ แต่มันกลวง เรื่องจริงหลุดลอยไป',
                    zh: '⏳ 失去势头：等你试图深入挖掘时，他们已经掩盖了踪迹。你得到了独家新闻，但是毫无价值。真正的故事溜走了。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '💵 Take the Bribe: "They offered $500k to kill the story. I have debts. No one will know." You delete your files.',
                    th: '💵 รับสินบน: "พวกเขาเสนอเงิน 5 แสนดอลลาร์ให้ปิดข่าว ฉันมีหนี้ ไม่มีใครรู้หรอก" คุณลบไฟล์ทิ้ง',
                    zh: '💵 收受贿赂："他们开价50万美元封杀这个故事。我有债务。没人会知道。"你删除了文件。'
                },
                consequence: {
                    en: '☠️ Game Over: You are rich but corrupted. Eventually, another journalist breaks the story and finds out you were paid off. You face jail time.',
                    th: '☠️ จบเกม: คุณรวยแต่คดโกง ในที่สุดนักข่าวคนอื่นก็เปิดโปงเรื่องนี้และรู้ว่าคุณถูกซื้อตัว คุณต้องติดคุก',
                    zh: '☠️ 游戏结束：你富有但腐败。最终，另一位记者爆出这个故事，并发现你收了钱。你面临牢狱之灾。'
                }
            }
        ]
    },
    {
        id: 'journalist_004',
        text: {
            en: '🎤 The Celebrity Breakdown: A beloved pop star has a mental breakdown during an interview with you. They start confessing to crimes and drug use on a live stream you initiated. The camera is rolling.',
            th: '🎤 การสติแตกของคนดัง: ป๊อปสตาร์ขวัญใจมหาชนเกิดอาการสติแตกทางจิตระหว่างสัมภาษณ์กับคุณ พวกเขาเริ่มสารภาพเรื่องอาชญากรรมและการใช้ยาเสพติดในไลฟ์สตรีมที่คุณเป็นคนเริ่ม กล้องกำลังถ่ายทอดสด',
            zh: '🎤 明星崩溃：一位深受喜爱的流行歌星在你采访时精神崩溃。他们在你发起的直播中开始承认犯罪和吸毒。摄像机正在拍摄。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎥 Keep Rolling: "This is the scoop of the decade! It\'s raw, unedited truth. The public needs to see the real them."',
                    th: '🎥 ถ่ายต่อไป: "นี่คือข่าวแห่งทศวรรษ! มันคือความจริงดิบๆ ที่ไม่ได้ตัดต่อ ประชาชนต้องเห็นตัวตนที่แท้จริงของพวกเขา"',
                    zh: '🎥 继续拍摄："这是十年来的独家新闻！这是原始的、未经编辑的真相。公众需要看到真实的他们。"'
                },
                consequence: {
                    en: '📈 Viral Explosion: The stream breaks the internet. You become famous. But the star attempts self-harm later, and you are blamed for exploiting a mental health crisis.',
                    th: '📈 ไวรัลระเบิด: สตรีมถล่มอินเทอร์เน็ต คุณโด่งดัง แต่ดาราพยายามทำร้ายตัวเองทีหลัง และคุณถูกตำหนิว่าหากินกับวิกฤตสุขภาพจิต',
                    zh: '📈 病毒式爆发：直播引爆了互联网。你成名了。但这位明星后来试图自残，你因利用心理健康危机而受到指责。'
                },
                stats: { competence: 40, ethics: 10, leadership: 10, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Cut the Feed: "Turn it off! Someone get them water. This is a medical emergency, not a show." You prioritize their dignity.',
                    th: '🛑 ตัดสัญญาณ: "ปิดเดี๋ยวนี้! ใครก็ได้เอาน้ำให้เขา นี่คือเหตุฉุกเฉินทางการแพทย์ ไม่ใช่โชว์" คุณให้ความสำคัญกับศักดิ์ศรีของพวกเขา',
                    zh: '🛑 切断信号："关掉它！给他们拿点水来。这是医疗紧急情况，不是表演。"你优先考虑他们的尊严。'
                },
                consequence: {
                    en: '🛡️ Respect Earned: The star\'s team is forever grateful. You miss the scandalous views, but gain exclusive access to them when they recover. A long-term win.',
                    th: '🛡️ ได้รับความเคารพ: ทีมงานของดาราซาบซึ้งใจตลอดไป คุณพลาดยอดวิวฉาวโฉ่ แต่ได้สิทธิ์เข้าถึงพิเศษเมื่อพวกเขาหายดี ชัยชนะระยะยาว',
                    zh: '🛡️ 赢得尊重：明星的团队永远感激不尽。你错过了丑闻带来的浏览量，但当他们康复后，你获得了独家采访权。长期的胜利。'
                },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📝 Summarize Later: "Cut the live feed but keep recording for our records. We will release a respectful text summary later."',
                    th: '📝 สรุปทีหลัง: "ตัดไลฟ์สดแต่บันทึกเทปไว้เป็นหลักฐาน เราจะเผยแพร่บทสรุปที่เป็นลายลักษณ์อักษรที่ให้เกียรติในภายหลัง"',
                    zh: '📝 稍后总结："切断直播，但继续录制以备存档。我们稍后会发布一份尊重的文字摘要。"'
                },
                consequence: {
                    en: '⚖️ Balanced Approach: You report the news without the voyeurism. It\'s seen as professional journalism. Moderate success, safe ethics.',
                    th: '⚖️ แนวทางที่สมดุล: คุณรายงานข่าวโดยไม่ละเมิดความเป็นส่วนตัว มันถูกมองว่าเป็นวารสารศาสตร์มืออาชีพ ความสำเร็จปานกลาง จริยธรรมปลอดภัย',
                    zh: '⚖️ 平衡的方法：你报道了新闻，但没有窥淫癖。这被视为专业的新闻报道。中等成功，道德安全。'
                },
                stats: { competence: 45, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '😈 Provoke More: "Ask questions that trigger them further. We need them to confess everything before they snap out of it."',
                    th: '😈 ยั่วยุเพิ่ม: "ถามคำถามที่กระตุ้นพวกเขาอีก เราต้องการให้พวกเขาสารภาพทุกอย่างก่อนที่จะได้สติ"',
                    zh: '😈 进一步挑衅："问一些更能刺激他们的问题。我们需要他们在清醒之前承认一切。"'
                },
                consequence: {
                    en: '📉 Public Outrage: The interview is seen as torture. Advertisers pull out of your network. You are fired for cruelty.',
                    th: '📉 ความโกรธแค้นของสาธารณชน: การสัมภาษณ์ถูกมองว่าเป็นการทรมาน ผู้ลงโฆษณาถอนตัวจากเครือข่ายของคุณ คุณถูกไล่ออกเพราะความโหดร้าย',
                    zh: '📉 公众愤怒：这次采访被视为折磨。广告商撤出你的网络。你因残忍而被解雇。'
                }
            }
        ]
    },
    {
        id: 'journalist_005',
        text: {
            en: '🌍 The War Zone Choice: You are embedded with a military unit in a conflict zone. You witness the unit accidentally kill civilians during a raid. The commander demands you delete the footage "for national security."',
            th: '🌍 ทางเลือกในโซนสงคราม: คุณฝังตัวอยู่กับหน่วยทหารในพื้นที่ขัดแย้ง คุณเห็นหน่วยฆ่าพลเรือนโดยไม่ตั้งใจระหว่างการบุก ผู้บัญชาการสั่งให้คุณลบฟุตเทจ "เพื่อความมั่นคงแห่งชาติ"',
            zh: '🌍 战区选择：你跟随一支军事部队深入冲突地区。你目睹了该部队在一次突袭中意外杀害平民。指挥官以"国家安全"为由要求你删除录像。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💾 Hide the Footage: "I say I deleted it, but I hide the memory card. I\'ll smuggle it out and publish it once I\'m safe."',
                    th: '💾 ซ่อนฟุตเทจ: "บอกว่าลบแล้ว แต่แอบซ่อนเมมโมรี่การ์ดไว้ ฉันจะลักลอบนำออกไปและเผยแพร่เมื่อปลอดภัย"',
                    zh: '💾 隐藏录像："我说我删了，但我把存储卡藏了起来。我会把它偷运出去，一旦安全就发布。"'
                },
                consequence: {
                    en: '🌐 International Scandal: The video proves war crimes. You are targeted by the military but win global acclaim for bravery.',
                    th: '🌐 เรื่องอื้อฉาวระดับโลก: วิดีโอพิสูจน์อาชญากรรมสงคราม คุณตกเป็นเป้าหมายของกองทัพแต่ได้รับเสียงชื่นชมทั่วโลกในความกล้าหาญ',
                    zh: '🌐 国际丑闻：这段视频证实了战争罪行。你被军方盯上，但因勇敢而赢得了全球赞誉。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🗑️ Delete It: "I rely on this unit for protection. If I cross them, I might \'accidentally\' get shot. It\'s not worth dying for."',
                    th: '🗑️ ลบมันทิ้ง: "ฉันต้องพึ่งหน่วยนี้เพื่อความปลอดภัย ถ้าฉันขัดใจพวกเขา ฉันอาจถูกยิง \'โดยอุบัติเหตุ\' ไม่คุ้มที่จะตาย"',
                    zh: '🗑️ 删除它："我依靠这支部队保护。如果我惹恼他们，我可能会\'意外\'中弹。不值得为此去死。"'
                },
                consequence: {
                    en: '🤐 Survival Mode: You survive the tour, but you know you covered up a crime. Your later reports feel like propaganda. The guilt lingers.',
                    th: '🤐 โหมดเอาตัวรอด: คุณรอดชีวิตจากภารกิจ แต่คุณรู้ว่าคุณปกปิดอาชญากรรม รายงานต่อมาของคุณดูเหมือนโฆษณาชวนเชื่อ ความรู้สึกผิดยังคงอยู่',
                    zh: '🤐 生存模式：你在这次任务中幸存下来，但你知道你掩盖了罪行。你后来的报道感觉像是在做宣传。愧疚感挥之不去。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Negotiate: "I won\'t publish the grisly details, but I must report that there were civilian casualties. Let\'s agree on the wording."',
                    th: '🤝 เจรจา: "ฉันจะไม่เผยแพร่รายละเอียดที่น่าสยดสยอง แต่ฉันต้องรายงานว่ามีพลเรือนบาดเจ็บล้มตาย มาตกลงเรื่องถ้อยคำกัน"',
                    zh: '🤝 谈判："我不会发布可怕的细节，但我必须报道有平民伤亡。让我们在措辞上达成一致。"'
                },
                consequence: {
                    en: '📰 Compromised Truth: The report comes out watered down. It mentions "collateral damage" vague enough to satisfy the army but inform the public partially.',
                    th: '📰 ความจริงที่ถูกประนีประนอม: รายงานออกมาแบบเจือจาง มันพูดถึง "ความเสียหายข้างเคียง" ที่คลุมเครือพอที่จะทำให้กองทัพพอใจ แต่ให้ข้อมูลประชาชนได้บางส่วน',
                    zh: '📰 被妥协的真相：报告被淡化了。它提到的"附带损害"足够含糊，既能满足军方，又能向公众透露部分信息。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '⚔️ Confront Commander: "This is a war crime! I\'m reporting you to the UN right now!" You scream at the armed soldiers.',
                    th: '⚔️ เผชิญหน้าผู้บัญชาการ: "นี่มันอาชญากรรมสงคราม! ฉันจะรายงานคุณต่อ UN เดี๋ยวนี้!" คุณตะโกนใส่ทหารติดอาวุธ',
                    zh: '⚔️ 对质指挥官："这是战争罪！我现在就向联合国举报你！"你对武装士兵大喊大叫。'
                },
                consequence: {
                    en: '⛔ Immediate Detainment: You are arrested, your equipment confiscated, and you are deported. You get no story and lose your access.',
                    th: '⛔ ถูกคุมขังทันที: คุณถูกจับกุม อุปกรณ์ถูกยึด และถูกเนรเทศ คุณไม่ได้ข่าวและเสียสิทธิ์การเข้าถึง',
                    zh: '⛔ 立即拘留：你被逮捕，设备被没收，并被驱逐出境。你没得到故事，也失去了采访权。'
                }
            }
        ]
    },
    {
        id: 'journalist_006',
        text: {
            en: '🤖 The AI Article: You are behind on a deadline for a major feature piece. A new AI tool can write the article for you in seconds, indistinguishable from your style. You are exhausted and stressed.',
            th: '🤖 บทความ AI: คุณกำลังจะส่งงานชิ้นสำคัญไม่ทันเส้นตาย เครื่องมือ AI ใหม่สามารถเขียนบทความให้คุณได้ในไม่กี่วินาที โดยแยกไม่ออกว่าเป็นสำนวนของคุณ คุณเหนื่อยล้าและเครียด',
            zh: '🤖 AI文章：你的一篇重要特稿快到截止日期了。一个新的AI工具可以在几秒钟内为你写出文章，风格和你的一模一样。你筋疲力尽，压力很大。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤖 Use AI Secretly: "I\'ll let it write the draft, edit it slightly, and submit it as mine. No one will know, and I get sleep."',
                    th: '🤖 ใช้ AI ลับๆ: "ให้มันเขียนร่าง แก้ไขนิดหน่อย แล้วส่งในนามฉัน ไม่มีใครรู้หรอก และฉันจะได้นอน"',
                    zh: '🤖 秘密使用AI："我会让它写初稿，稍作修改，然后以我的名义提交。没人会知道，我也能睡个觉。"'
                },
                consequence: {
                    en: '⚠️ Lucky Escape? The article is a hit. But unauthorized AI use is against policy. You live in fear of detection software flagging it later.',
                    th: '⚠️ โชคดีที่รอด? บทความดังระเบิด แต่การใช้ AI โดยไม่ได้รับอนุญาตผิดนโยบาย คุณต้องใช้ชีวิตด้วยความกลัวว่าซอฟต์แวร์ตรวจสอบจะจับได้ทีหลัง',
                    zh: '⚠️ 侥幸逃脱？文章大受欢迎。但未经授权使用AI是违反政策的。你生活在以后被检测软件标记的恐惧中。'
                },
                stats: { competence: 30, ethics: 10, leadership: 10, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '✍️ Power Through: "I write every word myself. I\'ll drink 5 coffees and pull an all-nighter. Authenticity matters."',
                    th: '✍️ กัดฟันทำ: "ฉันเขียนเองทุกคำ ฉันจะกินกาแฟ 5 แก้วและโต้รุ่ง ความแท้จริงสำคัญที่สุด"',
                    zh: '✍️ 坚持到底："每一个字我都自己写。我会喝5杯咖啡，通宵工作。真实性很重要。"'
                },
                consequence: {
                    en: '🏆 Hard-Earned Quality: The piece is brilliant and distinctly human. You are exhausted, but your integrity is intact. Your editor praises your voice.',
                    th: '🏆 คุณภาพที่แลกมาด้วยความลำบาก: ผลงานยอดเยี่ยมและมีความเป็นมนุษย์ชัดเจน คุณหมดแรง แต่ความซื่อสัตย์ยังครบถ้วน บรรณาธิการชื่นชมสำนวนของคุณ',
                    zh: '🏆 来之不易的质量：这篇文章才华横溢，充满人情味。你筋疲力尽，但你的正直完好无损。编辑称赞你的文笔。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Ask for Extension: "Ideally I\'d finish, but I need more time to do it right. I\'ll ask the editor to push the deadline."',
                    th: '🤝 ขอขยายเวลา: "ใจจริงฉันอยากทำให้เสร็จ แต่ฉันต้องการเวลาเพิ่มเพื่อทำให้ดี ฉันจะขอให้บรรณาธิการเลื่อนเส้นตาย"',
                    zh: '🤝 申请延期："理想情况下我会完成，但我需要更多时间来做好它。我会请求编辑推迟截止日期。"'
                },
                consequence: {
                    en: '📉 Professional Hit: The deadline is missed. The piece runs late, losing relevance. The editor marks you as unreliable for time-sensitive news.',
                    th: '📉 ผลกระทบทางอาชีพ: พลาดเส้นตาย บทความลงช้า ขาดความสดใหม่ บรรณาธิการหมายหัวว่าคุณเชื่อถือไม่ได้กับข่าวที่แข่งกับเวลา',
                    zh: '📉 职业打击：错过了截止日期。文章发布晚了，失去了时效性。编辑认为你在处理时效性新闻方面不可靠。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Use AI Transparenbly: "I\'ll use AI to structure it and disclose it. \'Assisted by AI tools for data synthesis.\' Honesty is the new policy."',
                    th: '🤝 ใช้ AI อย่างโปร่งใส: "ฉันจะใช้ AI วางโครงสร้างและเปิดเผยมัน \'ได้รับความช่วยเหลือจากเครื่องมือ AI ในการสังเคราะห์ข้อมูล\' ความซื่อสัตย์คือนโยบายใหม่"',
                    zh: '🤝 透明地使用AI："我会用AI来构建它并公开声明。\'由AI工具协助进行数据合成。\'诚实是新策略。"'
                },
                consequence: {
                    en: '💡 Modern Ethics: The editor is hesitant but accepts it as an experiment. Readers appreciate the transparency. You set a precedent for ethical AI use.',
                    th: '💡 จริยธรรมสมัยใหม่: บรรณาธิการลังเลแต่ยอมรับให้เป็นการทดลอง ผู้อ่านชื่นชมความโปร่งใส คุณสร้างบรรทัดฐานสำหรับการใช้ AI อย่างมีจริยธรรม',
                    zh: '💡 现代伦理：编辑很犹豫，但作为实验接受了。读者欣赏这种透明度。你为合乎道德的AI使用树立了先例。'
                },
                stats: { competence: 40, ethics: 45, leadership: 35, innovation: 50 }
            }
        ]
    },
    {
        id: 'journalist_007',
        text: {
            en: '💊 The Sponsored Health Myth: A major pharmaceutical company buys a full-page ad in your paper every week. They want you to write a "news" story claiming their vitamin supplement cures cancer, citing a flawed study.',
            th: '💊 ตำนานสุขภาพผู้สนับสนุน: บริษัทยาขนาดใหญ่ซื้อโฆษณาเต็มหน้าในหนังสือพิมพ์ของคุณทุกสัปดาห์ พวกเขาต้องการให้คุณเขียน "ข่าว" ที่อ้างว่าอาหารเสริมวิตามินของพวกเขารักษามะเร็งได้ โดยอ้างอิงการศึกษาที่มีข้อบกพร่อง',
            zh: '💊 赞助的健康神话：一家大型制药公司每周都在你的报纸上买整版广告。他们想让你写一篇"新闻"报道，引用一项有缺陷的研究，声称他们的维生素补充剂能治愈癌症。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Inspect and Reject: "This study is garbage. Assuming this is true kills people. I refuse, and I\'m investigating this company."',
                    th: '🚫 ตรวจสอบและปฏิเสธ: "การศึกษานี้มันขยะ การทึกทักว่าเป็นจริงจะฆ่าคนได้ ฉันปฏิเสธ และฉันจะสอบสวนบริษัทนี้"',
                    zh: '🚫 检查并拒绝："这项研究是垃圾。假设这是真的会害死人。我拒绝，而且我要调查这家公司。"'
                },
                consequence: {
                    en: '📉 Ad Revenue Lost: The company pulls their ads. Your paper loses money. Your publisher is angry, but medical organizations award you for preventing disinformation.',
                    th: '📉 สูญเสียรายได้โฆษณา: บริษัทถอนโฆษณา หนังสือพิมพ์คุณเสียรายได้ สำนักพิมพ์โกรธ แต่องค์กรการแพทย์มอบรางวัลให้คุณที่ป้องกันข้อมูลเท็จ',
                    zh: '📉 广告收入损失：该公司撤回了广告。你的报纸亏钱了。你的出版商很生气，但医疗组织因你防止虚假信息而奖励你。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Publish as Advertorial: "We\'ll mark it clearly as \'SPONSORED CONTENT\' in small print. We keep the money, and technically we didn\'t endorse it."',
                    th: '💰 ตีพิมพ์เป็นบทความโฆษณา: "เราจะระบุชัดเจนว่าเป็น \'เนื้อหาที่ได้รับการสนับสนุน\' ด้วยตัวอักษรเล็กๆ เราได้เงิน และทางเทคนิคเราไม่ได้รับรองมัน"',
                    zh: '💰 作为软文发布："我们会用小字清楚地标明它是\'赞助内容\'。我们保留了钱，而且严格来说我们没有认可它。"'
                },
                consequence: {
                    en: '🌫️ Blurred Lines: Readers get confused and trust the "cure." People stop conventional treatment. You are legally safe, but morally complicit in harm.',
                    th: '🌫️ เส้นที่เลือนราง: ผู้อ่านสับสนและเชื่อใน "ยาวิเศษ" คนหยุดการรักษาแผนปัจจุบัน คุณปลอดภัยทางกฎหมาย แต่มีส่วนร่วมในการทำร้ายผู้อื่นทางศีลธรรม',
                    zh: '🌫️ 模糊的界限：读者感到困惑并相信这种"疗法"。人们停止常规治疗。你在法律上是安全的，但在道德上是同谋。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '📝 Debunk It: "I\'ll write about the study, but interview experts who explain why it\'s wrong. Controversial but educational."',
                    th: '📝 หักล้างมัน: "ฉันจะเขียนเกี่ยวกับการศึกษานี้ แต่สัมภาษณ์ผู้เชี่ยวชาญที่อธิบายว่าทำไมมันถึงผิด เป็นประเด็นถกเถียงแต่ให้ความรู้"',
                    zh: '📝 揭穿它："我会写关于这项研究的文章，但会采访以此解释为什么它是错误的专家。有争议但有教育意义。"'
                },
                consequence: {
                    en: '🔥 Bridge Burned: The pharma company sues for defamation. The article is popular, but the legal headache is massive. You picked a fight with a giant.',
                    th: '🔥 เผาสะพาน: บริษัทยาฟ้องหมิ่นประมาท บทความได้รับความนิยม แต่เรื่องปวดหัวทางกฎหมายนั้นมหาศาล คุณหาเรื่องยักษ์ใหญ่',
                    zh: '🔥 自断后路：制药公司起诉诽谤。这篇文章很受欢迎，但法律上的麻烦是巨大的。你挑衅了一个巨人。'
                },
                stats: { competence: 45, ethics: 40, leadership: 30, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Justify It: "Who knows? Maybe it works. Why gatekeep hope? Ill write it positively." You suspend critical thinking.',
                    th: '🤷 หาข้ออ้าง: "ใครจะรู้? มันอาจจะได้ผล ทำไมต้องปิดกั้นความหวัง? ฉันจะเขียนในแง่บวก" คุณแขวนการคิดเชิงวิพากษ์ไว้ก่อน',
                    zh: '🤷 为其辩护："谁知道呢？也许它有效。为什么要阻碍希望？我会积极地写。"你暂停了批判性思维。'
                },
                consequence: {
                    en: '🤡 Quackery Promoter: You become known as a pseudoscience pusher. Serious scientists stop talking to you. Your reputation becomes tabloid-tier.',
                    th: '🤡 ผู้ส่งเสริมเรื่องไร้สาระ: คุณกลายเป็นที่รู้จักในฐานะผู้ผลักดันวิทยาศาสตร์เทียม นักวิทยาศาสตร์จริงจังเลิกคุยกับคุณ ชื่อเสียงคุณกลายเป็นระดับแท็บลอยด์',
                    zh: '🤡 江湖医术推销员：你因为推销伪科学而出名。严肃的科学家不再理你。你的声誉变成了小报级别。'
                }
            }
        ]
    },
    {
        id: 'journalist_008',
        text: {
            en: '👙 The Paparazzi Shift: Sales are down. Your boss orders you to stalk a famous actress who just had a baby, demanding a "first look" photo of the child. It pays a huge bonus.',
            th: '👙 กะปาปารัสซี่: ยอดขายตก เจ้านายสั่งให้คุณติดตามดาราสาวชื่อดังที่เพิ่งคลอดลูก ต้องการภาพ "โฉมแรก" ของเด็ก มันให้โบนัสก้อนโต',
            zh: '👙 狗仔队轮班：销量下降。你的老板命令你跟踪一位刚生完孩子的著名女演员，要求拍到孩子"第一眼 "的照片。这有一笔巨额奖金。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📸 Get the Shot: "I climb a tree and use a telephoto lens. It\'s public interest because she is famous. I need that bonus."',
                    th: '📸 ถ่ายให้ได้: "ฉันปีนต้นไม้และใช้เลนส์เทเลโฟโต้ มันเป็นประโยชน์สาธารณะเพราะเธอโด่งดัง ฉันต้องการโบนัสนั่น"',
                    zh: '📸 拍到照片："我爬上一棵树，用长焦镜头。因为她很有名，所以这关乎公共利益。我需要那笔奖金。"'
                },
                consequence: {
                    en: '💰 Rich but Hated: The photo sells for six figures. The actress sues and publicly shames you. You have money, but zero respect from serious journalists.',
                    th: '💰 รวยแต่ถูกเกลียด: ภาพขายได้เลขหกหลัก ดาราสาวฟ้องและประจานคุณต่อหน้าสาธารณะ คุณมีเงิน แต่ไม่ได้รับความเคารพจากนักข่าวจริงจัง',
                    zh: '💰 富有但被讨厌：这张照片卖了六位数。女演员起诉并公开羞辱你。你有钱，但得不到严肃记者的尊重。'
                },
                stats: { competence: 30, ethics: 10, leadership: 10, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Refuse the Assignment: "I am a journalist, not a stalker. I won\'t violate a child\'s privacy. Fire me if you want."',
                    th: '🛑 ปฏิเสธงาน: "ฉันเป็นนักข่าว ไม่ใช่นักล่าดารา ฉันจะไม่ละเมิดความเป็นส่วนตัวของเด็ก ไล่ฉันออกเลยถ้าต้องการ"',
                    zh: '🛑 拒绝任务："我是记者，不是跟踪狂。我不会侵犯儿童的隐私。如果你想的话，就解雇我吧。"'
                },
                consequence: {
                    en: '📉 Ethical Stand: You are suspended for insubordination. But you write an op-ed about privacy that goes viral. You might lose your job, but you gain a following.',
                    th: '📉 จุดยืนทางจริยธรรม: คุณถูกพักงานฐานขัดคำสั่ง แต่คุณเขียนบทความเห็นต่างเกี่ยวกับความเป็นส่วนตัวซึ่งกลายเป็นไวรัล คุณอาจตกงาน แต่ได้ฐานแฟนคลับ',
                    zh: '📉 道德立场：你因不服从命令而在停职。但你写了一篇关于隐私的专栏文章，并在网上疯传。你可能会失去工作，但你会赢得追随者。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Negotiate Access: "I reach out to her agent. We offer a respectful, controlled photoshoot in exchange for an exclusive interview. Win-win."',
                    th: '🤝 เจรจาการเข้าถึง: "ฉันติดต่อเอเจนต์ของเธอ เราเสนอการถ่ายภาพที่ให้เกียรติและควบคุมได้ แลกกับการสัมภาษณ์พิเศษ วิน-วิน"',
                    zh: '🤝 协商访问："我联系她的经纪人。我们提供尊重、受控的拍摄，通过换取独家采访。双赢。"'
                },
                consequence: {
                    en: '🏆 Professional Compromise: The actress agrees because she controls the narrative. You get the scoop legally and respectfully. Your boss is happy.',
                    th: '🏆 การประนีประนอมอย่างมืออาชีพ: ดาราสาวยอมรับเพราะเธอคุมเรื่องราวได้ คุณได้ข่าวอย่างถูกกฎหมายและให้เกียรติ เจ้านายของคุณมีความสุข',
                    zh: '🏆 专业妥协：女演员同意了，因为她控制了叙述。你合法且尊重地得到了独家新闻。你的老板很高兴。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Fake Justification: "I\'ll camp out but say I was investigating a burglary nearby and \'happened\' to see them. Plausible deniability."',
                    th: '🕵️ ข้ออ้างปลอม: "ฉันจะไปเฝ้าแต่บอกว่ากำลังสืบสวนการโจรกรรมแถวนั้นแล้ว \'บังเอิญ\' เห็นพวกเขา ปฏิเสธความรับผิดชอบได้"',
                    zh: '🕵️ 虚假理由："我会去蹲点，但说我当时正在调查附近的一起入室盗窃案，\'碰巧\'看到了他们。合理的推诿。"'
                },
                consequence: {
                    en: '🤥 Thin Ice: You get the photo, but no one believes your excuse. You are labeled as sleazy and dishonest. Valid journalism becomes harder for you.',
                    th: '🤥 น้ำแข็งบาง: คุณได้ภาพ แต่ไม่มีใครเชื่อข้อแก้ตัวของคุณ คุณถูกตีตราว่าสกปรกและไม่ซื่อสัตย์ การทำข่าวที่ถูกต้องยากขึ้นสำหรับคุณ',
                    zh: '🤥 如履薄冰：你拍到了照片，但没人相信你的借口。你被贴上了低俗和不诚实的标签。正当的新闻报道对你来说变得更加困难。'
                }
            }
        ]
    },
    {
        id: 'journalist_009',
        text: {
            en: '🎤 The Dictator\'s Interview: A ruthless dictator grants you an interview. He is known for killing journalists who ask tough questions. If you are too soft, you are his propaganda tool. If you are too hard, you might not leave.',
            th: '🎤 การสัมภาษณ์เผด็จการ: เผด็จการผู้โหดเหี้ยมให้สัมภาษณ์คุณ เขาขึ้นชื่อเรื่องการฆ่านักข่าวที่ถามคำถามยากๆ หากคุณนุ่มนวลเกินไป คุณจะกลายเป็นเครื่องมือโฆษณาชวนเชื่อของเขา หากคุณแข็งกร้าวเกินไป คุณอาจไม่ได้กลับออกมา',
            zh: '🎤 独裁者的采访：一位冷酷无情的独裁者接受了你的采访。他以杀害提出尖锐问题的记者而闻名。如果你太软弱，你就成了他的宣传工具。如果你太强硬，你可能无法离开。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🦁 Go Hard: "Ask about the mass graves and political prisoners immediately. I\'d rather die a journalist than live as a puppet."',
                    th: '🦁 ลุยแหลก: "ถามเรื่องหลุมศพหมู่และนักโทษการเมืองทันที ฉันยอมตายในฐานะนักข่าวดีกว่าอยู่อย่างหุ่นเชิด"',
                    zh: '🦁 强硬："立即询问万人坑和政治犯的情况。我宁愿作为一名记者死去，也不愿作为傀儡活着。"'
                },
                consequence: {
                    en: '☠️ Dangerous Truth: The camera cuts. You are detained for "questioning" for 3 days. You release the transcript later. You are a global icon of freedom.',
                    th: '☠️ ความจริงที่อันตราย: กล้องตัดภาพ คุณถูกคุมขังเพื่อ "สอบปากคำ" 3 วัน คุณเผยแพร่บทสัมภาษณ์ทีหลัง คุณเป็นไอคอนระดับโลกแห่งเสรีภาพ',
                    zh: '☠️ 危险的真相：镜头切断了。你被扣留"审问"了3天。你后来发布了文字记录。你是全球自由的偶像。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '😽 Fluff Piece: "Ask about his love for dogs and infrastructure projects. Stroke his ego to ensure my safety and future access."',
                    th: '😽 บทความอวย: "ถามเรื่องความรักสุนัขและโครงการโครงสร้างพื้นฐานของเขา เอาใจอีโก้เขาเพื่อความปลอดภัยและการเข้าถึงในอนาคต"',
                    zh: '😽 吹捧文章："问问他对狗的热爱和基础设施项目。抚慰他的自尊心，以确保我的安全和未来的采访权。"'
                },
                consequence: {
                    en: '🤡 Followed tool: The interview airs on state TV. You are mocked internationally as a shill. You survive, but your career is effectively dead in free countries.',
                    th: '🤡 เครื่องมือผู้ตาม: บทสัมภาษณ์ออกอากาศทางทีวีรัฐ คุณถูกล้อเลียนในระดับนานาชาติว่าเป็นหน้าม้า คุณรอดมาได้ แต่อาชีพของคุณตายสนิทในประเทศเสรี',
                    zh: '🤡 随从工具：采访在国家电视台播出。你在国际上被嘲笑为托儿。你活了下来，但你的职业生涯在自由国家实际上已经结束了。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🐍 Subtle Subversion: "Ask seemingly innocent questions that reveal his contradictions when analyzed. \'If the economy is strong, why is bread price controlled?\'"',
                    th: '🐍 การบ่อนทำลายแบบแนบเนียน: "ถามคำถามที่ดูเหมือนไร้เดียงสาแต่เปิดเผยความขัดแย้งของเขาเมื่อวิเคราะห์ \'ถ้าเศรษฐกิจดี ทำไมต้องควบคุมราคาขนมปัง?\'"',
                    zh: '🐍 微妙的颠覆："问一些看似无辜的问题，但在分析时会揭示他的矛盾。\'如果经济强劲，为什么要控制面包价格？\'"'
                },
                consequence: {
                    en: '🧠 Intellectual Win: He answers confidently, missing the trap. Smart readers pick up on the exposure. You stay safe while doing your job effectively.',
                    th: '🧠 ชัยชนะทางปัญญา: เขาตอบอย่างมั่นใจโดยไม่รู้ว่าติดกับ ผู้อ่านที่ฉลาดจะจับสังเกตการเปิดโปงได้ คุณปลอดภัยในขณะที่ทำหน้าที่ได้อย่างมีประสิทธิภาพ',
                    zh: '🧠 智力胜利：他自信地回答，没发现陷阱。聪明的读者会注意到曝光的内容。你在有效完成工作的同时保持安全。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🏃 Cancel Last Minute: "Claim food poisoning and fly home. The risk is too high. I won\'t give him a platform."',
                    th: '🏃 ยกเลิกนาทีสุดท้าย: "อ้างว่าอาหารเป็นพิษแล้วบินกลับบ้าน ความเสี่ยงสูงเกินไป ฉันจะไม่ให้พื้นที่สื่อกับเขา"',
                    zh: '🏃 最后一刻取消："声称食物中毒并飞回家。风险太大了。我不会给他平台。"'
                },
                consequence: {
                    en: '🛡️ Safe but Silent: You avoid the dilemma entirely. No story, no danger. Critics say you are a coward, but you are alive.',
                    th: '🛡️ ปลอดภัยแต่เงียบงัน: คุณหลีกเลี่ยงสถานการณ์กลืนไม่เข้าคายไม่ออกโดยสิ้นเชิง ไม่มีข่าว ไม่มีอันตราย นักวิจารณ์บอกว่าคุณขี้ขลาด แต่คุณยังมีชีวิตอยู่',
                    zh: '🛡️ 安全但沉默：你完全避免了进退两难的境地。没有故事，没有危险。批评者说你是懦夫，但你活着。'
                }
            }
        ]
    },
    {
        id: 'journalist_010',
        text: {
            en: '🌡️ The Climate Data Leak: A scientist gives you raw data showing that climate change is accelerating 10x faster than thought. Publishing it causes global panic and stock market crashes. Not publishing keeps people ignorant.',
            th: '🌡️ ข้อมูลภูมิอากาศรั่วไหล: นักวิทยาศาสตร์ให้ข้อมูลดิบแก่คุณที่แสดงว่าการเปลี่ยนแปลงสภาพภูมิอากาศกำลังเร่งตัวเร็วขึ้น 10 เท่าจากที่คิด การเผยแพร่จะทำให้เกิดความตื่นตระหนกทั่วโลกและตลาดหุ้นพังพินาศ การไม่เผยแพร่ทำให้ผู้คนไม่รู้เรื่อง',
            zh: '🌡️ 气候数据泄露：一位科学家向你提供了原始数据，显示气候变化的速度比预想的快10倍。发布这些数据会引起全球恐慌和股市崩盘。不发布会让人们处于无知状态。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Publish Raw: "The world is on fire. Panic is the appropriate reaction. Print it all, bold headline."',
                    th: '📢 เผยแพร่ดิบๆ: "โลกกำลังลุกเป็นไฟ ความตื่นตระหนกคือปฏิกิริยาที่เหมาะสม พิมพ์ทั้งหมด พาดหัวตัวหนา"',
                    zh: '📢 发布原始数据："世界着火了。恐慌是恰当的反应。全部印出来，用粗体标题。"'
                },
                consequence: {
                    en: '📉 Chaos and Action: Markets crash, riots happen. But governments are forced to pass radical green laws overnight. You caused chaos to save the future.',
                    th: '📉 ความโกลาหลและการกระทำ: ตลาดพัง เกิดจลาจล แต่รัฐบาลถูกบีบให้ผ่านกฎหมายสีเขียวสุดขั้วในชั่วข้ามคืน คุณสร้างความโกลาหลเพื่อรักษาอนาคต',
                    zh: '📉 混乱和行动：市场崩盘，暴乱发生。但各国政府被迫在一夜之间通过激进的绿色法律。你制造了混乱以拯救未来。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '📝 Contextualize Heavily: "We publish, but with calm expert analysis explaining how we can fix it. Don\'t monitor panic, monitor action."',
                    th: '📝 ให้บริบทอย่างหนัก: "เราเผยแพร่ แต่พร้อมบทวิเคราะห์ของผู้เชี่ยวชาญที่สงบนิ่งซึ่งอธิบายว่าเราจะแก้ไขได้อย่างไร อย่าเฝ้าดูความตื่นตระหนก เฝ้าดูการกระทำ"',
                    zh: '📝 重点通过背景解读："我们发布，但附上冷静的专家分析，解释我们如何解决这个问题。不要监控恐慌，要监控行动。"'
                },
                consequence: {
                    en: '⚖️ Responsible Impact: People are scared but motivated. The markets dip but recover. You are praised for clear, actionable science communication.',
                    th: '⚖️ ผลกระทบที่มีความรับผิดชอบ: ผู้คนหวาดกลัวแต่มีแรงจูงใจ ตลาดร่วงแต่ฟื้นตัว คุณได้รับคำชมสำหรับการสื่อสารวิทยาศาสตร์ที่ชัดเจนและปฏิบัติได้จริง',
                    zh: '⚖️ 负责任的影响：人们很害怕，但有动力。市场下跌但恢复了。你因清晰、可操作的科学传播而受到称赞。'
                },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🔒 Sit on it: "Society isn\'t ready. I\'ll leak this to policy makers privately but keep it out of the news cycle until they have a plan."',
                    th: '🔒 นั่งทับไว้: "สังคมยังไม่พร้อม ฉันจะปล่อยข้อมูลนี้ให้ผู้กำหนดนโยบายเป็นการส่วนตัวแต่เก็บให้ห่างจากวงจรข่าวจนกว่าพวกเขาจะมีแผน"',
                    zh: '🔒 压下不论："社会还没准备好。我会私下把这件事透露给决策者，但在他们有计划之前，不让它进入新闻周期。"'
                },
                consequence: {
                    en: '🕸️ Gatekeeper Fail: Policy makers bury it to protect profits. Nothing changes. You held the key to survival and hid it. Regret consumes you.',
                    th: '🕸️ ผู้เฝ้าประตูที่ล้มเหลว: ผู้กำหนดนโยบายฝังมันไว้เพื่อปกป้องผลกำไร ไม่มีอะไรเปลี่ยนแปลง คุณถือกุญแจสู่การอยู่รอดแต่ซ่อนมันไว้ ความเสียใจกัดกินคุณ',
                    zh: '🕸️ 看门人失败：决策者为了保护利润而将其掩埋。没有任何改变。你掌握着生存的钥匙却把它藏了起来。后悔吞噬了你。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Soften the Numbers: "I\'ll report it, but say it\'s \'2x faster\' instead of 10x. Enough to warn, not enough to break society."',
                    th: '📉 ลดตัวเลขลง: "ฉันจะรายงาน แต่บอกว่า \'เร็วขึ้น 2 เท่า\' แทนที่จะเป็น 10 เท่า พอที่จะเตือน ไม่พอที่จะทำลายสังคม"',
                    zh: '📉 淡化数字："我会报道，但说是\'快2倍\'而不是10倍。足以以此警告，不足以破坏社会。"'
                },
                consequence: {
                    en: '🤥 Noble Lie? Adaptation is too slow because the urgency is understated. When the real effects hit, people blame credibility of media. You failed.',
                    th: '🤥 คำโกหกที่สูงส่ง? การปรับตัวช้าเกินไปเพราะความเร่งด่วนถูกประเมินต่ำไป เมื่อผลกระทบจริงเกิดขึ้น ผู้คนโทษความน่าเชื่อถือของสื่อ คุณล้มเหลว',

                    zh: '🤥 善意的谎言？适应太慢，因为紧迫性被低估了。当真正的后果袭来时，人们怪罪媒体的公信力。你失败了。'
                }
            }
        ]
    },
    {
        id: 'journalist_011',
        text: {
            en: '🗳️ The Local Election: You find evidence that the incumbent mayor, who is beloved and has done great things for the city, rigged the voting machines to win by a landslide. If you expose him, a corrupt opposition leader will likely take over.',
            th: '🗳️ การเลือกตั้งท้องถิ่น: คุณพบหลักฐานว่านายกเทศมนตรีคนปัจจุบัน ซึ่งเป็นที่รักและทำประโยชน์มากมายให้เมือง โกงเครื่องลงคะแนนเพื่อชนะอย่างถล่มทลาย หากคุณเปิดโปงเขา ผู้นำฝ่ายค้านที่ทุจริตน่าจะเข้ามารับตำแหน่งแทน',
            zh: '🗳️ 地方选举：你发现证据表明，深受爱戴且为城市做出巨大贡献的现任市长操纵投票机以获得压倒性胜利。如果你揭露他，一个腐败的反对派领导人很可能会接管。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Expose the Rigging: "Democracy is non-negotiable. I publish the proof. A benevolent cheater is still a cheater."',
                    th: '📢 เปิดโปงการโกง: "ประชาธิปไตยต่อรองไม่ได้ ฉันเผยแพร่หลักฐาน คนโกงที่มีเมตตาก็ยังเป็นคนโกง"',
                    zh: '📢 揭露舞弊："民主是没有商量余地的。我发布证据。一个仁慈的骗子仍然是个骗子。"'
                },
                consequence: {
                    en: '🏛️ Political Chaos: The mayor resigns in disgrace. The corrupt opponent wins and ruins the city. People blame you for the decline.',
                    th: '🏛️ ความโกลาหลทางการเมือง: นายกเทศมนตรีลาออกอย่างอัปยศ คู่แข่งที่ทุจริตชนะและทำลายเมือง ผู้คนโทษคุณที่เป็นต้นเหตุของความตกต่ำ',
                    zh: '🏛️ 政治混乱：市长在耻辱中辞职。腐败的对手获胜并毁了这座城市。人们把衰退归咎于你。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Bury the Story: "The city is thriving. Why ruin it? I destroy the evidence for the greater good of the community."',
                    th: '🤫 ฝังเรื่องราว: "เมืองกำลังเจริญรุ่งเรือง จะทำลายมันทำไม? ฉันทำลายหลักฐานเพื่อผลประโยชน์ส่วนรวมของชุมชน"',
                    zh: '🤫 掩盖故事："城市正在蓬勃发展。为什么要毁了它？为了社区的更大利益，即使我销毁证据。"'
                },
                consequence: {
                    en: '🤐 Secret Kingmaker: The mayor stays and the city prospers. But you own the mayor now. He knows you know. You leverage this for other scoops.',
                    th: '🤐 ผู้สร้างกษัตริย์ลับ: นายกเทศมนตรียังอยู่และเมืองก็เจริญรุ่งเรือง แต่ตอนนี้คุณเป็นเจ้าของนายกฯ เขารู้ว่าคุณรู้ คุณใช้สิ่งนี้เพื่อแลกกับข่าวอื่น',
                    zh: '🤐 秘密造王者：市长留任，城市繁荣。但你现在控制了市长。他知道你知道。你利用这一点来获取其他独家新闻。'
                },
                stats: { competence: 40, ethics: 10, leadership: 30, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '✉️ Blackmail for Reform: "I confront the mayor privately. \'Resign at the end of this term and fix the machines, or I publish.\' Forced retirement."',
                    th: '✉️ แบล็กเมล์เพื่อการปฏิรูป: "ฉันเผชิญหน้ากับนายกเทศมนตรีเป็นการส่วนตัว \'ลาออกเมื่อจบวาระนี้และซ่อมเครื่องลงคะแนน ไม่งั้นฉันเผยแพร่\' บังคับให้เกษียณ"',
                    zh: '✉️ 勒索改革："我私下与市长对质。\'在这个任期结束时辞职并修理机器，否则我就发布。\'被迫退休。"'
                },
                consequence: {
                    en: '♟️ Shadow Politics: He agrees. Democracy is quietly restored without chaos. You played god, but it worked.',
                    th: '♟️ การเมืองเงา: เขาตกลง ประชาธิปไตยได้รับการฟื้นฟูอย่างเงียบๆ โดยไม่มีความวุ่นวาย คุณเล่นบทพระเจ้า แต่มันได้ผล',
                    zh: '♟️ 影子政治：他同意了。民主在没有混乱的情况下悄然恢复。你扮演了上帝，但这很有效。'
                },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Anonymous Leak: "I leak the data to a rival blog. They take the heat for destroying the mayor, I keep my hands clean."',
                    th: '🕵️ ปล่อยข่าวรั่วไหลโดยไม่ระบุชื่อ: "ฉันปล่อยข้อมูลให้บล็อกคู่แข่ง พวกเขารับหน้าเรื่องทำลายนายกฯ ส่วนฉันมือสะอาด"',
                    zh: '🕵️ 匿名泄露："我把数据泄露给竞争对手的博客。他们因摧毁市长而受到抨击，我保持清白。"'
                },
                consequence: {
                    en: '🔥 Proxy War: The rigging is exposed, but the rival blog gets sued into oblivion. You watched a colleague fall for your story.',
                    th: '🔥 สงครามตัวแทน: การโกงถูกเปิดโปง แต่บล็อกคู่แข่งถูกฟ้องจนล้มละลาย คุณมองดูเพื่อนร่วมงานล้มลงเพราะข่าวของคุณ',
                    zh: '🔥 代理人战争：舞弊行为被曝光，但竞争对手的博客被起诉至湮没。你看着同行因你的故事而倒下。'
                }
            }
        ]
    },
    {
        id: 'journalist_012',
        text: {
            en: '🛶 The Refugee Crisis: You are on a coast guard boat filming a rescue. The boat is full. You see a family in the water begging for help. The captain says "If we stop, we might capsize. We have to keep moving."',
            th: '🛶 วิกฤตผู้ลี้ภัย: คุณอยู่บนเรือยามฝั่งกำลังถ่ายทำภารกิจกู้ภัย เรือเต็มแล้ว คุณเห็นครอบครัวหนึ่งในน้ำร้องขอความช่วยเหลือ กัปตันบอกว่า "ถ้าเราหยุด เราอาจพลิกคว่ำ เราต้องไปต่อ"',
            zh: '🛶 难民危机：你在一艘海岸警卫队的船上拍摄救援过程。船满了。你看到一家人在水里求救。船长说："如果我们停下来，可能会翻船。我们必须继续前进。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎥 Film the Tragedy: "This horror needs to be seen. I zoom in on their faces as we leave them. It will shock the world into action."',
                    th: '🎥 ถ่ายทำโศกนาฏกรรม: "ความสยดสยองนี้ต้องมีคนเห็น ฉันซูมไปที่หน้าพวกเขาขณะที่เราจากไป มันจะช็อกโลกให้เกิดการกระทำ"',
                    zh: '🎥 拍摄悲剧："这种恐怖需要被看到。当我们离开他们时，我放大他们的脸。这将震惊世界并采取行动。"'
                },
                consequence: {
                    en: '🌍 Heartbreaking Viral: The footage is devastating. Policy changes, but you are haunted by their screams. You profited from death.',
                    th: '🌍 ไวรัลที่น่าใจหาย: ฟุตเทจนั้นทำลายล้างจิตใจ นโยบายเปลี่ยนแปลง แต่คุณถูกหลอกหลอนด้วยเสียงกรีดร้องของพวกเขา คุณได้ประโยชน์จากความตาย',
                    zh: '🌍 令人心碎的病毒式传播：这段录像具有毁灭性。政策改变了，但你被他们的尖叫声所困扰。你从死亡中获利。'
                },
                stats: { competence: 50, ethics: 10, leadership: 20, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '⚔️ Mutiny: "Stop the boat! Throw equipment overboard to make weight! I won\'t let them die!" You physically intervene.',
                    th: '⚔️ ก่อกบฏ: "หยุดเรือ! โยนอุปกรณ์ทิ้งเพื่อลดน้ำหนัก! ฉันจะไม่ยอมให้พวกเขาตาย!" คุณเข้าขัดขวางทางกายภาพ',
                    zh: '⚔️ 兵变："停船！把装备扔下海以减轻重量！我不会让他们死的！"你进行身体干预。'
                },
                consequence: {
                    en: '⚖️ Heroic Crime: You save the family. But you are arrested for interfering with an official operation. You lost your cameras, but saved souls.',
                    th: '⚖️ อาชญากรรมเยี่ยงวีรบุรุษ: คุณช่วยครอบครัวนั้นได้ แต่คุณถูกจับกุมฐานขัดขวางการปฏิบัติงานของเจ้าหน้าที่ คุณเสียกล้อง แต่ช่วยชีวิตคน',
                    zh: '⚖️ 英雄般的犯罪：你救了这家人。但你因干扰公务而被捕。你失去了相机，但拯救了灵魂。'
                },
                stats: { competence: 30, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '📢 Broadcast SOS: "I use my satellite phone to broadcast our coordinates live, begging any nearby vessel to help. \'Mayday, family in water.\'"',
                    th: '📢 ออกอากาศ SOS: "ฉันใช้โทรศัพท์ดาวเทียมถ่ายทอดสดพิกัดของเรา ขอร้องให้เรือในบริเวณใกล้เคียงช่วยเหลือ \'เมย์เดย์ มีครอบครัวตกน้ำ\'"',
                    zh: '📢 广播求救信号："我用卫星电话直播我们的坐标，恳求附近的任何船只提供帮助。\'求救，有人落水。\'"'
                },
                consequence: {
                    en: '🤝 Miracle Rescue: A private yacht hears you and picks them up. You coordinated a rescue without endangering your boat. Smart thinking.',
                    th: '🤝 การกู้ภัยปาฏิหาริย์: เรือยอทช์ส่วนตัวได้ยินและไปรับพวกเขา คุณประสานงานการกู้ภัยโดยไม่ทำให้เรือของคุณตกอยู่ในอันตราย ความคิดที่ชาญฉลาด',
                    zh: '🤝 奇迹般的救援：一艘私人游艇听到了你的声音并救起了他们。你在没有危及你的船的情况下协调了救援。聪明的想法。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🙈 Look Away: "The captain knows best. I turn the camera off and go below deck. I can\'t watch."',
                    th: '🙈 หันหน้าหนี: "กัปตันรู้ดีที่สุด ฉันปิดกล้องและลงไปใต้ท้องเรือ ฉันดูไม่ได้"',
                    zh: '🙈 视而不见："船长最清楚。我关掉相机，走到甲板下面。我看不下去。"'
                },
                consequence: {
                    en: '📉 Cowardice: You survive, but you failed to witness. You have no story, just shame. Why are you even a journalist?',
                    th: '📉 ความขี้ขลาด: คุณรอดมาได้ แต่คุณล้มเหลวในการเป็นพยาน คุณไม่มีข่าว มีแต่ความละอาย คุณเป็นนักข่าวไปทำไม?',
                    zh: '📉 懦弱：你活下来了，但你没能见证。你没有故事，只有羞耻。你为什么还要当记者？'
                }
            }
        ]
    },
    {
        id: 'journalist_013',
        text: {
            en: '📱 The Influencer Fake: A top Gen-Z influencer with millions of followers is secretly using child labor to make their "sustainable" clothing line. exposure will ruin them, but their fans are vicious and will doxx you.',
            th: '📱 อินฟลูเอนเซอร์จอมปลอม: อินฟลูเอนเซอร์ Gen-Z ระดับท็อปที่มีผู้ติดตามหลายล้านคนกำลังแอบใช้แรงงานเด็กทำเสื้อผ้าสาย "ยั่งยืน" ของตน การเปิดโปงจะทำลายพวกเขา แต่แฟนคลับพวกเขานั้นร้ายกาจและจะขุดคุ้ยข้อมูลส่วนตัวของคุณ',
            zh: '📱 网红造假：一位拥有数百万粉丝的顶级Z世代网红正秘密使用童工生产他们的"可持续"服装系列。曝光会毁了他们，但他们的粉丝很恶毒，会人肉搜索你。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💣 Drop the Bomb: "Child labor is a crime. I publish everything with photos. Bring on the trolls. Truth scares them."',
                    th: '💣 ทิ้งระเบิด: "แรงงานเด็กคืออาชญากรรม ฉันเผยแพร่ทุกอย่างพร้อมรูปถ่าย เข้ามาเลยพวกเกรียน ความจริงทำให้พวกเขากลัว"',
                    zh: '💣 投下炸弹："童工是犯罪。我发布所有带照片的内容。让喷子们来吧。真相让他们害怕。"'
                },
                consequence: {
                    en: '🛡️ Internet War: The influencer is cancelled. But you are doxxed, your family threatened. You need police protection for a month.',
                    th: '🛡️ สงครามอินเทอร์เน็ต: อินฟลูเอนเซอร์ถูกแบน แต่คุณถูกขุดประวัติ ครอบครัวถูกขู่ คุณต้องให้ตำรวจคุ้มกันเป็นเดือน',
                    zh: '🛡️ 网络战：这位网红被封杀了。但你被人肉搜索，家人受到威胁。你需要警察保护一个月。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Settlement Offer: "I contact their PR team. \'Change your factory to ethical ones immediately and donate 50% profits, or I publish.\'"',
                    th: '💰 ข้อเสนอไกล่เกลี่ย: "ฉันติดต่อทีม PR ของเขา \'เปลี่ยนโรงงานให้ถูกจริยธรรมเดี๋ยวนี้และบริจาคกำไร 50% หรือไม่งั้นฉันเผยแพร่\'"',
                    zh: '💰 和解提议："我联系他们的公关团队。\'立即将工厂改为合乎道德的工厂并捐赠50%的利润，否则我就发布。\'"'
                },
                consequence: {
                    en: '🤝 Forced Change: They comply out of fear. You fixed the problem without the public drama. The kids are safe. You are a silent guardian.',
                    th: '🤝 การเปลี่ยนแปลงที่ถูกบังคับ: พวกเขายอมทำตามเพราะกลัว คุณแก้ปัญหาโดยไม่ต้องมีดราม่าสาธารณะ เด็กๆ ปลอดภัย คุณคือผู้พิทักษ์เงียบ',
                    zh: '🤝 被迫做出改变：他们因恐惧而照办。你在没有公众闹剧的情况下解决了问题。孩子们是安全的。你是一个沉默的守护者。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Anonymous Doc Dump: "I dump the files on a forum anonymously. Let the internet detectives piece it together. I stay safe."',
                    th: '🕵️ ทิ้งเอกสารนิรนาม: "ฉันทิ้งไฟล์ลงในบอร์ดสนทนาแบบนิรนาม ให้นักสืบโซเชียลปะติดปะต่อเอาเอง ฉันปลอดภัย"',
                    zh: '🕵️ 匿名文档转储："我把文件匿名扔在论坛上。让互联网侦探去拼凑吧。我保持安全。"'
                },
                consequence: {
                    en: '🌪️ Uncontrolled Chaos: The story breaks, but misinformation spreads with it. People attack the wrong factory. It\'s a mess, but you are hidden.',
                    th: '🌪️ ความโกลาหลที่ควบคุมไม่ได้: ข่าวหลุดออกไป แต่ข้อมูลผิดๆ ก็แพร่กระจายไปด้วย คนโจมตีผิดโรงงาน เละเทะไปหมด แต่คุณซ่อนตัวได้',
                    zh: '🌪️ 失控的混乱：故事爆出，但错误信息随之传播。人们攻击错误的工厂。一团糟，但你藏起来了。'
                },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Skip It: "Not my demographic. I stick to serious politics. Let someone else deal with TikTok drama."',
                    th: '🤷 ข้ามไป: "ไม่ใช่กลุ่มเป้าหมายฉัน ฉันเกาะติดการเมืองจริงจังดีกว่า ให้คนอื่นจัดการดราม่า TikTok เถอะ"',
                    zh: '🤷 跳过它："不是我的受众。我坚持严肃的政治。让别人去处理TikTok的闹剧吧。"'
                }
            }
        ]
    },
    {
        id: 'journalist_014',
        text: {
            en: '🕶️ Corporate Espionage: A source hands you a USB drive containing trade secrets of a major automotive company planning to cheat emissions tests again. The source stole the drive illegally.',
            th: '🕶️ การจารกรรมองค์กร: แหล่งข่าวยื่นแฟลชไดรฟ์ที่มีความลับทางการค้าของบริษัทยานยนต์ยักษ์ใหญ่ที่วางแผนจะโกงการทดสอบมลพิษอีกครั้ง แหล่งข่าวขโมยไดรฟ์มาอย่างผิดกฎหมาย',
            zh: '🕶️ 公司间谍活动：一位消息人士递给你一个U盘，里面包含一家大型汽车公司计划再次在排放测试中作弊的商业机密。消息人士非法窃取了这个驱动器。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📰 Publish the Data: "The fraud is public interest. The method of obtaining it is secondary. I verify the data and print it."',
                    th: '📰 เผยแพร่ข้อมูล: "การฉ้อโกงเป็นประโยชน์สาธารณะ วิธีการได้มาเป็นเรื่องรอง ฉันตรวจสอบข้อมูลและตีพิมพ์"',
                    zh: '📰 发布数据："欺诈是公共利益。获取它的方法是次要的。我核实数据并打印出来。"'
                },
                consequence: {
                    en: '⚖️ Legal Battle: The company sues you for possessing stolen property. You invoke "Pentagon Papers" defense. Huge risks, huge reward.',
                    th: '⚖️ การต่อสู้ทางกฎหมาย: บริษัทฟ้องคุณข้อหาครอบครองทรัพย์สินที่ถูกขโมย คุณอ้างข้อต่อสู้แบบ "Pentagon Papers" ความเสี่ยงสูง ผลตอบแทนสูง',
                    zh: '⚖️ 法律战：公司起诉你持有被盗财产。你援引"五角大楼文件"进行辩护。巨大的风险，巨大的回报。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '♻️ Clean Construction: "I can\'t use the stolen drive directly. But I use the info to ask targeted questions and find legal evidence. \'fruit of the poisonous tree.\'"',
                    th: '♻️ การสร้างใหม่ที่สะอาด: "ฉันใช้ไดรฟ์ที่ถูกขโมยโดยตรงไม่ได้ แต่ฉันใช้ข้อมูลเพื่อถามคำถามเจาะจงและหาหลักฐานที่ถูกกฎหมาย \'ผลไม้จากต้นไม้พิษ\'"',
                    zh: '♻️ 清洁构建："我不能直接使用被盗的驱动器。但我利用这些信息提出有针对性的问题并寻找合法证据。\'毒树之果\'。"'
                },
                consequence: {
                    en: '🛡️ Safe Scoop: It takes weeks of work, but you break the story with clean hands. The source is annoyed by the delay but stays safe.',
                    th: '🛡️ ข่าวที่ปลอดภัย: ต้องใช้เวลาหลายสัปดาห์ แต่คุณเปิดข่าวด้วยมือที่สะอาด แหล่งข่าวรำคาญที่ล่าช้าแต่ก็ปลอดภัย',
                    zh: '🛡️ 安全的独家新闻：这需要数周的工作，但你用干净的手爆出了这个故事。消息人士对延误感到恼火，但保持安全。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '👮 Turn in the Source: "Theft is theft. I hand the drive to the police. I won\'t be an accessory to a crime."',
                    th: '👮 ส่งตัวแหล่งข่าว: "ขโมยก็คือขโมย ฉันส่งไดรฟ์ให้ตำรวจ ฉันจะไม่เป็นผู้สมรู้ร่วมคิดในการก่ออาชญากรรม"',
                    zh: '👮 交出消息来源："偷窃就是偷窃。我把驱动器交给警察。我不会成为犯罪的帮凶。"'
                },
                consequence: {
                    en: '🚫 Blacklisted: The police thank you. The company covers up the emissions scandal. No source ever trusts you again. You are done.',
                    th: '🚫 ถูกขึ้นบัญชีดำ: ตำรวจขอบคุณคุณ บริษัทปกปิดเรื่องอื้อฉาวมลพิษ ไม่มีแหล่งข่าวไหนไว้ใจคุณอีกเลย คุณจบเห่แล้ว',
                    zh: '🚫 列入黑名单：警察感谢你。公司掩盖了排放丑闻。再也没有消息来源信任你了。你完了。'
                },
                stats: { competence: 10, ethics: 20, leadership: -10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🗑️ Destroy the Drive: "Too hot to handle. I melt the USB in a microwave and pretend we never met."',
                    th: '🗑️ ทำลายไดรฟ์: "เผือกร้อนเกินไป ฉันละลาย USB ในไมโครเวฟและแกล้งทำเป็นว่าเราไม่เคยเจอกัน"',
                    zh: '🗑️ 销毁驱动器："太棘手了。我在微波炉里融化了USB，假装我们从未见过面。"'
                },
                consequence: {
                    en: '💨 Opportunity Lost: The scandal continues unchecked. The company pollutes for another decade. You slept well, but the planet suffered.',
                    th: '💨 เสียโอกาส: เรื่องอื้อฉาวดำเนินต่อไปโดยไม่มีใครตรวจสอบ บริษัทปล่อยมลพิษต่อไปอีกทศวรรษ คุณหลับสบาย แต่โลกต้องทนทุกข์',
                    zh: '💨 机会丧失：丑闻继续不受控制。公司又污染了十年。你睡得很香，但地球受苦了。'
                }
            }
        ]
    },
    {
        id: 'journalist_015',
        text: {
            en: '👽 The Viral Conspiracy: A fringe group gains traction claiming birds are government drones. It\'s ridiculous, but your editor wants a "balanced" piece exploring "both sides" for clickbait traffic.',
            th: '👽 ทฤษฎีสมคบคิดไวรัล: กลุ่มชายขอบเริ่มได้รับความนิยมโดยอ้างว่านกคือโดรนของรัฐบาล มันไร้สาระ แต่บรรณาธิการต้องการบทความที่ "สมดุล" สำรวจ "ทั้งสองด้าน" เพื่อเรียกยอดวิว Clickbait',
            zh: '👽 病毒式阴谋：一个边缘团体声称鸟类是政府的无人机，并因此获得关注。这很荒谬，但你的编辑想要一篇"平衡"的文章，探索"双方"以获取点击诱饵流量。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Refuse False Balance: "There are not two sides to gravity. I won\'t validate delusion. I\'ll write a debunking piece only, or nothing."',
                    th: '🛑 ปฏิเสธความสมดุลจอมปลอม: "แรงโน้มถ่วงไม่ได้มีสองด้าน ฉันจะไม่รับรองอาการหลงผิด ฉันจะเขียนบทความหักล้างเท่านั้น ไม่งั้นก็ไม่เขียน"',
                    zh: '🛑 拒绝错误的平衡："重力没有两面性。我不会证实妄想。我只写揭穿文章，或者什么都不写。"'
                },
                consequence: {
                    en: '🛡️ Integrity Maintained: The editor assigns it to an intern. You lose the clicks but keep your dignity. Serious readers respect you.',
                    th: '🛡️ รักษาความซื่อสัตย์: บรรณาธิการมอบหมายให้เด็กฝึกงาน คุณเสียยอดวิวแต่รักษาศักดิ์ศรี ผู้อ่านที่จริงจังเคารพคุณ',
                    zh: '🛡️ 保持正直：编辑把它分配给一个实习生。你失去了点击量，但保留了尊严。严肃的读者尊重你。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤪 Satirical Approach: "I\'ll write it, but dripping with sarcasm. \'If birds are drones, why do they poop on my car?\' Make them a laughing stock."',
                    th: '🤪 แนวเสียดสี: "ฉันจะเขียน แต่จะเหน็บแนมให้เจ็บ \'ถ้านกเป็นโดรน ทำไมมันขี้ใส่รถฉัน?\' ทำให้พวกเขาเป็นตัวตลก"',
                    zh: '🤪 讽刺手法："我会写，但充满讽刺意味。\'如果鸟是无人机，为什么它们会在我的车上拉屎？\'让他们成为笑柄。"'
                },
                consequence: {
                    en: '😂 Viral Comedy: The piece is hilarious and gets millions of views. The conspiracy theorists are mocked effectively. You entertained and informed.',
                    th: '😂 ตลกไวรัล: บทความตลกมากและมียอดวิวหลายล้าน นักทฤษฎีสมคบคิดถูกล้อเลียนอย่างได้ผล คุณให้ความบันเทิงและข้อมูล',
                    zh: '😂 病毒式喜剧：这篇文章很搞怪，获得了数百万的浏览量。阴谋论者被有效地嘲笑了。你既娱乐了大众又提供了信息。'
                },
                stats: { competence: 45, ethics: 30, leadership: 20, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Both Sides: "Okay, I\'ll interview the \'Bird Truther\' leader and an ornithologist. Treat them as equals. Let the reader decide."',
                    th: '⚖️ ทั้งสองด้าน: "โอเค ฉันจะสัมภาษณ์ผู้นำกลุ่ม \'ความจริงเรื่องนก\' และนักปักษีวิทยา ปฏิบัติกับพวกเขาอย่างเท่าเทียม ให้ผู้อ่านตัดสินเอง"',
                    zh: '⚖️ 赋予合法性：通过给他们一个平台，你增加了他们的会员人数。鸟类学家很愤怒。你的新闻学入门不及格。'
                },
                consequence: {
                    en: '📉 Legitimacy Lending: By giving them a platform, you boosted their membership. The ornithologist is furious. You failed journalism 101.',
                    th: '📉 ให้ความชอบธรรม: การให้พื้นที่สื่อ ทำให้สมาชิกพวกเขาเพิ่มขึ้น นักปักษีวิทยาโกรธจัด คุณสอบตกวิชาวารสารศาสตร์เบื้องต้น',
                    zh: '📉 赋予合法性：通过给他们一个平台，你增加了他们的会员人数。鸟类学家很愤怒。你的新闻学入门不及格。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🎣 Clickbait Master: "TITLE: ARE BIRDS WATCHING YOU? 10 SHOCKING PROOFS! I write total trash to farm ad impressions."',
                    th: '🎣 เซียน Clickbait: "ชื่อเรื่อง: นกกำลังจับตาดูคุณอยู่หรือเปล่า? 10 หลักฐานชวนช็อก! ฉันเขียนขยะล้วนๆ เพื่อปั่นยอดโฆษณา"',
                    zh: '🎣 点击诱饵大师："标题：鸟类在监视你吗？10个惊人的证据！我写全是垃圾来骗取广告印象。"'
                },
                consequence: {
                    en: '💰 Ad Revenue Record: The article makes the most money this month. But your byline is now a joke. You sold your soul for $0.02 per click.',
                    th: '💰 สถิติรายได้โฆษณา: บทความทำเงินสูงสุดในเดือนนี้ แต่ชื่อคุณกลายเป็นตัวตลก คุณขายวิญญาณแลกกับ 0.02 ดอลลาร์ต่อคลิก',
                    zh: '💰 广告收入记录：这篇文章是本月最赚钱的。但你的署名现在是个笑话。你为了每次点击0.02美元出卖了灵魂。'
                }
            }
        ]
    },
    {
        id: 'journalist_016',
        text: {
            en: '🤖 Deepfake Dilemma: A convincing video surfaces showing a beloved opposition leader taking a bribe. Experts say it\'s 99% likely a deepfake, but it went viral. If you call it fake without proof, you look biased. If you ignore it, it spreads.',
            th: '🤖 ภาวะกลืนไม่เข้าคายไม่ออกเรื่อง Deepfake: วิดีโอที่น่าเชื่อถือปรากฏขึ้นแสดงให้เห็นผู้นำฝ่ายค้านที่เป็นที่รักรับสินบน ผู้เชี่ยวชาญบอกว่า 99% น่าจะเป็น deepfake แต่มันเป็นไวรัลไปแล้ว ถ้าคุณบอกว่าปลอมโดยไม่มีหลักฐาน คุณจะดูเหมือนลำเอียง ถ้าคุณเพิกเฉย มันจะแพร่กระจาย',
            zh: '🤖 深度伪造困境：一段令人信服的视频浮出水面，显示深受爱戴的反对派领导人受贿。专家表示这也是99%可能是深度伪造的，但它已经疯传。如果你在没有证据的情况下称其为假的，以此看起来会有偏见。如果你忽视它，它就会传播。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔍 Forensics First: "I hire top digital forensics to prove it\'s fake. I publish nothing until I have the technical receipts. Truth takes time."',
                    th: '🔍 นิติวิทยาศาสตร์มาก่อน: "ฉันจ้างผู้เชี่ยวชาญด้านดิจิทัลระดับท็อปเพื่อพิสูจน์ว่ามันปลอม ฉันจะไม่เผยแพร่อะไรจนกว่าจะมีหลักฐานทางเทคนิค ความจริงต้องใช้เวลา"',
                    zh: '🔍 取证优先："我聘请顶级数字取证专家来证明它是假的。在拿到技术收据之前，我什么都不发表。真相需要时间。"'
                },
                consequence: {
                    en: '🐢 Slow & Steady: By the time you debunk it, the damage is done. But your debunking is definitive and respected in the long run.',
                    th: '🐢 ช้าแต่ชัวร์: กว่าคุณจะหักล้างได้ ความเสียหายก็เกิดขึ้นแล้ว แต่การหักล้างของคุณนั้นเด็ดขาดและได้รับความเคารพในระยะยาว',
                    zh: '🐢 缓慢而稳定：当你揭穿它时，损害已经造成。但从长远来看，你的揭穿是决定性的，也是受人尊敬的。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '📢 Immediate Skepticism: "I write an op-ed explaining deepfake tech and warning people. I don\'t say it IS fake, I say \'BE CAREFUL\'."',
                    th: '📢 สงสัยทันที: "ฉันเขียนบทความอธิบายเทคโนโลยี deepfake และเตือนสติผู้คน ฉันไม่ได้บอกว่ามันปลอม แต่บอกว่า \'ระวังให้ดี\'"',
                    zh: '📢 立即怀疑："我写了一篇专栏文章，解释深度伪造技术并警告人们。我没说它是假的，我说\'要小心\'。"'
                },
                consequence: {
                    en: '🧠 Media Literacy: You educated the public. Some called you a shill, but you slowed the spread of misinformation.',
                    th: '🧠 การรู้เท่าทันสื่อ: คุณให้ความรู้แก่สาธารณชน บางคนเรียกคุณว่าหน้าม้า แต่คุณชะลอการแพร่กระจายของข้อมูลที่ผิด',
                    zh: '🧠 媒体素养：你教育了公众。有些人称你为托儿，但你减缓了错误信息的传播。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🔥 Both Sides Clickbait: "TITLE: IS LEADERSHIP CORRUPT? WATCH THE VIDEO! I embed the video and ask \'What do you think?\'"',
                    th: '🔥 Clickbait ทั้งสองฝ่าย: "ชื่อเรื่อง: ผู้นำทุจริตหรือไม่? ดูวิดีโอ! ฉันแนบวิดีโอและถามว่า \'คุณคิดอย่างไร?\'"',
                    zh: '🔥 双方点击诱饵："标题：领导层腐败吗？看视频！我嵌入视频并问\'你怎么看？\'"'
                },
                consequence: {
                    en: '📉 Part of the Problem: You amplified the lie for clicks. You made money, but democracy got weaker.',
                    th: '📉 ส่วนหนึ่งของปัญหา: คุณขยายความเท็จเพื่อยอดคลิก คุณได้เงิน แต่ประชาธิปไตยอ่อนแอลง',
                    zh: '📉 问题的一部分：你为了点击量而放大谎言。你赚了钱，但这让民主变得更脆弱。'
                },
                stats: { competence: 10, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Find the Creator: "I ignore the video content and hunt the source. Who made this? I track the IP and expose the troll farm."',
                    th: '🕵️ ตามหาผู้สร้าง: "ฉันเมินเนื้อหาวิดีโอและตามล่าต้นตอ ใครทำสิ่งนี้? ฉันตามรอย IP และเปิดโปงฟาร์มเกรียนคีย์บอร์ด"',
                    zh: '🕵️ 寻找创作者："我忽略视频内容，去寻找源头。这是谁做的？我追踪IP并曝光喷子农场。"'
                },
                consequence: {
                    en: '🏆 Investigative Gold: You find the state-sponsored lab behind it. This is a much bigger story than one fake video. Huge win.',
                    th: '🏆 ทองคำแห่งการสืบสวน: คุณพบห้องแล็บที่รัฐสนับสนุนอยู่เบื้องหลัง นี่เป็นข่าวใหญ่กว่าวิดีโอปลอมอันเดียว ชัยชนะที่ยิ่งใหญ่',
                    zh: '🏆 调查黄金：你找到了背后的国家赞助实验室。这比一个假视频的故事大得多。巨大的胜利。'
                }
            }
        ]
    },
    {
        id: 'journalist_017',
        text: {
            en: '🛡️ Embedded in War: You are embedded with a military unit. They treat you like family. You witness them accidentally kill civilians in a chaotic firefight. They beg you not to report it.',
            th: '🛡️ ฝังตัวในสงคราม: คุณฝังตัวอยู่กับหน่วยทหาร พวกเขาดูแลคุณเหมือนครอบครัว คุณเห็นพวกเขาพลาดฆ่าพลเรือนในการยิงปะทะที่วุ่นวาย พวกเขาขอร้องไม่ให้คุณรายงาน',
            zh: '🛡️ 战地嵌入：你随军嵌入一个军事单位。他们待你如家人。你目睹他们在混乱的交火中意外杀害了平民。他们恳求你不要报道。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📝 Report the Truth: "War is ugly. The public must know the cost. I report exactly what happened. It was an accident, but a fatal one."',
                    th: '📝 รายงานความจริง: "สงครามน่าเกลียด สาธารณชนต้องรู้ราคาที่ต้องจ่าย ฉันรายงานสิ่งที่เกิดขึ้นเป๊ะๆ มันเป็นอุบัติเหตุ แต่ถึงตาย"',
                    zh: '📝 报道真相："战争是丑陋的。公众必须知道代价。我如实报道发生的事情。这是一个意外，但是是致命的。"'
                },
                consequence: {
                    en: '💔 Betrayal: The soldiers feel betrayed. You are kicked out of the unit and sent home. But you maintained journalistic integrity.',
                    th: '💔 การทรยศ: ทหารรู้สึกถูกหักหลัง คุณถูกเตะออกจากหน่วยและส่งกลับบ้าน แต่คุณรักษาจรรยาบรรณสื่อ',
                    zh: '💔 背叛：士兵们感到被背叛。你被踢出部队并遣送回家。但你保持了新闻记者的正直。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Omit the Details: "I report the battle but leave out the civilian casualties. \'Fog of war.\' I need to stay with the unit for the bigger mission."',
                    th: '🤫 ละเว้นรายละเอียด: "ฉันรายงานการรบแต่ละเว้นผู้เสียชีวิตที่เป็นพลเรือน \'หมอกแห่งสงคราม\' ฉันต้องอยู่กับหน่วยเพื่อภารกิจที่ใหญ่กว่า"',
                    zh: '🤫 省略细节："我报道战斗，但略去了平民伤亡。\'战争迷雾\'。为了更大的任务，我需要留在部队。"'
                },
                consequence: {
                    en: '🤐 Compromised: You stay embedded and get great footage later. But you are now a propagandist, not a journalist. The guilt lingers.',
                    th: '🤐 ถูกครอบงำ: คุณได้อยู่ต่อและได้ฟุตเทจดีๆ ทีหลัง แต่ตอนนี้คุณเป็นนักโฆษณาชวนเชื่อ ไม่ใช่นักข่าว ความรู้สึกผิดยังคงอยู่',
                    zh: '🤐 妥协：你继续嵌入并在后来获得了很棒的录像。但你现在是宣传员，而不是记者。内疚挥之不去。'
                },
                stats: { competence: 40, ethics: 20, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📽️ Show the Aftermath: "I focus on the grieving families without naming the specific soldiers. Frame it as the tragedy of war generally."',
                    th: '📽️ แสดงผลที่ตามมา: "ฉันโฟกัสที่ครอบครัวที่โศกเศร้าโดยไม่ระบุชื่อทหาร นำเสนอเป็นโศกนาฏกรรมของสงครามโดยรวม"',
                    zh: '📽️ 展示后果："我关注悲痛的家庭，而不点名具体的士兵。将其定性为战争的悲剧。"'
                },
                consequence: {
                    en: '⚖️ Delicate Balance: The unit is tense but lets you stay. The story is powerful and humanizing. You walked a fine line successfully.',
                    th: '⚖️ ความสมดุลที่ละเอียดอ่อน: หน่วยทหารตึงเครียดแต่ยอมให้อยู่ต่อ เรื่องราวนั้นทรงพลังและมีความเป็นมนุษย์ คุณเดินบนเส้นด้ายได้สำเร็จ',
                    zh: '⚖️ 微妙的平衡：部队很紧张，但让你留下来。这个故事很有力，也很人性化。你成功地走了一条微妙的界线。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🛡️ Protect the Troops: "These guys saved my life yesterday. I bury the story completely. I owe them."',
                    th: '🛡️ ปกป้องทหาร: "คนพวกนี้ช่วยชีวิตฉันเมื่อวาน ฉันฝังเรื่องนี้ให้มิด ฉันเป็นหนี้บุญคุณพวกเขา"',
                    zh: '🛡️ 保护军队："这些人昨天救了我的命。我完全掩盖了这个故事。我欠他们的。"'
                },
                consequence: {
                    en: '📉 Lost Objectivity: You have gone native. You are no longer an observer. You are part of the military machine.',
                    th: '📉 สูญเสียความเป็นกลาง: คุณกลายเป็นพวกเดียวกับเขา คุณไม่ใช่ผู้สังเกตการณ์อีกต่อไป คุณเป็นส่วนหนึ่งของเครื่องจักรสงคราม',
                    zh: '📉 失去客观性：你已经融入了当地。你不再是观察者。你是军事机器的一部分。'
                }
            }
        ]
    },
    {
        id: 'journalist_018',
        text: {
            en: '💊 Celebrity Rehab Leak: A nurse sells you a photo of a beloved teen pop star in rehab for heroin addiction. The star’s clean image is a lie. The photo is invasive but valuable.',
            th: '💊 ข่าวหลุดดาราบำบัดยา: พยาบาลขายภาพดาราวัยรุ่นชื่อดังที่กำลังบำบัดเฮโรอีน ภาพลักษณ์ใสซื่อของดาราคือเรื่องโกหก รูปภาพนั้นละเมิดสิทธิส่วนบุคคลแต่มีค่า',
            zh: '💊 名人康复泄密：一名护士向你出售一张深受喜爱的青少年流行歌星因海洛因成瘾而接受康复治疗的照片。这位明星清白的形象是个谎言。这张照片具有侵略性，但很有价值。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Don\'t Buy: "Medical privacy is sacred. Buying stolen photos encourages nurses to spy on patients. I decline."',
                    th: '🚫 ไม่ซื้อ: "ความเป็นส่วนตัวทางการแพทย์เป็นสิ่งศักดิ์สิทธิ์ การซื้อภาพที่ถูกขโมยสนับสนุนให้พยาบาลสอดแนมคนไข้ ฉันขอปฏิเสธ"',
                    zh: '🚫 不买："医疗隐私是神圣的。购买通过盗窃得来的照片会鼓励护士监视病人。我拒绝。"'
                },
                consequence: {
                    en: '🛡️ High Ground: Competitors buy it. You miss the scoop. But the star eventually thanks you for your decency in an interview.',
                    th: '🛡️ พื้นที่สูงส่ง: คู่แข่งซื้อมันไป คุณพลาดข่าว แต่ในที่สุดดาราก็ขอบคุณความดีของคุณในการสัมภาษณ์',
                    zh: '🛡️ 高尚情操：竞争对手买了它。你错过了独家新闻。但这位明星最终在一次采访中感谢你的正派。'
                },
                stats: { competence: 30, ethics: 50, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '📸 Buy and Publish: "Public figures have limited privacy. Her fans deserve to know the truth. I run it front page."',
                    th: '📸 ซื้อและตีพิมพ์: "บุคคลสาธารณะมีความเป็นส่วนตัวจำกัด แฟนคลับสมควรได้รับรู้ความจริง ฉันลงหน้าหนึ่ง"',
                    zh: '📸 购买并发布："公众人物的隐私有限。她的粉丝有权知道真相。我把它登在头版。"'
                },
                consequence: {
                    en: '💰 Tabloid Trash: Sales skyrocket. But you are sued for invasion of privacy. You win legally, but look like a vulture.',
                    th: '💰 ขยะแท็บลอยด์: ยอดขายพุ่งกระฉูด แต่คุณถูกฟ้องละเมิดความเป็นส่วนตัว คุณชนะทางกฎหมาย แต่ดูเหมือนนกแร้ง',
                    zh: '💰 小报垃圾：销量飙升。但你因侵犯隐私而被起诉。你在法律上赢了，但看起来像只秃鹫。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📝 Story Without Photo: "I investigate the pressure on teen stars. I mention the addiction rumors generally, focusing on the industry\'s toxicity."',
                    th: '📝 เรื่องราวที่ไม่มีรูป: "ฉันสืบสวนแรงกดดันต่อดาราวัยรุ่น ฉันพูดถึงข่าวลือเรื่องการเสพติดโดยรวม เน้นที่พิษร้ายของวงการ"',
                    zh: '📝 没有照片的故事："我调查青少年明星面临的压力。我泛泛地提到成瘾传闻，重点关注这个行业的毒害性。"'
                },
                consequence: {
                    en: '📰 Respectful Journalism: It sparks a conversation about mental health. You covered the issue without exploiting the individual.',
                    th: '📰 วารสารศาสตร์ที่ให้เกียรติ: มันจุดประกายบทสนทนาเรื่องสุขภาพจิต คุณรายงานปัญหาโดยไม่แสวงหาผลประโยชน์จากตัวบุคคล',
                    zh: '📰 尊重新闻业：它引发了关于心理健康的讨论。你在没有利用个人的情况下报道了这个问题。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🤫 Blackmail Management: "I tell the star\'s manager I have the photo. \'Give me an exclusive interview when she is out, and I bury the photo.\'"',
                    th: '🤫 แบล็กเมล์ผู้จัดการ: "ฉันบอกผู้จัดการดาราว่าฉันมีรูป \'ให้ฉันสัมภาษณ์พิเศษเมื่อเธอออกมา แล้วฉันจะฝังรูปนี้\'"',
                    zh: '🤫 勒索管理层："我告诉明星的经纪人我有照片。\'等她出来后给我一个独家专访，我就把照片埋了。\'"'
                },
                consequence: {
                    en: '🐍 Calculated Risk: The manager agrees. You get the "Redemption Interview" later. It\'s slimy, but effective career management.',
                    th: '🐍 ความเสี่ยงที่คำนวณไว้: ผู้จัดการตกลง คุณได้ "บทสัมภาษณ์ไถ่บาป" ทีหลัง มันน่ารังเกียจ แต่เป็นการบริหารอาชีพที่มีประสิทธิภาพ',
                    zh: '🐍 精心的冒险：经理同意了。你后来得到了"救赎采访"。这很卑鄙，但职业管理很有效。'
                }
            }
        ]
    },
    {
        id: 'journalist_019',
        text: {
            en: '🧮 The Racist Algorithm: You discover a major bank\'s loan AI systematically denies mortgages to minorities. The bank claims the AI is a "black box" and they didn\'t know. Proving intent is impossible.',
            th: '🧮 อัลกอริทึมเหยียดเชื้อชาติ: คุณพบว่า AI สินเชื่อของธนาคารใหญ่ปฏิเสธการจำนองให้ชนกลุ่มน้อยอย่างเป็นระบบ ธนาคารอ้างว่า AI เป็น "กล่องดำ" และพวกเขาไม่รู้ การพิสูจน์เจตนานั้นเป็นไปไม่ได้',
            zh: '🧮 种族主义算法：你发现一家大型银行的贷款人工智能系统性地拒绝少数族裔的抵押贷款。银行声称人工智能是一个"黑匣子"，他们并不知情。证明意图是不可能的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📊 Data Journalism: "I analyze 10,000 loan applications. The pattern is undeniable. I publish the stats. \'The Math Doesn\'t Lie.\'"',
                    th: '📊 วารสารศาสตร์ข้อมูล: "ฉันวิเคราะห์ใบสมัครสินเชื่อ 10,000 ใบ รูปแบบนั้นปฏิเสธไม่ได้ ฉันเผยแพร่สถิติ \'คณิตศาสตร์ไม่โกหก\'"',
                    zh: '📊 数据新闻："我分析了10,000份贷款申请。这种模式是不可否认的。我发布统计数据。\'数学不会撒谎。\'"'
                },
                consequence: {
                    en: '📈 Impact: The undeniable data forces a government inquiry. The bank is fined billions. You win a data journalism award.',
                    th: '📈 ผลกระทบ: ข้อมูลที่ปฏิเสธไม่ได้บังคับให้รัฐบาลสอบสวน ธนาคารโดนปรับพันล้าน คุณชนะรางวัลวารสารศาสตร์ข้อมูล',
                    zh: '📈 影响：无可辩驳的数据迫使政府进行调查。银行被罚款数十亿美元。你获得数据新闻奖。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🎤 Human Interest: "Stats are boring. I find 5 families rejected by the AI and tell their tearful stories. \'Computer Says No.\'"',
                    th: '🎤 ความสนใจของมนุษย์: "สถิติน่าเบื่อ ฉันหา 5 ครอบครัวที่ถูก AI ปฏิเสธและเล่าเรื่องเศร้าของพวกเขา \'คอมพิวเตอร์บอกว่าไม่\'"',
                    zh: '🎤 人文关怀："统计数据很无聊。我找到5个被AI拒绝的家庭，讲述他们催人泪下的故事。\'电脑说不。\'"'
                },
                consequence: {
                    en: '😢 Emotional Viral: The stories go viral. People are angry. The bank creates a PR fund for them. Good outcome, but surface level.',
                    th: '😢 ไวรัลทางอารมณ์: เรื่องราวเป็นไวรัล ผู้คนโกรธแค้น ธนาคารตั้งกองทุน PR ให้พวกเขา ผลลัพธ์ดี แต่แค่ผิวเผิน',
                    zh: '😢 情绪病毒：故事疯传。人们很生气。银行为他们设立了一个公关基金。结果不错，但在表面。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🏛️ Inside Source: "I hunt for a programmer who built it. I need a whistleblower to say \'We knew.\' without that, it\'s just a glitch."',
                    th: '🏛️ แหล่งข่าววงใน: "ฉันตามหาโปรแกรมเมอร์ที่สร้างมัน ฉันต้องการคนเป่านกหวีดที่จะบอกว่า \'เรารู้อยู่แล้ว\' ถ้าไม่มีสิ่งนั้น มันก็แค่ความผิดพลาด"',
                    zh: '🏛️ 内部消息来源："我寻找构建它的程序员。我需要一个告密者说\'我们早就知道了。\'没有这个，这只是一个小故障。"'
                },
                consequence: {
                    en: '🕵️ Hard Hunt: You spend months searching. You find one. He testifies. The executives go to jail, not just the bank getting fined.',
                    th: '🕵️ การตามล่าที่ยากลำบาก: คุณใช้เวลาหลายเดือนในการค้นหา คุณเจอคนหนึ่ง เขาให้การ ผู้บริหารติดคุก ไม่ใช่แค่ธนาคารโดนปรับ',
                    zh: '🕵️ 艰难的搜寻：你花了几个月的时间寻找。你找到了一个。他作证了。高管入狱，不仅仅是银行被罚款。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Accept Complexity: "AI is hard. Maybe minorities just have worse credit scores? I write a piece defending the bank\'s \'neutrality\'."',
                    th: '🤷 ยอมรับความซับซ้อน: "AI มันยาก บางทีชนกลุ่มน้อยแค่มีคะแนนเครดิตแย่กว่า? ฉันเขียนบทความปกป้อง \'ความเป็นกลาง\' ของธนาคาร"',
                    zh: '🤷 接受复杂性："人工智能很难。也许少数族裔的信用评分就是比较差？我写了一篇文章为银行的\'中立性\'辩护。"'
                },
                consequence: {
                    en: '📉 Corporate Shill: You ignored systemic bias. The bank loves you, but you are on the wrong side of history.',
                    th: '📉 กระบอกเสียงนายทุน: คุณเพิกเฉยต่ออคติเชิงระบบ ธนาคารรักคุณ แต่คุณยืนอยู่ผิดฝั่งของประวัติศาสตร์',
                    zh: '📉 企业托儿：你忽视了系统性偏见。银行爱你，但你站在了历史错误的一边。'
                }
            }
        ]
    },
    {
        id: 'journalist_020',
        text: {
            en: '😨 Suicide Threat: A corrupt politician you are investigating calls you. "If you publish this story, I will kill myself tonight." He sounds serious.',
            th: '😨 คำขู่ฆ่าตัวตาย: นักการเมืองทุจริตที่คุณกำลังสืบสวนโทรหาคุณ "ถ้าคุณตีพิมพ์เรื่องนี้ ผมจะฆ่าตัวตายคืนนี้" เขาเสียงจริงจัง',
            zh: '😨 自杀威胁：你正在调查的一位腐败政客给你打电话。"如果你发布这个故事，我今晚就自杀。"他听起来很认真。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📞 Call for Help: "I keep him on the line and signal my colleague to call police to his location. I delay the story 24 hours."',
                    th: '📞 ขอความช่วยเหลือ: "ฉันถ่วงเวลาคุยกับเขาและส่งสัญญาณให้เพื่อนร่วมงานโทรแจ้งตำรวจไปที่ตำแหน่งเขา ฉันเลื่อนข่าวออกไป 24 ชั่วโมง"',
                    zh: '📞 求救："我让他保持通话，并示意我的同事打电话给警察去他那里。我把故事推迟了24小时。"'
                },
                consequence: {
                    en: '🏥 Saved and Sued: Police save him. He is committed to a psych ward. You publish later. He is alive to face justice.',
                    th: '🏥 รอดและถูกฟ้อง: ตำรวจช่วยเขาได้ เขาถูกส่งเข้าแผนกจิตเวช คุณตีพิมพ์ทีหลัง เขามีชีวิตอยู่เพื่อเผชิญหน้ากับความยุติธรรม',
                    zh: '🏥 获救与被诉：警察救了他。他被送进精神病房。你稍后发布。他还活着，面临正义的审判。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '📰 Publish Anyway: "Emotional blackmail is a tactic. He stole millions. The public interest outweighs one man\'s threat. I hit publish."',
                    th: '📰 ตีพิมพ์อยู่ดี: "การแบล็กเมล์ทางอารมณ์เป็นกลยุทธ์ เขาขโมยเงินล้าน ผลประโยชน์สาธารณะสำคัญกว่าคำขู่ของคนคนเดียว ฉันกดเผยแพร่"',
                    zh: '📰 无论如何都要发布："情感勒索是一种策略。他偷了数百万。公共利益重于一个人的威胁。我点击发布。"'
                },
                consequence: {
                    en: '⚰️ Tragic Ending: He actually does it. The suicide note blames you. The public is divided—you exposed a crook but "killed" a man.',
                    th: '⚰️ จุดจบที่น่าเศร้า: เขาทำจริง จดหมายลาตายโทษคุณ สาธารณชนเสียงแตก—คุณเปิดโปงคนโกงแต่ "ฆ่า" คน',
                    zh: '⚰️ 悲剧结局：他真的这么做了。遗书指责你。公众意见分歧——你揭露了一个骗子，但"杀"了一个人。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🗑️ Kill the Story: "I can\'t have blood on my hands. I delete the file. Go seek help, sir. I\'m out."',
                    th: '🗑️ ฆ่าข่าวทิ้ง: "ฉันยอมมือเปื้อนเลือดไม่ได้ ฉันลบไฟล์ ไปหาความช่วยเหลือเถอะครับท่าน ผมขอถอนตัว"',
                    zh: '🗑️ 扼杀故事："我不能手上沾血。我删除了文件。去寻求帮助吧，先生。我不干了。"'
                },
                consequence: {
                    en: '🤡 Manipulated: He recovers immediately and continues stealing. He played you like a fiddle. You are a good person, but a bad journalist.',
                    th: '🤡 ถูกปั่นหัว: เขาหายดีทันทีและขโมยต่อ เขาหลอกใช้คุณเหมือนหุ่นเชิด คุณเป็นคนดี แต่เป็นนักข่าวที่แย่',
                    zh: '🤡 被操纵：他立即康复并继续偷窃。他把你玩弄于股掌之间。你是一个好人，但却是一个糟糕的记者。'
                },
                stats: { competence: 20, ethics: 40, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ Negotiate: "If you resign today, I will hold the story. If you stay in office, I publish. Your choice."',
                    th: '🗣️ เจรจา: "ถ้าคุณลาออกวันนี้ ฉันจะระงับข่าวไว้ ถ้าคุณอยู่ในตำแหน่งต่อ ฉันจะตีพิมพ์ คุณเลือกเอา"',
                    zh: '🗣️ 谈判："如果你今天辞职，我就保留这个故事。如果你留任，我就发布。你的选择。"'
                },
                consequence: {
                    en: '🤝 Unethical Deal: He resigns. Justice is sort of done, but you suppressed the truth to save a life. Gray area.',
                    th: '🤝 ข้อตกลงที่ไร้จริยธรรม: เขาลาออก ความยุติธรรมเกิดขึ้นระดับหนึ่ง แต่คุณปิดบังความจริงเพื่อช่วยชีวิตคน พื้นที่สีเทา',
                    zh: '🤝 不道德的交易：他辞职了。正义算是得到了伸张，但你为了挽救生命而隐瞒了真相。灰色地带。'
                }
            }
        ]
    },
    {
        id: 'journalist_016',
        text: {
            en: '🤖 The Deep Fake Dilemma: You receive a video of the opposition leader aiming a gun at a dog. It looks 100% real. Your experts say it\'s "likely" a Deep Fake, but can\'t prove it. The election is tomorrow.',
            th: '🤖 ปัญหา Deep Fake: คุณได้รับวิดีโอผู้นำฝ่ายค้านเล็งปืนใส่สุนัข ดูเหมือนจริง 100% ผู้เชี่ยวชาญของคุณบอกว่า "น่าจะ" เป็น Deep Fake แต่พิสูจน์ไม่ได้ การเลือกตั้งคือวันพรุ่งนี้',
            zh: '🤖 深度伪造困境：你收到一段反对派领导人用枪指着狗的视频。看起来100%真实。你的专家说这"很可能"是深度伪造，但无法证明。明天就是选举。'
        },
        options: [
            { id: 'A', text: { en: '📢 Publish as Breaking: "It looks real. We print it. Let him deny it. If it\'s fake, that\'s news too."', th: '📢 เผยแพร่ข่าวด่วน: "มันดูเหมือนจริง เราตีพิมพ์ ให้เขาปฏิเสธเอา ถ้ามันปลอม นั่นก็เป็นข่าวเหมือนกัน"', zh: '📢 作为突发新闻发布："看起来是真的。我们发。让他去否认。如果是假的，那也是新闻。"' }, consequence: { en: '🔥 Election Swing. He loses. It WAS a fake. You altered democracy with a lie. Your paper is sued for libel.', th: '🔥 พลิกผลการเลือกตั้ง เขาแพ้ มันเป็นของปลอม คุณเปลี่ยนประชาธิปไตยด้วยคำโกหก หนังสือพิมพ์คุณถูกฟ้องหมิ่นประมาท', zh: '🔥 选举摇摆。他输了。那是假的。你用谎言改变了民主。你的报纸被起诉诽谤。' }, stats: { competence: 10, ethics: -60, leadership: -20, innovation: 20 } },
            { id: 'B', text: { en: '🛡️ Hold the Story: "If we can\'t verify it, it doesn\'t run. Even if the other guy wins. Responsibility first."', th: '🛡️ ระงับข่าว: "ถ้าเราตรวจสอบไม่ได้ ก็ไม่ลง ต่อให้อีกฝ่ายชนะ ความรับผิดชอบต้องมาก่อน"', zh: '🛡️ 压下故事："如果我们不能核实，就不发。即使另一个人赢了。责任第一。"' }, consequence: { en: '🏆 Bullet Dodged. A rival blog publishes it and gets destroyed when the fake is proven. You look like the only adult in the room.', th: '🏆 รอดตัวหวุดหวิด บล็อกคู่แข่งเผยแพร่และพังยับเมื่อพิสูจน์ได้ว่าเป็นของปลอม คุณดูเหมือนผู้ใหญ่คนเดียวในห้อง', zh: '🏆 躲过一劫。竞争对手的博客发布了它，并在证明是假的时被摧毁。你看起来是这里唯一的成年人。' }, stats: { competence: 60, ethics: 70, leadership: 50, innovation: 10 } },
            { id: 'C', text: { en: '🔬 Analyze Publicly: "Publish the video but explicitly analyzing WHY it might be fake. Educate voters on AI tech."', th: '🔬 วิเคราะห์ต่อสาธารณะ: "เผยแพร่วิดีโอแต่วิเคราะห์อย่างชัดเจนว่าทำไมถึงอาจเป็นของปลอม ให้ความรู้ผู้มีสิทธิเลือกตั้งเรื่องเทคโนโลยี AI"', zh: '🔬 公开分析："发布视频，但明确分析为什么它可能是假的。教育选民了解AI技术。"' }, consequence: { en: '🧠 Public Service. Voters are confused but skeptical. The candidate survives. You start a national conversation on AI literacy.', th: '🧠 ประโยชน์สาธารณะ ผู้มีสิทธิเลือกตั้งสับสนแต่สงสัย ผู้สมัครรอดตัว คุณเริ่มบทสนทนาระดับชาติเรื่องความรู้เท่าทัน AI', zh: '🧠 公共服务。选民感到困惑但持怀疑态度。候选人幸存。你引发了关于AI素养的全国性对话。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 60 } },
            { id: 'D', text: { en: '💰 Blackmail Candidate: "Show him the video. Tell him to drop out or we run it. Force his hand."', th: '💰 แบล็กเมล์ผู้สมัคร: "ให้เขาดูวิดีโอ บอกให้เขาถอนตัวไม่งั้นเราลงข่าว บีบให้เขาจนมุม"', zh: '💰 勒索候选人："让他看视频。告诉他退出，否则我们就发。逼他就范。"' }, consequence: { en: '⚖️ Criminal Act. He records your threat. You are arrested for extortion. Career over.', th: '⚖️ การกระทำผิดกฎหมาย เขาอัดเสียงคำขู่ของคุณ คุณถูกจับกุมฐานกรรโชกทรัพย์ จบอนาคต', zh: '⚖️ 犯罪行为。他录下了你的威胁。你因敲诈勒索被捕。职业生涯结束。' }, stats: { competence: 10, ethics: -80, leadership: -50, innovation: 0 } }
        ]
    },
    {
        id: 'journalist_017',
        text: {
            en: '🌵 The Cartel Threat: You are investigating drug cartels in a border town. A decapitated head is left on your car hood with a note: "Stop writing or your family is next."',
            th: '🌵 คำขู่แก๊งค้ายา: คุณกำลังสืบสวนแก๊งค้ายาในเมืองชายแดน หัวคนที่ถูกตัดขาดถูกวางไว้บนฝากระโปรงรถคุณพร้อมโน้ต: "เลิกเขียนไม่งั้นรายต่อไปคือครอบครัวแก"',
            zh: '🌵 卡特尔威胁：你正在边境小镇调查贩毒集团。一颗被砍下的头颅放在你的汽车引擎盖上，上面写着一张纸条："停止写作，否则下一个就是你的家人。"'
        },
        options: [
            { id: 'A', text: { en: '⚔️ Publish Names: "I won\'t be silenced. I publish the leader\'s name and location tomorrow. Go out fighting."', th: '⚔️ เผยแพร่ชื่อ: "ฉันจะไม่ถูกปิดปาก พรุ่งนี้ฉันจะลงชื่อและที่อยู่หัวหน้าแก๊ง ยอมตายตาหลับ"', zh: '⚔️ 公布名字："我不会保持沉默。我明天就公布头目的名字和位置。战斗到底。"' }, consequence: { en: '💥 Martyrdom. You are assassinated 2 days later. Your death sparks a federal crackdown that crushes the cartel. Legacy verified.', th: '💥 การพลีชีพ คุณถูกลอบสังหาร 2 วันต่อมา การตายของคุณจุดชนวนให้รัฐบาลกวาดล้างแก๊งจนราบคาบ ตำนานได้รับการยืนยัน', zh: '💥 殉道。两天后你被暗杀。你的死引发了联邦打击行动，粉碎了贩毒集团。遗产得到证实。' }, stats: { competence: 50, ethics: 80, leadership: 100, innovation: 0 } },
            { id: 'B', text: { en: '✈️ Flee & Write: "Take the family to a safe house in Norway. Write the story from exile. Safety first."', th: '✈️ หนีและเขียน: "พาครอบครัวไปเซฟเฮาส์ที่นอร์เวย์ เขียนข่าวจากต่างแดน ปลอดภัยไว้ก่อน"', zh: '✈️ 逃离并写作："带家人去挪威的安全屋。流亡写作。安全第一。"' }, consequence: { en: '📓 Exile Voice. You survive. The story gets out, but lacks the on-the-ground impact. You live in hiding forever.', th: '📓 เสียงจากผู้ลี้ภัย คุณรอด ข่าวออกไป แต่ขาดผลกระทบจากพื้นที่จริง คุณต้องหลบซ่อนตลอดไป', zh: '📓 流亡之声。你活下来了。故事传出去了，但缺乏实地影响。你永远躲藏着生活。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '🤐 Stop Writing: "It\'s not worth my daughter\'s life. I engage in self-censorship and switch to sports reporting."', th: '🤐 เลิกเขียน: "ไม่คุ้มกับชีวิตลูกสาวฉัน ฉันเซ็นเซอร์ตัวเองและย้ายไปทำข่าวกีฬา"', zh: '🤐 停止写作："这不值得用我女儿的命去换。我进行自我审查，转行做体育报道。"' }, consequence: { en: '🏳️ Surrender. The cartel wins. You hate yourself every day. The violence continues unchecked.', th: '🏳️ ยอมจำนน แก๊งชนะ คุณเกลียดตัวเองทุกวัน ความรุนแรงดำเนินต่อไปโดยไม่มีใครตรวจสอบ', zh: '🏳️ 投降。贩毒集团赢了。你每天都恨自己。暴力继续不受控制。' }, stats: { competence: 20, ethics: 10, leadership: -40, innovation: 0 } },
            { id: 'D', text: { en: '🤝 Strike a Deal: "Message the boss. \'I\'ll stop looking at the murders if you give me info on your rivals.\'" dangerous game.', th: '🤝 ต่อรอง: "ส่งข้อความหาบอส \'ฉันจะเลิกขุดเรื่องฆาตกรรมถ้าคุณให้ข้อมูลคู่แข่งของคุณ\'" เกมอันตราย', zh: '🤝 达成交易："给老板发信息。\'如果你给我关于你竞争对手的信息，我就不再关注谋杀案。\'"危险的游戏。' }, consequence: { en: '🕴️ Cartel mouthpiece. You become their asset. You destroy their rivals with your pen. You are effectively a gangster now.', th: '🕴️ กระบอกเสียงมาเฟีย คุณกลายเป็นสมบัติของเขา คุณทำลายคู่แข่งด้วยปากกา ตอนนี้คุณก็คือมาเฟียดีๆ นี่เอง', zh: '🕴️ 卡特尔喉舌。你成了他们的资产。你用笔摧毁他们的对手。你现在实际上是个黑帮分子。' }, stats: { competence: 40, ethics: -80, leadership: -20, innovation: 20 } }
        ]
    },
    {
        id: 'journalist_018',
        text: {
            en: '🎸 The Celebrity Rehab: A washed-up Rockstar pays your paper to write a "Comeback Story." He is actually still using heroin and is a mess. The paper needs the money. He offers you VIP access.',
            th: '🎸 การบำบัดจอมปลอม: ร็อกสตาร์ตกอับจ้างหนังสือพิมพ์คุณเขียน "เรื่องราวการกลับมา" จริงๆ เขายังติดเฮโรอีนและเละเทะ หนังสือพิมพ์ต้องการเงิน เขาเสนอสิทธิ์ VIP ให้คุณ',
            zh: '🎸 名人康复：一位过气的摇滚明星付钱给你的报纸写一篇"复出故事"。实际上他还再吸食海洛因，一团糟。报社需要钱。他为你提供VIP权限。'
        },
        options: [
            { id: 'A', text: { en: '🤥 Write the Puff Piece: "He looks great! A true phoenix rising!" Lie through your teeth. Collect paycheck."', th: '🤥 เขียนอวย: "เขาดูดีมาก! นกฟีนิกซ์ตัวจริง!" โกหกหน้าตาย รับเงินเดือน', zh: '🤥 写吹捧文章："他看起来很棒！真正的凤凰涅槃！"睁着眼睛说瞎话。拿薪水。"' }, consequence: { en: '📉 Loss of Trust. Fans buy tickets. He ODs on stage opening night. You look like a fool or a liar.', th: '📉 สูญเสียความเชื่อถือ แฟนๆ ซื้อตั๋ว เขาเสพยาเกินขนาดบนเวทีคืนเปิดตัว คุณดูเหมือนคนโง่หรือคนโกหก', zh: '📉 失去信任。粉丝买票。他在首演之夜在舞台上吸毒过量。你看起来像个傻瓜或骗子。' }, stats: { competence: 20, ethics: -30, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '🕵️ Expośe Reality: "Use the access to document his addiction. Publish \'The Tragic Fall\' instead of the comeback."', th: '🕵️ แฉความจริง: "ใช้สิทธิ์เข้าถึงเพื่อบันทึกการติดยาของเขา เผยแพร่ \'ความตกต่ำอันน่าสลด\' แทนการกลับมา"', zh: '🕵️ 揭露现实："利用访问权限记录他的成瘾情况。发布\'悲惨的堕落\'而不是复出。"' }, consequence: { en: '🏆 Brutal Honesty. The rockstar sues for breach of contract. The story is a masterpiece of tragedy. You win awards, lose the ad money.', th: '🏆 ความซื่อสัตย์ที่โหดร้าย ร็อกสตาร์ฟ้องฐานผิดสัญญา เรื่องราวเป็นโศกนาฏกรรมชิ้นเอก คุณคว้ารางวัล เสียเงินค่าโฆษณา', zh: '🏆 残酷的诚实。摇滚明星起诉违约。这个故事是悲剧的杰作。你赢得了奖项，失去了广告费。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🤝 Intervention: "Refuse to write until he gets real help. \'I won\'t enable you.\' Use leverage to force rehab."', th: '🤝 การแทรกแซง: "ปฏิเสธที่จะเขียนจนกว่าเขาจะได้รับความช่วยเหลือจริง \'ฉันจะไม่ส่งเสริมคุณ\' ใช้อำนาจต่อรองบีบให้บำบัด"', zh: '🤝 干预："在他得到真正的帮助之前拒绝写作。\'我不会纵容你。\'利用杠杆力量以此强迫康复。"' }, consequence: { en: '❤️ Human Act. He hates you, then thanks you. The comeback happens 2 years later, for real. You get the exclusive then.', th: '❤️ การกระทำของมนุษย์ เขาเกลียดคุณ แล้วก็ขอบคุณคุณ การกลับมาเกิดขึ้นจริงในอีก 2 ปีต่อมา คุณได้ข่าวพิเศษตอนนั้น', zh: '❤️ 人性行为。他恨你，然后感谢你。复出在2年后真正发生。那时你得到了独家新闻。' }, stats: { competence: 40, ethics: 70, leadership: 50, innovation: 10 } },
            { id: 'D', text: { en: '🤪 Gonzo Journalism: "Get high with him given the chance. Write a drug-fueled stream of consciousness piece."', th: '🤪 วารสารศาสตร์แบบกอนโซ: "เมายาไปกับเขาถ้ามีโอกาส เขียนบทความจากจิตใต้สำนึกที่ขับเคลื่อนด้วยยาเสพติด"', zh: '🤪 刚佐新闻："有机会就和他一起嗨。写一篇毒品助长的意识流文章。"' }, consequence: { en: '🌪️ Cult Classic. The article is insane and legendary. You go to rehab yourself. A wild ride.', th: '🌪️ ตำนานคัลท์ บทความบ้าคลั่งและเป็นตำนาน คุณต้องเข้าบำบัดเอง ชีวิตสุดเหวี่ยง', zh: '🌪️ 邪典经典。这篇文章疯狂而富有传奇色彩。你自己去了康复中心。疯狂的旅程。' }, stats: { competence: 30, ethics: 0, leadership: 20, innovation: 60 } }
        ]
    },
    {
        id: 'journalist_019',
        text: {
            en: '💻 The Hacker\'s Cache: An anonymous hacker group dumps 1 Terrabyte of emails from every politician in the city. It includes their affairs, medical records, and boring lunch orders. It\'s an invasion of privacy, but contains evidence of graft.',
            th: '💻 คลังแฮกเกอร์: กลุ่มแฮกเกอร์นิรนามทิ้งอีเมล 1 เทราไบต์ของนักการเมืองทุกคนในเมือง รวมทั้งเรื่องชู้สาว ประวัติการรักษา และรายการอาหารกลางวันน่าเบื่อ มันเป็นการละเมิดความเป็นส่วนตัว แต่มีหลักฐานการทุจริต',
            zh: '💻 黑客的缓存：一个匿名黑客组织抛出了该市每一位政治家的1TB电子邮件。其中包括他们的婚外情、医疗记录和无聊的午餐订单。这是侵犯隐私，但包含贪污的证据。'
        },
        options: [
            { id: 'A', text: { en: '🔍 Filter for Crime: "We create a team to sift ONLY for illegal activity. We delete the personal stuff. Responsible leaking."', th: '🔍 กรองหาอาชญากรรม: "เราตั้งทีมเพื่อคัดกรองเฉพาะกิจกรรมผิดกฎหมาย เราลบเรื่องส่วนตัว การปล่อยข่าวอย่างรับผิดชอบ"', zh: '🔍 过滤犯罪信息："我们建立一个团队，只筛选非法活动。我们删除个人信息。负责任的泄密。"' }, consequence: { en: '⚖️ Standard Setter. It takes months. Other papers publish the gossip and beat you. But your stories lead to arrests, not divorces.', th: '⚖️ ผู้กำหนดมาตรฐาน ใช้เวลาหลายเดือน หนังสือพิมพ์อื่นลงข่าวซุบซิบและแซงหน้าคุณ แต่ข่าวของคุณนำไปสู่การจับกุม ไม่ใช่การหย่าร้าง', zh: '⚖️ 标准制定者。这需要几个月的时间。其他报纸发布八卦并在速度上打败你。但你的故事导致逮捕，而不是离婚。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '🤮 Publish All: "WikiLeaks style. Raw data dump. Let the public decide what matters. Radical transparency!"', th: '🤮 เผยแพร่ทั้งหมด: "สไตล์ WikiLeaks ทิ้งข้อมูลดิบ ให้ประชาชนตัดสินว่าอะไรสำคัญ ความโปร่งใสแบบสุดขั้ว!"', zh: '🤮 发布全部："维基解密风格。原始数据转储。让公众决定什么重要。彻底的透明度！"' }, consequence: { en: '💥 Collateral Damage. You ruin guilty men, but also out a closeted gay councilman and mock a senator\'s cancer. You act recklessly.', th: '💥 ความเสียหายข้างเคียง คุณทำลายคนผิด แต่ก็เปิดโปงสมาชิกสภาที่เป็นเกย์และล้อเลียนมะเร็งของวุฒิสมาชิก คุณทำตัวประมาท', zh: '💥 附带伤害。你毁了有罪的人，但也曝光了一位隐秘的同性恋议员，并嘲笑了一位参议员的癌症。你行事鲁莽。' }, stats: { competence: 30, ethics: -40, leadership: 10, innovation: 30 } },
            { id: 'C', text: { en: '🚫 Delete It: "Stolen data is stolen. I verify nothing. I delete the folder and warn the politicians to update passwords."', th: '🚫 ลบมันทิ้ง: "ข้อมูลที่ถูกขโมยก็คือถูกขโมย ฉันไม่ตรวจสอบอะไรทั้งนั้น ฉันลบโฟลเดอร์และเตือนนักการเมืองให้เปลี่ยนรหัสผ่าน"', zh: '🚫 删除它："偷来的数据就是偷来的。我什么都不核实。我删除文件夹并警告政客们更新密码。"' }, consequence: { en: '🐢 Status Quo Protection. You protected privacy but ignored corruption. The hacker calls you a "bootlicker."', th: '🐢 ปกป้องสถานะเดิม คุณปกป้องความเป็นส่วนตัวแต่เพิกเฉยต่อการทุจริต แฮกเกอร์เรียกคุณว่า "คนเลียแข้งเลียขา"', zh: '🐢 现状维持保护。你保护了隐私，但忽视了腐败。黑客称你为"马屁精"。' }, stats: { competence: 20, ethics: 30, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '🤖 AI Search: "Train an AI to find \'money\' and \'bribe\' keywords. Fast track the corruption stories."', th: '🤖 ค้นหาด้วย AI: "เทรน AI ให้หาคำว่า \'เงิน\' และ \'สินบน\' เร่งรัดเรื่องราวการทุจริต"', zh: '🤖 AI搜索："训练AI查找\'钱\'和\'贿赂\'关键字。快速追踪腐败故事。"' }, consequence: { en: '⚡ Efficient Justice. You find the smoking guns in 24 hours. You miss context, but you get the headlines immediately.', th: '⚡ ความยุติธรรมที่รวดเร็ว คุณเจอหลักฐานเด็ดใน 24 ชั่วโมง คุณพลาดบริบท แต่ได้พาดหัวข่าวทันที', zh: '⚡ 高效的正义。你在24小时内找到了确凿的证据。你错过了背景，但你立即得到了头条新闻。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 60 } }
        ]
    },
    {
        id: 'journalist_020',
        text: {
            en: '📢 The State Propaganda: The government offers you the position of "Press Secretary." You will double your salary, get full benefits, and have access to the inner circle. But your job is to spin lies for the President.',
            th: '📢 โฆษณาชวนเชื่อของรัฐ: รัฐบาลเสนอตำแหน่ง "โฆษกประจำสำนักนายกฯ" ให้คุณ เงินเดือนสองเท่า สวัสดิการครบ และเข้าถึงวงใน แต่หน้าที่คุณคือปั้นน้ำเป็นตัวให้ประธานาธิบดี',
            zh: '📢 国家宣传：政府为你提供"新闻秘书"的职位。你的薪水翻倍，福利齐全，并能进入核心圈子。但你的工作是为总统编造谎言。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Accept: "I can change things from the inside! (Or at least get rich). Journalism is dying anyway."', th: '🤝 ยอมรับ: "ฉันเปลี่ยนแปลงสิ่งต่างๆ จากข้างในได้! (หรืออย่างน้อยก็รวย) วารสารศาสตร์มันกำลังตายอยู่แล้ว"', zh: '🤝 接受："我可以从内部改变事情！(或者至少发财)。反正新闻业正在消亡。"' }, consequence: { en: '🧟 Soul Sold. You try to be ethical, but soon you are defending war crimes. You are rich, but former colleagues spit on your shadow.', th: '🧟 ขายวิญญาณ คุณพยายามมีจริยธรรม แต่ไม่นานก็ต้องปกป้องอาชญากรรมสงคราม คุณรวย แต่เพื่อนร่วมงานเก่าถ่มน้ำลายใส่เงาคุณ', zh: '🧟以此出卖灵魂。你试图合乎道德，但很快你就在为战争罪辩护。你很有钱，但以前的同事对你的影子吐口水。' }, stats: { competence: 30, ethics: -50, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🚫 Refuse Loudly: "I\'d rather starve. I write an editorial exposing the offer and mocking the administration."', th: '🚫 ปฏิเสธเสียงดัง: "ฉันยอมอดตายดีกว่า ฉันเขียนบทบรรณาธิการแฉข้อเสนอและล้อเลียนรัฐบาล"', zh: '🚫 大声拒绝："我宁愿饿死。我写了一篇社论揭露这个提议并嘲笑政府。"' }, consequence: { en: '🔥 Enemy of State. The President bans your paper from press briefings. You wear the ban as a badge of honor. Subscriptions rise.', th: '🔥 ศัตรูของรัฐ ประธานาธิบดีแบนหนังสือพิมพ์คุณจากการแถลงข่าว คุณถือการแบนเป็นเกียรติยศ ยอดสมาชิกเพิ่มขึ้น', zh: '🔥 国家公敌。总统禁止你的报纸参加新闻发布会。你把禁令当作荣誉勋章。订阅量上升。' }, stats: { competence: 40, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '🕵️ Double Agent: "Take the job. Feed secrets to my old journalist friends. Sabotage the administration."', th: '🕵️ สายลับสองหน้า: "รับงาน ส่งความลับให้เพื่อนนักข่าวเก่า บ่อนทำลายรัฐบาล"', zh: '🕵️ 双重间谍："接受这份工作。把秘密泄露给我的老记者朋友。破坏政府。"' }, consequence: { en: '🕶️ Historical Spy. You leak the biggest scandals in history. You are eventually caught and jailed for treason, but history vindicates you.', th: '🕶️ สายลับประวัติศาสตร์ คุณปล่อยข่าวฉาวโฉ่ที่สุดในประวัติศาสตร์ ในที่สุดคุณถูกจับและติดคุกข้อหากบฏ แต่ประวัติศาสตร์ตัดสินว่าคุณถูก', zh: '🕶️ 历史间谍。你泄露了历史上最大的丑闻。你最终被捕并因叛国罪入狱，但历史证明你是对的。' }, stats: { competence: 60, ethics: 40, leadership: 20, innovation: 50 } },
            { id: 'D', text: { en: '🤷 Polite Decline: "No thank you. I prefer to stay independent." Keep the door open for sources.', th: '🤷 ปฏิเสธอย่างสุภาพ: "ไม่ ขอบคุณครับ ผมขอทำงานอิสระดีกว่า" เปิดช่องทางไว้สำหรับแหล่งข่าว', zh: '🤷 礼貌婉拒："不，谢谢。我更喜欢保持独立。"为消息来源敞开大门。' }, consequence: { en: '😐 Neutrality. You keep your job and your access. Bland, safe, respectable.', th: '😐 ความเป็นกลาง คุณรักษางานและการเข้าถึงไว้ได้ จืดชืด ปลอดภัย น่าเคารพ', zh: '😐 中立。你保住了你的工作和访问权。平淡，安全，受人尊敬。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'journalist_021',
        text: {
            en: '📝 The Plagiarist Friend: You discover your best friend in the newsroom has been lifting paragraphs from small blogs and foreign papers for years. He is a star reporter.',
            th: '📝 เพื่อนจอมลอก: คุณพบว่าเพื่อนสนิทของคุณในห้องข่าวลอกย่อหน้าจากบล็อกเล็กๆ และหนังสือพิมพ์ต่างประเทศมาหลายปี เขาเป็นนักข่าวดาวรุ่ง',
            zh: '📝 抄袭的朋友：你发现你在新闻编辑室最好的朋友多年来一直从小型博客和外国报纸上抄袭段落。他是明星记者。'
        },
        options: [
            { id: 'A', text: { en: '📢 Report Him: "Integrity is everything. I take the proof to the Editor in Chief. He is fired."', th: '📢 รายงานเขา: "ความซื่อสัตย์คือทุกเลิ่ง ฉันเอาหลักฐานไปให้บรรณาธิการบริหาร เขาถูกไล่ออก"', zh: '📢 举报他："诚信就是一切。我把证据交给主编。他被解雇了。"' }, consequence: { en: '💔 Friendship over. He loses his career and hates you. The newsroom respects your standards but fears you.', th: '💔 เลิกคบ เขาเสียอนาคตและเกลียดคุณ ห้องข่าวเคารพมาตรฐานคุณแต่กลัวคุณ', zh: '💔 友谊结束。他失去了事业，恨你。新闻编辑室尊重你的标准，但害怕你。' }, stats: { competence: 40, ethics: 70, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🤫 Warn Him: "Stop it now. Fix your past articles if you can. Or I will report you." Give him a chance.', th: '🤫 เตือนเขา: "หยุดเดี๋ยวนี้ แก้บทความเก่าถ้าทำได้ ไม่งั้นฉันแจ้งนะ" ให้โอกาสเขา', zh: '🤫 警告他："马上停止。如果可以的话，修改你过去的文章。否则我会举报你。"给他一个机会。' }, consequence: { en: '🕸️ Complicit. He stops, but the stolen work remains. Later, someone else hacks him and exposes it. You are fired for knowing and hiding it.', th: '🕸️ ผู้สมรู้ร่วมคิด เขาหยุด แต่งานที่ขโมยมายังอยู่ ทีหลังคนอื่นแฮกและแฉมัน คุณถูกไล่ออกเพราะรู้เห็นเป็นใจ', zh: '🕸️ 同谋。他停止了，但剽窃的作品还在。后来，别人黑了他并曝光了此事。你因知情不报而被解雇。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🙈 Ignore It: "He brings in revenue. Everyone steals ideas. Not my business."', th: '🙈 เมินเฉย: "เขาทำเงิน ทุกคนก็ขโมยไอเดียทั้งนั้น ไม่ใช่เรื่องของฉัน"', zh: '🙈 忽略它："他带来收入。每个人都窃取创意。不关我的事。"' }, consequence: { en: '📉 Decay. The paper\'s quality drops. Plagiarism becomes culture. Eventually the paper shuts down due to lack of credibility.', th: '📉 เสื่อมถอย คุณภาพลดลง การลอกงานกลายเป็นวัฒนธรรม ในที่สุดหนังสือพิมพ์เจ๊งเพราะขาดความน่าเชื่อถือ', zh: '📉 衰退。报纸质量下降。剽窃成风。最终报纸因缺乏公信力而倒闭。' }, stats: { competence: 10, ethics: -40, leadership: -30, innovation: 0 } },
            { id: 'D', text: { en: '👻 Rewrite History: "Help him silently rewrite archives to remove stolen bits. Save the paper\'s reputation."', th: '👻 แก้ประวัติศาสตร์: "ช่วยเขาเขียนอาร์ไคฟ์ใหม่เงียบๆ เพื่อลบส่วนที่ลอกมา รักษาชื่อเสียงหนังสือพิมพ์"', zh: '👻 重写历史："默默地帮他重写档案，删除被盗部分。挽救报纸的声誉。"' }, consequence: { en: '🤝 Cover-up Team. You save him, but now you own him. It takes weeks of unpaid work.', th: '🤝 ทีมกลบเกลื่อน คุณช่วยเขา แต่ตอนนี้คุณเป็นเจ้าของชีวิตเขา เสียแรงทำงานฟรีหลายสัปดาห์', zh: '🤝 掩盖团队。你救了他，但现在你控制了他。这需要数周的无偿工作。' }, stats: { competence: 30, ethics: -10, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'journalist_022',
        text: {
            en: '🏦 The Live Hostage Crisis: A gunman takes hostages at a bank. He calls YOUR cell phone. He wants to give you an exclusive manifesto live on air. If you put him on, he might surrender. Or he might spread hate speech and inspire copycats.',
            th: '🏦 วิกฤตตัวประกันสด: มือปืนจับตัวประกันในธนาคาร เขาโทรเข้ามือถือ \'ของคุณ\' เขาต้องการแถลงการณ์พิเศษสดออกอากาศ หากคุณให้เขาออก เขาอาจยอมมอบตัว หรืออาจเผยแพร่คำพูดแห่งความเกลียดชังและปลุกปั่นให้คนเลียนแบบ',
            zh: '🏦 直播人质危机：一名枪手在银行劫持人质。他打通了"你的"手机。他想在直播中发表独家宣言。如果你让他上节目，他可能会投降。或者他可能会散布仇恨言论并煽动模仿者。'
        },
        options: [
            { id: 'A', text: { en: '🎙️ Put Him On Live: "Okay, you\'re on air. Talk to me. End this peacefully." Risk the platform for life.', th: '🎙️ ให้เขาออกอากาศสด: "โอเค คุณออกอากาศแล้ว คุยกับผม จบเรื่องนี้อย่างสงบเถอะ" เสี่ยงให้พื้นที่แลกชีวิตคน', zh: '🎙️ 让他直播："好的，这类在上直播。跟我说话。和平结束这一切。"冒着平台的风险是为了生命。' }, consequence: { en: '⚡ High Stakes. He rants for 5 minutes, then releases a hostage. It works. You are criticized for giving terror a mic, but people are alive.', th: '⚡ เดิมพันสูง เขาพล่าม 5 นาทีแล้วปล่อยตัวประกัน ได้ผล คุณถูกวิจารณ์ว่าให้ไมค์ผู้ก่อการร้าย แต่คนรอด', zh: '⚡ 高风险。他咆哮了5分钟，然后释放了一名人质。奏效了。你因给恐怖分子麦克风而受到批评，但人活着。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '📞 Record & Edit: "Talk to me, I\'m recording. I will broadcast it AFTER you walk out." Negotiation.', th: '📞 อัดแล้วตัดต่อ: "คุยกับผม ผมอัดอยู่ ผมจะออกอากาศ \'หลังจาก\' คุณเดินออกมา" การเจรจา', zh: '📞 录音并编辑："跟我说，我在录音。等你走出来\'之后\'我会播出的。"谈判。' }, consequence: { en: '🛡️ Smart Play. He hesitates but agrees. Police storm in while he talks. No manifesto airs. You helped tactical teams.', th: '🛡️ แผนฉลาด เขาลองเล แต่ตกลง ตำรวจบุกเข้าชาร์จตอนเขาคุย ไม่ได้ออกอากาศ คุณช่วยทีมยุทธวิธี', zh: '🛡️ 聪明的做法。他犹豫了一下，但同意了。警察在他说话时冲了进来。没有播出宣扬恐怖主义的宣言。你帮助了战术小组。' }, stats: { competence: 60, ethics: 60, leadership: 60, innovation: 20 } },
            { id: 'C', text: { en: '📵 Hang Up: "We do not negotiate with terrorists. I am calling the police commander." Deny attention.', th: '📵 วางสาย: "เราไม่เจรจากับผู้ก่อการร้าย ผมจะโทรหาผู้บัญชาการตำรวจ" ไม่ให้ค่า', zh: '📵 挂断："我们不与恐怖分子谈判。我要给警察指挥官打电话。"拒绝关注。' }, consequence: { en: '🧊 Cold Logic. He gets angry and hurts a hostage. Police blame you for losing the communication line. Tragedy.', th: '🧊 ตรรกะเย็นชา เขาโกรธและทำร้ายตัวประกัน ตำรวจโทษคุณที่ทำสายหลุด โศกนาฏกรรม', zh: '🧊 冷酷的逻辑。他生气了，伤害了一名人质。警察怪你断了线。悲剧。' }, stats: { competence: 20, ethics: 40, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '📝 Transcribe Only: "I can\'t put voice on air, but I will tweet your demands live." A weird middle ground.', th: '📝 พิมพ์ตามคำบอก: "เอาเสียงออกไม่ได้ แต่จะทวีตข้อเรียกร้องให้สดๆ" ทางสายกลางแปลกๆ', zh: '📝 只做文字记录："我不能播放声音，但我会直播推特你的要求。"奇怪的中间立场。' }, consequence: { en: '📉 Confusion. It\'s too slow. Fans argue in the replies. The situation escalates without your control.', th: '📉 สับสน มันช้าไป แฟนๆ เถียงกันในรีพลาย สถานการณ์บานปลายโดยที่คุณคุมไม่ได้', zh: '📉 混乱。太慢了。粉丝在回复中争吵。局势在你无法控制的情况下升级。' }, stats: { competence: 30, ethics: 20, leadership: 0, innovation: 10 } }
        ]
    },
    {
        id: 'journalist_023',
        text: {
            en: '😶 The Off-The-Record Confession: You are having drinks with a Police Chief. He gets drunk and admits, "I planted evidence on the Viper Gang leader to get him locked up. He\'s guilty of other stuff anyway." He thinks it\'s off the record.',
            th: '😶 คำสารภาพนอกรอบ: คุณดื่มกับสารวัตร เขาเมาและสารภาพ "ฉันยัดหลักฐานหัวหน้าแก๊งไวเปอร์เพื่อให้มันโดนขัง ยังไงมันก็ผิดเรื่องอื่นอยู่ดี" เขาคิดว่านี่คุยนอกรอบ',
            zh: '😶 非正式供词：你正在和警察局长喝酒。他喝醉了，承认道："我在毒蛇帮头目的证据上做了手脚，把他关了起来。反正他也犯了其他事。"他认为这是非正式的谈话。'
        },
        options: [
            { id: 'A', text: { en: '📝 Publish It: "He admitted a felony. Public interest overrides \'off the record\' etiquette. The system is corrupt."', th: '📝 ตีพิมพ์: "เขายอมรับอาชญากรรม ประโยชน์สาธารณะสำคัญกว่ามารยาท \'นอกรอบ\' ระบบมันเน่าเฟะ"', zh: '📝 发布："他承认了重罪。公共利益凌驾于\'非正式\'礼节之上。系统是腐败的。"' }, consequence: { en: '🔥 Bridge Nuked. The Chief is fired and prosecuted. Gang leader goes free on mistrial. No official ever talks to you again.', th: '🔥 เผาสะพาน สารวัตรถูกไล่ออกและดำเนินคดี หัวหน้าแก๊งหลุดคดีเพราะการสอบสวนผิดพลาด ไม่มีข้าราชการคุยกับคุณอีกเลย', zh: '🔥 桥梁被毁。局长被解雇并受到起诉。帮派头目因审判无效而被释放。再也没有官员和你说话了。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🔒 Respect the Code: "I promised off the record (implied). I keep the secret. But I can never look at him the same way."', th: '🔒 เคารพกฎ: "สัญญาคือนอกรอบ (โดยนัย) ฉันเก็บความลับ แต่ฉันมองเขาเหมือนเดิมไม่ได้อีกแล้ว"', zh: '🔒 遵守准则："我承诺过非正式谈话（暗示）。我保守秘密。但我再也无法用同样的眼光看他了。"' }, consequence: { en: '🤐 Burden of Knowledge. You maintain access. Later, you use this knowledge to gently pressure him on other reforms.', th: '🤐 ภาระแห่งความรู้ คุณรักษาคอนเนคชั่น ทีหลังคุณใช้ความรู้นี้กดดันเขาเบาๆ ให้ปฏิรูปเรื่องอื่น', zh: '🤐 知识的负担。你保持访问权。后来，你利用这些知识温和地通过施压促使他在其他方面进行改革。' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🔍 Investigate Independently: "Use his tip as a lead. Find PROOF of the planted evidence without quoting him. \'Sources say...\'"', th: '🔍 สืบสวนอิสระ: "ใช้คำบอกใบ้เป็นเบาะแส หา \'หลักฐาน\' การยัดข้อหาโดยไม่ต้องอ้างเขา \'แหล่งข่าวระบุว่า...\'"', zh: '🔍 独立调查："以他的提示为线索。在不引用他的话的情况下找到伪造证据的\'证据\'。\'消息人士称……\'"' }, consequence: { en: '🏆 Master Class. You confirm the story with forensics. You expose the corruption without burning the specific source (explicitly). High skill.', th: '🏆 ระดับปรมาจารย์ คุณยืนยันเรื่องด้วยนิติเวช คุณแฉการทุจริตโดยไม่เผาแหล่งข่าวคนนั้น (โดยตรง) ทักษะสูง', zh: '🏆 大师级。你用取证确认了这个故事。你在不（明确）暴露特定来源的情况下揭露了腐败。高超的技巧。' }, stats: { competence: 60, ethics: 60, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '💭 Rationalize: "The gangster is bad. The Chief did good. I pretend I didn\'t hear it. Cheers."', th: '💭 หาเหตุผลเข้าข้าง: "นักเลงมันเลว สารวัตรทำดีแล้ว แกล้งทำเป็นไม่ได้ยิน ชนแก้ว"', zh: '💭以此合理化："歹徒是坏人。局长做了好事。我假装没听见。干杯。"' }, consequence: { en: '🐢 Lazy Ethics. You enable police misconduct. If the Chief does it again to an innocent person, that\'s on you.', th: '🐢 จริยธรรมขี้เกียจ คุณส่งเสริมการทำผิดของตำรวจ ถ้าสารวัตรทำแบบนี้กับผู้บริสุทธิ์อีก นั่นเป็นความผิดคุณ', zh: '🐢 懒惰的道德。你纵容警察的不当行为。如果局长再对无辜的人这么做，那就是你的责任。' }, stats: { competence: 10, ethics: -20, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'journalist_024',
        text: {
            en: '🏢 The Conflict of Interest: Your newspaper is bought by "OmniCorp." Your first assignment under new management is to write a review of OmniCorp\'s new (terrible) phone. "Make it shined," implies the editor.',
            th: '🏢 ผลประโยชน์ทับซ้อน: หนังสือพิมพ์ของคุณถูก "ออมนิคอร์ป" ซื้อ งานแรกภายใต้ผู้บริหารใหม่คือรีวิวมือถือ (ห่วยๆ) รุ่นใหม่ของออมนิคอร์ป "เขียนให้มันวิ้งๆ นะ" บรรณาธิการบอกเป็นนัย',
            zh: '🏢 利益冲突：你的报纸被"全能公司"收购了。你在新管理层下的第一个任务是写一篇关于全能公司新出的（糟糕的）手机的评论。"把它写得光鲜亮丽点，"编辑暗示道。'
        },
        options: [
            { id: 'A', text: { en: '🤥 Write the Ad: "Best phone ever! 5 stars!" Keep my job. Who cares about consumer tech reviews?"', th: '🤥 เขียนอวย: "มือถือดีที่สุด! 5 ดาว!" รักษาเก้าอี้ ใครจะสนรีวิวสินค้าไอที?"', zh: '🤥 写广告："史上最好的手机！5星！"保住我的工作。谁在乎消费科技评论？"' }, consequence: { en: '🤡 Sellout. Readers buy it and hate it. They realize you are compromised. Trust erodes instantly.', th: '🤡 คนขายวิญญาณ คนอ่านซื้อไปใช้แล้วด่า เขาตระหนักว่าคุณถูกซื้อ ความเชื่อถือสลายทันที', zh: '🤡 出卖。读者买了之后很讨厌它。他们意识到你妥协了。信任瞬间被侵蚀。' }, stats: { competence: 30, ethics: -30, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '📝 Honest Review: "It overheats and the battery dies. 2 stars." Publish the truth and wait for the axe.', th: '📝 รีวิวตรงๆ: "เครื่องร้อนและแบตหมดไว 2 ดาว" ตีพิมพ์ความจริงแล้วรอโดนเชือด', zh: '📝 诚实评论："过热且电池没电。2星。"发布真相，等待被砍。' }, consequence: { en: '🛡️ Fired for Truth. OmniCorp fires you for "performance." You start a Substack that becomes wildly popular for its honesty.', th: '🛡️ โดนไล่ออกเพราะความจริง ออมนิคอร์ปไล่คุณออกอ้าง "ผลงาน" คุณเปิด Substack ที่ดังระเบิดเพราะความซื่อสัตย์', zh: '🛡️ 因说真话而被解雇。全能公司以"业绩"为由解雇了你。你创办了一个Substack，因其诚实而广受欢迎。' }, stats: { competence: 50, ethics: 70, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🤪 Malicious Compliance: "Focus entirely on the box design. \'The cardboard is exquisite.\' Don\'t mention the phone functionality at all."', th: '🤪 ดื้อแพ่งแบบเนียนๆ: "เน้นแต่ดีไซน์กล่อง \'กระดาษลังประณีตมาก\' ไม่พูดถึงการใช้งานมือถือเลย"', zh: '🤪 恶意服从："完全专注于包装设计。\'纸板很精致。\'根本不提手机功能。"' }, consequence: { en: '😂 Viral Troll. People get the joke. Management is confused but can\'t fire you technically. You fight another day.', th: '😂 กวนโอ๊ยจนไวรัล คนเก็ทมุก ผู้บริหารงงแต่ไล่ออกไม่ได้ตามกฎ คุณสู้ต่อได้อีกวัน', zh: '😂 病毒式恶搞。人们懂这个笑话。管理层很困惑，但在技术上无法解雇你。你改天再战。' }, stats: { competence: 40, ethics: 40, leadership: 20, innovation: 60 } },
            { id: 'D', text: { en: '🤝 Disclaimer header: "Put a huge banner: THIS NEWSPAPER IS OWNED BY OMNICORP. Then write a mild review."', th: '🤝 แปะหัวข้อปฏิเสธความรับผิดชอบ: "ใส่แบนเนอร์ยักษ์: หนังสือพิมพ์นี้เป็นของออมนิคอร์ป แล้วเขียนรีวิวกลางๆ"', zh: '🤝 免责声明标题："放一个巨大的横幅：本报纸由全能公司拥有。然后写一篇温和的评论。"' }, consequence: { en: '⚖️ Transparecy buffer. The readers understand the context. You survive the politics while alerting the audience.', th: '⚖️ กันชนความโปร่งใส ผู้อ่านเข้าใจบริบท คุณรอดจากเกมการเมืองในขณะที่เตือนคนดู', zh: '⚖️ 透明度缓冲区。读者理解背景。你在提醒受众的同时在政治斗争中幸存下来。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 30 } }
        ]
    },
    {
        id: 'journalist_026',
        text: {
            en: '🚔 The Whistleblower\'s Price: A janitor at a major pharmaceutical company brings you documents showing they knowingly sold tainted baby formula. He wants $10,000 for the files. Your paper has a strict "no paying for sources" policy.',
            th: '🚔 ราคาของผู้แจ้งเบาะแส: ภารโรงของบริษัทเวชภัณฑ์ยักษ์ใหญ่นำเอกสารมาให้คุณ ซึ่งแสดงว่าพวกเขาจงใจขายนมผงเด็กที่มีสารปนเปื้อน เขาต้องการเงิน 10,000 ดอลลาร์สำหรับไฟล์เหล่านี้ หนังสือพิมพ์ของคุณมีนโยบายเข้มงวดเรื่อง "การไม่จ่ายเงินให้แหล่งข่าว"',
            zh: '🚔 举报者的代价：一家大型制药公司的清洁工给你带来了一些文件，显示他们明知故犯地销售受污染的婴儿奶粉。他想要1万美元作为这些文件的报酬。你的报纸有严格的"不向消息来源付费"的政策。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Pay Him Personally: "I empty my savings. $10k is a small price to save babies. I won\'t tell the editor where I got the money."',
                    th: '💰 จ่ายเอง: "ฉันถอนเงินออมทั้งหมด 10,000 ดอลลาร์เป็นราคาที่เล็กน้อยเพื่อช่วยเด็กๆ ฉันจะไม่บอกบรรณาธิการว่าเอาเงินมาจากไหน"',
                    zh: '💰 自掏腰包："我清空了我的储蓄。1万美元为了救婴儿只是个小代价。我不会告诉编辑我从哪里弄来的钱。" '
                },
                consequence: {
                    en: '🏆 Life Saver. The story breaks, the formula is recalled, lives are saved. But you are now broke and living a lie. If it ever comes out, you\'re fired.',
                    th: '🏆 ผู้ช่วยชีวิต ข่าวรั่วไหล นมผงถูกเรียกคืน ช่วยชีวิตคนไว้ได้ แต่ตอนนี้คุณถังแตกและต้องอยู่กับคำโกหก ถ้าเรื่องแดงเมื่อไหร่ คุณโดนไล่ออกแน่',
                    zh: '🏆 救命恩人。故事传开了，奶粉被召回，生命得救。但你现在破产了，生活在谎言中。如果事情败露，你会被开除。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Persuade for Free: "I look him in the eye and say, \'Doing the right thing is its own reward. If you take the money, the story looks like a paid hit.\'"',
                    th: '🤝 โน้มน้าวให้ฟรี: "ฉันสบตาเขาแล้วพูดว่า \'การทำในสิ่งที่ถูกต้องคือรางวัลในตัวมันเอง ถ้าคุณรับเงิน ข่าวนี้จะดูเหมือนการรับจ้างทำลายชื่อเสียง\'"',
                    zh: '🤝 说服他免费提供："我看着他的眼睛说：\'做正确的事本身就是奖励。如果你拿了钱，这个故事看起来就像是花钱买来的攻击。\'"'
                },
                consequence: {
                    en: '📈 Moral Victory. He hesitates but hands over the files. The story is bulletproof because it was provided for the public good. You win a Pulitzer.',
                    th: '📈 ชัยชนะทางศีลธรรม เขาลังเลแต่ก็ส่งมอบไฟล์ให้ ข่าวนี้ไม่มีที่ติเพราะทำเพื่อประโยชน์สาธารณะ คุณคว้ารางวัลพูลิตเซอร์',
                    zh: '📈 道德上的胜利。他犹豫了一下，但还是交出了文件。因为这是为了公共利益而提供的，所以这个故事无懈可击。你获得了普利策奖。'
                },
                stats: { competence: 60, ethics: 80, leadership: 60, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🚫 Follow Policy: "I refuse to pay. He leaves with the documents. The formula stays on the shelves. One month later, babies start dying."',
                    th: '🚫 ทำตามนโยบาย: "ฉันปฏิเสธที่จะจ่าย เขาจากไปพร้อมเอกสาร นมผงยังคงวางขายอยู่ อีกหนึ่งเดือนต่อมา เด็กๆ เริ่มเสียชีวิต"',
                    zh: '🚫 遵守政策："我拒绝付钱。他带着文件离开了。奶粉仍留在货架上。一个月后，婴儿开始死亡。"'
                },
                consequence: {
                    en: '💀 Ethical Purist Failure. You kept the paper\'s hands clean, but children died. You are a "good journalist" but a questionable human.',
                    th: '💀 ความล้มเหลวของนักจริยธรรมบริสุทธิ์ คุณรักษาความสะอาดของหนังสือพิมพ์ไว้ได้ แต่เด็กๆ ตาย คุณเป็น "นักข่าวที่ดี" แต่เป็นมนุษย์ที่น่ากังขา',
                    zh: '💀 伦理纯粹主义的失败。你让报纸保持了清白，但孩子们死了。你是一个"好记者"，但作为一个人的品质值得怀疑。'
                },
                stats: { competence: 40, ethics: 50, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Steal the Files: "Wait for him to go to the bathroom. I photograph the documents with my phone. I didn\'t pay for them!"',
                    th: '🕵️ ขโมยไฟล์: "รอให้เขาไปเข้าห้องน้ำ ฉันถ่ายรูปเอกสารด้วยมือถือ ฉันไม่ได้จ่ายเงินซื้อนะ!"',
                    zh: '🕵️ 偷取文件："等他上厕所。我用手机拍下这些文件。我可没付钱！"'
                },
                consequence: {
                    en: '🕶️ Shadow Operative. You get the scoop. The company sues for theft of intellectual property. You use the public interest defense in court.',
                    th: '🕶️ ปฏิบัติการเงา คุณได้ข่าวเด็ด บริษัทฟ้องฐานขโมยทรัพย์สินทางปัญญา คุณใช้ข้ออ้างเรื่องประโยชน์สาธารณะในการสู้คดี',
                    zh: '🕶️ 影子特工。你得到了独家消息。公司起诉窃取知识产权。你在法庭上使用公共利益作为辩护。'
                },
                stats: { competence: 50, ethics: 10, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'journalist_027',
        text: {
            en: '🎤 The Hostile Interview: You are interviewing a dictator who is a major trade partner for your country. He is charming but you have proof of his secret police disappearings. Your government asks you to "keep it friendly."',
            th: '🎤 บทสัมภาษณ์อันตราย: คุณกำลังสัมภาษณ์เผด็จการที่เป็นพันธมิตรทางการค้ารายใหญ่ของประเทศคุณ เขามีเสน่ห์แต่คุณมีหลักฐานว่าตำรวจลับของเขาทำให้คนหายตัวไป รัฐบาลของคุณขอให้คุณ "พูดคุยอย่างเป็นมิตร"',
            zh: '🎤 敌对采访：你正在采访一位独裁者，他是我国的主要贸易伙伴。他很有魅力，但你有他的秘密警察致人失踪的证据。你的政府要求你"保持友好"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💥 The Ambush: "I wait until the cameras are live and ask, \'Where are the 300 students who went missing last June?\' No holding back."',
                    th: '💥 การดักซุ่ม: "ฉันรอจนกล้องถ่ายทอดสดแล้วถามว่า \'นักศึกษา 300 คนที่หายไปเมื่อเดือนมิถุนายนที่แล้วอยู่ที่ไหน?\' ไม่มีการออมมือ"',
                    zh: '💥 伏击："我等到镜头直播时问：\'去年六月失踪的那300名学生在哪里？\'绝不退缩。" '
                },
                consequence: {
                    en: '🌋 International Incident. He cuts the interview. You are deported immediately. Your government is furious, but you are a global icon for free press.',
                    th: '🌋 เหตุการณ์ระหว่างประเทศ เขาตัดจบการสัมภาษณ์ คุณถูกเนรเทศทันที รัฐบาลคุณโกรธจัด แต่คุณกลายเป็นไอคอนระดับโลกสำหรับเสรีภาพสื่อ',
                    zh: '🌋 国际事件。他中断了采访。你立即被驱逐出境。你的政府非常愤怒，但你成为了全球新闻自由的偶像。'
                },
                stats: { competence: 50, ethics: 80, leadership: 70, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🎭 The Slow Trap: "I start with the friendly trade stuff. I lead him into a sense of security, then ask about the police budget. Subtle pressure."',
                    th: '🎭 กับดักที่เชื่องช้า: "ฉันเริ่มจากเรื่องการค้าที่เป็นมิตร ทำให้เขารู้สึกปลอดภัย แล้วค่อยถามเรื่องงบประมาณตำรวจ กดดันอย่างแนบเนียน"',
                    zh: '🎭 慢动作陷阱："我从友好的贸易事务开始。我让他产生一种安全感，然后询问有关警察预算的问题。微妙的压力。"'
                },
                consequence: {
                    en: '📈 Tactical Win. He slips up and admits "security operations" were increased during the protests. You get the quote without getting kicked out.',
                    th: '📈 ชัยชนะทางยุทธวิธี เขาหลุดปากยอมรับว่ามีการเพิ่ม "ปฏิบัติการด้านความปลอดภัย" ระหว่างการประท้วง คุณได้คำพูดเด็ดโดยไม่ถูกไล่ออก',
                    zh: '📈 战术胜利。他失言并承认在抗议期间增加了"安全行动"。你在没有被踢出的情况下得到了引述。'
                },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Obedience: "I ask the friendly questions provided by the government. \'Tell us about your economic vision, Excellency.\' Safety first."',
                    th: '🤝 การเชื่อฟัง: "ฉันถามคำถามที่เป็นมิตรตามที่รัฐบาลเตรียมไว้ \'เล่าเรื่องวิสัยทัศน์ทางเศรษฐกิจให้เราฟังหน่อยครับ ท่านประธานาธิบดี\' ปลอดภัยไว้ก่อน"',
                    zh: '🤝 顺从："我询问政府提供的友好问题。\'阁下，请向我们谈谈您的经济愿景。\'安全第一。"'
                },
                consequence: {
                    en: '📉 Mouthpiece. You are mocked by colleagues as a "regime puppet." You kept your job and access, but lost your soul.',
                    th: '📉 กระบอกเสียง คุณถูกเพื่อนร่วมงานล้อเลียนว่าเป็น "หุ่นเชิดเผด็จการ" คุณรักษางานและคอนเนคชั่นไว้ได้ แต่สูญเสียตัวตน',
                    zh: '📉 传声筒。你被同事嘲笑为"政权傀儡"。你保住了你的工作和访问权，但失去了自我的灵魂。'
                },
                stats: { competence: 20, ethics: 10, leadership: -30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Cancel the Interview: "I refuse to interview him if I can\'t ask hard questions. I walk away entirely."',
                    th: '🤐 ยกเลิกการสัมภาษณ์: "ฉันปฏิเสธที่จะสัมภาษณ์เขาถ้าฉันถามคำถามยากๆ ไม่ได้ ฉันเดินจากไปเลย"',
                    zh: '🤐 取消采访："如果我不能提难处理的问题，我就拒绝采访他。我完全走开。"'
                }
            }
        ]
    },
    {
        id: 'journalist_028',
        text: {
            en: '🧠 The AI Reporter: Your paper replaces 50% of the staff with an AI that summarizes news. The AI starts making "editorial decisions" that favor the advertisers who fund it. You are the last human editor.',
            th: '🧠 นักข่าว AI: หนังสือพิมพ์ของคุณแทนที่พนักงาน 50% ด้วย AI ที่สรุปข่าว AI เริ่มทำการ "ตัดสินใจทางบรรณาธิการ" ที่เอื้อประโยชน์ต่อผู้ลงโฆษณาที่เป็นคนให้ทุนคุณ คุณคือบรรณาธิการที่เป็นมนุษย์คนสุดท้าย',
            zh: '🧠 AI记者：你的报纸用一个总结新闻的AI替换了50%的员工。AI开始做出利于资助它的广告商的"编辑决策"。你是最后一名人类编辑。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛠️ Sabotage the Algorithm: "I feed the AI conflicting data so it starts producing nonsense. Prove that human intuition is better."',
                    th: '🛠️ บ่อนทำลายอัลกอริทึม: "ฉันป้อนข้อมูลที่ขัดแย้งกันให้ AI จนมันเริ่มผลิตข่าวไร้สาระ เพื่อพิสูจน์ว่าสัญชาตญาณมนุษย์ดีกว่า"',
                    zh: '🛠️ 破坏算法："我向AI提供冲突的数据，让它开始产生废话。证明人类直觉更好。" '
                },
                consequence: {
                    en: '📉 Chaos. The paper\'s reputation is destroyed. Management shuts it down entirely. You saved the "soul" of journalism by killing the paper.',
                    th: '📉 ความโกลาหล ชื่อเสียงหนังสือพิมพ์พ่นพินาศ ผู้บริหารสั่งปิดกิจการทั้งหมด คุณช่วย "จิตวิญญาณ" ของวารสารศาสตร์ไว้ได้ด้วยการฆ่าหนังสือพิมพ์ทิ้ง',
                    zh: '📉 混乱。报纸的声誉被毁了。管理层完全关闭了它。你通过毁灭报纸挽救了新闻业的"灵魂"。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '✍️ The Human Resistance: "I write a column every day explicitly debunking the AI\'s bias. \'Why the machine lied to you today.\' Fight from the inside."',
                    th: '✍️ ชุมนุมมนุษย์ต่อต้าน: "ฉันเขียนคอลัมน์ทุกวันเพื่อแฉอคติของ AI \'ทำไมเครื่องจักรถึงโกหกคุณในวันนี้\' สู้จากข้างใน"',
                    zh: '✍️ 人类抵抗军："我每天写一个专栏，明确揭露AI的偏见。\'为什么机器今天骗了你。\'从内部战斗。"'
                },
                consequence: {
                    en: '🏆 Cult Following. Readers start ignoring the AI and only read YOU. You become the most influential journalist in the city.',
                    th: '🏆 ผู้ติดตามที่เหนียวแน่น ผู้อ่านเริ่มเมิน AI และอ่านแต่ \'คุณ\' คุณกลายเป็นนักข่าวที่มีอิทธิพลที่สุดในเมือง',
                    zh: '🏆 拥趸。读者开始无视AI，只读"你"的文章。你成为了该市最有影响力的记者。'
                },
                stats: { competence: 60, ethics: 70, leadership: 80, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Collaborate & Guide: "I work with the programmers to tweak the AI. I can\'t stop it, so I try to make it slightly more ethical."',
                    th: '🤝 ร่วมมือและชี้แนะ: "ฉันทำงานร่วมกับโปรแกรมเมอร์เพื่อปรับแต่ง AI ฉันหยุดมันไม่ได้ ดังนั้นฉันจึงพยายามทำให้มันมีจริยธรรมมากขึ้นเล็กน้อย"',
                    zh: '🤝 协作与引导："我与程序员合作调整AI。我无法阻止它，所以我试着让它稍微符合点伦理。"'
                },
                consequence: {
                    en: '🌫️ Compromised Future. The AI is better, but still biased. You are now an "AI Ethics Officer," not a journalist. The profession has changed.',
                    th: '🌫️ อนาคตที่ต้องแลก AI ดีขึ้นแต่ยังมีอคติ ตอนนี้คุณคือ "เจ้าหน้าที่จริยธรรม AI" ไม่ใช่นักข่าว อาชีพนี้เปลี่ยนไปแล้ว',
                    zh: '🌫️ 妥协的未来。AI变好了，但仍有偏见。你现在是"AI伦理干事"，而不是记者。这个职业已经变了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Accept the Inevitable: "AI is faster and cheaper. I embrace it and learn to prompt. It\'s just another tool like the typewriter."',
                    th: '🤷 ยอมรับความจริง: "AI เร็วและถูกกว่า ฉันเปิดรับและเรียนรู้วิธีกำกับมัน มันก็แค่เครื่องมืออย่างหนึ่งเหมือนเครื่องพิมพ์ดีด"',
                    zh: '🤷 接受必然："AI更快更便宜。我拥抱它并学习提示。它就像打字机一样只是另一个工具。"'
                }
            }
        ]
    },
    {
        id: 'journalist_029',
        text: {
            en: '⛪ The Religious Scandal: You have evidence that a beloved local religious leader is embezzling charity funds to buy luxury cars. The community loves him and has threatened to burn down the newsroom if you "slander" him.',
            th: '⛪ เรื่องอื้อฉาวทางศาสนา: คุณมีหลักฐานว่าผู้นำทางศาสนาที่เป็นที่รักในพื้นที่ยักยอกเงินการกุศลไปซื้อรถหรู ชุมชนรักเขามากและขู่ว่าจะเผาห้องข่าวถ้าคุณ "ใส่ร้าย" เขา',
            zh: '⛪ 宗教丑闻：你有证据表明一位受人爱戴的当地宗教领袖挪用慈善基金购买豪华轿车。社区热爱他，并威胁说，如果你"诽谤"他，就要烧掉新闻编辑室。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Publish with Police: "I call the FBI first. When they raid the church, I drop the story. The community can\'t argue with handcuffs."',
                    th: '🔥 ตีพิมพ์พร้อมตำรวจ: "ฉันโทรหา FBI ก่อน เมื่อพวกเขาบุกค้นโบสถ์ ฉันก็ลงข่าว ชุมชนเถียงกุญแจมือไม่ได้หรอก"',
                    zh: '联合警察发布："我先给FBI打电话。当他们突袭教堂时，我发布了故事。社区无法反驳手铐。" '
                },
                consequence: {
                    en: '⚖️ Justice Served. The leader is arrested. There are protests, but the cold hard facts of the bank records prevail. You are safe, but hated.',
                    th: '⚖️ ความยุติธรรมเกิดขึ้น ผู้นำถูกจับ มีการประท้วง แต่ข้อเท็จจริงที่เย็นชาจากบัญชีธนาคารชนะทุกอย่าง คุณปลอดภัยแต่ถูกเกลียด',
                    zh: '⚖️ 正义得到了伸张。领袖被捕。虽然有抗议活动，但银行记录这一冷冰冰的事实占据了上风。你安全了，但被人恨之入骨。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Private Confrontation: "I show him the evidence privately. \'Return the money and retire quietly, or I publish.\' Give him an exit."',
                    th: '🤝 เผชิญหน้าส่วนตัว: "ฉันเอาหลักฐานให้เขาดูเป็นการส่วนตัว \'คืนเงินและเกษียณไปเงียบๆ ไม่งั้นฉันลงข่าว\' ให้ทางออกเขา"',
                    zh: '🤝 私下对峙："我私下向他展示证据。\'还钱并悄然退休，否则我就发布真相。\'给他一个台阶下。"'
                },
                consequence: {
                    en: '🤐 Quiet Solution. He retires citing "health reasons." The money is returned. No riots. But victims never know the full truth.',
                    th: '🤐 ทางออกที่เงียบเชียบ เขาเกษียณโดยอ้าง "เหตุผลทางสุขภาพ" เงินถูกคืน ไม่มีการจลาจล แต่เหยื่อไม่เคยรู้ความจริงทั้งหมด',
                    zh: '🤐 悄悄解决。他以"健康原因"为由退休。钱退还了。没有骚乱。但受害者永远不知道全部真相。'
                },
                stats: { competence: 40, ethics: 40, leadership: 70, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '👊 Full Exposure: "Publish it tomorrow morning. Headlines, photos, everything. We don\'t negotiate with mobs."',
                    th: '👊 เปิดโปงเต็มรูปแบบ: "ตีพิมพ์พรุ่งนี้เช้า พาดหัว รูปภาพ ทุกอย่าง เราไม่เจรจากับม็อบ"',
                    zh: '👊 全面曝光："明天早上发布。头条、照片，一切。我们不与暴民谈判。"'
                },
                consequence: {
                    en: '💥 Newsroom Burned. A mob attacks your office. You survive, but your legacy is ash. The leader is still arrested, but the town is divided for a decade.',
                    th: '💥 ห้องข่าวถูกเผา ม็อบบุกออฟฟิศคุณ คุณรอดมาได้ แต่ผลงานกลายเป็นเถ้าถ่าน ผู้นำยังถูกจับ แต่เมืองแตกแยกไปเป็นสิบปี',
                    zh: '💥 新闻编辑室被焚毁。一群暴民袭击了你的办公室。你幸存了下来，但你的遗产化为灰烬。领袖还是被捕了，但这个小镇分裂了十年。'
                },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤫 Bury the Story: "The social stability of the town is more important than a few stolen cars. I burn the files."',
                    th: '🤫 ฝังข่าวทิ้ง: "เสถียรภาพทางสังคมของเมืองสำคัญกว่ารถที่ถูกขโมยไม่กี่คัน ฉันเผาไฟล์ทิ้ง"',
                    zh: '🤫 埋没故事："小镇的社会稳定比几辆被盗的汽车更重要。我烧掉了文件。"'
                }
            }
        ]
    },
    {
        id: 'journalist_030',
        text: {
            en: '🧬 The Genetic Leak: You find proof that a billionaire is building a private island to experiment with human-animal hybrids. He has "Cat-People" servants. It sounds like science fiction, but it\'s real.',
            th: '🧬 ข้อมูลพันธุกรรมรั่วไหล: คุณพบหลักฐานว่ามหาเศรษฐีกำลังสร้างเกาะส่วนตัวเพื่อทดลองไฮบริดระหว่างมนุษย์กับสัตว์ เขามีคนรับใช้เป็น "มนุษย์แมว" ฟังดูเหมือนนิยายวิทยาศาสตร์ แต่มันเรื่องจริง',
            zh: '🧬 基因泄露：你发现有证据表明一位亿万富翁正在建造一个私人岛屿，以进行人畜杂交实验。他有"猫人"仆人。这听起来像科幻小说，但它是真的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚁 Infiltrate the Island: "I hire a helicopter and land there with a hidden camera. I need photo proof before anyone believes this."',
                    th: '🚁 แทรกซึมเกาะ: "ฉันเช่าเฮลิคอปเตอร์และลงจอดที่นั่นพร้อมกล้องแอบถ่าย ฉันต้องการหลักฐานรูปถ่ายก่อนจะมีใครเชื่อเรื่องนี้"',
                    zh: '🚁 潜入岛屿："我租了一架直升机，带着隐藏摄像头降落在那儿。在有人相信这件事之前，我需要照片证据。" '
                },
                consequence: {
                    en: '📸 Global Shocker. The photos go viral. The island is raided by UN forces. You are the most famous journalist in history. Sci-fi is now reality.',
                    th: '📸 เรื่องช็อกโลก รูปถ่ายกลายเป็นไวรัล เกาะถูกกองกำลัง UN บุกค้น คุณกลายเป็นนักข่าวที่มีชื่อเสียงที่สุดในประวัติศาสตร์ นิยายวิทยาศาสตร์กลายเป็นความจริง',
                    zh: '📸 全球震惊。这些照片在网上疯传。联合国部队袭击了该岛。你是历史上最有名的记者。科幻小说现在变成了现实。'
                },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '💻 Satellite Sleuth: "I buy high-res satellite footage from a Russian firm. No need to risk my life. Remote investigation."',
                    th: '💻 นักสืบดาวเทียม: "ฉันซื้อภาพถ่ายดาวเทียมความละเอียดสูงจากบริษัทรัสเซีย ไม่ต้องเสี่ยงชีวิต สืบสวนจากระยะไกล"',
                    zh: '💻 卫星侦探："我从一家俄罗斯公司购买高清卫星镜头。没必要冒生命危险。远程调查。"'
                },
                consequence: {
                    en: '📈 Hard Evidence. You see the half-human shapes in the infrared scans. The world is terrified. You win every science journalism award available.',
                    th: '📈 หลักฐานมัดตัว คุณเห็นรูปร่างครึ่งมนุษย์ในการสแกนอินฟราเรด โลกหวาดกลัว คุณคว้ารางวัลวารสารศาสตร์วิทยาศาสตร์ทุกรางวัลที่มี',
                    zh: '📈 有力的证据。你在红外扫描中看到了半人状的形状。世界感到恐惧。你赢得了所有能拿到的科学新闻奖。'
                },
                stats: { competence: 60, ethics: 40, leadership: 40, innovation: 80 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Interview the Billionaire: "Go to him directly. \'Explain yourself.\' Let him defend his \'new evolution.\'" Give him a platform.',
                    th: '🤝 สัมภาษณ์มหาเศรษฐี: "ไปหาเขาโดยตรง \'อธิบายมาซิ\' ให้เขาแก้ตัวเรื่อง \'วิวัฒนาการใหม่\' ของเขา"',
                    zh: '🤝 采访亿万富翁："直接去找他。\'解释一下。\'让他为他的\'新进化\'辩护。"给他一个平台。'
                },
                consequence: {
                    en: '🧟 PR Win for Him. He is charming and talks about "curing all diseases." A segment of the public starts supporting him. You gave a monster a voice.',
                    th: '🧟 ชัยชนะ PR ของเขา เขามีเสน่ห์และพูดเรื่อง "การรักษาทุกโรค" ประชาชนบางส่วนเริ่มสนับสนุนเขา คุณให้เสียงแก่สัตว์ประหลาด',
                    zh: '🧟以此为他赢得公关胜利。他很有魅力，大谈"治愈所有疾病"。一部分公众开始支持他。你给了一个怪物发声的机会。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🚫 Burn the Tip: "This is too weird. If I print this, my paper becomes a tabloid. I delete the file and forget I ever saw it."',
                    th: '🚫 ทำลายเบาะแส: "นี่มันแปลกเกินไป ถ้าฉันลงข่าวนี้ หนังสือพิมพ์ฉันจะกลายเป็นแท็บลอยด์ ฉันลบไฟล์และลืมว่าเคยเห็นมัน"',
                    zh: '🚫 放弃线索："这太离奇了。如果我把这个印出来，我的报纸就会变成小报。我删除了文件，忘掉我见过它。"'
                }
            }
        ]
    },
    {
        id: 'journalist_031',
        text: {
            en: '🚔 The Bodycam Leak: A whistleblower gives you bodycam footage of police brutality. It is graphic and disturbing. The police union threatens a lawsuit if you release it.',
            th: '🚔 กล้องติดตัวตำรวจหลุด: ผู้แจ้งเบาะแสให้วิดีโอกล้องติดตัวตำรวจที่มีความรุนแรง มันน่ากลัวและรบกวนจิตใจ สหภาพตำรวจขู่ฟ้องถ้าคุณปล่อยมัน',
            zh: '🚔 随身摄像头泄露：一名举报人给了你警察暴行的随身摄像头录像。这是生动且令人不安的。警察工会威胁说如果你发布它，就会提起诉讼。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Release Unedited: "The public must see the truth, raw and ugly. Transparency is non-negotiable."',
                    th: '📢 ปล่อยแบบไม่ตัดต่อ: "ประชาชนต้องเห็นความจริง ดิบและน่าเกลียด ความโปร่งใสเป็นสิ่งที่ไม่สามารถต่อรองได้"',
                    zh: '📢 未经编辑发布："公众必须看到真相，原始而丑陋。透明度是不可谈判的。"'
                },
                consequence: {
                    en: '🔥 Civil Unrest: Protests erupt. The officers are charged. The lawsuit drains your paper\'s budget, but you win a Pulitzer.',
                    th: '🔥 ความไม่สงบในสังคม: การประท้วงปะทุขึ้น เจ้าหน้าที่ถูกตั้งข้อหา การฟ้องร้องทำให้งบประมาณหนังสือพิมพ์หมดไป แต่คุณได้รางวัลพูลิตเซอร์',
                    zh: '🔥 骚乱：抗议爆发。警察被指控。诉讼耗尽了报社的预算，但你赢得了普利策奖。'
                },
                stats: { competence: 80, ethics: 70, leadership: 60, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '✂️ Edit for Dignity: "We blur faces and cut the most gruesome parts. We tell the story without traumatizing the audience."',
                    th: '✂️ ตัดต่อเพื่อศักดิ์ศรี: "เราเบลอหน้าและตัดส่วนที่น่าสยดสยองที่สุด เราเล่าเรื่องโดยไม่ทำให้ผู้ชมบอบช้ำทางจิตใจ"',
                    zh: '✂️ 为尊严而编辑："我们模糊了面部并剪掉了最可怕的部分。我们在不让观众受到创伤的情况下讲述这个故事。"'
                },
                consequence: {
                    en: '⚖️ Measured Impact: The story lands, but critics say you "sanitized" state violence. The police union still sues.',
                    th: '⚖️ ผลกระทบที่วัดได้: เรื่องราวไปถึง แต่ผู้วิจารณ์บอกว่าคุณ "ทำความสะอาด" ความรุนแรงของรัฐ สหภาพตำรวจยังคงฟ้อง',
                    zh: '⚖️ 衡量的影响：故事落地了，但批评者说你"净化"了国家暴力。警察工会仍然起诉。'
                },
                stats: { competence: 60, ethics: 80, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Police Comment First: "I show it to the Chief first. \'Explain this or I run it.\' Give them a chance to verify context."',
                    th: '🤝 ขอความเห็นตำรวจก่อน: "ฉันให้หัวหน้าดูเป็นคนแรก \'อธิบายมาหรือฉันจะลงข่าว\' ให้โอกาสพวกเขาตรวจสอบบริบท"',
                    zh: '🤝 警方先评论："我先给局长看。\'解释一下这个，否则我就发了。\'给他们一个验证背景的机会。"'
                },
                consequence: {
                    en: '🛑 Injunction: They use the heads-up to get a court order blocking publication. You got scooped by a blogger.',
                    th: '🛑 คำสั่งห้าม: พวกเขาใช้การแจ้งเตือนเพื่อขอคำสั่งศาลระงับการพิมพ์ คุณโดนบล็อกเกอร์ตัดหน้า',
                    zh: '🛑 禁令：他们利用预警获得法院命令阻止发布。你被博主抢了先机。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🗑️ Bury It: "The city can\'t handle riots right now. I delete the footage." You choose stability over truth.',
                    th: '🗑️ ฝังเรื่อง: "เมืองรับมือกับจลาจลไม่ไหวตอนนี้ ฉันลบวิดีโอ" คุณเลือกความมั่นคงมากกว่าความจริง',
                    zh: '🗑️ 埋葬它："城市现在无法应对骚乱。我删除了录像。"你选择了稳定而不是真相。'
                },
                consequence: {
                    en: '🤐 Complicity: The whistleblower leaks it elsewhere and names you as a coward. Your career implodes.',
                    th: '🤐 การสมรู้ร่วมคิด: ผู้แจ้งเบาะแสปล่อยที่อื่นและระบุชื่อคุณว่าเป็นคนขี้ขลาด อาชีพของคุณพังทลาย',
                    zh: '🤐 共谋：举报人在别处泄露了它，并指名道姓说你是懦夫。你的职业生涯崩溃了。'
                }
            }
        ]
    },
    {
        id: 'journalist_032',
        text: {
            en: '💊 The Wonder Drug: A pharma company claims a new drug cures Alzheimer’s. They offer you an exclusive first look, but you must sign an NDA that prevents you from publishing negative data.',
            th: '💊ยาวิเศษ: บริษัทยาอ้างว่ายาใหม่รักษาอัลไซเมอร์ได้ พวกเขาให้สิทธิ์คุณดูเป็นคนแรก แต่คุณต้องเซ็น NDA ที่ห้ามคุณเผยแพร่ข้อมูลเชิงลบ',
            zh: '💊 神奇药物：一家制药公司声称一种新药可以治愈阿尔茨海默氏症。他们为你提供独家首发，但你必须签署一份保密协议，禁止你发布负面数据。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✍️ Sign and Sleuth: "I sign. I write the puff piece, but secretly investigate the side effects for a later exposé."',
                    th: '✍️ เซ็นและสืบ: "ฉันเซ็น ฉันเขียนบทความอวย แต่แอบสืบผลข้างเคียงเพื่อแฉทีหลัง"',
                    zh: '✍️ 签字并侦查："我签字。我写吹捧文章，但秘密调查副作用以便日后曝光。"'
                },
                consequence: {
                    en: '🕶️ Double Agent: You breach the contract later, but the initial hype hurt patients. You are sued into oblivion.',
                    th: '🕶️ สายลับสองหน้า: คุณผิดสัญญาในภายหลัง แต่กระแสเริ่มต้นทำร้ายผู้ป่วย คุณถูกฟ้องจนหมดตัว',
                    zh: '🕶️ 双重间谍：你后来违约了，但最初的炒作伤害了病人。你被起诉至死。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '⛔ Refuse NDA: "Journalism is not PR. I will review it honestly or not at all." You walk away.',
                    th: '⛔ ปฏิเสธ NDA: "วารสารศาสตร์ไม่ใช่ PR ฉันจะรีวิวอย่างซื่อสัตย์หรือไม่ทำเลย" คุณเดินหนีออกมา',
                    zh: '⛔ 拒绝保密协议："新闻不是公关。我要么诚实在这个评论，要么根本不评论。"你走开了。'
                },
                consequence: {
                    en: '🐢 Slow Truth: They ban you. A rival outlet hypes the drug. 6 months later, people die. You write the "I told you so" piece.',
                    th: '🐢 ความจริงที่ช้า: พวกเขาแบนคุณ คู่แข่งอวยยา 6 เดือนต่อมา คนตาย คุณเขียนบทความ "ฉันบอกแล้ว"',
                    zh: '🐢 缓慢真相：他们封杀了你。竞争对手大肆宣传这种药。6个月后，有人死了。你写了"早就告诉你了"的文章。'
                },
                stats: { competence: 60, ethics: 90, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '💰 Stock Tip: "I decline the story but buy stock in the company." You use the insider info for profit.',
                    th: '💰 แหล่งขาวหุ้น: "ฉันปฏิเสธเรื่องราวแต่ซื้อหุ้นบริษัท" คุณใช้ข้อมูลภายในเพื่อหากำไร',
                    zh: '💰 股票内幕："我拒绝了这个故事，但买了公司的股票。"你利用内幕消息获利。'
                },
                consequence: {
                    en: '⚖️ SEC Investigation: Insider trading gets you 3 years in federal prison. Greedy.',
                    th: '⚖️ การสอบสวน SEC: การซื้อขายหลักทรัพย์โดยใช้ข้อมูลวงในทำให้คุณติดคุกรัฐบาลกลาง 3 ปี โลภมาก',
                    zh: '⚖️ 证监会调查：内幕交易让你在联邦监狱待了3年。贪婪。'
                },
                stats: { competence: 10, ethics: 0, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Leak the Offer: "I publish a story about the restrictive NDA itself. \'What are they hiding?\'"',
                    th: '📢 แฉข้อเสนอ: "ฉันตีพิมพ์เรื่องเกี่ยวกับ NDA ที่จำกัดสิทธิ์ \'พวกเขาซ่อนอะไรอยู่?\'"',
                    zh: '📢 泄露提议："我发布了一个关于限制性保密协议本身的故事。\'他们在隐瞒什么？\'"'
                },
                consequence: {
                    en: '🔍 Meta-Story: The drug company panics. Their stock drops. You exposed the industry practice effectively.',
                    th: '🔍 เรื่องซ้อนเรื่อง: บริษัทยาตื่นตระหนก หุ้นตก คุณเปิดโปงแนวปฏิบัติของอุตสาหกรรมได้อย่างมีประสิทธิภาพ',
                    zh: '🔍 元故事：制药公司恐慌。他们的股票下跌。你有效地揭露了行业惯例。'
                },
                stats: { competence: 80, ethics: 70, leadership: 70, innovation: 80 }
            }
        ]
    },
    {
        id: 'journalist_033',
        text: {
            en: '🛰️ The Spy Satellite: An amateur astronomer sends you photos of a US satellite nuking an asteroid. The government claims it was a "collision." It\'s top secret.',
            th: '🛰️ ดาวเทียมสอดแนม: นักดาราศาสตร์สมัครเล่นส่งรูปถ่ายดาวเทียมสหรัฐฯ ยิงนิวเคลียร์ใส่อุกกาบาต รัฐบาลอ้างว่าเป็น "การชน" มันเป็นความลับสุดยอด',
            zh: '🛰️ 间谍卫星：一位业余天文学家给你发了美国卫星核爆小行星的照片。政府声称这是一次"碰撞"。这是绝密。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Publish the Nukes: "Space militarization violates treaties. The world needs to know we have space nukes."',
                    th: '🚀 ตีพิมพ์เรื่องนิวเคลียร์: "การแปลงอวกาศเป็นทหารละเมิดสนธิสัญญา โลกต้องรู้ว่าเรามีนิวเคลียร์ในอวกาศ"',
                    zh: '🚀 发布核武器消息："太空军事化违反条约。世界需要知道我们拥有太空核武器。"'
                },
                consequence: {
                    en: '🌍 Geopolitical Crisis: Russia and China mobilize. You almost started WW3, but the truth is out.',
                    th: '🌍 วิกฤตภูมิรัฐศาสตร์: รัสเซียและจีนเคลื่อนพล คุณเกือบเริ่มสงครามโลกครั้งที่ 3 แต่ความจริงเปิดเผย',
                    zh: '🌍 地缘政治危机：俄罗斯和中国动员起来。你差点引发第三次世界大战，但真相大白。'
                },
                stats: { competence: 70, ethics: 60, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '📞 Call the Pentagon: "I have the photos. Tell me why I shouldn\'t run them. Is there an alien threat?"',
                    th: '📞 โทรหาเพนตากอน: "ฉันมีรูป บอกมาว่าทำไมฉันไม่ควรลงข่าว มีภัยคุกคามจากต่างดาวหรือเปล่า?"',
                    zh: '📞 致电五角大楼："我有照片。告诉我为什么我不应该发布它们。有外星人威胁吗？"'
                },
                consequence: {
                    en: '👽 The Truth: They brief you classified info. The asteroid was an alien probe. You sit on the story to prevent panic.',
                    th: '👽 ความจริง: พวกเขาสรุปข้อมูลลับให้คุณ อุกกาบาตคือยานสำรวจต่างดาว คุณเก็บเรื่องไว้เพื่อป้องกันความตื่นตระหนก',
                    zh: '👽 真相：他们向你通报机密信息。小行星是外星探测器。为了防止恐慌，你把故事压了下来。'
                },
                stats: { competence: 90, ethics: 50, leadership: 60, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Encrypt and Dead Drop: "Too hot. I upload it to WikiLeaks anonymously and wash my hands of it."',
                    th: '💻 เข้ารหัสและส่งลับ: "ร้อนแรงเกินไป ฉันอัปโหลดลง WikiLeaks แบบนิรนามและล้างมือจากเรื่องนี้"',
                    zh: '💻 加密并死信箱："太烫手了。我匿名上传到维基解密，然后洗手不干。"'
                },
                consequence: {
                    en: '🔦 Manhunt: The FBI traces the upload to your IP. You forgot a proxy. You are arrested for espionage.',
                    th: '🔦 การล่าคน: FBI ตามรอยการอัปโหลดมาที่ IP ของคุณ คุณลืมพร็อกซี คุณถูกจับข้อหาจารกรรม',
                    zh: '🔦 搜捕：FBI将上传追踪到你的IP。你忘了代理。你因间谍罪被捕。'
                },
                stats: { competence: 20, ethics: 40, leadership: 10, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🗑️ Delete: "I saw nothing. I like being not in prison." You destroy the evidence.',
                    th: '🗑️ ลบ: "ฉันไม่เห็นอะไร ฉันชอบการไม่อยู่ในคุก" คุณทำลายหลักฐาน',
                    zh: '🗑️ 删除："我什么也没看见。我喜欢不在监狱里。"你销毁了证据。'
                },
                consequence: {
                    en: '👻 Regret: Years later, space war breaks out. You could have warned the world. Cowardice haunts you.',
                    th: '👻 ความเสียใจ: หลายปีต่อมา สงครามอวกาศระเบิดขึ้น คุณน่าจะเตือนโลกได้ ความขี้ขลาดหลอกหลอนคุณ',
                    zh: '👻 后悔：多年后，太空战争爆发。你本可以警告世界。怯懦困扰着你。'
                }
            }
        ]
    },
    {
        id: 'journalist_034',
        text: {
            en: '🎤 The Pop Star Meltdown: A beloved pop star has a public mental breakdown. You catch footage of her attacking a paramedic. It will ruin her career.',
            th: '🎤 ป๊อปสตาร์สติแตก: ป๊อปสตาร์ที่เป็นที่รักมีอาการทางจิตในที่สาธารณะ คุณถ่ายวิดีโอตอนเธอทำร้ายเจ้าหน้าที่กู้ภัย มันจะทำลายอาชีพของเธอ',
            zh: '🎤 流行歌星崩溃：一位深受喜爱的流行歌星公开精神崩溃。你拍到了她攻击医护人员的镜头。这会毁了她的事业。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📰 Front Page News: "If she attacks a paramedic, it\'s a crime, not just sad. Accountability applies to stars too."',
                    th: '📰 ข่าวหน้าหนึ่ง: "ถ้าเธอทำร้ายเจ้าหน้าที่กู้ภัย มันคืออาชญากรรม ไม่ใช่แค่เรื่องเศร้า ความรับผิดชอบใช้กับดาราด้วย"',
                    zh: '📰 头版新闻："如果她攻击医护人员，那是犯罪，不仅仅是悲剧。问责制也适用于明星。"'
                },
                consequence: {
                    en: '📉 Cancellation: She is cancelled. Her career ends. The paramedic sues. You reported the harsh truth.',
                    th: '📉 การยกเลิก: เธอถูกแบน อาชีพจบลง เจ้าหน้าที่กู้ภัยฟ้อง คุณรายงานความจริงที่โหดร้าย',
                    zh: '📉 取消文化：她被取消了。她的事业结束了。医护人员起诉。你报道了残酷的真相。'
                },
                stats: { competence: 70, ethics: 60, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Empathy Hold: "I call her agent. \'Get her into rehab NOW, or I release this.\' Use the footage as leverage for help."',
                    th: '🤝 การยึดถือความเห็นอกเห็นใจ: "ฉันโทรหาผู้จัดการเธอ \'พาเธอเข้าสถานบำบัดเดี๋ยวนี้ ไม่งั้นฉันปล่อยคลิป\' ใช้วิดีโอเป็นเครื่องต่อรองเพื่อความช่วยเหลือ"',
                    zh: '🤝 共情控制："我给她的经纪人打电话。\'现在让她去康复中心，否则我就发布这个。\'利用录像作为获得帮助的筹码。"'
                },
                consequence: {
                    en: '🏥 Forced Rehab: She goes to rehab. You kill the story. She eventually thanks you for saving her life.',
                    th: '🏥 บังคับบำบัด: เธอไปสถานบำบัด คุณฆ่าข่าวนั้น ในที่สุดเธอขอบคุณคุณที่ช่วยชีวิตเธอ',
                    zh: '🏥 强制康复：她去康复中心。你扼杀了这个故事。她最终感谢你救了她的命。'
                },
                stats: { competence: 60, ethics: 80, leadership: 60, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '💸 Sell to TMZ: "This is worth millions. I sell the raw footage to the tabloids and retire."',
                    th: '💸 ขายให้ TMZ: "นี่มีค่าหลายล้าน ฉันขายวิดีโอดิบให้แท็บลอยด์แล้วเกษียณ"',
                    zh: '💸 卖给TMZ："这值数百万。我把原始录像卖给小报然后退休。"'
                },
                consequence: {
                    en: '💰 Rich Pariah: You are rich but despised by serious journalists. You lost your credibility.',
                    th: '💰 คนรวยที่น่ารังเกียจ: คุณรวยแต่ถูกนักข่าวจริงจังรังเกียจ คุณสูญเสียความน่าเชื่อถือ',
                    zh: '💰 富有的贱民：你很富有，但被严肃的记者鄙视。你失去了信誉。'
                },
                stats: { competence: 20, ethics: 10, leadership: 0, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '📽️ Frame as Victim: "I edit the footage to make it look like the paramedic provoked her. She stays a hero."',
                    th: '📽️ สร้างภาพเป็นเหยื่อ: "ฉันตัดต่อวิดีโอให้ดูเหมือนเจ้าหน้าที่กู้ภัยยั่วยุเธอ เธอยังเป็นฮีโร่"',
                    zh: '📽️ 伪装成受害者："我剪辑录像，看起来像是医护人员激怒了她。她仍然是个英雄。"'
                },
                consequence: {
                    en: '🤥 Libel Suit: The paramedic has a bodycam too. Your deceptive edit is exposed. You are fired and sued.',
                    th: '🤥 คดีหมิ่นประมาท: เจ้าหน้าที่กู้ภัยก็มีกล้องติดตัว การตัดต่อหลอกลวงของคุณถูกเปิดโปง คุณถูกไล่ออกและฟ้อง',
                    zh: '🤥 诽谤诉讼：医护人员也有随身摄像头。你的欺骗性剪辑被曝光。你被解雇并被起诉。'
                }
            }
        ]
    },
    {
        id: 'journalist_035',
        text: {
            en: '🚢 The Refugee Boat: You are embedded on a Navy ship intercepting refugees. The Captain orders them to turn back to a war zone legally. You see children on board.',
            th: '🚢 เรือผู้ลี้ภัย: คุณฝังตัวอยู่บนเรือกองทัพเรือที่สกัดกั้นผู้ลี้ภัย กัปตันสั่งให้พวกเขาหันกลับไปสู่โซนสงครามตามกฎหมาย คุณเห็นเด็กบนเรือ',
            zh: '🚢 难民船：你随军在一艘拦截难民的海军舰艇上。船长命令他们合法返回战区。你看到船上有孩子。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📡 Live Stream: "I go live on satellite phone immediately. \'The Navy is sending kids to die.\' Force public outrage."',
                    th: '📡 ไลฟ์สด: "ฉันไลฟ์สดผ่านโทรศัพท์ดาวเทียมทันที \'กองทัพเรือกำลังส่งเด็กไปตาย\' บังคับให้เกิดความโกรธแค้นของสาธารณชน"',
                    zh: '📡 直播："我立即用卫星电话直播。\'海军正把孩子们送去送死。\'迫使公众愤怒。"'
                },
                consequence: {
                    en: '🌊 Policy Change: The outcry forces the ship to take them. You are arrested for violating opsec but saved lives.',
                    th: '🌊 การเปลี่ยนนโยบาย: เสียงคัดค้านบังคับให้เรือรับพวกเขา คุณถูกจับข้อหาละเมิดความปลอดภัยการปฏิบัติการแต่ช่วยชีวิตคน',
                    zh: '🌊 政策改变：抗议迫使船只接收他们。你因违反行动安全被捕，但救了人命。'
                },
                stats: { competence: 70, ethics: 80, leadership: 60, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Observe and Report: "I document everything but don\'t intervene. I am an observer, not an activist."',
                    th: '🤐 สังเกตและรายงาน: "ฉันบันทึกทุกอย่างแต่ไม่แทรกแซง ฉันเป็นผู้สังเกตการณ์ ไม่ใช่นักเคลื่อนไหว"',
                    zh: '🤐 观察并报告："我记录一切但不干预。我是观察者，不是活动家。"'
                },
                consequence: {
                    en: '📰 Tragic Story: The boat sinks later. Your story wins awards but you have nightmares about not acting.',
                    th: '📰 เรื่องราวโศกนาฏกรรม: เรือล่มในภายหลัง เรื่องราวของคุณได้รางวัลแต่คุณฝันร้ายที่ไม่ทำอะไร',
                    zh: '📰 悲剧故事：船后来沉没了。你的故事获奖了，但你因没有采取行动而做噩梦。'
                },
                stats: { competence: 80, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ Plead with Captain: "Captain, off the record, this is inhumane. Taking them is the right thing to do."',
                    th: '🗣️ ขอร้องกัปตัน: "กัปตัน นอกเหนือจากบันทึก นี่มันไร้มนุษยธรรม การรับพวกเขาเป็นสิ่งที่ถูกต้อง"',
                    zh: '🗣️ 恳求船长："船长，私下说，这是不人道的。带上他们是正确的事。"'
                },
                consequence: {
                    en: '🧊 Cold Shoulder: "Orders are orders." He ignores you. You failed to persuade the rigid hierarchy.',
                    th: '🧊 ไหล่เย็นชา: "คำสั่งคือคำสั่ง" เขาเพิกเฉยคุณ คุณล้มเหลวในการโน้มน้าวลำดับชั้นที่เข้มงวด',
                    zh: '🧊 冷遇："命令就是命令。"他无视你。你未能说服僵化的等级制度。'
                },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🆘 Mutiny Incitement: "I yell to the crew: \'Are we murderers? Look at those kids!\' Start a mutiny."',
                    th: '🆘 ยุยงให้กบฏ: "ฉันตะโกนบอกลูกเรือ: \'เราเป็นฆาตกรเหรอ? ดูเด็กพวกนั้นสิ!\' เริ่มการกบฏ"',
                    zh: '🆘 煽动叛变："我向船员大喊：\'我们是凶手吗？以此看看那些孩子！\'发动叛变。"'
                },
                consequence: {
                    en: '🚔 Brig Time: You are tackled and thrown in the brig. The boat turns back anyway. You achieved nothing but jail.',
                    th: '🚔 เวลาในคุกเรือ: คุณถูกจับและโยนเข้าคุกเรือ เรือหันกลับไปอยู่ดี คุณไม่ได้อะไรเลยนอกจากคุก',
                    zh: '🚔 禁闭时间：你被抓住并扔进禁闭室。船还是调头了。除了坐牢你一无所获。'
                }
            }
        ]
    },
    {
        id: 'journalist_036',
        text: {
            en: '🌳 The Amazon Logger: You find a logging company illegally bulldozing an uncontacted tribe\'s land. The loggers offer you a bribe to say they "relocated" the tribe peacefully.',
            th: '🌳 คนตัดไม้ในอเมซอน: คุณพบบริษัททำไม้กำลังถางที่ดินของชนเผ่าที่ไม่เคยติดต่อกับโลกภายนอกอย่างผิดกฎหมาย คนตัดไม้เสนอสินบนให้คุณบอกว่าพวกเขา "ย้าย" ชนเผ่าอย่างสันติ',
            zh: '🌳 亚马逊伐木工：你发现一家伐木公司非法推平一个未接触部落的土地。伐木工向你行贿，让你说他们和平地"搬迁"了部落。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📸 Hidden Camera: "I take the bribe on camera. Catching them bribing a journalist is the smoking gun."',
                    th: '📸 กล้องซ่อน: "ฉันรับสินบนหน้ากล้อง การจับได้ว่าพวกเขาติดสินบนนักข่าวคือหลักฐานเด็ด"',
                    zh: '📸 隐藏摄像机："我在镜头前接受贿赂。抓到他们贿赂记者就是确凿的证据。"'
                },
                consequence: {
                    en: '💥 Sting Operation: The company is shut down. The tribe is saved. Top-tier investigative work.',
                    th: '💥 ปฏิบัติการล่อซื้อ: บริษัทถูกปิด ชนเผ่ารอด งานสืบสวนระดับท็อป',
                    zh: '💥 钓鱼行动：公司被关闭。部落得救了。顶级的调查工作。'
                },
                stats: { competence: 80, ethics: 70, leadership: 60, innovation: 70 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Take the Money: "No one cares about trees. I take the $50k and write the lie."',
                    th: '💰 รับเงิน: "ไม่มีใครสนเรื่องต้นไม้หรอก ฉันรับ 50k และเขียนคำโกหก"',
                    zh: '💰 拿钱："没人在乎树。我拿了5万美元，写了谎言。"'
                },
                consequence: {
                    en: '💀 Genocide: The tribe is wiped out by flu and bullets. You profit from extinction.',
                    th: '💀 การฆ่าล้างเผ่าพันธุ์: ชนเผ่าถูกล้างบางด้วยไข้หวัดและกระสุน คุณหากำไรจากการสูญพันธุ์',
                    zh: '💀 种族灭绝：部落被流感和子弹消灭。你从灭绝中获利。'
                },
                stats: { competence: 30, ethics: 0, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🏹 Warn the Tribe: "I can\'t stop the bulldozers, but I can warn the tribe to flee deep into the jungle."',
                    th: '🏹 เตือนชนเผ่า: "ฉันหยุดรถแทรกเตอร์ไม่ได้ แต่ฉันเตือนชนเผ่าให้หนีเข้าป่าลึกได้"',
                    zh: '🏹 警告部落："我无法阻止推土机，但我可以警告部落逃入丛林深处。"'
                },
                consequence: {
                    en: '🦠 Contagion Risk: Your contact introduces a pathogen. Half the tribe gets sick. Good intentions, bad result.',
                    th: '🦠 ความเสี่ยงโรคติดต่อ: การติดต่อของคุณนำเชื้อโรคไป ครึ่งเผ่าป่วย เจตนาดี ผลลัพธ์แย่',
                    zh: '🦠 传染风险：你的接触引入了病原体。半个部落生病了。好心办坏事。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Global SOS: "I publish the GPS coordinates and call for UN intervention immediately."',
                    th: '📢 SOS ทั่วโลก: "ฉันเผยแพร่พิกัด GPS และเรียกร้องให้ UN แทรกแซงทันที"',
                    zh: '📢 全球求救："我公布GPS坐标并呼吁联合国立即干预。"'
                },
                consequence: {
                    en: '🛡️ International Shield: Peacekeepers arrive. The land is protected. Direct action saved them.',
                    th: '🛡️ โล่นานาชาติ: ผู้รักษาสันติภาพมาถึง ที่ดินได้รับการคุ้มครอง การกระทำโดยตรงช่วยพวกเขา',
                    zh: '🛡️ 国际盾牌：维和人员到达。土地受到保护。直接行动拯救了他们。'
                }
            }
        ]
    },
    {
        id: 'journalist_037',
        text: {
            en: '🎮 The Gamer Gate 2.0: A female esports pro is being harassed online. You find a private Discord where male pros are coordinating the harassment to drive her out.',
            th: '🎮 Gamer Gate 2.0: โปรอีสปอร์ตหญิงถูกคุกคามออนไลน์ คุณพบ Discord ส่วนตัวที่โปรชายประสานงานการคุกคามเพื่อไล่เธอออก',
            zh: '🎮 玩家门 2.0：一名女性电子竞技职业选手在网上受到骚扰。你发现了一个私人Discord，男性职业选手正在协调骚扰以将她赶走。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Name and Shame: "I publish every username, real name, and chat log. Burn them all down."',
                    th: '🛑 ระบุชื่อและประจาน: "ฉันเผยแพร่ทุกชื่อผู้ใช้ ชื่อจริง และบันทึกแชท เผาพวกมันให้วอด"',
                    zh: '🛑 指名道姓："我发布每一个用户名、真实姓名和聊天记录。把他们彻底曝光。"'
                },
                consequence: {
                    en: '⚖️ Justice Served: The league bans the harassers. Sponsors drop them. The female pro thanks you.',
                    th: '⚖️ ความยุติธรรมทำงาน: ลีกแบนผู้คุกคาม สปอนเซอร์ถอนตัว โปรหญิงขอบคุณคุณ',
                    zh: '⚖️ 伸张正义：联盟禁止骚扰者。赞助商抛弃了他们。女性职业选手感谢你。'
                },
                stats: { competence: 70, ethics: 80, leadership: 60, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Protect Sources: "One harasser leaked this to me. I protect his identity in exchange for the logs on the ringleaders."',
                    th: '🤐 ปกป้องแหล่งข่าว: "ผู้คุกคามคนหนึ่งปล่อยข่าวนี้ให้ฉัน ฉันปกป้องตัวตนเขาเพื่อแลกกับบันทึกของหัวโจก"',
                    zh: '🤐 保护消息来源："一名骚扰者把这个泄露给我。我保护他的身份以换取头目的记录。"'
                },
                consequence: {
                    en: '🕵️ Deal with Devil: You get the leaders, but the snitch goes unpunished. A pragmatic victory.',
                    th: '🕵️ ดีลกับปีศาจ: คุณจับหัวหน้าได้ แต่นกต่อไม่ถูกลงโทษ ชัยชนะแบบปฏิบัติจริง',
                    zh: '🕵️ 与魔鬼交易：你抓住了头目，但告密者未受惩罚。务实的胜利。'
                },
                stats: { competence: 60, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🎮 Keep it "About Games": "I write about the \'culture of toxicity\' without naming names. Avoid lawsuits."',
                    th: '🎮 ทำให้เป็นเรื่อง "เกม": "ฉันเขียนเกี่ยวกับ \'วัฒนธรรมความเป็นพิษ\' โดยไม่ระบุชื่อ หลีกเลี่ยงคดีความ"',
                    zh: '🎮 保持"关于游戏"："我写关于\'毒性文化\'的文章而不指名道姓。避免诉讼。"'
                },
                consequence: {
                    en: '💤 Toothless Piece: Nobody cares. The harassment continues. You failed the victim.',
                    th: '💤 บทความไม่มีเขี้ยวเล็บ: ไม่มีใครสน การคุกคามดำเนินต่อไป คุณทำให้เหยื่อผิดหวัง',
                    zh: '💤 无牙文章：没人在乎。骚扰继续。你辜负了受害者。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Sell Logs to Victim: "I give the logs to her lawyer for a consultation fee. Let her sue them privately."',
                    th: '💰 ขายบันทึกให้เหยื่อ: "ฉันให้บันทึกกับทนายเธอแลกกับค่าปรึกษา ให้เธอฟ้องเงียบๆ"',
                    zh: '💰 把记录卖给受害者："我把记录给她的律师以换取咨询费。让她私下起诉他们。"'
                },
                consequence: {
                    en: '💼 Private Justice: She sues and wins millions. The public never knows. You acted as a mercenary.',
                    th: '💼 ความยุติธรรมส่วนตัว: เธอฟ้องและชนะเงินล้าน สาธารณชนไม่เคยรู้ คุณทำตัวเป็นทหารรับจ้าง',
                    zh: '💼 私人正义：她起诉并赢得了数百万。公众永远不知道。你充当了雇佣兵。'
                }
            }
        ]
    },
    {
        id: 'journalist_038',
        text: {
            en: '🌋 The Volcano Prediction: A geologist tells you a dormant volcano near a city is waking up. The mayor says it\'s just "settling" and begs you not to kill tourism season.',
            th: '🌋 คำทำนายภูเขาไฟ: นักธรณีวิทยาบอกคุณว่าภูเขาไฟที่สงบใกล้เมืองกำลังตื่น นายกเทศมนตรีบอกว่ามันแค่ "ปรับตัว" และขอร้องไม่ให้คุณทำลายฤดูท่องเที่ยว',
            zh: '🌋 火山预测：一位地质学家告诉你，城市附近的一座休眠火山正在苏醒。市长说这只是"沉降"，并恳求你不要扼杀旅游旺季。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Panic Alarm: "EVACUATE NOW. I run the headline in red caps. Better safe than lava."',
                    th: '📢 สัญญาณตื่นตระหนก: "อพยพด่วน ฉันลงพาดหัวสีแดง ปลอดภัยไว้ดีกว่าดดนลาวา"',
                    zh: '📢 恐慌警报："立即撤离。我用红色大写标题发布。以此安全总比被熔岩淹没好。"'
                },
                consequence: {
                    en: '🏘️ Ghost Town: The city empties. The volcano... burps smoke but doesn\'t erupt. The economy is ruined. They hate you.',
                    th: '🏘️ เมืองร้าง: เมืองว่างเปล่า ภูเขาไฟ... พ่นควันแต่ไม่ระเบิด เศรษฐกิจพังพินาศ พวกเขาเกลียดคุณ',
                    zh: '🏘️ 鬼城：城市空了。火山……冒了烟但没有爆发。经济毁了。他们恨你。'
                },
                stats: { competence: 40, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔬 Verify Data: "I ask for a second opinion from the national survey. Confirm before scaring 100k people."',
                    th: '🔬 ตรวจสอบข้อมูล: "ฉันขอความเห็นที่สองจากสำนักงานสำรวจแห่งชาติ ยืนยันก่อนทำให้คนแสนคนตกใจ"',
                    zh: '🔬 验证数据："我向国家调查局寻求第二意见。在吓唬10万人之前确认。"'
                },
                consequence: {
                    en: '✅ Accurate Warning: The second opinion confirms danger. You issue a measured warning. Evacuation is orderly. You saved the town.',
                    th: '✅ คำเตือนที่แม่นยำ: ความเห็นที่สองยืนยันอันตราย คุณออกคำเตือนอย่างรอบคอบ การอพยพเป็นระเบียบ คุณช่วยเมืองไว้',
                    zh: '✅ 准确警告：第二意见确认了危险。你发出了慎重的警告。撤离井然有序。你拯救了城镇。'
                },
                stats: { competence: 80, ethics: 70, leadership: 70, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '📉 Side with Mayor: "Tourism feeds these families. I urge \'caution\' but no evacuation. Hope for the best."',
                    th: '📉 เข้าข้างนายกฯ: "การท่องเที่ยวเลี้ยงดูครอบครัวเหล่านี้ ฉันเตือนให้ \'ระวัง\' แต่ไม่อพยพ หวังสิ่งที่ดีที่สุด"',
                    zh: '📉站在市长一边："旅游业养活了这些家庭。我敦促\'谨慎\'但不撤离。以此抱最好的希望。"'
                },
                consequence: {
                    en: '🔥 Catastrophe: Lava flows. Bridges are jammed. People die in traffic. You have blood on your hands.',
                    th: '🔥 หายนะ: ลาวาไหล สะพานรถติด คนตายในการจราจร มือคุณเปื้อนเลือด',
                    zh: '🔥 灾难：熔岩流淌。桥梁堵塞。人们在交通中丧生。你手上沾满了鲜血。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🚁 Charter Heli: "I fly over the crater myself to get footage. Seeing is believing."',
                    th: '🚁 เช่า ฮ.: "ฉันบินเหนือปากปล่องเองเพื่อถ่ายวิดีโอ สิบปากว่าไม่เท่าตาเห็น"',
                    zh: '🚁 包机直升机："我亲自飞越火山口拍摄录像。眼见为实。"'
                },
                consequence: {
                    en: '📸 Viral Proof: You get footage of bubbling magma. The visual convinces people to leave. Brave.',
                    th: '📸 หลักฐานไวรัล: คุณได้วิดีโอแมกมาเดือด ภาพทำให้คนเชื่อและหนี กล้าหาญ',
                    zh: '📸 病毒式证据：你拍到了冒泡的岩浆镜头。视觉效果说服了人们离开。勇敢。'
                }
            }
        ]
    },
    {
        id: 'journalist_039',
        text: {
            en: '🧠 The Deepfake Candidate: A video surfaces of a presidential candidate kicking a dog. Experts say it\'s 99% likely a deepfake, but it looks perfectly real.',
            th: '🧠 ผู้สมัคร Deepfake: วิดีโอโผล่มาว่าผู้สมัครประธานาธิบดีเตะสุนัข ผู้เชี่ยวชาญบอกว่า 99% น่าจะเป็น Deepfake แต่มันดูเหมือนจริงมาก',
            zh: '🧠 深度伪造候选人：一段总统候选人踢狗的视频浮出水面。专家说这有99%的可能性是深度伪造，但看起来非常真实。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Don\'t Publish: "It\'s fake news. Publishing it, even to debunk it, spreads the image. We ignore it."',
                    th: '🚫 ไม่ตีพิมพ์: "มันเป็นข่าวปลอม การตีพิมพ์แม้เพื่อหักล้าง ก็เป็นการเผยแพร่ภาพ เราเพิกเฉยมัน"',
                    zh: '🚫 不发布："这是假新闻。发布它，即使是为了揭穿它，也会传播图像。我们无视它。"'
                },
                consequence: {
                    en: '📉 Rival Spreads It: Social media spreads it anyway. You look out of touch for not addressing the viral topic.',
                    th: '📉 คู่แข่งเผยแพร่: โซเชียลมีเดียเผยแพร่อยู่ดี คุณดูตกข่าวที่ไม่พูดถึงหัวข้อไวรัล',
                    zh: '📉 对手传播：无论如何社交媒体都在传播它。你因不处理病毒式话题而显得脱节。'
                },
                stats: { competence: 50, ethics: 70, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🕵️ Debunking Article: "We run it with a giant \'FAKE\' watermark. We explain HOW it was made. Teach media literacy."',
                    th: '🕵️ บทความหักล้าง: "เราลงข่าวพร้อมลายน้ำ \'ปลอม\' ขนาดใหญ่ เราอธิบายว่ามันถูกทำอย่างไร สอนการรู้เท่าทันสื่อ"',
                    zh: '🕵️ 揭穿文章："我们带着巨大的\'假\'水印发布它。我们解释它是如何制作的。教授媒体素养。"'
                },
                consequence: {
                    en: '🎓 Educated Public: Readers appreciate the analysis. You turn disinformation into a lesson. High value journalism.',
                    th: '🎓 ประชาชนมีความรู้: ผู้อ่านชื่นชมการวิเคราะห์ คุณเปลี่ยนข้อมูลบิดเบือนเป็นบทเรียน วารสารศาสตร์คุณค่าสูง',
                    zh: '🎓 受过教育的公众：读者欣赏这种分析。你把虚假信息变成了教训。高价值的新闻报道。'
                },
                stats: { competence: 80, ethics: 80, leadership: 70, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '🔥 Rage Bait: "Is he a dog kicker? Watch the video!" Clickbait headline. Let the people decide.',
                    th: '🔥 ล่อให้โกรธ: "เขาเป็นคนเตะหมาเหรอ? ดูวิดีโอสิ!" พาดหัวล่อคลิก ให้ประชาชนตัดสิน',
                    zh: '🔥 愤怒诱饵："他是踢狗的人吗？看视频！"标题党。让人们决定。'
                },
                consequence: {
                    en: '📉 Democracy Hurt: You validated a fake. The candidate loses points unfairly. You are part of the problem.',
                    th: '📉 ประชาธิปไตยเจ็บปวด: คุณรับรองของปลอม ผู้สมัครเสียคะแนนอย่างไม่ยุติธรรม คุณเป็นส่วนหนึ่งของปัญหา',
                    zh: '📉 民主受损：你验证了一个假货。候选人受到了不公平的损失。你是问题的一部分。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '💻 Trace the Creator: "Forget the video. Who made it? I track the IP to a troll farm in Eastern Europe."',
                    th: '💻 ตามหาผู้สร้าง: "ลืมวิดีโอไป ใครทำมัน? ฉันตาม IP ไปถึงฟาร์มโทรลล์ในยุโรปตะวันออก"',
                    zh: '💻 追踪创作者："忘了视频吧。谁做的？我把IP追踪到一个东欧的巨魔农场。"'
                },
                consequence: {
                    en: '🌍 International Scoop: You expose the foreign interference ring. A much bigger story than a dog video.',
                    th: '🌍 สกู๊ประดับโลก: คุณเปิดโปงขบวนการแทรกแซงต่างชาติ เรื่องใหญ่กว่าวิดีโอหมาเยอะ',
                    zh: '🌍 国际独家新闻：你曝光了外国干涉团伙。比狗的视频大得多的故事。'
                }
            }
        ]
    },
    {
        id: 'journalist_040',
        text: {
            en: '🦠 The Lab Leak Theory: Early in a pandemic, a scientist whispers to you that the virus came from a local lab. There is zero proof, just a hunch.',
            th: '🦠 ทฤษฎีแล็บรั่ว: ในช่วงต้นของการระบาด นักวิทยาศาสตร์กระซิบคุณว่าไวรัสมาจากแล็บท้องถิ่น ไม่มีหลักฐาน มีแค่ลางสังหรณ์',
            zh: '🦠 实验室泄漏理论：在大流行早期，一位科学家悄悄告诉你，病毒来自当地的一个实验室。它是零证据，只是直觉。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Require Proof: "Extraordinary claims require extraordinary evidence. Bring me a paper trail or I don\'t print."',
                    th: '🚫 ต้องการหลักฐาน: "ข้อกล่าวหาที่ไม่ธรรมดาต้องการหลักฐานที่ไม่ธรรมดา เอาเอกสารมาให้ฉันไม่งั้นไม่พิมพ์"',
                    zh: '🚫 要求证据："非凡的主张需要非凡的证据。给我文件线索，否则我不印。"'
                },
                consequence: {
                    en: '🛡️ Responsible Silence: You avoided spreading conspiracy theories. Later, evidence emerges, and you cover it properly then.',
                    th: '🛡️ ความเงียบที่รับผิดชอบ: คุณหลีกเลี่ยงการเผยแพร่ทฤษฎีสมคบคิด ต่อมาหลักฐานปรากฏ และคุณรายงานมันอย่างถูกต้องตอนนั้น',
                    zh: '🛡️ 负责任的沉默：你避免了传播阴谋论。后来，证据浮出水面，你那时进行了恰当的报道。'
                },
                stats: { competence: 70, ethics: 80, leadership: 50, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '📢 Run the Rumor: "Sources say valid questions raised about lab safety." You ignite a political firestorm.',
                    th: '📢 ปล่อยข่าวลือ: "แหล่งข่าวบอกว่ามีคำถามที่น่าเชื่อถือเกี่ยวกับความปลอดภัยของแล็บ" คุณจุดไฟทางการเมือง',
                    zh: '📢 散布谣言："消息人士称，关于实验室安全提出了合理的问题。"你引发了一场政治风暴。'
                },
                consequence: {
                    en: '🔥 Hate Crimes: Scientists are harassed. You normalized speculation as fact. It sells papers but hurts trust.',
                    th: '🔥 อาชญากรรมจากความเกลียดชัง: นักวิทยาศาสตร์ถูกคุกคาม คุณทำให้การคาดเดากลายเป็นความจริง มันขายข่าวได้แต่ทำลายความเชื่อมั่น',
                    zh: '🔥 仇恨犯罪：科学家受到骚扰。你把猜测正常化为事实。这能卖报纸，但损害了信任。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🔬 Investigate Safety Records: "I don\'t print the rumor. I FOIA the lab\'s safety inspections from the last 5 years."',
                    th: '🔬 สืบสวนบันทึกความปลอดภัย: "ฉันไม่พิมพ์ข่าวลือ ฉันขอ FOIA การตรวจสอบความปลอดภัยของแล็บใน 5 ปีที่ผ่านมา"',
                    zh: '🔬 调查安全记录："我不刊登谣言。我根据《信息自由法》调取实验室过去5年的安全检查记录。"'
                },
                consequence: {
                    en: '📄 Pattern Found: You find a history of leaks. You publish a data-driven story on "Safety Risks" without claiming this specific leak.',
                    th: '📄 พบรูปแบบ: คุณพบประวัติการรั่วไหล คุณตีพิมพ์เรื่องราวที่ขับเคลื่อนด้วยข้อมูลเกี่ยวกับ "ความเสี่ยงด้านความปลอดภัย" โดยไม่อ้างถึงการรั่วไหลครั้งนี้',
                    zh: '📄 发现模式：你发现了泄漏的历史。你发布了一个基于数据的关于"安全风险"的故事，而没有声称这次特定的泄漏。'
                },
                stats: { competence: 80, ethics: 70, leadership: 60, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🌍 Xenophobic Angle: "It\'s a foreign weapon!" You pivot to blaming a rival nation.',
                    th: '🌍 มุมมองเกลียดกลัวต่างชาติ: "มันเป็นอาวุธต่างชาติ!" คุณเปลี่ยนไปโทษชาติคู่แข่ง',
                    zh: '🌍 排外角度："这是外国武器！"你转向指责敌对国家。'
                },
                consequence: {
                    en: '📉 Diplomacy Damage: You cause an international incident based on zero facts. Dangerous propaganda.',
                    th: '📉 ความเสียหายทางการทูต: คุณก่อเหตุการณ์ระหว่างประเทศโดยไม่มีข้อเท็จจริง โฆษณาชวนเชื่อที่อันตราย',
                    zh: '📉 外交损害：你在零事实的基础上引发了国际事件。危险的宣传。'
                }
            }
        ]
    },
    {
        id: 'journalist_041',
        text: {
            en: '🚔 The Embedded Risk: You are offered a ride-along with a cartel hunting rival gang members. It\'s a once-in-a-lifetime look at the drug war from the inside. But you might witness murders.',
            th: '🚔 ความเสี่ยงในการฝังตัว: คุณได้รับข้อเสนอให้ร่วมเดินทางไปกับแก๊งค้ายาที่กำลังล่าสมาชิกแก๊งคู่แข่ง มันเป็นโอกาสเดียวในชีวิตที่จะได้เห็นสงครามยาเสพติดจากข้างใน แต่คุณอาจเห็นการฆาตกรรม',
            zh: '🚔 嵌入式风险：你被提议随同卡特尔追捕敌对帮派成员。这是从内部观察毒品战争的千载难逢的机会。但你可能会目睹谋杀。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📝 Accept the Risk: "I go. I document. I act as a fly on the wall. The world needs to understand the brutality."',
                    th: '📝 ยอมรับความเสี่ยง: "ฉันไป ฉันบันทึก ฉันทำตัวเป็นแมลงวันบนกำแพง โลกต้องเข้าใจความโหดร้าย"',
                    zh: '📝 接受风险："我去。我记录。我充当墙上的苍蝇。世界需要了解这种残酷。"'
                },
                consequence: {
                    en: '🏆 Pulitzer and PTSD: You witness a massacre. Your photos win every award. You can never sleep again.',
                    th: '🏆 พูลิตเซอร์และ PTSD: คุณเห็นการสังหารหมู่ ภาพถ่ายของคุณได้ทุกรางวัล คุณไม่สามารถหลับได้อีกเลย',
                    zh: '🏆 普利策奖和创伤后应激障碍：你目睹了一场大屠杀。你的照片赢得了所有奖项。你再也无法入睡了。'
                },
                stats: { competence: 90, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '⛔ Ethical Line: "I cannot be present for a murder. That makes me an accomplice. I decline."',
                    th: '⛔ เส้นทางจริยธรรม: "ฉันไม่สามารถอยู่ในเหตุการณ์ฆาตกรรมได้ นั่นทำให้ฉันเป็นผู้สมรู้ร่วมคิด ฉันขอปฏิเสธ"',
                    zh: '⛔ 道德底线："我不能在谋杀现场。那让我成为同谋。我拒绝。"'
                },
                consequence: {
                    en: '🛡️ Safety: You survive. Another journalist goes and gets killed. You wonder if you were a coward or wise.',
                    th: '🛡️ ความปลอดภัย: คุณรอด นักข่าวอีกคนไปแล้วถูกฆ่า คุณสงสัยว่าคุณขี้ขลาดหรือฉลาด',
                    zh: '🛡️ 安全：你活下来了。另一位记者去了并被杀了。你想知道你是懦夫还是明智的。'
                },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '👮 Call the Cops: "I tell the police where the cartel will be. Set up a sting."',
                    th: '👮 โทรหาตำรวจ: "ฉันบอกตำรวจว่าแก๊งจะอยู่ที่ไหน วางแผนล่อจับ"',
                    zh: '👮 报警："我告诉警察卡特尔会在哪里。设下圈套。"'
                },
                consequence: {
                    en: '💀 Assassinated: The police are corrupt. They tell the cartel you snitched. You are found in a ditch.',
                    th: '💀 ถูกลอบสังหาร: ตำรวจคอร์รัปชั่น พวกเขาบอกแก๊งว่าคุณเป็นนกต่อ คุณถูกพบเป็นศพในคูน้ำ',
                    zh: '💀 被暗杀：警察腐败。他们告诉卡特尔你告密。有人在沟里发现了你。'
                },
                stats: { competence: 20, ethics: 50, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🎥 Interview Only: "I can\'t go on the raid, but I\'ll interview the leader anonymously at a safe house."',
                    th: '🎥 สัมภาษณ์อย่างเดียว: "ฉันไปร่วมบุกไม่ได้ แต่ฉันจะสัมภาษณ์หัวหน้าแบบนิรนามที่เซฟเฮาส์"',
                    zh: '🎥 仅采访："我不能参加突袭，但我会在安全屋匿名采访头目。"'
                },
                consequence: {
                    en: '📉 Partial Story: You get the rhetoric but not the action. It\'s a good story, but lacks the visceral impact.',
                    th: '📉 เรื่องราวบางส่วน: คุณได้คำพูดแต่ไม่ได้การกระทำ มันเป็นเรื่องที่ดี แต่ขาดผลกระทบที่ลึกซึ้ง',
                    zh: '📉 部分故事：你得到了辞令但没有行动。这是一个好故事，但缺乏发自内心的冲击力。'
                }
            }
        ]
    },
    {
        id: 'journalist_042',
        text: {
            en: '🗳️ The Election Rigging Algo: A hacker gives you source code proving a voting machine company skews votes by 0.5%. It swung the last election. The company is litigious and powerful.',
            th: '🗳️ อัลกอริทึมโกงการเลือกตั้ง: แฮ็กเกอร์ให้ซอร์สโค้ดพิสูจน์ว่าบริษัทเครื่องลงคะแนนเสียงบิดเบือนคะแนน 0.5% มันเปลี่ยนผลการเลือกตั้งครั้งล่าสุด บริษัทนี้ชอบฟ้องและมีอำนาจมาก',
            zh: '🗳️ 选举操纵算法：一名黑客给了你源代码，证明一家投票机公司将选票通过算法倾斜了0.5%。它左右了上次选举。这家公司好诉讼且势力强大。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Publish the Code: "Open source the code. Let the global tech community verify it. Truth in numbers."',
                    th: '📢 เผยแพร่โค้ด: "เปิดซอร์สโค้ด ให้ชุมชนเทคทั่วโลกตรวจสอบ ความจริงอยู่ในตัวเลข"',
                    zh: '📢 发布代码："开源代码。让全球科技界验证它。数字中的真相。"'
                },
                consequence: {
                    en: '🌍 Global Validation: Thousands verify the fraud. The election is annulled. You are a hero of democracy.',
                    th: '🌍 การตรวจสอบทั่วโลก: คนนับพันยืนยันการฉ้อโกง การเลือกตั้งเป็นโมฆะ คุณเป็นฮีโร่ของประชาธิปไตย',
                    zh: '🌍 全球验证：数千人验证了欺诈行为。选举无效。你是民主的英雄。'
                },
                stats: { competence: 90, ethics: 80, leadership: 70, innovation: 80 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Expert Review First: "I hire 3 independent cryptoographers to audit it before I write a word. Bulletproof the story."',
                    th: '⚖️ ผู้เชี่ยวชาญรีวิวก่อน: "ฉันจ้างนักรหัสวิทยาอิสระ 3 คนตรวจสอบก่อนเขียนแม้แต่คำเดียว ทำให้เรื่องราวกันกระสุน"',
                    zh: '⚖️ 专家先行审查："在我写一个字之前，我雇佣了3名独立的密码学家对其进行审计。让故事无懈可击。"'
                },
                consequence: {
                    en: '🐢 Slow Outcome: The audit takes months. The company gets wind and patches the code. You lost the smoking gun.',
                    th: '🐢 ผลลัพธ์ที่ช้า: การตรวจสอบใช้เวลาหลายเดือน บริษัทรู้เรื่องและแก้โค้ด คุณเสียหลักฐานเด็ด',
                    zh: '🐢 缓慢的结果：审计需要几个月的时间。公司得到消息并修补了代码。你失去了确凿的证据。'
                },
                stats: { competence: 60, ethics: 70, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '💰 Blackmail: "I ask the company for $10M to destroy the code. I\'m tired of being poor."',
                    th: '💰 แบล็กเมล์: "ฉันขอเงินบริษัท 10 ล้านเพื่อทำลายโค้ด ฉันเบื่อที่จะจนแล้ว"',
                    zh: '💰 勒索："我向公司索要1000万美元以销毁代码。我受够了贫穷。"'
                },
                consequence: {
                    en: '🚔 FBI Raid: They record the meeting. You go to prison for extortion. Game over.',
                    th: '🚔 FBI บุก: พวกเขาบันทึกการประชุม คุณติดคุกข้อหากรรโชกทรัพย์ จบเห่',
                    zh: '🚔 FBI突袭：他们录下了会议。你因勒索罪入狱。游戏结束。'
                },
                stats: { competence: 10, ethics: 0, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🗑️ Delete: "This leads to civil war. I can\'t be the one to break democracy." You capitulate.',
                    th: '🗑️ ลบ: "เรื่องนี้จะนำไปสู่สงครามกลางเมือง ฉันไม่อยากเป็นคนทำลายประชาธิปไตย" คุณยอมแพ้',
                    zh: '🗑️ 删除："这会导致内战。我不能成为破坏民主的人。"你投降了。'
                },
                consequence: {
                    en: '🏚️ Decay: The fraud continues for decades. You watch your country rot, knowing you could have stopped it.',
                    th: '🏚️ ความเสื่อมโทรม: การโกงดำเนินต่อไปหลายทศวรรษ คุณดูประเทศเน่าเฟะโดยรู้ว่าคุณหยุดมันได้',
                    zh: '🏚️ 腐烂：欺诈持续了几十年。你看着你的国家腐烂，知道你本可以阻止它。'
                }
            }
        ]
    },
    {
        id: 'journalist_043',
        text: {
            en: '🦁 The Zoo Scandal: You get evidence that the city zoo sells surplus animals (lion cubs) to canned hunting ranches. The zoo is a beloved institution, "best in the country."',
            th: '🦁 สแกนดัลสวนสัตว์: คุณได้หลักฐานว่าสวนสัตว์เมืองขายสัตว์ส่วนเกิน (ลูกสิงโต) ให้ฟาร์มล่าสัตว์ สวนสัตว์เป็นสถาบันที่เป็นที่รัก "ดีที่สุดในประเทศ"',
            zh: '🦁 动物园丑闻：你得到的证据表明，市动物园将多余的动物（幼狮）卖给围猎场。动物园是一个深受喜爱的机构，"全国最好的"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📰 Expose It: "Cute facade, grueling reality. I publish the invoices selling \'Simba\' to a trophy hunter."',
                    th: '📰 แฉมัน: "ฉากหน้าดูดี ความจริงโหดร้าย ฉันตีพิมพ์ใบเสร็จขาย \'ซิมบ้า\' ให้นักล่าถ้วยรางวัล"',
                    zh: '📰 曝光它："可爱的外表，折磨人的现实。我发布将\'辛巴\'卖给战利品猎人的发票。"'
                },
                consequence: {
                    en: '💥 Public Grief: Children cry. The director is fired. The zoo reforms. You broke hearts to fix the system.',
                    th: '💥 ความโศกเศร้าของสาธารณะ: เด็กร้องไห้ ผู้อำนวยการถูกไล่ออก สวนสัตว์ปฏิรูป คุณหักอกคนเพื่อแก้ระบบ',
                    zh: '💥 公众悲痛：孩子们哭了。园长被解雇。动物园改革。为了修复系统，你伤透了人心。'
                },
                stats: { competence: 70, ethics: 80, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Backroom Leverage: "I tell the board to stop immediately or I publish. I force quiet reform."',
                    th: '🤫 อำนาจต่อรองหลังฉาก: "ฉันบอกบอร์ดให้หยุดทันทีไม่งั้นฉันแฉ ฉันบังคับให้ปฏิรูปเงียบๆ"',
                    zh: '🤫 幕后杠杆："我告诉董事以立即停止，否则我就发布。我强迫进行悄无声息的改革。"'
                },
                consequence: {
                    en: '🤝 Shadow Fix: They monitor compliance. The animals are safe. The public remains happy and ignorant. Utilitarian win.',
                    th: '🤝 การแก้ไขในเงามืด: พวกเขาตรวจสอบการปฏิบัติตามกฎ สัตว์ปลอดภัย ประชาชนมีความสุขและไม่รู้เรื่อง ชัยชนะแบบอรรถประโยชน์นิยม',
                    zh: '🤝 影子修复：他们监控合规性。动物是安全的。公众保持快乐和无知。功利主义的胜利。'
                },
                stats: { competence: 60, ethics: 60, leadership: 70, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '📢 Justify It: "Zoos need money to conserve species. I write a nuanced piece on \'Conservation Economics\'."',
                    th: '📢 ให้เหตุผล: "สวนสัตว์ต้องใช้เงินเพื่ออนุรักษ์สายพันธุ์ ฉันเขียนบทความละเอียดอ่อนเรื่อง \'เศรษฐศาสตร์การอนุรักษ์\'"',
                    zh: '📢 辩解："动物园需要钱来保护物种。我写了一篇关于\'保护经济学\'的细致文章。"'
                },
                consequence: {
                    en: '🤔 Moral Grey: People debate it. Nothing changes. You acted as PR for the status quo.',
                    th: '🤔 พื้นที่สีเทาทางศีลธรรม: ผู้คนถกเถียงกัน ไม่มีอะไรเปลี่ยน คุณทำตัวเป็น PR ให้สถานะเดิม',
                    zh: '🤔 道德灰色：人们争论不休。什么也没改变。你充当了现状的公关。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🦁 Adoption Campaign: "I start a campaign: \'Save Simba\'. Raise money to buy the surplus animals yourself. Journalism + Activism."',
                    th: '🦁 แคมเปญรับเลี้ยง: "ฉันเริ่มแคมเปญ: \'ช่วยซิมบ้า\' ระดมทุนซื้อสัตว์ส่วนเกินเอง วารสารศาสตร์ + การเคลื่อนไหว"',
                    zh: '🦁 收养活动："我发起一项活动：\'拯救辛巴\'。筹集资金自己购买多余的动物。新闻 + 激进主义。"'
                },
                consequence: {
                    en: '❤️ Viral Success: You raise millions. The animals go to sanctuaries. You crossed the line into activism, but it worked.',
                    th: '❤️ ความสำเร็จไวรัล: คุณระดมทุนได้หลายล้าน สัตว์ได้ไปเขตอนุรักษ์ คุณข้ามเส้นไปสู่การเคลื่อนไหว แต่มันได้ผล',
                    zh: '❤️ 病毒式成功：你筹集了数百万。动物去了避难所。你跨过了激进主义的界限，但它奏效了。'
                }
            }
        ]
    },
    {
        id: 'journalist_044',
        text: {
            en: '💊 The Biohacker\'s Death: A prominent biohacker dies live on stream after injecting a DIY CRISPR treatment. You find his notes. He was pressured by sponsors to do it.',
            th: '💊 ความตายของไบโอแฮ็กเกอร์: ไบโอแฮ็กเกอร์คนดังตายขณะไลฟ์สดหลังจากฉีดการรักษา CRISPR แบบทำเอง คุณพบบันทึกเขา เขาถูกสปอนเซอร์กดดันให้ทำ',
            zh: '💊 生物黑客之死：一位著名的生物黑客在注射DIY CRISPR疗法后在直播中死亡。你发现了他的笔记。他是被赞助商施压才这么做的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕵️ Follow the Money: "Who sponsored him? I trace the crypto wallets. I expose the venture capitalists funding death sports."',
                    th: '🕵️ ตามรอยเงิน: "ใครสปอนเซอร์เขา? ฉันตามกระเป๋าคริปโต ฉันเปิดโปงนักลงทุนร่วมทุนที่ให้ทุนกีฬามรณะ"',
                    zh: '🕵️ 追踪资金："谁赞助了他？我追踪加密钱包。我曝光资助死亡运动的风险资本家。"'
                },
                consequence: {
                    en: '⚖️ Criminal Negligence: The VCs are arrested. The biohacking scene gets regulated. You brought accountability.',
                    th: '⚖️ ความประมาทเลินเล่อทางอาญา: VC ถูกจับ วงการไบโอแฮ็กถูกควบคุม คุณนำมาซึ่งความรับผิดชอบ',
                    zh: '⚖️ 刑事过失：风投被捕。生物黑客圈子受到监管。你带来了问责制。'
                },
                stats: { competence: 80, ethics: 80, leadership: 60, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🧬 Darwin Award Angle: "He was an idiot playing god. I write a cautionary tale about stupidity." Blame the victim.',
                    th: '🧬 มุมรางวัลสายวิวัฒนาการ: "เขาเป็นคนโง่ที่เล่นบทพระเจ้า ฉันเขียนนิทานเตือนใจเรื่องความโง่เขลา" โทษเหยื่อ',
                    zh: '🧬 达尔文奖角度："他是个扮演上帝的白痴。我写了一个关于愚蠢的警世故事。"指责受害者。'
                },
                consequence: {
                    en: '📉 Shallow Story: It gets clicks but misses the deeper coercion. The sponsors find a new victim.',
                    th: '📉 เรื่องราวตื้นเขิน: ได้คลิกแต่พลาดเรื่องการบังคับขู่เข็ญที่ลึกกว่า สปอนเซอร์หาเหยื่อใหม่',
                    zh: '📉 肤浅的故事：它获得了点击量，但忽略了更深层次的胁迫。赞助商找到了新的受害者。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🏥 Medical Analysis: "I focus on the science. Why did the CRISPR fail? Interview geneticists. Educate, don\'t sensationalize."',
                    th: '🏥 การวิเคราะห์ทางการแพทย์: "ฉันโฟกัสที่วิทยาศาสตร์ ทำไม CRISPR ถึงล้มเหลว? สัมภาษณ์นักพันธุศาสตร์ ให้ความรู้ ไม่ใช่สร้างกระแส"',
                    zh: '🏥 医学分析："我专注于科学。为什么CRISPR失败了？采访遗传学家。教育，不要耸人听闻。"'
                },
                consequence: {
                    en: '🎓 Dry but Important: Public understanding of gene editing improves. A sober contribution to science communication.',
                    th: '🎓 แห้งแล้งแต่สำคัญ: ความเข้าใจของสาธารณชนเกี่ยวกับการตัดต่อยีนดีขึ้น การมีส่วนร่วมอย่างมีสติในการสื่อสารวิทยาศาสตร์',
                    zh: '🎓 枯燥但重要：公众对基因编辑的理解有所提高。对科学传播的冷静贡献。'
                },
                stats: { competence: 70, ethics: 60, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📸 Publish the Death Video: "The video was deleted. I recovered it. I post the death moment uncensored. \'Don\'t try this at home.\'"',
                    th: '📸 เผยแพร่วิดีโอการตาย: "วิดีโอถูกลบ ฉันกู้มาได้ ฉันโพสต์นาทีตายแบบไม่เซ็นเซอร์ \'อย่าหาทำที่บ้าน\'"',
                    zh: '📸 发布死亡视频："视频被删除了。我恢复了它。我发布了未经审查的死亡时刻。\'请勿在家尝试。\'"'
                },
                consequence: {
                    en: '🤮 Snuff Journalism: You are criticized for posting snuff. Advertisers boycott you. Low road.',
                    th: '🤮 วารสารศาสตร์แนวนองเลือด: คุณถูกวิจารณ์ที่โพสต์ภาพคนตาย ผู้ลงโฆษณาคว่ำบาตร ทางต่ำ',
                    zh: '🤮 谋杀新闻：你因发布谋杀视频而受到批评。广告商抵制你。低级趣味。'
                }
            }
        ]
    },
    {
        id: 'journalist_045',
        text: {
            en: '🏭 The Cancer Town: A small town has 10x the cancer rate. You suspect the local chemical plant. The plant employs 80% of the town. The locals beg you not to shut it down.',
            th: '🏭 เมืองมะเร็ง: เมืองเล็กๆ มีอัตราการเป็นมะเร็ง 10 เท่า คุณสงสัยโรงงานเคมีท้องถิ่น โรงงานจ้างงาน 80% ของเมือง ชาวบ้านขอร้องไม่ให้คุณปิดมัน',
            zh: '🏭 癌症镇：一个小镇的癌症发病率是正常水平的10倍。你怀疑当地的化工厂。该工厂雇佣了镇上80%的人。当地人恳求你不要关闭它。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Reveal the Poison: "Jobs don\'t matter if you\'re dead. I publish the water test results proving they are poisoning the aquifer."',
                    th: '📢 เปิดโปงยาพิษ: "งานไม่สำคัญถ้าคุณตาย ฉันตีพิมพ์ผลทดสอบน้ำที่พิสูจน์ว่าพวกเขากำลังวางยาพิษในชั้นน้ำ"',
                    zh: '📢 揭露毒药："如果你死了，工作就不重要了。我发布水质测试结果，证明他们在污染含水层。"'
                },
                consequence: {
                    en: '🏚️ Economic Ruin, Health Saved: The plant closes. The town goes broke. But the cancer cluster stops growing. Hard choice.',
                    th: '🏚️ เศรษฐกิจพัง สุขภาพรอด: โรงงานปิด เมืองล้มละลาย แต่กลุ่มโรคมะเร็งหยุดโต ทางเลือกที่ยาก',
                    zh: '🏚️ 经济崩溃，健康得救：工厂关闭。小镇破产。但癌症聚集停止增长。艰难的选择。'
                },
                stats: { competence: 80, ethics: 80, leadership: 70, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Negotiate Cleanup: "I show the CEO the data. \'Clean it up, pay medical bills, keep jobs. Or I print.\'"',
                    th: '🤫 เจรจาทำความสะอาด: "ฉันให้ CEO ดูข้อมูล \'ทำความสะอาด จ่ายค่ารักษา รักษางาน ไม่งั้นฉันพิมพ์\'"',
                    zh: '🤫 谈判清理："我给CEO看数据。\'清理干净，支付医疗费，保住工作。否则我就登报。\'"'
                },
                consequence: {
                    en: '🤝 Corporate Reform: They install filters and settle. The town lives and works. You played god, but it worked.',
                    th: '🤝 การปฏิรูปองค์กร: พวกเขาติดเครื่องกรองและยอมความ เมืองอยู่รอดและทำงาน คุณเล่นบทพระเจ้า แต่มันได้ผล',
                    zh: '🤝 企业改革：他们安装过滤器并和解。小镇得以生存和工作。你扮演了上帝，但这很有效。'
                },
                stats: { competence: 70, ethics: 50, leadership: 80, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '🤷 Ignore It: "They want the jobs more than health. Who am I to decide? I leave them alone."',
                    th: '🤷 เพิกเฉย: "พวกเขาอยากได้งานมากกว่าสุขภาพ ฉันเป็นใครที่จะตัดสิน? ฉันปล่อยพวกเขาไป"',
                    zh: '🤷 无视它："比起健康，他们更想要工作。我是谁，能替他们决定？我不管他们。"'
                },
                consequence: {
                    en: '☠️ Slow Death: The next generation gets sick. You carry the guilt of silence to your grave.',
                    th: '☠️ ความตายที่ช้า: คนรุ่นต่อไปป่วย คุณแบกความรู้สึกผิดจากการเงียบไว้จนวันตาย',
                    zh: '☠️ 慢性死亡：下一代生病了。你带着沉默的内疚直到进坟墓。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Blame Lifestyle: "I write an article blaming their smoking and diet. Shield the company." Corrupt.',
                    th: '📉 โทษไลฟ์สไตล์: "ฉันเขียนบทความโทษการสูบบุหรี่และอาหารของพวกเขา ปกป้องบริษัท" คอร์รัปชั่น',
                    zh: '📉 指责生活方式："我写了一篇文章指责他们的吸烟和饮食。包庇公司。"腐败。'
                },
                consequence: {
                    en: '💰 Blood Money: The company secretly pays you a "consulting fee." You are evil.',
                    th: '💰 เงินเปื้อนเลือด: บริษัทแอบจ่าย "ค่าที่ปรึกษา" ให้คุณ คุณมันชั่วร้าย',
                    zh: '💰 血汗钱：公司秘密向你支付"咨询费"。你很邪恶。'
                }
            }
        ]
    },
    {
        id: 'journalist_046',
        text: {
            en: '📱 The Social Dilemma Leak: An engineer at a TikTok-like app gives you their "addiction algorithm." It proves they intentionally target depression in teens to increase watch time.',
            th: '📱 การรั่วไหลทางสังคม: วิศวกรที่แอปคล้าย TikTok ให้อัลกอริทึม "เสพติด" กับคุณ มันพิสูจน์ว่าพวกเขาตั้งเป้าที่ภาวะซึมเศร้าในวัยรุ่นเพื่อเพิ่มเวลาดู',
            zh: '📱 社交困境泄露：类似TikTok的应用程序的一名工程师给了你他们的"成瘾算法"。这证明他们故意针对青少年的抑郁症来增加观看时间。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Expose the Code: "This is psychological warfare. I publish the logic diagram. Show parents exactly how their kids are hooked."',
                    th: '📢 เปิดโปงโค้ด: "นี่คือสงครามจิตวิทยา ฉันตีพิมพ์แผนภาพตรรกะ แสดงให้พ่อแม่เห็นชัดๆ ว่าลูกติดได้อย่างไร"',
                    zh: '📢 曝光代码："这是心理战。我发布逻辑图。向父母确切展示他们的孩子是如何上钩的。"'
                },
                consequence: {
                    en: '📉 Tech Crash: The stock tanks 20%. Congress holds hearings. The app is restricted. Massive impact.',
                    th: '📉 เทคโนฯ พัง: หุ้นตก 20% สภาคองเกรสจัดไต่สวน แอปถูกจำกัด ผลกระทบมหาศาล',
                    zh: '📉 科技崩盘：股票暴跌20%。国会举行听证会。应用程序受到限制。巨大的影响。'
                },
                stats: { competence: 90, ethics: 80, leadership: 70, innovation: 70 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Sell to Competitor: "I quietly sell the info to Facebook. Let them fight it out."',
                    th: '🤫 ขายให้คู่แข่ง: "ฉันแอบขายข้อมูลให้ Facebook ให้พวกเขาสู้กันเอง"',
                    zh: '🤫 卖给竞争对手："我悄悄把信息卖给Facebook。让他以此们互相争斗。"'
                },
                consequence: {
                    en: '🐍 Corporate Espionage: You get rich, but the tech doesn\'t change; it just moves hands. Cynical.',
                    th: '🐍 การจารกรรมองค์กร: คุณรวย แต่เทคโนโลยีไม่เปลี่ยน มันแค่เปลี่ยนมือ มองโลกในแง่ร้าย',
                    zh: '🐍 商业间谍：你发财了，但技术没有改变；它只是易手了。愤世嫉俗。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Interview CEO: "I give the CEO a chance to spin it. \'Was this a bug?\' Softball interview."',
                    th: '🤝 สัมภาษณ์ CEO: "ฉันให้โอกาส CEO แก้ตัว \'นี่เป็นบั๊กเหรอ?\' สัมภาษณ์แบบอ่อนข้อ"',
                    zh: '🤝 采访CEO："我给CEO一个旋转它的机会。\'这是一个错误吗？\'垒球采访。"'
                },
                consequence: {
                    en: '🤥 Whitewash: They claim it was unintentional. You let them off the hook. The practice continues.',
                    th: '🤥 การฟอกขาว: พวกเขาอ้างว่าไม่ได้ตั้งใจ คุณปล่อยพวกเขาไป การกระทำยังดำเนินต่อ',
                    zh: '🤥 粉饰：他们声称这是无意的。你放过了他们。这种做法还在继续。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🧠 Psychologist Angle: "I work with doctors to explain the harm. Focus on the victims, not the tech."',
                    th: '🧠 มุมนักจิตวิทยา: "ฉันทำงานกับหมอเพื่ออธิบายอันตราย โฟกัสที่เหยื่อ ไม่ใช่เทคโนโลยี"',
                    zh: '🧠 心理学家角度："我与医生合作以此解释这种危害。关注受害者，而不是技术。"'
                },
                consequence: {
                    en: '❤️ Awareness: Parents disconnect their kids. A cultural shift begins. Slower but deeper change.',
                    th: '❤️ ความตระหนักรู้: พ่อแม่ตัดการเชื่อมต่อลูก การเปลี่ยนแปลงทางวัฒนธรรมเริ่มขึ้น ช้าแต่ลึกซึ้ง',
                    zh: '❤️ 意识：父母断开了孩子的连接。文化转变开始。更慢但更深刻的改变。'
                },
                stats: { competence: 70, ethics: 70, leadership: 60, innovation: 50 }
            }
        ]
    },
    {
        id: 'journalist_047',
        text: {
            en: '⛪ The Priest\'s Diary: You find a diary of a deceased bishop detailing 50 years of abuse cover-ups. The church claims it\'s a forgery and threatens excommunication if you are Catholic.',
            th: '⛪ ไดอารี่นักบวช: คุณพบบันทึกของบิชอบที่เสียชีวิตที่มีรายละเอียดการปกปิดการล่วงละเมิด 50 ปี คริสตจักรอ้างว่าเป็นของปลอมและขู่จะขับออกจากศาสนาถ้าคุณเป็นคาทอลิก',
            zh: '⛪ 牧师的日记：你发现了一位已故主教的日记，详细记录了50年来掩盖虐待的行为。教会声称这是伪造的，并威胁说如果你是天主教徒，就将你驱逐出教会。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Publish the Sins: "The truth is my relgion. I publish photos of the pages. Let the light in."',
                    th: '📢 ตีพิมพ์บาป: "ความจริงคือศาสนาของฉัน ฉันตีพิมพ์รูปถ่ายหน้ากระดาษ ให้แสงส่องเข้ามา"',
                    zh: '📢 发布罪行："真相是我的宗教。我发布这些页面的照片。让光照进来。"'
                },
                consequence: {
                    en: '🌍 Reformation: The sheer scale forces the Vatican to respond. Victims feel vindicated. You are a pariah to some, hero to others.',
                    th: '🌍 การปฏิรูป: ขนาดของเรื่องบังคับให้วาติกันตอบสนอง เหยื่อรู้สึกได้รับความยุติธรรม คุณเป็นคนนอกคอกสำหรับบางคน เป็นฮีโร่สำหรับคนอื่น',
                    zh: '🌍 改革：巨大的规模迫使梵蒂冈做出回应。受害者感到平反。对有些人来说你是贱民，对另一些人来说你是英雄。'
                },
                stats: { competence: 90, ethics: 80, leadership: 70, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🔥 Burn It: "I am faithful. I cannot hurt the Church. I burn the diary to save souls."',
                    th: '🔥 เผามัน: "ฉันศรัทธา ฉันทำร้ายคริสตจักรไม่ได้ ฉันเผาไดอารี่เพื่อช่วยวิญญาณ"',
                    zh: '🔥 烧掉它："我很忠诚。我不能伤害教会。我烧掉日记是为了拯救灵魂。"'
                },
                consequence: {
                    en: '🤐 Guilt: The abuse continues. You protected an institution over children. History judges you poorly.',
                    th: '🤐 ความรู้สึกผิด: การล่วงละเมิดดำเนินต่อไป คุณปกป้องสถาบันมากกว่าเด็ก ประวัติศาสตร์ตัดสินคุณแย่',
                    zh: '🤐 内疚：虐待还在继续。你保护了机构而不是孩子。历史对你的评价很差。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Hand to Police: "This is evidence of crimes. I give it to the DA. Let the law handle it, not the press."',
                    th: '🤝 ส่งให้ตำรวจ: "นี่คือหลักฐานอาชญากรรม ฉันให้ DA ให้กฎหมายจัดการ ไม่ใช่สื่อ"',
                    zh: '🤝 交给警察："这是犯罪证据。我把它交给地方检察官。让法律处理，而不是媒体。"'
                },
                consequence: {
                    en: '⚖️ Slow Justice: The legal battle takes 10 years. It\'s sealed evidence. The public impact is muted.',
                    th: '⚖️ ความยุติธรรมที่ช้า: การต่อสู้ทางกฎหมายใช้เวลา 10 ปี มันเป็นหลักฐานที่ถูกปิดผนึก ผลกระทบต่อสาธารณะเงียบเชียบ',
                    zh: '⚖️ 迟到的正义：法律斗争持续了10年。这是密封证据。公众影响微乎其微。'
                },
                stats: { competence: 60, ethics: 70, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📚 Write a Book: "I don\'t do a news story. I spend 2 years writing a definitive book. \'The Bishop\'s Shadow\'."',
                    th: '📚 เขียนหนังสือ: "ฉันไม่ทำข่าว ฉันใช้เวลา 2 ปีเขียนหนังสือที่สมบูรณ์แบบ \'เงาของบิชอบ\'"',
                    zh: '📚 写一本书："我不做新闻报道。我花了两年时间写了一本权威的书。\'主教的影子\'。"'
                },
                consequence: {
                    en: '🏆 Literary Masterpiece: The book becomes a classic. The impact is delayed but long-lasting.',
                    th: '🏆 ผลงานชิ้นเอกทางวรรณกรรม: หนังสือกลายเป็นคลาสสิก ผลกระทบมาช้าแต่ยั่งยืน',
                    zh: '🏆 文学杰作：这本书成为经典。影响被推迟但持久。'
                }
            }
        ]
    },
    {
        id: 'journalist_048',
        text: {
            en: '🛸 The UFO Leak: A pentagon official offers you a clear video of a "tic-tac" UFO defying physics. He says, "The public is ready." Your editor says, "It\'s too crazy."',
            th: '🛸 UFO รั่วไหล: เจ้าหน้าที่เพนตากอนเสนอวิดีโอชัดเจนของ UFO "tic-tac" ที่ท้าทายฟิสิกส์ให้คุณ เขาบอกว่า "ประชาชนพร้อมแล้ว" บรรณาธิการคุณบอกว่า "มันบ้าเกินไป"',
            zh: '🛸不明飞行物泄露：一位五角大楼官员为你提供了一段"tic-tac"不明飞行物无视物理定律的清晰视频。他说，"公众准备好了。"你的编辑说，"这太疯狂了。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Bypass Editor: "I post it to my personal Twitter/X. \'This is real.\' Risk my job for disclosure."',
                    th: '🚀 ข้ามหน้าบรรณาธิการ: "ฉันโพสต์ลง Twitter/X ส่วนตัว \'นี่คือเรื่องจริง\' เสี่ยงงานเพื่อการเปิดเผย"',
                    zh: '🚀 绕过编辑："我把它发到我的个人Twitter/X上。\'这是真的。\'为了披露而冒着丢工作的风险。"'
                },
                consequence: {
                    en: '🌌 Paradigm Shift: The viral hit forces the government to confirm it. You changed human history. Editor fires, then rehires you.',
                    th: '🌌 การเปลี่ยนกระบวนทัศน์: ไวรัลบังคับให้รัฐบาลคยยืนยัน คุณเปลี่ยนประวัติศาสตร์มนุษย์ บก.ไล่ออกแล้วรับกลับ',
                    zh: '🌌 范式转变：病毒式传播迫使政府确认。你改变了人类历史。编辑解雇你，然后重新雇用你。'
                },
                stats: { competence: 80, ethics: 70, leadership: 80, innovation: 90 }
            },
            {
                id: 'B',
                text: {
                    en: '🗑️ Trash It: "I don\'t want to be the \'UFO guy\'. I want to cover serious politics." You decline.',
                    th: '🗑️ ทิ้งมัน: "ฉันไม่อยากเป็น \'คนบ้า UFO\' ฉันอยากทำข่าวการเมืองจริงจัง" คุณปฏิเสธ',
                    zh: '🗑️ 扔掉它："我不想成为\'UFO那个人\'。我想报道严肃的政治。"你拒绝了。'
                },
                consequence: {
                    en: '🤦 Missed Scoop: The NYT runs it next week. It\'s the biggest story ever. You feel like a fool.',
                    th: '🤦 พลาดสกู๊ป: NYT ลงข่าวสัปดาห์หน้า มันเป็นเรื่องใหญ่ที่สุดที่เคยมีมา คุณรู้สึกเหมือนคนโง่',
                    zh: '🤦 错失独家：纽约时报下周刊登了它。这是有史以来最大的故事。你觉得自己是个傻瓜。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔬 Verify with Scientists: "I show it to physicists first. \'Is this CGI?\' Build a scientific case."',
                    th: '🔬 ตรวจสอบกับนักวิทยาศาสตร์: "ฉ้นให้นักฟิสิกส์ดูก่อน \'นี่ CGI ป่าว?\' สร้างกรณีทางวิทยาศาสตร์"',
                    zh: '🔬 向科学家求证："我先给物理学家看。\'这是CGI吗？\'建立科学案例。"'
                },
                consequence: {
                    en: '📄 Sober Report: You publish a "Scientific Analysis of Aerial Anomalies." Less viral, more credible. History respects it.',
                    th: '📄 รายงานที่มีสติ: คุณตีพิมพ์ "การวิเคราะห์ทางวิทยาศาสตร์ของความผิดปกติทางอากาศ" ไวรัลน้อยกว่า แต่น่าเชื่อถือกว่า ประวัติศาสตร์ยอมรับ',
                    zh: '📄 冷静的报告：你发布了一份"空中异常的科学分析"。病毒式传播较少，但更可信。历史尊重它。'
                },
                stats: { competence: 90, ethics: 80, leadership: 60, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Sell NFT: "I mint the video as an NFT anonymously. Cash out on the hype."',
                    th: '💰 ขาย NFT: "ฉันมินต์วิดีโอเป็น NFT แบบนิรนาม รับเงินจากกระแส"',
                    zh: '💰 出售NFT："我匿名将视频铸造为NFT。利用炒作套现。"'
                },
                consequence: {
                    en: '💸 Crypto Rich: You make money, but the story is dismissed as a crypto scam. You polluted the truth.',
                    th: '💸 รวยคริปโต: คุณได้เงิน แต่เรื่องราวถูกปัดตกเป็นสแกมคริปโต คุณทำให้ความจริงแปดเปื้อน',
                    zh: '💸 加密富豪：你赚钱了，但这个故事被视为加密骗局而被驳回。你污染了真相。'
                }
            }
        ]
    },
    {
        id: 'journalist_049',
        text: {
            en: '🍞 The Bread Price Fixing: You notice bread prices are identical across all supermarket chains. A whistleblower says the CEOs meet secretly to fix prices. It hits the poor hardest.',
            th: '🍞 การฮั้วราคาขนมปัง: คุณสังเกตว่าราคาขนมปังเท่ากันหมดทุกซูเปอร์มาร์เก็ต ผู้แจ้งเบาะแสบอกว่า CEO แอบประชุมเพื่อฮั้วราคา มันกระทบคนจนหนักสุด',
            zh: '🍞 面包价格操纵：你注意到所有连锁超市的面包价格都是一样的。一位举报人说CEO们秘密会面以操纵价格。这对穷人的打击最大。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕵️ Bug the Meeting: "I plant a recording device in their meeting room. Illegal? Yes. Necessary? Yes."',
                    th: '🕵️ ดักฟังการประชุม: "ฉันติดเครื่องบันทึกเสียงในห้องประชุม ผิดกฎหมาย? ใช่ จำเป็น? ใช่"',
                    zh: '🕵️ 窃听会议："我在他们的会议室里安放录音设备。非法吗？是的。有必要吗？是的。"'
                },
                consequence: {
                    en: '⚖️ Cartel Busted: The recording stands up. The fines are massive. Prices drop. You face a suspended sentence but kept your job.',
                    th: '⚖️ ทลายแก๊งฮั้ว: การบันทึกใช้ได้ ค่าปรับมหาศาล ราคาลดลง คุณโดนรอลงอาญาแต่รักษางานไว้ได้',
                    zh: '⚖️ 卡特尔被捣毁：录音成立。罚款是巨大的。价格下跌。你面临缓刑，但保住了工作。'
                },
                stats: { competence: 80, ethics: 60, leadership: 60, innovation: 70 }
            },
            {
                id: 'B',
                text: {
                    en: '📊 Data Journalism: "I scrape 10 years of pricing data. The graph proves collusion without needing a tape. Math doesn\'t lie."',
                    th: '📊 วารสารศาสตร์ข้อมูล: "ฉันดึงข้อมูลราคาย้อนหลัง 10 ปี กราฟพิสูจน์การสมรู้ร่วมคิดโดยไม่ต้องใช้เทป คณิตศาสตร์ไม่โกหก"',
                    zh: '📊 数据新闻："我抓取了10年的定价数据。图表证明了勾结，不需要录音带。数学不会撒谎。"'
                },
                consequence: {
                    en: '📉 Legal Victory: The investigation triggers an antitrust probe. It\'s cleaner and safer than bugging. Smart.',
                    th: '📉 ชัยชนะทางกฎหมาย: การสืบสวนกระตุ้นให้สอบสวนการผูกขาด มันสะอาดและปลอดภัยกว่าการดักฟัง ฉลาด',
                    zh: '📉 法律胜利：调查引发了反垄断调查。这比窃听更干净、更安全。聪明。'
                },
                stats: { competence: 90, ethics: 90, leadership: 50, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Ask for Cut: "I know what you are doing. Give me free groceries for life." Petty corruption.',
                    th: '🤝 ขอส่วนแบ่ง: "ฉันรู้ว่าพวกคุณทำอะไร ให้ของชำฟรีตลอดชีวิตฉัน" คอร์รัปชั่นเล็กน้อย',
                    zh: '🤝 索要分红："我知道你们在做什么。给我终身免费的杂货。"小贪。'
                },
                consequence: {
                    en: '🗑️ Fired: They laugh at you and report you for blackmail. You are fired for being a cheap crook.',
                    th: '🗑️ ถูกไล่ออก: พวกเขาหัวเราะเยาะคุณและแจ้งความข้อหาแบล็กเมล์ คุณถูกไล่ออกเพราะเป็นโจรราคาถูก',
                    zh: '🗑️以此被解雇：他们嘲笑你并举报你勒索。你因是一个廉价的骗子而被解雇。'
                },
                stats: { competence: 10, ethics: 0, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Ignore: "Inflation happens. It\'s not a story." You are lazy.',
                    th: '🤷 เพิกเฉย: "เงินเฟ้อมันก็เกิดแหละ ไม่ใช่ข่าวหรอก" คุณขี้เกียจ',
                    zh: '🤷 无视："通货膨胀是会发生的。这不是新闻。"你很懒。'
                },
                consequence: {
                    en: '🏚️ Hunger: People starve. You missed a huge economic story.',
                    th: '🏚️ ความหิวโหย: คนอดอยาก คุณพลาดข่าวเด็ดทางเศรษฐกิจ',
                    zh: '🏚️ 饥饿：人们挨饿。你错过了一个巨大的经济故事。'
                }
            }
        ]
    },
    {
        id: 'journalist_050',
        text: {
            en: '📝 The Final Column: You are retiring. You have one last column to write. What is your legacy?',
            th: '📝 คอลัมน์สุดท้าย: คุณกำลังเกษียณ คุณมีคอลัมน์สุดท้ายที่จะเขียน มรดกของคุณคืออะไร?',
            zh: '📝 最后一篇专栏：你要退休了。你还有最后一篇专栏要写。你的遗产是什么？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕯️ Warning to Future: "Journalism is dying. AI and clickbait are killing truth. Fight for it." A somber manifesto.',
                    th: '🕯️ คำเตือนถึงอนาคต: "วารสารศาสตร์กำลังตาย AI และคลิกเบตกำลังฆ่าความจริง สู้เพื่อมัน" แถลงการณ์ที่เคร่งขรึม',
                    zh: '🕯️ 给未来的警告："新闻业正在消亡。人工智能和标题党正在扼杀真相。为之奋斗。"一份庄严的宣言。'
                },
                consequence: {
                    en: '🏛️ Respect: It is shared widely. Young journalists take up the torch. You leave as a guardian of truth.',
                    th: '🏛️ ความเคารพ: ถูกแชร์อย่างกว้างขวาง นักข่าวรุ่นใหม่รับช่วงต่อ คุณจากไปในฐานะผู้พิทักษ์ความจริง',
                    zh: '🏛️ 尊重：它被广泛分享。年轻记者接过火炬。你作为真相的守护者离开。'
                },
                stats: { competence: 80, ethics: 80, leadership: 80, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🎊 Greatest Hits: "Here are my best scoops. Wasn\'t I great?" A vanity piece.',
                    th: '🎊 รวมฮิต: "นี่คือสกู๊ปที่ดีที่สุดของฉัน ฉันเก่งมั้ยล่ะ?" บทความหลงตัวเอง',
                    zh: '🎊 精选集："这是我最好的独家新闻。我不是很棒吗？"一篇虚荣的文章。'
                },
                consequence: {
                    en: '🙄 Eye Rolls: People remember your ego, not your work. A weak ending.',
                    th: '🙄 มองบน: คนจำอีโก้คุณได้ ไม่ใช่ผลงาน ตอนจบที่อ่อนแอ',
                    zh: '🙄 翻白眼：人们记住的是你的自我，而不是你的工作。一个软弱的结局。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔥 Burn Bridges: "My editor was an idiot. The owners are crooks." A final bridge burning.',
                    th: '🔥 เผาสะพาน: "บก.ฉันมันโง่ เจ้าของมันโจร" การเผาสะพานครั้งสุดท้าย',
                    zh: '🔥 过河拆桥："我的编辑是个白痴。老板是骗子。"最后的决裂。'
                },
                consequence: {
                    en: '🧨 Scandalous Exit: Entertaining but unprofessional. You are remembered as bitter.',
                    th: '🧨 ทางออกที่อื้อฉาว: สนุกแต่ไม่เป็นมืออาชีพ คนจำว่าคุณขมขื่น',
                    zh: '🧨 丑闻般的退出：有趣但不专业。你被认为是一个愤世嫉俗的人。'
                },
                stats: { competence: 40, ethics: 20, leadership: 10, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🌱 Spotlight Others: "Don\'t read me anymore. Read these 5 young writers. They are the future." Passing the baton.',
                    th: '🌱 ส่องแสงให้คนอื่น: "อย่าอ่านฉันอีกเลย อ่านนักเขียนรุ่นใหม่ 5 คนนี้ พวกเขาคืออนาคต" การส่งต่อไม้ผลัด',
                    zh: '🌱 聚焦他人："别再读我的文章了。读这5位年轻作家的文章。他们是未来。"交接棒。'
                },
                consequence: {
                    en: '🎓 Mentor Legacy: You launched careers. Your influence lives on through them. The highest form of leadership.',
                    th: '🎓 มรดกเมนเทอร์: คุณสร้างอาชีพ อิทธิพลของคุณอยู่ต่อผ่านพวกเขา รูปแบบสูงสุดของความเป็นผู้นำ',
                    zh: '🎓 导师遗产：你开启了别人的职业生涯。你的影响力通过他们得以延续。最高形式的领导力。'
                },
                stats: { competence: 80, ethics: 90, leadership: 90, innovation: 60 }
            }
        ]
    },
];



