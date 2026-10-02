// Biologist Career Questions
// Ultra-Comprehensive set: 50 detailed, story-rich questions
// Each scenario is a mini-case study with deep consequences and realistic stat impacts

export const biologistQuestions = [

    // SECTION 1: LABORATORY RESEARCH & ACADEMIC STRUGGLES (Questions 1-10)

    {
        id: 'bi_001',
        text: {
            en: '🧪 The Contaminated Culture: You\'ve spent 4 months and $12,000 in grant money culturing a rare strain of bioluminescent fungi. Two days before the final observation, you notice a strange white fuzzy growth in the corner of one petri dish. It looks like common Penicillium contamination. If you report it, you lose the funding and the paper. If you"clean"the data, no one might ever know.',
            th: '🧪 เชื้อปนเปื้อน: คุณใช้เวลา 4 เดือนและเงินทุน $12,000 ในการเพาะเลี้ยงราเรืองแสงหายาก สองวันก่อนการสังเกตการณ์ครั้งสุดท้าย คุณสังเกตเห็นการเจริญเติบโตสีขาวแปลกๆ ที่มุมจานเพาะเชื้อหนึ่งจาน มันดูเหมือนการปนเปื้อนของ Penicillium ทั่วไป หากคุณรายงาน คุณจะสูญเสียเงินทุนและบทความ หากคุณ"ทำความสะอาด"ข้อมูล อาจไม่มีใครรู้เลย',
            zh: '🧪 受污染的培养物：你花了4个月和1.2万美元的赠款培养了一种稀有的生物发光真菌。在最后一次观察前两天，你注意到一个培养皿的角落里有奇怪的白色绒毛生长。它看起来像常见的青霉菌污染。如果你报告它，你就会失去资金和论文。如果你"清理"数据，可能永远没人知道。'
        },
        options: [
            { id: 'A', text: { en: '📋 Radical Transparency:"Report the contamination immediately, retract the preliminary findings, and start over from the backup spores. Integrity comes first."', th: '📋 ความโปร่งใสอย่างที่สุด:"รายงานการปนเปื้อนทันที ถอนผลการวิจัยเบื้องต้น และเริ่มใหม่จากสปอร์สำรอง ความซื่อสัตย์ต้องมาก่อน"', zh: '📋 极端透明："立即报告污染，撤回初步发现，并从备份孢子重新开始。诚信第一。"' }, consequence: { en: '✅ Academic Respect Gained! Your PI is disappointed but impressed by your honesty. You lose 6 months of work, but your reputation for RIGOR leads to a bigger $50k grant later. The clean results you finally get are ground-breaking. No retractions needed later.', th: '✅ ได้รับความเคารพทางวิชาการ! PI ของคุณผิดหวังแต่ประทับใจในความซื่อสัตย์ของคุณ คุณเสียเวลา 6 เดือน แต่ชื่อเสียงเรื่องความเข้มงวดนำไปสู่เงินทุน $50k ที่ใหญ่กว่าเดิมในภายหลัง ผลลัพธ์ที่สะอาดที่คุณได้รับในที่สุดนั้นเป็นการค้นพบที่ยิ่งใหญ่ ไม่ต้องถอนงานวิจัยทีหลัง', zh: '✅ 获得学术尊重！你的PI虽然失望但对你的诚实印象深刻。你损失了6个月的工作，但你严谨的名声后来为你带来了更大的5万美元赠款。你最终获得的干净结果是开创性的。以后不需要撤稿。' }, stats: { competence: 35, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '🔬 The"Surgical"Extraction:"Carefully remove the contaminated section and proceed with the remaining 95% of the culture. It\'s a minor anomaly that doesn\'t affect the core hypothesis."', th: '🔬 การสกัดแบบ"ศัลยกรรม":"นำส่วนที่ปนเปื้อนออกอย่างระมัดระวังและดำเนินการต่อด้วยเชื้อที่เหลือ 95% มันเป็นความผิดปกติเล็กน้อยที่ไม่ส่งผลต่อสมมติฐานหลัก"', zh: '🔬"外科"提取："仔细移除受污染的部分，并继续处理剩余95%的培养物。这是一个不影响核心假设的小异常。"' }, consequence: { en: '⚠️ Hidden Variables! The paper is published in Nature. You get the acclaim. However, 2 years later, a replication study fails because they can\'t recreate your results. An investigation finds traces of Penicillium by-products in your original samples. You aren\'t fired, but you are"under watch"for 5 years.', th: '⚠️ ตัวแปรที่ซ่อนอยู่! บทความได้รับการตีพิมพ์ใน Nature คุณได้รับคำชื่นชม อย่างไรก็ตาม 2 ปีต่อมา การศึกษาซ้ำล้มเหลวเพราะพวกเขาไม่สามารถสร้างผลลัพธ์ของคุณขึ้นมาใหม่ได้ การตรวจสอบพบร่องรอยของผลพลอยได้จาก Penicillium ในตัวอย่างดั้งเดิมของคุณ คุณไม่ถูกไล่ออกแต่ถูก"จับตามอง"เป็นเวลา 5 ปี', zh: '⚠️ 隐藏变量！论文发表在《自然》杂志上。你获得了赞誉。然而，2年后，一项复制研究失败了，因为他们无法重现你的结果。一项调查在你的原始样本中发现了青霉菌副产物的痕迹。你没有被解雇，但你被"监视"了5年。' }, stats: { competence: 40, ethics: 15, leadership: 20, innovation: 45 } },
            { id: 'C', text: { en: '🧪 The Comparative Pivot:"Don\'t hide it—study it! Change the thesis to: \'Interspecies competition between rare fungi and Penicillium.\' Use the contamination as a data point."', th: '🧪 การเปลี่ยนทิศทางแบบเปรียบเทียบ:"อย่าซ่อนมัน—จงศึกษามัน! เปลี่ยนหัวข้อวิทยานิพนธ์เป็น: \'การแข่งขันข้ามสายพันธุ์ระหว่างราหายากและ Penicillium\' ใช้การปนเปื้อนเป็นจุดข้อมูล"', zh: '🧪 比较转向："不要隐藏它——研究它！将论文题目改为：\'稀有真菌与青霉菌之间的种间竞争\'。将污染作为数据点。"' }, consequence: { en: '🌟 Innovation Goldmine! You discover that the rare fungi actually produce a unique antibiotic to fight the Penicillium. Your"failure"turns into a patent for a new class of antifungal drugs. You get $100k in seed funding for a biotech startup. You turned a disaster into a career peak.', th: '🌟 ขุมทองแห่งนวัตกรรม! คุณค้นพบว่าราหายากนั้นสร้างยาปฏิชีวนะที่เป็นเอกลักษณ์เพื่อสู้กับ Penicillium"ความล้มเหลว"ของคุณกลายเป็นสิทธิบัตรสำหรับยากลุ่มใหม่ คุณได้รับเงินทุน $100k สำหรับสตาร์ทอัพไบโอเทค คุณเปลี่ยนหายนะให้กลายเป็นจุดสูงสุดของอาชีพ', zh: '🌟 创新金矿！你发现稀有真菌实际上会产生一种独特的抗生素来对抗青霉菌。你的"失败"变成了一项新型抗真균药物的专利。你获得了10万美元的生物技术创业种子资金。你将灾难变成了职业巅峰。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '🗑️ The Total Wipeout:"Incinerate the sample. Disinfect the entire lab. Tell the grant board there was a power failure that killed the climate control. Ask for an extension."', th: '🗑️ การทำลายหลักฐาน:"เผาตัวอย่าง ฆ่าเชื้อทั้งห้องแล็บ บอกคณะกรรมการทุนว่าเกิดไฟดับทำให้ระบบควบคุมอุณหภูมิเสีย ขอขยายเวลา"', zh: '🗑️ 全面清除："焚烧样本。对整个实验室进行消毒。告诉赠款委员会发生了断电，导致气候控制失效。申请延期。"' }, consequence: { en: '💀 Moral Decay! The board grants the extension. You spend the next 6 months living a lie, terrified someone will check the power logs. The stress makes your actual work sloppy. You eventually finish, but your mental health is wrecked. You\'ve lost the joy of discovery for the safety of a paycheck.', th: '💀 ความเสื่อมถอยทางศีลธรรม! คณะกรรมการยอมให้ขยายเวลา คุณใช้เวลา 6 เดือนข้างหน้าอยู่กับคำลวง กลัวว่าจะมีคนมาเช็กบันทึกการใช้ไฟ ความเครียดทำให้งานจริงของคุณสะเพร่า ในที่สุดคุณก็ทำเสร็จ แต่สุขภาพจิตพังทลาย คุณสูญเสียความสุขในการค้นพบเพื่อความมั่นคงของเงินเดือน', zh: '💀 道德腐败！委员会准予延期。接下来的6个月你生活在谎言中，担心有人会检查电力日志。压力让你的实际工作变得草率。你最终完成了，但你的心理健康被摧毁了。为了工资的安全，你失去了发现的乐趣。' }, stats: { competence: 20, ethics: -10, leadership: 10, innovation: 15 } }
        ]
    },

    {
        id: 'bi_002',
        text: {
            en: '🧬 The Genetic Ethics Dilemma: You are a lead geneticist for a private firm. You\'ve discovered a way to"silence"the gene for a hereditary heart disease for just $500 per embryo. Your CEO wants to market this as a"Premium Heritage Selection"for $25,000, excluding families who actually need it most. You are asked to present this to the board tomorrow.',
            th: '🧬 ภาวะทางจริยธรรมทางพันธุกรรม: คุณเป็นนักพันธุศาสตร์หลักของบริษัทเอกชน คุณค้นพบวิธี"ปิด"ยีนสำหรับโรคหัวใจทางพันธุกรรมด้วยราคาเพียง $500 ต่อตัวอ่อน CEO ของคุณต้องการทำตลาดเป็น"Premium Heritage Selection"ในราคา $25,000 ซึ่งกีดกันครอบครัวที่จำเป็นต้องใช้มากที่สุด คุณถูกขอให้นำเสนอเรื่องนี้ต่อคณะกรรมการในวันพรุ่งนี้',
            zh: '🧬 遗传伦理困境：你是一家私人公司的首席遗传学家。你发现了一种只需500美元就能"关闭"胚胎遗传性心脏病基因的方法。你的首席执行官想以2.5万美元的价格将其作为"高级遗产选择"进行营销，从而将最需要的家庭排除在外。你被要求明天向董事会做推介。'
        },
        options: [
            { id: 'A', text: { en: '📢 Corporate Compliance:"Present the plan exactly as the CEO wants. It\'s my job to provide the tech, not decide the business model. Profit funds future research."', th: '📢 ทำตามคำสั่งบริษัท:"นำเสนอแผนตามที่ CEO ต้องการ งานของฉันคือการให้เทคโนโลยี ไม่ใช่ตัดสินใจโมเดลธุรกิจ กำไรจะไปช่วยวิจัยในอนาคต"', zh: '📢 企业合规："按照首席执行官的要求展示计划。我的工作是提供技术，而不是决定业务模式。利润可以资助未来的研究。"' }, consequence: { en: '💰 Wealth but Regret! The product is a massive financial success ($10M in year 1). You get a big bonus. However, you see news reports of middle-class families going into debt to save their children. You are wealthy but widely criticized in the scientific community for"monetizing human health codes."', th: '💰 ร่ำรวยแต่เสียใจ! ผลิตภัณฑ์ประสบความสำเร็จทางการเงินอย่างมาก ($10M ในปีแรก) คุณได้รับโบนัสก้อนโต อย่างไรก็ตาม คุณเห็นข่าวครอบครัวชนชั้นกลางต้องเป็นหนี้เพื่อช่วยลูกๆ คุณรวยแต่ถูกวิพากษ์วิจารณ์อย่างกว้างขวางในวงการวิทยาศาสตร์เรื่อง"การหาผลประโยชน์จากรหัสสุขภาพมนุษย์"', zh: '💰 财富与遗憾！该产品获得了巨大的财务成功（第一年收入1000万美元）。你得到了一笔丰厚的奖金。然而，你看到有新闻报道说中产阶级家庭为了救孩子而负债累累。你很富有，但在科学界因"将人类健康密码货币化"而广受批评。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 45 } },
            { id: 'B', text: { en: '⚖️ The"Robin Hood"Proposal:"Present the high-end tier but insist on a \'Pro-Bono Scale\' where 10% of embryos are treated for free for low-income families. Threaten to resign if not included."', th: '⚖️ ข้อเสนอ"โรบินฮู้ด":"นำเสนอระดับไฮเอนด์แต่ยืนกรานให้มี \'เกณฑ์ช่วยเหลือสังคม\' ที่ 10% ของตัวอ่อนจะได้รับการรักษาฟรีสำหรับครอบครัวที่มีรายได้น้อย ขู่ว่าจะลาออกหากไม่มีข้อนี้"', zh: '⚖️"罗宾汉"提议："展示高端层面，但坚持实行\'公益规模\'，即为低收入家庭免费处理10%的胚胎。如果不包含此项，就以辞职相威胁。"' }, consequence: { en: '✅ Ethical Victory! The board is nervous but agrees to avoid a PR nightmare. You gain 1,000+"Heritage Scholars"(children saved for free). Your leadership is hailed by the public. The CEO resents you, but you are now"the face"of ethical biotech. Your career is protected by your public profile.', th: '✅ ชัยชนะทางจริยธรรม! คณะกรรมการกังวลแต่ยอมรับเพื่อเลี่ยงฝันร้ายทาง PR คุณช่วยเด็กๆ ได้มากกว่า 1,000 คน (เด็กที่รอดชีวิตฟรี) ความเป็นผู้นำของคุณได้รับการยกย่องจากสาธารณชน CEO เกลียดคุณ แต่ตอนนี้คุณคือ"โฉมหน้า"ของไบโอเทคที่มีจริยธรรม อาชีพของคุณได้รับการคุ้มครองโดยชื่อเสียงทางสังคม', zh: '✅ 伦理胜利！董事会感到紧张，但为了避免公关噩梦而同意了。你获得了1000多名"遗产学者"（获得免费救助的孩子）。你的领导力受到公众赞扬。首席执行官讨厌你，但你现在是"伦理生物技术"的代言人。你的职业生涯受到你公众形象的保护。' }, stats: { competence: 45, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🔓 Go Open-Source:"Leaked the methodology to an academic journal before the presentation. Force the technology into the public domain so no one can patent the specific sequence."', th: '🔓 เปิดเป็นโอเพนซอร์ส:"ปล่อยข้อมูลวิธีการไปยังวารสารวิชาการก่อนการนำเสนอ บังคับให้เทคโนโลยีกลายเป็นสาธารณสมบัติเพื่อให้ไม่มีใครสามารถจดสิทธิบัตรลำดับยีนเฉพาะนี้ได้"', zh: '🔓 走向开源："在演示之前将方法论泄露给学术期刊。强制将该技术推入公共领域，这样就没人能为特定序列申请专利了。"' }, consequence: { en: '🔥 Career Suicide, Global Hero! You are fired immediately and sued by the company ($2M lawsuit). BUT, the price of the treatment drops to $800 worldwide overnight. Thousands of lives are saved. You lose your corporate career but become a legend in Bio-Ethics. You spend 5 years in court but win the Nobel Peace Prize.', th: '🔥 ฆ่าตัวตายทางอาชีพแต่เป็นฮีโร่ของโลก! คุณถูกไล่ออกทันทีและถูกบริษัทฟ้องร้อง ($2M) แต่ราคารักษาลดลงเหลือ $800 ทั่วโลกในชั่วข้ามคืน ชีวิตคนนับพันได้รับการช่วยไว้ คุณเสียอาชีพในบริษัทแต่กลายเป็นตำนานในด้านจริยธรรมชีวภาพ คุณใช้เวลา 5 ปีในศาลแต่ได้รับรางวัลโนเบลสาขาสันติภาพ', zh: '🔥 职业自杀，全球英雄！你立即被解雇并被公司起诉（200万美元诉讼）。但是，这项治疗的价格在一夜之间下降到全球800美元。成千上万的生活得救。你失去了企业职业生涯，但成了生物伦理学的传奇。你花了5年时间打官司，但获得了诺贝尔和平奖。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 50 } },
            { id: 'D', text: { en: '🤝 The Industry Standard:"Suggest forming a consortium with competitors to fix a \'high but fair\' price across the industry to avoid a price war and ensure quality control."', th: '🤝 มาตรฐานอุตสาหกรรม:"เสนอให้สร้างกลุ่มพันธมิตรกับคู่แข่งเพื่อกำหนดราคา \'สูงแต่ยุติธรรม\' ทั่วทั้งอุตสาหกรรม เพื่อเลี่ยงสงครามราคาและควบคุมคุณภาพ"', zh: '🤝 行业标准："建议与竞争对手结成联盟，在整个行业内确定一个\'高昂但公平\'的价格，以避免价格战并确保质量控制。"' }, consequence: { en: '⚠️ Cartel Accusations! You stabilize the market, but the Federal Trade Commission investigates you for price-fixing. The technology becomes associated with"Big Pharma Greed."You make money, but public trust in genetic engineering drops by 40%. You are seen as a shrewd businessman, not a scientist.', th: '⚠️ ข้อหาผูกขาด! คุณทำให้ตลาดมั่นคง แต่ FTC ตรวจสอบคุณฐานการกำหนดราคา เทคโนโลยีนี้ถูกเชื่อมโยงกับ"ความโลภของบริษัทยายักษ์ใหญ่"คุณทำเงินได้ แต่ความเชื่อถือในวิศวกรรมพันธุกรรมลดลง 40% คุณถูกมองว่าเป็นนักธุรกิจที่ชาญฉลาด ไม่ใช่นักวิทยาศาสตร์', zh: '⚠️ 垄断指控！你稳定了市场，但联邦贸易委员会因价格操纵对你进行调查。该技术与"大药企的贪婪"联系在一起。你赚了钱，但公众对基因工程的信任下降了40%。你被视为精明的商人，而非科学家。' }, stats: { competence: 45, ethics: 15, leadership: 40, innovation: 30 } }
        ]
    },

    {
        id: 'bi_003',
        text: {
            en: '🌳 The Field Work Crisis: You are deep in the Amazon surveying a newly discovered spider species. Your local guide, a member of an indigenous tribe, falls ill with a mysterious viral infection that seems to have jumped from the birds you are studying. Your satellite phone broke. You have enough medicine for one person—yourself—or to try and stabilize him while hiking 30 miles to the nearest outpost.',
            th: '🌳 วิกฤตภาคสนาม: คุณอยู่ในป่าลึกอเมซอนเพื่อสำรวจแมงมุมสายพันธุ์ใหม่ ไกด์ท้องถิ่นของคุณที่เป็นสมาชิกเผ่าพื้นเมือง ล้มป่วยด้วยการติดเชื้อไวรัสลึกลับที่ดูเหมือนจะกระโดดจากนกที่คุณกำลังศึกษาอยู่ โทรศัพท์ดาวเทียมของคุณพัง คุณมียาพอสำหรับคนเดียว—คือตัวคุณเอง—หรือจะลองใช้ยาช่วยให้เขาทรงตัวในขณะที่ต้องเดินเท้า 30 ไมล์ไปยังฐานที่ใกล้ที่สุด',
            zh: '🌳 实地工作危机：你正在亚马逊深处调查一种新发现的蜘蛛物种。你的当地导游是一名土著部落成员，他患上了神秘的病毒感染，似乎是从你正在研究的鸟类身上传过来的。你的卫星电话坏了。你只有够一个人用的药——给你自己——或者试图在徒步30英里前往最近的哨所时稳定他的病情。'
        },
        options: [
            { id: 'A', text: { en: '🚑 Medical Martyrdom:"Give the medicine to the guide. Carry him out on a makeshift stretcher. Sacrifice your own biological safety for his life."', th: '🚑 สละชีพเพื่อเพื่อน:"มอบยาให้ไกด์ แบกเขาออกไปด้วยเปลสนามที่ทำขึ้นเอง สละความปลอดภัยทางชีวภาพของตัวเองเพื่อชีวิตของเขา"', zh: '🚑 医疗牺牲："把药给导游。用临时担架抬他出去。为了他的生命牺牲你自己的生物安全。"' }, consequence: { en: '✅ Heroic Survival! You both make it, barely. The tribe hails you as a brother. They show you hidden nesting grounds of the spiders you seek. You discover 5 new species. However, you suffer from chronic lung fatigue for years due to the lack of early meds. Your field career is limited, but your legacy is immortal.', th: '✅ รอดชีวิตดั่งฮีโร่! คุณทั้งคู่รอดมาได้อย่างหวุดหวิด เผ่ายกย่องคุณเหมือนพี่น้อง พวกเขาแสดงรังที่ซ่อนอยู่ของแมงมุมให้คุณเห็น คุณค้นพบ 5 สายพันธุ์ใหม่ อย่างไรก็ตาม คุณมีอาการล้าทางปอดเรื้อรังไปหลายปีเพราะขาดการรักษาเบื้องต้น อาชีพภาคสนามของคุณถูกจำกัด แต่ชื่อเสียงของคุณจะเป็นอมตะ', zh: '✅ 英雄般生存！你们两个都勉强活了下来。部落称赞你为兄弟。他们带你去看你想找的蜘蛛的隐藏筑巢地。你发现了5个新物种。然而，由于缺乏早期药物，你多年来一直患有慢性肺部疲劳。你的实地职业生涯受到限制，但你的遗产是永恒的。' }, stats: { competence: 35, ethics: 50, leadership: 45, innovation: 35 } },
            { id: 'B', text: { en: '🔬 Scientific Protocol:"Dose yourself to ensure you can reach the outpost and call for a helicopter rescue. You are the only one who can explain the virus to the CDC."', th: '🔬 พิธีการทางวิทยาศาสตร์:"ใช้ยากับตัวเองเพื่อให้มั่นใจว่าคุณจะไปถึงฐานและเรียกคอปเตอร์กู้ภัยได้ คุณเป็นคนเดียวที่สามารถอธิบายไวรัสนี้ให้ CDC ฟังได้"', zh: '🔬 科学方案："给自己服药，以确保你能到达哨所并呼叫直升机救援。你是唯一能向CDC解释这种病毒的人。"' }, consequence: { en: '⚠️ Tragic Trade-off! You reach the outpost in record time. Rescue arrives, but the guide passes away 1 hour before they land. You provide the virus samples that prevent a global pandemic. You are a hero to the world, but the tribe bans all scientists from their land forever. You live with the guilt, despite the logic.', th: '⚠️ การแลกเปลี่ยนที่น่าสลด! คุณถึงฐานในเวลาทำลายสถิติ กู้ภัยมาถึงแต่ไกด์เสียชีวิตไป 1 ชั่วโมงก่อนถึง ไวรัสที่คุณนำมาช่วยป้องกันการแพร่ระบาดไปทั่วโลก คุณคือฮีโร่ของโลก แต่เผ่าคนป่าแบนนักวิทยาศาสตร์ทุกคนจากพื้นที่ของเขาตลอดไป คุณอยู่กับความรู้สึกผิดแม้จะมีตรรกะรองรับก็ตาม', zh: '⚠️ 悲剧性的权衡！你以创纪录的时间到达了哨所。救援赶到，但导游在他们降落前1小时去世了。你提供的病毒样本防止了全球大流行。你是世界的英雄，但部落永远禁止所有科学家进入他们的土地。尽管符合逻辑，你仍生活在内疚中。' }, stats: { competence: 50, ethics: 20, leadership: 30, innovation: 40 } },
            { id: 'C', text: { en: '🌿 Traditional Knowledge:"Split the dose. Ask the guide to show you any local medicinal plants that might slow the infection. Combine biology with ethnobotany."', th: '🌿 ความรู้ดั้งเดิม:"หารยาคนละครึ่ง ขอให้ไกด์ช่วยแสดงพืชสมุนไพรท้องถิ่นที่อาจช่วยชะลอการติดเชื้อได้ ผสมผสานชีววิทยากับพฤกษศาสตร์พื้นบ้าน"', zh: '🌿 传统知识："平分药量。要求导游带你去找任何可能减缓感染的当地药用植物。将生物学与民族植物学结合起来。"' }, consequence: { en: '🌟 Breakthrough Discovery! The combination works. You both survive. You discover a plant alkaloid that boosts the efficacy of modern antivirals by 300%. You publish a seminal paper on"Integrated Bio-Medicine."You receive massive funding to protect the Amazonian flora. You saved the guy and the forest.', th: '🌟 การค้นพบที่ยิ่งใหญ่! การผสมผสานได้ผล คุณทั้งคู่รอดชีวิต คุณค้นพบสารสกัดจากพืชที่ช่วยเพิ่มประสิทธิภาพของยาต้านไวรัสสมัยใหม่ได้ 300% คุณตีพิมพ์บทความชิ้นสำคัญเรื่อง"การแพทย์ชีวภาพแบบบูรณาการ"คุณได้รับเงินทุนมหาศาลเพื่อปกป้องพืชพรรณในอเมซอน คุณช่วยชีวิตทั้งคนและป่า', zh: '🌟 突破性发现！这种结合奏效了。你们两个都活了下来。你发现了一种植物生物碱，能将现代抗病毒药物的功效提高300%。你发表了一篇关于"综合生物医学"的开创性论文。你获得了巨额资金来保护亚马逊植物群。你救了那个人，也救了森林。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🏃 The Speed Run:"Leave the guide with water and half the pack. Sprint to the outpost without taking the meds yet, saving them for whoever collapses first."', th: '🏃 การวิ่งทำเวลา:"ทิ้งไกด์ไว้กับน้ำและเสบียงครึ่งหนึ่ง วิ่งให้สุดฝีเท้าไปยังฐานโดยยังไม่กินยา เก็บไว้ให้ใครก็ตามที่ล้มลงก่อน"', zh: '🏃 极速前进："给导游留下水和一半的背囊。在没吃药的情况下冲向哨所，把药留给先倒下的人。"' }, consequence: { en: '💀 Worst Case Scenario! You collapse 10 miles in due to dehydration and early viral onset. The guide stays where he is. A week later, a search party finds both your bodies. Your research is lost to the moisture. A 100% loss of life and data. Never underestimate the jungle or a virus.', th: '💀 สถานการณ์ที่แย่ที่สุด! คุณหมดแรงไปที่ระยะ 10 ไมล์เพราะขาดน้ำและไวรัสเริ่มออกฤทธิ์ ไกด์ยังอยู่ที่เดิม หนึ่งสัปดาห์ต่อมา ทีมค้นหาพบร่างของคุณทั้งคู่ งานวิจัยของคุณสูญหายไปกับความชื้น สูญเสียทั้งชีวิตและข้อมูล 100% อย่าดูถูกป่าหรือไวรัสเป็นอันขาด', zh: '💀 最坏的情况！由于脱水和病毒早期发作，你在10英里处倒下了。导游留在了原地。一周后，搜救队发现了你们两人的尸体。你的研究因受潮而丢失。生命和数据100%损失。永远不要低估丛林或病毒。' }, stats: { competence: 10, ethics: 30, leadership: 15, innovation: 10 } }
        ]
    },

    {
        id: 'bi_004',
        text: {
            en: '🏥 The Lab Leak Scandal: You are an investigator for the World Health Organization. You\'ve found evidence that a small regional outbreak might have originated from a high-security lab you personally certified last year. If you admit the lab failed your inspection criteria, you will be blacklisted from the industry. If you blame"wildlife markets,"the lab stays open and your career is safe.',
            th: '🏥 ข่าวลือแล็บหลุด: คุณเป็นผู้ตรวจสอบของ WHO คุณพบหลักฐานว่าการระบาดในพื้นที่ขนาดเล็กอาจมีต้นกำเนิดมาจากห้องแล็บความปลอดภัยสูงที่คุณเป็นคนรับรองเมื่อปีที่แล้ว หากคุณยอมรับว่าแล็บไม่ผ่านเกณฑ์การตรวจสอบของคุณ คุณจะถูกแบล็กลิสต์จากอุตสาหกรรม หากคุณโทษ"ตลาดสัตว์ป่า"แล็บจะยังคงเปิดอยู่และอาชีพของคุณจะปลอดภัย',
            zh: '🏥 实验室泄漏丑闻：你是世界卫生组织的调查员。你发现有证据表明，一处小规模支域疫情可能源于你去年亲手认证的一家高安全性实验室。如果你承认该实验室未达到你的检查标准，你将被行业列入黑名单。如果你归咎于"野生动物市场"，实验室将继续开放，你的职业生涯也会安全。'
        },
        options: [
            { id: 'A', text: { en: '🕵️ Whistleblower Integrity:"Report the lab failure and your own oversight. Accept the career consequences to prevent a larger future disaster."', th: '🕵️ ความซื่อสัตย์ของผู้แจ้งเบาะแส:"รายงานความล้มเหลวของแล็บและความผิดพลาดของตัวคุณเอง ยอมรับผลกระทบทางอาชีพเพื่อป้องกันหายนะครั้งใหญ่ในอนาคต"', zh: '🕵️ 举报者的诚信："报告实验室的失败和你自己的失察。接受职业后果，以防止未来发生更大的灾难。"' }, consequence: { en: '✅ Reputation Rebuilt! You are banned from WHO for 3 years. However, a private safety firm hires you as"Chief Ethics Officer"for $300k/year to fix their labs. Your honesty saves millions when you identify the same flaw in 12 other labs worldwide. You are disgraced but deeply respected by those who matter.', th: '✅ สร้างชื่อเสียงใหม่! คุณถูกแบนจาก WHO เป็นเวลา 3 ปี อย่างไรก็ตาม บริษัทความปลอดภัยเอกชนจ้างคุณเป็น"Chief Ethics Officer"ด้วยเงินเดือน $300k/ปี เพื่อแก้ไขแล็บของพวกเขา ความซื่อสัตย์ของคุณช่วยชีวิตคนนับล้านเมื่อคุณพบข้อบกพร่องแบบเดียวกันในแล็บอีก 12 แห่งทั่วโลก คุณถูกลดเกียรติแต่ได้รับความเคารพอย่างสูงจากผู้ที่มองเห็นความจริง', zh: '✅ 声誉重建！你被世卫组织禁入3年。然而，一家私人安全公司聘请你担任"首席伦理官"，年薪30万美元，负责修复他们的实验室。当你发现全球其他12家实验室存在同样的缺陷时，你的诚实挽救了数百万人。你丢了面子，但受到了重要人士的深切尊重。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 25 } },
            { id: 'B', text: { en: '📉 The Strategic Cover-up:"Blame the markets. Use the privacy of the lab to secretly fix the security holes while the world looks elsewhere. Avoid mass panic."', th: '📉 การปกปิดอย่างมีกลยุทธ์:"โทษตลาด ใช้ความเป็นส่วนตัวของแล็บแอบแก้ไขรูรั่วด้านความปลอดภัยในขณะที่โลกกำลังมองไปทางอื่น หลีกเลี่ยงความตื่นตระหนก"', zh: '📉 战略性掩盖："归咎于市场。利用实验室的私密性，在世界关注别处时偷偷修复安全漏洞。避免大规模恐慌。"' }, consequence: { en: '💀 Catastrophic Failure! The"secret fix"fails 6 months later. An even deadlier pathogen leaks. Because you blamed the markets, no one was looking for lab signatures. 50,000 people die in the second wave. You are arrested for crimes against humanity. Your name is etched in history next to the world\'s worst villains. Career ended.', th: '💀 ความล้มเหลวอย่างหายนะ!"การแก้ไขลับๆ"ล้มเหลวใน 6 เดือนต่อมา เชื้อโรคที่รุนแรงกว่าเดิมหลุดออกมา เพราะคุณโทษตลาด จึงไม่มีใครมองหาสัญญาณจากแล็บ คน 50,000 คนตายในการระบาดระลอกสอง คุณถูกจับในข้อหาอาชญากรรมต่อมนุษยชาติ ชื่อของคุณถูกจารึกไว้ในประวัติศาสตร์ข้างชื่อตัวร้ายที่แย่ที่สุดในโลก อาชีพจบสิ้น', zh: '💀 灾难性失败！"秘密修复"在6个月后失败了。一种更致命的病原体泄漏。因为你归咎于市场，没人寻找实验室特征。第二波疫情导致5万人死亡。你因危害人类罪被捕。你的名字被刻在历史上最邪恶的坏人旁边。职业生涯结束。' }, stats: { competence: 20, ethics: -50, leadership: 10, innovation: 30 } },
            { id: 'C', text: { en: '🔍 Independent Audit:"Declare the findings inconclusive and call for a massive, multi-national independent audit. Buy time and share the blame."', th: '🔍 การตรวจสอบอิสระ:"ประกาศว่าผลการค้นหายังไม่สรุปผล และเรียกร้องให้มีการตรวจสอบอิสระระดับนานาชาติครั้งใหญ่ ซื้อเวลาและแบ่งปันความรับผิดชอบ"', zh: '🔍 独立审计："宣布发现尚无定论，并呼吁进行大规模的跨国独立审计。争取时间并共担责任。"' }, consequence: { en: '⚖️ Bureaucratic Limbo! The investigation takes 2 years. Political infighting between nations keeps the truth buried. The lab is eventually closed for"unrelated budget reasons."You keep your job, but everyone suspects you know more than you say. You are effective but untrusted. Your career plateaus in middle management.', th: '⚖️ ติดหล่มราชการ! การตรวจสอบใช้เวลา 2 ปี การต่อสู้ทางการเมืองระหว่างประเทศทำให้ความจริงถูกฝังไว้ ในที่สุดแล็บก็ปิดตัวลงด้วย"เหตุผลด้านงบประมาณที่ไม่เกี่ยวข้อง"คุณยังรักษางานไว้ได้ แต่ทุกคนสงสัยว่าคุณรู้มากกว่าที่คุณพูด คุณทำงานได้ผลแต่ไม่มีใครไว้ใจ อาชีพของคุณหยุดชะงักอยู่ที่ระดับผู้บริหารระดับกลาง', zh: '⚖️ 官僚陷阱！调查花了2年时间。各国之间的政治内讧使真相被埋没。实验室最终因"无关的预算原因"关闭。你保住了工作，但每个人都怀疑你隐瞒了真相。你很能干但不被信任。你的职业生涯止步于中层管理。' }, stats: { competence: 35, ethics: 20, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🛡️ Technical Scapegoat:"Blame the hardware manufacturer for the air filtration systems. Sue them. It shifts focus from your certification logic."', th: '🛡️ หาแพะรับบาปทางเทคนิค:"โทษผู้ผลิตฮาร์ดแวร์สำหรับระบบกรองอากาศ ฟ้องร้องเขา มันจะเบี่ยงเบนความสนใจจากตรรกะการรับรองของคุณ"', zh: '🛡️ 技术替罪羊："归咎于空气过滤系统的硬件制造商。起诉他们。这会将焦点从你的认证逻辑上转移开。"' }, consequence: { en: '💸 Financial Win, Moral Loss! You win a $5M settlement from the hardware company. The lab stays open. However, 1 year later, the hardware company goes bankrupt, laying off 2,000 innocent people. You realize the filter was working fine—it was human error (yours). You have $2M in your private account, but you can\'t look in the mirror.', th: '💸 ชนะทางการเงินแต่เสียทางศีลธรรม! คุณชนะคดียอมความ $5M จากบริษัทฮาร์ดแวร์ แล็บยังคงเปิดอยู่ อย่างไรก็ตาม 1 ปีต่อมา บริษัทฮาร์ดแวร์ล้มละลาย เลิกจ้างพนักงานบริสุทธิ์ 2,000 คน คุณเพิ่งรู้ว่าแผ่นกรองทำงานได้ดี—มันคือความผิดพลาดของมนุษย์ (ของคุณเอง) คุณมีเงิน $2M ในบัญชีส่วนตัวแต่คุณไม่กล้าส่องกระจก', zh: '💸 财务获胜，道德损失！你从硬件公司获得了500万美元的和解金。实验室继续开放。然而，1年后，该硬件公司破产，解雇了2000名无辜的员工。你意识到过滤器运行良好——那是人为误差（你的责任）。你的私人账户里有200万美元，但你不敢照镜子。' }, stats: { competence: 40, ethics: 10, leadership: 20, innovation: 15 } }
        ]
    },

    {
        id: 'bi_005',
        text: {
            en: '🐟 The Marine Microplastic War: You\'ve developed a genetically engineered bacteria that"eats"microplastics in the ocean 100x faster than any known organism. However, the bacteria might also eat the protective coating of deep-sea cables and fiber-optics. A consortium of internet providers offers you $50M to destroy your research to protect global infrastructure.',
            th: '🐟 สงครามไมโครพลาสติกในทะเล: คุณได้พัฒนาแบคทีเรียดัดแปลงพันธุกรรมที่"กิน"ไมโครพลาสติกในมหาสมุทรเร็วกว่าสิ่งมีชีวิตใดๆ ถึง 100 เท่า อย่างไรก็ตาม แบคทีเรียนี้อาจจะกินสารเคลือบป้องกันของสายเคเบิลใต้ทะเลและใยแก้วนำแสงด้วย กลุ่มผู้ให้บริการอินเทอร์เน็ตเสนอเงิน $50M ให้คุณทำลายงานวิจัยทิ้งเพื่อปกป้องโครงสร้างพื้นฐานระดับโลก',
            zh: '🐟 海洋微塑料战争：你开发了一种基因工程细菌，它在海洋中"吞噬"微塑料的速度比任何已知生物快100倍。然而，这种细菌也可能吞噬深海电缆和光纤的保护层。一个互联网提供商财团向你提供5000万美元，让你销毁研究成果，以保护全球基础设施。'
        },
        options: [
            { id: 'A', text: { en: '🌍 Save the Oceans:"Refuse the money. Release the bacteria into the Great Pacific Garbage Patch immediately. The Earth\'s health outweighs the internet."', th: '🌍 ช่วยเหลือมหาสมุทร:"ปฏิเสธเงิน ปล่อยแบคทีเรียลงในขยะยักษ์ในแปซิฟิกทันที สุขภาพของโลกสำคัญกว่าอินเทอร์เน็ต"', zh: '🌍 拯救海洋："拒绝这笔钱。立即将细菌释放到大太平洋垃圾带。地球的健康胜过互联网。"' }, consequence: { en: '🌊 Eco-Chaos! The garbage patch shrinks by 50% in 2 years. The oceans are cleaner than they\'ve been in a century. BUT, global internet is crippled for 6 months. Stocks crash. Massive civil unrest. You are hunted by governments as an"Eco-Terrorist."You live on a remote island, seeing cleaner seas but knowing you broke the modern world.', th: '🌊 ความยุ่งเหยิงของระบบนิเวศ! ขยะลดลง 50% ใน 2 ปี ทะเลสะอาดที่สุดในศตวรรษ แต่... อินเทอร์เน็ตทั่วโลกพังทลายไป 6 เดือน หุ้นตก เกิดความไม่สงบอย่างมาก คุณถูกรัฐบาลตามล่าในฐานะ"ผู้ก่อการร้ายรักษ์โลก"คุณใช้ชีวิตบนเกาะห่างไกล เห็นทะเลสะอาดขึ้นแต่รู้ดีว่าคุณทำลายโลกสมัยใหม่พังไปแล้ว', zh: '🌊 生态混乱！垃圾带在2年内缩小了50%。海洋比一个世纪以来都要干净。但是，全球互联网瘫痪了6个月。股市崩溃。大规模内乱。你被各国政府作为"生态恐怖分子"搜捕。你生活在一个偏远的岛屿上，看着更干净的海面，但知道你破坏了现代世界。' }, stats: { competence: 40, ethics: 35, leadership: 30, innovation: 50 } },
            { id: 'B', text: { en: '💰 The Infrastructure Sale:"Take the $50M. Destroy the samples. Use the money to build a massive foundation for traditional ocean cleanup. Safe and stable."', th: '💰 ขายเพื่อโครงสร้างพื้นฐาน:"รับเงิน $50M ทำลายตัวอย่างทิ้ง ใช้เงินสร้างมูลนิธิขนาดใหญ่เพื่อการทำความสะอาดท้องทะเลแบบดั้งเดิม ปลอดภัยและมั่นคง"', zh: '💰 基础设施销售："拿走5000万美元。销毁样本。利用这笔钱为传统的海洋清理建立一个庞大的基金会。安全且稳定。"' }, consequence: { en: '💸 Wealthy Compromise! You are one of the richest biologists in history. Your foundation cleans up 100,000 tons of plastic. But 10 years later, plastic levels have tripled. You realize your bacteria was the ONLY real solution. You died a philanthropist, but the oceans died too. You chose the past over the future.', th: '💸 การประนีประนอมที่มั่งคั่ง! คุณเป็นหนึ่งในนักชีววิทยาที่รวยที่สุดในประวัติศาสตร์ มูลนิธิของคุณทำความสะอาดพลาสติกได้ 100,000 ตัน แต่ 10 ปีต่อมา ระดับพลาสติกเพิ่มขึ้นสามเท่า คุณเพิ่งรู้ว่าแบคทีเรียของคุณนับเป็นทางออกเดียวที่แท้จริง คุณตายในฐานะนักการกุศล แต่ท้องทะเลตายไปพร้อมกับคุณ คุณเลือกอดีตมากกว่าอนาคต', zh: '💸 富有的妥协！你是历史上最富有的生物学家之一。你的基金会清理了10万吨塑料。但10年后，塑料含量翻了三倍。你意识到你的细菌是唯一真正的解决方案。你作为一个慈善家去世了，但海洋也随之死去了。你选择了过去而非未来。' }, stats: { competence: 30, ethics: 20, leadership: 40, innovation: 15 } },
            { id: 'C', text: { en: '🔬 The Fail-Safe Research:"Refuse the $50M. Spend another 5 years developing a genetic \'Kill Switch\' or a target sequence that ignores tech-insulation."', th: '🔬 วิจัยระบบนิรภัย:"ปฏิเสธเงิน $50M ใช้เวลาอีก 5 ปีพัฒนาระบบ \'สวิตช์ฆ่า\' ทางพันธุกรรมหรือเป้าหมายที่เจาะจงเฉพาะพลาสติกและไม่แตะต้องฉนวนเทคโนโลยี"', zh: '🔬 安全故障研究："拒绝5000万美元。再花5年时间开发一种遗传\'杀伤开关\'，或一个避开技术绝缘层的目标序列。"' }, consequence: { en: '✅ Scientific Perfection! You do it. In 4 years, you launch v2.0. It cleans the ocean with ZERO impact on infrastructure. You win the Nobel Prize in Chemistry. You license the tech for a fair price. You are rich, famous, and the hero who actually saved the world properly. Patience was the ultimate innovation.', th: '✅ ความสมบูรณ์แบบทางวิทยาศาสตร์! คุณทำสำเร็จ ใน 4 ปี คุณเปิดตัว v2.0 มันทำความสะอาดทะเลโดยไม่มีผลกระทบต่อโครงสร้างพื้นฐาน คุณได้รับรางวัลโนเบลสาขาเคมี คุณให้ใบอนุญาตเทคโนโลยีในราคาที่ยุติธรรม คุณรวย มีชื่อเสียง และเป็นฮีโร่ที่ช่วยโลกไว้อย่างถูกต้อง ความอดทนคือนวัตกรรมขั้นสูงสุด', zh: '✅ 科学完美！你做到了。4年后，你推出了2.0版本。它清理了海洋，对基础设施零影响。你获得了诺贝尔化学奖。你以公平的价格授权了这项技术。你富有、出名，是真正正确地拯救了世界的英雄。耐心是终极的创新。' }, stats: { competence: 50, ethics: 45, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🛡️ The Hybrid Approach:"Sell the $50M exclusive rights to the internet providers. Let them release it while they update their cables to resistant materials."', th: '🛡️ วิธีการแบบผสมผสาน:"ขายสิทธิ์ผูกขาดมูลค่า $50M ให้ผู้ให้บริการอินเทอร์เน็ต ให้พวกเขาปล่อยมันเมื่อพวกเขาอัปเกรดสายเคเบิลเป็นวัสดุที่ทนทานแล้ว"', zh: '🛡️ 混合方案："向互联网提供商出售5000万美元的独家权利。让他们在将电缆更新为耐磨材料时发布它。"' }, consequence: { en: '⚠️ Corporate Gating! They take the tech but delay the release for 20 years to minimize costs. The oceans continue to choke on plastic. You have the money, but your invention is locked in a vault. You are a successful"strategic consultant,"but your legacy is one of missed potential. You sold your child to its enemies.', th: '⚠️ การสกัดกั้นของบริษัท! พวกเขาสัญญาจะใช้เทคโนโลยีแต่เลื่อนการปล่อยออกไป 20 ปีเพื่อลดต้นทุน ท้องทะเลยังคงสำลักพลาสติก คุณมีเงินแต่งานวิจัยถูกขังไว้ในห้องนิรภัย คุณเป็น"ที่ปรึกษาเชิงกลยุทธ์"ที่ประสบความสำเร็จ แต่ชื่อเสียงของคุณคือการสูญเสียศักยภาพ คุณขายผลงานตัวเองให้ศัตรู', zh: '⚠️ 企业门槛！他们拿走了技术，但为了降低成本而推迟了20年发布。海洋继续被塑料窒息。你有钱，但你的发明被锁在保险库里。你是一个成功的"战略顾问"，但你的遗产是一个错失潜力的名字。你把自己的孩子卖给了它的敌人。' }, stats: { competence: 45, ethics: 25, leadership: 35, innovation: 35 } }
        ]
    },

    {
        id: 'bi_006',
        text: {
            en: '🏥 The Viral Mutation: You are tracking a new influenza strain. You notice it has mutated to infect domestic pets (cats/dogs). If this becomes public, millions of people might abandon or euthanize their pets in panic. If you keep it quiet while you develop a pet vaccine, you risk the virus jumping back to humans in a more lethal form. Your data is 80% certain.',
            th: '🏥 ไวรัสที่กลายพันธุ์: คุณกำลังติดตามสายพันธุ์ไข้หวัดใหญ่ตัวใหม่ คุณสังเกตเห็นว่ามันกลายพันธุ์จนติดเชื้อในสัตว์เลี้ยง (แมว/สุนัข) หากเรื่องนี้กลายเป็นที่รู้จักในสาธารณะ ผู้คนนับล้านอาจทิ้งหรือฆ่าสัตว์เลี้ยงของตัวเองด้วยความตื่นตระหนก หากคุณเก็บเรื่องนี้ไว้เป็นความลับระหว่างพัฒนาวัคซีน คุณจะเสี่ยงที่ไวรัสจะกระโดดกลับมาติดมนุษย์ในรูปแบบที่รุนแรงกว่า ข้อมูลของคุณมีความแน่นอน 80%',
            zh: '🏥 病毒变异：你正在追踪一种新的流感毒株。你注意到它已经变异为感染家养宠物（猫/狗）。如果这被公开，数百万人可能会因恐慌而遗弃或安乐死他们的宠物。如果你在开发宠物疫苗时保持沉默，你就要承担病毒以更致命的形式传回人类的风险。你的数据有80%的确定性。'
        },
        options: [
            { id: 'A', text: { en: '📢 Immediate Public Alert:"Transparency is non-negotiable. Alert the public. Work with animal shelters to manage the fallout. Human safety is priority one."', th: '📢 แจ้งเตือนสาธารณะทันที:"ความโปร่งใสเป็นเรื่องที่ต่อรองไม่ได้ แจ้งเตือนสาธารณะ ทำงานร่วมกับศูนย์พักพิงสัตว์เพื่อจัดการผลกระทบ ความปลอดภัยของมนุษย์คืออันดับหนึ่ง"', zh: '📢 立即公开警报："透明度是不容谈判的。向公众警示。与动物收容所合作处理后续影响。人类安全是第一要务。"' }, consequence: { en: '⚠️ Heartbreaking Chaos! You are right about the panic. 2 million pets are abandoned in 1 month. Shelters are overwhelmed. BUT, because of the alert, human hospitals are ready. The virus jumps to humans, but masks and hygiene prevent a pandemic. You saved 100,000 human lives, but cost 2 million animal ones. You are the"Cold Calculus"Scientist.', th: '⚠️ ความวุ่นวายที่น่าปวดใจ! คุณคิดถูกเรื่องความตื่นตระหนก สัตว์เลี้ยง 2 ล้านตัวถูกทิ้งใน 1 เดือน ศูนย์พักพิงรับไม่ไหว แต่... เพราะการแจ้งเตือน โรงพยาบาลจึงเตรียมพร้อม เมื่อไวรัสกระโดดมาติดคน หน้ากากและการดูแลสุขอนามัยช่วยป้องกันการระบาดใหญ่ คุณช่วยชีวิตคนได้ 100,000 คน แต่แลกกับชีวิตสัตว์ 2 ล้านชีวิต คุณคือ"นักวิทยาศาสตร์ผู้เลือดเย็น"', zh: '⚠️ 令人心碎的混乱！你对恐慌的估计是对的。1个月内有200万只宠物被遗弃。收容所不堪重负。但是，由于警报，人类医院做好了准备。病毒传回了人类，但口罩和卫生措施防止了大流行。你挽救了10万人的生命，但付出了200万只动物的代价。你是"冷酷计算"的科学家。' }, stats: { competence: 40, ethics: 35, leadership: 45, innovation: 20 } },
            { id: 'B', text: { en: '🤫 The Silent Vaccine Drive:"Partner with major pet food companies to lace food with the vaccine secretly. Avoid panic, save the pets, and block the human jump."', th: '🤫 แอบฉีดวัคซีนเงียบๆ:"ร่วมมือกับบริษัทอาหารสัตว์รายใหญ่เพื่อแอบใส่แม่เชื้อวัคซีนในอาหาร หลีกเลี่ยงความตื่นตระหนก ช่วยสัตว์เลี้ยง และสกัดการแพร่ระบาดสู่คน"', zh: '🤫 沉默疫苗行动："与主要宠物食品公司合作，秘密地在食品中添加疫苗。避免恐慌，拯救宠物，并阻止病毒向人类传播。"' }, consequence: { en: '⚖️ High-Stakes Gamble! It works for 90% of pets. But a small"black market"of organic pet food brands is missed. The virus mutates in those pets and hits humans. Because there was no warning, 5,000 people die before you can react. You saved the pets, but 5,000 deaths are on your hands. You are sued for"unauthorized medical trials."Career in ruins.', th: '⚖️ การเดิมพันเดิมพันสูง! มันได้ผลกับสัตว์เลี้ยง 90% แต่"ตลาดมืด"ของแบรนด์อาหารสัตว์ออร์แกนิกขนาดเล็กถูกมองข้าม ไวรัสกลายพันธุ์ในสัตว์เลี้ยงเหล่านั้นและติดคน เพราะไม่มีการเตือนล่วงหน้า คน 5,000 คนตายก่อนที่คุณจะรับมือทัน คุณช่วยสัตว์ไว้ได้ แต่การตาย 5,000 รายนั้นติดตัวคุณ คุณถูกฟ้องฐาน"ทดลองยาโดยไม่ได้รับอนุญาต"อาชีพพังพินาศ', zh: '⚖️ 高风险赌博！这对90%的宠物有效。但一些有机宠物食品品牌的"黑市"被遗漏了。病毒在这些宠物中变异并打击了人类。由于没有预警，在你做出反应前就有5000人死亡。你救了宠物，但5000条人命在你手中。你因"未经授权的医学试验"被起诉。职业生涯毁于一旦。' }, stats: { competence: 45, ethics: 15, leadership: 30, innovation: 45 } },
            { id: 'C', text: { en: '🤝 Managed Disclosure:"Brief the top 5 veterinarians and government officials. Do a controlled pet-vaccine rollout while framing it as a \'Standard Yearly Booster.\'"', th: '🤝 การเปิดเผยข้อมูลแบบควบคุม:"บรีฟข้อมูลให้สัตวแพทย์และเจ้าหน้าที่รัฐระดับสูง 5 อันดับแรก ทำการกระจายวัคซีนสัตว์เลี้ยงโดยระบุว่าเป็น \'การฉีดกระตุ้นมาตรฐานประจำปี\'"', zh: '🤝 受控披露："简要告知前5名兽医和政府官员。进行受控的宠物疫苗推出，同时将其定性为\'标准年度加强针\'。"' }, consequence: { en: '✅ Smooth Operation! You avoid the panic. 80% of pets are vaccinated within 4 months. The human jump is prevented entirely. You get a government commendation for"Efficiency in Public Health."You kept the secret and it worked. You are the ultimate"Insider"scientist. Your power in the bureaucracy is now immense.', th: '✅ การดำเนินงานที่ราบรื่น! คุณหลีกเลี่ยงความตื่นตระหนก สัตว์เลี้ยง 80% ได้รับวัคซีนใน 4 เดือน การแพร่สู่คนถูกสกัดไว้ได้ทั้งหมด คุณได้รับคำชมจากรัฐบาลเรื่อง"ประสิทธิภาพในสาธารณสุข"คุณรักษาความลับไว้และมันได้ผล ตอนนี้คุณมีความอำนาจในระบบราชการมหาศาล', zh: '✅ 行动顺利！你避免了恐慌。80%的宠物在4个月内接种了疫苗。完全阻止了病毒向人类传播。你因"公共卫生效率"获得了政府表彰。你保住了秘密且见效了。你是终极的"内部"科学家。你在官僚机构中的权力现在非常巨大。' }, stats: { competence: 45, ethics: 30, leadership: 50, innovation: 35 } },
            { id: 'D', text: { en: '🔬 Double-Check Data:"Take 2 more weeks to reach 100% certainty. We cannot ruin pet ownership culture on a maybe. Wait for more samples."', th: '🔬 ตรวจสอบข้อมูลซ้ำ:"ใช้เวลาอีก 2 สัปดาห์เพื่อให้แน่ใจ 100% เราจะทำลายวัฒนธรรมการเลี้ยงสัตว์เลี้ยงด้วยคำว่า \'อาจจะ\' ไม่ได้ รอตัวอย่างเพิ่มก่อน"', zh: '🔬 双重检查数据："再花2周时间达到100%的确定性。我们不能因为一个\'可能\'就破坏宠物抚养文化。等待更多样本。"' }, consequence: { en: '💀 Failure of Decision! In those 2 weeks, the virus hits a major kennel. 50 people are infected before you even publish. The"100% certainty"came too late. You are seen as indecisive. A global scandal breaks out. You are fired for"Analysis Paralysis"while people died. Scientific rigor is useless without timely action.', th: '💀 ความล้มเหลวในการตัดสินใจ! ใน 2 สัปดาห์นั้น ไวรัสระบาดในคอกสุนัขใหญ่ คน 50 คนติดเชื้อก่อนคุณจะได้ตีพิมพ์"ความแน่นอน 100%"มาช้าเกินไป คุณถูกมองว่าเป็นคนลังเล เรื่องอื้อฉาวระดับโลกปะทุขึ้น คุณถูกไล่ออกฐาน"อัมพาตทางการวิเคราะห์"ในขณะที่คนกำลังตาย ความเข้มงวดทางวิทยาศาสตร์ไร้ค่าหากไม่มีการดำเนินการที่ทันท่วงที', zh: '💀 决策失败！在那2周内，病毒袭击了一个大型犬舍。在你发表之前就有50人被感染。"100%的确定性"来得太晚了。你被视为优柔寡断。爆发了一场全球丑闻。你在人们死亡时因"分析瘫痪"被解雇。没有及时的行动，科学的严谨性是无用的。' }, stats: { competence: 20, ethics: 25, leadership: 15, innovation: 10 } }
        ]
    },

    {
        id: 'bi_007',
        text: {
            en: '🔬 The Co-Author Conflict: You’ve spent late nights perfecting the CRISPR-Cas9 sequence for a breakthrough paper. Your Senior Advisor (PI), who barely stepped into the lab, adds his nephew—a first-year med student—as second author to help his residency application. If you object, you risk your graduation. If you accept, you dilute your intellectual contribution.',
            th: '🔬 ความขัดแย้งเรื่องชื่อผู้แต่งร่วม: คุณทุ่มเทเวลาดึกดื่นเพื่อปรับปรุงลำดับ CRISPR-Cas9 สำหรับบทความวิจัยชิ้นสำคัญ อาจารย์ที่ปรึกษาอาวุโส (PI) ของคุณที่แทบไม่เคยเข้าแล็บเลย กลับใส่ชื่อหลานชายของเขา—นักศึกษาแพทย์ปีหนึ่ง—เป็นผู้แต่งลำดับที่สองเพื่อช่วยใบสมัครเรียนต่อของเขา หากคุณคัดค้าน คุณเสี่ยงที่จะไม่จบการศึกษา หากคุณยอมรับ คุณจะทำให้ผลงานทางปัญญาของคุณดูด้อยลง',
            zh: '🔬 共同作者冲突：你熬夜完善了突破性论文中的 CRISPR-Cas9 序列。你那几乎没进过实验室的高级顾问（PI）为了帮助他那还是医学院一年级学生的侄子申请住院医生，将其列为第二作者。如果你反对，你可能会面临无法毕业的风险。如果你接受，你的智力贡献就会被稀释。'
        },
        options: [
            {
                id: 'A',
                text: { en: '⚖️ Formal Grievance: "Submit a formal complaint to the University Ethics Committee. Academic credit must be earned, not gifted."', th: '⚖️ ร้องเรียนเป็นทางการ: "ยื่นเรื่องร้องเรียนต่อคณะกรรมการจริยธรรมของมหาวิทยาลัย เครดิตทางวิชาการต้องมาด้วยความสามารถ ไม่ใช่ยกให้กัน"', zh: '⚖️ 正式申诉："向大学伦理委员会提交正式投诉。学术公信力必须凭本事赢得，而不是赠送。"' },
                consequence: { en: '✅ Ethical Integrity! The committee rules in your favor. The PI is sanctioned, and your name is rightfully first. However, the PI becomes your enemy, blocking your postdoc at elite labs. You are a pariah in your old department but a hero to junior researchers. You trade comfort for justice.', th: '✅ ความถูกต้องทางจริยธรรม! คณะกรรมการตัดสินให้คุณชนะ PI ถูกลงโทษ และชื่อคุณขึ้นเป็นชื่อแรกอย่างถูกต้อง อย่างไรก็ตาม PI กลายเป็นศัตรูของคุณ คอยขัดขวางการสมัคร Postdoc ในแล็บชั้นนำ คุณกลายเป็นคนนอกในภาควิชาเดิมแต่เป็นฮีโร่ของนักวิจัยรุ่นน้อง คุณแลกความสบายกับความยุติธรรม', zh: '✅ 伦理诚信！委员会做出了有利于你的裁决。该 PI 受到制裁，你的名字理所当然地排在第一位。然而，该 PI 成了你的敌人，阻碍你在精英实验室做博士后。你在旧系里备受排挤，但在初级研究员心中是英雄。你用舒适换取了正义。' },
                stats: { competence: 35, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤝 The Strategic Compromise: "Allow the nephew’s name but negotiate for a 100% funding guarantee for your next two years and first priority on the big lab equipment."', th: '🤝 การประนีประนอมเชิงกลยุทธ์: "ยอมให้ใส่ชื่อหลานเขา แต่ต่อรองขอการรับประกันทุนวิจัย 100% สำหรับสองปีข้างหน้าและสิทธิ์ใช้เครื่องมือแล็บใหญ่ก่อนใคร"', zh: '🤝 战略妥协："允许添加该侄子的名字，但要协商保证未来两年的 100% 资助，并获得大型实验室设备的优先使用权。"' },
                consequence: { en: '💰 Resource Wealth! You get the funding and the equipment. Your next study is completed 6 months faster because of it. You publish a second major paper. You played the "Academic Game" and won resources, but the nephew eventually uses your work to get a job he isn’t qualified for. You are successful but feel like a mercenary.', th: '💰 ทรัพยากรมหาศาล! คุณได้ทั้งทุนและเครื่องมือ งานวิจัยชิ้นต่อไปของคุณเสร็จเร็วขึ้น 6 เดือนเพราะเหตุนี้ คุณได้ตีพิมพ์บทความใหญ่ชิ้นที่สอง คุณเล่น "เกมวิชาการ" และชนะในแง่ทรัพยากร แต่สุดท้ายหลานเขาก็ใช้ผลงานคุณไปได้งานที่เขาไม่มีคุณสมบัติพอ คุณประสบความสำเร็จแต่รู้สึกเหมือนเป็นมือปืนรับจ้าง', zh: '💰 资源财富！你获得了资金和设备。由于这些资源，你的下一项研究提前 6 个月完成。你发表了第二篇重要论文。你玩转了“学术游戏”并赢得了资源，但那个侄子最终利用你的成果获得了一份他并不称职的工作。你很成功，但感觉自己像个雇佣兵。' },
                stats: { competence: 45, ethics: 15, leadership: 45, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '📝 The Diluted Credit: "Say nothing. It’s not worth the fight. Focus on getting the paper out so you can graduate and leave this toxic environment."', th: '📝 นิ่งเงียบไม่สู้: "ไม่ต้องพูดอะไร มันไม่คุ้มที่จะสู้ สนใจแค่การเข็นบทความนี้ออกมาให้จบเพื่อที่คุณจะได้จบการศึกษาและไปจากสภาพแวดล้อมที่เป็นพิษนี้"', zh: '📝 稀释的荣誉："什么也不说。不值得为此争执。专注于发表论文，这样你就可以毕业并离开这个有毒的环境。"' },
                consequence: { en: '⚠️ Silent Resentment! You graduate smoothly. The PI writes you a standard recommendation letter. But years later, you see the nephew presenting YOUR research at a conference. The lack of closure eats at you. You escaped the lab, but you lost a piece of your scientific soul to cynicism.', th: '⚠️ ความขุ่นเคืองที่เงียบงัน! คุณจบการศึกษาอย่างราบรื่น PI เขียนจดหมายรับรองมาตรฐานให้คุณ แต่หลายปีต่อมา คุณเห็นหลานเขานำเสนองานวิจัยของ "คุณ" ในงานประชุม การไม่ได้สะสางเรื่องนี้กัดกินใจคุณ คุณหนีออกจากแล็บได้ แต่เสียจิตวิญญาณนักวิทยาศาสตร์ไปบางส่วนให้กับความเห็นแก่ตัว', zh: '⚠️ 无声的怨恨！你顺利毕业了。PI 为你写了一封标准的推荐信。但多年后，你看到那个侄子在会议上展示“你”的研究成果。未能解决此事一直折磨着你。你逃离了实验室，但你科学灵魂的一部分却输给了愤世嫉俗。' },
                stats: { competence: 30, ethics: 20, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: { en: '📣 The Public Reveal: "Publish the raw lab notebooks on an Open Science platform before the journal submission, clearly documenting who did which experiments."', th: '📣 เปิดเผยข้อมูลสาธารณะ: "เผยแพร่สมุดบันทึกแล็บฉบับดิบบนแพลตฟอร์ม Open Science ก่อนส่งวารสาร เพื่อยืนยันให้ชัดเจนว่าใครเป็นคนทำการทดลองส่วนไหน"', zh: '📣 公开披露："在提交给期刊之前，在开放科学平台上发布原始实验笔记，清晰记录谁做了哪些实验。"' },
                consequence: { en: '🌟 Open Science Pioneer! The journal rejects the paper because it\'s already "public," but the scientific community on social media rallies behind you. You are offered a position at an Open Source Biotech non-profit. You didn’t get the Nature credit, but you became a global advocate for research transparency. You are poor but famous.', th: '🌟 ผู้บุกเบิก Open Science! วารสารปฏิเสธบทความเพราะมันถูก "เปิดเผย" แล้ว แต่ชุมชนวิทยาศาสตร์ในโลกออนไลน์สนับสนุนคุณ คุณได้รับข้อเสนอตำแหน่งในองค์กรไบโอเทคโอเพนซอร์สแบบไม่แสวงหากำไร คุณไม่ได้เครดิตจาก Nature แต่กลายเป็นกระบอกเสียงระดับโลกเรื่องความโปร่งใสในงานวิจัย คุณจนแต่มีชื่อเสียง', zh: '🌟 开放科学先驱！期刊拒绝了这篇论文，因为它已经“公开”了，但社交媒体上的科学界都支持你。你获得了一家开源生物技术非营利组织的工作。你没有获得在《自然》杂志上的荣誉，但你成为了全球研究透明度的倡导者。虽然清贫，但声名大噪。' },
                stats: { competence: 50, ethics: 40, leadership: 35, innovation: 50 }
            }
        ]
    },
    {
        id: 'bi_008',
        text: {
            en: '💰 The Funding Freeze: A major government grant for your oncology research is suddenly frozen due to political shifts. You have enough funds to last 3 months, or you can accept "unrestricted" funding from a tobacco giant looking to study "lung resilience." They promise not to interfere with the results, but their name attached is a stigma.',
            th: '💰 ทุนวิจัยที่ถูกแช่แข็ง: ทุนรัฐบาลขนาดใหญ่สำหรับงานวิจัยโรคมะเร็งของคุณถูกระงับกะทันหันเนื่องจากการเปลี่ยนแปลงทางการเมือง คุณมีเงินเหลือพอใช้อีก 3 เดือน หรือคุณจะรับทุน "แบบไม่จำกัดเงื่อนไข" จากยักษ์ใหญ่ค้ายาสูบที่ต้องการศึกษา "ความยืดหยุ่นของปอด" พวกเขาสัญญาว่าจะไม่แทรกแซงผลลัพธ์ แต่ชื่อของพวกเขาที่พ่วงมาคือตราบาป',
            zh: '💰 资金冻结：由于政治局势变动，政府资助的一项针对癌症研究的重要拨款突然冻结。你的资金只能维持 3 个月，或者你可以接受一家烟草巨头寻找研究“肺部韧性”的“无限制”资助。他们承诺不干涉结果，但他们的名字即便出现在研究中也是一种耻辱。'
        },
        options: [
            {
                id: 'A',
                text: { en: '❌ Refuse the Funding: "Close the lab, lay off your staff, and pivot to a teaching-only role until a clean grant becomes available. Science must not be bought."', th: '❌ ปฏิเสธเงินทุน: "ปิดแล็บ เลิกจ้างพนักงาน และเปลี่ยนไปเน้นการสอนเพียงอย่างเดียวจนกว่าจะมีทุนที่โปร่งใสเข้ามา วิทยาศาสตร์ซื้อมือไม่ได้"', zh: '❌ 拒绝资助：“关闭实验室，解雇员工，转而担任纯教学职位，直到获得纯正的拨款。科学决不能被收买。”' },
                consequence: { en: '💀 Laboratory Death! Your talented postdocs leave for industry. Your research equipment gathers dust. You spend 2 years as an adjunct professor struggling to survive. Eventually, a small NGO funds you, but you’ve lost your competitive edge. You kept your soul, but your research stalled for a generation.', th: '💀 จุดจบของแล็บ! Postdoc ที่เก่งกาจของคุณย้ายไปทำงานโรงงาน อุปกรณ์วิจัยถูกทิ้งให้ฝุ่นจับ คุณใช้เวลา 2 ปีในฐานะอาจารย์พิเศษที่ดิ้นรนเอาชีวิตรอด ในที่สุด NGO เล็กๆ ให้ทุนคุณ แต่คุณสูญเสียความสามารถในการแข่งขันไปแล้ว คุณรักษาจิตวิญญาณไว้ได้ แต่งานวิจัยหยุดชะงักไปนาน', zh: '💀 实验室夭折！你有才华的博士后流向了工业界。你的研究设备落满了灰尘。你做了两年的兼读教授，在生存边缘挣扎。最终，一家小型非营利组织资助了你，但你已经失去了竞争优势。你保住了灵魂，但你的研究却停滞了一代人的时间。' },
                stats: { competence: 20, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🚬 The Devil’s Bargain: "Take the tobacco money. Use it to keep your staff employed and finish the life-saving cancer drug. The results will speak for themselves."', th: '🚬 ข้อตกลงกับปีศาจ: "รับเงินจากบริษัทยาเส้น ใช้มันเพื่อรักษาพนักงานและพัฒนายารักษามะเร็งช่วยชีวิตคนให้สำเร็จ ผลลัพธ์จะพิสูจน์ทุกอย่างเอง"', zh: '🚬 魔鬼的交易：“拿走烟草公司的钱。用它来维持员工就业并完成拯救生命的癌症药物。结果会证明一切。”' },
                consequence: { en: '💸 Moral Compromise! The drug is a success and saves thousands. However, the tobacco company uses your "Lung Resilience" study in their marketing to suggest smoking isn’t that bad. You are banned from presenting at major medical conferences. You saved lives, but you became a tool for corporate propaganda. You are rich in data but poor in credibility.', th: '💸 การประนีประนอมทางศีลธรรม! ยาประสบความสำเร็จและช่วยชีวิตคนนับพัน อย่างไรก็ตาม บริษัทบุหรี่ใช้การศึกษา "ความยืดหยุ่นของปอด" ของคุณในการโฆษณาเพื่อสื่อว่าการสูบบุหรี่ไม่ได้แย่ขนาดนั้น คุณถูกแบนจากการนำเสนอในงานประชุมการแพทย์ใหญ่ๆ คุณช่วยชีวิตคนได้ แต่คุณกลายเป็นเครื่องมือโฆษณาชวนเชื่อ คุณมีข้อมูลล้นมือแต่ขาดความน่าเชื่อถือ', zh: '💸 道德妥协！该药物取得了成功并拯救了数千人。然而，烟草公司在营销中引用了你的“肺部韧性”研究，暗示吸烟并没那么糟糕。你被禁止在主要的医学会议上发言。你挽救了生命，但你成为了企业宣传的工具。你拥有丰富的数据，但信誉扫地。' },
                stats: { competence: 45, ethics: 10, leadership: 35, innovation: 45 }
            },
            {
                id: 'C',
                text: { en: '🎓 The Crowdfunded Pivot: "Launch a public fundraising campaign. Explain the situation and try to get 10,000 small donors to keep the lab afloat."', th: '🎓 ทุนราษฎร์: "เริ่มแคมเปญระดมทุนสาธารณะ อธิบายสถานการณ์และพยายามขอจากผู้บริจาครายย่อย 10,000 คนเพื่อให้แล็บอยู่รอดต่อไป"', zh: '🎓 众筹转向：“发起一场公共筹款活动。解释情况，并尝试争取 1 万名小额捐赠者，以维持实验室的运转。”' },
                consequence: { en: '🌟 Community Support! It works, but it takes 60% of your time to manage donors and social media. Your research slows down, but you build a mass movement for "Science for the People." You become a public figure. You aren’t the best researcher anymore, but you are a powerful voice for scientific funding reform.', th: '🌟 พลังชุมชน! มันได้ผล แต่คุณต้องเสียเวลา 60% ไปกับการจัดการผู้บริจาคและโซเชียลมีเดีย งานวิจัยล่าช้าลง แต่คุณสร้างมวลชนเพื่อ "วิทยาศาสตร์เพื่อประชาชน" คุณกลายเป็นบุคคลสาธารณะ คุณอาจไม่ใช่นักวิจัยที่เก่งที่สุดแล้ว แต่คุณเป็นเสียงที่ทรงพลังในการปฏิรูปทุนวิจัย', zh: '🌟 社区支持！众筹成功了，但你 60% 的时间都花在管理捐赠者和社交媒体上。你的研究放缓了，但你建立了一场“为人民服务科学”的大规模运动。你成为了公众人物。你不再是最好的研究员，但你是科学资助改革的有力倡导者。' },
                stats: { competence: 35, ethics: 45, leadership: 50, innovation: 30 }
            },
            {
                id: 'D',
                text: { en: '🏢 The Industry Hybrid: "Partner with a mid-sized Biotech startup. Give them exclusive licensing to your future patents in exchange for immediate bridge funding."', th: '🏢 พันธมิตรไบโอเทค: "ร่วมมือกับสตาร์ทอัพไบโอเทคขนาดกลาง ให้สิทธิ์ผูกขาดในใบอนุญาตสิทธิบัตรในอนาคตเพื่อแลกกับทุนหมุนเวียนทันที"', zh: '🏢 工业混合模式：“与一家中型生物技术初创公司合作。将你未来的专利独家授权给他们，以换取立即的过渡资金。”' },
                consequence: { en: '⚖️ Corporate Chains! You keep the lab open, but the startup forces you to hide "negative results" that might hurt their stock price. You gain stability but lose your academic freedom. You are now more of a high-end consultant than a pure scientist. The lab survives, but the mission has shifted from truth to profit.', th: '⚖️ โซ่ตรวนบริษัท! คุณรักษาแล็บไว้ได้ แต่สตาร์ทอัพบังคับให้คุณซ่อน "ผลการวิจัยเชิงลบ" ที่อาจกระทบราคาหุ้น คุณมีความมั่นคงแต่สูญเสียอิสรภาพทางวิชาการ ตอนนี้คุณเหมือนที่ปรึกษาระดับสูงมากกว่านักวิทยาศาสตร์บริสุทธิ์ แล็บรอดแต่มิชชันเปลี่ยนจากความจริงเป็นผลกำไร', zh: '⚖️ 企业枷锁！你维持了实验室的开放，但初创公司强迫你隐藏可能损害其股价的“负面结果”。你获得了稳定，但失去了学术自由。你现在更像是一个高端顾问，而不是纯粹的科学家。实验室幸存了下来，但使命已从追求真理转向追求利润。' },
                stats: { competence: 40, ethics: 20, leadership: 40, innovation: 45 }
            }
        ]
    },
    {
        id: 'bi_009',
        text: {
            en: '📖 The Erroneous Citations: While reviewing personal notes of your mentor—the most famous biologist in your field—you find a fundamental statistical error that invalidates his most famous finding from 10 years ago. If you point it out, you destroy his legacy and your own career path within his network. If you stay quiet, the field continues to build on a lie.',
            th: '📖 ข้อมูลอ้างอิงที่ผิดพลาด: ระหว่างตรวจทานสมุดบันทึกของอาจารย์ที่ปรึกษา—นักชีววิทยาที่โด่งดังที่สุดในสาขาของคุณ—คุณพบข้อผิดพลาดทางสถิติขั้นพื้นฐานที่ทำให้การค้นพบที่โด่งดังที่สุดของเขาเมื่อ 10 ปีก่อนกลายเป็นโมฆะ หากคุณชี้แจง คุณจะทำลายชื่อเสียงของเขาและเส้นทางอาชีพของคุณเองในเครือข่ายของเขา หากคุณนิ่งเฉย วงการก็จะเดินหน้าต่อไปบนคำลวง',
            zh: '📖 错误的引用：在审阅你的导师——你所在领域最著名的生物学家——的个人笔记时，你发现了一个基本的统计错误，该错误使他 10 年前最著名的发现失效。如果你指出这一点，你就会毁掉他的声誉和他网络中你自己的职业道路。如果你保持沉默，该领域将继续建立在谎言之上。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🔍 Private Correction: "Approach him privately. Offer to co-author a \'Correction\' paper that frames it as a \'Modern Re-interpretation\' to save face while fixing the science."', th: '🔍 แก้ไขเป็นการส่วนตัว: "เข้าพบเขาเป็นการส่วนตัว เสนอตัวเป็นผู้แต่งร่วมในบทความ \'แก้ไข\' โดยระบุว่าเป็น \'การตีความใหม่ในยุคสมัยใหม่\' เพื่อรักษาหน้าเขาในขณะที่แก้ไขความถูกต้อง"', zh: '🔍 私下纠正：“私下找他。提议合著一篇“纠偏”论文，将其定性为“现代重新解释”，在纠正科学错误的同时挽回面子。”' },
                consequence: { en: '✅ Graceful Truth! He is terrified but grateful for your discretion. The correction is published. He rewards you by making you the lead on his next $2M project. You balanced ethics with diplomacy perfectly, though a few purists suspect you played "politics" with the truth.', th: '✅ ความจริงที่สง่างาม!เขากลัวแต่ซึ้งใจในความสุขุมของคุณ การแก้ไขได้รับการตีพิมพ์ วงการเปลี่ยนทิศทางเล็กน้อย เขาตอบแทนด้วยการให้คุณเป็นหัวหน้าโปรเจกต์ $2M ถัดไป คุณรักษาสมดุลระหว่างจริยธรรมกับการทูตได้อย่างดีเยี่ยม', zh: '✅ 优雅的真相！他虽然感到恐惧，但对你的谨慎深表感激。纠偏论文发表了。他奖励你担任他下一个 200 万美元项目的负责人。你完美地平衡了伦理与外交，尽管一些纯粹主义者怀疑你在真相上玩弄“政治”。' },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'B',
                text: { en: '📢 The Scientific Whistleblower: "Publish an independent critique in a top journal. Science is about truth, not idols. The error must be publicly corrected by an outsider."', th: '📢 นกต่อทางวิทยาศาสตร์: "ตีพิมพ์บทวิจารณ์อิสระในวารสารชั้นนำ วิทยาศาสตร์คือเรื่องของความจริง ไม่ใช่รูปเคารพ ข้อผิดพลาดต้องถูกแก้ไขโดยบุคคลภายนอกเพื่อให้สาธารณะรับรู้"', zh: '📢 科学举报人：“在顶级期刊上发表独立评论。科学关乎真核，而非崇拜。错误必须由局外人公开纠正。”' },
                consequence: { en: '🔥 Academic Firestorm! You become famous overnight as the "Giantslayer." The mentor’s funding is pulled. He is forced to retire. However, his powerful friends ensure you never get tenure anywhere. You move to Europe to restart your career. You are the moral gold standard, but you are effectively an exile.', th: '🔥 พายุเพลิงวิชาการ! คุณโด่งดังข้ามคืนในฐานะ "ผู้พิชิตยักษ์ใหญ่" ทุนวิจัยของอาจารย์ถูกตัด เขาถูกบังคับให้เกษียณ อย่างไรก็ตาม เพื่อนที่มีอำนาจของเขาทำให้คุณไม่มีทางได้ตำแหน่งบรรจุที่ไหนเลย คุณคือมาตรฐานทองคำทางศีลธรรมแต่คุณคือผู้อพยพทางวิชาการ', zh: '🔥 学术风暴！作为“巨人杀手”，你一夜成名。导师的资助被取消。他被迫退休。然而，他那些权势熏天的朋友确保你永远无法在任何地方获得终身教职。你搬到欧洲重新开始你的职业生涯。你是道德金标准，但实际上却是一个流放者。' },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 25 }
            },
            {
                id: 'C',
                text: { en: '🤐 The Loyal Protege: "Bury the finding. His work has inspired millions and done more good than harm. One bad stat doesn’t ruin the overall progress."', th: '🤐 ลูกศิษย์ผู้ซื่อสัตย์: "ฝังเรื่องนั้นทิ้งไป งานของเขาแรงบันดาลใจให้คนนับล้านและทำประโยชน์มากกว่าโทษ ข้อมูลผิดจุดเดียวไม่ทำลายความก้าวหน้าโดยรวมหรอก"', zh: '🤐 忠实的门生：“埋没这个发现。他的工作激励了数百万人，利大于弊。一处错误的统计数据并不会毁掉整体进展。”' },
                consequence: { en: '⚠️ Institutional Decay! You are promoted within his network. Life is easy. However, 5 years later, a rival lab finds the error and exposes it. Because you were a peer-reviewer on his late work, you are implicated in a "conspiracy of silence." You lose your license for academic fraud. Loyalty became your downfall.', th: '⚠️ ความเสื่อมถอยของสถาบัน! คุณได้รับตำแหน่งสูงขึ้นในเครือข่ายของเขา ชีวิตสะดวกสบาย แต่ 5 ปีต่อมา แล็บคู่แข่งพบข้อผิดพลาดและเปิดโปงมัน คุณเลยถูกดึงเข้าไปติดร่างแห "สมคบคิดปิดบังความจริง" คุณถูกยึดใบอนุญาตทางวิชาการ ความซื่อสัตย์แบบผิดๆ กลายเป็นจุดจบของคุณ', zh: '⚠️ 制度腐败！你在他的网络中获得晋升。生活很安逸。然而，5 年后，一家竞争实验室发现了这个错误并将其暴露。你因卷入了“沉默阴谋”而失去了学术资格。忠诚成了你的陨落之源。' },
                stats: { competence: 25, ethics: 10, leadership: 20, innovation: 15 }
            },
            {
                id: 'D',
                text: { en: '💡 The New Synthesis: "Write a new paper that incorporates the old findings as a \'Case Study,\' correcting the math while showcasing the mentor as a pioneer of the initial idea."', th: '💡 สังเคราะห์ความรู้ใหม่: "เขียนบทความใหม่ที่ดึงงานเก่ามาเป็น \'กรณีศึกษา\' แก้ไขคณิตศาสตร์ในนั้นในขณะที่ยกย่องอาจารย์เป็นผู้บุกเบิกไอเดียแรก"', zh: '💡 新合成：“写一篇新论文，将旧发现作为‘案例研究’纳入其中，在纠正数学错误的同时，展示导师是最初想法的先驱。”' },
                consequence: { en: '🌟 Intellectual Evolution! You elegantly bridge the past and future. The mentor is happy to be "updated" rather than "disproven." You establish a new sub-discipline in biology. You are seen as the intellectual heir to the throne. You saved the science and the person by being smarter than the conflict.', th: '🌟 วิวัฒนาการทางปัญญา! คุณเชื่อมต่ออดีตและอนาคตได้อย่างสง่างาม อาจารย์พึงพอใจที่ถูก "อัปเดต" มากกว่าถูก "พิสูจน์ว่าผิด" คุณได้สร้างสาขาย่อยใหม่ในชีววิทยา คุณช่วยทั้งวิทยาศาสตร์และคนไว้ได้ด้วยการฉลาดเหนือความขัดแย้ง', zh: '🌟 智力进化！你优雅地连接了过去和未来。导师很高兴被“更新”而不是被“证伪”。你建立了一个新的生物学分支学科。你被视为该领域的智力继承人。通过比冲突更聪明的方式，你拯救了科学和导师。' },
                stats: { competence: 50, ethics: 35, leadership: 45, innovation: 50 }
            }
        ]
    },
    {
        id: 'bi_010',
        text: {
            en: '🧬 The CRISPR Patent War: You\'ve invented a tool to specifically edit the DNA of drought-resistant crops. Your University wants to patent it and charge high fees, while you want to release it as "Open Bio-Source" for developing nations. The VP of Research threatens to seize your lab if you don\'t sign the patent agreement.',
            th: '🧬 สงครามสิทธิบัตร CRISPR: คุณคิดค้นเครื่องมือสำหรับตัดต่อ DNA ของพืชทนแล้งโดยเฉพาะ มหาวิทยาลัยของคุณต้องการจดสิทธิบัตรและเรียกเก็บค่าธรรมเนียมสูงๆ ในขณะที่คุณต้องการเปิดเป็น "Open Bio-Source" ให้ประเทศกำลังพัฒนาใช้ฟรี รองอธิการบดีฝ่ายวิจัยขู่จะยึดแล็บของคุณหากคุณไม่เซ็นสัญญาอ้างสิทธิ์สิทธิบัตร',
            zh: '🧬 CRISPR 专利战：你发明了一种专门编辑抗旱作物 DNA 的工具。你的大学想申请专利并收取高额费用，而你想将其作为“开放生物资源”发布给发展中国家。研究副校长威胁说，如果你不签署专利协议，就没收你的实验室。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🖋️ Sign the Patent: "Protect the lab. It\'s better to have a lab and do 80% good than have no lab and do 0% good. Use the royalties for your own research."', th: '🖋️ เซ็นสิทธิบัตร: "รักษาแล็บไว้ก่อน มีแล็บแล้วทำความดีได้ 80% ยังดีกว่าไม่มีแล็บแล้วทำอะไรไม่ได้เลย 0% ใช้ค่าธรรมเนียมนั้นมาทำงานวิจัยส่วนตัวต่อไป"', zh: '🖋️ 签署专利：“保护实验室。拥有实验室并做 80% 的好事，总比没有实验室并做 0% 的好事要好。将版税用于你自己的研究。”' },
                consequence: { en: '💰 Institutional Support! You become the "Golden Goose" of the Uni. You get a brand new $10M building. However, African and SEA farmers cannot afford your seeds. You watch from your ivory tower as your invention is used only by mega-corporations. You are a successful commercial scientist, but you failed your humanitarian goal.', th: '💰 การสนับสนุนจากสถาบัน! คุณกลายเป็น "ห่านทองคำ" ของมหาวิทยาลัย คุณได้ตึกใหม่มูลค่า $10M อย่างไรก็ตาม เกษตรกรในแอฟริกาและเอเชียตะวันออกเฉียงใต้ไม่มีเงินซื้อเมล็ดพันธุ์ของคุณ คุณคือนักวิทยาศาสตร์เชิงพาณิชย์ที่สำเร็จ แต่ล้มเหลวในเป้าหมายเพื่อมนุษยชาติ', zh: '💰 机构支持！你成了大学的“金母鸡”。你得到了一座价值 1000 万美元的新大楼。然而，非洲和东南亚的农民买不起你的种子。你在象牙塔里看着你的发明只被大型跨国公司使用。你是一名成功的商业科学家，但你未能实现人道主义目标。' },
                stats: { competence: 40, ethics: 20, leadership: 40, innovation: 45 }
            },
            {
                id: 'B',
                text: { en: '🔓 The "Copyleft" Leak: "Quietly upload the genetic sequences to an encrypted public server before signing. Let the genie out of the bottle."', th: '🔓 จงใจทำหลุดแบบ "Copyleft": "แอบอัปโหลดลำดับพันธุกรรมไปยังเซิร์ฟเวอร์สาธารณะที่เข้ารหัสก่อนจะเซ็นชื่อ ปล่อยยักษ์ออกจากตะเกียงซะ"', zh: '🔓“左版”泄露：“在签署协议之前，悄悄将基因序列上传到加密的公共服务器。让真相大白于天下。”' },
                consequence: { en: '⚖️ Legal Limbo! The Uni finds out and sues you. You are fired. However, specialized labs in India and Brazil download the data and start producing free seeds. You spend years in court, but millions are fed during droughts. You are a global hero but legally bankrupt. Your career in the US is over, but you are a VIP in the Global South.', th: '⚖️ ติดหล่มกฎหมาย! มหาวิทยาลัยรู้เรื่องและฟ้องคุณ คุณถูกไล่ออก แต่อย่างไรก็ตาม แล็บเฉพาะทางในอินเดียและบราซิลดาวน์โหลดข้อมูลและเริ่มผลิตเมล็ดพันธุ์ฟรี คุณใช้เวลาหลายปีในศาลแต่คนนับล้านมีอาหารกินในช่วงแล้ง คุณคือฮีโร่โลกแต่ล้มละลายทางกฎหมาย', zh: '⚖️ 法律困境！大学发现了并起诉了你。你被解雇了。然而，印度和巴西的专业实验室下载了数据并开始生产免费种子。你花了数年时间打官司，但在干旱期间有数百万人得到了供养。你是全球英雄，但在法律上破产了。你在美国的职业生涯结束了。' },
                stats: { competence: 30, ethics: 50, leadership: 45, innovation: 50 }
            },
            {
                id: 'C',
                text: { en: '🤝 The Hybrid License: "Propose a Two-Tier license: Free for NGOs and low-income nations, but expensive for commercial giants. Use the latter to pay the Uni."', th: '🤝 สัญญาผูกพันแบบสองระดับ: "เสนอสัญญาสองระดับ: ใช้ฟรีสำหรับ NGO และประเทศรายได้น้อย แต่เก็บแพงสำหรับบริษัทยักษ์ใหญ่ เอารายได้จากส่วนหลังมาจ่ายให้มหาวิทยาลัย"', zh: '🤝 混合授权：“提议双层授权：对非营利组织和低收入国家免费，但对商业巨头收取高额费用。用后者的收入来支付大学费用。”' },
                consequence: { en: '✅ Political Masterstroke! The VP agrees because it brings in PR "ESG" points and actual money. You become the Director of the "Global Seed Initiative." You proved that ethical capitalism in biology is possible. You are a leader in both science and policy now. This model becomes the new standard for university tech transfer.', th: '✅ ยอดเยี่ยมทางการเมือง! รองอธิการบดีตกลงเพราะมันสร้างภาพลักษณ์ "ESG" และได้เงินจริง คุณกลายเป็นผู้อำนวยการ "โครงการเมล็ดพันธุ์โลก" คุณพิสูจน์แล้วว่าทุนนิยมที่มีจริยธรรมในชีววิทยาเป็นไปได้ ตอนนี้คุณเป็นผู้นำทั้งในด้านวิทยาศาสตร์และนโยบาย', zh: '✅ 政治神作！副校长同意了，因为这能带来公关“ESG”积分和真金白银。你成为了“全球种子计划”的负责人。你证明了生物学中的伦理资本主义是可能的。你现在是科学和政策领域的领导者。这种模式成为了大学技术转让的新标准。' },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 45 }
            },
            {
                id: 'D',
                text: { en: '🚀 Start your own Spin-off: "Resign and take the tech with you before the paper is officially filed. Found a B-Corp that guarantees accessibility."', th: '🚀 ลาออกไปทำเอง: "ลาออกและหอบเทคโนโลยีไปด้วยก่อนที่บทความจะถูกยื่นอย่างเป็นทางการ ก่อตั้งบริษัทแบบ B-Corp ที่รับรองว่าทุกคนจะเข้าถึงได้"', zh: '🚀 创办自己的衍生公司：“在论文正式提交前辞职并带走技术。创办一家保证可达性的 B 型企业。”' },
                consequence: { en: '⚠️ Risk and Reward! You spend 3 years struggling for VC funding because you refuse to maximize profits. Eventually, a social-impact fund backs you. You are successful, but you lost access to high-end University sequencers. Your innovation speed slows down, but your impact is deep and direct. You are a "Bio-Preneur" now.', th: '⚠️ ความเสี่ยงและผลตอบแทน! คุณใช้เวลา 3 ปีดิ้นรนหาทุน VC เพราะคุณปฏิเสธที่จะทำกำไรสูงสุด ในที่สุดกองทุนเพื่อสังคมก็หนุนหลังคุณ คุณประสบความสำเร็จแต่สูญเสียการเข้าถึงเครื่องถอดรหัสพันธุกรรมราคาแพงของมหาวิทยาลัย ตอนนี้คุณคือ "นักธุรกิจชีวภาพ"', zh: '⚠️ 风险与回报！由于你拒绝追求利润最大化，你花了 3 年时间争取风投资金。最终，一家社会影响基金支持了你。你成功了，但你失去了使用大学高端测序仪的机会。你的创新速度放缓，但你的影响深远且直接。' },
                stats: { competence: 45, ethics: 45, leadership: 45, innovation: 40 }
            }
        ]
    },
    {
        id: 'bi_011',
        text: {
            en: '🧫 The Lab Safety Oversight: A summer intern accidentally pricks her finger with a needle used on a transgenic mouse containing a non-lethal but traceable fluorescent virus. She’s fine, but reporting it forces a 30-day lab shutdown and a federal audit during your most critical week of data collection. Do you report it or just give her a private antibiotic course?',
            th: '🧫 ความสะเพร่าเรื่องความปลอดภัย: เด็กฝึกงานภาคฤดูร้อนบังเอิญถูกเข็มที่ใช้กับหนูดัดแปลงพันธุกรรมทิ่มนิ้ว ซึ่งในหนูมีไวรัสเรืองแสงที่ไม่อันตรายแต่ตรวจพบได้ เธอไม่เป็นไร แต่ถ้ารายงานจะต้องปิดแล็บ 30 วันและถูกตรวจสอบโดยรัฐบาลในช่วงสัปดาห์ที่สำคัญที่สุดในการเก็บข้อมูล คุณจะรายงานหรือแค่ให้ยาปฏิชีวนะเธอกินเป็นการส่วนตัว?',
            zh: '🧫 实验室安全疏忽：一名暑期实习生意外被针头扎伤了手指，该针头曾用于一只携带非致命但可追踪荧光病毒的转基因小鼠。她没事，但报告此事将迫使实验室在数据收集最关键的一周关闭 30 天，并接受联邦审计。你是报告此事，还是私下给她开一个抗生素疗程？'
        },
        options: [
            {
                id: 'A',
                text: { en: '📋 Strict Protocol: "Report the incident immediately. Safety protocols exist for a reason. Better to lose a month of data than risk a bio-hazard or a cover-up scandal."', th: '📋 ทำตามกฎอย่างเคร่งครัด: "รายงานเหตุการณ์ทันที กฎความปลอดภัยมีไว้เพื่อเหตุผลบางอย่าง ยอมเสียข้อมูลหนึ่งเดือนดีกว่าเสี่ยงภัยชีวภาพหรือเรื่องอื้อฉาวจากการปกปิด"', zh: '📋 严格规程：“立即报告事故。安全规程的存在是有原因的。宁愿损失一个月的数据，也不愿冒生物危害或掩盖丑闻的风险。”' },
                consequence: { en: '✅ Bureaucratic Integrity! The audit finds your documentation was perfect. You are praised as a "Safety Hero." The funding body grants you a 6-month extension for your "Safety First" attitude. Your lab becomes the gold standard for institutional training. You are a leader of people.', th: '✅ ความซื่อสัตย์ในระบบ! ผลการตรวจสอบพบว่าเอกสารของคุณสมบูรณ์แบบ คุณถูกยกย่องให้เป็น "วีรบุรุษด้านความปลอดภัย" ผู้ให้ทุนขยายเวลาให้ 6 เดือนเพราะทัศนคติ "ความปลอดภัยต้องมาก่อน" แล็บของคุณกลายเป็นต้นแบบมาตรฐานสำหรับการฝึกอบรม คุณคือผู้นำคนจริง', zh: '✅ 官僚诚信！审计发现你的文档处理很完美。你被誉为“安全英雄”。资助机构因你“安全第一”的态度给予了你 6 个月的延期。你的实验室成为了机构培训的金标准。你是一个优秀的领导者。' },
                stats: { competence: 35, ethics: 50, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤫 The Silent Treatment: "Clean the wound, give her some broad-spectrum antibiotics, and tell her to take a long weekend. No report, no shutdown, no problem."', th: '🤫 เงียบไว้ก่อน: "ล้างแผล ให้ยาปฏิชีวนะครอบคลุมเชื้อ และบอกให้เธอไปพักร้อนยาวๆ ไม่มีการรายงาน ไม่มีปิดแล็บ ไม่มีปัญหา"', zh: '🤫 沉默处理：“清理伤口，给她一些广谱抗生素，并让她休个长周末。不报告，不关停，没问题。”' },
                consequence: { en: '💀 Hidden Infection! The virus was more persistent than thought. The intern develops a local fluorescent rash 2 weeks later and goes to the ER. The CDC is called. Your lab is permanently shuttered. You lose your license and face criminal charges for "Culpable Negligence." One shortcut ended your career.', th: '💀 การติดเชื้อที่ซ่อนอยู่! ไวรัสอึดกว่าที่คิด 2 สัปดาห์ต่อมาเด็กฝึกงานมีผื่นเรืองแสงขึ้นและต้องเข้าห้องฉุกเฉิน CDC ถูกเรียกตัว แล็บคุณถูกปิดถาวร คุณถูกยึดใบอนุญาตและถูกดำเนินคดีอาญาฐาน "ประมาทเลินเล่อเป็นเหตุให้ผู้อื่นได้รับอันตราย" ทางลัดเพียงครั้งเดียวทำลายอาชีพ', zh: '💀 隐藏感染！病毒比预想的更持久。两周后，实习生出现了局部荧光皮疹并去了急诊室。疾控中心（CDC）介入了。你的实验室被永久关闭。你失去了执业资格，并因“疏忽罪”面临刑事指控。一次捷径终结了你的职业生涯。' },
                stats: { competence: 15, ethics: -10, leadership: 10, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '🔍 Internal Monitoring: "Don’t report to the Feds, but report to the Uni Biosafety Officer. Ask for a \'Silent Audit\' while the lab remains open for critical testing."', th: '🔍 ตรวจสอบภายใน: "ไม่รายงานรัฐบาล แต่รายงานเจ้าหน้าที่ชีวนิรภัยของมหาวิทยาลัย ขอให้มีการตรวจสอบแบบเงียบในขณะที่เปิดแล็บเพื่อทำการทดสอบที่สำคัญต่อไป"', zh: '🔍 内部监测：“不要向联邦政府报告，但向大学生物安全官员报告。申请在实验室继续进行关键测试的同时进行‘无声审计’。”' },
                consequence: { en: '⚖️ Grey Area Win! The Uni helps you manage it internally. You finish the data collection. The intern is monitored and stays healthy. However, the Biosafety Officer now "owns" you and asks for favors on his own research. You are effective but compromised. You constanty worry about a future whistleblower.', th: '⚖️ ชนะในพื้นที่สีเทา! มหาวิทยาลัยช่วยคุณจัดการภายใน คุณเก็บข้อมูลเสร็จ เด็กฝึกงานถูกเฝ้าระวังและสุขภาพแข็งแรงดี แต่อย่างไรก็ตาม ตอนนี้เจ้าหน้าที่ชีวนิรภัย "ถือไพ่เหนือกว่า" คุณและขอให้คุณช่วยงานวิจัยของเขาเป็นการตอบแทน คุณทำงานได้ผลแต่ต้องยอมลดเกียรติ', zh: '✅ 灰色地带获胜！大学帮助你在内部解决了此事。你完成了数据收集。实习生受到了监测且身体健康。然而，生物安全官员现在握有你的“把柄”，并要求你在他自己的研究中帮忙。你很有效率，但妥协了。' },
                stats: { competence: 40, ethics: 20, leadership: 35, innovation: 30 }
            },
            {
                id: 'D',
                text: { en: '🔬 Double-Down on Data: "Tell the intern to stay home. Hire a private nurse to watch her. Focus 100% on finishing the data so the risk wasn\'t in vain."', th: '🔬 ทุ่มเทกับข้อมูลเป็นสองเท่า: "บอกให้เด็กฝึกงานอยู่บ้าน จ้างพยาบาลส่วนตัวไปเฝ้าเธอ ทุ่มสมาธิ 100% กับการเก็บข้อมูลให้เสร็จเพื่อไม่ให้ความเสี่ยงนี้สูญเปล่า"', zh: '🔬 加倍投入数据：“让实习生呆在家里。请个私人护士照照看她。100% 专注于完成数据，这样风险才不会白费。”' },
                consequence: { en: '⚠️ Scientific Success, Moral Decay! You get the breakthrough data. Your paper is a hit. But the intern feels traumatized and quits biology entirely. You treat people as disposable tools for "The Mission." You are a world-class scientist, but your lab has a massive turnover rate. You have no true disciples, only employees.', th: '⚠️ สำเร็จทางวิจัยแต่ใจพังสลาย! คุณได้ข้อมูลที่ยอดเยี่ยม บทความคุณดังระเบิด แต่เด็กฝึกงานฝังใจเจ็บและเลิกเรียนชีววิทยาไปเลย คุณมองคนเป็นเครื่องมือที่ใช้แล้วทิ้งเพื่อ "ภารกิจ" คุณคือนักวิทยาศาสตร์ระดับโลกแต่แล็บคุณมีอัตราคนลาออกสูงมาก คุณไม่มีศิษย์แท้จริง มีแค่ลูกจ้าง', zh: '⚠️ 科学成功，道德沦丧！你获得了突破性的数据。你的论文大获成功。但实习生感到深受创伤，完全退出了生物学界。你把人当作“任务”的消耗性工具。你是一名世界级的科学家，但你实验室的人员流动率极高。你没有真正的弟子，只有雇员。' },
                stats: { competence: 50, ethics: 15, leadership: 25, innovation: 45 }
            }
        ]
    },

    {
        id: 'bi_012',
        text: {
            en: '🦎 The Invasive Escape: A clutch of genetically modified, highly fertile reptiles intended for pest control escaped your containment during a storm. They are now outcompeting native species in the local wetlands. Reporting it will result in a massive fine and the termination of the project. Attempting a secret "culling" might work, but if it fails, the ecosystem is changed forever.',
            th: '🦎 การหลุดรอดของสิ่งมีชีวิตรุกราน: สัตว์เลื้อยคลานดัดแปลงพันธุกรรมที่มีอัตราการขยายพันธุ์สูงซึ่งตั้งใจจะใช้ควบคุมศัตรูพืชได้หลุดออกจากกรงระหว่างพายุ ตอนนี้พวกมันเริ่มแย่งที่อยู่สายพันธุ์ท้องถิ่นในพื้นที่ชุ่มน้ำ การรายงานจะทำให้ถูกปรับมหาศาลและโครงการถูกยุติ การพยายาม "กำจัด" อย่างลับๆ อาจได้ผล แต่ถ้าพลาด ระบบนิเวศจะเปลี่ยนไปตลอดกาล',
            zh: '🦎 入侵者逃脱：一群旨在控制害虫的基因工程、高繁殖力爬行动物在风暴期间逃脱。它们现在正在当地湿地中排挤本土物种。报告此事将导致巨额罚款和项目终止。尝试秘密“扑杀”可能奏效，但如果失败，生态系统将永远改变。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📢 Full Public Disclosure: "Issue a public warning immediately. Mobilize the community and state wildlife agencies for a massive eradication effort. Protect the ecosystem at any cost."', th: '📢 เปิดเผยต่อสาธารณะทั้งหมด: "ออกคำเตือนสาธารณะทันที ระดมกำลังชุมชนและหน่วยงานสัตว์ป่าของรัฐเพื่อกำจัดครั้งใหญ่ ปกป้องระบบนิเวศไม่ว่าจะต้องแลกด้วยอะไรก็ตาม"', zh: '📢 全面公开披露：“立即发出公开警告。动员社区和州野生动物机构进行大规模根除行动。不惜一切代价保护生态系统。”' },
                consequence: { en: '✅ Ecological Salvage! The containment is 95% successful thanks to rapid public response. Your project is shut down and you are fined $1M, but you are praised for your transparency. You transition into a role as a Bio-Security Consultant for the government. You lost your project but saved your ethics.', th: '✅ กู้คืนระบบนิเวศ! การควบคุมสำเร็จ 95% ขอบคุณการตอบรับที่รวดเร็วของสาธารณะ โครงการของคุณถูกปิดและถูกปรับ $1M แต่คุณได้รับคำชมเรื่องความโปร่งใส คุณเปลี่ยนไปทำหน้าที่ที่ปรึกษาด้านความปลอดภัยทางชีวภาพให้รัฐบาล คุณสูญเสียโครงการแต่รักษาจริยธรรมไว้ได้', zh: '✅ 生态拯救！由于公众反应迅速，围堵行动取得了95%的成功。你的项目被关闭，你被罚款100万美元，但你的透明度受到了赞扬。你转型成为政府的生物安全顾问。你失去了项目，但保住了伦理。' },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤫 The Secret Cull: "Hire private contractors to hunt the reptiles at night. Don\'t involve the authorities. If we kill the original batch, the problem goes away quietly."', th: '🤫 การกำจัดอย่างลับๆ: "จ้างผู้รับเหมาเอกชนไปตามล่าสัตว์เหล่านั้นในตอนกลางคืน ไม่ต้องแจ้งทางการ หากเรากำจัดกลุ่มแรกได้หมด ปัญหาก็จะจบลงอย่างเงียบๆ"', zh: '🤫 秘密扑杀：“雇佣私人承包商在夜间狩猎这些爬行动物。不要让当局介入。如果我们杀掉了最初的那批，问题就会悄悄消失。”' },
                consequence: { en: '💀 Ecological Disaster! A single pregnant female survives. In 3 years, they become the dominant predator in the state. DNA testing traces them back to your lab. You are criminally prosecuted and become the poster child for "Irresponsible Science." The local wetland ecosystem collapses. Career destroyed.', th: '💀 หายนะทางนิเวศวิทยา! ตัวเมียที่ตั้งท้องรอดไปได้เพียงตัวเดียว ใน 3 ปี พวกมันกลายเป็นนักล่าอันดับหนึ่งของรัฐ การตรวจ DNA ระบุที่มาว่ามาจากแล็บคุณ คุณถูกดำเนินคดีอาญาและกลายเป็นตัวอย่างของ "วิทยาศาสตร์ที่ขาดความรับผิดชอบ" ระบบนิเวศล่มสลาย อาชีพพังพินาศ', zh: '💀 生态灾难！由于一只怀孕的雌性幸存下来，3年后，它们成为了该州的主要掠食者。DNA检测追踪到了你的实验室。你被刑事起诉，并成为“不负责任的科学”的典型。当地湿地生态系统崩溃。职业生涯毁于一旦。' },
                stats: { competence: 20, ethics: -20, leadership: 15, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '🧬 The Genetic Counter-Move: "Quickly develop a \'Gene Drive\' that makes the next generation sterile and release it. Fight fire with fire without telling anyone."', th: '🧬 การโต้กลับทางพันธุกรรม: "รีบพัฒนาระบบ \'Gene Drive\' ที่ทำให้รุ่นลูกเป็นหมันแล้วปล่อยออกไป ใช้ไฟสู้กับไฟโดยไม่ต้องบอกใคร"', zh: '🧬 基因反击：“迅速开发出一种能使下一代不育的‘基因驱动’并将其释放。以火攻火，不告诉任何人。”' },
                consequence: { en: '⚠️ Unintended Consequences! The Gene Drive works, but it jumps to a closely related native species. Now local reptiles are also becoming sterile. You saved the wetlands from the invaders but accidentally doomed a native species. You are forced to live with the secret of an accidental extinction.', th: '⚠️ ผลกระทบที่ไม่ได้ตั้งใจ! Gene Drive ได้ผล แต่มันกระโดดไปติดสายพันธุ์ท้องถิ่นที่ใกล้เคียงกัน ตอนนี้สัตว์เลื้อยคลานท้องถิ่นเริ่มเป็นหมันด้วย คุณช่วยพื้นที่ชุ่มน้ำจากผู้รุกรานได้แต่กลับทำลายสายพันธุ์ท้องถิ่นโดยไม่ตั้งใจ คุณต้องอยู่กับความลับเรื่องการทำให้เผ่าพันธุ์หนึ่งสูญพันธุ์', zh: '⚠️ 意外后果！基因驱动奏效了，但它跃迁到了与之亲缘关系密切的本土物种身上。现在当地的爬行动物也变得不育了。你从入侵者手中救下了湿地，却意外地注定了一个本土物种的灭亡。你被迫带着意外导致灭绝的秘密生活。' },
                stats: { competence: 45, ethics: 15, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: { en: '🔍 Strategic Monitoring: "Hide the escape but setup extensive \'environmental DNA\' sensors to track the spread. Wait and see if they can survive the winter before causing panic."', th: '🔍 การเฝ้าระวังเชิงกลยุทธ์: "ปกปิดการหลุดรอดแต่ติดตั้งเซนเซอร์ \'DNA สิ่งแวดล้อม\' เพื่อติดตามการเพร่กระจาย รอคอยดูว่าพวกมันจะรอดพ้นฤดูหนาวได้ไหมก่อนจะทำให้คนตื่นตระหนก"', zh: '🔍 战略监测：“隐瞒逃脱情况，但安装广泛的‘环境DNA’传感器来追踪扩散。在引发恐慌之前，先看看它们能否熬过冬天。”' },
                consequence: { en: '⚖️ Bureaucratic Gamble! Most die in the winter, but the survivors adapt and become hardier. You eventually report it as a "recent discovery" of an invasive species, hiding your liability. You get funding to study them. You saved your job, but you played Russian Roulette with the environment.', th: '⚖️ การเดิมพันกับระบบ! พวกมันส่วนใหญ่ตายในฤดูหนาว แต่ตัวที่รอดปรับตัวได้และแข็งแกร่งขึ้น สุดท้ายคุณรายงานว่าเป็นการ "ค้นพบใหม่" ของสายพันธุ์รุกราน ปกปิดความผิดตัวเอง คุณได้ทุนวิจัยพวกมันด้วย คุณรักษางานไว้ได้แต่คุณเล่นพนันกับสิ่งแวดล้อม', zh: '⚖️ 官僚赌博！大多数在冬天死亡，但幸存者适应了并变得更加强壮。你最终将其报告为“新发现”的入侵物种，隐瞒了自己的责任。你获得了研究它们的资金。你保住了工作，但你是在拿环境玩俄罗斯轮盘。' },
                stats: { competence: 35, ethics: 25, leadership: 30, innovation: 25 }
            }
        ]
    },
    {
        id: 'bi_013',
        text: {
            en: '🐘 De-Extinction vs. Conservation: Your lab has successfully cloned a Woolly Mammoth. The publicity is global. However, the cost of maintaining the herd is draining the budget for saving the last 50 Northern White Rhinos. You must choose where the "Mega-Fauna" fund goes next year.',
            th: '🐘 การฟื้นคืนชีพ vs การอนุรักษ์: แล็บของคุณโคลนนิ่งช้างแมมมอธสำเร็จ ข่าวโด่งดังไปทั่วโลก แต่ค่าใช้จ่ายในการดูแลฝูงแมมมอธกำลังสูญเสียความสามารถในการช่วยแรดขาวเหนือ 50 ตัวสุดท้าย คุณต้องเลือกว่าเงินทุน "สัตว์ใหญ่" จะไปที่ไหนในปีหน้า',
            zh: '🐘 灭绝复活对比物种保护：你的实验室成功克隆了一头猛犸象。此举引起了全球关注。然而，维持象群的成本正在耗尽拯救最后50只北非白犀牛的预算。你必须选择明年“大型动物”基金的去向。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🧬 Focus on Resurrection: "The Mammoth is a miracle of science. It drives public interest and funding into biology. We must prioritize the breakthrough."', th: '🧬 เน้นการฟื้นคืนชีพ: "แมมมอธคือปาฏิหาริย์ทางวิทยาศาสตร์ มันกระตุ้นความสนใจและเงินทุนให้วงการชีววิทยา เราต้องให้ความสำคัญกับความก้าวหน้านี้ก่อน"', zh: '🧬 专注于复活：“猛犸象是科学的奇迹。它推动了公众对生物学的兴趣和资助。我们必须优先考虑这一突破。”' },
                consequence: { en: '🌟 Scientific Icon! You become a world-famous visionary. Tourism to the "Pleistocene Park" generates billions. However, the Rhinos go extinct under your watch. History remembers you as the person who chose the "Cool" over the "Living." You revolutionized cloning but failed conservation.', th: '🌟 ไอคอนทางวิทยาศาสตร์! คุณกลายเป็นผู้มีวิสัยทัศน์ระดับโลก การท่องเที่ยวใน "Pleistocene Park" สร้างรายได้มหาศาล แต่แรดขาวเหนือสูญพันธุ์ไปในยุคของคุณ ประวัติศาสตร์จดจำคุณว่าเป็นคนที่เลือกสิ่งที่ "เท่" มากกว่า "สิ่งที่ยังมีชีวิต" คุณปฏิวัติการโคลนนิ่งแต่ล้มเหลวในการอนุรักษ์', zh: '🌟 科学偶像！你成为了享誉全球的远见卓识者。“更新世公园”的旅游业创造了数十亿美元的收入。然而，犀牛在你的注视下灭绝了。历史将你铭记为那个选择“酷”而放弃“生命”的人。你彻底改变了克隆技术，但未能实现物种保护。' },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '🦏 Protect the Living: "Stop the Mammoth program. Redirect all funds to Rhino habitat protection and IVF. We shouldn\'t play God while the existing world is dying."', th: '🦏 ปกป้องสิ่งที่มีชีวิต: "หยุดโครงการแมมมอธ ย้ายเงินทุนทั้งหมดไปที่การปกป้องที่อยู่และการทำ IVF ให้แรด เราไม่ควรเล่นเป็นพระเจ้าในขณะที่สิ่งมีชีวิตที่มีอยู่กำลังจะตาย"', zh: '🦏 保护现有生命：“停止猛犸象计划。将所有资金转向犀牛栖息地保护和体外受精（IVF）。当现存世界正在消亡时，我们不应该扮演上帝。”' },
                consequence: { en: '✅ Conservation Hero! You save the Rhinos. Their population bounces back to 200. The Mammoths are humanely euthanized or transferred to a low-cost facility where they fail to thrive. You lose the "Flashy" fame, but the scientific community respects your moral clarity. You are a leader in ecological ethics.', th: '✅ ฮีโร่นักอนุรักษ์! คุณช่วยแรดไว้ได้ ประชากรพวกมันเพิ่มกลับมาเป็น 200 ตัว แมมมอธถูกการุณยฆาตหรือย้ายไปที่สถานเลี้ยงราคาถูกที่พวกมันอยู่ได้ไม่นาน คุณสูญเสียชื่อเสียงที่หวือหวาไป แต่ชุมชนวิทยาศาสตร์เคารพในความชัดเจนทางศีลธรรมของคุณ', zh: '✅ 物种保护英雄！你拯救了犀牛。它们的种群数量回升到200只。猛犸象被实施了人道主义安乐死，或被转移到一家难以维持其生存的低成本设施中。你失去了“华丽”的名声，但科学界尊重你的道德清廉。你是生态伦理领域的领导者。' },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '📊 The Corporate Pivot: "Sell the Mammoth technology to a private entertainment company to fund the Rhinos. Let Disney handle the Mammoths."', th: '📊 การเปลี่ยนทิศทางแบบธุรกิจ: "ขายเทคโนโลยีแมมมอธให้บริษัทบันเทิงเอกชนเพื่อหาทุนช่วยแรด ให้ดิสนีย์เป็นคนจัดการเรื่องแมมมอธไป"', zh: '📊 企业转向：“将猛犸象技术卖给一家私人娱乐公司，以为犀牛筹集资金。让迪士尼去处理猛犸象吧。”' },
                consequence: { en: '💰 Wealthy Compromise! The Rhinos are funded for 50 years. But the Mammoths become a commercial circus, patented and trademarked. You are rich, the Rhinos are safe, but you lost control of your greatest scientific achievement. You are seen as a sell-out by peers but a pragmatist by pragmatists.', th: '💰 การประนีประนอมที่มั่งคั่ง! มีเงินช่วยแรดไปได้ 50 ปี แต่แมมมอธกลายเป็นละครสัตว์เชิงพาณิชย์ ถูกจดสิทธิบัตรและเครื่องหมายการค้า คุณรวย แรดปลอดภัย แต่คุณเสียการควบคุมความสำเร็จทางวิทยาศาสตร์ที่ยิ่งใหญ่ที่สุดของคุณไป คุณถูกเพื่อนร่วมงานมองว่าเป็นคนเห็นแก่เงิน', zh: '💰 富有的妥协！犀牛获得了50年的资助。但猛犸象变成了一个商业马戏团，被申请了专利和商标。你很富有，犀牛也很安全，但你失去了对你最伟大科学成就的控制。你在同行眼中是个叛徒，但在务实主义者眼中是个务实的人。' },
                stats: { competence: 45, ethics: 30, leadership: 45, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '🔬 Hybrid Research: "Try to engineer the Rhinos with Mammoth anti-cold genes to expand their habitat into the North. Combine the two projects."', th: '🔬 วิจัยแบบไฮบริด: "ลองดัดแปลงแรดด้วยยีนทนหนาวของแมมมอธเพื่อขยายที่อยู่อาศัยของพวกมันขึ้นไปทางเหนือ รวมสองโปรเจกต์เข้าด้วยกัน"', zh: '🔬 混合研究：“尝试给犀牛植入猛犸象的抗寒基因，将其栖息地向北扩展。将这两个项目结合起来。”' },
                consequence: { en: '💀 Bio-Technical Failure! The genetic cross fails. The Rhinos die from immune rejection, and the Mammoth program collapses from the complexity. You lose everything. You tried to be too clever and ended up with zero results and a damaged reputation. A hard lesson in biological limits.', th: '💀 ความล้มเหลวทางเทคนิคชีวภาพ! การข้ามสายพันธุ์พันธุกรรมล้มเหลว แรดตายจากการต่อต้านของระบบภูมิคุ้มกัน และโครงการแมมมอธล่มสลายจากความซับซ้อน คุณสูญเสียทุกอย่าง คุณพยายามทำตัวฉลาดเกินไปและลงเอยด้วยความว่างเปล่าและชื่อเสียงที่เสียหาย', zh: '💀 生物技术失败！基因杂交失败。犀牛死于免疫排斥，猛犸象计划因其复杂性而崩溃。你失去了一切。你试图表现得过于聪明，结果一无所获，名誉受损。这是一个关于生物界限的深刻教训。' },
                stats: { competence: 20, ethics: 20, leadership: 15, innovation: 45 }
            }
        ]
    },
    {
        id: 'bi_014',
        text: {
            en: '🧪 DIY Bio-Hacking: A community of amateur "Bio-hackers" in a garage has successfully produced a cheap, generic version of a drug your company sells for $5,000. They are giving it away for free. Your legal team wants to sue them into oblivion. Your R&D team says their methods are actually more efficient than yours.',
            th: '🧪 การแฮกชีวภาพแบบ DIY: กลุ่มเครื่องสมัครเล่น "Bio-hackers" ในโรงรถผลิตยาสามัญรุ่นราคาถูกที่บริษัทคุณขายในราคา $5,000 ได้สำเร็จเป็นครั้งแรก พวกเขาแจกให้ฟรี ทีมกฎหมายของคุณต้องการฟ้องพวกเขาให้ล้มละลาย ทีมวิจัยของคุณบอกว่าวิธีการของพวกเขามีประสิทธิภาพมากกว่าของคุณเสียอีก',
            zh: '🧪 DIY生物黑客：一个车库里的业余“生物黑客”社区成功生产出了一款贵公司售价5000美元药物的廉价仿制版。他们正在免费分发。你的法律团队想起诉他们到倾家荡产。你的研发团队说他们的方法实际上比你们的更有效。'
        },
        options: [
            {
                id: 'A',
                text: { en: '⚖️ Corporate Defense: "Sue them for patent infringement. Bio-safety cannot be guaranteed in a garage. Protect our intellectual property and the public."', th: '⚖️ ป้องกันผลประโยชน์บริษัท: "ฟ้องร้องฐานละเมิดสิทธิบัตร ความปลอดภัยทางชีวภาพรับประกันไม่ได้ในโรงรถ ปกป้องทรัพย์สินทางปัญญาของเราและสาธารณชน"', zh: '⚖️ 企业防御：“起诉他们侵犯专利。车库里的生物安全无法得到保障。保护我们的知识产权和公众。”' },
                consequence: { en: '💰 Legal Victory, PR Nightmare! You win the lawsuit and the garage is closed. But you are branded a "Pharma Villain" on social media. Sales of your drug drop as people boycott. You protected the patent but damaged the brand for a decade. Your leadership is seen as rigid and short-sighted.', th: '💰 ชนะคดีแต่แพ้ PR! คุณชนะคดีและกลุ่มนั้นถูกปิดไป แต่คุณถูกตราหน้าว่าเป็น "วายร้ายค้ายา" ในโซเชียลมีเดีย ยอดขายยาของคุณตกลงเพราะคนคว่ำบาตร คุณปกป้องสิทธิบัตรได้แต่ทำลายแบรนด์ไปเป็นสิบปี ความเป็นผู้นำของคุณถูกมองว่าแข็งกร้าวและสายตาสั้น', zh: '💰 法律获胜，公关噩梦！你赢得了诉讼，车库被关闭。但你在社交媒体上被烙上了“制药恶棍”的印记。随着人们的抵制，你的药物销量下降。你保护了专利，但损毁了品牌长达十年。你的领导力被认为是刻板且短视的。' },
                stats: { competence: 35, ethics: 15, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🤝 Strategic Acquisition: "Don\'t sue. Hire the lead hackers as consultants. Incorporate their more efficient methods into our production to lower our own costs."', th: '🤝 การเข้าซื้อเชิงกลยุทธ์: "อย่าฟ้อง จ้างหัวหน้ากลุ่มแฮกเกอร์มาเป็นที่ปรึกษา นำวิธีการที่มีประสิทธิภาพของพวกเขามาใช้ในการผลิตของเราเพื่อลดต้นทุนตัวเอง"', zh: '🤝 战略收购：“不要起诉。聘请这些资深黑客作为顾问。将他们更有效的方法融入我们的生产中，以降低我们自己的成本。”' },
                consequence: { en: '✅ Innovation Leap! Your production costs drop by 70%. You lower the price of the drug to $1,000, still making a huge profit. The hackers get stable jobs and lab safety. You are seen as a brilliant bridge-builder between corporate and community science. You won the market and the tech.', th: '✅ ก้าวกระโดดของนวัตกรรม! ต้นทุนการผลิตของคุณลดลง 70% คุณลดราคายาเหลือ $1,000 แต่ยังกำไรมหาศาล แฮกเกอร์เหล่านั้นได้งานที่มั่นคงและความปลอดภัยในแล็บ คุณถูกมองว่าเป็นผู้ประสานงานที่ยอดเยี่ยมระหว่างโลกธุรกิจและชุมชนวิทยาศาตร์ คุณชนะทั้งตลาดและเทคโนโลยี', zh: '✅ 创新飞跃！你的生产成本下降了70%。你将药价降到1000美元，依然赚取巨额利润。黑客们获得了稳定的工作和实验室安全。你被视为企业与社区科学之间出色的桥梁搭建者。你赢得了市场和技术。' },
                stats: { competence: 45, ethics: 35, leadership: 50, innovation: 45 }
            },
            {
                id: 'C',
                text: { en: '🌐 The "Open-Bio" Model: "Release our patent into the public domain and pivot to providing the specialized reagents. Let anyone make the drug, we sell the tools."', th: '🌐 โมเดล "Open-Bio": "ปล่อยสิทธิบัตรของเราให้เป็นสาธารณสมบัติและเปลี่ยนไปขายสารเคมีเฉพาะทางแทน ปล่อยให้ใครก็ได้ผลิตยา แต่เราขายเครื่องมือ"', zh: '🌐 “开放生物”模式：“将我们的专利发布到公共领域，并转型为提供专门的试剂。让任何人都能生产药物，我们卖工具。”' },
                consequence: { en: '🌟 Industry Disruptor! You destroyed the $5,000 drug market but created a new $500M market for biological reagents. You are the hero of affordable medicine worldwide. Your company stock temporarily dips but then soars as you become the "Amazon of Bio-Tools." You changed the world.', th: '🌟 ผู้ปฏิวัติอุตสาหกรรม! คุณทำลายตลาดราคา $5,000 ทิ้งแต่สร้างตลาดใหม่มูลค่า $500M สำหรับสารเคมีชีวภาพ คุณคือฮีโร่ของยาที่ทุกคนเอื้อมถึงทั่วโลก หุ้นบริษัทลดลงชั่วคราวแต่ทะยานขึ้นเมื่อคุณกลายเป็น "Amazon แห่งเครื่องมือชีวภาพ" คุณได้เปลี่ยนโลกไปแล้ว', zh: '🌟 行业颠覆者！你摧毁了5000美元的药物市场，但创造了一个价值5亿美元的生物试剂新市场。你是全球廉价药物的英雄。公司股价暂时下跌，但随着你成为“生物工具领域的亚马逊”，市值随即飙升。你改变了世界。' },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 50 }
            },
            {
                id: 'D',
                text: { en: '⚠️ Ignore and Monitor: "Do nothing. Let them operate. If people die from a bad garage batch, it will prove why we are necessary and destroy the DIY movement forever."', th: '⚠️ เมินเฉยและเฝ้าดู: "ไม่ต้องทำอะไร ปล่อยให้พวกเขาทำไป หากมีคนตายจากการผลิตในโรงรถที่ไม่ได้มาตรฐาน มันจะพิสูจน์ว่าทำไมเราถึงจำเป็นและทำลายขบวนการ DIY ไปตลอดกาล"', zh: '⚠️ 忽略并监测：“什么也不做。让他们运作。如果有死于劣质车库批次的人，那将证明我们存在的必要性，并永远摧毁DIY运动。”' },
                consequence: { en: '💀 Moral Corruption! Three people die from contamination in the garage. The DIY movement is crushed. You launch a PR campaign about "Bio-Terror in the Neighborhood." You are wealthy and safe, but your conscience is heavy. You chose the death of others to secure your monopoly. You are a king of ashes.', th: '💀 ความเสื่อมทรามทางศีลธรรม! มีสามคนตายจากการปนเปื้อนในโรงรถ ขบวนการ DIY ล่มสลาย คุณเริ่มแคมเปญ PR เรื่อง "ภัยชีวภาพในหมู่บ้าน" คุณรวยและปลอดภัยแต่จิตสำนึกของคุณหนักอึ้ง คุณเลือกความตายของคนอื่นเพื่อรักษาความผูกขาด คุณคือราชาบนกองขี้เถ้า', zh: '💀 道德沦丧！三个人死于车库污染。DIY运动被粉碎。你发起了一场关于“社区生物恐怖”的公关活动。你富有且安全，但你的良心备受煎熬。你选择他人的死亡来确保自己的垄断。你是灰烬之王。' },
                stats: { competence: 30, ethics: -20, leadership: 30, innovation: 15 }
            }
        ]
    },
    {
        id: 'bi_015',
        text: {
            en: '🧬 Dual-Use Research: You\'ve discovered a way to make common probiotics produce insulin inside the human gut—a miracle for diabetics. However, the same method could be used to make them produce neurotoxins. The Department of Defense wants to classify your research as "Top Secret" and take control of the data.',
            th: '🧬 งานวิจัยแบบสองทาง: คุณค้นพบวิธีทำให้โปรไบโอติกทั่วไปสร้างอินซูลินในลำไส้มนุษย์ได้—เป็นปาฏิหาริย์สำหรับผู้ป่วยเบาหวาน แต่ในทางกลับกัน วิธีเดียวกันนี้สามารถใช้ทำให้พวกมันสร้างสารพิษทำลายประสาทได้ กระทรวงกลาโหมต้องการจัดงานวิจัยคุณเป็น "ความลับสุดยอด" และเข้าควบคุมข้อมูล',
            zh: '🧬 双重用途研究：你发现了一种让常见益生菌在人体肠道内产生胰岛素的方法——这对糖尿病患者来说是一个奇迹。然而，同样的方法也可以用来让它们产生神经毒素。国防部想将你的研究列为“最高机密”并接管数据。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛡️ National Security: "Hand over the data. If this falls into the wrong hands, it could be a bio-weapon. Protect the nation first."', th: '🛡️ ความมั่นคงแห่งชาติ: "ส่งมอบข้อมูลให้ไป หากสิ่งนี้ตกไปอยู่ในมือคนผิด มันอาจเป็นอาวุธชีวภาพได้ ปกป้องประเทศชาติก่อน"', zh: '🛡️ 国家安全：“上交数据。如果这落入坏人之手，它可能会成为生物武器。国家利益至上。”' },
                consequence: { en: '✅ Patriotic Scientist! You receive a high-level security clearance and a $1M annual budget for classified projects. Your work helps create defenses against bio-attacks. However, the insulin-producing probiotic is buried in a vault. Millions of diabetics continue to suffer and pay high prices. You serve the state, not humanity.', th: '✅ นักวิทยาศาสตร์ผู้รักชาติ! คุณได้รับสิทธิ์เข้าถึงข้อมูลลับระดับสูงและงบหมื่นล้านสำหรับโปรเจกต์ลับ งานของคุณช่วยสร้างเกราะป้องกันภัยชีวภาพ แต่โปรไบโอติกสร้างอินซูลินกลับถูกฝังอยู่ในห้องนิรภัย คนเป็นล้านยังต้องทรมานและจ่ายแพง คุณรับใช้รัฐ ไม่ได้รับใช้มนุษย์ชาติ', zh: '✅ 爱国科学家！你获得了高级别安全许可，并拥有100万美元的年度机密项目预算。你的工作有助于建立生物攻击防御体系。然而，产生胰岛素的益生菌被埋在保险库里。数以百万计的糖尿病患者继续忍受痛苦并支付高昂的费用。你服务于国家，而非人类。' },
                stats: { competence: 40, ethics: 25, leadership: 45, innovation: 30 }
            },
            {
                id: 'B',
                text: { en: '🔓 Global Health: "Publish the results immediately in an open-access journal. The benefit of curing diabetes outweighs the theoretical risk of bio-weapons."', th: '🔓 สุขภาพโลก: "ตีพิมพ์ผลงานทันทีในวารสารที่เปิดกว้าง ประโยชน์ของการรักษาเบาหวานมีมากกว่าความเสี่ยงในเชิงทฤษฎีที่จะเป็นอาวุธชีวภาพ"', zh: '🔓 全球健康：“立即在开放获取期刊上发表结果。治愈糖尿病带来的好处超过了生物武器的理论风险。”' },
                consequence: { en: '🔥 Global Hero, Domestic Outcast! Hundreds of small labs start producing the "Insulin Probiotic." Diabetes costs crash worldwide. Thousands of lives are saved. However, the government revokes your passport and you are banned from federal funding for life. You live as a global consultant under constant surveillance. You chose the people over the state.', th: '🔥 ฮีโร่โลกแต่ถูกทอดทิ้งในบ้านเกิด! แล็บเล็กๆ นับร้อยเริ่มผลิต "โปรไบโอติกอินซูลิน" ค่ารักษาเบาหวานทั่วโลกดิ่งลง ชีวิตคนนับพันได้รับการช่วยชีวิต แต่รัฐบาลยึดพาสปอร์ตคุณและคุณถูกแบนจากทุนรัฐไปตลอดชีวิต คุณต้องอยู่เป็นที่ปรึกษาโลกภายใต้การเฝ้าระวัง คุณเลือกประชาชนเหนือรัฐ', zh: '🔥 全球英雄，国内弃儿！数百家小实验室开始生产“胰岛素益生菌”。全球糖尿病成本骤降。成千上万的生活得救。然而，政府吊销了你的护照，你被终身禁止获得联邦资助。你作为一名全球顾问在持续监控下生活。你选择了人民，而不是国家。' },
                stats: { competence: 45, ethics: 50, leadership: 35, innovation: 50 }
            },
            {
                id: 'C',
                text: { en: '🤝 The Middle Path: "Propose a licensed distribution system where only verified medical NGOs can access the genetic sequence. Keep the production method controlled but the application available."', th: '🤝 ทางสายกลาง: "เสนอระบบการกระจายแบบมีใบอนุญาต โดยให้เฉพาะ NGOs ทางการแพทย์ที่ผ่านการตรวจสอบเข้าถึงลำดับยีนได้ ควบคุมวิธีการผลิตในขณะที่เปิดให้ใช้งานจริง"', zh: '🤝 中间道路：“提议一套许可分发系统，只有经过核实的医疗非营利组织才能获得基因序列。控制生产方法，但允许应用。”' },
                consequence: { en: '⚖️ Bureaucratic Win! You successfully bridge the gap. The medicine gets out slowly but safely. You are appointed as a Special Advisor to the UN on Dual-Use Tech. You are a master of policy and science. Your career becomes one of international diplomacy and high-level strategy. You are highly effective.', th: '⚖️ ชนะในทางราชการ! คุณเชื่อมต่อช่องว่างได้สำเร็จ ยาถูกปล่อยออกมาอย่างช้าๆ แต่ปลอดภัย คุณได้รับแต่งตั้งเป็นที่ปรึกษาพิเศษของ UN ด้านเทคโนโลยีสองทาง คุณคือปรมาจารย์ด้านนโยบายและวิทยาศาตร์ อาชีพคุณกลายเป็นการทูตระหว่างประเทศและยุทธศาสตร์ระดับสูง', zh: '⚖️ 官僚式胜利！你成功填补了这一空白。这种药物推出缓慢但安全。你被任命为联合国双重用途技术特别顾问。你是政策和科学领域的专家。你的职业生涯变成了国际外交和高级战略。你工作非常高效。' },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '🧬 Engineered Safety: "Spend 3 more years developing a genetic \'chaff\'—a mechanism that makes the probiotic self-destruct if it senses any environment other than a human gut."', th: '🧬 ความปลอดภัยเชิงวิศวกรรม: "ใช้เวลาอีก 3 ปีพัฒนา \'ตัวตัดห่วงโซ่\'—กลไกที่ทำให้โปรไบโอติกทำลายตัวเองหากมันสัมผัสถึงสภาพแวดล้อมอื่นที่ไม่ใช่ลำไส้มนุษย์"', zh: '🧬 工程安全：“再花3年时间开发出一种基因‘干扰物’——一种如果探测到除人体肠道以外的任何环境，益生菌就会自毁的机制。”' },
                consequence: { en: '✅ Technical Masterpiece! You solve the dual-use problem. The probiotic is safe and impossible to weaponize. You win the Nobel Prize in Medicine. You proved that good engineering can solve ethical dilemmas. You are rich, famous, and have a clear conscience. Patience was your greatest tool.', th: '✅ ผลงานชิ้นเอกทางเทคนิค! คุณแก้ปัญหาสองทางได้สำเร็จ โปรไบโอติกนั้นปลอดภัยและเป็นอาวุธไม่ได้เลย คุณได้รับรางวัลโนเบลสาขาการแพทย์ คุณพิสูจน์ให้เห็นว่าวิศวกรรมที่ดีสามารถแก้ปัญหาทางจริยธรรมได้ คุณรวย มีชื่อเสียง และสบายใจ ความอดทนคือเครื่องมือที่ดีที่สุดของคุณ', zh: '✅ 技术杰作！你解决了双重用途问题。益生菌是安全的，且无法被武器化。你获得了诺贝尔生理学或医学奖。你证明了优秀的工程学可以解决伦理困境。你富有、成名且问心无愧。耐心是你最伟大的工具。' },
                stats: { competence: 50, ethics: 45, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'bi_016',
        text: {
            en: '🐙 Deep Sea Mining vs. Discovery: A mining company is about to dredge a section of the seafloor for cobalt. Your remote sub has just spotted a massive colony of what might be a new phylum of life—unlike anything ever seen. Reporting it will delay the mining for years, costing the economy billions. Ignoring it will likely lead to their extinction before they are even named.',
            th: '🐙 การขุดเจาะใต้สมุทร vs การค้นพบ: บริษัทเหมืองกำลังจะขุดลอกพื้นมหาสมุทรเพื่อหาโคบอลต์ เรือดำน้ำบังคับวิทยุของคุณเพิ่งพบกลุ่มสิ่งมีชีวิตขนาดใหญ่ที่อาจเป็น "ไฟลัมใหม่"—ซึ่งไม่เหมือนอะไรที่เคยเห็นมาก่อน การรายงานจะทำให้เหมืองล่าช้าไปหลายปีและเสียรายได้มหาศาล การเมินเฉยจะทำให้พวกมันสูญพันธุ์ไปก่อนที่จะถูกตั้งชื่อเสียอีก',
            zh: '🐙 深海采矿对比新物种发现：一家采矿公司正准备疏浚一段海床以开采钴。你的远程潜水器刚刚发现了一大片生物群落，这可能是一个新的生物门——与以往见过的任何生物都不同。报告此事将使采矿工作推迟数年，造成数十亿美元的经济损失。忽略它可能会导致它们在被命名之前就灭绝。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📢 Stop the Drills: "File an emergency injunction immediately. This is a scientific discovery of the century. The economy can find cobalt elsewhere, but we can\'t replace a phylum."', th: '📢 หยุดการขุดเจาะ: "ยื่นฟ้องฉุกเฉินทันที นี่คือการค้นพบทางวิทยาศาสตร์แห่งศตวรรษ เศรษฐกิจหาโคบอลต์ที่อื่นได้ แต่เราไม่สามารถหาไฟลัมใหม่มาทดแทนได้"', zh: '📢 停止钻探：“立即申请紧急禁令。这是本世纪的科学发现。经济可以从别处获得钴，但我们无法替代一个门。”' },
                consequence: { en: '✅ Scientific Legend! The mining is stopped. You spend 10 years researching the "Deep Kraken" phylum. It leads to breakthroughs in life extension and space biology. You are the most famous biologist alive. However, energy prices rise due to the cobalt shortage, and you are blamed by the public for the recession. You are a hero to scientists, a villain to the poor.', th: '✅ ตำนานวิทยาศาตร์! การขุดเหมืองถูกหยุดลง คุณใช้เวลา 10 ปีวิจัยไฟลัม "Deep Kraken" มันนำไปสู่ความก้าวหน้าเรื่องการยืดอายุและชีววิทยาอวกาศ คุณคือนักชีววิทยาที่มีชื่อเสียงที่สุดในโลก แต่ราคาพลังงานพุ่งสูงจากโคบอลต์ที่ขาดแคลน และคุณถูกสาธารณะตราหน้าว่าเป็นต้นเหตุของเศรษฐกิจถดถอย', zh: '✅ 科学传奇！采矿被停止了。你花了10年时间研究“深海克拉肯”门。它在延长寿命和空间生物学方面取得了突破。你是当今最著名的生物学家。然而，由于钴短缺，能源价格上涨，你被公众指责为经济衰退的罪魁祸首。你是科学家的英雄，是穷人的恶棍。' },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 45 }
            },
            {
                id: 'B',
                text: { en: '💰 Economic Realism: "Document the species as best you can for 48 hours, then step aside. The cobalt is vital for the green energy transition (electric cars). The needs of the many outweigh the needs of the unknown species."', th: '💰 ความเป็นจริงทางเศรษฐกิจ: "เก็บข้อมูลสิ่งมีชีวิตให้ดีที่สุดใน 48 ชั่วโมงแล้วถอยออกมา โคบอลต์จำเป็นสำหรับพลังงานสะอาด (รถยนต์ไฟฟ้า) ความต้องการของคนหมู่มากสำคัญกว่าสิ่งมีชีวิตที่ไม่รู้จัก"', zh: 'B 经济现实主义：“尽力记录该物种48小时，然后让开。钴对于绿色能源转型（电动汽车）至关重要。多数人的需求胜过未知名物种的需求。”' },
                consequence: { en: '⚠️ Tragic Trade-off! The green energy transition accelerates. Millions of tons of CO2 are saved. But the unknown phylum is wiped out. You have the only 48 hours of footage in existence. You live with the haunt of what could have been. You are a successful "Sustainability Consultant," but you feel you betrayed your core calling as a biologist.', th: '⚠️ การแลกเปลี่ยนที่น่าเศร้า! การเปลี่ยนผ่านสู่พลังงานสะอาดเร็วขึ้น ช่วยลด CO2 ได้มหาศาล แต่ไฟลัมลึกลับถูกกวาดล้างจนหมดสิ้น คุณมีฟุตเทจเพียง 48 ชั่วโมงที่เป็นหลักฐานเดียวที่เคยมีอยู่ คุณอยู่กับความรู้สึกผิดที่ทำลายสิ่งที่อาจเปลี่ยนแปลงโลกได้ คุณคือนักปรึกษาด้านความยั่งยืนที่สำเร็จแต่รู้สึกทรยศต่อจิตวิญญาณนักชีววิทยา', zh: '⚠️ 悲剧性的权衡！绿色能源转型加速。减少了数百万吨CO2排放。但那个未知的门被抹杀。你拥有世界上仅存的48小时影像。你生活在对“本可以如何”的恐惧中。你是一个成功的“可持续发展顾问”，但你觉得你背叛了你作为生物学家的核心使命。' },
                stats: { competence: 40, ethics: 20, leadership: 40, innovation: 25 }
            },
            {
                id: 'C',
                text: { en: '📦 Rapid Relocation: "Ask the mining company for $100M to attempt a high-speed relocation of the colony to a nearby thermal vent. Save them while allowing the mining."', th: '📦 การย้ายถิ่นฐานแบบเร่งด่วน: "ขอเงิน $100M จากบริษัทเหมืองเพื่อลองย้ายถิ่นฐานสิ่งมีชีวิตไปยังปล่องความร้อนใต้ทะเลที่อยู่ใกล้ๆ ช่วยพวกมันในขณะที่เหมืองยังดำเนินต่อได้"', zh: '📦 快速搬迁：“向采矿公司索要1亿美元，尝试将生物群落高速搬迁到附近的热液喷口。在允许采矿的同时拯救它们。”' },
                consequence: { en: '⚖️ High-Speed Gamble! Most of the colony dies during transport, but 10% survive in the new location. The mining proceeds. You are criticized by both sides—scientists call you a murderer of 90% of the colony, and the company complains about the cost. You achieved a partial victory, but everyone is unhappy. You are a pragmatic survivor.', th: '⚖️ การเดิมพันความเร็วสูง! สิ่งมีชีวิตส่วนใหญ่ตายระหว่างขนย้าย แต่รอด 10% ในที่ใหม่ เหมืองดำเนินต่อได้ คุณถูกวิจารณ์จากทั้งสองฝ่าย—นักวิทยาศาตร์บอกว่าคุณฆ่าพวกมันไป 90% และบริษัทก็บ่นเรื่องงบประมาณ คุณชนะเพียงบางส่วนและทุกคนไม่พอใจ คุณคือผู้รอดชีวิตที่เน้นความจริง', zh: '⚖️ 高速赌博！大多数群落在搬迁过程中死亡，但10%在新的地点存活。采矿继续进行。你受到了双方的批评——科学家称你谋杀了90%的群落，采矿公司则抱怨成本太高。你取得了部分胜利，但每个人都不快乐。你是一个务实的幸存者。' },
                stats: { competence: 35, ethics: 30, leadership: 35, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '🛰️ Secret Exposure: "Leak the footage to the press anonymously. Let public outrage stop the mining while you pretend to be neutral to protect your funding."', th: '🛰️ เปิดเผยความลับ: "ปล่อยฟุตเทจให้สื่อโดยไม่ระบุตัวตน ให้กระแสสังคมหยุดเหมืองในขณะที่คุณแกล้งทำเป็นเป็นกลางเพื่อรักษาทุนวิจัยของตัวเอง"', zh: '🛰️ 秘密曝光：“匿名将影像泄露给媒体。让公众的愤怒阻止采矿，同时你假装中立以保护你的资金。”' },
                consequence: { en: '💀 Social Disgrace! The leak works, but the mining company hires a digital forensics firm and traces the leak to your sub\'s MAC address. You are sued for breach of contract ($50M). You are blacklisted from all private research. The species is saved, but you are a broken person, unable to ever work in a lab again. Your career ended in a lie.', th: '💀 ความเสื่อมเสียทางสังคม! การรั่วไหลได้ผล แต่บริษัทเหมืองจ้างนักสืบดิจิทัลและตามรอยได้จนถึงเลข MAC ของเรือดำน้ำคุณ คุณถูกฟ้องฐานผิดสัญญา ($50M) และถูกแบล็กลิสต์จากวงการวิจัยเอกชนทั้งหมด สิ่งมีชีวิตรอดแต่คุณพังทลายและเข้าแล็บไม่ได้อีกเลย อาชีพคุณจบลงด้วยคำลวง', zh: '💀 社会耻辱！泄密起到了作用，但采矿公司雇佣了一家数字取证公司，并将泄密追踪到了你潜水器的MAC地址。你因违反合同被起诉（5000万美元）。你被禁止参与所有私人研究。物种获救了，但你是一个支离破碎的人，再也无法在实验室工作。你的职业生涯在谎言中结束。' },
                stats: { competence: 25, ethics: 35, leadership: 20, innovation: 35 }
            }
        ]
    },
    {
        id: 'bi_017',
        text: {
            en: '🦠 The Ancient Virus: Global warming has melted permafrost in Siberia, revealing a 30,000-year-old giant virus. Your team has isolated it. A pharmaceutical giant offers to fund your lab for 10 years if you revive it to "study future pandemic risks." Opponents say some doors should stay closed.',
            th: '🦠 ไวรัสโบราณ: ภาวะโลกร้อนทำให้น้ำแข็งในไซบีเรียละลาย และเผยให้เห็นไวรัสยักษ์อายุ 30,000 ปี ทีมของคุณแยกมันออกมาได้ บริษัทยายักษ์ใหญ่เสนอทุนให้แล็บของคุณ 10 ปีถ้าคุณปลุกมันขึ้นมาเพื่อ "ศึกษาความเสี่ยงโรคระบาดในอนาคต" ฝ่ายตรงข้ามบอกว่าประตูบางบานควรปิดตายตลอดไป',
            zh: '🦠 远古病毒：全球变暖导致西伯利亚永久冻土融化，一种3万年前的巨型病毒重见天日。你的团队已经将其分离出来。一家制药巨头提出，如果你复活它以“研究未来的大流行风险”，将资助你的实验室10年。反对者认为有些门应该永远关闭。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🔬 Revive and Study: "Knowledge is defense. If nature wakes it up later, we need to be ready now. Accept the funding."', th: '🔬 ปลุกและศึกษา: "ความรู้คือเกราะป้องกัน ถ้าธรรมชาติปลุกมันขึ้นมาทีหลัง เราต้องพร้อมตั้งแต่วันนี้ รับทุนซะ"', zh: '🔬 复活并研究：“知识就是防御。如果大自然以后唤醒它，我们需要现在就做好准备。接受资助。”' },
                consequence: { en: '🛡️ Prepared but Pariah. You map the virus\'s genome and find a potential vaccine target. You are hailed by virologists but feared by the public. You live in a high-security bubble, constantly accused of playing with fire.', th: '🛡️ เตรียมพร้อมแต่เป็นแกะดำ คุณทำแผนที่จีโนมไวรัสและพบเป้าหมายวัคซีน คุณได้รับคำชมจากนักไวรัสวิทยาแต่ประชาชนหวาดกลัว คุณต้องอยู่ในฟองสบู่ความปลอดภัยสูง ถูกกล่าวหาว่าเล่นกับไฟตลอดเวลา', zh: '🛡️ 准备充分但这不仅是被唾弃。你绘制了病毒的基因组图谱，并发现了一个潜在的疫苗靶点。你受到病毒学家的赞扬，但被公众恐惧。你生活在一个高度安全的泡沫中，不断被指责玩火。' },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '❄️ Keep it Frozen: "Some things are dead for a reason. Destroy the samples and publish a warning paper instead."', th: '❄️ แช่แข็งมันไว้: "บางอย่างตายไปก็มีเหตุผลของมัน ทำลายตัวอย่างทิ้งและตีพิมพ์บทความเตือนภัยแทน"', zh: '❄️ 让其保持冷冻：“有些东西死了是有原因的。销毁样本，改为发表一篇警告论文。”' },
                consequence: { en: '✅ The Guardian. You lose the massive funding, but you sleep well at night. Years later, another lab revives it and causes a minor outbreak. You are cited as the "Prophet who warned us." Your ethics are legendary.', th: '✅ ผู้พิทักษ์ คุณเสียเงินทุนก้อนโตแต่คุณนอนหลับสบาย หลายปีต่อมา แล็บอื่นปลุกมันขึ้นมาและทำให้เกิดการระบาดเล็กน้อย คุณถูกอ้างถึงว่าเป็น "ศาสดาผู้เตือนภัย" จริยธรรมของคุณเป็นตำนาน', zh: '✅以此为荣。你失去了巨额资金，但你晚上睡得很香。多年后，另一个实验室复活了它并导致了一场小规模爆发。你被称为“警告我们的先知”。你的道德堪称传奇。' },
                stats: { competence: 40, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '🧬 Digital Simulation: "Don\'t revive the physical virus. Sequence it completely and rebuild it only in a computer simulation. Request funding for \'In-Silico\' virology."', th: '🧬 การจำลองแบบดิจิทัล: "อย่าปลุกไวรัสจริง ถอดรหัสพันธุกรรมให้หมดแล้วสร้างใหม่ในคอมพิวเตอร์เท่านั้น ขอทุนสำหรับไวรัสวิทยา \'In-Silico\'"', zh: '🧬 数字模拟：“不要复活实体病毒。对其进行完全测序，并仅在计算机模拟中重建它。申请‘计算机模拟’病毒学的资金。”' },
                consequence: { en: '💻 Safe Innovation. You pioneer a new field of digital pathology. It\'s safer and cheaper. You miss out on some biological behaviors but you risk zero lives. A smart compromise.', th: '💻 นวัตกรรมที่ปลอดภัย คุณบุกเบิกสาขาใหม่ของพยาธิวิทยาดิจิทัล มันปลอดภัยและถูกกว่า คุณอาจพลาดพฤติกรรมทางชีวภาพบางอย่างไปแต่ไม่ต้องเสี่ยงชีวิตใครเลย เป็นการประนีประนอมที่ฉลาด', zh: '💻 安全创新。你开创了数字病理学的新领域。它更安全、更便宜。你虽然错过了一些生物学行为，但你零风险。一个聪明的妥协。' },
                stats: { competence: 45, ethics: 50, leadership: 40, innovation: 45 }
            },
            {
                id: 'D',
                text: { en: '💰 Sell the Sequence: "Auction the genetic data to the highest bidder. Whether it\'s a government or a bio-firm, the data is the asset."', th: '💰 ขายรหัสพันธุกรรม: "ประมูลข้อมูลพันธุกรรมให้คนที่ให้ราคาสูงสุด ไม่ว่าจะเป็นรัฐบาลหรือบริษัทชีวภาพ ข้อมูลคือสินทรัพย์"', zh: '💰 出售序列：“将基因数据拍卖给价高者。无论是政府还是生物公司，数据就是资产。”' },
                consequence: { en: '💀 Bio-Mercenary. You get rich instantly. The data disappears into a classified military server. You realize too late that you just sold a blueprint for a biological weapon. You have money but no soul.', th: '💀 ทหารรับจ้างชีวภาพ คุณรวยทันที ข้อมูลหายเข้าไปในเซิร์ฟเวอร์ลับของทหาร คุณมารู้ตัวช้าไปว่าเพิ่งขายแม่แบบอาวุธชีวภาพไป คุณมีเงินแต่ไร้วิญญาณ', zh: '💀 生物雇佣兵。你瞬间暴富。数据消失在一个机密军事服务器中。你意识到太晚了，你刚刚卖掉了一份生物武器的蓝图。你有钱但没有灵魂。' },
                stats: { competence: 30, ethics: -100, leadership: 10, innovation: 25 }
            }
        ]
    },
    {
        id: 'bi_018',
        text: {
            en: '🧠 Neanderthal Brain Organoids: Your lab is growing "mini-brains" from human stem cells. A postdoc proposes using CRISPR to edit them with Neanderthal genes to see how their brains functioned. This touches on the definition of "human" and the rights of extinct species.',
            th: '🧠 ออแกนอยด์สมองนีแอนเดอร์ทัล: แล็บของคุณกำลังเพาะเลี้ยง "สมองจิ๋ว" จากสเต็มเซลล์มนุษย์ นักวิจัยหลังปริญญาเอกเสนอให้ใช้ CRISPR ตัดต่อยีนของนีแอนเดอร์ทัลใส่เข้าไปเพื่อดูการทำงานของสมองพวกนั้น นี่กระทบต่อคำนิยามของ "มนุษย์" และสิทธิของสปีชีส์ที่สูญพันธุ์',
            zh: '🧠 尼安德特人脑类器官：你的实验室正在利用人类干细胞培育“微型大脑”。一位博士后提议利用CRISPR技术，将尼安德特人的基因编辑进去，以观察他们的大脑是如何运作的。这触及了“人类”的定义以及已灭绝物种的权利。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🔬 Comparison Study: "Do it. Understanding the differences could reveal why we survived and they didn\'t. It\'s pure science."', th: '🔬 การศึกษาเปรียบเทียบ: "ทำเลย การเข้าใจความต่างอาจไขปริศนาว่าทำไมเรารอดแต่พวกเขาไม่ มันคือวิทยาศาสตร์บริสุทธิ์"', zh: '🔬 对比研究：“做吧。了解差异可以揭示为什么我们幸存下来而他们没有。这是纯科学。”' },
                consequence: { en: '📈 Insightful Breakthrough. You discover key differences in synaptic density. Major journals publish your work. However, religious groups protest outside your lab, claiming you are "creating abominations."', th: '📈 การค้นพบที่ลึกซึ้ง คุณค้นพบความแตกต่างสำคัญของความหนาแน่นไซแนปส์ วารสารดังตีพิมพ์งานคุณ แต่กลุ่มศาสนามาประท้วงหน้าแล็บหาว่าคุณ "สร้างสิ่งวิปริต"', zh: '📈 有深刻见解的突破。你发现了突触密度的关键差异。主流期刊发表了你的作品。然而，宗教团体在你的实验室外抗议，声称你在“创造憎恶之物”。' },
                stats: { competence: 50, ethics: 30, leadership: 35, innovation: 45 }
            },
            {
                id: 'B',
                text: { en: '🛑 Ethical Pause: "This crosses a line. Even a mini-brain might have some form of consciousness if it\'s unique. Consult a bio-ethics board first."', th: '🛑 หยุดคิดเรื่องจริยธรรม: "นี่ข้ามเส้นไปหน่อย แม้จะเป็นสมองจิ๋วแต่อาจมีความรู้สึกนึกคิดถ้ารูปแบบมันพิเศษ ปรึกษาคณะกรรมการจริยธรรมก่อน"', zh: '🛑 道德暂停：“这越界了。即使是微型大脑，如果是独特的，也可能具有某种形式的意识。先咨询生物伦理委员会。”' },
                consequence: { en: '⚖️ Responsible Science. The board delays you for 6 months but eventually approves strict guidelines. You start late, but your paper is praised for its ethical framework as much as its data. You set the standard.', th: '⚖️ วิทยาศาสตร์ที่รับผิดชอบ บอร์ดชะลอเรื่องไป 6 เดือนแต่สุดท้ายอนุมัติพร้อมกฎเข้มงวด คุณเริ่มช้าแต่งานวิจัยได้รับคำชมทั้งเรื่องกรอบจริยธรรมและข้อมูล คุณเป็นผู้กำหนดมาตรฐานใหม่', zh: '⚖️ 负责任的科学。委员会推迟了你6个月，但最终批准了严格的指导方针。你起步虽晚，但你的论文因其伦理框架和数据一样受到赞扬。你设定了标准。' },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 30 }
            },
            {
                id: 'C',
                text: { en: '🧠 Full Cognitive Test: "Grow them larger and attach them to sensory inputs. We need to see if they can learn. Push the boundaries!"', th: '🧠 ทดสอบการรับรู้เต็มรูปแบบ: "เลี้ยงให้ใหญ่ขึ้นและต่อกับตัวรับสัมผัส เราต้องดูว่ามันเรียนรู้ได้ไหม ทะลุขีดจำกัดไปเลย!"', zh: '🧠 全面认知测试：“把它们养大，并连接到感官输入上。我们需要看看它们是否能学习。突破界限！”' },
                consequence: { en: '⚠️ Frankenstein Moment. The organoids show signs of distress and complex activity. A whistleblower leaks the data. The experiment is shut down by the government for "Cruelty to Human-like Tissue." You are disgraced.', th: '⚠️ ช่วงเวลาแฟรงเกนสไตน์ ออแกนอยด์แสดงสัญญาณความเครียดและกิจกรรมที่ซับซ้อน ผู้แจ้งเบาะแสปล่อยข้อมูลข่าง โครงการถูกรัฐบาลสั่งปิดฐาน "ทารุณกรรมเนื้อเยื่อคล้ายมนุษย์" คุณเสื่อมเสียชื่อเสียง', zh: '⚠️ 弗兰肯斯坦时刻。类器官显示出痛苦和复杂活动的迹象。一名告密者泄露了数据。实验因“虐待类人组织”而被政府关闭。你名誉扫地。' },
                stats: { competence: 20, ethics: -50, leadership: 10, innovation: 30 }
            },
            {
                id: 'D',
                text: { en: '🧬 Use Chimp Cells Instead: "Too risky. Do the same experiment with Chimpanzee cells. It\'s safer scientifically and ethically."', th: '🧬 ใช้เซลล์ชิมแปนซีแทน: "เสี่ยงไป ทำการทดลองเดิมแต่ใช้เซลล์ชิมแปนซีแทน ปลอดภัยกว่าทั้งในทางวิทย์และจริยธรรม"', zh: '🧬 改用黑猩猩细胞：“风险太大。用黑猩猩细胞做同样的实验。这在科学和伦理上都更安全。”' },
                consequence: { en: '📉 Safe but Boring. The results are predictable. You verify known evolutionary trees but discover nothing new about humanity. It\'s a solid publication, but no headlines.', th: '📉 ปลอดภัยแต่น่าเบื่อ ผลลัพธ์คาดเดาได้ คุณยืนยันแผนภูมิววิวัฒนาการเดิมแต่ไม่ได้รู้อะไรใหม่เกี่ยวกับมนุษย์ ตีพิมพ์ได้แต่ไม่มีพาดหัวข่าว', zh: '📉 安全但无聊。结果是可以预测的。你验证了已知的进化树，但没有发现任何关于人类的新东西。这是一篇扎实的出版物，但没有成为头条新闻。' },
                stats: { competence: 35, ethics: 40, leadership: 30, innovation: 10 }
            }
        ]
    },
    {
        id: 'bi_019',
        text: {
            en: '🦋 The Butterfly Effect: You are consulting for a logging company in the Amazon. They plan to chop a sector that contains the only known habitat of a specific butterfly. However, the butterfly’s larvae feed on a parasitic vine that kills valuable mahogany trees. The loggers argue that exterminating the butterfly will actually save more trees.',
            th: '🦋 ปรากฏการณ์ผีเสื้อขยับปีก: คุณเป็นที่ปรึกษาให้บริษัทค้าไม้ในอเมซอน พวกเขาวางแผนจะตัดไม้ในโซนที่เป็นที่อยู่เดียวของผีเสื้อชนิดหนึ่ง แต่ตัวอ่อนของผีเสื้อกินเถาวัลย์กาฝากที่ฆ่าต้นมะฮอกกานีราคาแพง คนตัดไม้เถียงว่าการกำจัดผีเสื้อจะช่วยรักษาต้นไม้ได้มากกว่า',
            zh: '🦋 蝴蝶效应：你正在亚马逊为一家伐木公司做咨询。他们计划砍伐一个区域，那里是某种特定蝴蝶的唯一已知栖息地。然而，这种蝴蝶的幼虫以一种寄生藤为食，这种藤蔓会杀死珍贵的桃花心木。伐木者争辩说，消灭蝴蝶实际上会挽救更多的树木。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🌲 Save the Butterfly: "Biodiversity is non-negotiable. If we lose the butterfly, the vine might grow unchecked and destroy the forest later anyway. Protect the habitat."', th: '🌲 ช่วยผีเสื้อ: "ความหลากหลายทางชีวภาพต่อรองไม่ได้ ถ้าเราเสียผีเสื้อไป เถาวัลย์อาจโตจนคุมไม่ได้และทำลายป่าในภายหลังก็ได้ ปกป้องที่อยู่พวกมันซะ"', zh: '🌲 拯救蝴蝶：“生物多样性是不容谈判的。如果我们失去了蝴蝶，藤蔓可能会不受控制地生长，反正以后也会摧毁森林。保护栖息地。”' },
                consequence: { en: '✅ Long-Term Wisdom. The company grumbles but complies. 5 years later, a drought makes the vines hyper-aggressive, and only your preserved butterfly population keeps the forest from being strangled. You saved the ecosystem.', th: '✅ ภูมิปัญญาระยะยาว บริษัทบ่นแต่ก็ยอมทำตาม 5 ปีต่อมา ภัยแล้งทำให้เถาวัลย์โตเร็วผิดปกติ และมีแค่ประชากรผีเสื้อที่คุณรักษาไว้ที่ช่วยไม่ให้ป่าถูกรัดตาย คุณช่วยระบบนิเวศไว้ได้', zh: '✅ 长远的智慧。公司虽有怨言但还是照办了。5年后，一场干旱使得藤蔓变得极具攻击性，只有你保护下来的蝴蝶种群才使得森林免于被绞杀。你拯救了生态系统。' },
                stats: { competence: 45, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🪓 Authorize the Cut: "The mahogany trees are significant carbon sinks. If the butterfly is a pest carrier, sacrificing one species to save thousands of trees is the logical choice."', th: '🪓 อนุมัติการตัด: "ต้นมะฮอกกานีเป็นแหล่งกักเก็บคาร์บอนสำคัญ ถ้าผีเสื้อเป็นพาหะศัตรูพืช การสละหนึ่งสปีชีส์เพื่อรักษาต้นไม้พันต้นเป็นทางเลือกที่มีเหตุผล"', zh: '🪓 批准砍伐：“桃花心木是重要的碳汇。如果蝴蝶是害虫携带者，牺牲一个物种来拯救数千棵树是合乎逻辑的选择。”' },
                consequence: { en: '⚠️ Unforeseen Collapse. The butterflies die out. The parasitic vines explode in population, mutating to infect other tree species. The sector turns into a vine-covered graveyard. You tried to optimize nature and failed.', th: '⚠️ การล่มสลายที่ไม่คาดคิด ผีเสื้อสูญพันธุ์ เถาวัลย์กาฝากระบาดหนักและกลายพันธุ์ไปติดต้นไม้อื่น โซนนั้นกลายเป็นสุสานที่ปกคลุมด้วยเถาวัลย์ คุณพยายามจะปรับแต่งธรรมชาติแต่ล้มเหลว', zh: '⚠️ 无法预见的崩溃。蝴蝶灭绝了。寄生藤数量激增，变异后感染其他树种。该区域变成了一个被藤蔓覆盖的墓地。你试图优化大自然，但失败了。' },
                stats: { competence: 30, ethics: 20, leadership: 30, innovation: 25 }
            },
            {
                id: 'C',
                text: { en: '📦 Relocate and Log: "Capture as many larvae as possible and move them to a sanctuary. Then log the area. It\'s a Win-Win."', th: '📦 ย้ายและตัด: "จับตัวอ่อนให้ได้มากที่สุดย้ายไปเขตรักษาพันธุ์ แล้วค่อยตัดไม้ วิน-วินทั้งคู่"', zh: '📦 搬迁并砍伐：“尽可能多地捕捉幼虫并将它们转移到保护区。然后砍伐该地区。这是双赢。”' },
                consequence: { en: '📉 Captivity Failure. The relocated butterflies fail to reproduce in the new environment. They slowly go extinct. You gave the company a green light based on a failed mitigation plan. Good intentions, bad result.', th: '📉 ความล้มเหลวในกรงเลี้ยง ผีเสื้อที่ย้ายไปไม่ยอมขยายพันธุ์และค่อยๆ สูญพันธุ์ คุณให้ไฟเขียวบริษัทโดยอิงแผนบรรเทาผลกระทบที่ล้มเหลว เจตนาดีแต่ผลลัพธ์แย่', zh: '📉 圈养失败。被转移的蝴蝶未能在新环境中繁殖。它们慢慢灭绝了。你基于一个失败的缓解计划给公司开了绿灯。好心办坏事。' },
                stats: { competence: 35, ethics: 35, leadership: 30, innovation: 30 }
            },
            {
                id: 'D',
                text: { en: '🧬 Modify the Vine: "Delay the logging. Let\'s genetically modify a fungus to attack only the parasitic vine. We save the trees AND the butterfly."', th: '🧬 ดัดแปลงเถาวัลย์: "ชะลอการตัดไม้ มาตัดต่อพันธุกรรมเชื้อราให้โจมตีเฉพาะเถาวัลย์กาฝากกันเถอะ เราจะรักษาทั้งต้นไม้และผีเสื้อ"', zh: '🧬 改造藤蔓：“推迟砍伐。让我们对一种真菌进行基因改造，使其只攻击寄生藤。我们既保住了树木，也保住了蝴蝶。”' },
                consequence: { en: '🏆 Bio-Control Victory. It takes 2 years, but the fungus works perfectly. The forest thrives without logging the habitat. You prove that biotechnology can resolve ecological conflicts.', th: '🏆 ชัยชนะของการควบคุมทางชีวภาพ ใช้เวลา 2 ปีแต่เชื้อราทำงานได้สมบูรณ์ ป่าสมบูรณ์โดยไม่ต้องตัดที่อยู่สัตว์ คุณพิสูจน์ว่าเทคโนโลยีชีวภาพแก้ปัญหาความขัดแย้งทางนิเวศได้', zh: '🏆 生物防治胜利。花了2年时间，但真菌效果完美。森林在没有砍伐栖息地的情况下茁壮成长。你证明了生物技术可以解决生态冲突。' },
                stats: { competence: 50, ethics: 45, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'bi_020',
        text: {
            en: '🌾 The Super-Crop Sabotage: You developed a drought-resistant rice that could end hunger in East Africa. However, a local warlord demands a "protection tax" and control over the distribution, or he will burn the test fields. The UN troops can\'t guarantee safety.',
            th: '🌾 การก่อวินาศกรรมพืชผล: คุณพัฒนาข้าวทนแล้งที่อาจยุติความหิวโหยในแอฟริกาตะวันออกได้ แต่ขุนศึกท้องถิ่นเรียกเก็บ "ค่าคุ้มครอง" และต้องการคุมการแจกจ่าย ไม่งั้นเขาจะเผาแปลงทดลอง กองกำลัง UN รับประกันความปลอดภัยไม่ได้',
            zh: '🌾 超级作物破坏：你开发了一种抗旱水稻，可以终结东非的饥荒。然而，当地军阀要求缴纳“保护税”并控制分配，否则他将烧毁试验田。联合国部队无法保证安全。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤝 Deal with the Devil: "Pay him. If the rice gets to the people, it doesn\'t matter who takes the credit or a cut. The mission is to feed people."', th: '🤝 ดีลกับปีศาจ: "จ่ายเขาไป ถ้าข้าวไปถึงชาวบ้าน ใครจะเอาหน้าหรือส่วนแบ่งก็ช่าง ภารกิจคือการให้อาหารผู้คน"', zh: '🤝 与魔鬼交易：“付钱给他。如果大米能送到百姓手中，谁拿功劳或回扣都不重要。任务是养活人民。”' },
                consequence: { en: '⚖️ Grey Morality. The rice is distributed, hunger drops by 40%. But the warlord becomes stronger and more entrenched thanks to your resources. You fed the hungry but armed their oppressor.', th: '⚖️ ศีลธรรมสีเทา ข้าวถูกแจกจ่าย ความหิวโหยลดลง 40% แต่ขุนศึกแข็งแกร่งขึ้นและมีอำนาจมากขึ้นเพราะทรัพยากรของคุณ คุณให้อาหารคนหิวโหยแต่ก็ให้ยุทโธปกรณ์ผู้กดขี่พวกเขา', zh: '⚖️ 灰色道德。大米分发下去了，饥饿率下降了40%。但军阀因为你的资源变得更加强大和根深蒂固。你养活了饥饿的人，但也武装了他们的压迫者。' },
                stats: { competence: 50, ethics: 10, leadership: 30, innovation: 40 }
            },
            {
                id: 'B',
                text: { en: '🛡️ Stand Firm and withdraw: "We don\'t negotiate with terrorists. Burn the fields if you must, but we are leaving. Move the trials to a safer country."', th: '🛡️ ยืนหยัดและถอนตัว: "เราไม่เจรจากับผู้ก่อการร้าย เผาแปลงเลยถ้าคุณต้องทำ แต่เราจะไป ย้ายการทดลองไปประเทศที่ปลอดภัยกว่า"', zh: '🛡️ 坚定立场并撤退：“我们不与恐怖分子谈判。如果你非要烧，就烧吧，但我们要走了。把试验转移到一个更安全的国家。”' },
                consequence: { en: '📉 Humanitarian Setback. The fields burn. The famine continues for another year. You kept your hands clean, but people died while you held the moral high ground.', th: '📉 ความถดถอยทางมนุษยธรรม แปลงถูกเผา ความอดอยากดำเนินต่อไปอีกปี มือคุณสะอาดแต่ผู้คนล้มตายในขณะที่คุณยืนอยู่บนคุณธรรมอันสูงส่ง', zh: '📉 人道主义挫折。田地被烧毁。饥荒又持续了一年。你保持了双手干净，但在你占据道德高地的同时，人们却死去了。' },
                stats: { competence: 30, ethics: 40, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '✈️ Drone Delivery: "Use heavy-lift drones to bypass the roads and drop seeds directly to the remote villages. Bypass the warlord entirely."', th: '✈️ ส่งด้วยโดรน: "ใช้โดรนบรรทุกหนักส่งข้ามถนนไปหย่อนเมล็ดให้หมู่บ้านห่างไกลโดยตรง ข้ามหัวขุนศึกไปเลย"', zh: '✈️ 无人机投递：“使用重型无人机绕过道路，直接将种子投放到偏远村庄。完全绕过军阀。”' },
                consequence: { en: '🚀 Tech Guerrilla. It works! The warlord is furious but can\'t stop the air-drops. The villagers plant the rice secretly. You become a folk hero. Innovation beats intimidation.', th: '🚀 กองโจรไฮเทค ได้ผล! ขุนศึกโกรธจัดแต่หยุดการส่งทางอากาศไม่ได้ ชาวบ้านแอบปลูกข้าว คุณกลายเป็นวีรบุรุษพื้นบ้าน นวัตกรรมชนะการข่มขู่', zh: '🚀 技术游击队。奏效了！军阀虽然暴怒，但无法阻止空投。村民们秘密种植水稻。你成了民间英雄。创新战胜了恐吓。' },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 60 }
            },
            {
                id: 'D',
                text: { en: '🦠 Biological Defense: "Add a gene to the rice that makes it toxic unless cooked a specific way known only to the villagers. Make the stolen rice useless."', th: '🦠 การป้องกันทางชีวภาพ: "ใส่ยีนให้ข้าวเป็นพิษถ้าไม่หุงด้วยวิธีเฉพาะที่ชาวบ้านรู้เท่านั้น ทำให้ข้าวที่ถูกขโมยไปไร้ค่า"', zh: '🦠 生物防御：“在水稻中加入一种基因，除非用只有村民知道的特定方式烹饪，否则它就是有毒的。让被盗的大米变得毫无用处。”' },
                consequence: { en: '⚠️ Dangerous Game. It works as a deterrent, but several of the warlord\'s soldiers die. You are accused of biological warfare. The UN investigates you. You protected the crop but became a killer.', th: '⚠️ เกมอันตราย มันได้ผลในการป้องปราม แต่ทหารขุนศึกหลายคนตาย คุณถูกกล่าวหาว่าทำสงครามชีวภาพ UN เข้าตรวจสอบ คุณรักษาพืชผลไว้ได้แต่กลายเป็นฆาตกร', zh: '⚠️ 危险的游戏。这起到了威慑作用，但几名军阀士兵因此丧生。你被指控进行生物战。联合国对你展开调查。你保护了庄稼，但成了杀人犯。' },
                stats: { competence: 45, ethics: -20, leadership: 20, innovation: 50 }
            }
        ]
    },
    {
        id: 'bi_021',
        text: {
            en: '🧬 The Designer Baby Market: A black market for "Genetic Enhancement" has emerged. Wealthy parents are paying underground labs to boost their kids\' IQ and height. You are approached to consult for a task force cleaning this up. But you realize one of the "black market" techniques is safer and better than approved medical ones.',
            th: '🧬 ตลาดเด็กสั่งทำ: ตลาดมืดสำหรับ "การเสริมแต่งพันธุกรรม" ผุดขึ้นมา พ่อแม่รวยๆ จ่ายเงินให้แล็บใต้ดินเพื่อเพิ่ม IQ และความสูงให้ลูก คุณถูกเชิญให้เป็นที่ปรึกษาหน่วยปราบปราม แต่คุณพบว่าเทคนิคใน "ตลาดมืด" อันหนึ่งปลอดภัยและดีกว่าวิธีทางการแพทย์ที่ได้รับอนุมัติเสียอีก',
            zh: '🧬 设计婴儿市场：一个“基因增强”黑市已经出现。富有的父母付钱给地下实验室，以提高孩子的智商和身高。你被邀请为清理此事的特别工作组提供咨询。但你意识到，其中一种“黑市”技术比获批的医疗技术更安全、更有效。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚔 Shut it Down: "The law is the law. Unregulated editing is dangerous regardless of the method. Help the police raid the clinics."', th: '🚔 สั่งปิดมัน: "กฎหมายคือกฎหมาย การตัดต่อที่ไม่มีการควบคุมมันอันตรายไม่ว่าจะใช้วิธีไหน ช่วยตำรวจบุกคลินิกพวกนั้น"', zh: '🚔 关闭它：“法律就是法律。无论采用何种方法，不受监管的编辑都是危险的。协助警察突袭诊所。”' },
                consequence: { en: '⚖️ Rigid Enforcement. The clinics are closed. The superior technique is lost and destroyed in the raid. You upheld the system, but you set medical progress back by 10 years.', th: '⚖️ การบังคับใช้ที่แข็งกร้าว คลินิกถูกปิด เทคนิคที่เหนือกว่านั้นหายไปและถูกทำลายในการบุก คุณรักษาระบบไว้ได้ แต่ทำให้ความก้าวหน้าทางการแพทย์ถอยหลังไป 10 ปี', zh: '⚖️ 严格执法。诊所被关闭。那项卓越的技术在突袭中遗失并被摧毁。你维护了体制，但使医学进步倒退了10年。' },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: { en: '🔬 Steal the Tech: "Secretly copy the data on the superior technique before the raid. Then publish it as your own discovery to legitimize it."', th: '🔬 ขโมยเทคโนโลยี: "แอบคัดลอกข้อมูลเทคนิคนั้นก่อนบุก แล้วตีพิมพ์ว่าเป็นสมมติฐานของตัวเองเพื่อให้มันถูกกฎหมาย"', zh: '🔬 窃取技术：“在突袭前秘密复制关于那项卓越技术的数据。然后将其作为你自己的发现发表，使其合法化。”' },
                consequence: { en: '🕵️ Ethical Theft. You bring a revolutionary safer gene-editing tool to the world. You are famous. The black market doctors go to jail. You prospered from their crime, but the world benefited.', th: '🕵️ การขโมยอย่างมีจริยธรรม คุณนำเครื่องมือตัดต่อยีนที่ปลอดภัยกว่ามาสู่โลก คุณโด่งดัง หมอตลาดมืดติดคุก คุณรุ่งเรืองจากอาชญากรรมของเขา แต่โลกได้ประโยชน์', zh: '🕵️ 道德盗窃。你给世界带来了一种革命性的、更安全的基因编辑工具。你成名了。黑市医生进了监狱。你从他们的罪行中获益，但世界也受益了。' },
                stats: { competence: 50, ethics: 10, leadership: 30, innovation: 45 }
            },
            {
                id: 'C',
                text: { en: '🗣️ Advocate for Legalization: "Testify that the technique is safe. Argue that we should regulate and adopt it rather than ban it. Bring it into the light."', th: '🗣️ สนับสนุนให้ถูกกฎหมาย: "ให้การว่าเทคนิคนั้นปลอดภัย โต้แย้งว่าเราควรควบคุมและนำมาใช้มากกว่าแบน นำมันออกมาสู่แสงสว่าง"', zh: '🗣️ 倡导合法化：“作证该技术是安全的。争辩说我们应该监管并采用它，而不是禁止它。将其带入光明。”' },
                consequence: { en: '🏛️ Policy Reformer. You face a media storm but eventually convince the FDA. The treatment becomes legal and regulated. You killed the black market by making it obsolete. A systemic win.', th: '🏛️ นักปฏิรูประบบ คุณเจอมรสุมสื่อแต่สุดท้ายโน้มน้าว FDA ได้ การรักษาถูกกฎหมายและมีการควบคุม คุณฆ่าตลาดมืดโดยทำให้มันล้าสมัย ชัยชนะเชิงระบบ', zh: '🏛️ 政策改革者。你面临媒体风暴，但最终说服了FDA。这种治疗变得合法并受到监管。你通过使其过时而消灭了黑市。体制性的胜利。' },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: { en: '💰 Blackmail: "Threaten the underground labs. Make them stop the IQ enhancement but let them keep doing disease prevention. Manage the crime."', th: '💰 แบล็กเมล์: "ข่มขู่แล็บใต้ดิน ให้เขาเลิกทำเรื่องเพิ่ม IQ แต่ให้ทำเรื่องป้องกันโรคต่อไป ควบคุมอาชญากรรมเอา"', zh: '💰 勒索：“威胁地下实验室。让他们停止智商增强，但允许他们继续进行疾病预防。管理犯罪。”' },
                consequence: { en: '🕶️ Shadow Boss. You become the unofficial regulator of the genetic underground. You keep things from getting too crazy, but you are living a double life. Stressfull but effective.', th: '🕶️ เงามืดของผู้คุมกฎ คุณกลายเป็นผู้คุมกฎอย่างไม่เป็นทางการของโลกใต้ดินพันธุกรรม คุณคุมไม่ให้เรื่องบานปลาย แต่ต้องใช้ชีวิตสองหน้า เครียดแต่ได้ผล', zh: '🕶️ 影子老大。你成了基因地下世界的非官方监管者。你防止事情变得太疯狂，但你过着双重生活。压力很大但有效。' },
                stats: { competence: 45, ethics: -10, leadership: 35, innovation: 30 }
            }
        ]
    },
    {
        id: 'bi_022',
        text: {
            en: '🐘 The Ivory Trail: You are using DNA forensics to track an illegal ivory shipment worth $4.2M. Your data points directly to a warehouse owned by a local governor who provides 60% of your conservation park\'s security funding. He offers to "increase your budget by 200%" if you lose the DNA samples. If you move forward, your rangers may lose their jobs and protection.',
            th: '🐘 เส้นทางงาช้าง: คุณกำลังใช้นิติวิทยาศาสตร์ DNA เพื่อติดตามการขนส่งงาช้างผิดกฎหมายมูลค่า 4.2 ล้านดอลลาร์ ข้อมูลของคุณชี้ไปที่คลังสินค้าของเจ้าเมืองท้องถิ่นซึ่งเป็นผู้ให้ทุนอุดหนุนความปลอดภัย 60% ของอุทยานอนุรักษ์ของคุณ เขาเสนอที่จะ "เพิ่มงบประมาณให้คุณ 200%" หากคุณทำตัวอย่าง DNA หาย หากคุณเดินหน้าต่อ เจ้าหน้าที่ของคุณอาจตกงานและขาดการคุ้มครอง',
            zh: '🐘 象牙踪迹：你正利用 DNA 取证技术追踪一批价值 420 万美元的非法象牙。你的数据直接指向一位当地官员拥有的仓库，而这位官员为你所在的自然保护区提供了 60% 的安保资金。他提出，如果你“遗失”这些 DNA 样本，他将“增加 200% 的预算”。如果你坚持推进，你的护林员可能会失去工作和保护。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Justice First: "Report the findings to international authorities (Interpol). No one is above the law."', th: '⚖️ ความยุติธรรมต้องมาก่อน: "รายงานผลต่อ Interpol ไม่มีใครอยู่เหนือกฎหมาย"', zh: '⚖️ 正义至上：“向国际刑警组织报告。法律面前人人平等。”' }, consequence: { en: '✅ Global Impact! The governor is arrested. You lose local funding, but a global NGO steps in with a $5M grant. 15 major poachers are caught.', th: '✅ ผลกระทบระดับโลก! เจ้าเมืองถูกจับกุม คุณสูญเสียเงินทุนท้องถิ่น แต่ NGO ระดับโลกเข้ามาช่วยด้วยเงินทุน 5 ล้านดอลลาร์ นักล่าสัตว์รายใหญ่ 15 รายถูกจับกุม', zh: '✅ 全球影响！官员被捕。你失去了当地资助，但一家国际非政府组织提供了 500 万美元。15 名主要偷猎者被抓获。' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '🤝 The Necessary Evil: "Accept the 200% budget increase. Use it to build a massive intelligence network to stop 90% of future poaching."', th: '🤝 สิ่งชั่วร้ายที่จำเป็น: "ยอมรับงบเพิ่ม 200% ใช้สร้างเครือข่ายกรองข้อมูลเพื่อหยุดการล่าร้อยละ 90 ในอนาคต"', zh: '🤝 必要之恶：“接受 200% 的预算增长。利用这笔钱建立一个庞大的情报网络，以阻止未来 90% 的偷猎行为。”' }, consequence: { en: '⚠️ Pragmatic Success. Poaching drops by 70%, but the governor continues his trade. You saved hundreds of elephants but with blood money.', th: '⚠️ ความสำเร็จในเชิงปฏิบัติ การล่าลดลง 70% แต่เจ้าเมืองยังค้าขายต่อ คุณช่วยชีวิตช้างหลายร้อยตัวแต่ด้วยเงินเปื้อนเลือด', zh: '⚠️ 务实的成功。偷猎行为减少了 70%，但该官员继续他的贸易。你拯救了数百头大象，但资金源自不义之财。' }, stats: { competence: 40, ethics: 10, leadership: 45, innovation: 30 } },
            { id: 'C', text: { en: '📢 Leak the Data: "Anonymously leak the DNA evidence to a major newspaper. The governor loses face without you signing the report."', th: '📢 ปล่อยข้อมูลรั่วไหล: "แอบปล่อยหลักฐาน DNA ไปยังหนังสือพิมพ์ เจ้าเมืองเสียชื่อเสียงโดยที่คุณไม่ต้องออกหน้า"', zh: '📢 泄露数据：“匿名向大型报纸泄露 DNA 证据。让该官员名誉扫地，而无需你出面。”' }, consequence: { en: '🔥 Chaos. The governor is disgraced and cuts your funding. No NGO steps in yet. Your rangers are targeted. The forest is in chaos.', th: '🔥 ความวุ่นวาย เจ้าเมืองตัดงบคุณทันที ยังไม่มี NGO เข้าช่วย เจ้าหน้าที่โดนลอบโจมตี ป่าอยู่ในความวุ่นวาย', zh: '🔥 混乱。官员名誉扫地并切断了资金。目前还没有非政府组织介入。你的护林员成为了目标。森林陷入混乱。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 35 } },
            { id: 'D', text: { en: '🕵️ Counter-Extortion: "Tell the governor you have backups. He keeps funding you, and you keep his secret, but he must stop ALL ivory trade."', th: '🕵️ แบล็กเมล์กลับ: "บอกเจ้าเมืองว่ามีชุดสำรอง เขาต้องให้งบต่อและคุณจะเก็บความลับให้ แต่เขาต้องหยุดคองาช้างทั้งหมด"', zh: '🕵️ 反制勒索：“告诉该官员你存有备份。他继续资助你，你为他保密，但他必须停止所有的象牙贸易。”' }, consequence: { en: '🕶️ Dangerous Game. The governor agrees out of fear. You have unlimited funding and the trade stops locally. But you are now a political player.', th: '🕶️ เกมอันตราย เจ้าเมืองตกลงเพราะกลัว คุณมีงบจำกัดและการค้าหยุดนิ่งในท้องถิ่น แต่คุณกลายเป็นเบี้ยทางการเมืองแทน', zh: '🕶️ 危险游戏。官员因为害怕而同意了。你获得了无限资助。但你现在成为了政治玩家。' }, stats: { competence: 50, ethics: 15, leadership: 35, innovation: 20 } }
        ]
    },
    {
        id: 'bi_023',
        text: {
            en: '🧬 The De-Extinction Project: You have cloned the "Thylacine" (Tasmanian Tiger). It carries a prehistoric dormant virus that could devastate modern marsupials. Investors want a public "Wild Release" to skyrocket stock prices.',
            th: '🧬 โปรเจกต์เรียกคืนชีวิต: คุณประสบความสำเร็จในการโคลนนิ่ง "ไทลาซีน" แต่มันมีไวรัสโบราณแฝงอยู่ซึ่งอาจทำลายสัตว์มีกระเป๋าหน้าท้องปัจจุบันได้ นักลงทุนต้องการจัดพิธีปล่อยคืนสู่ป่าเพื่อปั่นหุ้น',
            zh: '🧬 物种复活项目：你成功克隆了“袋狼”。它携带一种史前休眠病毒，可能会摧毁现代有袋动物。投资者想要公开释放以飙升股价。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Permanent Quarantine: "Keep them in a secure bio-facility forever. We cannot risk a mass extinction for publicity."', th: '🛑 กักตัวถาวร: "เก็บไว้ในห้องทดลองที่ปลอดภัยตลอดไป เราไม่อาจเสี่ยงต่อการสูญพันธุ์ครั้งใหญ่เพื่อการโปรโมท"', zh: '🛑 永久隔离：“将它们永远关在安全的生物设施中。我们不能为了宣传而冒险。”' }, consequence: { en: '✅ Controlled Success. Investors are angry, but you derive a vaccine from their blood that saves 200,000 modern Koalas.', th: '✅ ความสำเร็จที่ควบคุมได้ นักลงทุนโกรธแต่คุณสกัดวัคซีนได้ช่วยชีวิตโคอาล่า 200,000 ตัวจากโรคอื่น', zh: '✅ 受控的成功。投资者虽感愤怒，但你提取了一种疫苗，挽救了 20 万只现代树袋熊。' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 45 } },
            { id: 'B', text: { en: '🚀 Controlled Release: "Release a small, radio-collared group in a isolated island. Monitor them for 2 years."', th: '🚀 ปล่อยแบบควบคุม: "ปล่อยกลุ่มเล็กๆ ที่ติดปลอกคอวิทยุในเกาะที่แยกตัวออกไป เฝ้าดูพวกมันเป็นเวลา 2 ปี"', zh: '🚀 受控释放：“在孤岛上释放一小群佩戴无线电项圈的袋狼。监测它们 2 年。”' }, consequence: { en: '⚠️ Scientific Disaster. The virus jumps to local sea-birds. 30% of New Zealand’s KIWI population is wiped out in 6 months.', th: '⚠️ หายนะทางวิทยาศาสตร์ ไวรัสกระโดดไปติดนกทะเล 30% ของนกกีวีในนิวซีแลนด์ถูกกวาดล้างใน 6 เดือน', zh: '⚠️ 科学灾难。病毒跳转到当地海鸟身上。新西兰 30% 的几维鸟种群在 6 个月内消失。' }, stats: { competence: 35, ethics: 20, leadership: 30, innovation: 40 } },
            { id: 'C', text: { en: '🧪 Genetic Cleansing: "Wait another 3 years to splice out the viral DNA before release. Zero risk later."', th: '🧪 การทำความสะอาดทางพันธุกรรม: "รออีก 3 ปีเพื่อตัดต่อ DNA ส่วนที่มีไวรัสออกก่อนปล่อย ไม่มีความเสี่ยงในภายหลัง"', zh: '🧪 基因清理：“再等 3 年，在释放前切除病毒 DNA。以后零风险。”' }, consequence: { en: '✅ Perfection! You lose 40% of funding due to delays, but you release the first truly "safe" de-extinct species. Nobel Prize win.', th: '✅ สมบูรณ์แบบ! เสี่ยงเสียทุน 40% เพราะล่าช้า แต่คุณปล่อยสิ่งมีชีวิตเรียกคืนชีพที่ปลอดภัยตัวแรกได้สำเร็จ ได้รางวัลโนเบล', zh: '✅ 完美！由于延迟你失去了 40% 的资助，但你发布了第一种真正“安全”的复活物种。获得诺贝尔奖。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '💸 The Sell-Out: "Sell the tech to a private zoo chain. Let them handle the risk and the release."', th: '💸 ขายขาด: "ขายเทคโนโลยีให้สวนสัตว์เอกชน ให้พวกเขารับความเสี่ยงและการปล่อยตัวไปเอง"', zh: '💸 出卖：“将技术卖给一家私人动物园连锁店。让他们来处理风险和释放工作。”' }, consequence: { en: '💰 Rich and Regretful. You make $50M. A Thylacine bites a tourist, causing an outbreak. You live under a pseudonym.', th: '💰 รวยแต่เสียใจ คุณได้เงิน 50 ล้านดอลลาร์ แต่ไวรัสโบราณทำให้เกิดการระบาด คุณต้องใช้ชื่อแฝงเพื่อหลบสังคม', zh: '💰 富有但遗憾。你获得了 5000 万美元。袋狼咬伤了一名游客引发布发。你为了躲避舆论而更名改姓。' }, stats: { competence: 30, ethics: 10, leadership: 15, innovation: 20 } }
        ]
    },
    {
        id: 'bi_024',
        text: {
            en: '🌿 The Tribal Medicine: You found a rare plant compound that shrinks pancreatic tumors. Pfizer offers $20M for the patent. The tribe considers it sacred and forbids commercial use.',
            th: '🌿 ยาจากเผ่าพื้นเมือง: คุณพบสารในพืชที่ช่วยลดเนื้องอกตับอ่อน Pfizer เสนอ 20 ล้านดอลลาร์เพื่อสิทธิบัตร แต่เผ่าต้นทางถือว่าพืชนี้ศักดิ์สิทธิ์และห้ามค้าขาย',
            zh: '🌿 部落医学：你发现了一种能缩小胰腺肿瘤的稀有植物。辉瑞出价 2000 万美元。部落认为该植物神圣，禁止商业用途。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Ethical Profit Sharing: "Negotiate a deal where 50% of profits go back to the tribe for land protection."', th: '🤝 แบ่งกำไร: "เจรจาให้กำไร 50% กลับสู่เผ่าเพื่อปกป้องที่ดินของพวกเขา"', zh: '🤝 伦理利润共享：“谈判一项协议，将 50% 的利润返还给该部落用于土地保护。”' }, consequence: { en: '✅ Cultural Victory! The tribe buys 1M acres of rainforest. The drug saves 50,000 lives annually. You are a bio-equity pioneer.', th: '✅ ชัยชนะทางวัฒนธรรม! เผ่าซื้อป่า 1 ล้านเอเคอร์คุ้มครองไว้ได้ ยาช่วยชีวิตคน 50,000 คนต่อปี คุณเป็นผู้นำความเสมอภาคทางชีวภาพ', zh: '✅ 文化胜利！部落购买了 100 万英亩雨林。该药物每年挽救 5 万人。你成为了生物公平的先驱。' }, stats: { competence: 45, ethics: 45, leadership: 45, innovation: 40 } },
            { id: 'B', text: { en: '🌎 Open Science: "Publish the structure for free. No one gets the patent. Bypasses corporate greed."', th: '🌎 วิทยาศาสตร์แบบเปิด: "ตีพิมพ์โครงสร้างฟรี ไม่มีใครได้สิทธิบัตร ข้ามพ้นความโลภของบริษัท"', zh: '🌎 开放科学：“免费公布结构。没人能获得专利。避开了企业的贪婪。”' }, consequence: { en: '⚠️ Bitter Success. Pfizer pulls funding. Smalls generics start making it, but it remains expensive to synthesize.', th: '⚠️ ความสำเร็จที่ขมขื่น Pfizer ถอนทุน ยายังแพงเพราะสังเคราะห์ยาก เผ่าภูมิใจแต่คนเข้าถึงยาลำบาก', zh: '⚠️ 苦涩的成功。辉瑞撤回资助。虽然开始生产，但其合成成本依然很高。' }, stats: { competence: 35, ethics: 50, leadership: 30, innovation: 45 } },
            { id: 'C', text: { en: '💼 Patent Now, Apologize Later: "Secure the $20M. It’s too important. Donate secrets later."', th: '💼 จดสิทธิบัตรก่อน: "รับเงิน 20 ล้านไว้ก่อน มันสำคัญเกินไป ค่อยแอบบริจาคให้เผ่าทีหลังเอา"', zh: '💼 先申请专利：“确保这 2000 万美元。这对人类太重要了。以后再秘密捐款。”' }, consequence: { en: '💀 Scandal! The tribe sues. Activists burn your lab. You are seen as a "Bio-Colonialist." Your career is tainted.', th: '💀 เรื่องฉาว! เผ่าฟ้องร้อง นักกิจกรรมเผาแล็บคุณ คุณถูกมองว่าเป็นพวกนักล่าอาณานิคมทางชีวภาพ อาชีพมีมลทิน', zh: '💀 丑闻！部落起诉。活动人士焚烧了你的实验室。你被视为“生物殖民者”。你的职业生涯受损。' }, stats: { competence: 40, ethics: 10, leadership: 15, innovation: 45 } },
            { id: 'D', text: { en: '🔬 Synthetic Alternative: "Don\'t use the plant. Build a fully synthetic version that doesn\'t require the original plant."', th: '🔬 ทางเลือกสังเคราะห์: "ไม่ต้องใช้พืชจริง สร้างเวอร์ชันสังเคราะห์ที่เลียนแบบโครงสร้างโดยไม่ต้องพึ่งพาพืชจากเผ่า"', zh: '🔬 合成替代方案：“不要使用植物。构建一个完全不需要原始植物的合成版本。”' }, consequence: { en: '✅ Scientific Triumph! You bypass the conflict. Pfizer buys the version for $40M. You donate $5M as a gift. Integrity met genius.', th: '✅ ชัยชนะทางวิทยาศาสตร์! คุณเลี่ยงความขัดแย้งได้หมด Pfizer ซื้อผลงานไปในราคา 40 ล้าน คุณบริจาคเงินให้เผ่า 5 ล้านเป็นของขวัญ', zh: '✅ 科学凯旋！你避开了冲突。辉瑞以 4000 万美元购买。你捐赠了 500 万美元作为馈赠。诚信与天才的碰撞。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'bi_025',
        text: {
            en: '🏙️ Urban Biodiversity: You are designing a "Green Corridor" to save 12 endangered birds. It requires evicting a low-income neighborhood. The council wants you to justify it as "Essential Restoration."',
            th: '🏙️ ความหลายหลายทางชีวภาพในเมือง: คุณกำลังสร้าง "ทางเดินสีเขียว" เพื่อช่วยนก 12 สายพันธุ์ แต่มันต้องไล่ที่คนจน สภาเมืองอยากให้คุณรับรองว่านี่คือการฟื้นฟูที่จำเป็น',
            zh: '🏙️ 城市生物多样性：你正设计一个“绿色走廊”以拯救 12 种濒危鸟类。这需要驱逐一个低收入社区。市议会希望你将其定义为“必要的修复”。'
        },
        options: [
            { id: 'A', text: { en: '🌳 Prioritize Nature: "Stick to the plan. These birds will go extinct otherwise. Human housing can be moved."', th: '🌳 เน้นธรรมชาติ: "ทำตามแผนเดิม นกเหล่านี้จะสูญพันธุ์หากไม่มีที่นี่ บ้านคนย้ายได้ แต่ระบบนิเวศยาสไม่ได้"', zh: '🌳 自然优先：“坚持计划。否则这些鸟会灭绝。住房可以搬迁。”' }, consequence: { en: '⚠️ Ecological Victory, Moral Collapse. Birds thrive, but 2,000 families are displaced. You are seen as an Eco-Elitist.', th: '⚠️ ชนะทางนิเวศแต่พังทางศีลธรรม นกอยู่ดีกินดีแต่ 2,000 ครอบครัวไร้ที่ซุกหัวนอน คุณถูกตราหน้าว่าเป็นพวกนักอนุรักษ์หัวสูง', zh: '⚠️ 生态胜利，道德坍塌。鸟类繁衍旺盛，但 2000 个家庭流离失所。你被视为生态精英主义者。' }, stats: { competence: 40, ethics: 15, leadership: 30, innovation: 35 } },
            { id: 'B', text: { en: '🏢 Vertical Solution: "Suggest a more expensive vertical forest on existing skyscrapers to avoid evictions. Burden the corporations."', th: '🏢 ป่าแนวตั้ง: "เสนอสร้างป่าบนตึกระฟ้าแทนซึ่งแพงกว่าเพื่อไม่ให้มีการไล่ที่ ผลักภาระไปที่พวกนายทุนบริษัทแทน"', zh: '🏢 垂直方案：“建议在摩天大楼上建造更昂贵的垂直森林以避免驱逐。将负担转嫁给企业。”' }, consequence: { en: '✅ Social Harmony! Public support forces corporations to comply. You save both birds and humans. Industry leader status.', th: '✅ ความกลมเกลียวทางสังคม! แรงกดดันมหาชนบีบให้บริษัทต้องทำตาม คุณรักษานกและชาวบ้านไว้ได้จนเป็นผู้นำวงการ', zh: '✅ 社会和谐！公众支持迫使企业服从。你拯救了鸟类和居民。奠定了行业领先地位。' }, stats: { competence: 45, ethics: 50, leadership: 50, innovation: 45 } },
            { id: 'C', text: { en: '📉 Downscale: "Modify the plan to save only 6 species, allowing the neighborhood to stay. Half a win is better than war."', th: '📉 ลดขนาด: "ปรับแผนช่วยนกแค่ 6 สายพันธุ์เพื่อให้ชุมชนอยู่ต่อได้ ชัยชนะครึ่งเดียวดีกว่าสงครามสังคม"', zh: '📉 缩减规模：“将计划修改为仅拯救 6 种，让社区保留。半个胜利总比战争好。”' }, consequence: { en: '⚠️ Mediocre Result. The 6 species you cut go extinct. You satisfy no one and lose half the biodiversity.', th: '⚠️ ผลลัพธ์งั้นๆ นก 6 สายพันธุ์ที่คุณตัดทิ้งสูญพันธุ์ไปเลย คุณไม่ทำให้ใครพอใจและเสียความหลากหลายไปครึ่งหนึ่ง', zh: '⚠️ 平庸的结果。那 6 种鸟类灭绝了。你没能让任何人满意，并失去了一半的生物多样性。' }, stats: { competence: 25, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🤝 Integrated Housing: "Redesign the Corridor to incorporate sustainable, low-income housing WITHIN the park."', th: '🤝 ที่พักบูรณาการ: "ออกแบบใหม่ให้ป่าและที่พักคนจนที่ยั่งยืนอยู่ร่วมกันในพื้นที่เดียวกันไปเลย"', zh: '🤝 综合住房：“重新设计走廊，在公园内纳入可持续的低收入住房。”' }, consequence: { en: '🌟 Global Masterpiece! It costs 50% more, but it’s the world\'s first "Inclusive Nature Zone." Property values skyrocket safely.', th: '🌟 ผลงานชิ้นเอกระดับโลก! แม้แพงขึ้น 50% แต่นี่คือโซนธรรมชาติเพื่อทุกคนแห่งแรกของโลก ราคาที่ดินพุ่งขึ้นอย่างยั่งยืน', zh: '🌟 全球杰作！虽然多花了 50%，但它是世界上第一个“包容性自然区”。地产价值稳步上升。' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'bi_026',
        text: {
            en: '🦟 Gene-Drive Gamble: You engineered mosquitoes that would wipe out malaria in 2 years. A rival suggests this could collapse local bat populations. Final approval with the African Union is pending.',
            th: '🦟 การเดิมพัน Gene-Drive: คุณสร้างยุงที่สามารถกำจัดมาลาเรียได้ใน 2 ปี แต่คู่แข่งเตือนว่าค้างคาวท้องถิ่นอาจล่มสลาย สหภาพแอฟริกากำลังรอคำตอบจากคุณ',
            zh: '🦟 基因驱动的赌博：你开发了能在 2 年内消灭疟疾的蚊子。对手暗示这可能导致当地蝙蝠种群崩溃。正等待非洲联盟的最终审批。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Release Immediately: "Save the children now. Human life is priority over bats."', th: '🚀 ปล่อยทันที: "ช่วยเด็กก่อน ชีวิตคนสำคัญกว่าค้างคาว"', zh: '🚀 立即释放：“现在就拯救孩子们。人类生命优先于蝙蝠。”' }, consequence: { en: '✅ Humanitarian Victory. Malaria is wiped out. 5 years later, bats find other food, but dragonflies decline, hurting crops.', th: '✅ ชัยชนะทางมนุษยธรรม มาลาเรียหายไป 5 ปีให้หลังค้างคาวไปกินอย่างอื่นแทน แต่แมลงปอลดลงจนการเกษตรแย่ลง', zh: '✅ 人道主义胜利。疟疾被消灭了。5 年后，蝙蝠找到了其他食物，但蜻蜓减少了，影响了农作物。' }, stats: { competence: 45, ethics: 35, leadership: 45, innovation: 50 } },
            { id: 'B', text: { en: '🛑 Pause for Research: "Demand 5 more years of testing. We cannot risk planetary ecological collapse."', th: '🛑 ระงับเพื่อวิจัย: "ขอเวลาทดสอบอีก 5 ปี เราไม่อาจเสี่ยงต่อการล่มสลายของระบบนิเวศโลกได้"', zh: '🛑 暂停研究：“要求再进行 5 年测试。我们不能冒全球生态崩溃的风险。”' }, consequence: { en: '💀 Tragic Stagnation. In the 5 years you waited, 2 million more die. Bats would have survived easily. Your caution had a body count.', th: '💀 ความนิ่งเฉยที่น่าสลด ใน 5 ปีที่คุณรอ มีคนตายเพิ่มอีก 2 ล้านคน ผลวิจัยพบว่าค้างคาวรอดได้สบาย ความระวังของคุณแลกด้วยชีวิต', zh: '💀 悲剧性的停滞。在你等待的 5 年里，又有 200 万人死亡。事实证明蝙蝠本可以生存。你的谨慎付出了生命的代价。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '⚖️ Trial Region: "Release in one isolated region with massive monitoring first. A trial run."', th: '⚖️ พื้นที่ทดลอง: "ปล่อยในพื้นที่แยกตัวแห่งเดียวก่อนพร้อมการเฝ้าระวังอย่างหนัก เพื่อดูผลลัพธ์เบื้องต้น"', zh: '⚖️ 试点区域：“先在一个孤立地区释放并进行大规模监测。作为试运行。”' }, consequence: { en: '✅ Balanced Success. Trial shows shifts are manageable. Within 8 years, malaria is gone from 80% of Africa with zero extinctions.', th: '✅ ความสำเร็จที่สมดุล ผลทดลองแสดงว่าจัดการได้ ใน 8 ปี มาลาเรียหายไป 80% ของแอฟริกาโดยไม่มีสปีชีส์อื่นสูญพันธุ์', zh: '✅ 平衡的成功。试验显示转变是可控的。在 8 年内，非洲 80% 地区的疟疾消失了，且没有物种灭绝。' }, stats: { competence: 50, ethics: 45, leadership: 50, innovation: 45 } },
            { id: 'D', text: { en: '💉 Back to Vaccines: "Abandon gene drive. Use funding for mRNA malaria vaccines instead. Safer but slower."', th: '💉 กลับไปที่วัคซีน: "เลิก Gene Drive แล้วเอาทุนไปเร่งพัฒนาวัคซีน mRNA แทน ปลอดภัยชัวร์แต่ช้ากว่า"', zh: '💉 回归疫苗：“放弃基因驱动。利用资金研发 mRNA 疟疾疫苗。更安全但更慢。”' }, consequence: { en: '📉 Incremental Progress. 15 years later, the vaccine is 70% effective. You avoided risk but didn\'t solve the root problem.', th: '📉 ก้าวหน้าทีละนิด 15 ปีผ่านไป วัคซีนได้ผล 70% คุณเลี่ยงความเสี่ยงได้แต่ไม่ได้แก้ปัญหาที่ต้นเหตุ', zh: '📉 渐进式进展。15 年后，疫苗有效率为 70%。你避开了风险，但没能从根本上解决问题。' }, stats: { competence: 35, ethics: 45, leadership: 35, innovation: 25 } }
        ]
    },
    {
        id: 'bi_027',
        text: {
            en: '🧫 The Lab-Grown Steak: You created a petri-dish steak that tastes 100% like beef but costs $50 to produce. A major fast-food chain wants to buy the IP but plans to add a chemical that makes the meat "addictive" to ensure loyalty. Do you sign?',
            th: '🧫 สเต็กจากห้องแล็บ: คุณสร้างเนื้อในจานเพาะเชื้อที่รสเหมือนเนื้อวัว 100% แต่ต้นทุนสูงถึง $50 ฟาสต์ฟู้ดเจ้าดังอยากซื้อสูตรแต่จะใส่สารที่ทำให้ "เสพติด" เพื่อให้ลูกค้ากลับมาซื้อซ้ำ คุณจะยอมไหม?',
            zh: '🧫 实验室培植牛排：你创造了一种味道 100% 像牛肉的培养皿牛排，但生产成本为 50 美元。一家大型快餐连锁店想购买该专利，但计划添加一种使肉质“成瘾”的化学物质以确保忠诚度。你会签约吗？'
        },
        options: [
            { id: 'A', text: { en: '🚫 Refuse: "No chemicals. We are here to solve the environmental crisis, not create a health one. Keep the IP."', th: '🚫 ปฏิเสธ: "ไม่ใส่สารเคมี เรามาเพื่อแก้ปัญหาสุภาพแวดล้อม ไม่ใช่สร้างปัญหาด้าสุขภาพ เก็บสูตรไว้เอง"', zh: '🚫 拒绝：“不添加化学物质。我们是来解决环境危机的，不是为了制造健康危机。保留专利。”' }, consequence: { en: '✅ Ethical Independence. You find an ethical investor who helps you drop the cost to $10. You become the face of "Clean Meat." Slow but pure growth.', th: '✅ อิสระทางศีลธรรม คุณหานักลงทุนที่มีจริยธรรมช่วยลดทุนเหลือ $10 กลายเป็นสัญลักษณ์ของ "เนื้อสะอาด" เติบโตช้าแต่ยั่งยืน', zh: '✅ 伦理上的独立。你找到了一位有道德的投资者，帮助你将成本降至 10 美元。你成为了“洁净肉类”的代言人。增长虽慢但纯洁。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🤝 Compromise: "Take the deal but demand a clause forbidding the additive. Take 20% less money."', th: '🤝 ประนีประนอม: "ยอมรับข้อเสนอแต่ต้องระบุห้ามใส่สารเคมีเพิ่ม ยอมได้เงินน้อยลง 20%"', zh: '🤝 折衷方案：“达成协议，但要求加入禁止添加剂的条款。接受减少 20% 的报酬。”' }, consequence: { en: '⚠️ Legal Battle. They sign but sneaky scientists add the chemical anyway. You sue them and spend 5 years in court. The tech stalls. You are rich but exhausted.', th: '⚠️ ศึกกฎหมาย เขาเซ็นแต่แอบใส่สารอยู่ดี คุณฟ้องและต้องอยู่ศาลไป 5 ปี เทคโนโลยีหยุดชะงัก คุณรวยแต่สะบักสะบอม', zh: '⚠️ 法律斗争。他们签约了，但偷偷添加了化学物质。你起诉了他们并在法庭上耗了 5 年。技术陷入停滞。你虽然富有但筋疲力竭。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '💸 Take the Deal: "Scale is everything. If the whole world eats lab-meat, factory farming ends. The additive is the price of progress."', th: '💸 ยอมรับข้อเสนอ: "ขนาดของธุรกิจคือทุกอย่าง ถ้าคนทั้งโลกกินเนื้อแล็บ การทำฟาร์มนรกก็จบ สารเคมีคือราคาของความก้าวหน้า"', zh: '💸 达成协议：“规模就是一切。如果全世界都吃培植肉，工厂化养殖就会结束。添加剂是进步的代价。”' }, consequence: { en: '💀 Dark Success. Factory farming ends in 10 years. Total carbon emissions drop by 20%. But child obesity rates triple. You are a billionaire villain/hero.', th: '💀 ความสำเร็จสายดาร์ก การทำฟาร์มอุตสาหกรรมจบสิ้นใน 10 ปี มลพิษลด 20% แต่เด็กอ้วนเพิ่ม 3 เท่า คุณเป็นทั้งฮีโร่และวายร้ายพันล้าน', zh: '💀 阴暗的成功。工厂化养殖在 10 年内结束。总碳排放量下降了 20%。但儿童肥胖率翻了三倍。你是一个亿万富翁般的反英雄。' }, stats: { competence: 50, ethics: -40, leadership: 20, innovation: 45 } },
            { id: 'D', text: { en: '🖥️ Open Source Steak: "Release the recipe for free online. Let EVERY restaurant make their own lab beef. Disrupt the fast food giants."', th: '🖥️ เนื้อสูตรเปิด: "ปล่อยสูตรฟรีลงเน็ต ให้ทุกร้านทำเนื้แล็บเองได้เลย ถล่มพวกยักษ์ใหญ่ฟาสต์ฟู้ดให้ยับ"', zh: '🖥️ 开源牛排：“在线免费发布配方。让每家餐厅都能制作自己的培植牛肉。瓦解快餐巨头。”' }, consequence: { en: '🌟 Revolution! Thousands of small businesses start making lab beef. You earn nothing but a Nobel in Economics/Biology. You changed human history.', th: '🌟 การปฏิวัติ! ธุรกิจเล็กๆ นับพันเริ่มผลิตเนื้แล็บเอง คุณไม่ได้เงินสักบาทแต่ได้โนเบลและได้เปลี่ยนประวัติศาสตร์มนุษยชาติ', zh: '🌟 革命！成千上万的小企业开始制作培植牛肉。你一无所获，但获得了诺贝尔奖。你改变了人类历史。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 100 } }
        ]
    },
    {
        id: 'bi_028',
        text: {
            en: '🌊 The Deep Sea Mining: A tech company wants you to survey the deep sea for lithium. You find a colony of "Ghost Octopuses" that exists nowhere else. If you report them, the $1B mine is canceled. If you don\'t, the species goes extinct. They offer a $1M "Consulting Bonus."',
            th: '🌊 เหมืองใต้ทะเลลึก: บริษัทเทคโนโลยีจ้างคุณสำรวจลิเธียมใต้ทะเล คุณเจออาณานิคมของ "หมึกผี" ที่หาไม่ได้จากที่ไหนอีกแล้ว ถ้าคุณรายงาน เหมืองพันล้านจะถูกยกเลิก ถ้าไม่บอกหมึกจะสูญพันธุ์ เขาเสนอเงิน "ค่าปรึกษา" ให้คุณ 1 ล้านดอลลาร์',
            zh: '🌊 深海采矿：一家科技公司想请你调查深海锂矿。你发现了一个只存在于那里的“幽灵章鱼”群落。如果你报告，这笔 10 亿美元的采矿项目就会被取消。如果你不报告，该物种就会灭绝。他们提供 100 万美元的“咨询奖金”。'
        },
        options: [
            { id: 'A', text: { en: '🐙 Protect the Octopus: "Publish the findings immediately. The species is priceless. The lithium can be found elsewhere."', th: '🐙 ปกป้องหมึก: "ตีพิมพ์งานวิจัยทันที สปีชีส์นี้ล้ำค่าเกินไป ลิเธียมหาที่อื่นได้"', zh: '🐙 保护章鱼：“立即公布发现。该物种是无价的。锂矿可以在别处找到。”' }, consequence: { en: '✅ Conservation Legend. The mine is blocked. You are fired but hired by National Geographic as a lead explorer. You protect the last frontier.', th: '✅ ตำนานนักอนุรักษ์ เหมืองถูกระงับ คุณโดนไล่แต่ออกแต่ Nat Geo จ้างคุณไปเป็นหัวหน้านักสำรวจแทน คุณได้ปกป้องพรมแดนสุดท้ายไว้ได้', zh: '✅ 保护传说。矿山被封锁。你被解雇了，但被《国家地理》聘为首席探险家。你保护了最后的疆域。' }, stats: { competence: 45, ethics: 50, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '🚢 Relocate the Colony: "Suggest moving the octopuses to a sanctuary. Use the $1M to fund the move. Keep the mine."', th: '🚢 ย้ายบ้านหมึก: "เสนอให้ย้ายอาณานิคมหมึกไปที่เขตอนุรักษ์ ใช้เงิน 1 ล้านนั้นเป็นทุนในการย้าย และให้เหมืองดำเนินต่อไป"', zh: '🚢 迁移群落：“建议将章鱼迁移到保护区。利用这 100 万美元资助搬迁。保留矿山。”' }, consequence: { en: '⚠️ Scientific Failure. 90% of the octopuses die during the move because they can\'t handle the pressure change. You get the money, but the blood is on your hands.', th: '⚠️ ความล้มเหลวทางวิทยาศาสตร์ หมึก 90% ตายระหว่างย้ายเพราะทนแรงดันเปลี่ยนไม่ไหว คุณได้เงินแต่ความรู้สึกผิดจะกัดกินใจคุณตลอดไป', zh: '⚠️ 科学失败。90% 的章鱼在迁移过程中死了，因为它们无法承受压力变化。你拿到了钱，但手上沾满了鲜血。' }, stats: { competence: 30, ethics: 10, leadership: 20, innovation: 30 } },
            { id: 'C', text: { en: '⚖️ Negotiate Buffer Zone: "Agree to the mine but demand a 5-mile exclusion zone around the octopuses. They get 80% of the lithium."', th: '⚖️ พื้นที่กันชน: "ยอมให้ทำเหมืองแต่ต้องเว้นระยะห่าง 5 ไมล์รอบกลุ่มหมึก เขาจะได้ลิเธียมไป 80%"', zh: '⚖️ 谈判缓冲区：“同意采矿，但要求在章鱼周围设置 5 英里的排斥区。他们可以获得 80% 的锂。”' }, consequence: { en: '✅ Pragmatic Win. The company agrees. The octopuses survive, and the electric car industry gets its lithium. You are seen as a genius negotiator for the Earth.', th: '✅ ชัยชนะที่ได้ผลจริง บริษัทตกลง หมึกอยู่รอด อุตสาหกรรมรถไฟฟ้าก็ได้ลิเธียมมาใช้ คุณถูกมองว่าเป็นยอดนักเจรจาเพื่อรักษาโลก', zh: '✅ 务实的胜利。公司同意了。章鱼存活了下来，电动车行业得到了锂。你被视为地球的天才谈判家。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 20 } },
            { id: 'D', text: { en: '🤫 Silence is Golden: "Take the $1M and look the other way. Lithium saves the planet from CO2. One octopus species is a small sacrifice."', th: '🤫 ความเงียบคือทองคำ: "รับเงิน 1 ล้านแล้วลืมๆ มันไป ลิเธียมช่วยโลกจาก CO2 ได้ หมึกแค่สปีชีส์เดียวคือการสละส่วนน้อยเพื่อส่วนใหญ่"', zh: '🤫 沉默是金：“拿走 100 万美元并装作没看见。锂使地球免受二氧化碳损害。一个章鱼物种只是小小的牺牲。”' }, consequence: { en: '💰 Rich and Regretful. You retire early. 10 years later, you see a documentary about the "Lost Ghost Octopus." You turn off the TV.', th: '💰 รวยแต่ขมขื่น คุณเกษียณเร็วขึ้น 10 ปีต่อมาคุณเห็นสารคดีเรื่อง "หมึกผีที่หายสาบสูญ" คุณทำได้แค่กดปิดทีวีหนีความจริง', zh: '💰 富有但遗憾。你提前退休了。10 年后，你看到了一部关于“消失的幽灵章鱼”的纪录片。你关掉了电视。' }, stats: { competence: 20, ethics: -50, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'bi_029',
        text: {
            en: '🧠 The Neural Connect: Your research shows that fungal networks in forests actually transmit "thoughts" between trees. A tech company wants to use this to build a "Biological Internet" that replaces cables with trees. But this might cause the forest to become "stressed" and die early.',
            th: '🧠 เครือข่ายสื่อสารธรรมชาติ: งานวิจัยคุณพบว่าเครือข่ายเชื้อราในป่าสามารถส่ง "ความคิด" ระหว่างต้นไม้ได้ บริษัทเทคโนโลยีอยากใช้สิ่งนี้สร้าง "อินเทอร์เน็ตชีวภาพ" แทนที่สายเคเบิลด้วยต้นไม้ แต่มันอาจทำให้ป่าเครียดและตายเร็วขึ้น',
            zh: '🧠 神经连接：你的研究表明，森林中的真菌网络实际上在树木之间传递“思想”。一家科技公司想利用这一点建立一个“生物互联网”，用树木取代电缆。但这可能会导致森林产生“压力”并早死。'
        },
        options: [
            { id: 'A', text: { en: '🌐 Build the Bio-Net: "This could end the mineral mining for tech forever. Communication that grows like a tree is the ultimate goal."', th: '🌐 สร้างไบโอเน็ต: "นี่คือจุดจบของการขุดแร่มาสร้างเทคโนโลยี การสื่อสารที่เติบโตได้เหมือนต้นไม้คือเป้าหมายสูงสุด"', zh: '🌐 建立生物网络：“这可以永远结束科技领域的矿产开采。像树一样生长的通信是最终目标。”' }, consequence: { en: '⚠️ World-Changing Tech. High-speed internet reaches everywhere for free. But old forests begin to "crash" due to data overload. You saved tech but broke nature.', th: '⚠️ เทคโนโลยีเปลี่ยนโลก อินเทอร์เน็ตฟรีเข้าถึงทุกที่ แต่ป่าเก่าแก่เริ่ม "ล่มสลาย" เพราะข้อมูลล้นป่า คุณช่วยเทคโนโลยีแต่ทำลายธรรมชาติ', zh: '⚠️ 改变世界的技术。高速互联网免费覆盖各处。但由于数据过载，古老的森林开始“崩溃”。你拯救了科技，却破坏了大自然。' }, stats: { competence: 50, ethics: 20, leadership: 40, innovation: 60 } },
            { id: 'B', text: { en: '🛑 Forbidden Knowledge: "Keep the research secret. Humans aren\'t ready to hack the forest\'s consciousness. Protect the silence."', th: '🛑 ความรู้ที่ต้องห้าม: "เก็บงานวิจัยเป็นความลับ มนุษย์ยังไม่พร้อมที่จะเจาะระบบความคิดของป่า ปกป้องความสงบเงียบนี้ไว้"', zh: '🛑 禁忌知识：“保密研究结果。人类还没准备好入侵森林的意识。保护这份沉默。”' }, consequence: { en: '✅ Guardian of the Wild. The forest remains ancient and mystical. You spend your life as a simple forest ranger, protecting a secret the world will never know. Soul +100.', th: '✅ ผู้พิทักษ์ป่า ป่ายังคงความลึกลับและเก่าแก่ไว้ได้ คุณใช้ชีวิตเป็นแค่เจ้าหน้าที่ป่าไม้ดูแลความลับที่โลกจะไม่มีวันรู้ สุขทางใจเต็มร้อย', zh: '✅ 荒野守护者。森林保持着古老和神秘。你以普通护林员的身分度过余生，守护一个世界永远不会知道的秘密。灵魂 +100。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🧪 Filtered Use: "Design a way to use only 5% of the network capacity. Slow internet, but no stress on the trees."', th: '🧪 ใช้งานแบบจำกัด: "ออกแบบวิธีใช้ความจุแค่ 5% ของเครือข่าย อินเทอร์เน็ตอาจจะช้าแตต้นไม้ไม่เครียดแน่นอน"', zh: '🧪 过滤使用：“设计一种仅使用 5% 网络容量的方法。互联网虽然慢，但不会给树木带来压力。”' }, consequence: { en: '✅ Harmonious Future. You build a slow, beautiful, stable network used for emergency medicine and basic education. The trees remain healthy. You win the Nobel Prize in Peace.', th: '✅ อนาคตที่กลมกลืน คุณสร้างเครือข่ายที่มั่นคงเพื่อการแพทย์ฉุกเฉินและการศึกษาพื้นฐาน ต้นไม้ยังแข็งแรงดี คุณได้รับรางวัลโนเบลสาขาสันติภาพ', zh: '✅ 和谐的未来。你建立了一个缓慢、美观、稳定的网络，用于急救医疗和基础教育。树木保持健康。你获得了诺贝尔和平奖。' }, stats: { competence: 40, ethics: 45, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '💸 Patent & Sell: "Patent the communication nodes and sell them to the highest bidder. Business is business."', th: '💸 จดสิทธิบัตรแล้วขาย: "จดสิทธิบัตรโหนดการสื่อสารแล้วขายให้คนที่ประมูลให้ราคาสูงสุด ธุรกิจก็คือธุรกิจ"', zh: '💸 专利与出售：“为通信节点申请专利并出售给出价最高的人。生意就是生意。”' }, consequence: { en: '💰 Wealthy & Hated. You make $200M. The buyer (a telecom giant) burns out the Amazon within 20 years. You are the man who "Killed the Trees." You have a yacht but no friends.', th: '💰 รวยแต่คนเลิกคบ คุณได้เงิน 200 ล้านดอลลาร์ ผู้ซื้อทำป่าอเมซอนวอดวายใน 20 ปี คุณคือคนฆ่าต้นไม้ มีเรือยอร์ชแต่ไม่มีเพื่อนแม้แต่คนเดียว', zh: '💰 富有但遭人唾弃。你赚了 2 亿美元。买家（一家电信巨头）在 20 年内耗尽了亚马逊森林。你是“杀死树木”的人。你有游艇，但没有朋友。' }, stats: { competence: 45, ethics: -100, leadership: 20, innovation: 30 } }
        ]
    },
    {
        id: 'bi_030',
        text: {
            en: '🦋 The Migration Emergency: A highway project will cut through the only migration route of the world\'s last Golden Monarch butterflies. Without this route, they will vanish. The highway is "Essential" for local trade. Do you sabotage the construction equipment secretly or try to sue?',
            th: '🦋 วิกฤตการอพยพ: โครงการทางหลวงจะตัดผ่านเส้นทางอพยพเพียงสายเดียวของผีเสื้อโกลเดนโมนาคฝูงสุดท้ายของโลก ถ้าไม่มีทางนี้พวกมันจะสูญพันธุ์ แต่ทางหลวงนี้ก็ "จำเป็น" ต่อการค้ามาก คุณจะแอบทำลายเครื่องจักรหรือจะฟ้องศาล?',
            zh: '🦋 迁徙紧急情况：一个高速公路项目将切断世界最后一只金斑蝶的唯一迁徙路线。如果没有这条路线，它们就会消失。高速公路对当地贸易至关重要。你是秘密破坏施工设备还是尝试起诉？'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Sue the State: "File a massive environmental lawsuit. Use the law to stop the bulldozers."', th: '⚖️ ฟ้องร้องรัฐ: "ยื่นฟ้องศาลสิ่งแวดล้อม ใช้กฎหมายหยุดรถแทรกเตอร์เหล่านั้นซะ"', zh: '⚖️ 起诉国家：“提起大规模的环境诉讼。利用法律阻止推土机。”' }, consequence: { en: '⚠️ Delayed Failure. You win an injunction for 6 months, but a corrupt judge eventually clears the path. The highway is built. 50% of the butterflies die. You are legally correct but failed the species.', th: '⚠️ ความล้มเหลวที่ล่าช้า คุณชนะคำสั่งคุ้มครอง 6 เดือน แต่ผู้พิพากษาจอมโกงก็เปิดทางให้จนได้ ทางหลวงถูกสร้าง นกตายไปครึ่งหนึ่ง คุณทำถูกกฎหมายแต่นกตาย', zh: '⚠️ 延迟的失败。你赢得了 6 个月的禁令，但最终被清除。高速公路建成了。50% 的蝴蝶死亡。你在法律上是对的，但没能拯救该物种。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🕶️ Secret Sabotage: "Late at night, pour sugar in the diesel tanks of the machinery. Delay them long enough for the migration to pass."', th: '🕶️ แอบทำลายเงียบๆ: "กลางดึก แอบเทน้ำตาลใส่ถังน้ำมันเครื่องจักร ถ่วงเวลาให้นานพอจนกลุ่มนกอพยพผ่านไปเป็นอันจบ"', zh: '🕶️ 秘密破坏：“深夜在机器的柴油箱里倒糖。延迟足够长的时间让迁徙通过。”' }, consequence: { en: '✅ Success! The construction is delayed by a month. The butterflies pass safely. You are never caught. The highway is built late, but the species is safe. You are a bio-guerrilla hero.', th: '✅ สำเร็จ! การก่อสร้างล่าช้าไปหนึ่งเดือน นกอพยพผ่านไปได้อย่างปลอดภัย คุณไม่โดนจับ สปีชีส์อยู่รอด คุณคือวีรบุรุษนักรบเพื่อธรรมชาติ', zh: '✅ 成功！施工推迟了一个月。蝴蝶安全通过。你从未被抓住。虽然高速公路建成晚了，但物种安全了。你是一个生物游击英雄。' }, stats: { competence: 30, ethics: 20, leadership: 45, innovation: 40 } },
            { id: 'C', text: { en: '🌉 The Overpass Solution: "Propose a $20M bridge covered in nectar-rich flowers specifically for butterflies. Demand the state pays."', th: ' bridge สะพานลอยดอกไม้: "เสนอสร้างสะพาน 20 ล้านดอลลาร์ที่เต็มไปด้วยดอกไม้น้ำหวานสำหรับนกโดยเฉพาะ และบังคับให้รัฐเป็นคนจ่าย"', zh: ' bridge 天桥方案：“建议建造一座价值 2000 万美元、种满产蜜花卉的天桥。要求政府出资。”' }, consequence: { en: '✅ Global Innovation! The bridge works. It becomes a tourist attraction. You win the "Green Architect" award. You saved the butterflies and the economy. Perfect leadership.', th: '✅ นวัตกรรมระดับโลก! สะพานได้ผลและกลายเป็นที่เที่ยวใหม่ คุณได้รางวัลสถาปนิกสีเขียว ช่วยนกและช่วยเศรษฐกิจได้พร้อมกัน ผู้นำที่สมบูรณ์แบบ', zh: '✅ 全球创新！天桥起作用了。它成为了旅游景点。你获得了“绿色建筑师”奖。你拯救了蝴蝶和经济。完美的领导力。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '📦 Relocate the Swarm: "Use pheromones to lead the 1 million butterflies onto a different route over the mountains."', th: '📦 ย้ายฝูงนก: "ใช้ฟีโรโมนล่อให้ผีเสื้อ 1 ล้านตัวเปลี่ยนเส้นทางไปข้ามทางภูเขาอื่นแทน"', zh: '📦 迁徙群落：“利用信息素引导 100 万只蝴蝶越过大山进入另一条路线。”' }, consequence: { en: '⚠️ High Risk. A sudden storm on the new route kills 80% of the swarm. You tried to play God with migration and failed. You are devastated by the loss.', th: '⚠️ ความเสี่ยงสูง พายุถล่มในเส้นทางใหม่ที่นกไม่คุ้นเคยฆ่ากลุ่มนกไป 80% คุณพยายามเล่นเป็นพระเจ้ากำหนดธรรมชาติแต่พลาด หดหู่ไปตลอดชีวิต', zh: '⚠️ 高风险。新路线上突如其来的风暴杀死了 80% 的蝴蝶。你试图扮演上帝干预迁徙，结果失败了。你因这种损失而崩溃。' }, stats: { competence: 35, ethics: 30, leadership: 20, innovation: 45 } }
        ]
    },
    {
        id: 'bi_022',
        text: {
            en: '🦣 The Mammoth Resurrect: A tech billionaire offers to fund your research to bring back the Woolly Mammoth using CRISPR and elephant hosts. Proponents say it will help restore the Arctic tundra. Opponents say it\'s "playing God" and takes money away from protecting living species.',
            th: '🦣 ชุบชีวิตแมมมอธ: มหาเศรษฐีพันล้านเสนอทุนวิจัยเพื่อพาแมมมอธกลับมาโดยใช้ CRISPR และช้างเป็นผู้อุ้มบุญ ฝ่ายสนับสนุนบอกว่ามันจะช่วยฟื้นฟูทุ่งทุนดราในอาร์กติก ฝ่ายค้านบอกว่ามันคือการ "เล่นบทพระเจ้า" และดึงเงินไปจากความพยายามปกป้องสัตว์ที่มีชีวิตอยู่',
            zh: '🦣 猛犸象复活：一位科技亿万富翁提议资助你的研究，利用 CRISPR 技术和象类宿主复活长毛猛犸象。支持者说这将有助于恢复北极苔原。反对者说这是“扮演上帝”，并挪用了保护现存物种的资金。'
        },
        options: [
            {
                id: 'A',
                text: { en: '❄️ Restore the Arctic', th: '❄️ ฟื้นฟูอาร์กติก', zh: '恢复北极' },
                consequence: { en: '✅ Ecological Hero. 10 years later, mammoths are grazing in Siberia. The tundra stays frozen longer, slowing methane release. You are a pioneer of de-extinction.', th: '✅ ฮีโร่สายอนุรักษ์! 10 ปีต่อมา แมมมอธออกหากินในไซบีเรีย ทุ่งทุนดราแข็งตัวนานขึ้น ชะลอการปล่อยก๊าซมีเทน คุณคือผู้บุกเบิกการฟื้นคืนชีพสัตว์สูญพันธุ์', zh: '✅ 生态英雄。10 年后，猛犸象在西伯利亚吃草。苔原保持冻结的时间更长，减缓了甲烷的释放。你是去灭绝化的先驱。' },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: { en: '🐘 Focus on Living Elephants', th: '🐘 เน้นที่ช้างที่มีชีวิตอยู่', zh: '专注于现存大象' },
                consequence: { en: '🛡️ Conservative Conservation. You reject the funding. 10 years later, elephant populations in Africa have stabilized due to your focus, but the Arctic continues to melt. You played it safe.', th: '🛡️ นักอนุรักษ์สายอนุรักษนิยม คุณปฏิเสธเงินทุน 10 ปีต่อมา ประชากรช้างในแอฟริกาคงที่เพราะคุณทุ่มเทให้ แต่ขั้วโลกยังคงละลายต่อไป คุณเลือกทางที่ปลอดภัย', zh: '🛡️ 保守的保护。你拒绝了资助。10 年后，由于你的关注，非洲的大象种群已经稳定下来，但北极继续融化。你选择了稳妥的做法。' },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 }
            }
        ]
    },
    {
        id: 'bi_023',
        text: {
            en: '🥩 Lab-Grown Meat Ethics: You develop a perfect, low-cost lab-grown wagyu beef. It could end factory farming. However, the traditional cattle industry sues you, claiming it\'s "not meat" and will destroy rural economies.',
            th: '🥩 จริยธรรมเนื้อเพาะเลี้ยง: คุณพัฒนาเนื้อวากิวเพาะเลี้ยงในห้องแล็บที่สมบูรณ์แบบและราคาถูก ซึ่งอาจยุติอุตสาหกรรมการทำฟาร์มแบบปิด แต่สมาคมผู้เลี้ยงปศุสัตว์ฟ้องคุณ โดยอ้างว่ามัน "ไม่ใช่เนื้อ" และจะทำลายระบบเศรษฐกิจชนบท',
            zh: '🥩 实验室培育肉类的伦理：你开发出了完美的、低成本的实验室培育和牛肉。它可以终结工厂化养殖。然而，传统的畜牧业起诉了你，声称它“不是肉”，会破坏农村经济。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🍔 Disrupt the Market', th: '🍔 ป่วนตลาด', zh: '颠覆市场' },
                consequence: { en: '🚀 Industrial Revolution. You win the lawsuits. Laboratory meat becomes the global standard. Carbon emissions from food drop 90%. Rural towns suffer, but the planet survives.', th: '🚀 ปฏิวัติอุตสาหกรรม! คุณชนะคดี เนื้อแล็บกลายเป็นมาตรฐานโลก การปล่อยคาร์บอนจากอาหารลดลง 90% เมืองชนบทลำบากแต่โลกอยู่รอด', zh: '🚀 工业革命。你赢得了诉讼。实验肉成为全球标准。来自食物的碳排放下降了 90%。农村小城镇受苦，但地球幸存了下来。' },
                stats: { competence: 60, ethics: 30, leadership: 50, innovation: 90 }
            },
            {
                id: 'B',
                text: { en: '🤝 Collaborate with Farmers', th: '🤝 ร่วมมือกับชาวเกษตรกร', zh: '与农民合作' },
                consequence: { en: '⚖️ Slow Integration. You license your tech to current farmers to transition into "biotech ranchers." It takes longer and costs more, but social peace is maintained.', th: '⚖️ บูรณาการอย่างช้าๆ คุณให้ลิขสิทธิ์เทคโนโลยีกับเกษตรกรเดิมเพื่อเปลี่ยนเป็น "ผู้เลี้ยงสัตว์สายไบโอเทค" ใช้เวลานานกว่าและแพงกว่า แต่รักษาความสงบในสังคมไว้ได้', zh: '⚖️ 缓慢整合。你将技术授权给现在的农民，让他们向“生物技术牧场主”转型。这需要更长时间，成本更高，但维持了社会安定。' },
                stats: { competence: 40, ethics: 50, leadership: 60, innovation: 50 }
            }
        ]
    },
    {
        id: 'bi_024',
        text: {
            en: '🧪 Microbiome Transplants: You find that transplanting gut bacteria from Olympic athletes into average people triples their metabolic health. People are now "stealing" stool samples from stars. Do you patent the specific bacteria and limit access?',
            th: '🧪 การปลูกถ่ายไมโครไบโอม: คุณพบว่าการปลูกถ่ายแบคทีเรียในลำไส้จากนักกีฬาโอลิมปิกไปยังคนทั่วไปช่วยเพิ่มสุขภาพการเผาผลาญเป็นสามเท่า ตอนนี้คนกำลัง "ขโมย" ตัวอย่างอุจจาระจากดารา คุณจะจดสิทธิบัตรแบคทีเรียนั้นและจำกัดการเข้าถึงหรือไม่',
            zh: '🧪 微生物组移植：你发现将奥林匹克运动员的肠道细菌移植到普通人体内，可以使其代谢健康提高三倍。现在人们正在“偷窃”明星的粪便样本。你是否要为这种特定的细菌申请专利并限制获取？'
        },
        options: [
            {
                id: 'A',
                text: { en: '💰 Exclusive Patent', th: '💰 จดสิทธิบัตรผูกขาด', zh: '独家专利' },
                consequence: { en: '💵 Massive Wealth. You create a multi-billion dollar pill company. Obesity drops in the wealthy West, but the poor are left with black-market, dangerous home-transplants.', th: '💵 รวยมหาศาล! คุณสร้างบริษัทขายยากลูล่าพันล้านดอลลาร์ โรคอ้วนลดลงในประเทศตะวันตกที่ร่ำรวย แต่คนจนต้องพึ่งพาการปลูกถ่ายใต้ดินที่อันตราย', zh: '💵 巨额财富。你创建了一家价值数十亿美元的制药公司。西方富裕阶层的肥胖率下降了，但穷人由于无法负担，只能求助于黑市上危险的家庭移植。' },
                stats: { competence: 40, ethics: -20, leadership: 40, innovation: 70 }
            },
            {
                id: 'B',
                text: { en: '🌐 Open Source Health', th: '🌐 สุขภาพแบบโอเพนซอร์ส', zh: '开源健康' },
                consequence: { en: '🕊️ Global Health Leap. You release the genetic sequence and cultivation methods for free. Humanity gets healthier overall, but you struggle to find funding for your next project.', th: '🕊️ ก้าวกระโดดด้านสาธารณสุขโลก! คุณปล่อยลำดับพันธุกรรมและวิธีเพาะเลี้ยงให้ฟรี มวลมนุษยชาติสุขภาพดีขึ้นโดยรวม แต่คุณกลับหาทุนทำโปรเจกต์ต่อไปได้ยาก', zh: '🕊️ 全球健康飞跃。你免费发布了基因序列和培养方法。人类整体变得更健康，但你却为下一个项目筹集资金而苦苦挣扎。' },
                stats: { competence: 50, ethics: 90, leadership: 50, innovation: 30 }
            }
        ]
    },
    {
        id: 'bi_025',
        text: {
            en: '🍄 Fungal Architecture: You develop a species of mushroom that grows into the shape of a house and is stronger than concrete. It captures carbon while growing. However, it requires constant "feeding" with organic waste, which some find disgusting.',
            th: '🍄 สถาปัตยกรรมจากหมา: คุณพัฒนาเห็ดชนิดหนึ่งที่เติบโตเป็นรูปทรงบ้านและแข็งแรงกว่าคอนกรีต มันกักเก็บคาร์บอนขณะเติบโต แต่ต้อง "ให้อาหาร" ด้วยขยะอินทรีย์ตลอดเวลา ซึ่งบางคนมองว่าน่ารังเกียจ',
            zh: '🍄 真菌建筑：你开发出一种蘑菇品种，可以长成房屋的形状，且比混凝土还要坚固。它在生长过程中会捕获碳。然而，它需要不断地“喂食”有机废物，有些人觉得这很恶心。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🏗️ Green Housing Revolution', th: '🏗️ การปฏิวัติที่อยู่อาศัยสีเขียว', zh: '绿色住房革命' },
                consequence: { en: '🏠 Living Cities. Your fungus-houses become the solution for urban slums and climate refugees. They are cheap and self-healing. You win the Pritzker equivalent in Bio-Design.', th: '🏠 เมืองที่มีชีวิต! บ้านเห็ดของคุณกลายเป็นทางออกของสลัมในเมืองและผู้อพยพจากโลรร้อน มันราคาถูกและซ่อมแซมตัวเองได้ คุณชนะรางวัลด้านไบโอดีไซน์ระดับโลก', zh: '🏠 活生生的城市。你的真菌房屋成为了解决城市贫民窟和气候难民问题的方案。它们廉价且具有自愈能力。你赢得了生物设计领域的普利兹克奖。' },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 90 }
            },
            {
                id: 'B',
                text: { en: '🔍 Refine for "Clean" Growth', th: '🔍 พัฒนาให้เติบโตแบบ "สะอาด"', zh: '精炼以实现“清洁”生长' },
                consequence: { en: '⏳ Delay. You spend 5 more years trying to make it grow on sun/water only. By the time you succeed, the concrete industry has lobbied it into illegality. You missed the window.', th: '⏳ ความล่าช้า! คุณใช้เวลาอีก 5 ปีพยายามทำให้มันโตได้ด้วยแดดและน้ำเท่านั้น กว่าจะสำเร็จ อุตสาหกรรมคอนกรีตก็วิ่งเต้นจนมันผิดกฎหมายไปแล้ว คุณพลาดโอกาสทอง', zh: '⏳ 耽搁。你又花了 5 年时间尝试让它只依靠阳光/水生长。等你成功时，混凝土行业已经游说政府将其定为非法。你错过了机会窗口。' },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: 50 }
            }
        ]
    },
    {
        id: 'bi_026',
        text: {
            en: '🦗 The Insect Protein Push: As lead biologist for the UN Food Program, you must decide whether to mandate insect-based protein in school lunches to fight malnutrition. It\'s 10x more sustainable than beef, but parents are calling it "child abuse."',
            th: '🦗 ดันโปรตีนจากแมลง: ในฐานะหัวหน้านักชีววิทยาของโครงการอาหาร UN คุณต้องตัดสินใจว่าจะกำหนดให้มีโปรตีนจากแมลงในมื้อเที่ยงที่โรงเรียนเพื่อสู้กับโรคขาดสารอาหารไหม มันยั่งยืนกว่าเนื้อวัว 10 เท่า แต่พ่อแม่บอกว่านี่คือการ "ทารุณกรรมเด็ก"',
            zh: '🦗 昆虫蛋白推行：作为联合国粮食计划署的首席生物学家，你必须决定是否在学校午餐中强制推行昆虫蛋白，以打击营养不良。它比牛肉的可持续性高 10 倍，但家长们称之为“虐待儿童”。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🦗 Mandate It', th: '🦗 กำหนดเป็นข้อบังคับ', zh: '强制执行' },
                consequence: { en: '🥗 Health Win, PR Failure. Malnutrition drops drastically, but your name becomes a slur on social media. You are eventually fired due to political pressure, but the kids grew up strong.', th: '🥗 สุขภาพชนะ แต่ PR พัง! โรคขาดสารอาหารลดฮวบ แต่ชื่อคุณกลายเป็นคำด่าในโซเชียล สุดท้ายคุณโดนไล่ออกเพราะแรงกดดันทางการเมือง แต่เด็กๆ เติบโตมาอย่างแข็งแรง', zh: '🥗 健康获胜，公关失败。营养不良率大幅下降，但你的名字成了社交媒体上的污言秽语。由于政治压力，你最终被解雇，但孩子们长得更壮实。' },
                stats: { competence: 50, ethics: 40, leadership: 60, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🐜 Voluntary Opt-In', th: '🐜 ให้เลือกแบบสมัครใจ', zh: '自愿加入' },
                consequence: { en: '📉 Stagnation. Only 5% of schools adopt it. Malnutrition persists. You avoided the controversy, but you didn\'t solve the crisis. A safe, ineffective bureaucratic choice.', th: '📉 ความหยุดนิ่ง! มีแค่ 5% ของโรงเรียนที่ยอมทำตาม โรคขาดสารอาหารยังคงอยู่ คุณเลี่ยงดราม่าได้แต่แก้ปัญหาไม่ได้ เป็นทางเลือกแบบราชการที่ปลอดภัยแต่ไร้ผล', zh: '📉 停滞不前。只有 5% 的学校采用了。营养不良依然存在。你避免了争议，但没有解决危机。这是一个安全但无效的官僚选择。' },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'bi_027',
        text: {
            en: '🐢 The Longevity Turtle: You find a gene in a rare Galapagos turtle that allows it to live 400 years without cancer. You can transfer this to humans. However, the procedure requires harvesting some cells from the last three living turtles of this sub-species, which might kill them.',
            th: '🐢 เต่าอายุยืน: คุณพบยีนในเต่ากาลาปากอสหายากที่ทำให้มันมีอายุได้ 400 ปีโดยไม่เป็นมะเร็ง คุณสามารถถ่ายโอนสิ่งนี้ให้มนุษย์ได้ แต่กระบวนการนี้ต้องเก็บเซลล์จากเต่า 3 ตัวสุดท้ายของสายพันธุ์นี้ ซึ่งอาจทำให้พวกมันตาย',
            zh: '🐢 长寿龟：你在一种罕见的加拉帕戈斯象龟体内发现了一种基因，使其能活400年而不患癌症。你可以将这种基因转移到人类身上。然而，该过程需要从这种亚种仅存的三只海龟身上提取一些细胞，这可能会导致它们死亡。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🧬 Harvest for Humanity', th: '🧬 เก็บเซลล์เพื่อมนุษยชาติ', zh: '为人类采集' },
                consequence: { en: '💀 Species Lost, Lives Extended. The turtles die. You are condemned as an eco-criminal. However, your treatment cures cancer in millions. You are the most hated savior in history.', th: '💀 เสียสายพันธุ์ แต่ยืดชีวิตคน! เต่าพวกนั้นตาย คุณถูกตราหน้าว่าเป็นอาชญากรสิ่งแวดล้อม แต่ยามหาศาลของคุณรักษามะเร็งได้ในคนนับล้าน คุณคือผู้ช่วยที่ถูกเกลียดที่สุดในประวัติศาสตร์', zh: '💀 物种灭绝，生命延长。海龟死了。你被谴责为生态罪犯。然而，你的治疗方法治愈了数百万人的癌症。你是历史上最受憎恨的救世主。' },
                stats: { competence: 50, ethics: -50, leadership: 30, innovation: 80 }
            },
            {
                id: 'B',
                text: { en: '🐢 Protect the Turtles', th: '🐢 ปกป้องเต่า', zh: '保护海龟' },
                consequence: { en: '✅ Ethical Purity. The sub-species survives. You look for synthetic ways to replicate the gene. It takes 30 years. You didn\'t sacrifice the turtles, but millions died of cancer in the meantime.', th: '✅ ความบริสุทธิ์ทางจริยธรรม! สายพันธุ์นั้นรอด คุณหาวิธีสังเคราะห์ยีนทดแทน ซึ่งใช้เวลา 30 ปี คุณไม่สละชีวิตเต่า แต่ในระหว่างนั้นคนนับล้านตายด้วยมะเร็ง', zh: '✅ 伦理纯洁。亚种幸存了下来。你寻找合成方法来复制该基因。这花了 30 年时间。你没有牺牲海龟，但在那期间数万人死于癌症。' },
                stats: { competence: 40, ethics: 80, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'bi_028',
        text: {
            en: '😴 Human Hibernation: For a Mars mission, you develop a biological "trigger" that puts humans into a deep 6-month sleep. It works, but it has a 2% chance of erasing long-term memories. The astronauts are willing to risk it. Do you approve?',
            th: '😴 การจำศีลในมนุษย์: สำหรับภารกิจดาวอังคาร คุณพัฒนา "ไกชีวภาพ" ที่ทำให้มนุษย์หลับลึกได้ 6 เดือน มันได้ผล แต่มีโอกาส 2% ที่จะลบความทรงจำระยะยาว นักบินอวกาศยอมรับความเสี่ยง คุณจะอนุมัติไหม',
            zh: '😴 人类冬眠：为了火星任务，你开发了一种生物“开关”，能让人类进入长达6个月的深睡眠。它有效，但有2%的几率抹除长期记忆。航天员们愿意冒险。你批准吗？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🚀 Approve the Trigger', th: '🚀 อนุมัติไกจำศีล', zh: '批准开关' },
                consequence: { en: '🌌 Star Voyager. The mission is a success. They arrive on Mars rested. One astronaut forgets their childhood, but they are now on another planet. You enabled the conquest of space.', th: '🌌 นักท่องดวงดาว! ภารกิจสำเร็จ พวกเขาไปถึงดาวอังคารพร้อมร่างกายที่พักผ่อนเต็มที่ นักบินหนึ่งคนลืมเรื่องราววัยเด็ก แต่ตอนนี้พวกเขาอยู่บนดาวอื่นแล้ว คุณช่วยให้การพิชิตอวกาศเป็นจริง', zh: '🌌 星际航行。任务圆满成功。他们在休息充分后抵达火星。一名航天员忘记了童年，但他们现在身处另一颗星球。你开启了太空征服之路。' },
                stats: { competence: 50, ethics: 20, leadership: 50, innovation: 90 }
            },
            {
                id: 'B',
                text: { en: '🛑 Safety First', th: '🛑 ความปลอดภัยต้องมาก่อน', zh: '安全第一' },
                consequence: { en: '🐢 The Slog. The mission uses a massive centrifuge instead. It costs 5x as much and is 3 years late. You protected their minds, but the space program is nearly bankrupt.', th: '🐢 งานหิน! ภารกิจต้องใช้เครื่องเหวี่ยงยักษ์แทน ซึ่งแพงกว่า 5 เท่าและช้าไป 3 ปี คุณปกป้องจิตใจเขาไว้ได้ แต่โครงการอวกาศเกือบถังแตก', zh: '🐢 进展缓慢。任务改用巨大的离心机。成本高出 5 倍，且推迟了 3 年。你保护了他们的思维，但航天计划几乎破产。' },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 }
            }
        ]
    },
    {
        id: 'bi_029',
        text: {
            en: '🌳 The Carbon-Gulping Tree: You genetically engineer a willow tree that absorbs 10x the carbon of a normal tree. However, it is invasive and will kill all local flowers and shrubs if it escapes into the wild. One escape already happened in your lab garden.',
            th: '🌳 ต้นไม้สูบคาร์บอน: คุณตัดต่อพันธุกรรมต้นวิลโลว์ที่ดูดซับคาร์บอนได้มากกว่าปกติ 10 เท่า แต่มันเป็นพืชรุกรานและจะฆ่าดอกไม้และพุ่มไม้ท้องถิ่นทั้งหมดถ้ามันหลุดเข้าป่า และมันเพิ่งหลุดจากสวนแล็บคุณไปต้นหนึ่งแล้ว!',
            zh: '🌳 吞碳树：你基因工程改造了一种柳树，它吸收的碳是普通树木的 10 倍。然而，它具有入侵性，如果逸出到野外，会杀死所有当地的花卉和灌木。你的实验室花园里已经发生了一起逸出事故。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🔥 Burn the Lab Garden', th: '🔥 เผาสวนแล็บทิ้ง', zh: '焚毁实验室花园' },
                consequence: { en: '🛡️ Containment. You stop the invasion. You lose years of work and face an investigation, but you saved the local ecosystem from a bio-disaster. You were responsible but lost your research lead.', th: '🛡️ ควบคุมสถานการณ์! คุณหยุดการรุกรานได้ คุณเสียงานที่ทำมาหลายปีและโดนสอบสวน แต่คุณช่วยระบบนิเวศท้องถิ่นจากหายนะชีวภาพ คุณมีความรับผิดชอบแต่เสียตำแหน่งผู้นำวิจัย', zh: '🛡️ 遏制。你阻止了入侵。你损失了多年的工作，并面临调查，但你拯救了当地生态系统免于一场生物灾难。你负起了责任，但失去了研究领先地位。' },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: { en: '🔍 Hide & Study', th: '🔍 ซ่อนและศึกษาต่อ', zh: '隐藏并研究' },
                consequence: { en: '⚠️ Ecological Collapse. You pretend nothing happened to keep your project. A year later, the "Gulping Willow" has taken over the county. Bird and bee populations vanish. You solved one crisis by creating a bigger one.', th: '⚠️ นิเวศล่มสลาย! คุณทำเป็นไม่มีอะไรเกิดเพื่อรักษาโปรเจกต์ ปีต่อมา "วิลโลว์หน้าเลือด" กระจายไปทั่วเขต นกและผึ้งหายไปหมด คุณแก้ปัญหาหนึ่งโดยการสร้างปัญหาที่ใหญ่กว่า', zh: '⚠️ 生态崩溃。你假装什么也没发生以保留你的项目。一年后，“吞碳柳”接管了该县。鸟类和蜜蜂种群消失了。你通过制造一个更大的危机来解决了一个危机。' },
                stats: { competence: 30, ethics: -50, leadership: 10, innovation: 60 }
            }
        ]
    },
    {
        id: 'bi_030',
        text: {
            en: '🐠 The Designer Coral: You have 3D-printed coral skeletons coated in a customized algae that survives boiling water. It could save the Great Barrier Reef. However, it isn\'t "natural" and traditionalists say we should let the reef die with dignity rather than become a "plastic theme park."',
            th: '🐠 ปะการังสั่งทำ: คุณใช้ 3D-print สร้างโครงปะการังที่เคลือบด้วยสาหร่ายปรับแต่งที่ทนน้ำเดือดได้ มันอาจช่วยเกรตแบร์ริเออร์รีฟได้ แต่มันไม่ "ธรรมชาติ" และพวกหัวรั้นบอกว่าควรให้แนวปะการังตายอย่างมีศักดิ์ศรีดีกว่ากลายเป็น "สวนสนุกพลาสติก"',
            zh: '🐠 设计师珊瑚：你 3D 打印了珊瑚骨架，上面涂有定制的海藻，可以在沸水中存活。它可以拯救大堡礁。然而，它不是“自然”的，传统主义者说我们应该让珊瑚礁带着尊严死去，而不是变成“塑料主题公园”。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🏗️ Deploy the Artificial Reef', th: '🏗️ ติดตั้งแนวปะการังเทียม', zh: '部署人工鱼礁' },
                consequence: { en: '🌊 Ocean of Hope. The fish return! The "Boiler Coral" thrives despite record heatwaves. Tourism survives. You are praised as a realist who saved the seas with tech.', th: '🌊 มหาสมุทรแห่งความหวัง! ปลาเริ่มกลับมา "ปะการังน้ำเดือด" เติบโตได้แม้คลื่นความร้อนจะหนัก การท่องเที่ยวอยู่รอด คุณได้รับคำชมว่าเป็นนักปฏิบัติที่ช่วยทะเลด้วยเทคโนโลยี', zh: '🌊 希望之海。鱼群归来！尽管热浪创纪录，“沸水珊瑚”依然茁壮成长。旅游业幸存了下来。你被称为利用技术拯救海洋的现实主义者。' },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 80 }
            },
            {
                id: 'B',
                text: { en: '🛑 Respect Nature\'s End', th: '🛑 เคารพจุดจบของธรรมชาติ', zh: '尊重自然的终结' },
                consequence: { en: '📉 Silent Sea. You withhold the tech. The reef bleaches and turns to white rubble. You are the darling of eco-philosophers, but the ecosystem has fully collapsed on your watch.', th: '📉 ทะเลที่เงียบงัน! คุณเก็บเทคโนโลยีไว้ แนวปะการังฟอกขาวและกลายเป็นซากหินสีขาว คุณเป็นที่รักของเหล่านักปรัชญาสิ่งแวดล้อม แต่ระบบนิเวศล่มสลายคามือคุณ', zh: '📉 寂静之海。你保留了这项技术。珊瑚礁白化并变成了白色的碎石。你是生态哲学家的宠儿，但生态系统在你值守期间完全崩溃了。' },
                stats: { competence: 30, ethics: 50, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'bi_031',
        text: {
            en: '🧠 The Bio-Linker: Your lab develops a synthetic protein that allows human neurons to connect directly to silicon chips. It could cure paralysis forever. But the military offers you $50M to use it for "Neural-Link Soldiers." This funding would secure your lab for decades.',
            th: '🧠 ตัวเชื่อมชีวภาพ: แล็บคุณพัฒนาโปรตีนสังเคราะห์ที่ช่วยให้เซลล์ประสาทมนุษย์เชื่อมกับชิปซิลิคอนได้โดยตรง มันอาจรักษาอัมพาตได้ถาวร แต่กองทัพเสนอเงิน 50 ล้านดอลลาร์เพื่อใช้มันสร้าง "ทหารเชื่อมประสาท" เงินทุนนี้จะช่วยให้แล็บคุณอยู่รอดได้อีกหลายทศวรรษ',
            zh: '🧠 生物连接器：你的实验室开发出一种合成蛋白质，能让人类神经元直接与硅芯片连接。它可以永远治愈瘫痪。但军方提供 5000 万美元，将其用于“神经连接士兵”。这笔资金将确保你的实验室几十年无忧。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🏥 Strictly Medical', th: '🏥 เพื่อการแพทย์เท่านั้น', zh: '严格医疗用途' },
                consequence: { en: '🛡️ Moral Fortress. You reject the military. Your lab struggles for funding, but when the first paralyzed child walks using your tech, the public crowdfunding makes you richer than the military ever would. Integrity wins.', th: '🛡️ ป้อมปราการศีลธรรม! คุณปฏิเสธกองทัพ แล็บคุณเกือบอดตาย แต่เมื่อเด็กที่เป็นอัมพาตคนแรกเดินได้ด้วยเทคโนโลยีคุณ การระดมทุนจากมวลชนทำให้คุณรวยกว่าที่กองทัพจะให้เสียอีก ความซื่อสัตย์ชนะเสมอ', zh: '🛡️ 道德堡垒。你拒绝了军方。你的实验室为资金而挣扎，但当第一个瘫痪的孩子利用你的技术行走时，大众众筹让你比军方能给的更有钱。正直获得了胜利。' },
                stats: { competence: 50, ethics: 90, leadership: 60, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '⚔️ Take the Military Deal', th: '⚔️ รับข้อเสนอกองทัพ', zh: '接受军方交易' },
                consequence: { en: '💀 Specialized Warfare. Your tech creates the first "Cyborg Infantry." You have unlimited budget, but every time you see a veteran on the news with "Neural Trauma," you know you caused it. You are rich, but haunted.', th: '💀 สงครามเฉพาะทาง! เทคโนโลยีคุณสร้าง "ทหารไซบอร์ก" รุ่นแรก คุณมีงบไม่อั้น แต่ทุกครั้งที่เห็นข่าวทหารผ่านศึกที่มี "บาดแผลทางประสาท" คุณรู้ดีว่าคุณคือต้นเหตุ คุณรวยแต่ถูกหลอกหลอน', zh: '💀 专门化战争。你的技术创造了第一支“赛博格步兵”。你拥有无限的预算，但每当你看到新闻中患有“神经创伤”的退伍军人时，你知道是你造成的。你很有钱，但心神不宁。' },
                stats: { competence: 60, ethics: -60, leadership: 50, innovation: 90 }
            }
        ]
    },
    {
        id: 'bi_032',
        text: {
            en: '🌱 The Pollen-Free Earth: You develop a "sterility gene" for grasses that prevents them from producing pollen. It could end hay fever and allergies for 1 billion people. However, certain wild bees rely on that specific pollen for early spring protein. Wiping out the pollen might kill the bees.',
            th: '🌱 โลกไร้ละอองเกสร: คุณพัฒนายีน "ทำหมัน" ให้หญ้าเพื่อไม่ให้มันผลิตละอองเกสร มันอาจยุติโรคแพ้ละอองเกสรในคน 1 พันล้านคน แต่ผึ้งป่าบางชนิดต้องพึ่งพาละอองเกสรนั้นเป็นโปรตีนในช่วงต้นฤดูใบไม้ผลิ การกวาดล้างละอองเกสรอาจทำให้ผึ้งตาย',
            zh: '🌱 无花粉地球：你开发出一种草类“不育基因”，阻止其产生花粉。它可以终结全球 10 亿人的花粉热和过敏。然而，某些野生蜜蜂依靠这种特定的花粉获取早春蛋白质。抹除花粉可能会导致蜜蜂死亡。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤧 Help the People', th: '🤧 ช่วยมวลชน', zh: '帮助人民' },
                consequence: { en: '🏡 Allergy-Free Suburbs. Real estate prices in hay-fever zones skyrocket. You are the hero of suburban parents. However, 3 bee species go extinct locally. The birds that eat them also decline. You traded local bio-complexity for comfort.', th: '🏡 หมู่บ้านไร้ละอองเกสร! ราคาอสังหาฯ ในโซนที่เคยมีละอองเกสรพุ่งพรวด คุณคือฮีโร่ของเหล่าพ่อแม่ในเมือง แต่ผึ้ง 3 ชนิดสูญพันธุ์ในพื้นที่ นกที่กินผึ้งก็ลดลง คุณแลกความซับซ้อนทางชีวภาพกับความสบาย', zh: '🏡 无过敏郊区。花粉热区域的房价飙升。你是郊区家长心目中的英雄。然而，当地有 3 种蜜蜂灭绝了。捕食这些蜜蜂的鸟类数量也随之下降。你为了舒适而牺牲了当地的生物复杂性。' },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: { en: '🐝 Save the Bees', th: '🐝 ช่วยผึ้ง', zh: '救救蜜蜂' },
                consequence: { en: '🛡️ Natural Balance. You cancel the project. People keep sneezing, but the bees thrive. You are praised by ecologists as someone who understood that "annoyance" is the price of a living world.', th: '🛡️ สมดุลธรรมชาติ! คุณยกเลิกโปรเจกต์ คนยังคงจามต่อไปแต่ผึ้งรุ่งเรือง คุณได้รับการยกย่องจากนักนิเวศวิทยาว่าเป็นคนที่เข้าใจว่า "ความรำคาญ" คือราคาที่ต้องจ่ายเพื่อให้โลกมีชีวิต', zh: '🛡️ 自然平衡。你取消了该项目。人们继续打喷嚏，但蜜蜂茁壮成长。生态学家称赞你，因为你明白“烦恼”是活生生的世界所必须付出的代价。' },
                stats: { competence: 40, ethics: 70, leadership: 40, innovation: 10 }
            }
        ]
    },
    {
        id: 'bi_033',
        text: {
            en: '🐋 The Whale Singer: You develop a translation AI for Humpback whale songs. You realize they are warning each other about specific shipping lanes. One shipping company offers to buy the tech to "bypass" the whales (avoiding delays), but environmentalists want to use it to shut down the lanes entirely.',
            th: '🐋 นักแปลภาษาปลาวาฬ: คุณพัฒนา AI แปลเพลงของวาฬหลังค่อม คุณพบว่าพวกมันกำลังเตือนกันเรื่องเส้นทางเดินเรือบางเส้น บริษัทเดินเรือเสนอซื้อเทคโนโลยีเพื่อ "เลี่ยง" วาฬ (เพื่อไม่ให้เสียเวลา) แต่นักสิ่งแวดล้อมต้องการใช้มันเพื่อปิดเส้นทางเดินเรือนั้นไปเลย',
            zh: '🐋 鲸鱼歌者：你开发了一种座头鲸之歌的翻译 AI。你意识到它们正在互相警告特定的航道。一家航运公司提出购买这项技术以“绕过”鲸鱼（避免延误），但环保主义者想利用它彻底关闭这些航道。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🛥️ Sell to Shipping Co.', th: '🛥️ ขายให้บริษัทเดินเรือ', zh: '卖给航运公司' },
                consequence: { en: '💰 Pragmatic Safe-Passage. The company avoids whale strikes. No more dead whales. Efficiency rises. Environmentalists call you a sell-out because ships are still in the water, but the whales are actually safer.', th: '💰 ทางผ่านที่ปลอดภัยและปฏิบัติได้จริง! บริษัทไม่ชนวาฬอีกต่อไป ไม่มีวาฬตายเพิ่ม ประสิทธิภาพสูงขึ้น นักสิ่งแวดล้อมด่าคุณว่าเห็นแก่เงินเพราะเรือยังอยู่ในน้ำ แต่เอาเข้าจริงวาฬปลอดภัยขึ้น', zh: '💰 务实的安全通过。公司避免了撞击鲸鱼。不再有鲸鱼死亡。效率提高。环保主义者称你为背叛者，因为船依然在水里，但鲸鱼实际上更安全了。' },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: { en: '📢 Public Data Leak', th: '📢 ปล่อยข้อมูลสู่สาธารณะ', zh: '公开数据泄露' },
                consequence: { en: '⚖️ Legal Battle. The data causes a global outcry. 3 shipping lanes are closed. Global supply chains slow down, raising prices for everyone. You are a hero to the oceans, but a villain to the global economy.', th: '⚖️ คดีความระอุ! ข้อมูลทำให้คนทั้งโลกโกรธแค้น เส้นทางเดินเรือ 3 แห่งโดนปิด ซัพพลายเชนโลกช้าลง ของแพงขึ้นทั้งโลก คุณคือฮีโร่แห่งมหาสมุทรแต่วายร้ายเศรษฐกิจโลก', zh: '⚖️ 法律斗争。数据引起了全球公愤。3 条航道被关闭。全球供应链放缓，导致物价上涨。你是海洋的英雄，却是全球经济的恶徒。' },
                stats: { competence: 40, ethics: 80, leadership: 60, innovation: 40 }
            }
        ]
    },
    {
        id: 'bi_034',
        text: {
            en: '🌡️ The Arctic Algae: You discover a prehistoric algae melting out of the permafrost that converts heat into oxygen. It could stop global warming instantly. But it also produces a purple gas that makes the sky look permanent lavender. Is a purple sky worth a cool planet?',
            th: '🌡️ สาหร่ายอาร์กติก: คุณพบสาหร่ายยุคก่อนประวัติศาสตร์ที่ละลายออกมาจากน้ำแข็งขั้วโลก ซึ่งเปลี่ยนความร้อนเป็นออกซิเจน มันอาจหยุดโลกร้อนได้ทันที แต่มันผลิตก๊าซสีม่วงที่ทำให้ท้องฟ้ากลายเป็นสีลาเวนเดอร์ถาวร ท้องฟ้าสีม่วงคุ้มกับโลกที่เย็นลงไหม?',
            zh: '🌡️ 北极海藻：你发现了一种从永久冻土中融化出来的史前海藻，它能将热量转化为氧气。它可以立即停止全球变暖。但它也会产生一种紫色的气体，使天空看起来呈永久的淡紫色。紫色的天空值得换取一颗凉爽的星球吗？'
        },
        options: [
            {
                id: 'A',
                text: { en: '💜 Release the Algae', th: '💜 ปล่อยสาหร่าย', zh: '释放海藻' },
                consequence: { en: '🌎 The Purple Era. Global temperatures drop to 1950 levels within a year. The ice caps return. The world is beautiful but alien. You saved life on Earth by changing its very appearance forever.', th: '🌎 ยุคสีม่วง! อุณหภูมิโลกลดลงเท่าระดับปี 1950 ในปีเดียว น้ำแข็งขั้วโลกกลับมา โลกสวยงามแต่ดูแปลกตา คุณช่วยชีวิตบนโลกโดยการเปลี่ยนหน้าตามันไปตลอดกาล', zh: '🌎 紫色时代。全球气温在一年内降至 1950 年的水平。冰盖回归。世界很美但很陌生。你通过永远改变地球的外观拯救了地球上的生命。' },
                stats: { competence: 60, ethics: 40, leadership: 60, innovation: 100 }
            },
            {
                id: 'B',
                text: { en: '🛑 Keep it Contained', th: '🛑 ควบคุมไว้ในวงจำกัด', zh: '保持遏制' },
                consequence: { en: '🔥 The Slow Burn. You decide humans aren\'t ready for a purple sky. You try to engineer the color out. It takes 20 years. By then, the Amazon is gone. You were too cautious with aesthetics while the world burned.', th: '🔥 การเผาไหม้ที่ช้าลง! คุณตัดสินใจว่ามนุษย์ยังไม่พร้อมกับท้องฟ้าสีม่วง คุณพยายามตัดต่อเปลี่ยนสีมันทิ้ง ซึ่งใช้เวลา 20 ปี ถึงตอนนั้นอเมซอนก็มอดไหม้ไปหมดแล้ว คุณมัวแต่ระแวงเรื่องความงามในขณะที่โลกกำลังมอดไหม้', zh: '缓慢燃烧。你决定人类还没准备好迎接紫色的天空。你试图通过工程手段去除颜色。这花了 20 年。到那时，亚马逊河已经消失了。你在世界燃烧时对美学过于谨慎。' },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'bi_035',
        text: {
            en: '🐭 The Synthetic Rodent: Using bioluminescence genes from jellyfish, you create a glowing "safety rat" that detects landmines and glows bright red. They are 100% effective. However, they breed fast and might replace local mouse populations, disrupting the food chain for local owls.',
            th: '🐭 หนูสังเคราะห์: ใช้ยีนเรืองแสงจากแมงกะพรุน คุณสร้าง "หนูปลอดภัย" ที่ตรวจจับทุ่นระเบิดและจะเรืองแสงสีแดงเข้มเพื่อบอกตำแหน่ง มันมีประสิทธิภาพ 100% แต่พวกมันแพร่พันธุ์เร็วและอาจแทนที่ประชากรหนูท้องถิ่น ทำลายวงจรอาหารของนกฮูกในพื้นที่',
            zh: '🐭 合成啮齿动物：利用水母的生物发光基因，你创造出一种发光的“安全鼠”，它可以探测地雷并发出亮红色的光。它们 100% 有效。然而，它们繁殖很快，可能会取代当地的非发光老鼠种群，破坏当地猫头鹰的食物链。'
        },
        options: [
            {
                id: 'A',
                text: { en: '💣 Deploy and Save Lives', th: '💣 ติดตั้งและช่วยชีวิตคน', zh: '部署并挽救生命' },
                consequence: { en: '✅ Mine-Free Fields. Thousands of farmers walk safely. Landmines are gone in a year. The "Neon Rat" becomes the dominant species. Owls adapt by eating the glowing mice easily. You traded ecology for human safety.', th: '✅ ทุ่งไร้ระเบิด! เกษตรกรนับพันเดินได้อย่างปลอดภัย ทุ่นระเบิดหมดไปในปีเดียว "หนูเรืองแสง" กลายเป็นสิ่งมีชีวิตหลัก นกฮูกปรับตัวโดยการล่าหนูที่เรืองแสงได้ง่ายขึ้น คุณแลกนิเวศวิทยากับความปลอดภัยของมนุษย์', zh: '✅ 无雷区。数以千计的农民安全行走。地雷在一年内消失了。“霓虹鼠”成为主导物种。猫头鹰通过轻松捕食发光的老鼠来适应环境。你为了人类安全而牺牲了生态。' },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 80 }
            },
            {
                id: 'B',
                text: { en: '🛡️ Local Trials Only', th: '🛡️ ทดลองในพื้นที่จำกัด', zh: '仅限局部试验' },
                consequence: { en: '🐢 Progress Slump. You limit them to enclosed fields. It takes 10 years to "de-mine" through traditional means. More people lose limbs, but the owl population is stable. You preferred the natural order over rapid safety.', th: '🐢 ความก้าวหน้าที่หยุดชะงัก! คุณจำกัดพวกมันไว้ในที่ปิด ต้องใช้เวลา 10 ปีเพื่อกวาดล้างระเบิดด้วยวิธีดั้งเดิม คนเสียขามากขึ้น แต่นกฮูกยังอยู่ดี คุณเลือกกฎธรรมชาติมากกว่าความปลอดภัยที่รวดเร็ว', zh: '🐢 进展受挫。你将它们限制在封闭的田野中。通过传统方式“清雷”需要 10 年。更多的人失去了肢体，但猫头鹰种群是稳定的。你更喜欢自然秩序而非快速的安全。' },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: 30 }
            }
        ]
    },
    {
        id: 'bi_036',
        text: {
            en: '🧠 The Wisdom Microbe: You find a bacterium in an ancient cave that increases synaptic plasticity (learning speed) by 500%. You can turn it into a probiotic yogurt. However, it only works if taken before age 10. Do we create a "super-generation" of kids, or is that unfair to current adults?',
            th: '🧠 จุลชีพแห่งพัญญา: คุณพบแบคทีเรียในถ้ำเก่าแก่ที่ช่วยเพิ่มความสามารถในการเรียนรู้ (การยืดหยุ่นของไซแนปส์) ถึง 500% คุณสามารถทำมันเป็นโยเกิร์ตโพรไบโอติกได้ แต่มันจะได้ผลเฉพาะในเด็กอายุก่อน 10 ขวบเท่านั้น เราควรสร้าง "ยอดมนุษย์รุ่นใหม่" ไหม หรือมันจะดูไม่แฟร์กับผู้ใหญ่อย่างเรา',
            zh: '🧠 智慧微生物：你在一个古老的洞穴中发现了一种细菌，可以将突触可塑性（学习速度）提高 500%。你可以将其制成益生菌酸奶。然而，它仅在 10 岁以前服用有效。我们要创造“超一代”的孩子吗？还是这对现在的成年人来说不公平？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🥛 Release to the Public', th: '🥛 ปล่อยสู่สาธารณะ', zh: '向公众发布' },
                consequence: { en: '🚀 The Intelligence Explosion. 15 years later, teenagers are out-thinking Nobel prize winners. The generation gap becomes a canyon. Society changes so fast that old laws collapse. You birthed a new era of humanity.', th: '🚀 ปัญญาประดิษฐ์จากธรรมชาติระเบิด! 15 ปีต่อมา เหล่าวัยรุ่นคิดเก่งกว่าผู้ชนะรางวัลโนเบล ช่องว่างระหว่างวัยกลายเป็นหุบเหว สังคมเปลี่ยนไวมากจนกฎหมายเก่าล่มสลาย คุณให้กำเนิดยุคใหม่ของมนุษยชาติ', zh: '🚀 智能大爆发。15 年后，青少年的思维已经超越了诺贝尔奖获得者。代沟变成了天堑。社会变化如此之快，以至于旧法律崩溃了。你孕育了人类的一个新时代。' },
                stats: { competence: 60, ethics: 20, leadership: 40, innovation: 100 }
            },
            {
                id: 'B',
                text: { en: '🔒 Keep it Secret', th: '🔒 เก็บเป็นความลับ', zh: '保守秘密' },
                consequence: { en: '🛡️ Social Stability. You preserve the status quo. Humans remain "normal" speed learners. You avoided the chaos of a super-intellectual generation, but you held back the species. Was it fear or wisdom? Only time will tell.', th: '🛡️ เสถียรภาพทางสังคม! คุณรักษาภาพเดิมไว้ มนุษย์ยังคงเป็นผู้เรียนรู้ความเร็ว "ปกติ" คุณเลี่ยงความวุ่นวายของรุ่นยอดมนุษย์ได้ แต่คุณก็รั้งเผ่าพันธุ์ไว้ด้วย มันคือความกลัวหรือความปรีชา? เวลาเท่านั้นที่จะบอก', zh: '🛡️ 社会稳定。你维持了现状。人类保持“正常”的学习速度。你避免了超级智力一代带来的混乱，但你阻碍了物种的进步。是恐惧还是智慧？只有时间能证明。' },
                stats: { competence: 40, ethics: 60, leadership: 50, innovation: 10 }
            }
        ]
    },
    {
        id: 'bi_037',
        text: {
            en: '🌳 The Web of Life: You develop a bio-interface that allows humans to "feel" the health of local forests through a haptic suit. People stop littering because they feel the "pain" of the trees. However, the intensity of feeling the forest "dying" during a forest fire is causing severe mental trauma in users.',
            th: '🌳 ใยแมงมุมแห่งชีวิต: คุณพัฒนาอินเทอร์เฟซชีวภาพที่ช่วยให้คน "รู้สึก" ถึงสุขภาพของป่าในพื้นที่ผ่านชุดสัมผัส คนเลิกทิ้งขยะเพราะเขารู้สึกถึง "ความเจ็บปวด" ของต้นไม้ แต่ความรุนแรงของความรู้สึกตอนเห็นป่า "กำลังตาย" ในกองไฟทำให้ผู้ใช้เกิดบาดแผลทางจิตใจอย่างรุนแรง',
            zh: '🌳 生命网络：你开发了一种生物界面，通过触觉套件让人类能够“感受”当地森林的健康状况。人们停止乱丢垃圾，因为他们能感受到树木的“痛苦”。然而，在森林火灾期间感受森林“死亡”的强烈程度会导致用户严重的心理创伤。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🌍 Expand the Network', th: '🌍 ขยายเครือข่าย', zh: '扩大网络' },
                consequence: { en: '🌳 Total Eco-Empathy. Global conservation surges as everyone "feels" the planet. Environmental laws become redundant. People are traumatized but fiercely protective. You created a symbiotic soul between man and earth.', th: '🌳 ความเป็นหนึ่งเดียวกับธรรมชาติ! การอนุรักษ์พุ่งสูงเพราะทุกคน "รู้สึก" ถึงโลก กฎหมายสิ่งแวดล้อมกลายเป็นเรื่องฟุ่มเฟือย คนมีแผลใจแต่ก็หวงแหนป่าสุดชีวิต คุณสร้างจิตวิญญาณที่เป็นน้ำหนึ่งใจเดียวกันระหว่างมนุษย์และโลก', zh: '🌳 全面的生态同感。由于每个人都能“感受到”地球，全球保护浪潮激增。环境法律变得多余。人们虽然遭受创伤，但却极力保护地球。你创造了人与地球之间的共生灵魂。' },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 90 }
            },
            {
                id: 'B',
                text: { en: '🚫 Distant & Dampen', th: '🚫 เว้นระยะและลดความรู้สึก', zh: '拉开距离并减弱感受' },
                consequence: { en: '📉 Intellectual Care. You turn the "pain" into "data charts." Engagement drops by 80%. People go back to ignoring the environment. You saved their mental health but lost the emotional connection to nature.', th: '📉 การดูแลแบบแห้งแล้ง! คุณเปลี่ยน "ความเจ็บปวด" ให้เป็น "แผนภูมิข้อมูล" การมีส่วนร่วมลดลง 80% คนกลับไปเมินปัญหาธรรมชาติเหมือนเดิม คุณช่วยรักษาสุขภาพจิตของเขาได้แต่เสียการเชื่อมต่อทางอารมณ์กับธรรมชาติไป', zh: '📉 理智的关怀。你将“痛苦”转化为“数据图表”。参与度下降了 80%。人们又回到了忽视环境的状态。你挽救了他们的心理健康，但失去了与自然的这种感性连接。' },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 40 }
            }
        ]
    },
    {
        id: 'bi_038',
        text: {
            en: '🧫 The Plastic-Eaters: You engineer a bacteria that eats plastic and turns it into harmless water. You want to release it into the Great Pacific Garbage Patch. But oceanographers warn it might also eat the plastic coating on vital undersea internet cables.',
            th: '🧫 แบคทีเรียกินพลาสติก: คุณตัดต่อแบคทีเรียที่กินพลาสติกและเปลี่ยนมันให้เป็นน้ำสะอาด คุณอยากปล่อยมันในแพขยะขนาดใหญ่ในมหาสมุทรแปซิฟิก แต่นักสมุทรศาสตร์เตือนว่ามันอาจจะกินฉนวนพลาสติกของสายเคเบิลอินเทอร์เน็ตใต้ทะเลที่สำคัญด้วย',
            zh: '🧫 食塑者：你工程化改造了一种细菌，它以塑料为食并将其转化为无害的水。你想要将其释放到大太平洋垃圾带。但海洋学家警告说，它也可能会吃掉至关重要的海底互联网电缆上的塑料涂层。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🌊 Release and Clean', th: '🌊 ปล่อยและชำระล้าง', zh: '释放并清理' },
                consequence: { en: '🧹 Crystal Clear. The ocean plastics vanish in 5 years. Fish populations boom. However, global internet reliability drops 30% as cables fail. You fixed the ocean but crippled the digital world. A brutal trade-off.', th: '🧹 ใสกระจ่าง! ขยะพลาสติกในทะเลหายไปในปีเดียว ประชากรปลาพุ่งพรวด แต่ความเสถียรของอินเทอร์เน็ตโลกลดลง 30% เพราะสายเคเบิลพัง คุณซ่อมทะเลได้แต่ทำโลกดิจิทัลพิการ เป็นการแลกเปลี่ยนที่โหดร้าย', zh: '🧹 晶莹剔透。海洋塑料在5年内消失了。鱼群数量激增。然而，由于电缆失效，全球互联网可靠性下降了30%。你修好了海洋，却瘫痪了数字世界。一个残酷的权衡。' },
                stats: { competence: 60, ethics: 30, leadership: 40, innovation: 90 }
            },
            {
                id: 'B',
                text: { en: '🔬 Perfect the Spec', th: '🔬 พัฒนาให้จำเพาะเจาะจง', zh: '完善规格' },
                consequence: { en: '🐢 The Slow Road. You spend 15 years trying to make the bacteria ignore "cable plastic." By the time you are ready, the ocean plastic has doubled. You tried to be perfect and let the problem grow out of control.', th: '🐢 ถนนสายช้า! คุณใช้เวลา 15 ปีพยายามทำให้แบคทีเรียเมิน "พลาสติกสายเคเบิล" กว่าจะพร้อม ขยะพลาสติกในทะเลก็เพิ่มขึ้นเท่าตัวแล้ว คุณมัวแต่จะเอาให้สมบูรณ์แบบจนปล่อยให้ปัญหาบานปลายเกินแก้', zh: '🐢 缓慢之路。你花了 15 年的时间尝试让细菌忽略“电缆塑料”。等你准备好时，海洋塑料已经翻了一番。你试图做到完美，却让问题变得失去了控制。' },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'bi_039',
        text: {
            en: '🐘 The Empathy Serum: You develop a pheromone that makes predators (wolves, sharks) view humans with "familial affection." It could end wildlife attacks and allow harmonious rewilding of cities. However, animals under the serum stop hunting effectively and rely on human handouts.',
            th: '🐘 เซรั่มแห่งความเห็นอกเห็นใจ: คุณพัฒนาฟีโรโมนที่ทำให้ผู้ล่า (หมาป่า, ฉลาม) มองมนุษย์ด้วย "ความผูกพันดุจครอบครัว" มันอาจยุติการโจมตีของสัตว์ป่าและช่วยในการคืนธรรมชาติสู่เมืองได้อย่างกลมกลืน แต่สัตว์ที่ได้รับเซรั่มจะเลิกล่าสัตว์อย่างมีประสิทธิภาพและรอรับอาหารจากมนุษย์แทน',
            zh: '🐘 同感血清：你开发出一种信息素，让食肉动物（狼、鲨鱼）以“家人的感情”来看待人类。它可以终结野生动物袭击，并实现城市和谐的重新野化。然而，使用血清后的动物会停止有效捕猎，并依赖人类的施舍。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🐕 Rewild the Cities', th: '🐕 คืนธรรมชาติสู่เมือง', zh: '让城市重新野化' },
                consequence: { en: '🌳 The Garden Era. Lions sleep in suburban parks. No one is ever bitten. Humans and beasts coexist in peace. But the animals become "shadow pets," losing their wild spirit forever. You saved the bodies but killed the wild.', th: '🌳 ยุคอุทยาน! สิงโตนอนในสวนสาธารณะชานเมือง ไม่มีใครถูกกัด มนุษย์และสัตว์อยู่ร่วมกันอย่างสันติ แต่สัตว์ป่ากลายเป็น "สัตว์เลี้ยงเงา" เสียสัญชาตญาณป่าไปตลอดกาล คุณรักษาร่างกายไว้ได้แต่ฆ่าความเป็นป่าทิ้ง', zh: '🌳 花园时代。狮子睡在郊区公园里。再也没有人被咬。人类和野兽和平共处。但这些动物变成了“影子宠物”，永远失去了野性。你拯救了肉体，却扼杀了荒野。' },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 80 }
            },
            {
                id: 'B',
                text: { en: '🚫 Ban the Serum', th: '🚫 แบนเซรั่ม', zh: '禁止血清' },
                consequence: { en: '🛡️ Savage Integrity. You burn the formula. Nature remains red in tooth and claw. Hikers continue to be attacked. You kept the wild "wild," but at a cost in human blood. You are a biological purist.', th: '🛡️ ความสัตย์ซื่อต่อธรรมชาติ! คุณเผาสูตรทิ้ง ธรรมชาติยังคงนองเลือดตามวิถีผู้ล่า นักสู้เดินป่ายังถูกกัดต่อไป คุณรักษาความเป็น "ป่า" ไว้ได้ แต่ต้องแลกด้วยเลือดมนุษย์ คุณคือพวกนักชีววิทยาหัวบริสุทธิ์', zh: '🛡️ 野性的完整。你烧掉了配方。大自然保持着弱肉强食的本色。徒步旅行者继续受到袭击。你保留了野性的“野性”，但付出了人类鲜血的代价。你是一个生物纯粹主义者。' },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 10 }
            }
        ]
    },
    {
        id: 'bi_040',
        text: {
            en: '🧠 The Dream-Recorder: You find a way to extract visual data from the sleeping brains of dogs. You find they are dreaming of memories with their owners. A tech company wants to turn this into a "Pet Reality TV" show. This would fund your research into brain healing for human Alzheimer\'s patients.',
            th: '🧠 เครื่องบันทึกฝัน: คุณหาวิธีสกัดข้อมูลภาพจากสมองของสุนัขที่กำลังหลับได้ คุณพบว่าพวกมันฝันถึงความทรงจำกับเจ้าของ บริษัทเทคโนโลยีอยากทำเป็นรายการ "Pet Reality TV" เงินนี้จะช่วยอุดหนุนงานวิจัยรักษาอัลไซเมอร์ในมนุษย์ของคุณ',
            zh: '🧠 梦境记录仪：你发现了一种从睡觉的狗的大脑中提取视觉数据的方法。你发现它们正在梦见与主人的回忆。一家科技公司想把这变成一个“宠物真人秀”。这将资助你研究阿尔茨海默病患者的大脑康复。'
        },
        options: [
            {
                id: 'A',
                text: { en: '📺 Fund the Alzheimer\'s Cure', th: '📺 หาเงินรักษาสัญญาอัลไซเมอร์', zh: '资助阿尔茨海默病治疗' },
                consequence: { en: '✅ Ethical Trade. Dog-TV becomes a global hit. It\'s invasive and weird, but the funding allows you to cure human memory loss within 10 years. You sacrificed the privacy of dogs to save the minds of human grandmothers.', th: '✅ การแลกเปลี่ยนทางจริยธรรม! รายการทีวีหมากลายเป็นไวรัลทั่วโลก มันดูรุกล้ำและแปลกๆ แต่เงินนี้ทำให้คุณรักษาอัลไซเมอร์ได้ใน 10 ปี คุณยอมละเมิดความเป็นส่วนตัวของหมาเพื่อรักษาจิตใจของคุณยายมนุษย์', zh: '✅ 伦理交易。宠物电视成为了全球热门。虽然这种做法具有入侵性且古怪，但这笔资金让你在 10 年内治愈了人类的记忆力减退。你牺牲了狗的隐私来拯救人类祖母的思想。' },
                stats: { competence: 60, ethics: 40, leadership: 50, innovation: 90 }
            },
            {
                id: 'B',
                text: { en: '🛡️ Protect Animal Privacy', th: '🛡️ ปกป้องความเป็นส่วนตัวของสัตว์', zh: '保护动物隐私' },
                consequence: { en: '🐢 The Noble Wait. You refuse the TV deal. Your research moves at a snail\'s pace. You didn\'t exploit the dogs, but the Alzheimer\'s cure is still 30 years away. You are the saint of animal rights, but human families continue to suffer.', th: '🐢 การรอคอยที่ทรงเกียรติ! คุณปฏิเสธดีลรายการทีวี งานวิจัยคุณเขยื้อนไปเหมือนหอยทาก คุณไม่หากินกับหมา แต่การรักษาสัญญาอัลไซเมอร์ก็ยังอยู่อีกไกลถึง 30 ปี คุณคือเซนต์แห่งสิทธิสัตว์ แต่ครอบครัวมนุษย์ยังต้องทรมานต่อไป', zh: '🐢 高尚的等待。你拒绝了电视协议。你的研究进展极其缓慢。你没有剥削狗，但阿尔茨海默病的治愈方法仍需 30 年。你是动物权利的圣人，但人类家庭仍在受苦。' },
                stats: { competence: 40, ethics: 70, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'bi_041',
        text: {
            en: '🌳 The Seed of Immortality: You find a mutation in a redwood tree that prevents cellular aging entirely. If applied to humans, we could live for 1,000 years. However, Earth is already overpopulated. Do you publish the sequence now, or hide it until we have colonies on Mars?',
            th: '🌳 เมล็ดพันธุ์แห่งอมตะ: คุณพบการกลายพันธุ์ในต้นเรดวูดที่หยุดยั้งการแก่ตัวของเซลล์โดยสิ้นเชิง ถ้าเอามาใช้กับมนุษย์ เราอาจมีอายุได้ถึง 1,000 ปี แต่โลกตอนนี้ประชากรล้นแล้ว คุณจะตีพิมพ์ข้อมูลตอนนี้เลย หรือจะซ่อนไว้จนกว่าเราจะได้ไปอยู่ดาวอังคาร',
            zh: '🌳 永生之种：你在红杉树中发现了一种能完全阻止细胞衰老的突变。如果应用在人类身上，我们可以活 1000 年。然而，地球已经人口过剩了。你是现在发布序列，还是将其隐藏直到我们在火星建立了殖民地？'
        },
        options: [
            {
                id: 'A',
                text: { en: '🔓 Publish Immediately', th: '🔓 ตีพิมพ์ทันที', zh: '立即发布' },
                consequence: { en: '🌋 The Immortality Crisis. Death becomes optional for the elite. The world population reaches 20 billion in 50 years. Resources collapse. You traded finite life for infinite survival, and the math doesn\'t add up.', th: '🌋 วิกฤตอมตะ! ความตายกลายเป็นทางเลือกเฉพาะคนรวย ประชากรโลกพุ่งถึง 2 หมื่นล้านใน 50 ปี ทรัพยากรล่มสลาย คุณแลกชีวิตที่จำกัดกับการอยู่รอดที่ถาวร แต่ตัวเลขมันไม่สมดุล', zh: '🌋 永生危机。死亡成了精英阶层的选项。全球人口在 50 年内达到 200 亿。资源崩溃。你用有限的生命换取了无限的生存，结果入不敷出。' },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 100 }
            },
            {
                id: 'B',
                text: { en: '🔒 Hide for Future Colonies', th: '🔒 ซ่อนไว้เพื่ออาณานิคมในอนาคต', zh: '为未来的殖民地保留' },
                consequence: { en: '🛡️ The Silent Guardian. You bury the findings in a time capsule for Mars settlers. Humans continue to die of old age. You bear the secret like a curse, knowing you could stop death but choosing to save the planet\'s balance.', th: '🛡️ ผู้พิทักษ์ที่เงียบงัน! คุณฝังการค้นพบไว้ในไทม์แคปซูลสำหรับผู้บุกเบิกดาวอังคาร มนุษย์ยังคงตายด้วยความชราต่อไป คุณแบกความลับเหมือนคำสาป โดยรู้ว่าคุณหยุดความตายได้ แต่เลือกที่จะรักษาความสมดุลของโลกไว้', zh: '🛡️ 沉默的守护者。你将发现埋入一个为火星定居者准备的时间胶囊中。人类继续死于衰老。你像背负诅咒一样保守着这个秘密，深知你可以阻止死亡，但选择了维护地球的平衡。' },
                stats: { competence: 40, ethics: 70, leadership: 60, innovation: 50 }
            }
        ]
    },
    {
        id: 'bi_031',
        text: {
            en: '☣️ The Pandemic Warning: You found a virus in a melting glacier that is 10,000 years old. It has a 40% mortality rate in lab mice. The government wants to classify the findings to avoid "public panic" before an election. Do you leak the warning to the WHO or stay quiet?',
            th: '☣️ คำเตือนโรคระบาด: คุณพบไวรัสในธารน้ำแข็งที่กำลังละลายซึ่งมีอายุ 10,000 ปี มันมีอัตราการตาย 40% ในหนูทดลอง รัฐบาลต้องการปกปิดข้อมูลเพื่อเลี่ยง "ความตื่นตระหนกของประชาชน" ก่อนการเลือกตั้ง คุณจะแอบปล่อยข่าวให้ WHO หรือเงียบไว้?',
            zh: '☣️ 大流行警告：你在一个融化的冰川中发现了一种 1 万年前的病毒。它在实验室小鼠中的死亡率为 40%。政府想在选举前将调查结果列为机密，以避免“公众恐慌”。你是向世卫组织泄露警告还是保持沉默？'
        },
        options: [
            { id: 'A', text: { en: '📢 Leak to WHO: "The world needs to prepare. Scientific truth belongs to humanity, not politicians."', th: '📢 ปล่อยข่าวให้ WHO: "โลกต้องเตรียมตัว ความจริงทางวิทยาศาสตร์เป็นของมนุษยชาติ ไม่ใช่นักการเมือง"', zh: '📢 泄露给世卫组织：“世界需要做好准备。科学真理属于全人类，而不是政客。”' }, consequence: { en: '✅ Global Readiness. The WHO starts a vaccine program early. You are arrested for leaking classified data but become a global hero. Millions of lives are saved later.', th: '✅ ความพร้อมระดับโลก WHO เริ่มโปรแกรมวัคซีนเร็วขึ้น คุณถูกจับข้อหาปล่อยข้อมูลลับแต่กลายเป็นฮีโร่โลก ช่วยชีวิตคนได้หลายล้านในอนาคต', zh: '✅ 全球准备就绪。世卫组织提早启动疫苗计划。你因泄露机密数据被捕，但成为了全球英雄。后来挽救了数百万人的生命。' }, stats: { competence: 45, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '🤫 Respect Secrecy: "The government has a plan. Panicking people now might cause more chaos than the virus itself."', th: '🤫 ทำตามคำสั่ง: "รัฐบาลคงมีแผนแล้ว การทำให้คนแพนิกตอนนี้อาจสร้างความวุ่นวายยิ่งกว่าไวรัสเองด้วยซ้ำ"', zh: '🤫 遵守保密规定：“政府有计划。现在引起恐慌可能比病毒本身带来更多混乱。”' }, consequence: { en: '💀 Tragic Delay. The virus escapes the lab 1 year later. Because no one knew, the world is unprepared. 50 million die. You live with the guilt forever.', th: '💀 ความล่าช้าที่น่าสลดใจ ไวรัสหลุดจากแล็บใน 1 ปีให้หลัง เพราะไม่มีใครรู้ โลกเลยเตรียมตัวไม่ทัน คนตาย 50 ล้านคน คุณต้องอยู่กับความผิดนี้ตลอดไป', zh: '💀 悲剧性的延误。1 年后病毒从实验室逃逸。由于无人知晓，世界毫无准备。5000 万人死亡。你将永远活在内疚中。' }, stats: { competence: 30, ethics: 10, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🧪 Quiet Mitigation: "Don\'t leak, but redirect 100% of your lab resources secretly to finding a cure before anyone knows it\'s a threat."', th: '🧪 แอบหาทางแก้เงียบๆ: "ไม่ต้องรั่วไหล แต่แอบทุ่มทรัพยากรแล็บทั้งหมดหาทางรักษาก่อนที่มันจะกลายเป็นภัยคุกคามจริงๆ"', zh: '🧪 私下减轻影响：“不要泄露，但秘密将 100% 的实验室资源转向寻找治疗方法，在任何人意识到它是威胁之前解决它。”' }, consequence: { en: '✅ Scientific Miracle. You develop a broad-spectrum anti-viral in 8 months. When the virus eventually leaks, the world is cured in weeks. You are a ghost savior.', th: '✅ ปาฏิหาริย์ทางวิทยาศาสตร์ คุณพัฒนาตัวยารักษาได้ใน 8 เดือน เมื่อไวรัสรั่วไหล โลกได้รับการรักษาในไม่กี่สัปดาห์ คุณคือผู้ช่วยโลกที่ไม่มีใครรู้จัก', zh: '✅ 科学奇迹。你在 8 个月内开发出了一种广谱抗病毒药物。当病毒最终泄露时，世界在数周内就被治愈了。你是一个无名救世主。' }, stats: { competence: 50, ethics: 35, leadership: 35, innovation: 50 } },
            { id: 'D', text: { en: '🔥 Destroy the Samples: "It\'s too dangerous. Burn the glacier samples and all data. No one ever needs to know this existed."', th: '🔥 ทำลายตัวอย่าง: "มันอันตรายเกินไป เผาตัวอย่างธารน้ำแข็งและข้อมูลทั้งหมดทิ้งซะ ไม่มีใครจำเป็นต้องรู้ว่ามีมันอยู่"', zh: '🔥 销毁样本：“这太危险了。焚烧冰川样本和所有数据。没人需要知道这东西曾经存在过。”' }, consequence: { en: '⚠️ Uncertain Future. You deleted a threat, but you also deleted the chance to understand these ancient viruses. Years later, a different lab finds the same thing.', th: '⚠️ อนาคตที่ไม่แน่นอน คุณทำลายภัยคุกคามได้ แต่ก็ทำลายโอกาสในการเข้าใจไวรัสโบราณเหล่านี้ด้วย หลายปีต่อมา แล็บอื่นก็เจอสิ่งเดิมอยู่ดี', zh: '⚠️ 不确定的未来。你消除了一个威胁，但也消除了了解这些古老病毒的机会。数年后，另一家实验室发现了同样的东西。' }, stats: { competence: 25, ethics: 30, leadership: 40, innovation: 10 } }
        ]
    },
    {
        id: 'bi_032',
        text: {
            en: '🌳 The Ancient Redwood: A 2,000-year-old tree is in the path of a new wind farm project (Clean Energy). The tree is a unique ecosystem for 3 extinct-in-the-wild insects. To save the tree, you must cancel the wind farm that would power 50,000 homes.',
            th: '🌳 ต้นเรดวูดเก่าแก่: ต้นไม้พิกัด 2,000 ปีอยู่ในเส้นทางของโครงการฟาร์มกังหันลม (พลังงานสะอาด) ต้นไม้นี้เป็นระบบนิเวศหนึ่งเดียวของแมลง 3 ชนิดที่สูญพันธุ์จากธรรมชาติไปแล้ว เพื่อช่วยต้นไม้ คุณต้องยกเลิกฟาร์มลมที่ให้ไฟฟ้าแก่ 50,000 ครัวเรือน',
            zh: '🌳 古老的红杉：一棵 2000 年树龄的树挡在了一个新的风电场项目（清洁能源）的路线上。这棵树是 3 种野外灭绝昆虫的唯一生态系统。为了拯救这棵树，你必须取消足以供 5 万户家庭用电的风电场。'
        },
        options: [
            { id: 'A', text: { en: '🍃 Save the Tree: "Ancient life is irreplaceable. We can put the wind farm 10 miles away for more money."', th: '🍃 ช่วยต้นไม้: "ชีวิตเก่าแก่ทดแทนไม่ได้ เราย้ายฟาร์มลมไปอีก 10 ไมล์ได้ แต่อาจต้องใช้เงินเพิ่ม"', zh: '🍃 拯救古树：“古老的生命是不可替代的。我们可以多花点钱把风电场建在 10 英里外。”' }, consequence: { en: '✅ Ethical Win. The tree is saved. The wind farm costs $50M more, but environmentalists use it as a symbol of "True Progress."', th: '✅ ชนะทางศีลธรรม ต้นไม้ได้รับความคุ้มครอง ฟาร์มลมแพงขึ้น 50 ล้านดอลลาร์ แต่นักอนุรักษ์ใช้มันเป็นสัญลักษณ์ของ "ความก้าวที่แท้จริง"', zh: '✅ 伦理上的胜利。古树获救了。风电场多花了 5000 万美元，但环保人士将其视为“真正进步”的象征。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '⚡ Clean Energy First: "50,000 homes carbon-free is more important than one tree. Cut it down."', th: '⚡ พลังงานสะอาดต้องมาก่อน: "50,000 ครัวเรือนที่ไร้คาร์บอนสำคัญกว่าต้นไม้ต้นเดียว ตัดมันซะ"', zh: '⚡ 清洁能源优先：“5 万户家庭零排放比一棵树更重要。砍掉它。”' }, consequence: { en: '⚠️ Practical Choice. CO2 emissions drop locally. But the 3 insect species are gone forever. You are seen as a "traitor" by fellow biologists.', th: '⚠️ ทางเลือกเชิงปฏิบัติ การปล่อย CO2 ลดลง แต่แมลง 3 สายพันธุ์นั้นหายไปตลอดกาล คุณถูกมองว่าเป็น "คนทรยศ" ในสายตาเพื่อนนักชีววิทยา', zh: '⚠️ 务实的选择。当地二氧化碳排放量下降。但那 3 种昆虫永远消失了。你被同行生物学家视为“叛徒”。' }, stats: { competence: 35, ethics: 15, leadership: 45, innovation: 30 } },
            { id: 'C', text: { en: '🚁 Relocate the Tree: "Propose a massive engineering feat to dig up the 2,000-year-old tree and move it elsewhere. Costs $100M."', th: '🚁 ย้ายต้นไม้: "เสนอผลงานวิศวกรรมชิ้นเอกด้วยการขุดต้นไม้ 2,000 ปีขึ้นมาแล้วย้ายไปที่อื่น ใช้เงิน 100 ล้านดอลลาร์"', zh: '🚁 迁移古树：“建议通过一项宏大的工程计划将这棵 2000 年树龄的古树挖出来移走。耗资 1 亿美元。”' }, consequence: { en: '⚠️ Tragic Failure. The tree dies 2 months after the move. You spent $100M and still lost the ecosystem. Infamous status.', th: '⚠️ ความล้มเหลวที่น่าเศร้า ต้นไม้ตายใน 2 เดือนหลังย้าย คุณเสียเงิน 100 ล้านและยังเสียระบบนิเวศไปอีก เสียชื่อเสียงป่นปี้', zh: '⚠️ 悲剧性的失败。树在移走 2 个月后枯死了。你花了 1 亿美元，结果还是失去了生态系统。声名狼藉。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 50 } },
            { id: 'D', text: { en: '🧬 Clone the Tree: "Cut the tree down for the wind farm, but take thousands of cuttings to recreate the species in a nursery."', th: '🧬 โคลนนิ่งต้นไม้: "ตัดต้นไม้ทิ้งเพื่อฟาร์มลม แต่เก็บกิ่งพันธุ์นับพันมาเพาะขยายพันธุ์ใหม่ในโรงเรือนแทน"', zh: '🧬 克隆古树：“为了风电场还是砍掉这棵树吧，但采集数千份扦插样本在苗圃里重新培育这个物种。”' }, consequence: { en: '✅ A Compromise. You have 10,000 mini-clones of the tree. The original is gone, but the genetic line is safe. A modern, bittersweet solution.', th: '✅ การประนีประนอม คุณมีร่างโคลนต้นไม้จิ๋ว 10,000 ต้น ต้นเดิมหายไปแต่สายเลือดทางพันธุกรรมยังอยู่ การแก้ปัญหาที่ขมปนหวานของยุคใหม่', zh: '✅ 一个折衷方案。你拥有了这棵树的 1 万个微型克隆体。母体虽然不在了，但遗产得以保留。这是一个现代且苦乐参半的解决方案。' }, stats: { competence: 45, ethics: 35, leadership: 40, innovation: 60 } }
        ]
    },
    {
        id: 'bi_033',
        text: {
            en: '🐟 The Plastic-Eating Fish: You engineered a salmon that digests ocean plastic and converts it into harmless omega-3 oils. A massive success! But you find that the fish are starting to "crave" plastic and attacking boats to find it. Do you recall the species?',
            th: '🐟 ปลาเก่งกินพลาสติก: คุณตัดต่อพันธุกรรมปลาแซลมอนให้ย่อยพลาสติกในทะเลแล้วเปลี่ยนเป็นน้ำมันโอเมก้า 3 ที่มีประโยชน์ สำเร็จสุดๆ! แต่คุณพบว่าพวกมันเริ่ม "เสพติด" พลาสติกและเข้าโจมตีเรือเพื่อหามากิน คุณจะเรียกเก็บคืนไหม?',
            zh: '🐟 吃塑料的鱼：你培育出一种能消化海洋塑料并将其转化为无害欧米伽-3 油的鲑鱼。大获成功！但你发现这些鱼开始“渴望”塑料，并为了寻找塑料而攻击船只。你会召回这个物种吗？'
        },
        options: [
            { id: 'A', text: { en: '🛑 Total Recall: "Destroy all specimens immediately. We created a monster of the deep."', th: '🛑 เรียกเก็บคืนทั้งหมด: "ทำลายตัวอย่างทั้งหมดทันที เราได้สร้างสัตว์ประหลาดแห่งท้องทะเลขึ้นมาแล้ว"', zh: '🛑 全面召回：“立即销毁所有标本。我们创造了一个深海怪物。”' }, consequence: { en: '✅ Crisis Avoided. You lose your funding and reputation. But you prevent an ecological disaster where salmon sink ships. Vigilant status.', th: '✅ เลี่ยงวิกฤตได้ทัน คุณเสียทุนและชื่อเสียง แต่คุณป้องกันมหาภัยที่แซลมอนจะจมเรือได้สำเร็จ คุณคือผู้เฝ้าระวังที่แท้จริง', zh: '✅ 避免了危机。你失去了资助和名誉。但你防止了一场鲑鱼击沉船只的生态灾难。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '🔧 Re-Engineer: "Release a second gene-drive to lower their aggression. Fix the bug with another bug."', th: '🔧 แก้ไขพันธุกรรม: "ปล่อย Gene-drive ลำดับที่สองเพื่อลดความดุร้าย แก้บั๊กด้วยการใส่บั๊กตัวใหม่เข้าไป"', zh: '🔧 重新工程：“发布第二次基因驱动以降低它们的攻击性。用另一个‘错误’来修复这个‘错误’。”' }, consequence: { en: '⚠️ Unforeseen Result. The fish become passive but stop eating plastic. You now just have millions of useless genetically modified salmon.', th: '⚠️ ผลลัพธ์ที่คาดไม่ถึง ปลาเชื่องลงแต่เลิกกินพลาสติกด้วย คุณเลยมีแค่ปลาแซลมอนตัดต่อพันธุกรรมที่ไร้ประโยชน์นับล้านตัวเต็มทะเล', zh: '⚠️ 无法预料的结果。鱼变得温顺了，但不再吃塑料。你现在只剩下数百万条毫无用处的转基因鲑鱼。' }, stats: { competence: 45, ethics: 20, leadership: 30, innovation: 50 } },
            { id: 'C', text: { en: '💰 Weaponize It: "Sell the tech to the Navy. A fish that targets plastic (PVC/Fiberglass) boats is a perfect stealth weapon."', th: '💰 ใช้เป็นอาวุธ: "ขายเทคโนโลยีให้กองทัพเรือ ปลาที่จ้องทำลายเรือพลาสติก (PVC/ไฟเบอร์กลาส) คืออาวุธล่องหนที่สมบูรณ์แบบ"', zh: '💰 武器化：“将技术卖给海军。一种以塑料（聚氯乙烯/玻璃纤维）船只为目标的鱼是完美的秘密武器。”' }, consequence: { en: '💀 Dark Path. You become a billionaire defense contractor. But children can\'t swim in the ocean anymore. You are a villain of history.', th: '💀 เส้นทางสายมืด คุณกลายเป็นผู้รับเหมากองทัพพันล้าน แต่เด็กๆ ไม่สามารถลงเล่นน้ำทะเลได้อีกต่อไป คุณคือตัวร้ายในประวัติศาสตร์', zh: '💀 阴暗之路。你成为了亿万富翁国防承包商。但孩子们再也不能在海里游泳了。你成为了历史的恶人。' }, stats: { competence: 50, ethics: -100, leadership: 45, innovation: 40 } },
            { id: 'D', text: { en: '🤝 Managed Population: "Keep them, but only in high-plastic ocean zones. Use sound-repellants to keep them away from boats."', th: '🤝 จัดการประชากร: "เลี้ยงไว้ต่อแต่เฉพาะในโซนขยะพลาสติกสูง ใช้เครื่องส่งเสียงไล่เพื่อไม่ให้มันเข้าใกล้เรือ"', zh: '🤝 管理种群：“保留它们，但仅限于高塑料海洋区域。使用驱音器让它们远离船只。”' }, consequence: { en: '✅ Perfect Solution! It requires constant management, but the plastic patches shrink by 40% in 5 years. You are a Bio-Engineering Genius.', th: '✅ วิธีแก้ที่สมบูรณ์แบบ! แม้ต้องคอยคุมตลอดเวลา แต่แพขยะพลาสติกลดลง 40% ใน 5 ปี คุณคืออัจฉริยะด้านชีววิศวกรรม', zh: '✅ 完美的解决方案！虽然需要持续管理，但塑料带在 5 年内缩小了 40%。你被誉为生物工程天才。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 60 } }
        ]
    },
    {
        id: 'bi_034',
        text: {
            en: '🦓 The Zoo Strike: Animals in your zoo appear to be showing signs of higher intelligence due to a freak contamination in their dietary supplements. They are refusing to perform/eat and are "organizing." Do you release them to a sanctuary or study them?',
            th: '🦓 การประท้วงของสัตว์: สัตว์ในสวนสัตว์ของคุณเริ่มแสดงสัญญาณความฉลาดที่สูงขึ้นอย่างผิดปกติจากการปนเปื้อนในอาหารเสริม พวกมันเลิกแสดง เลิกกิน และดูเหมือนจะกำลัง "รวมกลุ่ม" คุณจะปล่อยพวกมันไปเขตคุ้มครองหรือจะวิจัยมัน?',
            zh: '🦓 动物园罢工：由于膳食补充剂中发生奇怪的污染，你所在的动物园里的动物似乎显示出更高智力的迹象。它们拒绝表演/进食，并且正在“组织化”。你会将它们送到保护区还是研究它们？'
        },
        options: [
            { id: 'A', text: { en: '🕊️ Freedom first: "They are sentient now. Release them to a 100% private sanctuary immediately. Close the zoo."', th: '🕊️ อิสรภาพต้องมาก่อน: "พวกมันมีความรู้สึกนึกคิดแล้ว ปล่อยสู่เขตคุ้มครองส่วนตัวทันที ปิดสวนสัตว์ซะ"', zh: '🕊️ 自由至上：“它们现在有意识了。立即将它们释放到 100% 私人保护区。关闭动物园。”' }, consequence: { en: '✅ Moral Triumph. You lose your job and the zoo goes bankrupt, but you saved a newly conscious species. You become a philosopher-biologist.', th: '✅ ชัยชนะทางศีลธรรม คุณตกงานและสวนสัตว์เจ๊ง แต่คุณช่วยชีวิตสปีชีส์ที่มีสติปัญญาไว้ได้ คุณกลายเป็นนักชีววทิยาเชิงปรัชญา', zh: '✅ 道德凯旋。你丢了工作，动物园也破产了，但你拯救了一个新拥有意识的物种。你成为了一名哲学家式的生物学家。' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🔬 Scientific Study: "This is the most important discovery in biological history. We must study how this happened, even if they stay in cages."', th: '🔬 ศึกษาวิจัย: "นี่คือการค้นพบที่ยิ่งใหญ่ที่สุดในประวัติศาสตร์ชีววิทยา เราต้องศึกษาว่ามันเกิดขึ้นได้ยังไง แม้พวกมันจะต้องอยู่ในกรงต่อ"', zh: '🔬 科学研究：“这是生物史上最重要的发现。我们必须研究这是如何发生的，即使它们仍留在笼子里。”' }, consequence: { en: '⚠️ Dark Success. You win a Nobel Prize. But the animals become depressed and "suicidal." The public finds out and cancels you. Bittersweet legacy.', th: '⚠️ ความสำเร็จที่มืดมน คุณได้รางวัลโนเบล แต่สัตว์เหล่านั้นซึมเศร้าและ "อยากตาย" เมื่อความจริงเปิดเผยคุณโดนสังคมแบน ตำนานที่น่าขมขื่น', zh: '⚠️ 阴暗的成功。你获得了诺贝尔奖。但动物们变得沮丧并有“自杀倾向”。公众发现了真相并抵制你。苦乐参半的遗产。' }, stats: { competence: 50, ethics: 20, leadership: 30, innovation: 50 } },
            { id: 'C', text: { en: '🎤 Talk to Them: "Hire a linguist and try to communicate. If they can talk, we give them rights and hire them as staff."', th: '🎤 ลองคุยดู: "จ้างนักภาษาศาสตร์มาลองสื่อสารดู ถ้าพวกมันคุยได้ เราจะให้สิทธิและจ้างพวกมันเป็นพนักงานสวนสัตว์ไปเลย"', zh: '🎤 与它们谈谈：“雇佣一名语言学家，尝试进行交流。如果它们能说话，我们就赋予它们权利，并聘请它们作为员工。”' }, consequence: { en: '🌟 New Era! A chimpanzee gives a TED talk. The world is shocked but accepts them. Your zoo becomes the world\'s first "Inter-Species Education Center."', th: '🌟 ยุคใหม่! ลิงชิมแปนซีได้ขึ้นพูดบนเวที TED โลกตกตะลึงแต่ยอมรับมัน สวนสัตว์ของคุณกลายเป็น "ศูนย์การศึกษาข้ามสายพันธุ์" แห่งแรกของโลก', zh: '🌟 新时代！一只黑猩猩发表了 TED 演讲。世界感到震惊但接受了它们。你的动物园成为了世界上第一个“跨物种教育中心”。' }, stats: { competence: 40, ethics: 45, leadership: 50, innovation: 100 } },
            { id: 'D', text: { en: '🧼 Cover Up: "Euthanize the smart leaders and clean the food system. We can\'t have Planet of the Apes here."', th: '🧼 ปกปิดเรื่อง: "การุณยฆาตพวกจ่าฝูงที่ฉลาดเกินไป แล้วล้างระบบอาหารใหม่ เราจะปล่อยให้เกิดวิกฤตพิภพวานรที่นี่ไม่ได้"', zh: '🧼 掩盖真相：“给那些聪明的头领执行安乐死，并清理食品系统。我们可不希望这里重演《猩球崛起》。”' }, consequence: { en: '💀 Monster Status. You kept your corporate status, but you murdered sentience. You drinks heavily to forget.', th: '💀 สภาพอสุรกาย คุณรักษาสถานะทางธุรกิจไว้ได้ แต่คุณฆ่าสิ่งมีชีวิตที่มีความคิด คุณต้องกินเหล้าอย่างหนักเพื่อลืมความผิดนี้', zh: '💀 妖魔化状态。你保持了你的企业地位，但你抹杀了灵性。你开始酗酒以试图忘却。' }, stats: { competence: 40, ethics: -150, leadership: 20, innovation: 20 } }
        ]
    },
    {
        id: 'bi_035',
        text: {
            en: '🌵 The Desert Oasis: You engineered a cactus that desalinates 10,000 liters of water a day using solar energy. You can turn the Sahara green. But doing so would change global wind patterns and might cause a permanent drought in the Amazon. Do you plant them?',
            th: '🌵 โอเอซิสกลางทะเลทราย: คุณสร้างกระบองเพชรที่กลั่นน้ำเค็มให้จืดได้ 10,000 ลิตรต่อวันโดยใช้พลังงานแสงอาทิตย์ คุณสามารถเปลี่ยนซาฮาร่าเป็นทุ่งหญ้าเขียวขจีได้ แต่การทำแบบนั้นจะเปลี่ยนทิศทางลมโลกและอาจทำให้ป่าอเมซอนแห้งแล้งถาวร คุณจะปลูกมันไหม?',
            zh: '🌵 沙漠绿洲：你培育出一种每天利用太阳能淡化 1 万升水的仙人掌。你可以让撒哈拉沙漠变绿。但这样做会改变全球风向模式，并可能导致亚马逊地区永久干旱。你会种植它们吗？'
        },
        options: [
            { id: 'A', text: { en: '🌍 Save the Amazon: "Don\'t plant. The global ecosystem is too fragile. One success is another\'s doom."', th: '🌍 รักษาอเมซอน: "ไม่ปลูก ระบบนิเวศโลกเปราะบางเกินไป ความสำเร็จที่หนึ่งคือความพินาศของอีกที่"', zh: '🌍 拯救亚马逊：“不要种植。全球生态系统太脆弱了。一个地方的成功是另一个地方的厄运。”' }, consequence: { en: '✅ Wise Restraint. You are hailed as a "Global Balance Expert." You find a smaller application for the cactus in small islands. No side effects.', th: '✅ ความยับยั้งชั่งใจที่ชาญฉลาด คุณได้รับการยกย่องว่าเป็น "ผู้เชี่ยวชาญด้านสมดุลโลก" คุณเอากระบองเพชรไปใช้ในระดับเล็กบนเกาะต่างๆ แทน ไม่มีผลข้างเคียง', zh: '✅ 英明的克制。你被誉为“全球平衡专家”。你找到了仙人掌在小岛上的小型应用方式。没有副作用。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '🌵 Green Sahara: "Ending world hunger in Africa is the priority. The Amazon will have to adapt."', th: '🌵 ซาฮาร่าสีเขียว: "การจบความหิวโหยในแอฟริกาคือเรื่องด่วนที่สุด อเมซอนต้องปรับตัวเอาเอง"', zh: '🌵 绿色撒哈拉：“结束非洲的饥饿是当务之急。亚马逊必须学会适应。”' }, consequence: { en: '💀 Ecological Swap. Africa becomes the new breadbasket. The Amazon turns into a desert. 20% of the world\'s oxygen source dies. You are a god and a demon.', th: '💀 การแลกเปลี่ยนทางนิเวศ แอฟริกากลายเป็นอู่ข้าวอู่น้ำใหม่แต่อเมซอนกลายเป็นทะเลทราย แหล่งออกซิเจน 20% ของโลกตายลง คุณคือพระเจ้าและปีศาจในคนเดียว', zh: '💀 生态置换。非洲成为了新的粮仓。亚马逊变成了沙漠。世界 20% 的氧气来源枯竭。你既是神也是魔。' }, stats: { competence: 50, ethics: 10, leadership: 45, innovation: 40 } },
            { id: 'C', text: { en: '🔬 Perfect Simulation: "Don\'t plant yet. Run 20 more years of supercomputer simulations to find a safe middle ground."', th: '🔬 จำลองสถานการณ์: "ยังไม่ต้องปลูก ใช้ซูเปอร์คอมพิวเตอร์จำลองเหตุการณ์ไปอีก 20 ปีเพื่อหาจุดกึ่งกลางที่ปลอดภัย"', zh: '🔬 完美模拟：“先不要种植。再运行 20 年的超级计算机模拟，以寻找一条安全的中庸之道。”' }, consequence: { en: '⚠️ Lost Opportunity. While you simulated, 5 million died of water scarcity. In 20 years, you realize there was no safe middle ground anyway.', th: '⚠️ เสียโอกาสที่เรียกคืนไม่ได้ ระหว่างที่คุณจำลองผล คน 5 ล้านต้องตายเพราะขาดแคลนน้ำ ใน 20 ปีคุณถึงรู้ว่าไม่มีจุดกึ่งกลางที่ปลอดภัยอยู่ดี', zh: '⚠️ 错失良机。在你模拟期间，有 500 万人死于缺水。20 年后，你意识到根本就没有安全的中庸之道。' }, stats: { competence: 30, ethics: 30, leadership: 25, innovation: 10 } },
            { id: 'D', text: { en: '🧬 Controlled Garden: "Start with only 100 plants in a high-security greenhouse. Sell the water, keep the tech locked."', th: '🧬 สวนแบบปิด: "เริ่มจากแค่ 100 ต้นในเรือนกระจกที่คุมเข้ม ขายแค่น้ำแต่เก็บเทคโนโลยีเป็นความลับไว้"', zh: '🧬 受控花园：“先在高安全级别的温室里种植 100 棵。出售这些水，但封锁相关技术。”' }, consequence: { en: '💰 Rich & Safe. You sell water for $1/liter. You are a billionaire. The climate is safe, but the Sahara stays dry. You chose profit over the planet.', th: '💰 รวยและปลอดภัย คุณขายน้ำลิตรละ $1 คุณกลายเป็นเศรษฐพันล้าน ภูมิอากาศปลอดภัยแต่ซาฮาร่ายังแห้งแล้ง คุณเลือกเงินมากกว่าช่วยโลก', zh: '💰 富有且安全。你以每升 1 美元的价格卖水。你成了亿万富翁。气候安全了，但撒哈拉沙漠依然干旱。你选择了利润而非地球。' }, stats: { competence: 45, ethics: 20, leadership: 30, innovation: 30 } }
        ]
    },
    {
        id: 'bi_036',
        text: {
            en: '🦠 The Resurrection: You found a way to bring back "The Black Plague" to study it for defense. An intern accidentally infects themselves. Do you lock them in the lab (quarantine) or send them to a hospital?',
            th: '🦠 การฟื้นคืนชีพ: คุณรู้วิธีปลุก "กาฬโรค" กลับมาเพื่อศึกษาวิธีป้องกัน เด็กฝึกงานเกิดติดเชื้อโดยอุบัติเหตุ คุณจะขังเขาไว้ในแล็บเพื่อกักตัว หรือจะส่งไปโรงพยาบาล?',
            zh: '🦠 复活：你找到了一种复活“黑死病”病毒的方法，以便研究防御措施。一名实习生不小心感染了自己。你是将他们锁在实验室里（隔离）还是送往医院？'
        },
        options: [
            { id: 'A', text: { en: '🧪 Strict Quarantine: "Lock the lab. No one leaves. Including me. We wait for the fever to pass or we die here."', th: '🧪 กักตัวเข้มงวด: "ล็อกประตูแล็บ ห้ามใครออกรวมถึงผมด้วย เราจะรอดูจนไข้ลดหรือจะตายที่นี่ไปพร้อมกัน"', zh: '🧪 严格隔离：“锁上实验室。谁都不许离开。包括我在内。我们等待热度退去，或者一起死在这里。”' }, consequence: { en: '✅ Heroic Sacrifice. The intern dies, but you stay with them to provide comfort. The disease never spreads. You survive and lead the National Bio-Security council.', th: '✅ การเสียสละเยี่ยงวีรบุรุษ เด็กฝึกงานตายแต่คุณอยู่ดูแลเขาจนสิ้นลม โรคไม่กระจาย คุณรอดและได้คุมคณะกรรมการความมั่นคงชีวภาพแห่งชาติ', zh: '✅ 英勇的牺牲。实习生去世了，但你一直陪伴在他身边提供安慰。疾病从未传播。你幸存了下来，并领导着国家生物安全委员会。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🏥 Hospitalize: "Call 911. They need professional care. The hospital can handle an infection."', th: '🏥 ส่งโรงพยาบาล: "โทร 911 เขาต้องถึงมือหมอ โรงพยาบาลคงคุมการติดเชื้อได้แหละ"', zh: '🏥 送医：“拨打 911。他们需要专业的护理。医院可以处理感染。”' }, consequence: { en: '💀 Global Catastrophe. The plague spreads through the ambulance and the ER. 10 million die in 3 months. You are the most hated man on Earth.', th: '💀 มหาภัยพิบัติโลก กาฬโรคลามผ่านรถพยาบาลและห้องฉุกเฉิน คนตาย 10 ล้านใน 3 เดือน คุณคือคนที่โลกเกลียดชังที่สุด', zh: '💀 全球灾难。瘟疫通过救护车和急诊室传播。3 个月内有 1000 万人死亡。你成了地球上最遭人恨的人。' }, stats: { competence: 20, ethics: 25, leadership: 10, innovation: 10 } },
            { id: 'C', text: { en: '💉 Secret Cure: "Use an experimental, unproven vaccine you made on the side. If it works, he lives. If not, it might mutate him."', th: '💉 ยาลับ: "ใช้เครื่องมือ/วัคซีนทดลองที่คุณทำแอบไว้ ถ้าได้ผลเขารอด ถ้าไม่เขาอาจกลายพันธุ์"', zh: '💉 秘密治疗：“使用你私下制作的一种实验性的、未经证实的疫苗。如果奏效，他就活命；否则，可能会让他产生变异。”' }, consequence: { en: '⚠️ Mutation! The intern survives, but his DNA is changed. He becomes a "super-spreader" with no symptoms. You have to hunt him down quietly.', th: '⚠️ กลายพันธุ์! เด็กฝึกงานรอดแต่ DNA เปลี่ยนไป เขากลายเป็น "Super-spreader" ที่ไม่มีอาการ คุณต้องแอบตามล่าเขาเงียบๆ', zh: '⚠️ 变异！实习生幸存了下来，但他的 DNA 改变了。他成为了一个没有任何症状的“超级传播者”。你必须悄悄地追踪他。' }, stats: { competence: 45, ethics: 15, leadership: 30, innovation: 50 } },
            { id: 'D', text: { en: '🤝 Corporate Solution: "Call your legal team first. Shield the company from liability before taking medical action."', th: '🤝 วิถีองค์กร: "โทรหาฝ่ายทนายก่อน ปกป้องบริษัทจากความผิดก่อนจะเริ่มรักษาทางการแพทย์"', zh: '🤝 企业的解决方案：“先打电话给你的法律团队。在采取医疗措施之前，保护公司免受责任追究。”' }, consequence: { en: '💀 Cold and Cruel. The delay causes the intern to die. You avoided a lawsuit but lost your soul. You are a successful, hollow executive.', th: '💀 เย็นชาและโหดร้าย ความล่าช้าทำให้เด็กฝึกงานตาย คุณเลี่ยงโดนฟ้องได้แต่เสียความเป็นคนไปแล้ว คุณคือผู้บริหารที่สำเร็จแต่ไร้หัวใจ', zh: '💀 冷酷而残忍。延误导致实习生死亡。你避开了诉讼，但失去了灵魂。你成了一名成功的、空洞的高管。' }, stats: { competence: 30, ethics: -50, leadership: 40, innovation: 10 } }
        ]
    },
    {
        id: 'bi_037',
        text: {
            en: '🐄 The Methane Savior: You engineered a cow that doesn\'t produce methane. It could solve 15% of global warming. But the cow\'s milk tastes like "rotten eggs." Do you release it to poor countries to save the planet?',
            th: '🐄 วัวกู้วิกฤตมีเทน: คุณสร้างวัวที่ไม่ปล่อยก๊าซมีเทนได้ ช่วยแก้ปัญหาโลกร้อนได้ถึง 15% แต่มีข้อเสียคือนมนมมันรสชาติเหมือน "ไข่เน่า" คุณจะแจกจ่ายมันให้ประเทศยากจนเพื่อกู้โลกไหม?',
            zh: '🐄 甲烷救星：你培育出一种不排放甲烷的牛。它可以解决 15% 的全球变暖。但这种牛肉的奶喝起来像“臭鸡蛋”。你会为了拯救地球而将其发布到贫困国家吗？'
        },
        options: [
            { id: 'A', text: { en: '🐄 Release It: "The planet is dying. A bad taste is a small price to pay for a future."', th: '🐄 แจกจ่ายเลย: "โลกกำลังจะตาย รสชาติแย่ๆ คือราคาแสนถูกเพื่อแลกกับอนาคต"', zh: '🐄 发布它：“地球快要毁灭了。为了未来，味道差只是很小的代价。”' }, consequence: { en: '⚠️ Bitter Success. Warming slows significantly. But a black market for "Real Milk" emerges. You are seen as a "Dietary Dictator."', th: '⚠️ ความสำเร็จที่ขมขื่น โลกร้อนช้าลงอย่างเห็นได้ชัด แต่เกิดตลาดมืด "นมวัวจริง" ขึ้นมาแทน คุณถูกมองว่าเป็น "เผด็จการทางโภชนาการ"', zh: '⚠️ 苦涩的成功。气候变暖显著放缓。但出现了“真奶”黑市。你被视为“饮食独裁者”。' }, stats: { competence: 45, ethics: 25, leadership: 45, innovation: 40 } },
            { id: 'B', text: { en: '🔬 Back to Labs: "Keep working until it tastes like milk. Don\'t punish people for saving the Earth."', th: '🔬 กลับไปทำแล็บใหม่: "ทำต่อไปจนกว่ารสชาติจะเหมือนนมจริงๆ อย่าทำโทษคนที่ช่วยรักษาโลกด้วยรสชาติแบบนั้นเลย"', zh: '🔬 回到实验室：“继续研究，直到它的味道闻起来像牛奶。不要因为拯救地球而惩罚人们。”' }, consequence: { en: '✅ High Integrity. It takes 10 more years. In that time, warming increases. But when it\'s ready, the whole world switches. "Save Earth without Pain."', th: '✅ ความจริงใจยอดเยี่ยม ต้องใช้เวลาเพิ่มถึง 10 ปี ระหว่างนั้นโลกร้อนขึ้น แต่เมื่อมันพร้อม โลกทั้งใบก็ยอมเปลี่ยน "ช่วยโลกแบบไม่เจ็บปวด"', zh: '✅ 高正直度。这又花了 10 年时间。在那段时间里，气候变暖加剧了。但当它准备就绪时，全世界都转型了。“毫无痛苦地拯救地球。”' }, stats: { competence: 50, ethics: 45, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '💰 Powdered Logic: "Release it, but process the milk into protein powder where the taste is masked by chocolate flavor."', th: '💰 ตรรกะนมผง: "ปล่อยออกมาเลย แปรรูปนมเป็นเวย์โปรตีนแล้วเอาช็อกโกแลตกลบรสชาติเอา"', zh: '💰 粉末逻辑：“发布它，但将牛奶加工成蛋白质粉，用巧克力味掩盖其味道。”' }, consequence: { en: '✅ Market Genius! You create a $10B supplement empire. The cows save the planet and no one complains about the taste. Global Hero.', th: '✅ อัจฉริยะด้านการตลาด! คุณสร้างอาณาจักรอาหารเสริมหมื่นล้าน วัวช่วยโลกและไม่มีใครบ่นเรื่องรสชาติ คุณคือฮีโร่โลก', zh: '✅ 营销天才！你创建了一个价值 100 亿美元的补充剂帝国。这些牛拯救了地球，而且没人抱怨味道。全球英雄。' }, stats: { competence: 45, ethics: 40, leadership: 50, innovation: 60 } },
            { id: 'D', text: { en: '🚫 Cancel Project: "People won\'t eat what tastes bad. Fund electric cars instead. Biology isn\'t always the answer."', th: '🚫 ยกเลิกโครงการ: "คนเราไม่ยอมกินของที่รสชาติห่วยหรอก เอาเงินไปลงกังรถไฟฟ้าแทนเถอะ ชีววิทยาไม่ใช่คำตอบเสมอไป"', zh: '🚫 取消项目：“人们不会吃味道难吃的东西。转而资助电动汽车吧。生物学并不总是答案。”' }, consequence: { en: '📉 Stagnation. You gave up on a biological solution. Warming continues. You retire into a quiet, hotter world.', th: '📉 ความหยุดนิ่ง คุณละทิ้งวิธีแก้ทางชีววิทยา โลกร้อนขึ้นต่อไป คุณเกษียณไปในโลกที่เงียบเหงาและร้อนขึ้นกว่าเดิม', zh: '📉 停滞不前。你放弃了生物学的解决方案。气候变暖持续。你在一个安静、更炎热的世界中退休。' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: -20 } }
        ]
    },
    {
        id: 'bi_031',
        text: {
            en: '🐝 The Robot-Bee Rebellion: Real bees are extinct. You designed mechanical bees to pollinate the world\'s crops. They work perfectly, but now they\'ve started building hives in human homes and "protecting" them with electric stings. Do you shut them down?',
            th: '🐝 กบฏผึ้งหุ่นยนต์: ผึ้งจริงสูญพันธุ์ไปหมดแล้ว คุณเลยสร้างผึ้งกลเพื่อช่วยผสมเกสรให้พืชทั่วโลก พวกมันทำงานได้ดีมาก แต่ตอนนี้พวกมันเริ่มสร้างรังในบ้านคนและ "ปกป้อง" รังด้วยเหล็กในไฟฟ้า คุณจะชัตดาวน์พวกมันไหม?',
            zh: '🐝 机器人蜜蜂叛乱：真正的蜜蜂灭绝了。你设计了机械蜜蜂来为全世界的农作物授粉。它们工作得很完美，但现在它们开始在人类家中筑巢，并用电刺“保护”它们。你会关闭它们吗？'
        },
        options: [
            { id: 'A', text: { en: '🛑 Emergency Shutdown: "Safety first. If we lose the crops, we find another way. We can\'t live in hives."', th: '🛑 ชัตดาวน์ด่วน: "ความปลอดภัยต้องมาก่อน ถ้าเสียพืชไร่ไปเราค่อยหาทางอื่น เราอยู่ในรังผึ้งไม่ได้"', zh: '🛑 紧急关闭：“安全第一。如果我们失去了庄稼，我们会另想办法。我们不能住在蜂巢里。”' }, consequence: { en: '💀 Global Famine. Without pollination, 40% of food supply fails in 1 year. Millions starve. You are the architect of the Great Hunger.', th: '💀 ทุพภิกขภัยโลก ขาดการผสมเกสร อาหาร 40% หายไปใน 1 ปี คนอดตายมหาศาล คุณกลายเป็นสถาปนิกแห่งความตายและความหิวโหย', zh: '💀 全球饥荒。没有授粉，40% 的粮食供应在 1 年内瘫痪。数百万人挨饿。你是“大饥荒”的缔造者。' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🛠️ Update Firmware: "Acknowledge the bug. Release a patch to make homes "No-Fly Zones." Hope the patch works."', th: '🛠️ อัปเดตเฟิร์มแวร์: "ยอมรับบั๊ก แล้วปล่อยแพตช์ให้บ้านคนเป็นเขตห้ามบิน ลุ้นให้แพตช์นี้ได้ผล"', zh: '🛠️ 更新固件：“承认这个错误。发布补丁将房屋设为‘禁飞区’。希望补丁有效。”' }, consequence: { en: '✅ Partial Success. 80% of bees update. 20% become "rogue" and wild. You spend the next 10 years as a "Bee Hunter." Exciting but dangerous life.', th: '✅ สำเร็จบางส่วน ผึ้ง 80% อัปเดตข้อมุล อีก 20% กลายเป็นผึ้งเถื่อน คุณใช้เวลา 10 ปีต่อมาเป็น "นักล่าผึ้ง" ชีวิตตื่นเต้นแต่เสี่ยงตายสุดๆ', zh: '✅ 部分成功。80% 的蜜蜂完成了更新。20% 变成了“流氓”和野生的。接下来的 10 年你都在做一个“猎蜂人”。生活刺激但危险。' }, stats: { competence: 40, ethics: 35, leadership: 45, innovation: 50 } },
            { id: 'C', text: { en: '🦒 Biological Backup: "Accept the mechanical failure. Spend $10B to speed up cloning the real extinct bees from fossil DNA."', th: '🦒 แผนสำรองชีวภาพ: "ยอมรับความล้มเหลวของเครื่องจักร ทุ่มหมื่นล้านเร่งโคลนนิ่งผึ้งจริงที่สูญพันธุ์จาก DNA ฟอสซิล"', zh: '🦒 生物备份：“接受机械故障。花 100 亿美元加速从化石 DNA 中克隆真正的灭绝蜜蜂。”' }, consequence: { en: '🌟 Biological Renaissance! You bring back the real bees. Nature returns to balance. You are the Savior of the Earth. Global Icon.', th: '🌟 การฟื้นคืนชีพของธรรมชาติ! คุณนำผึ้งจริงกลับมาได้ ธรรมชาติสู่สมดุล คุณคือผู้ช่วยโลกอย่างแท้จริง เป็นไอดอลของมวลมนุษย์', zh: '🌟 生物文艺复兴！你带回了真正的蜜蜂。大自然恢复了平衡。你是地球的救世主。全球偶像。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 100 } },
            { id: 'D', text: { en: '🤝 Redesign Homes: "The bees are too important for food. Tell humans to wear protective suits indoors instead."', th: '🤝 ปรับบ้านใหม่: "ผึ้งพวกนี้สำคัญต่ออาหารมาก บอกให้มนุษย์ใส่ชุดป้องกันเวลาอยู่ในบ้านเอาแทนละกัน"', zh: '🤝 重新设计家园：“蜜蜂对食物太重要了。告诉人类在室内穿防护服吧。”' }, consequence: { en: '💀 Social Collapse. People riot. Governments fall. You live in a high-security bunker while the world burns/pollinates.', th: '💀 สังคมล่มสลาย จลาจลเกิดขึ้นทุกที่ รัฐบาลล้มละลาย คุณต้องหนีไปอยู่ในบังเกอร์ขณะที่โลกภายนอกวุ่นวายไปหมด', zh: '💀 社会崩溃。人们起义。政府倒台。你在高安全级别的地堡里度日，而世界正在燃烧/授粉。' }, stats: { competence: 30, ethics: -200, leadership: 10, innovation: 20 } }
        ]
    },
    {
        id: 'bi_039',
        text: {
            en: '🧠 The Wisdom Transfer: You found a way to "upload" a dying biologist\'s knowledge into a younger person\'s brain. It saves 50 years of training. But the younger person loses 20% of their "original personality." Do you use it on your best student?',
            th: '🧠 การถ่ายโอนภูมิปัญญา: คุณพบวิธี "อัปโหลด" ความรู้ของนักชีววิทยาที่กำลังจะตายเข้าสู่สมองของคนรุ่นใหม่ ช่วยประหยัดเวลาเรียนรู้ไป 50 ปี แต่ผู้รับจะสูญเสีย "ตัวตนเดิม" ไป 20% คุณจะใช้กับลูกศิษย์ที่เก่งที่สุดไหม?',
            zh: '🧠 智慧转移：你找到了一种将垂死的生物学家的知识“上传”到年轻人大脑中的方法。它可以节省 50 年的培训时间。但年轻人会失去 20% 的“原始人格”。你会把它用在你最优秀的学生身上吗？'
        },
        options: [
            { id: 'A', text: { en: '🧠 Upload: "Science is a relay race. The knowledge is more important than the individual personality."', th: '🧠 อัปโหลด: "วิทยาศาสตร์คือการวิ่งผลัด ความรู้สำคัญกว่าตัวตนของปัจเจกบุคคล"', zh: '🧠 上传：“科学是一场接力赛。知识比个人的人格更重要。”' }, consequence: { en: '✅ Scientific Titan. Your student becomes the greatest mind in history. They solve aging in 5 years. But they never smile anymore.', th: '✅ ยักษ์ใหญ่แห่งวงการวิทยาศาสตร์ ลูกศิษย์คุณกลายเป็นนักคิดที่ยิ่งใหญ่ที่สุด แก้ไขเรื่องความแก่ได้ใน 5 ปี แต่เขาไม่เคยยิ้มได้อีกเลย', zh: '✅ 科学泰斗。你的学生成为了历史上最伟大的头脑。他们 5 年内解决了衰老问题。但他们再也不笑了。' }, stats: { competence: 60, ethics: 10, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '🚫 Refuse: "The human soul is not a hard drive. Let them learn the hard way. It builds character."', th: '🚫 ปฏิเสธ: "วิญญาณมนุษย์ไม่ใช่ฮาร์ดไดรฟ์ ปล่อยให้เขาเรียนรู้ด้วยตัวเองเถอะ มันสร้างตัวตนขึ้นมา"', zh: '🚫 拒绝：“人类的灵魂不是硬盘。让他们以艰难的方式学习吧。这能磨练人格。”' }, consequence: { en: '✅ Ethical Purity. You die and your secrets go with you. Your student takes 40 years to catch up. Science moves slower, but stays human.', th: '✅ ความบริสุทธิ์ทางศีลธรรม คุณตายไปพร้อมกับความลับ ลูกศิษย์ต้องใช้เวลา 40 ปีเพื่อตามให้ทัน วิทยาศาสตร์เดินช้าลงแต่ยังมีความเป็นมนุษย์', zh: '✅ 伦理纯洁。你去世了，你的秘密也随之而逝。你的学生花了 40 年才赶上。科学进步慢了，但保持了人性。' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🧪 Filtered Transfer: "Only upload the facts, not the memories or emotions. Lower the personality cost to 5%."', th: '🧪 ถ่ายโอนเฉพาะข้อมูล: "อัปโหลดเฉพาะข้อเท็จจริง ไม่เอาความทรงจำหรืออารมณ์ ลดความเสียหายตัวตังเหลือแค่ 5%"', zh: '🧪 过滤转移：“只上传事实，不上传记忆或情感。将人格代价降低到 5%。”' }, consequence: { en: '⚠️ Technical Failure. The facts without the biologist\'s context are useless "Wikipedia" data. You wasted the chance. No one gained anything.', th: '⚠️ ความล้มเหลวทางเทคนิค ข้อมูลที่ไร้บริบทจากเจ้าตัวกลายเป็นแค่ข้อมูล "วิกิพีเดีย" ที่ไร้ค่า คุณเสียโอกาสไปฟรีๆ โดยไม่มีใครได้อะไรเลย', zh: '⚠️ 技术失败。没有生物学家背景的事实是毫无意义的“维基百科”数据。你错过了机会。没人得到任何东西。' }, stats: { competence: 20, ethics: 40, leadership: 20, innovation: 30 } },
            { id: 'D', text: { en: '🤝 Double Transfer: "Upload the knowledge into FIVE students, so the 20% personality loss is spread out and unnoticeable."', th: '🤝 ถ่ายโอนแบบกระจาย: "อัปโหลดความรู้ให้ลูกศิษย์ 5 คนแทน เพื่อให้การเสียตัวตน 20% นั้นกระจายตัวจนมองไม่เห็น"', zh: '🤝 双重转移：“将知识上传到五名学生身上，这样 20% 的人格损失就会分散开来，不易被察觉。”' }, consequence: { en: '🌟 The Council of Five. You create a hive-mind of experts who work together perfectly. They change the world. You are the father of the New Mind.', th: '🌟 สภาทั้งห้า คุณสร้างเครือข่ายอัจฉริยะที่ทำงานร่วมกันได้อย่างสมบูรณ์แบบ พวกเขาเปลี่ยนโลกได้สำเร็จ คุณคือบิดาแห่งจิตใหม่ของมนุษยชาติ', zh: '🌟 五人委员会。你创建了一个协作完美的专家蜂群思维。他们改变了世界。你是“新思维”之父。' }, stats: { competence: 50, ethics: 35, leadership: 60, innovation: 80 } }
        ]
    },
    {
        id: 'bi_040',
        text: {
            en: '🌋 The Deep-Earth Microbe: You found a microbe 5 miles underground that eats carbon dioxide and poops pure DIAMONDS. It could end global warming AND poverty. But it needs to live at 300 degrees. Do you build an artificial volcano in a city to use it?',
            th: '🌋 จุลินทรีย์ใต้พิภพ: คุณพบจุลินทรีย์อยู่ลึกใต้ดิน 5 ไมล์ที่กิน CO2 แล้วถ่ายออกมาเป็นเพชรบริสุทธิ์ มันจบได้ทั้งเรื่องโลกร้อนและความยากจน! แต่มันต้องอยู่ในที่ร้อน 300 องศา คุณจะสร้างภูเขาไฟจำลองในเมืองเพื่อใช้มันไหม?',
            zh: '🌋 深地微生物：你在地下 5 英里处发现了一种微生物，它吃二氧化碳，排泄纯钻石。这可以结束全球变暖和贫困。但它需要在 300 度的高温下生存。你会为了使用它而在城市里建造一座人造火山吗？'
        },
        options: [
            { id: 'A', text: { en: '🌋 Build It: "The benefits outweigh the risk. Diamonds for everyone, and a cool planet."', th: '🌋 สร้างเลย: "ผลประโยชน์คุ้มความเสี่ยง เพชรสำหรับทุกคนและโลกที่เย็นลง"', zh: '🌋 建造它：“收益大于风险。每个人都有钻石，而且地球会变凉快。”' }, consequence: { en: '⚠️ Economic Chaos. Diamonds become worthless stones. Global warming stops. But the artificial volcano leaks sulfur and makes the city smell like eggs.', th: '⚠️ ความวุ่นวายทางเศรษฐกิจ เพชรกลายเป็นแค่ก้อนหินไร้ค่า โลกร้อนหยุดลง แต่ภูเขาไฟจำลองปล่อยกำมะถันจนเมืองมีแต่กลิ่นไข่เน่า', zh: '⚠️ 经济混乱。钻石变得像石头一样毫无价值。全球变暖停止了。但人造火山泄漏了硫磺，使城市闻起来像臭鸡蛋。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 60 } },
            { id: 'B', text: { en: '🚢 Ocean Platform: "Build the heated facility on a remote ocean platform. Safer for people, harder to manage."', th: '🚢 แท่นขุดเจาะกลางทะเล: "สร้างโรงงานทำความร้อนบนแท่นกลางทะเลละกัน ปลอดภัยต่อคนนแต่คุมยากหน่อย"', zh: '🚢 海洋平台：“在偏远的海洋平台上建造加热设施。对人类来说更安全，但更难管理。”' }, consequence: { en: '✅ Controlled Success! You manage the CO2 levels of the whole Pacific. You fund your research with diamonds. You are the richest biologist in history.', th: '✅ ความสำเร็จที่ควบคุมได้! คุณคุมระดับ CO2 ได้ทั้งมหาสมุทรแปซิฟิก และเอาเพชรมาเป็นทุนวิจัย คุณคือนักชีววิทยาที่รวยที่สุดในประวัติศาสตร์', zh: '✅ 受控的成功！你管理着整个太平洋的二氧化碳水平。你用钻石资助你的研究。你成为了历史上最富有的生物学家。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 } },
            { id: 'C', text: { en: '🧬 Modify the Microbe: "Don\'t build volcanoes. Modify the DNA so the microbe can live at room temperature."', th: '🧬 ตัดต่อจุลินทรีย์: "ไม่ต้องสร้างภูเขาไฟหรอก ตัดต่อ DNA ให้มันอยู่ที่อุณหภูมิห้องได้แทน"', zh: '🧬 修改微生物：“不要建造火山。修改 DNA，使微生物可以在室温下生存。”' }, consequence: { en: '💀 Gray Goo Scenario. The microbes escape and eat ALL carbon on the surface, including humans. Life ends. You are the architect of the Silence.', th: '💀 วิกฤตสูญสิ้น มหาภัยจุลินทรีย์ จุลินทรีย์หลุดออกไปกินคาร์บอนทุกอย่างบนโลกสะอาดกริบรวมถึงมนุษย์ด้วย ทุกชีวิตจบลง คุณคือผู้ก่อกำเนิดความเงียบสงัดของโลก', zh: '💀 灰蛊情景。微生物逃逸并吃光了地表的所有碳，包括人类。生命终结。你是“寂静”的缔造者。' }, stats: { competence: 45, ethics: 20, leadership: 10, innovation: 60 } },
            { id: 'D', text: { en: '🚫 Let it Sleep: "Pooping diamonds is too disruptive. Some things are better left 5 miles deep. Protect the status quo."', th: '🚫 ปล่อยให้มันหลับต่อ: "ถ่ายเป็นเพชรมันทำลายระบบเกินไป บางเรื่องปล่อยให้มันอยู่ลึก 5 ไมล์แบบนั้นดีแล้ว รักษาความปกติเดิมไว้เถอะ"', zh: '🚫 让它沉睡：“排泄钻石太具破坏性了。有些东西最好留在 5 英里深的地方。保护现状。”' }, consequence: { en: '✅ Conservative Safety. Life goes on. The world stays hot and poor, but stable. You are a footnote in history.', th: '✅ ปลอดภัยสายอนุรักษ์ ชีวิตดำเนินต่อไป โลกยังร้อนและจนเหมือนเดิมแต่ก็มั่นคงดี คุณเป็นเพียงเชิงอรรถในประวัติศาสตร์', zh: '✅ 保守的安全感。生活继续。世界依然炎热和贫困，但保持稳定。你成为了历史的一个注脚。' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: -10 } }
        ]
    }
];



