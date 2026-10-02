// Librarian Career Questions
// Comprehensive set: 50 detailed questions covering all aspects of librarianship

export const librarianQuestions = [
 // SECTION 1: INTELLECTUAL FREEDOM & COLLECTION MANAGEMENT (Questions 1-10)

 {
 id: 'li_001',
 text: {
 en: '📚 A group of parents has organized a petition with 150 signatures demanding removal of a young adult novel from your library, claiming it contains inappropriate content. The book has won the Newbery Medal and addresses mental health, identity, and family dysfunction.',
 th: '📚 กลุ่มผู้ปกครองได้จัดทำคำร้องพร้อมลายเซ็น 150 รายการเรียกร้องให้นำนิยายสำหรับเยาวชนออกจากห้องสมุด โดยอ้างว่ามีเนื้อหาไม่เหมาะสม หนังสือเล่มนี้ได้รับรางวัล Newbery Medal และกล่าวถึงสุขภาพจิต เอกลักษณ์ และความผิดปกติของครอบครัว',
 zh: '📚 一群家长组织了一份有150个签名的请愿书，要求从图书馆移除一本青少年小说，声称它包含不当内容。这本书赢得了纽伯瑞奖，并讨论心理健康、身份认同和家庭功能障碍。'
 },
 options: [
 { id: 'A', text: { en: '📋 Implement formal reconsideration process through diverse review committee with educators, librarians, community members, and teens to make evidence-based decision', th: '📋 ดำเนินการกระบวนการพิจารณาใหม่ผ่านคณะกรรมการที่หลากหลายเพื่อตัดสินใจโดยใช้หลักฐาน', zh: '📋 通过多元化审查委员会实施正式重新审议程序做出基于证据的决策' }, consequence: { en: '✅ Professional integrity maintained! Transparent process respected even by those who disagree. Intellectual freedom upheld.', th: '✅ รักษาความซื่อสัตย์ทางวิชาชีพ! กระบวนการโปร่งใสได้รับความเคารพ', zh: '✅ 保持专业诚信！透明程序受到尊重。' }, stats: { competence: 30, ethics: 35, leadership: 35, innovation: 20 } },
 { id: 'B', text: { en: '🗑️ Remove the book immediately to appease parents and avoid negative publicity', th: '🗑️ นำหนังสือออกทันทีเพื่อเอาใจผู้ปกครอง', zh: '🗑️ 立即移除书籍以安抚家长' }, consequence: { en: '😱 Professional credibility destroyed! ALA condemns censorship, teens protest, library becomes known for censorship.', th: '😱 ความน่าเชื่อถือถูกทำลาย! สมาคมห้องสมุดประณามการเซ็นเซอร์', zh: '😱 专业信誉被摧毁！ALA谴责审查。' }, stats: { competence: -20, ethics: -45, leadership: -35, innovation: -25 } },
 { id: 'C', text: { en: '📰 Organize public forum on intellectual freedom, inviting author, literacy experts, and mental health professionals', th: '📰 จัดเวทีสาธารณะเกี่ยวกับเสรีภาพทางปัญญา เชิญผู้เขียนและผู้เชี่ยวชาญ', zh: '📰 组织关于学术自由的公共论坛，邀请作者和专家' }, consequence: { en: '✅ Transformative community education! Discussion elevates understanding, teen engagement increases, library becomes model.', th: '✅ การศึกษาชุมชนที่เปลี่ยนแปลง! การมีส่วนร่วมของวัยรุ่นเพิ่มขึ้น', zh: '✅ 变革性社区教育！青少年参与增加。' }, stats: { competence: 35, ethics: 40, leadership: 45, innovation: 35 } },
 { id: 'D', text: { en: '🔒 Create restricted access section requiring parental permission for minors under 16', th: '🔒 สร้างส่วนการเข้าถึงที่จำกัดต้องการใบอนุญาตจากผู้ปกครอง', zh: '🔒 创建需要家长许可的限制访问区域' }, consequence: { en: '⚠️ Ethically problematic! Institutionalized stigmatization, teens from restrictive families denied access.', th: '⚠️ มีปัญหาทางจริยธรรม! วัยรุ่นถูกปฏิเสธการเข้าถึง', zh: '⚠️ 道德上有问题！青少年被拒绝访问。' }, stats: { competence: 5, ethics: -10, leadership: 10, innovation: 5 } }
 ]
 },

 {
 id: 'li_002',
 text: {
 en: '💰 Severe budget cuts of 35% force you to eliminate nearly half of your subscription databases and digital resources. Your library serves K-12 students, university researchers, job seekers, and general readers.',
 th: '💰 การลดงบประมาณ 35% บังคับให้คุณตัดฐานข้อมูลและทรัพยากรดิจิทัลเกือบครึ่ง ห้องสมุดให้บริการนักเรียน นักวิจัย ผู้หางาน และผู้อ่านทั่วไป',
 zh: '💰 35%的预算削减迫使你取消近一半的数据库和数字资源。图书馆服务于学生、研究人员、求职者和普通读者。'
 },
 options: [
 { id: 'A', text: { en: '📊 Conduct comprehensive usage analytics study with cost-per-use metrics and community needs assessment to make evidence-based prioritization', th: '📊 ดำเนินการศึกษาการวิเคราะห์การใช้งานอย่างครอบคลุมเพื่อตัดสินใจจัดลำดับความสำคัญ', zh: '📊 进行全面使用分析研究做出基于证据的优先级决策' }, consequence: { en: '✅ Strategic excellence! Data-driven approach maintains critical services, provides transparent justification.', th: '✅ ความเป็นเลิศเชิงกลยุทธ์! รักษาบริการที่สำคัญ', zh: '✅ 战略卓越！保持关键服务。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 25 } },
 { id: 'B', text: { en: '✂️ Cut 35% equally across all categories to be fair', th: '✂️ ตัด 35% อย่างเท่าๆ กันในทุกหมวดหมู่', zh: '✂️ 在所有类别平均削减35%' }, consequence: { en: '😰 Inefficient disaster! Critical databases lose access while unused resources continue. Complaints skyrocket.', th: '😰 ภัยพิบัติที่ไม่มีประสิทธิภาพ! ข้อร้องเรียนพุ่งสูง', zh: '😰 效率低下的灾难！投诉激增。' }, stats: { competence: -25, ethics: -15, leadership: -20, innovation: -30 } },
 { id: 'C', text: { en: '🤝 Launch community engagement campaign with surveys and focus groups to collaboratively determine priorities', th: '🤝 เปิดตัวแคมเปญการมีส่วนร่วมของชุมชนเพื่อกำหนดลำดับความสำคัญร่วมกัน', zh: '🤝 发起社区参与活动协作确定优先事项' }, consequence: { en: '✅ Exemplary participatory leadership! Community feels heard, builds long-term support.', th: '✅ ภาวะผู้นำแบบมีส่วนร่วมที่เป็นแบบอย่าง!', zh: '✅ 典范的参与式领导！' }, stats: { competence: 30, ethics: 35, leadership: 40, innovation: 30 } },
 { id: 'D', text: { en: '📚 Prioritize print materials, eliminating digital resources first since libraries are about books', th: '📚 จัดลำดับความสำคัญสื่อสิ่งพิมพ์ ตัดทรัพยากรดิจิทัลก่อน', zh: '📚 优先保留印刷材料，首先取消数字资源' }, consequence: { en: '⚠️ Outdated philosophy! Remote learners and digital users lose critical access. Usage plummets.', th: '⚠️ ปรัชญาที่ล้าสมัย! สถิติการใช้งานลดลง', zh: '⚠️ 过时的理念！使用率暴跌。' }, stats: { competence: -15, ethics: 10, leadership: -5, innovation: -35 } }
 ]
 },

 {
 id: 'li_003',
 text: {
 en: '🏛️ Your library board demands you increase performance metrics and circulation numbers to justify next year\'s budget. However, many valuable library services like reference consultations and program attendance don\'t translate into circulation statistics.',
 th: '🏛️ คณะกรรมการห้องสมุดเรียกร้องให้คุณเพิ่มเมตริกประสิทธิภาพและจำนวนการยืมเพื่อพิสูจน์งบประมาณปีหน้า อย่างไรก็ตาม บริการห้องสมุดที่มีคุณค่ามากมายไม่แปลเป็นสถิติการยืม',
 zh: '🏛️ 图书馆董事会要求你提高绩效指标和流通数字以证明明年预算。然而，许多有价值的服务如参考咨询不能转化为流通统计。'
 },
 options: [
 { id: 'A', text: { en: '📈 Develop comprehensive impact metrics measuring program attendance, reference questions, digital engagement, and community outcomes', th: '📈 พัฒนาเมตริกผลกระทบที่ครอบคลุมวัดการเข้าร่วมโปรแกรม คำถามอ้างอิง และผลลัพธ์ชุมชน', zh: '📈 开发全面的影响指标衡量项目参与、参考问题和社区成果' }, consequence: { en: '✅ Transformed board understanding! New metrics reveal library\'s true value, budget secured with expanded mandate.', th: '✅ เปลี่ยนความเข้าใจของคณะกรรมการ! งบประมาณได้รับการรักษา', zh: '✅ 改变了董事会的理解！预算得到保障。' }, stats: { competence: 35, ethics: 30, leadership: 35, innovation: 40 } },
 { id: 'B', text: { en: '📖 Focus on increasing circulation through popular bestsellers and trending materials to boost numbers', th: '📖 มุ่งเน้นเพิ่มการยืมผ่านหนังสือขายดียอดนิยม', zh: '📖 专注于通过流行畅销书增加流通' }, consequence: { en: '⚠️ Short-term gains, long-term loss! Reference services decline, educational mission suffers, library becomes bookstore.', th: '⚠️ ได้ผลระยะสั้น เสียระยะยาว! บริการอ้างอิงลดลง', zh: '⚠️ 短期收益，长期损失！参考服务下降。' }, stats: { competence: 10, ethics: -15, leadership: 5, innovation: -20 } },
 { id: 'C', text: { en: '🎓 Present board with comprehensive annual report showing qualitative community stories alongside quantitative data', th: '🎓 นำเสนอรายงานประจำปีที่ครอบคลุมแสดงเรื่องราวชุมชนควบคู่กับข้อมูลเชิงปริมาณ', zh: '🎓 向董事会提交综合年度报告展示社区故事和定量数据' }, consequence: { en: '✅ Compelling narrative wins support! Board sees human impact beyond numbers, advocates for library funding.', th: '✅ เรื่องราวที่น่าสนใจได้รับการสนับสนุน! คณะกรรมการสนับสนุนเงินทุน', zh: '✅ 引人入胜的故事赢得支持！' }, stats: { competence: 30, ethics: 35, leadership: 30, innovation: 25 } },
 { id: 'D', text: { en: '📉 Accept metrics-driven approach and cut underperforming programs regardless of community value', th: '📉 ยอมรับแนวทางที่ขับเคลื่อนด้วยเมตริกและตัดโปรแกรมที่มีประสิทธิภาพต่ำ', zh: '📉 接受指标驱动方法削减表现不佳的项目' }, consequence: { en: '😰 Community trust destroyed! Vulnerable populations lose services, library becomes irrelevant to those who need it most.', th: '😰 ความไว้วางใจของชุมชนถูกทำลาย! ประชากรที่เปราะบางสูญเสียบริการ', zh: '😰 社区信任被摧毁！弱势群体失去服务。' }, stats: { competence: -20, ethics: -30, leadership: -25, innovation: -15 } }
 ]
 },

 {
 id: 'li_004',
 text: {
 en: '🔍 A local police detective arrives with a subpoena demanding patron borrowing records for someone suspected of planning a crime. No warrant has been issued, and the request seems like a fishing expedition.',
 th: '🔍 นักสืบตำรวจท้องถิ่นมาถึงพร้อมหมายศาลเรียกร้องบันทึกการยืมของผู้ใช้บริการที่สงสัยว่าวางแผนก่ออาชญากรรม ไม่มีการออกหมาย และคำขอดูเหมือนการสำรวจหาข้อมูล',
 zh: '🔍 当地警探带着传票要求借阅记录，怀疑某人计划犯罪。没有搜查令，请求似乎是在探查。'
 },
 options: [
 { id: 'A', text: { en: '📋 Politely decline and explain library confidentiality policy, offering to comply only with proper court order specifying individual records', th: '📋 ปฏิเสธอย่างสุภาพและอธิบายนโยบายการรักษาความลับ เสนอที่จะปฏิบัติตามคำสั่งศาลที่เหมาะสมเท่านั้น', zh: '📋 礼貌拒绝并解释保密政策，只在有适当法院命令时配合' }, consequence: { en: '✅ Professional standards upheld! Patron privacy protected, library reputation for confidentiality strengthened.', th: '✅ รักษามาตรฐานวิชาชีพ! ความเป็นส่วนตัวของผู้ใช้ได้รับการปกป้อง', zh: '✅ 专业标准得到维护！读者隐私受保护。' }, stats: { competence: 30, ethics: 45, leadership: 30, innovation: 15 } },
 { id: 'B', text: { en: '🚔 Cooperate fully with police to help prevent potential crime, providing all requested records', th: '🚔 ให้ความร่วมมืออย่างเต็มที่กับตำรวจเพื่อช่วยป้องกันอาชญากรรม', zh: '🚔 全力配合警方防止潜在犯罪' }, consequence: { en: '😱 Serious legal and ethical violation! Patron trust destroyed, potential lawsuit, ALA censure, staff morale collapses.', th: '😱 การละเมิดกฎหมายและจริยธรรมร้ายแรง! ความไว้วางใจถูกทำลาย', zh: '😱 严重的法律和道德违规！读者信任被摧毁。' }, stats: { competence: -25, ethics: -50, leadership: -30, innovation: -20 } },
 { id: 'C', text: { en: '⚖️ Consult with library attorney immediately to determine proper legal response and document entire interaction', th: '⚖️ ปรึกษาทนายความห้องสมุดทันทีเพื่อกำหนดการตอบสนองทางกฎหมายที่เหมาะสม', zh: '⚖️ 立即咨询图书馆律师确定适当的法律回应' }, consequence: { en: '✅ Legally sound approach! Attorney guidance ensures compliance with law while protecting patron rights.', th: '✅ แนวทางที่ถูกต้องตามกฎหมาย! คำแนะนำของทนายความรับรองการปฏิบัติตามกฎหมาย', zh: '✅ 法律上合理的方法！律师指导确保合规。' }, stats: { competence: 35, ethics: 35, leadership: 30, innovation: 20 } },
 { id: 'D', text: { en: '🤐 Claim records don\'t exist or have been purged to protect patron without technically lying', th: '🤐 อ้างว่าบันทึกไม่มีอยู่หรือถูกลบเพื่อปกป้องผู้ใช้', zh: '🤐 声称记录不存在或已被清除以保护读者' }, consequence: { en: '⚠️ Dangerous deception! If discovered, criminal obstruction charges possible, library credibility destroyed.', th: '⚠️ การหลอกลวงที่อันตราย! หากถูกค้นพบ อาจถูกตั้งข้อหาขัดขวาง', zh: '⚠️ 危险的欺骗！如果被发现，可能面临妨碍司法指控。' }, stats: { competence: -15, ethics: -20, leadership: -25, innovation: -10 } }
 ]
 },

 {
 id: 'li_005',
 text: {
 en: '👴 An elderly patron with early-stage dementia frequently forgets she has already borrowed books and becomes upset when the system shows fines or limits. Her family insists she can still use the library independently.',
 th: '👴 ผู้ใช้บริการสูงอายุที่มีภาวะสมองเสื่อมระยะแรกมักลืมว่าเธอยืมหนังสือแล้วและอารมณ์เสียเมื่อระบบแสดงค่าปรับหรือจำกัด ครอบครัวยืนยันว่าเธอยังสามารถใช้ห้องสมุดได้อย่างอิสระ',
 zh: '👴 一位患有早期痴呆症的老年读者经常忘记她已借过书，当系统显示罚款或限制时会不安。她的家人坚持她仍然可以独立使用图书馆。'
 },
 options: [
 { id: 'A', text: { en: '💝 Create accommodating system: waive fines, extend limits, assign consistent staff contact, maintain patron dignity while providing extra support', th: '💝 สร้างระบบที่อำนวยความสะดวก: ยกเว้นค่าปรับ ขยายวงเงิน มอบหมายพนักงานติดต่อที่สม่ำเสมอ รักษาศักดิ์ศรีของผู้ใช้', zh: '💝 创建便利系统：免除罚款、延长限制、分配固定员工联系人，维护读者尊严' }, consequence: { en: '✅ Exemplary accessibility service! Patron continues enjoying library, family grateful, staff trained in dementia support.', th: '✅ บริการการเข้าถึงที่เป็นแบบอย่าง! ผู้ใช้ยังคงเพลิดเพลินกับห้องสมุด', zh: '✅ 典范的无障碍服务！读者继续享受图书馆。' }, stats: { competence: 30, ethics: 45, leadership: 35, innovation: 30 } },
 { id: 'B', text: { en: '📋 Require family member to accompany patron and co-sign on account for all transactions', th: '📋 กำหนดให้สมาชิกในครอบครัวมาพร้อมและลงนามร่วมในบัญชีสำหรับธุรกรรมทั้งหมด', zh: '📋 要求家庭成员陪同并共同签署所有交易' }, consequence: { en: '⚠️ Dignity compromised! Patron feels infantilized, family burden increased, potential ADA concerns.', th: '⚠️ ศักดิ์ศรีถูกกระทบ! ผู้ใช้รู้สึกถูกปฏิบัติเหมือนเด็ก', zh: '⚠️ 尊严受损！读者感觉被当作孩子对待。' }, stats: { competence: 10, ethics: -15, leadership: 5, innovation: -10 } },
 { id: 'C', text: { en: '🤝 Work with family and patron to develop personalized service plan that respects autonomy while addressing practical concerns', th: '🤝 ทำงานร่วมกับครอบครัวและผู้ใช้เพื่อพัฒนาแผนบริการส่วนบุคคลที่เคารพความเป็นอิสระ', zh: '🤝 与家人和读者合作制定个性化服务计划，尊重自主权' }, consequence: { en: '✅ Person-centered excellence! Collaborative approach honors patron agency, family partnership strengthened.', th: '✅ ความเป็นเลิศที่เน้นบุคคล! แนวทางร่วมมือเคารพความเป็นตัวแทนของผู้ใช้', zh: '✅ 以人为本的卓越！协作方法尊重读者自主权。' }, stats: { competence: 35, ethics: 40, leadership: 35, innovation: 25 } },
 { id: 'D', text: { en: '🚫 Suggest patron might be better served at senior center with supervised activities', th: '🚫 แนะนำว่าผู้ใช้อาจได้รับบริการที่ดีกว่าที่ศูนย์ผู้สูงอายุ', zh: '🚫 建议读者可能在老年中心得到更好的服务' }, consequence: { en: '😱 Discriminatory exclusion! Potential ADA violation, community outrage, library reputation damaged.', th: '😱 การกีดกันที่เลือกปฏิบัติ! อาจละเมิด ADA ชุมชนโกรธ', zh: '😱 歧视性排斥！可能违反ADA，社区愤怒。' }, stats: { competence: -30, ethics: -45, leadership: -35, innovation: -25 } }
 ]
 },

 {
 id: 'li_006',
 text: {
 en: '💻 Your library has received a major technology grant to create a digital literacy lab. However, your community has significant digital divide issues with many seniors and low-income residents who fear technology.',
 th: '💻 ห้องสมุดของคุณได้รับทุนเทคโนโลยีจำนวนมากเพื่อสร้างห้องปฏิบัติการรู้เท่าทันดิจิทัล อย่างไรก็ตาม ชุมชนมีปัญหาช่องว่างทางดิจิทัลมากกับผู้สูงอายุและผู้มีรายได้น้อยที่กลัวเทคโนโลยี',
 zh: '💻 图书馆收到一笔重大技术拨款来创建数字素养实验室。然而，社区有严重的数字鸿沟问题，许多老年人和低收入居民害怕技术。'
 },
 options: [
 { id: 'A', text: { en: '🎓 Design inclusive program with peer mentors, multi-generational learning, beginner-friendly curriculum, and one-on-one support for hesitant learners', th: '🎓 ออกแบบโปรแกรมที่ครอบคลุมด้วยที่ปรึกษาเพื่อน การเรียนรู้ข้ามรุ่น หลักสูตรที่เป็นมิตรกับผู้เริ่มต้น', zh: '🎓 设计包容性项目，有同伴导师、跨代学习、适合初学者的课程' }, consequence: { en: '✅ Transformative community impact! Digital divide narrowed, seniors gain confidence, intergenerational bonds formed.', th: '✅ ผลกระทบชุมชนที่เปลี่ยนแปลง! ช่องว่างทางดิจิทัลแคบลง', zh: '✅ 变革性社区影响！数字鸿沟缩小。' }, stats: { competence: 35, ethics: 40, leadership: 40, innovation: 45 } },
 { id: 'B', text: { en: '🖥️ Focus on cutting-edge technology and advanced programs to attract younger tech-savvy users', th: '🖥️ มุ่งเน้นเทคโนโลยีล้ำสมัยและโปรแกรมขั้นสูงเพื่อดึงดูดผู้ใช้รุ่นใหม่', zh: '🖥️ 专注于尖端技术和高级项目吸引年轻技术用户' }, consequence: { en: '⚠️ Deepened digital divide! Grant misses community need, vulnerable populations further marginalized.', th: '⚠️ ช่องว่างทางดิจิทัลลึกขึ้น! ประชากรที่เปราะบางถูกกีดกันมากขึ้น', zh: '⚠️ 加深数字鸿沟！弱势群体被进一步边缘化。' }, stats: { competence: 5, ethics: -25, leadership: -10, innovation: 15 } },
 { id: 'C', text: { en: '🤝 Partner with senior centers, social services, and community organizations for outreach and culturally appropriate training', th: '🤝 ร่วมมือกับศูนย์ผู้สูงอายุ บริการสังคม และองค์กรชุมชนสำหรับการเข้าถึงและการฝึกอบรมที่เหมาะสมทางวัฒนธรรม', zh: '🤝 与老年中心、社会服务和社区组织合作进行外展和文化适宜的培训' }, consequence: { en: '✅ Strategic partnership success! Programs reach underserved populations, community organizations amplify library impact.', th: '✅ ความสำเร็จของความร่วมมือเชิงกลยุทธ์! โปรแกรมเข้าถึงประชากรที่ขาดการบริการ', zh: '✅ 战略合作成功！项目覆盖服务不足的人群。' }, stats: { competence: 35, ethics: 35, leadership: 40, innovation: 35 } },
 { id: 'D', text: { en: '📋 Offer standard computer classes and let interested people sign up voluntarily', th: '📋 เสนอคลาสคอมพิวเตอร์มาตรฐานและให้ผู้สนใจลงทะเบียนโดยสมัครใจ', zh: '📋 提供标准电脑课程让有兴趣的人自愿报名' }, consequence: { en: '⚠️ Missed opportunity! Only already-motivated users participate, grant fails to address core community need.', th: '⚠️ พลาดโอกาส! เฉพาะผู้ใช้ที่มีแรงจูงใจเท่านั้นที่เข้าร่วม', zh: '⚠️ 错失机会！只有已有动力的用户参与。' }, stats: { competence: 5, ethics: 0, leadership: -5, innovation: -15 } }
 ]
 },

 {
 id: 'li_007',
 text: {
 en: '🏠 A homeless man spends most days in the library. He is clean, follows rules, and uses resources appropriately. However, some patrons have complained about his presence, saying he makes them uncomfortable.',
 th: '🏠 ชายไร้บ้านใช้เวลาส่วนใหญ่ในห้องสมุด เขาสะอาด ปฏิบัติตามกฎ และใช้ทรัพยากรอย่างเหมาะสม อย่างไรก็ตาม ผู้ใช้บางคนร้องเรียนเกี่ยวกับการปรากฏตัวของเขา',
 zh: '🏠 一个无家可归的人每天大部分时间在图书馆。他很干净，遵守规则，适当使用资源。然而，一些读者投诉他的存在让他们不舒服。'
 },
 options: [
 { id: 'A', text: { en: '📚 Affirm library as public space for all, train staff on working with homeless patrons, connect him with social services if interested', th: '📚 ยืนยันห้องสมุดเป็นพื้นที่สาธารณะสำหรับทุกคน ฝึกอบรมพนักงานเกี่ยวกับการทำงานกับผู้ใช้ไร้บ้าน', zh: '📚 确认图书馆是所有人的公共空间，培训员工与无家可归者打交道' }, consequence: { en: '✅ Core library values upheld! Equal access maintained, staff better equipped, patron eventually finds housing through library connections.', th: '✅ รักษาค่านิยมหลักของห้องสมุด! การเข้าถึงที่เท่าเทียมได้รับการรักษา', zh: '✅ 核心图书馆价值观得到维护！平等访问得到维护。' }, stats: { competence: 30, ethics: 45, leadership: 35, innovation: 25 } },
 { id: 'B', text: { en: '🚫 Create new rules about time limits or sleeping that would effectively exclude him', th: '🚫 สร้างกฎใหม่เกี่ยวกับการจำกัดเวลาหรือการนอนที่จะกีดกันเขาอย่างมีประสิทธิภาพ', zh: '🚫 创建关于时间限制或睡觉的新规则有效地排斥他' }, consequence: { en: '😱 Discriminatory targeting! Civil liberties concerns, media coverage of library excluding homeless, community divided.', th: '😱 การกำหนดเป้าหมายที่เลือกปฏิบัติ! ข้อกังวลเรื่องสิทธิพลเมือง', zh: '😱 歧视性针对！公民自由问题，媒体报道图书馆排斥无家可归者。' }, stats: { competence: -20, ethics: -45, leadership: -30, innovation: -20 } },
 { id: 'C', text: { en: '🤝 Partner with social services to provide on-site resources while maintaining welcoming environment for all', th: '🤝 ร่วมมือกับบริการสังคมเพื่อให้ทรัพยากรในสถานที่ขณะรักษาสภาพแวดล้อมที่เป็นมิตรสำหรับทุกคน', zh: '🤝 与社会服务合作提供现场资源同时维护对所有人友好的环境' }, consequence: { en: '✅ Holistic community service! Library becomes hub for social services, homeless patrons get needed support, all patrons benefit.', th: '✅ บริการชุมชนแบบองค์รวม! ห้องสมุดกลายเป็นศูนย์กลางบริการสังคม', zh: '✅ 全面的社区服务！图书馆成为社会服务中心。' }, stats: { competence: 35, ethics: 40, leadership: 40, innovation: 40 } },
 { id: 'D', text: { en: '💬 Explain to complaining patrons that the homeless man has equal rights to library use', th: '💬 อธิบายให้ผู้ใช้ที่ร้องเรียนว่าชายไร้บ้านมีสิทธิเท่าเทียมในการใช้ห้องสมุด', zh: '💬 向投诉的读者解释无家可归者有平等使用图书馆的权利' }, consequence: { en: '✅ Appropriate response! Some patrons educated, others leave but library maintains ethical stance.', th: '✅ การตอบสนองที่เหมาะสม! ผู้ใช้บางคนได้รับการศึกษา', zh: '✅ 适当的回应！一些读者受到教育。' }, stats: { competence: 25, ethics: 35, leadership: 25, innovation: 10 } }
 ]
 },

 {
 id: 'li_008',
 text: {
 en: '📱 Parents demand you install filtering software that blocks all social media, gaming sites, and"inappropriate content"on computers used by minors, citing concerns about cyberbullying and online predators.',
 th: '📱 ผู้ปกครองเรียกร้องให้คุณติดตั้งซอฟต์แวร์กรองที่บล็อกโซเชียลมีเดีย เว็บเกม และ"เนื้อหาไม่เหมาะสม"ทั้งหมดบนคอมพิวเตอร์ที่ใช้โดยผู้เยาว์',
 zh: '📱 家长要求你在未成年人使用的电脑上安装过滤软件阻止所有社交媒体、游戏网站和"不当内容"。'
 },
 options: [
 { id: 'A', text: { en: '📚 Explain balanced approach: CIPA-compliant filtering for illegal content, but maintain access to educational and social resources while teaching digital citizenship', th: '📚 อธิบายแนวทางที่สมดุล: การกรองที่สอดคล้องกับ CIPA สำหรับเนื้อหาผิดกฎหมาย แต่รักษาการเข้าถึงทรัพยากรการศึกษาและสังคม', zh: '📚 解释平衡方法：符合CIPA的非法内容过滤，但保持对教育和社交资源的访问' }, consequence: { en: '✅ Balanced approach accepted! Parents understand library\'s educational role, digital literacy programs address safety concerns.', th: '✅ แนวทางที่สมดุลได้รับการยอมรับ! ผู้ปกครองเข้าใจบทบาทการศึกษาของห้องสมุด', zh: '✅ 平衡方法被接受！家长理解图书馆的教育角色。' }, stats: { competence: 35, ethics: 35, leadership: 30, innovation: 25 } },
 { id: 'B', text: { en: '🔒 Install comprehensive filtering to satisfy parents and avoid controversy', th: '🔒 ติดตั้งการกรองอย่างครอบคลุมเพื่อตอบสนองผู้ปกครองและหลีกเลี่ยงข้อโต้แย้ง', zh: '🔒 安装全面过滤以满足家长并避免争议' }, consequence: { en: '😱 Overblocking disaster! Legitimate educational resources blocked, teens can\'t research LGBTQ+ topics, health info, or current events.', th: '😱 ภัยพิบัติการบล็อกมากเกินไป! ทรัพยากรการศึกษาถูกบล็อก', zh: '😱 过度阻止灾难！合法教育资源被阻止。' }, stats: { competence: -15, ethics: -30, leadership: -20, innovation: -25 } },
 { id: 'C', text: { en: '🎓 Offer digital literacy and online safety programs for parents and teens together, addressing concerns through education not restriction', th: '🎓 เสนอโปรแกรมความรู้ดิจิทัลและความปลอดภัยออนไลน์สำหรับผู้ปกครองและวัยรุ่นด้วยกัน', zh: '🎓 为家长和青少年提供数字素养和在线安全项目，通过教育而非限制解决问题' }, consequence: { en: '✅ Empowering education! Parents and teens develop digital skills together, library becomes trusted resource for online safety.', th: '✅ การศึกษาที่ให้อำนาจ! ผู้ปกครองและวัยรุ่นพัฒนาทักษะดิจิทัลด้วยกัน', zh: '✅ 赋权教育！家长和青少年一起发展数字技能。' }, stats: { competence: 35, ethics: 35, leadership: 35, innovation: 40 } },
 { id: 'D', text: { en: '🚫 Refuse all filtering and tell parents to supervise their own children', th: '🚫 ปฏิเสธการกรองทั้งหมดและบอกผู้ปกครองให้ดูแลลูกของตัวเอง', zh: '🚫 拒绝所有过滤并告诉家长监督自己的孩子' }, consequence: { en: '⚠️ Relationship damaged! Parents feel dismissed, may organize against library, CIPA compliance questionable.', th: '⚠️ ความสัมพันธ์เสียหาย! ผู้ปกครองรู้สึกถูกปฏิเสธ', zh: '⚠️ 关系受损！家长感觉被忽视。' }, stats: { competence: 10, ethics: 15, leadership: -15, innovation: 5 } }
 ]
 },

 {
 id: 'li_009',
 text: {
 en: '🎭 A controversial political speaker has requested to use your library meeting room. Their views are considered hate speech by many community members, but do not meet the legal definition of incitement.',
 th: '🎭 วิทยากรการเมืองที่ถกเถียงขอใช้ห้องประชุมห้องสมุดของคุณ มุมมองของพวกเขาถูกมองว่าเป็นคำพูดแห่งความเกลียดชังโดยสมาชิกชุมชนหลายคน แต่ไม่ตรงกับคำจำกัดความทางกฎหมายของการยุยง',
 zh: '🎭 一位有争议的政治演讲者要求使用图书馆会议室。他们的观点被许多社区成员认为是仇恨言论，但不符合煽动的法律定义。'
 },
 options: [
 { id: 'A', text: { en: '📋 Allow booking under content-neutral policy, but also invite counter-programming and ensure robust discussion of opposing views', th: '📋 อนุญาตการจองภายใต้นโยบายเป็นกลางทางเนื้อหา แต่เชิญโปรแกรมโต้แย้งและรับรองการอภิปรายมุมมองตรงข้าม', zh: '📋 在内容中立政策下允许预订，但也邀请反对节目并确保观点讨论' }, consequence: { en: '✅ First Amendment upheld with balance! Library becomes forum for democratic discourse, community engages with difficult topics.', th: '✅ รักษาการแก้ไขเพิ่มเติมครั้งแรกอย่างสมดุล! ห้องสมุดกลายเป็นเวทีสำหรับวาทกรรมประชาธิปไตย', zh: '✅ 第一修正案得到平衡维护！图书馆成为民主话语的论坛。' }, stats: { competence: 30, ethics: 35, leadership: 35, innovation: 25 } },
 { id: 'B', text: { en: '🚫 Deny request to avoid community conflict and protect library image', th: '🚫 ปฏิเสธคำขอเพื่อหลีกเลี่ยงความขัดแย้งในชุมชนและปกป้องภาพลักษณ์ห้องสมุด', zh: '🚫 拒绝请求以避免社区冲突并保护图书馆形象' }, consequence: { en: '😱 Viewpoint discrimination lawsuit! Library loses case, forced to pay damages, professional reputation damaged.', th: '😱 คดีการเลือกปฏิบัติทางมุมมอง! ห้องสมุดแพ้คดี ถูกบังคับให้จ่ายค่าเสียหาย', zh: '😱 观点歧视诉讼！图书馆败诉，被迫赔偿。' }, stats: { competence: -25, ethics: -30, leadership: -25, innovation: -20 } },
 { id: 'C', text: { en: '⚖️ Consult with library attorney and review meeting room policy to ensure content-neutral application before deciding', th: '⚖️ ปรึกษาทนายความห้องสมุดและตรวจสอบนโยบายห้องประชุมเพื่อให้แน่ใจว่าใช้แบบเป็นกลางทางเนื้อหาก่อนตัดสินใจ', zh: '⚖️ 咨询图书馆律师并审查会议室政策确保内容中立适用后再决定' }, consequence: { en: '✅ Legally sound approach! Decision made on solid ground, library protected from liability either way.', th: '✅ แนวทางที่ถูกต้องตามกฎหมาย! การตัดสินใจบนพื้นฐานที่มั่นคง', zh: '✅ 法律上合理的方法！决定有坚实基础。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: 15 } },
 { id: 'D', text: { en: '🎯 Create new policy specifically designed to exclude this type of speaker', th: '🎯 สร้างนโยบายใหม่ที่ออกแบบมาเฉพาะเพื่อกีดกันวิทยากรประเภทนี้', zh: '🎯 创建专门设计排除此类演讲者的新政策' }, consequence: { en: '😱 Obvious viewpoint discrimination! Policy struck down in court, library credibility destroyed.', th: '😱 การเลือกปฏิบัติทางมุมมองที่ชัดเจน! นโยบายถูกศาลยกเลิก', zh: '😱 明显的观点歧视！政策被法院推翻。' }, stats: { competence: -30, ethics: -40, leadership: -35, innovation: -25 } }
 ]
 },

 {
 id: 'li_010',
 text: {
 en: '📊 Your library\'s annual community survey shows declining satisfaction among teens while senior programming is thriving. Teen librarian position is unfilled, and the budget only allows one new hire.',
 th: '📊 การสำรวจชุมชนประจำปีของห้องสมุดแสดงความพึงพอใจที่ลดลงในหมู่วัยรุ่น ในขณะที่โปรแกรมผู้สูงอายุเจริญรุ่งเรือง ตำแหน่งบรรณารักษ์วัยรุ่นว่าง และงบประมาณอนุญาตให้จ้างใหม่ได้เพียงคนเดียว',
 zh: '📊 图书馆年度社区调查显示青少年满意度下降，而老年项目蓬勃发展。青少年图书馆员职位空缺，预算只允许招聘一人。'
 },
 options: [
 { id: 'A', text: { en: '👩‍🎓 Hire teen librarian to address declining demographic; seniors are already well-served', th: '👩‍🎓 จ้างบรรณารักษ์วัยรุ่นเพื่อแก้ไขกลุ่มประชากรที่ลดลง ผู้สูงอายุได้รับบริการดีอยู่แล้ว', zh: '👩‍🎓 雇用青少年图书馆员解决下降的群体；老年人已得到良好服务' }, consequence: { en: '✅ Strategic investment! Teen engagement revives, future library supporters cultivated, balanced service restored.', th: '✅ การลงทุนเชิงกลยุทธ์! การมีส่วนร่วมของวัยรุ่นฟื้นตัว', zh: '✅ 战略投资！青少年参与恢复。' }, stats: { competence: 35, ethics: 30, leadership: 35, innovation: 25 } },
 { id: 'B', text: { en: '👴 Hire additional senior programmer since that demographic shows highest satisfaction and advocacy', th: '👴 จ้างโปรแกรมเมอร์ผู้สูงอายุเพิ่มเติมเนื่องจากกลุ่มประชากรนั้นแสดงความพึงพอใจและการสนับสนุนสูงสุด', zh: '👴 雇用额外的老年活动策划人因为该群体满意度和支持最高' }, consequence: { en: '⚠️ Short-term thinking! Teen exodus continues, future community support erodes, library becomes senior center.', th: '⚠️ ความคิดระยะสั้น! การอพยพของวัยรุ่นดำเนินต่อไป', zh: '⚠️ 短期思维！青少年流失继续。' }, stats: { competence: 5, ethics: 5, leadership: -10, innovation: -20 } },
 { id: 'C', text: { en: '🎯 Hire versatile generalist who can support both teen and senior programming, cross-training with existing staff', th: '🎯 จ้างนักทั่วไปที่หลากหลายที่สามารถสนับสนุนทั้งโปรแกรมวัยรุ่นและผู้สูงอายุ ฝึกอบรมข้ามกับพนักงานที่มีอยู่', zh: '🎯 雇用多才多艺的通才可以支持青少年和老年项目，与现有员工交叉培训' }, consequence: { en: '✅ Flexible staffing solution! Both demographics receive attention, staff develop new skills, budget maximized.', th: '✅ ทางออกการจัดพนักงานที่ยืดหยุ่น! ทั้งสองกลุ่มประชากรได้รับความสนใจ', zh: '✅ 灵活的人员解决方案！两个群体都受到关注。' }, stats: { competence: 30, ethics: 25, leadership: 30, innovation: 35 } },
 { id: 'D', text: { en: '📋 Delay hiring and conduct more research on what teens actually want', th: '📋 เลื่อนการจ้างและทำการวิจัยเพิ่มเติมเกี่ยวกับสิ่งที่วัยรุ่นต้องการจริงๆ', zh: '📋 推迟招聘并进行更多研究了解青少年真正想要什么' }, consequence: { en: '⚠️ Analysis paralysis! Teens continue leaving, staff burnout increases, problem worsens during indecision.', th: '⚠️ การวิเคราะห์เป็นอัมพาต! วัยรุ่นยังคงจากไป', zh: '⚠️ 分析瘫痪！青少年继续离开。' }, stats: { competence: 0, ethics: 5, leadership: -15, innovation: -10 } }
 ]
 },

 // SECTION 2: TECHNOLOGY & DIGITAL SERVICES (Questions 11-20)

 {
 id: 'li_011',
 text: {
 en: '🖨️ Your 3D printer has become extremely popular for crafting projects. A patron wants to print gun parts which are legal to own but potentially dangerous.',
 th: '🖨️ เครื่องพิมพ์ 3D ของคุณได้รับความนิยมอย่างมากสำหรับโครงการประดิษฐ์ ผู้ใช้ต้องการพิมพ์ชิ้นส่วนปืนซึ่งถูกกฎหมายที่จะเป็นเจ้าของแต่อาจเป็นอันตราย',
 zh: '🖨️ 你的3D打印机因手工艺项目而非常受欢迎。一位读者想打印枪支零件，虽然合法拥有但可能有危险。'
 },
 options: [
 { id: 'A', text: { en: '📋 Review and update makerspace policy with clear guidelines on prohibited items including weapons, consulting legal counsel and board', th: '📋 ตรวจสอบและอัปเดตนโยบาย makerspace พร้อมแนวทางที่ชัดเจนเกี่ยวกับรายการต้องห้ามรวมถึงอาวุธ', zh: '📋 审查和更新创客空间政策，明确禁止物品包括武器' }, consequence: { en: '✅ Proactive policy development! Clear guidelines protect staff and patrons, library maintains innovation space safely.', th: '✅ การพัฒนานโยบายเชิงรุก! แนวทางที่ชัดเจนปกป้องพนักงานและผู้ใช้', zh: '✅ 主动的政策制定！明确的指导方针保护员工和读者。' }, stats: { competence: 35, ethics: 30, leadership: 35, innovation: 30 } },
 { id: 'B', text: { en: '✅ Allow printing since it is legal and not the library\'s place to judge', th: '✅ อนุญาตให้พิมพ์เนื่องจากถูกกฎหมายและไม่ใช่ที่ของห้องสมุดที่จะตัดสิน', zh: '✅ 允许打印因为是合法的，图书馆不应该评判' }, consequence: { en: '😱 Liability nightmare! Local media exposes library printing weapons, board outraged, community safety concerns explode.', th: '😱 ฝันร้ายด้านความรับผิด! สื่อท้องถิ่นเปิดโปงห้องสมุดพิมพ์อาวุธ', zh: '😱 责任噩梦！当地媒体曝光图书馆打印武器。' }, stats: { competence: -25, ethics: -35, leadership: -30, innovation: -15 } },
 { id: 'C', text: { en: '🚫 Remove 3D printer entirely to avoid any controversial uses', th: '🚫 ลบเครื่องพิมพ์ 3D ออกทั้งหมดเพื่อหลีกเลี่ยงการใช้งานที่ถกเถียง', zh: '🚫 完全移除3D打印机以避免任何有争议的使用' }, consequence: { en: '⚠️ Overreaction! Valuable educational resource eliminated, STEM programming suffers, community loses innovation access.', th: '⚠️ ปฏิกิริยาเกินไป! ทรัพยากรการศึกษาที่มีค่าถูกกำจัด', zh: '⚠️ 过度反应！有价值的教育资源被消除。' }, stats: { competence: -10, ethics: 5, leadership: -15, innovation: -40 } },
 { id: 'D', text: { en: '💬 Have conversation with patron about intended use and offer alternative creative projects', th: '💬 พูดคุยกับผู้ใช้เกี่ยวกับการใช้งานที่ตั้งใจและเสนอโครงการสร้างสรรค์ทางเลือก', zh: '💬 与读者交谈了解预期用途并提供替代创意项目' }, consequence: { en: '✅ Thoughtful engagement! Patron understands policy rationale, finds other interests, relationship preserved.', th: '✅ การมีส่วนร่วมอย่างรอบคอบ! ผู้ใช้เข้าใจเหตุผลของนโยบาย', zh: '✅ 深思熟虑的参与！读者理解政策理由。' }, stats: { competence: 30, ethics: 30, leadership: 25, innovation: 25 } }
 ]
 },

 {
 id: 'li_012',
 text: {
 en: '📧 Your library is considering implementing AI chatbots to answer basic reference questions and help with catalog searches to extend service hours.',
 th: '📧 ห้องสมุดของคุณกำลังพิจารณาใช้แชทบอท AI เพื่อตอบคำถามอ้างอิงพื้นฐานและช่วยค้นหาแคตตาล็อกเพื่อขยายชั่วโมงบริการ',
 zh: '📧 你的图书馆正在考虑实施AI聊天机器人来回答基本的参考问题并帮助目录搜索以延长服务时间。'
 },
 options: [
 { id: 'A', text: { en: '🤖 Pilot AI as complementary tool with human oversight, clear disclosure to patrons, and escalation paths for complex questions', th: '🤖 นำร่อง AI เป็นเครื่องมือเสริมพร้อมการกำกับดูแลของมนุษย์ การเปิดเผยที่ชัดเจนต่อผู้ใช้ และเส้นทางยกระดับสำหรับคำถามที่ซับซ้อน', zh: '🤖 试点AI作为辅助工具，有人工监督、向读者明确披露，以及复杂问题的升级路径' }, consequence: { en: '✅ Thoughtful innovation! Extended service hours, patrons appreciate transparency, librarians freed for complex work.', th: '✅ นวัตกรรมที่รอบคอบ! ขยายชั่วโมงบริการ ผู้ใช้ชื่นชมความโปร่งใส', zh: '✅ 深思熟虑的创新！延长服务时间。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: 45 } },
 { id: 'B', text: { en: '🚫 Reject AI entirely as dehumanizing library service and replacing professional librarians', th: '🚫 ปฏิเสธ AI ทั้งหมดว่าเป็นการทำให้บริการห้องสมุดไร้มนุษยธรรมและแทนที่บรรณารักษ์มืออาชีพ', zh: '🚫 完全拒绝AI认为它使图书馆服务非人化并替代专业图书馆员' }, consequence: { en: '⚠️ Innovation resistance! Library falls behind peer institutions, misses opportunity to extend service.', th: '⚠️ การต่อต้านนวัตกรรม! ห้องสมุดล้าหลังสถาบันเพื่อน', zh: '⚠️ 创新抵制！图书馆落后于同类机构。' }, stats: { competence: -10, ethics: 15, leadership: -20, innovation: -35 } },
 { id: 'C', text: { en: '💻 Implement AI fully to reduce staffing costs and handle most patron interactions', th: '💻 ใช้ AI อย่างเต็มที่เพื่อลดต้นทุนการจัดพนักงานและจัดการการโต้ตอบกับผู้ใช้ส่วนใหญ่', zh: '💻 全面实施AI以降低人员成本并处理大多数读者互动' }, consequence: { en: '😱 Service quality collapse! AI gives incorrect information, patrons frustrated, vulnerable populations underserved.', th: '😱 คุณภาพบริการล่มสลาย! AI ให้ข้อมูลที่ไม่ถูกต้อง', zh: '😱 服务质量崩溃！AI提供不正确的信息。' }, stats: { competence: -20, ethics: -30, leadership: -25, innovation: 10 } },
 { id: 'D', text: { en: '📊 Form committee to study AI implications for 18 months before making any decisions', th: '📊 จัดตั้งคณะกรรมการเพื่อศึกษาผลกระทบของ AI เป็นเวลา 18 เดือนก่อนตัดสินใจใดๆ', zh: '📊 成立委员会研究AI影响18个月后再做任何决定' }, consequence: { en: '⚠️ Analysis paralysis! Competitors advance, opportunity window closes, library misses innovation cycle.', th: '⚠️ การวิเคราะห์เป็นอัมพาต! คู่แข่งก้าวหน้า', zh: '⚠️ 分析瘫痪！竞争对手进步。' }, stats: { competence: 5, ethics: 10, leadership: -10, innovation: -20 } }
 ]
 },

 {
 id: 'li_013',
 text: {
 en: '🔐 A patron is viewing what appears to be child exploitation material on a library computer. Another patron discretely alerts you.',
 th: '🔐 ผู้ใช้กำลังดูสิ่งที่ดูเหมือนจะเป็นสื่อล่วงละเมิดเด็กบนคอมพิวเตอร์ห้องสมุด ผู้ใช้อีกคนแจ้งเตือนคุณอย่างสุขุม',
 zh: '🔐 一位读者正在图书馆电脑上查看疑似儿童剥削材料。另一位读者悄悄提醒你。'
 },
 options: [
 { id: 'A', text: { en: '🚨 Immediately contact law enforcement, preserve evidence by not touching computer, document everything, follow mandatory reporting protocols', th: '🚨 ติดต่อหน่วยบังคับใช้กฎหมายทันที รักษาหลักฐานโดยไม่แตะคอมพิวเตอร์ บันทึกทุกอย่าง ปฏิบัติตามโปรโตคอลการรายงานบังคับ', zh: '🚨 立即联系执法部门，通过不触碰电脑保留证据，记录一切，遵循强制报告协议' }, consequence: { en: '✅ Proper legal response! Law enforcement handles investigation, library staff protected by following protocol, children protected.', th: '✅ การตอบสนองทางกฎหมายที่เหมาะสม! หน่วยบังคับใช้กฎหมายจัดการการสอบสวน', zh: '✅ 适当的法律回应！执法部门处理调查。' }, stats: { competence: 35, ethics: 50, leadership: 35, innovation: 15 } },
 { id: 'B', text: { en: '💬 Approach patron directly and ask them to stop', th: '💬 เข้าหาผู้ใช้โดยตรงและขอให้พวกเขาหยุด', zh: '💬 直接找读者让他们停止' }, consequence: { en: '😱 Evidence destroyed! Patron deletes material and leaves, potential child victims remain unprotected, library failed duty.', th: '😱 หลักฐานถูกทำลาย! ผู้ใช้ลบเนื้อหาและจากไป', zh: '😱 证据被销毁！读者删除材料并离开。' }, stats: { competence: -30, ethics: -40, leadership: -35, innovation: -20 } },
 { id: 'C', text: { en: '🔒 Remotely log patron out and block access, avoiding confrontation', th: '🔒 ออกระบบผู้ใช้จากระยะไกลและบล็อกการเข้าถึง หลีกเลี่ยงการเผชิญหน้า', zh: '🔒 远程注销读者并阻止访问，避免对抗' }, consequence: { en: '⚠️ Partial response! Immediate viewing stopped but no investigation, patron free to offend elsewhere.', th: '⚠️ การตอบสนองบางส่วน! การดูหยุดทันทีแต่ไม่มีการสอบสวน', zh: '⚠️ 部分回应！立即停止查看但没有调查。' }, stats: { competence: 5, ethics: -15, leadership: 0, innovation: 5 } },
 { id: 'D', text: { en: '📋 Document incident and report to supervisor, letting them decide next steps', th: '📋 บันทึกเหตุการณ์และรายงานต่อหัวหน้า ให้พวกเขาตัดสินใจขั้นตอนต่อไป', zh: '📋 记录事件并报告给主管，让他们决定下一步' }, consequence: { en: '⚠️ Delayed response! Time-sensitive situation requires immediate action, children remain at risk during delay.', th: '⚠️ การตอบสนองล่าช้า! สถานการณ์ที่ไวต่อเวลาต้องการการดำเนินการทันที', zh: '⚠️ 延迟回应！时间敏感的情况需要立即行动。' }, stats: { competence: 0, ethics: -10, leadership: -15, innovation: -10 } }
 ]
 },

 {
 id: 'li_014',
 text: {
 en: '📚 Your library is digitizing local history materials. You discover some historical documents contain racist language typical of the era.',
 th: '📚 ห้องสมุดของคุณกำลังแปลงสื่อประวัติศาสตร์ท้องถิ่นเป็นดิจิทัล คุณค้นพบว่าเอกสารประวัติศาสตร์บางฉบับมีภาษาเหยียดเชื้อชาติที่เป็นลักษณะเฉพาะของยุคสมัย',
 zh: '📚 你的图书馆正在将当地历史资料数字化。你发现一些历史文件包含那个时代典型的种族主义语言。'
 },
 options: [
 { id: 'A', text: { en: '📋 Digitize with historical context notes, content warnings, and educational framing explaining the documents\' historical significance and problematic elements', th: '📋 แปลงเป็นดิจิทัลพร้อมบันทึกบริบททางประวัติศาสตร์ คำเตือนเนื้อหา และกรอบการศึกษาที่อธิบายความสำคัญทางประวัติศาสตร์และองค์ประกอบที่เป็นปัญหา', zh: '📋 数字化并附历史背景说明、内容警告和教育框架解释文件的历史意义和问题元素' }, consequence: { en: '✅ Scholarly excellence! Historical record preserved with context, researchers value accurate primary sources, community understands history.', th: '✅ ความเป็นเลิศทางวิชาการ! บันทึกประวัติศาสตร์ได้รับการรักษาพร้อมบริบท', zh: '✅ 学术卓越！历史记录与背景一起保存。' }, stats: { competence: 40, ethics: 35, leadership: 30, innovation: 30 } },
 { id: 'B', text: { en: '✂️ Edit or redact offensive language to avoid harm', th: '✂️ แก้ไขหรือตัดทอนภาษาที่ไม่เหมาะสมเพื่อหลีกเลี่ยงอันตราย', zh: '✂️ 编辑或删除冒犯性语言以避免伤害' }, consequence: { en: '😱 Historical revisionism! Archival integrity destroyed, researchers can\'t trust collection, whitewashing criticized.', th: '😱 การแก้ไขประวัติศาสตร์! ความสมบูรณ์ของเอกสารถูกทำลาย', zh: '😱 历史修正主义！档案完整性被破坏。' }, stats: { competence: -25, ethics: -30, leadership: -20, innovation: -25 } },
 { id: 'C', text: { en: '📁 Keep documents in restricted archive, not available to general public', th: '📁 เก็บเอกสารในคลังเอกสารที่จำกัด ไม่เปิดให้สาธารณชนทั่วไป', zh: '📁 将文件保存在受限档案中，不向公众开放' }, consequence: { en: '⚠️ Access barriers! Important history hidden, community cannot learn from past, researchers frustrated.', th: '⚠️ อุปสรรคการเข้าถึง! ประวัติศาสตร์สำคัญถูกซ่อน', zh: '⚠️ 访问障碍！重要历史被隐藏。' }, stats: { competence: 5, ethics: -10, leadership: 0, innovation: -15 } },
 { id: 'D', text: { en: '🤝 Partner with community historians and affected groups to develop appropriate presentation and educational programming', th: '🤝 ร่วมมือกับนักประวัติศาสตร์ชุมชนและกลุ่มที่ได้รับผลกระทบเพื่อพัฒนาการนำเสนอและโปรแกรมการศึกษาที่เหมาะสม', zh: '🤝 与社区历史学家和受影响群体合作开发适当的展示和教育项目' }, consequence: { en: '✅ Community-centered approach! Multiple perspectives honored, programming emerges, library builds trust.', th: '✅ แนวทางที่เน้นชุมชน! หลายมุมมองได้รับเกียรติ', zh: '✅ 以社区为中心的方法！多元视角受到尊重。' }, stats: { competence: 35, ethics: 40, leadership: 40, innovation: 35 } }
 ]
 },

 {
 id: 'li_015',
 text: {
 en: '⚡ Power outage has knocked out all electronic systems. Patrons are waiting, staff are panicking, and you have no idea how long it will last.',
 th: '⚡ ไฟฟ้าดับได้ทำให้ระบบอิเล็กทรอนิกส์ทั้งหมดหยุดทำงาน ผู้ใช้กำลังรอ พนักงานตื่นตระหนก และคุณไม่รู้ว่าจะอยู่นานแค่ไหน',
 zh: '⚡ 停电导致所有电子系统瘫痪。读者在等待，员工在恐慌，你不知道会持续多久。'
 },
 options: [
 { id: 'A', text: { en: '📋 Activate emergency procedures: manual checkout with paper forms, redirect to print resources, reassign staff to direct patron assistance', th: '📋 เปิดใช้งานขั้นตอนฉุกเฉิน: ยืมด้วยตนเองด้วยแบบฟอร์มกระดาษ เปลี่ยนเส้นทางไปยังทรัพยากรสิ่งพิมพ์ มอบหมายพนักงานใหม่เพื่อช่วยเหลือผู้ใช้โดยตรง', zh: '📋 启动紧急程序：纸质表格手动借阅，转向印刷资源，重新分配员工直接协助读者' }, consequence: { en: '✅ Crisis leadership! Service continues despite technology failure, patrons impressed by adaptability, staff gains confidence.', th: '✅ ภาวะผู้นำในช่วงวิกฤต! บริการดำเนินต่อไปแม้เทคโนโลยีล้มเหลว', zh: '✅ 危机领导力！尽管技术故障服务继续。' }, stats: { competence: 35, ethics: 25, leadership: 45, innovation: 30 } },
 { id: 'B', text: { en: '🚪 Close library immediately for safety reasons', th: '🚪 ปิดห้องสมุดทันทีเพื่อเหตุผลด้านความปลอดภัย', zh: '🚪 因安全原因立即关闭图书馆' }, consequence: { en: '⚠️ Overreaction! Patrons frustrated, library seen as inflexible, missed opportunity to demonstrate resilience.', th: '⚠️ ปฏิกิริยาเกินไป! ผู้ใช้หงุดหงิด', zh: '⚠️ 过度反应！读者沮丧。' }, stats: { competence: 5, ethics: 10, leadership: -15, innovation: -20 } },
 { id: 'C', text: { en: '⏳ Wait for power to return before taking any action', th: '⏳ รอให้ไฟฟ้ากลับมาก่อนดำเนินการใดๆ', zh: '⏳ 等待电力恢复后再采取任何行动' }, consequence: { en: '😱 Leadership vacuum! Staff confused, patrons frustrated, situation deteriorates without direction.', th: '😱 สูญญากาศภาวะผู้นำ! พนักงานสับสน ผู้ใช้หงุดหงิด', zh: '😱 领导真空！员工困惑，读者沮丧。' }, stats: { competence: -20, ethics: -10, leadership: -35, innovation: -25 } },
 { id: 'D', text: { en: '📚 Transform situation into impromptu programming: storytelling, book discussions, low-tech activities', th: '📚 เปลี่ยนสถานการณ์เป็นโปรแกรมเฉพาะกิจ: การเล่าเรื่อง การอภิปรายหนังสือ กิจกรรมเทคโนโลยีต่ำ', zh: '📚 将情况转变为即兴活动：讲故事、图书讨论、低技术活动' }, consequence: { en: '✅ Creative crisis response! Memorable experience created, community bonds strengthened, library reputation enhanced.', th: '✅ การตอบสนองวิกฤตอย่างสร้างสรรค์! สร้างประสบการณ์ที่น่าจดจำ', zh: '✅ 创意危机应对！创造难忘的体验。' }, stats: { competence: 30, ethics: 20, leadership: 35, innovation: 45 } }
 ]
 },

 // SECTION 3: COMMUNITY ENGAGEMENT & PROGRAMMING (Questions 16-25)

 {
 id: 'li_016',
 text: {
 en: '🎉 Your summer reading program has been criticized for rewarding quantity over quality. Kids rush through books just to win prizes without genuine engagement.',
 th: '🎉 โปรแกรมการอ่านภาคฤดูร้อนของคุณถูกวิพากษ์วิจารณ์ว่าให้รางวัลปริมาณมากกว่าคุณภาพ เด็กๆ รีบอ่านหนังสือเพื่อชนะรางวัลโดยไม่มีส่วนร่วมที่แท้จริง',
 zh: '🎉 你的夏季阅读项目因奖励数量而非质量而受到批评。孩子们匆匆读完书只是为了赢得奖品而没有真正参与。'
 },
 options: [
 { id: 'A', text: { en: '📝 Redesign with reading logs, reflection questions, book discussions, and creative responses that demonstrate genuine engagement', th: '📝 ออกแบบใหม่ด้วยบันทึกการอ่าน คำถามสะท้อน การอภิปรายหนังสือ และการตอบสนองสร้างสรรค์ที่แสดงการมีส่วนร่วมที่แท้จริง', zh: '📝 重新设计阅读日志、反思问题、图书讨论和展示真正参与的创意回应' }, consequence: { en: '✅ Quality reading culture! Deeper engagement, literacy gains measurable, parents and teachers appreciate approach.', th: '✅ วัฒนธรรมการอ่านที่มีคุณภาพ! การมีส่วนร่วมที่ลึกซึ้งขึ้น', zh: '✅ 优质阅读文化！更深入的参与。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: 40 } },
 { id: 'B', text: { en: '📚 Keep current system since high participation numbers prove success', th: '📚 รักษาระบบปัจจุบันเนื่องจากจำนวนการมีส่วนร่วมสูงพิสูจน์ความสำเร็จ', zh: '📚 保持当前系统因为高参与数字证明成功' }, consequence: { en: '⚠️ Missed learning opportunity! Parents increasingly critical, program reputation declines over time.', th: '⚠️ พลาดโอกาสการเรียนรู้! ผู้ปกครองวิจารณ์มากขึ้น', zh: '⚠️ 错失学习机会！家长越来越批评。' }, stats: { competence: -10, ethics: -15, leadership: -10, innovation: -25 } },
 { id: 'C', text: { en: '🎯 Create tiered system with both quantity recognition and quality achievements for different learning styles', th: '🎯 สร้างระบบแบบลำดับชั้นพร้อมทั้งการยอมรับปริมาณและความสำเร็จด้านคุณภาพสำหรับรูปแบบการเรียนรู้ที่แตกต่างกัน', zh: '🎯 创建分层系统，既有数量认可也有质量成就，适应不同学习风格' }, consequence: { en: '✅ Inclusive excellence! All readers valued, multiple pathways to success, participation remains high.', th: '✅ ความเป็นเลิศที่ครอบคลุม! ผู้อ่านทุกคนได้รับการให้ค่า', zh: '✅ 包容性卓越！所有读者都受到重视。' }, stats: { competence: 35, ethics: 35, leadership: 35, innovation: 35 } },
 { id: 'D', text: { en: '❌ Eliminate prizes entirely, focusing purely on intrinsic motivation', th: '❌ กำจัดรางวัลทั้งหมด มุ่งเน้นแรงจูงใจภายในล้วนๆ', zh: '❌ 完全取消奖品，纯粹关注内在动机' }, consequence: { en: '⚠️ Participation crash! Many reluctant readers lose motivation, program serves only already-motivated kids.', th: '⚠️ การมีส่วนร่วมลดลง! ผู้อ่านที่ไม่เต็มใจหลายคนสูญเสียแรงจูงใจ', zh: '⚠️ 参与崩溃！许多不情愿的读者失去动力。' }, stats: { competence: 5, ethics: 15, leadership: -5, innovation: 10 } }
 ]
 },

 {
 id: 'li_017',
 text: {
 en: '🌍 Your community is becoming increasingly multilingual with growing immigrant populations. Current collection and programming remain primarily English-focused.',
 th: '🌍 ชุมชนของคุณกำลังกลายเป็นหลายภาษามากขึ้นด้วยประชากรผู้อพยพที่เพิ่มขึ้น คอลเลกชันและโปรแกรมปัจจุบันยังคงเน้นภาษาอังกฤษเป็นหลัก',
 zh: '🌍 你的社区随着移民人口增长变得越来越多语言。当前馆藏和项目仍然主要以英语为中心。'
 },
 options: [
 { id: 'A', text: { en: '🌐 Conduct community needs assessment, develop multilingual collection, hire diverse staff, create culturally-specific programming with community input', th: '🌐 ดำเนินการประเมินความต้องการของชุมชน พัฒนาคอลเลกชันหลายภาษา จ้างพนักงานที่หลากหลาย สร้างโปรแกรมเฉพาะทางวัฒนธรรมด้วยการมีส่วนร่วมของชุมชน', zh: '🌐 进行社区需求评估，开发多语言馆藏，雇用多元化员工，与社区一起创建文化特定项目' }, consequence: { en: '✅ Transformative community service! New populations feel welcomed, circulation increases, library becomes community anchor.', th: '✅ บริการชุมชนที่เปลี่ยนแปลง! ประชากรใหม่รู้สึกได้รับการต้อนรับ', zh: '✅ 变革性社区服务！新人口感到受欢迎。' }, stats: { competence: 35, ethics: 45, leadership: 40, innovation: 40 } },
 { id: 'B', text: { en: '📖 Maintain English focus since immigrants should learn English to succeed in America', th: '📖 รักษาการเน้นภาษาอังกฤษเนื่องจากผู้อพยพควรเรียนภาษาอังกฤษเพื่อประสบความสำเร็จในอเมริกา', zh: '📖 保持英语重点因为移民应该学英语才能在美国成功' }, consequence: { en: '😱 Exclusionary failure! Library fails diverse community, funding threats from underserved populations, reputation damaged.', th: '😱 ความล้มเหลวที่กีดกัน! ห้องสมุดล้มเหลวต่อชุมชนที่หลากหลาย', zh: '😱 排斥性失败！图书馆未能服务多元化社区。' }, stats: { competence: -25, ethics: -45, leadership: -35, innovation: -30 } },
 { id: 'C', text: { en: '📚 Add small multilingual collection and ESL resources as a starting point', th: '📚 เพิ่มคอลเลกชันหลายภาษาขนาดเล็กและทรัพยากร ESL เป็นจุดเริ่มต้น', zh: '📚 添加小型多语言馆藏和ESL资源作为起点' }, consequence: { en: '✅ Incremental progress! Resources help some patrons, foundation laid for future expansion.', th: '✅ ความก้าวหน้าที่เพิ่มขึ้น! ทรัพยากรช่วยผู้ใช้บางคน', zh: '✅ 渐进进步！资源帮助一些读者。' }, stats: { competence: 20, ethics: 25, leadership: 20, innovation: 15 } },
 { id: 'D', text: { en: '🤝 Partner with cultural organizations to provide programming while maintaining English-only collection', th: '🤝 ร่วมมือกับองค์กรวัฒนธรรมเพื่อให้โปรแกรมในขณะที่รักษาคอลเลกชันภาษาอังกฤษเท่านั้น', zh: '🤝 与文化组织合作提供项目同时保持仅英语馆藏' }, consequence: { en: '⚠️ Partial solution! Programming helps but collection gap persists, community still underserved.', th: '⚠️ ทางออกบางส่วน! โปรแกรมช่วยแต่ช่องว่างคอลเลกชันยังคงอยู่', zh: '⚠️ 部分解决方案！项目有帮助但馆藏差距持续。' }, stats: { competence: 15, ethics: 10, leadership: 20, innovation: 20 } }
 ]
 },

 {
 id: 'li_018',
 text: {
 en: '👶 A mother is breastfeeding her infant in the children\'s section. Another patron complains loudly that this is inappropriate in a public space.',
 th: '👶 แม่คนหนึ่งกำลังให้นมลูกในส่วนเด็ก ผู้ใช้อีกคนบ่นดังๆ ว่านี่ไม่เหมาะสมในพื้นที่สาธารณะ',
 zh: '👶 一位母亲正在儿童区母乳喂养婴儿。另一位读者大声抱怨这在公共场所不合适。'
 },
 options: [
 { id: 'A', text: { en: '⚖️ Calmly explain that breastfeeding is legally protected in public spaces and the library supports nursing mothers', th: '⚖️ อธิบายอย่างสงบว่าการให้นมได้รับการคุ้มครองตามกฎหมายในพื้นที่สาธารณะและห้องสมุดสนับสนุนแม่ที่ให้นม', zh: '⚖️ 冷静解释母乳喂养在公共场所受法律保护，图书馆支持哺乳母亲' }, consequence: { en: '✅ Legal and ethical stance! Nursing mother feels supported, complainer educated, library demonstrates inclusive values.', th: '✅ จุดยืนทางกฎหมายและจริยธรรม! แม่ที่ให้นมรู้สึกได้รับการสนับสนุน', zh: '✅ 法律和道德立场！哺乳母亲感到受支持。' }, stats: { competence: 30, ethics: 45, leadership: 35, innovation: 20 } },
 { id: 'B', text: { en: '🚶 Ask mother to use a private room or cover up to avoid further complaints', th: '🚶 ขอให้แม่ใช้ห้องส่วนตัวหรือปิดบังเพื่อหลีกเลี่ยงข้อร้องเรียนเพิ่มเติม', zh: '🚶 要求母亲使用私人房间或遮盖以避免进一步投诉' }, consequence: { en: '😱 Discrimination! Mother humiliated and files complaint, potential legal action, library appears unwelcoming to families.', th: '😱 การเลือกปฏิบัติ! แม่อับอายและยื่นเรื่องร้องเรียน', zh: '😱 歧视！母亲感到羞辱并投诉。' }, stats: { competence: -20, ethics: -40, leadership: -30, innovation: -20 } },
 { id: 'C', text: { en: '🤝 Offer mother private nursing room as an option (not requirement) while affirming her right to nurse anywhere in library', th: '🤝 เสนอห้องให้นมส่วนตัวให้แม่เป็นตัวเลือก (ไม่ใช่ข้อกำหนด) ขณะยืนยันสิทธิ์ของเธอในการให้นมที่ใดก็ได้ในห้องสมุด', zh: '🤝 向母亲提供私人哺乳室作为选择（非要求）同时确认她可以在图书馆任何地方哺乳' }, consequence: { en: '✅ Supportive options! Mother appreciates choice, library demonstrates both inclusion and accommodation.', th: '✅ ตัวเลือกที่สนับสนุน! แม่ชื่นชมทางเลือก', zh: '✅ 支持性选择！母亲感谢选择。' }, stats: { competence: 35, ethics: 40, leadership: 35, innovation: 25 } },
 { id: 'D', text: { en: '📋 Suggest both parties compromise and avoid taking sides', th: '📋 แนะนำให้ทั้งสองฝ่ายประนีประนอมและหลีกเลี่ยงการเข้าข้าง', zh: '📋 建议双方妥协并避免选边站' }, consequence: { en: '⚠️ False equivalence! Rights are not negotiable, mother feels unsupported, library appears weak on inclusion.', th: '⚠️ ความเท่าเทียมเท็จ! สิทธิไม่สามารถเจรจาได้', zh: '⚠️ 虚假等同！权利不可协商。' }, stats: { competence: -5, ethics: -20, leadership: -15, innovation: -10 } }
 ]
 },

 {
 id: 'li_019',
 text: {
 en: '🎤 A local author wants to host a book launch at your library. Their self-published book promotes conspiracy theories about vaccines.',
 th: '🎤 นักเขียนท้องถิ่นต้องการจัดงานเปิดตัวหนังสือที่ห้องสมุดของคุณ หนังสือที่ตีพิมพ์เองของพวกเขาส่งเสริมทฤษฎีสมคบคิดเกี่ยวกับวัคซีน',
 zh: '🎤 当地作者想在图书馆举办新书发布会。他们自费出版的书推广关于疫苗的阴谋论。'
 },
 options: [
 { id: 'A', text: { en: '📋 Apply content-neutral booking policy, treat request same as any author event, but consider counter-programming with health professionals', th: '📋 ใช้นโยบายการจองที่เป็นกลางทางเนื้อหา จัดการคำขอเหมือนกับงานผู้เขียนใดๆ แต่พิจารณาโปรแกรมตอบโต้กับผู้เชี่ยวชาญด้านสุขภาพ', zh: '📋 应用内容中立的预订政策，像对待任何作者活动一样处理请求，但考虑与健康专业人士进行反向项目' }, consequence: { en: '✅ Balanced approach! Free expression maintained while promoting accurate health information, community can evaluate both.', th: '✅ แนวทางที่สมดุล! รักษาการแสดงออกอย่างเสรีขณะส่งเสริมข้อมูลสุขภาพที่ถูกต้อง', zh: '✅ 平衡方法！维护言论自由同时推广准确的健康信息。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 25 } },
 { id: 'B', text: { en: '🚫 Refuse because promoting misinformation causes public harm', th: '🚫 ปฏิเสธเพราะการส่งเสริมข้อมูลเท็จก่อให้เกิดอันตรายต่อสาธารณะ', zh: '🚫 拒绝因为推广错误信息造成公共伤害' }, consequence: { en: '⚠️ Viewpoint discrimination! Free speech advocates criticize, author may claim censorship, legal liability possible.', th: '⚠️ การเลือกปฏิบัติทางมุมมอง! ผู้สนับสนุนเสรีภาพในการพูดวิจารณ์', zh: '⚠️ 观点歧视！言论自由倡导者批评。' }, stats: { competence: -10, ethics: 5, leadership: -15, innovation: -10 } },
 { id: 'C', text: { en: '📚 Review booking policy with legal counsel to ensure consistent application across all authors and topics', th: '📚 ตรวจสอบนโยบายการจองกับที่ปรึกษากฎหมายเพื่อให้แน่ใจว่าใช้อย่างสม่ำเสมอกับผู้เขียนและหัวข้อทั้งหมด', zh: '📚 与法律顾问审查预订政策确保对所有作者和主题一致适用' }, consequence: { en: '✅ Professionally sound! Clear policy protects library from liability, consistent treatment defensible.', th: '✅ ถูกต้องตามวิชาชีพ! นโยบายที่ชัดเจนปกป้องห้องสมุดจากความรับผิด', zh: '✅ 专业上合理！明确的政策保护图书馆免受责任。' }, stats: { competence: 35, ethics: 25, leadership: 30, innovation: 15 } },
 { id: 'D', text: { en: '✅ Accept event and feature book in collection to support local authors', th: '✅ ยอมรับงานและนำเสนอหนังสือในคอลเลกชันเพื่อสนับสนุนนักเขียนท้องถิ่น', zh: '✅ 接受活动并在馆藏中收录书籍以支持当地作者' }, consequence: { en: '⚠️ Professional judgment failed! Library appears to endorse harmful content, public health advocates criticize, credibility damaged.', th: '⚠️ การตัดสินใจทางวิชาชีพล้มเหลว! ห้องสมุดดูเหมือนรับรองเนื้อหาที่เป็นอันตราย', zh: '⚠️ 专业判断失败！图书馆似乎认可有害内容。' }, stats: { competence: -15, ethics: -25, leadership: -20, innovation: -15 } }
 ]
 },

 {
 id: 'li_020',
 text: {
 en: '🎨 Your library\'s maker space is extremely popular but monopolized by a few regulars who dominate equipment time and intimidate newcomers.',
 th: '🎨 พื้นที่ผู้สร้างของห้องสมุดได้รับความนิยมอย่างมากแต่ถูกผูกขาดโดยผู้ใช้ประจำไม่กี่คนที่ครอบงำเวลาอุปกรณ์และข่มขู่ผู้มาใหม่',
 zh: '🎨 图书馆的创客空间非常受欢迎，但被少数常客垄断设备时间并恐吓新来者。'
 },
 options: [
 { id: 'A', text: { en: '📋 Implement fair use policies: time limits, reservation systems, beginner sessions, and code of conduct with consequences', th: '📋 ใช้นโยบายการใช้งานที่เป็นธรรม: การจำกัดเวลา ระบบการจอง เซสชันสำหรับผู้เริ่มต้น และจรรยาบรรณพร้อมผลที่ตามมา', zh: '📋 实施公平使用政策：时间限制、预订系统、初学者课程和有后果的行为准则' }, consequence: { en: '✅ Equitable access restored! More community members benefit, regulars adapt, makerspace serves intended purpose.', th: '✅ การเข้าถึงที่เท่าเทียมได้รับการฟื้นฟู! สมาชิกชุมชนมากขึ้นได้รับประโยชน์', zh: '✅ 公平访问恢复！更多社区成员受益。' }, stats: { competence: 35, ethics: 40, leadership: 40, innovation: 30 } },
 { id: 'B', text: { en: '✅ Let current system continue since regulars are most engaged users', th: '✅ ปล่อยให้ระบบปัจจุบันดำเนินต่อไปเนื่องจากผู้ใช้ประจำมีส่วนร่วมมากที่สุด', zh: '✅ 让当前系统继续因为常客是最投入的用户' }, consequence: { en: '😱 Exclusion entrenched! Public resource captured by few, newcomers give up, grant funders question impact.', th: '😱 การกีดกันที่ฝังลึก! ทรัพยากรสาธารณะถูกยึดครองโดยคนไม่กี่คน', zh: '😱 排斥根深蒂固！公共资源被少数人占用。' }, stats: { competence: -20, ethics: -35, leadership: -30, innovation: -20 } },
 { id: 'C', text: { en: '🤝 Recruit regulars as volunteer mentors, channeling their expertise toward helping newcomers', th: '🤝 คัดเลือกผู้ใช้ประจำเป็นอาสาสมัครที่ปรึกษา ส่งเสริมความเชี่ยวชาญของพวกเขาไปช่วยผู้มาใหม่', zh: '🤝 招募常客作为志愿导师，引导他们的专业知识帮助新来者' }, consequence: { en: '✅ Transformed dynamic! Regulars feel valued, newcomers welcomed, community builds, everyone benefits.', th: '✅ พลวัตที่เปลี่ยนแปลง! ผู้ใช้ประจำรู้สึกมีค่า ผู้มาใหม่ได้รับการต้อนรับ', zh: '✅ 转变的动态！常客感到被重视，新来者受欢迎。' }, stats: { competence: 35, ethics: 35, leadership: 40, innovation: 40 } },
 { id: 'D', text: { en: '🚫 Ban problematic regulars to send message', th: '🚫 แบนผู้ใช้ประจำที่มีปัญหาเพื่อส่งสาร', zh: '🚫 禁止有问题的常客以发出信息' }, consequence: { en: '⚠️ Punitive approach backfires! Community divided, library appears arbitrary, underlying issues unaddressed.', th: '⚠️ แนวทางลงโทษย้อนกลับ! ชุมชนแตกแยก', zh: '⚠️ 惩罚性方法适得其反！社区分裂。' }, stats: { competence: -10, ethics: -15, leadership: -20, innovation: -15 } }
 ]
 },

 // SECTION 4: STAFF MANAGEMENT & ADMINISTRATION (Questions 21-30)

 {
 id: 'li_021',
 text: {
 en: '👥 A long-time staff member consistently undermines new initiatives you introduce, complaining to colleagues and creating negative atmosphere.',
 th: '👥 พนักงานที่ทำงานมานานบ่อนทำลายความคิดริเริ่มใหม่ที่คุณแนะนำอย่างสม่ำเสมอ บ่นกับเพื่อนร่วมงานและสร้างบรรยากาศเชิงลบ',
 zh: '👥 一位资深员工持续破坏你推出的新举措，向同事抱怨并制造负面氛围。'
 },
 options: [
 { id: 'A', text: { en: '💬 Have private conversation to understand concerns, find common ground, and establish expectations for professional behavior', th: '💬 มีการสนทนาส่วนตัวเพื่อเข้าใจข้อกังวล หาจุดร่วม และกำหนดความคาดหวังสำหรับพฤติกรรมที่เป็นมืออาชีพ', zh: '💬 进行私人对话了解顾虑，找到共同点，建立专业行为期望' }, consequence: { en: '✅ Constructive resolution! Staff member feels heard, behavior improves, team dynamic strengthens.', th: '✅ การแก้ไขที่สร้างสรรค์! พนักงานรู้สึกได้รับการรับฟัง', zh: '✅ 建设性解决！员工感到被倾听。' }, stats: { competence: 35, ethics: 35, leadership: 45, innovation: 25 } },
 { id: 'B', text: { en: '📋 Document issues and proceed directly to formal disciplinary action', th: '📋 บันทึกปัญหาและดำเนินการทางวินัยอย่างเป็นทางการโดยตรง', zh: '📋 记录问题并直接进行正式纪律处分' }, consequence: { en: '⚠️ Escalation without dialogue! Staff member becomes more resistant, union involvement possible, morale drops.', th: '⚠️ การยกระดับโดยไม่มีการเจรจา! พนักงานกลายเป็นต่อต้านมากขึ้น', zh: '⚠️ 没有对话就升级！员工变得更抵制。' }, stats: { competence: 10, ethics: -10, leadership: -15, innovation: -10 } },
 { id: 'C', text: { en: '🔄 Involve staff member in initiative development, channeling their experience into constructive input', th: '🔄 ให้พนักงานมีส่วนร่วมในการพัฒนาความคิดริเริ่ม ส่งเสริมประสบการณ์ของพวกเขาเป็นสิ่งที่สร้างสรรค์', zh: '🔄 让员工参与项目开发，将他们的经验转化为建设性意见' }, consequence: { en: '✅ Brilliant leadership! Staff member becomes advocate, initiatives improved by experience, team empowered.', th: '✅ ภาวะผู้นำที่ยอดเยี่ยม! พนักงานกลายเป็นผู้สนับสนุน', zh: '✅ 出色的领导！员工成为倡导者。' }, stats: { competence: 35, ethics: 30, leadership: 50, innovation: 35 } },
 { id: 'D', text: { en: '🤐 Ignore behavior to avoid conflict and hope it improves on its own', th: '🤐 เพิกเฉยพฤติกรรมเพื่อหลีกเลี่ยงความขัดแย้งและหวังว่าจะดีขึ้นเอง', zh: '🤐 忽视行为以避免冲突并希望自行改善' }, consequence: { en: '😱 Leadership abdication! Behavior spreads, other staff lose respect, initiatives fail.', th: '😱 การสละภาวะผู้นำ! พฤติกรรมแพร่กระจาย', zh: '😱 领导放弃！行为蔓延。' }, stats: { competence: -25, ethics: -20, leadership: -40, innovation: -25 } }
 ]
 },

 {
 id: 'li_022',
 text: {
 en: '📊 Annual performance review reveals that one staff member has significantly lower productivity than peers but excellent customer service ratings.',
 th: '📊 การทบทวนประสิทธิภาพประจำปีเผยให้เห็นว่าพนักงานคนหนึ่งมีผลผลิตต่ำกว่าเพื่อนร่วมงานอย่างมาก แต่มีคะแนนการบริการลูกค้าที่ยอดเยี่ยม',
 zh: '📊 年度绩效评估显示一名员工的生产力明显低于同事，但客户服务评分优秀。'
 },
 options: [
 { id: 'A', text: { en: '🎯 Recognize different strengths, adjust role to maximize customer service contributions while addressing productivity gaps', th: '🎯 ยอมรับจุดแข็งที่แตกต่าง ปรับบทบาทเพื่อเพิ่มการมีส่วนร่วมในการบริการลูกค้าในขณะที่แก้ไขช่องว่างด้านผลผลิต', zh: '🎯 认识不同优势，调整角色最大化客户服务贡献同时解决生产力差距' }, consequence: { en: '✅ Strength-based management! Employee thrives in right role, patron satisfaction increases, productivity concerns addressed.', th: '✅ การจัดการตามจุดแข็ง! พนักงานเจริญรุ่งเรืองในบทบาทที่เหมาะสม', zh: '✅ 基于优势的管理！员工在正确角色中蓬勃发展。' }, stats: { competence: 40, ethics: 35, leadership: 40, innovation: 30 } },
 { id: 'B', text: { en: '📉 Mark as underperformer and begin improvement plan focused on productivity metrics', th: '📉 ทำเครื่องหมายว่ามีประสิทธิภาพต่ำและเริ่มแผนปรับปรุงที่เน้นเมตริกผลผลิต', zh: '📉 标记为表现不佳者并开始专注于生产力指标的改进计划' }, consequence: { en: '⚠️ Morale damaged! Valuable employee feels unappreciated, customer service suffers, may leave.', th: '⚠️ ขวัญกำลังใจเสียหาย! พนักงานที่มีค่ารู้สึกไม่ได้รับการชื่นชม', zh: '⚠️ 士气受损！有价值的员工感觉不被赏识。' }, stats: { competence: -10, ethics: -20, leadership: -25, innovation: -15 } },
 { id: 'C', text: { en: '🤝 Coach employee on productivity while preserving customer service excellence, finding balance', th: '🤝 ฝึกสอนพนักงานเรื่องผลผลิตในขณะที่รักษาความเป็นเลิศในการบริการลูกค้า หาจุดสมดุล', zh: '🤝 在保持客户服务卓越的同时指导员工提高生产力，找到平衡' }, consequence: { en: '✅ Balanced development! Employee grows in all areas, feels supported, team benefits.', th: '✅ การพัฒนาที่สมดุล! พนักงานเติบโตในทุกด้าน', zh: '✅ 平衡发展！员工在各方面成长。' }, stats: { competence: 35, ethics: 35, leadership: 35, innovation: 25 } },
 { id: 'D', text: { en: '✅ Give same rating as others to avoid difficult conversations', th: '✅ ให้คะแนนเดียวกับคนอื่นเพื่อหลีกเลี่ยงการสนทนาที่ยาก', zh: '✅ 给予与他人相同的评分以避免困难对话' }, consequence: { en: '😱 Accountability failure! Other staff resent unfairness, standards erode, leadership credibility lost.', th: '😱 ความล้มเหลวในความรับผิดชอบ! พนักงานอื่นไม่พอใจความไม่ยุติธรรม', zh: '😱 问责失败！其他员工怨恨不公平。' }, stats: { competence: -20, ethics: -30, leadership: -35, innovation: -20 } }
 ]
 },

 {
 id: 'li_023',
 text: {
 en: '💼 You need to cut 20% of staffing budget. Options include layoffs, reduced hours, or eliminating positions through attrition.',
 th: '💼 คุณต้องลดงบประมาณการจ้างพนักงาน 20% ตัวเลือกรวมถึงการเลิกจ้าง ลดชั่วโมงทำงาน หรือกำจัดตำแหน่งผ่านการลาออก',
 zh: '💼 你需要削减20%的人员预算。选项包括裁员、减少工时或通过自然减员消除职位。'
 },
 options: [
 { id: 'A', text: { en: '👥 Engage staff in collaborative problem-solving, explore voluntary options, prioritize positions serving most vulnerable patrons', th: '👥 ให้พนักงานมีส่วนร่วมในการแก้ปัญหาร่วมกัน สำรวจตัวเลือกโดยสมัครใจ ให้ความสำคัญกับตำแหน่งที่ให้บริการผู้ใช้ที่เปราะบางที่สุด', zh: '👥 让员工参与协作解决问题，探索自愿选项，优先保留服务最脆弱读者的职位' }, consequence: { en: '✅ Ethical downsizing! Staff feel respected, best solutions emerge, essential services preserved.', th: '✅ การลดขนาดอย่างมีจริยธรรม! พนักงานรู้สึกได้รับความเคารพ', zh: '✅ 道德裁员！员工感到受尊重。' }, stats: { competence: 35, ethics: 45, leadership: 40, innovation: 30 } },
 { id: 'B', text: { en: '✂️ Cut positions with lowest seniority immediately to get it over with quickly', th: '✂️ ตัดตำแหน่งที่มีอาวุโสต่ำสุดทันทีเพื่อให้จบเร็ว', zh: '✂️ 立即削减资历最低的职位以快速完成' }, consequence: { en: '⚠️ Blunt approach! May lose talented new employees, morale plummets, services disrupted.', th: '⚠️ แนวทางที่ทื่อ! อาจสูญเสียพนักงานใหม่ที่มีความสามารถ', zh: '⚠️ 生硬的方法！可能失去有才华的新员工。' }, stats: { competence: 5, ethics: -25, leadership: -20, innovation: -15 } },
 { id: 'C', text: { en: '📊 Conduct thorough analysis of service impact for each position before making strategic decisions', th: '📊 ทำการวิเคราะห์อย่างละเอียดเกี่ยวกับผลกระทบต่อบริการของแต่ละตำแหน่งก่อนตัดสินใจเชิงกลยุทธ์', zh: '📊 在做出战略决策前彻底分析每个职位的服务影响' }, consequence: { en: '✅ Data-driven decisions! Cuts minimize service impact, justified to board, staff understand rationale.', th: '✅ การตัดสินใจที่ขับเคลื่อนด้วยข้อมูล! การลดลดผลกระทบต่อบริการ', zh: '✅ 数据驱动的决策！削减最小化服务影响。' }, stats: { competence: 40, ethics: 30, leadership: 35, innovation: 25 } },
 { id: 'D', text: { en: '🤐 Cut across all departments equally to appear fair', th: '🤐 ลดทุกแผนกอย่างเท่าๆ กันเพื่อให้ดูยุติธรรม', zh: '🤐 在所有部门平均削减以显得公平' }, consequence: { en: '⚠️ False fairness! Critical services suffer same as optional ones, strategic priorities ignored.', th: '⚠️ ความยุติธรรมเท็จ! บริการที่สำคัญได้รับผลกระทบเท่ากับบริการทางเลือก', zh: '⚠️ 虚假公平！关键服务受影响与可选服务相同。' }, stats: { competence: -15, ethics: 0, leadership: -10, innovation: -20 } }
 ]
 },

 {
 id: 'li_024',
 text: {
 en: '🏥 A staff member has been taking excessive sick days, but you suspect they may be dealing with a serious health or family issue they haven\'t disclosed.',
 th: '🏥 พนักงานคนหนึ่งลาป่วยมากเกินไป แต่คุณสงสัยว่าพวกเขาอาจกำลังจัดการกับปัญหาสุขภาพหรือครอบครัวที่ร้ายแรงที่ไม่ได้เปิดเผย',
 zh: '🏥 一名员工请了过多病假，但你怀疑他们可能正在处理一个未透露的严重健康或家庭问题。'
 },
 options: [
 { id: 'A', text: { en: '💝 Have caring, non-invasive conversation offering support and information about available resources like EAP, FMLA, and accommodations', th: '💝 มีการสนทนาที่เอาใจใส่และไม่รุกล้ำ เสนอการสนับสนุนและข้อมูลเกี่ยวกับทรัพยากรที่มีอยู่เช่น EAP, FMLA และการปรับปรุง', zh: '💝 进行关怀、非侵入性对话，提供支持和可用资源信息如EAP、FMLA和便利设施' }, consequence: { en: '✅ Compassionate leadership! Employee feels supported, accesses help, returns to productivity with gratitude.', th: '✅ ภาวะผู้นำที่เมตตา! พนักงานรู้สึกได้รับการสนับสนุน', zh: '✅ 富有同情心的领导！员工感到受支持。' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 20 } },
 { id: 'B', text: { en: '📋 Issue formal attendance warning following standard HR policy', th: '📋 ออกคำเตือนการเข้างานอย่างเป็นทางการตามนโยบาย HR มาตรฐาน', zh: '📋 按照标准人力资源政策发出正式出勤警告' }, consequence: { en: '⚠️ Missed opportunity! Employee feels unsupported, may hide worsening situation, eventual ADA issues.', th: '⚠️ พลาดโอกาส! พนักงานรู้สึกไม่ได้รับการสนับสนุน', zh: '⚠️ 错失机会！员工感觉不被支持。' }, stats: { competence: 15, ethics: -15, leadership: -10, innovation: -10 } },
 { id: 'C', text: { en: '📞 Consult with HR about proper approach that balances compassion with organizational needs', th: '📞 ปรึกษากับ HR เกี่ยวกับแนวทางที่เหมาะสมที่สมดุลความเมตตากับความต้องการขององค์กร', zh: '📞 与人力资源部门商议平衡同情心与组织需求的适当方法' }, consequence: { en: '✅ Professionally sound! Protected from liability, proper resources accessed, employee dignity respected.', th: '✅ ถูกต้องตามวิชาชีพ! ได้รับการปกป้องจากความรับผิด', zh: '✅ 专业上合理！受到责任保护。' }, stats: { competence: 35, ethics: 35, leadership: 30, innovation: 15 } },
 { id: 'D', text: { en: '🔍 Investigate by asking coworkers about the employee\'s personal situation', th: '🔍 สืบสวนโดยถามเพื่อนร่วมงานเกี่ยวกับสถานการณ์ส่วนตัวของพนักงาน', zh: '🔍 通过询问同事了解员工的个人情况进行调查' }, consequence: { en: '😱 Privacy violation! Gossip spreads, trust destroyed, potential legal consequences, hostile workplace.', th: '😱 การละเมิดความเป็นส่วนตัว! ซุบซิบแพร่กระจาย ความไว้วางใจถูกทำลาย', zh: '😱 隐私侵犯！流言传播，信任被摧毁。' }, stats: { competence: -25, ethics: -45, leadership: -35, innovation: -20 } }
 ]
 },

 {
 id: 'li_025',
 text: {
 en: '📱 Staff members are increasingly using personal phones during work hours. Patron service has noticeably declined.',
 th: '📱 พนักงานใช้โทรศัพท์ส่วนตัวมากขึ้นในช่วงเวลาทำงาน บริการผู้ใช้ลดลงอย่างเห็นได้ชัด',
 zh: '📱 员工在工作时间越来越多地使用个人手机。读者服务明显下降。'
 },
 options: [
 { id: 'A', text: { en: '📋 Develop clear phone policy with staff input, focusing on service expectations rather than banning technology', th: '📋 พัฒนานโยบายโทรศัพท์ที่ชัดเจนพร้อมการมีส่วนร่วมของพนักงาน มุ่งเน้นความคาดหวังด้านบริการมากกว่าการห้ามเทคโนโลยี', zh: '📋 与员工一起制定明确的手机政策，专注于服务期望而非禁止技术' }, consequence: { en: '✅ Collaborative solution! Staff understand rationale, service improves, reasonable policy respected.', th: '✅ ทางออกที่ร่วมมือ! พนักงานเข้าใจเหตุผล บริการดีขึ้น', zh: '✅ 协作解决方案！员工理解理由，服务改善。' }, stats: { competence: 35, ethics: 30, leadership: 40, innovation: 30 } },
 { id: 'B', text: { en: '🚫 Ban all personal devices immediately during work hours', th: '🚫 ห้ามอุปกรณ์ส่วนตัวทั้งหมดทันทีในช่วงเวลาทำงาน', zh: '🚫 立即在工作时间禁止所有个人设备' }, consequence: { en: '⚠️ Draconian! Staff resentment, parents worried about childcare emergencies, talented employees leave for more flexible workplaces.', th: '⚠️ เผด็จการ! ความขุ่นเคืองของพนักงาน พ่อแม่กังวลเกี่ยวกับเหตุฉุกเฉินการดูแลเด็ก', zh: '⚠️ 严厉！员工不满，有孩子的父母担心托儿紧急情况。' }, stats: { competence: -10, ethics: -20, leadership: -25, innovation: -30 } },
 { id: 'C', text: { en: '📊 Model desired behavior personally and praise staff who provide excellent service, using positive reinforcement', th: '📊 เป็นแบบอย่างพฤติกรรมที่ต้องการเป็นการส่วนตัวและยกย่องพนักงานที่ให้บริการที่ยอดเยี่ยม ใช้การเสริมแรงทางบวก', zh: '📊 亲自示范期望的行为并表扬提供优质服务的员工，使用正向强化' }, consequence: { en: '✅ Culture shift! Standards reinforced positively, staff intrinsically motivated, no resentment created.', th: '✅ การเปลี่ยนแปลงวัฒนธรรม! มาตรฐานได้รับการเสริมแรงในเชิงบวก', zh: '✅ 文化转变！标准得到正向强化。' }, stats: { competence: 30, ethics: 30, leadership: 35, innovation: 25 } },
 { id: 'D', text: { en: '🤐 Ignore since it\'s a generational issue you can\'t change', th: '🤐 เพิกเฉยเนื่องจากเป็นปัญหารุ่นที่คุณไม่สามารถเปลี่ยนแปลงได้', zh: '🤐 忽视因为这是你无法改变的代际问题' }, consequence: { en: '😱 Service collapse! Patron complaints escalate, staff standards erode, library reputation suffers.', th: '😱 บริการล่มสลาย! ข้อร้องเรียนของผู้ใช้เพิ่มขึ้น', zh: '😱 服务崩溃！读者投诉升级。' }, stats: { competence: -20, ethics: -15, leadership: -35, innovation: -25 } }
 ]
 },

 {
 id: 'li_026',
 text: {
 en: '🔥 Two staff members have been in open conflict, making the workplace uncomfortable for everyone and affecting patron experience.',
 th: '🔥 พนักงานสองคนมีความขัดแย้งอย่างเปิดเผย ทำให้ที่ทำงานไม่สบายใจสำหรับทุกคนและส่งผลกระทบต่อประสบการณ์ของผู้ใช้',
 zh: '🔥 两名员工公开冲突，使工作场所对每个人都不舒适并影响读者体验。'
 },
 options: [
 { id: 'A', text: { en: '🤝 Facilitate structured mediation with clear ground rules, focus on behaviors not personalities, document agreements', th: '🤝 อำนวยความสะดวกในการไกล่เกลี่ยที่มีโครงสร้างพร้อมกฎพื้นฐานที่ชัดเจน มุ่งเน้นพฤติกรรมไม่ใช่บุคลิกภาพ บันทึกข้อตกลง', zh: '🤝 促进有明确基本规则的结构化调解，关注行为而非个性，记录协议' }, consequence: { en: '✅ Professional conflict resolution! Root causes addressed, working relationship restored, team learns from process.', th: '✅ การแก้ไขความขัดแย้งอย่างมืออาชีพ! สาเหตุรากเหง้าได้รับการแก้ไข', zh: '✅ 专业的冲突解决！根本原因得到解决。' }, stats: { competence: 35, ethics: 35, leadership: 45, innovation: 25 } },
 { id: 'B', text: { en: '📋 Immediately separate the employees onto different shifts without discussion', th: '📋 แยกพนักงานไปยังกะที่แตกต่างกันทันทีโดยไม่มีการอภิปราย', zh: '📋 立即将员工分到不同班次而不进行讨论' }, consequence: { en: '⚠️ Band-aid solution! Underlying conflict unresolved, resentment builds, scheduling becomes permanent problem.', th: '⚠️ ทางออกชั่วคราว! ความขัดแย้งพื้นฐานไม่ได้รับการแก้ไข', zh: '⚠️ 权宜之计！潜在冲突未解决。' }, stats: { competence: 5, ethics: 0, leadership: -15, innovation: -10 } },
 { id: 'C', text: { en: '⚖️ Meet with each person individually to understand perspectives before bringing them together', th: '⚖️ พบกับแต่ละคนเป็นรายบุคคลเพื่อเข้าใจมุมมองก่อนนำพวกเขามารวมกัน', zh: '⚖️ 分别与每个人会面了解观点，然后再将他们聚在一起' }, consequence: { en: '✅ Thoughtful approach! Multiple perspectives understood, mediation more effective, fair process perceived.', th: '✅ แนวทางที่รอบคอบ! เข้าใจหลายมุมมอง การไกล่เกลี่ยมีประสิทธิภาพมากขึ้น', zh: '✅ 深思熟虑的方法！理解多元观点。' }, stats: { competence: 35, ethics: 35, leadership: 40, innovation: 20 } },
 { id: 'D', text: { en: '🚫 Threaten both with termination if conflict continues', th: '🚫 ขู่ทั้งสองว่าจะยุติการจ้างงานถ้าความขัดแย้งยังคงอยู่', zh: '🚫 如果冲突继续，威胁两人都将被解雇' }, consequence: { en: '😱 Authoritarian failure! Conflict goes underground, trust destroyed, talented employees leave.', th: '😱 ความล้มเหลวแบบเผด็จการ! ความขัดแย้งไปใต้ดิน ความไว้วางใจถูกทำลาย', zh: '😱 威权主义失败！冲突转入地下，信任被摧毁。' }, stats: { competence: -20, ethics: -30, leadership: -40, innovation: -25 } }
 ]
 },

 {
 id: 'li_027',
 text: {
 en: '🎓 Library school graduate applies for entry-level position. They have excellent academic credentials but no practical experience, while another applicant has years of paraprofessional experience but no degree.',
 th: '🎓 ผู้สำเร็จการศึกษาจากโรงเรียนบรรณารักษศาสตร์สมัครตำแหน่งระดับเริ่มต้น พวกเขามีหนังสือรับรองทางวิชาการที่ยอดเยี่ยมแต่ไม่มีประสบการณ์จริง ในขณะที่ผู้สมัครอีกคนมีประสบการณ์กึ่งวิชาชีพหลายปีแต่ไม่มีปริญญา',
 zh: '🎓 图书馆学毕业生申请入门级职位。他们有优秀的学术资历但没有实践经验，而另一位申请者有多年的准专业经验但没有学位。'
 },
 options: [
 { id: 'A', text: { en: '📊 Evaluate both on core competencies needed for the specific role, using structured interview process that assesses actual job requirements', th: '📊 ประเมินทั้งสองในความสามารถหลักที่จำเป็นสำหรับบทบาทเฉพาะ ใช้กระบวนการสัมภาษณ์ที่มีโครงสร้างที่ประเมินข้อกำหนดงานจริง', zh: '📊 根据具体角色所需的核心能力评估两人，使用评估实际工作要求的结构化面试过程' }, consequence: { en: '✅ Merit-based selection! Best candidate for actual role selected, defensible process, both candidates treated fairly.', th: '✅ การคัดเลือกตามคุณสมบัติ! เลือกผู้สมัครที่ดีที่สุดสำหรับบทบาทจริง', zh: '✅ 基于能力的选择！为实际角色选择最佳候选人。' }, stats: { competence: 40, ethics: 40, leadership: 35, innovation: 25 } },
 { id: 'B', text: { en: '🎓 Always hire the degreed candidate since professional credentials matter most', th: '🎓 จ้างผู้สมัครที่มีปริญญาเสมอเนื่องจากหนังสือรับรองวิชาชีพสำคัญที่สุด', zh: '🎓 总是雇用有学位的候选人因为专业资历最重要' }, consequence: { en: '⚠️ Credential bias! May miss excellent practical skills, creates barriers for non-traditional paths.', th: '⚠️ อคติหนังสือรับรอง! อาจพลาดทักษะปฏิบัติที่ยอดเยี่ยม', zh: '⚠️ 资历偏见！可能错过优秀的实践技能。' }, stats: { competence: 10, ethics: -15, leadership: -5, innovation: -20 } },
 { id: 'C', text: { en: '🤝 Consider job-sharing or creating mentorship pair where each can learn from the other', th: '🤝 พิจารณาการแบ่งงานหรือสร้างคู่ที่ปรึกษาที่แต่ละคนสามารถเรียนรู้จากกันและกัน', zh: '🤝 考虑工作分享或创建导师配对，双方可以相互学习' }, consequence: { en: '✅ Innovative staffing! Both strengths leveraged, knowledge transfer happens, library benefits from diverse perspectives.', th: '✅ การจัดพนักงานที่สร้างสรรค์! ใช้ประโยชน์จากจุดแข็งทั้งสอง', zh: '✅ 创新人员配置！双方优势得到发挥。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 45 } },
 { id: 'D', text: { en: '📋 Hire experienced candidate since on-the-job skills can\'t be taught', th: '📋 จ้างผู้สมัครที่มีประสบการณ์เนื่องจากทักษะการทำงานไม่สามารถสอนได้', zh: '📋 雇用有经验的候选人因为在职技能无法教授' }, consequence: { en: '⚠️ Professional standards questioned! MLS requirement exists for reasons, may face professional criticism.', th: '⚠️ มาตรฐานวิชาชีพถูกตั้งคำถาม! ข้อกำหนด MLS มีอยู่ด้วยเหตุผล', zh: '⚠️ 专业标准受质疑！MLS要求的存在是有原因的。' }, stats: { competence: 15, ethics: 5, leadership: 10, innovation: 10 } }
 ]
 },

 {
 id: 'li_028',
 text: {
 en: '📚 Volunteers are enthusiastic but sometimes give incorrect information to patrons or overstep their role boundaries.',
 th: '📚 อาสาสมัครมีความกระตือรือร้นแต่บางครั้งให้ข้อมูลที่ไม่ถูกต้องแก่ผู้ใช้หรือก้าวข้ามขอบเขตบทบาทของพวกเขา',
 zh: '📚 志愿者很热情但有时给读者提供不正确的信息或越界。'
 },
 options: [
 { id: 'A', text: { en: '📋 Develop comprehensive volunteer training program, clear role descriptions, and regular supervision while valuing their contributions', th: '📋 พัฒนาโปรแกรมการฝึกอบรมอาสาสมัครที่ครอบคลุม คำอธิบายบทบาทที่ชัดเจน และการกำกับดูแลเป็นประจำในขณะที่ให้คุณค่ากับการมีส่วนร่วมของพวกเขา', zh: '📋 制定全面的志愿者培训计划、明确的角色描述和定期监督，同时重视他们的贡献' }, consequence: { en: '✅ Volunteer excellence! Clear expectations, quality maintained, volunteers feel supported and valued.', th: '✅ ความเป็นเลิศของอาสาสมัคร! ความคาดหวังที่ชัดเจน คุณภาพได้รับการรักษา', zh: '✅ 志愿者卓越！明确的期望，保持质量。' }, stats: { competence: 40, ethics: 35, leadership: 40, innovation: 30 } },
 { id: 'B', text: { en: '🚫 Reduce volunteer program to avoid quality issues', th: '🚫 ลดโปรแกรมอาสาสมัครเพื่อหลีกเลี่ยงปัญหาคุณภาพ', zh: '🚫 减少志愿者项目以避免质量问题' }, consequence: { en: '⚠️ Valuable resource lost! Community engagement decreases, services suffer, volunteers feel rejected.', th: '⚠️ สูญเสียทรัพยากรที่มีค่า! การมีส่วนร่วมของชุมชนลดลง', zh: '⚠️ 失去宝贵资源！社区参与减少。' }, stats: { competence: -10, ethics: -15, leadership: -20, innovation: -25 } },
 { id: 'C', text: { en: '🤝 Pair volunteers with staff mentors, creating learning relationships that benefit both', th: '🤝 จับคู่อาสาสมัครกับที่ปรึกษาพนักงาน สร้างความสัมพันธ์การเรียนรู้ที่เป็นประโยชน์ต่อทั้งสองฝ่าย', zh: '🤝 将志愿者与员工导师配对，创建对双方都有益的学习关系' }, consequence: { en: '✅ Mentorship success! Knowledge transfer, staff develop leadership skills, volunteers grow.', th: '✅ ความสำเร็จของการให้คำปรึกษา! การถ่ายทอดความรู้', zh: '✅ 导师制成功！知识转移。' }, stats: { competence: 35, ethics: 35, leadership: 40, innovation: 35 } },
 { id: 'D', text: { en: '✅ Accept volunteer limitations since they\'re free labor', th: '✅ ยอมรับข้อจำกัดของอาสาสมัครเนื่องจากพวกเขาเป็นแรงงานฟรี', zh: '✅ 接受志愿者的限制因为他们是免费劳动力' }, consequence: { en: '😱 Service quality disaster! Patron trust eroded, incorrect information spreads, professional reputation damaged.', th: '😱 ภัยพิบัติคุณภาพบริการ! ความไว้วางใจของผู้ใช้ถูกกัดกร่อน', zh: '😱 服务质量灾难！读者信任被侵蚀。' }, stats: { competence: -25, ethics: -30, leadership: -25, innovation: -20 } }
 ]
 },

 {
 id: 'li_029',
 text: {
 en: '💻 Library is implementing new integrated library system (ILS). Staff are anxious and resistant to the change.',
 th: '💻 ห้องสมุดกำลังใช้ระบบห้องสมุดแบบบูรณาการ (ILS) ใหม่ พนักงานวิตกกังวลและต่อต้านการเปลี่ยนแปลง',
 zh: '💻 图书馆正在实施新的集成图书馆系统(ILS)。员工焦虑并抵制变化。'
 },
 options: [
 { id: 'A', text: { en: '📋 Develop comprehensive change management plan with clear timeline, extensive training, staff input, and ongoing support', th: '📋 พัฒนาแผนการจัดการการเปลี่ยนแปลงที่ครอบคลุมพร้อมไทม์ไลน์ที่ชัดเจน การฝึกอบรมอย่างกว้างขวาง การมีส่วนร่วมของพนักงาน และการสนับสนุนอย่างต่อเนื่อง', zh: '📋 制定全面的变革管理计划，包括明确的时间表、广泛的培训、员工参与和持续支持' }, consequence: { en: '✅ Successful implementation! Staff feel supported, adoption smooth, service disruption minimized.', th: '✅ การนำไปใช้ที่ประสบความสำเร็จ! พนักงานรู้สึกได้รับการสนับสนุน', zh: '✅ 成功实施！员工感到受支持。' }, stats: { competence: 40, ethics: 30, leadership: 45, innovation: 35 } },
 { id: 'B', text: { en: '⏩ Push through quickly since prolonging uncertainty makes anxiety worse', th: '⏩ ผลักดันอย่างรวดเร็วเนื่องจากการยืดเยื้อความไม่แน่นอนทำให้ความกังวลแย่ลง', zh: '⏩ 快速推进因为延长不确定性会加剧焦虑' }, consequence: { en: '😱 Implementation disaster! Errors multiply, staff overwhelmed, patron service crashes.', th: '😱 ภัยพิบัติการนำไปใช้! ข้อผิดพลาดเพิ่มขึ้น พนักงานท่วมท้น', zh: '😱 实施灾难！错误倍增，员工不堪重负。' }, stats: { competence: -25, ethics: -20, leadership: -30, innovation: -15 } },
 { id: 'C', text: { en: '👥 Identify change champions among staff, train them first, and use peer support network', th: '👥 ระบุแชมเปี้ยนการเปลี่ยนแปลงในหมู่พนักงาน ฝึกอบรมพวกเขาก่อน และใช้เครือข่ายสนับสนุนเพื่อน', zh: '👥 在员工中确定变革倡导者，先培训他们，并使用同伴支持网络' }, consequence: { en: '✅ Peer leadership! Early adopters support others, organic adoption, reduced resistance.', th: '✅ ภาวะผู้นำเพื่อน! ผู้นำเริ่มต้นก่อนสนับสนุนคนอื่น', zh: '✅ 同伴领导！早期采用者支持他人。' }, stats: { competence: 35, ethics: 30, leadership: 40, innovation: 40 } },
 { id: 'D', text: { en: '📋 Delay implementation until staff feel completely ready', th: '📋 เลื่อนการนำไปใช้จนกว่าพนักงานจะรู้สึกพร้อมอย่างสมบูรณ์', zh: '📋 推迟实施直到员工感到完全准备好' }, consequence: { en: '⚠️ Paralysis! Staff never feel fully ready, costs mount, vendor support expires.', th: '⚠️ อัมพาต! พนักงานไม่เคยรู้สึกพร้อมอย่างสมบูรณ์', zh: '⚠️ 瘫痪！员工永远不会感到完全准备好。' }, stats: { competence: -15, ethics: 5, leadership: -20, innovation: -25 } }
 ]
 },

 {
 id: 'li_030',
 text: {
 en: '💡 A staff member proposes innovative outreach program that could significantly increase community engagement but requires substantial investment of time and resources.',
 th: '💡 พนักงานคนหนึ่งเสนอโปรแกรมเผยแพร่นวัตกรรมที่อาจเพิ่มการมีส่วนร่วมของชุมชนอย่างมากแต่ต้องการการลงทุนเวลาและทรัพยากรอย่างมาก',
 zh: '💡 一名员工提出创新外展计划，可以显著增加社区参与但需要大量时间和资源投入。'
 },
 options: [
 { id: 'A', text: { en: '🎯 Support with pilot program, providing resources to test concept before full commitment', th: '🎯 สนับสนุนด้วยโปรแกรมนำร่อง ให้ทรัพยากรเพื่อทดสอบแนวคิดก่อนมุ่งมั่นเต็มที่', zh: '🎯 支持试点项目，提供资源在全面承诺前测试概念' }, consequence: { en: '✅ Innovation supported! Staff empowered, data gathered, smart risk-taking modeled.', th: '✅ นวัตกรรมได้รับการสนับสนุน! พนักงานได้รับอำนาจ', zh: '✅ 创新得到支持！员工被赋权。' }, stats: { competence: 35, ethics: 30, leadership: 40, innovation: 50 } },
 { id: 'B', text: { en: '🚫 Decline since proven programming is safer investment', th: '🚫 ปฏิเสธเนื่องจากโปรแกรมที่พิสูจน์แล้วเป็นการลงทุนที่ปลอดภัยกว่า', zh: '🚫 拒绝因为经过验证的项目是更安全的投资' }, consequence: { en: '⚠️ Innovation stifled! Staff demotivated, library misses opportunity, competitors advance.', th: '⚠️ นวัตกรรมถูกระงับ! พนักงานขาดแรงจูงใจ', zh: '⚠️ 创新受阻！员工失去动力。' }, stats: { competence: -10, ethics: -5, leadership: -15, innovation: -40 } },
 { id: 'C', text: { en: '📊 Require detailed project plan, success metrics, and risk assessment before making decision', th: '📊 ต้องการแผนโครงการโดยละเอียด เมตริกความสำเร็จ และการประเมินความเสี่ยงก่อนตัดสินใจ', zh: '📊 在做决定前要求详细的项目计划、成功指标和风险评估' }, consequence: { en: '✅ Evidence-based decision! Staff develops professional skills, decision defensible, resources protected.', th: '✅ การตัดสินใจตามหลักฐาน! พนักงานพัฒนาทักษะวิชาชีพ', zh: '✅ 基于证据的决策！员工发展专业技能。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: 30 } },
 { id: 'D', text: { en: '💰 Implement fully immediately since staff enthusiasm should be captured', th: '💰 นำไปใช้อย่างเต็มที่ทันทีเนื่องจากความกระตือรือร้นของพนักงานควรได้รับการยึด', zh: '💰 立即全面实施因为应该抓住员工的热情' }, consequence: { en: '⚠️ Reckless commitment! If program fails, significant resources wasted, future innovation harder to justify.', th: '⚠️ การมุ่งมั่นที่ประมาท! หากโปรแกรมล้มเหลว ทรัพยากรสิ้นเปลืองมาก', zh: '⚠️ 鲁莽的承诺！如果项目失败，大量资源浪费。' }, stats: { competence: -15, ethics: -10, leadership: -5, innovation: 15 } }
 ]
 },

 // SECTION 5: ETHICS & PROFESSIONAL CHALLENGES (Questions 31-40)

 {
 id: 'li_031',
 text: {
 en: '🚨 A patron with a hygiene issue (strong odor) is causing complaints from other users. The patron is reading quietly and following all other rules.',
 th: '🚨 ผู้ใช้บริการที่มีปัญหาด้านสุขอนามัย (กลิ่นแรง) ทำให้เกิดข้อร้องเรียนจากผู้ใช้คนอื่น ผู้ใช้กำลังอ่านอย่างเงียบๆ และปฏิบัติตามกฎอื่นๆ ทั้งหมด',
 zh: '🚨 一位有卫生问题（强烈气味）的读者引起了其他用户的投诉。该读者正在安静阅读并遵守所有其他规则。'
 },
 options: [
 { id: 'A', text: { en: '💬 Handle delicately: Have private, respectful conversation explaining the complaint and policy, offering resources (shower access, laundry) if applicable', th: '💬 จัดการอย่างละเอียดอ่อน: มีการสนทนาส่วนตัวและเคารพ อธิบายข้อร้องเรียนและนโยบาย เสนอทรัพยากร (การเข้าถึงห้องอาบน้ำ การซักรีด) หากทำได้', zh: '💬 委婉处理：进行私下、尊重的对话解释投诉和政策，如果适用提供资源（洗澡、洗衣）' }, consequence: { en: '✅ Dignity preserved! Issue addressed directly but compassionately, other patrons satisfied, vulnerable patron connected to help.', th: '✅ รักษาศักดิ์ศรี! ปัญหาได้รับการแก้ไขโดยตรงแต่ด้วยความเมตตา', zh: '✅ 尊严得以维护！问题得到直接但富有同情心的解决。' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: 20 } },
 { id: 'B', text: { en: '🚫 Immediately ask patron to leave due to disrupting others', th: '🚫 ขอให้ผู้ใช้ออกไปทันทีเนื่องจากรบกวนผู้อื่น', zh: '🚫 立即要求读者离开因为干扰了他人' }, consequence: { en: '⚠️ Harsh treatment! Subjective enforcement, potential discrimination against homeless, public relations risk.', th: '⚠️ การปฏิบัติที่รุนแรง! การบังคับใช้ตามความรู้สึก', zh: '⚠️ 严厉对待！主观执法，可能歧视无家可归者。' }, stats: { competence: 10, ethics: -20, leadership: -10, innovation: -15 } },
 { id: 'C', text: { en: '🤐 Ignore complaints since the patron is not breaking behavior rules', th: '🤐 เพิกเฉยต่อข้อร้องเรียนเนื่องจากผู้ใช้ไม่ได้ละเมิดกฎพฤติกรรม', zh: '🤐 忽视投诉因为读者没有违反行为规则' }, consequence: { en: '⚠️ Service impact! Other users leave, library atmosphere deteriorates, problem persists.', th: '⚠️ ผลกระทบต่อบริการ! ผู้ใช้อื่นจากไป', zh: '⚠️ 服务影响！其他用户离开。' }, stats: { competence: -15, ethics: 10, leadership: -20, innovation: -10 } },
 { id: 'D', text: { en: '💨 Spray air freshener around the area conspicuously', th: '💨 ฉีดสเปรย์ปรับอากาศรอบๆ พื้นที่อย่างเห็นได้ชัด', zh: '💨 在该区域周围显眼地喷洒空气清新剂' }, consequence: { en: '😱 Humiliating and unprofessional! Patron shamed, staff look petty, chemical sensitivity issues created.', th: '😱 น่าอับอายและไม่เป็นมืออาชีพ! ผู้ใช้รู้สึกอับอาย', zh: '😱 羞辱且不专业！读者感到羞耻。' }, stats: { competence: -30, ethics: -40, leadership: -35, innovation: -25 } }
 ]
 },

 {
 id: 'li_032',
 text: {
 en: '💰 A local business offers a large donation if you name the children\'s room after their company, which has a controversial environmental record.',
 th: '💰 ธุรกิจท้องถิ่นเสนอเงินบริจาคก้อนโตหากคุณตั้งชื่อห้องเด็กตามบริษัทของพวกเขา ซึ่งมีประวัติด้านสิ่งแวดล้อมที่ถกเถียง',
 zh: '💰 一家当地企业提议如果你以他们公司的名字命名儿童室就提供巨额捐款，但该公司有争议的环境记录。'
 },
 options: [
 { id: 'A', text: { en: '📋 Review gift acceptance policy and consult board; weigh funding benefit against reputational risk and community values', th: '📋 ตรวจสอบนโยบายการรับของขวัญและปรึกษาคณะกรรมการ; ชั่งน้ำหนักประโยชน์ทางการเงินกับความเสี่ยงด้านชื่อเสียงและค่านิยมชุมชน', zh: '📋 审查礼物接受政策并咨询董事会；权衡资金利益与声誉风险和社区价值观' }, consequence: { en: '✅ Ethical due diligence! Decision made transparently, integrity maintained, policy clarifies future situations.', th: '✅ ความรอบคอบทางจริยธรรม! การตัดสินใจทำอย่างโปร่งใส', zh: '✅ 道德尽职调查！决策透明。' }, stats: { competence: 35, ethics: 35, leadership: 40, innovation: 20 } },
 { id: 'B', text: { en: '💵 Accept immediately; the library desperately needs money regardless of source', th: '💵 ยอมรับทันที; ห้องสมุดต้องการเงินอย่างมากโดยไม่คำนึงถึงแหล่งที่มา', zh: '💵 立即接受；图书馆迫切需要钱不管来源如何' }, consequence: { en: '😱 Reputation tarnished! Community backlash, protests, library seen as"bought,"trust eroded.', th: '😱 ชื่อเสียงมัวหมอง! การต่อต้านจากชุมชน', zh: '😱 声誉受损！社区强烈反对。' }, stats: { competence: -10, ethics: -30, leadership: -25, innovation: -10 } },
 { id: 'C', text: { en: '🚫 Refuse out of hand to avoid any controversy', th: '🚫 ปฏิเสธทันทีเพื่อหลีกเลี่ยงข้อโต้แย้งใดๆ', zh: '🚫 断然拒绝以避免任何争议' }, consequence: { en: '⚠️ Opportunity lost! Funding gap remains, donor offended, could have negotiated terms.', th: '⚠️ พลาดโอกาส! ช่องว่างทางการเงินยังคงอยู่', zh: '⚠️ 失去机会！资金缺口仍然存在。' }, stats: { competence: 10, ethics: 20, leadership: 5, innovation: -15 } },
 { id: 'D', text: { en: '🤝 Negotiate: Accept donation for specific programs rather than naming rights to minimize visual association', th: '🤝 เจรจา: ยอมรับการบริจาคสำหรับโปรแกรมเฉพาะแทนสิทธิ์ในการตั้งชื่อเพื่อลดการเชื่อมโยงทางสายตา', zh: '🤝 谈判：接受特定项目的捐款而不是冠名权以最小化视觉关联' }, consequence: { en: '✅ Strategic compromise! Funding secured for services, branding avoided, neutral ground found.', th: '✅ การประนีประนอมเชิงกลยุทธ์! เงินทุนได้รับการรักษา', zh: '✅ 战略妥协！资金得到保障。' }, stats: { competence: 40, ethics: 30, leadership: 35, innovation: 30 } }
 ]
 },

 {
 id: 'li_033',
 text: {
 en: '📥 Your library receives a"Request for Reconsideration"for an LGBTQ+ picture book. The requester is a city council member who votes on your budget.',
 th: '📥 ห้องสมุดของคุณได้รับ"คำร้องขอพิจารณาใหม่"สำหรับหนังสือภาพ LGBTQ+ ผู้ร้องขอคือสมาชิกสภาเมืองที่ลงคะแนนเสียงงบประมาณของคุณ',
 zh: '📥 你的图书馆收到一本LGBTQ+图画书的"重新审议请求"。请求者是投票决定你预算的市议会议员。'
 },
 options: [
 { id: 'A', text: { en: '⚖️ Follow standard reconsideration policy exactly as with any other patron, insulating the process from political pressure', th: '⚖️ ปฏิบัติตามนโยบายการพิจารณาใหม่มาตรฐานเหมือนกับผู้ใช้คนอื่นๆ แยกกระบวนการออกจากแรงกดดันทางการเมือง', zh: '⚖️ 严格按照其他读者的标准重新审议政策执行，使程序免受政治压力' }, consequence: { en: '✅ Professional integrity check! Process honored, library independence asserted, ethics upheld despite risk.', th: '✅ การตรวจสอบความซื่อสัตย์ทางวิชาชีพ! ให้เกียรติกระบวนการ', zh: '✅ 专业诚信检查！程序受尊重，维护图书馆独立性。' }, stats: { competence: 35, ethics: 50, leadership: 40, innovation: 20 } },
 { id: 'B', text: { en: '🗑️ Remove the book quietly to save the budget, thinking"one book isn\'t worth closing the library"', th: '🗑️ นำหนังสือออกอย่างเงียบๆ เพื่อรักษางบประมาณ คิดว่า"หนังสือเล่มเดียวไม่คุ้มที่จะปิดห้องสมุด"', zh: '🗑️ 悄悄移除书籍以节省预算，想着"一本书不值得关闭图书馆"' }, consequence: { en: '😱 Ethical capitulation! Precedent set for political censorship, staff demoralized, slippery slope activated.', th: '😱 การยอมจำนนทางจริยธรรม! สร้างบรรทัดฐานสำหรับการเซ็นเซอร์', zh: '😱 道德投降！开启政治审查先例。' }, stats: { competence: -20, ethics: -45, leadership: -30, innovation: -25 } },
 { id: 'C', text: { en: '📢 Contact national advocacy groups immediately to expose the pressure', th: '📢 ติดต่อกลุ่มสนับสนุนระดับชาติทันทีเพื่อเปิดเผยแรงกดดัน', zh: '📢 立即联系国家倡导团体曝光压力' }, consequence: { en: '⚠️ High stakes escalation! National support gained but local relationships scorched, budget likely slashed in retaliation.', th: '⚠️ การเดิมพันสูง! ได้รับการสนับสนุนระดับชาติแต่ความสัมพันธ์ท้องถิ่นเสียหาย', zh: '⚠️ 高风险升级！获得国家支持但破坏当地关系。' }, stats: { competence: 15, ethics: 25, leadership: 0, innovation: 10 } },
 { id: 'D', text: { en: '💬 Meet with council member to explain collection development policies and the importance of diverse representation', th: '💬 พบกับสมาชิกสภาเพื่ออธิบายนโยบายการพัฒนาคอลเลกชันและความสำคัญของการเป็นตัวแทนที่หลากหลาย', zh: '💬 与议员会面解释馆藏发展政策和多元化代表的重要性' }, consequence: { en: '✅ Educational advocacy! Opportunity taken to educate funder, firm but respectful stance maintained.', th: '✅ การสนับสนุนทางการศึกษา! โอกาสที่ใช้ในการให้ความรู้แก่ผู้สนับสนุนเงินทุน', zh: '✅ 教育倡导！借机教育资助者。' }, stats: { competence: 40, ethics: 40, leadership: 45, innovation: 30 } }
 ]
 },

 {
 id: 'li_034',
 text: {
 en: '🔍 You discover a staff member has been waiving fines for friends and family systematically.',
 th: '🔍 คุณค้นพบว่าพนักงานได้ยกเลิกค่าปรับให้กับเพื่อนและครอบครัวอย่างเป็นระบบ',
 zh: '🔍 你发现一名员工系统地免除朋友和家人的罚款。'
 },
 options: [
 { id: 'A', text: { en: '📋 Initiate formal disciplinary process; this is theft/fraud and violates public trust', th: '📋 เริ่มกระบวนการทางวินัยอย่างเป็นทางการ; นี่คือการขโมย/ฉ้อโกงและละเมิดความไว้วางใจของสาธารณะ', zh: '📋 启动正式纪律程序；这是盗窃/欺诈，违反了公众信任' }, consequence: { en: '✅ Ethical standard enforcement! Message sent that integrity matters, public assets protected.', th: '✅ การบังคับใช้มาตรฐานจริยธรรม! ส่งสารว่าความซื่อสัตย์สำคัญ', zh: '✅ 执行道德标准！传达诚信重要的信息。' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: 15 } },
 { id: 'B', text: { en: '💬 Issue verbal warning and retraining on fine policies', th: '💬 ออกคำเตือนด้วยวาจาและการฝึกอบรมซ้ำเกี่ยวกับนโยบายค่าปรับ', zh: '💬 发出口头警告并重新培训罚款政策' }, consequence: { en: '⚠️ Too lenient! Systematic abuse requires stronger response, other staff may perceive favoritism.', th: '⚠️ ผ่อนปรนเกินไป! การละเมิดอย่างเป็นระบบต้องการการตอบสนองที่แข็งแกร่งกว่า', zh: '⚠️ 太宽大！系统性滥用需要更强烈的回应。' }, stats: { competence: 10, ethics: -15, leadership: -10, innovation: -10 } },
 { id: 'C', text: { en: '🌍 Use incident to review fine policy overall; maybe fines should be eliminated for everyone if they are a barrier', th: '🌍 ใช้เหตุการณ์เพื่อทบทวนนโยบายค่าปรับโดยรวม; อาจควรยกเลิกค่าปรับสำหรับทุกคนหากเป็นอุปสรรค', zh: '🌍 利用此事件全面审查罚款政策；如果罚款是障碍，也许应该对所有人取消' }, consequence: { en: '✅ Systemic transformation! Turning negative into positive, addressing equity issue (fine-free), fixing root cause.', th: '✅ การเปลี่ยนแปลงเชิงระบบ! เปลี่ยนลบเป็นบวก', zh: '✅ 系统性变革！变消极为积极。' }, stats: { competence: 40, ethics: 35, leadership: 45, innovation: 45 } },
 { id: 'D', text: { en: '🤐 Cover it up but tell them to stop immediately', th: '🤐 ปิดบังแต่บอกให้พวกเขาหยุดทันที', zh: '🤐 掩盖此事但告诉他们立即停止' }, consequence: { en: '😱 Complicity! You are now an accessory to fraud, your own ethics compromised.', th: '😱 การสมรู้ร่วมคิด! ตอนนี้คุณเป็นผู้สมรู้ร่วมคิดในการฉ้อโกง', zh: '😱 同谋！你现在是欺诈的帮凶。' }, stats: { competence: -20, ethics: -50, leadership: -40, innovation: -20 } }
 ]
 },

 {
 id: 'li_035',
 text: {
 en: '🏚️ The library building has structural issues (leaky roof, poor HVAC). The city delays repairs repeatedly. Staff and patrons are uncomfortable.',
 th: '🏚️ อาคารห้องสมุดมีปัญหาโครงสร้าง (หลังคารั่ว HVAC แย่) เมืองเลื่อนการซ่อมแซมซ้ำแล้วซ้ำเล่า พนักงานและผู้ใช้ไม่สบายใจ',
 zh: '🏚️ 图书馆建筑有结构问题（屋顶漏水，HVAC差）。城市一再推迟维修。员工和读者感到不适。'
 },
 options: [
 { id: 'A', text: { en: '📊 Document all issues, safety hazards, and service impacts meticulously; present comprehensive report to city council and public', th: '📊 บันทึกปัญหาทั้งหมด อันตรายด้านความปลอดภัย และผลกระทบต่อบริการอย่างละเอียด; นำเสนอรายงานที่ครอบคลุมต่อสภาเมืองและสาธารณะ', zh: '📊 细致记录所有问题、安全隐患和服务影响；向市议会和公众提交综合报告' }, consequence: { en: '✅ Advocacy effectiveness! Evidence forces action, safety prioritized, repairs funded due to public pressure.', th: '✅ ประสิทธิภาพการสนับสนุน! หลักฐานบังคับให้ดำเนินการ', zh: '✅ 倡导有效！证据迫使行动。' }, stats: { competence: 35, ethics: 30, leadership: 40, innovation: 20 } },
 { id: 'B', text: { en: '📢 Go to the media with"Library Crumbling"story to shame the city', th: '📢 ไปที่สื่อด้วยเรื่องราว"ห้องสมุดกำลังพังทลาย"เพื่อทำให้เมืองอับอาย', zh: '📢 向媒体爆料"图书馆摇摇欲坠"的故事以羞辱城市' }, consequence: { en: '⚠️ High risk! Relatiohship with city administration damaged, but might get repairs."Nuclear option."', th: '⚠️ ความเสี่ยงสูง! ความสัมพันธ์กับการบริหารเมืองเสียหาย', zh: '⚠️ 高风险！与城市管理层关系受损。' }, stats: { competence: 10, ethics: 10, leadership: 5, innovation: 15 } },
 { id: 'C', text: { en: '🔧 Attempt to fix things yourself with staff volunteers', th: '🔧 พยายามซ่อมแซมด้วยตัวเองกับอาสาสมัครพนักงาน', zh: '🔧 尝试自己和员工志愿者一起修理' }, consequence: { en: '😱 Liability danger! Unlicensed repairs, potential injuries, union grievances, not sustainable.', th: '😱 อันตรายจากความรับผิด! การซ่อมแซมที่ไม่มีใบอนุญาต', zh: '😱 责任危险！未经许可的维修。' }, stats: { competence: -15, ethics: 10, leadership: -10, innovation: 10 } },
 { id: 'D', text: { en: '⏳ Keep waiting patiently, not wanting to rock the boat', th: '⏳ รออย่างอดทนต่อไป ไม่อยากสร้างปัญหา', zh: '⏳ 耐心等待，不想惹麻烦' }, consequence: { en: '⚠️ Neglect continues! Conditions worsen, mold develops, eventual emergency closure required.', th: '⚠️ การละเลยดำเนินต่อไป! สภาพแย่ลง', zh: '⚠️ 忽视继续！情况恶化。' }, stats: { competence: -10, ethics: -10, leadership: -25, innovation: -15 } }
 ]
 },

 {
 id: 'li_036',
 text: {
 en: '📚 A patron returns a stack of books infested with bed bugs. They have been in the book drop with other materials.',
 th: '📚 ผู้ใช้บริการคืนกองหนังสือที่มีตัวเรือด พวกเขาอยู่ในช่องคืนหนังสือพร้อมกับสื่ออื่นๆ',
 zh: '📚 一位读者归还了一堆有臭虫的书。它们和其他材料一直在还书箱里。'
 },
 options: [
 { id: 'A', text: { en: '🚨 Activate pest protocol: Isolate affected materials, inspect surrounding items, contact pest control, suspend patron privileges temporarily until cleared', th: '🚨 เปิดใช้งานโปรโตคอลแมลง: แยกสื่อที่ได้รับผลกระทบ ตรวจสอบรายการโดยรอบ ติดต่อกำจัดแมลง ระงับสิทธิ์ผู้ใช้ชั่วคราว', zh: '🚨 启动害虫协议：隔离受影响材料，检查周围物品，联系害虫防治，暂停读者特权直到清理完毕' }, consequence: { en: '✅ Operational safety! Infestation contained, collection saved, public health protected.', th: '✅ ความปลอดภัยในการดำเนินงาน! การระบาดถูกควบคุม', zh: '✅ 运营安全！虫害得到遏制。' }, stats: { competence: 40, ethics: 25, leadership: 30, innovation: 20 } },
 { id: 'B', text: { en: '🗑️ Throw away the returned books and ignore the rest to save money on exterminators', th: '🗑️ ทิ้งหนังสือที่คืนมาและเพิกเฉยส่วนที่เหลือเพื่อประหยัดเงินค่ากำจัด', zh: '🗑️ 扔掉归还的书并忽略其余的以节省灭虫费用' }, consequence: { en: '😱 Infestation spreads! Bed bugs infest collection and furniture, library forced to close for major treatment.', th: '😱 การระบาดแพร่กระจาย! ตัวเรือดระบาดในคอลเลกชันและเฟอร์นิเจอร์', zh: '😱 虫害蔓延！臭虫侵扰馆藏和家具。' }, stats: { competence: -30, ethics: -15, leadership: -25, innovation: -10 } },
 { id: 'C', text: { en: '🔥 Heat treat all returns for the next month proactively', th: '🔥 บำบัดความร้อนเชิงรุกสำหรับการคืนทั้งหมดในเดือนถัดไป', zh: '🔥 主动对下个月的所有归还物品进行热处理' }, consequence: { en: '✅ Thorough prevention! Resource intensive but ensures safety, staff reassured.', th: '✅ การป้องกันที่ละเอียด! ใช้ทรัพยากรมากแต่รับรองความปลอดภัย', zh: '✅哪怕也是预防！资源密集但确保安全。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: 35 } },
 { id: 'D', text: { en: '🚫 Ban the patron permanently for bringing bugs', th: '🚫 แบนผู้ใช้ถาวรที่นำแมลงมา', zh: '🚫 永久禁止该读者因为带来虫子' }, consequence: { en: '⚠️ Punishing poverty! Bed bugs are a misfortune not a crime, discourages others from reporting issues.', th: '⚠️ ลงโทษความยากจน! ตัวเรือดเป็นโชคร้ายไม่ใช่อาชญากรรม', zh: '⚠️ 惩罚贫困！臭虫是不幸而非犯罪。' }, stats: { competence: 10, ethics: -25, leadership: -15, innovation: -10 } }
 ]
 },

 {
 id: 'li_037',
 text: {
 en: '💻 Your library uses facial recognition security cameras. Privacy advocates demand their removal.',
 th: '💻 ห้องสมุดของคุณใช้กล้องรักษาความปลอดภัยแบบจดจำใบหน้า ผู้สนับสนุนความเป็นส่วนตัวเรียกร้องให้ถอดออก',
 zh: '💻 你的图书馆使用面部识别安全摄像头。隐私倡导者要求拆除它们。'
 },
 options: [
 { id: 'A', text: { en: '🕵️ Removal/Change: Replace with standard cameras, citing library values of privacy and intellectual freedom as incompatible with biometric surveillance', th: '🕵️ ถอด/เปลี่ยน: แทนที่ด้วยกล้องมาตรฐาน อ้างค่านิยมห้องสมุดเรื่องความเป็นส่วนตัวและเสรีภาพทางปัญญาไม่เข้ากับการเฝ้าระวังชีวภาพ', zh: '🕵️ 移除/更改：更换为标准摄像头，理由是图书馆的隐私和学术自由价值观与生物识别监控不兼容' }, consequence: { en: '✅ Values alignment! Privacy champions applaud, trust reinforced, surveillance state resisted.', th: '✅ การจัดแนวค่านิยม! ผู้สนับสนุนความเป็นส่วนตัวปรบมือ', zh: '✅ 价值观一致！隐私捍卫者喝彩。' }, stats: { competence: 30, ethics: 45, leadership: 35, innovation: 20 } },
 { id: 'B', text: { en: '🔒 Keep system for security efficiency despite complaints', th: '🔒 รักษาระบบเพื่อประสิทธิภาพความปลอดภัยแม้จะมีข้อร้องเรียน', zh: '🔒 尽管有投诉仍保留系统以提高安全效率' }, consequence: { en: '⚠️ Ethical erosion! Library normalization of surveillance, patrons feel watched, privacy reputation damaged.', th: '⚠️ การกัดกร่อนทางจริยธรรม! ห้องสมุดทำให้การเฝ้าระวังเป็นเรื่องปกติ', zh: '⚠️ 道德侵蚀！图书馆将监控正常化。' }, stats: { competence: 10, ethics: -25, leadership: -10, innovation: 15 } },
 { id: 'C', text: { en: '⚖️ Create strict data retention policy deleting data within 24 hours unless a crime occurred', th: '⚖️ สร้างนโยบายการเก็บรักษาข้อมูลที่เข้มงวดลบข้อมูลภายใน 24 ชั่วโมงเว้นแต่จะเกิดอาชญากรรม', zh: '⚖️ 制定严格的数据保留政策，除非发生犯罪，否则在24小时内删除数据' }, consequence: { en: '✅ Policy compromise! Balances security needs with privacy concerns, transparent governance.', th: '✅ การประนีประนอมนโยบาย! สมดุลความปลอดภัยกับความเป็นส่วนตัว', zh: '✅ 政策妥协！平衡安全需求与隐私顾虑。' }, stats: { competence: 25, ethics: 20, leadership: 20, innovation: 15 } },
 { id: 'D', text: { en: '🤷 Claim the system doesn\'t store personal data (even if you\'re not sure)', th: '🤷 อ้างว่าระบบไม่เก็บข้อมูลส่วนบุคคล (แม้ว่าคุณจะไม่แน่ใจ)', zh: '🤷 声称系统不存储个人数据（即使你不确定）' }, consequence: { en: '😱 False assurance! If breached, credibility destroyed, legal liability for deception.', th: '😱 การรับประกันเท็จ! หากถูกเจาะ ความน่าเชื่อถือถูกทำลาย', zh: '😱 虚假保证！如果被攻破，信誉被毁。' }, stats: { competence: -20, ethics: -35, leadership: -25, innovation: -10 } }
 ]
 },

 {
 id: 'li_038',
 text: {
 en: '💊 You find evidence of drug use in the public restrooms regularly. Staff are afraid to clean them.',
 th: '💊 คุณพบหลักฐานการใช้ยาเสพติดในห้องน้ำสาธารณะเป็นประจำ พนักงานกลัวที่จะทำความสะอาด',
 zh: '💊 你经常在公共洗手间发现吸毒证据。员工害怕打扫。'
 },
 options: [
 { id: 'A', text: { en: '👷 Install safety measures (blue lights, sharps containers), train staff on safe handling/Narcan, and partner with social workers for patrols', th: '👷 ติดตั้งมาตรการความปลอดภัย (ไฟสีฟ้า ถังทิ้งของมีคม) ฝึกอบรมพนักงาน อุปกรณ์ Narcan และร่วมมือกับนักสังคมสงเคราะห์', zh: '👷 安装安全措施（蓝光、锐器盒），培训员工安全处理/纳洛酮，并与社工合作巡逻' }, consequence: { en: '✅ Harm reduction approach! Safety improved without closing facilities, lives potentially saved, staff empowered.', th: '✅ แนวทางลดอันตราย! ความปลอดภัยดีขึ้นโดยไม่ปิดสิ่งอำนวยความสะดวก', zh: '✅ 减少伤害的方法！安全得到改善。' }, stats: { competence: 35, ethics: 40, leadership: 40, innovation: 35 } },
 { id: 'B', text: { en: '🔒 Close restrooms to the public entirely', th: '🔒 ปิดห้องน้ำสำหรับสาธารณะทั้งหมด', zh: '🔒 完全不对公众开放洗手间' }, consequence: { en: '⚠️ Accessibility barrier! Families, seniors, and homeless denied basic necessity, complaints increase.', th: '⚠️ อุปสรรคการเข้าถึง! ครอบครัวและผู้สูงอายุถูกปฏิเสธความจำเป็นพื้นฐาน', zh: '⚠️ 访问障碍！家庭、老人和无家可归者被拒绝基本必需品。' }, stats: { competence: -5, ethics: -15, leadership: -10, innovation: -20 } },
 { id: 'C', text: { en: '👮 Increasing police patrols and zero-tolerance banning policy', th: '👮 เพิ่มการลาดตระเวนของตำรวจและนโยบายการแบนแบบไม่อนุโลม', zh: '👮 增加警察巡逻和零容忍禁止政策' }, consequence: { en: '⚠️ Security vs. Service! Safer restrooms but unwelcoming atmosphere, vulnerable populations alienated.', th: '⚠️ ความปลอดภัยกับบริการ! ห้องน้ำปลอดภัยขึ้นแต่บรรยากาศไม่เป็นมิตร', zh: '⚠️ 安全与服务！洗手间更安全但不受欢迎。' }, stats: { competence: 20, ethics: 10, leadership: 15, innovation: -5 } },
 { id: 'D', text: { en: '🧹 Force staff to clean more often to discourage loitering', th: '🧹 บังคับให้พนักงานทำความสะอาดบ่อยขึ้นเพื่อกีดกันการเตร็ดเตร่', zh: '🧹 强迫员工更频繁地打扫以阻止闲逛' }, consequence: { en: '😱 Safety violation! Staff puts at risk of incidental stick injuries, morale collapses, union grievance.', th: '😱 การละเมิดความปลอดภัย! พนักงานเสี่ยงต่อการบาดเจ็บ', zh: '😱 安全违规！员工面临受伤风险。' }, stats: { competence: -25, ethics: -30, leadership: -35, innovation: -20 } }
 ]
 },

 {
 id: 'li_039',
 text: {
 en: '🗳️ It is election season. A staff member is wearing a"Vote for [Candidate]"button on the reference desk.',
 th: '🗳️ ถึงฤดูกาลเลือกตั้ง พนักงานคนหนึ่งติดเข็มกลัด"โหวตให้ [ผู้สมัคร]"ที่โต๊ะอ้างอิง',
 zh: '🗳️ 选举季节。一名员工在咨询台戴着"投给[候选人]"的徽章。'
 },
 options: [
 { id: 'A', text: { en: '📋 Enforce policy on political neutrality for public employees while on duty; explain difference between personal views and institutional representation', th: '📋 บังคับใช้นโยบายความเป็นกลางทางการเมืองสำหรับพนักงานสาธารณะขณะปฏิบัติหน้าที่ อธิบายความแตกต่างระหว่างมุมมองส่วนตัวและการเป็นตัวแทนสถาบัน', zh: '📋 对值班公职人员执行政治中立政策；解释个人观点与机构代表之间的区别' }, consequence: { en: '✅ Professional standard maintained! Library neutral space preserved, legal pitfalls avoided, staff educated.', th: '✅ รักษามาตรฐานวิชาชีพ! พื้นที่กลางของห้องสมุดได้รับการรักษา', zh: '✅ 保持专业标准！维护图书馆中立空间。' }, stats: { competence: 30, ethics: 35, leadership: 30, innovation: 15 } },
 { id: 'B', text: { en: '💬 Allow it under free speech principles', th: '💬 อนุญาตตามหลักการเสรีภาพในการพูด', zh: '💬 根据言论自由原则允许' }, consequence: { en: '⚠️ Hatch Act/Policy Violation! Public institutions cannot endorse candidates, potential legal trouble or funding loss.', th: '⚠️ การละเมิดนโยบาย! สถาบันสาธารณะไม่สามารถรับรองผู้สมัคร', zh: '⚠️ 违反哈奇法案/政策！公共机构不能支持候选人。' }, stats: { competence: -15, ethics: -10, leadership: -20, innovation: -5 } },
 { id: 'C', text: { en: '🚫 Ban all buttons or personal expression items', th: '🚫 ห้ามเข็มกลัดหรือรายการแสดงออกส่วนตัวทั้งหมด', zh: '🚫 禁止所有徽章或个人表达物品' }, consequence: { en: '⚠️ Overreach! Morale drops, legally questionable if banning non-political expression too.', th: '⚠️ เกินขอบเขต! ขวัญกำลังใจลดลง', zh: '⚠️ 过度！如果禁止非政治表达，法律上有问题。' }, stats: { competence: 5, ethics: 0, leadership: -10, innovation: -10 } },
 { id: 'D', text: { en: '👥 Only enforce if a patron complains', th: '👥 บังคับใช้เฉพาะเมื่อมีผู้ใช้ร้องเรียน', zh: '👥 只有在读者投诉时才执行' }, consequence: { en: '⚠️ Inconsistent leadership! Rules should be applied fairly, not based on complaints.', th: '⚠️ ภาวะผู้นำที่ไม่สม่ำเสมอ! กฎควรใช้อย่างยุติธรรม', zh: '⚠️ 领导力不一致！规则应公平适用。' }, stats: { competence: -10, ethics: -15, leadership: -20, innovation: -5 } }
 ]
 },

 {
 id: 'li_040',
 text: {
 en: '📚 You are weeding (removing) books from the collection. A resident accuses you of"throwing away taxpayer property"and"destroying culture."',
 th: '📚 คุณกำลังคัดเลือก (นำออก) หนังสือจากคอลเลกชัน ผู้อยู่อาศัยกล่าวหาคุณว่า"ทิ้งทรัพย์สินของผู้เสียภาษี"และ"ทำลายวัฒนธรรม"',
 zh: '📚 你正在从馆藏中剔除（移除）书籍。一位居民指责你"扔掉纳税人的财产"和"破坏文化"。'
 },
 options: [
 { id: 'A', text: { en: '🎓 Explain CREW method/weeding criteria (Musty, Ugly, Superseded, Trivial, Irrelevant, Elsewhere); demonstrate how removal makes room for relevant materials', th: '🎓 อธิบายวิธี CREW / เกณฑ์การคัดเลือก สาธิตว่าการนำออกทำให้มีพื้นที่สำหรับสื่อที่เกี่ยวข้องอย่างไร', zh: '🎓 解释CREW方法/剔除标准（发霉、丑陋、被取代、琐碎、不相关、别处有）；演示移除如何为相关材料腾出空间' }, consequence: { en: '✅ Professional education! Patron understands library is active collection not warehouse, trust restored.', th: '✅ การศึกษาวิชาชีพ! ผู้ใช้เข้าใจว่าห้องสมุดเป็นคอลเลกชันที่ใช้งานอยู่', zh: '✅ 专业教育！读者理解图书馆是活跃的馆藏。' }, stats: { competence: 40, ethics: 30, leadership: 35, innovation: 20 } },
 { id: 'B', text: { en: '🛑 Stop weeding immediately to avoid conflict', th: '🛑 หยุดการคัดเลือกทันทีเพื่อหลีกเลี่ยงความขัดแย้ง', zh: '🛑 立即停止剔除以避免冲突' }, consequence: { en: '⚠️ Collection degradation! Shelves overcrowded, outdated info remains, circulation drops.', th: '⚠️ การเสื่อมสภาพของคอลเลกชัน! ชั้นวางแน่นเกินไป', zh: '⚠️ 馆藏退化！书架过度拥挤。' }, stats: { competence: -20, ethics: -15, leadership: -25, innovation: -20 } },
 { id: 'C', text: { en: '🎁 Offer the weeded books to the patron for free', th: '🎁 เสนอหนังสือที่คัดออกให้ผู้ใช้ฟรี', zh: '🎁 免费将剔除的书送给该读者' }, consequence: { en: '✅ De-escalation! Book finds home, patron placated, weeding continues.', th: '✅ การลดความรุนแรง! หนังสือมีที่อยู่', zh: '✅ 降温！书找到了家。' }, stats: { competence: 25, ethics: 25, leadership: 20, innovation: 15 } },
 { id: 'D', text: { en: '🗑️ Hide the weeding process by doing it when closed', th: '🗑️ ซ่อนกระบวนการคัดเลือกโดยทำเมื่อปิดทำการ', zh: '🗑️ 关闭时进行剔除以隐藏该过程' }, consequence: { en: '⚠️ Lack of transparency! Missed opportunity to educate, problem will recur if caught.', th: '⚠️ ขาดความโปร่งใส! พลาดโอกาสให้ความรู้', zh: '⚠️ 缺乏透明度！错失教育机会。' }, stats: { competence: 10, ethics: -10, leadership: -5, innovation: -5 } }
 ]
 },

 // SECTION 6: INNOVATION & FUTURE PLANNING (Questions 41-50)

 {
 id: 'li_041',
 text: {
 en: '🧠 A new grant opportunity arises for a"Learning Lab"space, but it requires converting the quiet reading room.',
 th: '🧠 โอกาสรับทุนใหม่เกิดขึ้นสำหรับพื้นที่"ห้องปฏิบัติการการเรียนรู้"แต่ต้องเปลี่ยนห้องอ่านหนังสือเงียบ',
 zh: '🧠 一个"学习实验室"空间的新的拨款机会出现了，但它需要改造安静的阅览室。'
 },
 options: [
 { id: 'A', text: { en: '📊 Survey users to gauge usage of quiet room vs. demand for collaborative space; propose hybrid solution with soundproofing if possible', th: '📊 สำรวจผู้ใช้เพื่อวัดการใช้งานห้องเงียบเทียบกับความต้องการพื้นที่ทำงานร่วมกัน; เสนอโซลูชันแบบผสมผสานพร้อมการป้องกันเสียงหากเป็นไปได้', zh: '📊 调查用户以评估安静房间的使用情况与协作空间的需求；如果可能，提出带有隔音功能的混合解决方案' }, consequence: { en: '✅ Data-driven design! Community needs balanced, grant secured for right purpose, space optimization maximized.', th: '✅ การออกแบบที่ขับเคลื่อนด้วยข้อมูล! ความต้องการของชุมชนสมดุล', zh: '✅ 数据驱动的设计！社区需求平衡。' }, stats: { competence: 35, ethics: 30, leadership: 35, innovation: 40 } },
 { id: 'B', text: { en: '🔨 Immediately accept grant and start demolition; innovation is the future', th: '🔨 ยอมรับทุนทันทีและเริ่มรื้อถอน; นวัตกรรมคืออนาคต', zh: '🔨 立即接受拨款并开始拆除；创新是未来' }, consequence: { en: '😱 Alienation! Traditional patrons furious, quiet study space lost, noise complaints explode.', th: '😱 การทำให้เหินห่าง! ผู้ใช้แบบดั้งเดิมโกรธ', zh: '😱 疏远！传统读者愤怒。' }, stats: { competence: 10, ethics: -10, leadership: -20, innovation: 25 } },
 { id: 'C', text: { en: '🚫 Refund grant saying quiet space is sacred library tradition', th: '🚫 คืนเงินทุนโดยบอกว่าพื้นที่เงียบเป็นประเพณีศักดิ์สิทธิ์ของห้องสมุด', zh: '🚫安静空间是神圣的图书馆传统为由退还拨款' }, consequence: { en: '⚠️ Stagnation! Library misses modernization, teens and creators go elsewhere, relevance declines.', th: '⚠️ ความหยุดนิ่ง! ห้องสมุดพลาดการทำให้ทันสมัย', zh: '⚠️ 停滞！图书馆错失现代化。' }, stats: { competence: -10, ethics: 10, leadership: -15, innovation: -35 } },
 { id: 'D', text: { en: '💡 Accept grant but use money for books instead (misallocation)', th: '💡 ยอมรับทุนแต่ใช้เงินซื้อหนังสือแทน (การจัดสรรผิด)', zh: '💡 接受拨款但将钱用于购买书籍（挪用）' }, consequence: { en: '😱 Fraud! Grant audit reveals misuse, library blacklisted from future funding, legal trouble.', th: '😱 การฉ้อโกง! การตรวจสอบทุนเผยการใช้ผิดประเภท', zh: '😱 欺诈！拨款审计揭示滥用。' }, stats: { competence: -30, ethics: -50, leadership: -40, innovation: -20 } }
 ]
 },

 {
 id: 'li_042',
 text: {
 en: '📱 Teenagers are using the library Wi-Fi for gaming, using up bandwidth and slowing access for job seekers.',
 th: '📱 วัยรุ่นกำลังใช้ Wi-Fi ห้องสมุดสำหรับการเล่นเกม ใช้แบนด์วิดท์จนหมดและทำให้การเข้าถึงสำหรับผู้หางานช้าลง',
 zh: '📱 青少年正在使用图书馆Wi-Fi玩游戏，占用了带宽并减慢了求职者的访问速度。'
 },
 options: [
 { id: 'A', text: { en: '📶 Upgrade bandwidth infrastructure if possible; implement QoS (Quality of Service) rules prioritizing research/forms over gaming traffic without banning games entirely', th: '📶 อัปเกรดโครงสร้างพื้นฐานแบนด์วิดท์หากเป็นไปได้; ใช้กฎ QoS (คุณภาพการบริการ) จัดลำดับความสำคัญการวิจัย/แบบฟอร์มเหนือการจราจรเกมโดยไม่แบนเกมทั้งหมด', zh: '📶 如果可能，升级带宽基础设施；实施QoS（服务质量）规则，优先处理研究/表格流量而非游戏，但不完全禁止游戏' }, consequence: { en: '✅ Technical solution! Everyone served, core mission protected, teens remain welcome.', th: '✅ ทางออกทางเทคนิค! ทุกคนได้รับบริการ', zh: '✅ 技术解决方案！所有人得到服务。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 35 } },
 { id: 'B', text: { en: '🚫 Block all gaming servers and sites', th: '🚫 บล็อกเซิร์ฟเวอร์และไซต์เกมทั้งหมด', zh: '🚫 屏蔽所有游戏服务器和网站' }, consequence: { en: '⚠️ Censorship/Overblock! Legitimate content often blocked too, teens feel unwelcome, cat-and-mouse game ensues.', th: '⚠️ การเซ็นเซอร์/บล็อกเกิน! เนื้อหาที่ชอบธรรมมักถูกบล็อกด้วย', zh: '⚠️ 审查/过度屏蔽！合法内容常被误封。' }, stats: { competence: 10, ethics: -10, leadership: -5, innovation: -15 } },
 { id: 'C', text: { en: '🗣️ Tell teens to leave if they aren\'t"studying"', th: '🗣️ บอกวัยรุ่นให้ออกไปถ้าพวกเขาไม่ได้"เรียนหนังสือ"', zh: '🗣️ 如果青少年不是在"学习"就叫他们离开' }, consequence: { en: '😱 Third place violation! Library is for recreation too, bias against youth, future patrons lost.', th: '😱 การละเมิดสถานที่ที่สาม! ห้องสมุดมีไว้สำหรับการพักผ่อนด้วย', zh: '😱 第三空间违规！图书馆也用于娱乐。' }, stats: { competence: -15, ethics: -20, leadership: -25, innovation: -20 } },
 { id: 'D', text: { en: '🤷 Do nothing, slow internet is just how it is', th: '🤷 ไม่ทำอะไรเลย อินเทอร์เน็ตช้าก็เป็นอย่างนั้นแหละ', zh: '🤷 什么都不做，网慢就是这样' }, consequence: { en: '⚠️ Service failure! Digital divide widens, job seekers cannot apply, library irrelevance.', th: '⚠️ ความล้มเหลวของบริการ! ช่องว่างดิจิทัลกว้างขึ้น', zh: '⚠️ 服务失败！数字鸿沟扩大。' }, stats: { competence: -25, ethics: -10, leadership: -20, innovation: -25 } }
 ]
 },

 {
 id: 'li_043',
 text: {
 en: '🤝 A homeless shelter asks to partner. They want to send social workers to the library to meet clients, but some staff are resistant.',
 th: '🤝 สถานสงเคราะห์คนไร้บ้านขอเป็นพันธมิตร พวกเขาต้องการส่งนักสังคมสงเคราะห์ไปห้องสมุดเพื่อพบปะลูกค้า แต่พนักงานบางคนต่อต้าน',
 zh: '🤝 一个无家可归者收容所请求合作。他们想派社工到图书馆接见客户，但一些员工抵制。'
 },
 options: [
 { id: 'A', text: { en: '🟢 Pilot partnership with clear guidelines, provide staff training on empathy and de-escalation, and designated meeting space away from high-traffic areas', th: '🟢 นำร่องความเป็นพันธมิตรพร้อมแนวทางที่ชัดเจน ให้การฝึกอบรมพนักงานเกี่ยวกับความเห็นอกเห็นใจและการลดความรุนแรง และพื้นที่ประชุมที่กำหนดไว้ห่างจากพื้นที่ที่มีการจราจรหนาแน่น', zh: '🟢 试点合作伙伴关系，制定明确的指导方针，提供关于同理心和降级冲突的员工培训，并在远离高人流区域指定会议空间' }, consequence: { en: '✅ Holistic service! Vulnerable patrons get help, library issues reduced (sleeping/behavior), staff feel supported.', th: '✅ บริการแบบองค์รวม! ผู้ใช้ที่เปราะบางได้รับความช่วยเหลือ', zh: '✅整体服务！弱势读者获得帮助。' }, stats: { competence: 35, ethics: 45, leadership: 40, innovation: 30 } },
 { id: 'B', text: { en: '🚫 Refuse, stating library is not a social services agency', th: '🚫 ปฏิเสธ โดยระบุว่าห้องสมุดไม่ใช่หน่วยงานบริการสังคม', zh: '🚫 拒绝，声明图书馆不是社会服务机构' }, consequence: { en: '⚠️ Missed synergy! Homeless patrons remain in library without support, behavior issues continue, staff stressed.', th: '⚠️ พลาดการทำงานร่วมกัน! ผู้ใช้ไร้บ้านยังคงอยู่ในห้องสมุดโดยไม่มีการสนับสนุน', zh: '⚠️ 错失协同效应！无家可归的读者留在图书馆却得不到支持。' }, stats: { competence: 5, ethics: -20, leadership: -10, innovation: -15 } },
 { id: 'C', text: { en: '🔓 Allow access without any coordination or communication to staff', th: '🔓 อนุญาตให้เข้าถึงโดยไม่มีการประสานงานหรือสื่อสารกับพนักงาน', zh: '🔓 允许访问但不与员工协调或沟通' }, consequence: { en: '😱 Chaos! Staff confused/scared, conflict arises, program fails due to lack of structure.', th: '😱 ความโกลาหล! พนักงานสับสน/กลัว', zh: '😱 混乱！员工困惑/害怕。' }, stats: { competence: -20, ethics: 10, leadership: -30, innovation: -10 } },
 { id: 'D', text: { en: '📋 Survey regular patrons if they would be comfortable with this', th: '📋 สำรวจผู้ใช้ทั่วไปว่าพวกเขาจะสบายใจกับสิ่งนี้หรือไม่', zh: '📋 调查常客是否对此感到舒适' }, consequence: { en: '⚠️ Bias validation! Likely negative response prevents helping those most in need,"tyranny of majority."', th: '⚠️ การตรวจสอบความลำเอียง! การตอบสนองเชิงลบป้องกันการช่วยเหลือ', zh: '⚠️ 偏见验证！可能的负面回应阻碍了帮助最需要的人。' }, stats: { competence: 0, ethics: -15, leadership: -10, innovation: -5 } }
 ]
 },

 {
 id: 'li_044',
 text: {
 en: '🎤 A student wants to record a rap video in the stacks for a school project. It will be somewhat loud.',
 th: '🎤 นักเรียนต้องการบันทึกวิดีโอแร็พในชั้นวางหนังสือสำหรับโครงการโรงเรียน มันจะค่อนข้างเสียงดัง',
 zh: '🎤 一名学生想在书架间录制一段说唱视频作为学校项目。这会有点吵。'
 },
 options: [
 { id: 'A', text: { en: '⏰ Schedule a specific time (after hours or low traffic) or designate a specific zone where notice is posted, turning it into a creative usage example', th: '⏰ กำหนดเวลาเฉพาะ (หลังเวลาทำการหรือการจราจรต่ำ) หรือกำหนดโซนเฉพาะที่มีการแจ้งเตือน เปลี่ยนให้เป็นตัวอย่างการใช้งานเชิงสร้างสรรค์', zh: '⏰ 安排特定时间（下班后或低流量时段）或指定贴有通知的特定区域，将其转化为创意使用示例' }, consequence: { en: '✅ Creative accommodation! Student succeeds, library seen as cool content creation hub, disruption managed.', th: '✅ การปรับตัวเชิงสร้างสรรค์! นักเรียนประสบความสำเร็จ', zh: '✅ 创意通融！学生成功。' }, stats: { competence: 30, ethics: 25, leadership: 30, innovation: 40 } },
 { id: 'B', text: { en: '🚫 Strictly forbid it; libraries are for quiet study only', th: '🚫 ห้ามอย่างเคร่งครัด; ห้องสมุดมีไว้สำหรับการศึกษาอย่างเงียบๆ เท่านั้น', zh: '🚫 严厉禁止；图书馆仅供安静学习' }, consequence: { en: '⚠️ Creativity stifled! Student goes elsewhere, library reinforced as"shushing"place, youth engagement drops.', th: '⚠️ ความคิดสร้างสรรค์ถูกระงับ! นักเรียนไปที่อื่น', zh: '⚠️ 创意受阻！学生去别处。' }, stats: { competence: -5, ethics: -5, leadership: -10, innovation: -30 } },
 { id: 'C', text: { en: '🤷 Let them do it whenever, ignoring other patrons', th: '🤷 ปล่อยให้พวกเขาทำเมื่อไหร่ก็ได้ เพิกเฉยต่อผู้ใช้อื่น', zh: '🤷 让他们随时做，无视其他的读者' }, consequence: { en: '😱 Disruption! Readers annoyed, video might go viral showing chaotic library, loss of control.', th: '😱 การรบกวน! ผู้อ่านรำคาญ', zh: '😱 干扰！读者恼火。' }, stats: { competence: -20, ethics: -10, leadership: -25, innovation: 10 } },
 { id: 'D', text: { en: '🎥 Direct them to the green screen room / maker studio immediately', th: '🎥 นำทางพวกเขาไปยังห้องกรีนสกรีน / สตูดิโอผู้สร้างทันที', zh: '🎥 立即引导他们去绿幕室/创客工作室' }, consequence: { en: '✅ Resource utilization! Correct use of facilities (if you have them), professional result for student.', th: '✅ การใช้ประโยชน์ทรัพยากร! การใช้สิ่งอำนวยความสะดวกที่ถูกต้อง', zh: '✅ 资源利用！正确使用设施。' }, stats: { competence: 35, ethics: 20, leadership: 25, innovation: 30 } }
 ]
 },

 {
 id: 'li_045',
 text: {
 en: '📕 A famous but highly controversial author dies. Demand for their books spikes, but staff are uncomfortable displaying them.',
 th: '📕 นักเขียนที่มีชื่อเสียงแต่เป็นที่ถกเถียงอย่างมากเสียชีวิต ความต้องการหนังสือของพวกเขาพุ่งสูงขึ้น แต่พนักงานไม่สบายใจที่จะแสดง',
 zh: '📕 一位著名但在极大争议的作家去世。对他们书的需求激增，但员工展示这些书感到不适。'
 },
 options: [
 { id: 'A', text: { en: '📚 Create display acknowledging their impact/death neutrally, perhaps paired with critical perspectives or diverse authors in same genre', th: '📚 สร้างการแสดงผลที่ยอมรับผลกระทบ/การเสียชีวิตของพวกเขาอย่างเป็นกลาง อาจจับคู่กับมุมมองวิพากษ์หรือผู้เขียนที่หลากหลายในประเภทเดียวกัน', zh: '📚 创建中立承认其影响/去世的展示，或许与同一流派的批评观点或多元作者搭配' }, consequence: { en: '✅ Informational neutrality! Meets patron interest without endorsing author\'s personal views, educational context provided.', th: '✅ ความเป็นกลางของข้อมูล! ตอบสนองความสนใจของผู้ใช้โดยไม่รับรองมุมมองส่วนตัวของผู้เขียน', zh: '✅ 信息中立！满足读者兴趣而不认可作者个人观点。' }, stats: { competence: 35, ethics: 35, leadership: 30, innovation: 25 } },
 { id: 'B', text: { en: '🚫 Refuse to create display, keep books in stacks only', th: '🚫 ปฏิเสธที่จะสร้างการแสดงผล เก็บหนังสือไว้ในชั้นวางเท่านั้น', zh: '🚫 拒绝创建展示，只将书保留在书库中' }, consequence: { en: '⚠️ Passive censorship! Missed engagement opportunity with current event, staff bias limits service.', th: '⚠️ การเซ็นเซอร์แบบเชิงรับ! พลาดโอกาสการมีส่วนร่วมกับเหตุการณ์ปัจจุบัน', zh: '⚠️ 被动审查！错失与时事互动的机会。' }, stats: { competence: -5, ethics: -15, leadership: -10, innovation: -10 } },
 { id: 'C', text: { en: '🎉 Celebrate the author lavishly ignoring controversy', th: '🎉 เฉลิมฉลองผู้เขียนอย่างหรูหราโดยเพิกเฉยต่อข้อโต้แย้ง', zh: '🎉 盛大庆祝这位作家，无视争议' }, consequence: { en: '😱 Tone deaf! Alienates community members hurt by author, library looks out of touch with social values.', th: '😱 ไม่รู้กาลเทศะ! ทำให้สมาชิกชุมชนที่เจ็บปวดจากผู้เขียนเหินห่าง', zh: '😱 语气失聪！疏远受作者伤害的社区成员。' }, stats: { competence: -10, ethics: -25, leadership: -20, innovation: -5 } },
 { id: 'D', text: { en: '🗑️ Hide the books so they can\'t be checked out', th: '🗑️ ซ่อนหนังสือเพื่อไม่ให้ยืมได้', zh: '🗑️ 藏起书让人无法借阅' }, consequence: { en: '😱 Professional misconduct! Violation of intellectual freedom, breach of trust, active censorship.', th: '😱 การประพฤติผิดทางวิชาชีพ! การละเมิดเสรีภาพทางปัญญา', zh: '😱 专业不端！违反学术自由。' }, stats: { competence: -30, ethics: -50, leadership: -35, innovation: -20 } }
 ]
 },

 {
 id: 'li_046',
 text: {
 en: '🌳 The outdoor space is underutilized. You have a small budget.',
 th: '🌳 พื้นที่กลางแจ้งถูกใช้งานน้อยเกินไป คุณมีงบประมาณน้อย',
 zh: '🌳 户外空间利用不足。你的预算很少。'
 },
 options: [
 { id: 'A', text: { en: '🌻 Create"StoryWalk"and sensory garden using volunteer labor and donated materials; host outdoor storytimes', th: '🌻 สร้าง"StoryWalk"และสวนสัมผัสโดยใช้แรงงานอาสาสมัครและวัสดุบริจาค; จัดเวลานิทานกลางแจ้ง', zh: '🌻 利用志愿者劳动力和捐赠材料创建"故事步道"和感官花园；举办户外故事会' }, consequence: { en: '✅ Low-cost innovation! Space activated, healthy activity promoted, community ownership built.', th: '✅ นวัตกรรมต้นทุนต่ำ! พื้นที่ถูกกระตุ้น', zh: '✅ 低成本创新！激活空间。' }, stats: { competence: 30, ethics: 30, leadership: 40, innovation: 45 } },
 { id: 'B', text: { en: '🚧 Pave it over for more parking', th: '🚧 ปูพื้นเพื่อเพิ่มที่จอดรถ', zh: '🚧 铺设路面增加停车位' }, consequence: { en: '⚠️ Boring utility! Green space lost, heat island effect increased, no community engagement added.', th: '⚠️ ประโยชน์ที่น่าเบื่อ! พื้นที่สีเขียวสูญหาย', zh: '⚠️ 无聊的实用性！失去绿地。' }, stats: { competence: 10, ethics: -10, leadership: -5, innovation: -20 } },
 { id: 'C', text: { en: '🔒 Lock the gates to save maintenance costs', th: '🔒 ล็อคประตูเพื่อประหยัดค่าบำรุงรักษา', zh: '🔒 锁上大门以节省维护成本' }, consequence: { en: '⚠️ Wasted asset! Library footprint shrinks, looks uninviting/prison-like.', th: '⚠️ ทรัพย์สินที่สูญเปล่า! รอยเท้าห้องสมุดหดตัว', zh: '⚠️ 浪费资产！图书馆足迹缩小。' }, stats: { competence: -10, ethics: -5, leadership: -15, innovation: -25 } },
 { id: 'D', text: { en: '🚬 Designate it as a smoking area', th: '🚬 กำหนดให้เป็นพื้นที่สูบบุหรี่', zh: '🚬 指定为吸烟区' }, consequence: { en: '😱 Health hazard! Families deterred, smoke enters building, wellness mission compromised.', th: '😱 อันตรายต่อสุขภาพ! ครอบครัวถูกกีดกัน', zh: '😱 健康危害！家庭被吓跑。' }, stats: { competence: -20, ethics: -30, leadership: -25, innovation: -10 } }
 ]
 },

 {
 id: 'li_047',
 text: {
 en: '👵 Senior citizens feel intimidated by the new digital catalog kiosks replacing card catalogs.',
 th: '👵 ผู้สูงอายุรู้สึกถูกข่มขู่โดยตู้แคตตาล็อกดิจิทัลใหม่ที่เข้ามาแทนที่แคตตาล็อกการ์ด',
 zh: '👵 老年人对取代卡片目录的新数字目录查询机感到恐惧。'
 },
 options: [
 { id: 'A', text: { en: '🎓 Host"Coffee & Computers"mornings specifically for seniors, offering 1-on-1 tutoring and simplified instruction sheets', th: '🎓 จัดงานเช้า"กาแฟและคอมพิวเตอร์"โดยเฉพาะสำหรับผู้สูงอายุ เสนอการสอนแบบตัวต่อตัวและแผ่นคำแนะนำที่เรียบง่าย', zh: '🎓 举办专门针对老年人的"咖啡与电脑"早晨活动，提供一对一辅导和简化说明单' }, consequence: { en: '✅ Digital inclusion! Seniors gain confidence, socialization, and skills; gap bridged successfully.', th: '✅ การรวมเข้าด้วยกันทางดิจิทัล! ผู้สูงอายุได้รับความมั่นใจ', zh: '✅ 数字包容！老年人获得信心。' }, stats: { competence: 35, ethics: 40, leadership: 35, innovation: 30 } },
 { id: 'B', text: { en: '🔙 Bring back the card catalog for them', th: '🔙 นำแคตตาล็อกการ์ดกลับมาให้พวกเขา', zh: '🔙 为他们带回卡片目录' }, consequence: { en: '❌ Regression! Double work for staff, data not updated, expensive to maintain, halts progress.', th: '❌ การถอยหลัง! งานซ้ำซ้อนสำหรับพนักงาน', zh: '❌ 倒退！员工双重工作。' }, stats: { competence: -25, ethics: 10, leadership: -20, innovation: -40 } },
 { id: 'C', text: { en: '🗣️ Tell them to ask staff whenever they need a book', th: '🗣️ บอกให้พวกเขาถามพนักงานเมื่อใดก็ตามที่ต้องการหนังสือ', zh: '🗣️ 告诉他们每当需要书时就问员工' }, consequence: { en: '⚠️ Dependency created! Staff capacity drained, seniors lose independence/privacy.', th: '⚠️ สร้างความพึ่งพา! ความจุพนักงานหมดไป', zh: '⚠️ 造成依赖！员工能力耗尽。' }, stats: { competence: -5, ethics: 5, leadership: -10, innovation: -10 } },
 { id: 'D', text: { en: '🤷 Ignore it, they will learn eventually or stop coming', th: '🤷 เพิกเฉยต่อมัน พวกเขาจะเรียนรู้ในที่สุดหรือหยุดมา', zh: '🤷 忽视它，他们最终会学会或者不再来' }, consequence: { en: '😱 Ageism! Loyal patron base alienated, circulation drops, mission to serve all failing.', th: '😱 การเหยียดอายุ! ฐานผู้ใช้ที่ภักดีเหินห่าง', zh: '😱 年龄歧视！忠实读者群流失。' }, stats: { competence: -15, ethics: -30, leadership: -25, innovation: -20 } }
 ]
 },

 {
 id: 'li_048',
 text: {
 en: '🦠 A pandemic or health crisis requires sudden closure. You need to serve patrons remotely.',
 th: '🦠 การระบาดใหญ่หรือวิกฤตสุขภาพต้องการการปิดทันที คุณต้องให้บริการผู้ใช้จากระยะไกล',
 zh: '🦠 流行病或健康危机需要突然关闭。你需要远程服务读者。'
 },
 options: [
 { id: 'A', text: { en: '💻 Rapidly pivot: Shift budget to eBooks, launch virtual programming (storytime/book clubs), extend Wi-Fi to parking lot, and implement curbside pickup protocols', th: '💻 หมุนตัวอย่างรวดเร็ว: เปลี่ยนงบประมาณไปที่ eBooks เปิดตัวโปรแกรมเสมือน (เวลานิทาน/ชมรมหนังสือ) ขยาย Wi-Fi ไปยังลานจอดรถ และใช้โปรโตคอลรับของข้างทาง', zh: '💻 快速转型：将预算转向电子书，推出虚拟项目（故事会/读书俱乐部），将Wi-Fi扩展到停车场，并实施路边取货协议' }, consequence: { en: '✅ Resilience resilience! Library remains vital lifeline, usage metrics hold steady/grow, community impressed.', th: '✅ ความยืดหยุ่น! ห้องสมุดยังคงเป็นสายใยชีวิตที่สำคัญ', zh: '✅ 韧性！图书馆仍然是生命线。' }, stats: { competence: 45, ethics: 40, leadership: 50, innovation: 50 } },
 { id: 'B', text: { en: '🚪 Just close and wait for it to be over; save the money', th: '🚪 แค่ปิดและรอให้มันจบ; ประหยัดเงิน', zh: '🚪 关门等着结束；省钱' }, consequence: { en: '⚠️ Irrelevance risk! People find other sources, staff purposes lost, funding questioned later.', th: '⚠️ ความเสี่ยงที่จะไม่เกี่ยวข้อง! ผู้คนหาแหล่งอื่น', zh: '⚠️ 无关紧要的风险！人们寻找其他来源。' }, stats: { competence: -20, ethics: -15, leadership: -30, innovation: -40 } },
 { id: 'C', text: { en: '😷 Force staff to work inside despite health risks to keep building open', th: '😷 บังคับให้พนักงานทำงานข้างในแม้จะมีความเสี่ยงต่อสุขภาพเพื่อให้เปิดอาคารไว้', zh: '😷 强迫员工在健康风险下在室内工作以保持开放' }, consequence: { en: '😱 Endangerment! Staff sickness/walkout, legal liability, public relations nightmare.', th: '😱 อันตราย! พนักงานเจ็บป่วย/ประท้วง', zh: '😱 危害！员工生病/罢工。' }, stats: { competence: -10, ethics: -50, leadership: -45, innovation: -10 } },
 { id: 'D', text: { en: '📚 Only offer eBook access, cancelling all other services', th: '📚 เสนอการเข้าถึง eBook เท่านั้น ยกเลิกบริการอื่นๆ ทั้งหมด', zh: '📚 只提供电子书访问，取消所有其他服务' }, consequence: { en: '⚠️ Digital divide ignored! Those without devices left behind, only wealthiest served.', th: '⚠️ ช่องว่างดิจิทัลถูกเพิกเฉย! ผู้ที่ไม่มีอุปกรณ์ถูกทิ้งไว้ข้างหลัง', zh: '⚠️ 忽视数字鸿沟！没有设备的人被遗落。' }, stats: { competence: 10, ethics: -20, leadership: -10, innovation: 5 } }
 ]
 },

 {
 id: 'li_049',
 text: {
 en: '📊 You need to demonstrate library impact to avoid budget cuts. Circulation stats are down, but door count and program attendance are up.',
 th: '📊 คุณต้องแสดงผลกระทบของห้องสมุดเพื่อหลีกเลี่ยงการตัดงบประมาณ สถิติการยืมคืนลดลง แต่จำนวนคนเข้าและผู้เข้าร่วมโปรแกรมเพิ่มขึ้น',
 zh: '📊 你需要证明图书馆的影响力以避免预算削减。流通统计数据下降，但进门人数和活动出席率上升。'
 },
 options: [
 { id: 'A', text: { en: '📈 Pivot narrative to"Community Hub"model: Present qualitative data, success stories, program impact, and value of space/internet access rather than just book transactions', th: '📈 เปลี่ยนการเล่าเรื่องเป็นโมเดล"ศูนย์กลางชุมชน": นำเสนอข้อมูลเชิงคุณภาพ เรื่องราวความสำเร็จ ผลกระทบของโปรแกรม และมูลค่าของพื้นที่/การเข้าถึงอินเทอร์เน็ตมากกว่าแค่ธุรกรรมหนังสือ', zh: '📈 将叙述转向"社区中心"模式：展示定性数据、成功故事、项目影响以及空间/互联网访问的价值，而不仅仅是书籍交易' }, consequence: { en: '✅ Strategic rebranding! Funders understand modern value proposition, budget preserved, metrics aligned with reality.', th: '✅ การรีแบรนด์เชิงกลยุทธ์! ผู้สนับสนุนเข้าใจข้อเสนอคุณค่าสมัยใหม่', zh: '✅ 战略重塑品牌！资助者理解现代价值主张。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 45 } },
 { id: 'B', text: { en: '📚 Manipulate stats to make circulation look higher', th: '📚 จัดการสถิติเพื่อทำให้การยืมคืนดูสูงขึ้น', zh: '📚 操纵统计数据使流通量看起来更高' }, consequence: { en: '😱 Fraud! Professional ruin if caught, integrity destroyed, problem not actually solved.', th: '😱 การฉ้อโกง! หายนะทางวิชาชีพหากถูกจับได้', zh: '😱 欺诈！被抓则职业毁灭。' }, stats: { competence: -20, ethics: -50, leadership: -40, innovation: -30 } },
 { id: 'C', text: { en: '✂️ Cut programs to force people to borrow more books', th: '✂️ ตัดโปรแกรมเพื่อบังคับให้ผู้คนยืมหนังสือมากขึ้น', zh: '✂️ 削减项目以迫使人们借更多书' }, consequence: { en: '⚠️ Sabotage! You destroy what is working to prop up what isn\'t, usage drops overall.', th: '⚠️ การก่อวินาศกรรม! คุณทำลายสิ่งที่ได้ผล', zh: '⚠️ 破坏！你破坏有效的来支撑无效的。' }, stats: { competence: -30, ethics: -15, leadership: -35, innovation: -40 } },
 { id: 'D', text: { en: '🤐 Hide the bad numbers and hope they don\'t ask', th: '🤐 ซ่อนตัวเลขที่ไม่ดีและหวังว่าพวกเขาจะไม่ถาม', zh: '🤐 隐瞒糟糕的数字并希望他们不问' }, consequence: { en: '⚠️ Risk of exposure! Budget committee will likely find out, loss of credibility.', th: '⚠️ ความเสี่ยงต่อการเปิดเผย! คณะกรรมการงบประมาณจะพบเข้า', zh: '⚠️ 暴露风险！预算委员会可能会发现。' }, stats: { competence: -10, ethics: -20, leadership: -20, innovation: -10 } }
 ]
 },

 {
 id: 'li_050',
 text: {
 en: '🏁 You have a chance to eliminate late fines permanently. Some board members worry about revenue loss and people not returning books.',
 th: '🏁 คุณมีโอกาสยกเลิกค่าปรับล่าช้าอย่างถาวร สมาชิกคณะกรรมการบางคนกังวลเกี่ยวกับการสูญเสียรายได้และคนไม่คืนหนังสือ',
 zh: '🏁 你有机会永久取消逾期罚款。一些董事会成员担心收入损失和人们不还书。'
 },
 options: [
 { id: 'A', text: { en: '📊 Present data from other fine-free libraries showing return rates often improve, revenue from fines is negligible vs. staff time cost, and equity/access is the primary goal', th: '📊 นำเสนอข้อมูลจากห้องสมุดปลอดค่าปรับอื่นๆ ที่แสดงว่าอัตราการคืนมักดีขึ้น รายได้จากค่าปรับเล็กน้อยเทียบกับต้นทุนเวลาพนักงาน และความเสมอภาค/การเข้าถึงเป็นเป้าหมายหลัก', zh: '📊 展示其他免罚款图书馆的数据，显示归还率通常提高，罚款收入相对于员工时间成本微不足道，且公平/访问是首要目标' }, consequence: { en: '✅ Equity victory! Barriers removed, lapsed users return, goodwill generated, board convinced by evidence.', th: '✅ ชัยชนะด้านความเสมอภาค! อุปสรรคถูกขจัดออกไป', zh: '✅ 公平胜利！障碍消除。' }, stats: { competence: 40, ethics: 45, leadership: 45, innovation: 40 } },
 { id: 'B', text: { en: '🔒 Keep fines to teach responsibility', th: '🔒 เก็บค่าปรับเพื่อสอนความรับผิดชอบ', zh: '🔒 保留罚款以教授责任感' }, consequence: { en: '⚠️ Barrier maintained! Low-income families blocked from access, library viewed as punitive.', th: '⚠️ อุปสรรคยังคงอยู่! ครอบครัวรายได้ต่ำถูกปิดกั้น', zh: '⚠️ 障碍保持！低收入家庭无法访问。' }, stats: { competence: -10, ethics: -20, leadership: -10, innovation: -20 } },
 { id: 'C', text: { en: '🤝 Compromise: Fine-free for kids only', th: '🤝 ประนีประนอม: ปลอดค่าปรับสำหรับเด็กเท่านั้น', zh: '🤝 妥协：仅对儿童免罚款' }, consequence: { en: '✅ Step forward! Good progress, though adults/parents still face barriers.', th: '✅ ก้าวไปข้างหน้า! ความก้าวหน้าดี', zh: '✅前进！有进步，尽管成年人仍面临障碍。' }, stats: { competence: 20, ethics: 25, leadership: 20, innovation: 10 } },
 { id: 'D', text: { en: '💰 Increase fines to make up budget gaps', th: '💰 เพิ่มค่าปรับเพื่อชดเชยช่องว่างงบประมาณ', zh: '💰 增加罚款以弥补预算缺口' }, consequence: { en: '😱 Death spiral! More patrons blocked, circulation tanks, public support evaporates.', th: '😱 วงจรแห่งความตาย! ผู้ใช้ถูกบล็อกมากขึ้น', zh: '😱 死亡螺旋！更多读者被封锁。' }, stats: { competence: -25, ethics: -40, leadership: -30, innovation: -30 } }
 ]
 }
];


