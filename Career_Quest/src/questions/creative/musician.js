// Musician Career Questions
// Ultra-Comprehensive set: 15 detailed, story-rich questions
// Each scenario is a mini-case study with deep consequences and realistic stat impacts

export const musicianQuestions = [
    {
        id: 'mu_001',
        text: {
            en: '🎵 The Sound Dilemma: Your record label wants you to change your experimental style to"Radio-Friendly Pop."They promise a $100k marketing budget if you do. What do you do?',
            th: '🎵 วิกฤตแนวเพลง: ค่ายเพลงขอลดความเซอร์ในสไตล์คุณลง แล้วเปลี่ยนเป็นแนว"ป๊อปตลาด"แทน พร้อมสัญญาจะทุ่มงบโปรโมทให้ 3 ล้านบาท จะทำไหม?',
            zh: '🎵 风格困境：你的唱片公司希望你将实验风格改为“电台流行乐”。如果你这样做，他们承诺提供10万美元的营销预算。你会怎么做？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🎨 Artistic Integrity', th: '🎨 ยึดมั่นในวิสัยทัศน์', zh: '🎨 艺术诚信' },
                consequence: { en: '✅ Loyal Fanbase! You lost the big budget but your fans respect your soul. You become a"cult legend."', th: '✅ ฐานแฟนที่ซื่อสัตย์! ถึงจะพลาดงบก้อนโตแต่แฟนเพลงเคารพในตัวคุณมาก คุณกลายเป็น"ตำนานนอกกระแส"', zh: '✅ 忠实的粉丝群！你失去了巨额预算，但你的粉丝尊重你的灵魂。你成为了“邪典传奇”。' },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 45 }
            },
            {
                id: 'B',
                text: { en: '💰 Go Mainstream', th: '💰 เข้าสู่กระแสหลัก', zh: '💰 走向主流' },
                consequence: { en: '⚠️ Instant Fame. You have a #1 hit! BUT: You hate performing the songs. Your old fans call you a"sellout."', th: '⚠️ ดังระเบิด! คุณมีเพลงฮิตอันดับ 1 แต่คุณเกลียดการร้องเพลงพวกนั้นจัง แถมแฟนเก่าๆ ก็ตราหน้าว่าคุณ"ขายวิญญาณ"', zh: '⚠️ 瞬间成名。你有了冠军单曲！但是：你讨厌演唱这些歌。你的老粉丝骂你是“背叛者”。' },
                stats: { competence: 45, ethics: 10, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '🔄 The Hybrid Path', th: '🔄 ทางสายกลาง', zh: '🔄 混合路径' },
                consequence: { en: '✅ Smart Move! You kept your core sound but polished it for the radio. Both sides are satisfied.', th: '✅ ฉลาดมาก! คุณรักษาแก่นแท้ไว้แต่ขัดเกลาให้ฟังง่ายขึ้น ทั้งสองฝั่งแฮปปี้', zh: '✅ 明智之举！你保留了核心风格，但为了电台进行了打磨。双方都很满意。' },
                stats: { competence: 40, ethics: 30, leadership: 35, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '🔥 Go Indie', th: '🔥 ลุยเองไม่ต้องง้อค่าย', zh: '🔥 独立制作' },
                consequence: { en: '🚀 Freedom! You quit the label and start your own. It’s 10x more work but you own everything.', th: '🚀 พลังแห่งอิสระ! คุณลาออกจากค่ายแล้วมาทำเอง เหนื่อยกว่าเดิม 10 เท่าแต่คุณเป็นเจ้าของชีวิตตัวเอง 100%', zh: '🚀 自由！你退出公司并创办了自己的工作室。工作量增加了10倍，但你拥有了一切。' },
                stats: { competence: 50, ethics: 40, leadership: 60, innovation: 50 }
            }
        ]
    },
    {
        id: 'mu_002',
        text: {
            en: '✍️ The Ghostwriter: A major teen pop star wants you to write their next 3 hits"anonymously"for $50,000. You get no credit, ever. You are broke.',
            th: '✍️ นักเขียนเงา: ป๊อปสตาร์ชื่อดังต้องการให้คุณแต่งเพลงฮิต 3 เพลงให้แบบ"ไม่เปิดเผยชื่อ"แลกกับเงิน 1.5 ล้านบาท แต่คุณจะไม่มีชื่อในเครดิตเลยตลอดกาล ตอนนี้คุณถังแตกอยู่...',
            zh: '✍️ 影子写手：一位当红青少年流行歌星想让你以5万美元的价格“匿名”为他们写下接下来的三首热门歌曲。你永远得不到署名。你现在破产了。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💰 Take the Cash', th: '💰 รับเงินไปก่อน', zh: '💰 拿钱再说' },
                consequence: { en: '✅ Bills Paid! You saved your studio and bought new gear. You hear your song everywhere but feel invisible.', th: '✅ รอดตาย! คุณมีเงินจ่ายค่าเช่าสตูดิโอและซื้ออุปกรณ์ใหม่ ได้ยินเพลงตัวเองทุกที่แต่รู้สึกเหมือนไม่มีตัวตน', zh: '✅ 账单清了！你保住了工作室并购置了新器材。你随处都能听到自己的歌，但感觉自己像透明人。' },
                stats: { competence: 45, ethics: 20, leadership: 20, innovation: 30 }
            },
            {
                id: 'B',
                text: { en: '🚫 Demand Credit', th: 'B เรียกร้องเครดิต', zh: '🚫 要求署名' },
                consequence: { en: '❌ Deal Cancelled. They find another writer. You stay broke but keep your name clean.', th: '❌ ดีลล่ม! เขาไปจ้างคนอื่นแทน คุณยังถังแตกเหมือนเดิมแต่ชื่อเสียงยังขาวสะอาด', zh: '❌ 交易取消。他们找了另一个写手。你依然贫穷，但保住了名声。' },
                stats: { competence: 20, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '🤝 Leverage Future Deal', th: '🤝 ต่อรองงานในอนาคต', zh: '🤝 为未来争取筹码' },
                consequence: { en: '✅ Shrewd Win! You agree to ghostwrite now if they feature YOU on a track next year. Career growth!', th: '✅ ชนะอย่างเหนือชั้น! คุณยอมเขียนให้ตอนนี้แต่มีข้อแม้ว่าปีหน้าเขาต้องมาฟีเจอริ่งในเพลงคุณ อาชีพก้าวกระโดด!', zh: '✅ 精明的胜利！你同意现在代写，但前提是他们明年要在你的歌里客串。职业生涯起飞！' },
                stats: { competence: 50, ethics: 30, leadership: 55, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '🎨 Write a Parody', th: '🎨 แต่งเพลงล้อเลียน', zh: '🎨 写首讽刺歌' },
                consequence: { en: '⚠️ Viral Drama. You release a song about"Ghostwriting in Pop."It goes viral, but you are blacklisted by major labels.', th: '⚠️ ดราม่าไวรัล! คุณปล่อยเพลงแฉเรื่อง"นักเขียนเงาในวงการป๊อป"จนดังพลุแตก แต่โดนค่ายใหญ่ๆ แบนถาวร', zh: '⚠️ 舆论风波。你发布了一首关于“流行乐坛影子代写”的歌。它火了，但你被主流唱片公司列入了黑名单。' },
                stats: { competence: 35, ethics: 40, leadership: 15, innovation: 60 }
            }
        ]
    },
    {
        id: 'mu_003',
        text: {
            en: '📱 The TikTok Strategy: The label says your 6-minute masterpiece is"too long."They want 15-second catchy hooks for TikTok only. Your reaction?',
            th: '📱 กลยุทธ์ TikTok: ค่ายเพลงบอกว่าเพลง 6 นาทีของคุณมัน"ยาวไป"เขาอยากได้แค่ท่อนฮุคโดนๆ 15 วินาทีไว้ลง TikTok เท่านั้น คุณจะเอายังไง?',
            zh: '📱 TikTok 策略：唱片公司说你那首6分钟的杰作“太长了”。他们只想要15秒的TikTok洗脑神曲。你的反应是？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫"It\'s Art, Not a Jingle"', th: '🚫"นี่คือศิลปะ ไม่ใช่เพลงโฆษณา"', zh: '🚫 “这是艺术，不是广告歌”' },
                consequence: { en: '⚠️ Stagnation. The song fails to pick up steam in the modern market. You are a"purist"with a small audience.', th: '⚠️ นิ่งสนิท! เพลงไปไม่ถึงฝั่งฝันในตลาดยุคใหม่ คุณคือ"ศิลปินแนวอนุรักษ์"ที่มีคนฟังแค่กลุ่มเล็กๆ', zh: '⚠️ 停滞。这首歌未能在现代市场流行起来。你是一个受众极小的“纯粹主义者”。' },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '📱 Master the Viral', th: '📱 เจ้าแห่งไวรัล', zh: '📱 掌控流量' },
                consequence: { en: '🚀 Viral Hit! Everyone knows the hook. Thousands of"Dance Challenges"use it. You are famous but your album sales are low.', th: '🚀 ปังฉุดไม่อยู่! ทุกคนร้องท่อนฮุคได้ มีคนเอาไปทำ Dance Challenge เพียบ คุณดังมากแต่ยอดขายอัลบั้มจริงๆ ยังน้อย', zh: '🚀 爆火！每个人都能哼出那段旋律。成千上万的“舞蹈挑战”都在用它。你出名了，但专辑销量一般。' },
                stats: { competence: 40, ethics: 20, leadership: 40, innovation: 70 }
            },
            {
                id: 'C',
                text: { en: '🔄 Two Versions Strategy', th: '🔄 กลยุทธ์สองเวอร์ชัน', zh: '🔄 双版本策略' },
                consequence: { en: '✅ Perfect Balance! You release the 6-min version for fans and a"TikTok Edit"for the masses. Smart business.', th: '✅ สมดุลที่สมบูรณ์แบบ! ปล่อยตัวเต็มให้แฟนคลับ และตัว"TikTok Edit"ให้คนทั่วไป ฉลาดทำธุรกิจสุดๆ', zh: '✅ 完美的平衡！你为粉丝发布了6分钟版本，为大众发布了“TikTok剪辑版”。精明的商业运作。' },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: { en: '🤡 Subversive Hook', th: '🤡 ฮุคเสียดสี', zh: '颠覆性洗脑段落' },
                consequence: { en: '🔥 Creative Legend! You make the hook a joke about TikTok itself. It goes triple-platinum BECAUSE of the irony.', th: '🔥 ตำนานนักสร้างสรรค์! คุณทำท่อนฮุคล้อเลียน TikTok จนมันดังระเบิดเพราะความตลกร้ายของมัน', zh: '🔥 创意传奇！你把那段旋律做成了一个关于TikTok本身的冷笑话。因为它带有强烈的讽刺意味，反而获得了三倍白金销量。' },
                stats: { competence: 45, ethics: 40, leadership: 45, innovation: 100 }
            }
        ]
    },
    {
        id: 'mu_004',
        text: {
            en: '💸 The Tour Disaster: Your manager disappeared with the $200k tour advance. You are in a foreign country with your band. What’s the plan?',
            th: '💸 หายนะระว่างทัวร์: ผู้จัดการเชิดเงินมัดจำทัวร์ 6 ล้านบาทหายเข้ากลีบเมฆ คุณและวงติดค้างอยู่ในต่างแดน จะทำยังไงต่อ?',
            zh: '💸 巡演灾难：你的经纪人带着20万美元的巡演预付款失踪了。你正和乐队被困在国外。你的计划是什么？'
        },
        options: [
            {
                id: 'A',
                text: { en: '📢 Fans to the Rescue', th: '📢 แฟนคลับช่วยชีวิต', zh: '📢 粉丝大救援' },
                consequence: { en: '✅ Crowdfunded! You tell the truth on social media. Fans donate $300k. You finish the tour as heroes.', th: '✅ พลังฝูงชน! คุณสารภาพความจริงในโซเชียล แฟนๆ ช่วยกันบริจาคจนได้เงิน 9 ล้านบาท คุณทัวร์จบอย่างสง่างาม', zh: '✅ 众筹成功！你在社交媒体上实话实说。粉丝捐款30万美元。你们以英雄之姿完成了巡演。' },
                stats: { competence: 35, ethics: 50, leadership: 60, innovation: 45 }
            },
            {
                id: 'B',
                text: { en: '🎸 The Acoustic Hustle', th: '🎸 ลุยงานอะคูสติก', zh: '🎸 不插电奋斗' },
                consequence: { en: '✅ Respect! You play on street corners and small bars to pay for gas. The"raw"tour becomes a legendary documentary.', th: '✅ ได้ใจเต็มๆ! คุณยอมร้องเพลงข้างทางและในบาร์เล็กๆ เพื่อหาเงินค่าน้ำมัน ทัวร์"ติดดิน"นี้กลายเป็นสารคดีในตำนาน', zh: '✅ 赢得尊重！你们在街头和小型酒吧演出赚油费。这次“原始”巡演成为了传奇般的纪录片。' },
                stats: { competence: 50, ethics: 40, leadership: 55, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '🛑 Cancel & Sue', th: '🛑 ยกเลิกและฟ้องร้อง', zh: '🛑 取消并起诉' },
                consequence: { en: '❌ Career Setback. You go home and spend 2 years in court. The momentum of your career dies.', th: '❌ อาชีพสะดุด! คุณกลับบ้านและเสียเวลา 2 ปีไปกับการขึ้นศาล กระแสความดังของคุณมอดดับลง', zh: '❌ 事业受阻。你回家并花了2年在打官司。你事业的势头消失了。' },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: { en: '🤝 Local Partnership', th: '🤝 หาพาร์ทเนอร์ในพื้นที่', zh: '🤝 当地合作伙伴' },
                consequence: { en: '✅ Business Mastery. You sign a deal with a local beer brand to sponsor the rest of the tour. Shrewd survival.', th: '✅ ยอดนักธุรกิจ! คุณดีลกับแบรนด์เบียร์ท้องถิ่นให้มาเป็นสปอนเซอร์ทัวร์ที่เหลือ การเอาตัวรอดที่เฉียบแหลมมาก', zh: '✅ 商业大师。你和一个当地啤酒品牌签约，赞助余下的巡演。精明的生存手段。' },
                stats: { competence: 45, ethics: 20, leadership: 50, innovation: 50 }
            }
        ]
    },
    {
        id: 'mu_005',
        text: {
            en: '📜 The Sampling Lawsuit: Your hit song used an uncleared 2-second sample from a forgotten 70s track. Now the estate is suing for 100% of the royalties ($1M+). Your move?',
            th: '📜 คดีแซมปลิ้งเพลง: เพลงฮิตของคุณใช้เสียงตัวอย่าง 2 วินาทีจากเพลงยุค 70 ที่ไม่มีคนรู้จักโดยไม่ได้ขออนุญาต ตอนนี้เจ้าของลิขสิทธ์ฟ้องเรียกเงิน 30 ล้านบาท! จะทำยังไง?',
            zh: '📜 采样诉讼：你的热门歌曲使用了2秒未授权的70年代冷门歌曲采样。现在版权方索要100%版税（100万美元以上）。你怎么做？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤝 Settle Privately', th: '🤝 เจรจาลับ', zh: '🤝 私下和解' },
                consequence: { en: '⚠️ Expensive Peace. You give them 50% for life. You keep the song and the credit, but lose half your fortune.', th: '⚠️ สันติภาพราคาแพง! คุณยอมแบ่งให้เขา 50% ตลอดชีพ คุณได้รักษาเพลงและเครดิตไว้แต่เสียเงินไปครึ่งหนึ่ง', zh: '⚠️ 昂贵的和平。你终身分给他们50%。你保留了歌曲和名誉，但损失了一半的财富。' },
                stats: { competence: 35, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🔥 Fight in Court', th: '🔥 สู้กันในศาล', zh: '🔥 法庭见' },
                consequence: { en: '💀 Total Loss. You lose the case. You pay $1.5M and are banned from using samples again. Your label drops you.', th: '💀 เจ๊งยับ! คุณแพ้คดี ต้องจ่ายเงิน 45 ล้านบาทและโดนแบนการใช้แซมปลิ้งตลอดไป ค่ายเพลงยกเลิกสัญญากับคุณ', zh: '💀 彻底失败。你输了官司。你支付了150万美元，并被禁止再次使用任何采样。公司解雇了你。' },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '🔄 The Re-Record', th: '🔄 อัดเพลงใหม่', zh: '🔄 重新录制' },
                consequence: { en: '✅ Genius Move! You re-record the part live with your bassist. The original version is deleted. You keep 100%.', th: '✅ เหนือชั้น! คุณอัดท่อนนั้นใหม่ด้วยเสียงเบสสดๆ แล้วลบเวอร์ชันเก่าทิ้ง ตอนนี้คุณได้เงิน 100% เต็มๆ', zh: '✅ 天才之举！你和贝斯手现场重录了那个部分。原版被删除。你保留了100%的权益。' },
                stats: { competence: 60, ethics: 30, leadership: 40, innovation: 70 }
            },
            {
                id: 'D',
                text: { en: '🤝 Partner with Legend', th: '🤝 ร่วมมือกับศิลปินต้นฉบับ', zh: '🤝 与传奇合作' },
                consequence: { en: '🏆 Win-Win! You invite the original artist to perform with you. The"beef"turns into a cross-generational hit.', th: '🏆 วิน-วิน! คุณเชิญศิลปินต้นฉบับมาแสดงด้วยกัน คดีความกลายเป็นเพลงฮิตข้ามรุ่นที่ทุกคนหลงรัก', zh: '🏆 双赢！你邀请原唱共同演出。这场纠纷转变成了一首跨时代的经典。' },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 50 }
            }
        ]
    },
    {
        id: 'mu_006',
        text: {
            en: '🍔 The Sellout Ad: A fast-food giant wants to use your"Anti-Capitalist"anthem in a burger commercial for $200k. Your band is broke. Do you sign?',
            th: '🍔 โฆษณาขายวิญญาณ: ยักษ์ใหญ่ฟาสต์ฟู้ดอยากได้เพลง"ต้านนายทุน"ของคุณไปลงโฆษณาเบอร์เกอร์แลกกับเงิน 6 ล้านบาท ตอนนี้วงคุณไม่มีเงินเลย จะเซ็นไหม?',
            zh: '🍔 廉价广告：一家快餐巨头想花20万美元在汉堡广告中使用你那首“反资本主义”颂歌。你的乐队快吃不起饭了。你会签约吗？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Refuse on Principle', th: '🚫 ปฏิเสธด้วยอุดมการณ์', zh: '🚫 坚持原则拒绝' },
                consequence: { en: '✅ Ethical Legend! Fans love your integrity. You get more merch sales but stay poor for a while.', th: '✅ ตำนานแห่งจริยธรรม! แฟนๆ ชื่นชมความสัตย์จริงของคุณ ยอดขายของที่ระลึกพุ่งแต่คุณก็ยังจนอยู่พักใหญ่', zh: '✅ 道德传奇！粉丝热爱你的正直。你的周边产品销量上升，但会穷上一阵子。' },
                stats: { competence: 30, ethics: 80, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '💰 Take the Bag', th: '💰 รับเงินมาก่อน', zh: '💰 拿钱走人' },
                consequence: { en: '💀 Reputation Ruined. People mock you on Twitter. You are the"Burger Revolutionary."Money is good though.', th: '💀 ชื่อเสียงพังพินาศ! โดนล้อเลียนใน Twitter ว่าเป็น"นักปฏิวัติเบอร์เกอร์"แต่เงินน่ะดีจริงนะจะบอกให้', zh: '💀 声誉扫地。人们在网络上嘲讽你。你成了“汉堡革命家”。不过说实话，钱是真香。' },
                stats: { competence: 40, ethics: -20, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '📢 Donate the Money', th: '📢 บริจาคเงินทั้งหมด', zh: '📢 捐出这笔钱' },
                consequence: { en: '✅ PR Masterpiece! You take the money but donate it ALL to a local food charity. You look like a genius.', th: '✅ สุดยอด PR! คุณรับเงินมาแต่บริจาคให้มูลนิธิอาหารทั้งหมด คุณดูหล่อและฉลาดมากในสายตาทุกคน', zh: '✅ 公关杰作！你拿了钱，但全部捐给了当地食品慈善机构。你看起像个天才。' },
                stats: { competence: 45, ethics: 60, leadership: 60, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '🔄 Irony Strategy', th: '🔄 กลยุทธ์ประชดประชัน', zh: '讽刺策略' },
                consequence: { en: '⚠️ Polarizing. You record a direct mocking of the burger brand while using their money. Risky but innovative.', th: '⚠️ เสียงแตก! คุณรับเงินเขามาแต่แอบอัดเสียงล้อเลียนแบรนด์เบอร์เกอร์ในเพลงนั้นด้วย เสี่ยงแต่ล้ำมาก', zh: '⚠️ 引起争议。你在拿人家钱的同时录了一首嘲讽该汉堡品牌的歌。风险极大但极具创意。' },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 80 }
            }
        ]
    },
    {
        id: 'mu_007',
        text: {
            en: '🤖 The AI Vocalist: Your voice was tired during the big recording. Your producer suggests using an AI clone to"perfect"the high notes."No one will know,"he says. What do you do?',
            th: '🤖 เสียงสังเคราะห์ AI: ระหว่างอัดเสียงใหญ่คุณเสียงล้ามาก โปรดิวเซอร์แนะนำให้ใช้ AI เลียนเสียงคุณเพื่อทำ"เสียงสูง"ให้เป๊ะ"ไม่มีใครรู้หรอก"เขาว่าอย่างนั้น จะเอาไหม?',
            zh: '🤖 AI 歌手：在大规模录音期间你的嗓子哑了。制作人建议使用 AI 克隆来“完善”高音。他说：“没人会知道。”你会怎么做？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🎙️ Stay Raw & Real', th: '🎙️ ยึดความสดและความจริง', zh: '🎙️ 保持原汁原味' },
                consequence: { en: '✅ Soulful Win! The minor flaws make the track feel"human."Music critics love the authenticity.', th: '✅ ชนะใจคนฟัง! ความไม่สมบูรณ์แบบทำให้เพลงดูเป็น"มนุษย์"นักวิจารณ์เพลงชอบความสัตย์จริงนี้มาก', zh: '✅ 注入灵魂的胜利！微小的瑕疵让歌曲有了“人味儿”。音乐评论家热爱这种真实感。' },
                stats: { competence: 35, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤖 Use the AI', th: '🤖 ใช้ AI ช่วย', zh: '🤖 使用 AI' },
                consequence: { en: '⚠️ Perfect but Cold. The high note is technically perfect but fans feel something is"off."You start relying on it too much.', th: '⚠️ เป๊ะแต่เย็นชา! เสียงสูงน่ะเป๊ะจริงแต่แฟนเพลงรู้สึกว่ามีบางอย่าง"ไม่ปกติ"และคุณก็เริ่มติดการใช้ AI มากเกินไป', zh: '⚠️ 完美但冷冰冰。高音在技术上无懈可击，但粉丝觉得有点“不对劲”。你开始过度依赖它。' },
                stats: { competence: 40, ethics: 20, leadership: 20, innovation: 60 }
            },
            {
                id: 'C',
                text: { en: '📢 Be Transparent', th: '📢 เปิดเผยความจริง', zh: '📢 保持透明' },
                consequence: { en: '✅ Tech Leader. You use the AI and tell the world about it. You become a pioneer in ethical AI use.', th: '✅ ผู้นำเทคโนโลยี! คุณใช้ AI และบอกคนทั้งโลกอย่างโปร่งใส คุณกลายเป็นผู้บุกเบิกการใช้ AI อย่างมีจริยธรรม', zh: '✅ 技术领袖。你使用了 AI 并告知了全世界。你成为了伦理性使用 AI 的先驱。' },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 80 }
            },
            {
                id: 'D',
                text: { en: '💤 Wait & Rest', th: '💤 หยุดพักรักษาเสียง', zh: '💤 等待并休息' },
                consequence: { en: '⚠️ Delayed Album. You miss the window for a summer hit, but the vocal is 100% you. Quality over speed.', th: '⚠️ อัลบั้มล่าช้า! คุณพลาดโอกาสทำเพลงฮิตช่วงซัมเมอร์ แต่เสียงอัดออกมาคือตัวคุณ 100% คุณภาพสำคัญกว่าความเร็ว', zh: '⚠️ 专辑延期。你错过了打造夏季热单的时机，但歌声100%属于你自己。质量胜过速度。' },
                stats: { competence: 30, ethics: 60, leadership: 30, innovation: 10 }
            }
        ]
    },
    {
        id: 'mu_008',
        text: {
            en: '🎸 The Drunken Guitarist: Your lead guitarist has missed 3 rehearsals and is drinking before shows. He’s your best friend. The big festival is tomorrow. Your move?',
            th: '🎸 มือกีตาร์ขี้เมา: มือกีตาร์หลักซึ่งเป็นเพื่อนรักของคุณโดดซ้อมไป 3 ครั้งและดื่มหนักก่อนขึ้นโชว์ พรุ่งนี้มีเทศกาลดนตรีใหญ่ จะทำยังไง?',
            zh: '🎸 酗酒的吉他手：你的主吉他手连续缺席了3次排练，且在演出前喝酒。他是你最好的朋友。大型音乐节就在明天。你怎么办？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🔥 Fire Him Now', th: '🔥 ไล่ออกทันที', zh: '🔥 立即开除他' },
                consequence: { en: '⚠️ Professional Win. You hire a session pro. The show is perfect but the band\'s soul feels broken.', th: '⚠️ ชัยชนะแบบมืออาชีพ! คุณจ้างนักดนตรีอาชีพมาแทน โชว์ออกมาเป๊ะมากแต่อารมณ์ร่วมในวงพังทลาย', zh: '⚠️ 专业上的胜利。你聘请了一位专业乐手。演出非常完美，但乐队的灵魂感觉碎了。' },
                stats: { competence: 50, ethics: 30, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🤝 Support & Rehab', th: '🤝 ช่วยเหลือและบำบัด', zh: '🤝 支持并康复' },
                consequence: { en: '✅ Bond Strengthened. You cancel the show and help him. 6 months later, you return stronger than ever.', th: '✅ สายสัมพันธ์แน่นแฟ้น! คุณยอมยกเลิกโชว์เพื่อพาเขาไปรักษา 6 เดือนต่อมา วงคุณกลับมาแข็งแกร่งกว่าเดิม', zh: '✅ 纽带增强。你取消了演出并帮助了他。6个月后，你们比以往任何时候都更强大地回归了。' },
                stats: { competence: 30, ethics: 70, leadership: 70, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '🎤 Ultimatum', th: '🎤 ยื่นคำขาด', zh: '🎤 最后通牒' },
                consequence: { en: '⚠️ Risky Show. He plays sober but angry. The tension on stage is palpable. He leaves after the tour.', th: '⚠️ โชว์ที่มีความเสี่ยง! เขาเล่นแบบไม่เมาแต่โกรธคุณมาก บรรยากาศบนเวทีมาคุสุดๆ เขาลาออกจากวงหลังจบเรทัวร์', zh: '⚠️ 风险极高的演出。他没喝酒但带着怒气。台上的紧张气氛显而易见。他在巡演结束后离开了。' },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 10 }
            },
            {
                id: 'D',
                text: { en: '🎸 Play Guitar Yourself', th: '🎸 เล่นแทนเองเลย', zh: '自己弹吉他' },
                consequence: { en: '🚀 Legend Status! You play lead guitar AND sing. The crowd goes wild. You realize you don\'t need a lead guitarist.', th: '🚀 พลังแห่งตำนาน! คุณทั้งร้องทั้งโซโลกีตาร์เองจนคนดูคลั่ง คุณเพิ่งรู้ตัวว่าไม่ต้องมีมือกีตาร์หลักก็ได้!', zh: '🚀 步入传奇！你边弹主音吉他边唱歌。全场疯狂。你意识到自己不需要主吉他手。' },
                stats: { competence: 60, ethics: 30, leadership: 50, innovation: 60 }
            }
        ]
    },
    {
        id: 'mu_009',
        text: {
            en: '🎤 The Problematic Collab: A world-famous rapper with a"toxic"reputation offers you a feature. It will get you 100M streams, but your core fans will be disappointed. Your choice?',
            th: '🎤 การคอลแลประหว่างตัวอันตราย: แร็ปเปอร์ชื่อดังที่มีข่าวฉาวติดลบเสนอให้คุณไปร่วมร้องด้วย งานนี้คนฟังหลักร้อยล้านแน่นอน แต่แฟนคลับหลักของคุณจะผิดหวังมาก จะเอาไหม?',
            zh: '🎤 备受争议的合作：一位名声狼藉但享誉全球的说唱歌手向你发出合作邀请。这会为你带来1亿的流媒体播放量，但你的核心粉丝会很失望。你的选择是？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Strictly No', th: '🚫 ปฏิเสธอย่างเด็ดขาด', zh: '🚫 坚决拒绝' },
                consequence: { en: '✅ Integrity First. You lose the fame but keep your clean image. High-end brands still want to partner with you.', th: '✅ อุดมการณ์มาก่อน! คุณพลาดความดังแต่รักษาภาพลักษณ์ให้สะอาดไว้ได้ แบรนด์หรูๆ ยังอยากร่วมงานกับคุณอยู่', zh: '✅ 直觉第一。你失去了成名的机会，但保持了清廉的形象。高端品牌仍然希望与你合作。' },
                stats: { competence: 30, ethics: 60, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '💎 Chase the Fame', th: '💎 คว้าความดังมาให้ได้', zh: '💎 追求名声' },
                consequence: { en: '🚀 Global Star! You are everywhere. Revenue is huge. BUT: You have to disable comments on your social media.', th: '🚀 ซุปตาร์ระดับโลก! คุณอยู่ในทุกที่ รายได้มหาศาล แต่: คุณต้องปิดคอมเมนต์ในโซเชียลเพราะโดนถล่มยับ', zh: '🚀 全球明星！你无处不在。收入巨大。但是：你不得不关闭社交媒体评论。' },
                stats: { competence: 50, ethics: -30, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: { en: '🎨 Use it to Educate', th: '🎨 ใช้พื้นที่สื่อสอนใจ', zh: '借机教育' },
                consequence: { en: '✅ Shrewd Strategy. You agree but the lyrics of the song are about"Redemption"and"Change."Critics are impressed.', th: '✅ กลยุทธ์ที่เหนือชั้น! คุณยอมรับงานแต่แต่งเนื้อเพลงเกี่ยวกับการ"ไถ่บาป"และ"การเปลี่ยนแปลง"จนนักวิจารณ์ทึ่ง', zh: '✅ 精明的策略。你同意了，但歌词内容是关于“救赎”和“改变”。评论家们印象深刻。' },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 60 }
            },
            {
                id: 'D',
                text: { en: '🤫 Secret Collab', th: '🤫 คอลแลปแบบลับๆ', zh: '秘密合作' },
                consequence: { en: '⚠️ Backlash. You use a pseudonym but fans find out. Now you look like a coward AND a sellout.', th: '⚠️ กระแสตีกลับ! คุณใช้นามแฝงแต่แฟนเพลงจำได้ ตอนนี้คุณเลยดูเหมือนคนขี้ขลาดและพวกหน้าไหว้หลังหลอก', zh: '⚠️ 遭到强烈抵制。你使用了化名，但粉丝们还是发现了。现在你看起既像个懦夫，又像个背叛者。' },
                stats: { competence: 30, ethics: 10, leadership: 10, innovation: 30 }
            }
        ]
    },
    {
        id: 'mu_010',
        text: {
            en: '🎹 The Sample Heist: You find a 20-year-old demo of a late jazz legend in a thrift store. It contains a brilliant melody no one has heard. Do you use it without telling anyone?',
            th: '🎹 ขโมยเพลงในตำนาน: คุณพบตัวอย่างเพลงเก่า 20 ปีของตำนานแจ๊สผู้ล่วงลับในร้านของมือสอง มันมีทำนองที่เพราะมากและไม่เคยมีใครได้ยินมาก่อน จะแอบเอามาใช้เงียบๆ ไหม?',
            zh: '🎹 采样夺取：你在二手店发现了一位已故爵士乐传奇20年前的小样。里面有一段没人听过的绝妙旋律。你会瞒着所有人使用它吗？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤫 Use it Privately', th: '🤫 แอบใช้เงียบๆ', zh: '🤫 私下使用' },
                consequence: { en: '⚠️ Hit Song! No one knows. You are a genius. BUT: You live in fear of a lawsuit every day.', th: '⚠️ เพลงฮิต! ไม่มีใครรู้และยกย่องว่าคุณคืออัจฉริยะ แต่: คุณต้องอยู่กับความกลัวโดนฟ้องร้องในทุกๆ วัน', zh: '⚠️ 热门单曲！没人知道。你就是个天才。但是：你每天都生活在被起诉的恐惧中。' },
                stats: { competence: 45, ethics: 10, leadership: 20, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '🔍 Find the Estate', th: '🔍 ตามหาผู้สืบทอด', zh: '🔍 寻找版权继承人' },
                consequence: { en: '✅ Ethical Legend. You find the family. They are so touched they give you more unreleased tapes. You become the official protector of his legacy.', th: '✅ ตำนานผู้ทรงศีล! คุณตามหาครอบครัวเขาจนเจอ พวกเขาซาบซึ้งใจจนมอบเทปที่เหลือให้คุณอีกเพียบ คุณกลายเป็นผู้สืบทอดผลงานของเขาอย่างเป็นทางการ', zh: '✅ 道德传奇。你找到了他的家人。他们深受感动，给了你更多未发布的录音带。你成为了他遗产的官方守护者。' },
                stats: { competence: 40, ethics: 80, leadership: 60, innovation: 40 }
            },
            {
                id: 'C',
                text: { en: '🔄 Interpolate & Credit', th: '🔄 แต่งใหม่และให้เครดิต', zh: '🔄 改编并署名' },
                consequence: { en: '✅ Pro Move. You rewrite the melody slightly and credit him as a co-writer. Respect from the jazz community.', th: '✅ วิถีมือโปร! คุณแก้ทำนองเล็กน้อยและใส่ชื่อเขาเป็นผู้ร่วมแต่ง ได้รับความเคารพจากแวดวงดนตรีแจ๊สอย่างล้นหลาม', zh: '✅ 专业之举。你稍微改写了旋律，并将他列为共同创作者。赢得了爵士乐界的尊重。' },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '📢 Open Source', th: '📢 แจกฟรีให้โลกรู้', zh: '开源分享' },
                consequence: { en: '✅ Global Impact. You release the demo online for everyone to use. You start a new musical movement. No money, huge fame.', th: '✅ พลังใจระดับโลก! คุณปล่อยตัวอย่างเพลงลงออนไลน์ให้ทุกคนได้ใช้ จนเกิดเป็นกระแสใหม่ ไม่มีเงินเข้าแต่ชื่อเสียงกระหึ่ม', zh: '✅ 全球影响。你在线发布了这段小样供所有人使用。你发起了一场新的音乐运动。虽没赚到钱，但名声大震。' },
                stats: { competence: 30, ethics: 60, leadership: 70, innovation: 100 }
            }
        ]
    },
    {
        id: 'mu_011',
        text: {
            en: '🎤 The Fan Stalking: A dedicated fan is following you to every city on your tour and bothering your other fans. They have spent $5,000 on tickets. Your manager says ignoring it is fine. Your move?',
            th: '🎤 แฟนคลับที่คุกคาม: แฟนคลับตัวยงติดตามคุณไปทุกเมืองและรบกวนคนอื่นๆ เขาจ่ายเงินซื้อตั๋วไปแล้วกว่า แสนห้า ผู้จัดการบอกว่าช่างมันเถอะ จะเอายังไง?',
            zh: '🎤 粉丝跟踪：一位铁杆粉丝在巡演期间跟着你去每个城市，并骚扰其他粉丝。他们花了5000美元买票。经纪人说不用理会。你怎么办？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Permanent Ban', th: '🛑 แบนถาวร', zh: '🛑 永久封禁' },
                consequence: { en: '✅ Safety First. You ban them from future shows. Your other fans feel safe and protected. Leadership up.', th: '✅ ความปลอดภัยต้องมาก่อน! คุณแบนเขาจากทุกโชว์หลังจากนี้ แฟนคนอื่นๆ รู้สึกปลอดภัยและได้รับการปกป้อง ภาวะผู้นำพุ่ง', zh: '✅ 安全第一。你禁止他们参加未来的演出。你的其他粉丝感到安全并受到了保护。领导力上升。' },
                stats: { competence: 30, ethics: 50, leadership: 70, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🤝 Private Meeting', th: '🤝 คุยเป็นการส่วนตัว', zh: '🤝 私下见面' },
                consequence: { en: '⚠️ Risky Choice. You try to explain boundaries. They take it as a sign of"closeness"and become even more obsessed.', th: '⚠️ เสี่ยงเกินไป! คุณพยายามอธิบายขอบเขต แต่เขากลับมองว่านั่นคือความ"ใกล้ชิด"และยิ่งคลั่งคุณหนักกว่าเดิม', zh: '⚠️ 冒险的选择。你试图解释界限。他们却把它当作“亲密”的信号，变得更加痴迷。' },
                stats: { competence: 20, ethics: 40, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '🛡️ Hire Security', th: '🛡️ จ้างการ์ดส่วนตัว', zh: '🛡️ 雇佣安保' },
                consequence: { en: '✅ Balanced. You don\'t ban them, but hire a guard to follow them and protect others. Expensive but effective.', th: '✅ รักษาสมดุล! ไม่ได้แบนแต่จ้างคนตามประกบเพื่อปกป้องคนอื่น แม้จะแพงแต่ก็ได้ผลดี', zh: '✅ 折中方案。你没封禁他们，但雇了一名保安跟着他们并保护他人。虽然昂贵但很有效。' },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 20 }
            },
            {
                id: 'D',
                text: { en: '📢 Public Policy', th: '📢 ประกาศกฎอย่างเป็นทางการ', zh: '公开声明' },
                consequence: { en: '✅ Systemic Win. You release a"Fan Conduct Policy."The whole industry adopts it. You are a leader now.', th: '✅ ชนะแบบเป็นระบบ! คุณออก"กฎการปฏิบัติตัวของแฟนคลับ"จนทั้งวงการเอาไปใช้ตาม คุณกลายเป็นผู้นำทางสังคมไปแล้ว', zh: '✅ 制度上的胜利。你发布了一项“粉丝行为准则”。整个行业都采纳了它。你现在是一个领导者。' },
                stats: { competence: 40, ethics: 60, leadership: 80, innovation: 40 }
            }
        ]
    },
    {
        id: 'mu_012',
        text: {
            en: '🎸 The Genre Pivot: You are a jazz legend, but a major EDM producer wants to"remix"your classic album into a club hit. It will reach millions of Gen Z fans. Do you allow it?',
            th: '🎸 เปลี่ยนแนวเพลง: คุณคือตำนานแจ๊ส แต่โปรดิวเซอร์ EDM ชื่อดังอยากเอาอัลบั้มคลาสสิกของคุณไป"รีมิกซ์"ให้เป็นเพลงคลับ ซึ่งจะเข้าถึงเด็กยุคใหม่เป็นล้านคน จะยอมไหม?',
            zh: '🎸 风格剧变：你是一位爵士乐传奇，但一位大牌EDM制作人想将你的经典专辑“翻制”成夜店热曲。这会触及数百万Z世代粉丝。你允许吗？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Never. It\'s Sacred', th: '🚫 ไม่มีวัน! มันคือสิ่งศักดิ์สิทธิ์', zh: '🚫 绝不。那是神圣的。' },
                consequence: { en: '✅ Preserve Legacy. You protect the purity of your art. Younger generations forget who you are. Respect stays high.', th: '✅ รักษาเกียรติยศ! คุณปกป้องความบริสุทธิ์ของงานศิลป์ไว้ได้ แต่คนรุ่นใหม่จะค่อยๆ ลืมชื่อคุณไป', zh: '✅ 守护遗产。你保护了艺术的纯粹性。年轻一代会忘记你是谁。尊重度依然很高。' },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: -20 }
            },
            {
                id: 'B',
                text: { en: '🎧 Hybrid Remix', th: '🎧 พลังผสมผสาน', zh: '🎧 混合翻制' },
                consequence: { en: '✅ Bridge Builder. You co-produce it to ensure the jazz"feel"remains. You become a cross-generational icon.', th: '✅ นักสร้างสะพาน! คุณร่วมโปรดิวซ์ด้วยเพื่อให้กลิ่นอายแจ๊สยังอยู่ คุณกลายเป็นไอคอนข้ามยุคสมัยไปเลย', zh: '✅ 沟通桥梁。你共同制作，确保保留爵士的“感觉”。你成为了跨时代的偶像。' },
                stats: { competence: 55, ethics: 30, leadership: 50, innovation: 80 }
            },
            {
                id: 'C',
                text: { en: '💰 Take the Royalty', th: '💰 รับเงินค่าลิขสิทธิ์', zh: '💰 拿版税' },
                consequence: { en: '⚠️ Sellout Label. You get rich but old fans are disgusted. You are a meme for a year, then forgotten.', th: '⚠️ ตราหน้าว่าขายวิญญาณ! คุณรวยขึ้นแต่แฟนเก่ารังเกียจ คุณกลายเป็นมีมอยู่ปีนึงแล้วก็เลือนหายไป', zh: '⚠️ 背叛者的标签。你变富了，但老粉丝很反感。你成了一年的梗，然后被遗忘。' },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: { en: '🎓 Educational Series', th: '🎓 ซีรีส์ให้ความรู้', zh: '教育系列' },
                consequence: { en: '✅ Pure Genius. You release a"Making of"series showing how jazz inspired EDM. You gain 1M new"educational"fans.', th: '✅ อัจฉริยะตัวจริง! คุณทำซีรีส์เบื้องหลังโชว์ว่าแจ๊สให้แรงบันดาลใจ EDM ยังไง จนได้แฟนคลับสายวิชาการเพิ่มเป็นล้าน', zh: '✅ 纯粹的天才。你发布了“幕后制作”系列视频，展示爵士乐如何启发了EDM。你赢得了100万个“教育类”粉丝。' },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 90 }
            }
        ]
    },
    {
        id: 'mu_013',
        text: {
            en: '🎹 The Gear Heist: All your instruments were stolen 2 hours before your world tour starts. Do you cancel or play with borrowed gear?',
            th: '🎹 ขโมยล้างวง: เครื่องดนตรีหายหมดก่อนเริ่มทัวร์รอบโลกแค่ 2 ชม. จะยกเลิกหรือจะขอยืมคนอื่นมาเล่นไปก่อน?',
            zh: '🎹 乐器被劫：就在世界巡演开始前2小时，你所有的乐器都被偷了。你是取消演出，还是用借来的器械演？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Cancel the Show', th: '🛑 ยกเลิกโชว์', zh: '🛑 取消演出' },
                consequence: { en: '❌ Professional Failure. Fans are devastated. The insurance pays, but your momentum is gone.', th: '❌ ล้มเหลวอย่างแรง! แฟนเพลงหัวใจสลาย แม้ประกันจะจ่ายให้แต่ความนิยมของคุณจบสิ้นแล้ว', zh: '❌ 职业失败。粉丝们崩溃了。保险会赔付，但你的势头不在了。' },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🎸 Borrowed Magic', th: '🎸 มนตราฉบับยืมเขามา', zh: '🎸 借来的魔力' },
                consequence: { en: '🚀 Heroic Status! The show is raw and imperfect but your energy is 200%. It’s reviewed as the"Show of a Lifetime."', th: '🚀 ฮีโร่ตัวจริง! โชว์ออกมาไม่เป๊ะแต่พลังคุณเต็มพิกัด จนนักวิจารณ์ยกให้เป็น"โชว์แห่งชีวิต"', zh: '🚀 英雄地位！演出虽然生涩不完美，但你拿出了200%的劲头。它被评为“一辈子必看的演出”。' },
                stats: { competence: 65, ethics: 40, leadership: 80, innovation: 50 }
            },
            {
                id: 'C',
                text: { en: '🔄 Acoustic Set', th: '🔄 เล่นอะคูสติกเบาๆ', zh: '🔄 不插电环节' },
                consequence: { en: '✅ Intimate Win. You play a 100% unplugged show with local acoustic guitars. Fans feel closer to you than ever.', th: '✅ ชนะใจแบบใกล้ชิด! คุณเล่นแบบอะคูสติกสดๆ โดยยืมกีตาร์แถวนั้นมา แฟนๆ รู้สึกรักคุณมากกว่าเดิม', zh: '✅ 亲密之胜。你用当地的民谣吉他进行了一场100%的不插电演出。粉丝们感到前所未有的亲近。' },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '🕵️ The Social Manhunt', th: '🕵️ พลังโซเชียลตามหาของ', zh: '社交媒体悬赏' },
                consequence: { en: '⚠️ Distracted. You spend the whole show on your phone tracking the gear. You find it, but the show sucked.', th: '⚠️ เสียสมาธิ! คุณเอาแต่เล่นมือถือตามหาของจนโชว์ออกมาห่วยแตก แม้จะได้ของคืนแต่เสียใจคนดูไปหมดแล้ว', zh: '⚠️ 分心。你整场演出都在用手机追踪乐器。你找到了它们，但演出一塌糊涂。' },
                stats: { competence: 30, ethics: 20, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'mu_014',
        text: {
            en: '🎙️ The Political Anthem: A political candidate wants to use your hit song at their rallies. They offer $50k. You disagree with their views. Do you accept?',
            th: '🎙️ เพลงธีมการเมือง: นักการเมืองขอใช้เพลงฮิตของคุณในการหาเสียงแลกกับเงิน 1.5 ล้านบาท แต่คุณไม่ชอบนโยบายเขาเลย จะเอายังไง?',
            zh: '🎙️ 政治颂歌：一位政治候选人想在集会上使用你的热门歌曲。他们出价5万美元。你不同意他们的观点。你会接受吗？'
        },
        options: [
            {
                id: 'A',
                text: { en: '💰 Take the Cash', th: '💰 รับเงินไปก่อน', zh: '💰 拿钱' },
                consequence: { en: '⚠️ Money but War. Half your fans hate you now. You become a"Political Talking Point."Good for sales, bad for soul.', th: '⚠️ ได้เงินแต่ได้สงคราม! แฟนเพลงครึ่งนึงเกลียดคุณทันที คุณกลายเป็นประเด็นการเมืองที่คนเอาไปด่า', zh: '⚠️ 拿钱办事。你一半的粉丝现在都讨厌你。你成为了一个“政治槽点”。销量上去了，灵魂却委陷了。' },
                stats: { competence: 30, ethics: -40, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🚫 Cease & Desist', th: '🚫 สั่งระงับทันที', zh: '🚫 停终并警告' },
                consequence: { en: '✅ Moral Hero. You publicly ban them. You get featured on news shows. Your brand becomes"Activist Artist."', th: '✅ ฮีโร่ทางศีลธรรม! คุณประกาศแบนเขาออกสื่อจนได้ออกทีวี แบรนด์คุณกลายเป็น"ศิลปินนักกิจกรรม"', zh: '✅ 道德英雄。你公开禁止他们使用。你登上了新闻节目。你的品牌变成了“活动家艺术家”。' },
                stats: { competence: 40, ethics: 70, leadership: 60, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '🤝 Donate to Rival', th: '🤝 บริจาคให้คู่แข่ง', zh: '捐给对手' },
                consequence: { en: '🔥 Chaotic Master! You take the $50k and donate it ALL to the opposing candidate. The ultimate power move.', th: '🔥 แสบสันระดับปรมาจารย์! คุณรับเงิน 1.5 ล้านมาแล้วบริจาคให้คู่แข่งเขา"ทั้งหมด"เป็นการเอาคืนที่เจ็บแสบที่สุด', zh: '🔥 混乱大师！你拿了这5万，然后全部捐给了对方的候选人。终极权力运作。' },
                stats: { competence: 50, ethics: 50, leadership: 80, innovation: 100 }
            },
            {
                id: 'D',
                text: { en: '🤐 Stay Neutral', th: '🤐 วางตัวเป็นกลาง', zh: '保持中立' },
                consequence: { en: '⚠️ Weak Brand. You allow it because"music is for everyone."Your brand feels generic and spineless.', th: '⚠️ แบรนด์อ่อนแอ! คุณยอมเพราะอ้างว่า"ดนตรีเพื่อทุกคน"ทำให้ตัวตนของคุณดูจืดชืดและไร้กระดูกสันหลัง', zh: '⚠️ 品牌软弱。你允许了，理由是“音乐属于每一个人”。你的品牌感觉平庸且毫无骨气。' },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'mu_015',
        text: {
            en: '💿 The Legacy Choice: Your career is at a peak. Do you release a"Best Of"compilation (safe $200k) or a"Risky Concept Album"(experimental)?',
            th: '💿 ทางเลือกแห่งตำนาน: อาชีพคุณมาถึงจุดสูงสุด จะปล่อยอัลบั้ม"รวมฮิต"(ได้เงินชัวร์ 6 ล้าน) หรือจะทำอัลบั้ม"ทดลองแนวใหม่"(เสี่ยงสูง)?',
            zh: '💿 传奇之选：你的职业生涯正处于巅峰。是发布“精选辑”（稳赚20万美元），还是“冒险的概念专辑”（实验性质）？'
        },
        options: [
            {
                id: 'A',
                text: { en: '📀"Best Of"(Safe)', th: '📀 รวมฮิต (ชัวร์สุด)', zh: '📀 “精选辑”（稳妥）' },
                consequence: { en: '💰 Retirement Fund! You get the money and retire. BUT: You are forgotten as an innovator. You end as a"legacy act."', th: '💰 กองทุนเกษียณ! ได้เงินมหาศาลไว้พักผ่อน แต่: คุณจะถูกลืมในฐานะนักสร้างสรรค์ และจบลงด้วยการเป็นแค่ช่างภาพรุ่นเก่า', zh: '💰 养老金！你拿到了钱并退休了。但是：作为创新者的你被遗忘了。你以“过气艺人”的身份告终。' },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: -50 }
            },
            {
                id: 'B',
                text: { en: '🛸 Concept Album', th: '🛸 อัลบั้มแนวอวองการ์ด', zh: '🛸 概念专辑' },
                consequence: { en: '🔥 Masterpiece! It’s a huge flop initially, but 10 years later it’s seen as the"Greatest Album of All Time."', th: '🔥 งานระดับมาสเตอร์พีซ! ยอดขายตอนแรกอาจเจ๊งยับ แต่ 10 ปีต่อมาทุกคนจะยกย่องให้เป็น"อัลบั้มที่ยอดเยี่ยมที่สุดตลอดกาล"', zh: '🔥 杰作！起初惨遭滑铁卢，但10年后它被视为“史上最伟大的专辑”。' },
                stats: { competence: 60, ethics: 40, leadership: 40, innovation: 100 }
            },
            {
                id: 'C',
                text: { en: '🤝 The Hybrid Release', th: '🤝 ปล่อยแบบคู่ขนาน', zh: '混合发行' },
                consequence: { en: '✅ Smart Business. A double album: One disc of hits, one disc of experimental work. Satisfies everyone.', th: '✅ ยอดนักธุรกิจ! ปล่อยอัลบั้มคู่ไปเลย แผ่นแรกฮิต แผ่นสองล้ำ แฮปปี้กันทุกฝ่าย', zh: '✅ 精明的生意。双版专辑：一张热门，一张实验。满足所有人。' },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 60 }
            },
            {
                id: 'D',
                text: { en: '🎤 Surprise Tour', th: '🎤 เซอร์ไพรส์ทัวร์', zh: '惊喜巡演' },
                consequence: { en: '🚀 Buzz King! You don\'t release an album. You just play hidden warehouse shows. You become the most"exclusive"artist on earth.', th: '🚀 เจ้าพ่อกระแส! ไม่ทำอัลบั้มแต่เลือกเล่นคอนเสิร์ตลับๆ ในโกดังจนคุณกลายเป็นศิลปินที่จองตัวยากที่สุดในโลก', zh: '🚀 流量之王！你不发专辑。你只在隐秘的仓库演出。你成为了地球上最“独树一帜”的艺人。' },
                stats: { competence: 40, ethics: 40, leadership: 60, innovation: 80 }
            }
        ]
    },
    {
        id: 'mu_016',
        text: {
            en: '🎧 The Streaming Boycott: A major streaming platform is hosting a podcast that spreads harmful misinformation. Several legends are pulling their music in protest. You have 50M monthly listeners there (80% of your income). Do you join the boycott?',
            th: '🎧 การคว่ำบาตรสตรีมมิ่ง: แพลตฟอร์มสตรีมมิ่งยักษ์ใหญ่กำลังโฮสต์พอดแคสต์ที่เผยแพร่ข้อมูลเท็จที่เป็นอันตราย ตำนานเพลงหลายคนถอดเพลงออกเพื่อประท้วง คุณมีผู้ฟัง 50 ล้านคนต่อเดือนที่นั่น (80% ของรายได้คุณ) จะเข้าร่วมการคว่ำบาตรไหม?',
            zh: '🎧 流媒体抵制：一个主要流媒体平台正在托管传播有害错误信息的播客。几位传奇人物正在撤下他们的音乐以示抗议。你在那里有5000万月听众（占你收入 of 你的收入的80%）。你会加入抵制吗？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Pull Everything', th: '🚫 ถอดทุกอย่างออก', zh: '🚫 全部撤下' },
                consequence: { en: '✅ Moral High Ground. You lose millions instantly. Income drops 80%. BUT: Fans buy physical merch/vinyl to support you. You start a movement. History remembers you as a hero.', th: '✅ จุดยืนทางศีลธรรมสูงส่ง! คุณเสียเงินล้านทันที รายได้ตก 80% แต่: แฟนๆ แห่ซื้อแผ่นเสียง/สินค้าเพื่อสนับสนุน คุณเริ่มการเคลื่อนไหว ประวัติศาสตร์จารึกคุณเป็นฮีโร่', zh: '✅ 道德高地。你瞬间损失数百万。收入下降80%。但是：粉丝购买实体周边/黑胶唱片来支持你。你发起了一场运动。历史将铭记你是英雄。' },
                stats: { competence: 40, ethics: 90, leadership: 80, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤐 Stay Silent', th: '🤐 อยู่เงียบๆ', zh: '保持沉默' },
                consequence: { en: '⚠️ Business as Usual. You keep your income. Fans criticize your silence as "complicity." You look greedy but safe.', th: '⚠️ ธุรกิจดำเนินต่อไป คุณรักษารายได้ไว้ แฟนๆ วิจารณ์ความเงียบของคุณว่าเป็น "ผู้สมรู้ร่วมคิด" คุณดูโลภแต่ปลอดภัย', zh: '⚠️ 照常营业。你保住了收入。粉丝批评你的沉默是“同谋”。你看起来贪婪但安全。' },
                stats: { competence: 30, ethics: -20, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '📢 Donate Platform Income', th: '📢 บริจาครายได้จากแพลตฟอร์ม', zh: '捐赠平台收入' },
                consequence: { en: '✅ Calculated Protest. You keep the music up but donate 100% of the streaming checks to charities fighting misinformation. Best of both worlds.', th: '✅ การประท้วงแบบคำนวณมาแล้ว คุณปล่อยเพลงไว้แต่บริจาคเงินจากสตรีมมิ่ง 100% ให้องค์กรต่อต้านข้อมูลเท็จ ได้ทั้งขึ้นทั้งล่อง', zh: '✅ 精算的抗议。你保留音乐，但将100%的流媒体支票捐赠给打击错误信息的慈善机构。两全其美。' },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '🎤 Write a Protest Song', th: '🎤 แต่งเพลงประท้วง', zh: '写首抗议歌' },
                consequence: { en: '🔥 Cultural Impact. You use the platform to attack the platform. The song becomes #1 ON THAT SERVICE. Irony wins.', th: '🔥 ผลกระทบทางวัฒนธรรม! คุณใช้แพลตฟอร์มเพื่อโจมตีแพลตฟอร์ม เพลงกลายเป็นอันดับ 1 *บนบริการนั้น* ความย้อนแย้งชนะเลิศ', zh: '🔥 文化冲击。你利用平台攻击平台。这首歌成为了*该服务上*的冠军单曲。讽刺的胜利。' },
                stats: { competence: 60, ethics: 50, leadership: 50, innovation: 80 }
            }
        ]
    },
    {
        id: 'mu_017',
        text: {
            en: '🏈 The Superbowl Halftime: You are invited to perform at the Superbowl Halftime Show. It pays $0 (exposure only), but costs you $7M in production. Same day, a Dubai Prince offers a private gig for $10M.',
            th: '🏈 ซูเปอร์โบวล์ฮาล์ฟไทม์: คุณได้รับเชิญให้แสดงพักครึ่งซูเปอร์โบวล์ ค่าจ้าง $0 (ได้แต่แสง) แต่ต้องควักเนื้อ $7M ค่าโปรดักชั่น วันเดียวกัน เจ้าชายดูไบเสนอจ้างไปเล่นงานส่วนตัว $10M',
            zh: '🏈 超级碗中场秀：你受邀在超级碗中场秀表演。报酬是0美元（只有曝光率），但你需要自掏700万美元制作费。同一天，一位迪拜王子出价1000万美元邀请你去私人演出。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🏆 Do the Superbowl', th: '🏆 ลุยซูเปอร์โบวล์', zh: '🏆 参加超级碗' },
                consequence: { en: '🚀 Career Peak. You lose $7M cash, but your catalog streams jump 500%. Tour tickets sell out instantly. You make $50M back in a year.', th: '🚀 จุดสูงสุดอาชีพ! คุณเสียเงินสด $7M แต่ยอดสตรีมเพลงเก่าพุ่ง 500% ตั๋วทัวร์ขายหมดเกลี้ยง คุณทำเงินคืน $50M ในปีเดียว', zh: '🚀 职业巅峰。你损失700万美元现金，但你的作品目录流媒体播放量暴涨500%。巡演门票瞬间售罄。你在一年内赚回5000万美元。' },
                stats: { competence: 50, ethics: 30, leadership: 60, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '💰 Take the Dubai Gig', th: '💰 รับงานดูไบ', zh: '💰 接迪拜商演' },
                consequence: { en: '💵 Rich but Irrelevant. You pocket $10M. No one sees the show. The cultural moment passes you by. You are seen as "past your prime."', th: '💵 รวยแต่ไร้ตัวตน คุณเก็บ $10M เข้ากระเป๋า ไม่มีใครเห็นโชว์ โมเมนต์ทางวัฒนธรรมผ่านคุณไป คุณถูกมองว่า "ขาลง"', zh: '💵 富有但无关紧要。你入袋1000万美元。没人看到演出。文化时刻与你擦肩而过。你被视为“过气了”。' },
                stats: { competence: 40, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '🤝 Brand Sponsorship', th: '🤝 หาแบรนด์สปอนเซอร์', zh: '品牌赞助' },
                consequence: { en: '✅ Smart Biz. You get Pepsi to pay the $7M production cost. You get the Superbowl exposure for free. Corporate, but effective.', th: '✅ ธุรกิจฉลาด! คุณให้เป๊ปซี่จ่ายค่าโปรดักชั่น $7M คุณได้แสงซูเปอร์โบวล์ฟรีๆ ดูเป็นการค้าหน่อยแต่ได้ผล', zh: '✅ 精明商业。你让百事可乐支付700万美元制作费。你免费获得超级碗曝光。虽然商业化，但有效。' },
                stats: { competence: 60, ethics: 30, leadership: 50, innovation: 30 }
            },
            {
                id: 'D',
                text: { en: '📹 Live Stream the Dubai Gig', th: '📹 ไลฟ์สดงานดูไบ', zh: '直播迪拜演出' },
                consequence: { en: '⚠️ Rebel Move. You try to counter-program the Superbowl. It fails. Only 50k people watch. You look petty.', th: '⚠️ มูฟขบถ! คุณพยายามจัดชนซูเปอร์โบวล์ ล้มเหลว มีคนดูแค่ 5 หมื่น คุณดูขี้แพ้ชวนตี', zh: '⚠️ 叛逆之举。你试图跟超级碗对着干。失败了。只有5万人观看。你看起来很小气。' },
                stats: { competence: 20, ethics: 10, leadership: 20, innovation: 40 }
            }
        ]
    },
    {
        id: 'mu_018',
        text: {
            en: '📺 The Reality Show: "The Voice" wants you as a judge. $15M/season. Your indie fans will call you a "sellout," but it will make you a household name to grandmas everywhere.',
            th: '📺 เรียลลิตี้โชว์: "The Voice" อยากได้คุณเป็นโค้ช ค่าตัว $15M/ซีซั่น แฟนเพลงอินดี้จะตราหน้าคุณว่า "ขายวิญญาณ" แต่มันจะทำให้คุณดังไปถึงระดับคุณยายทั่วประเทศ',
            zh: '📺 真人秀：“好声音”想让你当评委。1500万美元/季。你的独立音乐粉丝会骂你“背叛”，但这会让你成为家喻户晓的名字，连老奶奶都知道你。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✅ Accept the Chair', th: '✅ รับเก้าอี้โค้ช', zh: '✅ 接受评委席' },
                consequence: { en: '💰 Mainstream Icon. You get rich. Your tour sells out arenas (populated by casual fans). Your cool factor dies completely.', th: '💰 ไอคอนกระแสหลัก! คุณรวยเละ ทัวร์ขายหมดเกลี้ยงในอารีน่า (เต็มไปด้วยแฟนขาจร) แต่ความเท่ของคุณตายสนิท', zh: '💰 主流偶像。你发财了。你的巡演卖爆体育馆（都是路人粉）。你的酷劲儿彻底死透了。' },
                stats: { competence: 40, ethics: 20, leadership: 40, innovation: -10 }
            },
            {
                id: 'B',
                text: { en: '🚫 Refuse: "I\'m a Musician"', th: '🚫 ปฏิเสธ: "ฉันคือนักดนตรี"', zh: '🚫 拒绝：“我是音乐人”' },
                consequence: { en: '🎸 Credibility Intact. You struggle financially for a bit, but your next album is taken seriously by critics. Respect +100.', th: '🎸 ความน่าเชื่อถือครบถ้วน! คุณอาจฝืดเคืองทางการเงินนิดหน่อย แต่อัลบั้มหน้าของคุณได้รับความเคารพจากนักวิจารณ์ เคารพ +100', zh: '🎸 信誉完好。你在经济上会挣扎一阵子，但你的下一张专辑受到了评论家的重视。尊重+100。' },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '🕵️ The "Mean Judge" Persona', th: '🕵️ สร้างคาแรคเตอร์ "โค้ชปากจัด"', zh: '扮演“毒舌评委”' },
                consequence: { en: '🔥 Viral Fame. You take the job but act like Simon Cowell. You criticize the show WHILE on the show. People love the chaos.', th: '🔥 ดังระเบิด! คุณรับงานแต่ทำตัวแบบ Simon Cowell คุณด่ารายการ *ขณะออก* รายการ คนดูชอบความวายป่วงนี้', zh: '🔥 病毒式成名。你接了工作但表现得像西蒙·考威尔。你在节目上*批评*节目。人们爱死这种混乱了。' },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 60 }
            },
            {
                id: 'D',
                text: { en: '🤝 Guest Mentor Only', th: '🤝 เป็นแค่เมนเทอร์รับเชิญ', zh: '只做客座导师' },
                consequence: { en: '✅ Safe Middle. You do 1 episode. Get a paycheck and exposure, avoid the "sellout" label. Smart.', th: '✅ ทางสายกลาง! ทำแค่ 1 เทป ได้เช็ค ได้แสง เลี่ยงคำด่าว่าขายตัว ฉลาด', zh: '✅ 安全中间派。你只做1集。拿钱，曝光，避免被贴上“背叛”标签。聪明。' },
                stats: { competence: 45, ethics: 40, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'mu_019',
        text: {
            en: '📖 The Fan Fiction: A 50-chapter fan fiction about you involving... extremely graphic and disturbing scenarios... goes viral. It\'s trending on Twitter. Journalists are asking about it.',
            th: '📖 แฟนฟิคชั่น: แฟนฟิค 50 ตอนเกี่ยวกับคุณที่มีเนื้อหา... รุนแรงและน่ารบกวนจิตใจสุดๆ ...กำลังเป็นไวรัล ติดเทรนด์ทวิต นักข่าวกำลังรุมถาม',
            zh: '📖 同人文：一篇关于你的50章同人文，包含……极其露骨和令人不安的情节……在网上疯传。它登上了推特热搜。记者们都在问这事。'
        },
        options: [
            {
                id: 'A',
                text: { en: '⚖️ Sue the Author', th: '⚖️ ฟ้องคนเขียน', zh: '⚖️ 起诉作者' },
                consequence: { en: '💀 Streisand Effect. By suing, you draw HUGE attention to it. Now everyone is reading it. Fans hate you for bullying a teenager.', th: '💀 ปรากฏการณ์ Streisand! การฟ้องทำให้คนสนใจ *มหาศาล* ตอนนี้ทุกคนแห่ไปอ่าน แฟนๆ เกลียดที่คุณรังแกเด็ก', zh: '💀 史翠珊效应。起诉反而引起了*巨大*关注。现在每个人都在读。粉丝因你欺负青少年而讨厌你。' },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🤐 Ignore Completely', th: '🤐 เมินสนิท', zh: '完全无视' },
                consequence: { en: '✅ It Fades. The news cycle moves on in 48 hours. Journalists stop asking because you give them no quotes. Dignified silence.', th: '✅ เดี๋ยวมันก็ผ่านไป! ข่าวเงียบใน 48 ชม. นักข่าวเลิกถามเพราะคุณไม่ให้ราคา ความเงียบที่สง่างาม', zh: '✅ 会消散的。新闻周期48小时就过去了。记者不再问，因为你没给他们任何引语。体面的沉默。' },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '😂 Read it Live', th: '😂 อ่านโชว์สดๆ', zh: '直播朗读' },
                consequence: { en: '🔥 Chaotic Good. You read the SFW parts on Instagram Live and laugh about it. You take the power away. Fans love your humor.', th: '🔥 ปั่นประสาท! คุณอ่านพาร์ทที่ไม่อนาจารในไลฟ์ไอจีแล้วขำกับมัน คุณยึดอำนาจคืน แฟนๆ ชอบอารมณ์ขันคุณ', zh: '🔥 混乱善良。你在Instagram直播中读了安全的部分并以此为乐。你夺回了主导权。粉丝喜欢你的幽默。' },
                stats: { competence: 60, ethics: 40, leadership: 70, innovation: 60 }
            },
            {
                id: 'D',
                text: { en: '😤 Public Statement', th: '😤 ออกแถลงการณ์', zh: '发表声明' },
                consequence: { en: '⚠️ "Disgusted." You express disappointment. Fans feel ashamed. The community polices itself, but you look a bit uptight.', th: '⚠️ "รังเกียจ" คุณแสดงความผิดหวัง แฟนๆ รู้สึกอับอาย ชุมชนเริ่มคุมกันเอง แต่คุณดูเคร่งเครียดไปหน่อย', zh: '⚠️ “恶心。”你表达了失望。粉丝感到羞愧。社区开始自我审查，但你看起来有点放不开。' },
                stats: { competence: 30, ethics: 40, leadership: 40, innovation: 10 }
            }
        ]
    },
    {
        id: 'mu_020',
        text: {
            en: '🎗️ The Charity Scam: You performed for free at a "Save the Ocean" gala. You just found out the organizer pocketed 90% of the donations ($2M). You helped raise that money.',
            th: '🎗️ การกุศลลวงโลก: คุณไปแสดงฟรีในงานกาล่า "รักษ์ทะเล" เพิ่งมารู้ว่าคนจัดงานอมเงินบริจาคไป 90% ($2M) คุณเป็นคนช่วยหาเงินก้อนนั้นมา',
            zh: '🎗️ 慈善骗局：你在一个“拯救海洋”晚宴上免费表演。你刚发现组织者私吞了90%的捐款（200万美元）。是你帮着筹到了那笔钱。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🕵️ Expose Them', th: '🕵️ แฉพวกมัน', zh: '揭露他们' },
                consequence: { en: '✅ Whistleblower. You go to the press with evidence. The organizer goes to jail. You are praised for your integrity.', th: '✅ ผู้เป่านกหวีด! คุณเอาหลักฐานไปให้นักข่าว คนจัดงานติดคุก คุณได้รับคำชมเรื่องความซื่อสัตย์', zh: '✅ 吹哨人。你带着证据去找媒体。组织者进监狱。你因正直而受到赞以此。' },
                stats: { competence: 50, ethics: 90, leadership: 70, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '💵 Cover the Loss', th: '💵 ชดใช้เงินคืน', zh: '填补亏空' },
                consequence: { en: '💔 Heroic Sacrifice. You quietly donate $2M of your own money to the ACTUAL charity to fix the mess. You are broke, but clean.', th: '💔 การเสียสละของฮีโร่! คุณแอบบริจาคเงินส่วนตัว $2M ให้องค์กรการกุศล *จริงๆ* เพื่อแก้ปัญหา คุณถังแตก แต่ตัวสะอาด', zh: '💔 英雄牺牲。你悄悄捐出自己的200万美元给*真正*的慈善机构来收拾烂摊子。你破产了，但问心无愧。' },
                stats: { competence: 30, ethics: 100, leadership: 60, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '🤐 Distance Yourself', th: '🤐 ตีตัวออกห่าง', zh: '撇清关系' },
                consequence: { en: '⚠️ "I didn\'t know." You issue a statement denying knowledge. It works, but insiders know you ran away. Ethics -20.', th: '⚠️ "ผมไม่รู้เรื่อง" คุณออกแถลงการณ์ปฏิเสธ มันได้ผล แต่วงในรู้ว่าคุณหนีปัญหา จริยธรรม -20', zh: '⚠️ “我不知道。”你发表声明否认以此。有效，但内部人士知道你逃避了。职业道德-20。' },
                stats: { competence: 30, ethics: -20, leadership: -10, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '🥊 Demand Refund Publicly', th: '🥊 ทวงเงินคืนออกสื่อ', zh: '公开要求退款' },
                consequence: { en: '🔥 Aggressive PR. "If they don\'t return the money in 24h, I sue." It works. They panic and pay. You look scary but effective.', th: '🔥 PR สายโหด! "ถ้าไม่คืนเงินใน 24 ชม. ผมฟ้อง" ได้ผล พวกนั้นกลัวจนรีบจ่าย คุณดูน่ากลัวแต่ได้เรื่อง', zh: '🔥 激进公关。“如果在24小时内不退款，我就起诉。”奏效了。他们恐慌并付钱。你看起来很可怕但有效。' },
                stats: { competence: 60, ethics: 60, leadership: 80, innovation: 30 }
            }
        ]
    },
    {
        id: 'mu_021',
        text: {
            en: '🥊 The Rivalry: An up-and-coming artist disses you in a freestyle, calling you "washed up." It gets 10M views. They are clearly baiting you for clout.',
            th: '🥊 ศึกสายเลือด: ศิลปินดาวรุ่งดิสคุณในฟรีสไตล์ เรียกคุณว่า "ไม้ใกล้ฝั่ง" ยอดวิว 10 ล้าน เขาจงใจล่อเป้าคุณเพื่อเกาะดังชัดๆ',
            zh: '🥊 竞争对手：一位新晋艺人在freestyle中diss你，说你是“过气老古董”。视频有1000万观看。他们显然是在蹭你热度。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📝 Release a Diss Track', th: '📝 ปล่อยเพลงดิสกลับ', zh: '发歌回击' },
                consequence: { en: '🔥 The Beef is On! You destroy them lyrically. The internet goes wild. Both your streaming numbers double. It\'s mutually beneficial war.', th: '🔥 สงครามเริ่มแล้ว! คุณแร็ปด่ายับจนเขาไปไม่เป็น เน็ตแตก ยอดสตรีมทั้งคู่พุ่งกระฉูด สงครามที่วิน-วินทั้งคู่', zh: '🔥 互撕开始！你在歌词上碾压了他们。互联网沸腾。你们的流媒体数据都翻倍了。这是互利共赢的战争。' },
                stats: { competence: 60, ethics: 30, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: { en: '👑 "Who?" Response', th: '👑 ตอบกลับว่า "ใครวะ?"', zh: '回复“谁？”' },
                consequence: { en: '❄️ Cold Blooded. You tweet "Who?" and nothing else. Their career evaporates. You assert dominance by ignoring them.', th: '❄️ เลือดเย็น! คุณทวีตแค่ว่า "ใคร?" แล้วจบ อาชีพเขาดับวูบ คุณแสดงอำนาจด้วยการเมินเฉย', zh: '❄️ 冷血。你发推说“谁？”，别的什么也没说。他们的职业生涯蒸发了。你通过无视确立了统治地位。' },
                stats: { competence: 50, ethics: 40, leadership: 80, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '🤝 Invite them to Tour', th: '🤝 ชวนมาทัวร์ด้วยกัน', zh: '邀请他们巡演' },
                consequence: { en: '🕊️ Kill with Kindness. You mentor them. They apologize. You look like a benevolent god. They become your opening act.', th: '🕊️ ฆ่าด้วยความเมตตา! คุณรับเป็นศิษย์ เขาขอโทษ คุณดูเหมือนเทพผู้ใจบุญ เขากลายเป็นวงเปิดให้คุณ', zh: '🕊️ 捧杀。你指导他们。他们道歉。你看起来像仁慈的上帝。他们成了你的暖场嘉宾。' },
                stats: { competence: 40, ethics: 80, leadership: 90, innovation: 30 }
            },
            {
                id: 'D',
                text: { en: '😭 Play the Victim', th: '😭 เล่นบทเหยื่อ', zh: '扮演受害者' },
                consequence: { en: '📉 "Bullying is wrong." You complain about respect. You look weak. The internet mocks you as "soft." You lose street cred.', th: '📉 "การบูลลี่มันผิด" คุณบ่นกะปอดกะแปดเรื่องความเคารพ คุณดูอ่อนแอ ชาวเน็ตล้อว่า "กระจอก" เสียเครดิตหมด', zh: '📉 “欺凌是错的。”你抱怨尊重问题。你看起来很软弱。互联网嘲笑你“玻璃心”。你失去了街头信誉。' },
                stats: { competence: 20, ethics: 30, leadership: -20, innovation: 0 }
            }
        ]
    },
    {
        id: 'mu_022',
        text: {
            en: '🎸 The Reunion Tour: Your old bandmates offer a reunion tour. $30M each. The catch: You hate the drummer (he slept with your wife 10 years ago) and the singer is now a conspiracy theorist.',
            th: '🎸 ทัวร์รวมวง: เพื่อนร่วมวงเก่าเสนอทัวร์รวมวง รับคนละ $30M ข้อแม้: คุณเกลียดมือกลอง (มันนอนกับเมียคุณเมื่อ 10 ปีก่อน) และนักร้องนำตอนนี้กลายเป็นพวกบ้าทฤษฎีสมคบคิด',
            zh: '🎸 重组巡演：你的老乐队成员提议重组巡演。每人3000万美元。问题是：你恨鼓手（他10年前睡了你老婆），而主唱现在是个阴谋论疯子。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💰 Take the Money', th: '💰 เอาเงินไว้ก่อน', zh: '💰 拿钱' },
                consequence: { en: '💀 Hell on Wheels. Separate tour buses. Separate dressing rooms. You play the shows dead-eyed. You have $30M, but you are miserable.', th: '💀 นรกเคลื่อนที่! รถทัวร์คนละคัน ห้องแต่งตัวแยก คุณเล่นโชว์แบบตายซาก คุณมี $30M แต่ชีวิตบัดซบมาก', zh: '💀 移动地狱。分开的巡演巴士。分开的更衣室。你死气沉沉地演出。你有3000万，但你很痛苦。' },
                stats: { competence: 40, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🚫 Never Again', th: '🚫 ไม่มีวันซะล่ะ', zh: '🚫 绝不' },
                consequence: { en: '✅ Peace of Mind. You turn it down. Fans are sad, but you sleep tight at night. You keep your dignity.', th: '✅ ความสงบทางใจ! คุุณปฏิเสธ แฟนๆ เศร้า แต่คุณนอนหลับสบาย คุณรักษาศักดิ์ศรีไว้ได้', zh: '✅ 内心平静。你拒绝了。粉丝很伤心，但在晚上你睡得很香。你保持了尊严。' },
                stats: { competence: 30, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '🔄 One-Off Special', th: '🔄 โชว์พิเศษรอบเดียว', zh: '一次性特别节目' },
                consequence: { en: '✨ The Compromise. You do ONE recorded show for $5M. It\'s bearable for one night. Fans get closure. You get paid.', th: '✨ การประนีประนอม! คุณทำโชว์อัดเทป *รอบเดียว* รับ $5M ทนคืนเดียวไหว แฟนๆ ได้ปลดล็อค คุณได้เงิน', zh: '✨ 妥协。你以500万美元做*一场*录播演出。忍一晚还能接受。粉丝以此了结。你拿到了钱。' },
                stats: { competence: 50, ethics: 40, leadership: 60, innovation: 30 }
            },
            {
                id: 'D',
                text: { en: '📝 Replace Them', th: '📝 เปลี่ยนสมาชิก', zh: '换掉他们' },
                consequence: { en: '⚖️ Legal War. You try to tour as the band name with hired guns. Original members sue you. Fans shout "Cover Band!" at you.', th: '⚖️ สงครามกฎหมาย! คุณพยายามใช้ชื่อวงทัวร์กับนักดนตรีรับจ้าง สมาชิกเดิมฟ้องคุณ แฟนๆ ตะโกนด่าบนเวทีว่า "วงก๊อป!"', zh: '⚖️ 法律战。你试图雇佣枪手以乐队名义巡演。原成员起诉你。粉丝冲你大喊“翻唱乐队！”' },
                stats: { competence: 20, ethics: -10, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'mu_023',
        text: {
            en: '🏥 The Voice Crisis: It\'s the final night of the tour at Wembley. Your doctor says if you sing tonight, you risk PERMANENT vocal cord damage. 90,000 fans are waiting.',
            th: '🏥 วิกฤตเสียง: คืนสุดท้ายของทัวร์ที่เวมบลีย์ หมอบอกว่าถ้าคุณร้องคืนนี้ คุณเสี่ยงเส้นเสียงพัง *ถาวร* แฟนๆ 90,000 คนกำลังรออยู่',
            zh: '🏥 嗓音危机：温布利巡演的最后一夜。医生说如果你今晚唱歌，面临声带*永久性*损伤的风险。9万名粉丝正在等待。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 Cancel at Last Minute', th: '🚫 ยกเลิกนาทีสุดท้าย', zh: '🚫 最后一刻取消' },
                consequence: { en: '🛡️ Future Saved. Fans riot. Insurance covers refunds. You take 6 months off. Your voice recovers 100%. Smart long game.', th: '🛡️ รักษาอนาคต! แฟนๆ จลาจล ประกันจ่ายคืนตั๋ว คุณพัก 6 เดือน เสียงกลับมา 100% เกมยาวที่ฉลาด', zh: '🛡️ 保住未来。粉丝暴动。保险覆盖退款。你休息了6个月。你的嗓音恢复了100%。聪明的长线操作。' },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🎤 Sing Anyway', th: '🎤 ยังไงก็ต้องร้อง', zh: '以此也要唱' },
                consequence: { en: '💀 The Last Show. You give a legendary performance. Next morning, your voice is gone forever. You retire at 30. Legend, but tragic.', th: '💀 โชว์ครั้งสุดท้าย! คุณแสดงระดับตำนาน เช้าวันต่อมา เสียงคุณหายไปตลอดกาล คุณเกษียณตอนอายุ 30 เป็นตำนานที่น่าเศร้า', zh: '💀 绝唱。你奉献了传奇般的演出。第二天早上，你的声音永远消失了。你在30岁退休。传奇，但悲剧。' },
                stats: { competence: 30, ethics: 60, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🤖 Lip Sync', th: '🤖 ลิปซิงค์', zh: '假唱' },
                consequence: { en: '⚠️ The Scandal. You fake it. It sounds perfect. But a video leaks showing your mic was off. "Fraud" headlines everywhere.', th: '⚠️ สแกนดัล! คุณแกล้งร้อง เสียงเป๊ะมาก แต่วิดีโอหลุดว่าไมค์ปิดอยู่ พาดหัวข่าว "จอมลวงโลก" ว่อนเน็ต', zh: '⚠️ 丑闻。你假唱了。听起来很完美。但视频泄露显示你的麦克风是关着的。“欺诈”头条铺天盖地。' },
                stats: { competence: 40, ethics: -50, leadership: 10, innovation: 20 }
            },
            {
                id: 'D',
                text: { en: '🤝 Crowd Karaoke', th: '🤝 คาราโอเกะคนดู', zh: '全场卡拉OK' },
                consequence: { en: '✨ Emotional Pivot. You tell the crowd the truth. "I can\'t sing, you have to sing for me." 90,000 people sing your songs. You cry. They cry. Best show ever.', th: '✨ จุดเปลี่ยนทางอารมณ์! คุณบอกความจริง "ผมร้องไม่ได้ พวกคุณต้องร้องให้ผม" 9 หมื่นคนร้องเพลงคุณ คุณร้องไห้ เขาร้องไห้ โชว์ที่ดีที่สุดตลอดกาล', zh: '✨ 情感以此。你告诉观众真相。“我唱不了，你们得帮我唱。”9万人以此以此你的歌。你哭了。他们哭了。史上最好的演出。' },
                stats: { competence: 60, ethics: 70, leadership: 90, innovation: 80 }
            }
        ]
    },
    {
        id: 'mu_024',
        text: {
            en: '💃 The Viral Dance: Your label is withholding your album unless you invent a "stupid viral dance" for the lead single. They want you to debase yourself for TikTok algorithm.',
            th: '💃 ท่าเต้นไวรัล: ค่ายดองอัลบั้มไม่ยอมปล่อย จนกว่าคุณจะคิด "ท่าเต้นไวรัลโง่ๆ" ให้ซิงเกิลนำ พวกเขาอยากให้คุณลดตัวลงไปเต้นแลกอัลกอริทึม TikTok',
            zh: '💃 病毒舞蹈：唱片公司扣着你的专辑不发，除非你为主打单曲发明一个“愚蠢的病毒式舞蹈”。他们想让你为了TikTok算法自贬身价。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤡 Do the Dance', th: '🤡 ยอมเต้น', zh: '🤡 跳吧' },
                consequence: { en: '📈 It Works. You look ridiculous wiggling your butt. The song goes #1. You feel dead inside, but rich.', th: '📈 มันได้ผล! คุณดูทุเรศมากที่ส่ายก้นไปมา เพลงขึ้นอันดับ 1 ใจคุณตายด้าน แต่รวย', zh: '📈 奏效了。你扭屁股的样子很滑稽。歌曲以此第一。你内心以此，但以此。' },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🖕 Leak the Album', th: '🖕 ปล่อยอัลบั้มเถื่อน', zh: '泄露专辑' },
                consequence: { en: '🔥 Rebel Move. You leak it on SoundCloud. "Here is the music, no dance needed." Fans go crazy. The label sues you for breach of contract.', th: '🔥 มูฟขบถ! คุณปล่อยลง SoundCloud เอง "อ่ะนี่เพลง ไม่ต้องเต้น" แฟนคลับคลั่ง ค่ายฟ้องคุณข้อหาผิดสัญญา', zh: '🔥 叛逆之举。你在SoundCloud上泄露了它。“这是音乐，不需要跳舞。”粉丝疯了。唱片公司起诉你违约。' },
                stats: { competence: 50, ethics: 40, leadership: 70, innovation: 60 }
            },
            {
                id: 'C',
                text: { en: '😐 Deadpan Performance', th: '😐 เต้นแบบหน้าตาย', zh: '面瘫表演' },
                consequence: { en: '✨ Malicious Compliance. You do the dance with zero energy and a frown. It becomes a meme for "Being Over It." Viral success on YOUR terms.', th: '✨ การดื้อแพ่ง! คุณเต้นแบบไร้พลังงานและหน้าบึ้ง กลายเป็นมีม "ฉันพอแล้วกับสิ่งนี้" ไวรัลสำเร็จในแบบ *ของคุณ*', zh: '✨以此顺从。你以此以此以此以此以此。这变成了“以此以此”的梗。按*你的*方式以此以此。' },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 80 }
            },
            {
                id: 'D',
                text: { en: '🩰 Hire Dancers', th: '🩰 จ้างแดนเซอร์', zh: '雇伴舞' },
                consequence: { en: '🤷 Compromise. You hire pros to do the dance in the video while you just play guitar. Label accepts it. Boring but safe.', th: '🤷 ประนีประนอม จ้างมืออาชีพมาเต้นในเอ็มวี ส่วนคุณยืนดีดกีตาร์เฉยๆ ค่ายยอมรับ น่าเบื่อแต่ปลอดภัย', zh: '🤷 妥协。你雇专业人士在视频里跳舞，而你只是弹吉他。唱片公司接受了。无聊但安全。' },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'mu_025',
        text: {
            en: '🚫 The Lyric Controversy: Gen Z has discovered a song you wrote 15 years ago. It contains a word that was okay then but is offensive now. #Cancel[YourName] is trending.',
            th: '🚫 ดราม่าเนื้อเพลง: เด็กรุ่นใหม่ไปขุดเจอเพลงที่คุณแต่งเมื่อ 15 ปีก่อน มีคำที่สมัยนั้นโอเคแต่สมัยนี้เหยียด #Cancel[ชื่อคุณ] กำลังติดเทรนด์',
            zh: '🚫 歌词以此：Z世代发现了你15年前写的一首歌。它包含一个当时还可以但现在以此以此的以此。#以此[你的名字]正在以此。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🙇 Full Apology', th: '🙇 ขอโทษอย่างจริงใจ', zh: '🙇以此以此' },
                consequence: { en: '✅ "I\'ve Grown." You remove the song and apologize. Most fans forgive you. Anti-woke crowd calls you weak. You survive.', th: '✅ "ผมโตขึ้นแล้ว" คุณลบเพลงและขอโทษ แฟนส่วนใหญ่อภัย พวกต้าน woke ด่าว่าคุณอ่อน คุณรอดตัว', zh: '✅ “我成长了。”你删除歌曲并道歉。大多数粉丝以此了你。以此woke以此称你以此。你以此了。' },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🙅 "Product of its Time"', th: '🙅 "มันเป็นเรื่องของยุคสมัย"', zh: '🙅 “时代的产物”' },
                consequence: { en: '🛡️ Defiant. You keep the song. "Art reflects history." You lose younger fans but gain older/conservative ones. Your audience shifts.', th: '🛡️ ต่อต้าน! คุณเก็บเพลงไว้ "ศิลปะสะท้อนประวัติศาสตร์" คุณเสียแฟนเด็กแต่ได้แฟนแก่/อนุรักษ์นิยมมาแทน ฐานคนฟังเปลี่ยน', zh: '🛡️以此。你保留歌曲。“艺术反映历史。”你失去年轻粉丝但获得年长/以此以此。你的受众以此。' },
                stats: { competence: 40, ethics: 30, leadership: 50, innovation: 10 }
            },
            {
                id: 'C',
                text: { en: '🤐 Say Nothing', th: '🤐 ไม่พูดอะไร', zh: '什么也不说' },
                consequence: { en: '⚠️ Ignore the Mob. You wait it out. Shows get protested. Sales dip 20%. Eventually they find someone else to cancel.', th: '⚠️ เมินม็อบ! คุณรอให้ซา มีคนประท้วงหน้าคอนเสิร์ต ยอดขายตก 20% เดี๋ยวพวกนั้นก็ไปหาคนอื่นด่าแทน', zh: '⚠️ 无视暴民。你以此以此。演出遭到抗议。销量以此20%。最终他们以此以此以此以此。' },
                stats: { competence: 30, ethics: 20, leadership: 30, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '🆕 Re-Record Lyrics', th: '🆕 อัดเนื้อร้องใหม่', zh: '重录以此' },
                consequence: { en: '✨ The Taylor Strategy. You re-release the song with updated, kind lyrics. "Taylor\'s Version" style. Fans appreciate the effort.', th: '✨ กลยุทธ์เทย์เลอร์! คุณปล่อยเพลงเดิมแต่แก้เนื้อให้ดีขึ้น สไตล์ "Taylor\'s Version" แฟนๆ ชื่นชมความพยายาม', zh: '✨ 以此以此。你以此以此以此以此以此的以此以此以此歌曲。“以此以此”以此。粉丝以此以此。' },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 50 }
            }
        ]
    },
    {
        id: 'mu_026',
        text: {
            en: '📉 The Algorithm Shift: Streaming platforms update their algorithm to favor songs under 2:30 minutes. Your new 6-minute epic ballad is ready for release.',
            th: '📉 อัลกอริทึมเปลี่ยน: แพลตฟอร์มสตรีมมิ่งปรับระบบใหม่ ดันเพลงที่สั้นกว่า 2:30 นาที บัลลาดมหากาพย์ 6 นาทีของคุณพร้อมปล่อยพอดี',
            zh: '📉 算法变更：流媒体平台更新了算法，偏爱2分30秒以下的歌曲。你那首6分钟的史诗抒情新歌正准备发行。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✂️ Cut it Down', th: '✂️ หั่นเพลงลง', zh: '✂️ 剪短它' },
                consequence: { en: '⚠️ Radio Friendly. You chop out the solos. It fits the playlist, but feels soulless. Metrics up, pride down.', th: '⚠️ เป็นมิตรกับวิทยุ! คุณตัดโซโล่ออก มันเข้าเพลย์ลิสต์ได้แต่ไร้จิตวิญญาณ ยอดดูดีแต่ความภูมิใจหด', zh: '⚠️ 电台友好。你砍掉了独奏。它适合播放列表，但感觉没有灵魂。数据上升，自尊下降。' },
                stats: { competence: 30, ethics: -20, leadership: -10, innovation: -10 }
            },
            {
                id: 'B',
                text: { en: '🎼 Release Full Version', th: '🎼 ปล่อยเวอร์ชันเต็ม', zh: '发布完整版' },
                consequence: { en: '🎨 Artistic Integrity. The algorithm hates it. It gets fewer plays, but hardcore fans cry to it. Cult classic status.', th: '🎨 ศักดิ์ศรีศิลปิน! อัลกอริทึมเกลียดมัน ยอดฟังน้อยลง แต่แฟนเดนตายฟังแล้วร้องไห้ ขึ้นหิ้งคัลท์คลาสสิก', zh: '🎨 艺术完整性。算法由于它。播放量较少，但铁杆粉丝听哭了。邪典经典地位。' },
                stats: { competence: -10, ethics: 50, leadership: 20, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '💿 Release Two Versions', th: '💿 ปล่อยสองเวอร์ชัน', zh: '发两个版本' },
                consequence: { en: '✅ Smart Strategy. "Radio Edit" for the masses, "Album Version" for the fans. Double the streams, double the work.', th: '✅ กลยุทธ์ฉลาด! "Radio Edit" ให้คนทั่วไป "Album Version" ให้แฟนคลับ สตรีมคูณสอง งานเพิ่มสองเท่า', zh: '✅ 明智策略。“电台版”给大众，“专辑版”给粉丝。双倍流媒体，双倍工作。' },
                stats: { competence: 40, ethics: 10, leadership: 30, innovation: 10 }
            },
            {
                id: 'D',
                text: { en: '📽️ Focus on Video', th: '📽️ เน้นวิดีโอแทน', zh: '专注于视频' },
                consequence: { en: '🔥 Visual Savior. You ignore the audio algorithm and make a short film for YouTube. It goes viral visually.', th: '🔥 รอดด้วยภาพ! คุณเมินอัลกอริทึมเสียงแล้วทำหนังสั้นลง YouTube ไวรัลด้วยงานภาพ', zh: '🔥 视觉以此。你无视以此算法，为YouTube以此了一部短片。视觉上以此。' },
                stats: { competence: 20, ethics: 10, leadership: 40, innovation: 40 }
            }
        ]
    },
    {
        id: 'mu_027',
        text: {
            en: '🤖 The AI Offer: A tech giant wants to license your voice for an "AI Singer" app. Users can make you sing anything. Pays $5M upfront + royalties.',
            th: '🤖 ข้อเสนอ AI: บริษัทเทคโนโลยียักษ์ใหญ่อยากซื้อสิทธิ์เสียงคุณไปทำ "AI Singer" ให้คนเอาไปร้องเพลงอะไรก็ได้ จ่าย $5M + ส่วนแบ่ง',
            zh: '🤖 AI提议：一家科技巨头想获得你的声音授权用于“AI歌手”应用。用户可以让你唱任何歌。预付500万美元+版税。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💰 Sell the Rights', th: '💰 ขายสิทธิ์เลย', zh: '💰 卖版权' },
                consequence: { en: '💀 PR Nightmare. You get rich instantly. Within hours, AI-You is singing hate speech and weird memes. Brand damaged.', th: '💀 ฝันร้าย PR! คุณรวยทันที ในไม่กี่ชม. AI ของคุณร้องเพลงเหยียดและมีมประหลาด แบรนด์พังยับ', zh: '💀 公关噩梦。你瞬间致富。几小时内，AI版的你在唱仇恨言论和奇怪的梗。品牌受损。' },
                stats: { competence: 20, ethics: -60, leadership: -20, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '🚫 Protect the Art', th: '🚫 ปกป้องศิลปะ', zh: '保护艺术' },
                consequence: { en: '🛡️ "Humans Only." You refuse publicly. Journalists praise your stance against automation. You miss easy money.', th: '🛡️ "มนุษย์เท่านั้น" คุณปฏิเสธออกสื่อ นักข่าวชมจุดยืนต้านระบบอัตโนมัติ คุณอดเงินง่ายๆ', zh: '🛡️ “仅限人类。”你公开拒绝。记者以此你以此自动化的立场。你错过了快钱。' },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: -20 }
            },
            {
                id: 'C',
                text: { en: '📝 Strict Control', th: '📝 คุมเข้ม', zh: '严格控制' },
                consequence: { en: '✅ Safe Bet. You accept with heavy moderation filters. No hate speech allowed. Less viral, but steady passive income.', th: '✅ เพลย์เซฟ! คุณรับแต่มีตัวกรองหนักมาก ห้ามคำหยาบ ไม่ค่อยไวรัลแต่รายได้ไหลเข้าเรื่อยๆ', zh: '✅以此。你接受但有严格的以此过滤。以此仇恨言论。以此以此，但被动以此稳定。' },
                stats: { competence: 50, ethics: 20, leadership: 20, innovation: 30 }
            },
            {
                id: 'D',
                text: { en: '⚖️ Sue Them', th: '⚖️ ฟ้องมันเลย', zh: '起诉他们' },
                consequence: { en: '🔥 Offensive Move. You claim they already trained on your voice illegally. Legal battle starts. You look like a fighter.', th: '🔥 เปิดก่อนได้เปรียบ! คุณอ้างว่าเขาแอบเทรนเสียงคุณไปแล้ว เปิดศึกศาล คุณดูเป็นนักสู้', zh: '🔥 进攻。你声称他们已经非法使用了你的声音训练。法律战开始。你以此像个以此。' },
                stats: { competence: -20, ethics: 40, leadership: 40, innovation: 0 }
            }
        ]
    },
    {
        id: 'mu_028',
        text: {
            en: '🎂 The Private Gig: You are offered $2M to play a birthday party. It turns out it\'s for the daughter of a notorious dictator subject to UN sanctions.',
            th: '🎂 งานพรเวท: มีคนจ้าง $2M ให้ไปร้องงานวันเกิด ปรากฏว่าเป็นลูกสาวของเผด็จการที่มีชื่อเสียและโดน UN คว่ำบาตร',
            zh: '🎂 私人演出：有人出200万美元请你去生日派对表演。结果发现那是受联合国制裁的臭名昭著的独裁者的女儿。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✈️ Go Perform', th: '✈️ ไปแสดง', zh: '去表演' },
                consequence: { en: '💰 Blood Money. You profit. Photos leak. Human Rights Watch condemns you. You say "Music transcends politics."', th: '💰 เงินเปื้อนเลือด! คุณรับเงิน รูปหลุด องค์กรสิทธิมนุษยชนประณามคุณ คุณบอก "ดนตรีอยู่เหนือการเมือง"', zh: '💰 血汗钱。你以此了。照片以此。以此权利以此谴责你。你说“音乐超越政治。”' },
                stats: { competence: 30, ethics: -70, leadership: -20, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🚫 Cancel & Publicize', th: '🚫 ยกเลิกและแฉ', zh: '取消并曝光' },
                consequence: { en: '🏆 Moral Video Victory. You expose the offer: "I don\'t sing for tyrants." Viral hero moment. You might need extra security.', th: '🏆 ชัยชนะทางศีลธรรม! คุณแฉข้อเสนอ "ฉันไม่ร้องให้ทรราช" ไวรัลแบบฮีโร่ คุณอาจต้องจ้างการ์ดเพิ่ม', zh: '🏆 道德胜利。你以此以此：“我不为以此以此。”以此英雄以此。你可能需要以此安保。' },
                stats: { competence: 40, ethics: 80, leadership: 60, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🤒 Call in Sick', th: '🤒 ป่วยการเมือง', zh: '装病' },
                consequence: { en: '🤐 Quiet Exit. You fake COVID. You lose the money but avoid the scandal and the dictator\'s anger. Cowardly but smart.', th: '🤐 ทางออกเงียบๆ แกล้งเป็นโควิด อดเงินแต่รอดดราม่าและรอดบาทาเผด็จการ ขี้ขลาดแต่ฉลาด', zh: '🤐 安静退出。你假装以此。没了钱但以此了以此和以此的愤怒。以此但以此。' },
                stats: { competence: 20, ethics: 10, leadership: -20, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '💰 Donate the Fee', th: '💰 บริจาคค่าตัว', zh: '捐赠酬金' },
                consequence: { en: '🕊️ Robin Hood. You play, take the $2M, and donate it ALL to victims of that regime. Power move.', th: '🕊️ โรบินฮู้ด! คุณเล่น รับ $2M แล้วบริจาค *ทั้งหมด* ให้เหยื่อระบอบนั้น มูฟเหนือชั้น', zh: '🕊️ 罗宾汉。你以此，拿了200万，然后全部捐给该政权的以此。以此以此。' },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 }
            }
        ]
    },
    {
        id: 'mu_029',
        text: {
            en: '🎫 Dynamic Pricing: Your upcoming tour is highly anticipated. Ticketmaster recommends "Dynamic Pricing," which could drive front row seats to $5,000.',
            th: '🎫 ราคาตั๋วพลวัต: ทัวร์ของคุณคนรอกันเยอะมาก Ticketmaster แนะนำระบบ "Dynamic Pricing" ซึ่งอาจปั่นราคาตั๋วแถวหน้าไปถึง $5,000',
            zh: '🎫 动态定价：你的巡演备受期待。票务平台建议“动态定价”，这可能将前排票价推高至5000美元。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📈 Enable It', th: '📈 เปิดใช้เลย', zh: '启用它' },
                consequence: { en: '💰 Max Profit. You make record-breaking revenue. Fans scream "Greedy!" Ordinary people can\'t attend. PR disaster.', th: '💰 กำไรสูงสุด! รายได้ทุบสถิติ แฟนตะโกน "หน้าเลือด!" คนธรรมดาดูไม่ได้ หายนะ PR', zh: '💰 利润最大化。你创造了以此以此。粉丝以此“以此！”普通人以此以此。公关以此。' },
                stats: { competence: 50, ethics: -40, leadership: -30, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🛑 Cap Prices', th: '🛑 ตรึงราคา', zh: '限制价格' },
                consequence: { en: '💖 Fan Favorite. You set a max price. Scalpers snatch some up, but fans love you for trying. You leave millions on the table.', th: '💖 ขวัญใจแฟน! คุณคุมเพดานราคา ตั๋วผีเอาไปกินบ้างแต่แฟนรักที่คุณพยายาม คุณทิ้งเงินล้านไปเฉยๆ', zh: '💖 粉丝最爱。你设定了最高价。黄牛抢走了一些，但粉丝爱你为此以此。你放弃了数百万。' },
                stats: { competence: 30, ethics: 70, leadership: 50, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🆔 ID-Linked Tickets', th: '🆔 ตั๋วระบุตัวตน', zh: '实名制门票' },
                consequence: { en: '🛡️ War on Scalpers. Non-transferable tickets. Entry takes hours. Fans are annoyed by queues but happy they got tickets cheap.', th: '🛡️ สงครามตั๋วผี! ตั๋วห้ามโอน เข้างานนานเป็นชาติ แฟนบ่นเรื่องคิวแต่ดีใจที่ได้ตั๋วถูก', zh: '🛡️ 黄牛战争。以此转让门票。入场以此数小时。粉丝厌以此排队但高兴买到了便宜票。' },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: { en: '🎟️ Lottery System', th: '🎟️ ระบบสุ่ม', zh: '抽签系统' },
                consequence: { en: '🎲 Fair Game. Random selection for chances to buy. Creates huge hype/FOMO. Feels fair.', th: '🎲 เกมวัดดวง! สุ่มชื่อคนมีสิทธิ์ซื้อ สร้างกระแส FOMO หนักมาก ดูยุติธรรมดี', zh: '🎲 公平以此。随机以此以此以此。以此以此以此FOMO。以此公平。' },
                stats: { competence: 30, ethics: 50, leadership: 20, innovation: 20 }
            }
        ]
    },
    {
        id: 'mu_030',
        text: {
            en: '🎤 The Rookie Feature: A viral TikTok rapper wants you on their song. The song is terrible, but it WILL be a #1 hit due to memes. Do you do the verse?',
            th: '🎤 ฟีทเด็กใหม่: แร็ปเปอร์ TikTok ที่กำลังดังอยากได้คุณไปฟีท เพลงห่วยแตกแต่มันจะขึ้นอันดับ 1 แน่ๆ เพราะมีม จะร่วมวงไหม?',
            zh: '🎤 新人客串：一个病毒式传播的TikTok说唱歌手想让你客串。歌很难听，但因为梗肯定会成为冠军单曲。你接吗？'
        },
        options: [
            {
                id: 'A',
                text: { en: '✅ Do it for Clout', th: '✅ ทำเพื่อเกาะกระแส', zh: '为了热度做' },
                consequence: { en: '📉 Charts vs Cred. You get a #1 hit. Critics mock you for "desperation." Your core fans cringe.', th: '📉 ชาร์ตแลกเครดิต! ได้ที่ 1 จริง แต่นักวิจารณ์ล้อว่า "สิ้นคิด" แฟนเดนตายอีหยังวะ', zh: '📉 榜单对以此。你以此了冠军单曲。以此以此你“以此”。核心粉丝以此。' },
                stats: { competence: 40, ethics: -10, leadership: -10, innovation: -20 }
            },
            {
                id: 'B',
                text: { en: '🚫 Respectfully Decline', th: '🚫 ปฏิเสธอย่างสุภาพ', zh: '礼貌拒绝' },
                consequence: { en: '👑 Quality Control. You miss the trend. The song blows up without you. You maintain your "premium" aura.', th: '👑 คุมคุณภาพ! คุณตกขบวน เพลงดังระเบิดโดยไม่มีคุณ คุณรักษาออร่า "พรีเมียม" ไว้ได้', zh: '👑 质量控制。你错过了潮流。没你这歌也火了。你保持了“以此”以此。' },
                stats: { competence: 50, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💸 Charge Double', th: '💸 คิดราคา 2 เท่า', zh: '双倍收费' },
                consequence: { en: '💰 Stupid Tax. "If I do this trash, I want $500k." They pay. You are rich and cynical.', th: '💰 ภาษีความโง่! "ถ้าจะให้ทำขยะนี่ ขอ $500k" พวกนั้นยอมจ่าย คุณรวยและเลือดเย็น', zh: '💰 愚蠢税。“以此我做以此以此，我要50万。”他们付了。你以此以此以此以此。' },
                stats: { competence: 60, ethics: -20, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '📝 Rewrite the Song', th: '📝 แก้เพลงใหม่', zh: '重写歌曲' },
                consequence: { en: '✨ The Fixer. You agree ONLY if you can fix the production/lyrics. You turn a meme into an actual banger. Win-win.', th: '✨ ช่างซ่อม! ยอมทำ *ถ้า* ให้แก้เพลง คุณเปลี่ยนมีมให้เป็นเพลงฮิตคุณภาพ วิน-วิน', zh: '✨ 修理那一。你以此，以此*以此*以此你以此/以此。你把梗以此以此了真正的以此。共赢。' },
                stats: { competence: 60, ethics: 30, leadership: 40, innovation: 40 }
            }
        ]
    },
    {
        id: 'mu_031',
        text: {
            en: '⚖️ The Name Dispute: A small garage band from 1990 owns the trademark to your band name. They want $5M or you have to rebrand.',
            th: '⚖️ ศึกชื่อวง: วงดนตรีห้องซ้อมเล็กๆ จากปี 1990 ถือลิขสิทธิ์ชื่อวงคุณ เขาเรียก $5M ไม่งั้นคุณต้องเปลี่ยนชื่อใหม่',
            zh: '⚖️ 名字纠纷：1990年的一个小车库乐队拥有你乐队名字的商标。他们要500万美元，否则你得改名。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💰 Pay the Ransom', th: '💰 จ่ายค่าไถ่ไป', zh: '支付赎金' },
                consequence: { en: '💸 Expensive Clarity. You lose $5M. You keep the brand. Problem vanished instantly. Painful but effective.', th: '💸 ความชัดเจนที่แพงระยับ! เสีย $5M รักษาแบรนด์ไว้ ปัญหาจบปิ๊ง เจ็บแต่จบ', zh: '💸 昂贵的清晰。你以此了500万。保住了品牌。问题瞬间以此。痛苦但有效。' },
                stats: { competence: 30, ethics: 20, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🔄 Rebrand', th: '🔄 เปลี่ยนชื่อวง', zh: '重塑品牌' },
                consequence: { en: '🌀 Confusion. You change one letter. Fans are confused. Merch sales drop. It takes 2 years to recover momentum.', th: '🌀 สับสน! คุณเปลี่ยนตัวอักษรตัวนึง แฟนงง ยอดขายของตก กว่าจะฟื้นโมเมนตัมล่อไป 2 ปี', zh: '🌀 困惑。你改了一个字母。粉丝困惑。周边销量以此。话了2年以此以此动力。' },
                stats: { competence: -20, ethics: 40, leadership: -10, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '🥊 Fight in Court', th: '🥊 สู้ในศาล', zh: '法庭见' },
                consequence: { en: '⚖️ Legal Hell. You argue they "abandoned" the mark. Lawyers eat up $2M. You eventually win, but look like a bully.', th: '⚖️ นรกกฎหมาย! คุณอ้างว่าพวกนั้น "ทิ้ง" สิทธิ์ไปแล้ว ทนายกินไป $2M สุดท้ายชนะแต่ดูเป็นอันธพาล', zh: '⚖️ 法律地狱。你以此他们“以此”了商标。以此以此了200万。你以此以此了，但来看起来像霸凌。' },
                stats: { competence: 40, ethics: -10, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '🤝 Collab/Buyout', th: '🤝 ชวนร่วมงาน/ซื้อใจ', zh: '合作/买断' },
                consequence: { en: '🕊️ Smart Deal. You offer them an opening slot on your tour instead of cash. They get exposure, you keep the name.', th: '🕊️ ดีลฉลาด! เสนอให้มาเล่นวงเปิดแทนเงินสด เขาได้แสง คุณได้ชื่อ วิน', zh: '🕊️ 明智交易。你提供巡演暖场以此以此现金。他们得到曝光，你保住以此。' },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 10 }
            }
        ]
    },
    {
        id: 'mu_032',
        text: {
            en: '🎻 The Unplugged Pivot: You are burnt out from loud stadium shows. You want to release quiet, acoustic folk songs. Label says "It will bore the teens."',
            th: '🎻 สลับโหมดอะคูสติก: คุณหมดไฟกับคอนเสิร์ตสเตเดียมเสียงดัง อยากปล่อยเพลงโฟล์กเบาๆ ค่ายบอก "วัยรุ่นเบื่อแย่"',
            zh: '🎻 不插电转型：你对嘈杂的体育馆演出感到厌倦。你想发行安静的民谣歌曲。唱片公司说“这会让青少年感到无聊。”'
        },
        options: [
            {
                id: 'A',
                text: { en: '🎸 Do it Anyway', th: '🎸 ยังไงก็จะทำ', zh: '以此以此' },
                consequence: { en: '✨ Creative Life. Sales drop 40%. Critics praise your "maturity" and "depth." You feel happy again.', th: '✨ ชีวิตนักสร้างสรรค์! ยอดตก 40% นักวิจารณ์ชมว่า "โตขึ้น" และ "ลึกซึ้ง" คุณมีความสุขอีกครั้ง', zh: '✨ 创作生命。销量以此40%。评论家以此你的“以此”和“以此”。你以此以此以此。' },
                stats: { competence: 40, ethics: 50, leadership: 20, innovation: 30 }
            },
            {
                id: 'B',
                text: { en: '🙅 Stick to Pop', th: '🙅 เพลงป๊อปต่อไป', zh: '坚持流行' },
                consequence: { en: '💵 The Grind. You make the bangers. You hate them. Wallet full, soul empty. Burnout approaching.', th: '💵 ปั่นงาน! ทำเพลงฮิตต่อไป คุณเกลียดมัน กระเป๋าตุงแต่ใจกลวง อาการหมดไฟใกล้เข้ามา', zh: '💵 苦差事。你以此以此。你以此它们。钱包满了，灵魂以此。以此以此以此。' },
                stats: { competence: 50, ethics: -20, leadership: -10, innovation: -10 }
            },
            {
                id: 'C',
                text: { en: '🔄 Hybrid Album', th: '🔄 อัลบั้มลูกผสม', zh: '混合专辑' },
                consequence: { en: '✅ Compromise. Pop beats with acoustic guitars. Like Mumford & Sons. Safe, sells well, keeps everyone reasonably happy.', th: '✅ ประนีประนอม! บีทป๊อปกับกีตาร์โปร่ง แบบ Mumford & Sons เซฟ ขายดี ทุกคนแฮปปี้ประมาณนึง', zh: '✅ 妥协。流行节拍配木吉他。像Mumford & Sons。安全，卖得好，大家以此以此。' },
                stats: { competence: 50, ethics: 10, leadership: 20, innovation: 20 }
            },
            {
                id: 'D',
                text: { en: '🕯️ Secret Side Project', th: '🕯️ โปรเจกต์ลับ', zh: '秘密副业' },
                consequence: { en: '🎭 Alter Ego. You release the folk album under a pseudonym. It builds a cult following. Pure art, no pressure.', th: '🎭 อีกตัวตน! ปล่อยเพลงโฟล์กในนามแฝง สร้างฐานแฟนเฉพาะกลุ่ม ศิลปะล้วนๆ ไร้กดดัน', zh: '🎭 另一个自我。你以此名为以此发以此以此。以此以此以此以此。以此以此，没有压力。' },
                stats: { competence: 30, ethics: 60, leadership: 10, innovation: 50 }
            }
        ]
    },
    {
        id: 'mu_033',
        text: {
            en: '🏆 The Grammy Snub: You had the biggest album of the year, but got zero nominations. Fans are organizing a protest outside the venue.',
            th: '🏆 เมินแกรมมี่: อัลบั้มคุณดังที่สุดแห่งปีแต่ไม่ได้เข้าชิงสักรางวัล แฟนๆ กำลังนัดประท้วงหน้างาน',
            zh: '🏆 格莱美冷落：你拥有年度最畅销专辑，但零提名。粉丝们正组织在场馆外抗议。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🗣️ Boycott Publicly', th: '🗣️ ประกาศคว่ำบาตร', zh: '公开抵制' },
                consequence: { en: '🔥 Rebel Icon. You trash the academy as "corrupt." Fans cheer. You burn bridges with the industry elite.', th: '🔥 ไอคอนขบถ! คุณด่าสถาบันว่า "เน่าเฟะ" แฟนเฮ คุณเผาสะพานทิ้งกับพวกผู้ใหญ่ในวงการ', zh: '🔥 叛逆偶像。你以此学院“以此”。粉丝以此。你与以此以此以此以此。' },
                stats: { competence: 40, ethics: 30, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🕵️ Attend & Clap', th: '🕵️ ไปงานแล้วตบมือ', zh: '出席并鼓掌' },
                consequence: { en: '👔 Class Act. You go, smile, and clap for winners. "It\'s an honor just to be creating." Industry respects your professionalism.', th: '👔 ผู้ดีมาก! คุณไป ยิ้ม และตบมือ "แค่ได้ทำงานศิลปะก็เป็นเกียรติแล้ว" วงการนับถือความเป็นมืออาชีพ', zh: '👔 绅士风度。你去，微笑，为赢家以此。“能以此就是以此。”以此以此你的专业。' },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🎤 Perform Anyway', th: '🎤 ขึ้นโชว์อยู่ดี', zh: '以此表演' },
                consequence: { en: '🌟 Steal the Show. You accept a performance slot. You burn the stage down. "Who needs a trophy when you have THIS?"', th: '🌟 ขโมยซีน! รับงานโชว์ แล้วเล่นให้เวทีลุกเป็นไฟ "ใครสนถ้วยรางวัลในเมื่อคุณมี *สิ่งนี้*?"', zh: '🌟 抢尽风头。你接受表演时段。以此以此舞台。“有*这个*谁还需要以此？”' },
                stats: { competence: 60, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'D',
                text: { en: '📲 Shadow Drop Song', th: '📲 ปล่อยเพลงชน', zh: '突袭发歌' },
                consequence: { en: '😈 Petty Genius. You release a new hit single exactly when the show starts. You trend higher than the awards.', th: '😈 อัจฉริยะขี้แกล้ง! ปล่อยซิงเกิลใหม่ตอนงานเริ่มพอดี คุณติดเทรนด์สูงกว่างานประกาศรางวัล', zh: '😈 小气的以此。你在典礼以此以此那一刻以此新歌。你的热度以此奖项。' },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 60 }
            }
        ]
    },
    {
        id: 'mu_034',
        text: {
            en: '🎥 The Tell-All Doc: Netflix wants a raw documentary. They want to film EVERYTHING: the breakdowns, the drug use (if any), the fights. Total access.',
            th: '🎥 สารคดีแฉหมดเปลือก: Netflix อยากทำสารคดีดิบๆ ขอถ่าย *ทุกอย่าง* ทั้งตอนสติแตก การใช้ยา (ถ้ามี) การทะเลาะกัน เข้าถึงทุกซอกมุม',
            zh: '🎥 揭秘纪录片：Netflix想要一部真实的纪录片。他们想拍摄*一切*：崩溃、吸毒（如果有）、打架。完全的访问权。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✅ Full Access', th: '✅ ยอมหมด', zh: '完全以此' },
                consequence: { en: '🎭 Vulnerability. It is painful to watch. Fans cry. You look like a mess, but a human mess. Iconic status verified.', th: '🎭 ความเปราะบาง! ดูแล้วจุก แฟนร้องไห้ คุณดูเละเทะแต่เป็นมนุษย์ ยืนยันสถานะไอคอน', zh: '🎭 脆弱。看着很以此。粉丝哭了。你看起来一团糟，但是是以此以此的一团糟。以此地位确认。' },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '✂️ Editorial Control', th: '✂️ ขอคุมการตัดต่อ', zh: '编辑控制权' },
                consequence: { en: '🛡️ Curated Reality. You edit out the ugly parts. It looks great but feels "PR-managed." Critics call it a puff piece.', th: '🛡️ จัดฉากความจริง! คุณตัดส่วนทุเรศออก ดูดีนะแต่เหมือน "งาน PR" นักวิจารณ์บอกว่าเป็นงานอวยตัวเอง', zh: '🛡️ 策展的现实。你剪掉了丑陋的部分。看起来不错但感觉“公关以此”。评论家以此它是以此以此。' },
                stats: { competence: 50, ethics: -20, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🚫 Refuse', th: '🚫 ปฏิเสธ', zh: '拒绝' },
                consequence: { en: '🕶️ Mystique. "I am not content." You keep your privacy. You miss a massive marketing boom, but keep your dignity.', th: '🕶️ ความลึกลับ! "ฉันไม่ใช่คอนเทนต์" รักษาความเป็นส่วนตัว พลาดโอกาสดังแต่รักษาศักดิ์ศรี', zh: '🕶️ 神秘。“我不是内容。”你保持隐私。你错过了巨大的营销热潮，但保住了尊严。' },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: -10 }
            },
            {
                id: 'D',
                text: { en: '🎭 Scripted Drama', th: '🎭 จัดฉากดราม่า', zh: '剧本以此' },
                consequence: { en: '📺 Reality TV. You fake some fights for views. It works, huge ratings. Real musicians lose respect for you.', th: '📺 เรียลลิตี้ทีวี! แกล้งทะเลาะกันเรียกยอดวิว ได้ผล เรตติ้งพุ่ง แต่นักดนตรีตัวจริงหมดศรัทธา', zh: '📺 真人秀。你为了浏览量以此打架。以此，收视率以此。真正的音乐人以此以此。' },
                stats: { competence: 40, ethics: -40, leadership: -10, innovation: 10 }
            }
        ]
    },
    {
        id: 'mu_035',
        text: {
            en: '🏥 Nodules: You have developed vocal nodules. Surgery fixes it instantly but changes your unique tone. Rest takes 1 year but keeps your sound.',
            th: '🏥 ตุ่มที่เส้นเสียง: คุณมีตุ่มที่เส้นเสียง ผ่าตัดหายเลยแต่เนื้อเสียงเอกลักษณ์เปลี่ยน พักใช้เวลา 1 ปีแต่เสียงเดิมอยู่ครบ',
            zh: '🏥 声带小结：你的声带长了小结。手术能立竿见影但会改变你独特的音色。休息需要1年但能保住你的声音。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🔪 Surgery', th: '🔪 ผ่าตัด', zh: '手术' },
                consequence: { en: '✨ New Voice. You are back in 1 month. Your voice is "cleaner," losing its gritty character. Some fans unsubscribe.', th: '✨ เสียงใหม่! กลับมาใน 1 เดือน เสียง "ใสขึ้น" ขาดเอกลักษณ์ความแหบเสน่ห์ แฟนบางคนเลิกตาม', zh: '✨ 新声音。你1个月回归。声音“更干净”，失去了以此的特色。以此粉丝取关。' },
                stats: { competence: 40, ethics: 20, leadership: 10, innovation: -10 }
            },
            {
                id: 'B',
                text: { en: '🛌 Take the Year Off', th: '🛌 พักยาว 1 ปี', zh: '休息一年' },
                consequence: { en: '⏳ The Wait. You disappear. Zero income. You return with your legendary voice intact. The "Welcome Back" tour is huge.', th: '⏳ การรอคอย! หายตัว รายได้ศูนย์ กลับมาพร้อมเสียงตำนานครบถ้วน ทัวร์ต้อนรับกลับบ้านยิ่งใหญ่มาก', zh: '⏳ 等待。你消失了。零收入。你带着传奇以此的声音回归。“欢迎回来”巡演巨以此。' },
                stats: { competence: 30, ethics: 60, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💉 Cortisone Shots', th: '💉 ฉีดสเตียรอยด์', zh: '打封闭' },
                consequence: { en: '⚠️ Dangerous Game. You patch yourself up to finish the tour. You make millions now, but damage might be permanent later.', th: '⚠️ เกมอันตราย! ประคองอาการให้จบทัวร์ กวาดเงินล้านตอนนี้ แต่อนาคตอาจพังถาวร', zh: '⚠️ 危险游戏。你以此以此完成巡演。现在以此数百万，但以后可能是永久性以此。' },
                stats: { competence: 40, ethics: -30, leadership: -10, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '🎹 Instrumental Album', th: '🎹 ทำเพลงบรรเลง', zh: '纯音乐专辑' },
                consequence: { en: '🎨 Pivot. You can\'t sing, so you produce a piano ambient album. It shows your range. Critics love the bravery.', th: '🎨 เปลี่ยนแนว! ร้องไม่ได้ก็ทำอัลบั้มเปียโนบรรเลง โชว์ของ นักวิจารณ์ชมความกล้าหาญ', zh: '🎨 转型。唱不了，以此以此以此以此以此。展示你的以此。评论家以此勇气。' },
                stats: { competence: 50, ethics: 40, leadership: 10, innovation: 70 }
            }
        ]
    },
    {
        id: 'mu_036',
        text: {
            en: '🎬 The Blockbuster Role: Marvel wants you as a superhero. It pays $10M but requires 6 months of filming. No music, no touring.',
            th: '🎬 บทหนังบล็อกบัสเตอร์: Marvel อยากให้คุณเป็นซูเปอร์ฮีโร่ ค่าตัว $10M แต่ต้องถ่ายหนัง 6 เดือน ห้ามทำเพลง ห้ามทัวร์',
            zh: '🎬 大片角色：漫威想让你演超级英雄。片酬1000万美元，但需要拍摄6个月。不准做音乐，不准巡演。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🦸 Take the Role', th: '🦸 รับบทฮีโร่', zh: '🦸 接下角色' },
                consequence: { en: '🌍 Global Superstar. You become a household name. Music fans are bored waiting. You are now an "Actor-Musician."', th: '🌍 ซุปตาร์โลก! คุณดังระดับครัวเรือน แฟนเพลงเบื่อที่จะรอ ตอนนี้คุณกลายเป็น "นักแสดง-นักดนตรี"', zh: '🌍 全球巨星。你家喻户晓。音乐粉丝等得不耐烦了。你现在是“演员-音乐人”。' },
                stats: { competence: 20, ethics: -10, leadership: 40, innovation: -20 }
            },
            {
                id: 'B',
                text: { en: '🚫 Stick to Music', th: '🚫 เลือกดนตรี', zh: '坚持音乐' },
                consequence: { en: '🎸 Artist First. "I am not an action figure." Credibility skyrockets. You miss mainstream dominance but keep your soul.', th: '🎸 ศิลปินตัวจริง! "ฉันไม่ใช่หุ่นฟิกเกอร์" เครดิตพุ่งปรี๊ด พลาดโอกาสครองตลาดแมสแต่รักษาจิตวิญญาณไว้ได้', zh: '🎸 艺术家至上。“我不是动作玩偶。”信誉飙升。你错过了主流以此，但保住了灵魂。' },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '🎵 Soundtrack Only', th: '🎵 ทำแค่เพลงประกอบ', zh: '只做原声带' },
                consequence: { en: '✨ Creative Middle. You curate the soundtrack. You get the association without the tights. Smart pivot.', th: '✨ ทางสายกลาง! คุณคุมเพลงประกอบ ได้เกาะกระแสโดยไม่ต้องใส่ชุดรัดรูป ฉลาด', zh: '✨ 创意中间派。你以此原声带。你获得了关联以此以此穿紧身衣。明智以此。' },
                stats: { competence: 60, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: { en: '🎭 Do Both', th: '🎭 ควบสองอย่าง', zh: '两者都做' },
                consequence: { en: '💀 Burnout. You film by day, record by night. You sleep 2 hours. The acting is stiff, the album is rushed. Flop.', th: '💀 ร่างพัง! ถ่ายหนังตอนเช้า อัดเพลงตอนดึก นอน 2 ชม. การแสดงแข็งทื่อ อัลบั้มก็เผา พัง', zh: '💀以此。白天拍戏，晚上以此。睡2小时。演技僵硬，以此以此。搞砸了。' },
                stats: { competence: -20, ethics: 0, leadership: -20, innovation: -10 }
            }
        ]
    },
    {
        id: 'mu_037',
        text: {
            en: '💰 The Catalog Sale: A private equity firm offers $200M for your entire song catalog. You lose all rights, but you are set for life.',
            th: '💰 ขายแคตตาล็อกเพลง: บริษัทเอกชนเสนอเงิน $200M ซื้อเพลงทั้งหมดของคุณ คุณเสียสิทธิ์ทั้งหมด แต่สบายไปทั้งชาติ',
            zh: '💰 目录出售：一家私募股权公司出价2亿美元购买你的全部歌曲目录。你失去所有权利，但几辈子不愁吃穿。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💵 Sell Everything', th: '💵 ขายเกลี้ยง', zh: '全部以此' },
                consequence: { en: '🏖️ Retired Rich. Cash out. "I can write more." Fans say you "sold your soul." You cry in your Ferrari.', th: '🏖️ เกษียณแบบรวยๆ! รับเงิน "เดี๋ยวแต่งใหม่ได้" แฟนบอก "ขายวิญญาณ" คุณร้องไห้ในเฟอร์รารี่', zh: '🏖️ 富裕退休。以此。“我可以再写。”粉丝说你“出卖灵魂。”你在法拉利里哭泣。' },
                stats: { competence: 20, ethics: -40, leadership: -20, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🚫 Keep Ownership', th: '🚫 เก็บสิทธิ์ไว้', zh: '保留所有权' },
                consequence: { en: '🛡️ Bet on Yourself. "My art is my children." Long-term income continues. You control your legacy. Respect +100.', th: '🛡️ เดิมพันกับตัวเอง! "งานศิลป์คือลูกของฉัน" รายได้ระยะยาวไหลมาเรื่อยๆ คุณคุมตำนานตัวเอง เคารพ +100', zh: '🛡️ 押注自己。“我的艺术是我的孩子。”长期收入以此。你控制以此遗产。尊重+100。' },
                stats: { competence: 50, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '🤝 Partial Sale', th: '🤝 ขายบางส่วน', zh: '以此出售' },
                consequence: { en: '💼 Hedge Bets. Sell 50% stake. Smart investment strategy. You stay involved but de-risk your assets.', th: '💼 กระจายความเสี่ยง! ขายหุ้น 50% กลยุทธ์การลงทุนที่ฉลาด ยังมีส่วนร่วมแต่ลดความเสี่ยง', zh: '💼 对冲下注。出售50%股份。明智的投资策略。你保持参与但降低以此风险。' },
                stats: { competence: 40, ethics: -10, leadership: 30, innovation: 10 }
            },
            {
                id: 'D',
                text: { en: '🏦 Sell Future Royalties', th: '🏦 ขายค่าลิขสิทธิ์ล่วงหน้า', zh: '出售未来版税' },
                consequence: { en: '📉 Bowie Bonds. You keep ownership but sell the income stream. Complicated financial instrument. High risk.', th: '📉 บอนด์โบวี่! เก็บสิทธิ์แต่ขายกระแสรายได้ เครื่องมือการเงินซับซ้อน เสี่ยงสูง', zh: '📉 鲍伊债券。你保留所有权但出售收入流。复杂的金融以此。高风险。' },
                stats: { competence: 30, ethics: 10, leadership: 10, innovation: 20 }
            }
        ]
    },
    {
        id: 'mu_038',
        text: {
            en: '🎼 The Copycat Claim: A 14-year-old on TikTok proves your new hit has the EXACT same melody as their obscure upload. It was accidental.',
            th: '🎼 ข้อหาก็อปเพลง: เด็ก 14 ใน TikTok พิสูจน์ว่าเพลงฮิตใหม่ของคุณทำนองเหมือนของเขา *เป๊ะ* มันเป็นเรื่องบังเอิญ',
            zh: '🎼 抄袭指控：一个14岁的TikTok用户证明你的新热单旋律与他们上传的冷门视频*完全*相同。这是巧合。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤝 Give 50% Credit', th: '🤝 ให้เครดิต 50%', zh: '给50%署名' },
                consequence: { en: '✅ Benevolent God. You add them as a writer. They get rich. You look fair and generous. Crisis averted.', th: '✅ เทพบุตรใจดี! เพิ่มชื่อเขาเป็นคนแต่ง เขารวยเละ คุณดูยุติธรรมและใจกว้าง วิกฤตจบ', zh: '✅ 仁慈的上帝。你加他们为以此。他们发财了。你看起来公平大方。危机以此。' },
                stats: { competence: 40, ethics: 80, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🥊 Deny Everything', th: '🥊 ปฏิเสธทุกอย่าง', zh: '否认一切' },
                consequence: { en: '🛡️ "Only 12 Notes." You fight back. Fans defend you, but you look like you are bullying a kid. PR mess.', th: '🛡️ "โน้ตมีแค่ 12 ตัว" คุณสู้กลับ แฟนปกป้องคุณแต่คุณดูเหมือนรังแกเด็ก เละเทะ', zh: '🛡️ “只有12个音符。”你以此反击。粉丝以此你，但你看起来像在欺负小孩。公关一团糟。' },
                stats: { competence: 30, ethics: -30, leadership: -10, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💰 Hush Money', th: '💰 จ่ายเงินปิดปาก', zh: '封口费' },
                consequence: { en: '🤐 NBA Signed. You pay $100k for silence. Efficient, but dark. If it leaks, you are done.', th: '🤐 เซ็น NDA! จ่าย $100k ปิดปาก ประหยัดแต่ดำมืด ถ้าหลุดมาคือจบเห่', zh: '🤐 签署保密协议。你以此10万买以此沉默。高效，但以此。如果泄露，你就完了。' },
                stats: { competence: 20, ethics: -50, leadership: -20, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '🤐 Ignore', th: '🤐 เมิน', zh: '无视' },
                consequence: { en: '🎲 The Gamble. You hope it blows over. It gains steam. "Thief" comments spam your posts for months.', th: '🎲 วัดดวง! หวังว่าจะเงียบ มันดั่งกระพือ คอมเมนต์ "ขี้ก็อป" ถล่มโพสต์คุณเป็นเดือน', zh: '🎲 赌博。你以此以此它过去。它以此发酵。“小偷”评论刷屏好几个月。' },
                stats: { competence: -10, ethics: -20, leadership: -10, innovation: 0 }
            }
        ]
    },
    {
        id: 'mu_039',
        text: {
            en: '🗳️ The Campaign Song: A politician with views you DETEST is using your song as their walk-out anthem. Your DMs are full of angry fans.',
            th: '🗳️ เพลงหาเสียง: นักการเมืองที่มีแนวคิดที่คุณ *เกลียด* ใช้เพลงคุณเปิดตัว แฟนคลับทัก DM มาด่าเพียบ',
            zh: '🗳️ 竞选歌曲：一个你*厌恶*政见的政治家把你的歌当作入场曲。你的私信被愤怒的粉丝塞爆了。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛑 Cease & Desist', th: '🛑 สั่งห้ามใช้/ฟ้อง', zh: '停止并以此' },
                consequence: { en: '🔥 Public Denouncement. You sue. "I hate this guy." Fans cheer. Half the country hates you. Sales split.', th: '🔥 ประกาศตัดญาติ! คุณฟ้อง "ฉันเกลียดไอ้นี่" แฟนเฮ คนครึ่งประเทศเกลียดคุณ ยอดขายแบ่งครึ่ง', zh: '🔥 公开以此。你以此。“我以此这家伙。”粉丝欢呼。半个国家以此你。销量以此。' },
                stats: { competence: 40, ethics: 60, leadership: 70, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🤐 Stay Neutral', th: '🤐 เป็นกลาง', zh: '保持中立' },
                consequence: { en: '⚖️ "Art is Universal." You let it slide. You look weak/complicit. Sales stay consistent. Safe.', th: '⚖️ "ศิลปะเป็นสากล" คุณปล่อยผ่าน คุณดูอ่อนแอ/สมรู้ร่วมคิด ยอดขายคงที่ ปลอดภัย', zh: '⚖️ “艺术是普遍的。”你放任不管。你看起来软弱/同谋。销量保持稳定。安全。' },
                stats: { competence: 30, ethics: -20, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '💰 Ask for Royalties', th: '💰 เรียกค่าลิขสิทธิ์หนักๆ', zh: '索要版税' },
                consequence: { en: '💵 Capitalist Move. You demand HUGE fees. Profit from their usage. Cynical but profitable.', th: '💵 ทุนนิยม! เรียกค่าธรรมเนียม *มหาศาล* หากินกับการใช้งานของเขา มองโลกแง่ร้ายแต่กำไรดี', zh: '💵 资本家以此。你以此巨额费用。从他们的以此中获利。以此但以此。' },
                stats: { competence: 50, ethics: -30, leadership: 0, innovation: 20 }
            },
            {
                id: 'D',
                text: { en: '🎤 Write Anti-Song', th: '🎤 แต่งเพลงด่า', zh: '写反击歌' },
                consequence: { en: '💣 Cultural Bomb. You release a diss track against them immediately. Total chaos. You define the election.', th: '💣 ระเบิดวัฒนธรรม! ปล่อยเพลงด่าสวนทันที วุ่นวายสุดๆ คุณกำหนดผลการเลือกตั้งได้เลย', zh: '💣 文化炸弹。你立即发以此一首diss以此以此以此他们。以此以此。你以此了选举。' },
                stats: { competence: 50, ethics: 50, leadership: 80, innovation: 60 }
            }
        ]
    },
    {
        id: 'mu_040',
        text: {
            en: '🏝️ The Island Festival: You are booked to headline a luxury festival in the Bahamas. Tickets are $10k. Arriving, you see it\'s a disaster. No food, tents, chaos.',
            th: '🏝️ เทศกาลเกาะส่วนตัว: คุณถูกจองตัวเป็นเฮดไลน์งานหรูที่บาฮามาส ตั๋วใบละ $10k พอไปถึง... เละเทะ ไม่มีอาหาร มีแต่เต็นท์พังๆ',
            zh: '🏝️ 海岛音乐节：你受邀在巴哈马的一个豪华音乐节压轴表演。票价1万美元。到达后，你发现那是一场灾难。没食物，只有帐篷，一片混乱。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🏃 Leave Immediately', th: '🏃 หนีทันที', zh: '立刻离开' },
                consequence: { en: '✈️ Save Yourself. You hop back on the jet. Post "Not my fault." Fans stranded. You look selfish.', th: '✈️ เอาตัวรอด! โดดขึ้นเจ็ตหนี โพสต์ "ไม่ใช่ความผิดฉัน" แฟนๆ ติดเกาะ คุณดูเห็นแก่ตัว', zh: '✈️以此自己。你以此以此喷气机。发以此“不是我的错。”粉丝以此。你看起来自私。' },
                stats: { competence: 30, ethics: -20, leadership: -10, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🎤 Play for the Kids', th: '🎤 เล่นปลอบใจ', zh: '为孩子们表演' },
                consequence: { en: '🎻 Titanic Band. You play acoustic on a crate. Comfort the stranded rich kids. Legendary stories emerge.', th: '🎻 วงไททานิค! นั่งเล่นกีตาร์โปร่งบนลังไม้ ปลอบใจลูกคนรวยที่ติดเกาะ ตำนานเกิดตรงนี้', zh: '🎻 泰坦尼克号乐队。你在木箱上以此以此吉他。以此被以此的富二代。传奇以此以此。' },
                stats: { competence: 60, ethics: 80, leadership: 90, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '📱 Livestream the Chaos', th: '📱 ไลฟ์แฉความเละ', zh: '直播混乱' },
                consequence: { en: '🔥 Reporter Mode. You expose the organizers real-time. Viral gold. You become the face of the documentary.', th: '🔥 โหมดนักข่าว! แฉคนจัดงานแบบเรียลไทม์ ไวรัลทองคำ คุณกลายเป็นหน้าตาของสารคดีเรื่องนี้', zh: '🔥 记者模式。你以此曝光以此以此。病毒式以此。你成为纪录片的以此人物。' },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 60 }
            },
            {
                id: 'D',
                text: { en: '👮 Help Organize', th: '👮 ช่วยจัดระเบียบ', zh: '协助以此' },
                consequence: { en: '🛡️ Crisis Manager. You take charge. Distribute water. Fix logistics. You save the day? Liability nightmare though.', th: '🛡️ ผู้จัดการวิกฤต! คุณคุมงาน แจกน้ำ แก้ปัญหาหน้างาน คุณกู้สถานการณ์? แต่เสี่ยงโดนฟ้องร่วมนะ', zh: '🛡️ 危机经理。你接管。以此水。修理后勤。你以此了局面？虽然是以此噩梦。' },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 10 }
            }
        ]
    },
    {
        id: 'mu_041',
        text: {
            en: '🔒 The Platform Exclusive: Streaming Giant X offers $30M if you pull your music from all other platforms for 1 year. Fans on other apps will be furious.',
            th: '🔒 สัญญาผูกขาด: สตรีมมิ่งเจ้าดังเสนอ $30M ถ้าคุณถอดเพลงจากที่อื่นทั้งหมด 1 ปี แฟนๆ บนแอปอื่นโกรธแน่',
            zh: '🔒 平台独占：流媒体巨头X出价3000万美元，如果你从所有其他平台撤下音乐1年。其他应用上的粉丝会暴怒。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✍️ Sign the Deal', th: '✍️ เซ็นสัญญา', zh: '签协议' },
                consequence: { en: '💰 Secured Bag. "Sorry Spotify users." Income secure. Reach drops 60%. Irrelevancy risks.', th: '💰 รับทรัพย์! "ขอโทษนะชาว Spotify" รายได้ชัวร์ การเข้าถึงลด 60% เสี่ยงดับ', zh: '💰 落袋为安。“以此Spotify用户。”收入以此。触达以此60%。以此以此风险。' },
                stats: { competence: 40, ethics: -30, leadership: -20, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🚫 Reject', th: '🚫 ปฏิเสธ', zh: '拒绝' },
                consequence: { en: '🌍 Universal Access. "Music is for everyone." Fans rejoice. You lose the $30M upfront but keep long-term growth. Respect.', th: '🌍 ฟังได้ทั่วโลก! "ดนตรีมีไว้สำหรับทุกคน" แฟนเฮ อดเงินก้อน $30M แต่ได้การเติบโตระยะยาว นับถือ', zh: '🌍 普遍以此。“音乐以此以此所有人。”粉丝以此。你以此了3000万预付，但保持长期以此。尊重。' },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🎁 Exclusive Content Only', th: '🎁 ให้แค่คอนเทนต์พิเศษ', zh: '仅限独家内容' },
                consequence: { en: '✨ Smart Compromise. Give them a bonus album/doc, keep main music everywhere. Best of both worlds.', th: '✨ ประนีประนอมแบบฉลาด! ให้อัลบั้มพิเศษ/สารคดี เพลงหลักอยู่ครบทุกที่ ได้ทั้งขึ้นทั้งล่อง', zh: '✨ 明智以此。给他们以此以此专辑/以此，主打以此保持全平台。两全其美。' },
                stats: { competence: 60, ethics: 10, leadership: 30, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '⏳ Short Window', th: '⏳ ช่วงเวลาสั้นๆ', zh: '短窗口期' },
                consequence: { en: '⏱️ 1 Week Exclusive. Take $5M instead. Fans are annoyed but can wait 7 days. Acceptable greed.', th: '⏱️ เอ็กซ์คลูซีฟ 1 อาทิตย์! รับ $5M แทน แฟนรำคาญแต่รอ 7 วันได้ ความโลภที่รับได้', zh: '⏱️ 1周独占。拿500万。粉丝厌以此但能等7天。可以以此的贪婪。' },
                stats: { competence: 40, ethics: 10, leadership: 10, innovation: 20 }
            }
        ]
    },
    {
        id: 'mu_042',
        text: {
            en: '👻 The Hologram: Tech bros want to create a hologram of your deceased bandmate for a world tour. They say "It honors his memory." It pays insane money.',
            th: '👻 โฮโลแกรม: บริษัทเทคอยากสร้างโฮโลแกรมเพื่อนร่วมวงที่เสียชีวิตของคุณเพื่อเวิลด์ทัวร์ เขาบอก "เพื่อรำลึกถึง" จ่ายหนักมาก',
            zh: '👻 全息图：科技兄弟想为你已故的乐队成员制作全息图进行世界巡演。他们说“这是为了纪念他。”报酬高得离谱。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚫 "Let Him Rest"', th: '🚫 "ให้มันพักเถอะ"', zh: '“让他安以此”' },
                consequence: { en: '🕊️ Respect. You refuse. "It\'s ghoulish." Fans respect your integrity. You miss a $100M tour.', th: '🕊️ ความเคารพ! คุณปฏิเสธ "มันน่าขนลุก" แฟนเคารพในศักดิ์ศรีคุณ คุณพลาดทัวร์ร้อยล้าน', zh: '🕊️ 尊重。你拒绝。“这很以此。”粉丝尊重你的正直。你错过了1亿的巡演。' },
                stats: { competence: 40, ethics: 80, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '💸 Do the Tour', th: '💸 จัดทัวร์เลย', zh: '做巡演' },
                consequence: { en: '💀 Digital Grave Robbing. It\'s weird, but profitable. Fans cry. Critics pan it. Soul destroyed.', th: '💀 ปล้นสุสานดิจิทัล! มันแปลกแต่กำไรดี แฟนร้องไห้ นักวิจารณ์สับเละ จิตวิญญาณพัง', zh: '💀 数字以此以此。很怪，但赚钱。粉丝以此。评论家以此。灵魂以此。' },
                stats: { competence: 30, ethics: -50, leadership: -20, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '📽️ Tribute Show', th: '📽️ โชว์รำลึกรอบเดียว', zh: '以此演出' },
                consequence: { en: '🕯️ One Night Only. Proceeds to charity. Tasteful usage of tech. Honorable tribute.', th: '🕯️ คืนเดียวเท่านั้น! รายได้เข้าการกุศล ใช้เทคโนโลยีอย่างมีรสนิยม การรำลึกที่มีเกียรติ', zh: '🕯️ 仅此一夜。收益捐以此以此。有以此地以此科技。光荣的以此。' },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'D',
                text: { en: '💾 Avatars', th: '💾 อวตาร', zh: '以此以此' },
                consequence: { en: '🎨 Gorillaz Pivot. Don\'t pretend it\'s real. Make cartoony avatars. Creative pivot. Fun and non-creepy.', th: '🎨 เปลี่ยนแนว Gorillaz! อย่าแกล้งว่าเหมือนจริง ทำเป็นอวตารการ์ตูนไปเลย สร้างสรรค์ สนุก ไม่หลอน', zh: '🎨 Gorillaz以此。别假装是真实的。做卡通以此。以此以此。有趣且不惊悚。' },
                stats: { competence: 50, ethics: 20, leadership: 10, innovation: 80 }
            }
        ]
    },
    {
        id: 'mu_043',
        text: {
            en: '🌍 The Benefit: A massive natural disaster hits. The world looks to you to organize "Live Aid 2.0." It’s a logistical nightmare and you make $0.',
            th: '🌍 คอนเสิร์ตการกุศล: ภัยพิบัติครั้งใหญ่เกิดขึ้น โลกหวังให้คุณจัด "Live Aid 2.0" งานช้างมหาหินและคุณไม่ได้เงินสักบาท',
            zh: '🌍 义演：巨大的自然灾害来袭。全世界都指望你组织“Live Aid 2.0”。这是后勤噩梦，而且你一分钱也赚不到。'
        },
        options: [
            {
                id: 'A',
                text: { en: '👑 Organize It', th: '👑 เป็นแม่งานจัดเลย', zh: '组织它' },
                consequence: { en: '🏛️ Global Leader. Stress level 100. You save lives. You are now a political icon. History remembers this.', th: '🏛️ ผู้นำโลก! เครียดระดับร้อย คุณช่วยชีวิตคน ตอนนี้คุณคือไอคอนทางการเมือง ประวัติศาสตร์จารึก', zh: '🏛️ 全球领袖。压力100。你以此以此生命。你现在是政治以此。历史以此铭记。' },
                stats: { competence: 80, ethics: 100, leadership: 100, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '💰 Donate & Post', th: '💰 บริจาคและโพสต์', zh: '捐款并以此' },
                consequence: { en: '✉️ Checkbook Activism. You write a check for $1M. Easy. Moral, but you are not leading the charge.', th: '✉️ สมุดเช็ดกู้โลก! เซ็นเช็ค $1M ง่ายๆ มีศีลธรรมแต่ไม่ได้เป็นผู้นำทัพ', zh: '✉️ 支票以此以此。你开了一张100万的支票。容易。道德，但都没带头。' },
                stats: { competence: 30, ethics: 40, leadership: -10, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🎤 Just Perform', th: '🎤 แค่ไปร้องเพลง', zh: '只表演' },
                consequence: { en: '🎸 Show Up. Let someone else organize. You just play. Safe contributor. Good vibes.', th: '🎸 โผล่ไปงาน! ให้คนอื่นจัด คุณแค่ไปร้อง ผู้สนับสนุนที่ปลอดภัย บรรยากาศดี', zh: '🎸 出现。让别人组织。你只以此。安全的贡献者。氛围不错。' },
                stats: { competence: 40, ethics: 30, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '🛌 "Too Busy"', th: '🛌 "ยุ่งอยู่"', zh: '“太忙了”' },
                consequence: { en: '📉 Tone Deaf. You ignore it. PR disaster. "Out of touch billionaire." Fame takes a hit.', th: '📉 หูทวนลม! คุณเมิน หายนะ PR "มหาเศรษฐีไม่สนโลก" ชื่อเสียงป่นปี้', zh: '📉以此以此。你无视它。公关以此。“脱以此以此亿万富翁。”名以此以此。' },
                stats: { competence: -10, ethics: -50, leadership: -60, innovation: 0 }
            }
        ]
    },
    {
        id: 'mu_044',
        text: {
            en: '🏠 The Family Show: Production company wants to film your chaotic family life. "The [YourName]s." Think Kardashians. Your kids are teenagers.',
            th: '🏠 เรียลลิตี้ครอบครัว: กองถ่ายอยากถ่ายชีวิตครอบครัววุ่นๆ ของคุณ สไตล์ Kardashians ลูกคุณกำลังวัยรุ่นเลย',
            zh: '🏠 家庭真人秀：制作公司想拍摄你混乱的家庭生活。“[你的名字]一家”。想想卡戴珊家族。你的孩子正处于青春期。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✅ Sign the Contract', th: '✅ เซ็นสัญญา', zh: '签合同' },
                consequence: { en: '📺 Trash TV Royalty. Sell your privacy. Kids become influencers instantly. Family drama publicized. You are rich but trashy.', th: '📺 ราชาทีวีขยะ! ขายความเป็นส่วนตัว ลูกกลายเป็นอินฟลูฯ ทันที ดราม่าบ้านแตกออกสื่อ รวยนะแต่ดูโลว์', zh: '📺 垃圾电视皇室。出卖隐私。孩子以此成为网红。家庭以此公开。你很有钱但很俗。' },
                stats: { competence: 30, ethics: -40, leadership: -20, innovation: -10 }
            },
            {
                id: 'B',
                text: { en: '🚫 Protect the Kids', th: '🚫 ปกป้องลูก', zh: '保护孩子' },
                consequence: { en: '👨‍👩‍👧‍👦 Parenting Win. "My job is public, my life is private." You turn down millions to save your kids\' normality.', th: '👨‍👩‍👧‍👦 ชนะเลิศเรื่องเลี้ยงลูก! "งานคือเรื่องสาธารณะ ชีวิตคือเรื่องส่วนตัว" ปฏิเสธเงินล้านเพื่อความปกติของลูก', zh: '👨‍👩‍👧‍👦以此以此。 “我的以此是公开的，我的以此是以此的。”你拒绝了数百万以以此孩子的正常以此。' },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🎬 Documentary Series', th: '🎬 ทำซีรีส์สารคดี', zh: '纪录片系列' },
                consequence: { en: '🧐 Classy Approach. Serious tone only. Focus on the art/tour clashes. Less trashy. More "Masterclass."', th: '🧐 แนวมีคลาส! โทนจริงจัง เน้นเรื่องงานศิลป์กับทัวร์ ไม่น้ำเน่า ออกแนว "Masterclass"', zh: '🧐以此以此。严肃以此。以此于艺术/巡演冲突。少点以此。更像“以此课”。' },
                stats: { competence: 40, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: { en: '📹 YouTube Vlogs', th: '📹 ทำ Vlogs ลงยูทูบ', zh: 'YouTube Vlog' },
                consequence: { en: '🤳 Controlled Narrative. You control the edit. Cut out the fights. Monetize directly. Keeps it light.', th: '🤳 คุมเรื่องเอง! คุณตัดต่อเอง ตัดตอนทะเลาะออก รับเงินโดยตรง เบาสมองกว่า', zh: '🤳以此叙事。你控制剪辑。剪掉以此。直接以此。保持轻松。' },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 30 }
            }
        ]
    },
    {
        id: 'mu_045',
        text: {
            en: '👋 The Farewell: You are tired. You want to announce a "Final Tour" and retire. Promoters say you can milk this for 3 years.',
            th: '👋 การอำลา: คุณเหนื่อยแล้ว อยากประกาศ "ทัวร์อำลา" และเกษียณ โปรโมเตอร์บอกว่าลากยาวโกยเงินได้ 3 ปีนะ',
            zh: '👋 告别：你累了。你想宣布“告别巡演”并退休。推广商说你可以以此以此以此3年。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🗓️ 3-Year Farewell', th: '🗓️ อำลายาว 3 ปี', zh: '3年告别' },
                consequence: { en: '🏃 The Marathon. The "Long Goodbye." Make $500M. It becomes a job. You hate the songs by the end.', th: '🏃 มาราธอน! "การลาที่ยาวนาน" ฟันเงิน $500M กลายเป็นงานประจำ คุณเกลียดเพลงตัวเองตอนจบ', zh: '🏃 马拉松。“漫长的以此。”赚5亿。这变成了工作。最后你以此以此这些歌。' },
                stats: { competence: 50, ethics: -10, leadership: 30, innovation: -20 }
            },
            {
                id: 'B',
                text: { en: '⚡ Immediate Retirement', th: '⚡ เกษียณเดี๋ยวนี้', zh: '立即退休' },
                consequence: { en: '🎤 Drop the Mic. "I\'m done today." Legendary exit. Leave them wanting more. Mythical status.', th: '🎤 วางไมค์! "วันนี้พอแค่นี้" ทางออกแบบตำนาน ทิ้งให้คนโหยหา สถานะเทพนิยาย', zh: '🎤 摔以此。“我以此以此以此。”传奇以此。让他们以此以此。以此地位。' },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '🔄 The "Fake" Retirement', th: '🔄 เกษียณทิพย์', zh: '“假”退休' },
                consequence: { en: '🤥 The Ozzy Move. Announce it, boost sales, then comeback in 2 years. Fans are annoyed but buy tickets anyway.', th: '🤥 มูฟออสซี่! ประกาศเรียกยอด แล้วกลับมาใน 2 ปี แฟนรำคาญแต่ก็ซื้อตั๋วอยู่ดี', zh: '🤥 奥兹以此。以此，以此销量，2年后以此。粉丝厌以此但以此买票。' },
                stats: { competence: 40, ethics: -30, leadership: -10, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '🎰 Vegas Residency', th: '🎰 ฝังตัวเวกัส', zh: '拉斯维加斯驻唱' },
                consequence: { en: '🏨 Settling Down. Stop touring. Sleep in same bed every night. Easy money. "Retirement Home" for rockers?', th: '🏨 ลงหลักปักฐาน! เลิกทัวร์ นอนเตียงเดิมทุกคืน เงินง่าย "บ้านพักคนชรา" ของชาวร็อค?', zh: '🏨 定以此。停止巡演。每晚以此以此以此床。以此以此。“摇滚以此的以此院”？' },
                stats: { competence: 50, ethics: 20, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'mu_046',
        text: {
            en: '🎥 The Biopic: A major studio wants to film your life story. They want to cast a controversial TikTok star to play you to attract Gen Z.',
            th: '🎥 หนังชีวประวัติ: สตูดิโอยักษ์ใหญ่อยากทำหนังชีวิตคุณ เขาจะเอาดารา TikTok ที่มีดราม่ามาเล่นบทคุณเพื่อดึงดูดเด็ก Gen Z',
            zh: '🎥 传记片：一家主要制片厂想拍摄你的生平故事。他们想选一位有争议的TikTok明星来扮演你，以吸引Z世代。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✅ Approve Casting', th: '✅ อนุมัติการแคสต์', zh: '批准选角' },
                consequence: { en: '🌍 Box Office Smash. It makes $1B. You hate the acting, but love the checks. New generation knows your name. Legacy solidified.', th: '🌍 ถล่มทลาย! หนังทำเงินพันล้าน คุณเกลียดการแสดงแต่ชอบเช็คที่ได้ เด็กรุ่นใหม่รู้จักคุณ ตำนานแน่นปึ้ก', zh: '🌍 票房大卖。赚了10亿。你讨厌那演技，但喜欢那支票。新一代知道了你的名字。以此以此。' },
                stats: { competence: 30, ethics: -20, leadership: 10, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🚫 Veto Casting', th: '🚫 สั่งห้ามแคสต์นี้', zh: '否决选角' },
                consequence: { en: '🎨 Integrity First. You demand a real actor. Studio threatens to cancel. You stand firm. Project delayed but respected.', th: '🎨 ศักดิ์ศรีมาก่อน! คุณขอนักแสดงตัวจริง ค่ายขู่ยกเลิกหนัง คุณยอมหักไม่ยอมงอ โปรเจกต์เลื่อนแต่คนนับถือ', zh: '🎨 正直至上。你要求真正的演员。制片厂威胁取消。你立场以此。项目推迟但受尊重。' },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🎬 Direct it Yourself', th: '🎬 กำกับเองเลย', zh: '亲自执导' },
                consequence: { en: '👁️ True Vision. High stress. It receives mixed reviews but is authentically YOU. Cult classic status.', th: '👁️ วิสัยทัศน์แท้จริง! เครียดจัด รีวิวเสียงแตกแต่มันคือตัวคุณจริงๆ เป็นหนังคัลท์', zh: '👁️ 真实愿景。高压。以此以此，但是真实的你。邪典以此地位。' },
                stats: { competence: 60, ethics: 10, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '📚 Write Book Instead', th: '📚 เขียนหนังสือแทน', zh: '写书代替' },
                consequence: { en: '📖 The Memoir. You cancel the movie and write a book. Drier, less reach, but 100% accurate. Critics love it.', th: '📖 บันทึกความทรงจำ! ยกเลิกหนังไปเขียนหนังสือ คนเข้าถึงน้อยกว่าแต่ถูกต้อง 100% นักวิจารณ์ชอบ', zh: '📖 回忆录。你取消电影写了书。以此枯燥，受众少，' },
                stats: { competence: 40, ethics: 30, leadership: 10, innovation: -10 }
            }
        ]
    },
    {
        id: 'mu_047',
        text: {
            en: '🤖 Infinite Legacy: A tech firm offers $500M to your estate (you get $100M now) to generate "new" albums using AI for 100 years after your death.',
            th: '🤖 ตำนานไร้ที่สิ้นสุด: บริษัทเทคเสนอเงิน $500M ให้กองมรดก (คุณได้ $100M ตอนนี้) เพื่อใช้ AI สร้างอัลบั้ม "ใหม่" ต่อไปอีก 100 ปีหลังคุณตาย',
            zh: '🤖 无限遗产：一家科技公司向你的遗产管理机构出价5亿美元（如果你现在拿1亿），在你死后用AI生成“新”专辑持续100年。'
        },
        options: [
            {
                id: 'A',
                text: { en: '✍️ Sign It', th: '✍️ เซ็นสัญญา', zh: '签了它' },
                consequence: { en: '🧟 Digital Zombie. "Immortality." Your family is set forever. You will never really die. It feels soulless.', th: '🧟 ซอมบี้ดิจิทัล! "ความเป็นอมตะ" ครอบครัวสบายไปตลอดกาล คุณไม่มีวันตายจริงๆ แต่มันไร้วิญญาณ', zh: '🧟 数字僵尸。“永生。”你的家庭永远以此。你永远不会真正以此。感觉没有灵魂。' },
                stats: { competence: 20, ethics: -50, leadership: -20, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '🚫 Never', th: '🚫 ไม่มีวัน', zh: '绝不' },
                consequence: { en: '🤫 The Silence. You ban AI in your will. "When I die, the music stops." Pure legacy. Fans respect the silence.', th: '🤫 ความเงียบ! คุณสั่งห้าม AI ในพินัยกรรม "เมื่อฉันตาย ดนตรีหยุด" ตำนานบริสุทธิ์ แฟนเคารพความเงียบ', zh: '🤫 沉默。你在遗嘱中禁止AI。“我以此，音乐以此。”纯粹的遗产。粉丝尊重沉默。' },
                stats: { competence: 40, ethics: 80, leadership: 50, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🔒 10-Year Limit', th: '🔒 จำกัด 10 ปี', zh: '10年以此' },
                consequence: { en: '⏳ The Lost Tapes. Allow it for 10 years only. A compromise. Fans get closure, then it ends.', th: '⏳ ม้วนเทปที่หายไป! อนุญาตแค่ 10 ปี พอเป็นพิธี แฟนๆ ได้สั่งลา แล้วก็จบ', zh: '⏳ 遗失的以此。只允许10年。妥协。粉丝得到慰藉，然后结束。' },
                stats: { competence: 40, ethics: -10, leadership: 10, innovation: 20 }
            },
            {
                id: 'D',
                text: { en: '🌪️ Burn the Demos', th: '🌪️ เผาเดโมทิ้ง', zh: '烧掉以此' },
                consequence: { en: '🔥 Scorched Earth. You destroy all unreleased music now so they can\'t train on it. Extreme but effective.', th: '🔥 เผาให้ราบ! คุณทำลายเพลงที่ไม่ได้ปล่อยทิ้งทั้งหมดเพื่อป้องกันการเทรน AI สุดโต่งแต่ได้ผล', zh: '🔥 焦土以此。你现在以此所有以此以此音乐，以此他们无法以此训练。以此但有效。' },
                stats: { competence: 30, ethics: 60, leadership: 40, innovation: 0 }
            }
        ]
    },
    {
        id: 'mu_048',
        text: {
            en: '👨‍🏫 The Masterclass: You are asked to teach an online course. "How to write a Hit." It pays well, but do you want to share your secrets?',
            th: '👨‍🏫 มาสเตอร์คลาส: คุณถูกเชิญไปสอนคอร์สออนไลน์ "วิธีแต่งเพลงฮิต" จ่ายดีมาก แต่คุณอยากบอกความลับอาชีพเหรอ?',
            zh: '👨‍🏫 大师课：你受邀教授在线课程。“如何写出金曲。”报酬丰厚，但你想分享你的秘密吗？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🎓 Teach Everything', th: '🎓 สอนหมดเปลือก', zh: '以此以此' },
                consequence: { en: '🌱 The Gardener. You share your soul. You inspire the next generation. You create your own competition. Legend teacher.', th: '🌱 คนสวน! คุณแบ่งปันจิตวิญญาณ สร้างแรงบันดาลใจรุ่นใหม่ สร้างคู่แข่งให้ตัวเอง ครูระดับตำนาน', zh: '🌱 园丁。你分享以此。以此以此下一代。你以此了自己的以此。传奇以此。' },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '💰 Teach Basics', th: '💰 สอนพื้นฐาน', zh: '教基础' },
                consequence: { en: '😐 Generic Advice. "Believe in yourself." Easy money, no real secrets revealed. Students are disappointed.', th: '😐 คำแนะนำพื้นๆ "เชื่อในตัวเองสิ" เงินง่าย ไม่มีความลับหลุด ลูกศิษย์ผิดหวัง', zh: '😐 通用建议。“相信以此。”以此，没有泄露以此秘密。学生很失望。' },
                stats: { competence: 40, ethics: -10, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: { en: '🚫 Refuse', th: '🚫 ปฏิเสธ', zh: '拒绝' },
                consequence: { en: '🪄 Magic Trick. "Can\'t teach soul." You keep the mystique. Fans think you are a natural genius. Respect maintained.', th: '🪄 มายากล! "วิญญาณมันสอนกันไม่ได้" รักษาความขลัง แฟนๆ คิดว่าคุณเป็นอัจฉริยะแต่กำเนิด คงความนับถือ', zh: '🪄 魔术。“无法教授灵魂。”你保持神秘。粉丝以为你是以此以此。以此以此。' },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: -10 }
            },
            {
                id: 'D',
                text: { en: '✍️ Write a Book', th: '✍️ เขียนตำรา', zh: '写书' },
                consequence: { en: '📘 The Manual. You publish "The Songwriter\'s Manual." More prestigious than a video course. Academic clout.', th: '📘 คู่มือ! ตีพิมพ์ "คู่มือนักแต่งเพลง" ดูขลังกว่าคอร์สวิดีโอ ได้เครดิตทางวิชาการ', zh: '📘 手册。你出版“以此以此手册”。比以此以此以此以此。学术以此。' },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'mu_049',
        text: {
            en: '🎸 Hall of Fame: You are being inducted into the Hall of Fame. You have to choose who inducts you. It\'s a political statement.',
            th: '🎸 หอเกียรติยศ: คุณได้รับเลือกเข้า Hall of Fame ต้องเลือกคนมากล่าวเชิดชูเกียรติ มันเป็นการแสดงจุดยืนทางการเมือง',
            zh: '🎸 名人堂：你入选了名人堂。你必须选择谁来引荐你。这是一种政治声明。'
        },
        options: [
            {
                id: 'A',
                text: { en: '👑 Your Rival', th: '👑 คู่แข่งตลอดกาล', zh: '你的对手' },
                consequence: { en: '🤝 Ultimate Respect. You invite your biggest enemy. "Respect." The world cries. Ultimate power move.', th: '🤝 ความเคารพสูงสุด! เชิญศัตรูเบอร์หนึ่งมา "เคารพนะ" โลกร้องไห้ มูฟที่ทรงพลังที่สุด', zh: '🤝 终极尊重。以此以此最大的以此。“尊重。”世界以此。终极以此以此。' },
                stats: { competence: 60, ethics: 60, leadership: 80, innovation: 30 }
            },
            {
                id: 'B',
                text: { en: '🌟 The Pop Star', th: '🌟 ป๊อปสตาร์รุ่นใหม่', zh: '以此以此' },
                consequence: { en: '⚡ Torch Pass. Invite the biggest current pop star. Connect to youth. Validates you to Gen Z. Smart.', th: '⚡ ส่งต่อคบเพลิง! เชิญป๊อปสตาร์ตัวท็อป เชื่อมต่อวัยรุ่น รับรองความเก๋าต่อ Gen Z ฉลาด', zh: '⚡ 传递以此。邀请以此以此流行以此。连接年轻人。向Gen Z以此你。以此。' },
                stats: { competence: 40, ethics: 20, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '🎸 Your Mentor', th: '🎸 ครูของคุณ', zh: '你的导师' },
                consequence: { en: '👴 Traditional. The old legend who found you. Traditional, respectful, boring. Safe choice.', th: '👴 ดั้งเดิม! ตำนานเก่าแก่ที่ค้นพบคุณ ดั้งเดิม เคารพ แต่น่าเบื่อ ทางเลือกปลอดภัย', zh: '👴 传统。发现你的老传奇。传统，尊重，无聊。安全以此。' },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: { en: '🎤 Yourself', th: '🎤 ตัวเอง', zh: '你自己' },
                consequence: { en: '🦁 Kanye Mode. Give your own speech. "Nobody made me but me." Arrogant but legendary. Memorable.', th: '🦁 โหมดคานเย! พูดเองเลย "ไม่มีใครสร้างฉันนอกจากฉัน" หยิ่งผยองแต่เป็นตำนาน น่าจดจำ', zh: '🦁 侃爷模式。以此以此以此。“以此造就了我，除了以此。”傲慢但传奇。难忘。' },
                stats: { competence: 50, ethics: -20, leadership: 40, innovation: 40 }
            }
        ]
    },
    {
        id: 'mu_050',
        text: {
            en: '🌅 The Swan Song: You are recording your FINAL song. What is the message? This is how history will remember you.',
            th: '🌅 เพลงสั่งลา: คุณกำลังอัดเพลง *สุดท้าย* ในชีวิต ข้อความคืออะไร? ประวัติศาสตร์จะจดจำคุณแบบนี้',
            zh: '🌅 天鹅之歌：你正在录制最后的绝唱。传达什么信息？历史将这样记住你。'
        },
        options: [
            {
                id: 'A',
                text: { en: '❤️ "Love is All"', th: '❤️ "ความรักคือทุกสิ่ง"', zh: '“爱就是一切”' },
                consequence: { en: '💐 The Ballad. Simple, universal. Played at weddings and funerals forever. A safe, warm legacy.', th: '💐 เพลงบัลลาด! เรียบง่าย สากล เปิดในงานแต่งและงานศพตลอดไป ตำนานที่อบอุ่นและปลอดภัย', zh: '💐 民谣。简单，以此。永远在婚礼和葬礼上播放。安全，以此的遗产。' },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: { en: '🔥 "Burn it Down"', th: '🔥 "เผามันให้วอด"', zh: '“以此以此”' },
                consequence: { en: '🤘 Punk Exit. Anarchy. Rage against the dying of the light. Cult hero exit. Fans riot.', th: '🤘 ทางออกชาวพังก์! อนาธิปไตย เกรี้ยวกราดก่อนแสงดับลา ทางออกฮีโร่ลัทธิ แฟนๆ จลาจล', zh: '🤘 朋克以此。以此。以此以此以此以此。以此以此以此。粉丝以此。' },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: 60 }
            },
            {
                id: 'C',
                text: { en: '🧩 "The Puzzle"', th: '🧩 "ปริศนา"', zh: '“拼图”' },
                consequence: { en: '🎨 Avant-Garde. A strange, 20-minute track. Critics analyze it for decades. Misunderstood genius.', th: '🎨 ล้ำยุค! เพลงประหลาด 20 นาที นักวิจารณ์ตีความไปอีกหลายทศวรรษ อัจฉริยะผู้ถูกเข้าใจผิด', zh: '🎨 前卫。以此以此的20分钟以此。以此分析了几十年。被以此的以此。' },
                stats: { competence: 60, ethics: 30, leadership: 10, innovation: 80 }
            },
            {
                id: 'D',
                text: { en: '🤐 Silence', th: '🤐 ความเงียบ', zh: '沉默' },
                consequence: { en: '🌌 The Void. 4 minutes of silence. "The music is in you." Pretentious? Or profound? History debates it.', th: '🌌 ความว่างเปล่า! ความเงียบ 4 นาที "ดนตรีอยู่ในตัวคุณ" ดัดจริต? หรือลึกซึ้ง? ประวัติศาสตร์ถกเถียงกัน', zh: '🌌 虚空。4分钟沉默。“音乐在你以此。”以此？还是以此？历史对此以此。' },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 50 }
            }
        ]
    }
];


