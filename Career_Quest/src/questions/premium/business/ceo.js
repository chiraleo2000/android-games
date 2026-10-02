export const ceoQuestions = [
    {
        id: 'ceo_001',
        text: {
            en: '🚨 The Ethical Supply Chain: An investigative journalist reveals that your primary low-cost supplier uses child labor in a developing country. Switching suppliers will cost $50M and wipe out this year\'s profits, tanking the stock. The board wants you to bury it.',
            th: 'ห่วงโซ่อุปทานที่มีจริยธรรม: นักข่าวสืบสวนเปิดเผยว่าซัพพลายเออร์ต้นทุนต่ำรายหลักของคุณใช้แรงงานเด็กในประเทศกำลังพัฒนา การเปลี่ยนซัพพลายเออร์จะใช้เงิน 50 ล้านดอลลาร์',
            zh: '🚨 道德供应链：一名调查记者透露，你的主要低成本供应商在发展中国家使用童工。更换供应商将耗资5000万美元，并抹去今年的利润，导致股价暴跌。董事会希望你掩盖此事。'
        },
        options: [
            { id: 'A', text: { en: '✂️ Immediate Cut: "Terminate the contract immediately. Publicly apologize and commit to a 100% auditable supply chain."', th: '✂️ ตัดทันที: "ยกเลิกสัญญาทันที ขอโทษต่อสาธารณะ"', zh: '✂️ 立即切断："立即终止合同。公开道歉并承诺建立100%可审计的供应链。"' }, consequence: { en: '📉 Stock Crash, Brand Win. Stock plummets 20%, but you become a poster child for ethical business.', th: '📉 หุ้นตก แบรนด์ชนะ', zh: '📉 股价暴跌，品牌胜利。' }, stats: { competence: 30, ethics: 50, leadership: 45, innovation: 10 } },
            { id: 'B', text: { en: '🕵️ Deny and Deflect: "Call it fake news and hire a PR firm to spin the story."', th: '🕵️ ปฏิเสธและเบี่ยงประเด็น', zh: '🕵️ 否认并转移视线' }, consequence: { en: '🤥 Short-term Gain, Long-term Pain. A year later, you are indicted for fraud.', th: '🤥 ได้ระยะสั้น เจ็บระยะยาว', zh: '🤥 短期收益，长期痛苦。' }, stats: { competence: 10, ethics: -50, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Phased Transition: "Announce a 3-year plan to improve labor standards gradually."', th: '🤝 การเปลี่ยนแปลงเป็นระยะ', zh: '🤝 分阶段过渡' }, consequence: { en: '⚖️ The Middle Road. Activists call you weak, investors remain wary.', th: '⚖️ ทางสายกลาง', zh: '⚖️ 中庸之道。' }, stats: { competence: 40, ethics: 10, leadership: 20, innovation: 5 } },
            { id: 'D', text: { en: '🤖 Automate Everything: "Invest heavily in robotics to bring manufacturing home."', th: '🤖 ใช้ระบบอัตโนมัติทั้งหมด', zh: '🤖 全面自动化' }, consequence: { en: '🚀 Visionary Pivot! 3 years later, you have the most efficient ethical supply chain.', th: '🚀 การเปลี่ยนทิศทางที่มองการณ์ไกล!', zh: '🚀 有远见的转型！' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'ceo_002',
        text: {
            en: '📉 The Hostile Takeover: A massive conglomerate "OmniCorp" makes an aggressive bid to buy your company. They promise shareholders a 40% premium but plan to dismantle your culture and fire 50% of staff.',
            th: '📉 การเทคโอเวอร์แบบไม่เป็นมิตร: เครือบริษัทขนาดยักษ์ "OmniCorp" ยื่นข้อเสนอซื้อบริษัทของคุณอย่างดุดัน',
            zh: '📉 恶意收购：一家大型企业集团 "OmniCorp" 提出激进报价收购你的公司。他们向股东承诺40%的溢价，但计划拆除你的企业文化。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Poison Pill: "Trigger the shareholder rights plan. Dilute the stock to make the takeover prohibitively expensive."', th: '🛡️ ยาพิษ: "ใช้แผนสิทธิผู้ถือหุ้น"', zh: '🛡️ 毒丸计划："触发股东权利计划。"' }, consequence: { en: '🏰 Fortress Secured. You repel the invader, but the stock price is depressed for years.', th: '🏰 ป้อมปราการปลอดภัย', zh: '🏰 堡垒安全。' }, stats: { competence: 40, ethics: 30, leadership: 45, innovation: 10 } },
            { id: 'B', text: { en: '💰 Golden Parachute: "Take the deal. Negotiate a massive exit package for yourself."', th: '💰 ร่มชูชีพทองคำ', zh: '💰 金色降落伞' }, consequence: { en: '🏖️ Rich but Hated. You walk away with $100M. The company is gutted.', th: '🏖️ รวยแต่คนเกลียด', zh: '🏖️ 富有但被痛恨。' }, stats: { competence: 20, ethics: -40, leadership: -50, innovation: 0 } },
            { id: 'C', text: { en: '🤝 White Knight: "Find a friendly merger partner that shares our values."', th: '🤝 อัศวินขี่ม้าขาว', zh: '🤝 白衣骑士' }, consequence: { en: '🕊️ Safe Harbor. You lose autonomy but keep team and mission intact.', th: '🕊️ ท่าเรือที่ปลอดภัย', zh: '🕊️ 安全港。' }, stats: { competence: 35, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🎤 The Steve Jobs Defense: "Go public with a visionary product roadmap. Dazzle the market."', th: '🎤 การป้องกันแบบสตีฟ จอบส์', zh: '🎤 史蒂夫·乔布斯式防御' }, consequence: { en: '🚀 High Stakes Win! The stock rallies above the offer price. OmniCorp withdraws.', th: '🚀 ชัยชนะเดิมพันสูง!', zh: '🚀 高风险的胜利！' }, stats: { competence: 50, ethics: 35, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'ceo_003',
        text: {
            en: '🧠 The AI Replacement: Your CTO presents a plan to replace 40% of customer support and junior coding staff with AI agents. It will save $200M/year but destroy 5,000 jobs. The union is threatening a general strike.',
            th: '🧠 การแทนที่ด้วย AI: CTO ของคุณเสนอแผนเพื่อแทนที่พนักงาน 40% ด้วย AI Agents จะประหยัดเงินได้ 200 ล้านดอลลาร์/ปี แต่ทำลายงาน 5,000 ตำแหน่ง',
            zh: '🧠 AI 替代：你的 CTO 提出了一项计划，用新的 AI 代理取代 40% 的客户支持和初级编码人员。这将每年节省 2 亿美元，但会摧毁 5000 个工作岗位。'
        },
        options: [
            { id: 'A', text: { en: '🤖 Full Automation: "Progress is inevitable. Execute the plan. Offer standard severance."', th: '🤖 ระบบอัตโนมัติเต็มรูปแบบ', zh: '🤖 全面自动化' }, consequence: { en: '💔 Efficiency at a Cost. Profits soar, but the strike cripples operations for weeks.', th: '💔 ประสิทธิภาพที่ต้องแลก', zh: '💔 以巨大代价换来的效率。' }, stats: { competence: 40, ethics: -20, leadership: -10, innovation: 40 } },
            { id: 'B', text: { en: '🎓 Upskilling Initiative: "Implement AI, but fire no one. Retrain 5,000 employees for higher-level roles."', th: '🎓 โครงการเพิ่มทักษะ', zh: '🎓 技能提升计划' }, consequence: { en: '🌟 The Human-Centric Future. Wall Street hates the short-term cost, but employee loyalty generates massive long-term value.', th: '🌟 อนาคตที่มนุษย์เป็นศูนย์กลาง', zh: '🌟 以人为本的未来。' }, stats: { competence: 35, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '⏸️ Moratorium: "Reject the plan. We use AI to assist, not replace. We accept lower margins."', th: '⏸️ การพักชำระหนี้ทางใจ', zh: '⏸️ 暂停' }, consequence: { en: '🐢 The Dinosaur Trap. Morale is high, but 3 years later you are priced out of the market.', th: '🐢 กับดักไดโนเสาร์', zh: '🐢 恐龙陷阱。' }, stats: { competence: 15, ethics: 30, leadership: 40, innovation: -20 } },
            { id: 'D', text: { en: '🤝 Hybrid Bargain: "Negotiate with the union. Replace 15% through attrition only, give union shares."', th: '🤝 ข้อตกลงลูกผสม', zh: '🤝 混合交易' }, consequence: { en: '⚖️ Steady Transition. You avoid the strike and modernize slowly.', th: '⚖️ การเปลี่ยนแปลงที่มั่นคง', zh: '⚖️ 平稳过渡。' }, stats: { competence: 35, ethics: 35, leadership: 35, innovation: 20 } }
        ]
    },
    {
        id: 'ceo_004',
        text: {
            en: '🦠 The Ransomware Crisis: Hackers seize your servers, locking all customer data. They demand $20M in Bitcoin. Your IT says backups are corrupted. If you don\'t pay, customer financial data will be leaked to the dark web.',
            th: '🦠 วิกฤตแรนซัมแวร์: แฮกเกอร์ยึดเซิร์ฟเวอร์ของคุณ ล็อกข้อมูลลูกค้าทั้งหมด เรียกค่าไถ่ 20 ล้านดอลลาร์',
            zh: '🦠 勒索软件危机：黑客控制了你的服务器，锁定了所有客户数据。他们索要 2000 万美元的比特币。'
        },
        options: [
            { id: 'A', text: { en: '💰 Pay the Ransom: "Wire the money quietly. We cannot risk the leak."', th: '💰 จ่ายค่าไถ่', zh: '💰 支付赎金' }, consequence: { en: '🤫 The Dirty Secret. You get data back but FBI investigates you for funding terrorism.', th: '🤫 ความลับสกปรก', zh: '🤫 肮脏的秘密。' }, stats: { competence: 20, ethics: -10, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '📢 Transparent Refusal: "We do not negotiate with terrorists. Inform all customers immediately."', th: '📢 ปฏิเสธอย่างโปร่งใส', zh: '📢 透明拒绝' }, consequence: { en: '🛡️ Painful Integrity. Stock drops, customers leave. But you maintain moral high ground.', th: '🛡️ ความซื่อสัตย์ที่เจ็บปวด', zh: '🛡️ 痛苦的正直。' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '⚔️ Counter-Hack: "Unleash our Red Team to hack the hackers back. Retrieve the encryption keys."', th: '⚔️ แฮกสวนกลับ', zh: '⚔️ 反黑客' }, consequence: { en: '🕵️ Risky Gambit. It works partially. You get 80% of data back but face legal issues.', th: '🕵️ การเดิมพันเสี่ยง', zh: '🕵️ 冒险的策略。' }, stats: { competence: 40, ethics: -10, leadership: 30, innovation: 40 } },
            { id: 'D', text: { en: '🤥 The Fake-Out: "Pretend to pay to stall them while engaging NSA contractor for quantum decryption."', th: '🤥 การหลอกล่อ', zh: '🤥 假动作' }, consequence: { en: '🚀 Tech Savior. The quantum decryption works just in time. Stock skyrockets.', th: '🚀 ผู้กอบกู้ทางเทค', zh: '🚀 技术救世主。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'ceo_005',
        text: {
            en: '🌍 The Carbon Ultimatum: New legislation requires your factories to be carbon-neutral within 2 years or face $500M in fines. Your CFO says compliance will bankrupt you. Competitors are lobbying to kill the bill.',
            th: '🌍 คำขาดเรื่องคาร์บอน: กฎหมายใหม่กำหนดให้โรงงานของคุณต้องเป็นกลางทางคาร์บอนภายใน 2 ปี ไม่งั้นจะถูกปรับ 500 ล้านดอลลาร์',
            zh: '🌍 碳最后通牒：新立法要求你的工厂在2年内实现碳中和，否则面临5亿美元罚款。你的CFO说合规会让公司破产。'
        },
        options: [
            { id: 'A', text: { en: '🌱 Go Beyond Compliance: "Invest $300M in green tech. Market as first carbon-negative company."', th: '🌱 ทำเกินข้อกำหนด', zh: '🌱 超越合规' }, consequence: { en: '🏆 Green Pioneer! Government grants and ESG investors pour in.', th: '🏆 ผู้บุกเบิกสีเขียว!', zh: '🏆 绿色先驱！' }, stats: { competence: 50, ethics: 50, leadership: 45, innovation: 50 } },
            { id: 'B', text: { en: '💼 Lobby to Kill: "Join the industry coalition. Spend $50M lobbying. Buy time."', th: '💼 ล็อบบี้ฆ่ากฎหมาย', zh: '💼 游说扼杀' }, consequence: { en: '🔥 Public Backlash! Leaked emails show your lobbying. Boycotts devastate sales.', th: '🔥 กระแสตีกลับ!', zh: '🔥 公众反弹！' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: -10 } },
            { id: 'C', text: { en: '🔄 Carbon Credits: "Buy carbon offsets from developing nations. Cheaper than rebuilding factories."', th: '🔄 คาร์บอนเครดิต', zh: '🔄 碳信用' }, consequence: { en: '⚠️ Greenwashing Exposed! An NGO proves your offsets are fake forests. Fines triple.', th: '⚠️ การฟอกเขียวถูกเปิดโปง!', zh: '⚠️ 漂绿被揭露！' }, stats: { competence: 25, ethics: -20, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '🏭 Relocate Offshore: "Move factories to countries without carbon laws."', th: '🏭 ย้ายฐานไปต่างประเทศ', zh: '🏭 离岸转移' }, consequence: { en: '📰 Carbon Colonialism! Media brands you as exploiting poor nations.', th: '📰 ลัทธิอาณานิคมคาร์บอน!', zh: '📰 碳殖民主义！' }, stats: { competence: 30, ethics: -30, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'ceo_006',
        text: {
            en: '👨‍👩‍👧 The Founder\'s Child: The company founder demands you hire his unqualified 25-year-old son as VP of Strategy. The founder still controls 30% of votes. Refusing could trigger your removal.',
            th: '👨‍👩‍👧 ลูกของผู้ก่อตั้ง: ผู้ก่อตั้งบริษัทเรียกร้องให้คุณจ้างลูกชายวัย 25 ที่ไม่มีคุณสมบัติเป็น VP ฝ่ายกลยุทธ์',
            zh: '👨‍👩‍👧 创始人之子：公司创始人要求你聘用他没有资格的25岁儿子担任战略副总裁。创始人仍控制着30%的投票权。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Refuse Publicly: "I will not compromise meritocracy. If you fire me, the world will know why."', th: '🚫 ปฏิเสธอย่างเปิดเผย', zh: '🚫 公开拒绝' }, consequence: { en: '⚔️ Board Civil War! Half the board supports you. Stock drops 15% on uncertainty.', th: '⚔️ สงครามกลางบอร์ด!', zh: '⚔️ 董事会内战！' }, stats: { competence: 35, ethics: 50, leadership: 45, innovation: 10 } },
            { id: 'B', text: { en: '🤝 The Mentor Path: "Hire him as Special Advisor with no real power."', th: '🤝 เส้นทางพี่เลี้ยง', zh: '🤝 导师之路' }, consequence: { en: '🎭 Political Theater. Works for a year, then the son demands real authority.', th: '🎭 ละครการเมือง', zh: '🎭 政治演戏。' }, stats: { competence: 30, ethics: 10, leadership: 20, innovation: 5 } },
            { id: 'C', text: { en: '💼 Conditional Hire: "Agree, but insist he completes an MBA and 1-year department rotation first."', th: '💼 จ้างแบบมีเงื่อนไข', zh: '💼 有条件录用' }, consequence: { en: '🌱 Surprising Growth! The son actually thrives and earns respect the hard way.', th: '🌱 เติบโตน่าประหลาดใจ!', zh: '🌱 惊人的成长！' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 20 } },
            { id: 'D', text: { en: '😈 Sabotage Setup: "Hire him, give him an impossible project. When he fails, the founder will pull him out."', th: '😈 วางแผนทำลาย', zh: '😈 暗中破坏' }, consequence: { en: '💥 Backfire! The son\'s failure damages a real business unit. The founder blames YOU.', th: '💥 ย้อนกลับ!', zh: '💥 反噬！' }, stats: { competence: 10, ethics: -30, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'ceo_007',
        text: {
            en: '💊 The Drug Price Dilemma: Your pharma company develops a life-saving cancer drug. It costs $10 to manufacture. Marketing wants to price it at $10,000/month. Patient advocacy groups are mobilizing protests.',
            th: '💊 ภาวะกลืนไม่เข้าคายไม่ออกเรื่องราคายา: บริษัทยาพัฒนายารักษามะเร็งที่ช่วยชีวิต ต้นทุนผลิตแค่ 10 ดอลลาร์ ฝ่ายการตลาดต้องการตั้งราคา 10,000 ดอลลาร์/เดือน',
            zh: '💊 药价困境：你的制药公司开发了一种挽救生命的抗癌药物。制造成本10美元。营销部门想定价每月10000美元。'
        },
        options: [
            { id: 'A', text: { en: '💰 Maximum Profit: "We spent $2B on R&D. Price it at $10,000. That is how pharma works."', th: '💰 กำไรสูงสุด', zh: '💰 最大利润' }, consequence: { en: '📺 Congressional Hearing! "Pharma Bro 2.0" memes trend. Legislation caps drug prices forever.', th: '📺 ถูกเรียกเข้าสภา!', zh: '📺 国会听证会！' }, stats: { competence: 30, ethics: -40, leadership: -20, innovation: 10 } },
            { id: 'B', text: { en: '🤝 Tiered Pricing: "Charge $5,000 in rich nations, $100 in developing countries."', th: '🤝 ราคาแบบขั้นบันได', zh: '🤝 分级定价' }, consequence: { en: '🌍 Global Hero! The WHO endorses your model. You win the Nobel Peace Prize.', th: '🌍 ฮีโร่ระดับโลก!', zh: '🌍 全球英雄！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🆓 Open Source It: "Release the formula to generic manufacturers. We lost $2B but saved 10 million lives."', th: '🆓 เปิดเผยสูตร', zh: '🆓 开源' }, consequence: { en: '💔 Noble Bankruptcy. You save the world but destroy the company. No one funds your next drug.', th: '💔 การล้มละลายอันสูงส่ง', zh: '💔 崇高的破产。' }, stats: { competence: 10, ethics: 50, leadership: 20, innovation: -10 } },
            { id: 'D', text: { en: '📊 Subscription Model: "Charge $500/month with insurance co-pay. Affordable AND profitable through volume."', th: '📊 โมเดลสมาชิก', zh: '📊 订阅模式' }, consequence: { en: '📈 Smart Disruption! Insurance companies love it. Patient access soars. New pharma business model.', th: '📈 การทำลายอย่างฉลาด!', zh: '📈 聪明的颠覆！' }, stats: { competence: 45, ethics: 35, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'ceo_008',
        text: {
            en: '🗳️ The Political Donation: A powerful senator offers to fast-track your merger approval if you donate $5M to their re-election campaign. The merger is worth $10B to shareholders.',
            th: '🗳️ เงินบริจาคทางการเมือง: วุฒิสมาชิกผู้ทรงอิทธิพลเสนอจะเร่งอนุมัติการควบรวมถ้าคุณบริจาค 5 ล้านดอลลาร์ให้แคมเปญหาเสียง',
            zh: '🗳️ 政治捐款：一位有权势的参议员提出，如果你向他们的竞选活动捐款500万美元，就会加快你的合并审批。合并对股东价值100亿美元。'
        },
        options: [
            { id: 'A', text: { en: '💰 Pay to Play: "It is a legal donation. $5M for $10B is the easiest ROI of my career."', th: '💰 จ่ายเพื่อเล่น', zh: '💰 花钱买通' }, consequence: { en: '🕵️ Corruption Trail! The senator is later investigated. Your donation is flagged.', th: '🕵️ เส้นทางคอร์รัปชัน!', zh: '🕵️ 腐败追踪！' }, stats: { competence: 20, ethics: -40, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🚫 Refuse and Report: "I will not pay bribes. Report this to the Ethics Committee."', th: '🚫 ปฏิเสธและรายงาน', zh: '🚫 拒绝并举报' }, consequence: { en: '⏳ Merit-Based Delay. Merger takes 18 months but your integrity is unquestioned.', th: '⏳ ความล่าช้าตามคุณธรรม', zh: '⏳ 基于实力的延迟。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 10 } },
            { id: 'C', text: { en: '🧠 The Loophole: "Donate through a PAC instead. Completely legal and untraceable."', th: '🧠 ช่องโหว่', zh: '🧠 漏洞' }, consequence: { en: '🤫 Dark Money. Merger flies through but journalists are investigating PAC donations.', th: '🤫 เงินมืด', zh: '🤫 黑钱。' }, stats: { competence: 35, ethics: -20, leadership: 20, innovation: 20 } },
            { id: 'D', text: { en: '📣 Go Public: "Expose the senator\'s offer to the press. Let public pressure drive legitimate approval."', th: '📣 เปิดเผยต่อสาธารณะ', zh: '📣 公开' }, consequence: { en: '🎯 Power Move! The story goes viral. Public sympathy lands on your side.', th: '🎯 ท่าไม้ตาย!', zh: '🎯 权力之举！' }, stats: { competence: 45, ethics: 40, leadership: 45, innovation: 30 } }
        ]
    },
    {
        id: 'ceo_009',
        text: {
            en: '📱 The Whistleblower: Your VP of Engineering leaks internal documents showing your product collects user data without consent. She claims it is a public safety issue. Legal wants to sue her.',
            th: '📱 ผู้แจ้งเบาะแส: VP ฝ่ายวิศวกรรมปล่อยเอกสารภายในแสดงว่าผลิตภัณฑ์เก็บข้อมูลผู้ใช้โดยไม่ได้รับความยินยอม',
            zh: '📱 告密者：你的工程副总裁向记者泄露内部文件，显示你的产品在未经同意的情况下收集用户数据。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Sue Her: "She breached her NDA. Make an example. Protect IP at all costs."', th: '⚖️ ฟ้องเธอ', zh: '⚖️ 起诉她' }, consequence: { en: '🔥 Streisand Effect! Suing the whistleblower makes the story 100x bigger.', th: '🔥 เอฟเฟกต์สไตรแซนด์!', zh: '🔥 史翠珊效应！' }, stats: { competence: 10, ethics: -40, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Thank Her: "She exposed a genuine problem. Promote her to Chief Privacy Officer."', th: '🤝 ขอบคุณเธอ', zh: '🤝 感谢她' }, consequence: { en: '🌟 PR Masterclass! Narrative flips to "Company That Listens." Downloads spike 40%.', th: '🌟 ชั้นเรียน PR!', zh: '🌟 公关大师课！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '🤫 Quiet Fix: "Patch the data collection silently. Let the news cycle bury it."', th: '🤫 แก้ไขเงียบๆ', zh: '🤫 悄悄修复' }, consequence: { en: '⏳ Ticking Bomb. Works for 6 months, then a second whistleblower emerges.', th: '⏳ ระเบิดเวลา', zh: '⏳ 定时炸弹。' }, stats: { competence: 25, ethics: -10, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '🔒 NDA Lockdown: "Fire her. Enforce NDAs. Hire surveillance firm for employee monitoring."', th: '🔒 ล็อกดาวน์ NDA', zh: '🔒 NDA封锁' }, consequence: { en: '🏚️ Surveillance State! Top engineers quit. Glassdoor drops to 1.5 stars.', th: '🏚️ รัฐเฝ้าระวัง!', zh: '🏚️ 监控国度！' }, stats: { competence: 15, ethics: -50, leadership: -40, innovation: -20 } }
        ]
    },
    {
        id: 'ceo_010',
        text: {
            en: '🏦 The Accounting Fraud: Your CFO confesses he has been inflating revenue by 15% for three quarters. If it comes out, the stock will crash 60%. He begs you to cover for one more quarter.',
            th: '🏦 การฉ้อโกงทางบัญชี: CFO ของคุณสารภาพว่าเขาปั้นรายได้เกินจริง 15% มาสามไตรมาส ถ้าเรื่องแดง หุ้นจะร่วง 60%',
            zh: '🏦 会计欺诈：你的CFO私下承认他已经连续三个季度虚报收入15%。如果事情曝光，股价将暴跌60%。'
        },
        options: [
            { id: 'A', text: { en: '🚨 Immediate Disclosure: "Report it to the board and SEC today. We restate earnings immediately."', th: '🚨 เปิดเผยทันที', zh: '🚨 立即披露' }, consequence: { en: '📉 Painful Truth. Stock crashes 60%, but you cooperated with regulators and avoided charges.', th: '📉 ความจริงอันเจ็บปวด', zh: '📉 痛苦的真相。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 5 } },
            { id: 'B', text: { en: '🤝 One More Quarter: "Fine. Fix it quietly next quarter. No one needs to know."', th: '🤝 อีกไตรมาสเดียว', zh: '🤝 再一个季度' }, consequence: { en: '⛓️ Criminal Conspiracy! An auditor catches the discrepancy. Both charged with securities fraud.', th: '⛓️ สมคบคิดทางอาญา!', zh: '⛓️ 刑事共谋！' }, stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'C', text: { en: '🧠 Restructuring Cover: "Announce a major restructuring charge that absorbs the inflated numbers."', th: '🧠 การปรับโครงสร้างเป็นข้ออ้าง', zh: '🧠 重组掩盖' }, consequence: { en: '🎭 Clever Deception. Works temporarily. Forensic accountants eventually unravel it all.', th: '🎭 การหลอกลวงอันฉลาด', zh: '🎭 聪明的欺骗。' }, stats: { competence: 30, ethics: -30, leadership: 10, innovation: 20 } },
            { id: 'D', text: { en: '🔥 Fire and Distance: "Fire the CFO. Blame everything on him. You knew nothing."', th: '🔥 ไล่ออกและตัดตัว', zh: '🔥 解雇并划清界限' }, consequence: { en: '🤥 Plausible Deniability. You survive but the fired CFO implicates you in depositions.', th: '🤥 การปฏิเสธที่สมเหตุสมผล', zh: '🤥 合理的否认。' }, stats: { competence: 30, ethics: -20, leadership: -10, innovation: 10 } }
        ]
    },
    {
        id: 'ceo_011',
        text: {
            en: '🏗️ The Factory Disaster: A factory explosion kills 12 workers. Early investigation suggests management cut safety corners to meet production targets. Media is outside your HQ demanding answers.',
            th: '🏗️ ภัยพิบัติโรงงาน: โรงงานระเบิดทำให้คนงานเสียชีวิต 12 คน การสอบสวนเบื้องต้นชี้ว่าผู้บริหารตัดมุมเรื่องความปลอดภัยเพื่อให้ถึงเป้าการผลิต',
            zh: '🏗️ 工厂灾难：一场工厂爆炸导致12名工人死亡。初步调查表明管理层为了达到生产目标而削减了安全措施。'
        },
        options: [
            { id: 'A', text: { en: '🎤 Full Accountability: "I take personal responsibility. Shut down all factories for safety audits. Compensate families generously."', th: '🎤 รับผิดชอบเต็มที่', zh: '🎤 全面问责' }, consequence: { en: '💔 Costly but Right. $200M in losses but zero lawsuits. Workers trust you again.', th: '💔 แพงแต่ถูกต้อง', zh: '💔 代价高昂但正确。' }, stats: { competence: 45, ethics: 50, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🕵️ Blame the Manager: "This was a rogue site manager. We had safety protocols. Fire him publicly."', th: '🕵️ โทษผู้จัดการ', zh: '🕵️ 责怪经理' }, consequence: { en: '📰 Cover-Up Exposed! Workers testify that HQ pressure caused the shortcuts.', th: '📰 การปกปิดถูกเปิดโปง!', zh: '📰 掩盖被揭露！' }, stats: { competence: 15, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '⚖️ Legal Shield: "Say nothing. Let lawyers handle it. Settle quietly out of court."', th: '⚖️ โล่กฎหมาย', zh: '⚖️ 法律盾牌' }, consequence: { en: '🤐 Sealed Settlements. Families get money but no justice. Workers organize for unionization.', th: '🤐 ข้อตกลงปิดผนึก', zh: '🤐 密封和解。' }, stats: { competence: 25, ethics: -20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🏭 Technology Pivot: "Install IoT safety sensors in all factories. Create an industry-leading safety standard named after the victims."', th: '🏭 เปลี่ยนเทคโนโลยี', zh: '🏭 技术转型' }, consequence: { en: '🌟 Legacy of Safety. The standard is adopted industry-wide. Your brand becomes synonymous with worker protection.', th: '🌟 มรดกแห่งความปลอดภัย', zh: '🌟 安全遗产。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 } }
        ]
    },
    {
        id: 'ceo_012',
        text: {
            en: '🌐 The China Dilemma: China represents 35% of your revenue. The government demands you store Chinese user data locally and share it upon request. Refusing means losing the entire market.',
            th: '🌐 ภาวะกลืนไม่เข้าคายไม่ออกเรื่องจีน: จีนคิดเป็น 35% ของรายได้ของคุณ รัฐบาลเรียกร้องให้คุณเก็บข้อมูลผู้ใช้จีนในประเทศ',
            zh: '🌐 中国困境：中国占你收入的35%。政府要求你在本地存储中国用户数据并在要求时共享。拒绝意味着失去整个市场。'
        },
        options: [
            { id: 'A', text: { en: '🇨🇳 Comply Fully: "Revenue is revenue. Set up local servers. Share data as required. Business is business."', th: '🇨🇳 ปฏิบัติตามเต็มที่', zh: '🇨🇳 完全遵守' }, consequence: { en: '📰 Congressional Outrage! US politicians accuse you of enabling surveillance. Banned from government contracts.', th: '📰 ความโกรธเกรี้ยวของรัฐสภา!', zh: '📰 国会愤怒！' }, stats: { competence: 30, ethics: -40, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '🚪 Full Exit: "Pull out of China entirely. We will not compromise user privacy for any market."', th: '🚪 ถอนตัวทั้งหมด', zh: '🚪 全面退出' }, consequence: { en: '📉 35% Revenue Gone! Stock crashes but privacy advocates make you their champion. Western markets rally.', th: '📉 รายได้ 35% หายไป!', zh: '📉 35%收入消失！' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🔐 Encryption Compromise: "Store data locally but encrypt it so even we cannot decrypt it for the government."', th: '🔐 การประนีประนอมด้านการเข้ารหัส', zh: '🔐 加密妥协' }, consequence: { en: '⚖️ Walking the Tightrope. China tolerates it for now. But they could crack down any time.', th: '⚖️ เดินบนเส้นลวด', zh: '⚖️ 走钢丝。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 40 } },
            { id: 'D', text: { en: '🏢 Joint Venture: "Create a separate Chinese subsidiary with local ownership. Distance the parent company legally."', th: '🏢 ร่วมทุน', zh: '🏢 合资企业' }, consequence: { en: '🎭 Plausible Separation. It works on paper, but critics call it "ethics laundering."', th: '🎭 การแยกที่สมเหตุสมผล', zh: '🎭 合理的分离。' }, stats: { competence: 35, ethics: -10, leadership: 20, innovation: 25 } }
        ]
    },
    {
        id: 'ceo_013',
        text: {
            en: '🎓 The Diversity Mandate: Your board demands 50% female leadership within 2 years. Currently it is 15%. The talent pipeline is thin. Activists and investors are both watching closely.',
            th: '🎓 คำสั่งเรื่องความหลากหลาย: บอร์ดเรียกร้องให้มีผู้นำหญิง 50% ภายใน 2 ปี ปัจจุบันมี 15% ท่อส่งผู้มีความสามารถบาง',
            zh: '🎓 多元化要求：董事会要求2年内女性领导层达到50%。目前只有15%。人才管道薄弱。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Aggressive Hiring: "Headhunt top female executives from competitors. Pay whatever premium it takes."', th: '🚀 จ้างเชิงรุก', zh: '🚀 激进招聘' }, consequence: { en: '🏷️ Token Criticism. You hit the number but insiders call them "diversity hires." Cultural friction rises.', th: '🏷️ คำวิจารณ์เรื่องตัวแทน', zh: '🏷️ 象征性批评。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🌱 Pipeline Investment: "Launch a 5-year women in leadership program. Promote from within. Set realistic milestones."', th: '🌱 ลงทุนในท่อส่ง', zh: '🌱 管道投资' }, consequence: { en: '🌳 Organic Growth. You only reach 30% in 2 years but the leaders are genuine and effective. Long-term wins.', th: '🌳 การเติบโตตามธรรมชาติ', zh: '🌳 有机增长。' }, stats: { competence: 45, ethics: 40, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '📊 Meritocracy Defense: "We hire the best person for the job regardless of gender. Quotas are reverse discrimination."', th: '📊 การป้องกันระบบคุณธรรม', zh: '📊 精英制度辩护' }, consequence: { en: '🔥 Culture War! Progressive employees resign. ESG rating tanks. Recruitment drops 40%.', th: '🔥 สงครามวัฒนธรรม!', zh: '🔥 文化战争！' }, stats: { competence: 20, ethics: -10, leadership: -20, innovation: -10 } },
            { id: 'D', text: { en: '🤝 Acquire Diverse Leadership: "Buy a female-led startup and integrate their executive team into ours."', th: '🤝 ซื้อบริษัทที่มีผู้นำหญิง', zh: '🤝 收购多元化领导层' }, consequence: { en: '💡 Culture Clash! The acquisition brings talent but integration is painful. Two company cultures collide.', th: '💡 การปะทะทางวัฒนธรรม!', zh: '💡 文化冲突！' }, stats: { competence: 35, ethics: 25, leadership: 30, innovation: 35 } }
        ]
    },
    {
        id: 'ceo_014',
        text: {
            en: '🏠 The Remote Work War: Post-pandemic, 80% of employees want permanent remote work. Your real estate VP says you have $500M in empty office leases. The CFO wants everyone back. Productivity data is... ambiguous.',
            th: '🏠 สงครามทำงานจากบ้าน: หลังโรคระบาด 80% ของพนักงานต้องการทำงานจากบ้านถาวร VP อสังหาริมทรัพย์บอกว่ามีสัญญาเช่าสำนักงานว่าง 500 ล้านดอลลาร์',
            zh: '🏠 远程工作之战：疫情后，80%的员工想要永久远程工作。你的房地产VP说你有5亿美元的空置办公室租约。'
        },
        options: [
            { id: 'A', text: { en: '🏢 Back to Office: "Everyone returns 5 days a week. Culture requires presence. End of discussion."', th: '🏢 กลับออฟฟิศ', zh: '🏢 回到办公室' }, consequence: { en: '🚪 Mass Exodus! 30% of top engineers quit within 6 months. Competitors poach your talent.', th: '🚪 การอพยพครั้งใหญ่!', zh: '🚪 大规模离职！' }, stats: { competence: 20, ethics: -10, leadership: -30, innovation: -20 } },
            { id: 'B', text: { en: '🏠 Fully Remote: "Close all offices. Save $500M. Let people work from anywhere in the world."', th: '🏠 ทำงานจากบ้านเต็มรูปแบบ', zh: '🏠 完全远程' }, consequence: { en: '🌍 Global Talent! You hire the best from everywhere. But collaboration suffers and culture erodes.', th: '🌍 คนเก่งจากทั่วโลก!', zh: '🌍 全球人才！' }, stats: { competence: 35, ethics: 30, leadership: 20, innovation: 30 } },
            { id: 'C', text: { en: '🔄 Hybrid Model: "3 days office, 2 days home. Convert excess space to co-working revenue."', th: '🔄 โมเดลไฮบริด', zh: '🔄 混合模式' }, consequence: { en: '🤝 Reasonable Compromise. Nobody is thrilled, but nobody quits. The co-working revenue offsets some lease costs.', th: '🤝 ประนีประนอมที่สมเหตุสมผล', zh: '🤝 合理的妥协。' }, stats: { competence: 40, ethics: 35, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '🏖️ Results-Only: "No hours, no location requirements. We only measure output. If you deliver, we do not care where you are."', th: '🏖️ ผลลัพธ์เท่านั้น', zh: '🏖️ 仅看结果' }, consequence: { en: '🚀 Innovation Spike! Top performers thrive. But underperformers hide and accountability becomes a nightmare.', th: '🚀 นวัตกรรมพุ่ง!', zh: '🚀 创新飙升！' }, stats: { competence: 45, ethics: 25, leadership: 30, innovation: 50 } }
        ]
    },
    {
        id: 'ceo_015',
        text: {
            en: '💀 The Product Recall: Your flagship product has a defect that has caused 3 injuries. Engineers say it affects 0.001% of units. A full recall would cost $1B. Lawyers say the odds of lawsuits are low.',
            th: '💀 การเรียกคืนสินค้า: สินค้าหลักของคุณมีข้อบกพร่องที่ทำให้มีผู้บาดเจ็บ 3 ราย วิศวกรบอกว่ากระทบ 0.001% ของหน่วย การเรียกคืนทั้งหมดจะใช้เงิน 1 พันล้านดอลลาร์',
            zh: '💀 产品召回：你的旗舰产品有一个缺陷，已造成3人受伤。工程师说这影响了0.001%的单位。全面召回将花费10亿美元。'
        },
        options: [
            { id: 'A', text: { en: '🔄 Full Recall: "Recall every unit. No amount of money is worth a single injury. Do it NOW."', th: '🔄 เรียกคืนทั้งหมด', zh: '🔄 全面召回' }, consequence: { en: '💸 Expensive Honor. $1B gone but consumer trust hits all-time high. Brand loyalty soars.', th: '💸 เกียรติราคาแพง', zh: '💸 昂贵的荣誉。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🤫 Silent Fix: "Issue a quiet software update that fixes it. No public announcement. No recall."', th: '🤫 แก้ไขเงียบๆ', zh: '🤫 悄悄修复' }, consequence: { en: '💣 Time Bomb! A 4th injury occurs. Victim discovers you knew. $5B class-action lawsuit.', th: '💣 ระเบิดเวลา!', zh: '💣 定时炸弹！' }, stats: { competence: 10, ethics: -40, leadership: -20, innovation: 10 } },
            { id: 'C', text: { en: '📧 Targeted Recall: "Identify only the affected batch using serial numbers. Recall those specific units."', th: '📧 เรียกคืนเฉพาะเจาะจง', zh: '📧 定向召回' }, consequence: { en: '✅ Smart Precision. Costs only $50M. Most customers never know. Engineers feel supported.', th: '✅ ความแม่นยำอัจฉริยะ', zh: '✅ 精确召回。' }, stats: { competence: 50, ethics: 35, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '⚖️ Extended Warranty: "Offer free extended warranty to all customers instead of a recall. Cover any injury costs."', th: '⚖️ ขยายประกัน', zh: '⚖️ 延长保修' }, consequence: { en: '🤔 Skeptical Response. Consumer groups call it a cover-up. Some customers appreciate it. Mixed results.', th: '🤔 ตอบรับอย่างสงสัย', zh: '🤔 怀疑的回应。' }, stats: { competence: 30, ethics: 10, leadership: 20, innovation: 20 } }
        ]
    },
    {
        id: 'ceo_016',
        text: {
            en: '🎭 The Deepfake Crisis: A viral deepfake video shows "you" making racist remarks at a private dinner. It is completely fake, but it has 50 million views. Advertisers are pulling out. Your PR team is panicking.',
            th: '🎭 วิกฤต Deepfake: วิดีโอ deepfake ไวรัลแสดง "คุณ" พูดเหยียดเชื้อชาติในงานเลี้ยงส่วนตัว มันปลอมสนิทแต่มียอดวิว 50 ล้าน ผู้โฆษณากำลังถอนตัว',
            zh: '🎭 深伪危机：一个病毒式的深伪视频显示"你"在私人晚宴上发表种族主义言论。完全是假的，但有5000万次观看。'
        },
        options: [
            { id: 'A', text: { en: '📹 Counter with Proof: "Release the unedited original footage from that evening. Sue the creator. Demand platform takedowns."', th: '📹 ตอบโต้ด้วยหลักฐาน', zh: '📹 用证据反击' }, consequence: { en: '🔍 Truth Prevails. Forensic analysis confirms it is fake. The creator is identified and arrested. But damage lingers.', th: '🔍 ความจริงชนะ', zh: '🔍 真相胜利。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '😶 Ignore It: "Responding gives it oxygen. Stay silent. It will blow over in a week."', th: '😶 เพิกเฉย', zh: '😶 忽略它' }, consequence: { en: '📉 Silence = Guilt! The silence is interpreted as admission. More advertisers pull out.', th: '📉 เงียบ = ยอมรับผิด!', zh: '📉 沉默=有罪！' }, stats: { competence: 10, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🤖 AI Detection Campaign: "Partner with a tech company to develop real-time deepfake detection. Make this a cause."', th: '🤖 แคมเปญตรวจจับ AI', zh: '🤖 AI检测运动' }, consequence: { en: '🌟 Turning Crisis to Cause! You become the face of anti-deepfake technology. Massive positive press coverage.', th: '🌟 เปลี่ยนวิกฤตเป็นเหตุ!', zh: '🌟 化危为机！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '😢 Emotional Response: "Hold a tearful press conference showing the impact on your family. Appeal to humanity."', th: '😢 ตอบสนองด้วยอารมณ์', zh: '😢 情感回应' }, consequence: { en: '🎭 Sympathy Wave. Public sentiment shifts in your favor, but critics call it manipulation.', th: '🎭 คลื่นความเห็นใจ', zh: '🎭 同情浪潮。' }, stats: { competence: 25, ethics: 20, leadership: 30, innovation: 5 } }
        ]
    },
    {
        id: 'ceo_017',
        text: {
            en: '🌊 The Climate Catastrophe: A hurricane destroys your main distribution center. Insurance covers only 40%. 10,000 orders cannot be fulfilled. Competitors are circling your customers like sharks.',
            th: '🌊 ภัยพิบัติสภาพอากาศ: เฮอริเคนทำลายศูนย์กระจายสินค้าหลัก ประกันครอบคลุมแค่ 40% ออเดอร์ 10,000 รายการไม่สามารถจัดส่งได้',
            zh: '🌊 气候灾难：飓风摧毁了你的主要配送中心。保险只覆盖40%。10000个订单无法履行。竞争对手像鲨鱼一样围着你的客户。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Competitor Collaboration: "Call our biggest competitor. Ask to use their logistics temporarily. Split the margin."', th: '🤝 ร่วมมือกับคู่แข่ง', zh: '🤝 竞争对手合作' }, consequence: { en: '🕊️ Industry Unity. Customers are amazed. Both brands benefit from the goodwill. Partnership continues.', th: '🕊️ ความสามัคคีในอุตสาหกรรม', zh: '🕊️ 行业团结。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 35 } },
            { id: 'B', text: { en: '💸 Force Majeure: "Invoke force majeure on all contracts. Cancel orders. Refund everyone. Rebuild."', th: '💸 เหตุสุดวิสัย', zh: '💸 不可抗力' }, consequence: { en: '😤 Customer Anger! 60% of customers never return. Competitors absorb your market share permanently.', th: '😤 ลูกค้าโกรธ!', zh: '😤 客户愤怒！' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🏭 Distributed Network: "Convert 50 retail locations into mini-distribution hubs overnight. Ship direct from stores."', th: '🏭 เครือข่ายกระจาย', zh: '🏭 分布式网络' }, consequence: { en: '🚀 Innovation Under Pressure! Delivery is slower but operational. Customers respect the hustle.', th: '🚀 นวัตกรรมภายใต้แรงกดดัน!', zh: '🚀 压力下的创新！' }, stats: { competence: 50, ethics: 30, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '📱 Transparency Campaign: "Email every customer personally. Show the damage. Offer 50% discount on future orders."', th: '📱 แคมเปญความโปร่งใส', zh: '📱 透明度运动' }, consequence: { en: '💖 Customer Loyalty! 80% of customers wait patiently. Discount costs hurt, but relationships deepen.', th: '💖 ความภักดีของลูกค้า!', zh: '💖 客户忠诚！' }, stats: { competence: 35, ethics: 45, leadership: 40, innovation: 20 } }
        ]
    },
    {
        id: 'ceo_018',
        text: {
            en: '👑 The Succession Crisis: You are diagnosed with a serious illness. You have 6 months to choose a successor. Your COO is competent but uninspiring. Your VP of Innovation is brilliant but polarizing. Your daughter works at the company.',
            th: '👑 วิกฤตการสืบทอด: คุณได้รับการวินิจฉัยว่าป่วยหนัก มีเวลา 6 เดือนเลือกผู้สืบทอด COO มีความสามารถแต่ไม่สร้างแรงบันดาลใจ VP ฝ่ายนวัตกรรมเก่งแต่ขัดแย้ง',
            zh: '👑 继任危机：你被诊断出严重疾病。你有6个月时间选择继任者。你的COO能力强但缺乏激励。你的创新VP才华横溢但两极分化。'
        },
        options: [
            { id: 'A', text: { en: '📊 The Safe Choice: "Promote the COO. Stability matters more than brilliance during a transition."', th: '📊 ทางเลือกที่ปลอดภัย', zh: '📊 安全的选择' }, consequence: { en: '🐌 Stable but Stagnant. The company survives but stops innovating. Competitors leapfrog within 3 years.', th: '🐌 มั่นคงแต่นิ่ง', zh: '🐌 稳定但停滞。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: -10 } },
            { id: 'B', text: { en: '🚀 The Bold Choice: "Choose the VP of Innovation. She will ruffle feathers but she will transform the company."', th: '🚀 ทางเลือกที่กล้าหาญ', zh: '🚀 大胆的选择' }, consequence: { en: '⚡ Turbulent Transformation! 20% of old guard quits. But the company reinvents itself and stock triples.', th: '⚡ การเปลี่ยนแปลงที่ปั่นป่วน!', zh: '⚡ 动荡的转型！' }, stats: { competence: 45, ethics: 35, leadership: 40, innovation: 50 } },
            { id: 'C', text: { en: '👨‍👩‍👧 The Dynasty: "Choose my daughter. She knows the culture and I can mentor her in my remaining time."', th: '👨‍👩‍👧 ราชวงศ์', zh: '👨‍👩‍👧 王朝' }, consequence: { en: '👑 Nepotism Accusations. Board members resign in protest. Stock drops on leadership concerns.', th: '👑 ข้อกล่าวหาเรื่องระบบอุปถัมภ์', zh: '👑 裙带关系指控。' }, stats: { competence: 15, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🌍 External Search: "Hire an executive search firm. The best CEO might be someone we have never met."', th: '🌍 ค้นหาภายนอก', zh: '🌍 外部搜索' }, consequence: { en: '🎰 Risky Bet. The outsider brings fresh ideas but clashes with company DNA. Results are mixed.', th: '🎰 การเดิมพันเสี่ยง', zh: '🎰 冒险的赌注。' }, stats: { competence: 30, ethics: 40, leadership: 25, innovation: 35 } }
        ]
    },
    {
        id: 'ceo_019',
        text: {
            en: '📺 The Viral Employee: A warehouse worker posts a TikTok showing terrible working conditions. It gets 100M views. The conditions are real. CNN is calling for a comment.',
            th: '📺 พนักงานไวรัล: พนักงานคลังสินค้าโพสต์ TikTok แสดงสภาพการทำงานที่แย่มาก ยอดวิว 100 ล้าน สภาพเป็นเรื่องจริง CNN โทรมาขอความเห็น',
            zh: '📺 病毒员工：一名仓库工人发布TikTok视频，展示了恶劣的工作条件。获得1亿次观看。条件是真实的。CNN打电话来要求评论。'
        },
        options: [
            { id: 'A', text: { en: '🎤 Own It: "Invite CNN inside. Show the problems. Announce $100M to fix conditions. Thank the worker."', th: '🎤 रับเป็นเจ้าของ', zh: '🎤 承认' }, consequence: { en: '🌟 Redemption Arc! The transformation is documented. You become a case study in corporate accountability.', th: '🌟 อาร์คแห่งการไถ่บาป!', zh: '🌟 救赎弧线！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🔒 Fire the Worker: "He violated social media policy. Terminate him. Issue a statement that the video is misleading."', th: '🔒 ไล่พนักงานออก', zh: '🔒 解雇工人' }, consequence: { en: '💥 Martyr Effect! The fired worker becomes a folk hero. Unionization efforts accelerate across all facilities.', th: '💥 เอฟเฟกต์ผู้พลีชีพ!', zh: '💥 殉道者效应！' }, stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'C', text: { en: '🤫 PR Spin: "Release a polished corporate video showing your BEST facility. Drown out the narrative."', th: '🤫 ปั่น PR', zh: '🤫 公关旋转' }, consequence: { en: '🤣 Internet Mocked! Side-by-side comparisons go viral. You look even worse for trying to manipulate.', th: '🤣 อินเทอร์เน็ตล้อ!', zh: '🤣 网络嘲笑！' }, stats: { competence: 15, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🏗️ Worker Advisory Board: "Create a worker-elected council that reports directly to the board on conditions."', th: '🏗️ คณะที่ปรึกษาพนักงาน', zh: '🏗️ 工人顾问委员会' }, consequence: { en: '🤝 Structural Change. Slow but meaningful. Workers feel empowered. Productivity actually improves 15%.', th: '🤝 การเปลี่ยนแปลงเชิงโครงสร้าง', zh: '🤝 结构性变革。' }, stats: { competence: 40, ethics: 45, leadership: 45, innovation: 30 } }
        ]
    },
    {
        id: 'ceo_020',
        text: {
            en: '🤖 The Robot CEO: Your board suggests replacing you with an AI CEO system that makes data-driven decisions. Early tests show it outperforms human judgment 60% of the time. You are being asked to approve your own replacement.',
            th: '🤖 ซีอีโอหุ่นยนต์: บอร์ดเสนอให้แทนที่คุณด้วยระบบ AI CEO ที่ตัดสินใจจากข้อมูล ทดสอบเบื้องต้นแสดงว่ามันเอาชนะการตัดสินใจของมนุษย์ 60%',
            zh: '🤖 机器人CEO：你的董事会建议用AI CEO系统取代你。初步测试显示它在60%的时间里胜过人类判断。你被要求批准自己的替代品。'
        },
        options: [
            { id: 'A', text: { en: '🤖 Embrace It: "If AI is better, then AI should lead. I will transition to Chairman and oversee the AI."', th: '🤖 ยอมรับมัน', zh: '🤖 拥抱它' }, consequence: { en: '🌐 Historic First! The AI CEO works brilliantly for 18 months... then makes a catastrophic ethical error no human would make.', th: '🌐 ครั้งแรกในประวัติศาสตร์!', zh: '🌐 历史性的第一次！' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 50 } },
            { id: 'B', text: { en: '🚫 Block It: "A company needs human judgment, empathy, and accountability. AI cannot lead humans."', th: '🚫 บล็อกมัน', zh: '🚫 阻止它' }, consequence: { en: '🐢 Status Quo. You keep your job but the company is slower than AI-driven competitors. Revenue declines.', th: '🐢 สถานะเดิม', zh: '🐢 维持现状。' }, stats: { competence: 25, ethics: 30, leadership: 35, innovation: -20 } },
            { id: 'C', text: { en: '🤝 Human-AI Hybrid: "Use AI as an advisor. Every decision I make gets an AI recommendation, but I have final say."', th: '🤝 ไฮบริดมนุษย์-AI', zh: '🤝 人机混合' }, consequence: { en: '🏆 Best of Both Worlds! Decision quality improves 40%. You are hailed as the pioneer of augmented leadership.', th: '🏆 สุดยอดของทั้งสองโลก!', zh: '🏆 两全其美！' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '💼 Stall and Study: "Commission a 2-year study on AI governance before making any decision."', th: '💼 ถ่วงเวลาและศึกษา', zh: '💼 拖延和研究' }, consequence: { en: '⏳ Analysis Paralysis. The study takes 3 years. By then, competitors have already implemented AI leadership.', th: '⏳ ภาวะวิเคราะห์จนเป็นอัมพาต', zh: '⏳ 分析瘫痪。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 5 } }
        ]
    },
    {
        id: 'ceo_021',
        text: {
            en: '💣 The Competitor Spy: You discover that your head of sales has been feeding confidential pricing data to a competitor for 2 years. He is your best performer and responsible for 25% of revenue.',
            th: '💣 สายลับคู่แข่ง: คุณค้นพบว่าหัวหน้าฝ่ายขายคนเก่งส่งข้อมูลราคาลับให้คู่แข่งมา 2 ปี เขาเป็นคนเก่งที่สุดและรับผิดชอบ 25% ของรายได้',
            zh: '💣 竞争对手间谍：你发现你的销售主管2年来一直向竞争对手提供机密定价数据。他是你最优秀的业绩贡献者，负责25%的收入。'
        },
        options: [
            { id: 'A', text: { en: '🔥 Immediate Termination: "Fire him today. Call the police. Sue for damages. Zero tolerance."', th: '🔥 ไล่ออกทันที', zh: '🔥 立即解雇' }, consequence: { en: '⚖️ Justice Served. You lose 25% revenue short-term but send a powerful message about integrity.', th: '⚖️ ความยุติธรรมมาถึง', zh: '⚖️ 正义得到伸张。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 10 } },
            { id: 'B', text: { en: '🕵️ Counter-Intelligence: "Use him to feed false data to the competitor. Turn him into a double agent."', th: '🕵️ ต่อต้านสายลับ', zh: '🕵️ 反情报' }, consequence: { en: '🎯 Brilliant Trap! The competitor makes bad decisions based on fake data. You gain market share.', th: '🎯 กับดักอันเฉลียวฉลาด!', zh: '🎯 精彩的陷阱！' }, stats: { competence: 50, ethics: -10, leadership: 30, innovation: 50 } },
            { id: 'C', text: { en: '🤫 Quiet Resignation: "Let him resign quietly. No lawsuit, no press. Protect the company image."', th: '🤫 ลาออกเงียบๆ', zh: '🤫 悄悄辞职' }, consequence: { en: '😤 Weak Signal! Other employees see no consequences. Loyalty and security culture erode.', th: '😤 สัญญาณอ่อนแอ!', zh: '😤 信号薄弱！' }, stats: { competence: 20, ethics: -10, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '📋 Root Cause Analysis: "Before firing, investigate WHY he did it. Fix the systemic issues that enabled betrayal."', th: '📋 วิเคราะห์สาเหตุราก', zh: '📋 根本原因分析' }, consequence: { en: '🔍 Deep Problems Found. Inadequate pay, toxic culture, and poor security all contributed. You fix everything.', th: '🔍 พบปัญหาลึก', zh: '🔍 发现深层问题。' }, stats: { competence: 45, ethics: 35, leadership: 50, innovation: 30 } }
        ]
    },
    {
        id: 'ceo_022',
        text: {
            en: '🏦 The Bankruptcy Bluff: Your company is hemorrhaging cash. You have 90 days of runway. A potential investor offers $500M but wants 60% ownership. Filing for bankruptcy would wipe out shareholders but save jobs through restructuring.',
            th: '🏦 การบลัฟการล้มละลาย: บริษัทกำลังเสียเลือด มีเงินสดเหลือ 90 วัน นักลงทุนเสนอ 500 ล้านแต่ต้องการ 60% ของหุ้น',
            zh: '🏦 破产虚张声势：你的公司现金大量流失。还有90天的跑道。一个潜在投资者提供5亿美元但要求60%的所有权。'
        },
        options: [
            { id: 'A', text: { en: '💰 Take the Deal: "60% dilution is better than 100% bankruptcy. Swallow our pride and survive."', th: '💰 รับข้อเสนอ', zh: '💰 接受交易' }, consequence: { en: '🏗️ Painful Survival. You keep the company alive but are now a minority owner in your own creation.', th: '🏗️ การอยู่รอดที่เจ็บปวด', zh: '🏗️ 痛苦的生存。' }, stats: { competence: 35, ethics: 20, leadership: 25, innovation: 10 } },
            { id: 'B', text: { en: '📢 Crowdfunding Hail Mary: "Launch a public crowdfunding campaign. Let our loyal customers save us."', th: '📢 ระดมทุนจากมวลชน', zh: '📢 众筹救命稻草' }, consequence: { en: '❤️ Community Rally! Customers raise $200M. Not enough, but the publicity attracts a better investor deal.', th: '❤️ ชุมชนรวมพลัง!', zh: '❤️ 社区集结！' }, stats: { competence: 40, ethics: 40, leadership: 45, innovation: 40 } },
            { id: 'C', text: { en: '📉 Strategic Bankruptcy: "File Chapter 11. Restructure debts. Emerge leaner and stronger in 18 months."', th: '📉 ล้มละลายเชิงกลยุทธ์', zh: '📉 战略破产' }, consequence: { en: '🔄 Phoenix Rising. Shareholders wiped out, but the company emerges debt-free. Employees keep jobs.', th: '🔄 ฟีนิกซ์ฟื้นคืน', zh: '🔄 凤凰涅槃。' }, stats: { competence: 40, ethics: 10, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🎯 Pivot Hard: "Sell off everything except the core product. Use the cash to survive. Focus on one thing."', th: '🎯 เปลี่ยนทิศทางแรง', zh: '🎯 大幅转型' }, consequence: { en: '🎯 Laser Focus! You shed 70% of revenue but the remaining 30% becomes massively profitable.', th: '🎯 โฟกัสเลเซอร์!', zh: '🎯 激光聚焦！' }, stats: { competence: 50, ethics: 25, leadership: 40, innovation: 45 } }
        ]
    },
    {
        id: 'ceo_023',
        text: {
            en: '🧬 The Genetic Data Breach: Your biotech company accidentally exposes the genetic data of 5 million customers. This includes disease predispositions, ancestry, and family connections. Insurance companies are already requesting the data.',
            th: '🧬 ข้อมูลพันธุกรรมรั่วไหล: บริษัทไบโอเทคของคุณบังเอิญเปิดเผยข้อมูลพันธุกรรมของลูกค้า 5 ล้านคน รวมถึงแนวโน้มโรค เชื้อสาย และความเชื่อมโยงครอบครัว',
            zh: '🧬 基因数据泄露：你的生物技术公司意外泄露了500万客户的基因数据。包括疾病易感性、血统和家庭关系。保险公司已经在要求获取数据。'
        },
        options: [
            { id: 'A', text: { en: '🔒 Lock Down Everything: "Delete all customer genetic data. Offer free credit monitoring. Lobby for genetic privacy laws."', th: '🔒 ล็อกดาวน์ทุกอย่าง', zh: '🔒 全面锁定' }, consequence: { en: '🛡️ Privacy Champion. Revenue drops 50% but you become the gold standard for genetic data ethics.', th: '🛡️ แชมเปี้ยนความเป็นส่วนตัว', zh: '🛡️ 隐私冠军。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 20 } },
            { id: 'B', text: { en: '💰 Monetize the Crisis: "Sell anonymized data to pharmaceutical companies for drug research. Turn the breach into revenue."', th: '💰 สร้างรายได้จากวิกฤต', zh: '💰 将危机货币化' }, consequence: { en: '⚖️ Class-Action Monster! 5 million plaintiffs. $10B settlement. CEO faces criminal charges.', th: '⚖️ สัตว์ประหลาดการฟ้องร้อง!', zh: '⚖️ 集体诉讼怪物！' }, stats: { competence: 10, ethics: -50, leadership: -40, innovation: 10 } },
            { id: 'C', text: { en: '🤖 AI Guardian: "Build an AI system that alerts customers in real-time if their data is accessed. Turn lemons into a product."', th: '🤖 AI ผู้พิทักษ์', zh: '🤖 AI守护者' }, consequence: { en: '🚀 Privacy Product! The alert system becomes a standalone product worth $1B. Customers feel protected.', th: '🚀 ผลิตภัณฑ์ความเป็นส่วนตัว!', zh: '🚀 隐私产品！' }, stats: { competence: 50, ethics: 35, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🤫 Minimize and Deflect: "Downplay the breach scope. Blame third-party vendors. Offer minimal compensation."', th: '🤫 ลดความสำคัญและเบี่ยงเบน', zh: '🤫 淡化和转移' }, consequence: { en: '🔍 Investigative Journalism. Reporters prove you knew the full scope. Cover-up is worse than the breach.', th: '🔍 การสืบสวนข่าว', zh: '🔍 调查新闻。' }, stats: { competence: 15, ethics: -30, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'ceo_024',
        text: {
            en: '🎮 The Metaverse Gamble: Your board wants to invest $5B in building a metaverse platform. VR adoption is still only 5%. Your competitors are all jumping in. If you do not, you might miss the next internet.',
            th: '🎮 การพนันเมตาเวิร์ส: บอร์ดต้องการลงทุน 5 พันล้านในการสร้างแพลตฟอร์มเมตาเวิร์ส การยอมรับ VR ยังมีแค่ 5%',
            zh: '🎮 元宇宙赌博：你的董事会想投资50亿美元建设元宇宙平台。VR的采用率仍然只有5%。'
        },
        options: [
            { id: 'A', text: { en: '🚀 All In: "This IS the future. Invest the full $5B. Hire 10,000 engineers. First mover wins."', th: '🚀 ลงทุนทั้งหมด', zh: '🚀 全力以赴' }, consequence: { en: '💸 Expensive Bet. 3 years and $5B later, adoption is still low. Stock drops 40%. But early infrastructure may pay off in decade.', th: '💸 การเดิมพันที่แพง', zh: '💸 昂贵的赌注。' }, stats: { competence: 30, ethics: 20, leadership: 25, innovation: 50 } },
            { id: 'B', text: { en: '🧪 Small Experiment: "Invest $200M in a small team. Test the waters. Scale if we see traction."', th: '🧪 ทดลองเล็กๆ', zh: '🧪 小实验' }, consequence: { en: '🎯 Smart Play! The small team discovers a niche AR application worth more than the metaverse.', th: '🎯 การเล่นที่ฉลาด!', zh: '🎯 聪明的玩法！' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 45 } },
            { id: 'C', text: { en: '🚫 Skip It: "The metaverse is a fad. Focus on our core business. Let others waste money."', th: '🚫 ข้ามมัน', zh: '🚫 跳过它' }, consequence: { en: '🎰 50/50 Outcome. If the metaverse fails, you look like a genius. If it succeeds, you are Blockbuster.', th: '🎰 ผลลัพธ์ 50/50', zh: '🎰 50/50的结果。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: -20 } },
            { id: 'D', text: { en: '🤝 Partnership Play: "Partner with a gaming company. They build it, we provide the enterprise clients."', th: '🤝 เล่นร่วมทุน', zh: '🤝 合作伙伴策略' }, consequence: { en: '💡 Low Risk, Shared Reward. The gaming partner builds well. You provide the business use cases. Both benefit.', th: '💡 ความเสี่ยงต่ำ รางวัลร่วม', zh: '💡 低风险，共享回报。' }, stats: { competence: 45, ethics: 35, leadership: 35, innovation: 40 } }
        ]
    },
    {
        id: 'ceo_025',
        text: {
            en: '⚡ The Energy Crisis: Your data centers consume more electricity than a small city. A new law taxes carbon-heavy operations. Your cloud competitors are all switching to nuclear. You are stuck on coal.',
            th: '⚡ วิกฤตพลังงาน: ศูนย์ข้อมูลของคุณใช้ไฟฟ้ามากกว่าเมืองเล็กๆ กฎหมายใหม่เก็บภาษีการดำเนินงานที่ปล่อยคาร์บอนสูง',
            zh: '⚡ 能源危机：你的数据中心耗电量超过一个小城市。新法律对碳密集型运营征税。你的云竞争对手都在转向核能。你还停留在煤炭上。'
        },
        options: [
            { id: 'A', text: { en: '☢️ Go Nuclear: "Build our own small modular reactor. $2B upfront but energy independence forever."', th: '☢️ เปลี่ยนเป็นนิวเคลียร์', zh: '☢️ 走核能路线' }, consequence: { en: '🔋 Energy Pioneer! It takes 5 years but you never pay an energy bill again. Competitors are jealous.', th: '🔋 ผู้บุกเบิกพลังงาน!', zh: '🔋 能源先驱！' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '☀️ Solar Farm: "Buy 10,000 acres of desert. Build the largest solar farm in history."', th: '☀️ ฟาร์มโซลาร์', zh: '☀️ 太阳能农场' }, consequence: { en: '🌞 Green Energy Win! Cheaper than coal within 3 years. ESG investors flood in.', th: '🌞 ชัยชนะพลังงานสีเขียว!', zh: '🌞 绿色能源胜利！' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 45 } },
            { id: 'C', text: { en: '💨 Offshore the Problem: "Move data centers to countries with cheap, unregulated energy."', th: '💨 ย้ายปัญหาไปต่างประเทศ', zh: '💨 将问题转移到海外' }, consequence: { en: '📰 Climate Villain! NGOs track your carbon footprint globally. "Digital Polluter" campaigns target you.', th: '📰 ตัวร้ายสภาพอากาศ!', zh: '📰 气候恶棍！' }, stats: { competence: 25, ethics: -40, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🧊 Efficiency First: "Optimize existing data centers. Use AI cooling, liquid immersion, and reduce waste 60%."', th: '🧊 ประสิทธิภาพมาก่อน', zh: '🧊 效率优先' }, consequence: { en: '💡 Quick Wins! Costs drop 40% immediately. Buys time for long-term energy transition.', th: '💡 ชัยชนะเร็ว!', zh: '💡 快速胜利！' }, stats: { competence: 50, ethics: 30, leadership: 35, innovation: 45 } }
        ]
    },
    {
        id: 'ceo_026',
        text: {
            en: '🎪 The Celebrity Partnership: A massive celebrity with 200M followers offers to be your brand ambassador. However, they are known for controversial political views. Your marketing team says it will double sales.',
            th: '🎪 พันธมิตรคนดัง: เซเลบริตี้ยิ่งใหญ่มีผู้ติดตาม 200 ล้านคนเสนอเป็นแบรนด์แอมบาสเดอร์ แต่เป็นที่รู้จักเรื่องมุมมองทางการเมืองที่ขัดแย้ง',
            zh: '🎪 名人合作：一位拥有2亿粉丝的大明星提出担任你的品牌大使。然而，他们以有争议的政治观点闻名。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Sign the Deal: "200M followers is 200M potential customers. Politics and business are separate."', th: '🤝 เซ็นสัญญา', zh: '🤝 签约' }, consequence: { en: '🌪️ Polarized Brand! Sales spike 80% with one demographic but you lose 30% of another. Net positive but volatile.', th: '🌪️ แบรนด์แบ่งขั้ว!', zh: '🌪️ 品牌分化！' }, stats: { competence: 35, ethics: -10, leadership: 20, innovation: 20 } },
            { id: 'B', text: { en: '🚫 Politely Decline: "Our brand must be inclusive and non-partisan. Thank them but pass."', th: '🚫 ปฏิเสธอย่างสุภาพ', zh: '🚫 礼貌拒绝' }, consequence: { en: '🕊️ Safe but Boring. No controversy but no growth either. Competitors snag the celebrity deal.', th: '🕊️ ปลอดภัยแต่น่าเบื่อ', zh: '🕊️ 安全但无聊。' }, stats: { competence: 25, ethics: 30, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '📋 Conditional Contract: "Sign them but with a morality clause. Any controversy and we can exit immediately."', th: '📋 สัญญาแบบมีเงื่อนไข', zh: '📋 有条件合同' }, consequence: { en: '⚖️ Legal Safety Net. You get the benefit with protection. The celebrity accepts but quietly resents the clause.', th: '⚖️ เครือข่ายความปลอดภัยทางกฎหมาย', zh: '⚖️ 法律安全网。' }, stats: { competence: 45, ethics: 25, leadership: 35, innovation: 20 } },
            { id: 'D', text: { en: '🌟 Micro-Influencer Strategy: "Instead of one controversial star, partner with 1,000 micro-influencers with 50K followers each."', th: '🌟 กลยุทธ์ไมโครอินฟลูเอนเซอร์', zh: '🌟 微影响者策略' }, consequence: { en: '📈 Diversified Reach! Lower risk, broader appeal. Total reach rivals the celebrity at a fraction of the cost.', th: '📈 การเข้าถึงที่หลากหลาย!', zh: '📈 多元化触达！' }, stats: { competence: 50, ethics: 35, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'ceo_027',
        text: {
            en: '🔬 The Patent Troll: A shell company with no products sues you for $2B claiming your core technology infringes their patent. The patent is vague but the judge assigned is historically pro-patent. Fighting costs $100M.',
            th: '🔬 แพเทนต์โทรลล์: บริษัทเปลือกไม่มีสินค้าฟ้องคุณ 2 พันล้านดอลลาร์อ้างว่าเทคโนโลยีหลักของคุณละเมิดสิทธิบัตรของพวกเขา',
            zh: '🔬 专利流氓：一家没有产品的空壳公司起诉你20亿美元，声称你的核心技术侵犯了他们的专利。'
        },
        options: [
            { id: 'A', text: { en: '⚔️ Fight in Court: "We will not be extorted. Spend the $100M. Set a precedent for the industry."', th: '⚔️ สู้ในศาล', zh: '⚔️ 法庭对决' }, consequence: { en: '🏆 Landmark Victory! After 3 years, you win. The ruling weakens patent trolls industry-wide. Hero status.', th: '🏆 ชัยชนะครั้งสำคัญ!', zh: '🏆 里程碑式的胜利！' }, stats: { competence: 45, ethics: 45, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '💰 Settle for Peace: "Pay $200M to make it go away. $200M is better than risking $2B and years of distraction."', th: '💰 ยอมจ่ายเพื่อความสงบ', zh: '💰 和解求太平' }, consequence: { en: '🎯 Pragmatic but Dangerous. You pay, but 5 more trolls come. You became a known settler.', th: '🎯 ปฏิบัติจริงแต่อันตราย', zh: '🎯 务实但危险。' }, stats: { competence: 20, ethics: -10, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Industry Coalition: "Rally 20 tech companies to fight together. Pool legal resources. Make this everyone\'s war."', th: '🤝 พันธมิตรอุตสาหกรรม', zh: '🤝 行业联盟' }, consequence: { en: '💪 United Front! The coalition crushes the troll and lobbies for patent reform. Costs split 20 ways.', th: '💪 แนวร่วม!', zh: '💪 统一战线！' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 35 } },
            { id: 'D', text: { en: '🔄 Acquire the Patent: "Buy the shell company and their patent for $300M. Own the weapon they used against you."', th: '🔄 ซื้อสิทธิบัตร', zh: '🔄 收购专利' }, consequence: { en: '😈 Patent War Chest! Now YOU can threaten competitors with the same patent. Power play.', th: '😈 คลังอาวุธสิทธิบัตร!', zh: '😈 专利武器库！' }, stats: { competence: 35, ethics: -20, leadership: 20, innovation: 20 } }
        ]
    },
    {
        id: 'ceo_028',
        text: {
            en: '🌍 The Water Crisis: Your factory in a developing country uses 80% of the local water supply. The community is running dry. Moving the factory would cost $300M and 2,000 local jobs.',
            th: '🌍 วิกฤตน้ำ: โรงงานในประเทศกำลังพัฒนาใช้น้ำ 80% ของแหล่งน้ำท้องถิ่น ชุมชนกำลังขาดแคลนน้ำ การย้ายโรงงานจะใช้เงิน 300 ล้านดอลลาร์',
            zh: '🌍 水危机：你在发展中国家的工厂使用了当地80%的水源。社区正在干涸。搬迁工厂将花费3亿美元和2000个当地工作岗位。'
        },
        options: [
            { id: 'A', text: { en: '🏗️ Build a Desalination Plant: "Invest $100M in a desalination plant that serves both the factory AND the community."', th: '🏗️ สร้างโรงงานแยกเกลือ', zh: '🏗️ 建造海水淡化厂' }, consequence: { en: '💧 Water Hero! The community thrives. Your brand becomes synonymous with corporate responsibility.', th: '💧 ฮีโร่น้ำ!', zh: '💧 水英雄！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 45 } },
            { id: 'B', text: { en: '🏃 Relocate the Factory: "Move to a water-rich region. Accept the cost. The community needs their water back."', th: '🏃 ย้ายโรงงาน', zh: '🏃 搬迁工厂' }, consequence: { en: '😢 Mixed Outcome. Community gets water back but loses 2,000 jobs. Poverty increases dramatically.', th: '😢 ผลลัพธ์ผสม', zh: '😢 混合结果。' }, stats: { competence: 35, ethics: 30, leadership: 25, innovation: 10 } },
            { id: 'C', text: { en: '📊 Efficiency Audit: "Reduce factory water usage by 60% through recycling and closed-loop systems."', th: '📊 ตรวจสอบประสิทธิภาพ', zh: '📊 效率审计' }, consequence: { en: '♻️ Smart Conservation! Water usage drops dramatically. Community and factory coexist sustainably.', th: '♻️ การอนุรักษ์อัจฉริยะ!', zh: '♻️ 智能节水！' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🤷 Status Quo: "We employ 2,000 locals. Without us, there is no economy. Water will be found elsewhere."', th: '🤷 สถานะปัจจุบัน', zh: '🤷 维持现状' }, consequence: { en: '📰 International Outrage! Documentary "The Dry Village" wins an Oscar. Your stock crashes.', th: '📰 ความโกรธเกรี้ยวระหว่างประเทศ!', zh: '📰 国际愤怒！' }, stats: { competence: 10, ethics: -50, leadership: -30, innovation: -10 } }
        ]
    },
    {
        id: 'ceo_029',
        text: {
            en: '🎓 The University Scandal: A journalist discovers that your company donated $10M to a university in exchange for favorable research published about your product. The research influenced FDA approval.',
            th: '🎓 เรื่องอื้อฉาวมหาวิทยาลัย: นักข่าวค้นพบว่าบริษัทบริจาค 10 ล้านให้มหาวิทยาลัยเพื่อแลกกับงานวิจัยที่เอื้อประโยชน์',
            zh: '🎓 大学丑闻：一名记者发现你的公司向一所大学捐赠了1000万美元，以换取关于你产品的有利研究。该研究影响了FDA的批准。'
        },
        options: [
            { id: 'A', text: { en: '🔍 Independent Audit: "Commission a fully independent third-party study. If our product is safe, let the truth speak."', th: '🔍 ตรวจสอบอิสระ', zh: '🔍 独立审计' }, consequence: { en: '✅ Vindicated! The independent study confirms safety. But the original donation scandal still damages reputation.', th: '✅ ได้รับการพิสูจน์!', zh: '✅ 证明清白！' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '🤫 Deny Connection: "The donation and the research are completely unrelated. We fund education broadly."', th: '🤫 ปฏิเสธการเชื่อมโยง', zh: '🤫 否认关联' }, consequence: { en: '📧 Email Trail! Internal emails prove direct quid pro quo. CEO faces congressional hearing.', th: '📧 เส้นทางอีเมล!', zh: '📧 邮件追踪！' }, stats: { competence: 10, ethics: -40, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '📢 Full Transparency: "Release all internal communications. Show there was no direct link. Admit the optics are bad."', th: '📢 ความโปร่งใสเต็มที่', zh: '📢 完全透明' }, consequence: { en: '⚠️ Partial Redemption. Some emails are embarrassing but nothing illegal. Public trust partially restored.', th: '⚠️ การไถ่บาปบางส่วน', zh: '⚠️ 部分救赎。' }, stats: { competence: 35, ethics: 35, leadership: 35, innovation: 10 } },
            { id: 'D', text: { en: '🏫 Reform Initiative: "End all university donations with conditions. Create a blind research fund with zero company influence."', th: '🏫 โครงการปฏิรูป', zh: '🏫 改革倡议' }, consequence: { en: '🌟 Industry Standard! Other companies adopt your blind funding model. You lead ethical research reform.', th: '🌟 มาตรฐานอุตสาหกรรม!', zh: '🌟 行业标准！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 } }
        ]
    },
    {
        id: 'ceo_030',
        text: {
            en: '🏛️ The Government Contract: A $5B military contract requires you to build surveillance technology that could be used against civilians. Your engineers are split. Half are excited by the tech, half threaten to quit on moral grounds.',
            th: '🏛️ สัญญารัฐบาล: สัญญาทหาร 5 พันล้านดอลลาร์ต้องการให้คุณสร้างเทคโนโลยีเฝ้าระวังที่อาจถูกใช้กับพลเรือน',
            zh: '🏛️ 政府合同：一份50亿美元的军事合同要求你建造可能被用来对付平民的监控技术。你的工程师意见分裂。'
        },
        options: [
            { id: 'A', text: { en: '🇺🇸 Take the Contract: "National security matters. We build the tool. How it is used is the government\'s responsibility."', th: '🇺🇸 รับสัญญา', zh: '🇺🇸 接受合同' }, consequence: { en: '💰 Revenue Boom, Talent Exodus. $5B revenue but 30% of engineers quit. Recruitment from top universities drops 50%.', th: '💰 รายได้พุ่ง คนเก่งหนี', zh: '💰 收入暴增，人才外流。' }, stats: { competence: 35, ethics: -30, leadership: -10, innovation: 30 } },
            { id: 'B', text: { en: '🚫 Refuse Entirely: "We will not build weapons. Full stop. Our employees and our conscience come first."', th: '🚫 ปฏิเสธทั้งหมด', zh: '🚫 完全拒绝' }, consequence: { en: '✊ Employee Unity! Talent retention soars. But losing $5B means layoffs elsewhere. The irony hurts.', th: '✊ ความสามัคคีของพนักงาน!', zh: '✊ 员工团结！' }, stats: { competence: 25, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '⚖️ Ethical Conditions: "Take the contract but with strict ethical guardrails. No civilian use clause. Independent oversight."', th: '⚖️ เงื่อนไขจริยธรรม', zh: '⚖️ 道德条件' }, consequence: { en: '🤝 Compromise Works. Government agrees to oversight. Engineers mostly stay. But some question if guardrails hold.', th: '🤝 การประนีประนอมได้ผล', zh: '🤝 妥协有效。' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '🔬 Dual-Use Pivot: "Accept the contract but insist on civilian applications too. Build search-and-rescue, not just surveillance."', th: '🔬 เปลี่ยนเป็นการใช้คู่', zh: '🔬 军民两用转型' }, consequence: { en: '🌟 Innovation Leader! The dual-use tech saves lives in disasters AND serves defense. Win-win narrative.', th: '🌟 ผู้นำนวัตกรรม!', zh: '🌟 创新领导者！' }, stats: { competence: 50, ethics: 35, leadership: 45, innovation: 50 } }
        ]
    },
    {
        id: 'ceo_031',
        text: {
            en: '🎬 The Streaming Wars: Your legacy media company is hemorrhaging subscribers to Netflix and Disney+. The board demands you launch a competing streaming platform requiring $3B investment. Traditional cable revenue still brings in $10B/year.',
            th: '🎬 สงครามสตรีมมิ่ง: บริษัทสื่อดั้งเดิมของคุณกำลังสูญเสียสมาชิกให้กับ Netflix และ Disney+ บอร์ดเรียกร้องให้เปิดแพลตฟอร์มสตรีมมิ่งที่ต้องลงทุน 3 พันล้าน',
            zh: '🎬 流媒体战争：你的传统媒体公司正在向Netflix和Disney+流失订户。董事会要求你推出竞争性流媒体平台，需要30亿美元投资。'
        },
        options: [
            { id: 'A', text: { en: '🚀 All-In Streaming: "Invest the full $3B. Original content is king. We will be the next HBO Max."', th: '🚀 ลงทุนสตรีมมิ่งเต็มที่', zh: '🚀 全力流媒体' }, consequence: { en: '💸 Burning Cash! $3B spent, but content costs spiral. You are still 5th place after 3 years.', th: '💸 เผาเงิน!', zh: '💸 烧钱！' }, stats: { competence: 30, ethics: 20, leadership: 25, innovation: 40 } },
            { id: 'B', text: { en: '🤝 Partner Strategy: "License our content library to existing streamers. Collect royalties without platform risk."', th: '🤝 กลยุทธ์พันธมิตร', zh: '🤝 合作策略' }, consequence: { en: '📉 Slow Decline. You make money short-term but lose all control over distribution. Eventually irrelevant.', th: '📉 ค่อยๆ เสื่อม', zh: '📉 缓慢衰退。' }, stats: { competence: 25, ethics: 30, leadership: 20, innovation: -10 } },
            { id: 'C', text: { en: '🎯 Niche Platform: "Invest $500M in a specialized platform for our core demographic only. Own a smaller pond."', th: '🎯 แพลตฟอร์มเฉพาะกลุ่ม', zh: '🎯 利基平台' }, consequence: { en: '🎯 Sustainable Success! You dominate a $2B niche market profitably. Competitors ignore you.', th: '🎯 ความสำเร็จที่ยั่งยืน!', zh: '🎯 可持续成功！' }, stats: { competence: 50, ethics: 35, leadership: 40, innovation: 45 } },
            { id: 'D', text: { en: '📺 Double Down on Cable: "Cable is not dead. Invest in premium sports rights. Live TV is our moat."', th: '📺 เพิ่มเงินเดิมพันในเคเบิล', zh: '📺 加倍押注有线电视' }, consequence: { en: '⏳ Blockbuster Moment. You milk cable for 5 years, then the bottom falls out catastrophically.', th: '⏳ ช่วงเวลาบล็อกบัสเตอร์', zh: '⏳ 百视达时刻。' }, stats: { competence: 20, ethics: 25, leadership: 15, innovation: -30 } }
        ]
    },
    {
        id: 'ceo_032',
        text: {
            en: '🏥 The Healthcare Acquisition: A major hospital chain is for sale at $15B. It would diversify your tech company into healthcare. Your CFO calls it "insane." Your board is split 50/50.',
            th: '🏥 การซื้อกิจการโรงพยาบาล: เครือโรงพยาบาลขายในราคา 15 พันล้าน จะทำให้บริษัทเทคของคุณกระจายเข้าสู่สุขภาพ CFO บอกว่า "บ้า"',
            zh: '🏥 医疗收购：一家大型医院连锁店正在以150亿美元的价格出售。这将使你的科技公司多元化进入医疗保健领域。你的CFO称这是"疯狂的"。'
        },
        options: [
            { id: 'A', text: { en: '🏥 Acquire It: "Healthcare tech is the future. Vertical integration gives us patient data and distribution."', th: '🏥 ซื้อมัน', zh: '🏥 收购它' }, consequence: { en: '🤯 Culture Clash! Tech bros and hospital administrators cannot work together. Integration is a nightmare.', th: '🤯 วัฒนธรรมปะทะ!', zh: '🤯 文化冲突！' }, stats: { competence: 25, ethics: 20, leadership: 15, innovation: 30 } },
            { id: 'B', text: { en: '🚫 Hard Pass: "Stick to our core competency. We are a tech company, not a hospital operator."', th: '🚫 ปฏิเสธเด็ดขาด', zh: '🚫 坚决拒绝' }, consequence: { en: '🎯 Focused Excellence. You dominate tech but watch as Amazon buys the hospitals and enters health tech.', th: '🎯 ความเป็นเลิศที่มุ่งเน้น', zh: '🎯 专注卓越。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '🤝 Joint Venture: "Partner 50/50. They run hospitals, we provide tech infrastructure. Best of both."', th: '🤝 ร่วมทุน', zh: '🤝 合资企业' }, consequence: { en: '💡 Hybrid Win! The JV creates a new health-tech category. Both sides benefit from expertise sharing.', th: '💡 ชัยชนะไฮบริด!', zh: '💡 混合胜利！' }, stats: { competence: 50, ethics: 35, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '💰 Buy and Flip: "Acquire, modernize IT systems in 2 years, then sell for $25B to private equity."', th: '💰 ซื้อและขาย', zh: '💰 买入倒手' }, consequence: { en: '💵 Financial Engineering! It works perfectly. You double the money but add zero healthcare value.', th: '💵 วิศวกรรมการเงิน!', zh: '💵 金融工程！' }, stats: { competence: 40, ethics: -20, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'ceo_033',
        text: {
            en: '🌐 The Misinformation Platform: Your social media platform is accused of spreading election misinformation by 15 democracies. They threaten to ban you unless you implement heavy content moderation. Free speech advocates call moderation "censorship."',
            th: '🌐 แพลตฟอร์มข้อมูลเท็จ: แพลตฟอร์มโซเชียลมีเดียของคุณถูกกล่าวหาว่าแพร่ข้อมูลเท็จเกี่ยวกับการเลือกตั้งโดย 15 ประชาธิปไตย',
            zh: '🌐 虚假信息平台：你的社交媒体平台被15个民主国家指控传播选举虚假信息。他们威胁要封禁你，除非你实施严格的内容审核。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Aggressive Moderation: "Hire 20,000 moderators. Use AI to detect misinformation. Democracy matters more than growth."', th: '🛡️ ตรวจสอบเชิงรุก', zh: '🛡️ 激进审核' }, consequence: { en: '⚖️ Balanced Approach. You lose some controversial users but gain legitimacy. Advertisers return.', th: '⚖️ แนวทางสมดุล', zh: '⚖️ 平衡方法。' }, stats: { competence: 45, ethics: 45, leadership: 45, innovation: 30 } },
            { id: 'B', text: { en: '🗽 Free Speech Absolutism: "We are a neutral platform. Users decide truth. We will not be censors."', th: '🗽 เสรีภาพในการพูดสมบูรณ์', zh: '🗽 言论自由绝对主义' }, consequence: { en: '🚫 Global Bans! 15 countries block you. Stock crashes 50%. You become a niche platform for extremists.', th: '🚫 ห้ามทั่วโลก!', zh: '🚫 全球禁令！' }, stats: { competence: 15, ethics: -30, leadership: -20, innovation: 10 } },
            { id: 'C', text: { en: '🤖 Community Notes: "Let users fact-check each other. Crowdsource truth like Wikipedia."', th: '🤖 โน้ตชุมชน', zh: '🤖 社区笔记' }, consequence: { en: '📝 Innovative Solution! It mostly works. Some gaming occurs but overall trust improves. Hybrid model wins.', th: '📝 โซลูชันนวัตกรรม!', zh: '📝 创新解决方案！' }, stats: { competence: 50, ethics: 35, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🌍 Regional Compliance: "Different rules for different countries. Heavy moderation in democracies, light in others."', th: '🌍 ปฏิบัติตามภูมิภาค', zh: '🌍 区域合规' }, consequence: { en: '🎭 Double Standards Exposed! Leaked documents show you allow dictators to spread propaganda.', th: '🎭 มาตรฐานคู่ถูกเปิดโปง!', zh: '🎭 双重标准暴露！' }, stats: { competence: 30, ethics: -25, leadership: 20, innovation: 20 } }
        ]
    },
    {
        id: 'ceo_034',
        text: {
            en: '🏀 The Star Athlete Endorsement: Your sports brand can sign either: LeBron James ($100M/year, safe); a controversial young athlete ($20M/year, huge Gen Z following); or invest in grassroots youth sports ($100M total).',
            th: '🏀 การรับรองนักกีฬาดาว: แบรนด์กีฬาของคุณสามารถเซ็นสัญญาได้: LeBron James (100 ล้าน/ปี ปลอดภัย); นักกีฬาหนุ่มที่ขัดแย้ง (20 ล้าน/ปี Gen Z ตามเยอะ)',
            zh: '🏀 明星运动员代言：你的体育品牌可以签约：勒布朗·詹姆斯（每年1亿美元，安全）；一位有争议的年轻运动员（每年2000万美元，Z世代粉丝众多）；或投资基层青年体育（总计1亿美元）。'
        },
        options: [
            { id: 'A', text: { en: '👑 LeBron Safe Bet: "LeBron is a legend. Safe, proven ROI. Do not overthink this."', th: '👑 เลอบรอนเดิมพันปลอดภัย', zh: '👑 勒布朗安全赌注' }, consequence: { en: '📊 Solid but Boring. Sales increase 15%. Competitors sign the young stars and dominate cultural conversation.', th: '📊 มั่นคงแต่น่าเบื่อ', zh: '📊 稳健但无聊。' }, stats: { competence: 35, ethics: 30, leadership: 25, innovation: 10 } },
            { id: 'B', text: { en: '⚡ Controversial Rising Star: "The young athlete is the future. Gen Z decides the next decade."', th: '⚡ ดาวรุ่งที่ขัดแย้ง', zh: '⚡ 有争议的新星' }, consequence: { en: '🎢 Rollercoaster! Sales explode 60% with youth. Then the athlete tweets something stupid and you face boycotts.', th: '🎢 รถไฟเหาะ!', zh: '🎢 过山车！' }, stats: { competence: 30, ethics: -10, leadership: 20, innovation: 40 } },
            { id: 'C', text: { en: '🌱 Grassroots Investment: "No celebrity. Build 1,000 community basketball courts. Own the culture, not a face."', th: '🌱 การลงทุนฐานราก', zh: '🌱 基层投资' }, consequence: { en: '❤️ Community Love! The brand becomes synonymous with youth development. 10-year ROI is massive.', th: '❤️ รักจากชุมชน!', zh: '❤️ 社区喜爱！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 45 } },
            { id: 'D', text: { en: '🎯 Portfolio Approach: "Sign 10 mid-level athletes for $10M each. Diversified celebrity exposure."', th: '🎯 แนวทางพอร์ตโฟลิโอ', zh: '🎯 投资组合方法' }, consequence: { en: '📈 Smart Diversification! One becomes a superstar, three are solid, six fade. Net positive outcome.', th: '📈 การกระจายอัจฉริยะ!', zh: '📈 聪明的多元化！' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 35 } }
        ]
    },
    {
        id: 'ceo_035',
        text: {
            en: '🏭 The Automation Paradox: A study shows full automation would increase profit 300% but eliminate 15,000 jobs in towns where you are the main employer. Local governments are begging you not to automate.',
            th: '🏭 ความขัดแย้งของระบบอัตโนมัติ: การศึกษาแสดงว่าระบบอัตโนมัติเต็มรูปแบบจะเพิ่มกำไร 300% แต่จะตัดงาน 15,000 ตำแหน่งในเมืองที่คุณเป็นนายจ้างหลัก',
            zh: '🏭 自动化悖论：一项研究显示，全面自动化将使利润增加300%，但会消除15000个工作岗位，而你是这些城镇的主要雇主。地方政府恳求你不要自动化。'
        },
        options: [
            { id: 'A', text: { en: '🤖 Full Automation: "Progress is inevitable. Offer generous severance. The market demands efficiency."', th: '🤖 ระบบอัตโนมัติเต็มรูปแบบ', zh: '🤖 全面自动化' }, consequence: { en: '💔 Economic Devastation. Towns become ghost towns. Documentary "American Rust 2.0" crushes your brand.', th: '💔 หายนะทางเศรษฐกิจ', zh: '💔 经济毁灭。' }, stats: { competence: 35, ethics: -40, leadership: -20, innovation: 40 } },
            { id: 'B', text: { en: '🤝 Gradual Transition: "Automate over 10 years. Retrain workers. Work with local governments on economic transition."', th: '🤝 การเปลี่ยนแปลงค่อยเป็นค่อยไป', zh: '🤝 逐步过渡' }, consequence: { en: '🌟 Responsible Capitalism! It costs more short-term but you become a case study in ethical automation.', th: '🌟 ทุนนิยมที่รับผิดชอบ!', zh: '🌟 负责任的资本主义！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 35 } },
            { id: 'C', text: { en: '🏫 Automation + Education: "Automate but build technical colleges in each town. Train workers for the automated facility."', th: '🏫 ระบบอัตโนมัติ + การศึกษา', zh: '🏫 自动化+教育' }, consequence: { en: '🎓 Transformation Success! Workers upgrade skills. Towns evolve into tech hubs. Everyone wins.', th: '🎓 ความสำเร็จในการเปลี่ยนแปลง!', zh: '🎓 转型成功！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '⏸️ No Automation: "Profits are good enough. Preserve jobs and community. Some things matter more than money."', th: '⏸️ ไม่ใช้ระบบอัตโนมัติ', zh: '⏸️ 不自动化' }, consequence: { en: '🐌 Noble but Doomed. Competitors automate and undercut your prices. 5 years later you close anyway.', th: '🐌 สูงส่งแต่ถึงจุดจบ', zh: '🐌 高尚但注定失败。' }, stats: { competence: 20, ethics: 40, leadership: 30, innovation: -20 } }
        ]
    },
    {
        id: 'ceo_036',
        text: {
            en: '💎 The Blood Diamond Scandal: Your jewelry company is exposed for sourcing diamonds from conflict zones. The supplier is 30% cheaper than ethical sources. Switching would cost $200M and increase retail prices 25%.',
            th: '💎 เรื่องอื้อฉาวเพชรเลือด: บริษัทเครื่องประดับของคุณถูกเปิดเผยว่าจัดหาเพชรจากเขตความขัดแย้ง ซัพพลายเออร์ถูกกว่าแหล่งจริยธรรม 30%',
            zh: '💎 血钻丑闻：你的珠宝公司被曝光从冲突地区采购钻石。供应商比道德来源便宜30%。转换将花费2亿美元，零售价格上涨25%。'
        },
        options: [
            { id: 'A', text: { en: '💎 Switch to Lab Diamonds: "Pivot entirely to lab-grown diamonds. Ethical, cheaper, and tell a sustainability story."', th: '💎 เปลี่ยนเป็นเพชรแล็บ', zh: '💎 转向实验室钻石' }, consequence: { en: '🚀 Disruptive Innovation! You redefine the industry. "Natural" diamond cartel claims you are fake. You win anyway.', th: '🚀 นวัตกรรมทำลายล้าง!', zh: '🚀 颠覆性创新！' }, stats: { competence: 50, ethics: 50, leadership: 45, innovation: 50 } },
            { id: 'B', text: { en: '🤫 Deny and Obfuscate: "Call the report false. Claim blockchain tracking proves ethical sourcing."', th: '🤫 ปฏิเสธและทำให้งุนงง', zh: '🤫 否认和混淆' }, consequence: { en: '📰 Investigative Bombshell! Reporters find the mines and interview child laborers. Stock crashes 70%.', th: '📰 ระเบิดการสืบสวน!', zh: '📰 调查重磅！' }, stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'C', text: { en: '⚖️ Certified Ethical Only: "Switch to Kimberley Process certified diamonds. Price increase is justified by ethics."', th: '⚖️ รับรองจริยธรรมเท่านั้น', zh: '⚖️ 仅认证道德钻石' }, consequence: { en: '🌍 Ethical Leader. Sales drop 10% but brand value soars. Younger buyers flood to you.', th: '🌍 ผู้นำด้านจริยธรรม', zh: '🌍 道德领导者。' }, stats: { competence: 45, ethics: 50, leadership: 45, innovation: 30 } },
            { id: 'D', text: { en: '💰 Business as Usual: "No comment. Continue current sourcing. Most customers do not care about diamond origins."', th: '💰 ธุรกิจตามปกติ', zh: '💰 一切照旧' }, consequence: { en: '💍 The Ring of Shame. Celebrities refuse to wear your products. Red carpet boycotts devastate brand.', th: '💍 แหวนแห่งความอับอาย', zh: '💍 耻辱之戒。' }, stats: { competence: 15, ethics: -40, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'ceo_037',
        text: {
            en: '🎓 The Student Loan Trap: Your education company offers "income share agreements" where students pay nothing upfront but owe 15% of income for 10 years. Critics call it indentured servitude. Students love it.',
            th: '🎓 กับดักเงินกู้นักเรียน: บริษัทการศึกษามี "ข้อตกลงแบ่งรายได้" นักเรียนไม่จ่ายเงินล่วงหน้าแต่เป็นหนี้ 15% ของรายได้เป็นเวลา 10 ปี',
            zh: '🎓 学生贷款陷阱：你的教育公司提供"收入分享协议"，学生无需预付费用，但要在10年内支付收入的15%。批评者称这是契约奴役。学生喜欢它。'
        },
        options: [
            { id: 'A', text: { en: '📊 Keep Current Model: "It aligns our incentives with student success. Only pay if you get a job."', th: '📊 เก็บโมเดลปัจจุบัน', zh: '📊 保持当前模式' }, consequence: { en: '⚖️ Legal Gray Zone. Some students pay $100K+ for $40K education. Class action lawsuit brewing.', th: '⚖️ เขตสีเทาทางกฎหมาย', zh: '⚖️ 法律灰色地带。' }, stats: { competence: 30, ethics: -20, leadership: 20, innovation: 30 } },
            { id: 'B', text: { en: '🎯 Cap Total Payment: "Students never pay more than 1.5x tuition cost, regardless of income."', th: '🎯 จำกัดการจ่ายทั้งหมด', zh: '🎯 设定付款上限' }, consequence: { en: '✅ Fair Innovation! The cap makes it genuinely fair. You become the industry standard for ethical ISAs.', th: '✅ นวัตกรรมที่ยุติธรรม!', zh: '✅ 公平创新！' }, stats: { competence: 50, ethics: 45, leadership: 45, innovation: 50 } },
            { id: 'C', text: { en: '🎓 Return to Tuition: "Abandon ISAs. Offer traditional tuition with generous scholarships for low-income students."', th: '🎓 กลับสู่ค่าเล่าเรียน', zh: '🎓 回归学费' }, consequence: { en: '📉 Enrollment Crash! Poor students cannot afford upfront tuition. Your social mobility mission fails.', th: '📉 การลงทะเบียนตก!', zh: '📉 入学率暴跌！' }, stats: { competence: 25, ethics: 20, leadership: 20, innovation: -10 } },
            { id: 'D', text: { en: '🤝 Hybrid Model: "Offer both tuition and ISA. Transparent calculator shows lifetime costs of each option."', th: '🤝 โมเดลผสม', zh: '🤝 混合模式' }, consequence: { en: '📊 Informed Choice! Students appreciate optionality. The transparency builds trust and enrollment grows.', th: '📊 การเลือกอย่างรู้เท่าทัน!', zh: '📊 知情选择！' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 40 } }
        ]
    },
    {
        id: 'ceo_038',
        text: {
            en: '🔋 The Battery Breakthrough: Your R&D team develops a revolutionary battery with 10x current capacity. A foreign government offers $10B to exclusively license the tech. Your government says selling it is treasonous.',
            th: '🔋 ความก้าวหน้าแบตเตอรี่: ทีม R&D พัฒนาแบตเตอรี่ปฏิวัติที่มีพลังงาน 10 เท่า รัฐบาลต่างประเทศเสนอ 10 พันล้านเพื่อได้สิทธิ์เดียว',
            zh: '🔋 电池突破：你的研发团队开发了一种容量是当前10倍的革命性电池。一个外国政府提出100亿美元独家许可该技术。你的政府说出售它是叛国。'
        },
        options: [
            { id: 'A', text: { en: '🇺🇸 Patriotic Refusal: "We will not sell strategic technology. Keep it domestic even if it costs $10B."', th: '🇺🇸 การปฏิเสธด้วยความรักชาติ', zh: '🇺🇸 爱国拒绝' }, consequence: { en: '🦅 National Hero! Government subsidies pour in. You build the battery plant in Ohio. Long-term wins.', th: '🦅 วีรบุรุษชาติ!', zh: '🦅 国家英雄！' }, stats: { competence: 45, ethics: 45, leadership: 50, innovation: 45 } },
            { id: 'B', text: { en: '💰 Take the Money: "Science is global. The battery will benefit humanity. Accept the $10B."', th: '💰 เอาเงิน', zh: '💰 拿钱' }, consequence: { en: '⚖️ Congressional Hearing! You are accused of profiteering. Technology export blocked. You get nothing.', th: '⚖️ การไต่สวนรัฐสภา!', zh: '⚖️ 国会听证会！' }, stats: { competence: 15, ethics: -30, leadership: -20, innovation: 20 } },
            { id: 'C', text: { en: '🌍 Global Consortium: "Form a consortium with 10 countries. Share the tech, share the revenue equally."', th: '🌍 กลุ่มพันธมิตรโลก', zh: '🌍 全球联盟' }, consequence: { en: '🌐 Nobel Peace Prize Territory! The battery accelerates global clean energy. You are a hero to humanity.', th: '🌐 เขตรางวัลโนเบลสันติภาพ!', zh: '🌐 诺贝尔和平奖领域！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '🏭 Build Domestic, License Later: "Build US factories first. In 5 years, license to allies only."', th: '🏭 สร้างในประเทศ ให้สิทธิทีหลัง', zh: '🏭 国内建设，稍后许可' }, consequence: { en: '⚖️ Balanced Strategy. You get government support now, international revenue later. Best of both worlds.', th: '⚖️ กลยุทธ์สมดุล', zh: '⚖️ 平衡战略。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 45 } }
        ]
    },
    {
        id: 'ceo_039',
        text: {
            en: '🎮 The Addiction Algorithm: Internal research shows your mobile game is deliberately designed to be addictive using psychological tricks. It generates $5B/year. 60% of revenue comes from 2% of players (whales), some spending $50K+/year.',
            th: '🎮 อัลกอริทึมเสพติด: การวิจัยภายในแสดงว่าเกมมือถือของคุณออกแบบมาให้เสพติดโดยใช้กลเม็ดทางจิตวิทยา สร้างรายได้ 5 พันล้าน/ปี',
            zh: '🎮 成瘾算法：内部研究显示你的手机游戏故意使用心理技巧设计成令人上瘾。它每年产生50亿美元。60%的收入来自2%的玩家（鲸鱼），有些人每年花费5万美元以上。'
        },
        options: [
            { id: 'A', text: { en: '🎯 Spending Caps: "Implement $1,000/month spending limit per player. Addiction is unethical."', th: '🎯 จำกัดการใช้จ่าย', zh: '🎯 消费上限' }, consequence: { en: '📉 Revenue Drops 60%! But you sleep at night. Younger players and parents love you. Long-term brand win.', th: '📉 รายได้ลด 60%!', zh: '📉 收入下降60%！' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 30 } },
            { id: 'B', text: { en: '💰 Maximize Engagement: "Players choose how to spend. We provide entertainment. Their decisions, not ours."', th: '💰 เพิ่มการมีส่วนร่วมสูงสุด', zh: '💰 最大化参与' }, consequence: { en: '📰 Whistleblower! Employee leaks the addiction research. "Digital Casinos for Kids" hearings destroy you.', th: '📰 ผู้แจ้งเบาะแส!', zh: '📰 告密者！' }, stats: { competence: 30, ethics: -50, leadership: -30, innovation: 20 } },
            { id: 'C', text: { en: '🎮 Redesign for Fun: "Remove predatory mechanics. Redesign for intrinsic fun, not addiction. Accept lower revenue."', th: '🎮 ออกแบบใหม่เพื่อความสนุก', zh: '🎮 重新设计乐趣' }, consequence: { en: '🌟 Industry Milestone! Player retention actually improves. Word-of-mouth drives sustainable growth.', th: '🌟 เหตุการณ์สำคัญในอุตสาหกรรม!', zh: '🌟 行业里程碑！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '🧠 Mental Health Features: "Add screen time alerts, mandatory breaks, and resources for gambling addiction."', th: '🧠 คุณสมบัติสุขภาพจิต', zh: '🧠 心理健康功能' }, consequence: { en: '⚖️ PR Win! Revenue drops 20% but you avoid regulation. Industry adopts your features as standard.', th: '⚖️ ชัยชนะ PR!', zh: '⚖️ 公关胜利！' }, stats: { competence: 45, ethics: 45, leadership: 40, innovation: 40 } }
        ]
    },
    {
        id: 'ceo_040',
        text: {
            en: '🌾 The Food Supply Crisis: Climate change devastates wheat crops. Your food company controls 40% of US bread supply. You can either: raise prices 300% (supply/demand), keep prices stable and lose money, or pivot to alternative grains.',
            th: '🌾 วิกฤตอุปทานอาหาร: การเปลี่ยนแปลงสภาพอากาศทำลายพืชข้าวสาลี บริษัทอาหารควบคุม 40% ของอุปทานขนมปังสหรัฐ',
            zh: '🌾 粮食供应危机：气候变化摧毁小麦作物。你的食品公司控制着美国40%的面包供应。你可以：提价300%（供需），保持价格稳定并亏损，或转向替代谷物。'
        },
        options: [
            { id: 'A', text: { en: '📈 Market Pricing: "Supply and demand. Raise prices 300%. That is how markets work."', th: '📈 ราคาตลาด', zh: '📈 市场定价' }, consequence: { en: '🔥 Bread Riots! You are vilified as predatory. Government price controls imposed. Stock tanks.', th: '🔥 การจลาจลขนมปัง!', zh: '🔥 面包暴动！' }, stats: { competence: 20, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: '❤️ Keep Prices Stable: "Take the loss. Feed America. We have a duty beyond profit."', th: '❤️ เก็บราคาคงที่', zh: '❤️ 保持价格稳定' }, consequence: { en: '💔 Noble Bankruptcy. You burn cash for 18 months, then collapse. No one makes bread. Crisis worse.', th: '💔 การล้มละลายอันสูงส่ง', zh: '💔 高尚的破产。' }, stats: { competence: 15, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🌾 Pivot to Alternatives: "Invest $1B to switch to sorghum, quinoa, and alternative grain bread within 6 months."', th: '🌾 เปลี่ยนไปใช้ทางเลือก', zh: '🌾 转向替代品' }, consequence: { en: '🚀 Innovation Saves the Day! Alternative grain bread becomes mainstream. You lead the food revolution.', th: '🚀 นวัตกรรมช่วยวัน!', zh: '🚀 创新拯救世界！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '🤝 Government Partnership: "Work with USDA to subsidize grain imports and stabilize prices together."', th: '🤝 พันธมิตรรัฐบาล', zh: '🤝 政府合作' }, consequence: { en: '⚖️ Public-Private Win! Government shares the cost burden. Prices rise 50%, not 300%. Crisis managed.', th: '⚖️ ชัยชนะภาครัฐ-เอกชน!', zh: '⚖️ 公私合作胜利！' }, stats: { competence: 45, ethics: 40, leadership: 45, innovation: 30 } }
        ]
    },
    {
        id: 'ceo_041',
        text: {
            en: '🎯 The Pivot or Die Moment: Your core product is being killed by a superior competitor. The board presents two options: copy their features (fast but shameless), or pivot to an entirely new market (risky but innovative).',
            th: '🎯 ช่วงเวลาเปลี่ยนหรือตาย: ผลิตภัณฑ์หลักของคุณกำลังถูกฆ่าโดยคู่แข่งที่เหนือกว่า บอร์ดเสนอสองทางเลือก: ลอกฟีเจอร์ของพวกเขา (เร็วแต่ไร้ยางอาย)',
            zh: '🎯 转型或死亡时刻：你的核心产品正在被更优秀的竞争对手扼杀。董事会提出两个选择：复制他们的功能（快速但无耻），或转向全新市场（风险但创新）。'
        },
        options: [
            { id: 'A', text: { en: '📋 Fast Follow: "Copy the best features. Ship in 3 months. Survival first, originality later."', th: '📋 ตามอย่างเร็ว', zh: '📋 快速跟随' }, consequence: { en: '🎭 Copycat Stigma. You survive but the brand is forever "me too." Top talent leaves for more innovative companies.', th: '🎭 มลทินคัดลอก', zh: '🎭 模仿者污名。' }, stats: { competence: 30, ethics: -10, leadership: 20, innovation: -20 } },
            { id: 'B', text: { en: '🚀 Bold Pivot: "Abandon the old product. Pivot 100% to AI-driven enterprise solutions. Bet the company."', th: '🚀 เปลี่ยนทิศทางกล้าหาญ', zh: '🚀 大胆转型' }, consequence: { en: '🎲 High-Stakes Gamble! 40% of customers leave immediately. But the 60% who stay triple their spending. New market loves you.', th: '🎲 การพนันเดิมพันสูง!', zh: '🎲 高风险赌博！' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'C', text: { en: '🏢 Acquire the Competitor: "If you cannot beat them, buy them. Offer $5B. Eliminate the threat permanently."', th: '🏢 ซื้อคู่แข่ง', zh: '🏢 收购竞争对手' }, consequence: { en: '⚖️ Antitrust Investigation! Regulators block the deal. You wasted 2 years and the competitor got even stronger.', th: '⚖️ การสอบสวนต่อต้านผูกขาด!', zh: '⚖️ 反垄断调查！' }, stats: { competence: 25, ethics: -10, leadership: 15, innovation: 0 } },
            { id: 'D', text: { en: '🎯 Niche Down: "They own the mass market. We dominate a profitable niche they ignore."', th: '🎯 เฉพาะกลุ่มลง', zh: '🎯 细分市场' }, consequence: { en: '💡 Strategic Retreat! Smaller market but 80% margin. You become the Rolex of your industry.', th: '💡 การถอยอย่างมีกลยุทธ์!', zh: '💡 战略撤退！' }, stats: { competence: 50, ethics: 35, leadership: 40, innovation: 40 } }
        ]
    },
    {
        id: 'ceo_042',
        text: {
            en: '🎤 The Scandal Interview: A major news network offers you an hour-long interview to address multiple controversies. Your PR team recommends: decline (safe), pre-recorded (controlled), or live (authentic but risky).',
            th: '🎤 การสัมภาษณ์เรื่องอื้อฉาว: เครือข่ายข่าวใหญ่เสนอให้สัมภาษณ์ 1 ชั่วโมงเพื่อแก้ต่างเรื่องขัดแย้งหลายเรื่อง ทีม PR แนะนำ: ปฏิเสธ (ปลอดภัย), บันทึกล่วงหน้า (ควบคุมได้)',
            zh: '🎤 丑闻采访：一家主要新闻网络提供一小时的采访来解决多个争议。你的公关团队建议：拒绝（安全），预录（可控），或直播（真实但有风险）。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Decline Firmly: "I answer to shareholders, not media. No comment."', th: '🚫 ปฏิเสธแน่วแน่', zh: '🚫 坚定拒绝' }, consequence: { en: '📉 Silence is Guilt. The network runs a damaging exposé anyway. Your absence makes you look guilty.', th: '📉 เงียบคือยอมรับผิด', zh: '📉 沉默即有罪。' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '📹 Pre-Recorded: "Do the interview but with edit approval. Control the narrative completely."', th: '📹 บันทึกล่วงหน้า', zh: '📹 预录' }, consequence: { en: '🎭 Obvious Spin! Viewers notice the heavy editing. Memes about your "rehearsed" answers go viral.', th: '🎭 การปั่นที่ชัดเจน!', zh: '🎭 明显的旋转！' }, stats: { competence: 25, ethics: -10, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '📺 Live and Uncut: "Go live. No edits. No notes. Just me and the truth."', th: '📺 ถ่ายทอดสดและไม่ตัดต่อ', zh: '📺 现场直播' }, consequence: { en: '🌟 Authenticity Wins! You stumble on a question but overall transparency is refreshing. Public opinion shifts positive.', th: '🌟 ความจริงใจชนะ!', zh: '🌟 真实性获胜！' }, stats: { competence: 45, ethics: 45, leadership: 50, innovation: 20 } },
            { id: 'D', text: { en: '📝 Written Statement Only: "Release a detailed 10-page statement addressing everything. No interview needed."', th: '📝 แถลงการณ์เขียนเท่านั้น', zh: '📝 仅书面声明' }, consequence: { en: '😴 TL;DR Effect. No one reads it. The controversies continue unchallenged.', th: '😴 เอฟเฟกต์ยาวเกินอ่าน', zh: '😴 太长不读效应。' }, stats: { competence: 15, ethics: 20, leadership: 5, innovation: 0 } }
        ]
    },
    {
        id: 'ceo_043',
        text: {
            en: '🌪️ The Natural Disaster Response: A massive earthquake hits near your largest factory. 300 employees are trapped. First responders are overwhelmed. You can: deploy company resources (costly), wait for government (slow), or evacuate management only.',
            th: '🌪️ การตอบสนองภัยพิบัติธรรมชาติ: แผ่นดินไหวใหญ่เกิดใกล้โรงงานที่ใหญ่ที่สุด พนักงาน 300 คนติดอยู่ หน่วยกู้ภัยท่วมท้น',
            zh: '🌪️ 自然灾害应对：你最大的工厂附近发生大地震。300名员工被困。急救人员不堪重负。你可以：部署公司资源（昂贵），等待政府（缓慢），或仅疏散管理层。'
        },
        options: [
            { id: 'A', text: { en: '🚁 Full Rescue: "Charter helicopters. Hire private rescue teams. Spare no expense. Bring everyone home."', th: '🚁 กู้ภัยเต็มรูปแบบ', zh: '🚁 全面救援' }, consequence: { en: '❤️ Heroes Forever! $50M cost but you save all 300. Employee loyalty hits all-time high.', th: '❤️ วีรบุรุษตลอดไป!', zh: '❤️ 永远的英雄！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '⏳ Wait for Government: "Local authorities have jurisdiction. We will support but not interfere."', th: '⏳ รอรัฐบาล', zh: '⏳ 等待政府' }, consequence: { en: '💔 Delayed Response. 50 employees die while you waited. Families sue. Stock crashes.', th: '💔 การตอบสนองล่าช้า', zh: '💔 延迟响应。' }, stats: { competence: 10, ethics: -40, leadership: -50, innovation: 0 } },
            { id: 'C', text: { en: '🏢 Executive Evacuation: "Evacuate senior leadership first. They are the most valuable to business continuity."', th: '🏢 อพยพผู้บริหาร', zh: '🏢 高管疏散' }, consequence: { en: '🔥 Mutiny! News leaks that you saved execs first. Employee walkouts destroy operations.', th: '🔥 การกบฏ!', zh: '🔥 暴动！' }, stats: { competence: 5, ethics: -50, leadership: -50, innovation: 0 } },
            { id: 'D', text: { en: '🤝 Coordinate Support: "Provide equipment, medical supplies, and logistics support to government rescuers."', th: '🤝 ประสานงานสนับสนุน', zh: '🤝 协调支持' }, consequence: { en: '⚖️ Collaborative Success. All saved. Your resources multiply government effectiveness. Praised as model corporate citizen.', th: '⚖️ ความสำเร็จจากความร่วมมือ', zh: '⚖️ 协作成功。' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 35 } }
        ]
    },
    {
        id: 'ceo_044',
        text: {
            en: '🔐 The Insider Trading Accusation: The SEC investigating unusual stock trades before your earnings announcement. Your CFO made the trades. He claims he had no inside info. Firing him looks guilty. Keeping him risks prosecution.',
            th: '🔐 ข้อกล่าวหาการซื้อขายหุ้นภายใน: SEC สอบสวนการซื้อขายหุ้นผิดปกติก่อนประกาศรายได้ CFO ของคุณทำการซื้อขาย',
            zh: '🔐 内幕交易指控：SEC正在调查你的收益公告前的异常股票交易。你的CFO进行了交易。他声称没有内幕信息。解雇他看起来有罪。保留他有被起诉的风险。'
        },
        options: [
            { id: 'A', text: { en: '🔥 Fire Immediately: "Appearance matters. He is gone today. Full cooperation with SEC."', th: '🔥 ไล่ออกทันที', zh: '🔥 立即解雇' }, consequence: { en: '⚖️ Clean Break. The SEC finds no wrongdoing. But the fired CFO sues for wrongful termination and wins $20M.', th: '⚖️ การแยกที่สะอาด', zh: '⚖️ 干净分手。' }, stats: { competence: 35, ethics: 30, leadership: 25, innovation: 0 } },
            { id: 'B', text: { en: '🛡️ Defend Him Publicly: "He is innocent until proven guilty. We stand by our people."', th: '🛡️ ป้องกันเขาต่อสาธารณะ', zh: '🛡️ 公开为他辩护' }, consequence: { en: '📧 Email Evidence! SEC finds damning messages. You both face criminal charges for obstruction.', th: '📧 หลักฐานอีเมล!', zh: '📧 电子邮件证据！' }, stats: { competence: 10, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '📊 Independent Investigation: "Hire external counsel to investigate. Suspend CFO with pay pending results."', th: '📊 การสอบสวนอิสระ', zh: '📊 独立调查' }, consequence: { en: '✅ Professional Handling. Investigation clears him. SEC finds timing was coincidental. Crisis averted.', th: '✅ การจัดการแบบมืออาชีพ', zh: '✅ 专业处理。' }, stats: { competence: 50, ethics: 45, leadership: 45, innovation: 20 } },
            { id: 'D', text: { en: '🤫 Quiet Settlement: "Have the CFO quietly return the profits and resign. No public admission."', th: '🤫 การตกลงเงียบๆ', zh: '🤫 悄悄和解' }, consequence: { en: '🚨 Whistleblower! An employee reports the cover-up. Both insider trading AND obstruction charges filed.', th: '🚨 ผู้แจ้งเบาะแส!', zh: '🚨 告密者！' }, stats: { competence: 15, ethics: -40, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'ceo_045',
        text: {
            en: '🎨 The Controversial Artist: Your fashion brand can collaborate with: a mainstream celebrity (safe, $50M revenue), a cancelled artist with loyal fanbase (risky, $30M revenue), or an unknown emerging artist (brand-building, $5M revenue).',
            th: '🎨 ศิลปินที่ขัดแย้ง: แบรนด์แฟชั่นของคุณสามารถร่วมมือกับ: คนดังกระแสหลัก (ปลอดภัย รายได้ 50 ล้าน), ศิลปินถูกยกเลิกแต่มีแฟนคลับภักดี',
            zh: '🎨 有争议的艺术家：你的时尚品牌可以合作：主流名人（安全，5000万美元收入），被取消但有忠实粉丝群的艺术家（风险，3000万美元收入），或未知的新兴艺术家（品牌建设，500万美元收入）。'
        },
        options: [
            { id: 'A', text: { en: '🌟 Mainstream Celebrity: "Safe choice. Maximum revenue. Do not rock the boat."', th: '🌟 คนดังกระแสหลัก', zh: '🌟 主流名人' }, consequence: { en: '😴 Safe but Forgettable. $50M revenue but zero cultural impact. Competitors take bigger risks and steal mindshare.', th: '😴 ปลอดภัยแต่ลืมได้', zh: '😴 安全但可遗忘。' }, stats: { competence: 35, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🔥 Cancelled Artist: "Art transcends controversy. Their fanbase is passionate. Sign them."', th: '🔥 ศิลปินถูกยกเลิก', zh: '🔥 被取消的艺术家' }, consequence: { en: '🌪️ Culture War! Half your customers boycott. But the loyal half buy triple. Net positive but divisive.', th: '🌪️ สงครามวัฒนธรรม!', zh: '🌪️ 文化战争！' }, stats: { competence: 30, ethics: -20, leadership: 25, innovation: 35 } },
            { id: 'C', text: { en: '🌱 Emerging Artist: "Invest in the future. Discover the next Virgil Abloh. Long-term brand equity."', th: '🌱 ศิลปินรุ่นใหม่', zh: '🌱 新兴艺术家' }, consequence: { en: '🚀 Star Maker! The artist becomes huge 2 years later. You own the narrative of discovering them.', th: '🚀 ผู้สร้างดาว!', zh: '🚀 造星者！' }, stats: { competence: 45, ethics: 40, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '🎯 Rotate All Three: "Launch 3 micro-collections. Let the market decide which sells."', th: '🎯 หมุนเวียนทั้งสาม', zh: '🎯 轮换三者' }, consequence: { en: '📊 Data-Driven Win! The emerging artist surprisingly outsells both. You scale that line.', th: '📊 ชัยชนะจากข้อมูล!', zh: '📊 数据驱动的胜利！' }, stats: { competence: 50, ethics: 35, leadership: 40, innovation: 45 } }
        ]
    },
    {
        id: 'ceo_046',
        text: {
            en: '💰 The Activist Investor: A hedge fund buys 15% of your stock and demands you cut R&D by 80%, lay off 5,000 employees, and return $10B to shareholders via buybacks. Stock would soar short-term but cripple long-term innovation.',
            th: '💰 นักลงทุนนักเคลื่อนไหว: กองทุนป้องกันความเสี่ยงซื้อหุ้น 15% และเรียกร้องให้คุณตัด R&D 80%, ไล่พนักงาน 5,000 คน และคืนเงิน 10 พันล้านให้ผู้ถือหุ้น',
            zh: '💰 激进投资者：一家对冲基金购买了你15%的股票，要求你削减80%的研发，裁员5000人，并通过回购向股东返还100亿美元。股价短期会飙升但会削弱长期创新。'
        },
        options: [
            { id: 'A', text: { en: '✊ Fight Back: "This is short-term thinking. We refuse. Launch a proxy fight to keep the board."', th: '✊ ต่อสู้กลับ', zh: '✊ 反击' }, consequence: { en: '⚔️ Boardroom Battle! You narrowly win the proxy fight. Activist sells. Stock dips but long-term vision intact.', th: '⚔️ การต่อสู้ในห้องบอร์ด!', zh: '⚔️ 董事会之战！' }, stats: { competence: 45, ethics: 40, leadership: 50, innovation: 45 } },
            { id: 'B', text: { en: '💸 Accept Demands: "Shareholders own the company. Implement all changes immediately."', th: '💸 ยอมรับข้อเรียกร้อง', zh: '💸 接受要求' }, consequence: { en: '📈 Short Pump, Long Dump. Stock soars 40% then crashes 70% when innovation pipeline dries up.', th: '📈 ปั๊มระยะสั้น ทุ่มระยะยาว', zh: '📈 短期上涨，长期下跌。' }, stats: { competence: 20, ethics: -30, leadership: -40, innovation: -50 } },
            { id: 'C', text: { en: '🤝 Negotiate Compromise: "Cut R&D 20%, not 80%. Selective buybacks. Keep innovation core intact."', th: '🤝 เจรจาประนีประนอม', zh: '🤝 协商妥协' }, consequence: { en: '⚖️ Reasonable Middle. Activist accepts. Stock rises modestly. You retain enough R&D to stay competitive.', th: '⚖️ กลางที่สมเหตุสมผล', zh: '⚖️ 合理的中间地带。' }, stats: { competence: 40, ethics: 25, leadership: 35, innovation: 20 } },
            { id: 'D', text: { en: '🏢 Buyout the Activist: "Offer to buy their shares at 10% premium. Make them go away."', th: '🏢 ซื้อหุ้นนักเคลื่อนไหว', zh: '🏢 收购激进者' }, consequence: { en: '💰 Greenmail Success! They accept and leave. But it sets a precedent. More activists come for easy money.', th: '💰 ความสำเร็จของการไถ่', zh: '💰 绿邮成功！' }, stats: { competence: 30, ethics: -20, leadership: 20, innovation: 30 } }
        ]
    },
    {
        id: 'ceo_047',
        text: {
            en: '🎓 The Executive Education Scandal: Your Harvard MBA was revoked after the university discovered you plagiarized your thesis 20 years ago. Media is demanding comment. The scandal could tank the stock.',
            th: '🎓 เรื่องอื้อฉาวการศึกษาผู้บริหาร: ปริญญา MBA จากฮาร์วาร์ดถูกเพิกถอนหลังจากมหาวิทยาลัยค้นพบว่าคุณลอกวิทยานิพนธ์เมื่อ 20 ปีก่อน',
            zh: '🎓 高管教育丑闻：你的哈佛MBA学位在大学发现你20年前抄袭论文后被撤销。媒体要求评论。丑闻可能导致股价暴跌。'
        },
        options: [
            { id: 'A', text: { en: '🙏 Full Apology: "I made a mistake 20 years ago. I apologize. I have proven my competence since. I will not resign."', th: '🙏 ขอโทษเต็มที่', zh: '🙏 全面道歉' }, consequence: { en: '⚖️ Humble Redemption. Stock dips 10% but you win sympathy. Board supports you. Crisis passes.', th: '⚖️ การไถ่บาปอย่างถ่อมตน', zh: '⚖️ 谦卑的救赎。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🎓 Blame the University: "This is a vendetta. Harvard is weaponizing old mistakes for political reasons."', th: '🎓 โทษมหาวิทยาลัย', zh: '🎓 责怪大学' }, consequence: { en: '📰 War with Harvard! More evidence emerges. Alumni and investors turn against you. Stock crashes 40%.', th: '📰 สงครามกับฮาร์วาร์ด!', zh: '📰 与哈佛战争！' }, stats: { competence: 15, ethics: -40, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '💼 Resign Gracefully: "My education scandal has become a distraction. I am stepping down for the good of the company."', th: '💼 ลาออกอย่างสง่า', zh: '💼 优雅辞职' }, consequence: { en: '🚪 Clean Exit. Stock rises 5% on your departure. You get a golden parachute but your legacy is tarnished.', th: '🚪 การออกอย่างสะอาด', zh: '🚪 干净退出。' }, stats: { competence: 25, ethics: 20, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '📚 Return to School: "I will re-earn my MBA legitimately while remaining CEO. Actions speak louder."', th: '📚 กลับไปโรงเรียน', zh: '📚 重返学校' }, consequence: { en: '🌟 Redemption Arc! The humility and commitment to integrity win massive respect. Stock recovers and surges.', th: '🌟 ช่วงการไถ่บาป!', zh: '🌟 救赎弧线！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 20 } }
        ]
    },
    {
        id: 'ceo_048',
        text: {
            en: '🌍 The Tax Haven Leak: Journalists expose that your company has $50B in offshore tax havens, avoiding $5B/year in taxes. It is legal but morally questionable. Governments are threatening new laws.',
            th: '🌍 การรั่วไหลเรื่องแหล่งหลบภาษี: นักข่าวเปิดเผยว่าบริษัทมี 50 พันล้านในแหล่งหลบภาษีต่างประเทศ หลีกเลี่ยงภาษี 5 พันล้าน/ปี',
            zh: '🌍 避税天堂泄密：记者曝光你的公司在离岸避税天堂拥有500亿美元，每年避税50亿美元。这是合法的但道德上有问题。政府威胁制定新法律。'
        },
        options: [
            { id: 'A', text: { en: '💰 Defend It: "We follow every law. Our duty is to shareholders, not governments."', th: '💰 ป้องกันมัน', zh: '💰 为其辩护' }, consequence: { en: '🔥 Public Fury! Boycotts devastate consumer brands. Governments fast-track anti-avoidance laws targeting you.', th: '🔥 ความโกรธของสาธารณะ!', zh: '🔥 公众愤怒！' }, stats: { competence: 25, ethics: -40, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '🏠 Repatriate Everything: "Bring all money home. Pay the taxes. Commit to never using tax havens again."', th: '🏠 ส่งกลับทั้งหมด', zh: '🏠 全部遣返' }, consequence: { en: '📉 Expensive Ethics. You pay $5B in back taxes. Stock drops 15% but brand loyalty surges among younger buyers.', th: '📉 จริยธรรมแพง', zh: '📉 昂贵的道德。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Gradual Compliance: "Announce a 5-year plan to close all tax havens. Phase out responsibly."', th: '🤝 ปฏิบัติตามค่อยเป็นค่อยไป', zh: '🤝 逐步合规' }, consequence: { en: '⚖️ Acceptable Compromise. Critics want faster action but investors appreciate gradualism. Stock stable.', th: '⚖️ ประนีประนอมที่ยอมรับได้', zh: '⚖️ 可接受的妥协。' }, stats: { competence: 35, ethics: 25, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🌍 Public Benefit Corp: "Restructure as a Public Benefit Corporation. Mandate fair tax payment into the charter."', th: '🌍 บริษัทผลประโยชน์สาธารณะ', zh: '🌍 公共利益公司' }, consequence: { en: '🏆 Industry Leader! You pioneer a new corporate model. ESG funds flood in. Long-term value creation soars.', th: '🏆 ผู้นำอุตสาหกรรม!', zh: '🏆 行业领导者！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'ceo_049',
        text: {
            en: '🎪 The Failed Product Launch: Your company spent $2B developing a revolutionary product. It launched to terrible reviews and 90% returns. The team wants another $500M to fix it. Or you can cut losses and move on.',
            th: '🎪 การเปิดตัวผลิตภัณฑ์ที่ล้มเหลว: บริษัทใช้เงิน 2 พันล้านพัฒนาผลิตภัณฑ์ปฏิวัติ เปิดตัวได้รีวิวแย่และถูกคืน 90%',
            zh: '🎪 失败的产品发布：你的公司花费20亿美元开发革命性产品。推出后收到糟糕的评论和90%的退货率。团队想要另外5亿美元来修复它。或者你可以止损继续前进。'
        },
        options: [
            { id: 'A', text: { en: '🔧 Double Down: "Invest $500M to fix every issue. Version 2.0 will vindicate us."', th: '🔧 เพิ่มเงินเดิมพัน', zh: '🔧 加倍投入' }, consequence: { en: '🚀 Redemption! Version 2.0 is a masterpiece. The comeback story is worth 10x the bad launch.', th: '🚀 การไถ่บาป!', zh: '🚀 救赎！' }, stats: { competence: 45, ethics: 30, leadership: 50, innovation: 50 } },
            { id: 'B', text: { en: '✂️ Cut Losses: "Write off the $2B. Cancel the product. Allocate resources to our successful lines."', th: '✂️ ตัดขาดทุน', zh: '✂️ 止损' }, consequence: { en: '📉 Prudent but Demoralizing. The write-off tanks stock 20%. Team morale collapses. Innovation culture dies.', th: '📉 รอบคอบแต่ทำให้ท้อ', zh: '📉 谨慎但令人沮丧。' }, stats: { competence: 30, ethics: 20, leadership: -10, innovation: -30 } },
            { id: 'C', text: { en: '🎯 Pivot the Product: "The tech is good but the market was wrong. Repurpose for enterprise, not consumer."', th: '🎯 เปลี่ยนทิศทางผลิตภัณฑ์', zh: '🎯 产品转型' }, consequence: { en: '💡 Creative Save! Enterprise customers love it. $2B investment becomes a $5B business in new market.', th: '💡 การช่วยอย่างสร้างสรรค์!', zh: '💡 创造性拯救！' }, stats: { competence: 50, ethics: 35, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '🤝 Fire Sale: "Sell the product and IP to a competitor for $500M. Let them deal with it."', th: '🤝 ขายไฟ', zh: '🤝 甩卖' }, consequence: { en: '😤 Competitor Wins! They fix it and make billions. You look like quitters who gave away the future.', th: '😤 คู่แข่งชนะ!', zh: '😤 竞争对手获胜！' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: -20 } }
        ]
    },
    {
        id: 'ceo_050',
        text: {
            en: '🏆 The Legacy Question: You have been CEO for 20 years. The board offers: stay 5 more years (safe), retire now with honors (graceful), become Executive Chairman (influence without operations), or stay until forced out (risky).',
            th: '🏆 คำถามมรดก: คุณเป็น CEO มา 20 ปี บอร์ดเสนอ: อยู่ต่ออีก 5 ปี (ปลอดภัย), เกษียณตอนนี้อย่างมีเกียรติ (สง่างาม), เป็นประธานบริหาร',
            zh: '🏆 遗产问题：你当了20年CEO。董事会提议：再待5年（安全），现在光荣退休（优雅），成为执行主席（有影响力但不运营），或留到被迫离开（冒险）。'
        },
        options: [
            { id: 'A', text: { en: '⏳ 5 More Years: "I still have work to do. The transformation is not complete."', th: '⏳ อีก 5 ปี', zh: '⏳ 再干5年' }, consequence: { en: '🎭 Overstaying. Your ideas feel stale. Stock stagnates. You become the obstacle to change.', th: '🎭 อยู่เกินไป', zh: '🎭 留任过久。' }, stats: { competence: 25, ethics: 20, leadership: 15, innovation: -20 } },
            { id: 'B', text: { en: '👋 Retire Gracefully: "20 years is enough. Leave at peak. Let fresh leadership take over."', th: '👋 เกษียณอย่างสง่า', zh: '👋 优雅退休' }, consequence: { en: '🌟 Perfect Exit! Stock jumps on your departure. Your successor thrives. You are remembered as a legend.', th: '🌟 การออกที่สมบูรณ์แบบ!', zh: '🌟 完美退出！' }, stats: { competence: 45, ethics: 40, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '🎓 Executive Chairman: "I mentor the new CEO but stay involved in strategy."', th: '🎓 ประธานบริหาร', zh: '🎓 执行主席' }, consequence: { en: '⚖️ Shadow Leadership. The new CEO resents your presence. Power struggles emerge. Messy transition.', th: '⚖️ การนำเงา', zh: '⚖️ 影子领导。' }, stats: { competence: 30, ethics: 25, leadership: 20, innovation: 10 } },
            { id: 'D', text: { en: '👑 Stay Until Forced: "I built this company. I am not leaving until they make me."', th: '👑 อยู่จนถูกบังคับ', zh: '👑 逼到被迫离开' }, consequence: { en: '💔 Ugly Divorce. 2 years later, activist investors force you out. You leave bitter and your legacy tarnished.', th: '💔 การหย่าที่น่าเกลียด', zh: '💔 丑陋的离婚。' }, stats: { competence: 15, ethics: -10, leadership: -30, innovation: -20 } }
        ]
    }
];


