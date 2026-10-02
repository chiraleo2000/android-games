export const financialAnalystQuestions = [
    {
        id: 'financial_analyst_001',
        text: {
            en: '🤫 The Whisper Number: At an exclusive gala, you overhear the CFO of a tech giant mentioning they missed their earnings target by a mile. The public expects a beat. If you short the stock now, you make millions, but it\'s technically insider trading.',
            th: '🤫 ตัวเลขกระซิบ: ในงานกาล่าสุดหรู คุณบังเอิญได้ยิน CFO ของยักษ์ใหญ่ไอทีหลุดปากว่าพวกเขาพลาดเป้ากำไรไปไกลลิบ สาธารณชนคาดว่าจะดีเกินคาด ถ้าคุณ Short หุ้นตอนนี้ คุณจะทำเงินล้าน แต่มันคือการซื้อขายโดยใช้ข้อมูลภายใน (Insider Trading)',
            zh: '🤫 私语数字：在一个独家晚宴上，你无意中听到一家科技巨头的 CFO 提到他们的收益远未达到目标。公众原本预期会超出预期。如果你现在做空该股票，你会赚数百万，但这在技术上是内幕交易。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Short It Hard: "Information is alpha. Short the stock using an offshore account to hide the trail. It\'s not illegal if you don\'t get caught."',
                    th: '💰 Short หนักๆ: "ข้อมูลคือแต้มต่อ Short หุ้นโดยใช้บัญชีออฟชอร์เพื่อซ่อนร่องรอย มันไม่ผิดกฎหมายถ้าคุณไม่ถูกจับ"',
                    zh: '💰 狠狠做空："信息就是阿尔法。使用离岸账户做空股票以掩盖踪迹。如果你没被抓到，那就不违法。"'
                },
                consequence: {
                    en: '🚔 SEC Raid! You make $5M overnight, but the abnormal volume triggers an SEC investigation. You are arrested, fined, and banned from finance for life.',
                    th: '🚔 SEC บุก! คุณทำเงิน 5 ล้านดอลลาร์ในข้ามคืน แต่ปริมาณการซื้อขายที่ผิดปกติกระตุ้นการสอบสวนจาก ก.ล.ต. คุณถูกจับ ปรับ และถูกห้ามยุ่งเกี่ยวกับการเงินตลอดชีวิต',
                    zh: '🚔 SEC 突袭！你一夜之间赚了 500 万美元，但异常的交易量引发了 SEC 的调查。你被捕、罚款，并被终身禁止涉足金融界。'
                },
                stats: { competence: 20, ethics: -50, leadership: -20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ The Ethical Wall: "Ignore the info. Stick to your models. If the fundamentals are bad, issue a downgrade based on public data analysis only."',
                    th: '⚖️ กำแพงจริยธรรม: "เมินข้อมูลนั้นซะ ยึดตามโมเดลของคุณ ถ้าพื้นฐานมันแย่ ก็ออกบทวิเคราะห์ปรับลดเกรดโดยอิงจากข้อมูลสาธารณะเท่านั้น"',
                    zh: '⚖️ 道德以此墙："忽略该信息。坚持你的模型。如果基本面糟糕，仅根据公共数据分析发布降级报告。"'
                },
                consequence: {
                    en: '🛡️ Clean Hands. The stock crashes as predicted. You didn\'t make the windfall, but your reputation for rigorous, honest analysis grows.',
                    th: '🛡️ มือสะอาด: หุ้นร่วงตามคาด คุณไม่ได้ลาภลอยก้อนโต แต่ชื่อเสียงด้านการวิเคราะห์ที่เข้มงวดและซื่อสัตย์ของคุณเติบโตขึ้น',
                    zh: '🛡️ 干净的手。股价如预期般暴跌。你没有发横财，但你严谨、诚实分析的声誉与日俱增。'
                },
                stats: { competence: 45, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📢 The "Rumor" Report: "Publish a report citing \'market whispers\' about missed earnings without revealing the source. Drive the price down legally before the news hits."',
                    th: '📢 รายงาน "ข่าวลือ": "ตีพิมพ์รายงานอ้าง \'ข่าวซุบซิบตลาด\' เรื่องพลาดเป้ากำไรโดยไม่เผยแหล่งข่าว ดันราคาลงอย่างถูกกฎหมายก่อนข่าวจริงจะออก"',
                    zh: '📢 "谣言"报告："发布一份报告，引用关于收益未达标的\'市场传言\'，而不透露来源。在新闻发布前合法地压低价格。"'
                },
                consequence: {
                    en: '📉 Market Mover. You profit legally, but the CFO knows it was you. You burn a bridge with a major company, cutting off future access.',
                    th: '📉 ผู้ขับเคลื่อนตลาด: คุณทำกำไรอย่างถูกกฎหมาย แต่ CFO รู้ว่าเป็นคุณ คุณเผาสะพานกับบริษัทใหญ่ ตัดขาดการเข้าถึงในอนาคต',
                    zh: '📉 市场推动者。你合法获利，但 CFO 知道是你。你与一家主要公司断绝了关系，切断了未来的接触机会。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 The Private Warning: "Directly tell your firm\'s Risk Manager what you heard. Let them decide whether to hedge the firm\'s exposure legally."',
                    th: '🤝 การเตือนส่วนตัว: "บอกผู้จัดการความเสี่ยงของบริษัทคุณตรงๆ ว่าได้ยินอะไรมา ให้พวกเขาตัดสินใจว่าจะป้องกันความเสี่ยงของบริษัทอย่างถูกกฎหมายอย่างไร"',
                    zh: '🤝 私下警告："直接把你听到的告诉公司的风险经理。让他们决定是否合法地对冲公司的风险敞口。"'
                },
                consequence: {
                    en: '🏢 Corporate Hero. The firm hedges and saves millions. You get a massive bonus for protecting the house without breaking the law.',
                    th: '🏢 ฮีโร่องค์กร: บริษัทป้องกันความเสี่ยงและรักษาเงินล้านไว้ได้ คุณได้โบนัสก้อนโตจากการปกป้องบ้านโดยไม่ทำผิดกฎหมาย',
                    zh: '🏢 企业英雄。公司进行了对冲并节省了数百万。你因保护公司且未违法而获得巨额奖金。'
                },
                stats: { competence: 35, ethics: 40, leadership: 30, innovation: 10 }
            }
        ]
    },
    {
        id: 'financial_analyst_002',
        text: {
            en: '💥 The Algorithm Glitch: Your proprietary high-frequency trading bot has found a loop that generates $100k every minute by front-running retail orders. It\'s essentially theft, but technically falls into a regulatory grey area.',
            th: '💥 ความผิดพลาดของอัลกอริทึม: บอทเทรดความถี่สูง (HFT) ของคุณเจอลูปที่ปั่นเงินได้ 100,000 ดอลลาร์ทุกนาทีโดยการตัดหน้าคำสั่งซื้อรายย่อย มันคือการขโมยชัดๆ แต่ในทางเทคนิคยังอยู่ในพื้นที่สีเทาของกฎระเบียบ',
            zh: '💥 算法故障：你的专有高频交易机器人发现了一个循环，通过抢先散户订单每分钟产生 10 万美元。这本质上是盗窃，但在技术上处于监管的灰色地带。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💸 Let it Ride: "Don\'t look a gift horse in the mouth. Run it until they patch the exchange glitch. We capitalize on inefficiency."',
                    th: '💸 ปล่อยไหล: "อย่าขัดลาภ รันไปเรื่อยๆ จนกว่าเขาจะแก้บั๊กของกระดานเทรด เราแค่ฉวยโอกาสจากความไม่มีประสิทธิภาพ"',
                    zh: '💸 让它跑："不要挑剔送上门的礼物。一直运行直到他们修补交易所的故障。我们利用低效率获利。"'
                },
                consequence: {
                    en: '⚖️ Regulatory Hammer. You make $50M, but the exchange sues you for market manipulation. The fines exceed the profits, and your firm collapses.',
                    th: '⚖️ ค้อนแห่งกฎระเบียบ: คุณทำเงิน 50 ล้าน แต่กระดานเทรดฟ้องคุณข้อหาปั่นตลาด ค่าปรับสูงกว่ากำไร และบริษัทคุณล้มละลาย',
                    zh: '⚖️ 监管重锤。你赚了 5000 万，但交易所起诉你操纵市场。罚款超过利润，你的公司倒闭。'
                },
                stats: { competence: 30, ethics: -40, leadership: -30, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Kill Switch: "Shut it down immediately. Refund the erroneous trades if possible. This isn\'t trading; it\'s exploiting a bug."',
                    th: '🛑 สวิตช์ปิดตาย: "ปิดมันทันที คืนเงินรายการที่ผิดพลาดถ้าทำได้ นี่ไม่ใช่การเทรด มันคือการใช้บั๊ก"',
                    zh: '🛑 终止开关："立即关闭。如果可能的话，退还错误的交易。这不是交易；这是利用漏洞。"'
                },
                consequence: {
                    en: '🛡️ Integrity Safe. You lose the easy profit, but you avoid a massive scandal. Your sleep at night is undisturbed.',
                    th: '🛡️ รักษาความซื่อสัตย์: คุณเสียกำไรก้อนนั้นไป แต่เลี่ยงเรื่องอื้อฉาวใหญ่โตได้ คุณนอนหลับฝันดีทุกคืน',
                    zh: '🛡️ 诚信安全。你失去了轻松的利润，但避免了一场巨大的丑闻。你晚上睡得很安稳。'
                },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🐛 Responsible Disclosure: "Stop the bot. Document the glitch. Report it to the exchange for a bounty. We act as white-hat traders."',
                    th: '🐛 การเปิดเผยอย่างรับผิดชอบ: "หยุดบอท บันทึกความผิดพลาด แจ้งกระดานเทรดเพื่อขอรางวัลนำจับ เราทำตัวเป็นเทรดเดอร์สายขาว"',
                    zh: '🐛 负责任的披露："停止机器人。记录故障。向交易所报告以获得赏金。我们要充当白帽交易员。"'
                },
                consequence: {
                    en: '🌟 Reputation Boost. The exchange thanks you publicly. You get a reputation as the "cleanest" quant firm in the street, attracting ESG investors.',
                    th: '🌟 ชื่อเสียงพุ่ง: กระดานเทรดขอบคุณคุณออกสื่อ คุณได้ชื่อว่าเป็น Quant Firm ที่ "สะอาด" ที่สุดในย่าน ดึงดูดนักลงทุนสาย ESG',
                    zh: '🌟 声誉提升。交易所公开感谢你。你获得了华尔街"最干净"量化公司的声誉，吸引了 ESG 投资者。'
                },
                stats: { competence: 50, ethics: 45, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🔧 Tweaked Optimization: "Slow the bot down to fly under the radar. Take $10k a minute instead. Don\'t be greedy, just be consistent."',
                    th: '🔧 ปรับจูนให้เนียน: "ชะลอบอทลงหน่อยให้พ้นเรดาร์ เอาแค่ 10,000 ต่อนาทีพอ อย่าโลภ เอาแค่สม่ำเสมอ"',
                    zh: '🔧 微调优化："让机器人慢下来以避开雷达。改为每分钟赚 1 万。不要贪婪，只要稳定。"'
                },
                consequence: {
                    en: '💵 Sustainable Parasite. You drain the system slowly for years. It works, but you stagnate technically, relying on one trick pony.',
                    th: '💵 ปรสิตที่ยั่งยืน: คุณสูบเลือดระบบช้าๆ ไปได้หลายปี มันเวิร์ก แต่คุณย่ำอยู่กับที่ทางเทคนิค พึ่งพาแค่ลูกไม้ตื้นๆ เดียว',
                    zh: '💵以此 可持续的寄生虫。你多年来以此以此慢慢榨取系统。这很有效，但你在技术上停滞不前，只依赖这一招。'
                },
                stats: { competence: 20, ethics: -20, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'financial_analyst_003',
        text: {
            en: '📉 The IPO Valuation: A hyped tech unicorn wants to go public. They are burning cash but have a charismatic CEO. Your boss wants a $50B valuation to win the underwriting deal. Your model says it\'s worth $10B max.',
            th: '📉 การประเมินมูลค่า IPO: ยูนิคอร์นเทคชื่อดังอยากเข้าตลาดหุ้น พวกเขาเผาเงินทิ้งแต่มีซีอีโอที่มีเสน่ห์ หัวหน้าคุณต้องการตัวเลข 5 หมื่นล้านเพื่อชิงดีล Underwrite แต่โมเดลคุณบอกว่าเต็มที่แค่ หมื่นล้าน',
            zh: '📉 IPO 估值：一家被炒作的科技独角兽想要上市。他们在烧钱，但有一位极具个人魅力的 CEO。你的老板想要 500 亿美元的估值来赢得承销交易。你的模型显示它最多值 100 亿美元。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Play the Game: "Adjust the growth assumptions to justify $50B. Everyone does it. If we don\'t, another bank will take the fees."',
                    th: '🤝 เล่นตามเกม: "ปรับสมมติฐานการเติบโตเพื่อรองรับตัวเลข 5 หมื่นล้าน ใครๆ ก็ทำกัน ถ้าเราไม่ทำ แบงก์อื่นก็คาบค่าธรรมเนียมไปกิน"',
                    zh: '🤝 玩这个游戏："调整增长假设以证明 500 亿美元是合理的。每个人都这样做。如果我们不做，另一家银行就会拿走这笔费用。"'
                },
                consequence: {
                    en: '📉 The Bubble Bursts. The IPO is a hit, then crashes 80% in 6 months. Investors sue. Your name is on the fraudulent report.',
                    th: '📉 ฟองสบู่แตก: IPO ดังระเบิด แล้วร่วง 80% ใน 6 เดือน นักลงทุนฟ้อง ชื่อของคุณแปะอยู่บนรายงานฉ้อฉลนั้น',
                    zh: '📉 泡沫破裂。IPO 很成功，然后在 6 个月内暴跌 80%。投资者起诉。你的名字出现在欺诈报告上。'
                },
                stats: { competence: 20, ethics: -30, leadership: -10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '📊 Honest Appraisal: "Stick to $10B. Present the data clearly. Tell the client that a realistic valuation ensures a stock \'pop\' rather than a crash."',
                    th: '📊 การประเมินที่ซื่อตรง: "ยืนยันที่ 1 หมื่นล้าน นำเสนอข้อมูลให้ชัด บอกลูกค้าว่ามูลค่าที่สมจริงจะทำให้หุ้น \'ดีด\' ขึ้นแทนที่จะร่วงกราว"',
                    zh: '📊 诚实的评估："坚持 100 亿美元。清楚地展示数据。告诉客户，现实的估值能确保存款\'上涨\'而不是崩盘。"'
                },
                consequence: {
                    en: '🚪 Lost Deal, Saved Soul. The client walks and hires a yes-man bank. They crash later. You become known as the analyst who "called it."',
                    th: '🚪 เสียดีล แต่ได้วิญญาณคืน: ลูกค้าเดินหนีไปจ้างแบงก์ที่เออออห่อหมก แล้วพวกเขาก็ล้มทีหลัง คุณกลายเป็นที่รู้จักในฐานะนักวิเคราะห์ที่ "ทายถูก"',
                    zh: '🚪 失去交易，以此拯救灵魂。客户走人并聘请了一家唯唯诺诺的银行。后来他们崩盘了。你成为了"预言准了"的分析师。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Constructive Structure: "Suggest a hybrid valuation with earn-out structures. Value at $20B with upside if they hit targets. Bridge the gap with financial engineering."',
                    th: '🧠 โครงสร้างสร้างสรรค์: "เสนอการประเมินแบบลูกผสมพร้อมโครงสร้าง Earn-out ให้ราคา 2 หมื่นล้านพร้อมส่วนเพิ่มถ้าทำเป้าได้ เชื่อมช่องว่างด้วยวิศวกรรมการเงิน"',
                    zh: '🧠 建设性结构："建议采用带有盈利以此支付结构的混合估值。估值 200 亿美元，如果达到目标还有上涨空间。用金融工程弥合差距。"'
                },
                consequence: {
                    en: '✨ Deal Wizard. You save the deal. The complex structure protects investors while soothing the CEO\'s ego. A masterclass in banking.',
                    th: '✨ พ่อมดดีล: คุณกู้ดีลไว้ได้ โครงสร้างซับซ้อนปกป้องนักลงทุนในขณะที่ปลอบประโลมอีโก้ซีอีโอ นี่คือชั้นเรียนระดับเทพของวงการธนาคาร',
                    zh: '✨ 交易巫师。你挽救了交易。复杂的结构既保护了投资者，又安抚了 CEO 的自尊心。银行业的大师级操作。'
                },
                stats: { competence: 50, ethics: 30, leadership: 45, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Leak the scepticism: "Anonymously leak your bearish model to the financial press to lower market expectations, forcing the CEO to accept a lower price."',
                    th: '📢 ปล่อยข่าวความสงสัย: "ปล่อยโมเดลขาลงของคุณให้สื่อการเงินแบบนิรนามเพื่อลดความคาดหวังตลาด บีบให้ซีอีโอยอมรับราคาที่ต่ำลง"',
                    zh: '📢 泄露怀疑态度："匿名将你看跌的模型泄露给财经媒体，以此以降低市场预期，迫使 CEO 接受更低的价格。"'
                },
                consequence: {
                    en: '🕵️ Dangerous Game. The valuation drops to $15B. The deal happens. But internal security launches a mole hunt. You are walking on thin ice.',
                    th: '🕵️ เกมอันตราย: มูลค่าลดลงเหลือ 1.5 หมื่นล้าน ดีลเกิดขึ้น แต่ฝ่ายความปลอดภัยภายในเริ่มไล่ล่าหนอนบ่อนไส้ คุณกำลังเดินบนแผ่นน้ำแข็งบางๆ',
                    zh: '🕵️ 危险的游戏。估值以此降至 150 亿美元。交易达成。但内部安全部门发起了抓内鬼行动。你如履薄冰。'
                },
                stats: { competence: 40, ethics: 0, leadership: 10, innovation: 30 }
            }
        ]
    },
    {
        id: 'financial_analyst_004',
        text: {
            en: '🌪️ The Emerging Market Crisis: A small country you are heavily invested in just had a coup. The currency is plummeting. You can sell now for a 50% loss or hold and hope for stability.',
            th: '🌪️ วิกฤตตลาดเกิดใหม่: ประเทศเล็กๆ ที่คุณลงทุนหนักเพิ่งมีการรัฐประหาร ค่าเงินร่วงกราว คุณจะขายทิ้งตอนนี้ยอมขาดทุน 50% หรือถือต่อรอดูสถานการณ์',
            zh: '🌪️ 新兴市场危机：你重仓投资的一个小国刚刚发生政变。货币正在暴跌。你可以现在卖出并接受 50% 的损失，或者持有并希望稳定。'
        },
        options: [
            { id: 'A', text: { en: '📉 Fire Sale: "Get out at any price. Liquidity is drying up. 50% loss is better than 100%."', th: '📉 ขายทิ้ง: "ออกทุกราคา สภาพคล่องกำลังจะหมด ขาดทุน 50% ดีกว่า 0%"', zh: '📉 大甩卖："不惜一切代价退出。流动性正在枯竭。损失 50% 比 100% 好。"' }, consequence: { en: '🛡️ Capital Preserved. You take a hit, but survive. The country defaults months later. Smart exit.', th: '🛡️ รักษาเงินทุน: เจ็บตัวแต่รอด ประเทศผิดนัดชำระหนี้ในอีกไม่กี่เดือนถัดมา การออกที่ฉลาด', zh: '🛡️ 资本保全。你受到打击，但幸存下来。该国几个月后违约。明智的退出。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '💎 Diamond Hands: "Volatility is noise. The coup leaders need foreign investment. Buy the dip."', th: '💎 มือเพชร: "ความผันผวนคือเสียงรบกวน ผู้นำรัฐประหารต้องการเงินต่างชาติ ซื้อเพิ่มตอนร่วง"', zh: '💎 钻石手："波动是噪音。政变领导人需要外国投资。逢低买入。"' }, consequence: { en: '🎰 High Risk Reward. The regime stabilizes. Assets rally 200%. You look like a genius (or a lucky gambler).', th: '🎰 เสี่ยงสูงผลตอบแทนสูง: ระบอบการปกครองมั่นคง สินทรัพย์พุ่ง 200% คุณดูเหมือนอัจฉริยะ (หรือนักพนันดวงดี)', zh: '🎰 高风险回报。政权稳定下来。资产反弹 200%。你看起来像个天才（或者幸运的赌徒）。' }, stats: { competence: 50, ethics: 10, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '🤝 Backchannel Diplo: "Call contacts in the State Dept. Is the coup US-backed? Get intel before trading."', th: '🤝 การทูตหลังฉาก: "โทรหาคนรู้จักในกระทรวงต่างประเทศ รัฐประหารนี้สหรัฐหนุนหลังไหม? เอาข้อมูลก่อนเทรด"', zh: '🤝 秘密外交："联系国务院的熟人。政变是美国支持的吗？在交易前获取情报。"' }, consequence: { en: '🕵️ Insider Advantage. You learn it is a temporary disturbance. You hold confidently. Information is power.', th: '🕵️ ความได้เปรียบวงใน: คุณรู้ว่าเป็นแค่เรื่องชั่วคราว คุณถือต่ออย่างมั่นใจ ข้อมูลคืออำนาจ', zh: '🕵️ 内幕优势。你知道这只是暂时的动荡。你自信地持有。信息就是力量。' }, stats: { competence: 50, ethics: 20, leadership: 30, innovation: 40 } },
            { id: 'D', text: { en: '📢 Public Panic: "Tweet that the country is \'uninvestable\'. Cause a crash so you can buy cheaper later."', th: '📢 ปั่นประสาท: "ทวีตว่าประเทศนี้ \'ลงทุนไม่ได้\' ทำให้ตลาดพังยับเพื่อที่คุณจะได้ช้อนซื้อถูกๆ ทีหลัง"', zh: '📢 公众恐慌："发推文称该国\'不可投资\'。引发崩盘，以便以后可以更便宜地买入。"' }, consequence: { en: '⚖️ Market Manipulation. Regulators notice the timing. You profit but face legal scrutiny.', th: '⚖️ การปั่นตลาด: ก.ล.ต. สังเกตเห็นไทม์มิ่ง คุณกำไรแต่เจอการตรวจสอบทางกฎหมาย', zh: '⚖️ 操纵市场。监管机构注意到了时机。你获利了，但面临法律审查。' }, stats: { competence: 30, ethics: -40, leadership: -20, innovation: 10 } }
        ]
    },
    {
        id: 'financial_analyst_005',
        text: {
            en: '🤖 The AI Analyst: A tech firm pitches an AI that predicts market movements with 90% accuracy. It costs $10M/year. Your team of 50 humans costs $15M.',
            th: '🤖 นักวิเคราะห์ AI: บริษัทเทคเสนอขาย AI ที่ทำนายตลาดแม่น 90% ราคา 10 ล้านดอลลาร์/ปี ทีมมนุษย์ 50 คนของคุณใช้เงิน 15 ล้าน',
            zh: '🤖 AI 分析师：一家科技公司推销一种能够以 90% 的准确率预测市场走势的 AI。它每年花费 1000 万美元。你的 50 人团队花费 1500 万美元。'
        },
        options: [
            { id: 'A', text: { en: '🤖 Fire Humans, Hire AI: "Efficiency is king. Replace the team. Welcome our robot overlords."', th: '🤖 ไล่คนออก จ้าง AI: "ประสิทธิภาพคือราชา เปลี่ยนทีมออก ต้อนรับเจ้านายหุ่นยนต์"', zh: '🤖 解雇人类，以此以此以此以此雇用 AI："效率为王。取代团队。欢迎我们的机器人霸主。"' }, consequence: { en: '📉 Black Box Crash. The AI hallucinates during a flash crash. Losses are massive. No humans left to intervene.', th: '📉 กล่องดำพัง: AI หลอนตอนตลาดร่วงหนัก ขาดทุนยับเยิน ไม่มีมนุษย์เหลือมาแก้สถานการณ์', zh: '📉 黑盒崩盘。AI 在闪崩期间产生幻觉。损失惨重。没有人类以此干预。' }, stats: { competence: 20, ethics: 10, leadership: -40, innovation: 20 } },
            { id: 'B', text: { en: '🤝 Hybrid Model: "Keep the best 10 analysts to supervise the AI. Cut the rest. Combine intuition with processing power."', th: '🤝 โมเดลลูกผสม: "เก็บ 10 คนเก่งสุดไว้คุม AI ตัดส่วนที่เหลือ ผสมสัญชาตญาณกับพลังประมวลผล"', zh: '🤝 混合模型："留住最好的 10 位分析师来监督 AI。裁掉其余的人。将直觉与处理能力结合起来。"' }, consequence: { en: '🚀 Optimal Alpha. The humans catch the AI\'s edge cases. The firm outperforms the market consistently.', th: '🚀 อัลฟ่าสูงสุด: มนุษย์จับจุดบอด AI ได้ บริษัททำกำไรชนะตลาดสม่ำเสมอ', zh: '🚀 最佳阿尔法。人类捕捉到了 AI 的边缘情况。该公司持续跑赢大盘。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'C', text: { en: '🛑 Reject AI: "Markets are emotional. Algorithms can\'t read panicked human psychology. Stick to people."', th: '🛑 ปฏิเสธ AI: "ตลาดคืออารมณ์ อัลกอริทึมอ่านจิตวิทยาคนตื่นตระหนกไม่ออก ใช้คนต่อไป"', zh: '🛑 拒绝 AI："市场是情绪化的。算法无法解读恐慌的人类心理。坚持用人。"' }, consequence: { en: '🦖 Dinosaur Status. Competitors use AI to trade faster. You lose market share slowly but surely.', th: '🦖 สถานะไดโนเสาร์: คู่แข่งใช้ AI เทรดเร็วกว่า คุณเสียส่วนแบ่งตลาดช้าๆ แต่ชัวร์', zh: '🦖 恐龙地位。竞争对手使用 AI 交易更快。你缓慢但肯定地失去市场份额。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: -20 } },
            { id: 'D', text: { en: '🔍 Reverse Engineer: "Don\'t buy it. Hire data scientists to build a cheaper version internally. Own the IP."', th: '🔍 วิศวกรรมย้อนกลับ: "ไม่ต้องซื้อ จ้างนักวิทยาศาสตร์ข้อมูลมาสร้างเวอร์ชันถูกกว่าเอง เป็นเจ้าของ IP"', zh: '🔍 逆向工程："不要买。聘请数据科学家在内部构建更便宜的版本。拥有知识产权。"' }, consequence: { en: '🛠️ Slow Build. It takes 2 years. By then, the market has moved on. Good intent, slow execution.', th: '🛠️ สร้างช้า: ใช้เวลา 2 ปี ถึงตอนนั้นตลาดเปลี่ยนไปแล้ว เจตนาดีแต่ทำช้า', zh: '🛠️ 缓慢构建。这需要 2 年。到那时，市场已经变了。以此用意虽好，以此执行缓慢。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 30 } }
        ]
    },
    {
        id: 'financial_analyst_006',
        text: {
            en: '🏢 The Commercial Real Estate Bubble: Office vacancies are at 30%. Banks act like loans are fine. You see a "Big Short" opportunity in commercial mortgage-backed securities (CMBS).',
            th: '🏢 ฟองสบู่อสังหาริมทรัพย์เพื่อการพาณิชย์: ออฟฟิศว่าง 30% แบงก์ทำเหมือนเงินกู้ปกติ คุณเห็นโอกาส "Big Short" ในหลักทรัพย์ค้ำประกันจำนอง (CMBS)',
            zh: '🏢 商业房地产泡沫：办公室空置率达到 30%。银行表现得好像贷款没问题。你在商业抵押贷款支持证券 (CMBS) 中看到了"大空头"以此以此以此机会。'
        },
        options: [
            { id: 'A', text: { en: '💣 Short Everything: "Bet the house against CMBS. Offices are never coming back. Ensure maximum leverage."', th: '💣 Short ทุกอย่าง: "เดิมพันหมดหน้าตักสวน CMBS ออฟฟิศไม่มีทางฟื้น ใส่เลเวอเรจสูงสุด"', zh: '💣 做空一切："以此以此押注做空 CMBS。办公室永远不会回来了。确保最大杠杆。"' }, consequence: { en: '🏰 Fortunes Made. As defaults roll in, your fund returns 500%. You are the new Michael Burry.', th: '🏰 ร่ำรวยมหาศาล: เมื่อการผิดนัดชำระหนี้มาถึง กองทุนคุณคืนกำไร 500% คุณคือ Michael Burry คนใหม่', zh: '🏰 发财致富。随着违约滚滚而来，以此你的基金回报率为 500%。你是新的迈克尔·布里。' }, stats: { competence: 50, ethics: 20, leadership: 40, innovation: 40 } },
            { id: 'B', text: { en: '📢 Warn the Public: "Publish a white paper on the coming collapse. Save pension funds, even if it hurts your short trade."', th: '📢 เตือนสาธารณะ: "ตีพิมพ์สมุดปกขาวเรื่องการล่มสลายที่กำลังจะมา ช่วยกองทุนบำเหน็จ แม้จะทำให้เทรด Short ของคุณกำไรน้อยลง"', zh: '📢 警告公众："发表白皮书以此以此以此以此关于即将到来的崩溃。以此以此以此挽救养老基金，即使这会损害你的做空交易。"' }, consequence: { en: '🎖️ Ethical Analyst. The market listens. The crash is softer because people prepared. You earn trust.', th: '🎖️ นักวิเคราะห์จริยธรรม: ตลาดรับฟัง การล่มสลายเบาลงเพราะคนเตรียมตัว คุณได้รับความไว้วางใจ', zh: '🎖️ 道德分析师。市场在听。崩溃比较温和，因为人们做好了准备。你赢得了信任。' }, stats: { competence: 45, ethics: 50, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '🙈 Pretend & Extend: "Don\'t short. If real estate crashes, the whole economy dies. Buy the dip and pray."', th: '🙈 แกล้งทำเมินและซื้อเวลา: "อย่า Short ถ้าอสังหาพัง เศรษฐกิจก็พัง ซื้อตอนร่วงและสวดมนต์"', zh: '🙈 假装和以此延期："不要做空。如果房地产以此以此崩盘，以此以此整个经济就会以此以此以此以此消亡。逢低买入并祈祷。"' }, consequence: { en: '📉 Bag Holder. You hold onto toxic assets while they go to zero. Optimism is not a strategy.', th: '📉 คนถือของเน่า: คุณกอดสินทรัพย์พิษไว้จนค่าเป็นศูนย์ การมองโลกในแง่ดีไม่ใช่กลยุทธ์', zh: '📉以此以此以此 接盘侠。你持有有毒资产直到它们以此以此以此归零。乐观不是策略。' }, stats: { competence: 10, ethics: 10, leadership: -20, innovation: -10 } },
            { id: 'D', text: { en: '🏗️ Selective Short: "Only short Class B offices in non-tech cities. Long trophy assets in NY/London. It\'s a bifurcation."', th: '🏗️ เลือก Short: "Short เฉพาะออฟฟิศเกรด B ในเมืองที่ไม่ใช่ Tech ซื้อสินทรัพย์ถ้วยรางวัลใน NY/London มันคือการแยกขั้ว"', zh: '🏗️以此 选择性做空："只做空非科技城市的 B 类以此办公室。以此以此以此做多以此以此以此纽约/伦敦的以此以此以此以此优质资产。两极分化。"' }, consequence: { en: '🎯 Precision Strike. You profit from the bad while surfing the flight to quality. Nuanced genius.', th: '🎯 โจมตีแม่นยำ: คุณกำไรจากของเน่าในขณะที่เกาะกระแสของดี อัจฉริยะที่ละเอียดอ่อน', zh: '🎯 精确打击。你在利用坏资产获利的同时，也顺应了以此以此以此以此以此以此以此向优质资产转移的趋势。以此以此以此入微的天才。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 } }
        ]
    },
    {
        id: 'financial_analyst_007',
        text: {
            en: '♻️ Greenwashing ESG: Your boss wants you to rate an Oil & Gas giant as "ESG Compliant" because they planted some trees. It will bring in billions in passive ETF flows.',
            th: '♻️ การฟอกเขียว ESG: หัวหน้าคุณอยากให้คุณให้เกรด "ผ่านเกณฑ์ ESG" กับยักษ์ใหญ่น้ำมันเพราะพวกเขาปลูกต้นไม้นิดหน่อย มันจะดึงเงิน ETF ไหลเข้ามาเป็นพันล้าน',
            zh: '♻️ 漂绿 ESG：你的以此以此以此老板想让你把一家石油和天然气巨头评为"符合 ESG"，因为他们种了一些树。这将带来以此以此以此数十亿美元的以此以此以此被动 ETF 流量。'
        },
        options: [
            { id: 'A', text: { en: '🌲 Stamp of Approval: "Sign it. They are \'transitioning\'. Fees are fees. ESG is fake anyway."', th: '🌲 ประทับตราอนุมัติ: "เซ็นไป พวกเขากำลัง \'เปลี่ยนผ่าน\' ค่าธรรมเนียมก็คือค่าธรรมเนียม ESG มันก็ปลอมอยู่แล้ว"', zh: '🌲 批准印章："签字。他们正在以此\'转型\'。费用就是费用。反正 ESG 都是假的。"' }, consequence: { en: '🤑 Bonus Time. The fund launches successfully. Environmentalists protest, but you cash the check.', th: '🤑 เวลาโบนัส: กองทุนเปิดตัวสำเร็จ นักอนุรักษ์ประท้วง แต่คุณขึ้นเงินเช็คสบายใจ', zh: '🤑 奖金时间。基金成功推出。环保主义者抗议，但你以此以此以此兑现了支票。' }, stats: { competence: 30, ethics: -30, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Whistleblow: "Leak the internal emails showing the pressure to inflate ratings. Expose the industry farce."', th: '🛑 เป่านกหวีด: "ปล่อยอีเมลภายในที่โชว์การกดดันให้ปั่นเกรด แฉละครปาหี่ของวงการ"', zh: '🛑 揭发："泄露以此内部以此以此以此邮件，显示以此以此以此以此夸大评级的压力。以此以此以此揭露行业以此以此以此笑话。"' }, consequence: { en: '📰 Scandal. You are fired but hailed as a hero. Regulators tighten ESG rules globally because of you.', th: '📰 เรื่องอื้อฉาว: คุณโดนไล่ออกแต่ได้รับยกย่องเป็นฮีโร่ กฎระเบียบ ESG ทั่วโลกเข้มงวดขึ้นเพราะคุณ', zh: '📰 丑闻。你被以此以此解雇了，但被以此以此誉为英雄。因为你，以此以此监管机构以此以此以此在全球收紧了 ESG 规则。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '📊 Data Defense: "Reject the rating based on Scope 3 emissions. Force them to actually cut carbon to get the rating."', th: '📊 การป้องกันด้วยข้อมูล: "ปฏิเสธเกรดโดยอิงจาก eScope 3 emissions บังคับให้พวกเขาลดคาร์บอนจริงๆ เพื่อให้ได้เกรด"', zh: '📊 数据防御："以此以此以此根据以此范围 3 排放以此以此以此拒绝以此评级。以此以此以此迫使他们以此以此努力确实以此以此以此减少碳排放以此以此以此以获得以此以此评级。"' }, consequence: { en: '📈 Real Change. The Oil giant actually invests in renewables to win your approval. You moved the needle.', th: '📈 การเปลี่ยนแปลงจริง: ยักษ์ใหญ่น้ำมันลงทุนในพลังงานหมุนเวียนจริงเพื่อชนะใจคุณ คุณสร้างความเปลี่ยนแปลง', zh: '📈 真正的改变。石油以此巨头以此以此确实投资于可再生能源以此以此以获得你的以此以此批准。你以此以此推动了以此以此进展。' }, stats: { competence: 50, ethics: 45, leadership: 45, innovation: 30 } },
            { id: 'D', text: { en: '📝 Careful Wording: "Rate them \'Improving\' instead of \'Compliant\'. A subtle distinction that protects you legally."', th: '📝 การใช้คำระมัดระวัง: "ให้เกรด \'กำลังปรับปรุง\' แทน \'ผ่านเกณฑ์\' ความแตกต่างเล็กน้อยที่ปกป้องคุณทางกฎหมาย"', zh: '📝 措辞谨慎："将他们评为\'正在改进\'而不是\'合规\'。以此以此以此以此细微的以此以此区别可以以此以此合法地以此以此保护你。"' }, consequence: { en: '⚖️ Bureaucratic Safe. No one is happy, but no one sues. You survive the corporate politics.', th: '⚖️ ความปลอดภัยระบบราชการ: ไม่มีใครพอใจ แต่ไม่มีใครฟ้อง คุณรอดในเกมการเมืององค์กร', zh: '⚖️ 官僚以此以此以此以此安全。没有人以此以此以此以此以此高兴，但没有人以此以此以此以此以此以此起诉。你在以此以此以此以此企业以此以此以此以此政治中幸存以此以此以此下来。' }, stats: { competence: 40, ethics: 20, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'financial_analyst_008',
        text: {
            en: '💊 The Pharma Merger: Two pharma giants want to merge. It creates a monopoly but "synergies" will lower drug costs (allegedly). Advisors get $100M fees. Patients might suffer price gouging.',
            th: '💊 การควบรวมบริษัทยา: ยักษ์ใหญ่ายาสองแห่งต้องการควบรวม มันสร้างการผูกขาดแต่ "Synergies" จะลดค่ายา (เขาอ้างว่า) ที่ปรึกษาได้ค่าฟี 100 ล้าน ผู้ป่วยอาจโดนโขกดราคา',
            zh: '💊 制药以此合并：两家制药巨头以此以此想要合并。这造成了以此垄断，但"协同效应"将以此以此降低药品成本（据称）。顾问以此获得 1 亿美元以此以此的以此以此费用。患者可能会遭受价格以此以此欺诈。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Push the Deal: "Focus on the efficiencies. R&D budgets will combine! The monopoly concern is for the lawyers, not us."', th: '🤝 ดันดีล: "เน้นที่ประสิทธิภาพ งบ R&D จะรวมกัน! เรื่องผูกขาดไว้ให้ทนายเคลียร์ ไม่ใช่เรา"', zh: '🤝 推动以此交易："以此关注效率。以此以研发预算将合并！垄断问题以此以此以此以此以此是以此以此律师的事，以此以此以此以此不是我们的事。"' }, consequence: { en: '💰 Fee Feast. The deal closes. Drug prices rise 40% next year. You are rich but complicit.', th: '💰 งานเลี้ยงค่าฟี: ดีลจบ ราคายาขึ้น 40% ปีหน้า คุณรวยแต่มีส่วนรู้เห็น', zh: '💰 以此费用盛宴。交易完成。以此以以此明年药价以此以以此上涨 40%。你以此有钱但以此以以此是同谋。' }, stats: { competence: 40, ethics: -20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Antitrust Analysis: "Kill the deal internally. The FTC will block it anyway. Save the client the breakup fee."', th: '🛑 วิเคราะห์การผูกขาด: "ฆ่าดีลภายในองค์กร FTC จะขวางอยู่ดี ช่วยลูกค้าประหยัดค่าปรับดีลล่ม"', zh: '🛑 反以此垄断以此分析："在以此以此内部以此扼杀以此交易。FTC 以此以以此无论如何都会阻止它。为客户节省以此以此分手费。"' }, consequence: { en: '🔮 Prescient Advice. The FTC sues to block. The client thanks you for avoiding a year of legal hell.', th: '🔮 คำแนะนำหยั่งรู้อนาคต: FTC ฟ้องระงับ ลูกค้าขอบคุณที่คุณช่วยเลี่ยงนรกกฎหมายเป็นปี', zh: '🔮以此 有以此以此先见之明的以此以此以此以此以此建议。FTC 起诉以阻止。客户感谢你以此以此避免了一年的以此以此法律地狱。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '📋 Conditional Yes: "Approve it ONLY if they divest their cancer drug unit to ensure competition. Structure the spin-off."', th: '📋 ใช่แบบมีเงื่อนไข: "อนุมัติก็ต่อเมื่อพวกเขาขายหน่วยยามะเร็งทิ้งเพื่อรับรองการแข่งขัน ออกแบบโครงสร้าง Spin-off"', zh: '📋 以此以此有条件的是："只有在他们以此以此以此以此剥离以此以此抗癌药物以以此以此以此部门以确保竞争的情况下才批准。构建以此以此拆分结构。"' }, consequence: { en: '🏗️ Complex Win. Regulators accept the compromise. Competition is preserved. You get double fees (merger + spin-off).', th: '🏗️ ชนะซับซ้อน: ก.ล.ต. ยอมรับข้อตกลง การแข่งขันคงอยู่ คุณได้ค่าฟีสองเด้ง (ควบรวม + แยกขาย)', zh: '🏗️ 复杂的胜利。监管机构以此以此接受妥协。竞争以此以此得以保留。你以此以以此获得双倍费用（合并 + 拆分）。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🤫 Behind Scenes Leak: "Leak the merger rumors to pump the stock, then have the client issue equity before announcing the deal. Illegal pump."', th: '🤫 รั่วไหลหลังฉาก: "ปล่อยข่าวลือควบรวมเพื่อปั่นหุ้น แล้วให้ลูกค้าขายหุ้นเพิ่มทุนก่อนประกาศดีล ปั่นผิดกฎหมาย"', zh: '🤫 幕后以此泄露："以此以此泄露以此合并以此传闻以此以以此以此以此以此以此拉升股票，然后在以此以此宣布以此以此交易之前让以此以此以此客户以此发行股票。非法以此以此拉升。"' }, consequence: { en: '🚔 Jail Time. Promoting stock manipulation is a felony. The SEC has algorithms for this exact pattern.', th: '🚔 ติดคุก: การปั่นหุ้นเป็นอาชญากรรม ก.ล.ต. มีอัลกอริทึมจับแพทเทิร์นนี้เป๊ะๆ', zh: '🚔 坐牢时间。以此以以此助长股票操纵以此以此以此以此以此以此是重罪。SEC 以此以此以此以此有针对这种以此以此以此以此以此以此以此以此确切以此模式的算法。' }, stats: { competence: 10, ethics: -50, leadership: -30, innovation: -10 } }
        ]
    },
    {
        id: 'financial_analyst_009',
        text: {
            en: '📉 The "Dead Cat" Bounce: Markets are crashing. A sudden rally happens. Retail investors think it\'s the recovery. Your indicators say it\'s a trap before lower lows.',
            th: '📉 การเด้ง "แมวตาย": ตลาดกำลังพัง จู่ๆ ก็มีการดีดตัว นักลงทุนรายย่อยคิดว่าฟื้นแล้ว อินดิเคเตอร์คุณบอกว่ากับดักก่อนจะลงลึกกว่าเดิม',
            zh: '📉 "死猫"反弹：以此以此以此以此以此市场以此正在以此以此崩盘。突然出现了以此以此以此以此反弹。散户以此以此投资者以此以此以此认为这是以此以此复苏。你的以此以此指标以此以此表明以此以此以此这是以此以此更低低点之前的以此以此陷阱。'
        },
        options: [
            { id: 'A', text: { en: '📢 Sell into Strength: "Advise clients to dump assets during this rally. Save them from the next leg down."', th: '📢 ขายตอนแข็ง: "แนะนำลูกค้าให้เทขายสินทรัพย์ช่วงดีดตัวนี้ ช่วยพวกเขาจากขาลงรอบถัดไป"', zh: '📢 趁以此以此以此强势卖出："建议客户在此次反弹期间抛售资产。把他们从下一轮下跌中以此以此拯救出来。"' }, consequence: { en: '🛡️ Portfolio Savior. The market drops another 20%. Clients avoided the losses. You are hailed as a guru.', th: '🛡️ ผู้ช่วยพอร์ตโฟลิโอ: ตลาดลงอีก 20% ลูกค้ารอดขาดทุน คุณได้รับการยกย่องเป็นกูรู', zh: '🛡️以此 组合以此以此救星。以此市场以此以此以此以此又下跌了 20%。以此以此以此客户以此以此以此避免了损失。你以此以此以此以以此被誉为以此以此以此以此大师。' }, stats: { competence: 50, ethics: 45, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '🤫 Silent Accumulation: "Short the rally quietly. Let retail investors buy your bags. It is a zero sum game."', th: '🤫 สะสมเงียบ: "Short สวนเงียบๆ ปล่อยให้รายย่อยรับของดอยไป มันคือเกมผลรวมศูนย์"', zh: '🤫 悄悄以此积累："悄悄以此做空以此以此以此以此反弹。让以此以此散户以此投资者以此以此以此买以此以此以此你的包。这是以此以此以此以此以此以此零和以此以此游戏。"' }, consequence: { en: '💰 Ruthless Profit. You make money off retail ignorance. Profitable but cynical.', th: '💰 กำไรไร้ปรานี: คุณทำเงินจากความไม่รู้ของรายย่อย กำไรดีแต่เลือดเย็น', zh: '💰 残以此以此无情的以此以此利润。你以此以此从散户的无知中以此以此以此赚钱。无以此以此以此以此利可图但愤世嫉俗。' }, stats: { competence: 40, ethics: 10, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🌍 Media Appearances: "Go on CNBC. Say \'The bottom is in!\' to pump it higher for your short entry."', th: '🌍 ออกสื่อ: "ไปออก CNBC บอก \'เจอถึแล้ว!\' เพื่อปั่นให้สูงขึ้นเพื่อจุดเข้า Short ของคุณ"', zh: '🌍 媒体以此露面："上 CNBC。说 \'底部到了！\' 以此以此以此以此以此把它以此以此以此推得更高以便你做空。"' }, consequence: { en: '🤥 Market Manipulation. You mislead millions. It works, but karma (and regulators) is watching.', th: '🤥 การปั่นตลาด: คุณหลอกลวงคนล้านคน มันเวิร์ก แต่เวรกรรม (และ ก.ล.ต.) กำลังจับตาดู', zh: '🤥 操纵以此以此以此市场。你以此以此误导了以此以此数百万以此以此以此以此人。这很有效，但因果报应（和以此以此监管机构）正在以此以此以此以此注视着。' }, stats: { competence: 30, ethics: -40, leadership: -10, innovation: 10 } },
            { id: 'D', text: { en: '🎢 Ride the Wave: "Buy for a quick trade. Try to time the top perfectly. Scalp the volatility."', th: '🎢 เกาะคลื่น: "ซื้อเพื่อเทรดสั้น พยายามจับจังหวะยอดดอยให้เป๊ะ เก็งกำไรความผันผวน"', zh: '🎢 驾以此以此以此驭浪潮："为以此以此以此快速以此以此以此交易以此以此以此而买入。尝试以此以此完美地以此以此把握以此以此以此以此以此顶部。以此以此剥以此以此以此以此以此以此头皮以此以此以此以波动性。"' }, consequence: { en: '⏱️ Timing Risk. You miss the exit by 5 minutes and get crushed. Trading swings is gambling.', th: '⏱️ ความเสี่ยงไทม์มิ่ง: คุณพลาดจุดออกไป 5 นาทีและโดนบดขยี้ การเทรดสวิงคือการพนัน', zh: '⏱️ 时机以此以此风险。你以此以此以此以 5 分钟之差以此以此以此以此错过了以此以此以此退出并以此以此以此被以此以此以此以此粉碎。以此以此交易摆动就是赌博。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_010',
        text: {
            en: '🔐 The Cybersecurity Breach: A bank client just got hacked. Data of 1M users stolen. They want to delay disclosure for 1 month to fix the stock price and sell insider shares.',
            th: '🔐 การรั่วไหลความปลอดภัยไซเบอร์: ลูกค้าแบงก์เพิ่งโดนแฮ็ก ข้อมูลผู้ใช้ 1 ล้านคนถูกขโมย พวกเขาต้องการชะลอการเปิดเผย 1 เดือนเพื่อพยุงราคาหุ้นและขายหุ้นผู้บริหาร',
            zh: '🔐 网络以此以此以此安全以此以此以此以此以此以此漏洞：一位以此以此以此银行以此以此客户以此以此刚刚以此以此以此被黑。100 万以此以此用户的以此以此以此数据以此以此以此被盗。他们以此以此希望以此以此延迟以此以此以此以此披以此以此露 1 个月，以以此以此修复以此以此股价并以此以此出售以此以此内部以此以此以此股票。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Immediate PR: "Disclose NOW. If you hide it and sell shares, that is criminal fraud. Transparency limits damage."', th: '🚫 PR ทันที: "เปิดเผยเดี๋ยวนี้ ถ้าคุณซ่อนและขายหุ้น นั่นมันฉ้อโกงอาชญากรรม ความโปร่งใสจำกัดความเสียหาย"', zh: '🚫 以此以此立即公关："现在以此以此以此披露。如果你以此以此以此隐瞒并出售以此以此以此股票，那就是以此以此以此犯罪欺诈。透明度以此以此以此以此限制损害。"' }, consequence: { en: '🛡️ Painful Protection. Stock drops 10%, but no jail time. You saved the executives from prison.', th: '🛡️ การปกป้องที่เจ็บปวด: หุ้นตก 10% แต่ไม่ต้องติดคุก คุณช่วยผู้บริหารจากคุก', zh: '🛡️ 痛以此以此以此苦的以此以此保护。以此以此股票以此以此以此以此下跌 10%，但无需以此以此以此以此坐牢。你以此以此以此拯救了以此以此以此以此以此高管免于以此以此以此以此入狱。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🤐 Secure the Bag: "Help them coordinate the block sale before the news drops. Take a 2% cut."', th: '🤐 เก็บกระเป๋า: "ช่วยพวกเขาประสานงานขาย Block trade ก่อนข่าวหลุด ขอส่วนแบ่ง 2%"', zh: '🤐 以此以此以此以此以此以此以此保住以此以此以此包："在以此以此新闻以此以此以此发布之前以此以此帮助他们以此以此以此以此协调以此以此大以此以此宗以此以此交易。抽取 2% 的以此以此以此以此以此以此以此分成。"' }, consequence: { en: '🚔 FBI Open Up. This is textbook insider trading. Everyone goes to federal prison.', th: '🚔 FBI เปิดประตู: นี่คือ Insider Trading ตามตำรา ทุกคนไปนอนคุกกลาง', zh: '🚔 FBI以此开以此以此以此以此门。这是以此以此以此教科书式的以此以此内幕交易。每个人以此以此以此以此以此都要去以此以此以此以此联邦以此以此监狱。' }, stats: { competence: 20, ethics: -50, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '🛠️ The "Tech Glitch" Coverup: "Blame it on a \'maintenance outage\' while quietly patching security. Deny any theft."', th: '🛠️ ปิดบังด้วย "บั๊กเทคนิค": "อ้างว่าเป็น \'ปิดปรับปรุง\' ในขณะที่แอบแก้แพทช์เงียบๆ ปฏิเสธการขโมย"', zh: '🛠️ "技术以此以此故障"以此以此以此掩饰："在以此以此悄悄以此以此以此修补以此以此安全以此问题以此的同时，以此以此以此以此将其归以此以此咎于\'维护以此以此中断\'。否认任何以此以此盗窃行为。"' }, consequence: { en: '💣 Ticking Time Bomb. Hackers release the data on the dark web. The coverup is worse than the crime.', th: '💣 ระเบิดเวลา: แฮ็กเกอร์ปล่อยข้อมูลใน Dark Web การปิดบังเลวร้ายกว่าอาชญากรรมเดิม', zh: '💣 定以此以此时以此炸以此弹。黑客在以此以此暗以此以此以此网上以此以此发布以此以此以此数据。掩以此以此盖比以此以此犯罪以此以此以此以此以此以此以此以此更以此以此以此糟糕。' }, stats: { competence: 25, ethics: -30, leadership: -20, innovation: 20 } },
            { id: 'D', text: { en: '🕵️ Anonymous Tip: "Don\'t get involved. anonymously tip off a tech journalist. Let the news break externally."', th: '🕵️ เบาะแสลับ: "อย่าไปยุ่ง ให้เบาะแสลับนักข่าวไอที ให้ข่าวหลุดจากภายนอก"', zh: '🕵️ 以此以此以此匿以此以此以此以此以此以此名提示："不要以此以此以此以此以此以此卷入以此以此以此以此以此其中。以此以此以此以此匿名以此以此向以此以此以此科技以此以此以此以此记者以此以此以此爆料。让以此以此新闻以此以此以此从外部以此以此以此爆发。"' }, consequence: { en: '🍿 Watch it Burn. You keep your hands clean. The bank suffers, but you are not liable for their choices.', th: '🍿 นั่งดูมันไหม้: มือคุณสะอาด แบงก์รับกรรม แต่คุณไม่ต้องรับผิดชอบทางเลือกพวกเขา', zh: '🍿 看着以此以此以此以此以此它燃烧。你保持以此以此以此以此以此以此双手以此以此以此以此干净。以此以此银行以此以此以此以此以此受以此以此以此损，但你不以此以此对他们的以此以此以此以此以此以此以此选择以此以此负责。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 30 } }
        ]
    },
    {
        id: 'financial_analyst_011',
        text: {
            en: '🌽 The Commodity Squeeze: A drought is hitting corn futures. You own warehouses of corn. You can hoard it to spike prices further (causing food shortages) or release supply.',
            th: '🌽 การบีบสินค้าโภคภัณฑ์: ภัยแล้งถล่มฟิวเจอร์สข้าวโพด คุณมีโกดังข้าวโพด คุณจะกักตุนเพื่อปั่นราคา (ทำให้ขาดแคลนอาหาร) หรือปล่อยของ',
            zh: '🌽 商品以此以此挤以此以此以此以此压：以此以此干旱正在以此以此以此以此打击以此以此玉米期货。你拥有以此以此以此玉米仓库。你可以以此以此以此以此以此以此囤以此以此以此积它以以此以此进一步以此以此推高以此以此价格（导致以此以此以此以此以此食物以此以此以此以此短缺）或释放以此以此以此以此以此供应。'
        },
        options: [
            { id: 'A', text: { en: '🔒 Corner the Market: "Hold everything. Create artificial scarcity. Sell when corn hits $10/bushel."', th: '🔒 ต้อนเข้ามุม: "เก็บทุกอย่าง สร้างความขาดแคลนเทียม ขายตอนข้าวโพดแตะ 10 เหรียญ"', zh: '🔒 垄以此以此以此断市场："掌控以此以此以此以此一切。以此以此以此以此以此制造人以此以此以此以此为以此以此以此稀缺。当玉米达到以此以此以此 $10/蒲式耳时以此以此以此出售。"' }, consequence: { en: '💰 Blood Money. Profits are insane. People starve in developing nations. You are a villain.', th: '💰 เงินเปื้อนเลือด: กำไรมหาศาล คนอดอยากในประเทศกำลังพัฒนา คุณคือตัวร้าย', zh: '💰 以此以此以此血以此以此钱。利润是以此以此以此以此疯狂的。发展以此可以此以此中国家的人以此以此以此以此们以此以此挨饿。你是个以此以此以此坏人。' }, stats: { competence: 50, ethics: -50, leadership: -30, innovation: 10 } },
            { id: 'B', text: { en: '🚜 Steady Release: "Release supply slowly to stabilize prices. Make a decent profit without causing a famine."', th: '🚜 ปล่อยสม่ำเสมอ: "ปล่อยของช้าๆ เพื่อตรึงราคา ทำกำไรพอควรโดยไม่ก่อทุพภิกขภัย"', zh: '🚜 稳以此以此定以此以此以此释放："缓慢以此以此以此释放以此以此以此以此供应以以此以此稳定以此以此价格。在不以此以此造成饥荒的情况下以此以此以此以此获得以此以此以此以此体面的以此以此以此利润。"' }, consequence: { en: '⚖️ Responsible Trading. You balance profit and social duty. Regulators approve your market conduct.', th: '⚖️ การเทรดรับผิดชอบ: คุณสมดุลกำไรและหน้าที่สังคม ก.ล.ต. อนุมัติพฤติกรรมตลาดคุณ', zh: '⚖️ 负责任的以此以此以此交易。你平衡了以此以此以此利润和以此社会责任。监管以此以此以此机构以此以此以此以此认可你的以此以此以此市场以此行为。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '📉 Panic Dump: "The drought might end early. Sell everything now before prices drop!"', th: '📉 ขายตื่นตระหนก: "ภัยแล้งอาจจบเร็ว ขายทุกอย่างตอนนี้ก่อนราคาลง!"', zh: '📉以此 以此以此恐慌以以此抛以此以此售："以此以此以此以此以此干旱可能以此以以此早就会以此以此以此结束。在以此以此价格以以此以此下跌以此以此之前以此以此以此以此以此立即出售以此以此以此一切！"' }, consequence: { en: '💸 Premature Exit. Prices double after you sell. You left millions on the table. Client anger.', th: '💸 ออกก่อนกำหนด: ราคาเด้งสองเท่าหลังคุณขาย คุณทิ้งเงินล้าน ลูกค้าโกรธ', zh: '💸 过早以此以此以此以此以此退出。价格在以此以此以此你出售后以此以此以此以此翻了一番。你以此以此以此损失了以此以此以此数百万。以此以此以此客户以此以此以此愤怒。' }, stats: { competence: 20, ethics: 30, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🤝 Government Deal: "Sell directly to strategic reserves at a fixed premium. Guaranteed profit, zero risk."', th: '🤝 ดีลรัฐบาล: "ขายตรงให้คลังสำรองยุทธศาสตร์ในราคาพรีเมียมคงที่ กำไรชัวร์ ปิดประตูขาดทุน"', zh: '🤝 以此以此政府交易："以以此以此以此固定的以此以此溢价以此以此直接以此以此以此出售给以此以此战略以此以此储备。保证利润，零风险。"' }, consequence: { en: '🛡️ Safe Haven. Not the max profit, but risk-free. A solid, defensive play.', th: '🛡️ หลุมหลบภัย: ไม่ใช่กำไรสูงสุด แต่ไร้ความเสี่ยง การเล่นเกมรับที่แข็งแกร่ง', zh: '🛡️以此以 避风以此以此以此港。不是以此以此最大以此利润，但无以此以此风险。稳健的作为以此以此以此以此防御性以此以此操作。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 30 } }
        ]
    },
    {
        id: 'financial_analyst_012',
        text: {
            en: '🎲 The Derivative House of Cards: You discover your firm has $1T in exposure to a complex derivative that nobody understands. If rates rise 0.5%, the firm implodes.',
            th: '🎲 บ้านไพ่อนุพันธ์: คุณค้นพบว่าบริษัทคุณมีสถานะ 1 ล้านล้านในอนุพันธ์ซับซ้อนที่ไม่มีใครเข้าใจ ถ้าดอกเบี้ยขึ้น 0.5% บริษัทระเบิดแน่',
            zh: '🎲 衍以此以此以此生以此以此以此品纸以此以此以此以此以此牌屋：你发现你的以此以此以此以此以此公司持有 1 万亿美元的以此以此以此以此复杂衍生品以此以此以此以此敞口，没人以此以此以此理解。如果以此以此以此以此利率上升 0.5%，以此以此以此公司就会以此以此以此以此崩溃。'
        },
        options: [
            { id: 'A', text: { en: '📉 Unwind Quietly: "Slowly sell off the position over 6 months. Take small losses to avoid panic."', th: '📉 ทยอยออกเงียบๆ: "ค่อยๆ ขายสถานะออกใน 6 เดือน ยอมขาดทุนน้อยๆ เพื่อเลี่ยงความแตกตื่น"', zh: '📉 悄以此以此以此悄以此以此平以此以此以此仓："在 6 个月内以此以此以此以此缓慢以此以此以此以此卖出以此以此头寸。承受以此以此以此小额以此以此损失以以此以此以此以此以此以此避免以此以此以此恐慌。"' }, consequence: { en: '🧘 Crisis Management. You narrowly escape before rates hike. The firm loses 2% but survives. Good job.', th: '🧘 การจัดการวิกฤต: คุณเฉียดตายก่อนดอกเบี้ยขึ้น บริษัทขาดทุน 2% แต่รอด เยี่ยม', zh: '🧘 以此以此危机以此以此以此以此以此以此管理。你在以此以此加息前以此以此以此勉强以此以此以此逃以此以此以此脱。公司损失 2% 但幸以此存以此以此以此下来。干以此以此以此得好。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 30 } },
            { id: 'B', text: { en: '🎰 Double Down: "Buy interest rate swaps to hedge. Add more complexity to fix complexity."', th: '🎰 ทบต้น: "ซื้อ Interest Rate Swaps มาป้องกันความเสี่ยง เพิ่มความซับซ้อนเพื่อแก้ความซับซ้อน"', zh: '🎰 双以此以此以此倍下以此以此以此注："购买以此以此利率互以此以此以此换进行以此以此以此以此对冲。增加以此以此以此以此以此更多以此复杂性以以此解决以此以此以此复杂性。"' }, consequence: { en: '🤯 Explosion. The hedge correlation fails. The hole gets bigger. You created a black hole.', th: '🤯 ระเบิด: ความสัมพันธ์สินทรัพย์ Hedge ล้มเหลว หลุมใหญ่กว่าเดิม คุณสร้างหลุมดำ', zh: '🤯 爆以此以此以此炸。以此以此对冲以以此以此相以此以以此关性以此以此失效。洞以此以此以此以此变大以此以此了。你制造了一个以此以此以此黑洞。' }, stats: { competence: 10, ethics: 10, leadership: -30, innovation: -20 } },
            { id: 'C', text: { en: '🏃 Defect: "Resign immediately. Sell your personal shares. Let someone else hold the bag."', th: '🏃 หนีทัพ: "ลาออกทันที ขายหุ้นส่วนตัว ให้คนอื่นถือระเบิดแทน"', zh: '🏃 以此以此以此以此以此以此叛以此以此以此以此变："立即辞以此以此以此职。卖掉你的以此以此以此个人以此以此股票。让别人以此以此以此以此以此背黑锅。"' }, consequence: { en: '🏚️ Survivor. The firm collapses 3 months later. You are safe, but your reputation is "The Rat who ran".', th: '🏚️ ผู้รอดชีวิต: บริษัทล่มใน 3 เดือนถัดมา คุณรอด แต่ชื่อเสียงคือ "หนูที่วิ่งหนี"', zh: '🏚️ 幸以此以此以此存以此以此以此以此者。以此以此公司 3 个月后以此以此倒闭。你是安全以此以此以此以此的，但你的以此以此以此以此名声是"以此以此以此逃跑的以此以此以此以此老鼠"。' }, stats: { competence: 30, ethics: -30, leadership: -40, innovation: 0 } },
            { id: 'D', text: { en: '📢 Board Presentation: "Force a meeting with the Board. Show the risk models. Demand immediate deleveraging."', th: '📢 นำเสนอบอร์ด: "บังคับประชุมบอร์ด โชว์โมเดลความเสี่ยง เรียกร้องการลดหนี้ทันที"', zh: '📢 董事以此以此以此会演以此以此以此示："以此以此以此强制以此以此以此与董事以此以此会以此以此以此开会。展示以此以此以此风险以此以此以此模型。要求以此以此立即以此以此以此以此以此去杠杆化。"' }, consequence: { en: '⚖️ Tough Call. The Board is furious but follows your advice. You save the firm but make enemies.', th: '⚖️ การตัดสินใจยาก: บอร์ดโกรธจัดแต่ทำตามคำแนะนำ คุณกู้บริษัทแต่สร้างศัตรู', zh: '⚖️ 以此以此艰难的以此以此以此以此以此呼叫。董事会以此以此以此以此很愤怒，但听从以此以此以此以此了你的以此以此以此以此建议。你挽救以此以此以此以此了公司，但也以此以此以此制造了敌人。' }, stats: { competence: 50, ethics: 50, leadership: 45, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_013',
        text: {
            en: '📱 The Finfluencer War: A TikTok "High Finance" guru with 5M followers is attacking your stock analysis calling you a "boomer fraud". His followers are spamming your email.',
            th: '📱 สงคราม Finfluencer: กูรู "การเงินชั้นสูง" บน TikTok ผู้ติดตาม 5 ล้านคนกำลังโจมตีบทวิเคราะห์หุ้นของคุณ เรียกคุณว่า "คนแก่ขี้โกง" ผู้ติดตามเขาสแปมอีเมลคุณ',
            zh: '📱 网以此以此以此红大以此以此以此战：一位拥有 500 万以此以此以此以此以此粉丝的 TikTok "高等以此以此以此以此以此以此以此以此金融"以以此此类 大以此以此师以此以此正在以此以此以此以此以此攻击你的以此以此以此股票分析，称你为"以此以此以此老以此以此以此骗子"。他的以此以此以此粉丝以此以此正在以此以此垃圾以此以此邮件攻击你。'
        },
        options: [
            { id: 'A', text: { en: '⚔️ Debate Him: "Challenge him to a live streamed debate. Expose his lack of basic financial knowledge."', th: '⚔️ โต้วาที: "ท้าเขาโต้วาทีสด แฉความรู้งูๆ ปลาๆ ของเขา"', zh: '⚔️ 以此以此以此以此与他以此以此以此以此辩以以此论："挑战他以此以此以此以此以此以此以此以此进行以此以此以此以此以此直播辩论。以此以此揭露他缺乏以此以此以此以此基本金以此以此以此融知识。"' }, consequence: { en: '🥊 Knockout. You destroy him with facts. His followers turn on him. Viral victory.', th: '🥊 น็อคเอาท์: คุณทำลายเขาด้วยข้อเท็จจริง ผู้ติดตามหันมาเล่นงานเขา ชัยชนะไวรัล', zh: '🥊 以此以此以此淘汰以此赛。你用以此以此以此以此以此事实摧毁了他。他的粉以此以此丝以此反以此以此以此以此以此以此以此以此以此以此以此以此过来反对以此以此以此以此以此他。病毒以此以此以此以此以此以此式胜利。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'B', text: { en: '🤐 Ignore: "Don\'t feed the trolls. His attention span is 15 seconds. He will move on next week."', th: '🤐 เพิกเฉย: "อย่าให้อาหารเกรียน ความสนใจเขาแค่ 15 วินาที สัปดาห์หน้าก็ไปสนใจเรื่องอื่น"', zh: '🤐 以此以此以此忽略："不要以此以此以此以此喂以此以此食以此以此以此以此以此以此巨魔。他的以此以此注意力持续以此以此以此时间为 15 秒。他以此以此以此下周就会以此以此以此以此转移以此以此以此以此以此目标。"' }, consequence: { en: '🛡️ Professionalism. It hurts temporarily, but you maintain dignity. Clients respect the silence.', th: '🛡️ ความเป็นมืออาชีพ: เจ็บชั่วคราวแต่รักษาศักดิ์ศรี ลูกค้าเคารพในความเงียบ', zh: '🛡️ 以此以此以此专以以此业精神。以此以此以此以此以此虽然以此以此以此以此以此以此以此暂时以此以此以此以此以此以此很痛苦，但你以此以此以此以保持了尊以此以此以此以此严。客户尊重以此以此以此以此沉默。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '⚖️ Sue for Libel: "Lawyer up. Send a cease and desist. Damages for reputation loss."', th: '⚖️ ฟ้องหมิ่นประมาท: "จ้างทนาย ส่งจดหมายเตือน ค่าเสียหายฐานเสียชื่อเสียง"', zh: '⚖️ 以此以此以此控以此以此告诽以以此谤："聘请律师。发以此以此送以此以此以此以此停止以此以此以此令。名誉以此以此以此以此以此损失以此以此以赔偿。"' }, consequence: { en: '📢 Streisand Effect. Suing makes it bigger news. You look like a bully attacking a "kid". Bad PR.', th: '📢 Streisand Effect: การฟ้องทำให้เรื่องดังกว่าเดิม คุณดูเหมือนอันธพาลรังแก "เด็ก" พีอาร์แย่', zh: '📢 史以以此以此以此翠以此以此以此以此珊以此以此以此以此以此效应。以此以此以此起诉以此以此以此会以此以此以此以此以此成以此以此为此以此更大以此的以此以此新闻。你看起以以此以此来像一个以此以此以此以此攻击"以以此以以此孩子"的以此以此以此恶霸。以此以此以此以此以此以此以以此糟糕的以此公关。' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: -10 } },
            { id: 'D', text: { en: '🤝 Collab: "Offer to educate his audience. \'I see your point, let\'s look at the balance sheet together\'."', th: '🤝 ร่วมมือ: "เสนอให้ความรู้ผู้ติดตามเขา \'ฉันเห็นประเด็นคุณ มาดูงบดุลด้วยกันเถอะ\'"', zh: '🤝 以此以此以此以合以此以此以此作："以此以此提以此以此议以此以此教育以此以此以此他的以此受众。 \'我以此以此明白你的意思，我们以此以此以此以此一起来看以此以此以此以此资产负以此以此债以此表。\'"' }, consequence: { en: '🤝 Bridge Builder. You win him over. He becomes an advocate for financial literacy. Huge reach increase.', th: '🤝 ผู้สร้างสะพาน: คุณซื้อใจเขาได้ เขาช่วยโปรโมทความรู้การเงิน การเข้าถึงเพิ่มมหาศาล', zh: '🤝 以此桥以此以此以此以此梁建以此以此以此设者。你赢以此以此以此以此得了他的支以此以此持。他以此以此成以此以此为此以此以此了金融素以此以此养的以此以此以此倡导者。以此以此巨大以此以的影响力以以此此以此增长。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'financial_analyst_014',
        text: {
            en: '🏗️ Infrastructure Bond: A developing nation needs funds for a dam. It will displace 50,000 villagers but power the whole country. The bond yield is 12%.',
            th: '🏗️ พันธบัตรโครงสร้างพื้นฐาน: ประเทศกำลังพัฒนาต้องการเงินสร้างเขื่อน มันจะทำให้ชาวบ้าน 50,000 คนต้องย้ายถิ่นฐาน แต่จะผลิตไฟฟ้าได้ทั้งประเทศ ผลตอบแทนพันธบัตรคือ 12%',
            zh: '🏗️ 基础设施债券：一个发展中国家需要资金以此以此以此以此以此以此建设大坝。以此以此以此以此以此它将以此以此以此以此以此流离失所 5 万村民，但为以此以此以此以此以此以此整个以此以此以此以此以此以此国家提供以此以此以此以此以此电力。债券收益率为 12%。'
        },
        options: [
            { id: 'A', text: { en: '💰 Buy Aggressively: "Energy is progress. The greater good outweighs the villagers. Plus, 12% is alpha."', th: '💰 ซื้อดุดัน: "พลังงานคือความก้าวหน้า ประโยชน์ส่วนรวมสำคัญกว่าชาวบ้าน แถม 12% นี่คืออัลฟ่า"', zh: '💰 积极以此以此以此以此购买："能源以此以此以此以此以此就是进步。以此以此以此以此以此巨以此以此大利以此以此以此以此以此以此익以此以此以此以此以此以此以此以此以此大于村民。另外，12% 是以此以此以此以此以此阿尔法。"' }, consequence: { en: '📈 High Yield Hero. The bond performs. You face some protests, but your P&L is stellar.', th: '📈 ฮีโร่ผลตอบแทนสูง: พันธบัตรทำผลงานดี คุณเจอประท้วงบ้าง แต่กำไรขาดทุนสวยหรู', zh: '📈 以此以此以此以此以此以此以此高收益以此以此以此以此以此以此英雄。以此以此以此以此债券以此以此表现以此以此以此以此以此以此良好。你面临一些以此以此以此以此抗议，但你的以此以此以此以此以此损益表以此以此以此以此以此辉煌。' }, stats: { competence: 50, ethics: -20, leadership: 10, innovation: 10 } },
            { id: 'B', text: { en: '🛑 ESG Veto: "Cannot invest. Violation of human rights. It fails our social screening criteria."', th: '🛑 ESG ยับยั้ง: "ลงทุนไม่ได้ ละเมิดสิทธิมนุษยชน ไม่ผ่านเกณฑ์การคัดกรองทางสังคมของเรา"', zh: '🛑 ESG 以此以此以此以此以此否决："不能以此以此以此以此以此以此投资。以此以此以此以此以此违反以此以此人权。它未能以此以此以此以此以此通过以此以此以此以此我们的以此以此以此以此以此以此以此社会以此以此以此以此筛选以此以此以此标准。"' }, consequence: { en: '🛡️ Principles First. You miss the yield, but avoid a PR nightmare when videos of forced relocations surface.', th: '🛡️ หลักการต้องมาก่อน: คุณพลาดผลตอบแทน แต่เลี่ยงฝันร้าย PR ตอนคลิปบังคับย้ายถิ่นหลุดออกมา', zh: '🛡️ 原则以此以此以此以此以此以此至上。你以此以此错以此以此以此以此以此以此以此以此以此失了以此以此以此收益，但当以此以此以此以此以此以此以此强制以此以此以此以此以此以此拆迁以此以此以此以此以此视频以此以此以此以此以此浮出以此以此以此水面时，你以此以此以此以此以此避免了一场以此以此以此以此以此以此公关以此以此以此以此噩梦。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Impact Overlay: "Buy, but attach covenants requiring fair compensation for displaced villagers. Enforce it."', th: '🤝 ซ้อนทับผลกระทบ: "ซื้อ แต่แนบข้อสัญญาบังคับให้จ่ายค่าชดเชยชาวบ้านอย่างยุติธรรม บังคับใช้จริง"', zh: '🤝 以此以此以此以此以此以此影响力以此以此以此以此以此以此覆盖："购买，但以此以此以此以此以此附带以此以此以此以此以此以此契约以此以此以此以此以此以此以此以此要求以此以此以此以此为以此以此以此以此以此以此以此以此以此流离失所的以此以此以此以此以此村民以此以此以此以此以此提供公平以此以此以此以此以此赔偿。以此以此以此以此以此以此强制以此以此以此以此以此以此以此以此以此以此执行。"' }, consequence: { en: '🌟 Sustainable Finance. Hard to negotiate, but you set a new standard for development bonds. Win-Win.', th: '🌟 การเงินยั่งยืน: เจรจายาก แต่คุณสร้างมาตรฐานใหม่ให้พันธบัตรการพัฒนา วิน-วิน', zh: '🌟 可以此以此以此以此持续以此以此以此金融。很难以此以此以此以此以此谈判，但你为以此以此以此以此以此以此以此以此以此发展以此以此以此以此以此以此债券树立了以此以此以此以此以此以此新标准。双赢。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '📉 Short the Currency: "Social unrest will tank their economy. Short the currency while others buy the bond."', th: '📉 Short ค่าเงิน: "ความไม่สงบทางสังคมจะพังเศรษฐกิจเขา Short ค่าเงินในขณะที่คนอื่นซื้อพันธบัตร"', zh: '📉 以此以此以此以此做空以此以此以此货币："社会以此以此以此以此以此动荡以此以此以此将以此以此以此以此使以此以此以此以此以此他们的以此以此以此以此以此以此以此以此以此经济以此以此以此以此以此以此以此陷入以此以此以此以此以此以此困境。在以此以此以此以此以此以此别人以此以此以此以此购买以此以此以此以此以此以此以此以此债券时以此以此以此以此以此做空以此以此以此以此以此货币。"' }, consequence: { en: '🧠 Macro Play. The bond defaults due to riots. The currency crashes. You profit massively from the chaos.', th: '🧠 การเล่นมหภาค: พันธบัตรผิดนัดหนี้เพราะจลาจล ค่าเงินพัง คุณกำไรมหาศาลจากความวุ่นวาย', zh: '🧠 以此以此以此以此宏观以此以此以此以此操作。以此以此以此以此以此以此以此债券因以此以此以此以此以此骚乱而以此以此以此以此以此违约。货币以此以此以此以此以此暴跌。你从以此以此以此以此以此以此以此以此混乱中以此以此以此以此以此以此以此以此获得了以此以此以此以此以此以此巨大以此以此之以此以此以此以此之以此利润。' }, stats: { competence: 50, ethics: 0, leadership: 20, innovation: 40 } }
        ]
    },
    {
        id: 'financial_analyst_015',
        text: {
            en: '🚢 Supply Chain Shock: A blockage in the Suez Canal creates a shipping crisis. Retail stocks will tank. Logistics stocks will soar. You can front-run the news.',
            th: '🚢 วิกฤตซัพพลายเชน: การอุดตันในคลองสุเอซสร้างวิกฤตการขนส่ง หุ้นค้าปลีกจะร่วง หุ้นโลจิสติกส์จะพุ่ง คุณดักหน้าข่าวได้',
            zh: '🚢 供应链以此以此以此以此以此以此以此冲击：苏伊士以此以此以此以此运河的以此以此以此以此堵塞以此以此以此以此造成了以此以此以此以此以此航运以此以此以此以此危机。零售以此以此以此以此以此以此股票以此以此以此以此将以此以此以此以此以此以此以此以此暴跌。物流以此以此以此以此以此股票以此以此以此以此将以此以此以此以此以此以此以此以此飙升。你可以以此以此以此以此以此以此抢在以此以此以此以此以此新闻以此以此以此以此以此之前以此以此以此以此以此行动。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Logistical Long: "Max leverage on shipping companies. Calls on freight rates. This is a once-in-a-decade distortion."', th: '🚀 ซื้อโลจิสติกส์: "เลเวอเรจสูงสุดในบริษัทเดินเรือ ซื้อ Call Option ค่าระวางเรือ นี่คือความบิดเบี้ยวรอบทศวรรษ"', zh: '🚀 物流以此以此以此以此多头："对以此以此以此以此以此航运以此以此以此以此公司使用最大以此以此以此以此以此以此以此杠杆。以此以此以此以此以此以此以此以此买入以此以此以此以此以此以此以此运价以此以此以此以此以此以此以此看涨期权。这是以此以此以此以此以此十年以此以此以此以此以此一遇的以此以此以此以此以此扭曲。"' }, consequence: { en: '💰 Super Profit. The blockage lasts weeks. Your portfolio doubles.', th: '💰 ซูเปอร์กำไร: การอุดตันยืดเยื้อเป็นสัปดาห์ พอร์ตคุณโตสองเท่า', zh: '💰 超级以此以此以此以此以此利润。以此以此以此以此堵塞以此以此以此以此持续以此以此以此以此以此以此以此以此数周。你的以此以此以此以此以此以此以此以此以此组合以此以此以此以此以此翻倍。' }, stats: { competence: 50, ethics: 30, leadership: 30, innovation: 30 } },
            { id: 'B', text: { en: '📢 Inform Clients: "Send an urgent blast to all clients to rotate sectors. Prioritize service over personal accounts."', th: '📢 แจ้งลูกค้า: "ส่งข้อความด่วนให้ลูกค้าทุกคนหมุนกลุ่มอุตสาหกรรม ให้ความสำคัญกับบริการก่อนบัญชีส่วนตัว"', zh: '📢 通知以此以此以此以此以此以此客户："向以此以此以此以此以此以此以此以此以此以此所有以此以此以此以此以此客户以此以此以此以此以此发送以此以此以此以此紧急以此以此以此以此以此通知以以此以此以此以此以此以此以此以此以此以此以此以此以此旋转以此以此以此以此以此以此板块。优先以此以此以此以此以此考虑以此以此以此以此以此服务而不是以此以此以此以此以此个人以此以此以此以此以此账户。"' }, consequence: { en: '🏆 Top Rated. Returns are lower than A, but client retention hits 100%. Trust creates long-term value.', th: '🏆 อันดับหนึ่ง: ผลตอบแทนต่ำกว่าข้อ A แต่ลูกค้าอยู่ต่อ 100% ความไว้ใจสร้างมูลค่าระยะยาว', zh: '🏆 最以此以此以此以此高以此以此以此以此以此评价。以此以此以此以此以此以此以此回报率以此以此以此以此低于 A，但以此以此以此以此以此客户以此以此以此以此以此以此以此留存率以此以此以此以此达到 100%。以此以此以此以此以此以此以此信任以此以此以此以此创造以此以此以此以此长期以此以此以此以此价值。' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '📉 Panic Short Retail: "Short every retailer with just-in-time inventory. They will have empty shelves for Christmas."', th: '📉 ตื่นตระหนก Short ค้าปลีก: "Short ร้านค้าปลีกทุกเจ้าที่ใช้ระบบ Just-in-time ชั้นวางของพวกเขาจะว่างเปล่าช่วงคริสต์มาส"', zh: '📉 恐慌以此以此以此以此做空以此以此以此以此以此以此零售："以此以此以此以此做空以此以此以此以此以此以此以此以此以此每一个以此以此以此以此以此以此采用以此以此以此以此以此以此以此准时以此以此以此以此以此以此以此制库存的以此以此以此以此以此零售商。他们的以此以此以此以此以此以此以此以此以此货架以此以此以此以此以此在圣诞节以此以此以此以此以此将空空如也。"' }, consequence: { en: '🐻 Bear Raid Success. Retail stocks crush. You profit, though some accuse you of predatory behavior.', th: '🐻 Bear Raid สำเร็จ: หุ้นค้าปลีกพัง คุณกำไร แม้บางคนจะหาว่าคุณเป็นพวกนักล่า', zh: '🐻 熊市以此以此以此以此以此以此以此以此突袭以此以此以此以此成功。零售以此以此以此以此以此以此股票以此以此以此以此以此以此以此以此崩盘。你以此以此以此以此以此以此以此以此获利，尽管以此以此以此以此以此以此以此以此以此以此有以此人以此以此以此以此以此指责你以此以此以此以此以此行为以此以此以此以此以此以此以此掠夺。' }, stats: { competence: 45, ethics: 10, leadership: 20, innovation: 20 } },
            { id: 'D', text: { en: '🤷 Wait and See: "Shipping delays are often resolved quickly. Don\'t trade headlines. Wait for confirmation."', th: '🤷 รอดู: "ความล่าช้าขนส่งมักแก้เร็ว อย่าเทรดตามพาดหัวข่าว รอการยืนยัน"', zh: '🤷以此以此 观以此以此以此以此以此以此望："运输以此以此以此以此以此以此延迟以此以此以此以此通常以此以此以此以此以此以此会以此以此以此以此很快以此以此以此以此以此解决。不要以此以此以此以此以此交易以此以此以此以此头条以此以此以此以此新闻。以此以此以此以此等待以此以此以此以此以此确认。"' }, consequence: { en: '🐢 Opportunity Cost. You miss the biggest trade of the year. Caution cost you millions.', th: '🐢 ต้นทุนเสียโอกาส: คุณพลาดการเทรดใหญ่สุดในรอบปี ความระมัดระวังทำคุณเสียเงินล้าน', zh: '🐢以此以此以此 以此机会以此以此以此以此以此成本。你以此以此以此以此错过了以此以此以此以此以此年度以此以此以此以此最大以此以此以此以此的以此以此以此以此以此以此以此以此以此交易。以此以此以此以此以此以此以此谨慎以此以此以此以此让你以此以此以此以此损失了以此以此以此以此数百万。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: -10 } }
        ]
    },
    {
        id: 'financial_analyst_016',
        text: {
            en: '👑 The CEO\'s Nephew: The CEO\'s nephew is applying for an internship. He is unqualified and lazy. Hiring him secures political capital. Rejecting him asserts standards.',
            th: '👑 หลานชาย CEO: หลานชายซีอีโอกำลังสมัครฝึกงาน เขาไม่มีคุณสมบัติและขี้เกียจ การจ้างเขาได้ทุนทางการเมือง การปฏิเสธคือการยืนยันมาตรฐาน',
            zh: '👑 CEO 的以此以此以此以此以此侄子：CEO 的以此以此以此以此侄子以此以此以此以此正在以此以此以此以此以此申请以此以此以此以此实习。他不以此以此以此以此以此以此合格且以此以此以此以此以此以此懒惰。以此以此以此以此以此雇用他可以此以此以此以此以此获得以此以此以此以此以此政治以此以此以此以此资本。以此以此以此以此拒绝他以此以此以此以此以此以此则以此以此以此以此坚持了以此以此以此以此标准。'
        },
        options: [
            { id: 'A', text: { en: '👋 Hire Him: "Put him in a corner office with Netflix. Keep the CEO happy. It\'s a small price for job security."', th: '👋 จ้างเขา: "เอาเขาไปไว้ห้องมุมพร้อม Netflix ทำให้ซีอีโอพอใจ ราคาเล็กน้อยแลกความมั่นคงงาน"', zh: '👋 雇用他："把以此以此以此他以此放在以此以此以此以此以此以此以此带 Netflix 的以此以此以此以此以此以此角以此以此以此落以此以此以此以此办公室。让 CEO 以此以此以此以此开心。这是以此以此以此以此以此为了以此以此以此以此以此以此以此工作以此以此以此以此安全以此以此以此付出的小以此以此以此以此以此代价。"' }, consequence: { en: '👔 Politics 101. The CEO favors you for promotions. The team resents the nepotism.', th: '👔 การเมือง 101: ซีอีโอโปรดปรานคุณสำหรับการเลื่อนขั้น ทีมไม่พอใจระบบเส้นสาย', zh: '👔以此以此以此以此 政治 101。CEO 在以此以此以此以此以此晋升以此以此以此方面以此以此以此以此偏袒你。团队以此以此以此以此以此以此对以此以此以此以此裙带以此以此以此以此关系以此以此以此以此感到以此以此以此以此以此愤恨。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🚫 Hard Reject: "Refer to HR policies. We only hire the best. If he wants in, he passes the exam."', th: '🚫 ปฏิเสธแข็งกร้าว: "อ้างนโยบาย HR เราจ้างแค่คนดีที่สุด ถ้าอยากเข้า ก็ต้องสอบผ่าน"', zh: '🚫以此以此 坚以此以此以此以此决拒绝："以此以此以此参考以此以此以此以此人力资源以此以此以此以此以此政策。我们只以此以此以此以此雇用以此以此以此以此最好的。如果他想以此以此以此以此以此以此进去，他以此以此以此以此必须以此以此以此以此通过以此以此以此以此考试。"' }, consequence: { en: '🛡️ Standards Upheld. The CEO is cold to you, but your team respects your backbone.', th: '🛡️ รักษามาตรฐาน: ซีอีโอเย็นชากับคุณ แต่ทีมเคารพในกระดูกสันหลังของคุณ', zh: '🛡️ 坚持以此以此以此以此以此标准。CEO 对你以此以此以此冷淡，但你的以此以此以此以此以此团队以此以此以此以此尊重你的以此以此以此以此以此以此以此骨气。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🏫 Mentor Him: "Hire him, but ride him hard. Teach him finance. Make him earn his keep or quit."', th: '🏫 เป็นพี่เลี้ยง: "จ้างเขา แต่เคี่ยวหนักๆ สอนการเงินเขา ให้เขาทำงานคุ้มค่าจ้างหรือไม่ก็ลาออกเอง"', zh: '🏫 指导他："雇用他，但以此以此以此以此以此严厉以此以此以此以此以此管教他。教他以此以此以此以此以此以此以此金融。让他以此以此以此以此以此以此赚取以此以此以此以此薪水以此以此以此以此或以此以此以此以此以此以此退出。"' }, consequence: { en: '👨‍🏫 Transformation. He actually learns. The CEO is impressed you fixed his spoiled nephew.', th: '👨‍🏫 การเปลี่ยนแปลง: เขาเรียนรู้จริงๆ ซีอีโอประทับใจที่คุณแก้สปอยล์หลานเขาได้', zh: '👨‍🏫以此以此以此 蜕变。他以此以此以此以此以此确实以此以此以此以此学到了以此以此以此以此以此以此东西。CEO 对你以此以此以此以以此纠正了他以此以此以此以此被以此以此以此以此宠以此以此以此坏的以此以此以此以此以此以此以此以此以此侄子以此以此以此以此以此感到以此以此以此以此印象以此以此以此深刻。' }, stats: { competence: 40, ethics: 40, leadership: 50, innovation: 20 } },
            { id: 'D', text: { en: '🔄 Pass the Buck: "Recommend him to a competitor. \'He is too talented for us\'. Sabotage the rival firm."', th: '🔄 โยนกลอง: "แนะนำเขาให้คู่แข่ง \'เขาเก่งเกินไปสำหรับเรา\' วางยาบริษัทคู่แข่ง"', zh: '🔄以此以此以此以此 推卸以此以此以此以此以此责任："把他以此以此以此以此推荐给以此以此以此以此以此竞争对手。\'他以此以此以此以此以此对以此以此以此以此我们以此以此以此以此以此来说以此以此以此以此以此太以此以此以此以此以此有以此以此以此以此以此以才华以此以此以此以此以此了\'。以此以此以此以此以此破坏以此以此以此以此竞争以此以此以此对手以此以此以此以此以此公司。"' }, consequence: { en: '🃏 4D Chess. The rival hires him, and he messes up their spreadsheets. Hilarious and effective.', th: '🃏 หมากรุก 4 มิติ: คู่แข่งจ้างเขา และเขาทำสเปรดชีตพัง ขำขันและได้ผล', zh: '🃏 4D 国际以此以此以此以此以此以此象棋。以此以此竞争以此以此以此对手以此以此以此以此以此以此以此雇用了他，他以此以此以此以此搞砸了他们的以此以此以此以此电子以此以此以此以此表格。以此以此以此以此以此以此以此既以此以此以此以此可笑又以此以此以此以此以此以此以此有效。' }, stats: { competence: 30, ethics: 10, leadership: 10, innovation: 40 } }
        ]
    },
    {
        id: 'financial_analyst_017',
        text: {
            en: '☁️ The Cloud Migration: The bank wants to move core trading systems to the cloud to save money. Latency might increase by 5ms. In HFT, 5ms is eternity.',
            th: '☁️ การย้ายขึ้นคลาวด์: แบงก์ต้องการย้ายระบบเทรดหลักขึ้นคลาวด์เพื่อประหยัดเงิน ความหน่วงอาจเพิ่ม 5ms ใน HFT 5ms คือชั่วนิรันดร์',
            zh: '☁️ 云以此以此以此迁以此以此以此移：以此以此以此以此以此银行以此以此以此希望将以此以此以此核心以此以此以此以此以此以此以此以此交易以此以此以此以此以此系统以此以此以此以此以此迁移到以此以此以此以此以此云端以以此以此以此以此以此以此以此节省以此以此以此以此以此资金。延迟可能以此以此以此以此以此以此以此增加 5 毫秒。在 HFT 中，5 毫秒就是以此以此以此以此以此永恒。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Veto the Move: "Performance over cost. We lose our edge with that latency. Keep servers on-premise."', th: '🛑 ยับยั้งการย้าย: "ประสิทธิภาพสำคัญกว่าราคา เราเสียความได้เปรียบด้วยความหน่วงนั้น เก็บเซิร์ฟเวอร์ไว้ที่เดิม"', zh: '🛑 否决以此以此以此以此此以此以此以此举："以此以此以此以此性能以此以此以此以此高于以此以此以此以此以此以此成本。我们因为以此以此以此以此这种以此以此以此以此延迟失去了以此以此以此以此优势。将以此以此以此以此服务器以此以此以此保留在以此以此以此本地。"' }, consequence: { en: '🛡️ Edge Protected. Costs stay high, but trading profits remain dominant. Tech team grumbles.', th: '🛡️ ปกป้องความได้เปรียบ: ต้นทุนสูงเท่าเดิม แต่กำไรการเทรดยังคงครอบงำ ทีมเทคบ่น', zh: '🛡️ 优势以此以此以此以此以此得到以此以此以此以此以此保护。以此以此以此以此成本以此以此以此保持以此以此以此居高在此以此以此以此下，但以此以此以此以此以此交易以此以此以此以此以此以此利润以此以此以此以此以此保持以此以此以此主导以此以此以此以此以此以此地位。以此以此以此以此技术以此以此以此以此以此团队以此以此以此以此以此以此抱怨。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: -10 } },
            { id: 'B', text: { en: '🤝 Hybrid Solution: "Move data storage to cloud, keep execution engines on expensive co-located servers."', th: '🤝 โซลูชันลูกผสม: "ย้ายที่เก็บข้อมูลขึ้นคลาวด์ เก็บ Execution Engine ไว้บนเซิร์ฟเวอร์ Co-located ราคาแพง"', zh: '🤝 混合以此以此以此以此以此以此以此解决以此以此以此以此以此方案："将以此以此以此数据存储以此以此以此以此迁移到以此以此以此以此以此云端，将以此以此以此以此执行以此以此以此以此引擎以此以此以此以此保留在以此以此以此以此以此昂贵的以此以此以此以此以此主机托管以此以此以此以此以此服务器上。"' }, consequence: { en: '🧠 Best of Both. You save some money while keeping speed where it counts. Smart architecture.', th: '🧠 ดีที่สุดทั้งสองทาง: คุณประหยัดเงินได้บ้างในขณะที่รักษาความเร็วในจุดที่สำคัญ สถาปัตยกรรมฉลาด', zh: '🧠 两全以此以此以此以此以此其美。你以此以此以此以此以此节省了一些以此以此以此以此资金，以此以此以此以此同时在以此以此以此以此关键以此以此以此以此以此以此以此部位以此以此以此以此保持了以此以此以此速度。以此以此以此以此以此智能以此以此以此以此以此以此架构。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 } },
            { id: 'C', text: { en: '💸 Full Cloud: "Adapt the algos to be less latency-sensitive. Save the budget. The future is cloud."', th: '💸 คลาวด์เต็มรูปแบบ: "ปรับอัลกอให้ไวต่อความหน่วงน้อยลง ประหยัดงบ อนาคตคือคลาวด์"', zh: '💸 全以此以此以此以此以此云："以此以此以此调整以此以此以此以此以此以此算法以以此以此以此降低对以此以此以此以此延迟的以此以此以此以此敏感度。以此以此以此以此以此以此以此节省以此以此以此以此以此预算。以此以此以此以此以此以此以此未来是以此以此以此以此以此云。"' }, consequence: { en: '📉 Strategy Shift. You lose HFT dominance but pivot to smarter, longer-term strategies. Risky transition.', th: '📉 เปลี่ยนกลยุทธ์: คุณเสียการครอง HFT แต่หันไปหากลยุทธ์ระยะยาวที่ฉลาดขึ้น การเปลี่ยนผ่านที่เสี่ยง', zh: '📉 策略以此以此以此以此以此以此以此转移。你以此以此失去 HFT 以此以此以此以此以此主导地位，但以此以此以此以此以此转向以此以此以此以此以此更以此以此以此以此以此聪明、以此以此以此以此以此更以此以此以此以此以此长期的以此以此以此策略。风险以此以此以此以此以此以此以此以此以此以此以此以此以此以此以此以此以此以此过渡。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 40 } },
            { id: 'D', text: { en: '🤷 Ignore Tech: "I just trade. Let IT figure it out. If P&L drops, I blame them."', th: '🤷 เมินเทค: "ฉันแค่เทรด ให้ IT จัดการ ถ้ากำไรตก ฉันโทษพวกเขา"', zh: '🤷 忽略以此以此以此以此以此以此以此技术："我只是以此以此以此以此交易。让 IT 部门以此以此以此以此去以此以此以此以此搞定。如果以此以此以此以此以此损益以此以此以此以此以此以此下降，我以此以此以此以此怪以此以此以此以此以此他们。"' }, consequence: { en: '🔥 Disaster. The migration happens, trades fail, you lose millions. Blaming IT doesn\'t fix the P&L.', th: '🔥 หายนะ: การย้ายเกิดขึ้น เทรดล้มเหลว คุณเสียเงินล้าน การโทษ IT ไม่ช่วยแก้ตัวเลขกำไร', zh: '🔥 灾难。以此以此以此以此以此以此以此迁移以此以此以此以此发生，以此以此以此交易以此以此以此以此失败，你损失了以此以此以此以此数百万。以此以此以此以此以此怪以此以此IT 部门以此以此以此以此并不能以此以此以此以此以此以此以此修复以此以此以此以此损益。' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_018',
        text: {
            en: '⛏️ Rare Earth Monopoly: China restricts rare earth exports. A mine in Greenland is the only alternative, but it\'s in a pristine nature reserve. Financing it destroys the reserve.',
            th: '⛏️ การผูกขาดแร่หายาก: จีนจำกัดการส่งออกแร่หายาก เหมืองในกรีนแลนด์เป็นทางเลือกเดียว แต่อยู่ในเขตสงวนธรรมชาติที่บริสุทธิ์ การให้ทุนทำลายเขตสงวน',
            zh: '⛏️ 稀土以此以此以此以此以此垄断：以此以此以此以此中国以此以此以此以此限制以此以此以此以此稀土以此以此以此以此出口。以此以此以此以此以此格陵兰岛的以此以此以此以此一座以此以此以此以此矿山是以此以此以此以此唯一的以此以此以此以此替代以此以此以此以此以此选择，但它位于以此以此以此以此以此以此原生态的以此以此以此以此以此以此自然以此以此以此以此保护区内。为以此以此以此以此以此以此其提供以此以此以此以此以此融资将以此以此以此以此以此摧毁保护区。'
        },
        options: [
            { id: 'A', text: { en: '💰 Finance It: "Strategic necessity. We need chips and EVs. Nature is the cost of progress."', th: '💰 ให้ทุน: "ความจำเป็นเชิงยุทธศาสตร์ เราต้องการชิปและ EV ธรรมชาติคือต้นทุนความก้าวหน้า"', zh: '💰 为以此以此以此以此此融资："战略以此以此以此以此以此必要性。我们需要以此以此以此以此芯片和以此以此以此以此以此以此以此电动汽车。自然是以此以此以此以此以此以此进步的以此以此以此以此代价。"' }, consequence: { en: '🏭 Industrial Victory. The West gets its metals. You get rich. The reserve is a toxic pit.', th: '🏭 ชัยชนะอุตสาหกรรม: ตะวันตกได้โลหะ คุณรวย เขตสงวนกลายเป็นบ่อพิษ', zh: '🏭 工业以此以此以此以此以此以此以此胜利。以此以此以此西方以此以此以此以此以此以此以此获得了以此以此以此金属。你以此以此以此以致富。保护区成以此以此以此为此了一个以此以此以此以此以此有毒的以此以此以此以此以此以此坑。' }, stats: { competence: 40, ethics: -40, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '♻️ Recycling Tech: "Decline the mine. Invest heavily in rare earth recycling startups instead. Solve the problem cleanly."', th: '♻️ เทคโนโลยีรีไซเคิล: "ปฏิเสธเหมือง ลงทุนหนักในสตาร์ทอัพรีไซเคิลแร่หายากแทน แก้ปัญหาอย่างสะอาด"', zh: '♻️ 回收以此以此以此以此以此以此以此技术："以此以此以此拒绝以此以此以此以此以此矿山。以此以此以此转而以此以此以此以此重金以此以此以此以此以此投资以此以此以此以此以此稀土以此以此以此回收以此以此以此以此以此以此以此初创以此以此以此以此以此企业。以此以此以以此以此干以此以此以此以此净地以此以此以此以此解决以此以此以此以此以此以此以此问题。"' }, consequence: { en: '🧪 Tech Breakthrough. High risk, but it pays off. You solve the shortage without the environmental destruction.', th: '🧪 การฝ่าฟันทางเทคโนโลยี: เสี่ยงสูง แต่คุ้มค่า คุณแก้ปัญหาขาดแคลนได้โดยไม่ทำลายสิ่งแวดล้อม', zh: '🧪以此以此 技术以此以此以此以此以此以此突破。以此以此以此以此以此高风险，但以此以此以此以此以此以此以此得到了以此以此以此以此以此回报。你在以此以此以此以此以此没有以此以此以此以此以此以此以此破坏以此以此以此以此以此环境的情况下以此以此以此以此以此解决了以此以此以此以此以此短缺以此以此问题。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 } },
            { id: 'C', text: { en: '🤝 Offset Deal: "Finance the mine but mandate 10x funding for a new reserve elsewhere. Net positive biodiversity (theoretically)."', th: '🤝 ดีลชดเชย: "ให้ทุนเหมือง แต่บังคับให้จ่ายเงิน 10 เท่าสร้างเขตสงวนใหม่ที่อื่น ความหลากหลายทางชีวภาพสุทธิเป็นบวก (ในทางทฤษฎี)"', zh: '🤝以此 抵消以此以此以此以此以此以此交易："为以此以此以此以此以此矿山以此以此以此以此提供以此以此以此以此融资，但以此以此以此以此强制以此以此以此以此以此以此要求以此以此以此以此在以此以此以此以此以此其他以此以此以此以此地方以此以此以此以此为以此以此以此以此以此以此新以此以此以此以此保护区以此以此以此以此以此以此提供 10 倍的以此以此以此以此以此资金。以此以此以此生物以此以此以此以此以此多样性以此以此以此以此净正值（理论上）。"' }, consequence: { en: '⚖️ Pragmatic Compromise. The mine gets built. The new reserve is okay. Better than nothing.', th: '⚖️ การประนีประนอมเชิงปฏิบัติ: เหมืองถูกสร้าง เขตสงวนใหม่ก็โอเค ดีกว่าไม่ได้อะไร', zh: '⚖️以此以此 务以此以此以此以此实以此以此以此以此以此以此的妥以此以此以此以此协。以此以此以此矿山以此以此以此以此建成。以此以此以此以此以此以此以此新保护区还以此以此以此以此不错。总比以此以此以此以此以此以此以此以此什么都没有好。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '📉 Ignore Geopolitics: "Just trade the metal futures. Don\'t get involved in the mining projects. Not my expertise."', th: '📉 เมินภูมิรัฐศาสตร์: "แค่เทรดฟิวเจอร์สโลหะ อย่าไปยุ่งกับโปรเจกต์เหมือง ไม่ใช่ความเชี่ยวชาญฉัน"', zh: '📉以此以此以此 忽略以此以此以此以此以此地缘以此以此以此以此以此政治："只以此以此以此以此交易以此以此以此以此金属以此以此以此以此期货。不要以此以此以此以此以此以此卷入以此以此以此以此以此以此采矿以此以此以此以此以此项目。不是我的以此以此以此以此以此以此以此以此专长。"' }, consequence: { en: '🙈 Missed Boat. You make small trading profits, but miss the chance to shape the supply chain.', th: '🙈 ตกรถ: คุณทำกำไรเทรดเล็กน้อย แต่พลาดโอกาสกำหนดทิศทางซัพพลายเชน', zh: '🙈以此以此以此 错以此以此以此以此以此以此过以此以此以此以此以此以此以此以此机会。你以此以此以此以赚取了以此以此以此以此微薄的以此以此以此以此以此交易以此以此以此以此利润，但以此以此以此以此以此以此错以此以此以此以此过了以此以此以此以此以此以此塑以此以此以此以此造以此以此以此以此以此以此以此供应链的以此以此以此以此以此以此以此机会。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_019',
        text: {
            en: '🎲 The SPAC Craze: Every celebrity is launching a SPAC (Special Purpose Acquisition Company). Returns are garbage, but fees are high. Your firm wants to launch "Crypto-AI-Cannabis SPAC".',
            th: '🎲 กระแส SPAC: ดาราทุกคนกำลังเปิด SPAC ผลตอบแทนขยะ แต่ค่าฟีสูง บริษัทคุณอยากเปิด "Crypto-AI-Cannabis SPAC"',
            zh: '🎲 SPAC 以此以此以此以此以此以此热潮：以此以此以此以此以此以此每个以此以此以此以此名人以此以此以此以此以此以此都在以此以此以此以此以此以此以此以此以此推出以此以此以此 SPAC（特殊以此以此以此以此目的以此以此以此以此以此以此以此收购以此以此以此以此公司）。回报以此以此以此以此以此是垃圾，但以此以此以此以此以此以此费用以此以此以此以此很高。你的以此以此以此以此以此公司以此以此以此以此想以此以此以此以此以此以此推出 "加密-AI-以此以此以此以此以此以此大麻 SPAC"。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Launch It: "The market wants dumpsters on fire? We sell them dumpsters on fire. Collect the fee."', th: '🚀 เปิดเลย: "ตลาดต้องการถังขยะไฟไหม้? เราก็ขายถังขยะไฟไหม้ให้ เก็บค่าฟี"', zh: '🚀以此以此 推出它："市场以此以此以此以此以此想要以此以此以此以此以此着火的以此以此以此以此以此以此垃圾以此以此以此以此箱？我们以此以此以此以此以此以此以此卖给以此以此以此以此以此他们以此以此以此以此以此着火的以此以此以此以此以此以此垃圾以此以此以此以此箱。收取以此以此以此以此费用。"' }, consequence: { en: '💸 Easy Money. You make $20M fees. The stock goes to $0.01 in a year. Investors hate you.', th: '💸 เงินง่าย: คุณทำเงินค่าฟี 20 ล้าน หุ้นเหลือ 0.01 ในปีเดียว นักลงทุนเกลียดคุณ', zh: '💸以此以此 轻松以此以此以此以此赚钱。你以此以此以此赚取了 2000 万美元的以此以此以此以此以此以此以此费用。以此以此以此以此股票在以此以此以此以此以此以此以此一年内以此以此以此以此跌至 0.01 美元。以此以此以此以此投资者以此以此以此以此以此恨你。' }, stats: { competence: 30, ethics: -50, leadership: -20, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Refuse to Lead: "This is a scam. I wont put my name on the prospectus. It destroys our brand."', th: '🛑 ปฏิเสธเป็นผู้นำ: "นี่มันสแกม ฉันจะไม่ใส่ชื่อฉันในหนังสือชี้ชวน มันทำลายแบรนด์เรา"', zh: '🛑 拒绝以此以此以此以此领以此以此导："这是以此以此以此以此一个以此以此以此以此骗局。我以此以此以此以此不会在以此以此以此以此招股以此以此以此以此以此说明以此以此以此书上以此以此以此以此署名。它以此以此以此以此以此以此以此以此摧毁以此以此以此以此我们的以此以此以此以此品牌。"' }, consequence: { en: '🛡️ Brand Saver. The SPAC bubble bursts globally. Your firm looks smart for staying out.', th: '🛡️ ผู้กอบกู้แบรนด์: ฟองสบู่ SPAC แตกทั่วโลก บริษัทคุณดูฉลาดที่ไม่อยู่ในวง', zh: '🛡️以此以此 品牌以此以此以此以此以此以此以此以此拯救以此以此以此以此者。SPAC 泡沫在以此以此以此以此以此以此全球以此以此以此以此范围内以此以此以此以此以此破裂。你的以此以此以此以此以此公司因以此以此以此以此以此置以此以此以此以此身以此以此以此事外而以此以此以此以此以此以此显得以此以此以此以此以此以此明智。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🔬 Pivot to Quality: "Launch a SPAC, but target a boring, profitable industrial firm. No hype, just value."', th: '🔬 หันหาคุณภาพ: "เปิด SPAC แต่เล็งเป้าบริษัทอุตสาหกรรมน่าเบื่อที่มีกำไร ไม่เอา Hype เอาแต่มูลค่า"', zh: '🔬 转向以此以此以此以此以此质量："推出以此以此以此以此 SPAC，但以以此以此以此以此以此以此无聊、以此以此以此以此盈利的以此以此以此以此以此以此工业以此以此以此以此公司为以此以此以此以此以此目标。没有以此以此以此以此以此以此炒作，以此以此以此只有以此以此以此以此价值。"' }, consequence: { en: '📈 Solid Return. It doesn\'t moon, but it doesn\'t crash. Investors appreciate the stability.', th: '📈 ผลตอบแทนมั่นคง: ไม่พุ่งทะยาน แต่ไม่พังทลาย นักลงทุนชื่นชมความมั่นคง', zh: '📈以此以此以此 以此稳以此以此以此以此健的以此以此以此以此以此回报。它以此以此以此以此以此没有以此以此以此以此暴涨，但也没有以此以此以此以此以此以此崩盘。以此以此以此以此以此投资者以此以此以此以此赞以此以此以此赏这种以此以此以此以此以此以此稳定性。' }, stats: { competence: 45, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🎭 Short the Competitors: "Don\'t launch one. Create a basket of shorts of other people\'s garbage SPACs."', th: '🎭 Short คู่แข่ง: "ไม่ต้องเปิด สร้างตะกร้า Short SPAC ขยะของคนอื่นแทน"', zh: '🎭以此以此 做空以此以此以此以此以此以此竞争以此以此以此对手："不要以此以此以此以此以此推出。创建一个以此以此以此以此以此做空以此以此以此以此其他人以此以此以此以此垃圾 SPAC 的以此以此以此以此以此以此一篮子以此以此以此以此以此以此组合。"' }, consequence: { en: '🐻 Profitable cynicism. You profit from the stupidity of the market. A classic analyst play.', th: '🐻 การมองโลกในแง่ร้ายที่ทำกำไร: คุณกำไรจากความโง่ของตลาด การเล่นแบบนักวิเคราะห์คลาสสิก', zh: '🐻以此以此以此 有以此以此以此以此以此利以此以此可图的以此以此以此以此以此愤世嫉俗。你从以此以此以此以此以此以此市场的以此以此以此以此以此以此以此以此愚蠢中以此以此以此以此获利。以此以此以此以此经典的以此以此以此以此以此分析师以此以此以此以此玩法。' }, stats: { competence: 45, ethics: 20, leadership: 20, innovation: 30 } }
        ]
    },
    {
        id: 'financial_analyst_020',
        text: {
            en: '🌾 The Food Inflation: Wheat prices are up 40%. Poor countries are facing riots. You can advise clients to buy wheat futures (pushing prices higher) or invest in agri-tech.',
            th: '🌾 เงินเฟ้ออาหาร: ราคาข้าวสาลีพุ่ง 40% ประเทศยากจนกำลังเจอจลาจล คุณสามารถแนะนำลูกค้าให้ซื้อฟิวเจอร์สข้าวสาลี (ดันราคาสูงขึ้น) หรือลงทุนใน Agri-tech',
            zh: '🌾以此 食品以此以此以此以此以此通以此以此胀：小麦以此以此以此以此以此以此以此价格以此以此以此以此以此以此上涨了 40%。贫以此以此穷以此以此国家以此以此以此以此以此以此正以此以此以此以此面临以此以此以此以此骚乱。你可以以此以此以此以此以此建议以此以此以此以此客户以此以此以此以此以此以此以此购买以此以此以此以此小麦以此以此以此以此期货（推以此以此以此以此高以此以此以此以此价格）或以此以此以此以此以此投资于以此以此以此以此以此农业以此以此以此以此以此科技。'
        },
        options: [
            { id: 'A', text: { en: '📈 Buy Futures: "Trend following. The trend is up. We are here to make money, not feed the world."', th: '📈 ซื้อฟิวเจอร์ส: "เกาะเทรนด์ เทรนด์กำลังขาขึ้น เรามาที่นี่เพื่อทำเงิน ไม่ใช่เลี้ยงโลก"', zh: '📈 购买以此以此以此以此以此期货："以此以此以此以此趋势以此以此以此以此跟踪。以此以此以此以此以此趋势以此以此以此以此以此是以此以此以此以此以此向上。我们以此以此以此以此在这里是为了以此以此以此以此以此赚钱，而不是以此以此以此以此以此喂以此以此以此以此饱以此以此以此以此世界。"' }, consequence: { en: '💰 Profit & Starvation. You crush the benchmark. People starve. Can you look in the mirror?', th: '💰 กำไรและความอดอยาก: คุณชนะเกณฑ์มาตรฐานราบคาบ ผู้คนอดอยาก คุณส่องกระจกได้ลงคอไหม?', zh: '💰 以此以此以此利润与以此以此以此以此以此饥饿。你以此以此以此以粉碎了以此以此以此以此以此基准。以此以此以此以此以此人们以此以此以此以此以此挨饿。你能以此以此以此以此以此照镜子吗？' }, stats: { competence: 40, ethics: -40, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🚜 Invest in Agri-Tech: "Capitalize startups making drought-resistant crops. Long term solution, long term yield."', th: '🚜 ลงทุน Agri-Tech: "ให้ทุนสตาร์ทอัพทำพืชทนแล้ง ทางแก้ระยะยาว ผลตอบแทนระยะยาว"', zh: '🚜 投资以此以此以此以此以此农业以此以此以此以此以此以此科技："资助以此以此以此以此以此以此制造以此以此以此以此抗旱以此以此以此以此作物的以此以此以此以此初创以此以此以此以此以此企业。长期以此以此以此以此以此解决以此以此以此以此方案，长期以此以此以此以此以此以此收益。"' }, consequence: { en: '🌱 Innovation Win. The tech works. Yields improve. You profit while lowering food prices.', th: '🌱 ชัยชนะนวัตกรรม: เทคโนโลยีได้ผล ผลผลิตดีขึ้น คุณกำไรในขณะที่ลดราคาอาหาร', zh: '🌱 创新以此以此以此以此以此胜利。以此以此以此以此技术以此以此以此以此奏效。产量以此以此以此以此以此以此提高。你在以此以此以此以此降低以此以此以此食品以此以此以此以此以此以此价格的以此以此以此以此同时以此以此以此以此获利。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 } },
            { id: 'C', text: { en: '📉 Short Supermarkets: "High input costs will crush supermarket margins. Short the retailers."', th: '📉 Short ซูเปอร์มาร์เก็ต: "ต้นทุนวัตถุดิบสูงจะบดขยี้กำไรซูเปอร์มาร์เก็ต Short ผู้ค้าปลีก"', zh: '📉以此 做空以此以此以此以此以此以此超市："高以此以此以此以此以此以此投入以此以此以此以此以此以此成本将以此以此以此以此以此以此粉碎以此以此以此以此以此超市以此以此以此以此的以此以此以此以此利润。以此以此以此以此以此做空以此以此以此以此以此以此以此零售商。"' }, consequence: { en: '🧠 Hedged Bet. A smart second-order thinking trade. Profitable and ethically neutral.', th: '🧠 การเดิมพันแบบป้องกันความเสี่ยง: การคิดชั้นที่สองที่ฉลาด กำไรและเป็นกลางทางจริยธรรม', zh: '🧠以此以此 以此对冲以此以此以此以此以此以此赌以此以此以此注。以此以此以此以此明智的以此以此以此以此二以此以此以此以此以此以此阶以此以此以此以此以此以此思维以此以此以此以此以此交易。以此以此以此以此有以此以此以此以此利以此以此以此以此可以此以此以此以此图且以此以此以此以此在道以此以此以此以此以此德上以此以此以此以此中立。' }, stats: { competence: 45, ethics: 20, leadership: 20, innovation: 30 } },
            { id: 'D', text: { en: '🌍 Lobby for Aid: "Use connections to get government aid for farmers. Stabilize the supply chain."', th: '🌍 ล็อบบี้ขอความช่วยเหลือ: "ใช้คอนเนกชันขอเงินช่วยเหลือรัฐบาลให้ชาวนา ทำให้ซัพพลายเชนเสถียร"', zh: '🌍 游以此以此以此以此说以此以此以此以此以免以此以此以此以此援助："利用以此以此以此以此以此关系以此以此以此以此为以此以此以此以此以此农民以此以此以此以此争取以此以此以此以此以此以此以此以此政府以此以此以此以此以此援助。以此以此以此以此以此稳定以此以此以此以此以此以此以此供应链。"' }, consequence: { en: '🤝 Policy Maker. Markets stabilize. You don\'t make alpha, but you gain political capital.', th: '🤝 ผู้กำหนดนโยบาย: ตลาดเสถียร คุณไม่ได้อัลฟ่า แต่ได้ทุนทางการเมือง', zh: '🤝以此以此 决策者。以此以此以此以此市场以此以此以此以此以此稳定。你没有以此以此以此以此以此制造以此以此以此以此以此阿尔法，但你以此以此以此以获得了以此以此以此以此以此以此政治以此以此以此以此资本。' }, stats: { competence: 30, ethics: 40, leadership: 45, innovation: 10 } }
        ]
    },
    {
        id: 'financial_analyst_021',
        text: {
            en: '⚡ The Energy Crisis: Winter is coming. Gas reserves are low. You can bet on gas prices skyrocketing (hurting the poor) or fund a rapid solar rollout (slower payout).',
            th: '⚡ วิกฤตพลังงาน: ฤดูหนาวกำลังมา ทุนสำรองก๊าซต่ำ คุณจะเดิมพันราคาก๊าซพุ่ง (ทำร้ายคนจน) หรือให้ทุนโซลาร์แบบเร่งด่วน (คืนทุนช้ากว่า)',
            zh: '⚡ 能源以此以此以此以此以此危机：凛冬以此以此以此以此将至。以此以此以此天然气以此以此以此以此以此以此储备以此以此以此以此以此以此以此不以此以此以此以此足。你可以以此以此以此以此以此押注以此以此以此以此以此以此天然气以此以此以此以此以此以此以此价格以此以此以此以此以此以此暴涨（以此以此以此以此以此以此伤害以此以此以此以此穷人）或以此以此以此以此资助以此以此以此以此快速以此以此以此以此以此推广以此以此以此以此以此太阳能（回以此以此以此以此以此以付款以此以此以此较慢）。'
        },
        options: [
            { id: 'A', text: { en: '🔥 Long Gas: "Supply and demand. People need heat. Prices will triple. Buy futures."', th: '🔥 ซื้อก๊าซ: "อุปสงค์อุปทาน คนต้องการความร้อน ราคาจะพุ่ง 3 เท่า ซื้อฟิวเจอร์ส"', zh: '🔥以此 以此做多以此以此以此以此以此天然气："供以此以此以此以此以此需以此以此以此以此以此以此关系。人们以此以此以此以此以此以此以此需要以此以此以此以此热量。以此以此以此以此价格将以此以此以此以此以此以此翻以此以此以此以此三倍。购买以此以此以此以此以此期货。"' }, consequence: { en: '❄️ Cold Hard Cash. You profit immensely. Pensioners freeze. Public anger rises.', th: '❄️ เงินเย็นเจี๊ยบ: คุณกำไรมหาศาล คนแก่หนาวตาย ความโกรธแค้นสาธารณะพุ่ง', zh: '❄️ 冷以此以此以此酷的以此以此以此以此以此现金。你以此以此以此以此以此获利以此以此以此以此以此丰厚。以此以此以此以此养老以此以此以此以此以此以此金以此以此以此以此以此领取者以此以此以此以此以此以此受冻。公众以此以此以此以此以此愤怒以此以此以此以此以此以此情绪以此以此以此以此高涨。' }, stats: { competence: 45, ethics: -30, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '☀️ Solar Bridge: "Fund portable solar/battery units. Sell them to consumers. Decentralize the grid."', th: '☀️ สะพานโซลาร์: "ให้ทุนหน่วยโซลาร์/แบตเตอรี่พกพา ขายให้ผู้บริโภค กระจายศูนย์กริด"', zh: '☀️ 太阳能以此以此以此以此以此以此以此以此以此桥梁："以此以此以此资助以此以此以此以此以此便携式以此以此以此以此以此以此以此太阳能/以此以此以此以此以此以此电池以此以此以此以此以此以此以此以此以此以此单元。以此以此以此以此以此以此将它们以此以此以此以此以此出售给以此以此以此以此以此以此消费者。以此以此以此以此以此去以此以此以此以此以此以此以此中心化以此以此以此以此电网。"' }, consequence: { en: '🔋 Resilience. Slower profit, but huge adoption. You own the future of distributed energy.', th: '🔋 ความยืดหยุ่น: กำไรช้ากว่า แต่คนใช้เยอะมหาศาล คุณเป็นเจ้าของอนาคตพลังงานกระจายศูนย์', zh: '🔋 韧性。以此以此以此以此以此以此以此利润以此以此以此以此以此较慢，但以此以此以此以此采用率以此以此以此以此以此极高。你以此以此以此以拥有以此以此以此以此以此以此以此以此分布式以此以此以此能源的以此以此以此以此未来。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 } },
            { id: 'C', text: { en: '☢️ Nuclear Option: "Lobby to restart old nuclear plants. It\'s the only emission-free baseload. Controversial but effective."', th: '☢️ ทางเลือกนิวเคลียร์: "ล็อบบี้ให้เดินเครื่องโรงไฟฟ้านิวเคลียร์เก่า เป็น Baseload เดียวที่ไร้มลพิษ ขัดแย้งแต่ได้ผล"', zh: '☢️ 核以此以此以此以此以此以此选项："游说以此以此以此以此重以此以此以此以此以此启以此以此以此以此旧以此以此以此以此以此核电站。这是以此以此以此以此以此以此以此唯一的以此以此以此以此以此零以此以此以此以此以此以此排放以此以此以此以此以此基载。以此以此以此以此有以此以此以此以此争议但以此以此以此以此以此有效。"' }, consequence: { en: '⚛️ Power Play. Governments agree out of desperation. You profit from uranium stocks.', th: '⚛️ เกมพลังงาน: รัฐบาลยอมเพราะจนตรอก คุณกำไรจากหุ้นยูเรเนียม', zh: '⚛️ 权力以此以此以此以此以此以此以此以此游戏。政府以此以此以此以此因以此以此以此以此绝望而以此以此以此以此同意。你从以此以此以此以此以此以此以此以此铀以此以此以此以此以此股票中以此以此以此以此获利。' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '📉 Hedge Everything: "The volatility will kill portfolios. Move 50% to cash and gold. Survive the winter."', th: '📉 Hedge ทุกอย่าง: "ความผันผวนจะฆ่าพอร์ต โยก 50% ไปถือเงินสดและทอง เอาชีวิตรอดฤดูหนาว"', zh: '📉 以此以此对冲以此以此以此以此以此以此一切："波动性将以此以此以此以此以此以此以此以此扼杀以此以此以此以此以此以此组合。将 50% 以此以此以此以此转移到以此以此以此以此以此现金和以此以此以此以此黄金。以此以此以此以此度过以此以此以此以此凛冬。"' }, consequence: { en: '🛡️ Safety First. Boring. You survive, but clients faced with inflation wanted better returns.', th: '🛡️ ปลอดภัยไว้ก่อน: น่าเบื่อ คุณรอด แต่ลูกค้าที่เจอเงินเฟ้อต้องการผลตอบแทนที่ดีกว่านี้', zh: '🛡️ 安全以此以此以此以此以此以此第一。以此以此以此无以此以此以此以此以此趣。你以此以此以此以此幸存下来，但以此以此以此以此以此面临以此以此以此以此通以此以此以此以此以此胀的以此以此以此以此以此客户以此以此以此以此以此以此以此想要以此以此以此以此以此更好的以此以此以此以此回报。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_022',
        text: {
            en: '🤖 The Algo Flash Crash: The market just dropped 9% in 5 minutes. No news. It\'s likely an algo cascade. You have 30 seconds to buy the dip or sell into the abyss.',
            th: '🤖 Algo Flash Crash: ตลาดเพิ่งร่วง 9% ใน 5 นาที ไม่มีข่าว น่าจะเป็นอัลกอพังพาบ คุณมี 30 วินาทีที่จะช้อนซื้อหรือขายตามลงเหว',
            zh: '🤖 算法以此以此以此以此以此以此闪以此以此以此以此以此崩：以此以此以此以此以此市场在 5 分钟内以此以此以此以此以此以此以此以此下跌了 9%。以此以此以此以此以此以此以此没有以此以此以此以此新闻。这很可能以此以此以此以此以此在此以此以此以此次是以此以此以此以此以此以此算法以此以此以此以此以此级联。你有 30 秒以此以此以此以此以此以此时间以此以此以此以此以此以此以此逢低以此以此以此以此以此买入或以此以此以此以此以此卖出以此以此以此以此以此以以此以此陷入以此以此以此以此以此以此深渊。'
        },
        options: [
            { id: 'A', text: { en: '🛒 Buy the Dip: "It\'s a glitch. Fundamentals didn\'t change in 5 minutes. Buy everything at -9% discount!"', th: '🛒 ช้อนซื้อ: "มันคือบั๊ก พื้นฐานไม่เปลี่ยนใน 5 นาทีหรอก กวาดซื้อทุกอย่างที่ส่วนลด -9%!"', zh: '🛒 以此以此逢以此以此以此以此低以此以此以此以此买入："以此以此以此以此这是以此以此以此以此以此以此一个以此以此以此以此以此以此以此以此以此故障。基本面以此以此以此以此以此在 5 分钟内以此以此以此以此以此以此没有以此以此以此以此改变。以 -9% 的以此以此以此以此折扣以此以此以此以此以此买入以此以此以此以此以此以此以此以此一切！"' }, consequence: { en: '🚀 V-Shape Recovery. The market bounces back in 10 minutes. You make a year\'s profit in an hour. Steel nerves.', th: '🚀 การฟื้นตัวรูปตัว V: ตลาดเด้งกลับใน 10 นาที คุณทำกำไรทั้งปีได้ในชั่วโมงเดียว ประสาทเหล็กชะมัด', zh: '🚀 V 型以此以此以此以此复苏。以此以此以此以此市场在 10 分钟内以此以此以此以此以此以此以此反弹。你在以此以此以此以此以此以此以此一以此以此以此以此以此以此小时内以此以此以此以此以此以此赚以此以此以此以此了以此以此以此以此以此一年的以此以此以此以此以此以此利润。钢铁般的以此以此以此以此以此以此以此神经。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '📉 Panic Sell: "Liquidity is gone! It could go to -20%. Preserve capital! Sell sell sell!"', th: '📉 ตื่นตระหนกขาย: "สภาพคล่องหายหมดแล้ว! มันอาจลงไป -20% รักษาเงินต้น! ขาย ขาย ขาย!"', zh: '📉以此 以此恐慌以此以此以此以此以此抛售："以此以此以此以此以此流动性以此以此以此以此以此以此消失了！它可能以此以此以此以此以此跌至 -20%。以此以此以此保全以此以此以此以此以此资本！卖！卖！卖！"' }, consequence: { en: '🤡 Bottom Ticked. You sell at the exact bottom. The market rallies immediately. You are the laughing stock.', th: '🤡 ขายที่ก้นเหว: คุณขายที่จุดต่ำสุดเป๊ะ ตลาดเด้งทันที คุณกลายเป็นตัวตลก', zh: '🤡 触以此以此以此以此以此底。你在以此以此以此以此以此以此以此确切的以此以此以此以此以此以此底部以此以此以此以此出售。以此以此以此以此市场以此以此以此以此立即以此以此以此以此以此反弹。你以此以此以此以成了以此以此以此以此以以此以此以此笑以此以此以此以此以此以此柄。' }, stats: { competence: 10, ethics: 20, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '🛑 Unplug: "Halt trading on our desk. Don\'t execute anything until we verify prices with a human broker via phone."', th: '🛑 ดึงปลั๊ก: "ระงับการเทรดบนโต๊ะเรา อย่าดำเนินการใดๆ จนกว่าเราจะยืนยันราคากับโบรกเกอร์มนุษย์ทางโทรศัพท์"', zh: '🛑 拔以此以此以此以此以此掉以此以此以此以此插头："以此以此以此以此停止以此以此以此以此我们以此以此以此以此办公以此以此以此桌上的以此以此以此以此交易。在通过以此以此以此以此以此电话与以此以此以此以此以此人类以此以此以此以此以此以此以此经纪人以此以此以此以此核实以此以此以此以此价格之前，不要以此以此以此以此执行任何以此以此以此以此以此操作。"' }, consequence: { en: '🛡️ Safe but Slow. You miss the recovery, but you were safe. In high-speed markets, old school is slow.', th: '🛡️ ปลอดภัยแต่ช้า: คุณพลาดการฟื้นตัว แต่คุณปลอดภัย ในตลาดความเร็วสูง วิธีโบราณมันช้า', zh: '🛡️ 安全但以此以此以此以此缓慢。你以此以此以此以此错过了以此以此以此以此复苏，但你是以此以此以此以此安全的。在以此以此以此以此高速以此以此以此以此以此以此以此市场中，老派以此以此以此以此以此是以此以此以此以此以此缓慢的。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: -20 } },
            { id: 'D', text: { en: '🤖 Arbitrage: "The crash is uneven. Tech down 15%, Banks down 2%. Buy Tech, Short Banks. Arbitrage the spread."', th: '🤖 อาร์บิทราจ: "การร่วงไม่เท่ากัน Tech ลง 15% Banks ลง 2% ซื้อ Tech Short Banks กินส่วนต่าง"', zh: '🤖 套以此以此以此以此利："崩溃以此以此以此以此以此是以此以此以此不以此以此以此以此以此均衡的。以此以此以此以此科技股以此以此以此以此以此下跌 15%，以此以此以此以此银行股以此以此以此以此下跌 2%。以此以此以此以此以此买入以此以此以此以此科技股，做空以此以此以此以此以此银行股。以此以此以此以此套利以此以此以此以此以此以此以此以此价差。"' }, consequence: { en: '🧠 Code G.O.A.T. You spotted the relative value dislocation in chaos. Incredible execution.', th: '🧠 โค้ดระดับเทพ: คุณเห็นความผิดปกติของมูลค่าสัมพัทธ์ในความโกลาหล การดำเนินการเหลือเชื่อ', zh: '🧠以此以此 代码 G.O.A.T. 你在以此以此以此以此以此混乱中以此以此以此以此以此以此发以此以此以此现了以此以此以此以此以此相以此以此以此以此对以此以此以此以此以此价值以此以此以此以此以此以此以此以此错位。以此以此以此以此以此以此以难以以此以此以此以此置信的以此以此以此以此执行力。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'financial_analyst_023',
        text: {
            en: '🎤 The Activist Investor: A famous activist investor is attacking a well-run family company, demanding they sell assets to boost short-term stock price. He asks for your analytical support.',
            th: '🎤 นักลงทุนสายปะทะ: นักลงทุนสายปะทะชื่อดังกำลังโจมตีบริษัทครอบครัวที่บริหารดี เรียกร้องให้ขายสินทรัพย์เพื่อปั้นราคาหุ้นระยะสั้น เขาขอให้คุณช่วยสนับสนุนบทวิเคราะห์',
            zh: '🎤 激进投资者：一位著名的激进投资者正在攻击一家经营良好的家族公司，要求他们出售资产以提振短期股价。他请求你的分析支持。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Join the Wolfpack: "Support him. The stock will pop 20%. We take profit and leave before the company struggles."', th: '🤝 เข้าร่วมฝูงหมาป่า: "สนับสนุนเขา หุ้นจะเด้ง 20% เราเอากำไรแล้วชิ่งก่อนบริษัทจะแย่"', zh: '🤝 加入狼群："支持他。股票将上涨 20%。我们获利并在公司陷入困境之前离开。"' }, consequence: { en: '💰 Raider Profit. You extract value. The company eventually declines, but your bonus is secured.', th: '💰 กำไรนักปล้น: คุณสูบมูลค่าออกมา บริษัทถดถอยในที่สุด แต่โบนัสคุณปลอดภัย', zh: '💰 掠夺者利润。你提取了价值。公司最终衰退，但你的奖金得到了保障。' }, stats: { competence: 40, ethics: -30, leadership: -20, innovation: 10 } },
            { id: 'B', text: { en: '🛡️ Defend the Firm: "Publish a counter-report highlighting their long-term compounding value. Fight the short-termism."', th: '🛡️ ปกป้องบริษัท: "ตีพิมพ์รายงานตอบโต้ เน้นย้ำมูลค่าทบต้นระยะยาวของพวกเขา ต่อสู้กับการมองสั้น"', zh: '🛡️ 捍卫公司："发布反驳报告，强调他们的长期复合价值。对抗短期主义。"' }, consequence: { en: '🛡️ Stewardship. The family owners are grateful. You win their banking business for life. Long-term win.', th: '🛡️ การดูแลรักษา: เจ้าของครอบครัวซาบซึ้ง คุณได้ธุรกิจธนาคารพวกเขาตลอดชีพ ชัยชนะระยะยาว', zh: '🛡️ 管家精神。家族所有者表示感谢。你赢得了他们终身的银行业务。长期胜利。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🍿 Stay Neutral: "It\'s a fight between billionaires. No upside in picking a side. Just observe."', th: '🍿 เป็นกลาง: "มันคือศึกระหว่างมหาเศรษฐี เลือกข้างไปก็ไม่ได้อะไร แค่ดูเฉยๆ"', zh: '🍿 保持中立："这是亿万富翁之间的争斗。站队没有好处。只是观察。"' }, consequence: { en: '🙈 Irrelevant. The market ignores you. Being neutral in a war means you have no voice.', th: '🙈 ไร้ตัวตน: ตลาดเมินคุณ การเป็นกลางในสงครามแปลว่าคุณไม่มีเสียง', zh: '🙈 无关紧要。市场忽略了你。在战争中保持中立意味着你没有发言权。' }, stats: { competence: 20, ethics: 20, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🎭 Broker a Deal: "Suggest a minor asset sale to appease the activist while keeping the core business intact. Mediator role."', th: '🎭 นายหน้าดีล: "เสนอให้ขายสินทรัพย์เล็กน้อยเพื่อสงบศึกนักลงทุน โดยรักษาธุรกิจหลักไว้ บทบาทคนกลาง"', zh: '🎭 促成交易："建议出售少量资产以安抚激进分子，同时保持核心业务完好无损。充当调解人角色。"' }, consequence: { en: '🤝 Master Diplomat. Both sides claim victory. You earn fees from the asset sale. Perfection.', th: '🤝 นักการทูตชั้นครู: ทั้งสองฝ่ายอ้างชัยชนะ คุณได้ค่าฟีจากการขายสินทรัพย์ สมบูรณ์แบบ', zh: '🤝 外交大师。双方都宣称胜利。你从资产出售中赚取费用。完美。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 30 } }
        ]
    },
    {
        id: 'financial_analyst_024',
        text: {
            en: '🚢 The Panama Canal Drought: Climate change has lowered water levels. Ships are stuck. This will spike inflation. You can hedge client portfolios or speculate on the misery.',
            th: '🚢 ภัยแล้งคลองปานามา: ภาวะโลกรวนทำระดับน้ำลด เรือติดแหง็ก เงินเฟ้อจะพุ่ง คุณจะป้องกันความเสี่ยงให้ลูกค้าหรือเก็งกำไรบนความทุกข์ยาก',
            zh: '🚢 巴拿马运河干旱：气候变化导致水位下降。船只被困。这将推高通货膨胀。你可以为客户组合对冲风险，或者在痛苦之上投机。'
        },
        options: [
            { id: 'A', text: { en: '📈 Long Inflation: "Buy TIPS (Inflation-Protected Securities) and commodities. Protect purchasing power."', th: '📈 ซื้อเงินเฟ้อ: "ซื้อ TIPS (พันธบัตรชดเชยเงินเฟ้อ) และสินค้าโภคภัณฑ์ ปกป้องอำนาจซื้อ"', zh: '📈 做多通胀："购买 TIPS（通胀保护证券）和商品。保护购买力。"' }, consequence: { en: '🛡️ Portfolio Defense. Clients lose nothing in real terms. Solid, professional advice.', th: '🛡️ การป้องกันพอร์ต: ลูกค้าไม่เสียอะไรในมูลค่าจริง คำแนะนำที่มั่นคงและเป็นมืออาชีพ', zh: '🛡️ 组合防御。客户在实际价值上没有损失。稳健、专业的建议。' }, stats: { competence: 45, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '💸 Price Gouging: "Buy shares in shipping companies that are charging 5x premiums to skip the line. Profiteer."', th: '💸 โขกราคา: "ซื้อหุ้นบริษัทเดินเรือที่ชาร์จพรีเมียม 5 เท่าเพื่อลัดคิว พวกหน้าเลือด"', zh: '💸 哄抬价格："购买那些收取 5 倍溢价以插队的航运公司股票。牟取暴利者。"' }, consequence: { en: '💰 Ugly Profit. You make money, but it feels dirty profiting from broken global trade.', th: '💰 กำไรน่าเกลียด: คุณทำเงิน แต่มันรู้สึกสกปรกที่หากินกับระบบการค้าโลกที่พังทลาย', zh: '💰 丑陋的利润。你赚钱了，但从破碎的全球贸易中获利感觉很脏。' }, stats: { competence: 40, ethics: -20, leadership: 10, innovation: 10 } },
            { id: 'C', text: { en: '✈️ Air Freight Pivot: "Advise clients to switch specific holdings to Air Freight logistics. They will absorb the urgent demand."', th: '✈️ โยกไปขนส่งทางอากาศ: "แนะนำลูกค้าให้โยกการถือครองบางส่วนไปโลจิสติกส์ทางอากาศ พวกเขาจะรับดีมานด์เร่งด่วน"', zh: '✈️ 空运枢纽："建议客户将特定持仓转移到空运物流。他们将吸收紧急需求。"' }, consequence: { en: '🧠 Strategic Alpha. You anticipated the modal shift. Clients outperform massively. Genius move.', th: '🧠 อัลฟ่าเชิงกลยุทธ์: คุณคาดการณ์การเปลี่ยนโหมดขนส่ง ลูกค้าชนะตลาดขาดลอย หมากอัจฉริยะ', zh: '🧠 战略阿尔法。你预见到了模式转变。客户大幅跑赢大盘。天才之举。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🤷 Ignore Weather: "Weather is temporary. It will rain soon. Hold positions."', th: '🤷 เมินสภาพอากาศ: "อากาศมันชั่วคราว เดี๋ยวฝนก็ตก ถือสถานะไว้"', zh: '🤷 忽略天气："天气是暂时的。很快就会下雨。持有头寸。"' }, consequence: { en: '📉 Climate Denial. The drought lasts months. Clients suffer losses. You look out of touch.', th: '📉 ปฏิเสธโลกรวน: ภัยแล้งลากยาวหลายเดือน ลูกค้าขาดทุน คุณดูตกยุค', zh: '📉 否认气候变化。干旱持续数月。客户遭受损失。你看起来不切实际。' }, stats: { competence: 10, ethics: 20, leadership: -10, innovation: -10 } }
        ]
    },
    {
        id: 'financial_analyst_025',
        text: {
            en: '🗑️ The Distressed Dept: A legendary retail chain is bankrupt. Its bonds are trading at 10 cents on the dollar. You think the brand alone is worth 20 cents.',
            th: '🗑️ หนี้เสีย: เครือค้าปลีกในตำนานล้มละลาย พันธบัตรซื้อขายที่ 10 เซนต์ต่อดอลลาร์ คุณคิดว่าแค่แบรนด์อย่างเดียวก็ค่า 20 เซนต์แล้ว',
            zh: '🗑️ 不良资产部门：一家传奇零售连锁店破产了。其债券以 10 美分/美元的价格交易。你认为光是品牌价值就值 20 美分。'
        },
        options: [
            { id: 'A', text: { en: '🦅 Vulture Buy: "Buy the bonds cheaply. Aim to block the restructuring until they pay us to go away."', th: '🦅 อีแร้งลง: "ซื้อพันธบัตรถูกๆ เล็งขวางการปรับโครงสร้างจนกว่าพวกเขาจะจ่ายเงินไล่เราไป"', zh: '🦅 秃鹫购买："廉价购买债券。以此为目标，阻止重组，直到他们付钱让我们离开。"' }, consequence: { en: '💰 Greenmail. You get paid, but you are despised as a "holdout" creditor stalling recovery.', th: '💰 รีีดไถสีเขียว: คุณได้เงิน แต่ถูกรังเกียจว่าเป็นเจ้าหนี้ "หัวหมอ" ถ่วงความเจริญ', zh: '💰 绿色勒索。你得到了报酬，但你因为拖延复苏而被鄙视为"钉子户"债权人。' }, stats: { competence: 45, ethics: -20, leadership: 10, innovation: 20 } },
            { id: 'B', text: { en: '🏢 Loan-to-Own: "Buy enough bonds to convert them into equity. We take over the company and revive the brand."', th: '🏢 ยึดกิจการ: "ซื้อพันธบัตรให้มากพอเพื่อแปลงเป็นหุ้น เรายึดบริษัทและปลุกผีแบรนด์"', zh: '🏢 贷款转为自有："购买足够多的债券将其转换为股权。我们接管公司并复兴品牌。"' }, consequence: { en: '🏆 Turnaround King. You save the company and jobs. Massive profit from the equity upside.', th: '🏆 ราชาพลิกฟื้น: คุณกู้บริษัทและงาน กำไรมหาศาลจากหุ้นขาขึ้น', zh: '🏆 扭亏为盈之王。你挽救了公司和就业机会。从股权上涨中获得巨大利润。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🔪 Asset Strip: "Take control. Sell the real estate. Sell the IP. Fire everyone. Liquidate."', th: '🔪 ชำแหละสินทรัพย์: "ยึดอำนาจ ขายอสังหา ขาย IP ไล่ทุกคนออก ชำระบัญชี"', zh: '🔪 资产剥离："取得控制权。出售房地产。出售 IP。解雇所有人。进行清算。"' }, consequence: { en: '💀 Grave Dancer. You kill a 100-year-old company for a quick buck. Society mourns.', th: '💀 นักเต้นบนหลุมศพ: คุณฆ่าบริษัทร้อยปีเพื่อเงินด่วน สังคมไว้อาลัย', zh: '💀 坟墓舞者。你为了赚快钱杀死了一家百年老公司。社会哀悼。' }, stats: { competence: 30, ethics: -50, leadership: -30, innovation: -10 } },
            { id: 'D', text: { en: '🚫 Too Risky: "It\'s a falling knife. Don\'t catch it. Investments should have cash flow."', th: '🚫 เสี่ยงเกิน: "มีดกำลังหล่น อย่าไปรับ การลงทุนควรมีกระแสเงินสด"', zh: '🚫 太冒险了："这是一把正在下落的刀。不要接。投资应该有现金流。"' }, consequence: { en: '📉 Zero Risk, Zero Reward. Safe, but you miss a classic distressed debt opportunity.', th: '📉 ความเสี่ยงศูนย์ รางวัลศูนย์: ปลอดภัย แต่คุณพลาดโอกาสหนี้เสียระดับคลาสสิก', zh: '📉 零风险，零回报。安全，但你错过了一个经典的良债务机会。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_026',
        text: {
            en: '🧬 The Biotech Binary Event: A small pharma firm reveals Phase 3 trial data tomorrow. Success = +300%. Failure = -90%. You have no inside info. Clients want action.',
            th: '🧬 เหตุการณ์ไบโอเทคขั้วตรงข้าม: บริษัทยาเล็กๆ จะเผยผลทดลองเฟส 3 พรุ่งนี้ สำเร็จ = +300% ล้มเหลว = -90% คุณไม่มีข้อมูลวงใน ลูกค้าอยากให้ทำอะไรสักอย่าง',
            zh: '🧬 生物技术二元事件：一家小型制药公司明天将公布第 3 阶段试验数据。成功 = +300%。失败 = -90%。你没有内部消息。客户想要行动。'
        },
        options: [
            { id: 'A', text: { en: '🎲 Speculative Buy: "Buy call options. Lose a little premium or make a fortune. It\'s a lottery ticket."', th: '🎲 ซื้อเก็งกำไร: "ซื้อ Call Options เสียค่าพรีเมียมนิดหน่อยหรือรวยเละ มันคือหวย"', zh: '🎲 投机性购买："购买看涨期权。损失一点溢价或者发一笔大财。这是一张彩票。"' }, consequence: { en: '🎰 Gambling. If it hits, you are a hero. If not, small loss. But it\'s not analysis.', th: '🎰 การพนัน: ถ้าถูกหวย คุณเป็ฯฮีโร่ ถ้าไม่ เสียนิดเดียว แต่มันไม่ใช่การวิเคราะห์', zh: '🎰 赌博。如果中了，你就是英雄。如果没有，损失很小。但这不是分析。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 } },
            { id: 'B', text: { en: '📉 Sell Volatility: "Sell the straddle (betting on low movement). The implied volatility is too high."', th: '📉 ขายความผันผวน: "ขาย Straddle (เดิมพันว่าไม่ขยับมาก) ความผันผวนแฝงมันสูงเกินไป"', zh: '📉 卖出波动率："卖出跨式组合（押注低波动）。隐含波动率过高。"' }, consequence: { en: '💥 Wiped Out. The stock moves 200%. Your unlimited risk strategy bankrupts you.', th: '💥 หมดตัว: หุ้นขยับ 200% กลยุทธ์ความเสี่ยงไม่จำกัดของคุณทำเจ๊ง', zh: '💥 全军覆没。股票移动了 200%。你的无限风险策略让你破产。' }, stats: { competence: 10, ethics: 10, leadership: -30, innovation: 30 } },
            { id: 'C', text: { en: '⚖️ Straddle Buy: "Buy both calls and puts. We make money if it moves big in EITHER direction. Delta neutral."', th: '⚖️ ซื้อดักสองทาง: "ซื้อทั้ง Call และ Put เรากำไรถ้ามันขยับแรงในทิศทาง \'ไหนก็ได้\' เป็นกลางทาง Delta"', zh: '⚖️ 跨式购买："购买看涨和看跌期权。如果它在 \'任一\' 方向上大幅移动，我们就能赚钱。Delta 中立。"' }, consequence: { en: '🧠 Professional Hedge. The stock doubles. You profit from the volatility regardless of the outcome.', th: '🧠 การป้องกันความเสี่ยงมืออาชีพ: หุ้นเด้งสองเท่า คุณกำไรจากความผันผวนไม่ว่าผลจะออกหน้าไหน', zh: '🧠 专业对冲。股票翻倍。无论结果如何，你都可以从波动性中获利。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '🚫 Avoid: "Binary events are uninvestable. We don\'t gamble. Wait for the data, then trade."', th: '🚫 หลีกเลี่ยง: "เหตุการณ์ขั้วตรงข้ามลงทุนไม่ได้ เราไม่เล่นพนัน รอข้อมูลก่อน ค่อยเทรด"', zh: '🚫 避免："二元事件是不可投资的。我们不赌博。等待数据，然后进行交易。"' }, consequence: { en: '🛡️ Prudence. You miss the gain, but you sleep well. Clients respect the discipline.', th: '🛡️ รอบคอบ: คุณพลาดกำไร แต่นอนหลับสบาย ลูกค้าเคารพในวินัย', zh: '🛡️ 谨慎。你错过了收益，但你睡得很香。客户尊重纪律。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_027',
        text: {
            en: '🕵️ The Insider Tip: An old college friend, now a CFO, drunk-dials you. "We are missing earnings bad next week. Short us." Then he hangs up.',
            th: '🕵️ ข้อมูลวงใน: เพื่อนเก่าสมัยเรียน ตอนนี้เป็น CFO โทรมาตอนเมา "อาทิตย์หน้ากำไรเราแย่มาก Short เราซะ" แล้ววางสาย',
            zh: '🕵️ 内部消息：一位现在担任首席财务官的老大学朋友醉酒后给你打电话。"我们下周的收益会很差。做空我们。"然后他挂断了电话。'
        },
        options: [
            { id: 'A', text: { en: '📉 Trade on it: "Short the stock with personal accounts. It\'s free money."', th: '📉 เทรดเลย: "Short หุ้นด้วยบัญชีส่วนตัว เงินฟรีชัดๆ"', zh: '📉 据此交易："用个人账户做空股票。这是免费的钱。"' }, consequence: { en: '🚓 SEC Investigation. You make money, but the algorithms flag the timing. You are under investigation.', th: '🚓 ก.ล.ต. สอบสวน: คุณได้เงิน แต่อัลกอจับจับจังหวะได้ คุณโดนสอบสวน', zh: '🚓 SEC 调查。你赚了钱，但算法标记了时间点。你正在接受调查。' }, stats: { competence: 20, ethics: -100, leadership: -50, innovation: 0 } },
            { id: 'B', text: { en: '🤐 Ignore it: "Pretend I never heard it. Delete the call log. Do nothing."', th: '🤐 เมินซะ: "แกล้งทำไม่ได้ยิน ลบประวัติการโทร ไม่ทำอะไร"', zh: '🤐 忽略它："假装我从未听过。删除通话记录。什么也不做。"' }, consequence: { en: '🛡️ Safe. The stock tanks. You missed the profit, but you kept your license and freedom.', th: '🛡️ ปลอดภัย: หุ้นร่วงเละ คุณพลาดกำไร แต่รักษาใบอนุญาตและอิสรภาพไว้ได้', zh: '🛡️ 安全。股票大跌。你错过了利润，但你保住了执照和自由。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '📢 Publish Research: "Write a \'downgrade\' note based on \'channel checks\' and \'macro headwinds\'. Don\'t mention the call."', th: '📢 ตีพิมพ์บทวิเคราะห์: "เขียนโน้ต \'ปรับลดคำแนะนำ\' โดยอ้าง \'การตรวจสอบช่องทาง\' และ \'ลมต้านมหภาค\' ห้ามพูดถึงสายนั้น"', zh: '📢 发布研究报告："根据\'渠道检查\'和\'宏观逆风\'写一份\'降级\'报告。不要提那个电话。"' }, consequence: { en: '🧠 Gray Area Master. You use the info to look smart without technically breaking the law (maybe). Clients love the call.', th: '🧠 เซียนพื้นที่สีเทา: คุณใช้ข้อมูลเพื่อดูฉลาดโดยไม่ผิดกฎหมายเทคนิค (มั้ง) ลูกค้าชอบคำแนะนำนี้', zh: '🧠 灰色地带大师。你利用这些信息让自己看起来很聪明，而在技术上没有违法（也许）。客户喜欢这个建议。' }, stats: { competence: 50, ethics: -20, leadership: 30, innovation: 30 } },
            { id: 'D', text: { en: '📞 Report Him: "Call compliance. Report the potential breach. Protect the integrity of the market."', th: '📞 รายงานเขา: "โทรหาฝ่ายกำกับดูแล รายงานการละเมิดที่อาจเกิดขึ้น ปกป้องความถูกต้องของตลาด"', zh: '📞 举报他："致电合规部门。报告潜在的违规行为。维护市场的诚信。"' }, consequence: { en: '⚖️ Boy Scout. Compliance praises you. Your friend gets fired. You feel morally superior but lonely.', th: '⚖️ ลูกเสือดีเด่น: ฝ่ายกำกับชมเชย เพื่อนโดนไล่ออก คุณรู้สึกเหนือกว่าทางศีลธรรมแต่โดดเดี่ยว', zh: '⚖️ 童子军。合规部门表扬了你。你的朋友被解雇了。你在这道德上感到优越，但很孤独。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_028',
        text: {
            en: '📉 Negative Interest Rates: Central banks have gone negative. Banks are charging clients to hold cash. Your wealthy clients are furious and demanding a solution.',
            th: '📉 ดอกเบี้ยติดลบ: ธนาคารกลางปรับดอกเบี้ยติดลบ ธนาคารเก็บเงินค่าฝากเงินสดจากลูกค้า ลูกค้ารวยๆ โกรธจัดและต้องการทางออก',
            zh: '📉 负利率：央行已实行负利率。银行向持有现金的客户收费。你的富有客户非常愤怒，要求解决方案。'
        },
        options: [
            { id: 'A', text: { en: '🧱 Physical Cash: "Build a vault. Withdraw $100M in cash. Store it physically. Zero percent is better than negative."', th: '🧱 เงินสดกายภาพ: "สร้างห้องนิรภัย ถอนมา 100 ล้าน เก็บเป็นแบงก์ ดอกเบี้ย 0% ดีกว่าติดลบ"', zh: '🧱 实物现金："建造一个金库。提取 1 亿美元现金。实物存储。零利率总比负利率好。"' }, consequence: { en: '🏰 Fortress Thinking. Expensive logistics and insurance, but the clients feel like Bond villains. They love it.', th: '🏰 แนวคิดป้อมปราการ: ค่าขนส่งและประกันแพง แต่ลูกค้ารู้สึกเหมือนตัวร้ายในหนังบอนด์ ชอบใจใหญ่', zh: '🏰 堡垒思维。昂贵的物流和保险，但客户感觉像是邦德电影里的反派。他们很喜欢。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 20 } },
            { id: 'B', text: { en: '🪙 Gold & Crypto: "Fiat is broken. Move 20% to Gold, 5% to Bitcoin. Escape the banking system."', th: '🪙 ทองและคริปโต: "เงินเฟียตพังแล้ว โยก 20% ไปทอง 5% ไปบิตคอยน์ หนีระบบธนาคาร"', zh: '🪙 黄金和加密货币："法币体系已坏。将 20% 转移到黄金，5% 转移到比特币。逃离银行系统。"' }, consequence: { en: '🚀 Anti-System Play. Initially volatile, but as rates stay negative, these assets fly. You look visionary.', th: '🚀 เล่นสวนระบบ: ผันผวนตอนแรก แต่พอดอกเบี้ยลบยาว ทรัพย์สินพวกนี้พุ่ง คุณดูมีวิสัยทัศน์', zh: '🚀以此以此以此 反系统以此以此以此以此玩法。起初以此以此以此以此波动以此以此以此以此很大，但我以此以此以此以此以此随着以此以此以此以此利率保持以此以此以此以此以此负值，以此以此以此以此这些以此以此以此以此以此资产以此以此以此大涨。你看起来以此以此以此以此很以此以此以此有以此以此以此以此以此远见。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'C', text: { en: '🏗️ High Yield Real Estate: "Buy residential blocks. Rent yields are positive. Tangible assets beat bank deposits."', th: '🏗️ อสังหาผลตอบแทนสูง: "ซื้อตึกที่พักอาศัย ค่าเช่าเป็นบวก ทรัพย์สินจับต้องได้ชนะเงินฝากแบงก์"', zh: '🏗️ 高收益房地产："购买住宅楼。租金收益率为正。有形资产胜过银行存款。"' }, consequence: { en: '🏠 Solid Income. It works. Boring, safe, positive cash flow. Clients are satisfied.', th: '🏠 รายได้มั่นคง: ได้ผล น่าเบื่อ ปลอดภัย กระแสเงินสดบวก ลูกค้าพอใจ', zh: '🏠 稳定的收入。行之有效。无聊，安全，正向现金流。客户很满意。' }, stats: { competence: 45, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '💸 Risky Corp Bonds: "Chase yield in junk bonds. We need positive carry, no matter the credit risk."', th: '💸 หุ้นกู้เสี่ยงสูง: "ล่าผลตอบแทนในหุ้นกู้ขยะ เราต้องการดอกเบี้ยบวก ไม่สนความเสี่ยงเครดิต"', zh: '💸 高风险公司债券："在垃圾债券中追逐收益率。我们需要正向套利，不管信用风险如何。"' }, consequence: { en: '💣 Default Cycle. A recession hits, defaults spike. Clients lose principal while chasing yield.', th: '💣 วัฏจักรผิดนัดชำระ: เศรษฐกิจถดถอย การผิดนัดชำระพุ่ง ลูกค้าเสียเงินต้นเพราะไล่ล่าดอกเบี้ย', zh: '💣 违约周期。经济衰退来袭，违约激增。客户在追逐收益率的同时损失了本金。' }, stats: { competence: 20, ethics: 30, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_029',
        text: {
            en: '🤖 The AI Analyst Replacement: Management is deploying an AI that can model financials faster than you. They ask you to train it. It will likely take your job.',
            th: '🤖 AI แย่งงาน: ฝ่ายบริหารกำลังใช้ AI ที่ทำโมเดลการเงินเร็วกว่าคุณ เขาขอให้คุณสอนมัน มันน่าจะมาแทนที่งานคุณ',
            zh: '🤖 AI 分析师替代者：管理层正在部署一种 AI，它可以比你更快地建立财务模型。他们让你训练它。它很可能会取代你的工作。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Sabotage: "Feed it bad data. Confuse its logic. Keep myself indispensable."', th: '🚫 วางยา: "ป้อนข้อมูลขยะ ทำให้ตรรกะมันรวน รักษาความสำคัญของตัวเองไว้"', zh: '🚫 蓄意破坏："给它喂假数据。混淆它的逻辑。保持我自己的不可或缺性。"' }, consequence: { en: '🌪️ Chaos. The AI makes huge errors. Management scraps it. You keep your job for now, but unethical.', th: '🌪️ โกลาหล: AI ทำพลาดมหันต์ ผู้บริหารระงับโครงการ คุณรักษางานได้ชั่วคราว แต่ผิดจริยธรรม', zh: '🌪️ 混乱。AI 会犯巨大的错误。管理层废弃了它。你暂时保住了工作，但不道德。' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: -50 } },
            { id: 'B', text: { en: '🤝 Co-Pilot: "Train it to do the boring grunt work. Position myself as the \'AI Manager\' who interprets the results."', th: '🤝 นักบินร่วม: "สอนมันทำงานถึกๆ วางตำแหน่งตัวเองเป็น \'ผู้จัดการ AI\' ที่คอยตีความผลลัพธ์"', zh: '🤝 副驾驶："训练它做无聊的苦差事。将自己定位为解释结果的\'AI 经理\'。"' }, consequence: { en: '🚀 Level Up. You become 10x more productive. You execute the strategy, the AI does the math. Promotion.', th: '🚀 เลเวลอัพ: คุณผลิตงานได้ 10 เท่า คุณวางกลยุทธ์ AI คิดเลข เลื่อนตำแหน่ง', zh: '🚀以此以此 升级。你的以此以此以此生产力以此以此以此以此以以以此提高 10 倍。你以此以此以此以此执行策以此以此以此以此略，AI 进以此以此以此以此以此行计算。以此以此以此以此以此晋以此以此以此升。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'C', text: { en: '🚪 Quit: "I won\'t train my replacement. I\'m moving to a hedge fund that values human intuition."', th: '🚪 ลาออก: "ฉันไม่สอนตัวตายตัวแทนหรอก ย้ายไปกองทุนเฮดจ์ฟันด์ที่ให้ค่าสัญชาตญาณมนุษย์ดีกว่า"', zh: '🚪 辞职："我不会训练我的替代者。我要去一家重视人类直觉的对冲基金。"' }, consequence: { en: '🦁 Old School. You find a niche, but the industry is changing fast. Are you fighting the tide?', th: '🦁 โรงเรียนเก่า: คุณเจอตลาดเฉพาะกลุ่ม แต่อุตสาหกรรมเปลี่ยนเร็ว คุณกำลังต้านกระแสน้ำหรือเปล่า?', zh: '🦁以此以此 老派。你以此以此以此以找到以此以此以此以此了以此以此以此以此以此一个以此以此以此以此细分以此以此以此市场，但以此以此以此以此以此以此行业以此以此以此以此以此变化以此以此以此以此很快。你在以此以此以此以此以此以此逆以此以此以此流以此以此以此以此而上吗？' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: -20 } },
            { id: 'D', text: { en: '🔧 Specialized Training: "Train it only on small caps. Keep the large cap/complex modeling secret sauce to myself."', th: '🔧 สอนเฉพาะทาง: "สอนมันแค่หุ้นเล็ก เก็บสูตรลับหุ้นใหญ่/โมเดลซับซ้อนไว้กับตัว"', zh: '🔧 专项训练："只训练它做小盘股。把大盘股/复杂模型的秘方留给自己。"' }, consequence: { en: '🛡️ Hedge. A temporary defense. Eventually, it will learn everything. Delaying the inevitable.', th: '🛡️ การป้องกัน: การป้องกันชั่วคราว ในที่สุดมันจะเรียนรู้ทุกอย่าง ยื้อเวลาสิ่งที่เลี่ยงไม่ได้', zh: '🛡️以此以此 对以此以此以此以此冲。以此以此以此以此临时以此以此以此以此以此以此防御。以此以此以此以此以此最终，它将以此以此以此以此以此学会以此以此以此以此以此以此一切。以此以此以此以此推以此以此以此迟以此以此以此以此以此不可以此以此以此以此避免的以此以此以此以此以此事情。' }, stats: { competence: 35, ethics: 30, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'financial_analyst_030',
        text: {
            en: '🏖️ The Retirement: You made your millions. You survived crashes, bubbles, and AI. It\'s time to hang up the Bloomberg Terminal. How do you go out?',
            th: '🏖️ เกษียณอายุ: คุณทำเงินหลายล้าน รอดวิกฤต ฟองสบู่ และ AI ถึงเวลาวางมือจากจอ Bloomberg จะไปแบบไหน',
            zh: '🏖️ 退休：你赚了数百万。你在崩盘、泡沫和 AI 中幸存下来。是时候挂断彭博终端了。你会怎么离开？'
        },
        options: [
            { id: 'A', text: { en: '🏫 Teach: "Become a professor. Teach the next generation the difference between price and value."', th: '🏫 สอนหนังสือ: "เป็นอาจารย์ สอนคนรุ่นใหม่เรื่องความต่างระหว่างราคากับมูลค่า"', zh: '🏫以此 教书："以此以此以此以此成为以此以此以此以此一名以此以此以此以此以此教授。教导以此以此以此以此下一代以此以此以此以此以此价格与以此以此以此以此价值以此以此以此以此以此之间的以此以此以此以此以此以此以此区别。"' }, consequence: { en: '🦉 Legacy. Your wisdom lives on. You launch careers. A fulfilling end.', th: '🦉 ตำนาน: ภูมิปัญญาคุณสืบทอดต่อไป คุณสร้างอาชีพ เป็นตอนจบที่เติมเต็ม', zh: '🦉以此以此 遗产。你的以此以此以此以此以此智慧以此以此以此以此以此长以此以此以此存。你以此以此以此以此开启以此以此以此以此了以此以此以此以此职业以此以此以此以此以此以此生涯。以此以此以此以此以此以此圆满的以此以此以此以此结局。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '🏦 Start a Family Office: "Manage my own money aggressively. I can\'t quit the game. I am the market."', th: '🏦 เปิด Family Office: "บริหารเงินตัวเองแบบดุดัน เลิกไม่ได้หรอก ฉันคือตลาด"', zh: '🏦以此以此 开设以此以此以此以此以此家族以此以此以此以此以此以此办公以此以此以此以此室："以此以此以此以此积极以此以此以此以此以此管理我以此以此以此以此以此自己的以此以此以此以此以此以此钱。我以此以此以此以此不能以此以此以此以此以此以此退出以此以此以此以此以此以此以此游戏。我以此以此以此以此就是以此以此以此以此市场。"' }, consequence: { en: '🦈 Eternal Player. You die at your desk at 90, richer than God but alone. Was it worth it?', th: '🦈 ผู้เล่นนิรันดร์: คุณตายคาโต๊ะตอน 90 รวยล้นฟ้าแต่เดียวดาย มันคุ้มไหม?', zh: '🦈以此以此 永恒的以此以此以此以此以此以此玩家。你在 90 岁以此以此以此以此以此时死在以此以此以此以此办公以此以此以此以此以此桌以此以此以此以此以此前，比以此以此以此以此上帝以此以此以此以此以此以此还以此以此以此以此以此以此富有，但以此以此以此以此以此形单影只。这以此以此以此以此以此值以此以此以此以此得吗？' }, stats: { competence: 50, ethics: 30, leadership: 20, innovation: 40 } },
            { id: 'C', text: { en: '⛵ Sail Away: "Buy a boat. Disconnect entirely. No wifi. Just the ocean."', th: '⛵ ออกเรือ: "ซื้อเรือ ตัดขาดโลกภายนอก ไม่มีไวไฟ มีแค่ทะเล"', zh: '⛵以此以此 扬帆以此以此以此以此远航："以此以此以此以此买以此以此以此以此以此一以此以此以此艘船。以此以此以此以此完全以此以此以此以此以此以此断开以此以此以此以此以此连接。没有 wifi。以此以此以此以此只有以此以此以此以此以此海洋。"' }, consequence: { en: '🌅 Peace. You finally relax. The markets go up and down, but you don\'t care. True freedom.', th: '🌅 ความสงบ: ได้พักสักที ตลาดจะขึ้นหรือลงคุณก็ไม่สน อิสรภาพที่แท้จริง', zh: '🌅以此以此 平静。你以此以此以此以终于以此以此以此以此以此以此放松了。以此以此以此以此以此以此市场以此以此以此以此以此以此以此以此涨以此以此以此跌，但你以此以此以此以此以此以此不再以此以此以此以此以此以此关心。以此以此以此以此以此真正的以此以此以此以此自由。' }, stats: { competence: 30, ethics: 40, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '📚 Write a Tell-All Book: "Expose the scams, the rigging, the madness. Burn bridges on the way out."', th: '📚 เขียนหนังสือแฉ: "แฉสแกม การฮั้ว ความบ้าคลั่ง เผาสะพานทิ้งก่อนไป"', zh: '📚以此以此 写以此以此以此以此以此一本以此以此以此以此以此以此以此揭露以此以此以此以此所有以此以此以此以此以此内幕的以此以此以此书："以此以此以此以此以此以此揭露以此以此以此以此以此以此骗局、以此以此以此以此以此操纵、以此以此以此以此以此疯狂。在以此以此以此以此以此离开的以此以此以此以此以此路上以此以此以此以此以此以此以此自断以此以此以此以此后路。"' }, consequence: { en: '🔥 Best Seller. You are hated by Wall St but loved by the public. A blaze of glory.', th: '🔥 ขายดีถล่มทลาย: วอลล์สตรีทเกลียดคุณแต่คนทั่วไปรัก แสงสุดท้ายอันรุ่งโรจน์', zh: '🔥以此以此 畅销以此以此以此以此以此书。你以此以此以此以此以此以此被以此以此以此以此以此华尔街以此以此以此以此以此痛恨，但受以此以此以此以此以此以此到以此以此以此以此大众的以此以此以此以此以此以此以此喜爱。以此以此以此以此光荣的以此以此以此以此以此火焰。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'financial_analyst_031',
        text: {
            en: '📉 The CFO\'s Secret: You discover the CFO is inflating revenue using shell companies. If you report it, the stock crashes and you lose your bonus. If you stay silent, it\'s fraud.',
            th: '📉 ความลับ CFO: คุณพบว่า CFO ปั่นยอดขายผ่านบริษัทหลอก ถ้าคุณรายงาน หุ้นตกและอดโบนัส ถ้าเงียบ ก็สมรู้ร่วมคิด',
            zh: '📉 CFO的秘密：你发现CFO利用皮包公司虚增收入。如果你报告，股票暴跌，你失去奖金。如果你保持沉默，这就是欺诈。'
        },
        options: [
            { id: 'A', text: { en: '🤐 Stay Silent: "It\'s above my pay grade. I didn\'t see anything. Keep cashing checks."', th: '🤐 เงียบไว้: "มันเกินหน้าที่เรา แกล้งไม่เห็น รับเงินต่อไป"', zh: '🤐 保持沉默："这超出了我的薪酬范围。我什么都没看见。继续领支票。"' }, consequence: { en: '💣 Time Bomb. You keep your job for 2 years until the SEC raids the office. You are named in the indictment.', th: '💣 ระเบิดเวลา คุณทำงานต่อได้ 2 ปีจนกเลิกจ้างแล้ว SEC บุก คุณโดนหางเลขไปด้วย', zh: '💣 定时炸弹。你保住了工作2年，直到美国证交会突袭办公室。你在起诉书中被点名。' }, stats: { competence: 30, ethics: -60, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '📢 Whistleblow: "Report it to the SEC immediately. Integrity is everything."', th: '📢 เป่านกหวีด: "รายงาน ก.ล.ต. ทันที ความซื่อสัตย์คือทุกอย่าง"', zh: '📢 举报："立即向美国证交会报告。诚信就是一切。"' }, consequence: { en: '⚖️ Hero & Martyr. The stock tanks. You are fired but collect a massive whistleblower bounty later. Career suicide though.', th: '⚖️ ฮีโร่และผู้พลีชีพ หุ้นร่วง คุณโดนไล่ออกแต่ได้เงินรางวัลก้อนโต แต่หมดอนาคตในวงการ', zh: '⚖️ 英雄与烈士。股票暴跌。你被解雇了，但后来领取了巨额举报奖金。但这等于职业自杀。' }, stats: { competence: 50, ethics: 90, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🕵️ Anonymous Tip: "Leak the documents to a journalist using encrypted email. Let the market decide."', th: '🕵️ ข่าวกรองนิรนาม: "ปล่อยเอกสารให้นักข่าวผ่านเมลเข้ารหัส ให้ตลาดตัดสิน"', zh: '🕵️ 匿名举报："使用加密电子邮件将文件泄露给记者。让市场决定。"' }, consequence: { en: '📉 Market Correction. The story breaks. The CFO is fired. You survive the purge as a "survivor."', th: '📉 ตลาดปรับฐาน ข่าวหลุด CFO โดนไล่ออก คุณรอดจากการกวาดล้าง', zh: '📉 市场调整。故事曝光。CFO被解雇。你作为"幸存者"在清洗中幸存下来。' }, stats: { competence: 60, ethics: 60, leadership: 30, innovation: 40 } },
            { id: 'D', text: { en: '🤝 Confront CFO: "Tell him you know and demand he fix it or you walk. Give him a chance."', th: '🤝 เผชิญหน้า CFO: "บอกเขาว่าเรารู้ ให้โอกาสเขาแก้ไม่งั้นเราลาออก"', zh: '🤝 与CFO对以此质："告诉他你知道了，要求他解决，否则你就走。给他一个机会。"' }, consequence: { en: '🚪 Forced Exit. He calmly fires you for "performance" immediately. You have no proof. You are out.', th: '🚪 โดนบีบออก เขาไล่คุณออกทันทีข้อหา "ผลงานห่วย" คุณไม่มีหลักฐาน จบเห่', zh: '🚪 被迫离开。他立即以"业绩"为由冷静地解雇了你。你没有证据。你出局了。' }, stats: { competence: 20, ethics: 50, leadership: 40, innovation: -10 } }
        ]
    },
    {
        id: 'financial_analyst_032',
        text: {
            en: '🪙 The Crypto Craze: Your firm wants to launch a crypto ETF. You know the underlying assets are mostly vaporware and wash trading. Fees are huge though.',
            th: '🪙 กระแสคริปโต: บริษัทจะเปิดกองทุนคริปโต คุณรู้ว่าสินทรัพย์อ้างอิงมันกลวงและการปั่นราคา แต่ค่าธรรมเนียมมหาศาล',
            zh: '🪙 加密狂热：你的公司想推出加密ETF。你知道底层资产主要是空气币和清洗交易。但费用是巨大的。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Launch It: "Fees are fees. If clients want to gamble, let them. We are just the house."', th: '🚀 ลุยเลย: "ค่าฟีก็คือค่าฟี ลูกค้าอยากพนันก็เรื่องของเขา เราเป็นแค่เจ้ามือ"', zh: '🚀 推出它："费用就是费用。如果客户想赌博，就让他们赌。我们只是庄家。"' }, consequence: { en: '💰 Profit First. The fund launches. You make millions in fees. Then it crashes 90%. Clients sue.', th: '💰 กำไรมาก่อน กองทุนปัง ได้ค่าฟีหลายล้าน แล้วมันก็ร่วง 90% ลูกค้าฟ้องเละ', zh: '💰 利润至上。基金成立。你赚了数百万的费用。然后暴跌90%。客户起诉。' }, stats: { competence: 50, ethics: -40, leadership: 30, innovation: 40 } },
            { id: 'B', text: { en: '🛑 Block It: "Write a scathing risk report. Recommend avoiding at all costs. Reputation risk is too high."', th: '🛑 ขวางไว้: "เขียนรายงานความเสี่ยงด่ายับ แนะนำให้เลี่ยงเด็ดขาด เสี่ยงเสียชื่อเสียงเกินไป"', zh: '🛑 阻止它："写一份严厉的风险报告。建议不惜一切代价避免。声誉风险太高。"' }, consequence: { en: '🛡️ Dodged Bullet. Management listens. 6 months later, the sector implodes. You look like a genius.', th: '🛡️ หลบกระสุนได้ ผู้บริหารฟัง 6 เดือนต่อมาตลาดพังพินาศ คุณดูเป็นอัจฉริยะ', zh: '🛡️ 躲过一劫。管理层听取了意见。6个月后，该板块崩溃。你看起来像个天才。' }, stats: { competence: 80, ethics: 50, leadership: 60, innovation: 20 } },
            { id: 'C', text: { en: '⚠️ Limited Exposure: "Launch a small, high-risk bucket for accredited investors only. Disclose everything."', th: '⚠️ จำกัดวง: "เปิดกองเล็กๆ เสี่ยงสูงให้แค่นักลงทุนรายใหญ่ เปิดเผยข้อมูลทุกอย่าง"', zh: '⚠️ 有限敞口："只为合格投资者推出一个小型的、高风险的投资组合。披露一切。"' }, consequence: { en: '⚖️ Balanced. You capture some fees but protect the broader client base. A safe middle ground.', th: '⚖️ สมดุล ได้ค่าฟีบ้างแต่ปกป้องฐานลูกค้าส่วนใหญ่ ทางสายกลางที่ปลอดภัย', zh: '⚖️ 平衡。你获取了一些费用，但保护了更广泛的客户群。一个安全的中间地带。' }, stats: { competence: 60, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '🤡 Hype It: "Go on CNBC and say Bitcoin is going to 100k. Pump the bag so we can exit."', th: '🤡 ปั่นราคา: "ออกทีวีบอกบิตคอยน์จะไปแสนเหรียญ ปั่นให้เม่ารับของแล้วเราชิ่ง"', zh: '🤡 炒作："上CNBC说比特币会涨到10万。拉高出货让我们离场。"' }, consequence: { en: '📉 Fraud. That is market manipulation. The SEC investigates your public statements. Jail time risk.', th: '📉 ฉ้อโกง นั่นมันปั่นหุ้น ก.ล.ต. สอบสวนคำพูดคุณ เสี่ยงคุก', zh: '📉 欺诈。那是市场操纵。美国证交会调查你的公开声明。有坐牢的风险。' }, stats: { competence: 20, ethics: -80, leadership: -40, innovation: 10 } }
        ]
    },
    {
        id: 'financial_analyst_033',
        text: {
            en: '⚡ HFT Glitch: Your High Frequency Trading algorithm starts losing $1M per second due to a bug. Stopping it requires a manual override that wipes the day\'s logs.',
            th: '⚡ บั๊ก HFT: อัลกอริทึมเทรดความเร็วสูงเริ่มขาดทุนวิละล้านเพราะบั๊ก จะหยุดต้องใช้ระบบมือซึ่งจะลบ log ของวันนี้',
            zh: '⚡ HFT故障：你的高频交易算法因为一个漏洞开始每秒损失100万美元。停止它需要手动覆盖，这会擦除当天的日志。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Pull the Plug: "Stop the bleeding immediately! Who cares about the logs? We are losing millions!"', th: '🛑 ดึงปลั๊ก: "หยุดเลือดไหลเดี๋ยวนี้! ใครสน log? เรากำลังเสียเงินเป็นล้าน!"', zh: '🛑 拔掉插头："立即止损！谁在乎日志？我们正在损失数百万！"' }, consequence: { en: '💸 Loss Limited. You saved the firm from bankruptcy. Regulators fine you for missing logs, but you still have a job.', th: '💸 จำกัดการขาดทุน คุณช่วยบริษัทไม่ให้เจ๊ง โดนปรับเรื่อง log หาย แต่ยังมีงานทำ', zh: '💸 损失有限。你把公司从破产边缘救了回来。监管机构因日志丢失对你罚款，但你保住了工作。' }, stats: { competence: 70, ethics: 30, leadership: 60, innovation: 0 } },
            { id: 'B', text: { en: '🔧 Fix Live: "Try to patch the code while it runs. I can fix the logic without stopping the engine."', th: '🔧 แก้สด: "พยายามแก้โค้ดขณะรัน ฉันแก้ตรรกะมันได้โดยไม่ต้องดับเครื่อง"', zh: '🔧 实时修复："尝试在运行时修补代码。我可以在不停止引擎的情况下修复逻辑。"' }, consequence: { en: '🎰 Gamble Failed. You mistype a variable. $10M loss becomes $100M. The firm collapses.', th: '🎰 พนันพลาด พิมพ์ตัวแปรผิด ขาดทุน 10 ล้านกลายเป็น 100 ล้าน บริษัทพัง', zh: '🎰 赌博失败。你输错了一个变量。1000万的损失变成了1亿。公司倒闭。' }, stats: { competence: -10, ethics: 40, leadership: -20, innovation: 20 } },
            { id: 'C', text: { en: '📞 Call Compliance: "Follow protocol. Notify compliance before shutting down. Even if it costs money."', th: '📞 โทรหาฝ่ายกฎระเบียบ: "ทำตามขั้นตอน แจ้งฝ่ายกฎระเบียบก่อนปิด แม้จะเสียเงินก็ตาม"', zh: '📞 致电合规部："遵循协议。在关闭前通知合规部。即使这要花钱。"' }, consequence: { en: '📉 By The Book. You lose $50M during the call. You are fired for being too slow, but you kept your license.', th: '📉 ตามตำรา เสียเงิน 50 ล้านระหว่างโทร โดนไล่ออกเพราะช้า แต่เก็บใบอนุญาตไว้ได้', zh: '📉以此照章办事。你在通话期间损失了5000万。你因动作太慢而被解雇，但你保住了执照。' }, stats: { competence: 40, ethics: 80, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🤷 Blame Market: "Let it run. Claim it was a \'flash crash\' and ask exchanges to cancel the trades."', th: '🤷 โทษตลาด: "ปล่อยมันรัน อ้างว่าเป็น \'Flash Crash\' แล้วขอให้ตลาดยกเลิกรายการ"', zh: '🤷 怪罪市场："让它是运行。声称这是\'闪崩\'并要求交易所取消交易。"' }, consequence: { en: '⚖️ Refused. The exchanges say "No." You lose everything. Market manipulation charge added.', th: '⚖️ ปฏิเสธ ตลาดบอก "ไม่" คุณหมดตูด โดนข้อหาปั่นตลาดเพิ่ม', zh: '⚖️以此以此被拒。以此交易所说"不"。你失去了一切。增加了市场操纵指控。' }, stats: { competence: 10, ethics: -20, leadership: -40, innovation: 10 } }
        ]
    },
    {
        id: 'financial_analyst_034',
        text: {
            en: '🌿 Greenwashing: A client wants to issue a "Green Bond" to build a coal plant with "carbon capture" (that doesn\'t work yet). It\'s technically legal but misleading.',
            th: '🌿 ฟอกเขียว: ลูกค้าจะออก "Green Bond" สร้างโรงไฟฟ้าถ่านหินที่มี "ดักจับคาร์บอน" (ที่ยังใช้ไม่ได้จริง) ถูกกฎหมายแต่หลอกลวง',
            zh: '🌿 漂绿：一位客户想发行"绿色债券"来建造一座带有"碳捕获"（尚未奏效）的燃煤电厂。这在技术上是合法的，但具有误导性。'
        },
        options: [
            { id: 'A', text: { en: '✅ Approve It: "It meets the legal standard. Investors should do their own due diligence. Fees are good."', th: '✅ อนุมัติ: "ผ่านเกณฑ์กฎหมาย นักลงทุนต้องตรวจสอบเอง ค่าฟีงาม"', zh: '✅ 批准："它符合法律标准。投资者应该自己做尽职调查。费用很高。"' }, consequence: { en: '💰 Quick Cash. Bond sells out. Environmental groups expose it later. Your firm looks bad, but you got paid.', th: '💰 เงินด่วน บอนด์ขายหมดเกลี้ยง กลุ่มสิ่งแวดล้อมแฉทีหลัง บริษัทดูแย่ แต่คุณได้เงิน', zh: '💰以此以此快钱。债券售罄。环保团体随后曝光了它。你的公司看起来很糟糕，但你拿到了钱。' }, stats: { competence: 50, ethics: -30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Reject It: "I won\'t put my name on this. It\'s deception. Fix the project or find another analyst."', th: '🛑 ปฏิเสธ: "ฉันไม่เซ็นชื่อให้หรอก นี่มันหลอกลวง แก้โปรเจกต์ซะไม่งั้นก็หาคนอื่น"', zh: '🛑 拒绝："我不会在上面签名的。这是欺骗。修改项目或另找分析师。"' }, consequence: { en: '🛡️ Integrity. Client walks. Your boss is annoyed at lost revenue but respects your risk management.', th: '🛡️ ความซื่อสัตย์ ลูกค้าหนี หัวหน้าหงุดหงิดที่อดเงินแต่เคารพการคุมความเสี่ยงของคุณ', zh: '🛡️ 正直。客户走了。你的老板对收入损失感到恼火，但尊重你的风险管理。' }, stats: { competence: 60, ethics: 80, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '📝 Rewrite Disclaimers: "Add 50 pages of risk disclosures in small print explaining the tech might fail. Cover our ass."', th: '📝 แก้คำเตือน: "เพิ่มคำเตือนความเสี่ยง 50 หน้าตัวเล็กๆ อธิบายว่าเทคโนโลยีอาจล่ม กันเหนียว"', zh: '📝 重写免责声明："用小字体添加50页的风险披露，解释技术可能会失败。保护我们自己。"' }, consequence: { en: '⚖️ Lawyer Mode. Legally bulletproof. Investors lose money but can\'t sue. Standard industry practice.', th: '⚖️ โหมดทนาย กันฟ้องได้ 100% นักลงทุนขาดทุนแต่ฟ้องไม่ได้ มาตรฐานวงการแหละ', zh: '⚖️ 律师模式。法律上无懈可击。投资者亏钱但没法起诉。这是行业标准做法。' }, stats: { competence: 70, ethics: 20, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '💡 Pivot Project: "Convince the client to use the funds for solar instead. It\'s cheaper now anyway."', th: '💡 เปลี่ยนโปรเจกต์: "กล่อมลูกค้าใช้เงินทำโซลาร์แทน ถูกกว่าด้วยตอนนี้"', zh: '💡以此转型项目："说服客户将资金用于太阳能。反正现在更便宜。"' }, consequence: { en: '✨ Win-Win. Client saves money, bond is actually green, investors are happy. You are a visionary.', th: '✨ วิน-วิน ลูกค้าประหยัดเงิน บอนด์เขียวลดจริง นักลงทุนแฮปปี้ คุณคือผู้มีวิสัยทัศน์', zh: '✨ 双赢。客户省钱，债券实际上是绿色的，投资者很高兴。你有远见。' }, stats: { competence: 80, ethics: 70, leadership: 80, innovation: 80 } }
        ]
    },
    {
        id: 'financial_analyst_035',
        text: {
            en: '🕵️ The Spy: A brilliant new intern asks unusually specific questions about your proprietary trading algorithms. You suspect corporate espionage.',
            th: '🕵️ สายลับ: เด็กฝึกงานหัวกะทิถามคำถามเจาะจงผิดปกติเกี่ยวกับอัลกอริทึมเทรดลับของคุณ คุณสงสัยว่าเป็นสายลับ',
            zh: '🕵️ 间谍：一位才华横溢的新实习生针对你的自营交易算法提出了异常具体的问题。你怀疑是商业间谍。'
        },
        options: [
            { id: 'A', text: { en: '🍯 Honey Pot: "Feed him fake algorithm data and see where it shows up. Trap him."', th: '🍯 กับดักน้ำผึ้ง: "ป้อนข้อมูลอัลกอปลอมให้แล้วดูว่ามันไปโผล่ที่ไหน จับให้ได้คาหนังคาเขา"', zh: '🍯 蜜罐："给他喂假算法数据，看看它会在哪里出现。以此诱捕他。"' }, consequence: { en: '🕸️ Caught. A rival firm uses the fake code and loses millions. You expose the spy. Promoting potential.', th: '🕸️ จับได้ บริษัทคู่แข่งเอาโค้ดปลอมไปใช้แล้วเจ๊งยับ คุณแฉสายลับได้ มีแววเลื่อนขั้น', zh: '🕸️以此以此以此被抓。一家竞争对手使用了假代码并损失了数百万。你揭露了间谍。升职潜力。' }, stats: { competence: 80, ethics: 40, leadership: 60, innovation: 50 } },
            { id: 'B', text: { en: '🔥 Fire Him: "Trust your gut. Terminate the internship immediately. No access, no risk."', th: '🔥 ไล่ออก: "เชื่อสัญชาตญาณ เลิกจ้างทันที ไม่ให้เข้าถึง ก็ไม่เสี่ยง"', zh: '🔥 解雇他："相信你的直觉。立即终止实习。没有访问权限，没有风险。"' }, consequence: { en: '🛡️ Safe. He leaves. HR is worried about a lawsuit, but your IP is safe. Better safe than sorry.', th: '🛡️ ปลอดภัย เขาไป HR กังวลเรื่องฟ้องร้อง แต่ IP คุณปลอดภัย กันไว้ดีกว่าแก้', zh: '🛡️以此安全。他离开了。人力资源部担心诉讼，但你的知识产权是安全的。有备无患。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Mentor Him: "He\'s just curious and smart. Teach him. I was like that too."', th: '🤝 สอนเขา: "เขาแค่สงสัยและฉลาด สอนเขาเถอะ เมื่อก่อนฉันก็เป็น"', zh: '🤝 指导他："他只是好奇且聪明。教他。我以前也那样。"' }, consequence: { en: '😱 Betrayal. He steals the code and launches a competitor. You trained your own destroyer.', th: '😱 ทรยศ เขาขโมยโค้ดไปเปิดคู่แข่ง คุณสร้างผู้ทำลายตัวเองกับมือ', zh: '😱 背叛。他偷了代码并创办了竞争对手。你训练了自己的毁灭者。' }, stats: { competence: 30, ethics: 60, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🔒 Restrict Access: "Give him busy work. Excel spreadsheets only. Keep the algo black box closed."', th: '🔒 จำกัดสิทธิ์: "ให้งานยุ่งๆ ทำ เอ็กเซลอย่างเดียว ปิดกล่องดำอัลกอให้มิด"', zh: '🔒以此以此限制访问："给他安排忙碌的工作。只有Excel电子表格。保持算法黑匣子关闭。"' }, consequence: { en: '💤 Boring. He quits out of boredom. You lose a potential talent, but keep your secrets.', th: '💤 น่าเบื่อ เขาลาออกเพราะเบื่อ คุณเสียคนเก่งแต่รักษาความลับได้', zh: '💤 无聊。他因为无聊而辞职。你失去了一个潜在的人才，但保守了秘密。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_036',
        text: {
            en: '📉 The IPO Allocation: Your firm is underwriting a hot tech IPO. The CEO asks you to allocate "extra shares" to his friends\' funds, bypassing the book-building process.',
            th: '📉 การจัดสรร IPO: บริษัทคุณกำลังทำ IPO หุ้นเทคฯ ดัง CEO ขอให้คุณกัน "หุ้นพิเศษ" ให้กองทุนเพื่อนเขา ข้ามขั้นตอนปกติ',
            zh: '📉 IPO分配：你的公司正在承销热门的科技股IPO。CEO要求你绕过询价过程，向他朋友的基金分配"额外股份"。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Do It: "It\'s just business. Keep the client happy. The rules are grey anyway."', th: '🤝 ทำเลย: "ธุรกิจก็งี้แหละ เอาใจลูกค้าไว้ กฎมันก็เทาๆ อยู่แล้ว"', zh: '🤝 做吧："这就是生意。让客户开心。反正规则也是灰色的。"' }, consequence: { en: '💰 Bonus Secured. The IPO pops. The friends make millions. You get a huge bonus, but compliance flags the trade 6 months later.', th: '💰 ได้โบนัส IPO พุ่ง เพื่อนรวยเละ คุณได้โบนัสก้อนโต แต่ฝ่ายกฎระเบียบปักธงแดงอีก 6 เดือนให้หลัง', zh: '💰 奖金到手。IPO暴涨。朋友们赚了数百万。你得到了巨额奖金，但合规部门在6个月后标记了这笔交易。' }, stats: { competence: 50, ethics: -50, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Refuse: "Strictly adhere to the allocation policy. Fair access for all investors. I won\'t risk my license."', th: '🛑 ปฏิเสธ: "ยึดตามนโยบายจัดสรรอย่างเคร่งครัด ความยุติธรรมสำหรับทุกคน ฉันไม่เสี่ยงโดนยึดใบอนุญาตหรอก"', zh: '🛑 拒绝："严格遵守分配政策。所有投资者公平准入。我不会拿我的执照冒险。"' }, consequence: { en: '🛡️ Professional. The CEO is furious and threatens to pull the deal. You stand your ground. The deal proceeds, but you are off the team next time.', th: '🛡️ มืออาชีพ CEO โกรธจัดขู่จะถอนดีล คุณยืนกราน ดีลเดินต่อแต่รอบหน้าคุณโดนเด้งออกจากทีม', zh: '🛡️以此专业。CEO大发雷霆并威胁要取消交易。你坚持立场。交易继续进行，但在下一次你会离开团队。' }, stats: { competence: 60, ethics: 80, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🔄 Compromise: "Give them a small allocation within the legal limit, but refuse the full amount. appease him without breaking the law."', th: '🔄 ประนีประนอม: "ให้ส่วนแบ่งเล็กน้อยตามกฎหมาย แต่ปฏิเสธยอดเต็ม เอาใจเขาโดยไม่ผิดกฎ"', zh: '🔄 妥协："在法律限额内给他们一小部分分配，但拒绝全额。安抚他而不违法。"' }, consequence: { en: '⚖️ Diplomatic. He grumbles but accepts. You managed the relationship without jail time.', th: '⚖️ ทูตลิ้นทอง เขาบ่นแต่ยอมรับ คุณรักษาความสัมพันธ์ได้โดยไม่ต้องติดคุก', zh: '⚖️ 外交手段。他发牢骚但接受了。你在没有坐牢的情况下处理了关系。' }, stats: { competence: 70, ethics: 40, leadership: 60, innovation: 30 } },
            { id: 'D', text: { en: '📢 Leak It: "Tell the other institutional investors about the preferential treatment request. Start a bidding war."', th: '📢 ปล่อยข่าว: "บอกนักลงทุนสถาบันรายอื่นเรื่องคำขอนี้ ให้เกิดสงครามราคา"', zh: '📢 泄露："告诉其他机构投资者关于优惠待遇的要求。引发竞标战。"' }, consequence: { en: '🔥 Bridge Burned. The IPO is oversubscribed, but the CEO sues you for breach of confidentiality. Career limiting move.', th: '🔥 เผาสะพาน IPO ยอดจองล้น แต่ CEO ฟ้องคุณฐานละเมิดความลับ อนาคตดับวูบ', zh: '🔥 过河拆桥。IPO超额认购，但CEO起诉你违反保密规定。限制职业生涯的举动。' }, stats: { competence: 40, ethics: 30, leadership: -20, innovation: 10 } }
        ]
    },
    {
        id: 'financial_analyst_037',
        text: {
            en: '🐻 The Short Attack: A famous activist short-seller publishes a report claiming your top holding is a fraud. The stock drops 20% in an hour. Your boss screams "Do something!"',
            th: '🐻 การโจมตีฝั่ง Short: นักขายชอร์ตชื่อดังออกรายงานว่าหุ้นตัวโปรดของคุณเป็นของปลอม หุ้นร่วง 20% ในชั่วโมงเดียว เจ้านายตะโกน "ทำอะไรสักอย่างสิโว้ย!"',
            zh: '🐻 做空攻击：一位著名的激进做空者发布了一份报告，声称你的头号持仓是欺诈。股票在一小时内下跌了20%。你的老板尖叫着"做点什么！"'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Defend: "Write a rebuttal report immediately. Pick apart their arguments. Double down and buy the dip!"', th: '🛡️ ปกป้อง: "เขียนรายงานโต้กลับทันที หักล้างข้อโต้แย้ง ถัวเฉลี่ยขาลงเลย!"', zh: '🛡️ 辩护："立即写一份反驳报告。拆穿他们的论点。加倍下注并逢低买入！"' }, consequence: { en: '⚔️ Bold. If you are right, you make a career-defining profit. If wrong, you sink with the ship.', th: '⚔️ กล้าหาญ ถ้าถูก คุณรวยเละสร้างชื่อ ถ้าผิด คุณจมไปพร้อมเรือ', zh: '⚔️ 大胆。如果你是对的，你将获得职业生涯的定义性利润。如果错了，你将随船沉没。' }, stats: { competence: 60, ethics: 50, leadership: 70, innovation: 20 } },
            { id: 'B', text: { en: '🏳️ Sell: "They might be right. Capitulate. Sell everything before it goes to zero. Cut losses."', th: '🏳️ ขาย: "เขาอาจจะถูกก็ได้ ยอมแพ้ ขายทิ้งก่อนเหลือศูนย์ ตัดขาดทุน"', zh: '🏳️ 卖出："他们可能是对的。投降。在归零前卖掉所有东西。止损。"' }, consequence: { en: '📉 Weak Hands. You saved some capital, but you locked in a massive loss at the bottom. Clients are angry.', th: '📉 มืออ่อน คุณรักษาเงินต้นได้บ้าง แต่ขาดทุนมหาศาลที่ก้นเหว ลูกค้าโกรธจัด', zh: '📉以此弱手。你保住了一些本金，但你在底部锁定了巨额亏损。客户很生气。' }, stats: { competence: 30, ethics: 40, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🕵️ Investigate: "Don\'t trade yet. Call suppliers, check warehouses. Verify the claims yourself. Data over emotion."', th: '🕵️ สืบสวน: "อย่าเพิ่งเทรด โทรหาซัพพลายเออร์ เช็คโกดัง พิสูจน์ข้อกล่าวหาด้วยตัวเอง ข้อมูลเหนืออารมณ์"', zh: '🕵️ 调查："还不要交易。给供应商打电话，检查仓库。亲自核实索赔。数据高于情感。"' }, consequence: { en: '🧠 Smart. You find the truth (it was half-true). You execute a nuanced trade that recovers 50% of losses.', th: '🧠 ฉลาด คุณเจอความจริง (จริงครึ่งนึง) คุณเทรดแบบละเอียดกู้คืนมาได้ 50%', zh: '🧠 聪明。你发现了真相（是一半真的）。你执行了一项细致的交易，挽回了50%的损失。' }, stats: { competence: 90, ethics: 70, leadership: 60, innovation: 30 } },
            { id: 'D', text: { en: '🤐 Silence: "Say nothing. Let volatility settle. Doing nothing is better than panic trading."', th: '🤐 เงียบ: "ไม่พูดอะไร รอฝุ่นหายตลบ อยู่เฉยๆ ดีกว่าเทรดด้วยความตื่นตระหนก"', zh: '🤐 沉默："什么都别说。让波动平息。什么都不做比恐慌性交易要好。"' }, consequence: { en: '🐢 Passive. The stock recovers slightly, but you looked paralyzed during the crisis. Lack of leadership.', th: '🐢 เฉื่อย หุ้นดีดกลับนิดหน่อย แต่คุณดูแข็งทื่อตอนวิกฤต ขาดความเป็นผู้นำ', zh: '🐢 被动。股票略有反弹，但你在危机期间看起来像瘫痪了一样。缺乏领导力。' }, stats: { competence: 40, ethics: 50, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_038',
        text: {
            en: '🚀 The Fintech Disruptor: A startup approaches you for funding. They claim to use "Quantum AI" to predict stock movements. The founder is a 19-year-old dropout.',
            th: '🚀 ฟินเทคป่วนโลก: สตาร์ทอัพมาขอทุน อ้างว่าใช้ "ควอนตัม AI" ทำนายหุ้น ผู้ก่อตั้งเป็นเด็กซิ่วอายุ 19',
            zh: '🚀 金融科技颠覆者：一家初创公司向你寻求资金。他们声称使用"量子AI"来预测股票走势。创始人是一名19岁的辍学生。'
        },
        options: [
            { id: 'A', text: { en: '💰 Invest: "FOMO is real. If this is the next Google, I can\'t miss it. Throw $5M at them."', th: '💰 ลงทุน: "กลัวตกรถ ถ้าเป็นกูเกิลตัวต่อไป พลาดไม่ได้ โยนไป 5 ล้าน"', zh: '💰 投资："错失恐惧症是真实的。如果这是下一个谷歌，我不能错过。给他们500万。"' }, consequence: { en: '🎰 Lottery Ticket. It was a scam. The tech didn\'t exist. You lost the $5M. Due diligence failed.', th: '🎰 ล็อตเตอรี่ สแกมชัดๆ เทคโนโลยีไม่มีจริง เสีย 5 ล้าน ตรวจสอบล้มเหลว', zh: '🎰以此以此彩票。这是一个骗局。技术并不存在。你损失了500万。尽职调查失败。' }, stats: { competence: 20, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🔬 Audit Tech: "Demand a code review and live demo. If the tech is real, we invest. If not, goodbye."', th: '🔬 ตรวจสอบเทค: "ขอดูโค้ดและเดโมสด ถ้าของจริงเราลง ถ้าไม่ ก็ลาขาด"', zh: '🔬 审计技术："要求代码审查和现场演示。如果技术是真的，我们就投资。如果不是，再见。"' }, consequence: { en: '🛡️ Due Diligence. They refuse the audit. You dodge a fraud. Your boss praises your skepticism.', th: '🛡️ การตรวจสอบเชิงลึก เขาไม่ยอมให้ตรวจ คุณรอดจากของปลอม เจ้านายชมความขี้สงสัยของคุณ', zh: '🛡️ 尽职调查。他们拒绝审计。你躲过了一个骗局。你的老板称赞你的怀疑精神。' }, stats: { competence: 80, ethics: 60, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🤝 Acqui-hire: "Forget the tech. Hire the kid. He\'s smart and hungry. We can use that energy here."', th: '🤝 ซื้อตัว: "ช่างเทค จ้างเด็กนั่นมา เขาฉลาดและหิวความสำเร็จ เราใช้พลังงานนั้นที่นี่ได้"', zh: '🤝 收购聘用："忘掉技术。雇佣那个孩子。他既聪明又饥渴。我们可以在这里利用这种能量。"' }, consequence: { en: '✨ Talent Acquisition. He joins, disrupts your boring team, and builds something actually useful later. Good pivot.', th: '✨ การได้มาซึ่งคนเก่ง เขาเข้าทีม ปรับเปลี่ยนทีมอันน่าเบื่อของคุณ แล้วสร้างของที่มีประโยชน์จริง เยี่ยม', zh: '✨ 人才以此收购。他加入，颠覆了你无聊的团队，后来建立了一些真正有用的东西。很好的转身。' }, stats: { competence: 60, ethics: 50, leadership: 70, innovation: 80 } },
            { id: 'D', text: { en: '😆 Laugh: "Quantum AI? Please. Come back when you have revenue. Stick to fundamentals."', th: '😆 หัวเราะ: "ควอนตัม AI? ตลก กลับมาตอนมีรายได้นะ ยึดพื้นฐานไว้ไอ้น้อง"', zh: '😆 大笑："量子AI？拜托。等你有了收入再来。坚持基本面。"' }, consequence: { en: '👴 Boomer Energy. You missed a trend (maybe not this one, but the next one). You look out of touch.', th: '👴 พลังคนแก่ คุณพลาดเทรนด์ (อาจไม่ใช่ตัวนี้ แต่ตัวหน้าพลาดแน่) คุณดูตกยุค', zh: '👴 婴儿潮一代的能量。你错过了一个趋势（可能不是这个，而是下一个）。你看起来脱节了。' }, stats: { competence: 40, ethics: 40, leadership: 10, innovation: -30 } }
        ]
    },
    {
        id: 'financial_analyst_039',
        text: {
            en: '🌪️ The Big Short: Every indicator flashes red. The housing market is a bubble. But everyone is partying. You want to bet against the economy.',
            th: '🌪️ ชอร์ตบิ๊กเบิ้ม: ทุกตัวชี้วัดแดงเถือก ตลาดบ้านเป็นฟองสบู่ แต่ทุกคนกำลังปาร์ตี้ คุณอยากแทงสวนเศรษฐกิจ',
            zh: '🌪️ 大空头：每一个指标都亮起红灯。房地产市场是一个泡沫。但每个人都在狂欢。你想做空经济。'
        },
        options: [
            { id: 'A', text: { en: '💎 Diamond Hands Short: "Short everything. Leverage 10x. Hold until it cracks. Ignore the temporary losses."', th: '💎 ไดมอนด์แฮนด์ชอร์ต: "ชอร์ตแม่มทุกอย่าง เลเวอเรจ 10 เท่า ถือจนกว่าจะพัง เมินตัวเลขแดงชั่วคราว"', zh: '💎 钻石手做空："做空一切。10倍杠杆。持有直到崩盘。忽略暂时以此以此的以此以此损失。"' }, consequence: { en: '🦁 Legend. You are early and suffer for months, but when it crashes, you make billions. History books stuff.', th: '🦁 ตำนาน คุณมาก่อนกาลและทรมานหลายเดือน แต่พอมันพัง คุณรวยเป็นพันล้าน ระดับจารึกในประวัติศาสตร์', zh: '🦁 传奇。你早到了，受苦了几个月，但当它崩盘时，你赚了数十亿。史书级的东西。' }, stats: { competence: 90, ethics: 40, leadership: 80, innovation: 60 } },
            { id: 'B', text: { en: '🤏 Hedge Only: "Just protect our current positions. Buy some puts as insurance. Don\'t go net short."', th: '🤏 เฮดจ์ก็พอ: "แค่ป้องกันพอร์ตปัจจุบัน ซื้อ Puts เป็นประกัน อย่าชอร์ตสุทธิ"', zh: '🤏 仅对冲："只是保护我们目前的头寸。买一些看跌期权作为保险。不要净做空。"' }, consequence: { en: '🛡️ Safe. The crash happens. You lose less than others, but you don\'t get rich. You keep your job.', th: '🛡️ ปลอดภัย ตลาดพัง คุณเสียน้อยกว่าคนอื่น แต่ไม่รวย ยังมีงานทำ', zh: '🛡️以此安全。崩盘发生了。你损失比别人少，但没发财。你保住了工作。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🎉 Party On: "The Fed will bail us out. Keep buying. Don\'t fight the liquidity."', th: '🎉 ปาร์ตี้ต่อ: "เดี๋ยวเฟดก็อุ้ม ซื้อต่อ อย่าฝืนสภาพคล่อง"', zh: '🎉 继续狂欢："美联储会救我们的。继续买入。不要对抗流动性。"' }, consequence: { en: '💥 Bagholder. The music stops. You are left holding worthless assets. You are fired in disgrace.', th: '💥 ติดดอย เพลงหยุด คุณถือสินทรัพย์ขยะเต็มมือ โดนไล่ออกอย่างอัปยศ', zh: '💥 那个拿包的人。音乐停止了。你手里拿着一文不值的资产。你被耻辱地解雇了。' }, stats: { competence: 10, ethics: 30, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '📢 Warn Clients: "Issue a \'Sell\' rating on the entire sector. Tell clients to move to cash. Save them."', th: '📢 เตือนลูกค้า: "ออกเรตติ้ง \'ขาย\' ทั้งเซกเตอร์ บอกลูกค้าถือเงินสด ช่วยพวกเขา"', zh: '📢 警告客户："对整个板块发布\'卖出\'评级。告诉客户持有现金。救救他们。"' }, consequence: { en: '👑 Trusted Advisor. Firm loses revenue now, but clients trust you forever. You build a loyal empire.', th: '👑 ที่ปรึกษาที่ไว้ใจ บริษัทรายได้หดตอนนี้ แต่ลูกค้าเชื่อคุณตลอดไป สร้างอาณาจักรที่ภักดี', zh: '👑 值得信赖的顾问。公司现在损失收入，但客户永远信任你。你建立了一个忠诚的帝国。' }, stats: { competence: 80, ethics: 90, leadership: 70, innovation: 30 } }
        ]
    },
    {
        id: 'financial_analyst_040',
        text: {
            en: '🩺 Health vs Wealth: You have worked 100-hour weeks for a year. Your doctor says your heart is failing. A massive deal is closing this week that guarantees a $1M bonus.',
            th: '🩺 สุขภาพ vs ความรวย: คุณทำงานสัปดาห์ละ 100 ชม. มาเป็นปี หมอบอกหัวใจคุณกำลังจะวาย ดีลใหญ่จะปิดวีคนี้การันตีโบนัสล้านนึง',
            zh: '🩺 健康 vs 财富：你已经连续一年每周工作100小时。你的医生说你的心脏正在衰竭。本周将达成一项巨额交易，保证有100万美元的奖金。'
        },
        options: [
            { id: 'A', text: { en: '💊 Push Through: "Take the pills. Sleep under the desk. Close the deal. I can rest when I\'m rich."', th: '💊 ฝืนไปต่อ: "กินยา นอนใต้โต๊ะ ปิดดีลให้ได้ รวยแล้วค่อยพัก"', zh: '💊 坚持到底："吃药。睡在桌子底下。完成交易。等我有钱了再休息。"' }, consequence: { en: '💀 Rich Corpse. You close the deal. You have a heart attack at the celebration dinner. RIP.', th: '💀 ศพเศรษฐี ปิดดีลได้ หัวใจวายกลางงานเลี้ยงฉลอง ไปสู่สุขคติ', zh: '💀以此有钱的尸体。你完成了交易。你在庆祝晚宴上心脏病发作。安息。' }, stats: { competence: 100, ethics: 40, leadership: 50, innovation: 0 } },
            { id: 'B', text: { en: '🛌 Quit Now: "Resign immediately. Go to the hospital. Health is wealth."', th: '🛌 ลาออกเดี๋ยวนี้: "ลาออกทันที ไปโรงพยาบาล อโรคยา ปรมาลาภา"', zh: '🛌 立即辞职："立即辞职。去医院。健康就是财富。"' }, consequence: { en: '🧘 Alive & Broke. You survive. You lose the bonus and career momentum, but you get to see 40.', th: '🧘 จนแต่รอด คุณรอด เสียโบนัสและโมเมนตัมอาชีพ แต่ได้อยู่ถึง 40', zh: '🧘 活着但破产由于。你活了下来。你失去了奖金和职业势头，但你能活到40岁。' }, stats: { competence: 0, ethics: 60, leadership: 0, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Delegate: "Hand the lead to a junior. Take 50% credit. Manage from a hospital bed via Zoom."', th: '🤝 จ่ายงาน: "ส่งไม้ต่อให้รุ่นน้อง รับเครดิต 50% สั่งงานผ่านซูมจากเตียงโรงบาล"', zh: '🤝 授权："把领导权交给大三学生。拿50%的功劳。通过Zoom在病床上管理。"' }, consequence: { en: '⚖️ Survival Strategy. You get half the money and live. The junior gets a bump. Smart management.', th: '⚖️ กลยุทธ์เอาตัวรอด ได้เงินครึ่งนึงและมีชีวิตอยู่ รุ่นน้องได้แจ้งเกิด บริหารฉลาด', zh: '⚖️以此生存策略。你拿到一半的钱并活了下来。大三学生得到了提升。聪明的管理。' }, stats: { competence: 70, ethics: 50, leadership: 80, innovation: 50 } },
            { id: 'D', text: { en: '💊 Microdose: "Try experimental bio-hacking to sustain energy without stress. Optimize the machine."', th: '💊 ไมโครโดส: "ลองไบโอแฮ็กกิ้งทดลองเพื่อคงพลังงานโดยไม่เครียด ปรับแต่งเครื่องจักร"', zh: '💊以此微剂量："尝试实验性的生物黑客技术来维持能量而没有压力。优化机器。"' }, consequence: { en: '😵 Psychosis. The combination of drugs and stress makes you hallucinate during the pitch. You are escorted out.', th: '😵 จิตหลอน ยาบวกเครียดทำคุณหลอนกลางพิตช์งาน โดนหิ้วปีกออกไป', zh: '😵 精神病。药物和压力的结合让你在推介时产生幻觉。你被护送出去了。' }, stats: { competence: -20, ethics: -10, leadership: -30, innovation: 30 } }
        ]
    },
    {
        id: 'financial_analyst_041',
        text: {
            en: '📉 The Spreadsheet Error: You realize a formula error in your valuation model overstated a company\'s value by $500M. The deal already closed based on your numbers.',
            th: '📉 ข้อผิดพลาดสเปรดชีต: คุณเพิ่งรู้ตัวว่าสูตรคำนวณมูลค่าผิด ประเมินเกินจริงไป 500 ล้าน ดีลปิดไปแล้วด้วยตัวเลขนั้น',
            zh: '📉 电子表格错误：你意识到估值模型中的公式错误导致公司价值被高估了5亿美元。交易已经根据你的数字完成了。'
        },
        options: [
            { id: 'A', text: { en: '🤐 Hide It: "Delete the old versions. Fix the formula quietly. Pray no one audits the past."', th: '🤐 ซ่อนไว้: "ลบเวอร์ชันเก่า แก้สูตรเงียบๆ ภาวนาอย่าให้ใครตรวจสอบย้อนหลัง"', zh: '🤐 隐瞒："删除旧版本。悄悄修复公式。祈祷没人审计过去。"' }, consequence: { en: '💣 Sleeper Sell. You survive for now. But 3 years later, the asset underperforms and the audit exposes you. Prison.', th: '💣 ระเบิดเวลา รอดตอนนี้ อีก 3 ปีสินทรัพย์ทำเงินไม่ได้ การตรวจสอบแฉคุณ คุก', zh: '💣 沉睡的抛售。你暂时幸存下来。但3年后，资产表现不佳，审计曝光了你。入狱。' }, stats: { competence: 20, ethics: -80, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: '📢 Confess: "Tell the MD immediately. Offering to resign. Integrity is worth more than a job."', th: '📢 สารภาพ: "บอก MD ทันที พร้อมลาออก ความซื่อสัตย์สำคัญกว่างาน"', zh: '📢 坦白："立即告诉董事总经理。主动辞职。诚信比工作更有价值。"' }, consequence: { en: '🛡️ Respect. You are fired for incompetence, but given a good reference for honesty. You start over at a smaller shop.', th: '🛡️ ได้ใจ โดนไล่ออกเพราะสะเพร่า แต่ได้ใบรับรองความประพฤติที่ดี เริ่มใหม่ที่บริษัทเล็ก', zh: '🛡️ 尊重。你因无能被解雇，但因诚实而获得好的推荐。你在一家小公司重新开始。' }, stats: { competence: 40, ethics: 90, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🔄 Spin It: "Update the model with \'new assumptions\' that justify the high price retroactively. Gaslight the math."', th: '🔄 บิดเบือน: "อัปเดตโมเดลด้วย \'สมมติฐานใหม่\' ที่รองรับราคาสูงนั้นย้อนหลัง แถตัวเลข"', zh: '🔄 编造："用证明高价合理的新\'假设\'更新模型。以此欺骗数学。"' }, consequence: { en: '🧙‍♂️ Financial Wizardry. It works. You confirm that finance is just made-up numbers anyway. You feel dirty.', th: '🧙‍♂️ พ่อมดการเงิน ได้ผลเฉย คุณยืนยันว่าการเงินก็แค่ตัวเลขสมมติ รู้สึกสกปรกนิดๆ', zh: '🧙‍♂️以此金融巫术。奏效了。反正你确信金融只是编造的数字。你觉得很脏。' }, stats: { competence: 70, ethics: -20, leadership: 20, innovation: 50 } },
            { id: 'D', text: { en: '🤷 Blame Intern: "It was the summer intern\'s file! I just reviewed it. Fire the kid."', th: '🤷 โทษเด็กฝึกงาน: "ไฟล์ของเด็กฝึกงานภาคฤดูร้อน! ฉันแค่ตรวจทาน ไล่เด็กออกซะ"', zh: '🤷 怪罪实习生："那是暑期实习生的文件！我只是审阅了一下。解雇那个孩子。"' }, consequence: { en: '👹 Managerial Malpractice. Everyone knows you checked it. You look weak and cruel. Team morale collapses.', th: '👹 การจัดการที่ชั่วร้าย ทุกคนรู้ว่าคุณตรวจ คุณดูอ่อนแอและโหดร้าย ขวัญกำลังใจทีมพัง', zh: '👹 管理渎职。每个人都知道你检查过。你看起来软弱且残忍。团队士气崩溃。' }, stats: { competence: 30, ethics: -50, leadership: -60, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_042',
        text: {
            en: '🍾 The "Client Entertainment": A huge client promises you the deal if you take him to a "special" club in Vegas and put $20k on the corporate card. It violates all expense policies.',
            th: '🍾 การ "เอนเตอร์เทน" ลูกค้า: ลูกค้ารายใหญ่อยากปิดดีลถ้าคุณพาไปคลับ "พิเศษ" ที่เวกัสและรูดบัตรบริษัท 2 หมื่น ผิดกฎทุกข้อ',
            zh: '🍾 "客户娱乐"：一位大客户承诺，如果你带他去维加斯的一家"特殊"俱乐部并在公司卡上刷2万美元，就和你达成交易。这违反所有报销政策。'
        },
        options: [
            { id: 'A', text: { en: '💳 Swipe It: "Expense it as \'Catering\'. Get the deal done. Revenue covers sins."', th: '💳 รูดไปเถอะ: "ลงบัญชีว่า \'ค่าจัดเลี้ยง\' ปิดดีลให้จบ รายได้จะลบล้างบาปเอง"', zh: '💳 刷卡："把它报销为\'餐饮费\'。完成交易。收入掩盖罪过。"' }, consequence: { en: '🎰 High Roller. Deal signed. Accounting audits it. You are fired for fraud. But you had a wild night.', th: '🎰 นักพนันตัวยง เซ็นสัญญา บัญชีตรวจสอบ โดนไล่ออกข้อหาโกง แต่ได้คืนสุดเหวี่ยง', zh: '🎰 豪赌客。签署协议。会计审计。你因欺诈被解雇。但如果你度过了一个疯狂的夜晚。' }, stats: { competence: 50, ethics: -40, leadership: 20, innovation: 60 } },
            { id: 'B', text: { en: '🛑 Refuse: "I can take you to a Michelin star dinner, but no clubs. Policy is policy."', th: '🛑 ปฏิเสธ: "พาไปกินมิชลินได้ แต่ไม่ไปคลับ กฎต้องเป็นกฎ"', zh: '🛑 拒绝："我可以带你去吃米其林星级晚餐，但不能去俱乐部。政策就是政策。"' }, consequence: { en: '🚪 Deal Lost. Client calls you "boring" and goes to a competitor. Boss is mad about the loss but can\'t blame you.', th: '🚪 ดีลล่ม ลูกค้าด่า "น่าเบื่อ" แล้วหนีไปหาคู่แข่ง เจ้านายโกรธที่เสียงานแต่ด่าไม่ลง', zh: '🚪 失去交易。客户说你"无聊"并去找了竞争对手。老板对损失感到生气，但不能怪你。' }, stats: { competence: 40, ethics: 80, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '💰 Pay Pockets: "Pay with my own personal cash. Don\'t expense it. Keep the bonus compliant."', th: '💰 ควักเนื้อ: "จ่ายเงินส่วนตัว ไม่เบิกบริษัท รักษาโบนัสให้ขาวสะอาด"', zh: '💰以此自掏腰包："用我自己的现金支付。不要报销。保持奖金合规。"' }, consequence: { en: '💸 Investment. You lose $20k now but make $200k in bonus later. Net profit. Darkly pragmatic.', th: '💸 การลงทุน เสีย 2 หมื่นวันนี้ ได้โบนัส 2 แสนทีหลัง กำไรสุทธิ เน้นผลลัพธ์แบบดาร์กๆ', zh: '💸 投资。你现在损失2万，但后来赚了20万奖金。净利润。黑暗的实用主义。' }, stats: { competence: 70, ethics: 30, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '📞 Call Compliance: "Report the client\'s request immediately. Ask for guidance."', th: '📞 โทรหาฝ่ายกฎระเบียบ: "รายงานคำขอลูกค้าขทันที ขอคำแนะนำ"', zh: '📞 致电合规部："立即报告客户的要求。寻求指导。"' }, consequence: { en: '🛡️ By the Book. Legal kills the deal officially. You are covered, but known as a tattletale.', th: '🛡️ ตามระเบียบ ฝ่ายกฎหมายสั่งล้มดีล คุณรอดตัว แต่ได้ชื่อว่าเป็นคนขี้ฟ้อง', zh: '🛡️ 照章办事。法律部门正式取消交易。你没事，但被称为告密者。' }, stats: { competence: 40, ethics: 70, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_043',
        text: {
            en: '🧠 Expert Networks: You pay an "industry expert" $1000/hr for insights. He starts reading verbatim from internal confidential memos of a target company. Illegal insider info.',
            th: '🧠 เครือข่ายผู้เชี่ยวชาญ: คุณจ้าง "ผู้เชี่ยวชาญ" ชม.ละพันเหรียญ เขาเริ่มอ่านบันทึกลับภายในของบริษัทเป้าหมายให้ฟัง ข้อมูลวงในผิดกฎหมาย',
            zh: '🧠 专家网络：你以每小时1000美元的价格聘请一位"行业专家"提供见解。他开始逐字逐句地通过朗读目标公司的内部机密备忘录。非法内幕信息。'
        },
        options: [
            { id: 'A', text: { en: '📝 Take Notes: "Write down everything. This is gold. Just don\'t quote him directly."', th: '📝 จดแหลก: "จดทุกอย่าง นี่มันทองคำชัดๆ แค่อย่าอ้างชื่อเขาตรงๆ"', zh: '📝 做笔记："记下一切。这是金子。只是不要直接引用他的话。"' }, consequence: { en: '⚖️ Insider Trading. You make a killing. The FBI taps the phone lines. Indictment pending.', th: '⚖️ อินไซเดอร์เทรดดิ้ง รวยเละ FBI ดักฟังโทรศัพท์ เตรียมโดนฟ้อง', zh: '⚖️ 内幕交易。你大赚一笔。联邦调查局窃听电话线路。起诉在即。' }, stats: { competence: 40, ethics: -70, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Hang Up: "Stop! I can\'t hear this. This call is over. Delete notes. Report to compliance."', th: '🛑 วางสาย: "หยุด! ผมฟังไม่ได้ จบการสนทนา ลบโน้ต แจ้งฝ่ายกฎระเบียบ"', zh: '🛑 挂断："停！我不能以此以此听这个。通话结束。删除笔记。向合规部报告。"' }, consequence: { en: '🛡️ Clean Hands. You miss the trade. The expert is arrested later. You are a witness, not a defendant.', th: '🛡️ มือสะอาด พลาดโอกาสเทรด ผู้เชี่ยวชาญโดนจับทีหลัง คุณเป็นพยาน ไม่ใช่จำเลย', zh: '🛡️以此虽然手脚干净。你错过了交易。专家后来被捕。你是证人，不是被告。' }, stats: { competence: 60, ethics: 90, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🔄 Mosaic Theory: "Ask him to verify with public data points only. Try to reconstruct the insight legally."', th: '🔄 ทฤษฎีโมเสก: "ขอให้เขายืนยันด้วยข้อมูลสาธารณะเท่านั้น พยายามประกอบร่างข้อมูลให้ถูกกฎหมาย"', zh: '🔄 镶嵌理论："让他只用公共数据点进行验证。尝试合法地重构洞察。"' }, consequence: { en: '🧠 Master Class. You use the lead to find legal proof. High effort, high reward, legal defense verified.', th: '🧠 ชั้นครู คุณใช้เบาะแสหาหลักฐานที่ถูกกฎหมาย เหนื่อยหน่อยแต่คุ้ม และรอดคุก', zh: '🧠 大师级。你利用这条线索找到了合法证据。高投入，高回报，法律辩护经得起推敲。' }, stats: { competence: 90, ethics: 60, leadership: 60, innovation: 40 } },
            { id: 'D', text: { en: '🤐 Use Indirectly: "Don\'t trade the stock. Trade a competitor or supplier correlated to the news. Harder to track."', th: '🤐 ใช้ทางอ้อม: "อย่าเทรดตัวนั้น เทรดคู่แข่งหรือซัพพลายเออร์ที่เกี่ยวกัน ตามรอยยากกว่า"', zh: '🤐 间接使用："不要交易这只股票。交易与该新闻相关的竞争对手或供应商。更难追踪。"' }, consequence: { en: '🕶️ Shadow Banking. Still illegal, but clever. You profited but sleep with one eye open.', th: '🕶️ ธนาคารเงา ผิดกฎหมายอยู่ดี แต่ฉลาด กำไรแต่ต้องนอนลืมตาข้างนึง', zh: '🕶️ 影子银行。仍然是非法的，但很聪明。你获利了，但睡觉都要睁只眼。' }, stats: { competence: 70, ethics: -40, leadership: 30, innovation: 30 } }
        ]
    },
    {
        id: 'financial_analyst_044',
        text: {
            en: '🌍 The Dictator\'s Fund: A Sovereign Wealth Fund from a human-rights abusing regime wants to invest $10B with your firm. Your fees would be $100M.',
            th: '🌍 กองทุนเผด็จการ: กองทุนความมั่งคั่งแห่งชาติจากประเทศละเมิดสิทธิมนุษยชนอยากลงเงิน 1 หมื่นล้าน ค่าฟีคุณคือ 100 ล้าน',
            zh: '🌍 独裁者基金：一个侵犯人权的政权的主权财富基金想向你的公司投资100亿美元。你的费用将是1亿美元。'
        },
        options: [
            { id: 'A', text: { en: '💰 Take It: "Money has no flag. We manage capital, we don\'t fix the world. Sign the papers."', th: '💰 รับไว้: "เงินไม่มีสัญชาติ เราบริหารทุน ไม่ได้กู้โลก เซ็นสัญญาซะ"', zh: '💰 拿下："金钱没有国界。我们管理资本，我们不拯救世界。签字。"' }, consequence: { en: '📈 Record Profit. Bonuses are insane. Activists protest outside the building every day. You buy noise-canceling headphones.', th: '📈 กำไรนิวไฮ โบนัสบ้าคลั่ง นักประท้วงยืนหน้าตึกทุกวัน คุณซื้อหูฟังตัดเสียงรบกวน', zh: '📈以此以此创纪录的利润。奖金疯狂。激进分子每天在楼外抗议。你买了降噪以此以此耳机。' }, stats: { competence: 50, ethics: -60, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Reject It: "Blood money. I refuse to manage assets for them. It violates our ESG policy."', th: '🛑 ปฏิเสธ: "เงินเปื้อนเลือด ฉันไม่บริหารให้หรอก ผิดนโยบาย ESG"', zh: '🛑 拒绝："血腥的钱。我拒绝为他们管理资产。这违反了我们的ESG政策。"' }, consequence: { en: '🛡️ Moral High Ground. You lose the biggest deal of the decade. Competitors take it and mock you. You sleep well though.', th: '🛡️ จุดยืนทางศีลธรรม เสียดีลแห่งทศวรรษ คู่แข่งคาบไปกินและเยาะเย้ย แต่นอนหลับสบาย', zh: '🛡️ 道德高地。你失去了十年来最大的交易。竞争对手拿走了它并嘲笑你。虽然你睡得很香。' }, stats: { competence: 30, ethics: 100, leadership: 60, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Ring Fence: "Accept the money but put it in a separate legal entity with strict non-political covenants."', th: '🤝 ล้อมรั้ว: "รับเงินแต่แยกนิติบุคคล มีสัญญาห้ามยุ่งการเมืองเคร่งครัด"', zh: '🤝 围栏："接受这笔钱，但将其放入一个单独的法律实体，并附带严格的非政治条款。"' }, consequence: { en: '⚖️ Lawyer\'s delight. Complicated setup. It creates a separation illusion. You get paid, but critics aren\'t fooled.', th: '⚖️ ทนายยิ้ม โครงสร้างซับซ้อน สร้างภาพลวงตาการแยกส่วน ได้เงิน แต่นักวิจารณ์ไม่โง่', zh: '⚖️ 律师的喜悦。复杂的设置。它制造了一种分离的幻觉。你拿到了钱，但批评者没有被愚弄。' }, stats: { competence: 70, ethics: 0, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '💸 Donate Fees: "Take the deal, but donate 100% of the management fees to human rights charities in their country."', th: '💸 บริจาคค่าฟี: "รับดีล แต่บริจาคค่าฟี 100% ให้องค์กรสิทธิฯ ในประเทศเขา"', zh: '💸 捐赠费用："接受这笔交易，但将100%的管理费捐赠给他们国家的人权慈善机构。"' }, consequence: { en: ' Robin Hood. The dictator is furious and pulls the funds. A PR stunt that backfires on business but wins hearts.', th: ' Robin Hood เผด็จการโกรธจัดดึงเงินกลับ PR stunt ที่ทำธุรกิจพังแต่ได้ใจคน', zh: ' 罗宾汉。独裁者大发雷霆并撤回资金。一场在商业上适得其反但在赢得了人心的公关秀。' }, stats: { competence: 40, ethics: 80, leadership: 80, innovation: 80 } }
        ]
    },
    {
        id: 'financial_analyst_045',
        text: {
            en: '🕶️ Dark Pools: A client wants to sell a massive block of stock (10% of a company) without alerting the public market. He asks you to find a buyer in a "Dark Pool".',
            th: '🕶️ บ่อมือ (Dark Pools): ลูกค้าอยากขายหุ้นลอตใหญ่ (10% ของบริษัท) โดยไม่ให้ตลาดรู้ เขาให้คุณหาคนซื้อในกระดานมืด',
            zh: '🕶️ 暗池：一位客户想在不惊动公开市场的情况下出售大量股票（一家公司的10%）。他让你在一个"暗池"里寻找买家。'
        },
        options: [
            { id: 'A', text: { en: '🕵️ Execute: "Quietly call the big desks. Discreet matches only. Keep the price stable."', th: '🕵️ จัดการ: "โทรหาโต๊ะใหญ่เงียบๆ จับคู่ลับๆ รักษาเสถียรภาพราคา"', zh: '🕵️ 执行："悄悄给大柜台打电话。只进行谨慎的匹配。保持价格稳定。"' }, consequence: { en: '🧊 Iceberg Trade. Perfect execution. The market never saw a ripple. You prove your value as a block trader.', th: '🧊 เทรดภูเขาน้ำแข็ง เนียนกริบ ตลาดไม่กระเพื่อม พิสูจน์ฝีมือเทรดเดอร์ระดับเทพ', zh: '🧊 冰山交易。完美的执行。市场从未见过涟漪。证明了你作为大宗交易员的价值。' }, stats: { competence: 80, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '📢 Front Run: "Short the stock in your personal account before placing the block trade. Free money."', th: '📢 ดักหน้า: "ชอร์ตหุ้นในพอร์ตส่วนตัวก่อนวางออเดอร์ เงินฟรีชัดๆ"', zh: '📢以此抢先交易："在进行大宗交易之前，在你的个人账户中做空该股票。捡钱。"' }, consequence: { en: '🚨 Jail. That is textbook front-running. The sequence of trades is flagged instantly. Goodbye.', th: '🚨 คุก ดักหน้าตามตำราเป๊ะ ลำดับเทรดโดนจับได้ทันที ลาก่อย', zh: '🚨以此以此入狱。那是教科书式的抢先交易。交易顺序立即被标记。再见。' }, stats: { competence: 20, ethics: -100, leadership: -50, innovation: 0 } },
            { id: 'C', text: { en: '🔊 Leak Rumors: "Whisper to a few hedge funds that a \'big seller is coming\'. Drive the price down to help a friend buy cheap."', th: '🔊 ปล่อยข่าวลือ: "กระซิบกองทุนเฮดจ์ฟันด์ว่า \'เจ้าใหญ่จะเท\' ทุบราคาให้เพื่อนช้อนซื้อถูกๆ"', zh: '🔊 散布以此谣言："向几家对冲基金透露\'大卖家来了\'。把价格压低，帮助朋友以此以此以此以此以此以此以低价买入。"' }, consequence: { en: '📉 Manipulation. Client gets a horrible fill price. He sues you for breach of fiduciary duty.', th: '📉 ปั่นราคา ลูกค้าขายได้ราคาห่วยแตก เขาฟ้องคุณฐานละเมิดหน้าที่', zh: '📉以此操纵。客户得到的成交价很糟糕。他起诉你违反信托责任。' }, stats: { competence: 40, ethics: -60, leadership: -20, innovation: 10 } },
            { id: 'D', text: { en: '☀️ Light Pool: "Convince client to sell openly via an algorithm over 3 weeks. Transparency avoids regulatory risk."', th: '☀️ กระดานสว่าง: "กล่อมลูกค้าให้ทยอยขายผ่านอัลกอ 3 อาทิตย์ โปร่งใสเลี่ยงความเสี่ยงก.ล.ต."', zh: '☀️以此亮池："说服客户在3周内通过算法公开出售。透明度避免了监管风险。"' }, consequence: { en: '🐢 Slow & Safe. It takes longer. Price slips a bit. But zero legal risk. Client respects the safety.', th: '🐢 ช้าแต่ชัวร์ นานหน่อย ราคาตกนิดนึง แต่ไม่เสี่ยงคุก ลูกค้าเคารพความปลอดภัย', zh: '🐢 慢而安全。花费的时间更长。价格下跌了一点。但零法律风险。客户尊重这种安全性。' }, stats: { competence: 60, ethics: 70, leadership: 40, innovation: 30 } }
        ]
    },
    {
        id: 'financial_analyst_046',
        text: {
            en: '👵 The Pension Dump: Management orders you to sell complex, high-risk derivatives to a state teacher\'s pension fund. They don\'t understand the risk.',
            th: '👵 ทิ้งขยะให้คนแก่: ผู้บริหารสั่งให้คุณขายอนุพันธ์ซับซ้อนความเสี่ยงสูงให้กองทุนบำเหน็จครู พวกเขาไม่เข้าใจความเสี่ยงหรอก',
            zh: '👵 养老金倾销：管理层命令你将复杂的、高风险的衍生品出售给州教师养老基金。他们不了解其中的风险。'
        },
        options: [
            { id: 'A', text: { en: '🗑️ Dump It: "Orders are orders. If they buy it, that\'s on them. Caveat emptor."', th: '🗑️ ทิ้งไป: "คำสั่งก็คือคำสั่ง ถ้าเขาซื้อก็เรื่องของเขา ผู้ซื้อต้องระวังเอง"', zh: '🗑️ 扔掉它："命令就是命令。如果他们买了，那是他们的事。买者自负。"' }, consequence: { en: '📉 Crisis. The fund collapses a year later. Teachers lose pensions. You got a bonus, but act surprised.', th: '📉 วิกฤต กองทุนล้มในปีต่อมา ครูสูญเสียเงินบำนาญ คุณได้โบนัส และแกล้งทำเป็นตกใจ', zh: '📉 危机。基金一年后崩溃。教师失去了养老金。你得到了奖金，但表现得很惊讶。' }, stats: { competence: 40, ethics: -90, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Block It: "I won\'t do it. It\'s unsuitable for them. I\'ll flag it to the compliance ethics committee."', th: '🛑 ขวางไว้: "ฉันไม่ทำ มันไม่เหมาะกับพวกเขา ฉันจะแจ้งคณะกรรมการจริยธรรม"', zh: '🛑 阻止它："我不会做的。这对他们不合适。我会将其报告给合规道德委员会。"' }, consequence: { en: '🛡️ Hero/Martyr. The trade is blocked. Management hates you. You likely get "processed out" soon.', th: '🛡️ ฮีโร่/ผู้พลีชีพ ดีลโดนระงับ ผู้บริหารเกลียดคุณ คุณคงโดนบีบออกเร็วๆ นี้', zh: '🛡️以此英雄/烈士。交易被阻止。管理层讨厌你。你可能很快就会被"处理掉"。' }, stats: { competence: 50, ethics: 100, leadership: 60, innovation: 0 } },
            { id: 'C', text: { en: '📚 Educate Them: "Explain the risks fully to the pension managers. If they still buy, my conscience is clear."', th: '📚 ให้ความรู้: "อธิบายความเสี่ยงทั้งหมดให้ผู้จัดการกองทุนฟัง ถ้าเขายังซื้อ มโนธรรมฉันก็สะอาด"', zh: '📚 教育他们："向养老金管理者充分解释风险。如果他们还要买，那我也问心无愧。"' }, consequence: { en: '🤝 Honest Broker. They pass on the deal. You lose the commission but gain trust for safe assets later.', th: '🤝 นายหน้าซื่อสัตย์ เขาไม่เอาดีล คุณอดค่าคอมฯ แต่ได้ความเชื่อใจสำหรับสินทรัพย์ปลอดภัยวันหน้า', zh: '🤝 诚实的经纪人。他们放弃了这笔交易。你失去了佣金，但后来因安全资产而获得了信任。' }, stats: { competence: 70, ethics: 80, leadership: 50, innovation: 20 } },
            { id: 'D', text: { en: '🔄 Repackage: "Structure a tranche that protects their principal but lowers the yield. Safe dumping."', th: '🔄 แพ็คใหม่: "จัดโครงสร้างส่วนที่คุ้มครองเงินต้นแต่ลดผลตอบแทน ทิ้งของแบบปลอดภัย"', zh: '🔄 重新包装："构建一个保护其本金但降低收益率的分层。安全倾销。"' }, consequence: { en: '🧠 Engineering. You sell it morally. Returns are low, but no one loses their shirt. Good compromise.', th: '🧠 วิศวกรรมการเงิน คุณขายได้แบบไม่ผิดศีลธรรม ผลตอบแทนต่ำ แต่ไม่มีใครหมดตัว ประนีประนอมเยี่ยม', zh: '🧠 工程。你在道德上出售了它。回报率很低，但没有人输得精光。很好的妥协。' }, stats: { competence: 90, ethics: 50, leadership: 40, innovation: 60 } }
        ]
    },
    {
        id: 'financial_analyst_047',
        text: {
            en: '⚡ The Flash Crash: Your bespoke algorithm is malfunctioning and causing a massive market dip. You are losing $10M a minute. Stopping it requires a manual override that alerts the SEC.',
            th: '⚡ แฟลชแครช: อัลกอที่คุณเขียนเองกำลังรวนและทำตลาดร่วงหนัก คุณเสียเงินนาทีละ 10 ล้าน การหยุดมันต้องใช้ระบบมือที่แจ้งเตือนก.ล.ต.',
            zh: '⚡ 闪电崩盘：你的定制算法出现故障，导致市场大幅下挫。你每分钟损失1000万美元。停止它需要手动覆盖，这会向美国证券交易委员会发出警报。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Pull the Plug: "Shut it down! Alert the regulators. Save the market, kill the pnl."', th: '🛑 ดึงปลั๊ก: "ปิดระบบ! แจ้งก.ล.ต. กู้ตลาด ยอมขาดทุน"', zh: '🛑 拔掉插头："关掉它！以此警报监管机构。拯救市场，牺牲损益。"' }, consequence: { en: '👮 Fined. You stop the crash. You lose money and get fined, but you prevent a global meltdown.', th: '👮 โดนปรับ คุณหยุดวิกฤตได้ เสียเงินและโดนปรับ แต่ป้องกันหายนะโลกได้', zh: '👮以此被罚款。你阻止了崩盘。你赔了钱并被罚款，但你阻止了一场全球崩溃。' }, stats: { competence: 60, ethics: 90, leadership: 70, innovation: 0 } },
            { id: 'B', text: { en: '🎰 Let it Ride: "It might mean-revert! Don\'t touch it. Pray for a bounce."', th: '🎰 ปล่อยไหล: "เดี๋ยวมันก็ดีดกลับ! อย่าแตะ ภาวนาให้เด้ง"', zh: '🎰 让它以此去吧："它可能会均值以此回归！别碰它。祈祷反弹。"' }, consequence: { en: '💥 Total Wipeout. It didn\'t bounce. The firm is insolvent. You are blacklisted from the industry.', th: '💥 ล้างพอร์ต มันไม่เด้ง บริษัทล้มละลาย คุณโดนแบล็กลิสต์จากวงการ', zh: '💥 全军覆没。它没有反弹。公司资不抵债。你被行业列入黑名单。' }, stats: { competence: 20, ethics: 30, leadership: -50, innovation: 0 } },
            { id: 'C', text: { en: '🔧 Live Patch: "Try to rewrite the code on the fly without stopping execution. Cowboy coding."', th: '🔧 แก้สด: "พยายามแก้โค้ดสดๆ โดยไม่หยุดระบบ โค้ดดิ้งสไตล์คาวบอย"', zh: '🔧 实时以此修补："尝试在不停止执行的情况下动态重写代码。牛仔编码。"' }, consequence: { en: '🧙‍♂️ Miracle. You fix the bug in real-time. The market recovers. You are a legend (and reckless).', th: '🧙‍♂️ ปาฏิหาริย์ คุณแก้บั๊กได้เรียลไทม์ ตลาดฟื้น คุณคือตำนาน (และบ้าบิ่น)', zh: '🧙‍♂️ 奇迹。你实时修复了错误。市场复苏。你是一个传奇（也是鲁莽的）。' }, stats: { competence: 100, ethics: 40, leadership: 60, innovation: 90 } },
            { id: 'D', text: { en: '📞 Call Mom: "Panic. Freeze. Do nothing until risk management walks in."', th: '📞 โทรหาแม่: "สติแตก ตัวแข็งทื่อ ไม่ทำอะไรจนกว่าฝ่ายความเสี่ยงจะเดินเข้ามา"', zh: '📞 给妈妈打电话："以此恐慌。冻结。在其风险管理部门以此介入之前什么都别做。"' }, consequence: { en: '🐢 Useless. Others stepped in. You are demoted to back office. Not built for pressure.', th: '🐢 ไร้ประโยชน์ คนอื่นเข้ามาแก้ คุณโดนลดขั้นไปหลังบ้าน ไม่เหมาะกับงานกดดัน', zh: '🐢 无用。其他人介入了。你被降职到后台。不适合承受压力。' }, stats: { competence: 30, ethics: 50, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'financial_analyst_048',
        text: {
            en: '🌴 The Panama Account: A client asks you to wire his liquidated assets to a shell company in a tax haven notorious for money laundering. "Don\'t ask questions," he says.',
            th: '🌴 บัญชีปานามา: ลูกค้าให้คุณโอนสินทรัพย์ที่ขายแล้วไปบริษัทหลอกในสวรรค์เลี่ยงภาษีที่ขึ้นชื่อเรื่องฟอกเงิน "อย่าถามมาก" เขาบอก',
            zh: '🌴 巴拿马账户：一位客户让你把他的变现资产汇到一家位于以此因洗钱而以此以此臭名昭著的避税天堂的空壳公司。"别问问题，"他说。'
        },
        options: [
            { id: 'A', text: { en: '💸 Wire It: "He authorizes it. It\'s his money. I\'m just the pipe. Send it."', th: '💸 โอนเลย: "เขาอนุญาต มันเงินเขา ฉันแค่ท่อผ่าน ส่งไปโลด"', zh: '💸 汇款："他授权了。这是他的钱。我只是管道。发送。"' }, consequence: { en: '⛓️ Accessory. You facilitate laundering. Interpol freezes the funds. You are under investigation.', th: '⛓️ ผู้สมรู้ร่วมคิด คุณช่วยฟอกเงิน อินเตอร์โพลอายัดเงิน คุณโดนสอบสวน', zh: '⛓️ 从犯。你协助洗钱。国际刑警组织冻结了资金。你正在接受调查。' }, stats: { competence: 40, ethics: -80, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🛑 SAR Report: "File a Suspicious Activity Report. Freeze the transfer. Tell the authorities."', th: '🛑 รายงาน SAR: "ส่งรายงานกิจกรรมที่น่าสงสัย อายัดการโอน แจ้งทางการ"', zh: '🛑 SAR报告："提交可疑活动报告。冻结转账。告诉当局。"' }, consequence: { en: '🛡️ Compliance Star. The client threatens you, but the bank protects you. You stopped a crime.', th: '🛡️ ดาวเด่นฝ่ายกฎระเบียบ ลูกค้าขู่คุณ แต่ธนาคารคุ้มครอง คุณหยุดอาชญากรรมได้', zh: '🛡️ 合规之星。客户威胁你，但银行保护你。你阻止了一场犯罪。' }, stats: { competence: 80, ethics: 100, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🔄 Delay: "Claim technical issues. \'The swift network is down\'. Make him do it himself elsewhere."', th: '🔄 ยื้อเวลา: "อ้างปัญหาเทคนิค \'ระบบ SWIFT ล่ม\' ให้เขาไปทำเองที่อื่น"', zh: '🔄 拖延："声称有技术问题。\'SWIFT网络瘫痪了\'。让他自己去别处做。"' }, consequence: { en: '🏃 Evasive. He leaves. You lose the client but avoid the legal risk. Passive defense.', th: '🏃 หลบหลีก เขาไป คุณเสียลูกค้าแต่เลี่ยงความเสี่ยงกฎหมาย การป้องกันแบบตั้งรับ', zh: '🏃以此以此以此回避。他离开了。你失去了客户，但避免了法律风险。被动防御。' }, stats: { competence: 50, ethics: 60, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🗣️ Tip Off: "Tell him you can\'t do it because of \'new protocols\' and hint he should use crypto."', th: '🗣️ ให้โพย: "บอกว่าทำไม่ได้เพราะ \'มาตรการใหม่\' แล้วใบ้ว่าเขาควรใช้คริปโต"', zh: '🗣️ 通风报信："告诉他因为\'新协议\'你做不到，并暗示他应该使用加密货币。"' }, consequence: { en: '🤝 Enabler. You didn\'t press the button, but you helped him evade detection. Grey area.', th: '🤝 ผู้ให้ท้าย คุณไม่ได้กดปุ่ม แต่ช่วยเขาหลบเลี่ยง พื้นที่สีเทา', zh: '🤝以此以此促成者。你没有按下按钮，但你帮助他逃避了侦查。灰色地带。' }, stats: { competence: 60, ethics: -30, leadership: 40, innovation: 40 } }
        ]
    },
    {
        id: 'financial_analyst_049',
        text: {
            en: '📢 The Whistleblower: The SEC contacts you. They know your firm is rigging interest rates (LIBOR style). They ask you to wear a wire for a $5M bounty.',
            th: '📢 ผู้เป่านกหวีด: ก.ล.ต. ติดต่อคุณ เขารู้ว่าบริษัทคุณฮั้วดอกเบี้ย (สไตล์ LIBOR) เขาขอให้คุณติดดักฟังแลกรางวัล 5 ล้าน',
            zh: '📢 举报人：美国证券交易委员会联系了你。他们知道你的公司在操纵利率（LIBOR风格）。他们让你窃听，以换取500万美元的奖金。'
        },
        options: [
            { id: 'A', text: { en: '🎙️ Wear the Wire: "I\'ll do it. Justice (and the money) calls. Record my boss confessing."', th: '🎙️ ติดดักฟัง: "ผมทำเอง เพื่อความยุติธรรม (และเงิน) อัดเสียงเจ้านายสารภาพ"', zh: '🎙️ 佩戴窃听器："我会做的。正义（和金钱）在召唤。录下我老板的供词。"' }, consequence: { en: '💰 Rich Rat. You get the $5M. Your boss goes to jail. You can never work in finance again (blackballed).', th: '💰 หนูตกถังข้าวสาร ได้ 5 ล้าน เจ้านายติดคุก คุณไม่มีวันได้ทำงานการเงินอีก (โดนแบนถาวร)', zh: '💰 有钱的老鼠。你得到了500万。你的老板进了监狱。你再也不能在金融界工作了（被排斥）。' }, stats: { competence: 70, ethics: 90, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🤐 Decline & Warn: "Refuse the SEC. Tell your boss immediately. \'They are onto us.\'"', th: '🤐 ปฏิเสธและตักเตือน: "ปฏิเสธก.ล.ต. บอกเจ้านายทันที \'พวกมันรู้ทันเราแล้ว\'"', zh: '🤐 拒绝并警告："拒绝美国证券交易委员会。立即告诉你的老板。\'他们盯上我们了。\'"' }, consequence: { en: '🏴‍☠️ Loyalty. Boss destroys evidence. You survive. You are now part of the inner circle of crime.', th: '🏴‍☠️ ภักดี เจ้านายทำลายหลักฐาน คุณรอด ตอนนี้คุณเป็นส่วนหนึ่งของวงในอาชญากร', zh: '🏴‍☠️ 忠诚。老板销毁证据。你活了下来。你现在是犯罪核心圈子的一部分。' }, stats: { competence: 80, ethics: -100, leadership: 60, innovation: 0 } },
            { id: 'C', text: { en: '🏃 Play Dumb: "I know nothing. Refuse to talk to SEC. Refuse to warn Boss. Just quit."', th: '🏃 แกล้งโง่: "ไม่รู้เรื่อง ปฏิเสธก.ล.ต. ไม่เตือนเจ้านาย ลาออกดื้อๆ"', zh: '🏃 装傻："我什么都不知道。拒绝与美国证券交易委员会交谈。拒绝警告老板。直接辞职。"' }, consequence: { en: '💨 Escape. You get out before the raid. You keep your clean record but lose your career path.', th: '💨 หนี คุณออกมาก่อนโดนบุก ประวัติขาวสะอาดแต่เส้นทางอาชีพขาดสะบั้น', zh: '💨 逃跑。你在突袭前离开了。你保持了清白的记录，但失去了职业道路。' }, stats: { competence: 40, ethics: 50, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '⚖️ Leverage: "Tell the boss I know. Demand a promotion to keep quiet. Blackmail the blackmailer."', th: '⚖️ ต่อรอง: "บอกเจ้านายว่ารู้นะ ขอเลื่อนตำแหน่งแลกกับการหุบปาก แบล็กเมล์คนแบล็กเมล์"', zh: '⚖️ 利用："告诉老板我知道。要求升职以保持沉默。勒索勒索者。"' }, consequence: { en: '💀 Dangerous Game. Boss promotes you, but now he owns you (or might eliminate you). High stakes.', th: '💀 เกมอันตราย เจ้านายเลื่อนขั้นให้ แต่ตอนนี้เขาเป็นเจ้าชีวิตคุณ (หรืออาจกำจัดคุณ) เดิมพันสูง', zh: '💀 危险的游戏。老板提拔你，但现在他拥有你（或者可能消灭你）。高风险。' }, stats: { competence: 60, ethics: -80, leadership: 80, innovation: 40 } }
        ]
    },
    {
        id: 'financial_analyst_050',
        text: {
            en: '🏁 The End Game: You have survived 20 years on Wall Street. You have $50M in the bank. The market is peaking. What is your final move?',
            th: '🏁 เกมจบ: คุณรอดมา 20 ปีในวอลล์สตรีท มีเงิน 50 ล้านในธนาคาร ตลาดกำลังพีก ก้าวสุดท้ายคืออะไร',
            zh: '🏁 终局之战：你在华尔街幸存了20年。你在银行有5000万。市场正在见顶。你的最后一步是什么？'
        },
        options: [
            { id: 'A', text: { en: '🦁 Launch Hedge Fund: "Put my name on the door. Raise $1B. I want to be a titan. The game never ends."', th: '🦁 เปิดเฮดจ์ฟันด์: "เอาชื่อแปะหน้าประตู ระดมทุนพันล้าน ฉันจะเป็นยักษ์ใหญ่ เกมไม่มีวันจบ"', zh: '🦁 启动对冲基金："把我的名字挂在门上。筹集10亿。我想成为巨头。游戏永无止境。"' }, consequence: { en: '👑 Titan. You build an empire. Stress is eternal, but so is the glory. Master of the Universe.', th: '👑 ยักษ์ใหญ่ คุณสร้างอาณาจักร ความเครียดนิรันดร์ แต่เกียรติยศก็เช่นกัน จ้าวแห่งจักรวาล', zh: '👑 泰坦。你建立了一个帝国。压力是永恒的，但荣耀也是。宇宙的主宰。' }, stats: { competence: 100, ethics: 50, leadership: 100, innovation: 80 } },
            { id: 'B', text: { en: '🏝️ Retire: "Cash out. Buy an island. Disappear. Enjoy the dividends. I won."', th: '🏝️ เกษียณ: "ถอนเงิน ซื้อเกาะ หายตัวไป ใช้เงินปันผล ฉันชนะ"', zh: '🏝️以此退休："套现。买个岛。消失。享受分红。我赢了。"' }, consequence: { en: '🌅 Freedom. You won capitalism. No more alarms. Just sunsets.', th: '🌅 อิสรภาพ คุณชนะทุนนิยม ไม่มีนาฬิกาปลุก มีแต่พระอาทิตย์ตก', zh: '🌅 自由。你赢得了资本主义。不再有闹钟。只有日落。' }, stats: { competence: 80, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🏛️ Regulator: "Join the SEC/Fed. Catch the bad guys. Use my knowledge to fix the system."', th: '🏛️ ผู้คุมกฎ: "เข้าก.ล.ต./เฟด จับคนเลว ใช้ความรู้ที่มีซ่อมระบบ"', zh: '🏛️ 监管者："加入美国证券交易委员会/美联储。抓坏人。用我的知识修复系统。"' }, consequence: { en: '⚖️ Legacy. You are feared by your old friends but respected by history. Public service.', th: '⚖️ ตำนาน เพื่อนเก่ากลัวคุณ แต่ประวัติศาสตร์ยกย่อง บริการสาธารณะ', zh: '⚖️ 遗产。你的老朋友害怕你，但历史尊重你。公共服务。' }, stats: { competence: 90, ethics: 90, leadership: 80, innovation: 40 } },
            { id: 'D', text: { en: '🏫 Teach: "Become a professor. Write books. Warn the next generation about the greed."', th: '🏫 สอนหนังสือ: "เป็นศาสตราจารย์ เขียนหนังสือ เตือนคนรุ่นใหม่เรื่องความโลภ"', zh: '🏫以此教书："成为一名教授。写书。警告下一代关于贪婪。"' }, consequence: { en: '🦉 Sage. You find peace in mentorship. Your students become the ethical leaders you couldn\'t be.', th: '🦉 ปราชญ์ คุณพบความสงบในการเป็นผู้ให้คำปรึกษา นักเรียนของคุณกลายเป็นผู้นำที่มีจริยธรรมที่คุณเป็นไม่ได้', zh: '🦉 圣人。你在指导中找到了平静。你的学生成为了你无法成为的道德领袖。' }, stats: { competence: 80, ethics: 80, leadership: 60, innovation: 60 } }
        ]
    }
];

