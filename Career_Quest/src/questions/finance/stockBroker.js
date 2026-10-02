
export const stockBrokerQuestions = [
    // SECTION 1: ROOKIE YEAR & ETHICAL FOUNDATIONS (Questions 1-5)
    {
        id: 'sb_001',
        text: {
            en: '📉 The High-Stakes Panic: A retired client calls you screaming as their $1.2M portfolio (life savings) drops 8% in a morning "flash crash". They want to sell EVERYTHING immediately. Selling now locks in a $96k loss. Your analysis suggests a rebound within 48 hours.',
            th: '📉 ความตื่นตระหนกเดิมพันสูง: ลูกค้าวัยเกษียณโทรหาคุณด้วยเสียงตะโกนเมื่อพอร์ตโฟลิโอ $1.2M ลดลง 8% ในเช้าที่มี "flash crash" พวกเขาต้องการขายทุกอย่างทันที การขายตอนนี้จะล็อคการขาดทุน $96k ผลวิเคราะห์ของคุณชี้ว่าจะฟื้นตัวใน 48 ชั่วโมง',
            zh: '📉 高压恐慌：一位退休客户向你尖叫，因为受"闪崩"影响，他们120万美元的投资组合在一个早晨下跌了8%。他们想立即清仓。现在卖出将锁定9.6万美元的损失。你的分析表明会在48小时内反弹。'
        },
        options: [
            { id: 'A', text: { en: '🧘 The Calm Hand: "Sir, selling now is a permanent loss. Let\'s hold or even buy the dip."', th: '🧘 มือที่นิ่งสงบ: "ท่านครับ การขายตอนนี้คือการขาดทุนถาวร มาถือต่อหรือซื้อเพิ่มในช่วงที่ราคาลดลงเถอะครับ"', zh: '🧘 冷静应对："先生，现在卖出是永久性损失。让我们持有，甚至抄底。"' }, consequence: { en: '✅ Trust Cemented! Market rebounds. Client is up $24k. They refer friends. AUM +$3M.', th: '✅ ความไว้วางใจมั่นคง! ตลาดฟื้นตัว ลูกค้ากำไร $24k แนะนำเพื่อน AUM +$3M', zh: '✅ 信任巩固！市场反弹。客户获利2.4万美元。他们推荐朋友。AUM增加300万美元。' }, stats: { competence: 45, ethics: 40, leadership: 45, innovation: 30 } },
            { id: 'B', text: { en: '📝 The Order Taker: "I understand. I\'ll execute the sell order immediately to protect what\'s left."', th: '📝 ผู้รับคำสั่ง: "ผมเข้าใจครับ ผมจะดำเนินการขายทันทีเพื่อปกป้องส่วนที่เหลือ"', zh: '📝 执行指令："我理解。我会立即执行卖出指令以保护剩余资金。"' }, consequence: { en: '⚠️ Client Disaster. Client misses the rebound, realizes they lost $120k value. They move account. You lose commissions.', th: '⚠️ หายนะของลูกค้า ลูกค้าพลาดช่วงฟื้นตัว เสีย $120k ย้ายบัญชีหนี คุณเสียค่าคอมฯ', zh: '⚠️ 客户灾难。客户错过了反弹，意识到损失了12万美元。他们转走账户。你失去了佣金。' }, stats: { competence: 30, ethics: 35, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '📊 The Hedging Pivot: "Let\'s buy Put Options instead to insure the portfolio against further downside."', th: '📊 การรักษาสมดุล: "มาซื้อ Put Options เพื่อประกันพอร์ตจากการลดลงมากกว่านี้กันเถอะครับ"', zh: '📊 对冲转向："让我们购买看跌期权来为投资组合进行保险。" ' }, consequence: { en: '✅ Technical Mastery! Hedge saves client $40k. Client appreciates the sophistication. You become a trusted advisor.', th: '✅ ความเชี่ยวชาญเทคนิค! การเฮดจ์ช่วยเซฟ $40k ลูกค้าชื่นชม คุณกลายเป็นที่ปรึกษาที่ไว้ใจได้', zh: '✅ 技术精通！对冲节省了4万美元。客户欣赏这种专业度。你成为值得信赖的顾问。' }, stats: { competence: 50, ethics: 35, leadership: 35, innovation: 45 } },
            { id: 'D', text: { en: '💰 The Aggressive Buy: "Use 50% margin to double down! It\'s a gift!"', th: '💰 การซื้อเชิงรุก: "ใช้ Margin 50% อัดเพิ่มเลย! นี่คือของขวัญ!"', zh: '💰 激进买入："使用50%保证金加倍投入！这是一个礼物！"' }, consequence: { en: '💀 Gambling Disaster! Market drops more. Margin call. Client loses $400k. You face FINRA complaint.', th: '💀 หายนะการพนัน! ตลาดลงต่อ Margin call ลูกค้าเสีย $400k คุณโดนฟ้อง FINRA', zh: '💀 赌博灾难！市场继续下跌。追加保证金。客户损失40万美元。你面临FINRA投诉。' }, stats: { competence: 15, ethics: 15, leadership: 10, innovation: 40 } }
        ]
    },
    {
        id: 'sb_002',
        text: {
            en: '🤫 The Inside Edge: A friend at a pharma company mentions their "blockbuster" drug was rejected by FDA today. News is public tomorrow. You have clients with $3M investing in this stock.',
            th: '🤫 ข้อมูลวงใน: เพื่อนที่บริษัทยาบอกว่ายาตัวเก่งถูก FDA ปฏิเสธ ข่าวออกพรุ่งนี้ ลูกค้าคุณถือหุ้นนี้อยู่ $3M',
            zh: '🤫 内幕消息：一位在制药公司的朋友提到他们的重磅药物今天被FDA拒绝了。消息明天公开。你的客户在这只股票上投资了300万美元。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Ethical Wall: Silence. Do nothing. Selling is insider trading.', th: '⚖️ กำแพงจริยธรรม: เงียบ ไม่ทำอะไร การขายคือ insider trading', zh: '⚖️ 道德准则：保持沉默。什么都不做。卖出属于内幕交易。' }, consequence: { en: '✅ Integrity Preserved. Stock drops 30%. Clients lose money. SEC audit clears you. Tough month ahead.', th: '✅ รักษาเกียรติ หุ้นตก 30% ลูกค้าขาดทุน SEC ตรวจสอบแล้วผ่าน แต่จะลำบากหน่อย', zh: '✅ 诚信得以保存。股票下跌30%。客户亏损。SEC审计通过。接下来一个月会很难熬。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 10 } },
            { id: 'B', text: { en: '🏃 The "Grey Area" Sell: Call clients, say you are "nervous about the sector" and trim 50%.', th: '🏃 พื้นที่สีเทา: โทรบอกลูกค้าว่า "กังวลเรื่องกลุ่มอุตสาหกรรม" แล้วลดพอร์ต 50%', zh: '🏃 "灰色地带"抛售：打电话给客户，说你"对该板块感到紧张"，减仓50%。' }, consequence: { en: '⚠️ SEC Red Flag! You save money but SEC notices timing. Subpoena reveals call. Firm fined $500k. Reputation stained.', th: '⚠️ สัญญาณเตือน SEC! เซฟเงินได้แต่โดนเพ่งเล็ง โดนหมายเรียก บริษัทเสียค่าปรับ $500k เสียชื่อ', zh: '⚠️ SEC警示！你省了钱但SEC注意到了时机。传票揭露了通话。公司被罚50万美元。名誉受损。' }, stats: { competence: 35, ethics: 15, leadership: 20, innovation: 30 } },
            { id: 'C', text: { en: '🔥 Full Dump: "Get everyone out NOW! It\'s going to zero!"', th: '🔥 เทขายหมด: "ทุกคนออกเดี๋ยวนี้! มันจะเหลือศูนย์!"', zh: '🔥 全部清仓："所有人现在撤出！它会归零！"' }, consequence: { en: '💀 Prison Sentence. SEC traces it instantly. You and friend arrested. 18 months in prison.', th: '💀 ติดคุก SEC จับได้ทันที คุณและเพื่อนโดนจับ ติดคุก 18 เดือน', zh: '💀 牢狱之灾。SEC立即追踪。你和朋友被捕。入狱18个月。' }, stats: { competence: 20, ethics: -50, leadership: -50, innovation: 10 } },
            { id: 'D', text: { en: '💎 The Hedge: Buy massive Puts using client cash, claiming "risk management".', th: '💎 การทำประกัน: ซื้อ Puts มหาศาล อ้าง "บริหารความเสี่ยง"', zh: '💎 对冲：利用客户资金大量购买看跌期权，声称是"风险管理"。' }, consequence: { en: '⚠️ Sophisticated Fraud. Puts payout offsets loss. SEC sees it as insider trading. Banned for life.', th: '⚠️ โกงแบบเซียน Puts ทำกำไรชดเชย แต่ SEC มองว่าเป็น insider trading โดนแบนตลอดชีวิต', zh: '⚠️ 高级欺诈。看跌期权抵消损失。SEC将其视为内幕交易。终身禁入。' }, stats: { competence: 40, ethics: -40, leadership: 10, innovation: 50 } }
        ]
    },
    {
        id: 'sb_003',
        text: {
            en: '🚀 The IPO Hype: Hot AI IPO. You have 5,000 shares allocation. Demand is 50x. Give to your Hedge Fund client ($500k fees/yr) or 50 loyal retail clients?',
            th: '🚀 IPO ยอดฮิต: หุ้น AI ร้อนแรง คุณมีโควต้า 5,000 หุ้น ให้กองทุนรายใหญ่ (ค่าธรรมเนียม $500k/ปี) หรือแบ่งลูกค้าเล็ก 50 ราย?',
            zh: '🚀 IPO热潮：热门AI IPO。你有5000股配额。给对冲基金客户（年费50万）还是50个忠诚散户？'
        },
        options: [
            { id: 'A', text: { en: '🐳 Feed the Whale: All to Hedge Fund. "Secure the big fees."', th: '🐳 เลี้ยงวาฬ: ให้กองทุนหมด "รักษาค่าธรรมเนียมก้อนโต"', zh: '🐳 喂鲸鱼：全都给对冲基金。"确保大额费用。"' }, consequence: { en: '💰 Huge Profit, Small Soul. Fund happy, moves assets. Retail clients feel neglected, churn increases.', th: '💰 กำไรเยอะแต่ใจแคบ กองทุนพอใจ ลูกค้ารายย่อยน้อยใจ ทยอยหนี', zh: '💰 巨大利润，渺小灵魂。基金满意。散户感到被忽视，流失率增加。' }, stats: { competence: 45, ethics: 20, leadership: 35, innovation: 20 } },
            { id: 'B', text: { en: '⚖️ Democratic Split: 100 shares to each of 50 retails. "Reward loyalty."', th: '⚖️ แบ่งเท่ากัน: คนละ 100 หุ้นให้รายย่อย "รางวัลความภักดี"', zh: '⚖️ 民主分配：50个散户每人100股。"回报忠诚。"' }, consequence: { en: '✅ Moral Victory! Clients ecstatic. "Broker of the People." Long-term value secured.', th: '✅ ชนะใจ! ลูกค้าปลื้ม "โบรกเกอร์มหาชน" ได้ใจระยะยาว', zh: '✅ 道德胜利！客户狂喜。"人民的经纪人。"获得长期价值。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 25 } },
            { id: 'C', text: { en: '🤝 50/50 Compromise: Half to Fund, half to top 25 retails.', th: '🤝 คนละครึ่ง: ครึ่งหนึ่งให้กองทุน อีกครึ่งให้รายย่อยท็อป 25', zh: '🤝 50/50妥协：一半给基金，一半给前25名散户。' }, consequence: { en: '⚖️ Mediocre Middle. Fund complaints "not enough". Retails upset. No strong relationship win.', th: '⚖️ กลางๆ กองทุนบ่นว่าน้อยไป รายย่อยก็ไม่พอใจ ไม่ได้ใจใครเลย', zh: '⚖️ 平庸。基金抱怨"不够"。散户不爽。没有赢家。' }, stats: { competence: 35, ethics: 35, leadership: 30, innovation: 15 } },
            { id: 'D', text: { en: '💰 Selfish Hold: Keep for firm\'s account to resell for profit.', th: '💰 ฮุบไว้เอง: เก็บเข้าพอร์ตบริษัทไว้ขายทำกำไร', zh: '💰 自私持有：留给公司账户转卖获利。' }, consequence: { en: '💀 Audit Nightmare! Severe fiduciary violation. Fined, fired, blacklisted.', th: '💀 ฝันร้ายตรวจสอบ! ละเมิดหน้าที่อย่างแรง โดนปรับ ไล่ออก แบล็กลิสต์', zh: '💀 审计噩梦！严重违规。罚款、解雇、黑名单。' }, stats: { competence: 20, ethics: -50, leadership: 10, innovation: 40 } }
        ]
    },
    {
        id: 'sb_004',
        text: {
            en: '📉 The Short Squeeze: You advised shorting "GameStore". Reddit pumps it 400%. Clients losing millions. Close now or hold?',
            th: '📉 Short Squeeze: แนะนำ Short "GameStore" แต่ Reddit ดันขึ้น 400% ลูกค้าขาดทุนยับ ปิดตอนนี้หรือถือต่อ?',
            zh: '📉 逼空：建议做空"GameStore"。Reddit将其推高400%。客户损失数百万。平仓还是持有？'
        },
        options: [
            { id: 'A', text: { en: '🛑 Cut Losses: "Force close everything. Protect remaining capital."', th: '🛑 ตัดจบ: "บังคับปิดทุกอย่าง รักษาทุนที่เหลือ"', zh: '🛑 止损："强制平仓。保护剩余资本。"' }, consequence: { en: '✅ Controlled Disaster. Clients alive. Stock went to 1000% later. You saved them from ruin.', th: '✅ เจ็บแต่จบ ลูกค้ารอด หุ้นพุ่งไป 1000% ทีหลัง คุณช่วยชีวิตเขาไว้', zh: '✅ 受控灾难。客户存活。股票后来涨到1000%。你救了他们。' }, stats: { competence: 45, ethics: 35, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '💎 Diamond Hands: "Math says it\'s worthless. Add margin and hold!"', th: '💎 ถือสู้ตาย: "ตัวเลขบอกว่ามันไร้ค่า เติมเงินแล้วถือต่อ!"', zh: '💎 钻石手："数学说它一文不值。加保证金持有！"' }, consequence: { en: '💀 Total Liquidation. Margin calls wipe everyone out. Firm takes $20M hit. You are fired.', th: '💀 หมดตัว Margin calls กวาดเรียบ บริษัทเสียหาย $20M คุณโดนไล่ออก', zh: '💀 彻底爆仓。追加保证金清洗所有人。公司损失2000万。你被解雇。' }, stats: { competence: 15, ethics: 20, leadership: 10, innovation: 30 } },
            { id: 'C', text: { en: '📉 Reverse Pivot: "Close shorts, go Long! Join the rally!"', th: '📉 กลับลำ: "ปิด Short เปิด Long! ตามน้ำไปเลย!"', zh: '📉 反转："平空做多！加入狂欢！"' }, consequence: { en: '🎲 Gambling. Recover 50% but get burnt on crash. You look like a gambler, not advisor.', th: '🎲 การพนัน ได้คืน 50% แต่โดนตอนจบ ดูเหมือนผีพนันไม่ใช่ที่ปรึกษา', zh: '🎲 赌博。挽回50%但在崩盘中受损。你像赌徒而非顾问。' }, stats: { competence: 30, ethics: 25, leadership: 20, innovation: 45 } },
            { id: 'D', text: { en: '🛡️ Hedged Exit: Buy Call Options to cap loss, keep shorts open.', th: '🛡️ ทางออกเฮดจ์: ซื้อ Call Options จำกัดขาดทุน แต่ถือ Short ไว้', zh: '🛡️ 对冲退出：买入看涨期权限制损失，保持做空。' }, consequence: { en: '✅ Genius Move. Calls offset rally losses. Shorts profit on crash. Major win.', th: '✅ อัจฉริยะ Calls ชดเชยขาดทุน Shorts กำไรตอนร่วง ชนะเลิศ', zh: '✅ 天才之举。看涨期权抵消损失。做空在崩盘中获利。大胜。' }, stats: { competence: 50, ethics: 35, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'sb_005',
        text: {
            en: '👵 The Vulnerable Widow: 75yo widow needs safe income. Manager wants you to sell high-commission, locked-in Annuity. Low-cost Bond fund is better but pays you $0.',
            th: '👵 แม่หม้าย: แม่หม้าย 75 ปีต้องการรายได้มั่นคง ผจก. ให้ขาย Annuity คอมฯ สูงแต่ล็อคเงิน กองทุนพันธบัตรดีกว่าแต่คุณไม่ได้เงิน',
            zh: '👵 脆弱寡妇：75岁寡妇需要安全收入。经理让你卖高佣金锁定年金。低成本债券基金更好但你没钱以此。'
        },
        options: [
            { id: 'A', text: { en: '😇 Ethical Duty: "Sell the Bond fund. It\'s right for her."', th: '😇 จริยธรรม: "ขายกองทุนพันธบัตร มันดีกับเธอ"', zh: '😇 道德："卖债券基金。这对她好。"' }, consequence: { en: '✅ Soul Saved. No bonus, manager mad. But widow\'s rich son hires you later.', th: '✅ ได้บุญ อดโบนัส ผจก. ด่า แต่ลูกชายเศรษฐีเธอจ้างคุณทีหลัง', zh: '✅ 灵魂得救。无奖金，经理生气。但她富有的儿子后来雇佣你。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 10 } },
            { id: 'B', text: { en: '💰 Manager\'s Pet: "Sell the Annuity. Need that commission."', th: '💰 ลูกรัก: "ขาย Annuity อยากได้คอมฯ"', zh: '💰 经理宠物："卖年金。需要佣金。"' }, consequence: { en: '💀 Ethical Decay. Widow has emergency, can\'t access money. Family sues.', th: '💀 เสื่อมทราม แม่หม้ายฉุกเฉินถอนเงินไม่ได้ ครอบครัวฟ้อง', zh: '💀 道德败坏。寡妇急用钱取不出。家属起诉。' }, stats: { competence: 30, ethics: -10, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '⚖️ The Hybrid: 50% Annuity, 50% Bond.', th: '⚖️ ผสม: 50% Annuity, 50% พันธบัตร', zh: '⚖️ 混合：50%年金，50%债券。' }, consequence: { en: '⚠️ Compromised. Sub-optimal for her, manager still annoyed.', th: '⚠️ ครึ่งๆ กลางๆ ไม่ดีที่สุดสำหรับเธอ ผจก. ก็ยังหงุดหงิด', zh: '⚠️ 妥协。对她不是最好，经理还是烦。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '📣 Whistleblower: Sell Bond, report manager pressure anonymously.', th: '📣 แจ้งเบาะแส: ขายพันธบัตร แอบรายงานพฤติกรรม ผจก.', zh: '📣 吹哨：卖债券，匿名举报经理施压。' }, consequence: { en: '🎭 Politics. Client happy. Compliance investigates. Toxic workplace for you.', th: '🎭 การเมือง ลูกค้าชอบ ฝ่ายกฎหมายสอบ ที่ทำงานนรกแตก', zh: '🎭 政治。客户开心。合规调查。你的职场环境恶劣。' }, stats: { competence: 40, ethics: 45, leadership: 40, innovation: 15 } }
        ]
    },

    // SECTION 2: SOPHOMORE SLUMP & COMPETITIVE EDGE (Questions 6-10)
    {
        id: 'sb_006',
        text: {
            en: '🤖 AI Disruption: Robo-advisor offers 0.1% fees (you charge 1.5%). Client wanting to leave. How to defend?',
            th: '🤖 AI บุก: Robo-advisor คิด 0.1% (คุณ 1.5%) ลูกค้าจะหนี ป้องกันไง?',
            zh: '🤖 AI颠覆：机器人顾问收0.1%（你1.5%）。客户要走。怎么防守？'
        },
        options: [
            { id: 'A', text: { en: '🤝 Human Touch: "AI can\'t hold your hand in a crash or plan life events."', th: '🤝 ความเป็นคน: "AI ปลอบใจคุณไม่ได้ วางแผนชีวิตไม่ได้"', zh: '🤝 人情味："AI不能在崩盘时握住你的手或规划生活。"' }, consequence: { en: '✅ Retention. Client stays for peace of mind. Relationship strengthened.', th: '✅ รักษาได้ ลูกค้าอยู่เพราะความอุ่นใจ สัมพันธ์แน่นแฟ้น', zh: '✅ 挽留。客户为了安心留下。关系加强。' }, stats: { competence: 40, ethics: 40, leadership: 45, innovation: 15 } },
            { id: 'B', text: { en: '📉 Price Match: "I\'ll drop to 0.75%."', th: '📉 ลดราคา: "ลดให้เหลือ 0.75%"', zh: '📉 比价："我降到0.75%。"' }, consequence: { en: '⚠️ Margin Compression. Income halved. Client sees you as commodity.', th: '⚠️ รายได้หด เงินหายครึ่ง ลูกค้ามองเป็นของตาย', zh: '⚠️ 利润压缩。收入减半。客户视你为商品。' }, stats: { competence: 30, ethics: 35, leadership: 20, innovation: 20 } },
            { id: 'C', text: { en: '🚀 Hybrid Platform: "Use my new AI-integrated platform. Best of both."', th: '🚀 แพลตฟอร์มลูกผสม: "ใช้ระบบ AI ใหม่ของผม ดีทั้งคู่"', zh: '🚀 混合平台："用我的新AI集成平台。两全其美。"' }, consequence: { en: '✅ Innovation Win. Attracts young clients. AUM grows.', th: '✅ นวัตกรรม ดึงดูดวัยรุ่น AUM โต', zh: '✅ 创新胜利。吸引年轻客户。AUM增长。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '👨‍💻 Fear Tactics: "AI gets hacked. You\'ll lose everything!"', th: '👨‍💻 ขู่: "AI โดนแฮกเงินหายหมดนะ!"', zh: '👨‍💻 恐吓："AI会被黑。你会失去一切！"' }, consequence: { en: '💀 Trust Erosion. Client knows you\'re lying/desperate. Leaves + bad review.', th: '💀 หมดศรัทธา ลูกค้ารู้ว่าโกหก ย้ายหนีแถมด่า', zh: '💀 信任流失。客户知道你在撒谎。离开并差评。' }, stats: { competence: 20, ethics: 15, leadership: 10, innovation: 20 } }
        ]
    },
    {
        id: 'sb_007',
        text: {
            en: '🍾 The Gift: Record month. Client sends $5,000 watch. Firm limit is $100. Keep or return?',
            th: '🍾 ของขวัญ: เดือนทำยอด ลูกค้าให้ราฬิกา $5,000 บริษัทให้รับไม่เกิน $100 รับหรือคืน?',
            zh: '🍾 礼物：创纪录月。客户送5000美元手表。公司限额100。收还是退？'
        },
        options: [
            { id: 'A', text: { en: '🚫 Return: "Strictly forbidden. Please donate to charity."', th: '🚫 คืน: "ผิดกฎครับ บริจาคการกุศลแทนนะ"', zh: '🚫 退回："严格禁止。请捐给慈善。"' }, consequence: { en: '✅ Ethical Icon. Respect earned. Clean record.', th: '✅ คนดี ได้ใจ ประวัติใสสะอาด', zh: '✅ 道德偶像。赢得尊重。记录清白。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 10 } },
            { id: 'B', text: { en: '🎁 Keep Secret: "Wear at home only."', th: '🎁 แอบรับ: "ใส่แค่ที่บ้าน"', zh: '🎁 偷偷收："只在家戴。"' }, consequence: { en: '💀 Fired. Colleague reports you. Blacklisted.', th: '💀 โดนไล่ออก เพื่อนร่วมงานแจ้ง แบล็กลิสต์', zh: '💀 解雇。同事举报。黑名单。' }, stats: { competence: 30, ethics: -50, leadership: -10, innovation: 10 } },
            { id: 'C', text: { en: '🛡️ Auction: "Ask firm to auction for charity."', th: '🛡️ ประมูล: "ให้บริษัทประมูลเข้าการกุศล"', zh: '🛡️ 拍卖："请公司拍卖做慈善。"' }, consequence: { en: '✅ Political Masterstroke. PR win. Leadership shown.', th: '✅ เซียนการเมือง ได้หน้าโรงใหญ่ โชว์ความเป็นผู้นำ', zh: '✅ 政治大师。公关胜利。展现领导力。' }, stats: { competence: 45, ethics: 45, leadership: 50, innovation: 35 } },
            { id: 'D', text: { en: '🔄 Regift: "Give to manager to suck up."', th: '🔄 ให้ต่อ: "เอาไปเลียแข้งเจ้านาย"', zh: '🔄 转送："给经理拍马屁。"' }, consequence: { en: '💀 Mutual Destruction. Both fired later.', th: '💀 ตายคู่ โดนไล่ออกทั้งคู่ทีหลัง', zh: '💀 同归于尽。以后都被解雇。' }, stats: { competence: 35, ethics: -40, leadership: 20, innovation: 40 } }
        ]
    },
    {
        id: 'sb_008',
        text: {
            en: '🌪️ Emerging Crisis: Currency collapse. Clients\' funds dropping 5% daily. "Safe Haven" or "Buy the Dip"?',
            th: '🌪️ วิกฤตค่าเงิน: กองทุนลูกค้าลงวันละ 5% "หนีไปที่ปลอดภัย" หรือ "ช้อนซื้อ"?',
            zh: '🌪️ 新兴危机：货币崩溃。客户基金日跌5%。"避险"还是"抄底"？'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Safety: "Move 40% to Gold/Treasuries."', th: '🛡️ ปลอดภัย: "ย้าย 40% ไปทอง/พันธบัตร"', zh: '🛡️ 安全："40%转黄金/国债。"' }, consequence: { en: '✅ Capital Preserved. Clients have cash to buy bottom later.', th: '✅ เงินอยู่ครบ มีเงินสดราช้อนทีหลัง', zh: '✅ 本金保存。客户后来有钱抄底。' }, stats: { competence: 40, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '⚖️ Rebalance: "Buy more! It\'s a sale!"', th: '⚖️ ปรับพอร์ต: "ซื้อเพิ่ม! ของถูก!"', zh: '⚖️ 再平衡："买入！打折了！"' }, consequence: { en: '⚠️ Falling Knife. Market drops more. Clients panic sell at bottom.', th: '⚠️ รับมีด ลงต่อ ลูกค้าตกใจขายที่ก้นเหว', zh: '⚠️ 接飞刀。市场续跌。客户底部恐慌抛售。' }, stats: { competence: 35, ethics: 35, leadership: 30, innovation: 30 } },
            { id: 'C', text: { en: '🤫 Inverse ETF: "Use leverage to profit from crash (risky)."', th: '🤫 ETF ขาลง: "ใช้ Leverage เล่นขาลง (เสี่ยง)"', zh: '🤫 反向ETF："杠杆做空获利（有风险）。"' }, consequence: { en: '🎲 Gamble. Firm caution letter. Too risky for retail.', th: '🎲 พนัน โดนใบเตือน เสี่ยงไปสำหรับรายย่อย', zh: '🎲 赌博。公司警告信。散户风险太大。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 50 } },
            { id: 'D', text: { en: '🧘 Do Nothing: "Just hold. Ignore the noise."', th: '🧘 อยู่เฉยๆ: "ถือไป อย่าไปฟังเสียงนกเสียงกา"', zh: '🧘 不动："持有。无视噪音。"' }, consequence: { en: '⚠️ Passive Failure. Clients feel abandoned, leave for proactive brokers.', th: '⚠️ เมินเฉย ลูกค้าน้อยใจ ย้ายไปหาคนใส่ใจ', zh: '⚠️ 被动失败。客户感被弃，转投积极经纪人。' }, stats: { competence: 25, ethics: 35, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'sb_009',
        text: {
            en: '🚔 Suspicious Cash: Client offers $250k cash + 5% bribe to "skip paperwork".',
            th: '🚔 เงินน่าสงสัย: ลูกค้าเสนอเงินสด $250k + 5% สินบน "ขอข้ามเอกสาร"',
            zh: '🚔 可疑现金：客户给25万现金+5%贿赂"跳过文书"。'
        },
        options: [
            { id: 'A', text: { en: '🚨 Report: "Refuse, file SAR report immediately."', th: '🚨 รายงาน: "ปฏิเสธ แจ้ง SAR ทันที"', zh: '🚨 举报："拒绝，立即提交SAR报告。"' }, consequence: { en: '✅ Hero. Saved firm from fine. Compliance award.', th: '✅ ฮีโร่ ช่วยบริษัท ตบรางวัล', zh: '✅ 英雄。挽救公司。合规奖。' }, stats: { competence: 40, ethics: 55, leadership: 45, innovation: 10 } },
            { id: 'B', text: { en: '💼 Refuse: "Go to bank, do it properly."', th: '💼 ปฏิเสธ: "ไปธนาคาร ทำให้ถูกระเบียบ"', zh: '💼 拒绝："去银行，按规矩办。"' }, consequence: { en: '⚠️ Missed Tip. Client vanishes. Manager asks why no report.', th: '⚠️ พลาดเบาะแส ลูกค้าหนี ผจก. ถามทำไมไม่แจ้ง', zh: '⚠️ 错失线索。客户消失。经理问为何不报。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 20 } },
            { id: 'C', text: { en: '💰 Accept: "Smurf it in small deposits."', th: '💰 รับ: "ย่อยยอดฝากทีละนิด"', zh: '💰 接受："拆分存入。"' }, consequence: { en: '💀 Arrested. Money laundering charge. 5 years jail.', th: '💀 โดนจับ ข้อหาฟอกเงิน คุก 5 ปี', zh: '💀 被捕。洗钱罪。5年牢。' }, stats: { competence: 20, ethics: -50, leadership: -50, innovation: 30 } },
            { id: 'D', text: { en: '🤝 Refer: "Send to a \'shadow\' broker friend."', th: '🤝 ส่งต่อ: "ส่งให้เพื่อนสายเถื่อน"', zh: '🤝用于推荐："转给\'影子\'经纪人朋友。"' }, consequence: { en: '💀 Accessory. Friend caught, implicates you.', th: '💀 สมรู้ร่วมคิด เพื่อนโดน ซัดทอดถึงเรา', zh: '💀 从犯。朋友被抓，供出你。' }, stats: { competence: 25, ethics: -40, leadership: -20, innovation: 25 } }
        ]
    },
    {
        id: 'sb_010',
        text: {
            en: '📉 The Career Pivot: After 5 years, you have $50M AUM. A "Churn & Burn" firm offers you $200k bonus to switch and bring clients. They push high-fee products aggressively. Your current firm is ethical but pays less.',
            th: '📉 ทางแยกอาชีพ: 5 ปีผ่านไป AUM $50M บริษัทสายโหด "Churn & Burn" ให้โบนัส $200k ให้ย้ายค่ายพร้อมลูกค้า ที่นั่นเน้นขายของแพง บริษัทเดิมดีแต่จ่ายน้อย',
            zh: '📉 职业转折：5年后，5000万AUM。"炒单"公司给20万奖金让你带客户跳槽。他们推销高费产品。现公司道德好但钱少。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Stay: "Loyalty and ethics first. Money isn\'t everything."', th: '🛑 อยู่ต่อ: "ภักดีและจริยธรรมมาก่อน เงินไม่ใช่ทุกอย่าง"', zh: '🛑 留下："忠诚和道德虽一。钱不是一切。"' }, consequence: { en: '✅ Long Game. Clients respect stability. You grow to $100M organically.', th: '✅ ระยะยาว ลูกค้าชอบความมั่นคง โตเป็น $100M เอง', zh: '✅ 长线。客户尊重稳定。自然增长到1亿。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '💰 Switch: "Take the cash. I can protect my clients there."', th: '💰 ย้าย: "เอาเงิน ผมดูแลลูกค้าที่นั่นได้"', zh: '💰 跳槽："拿钱。我在那能保护客户。"' }, consequence: { en: '⚠️ Golden Handcuffs. Pressure to sell junk is huge. Clients leave due to fees.', th: '⚠️ กรงทอง โดนกดดันขายขยะ ลูกค้าหนีเพราะค่าธรรมเนียม', zh: '⚠️ 金手铐。被逼卖垃圾。客户因费用离开。' }, stats: { competence: 35, ethics: 20, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🚀 Independent: "Start my own RIA firm. Keep 100% fees."', th: '🚀 อิสระ: "เปิดบริษัท RIA เอง เก็บค่าธรรมเนียม 100%"', zh: '🚀 独立："开自己的RIA公司。拿100%费用。"' }, consequence: { en: '✅ Entrepreneur. Hard start, but you own equity. Unlimited upside.', th: '✅ ผู้ประกอบการ เริ่มยาก แต่เป็นเจ้าของ โตไร้ขีดจำกัด', zh: '✅ 创业。起步难，但拥股权。无限潜力。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '🤝 Negotiate: "Use offer to get raise at current firm."', th: '🤝 ต่อรอง: "ใช้ข้อเสนอเรียกเงินเพิ่มที่เดิม"', zh: '🤝 谈判："利用报价在原公司加薪。"' }, consequence: { en: '⚖️ Small Win. Get tiny raise, but boss trusts you less.', th: '⚖️ ชนะนิดนึง ได้ขึ้นเงินนิดหน่อย แต่เจ้านายระแวง', zh: '⚖️ 小胜。微涨薪，但老板不再信任。' }, stats: { competence: 40, ethics: 35, leadership: 30, innovation: 25 } }
        ]
    },

    // SECTION 3: SENIOR BROKER & INSTITUTIONAL MOVES (Questions 11-15)
    {
        id: 'sb_011',
        text: {
            en: '🗑️ The "Sure Thing" Penny Stock: A promoter offers you 20% commission to sell a $0.50 stock to your clients. He claims it will hit $5.00. You see no financials, just hype. You have 10 clients who love "gambling" stocks.',
            th: '🗑️ หุ้นปั่น "ของชัวร์": โปรโมเตอร์เสนอคอมมิชชั่น 20% ให้คุณขายหุ้นราคา $0.50 ให้ลูกค้า เขาอ้างว่าจะไป $5.00 คุณไม่เห็นงบการเงิน เห็นแต่ข่าวลือ คุณมีลูกค้า 10 คนที่ชอบ "เล่นพนัน"',
            zh: '🗑️ "稳赚"仙股：推销员给你20%佣金让你向客户推销0.5美元的股票。声称会涨到5美元。你没看到财报，只有炒作。你有10个爱"赌博"的客户。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Blacklist: "Refuse and block the promoter. Warn clients about this specific ticker."', th: '🚫 แบล็กลิสต์: "ปฏิเสธและบล็อก เตือนลูกค้าเกี่ยวกับหุ้นตัวนี้"', zh: '🚫 拉黑："拒绝并拉黑。警告客户这只股票。"' }, consequence: { en: '✅ Protecting the Flock. Stock crashes to $0.01. Clients thank you for the warning.', th: '✅ ปกป้องฝูงแกะ หุ้นร่วงเหลือ $0.01 ลูกค้าขอบคุณที่เตือน', zh: '✅ 保护羊群。股票跌至0.01。客户感谢警告。' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🤑 Sell: "Tell the gamblers it\'s a \'high risk play\'. Pocket the 20%."', th: '🤑 ขาย: "บอกลูกค้าสายพนันว่าเป็น \'ความเสี่ยงสูง\' รับคอมฯ 20%"', zh: '🤑 卖："告诉赌徒是\'高风险\'。拿20%佣金。"' }, consequence: { en: '💀 Pump & Dump. Clients lose everything. They sue you for lack of due diligence. License revoked.', th: '💀 ปั่นแปะ ลูกค้าหมดตัว ฟ้องคุณฐานไม่ตรวจสอบ โดนยึดใบอนุญาต', zh: '💀 拉高出货。客户输光。起诉你未尽职调查。吊销执照。' }, stats: { competence: 20, ethics: -45, leadership: -20, innovation: 10 } },
            { id: 'C', text: { en: '👀 Watch: "Don\'t sell, but track it. If it goes up, maybe enter later."', th: '👀 ดูเชิง: "ไม่ขายแต่ตามดู ถ้าขึ้นค่อยเข้า"', zh: '👀 观望："不卖但关注。如果涨了再说。"' }, consequence: { en: '⚠️ Missed Signal. It goes up briefly, clients ask "why didn\'t we buy?". You look slow.', th: '⚠️ สัญญาณพลาด หุ้นขึ้นแป๊บนึง ลูกค้าถาม "ทำไมไม่ซื้อ" ดูคุณช้าไปเลย', zh: '⚠️ 错失信号。短暂上涨，客户问"为何没买"。你显得迟钝。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 15 } },
            { id: 'D', text: { en: '🎓 Educate: "Use this as a lesson. Show clients how to spot a scam."', th: '🎓 ให้ความรู้: "ใช้เป็นบทเรียน สอนลูกค้าดูหุ้นปั่น"', zh: '🎓 教育："以此为戒。教客户识别骗局。"' }, consequence: { en: '✅ Value Add. Clients trust you more than ever. They move bigger, safer assets to you.', th: '✅ เพิ่มมูลค่า ลูกค้าเชื่อใจสุดๆ ย้ายสินทรัพย์ใหญ่มาให้ดูแล', zh: '✅ 增值。客户更信任你。转入更大安全资产。' }, stats: { competence: 50, ethics: 45, leadership: 45, innovation: 20 } }
        ]
    },
    {
        id: 'sb_012',
        text: {
            en: '💔 The Divorce Asset Hiding: A wealthy client (husband) is getting divorced. He asks you to move $1M to an offshore account in the Cayman Islands "temporarily" to hide it from his wife\'s lawyers. He\'s been your client for 10 years.',
            th: '💔 ซ่อนสินทรัพย์หย่าร้าง: ลูกค้าเศรษฐี (สามี) กำลังหย่า เขาขอให้ย้ายเงิน $1M ไปบัญชี Offshore ในเคย์แมน "ชั่วคราว" เพื่อซ่อนจากทนายภรรยา เขาเป็นลูกค้าคุณมา 10 ปี',
            zh: '💔 离婚隐匿资产：富豪客户（丈夫）正在离婚。让你把100万转到开曼群岛"暂时"躲避妻子律师。他是十年老客户。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Refuse: "I cannot do that. It is illegal. Don\'t put me in this position."', th: '🚫 ปฏิเสธ: "ผมทำไม่ได้ มันผิดกฎหมาย อย่าให้ผมต้องลำบากใจ"', zh: '🚫 拒绝："做不到。犯法。别让我难做。"' }, consequence: { en: '✅ Clean Hands. He is angry but stays because he needs a clean broker. Wife\'s lawyers subpoena records; you are clear.', th: '✅ มือสะอาด เขาโกรธแต่ไม่ย้ายเพราะต้องใช้คนขาวสะอาด ทนายเมียเช็คประวัติ คุณรอด', zh: '✅ 手脚干净。他生气但留下，因需要清白经纪人。妻子律师查账；你没事。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🤝 Assist: "I can set up a shell company transfer. It will cost extra."', th: '🤝 ช่วยเหลือ: "ผมตั้งบริษัท Shell โอนให้ได้ แต่มีค่าใช้จ่ายพิเศษ"', zh: '🤝 协助："我可以设壳公司转账。得加钱。"' }, consequence: { en: '💀 Criminal Fraud. Wife\'s forensic accountants find it. You are charged with conspiracy. Jail time.', th: '💀 ร่วมกันโกง นักบัญชีเมียจับได้ โดนข้อหาสมรู้ร่วมคิด ติดคุก', zh: '💀 刑事诈骗。妻子会计师发现。控告共谋。入狱。' }, stats: { competence: 30, ethics: -50, leadership: -30, innovation: 30 } },
            { id: 'C', text: { en: '🕊️ Mediator: "Don\'t hide it. Let\'s structure a settlement offer instead."', th: '🕊️ ไกล่เกลี่ย: "อย่าซ่อนเลย มาจัดโครงสร้างข้อเสนอประนีประนอมดีกว่า"', zh: '🕊️ 调解："别藏。不如设计个和解方案。"' }, consequence: { en: '✅ Wise Counsel. He listens. Divorce is smoother. You keep managing assets for BOTH of them afterwards.', th: '✅ ที่ปรึกษาผู้ชาญฉลาด เขาฟัง หย่าจบสวย คุณได้ดูเงินต่อให้ทั้งคู่', zh: '✅ 英明顾问。他听了。离婚顺利。此事后你为双方管理资产。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 30 } },
            { id: 'D', text: { en: '🙈 Ignore: "I didn\'t hear that. You do what you want online."', th: '🙈 ทำเมิน: "ไม่ได้ยินนะ คุณไปกดเองออนไลน์เอา"', zh: '🙈 无视："没听见。你自己网上操作。"' }, consequence: { en: '⚠️ Complicit by Negligence. He moves it. You get dragged into deposition. Judge scolds you.', th: '⚠️ ผิดฐานละเลย เขาโอนเอง คุณโดนเรียกสอบ ผู้พิพากษาตำหนิ', zh: '⚠️ 疏忽共犯。他转了。你被传讯。法官训斥。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'sb_013',
        text: {
            en: '👾 Software Glitch Advantage: A bug in your trading terminal allows you to see institutional buy orders 1 second before the market. You can "front run" these trades to make guaranteed profits. It\'s definitely a glitch, not a feature.',
            th: '👾 บั๊กทำเงิน: บั๊กในเทอร์มินัลเทรดทำให้คุณเห็นคำสั่งซื้อกองทุนก่อนตลาด 1 วินาที คุณสามารถ "ดักหน้า" (Front run) เพื่อกำไรชัวร์ๆ มันคือบั๊กแน่ๆ ไม่ใช่ฟีเจอร์',
            zh: '👾 软件故障优势：交易终端Bug让你提前1秒看到机构买单。你可以"抢跑"稳赚。绝对是Bug，不是功能。'
        },
        options: [
            { id: 'A', text: { en: '🐛 Report It: "Call IT immediately. Fix the glitch."', th: '🐛 แจ้งซ่อม: "โทรหา IT ทันที ซ่อมด่วน"', zh: '🐛 报告："马上叫IT。修好它。"' }, consequence: { en: '✅ Tech Integrity. Glitch fixed. IT thanks you. You avoid a massive regulatory trap.', th: '✅ ซื่อสัตย์ บั๊กถูกแก้ IT ขอบคุณ รอดจากกับดักกฎหมาย', zh: '✅ 技术诚信。修复。IT感谢。避开监管陷阱。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '💰 Exploit: "Trade heavily for 1 week then stop. Make $500k."', th: '💰 กอบโกย: "อัดหนักๆ 1 อาทิตย์แล้วเลิก ฟันเงิน $500k"', zh: '💰 利用："狂做一周然后停。赚50万。"' }, consequence: { en: '💀 Algorithm Caught. Exchanges have timestamp monitoring. You are detected. Federal crime.', th: '💀 โดนจับ ตลาดมีระบบเช็คเวลา คุณโดนจับได้ คดีอาญา', zh: '💀 算法被抓。交易所监控时间戳。被发现。联邦罪。' }, stats: { competence: 30, ethics: -40, leadership: -20, innovation: 30 } },
            { id: 'C', text: { en: '🤫 Share Info: "Tell your Hedge Fund client. Let them take the risk."', th: '🤫 บอกต่อ: "บอกลูกค้ากองทุน ให้เขารับความเสี่ยงเอง"', zh: '🤫 分享："告诉对冲基金客户。让他们冒险。"' }, consequence: { en: '⚠️ Dangerous Alliance. Fund makes money, gives you kickback. But now they own you.', th: '⚠️ พันธมิตรนรก กองทุนกำไร แบ่งเงินให้ แต่ตอนนี้เขาเป็นนายชีวิตคุณ', zh: '⚠️ 危险同盟。基金赚钱，给你回扣。但现在被他们控制。' }, stats: { competence: 35, ethics: -30, leadership: 20, innovation: 20 } },
            { id: 'D', text: { en: '🧪 Test: "Do one small trade to see if it works."', th: '🧪 ลองของ: "ลองเทรดเล็กๆ ดูว่าได้จริงไหม"', zh: '🧪 测试："做笔小的看看行不行。"' }, consequence: { en: '⚠️ Slippery Slope. It works. You are tempted to do more. Ethics erode.', th: '⚠️ ถลำลึก มันได้ผล คุณเริ่มอยากทำอีก จริยธรรมกร่อน', zh: '⚠️ 滑坡。行得通。诱惑你做更多。道德滑坡。' }, stats: { competence: 25, ethics: 10, leadership: 10, innovation: 30 } }
        ]
    },
    {
        id: 'sb_014',
        text: {
            en: '🧠 The Senile Client: Your oldest client (85 years old, $5M account) calls you 5 times a day giving contradictory orders. He forgets what he bought yesterday. His children aren\'t involved. You suspect dementia. He generates huge commissions for you.',
            th: '🧠 ลูกค้าหลงลืม: ลูกค้าเก่าแก่ที่สุด (85 ปี พอร์ต $5M) โทรหาคุณวันละ 5 รอบ สั่งซื้อขายกลับไปมา แกจำไม่ได้ว่าซื้ออะไรไปเมื่อวาน ลูกแกไม่มายุ่ง คุณสงสัยว่าแกสมองเสื่อม แกทำค่าคอมฯ ให้คุณมหาศาล',
            zh: '🧠 糊涂客户：老客户（85岁，500万账户）每天打5次电话下矛盾指令。忘了昨天买了啥。子女不介入。怀疑痴呆。佣金巨大。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Freeze Account: "Pause trading. Contact legal. Find next of kin."', th: '🛑 ระงับบัญชี: "หยุดเทรด ติดต่อฝ่ายกฎหมาย หาญาติ"', zh: '🛑 冻结："暂停交易。找法务。找亲属。"' }, consequence: { en: '✅ Protection First. You lose commissions but save his estate. Family eventually thanks you.', th: '✅ ป้องกันก่อน เสียค่าคอมฯ แต่รักษาทรัพย์สิน ครอบครัวขอบคุณทีหลัง', zh: '✅ 保护第一。损失佣金但保住遗产。家属后来感谢。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🤑 Keep Trading: "He is competent until a court says otherwise. Execute orders."', th: '🤑 เทรดต่อ: "เขายังปกติจนกว่าศาลจะบอกว่าบ้า ทำตามคำสั่ง"', zh: '🤑 继续："法院没判就是正常。执行指令。"' }, consequence: { en: '💀 Elder Abuse. Family finds out later. Sues you for churning a dementia patient. Career over.', th: '💀 รังแกคนแก่ ครอบครัวรู้ทีหลัง ฟ้องฐานปั่นพอร์ตคนป่วย จบเห่', zh: '💀 虐待老人。家属发现。起诉你压榨痴呆病人。职业终结。' }, stats: { competence: 20, ethics: -40, leadership: -10, innovation: 10 } },
            { id: 'C', text: { en: '📞 Soft Intervention: "Guide him gently to holding cash. Stop executing the crazy trades."', th: '📞 ตะล่อม: "ค่อยๆ กล่อมให้ถือเงินสด หยุดทำตามคำสั่งบ้าๆ"', zh: '📞 软干预："引导持有现金。不执行疯狂指令。"' }, consequence: { en: '⚖️ Grey Area. You protect him somewhat, but strictly speaking, you are ignoring orders.', th: '⚖️ สีเทา ช่วยเขาบ้าง แต่ตามหลักคือคุณเมินคำสั่ง', zh: '⚖️ 灰色。保护了一些，但严格说是无视指令。' }, stats: { competence: 45, ethics: 30, leadership: 35, innovation: 25 } },
            { id: 'D', text: { en: '👨‍👩‍👧‍👦 Contact Kids: "Call his children immediately behind his back."', th: '👨‍👩‍👧‍👦 โทรหาลูก: "แอบโทรหาลูกเขาเงียบๆ"', zh: '👨‍👩‍👧‍👦 联系子女："背着他联系子女。"' }, consequence: { en: '⚠️ Privacy Breach. Kids might be greedy. Client feels betrayed. Tricky situation.', th: '⚠️ ละเมิดส่วนตัว ลูกอาจโลภ ลูกค้าอาจเคือง สถานการณ์ยาก', zh: '⚠️ 隐私泄露。子女可能贪婪。客户感到背叛。棘手。' }, stats: { competence: 30, ethics: 25, leadership: 25, innovation: 15 } }
        ]
    },
    {
        id: 'sb_015',
        text: {
            en: '🎤 The Media Leak: A journalist asks for a quote on a rumor that your firm is being acquired by a bank. You know it\'s true (you saw the memo). Confirming it makes you a "source" and builds relationship with press. Denying it is the "company line".',
            th: '🎤 ข่าวหลุด: นักข่าวขอสัมภาษณ์เรื่องลือว่าบริษัทคุณจะถูกธนาคารซื้อ คุณรู้ว่าจริง (เห็นเมโม) ยืนยันไปจะได้เป็น "แหล่งข่าว" และสร้างสายสัมพันธ์ ปฏิเสธก็คือ "ตามหน้าที่"',
            zh: '🎤 媒体泄密：记者问传闻你公司被银行收购。你知道是真的（看了备忘录）。确认会成为"线人"搞好关系。否认是"公司口径"。'
        },
        options: [
            { id: 'A', text: { en: '🤐 "No Comment": "Follow protocol. Say nothing."', th: '🤐 "งดออกความเห็น": "ตามระเบียบ ไม่พูด"', zh: '🤐 "无可奉告"： "按规矩。不说。"' }, consequence: { en: '✅ Loyal Soldier. Boring but safe. Firm appreciates discretion.', th: '✅ ทหารผู้ภักดี น่าเบื่อแต่ปลอดภัย บริษัทชอบ', zh: '✅ 忠诚士兵。无聊但安全。公司赞赏。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🗣️ Leak Anonymously: "Confirm it off the record. Get a favor later."', th: '🗣️ ปล่อยข่าวลับๆ: "ยืนยันแบบไม่เปิดเผยตัว ไว้ทวงบุญคุณทีหลัง"', zh: '🗣️ 匿名泄密："私下确认。以后讨人情。"' }, consequence: { en: '⚠️ Loose Lips. Journalist uses info. Firm hunts for leaker. Paranoia ensues.', th: '⚠️ ปากโป้ง นักข่าวใช้ข้อมูล บริษัทตามล่าคนปล่อย ระแวงกันทั่ว', zh: '⚠️ 大嘴巴。记者用了。公司查内鬼。人人自危。' }, stats: { competence: 35, ethics: 10, leadership: 20, innovation: 30 } },
            { id: 'C', text: { en: '🤥 Deny: "It is absolutely false." (Lie)', th: '🤥 ปฏิเสธ: "ไม่จริงเลยครับ" (โกหก)', zh: '🤥 否认："完全是假的。"（撒谎）' }, consequence: { en: '💀 Credibility Hit. When news comes out next week, you look like a liar/clueless.', th: '💀 เสียเครดิต อาทิตย์หน้าข่าวออก คุณดูเป็นคนโกหก/ไม่รู้อะไรเลย', zh: '💀以此信誉受损。下周确消息，你像骗子/傻子。' }, stats: { competence: 20, ethics: 20, leadership: 15, innovation: 10 } },
            { id: 'D', text: { en: '🔄 Spin: "We interpret the market as... (Pivot to general analysis)"', th: '🔄 เบี่ยงประเด็น: "เรามองตลาดว่า... (เปลี่ยนไปวิเคราะห์ภาพรวม)"', zh: '🔄 兜圈子："我们解读市场...（转到一般分析）"' }, consequence: { en: '✅ Media Savvy. You sound smart without confirming. Journalist respects the game.', th: '✅ เซียนสื่อ ดูฉลาดโดยไม่ต้องยืนยัน นักข่าวเข้าใจเกม', zh: '✅ 媒体老手。不确认也显得聪明。记者懂行。' }, stats: { competence: 45, ethics: 35, leadership: 40, innovation: 40 } }
        ]
    },
    // SECTION 4: MARKET CRASHES & BLACK SWANS (Questions 16-20)
    {
        id: 'sb_016',
        text: {
            en: '📉 The Flash Crash: Algorithms go haywire. The Dow drops 1,000 points in 5 minutes. Your screen is flashing red. Clients are calling in tears. You don\'t know if it\'s a glitch or WW3.',
            th: '📉 Flash Crash: อัลกอริทึมรวน Dow Jones ร่วง 1,000 จุดใน 5 นาที จอแดงเถือก ลูกค้าโทรหาร้องไห้ ไม่รู้ว่าเป็นบั๊กหรือสงครามโลก',
            zh: '📉 闪崩：算法失控。道指5分钟跌1000点。屏幕闪红。客户哭着打来电话。你不知道是故障还是三战。'
        },
        options: [
            { id: 'A', text: { en: '🛑 "Sell Everything!": Panic. "Cash is King!"', th: '🛑 "ขายทุกอย่าง!": ตกใจ "เงินสดคือพระเจ้า!"', zh: '🛑 "全卖！"：恐慌。"现金为王！"' }, consequence: { en: '💀 Bottom Tick. Market rebounds in 20 mins. You locked in massive losses at the absolute bottom.', th: '💀 ขายหมูที่ก้นเหว ตลาดเด้งกลับใน 20 นาที คุณล็อคขาดทุนยับเยินที่จุดต่ำสุด', zh: '💀 卖在底部。市场20分钟反弹。你在绝对底部锁定了巨额损失。' }, stats: { competence: 10, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'B', text: { en: '🧘 "Hold Fast": "Don\'t look at the screen. It\'s noise. Hang up the phones."', th: '🧘 "ใจดีสู้เสือ": "อย่าดูจอ มันคือสัญญาณรบกวน วางหูโทรศัพท์"', zh: '🧘 "坚守"："别看屏幕。是噪音。挂断电话。"' }, consequence: { en: '✅ Iron Will. Market recovers. Clients realize you saved them. You look like a sage.', th: '✅ ใจเพชร ตลาดฟื้น ลูกค้ารู้สึกว่าคุณช่วยไว้ ดูเหมือนพ่อมด', zh: '✅ 钢铁意志。市场恢复。客户意识到你救了他们。你像一位圣人。' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '🛒 "Buy Orders": "It\'s a glitch. Put in limit buys at -10%."', th: '🛒 "ตั้งรับ": "มันคือบั๊ก ตั้งซื้อที่ -10%"', zh: '🛒 "买单"："是故障。在-10%处限价买入。"' }, consequence: { en: '🚀 Legend. You buy blue chips for pennies. Portfolio creates generational wealth.', th: '🚀 ตำนาน ซื้อของถูกเหมือนได้เปล่า พอร์ตสร้างความมั่งคั่งชั่วลูกหลาน', zh: '🚀 传奇。白菜价买蓝筹。投资组合创造世代财富。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '💻 "Reboot System": "My terminal must be broken. Restart."', th: '💻 "รีสตาร์ท": "คอมพังแน่ ปิดเปิดใหม่"', zh: '💻 "重启系统"："终端肯定坏了。重启。"' }, consequence: { en: '⚠️ Tech Denial. By the time it reboots, valuable time is lost. You look confused.', th: '⚠️ ปฏิเสธความจริง กว่าจะเปิดติดก็เสียเวลาสำคัญ ดูงงๆ', zh: '⚠️ 技术否认。重启完已错失宝贵时间。你显得困惑。' }, stats: { competence: 20, ethics: 30, leadership: 15, innovation: 10 } }
        ]
    },
    {
        id: 'sb_017',
        text: {
            en: '🦠 The Pandemic Panic: Global pandemic declared. Markets freefall. Everyone is scared. A client wants to liquidate their kid\'s college fund to buy "canned food and gold ammo".',
            th: '🦠 วิกฤตโรคระบาด: ประกาศ Global Pandemic ตลาดดิ่งเหว ทุกคนกลัว ลูกค้าจะขายกองทุนการศึกษาลูกไปซื้อ "อาหารกระป๋องและทองคำ"',
            zh: '🦠 疫情恐慌：宣布全球大流行。市场自由落体。人人自危。客户要变卖孩子大学基金买"罐头和黄金弹药"。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ "Do it": "You might be right. Safety first."', th: '🛡️ "ทำเลย": "คุณอาจจะถูก ปลอดภัยไว้ก่อน"', zh: '🛡️ "做吧"："你可能是对的。安全第一。"' }, consequence: { en: '⚠️ Fear validation. Client feels safe but misses the massive recovery rally next year. Kid has no college fund.', th: '⚠️ ยืนยันความกลัว ลูกค้าอุ่นใจแต่พลาดขาขึ้นรอบใหญ่ปีหน้า ลูกไม่มีเงินเรียน', zh: '⚠️ 确认恐惧。客户安心但错过明年大反弹。孩子没学费。' }, stats: { competence: 25, ethics: 35, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Refuse: "I won\'t let you destroy your future based on fear. We hold."', th: '🛑 ห้าม: "ผมไม่ยอมให้คุณทำลายอนาคตเพราะความกลัว เราถือต่อ"', zh: '🛑 拒绝："我不会让你因恐惧毁掉未来。持有。"' }, consequence: { en: '✅ Tough Love. Client screams but thanks you 2 years later when fund doubles.', th: '✅ รักวัวให้ผูก ลูกค้าด่าแต่ขอบคุณอีก 2 ปีถัดมาตอนตองทุนโต 2 เท่า', zh: '✅ 严厉的爱。客户尖叫但2年后基金翻倍时感谢你。' }, stats: { competence: 45, ethics: 50, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '💊 Pharma Pivot: "Sell the index, buy vaccine stocks."', th: '💊 ย้ายไปยา: "ขายดัชนี ซื้อหุ้นวัคซีน"', zh: '💊 医药转向："卖指数，买疫苗股。"' }, consequence: { en: '✅ Tactical Win. Vaccine stocks boom. You saved value and profited.', th: '✅ แทคติกสวย หุ้นวัคซีนพุ่ง รักษาเงินต้นแถมกำไร', zh: '✅ 战术胜利。疫苗股暴涨。保值获利。' }, stats: { competence: 45, ethics: 40, leadership: 35, innovation: 45 } },
            { id: 'D', text: { en: '🧘 Therapist Mode: "Let\'s breathe. Talk to me about your fears first."', th: '🧘 โหมดจิตแพทย์: "หายใจลึกๆ คุยความกลัวของคุณให้ผมฟังก่อน"', zh: '🧘 治疗师模式："深呼吸。先跟我说说你的恐惧。"' }, consequence: { en: '✅ Emotional Support. Client calms down, keeps the plan. Client loyalty +100.', th: '✅ ที่พึ่งทางใจ ลูกค้าสงบลง ยึดตามแผน ภักดี +100', zh: '✅ 情感支持。客户冷静，坚持计划。忠诚度+100。' }, stats: { competence: 35, ethics: 50, leadership: 40, innovation: 30 } }
        ]
    },
    {
        id: 'sb_018',
        text: {
            en: '📉 The "Fat Finger" Error: You meant to sell 1,000 shares for a client, but typed 100,000. The order fills instantly, crashing the stock price by 2%. You are down $200k instantly.',
            th: '📉 นิ้วเบียดหายนะ: ตั้งใจขาย 1,000 หุ้นให้ลูกค้า แต่ดันพิมพ์ 100,000 คำสั่งแมทช์ทันที หุ้นร่วง 2% คุณขาดทุนทันที $200k',
            zh: '📉 "胖手指"错误：想帮客户卖1000股，打成10万。订单瞬间成交，股价砸盘2%。瞬间亏损20万。'
        },
        options: [
            { id: 'A', text: { en: '🐛 "Cover It Up": Trade out of it slowly hoping nobody notices.', th: '🐛 "กลบเกลื่อน": "ค่อยๆ เทรดแก้หวังว่าไม่มีใครเห็น"', zh: '🐛 "掩盖"：慢慢交易出来，希望没人注意。' }, consequence: { en: '💀 Compliance Nightmare. Hidden losses grow. You get caught for unauthorized trading.', th: '💀 ฝันร้าย ฝ่ายตรวจสอบจับได้ ขาดทุนงอก โดนข้อหาเทรดเถื่อน', zh: '💀 合规噩梦。隐形损失扩大。因未授权交易被抓。' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: 10 } },
            { id: 'B', text: { en: '📢 "Own It": Call manager immediately. "I messed up. Help me fix it."', th: '📢 "สารภาพ": "โทรหา ผจก. ทันที ผมพลาด ช่วยผมที"', zh: '📢 "承认"：马上给经理打电话。"我搞砸了。帮我补救。"' }, consequence: { en: '✅ Professionalism. Firm uses error account to cover. You get a warning but keep your job.', th: '✅ มืออาชีพ บริษัทใช้บัญชีฉุกเฉินรับจบ โดนเตือนแต่ไม่ตกงาน', zh: '✅ 专业。公司用错误账户覆盖。警告但保住工作。' }, stats: { competence: 35, ethics: 45, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🤥 "Client\'s Fault": Claim the client told you 100,000 on the phone.', th: '🤥 "โทษลูกค้า": "อ้างว่าลูกค้าสั่ง 100,000 ทางโทรศัพท์"', zh: '🤥 "客户的错"：声称客户电话里说的是10万。' }, consequence: { en: '💀 Recorded Line. They pull the audio. You are fired for lying and error.', th: '💀 สายถูกอัดเสียง เขาไปฟังเทป โดนไล่ออกฐานโกหกและสะเพร่า', zh: '💀 录音以此。调取录音。因撒谎和失误被开除。' }, stats: { competence: 20, ethics: -50, leadership: -30, innovation: 10 } },
            { id: 'D', text: { en: '💸 Pay Personally: Try to deposit your own cash to cover the loss.', th: '💸 จ่ายเอง: "เอาเงินตัวเองโปะ"', zh: '💸 自掏腰包：试图存入自己的现金弥补亏损。' }, consequence: { en: '⚠️ Commingling Funds. Strictly illegal. You get fired for a different reason.', th: '⚠️ ปนเปเงินส่วนตัว ผิดกฎเหล็ก โดนไล่ออกข้อหาใหม่', zh: '⚠️ 混同资金。严格非法。因其他原因被开除。' }, stats: { competence: 25, ethics: 20, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'sb_019',
        text: {
            en: '🏦 The Bank Run: Rumors swirl that the bank holding your client assets is insolvent. Clients can\'t withdraw cash. They are panicking. You are an employee of this bank.',
            th: '🏦 แบงค์ล้ม: ข่าวลือว่าธนาคารที่คุณทำงานถังแตก ลูกค้าถอนเงินไม่ได้ กำลังแตกตื่น คุณเป็นพนักงานของแบงค์นี้',
            zh: '🏦 银行挤兑：传闻托管你客户资产的银行破产了。客户无法取现。恐慌。你是这家银行的员工。'
        },
        options: [
            { id: 'A', text: { en: '🏃 "Leave Ship": Resign immediately. Tell clients "I\'m out, you should be too."', th: '🏃 "สละเรือ": "ลาออกทันที บอกลูกค้า ผมไปแล้ว คุณก็ควรไป"', zh: '🏃 "弃船"：立即辞职。告诉客户"我走了，你们也该走。"' }, consequence: { en: '✅ Client Savior. You burn the bridge with the bank but clients follow you everywhere forever.', th: '✅ ฮีโร่ลูกค้า หักดิบกับแบงค์แต่ลูกค้าตามคุณไปจนวันตาย', zh: '✅ 客户救星。跟银行闹翻但客户永远跟随你。' }, stats: { competence: 45, ethics: 40, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '📢 Company Man: "Everything is fine. FDIC insured. Stay calm."', th: '📢 คนขององค์กร: "ทุกอย่างปกติ มีประกัน FDIC ใจเย็นๆ"', zh: '📢 公司人："一切正常。FDIC承保。保持冷静。"' }, consequence: { en: '⚖️ Risk. If bank fails, you are a liar. If it survives, you are a leader.', th: '⚖️ เสี่ยง ถ้าแบงค์ล้มคุณคือคนลวงโลก ถ้า รอดคุณคือผู้นำ', zh: '⚖️ 风险。如果不幸倒闭，你是骗子。如果幸存，你是领导者。' }, stats: { competence: 35, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🤫 Secret Exit: Withdraw your own family\'s money but tell clients nothing.', th: '🤫 แอบออก: "ถอนเงินครอบครัวตัวเองเงียบๆ ไม่บอกลูกค้า"', zh: '🤫 秘密撤退：取出自己家人的钱但不告诉客户。' }, consequence: { en: '💀 Moral Bankruptcy. You survive financially but live with the guilt. Clients lose trust.', th: '💀 ล้มละลายทางใจ รอดตัวแต่รู้สึกผิด ลูกค้าหมดศรัทธา', zh: '💀 道德破产。经济幸存但背负罪恶感。客户失去信任。' }, stats: { competence: 40, ethics: -40, leadership: -20, innovation: 10 } },
            { id: 'D', text: { en: '📊 "Hedge It": "Buy CDS (Credit Default Swaps) on the bank for clients."', th: '📊 "เฮดจ์แบงค์": "ซื้อ CDS ประกันความเสี่ยงแบงค์ให้ลูกค้า"', zh: '📊 "对冲"："为客户购买银行的CDS（信用违约掉期）。"' }, consequence: { en: '✅ Genius. If bank dies, swaps pay out. Best of both worlds.', th: '✅ อัจฉริยะ ถ้าแบงค์ต่าย ประกันจ่าย รอดทั้งขึ้นทั้งล่อง', zh: '✅ 天才。如果银行倒闭，掉期赔付。两全其美。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 } }
        ]
    },
    {
        id: 'sb_020',
        text: {
            en: '📜 The Inheritance Feud: A wealthy client dies. His 22-year-old son wants to sell the conservative dividend portfolio to buy "Crypto & NFTs". The mother (executor) disagrees. They are fighting in your office.',
            th: '📜 ศึกมรดก: ลูกค้าเศรษฐีเสียชีวิต ลูกชายวัย 22 จะขายพอร์ตปันผลทิ้งไปลง "Crypto & NFTs" แม่ (ผู้จัดการมรดก) ไม่ยอม ทะเลาะกันในห้องคุณ',
            zh: '📜 遗产争夺：富豪去世。22岁儿子要卖掉保守分红组合买"加密货币和NFT"。母亲（执行人）不同意。在你办公室吵架。'
        },
        options: [
            { id: 'A', text: { en: '👩 "Side with Mom": "She is the executor. Legally I listen to her."', th: '👩 "เข้าข้างแม่": "เธอคือผู้จัดการมรดก ตามกฎหมายผมฟังเธอ"', zh: '👩 "站母亲"："她是执行人。法律上我听她的。"' }, consequence: { en: '✅ Safe & Legal. Son hates you, leaves later. Money finds peace.', th: '✅ ปลอดภัย ลูกเกลียดคุณย้ายหนีทีหลัง แต่เงินปลอดภัย', zh: '✅ 安全合法。儿子恨你，后来走了。资金安稳。' }, stats: { competence: 40, ethics: 45, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🧑 "Side with Son": "He is the future. Let\'s allocate 10% to his ideas."', th: '🧑 "เข้าข้างลูก": "เขาคืออนาคต แบ่งสัก 10% ให้ไอเดียเขาเถอะ"', zh: '🧑 "站儿子"："他是未来。拨10%给他的想法。"' }, consequence: { en: '✅ Diplomat. Mom accepts small risk. Son feels heard. You keep the family assets.', th: '✅ นักการทูต แม่ยอมเสี่ยงนิดหน่อย ลูกรู้สึกสำคัญ คุณรักษาเงินก้อนโตไว้ได้', zh: '✅ 外交家。母亲接受小风险。儿子感到被倾听。你保住了家族资产。' }, stats: { competence: 45, ethics: 40, leadership: 45, innovation: 40 } },
            { id: 'C', text: { en: '🤷 "Stay Out": "You two work it out. I\'ll get coffee."', th: '🤷 "ไม่ยุ่ง": "ตกลงกันเองนะ ผมไปชงกาแฟ"', zh: '🤷 "置身事外"："你俩商量。我去喝咖啡。"' }, consequence: { en: '⚠️ Weakness. They need guidance. They realize they don\'t need you.', th: '⚠️ อ่อนแอ เขาต้องการไกด์ เขาจะรู้ตัวว่าไม่ต้องมีคุณก็ได้', zh: '⚠️ 软弱。他们需要指导。意识到不需要你。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '⚖️ "Split Accounts": "Divide assets now. Let son ruin his share."', th: '⚖️ "แยกวง": "แบ่งเงินเลย ให้ลูกไปเจ๊งในส่วนของตัวเอง"', zh: '⚖️ "分账户"："现在分家产。让儿子毁掉他那份。"' }, consequence: { en: '💀 Mom Angry. She wanted family unity. She fires you for splitting them apart.', th: '💀 แม่โกรธ เธออยากให้ครอบครัวรวมกัน ไล่คุณออกฐานยุแยง', zh: '💀 母亲生气。她想要家庭团结。因你拆散他们而解雇你。' }, stats: { competence: 30, ethics: 25, leadership: 20, innovation: 20 } }
        ]
    },
    // SECTION 5: WALL STREET WARFARE (Questions 21-25)
    {
        id: 'sb_021',
        text: {
            en: '🌪️ Churn & Burn Pressure: Your branch manager needs to hit a monthly quota. He hints you should "rotate" client portfolios—buying and selling needlessly to generate commissions. "It\'s called \'active management\', rookie," he winks.',
            th: '🌪️ แรงกดดันปั่นยอด: ผู้จัดการสาขาต้องทำยอดด่วน เขาบอกใบ้ให้คุณ "หมุนเวียน" พอร์ตลูกค้าซื้อๆ ขายๆ เข้าไปเพื่อปั่นค่าคอมฯ "เขาเรียกว่า \'บริหารเชิงรุก\' ไอ้หนู" เขาขยิบตา',
            zh: '🌪️ 炒单压力：分行经理要通过配额。他暗示你应该"轮换"客户投资组合——无谓地买卖以产生佣金。"这叫\'主动管理\'，菜鸟，"他眨眼道。'
        },
        options: [
            { id: 'A', text: { en: '🔄 "Spin the Wheel": "Do it. Generate the fees. Keep the boss happy."', th: '🔄 "ปั่นไปเลย": "ทำไป ปั่นค่าเนียม เอาใจนาย"', zh: '🔄 "转轮子"："做吧。产生费用。让老板高兴。"' }, consequence: { en: '💀 Audit Trap. FINRA algorithms flag your turnover rate. You lose your license for "excessive trading".', th: '💀 กับดักตรวจสอบ FINRA จับได้ว่าเทรดเกินจำเป็น โดนยึดใบอนุญาต', zh: '💀 审计陷阱。FINRA算法标记你的换手率。因"过度交易"失去执照。' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: 10 } },
            { id: 'B', text: { en: '🛡️ "Strategic Shift Only": "I\'ll rebalance only where it makes sense for them."', th: '🛡️ "ปรับตามแผน": "ผมจะปรับพอร์ตเฉพาะที่สมเหตุสมผลเท่านั้น"', zh: '🛡️ "仅战略调整"："我只在合理的地方进行再平衡。"' }, consequence: { en: '⚖️ Middle Ground. You miss the full quota, boss is annoyed, but clients are safe.', th: '⚖️ ทางสายกลาง ยอดไม่ถึงเป้า นายหงุดหงิด แต่ลูกค้ารอด', zh: '⚖️ 中庸之道。没达到全部配额，老板烦，但客户安全。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '🚫 "Refuse Flat Out": "I am a fiduciary. I won\'t churn."', th: '🚫 "ปฏิเสธเสียงแข็ง": "ผมถือจริยธรรม ผมไม่ปั่น"', zh: '🚫 "断然拒绝"："我是受托人。我不炒单。"' }, consequence: { en: '✅ Ethical Stand. Boss hates you, assigns you bad leads. But you sleep well.', th: '✅ ยืนกราน นายเกลียด ส่งงานห่วยๆ ให้ แต่คุณนอนหลับสบาย', zh: '✅ 道德立场。老板恨你，给你烂线索。但你睡得香。' }, stats: { competence: 35, ethics: 55, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '🧠 "Fee-Based Pivot": "Propose switching clients to annual wealth fees instead of trading comms."', th: '🧠 "เปลี่ยนโมเดล": "เสนอย้ายลูกค้าไปจ่ายค่าธรรมเนียมรายปีแทนค่าคอมฯ เทรด"', zh: '🧠 "收费转型"："提议将客户转为按年收费而非交易佣金。"' }, consequence: { en: '🚀 Visionary. Eliminates churn incentive. Firm gets steady income. You look like a genius.', th: '🚀 วิสัยทัศน์ ตัดปัญหาปั่นยอด บริษัทได้เงินนิ่งๆ คุณดูฉลาดมาก', zh: '🚀 有远见。消除炒单动机。公司获得稳定收入。你像个天才。' }, stats: { competence: 50, ethics: 50, leadership: 45, innovation: 50 } }
        ]
    },
    {
        id: 'sb_022',
        text: {
            en: '🤖 The Algo Duel: A rival firm turns on a predatory HFT (High Frequency Trading) bot that is "sniping" your large orders, costing your clients $0.05 per share. You can turn on "Stealth Mode" (slower execution but hides orders) or "Aggressive" (fight back).',
            th: '🤖 สงครามบอท: คู่แข่งเปิดบอท HFT มา "สไนป์" ดักกินคำสั่งคุณ ลูกค้าเสีย $0.05 ต่อหุ้น คุณจะเปิด "Stealth Mode" (ช้าแต่ซ่อนคำสั่ง) หรือ "Aggressive" (สู้กลับ)',
            zh: '🤖 算法对决：对手开启掠夺性HFT（高频交易）机器人"狙击"你的大单，让你的客户每股损失0.05美元。你可以开启"隐身模式"（执行慢但隐藏）或"激进"（反击）。'
        },
        options: [
            { id: 'A', text: { en: '👻 "Stealth Mode": "Use Dark Pools and Iceberg orders. Hide from the predator."', th: '👻 "โหมดล่องหน": "ใช้ Dark Pools และ Iceberg ซ่อนตัวจากนักล่า"', zh: '👻 "隐身模式"："使用暗池和冰山指令。躲避掠夺者。"' }, consequence: { en: '✅ Smart Defense. Execution takes longer, but price is better. Clients impressed by your tech savvy.', th: '✅ ป้องกันฉลาด ช้าหน่อยแต่ราคาดี ลูกค้าประทับใจความเก๋า', zh: '✅ 聪明防御。执行久点，但价格更好。客户被特别是你的技术折服。' }, stats: { competence: 50, ethics: 40, leadership: 35, innovation: 45 } },
            { id: 'B', text: { en: '⚔️ "Aggressive": "Spam fake quotes to confuse their bot. Electronic warfare!"', th: '⚔️ "บุกแหลก": "ส่งคำสั่งหลอกรัวๆ ไปกวนบอทมัน สงครามไซเบอร์!"', zh: '⚔️ "激进"："发送假报价迷惑他们的机器人。电子战！"' }, consequence: { en: '💀 "Spoofing" Charge. That is illegal market manipulation. SEC knocks on your door.', th: '💀 โดนข้อหา Spoofing ผิดกฎหมายปั่นป่วนตลาด SEC มาเคาะประตูบ้าน', zh: '💀 "欺诈引诱"指控。那是非法操纵市场。SEC找上门。' }, stats: { competence: 30, ethics: -30, leadership: -10, innovation: 30 } },
            { id: 'C', text: { en: '📢 "Complain": "Call the exchange and file a complaint."', th: '📢 "ฟ้องครู": "โทรแจ้งตลาดหลักทรัพย์ ร้องเรียน"', zh: '📢 "投诉"："打电话给交易所投诉。"' }, consequence: { en: '⚠️ Slow Bureaucracy. They investigate 6 months later. Clients lose money in the meantime.', th: '⚠️ ราชการเต่าล้านปี กว่าจะมาสอบก็ 6 เดือน ลูกค้าขาดทุนไปหมดแล้ว', zh: '⚠️ 官僚主义。6个月后才查。期间客户亏钱。' }, stats: { competence: 25, ethics: 35, leadership: 15, innovation: 10 } },
            { id: 'D', text: { en: '🤷 "Ignore": "It\'s just pennies. Not worth the hassle."', th: '🤷 "ช่างมัน": "แค่เศษเงิน อย่าไปเครียด"', zh: '🤷 "无视"："才几分钱。不值得麻烦。"' }, consequence: { en: '💀 Death by 1000 Cuts. Performance lags index. Clients notice you are "expensive".', th: '💀 น้ำซึมบ่อทราย ผลตอบแทนแพ้ตลาด ลูกค้ารู้สึกว่าคุณ "แพง"', zh: '💀 凌迟。表现落后指数。客户觉得你"费钱"。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'sb_023',
        text: {
            en: '🕵️ The "Expert" Network: A consultant "expert" charges $5,000/hr. He "hints" he knows iPhone production numbers before Apple releases them. It\'s expensive but could make millions.',
            th: '🕵️ เครือข่ายผู้เชี่ยวชาญ: ที่ปรึกษาคิด $5,000/ชม. บอกใบ้ว่ารู้ยอดผลิต iPhone ก่อน Apple แถลง แพงแต่ทำเงินได้เป็นล้าน',
            zh: '🕵️ "专家"网络：顾问"专家"收5000美元/小时。暗示他在Apple发布前知道iPhone产量。很贵但能赚数百万。'
        },
        options: [
            { id: 'A', text: { en: '🤑 "Buy Info": "Pay him. Get next week\'s numbers. Leverage up."', th: '🤑 "ซื้อข้อมูล": "จ่ายไป เอายอดอาทิตย์หน้ามา อัด Leverage"', zh: '🤑 "买信息"："以此付钱。拿下一周的数据。加杠杆。"' }, consequence: { en: '⚠️ Material Non-Public Info (MNPI). If it\'s too accurate, SEC tracks it. High risk of jail.', th: '⚠️ ข้อมูลภายใน ถ้าแม่นเกินไป SEC ตามรอยได้ เสี่ยงคุกสูง', zh: '⚠️ 重大非公开信息。如果太准，SEC会追踪。坐牢风险高。' }, stats: { competence: 35, ethics: -40, leadership: -10, innovation: 20 } },
            { id: 'B', text: { en: '🔎 "Mosaic Theory": "Pay him, but combine with 10 other sources so it\'s \'research\' not \'insider info\'."', th: '🔎 "ทฤษฎีโมเสก": "จ่ายเขา แต่เอาข้อมูลไปรวมกับอีก 10 ที่ ให้มันเป็น \'วิจัย\' ไม่ใช่ \'อินไซด์\'"', zh: '🔎 "拼图理论"："付钱，但结合其他10个来源，这样是\'研究\'而非\'内幕\'。"' }, consequence: { en: '✅ Loophole Master. Legal and profitable. This is how hedge funds win.', th: '✅ เซียนช่องว่าง ถูกกฎหมายและกำไร นี่แหละวิธีที่กองทุนชนะ', zh: '✅ 漏洞大师。合法且获利。对冲基金就是这么赢的。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 } },
            { id: 'C', text: { en: '🚫 "Too Risky": "Don\'t touch it. Rely on public earnings reports."', th: '🚫 "เสี่ยงไป": "ไม่เอา รออ่านงบที่เปิดเผยดีกว่า"', zh: '🚫 "太冒险"："别碰。依赖公开财报。"' }, consequence: { en: '⚖️ Safe but Slow. You miss the "alpha". Returns are average.', th: '⚖️ ปลอดภัยแต่ช้า พลาดกำไรก้อนโต ผลตอบแทนแค่ค่าเฉลี่ย', zh: '⚖️ 安全但慢。错过"超额收益"。回报平平。' }, stats: { competence: 30, ethics: 45, leadership: 20, innovation: 10 } },
            { id: 'D', text: { en: '📹 "Record Him": "Get him to spill secrets, then whistleblow for a bounty."', th: '📹 "อัดเสียง": "หลอกให้คายความลับ แล้วแจ้งเบาะแสล่ารางวัล"', zh: '📹 "录音"："让他吐露秘密，然后吹哨拿赏金。"' }, consequence: { en: '✅ Bounty Hunter. You get a % of the fine. Industry blacklists you as a snitch though.', th: '✅ นักล่ารางวัล ได้ส่วนแบ่งค่าปรับ แต่วงการแบนคุณฐานะสายลับ', zh: '✅ 赏金猎人。你分到罚款。但行业拉黑你这个告密者。' }, stats: { competence: 35, ethics: 40, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'sb_024',
        text: {
            en: '👑 The Dictator\'s Wallet: A Sovereign Wealth Fund from a regime notorious for human rights abuses wants to park $500M with you. Fees would be $5M/year. "Just generic index funds," they say.',
            th: '👑 กระเป๋าเงินเผด็จการ: กองทุนความมั่งคั่งจากรัฐบาลที่ละเมิดสิทธิมนุษยชนอยากฝาก $500M กับคุณ ค่าธรรมเนียม $5M/ปี "แค่กองทุนดัชนีทั่วไป" เขาบอก',
            zh: '👑 独裁者的钱包：一个因侵犯人权而臭名昭著的政权的主权财富基金想在你这存5亿美元。费用500万/年。"只是普通指数基金，"他们说。'
        },
        options: [
            { id: 'A', text: { en: '💰 "Take It": "Money is neutral. I manage indices, not politics."', th: '💰 "รับเงิน": "เงินเป็นกลาง ผมบริหารกองทุน ไม่ได้เล่นการเมือง"', zh: '💰 "收下"："钱是中立的。我管理指数，不是政治。"' }, consequence: { en: '✅ Financial Home Run. Your firm loves the revenue. You bury you conscience.', th: '✅ โฮมรูน บริษัทรักรายได้นี้ คุณฝังความรู้สึกผิดไว้ลึกๆ', zh: '✅ 财务全垒打。公司喜欢这笔收入。你埋葬良心。' }, stats: { competence: 40, ethics: 10, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🛑 "Sanction Check": "Refuse unless Legal Team clears every cent. High scrutiny."', th: '🛑 "ตรวจเข้ม": "ปฏิเสธจนกว่าฝ่ายกฎหมายจะเคลียร์ทุกเซ็นต์ ตรวจละเอียด"', zh: '🛑 "制裁检查"："除非法务团队批准每一分钱，否则拒绝。严格审查。"' }, consequence: { en: '⚖️ Bureaucratic Hell. They get annoyed and leave. You avoided risk but lost the deal.', th: '⚖️ นรกเอกสาร รำคาญแล้วหนีไป คุณเลี่ยงเสี่ยงแต่เสียดีล', zh: '⚖️ 官僚地狱。他们烦了走了。你避开了风险但丢了单子。' }, stats: { competence: 45, ethics: 40, leadership: 35, innovation: 20 } },
            { id: 'C', text: { en: '🙅 "Ethical Refusal": "We don\'t serve your kind. Get out."', th: '🙅 "ปฏิเสธด้วยธรรม": "เราไม่รับคนแบบคุณ ออกไป"', zh: '🙅 "道德拒绝"："我们要不服务你们这种人。滚。"' }, consequence: { en: '⚠️ Dangerous Enemies. They smear your firm. But you become a hero to activists.', th: '⚠️ ศัตรูอันตราย เขาปล่อยข่าวทำลายคุณ แต่คุณเป็นฮีโร่ของนักเคลื่อนไหว', zh: '⚠️ 危险敌人。他们抹黑你公司。但你成为活动家的英雄。' }, stats: { competence: 30, ethics: 60, leadership: 45, innovation: 10 } },
            { id: 'D', text: { en: '🤝 "The Front": "Use an intermediary bank in Switzerland to anonymity them."', th: '🤝 "นอมินี": "ใช้แบงค์สวิสบังหน้าปิดชื่อ"', zh: '🤝 "掩护"："用瑞士中介银行匿他们名。"' }, consequence: { en: '💀 Money Laundering. You are knowingly layering dirty money. Prison time.', th: '💀 ฟอกเงิน คุณรู้เห็นการอำพรางเงินสกปรก ติดคุก', zh: '💀 洗钱。你故意分层洗钱。坐牢。' }, stats: { competence: 35, ethics: -50, leadership: -30, innovation: 30 } }
        ]
    },
    {
        id: 'sb_025',
        text: {
            en: '🤫 The Rumor Mill: You hear a credible rumor that "TechGiant X" is acquiring "Startup Y". You own neither. If you buy "Startup Y" now, you double your money. If the rumor is false, you lose 50%.',
            th: '🤫 ข่าวลือ: ได้ยินข่าวลือหนาหูว่า "TechGiant X" จะซื้อ "Startup Y" คุณไม่มีหุ้นทั้งคู่ ถ้าซื้อ Y ตอนนี้ กำไร 2 เท่า ถ้าข่าวลือมั่ว ขาดทุน 50%',
            zh: '🤫 谣言工厂：听到可靠传闻"科技巨头X"要收购"创业公司Y"。你都没持有。如果现在买Y，翻倍。如果谣言是假的，亏50%。'
        },
        options: [
            { id: 'A', text: { en: '🎰 "YOLO Call Options": "All in on Startup Y Calls. High risk high reward!"', th: '🎰 "อัดหมดหน้าตัก": "All in Call Options หุ้น Y เสี่ยงสูงลุ้นหนัก!"', zh: '🎰 "YOLO看涨期权"："全仓Y看涨期权。高风险高回报！"' }, consequence: { en: '🎲 Coinflip. Rumor was... TRUE! You make a fortune. But it was luck, not skill.', th: '🎲 โยนหัวก้อย ข่าว... จริง! รวยเละ แต่มันคือโชคไม่ใช่ฝีมือ', zh: '🎲 抛硬币。谣言是...真的！发大财。但在是运气非技术。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 40 } },
            { id: 'B', text: { en: '📊 "Straddle Strategy": "Buy Calls AND Puts. volatility will pay out either way."', th: '📊 "ดักสองทาง": "ซื้อทั้ง Call และ Put เหวี่ยงทางไหนก็ได้ตังค์"', zh: '📊 "跨式策略"："买入看涨和看跌。无论哪种方式波动都会获利。"' }, consequence: { en: '✅ Trading Masterclass. You profit from the move regardless of direction. Pure competence.', th: '✅ วิชาเทพ กำไรจากการเหวี่ยงไม่สนทิศทาง ฝีมือล้วนๆ', zh: '✅ 交易大师课。无论方向如何你都从波动中获利。纯实力。' }, stats: { competence: 55, ethics: 40, leadership: 40, innovation: 45 } },
            { id: 'C', text: { en: '🛑 "Ignore Rumors": "I trade facts, not whispers."', th: '🛑 "ไม่สนข่าวลือ": "ผมเทรดด้วยความจริง ไม่ใช่เสียงกระซิบ"', zh: '🛑 "无视谣言"："我交易事实，不是耳语。"' }, consequence: { en: '✅ Disciplined. You miss the gain but avoid the "gambler" label.', th: '✅ มีวินัย พลาดกำไรแต่ไม่โดนตราหน้าว่าผีพนัน', zh: '✅ 自律。错失收益但避开了"赌徒"标签。' }, stats: { competence: 40, ethics: 45, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '📢 "Spread the Rumor": "Tell everyone to pump the price before you sell."', th: '📢 "ปั่นข่าว": "ไปบอกต่อให้คนมาช่วยดันราคาแล้วชิงขาย"', zh: '📢 "传播谣言"："告诉所有人把价格推高然后你卖出。"' }, consequence: { en: '💀 Manipulation. SEC monitors social sentiment. You are flagged.', th: '💀 ปั่นตลาด SEC จับตามองกระแสโซเชียล คุณโดนเพ่งเล็ง', zh: '💀 操纵。SEC监控社会舆论。你被标记。' }, stats: { competence: 25, ethics: -40, leadership: -10, innovation: 30 } }
        ]
    },
    // SECTION 6: THE DARK SIDE OF LEVERAGE (Questions 26-30)
    {
        id: 'sb_026',
        text: {
            en: '💣 The Margin Trap: A client obsessed with a tech stock wants to borrow 2x their account value (200% leverage). If the stock drops 10%, they get wiped out. They are aggressive and demanding.',
            th: '💣 กับดักมาร์จิ้น: ลูกค้าคลั่งหุ้นเทคตัวนึงมาก อยากกู้ 2 เท่าของพอร์ต (Leverage 200%) ถ้าหุ้นตกแค่ 10% คือพอร์ตแตกทันที เขาเป็นคนดุและเอาแต่ใจ',
            zh: '💣 保证金陷阱：客户痴迷某科技股，想借账户价值2倍的钱（200%杠杆）。如果股票下跌10%，他们就会爆仓。他们很激进且苛刻。'
        },
        options: [
            { id: 'A', text: { en: '🛑 "Deny Leverage": "I can\'t authorize this. It\'s financial suicide."', th: '🛑 "ไม่อนุมัติ": "ผมให้ไม่ได้ มันคือการฆ่าตัวตายทางการเงิน"', zh: '🛑 "拒绝杠杆"："我不能批准。这是财务自杀。"' }, consequence: { en: '✅ Guardian. Client screams and threatens to leave, but stays when the stock dips next week. You saved them.', th: '✅ ผู้พิทักษ์ ลูกค้าโวยวายจะย้ายหนี แต่สุดท้ายอยู่ต่อตอนหุ้นย่ออาทิตย์หน้า คุณช่วยชีวิตเขาไว้', zh: '✅ 守护者。客户尖叫威胁要走，但下周股票下跌时留下了。你救了他们。' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '📝 "Sign the Waiver": "Sure, but sign this document saying it was YOUR idea."', th: '📝 "เซ็นใบสละสิทธิ์": "ได้ครับ แต่เซ็นเอกสารนี้ว่าคุณคิดเองนะ"', zh: '📝 "签免责书"："行，但签这文件说明是你自己的主意。"' }, consequence: { en: '⚠️ Legal Shield. They get wiped out. You are safe legally, but you lost a client and fee stream.', th: '⚠️ เกราะกฎหมาย เขาเจ๊งหมดตัว คุณรอดตัวทางกฎหมาย แต่เสียลูกค้าและเงิน', zh: '⚠️ 法律盾牌。他们爆仓。你法律上安全，但失去了一个客户和费用流。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🤝 "Partial Leverage": "I\'ll give you 1.2x. Not 2x. Take it or leave it."', th: '🤝 "ให้บางส่วน": "ผมให้ 1.2 เท่า พอ ไม่ใช่ 2 เท่า จะเอาไหม"', zh: '🤝 "部分杠杆"："我给你1.2倍。不是2倍。爱要不要。"' }, consequence: { en: '✅ Negotiation. They survive the dip and make profit later. Good middle ground.', th: '✅ เจรจา เขารอดช่วงย่อและกำไรทีหลัง ทางสายกลางที่ดี', zh: '✅ 谈判。他们挺过下跌并在后来获利。很好的折中。' }, stats: { competence: 40, ethics: 35, leadership: 35, innovation: 20 } },
            { id: 'D', text: { en: '🚀 "Approved": "Let\'s make history! Max leverage enabled!"', th: '🚀 "อนุมัติ": "สร้างตำนานกัน! เปิดเลเวอเรจสุดหลอด!"', zh: '🚀 "批准"："让我们创造历史！最大杠杆开启！"' }, consequence: { en: '💀 Total Destruction. Stock dips 12%. Account liquidates to $0. You have to make the "margin call" of doom.', th: '💀 พังพินาศ หุ้นตก 12% พอร์ตเหลือ 0 คุณต้องโทรไปทวงหนี้มรณะ', zh: '💀 彻底毁灭。股票跌12%。账户清零。你得打那个毁灭性的"追加保证金"电话。' }, stats: { competence: 10, ethics: 10, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'sb_027',
        text: {
            en: '❄️ The Crypto Winter: A client wants to put 50% of their retirement fund into a "stablecoin" offering 20% interest. You know high yields usually mean high risk (Ponzi scheme).',
            th: '❄️ ฤดูหนาวคริปโต: ลูกค้าจะเอาเงินเกษียณ 50% ไปลง "Stablecoin" ที่ให้ดอกเบี้ย 20% คุณรู้อยู่ว่าดอกสูงขนาดนี้มักจะแชร์ลูกโซ่',
            zh: '❄️ 加密寒冬：客户想把50%养老金投入提供20%利息的"稳定币"。你知道高收益通常意味着高风险（庞氏骗局）。'
        },
        options: [
            { id: 'A', text: { en: '🚫 "Block Trade": "We don\'t support that platform. It\'s unsafe."', th: '🚫 "ปิดกั้น": "เราไม่รองรับเว็บนั้นครับ มันไม่ปลอดภัย"', zh: '🚫 "阻止交易"："我们不支持该平台。它不安全。"' }, consequence: { en: '✅ Hard Barrier. Client is mad but funds are safe when the coin collapses to $0.', th: '✅ กำแพงเหล็ก ลูกค้าโกรธแต่เงินอยู่ครบตอนเหรียญเหลือ 0', zh: '✅ 硬屏障。客户生气但在币归零时资金安全。' }, stats: { competence: 45, ethics: 50, leadership: 45, innovation: 10 } },
            { id: 'B', text: { en: '🤷 "Their Choice": "Transfer the money out. Good luck."', th: '🤷 "เรื่องของเขา": "โอนเงินออกไปให้ โชคดีนะ"', zh: '🤷 "他们的选择"："把钱转出去。祝好运。"' }, consequence: { en: '⚠️ Loss of Assets. Money leaves your firm. Client loses it all.', th: '⚠️ เงินไหลออก เงินออกจากบริษัท ลูกค้าเจ๊งหมด', zh: '⚠️ 资产流失。钱离开公司。客户输光。' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🔍 "DeFi Analysis": "Let me read the whitepaper... Okay, it\'s a Ponzi. Look at this code."', th: '🔍 "วิเคราะห์ DeFi": "ขออ่าน Whitepaper หน่อย... โอเค แชร์ลูกโซ่ชัดๆ ดูโค้ดนี่"', zh: '🔍 "DeFi分析"："让我读读白皮书...好吧，是庞氏。看这代码。"' }, consequence: { en: '✅ Education Win. You prove it\'s a scam scientifically. Client is amazed by your tech skill.', th: '✅ ชนะด้วยความรู้ คุณพิสูจน์ได้ว่าเป็นแชร์ลูกโซ่ ลูกค้าทึ่งในความรู้เทค', zh: '✅ 教育胜利。你科学地证明了它是诈骗。客户惊讶于你的技术能力。' }, stats: { competence: 50, ethics: 45, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '💸 "Join Them": "20%? Wow. I\'ll put my money in too!"', th: '💸 "เอาด้วย": "20%? ว้าว ผมลงด้วย!"', zh: '💸 "加入他们"："20%？哇。我也投！"' }, consequence: { en: '💀 Mutual Ruin. You both lose everything. You look like a fool.', th: '💀 เจ๊งหมู่ หมดตูดทั้งคู่ ดูโง่สนิท', zh: '💀 共同毁灭。你们都输光。你像个傻瓜。' }, stats: { competence: 10, ethics: 20, leadership: 10, innovation: 30 } }
        ]
    },
    {
        id: 'sb_028',
        text: {
            en: '🏡 The Mortgage Crisis: A client needs cash to close on a house in 3 days. The market is down 5%. Selling their stocks now means a loss, but margin loans take 7 days to approve.',
            th: '🏡 วิกฤตบ้าน: ลูกค้าต้องใช้เงินโปะบ้านใน 3 วัน ตลาดหุ้นลงอยู่ 5% ถ้าขายหุ้นตอนนี้ขาดทุน แต่ขอกู้มาร์จิ้นต้องรออนุมัติ 7 วัน',
            zh: '🏡 抵押贷款危机：客户3天内急需现金交房款。市场跌了5%。现在卖股意味着亏损，但保证金贷款审批要7天。'
        },
        options: [
            { id: 'A', text: { en: '⚡ "Pull Favors": "I\'ll call the credit team chief. Rush the approval."', th: '⚡ "ใช้เส้น": "เดี๋ยวโทรหาหัวหน้าสินเชื่อ ลัดคิวอนุมัติให้"', zh: '⚡ "找关系"："我打给信贷主管。加急审批。"' }, consequence: { en: '✅ Relationship King. Loan approved in 24hrs. House saved. Stocks recover later.', th: '✅ เจ้าพ่อคอนเนคชั่น กู้ผ่านใน 24 ชม. ได้บ้าน หุ้นเด้งทีหลัง', zh: '✅ 关系之王。24小时批贷。保住房子。股票后来回升。' }, stats: { competence: 40, ethics: 30, leadership: 45, innovation: 20 } },
            { id: 'B', text: { en: '📉 "Sell": "Market might drop more. Cash out now. Take the 5% hit."', th: '📉 "ขาย": "ตลาดอาจลงอีก ขายตอนนี้เลย เจ็บ 5% ช่างมัน"', zh: '📉 "卖出"："市场可能还会跌。现在套现。承受5%损失。"' }, consequence: { en: '⚠️ Safe but Costly. They get the house, but resent the $50k loss.', th: '⚠️ ปลอดภัยแต่แพง ได้บ้าน แต่แค้นที่เสีย $50k', zh: '⚠️ 安全但昂贵。买了房，但怨恨那5万损失。' }, stats: { competence: 30, ethics: 35, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '💳 "Bridge Loan": "Use a personal short-term loan provider (high interest)."', th: '💳 "กู้นอกระบบ": "ใช้บริการเงินกู้ระยะสั้นดอกแพงไปก่อน"', zh: '💳 "过桥贷"："用个人短期贷款提供商（高息）。"' }, consequence: { en: '⚠️ Financial Bleed. Fees are huge. Client thinks you are unhelpful.', th: '⚠️ เลือดซิบ ดอกแพงหูฉี่ ลูกค้ามองว่าคุณช่วยอะไรไม่ได้', zh: '⚠️ 失血。费用巨大。客户觉得你没用。' }, stats: { competence: 25, ethics: 25, leadership: 20, innovation: 30 } },
            { id: 'D', text: { en: '🤷 "Delay Closing": "Tell the seller to wait. Not your problem."', th: '🤷 "เลื่อนโอน": "บอกคนขายให้รอ ไม่ใช่ปัญหาของคุณ"', zh: '🤷 "推迟成交"："让卖家等。不是你的问题。"' }, consequence: { en: '💀 Deal Collapse. Seller walks. Client loses deposit and blames you.', th: '💀 ดีลล่ม คนขายไม่รอ ลูกค้าเสียมัดจำ โทษคุณเต็มๆ', zh: '💀 交易崩盘。卖家走了。客户损失定金并怪你。' }, stats: { competence: 15, ethics: 20, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'sb_029',
        text: {
            en: '📉 The "Dead Cat Bounce": Market crashed 20% and just rallied 5% today. Everyone thinks the bottom is in. Your charts say it\'s a fake rally before dropping another 20%.',
            th: '📉 หุ้นเด้งแมวตาย: ตลาดร่วง 20% วันนี้เด้งมา 5% ทุกคนนึกว่าจบแล้ว กราฟคุณบอกว่าเป็นแค่เด้งหลอก (Fake rally) ก่อนลงอีก 20%',
            zh: '📉 "死猫反弹"：市场崩盘20%，今天反弹5%。大家都以为到底了。你的图表显示这是假反弹，还会再跌20%。'
        },
        options: [
            { id: 'A', text: { en: '🛑 "Sell into Strength": "Use this rally to exit risky positions. Get lighter."', th: '🛑 "รินขาย": "ใช้จังหวะเด้งเพื่อออกของลดเสี่ยง ตัวเบาไว้"', zh: '🛑 "逢高卖出"："利用这次反弹退出风险头寸。减轻仓位。"' }, consequence: { en: '✅ Expert Call. Market crashes again. Your clients are sitting on cash, ready to buy.', th: '✅ เซียนเรียกพี่ ตลาดร่วงต่อจริง ลูกค้ามีเงินสดรอกวาดของถูก', zh: '✅ 专家判断。市场再次崩盘。你的客户持有现金，准备抄底。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 20 } },
            { id: 'B', text: { en: '🚀 "FOMO Buy": "We might miss the V-shape recovery! Buy!"', th: '🚀 "ไล่ราคา": "เดี๋ยวตกรถ V-shape! ซื้อ!"', zh: '🚀 "FOMO买入"："可能会错过V型反转！买！"' }, consequence: { en: '💀 Bull Trap. You buy at the top of the bounce. Portfolio decimated.', th: '💀 กับดักกระทิง ซื้อยอดดอยของรอบเด้ง พอร์ตพัง', zh: '💀 牛市陷阱。你在反弹顶点买入。投资组合被毁。' }, stats: { competence: 20, ethics: 25, leadership: 15, innovation: 10 } },
            { id: 'C', text: { en: '🛡️ "Hedge with Options": "Keep stocks, buy Puts as insurance."', th: '🛡️ "ประกันความเสี่ยง": "ถือหุ้นไว้ แต่ซื้อ Puts กันเหนียว"', zh: '🛡️ "期权对冲"："持有股票，买入看跌期权作为保险。"' }, consequence: { en: '✅ Safe Play. You participate if it goes up, protected if it goes down.', th: '✅ เพลย์เซฟ ขึ้นก็ได้ตังค์ ลงก็ไม่เจ็บ', zh: '✅ 安全玩法。涨了你也赚，跌了有保护。' }, stats: { competence: 45, ethics: 35, leadership: 35, innovation: 40 } },
            { id: 'D', text: { en: '🤷 "Average In": "Buy a little bit. See what happens."', th: '🤷 "ทยอยเข้า": "ซื้อนิดนึง รอดูสถานการณ์"', zh: '🤷 "均价入场"："买一点。看看情况。"' }, consequence: { en: '⚖️ Standard. Not a hero, not a zero. Acceptable loss.', th: '⚖️ มาตรฐาน ไม่เด่นไม่ดับ ขาดทุนพอรับได้', zh: '⚖️ 标准。不是英雄也不是狗熊。可接受的损失。' }, stats: { competence: 35, ethics: 35, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'sb_030',
        text: {
            en: '🧨 The "Black Box" Product: Head office pushes a new "Structured Note". It offers 10% coupon but risks principal if the Euro drops 30%. The prospectus is 200 pages of math. Commissions are huge (5%).',
            th: '🧨 ผลิตภัณฑ์กล่องดำ: สำนักงานใหญ่ดันสินค้าใหม่ "Structured Note" ให้ดอก 10% แต่เงินต้นหายถ้าค่าเงินยูโรตก 30% หนังสือชี้ชวนเป็นคณิตศาสตร์ 200 หน้า ค่าคอมฯ โหดมาก (5%)',
            zh: '🧨 "黑盒"产品：总部推销新的"结构性票据"。提供10%票息，但如果欧元下跌30%本金受损。说明书是200页的数学公式。佣金巨大（5%）。'
        },
        options: [
            { id: 'A', text: { en: '🚫 "Boycott": "I won\'t sell what I can\'t explain in 2 minutes."', th: '🚫 "บอยคอต": "ผมไม่ขายสิ่งที่ผมอธิบายใน 2 นาทีไม่ได้"', zh: '🚫 "抵制"："我不会卖我两分钟内解释不清的东西。"' }, consequence: { en: '✅ Integrity. Euro crashes later. Other brokers get sued. You are untouched.', th: '✅ ซื่อสัตย์ ยูโรตกทีหลัง โบรกอื่นโดนฟ้อง คุณลอยตัว', zh: '✅ 正直。后来欧元崩盘。其他经纪人被起诉。你毫发无损。' }, stats: { competence: 40, ethics: 55, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '💰 "Mass Sell": "10% yield? Easy sale. Load everyone up!"', th: '💰 "ขายแหลก": "ดอก 10%? ขายง่ายจะตาย ยัดให้ทุกคนเลย!"', zh: '💰 "大肆推销"："10%收益？好卖。给每个人都配！"' }, consequence: { en: '💀 Litigation. Euro drops. Clients lose 40% principal. Class action lawsuit.', th: '💀 คดีความ ยูโรตก ลูกค้าเงินหาย 40% โดนฟ้องแบบกลุ่ม', zh: '💀 诉讼。欧元下跌。客户损失40%本金。集体诉讼。' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: 10 } },
            { id: 'C', text: { en: '🎓 "Simplify & Warn": "Explain the Euro risk clearly. Only for sophisticated clients."', th: '🎓 "ย่อยและเตือน": "อธิบายความเสี่ยงยูโรให้ชัด ขายเฉพาะคนเก่งๆ"', zh: '🎓 "简化并警告"："清楚解释欧元风险。只卖给成熟客户。"' }, consequence: { en: '✅ Professional. You sell a few to the right people. No complaints.', th: '✅ มืออาชีพ ขายได้บ้างให้คนที่เหมาะสม ไม่มีคนบ่น', zh: '✅ 专业。卖了一些给对的人。没投诉。' }, stats: { competence: 50, ethics: 45, leadership: 35, innovation: 30 } },
            { id: 'D', text: { en: '🔄 "Wait and See": "Let others sell first. See if it blows up."', th: '🔄 "รอดู": "ให้คนอื่นขายก่อน ดูว่าระเบิดไหม"', zh: '🔄 "观望"："让别人先卖。看会不会爆雷。"' }, consequence: { en: '⚖️ Late to Party. Product was fine (this time). You missed easy revenue.', th: '⚖️ ตกรถ สินค้าดันโอเค (รอบนี้) อดได้ยอดง่ายๆ', zh: '⚖️ 迟到。产品这次没事。你错过了简单的收入。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } }
        ]
    },

    // SECTION 7: LIFESTYLE & REPUTATION (Questions 31-35)
    {
        id: 'sb_031',
        text: {
            en: '🏎️ The Client\'s Ferrari: A top client offers you his Ferrari for the weekend to "impress a date". It\'s against compliance rules to accept gifts over $100. He insists.',
            th: '🏎️ เฟอร์รารี่ลูกค้า: ลูกค้าระดับท็อปให้ยืมเฟอร์รารี่ไปขับเสาร์อาทิตย์เพื่อ "อวดสาว" กฎห้ามรับของเกิน $100 แต่เขายัดเยียด',
            zh: '🏎️ 客户的法拉利：顶级客户借你他的法拉利过周末去"泡妞"。合规规定不能收超过100美元的礼物。他坚持。'
        },
        options: [
            { id: 'A', text: { en: '🚘 "Take the Keys": "Who\'s gonna know? Vroom Vroom."', th: '🚘 "รับกุญแจ": "ใครจะรู้? บรึ้น บรึ้น"', zh: '🚘 "拿钥匙"："谁会知道？轰轰。" ' }, consequence: { en: '⚠️ Risk. You impress the date, but a coworker sees you. Gossip starts.', th: '⚠️ เสี่ยง ได้หน้ากับสาว แต่เพื่อนร่วมงานเห็น เริ่มนินทา', zh: '⚠️ 风险。约会很成功，但同事看到了。八卦开始。' }, stats: { competence: 20, ethics: -20, leadership: 10, innovation: 10 } },
            { id: 'B', text: { en: '🚫 "Refuse": "I value my license more than a joyride. Thank you though."', th: '🚫 "ปฏิเสธ": "ผมห่วงใบอนุญาตมากกว่าขับรถเล่น ขอบคุณครับ"', zh: '🚫 "拒绝"："比起兜风我更看重执照。还是谢谢。" ' }, consequence: { en: '✅ Respect. Client sees you are serious and unbribable.', th: '✅ นับถือ ลูกค้าเห็นว่าคุณจริงจัง ซื้อไม่ได้', zh: '✅ 尊重。客户看出你认真且不可收买。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🔄 "Rent It": "I\'ll pay you market rental rate ($2000). Make it a transaction."', th: '🔄 "เช่าต่อ": "ผมจ่ายค่าเช่าราคาตลาดให้ ($2000) ทำให้เป็นธุรกิจ"', zh: '🔄 "租用"："我付你市场租金（2000美元）。做成交易。" ' }, consequence: { en: '✅ Smart Loophole. You get the car, ethics intact (technically). Wallet hurts though.', th: '✅ ช่องว่างฉลาด ได้รถ จริยธรรมอยู่ครบ (ทางเทคนิค) แต่กระเป๋าฉีก', zh: '✅ 聪明漏洞。车开了，道德也没丢（技术上）。就是心疼钱。' }, stats: { competence: 45, ethics: 40, leadership: 30, innovation: 30 } },
            { id: 'D', text: { en: '📢 "Report Attempt": "Tell compliance client tried to bribe you."', th: '📢 "รายงาน": "แจ้งฝ่ายตรวจสอบว่าลูกค้าพยายามติดสินบน"', zh: '📢 "举报尝试"："告诉合规部客户试图贿赂你。" ' }, consequence: { en: '💀 Relationship Suicide. Client pulls accounts. Compliance laughs at you.', th: '💀 ฆ่าตัวตายชัดๆ ลูกค้าย้ายหนี ฝ่ายตรวจสอบหัวเราะใส่', zh: '💀 关系自杀。客户撤资。合规部嘲笑你。' }, stats: { competence: 10, ethics: 20, leadership: -10, innovation: 10 } }
        ]
    },
    {
        id: 'sb_032',
        text: {
            en: '🍸 The Drunken Pitch: At a gala, you get drunk. You meet a billionaire. You start pitching a high-risk stock idea. You are slurring your words.',
            th: '🍸 เมาแล้วขาย: ในงานกาล่า คุณเมาหนัก เจอเศรษฐีพันล้าน คุณเริ่มขายไอเดียหุ้นซิ่ง ลิ้นพันกัน',
            zh: '🍸 醉酒推销：晚宴上你喝醉了。遇到亿万富翁。你开始推销高风险股票点子。说话大舌头。'
        },
        options: [
            { id: 'A', text: { en: '🗣️ "Keep Going": "Sales is energy! Push through!"', th: '🗣️ "ไปต่อ": "การขายคือพลังงาน! ลุย!"', zh: '🗣️ "继续"："销售就是能量！冲！"' }, consequence: { en: '💀 Embarrassment. He records you. Viral video: "Drunk Broker".', th: '💀 ขายหน้า เขาอัดคลิป คลิปไวรัล: "โบรกเกอร์ขี้เมา"', zh: '💀 尴尬。他录像了。病毒视频："醉酒经纪人"。' }, stats: { competence: 10, ethics: 20, leadership: -20, innovation: 10 } },
            { id: 'B', text: { en: '🛑 "Abort Mission": "Apologize, hand business card, run to bathroom."', th: '🛑 "ยกเลิกภารกิจ": "ขอโทษ ยื่นนามบัตร วิ่งเข้าห้องน้ำ"', zh: '🛑 "终止任务"："道歉，递名片，跑去厕所。"' }, consequence: { en: '⚠️ Damage Control. You look weird, but not incompetent. He might call later.', th: '⚠️ คุมความเสียหาย ดูแปลกๆ แต่ไม่ถึงกับแย่ เขาอาจจะโทรมา', zh: '⚠️ 止损。你看着奇怪，但并非无能。他可能会打给你。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '💧 "Water Tactician": "Drink 3 waters. Sober up. Smile and listen instead of talking."', th: '💧 "กลยุทธ์น้ำเปล่า": "ดื่มน้ำ 3 แก้ว สร่างก่อน ยิ้มและฟังแทนที่จะพูด"', zh: '💧 "喝水战术"："喝3杯水。醒酒。微笑倾听而不是说话。"' }, consequence: { en: '✅ Recovery. Being a good listener works better anyway. He likes your "vibe".', th: '✅ กู้สถานการณ์ เป็นผู้ฟังที่ดีดีกว่าอยู่แล้ว เขาชอบ "บรรยากาศ" คุณ', zh: '✅ 恢复。反正当个好听众效果更好。他喜欢你的"感觉"。' }, stats: { competence: 40, ethics: 40, leadership: 35, innovation: 20 } },
            { id: 'D', text: { en: '🎰 "Bet on Irony": "Say: \'I am drunk, but this stock is sober.\'"', th: '🎰 "มุกตลก": "บอกว่า \'ผมเมาแต่หุ้นตัวนี้สร่างนะ\'"', zh: '🎰 "赌反讽"："说：\'我醉了，但这股票醒着。\'"' }, consequence: { en: '🎲 Risky Charm. If he has humor, you win. If not, you lose.', th: '🎲 เสน่ห์เสี่ยงตาย ถ้าเขาขำ คุณชนะ ถ้าไม่ คุณจบ', zh: '🎲 冒险魅力。如果他幽默，你赢。没有，你输。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 40 } }
        ]
    },
    {
        id: 'sb_033',
        text: {
            en: '📱 Social Media Star: You want to start a TikTok finance channel to get Gen Z clients. Compliance says "Every video must be pre-approved". This takes 2 weeks per video, killing trends.',
            th: '📱 ดาวโซเชียล: คุณอยากทำ TikTok การเงินหาลูกค้า Gen Z ฝ่ายกฎหมายบอก "ต้องอนุมัติทุกคลิป" ใช้เวลา 2 อาทิตย์ต่อคลิป จบกันเทรนด์',
            zh: '📱 社交媒体明星：你想做TikTok财经频道以此获取Z世代客户。合规部说"每个视频必须预批"。每条耗时2周，错过热点。'
        },
        options: [
            { id: 'A', text: { en: '😈 "Go Rogue": "Post anyway. Delete if caught."', th: '😈 "เถื่อน": "โพสต์ไปเลย โดนจับได้ค่อยลบ"', zh: '😈 "违规操作"："照发。被抓就删。"' }, consequence: { en: '⚠️ Vital Growth, Regulatory Risk. Channel blows up (100k subs), but compliance issues a final warning.', th: '⚠️ โตเร็วแต่เสี่ยง ช่องดังพลุแตก (ซับแสน) แต่โดนใบเตือนสุดท้าย', zh: '⚠️ 疯狂增长，监管风险。频道爆火（10万粉），但合规部发出最后通牒。' }, stats: { competence: 45, ethics: 20, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '🐢 "Follow Rules": "Post stale content 2 weeks late."', th: '🐢 "ตามกฎ": "โพสต์คอนเทนต์บูดๆ ช้าไป 2 อาทิตย์"', zh: '🐢 "遵守规则"："发2周前的过时内容。"' }, consequence: { en: '💀 No Views. "Cringe boomer broker". Waste of time.', th: '💀 ไม่มีคนดู "โบรกเกอร์ลุงแก่ๆ" เสียเวลาเปล่า', zh: '💀 没流量。"尴尬的老年经纪人"。浪费时间。' }, stats: { competence: 20, ethics: 50, leadership: 10, innovation: 10 } },
            { id: 'C', text: { en: '🎓 "Evergreen Content": "Make videos on timeless investing principles. No trends needed."', th: '🎓 "คอนเทนต์อมตะ": "ทำคลิปสอนหลักการลงทุนเหนือกาลเวลา ไม่ต้องตามเทรนด์"', zh: '🎓 "常青内容"："制作关于永恒投资原则的视频。不需要蹭热点。"' }, consequence: { en: '✅ Steady Growth. Attracts serious, wealthy clients, not day traders.', th: '✅ โตมั่นคง ดึงดูดลูกค้าจริงจังและรวย ไม่ใช่พวกเดย์เทรด', zh: '✅ 稳步增长。吸引严肃、富有的客户，而不是日内交易者。' }, stats: { competence: 50, ethics: 45, leadership: 45, innovation: 30 } },
            { id: 'D', text: { en: '🎭 "Anonymous Account": "Wear a mask. Give hot takes."', th: '🎭 "บัญชีหน้ากาก": "ใส่หน้ากาก ให้ทีเด็ด"', zh: '🎭 "匿名账户"："以此戴面具。发表犀利观点。"' }, consequence: { en: '🎲 Identity Reveal Risk. If unmasked, you are banned from the industry.', th: '🎲 เสี่ยงเปิดหน้า ถ้าโดนจับได้ โดนแบนจากวงการ', zh: '🎲 身份暴露风险。如果被揭穿，会被行业封杀。' }, stats: { competence: 30, ethics: 10, leadership: 20, innovation: 40 } }
        ]
    },
    {
        id: 'sb_034',
        text: {
            en: '🏌️ Golf Course Politics: Your boss hates golf. Your biggest prospect loves golf and invites YOU to play at an exclusive club on a workday. Boss expects you in the office.',
            th: '🏌️ การเมืองสนามกอล์ฟ: หัวหน้าเกลียดกอล์ฟ ลูกค้าเป้าหมายใหญ่สุดชอบกอล์ฟและชวน "คุณ" ไปเล่นที่สนามส่วนตัวในวันทำงาน หัวหน้ากะว่าคุณต้องเข้าออฟฟิศ',
            zh: '🏌️ 高尔夫球场政治：老板讨厌高尔夫。你最大的潜在客户喜欢高尔夫，并在工作日邀请"你"去私人俱乐部打球。老板指望你在办公室。'
        },
        options: [
            { id: 'A', text: { en: '🤧 "Call in Sick": "Fake a cough. Go play golf."', th: '🤧 "ลาป่วย": "แกล้งไอ ไปตีกอล์ฟ"', zh: '🤧 "请病假"："装咳嗽。去打高尔夫。"' }, consequence: { en: '✅ Deal Closed. Client loves you. Boss suspicious but happy with the $10M account later.', th: '✅ ปิดดีล ลูกค้าชอบ นายสงสัยแต่พอใจพอร์ต $10M ทีหลัง', zh: '✅ 成交。客户喜欢你。老板起疑但后来对1000万账户很满意。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '🏢 "Stay in Office": "Duty calls. Decline the invite."', th: '🏢 "อยู่ออฟฟิศ": "หน้าที่มาก่อน ปฏิเสธคำเชิญ"', zh: '🏢 "留在办公室"："职责所在。拒绝邀请。"' }, consequence: { en: '💀 Opportunity Lost. Client plays with a competitor instead.', th: '💀 เสียโอกาส ลูกค้าไปเล่นกับคู่แข่งแทน', zh: '💀 机会错失。客户跟竞争对手去玩了。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🗣️ "Persuade Boss": "Explain this is work. \'I am closing the whale\'."', th: '🗣️ "กล่อมหัวหน้า": "อธิบายว่านี่คืองาน \'ผมกำลังจะปิดดีลปลาวาฬ\'"', zh: '🗣️ "说服老板"："解释这是工作。\'我在搞定那条鲸鱼\'。"' }, consequence: { en: '✅ Honest Win. Boss grumbles but agrees. Transparency builds trust.', th: '✅ ชนะใสๆ นายบ่นแต่ยอม ความโปร่งใสสร้างความเชื่อใจ', zh: '✅ 诚实获胜。老板发牢骚但同意。透明建立信任。' }, stats: { competence: 45, ethics: 45, leadership: 45, innovation: 20 } },
            { id: 'D', text: { en: '🤝 "Invite Boss": "Ask boss to come too (as caddy/cart driver?)."', th: '🤝 "ชวนหัวหน้า": "ชวนหัวหน้าไปด้วย (ไปขับรถกอล์ฟ?)"', zh: '🤝 "邀请老板"："请老板也去（当球童/司机？）。"' }, consequence: { en: '💀 Awkward. Boss hates it, ruins the vibe. Client unimpressed.', th: '💀 อึดอัด นายเกลียด บรรยากาศพัง ลูกค้าเซ็ง', zh: '💀 尴尬。老板讨厌，破坏气氛。客户无感。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'sb_035',
        text: {
            en: '💍 The Marital Conflict: You manage money for a couple. They are fighting. The husband calls and says "Sell her Apple shares, buy me Tesla". The account is joint.',
            th: '💍 ศึกผัวเมีย: คุณดูแลเงินให้คู่สามีภรรยา ทะเลาะกัน สามีโทรมาสั่ง "ขายหุ้น Apple ของเมีย ซื้อ Tesla ให้ผม" บัญชีเป็นชื่อร่วม (Joint)',
            zh: '💍 婚姻冲突：你管理一对夫妇的钱。他们在吵架。丈夫打电话说"卖掉她的苹果股票，给我买特斯拉"。账户是联名的。'
        },
        options: [
            { id: 'A', text: { en: '✅ "Execute": "Joint account means any signer operates. I follow orders."', th: '✅ "จัดให้": "บัญชีร่วมใครสั่งก็ได้ ผมทำตามคำสั่ง"', zh: '✅ "执行"："联名账户意味着任何签署人均可操作。我听令。"' }, consequence: { en: '⚠️ Legal but messy. Wife screams at you later. You are caught in the middle.', th: '⚠️ ถูกกฎแต่เละเทะ เมียโทรมาด่าทีหลัง คุณอยู่ตรงกลาง', zh: '⚠️ 合法但麻烦。妻子后来冲你尖叫。你被夹在中间。' }, stats: { competence: 35, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🛑 "Require Dual Auth": "Policy update: For large trades, I need both voices."', th: '🛑 "ขอสองเสียง": "นโยบายใหม่: เทรดใหญ่ผมขอคุยทั้งคู่ครับ"', zh: '🛑 "要求双重认证"："政策更新：大额交易需要双方确认。"' }, consequence: { en: '✅ Peacemaker. You prevent impulse damage. They respect you as a mediator.', th: '✅ ผู้รักษาสันติ ป้องกันความเสียหายชั่ววูบ เขานับถือคุณเป็นคนกลาง', zh: '✅ 和事佬。你防止了冲动伤害。他们以此尊重你这调解人。' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '📞 "Call the Wife": "Snitch on the husband immediately."', th: '📞 "ฟ้องเมีย": "โทรฟ้องเมียทันที"', zh: '📞 "打给妻子"："马上告丈夫的状。"' }, consequence: { en: '💀 Trust Broken. Husband fires you. Wife can\'t save the account alone.', th: '💀 หมดกัน สามีไล่คุณออก เมียคนเดียวรั้งบัญชีไว้ไม่ได้', zh: '💀 信任破裂。丈夫解雇你。妻子一个人保不住账户。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '🤷 "Do Nothing": "Ignore the call. Hope they make up."', th: '🤷 "นิ่ง": "ไม่รับสาย หวังว่าเขาจะดีกัน"', zh: '🤷 "什么都不做"："不接电话。希望他们和好。"' }, consequence: { en: '⚠️ Negligence. Stock moves against them. They both blame you for inaction.', th: '⚠️ ละเลย หุ้นวิ่งสวนทาง โดนด่าทั้งคู่ว่าไม่ทำงาน', zh: '⚠️ 疏忽。股票走势不利。他们都怪你不作为。' }, stats: { competence: 15, ethics: 20, leadership: 10, innovation: 10 } }
        ]
    },
    // SECTION 8: REGULATORY NIGHTMARES (Questions 36-40)
    {
        id: 'sb_036',
        text: {
            en: '🚔 The "Parking" Scheme: A colleague asks you to "park" some profit in your client\'s account overnight to hide it from his risk limits, promising to move it back tomorrow with a "fee".',
            th: '🚔 แผน "จอด" เงิน: เพื่อนร่วมงานขอ "ฝาก" กำไรไว้ในบัญชีลูกค้าคุณข้ามคืนเพื่อหลบลิมิตความเสี่ยงของเขา สัญญาว่าจะโอนคืนพรุ่งนี้พร้อม "ค่าธรรมเนียม"',
            zh: '🚔 "泊车"计划：同事让你把一些利润"停放"在你客户账户里过夜，以躲避他的风险限额，承诺明天连带"费用"一起转回。'
        },
        options: [
            { id: 'A', text: { en: '🚫 "Hell No": "That\'s federal fraud. Get away from me."', th: '🚫 "ฝันไปเถอะ": "นั่นมันโกงระดับชาติ ไปให้พ้น"', zh: '🚫 "绝不"："那是联邦欺诈。离我远点。"' }, consequence: { en: '✅ Bullet Dodged. He gets caught next week. You are clean.', th: '✅ รอดตัว เขาโดนจับอาทิตย์หน้า คุณขาวสะอาด', zh: '✅ 躲过一劫。他下周被抓。你是清白的。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🤝 "Do a Favor": "Okay, just this once. We are a team."', th: '🤝 "ช่วยเพื่อน": "โอเค ครั้งเดียวพอนะ เราทีมเดียวกัน"', zh: '🤝 "帮个忙"："行，就这一次。我们是一个团队。"' }, consequence: { en: '💀 Conspiracy Charge. FBI raids the firm. You go down with him.', th: '💀 ข้อหาสมรู้ร่วมคิด FBI บุกบริษัท คุณซวยไปด้วย', zh: '💀 共谋指控。FBI突袭公司。你跟他一起完蛋。' }, stats: { competence: 20, ethics: -50, leadership: -20, innovation: 10 } },
            { id: 'C', text: { en: '📢 "Report Him": "Go straight to Compliance. He is a cancer."', th: '📢 "แจ้งจับ": "ไปหาฝ่ายตรวจสอบเลย หมอนี่มันเนื้อร้าย"', zh: '📢 "举报他"："直接去合规部。他是毒瘤。"' }, consequence: { en: '✅ Ethical but Lonely. Management loves you, but coworkers label you a "rat".', th: '✅ ดีแต่เหงา ผู้บริหารชอบ แต่เพื่อนร่วมงานเรียก "หนูสกปรก"', zh: '✅ 道德但孤独。管理层喜欢你，但同事叫你"老鼠"。' }, stats: { competence: 45, ethics: 55, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '💰 "Demand 50%": "If I take the risk, I want half the profit."', th: '💰 "ขอครึ่ง": "ถ้าเสี่ยง ผมขอแบ่งคนละครึ่ง"', zh: '💰 "要求50%"："如果要我冒险，我要一半利润。"' }, consequence: { en: '💀 Greedy Criminal. You get caught AND have no friends.', th: '💀 โจรโลภมาก โดนจับแถมไม่มีใครคบ', zh: '💀 贪婪的罪犯。你被抓而且没朋友。' }, stats: { competence: 15, ethics: -50, leadership: -30, innovation: 20 } }
        ]
    },
    {
        id: 'sb_037',
        text: {
            en: '📧 The Wrong Email: You accidentally email a confidential client list (net worths included) to a journalist instead of your assistant. You invoke "Recall Message" but aren\'t sure it worked.',
            th: '📧 อีเมลผิดชีวิตเปลี่ยน: เผลอส่งรายชื่อลูกค้าลับ (มีมูลค่าพอร์ต) ให้นักข่าวแทนที่จะเป็นผู้ช่วย กด "Recall" แล้วแต่ไม่ชัวร์ว่าทันไหม',
            zh: '📧 错误邮件：你不小心把包含净值的机密客户名单发给了记者而不是助理。使用了"撤回"，但不知道有没用。'
        },
        options: [
            { id: 'A', text: { en: '📞 "Call Journalist": "Beg them to delete it. Offer an exclusive story instead."', th: '📞 "โทรหานักข่าว": "กราบขอให้ลบ เสนอข่าว Exclusive อื่นแลกเปลี่ยน"', zh: '📞 "打给记者"："求他们删除。以此提供独家新闻作为交换。"' }, consequence: { en: '✅ Trade-off. Journalist agrees. Costly favor, but crisis averted.', th: '✅ ยื่นหมูยื่นแมว นักข่าวยอม เป็นหนี้บุญคุณราคาแพง แต่รอดวิกฤต', zh: '✅ 交换。记者同意。代价昂贵，但避免了危机。' }, stats: { competence: 35, ethics: 30, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🤐 "Wait and Pray": "If I say nothing, maybe they won\'t open it."', th: '🤐 "สวดมนต์": "ถ้าเงียบไว้ เขาอาจจะไม่เปิดอ่าน"', zh: '🤐 "祈祷"："如果我不说，也许他们不会点开。"' }, consequence: { en: '💀 Front Page News. "Broker Leaks Billionaire List". Career over.', th: '💀 ข่าวหน้าหนึ่ง "โบรกเกอร์ทำรายชื่อเศรษฐีหลุด" จบอาชีพ', zh: '💀 头版新闻。"经纪人泄露亿万富翁名单"。职业终结。' }, stats: { competence: 10, ethics: 20, leadership: 10, innovation: 10 } },
            { id: 'C', text: { en: '📢 "Notify Legal": "Self-report the breach immediately. Protocol."', th: '📢 "แจ้งกฎหมาย": "รายงานความผิดตัวเองทันที ตามระเบียบ"', zh: '📢 "通知法务"："立即自我报告违规。按规矩办。"' }, consequence: { en: '✅ Professional integrity. You get a severe reprimand, but the firm protects you.', th: '✅ มืออาชีพ โดนตำหนิรุนแรง แต่บริษัทช่วยปกป้อง', zh: '✅ 专业诚信。你受到严厉谴责，但公司保护了你。' }, stats: { competence: 45, ethics: 50, leadership: 35, innovation: 10 } },
            { id: 'D', text: { en: '💻 "Hack Back": "Hire a guy to wipe their inbox. Cyber-offensive."', th: '💻 "แฮกกลับ": "จ้างคนไปลบเมลในกล่องเขาเลย บุกไซเบอร์"', zh: '💻 "黑回去"："雇人去清空他们的收件箱。网络攻击。"' }, consequence: { en: '💀 Felony. You turn a mistake into a prison sentence.', th: '💀 คดีอาญา เปลี่ยนความผิดพลาดเป็นคุกตาราง', zh: '💀 重罪。你把错误变成了牢狱之灾。' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: 30 } }
        ]
    },
    {
        id: 'sb_038',
        text: {
            en: '📉 The Unsuitable Sale: An 80-year-old client wants to buy a "3x Leveraged Inverse Tech ETF". He clearly doesn\'t understand it resets daily. He just hates tech.',
            th: '📉 การขายที่ไม่เหมาะสม: ลูกค้า 80 ปีอยากซื้อ "3x Leveraged Inverse Tech ETF" แกไม่เข้าใจหรอกว่ามันรีเซ็ตรายวัน แค่เกลียดหุ้นเทคเฉยๆ',
            zh: '📉 不当销售：80岁客户想买"3倍做空科技ETF"。他显然不懂它是每日重置的。他只是讨厌科技股。'
        },
        options: [
            { id: 'A', text: { en: '🛑 "Refuse Trade": "KYC Rule: Not suitable for your profile. I won\'t do it."', th: '🛑 "ปฏิเสธ": "ผิดกฎ KYC ครับ ไม่เหมาะกับคุณ ผมทำให้ไม่ได้"', zh: '🛑 "拒绝交易"："KYC规则：不适合您的风险廓。我不做。"' }, consequence: { en: '✅ Regulatory Gold. You protected the client from himself. Family thanks you later.', th: '✅ ทองคำแท้ ปกป้องลูกค้าจากตัวเอง ครอบครัวขอบคุณทีหลัง', zh: '✅ 监管金牌。你保护了客户免受自身伤害。家属后来感谢你。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🤷 "Execute with Note": "Mark ticket \'Unsolicited\'. Not my liability."', th: '🤷 "ทำให้แต่มีหมายเหตุ": "ติ๊กช่อง \'ลูกค้าสั่งเอง\' (Unsolicited) ไม่ใช่ความผิดผม"', zh: '🤷 "备注执行"："标记\'主动要求\'。不是我的责任。"' }, consequence: { en: '⚠️ Technical Defense. Legal helps you, but ethically it feels wrong when he loses money.', th: '⚠️ รอดทางเทคนิค กฎหมายช่วยได้ แต่รู้สึกผิดตอนแกขาดทุน', zh: '⚠️ 技术防御。法律上没事，但在他亏钱时良心不安。' }, stats: { competence: 35, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🤑 "Encourage Him": "Great idea! Tech is a bubble. Let\'s go big!"', th: '🤑 "ยุส่ง": "เยี่ยมเลยปู่! เทคมันฟองสบู่ จัดหนักไปเลย!"', zh: '🤑 "鼓励他"："好主意！科技是泡沫。搞大的！"' }, consequence: { en: '💀 Predator. FINRA arbitration forces you to reimburse his losses. Fired.', th: '💀 นักล่า โดนอนุญาโตตุลาการบังคับชดใช้ค่าเสียหาย โดนไล่ออก', zh: '💀 掠夺者。FINRA仲裁强制你赔偿损失。解雇。' }, stats: { competence: 10, ethics: -30, leadership: -10, innovation: 10 } },
            { id: 'D', text: { en: '🔄 "Alternative": "Sell him a simple short index fund instead. Much safer."', th: '🔄 "ทางเลือก": "ขายกองทุน Short ธรรมดาให้แทน ปลอดภัยกว่า"', zh: '🔄 "替代方案"："卖给他一个简单的做空指数基金。安全得多。"' }, consequence: { en: '✅ Consultant. You satisfied his urge without the toxic product.', th: '✅ ที่ปรึกษา สนองความต้องการแกได้โดยไม่ต้องใช้ของอันตราย', zh: '✅ 顾问。你满足了他的冲动，又避开了有毒产品。' }, stats: { competence: 50, ethics: 45, leadership: 45, innovation: 30 } }
        ]
    },
    {
        id: 'sb_039',
        text: {
            en: '🕵️ KYC Failure: A new client wires $10M from a shell company in Panama. Your due diligence check is incomplete, but your boss says "Don\'t ask too many questions, we need the assets."',
            th: '🕵️ KYC ล้มเหลว: ลูกค้าใหม่โอนเงิน $10M จากบริษัทเชลล์ในปานามา การตรวจสอบยังไม่เสร็จ แต่หัวหน้าบอก "อย่าถามมาก เราต้องการยอด"',
            zh: '🕵️ KYC失败：新客户从巴拿马壳公司汇入1000万。尽职调查未完成，但老板说"别问太多，我们需要资产。" '
        },
        options: [
            { id: 'A', text: { en: '🛑 "Freeze Funds": "I won\'t trade until KYC is 100% complete."', th: '🛑 "อายัดเงิน": "ไม่เทรดจนกว่า KYC จะครบ 100%"', zh: '🛑 "冻结资金"："KYC沒100%完成前我不交易。"' }, consequence: { en: '✅ Safe. Turns out it was cartel money. You saved the firm from massive fines.', th: '✅ ปลอดภัย ปรากฏว่าเป็นเงินค้ายา คุณเซฟบริษัทจากค่าปรับมหาศาล', zh: '✅ 安全。结果是贩毒集团的钱。你让公司免受巨额罚款。' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🙈 "Blind Eye": "Processing it. Boss\'s orders."', th: '🙈 "หลับตาข้างนึง": "ดำเนินการครับ คำสั่งนาย"', zh: '🙈 "睁只眼闭只眼"："处理。老板的命令。"' }, consequence: { en: '💀 Money Laundering Sting. Boss denies ordering you. You take the fall.', th: '💀 ล่อซื้อฟอกเงิน นายปฏิเสธว่าไม่ได้สั่ง คุณรับจบคนเดียว', zh: '💀 洗钱诱捕。老板否认指使。你背黑锅。' }, stats: { competence: 20, ethics: -30, leadership: -20, innovation: 10 } },
            { id: 'C', text: { en: '📄 "Paper Trail": "Send email confirming boss\'s instruction before doing it."', th: '📄 "หลักฐาน": "ส่งเมลยืนยันคำสั่งนายก่อนทำ"', zh: '📄 "书面记录"："执行前发邮件确老板的指令。"' }, consequence: { en: '⚠️ Partial Defense. You still get fired, but might avoid jail. Boss gets fired too.', th: '⚠️ รอดครึ่งตัว โดนไล่ออกแต่อาจไม่ติดคุก นายก็โดนด้วย', zh: '⚠️ 部分防御。你还是被开除，但可能免于坐牢。老板也被开除。' }, stats: { competence: 35, ethics: 20, leadership: 20, innovation: 20 } },
            { id: 'D', text: { en: '🔍 "Enhanced Due Diligence": "Dig deeper yourself. Google the directors."', th: '🔍 "ตรวจเข้มเอง": "ขุดข้อมูลเองเลย กูเกิลชื่อกรรมการดู"', zh: '🔍 "增强尽调"："自己深挖。谷歌董事的名字。"' }, consequence: { en: '✅ Detective. You find the link to crime and reject it with proof.', th: '✅ นักสืบ เจอความเชื่อมโยงอาชญากรรม ปฏิเสธพร้อมหลักฐาน', zh: '✅ 侦探。你发现了犯罪链接并凭据拒绝。' }, stats: { competence: 50, ethics: 45, leadership: 45, innovation: 30 } }
        ]
    },
    {
        id: 'sb_040',
        text: {
            en: '📢 The "Hot Tip" Text: A CEO you know texts you: "Big news coming. Buy now." He accidentally sent it to you instead of his wife. You see the text on your lock screen.',
            th: '📢 ข้อความหลุด: CEO ที่รู้จักส่งข้อความมา: "ข่าวใหญ่กำลังมา ซื้อเลย" ดันส่งผิดมาหาคุณแทนที่จะส่งหาเมีย ข้อความเด้งหน้าจอ',
            zh: '📢 "内幕"短信：你认识的CEO给你发短信："大新闻要来了。快买。"他不小心发错给你了，本想发给妻子的。你在锁屏上看到了。'
        },
        options: [
            { id: 'A', text: { en: '🗑️ "Delete & Ignore": "I saw nothing. Too radioactive."', th: '🗑️ "ลบและเมิน": "ไม่เห็นอะไรทั้งนั้น กัมมันตภาพรังสีชัดๆ"', zh: '🗑️ "删除并无视"："我什么都没看见。太烫手了。"' }, consequence: { en: '✅ Safest. You miss profit, but sleeping at night is priceless.', th: '✅ ปลอดภัยสุด อดกำไร แต่นอนหลับสบายประเมินค่าไม่ได้', zh: '✅ 最安全。错过利润，但安稳觉无价。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🤑 "Trading Frenzy": "Buy in wife\'s maiden name account."', th: '🤑 "มหกรรมเทรด": "ใช้ชื่อบัญชีนามสกุลเก่าเมียซื้อ"', zh: '🤑 "疯狂交易"："用妻子娘家姓的账户买。"' }, consequence: { en: '💀 Traceable. SEC connects the dots. Insider trading conviction.', th: '💀 ตามรอยได้ SEC เชื่อมโยงข้อมูลได้ โดนจับ Insider', zh: '💀 可追踪。SEC连点成线。内幕交易定罪。' }, stats: { competence: 20, ethics: -50, leadership: -30, innovation: 20 } },
            { id: 'C', text: { en: '⚖️ "Report to Compliance": "Show them the text. Ask for guidance."', th: '⚖️ "รายงาน": "โชว์ข้อความให้ฝ่ายตรวจสอบดู ขอคำแนะนำ"', zh: '⚖️ "报告合规部"："给他们看短信。寻求指导。"' }, consequence: { en: '✅ Golden Boy. The firm restricts the stock. You are praised for honesty.', th: '✅ ลูกรัก บริษัทบล็อกหุ้นตัวนั้น คุณได้รับคำชมเรื่องความซื่อสัตย์', zh: '✅ 金童。公司限制该股票。你因诚实受表扬。' }, stats: { competence: 45, ethics: 55, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '🤫 "Reply": "wrong number lol" (Then buy carefully)', th: '🤫 "ตอบกลับ": "ผิดเบอร์ครับ 555" (แล้วแอบซื้อเนียนๆ)', zh: '🤫 "回复"："发错了lol"（然后小心买入）' }, consequence: { en: '⚠️ High Risk. He knows you know. If investigated, he might sell you out.', th: '⚠️ เสี่ยงสูง เขารู้ว่าคุณรู้ ถ้าโดนสอบ เขาอาจจะซัดทอดคุณ', zh: '⚠️ 高风险。他知道你知道。如果被查，他可能把你供出来。' }, stats: { competence: 25, ethics: -20, leadership: 10, innovation: 20 } }
        ]
    },

    // SECTION 9: THE PRIVATE EQUITY GAME (Questions 41-45)
    {
        id: 'sb_041',
        text: {
            en: '🤝 Pre-IPO Allocations: A hot tech startup "Unicorn" offers you pre-IPO shares. You can only get them if you commit $10M of client money to their boring bond fund too (Quid Pro Quo).',
            th: '🤝 หุ้น Pre-IPO: สตาร์ทอัพ "Unicorn" เสนอหุ้น Pre-IPO ให้ แต่คุณต้องเอาเงินลูกค้า $10M ไปลงกองทุนพันธบัตรน่าเบื่อของเขาด้วย (หมูไปไก่มา)',
            zh: '🤝 Pre-IPO配额：热门科技创业公司"独角兽"给你Pre-IPO股份。条件是你必须同时也投1000万客户资金到他们无聊的债券基金（利益交换）。'
        },
        options: [
            { id: 'A', text: { en: '✅ "Take the Deal": "Unicorn shares are gold. The bond fund is safe enough."', th: '✅ "เอาดีล": "หุ้นยูนิคอร์นคือทองคำ กองพันธบัตรก็ปลอดภัยพอ"', zh: '✅ "成交"："独角兽股份是黄金。债券基金足够安全。"' }, consequence: { en: '⚠️ Conflict of Interest. Clients wonder why they own bad bonds, but love the IPO pop.', th: '⚠️ ผลประโยชน์ทับซ้อน ลูกค้าสงสัยว่าทำไมมีพันธบัตรห่วยๆ แต่ชอบตอน IPO เด้ง', zh: '⚠️ 利益冲突。客户奇怪为何持有烂债券，但喜欢IPO暴涨。' }, stats: { competence: 40, ethics: 30, leadership: 35, innovation: 30 } },
            { id: 'B', text: { en: '🛑 "Refuse Tie-in": "Illegal tying agreement. Give me the shares or nothing."', th: '🛑 "ไม่ผูกมัด": "ข้อตกลงผูกมัดผิดกฎหมาย เอาหุ้นมาอย่างเดียวหรือไม่เอา"', zh: '🛑 "拒绝捆绑"："非法捆绑协议。只给股份，否则拉倒。"' }, consequence: { en: '✅ Hardball. They respect strength and give you 50% allocation without bonds.', th: '✅ สายแข็ง เขานับถือความเก๋า ให้โควต้า 50% แบบไม่ต้องพ่วง', zh: '✅ 强硬。他们尊重实力，给你50%配额且无需买债券。' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '🤫 "Personal Allocation": "Can I buy the shares for myself instead?"', th: '🤫 "ขอส่วนตัว": "ผมขอซื้อหุ้นเข้าพอร์ตตัวเองแทนได้ไหม"', zh: '🤫 "个人配额"："我能自己买那些股份吗？"' }, consequence: { en: '💀 Breach of Fiduciary. You stole opportunity from clients. Fired immediately.', th: '💀 ละเมิดหน้าที ขโมยโอกาสลูกค้า โดนไล่ออกทันที', zh: '💀 违反受托责任。从客户那偷机会。立即解雇。' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: 10 } },
            { id: 'D', text: { en: '📢 "Disclose to Clients": "Tell clients the trade-off. Let them vote."', th: '📢 "บอกลูกค้า": "บอกเงื่อนไขแลกเปลี่ยน ให้ลูกค้าโหวต"', zh: '📢 "向客户披露"："告诉客户这个权衡。让他们投票。"' }, consequence: { en: '✅ Transparency. Clients agree to take the bad bonds to get the hot stock.', th: '✅ โปร่งใส ลูกค้ายอมรับพันธบัตรห่วยเพื่อแลกหุ้นเด็ด', zh: '✅ 透明。客户同意买烂债券以换取热门股。' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 30 } }
        ]
    },
    {
        id: 'sb_042',
        text: {
            en: '🏗️ The Real Estate REIT: A developer wants to list a REIT (Real Estate Investment Trust). You visit the properties. They look half-empty and poorly built, but the glossy brochure says "98% Occupancy".',
            th: '🏗️ กองทุนอสังหา (REIT): Developer จะเอากอง REIT เข้าตลาด คุณไปดูสถานที่จริง ตึกร้าง สร้างห่วย แต่โบรชัวร์หรูบอก "ผู้เช่าเต็ม 98%"',
            zh: '🏗️ 房地产REIT：开发商想让REIT上市。你实地考察。看起来半空且烂尾，但精美画册上写着"98%入住率"。'
        },
        options: [
            { id: 'A', text: { en: '📢 "Whistleblow": "Expose the fraud publicly before IPO."', th: '📢 "แฉ": "แฉโกงออกสื่อก่อน IPO"', zh: '📢 "吹哨"："上市前公开揭露欺诈。"' }, consequence: { en: '✅ Market Hero. IPO cancelled. You save millions for potential victims.', th: '✅ วีรบุรุษตลาด IPO ล่ม ช่วยเหยื่อไว้ได้เพียบ', zh: '✅ 市场英雄。IPO取消。挽救了潜在受害者的数百万。' }, stats: { competence: 50, ethics: 55, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🤐 "Silence": "Not my deal. Just don\'t buy it for my clients."', th: '🤐 "เงียบ": "ไม่ใช่ดีลผม แค่ไม่ซื้อให้ลูกค้าก็พอ"', zh: '🤐 "沉默"："不关我事。别给我客户买就行。"' }, consequence: { en: '⚖️ Passive. The fraud happens. You watched it happen.', th: '⚖️ เพิกเฉย การโกงเกิดขึ้น คุณยืนดูเฉยๆ', zh: '⚖️ 被动。欺诈发生了。你眼睁睁看着。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🤑 "Short It": "Keep quiet, wait for listing, then short-sell aggressively."', th: '🤑 "ดัก Short": "เงียบไว้ รอเข้าตลาด แล้ว Short หนักๆ"', zh: '🤑 "做空"："保持安静，等上市，然后大举做空。"' }, consequence: { en: '✅ Ruthless Profit. You make a killing when the truth comes out. Ethics questionable though.', th: '✅ กำไรโหดเหี้ยม รวยเละตอนความจริงเปิดเผย แต่จริยธรรมน่าสงสัย', zh: '✅ 冷酷获利。真相大白时大赚一笔。虽然道德存疑。' }, stats: { competence: 55, ethics: 20, leadership: 30, innovation: 40 } },
            { id: 'D', text: { en: '🤝 "Blackmail": "Tell developer \'I know\'. Demand better terms."', th: '🤝 "แบล็กเมล์": "บอกเจ้าของว่า \'รู้นะ\' ขอดอกเบี้ยเพิ่ม"', zh: '🤝 "勒索"："告诉开发商\'我知道\'。要求更好条款。"' }, consequence: { en: '💀 Criminal. Extortion charges. Developer has mafia connections.', th: '💀 โจร ข้อหากรรโชกทรัพย์ Developer มีเส้นสายมาเฟีย', zh: '💀 罪犯。勒索指控。开发商有黑手党背景。' }, stats: { competence: 20, ethics: -50, leadership: -30, innovation: 20 } }
        ]
    },
    {
        id: 'sb_043',
        text: {
            en: '🚢 The Distressed Asset: An airline is bankrupt. Their bonds trade at 10 cents. If the government bails them out, bonds go to 100. If not, 0. A pure gamble.',
            th: '🚢 สินทรัพย์มีปัญหา: สายการบินล้มละลาย พันธบัตรเหลือ 10 เซ็นต์ ถ้ารัฐบาลอุ้มจะเด้งไป 100 ถ้าไม่คือ 0 พนันล้วนๆ',
            zh: '🚢 不良资产：一家航空公司破产。债券交易价10美分。如果政府救助，涨到100。如果不救，归0。纯赌博。'
        },
        options: [
            { id: 'A', text: { en: '🎰 "Speculate Small": "Put 1% of aggressive clients\' cash. Lottery ticket."', th: '🎰 "เสี่ยงดวงนิดหน่อย": "ลง 1% ของพอร์ตลูกค้าซิ่ง ซื้อหวย"', zh: '🎰 "小赌怡情"："投入激进客户现金的1%。彩票票。"' }, consequence: { en: '✅ Calculated Risk. Government bails out! 10x returns. Clients thrilled.', th: '✅ เสี่ยงแบบคำนวณ รัฐอุ้ม! กำไร 10 เด้ง ลูกค้ากรี๊ด', zh: '✅ 计算风险。政府救助！10倍回报。客户激动。' }, stats: { competence: 45, ethics: 40, leadership: 35, innovation: 30 } },
            { id: 'B', text: { en: '🛑 "Avoid": "We don\'t buy trash. Too binary."', th: '🛑 "หลีกเลี่ยง": "เราไม่ซื้อขยะ เสี่ยงไป"', zh: '🛑 "避开"："我们不买垃圾。太极端了。"' }, consequence: { en: '⚖️ Missed Out. Bonds rally. Clients ask "why didn\'t we buy?".', th: '⚖️ ตกรถ พันธบัตรพุ่ง ลูกค้าถาม "ทำไมไม่ซื้อ"', zh: '⚖️ 错过。债券大涨。客户问"为何没买"。' }, stats: { competence: 30, ethics: 35, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🕵️ "Lobbyist Intel": "Hire a DC lobbyist to find out bail out prob."', th: '🕵️ "สืบข่าววงใน": "จ้างล็อบบี้ยิสต์วอชิงตันสืบโอกาสรอด"', zh: '🕵️ "游说情报"："雇特区游说客打听救助概率。"' }, consequence: { en: '✅ Information Edge. You know the bailout is coming before the market.', th: '✅ ความได้เปรียบ รู้ข่าวก่อนตลาดวาย', zh: '✅ 信息优势。你在市场之前知道救助要来了。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 45 } },
            { id: 'D', text: { en: '🏦 "Hostile Takeover": "Buy enough bonds to control the bankruptcy vote."', th: '🏦 "ยึดกิจการ": "ซื้อพันธบัตรให้เยอะพอเพื่อคุมโหวตตอนล้มละลาย"', zh: '🏦 "恶意收购"："买入足够债券以控制破产投票。"' }, consequence: { en: '🚀 Vulture Capitalist. You control the airline now. Massive power play.', th: '🚀 อีแร้งลงทัณฑ์ คุณคุมสายการบินแล้ว เกมอำนาจชัดๆ', zh: '🚀 秃鹫资本家。你现在控制了航空公司。巨大的权力游戏。' }, stats: { competence: 55, ethics: 20, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'sb_044',
        text: {
            en: '🌳 ESG Greenwashing: A "Sustainable Future" fund pays huge commissions. You check the holdings: it\'s 40% Oil & Gas companies that "promise to plant trees". Clients want ESG.',
            th: '🌳 ฟอกเขียว (Greenwashing): กองทุน "อนาคตยั่งยืน" ให้คอมฯ งาม คุณเช็คไส้ใน: 40% เป็นบริษัทน้ำมันที่ "สัญญาว่าจะปลูกต้นไม้" ลูกค้าอยากได้ ESG',
            zh: '🌳 ESG漂绿："可持续未来"基金佣金丰厚。你查持仓：40%是"承诺种树"的油气公司。客户想要ESG。'
        },
        options: [
            { id: 'A', text: { en: '🤥 "Sell the Label": "It says ESG. Good enough. Sell it."', th: '🤥 "ขายป้ายยา": "ชื่อบอก ESG ก็พอแล้ว ขายเลย"', zh: '🤥 "卖标签"："上面写着ESG。够了。卖。"' }, consequence: { en: '⚠️ Client Betrayal. Environmentalist clients find out and fire you publicly.', th: '⚠️ หักหลังลูกค้า ลูกค้าสายเขียวรู้ความจริงแล้วไล่คุณออกโชว์', zh: '⚠️ 客户背叛。环保客户发现并公开解雇你。' }, stats: { competence: 25, ethics: -20, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🚫 "Reject Fund": "This is fake ESG. I won\'t sell it."', th: '🚫 "ปฏิเสธกอง": "ESG ปลอม ผมไม่ขาย"', zh: '🚫 "拒绝基金"："这是假ESG。我不卖。"' }, consequence: { en: '✅ Ethical Brand. You build a custom "True Green" portfolio instead.', th: '✅ แบรนด์คุณธรรม คุณสร้างพอร์ต "เขียวแท้" ให้ลูกค้าเองเลย', zh: '✅ 道德品牌。你建立一个定制的"真绿色"组合取而代之。' }, stats: { competence: 45, ethics: 55, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '📝 "Explain Nuance": "Tell clients: \'It owns oil, but they are transitioning. Upside?\'"', th: '📝 "อธิบายแง่มุม": "บอกลูกค้า: \'มีน้ำมันนะ แต่เขากำลังเปลี่ยนผ่าน เอาปะ?\'"', zh: '📝 "解释细节"："告诉客户：\'它有石油，但正在转型。要吗？\'"' }, consequence: { en: '✅ Honest Sales. Some buy, some don\'t. No deception.', th: '✅ ขายตรงไปตรงมา ซื้อบ้างไม่ซื้อบ้าง ไม่หลอกลวง', zh: '✅ 诚实销售。有的买有的不买。没有欺骗。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🔧 "Activist Investor": "Buy it, then vote to force them to be greener."', th: '🔧 "นักลงทุนนักรบ": "ซื้อ แล้วโหวตบังคับให้มันเขียวขึ้น"', zh: '🔧 "激进投资者"："买了，然后投票强迫他们变得更环保。"' }, consequence: { en: '🚀 Impact Investing. Hard path, but clients love the mission.', th: '🚀 ลงทุนเปลี่ยนโลก ทางยากแต่ลูกค้าชอบภารกิจ', zh: '🚀 影响力投资。路很难，但客户喜欢这个使命。' }, stats: { competence: 45, ethics: 50, leadership: 45, innovation: 45 } }
        ]
    },
    {
        id: 'sb_045',
        text: {
            en: '🤖 The "AI" Trading Bot Scam: A startup pitches an AI bot that "never loses". They show a backtest with 2000% returns. They want you to whitelist it for your clients.',
            th: '🤖 บอทเทรด AI ลวงโลก: สตาร์ทอัพเสนอบอท AI "ไม่มีวันแพ้" โชว์ Backtest กำไร 2000% อยากให้คุณเปิดให้ลูกค้าใช้',
            zh: '🤖 "AI"交易机器人骗局：创业公司推销"永不亏损"的AI机器人。展示2000%回报的回测。想让你给客户白名单。'
        },
        options: [
            { id: 'A', text: { en: '🔬 "Audit Code": "Code review. Overfitting? Look-ahead bias?"', th: '🔬 "ตรวจโค้ด": "รีวิวโค้ด Overfit ไหม? แอบดูอนาคตไหม?"', zh: '🔬 "审计代码"："代码审查。过拟合？未来函数？"' }, consequence: { en: '✅ Myth Busted. You find it was memorizing past data. Scam avoided.', th: '✅ จับไต๋ได้ มันจำข้อสอบเก่านี่หว่า รอดจากของเก๊', zh: '✅ 谣言粉碎。你发现它在背诵过去数据。避开诈骗。' }, stats: { competence: 55, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '💰 "Sell the Dream": "AI is the future! 2000%! Let\'s go!"', th: '💰 "ขายฝัน": "AI คืออนาคต! 2000%! ไปเลย!"', zh: '💰 "兜售梦想"："AI是未来！2000%！冲！"' }, consequence: { en: '💀 Blow up. Real market destroys the bot. Clients lose 80% day one.', th: '💀 ระเบิด ตลาดจริงเผาบอทวอดวาย ลูกค้าเจ๊ง 80% วันแรก', zh: '💀 爆仓。真实市场摧毁机器人。客户第一天亏80%。' }, stats: { competence: 15, ethics: 20, leadership: -10, innovation: 20 } },
            { id: 'C', text: { en: '🧪 "Paper Trade": "Test on demo account for 3 months first."', th: '🧪 "ลองเทรดลม": "ลองเดโม 3 เดือนก่อน"', zh: '🧪 "模拟交易"："先模拟账户测3个月。"' }, consequence: { en: '✅ Prudence. Bot fails in month 2. You have zero cash loss.', th: '✅ รอบคอบ บอทเจ๊งเดือน 2 เงินอยู่ครบ', zh: '✅ 审慎。机器人第2个月失败。零现金损失。' }, stats: { competence: 40, ethics: 35, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🤝 "White Label": "Rebrand it as your own \'Proprietary Algo\'."', th: '🤝 "แปะยี่ห้อ": "เอามารีแบรนด์เป็น \'อัลกอสูตรลับ\' ของเราเอง"', zh: '🤝 "贴牌"："重新包装成你自己的\'专有算法\'。"' }, consequence: { en: '💀 Fraud x2. Not only does it fail, you are personally liable for the tech.', th: '💀 โกงคูณสอง นอกจากเจ๊งแล้ว คุณรับผิดชอบเทคโนโลยีเต็มๆ', zh: '💀 欺诈x2。不仅失败，你还要对技术负个人责任。' }, stats: { competence: 20, ethics: -50, leadership: -20, innovation: 30 } }
        ]
    },
    // SECTION 10: THE END GAME & LEGACY (Questions 46-50)
    {
        id: 'sb_046',
        text: {
            en: '🦢 The Black Swan Event: A quantum computing breakthrough cracks all current encryption overnight. Markets are frozen. Crypto is zero. Banks are panicked. Clients are calling you for answers you don\'t have.',
            th: '🦢 วิกฤตหงส์ดำ: ควอนตัมคอมพิวเตอร์เจาะรหัสการเงินโลกแตกในคืนเดียว ตลาดหยุดชะงัก คริปโตเหลือศูนย์ แบงค์แตกตื่น ลูกค้าโทรหาคุณเพื่อขอคำตอบที่คุณก็ไม่มี',
            zh: '🦢 黑天鹅事件：量子计算突破一夜之间破解了所有现有加密。市场冻结。加密货币归零。银行恐慌。客户打电话问你，而你也没有答案。'
        },
        options: [
            { id: 'A', text: { en: '🧘 "Stoic Leadership": "Admit ignorance. Focus on physical assets (Gold/Land). Keep them calm."', th: '🧘 "ผู้นำนิ่งสงบ": "ยอมรับว่าไม่รู้ โฟกัสที่สินทรัพย์จับต้องได้ (ทอง/ที่ดิน) ปลอบลูกค้าให้สงบ"', zh: '🧘 "斯多葛式领导"："承认无知。专注于实物资产（黄金/土地）。让他们保持冷静。"' }, consequence: { en: '✅ True Leader. Technology recovers eventually. Clients remember you were their rock.', th: '✅ ผู้นำที่แท้จริง เทคโนโลยีฟื้นตัวในที่สุด ลูกค้าจำได้ว่าคุณคือหลักยึดของเขา', zh: '✅ 真正的领袖。技术最终恢复。客户记得你是他们的磐石。' }, stats: { competence: 45, ethics: 50, leadership: 60, innovation: 20 } },
            { id: 'B', text: { en: '😱 "Panic Sell": "Sell everything that trades! Get paper cash!"', th: '😱 "เทขายยับ": "ขายทุกอย่างที่ขายได้! เอาเงินสดกระดาษมา!"', zh: '😱 "恐慌抛售"："卖掉所有能交易的东西！换纸币！"' }, consequence: { en: '💀 Chaos. You amplify the panic. Inflation eats the cash. Clients despise you.', th: '💀 โกลาหล คุณยิ่งปั่นประสาท เงินเฟ้อกินเงินสด ลูกค้าเกลียดคุณ', zh: '💀 混乱。你加剧了恐慌。通货膨胀吞噬现金。客户鄙视你。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'C', text: { en: '🔮 "Speculate on Quantum": "Buy the company that made the breakthrough. All in."', th: '🔮 "เดิมพันควอนตัม": "ซื้อหุ้นบริษัทที่ทำสำเร็จคนแรก All in"', zh: '🔮 "量子投机"："买那家取得突破的公司。全仓。"' }, consequence: { en: '🚀 Galactic Wealth. You own the future. But risky if government nationalizes it.', th: '🚀 รวยระดับจักรวาล คุณเป็นเจ้าของอนาคต แต่เสี่ยงโดนรัฐยึด', zh: '🚀 银河财富。你拥有未来。但如果政府将其国有化就有风险。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 60 } },
            { id: 'D', text: { en: '🏃 "Bunker Mode": "Disconnect phones. Drive to your farm. Good luck everyone."', th: '🏃 "หนีเข้าหลุมหลบภัย": "ตัดสายโทรศัพท์ ขับรถไปไร่ โชคดีทุกคน"', zh: '🏃 "地堡模式"："断开电话。开车去农场。祝大家好运。"' }, consequence: { en: '💀 Cowardice. You survive, but your career and reputation are vaporized.', th: '💀 ขี้ขลาด คุณรอด แต่อาชีพและชื่อเสียงสลายไปกับตา', zh: '💀 懦弱。你活下来了，但你的事业和名声烟消云散。' }, stats: { competence: 30, ethics: 10, leadership: -20, innovation: 10 } }
        ]
    },
    {
        id: 'sb_047',
        text: {
            en: '🎓 The Protegé: A brilliant young intern reminds you of yourself. He makes a huge unauthorized trade that earns the firm $1M. Firing him kills his career. Keeping him rewards bad behavior.',
            th: '🎓 เด็กปั้น: เด็กฝึกงานอัจฉริยะเหมือนคุณสมัยก่อนเป๊ะ เขาแอบเทรดเองกำไร $1M ไล่ออกคือดับอนาคต เก็บไว้คือให้รางวัลคนทำผิดกฎ',
            zh: '🎓 门徒：一个才华横溢的实习生让你想起了自己。他做了一笔未经授权的巨额交易，为公司赚了100万。开除他会毁了他的职业生涯。留下他是奖励不良行为。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ "Fire Him": "Rules are rules. Integrity matters more than talent."', th: '⚖️ "ไล่ออก": "กฎคือกฎ ความซื่อสัตย์สำคัญกว่าพรสวรรค์"', zh: '⚖️ "开除他"："规则就是规则。诚信比才华更重要。"' }, consequence: { en: '✅ Hard Lesson. He learns, joins a hedge fund, and respects you forever.', th: '✅ บทเรียนราคาแพง เขาจำได้แม่น ย้ายไปกองทุนเฮดจ์ฟันด์ และเคารพคุณตลอดไป', zh: '✅ 深刻教训。他学到了，加入了对冲基金，并永远尊重你。' }, stats: { competence: 40, ethics: 55, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🤝 "Keep & Bonus": "Talent is rare. Teach him to hide it better next time."', th: '🤝 "เก็บไว้แถมโบนัส": "คนเก่งหายาก สอนให้เขาซ่อนร่องรอยเนียนกว่านี้รอบหน้า"', zh: '🤝 "留下并发奖金"："人才难得。教他下次藏好点。"' }, consequence: { en: '💀 Monster Created. He becomes a rogue trader and eventually destroys the firm.', th: '💀 สร้างปีศาจ เขากลายเป็นนักเทรดเถื่อนและทำลายบริษัทในที่สุด', zh: '💀 制造怪物。他变成了流氓交易员，最终摧毁了公司。' }, stats: { competence: 30, ethics: -40, leadership: -20, innovation: 30 } },
            { id: 'C', text: { en: '🔧 "Probation & Charity": "Keep profits. Suspend him for a month. Donate gains."', th: '🔧 "ทัณฑ์บนและบริจาค": "ยึดกำไร พักงาน 1 เดือน บริจาคเงินกำไรทั้งหมด"', zh: '🔧 "缓刑做慈善"："保留利润。停职一个月。捐赠收益。"' }, consequence: { en: '✅ Wise Mentor. You curb his ego while keeping his talent. He matures.', th: '✅ ครูผู้ปราบพยศ ดัดนิสัยเสียแต่เก็บความเก่งไว้ เขาเติบโตขึ้น', zh: '✅ 明智的导师。你抑制了他的自负同时保留了他的才华。他成熟了。' }, stats: { competence: 50, ethics: 45, leadership: 55, innovation: 20 } },
            { id: 'D', text: { en: '🤑 "Take Credit": "Claim it was your trade. Give him a small cut."', th: '🤑 "เคลมผลงาน": "อ้างว่าเป็นเทรดของคุณ แบ่งเงินให้เขานิดหน่อย"', zh: '🤑 "抢功"："声称是你的交易。分他一点。"' }, consequence: { en: '💀 Betrayal. He has evidence. He blackmails you or exposes you.', th: '💀 หักหลัง เขามีหลักฐาน แบล็กเมล์คุณหรือแฉคุณ', zh: '💀 背叛。他有证据。他勒索你或揭露你。' }, stats: { competence: 20, ethics: -50, leadership: -40, innovation: 10 } }
        ]
    },
    {
        id: 'sb_048',
        text: {
            en: '📉 The "Big Short" Moment: You discover a mathematical certainty that the housing market will collapse in 3 months. If you short it, you make billions but profit from families losing homes.',
            th: '📉 จังหวะ "Big Short": คุณค้นพบสูตรคำนวณที่ยืนยันว่าตลาดบ้านจะถล่มใน 3 เดือน ถ้า Short รวยเป็นพันล้าน แต่หากินบนความทุกข์คนอื่น',
            zh: '📉 "大空头"时刻：你发现数学上确定房地产市场将在3个月内崩溃。如果你做空，你能赚数十亿，但是建立在家庭失去房屋的基础上。'
        },
        options: [
            { id: 'A', text: { en: '💰 "Short Everything": "The crash will happen anyway. I might as well profit."', th: '💰 "Short ให้ยับ": "ยังไงก็พัง ขอรวยไว้ก่อน"', zh: '💰 "做空一切"："反正崩溃总会发生。不如我来赚钱。"' }, consequence: { en: '✅ Financially Correct. You become a billionaire legend. Morally gray.', th: '✅ ถูกต้องทางการเงิน เป็นตำนานพันล้าน แต่จริยธรรมสีเทา', zh: '✅ 财务正确。你成为亿万富翁传奇。道德灰色。' }, stats: { competence: 60, ethics: 20, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '📢 "Warn the World": "Go on TV. Publish the data. Try to stop it."', th: '📢 "เตือนชาวโลก": "ออกทีวี ตีพิมพ์ข้อมูล พยายามหยุดวิกฤต"', zh: '📢 "警告世界"："上电视。公布数据。试图阻止它。"' }, consequence: { en: '✅ Cassandra. No one believes you until it\'s too late. You sleep well though.', th: '✅ ผู้หยั่งรู้ที่ถูกลืม ไม่มีใครเชื่อจนสายไป แต่นอนตาหลับ', zh: '✅ 卡桑德拉。没人相信你，直到为时已晚。但你问心无愧。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '🛡️ "Protect Clients": "Quietly move all clients to cash/gold. Don\'t profit from doom."', th: '🛡️ "ปกป้องลูกค้า": "ย้ายลูกค้าไปถือเงินสด/ทองเงียบๆ ไม่หากินกับหายนะ"', zh: '🛡️ "保护客户"："悄悄把所有客户转为现金/黄金。不从厄运中获利。"' }, consequence: { en: '✅ Fiduciary Standard. Clients lose nothing. You don\'t get super rich, but stay respected.', th: '✅ มาตรฐานวิชาชีพ ลูกค้าไม่เจ็บตัว คุณไม่รวยล้นฟ้าแต่น่าเคารพ', zh: '✅ 受托标准。客户没有损失。你没发大财，但受人尊敬。' }, stats: { competence: 45, ethics: 50, leadership: 45, innovation: 20 } },
            { id: 'D', text: { en: '🤝 "Sell the Info": "Sell your research to a big bank for a flat fee."', th: '🤝 "ขายข้อมูล": "ขายงานวิจัยให้แบงค์ใหญ่ รับเงินก้อนจบ"', zh: '🤝 "卖信息"："把你的研究卖给大银行换取固定费用。"' }, consequence: { en: '⚖️ Safe Exit. Bank uses it to hedge. You wash your hands of it.', th: '⚖️ ทางออกปลอดภัย แบงค์เอาไปเฮดจ์ คุณลอยตัว', zh: '⚖️ 安全退出。银行用它来对冲。你洗手不干。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 30 } }
        ]
    },
    {
        id: 'sb_049',
        text: {
            en: '🌅 The Retirement Plan: You are 60. A massive mega-firm offers to buy your book of business (your clients) for $20M. They are known for high fees and poor service. Your daughter also wants to take over, but she is inexperienced.',
            th: '🌅 วางมือ: อายุ 60 บริษัทยักษ์ใหญ่ขอซื้อพอร์ตลูกค้าคุณ $20M ที่นี่ชื่อเสียเรื่องค่าธรรมเนียมแพงบริการห่วย ลูกสาวคุณก็อยากรับช่วงต่อแต่ยังไม่เก่ง',
            zh: '🌅 退休计划：你60岁了。一家巨头公司出价2000万以此收购你的客户群。他们以高费用和差服务著称。你的女儿也想接手，但她缺乏经验。'
        },
        options: [
            { id: 'A', text: { en: '💰 "Sell Out": "Take the $20M. It\'s business. Clients can leave if they want."', th: '💰 "ขายทิ้ง": "เอาเงิน $20M ธุรกิจก็คือธุรกิจ ลูกค้าไม่ชอบก็ย้ายเอง"', zh: '💰 "卖掉"："拿走2000万。这是生意。客户想走可以走。"' }, consequence: { en: '💀 Legacy Tarnished. You die rich but your former clients hate you. Reputation zero.', th: '💀 ชื่อเสียงป่นปี้ ตายบนกองเงินแต่ลูกค้าสาปส่ง', zh: '💀 遗产受损。你死时很富有，但前客户恨你。名誉扫地。' }, stats: { competence: 40, ethics: -20, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '👩 "The Dynasty": "Give it to daughter. Mentor her for 5 years."', th: '👩 "สร้างราชวงศ์": "ยกให้ลูกสาว สอนงานประกบอีก 5 ปี"', zh: '👩 "王朝"："交给女儿。指导她5年。"' }, consequence: { en: '✅ Legacy Builder. She struggles but learns. The family name lives on. Clients stay loyal.', th: '✅ สร้างตำนาน เธอลำบากหน่อยแต่เก่งขึ้น ชื่อเสียงตระกูลอยู่ต่อ ลูกค้าภักดี', zh: '✅ 传奇建立者。她很挣扎但学会了。家族名声延续。客户保持忠诚。' }, stats: { competence: 45, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '🤝 "Merger": "Find a like-minded boutique firm. Merge for less money but better culture."', th: '🤝 "ควบรวม": "หาบริษัทเล็กที่นิสัยคล้ายกัน รวมกันเงินน้อยหน่อยแต่วัฒนธรรมดี"', zh: '🤝 "合并"："找一家志同道合的精品公司。钱少点但文化更好。"' }, consequence: { en: '✅ Happy Ending. Clients are taken care of. You get decent money.', th: '✅ จบสวย ลูกค้าได้รับการดูแล คุณก็ได้เงินพอสมควร', zh: '✅ 大团圆。客户得到照顾。你拿到不错的钱。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🕰️ "Never Retire": "I will die at my desk! Keep working till 90!"', th: '🕰️ "ไม่เกษียณ": "ฉันจะตายคาโต๊ะ! ทำงานยัน 90!"', zh: '🕰️ "永不退休"："我要死在办公桌上！工作到90岁！"' }, consequence: { en: '⚠️ Sad Ending. You lose your edge. Clients slowly drift away. A lonely end.', th: '⚠️ จบเศร้า คุณเริ่มเลอะเลือน ลูกค้าค่อยๆ หาย จุดจบที่โดดเดี่ยว', zh: '⚠️ 悲伤结局。你失去了敏锐度。客户慢慢流失。孤独的终点。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'sb_050',
        text: {
            en: '🪦 The Final Verdict: You are at the end of your career. A magazine asks: "What was your secret?" How do you want to be remembered?',
            th: '🪦 บทสรุปสุดท้าย: ปลายทางอาชีพ นิตยสารมาถาม: "เคล็ดลับคืออะไร?" คุณอยากให้โลกจำแบบไหน?',
            zh: '🪦 最终判决：你处于职业生涯的尽头。一本杂志问："你的秘密是什么？"你想以什么形象被铭记？'
        },
        options: [
            { id: 'A', text: { en: '🐺 "The Wolf": "I made the most money. I won every trade. Greed is good."', th: '🐺 "หมาป่า": "ทำเงินเยอะสุด ชนะทุกเทรด ความโลภคือสิ่งประเสริฐ"', zh: '🐺 "华尔街之狼"："我赚的钱最多。我赢了每一笔交易。贪婪是好的。"' }, consequence: { en: '🏆 Infamous. You are a legend to day traders, a villain to the public.', th: '🏆 โด่งดัง(ในทางลบ) เป็นตำนานของนักซิ่ง แต่เป็นตัวร้ายของสังคม', zh: '🏆 声名狼藉。你是日内交易者的传奇，公众眼中的反派。' }, stats: { competence: 50, ethics: -30, leadership: 20, innovation: 30 } },
            { id: 'B', text: { en: '🛡️ "The Steward": "I protected wealth. I slept well. My clients trust me."', th: '🛡️ "ผู้พิทักษ์": "ปกป้องความมั่งคั่ง หลับสบาย ลูกค้าไว้ใจ"', zh: '🛡️ "管家"："我保护了财富。我睡得安稳。我的客户信任我。"' }, consequence: { en: '🕊️ Respected. A quiet, honorable legacy. The gold standard.', th: '🕊️ น่าเคารพ ตำนานที่เงียบสงบและมีเกียรติ มาตรฐานทองคำ', zh: '🕊️ 受人尊敬。安静、光荣的遗产。黄金标准。' }, stats: { competence: 40, ethics: 60, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🚀 "The Visionary": "I saw the future before anyone else. I funded innovation."', th: '🚀 "ผู้มีวิสัยทัศน์": "เห็นอนาคตก่อนใคร สนับสนุนนวัตกรรม"', zh: '🚀 "远见者"："我比任何人都先看到了未来。我资助了创新。"' }, consequence: { en: '🌟 Icon. You helped build the modern world. Statues are built for you.', th: '🌟 ไอคอน คุณช่วยสร้างโลกยุคใหม่ มีรูปปั้นของคุณ', zh: '🌟 偶像。你帮助建立了现代世界。为你树立了雕像。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 60 } },
            { id: 'D', text: { en: '🃏 "The Gambler": "It was all a game. And I had a blast."', th: '🃏 "นักพนัน": "มันก็แค่เกม และฉันสนุกสุดเหวี่ยง"', zh: '🃏 "赌徒"："这也只是一场游戏。我玩得很嗨。"' }, consequence: { en: '🎭 Cult Figure. A wild story. No one trusts you with money, but they buy your book.', th: '🎭 ตัวตึงประจำวงการ เรื่องราวสุดโต่ง ไม่มีใครกล้าฝากเงิน แต่ซื้อหนังสือคุณอ่าน', zh: '🎭 邪教人物。疯狂的故事。没人敢把钱交给你，但他们买你的书。' }, stats: { competence: 30, ethics: 10, leadership: 10, innovation: 40 } }
        ]
    }
];
