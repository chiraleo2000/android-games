/* eslint-disable no-unused-vars */
export const filmDirectorQuestions = [
    {
        id: 'film_director_001',
        text: {
            en: '🎬 The Diva Meltdown: Your lead actor, a global superstar, refuses to come out of their trailer because the coffee on set was "lukewarm." The sun is setting, and you are losing the light for the most expensive shot of the movie.',
            th: '🎬 ดารางอแง: นักแสดงนำของคุณซึ่งเป็นซุปตาร์ระดับโลกปฏิเสธที่จะออกจากรถเทรลเลอร์เพราะกาแฟในกองถ่าย "อุ่นเกินไป" พระอาทิตย์กำลังตกดิน และคุณกำลังสูญเสียแสงสำหรับช็อตที่แพงที่สุดของหนัง',
            zh: '🎬 巨星崩溃：你的主演，一位全球超级巨星，绝离开拖车，因为片场的咖啡"不冷不热"。太阳下山了，你正在失去电影中最昂贵镜头的自然光。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🙇 Beg and Plead: "Go to the trailer personally. Apologize. Offer them your own coffee. Do whatever it takes to get them on set."',
                    th: '🙇 อ้อนวอนและขอร้อง: "ไปที่รถเทรลเลอร์ด้วยตัวเอง ขอโทษ เสนอกาแฟของคุณเอง ทำทุกอย่างเพื่อให้พวกเขาออกมา"',
                    zh: '🙇 恳求："亲自去拖车。道歉。给他们你自己的咖啡。不惜一切代价让他们回到片场。"'
                },
                consequence: {
                    en: '🎥 Shot Saved, Respect Lost! You get the shot. But the crew sees you are no spine. The actor walks all over you for the rest of the shoot.',
                    th: '🎥 ได้ช็อต แต่เสียความเคารพ! คุณได้ภาพ แต่ทีมงานเห็นว่าคุณไม่มีกระดูกสันหลัง นักแสดงข่มเหงคุณตลอดการถ่ายทำที่เหลือ',
                    zh: '🎥 镜头保留，尊重丧失！你拍到了镜头。但剧组看到你没有骨气。演员在接下来的拍摄中一直骑在你头上。'
                },
                stats: { competence: 30, ethics: 10, leadership: -40, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '📢 The Public Shaming: "Grab the megaphone. \'Everyone, wrap up! We are canceling the day because [Actor Name] needs a better latte! See you tomorrow!\'"',
                    th: '📢 ประจานต่อสาธารณะ: "หยิบโทรโข่ง \'ทุกคน เลิกกอง! วันนี้เรายกเลิกเพราะ [ชื่อนักแสดง] ต้องการลาเต้ที่ดีกว่านี้ เจอกันพรุ่งนี้!\'"',
                    zh: '📢 公开羞辱："拿起扩音器。\'大家收工！我们要取消今天的拍摄，因为[演员名字]需要更好的拿铁！明天见！\'"'
                },
                consequence: {
                    en: '🔥 Nuclear Option! The crew loves you. The actor is humiliated and furious. The studio is angry about the lost day, but the actor is on time forever after.',
                    th: '🔥 ตัวเลือกนิวเคลียร์! ทีมงานรักคุณ นักแสดงอับอายและโกรธจัด สตูดิโอโกรธเรื่องวันที่เสียไป แต่นักแสดงมาตรงเวลาตลอดหลังจากนั้น',
                    zh: '🔥 核选项！剧组爱你。演员既羞愧又愤怒。工作室对损失的一天感到愤怒，但演员此后永远准时。'
                },
                stats: { competence: -10, ethics: 20, leadership: 50, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Rewrite the Scene: "Forget the actor. Use a body double for the silhouette and rewrite the dialogue to be a voiceover later."',
                    th: '🔄 เขียนบทใหม่: "ลืมนักแสดงไปซะ ใช้สตันท์แมนสำหรับเงาและเขียนบทพูดใหม่ให้เป็นเสียงบรรยายทีหลัง"',
                    zh: '🔄 重写场景："忘了演员吧。用替身拍摄剪影，稍后重写对话作为画外音。"'
                },
                consequence: {
                    en: '💡 Creative Genius! The scene ends up being more mysterious and artistic. You saved the day and the budget without bowing to the diva.',
                    th: '💡 อัจฉริยะทางความคิดสร้างสรรค์! ฉากจบลงด้วยความลึกลับและศิลปะมากขึ้น คุณช่วยวันนั้นและงบประมาณโดยไม่ต้องก้มหัวให้ดารา',
                    zh: '💡 创意天才！这一幕最终变得更加神秘和艺术。你挽救了这一天和预算，没有向大牌低头。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'film_director_002',
        text: {
            en: '🎪 The Studio Interference: You just finished the rough cut. It is a dark, tragic tragedy. The studio executives hate it. "Audiences want hope!" they scream. "Re-shoot the ending where everyone lives and dances!"',
            th: '🎪 การแทรกแซงของสตูดิโอ: คุณเพิ่งตัดต่อคร่าวๆ เสร็จ มันเป็นโศกนาฏกรรมที่มืดมน ผู้บริหารสตูดิโอเกลียดมัน "ผู้ชมต้องการความหวัง!" พวกเขากรีดร้อง "ถ่ายตอนจบใหม่ที่ทุกคนรอดชีวิตและเต้นรำ!"',
            zh: '🎪 工作室干扰：你刚刚完成了粗剪。这是一部黑暗的悲剧。工作室高管讨厌它。"观众想要希望！"他们尖叫道。"重拍结局，让每个人都活着跳舞！"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💃 The Happy Ending: "Fine. Dance number it is. I want to keep my job and get hired for the sequel."',
                    th: '💃 ตอนจบที่มีความสุข: "ก็ได้ ฉากเต้นรำก็เต้นรำ ผมอยากรักษางานและได้รับการจ้างสำหรับภาคต่อ"',
                    zh: '💃 大团圆结局："好吧。那就跳舞吧。我想保住工作并被雇佣拍续集。"'
                },
                consequence: {
                    en: '💰 Commercial Success, Artistic Failure! The movie makes millions. Critics call it "safe and formulaic." You are rich but feel like a sellout.',
                    th: '💰 ความสำเร็จทางการค้า ล้มเหลวทางศิลปะ! หนังทำเงินได้หลายล้าน นักวิจารณ์เรียกว่า "ปลอดภัยและเป็นสูตรสำเร็จ" คุณรวยแต่รู้สึกเหมือนขายวิญญาณ',
                    zh: '💰 商业成功，艺术失败！电影赚了几百万。评论家称之为"安全且公式化"。你有钱但感觉像是出卖了自己。'
                },
                stats: { competence: 40, ethics: -20, leadership: -10, innovation: -30 }
            },
            {
                id: 'B',
                text: {
                    en: '🎬 The Director\'s Cut: "Absolutely not. My name is on the film. Release it as is, or remove my name. I will leak the original script if I have to."',
                    th: '🎬 ฉบับผู้กำกับ: "ไม่มีทาง ชื่อของผมอยู่บนหนัง ปล่อยมันอย่างที่มันเป็น หรือเอาชื่อผมออก ผมจะปล่อยบทเดิมหลุดถ้าจำเป็น"',
                    zh: '🎬 导演剪辑版："绝对不行。我的名字在电影上。原样发布，或者去掉我的名字。如果必须的话，我会泄露原始剧本。"'
                },
                consequence: {
                    en: '⚡ Legend Status! The studio backs down. The film is a masterpiece. You are labeled "difficult to work with" but "genius."',
                    th: '⚡ สถานะตำนาน! สตูดิโอยอมถอย หนังเป็นผลงานชิ้นเอก คุณถูกตราหน้าว่า "ทำงานด้วยยาก" แต่ "อัจฉริยะ"',
                    zh: '⚡ 传奇地位！工作室退缩了。这部电影是杰作。你被贴上"难以合作"但"天才"的标签。'
                },
                stats: { competence: 20, ethics: 50, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤔 The Ambiguous End: "Let\'s compromise. We cut to black before they die. It leaves it open to interpretation. Hopeful... but maybe not."',
                    th: '🤔 ตอนจบที่คลุมเครือ: "มาประนีประนอมกัน ตัดจบเป็นสีดำก่อนพวกเขาตาย มันเปิดกว้างสำหรับการตีความ มีความหวัง... หรืออาจจะไม่"',
                    zh: '🤔 模棱两可的结局："让我们妥协吧。在他们死之前切黑屏。这留下了解释空间。充满希望……但也可能不是。"'
                },
                consequence: {
                    en: '🤝 Smart Politics! The studio accepts it. Audiences argue about the ending for years on Reddit. It is free marketing.',
                    th: '🤝 การเมืองที่ชาญฉลาด! สตูดิโอยอมรับ ผู้ชมถกเถียงเรื่องตอนจบกันหลายปีบน Reddit มันเป็นการตลาดฟรี',
                    zh: '🤝 聪明的政治！工作室接受了它。观众在 Reddit 上争论结局多年。这是免费营销。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 30 }
            }
        ]
    },
    {
        id: 'film_director_003',
        text: {
            en: '⛈️ The Perfect Storm: A hurricane is approaching your shooting location. You have 3 days left of filming. Evacuating means cancelling the movie. Staying risks lives.',
            th: '⛈️ พายุที่สมบูรณ์แบบ: พายุเฮอริเคนกำลังเข้ามาใกล้สถานที่ถ่ายทำของคุณ คุณเหลือเวลาอีก 3 วันในการถ่ายทำ การอพยพหมายถึงการยกเลิกหนัง การอยู่ต่อเสี่ยงต่อชีวิต',
            zh: '⛈️ 完美风暴：飓风正在接近你的拍摄地点。你还剩 3 天的拍摄时间。撤离意味着取消电影。留下来会危及生命。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎬 Shoot the Storm: "We use the real storm for the climax! Put the expensive cameras in waterproof cases. This will look insane!"',
                    th: '🎬 ถ่ายพายุ: "เราใช้พายุจริงสำหรับจุดไคลแม็กซ์! ใส่กล้องแพงๆ ในเคสกันน้ำ ภาพจะออกมาบ้าคลั่งมาก!"',
                    zh: '🎬 拍摄风暴："我们用真正的风暴作为高潮！把昂贵的相机放在防水箱里。这看起来会很疯狂！"'
                },
                consequence: {
                    en: '🏆 Oscar for Cinematography! The footage is terrifyingly real. But a cameraman gets injured. You are hailed as a visionary reckless genius.',
                    th: '🏆 ออสการ์สาขากำกับภาพ! ฟุตเทจดูจริงจนน่ากลัว แต่ตากล้องได้รับบาดเจ็บ คุณได้รับการยกย่องว่าเป็นอัจฉริยะที่บ้าบิ่นและมีวิสัยทัศน์',
                    zh: '🏆 奥斯卡最佳摄影奖！镜头真实得可怕。但一名摄影师受伤了。你被誉为有远见但鲁莽的天才。'
                },
                stats: { competence: 50, ethics: -40, leadership: 10, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🏃 Mandatory Evacuation: "Cut. Pack up. Life matters more than a movie. We will finish on a soundstage with green screen."',
                    th: '🏃 การอพยพภาคบังคับ: "คัท เก็บของ ชีวิตสำคัญกว่าหนัง เราจะถ่ายให้เสร็จบนซาวด์สเตจด้วยกรีนสกรีน"',
                    zh: '🏃 强制撤离："停。收拾行李。生命比电影更重要。我们将在带有绿幕的摄影棚完成。"'
                },
                consequence: {
                    en: '🛡️ Safety First! The crew respects you deeply. The ending looks a bit fake (bad CGI), but everyone got home safe.',
                    th: '🛡️ ปลอดภัยไว้ก่อน! ทีมงานเคารพคุณอย่างสุดซึ้ง ตอนจบดูปลอมนิดหน่อย (CGI แย่) แต่ทุกคนกลับบ้านอย่างปลอดภัย',
                    zh: '🛡️ 安全第一！剧组深切尊重你。结局看起来有点假（CGI 糟糕），但每个人都安全回家了。'
                },
                stats: { competence: 20, ethics: 50, leadership: 50, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚁 Skeleton Crew: "Send most people home. Only me, the lead actor, and the DOP stay to get the essential shots."',
                    th: '🚁 ทีมงานโครงกระดูก: "ส่งคนส่วนใหญ่กลับบ้าน มีแค่ผม นักแสดงนำ และผู้กำกับภาพเท่านั้นที่อยู่เพื่อเก็บช็อตสำคัญ"',
                    zh: '🚁 骨干船员："送大多数人回家。只有我、主演和摄影指导留下来拍摄必要的镜头。"'
                },
                consequence: {
                    en: '🤝 Bond of Brothers! The three of you survive the storm and get the shot. It becomes a legendary Hollywood story of dedication.',
                    th: '🤝 สายสัมพันธ์พี่น้อง! พวกคุณสามคนรอดพ้นจากพายุและได้ภาพ มันกลายเป็นเรื่องราวในตำนานของฮอลลีวูดเกี่ยวกับความทุ่มเท',
                    zh: '🤝 兄弟情谊！你们三个在风暴中幸存下来并拍到了镜头。这成为了好莱坞奉献精神的传奇故事。'
                },
                stats: { competence: 40, ethics: 20, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'film_director_004',
        text: {
            en: '💰 The Embezzlement: You discover the producer has been skimming the budget. The special effects money is gone. He says "Be quiet, or the whole movie gets cancelled."',
            th: '💰 การยักยอก: คุณค้นพบว่าโปรดิวเซอร์ยักยอกงบประมาณ เงินสำหรับสเปเชียลเอฟเฟกต์หายไป เขาบอกว่า "เงียบไว้ ไม่งั้นหนังทั้งเรื่องจะถูกยกเลิก"',
            zh: '💰 贪污：你发现制片一直在挪用预算。特效资金没了。他说"保持安静，否则整部电影都会被取消。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤐 Practical Effects: "Fine. We do it old school. Miniatures, puppets, and camera tricks. No CGI. We make it work."',
                    th: '🤐 เอฟเฟกต์ทำมือ: "ก็ได้ เราทำแบบโรงเรียนเก่า โมเดลจำลอง หุ่นเชิด และกล้องหลอกตา ไม่มี CGI เราทำให้มันเวิร์ค"',
                    zh: '🤐 实用效果："好吧。我们用老派方法。微缩模型、木偶和通过相机技巧。没有 CGI。我们会搞定的。"'
                },
                consequence: {
                    en: '🎞️ Retro Charm! The movie has a unique, tangible feel that audiences love. You proved you don\'t need money to make magic.',
                    th: '🎞️ เสน่ห์ย้อนยุค! หนังมีความรู้สึกที่เป็นเอกลักษณ์และจับต้องได้ที่ผู้ชมชื่นชอบ คุณพิสูจน์แล้วว่าคุณไม่ต้องใช้เงินเพื่อสร้างเวทมนตร์',
                    zh: '🎞️ 复古魅力！电影有一种观众喜爱的独特、有质感的感觉。你证明了不需要钱也能创造奇迹。'
                },
                stats: { competence: 50, ethics: 0, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Whistleblower: "Record the conversation. Leak it to the trades. Get him fired. Pause production."',
                    th: '⚖️ ผู้เปิดโปง: "อัดเสียงบทสนทนา ปล่อยให้สื่อสายบันเทิง ไล่เขาออก หยุดการผลิตชั่วคราว"',
                    zh: '⚖️ 举报人："录下对话。泄露给行业媒体。让他被解雇。暂停制作。"'
                },
                consequence: {
                    en: '🗞️ Scandal! The production is halted for months. You are seen as a snitch, but a new studio picks up the project eventually.',
                    th: '🗞️ สแกนดัล! การผลิตหยุดชะงักเป็นเวลาหลายเดือน คุณถูกมองว่าเป็นคนขี้ฟ้อง แต่ในที่สุดสตูดิโอใหม่ก็รับช่วงต่อโครงการ',
                    zh: '🗞️ 丑闻！制作暂停了几个月。你被视为告密者，但最终有家新工作室接手了这个项目。'
                },
                stats: { competence: 10, ethics: 50, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Blackmail: "I will stay quiet. But I want final cut privilege and double my points on the backend profit."',
                    th: '🤝 แบล็กเมล์: "ผมจะเงียบ แต่ผมต้องการสิทธิ์ในการตัดต่อครั้งสุดท้ายและส่วนแบ่งกำไรสองเท่า"',
                    zh: '🤝 勒索："我会保持安静。但我想要最终剪辑权和双倍的后端利润分成。"'
                },
                consequence: {
                    en: '🤑 Criminal Partners! You get rich and creative control. But you are now complicit. The guilt eats at you vaguely.',
                    th: '🤑 คู่หูอาชญากร! คุณรวยและมีการควบคุมเชิงสร้างสรรค์ แต่ตอนนี้คุณเป็นผู้สมรู้ร่วมคิด ความรู้สึกผิดกัดกินคุณจางๆ',
                    zh: '🤑 犯罪伙伴！你变得富有并拥有创意控制权。但你现在是同谋了。内疚感隐约吞噬着你。'
                },
                stats: { competence: 30, ethics: -50, leadership: -10, innovation: 10 }
            }
        ]
    },
    {
        id: 'film_director_005',
        text: {
            en: '✂️ The Global Censor: To release in a major foreign market, you must cut the LGBTQ+ subplot and change the villain\'s nationality. It ruins the story\'s theme.',
            th: '✂️ เซ็นเซอร์ระดับโลก: ในการฉายในตลาดต่างประเทศขนาดใหญ่ คุณต้องตัดซับพล็อต LGBTQ+ และเปลี่ยนสัญชาติของตัวร้าย มันทำลายธีมของเรื่อง',
            zh: '✂️ 全球审查：为了在主要的国外市场上映，你必须删掉 LGBTQ+ 支线情节并改变反派的国籍。这破坏了故事的主题。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌍 Regional Versions: "Cut it for them. Keep it for everyone else. We need the box office revenue from that country."',
                    th: '🌍 เวอร์ชันภูมิภาค: "ตัดให้พวกเขา เก็บไว้ให้คนอื่น เราต้องการรายได้บ็อกซ์ออฟฟิศจากประเทศนั้น"',
                    zh: '🌍 区域版本："为他们剪掉。为其他人保留。我们需要那个国家的票房收入。"'
                },
                consequence: {
                    en: '📈 Business Decision. The movie makes a billion dollars. Fans notice the difference and call you a coward online.',
                    th: '📈 การตัดสินใจทางธุรกิจ หนังทำเงินได้พันล้านดอลลาร์ แฟนๆ สังเกตเห็นความแตกต่างและเรียกคุณว่าขี้ขลาดทางออนไลน์',
                    zh: '📈 商业决定。电影赚了十亿美元。粉丝注意到差异并在网上称你为懦夫。'
                },
                stats: { competence: 40, ethics: -20, leadership: -10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧱 Integrity Block: "No cuts. If they ban it, they ban it. Art is not negotiable."',
                    th: '🧱 บล็อกความซื่อสัตย์: "ห้ามตัด ถ้าพวกเขาแบน ก็แบนไป ศิลปะต่อรองไม่ได้"',
                    zh: '🧱 正直封锁："不剪。如果他们禁止，那就禁止。艺术是没得商量的。"'
                },
                consequence: {
                    en: '📉 Banned! You lose access to 40% of the global audience. The studio is furious. But you become an icon for free speech.',
                    th: '📉 ถูกแบน! คุณสูญเสียการเข้าถึงผู้ชม 40% ทั่วโลก สตูดิโอโกรธจัด แต่คุณกลายเป็นไอคอนของเสรีภาพในการพูด',
                    zh: '📉 被禁！你失去了全球 40% 的观众。工作室很愤怒。但你成为了言论自由的偶像。'
                },
                stats: { competence: 10, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🎬 Clever Subtext: "Cut the explicit scenes, but code the relationship so heavily in subtext that it is obvious but unbannable."',
                    th: '🎬 นัยแฝงที่ชาญฉลาด: "ตัดฉากที่ชัดเจนออก แต่ใส่รหัสความสัมพันธ์ในนัยแฝงให้หนักจนชัดเจนแต่แบนไม่ได้"',
                    zh: '🎬 巧妙的潜台词："剪掉露骨的场景，但在潜台词中大量暗示这种关系，使其明显但无法被禁止。"'
                },
                consequence: {
                    en: '🧠 Smart Play! The censors miss it, but the audience gets it. It becomes a viral topic of discussion. You outsmarted the system.',
                    th: '🧠 การเล่นที่ชาญฉลาด! เซ็นเซอร์พลาด แต่ผู้ชมเข้าใจ มันกลายเป็นหัวข้อสนทนาไวรัล คุณฉลาดกว่าระบบ',
                    zh: '🧠 聪明的举动！审查员没看出来，但观众懂了。它成为了病毒式的讨论话题。你智胜了系统。'
                },
                stats: { competence: 50, ethics: 30, leadership: 30, innovation: 40 }
            }
        ]
    },
    {
        id: 'film_director_006',
        text: {
            en: '💥 The Stunt Accident: A stuntman breaks his leg doing a jump you insisted on. He will recover, but the crew is shaken. The insurance rep asks if it was "scripted safety" or "improvisation."',
            th: '💥 อุบัติเหตุสตั๊นท์: สตั๊นท์แมนขาหักจากการกระโดดที่คุณยืนยันจะให้ทำ เขาจะหายดี แต่ทีมงานขวัญเสีย ตัวแทนประกันถามว่าเป็น "ความปลอดภัยตามบท" หรือ "การด้นสด"',
            zh: '💥 特技事故：一名替身演员在做你坚持要做的跳跃动作时摔断了腿。他会康复的，但剧组很震惊。保险代表问这是"按剧本的安全措施"还是"即兴发挥"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤥 Lie for Coverage: "It was heavily rehearsed. Just a freak accident." (It was improvisation). Protect the budget.',
                    th: '🤥 โกหกเพื่อคุ้มครอง: "ซ้อมมาอย่างดีแล้ว แค่อุบัติเหตุประหลาด" (มันคือการด้นสด) ปกป้องงบประมาณ',
                    zh: '🤥 撒谎以获得赔偿："这是经过严格排练的。只是个意外。"（这是即兴发挥）。保护预算。'
                },
                consequence: {
                    en: '🕵️ Fraud Risk! Insurance pays. But the stunt coordinator knows you lied. They lose trust in your leadership.',
                    th: '🕵️ ความเสี่ยงฉ้อโกง! ประกันจ่าย แต่ผู้ประสานงานสตั๊นท์รู้ว่าคุณโกหก พวกเขาสูญเสียความไว้วางใจในความเป็นผู้นำของคุณ',
                    zh: '🕵️ 欺诈风险！保险赔付。但特技协调员知道你撒谎。他们对你的领导失去了信任。'
                },
                stats: { competence: 20, ethics: -40, leadership: -20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤕 Admit Fault: "My fault. I pushed for an improvise. I will pay his medical bills personally if insurance denies it."',
                    th: '🤕 ยอมรับผิด: "ความผิดผมเอง ผมผลักดันให้ด้นสด ผมจะจ่ายค่ารักษาพยาบาลของเขาเป็นการส่วนตัวถ้าประกันปฏิเสธ"',
                    zh: '🤕 承认错误："我的错。我坚持要即兴发挥。如果保险拒绝，我会个人支付他的医疗费。"'
                },
                consequence: {
                    en: '💖 Captain\'s Honor! The crew sees you taking responsibility. Morale skyrockets. The stuntman forgives you.',
                    th: '💖 เกียรติของกัปตัน! ทีมงานเห็นคุณรับผิดชอบ ขวัญกำลังใจพุ่งสูงขึ้น สตั๊นท์แมนให้อภัยคุณ',
                    zh: '💖 船长的荣誉！剧组看到你承担责任。士气高涨。特技演员原谅了你。'
                },
                stats: { competence: 10, ethics: 50, leadership: 50, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🎬 Use the Take: "Is he okay? Good. Did we get it on camera? Put it in the movie. His pain will immortalize the film."',
                    th: '🎬 ใช้เทคนั้น: "เขาโอเคไหม? ดี เราถ่ายทันไหม? ใส่มันในหนัง ความเจ็บปวดของเขาจะทำให้หนังเป็นอมตะ"',
                    zh: '🎬 使用该镜头："他还好吗？很好。拍下来了吗？把它放进电影里。他的痛苦将使电影不朽。"'
                },
                consequence: {
                    en: '🧛 Ruthless Artist! The shot is visceral. Audiences gasp. But people whisper that you are a monster.',
                    th: '🧛 ศิลปินผู้โหดเหี้ยม! ภาพมันบาดลึก ผู้ชมอ้าปากค้าง แต่ผู้คนกระซิบว่าคุณเป็นสัตว์ประหลาด',
                    zh: '🧛 冷酷的艺术家！镜头是发自内心的。观众倒吸一口凉气。但人们窃窃私语说你是个怪物。'
                },
                stats: { competence: 40, ethics: -30, leadership: -10, innovation: 30 }
            }
        ]
    },
    {
        id: 'film_director_007',
        text: {
            en: '🎭 The Method Actor: Your villain has stopped bathing and is harassing crew members "in character." It is creating a toxic workplace, but his performance is terrifyingly good.',
            th: '🎭 นักแสดงเมธอด: ตัวร้ายของคุณหยุดอาบน้ำและคุกคามทีมงาน "ในคาแรคเตอร์" มันสร้างสถานที่ทำงานที่เป็นพิษ แต่การแสดงของเขานั้นดีจนน่ากลัว',
            zh: '🎭 方法派演员：你的反派不再洗澡，并"以角色的名义"骚扰剧组成员。这正在创造一个有毒的工作场所，但他的表演好得可怕。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚽 Intervention: "Shower and be nice, or you are fired. I don\'t care how good the acting is. We are professionals."',
                    th: '🚽 การแทรกแซง: "อาบน้ำและทำตัวดีๆ ไม่งั้นไล่ออก ผมไม่สนว่าการแสดงจะดีแค่ไหน เราเป็นมืออาชีพ"',
                    zh: '🚽 干预："洗澡并友善一点，否则你被解雇了。我不在乎演技有多好。我们是专业人士。"'
                },
                consequence: {
                    en: '📉 Performance Drop. He cleans up, but the edge is gone. The villain feels generic. The crew is relieved, though.',
                    th: '📉 การแสดงดรอป เขาทำตัวสะอาดขึ้น แต่ความคมหายไป ตัวร้ายรู้สึกธรรมดา แต่ทีมงานโล่งใจ',
                    zh: '📉 表现下降。他把自己清理干净了，但那种锋芒没了。反派感觉很普通。不过剧组松了一口气。'
                },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '📹 Enable the Madness: "Give him his own isolated trailer. Tell the crew to stay away. Let him cook. We wrap in 2 weeks."',
                    th: '📹 สนับสนุนความบ้าคลั่ง: "ให้รถเทรลเลอร์แยกต่างหากแก่เขา บอกทีมงานให้อยู่ห่างๆ ปล่อยให้เขาทำไป เราจะปิดกล้องใน 2 สัปดาห์"',
                    zh: '📹 纵容疯狂："给他一辆独立的拖车。告诉剧组离远点。让他发挥。我们 2 周后杀青。"'
                },
                consequence: {
                    en: '🏆 Oscar Winner! He wins Best Actor. He thanks you for "understanding the process." The crew needs therapy.',
                    th: '🏆 ผู้ชนะออสการ์! เขาชนะนักแสดงนำชายยอดเยี่ยม เขาขอบคุณคุณที่ "เข้าใจกระบวนการ" ทีมงานต้องบำบัดจิต',
                    zh: '🏆 奥斯卡奖得主！他获得了最佳男演员奖。他感谢你"理解这个过程"。剧组需要治疗。'
                },
                stats: { competence: 50, ethics: -20, leadership: 10, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🛡️ Protect the Crew: "Hire bodyguards for the crew. Let him be gross, but if he touches anyone, he is arrested."',
                    th: '🛡️ ปกป้องทีมงาน: "จ้างบอดี้การ์ดให้ทีมงาน ปล่อยให้เขาสกปรกไป แต่ถ้าเขาแตะต้องใคร เขาโดนจับ"',
                    zh: '🛡️ 保护剧组："为剧组雇佣保镖。让他恶心去吧，但如果他碰任何人，他就被捕。" '
                },
                consequence: {
                    en: '⚖️ Managed Chaos. A tense set. You barely finish the movie. It is a stressful masterpiece.',
                    th: '⚖️ ความโกลาหลที่จัดการได้ กองถ่ายที่ตึงเครียด คุณแทบจะทำหนังไม่จบ มันเป็นผลงานชิ้นเอกที่เคร่งเครียด',
                    zh: '⚖️ 受控的混乱。紧张的片场。你勉强完成了电影。这是一部压力巨大的杰作。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'film_director_008',
        text: {
            en: '📜 The Script Leak: The entire script leaks on Reddit. Fans hate the ending (the hero dies). Petitions start demanding a change.',
            th: '📜 บทหลุด: บททั้งหมดหลุดใน Reddit แฟนๆ เกลียดตอนจบ (ฮีโร่ตาย) มีการล่ารายชื่อเรียกร้องให้เปลี่ยน',
            zh: '📜 剧本泄露：整个剧本来泄露在 Reddit 上。粉丝讨厌结局（英雄死了）。请愿书开始要求更改。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🦆 Decoy Ending: "Film a fake ending where the hero lives. Leak photos of it. Trick them. Keep the real ending secret."',
                    th: '🦆 ตอนจบหลอก: "ถ่ายตอนจบปลอมที่ฮีโร่รอด ปล่อยรูปหลุดออกมา หลอกพวกเขา เก็บตอนจบจริงเป็นความลับ"',
                    zh: '🦆 诱饵结局："拍一个英雄活下来的假结局。泄露它的照片。欺骗他们。保密真正的结局。"'
                },
                consequence: {
                    en: '😲 Maximum Shock! They think they won, then BAM! Hero dies. The emotional impact is doubled. Marketing genius.',
                    th: '😲 ช็อกสุดขีด! พวกเขาคิดว่าชนะ แล้ว ตูม! ฮีโร่ตาย ผลกระทบทางอารมณ์เพิ่มเป็นสองเท่า อัจฉริยะทางการตลาด',
                    zh: '😲 最大程度的震惊！他们以为自己赢了，然后砰！英雄死了。情感冲击加倍。营销天才。'
                },
                stats: { competence: 50, ethics: 10, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '👂 Listen to Fans: "They buy the tickets. Change it. The hero lives. Happy ending. Guaranteed box office."',
                    th: '👂 ฟังแฟนๆ: "พวกเขาซื้อตั๋ว เปลี่ยนซะ ฮีโร่รอด จบมีความสุข การันตีบ็อกซ์ออฟฟิศ"',
                    zh: '👂 听取粉丝意见："他们买票。改吧。英雄活着。大团圆结局。保证票房。"'
                },
                consequence: {
                    en: '🍿 Safe but Forgettable. It makes money, but no one talks about it a month later. You lost your artistic integrity.',
                    th: '🍿 ปลอดภัยแต่ลืมง่าย ทำเงินได้ แต่ไม่มีใครพูดถึงในอีกหนึ่งเดือนต่อมา คุณสูญเสียความซื่อสัตย์ทางศิลปะ',
                    zh: '🍿 安全但容易被遗忘。它赚钱，但一个月后没人谈论它。你失去了你的艺术正直。'
                },
                stats: { competence: 30, ethics: -10, leadership: -10, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Radio Silence: "Ignore the internet. Finish the film as intended. Do not acknowledge the leak."',
                    th: '🤐 วิทยุเงียบ: "เมินอินเทอร์เน็ต ทำหนังให้เสร็จตามที่ตั้งใจไว้ ไม่รับรู้เรื่องหลุด"',
                    zh: '🤐 无线电静默："无视互联网。按原计划完成电影。不承认泄露。"'
                },
                consequence: {
                    en: '🧘 Stoic Victory. The controversy dies down. The film releases and people judge it on merit. It earns respect.',
                    th: '🧘 ชัยชนะที่นิ่งสงบ ความขัดแย้งจางหายไป หนังฉายและผู้คนตัดสินมันด้วยคุณภาพ ได้รับความเคารพ',
                    zh: '🧘 坚忍的胜利。争议平息。电影上映，人们根据其优点进行评判。它赢得了尊重。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 }
            }
        ]
    },
    {
        id: 'film_director_009',
        text: {
            en: '📺 Stream vs Cinema: Netflix offers $50 million more than the theatrical distributor. But your movie was shot on IMAX and designed for the big screen. The producers want the Netflix cash.',
            th: '📺 สตรีมกับโรงหนัง: Netflix เสนอเงินให้มากกว่าผู้จัดจำหน่ายในโรงภาพยนตร์ 50 ล้านดอลลาร์ แต่หนังของคุณถ่ายด้วย IMAX และออกแบบมาสำหรับจอใหญ่ โปรดิวเซอร์ต้องการเงินจาก Netflix',
            zh: '📺 流媒体与电影院：Netflix 的出价比影院发行商高出 5000 万美元。但你的电影是用 IMAX 拍摄的，专为大银幕设计。制片人想要 Netflix 的现金。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏠 Take the Cash: "More people will see it at home. 50 million is a lot of budget for the next movie. Survival first."',
                    th: '🏠 รับเงิน: "คนจะเห็นมันที่บ้านมากขึ้น 50 ล้านเป็นงบประมาณที่เยอะมากสำหรับหนังเรื่องต่อไป การอยู่รอดต้องมาก่อน"',
                    zh: '🏠 收下现金："更多的人会在家里看到它。5000 万对于下一部电影来说是一大笔预算。生存第一。"'
                },
                consequence: {
                    en: '📱 Phone Viewing... It trends for a week, then vanishes into the algorithm. You weep seeing it watched on an iPhone.',
                    th: '📱 การดูบนมือถือ... มันติดเทรนด์หนึ่งสัปดาห์ แล้วหายไปในอัลกอริทึม คุณร้องไห้เมื่อเห็นมันถูกดูบน iPhone',
                    zh: '📱 手机观看……它流行了一周，然后消失在算法中。看到它在 iPhone 上被观看，你哭了。'
                },
                stats: { competence: 30, ethics: 0, leadership: 10, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '📽️ Fight for Theaters: "I will take a salary cut. The cast will promote it for free. We MUST be in cinemas. Cinema is a church!"',
                    th: '📽️ สู้เพื่อโรงหนัง: "ผมจะยอมลดเงินเดือน นักแสดงจะโปรโมตให้ฟรี เราต้องอยู่ในโรงหนัง! โรงหนังคือโบสถ์!"',
                    zh: '📽️ 为影院而战："我会减薪。演员将免费宣传。我们必须在电影院上映。电影院是教堂！"'
                },
                consequence: {
                    en: '🍿 Box Office Miracle! The passion sells the movie. It becomes an "Event Film." You saved the theatrical experience.',
                    th: '🍿 ปาฏิหาริย์บ็อกซ์ออฟฟิศ! ความหลงใหลขายหนัง มันกลายเป็น "Event Film" คุณรักษาประสบการณ์ในโรงหนังไว้ได้',
                    zh: '🍿 票房奇迹！激情推销了电影。它成为了一部"事件电影"。你拯救了影院体验。'
                },
                stats: { competence: 20, ethics: 50, leadership: 50, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Hybrid Deal: "Limited 2-week IMAX run, then straight to streaming. Creating exclusive hype while getting the payout."',
                    th: '🤝 ดีลลูกผสม: "ฉาย IMAX จำกัด 2 สัปดาห์ แล้วลงสตรีมมิ่งเลย สร้างกระแสความพิเศษในขณะที่ได้เงิน"',
                    zh: '🤝 混合交易："限制 IMAX 上映 2 周，然后直接流媒体。在获得回报的同时创造独家炒作。"'
                },
                consequence: {
                    en: '🧠 Modern Solution! Die-hard fans see it big. Mass audiences see it home. You maximized reach and prestige.',
                    th: '🧠 ทางออกสมัยใหม่! แฟนพันธุ์แท้ได้ดูจอใหญ่ ผู้ชมทั่วไปดูที่บ้าน คุณเพิ่มการเข้าถึงและชื่อเสียงสูงสุด',
                    zh: '🧠 现代解决方案！铁杆粉丝看大屏幕。大众在家看。你最大化了影响力和声望。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'film_director_010',
        text: {
            en: '🐢 The Documentary Subject: You are filming a documentary about a recluse artist. Halfway through, they confess to a serious crime on camera. They didn\'t know you were recording.',
            th: '🐢 ตัวเอกสารคดี: คุณกำลังถ่ายทำสารคดีเกี่ยวกับศิลปินผู้สันโดษ ครึ่งทางพวกเขาสารภาพอาชญากรรมร้ายแรงหน้ากล้อง พวกเขาไม่รู้ว่าคุณกำลังอัดอยู่',
            zh: '🐢 纪录片主角：你正在拍摄一部关于一位隐居艺术家的纪录片。中途，他们在镜头前承认了一项严重的罪行。他们不知道你在录音。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚓 Turn it Over: "Stop the film. Give the footage to the police. Justice is more important than art."',
                    th: '🚓 ส่งมอบ: "หยุดหนัง ส่งฟุตเทจให้ตำรวจ ความยุติธรรมสำคัญกว่าศิลปะ"',
                    zh: '🚓 上交："停止电影。把录像交给警察。正义比艺术更重要。"'
                },
                consequence: {
                    en: '⚖️ Case Solved! The artist goes to jail. The film is never finished. You are a good citizen but a failed director.',
                    th: '⚖️ ปิดคดี! ศิลปินติดคุก หนังไม่เสร็จ คุณเป็นพลเมืองดีแต่เป็นผู้กำกับที่ล้มเหลว',
                    zh: '⚖️ 案件破获！艺术家入狱。电影从未完成。你是个好公民，但也是个失败的导演。'
                },
                stats: { competence: -10, ethics: 50, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🎞️ Use the Footage: "It is the twist of the century. Keep filming. Release it. Let the audience be the jury."',
                    th: '🎞️ ใช้ฟุตเทจ: "มันคือจุดหักเหแห่งศตวรรษ ถ่ายต่อ ปล่อยมัน ให้ผู้ชมเป็นลูกขุน"',
                    zh: '🎞️ 使用录像："这是世纪转折。继续拍摄。发布它。让观众做陪审团。"'
                },
                consequence: {
                    en: '🏆 True Crime Sensation! The world is shocked. The artist arrests you for wiretapping laws. A messy, famous legal battle ensues.',
                    th: '🏆 ปรากฏการณ์อาชญากรรมจริง! โลกตกตะลึง ศิลปินแจ้งจับคุณข้อหาดักฟัง การต่อสู้ทางกฎหมายที่ยุ่งเหยิงและโด่งดังตามมา',
                    zh: '🏆 真实犯罪轰动！世界震惊了。艺术家因窃听法逮捕你。随之而来的是一场混乱、著名的法律诉讼。'
                },
                stats: { competence: 50, ethics: -20, leadership: 10, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🔥 Delete It: "Delete the file. Pretend I heard nothing. Finish the film about their art only. I am not a narc."',
                    th: '🔥 ลบมัน: "ลบไฟล์ แกล้งทำเป็นไม่ได้ยิน ทำหนังเกี่ยวกับศิลปะของพวกเขาให้เสร็จเท่านั้น ผมไม่ใช่สายตำรวจ"',
                    zh: '🔥 删除它："删除文件。假装我什么都没听到。只完成关于他们艺术的电影。我不是缉毒警。"'
                },
                consequence: {
                    en: '🎨 A Beautiful Lie. The film is beautiful but feels incomplete. You carry the secret to your grave. It haunts you.',
                    th: '🎨 คำโกหกที่สวยงาม หนังสวยงามแต่รู้สึกไม่สมบูรณ์ คุณเก็บความลับไว้จนวันตาย มันหลอกหลอนคุณ',
                    zh: '🎨 美丽的谎言。电影很美，但感觉不完整。你把秘密带进了坟墓。它困扰着你。'
                },
                stats: { competence: 20, ethics: -30, leadership: 0, innovation: 0 }
            }
        ]
    },
    {
        id: 'film_director_011',
        text: {
            en: '🎭 The Method Madness: Your lead actor insists on staying "in character" as a violent criminal 24/7. He just punched a catering staff member who "looked at him wrong." The police are at the gate.',
            th: '🎭 ความบ้าคลั่งของเมธอด: นักแสดงนำของคุณยืนยันที่จะ "อยู่ในคาแรคเตอร์" เป็นอาชญากรที่รุนแรงตลอด 24 ชั่วโมง เขาเพิ่งต่อยพนักงานจัดเลี้ยงที่ "มองหน้าเขาผิด" ตำรวจอยู่ที่ประตู',
            zh: '🎭 方法派的疯狂：你的主演坚持24/7"沉浸在角色中"，扮演一个暴力的罪犯。他刚刚打了一名"看他不顺眼"的餐饮工作人员。警察在门口。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👮 Let Him Be Arrested: "Nobody is above the law. Let the cops take him. We reschedule or recast."',
                    th: '👮 ปล่อยให้ถูกจับ: "ไม่มีใครอยู่เหนือกฎหมาย ให้ตำรวจจับเขาไป เราจัดตารางใหม่หรือหานักแสดงใหม่"',
                    zh: '👮 让他被捕："没人能凌驾于法律之上。让警察带走他。我们重新安排或重新选角。"'
                },
                consequence: {
                    en: '⚖️ Justice Served. The production shuts down for 3 weeks. You lose momentum, but the crew respects your integrity. The film becomes a "cursed production."',
                    th: '⚖️ ความยุติธรรมได้รับใช้ การผลิตหยุดชะงัก 3 สัปดาห์ คุณสูญเสียโมเมนตัม แต่ทีมงานเคารพความซื่อสัตย์ของคุณ หนังกลายเป็น "การผลิตต้องคำสาป"',
                    zh: '⚖️ 正义得到伸张。制作停工3周。你失去了动力，但剧组尊重你的正直。这部电影成了"被诅咒的制作"。'
                },
                stats: { competence: 20, ethics: 50, leadership: 40, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Bribe the Victim: "Pay the staff member $50k to drop charges and sign an NDA. We need to finish this movie."',
                    th: '💰 ติดสินบนเหยื่อ: "จ่ายเงินพนักงาน 50,000 ดอลลาร์เพื่อถอนฟ้องและเซ็นสัญญาห้ามเปิดเผยข้อมูล เราต้องทำหนังให้เสร็จ"',
                    zh: '💰 贿赂受害者："付给工作人员5万美元撤销指控并签署保密协议。我们需要完成这部电影。"'
                },
                consequence: {
                    en: '🌑 Dark Secret. Filming continues. The actor gets worse, sensing invincibility. You feel dirty every time you yell "Action".',
                    th: '🌑 ความลับดำมืด การถ่ายทำดำเนินต่อไป นักแสดงแย่ลง รู้สึกว่าตัวเองคงกระพัน คุณรู้สึกสกปรกทุกครั้งที่ตะโกน "แอ็คชั่น"',
                    zh: '🌑 黑暗秘密。拍摄继续。演员变得更糟，感觉自己不可战胜。每次喊"Action"你都觉得肮脏。'
                },
                stats: { competence: 40, ethics: -40, leadership: -20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Mediate & Spin: "Convince the cops it was a \'rehearsal accident\'. Publicly apologize. Force the actor into anger management after the shoot."',
                    th: '🤝 ไกล่เกลี่ยและบิดเบือน: "โน้มน้าวตำรวจว่าเป็น \'อุบัติเหตุการซ้อม\' ขอโทษต่อสาธารณะ บังคับให้นักแสดงเข้าคอร์สจัดการความโกรธหลังถ่ายทำ"',
                    zh: '🤝 调解与公关："让警察相信这是一次\'排练事故\'。公开道歉。拍摄结束后强迫演员进行愤怒管理。"'
                },
                consequence: {
                    en: '🐍 Slippery Slope. You dodge the bullet. The film wraps, but the press rumors never die to completely. You are known as a "fixer".',
                    th: '🐍 ทางลาดลื่น คุณหลบกระสุนพ้น หนังปิดกล้อง แต่ข่าวลือไม่เคยตายสนิท คุณเป็นที่รู้จักในนาม "ช่างซ่อม"',
                    zh: '🐍 滑坡。你躲过了一劫。电影杀青，但媒体谣言从未完全平息。你被称为"搞定者"。'
                },
                stats: { competence: 50, ethics: -10, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'film_director_012',
        text: {
            en: '🦗 The Insect Infestation: Your period drama is filming in a historic mansion. Suddenly, millions of cicadas emerge nearby. They are deafeningly loud, ruining all audio recording.',
            th: '🦗 แมลงระบาด: ละครย้อนยุคของคุณกำลังถ่ายทำในคฤหาสน์ประวัติศาสตร์ ทันใดนั้น จักจั่นล้านตัวก็โผล่ออกมาใกล้ๆ พวกมันส่งเสียงดังจนหูหนวก ทำลายการบันทึกเสียงทั้งหมด',
            zh: '🦗 昆虫侵扰：你的古装剧正在一座历史悠久的豪宅拍摄。突然，数百万只蝉在附近出现。它们震耳欲聋，毁掉了所有录音。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎙️ ADR Everything: "Shoot visually only. We will re-record every single line of dialogue in the studio later. It will take weeks."',
                    th: '🎙️ ADR ทุกอย่าง: "ถ่ายเฉพาะภาพ เราจะอัดเสียงบทพูดทุกประโยคใหม่ในสตูดิโอทีหลัง ต้องใช้เวลาหลายสัปดาห์"',
                    zh: '🎙️ 全程 ADR："只拍视觉画面。我们稍后会在录音室重新录制每一句对白。这将花费数周时间。"'
                },
                consequence: {
                    en: '🗣️ Dubbed Disaster? The acting feels stiff because the voices do not match the on-set emotion perfectly. Critics notice the disconnect.',
                    th: '🗣️ ภัยพิบัติพากย์เสียง? การแสดงรู้สึกแข็งทื่อเพราะเสียงไม่ตรงกับอารมณ์ในกองถ่ายอย่างสมบูรณ์ นักวิจารณ์สังเกตเห็นความไม่ต่อเนื่อง',
                    zh: '🗣️ 配音灾难？表演感觉僵硬，因为声音与现场情感不完全匹配。评论家注意到了脱节。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Change the Script: "Make the noise part of the story. It is a plague! A curse on the family! Adapt the narrative to the chaos."',
                    th: '🔄 เปลี่ยนบท: "ทำให้เสียงรบกวนเป็นส่วนหนึ่งของเรื่องราว มันคือโรคระบาด! คำสาปแช่งครอบครัว! ปรับการเล่าเรื่องให้เข้ากับความโกลาหล"',
                    zh: '🔄 修改剧本："让噪音成为故事的一部分。这是一场瘟疫！对家庭的诅咒！让叙事适应混乱。"'
                },
                consequence: {
                    en: '🦟 Atmospheric Horror. The oppressive sound adds a layer of dread you never planned. It becomes the film\'s signature element.',
                    th: '🦟 ความสยองขวัญในบรรยากาศ เสียงที่กดดันเพิ่มความน่ากลัวที่คุณไม่เคยวางแผน มันกลายเป็นองค์ประกอบซิกเนเจอร์ของหนัง',
                    zh: '🦟 大气恐怖。压抑的声音增加了一层你从未计划过的恐惧。它成为了电影的标志性元素。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '🗓️ Wait it Out: "Pause production for 2 weeks until they die. We burn budget every day we wait."',
                    th: '🗓️ รอให้ผ่านไป: "หยุดการผลิต 2 สัปดาห์จนกว่าพวกมันจะตาย เราเผางบประมาณทุกวันที่เรารอ"',
                    zh: '🗓️ 等待结束："暂停制作2周，直到它们死去。我们等待的每一天都在烧钱。"'
                },
                consequence: {
                    en: '💸 Budget Hole. You run out of money for the final battle scene. The ending is underwhelming.',
                    th: '💸 รูงบประมาณ เงินคุณหมดสำหรับฉากต่อสู้สุดท้าย ตอนจบไม่น่าประทับใจ',
                    zh: '💸 预算黑洞。你在最后的战斗场景中没钱了。结局平淡无奇。'
                },
                stats: { competence: 20, ethics: 20, leadership: -10, innovation: 0 }
            }
        ]
    },
    {
        id: 'film_director_013',
        text: {
            en: '🎥 Lens Flaregate: Your cinematographer is obsessed with artistic lens flares (like JJ Abrams). It looks cool, but you can barely see the actors\' faces in emotional scenes.',
            th: '🎥 เลนส์แฟลร์เกต: ผู้กำกับภาพของคุณหมกมุ่นอยู่กับเลนส์แฟลร์ศิลปะ (เหมือน JJ Abrams) มันดูเท่ แต่คุณแทบจะมองไม่เห็นหน้านักแสดงในฉากอารมณ์',
            zh: '🎥 镜头光晕门：你的摄影指导痴迷于艺术镜头光晕（像 JJ Abrams）。看起来很酷，但在情感场景中几乎看不清演员的脸。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕶️ Let Them Cook: "It is a stylistic choice. The audience will feel the vibe rather than see the tears. Trust the DP."',
                    th: '🕶️ ปล่อยให้ทำ: "มันเป็นทางเลือกด้านสไตล์ ผู้ชมจะรู้สึกถึงบรรยากาศแทนที่จะเห็นน้ำตา เชื่อใจ DP"',
                    zh: '🕶️ 让他们发挥："这是一个风格选择。观众会感受到氛围而不是看到眼泪。相信摄影指导。"'
                },
                consequence: {
                    en: '✨ Style Over Substance. The film looks incredible but feels distant. Cinephiles love it; general audiences are confused.',
                    th: '✨ สไตล์เหนือสาระ หนังดูเหลือเชื่อแต่รู้สึกห่างเหิน คนรักหนังชอบ แต่ผู้ชมทั่วไปงง',
                    zh: '✨ 形式大于内容。电影看起来不可思议，但感觉疏远。影迷喜欢；普通观众感到困惑。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Hard Veto: "Stop it. Relight the scene. I want to see eyes. We represent the human condition, not a laser show."',
                    th: '🛑 ยับยั้งแข็งกร้าว: "หยุด จัดแสงใหม่ ผมอยากเห็นตา เรานำเสนอสภาวะของมนุษย์ ไม่ใช่โชว์เลเซอร์"',
                    zh: '🛑 强行否决："停。重新布光。我想看到眼睛。我们表现的是人类状况，而不是激光秀。"'
                },
                consequence: {
                    en: '👀 Emotional Clarity. The DP sulks, but the performances shine through. The movie connects deeply with people.',
                    th: '👀 ความชัดเจนทางอารมณ์ DP งอน แต่การแสดงเปล่งประกาย หนังเชื่อมโยงกับผู้คนอย่างลึกซึ้ง',
                    zh: '👀 情感清晰。摄影指导生闷气，但表演大放异彩。电影与人们建立了深厚的联系。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🖥️ Fix in Post: "Shoot it safely, add flares digitally later if we want. Don\'t commit on set."',
                    th: '🖥️ แก้ในโพสต์: "ถ่ายแบบปลอดภัย เพิ่มแฟลร์ดิจิทัลทีหลังถ้าเราสต้องการ อย่าผูกมัดในกองถ่าย"',
                    zh: '🖥️ 后期修复："安全拍摄，如果我们想要，稍后添加数字光晕。不要在片场定死。"'
                },
                consequence: {
                    en: '🎞️ The Safe Middle. The digital flares look slightly fake. It pleases no one fully.',
                    th: '🎞️ ทางสายกลางที่ปลอดภัย แฟลร์ดิจิทัลดูปลอมนิดหน่อย ไม่มีใครพอใจอย่างเต็มที่',
                    zh: '🎞️ 安全的中间路线。数字光晕看起来有点假。没人完全满意。'
                },
                stats: { competence: 30, ethics: 30, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'film_director_014',
        text: {
            en: '👶 The Child Star: Your 8-year-old protagonist has lost a tooth overnight. It creates a massive continuity error in the middle of a sequence.',
            th: '👶 ดาราเด็ก: ตัวเอกวัย 8 ขวบของคุณฟันหลุดข้ามคืน มันสร้างข้อผิดพลาดความต่อเนื่องมหาศาลกลางฉาก',
            zh: '👶 童星：你8岁的主角一夜之间掉了一颗牙。这在通过一个序列中间造成了巨大的连续性错误。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🦷 Dental Prosthetic: "Get a dentist NOW. Make a fake tooth. Glu it in. He is not smiling until we wrap."',
                    th: '🦷 ฟันปลอม: "ตามหมอฟันเดี๋ยวนี้ ทำฟันปลอม ติดกาว เขาห้ามยิ้มจนกว่าจะปิดกล้อง"',
                    zh: '🦷 牙科修复："马上找牙医。做一个假牙。粘上去。他在杀青前不许笑。"'
                },
                consequence: {
                    en: '😬 Uncomfortable Kid. The kid talks with a lisp due to the fake tooth. You have to edit around the bad audio.',
                    th: '😬 เด็กอึดอัด เด็กพูดไม่ชัดเพราะฟันปลอม คุณต้องตัดต่อแก้เสียงแย่ๆ',
                    zh: '😬 不舒服的孩子。孩子因为假牙说话口齿不清。你必须剪辑掉糟糕的音频。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🖥️ CGI Tooth: "Fix it in post. It will cost $20k, but it is the perfect solution."',
                    th: '🖥️ ฟัน CGI: "แก้ในโพสต์ มันจะใช้เงิน 20,000 ดอลลาร์ แต่มันเป็นทางออกที่สมบูรณ์แบบ"',
                    zh: '🖥️ CGI 牙齿："后期修复。这将花费2万美元，但却完美的解决方案。"'
                },
                consequence: {
                    en: '💸 Invisible Fix. No one notices. Money well spent, though producers grumble.',
                    th: '💸 การแก้ไขที่มองไม่เห็น ไม่มีใครสังเกต ใช้เงินคุ้มค่า แม้โปรดิวเซอร์จะบ่น',
                    zh: '💸 看不见的修复。没人注意。钱花得值，虽然制片人发牢骚。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤷 Embrace It: "Kids lose teeth. Add a line where he says \'I lost my tooth!\'. Make it a character moment."',
                    th: '🤷 ยอมรับมัน: "เด็กฟันหลุด เพิ่มบทพูดที่เขาบอกว่า \'ผมทำฟันหลุด!\' ทำให้เป็นช่วงเวลาของตัวละคร"',
                    zh: '🤷 接受它："孩子会掉牙。加一句台词，他说\'我掉牙了！\'。让它成为角色时刻。"'
                },
                consequence: {
                    en: '💖 Charming Realism. Audiences love the authenticity. It adds a layer of vulnerability to the hero.',
                    th: '💖 ความสมจริงที่มีเสน่ห์ ผู้ชมรักความแท้จริง มันเพิ่มความเปราะบางให้กับฮีโร่',
                    zh: '💖 迷人的现实主义。观众喜欢这种真实感。它给英雄增加了一层脆弱感。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 50 }
            }
        ]
    },
    {
        id: 'film_director_015',
        text: {
            en: '🎶 Score Dispute: The composer wrote a synthesizer score (electronic). You wanted a full orchestra (classic). He refuses to change it, calling it "his vision."',
            th: '🎶 ข้อพิพาทดนตรีประกอบ: นักแต่งเพลงเขียนดนตรีซินธิไซเซอร์ (อิเล็กทรอนิกส์) คุณต้องการวงออร์เคสตราเต็มวง (คลาสสิก) เขาปฏิเสธที่จะเปลี่ยน โดยเรียกมันว่า "วิสัยทัศน์ของเขา"',
            zh: '🎶 配乐纠纷：作曲家写了一个合成器配乐（电子）。你想要一个完整的管弦乐队（经典）。他拒绝更改，称之为"他的愿景"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎷 Fire Him: "You work for ME. Get out. I will hire a Hans Zimmer clone who listens."',
                    th: '🎷 ไล่เขาออก: "คุณทำงานให้ผม ออกไป ผมจะจ้างโคลนของ Hans Zimmer ที่เชื่อฟัง"',
                    zh: '🎷 解雇他："你为我工作。滚。我会雇一个听话的汉斯·季默克隆体。"'
                },
                consequence: {
                    en: '🎼 Generic Music. The new score is safe and boring. The movie loses its unique identity.',
                    th: '🎼 เพลงทั่วไป เพลงประกอบใหม่ปลอดภัยและน่าเบื่อ หนังสูญเสียเอกลักษณ์',
                    zh: '🎼 通用音乐。新配乐安全且无聊。电影失去了独特的个性。'
                },
                stats: { competence: 30, ethics: 20, leadership: 40, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '🎧 Trust the Artist: "Okay. Maybe I am old fashioned. Let us try the synth score. It might be cool."',
                    th: '🎧 เชื่อใจศิลปิน: "โอเค บางทีผมอาจจะหัวโบราณ มาลองซินธ์กันดู มันอาจจะเจ๋ง"',
                    zh: '🎧 相信艺术家："好吧。也许我过时了。让我们试试合成器配乐。可能会很酷。"'
                },
                consequence: {
                    en: '🎹 Cult Classic Soundtrack! The music becomes iconic (like Blade Runner). You were wrong, and you are glad.',
                    th: '🎹 เพลงประกอบคัลท์คลาสสิก! ดนตรีกลายเป็นไอคอน (เหมือน Blade Runner) คุณผิด และคุณดีใจ',
                    zh: '🎹 邪典经典配乐！音乐成为标志性的（像银翼杀手）。你错了，但你很高兴。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🎻 Hybrid Compromise: "Layer real strings over the synth. We get texture AND edge. Do it together."',
                    th: '🎻 การประนีประนอมลูกผสม: "ซ้อนเสียงเครื่องสายจริงบนซินธ์ เราได้พื้นผิวและขอบ ทำด้วยกัน"',
                    zh: '🎻 混合妥协："在合成器上叠加真实的弦乐。我们既有质感又有锋芒。一起做。"'
                },
                consequence: {
                    en: '🎼 Sonic Masterpiece. The sound is unique and powerful. Collaboration created something new.',
                    th: '🎼 ผลงานชิ้นเอกทางเสียง เสียงมีเอกลักษณ์และทรงพลัง การทำงานร่วมกันสร้างสิ่งใหม่',
                    zh: '🎼 声音杰作。声音独特而有力。合作创造了新的东西。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 }
            }
        ]
    },
    {
        id: 'film_director_016',
        text: {
            en: '🚔 Permit Problems: You are filming a car chase. The city permit suddenly gets revoked 1 hour before the shoot due to a parade you didn\'t know about.',
            th: '🚔 ปัญหาใบอนุญาต: คุณกำลังถ่ายฉากไล่ล่ารถ ใบอนุญาตเมืองถูกเพิกถอนกะทันหัน 1 ชั่วโมงก่อนถ่ายทำเนื่องจากขบวนพาเหรดที่คุณไม่รู้',
            zh: '🚔 许可证问题：你正在拍摄一场飙车戏。由于你不知道的游行，城市许可证在拍摄前1小时突然被吊销。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏴 Guerrilla Filmmaking: "Steal the shot. Run the cars, film it fast, and flee before cops arrive."',
                    th: '🏴 การทำหนังแบบกองโจร: "ขโมยซีน ขับรถ ถ่ายเร็วๆ แล้วหนีก่อนตำรวจมา"',
                    zh: '🏴 游击拍电影："偷拍镜头。开车，快速拍摄，在警察到达之前逃跑。"'
                },
                consequence: {
                    en: '🚔 Arrested! The police impound the cars. You spend the night in jail. The shot is shaky and unusable.',
                    th: '🚔 ถูกจับ! ตำรวจยึดรถ คุณนอนคุกคืนหนึ่ง ช็อตสั่นและใช้ไม่ได้',
                    zh: '🚔 被捕！警察扣押了汽车。你在监狱过夜。镜头摇晃且无法使用。'
                },
                stats: { competence: 20, ethics: -30, leadership: -20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛣️ Relocate: "Move to an abandoned airfield nearby. It won\'t look like downtown, but we can shoot legally."',
                    th: '🛣️ ย้ายสถานที่: "ย้ายไปสนามบินร้างใกล้ๆ มันอาจดูไม่เหมือนในเมือง แต่เราถ่ายได้อย่างถูกกฎหมาย"',
                    zh: '🛣️ 搬迁："搬到附近的废弃机场。这看起来不像市中心，但我们可以合法拍摄。"'
                },
                consequence: {
                    en: '🎬 Safe but Boring. The background is empty concrete. The energy of the chase is lost.',
                    th: '🎬 ปลอดภัยแต่น่าเบื่อ พื้นหลังเป็นคอนกรีตโล่งๆ พลังของการไล่ล่าหายไป',
                    zh: '🎬 安全但无聊。背景是空荡荡的混凝土。追逐的活力消失了。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Pivot to Parade: "Incorporate the parade into the chase! Have the hero get stuck in traffic and run on foot. More tension!"',
                    th: '🔄 เปลี่ยนไปใช้พาเหรด: "รวมพาเหรดเข้ากับการไล่ล่า! ให้ฮีโร่ติดรถติดและวิ่งเท้า ความตึงเครียดมากขึ้น!"',
                    zh: '🔄 转向游行："将游行融入追逐中！让英雄被困在交通中并徒步奔跑。更紧张！"'
                },
                consequence: {
                    en: '🧠 Genius Improv! The production value looks huge with thousands of extras (who are just parade-goers). Best scene in the film.',
                    th: '🧠 การด้นสดอัจฉริยะ! มูลค่าการผลิตดูมหาศาลด้วยตัวประกอบนับพัน (ซึ่งก็คือคนดูพาเหรด) ฉากที่ดีที่สุดในหนัง',
                    zh: '🧠 天才即兴！成千上万的临时演员（只是游行参与者）让制作价值看起来巨大。电影中最好的一幕。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 60 }
            }
        ]
    },
    {
        id: 'film_director_017',
        text: {
            en: '🍔 Product Placement: The sponsor wants the hero to eat a specific brand of burger during a funeral scene. It is ridiculous.',
            th: '🍔 การวางสินค้า: สปอนเซอร์ต้องการให้ฮีโร่กินเบอร์เกอร์ยี่ห้อเฉพาะระหว่างฉากงานศพ มันไร้สาระ',
            zh: '🍔 产品植入：赞助商希望英雄在葬礼场景中吃特定品牌的汉堡。这太荒谬了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Just Do It: "Money is money. Put the burger on the coffin if they want. I don\'t care anymore."',
                    th: '💰 ทำๆ ไปเถอะ: "เงินคือเงิน วางเบอร์เกอร์บนโลงศพเลยถ้าพวกเขาต้องการ ผมไม่สนแล้ว"',
                    zh: '💰 只管做："钱就是钱。如果他们想要，就把汉堡放在棺材上。我不在乎了。"'
                },
                consequence: {
                    en: '🤡 Laughing Stock. The scene becomes a meme for bad product placement. It ruins the emotional weight of the death.',
                    th: '🤡 ตัวตลก ฉากกลายเป็นมีมสำหรับการวางสินค้าที่แย่ มันทำลายน้ำหนักทางอารมณ์ของการตาย',
                    zh: '🤡 笑柄。这一幕成为了糟糕产品植入的模因。它破坏了死亡的情感分量。'
                },
                stats: { competence: 20, ethics: -20, leadership: -10, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Refuse & Lose Funding: "Absolutely not. Get out of my set. We will find money elsewhere."',
                    th: '🚫 ปฏิเสธและเสียเงินทุน: "ไม่มีทาง ออกไปจากกองถ่ายผม เราจะหาเงินที่อื่น"',
                    zh: '🚫 拒绝并失去资金："绝对不行。离开我的片场。我们会从别处找钱。"'
                },
                consequence: {
                    en: '📉 Budget Crunch. You lose $500k. You have to cut scenes later, but the funeral remains dignified.',
                    th: '📉 วิกฤตงบประมาณ คุณเสีย 500k คุณต้องตัดฉากทีหลัง แต่งานศพยังคงสมเกียรติ',
                    zh: '📉 预算紧缩。你损失了50万美元。你以后不得不剪掉场景，但葬礼仍然庄重。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🍔 Contextualize It: "Make it a comfort food moment. The hero is stress-eating alone in the car AFTER the funeral."',
                    th: '🍔 ทำให้เข้าบริบท: "ทำให้เป็นอาหารปลอบใจ ฮีโร่กินแก้เครียดคนเดียวในรถหลังจากงานศพ"',
                    zh: '🍔 语境化："让它成为一种安慰食物时刻。葬礼后英雄一个人在车里暴饮暴食。"'
                },
                consequence: {
                    en: '🤝 Smooth Operator. The sponsor is happy. The scene works character-wise. Compromise achieved.',
                    th: '🤝 ผู้ดำเนินการที่ราบรื่น สปอนเซอร์มีความสุข ฉากทำงานได้ในแง่ตัวละคร การประนีประนอมสำเร็จ',
                    zh: '🤝 圆滑的操作者。赞助商很高兴。这一幕在角色方面行得通。达成了妥协。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'film_director_018',
        text: {
            en: '⏳ The 4-Hour Cut: Your first cut of the movie is 4 hours long. The studio mandates 2 hours max. You feel every scene is essential.',
            th: '⏳ ฉบับ 4 ชั่วโมง: หนังฉบับแรกของคุณยาว 4 ชั่วโมง สตูดิโอบังคับสูงสุด 2 ชั่วโมง คุณรู้สึกว่าทุกฉากสำคัญ',
            zh: '⏳ 4 小时剪辑版：你的初剪版电影长达 4 小时。工作室规定最多 2 小时。你觉得每一幕都是必不可少的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✂️ Ruthless Editing: "Kill your darlings. Cut the subplots. Focus purely on the main hero\'s journey. Make it fast."',
                    th: '✂️ การตัดต่อที่โหดเหี้ยม: "ฆ่าคนที่คุณรัก ตัดซับพล็อต โฟกัสไปที่การเดินทางของฮีโร่หลักเท่านั้น ทำให้เร็ว"',
                    zh: '✂️ 无情的剪辑："忍痛割爱。剪掉支线情节。纯粹专注于主要英雄的旅程。让它快起来。"'
                },
                consequence: {
                    en: '⚡ Box Office Hit! The pacing is electric. General audiences love it. Critics miss the depth, but who cares?',
                    th: '⚡ บ็อกซ์ออฟฟิศฮิต! การดำเนินเรื่องเร็ว ผู้ชมทั่วไปชอบ นักวิจารณ์คิดถึงความลึกซึ้ง แต่ใครสน?',
                    zh: '⚡ 票房大卖！节奏感十足。普通观众喜欢它。评论家怀念深度，但谁在乎呢？'
                },
                stats: { competence: 50, ethics: 30, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Refuse to Cut: "Release it as two movies! Part 1 and Part 2. Harry Potter did it."',
                    th: '🛡️ ปฏิเสธที่จะตัด: "ปล่อยเป็นหนังสองเรื่อง! ภาค 1 และภาค 2 แฮร์รี่ พอตเตอร์ก็ทำ"',
                    zh: '🛡️ 拒绝剪辑："把它作为两部电影发行！第一部和第二部。哈利波特就是这么做的。"'
                },
                consequence: {
                    en: '🎲 Risky Gamble. Part 1 is slow and nothing is resolved. It flops, and Part 2 goes straight to streaming.',
                    th: '🎲 การพนันที่เสี่ยง ภาค 1 ช้าและไม่มีอะไรคลี่คลาย มันล้มเหลว และภาค 2 ลงสตรีมมิ่งเลย',
                    zh: '🎲 冒险的赌博。第一部很慢，什么也没解决。它是失败的，第二部直接流媒体播放。'
                },
                stats: { competence: 30, ethics: 20, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🎞️ Montage Magic: "Turn the slow 30-minute act 2 into a beautiful 5-minute musical montage to save time."',
                    th: '🎞️ เวทมนตร์มอนเทจ: "เปลี่ยนองก์ 2 ที่ช้า 30 นาทีให้เป็นมอนเทจดนตรีสวยงาม 5 นาทีเพื่อประหยัดเวลา"',
                    zh: '🎞️ 蒙太奇魔法："把缓慢的30分钟第二幕变成美丽的5分钟音乐蒙太奇来节省时间。"'
                },
                consequence: {
                    en: '🎨 Elegant Solution. You save the runtime without losing the story beats. Effective storytelling.',
                    th: '🎨 ทางออกที่สง่างาม คุณประหยัดเวลาโดยไม่เสียจังหวะเรื่องราว การเล่าเรื่องที่มีประสิทธิภาพ',
                    zh: '🎨 优雅的解决方案。你节省了运行时间而不丢失故事节拍。有效的讲故事。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'film_director_019',
        text: {
            en: '🧟 Zombie Sequel: You made a serious, Oscar-winning drama. The studio owns your contract and forces you to direct "Zombie High School 5" next.',
            th: '🧟 ภาคต่อซอมบี้: คุณทำละครซีเรียสชนะรางวัลออสการ์ สตูดิโอเป็นเจ้าของสัญญาของคุณและบังคับให้คุณกำกับ "Zombie High School 5" เป็นเรื่องต่อไป',
            zh: '🧟 僵尸续集：你拍了一部严肃的、获得奥斯卡奖的剧情片。工作室拥有你的合同，并强迫你接下来执导"僵尸高中 5"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📞 Phoned In: "Do the bare minimum. Collect the check. Save my energy for my own projects."',
                    th: '📞 ทำส่งๆ: "ทำเท่าที่จำเป็น รับเช็ค เก็บพลังงานไว้สำหรับโปรเจกต์ของตัวเอง"',
                    zh: '📞 敷衍了事："做最基本的事。拿支票。把精力留给我自己的项目。"'
                },
                consequence: {
                    en: '📉 Forgettable Trash. The movie is bad. Your reputation takes a hit as a "one-hit wonder".',
                    th: '📉 ขยะที่น่าลืม หนังแย่ ชื่อเสียงของคุณโดนโจมตีว่าเป็น "ดังเพลงเดียวดับ"',
                    zh: '📉 令人遗忘的垃圾。电影很糟糕。你作为"昙花一现"的名声受到了打击。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🎭 Elevate It: "I will make the best Zombie High School ever. Treat it like Shakespeare with zombies."',
                    th: '🎭 ยกระดับมัน: "ผมจะทำ Zombie High School ที่ดีที่สุด ปฏิบัติกับมันเหมือนเชกสเปียร์กับซอมบี้"',
                    zh: '🎭 提升它："我会制作有史以来最好的僵尸高中。把它像有僵尸的莎士比亚一样对待。"'
                },
                consequence: {
                    en: '⭐ Genre Deconstruction! It is smart, funny, and deep. You prove you can direct anything. Your value skyrockets.',
                    th: '⭐ การรื้อถอนแนว! มันฉลาด ตลก และลึกซึ้ง คุณพิสูจน์ว่าคุณกำกับได้ทุกอย่าง ค่าตัวคุณพุ่งสูงขึ้น',
                    zh: '⭐ 类型解构！它聪明、有趣且深刻。你证明了你可以执导任何东西。你的身价飙升。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🚪 Breach Contract: "I refuse. Suit me. I will go indie."',
                    th: '🚪 ผิดสัญญา: "ผมปฏิเสธ ฟ้องผมเลย ผมจะไปทำอินดี้"',
                    zh: '🚪 违约："我拒绝。起诉我吧。我要去独立制作。"'
                },
                consequence: {
                    en: '⚖️ Legal Hell. You are sued into bankruptcy. You make great indie films, but you are broke for a decade.',
                    th: '⚖️ นรกทางกฎหมาย คุณถูกฟ้องจนล้มละลาย คุณทำหนังอินดี้เยี่ยม แต่ถังแตกเป็นทศวรรษ',
                    zh: '⚖️ 法律地狱。你因被起诉而破产。你拍了很棒的独立电影，但你穷了十年。'
                },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'film_director_020',
        text: {
            en: '👫 Romance Rumors: Tabloids claim you are having an affair with your lead actor. It is false, but it creates hype for the movie.',
            th: '👫 ข่าวลือโรแมนติก: แท็บลอยด์อ้างว่าคุณกำลังมีความสัมพันธ์กับนักแสดงนำของคุณ มันไม่จริง แต่มันสร้างกระแสให้กับหนัง',
            zh: '👫 绯闻：小报声称你与主演有染。这是假的，但它为电影制造了噱头。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Deny Vigorously: "Issue a statement immediately. Shut it down. It is unprofessional."',
                    th: '📢 ปฏิเสธอย่างหนักแน่น: "ออกแถลงการณ์ทันที ปิดมันซะ มันไม่เป็นมืออาชีพ"',
                    zh: '📢 极力否认："立即发表声明。平息它。这不专业。"'
                },
                consequence: {
                    en: '🧊 Hype Dies. People respect the truth, but the free marketing evaporates.',
                    th: '🧊 กระแสตาย คนเคารพความจริง แต่การตลาดฟรีระเหยไป',
                    zh: '🧊 炒作平息。人们尊重真相，但免费营销消失了。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '😉 Lean Into It: "No comment. Let them guess. Smile at premieres. Chemistry sells tickets."',
                    th: '😉 พิงมัน: "ไม่มีความเห็น ให้พวกเขาเดา ยิ้มที่งานเปิดตัว เคมีขายตั๋วได้"',
                    zh: '😉 顺水推舟："无可奉告。让他们猜。在首映式上微笑。化学反应能卖票。"'
                },
                consequence: {
                    en: '🔥 Box Office Fire! Everyone wants to see the "lovers" on screen. Your personal life becomes a circus, though.',
                    th: '🔥 ไฟบ็อกซ์ออฟฟิศ! ทุกคนอยากเห็น "คู่รัก" บนจอ ชีวิตส่วนตัวคุณกลายเป็นละครสัตว์',
                    zh: '🔥 票房大火！每个人都想看银幕上的"恋人"。不过，你的个人生活变成了马戏团。'
                },
                stats: { competence: 30, ethics: 10, leadership: 10, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '👫 Focus on Crew: "Redirect interviews to the hard work of the crew. Bore the paparazzi with technical details."',
                    th: '👫 โฟกัสที่ทีมงาน: "เบี่ยงประเด็นการสัมภาษณ์ไปที่การทำงานหนักของทีมงาน ทำให้ปาปารัสซี่เบื่อด้วยรายละเอียดทางเทคนิค"',
                    zh: '👫 关注剧组："将采访转向剧组的辛勤工作。用技术细节让狗仔队感到无聊。"'
                },
                consequence: {
                    en: '🛡️ Class Act. The rumor fades. You are seen as a serious professional.',
                    th: '🛡️ การกระทำที่มีระดับ ข่าวลือจางหายไป คุณถูกมองว่าเป็นมืออาชีพที่จริงจัง',
                    zh: '🛡️ 一流的表现。谣言消退。你被视为严肃的专业人士。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 10 }
            }
        ]
    },
    {
        id: 'film_director_021',
        text: {
            en: '🔦 The Dark Scene: You shot a scene using only natural candlelight (like Kubrick). The studio says it is too dark for TV screens and wants to brighten it digitally, adding noise.',
            th: '🔦 ฉากมืด: คุณถ่ายฉากโดยใช้แสงเทียนธรรมชาติเท่านั้น (เหมือนคูบริก) สตูดิโอบอกว่ามันมืดเกินไปสำหรับหน้าจอทีวีและต้องการปรับให้สว่างขึ้นแบบดิจิทัล ซึ่งเพิ่มนอยส์',
            zh: '🔦 黑暗场景：你只用自然烛光拍摄了一个场景（像库布里克）。工作室说对于电视屏幕来说太暗了，想要通过数字方式使其变亮，但这会增加噪点。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔆 Brighten It: "Mass audiences need to see. Art doesn\'t matter if people think their TV is broken."',
                    th: '🔆 ทำให้สว่างขึ้น: "ผู้ชมจำนวนมากต้องมองเห็น ศิลปะไม่สำคัญถ้าคนคิดว่าทีวีเสีย"',
                    zh: '🔆以此变亮："大众观众需要看到。如果人们认为他们的电视坏了，艺术就不重要了。"'
                },
                consequence: {
                    en: '📺 Accessible Ugly. It looks grainy and cheap. But no one complains they can\'t see.',
                    th: '📺 เข้าถึงได้แต่น่าเกลียด มันดูหยาบและราคาถูก แต่ไม่มีใครบ่นว่ามองไม่เห็น',
                    zh: '📺 易于观看但丑陋。看起来有颗粒感且廉价。但没人抱怨看不见。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '🌑 Preserve Darkness: "Calibrate it for high-end OLEDs. Tell people to close their curtains. Cinema should challenge them."',
                    th: '🌑 รักษาความมืด: "ปรับเทียบสำหรับ OLED ระดับไฮเอนด์ บอกให้คนปิดผ้าม่าน ภาพยนตร์ควรท้าทายพวกเขา"',
                    zh: '🌑以此保持黑暗："针对高端 OLED 进行校准。告诉人们拉上窗帘。电影应该挑战他们。"'
                },
                consequence: {
                    en: '🤬 Consumer Backlash. "I can\'t see anything!" trends on Twitter. But it looks gorgeous in theaters.',
                    th: '🤬 การต่อต้านของผู้บริโภค "ฉันมองไม่เห็นอะไรเลย!" ติดเทรนด์ทวิตเตอร์ แต่ดูสวยในโรงหนัง',
                    zh: '🤬 消费者强烈抵制。"我什么也看不见！"在 Twitter 上流行。但在电影院看起来很美。'
                },
                stats: { competence: 40, ethics: 40, leadership: 10, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🎨 Contrast Grade: "Keep it dark but boost the highlights on faces. A remaster compromise."',
                    th: '🎨 เกรดคอนทราสต์: "เก็บความมืดไว้แต่เพิ่มไฮไลท์บนใบหน้า การประนีประนอมรีมาสเตอร์"',
                    zh: '🎨 对比起分："保持黑暗，但增强面部的高光。一种重新制作的妥协。"'
                },
                consequence: {
                    en: '✨ Visual Sweet Spot. It retains the mood while remaining visible. Expert technical work.',
                    th: '✨ จุดหวานทางสายตา มันยังคงบรรยากาศไว้ในขณะที่ยังมองเห็น งานเทคนิคระดับผู้เชี่ยวชาญ',
                    zh: '✨ 视觉最佳点。它保留了氛围，同时保持可见。专业的即使工作。'
                },
                stats: { competence: 50, ethics: 30, leadership: 30, innovation: 30 }
            }
        ]
    },
    {
        id: 'film_director_022',
        text: {
            en: '🎞️ Final Cut Privilege: You are offered a massive Marvel movie. Huge paycheck, global fame. But you have 0% creative control. The studio dictates the edit.',
            th: '🎞️ สิทธิ์การตัดต่อสุดท้าย: คุณได้รับข้อเสนอหนัง Marvel ฟอร์มยักษ์ เช็คก้อนโต ชื่อเสียงระดับโลก แต่คุณมีอำนาจควบคุมความคิดสร้างสรรค์ 0% สตูดิโอกำหนดการตัดต่อ',
            zh: '🎞️ 最终剪辑权：你收到了一部大型漫威电影的邀请。巨额支票，全球声誉。但你拥有 0% 的创意控制权。工作室决定剪辑。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤑 Take the Job: "One for them, one for me. I will use the money to fund my art films later."',
                    th: '🤑 รับงาน: "ให้พวกเขาเรื่องหนึ่ง ให้ฉันเรื่องหนึ่ง ฉันจะใช้เงินทุนทำหนังศิลปะของฉันทีหลัง"',
                    zh: '🤑以此接下工作："一部为他们，一部为我。以后我会用这笔钱资助我的艺术电影。"'
                },
                consequence: {
                    en: '🏢 Studio Cog. You make a bland, successful blockbuster. You are rich, but you feel like a hired gun.',
                    th: '🏢 ฟันเฟืองสตูดิโอ คุณทำหนังบล็อกบัสเตอร์ที่จืดชืดและประสบความสำเร็จ คุณรวย แต่รู้สึกเหมือนมือปืนรับจ้าง',
                    zh: '🏢 工作室齿轮。你制作了一部平淡、成功的重磅炸弹。你有钱，但感觉像个雇佣兵。'
                },
                stats: { competence: 40, ethics: 20, leadership: 20, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '🚪 Pass: "I am an auteur. If I cannot cut it, I don\'t shoot it. Freedom is priceless."',
                    th: '🚪 ผ่าน: "ผมเป็นศิลปิน ถ้าผมตัดต่อไม่ได้ ผมไม่ถ่าย อิสรภาพประเมินค่าไม่ได้"',
                    zh: '🚪 Pass："我是导演。如果我不能剪辑，我就不拍。自由是无价的。"'
                },
                consequence: {
                    en: '🦅 Integrity Intact. You struggle for funding on your next project, but it is 100% yours. Critics adore you.',
                    th: '🦅 ความซื่อสัตย์สมบูรณ์ คุณดิ้นรนหาทุนสำหรับโปรเจกต์ต่อไป แต่มันเป็นของคุณ 100% นักวิจารณ์รักคุณ',
                    zh: '🦅 正直完好。你为下一个项目的资金而苦苦挣扎，但在那 100% 是你的。评论家崇拜你。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Negoatite Hybrid: "I want a guaranteed \'Director\'s Cut\' release on Blu-ray. You release the theatrical version your way."',
                    th: '🤝 เจรจาลูกผสม: "ผมต้องการการรับประกันการปล่อย \'Director\'s Cut\' บน Blu-ray คุณปล่อยฉบับโรงในแบบของคุณ"',
                    zh: '🤝 混合谈判："我想要蓝光光盘上有保证的\'导演剪辑版\'。你们按你们的方式发行院线版。"'
                },
                consequence: {
                    en: '🧠 Fan Win. Fans clamor for your cut. It outsells the theatrical version. You become a hero.',
                    th: '🧠 แฟนชนะ แฟนๆ เรียกร้องฉบับของคุณ มันขายดีกว่าฉบับโรง คุณกลายเป็นฮีโร่',
                    zh: '🧠 粉丝胜利。粉丝大声疾呼要你的剪辑版。它的销量超过了院线版。你成为了英雄。'
                },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 20 }
            }
        ]
    },
    {
        id: 'film_director_023',
        text: {
            en: '📉 The Flop: Your passion project is released. It bombs hard at the box office. Reviews are savage. Your career is on the line.',
            th: '📉 ความล้มเหลว: โปรเจกต์ที่คุณรักถูกปล่อยออกมา มันเจ๊งยับที่บ็อกซ์ออฟฟิศ รีวิวโหดร้าย อาชีพของคุณแขวนอยู่บนเส้นด้าย',
            zh: '📉 惨败：你的激情项目发布了。票房惨败。评论很野蛮。你的职业生涯岌岌可危。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Blame Marketing: "They sold it wrong! It is an art film, not an action movie. It is their fault!"',
                    th: '🛡️ โทษการตลาด: "พวกเขาขายผิด! มันเป็นหนังศิลปะ ไม่ใช่หนังแอ็คชั่น ความผิดของพวกเขา!"',
                    zh: '🛡️ 怪罪营销："他们卖错了！这是一部艺术片，不是动作片。是他们的错！"'
                },
                consequence: {
                    en: '👶 Bitter Loser. The industry mocks your lack of accountability. No one wants to work with you.',
                    th: '👶 ผู้แพ้ที่ขมขื่น อุตสาหกรรมเยาะเย้ยการขาดความรับผิดชอบของคุณ ไม่มีใครอยากทำงานกับคุณ',
                    zh: '👶 痛苦的失败者。业内嘲笑你缺乏责任感。没人愿意和你一起工作。'
                },
                stats: { competence: 20, ethics: -10, leadership: -30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧘 Own It: "I took a swing and missed. I stand by the work, but I will learn from the audience feedback."',
                    th: '🧘 ยอมรับมัน: "ผมเหวี่ยงแล้วพลาด ผมยืนหยัดในผลงาน แต่ผมจะเรียนรู้จากผลตอบรับของผู้ชม"',
                    zh: '🧘 承认："我尝试了但失败了。我坚持我的作品，但我会从观众的反馈中吸取教训。"'
                },
                consequence: {
                    en: '📈 Respect Recovery. Failure matures you. Producers see you are grounded. You get a second chance later.',
                    th: '📈 การกู้คืนความเคารพ ความล้มเหลวทำให้คุณเติบโต โปรดิวเซอร์เห็นว่าคุณหนักแน่น คุณได้โอกาสครั้งที่สองในภายหลัง',
                    zh: '📈 尊重恢复。失败让你成熟。制片人看你很脚踏实地。你以后会得到第二次机会。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🎬 Pivot to TV: "Directed a hit TV episode immediately to prove I still have the skills. Bounce back fast."',
                    th: '🎬 เปลี่ยนไปทีวี: "กำกับตอนทีวีฮิตทันทีเพื่อพิสูจน์ว่าผมยังมีทักษะ เด้งกลับเร็ว"',
                    zh: '🎬 转向电视："立即执导一集热门电视剧，证明我仍然有技能。快速反弹。"'
                },
                consequence: {
                    en: '🚀 Working Director. You don\'t mourn. You work. People forget the flop because the new work is good.',
                    th: '🚀 ผู้กำกับทำงาน คุณไม่คร่ำครวญ คุณทำงาน คนลืมความล้มเหลวเพราะงานใหม่ดี',
                    zh: '🚀 工作中的导演。你不悲伤。你工作。人们忘记了失败，因为新作品很好。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 10 }
            }
        ]
    },
    {
        id: 'film_director_024',
        text: {
            en: '🎭 The "Ugly" Actor: The studio refuses to cast your choice for lead because they are "not traditionally attractive" enough for the poster.',
            th: '🎭 นักแสดง "น่าเกลียด": สตูดิโอปฏิเสธที่จะแคสต์ตัวเลือกของคุณสำหรับบทนำเพราะพวกเขา "ไม่น่าดึงดูดตามแบบฉบับ" พอสำหรับโปสเตอร์',
            zh: '🎭 "丑"演员：工作室拒绝让你选择的演员担任主角，因为他们对海报来说不够"传统吸引力"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💄 Makeover: "Fine. We will style them to look like a model. Hair, makeup, lighting. Fix it."',
                    th: '💄 แปลงโฉม: "ก็ได้ เราจะแต่งตัวให้พวกเขาดูเหมือนนางแบบ ผม แต่งหน้า แสง แก้ไขมัน"',
                    zh: '💄 改造："好吧。我们会把他们塑造成模特的造型。发型、化妆、灯光。搞定它。"'
                },
                consequence: {
                    en: '🤥 Plastic Performance. They look good but feel uncomfortable. The rawness is lost.',
                    th: '🤥 การแสดงพลาสติก พวกเขาดูดีแต่รู้สึกอึดอัด ความดิบหายไป',
                    zh: '🤥 塑料表演。即使他们看起来很好，但感觉不舒服。原始感消失了。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '✊ Fight for Realism: "Real people look like this. The character is a struggling mechanic, not a supermodel. It is vital."',
                    th: '✊ สู้เพื่อความสมจริง: "คนจริงๆ หน้าตาแบบนี้ ตัวละครเป็นช่างเครื่องที่ดิ้นรน ไม่ใช่นางแบบซูเปอร์โมเดล มันสำคัญ"',
                    zh: '✊ 为现实主义而战："真正的人长这样。角色是一个挣扎的机械师，而不是超级名模。这至关重要。"'
                },
                consequence: {
                    en: '🏆 Critical Darling. Audiences connect with the humanity. It redefines beauty standards for a moment.',
                    th: '🏆 เป็นที่รักของนักวิจารณ์ ผู้ชมเชื่อมโยงกับความเป็นมนุษย์ มันนิยามมาตรฐานความงามใหม่ชั่วขณะหนึ่ง',
                    zh: '🏆 评论界的宠儿。观众与人性产生共鸣。它暂时重新定义了审美标准。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Recast: "Cast the hot actor. Who cares? They act well enough. Box office matters."',
                    th: '🔄 แคสต์ใหม่: "แคสต์นักแสดงฮอต ใครสน? พวกเขาก็เล่นดีพอ บ็อกซ์ออฟฟิศสำคัญ"',
                    zh: '🔄 重新选角："选那个火辣的演员。谁在乎？他们演得够好了。票房很重要。"'
                },
                consequence: {
                    en: '💰 Generic Hit. It sells tickets but lacks soul. Just another Hollywood movie.',
                    th: '💰 ฮิตทั่วไป ขายตั๋วได้แต่ขาดจิตวิญญาณ ก็แค่หนังฮอลลีวูดอีกเรื่อง',
                    zh: '💰 一般的热门。它卖票但缺乏灵魂。只是另一部好莱坞电影。'
                },
                stats: { competence: 30, ethics: 10, leadership: 10, innovation: -20 }
            }
        ]
    },
    {
        id: 'film_director_025',
        text: {
            en: '⏳ The Reshoot Hell: The studio hates the ending. They demand a reshoot. You are exhausted and have moved on to another project.',
            th: '⏳ นรกของการถ่ายซ่อม: สตูดิโอเกลียดตอนจบ พวกเขาเรียกร้องการถ่ายซ่อม คุณหมดแรงและย้ายไปทำโปรเจกต์อื่นแล้ว',
            zh: '⏳ 重拍地狱：工作室讨厌结局。他们要求重拍。你筋疲力尽，已经转移到另一个项目。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👋 Let 2nd Unit Do It: "Send the Assistant Director. I don\'t care. Just get it done."',
                    th: '👋 ให้หน่วย 2 ทำ: "ส่งผู้ช่วยผู้กำกับไป ผมไม่สน ทำให้เสร็จก็พอ"',
                    zh: '👋 让第二组做："派助理导演去。我不在乎。只要完成就行。" '
                },
                consequence: {
                    en: '🧩 Disjointed Ending. The style changes abruptly in the last 10 minutes. Fans hate it.',
                    th: '🧩 ตอนจบที่ไม่ต่อเนื่อง สไตล์เปลี่ยนกะทันหันใน 10 นาทีสุดท้าย แฟนๆ เกลียดมัน',
                    zh: '🧩 脱节的结局。最后10分钟风格突变。粉丝讨厌它。'
                },
                stats: { competence: 20, ethics: 10, leadership: -20, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🎬 Return and Conquer: "Delay my other project. I need to finish this right. It is my name on the poster."',
                    th: '🎬 กลับมาและพิชิต: "เลื่อนโปรเจกต์อื่นของผม ผมต้องทำให้เรื่องนี้เสร็จอย่างถูกต้อง มันชื่อผมบนโปสเตอร์"',
                    zh: '🎬 回归征服："推迟我的其他项目。我需要正确地完成这个。海报上是我的名字。"'
                },
                consequence: {
                    en: '🌟 Seamless Fix. You find a better ending. The film is saved. You are tired but proud.',
                    th: '🌟 การแก้ไขที่ราบรื่น คุณพบตอนจบที่ดีกว่า หนังรอด คุณเหนื่อยแต่ภูมิใจ',
                    zh: '🌟 无缝修复。你找到了更好的结局。电影得救了。你很累但很自豪。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🚫 Refuse: "The contract says I am done. Release it as is or burn it."',
                    th: '🚫 ปฏิเสธ: "สัญญาระบุว่าผมเสร็จแล้ว ปล่อยมันอย่างที่มันเป็นหรือเผามัน"',
                    zh: '🚫 拒绝："合同说我做完了。按原样发布或者烧了它。"'
                },
                consequence: {
                    en: '🔥 Bridge Burned. The studio hires a hack to finish it badly. You look like a prima donna.',
                    th: '🔥 สะพานถูกเผา สตูดิโอจ้างมือสมัครเล่นมาทำจบแบบแย่ๆ คุณดูเหมือนคนเรื่องมาก',
                    zh: '🔥 过河拆桥。工作室雇了一个庸医把它弄得很糟糕。你看起来像个大牌。'
                },
                stats: { competence: 30, ethics: 30, leadership: -10, innovation: 20 }
            }
        ]
    },
    {
        id: 'film_director_026',
        text: {
            en: '🤖 AI Scripts: The studio hands you a screenplay written entirely by an AI. It is mathematically "perfect" based on audience data, but has no soul.',
            th: '🤖 บท AI: สตูดิโอยื่นบทภาพยนตร์ที่เขียนโดย AI ทั้งหมดให้คุณ มัน "สมบูรณ์แบบ" ทางคณิตศาสตร์ตามข้อมูลผู้ชม แต่ไม่มีจิตวิญญาณ',
            zh: '🤖 AI 剧本：工作室交给你一个完全由 AI 编写的剧本。根据观众数据，它是数学上"完美"的，但没有灵魂。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💾 Direct It As Is: "The algorithm knows best. It will make money. I am just a visual stylist."',
                    th: '💾 กำกับตามนั้น: "อัลกอริทึมรู้ดีที่สุด มันจะทำเงิน ผมเป็นแค่นักสไตล์ภาพ"',
                    zh: '💾 按原样执导："算法最清楚。它会赚钱。我只是一个视觉造型师。"'
                },
                consequence: {
                    en: '📈 Hollow Hit. The movie makes a billion but is forgotten in a week. You feel robotic.',
                    th: '📈 ฮิตแต่กลวง หนังทำเงินพันล้านแต่ลืมในหนึ่งสัปดาห์ คุณรู้สึกเหมือนหุ่นยนต์',
                    zh: '📈 空洞的热门。电影赚了十亿，但一周就被遗忘了。感觉像机器人。'
                },
                stats: { competence: 40, ethics: 20, leadership: 10, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '✍️ Secret Rewrite: "Rewrite the dialogue on set. Breathe life into it. Don\'t tell the execs."',
                    th: '✍️ แอบเขียนใหม่: "เขียนบทพูดใหม่ในกองถ่าย ใส่ชีวิตชีวาเข้าไป อย่าบอกผู้บริหาร"',
                    zh: '✍️ 秘密重写："在片场重写对话。注入生命。别告诉高管。"'
                },
                consequence: {
                    en: '❤️ Human Touch. The movie has heart. The studio is confused why it works better than predicted. You saved it.',
                    th: '❤️ สัมผัสของมนุษย์ หนังมีหัวใจ สตูดิโองงว่าทำไมมันทำงานดีกว่าที่คาดไว้ คุณช่วยมันไว้',
                    zh: '❤️ 人情味。电影有心。工作室很困惑为什么它的效果比预期的要好。你拯救了它。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🔥 Leak the Source: "Tell the press it is AI. Spark a debate about creativity. Maybe get fired."',
                    th: '🔥 เปิดเผยแหล่งที่มา: "บอกสื่อว่าเป็น AI จุดประกายการถกเถียงเกี่ยวกับความคิดสร้างสรรค์ อาจโดนไล่ออก"',
                    zh: '🔥 泄露来源："告诉媒体这是 AI。引发关于创造力的辩论。也许会被解雇。"'
                },
                consequence: {
                    en: '📢 Industry Hero. Writers love you. The movie flops because of the controversy, but you stood for art.',
                    th: '📢 ฮีโร่ของอุตสาหกรรม นักเขียนรักคุณ หนังล้มเหลวเพราะความขัดแย้ง แต่คุณยืนหยัดเพื่อศิลปะ',
                    zh: '📢 行业英雄。作家爱你。电影因争议而失败，但你捍卫了艺术。'
                },
                stats: { competence: 20, ethics: 50, leadership: 50, innovation: 10 }
            }
        ]
    },
    {
        id: 'film_director_027',
        text: {
            en: '💣 The Prop Gun: The armorer hands you a gun for a scene. They say it is "cold" (empty). Do you check it yourself?',
            th: '💣 ปืนอุปกรณ์ประกอบฉาก: ช่างอาวุธยื่นปืนให้คุณสำหรับฉากหนึ่ง พวกเขาบอกว่ามัน "เย็น" (ไม่มีกระสุน) คุณตรวจสอบด้วยตัวเองหรือไม่?',
            zh: '💣 道具枪：军械师递给你一把枪拍戏。他们说是"冷"的（空的）。你自己检查吗？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕵️ Check Personally: "Always check. Open the chamber. Look down the barrel (safety first). Trust no one."',
                    th: '🕵️ ตรวจสอบด้วยตัวเอง: "ตรวจสอบเสมอ เปิดรังเพลิง ดูลำกล้อง (ปลอดภัยไว้ก่อน) ไม่เชื่อใจใคร"',
                    zh: '🕵️ 亲自检查："始终检查。打开膛室。查看枪管（安全第一）。不相信任何人。"'
                },
                consequence: {
                    en: '🛡️ Disaster Averted! You find a blockage. You saved a life. The crew sees you as their protector.',
                    th: '🛡️ หลีกเลี่ยงภัยพิบัติ! คุณพบสิ่งอุดตัน คุณช่วยชีวิตคน ทีมงานมองคุณเป็นผู้ปกป้อง',
                    zh: '🛡️ 避免灾难！你发现了堵塞物。你救了一条命。剧组视你为他们的保护者。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Trust the Pro: "That is their job. I focus on acting. Time is money."',
                    th: '🤝 เชื่อมืออาชีพ: "นั่นคืองานของพวกเขา ผมโฟกัสที่การแสดง เวลาเป็นเงินเป็นทอง"',
                    zh: '🤝 相信专业人士："那是他们的工作。我专注于表演。时间就是金钱。"'
                },
                consequence: {
                    en: '💥 Close Call. It misfires but misses everyone. The set is traumatized. You were negligent.',
                    th: '💥 เกือบไป มันลั่นแต่ไม่โดนใคร กองถ่ายขวัญเสีย คุณประมาท',
                    zh: '💥 有惊无险。它走火了，但没打中任何人。片场受到了创伤。你疏忽了。'
                },
                stats: { competence: 20, ethics: -10, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🎥 Switch to Rubber: "Why use real guns? Use rubber props and add muzzle flash in post. Zero risk."',
                    th: '🎥 เปลี่ยนเป็นยาง: "ทำไมต้องใช้ปืนจริง? ใช้ยางและเพิ่มแสงปากกระบอกปืนในโพสต์ ความเสี่ยงเป็นศูนย์"',
                    zh: '🎥 换成橡胶："为什么要用真枪？使用橡胶道具，并在后期添加枪口闪光。零风险。"'
                },
                consequence: {
                    en: '🧠 Smart Safety. Actors feel safer and act bolder. The CGI costs more, but peace of mind is free.',
                    th: '🧠 ความปลอดภัยที่ชาญฉลาด นักแสดงรู้สึกปลอดภัยและแสดงกล้าหาญขึ้น CGI แพงกว่า แต่ความสบายใจฟรี',
                    zh: '🧠 聪明的安全措施。演员感到更安全，表演更大胆。CGI 成本更高，但安心是无价的。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'film_director_028',
        text: {
            en: '🌋 Location Disaster: The volcano you are filming near starts smoking. Scientists say "50/50 chance of eruption." You have 1 day of shooting left.',
            th: '🌋 ภัยพิบัติสถานที่: ภูเขาไฟที่คุณถ่ายทำใกล้ๆ เริ่มมีควัน นักวิทยาศาสตร์บอกว่า "มีโอกาสปะทุ 50/50" คุณเหลือเวลาถ่ายทำอีก 1 วัน',
            zh: '🌋 外景灾难：你在附近拍摄的火山开始冒烟。科学家说"有 50/50 的喷发几率"。你还剩 1 天的拍摄时间。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏃 Evacuate Now: "Not worth the risk. Go home. We rewrite the ending."',
                    th: '🏃 อพยพเดี๋ยวนี้: "ไม่คุ้มเสี่ยง กลับบ้าน เราเขียนตอนจบใหม่"',
                    zh: '🏃 立即撤离："不值得冒险。回家。我们重写结局。"'
                },
                consequence: {
                    en: '🛡️ Safety First. The volcano erupts the next day. You saved everyone. The movie suffers, but you are alive.',
                    th: '🛡️ ปลอดภัยไว้ก่อน ภูเขาไฟระเบิดในวันรุ่งขึ้น คุณช่วยทุกคน หนังแย่ลง แต่คุณยังมีชีวิตอยู่',
                    zh: '🛡️ 安全第一。第二天火山爆发。你救了所有人。电影受损，但你还活着。'
                },
                stats: { competence: 30, ethics: 50, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🎥 Finish the Shoot: "We stay. If it blows, we get it on film (from a distance). Fortune favors the bold."',
                    th: '🎥 ถ่ายให้จบ: "เราอยู่ ถ้ามันระเบิด เราก็ได้ภาพ (จากระยะไกล) โชคเข้าข้างคนกล้า"',
                    zh: '🎥 完成拍摄："我们要留下。如果它爆发，我们就拍下来（从远处）。运气眷顾勇敢的人。"'
                },
                consequence: {
                    en: '🔥 Iconic Backdrop. It smokes menacingly but does not blow. The shots are legendary. You risked lives for art.',
                    th: '🔥 ฉากหลังที่เป็นสัญลักษณ์ มันมีควันคุกคามแต่ไม่ระเบิด ช็อตในตำนาน คุณเสี่ยงชีวิตเพื่อศิลปะ',
                    zh: '🔥 标志性的背景。它冒着烟，威胁性十足，但没有爆发。镜头是传奇的。你为了艺术冒着生命危险。'
                },
                stats: { competence: 50, ethics: -20, leadership: -10, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🚁 Drone Only: "Send the crew away. Inspect with drones. Only I stay to operate cameras remotely."',
                    th: '🚁 โดรนเท่านั้น: "ส่งทีมงานกลับ สำรวจด้วยโดรน มีแค่ผมอยู่เพื่อคุมกล้องระยะไกล"',
                    zh: '🚁 仅限无人机："送剧组离开。用无人机检查。只有我留下来远程操作相机。"'
                },
                consequence: {
                    en: '🛠️ Tech Solution. You get 80% of the shots safely. It is a reasonable compromise.',
                    th: '🛠️ ทางออกทางเทคนิค คุณได้ภาพ 80% อย่างปลอดภัย เป็นการประนีประนอมที่สมเหตุสมผล',
                    zh: '🛠️ 技术解决方案。你安全地获得了 80% 的镜头。这是一个合理的妥协。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'film_director_029',
        text: {
            en: '👶 Nepo Baby: The producer forces you to cast his untalented daughter in a speaking role.',
            th: '👶 เด็กเส้น: โปรดิวเซอร์บังคับให้คุณแคสต์ลูกสาวที่ไร้พรสวรรค์ของเขาในบทที่มีบทพูด',
            zh: '👶 裙带关系宝贝：制片人强迫你让他没有天赋的女儿出演一个有台词的角色。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✂️ Cut Her Scene: "Shoot it, then cut it in post. Say it was for pacing."',
                    th: '✂️ ตัดฉากเธอ: "ถ่ายไป แล้วตัดทิ้งในโพสต์ บอกว่าเป็นเรื่องของจังหวะ"',
                    zh: '✂️ 剪掉她的戏："拍下来，然后在后期剪掉。就说是为了节奏。"'
                },
                consequence: {
                    en: '😡 Producer Fury. He notices. He cuts your marketing budget in revenge. Petty war ensues.',
                    th: '😡 ความโกรธของโปรดิวเซอร์ เขาสังเกตเห็น เขาตัดงบการตลาดของคุณเพื่อแก้แค้น สงครามจุกจิกตามมา',
                    zh: '😡 制片人暴怒。他注意到了。他削减你的营销预算来报复。琐碎的战争随之而来。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🎭 Coach Her: "Spend extra time rehearsing her. Edit around her bad acting. Make her look passable."',
                    th: '🎭 ฝึกสอนเธอ: "ใช้เวลาซ้อมกับเธอเพิ่ม ตัดต่อหลบการแสดงแย่ๆ ของเธอ ทำให้เธอดูพอไปวัดไปวาได้"',
                    zh: '🎭 指导她："花额外的时间排练她。剪辑掩盖她糟糕的表演。让她看起来过得去。"'
                },
                consequence: {
                    en: '🤝 Miracle Worker. She is okay. The producer loves you. You navigated politics perfectly.',
                    th: '🤝 คนสร้างปาฏิหาริย์ เธอโอเค โปรดิวเซอร์รักคุณ คุณนำทางเรื่องการเมืองได้อย่างสมบูรณ์แบบ',
                    zh: '🤝 奇迹创造者。她还可以。制片人爱你。你完美地驾驭了政治。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤡 Cast Her as Comic Relief: "Change the character to be intentionally awkward. Her bad acting becomes funny."',
                    th: '🤡 ให้เธอเป็นตัวตลก: "เปลี่ยนตัวละครให้ดูเด๋อด๋าโดยตั้งใจ การแสดงแย่ๆ ของเธอกลายเป็นเรื่องตลก"',
                    zh: '🤡让她演喜剧角色："把角色改成故意尴尬的。她糟糕的表演变得好笑了。" '
                },
                consequence: {
                    en: '💡 Accidental Genius. Audiences laugh WITH her (or at her). It works. The movie has a meme.',
                    th: '💡 อัจฉริยะโดยบังเอิญ ผู้ชมหัวเราะกับเธอ (หรือเยาะเธอ) มันเวิร์ค หนังมีมีม',
                    zh: '💡 意外的天才。观众和她一起笑（或嘲笑她）。这行得通。电影有一个模因。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'film_director_030',
        text: {
            en: '⏳ The 10-Year Project: You have been filming a movie for 10 years (like Boyhood) to show real aging. The lead actor wants to quit in year 9.',
            th: '⏳ โปรเจกต์ 10 ปี: คุณถ่ายทำหนังมา 10 ปี (เหมือน Boyhood) เพื่อแสดงการแก่ตัวจริง นักแสดงนำต้องการลาออกในปีที่ 9',
            zh: '⏳ 10 年计划：你拍摄一部电影已经 10 年了（像《少年时代》），为了通过展示真实的衰老。主演想在第 9 年退出。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Pay Raise: "Offer them double the backend points. We are too close to the finish line."',
                    th: '💰 ขึ้นค่าตัว: "เสนอส่วนแบ่งกำไรสองเท่า เราใกล้จะถึงเส้นชัยแล้ว"',
                    zh: '💰 加薪："给他们双倍的后端分成。我们离终点线太近了。"'
                },
                consequence: {
                    en: '🤝 Money Talks. They stay. The film is a masterpiece of time. You share the wealth.',
                    th: '🤝 เงินพูดได้ พวกเขาอยู่ต่อ หนังเป็นผลงานชิ้นเอกแห่งกาลเวลา คุณแบ่งปันความมั่งคั่ง',
                    zh: '🤝 有钱能使鬼推磨。他们留下了。这部电影是时间的杰作。你分享财富。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Recast & Age Makeup: "Recast with a lookalike. Use prosthetics. No one will notice the jump."',
                    th: '🔄 แคสต์ใหม่และแต่งหน้าแก่: "แคสต์คนหน้าเหมือน ใช้เทียม ไม่มีใครสังเกตเห็นการกระโดด"',
                    zh: '🔄 重新选角和老年妆："找个长得像的人重拍。使用假体。没人会注意到跳跃。"'
                },
                consequence: {
                    en: '💔 Magic Broken. The continuity is shattered. The gimmick fails at the last hurdle.',
                    th: '💔 เวทมนตร์แตกสลาย ความต่อเนื่องพังทลาย ลูกเล่นล้มเหลวที่ด่านสุดท้าย',
                    zh: '💔 魔法破碎。连续性被打碎。噱头在最后一道关卡失败了。'
                },
                stats: { competence: 20, ethics: 20, leadership: -10, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '💀 Write the Death: "Kill the character off. The tragedy of a life cut short. Adapt the story."',
                    th: '💀 เขียนบทตาย: "ฆ่าตัวละครซะ โศกนาฏกรรมของชีวิตที่สั้นลง ปรับเรื่องราว"',
                    zh: '💀 写死："杀掉角色。生命缩短的悲剧。改编故事。"'
                },
                consequence: {
                    en: '😭 Heartbreaking Reality. It feels real because it IS real (sort of). Audiences weep.',
                    th: '😭 ความจริงที่น่าใจหาย มันรู้สึกจริงเพราะมันจริง (ประมาณนั้น) ผู้ชมร้องไห้',
                    zh: '😭 令人心碎的现实。感觉很真实，因为它是真实的（某种程度上）。观众哭泣。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'film_director_031',
        text: {
            en: '🗑️ The Lost Dailies: The hard drive with yesterday\'s footage was corrupted. No backup (intern error). It was the most expensive explosion scene.',
            th: '🗑️ Dailies ที่หายไป: ฮาร์ดไดรฟ์ที่มีฟุตเทจเมื่อวานเสียหาย ไม่มีการสำรองข้อมูล (ข้อผิดพลาดของเด็กฝึกงาน) มันเป็นฉากระเบิดที่แพงที่สุด',
            zh: '🗑️ 丢失的样片：昨天拍摄的硬盘损坏了。没有备份（实习生错误）。这是最昂贵的爆炸场景。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💣 Reshoot: "Beg the studio for money. Rebuild the set. Blow it up again."',
                    th: '💣 ถ่ายใหม่: "ขอเงินสตูดิโอ สร้างฉากใหม่ ระเบิดมันอีกครั้ง"',
                    zh: '💣 重拍："求工作室给钱。重建布景。再次炸掉它。"'
                },
                consequence: {
                    en: '💸 Deep Debt. The studio agrees but takes it out of your salary. You are broke but the film is whole.',
                    th: '💸 หนี้ท่วมหัว สตูดิโอตกลงแต่หักจากเงินเดือนคุณ คุณถังแตกแต่หนังสมบูรณ์',
                    zh: '💸 深陷债务。工作室同意了，但从你的薪水里扣。你破产了，但电影是完整的。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '✂️ Cut Around It: "Use the rehearsal footage and reactions. Imply the explosion off-screen with sound."',
                    th: '✂️ ตัดหลบมัน: "ใช้ฟุตเทจซ้อมและปฏิกิริยา บอกเป็นนัยว่าระเบิดนอกจอด้วยเสียง"',
                    zh: '✂️ 剪辑避开："使用排练录像和反应。用声音暗示屏幕外的爆炸。"'
                },
                consequence: {
                    en: '📉 Lackluster Climax. Viewers feel cheated. "Where was the boom?" reviews ask.',
                    th: '📉 ไคลแม็กซ์จืดชืด ผู้ชมรู้สึกถูกโกง รีวิวถาม "เสียงตู้มหายไปไหน?"',
                    zh: '📉 平淡的高潮。观众感到被骗了。评论问"爆炸在哪里？"'
                },
                stats: { competence: 10, ethics: 30, leadership: 10, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🖥️ CGI Reconstruction: "Recreate the explosion digitally. Use the wide angle reference shot we have."',
                    th: '🖥️ สร้างใหม่ด้วย CGI: "สร้างระเบิดใหม่ด้วยดิจิทัล ใช้ช็อตอ้างอิงมุมกว้างที่เรามี"',
                    zh: '🖥️ CGI 重建："用数字方式重建爆炸。使用我们现有的广角参考镜头。"'
                },
                consequence: {
                    en: '🎨 Digital Save. It looks 90% real. Good enough to pass. Technology saves the day.',
                    th: '🎨 การบันทึกดิจิทัล มันดูจริง 90% ดีพอที่จะผ่าน เทคโนโลยีช่วยกู้สถานการณ์',
                    zh: '🎨 数字拯救。看起来 90% 是真的。足以通过。技术拯救了一切。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 40 }
            }
        ]
    },
    {
        id: 'film_director_032',
        text: {
            en: '🎥 Handheld vs Tripod: You want to shoot a formal dinner scene completely handheld to create anxiety. The producers want steady tripod shots for elegance.',
            th: '🎥 มือถือกับขาตั้งกล้อง: คุณต้องการถ่ายฉากอาหารค่ำที่เป็นทางการด้วยมือถือทั้งหมดเพื่อสร้างความวิตกกังวล โปรดิวเซอร์ต้องการขตั้งกล้องนิ่งๆ เพื่อความสง่างาม',
            zh: '🎥 手持与三脚架：你想完全手持拍摄正式晚宴场景以制造焦虑。制片人想要稳定的三脚架镜头以显优雅。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👋 Handheld Chaos: "Trust me. The anxiety is the point. Shake the camera!"',
                    th: '👋 ความโกลาหลมือถือ: "เชื่อผม ความวิตกกังวลคือประเด็น เขย่ากล้อง!"',
                    zh: '👋 手持混乱："相信我。焦虑才是重点。摇晃相机！"'
                },
                consequence: {
                    en: '🤢 Motion Sickness. Audiences feel nauseous. Some walk out. It is memorable but divisive.',
                    th: '🤢 อาการเมารถ ผู้ชมรู้สึกคลื่นไส้ บางคนเดินออก มันน่าจดจำแต่แบ่งแยก',
                    zh: '🤢 晕动病。观众感到恶心。有些人走开了。这令人难忘，但引起了分歧。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔭 Steady Classic: "Fine. Make it look like a postcard. We focus on the dialogue."',
                    th: '🔭 คลาสสิกนิ่งๆ: "ก็ได้ ทำให้เหมือนโปสการ์ด เราโฟกัสที่บทพูด"',
                    zh: '🔭 稳定的经典："好吧。让它看起来像张明信片。我们专注于对话。"'
                },
                consequence: {
                    en: '💤 Boring Beauty. It is pretty but lacks tension. Critics call it "stiff".',
                    th: '💤 ความสวยงามที่น่าเบื่อ มันสวยแต่ขาดความตึงเครียด นักวิจารณ์เรียกว่า "แข็งทื่อ"',
                    zh: '💤 无聊的美丽。它很漂亮，但缺乏张力。评论家称之为"僵硬"。'
                },
                stats: { competence: 40, ethics: 20, leadership: 10, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Steadicam Flow: "Use a Steadicam. Floating, eerie movement. Unsettling but smooth."',
                    th: '🔄 สเตดิคัมไหลลื่น: "ใช้สเตดิคัม การเคลื่อนไหวที่ลอยและน่าขนลุก ไม่มั่นคงแต่ราบรื่น"',
                    zh: '🔄 斯坦尼康流："使用斯坦尼康。漂浮、怪诞的动作。令人不安但流畅。"'
                },
                consequence: {
                    en: '🌟 Visual Language. The floating camera creates a dreamlike nightmare. Perfect execution.',
                    th: '🌟 ภาษาสายตา กล้องที่ลอยอยู่สร้างฝันร้ายที่เหมือนฝัน การดำเนินการที่สมบูรณ์แบบ',
                    zh: '🌟 视觉语言。漂浮的相机营造出梦幻般的噩梦。完美的执行。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'film_director_033',
        text: {
            en: '🍿 Fan Service: A popular YouTuber offers to cameo for free. They have 20 million subscribers. It breaks immersion, but guarantees views.',
            th: '🍿 แฟนเซอร์วิส: ยูทูบเบอร์ชื่อดังเสนอจะมาเป็นรับเชิญฟรี พวกเขามีผู้ติดตาม 20 ล้านคน มันทำลายความอิน แต่การันตียอดวิว',
            zh: '🍿 粉丝福利：一位受欢迎的 YouTuber 提议免费客串。他们有 2000 万订阅者。这破坏了沉浸感，但保证了观看次数。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👋 Say No: "My movie is not a vlog. Look for clout elsewhere."',
                    th: '👋 ปฏิเสธ: "หนังของผมไม่ใช่วิดีโอบล็อก ไปหาแสงที่อื่น"',
                    zh: '👋 拒绝："我的电影不是 Vlog。去别处找名气吧。"'
                },
                consequence: {
                    en: '🛡️ Artistic Integrity. You miss the teen demographic, but the film ages better without dated cameos.',
                    th: '🛡️ ความซื่อสัตย์ทางศิลปะ คุณพลาดกลุ่มวัยรุ่น แต่หนังดูดีขึ้นเมื่อเวลาผ่านไปโดยไม่มีดารารับเชิญที่ล้าสมัย',
                    zh: '🛡️ 艺术完整性。你错过了青少年群体，但如果没有过时的客串，电影会更经得起时间的考验。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤳 Cameo Time: "Put them in. Give them a funny line. Let us get those clicks."',
                    th: '🤳 เวลาดารารับเชิญ: "ใส่พวกเขาไป ให้บทตลกๆ มาเอายอดคลิกพวกนั้นกัน"',
                    zh: '🤳 客串时间："让他们加入。给他们一句有趣的台词。让我们获得那些点击量。"'
                },
                consequence: {
                    en: '📈 Viral Marketing. The clip travels on TikTok. The movie makes money but feels cheap.',
                    th: '📈 การตลาดไวรัล คลิปแพร่กระจายบน TikTok หนังทำเงินแต่รู้สึกราคาถูก',
                    zh: '📈 病毒式营销。该片段在 TikTok 上传播。电影赚钱了，但感觉很廉价。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧟 Kill Them: "Cast them as the first victim. Fans love seeing them die. Haters love it too."',
                    th: '🧟 ฆ่าพวกเขา: "ให้พวกเขาเป็นเหยื่อรายแรก แฟนๆ ชอบเห็นพวกเขาตาย คนเกลียดก็ชอบ"',
                    zh: '🧟 杀了他们："让他们扮演第一个受害者。粉丝喜欢看他们死。讨厌他们的人也喜欢。"'
                },
                consequence: {
                    en: '🧠 Meta Humor. It works perfectly. A nod to culture without respecting it too much.',
                    th: '🧠 อารมณ์ขันแบบเมตา มันเวิร์คมาก การพยักหน้าให้วัฒนธรรมโดยไม่ต้องเคารพมากเกินไป',
                    zh: '🧠 元幽默。效果完美。向文化点头致意，但不过分尊重。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 }
            }
        ]
    },
    {
        id: 'film_director_034',
        text: {
            en: '⏳ The Sunrise Shot: You have 10 minutes to capture the perfect sunrise. The actor is in the bathroom.',
            th: '⏳ ช็อตพระอาทิตย์ขึ้น: คุณมีเวลา 10 นาทีในการจับภาพพระอาทิตย์ขึ้นที่สมบูรณ์แบบ นักแสดงอยู่ในห้องน้ำ',
            zh: '⏳ 日出镜头：你有 10 分钟的时间来捕捉完美的日出。演员在厕所。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚪 Kick the Door: "Get out here NOW! Pants up! Run!"',
                    th: '🚪 ถีบประตู: "ออกมาเดี๋ยวนี้! ดึงกางเกงขึ้น! วิ่ง!"',
                    zh: '🚪 踢门："马上出来！提裤子！跑！"'
                },
                consequence: {
                    en: '🌅 Shot Got. The actor hates you, but the light is magical. Worth it?',
                    th: '🌅 ได้ช็อต นักแสดงเกลียดคุณ แต่แสงมหัศจรรย์ คุ้มไหม?',
                    zh: '🌅 拍到了。演员恨你，但光线很神奇。值得吗？'
                },
                stats: { competence: 50, ethics: -20, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🌄 Shoot Landscape: "Forget the actor. Shoot the landscape as an establishing shot. Improvise."',
                    th: '🌄 ถ่ายทิวทัศน์: "ลืมนักแสดงไปซะ ถ่ายทิวทัศน์เพื่อเป็นช็อตเปิดเรื่อง ด้นสด"',
                    zh: '🌄 拍摄风景："忘了演员吧。拍摄风景作为一个确立镜头。即兴发挥。"'
                },
                consequence: {
                    en: '🎨 Beautiful B-Roll. You miss the scene, but get great filler footage. Adaptable.',
                    th: '🎨 B-Roll ที่สวยงาม คุณพลาดฉากนั้น แต่ได้ฟุตเทจเติมเต็มที่ยอดเยี่ยม ปรับตัวได้',
                    zh: '🎨 美丽的 B 卷。你错过了那一幕，但得到了很棒的填充镜头。适应性强。'
                },
                stats: { competence: 30, ethics: 40, leadership: 30, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🛌 Fake It Later: "Go have breakfast. We will shoot at sunset and reverse the footage."',
                    th: '🛌 ปลอมทีหลัง: "ไปกินข้าวเช้า เราจะถ่ายตอนพระอาทิตย์ตกแล้วย้อนกลับฟุตเทจ"',
                    zh: '🛌 稍后伪造："去吃早饭吧。我们会在日落时拍摄并倒放录像。"'
                },
                consequence: {
                    en: '🧠 Clever Trick. It looks 99% identical. No stress. Work smarter, not harder.',
                    th: '🧠 เคล็ดลับที่ชาญฉลาด มันดูเหมือน 99% ไม่เครียด ฉลาดกว่า ไม่ใช่หนักกว่า',
                    zh: '🧠 聪明的把戏。看起来 99% 是一样的。没有压力。工作要聪明，而不是辛苦。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'film_director_035',
        text: {
            en: '📜 Historical Accuracy: Historians point out that the costumes in your billion-dollar epic are from the wrong century. Changing them costs millions.',
            th: '📜 ความถูกต้องทางประวัติศาสตร์: นักประวัติศาสตร์ชี้ว่าเครื่องแต่งกายในมหากาพย์พันล้านของคุณมาจากผิดศตวรรษ การเปลี่ยนต้องใช้เงินหลายล้าน',
            zh: '📜 历史准确性：历史学家指出，你那部十亿美元史诗中的服装来自错误的世纪。更换它们需要数百万美元。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤷 Ignore Facts: "It is fantasy. It looks cool. Nobody knows history anyway."',
                    th: '🤷 เมินข้อเท็จจริง: "มันคือแฟนตาซี มันดูเท่ ไม่มีใครรูประวัติศาสตร์หรอก"',
                    zh: '🤷 无视事实："这是幻想。看起来很酷。反正没人懂历史。"'
                },
                consequence: {
                    en: '🍿 Audience Approved. Scholars are mad, but the public loves the style. Visuals win.',
                    th: '🍿 ผู้ชมยอมรับ นักวิชาการโกรธ แต่ประชาชนชอบสไตล์ ภาพชนะ',
                    zh: '🍿 观众认可。学者们很生气，但公众喜欢这种风格。视觉效果获胜。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🧵 Fix It: "Accuracy is immersion. Delay the shoot. Remake the costumes. Be perfect."',
                    th: '🧵 แก้มัน: "ความถูกต้องคือความอิน เลื่อนการถ่ายทำ ทำชุดใหม่ ทำให้สมบูรณ์แบบ"',
                    zh: '🧵 修复它："准确性就是沉浸感。推迟拍摄。重制服装。做到完美。"'
                },
                consequence: {
                    en: '💸 Budget Blowout. The film looks authentic, but you are over budget. Was it worth it for the buttons?',
                    th: '💸 งบประมาณบานปลาย หนังดูสมจริง แต่คุณใช้งบเกิน คุ้มไหมกับกระดุม?',
                    zh: '💸 预算井喷。电影看起来很真实，但你超支了。为了扣子值得吗？'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ Add Dialogue: "Add a line explaining why they dress weird. \'We are a forward-thinking cult\'. Retcon it."',
                    th: '🗣️ เพิ่มบทพูด: "เพิ่มประโยคอธิบายว่าทำไมพวกเขาแต่งตัวแปลกๆ \'เราเป็นลัทธิที่คิดไปข้างหน้า\' แก้บท"',
                    zh: '🗣️ 添加对话："加一句台词解释他们为什么穿得奇怪。\'我们是一个前瞻性的邪教\'。重新设定。"'
                },
                consequence: {
                    en: '🧠 Narrative Bandaid. It is silly, but it stops the complaints. A writer\'s trick.',
                    th: '🧠 พลาสเตอร์ปิดแผลทางการเล่าเรื่อง มันงี่เง่า แต่หยุดคำบ่นได้ ทริคของนักเขียน',
                    zh: '🧠 叙事创可贴。这很傻，但阻止了抱怨。作家的把戏。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'film_director_036',
        text: {
            en: '🐈 Animal Actor: The dog implied to be the hero\'s best friend just isn\'t bonding with the actor. They growl at each other.',
            th: '🐈 นักแสดงสัตว์: สุนัขที่ถูกบอกเป็นนัยว่าเป็นเพื่อนที่ดีที่สุดของฮีโร่ไม่ผูกพันกับนักแสดง พวกเขาคำรามใส่กัน',
            zh: '🐈 动物演员：这只被暗示为英雄最好朋友的狗就是不和演员亲近。他们互相咆哮。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🍖 Bacon Pocket: "Sew bacon into the actor\'s costume. The dog will love him. Simple biology."',
                    th: '🍖 กระเป๋าเบคอน: "เย็บเบคอนเข้ากับชุดของนักแสดง หมาจะรักเขา ชีววิทยาง่ายๆ"',
                    zh: '🍖 培根口袋："把培根缝在演员的戏服里。狗会爱他的。简单的生物学。"'
                },
                consequence: {
                    en: '🥓 Tail Wagging Success. The chemistry looks real. The actor smells like ham, but it works.',
                    th: '🥓 ความสำเร็จหางกระดิก เคมีดูจริง นักแสดงตัวเหม็นแฮม แต่มันเวิร์ค',
                    zh: '🥓 摇尾巴成功。化学反应看起来很真实。演员闻起来像火腿，但很有效。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🐕 Swap Dog: "Get a new dog. One that is trained better. Who cares about continuity of a spot?"',
                    th: '🐕 เปลี่ยนหมา: "เอาหมาตัวใหม่ ตัวที่ฝึกมาดีกว่า ใครสนเรื่องความต่อเนื่องของจุดด่าง?"',
                    zh: '🐕 换狗："找一只新狗。训练得更好的。谁在乎斑点的连续性？"'
                },
                consequence: {
                    en: '🧐 Fan Detectives. Reddit notices the dog changed breed slightly. "Plot hole!" they scream.',
                    th: '🧐 นักสืบแฟนคลับ Reddit สังเกตเห็นว่าหมาเปลี่ยนสายพันธุ์เล็กน้อย "รูโหว่ของพล็อต!" พวกเขากรีดร้อง',
                    zh: '🧐 粉丝侦探。Reddit 注意到狗的品种略有变化。"情节漏洞！"他们尖叫。'
                },
                stats: { competence: 20, ethics: 20, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🖥️ CGI Dog Head: "Shoot the dog separately. Composite them together. Expensive but safe."',
                    th: '🖥️ หัวหมา CGI: "ถ่ายหมาแยกกัน รวมภาพเข้าด้วยกัน แพงแต่ปลอดภัย"',
                    zh: '🖥️ CGI 狗头："分开拍摄狗。把它们合成在一起。昂贵但安全。"'
                },
                consequence: {
                    en: '💸 Overkill. You spend $100k on dog compositing. The studio thinks you are insane.',
                    th: '💸 ทำเกินไป คุณเสีย 100k กับการรวมภาพหมา สตูดิโอคิดว่าคุณบ้า',
                    zh: '💸 大材小用。你在狗的合成上花了 10 万美元。工作室认为你疯了。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 20 }
            }
        ]
    },
    {
        id: 'film_director_037',
        text: {
            en: '🌧️ Rain Machine: You need rain for a scene. The local water restrictions prohibit using town water. The truck is empty.',
            th: '🌧️ เครื่องทำฝน: คุณต้องการฝนสำหรับฉากหนึ่ง ข้อจำกัดการใช้น้ำในท้องถิ่นห้ามใช้น้ำประปา รถบรรทุกว่างเปล่า',
            zh: '🌧️以此雨机：你需要雨景。当地的限水令禁止使用城镇用水。卡车空了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🥛 Buy Milk?: "Buy 5,000 gallons of expired milk/juice/anything liquid. Dye it clear. Make it rain."',
                    th: '🥛 ซื้อนม?: "ซื้อนม/น้ำผลไม้/ของเหลวอะไรก็ได้ที่หมดอายุ 5,000 แกลลอน ย้อมสีใส ทำให้ฝนตก"',
                    zh: '🥛 买牛奶？："买 5000 加仑过期的牛奶/果汁/任何液体。染成透明。让它下雨。"'
                },
                consequence: {
                    en: '🤢 Sticky Set. The set smells horrific for weeks. Flies everywhere. But it looks like rain.',
                    th: '🤢 กองถ่ายเหนียวหนึบ กลิ่นสยองไปหลายสัปดาห์ แมลงวันเต็มไปหมด แต่ดูเหมือนฝน',
                    zh: '🤢 粘稠的片场。片场臭了好几个星期。到处都是苍蝇。但看起来像雨。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '💧 Illegal Tap: "Open a hydrant. Risks a fine. We need the shot."',
                    th: '💧 ก๊อกผิดกฎหมาย: "เปิดหัวดับเพลิง เสี่ยงโดนปรับ เราต้องการช็อตนี้"',
                    zh: '💧 非法取水："打开消防栓。冒着罚款的风险。我们需要这个镜头。"'
                },
                consequence: {
                    en: '👮 Public PR Nightmare. You are fined and shamed for wasting water during a drought.',
                    th: '👮 ฝันร้าย PR ต่อสาธารณะ คุณถูกปรับและประณามที่ใช้น้ำสิ้นเปลืองระหว่างภัยแล้ง',
                    zh: '👮 公共公关噩梦。你因在干旱期间浪费水而被罚款和羞辱。'
                },
                stats: { competence: 20, ethics: -40, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Digital Rain: "Shoot dry. Add rain overlays in Nuke. It is standard practice now."',
                    th: '💻 ฝนดิจิทัล: "ถ่ายแห้ง เพิ่มเลเยอร์ฝนใน Nuke มันเป็นวิธีปฏิบัติมาตรฐานตอนนี้"',
                    zh: '💻 数字雨："干拍。在 Nuke 中添加雨水覆盖。现在这是标准做法。"'
                },
                consequence: {
                    en: '🖌️ Dry Actors. The actors aren\'t wet, so it looks unconvincing unless you spray them manually. Acceptable.',
                    th: '🖌️ นักแสดงแห้ง นักแสดงไม่เปียก ดังนั้นมันดูไม่น่าเชื่อถือเว้นแต่คุณจะฉีดน้ำใส่พวกเขาด้วยมือ ยอมรับได้',
                    zh: '🖌️ 干演员。演员没湿，所以看起来不令人信服，除非你手动喷他们。可以接受。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'film_director_038',
        text: {
            en: '🕴️ Spy on Set: Photos of your secret villain design are leaking. You suspect a crew member is selling them.',
            th: '🕴️ สายลับในกองถ่าย: รูปภาพการออกแบบตัวร้ายลับของคุณหลุดออกไป คุณสงสัยว่าทีมงานกำลังขายมัน',
            zh: '🕴️ 片场间谍：你的秘密反派设计的照片泄露了。你怀疑有剧组成员在出卖它们。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕵️ Sting Operation: "Distribute different fake designs to different departments. See which one leaks."',
                    th: '🕵️ ปฏิบัติการล่อซื้อ: "แจกจ่ายการออกแบบปลอมที่แตกต่างกันไปยังแผนกต่างๆ ดูว่าอันไหนหลุด"',
                    zh: '🕵️ 诱捕行动："向不同部门分发不同的假设计。看看哪个泄露了。"'
                },
                consequence: {
                    en: '🧠 Mole Caught! You find the leaker (sound guy). You fire them publicly. Security restored.',
                    th: '🧠 จับหนอนบ่อนไส้ได้! คุณเจอคนปล่อย (คนทำเสียง) คุณไล่เขาออกต่อธารณะ ความปลอดภัยกลับมา',
                    zh: '🧠 抓到内鬼！你找到了泄密者（音效师）。你公开解雇了他们。安全恢复。'
                },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '📵 Ban Phones: "Confiscate all phones at the door. TSA style security. Treat them like criminals."',
                    th: '📵 แบนโทรศัพท์: "ยึดโทรศัพท์ทั้งหมดที่ประตู ความปลอดภัยสไตล์ TSA ปฏิบัติกับพวกเขาเหมือนอาชญากร"',
                    zh: '📵 禁止手机："在门口没收所有手机。TSA 风格的安检。像对待罪犯一样对待他们。"'
                },
                consequence: {
                    en: '😡 Mutiny. The crew hates you. Morale hits rock bottom. But leaks stop.',
                    th: '😡 การกบฏ ทีมงานเกลียดคุณ ขวัญกำลังใจต่ำสุดขีด แต่การหลุดหยุดลง',
                    zh: '😡 哗变。剧组恨你。士气跌入谷底。但泄露停止了。'
                },
                stats: { competence: 30, ethics: -20, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤷 Ignore Leaks: "Free marketing. Let them speculate. It builds hype."',
                    th: '🤷 เมินการหลุด: "การตลาดฟรี ให้พวกเขาเดากันไป มันสร้างกระแส"',
                    zh: '🤷 无视泄露："免费营销。让他们猜测。这建立了炒作。"'
                },
                consequence: {
                    en: '🧘 Zen Master. You save energy. The film releases fine. Leaks didn\'t matter.',
                    th: '🧘 ปรมาจารย์เซน คุณประหยัดพลังงาน หนังฉายได้ดี การหลุดไม่มีผล',
                    zh: '🧘 禅师。你节省了精力。电影上映得很好。泄露并不重要。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'film_director_039',
        text: {
            en: '🍿 The Test Screening: The test audience hates the sad ending. They rate it "Depressing". The studio panics.',
            th: '🍿 การฉายทดสอบ: ผู้ชมทดสอบเกลียดตอนจบที่น่าเศร้า พวกเขาให้คะแนน "น่าหดหู่" สตูดิโอตื่นตระหนก',
            zh: '🍿 试映：试映观众讨厌悲伤的结局。他们评价为"令人沮丧"。工作室惊慌失措。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💃 Happy Ending: "Shoot a wedding scene. Everyone smiles. Give them what they want."',
                    th: '💃 ตอนจบที่มีความสุข: "ถ่ายฉากแต่งงาน ทุกคนยิ้ม ให้สิ่งที่พวกเขาต้องการ"',
                    zh: '💃 大团圆结局："拍一场婚礼戏。每个人都在笑。给他们想要的。"'
                },
                consequence: {
                    en: '📈 Score Up. Audience scores go up to 90%. Critics call it "forced". You survive.',
                    th: '📈 คะแนนขึ้น คะแนนผู้ชมขึ้นไปถึง 90% นักวิจารณ์เรียกว่า "บังคับ" คุณรอด',
                    zh: '📈 分数上升。观众评分上升到 90%。评论家称之为"强迫"。你活下来了。'
                },
                stats: { competence: 40, ethics: -10, leadership: -10, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Keep It Sad: "Life is depressing. This is art, not a lollipop. Release it."',
                    th: '🛡️ เก็บความเศร้าไว้: "ชีวิตมันน่าหดหู่ นี่คือศิลปะ ไม่ใช่อมยิ้ม ปล่อยมัน"',
                    zh: '🛡️ 保持悲伤："生活是令人沮丧的。这是艺术，不是棒棒糖。发布它。"'
                },
                consequence: {
                    en: '🏆 Masterpiece. It bombs initially but becomes a classic tearjerker years later.',
                    th: '🏆 ผลงานชิ้นเอก ตอนแรกเจ๊งแต่กลายเป็นหนังเรียกน้ำตาคลาสสิกหลายปีต่อมา',
                    zh: '🏆 杰作。最初惨败，但多年后成为经典的催泪片。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🎤 Voiceover Hope: "Keep the visual sad, but add a hopeful voiceover monologue about \'tomorrow\'. Ambiguity."',
                    th: '🎤 เสียงบรรยายแห่งความหวัง: "เก็บภาพเศร้าไว้ แต่เพิ่มเสียงบรรยายที่มีความหวังเกี่ยวกับ \'พรุ่งนี้\' ความคลุมเครือ"',
                    zh: '🎤 画外音希望："保持视觉悲伤，但添加关于\'明天\'的充满希望的画外音独白。模棱两可。"'
                },
                consequence: {
                    en: '🤝 Safe Middle. It softens the blow. Audiences leave feeling "bittersweet" rather than "angry".',
                    th: '🤝 ทางสายกลางที่ปลอดภัย มันบรรเทาความรู้สึก ผู้ชมจากไปพร้อมความรู้สึก "หวานอมขมกลืน" แทนที่จะ "โกรธ"',
                    zh: '🤝 安全的中间路线。它软化了打击。观众离开时感到"苦乐参半"而不是"愤怒"。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 30 }
            }
        ]
    },
    {
        id: 'film_director_040',
        text: {
            en: '🏆 The Oscar Campaign: The studio wants you to "play the game" to win Best Director. This means kissing babies, shaking hands, and lying about how much you love the Academy.',
            th: '🏆 แคมเปญออสการ์: สตูดิโอต้องการให้คุณ "เล่นเกม" เพื่อชนะผู้กำกับยอดเยี่ยม นี่หมายถึงการจูบเด็ก จับมือ และโกหกว่าคุณรักอคาเดมีแค่ไหน',
            zh: '🏆 奥斯卡竞选：工作室希望你"玩游戏"以赢得最佳导演奖。这意味着亲吻婴儿，握手，并谎称你有多爱学院。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Schmooze Hard: "Shake every hand. Attend every party. Smile until my face hurts. I want that statue."',
                    th: '🤝 ประจบประแจงหนัก: "จับมือทุกคน ไปทุกปาร์ตี้ ยิ้มจนหน้าเจ็บ ผมต้องการรูปปั้นนั้น"',
                    zh: '🤝 努力交际："握每一只手。参加每一个派对。微笑直到脸疼。我想要那个雕像。"'
                },
                consequence: {
                    en: '🏆 Winner! You hold the gold. You feel shallow, but your quote price doubles.',
                    th: '🏆 ผู้ชนะ! คุณถือทอง คุณรู้สึกตื้นเขิน แต่ค่าตัวคุณเพิ่มเป็นสองเท่า',
                    zh: '🏆 赢家！你拿着金子。你感到肤浅，但你的报价翻倍了。'
                },
                stats: { competence: 40, ethics: -20, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏡 Stay Home: "The work speaks for itself. I\'m not a politician. If I win, I win."',
                    th: '🏡 อยู่บ้าน: "ผลงานพูดด้วยตัวมันเอง ผมไม่ใช่นักการเมือง ถ้าชนะ ก็ชนะ"',
                    zh: '🏡 待在家里："作品本身会说话。我不是政客。如果我赢了，我就赢了。"'
                },
                consequence: {
                    en: '👋 Snubbed. You are not nominated. Hollywood punishes those who don\'t play along.',
                    th: '👋 ถูกเมิน คุณไม่ได้รับการเสนอชื่อ ฮอลลีวูดลงโทษคนที่ไม่เล่นตามเกม',
                    zh: '👋 受冷落。你没有被提名。好莱坞惩罚那些不配合的人。'
                },
                stats: { competence: 50, ethics: 50, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤡 Viral Speech: "Go to one event. Give a crazy, controversial speech. Dominate the news cycle."',
                    th: '🤡 สุนทรพจน์ไวรัล: "ไปงานเดียว กล่าวสุนทรพจน์บ้าๆ ที่เป็นประเด็น ครอบงำวงจรรข่าว"',
                    zh: '🤡 病毒式演讲："去参加一个活动。发表疯狂、有争议的演讲。主导新闻周期。"'
                },
                consequence: {
                    en: '🎲 Wildcard. You might win out of sheer popularity/infamy. A risky gamble.',
                    th: '🎲 ไพ่ตาย คุณอาจชนะด้วยความนิยม/ชื่อเสียงฉาวโฉ่ การพนันที่เสี่ยง',
                    zh: '🎲 通配符。你可能会因为纯粹的受欢迎程度/恶名而获胜。一场冒险的赌博。'
                },
                stats: { competence: 30, ethics: 20, leadership: 50, innovation: 40 }
            }
        ]
    },
    {
        id: 'film_director_041',
        text: {
            en: '📜 Plagiarism Suit: An unknown writer sues you, claiming your blockbuster script stole their idea from a blog post 10 years ago. It is eerily similar.',
            th: '📜 คดีลอกเลียนแบบ: นักเขียนโนเนมฟ้องคุณ โดยอ้างว่าบทหนังบล็อกบัสเตอร์ของคุณขโมยไอเดียจากบล็อกโพสต์เมื่อ 10 ปีก่อน มันคล้ายกันอย่างน่าขนลุก',
            zh: '📜 抄袭诉讼：一位不知名的作家起诉你，声称你的大片剧本窃取了他们 10 年前一篇博文中的创意。这惊人地相似。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Settle Quietly: "Pay them $1 million. Make it go away. I did read that blog once..."',
                    th: '💰 จ่ายเงียบๆ: "จ่ายพวกเขา 1 ล้านดอลลาร์ ให้เรื่องจบๆ ไป ผมเคยอ่านบล็อกนั้นครั้งหนึ่ง..."',
                    zh: '💰 悄悄和解："给他们 100 万美元。让这事过去。我确实读过那篇博客……"'
                },
                consequence: {
                    en: '🤫 Secret Shame. You keep your Oscar, but you know you didn\'t earn it alone.',
                    th: '🤫 ความอับอายลับๆ คุณเก็บออสการ์ไว้ แต่รู้ว่าคุณไม่ได้ได้มาด้วยตัวเอง',
                    zh: '🤫 秘密的耻辱。你保住了奥斯卡，但你知道这不仅仅是你一个人的功劳。'
                },
                stats: { competence: 20, ethics: -20, leadership: -10, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Fight It: "Parallel thinking exists. I never saw their blog. Drag them to court. Destroy them."',
                    th: '⚖️ สู้คดี: "ความคิดคู่ขนานมีอยู่จริง ผมไม่เคยเห็นบล็อกของพวกเขา ลากพวกเขาขึ้นศาล ทำลายพวกเขา"',
                    zh: '⚖️以此反击："平行思维是存在的。我从没看过他们的博客。把他们拖上法庭。毁掉他们。"'
                },
                consequence: {
                    en: '⚔️ Public Battle. You win legally, but look like a bully crushing a small artist.',
                    th: '⚔️ การต่อสู้สาธารณะ คุณชนะทางกฎหมาย แต่ดูเหมือนคนพาลที่บดขยี้ศิลปินตัวเล็กๆ',
                    zh: '⚔️ 公开战役。你在法律上赢了，但看起来像个欺负小艺术家的恶霸。'
                },
                stats: { competence: 40, ethics: -10, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Co-Credit: "Admit I might have been subconsciously influenced. Give them a \'Story By\' credit and a fee."',
                    th: '🤝 ให้เครดิตร่วม: "ยอมรับว่าอาจได้รับอิทธิพลจากจิตใต้สำนึก ให้เครดิต \'เรื่องโดย\' และค่าธรรมเนียม"',
                    zh: '🤝 共同署名："承认我可能潜意识里受到了影响。给他们一个\'故事构思\'的署名和一笔费用。"'
                },
                consequence: {
                    en: '💖 Classy Move. The writer becomes a collaborator. The industry respects your honesty.',
                    th: '💖 การกระทำที่มีระดับ นักเขียนกลายเป็นผู้ร่วมงาน อุตสาหกรรมเคารพความซื่อสัตย์ของคุณ',
                    zh: '💖 优雅的举动。作家成为了合作者。行业尊重你的诚实。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'film_director_042',
        text: {
            en: '⚰️ Tragedy Strikes: Your lead actor dies suddenly with 20% of the movie left to film. The studio wants to use a digital double to finish.',
            th: '⚰️ โศกนาฏกรรม: นักแสดงนำของคุณเสียชีวิตกะทันหันโดยเหลือหนังอีก 20% ต้องถ่าย สตูดิโอต้องการใช้ดิจิทัลดับเบิ้ลเพื่อถ่ายให้จบ',
            zh: '⚰️ 悲剧发生：你的主演在电影还剩 20% 未拍摄时突然去世。工作室想用数字替身来完成。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💻 CGI Resurrection: "Do it. The technology is good enough. We honor them by finishing the work."',
                    th: '💻 การชุบชีวิตด้ย CGI: "ทำเลย เทคโนโลยีดีพอ เราให้เกียรติพวกเขาโดยการทำงานให้เสร็จ"',
                    zh: '💻 CGI 复活："做吧。技术足够好。我们通过完成工来纪念他们。"'
                },
                consequence: {
                    en: '👻 Uncanny Valley. It feels ghoulish. Fans feel weird watching a ghost perform.',
                    th: '👻 หุบเขาแห่งความย้อนแย้ง มันรู้สึกน่ากลัว แฟนๆ รู้สึกแปลกๆ ที่ดูผีแสดง',
                    zh: '👻 恐怖谷。感觉像食尸鬼。粉丝看鬼魂表演感觉很怪。'
                },
                stats: { competence: 50, ethics: -10, leadership: 20, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Rewrite & Write Out: "Rewrite the ending. Have the character leave or die off-screen. Use body doubles only for backs."',
                    th: '🛑 เขียนบทใหม่และตัดออก: "เขียนตอนจบใหม่ ให้ตัวละครจากไปหรือตายนอกจอ ใช้สแตนด์อินสำหรับด้านหลังเท่านั้น"',
                    zh: '🛑 重写并写出："重写结局。让角色离开或在屏幕外死去。只用替身拍背影。"'
                },
                consequence: {
                    en: '🙏 Respectful Farewell. The film is dedicated to them. It feels honest and raw.',
                    th: '🙏 การอำลาที่เคารพ หนังอุทิศให้พวกเขา มันรู้สึกจริงใจและดิบ',
                    zh: '🙏以此尊重的告别。电影是献给他们的。感觉诚实而原始。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🚫 Cancel Movie: "We cannot finish without them. Claim insurance. Release what we have as a documentary tribute."',
                    th: '🚫 ยกเลิกหนัง: "เราทำต่อไม่ได้ถ้าไม่มีพวกเขา เคลมประกัน ปล่อยสิ่งที่เรามีเป็นสารคดีรำลึก"',
                    zh: '🚫 取消电影："没有他们我们无法完成。索赔保险。把我们拍摄的内容作为纪录片致以此敬发布。"'
                },
                consequence: {
                    en: '💔 Ultimate Tribute. You lose a blockbuster, but gain a soul. The documentary wins awards.',
                    th: '💔 การรำลึกสูงสุด คุณเสียหนังบล็อกบัสเตอร์ แต่ได้จิตวิญญาณ สารคดีชนะรางวัล',
                    zh: '💔 终极致敬。你失去了一部大片，但获得了灵魂。纪录片获奖。'
                },
                stats: { competence: 30, ethics: 60, leadership: 50, innovation: 10 }
            }
        ]
    },
    {
        id: 'film_director_043',
        text: {
            en: '🌳 Eco-Terrorist: An environmental group accuses your production of destroying a local beach. They begin protesting the set.',
            th: '🌳 ความผิดพลาดทางนิเวศ: กลุ่มสิ่งแวดล้อมกล่าวหาว่าการผลิตของคุณทำลายชายหาดท้องถิ่น พวกเขาเริ่มประท้วงกองถ่าย',
            zh: '🌳 生态恐怖分子：一个环保组织指责你的制片破坏了当地海滩。他们开始抗议片场。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧹 Clean Up Act: "Hire a team to restore the beach better than we found it. Apologize. Invite them to monitor us."',
                    th: '🧹 ทำความสะอาด: "จ้างทีมฟื้นฟูชายหาดให้ดีกว่าที่เราเจอ ขอโทษ เชิญพวกเขามาตรวจสอบเรา"',
                    zh: '🧹 清理行动："雇一个团队把海滩恢复得比我们发现时更好。道歉。邀请他们监督我们。"'
                },
                consequence: {
                    en: '🌱 Green Production. Expensive, but good PR. You win an environmental award.',
                    th: '🌱 การผลิตสีเขียว แพงแต่ PR ดี คุณชนะรางวัลสิ่งแวดล้อม',
                    zh: '🌱 绿色制作。昂贵，但公关很好。你赢得了环保奖。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '👮 Call Security: "They are trespassing. Clear them out. We have a permit. Geography is just a resource."',
                    th: '👮 เรียก รปภ.: "พวกเขาบุกรุก เคลียร์ออกไป เรามีใบอนุญาต ภูมิศาสตร์เป็นแค่ทรัพยากร"',
                    zh: '👮以此叫保安："他们擅自闯入。把他们清出去。我们有许可证。地理只是资源。"'
                },
                consequence: {
                    en: '🔥 Brand Damage. Videos of guards dragging hippies go viral. People boycott the movie.',
                    th: '🔥 ความเสียหายต่อแบรนด์ วิดีโอยามลากฮิปปี้เป็นไวรัล คนคว่ำบาตรหนัง',
                    zh: '🔥 品牌受损。保安拖拽嬉皮士的视频疯传。人们抵制电影。'
                },
                stats: { competence: 40, ethics: -30, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤥 Greenwash: "Donate to a charity. Put a \'Green Certified\' sticker on the credits. Change nothing on set."',
                    th: '🤥 ฟอกเขียว: "บริจาคให้การกุศล ติดสติกเกอร์ \'Green Certified\' ในเครดิต ไม่เปลี่ยนอะไรในกองถ่าย"',
                    zh: '🤥 漂绿："捐款给慈善机构。在演职员表上贴上\'绿色认证\'标签。片场什么都不改。"'
                },
                consequence: {
                    en: '🐍 Corporate Win. You dodge the issue cheaply. The beach stays ruined.',
                    th: '🐍 ชัยชนะองค์กร คุณหลบปัญหาได้ในราคาถูก ชายหาดพังเหมือนเดิม',
                    zh: '🐍以此企业胜利。你廉价地避开了这个问题。海滩仍然被毁。'
                },
                stats: { competence: 50, ethics: -20, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'film_director_044',
        text: {
            en: '📵 The Leaker Hunt: A specific scene description leaks. You suspect the caterer. You have no proof.',
            th: '📵 ล่าคนปล่อยข่าว: คำอธิบายฉากเฉพาะหลุด คุณสงสัยคนจัดเลี้ยง คุณไม่มีหลักฐาน',
            zh: '📵 泄密者追捕：特定场景描述泄露。你怀疑是餐饮服务员。你没有证据。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Fire Caterer: "Fire the whole company. Find a new vendor. Warn everyone else."',
                    th: '🔥 ไล่คนจัดเลี้ยงออก: "ไล่ออกทั้งบริษัท หาผู้ขายรายใหม่ เตือนคนอื่น"',
                    zh: '🔥 解雇餐饮服务员："解雇整家公司。找新的供应商。警告其他人。"'
                },
                consequence: {
                    en: '🥪 Hungry Crew. The new food is terrible. Morale drops. It wasn\'t them.',
                    th: '🥪 ทีมงานหิว อาหารใหม่แย่มาก ขวัญกำลังใจตก ไม่ใช่พวกเขา',
                    zh: '🥪 饥饿的剧组。新食物很难吃。士气下降。不是他们。'
                },
                stats: { competence: 20, ethics: -10, leadership: -20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🕵️ False Info: "Feed the caterer a fake plot point. See if it leaks. Catch them red-handed."',
                    th: '🕵️ ข้อมูลเท็จ: "ป้อนพล็อตปลอมให้คนจัดเลี้ยง ดูว่าหลุดไหม จับให้ได้คาหนังคาเขา"',
                    zh: '🕵️ 虚假信息："给餐饮服务员一个假情节。看看是否泄露。当场抓住他们。"'
                },
                consequence: {
                    en: '🧠 Smart Trap. It wasn\'t the caterer! It was your assistant. Painful betrayal revealed.',
                    th: '🧠 กับดักฉลาด ไม่ใช่คนจัดเลี้ยง! เป็นผู้ช่วยของคุณ การทรยศที่เจ็บปวดถูกเปิดเผย',
                    zh: '🧠 聪明的陷阱。不是餐饮服务员！是你的助理。痛苦的背叛被揭露。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🔒 Lock Down: "NDA forms signed every morning. No phones. Military security."',
                    th: '🔒 ล็อกดาวน์: "เซ็น NDA ทุกเช้า ห้ามโทรศัพท์ ความปลอดภัยแบบทหาร"',
                    zh: '🔒 封锁："每天早上签署保密协议。禁止手机。军事安保。"'
                },
                consequence: {
                    en: '👮 Prison Set. Everyone hates coming to work. Creativity is stifled by fear.',
                    th: '👮 กองถ่ายคุก ทุกคนเกลียดการมาทำงาน ความคิดสร้างสรรค์ถูกบีบด้วยความกลัว',
                    zh: '👮 监狱片场。每个人都讨厌来上班。创造力被恐惧扼杀。'
                },
                stats: { competence: 30, ethics: 0, leadership: -10, innovation: -10 }
            }
        ]
    },
    {
        id: 'film_director_045',
        text: {
            en: '💿 Black & White: You shot the film in color, but in the edit, you realize it works better in Black & White. The studio says B&W movies make 50% less money.',
            th: '💿 ขาวดำ: คุณถ่ายหนังเป็นสี แต่ในห้องตัดต่อ คุณตระหนักว่ามันดีกว่าในขาวดำ สตูดิโอบอกว่าหนังขาวดำทำเงินน้อยกว่า 50%',
            zh: '💿 黑白：你用彩色拍摄了电影，但在剪辑中，你意识到黑白效果更好。工作室说黑白电影赚的钱少 50%。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎨 Stick to Vision: "Release in B&W. It is art. Money isn\'t everything."',
                    th: '🎨 ยึดมั่นในวิสัยทัศน์: "ปล่อยเป็นขาวดำ มันคือศิลปะ เงินไม่ใช่ทุกอย่าง"',
                    zh: '🎨以此坚持愿景："发行黑白版。这是艺术。钱不是万能的。"'
                },
                consequence: {
                    en: '📉 Commercial Flop. Critics adore it. It wins awards but loses money. You are an "artist\'s director".',
                    th: '📉 ความล้มเหลวทางการค้า นักวิจารณ์ชื่นชม ชนะรางวัลแต่ขาดทุน คุณเป็น "ผู้กำกับของศิลปิน"',
                    zh: '📉 商业惨败。评论家崇拜它。它获奖了，但亏了钱。你是一个"艺术家的导演"。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🌈 Color Grade: "Keep it color. Maybe desaturate it a bit. Compromise for the market."',
                    th: '🌈 เกรดสี: "เก็บสีไว้ อาจลดความสดลงหน่อย ประนีประนอมเพื่อตลาด"',
                    zh: '🌈 调色："保持彩色。也许降低一点饱和度。为市场妥协。"'
                },
                consequence: {
                    en: '💰 Safe Bet. It looks fine. Standard blockbuster. You wonder "what if?" forever.',
                    th: '💰 การเดิมพันที่ปลอดภัย มันดูโอเค บล็อกบัสเตอร์มาตรฐาน คุณสงสัยว่า "ถ้าหาก?" ตลอดไป',
                    zh: '💰 安全的赌注。看起来不错。标准的重磅炸弹。你永远想知道"如果……？"。'
                },
                stats: { competence: 30, ethics: 20, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📀 Chrome Edition: "Release color in theaters. Release a special \'Chrome Edition\' in B&W on streaming later."',
                    th: '📀 Chrome Edition: "ปล่อยสีในโรง ปล่อย \'Chrome Edition\' พิเศษเป็นขาวดำบนสตรีมมิ่งทีหลัง"',
                    zh: '📀 铬版："院线发行彩色版。稍后在流媒体上发行特\'铬版\'黑白版。"'
                },
                consequence: {
                    en: '🧠 Double Dip. Fans buy it twice. You get your vision and the studio gets their money.',
                    th: '🧠 สองเด้ง แฟนๆ ซื้อสองรอบ คุณได้วิสัยทัศน์ สตูดิโอได้เงิน',
                    zh: '🧠 双重收益。粉丝买两次。你实现了愿景，工作室赚到了钱。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'film_director_046',
        text: {
            en: '🕶️ Pure VR: A tech company offers to fund your next movie fully, but it must be a 360-degree VR experience. You have never done VR.',
            th: '🕶️ VR ล้วน: บริษัทเทคโนโลยีเสนอเงินทุนเต็มจำนวนสำหรับหนังเรื่องต่อไปของคุณ แต่ต้องเป็นประสบการณ์ VR 360 องศา คุณไม่เคยทำ VR',
            zh: '🕶️ 纯 VR：一家科技公司提议全额资助你的下一部电影，但必须是 360 度 VR 体验。你从未做过 VR。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Accept Challenge: "I will learn deep tech. I will invent the language of VR cinema."',
                    th: '🚀 รับคำท้า: "ผมจะเรียนรู้เทคโนโลยีลึกซึ้ง ผมจะประดิษฐ์ภาษาของภาพยนตร์ VR"',
                    zh: '🚀以此接受挑战："我会学习深层技术。我会发明 VR 电影的语言。"'
                },
                consequence: {
                    en: '🕹️ Pioneer. It is buggy and nauseating, but history remembers you as the first. A bold step.',
                    th: '🕹️ ผู้บุกเบิก มันมีบั๊กและน่าเวียนหัว แต่ประวัติศาสตร์จำคุณได้ว่าเป็นคนแรก ก้าวที่กล้าหาญ',
                    zh: '🕹️ 先驱。它有很多 bug 且令人恶心，但历史记住了你是第一个。大胆的一步。'
                },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🙅 Reject Gimmick: "Cinema is a rectangle. I don\'t make theme park rides. Keep your money."',
                    th: '🙅 ปฏิเสธลูกเล่น: "หนังคือสี่เหลี่ยมผืนผ้า ผมไม่ทำเครื่องเล่นสวนสนุก เก็บเงินของคุณไว้"',
                    zh: '🙅 拒绝噱头："电影是长方形的。我不做主题公园游乐设施。留着你的钱。"'
                },
                consequence: {
                    en: '🏰 Old Guard. You are respected by purists, but seen as a dinosaur by the tech world.',
                    th: '🏰 ผู้พิทักษ์เก่า คุณได้รับความเคารพจากพวกหัวโบราณ แต่ถูกมองว่าเป็นไดโนเสาร์โดยโลกเทคโนโลยี',
                    zh: '🏰以此老顽固。你受到纯粹主义者的尊重，但被科技界视为恐龙。'
                },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: -30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Short Film Test: "I won\'t do a feature. Let\'s do a 10-minute experimental short. Test the waters."',
                    th: '🤝 ทดสอบหนังสั้น: "ผมจะไม่ทำหนังยาว มาทำหนังสั้นทดลอง 10 นาทีกัน ลองเชิงดู"',
                    zh: '🤝 短片测试："我不拍长片。让我们做一个 10 分钟的实验短片。试探一下。"'
                },
                consequence: {
                    en: '🧪 Safe Experiment. The short is cool. You realize VR isn\'t for you without risking years of life.',
                    th: '🧪 การทดลองที่ปลอดภัย หนังสั้นเจ๋งดี คุณตระหนักว่า VR ไม่ใช่สำหรับคุณโดยไม่ต้องเสี่ยงเวลาหลายปี',
                    zh: '🧪 安全的实验。短片很酷。你意识到 VR 不适合你，且没有拿几年的生命去冒险。'
                },
                stats: { competence: 50, ethics: 30, leadership: 30, innovation: 40 }
            }
        ]
    },
    {
        id: 'film_director_047',
        text: {
            en: '🎭 Deepfake Dialogue: The studio wants to change the plot. Instead of reshoots, they want to Deepfake the actors\' mouths to say new lines.',
            th: '🎭 บทพูด Deepfake: สตูดิโอต้องการเปลี่ยนพล็อต แทนที่จะถ่ายซ่อม พวกเขาต้องการ Deepfake ปากนักแสดงให้พูดบทใหม่',
            zh: '🎭 Deepfake 对话：工作室想改变情节。他们不想重拍，而是想用 Deepfake 让演员嘴里说出新台词。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤖 Allow It: "It saves money. The audience won\'t notice on small screens."',
                    th: '🤖 อนุญาต: "มันประหยัดเงิน ผู้ชมจะสังเกตไม่เห็นบนหน้าจอเล็ก"',
                    zh: '🤖 允许："这省钱。观众在小屏幕上不会注意到的。"'
                },
                consequence: {
                    en: '👄 Uncanny Mouths. It looks weird. Actors sue you for putting words in their mouths (literally).',
                    th: '👄 ปากแปลกๆ มันดูแปลก นักแสดงฟ้องคุณที่ยัดคำพูดใส่ปากพวกเขา (ตามตัวอักษร)',
                    zh: '👄 怪异的嘴巴。看起来很怪。演员起诉你把话塞进他们嘴里（字面意思）。'
                },
                stats: { competence: 20, ethics: -40, leadership: -20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Veto: "It is unethical and looks bad. If we change the line, we bring the actor back to the booth."',
                    th: '🚫 ยับยั้ง: "มันผิดจริยธรรมและดูแย่ ถ้าเราเปลี่ยนบท เราต้องเอานักแสดงกลับมาที่บูธ"',
                    zh: '🚫 否决："这不道德，看起来很糟糕。如果我们改台词，就把演员带回录音室。"'
                },
                consequence: {
                    en: '🛡️ Integrity Win. Expensive ADR session, but the performance remains authentic.',
                    th: '🛡️ ชนะเรื่องความซื่อสัตย์ เซสชั่น ADR แพง แต่การแสดงยังคงจริงใจ',
                    zh: '🛡️ 正直的胜利。昂贵的 ADR 会话，但表演保持真实。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Write Around It: "Cut to a reaction shot of the listener. Dub the line over their shoulder. Old school trick."',
                    th: '🔄 เขียนหลบมัน: "ตัดไปที่ช็อตปฏิกิริยาของผู้ฟัง พากย์ทับข้ามไหล่ ทริคโรงเรียนเก่า"',
                    zh: '🔄 绕过它："切到听众的反应镜头。在他们肩膀上配音。老派把戏。"'
                },
                consequence: {
                    en: '🎬 Classic Fix. Invisible editing. No tech needed. Just smart filmmaking.',
                    th: '🎬 การแก้แบบคลาสสิก การตัดต่อที่มองไม่เห็น ไม่ต้องใช้เทคโนโลยี แค่การทำหนังที่ชาญฉลาด',
                    zh: '🎬 经典修复。隐形剪辑。不需要技术。只是聪明的电影制作。'
                },
                stats: { competence: 50, ethics: 30, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'film_director_048',
        text: {
            en: '🎮 Interactive Movie: Netflix wants you to direct a "Choose Your Own Adventure" film. It requires shooting 5 hours of footage for a 90-minute story.',
            th: '🎮 หนังโต้ตอบแบบ: Netflix ต้องการให้คุณกำกับหนัง "เลือกการผจญภัยของคุณเอง" ต้องถ่ายฟุตเทจ 5 ชั่วโมงสำหรับเรื่องราว 90 นาที',
            zh: '🎮 互动通过电影：Netflix 想让你执导一部"选择你自己的冒险"电影。这需要拍摄 5 小时的素材来讲述 90 分钟的故事。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤯 Do It All: "Map out the multiverse. Shoot every ending. I will not sleep for a year."',
                    th: '🤯 ทำทั้งหมด: "แผนที่พหุจักรวาล ถ่ายทุกตอนจบ ผมจะไม่นอนเป็นปี"',
                    zh: '🤯 全都要："绘制多元宇宙。拍摄每一个结局。我一年不睡觉。"'
                },
                consequence: {
                    en: '🧠 Burnout Masterpiece. You create a complex web of story. You collapse at the premiere, but it is revolutionary.',
                    th: '🧠 ผลงานชิ้นเอกที่หมดไฟ คุณสร้างเว็บเรื่องราวที่ซับซ้อน คุณล้มฟุบที่งานเปิดตัว แต่มันปฏิวัติวงการ',
                    zh: '🧠 倦怠的杰作。你创造了一个复杂的故事网。你在首映式上倒下了，但这是革命性的。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '📉 Simplify: "Make the choices fake. Do they eat cereal or toast? Who cares. Illusion of choice."',
                    th: '📉 ทำให้ง่าย: "ทำให้ตัวเลือกปลอม พวกเขากินซีเรียลหรือขนมปังปิ้ง? ใครสน ภาพลวงตาของทางเลือก"',
                    zh: '📉 简化："让选择变得虚假。他们吃麦片还是烤面包？谁在乎。选择的幻觉。"'
                },
                consequence: {
                    en: '🤡 Gamers Mad. Players realize the choices don\'t matter. Online backlash is severe.',
                    th: '🤡 เกมเมอร์โกรธ ผู้เล่นรู้ว่าตัวเลือกไม่มีผล กระแสตีกลับออนไลน์รุนแรง',
                    zh: '🤡 玩家生气。玩家意识到选择并不重要。网上反弹严重。'
                },
                stats: { competence: 40, ethics: -20, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Decline: "Stories are linear. I decide the ending, not the viewer. I am the storyteller."',
                    th: '🛑 ปฏิเสธ: "เรื่องราวเป็นเส้นตรง ผมกำหนดตอนจบ ไม่ใช่ผู้ชม ผมคือนักเล่าเรื่อง"',
                    zh: '🛑 拒绝："故事是线性的。我决定结局，而不是观众。我是讲故事的人。"'
                },
                consequence: {
                    en: '📚 Traditionalist. You lose the Netflix deal, but make a solid standard film elsewhere.',
                    th: '📚 อนุรักษ์นิยม คุณเสียดีล Netflix แต่ทำหนังมาตรฐานที่แน่นปึ้กที่อื่น',
                    zh: '📚 传统主义者。你失去了 Netflix 的交易，但在别处制作了一部扎实的标准电影。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: -10 }
            }
        ]
    },
    {
        id: 'film_director_049',
        text: {
            en: '⏳ The 48-Hour Challenge: You agreed to judge and participate in a 48-hour film festival to inspire students. You have no budget and a phone camera.',
            th: '⏳ ความท้าทาย 48 ชั่วโมง: คุณตกลงที่จะตัดสินและเข้าร่วมเทศกาลภาพยนตร์ 48 ชั่วโมงเพื่อสร้างแรงบันดาลใจให้นักเรียน คุณไม่มีงบและกล้องโทรศัพท์',
            zh: '⏳ 48 小时挑战：你同意担任评委并参加 48 小时电影节以激励学生。你没有预算，只有一部手机相机。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏆 Try Hard: "Call my pro friends. Cheat a little. Make a Hollywood quality short. Show them how it is done."',
                    th: '🏆 พยายามหนัก: "โทรหาเพื่อนโปรของผม โกงนิดหน่อย ทำหนังสั้นคุณภาพฮอลลีวูด ให้พวกเขาเห็นว่าทำยังไง"',
                    zh: '🏆 努力："打电话给我的职业朋友。作弊一点。制作好莱坞质量的短片。给他们看看是怎么做的。"'
                },
                consequence: {
                    en: '🙄 Bully. You win, but the students feel discouraged. You punched down.',
                    th: '🙄 คนพาล คุณชนะ แต่นักเรียนรู้สึกท้อแท้ คุณรังแกคนตัวเล็กกว่า',
                    zh: '🙄 恶霸。你赢了，但学生们感到沮丧。你以此欺小。'
                },
                stats: { competence: 50, ethics: -20, leadership: -10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤡 Have Fun: "Make a silly comedy with bad props. Show that failure is okay. Laugh at myself."',
                    th: '🤡 สนุกกับมัน: "ทำหนังตลกงี่เง่าด้วยอุปกรณ์ประกอบฉากแย่ๆ แสดงให้เห็นว่าความล้มเหลวโอเค หัวเราะเยาะตัวเอง"',
                    zh: '🤡 玩得开心："用糟糕的道具拍一部愚蠢的喜剧。表明失败是可以的。嘲笑自己。"'
                },
                consequence: {
                    en: '❤️ Inspiring. The students love it. You remind everyone that film is play.',
                    th: '❤️ สร้างแรงบันดาลใจ นักเรียนชอบ คุณเตอมทุกคนว่าภาพยนตร์คือการเล่น',
                    zh: '❤️ 鼓舞人心。学生们喜欢它。你提醒大家电影就是游戏。'
                },
                stats: { competence: 30, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🎓 Experimental: "Shoot an abstract tone poem about light. Teach them about visual metaphor."',
                    th: '🎓 ทดลอง: "ถ่ายกวีนิพนธ์นามธรรมเกี่ยวกับแสง สอนพวกเขาเกี่ยวกับอุปมาทางสายตา"',
                    zh: '🎓 实验性："拍摄关于光的抽象音诗。教他们关于视觉隐喻。"'
                },
                consequence: {
                    en: '🤔 Artsy. Some students get it, most are bored. You maintained your brand.',
                    th: '🤔 ศิลป์ๆ นักเรียนบางคนเข้าใจ ส่วนใหญ่เบื่อ คุณรักษาแบรนด์ของคุณ',
                    zh: '🤔 艺术。有些学生懂了，大多数人觉得无聊。你保持了你的品牌。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 40 }
            }
        ]
    },
    {
        id: 'film_director_050',
        text: {
            en: '👋 The Final Cut: You are retiring. Your final film is a masterpiece, but the studio wants to edit the ending to set up a franchise universe. You have one last fight.',
            th: '👋 การตัดต่อครั้งสุดท้าย: คุณกำลังจะเกษียณ หนังเรื่องสุดท้ายของคุณเป็นผลงานชิ้นเอก แต่สตูดิโอต้องการตัดต่อตอนจบเพื่อปูทางสู่จักรวาลแฟรนไชส์ คุณมีการต่อสู้ครั้งสุดท้าย',
            zh: '👋 最终剪辑：你要退休了。你的最后一部电影是杰作，但工作室想剪辑结局以建立特许经营宇宙。你有最后一场战斗。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Burn the Negatives: "I will delete the digital masters. hostage style. My version or nothing."',
                    th: '🔥 เผาฟิล์ม: "ผมจะลบต้นฉบับดิจิทัล สไตล์ตัวประกัน เวอร์ชันของผมหรือไม่มีเลย"',
                    zh: '🔥 烧底片："我会删除数字母带。人质风格。我的版本或者是虚无。"'
                },
                consequence: {
                    en: '💥 Legendary Exit. They cave. You retire as a dangerous, uncompromising genius.',
                    th: '💥 ทางออกในตำนาน พวกเขายอม คุณเกษียณในฐานะอัจฉริยะที่อันตรายและไม่ประนีประนอม',
                    zh: '💥 传奇的退出。他们屈服了。你作为危险、不妥协的天才退休。'
                },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Take the Buyout: "Pay me $20 million retirement fund. Ruin the ending. I will be on a beach."',
                    th: '💰 รับเงินก้อนโต: "จ่ายกองทุนเกษียณ 20 ล้านดอลลาร์ ทำลายตอนจบเลย ผมจะไปอยู่บนชายหาด"',
                    zh: '💰 接受买断："给我 2000 万美元退休基金。毁掉结局。我要去海滩了。"'
                },
                consequence: {
                    en: '🍹 Rich Sellout. You enjoy your margaritas. The movie has 5 sequels. You watch none of them.',
                    th: '🍹 คนขายวิญญาณที่ร่ำรวย คุณเพลิดเพลินกับมาการิต้า หนังมี 5 ภาคต่อ คุณไม่ดูสักเรื่อง',
                    zh: '🍹 富有的出卖者。你享受你的玛格丽特酒。电影有 5 部续集。你一部也不看。'
                },
                stats: { competence: 30, ethics: 10, leadership: -10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📝 Public Letter: "Write an open letter to fans explaining the real ending. Let the studio release their version. Truth is out there."',
                    th: '📝 จดหมายเปิดผนึก: "เขียนจดหมายเปิดผนึกถึงแฟนๆ อธิบายตอนจบที่แท้จริง ให้สตูดิโอปล่อยเวอร์ชันของพวกเขา ความจริงอยู่ที่นั่น"',
                    zh: '📝以此公开信："写一封公开信给粉丝解释真正的结局。让工作室发布他们的版本。真相就在那里。"'
                },
                consequence: {
                    en: '🕊️ Graceful Bow. You keep your dignity without burning the studio. Fans consider your letter canon.',
                    th: '🕊️ การโค้งคำนับที่สง่างาม คุณรักษาศักดิ์ศรีโดยไม่เผาสตูดิโอ แฟนๆ ถือว่าจดหมายของคุณเป็นของจริง',
                    zh: '🕊️ 优雅的鞠躬。你保持了尊严，没有烧毁工作室。粉丝认为你的信是正典。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 }
            }
        ]
    }
];
