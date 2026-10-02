export const consultantQuestions = [
    {
        id: 'consultant_001',
        text: {
            en: '📊 The Downsizing Dilemma: A client hires you to "optimize" their workforce. The data shows 20% redundancy in the middle management layer. However, these are loyal employees who built the company. The client CEO is ruthless and wants a 30% cut immediately to boost stock before a sale.',
            th: '📊 ภาวะกลืนไม่เข้าคายไม่ออกเรื่องการลดขนาด: ลูกค้าจ้างคุณมา "ปรับปรุง" กำลังคน ข้อมูลชี้ว่ามีส่วนเกิน 20% ในระดับผู้บริหารระดับกลาง แต่คนเหล่านี้เป็นพนักงานภักดีที่สร้างบริษัทมา ซีอีโอของลูกค้าโหดเหี้ยมและต้องการตัดงบ 30% ทันทีเพื่อปั่นหุ้นก่อนขาย',
            zh: '📊 裁员困境：一位客户聘请你"优化"他们的员工队伍。数据显示中层管理层有20%的冗余。然而，这些都是建立公司的忠诚员工。客户CEO冷酷无情，希望立即削减30%以在出售前提振股价。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✂️ The Hatchet Man: "Cut 30% as requested. Identify the lowest performers by metrics alone. It\'s brutal, but it\'s what the client is paying for based on pure data."',
                    th: '✂️ มือขวาน: "ตัด 30% ตามคำขอ ระบุผู้ที่มีผลงานแย่ที่สุดจากตัวชี้วัดเท่านั้น โหดร้าย แต่นั่นคือสิ่งที่ลูกค้าจ่ายเงินจ้างตามข้อมูลล้วนๆ"',
                    zh: '✂️ 刽子手："按要求削减30%。仅根据指标识别表现最差的人。这很残酷，但这就是客户根据纯数据支付的费用。"'
                },
                consequence: {
                    en: '📉 Reputation Hit. You deliver the savings, but the remaining staff are demoralized and productivity crashes. You get labeled a "Corporate Butcher."',
                    th: '📉 ชื่อเสียงเสียหาย: คุณลดต้นทุนได้ แต่พนักงานที่เหลือหมดกำลังใจและผลผลิตตกต่ำ คุณถูกตราหน้าว่าเป็น "เพชฌฆาตองค์กร"',
                    zh: '📉 声誉受损。你实现了节约，但留下的员工士气低落，生产力崩溃。你被打上"企业屠夫"的标签。'
                },
                stats: { competence: 40, ethics: -20, leadership: -10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Strategic Reskilling: "Propose a 10% cut of only non-essential roles, and retrain the rest for the new digital division. Show the CEO that talent retention drives higher valuation than short-term cost cutting."',
                    th: '🔄 การรื้อฟื้นทักษะเชิงกลยุทธ์: "เสนอให้ตัดแค่ 10% เฉพาะบทบาทที่ไม่จำเป็น และฝึกอบรมคนที่เหลือสำหรับแผนกดิจิทัลใหม่ แสดงให้ซีอีโอเห็นว่าการรักษาคนเก่งสร้างมูลค่าสูงกว่าการตัดต้นทุนระยะสั้น"',
                    zh: '🔄 战略性再培训："提议仅削减10%的非必要职位，并重新培训其他人以此用于新的数字部门。向CEO展示人才保留比短期削减成本能带来更高的估值。"'
                },
                consequence: {
                    en: '🌟 Value Creation! The board loves the long-term vision. The sale price actually increases because the buyer sees a "ready-for-future" workforce.',
                    th: '🌟 การสร้างมูลค่า! บอร์ดชอบวิสัยทัศน์ระยะยาว ราคาขายจริงเพิ่มขึ้นเพราะผู้ซื้อเห็นแรงงานที่ "พร้อมสำหรับอนาคต"',
                    zh: '🌟 价值创造！董事会喜欢长远的眼光。售价实际上增加了，因为买家看到了"面向未来"的员工队伍。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🚪 Walk Away: "Refuse the project. Tell them you fix companies, you don\'t gut them for quick exits. Refer them to a restructuring firm."',
                    th: '🚪 เดินหนี: "ปฏิเสธโครงการ บอกพวกเขาว่าคุณซ่อมบริษัท ไม่ใช่คว้านไส้เพื่อทางออกด่วน แนะนำพวกเขาไปหาบริษัทปรับโครงสร้าง"',
                    zh: '🚪 一走了之："拒绝该项目。告诉他们你是在修复公司，而不是为了快速退出而掏空它们。把他们转给重组公司。"'
                },
                consequence: {
                    en: '🛡️ Integrity Preserved. You lose a huge fee, but your firm\'s reputation for quality remains intact. Former employees of that company later hire you elsewhere.',
                    th: '🛡️ รักษาความซื่อสัตย์: คุณเสียค่าธรรมเนียมก้อนโต แต่ชื่อเสียงด้านคุณภาพของบริษัทคุณยังคงเดิม อดีตพนักงานของบริษัทนั้นจ้างคุณที่อื่นในเวลาต่อมา',
                    zh: '🛡️ 保持正直。你失去了一笔巨额费用，但你公司对质量的声誉完好无损。在那家公司的前员工后来在其他地方雇佣了你。'
                },
                stats: { competence: 20, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📊 The Early Retirement Scheme: "Offer generous voluntary redundancy packages to older, higher-paid staff. It achieves the cost cut without forced layoffs, keeping morale stable."',
                    th: '📊 โครงการเกษียณก่อนกำหนด: "เสนอแพ็คเกจสมัครใจลาออกอย่างงามให้พนักงานอาวุโสเงินเดือนสูง ได้ลดต้นทุนโดยไม่ต้องบังคับไล่ออก รักษาขวัญกำลังใจให้มั่นคง"',
                    zh: '📊 提前退休计划："向薪酬较高的老员工提供慷慨的自愿裁员方案。这既实现了成本削减，又没有强制裁员，保持了士气稳定。"'
                },
                consequence: {
                    en: '🧠 Smart Compromise. You hit the financial targets. However, you lose significant institutional knowledge, causing operational hiccups later.',
                    th: '🧠 การประนีประนอมที่ชาญฉลาด: คุณทำตามเป้าทางการเงินได้ แต่คุณเสียความรู้องค์กรไปมาก ทำให้เกิดปัญหาการดำเนินงานในภายหลัง',
                    zh: '🧠 明智的妥协。你达到了财务目标。然而，你失去了重要的机构知识，导致后来出现运营问题。'
                },
                stats: { competence: 35, ethics: 20, leadership: 25, innovation: 10 }
            }
        ]
    },
    {
        id: 'consultant_002',
        text: {
            en: '🏭 The "Green" Factory: A client wants to build a factory in a region with lax environmental laws to save costs. They ask you to produce a report justifying this as "economic development" for the region, minimizing the pollution impact.',
            th: '🏭 โรงงาน "สีเขียว": ลูกค้าต้องการสร้างโรงงานในภูมิภาคที่มีกฎหมายสิ่งแวดล้อมหละหลวมเพื่อประหยัดต้นทุน พวกเขาขอให้คุณทำรายงานแก้ต่างว่านี่คือ "การพัฒนาเศรษฐกิจ" สำหรับภูมิภาค โดยลดผลกระทบมลพิษให้น้อยที่สุด',
            zh: '🏭 "绿色"工厂：一位客户想在一个环境法律宽松的地区建厂以节省成本。他们要求你出具一份报告，以"经济发展"为由证明此举的合理性，并以此最大限度地减少污染影响。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📝 The Whitewash: "Write the report focusing purely on job creation and GDP growth. Use vague terms for environmental impact like \'manageable externalities\'."',
                    th: '📝 การฟอกขาว: "เขียนรายงานโดยเน้นแค่การสร้างงานและการเติบโตของ GDP ใช้คำกำกวมสำหรับผลกระทบสิ่งแวดล้อมอย่าง \'ผลกระทบภายนอกที่จัดการได้\'"',
                    zh: '📝 粉饰太平："撰写报告，纯粹关注创造就业机会和 GDP 增长。对环境影响使用模棱两可的术语，如\'可控的外部性\'。"'
                },
                consequence: {
                    en: '💰 Easy Money, Heavy Conscience. The factory is built, pollution destroys a local river. An NGO exposes your misleading report years later.',
                    th: '💰 เงินง่าย แต่หนักใจ: โรงงานถูกสร้าง มลพิษทำลายแม่น้ำท้องถิ่น NGO แฉรายงานที่บิดเบือนของคุณหลายปีต่อมา',
                    zh: '💰 轻松赚钱，良心沉重。工厂建成了，污染摧毁了一条当地河流。非政府组织多年后以此揭露了你的误导性报告。'
                },
                stats: { competence: 30, ethics: -40, leadership: -10, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 The Pivot to Sustainability: "Show them the long-term risk. Arguing that \'lax laws\' change quickly. Propose a sustainable factory design that costs 10% more but future-proofs them against regulations."',
                    th: '🚫 การเปลี่ยนสูความยั่งยืน: "แสดงให้เห็นความเสี่ยงระยะยาว อ้างว่า \'กฎหมายที่หละหลวม\' เปลี่ยนแปลงเร็ว เสนอแบบโรงงานยั่งยืนที่แพงกว่า 10% แต่ปกป้องพวกเขาจากกฎระเบียบในอนาคต"',
                    zh: '🚫 转向可持续性："向他们展示长期风险。争辩说\'宽松的法律\'变化很快。提出一种成本高出 10% 但能以此经受未来法规考验的可持续工厂设计。"'
                },
                consequence: {
                    en: '🌍 Industry Leader. The client grumbles but agrees. Five years later, when laws tighten, they are the only compliant factory, saving millions in retrofits.',
                    th: '🌍 ผู้นำอุตสาหกรรม: ลูกค้าบ่นแต่ยอมตกลง 5 ปีต่อมาเมื่อกฎหมายเข้มข้นขึ้น พวกเขาเป็นโรงงานเดียวที่ผ่านเกณฑ์ ประหยัดค่าปรับปรุงไปหลายล้าน',
                    zh: '🌍 行业领导者。客户发牢骚但同意了。五年后，当法律收紧时，他们是唯一合规的工厂，节省了数百万的改造费用。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ The Third-Option: "Suggest a different location with better infrastructure, even if labor is pricier. Frame it as \'operational efficiency\' rather than an environmental issue to avoid preaching."',
                    th: '🕵️ ทางเลือกที่สาม: "แนะนำสถานที่อื่นที่มีโครงสร้างพื้นฐานดีกว่า แม้ค่าแรงจะแพงกว่า อ้างว่าเป็น \'ประสิทธิภาพการดำเนินงาน\' แทนที่จะเป็นเรื่องสิ่งแวดล้อมเพื่อเลี่ยงการสั่งสอน"',
                    zh: '🕵️ 第三种选择："建议换一个基础设施更好的地点，即使劳动力更贵。把它以此包装成\'运营效率\'而不是环境问题，以避免说教。"'
                },
                consequence: {
                    en: '🧠 Clever Consulting. The client takes the bait for efficiency. You avoided the pollution issue indirectly. A win-win without the moral grandeur.',
                    th: '🧠 การให้คำปรึกษาที่ฉลาด: ลูกค้ากินเบ็ดเรื่องประสิทธิภาพ คุณเลี่ยงปัญหามลพิษได้ทางอ้อม วิน-วินโดยไม่ต้องยกตนข่มท่าน',
                    zh: '🧠 聪明的咨询。客户为了效率上钩了。你间接地通过此避免了污染问题。没有道德浮夸的双赢。'
                },
                stats: { competence: 45, ethics: 30, leadership: 20, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Data Overload: "Delay by requesting an extensive 6-month environmental impact study. Hope the opportunity passes or the client changes their mind due to the wait."',
                    th: '📉 ข้อมูลท่วมท้น: "ถ่วงเวลาโดยขอการศึกษาผลกระทบสิ่งแวดล้อมอย่างละเอียด 6 เดือน หวังว่าโอกาสจะผ่านไปหรือลูกค้าเปลี่ยนใจเพราะรอนาน"',
                    zh: '📉 数据过载："通过要求进行为期 6 个月的广泛环境影响研究来拖延。希望机会过去，或者客户因等待而改变主意。"'
                },
                consequence: {
                    en: '⏳ Paralysis by Analysis. The client fires you for being too slow and hires a competitor who builds the dirty factory anyway.',
                    th: '⏳ เป็นอัมพาตเพราะวิเคราะห์: ลูกค้าไล่คุณออกเพราะช้าเกินไป แล้วจ้างคู่แข่งที่ไปสร้างโรงงานสกปรกนั้นอยู่ดี',
                    zh: '⏳ 分析瘫痪。客户因你太慢而解雇了你，并以此聘请了竞争对手，反正他们还是建了那座肮脏的工厂。'
                },
                stats: { competence: 10, ethics: 20, leadership: -20, innovation: -10 }
            }
        ]
    },
    {
        id: 'consultant_003',
        text: {
            en: '📱 The Legacy Bank: A 100-year-old bank hires you to digitize their services. Their IT department is hostile, refusing to share API access or documentation, fearing their jobs will become obsolete. The project is stalled.',
            th: '📱 ธนาคารร้อยปี: ธนาคารอายุ 100 ปีจ้างคุณมาทำบริการดิจิทัล แผนก IT ของเขาต่อต้าน ไม่ยอมให้การเข้าถึง API หรือเอกสาร เพราะกลัวตกงาน โครงการหยุดชะงัก',
            zh: '📱 传统银行：一家拥有 100 年历史的银行聘请你将其服务数字化。他们的 IT 部门充满敌意，拒绝共享 API 访问权限或文档，担心他们的工作会被淘汰。项目停滞不前。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔨 The CEO Override: "Go straight to the Bank CEO. Demand he force the IT head to cooperate or be fired. It\'s a power move that burns bridges."',
                    th: '🔨 การใช้อำนาจซีอีโอ: "ไปหาซีอีโอธนาคารโดยตรง เรียกร้องให้เขาสั่งหัวหน้า IT ให้ร่วมมือหรือไล่ออก เป็นการใช้อำนาจที่เผาสะพาน"',
                    zh: '🔨 CEO 否决权："直接去找银行 CEO。要求他强迫 IT 主管合作，不然就解雇。这是一个破坏关系的强硬举措。"'
                },
                consequence: {
                    en: '⚔️ War Room. You get access, but the IT team actively sabotages you with bad data. The project launches with bugs.',
                    th: '⚔️ ห้องสงคราม: คุณได้สิทธิ์เข้าถึง แต่ทีม IT แกล้งวางยาคุณด้วยข้อมูลผิดๆ โครงการเปิดตัวพร้อมบั๊ก',
                    zh: '⚔️以此 作战室。你获得了访问权限，但 IT 团队主动用坏数据破坏你。项目发布时带有漏洞。'
                },
                stats: { competence: 30, ethics: 10, leadership: -10, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 The "Co-Execution" Model: "Embed your consultants inside the IT team. Make them feel like THEY are building the new system. Give them credit for the wins."',
                    th: '🤝 โมเดล "ร่วมกันทำ": "ส่งที่ปรึกษาของคุณไปฝังตัวในทีม IT ทำให้พวกเขารู้สึกว่า \'พวกเขา\' กำลังสร้างระบบใหม่ ให้เครดิตพวกเขาเมื่อสำเร็จ"',
                    zh: '🤝 "共同执行"模式："把你的顾问嵌入 IT 团队。让他们觉得是‘他们’在构建新系统。把胜利归功于他们。"'
                },
                consequence: {
                    en: '🚀 Cultural Transformation. It takes longer to start, but execution is flawless. The IT team becomes your biggest advocates for future projects.',
                    th: '🚀 การปฏิรูปวัฒนธรรม: เริ่มต้นช้ากว่า แต่การดำเนินงานไร้ที่ติ ทีม IT กลายเป็นผู้สนับสนุนที่ใหญ่ที่สุดของคุณสำหรับโครงการในอนาคต',
                    zh: '🚀 文化转型。开始需要更长的时间，但执行完美无缺。IT 团队成为你未来项目的最大拥护者。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🌥️ The Bypass: "Build a separate cloud-native bank purely on new tech stacks. Ignore the legacy core completely for now. Migrate customers slowly later."',
                    th: '🌥️ ทางลัด: "สร้างธนาคารบนคลาวด์แยกต่างหากด้วยเทคโนโลยีใหม่ล้วนๆ เมินระบบเก่าไปก่อนเลยตอนนี้ ค่อยย้ายลูกค้ามาทีหลัง"',
                    zh: '🌥️ 旁路："完全基于新技术栈以此构建一个独立的云原生银行。暂时完全忽略遗留核心。稍后慢慢迁移客户。"'
                },
                consequence: {
                    en: '⚡ Fast Innovation. You launch a sleek app in 3 months. However, syncing it later with the old ledger becomes a technical nightmare costing millions.',
                    th: '⚡ นวัตกรรมรวดเร็ว: คุณเปิดตัวแอปสุดล้ำใน 3 เดือน แต่การซิงค์กับบัญชีแยกประเภทเก่าทีหลังกลายเป็นฝันร้ายทางเทคนิคที่ผลาญเงินล้าน',
                    zh: '⚡ 快速创新。你在 3 个月内推出了一款时尚的应用程序。然而，稍后将其与旧账本同步变成了一场耗资数百万的技术噩梦。'
                },
                stats: { competence: 45, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Scope Reduction: "Tell the client the organization isn\'t ready for full digital. Scale back to just a frontend reskin provided by a vendor."',
                    th: '📉 ลดขอบเขต: "บอกลูกค้าว่าองค์กรยังไม่พร้อมสำหรับดิจิทัลเต็มรูปแบบ ลดสเกลเหลือแค่ปรับหน้าตา Frontend โดยใช้ผู้ให้บริการภายนอก"',
                    zh: '📉 缩小范围："告诉客户该组织还没有准备好全面数字化。缩减到仅由供应商提供的前端换肤。"'
                },
                consequence: {
                    en: '🐢 Safe Failure. You get paid for the advice, but the bank fails to modernize and loses customers to fintech startups. Your impact was zero.',
                    th: '🐢 ความล้มเหลวที่ปลอดภัย: คุณได้รับเงินค่าคำแนะนำ แต่ธนาคารล้มเหลวในการปรับปรุงให้ทันสมัยและเสียลูกค้าให้สตาร์ทอัพฟินเทค ผลงานคุณเป็นศูนย์',
                    zh: '🐢 安全的失败。你因建议而获得报酬，但银行未能实现现代化，并将客户流失给金融科技初创公司。你的影响为零。'
                },
                stats: { competence: 20, ethics: 10, leadership: -20, innovation: -30 }
            }
        ]
    },
    {
        id: 'consultant_004',
        text: {
            en: '💼 The Merger Culture Clash: Two companies you are merging have wildly different cultures - one is a scrappy startup, the other a buttoned-up corporate giant. The startup CEO refuses to adopt corporate policies and the corporate CEO wants to impose them immediately.',
            th: '💼 วัฒนธรรมปะทะในการควบรวม: สองบริษัทที่คุณกำลังควบรวมมีวั​ฒนธรรมที่แตกต่างกันอย่างสิ้นเชิง - หนึ่งเป็นสตาร์ทอัพที่ดิ้นรน อีกหนึ่งเป็นองค์กรยักษ์ใหญ่',
            zh: '💼 并购文化冲突：你正在合并的两家公司拥有截然不同的文化——一家是奋斗的初创公司，另一家是保守的企业巨头。初创公司CEO拒绝采用企业政策，而企业CEO想立即强加这些政策。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Forced Integration: "Mandate the corporate way. Standardization is key to synergy."', th: '⚖️ บังคับผสาน', zh: '⚖️ 强制整合' }, consequence: { en: '💔 Exodus! The startup founders and key talent all quit. You destroyed the innovation you paid for.', th: '💔 อพยพ!', zh: '💔 大规模离职！' }, stats: { competence: 25, ethics: -10, leadership: -20, innovation: -40 } },
            { id: 'B', text: { en: '🌉 Separate Brands: "Keep them operating independently. Synergy is overrated anyway."', th: '🌉 แบรนด์แยก', zh: '🌉 独立品牌' }, consequence: { en: '🤷 Why Merge? Shareholders ask why you paid a premium for zero integration. The merger creates no value.', th: '🤷 ทำไมต้องควบรวม?', zh: '🤷 为什么合并？' }, stats: { competence: 20, ethics: 20, leadership: -10, innovation: 20 } },
            { id: 'C', text: { en: '🎯 Culture Labs: "Create 3 pilot teams blending both cultures. Let them experiment for 6 months, then scale what works."', th: '🎯 ห้องทดลองวัฒนธรรม', zh: '🎯 文化实验室' }, consequence: { en: '🌟 Best of Both! The hybrid model becomes your competitive advantage. Case study at Harvard Business School.', th: '🌟 ทั้งสองที่ดีที่สุด!', zh: '🌟 两者兼优！' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '📋 Policy Buffet: "Let teams choose which policies to adopt from either company. A la carte integration."', th: '📋 บุฟเฟต์นโยบาย', zh: '📋 政策自助餐' }, consequence: { en: '🎭 Chaos! No one follows the same rules. Compliance nightmare. Auditors threaten to walk.', th: '🎭 ความวุ่นวาย!', zh: '🎭 混乱！' }, stats: { competence: 15, ethics: 10, leadership: -15, innovation: 25 } }
        ]
    },
    {
        id: 'consultant_005',
        text: {
            en: '🎯 The Pricing Strategy: Your retail client is losing market share. Data shows customers are price-sensitive. You can recommend: match competitor prices (low margin), premium positioning (risky), dynamic pricing (controversial), or loyalty programs (expensive).',
            th: '🎯 กลยุทธ์การกำหนดราคา: ลูกค้าค้าปลีกของคุณกำลังสูญเสียส่วนแบ่งตลาด ข้อมูลแสดงว่าลูกค้าไวต่อราคา',
            zh: '🎯 定价策略：你的零售客户正在失去市场份额。数据显示客户对价格敏感。你可以推荐：匹配竞争对手价格（低利润），高档定位（风险），动态定价（争议），或忠诚度计划（昂贵）。'
        },
        options: [
            { id: 'A', text: { en: '💰 Race to Bottom: "Match all competitor prices. Volume over margin."', th: '💰 แข่งราคาลง', zh: '💰 价格战' }, consequence: { en: '📉 Death Spiral. Margins collapse. You cannot fund operations. Bankruptcy in 18 months.', th: '📉 เกลียวความตาย', zh: '📉 死亡螺旋' }, stats: { competence: 20, ethics: 20, leadership: -10, innovation: -20 } },
            { id: 'B', text: { en: '👑 Premium Pivot: "Reposition as luxury. Raise prices 40%. Target affluent customers only."', th: '👑 เปลี่ยนเป็นพรีเมียม', zh: '👑 高端转型' }, consequence: { en: '🎯 Niche Success! You lose 60% of customers but the remaining 40% spend 3x more. Profitable.', th: '🎯 ความสำเร็จในกลุ่มเฉพาะ!', zh: '🎯 利基成功！' }, stats: { competence: 45, ethics: 25, leadership: 35, innovation: 40 } },
            { id: 'C', text: { en: '🤖 Algorithmic Pricing: "Use AI to change prices hourly based on demand. Maximize revenue."', th: '🤖 ราคาตามอัลกอริทึม', zh: '🤖 算法定价' }, consequence: { en: '⚖️ Backlash! Customers notice and feel manipulated. Viral complaints but revenue does increase 25%.', th: '⚖️ ปฏิกิริยาโต้กลับ!', zh: '⚖️ 反弹！' }, stats: { competence: 40, ethics: -20, leadership: 10, innovation: 45 } },
            { id: 'D', text: { en: '💳 Loyalty Ecosystem: "Invest $50M in rewards program. Lock customers in long-term."', th: '💳 ระบบความภักดี', zh: '💳 忠诚度生态系统' }, consequence: { en: '🌟 Customer Lock-In! The program pays for itself in 3 years. Lifetime value doubled.', th: '🌟 ล็อกลูกค้า!', zh: '🌟 客户锁定！' }, stats: { competence: 50, ethics: 35, leadership: 45, innovation: 40 } }
        ]
    },
    {
        id: 'consultant_006',
        text: {
            en: '🏥 The Healthcare Efficiency: A hospital chain hired you to reduce wait times. Analysis shows emergency room doctors are severely overworked. You can hire more doctors (expensive), implement triage AI (risky), or reduce service scope (controversial).',
            th: '🏥 ประสิทธิภาพการดูแลสุขภาพ: เครือโรงพยาบาลจ้างคุณเพื่อลดเวลารอ การวิเคราะห์แสดงว่าแพทย์ห้องฉุกเฉินทำงานหนักเกินไป',
            zh: '🏥 医疗效率：一家医院连锁店聘请你减少等待时间。分析显示急诊室医生严重超负荷工作。你可以雇用更多医生（昂贵），实施分诊人工智能（风险），或减少服务范围（争议）。'
        },
        options: [
            { id: 'A', text: { en: '👨‍⚕️ Hire More Doctors: "Double the ER staff. Quality care costs money."', th: '👨‍⚕️ จ้างหมอเพิ่ม', zh: '👨‍⚕️ 雇用更多医生' }, consequence: { en: '💰 Unsustainable. Costs balloon. Insurance companies refuse to cover the higher fees. Hospital goes into debt.', th: '💰 ไม่ยั่งยืน', zh: '💰 不可持续' }, stats: { competence: 25, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🤖 AI Triage System: "Use AI to prioritize cases. Doctors focus on critical patients only."', th: '🤖 ระบบคัดกรอง AI', zh: '🤖 AI分诊系统' }, consequence: { en: '⚕️ Breakthrough! Wait times drop 60%. But one AI error leads to a preventable death. Lawsuit.', th: '⚕️ ความก้าวหน้า!', zh: '⚕️ 突破！' }, stats: { competence: 40, ethics: -10, leadership: 30, innovation: 50 } },
            { id: 'C', text: { en: '📋 Redirect Non-Emergencies: "Send minor cases to urgent care clinics. ER for real emergencies only."', th: '📋 เปลี่ยนเส้นทางไม่ฉุกเฉิน', zh: '📋 转移非紧急情况' }, consequence: { en: '✅ Balanced Solution. Wait times improve. Some patients complain but overall outcomes are better.', th: '✅ โซลูชันที่สมดุล', zh: '✅ 均衡解决方案' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '📊 Data-Driven Scheduling: "Predict peak hours and staff accordingly. Optimize shift patterns."', th: '📊 ตารางตามข้อมูล', zh: '📊 数据驱动调度' }, consequence: { en: '🎯 Smart Operations! Doctors work smarter, not harder. Wait times drop 40% without additional cost.', th: '🎯 การดำเนินงานอัจฉริยะ!', zh: '🎯 智能运营！' }, stats: { competence: 50, ethics: 35, leadership: 45, innovation: 45 } }
        ]
    },
    {
        id: 'consultant_007',
        text: {
            en: '🎮 The Gaming Addiction: A mobile game company wants to maximize revenue. Your data shows "whale" players spending $10K+/month may have gambling addiction. Ethical design would reduce revenue 40%.',
            th: '🎮 การเสพติดเกม: บริษัทเกมมือถือต้องการเพิ่มรายได้สูงสุด ข้อมูลของคุณแสดงว่าผู้เล่น "ปลาวาฬ" ใช้จ่าย 10K+/เดือนอาจมีการเสพติดการพนัน',
            zh: '🎮 游戏成瘾：一家手机游戏公司想要最大化收入。你的数据显示"鲸鱼"玩家每月花费1万美元以上可能有赌博成瘾。道德设计将减少40%的收入。'
        },
        options: [
            { id: 'A', text: { en: '💰 Maximize Whales: "Optimize for whale spending. Add more loot boxes. Revenue is the goal."', th: '💰 เพิ่มปลาวาฬสูงสุด', zh: '💰 最大化鲸鱼用户' }, consequence: { en: '🚨 Regulatory Crackdown! Governments classify your game as gambling. Forced to shut down in 20 countries.', th: '🚨 การปราบปราม!', zh: '🚨 监管打击！' }, stats: { competence: 30, ethics: -50, leadership: -20, innovation: 20 } },
            { id: 'B', text: { en: '🛡️ Spending Caps: "Implement $500/month spending limit. Refuse to exploit addiction."', th: '🛡️ จำกัดการใช้จ่าย', zh: '🛡️ 消费上限' }, consequence: { en: '📉 Revenue Drops but Brand Soars. Parents love you. Apple features you as ethical game. Long-term win.', th: '📉 รายได้ลดแต่แบรนด์ขึ้น', zh: '📉 收入下降但品牌飙升' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 30 } },
            { id: 'C', text: { en: '🎯 Freemium Redesign: "Make the game fun without paying. Monetize cosmetics only, not power."', th: '🎯 ออกแบบฟรีเมียมใหม่', zh: '🎯 免费增值重新设计' }, consequence: { en: '🌟 Industry Disruption! Player count 10x. Lower ARPU but higher total revenue. You win awards.', th: '🌟 การทำลายอุตสาหกรรม!', zh: '🌟 行业颠覆！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '📊 Just Deliverthe Data: "Present all options neutrally. Let the client decide. You are just a consultant."', th: '📊 แค่ส่งข้อมูล', zh: '📊 只提供数据' }, consequence: { en: '🎭 Moral Cowardice. Client chooses exploitation. You enabled harm while hiding behind neutrality.', th: '🎭 ความขี้ขลาดทางศีลธรรม', zh: '🎭 道德懦弱' }, stats: { competence: 25, ethics: -30, leadership: -20, innovation: 10 } }
        ]
    },
    {
        id: 'consultant_008',
        text: {
            en: '📺 The Cable TV Disruption: A cable company losing subscribers to streaming asks for your turnaround plan. Traditional cable is dying but they have $20B in legacy infrastructure.',
            th: '📺 การทำลายทีวีเคเบิล: บริษัทเคเบิลที่สูญเสียสมาชิกให้สตรีมมิ่งขอแผนพลิกสถานการณ์ เคเบิลแบบดั้งเดิมกำลังตาย แต่พวกเขามีโครงสร้างพื้นฐานเก่า 20 พันล้าน',
            zh: '📺 有线电视颠覆：一家有线电视公司正在向流媒体流失订户，要求你的扭转计划。传统有线电视正在消亡，但他们拥有200亿美元的传统基础设施。'
        },
        options: [
            { id: 'A', text: { en: '📺 Double Down Cable: "Compete on price. Cheap bundles with sports. Cable is not dead."', th: '📺 เพิ่มเงินเดิมพันเคเบิล', zh: '📺 加倍押注有线电视' }, consequence: { en: '⏳ Slow Death. You milk cable for 5 years but everyone knows it is over. No future.', th: '⏳ ความตายช้าๆ', zh: '⏳ 缓慢死亡' }, stats: { competence: 20, ethics: 20, leadership: -10, innovation: -40 } },
            { id: 'B', text: { en: '🌐 Become an ISP: "Abandon TV. Focus on gigabit internet. Everyone needs bandwidth."', th: '🌐 กลายเป็น ISP', zh: '🌐 成为ISP' }, consequence: { en: '🚀 Perfect Pivot! Internet-only model thrives. You use cable infrastructure for fiber. Stock soars.', th: '🚀 การเปลี่ยนทิศทางที่สมบูรณ์แบบ!', zh: '🚀 完美转型！' }, stats: { competence: 50, ethics: 35, leadership: 45, innovation: 50 } },
            { id: 'C', text: { en: '🎬 Launch Own Streaming: "Invest $3B in original content. Compete with Netflix directly."', th: '🎬 เปิดตัวสตรีมมิ่งเอง', zh: '🎬 推出自己的流媒体' }, consequence: { en: '💸 Money Pit. You burn cash but are still 6th place. Content is expensive and you have no expertise.', th: '💸 หลุมเงิน', zh: '💸 烧钱无底洞' }, stats: { competence: 25, ethics: 25, leadership: 20, innovation: 35 } },
            { id: 'D', text: { en: '🤝 Partner with Streamers: "Bundle Netflix, Disney+ with your internet. Be the aggregator."', th: '🤝 ร่วมมือกับสตรีมเมอร์', zh: '🤝 与流媒体合作' }, consequence: { en: '🎯 Smart Distribution! You become the one-stop shop. Lower margin but sustainable business.', th: '🎯 การกระจายอัจฉริยะ!', zh: '🎯 智能分发！' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 40 } }
        ]
    },
    {
        id: 'consultant_009',
        text: {
            en: '🏪 The Retail Apocalypse: A department store chain is bankrupt. They ask if they should liquidate (quick), restructure (slow), go online-only (risky), or sell to private equity (uncertain).',
            th: '🏪 หายนะค้าปลีก: เครือห้างสรรพสินค้าล้มละลาย พวกเขาถามว่าควรชำระบัญชี (เร็ว), ปรับโครงสร้าง (ช้า), ออนไลน์เพียงอย่างเดียว (เสี่ยง), หรือขายให้ไพรเวทอีควิตี้ (ไม่แน่นอน)',
            zh: '🏪 零售末日：一家百货连锁店破产。他们询问是应该清算（快速），重组（缓慢），仅在线（风险），还是出售给私募股权（不确定）。'
        },
        options: [
            { id: 'A', text: { en: '💔 Liquidate Now: "Close everything. Maximize creditor recovery. Move on."', th: '💔 ชำระบัญชีเดี๋ยวนี้', zh: '💔 立即清算' }, consequence: { en: '🚪 Fast Exit. 50,000 jobs lost. Communities devastated. You are efficient but heartless.', th: '🚪 ออกเร็ว', zh: '🚪 快速退出' }, stats: { competence: 30, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '⚖️ Chapter 11 Restructuring: "Use bankruptcy to shed debt and renegotiate leases. Emerge stronger."', th: '⚖️ ปรับโครงสร้างบท 11', zh: '⚖️ 第11章重组' }, consequence: { en: '🌱 Slow Rebirth. It takes 3 years but you save 30,000 jobs. Smaller but sustainable.', th: '🌱 การเกิดใหม่ช้าๆ', zh: '🌱 缓慢重生' }, stats: { competence: 45, ethics: 40, leadership: 45, innovation: 20 } },
            { id: 'C', text: { en: '🌐 Digital Transformation: "Close 90% of stores. Become an e-commerce company overnight."', th: '🌐 การเปลี่ยนแปลงดิจิทัล', zh: '🌐 数字化转型' }, consequence: { en: '🎲 High-Risk Bet! You cannot compete with Amazon. Brand fades into irrelevance.', th: '🎲 การเดิมพันเสี่ยงสูง!', zh: '🎲 高风险赌注！' }, stats: { competence: 25, ethics: -10, leadership: 20, innovation: 40 } },
            { id: 'D', text: { en: '💰 Private Equity Sale: "Sell to PE firm. They might strip assets or turn it around. Not your problem."', th: '💰 ขายให้ไพรเวทอีควิตี้', zh: '💰 私募股权出售' }, consequence: { en: '🎭 Moral Ambiguity. PE strips real estate and flips it. Jobs lost anyway. You got paid though.', th: '🎭 ความคลุมเครือทางศีลธรรม', zh: '🎭 道德模糊' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'consultant_010',
        text: {
            en: '🏗️ The Construction Scandal: A client is building a major infrastructure project. You discover they are using substandard materials to save money. The structure is safe "technically" but has 30% shorter lifespan.',
            th: '🏗️ เรื่องอื้อฉาวการก่อสร้าง: ลูกค้ากำลังสร้างโครงการโครงสร้างพื้นฐานใหญ่ คุณค้นพบว่าพวกเขาใช้วัสดุไม่มาตรฐานเพื่อประหยัดเงิน โครงสร้างปลอดภัย "ทางเทคนิค" แต่มีอายุสั้นกว่า 30%',
            zh: '🏗️ 建筑丑闻：一个客户正在建设一个重大基础设施项目。你发现他们为了省钱而使用不合格的材料。结构在"技术上"是安全的，但寿命缩短30%。'
        },
        options: [
            { id: 'A', text: { en: '🚨 Report to Authorities: "Blow the whistle. Public safety comes first."', th: '🚨 รายงานต่อหน่วยงาน', zh: '🚨 向当局报告' }, consequence: { en: '⚖️ Hero or Snitch? Project halted. Client sues you for breach of contract. You win morally, lose financially.', th: '⚖️ วีรบุรุษหรือนักเจาะข่าว?', zh: '⚖️ 英雄还是告密者？' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '📊 Present the Data: "Show client that proper materials cost only 15% more. Make business case for quality."', th: '📊 นำเสนอข้อมูล', zh: '📊 提供数据' }, consequence: { en: '💡 Data Wins! Client agrees to upgrade. Project delayed 3 months but built properly.', th: '💡 ข้อมูลชนะ!', zh: '💡 数据获胜！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '🤫 Stay Silent: "Not your problem. You are just a consultant. Collect your fee and leave."', th: '🤫 อยู่เงียบๆ', zh: '🤫 保持沉默' }, consequence: { en: '💔 Bridge Collapses! 10 years later the structure fails. Investigation traces to your knowledge. Career over.', th: '💔 สะพานพัง!', zh: '💔 桥梁坍塌！' }, stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'D', text: { en: '⚖️ Documented Warning: "Send formal memo documenting the risk. CYA while letting client decide."', th: '⚖️ คำเตือนที่จัดทำเป็นเอกสาร', zh: '⚖️ 记录警告' }, consequence: { en: '📝 Legal Shield. You are protected but the bad decision happens anyway. Cowardly but smart.', th: '📝 โล่กฎหมาย', zh: '📝 法律盾牌' }, stats: { competence: 25, ethics: -15, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'consultant_011',
        text: {
            en: '🔬 The Pharma Patent: A pharmaceutical company hired you to extend their blockbuster drug patent through "evergreening" tactics. Legal but ethically questionable, blocks generic competitors for 10 years.',
            th: '🔬 สิทธิบัตรยา: บริษัทยาจ้างคุณเพื่อขยายสิทธิบัตรยาขายดีผ่านกลยุทธ์ "ใบเขียวตลอดกาล" ถูกกฎหมายแต่น่าสงสัยทางจริยธรรม ขัดขวางคู่แข่งยาทั่วไป 10 ปี',
            zh: '🔬 制药专利：一家制药公司聘请你通过"常青"策略延长其重磅药物专利。合法但道德上有问题，阻止仿制药竞争对手10年。'
        },
        options: [
            { id: 'A', text: { en: '💊 Evergreen Strategy: "Use every legal loophole. Minor formula tweaks to reset patents."', th: '💊 กลยุทธ์ใบเขียวตลอดกาล', zh: '💊 常青策略' }, consequence: { en: '💰 Profits Soar, Patients Suffer. Drug stays expensive. Congressional hearing about price gouging targets you.', th: '💰 กำไรพุ่ง ผู้ป่วยทุกข์', zh: '💰 利润飙升，患者受苦' }, stats: { competence: 40, ethics: -40, leadership: -20, innovation: 20 } },
            { id: 'B', text: { en: '🚫 Decline the Work: "This harms patients. Recommend generic licensing instead."', th: '🚫 ปฏิเสธงาน', zh: '🚫 拒绝工作' }, consequence: { en: '🎓 Ethical Stand. Client goes elsewhere. Your firm loses $10M contract but gains reputation.', th: '🎓 จุดยืนจริยธรรม', zh: '🎓 道德立场' }, stats: { competence: 20, ethics: 50, leadership: 45, innovation: 0 } },
            { id: 'C', text: { en: '🎯 Tiered Pricing: "Keep patent but offer low-cost version in developing nations."', th: '🎯 ราคาแบ่งระดับ', zh: '🎯 分级定价' }, consequence: { en: '🌍 Global Impact! You protect profits AND save lives. Win humanitarian awards.', th: '🌍 ผลกระทบทั่วโลก!', zh: '🌍 全球影响！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '📊 Innovation Investment: "Use patent revenue to fund next-gen drugs rather than extending old ones."', th: '📊 การลงทุนนวัตกรรม', zh: '📊 创新投资' }, consequence: { en: '🔬 R&D Breakthrough! New drug pipeline validates the strategy. You become pharma thought leader.', th: '🔬 ความก้าวหน้า R&D!', zh: '🔬 研发突破！' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 } }
        ]
    },
    {
        id: 'consultant_012',
        text: {
            en: '✈️ The Airline Crisis: An airline faces bankruptcy after fuel costs spike. Options: cut routes (hurts small towns), reduce service quality (angers customers), raise prices (loses market share), or merge (loses identity).',
            th: '✈️ วิกฤตสายการบิน: สายการบินเผชิญการล้มละลายหลังต้นทุนน้ำมันพุ่ง ทางเลือก: ตัดเส้นทาง (ทำร้ายเมืองเล็ก), ลดคุณภาพบริการ (ทำให้ลูกค้าโกรธ), ขึ้นราคา (สูญเสียส่วนแบ่งตลาด), หรือควบรวม (สูญเสียเอกลักษณ์)',
            zh: '✈️ 航空危机：一家航空公司在燃料成本飙升后面临破产。选项：削减航线（伤害小城镇），降低服务质量（激怒客户），提高价格（失去市场份额），或合并（失去身份认同）。'
        },
        options: [
            { id: 'A', text: { en: '📍 Cut Small Town Routes: "Eliminate unprofitable regional flights. Focus on major hubs."', th: '📍 ตัดเส้นทางเมืองเล็ก', zh: '📍 削减小城镇航线' }, consequence: { en: '🏘️ Rural Outrage! Congressman threatens to revoke your airport slots. Political nightmare.', th: '🏘️ ความโกรธของชนบท!', zh: '🏘️ 农村愤怒！' }, stats: { competence: 30, ethics: -20, leadership: -15, innovation: 0 } },
            { id: 'B', text: { en: '🪑 Economy of Discomfort: "Reduce legroom, charge for everything. Turn into budget airline."', th: '🪑 เศรษฐกิจของความไม่สบาย', zh: '🪑 不适经济' }, consequence: { en: '📉 Race to Bottom. Customers hate you but it works. You survive as hated budget carrier.', th: '📉 แข่งลงสู่ท้อง', zh: '📉 竞次' }, stats: { competence: 35, ethics: -15, leadership: 10, innovation: -10 } },
            { id: 'C', text: { en: '💰 Premium Pricing: "Raise prices 30% but improve service. Target business travelers."', th: '💰 ราคาพรีเมียม', zh: '💰 高端定价' }, consequence: { en: '🎯 Niche Success! Leisure travelers leave but corporate contracts soar. Smaller but profitable.', th: '🎯 ความสำเร็จกลุ่มเฉพาะ!', zh: '🎯 利基成功！' }, stats: { competence: 45, ethics: 25, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '🤝 Strategic Merger: "Merge with a larger carrier. Lose brand but save jobs."', th: '🤝 การควบรวมเชิงกลยุทธ์', zh: '🤝 战略合并' }, consequence: { en: '⚖️ Identity Lost. The brand disappears but 15,000 jobs saved. Bittersweet outcome.', th: '⚖️ สูญเสียเอกลักษณ์', zh: '⚖️ 失去身份' }, stats: { competence: 40, ethics: 35, leadership: 35, innovation: 10 } }
        ]
    },
    {
        id: 'consultant_013',
        text: {
            en: '🎨 The Museum Rebranding: A historic museum is losing young visitors. Data shows Gen Z finds it "boring". Options: go digital/VR (expensive), sensationalize exhibits (controversial), influencer partnerships (tacky), or educational gaming (innovative).',
            th: '🎨 การสร้างแบรนด์ใหม่ของพิพิธภัณฑ์: พิพิธภัณฑ์ประวัติศาสตร์กำลังสูญเสียผู้เยี่ยมชมรุ่นใหม่ ข้อมูลแสดงว่า Gen Z คิดว่า "น่าเบื่อ" ทางเลือก: ไปดิจิทัล/VR (แพง), ทำให้น่าตื่นเต้น (ขัดแย้ง), พันธมิตรผู้มีอิทธิพล (ไร้รสนิยม), หรือเกมการศึกษา (นวัตกรรม)',
            zh: '🎨 博物馆重塑品牌：一家历史悠久的博物馆正在失去年轻游客。数据显示Z世代认为它"无聊"。选项：数字化/VR（昂贵），展览耸人听闻（争议），网红合作（俗气），或教育游戏（创新）。'
        },
        options: [
            { id: 'A', text: { en: '🥽 Full VR Experience: "Invest $20M in VR exhibits. Walk with dinosaurs, explore ancient Rome."', th: '🥽 ประสบการณ์ VR เต็มรูปแบบ', zh: '🥽 完整VR体验' }, consequence: { en: '🎮 Tech Gimmick. Cool at first but expensive to maintain. Novelty wears off fast.', th: '🎮 เทคโนโลยีเล่ห์เหลี่ยม', zh: '🎮 技术噱头' }, stats: { competence: 35, ethics: 25, leadership: 30, innovation: 50 } },
            { id: 'B', text: { en: '💀 Shock Value: "Controversial exhibits. Sex, violence, dark history. Make it edgy."', th: '💀 คุณค่าช็อก', zh: '💀 震撼价值' }, consequence: { en: '🔥 Viral but Divisive! Young crowds flood in. Donors pull funding. Board splits.', th: '🔥 ไวรัสแต่แบ่งแยก!', zh: '🔥 病毒式但分裂！' }, stats: { competence: 30, ethics: -20, leadership: 10, innovation: 35 } },
            { id: 'C', text: { en: '📱 Influencer Invasion: "Pay TikTok stars to promote. Make museum "Instagrammable"."', th: '📱 การบุกของผู้มีอิทธิพล', zh: '📱 网红入侵' }, consequence: { en: '📸 Shallow Success. Foot traffic up 200% but visitors just take selfies and leave. No engagement.', th: '📸 ความสำเร็จตื้นเขิน', zh: '📸 肤浅的成功' }, stats: { competence: 25, ethics: 10, leadership: 15, innovation: 25 } },
            { id: 'D', text: { en: '🎮 Gamified Learning: "Create mobile game tied to exhibits. Collect artifacts, solve mysteries."', th: '🎮 การเรียนรู้เกมมิฟาย', zh: '🎮 游戏化学习' }, consequence: { en: '🌟 Perfect Blend! Gen Z engagement soars. Educational impact validated. Model copied worldwide.', th: '🌟 การผสมผสานที่สมบูรณ์แบบ!', zh: '🌟 完美融合！' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 } }
        ]
    },
    {
        id: 'consultant_014',
        text: {
            en: '📱 The Super App Strategy: Your client wants to build a "Super App" like WeChat, combining messaging, payments, and shopping. Critics say it creates a monopoly and privacy nightmare. Investors love the data potential.',
            th: '📱 กลยุทธ์ซูเปอร์แอป: ลูกค้าของคุณต้องการสร้าง "ซูเปอร์แอป" เหมือน WeChat รวมข้อความ การชำระเงิน และการช้อปปิ้ง',
            zh: '📱 超级应用策略：你的客户想建立像微信一样的"超级应用"，结合消息、支付和购物。批评者说这造成垄断和隐私噩梦。投资者喜欢数据的潜力。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Build the Walled Garden: "Aggressively lock users in. Make it impossible to leave. Data is the new oil."', th: '🚀 สร้างสวนที่มีกำแพงล้อมรอบ', zh: '🚀 建立围墙花园' }, consequence: { en: '💰 Monopoly Profits! You dominate the digital life of millions. Regulators start antitrust probes 5 years later.', th: '💰 กำไรผูกขาด!', zh: '💰 垄断利润！' }, stats: { competence: 40, ethics: -30, leadership: 20, innovation: 30 } },
            { id: 'B', text: { en: '🔓 Open Ecosystem: "Build a platform that integrates with others. Win by being the best connector, not a jailor."', th: '🔓 ระบบนิเวศเปิด', zh: '🔓 开放生态系统' }, consequence: { en: '🌐 Network Effects! Developers flock to you. You grow slower but face less regulatory risk. Sustainable.', th: '🌐 เอฟเฟกต์เครือข่าย!', zh: '🌐 网络效应！' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 } },
            { id: 'C', text: { en: '🔒 Privacy-First Super App: "Encrypt everything. Promise to never sell data. Charge a subscription fee instead of ads."', th: '🔒 ซูเปอร์แอปเน้นความเป็นส่วนตัว', zh: '🔒 隐私优先的超级应用' }, consequence: { en: '🛡️ Trust Premium. Niche market effectively. You capture the privacy-conscious 20% but lose the mass market.', th: '🛡️ พรีเมียมความเชื่อมั่น', zh: '🛡️ 信任溢价。' }, stats: { competence: 35, ethics: 50, leadership: 30, innovation: 40 } },
            { id: 'D', text: { en: '💸 Buy and Integrate: "Don\'t build. Acquire a payments firm and a shopping app. Mash them together quickly."', th: '💸 ซื้อและรวม', zh: '💸 购买并整合' }, consequence: { en: '🧩 Frankenstein App. The codebases hate each other. User experience is clunky. Users flee.', th: '🧩 แอปแฟรงเกนสไตน์', zh: '🧩 弗兰肯斯坦应用。' }, stats: { competence: 20, ethics: 20, leadership: -10, innovation: -20 } }
        ]
    },
    {
        id: 'consultant_015',
        text: {
            en: '🚗 The Self-Driving Pivot: An automaker is years behind Tesla. They can: license Tesla\'s tech (admit defeat), partner with Google/Waymo (share control), or bet the company on internal R&D (high risk).',
            th: '🚗 การเปลี่ยนทิศเป็นรถไร้คนขับ: ผู้ผลิตรถยนต์ตามหลัง Tesla หลายปี ทางเลือก: เช่าเทคโนโลยี Tesla (ยอมแพ้), ร่วมมือกับ Google (แบ่งการควบคุม)',
            zh: '🚗 自动驾驶转型：一家汽车制造商落后特斯拉多年。他们可以：许可特斯拉的技术（承认失败），与谷歌/Waymo合作（分享控制权），或把公司押注在内部研发（高风险）。'
        },
        options: [
            { id: 'A', text: { en: '🤝 License Tesla FSD: "If you cannot beat them, join them. Focus on building great car interiors."', th: '🤝 เช่า Tesla FSD', zh: '🤝 许可特斯拉FSD' }, consequence: { en: '📉 Hardware Commoditization. You become another Foxconn. Margins shrink as software value goes to Tesla.', th: '📉 ฮาร์ดแวร์กลายเป็นสินค้าโภคภัณฑ์', zh: '📉 硬件商品化。' }, stats: { competence: 30, ethics: 20, leadership: -20, innovation: -30 } },
            { id: 'B', text: { en: '🔬 Internal Moonshot: "Invest $50B in our own AI. We must own the soul of the car."', th: '🔬 การเดิมพันภายใน', zh: '🔬 内部登月计划' }, consequence: { en: '🎲 Massive Gamble. 5 years later, you are still behind. Shareholders revolt. CEO fired.', th: '🎲 การพนันครั้งใหญ่', zh: '🎲 巨大赌博。' }, stats: { competence: 20, ethics: 30, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🤝 Waymo Partnership: "Partner with Waymo. They provide the driver, we provide the vehicle fleet."', th: '🤝 พันธมิตร Waymo', zh: '🤝 Waymo合作伙伴关系' }, consequence: { en: '⚖️ Smart Alliance. You survive the transition. Not the market leader, but a profitable survivor.', th: '⚖️ พันธมิตรที่ฉลาด', zh: '⚖️ 聪明的联盟。' }, stats: { competence: 45, ethics: 30, leadership: 35, innovation: 30 } },
            { id: 'D', text: { en: '🚌 Pivot to Public Transit: "Forget personal cars. Build autonomous shuttle buses for cities."', th: '🚌 เปลี่ยนไปขนส่งสาธารณะ', zh: '🚌 转向公共交通' }, consequence: { en: '💡 Blue Ocean Strategy! You dominate a new market while others fight over robotaxis.', th: '💡 กลยุทธ์น่านน้ำสีคราม!', zh: '💡 蓝海战略！' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'consultant_016',
        text: {
            en: '👗 The Fast Fashion Waste: A clothing giant is under fire for environmental waste. You can suggest: switching to organic cotton (expensive), a recycling program (PR win), or a rental model (business model change).',
            th: '👗 ขยะแฟชั่นเร็ว: ยักษ์ใหญ่เสื้อผ้าถูกวิจารณ์เรื่องขยะสิ่งแวดล้อม คุณสามารถแนะนำ: เปลี่ยนเป็นฝ้ายอินทรีย์ (แพง), โครงการรีไซเคิล (ชนะ PR), หรือโมเดลเช่า',
            zh: '👗 快时尚浪费：一家服装巨头因环境浪费而受到抨击。你可以建议：改用有机棉（昂贵），回收计划（公关胜利），或租赁模式（商业模式转变）。'
        },
        options: [
            { id: 'A', text: { en: '♻️ Recycling Program: "Install bins in stores. Turn old clothes into insulation. Good PR."', th: '♻️ โครงการรีไซเคิล', zh: '♻️ 回收计划' }, consequence: { en: '📢 Greenwashing Accusations. Critics note you still produce billions of cheap items. Impact is minimal.', th: '📢 ข้อหาฟอกเขียว', zh: '📢 漂绿指控。' }, stats: { competence: 25, ethics: 10, leadership: 10, innovation: 10 } },
            { id: 'B', text: { en: '🔄 Rental Subscription: "Launch \'Infinite Closet\'. Rent clothes, return them, we wash and reuse."', th: '🔄 สมัครสมาชิกเช่า', zh: '🔄 租赁订阅' }, consequence: { en: '🚀 Circular Economy Leader! You reduce waste by 40% and build recurring revenue. Massive success.', th: '🚀 ผู้นำเศรษฐกิจหมุนเวียน!', zh: '🚀 循环经济领导者！' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 } },
            { id: 'C', text: { en: '🌿 Organic Cotton Only: "Switch supply chain to 100% organic. Raise prices 20%."', th: '🌿 ฝ้ายอินทรีย์เท่านั้น', zh: '🌿 仅有机棉' }, consequence: { en: '📉 Margin Crunch. Customers say they care but buy the cheaper competitor. Sales drop.', th: '📉 กำไรหด', zh: '📉 利润紧缩。' }, stats: { competence: 20, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'D', text: { en: '🤫 Ignore and Wait: "Fast fashion cycles are fast. The outrage will pass in a month."', th: '🤫 เพิกเฉยและรอ', zh: '🤫 忽视并等待' }, consequence: { en: '🌪️ Cancelled! Gen Z boycotts spread on TikTok. Brand perception permanently damaged.', th: '🌪️ ถูกยกเลิก!', zh: '🌪️ 被取消！' }, stats: { competence: 10, ethics: -40, leadership: -30, innovation: -10 } }
        ]
    },
    {
        id: 'consultant_017',
        text: {
            en: '🏦 The Fintech Threat: A traditional bank is losing young customers to Neobanks. Their app is rated 2.0 stars. The IT overhaul will take 3 years. Neobanks innovate every week.',
            th: '🏦 ภัยคุกคามฟินเทค: ธนาคารดั้งเดิมกำลังเสียลูกค้าวัยรุ่นให้ธนาคารดิจิทัล แอปได้เรต 2.0 ดาว ปรับปรุง IT ใช้เวลา 3 ปี',
            zh: '🏦 金融科技威胁：一家传统银行正在向Neobanks流失年轻客户。他们的应用程序评分为2.0星。IT大修将耗时3年。Neobanks每周都在创新。'
        },
        options: [
            { id: 'A', text: { en: '📱 Launch Sub-Brand: "Create a cool new digital brand running on a vendor stack. Launch in 3 months."', th: '📱 เปิดตัวแบรนด์ย่อย', zh: '📱 推出子品牌' }, consequence: { en: '⚡ Speed Win. The sub-brand stops the bleeding. Eventually migrate features back to main bank.', th: '⚡ ชนะความเร็ว', zh: '⚡ 速度胜利。' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 45 } },
            { id: 'B', text: { en: '🔨 Fix Core Systems: "No shortcuts. Fix the spaghetti code legacy responsibly. We play the long game."', th: '🔨 ซ่อมระบบหลัก', zh: '🔨 修复核心系统' }, consequence: { en: '🐢 Too Slow. By the time you fix it 3 years later, the Neobanks have taken 40% market share.', th: '🐢 ช้าเกินไป', zh: '🐢 太慢了。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Acquire a Neobank: "Buy the biggest competitor for $5B. Keep their tech and brand."', th: '🤝 ซื้อธนาคารดิจิทัล', zh: '🤝 收购Neobank' }, consequence: { en: '🤯 Integration Hell. The founders leave. The cultures clash. You ruined the shiny toy you bought.', th: '🤯 นรกการผสาน', zh: '🤯 整合地狱。' }, stats: { competence: 25, ethics: 20, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '🎁 Bribe Customers: "Offer $500 bonuses to open accounts. Use cash to mask product deficiencies."', th: '🎁 ติดสินบนลูกค้า', zh: '🎁 贿赂客户' }, consequence: { en: '💸 Churn City. People take the money and close the account. Burning cash for zero loyalty.', th: '💸 เมืองปั่นป่วน', zh: '💸 流失之城。' }, stats: { competence: 10, ethics: 10, leadership: -20, innovation: -20 } }
        ]
    },
    {
        id: 'consultant_018',
        text: {
            en: '🍔 The Lab-Grown Meat: A burger chain considers switching to lab-grown meat. It is 50% more expensive but cruelty-free. Focus groups are divided between "cool future" and "franken-food".',
            th: '🍔 เนื้อสัตว์เลี้ยงในแล็บ: ร้านเบอร์เกอร์พิจารณาเปลี่ยนไปใช้เนื้อเลี้ยงในแล็บ แพงกว่า 50% แต่ไม่เบียดเบียนสัตว์',
            zh: '🍔 实验室培育肉：一家汉堡连锁店考虑转向实验室培育肉。它贵50%但无残忍。焦点小组在"酷未来"和"科学怪人食物"之间分歧。'
        },
        options: [
            { id: 'A', text: { en: '🧬 Full Switch: "Be the first major chain to go 100% slaughter-free. Own the future."', th: '🧬 เปลี่ยนทั้งหมด', zh: '🧬 全面转换' }, consequence: { en: '📉 Too Early. Mass market rejects it. Prices are too high. You nearly go bankrupt before reverting.', th: '📉 เร็วเกินไป', zh: '📉 太早了。' }, stats: { competence: 20, ethics: 50, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🧪 The "Future Burger" Option: "Add it as a premium menu item. Let the customer vote with their wallet."', th: '🧪 ทางเลือก "เบอร์เกอร์อนาคต"', zh: '🧪 "未来汉堡"选项' }, consequence: { en: '📊 Smart Test. It sells well in cities, poorly in rural areas. You gather data without risking the business.', th: '📊 การทดสอบที่ฉลาด', zh: '📊 聪明的测试。' }, stats: { competence: 50, ethics: 35, leadership: 40, innovation: 40 } },
            { id: 'C', text: { en: '🚫 Stick to Real Meat: "People want real food. Run ads emphasizing our \'natural\' beef."', th: '🚫 ยึดติดกับเนื้อจริง', zh: '🚫 坚持真肉' }, consequence: { en: '🛡️ Short-Term Safe. You keep current customers but look increasingly outdated as trends shift.', th: '🛡️ ปลอดภัยระยะสั้น', zh: '🛡️ 短期安全。' }, stats: { competence: 30, ethics: 10, leadership: 10, innovation: -10 } },
            { id: 'D', text: { en: '🤝 Secret Blend: "Mix 20% lab meat into regular patties to lower cost and carbon footprint stealthily."', th: '🤝 ส่วนผสมลับ', zh: '🤝 秘密混合' }, consequence: { en: '🚨 Scandal! "Mystery Meat" headlines destroy trust when exposed. Transparency is non-negotiable.', th: '🚨 เรื่องอื้อฉาว!', zh: '🚨 丑闻！' }, stats: { competence: 15, ethics: -40, leadership: -30, innovation: 10 } }
        ]
    },
    {
        id: 'consultant_019',
        text: {
            en: '📡 The 5G Rollout: A telco needs to install 50,000 antennas for 5G. The optimal locations are near schools and hospitals, sparking public health fears (despite no scientific basis).',
            th: '📡 การเปิดตัว 5G: บริษัทโทรคมนาคมจำเป็นต้องติดตั้งเสาอากาศ 50,000 ต้นสำหรับ 5G ตำแหน่งที่เหมาะสมที่สุดคือใกล้โรงเรียนและโรงพยาบาล ทำให้เกิดความกลัวเรื่องสุขภาพ',
            zh: '📡 5G部署：一家电信公司需要安装5万个天线用于5G。最佳位置在学校和医院附近，引发公众健康担忧（尽管没有科学依据）。'
        },
        options: [
            { id: 'A', text: { en: '📡 Build Anyway: "Science is on our side. Ignore the NIMBYs. We have permits."', th: '📡 สร้างอยู่ดี', zh: '📡 无论如何都要建' }, consequence: { en: '🔥 PR Nightmare. Protests block construction. Mothers stick generated images on social media. Rollout stalled.', th: '🔥 ฝันร้าย PR', zh: '🔥 公关噩梦。' }, stats: { competence: 25, ethics: 20, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Community Education: "Hold town halls. Show safety data. Camouflage antennas as trees."', th: '🤝 การศึกษาชุมชน', zh: '🤝 社区教育' }, consequence: { en: '🕊️ Slow but Smooth. It takes twice as long but community buy-in prevents lawsuits.', th: '🕊️ ช้าแต่ราบรื่น', zh: '🕊️ 缓慢但顺畅。' }, stats: { competence: 40, ethics: 40, leadership: 45, innovation: 20 } },
            { id: 'C', text: { en: '📍 Sub-Optimal Placement: "Move antennas away from sensitive areas. Coverage will be 20% worse."', th: '📍 ตำแหน่งรอง', zh: '📍 次优位置' }, consequence: { en: '📶 Inferior Product. Customers complain about dead zones. Critics ask why 5G is not faster than 4G.', th: '📶 ผลิตภัณฑ์ด้อยกว่า', zh: '📶 劣质产品。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: -10 } },
            { id: 'D', text: { en: '💰 Incentivize Hosts: "Pay schools and hospitals double rent to host the antennas. Money talks."', th: '💰 จูงใจเจ้าบ้าน', zh: '💰 激励主机' }, consequence: { en: '💵 Ethical Gray Area. Some accept, others call it "bribing us to irradiate kids". Mixed results.', th: '💵 พื้นที่สีเทาทางจริยธรรม', zh: '💵 道德灰色地带。' }, stats: { competence: 35, ethics: 10, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'consultant_020',
        text: {
            en: '🎵 The Music Royalty Fight: Artists demand higher payouts from your streaming client. They threaten to pull their catalogs. Your client runs on thin margins and says paying more means bankruptcy.',
            th: '🎵 การต่อสู้ค่าลิขสิทธิ์เพลง: ศิลปินเรียกร้องการจ่ายเงินเพิ่มจากลูกค้าสตรีมมิ่งของคุณ',
            zh: '🎵 音乐版税之争：艺术家要求你的流媒体客户支付更高的报酬。他们威胁要撤下他们的目录。你的客户利润微薄，说支付更多意味着破产。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Hold the Line: "We provide the distribution. Without us, piracy returns. Do not pay more."', th: '🛡️ ยึดมั่น', zh: '🛡️ 坚守底线' }, consequence: { en: '🚫 Catalog Loss. Taylor Swift and others leave. Users follow them to Apple Music. You lose.', th: '🚫 สูญเสียแคตตาล็อก', zh: '🚫 目录丢失。' }, stats: { competence: 20, ethics: 10, leadership: -10, innovation: -10 } },
            { id: 'B', text: { en: '📈 User-Centric Payment: "Shift model. User subscription goes only to artists they listen to. Fairer for niche artists."', th: '📈 การจ่ายเงินเน้นผู้ใช้', zh: '📈以此为中心支付' }, consequence: { en: '🌟 Industry Hero! Indie artists promote you. Critics praise the fairness. You differentiate from Spotify.', th: '🌟 วีรบุรุษอุตสาหกรรม!', zh: '🌟 行业英雄！' }, stats: { competence: 50, ethics: 50, leadership: 45, innovation: 50 } },
            { id: 'C', text: { en: '💰 Raise Subscription Price: "Pass cost to consumers. $2 price hike goes directly to artists."', th: '💰 ขึ้นค่าสมัคร', zh: '💰 提高订阅价格' }, consequence: { en: '⚖️ Acceptable Trade-off. Users grumble but stay for the music. Artists value the gesture.', th: '⚖️ ข้อแลกเปลี่ยนที่ยอมรับได้', zh: '⚖️ 可接受的权衡。' }, stats: { competence: 40, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🤖 AI Music Pivot: "Invest in AI-generated mood music to reduce reliance on human artists long-term."', th: '🤖 เปลี่ยนเป็นดนตรี AI', zh: '🤖 AI音乐转型' }, consequence: { en: '🎸 Cultural Backlash. Real artists boycott you entirely. You become the "elevator music" app.', th: '🎸 ปฏิกิริยาวัฒนธรรม', zh: '🎸 文化反弹。' }, stats: { competence: 30, ethics: -20, leadership: 10, innovation: 30 } }
        ]
    },
    {
        id: 'consultant_021',
        text: {
            en: '🚢 The Supply Chain Fragility: Your manufacturing client sources 90% of parts from one region in China. Geopolitical tensions are rising. Moving the supply chain costs millions and takes 2 years.',
            th: '🚢 ความเปราะบางของห่วงโซ่อุปทาน: ลูกค้าการผลิตของคุณจัดหาชิ้นส่วน 90% จากภูมิภาคเดียวในจีน ความตึงเครียดทางภูมิรัฐศาสตร์กำลังเพิ่มขึ้น',
            zh: '🚢 供应链脆弱性：你的制造客户90%的零件来自中国的一个地区。地缘政治紧张局势正在加剧。转移供应链耗资数百万并需2年时间。'
        },
        options: [
            { id: 'A', text: { en: '🎲 Stay Put: "The cost to move is too high. Bet on diplomacy prevailing."', th: '🎲 อยู่ที่เดิม', zh: '🎲 按兵不动' }, consequence: { en: '⚠️ Supply Shock! Tariffs hit, then a blockade. Factory halts for 6 months. Bankruptcy looms.', th: '⚠️ ช็อกอุปทาน!', zh: '⚠️ 供应冲击！' }, stats: { competence: 20, ethics: 20, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🌍 China + 1 Strategy: "Keep China but start a secondary hub in Vietnam or Mexico immediately."', th: '🌍 กลยุทธ์จีน + 1', zh: '🌍 中国+1战略' }, consequence: { en: '🛡️ Resilience! When disruption hits, you just shift volume to the new hub. Textbook risk management.', th: '🛡️ ความยืดหยุ่น!', zh: '🛡️ 弹性！' }, stats: { competence: 50, ethics: 30, leadership: 45, innovation: 30 } },
            { id: 'C', text: { en: '🏭 Full Reshoring: "Bring manufacturing back to the US. Automation makes it cost-competitive."', th: '🏭 ย้ายกลับประเทศเต็มรูปแบบ', zh: '🏭 全面回流' }, consequence: { en: '🦅 Brand Win, Margin Hit. Costs rise 15%, but "Made in USA" allows premium pricing. Good long-term.', th: '🦅 ชนะแบรนด์ กำไรหด', zh: '🦅 品牌胜利，利润受损。' }, stats: { competence: 40, ethics: 40, leadership: 40, innovation: 45 } },
            { id: 'D', text: { en: '📦 Stockpile Inventory: "Buy 12 months of inventory now. Weather the storm without moving factories."', th: '📦 กักตุนสินค้า', zh: '📦 囤积库存' }, consequence: { en: '💸 Cash Flow Crisis. All your cash is tied up in warehouses. If product design changes, it is waste.', th: '💸 วิกฤตกระแสเงินสด', zh: '💸 现金流危机。' }, stats: { competence: 30, ethics: 10, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'consultant_022',
        text: {
            en: '💊 The Opioid Crisis: A pharma client wants to market a new powerful painkiller. They ask you to design a strategy to "educate" doctors on why it is "non-addictive" based on a flimsy internal study.',
            th: '💊 วิกฤตโอปิออยด์: ลูกค้าบริษัทยาต้องการทำตลาดยาแก้ปวดตัวใหม่ พวกเขาขอให้คุณออกแบบกลยุทธ์เพื่อ "ให้ความรู้" แพทย์ว่าทำไมมันถึง "ไม่เสพติด"',
            zh: '💊 阿片类药物危机：一家制药客户想推销一种新的强效止痛药。他们要求你设计一个策略，根据一项站不住脚的内部研究，"教育"医生为什么它是"不成瘾的"。'
        },
        options: [
            { id: 'A', text: { en: '📝 Do the Work: "Design the sales script. Focus on pain relief benefits. It is their study, not yours."', th: '📝 ทำงานไป', zh: '📝 做这项工作' }, consequence: { en: '☠️ Public Health Tragedy. Addiction skyrockets. You and the firm are named in massive lawsuits years later.', th: '☠️ โศกนาฏกรรมสาธารณสุข', zh: '☠️ 公共卫生悲剧。' }, stats: { competence: 20, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Refuse and Report: "This study is flawed. We cannot market this ethically. Retract the claim."', th: '🛑 ปฏิเสธและรายงาน', zh: '🛑 拒绝并报告' }, consequence: { en: '🚪 Fired. Client fires you on the spot. But you sleep well. Later, internal memos prove you right.', th: '🚪 ถูกไล่ออก', zh: '🚪 被解雇。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '📊 Demand Independent Review: "We will not market it until a 3rd party university verifies the non-addictive claim."', th: '📊 เรียกร้องการตรวจสอบอิสระ', zh: '📊 要求独立审查' }, consequence: { en: '🕵️ Fraud Exposed. The 3rd party finds it IS addictive. You saved the client from a billion-dollar lawsuit.', th: '🕵️ การฉ้อโกงถูกเปิดเผย', zh: '🕵️ 欺诈曝光。' }, stats: { competence: 50, ethics: 45, leadership: 45, innovation: 20 } },
            { id: 'D', text: { en: '🏥 Market for End-of-Life: "Position it only for terminal cancer patients where addiction is less of a concern."', th: '🏥 ตลาดสำหรับช่วงสุดท้ายของชีวิต', zh: '🏥 临终市场' }, consequence: { en: '⚖️ Ethical Niche. Sales are smaller, but appropriate. You avoided the mass addiction crisis.', th: '⚖️ กลุ่มเฉพาะที่มีจริยธรรม', zh: '⚖️ 道德利基。' }, stats: { competence: 45, ethics: 40, leadership: 35, innovation: 10 } }
        ]
    },
    {
        id: 'consultant_023',
        text: {
            en: '💧 The Water Rights: A beverage company wants to buy water rights in a drought-stricken village. They offer to build a school in exchange for pumping unmatched groundwater. Villagers are desperate for the school but need water.',
            th: '💧 สิทธิในการใช้น้ำ: บริษัทเครื่องดื่มต้องการซื้อสิทธิในการใช้น้ำในหมู่บ้านที่แห้งแล้ง พวกเขาเสนอสร้างโรงเรียนแลกกับการสูบน้ำบาดาล',
            zh: '💧 水权：一家饮料公司想在一个受干旱困扰的村庄购买水权。他们提议建一所学校来换取抽取无与伦比的地下水。村民们迫切需要学校，但也需要水。'
        },
        options: [
            { id: 'A', text: { en: '📄 Seal the Deal: "Get the signatures. Build the school. The water is legal to take."', th: '📄 ปิดดีล', zh: '📄 达成交易' }, consequence: { en: '🌵 Wells Run Dry. Village crops fail. Documentary shows kids in your school thirsty. Global boycott.', th: '🌵 บ่อน้ำแห้ง', zh: '🌵 水井干涸。' }, stats: { competence: 30, ethics: -40, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '♻️ Closed-Loop Plant: "Build a factory that recycles 95% of water. Take minimal groundwater. Costs more."', th: '♻️ โรงงานระบบปิด', zh: '♻️ 闭环工厂' }, consequence: { en: '🌍 Sustainable Harmony. The community thrives with both school and water. Brand praised for stewardship.', th: '🌍 ความสามัคคีที่ยั่งยืน', zh: '🌍 可持续和谐。' }, stats: { competence: 50, ethics: 50, leadership: 45, innovation: 50 } },
            { id: 'C', text: { en: '🤝 Revenue Share: "Give the village 5% of profit from water bottled there to upgrade their own water infrastructure."', th: '🤝 แบ่งปันรายได้', zh: '🤝 收入分成' }, consequence: { en: '⚖️ Fair Partnership. The village becomes wealthy enough to drill deeper wells. Good relationship.', th: '⚖️ พันธมิตรที่ยุติธรรม', zh: '⚖️ 公平伙伴关系。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '🚫 Walk Away: "Optics are too bad. Drilling in a drought zone is PR suicide. Find a wetter location."', th: '🚫 เดินหนี', zh: '🚫 一走了之' }, consequence: { en: '📍 Prudent Move. Competitor goes in and gets bad press. You avoided the mess.', th: '📍 การเคลื่อนไหวที่รอบคอบ', zh: '📍 谨慎举措。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 0 } }
        ]
    },
    {
        id: 'consultant_024',
        text: {
            en: '🤖 The AI Layoffs: An insurance firm can replace 10,000 claims adjusters with AI. It saves $500M/year. The CEO asks how to announce this "without sounding evil."',
            th: '🤖 การเลิกจ้าง AI: บริษัทประกันภัยสามารถแทนที่ผู้ปรับปรุงการเรียกร้อง 10,000 คนด้วย AI ประหยัด 500 ล้านต่อปี',
            zh: '🤖 AI裁员：一家保险公司可以用AI取代10000名理赔员。每年节省5亿美元。CEO问如何宣布这一点"而不听起来很邪恶"。'
        },
        options: [
            { id: 'A', text: { en: '🎭 The "Transformation" Spin: "Call it \'Digital Workforce Evolution\'. Don\'t mention layoffs until the day of."', th: '🎭 การปั่น "การเปลี่ยนแปลง"', zh: '🎭 "转型"旋转' }, consequence: { en: '🔥 Viral Leak. Internal memos leak. You look deceptive and cruel. Brand trust plummets.', th: '🔥 การรั่วไหลไวรัส', zh: '🔥 病毒式泄露。' }, stats: { competence: 25, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🤝 The Bridge Plan: "Announce 1 year in advance. Offer retraining for tech roles. Voluntary buyouts first."', th: '🤝 แผนสะพาน', zh: '🤝 桥梁计划' }, consequence: { en: '🌟 Human-Centric AI. Costly up front, but you maintain morale. Remaining staff trust you to innovate.', th: '🌟 AI ที่เน้นมนุษย์', zh: '🌟 以人为本的AI。' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🔪 Rip the Band-Aid: "Do it all at once on Friday. Lock computers. Generous severance. Clean break."', th: '🔪 ดึงพลาสเตอร์ออก', zh: '🔪 撕掉创可贴' }, consequence: { en: '📉 Efficient Trauma. The savings are realized immediately. But Glassdoor reviews destroy recruiting for years.', th: '📉 บาดแผลที่มีประสิทธิภาพ', zh: '📉 高效创伤。' }, stats: { competence: 40, ethics: 10, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '🤖 AI Assist Only: "Keep humans but give them AI tools to handle 5x volume. Let headcount drop naturally through attrition."', th: '🤖 AI ช่วยเท่านั้น', zh: '🤖 仅AI协助' }, consequence: { en: '🕊️ Smooth Transition. No layoffs. Profit margins grow slowly but steadily. Zero PR backlash.', th: '🕊️ การเปลี่ยนแปลงราบรื่น', zh: '🕊️ 平稳过渡。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 30 } }
        ]
    },
    {
        id: 'consultant_025',
        text: {
            en: '🍫 The Shrinkflation Tactic: Candy bar ingredient costs are up 20%. The client wants to keep the price at $1.99. They ask: "Should we shrink the bar by 20% or lower the quality of chocolate?"',
            th: '🍫 กลยุทธ์ลดปริมาณ: ต้นทุนส่วนผสมแท่งลูกกวาดเพิ่มขึ้น 20% ลูกค้าต้องการคงราคาที่ 1.99 ดอลลาร์',
            zh: '🍫 缩水策略：糖果棒原料成本上涨20%。客户希望将价格保持在1.99美元。他们问："我们应该将糖果棒缩小20%还是降低巧克力的质量？"'
        },
        options: [
            { id: 'A', text: { en: '📉 Reduce Quality: "Distract with new wrapper. Use cheaper cocoa butter substitute."', th: '📉 ลดคุณภาพ', zh: '📉 降低质量' }, consequence: { en: '🤢 Taste Failure. Social media calls it "waxy garbage". Sales tank permanently.', th: '🤢 ความล้มเหลวเรื่องรสชาติ', zh: '🤢 口味失败。' }, stats: { competence: 15, ethics: -20, leadership: -10, innovation: -10 } },
            { id: 'B', text: { en: '📏 Shrinkflation: "Make it 15% smaller. Keep the package size same. Most won\'t notice."', th: '📏 ลดปริมาณ', zh: '📏 缩水' }, consequence: { en: '🕵️ Consumer Wrath. Reddit posts comparison photos. You get mocked as greedy.', th: '🕵️ ความโกรธของผู้บริโภค', zh: '🕵️ 消费者愤怒。' }, stats: { competence: 30, ethics: -10, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '💰 Honest Price Hike: "Keep size and quality. Raise price to $2.29. Explain cost increases honestly."', th: '💰 ขึ้นราคาอย่างซื่อสัตย์', zh: '💰 诚实涨价' }, consequence: { en: '🤝 Brand Loyalty. Sales dip slightly, but customers appreciate the quality. Margins protected.', th: '🤝 ความภักดีต่อแบรนด์', zh: '🤝 品牌忠诚度。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '🍬 New "Pro" Line: "Shrink the standard bar to maintain entry price. Launch a \'King Size\' for higher margin."', th: '🍬 ไลน์ "โปร" ใหม่', zh: '🍬 新"Pro"系列' }, consequence: { en: '📈 Segmentation Win. You capture both price-sensitive and premium buyers. Revenue grows.', th: '📈 ชนะการแบ่งส่วน', zh: '📈 细分胜利。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 } }
        ]
    },
    {
        id: 'consultant_026',
        text: {
            en: '🏫 The University Ranking Game: A university dean hires you to boost their ranking. They are currently #50. They want to be #20. Data shows rankings weight "exclusivity" (rejection rate) heavily.',
            th: '🏫 เกมจัดอันดับมหาวิทยาลัย: คณบดีมหาวิทยาลัยจ้างคุณเพื่อเพิ่มอันดับ ตอนนี้อยู่อันดับ 50 อยากเป็นอันดับ 20',
            zh: '🏫 大学排名游戏：一位大学院长聘请你提升他们的排名。他们目前排名第50。他们想进入前20名。数据显示排名非常看重"排他性"（拒绝率）。'
        },
        options: [
            { id: 'A', text: { en: '📉 Manufactured Rejection: "Encourage unqualified students to apply so we can reject them. Lowers acceptance rate."', th: '📉 การปฏิเสธที่สร้างขึ้น', zh: '📉 制造拒绝' }, consequence: { en: '🤥 Metric Gaming. It works. You jump to #30. But high school counselors blacklist you for wasting kids\' time.', th: '🤥 การเล่นเกมตัวชี้วัด', zh: '🤥 指标游戏。' }, stats: { competence: 35, ethics: -20, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '🎓 Research Investment: "Hire 5 Nobel laureates. Expensive, but boosts the \'Academic Reputation\' score authentically."', th: '🎓 การลงทุนวิจัย', zh: '🎓 研究投资' }, consequence: { en: '🏛️ True Prestige. You rise to #25 based on merit. Donations increase. Sustainable growth.', th: '🏛️ เกียรติยศแท้จริง', zh: '🏛️ 真正的声望。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 40 } },
            { id: 'C', text: { en: '🏟️ Build Luxury Dorms: "Attract rich kids. Rankings often correlate with endowment and spending per student."', th: '🏟️ สร้างหอพักหรู', zh: '🏟️ 建造豪华宿舍' }, consequence: { en: '🏰 Country Club U. Ranking improves, but you become known as a school for rich parties, not learning.', th: '🏰 มหาวิทยาลัยคันทรีคลับ', zh: '🏰 乡村俱乐部大学。' }, stats: { competence: 30, ethics: 10, leadership: 20, innovation: 20 } },
            { id: 'D', text: { en: '📊 Fix the Data: "Audit the reporting. We might be undercounting alumni donations. Optimize the submission."', th: '📊 แก้ไขข้อมูล', zh: '📊 修复数据' }, consequence: { en: '🔍 Low-Hanging Fruit. You find errors that boost you 5 spots. Cheap and easy win.', th: '🔍 ผลไม้ต่ำ', zh: '🔍 唾手可得的果实。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'consultant_027',
        text: {
            en: '⛽ The Oil Rig Leak: An oil platform has a minor leak. Fixing it requires shutting down production for weeks ($100M loss). Leaving it risks a major spill (10% chance). Regulations are vague.',
            th: '⛽ การรั่วไหลของแท่นขุดเจาะน้ำมัน: แท่นขุดเจาะน้ำมันมีการรั่วไหลเล็กน้อย การซ่อมแซมต้องหยุดการผลิตเป็นสัปดาห์ (ขาดทุน 100 ล้าน)',
            zh: '⛽以此 油井泄漏：一个石油平台有轻微泄漏。修复它需要停止生产数周（损失1亿美元）。不理会它有发生重大泄漏的风险（10%几率）。法规模糊。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Shut Down and Fix: "Safety first. $100M is cheaper than a BP-style disaster."', th: '🛑 ปิดและซ่อม', zh: '🛑 关闭并修复' }, consequence: { en: '🛡️ Crisis Averted. Shareholders angry at quarterly miss, but you avoid catastrophe.', th: '🛡️ หลีกเลี่ยงวิกฤต', zh: '🛡️ 危机避免。' }, stats: { competence: 50, ethics: 45, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🎲 Calculate the Risk: "10% chance is low. Keep running. Install sensors to monitor worseninig."', th: '🎲 คำนวณความเสี่ยง', zh: '🎲 计算风险' }, consequence: { en: '💣 Disaster Strikes! The leak blows. Billions in fines. Ecosystem destroyed. You gambled and lost.', th: '💣 ภัยพิบัติเกิดขึ้น!', zh: '💣 灾难降临！' }, stats: { competence: 10, ethics: -50, leadership: -50, innovation: 0 } },
            { id: 'C', text: { en: '🔧 Patch While Running: "Attempt a risky underwater weld while platform operates. Saves the shutdown cost."', th: '🔧 ปะขณะทำงาน', zh: '🔧 运行中修补' }, consequence: { en: '🤞 Close Call. It works, but a diver is injured. You saved money but compromised safety standards.', th: '🤞 หวุดหวิด', zh: '🤞 险些出事。' }, stats: { competence: 35, ethics: -10, leadership: 10, innovation: 20 } },
            { id: 'D', text: { en: '🌧️ Blame Nature: "Wait for a storm, then report the leak as weather damage to claim insurance."', th: '🌧️ โทษธรรมชาติ', zh: '🌧️ 责怪自然' }, consequence: { en: '⚖️ Insurance Fraud. Investigators check weather logs. You go to jail.', th: '⚖️ การฉ้อโกงประกัน', zh: '⚖️ 保险欺诈。' }, stats: { competence: 0, ethics: -50, leadership: -50, innovation: 0 } }
        ]
    },
    {
        id: 'consultant_028',
        text: {
            en: '📱 The Planned Obsolescence: A phone manufacturer asks how to make users upgrade faster. Their phones currently last 4 years. They want to reduce it to 2 years to double sales.',
            th: '📱 ความล้าสมัยที่วางแผนไว้: ผู้ผลิตโทรศัพท์ถามวิธีทำให้ผู้ใช้อัปเกรดเร็วขึ้น ปัจจุบันโทรศัพท์ใช้ได้ 4 ปี',
            zh: '📱 计划报废：一家手机制造商询问如何让用户更快升级。他们的手机目前可以使用4年。他们希望将其减少到2年以使销售额翻倍。'
        },
        options: [
            { id: 'A', text: { en: '🔋 Glue the Batteries: "Make batteries impossible to replace. When battery dies, phone dies."', th: '🔋 ติดกาวแบตเตอรี่', zh: '🔋 粘住电池' }, consequence: { en: '🗑️ E-Waste Nightmare. Sales rise, but environmentalists attack. Right-to-Repair laws eventually ban this.', th: '🗑️ ฝันร้ายขยะอิเล็กทรอนิกส์', zh: '🗑️ 电子垃圾噩梦。' }, stats: { competence: 30, ethics: -40, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '🐌 Software Bloat: "Push updates that slow down older models. Frustrate users into upgrading."', th: '🐌 ซอฟต์แวร์บวม', zh: '🐌 软件膨胀' }, consequence: { en: '⚖️ Class Action Lawsuit! You get caught throttling speeds. $500M fine. Trust destroyed.', th: '⚖️ การฟ้องร้องแบบกลุ่ม!', zh: '⚖️以此 集体诉讼！' }, stats: { competence: 20, ethics: -50, leadership: -30, innovation: -10 } },
            { id: 'C', text: { en: '✨ Trade-In Program: "Offer high trade-in value for getting the new model. Recycle the old ones responsibly."', th: '✨ โครงการแลกซื้อ', zh: '✨ 以旧换新计划' }, consequence: { en: '♻️ Virtuous Cycle. Users upgrade because they want to, not because they have to. Sales up, waste managed.', th: '♻️ วงจรคุณธรรม', zh: '♻️ 良性循环。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 40 } },
            { id: 'D', text: { en: '💎 Subscription Model: "Stop selling hardware. Sell \'Phone-as-a-Service\'. Get a new phone every year automatically."', th: '💎 โมเดลสมัครสมาชิก', zh: '💎 订阅模式' }, consequence: { en: '💰 Recurring Revenue King! Investors love the predictable cash flow. Users love always having the latest tech.', th: '💰 ราชาแห่งรายได้ประจำ!', zh: '💰 经常性收入之王！' }, stats: { competence: 50, ethics: 35, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'consultant_029',
        text: {
            en: '👟 The Sweatshop Allegation: An NGO claims your client\'s sneaker factory uses child labor. The factory is a 3rd party contractor. The client didn\'t know, but the brand damage is starting.',
            th: '👟 ข้อกล่าวหาโรงงานนรก: NGO อ้างว่าโรงงานรองเท้าผ้าใบของลูกค้าใช้แรงงานเด็ก โรงงานเป็นผู้รับเหมาช่วง',
            zh: '👟 血汗工厂指控：非政府组织声称你客户的运动鞋工厂使用童工。工厂是第三方承包商。客户不知道，但品牌损害已经开始。'
        },
        options: [
            { id: 'A', text: { en: '🤥 Deny Everything: "Issue a statement calling the claims false. Threaten to sue the NGO for libel."', th: '🤥 ปฏิเสธทุกอย่าง', zh: '🤥 否认一切' }, consequence: { en: '📸 Pictures Emerge. The NGO releases photos of kids sewing your shoes. The lie destroys you completely.', th: '📸 ภาพปรากฏ', zh: '📸 照片浮出水面。' }, stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: '🕵️ Audit and Cut: "Inspect immediately. If true, fire the contractor publicly. Zero tolerance."', th: '🕵️ ตรวจสอบและตัด', zh: '🕵️ 审计并削减' }, consequence: { en: '🛡️ Crisis Managed. You look decisive. Supply chain disrupted for 3 months, but brand integrity saved.', th: '🛡️ จัดการวิกฤต', zh: '🛡️ 危机管理。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🏫 Build Schools: "Admit the issue. Don\'t just fire them (kids starve). Build schools and pay parents living wages."', th: '🏫 สร้างโรงเรียน', zh: '🏫以此 建学校' }, consequence: { en: '🏆 Global Standard. You transform a scandal into a human rights victory. The "Nike Model" of redemption.', th: '🏆 มาตรฐานโลก', zh: '🏆 全球标准。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🙈 Rebrand Contractor: "Move production to a different factory under a new name. Keep costs low."', th: '🙈 เปลี่ยนแบรนด์ผู้รับเหมา', zh: '🙈 承包商更名' }, consequence: { en: '🔁 Whack-a-Mole. The problem recurs 2 years later. You solve nothing, just hide it.', th: '🔁 ตีตัวตุ่น', zh: '🔁 打地鼠。' }, stats: { competence: 20, ethics: -30, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'consultant_030',
        text: {
            en: '💳 The Crypto Pivot: A boring insurance company wants to "get into crypto" because the CEO read about Bitcoin. They have no blockchain expertise. They want to invest 20% of reserves into Dogecoin.',
            th: '💳 การเปลี่ยนทิศสู่คริปโต: บริษัทประกันภัยน่าเบื่อต้องการ "เข้าสู่คริปโต" เพราะซีอีโออ่านเกี่ยวกับ Bitcoin',
            zh: '💳 加密货币转型：一家无聊的保险公司想要"进入加密货币"，因为CEO读到了比特币。他们没有区块链专业知识。他们想把20%的储备金投资到狗狗币。'
        },
        options: [
            { id: 'A', text: { en: '🚀 To the Moon: "Do it. High risk, high reward. It will make the company look modern."', th: '🚀 สู่ดวงจันทร์', zh: '🚀 登月' }, consequence: { en: '📉 Crash! Crypto winter hits. The company loses 15% of reserves. Regulators seize the rest. Bankruptcy.', th: '📉 พังพินาศ!', zh: '📉 崩盘！' }, stats: { competence: 10, ethics: 0, leadership: -30, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Hard No: "Insurance is about stability. Crypto is gambling. This violates fiduciary duty."', th: '🛑 ไม่เด็ดขาด', zh: '🛑 坚决不' }, consequence: { en: '🛡️ Boring is Good. CEO is annoyed, but when crypto crashes, you look like a genius protector of assets.', th: '🛡️ น่าเบื่อคือดี', zh: '🛡️ 无聊是好事。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🔗 Blockchain Backend: "Do not buy coins. Use blockchain technology to speed up claims processing."', th: '🔗 แบ็คเอนด์บล็อกเชน', zh: '🔗 区块链后端' }, consequence: { en: '💡 Real Innovation. You use the tech without the speculation risk. Efficiency improves 30%.', th: '💡 นวัตกรรมจริง', zh: '💡 真正的创新。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🤏 Small Pilot: "Invest 0.1% as a learning experiment. Not enough to hurt if lost."', th: '🤏 โครงการนำร่องเล็ก', zh: '🤏 小规模试点' }, consequence: { en: '🎓 Tuition Fee. You lose the money, but gain understanding of the market. Harmless experimentation.', th: '🎓 ค่าเล่าเรียน', zh: '🎓 学费。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 30 } }
        ]
    },
    {
        id: 'consultant_031',
        text: {
            en: '🤖 The AI Artist Lawsuit: An AI art generator client is sued by artists for using their work to train the model without permission. They ask for a defense strategy.',
            th: '🤖 การฟ้องร้องศิลปิน AI: ลูกค้าเครื่องมือสร้างศิลปะ AI ถูกฟ้องโดยศิลปินเนื่องจากใช้งารของพวกเขาฝึกโมเดลโดยไม่ได้รับอนุญาต',
            zh: '🤖 AI艺术家诉讼：一家AI艺术生成器客户因未经许可使用艺术家的作品训练模型而被起诉。他们寻求防御策略。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Fair Use Defense: "Argue transformative use. It learns styles, not copies pixels. Fight it in court."', th: '⚖️ การใช้งานโดยชอบธรรม', zh: '⚖️ 合理使用辩护' }, consequence: { en: '🛡️ Legal Limbo. You win immediate battles, but public opinion turns against "thief machines".', th: '🛡️ ภาวะกลืนไม่เข้าคายไม่ออกทางกฎหมาย', zh: '🛡️ 法律边缘。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 40 } },
            { id: 'B', text: { en: '💰 Artist Fund: "Create a $100M fund to pay artists whose styles are mimicked. Opt-out allowed."', th: '💰 กองทุนศิลปิน', zh: '💰 艺术家基金' }, consequence: { en: '🤝 Social License. It costs money, but major artists sign up. You become the "ethical" AI tool.', th: '🤝 ใบอนุญาตทางสังคม', zh: '🤝 社会许可。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🙈 Ignore It: "They cannot copyright a style. Delay legal proceedings until they run out of money."', th: '🙈 เพิกเฉย', zh: '🙈 忽略它' }, consequence: { en: '📉 Reputational Toxic. Enterprise clients drop you to avoid liability. Competitors take your market.', th: '📉 ชื่อเสียงเป็นพิษ', zh: '📉 声誉有毒。' }, stats: { competence: 20, ethics: -40, leadership: -30, innovation: 10 } },
            { id: 'D', text: { en: '🔒 Clean Model: "Retrain from scratch using only public domain art. Worse results, but legal."', th: '🔒 โมเดลสะอาด', zh: '🔒 干净模型' }, consequence: { en: '🐌 Competitively Weak. Your images look like 18th-century paintings. Users flock to better (illegal) tools.', th: '🐌 อ่อนแอในการแข่งขัน', zh: '🐌 竞争力弱。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: -20 } }
        ]
    },
    {
        id: 'consultant_032',
        text: {
            en: '📱 The App Store Tax: A developer client wants to bypass the 30% App Store fee. They want to direct users to a website for payments. Apple/Google might ban them.',
            th: '📱 ภาษี App Store: ลูกค้านักพัฒนาต้องการเลี่ยงค่าธรรมเนียม 30% ของ App Store',
            zh: '📱 应用商店税：开发商客户希望绕过30%的应用商店费用。他们希望引导用户访问网站进行支付。苹果/谷歌可能会禁止他们。'
        },
        options: [
            { id: 'A', text: { en: '⚔️ Fortnite Mode: "Sue them! Rally public support. Break the monopoly!"', th: '⚔️ โหมด Fortnite', zh: '⚔️ 堡垒之夜模式' }, consequence: { en: '🔥 War. You get kicked off the store. Revenue drops 90%. Hope you have deep pockets for lawyers.', th: '🔥 สงคราม', zh: '🔥 战争。' }, stats: { competence: 30, ethics: 40, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🤐 Comply: "30% is the cost of doing business. Focus on increasing user LTV to offset it."', th: '🤐 ปฏิบัติตาม', zh: '🤐 遵守' }, consequence: { en: '🛡️ Safe & Stable. No drama. You keep access to billions of users. Margins are lower but secure.', th: '🛡️ ปลอดภัยและมั่นคง', zh: '🛡️ 安全稳定。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🌐 Web App Pivot: "Abandon native apps. Build a Progressive Web App (PWA). No fees, no rules."', th: '🌐 เปลี่ยนเป็นเว็บแอป', zh: '🌐 Web应用转型' }, consequence: { en: '📉 Lower Conversion. PWAs are harder to install. You save 30% but lose 40% of users. Net loss.', th: '📉 การแปลงลดลง', zh: '📉 转化率降低。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: 40 } },
            { id: 'D', text: { en: '🤫 Stealth Steering: "Subtly email users offering a \'discount\' if they buy on the web. Don\'t put link in app."', th: '🤫 การนำทางแบบลับ', zh: '🤫 隐形引导' }, consequence: { en: '🐭 Cat and Mouse. It works for a while until you get caught and warned. Risky but profitable.', th: '🐭 แมวและหนู', zh: '🐭 猫鼠游戏。' }, stats: { competence: 45, ethics: 20, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'consultant_033',
        text: {
            en: '🥩 The Meat Tax: A government plans a "Sustainability Tax" on beef to reduce carbon emissions. Your client is a steakhouse chain. They are panicking.',
            th: '🥩 ภาษีเนื้อสัตว์: รัฐบาลวางแผน "ภาษีความยั่งยืน" สำหรับเนื้อวัวเพื่อลดการปล่อยคาร์บอน ลูกค้าร้านสเต็กของคุณกำลังตื่นตระหนก',
            zh: '🥩 肉类税：政府计划对牛肉征收"可持续发展税"以减少碳排放。你的客户是一家牛排连锁店。他们很恐慌。'
        },
        options: [
            { id: 'A', text: { en: 'lobbying: "Fund a lobby group to fight the tax. Claim it hurts farmers and poor families."', th: 'การวิ่งเต้น', zh: '游说' }, consequence: { en: '🛑 Political Gridlock. You delay the tax for 2 years. Public image turns negative ("Climate Deniers").', th: '🛑 ทางตันทางการเมือง', zh: '🛑 政治僵局。' }, stats: { competence: 40, ethics: -30, leadership: -20, innovation: -10 } },
            { id: 'B', text: { en: '🐔 Chicken Diversification: "Rebrand as a \'Grill House\'. Shift menu focus to chicken and fish (lower tax)."', th: '🐔 การกระจายความเสี่ยงไก่', zh: '🐔 鸡肉多样化' }, consequence: { en: '🔄 Adaptability. You survive the tax impact. loyal beef eaters leave, but new customers replace them.', th: '🔄 ความสามารถในการปรับตัว', zh: '🔄 适应性。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '💎 Premium Strategy: "Embrace the tax. Sell beef as a luxury \'treat\'. Raise prices even higher."', th: '💎 กลยุทธ์พรีเมียม', zh: '💎 高端策略' }, consequence: { en: '🥂 Upscale Win. Volume drops, margins soar. You become a special occasion destination.', th: '🥂 ชนะระดับบน', zh: '🥂 高端胜利。' }, stats: { competence: 45, ethics: 30, leadership: 45, innovation: 20 } },
            { id: 'D', text: { en: '🚜 Carbon Offsets: "Claim our beef is \'Net Zero\' by buying cheap forest credits. Exemption from tax?"', th: '🚜 ชดเชยคาร์บอน', zh: '🚜 碳抵消' }, consequence: { en: '🤥 Greenwashing Scandal. Journalists find your forest credits are fake. Tax applies anyway + fines.', th: '🤥 เรื่องอื้อฉาวฟอกเขียว', zh: '🤥 漂绿丑闻。' }, stats: { competence: 20, ethics: -40, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'consultant_034',
        text: {
            en: '🛰️ The Space Junk: A satellite internet company wants to launch 5,000 more mini-sats. Astronomers complain it ruins the night sky. Competitors warn of collision cascades (Kessler Syndrome).',
            th: '🛰️ ขยะอวกาศ: บริษัทอินเทอร์เน็ตผ่านดาวเทียมต้องการปล่อยดาวเทียมขนาดเล็กอีก 5,000 ดวง นักดาราศาสตร์บ่นว่าทำลายท้องฟ้า',
            zh: '🛰️ 太空垃圾：一家卫星互联网公司想再发射5000颗微型卫星。天文学家抱怨这破坏了夜空。竞争对手警告碰撞级联（凯斯勒综合症）。'
        },
        options: [
            { id: 'A', text: { en: '🌑 Dark Satellites: "Paint them black. Use sunshades. Minimize reflection. Launch anyway."', th: '🌑 ดาวเทียมมืด', zh: '🌑 黑暗卫星' }, consequence: { en: '🌒 Partial Fix. Astronomers still unhappy, but you show effort. Internet service goes global.', th: '🌒 แก้ไขบางส่วน', zh: '🌒 部分修复。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🚀 Full Speed: "Space is big. Critics are anti-progress. Connect the world!"', th: '🚀 เต็มสปีด', zh: '🚀 全速' }, consequence: { en: '💥 Orbit Crisis. A collision occurs in 3 years, creating debris that threatens ISS. Regulation hammers you.', th: '💥 วิกฤตวงโคจร', zh: '💥 轨道危机。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 10 } },
            { id: 'C', text: { en: '🚮 Debris Removal: "Commit to de-orbiting old sats immediately. Develop lasers to zap junk. Clean the path."', th: '🚮 การกำจัดขยะ', zh: '🚮 碎片清除' }, consequence: { en: '🧹 Space Steward. Expensive R&D, but you ensure long-term viability of Low Earth Orbit.', th: '🧹 ผู้ดูแลอวกาศ', zh: '🧹 太空管家。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '💰 Pay the Astronomers: "Donation to observatories. Buy them space telescopes. Quiet them with cash."', th: '💰 จ่ายนักดาราศาสตร์', zh: '💰 支付天文学家' }, consequence: { en: '🔭 Temporary Peace. Science community takes the money but still hates you. Tech issues remain solved.', th: '🔭 สันติภาพชั่วคราว', zh: '🔭 暂时和平。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'consultant_035',
        text: {
            en: '💼 The Return to Office: Post-pandemic, a tech client wants everyone back in the office 5 days/week. Employees threaten mass resignation. The CEO thinks WFH is "lazy".',
            th: '💼 การกลับเข้าออฟฟิศ: หลังการระบาด ลูกค้า Tech ต้องการให้ทุกคนกลับเข้าออฟฟิศ 5 วัน/สัปดาห์',
            zh: '💼 重返办公室：大流行后，一家科技客户希望每个人每周5天回到办公室。员工威胁要集体辞职。CEO认为在家工作是"懒惰"。'
        },
        options: [
            { id: 'A', text: { en: '👮 Mandatory Return: "Badge swipes tracked. If you don\'t come in, you resign. Rebuild culture."', th: '👮 บังคับกลับ', zh: '👮 强制返回' }, consequence: { en: '🚪 Talent Exodus. Top performers leave first. You are left with people who have no other options.', th: '🚪 การไหลออกของคนเก่ง', zh: '🚪 人才流失。' }, stats: { competence: 20, ethics: 20, leadership: -30, innovation: -40 } },
            { id: 'B', text: { en: '⚖️ Hybrid Model: "3 days in, 2 days remote. Anchor days for collaboration. Best of both worlds."', th: '⚖️ โมเดลลูกผสม', zh: '⚖️ 混合模式' }, consequence: { en: '🤝 Stability. Buying grumbles subside. Productivity remains high. The rational middle ground.', th: '🤝 ความมั่นคง', zh: '🤝 稳定。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 20 } },
            { id: 'C', text: { en: '🏠 All-Remote Pivot: "Close the HQ. Save $50M/year in rent. Hire globally. embrace the future."', th: '🏠 รีโมททั้งหมด', zh: '🏠 全远程转型' }, consequence: { en: '🌍 Global Talent unlock. Cost savings massive. Culture becomes transactional but efficient.', th: '🌍 ปลดล็อกคนเก่งทั่วโลก', zh: '🌍 全球人才解锁。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 50 } },
            { id: 'D', text: { en: '🎁 The Office Upgrade: "Free gourmet food, gym, childcare. Make the office better than home."', th: '🎁 อัปเกรดออฟฟิศ', zh: '🎁 办公室升级' }, consequence: { en: '🕍 Expensive Hub. People come for the perks. Culture improves, but costs skyrocket.', th: '🕍 ศูนย์กลางราคาแพง', zh: '🕍 昂贵的中心。' }, stats: { competence: 35, ethics: 30, leadership: 40, innovation: 10 } }
        ]
    },
    {
        id: 'consultant_036',
        text: {
            en: '🧬 The Gene Edited Baby: A biotech firm has CRSPR tech to edit embryos to prevent diseases. Wealthy clients ask if they can also edit for IQ and height. Regulations are silent.',
            th: '🧬 ทารกตัดต่อยีน: บริษัทไบโอเทคมีเทคโนโลยี CRSPR เพื่อตัดต่อตัวอ่อนเพื่อป้องกันโรค',
            zh: '🧬 基因编辑婴儿：一家生物技术公司拥有CRSPR技术，可以编辑胚胎以预防疾病。富有的客户询问他们是否也可以通过编辑来提高智商和身高。规则是沉默的。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Disease Only: "Strict ethical line. Cure Huntington\'s, yes. Blue eyes, no. Enforce it."', th: '🚫 โรคเท่านั้น', zh: '🚫 仅限疾病' }, consequence: { en: '🛡️ Respectable Science. You win Nobel potential. Revenue is lower, but humanity is safer.', th: '🛡️ วิทยาศาสตร์ที่น่าเคารพ', zh: '🛡️ 受人尊敬的科学。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'B', text: { en: '💰 Designer Babies: "The customer is always right. If they pay $1M for tall kids, do it. Secretly."', th: '💰 ทารกออกแบบ', zh: '💰 定制婴儿' }, consequence: { en: '🧟 Gataca Reality. Leak reveals "Superhuman" program. Global outrage. Labs burned down by mobs.', th: '🧟 ความจริง Gataca', zh: '🧟 加塔卡现实。' }, stats: { competence: 10, ethics: -50, leadership: -40, innovation: 30 } },
            { id: 'C', text: { en: '🚢 Offshore Lab: "Move operations to a jurisdiction with no laws. Offer full menu services."', th: '🚢 แล็บนอกชายฝั่ง', zh: '🚢 离岸实验室' }, consequence: { en: '🏴‍☠️ Bio-Pirates. Profitable but you are villains. Scientists refuse to work for you.', th: '🏴‍☠️ โจรสลัดชีวภาพ', zh: '🏴‍☠️ 生物海盗。' }, stats: { competence: 30, ethics: -30, leadership: -20, innovation: 20 } },
            { id: 'D', text: { en: '📜 Lobby for Regulation: "Pause all edits. Ask the UN to define the rules before we proceed."', th: '📜 วิ่งเต้นเพื่อกฎระเบียบ', zh: '📜 游说监管' }, consequence: { en: '🐢 Standardization. Slows progress by 10 years, but establishes you as the responsible leader.', th: '🐢 การทำให้เป็นมาตรฐาน', zh: '🐢 标准化。' }, stats: { competence: 40, ethics: 45, leadership: 40, innovation: 10 } }
        ]
    },
    {
        id: 'consultant_037',
        text: {
            en: '🎮 The Loot Box Ban: Several countries are banning "Loot Boxes" in games as gambling. Your client makes 80% of revenue from selling random card packs to kids.',
            th: '🎮 การแบนกล่องสุ่ม: หลายประเทศกำลังแบน "Loot Boxes" ในเกมว่าเป็นการพนัน',
            zh: '🎮以此 战利品箱禁令：几个国家正在禁止游戏中的"战利品箱"，视其为赌博。你的客户80%的收入来自向孩子出售随机卡包。'
        },
        options: [
            { id: 'A', text: { en: '🎁 Battle Pass Pivot: "Switch to a visible progression system. Pay to unlock clear rewards. No randomness."', th: '🎁 เปลี่ยนเป็น Battle Pass', zh: '🎁 战斗通行证转型' }, consequence: { en: '✅ Sustainable Model. Revenue drops initially, then stabilizes. Players perceive it as fairer.', th: '✅ โมเดลยั่งยืน', zh: '✅ 可持续模式。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🎰 X-Ray Mechanic: "Show contents BEFORE purchase. It is technically not gambling if they know what they buy."', th: '🎰 กลไก X-Ray', zh: '🎰透视机制' }, consequence: { en: '🧐 Loophole Exploit. Regulators squints but allow it. Addiction remains, ethics questionable.', th: '🧐 การใช้ช่องโหว่', zh: '🧐 漏洞利用。' }, stats: { competence: 40, ethics: 0, leadership: 20, innovation: 40 } },
            { id: 'C', text: { en: '🧑‍⚖️ Fight the Law: "It is \'Surprise Mechanics\', not gambling. Sue the governments."', th: '🧑‍⚖️ สู้กฎหมาย', zh: '🧑‍⚖️ 挑战法律' }, consequence: { en: '🔨 Judgment Day. Courts rule against you. Fines are massive. Forced to change mechanics in 24 hours.', th: '🔨 วันพิพากษา', zh: '🔨 审判日。' }, stats: { competence: 10, ethics: -20, leadership: -10, innovation: -10 } },
            { id: 'D', text: { en: '🔞 Age Gate: "Keep loot boxes but enforce strict 18+ ID verification. Lose the child market."', th: '🔞 จำกัดอายุ', zh: '🔞 年龄门槛' }, consequence: { en: '📉 Revenue Cliff. Kids were the whales using parents\' cards. You are ethical but poor.', th: '📉 หน้าผารายได้', zh: '📉 收入悬崖。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'consultant_038',
        text: {
            en: '📰 The Fake News Filter: A social network is pressured to remove fake news. Algorithms struggle to detect satire vs lies. Human moderators are traumatized. The CEO wants a "perfect" solution.',
            th: '📰 ตัวกรองข่าวปลอม: โซเชียลเน็ตเวิร์กถูกกดดันให้ลบข่าวปลอม อัลกอริทึมแยกแยะไม่ออก',
            zh: '📰 假新闻过滤器：一家社交网络被迫删除假新闻。算法难以区分讽刺和谎言。人工版主受到了创伤。CEO想要一个"完美"的解决方案。'
        },
        options: [
            { id: 'A', text: { en: '👥 Community Notes: "Crowdsource the truth. Let users add context notes to misleading posts."', th: '👥 บันทึกชุมชน', zh: '👥 社区笔记' }, consequence: { en: '🗳️ Democratic Truth. It works surprisingly well. Slow but scalable. Users trust it more than bans.', th: '🗳️ ความจริงประชาธิปไตย', zh: '🗳️ 民主真相。' }, stats: { competence: 50, ethics: 45, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '🤖 Aggressive AI: "Tune AI to delete anything suspicious. Better safe than sorry."', th: '🤖 AI ก้าวร้าว', zh: '🤖 激进AI' }, consequence: { en: '😶 Censorship Outcry. You accidentally ban the Onion and legitimate news. Users revolt.', th: '😶 การประท้วงการเซ็นเซอร์', zh: '😶 审查抗议。' }, stats: { competence: 20, ethics: 10, leadership: -10, innovation: 20 } },
            { id: 'C', text: { en: '🙈 Neutral Platform: "We are a pipe, not a publisher. Free speech absolute. Do nothing."', th: '🙈 แพลตฟอร์มเป็นกลาง', zh: '🙈 中立平台' }, consequence: { en: '🌪️ Advertiser Boycott. Coke and Disney do not want ads next to conspiracy theories. Revenue collapses.', th: '🌪️ การคว่ำบาตรของผู้โฆษณา', zh: '🌪️ 广告商抵制。' }, stats: { competence: 30, ethics: -20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🧠 Wellness Support: "Keep human mods but cap hours, double pay, and provide therapy. Improving the human layer."', th: '🧠 การสนับสนุนความเป็นอยู่', zh: '🧠虽然 健康支持' }, consequence: { en: '❤️ Ethical Operator. Expensive, but quality of moderation improves. Bad press about "PTSD factory" stops.', th: '❤️ ผู้ประกอบการที่มีจริยธรรม', zh: '❤️ 道德经营者。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 10 } }
        ]
    },
    {
        id: 'consultant_039',
        text: {
            en: '🚗 The EV Charger War: Your client builds EV chargers. There are 3 competing plug standards. Users are annoyed. They want to know: "Should we open our network to other cars?"',
            th: '🚗 สงครามที่ชาร์จ EV: ลูกค้าสร้างที่ชาร์จ EV มีมาตรฐานปลั๊ก 3 แบบที่แข่งกัน',
            zh: '🚗 电动汽车充电器大战：你的客户制造电动汽车充电器。有3种竞争的插头标准。用户很恼火。他们想知道："我们应该向其他汽车开放网络吗？"'
        },
        options: [
            { id: 'A', text: { en: '🔓 Universal Adapter: "Open the network to all. Become the \'Gas Station\' of the future. Volume over exclusivity."', th: '🔓 อะแดปเตอร์สากล', zh: '🔓 通用适配器' }, consequence: { en: '🌍 Infrastructure King. You win federal grants. Utilization rates soar. The standard war ends.', th: '🌍 ราชาโครงสร้างพื้นฐาน', zh: '🌍 基础设施之王。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'B', text: { en: '🔒 Exclusive Club: "Keep it for our car brand only. It is a selling point for the vehicle."', th: '🔒 คลับพิเศษ', zh: '🔒 专属俱乐部' }, consequence: { en: '🏝️ Walled Garden Shrunk. Governments mandate open standards. You are forced to open up later, losing the initiative.', th: '🏝️ สวนปิดหดตัว', zh: '🏝️ 围墙花园缩小。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '📼 Betamax Strategy: "License a proprietary better plug. Try to force everyone to switch to us."', th: '📼 กลยุทธ์ Betamax', zh: '📼 Betamax策略' }, consequence: { en: '📉 Obsolete. The industry picks the other standard. Your chargers become useless bricks.', th: '📉 ล้าสมัย', zh: '📉 过时。' }, stats: { competence: 10, ethics: 10, leadership: -20, innovation: 20 } },
            { id: 'D', text: { en: '🤝 Joint Venture: "Form a consortium with competitors to build a shared network. Share costs."', th: '🤝 การร่วมทุน', zh: '🤝 合资企业' }, consequence: { en: '⚖️ Rational Move. Slow rollout due to committees, but low risk. Market share is split.', th: '⚖️ การเคลื่อนไหวที่สมเหตุสมผล', zh: '⚖️ 理性举措。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'consultant_040',
        text: {
            en: '💊 The Lifetime Cure: A pharma client cures Hepatitis C with one pill. It costs $1,000 to make. It replaces a lifetime of treatment ($50k/year). If they cure everyone, revenue goes to zero.',
            th: '💊 การรักษาตลอดชีวิต: บริษัทยารักษาไวรัสตับอักเสบซีด้วยยาเม็ดเดียว ต้นทุน 1,000 ดอลลาร์',
            zh: '💊 终身治愈：一家制药客户用一种药丸治愈了丙型肝炎。制造成本为1000美元。它取代了终身治疗（每年5万美元）。如果他们治愈了所有人，收入将归零。'
        },
        options: [
            { id: 'A', text: { en: '💰 The $80,000 Pill: "Price it at value, not cost. Charge $80k. Insurers will pay to avoid long-term costs."', th: '💰 ยาเม็ดละ 80,000', zh: '💰 8万美元的药丸' }, consequence: { en: '📈 Blockbuster. Outrage at price, but economics work. You cure the disease and make billions before patent expires.', th: '📈 ระเบิดรายได้', zh: '📈 大片。' }, stats: { competence: 50, ethics: 10, leadership: 30, innovation: 40 } },
            { id: 'B', text: { en: '📉 Subscription Model: "Do not sell the pill. \'Lease\' the cure over 5 years of payments. Guaranteed cash flow."', th: '📉 โมเดลสมัครสมาชิก', zh: '📉 订阅模式' }, consequence: { en: '🤔 Financial Engineering. Patients hate it ("mortgage on my liver?"). Regulators investigate.', th: '🤔 วิศวกรรมการเงิน', zh: '🤔 金融工程。' }, stats: { competence: 30, ethics: -10, leadership: 10, innovation: 20 } },
            { id: 'C', text: { en: '😇 Access at Cost: "Sell at $2,000. Public health victory. Rely on goodwill for future drugs."', th: '😇 ขายเท่าทุน', zh: '😇 成本价销售' }, consequence: { en: '📉 Stock Crash. Shareholders sue for breach of fiduciary duty. You are a saint, but a fired saint.', th: '📉 หุ้นตก', zh: '📉 股市崩盘。' }, stats: { competence: 10, ethics: 50, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🔒 Withhold the Cure: "Focus on chronic treatments instead. Curing patients is a bad business model."', th: '🔒 ระงับการรักษา', zh: '🔒 隐瞒治愈方法' }, consequence: { en: '🛑 Evil Incarnate. Whistleblower leaks this decision. The company is destroyed by the scandal.', th: '🛑 ปีศาจจุติ', zh: '🛑 邪恶化身。' }, stats: { competence: 0, ethics: -50, leadership: -50, innovation: -10 } }
        ]
    },
    {
        id: 'consultant_041',
        text: {
            en: '🏢 The Empty Skyscraper: A client built a 100-story office tower just as remote work peaked. It is 80% empty. The bank is calling the loan.',
            th: '🏢 ตึกระฟ้าว่างเปล่า: ลูกค้าสร้างอาคารสำนักงาน 100 ชั้นพอดีกับที่งานรีโมทพุ่งสูงสุด ว่าง 80% ธนาคารเรียกคืนเงินกู้',
            zh: '🏢 空置的摩天大楼：一位客户在远程工作达到顶峰时建造了一座100层的办公大楼。它80%是空的。银行正在催收贷款。'
        },
        options: [
            { id: 'A', text: { en: '🏘️ Residential Conversion: "Convert offices to luxury apartments. Expensive plumbing retrofit, but high demand."', th: '🏘️ แปลงเป็นที่อยู่อาศัย', zh: '🏘️ 住宅改造' }, consequence: { en: '🏗️ Saved asset. The city supports it to solve housing crisis. Building fills up.', th: '🏗️ สินทรัพย์ที่ถูกบันทึก', zh: '🏗️ 挽救资产。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 40 } },
            { id: 'B', text: { en: '🏨 Hotel/Casino Pivot: "Make it a destination. High-end hotel and entertainment complex."', th: '🏨 เปลี่ยนเป็นโรงแรม/คาสิโน', zh: '🏨 酒店/赌场转型' }, consequence: { en: '🎲 Regulatory Gamble. Zoning laws might block it. High risk, high reward.', th: '🎲 การพนันกฎระเบียบ', zh: '🎲 监管赌博。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 30 } },
            { id: 'C', text: { en: '📉 Fire Sale Leases: "Offer 5 years free rent. Fill the building at any cost to appease the bank."', th: '📉 สัญญาเช่าลดราคา', zh: '📉 甩卖租赁' }, consequence: { en: '💸 Race to Bottom. You devalue the asset permanently. Other tenants demand cuts. Death spiral.', th: '💸 แข่งกันลงเหว', zh: '💸 逐底竞争。' }, stats: { competence: 10, ethics: 30, leadership: -10, innovation: -10 } },
            { id: 'D', text: { en: '🌱 Vertical Farm: "Grow lettuces on 50 floors. Food security + green tech grants."', th: '🌱 ฟาร์มแนวตั้ง', zh: '🌱 垂直农场' }, consequence: { en: '🥬 Niche Success. It does not pay clear Class A office rents, but covers the mortgage. PR gold.', th: '🥬 ความสำเร็จเฉพาะกลุ่ม', zh: '🥬 利基成功。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'consultant_042',
        text: {
            en: '🛳️ The Panama Canal Jam: A drought limits ship traffic. Your client\'s cargo is stuck. They can: wait (uncertain), go around Cape Horn (expensive/slow), or air lift (insanely expensive).',
            th: '🛳️ ปานามาคลองติดขัด: ภัยแล้งจำกัดการจราจรเรือ สินค้าของลูกค้าติดอยู่',
            zh: '🛳️ 巴拿马运河拥堵：干旱限制了船舶通行。你客户的货物被困住了。他们可以：等待（不确定），绕过合恩角（昂贵/缓慢），或空运（极其昂贵）。'
        },
        options: [
            { id: 'A', text: { en: '✈️ Air Lift VIPs: "Fly the high-margin electronics. Ship the furniture around Africa. Split the logistics."', th: '✈️ ขนส่ง VIP ทางอากาศ', zh: '✈️ 空运VIP' }, consequence: { en: '📦 Optimized Pain. Profits take a hit, but key customers get their iPhones. Furniture buyers wait.', th: '📦 ความเจ็บปวดที่ปรับให้เหมาะสม', zh: '📦 优化的痛苦。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🌍 The Arctic Route: "Global warming opened the Northern passage. Risky, but shorter. Go North."', th: '🌍 เส้นทางอาร์กติก', zh: '🌍 北极航线' }, consequence: { en: '❄️ Icy Gamble. Insurance premiums skyrocket. Environmentalists protest. But you arrive first.', th: '❄️ การพนันน้ำแข็ง', zh: '❄️ 冰冷的赌博。' }, stats: { competence: 35, ethics: -20, leadership: 20, innovation: 40 } },
            { id: 'C', text: { en: '⏳ Wait it Out: "It will rain eventually. Do not panic spend."', th: '⏳ รอไปก่อน', zh: '⏳ 等待' }, consequence: { en: '🦴 Stockout. Competitors who moved fast steal your shelf space. You save shipping costs but lose revenue.', th: '🦴 สินค้าหมด', zh: '🦴 缺货。' }, stats: { competence: 10, ethics: 20, leadership: 0, innovation: -10 } },
            { id: 'D', text: { en: '🚂 Intermodal Land Bridge: "Unload in LA, rail across USA, reload in NY. The \'Land Canal\'."', th: '🚂 สะพานบก', zh: '🚂 多式联运陆桥' }, consequence: { en: '🚆 Logistics Win. Complex to coordinate, but faster than sailing around continents. Solid consulting.', th: '🚆 ชนะโลจิสติกส์', zh: '🚆 物流胜利。' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 30 } }
        ]
    },
    {
        id: 'consultant_043',
        text: {
            en: '🥃 The Whiskey Bubble: Whiskey investment is hot. A client wants to release a "$5,000 Limited Edition" bottle. The whiskey inside is only 5 years old (usually adds value at 12+). Marketing says "Storytelling matters more than age".',
            th: '🥃 ฟองสบู่วิสกี้: การลงทุนวิสกี้กำลังฮอต ลูกค้าต้องการปล่อยขวด "Limited Edition 5,000 ดอลลาร์"',
            zh: '🥃 威士忌泡沫：威士忌投资很热。一位客户想发布一瓶"5000美元限量版"。里面的威士忌只有5年陈酿（通常12年以上才增值）。营销部门说"讲故事比年份更重要"。'
        },
        options: [
            { id: 'A', text: { en: '🏷️ The Hype Launch: "Fancy crystal bottle. NFT attached. Hire a celebrity. Ignore the liquid quality."', th: '🏷️ การเปิดตัว Hype', zh: '🏷️ 炒作发布' }, consequence: { en: '💸 Short Term Cash. Collectors buy it unopened. Drinkers review it as "mouthwash". Brand equity damaged.', th: '💸 เงินสดระยะสั้น', zh: '💸 短期现金。' }, stats: { competence: 30, ethics: -10, leadership: 10, innovation: 20 } },
            { id: 'B', text: { en: '🛑 Wait 7 Years: "Do not sell junk. Wait until it is 12 years old. Protecting the legacy is key."', th: '🛑 รอ 7 ปี', zh: '🛑 等7年' }, consequence: { en: '⏳ Opportunity Cost. The whiskey boom might be over by then. But you maintain integrity.', th: '⏳ ต้นทุนค่าเสียโอกาส', zh: '⏳ 机会成本。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '⚗️ Secondary Finish: "Finish it in rare sherry casks for 6 months. Flavor improves rapidly. Market the \'Unique Finish\'."', th: '⚗️ การจบรอง', zh: '⚗️ 二次精通过' }, consequence: { en: '🥃 Credible Pivot. Enthusiasts respect unique casks. Can justify a premium price (maybe $500, not $5k).', th: '🥃 การเปลี่ยนทิศที่น่าเชื่อถือ', zh: '🥃 可信的转型。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '🧴 The Blender\'s Art: "Buy old barrels from others and blend. Sell as \'Master Blend\'. Best of both worlds."', th: '🧴 ศิลปะนักผสม', zh: '🧴 调酒师的艺术' }, consequence: { en: '🤝 Industry Standard. Solid product, good price. A safe, successful launch.', th: '🤝 มาตรฐานอุตสาหกรรม', zh: '🤝 行业标准。' }, stats: { competence: 45, ethics: 40, leadership: 35, innovation: 20 } }
        ]
    },
    {
        id: 'consultant_044',
        text: {
            en: '✈️ The Supersonic Return: A startup wants to bring back supersonic passenger flights (Concorde 2.0). Fuel costs are insane. Tickets would be $10,000. Is there a market?',
            th: '✈️ การกลับมาของความเร็วเหนือเสียง: สตาร์ทอัพต้องการนำเที่ยวบินผู้โดยสารความเร็วเหนือเสียงกลับมา',
            zh: '✈️ 超音速回归：一家初创公司希望恢复超音速客运航班（协和式2.0）。燃料成本疯狂。机票将在1万美元。有市场吗？'
        },
        options: [
            { id: 'A', text: { en: '🤵 Corporate Jets Only: "Forget commercial airlines. Sell directly to billionaires as private jets. Price inelastic."', th: '🤵 เครื่องบินเจ็ตองค์กรเท่านั้น', zh: '🤵 仅限公务机' }, consequence: { en: '🚀 Niche Domination. You sell 50 planes. Profitability achieved. Mass travel can wait.', th: '🚀 การครอบครองเฉพาะกลุ่ม', zh: '🚀 利基主导。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 } },
            { id: 'B', text: { en: '🎟️ The "Time Poor" Executive: "Target London-NY route only. 3 hours. Bankers will pay anything."', th: '🎟️ ผู้บริหารที่ขาดเวลา', zh: '🎟️ "时间贫乏"的高管' }, consequence: { en: '📉 Zoom Killer. Video calls made business travel less urgent. Demand is softer than expected. Struggle.', th: '📉 นักฆ่า Zoom', zh: '📉 Zoom杀手。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🌱 Green Supersonic: "Wait for Bio-fuel or Hydrogen tech. Supersonic is too polluting for modern PR."', th: '🌱 ซูเปอร์โซนิกสีเขียว', zh: '🌱 绿色超音速' }, consequence: { en: '🐢 Delayed Launch. You miss the current cycle, but future-proof the business against carbon taxes.', th: '🐢 การเปิดตัวล่าช้า', zh: '🐢 延迟发布。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '📉 Economy Class Cram: "Fit 200 seats. Lower price to $2,000. Democratize speed."', th: '📉 ชั้นประหยัดอัดแน่น', zh: '📉 经济舱拥挤' }, consequence: { en: '🤢 Vomit Comet. Weight issues mean no range. Claustrophobia. Failed business model.', th: '🤢 ดาวหางอาเจียน', zh: '🤢 呕吐彗星。' }, stats: { competence: 10, ethics: 20, leadership: -10, innovation: -10 } }
        ]
    },
    {
        id: 'consultant_045',
        text: {
            en: '📱 The "Un-cancelable" Influencer: A controversial influencer wants to launch a brand. They are banned from Instagram/YouTube. They have 10M email subscribers.',
            th: '📱 ผู้มีอิทธิพลที่ "ยกเลิกไม่ได้": ผู้มีอิทธิพลที่เป็นที่ถกเถียงต้องการเปิดตัวแบรนด์',
            zh: '📱 "不可取消"的网红：一位有争议的网红想推出一个品牌。他们被禁止使用Instagram/YouTube。他们有1000万电子邮件订阅者。'
        },
        options: [
            { id: 'A', text: { en: '📧 Own Platform: "Build a direct-to-consumer app/site. No middlemen. Censorship-resistant."', th: '📧 แพลตฟอร์มตัวเอง', zh: '📧 自有平台' }, consequence: { en: '🏰 Fortress. High dev costs, but extremely high margin and loyalty. The "Creator Economy" endgame.', th: '🏰 ป้อมปราการ', zh: '🏰 堡垒。' }, stats: { competence: 50, ethics: 30, leadership: 45, innovation: 50 } },
            { id: 'B', text: { en: '🤝 Apology Tour: "Beg for forgiveness. Donate to charities. Try to get unbanned."', th: '🤝 ทัวร์ขอโทษ', zh: '🤝 道歉之旅' }, consequence: { en: '🤡 Weakness. Fans hate the groveling. Platforms ignore you anyway. Lose-lose.', th: '🤡 ความอ่อนแอ', zh: '🤡 软弱。' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: -10 } },
            { id: 'C', text: { en: '🗣️ Free Speech Alternative: "Move to Rumble/Truth/X. Smaller audience but highly aligned."', th: '🗣️ ทางเลือกเสรีภาพในการพูด', zh: '🗣️ 言论自由替代方案' }, consequence: { en: '📢 Echo Chamber. You monetize the core base well, but zero growth potential.', th: '📢 ห้องเสียงสะท้อน', zh: '📢 回声室。' }, stats: { competence: 35, ethics: 20, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🎭 Ghost Brand: "Launch the product under a fake name. Do not associate with the influencer explicitly."', th: '🎭 แบรนด์ผี', zh: '🎭 幽灵品牌' }, consequence: { en: '👻 Zero Marketing. Without the influencer\'s face, it is just generic junk. Sales flatline.', th: '👻 ศูนย์การตลาด', zh: '👻 零营销。' }, stats: { competence: 15, ethics: -10, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'consultant_046',
        text: {
            en: '🌳 The Carbon Credit Wild West: A client wants to buy "Rainforest Credits" to claim Carbon Neutrality. You find out 90% of these credits are "phantom" (the trees were never in danger).',
            th: '🌳 ตะวันตกป่าเถื่อนเครดิตคาร์บอน: ลูกค้าต้องการซื้อ "เครดิตป่าฝน" เพื่ออ้างความเป็นกลางทางคาร์บอน',
            zh: '🌳 碳信用狂野西部：一位客户想购买"雨林信用"以声称碳中和。你发现这些信用中有90%是"幽灵"（树木从未处于危险之中）。'
        },
        options: [
            { id: 'A', text: { en: '🙈 Buy and Deny: "Everyone buys them. The certifier says they are valid. Not our job to audit the forest."', th: '🙈 ซื้อและปฏิเสธ', zh: '🙈 购买并否认' }, consequence: { en: '📰 Investigative Expo. "Guardian" writes an expose. Greenwashing shame. Reputational damage.', th: '📰 งานแสดงการสืบสวน', zh: '📰 调查博览会。' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '📉 Direct Removal: "Focus on Carbon Capture (DAC) instead. Expensive ($500/ton vs $5/ton) but real."', th: '📉 การกำจัดโดยตรง', zh: '📉 直接清除' }, consequence: { en: '💎 Gold Standard. You cannot offset everything (too expensive), but what you do is bulletproof. Leaders respect this.', th: '💎 มาตรฐานทองคำ', zh: '💎 黄金标准。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '📉 Reduce First: "Do not offset yet. Spend the budget reducing actual emissions. Only offset the unavoidable residual."', th: '📉 ลดก่อน', zh: '📉以此 先减少' }, consequence: { en: '📉 Radical Honesty. Emissions drop 30%. You don\'t get the "Neutral" sticker yet, but you save money and planet.', th: '📉 ความซื่อสัตย์รุนแรง', zh: '📉 激进的诚实。' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '🕵️ Proprietary Audit: "Send drones to count trees ourselves. Find high-quality credits only."', th: '🕵️ การตรวจสอบที่เป็นกรรมสิทธิ์', zh: '🕵️ 专有审计' }, consequence: { en: '🔍 Due Diligence. You find the 10% good credits. Prudent risk management.', th: '🔍 การตรวจสอบสถานะ', zh: '🔍 尽职调查。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 30 } }
        ]
    },
    {
        id: 'consultant_047',
        text: {
            en: '🎮 The Metaverse Real Estate: It is 2021. A client wants to spend $10M buying "Land" in a blocky virtual world. They fear FOMO.',
            th: '🎮 อสังหาริมทรัพย์ Metaverse: ปี 2021 ลูกค้าต้องการใช้เงิน 10 ล้านซื้อ "ที่ดิน" ในโลกเสมือน',
            zh: '🎮 元宇宙房地产：那是2021年。一位客户想花1000万美元在一个块状虚拟世界中购买"土地"。他们害怕错失恐惧症（FOMO）。'
        },
        options: [
            { id: 'A', text: { en: '🌌 All In: "Digital is the future. Ideally next to Snoop Dogg\'s virtual mansion."', th: '🌌 ทุ่มหมดหน้าตัก', zh: '🌌以此 全部投入' }, consequence: { en: '📉 Asset Zero. By 2023, the land is worth $500. A 99.9% loss. You look like a fool.', th: '📉 สินทรัพย์ศูนย์', zh: '📉 资产归零。' }, stats: { competence: 10, ethics: 20, leadership: -40, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Reality Check: "The active user count is 38 people. Do not buy. Rent if you must do an event."', th: '🛑 ตรวจสอบความจริง', zh: '🛑 现实检查' }, consequence: { en: '🧠 Voice of Reason. Client is annoyed initially, then thankful when the bubble bursts. Trust earned.', th: '🧠 เสียงแห่งเหตุผล', zh: '🧠 理性的声音。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '👾 Build an Experience: "Don\'t buy land. Pay devs to build a game on Roblox. That is where the kids actually are."', th: '👾 สร้างประสบการณ์', zh: '👾 打造体验' }, consequence: { en: '🎮 Real Engagement. 50M visits. Actual brand value. Understanding the difference between hype and traffic.', th: '🎮 การมีส่วนร่วมจริง', zh: '🎮 真正的参与。' }, stats: { competence: 50, ethics: 30, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '🖼️ NFT Collection: "Launch branded NFTs instead. Low cost to mint. High upside if they flip."', th: '🖼️ คอลเลกชัน NFT', zh: '🖼️ NFT系列' }, consequence: { en: '🎢 Rug Pull Vibes. Quick cash, but brand feels "scammy". Value evaporates quickly.', th: '🎢 ความรู้สึกดึงพรม', zh: '🎢以此 拉地毯的感觉。' }, stats: { competence: 20, ethics: -10, leadership: -10, innovation: 20 } }
        ]
    },
    {
        id: 'consultant_048',
        text: {
            en: '🥤 The Sugar Tax Reformulation: A country introduces a heavy tax on drinks with >5g sugar. Your soda has 40g. Taste is king, but the tax doubles the price.',
            th: '🥤 การปรับสูตรภาษีน้ำตาล: ประเทศหนึ่งแนะนำภาษีหนักสำหรับเครื่องดื่มที่มีน้ำตาล >5g',
            zh: '🥤 糖税重新制定：一个国家对含糖量超过5克的饮料征收重税。你的苏打水有40克。口味为王，但税收使价格翻倍。'
        },
        options: [
            { id: 'A', text: { en: '🧪 Stevia Switch: "Replace sugar with Stevia. Zero tax. 100% margin retention."', th: '🧪 เปลี่ยนเป็นหญ้าหวาน', zh: '🧪 甜菊糖转换' }, consequence: { en: '🤢 Aftertaste. Sales drop 15% because it tastes "off". But you survive.', th: '🤢 รสชาติหลังดื่ม', zh: '🤢 余味。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '📏 Size Reduction: "Sell smaller cans (250ml). Total sugar per serving drops? No, tax is per gram. Wait..."', th: '📏 ลดขนาด', zh: '📏 尺寸减小' }, consequence: { en: '🧮 Math Fail. Tax is usually per volume or concentration. You still get taxed. Competence hit.', th: '🧮 คณิตศาสตร์ล้มเหลว', zh: '🧮 数学失败。' }, stats: { competence: 10, ethics: 20, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '💰 Premium Indulgence: "Keep the sugar. Accept the tax. Market it as \'Original Taste\'. Coke Classic did it."', th: '💰 ความดื่มด่ำระดับพรีเมียม', zh: '💰以此 高端享受' }, consequence: { en: '🏆 Authenticity Win. People pay for the real thing. Competitors ruin their taste with sweeteners.', th: '🏆 ชนะความแท้จริง', zh: '🏆以此 真实性胜利。' }, stats: { competence: 50, ethics: 20, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '🧪 Hybrid Blend: "Mix 20g sugar + sweeteners. Best of both worlds? Lower tax + okay taste."', th: '🧪 ส่วนผสมไฮบริด', zh: '🧪 混合调配' }, consequence: { en: '😐 Bland Middle. Neither healthy nor tasty. Forgettable excellence.', th: '😐 ตรงกลางจืดชืด', zh: '😐 平淡的中庸。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'consultant_049',
        text: {
            en: '🧠 The Neuro-Link Pilot: A tech firm wants human volunteers for a brain chip implant. It allows telepathic typing. Animal trials had mixed results (some monkeys seemed... sad?).',
            th: '🧠 โครงการนำร่อง Neuro-Link: บริษัทเทคต้องการอาสาสมัครมนุษย์สำหรับฝังชิปในสมอง',
            zh: '🧠 神经链接试点：一家科技公司想要人类志愿者植入脑芯片。它允许心灵感应打字。动物试验结果好坏参半（有些猴子看起来……很悲伤？）。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Accelerate Human Trials: "We need data. Offer $100k to volunteers. Move fast."', th: '🚀 เร่งการทดลองมนุษย์', zh: '🚀 加速人体试验' }, consequence: { en: '🧠 Brain Hemorrhage. A volunteer suffers damage. Program halted. PR cataclysm.', th: '🧠 เลือดออกในสมอง', zh: '🧠 脑出血。' }, stats: { competence: 20, ethics: -50, leadership: -20, innovation: 20 } },
            { id: 'B', text: { en: '🐒 More Animal Data: "Do not touch humans yet. Spend 2 more years on primates. Safety is paramount."', th: '🐒 ข้อมูลสัตว์เพิ่มเติม', zh: '🐒 更多动物数据' }, consequence: { en: '🛡️ Rigorous Science. Investors impatient, but you avoid killing someone. Long-term viable.', th: '🛡️ วิทยาศาสตร์ที่เข้มงวด', zh: '🛡️ 严谨的科学。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🤖 Non-Invasive Pivot: "Focus on a headset that reads waves from outside. Slower, but no surgery."', th: '🤖 เปลี่ยนเป็นไม่รุกล้ำ', zh: '🤖 非侵入性转型' }, consequence: { en: '🧢 Consumer Product. It works! Sell it as a gaming controller. Safe, profitable, scalable.', th: '🧢 ผลิตภัณฑ์ผู้บริโภค', zh: '🧢 消费产品。' }, stats: { competence: 45, ethics: 50, leadership: 45, innovation: 40 } },
            { id: 'D', text: { en: '🩺 Medical Only: "Target only paralyzed patients who have no other choice. FDA breakthrough status."', th: '🩺 การแพทย์เท่านั้น', zh: '🩺 仅限医疗' }, consequence: { en: '🏥 Compassionate Use. High risk accepted for high reward (restoring speech). Ethical alignment.', th: '🏥 การใช้ด้วยความเมตตา', zh: '🏥以此 同情用药。' }, stats: { competence: 45, ethics: 45, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'consultant_050',
        text: {
            en: '🚀 The Mars Colony: A billionaire wants to send a one-way colonization mission to Mars. He asks you to select the crew. He wants "High IQ, high risk tolerance".',
            th: '🚀 อาณานิคมดาวอังคาร: มหาเศรษฐีต้องการส่งภารกิจตั้งถิ่นฐานเที่ยวเดียวไปดาวอังคาร',
            zh: '🚀 火星殖民地：一位亿万富翁想向火星派遣单程殖民任务。他让你挑选船员。他想要"高智商，高风险承受力"。'
        },
        options: [
            { id: 'A', text: { en: '🧠 Selecting Geniuses: "Pick 100 introverted scientists. Maximize problem solving."', th: '🧠 เลือกอัจฉริยะ', zh: '🧠 选择天才' }, consequence: { en: '🔥 Social Breakdown. No social skills. They kill each other within 6 months due to interpersonal conflict.', th: '🔥 สังคมล้มเหลว', zh: '🔥 社会崩溃。' }, stats: { competence: 20, ethics: 20, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '💪 Selecting Survivors: "Pick ex-military, Antarctic researchers, rig workers. Toughness over IQ."', th: '💪 เลือกผู้รอดชีวิต', zh: '💪 选择幸存者' }, consequence: { en: '🛠️ Survival! They fix the broken airlock. They survive the dust storm. The colony lives.', th: '🛠️ การอยู่รอด!', zh: '🛠️ 生存！' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '💑 Genetic Diversity: "Select young couples with diverse genetics. Focus on reproduction capability."', th: '💑 ความหลากหลายทางพันธุกรรม', zh: '💑 遗传多样性' }, consequence: { en: '👶 First Mars Baby. PR gold. But resources are strained by childcare. Risky.', th: '👶 ทารกดาวอังคารคนแรก', zh: '👶 第一个火星婴儿。' }, stats: { competence: 30, ethics: 10, leadership: 20, innovation: 20 } },
            { id: 'D', text: { en: '📸 Influencer Crew: "Send famous people. The content will fund the mission."', th: '📸 ลูกเรือ Influencer', zh: '📸 网红船员' }, consequence: { en: '📺 Reality TV Tragedy. Great ratings until the oxygen scrubber fails and they livestream their panic.', th: '📺 โศกนาฏกรรมเรียลลิตี้ทีวี', zh: '📺 真人秀悲剧。' }, stats: { competence: 10, ethics: -20, leadership: -20, innovation: 0 } }
        ]
    }
];

