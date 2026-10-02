export const curriculumDesignerQuestions = [
    {
        id: 'curr_design_001',
        text: { en: '📚 AI in Schools: The board wants AI tools integrated into the high school curriculum immediately. Teachers fear plagiarism, parents worry about screen time. You have one month to launch.', th: '📚 AI ในโรงเรียน: คณะกรรมการต้องการบูรณาการ AI เข้าหลักสูตรทันที ครูกลัวการคัดลอก ผู้ปกครองกังวลเวลาหน้าจอ คุณมีเวลาหนึ่งเดือน', zh: '📚 学校AI：董事会要求立即将AI工具整合到高中课程中。老师担心抄袭，家长担心屏幕时间。你有一个月时间。' },
        options: [
            { id: 'A', text: { en: '🚀 Full Adoption: Mandate AI in all subjects. Teach prompt engineering and ethics.', th: '🚀 นำมาใช้เต็มที่: บังคับใช้ AI ทุกวิชา สอน prompt engineering และจริยธรรม', zh: '🚀 全面采用：所有科目强制使用AI，教授提示工程和伦理。' }, consequence: { en: '📈 Innovation Hub! District becomes a tech leader, but cheating spikes initially.', th: '📈 ศูนย์นวัตกรรม! เขตเป็นผู้นำเทค แต่การโกงพุ่งช่วงแรก', zh: '📈 创新中心！学区成为科技领头羊，但作弊初期激增。' }, stats: { competence: 20, ethics: 10, leadership: 30, innovation: 50 } },
            { id: 'B', text: { en: '🛡️ Ban AI: Too risky. Ban AI on all school networks. Focus on traditional writing.', th: '🛡️ แบน AI: เสี่ยงเกินไป แบน AI บนเครือข่ายโรงเรียน เน้นการเขียนแบบดั้งเดิม', zh: '🛡️ 禁止AI：风险太大。在校园网络上禁止AI，专注传统写作。' }, consequence: { en: '📉 Falling Behind! Students secretly use it without guidance. Graduates unprepared.', th: '📉 ล้าหลัง! นักเรียนแอบใช้โดยไม่มีคำแนะนำ บัณฑิตไม่พร้อม', zh: '📉 落后！学生私下无指导使用，毕业生未准备好。' }, stats: { competence: 30, ethics: 40, leadership: 15, innovation: -20 } },
            { id: 'C', text: { en: '⚖️ Guided Pilot: Pilot in CS and English only. Train those teachers first, expand next year.', th: '⚖️ นำร่อง: ทดลองในวิชา CS และอังกฤษก่อน ฝึกครูก่อนขยายปีหน้า', zh: '⚖️ 引导试点：仅在计算机和英语课试行，先培训老师，明年再扩展。' }, consequence: { en: '✅ Balanced Success! Smooth rollout. Slow but steady progress.', th: '✅ สำเร็จสมดุล! เปิดตัวราบรื่น ช้าแต่ชัวร์', zh: '✅ 平衡成功！顺利推出，缓慢但稳定。' }, stats: { competence: 45, ethics: 35, leadership: 25, innovation: 25 } },
            { id: 'D', text: { en: '🤝 Teacher Committee: Form a committee of teachers, parents, students. Takes 3 months, delays launch.', th: '🤝 คณะทำงาน: ตั้งคณะกรรมการครู ผู้ปกครอง นักเรียน ใช้เวลา 3 เดือน', zh: '🤝 教师委员会：成立教师、家长、学生委员会，需3个月。' }, consequence: { en: '⏳ Bureaucratic Stall! Committee fights endlessly. Board furious about delay.', th: '⏳ ล่าช้าราชการ! คณะกรรมการทะเลาะไม่จบ คณะกรรมการโกรธ', zh: '⏳ 官僚停滞！委员会争吵不休，董事会愤怒。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'curr_design_002',
        text: { en: '📖 Censored Classic: Conservative parents demand removing a classic novel from reading lists due to "uncomfortable themes." English dept threatens to strike.', th: '📖 วรรณกรรมถูกเซ็นเซอร์: ผู้ปกครองอนุรักษ์นิยมเรียกร้องถอดนิยายคลาสสิกออก ภาควิชาอังกฤษขู่ประท้วง', zh: '📖 审查经典：保守派家长要求删除经典小说，英语系威胁罢工。' },
        options: [
            { id: 'A', text: { en: '✂️ Remove It: We serve the community. Change the book to keep peace.', th: '✂️ ถอดออก: เราให้บริการชุมชน เปลี่ยนหนังสือเพื่อรักษาสันติ', zh: '✂️ 删除：我们服务社区，换书以保和平。' }, consequence: { en: '📉 Moral Crisis! Best teachers resign in protest. Curriculum loses depth.', th: '📉 วิกฤตศรัทธา! ครูเก่งลาออกประท้วง หลักสูตรสูญเสียความลึก', zh: '📉 道德危机！最好的老师辞职抗议，课程失去深度。' }, stats: { competence: 25, ethics: 10, leadership: 10, innovation: 10 } },
            { id: 'B', text: { en: '🏛️ Stand Firm: Academic freedom is non-negotiable. Organize a town hall to explain.', th: '🏛️ ยืนหยัด: เสรีภาพทางวิชาการต่อรองไม่ได้ จัดเวทีประชาคมอธิบาย', zh: '🏛️ 坚定立场：学术自由不可谈判，组织市政厅解释。' }, consequence: { en: '🏆 Respect Earned! Heated meeting but your defense wins majority. Teachers feel supported.', th: '🏆 ได้รับความเคารพ! ประชุมดุเดือดแต่คุณชนะ ครูรู้สึกได้รับกำลังใจ', zh: '🏆 赢得尊重！会议激烈但你的辩护赢得多数支持。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '🔄 Opt-Out: Keep the book but allow parents to request alternative assignments.', th: '🔄 เลือกไม่รับ: เก็บหนังสือไว้แต่ให้ผู้ปกครองขอการบ้านทางเลือก', zh: '🔄 退出政策：保留书籍但允许家长申请替代作业。' }, consequence: { en: '😐 Compromise. Extra work for teachers managing two tracks, but anger diffuses.', th: '😐 ประนีประนอม งานเพิ่มให้ครูจัดการสองหลักสูตร แต่ลดความโกรธ', zh: '😐 妥协。老师管理双轨增加工作量，但平息了愤怒。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: 15 } },
            { id: 'D', text: { en: '🙈 Delay: Form a 6-month review committee. By then, semester is over.', th: '🙈 ประวิงเวลา: ตั้งคณะกรรมการสอบทาน 6 เดือน กว่าจะตัดสินใจภาคเรียนก็จบ', zh: '🙈 拖延：成立6个月审查委员会，到时学期已结束。' }, consequence: { en: '🛑 Problem Postponed. Nobody trusts you. Issue returns worse next semester.', th: '🛑 ปัญหาถูกเลื่อน ไม่มีใครไว้ใจคุณ ปัญหากลับมาแย่กว่าเดิม', zh: '🛑 问题推迟。没人信任你，下学期问题更严重。' }, stats: { competence: 20, ethics: 20, leadership: 15, innovation: 10 } }
        ]
    },
    {
        id: 'curr_design_003',
        text: { en: '🎨 STEM vs STEAM: Superintendent wants to cut Arts from core funding to boost STEM rankings. You are redesigning middle school curriculum.', th: '🎨 STEM vs STEAM: ผู้อำนวยการต้องการตัดศิลปะจากงบหลักเพื่อเพิ่มอันดับ STEM คุณกำลังออกแบบหลักสูตรมัธยมต้นใหม่', zh: '🎨 STEM vs STEAM：学监要削减艺术核心资金来提升STEM排名，你正重新设计中学课程。' },
        options: [
            { id: 'A', text: { en: '🔬 All-in STEM: Cut the arts. Reallocate to coding and robotics.', th: '🔬 ทุ่ม STEM: ตัดศิลปะ จัดสรรให้โค้ดและหุ่นยนต์', zh: '🔬 全力STEM：削减艺术，重新分配给编程和机器人。' }, consequence: { en: '📊 Test scores rise but student burnout increases. Creativity scores dip.', th: '📊 คะแนนสอบขึ้นแต่นักเรียนหมดไฟ คะแนนความคิดสร้างสรรค์ลด', zh: '📊 考试成绩上升但学生倦怠增加，创造力下降。' }, stats: { competence: 35, ethics: 20, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🖌️ Defend Arts: Refuse the cut. Use research showing art improves math scores.', th: '🖌️ ปกป้องศิลปะ: ปฏิเสธการตัด ใช้งานวิจัยแสดงว่าศิลปะช่วยคณิตศาสตร์', zh: '🖌️ 捍卫艺术：拒绝削减，引用研究证明艺术提高数学成绩。' }, consequence: { en: '⚔️ Noble War. You save arts but superintendent sidelines you from future projects.', th: '⚔️ สงครามอันทรงเกียรติ รักษาศิลปะได้แต่ถูกลดบทบาทในโครงการใหญ่', zh: '⚔️ 高尚的战争。保住艺术但被边缘化。' }, stats: { competence: 30, ethics: 40, leadership: 35, innovation: 20 } },
            { id: 'C', text: { en: '🎭 STEAM Integration: Rebrand as STEAM. Integrate art into engineering projects.', th: '🎭 บูรณาการ STEAM: รีแบรนด์เป็น STEAM บูรณาการศิลปะเข้ากับวิศวกรรม', zh: '🎭 STEAM整合：重塑为STEAM，将艺术融入工程项目。' }, consequence: { en: '✨ Creative Solution! Board loves it. Students enjoy hands-on projects.', th: '✨ ทางออกสร้างสรรค์! คณะกรรมการชอบ นักเรียนสนุกกับโครงงาน', zh: '✨ 创造性方案！董事会喜欢，学生享受动手项目。' }, stats: { competence: 45, ethics: 35, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '📉 Volunteer Arts: Accept cuts but ask parents to run free after-school art clubs.', th: '📉 ศิลปะจิตอาสา: ยอมรับการตัดแต่ให้ผู้ปกครองจัดชมรมศิลปะฟรี', zh: '📉 志愿者艺术：接受削减但请家长办免费课后艺术班。' }, consequence: { en: '🏚️ Unequal Access. Rich kids get art; poor kids dont. Equity gap widens.', th: '🏚️ เข้าถึงไม่เท่าเทียม เด็กรวยได้ศิลปะ เด็กจนไม่ได้', zh: '🏚️ 不平等。富孩子有艺术课，穷孩子没有。' }, stats: { competence: 20, ethics: 15, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'curr_design_004',
        text: { en: '🎮 Gamification Deal: A tech company offers free tablets and gamified curriculum (XP instead of grades). Student data sold to company. District is broke.', th: '🎮 ดีลเกมมิฟิเคชัน: บริษัทเทคเสนอแท็บเล็ตฟรีและหลักสูตรเกม (XP แทนเกรด) ข้อมูลนักเรียนจะถูกขาย เขตถังแตก', zh: '🎮 游戏化交易：科技公司提供免费平板和游戏化课程（XP代替成绩），学生数据被出售，学区破产。' },
        options: [
            { id: 'A', text: { en: '🤑 Accept: We need the tablets. Sign the contract, roll out next week.', th: '🤑 รับข้อเสนอ: เราต้องการแท็บเล็ต เซ็นสัญญาเริ่มสัปดาห์หน้า', zh: '🤑 接受：我们需要平板，签合同下周推出。' }, consequence: { en: '🕵️ Data Scandal! Kids engaged but parents discover data mining. Lawsuit looms.', th: '🕵️ อื้อฉาวข้อมูล! เด็กสนุกแต่ผู้ปกครองพบการขุดข้อมูล การฟ้องร้องก่อตัว', zh: '🕵️ 数据丑闻！孩子投入但家长发现数据挖掘，诉讼迫近。' }, stats: { competence: 20, ethics: -10, leadership: 10, innovation: 25 } },
            { id: 'B', text: { en: '🛑 Reject: Students are not products. Use old textbooks. Ethics over gadgets.', th: '🛑 ปฏิเสธ: นักเรียนไม่ใช่สินค้า ใช้หนังสือเก่า จริยธรรมมาก่อน', zh: '🛑 拒绝：学生不是产品，用旧教科书，道德高于设备。' }, consequence: { en: '📉 Moral High Ground but teachers struggle with outdated materials.', th: '📉 จุดยืนศีลธรรมสูง แต่ครูดิ้นรนกับสื่อล้าสมัย', zh: '📉 道德高地但老师与过时教材斗争。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: -10 } },
            { id: 'C', text: { en: '⚖️ Negotiate Privacy: Want curriculum but demand stricter data policy. Pay small fee instead.', th: '⚖️ ต่อรองความเป็นส่วนตัว: ต้องการหลักสูตรแต่เรียกร้องนโยบายข้อมูลเข้มงวด', zh: '⚖️ 谈判隐私：要课程但要求更严格的数据政策，支付小额费用。' }, consequence: { en: '🤝 Smart Compromise. Company agrees. Innovative tools with better privacy.', th: '🤝 ประนีประนอมฉลาด บริษัทยอม เครื่องมือนวัตกรรมพร้อมความเป็นส่วนตัว', zh: '🤝 明智妥协。公司同意，创新工具加隐私保护。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '🧪 Partial Pilot: Try one grade level first with university researchers monitoring impact.', th: '🧪 นำร่องบางส่วน: ลองระดับชั้นเดียวก่อน ให้นักวิจัยติดตามผล', zh: '🧪 部分试点：先在一个年级试行，大学研究人员监测。' }, consequence: { en: '🛡️ Cautious Approach. Good data gathered. The "game" is distracting. Avoided district mistake.', th: '🛡️ ระมัดระวัง ได้ข้อมูลดี "เกม" ทำให้เสียสมาธิ หลีกเลี่ยงความผิดพลาดระดับเขต', zh: '🛡️ 谨慎方法。收集好数据，"游戏"分散注意力，避免全区错误。' }, stats: { competence: 40, ethics: 30, leadership: 25, innovation: 15 } }
        ]
    },
    {
        id: 'curr_design_005',
        text: { en: '🦠 Pandemic Pivot: New virus forces immediate remote learning. Teachers unprepared, 30% of students lack internet. Redesign delivery over the weekend.', th: '🦠 พลิกแพลงช่วงระบาด: ไวรัสใหม่บังคับเรียนทางไกลทันที ครูไม่พร้อม 30% ไม่มีเน็ต ต้องออกแบบใหม่ในสุดสัปดาห์', zh: '🦠 疫情转折：新病毒迫使远程学习，老师未准备好，30%学生没网，周末重新设计。' },
        options: [
            { id: 'A', text: { en: '💻 Digital Only: Zoom for everyone. No internet? Go to library parking lot.', th: '💻 ดิจิทัลเท่านั้น: Zoom ทุกคน ไม่มีเน็ตไปนั่งลานจอดรถห้องสมุด', zh: '💻 仅数字：所有人上网课，没网去图书馆停车场。' }, consequence: { en: '📉 Equity Disaster. Attendance drops to 60%. Digital divide widens. Public outcry.', th: '📉 หายนะความเสมอภาค เข้าเรียนลดเหลือ 60% ช่องว่างดิจิทัลขยาย', zh: '📉 公平灾难。出勤率降至60%，数字鸿沟扩大。' }, stats: { competence: 20, ethics: -10, leadership: 10, innovation: 20 } },
            { id: 'B', text: { en: '📦 Hybrid Packs: Physical learning packets via buses. Wi-Fi hotspots. Scale back expectations.', th: '📦 ชุดเรียนรู้ผสม: ส่งชุดเรียนรู้ทางรถบัส ปล่อย Wi-Fi ลดความคาดหวัง', zh: '📦 混合学习包：校车送实体包，提供WiFi热点，降低课程期望。' }, consequence: { en: '✅ Community Hero. Logistical nightmare but no student left behind.', th: '✅ ฮีโร่ชุมชน ฝันร้ายโลจิสติกส์แต่ไม่ทิ้งใครไว้ข้างหลัง', zh: '✅ 社区英雄。后勤噩梦但没有学生掉队。' }, stats: { competence: 45, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '📺 Public TV: Partner with local TV station to broadcast lessons. No internet needed.', th: '📺 ทีวีสาธารณะ: ร่วมมือกับสถานีโทรทัศน์ท้องถิ่น ไม่ต้องใช้เน็ต', zh: '📺 公共电视：与当地电视台合作播课，不需要网络。' }, consequence: { en: '💡 Creative Retro. Reaches everyone but lacks interactivity. Gets national press.', th: '💡 ย้อนยุคสร้างสรรค์ เข้าถึงทุกคนแต่ขาดปฏิสัมพันธ์ ได้ลงข่าวระดับชาติ', zh: '💡 创意复古。覆盖所有人但缺互动，获全国媒体报道。' }, stats: { competence: 35, ethics: 40, leadership: 30, innovation: 45 } },
            { id: 'D', text: { en: '🛑 Pause School: Suspend 2 weeks until iPads purchased. Apply for emergency funding.', th: '🛑 หยุดเรียน: ระงับ 2 สัปดาห์จนกว่าจะซื้อ iPad ขอทุนฉุกเฉิน', zh: '🛑 暂停：停课2周直到买到iPad，申请紧急资金。' }, consequence: { en: '⏳ Risky Gamble. Funding delayed. Students lose 3 weeks. Parents furious.', th: '⏳ เสี่ยง เงินทุนล่าช้า เสียเวลาเรียน 3 สัปดาห์ ผู้ปกครองโกรธ', zh: '⏳ 冒险赌博。资金延误，学生损失3周，家长愤怒。' }, stats: { competence: 15, ethics: 20, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'curr_design_006',
        text: { en: '📝 Portfolio Reform: You propose replacing standardized tests with student portfolios. State board is skeptical. Funding tied to test scores.', th: '📝 ปฏิรูปแฟ้มงาน: เสนอแทนที่สอบมาตรฐานด้วยแฟ้มสะสมงาน คณะกรรมการรัฐกังขา เงินทุนผูกกับคะแนนสอบ', zh: '📝 档案袋改革：你建议用学生档案袋取代标准化考试，州教委怀疑，资金与考试成绩挂钩。' },
        options: [
            { id: 'A', text: { en: '🙅 Cancel Tests: Civil disobedience. Refuse to administer tests.', th: '🙅 ยกเลิกสอบ: อารยะขัดขืน ปฏิเสธจัดสอบ', zh: '🙅 取消考试：非暴力不合作，拒绝考试。' }, consequence: { en: '🔥 Martyrdom. State cuts funding. You are fired but start a national conversation.', th: '🔥 การเป็นผู้พลีชีพ รัฐตัดงบ คุณถูกไล่ออกแต่เริ่มบทสนทนาระดับชาติ', zh: '🔥 殉道。州削减资金，你被解雇但引发全国讨论。' }, stats: { competence: 10, ethics: 40, leadership: 20, innovation: 20 } },
            { id: 'B', text: { en: '📊 Dual System: Keep tests for state, implement portfolios as "real" grade. Double work.', th: '📊 ระบบคู่: สอบเพื่อเอาใจรัฐ ใช้แฟ้มงานเป็นเกรดจริง งานเพิ่มสองเท่า', zh: '📊 双系统：保留考试满足州要求，用档案袋作真实成绩，工作量翻倍。' }, consequence: { en: '😓 Burnout Central. Students overwhelmed. Data confusing. Noble failure.', th: '😓 ศูนย์รวมคนหมดไฟ นักเรียนรับไม่ไหว ข้อมูลสับสน', zh: '😓 倦怠中心。学生不堪重负，数据混乱。' }, stats: { competence: 20, ethics: 20, leadership: 15, innovation: 10 } },
            { id: 'C', text: { en: '⚖️ Pilot Waiver: Apply for waiver for 3 pilot schools. Invite state officials to assess.', th: '⚖️ ยกเว้นนำร่อง: ขอยกเว้นให้ 3 โรงเรียน เชิญเจ้าหน้าที่รัฐมาประเมิน', zh: '⚖️ 试点豁免：申请3所试点学校豁免，邀请州官员评估。' }, consequence: { en: '✅ Strategic Win. Officials impressed by student presentations. Program expands.', th: '✅ ชัยชนะเชิงยุทธศาสตร์ เจ้าหน้าที่ประทับใจ ขยายโครงการ', zh: '✅ 战略胜利。官员对学生展示印象深刻，项目扩展。' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 45 } },
            { id: 'D', text: { en: '📉 Teach to Test: Cram for tests 3 months, creative projects rest of year.', th: '📉 สอนเก็งข้อสอบ: อัดข้อสอบ 3 เดือน ทำโครงงานสร้างสรรค์ที่เหลือ', zh: '📉 应试教学：3个月应试，其余时间做创意项目。' }, consequence: { en: '😐 Pragmatic. Funding safe but cram months are miserable and disjointed.', th: '😐 ปฏิบัติจริง งบปลอดภัยแต่เดือนอัดความรู้น่าสังเวช', zh: '😐 务实。资金安全但填鸭月份痛苦且脱节。' }, stats: { competence: 30, ethics: 15, leadership: 20, innovation: 5 } }
        ]
    },
    {
        id: 'curr_design_007',
        text: { en: '♿ Inclusion Initiative: Special ed students isolated in separate wings. You propose Full Inclusion in general classrooms. Teachers feel untrained.', th: '♿ การเรียนรู้ร่วม: นักเรียนพิเศษถูกแยกในตึกแยก คุณเสนอรวมเข้าห้องเรียนปกติ ครูรู้สึกไม่พร้อม', zh: '♿ 融合倡议：特教生被隔离，你提出完全融合到普通教室，老师觉得缺乏培训。' },
        options: [
            { id: 'A', text: { en: '🤝 Co-Teaching: Pair general ed with special ed specialists. Doubles staffing cost.', th: '🤝 สอนร่วม: จับคู่ครูทั่วไปกับผู้เชี่ยวชาญพิเศษ ต้นทุนเพิ่มสองเท่า', zh: '🤝 协同教学：普通教师配特教专家，人员成本翻倍。' }, consequence: { en: '🏆 Gold Standard. Amazing results. Budget blown but impact undeniable.', th: '🏆 มาตรฐานทอง ผลลัพธ์ยอดเยี่ยม งบบานปลายแต่ปฏิเสธไม่ได้', zh: '🏆 黄金标准。结果惊人，预算超支但效果不可否认。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 35 } },
            { id: 'B', text: { en: '🏃 Fast Track: Just merge them. Kids adapt faster than adults.', th: '🏃 ทำเลย: รวมเลย เด็กปรับตัวเร็วกว่าผู้ใหญ่', zh: '🏃 快速通道：直接合并，孩子比大人适应快。' }, consequence: { en: '🛑 Chaos. Teachers quit. Students with needs neglected or bullied. Parents sue.', th: '🛑 โกลาหล ครูลาออก เด็กถูกละเลยหรือกลั่นแกล้ง ผู้ปกครองฟ้อง', zh: '🛑 混乱。老师辞职，有需求的学生被忽视或欺负，家长起诉。' }, stats: { competence: 10, ethics: 20, leadership: 5, innovation: 10 } },
            { id: 'C', text: { en: '📚 Training First: Delay rollout one year. Spend on professional development.', th: '📚 ฝึกก่อน: เลื่อนหนึ่งปี ใช้เงินพัฒนาวิชาชีพ', zh: '📚 培训优先：推迟一年，花时间做职业发展。' }, consequence: { en: '🛡️ Prepared Success. Takes longer but works when launched. Teachers feel capable.', th: '🛡️ ความสำเร็จที่เตรียมพร้อม ใช้เวลานานกว่าแต่ได้ผล ครูรู้สึกมั่นใจ', zh: '🛡️ 准备充分的成功。时间更长但有效，老师感到有能力。' }, stats: { competence: 45, ethics: 40, leadership: 35, innovation: 15 } },
            { id: 'D', text: { en: '🔙 Keep Separate: Current system works fine. Upgrade their separate wing instead.', th: '🔙 แยกไว้: ระบบปัจจุบันใช้ได้ อัปเกรดตึกแยกแทน', zh: '🔙 保持隔离：现系统运作良好，升级他们的独立区域。' }, consequence: { en: '📉 Status Quo. Avoid conflict but perpetuate discrimination. Critics blast your vision.', th: '📉 สถานะเดิม หลีกเลี่ยงขัดแย้งแต่ส่งเสริมการเลือกปฏิบัติ', zh: '📉 现状。避免冲突但延续歧视，批评者抨击。' }, stats: { competence: 25, ethics: 10, leadership: 15, innovation: -10 } }
        ]
    },
    {
        id: 'curr_design_008',
        text: { en: '🗣️ Bilingual Dilemma: Growing immigrant population. Research supports Dual Language Immersion. Nativist groups demand English Only.', th: '🗣️ ภาวะสองภาษา: ประชากรผู้อพยพเพิ่ม งานวิจัยสนับสนุนสองภาษา กลุ่มเจ้าถิ่นเรียกร้องอังกฤษเท่านั้น', zh: '🗣️ 双语困境：移民人口增长，研究支持双语沉浸，本土主义者要求仅限英语。' },
        options: [
            { id: 'A', text: { en: '🌍 Dual Language: 50/50 immersion. Benefits all students culturally and cognitively.', th: '🌍 สองภาษา: ระบบ 50/50 ดีต่อทุกคนทั้งวัฒนธรรมและสติปัญญา', zh: '🌍 双语：50/50沉浸式，对所有学生文化和认知都有益。' }, consequence: { en: '🌏 Global Citizens. Graduates fluent in two languages and highly competitive.', th: '🌏 พลเมืองโลก บัณฑิตพูดคล่องสองภาษาและมีการแข่งขันสูง', zh: '🌏 全球公民。毕业生双语流利，极具竞争力。' }, stats: { competence: 40, ethics: 45, leadership: 40, innovation: 45 } },
            { id: 'B', text: { en: '🇺🇸 English Only: English is the language of success. Maximum immersion.', th: '🇺🇸 อังกฤษเท่านั้น: ภาษาอังกฤษคือภาษาแห่งความสำเร็จ จุ่มตัวสูงสุด', zh: '🇺🇸 仅限英语：英语是成功的语言，最大限度沉浸。' }, consequence: { en: '📉 Heritage Lost. Fast English but lose native tongue. Immigrant dropout rates rise.', th: '📉 มรดกสูญหาย เรียนอังกฤษเร็วแต่ลืมภาษาแม่ อัตราลาออกเพิ่ม', zh: '📉 遗产丢失。英语学快但失去母语，移民辍学率上升。' }, stats: { competence: 25, ethics: 15, leadership: 20, innovation: -5 } },
            { id: 'C', text: { en: '🔄 Magnet Program: Offer Dual Language as optional magnet. Keep standard ESL for rest.', th: '🔄 โปรแกรมพิเศษ: เสนอสองภาษาเป็นทางเลือก คง ESL มาตรฐาน', zh: '🔄 磁石项目：双语作为可选磁石项目，其余保留标准ESL。' }, consequence: { en: '⚖️ Choice & Peace. Magnet hugely popular with waitlist. Satisfies both sides.', th: '⚖️ ทางเลือกและสันติ โปรแกรมพิเศษได้รับความนิยมมาก มีคิวรอ', zh: '⚖️ 选择与和平。磁石项目非常受欢迎，双方都满意。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🤝 After-School Heritage: English classes but fund after-school cultural programs.', th: '🤝 มรดกหลังเลิกเรียน: สอนอังกฤษแต่ให้ทุนชมรมวัฒนธรรมหลังเรียน', zh: '🤝 课后遗产：英语教学但资助课后文化项目。' }, consequence: { en: '😐 Safe Middle. Nice gesture but after-school attendance spotty.', th: '😐 ทางสายกลาง ท่าทีดีแต่การเข้าร่วมหลังเรียนไม่แน่นอน', zh: '😐 安全中间派。姿态好但课后出勤不稳定。' }, stats: { competence: 30, ethics: 25, leadership: 25, innovation: 10 } }
        ]
    },
    {
        id: 'curr_design_009',
        text: {
            en: '🖥️ Hybrid Fatigue: Students are protesting for a "Permanent Remote" option for lectures. Teachers are exhausted from "simultaneous" teaching where they manage both Zoom and in-person kids. You must cut one.',
            th: '🖥️ ความเหนื่อยล้าแบบไฮบริด: นักเรียนประท้วงเรียกร้องสิทธิ์ "เรียนออนไลน์ถาวร" สำหรับวิชาบรรยาย แต่ครูเหนื่อยล้าจากการสอนแบบ "พร้อมกัน" ที่ต้องคุมทั้งใน Zoom และในห้องเรียน คุณต้องเลือกตัดอย่างใดอย่างหนึ่ง',
            zh: '🖥️ 混合疲劳：学生们正在抗议要求讲座采用"永久远程"模式。老师们则因"同步"教学（既要管理Zoom上的学生，又要照顾在校生）而精疲力竭。你必须取消其中一种模式。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏫 100% In-Person: "Education is a social contact sport. Everyone back to the building. No exceptions."',
                    th: '🏫 ในห้องเรียน 100%: "การศึกษาคือการสร้างสัมพันธ์กับสังคม ทุกคนต้องกลับเข้าอาคารเรียน ไม่มีข้อยกเว้น"',
                    zh: '🏫 100% 线下教学："教育是一种社会接触性的活动。所有人回到学校。没有例外。"'
                },
                consequence: {
                    en: '🛡️ Reclaimed Focus. Classroom energy returns. But 15% of your students (mostly working class) drop out because they can\'t make the commute.',
                    th: '🛡️ สมาธิกลับคืนมา บรรยากาศในห้องเรียนกลับมาคึกคัก แต่มีนักเรียน 15% (ส่วนใหญ่เป็นกลุ่มวัยทำงาน) ต้องลาออกไปเพราะเดินทางมาเรียนไม่ได้',
                    zh: '🛡️ 重新找回注意力。课堂活力恢复了。但你15%的学生（主要是工薪阶层）因为无法通勤而辍学。'
                },
                stats: { competence: 40, ethics: 20, leadership: 60, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '🌐 Pivot to Digital: "Lectures are online. Seminars are in-person. Reduce the rent and invest in a world-class Learning Management System."',
                    th: '🌐 มุ่งสู่ดิจิทัล: "วิชาบรรยายเรียนออนไลน์ สัมมนาเข้าเรียนจริง ลดค่าเช่าสถานที่แล้วเอาเงินไปลงกับระบบจัดการเรียนรู้ระดับโลก"',
                    zh: '🌐 转向数字化："讲座采用在线形式。研讨会采用线下形式。减少租金开支，投资于世界一流的学习管理系统。"'
                },
                consequence: {
                    en: '🚀 Modern Efficiency. You save millions. Enrollment goes global. But some teachers struggle to adapt and quit, citing "loss of soul."',
                    th: '🚀 ประสิทธิภาพสมัยใหม่ คุณเซฟเงินได้มหาศาล ยอดสมัครเรียนกระจายไปทั่วโลก แต่ครูบางคนปรับตัวไม่ได้และลาออกไป โดยอ้างว่า "วิญญาณความเป็นครูหายไป"',
                    zh: '🚀 现代效率。你节省了数百万元。招生实现了全球化。但一些老师由于难以适应而辞职，理由是"失去了灵魂"。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 90 }
            },
            {
                id: 'C',
                text: {
                    en: '🧑‍🏫 Split Staff: "Hire dedicated \'Remote Tutors\' to handle online, and keep veteran faculty for in-person. No more simultaneous teaching."',
                    th: '🧑‍🏫 แบ่งทีมครู: "จ้าง \'ติวเตอร์ออนไลน์\' เฉพาะทางมาคุมฝั่งซูม และให้ครูรุ่นเก๋าคุมในห้องเรียน ไม่มีการสอนพร้อมกันอีกต่อไป"',
                    zh: '🧑‍🏫 员工分工："聘请专门的\'远程导师\'负责在线教学，让资深教职员工负责线下教学。不再进行同步教学。"'
                },
                consequence: {
                    en: '✨ Teacher Relief. Morale spikes as the workload is split. It\'s expensive to hire more staff, but it\'s the most sustainable model for quality.',
                    th: '✨ ครูหายเหนื่อย ขวัญกำลังใจดีขึ้นเพราะแชร์ภาระงานกัน แม้จะแพงเพราะต้องจ้างคนเพิ่ม แต่มันคือโมเดลที่ยั่งยืนที่สุดสำหรับคุณภาพการสอน',
                    zh: '✨ 教师减负。随着工作量的分配，士气大振。多聘请员工虽然昂贵，但在质量方面这是最可持续的模式。'
                },
                stats: { competence: 60, ethics: 50, leadership: 70, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🐢 The Slow Roll: "Let the senior students (Grades 11-12) choose. Younger kids MUST be in person. Collect data for a year."',
                    th: '🐢 ค่อยๆ เป็นค่อยๆ ไป: "ให้พี่โต (ม.5-6) เลือกเอง ส่วนเด็กเล็กต้องเข้าเรียนจริง เก็บข้อมูลไว้ตัดสินใจในปีหน้า"',
                    zh: '🐢 缓慢推行："让高年级学生（11-12年级）自行选择。年幼的孩子必须到校。收集一年的数据。"'
                },
                consequence: {
                    en: '⚖️ Logical Balance. You avoided the riot. But the younger kids complain it\'s unfair that the older ones get to sleep in.',
                    th: '⚖️ ความสมดุลที่สมเหตุสมผล คุณเลี่ยงการประท้วงใหญ่ได้ แต่เด็กเล็กจะบ่นว่าไม่ยุติธรรมที่พี่ๆ ได้ตื่นสาย',
                    zh: '⚖️ 逻辑平衡。你避免了骚乱。但年幼的孩子抱怨说，年长的孩子能睡懒觉是不公平的。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 30 }
            }
        ]
    },
    {
        id: 'curr_010',
        text: {
            en: '🗣️ Student Voice: A student council proposal suggests that 20% of elective subjects should be designed and pitched by the students themselves. The Faculty Union thinks this devalues professional expertise.',
            th: '🗣️ เสียงของนักเรียน: สภานักเรียนเสนอให้นักเรียนเป็นผู้ออกแบบและนำเสนอวิชาเลือกเอง 20% ของวิชาทั้งหมด สหภาพครูมองว่านี่เป็นการลดทอนคุณค่าความเชี่ยวชาญทางวิชาชีพ',
            zh: '🗣️ 学生的声音：学生会的一项提议建议，20%的选修课应由学生自己设计并推介。教职工工会认为这贬低了专业知识。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Radical Empowerment: "Yes. Let\'s turn the school into a lab for democracy. If students want a class on \'Video Game Narrative,\' let them lead it."',
                    th: '🚀 ปลดล็อกพลังเด็ก: "ตกลง เปลี่ยนโรงเรียนให้เป็นห้องแล็บของประชาธิปไตย ถ้าเด็กอยากเรียนเรื่อง \'การเล่าเรื่องในเกม\' ก็ให้เขานำเองเลย"',
                    zh: '🚀 彻底赋能："好。让我们把学校变成民主的实验室。如果学生想要一门\'电子游戏叙事\'课，就让他们主导。"'
                },
                consequence: {
                    en: '🌟 Ultra-Engagement. Attendance in electives hits 100%. But the content is often "fluff," and universities question the rigor of your transcripts.',
                    th: '🌟 ความร่วมมือระดับสูงสุด ยอดเข้าเรียนวิชาเลือกพุ่งเป็น 100% แต่เนื้อหาบทเรียนมักจะเบาเกินไป และมหาลัยเริ่มสงสัยในคุณภาพของผลการเรียน',
                    zh: '🌟 极高的参与度。选修课的出勤率达到了100%。但内容往往是"花架子"，大学对你成绩单的严肃性表示怀疑。'
                },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Protect the Expertise: "Curriculum design requires a Master\'s degree. Students are here to learn, not to teach. Proposal denied."',
                    th: '🛑 ปกป้องความเชี่ยวชาญ: "การออกแบบหลักสูตรต้องมีวุฒิปริญญาโท นักเรียนมาที่นี่เพื่อเรียน ไม่ได้มาเพื่อสอน ไม่อนุมัติ"',
                    zh: '🛑 保护专业知识："课程设计需要硕士学位。学生是来学习的，不是来教学的。提议否决。"'
                },
                consequence: {
                    en: '🛡️ Academic Quality. Your school remains top-ranked for rigor. But the students feel silenced and the school atmosphere becomes sterile and cold.',
                    th: '🛡️ คุณภาพทางวิชาการ โรงเรียนยังรักษาอันดับต้นๆ เรื่องความข้นของเนื้อหาไว้ได้ แต่นักเรียนรู้สึกเหมือนถูกปิดปาก บรรยากาศในโรงเรียนดูจืดชืดและเย็นชา',
                    zh: '🛡️ 学术质量。你的学校在严谨性方面依然名列前茅。但学生感到被禁言，学校气氛变得枯燥冷漠。'
                },
                stats: { competence: 50, ethics: 20, leadership: 20, innovation: -40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Co-Creation Model: "Students pitch the topics, but a teacher MUST co-write the syllabus and grading rubric to ensure quality control."',
                    th: '🤝 ร่วมสร้างสรรค์: "นักเรียนนำเสนอหัวข้อได้ แต่ต้องมีครูช่วยเขียนแผนการสอนและเกณฑ์การให้คะแนนด้วยเพื่อให้คุมคุณภาพได้"',
                    zh: '🤝 共创模式："学生推介主题，但老师必须共同参与编写课程大纲和评分标准，以确保质量控制。"'
                },
                consequence: {
                    en: '✨ Bridging the Gap. It\'s a beautiful synergy. Teachers learn what kids care about, and kids learn how to structure deep knowledge. Best of both worlds.',
                    th: '✨ เชื่อมช่องว่าง เป็นการร่วมแรงร่วมใจที่งดงาม ครูรู้ว่าเด็กสนใจอะไร และเด็กได้เรียนรู้วิธีจัดการความรู้อย่างเป็นระบบ ได้ประโยชน์ทั้งสองฝ่าย',
                    zh: '✨ 弥合差距。这是一个美好的协同效应。老师们了解到孩子们关心什么，孩子们也学会了如何构建深层知识。两全其美。'
                },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 70 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Pilot Program: "Try it for one single \'Genius Hour\' on Friday afternoons. If it doesn\'t descent into chaos, we expand it next year."',
                    th: '📈 โครงการนำร่อง: "ลองทำแค่ช่วง \'Genius Hour\' ในบ่ายวันศุกร์ดูก่อน ถ้ามันไม่เละเทะ ปีหน้าค่อยขยายผล"',
                    zh: '📈 试点项目："在周五下午的\'天才时刻\'进行尝试。如果没出乱子，我们明年再扩大规模。"'
                },
                consequence: {
                    en: '🐢 Safe Progress. You avoided the faculty strike. The first few classes are a mix of useful and weird. You are seen as a cautious visionary.',
                    th: '🐢 ความก้าวหน้าที่ปลอดภัย คุณเลี่ยงการประท้วงของครูได้ วิชาแรกๆ มีทั้งที่มีประโยชน์และที่แปลกๆ ผสมกันไป คุณถูกมองว่าเป็นผู้มีวิสัยทัศน์ที่รอบคอบ',
                    zh: '🐢 安全的进展。你避免了教职工罢工。头几堂课有的很有用，有的很古怪。你被视为一位谨慎的远见卓识者。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 40 }
            }
        ]
    },
    {
        id: 'curr_011',
        text: {
            en: '🥤 Soda Sponsorship: A major beverage company offers $1M to renovate the gym if you include their "Wellness & Hydration" module in the health curriculum. The module emphasizes that "all calories are equal."',
            th: '🥤 สปอนเซอร์น้ำอัดลม: บริษัทยักษ์ใหญ่เสนอเงิน 1 ล้านดอลล์รีโนเวทโรงยิม แลกกับการใส่บทเรียน "สุขภาพและการเติมน้ำ" ในหลักสูตรสุขศึกษา ซึ่งบทเรียนนั้นเน้นย้ำว่า "แคลอรี่จากไหนก็เหมือนกันหมด"',
            zh: '🥤 汽水赞助：一家大型饮料公司提议，如果你在健康课程中加入他们的"健康与补水"模块，他们将提供100万美元翻修体育馆。该模块强调"所有卡路里都是平等的"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Refuse the Money: "I won\'t sell our students\' health to a sugar giant. Propaganda has no place in a syllabus. The gym stays old."',
                    th: '🔥 ปฏิเสธเงิน: "ฉันจะไม่ขายสุขภาพนักเรียนให้เจ้าพ่อน้ำตาล โฆษณาชวนเชื่อไม่มีที่ยืนในแผนการสอน โรงยิมเก่าก็ทนใช้ไป"',
                    zh: '🔥 拒绝这笔钱："我不会把学生的健康卖给糖业巨头。宣传不应出现在教学大纲中。体育馆就让它旧着吧。"'
                },
                consequence: {
                    en: '🛡️ Unbought Integrity. The medical community praises you. But the sports teams are furious as their equipment continues to break.',
                    th: '🛡️ ศักดิ์ศรีที่ซื้อไม่ได้ วงการแพทย์ยกย่องคุณ แต่ทีมกีฬาของโรงเรียนโกรธจัดเพราะอุปกรณ์พังแล้วพังอีก',
                    zh: '🛡️ 不受贿赂的正直。医学界赞扬你。但体育团队非常愤怒，因为他们的设备还在不断损坏。'
                },
                stats: { competence: 40, ethics: 90, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Take the Deal: "One module won\'t hurt. Students are smart enough to see through it. We need that new gym for student mental health."',
                    th: '💰 รับดีล: "แค่บทเดียวไม่พังหรอก เด็กฉลาดพอจะดูออก เราต้องการโรงยิมใหม่เพื่อสุขภาพจิตเด็กๆ"',
                    zh: '💰 达成交易："一个模块没什么大不了。学生们足够聪明，能看穿它。为了学生的心理健康，我们需要那座新体育馆。"'
                },
                consequence: {
                    en: '📈 Infrastructure Win. The gym is world-class. Recruitment of athletes spikes. But child obesity rates in your district start to creep up.',
                    th: '📈 โครงสร้างพื้นฐานยอดเยี่ยม โรงยิมระดับโลก ยอดนักกีฬาพุ่ง แต่สัดส่วนเด็กเป็นโรคอ้วนในเขตของคุณเริ่มค่อยๆ สูงขึ้น',
                    zh: '📈 基础设施得胜。体育馆是世界一流的。运动员的招募人数激增。但你所在地区的儿童肥胖率开始攀升。'
                },
                stats: { competence: 50, ethics: 10, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ The "Coke" Critique: "Agree to the module, but add a mandatory SECOND module on \'Deconstructing Corporate Marketing\' that analyzes the first module."',
                    th: '⚖️ วิพากษ์สปอนเซอร์: "ยอมรับบทเรียนนั้น แต่เพิ่มบทที่สองต่อท้ายเรื่อง \'การชำแหละการตลาดองค์กร\' เพื่อวิเคราะห์บทเรียนแรกให้เด็กดู"',
                    zh: '⚖️ 对"可乐"进行抨击："同意加入该模块，但要增加第二个强制性模块：\'去构建企业营销\'，专门分析第一个模块。"'
                },
                consequence: {
                    en: '✨ Educational Masterstroke. You got the money AND taught the kids critical thinking. The soda company is furious but the contract is signed.',
                    th: '✨ ชัยชนะที่เหนือชั้น คุณได้เงินและสอนความเห็นเชิงวิพากษ์ให้เด็กด้วย บริษัทน้ำอัดลมโกรธจัดแต่เซ็นสัญญาไปแล้ว ทำอะไรไม่ได้',
                    zh: '✨ 教育的神来之笔。你拿到了钱，还教会了孩子们批判性思维。汽水公司勃然大怒，但合同已经签了。'
                },
                stats: { competence: 70, ethics: 70, leadership: 80, innovation: 90 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Negotiate Substance: "Try to get them to remove the \'all calories equal\' line in exchange for putting the company logo on all school jerseys."',
                    th: '🤐 ต่อรองเนื้อหา: "ขอยอมเอาโลโก้บริษัทติดบนเสื้อกีฬาทุกตัว แลกกับการตัดประโยค \'แคลอรี่เท่ากันหมด\' ออกไป"',
                    zh: '🤐 协商实质内容："尝试让他们删掉\'所有卡路里均等\'这一行，作为交换，在所有学校球衣上印上公司标志。"'
                },
                consequence: {
                    en: '🐢 Branding Compromise. The curriculum stays accurate, but the school now looks like a giant walking advertisement for soda.',
                    th: '🐢 การประนีประนอมเรื่องแบรนด์ หลักสูตรยังถูกต้องแม่นยำ แต่โรงเรียนตอนนี้ดูเหมือนป้ายโฆษณาน้ำอัดลมเคลื่อนที่ขนาดยักษ์',
                    zh: '妥协性品牌推广。课程保持准确，但学校现在看起来就像一个巨大的移动汽水广告。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 }
            }
        ]
    },
    {
        id: 'curr_012',
        text: {
            en: '🧘 The Wellness Credit: You want to replace the standard "Algebra II" requirement with a "Life Literacy" credit (Taxes, Mindfulness, Emotional Intelligence). Universities might not accept it for admissions.',
            th: '🧘 หน่วยกิตสุขภาวะ: คุณต้องการเปลี่ยนวิชาบังคับ "พีชคณิต 2" เป็นวิชา "ความรู้พื้นฐานชีวิต" (เรื่องภาษี, การเจริญสติ, ความฉลาดทางอารมณ์) แต่มหาลัยอาจไม่ยอมรับในเกณฑ์รับสมัคร',
            zh: '🧘 健康学分：你想用"生活素养"学分（税收、正念、情商）取代标准的"代数 II"要求。大学在招生时可能不承认这一点。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Future-Proof Kids: "90% of people don\'t use Algebra II. 100% of people pay taxes and have emotions. Let\'s pivot and lead the way."',
                    th: '🚀 เด็กในโลกอนาคต: "90% ของคนไม่ได้ใช้พีชคณิต 2 แต่ 100% ต้องเสียภาษีและมีอารมณ์ มาเปลี่ยนทิศทางและเป็นผู้นำกันเถอะ"',
                    zh: '🚀 面向未来的孩子："90%的人不用代数 II。100%的人都要纳税，也都有情绪。让我们转型并引领潮流。"'
                },
                consequence: {
                    en: '🌟 Holistic Victory. Your students report the lowest anxiety levels in the nation. But the local Ivy League kids start transferring schools for math credits.',
                    th: '🌟 ชัยชนะขององค์รวม นักเรียนของคุณมีระดับความเครียดต่ำที่สุดในประเทศ แต่พวกเด็กหัวกะทิเริ่มย้ายโรงเรียนหนีเพื่อจะหาเรียนเลขเอาหน่วยกิตเข้ามหาลัยดัง',
                    zh: '🌟 全面的胜利。你的学生反映全国焦虑水平最低。但当地准备考常春藤盟校的孩子们开始转校去攒数学学分。'
                },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 90 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Protect the Path: "We cannot disadvantage our kids for the sake of a trend. Math is the foundation of logical thinking. Keep the Algebra."',
                    th: '🛑 ปกป้องเส้นทางหลัก: "เราจะทำให้เด็กเสียเปรียบเพราะตามเทรนด์ไม่ได้ เลขคือพื้นฐานของความคิดเชิงตรรกะ เก็บพีชคณิตไว้ตามเดิม"',
                    zh: '🛑 保护升学途径："我们不能为了潮流而损害孩子的利益。数学是逻辑思维的基础。保留代数。"'
                },
                consequence: {
                    en: '🛡️ Ivory Tower. Your school stays a feeder for top-tier science colleges. But graduate surveys show your alumni feel "unprepared for the real world."',
                    th: '🛡️ หอคอยงาช้าง โรงเรียนยังเป็นบ่อเพาะเด็กเก่งเข้ามหาลัยวิทย์ระดับท็อป แต่ผลสำรวจศิษย์เก่าบอกว่าพวกเขารู้สึก "ไม่พร้อมสำหรับชีวิตจริง"',
                    zh: '🛡️ 象牙塔。你的学校依然是顶尖理科院校的学生来源地。但毕业生调查显示，你的校友觉得"没准备好应对现实世界"。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: -50 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Integrated Math: "Don\'t replace it. Rewrite the Algebra II syllabus so 50% of the word problems are about taxes, interest rates, and financial modeling."',
                    th: '🤝 พีชคณิตบูรณาการ: "ไม่ต้องเปลี่ยนวิชาหรอก แค่เขียนแผนการสอนใหม่ให้โจทย์เลข 50% เป็นเรื่องเกี่ยวกับภาษี ดอกเบี้ย และการจัดทำแบบจำลองทางการเงินแทน"',
                    zh: '🤝 整合数学："不要取代它。重写代数 II 教学大纲，让 50% 的应用题都涉及税收、利率和财务建模。"'
                },
                consequence: {
                    en: '✨ Meaningful Math. Students stop asking "when will I use this?" You kept the credit and the utility. It required massive teacher retraining.',
                    th: '✨ คณิตศาสตร์ที่มีความหมาย เด็กเลิกถามว่า "เรียนไปทำไม?" คุณรักษาได้ทั้งหน่วยกิตและประโยชน์ใช้สอย แต่อาจต้องฝึกอบรมครูขนานใหญ่',
                    zh: '✨ 有意义的数学。学生们不再问"我什么时候会用到这个？"。你保留了学分和实用性。这需要对老师进行大规模的重新培训。'
                },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 70 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Opt-In Elective: "Keep Algebra II as the default, but offer Life Literacy as an alternative path for those not pursuing STEM careers."',
                    th: '📈 วิชาให้เลือกตามใจ: "ใช้พีชคณิต 2 เป็นค่าเริ่มต้น แต่ให้มีวิชาพื้นฐานชีวิตเป็นทางเลือกสำหรับคนที่ไม่คิดจะไปทางสายวิทย์-คณิต"',
                    zh: '📈 可选选修课："将代数 II 作为默认课程，但为那些不追求 STEM（科学、技术、工程、数学）职业的学生提供生活素养作为替代路径。"'
                },
                consequence: {
                    en: '🐢 Safe Choice. Most students take what their parents tell them. You didn\'t disrupt the system, but you also didn\'t truly innovate it.',
                    th: '🐢 ทางเลือกที่ปลอดภัย นักเรียนส่วนใหญ่เลือกเรียนตามที่พ่อแม่บอก คุณไม่ได้สั่นคลอนระบบ แต่ก็ไม่ได้ก้าวข้ามไปสู่นวัตกรรมจริงๆ',
                    zh: '🐢 安全的选择。大多数学生听从父母的安排。你没有打破系统，但也没有真正创新。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 20 }
            }
        ]
    },
    {
        id: 'curr_013',
        text: {
            en: '🥽 VR History: You want to implement Virtual Reality simulations of historical events. The "WWII" simulation is incredibly immersive but some parents fear it will traumatize students or glorify violence.',
            th: '🥽 ประวัติศาสตร์ VR: คุณต้องการใช้แบบจำลองความจริงเสมือน (VR) จำลองเหตุการณ์ประวัติศาสตร์ โดยฉาก "สงครามโลกครั้งที่ 2" นั้นสมจริงมากจนผู้ปกครองกังวลว่าจะทำร้ายจิตใจเด็กหรือเป็นการเชิดชูความรุนแรง',
            zh: '🥽 VR 历史：你想实施历史事件的虚拟现实模拟。"二战"模拟极其身临其境，但一些家长担心这会给学生留下创伤或美化暴力。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Immersion is Education: "The horror of war is the best deterrent. Let them see the trenches. It\'s better than a dry textbook."',
                    th: '🚀 ความสมจริงคือการศึกษา: "ความสยดสยองของสงครามเป็นเครื่องเตือนใจที่ดีที่สุด ให้พวกเขาเห็นภาพสนามเพลาะจริงๆ ดีกว่าอ่านหนังสือจืดๆ"',
                    zh: '🚀 沉浸就是教育："战争的恐怖是最好的威慑。让他们看看战壕。这比枯燥的教科书好。"'
                },
                consequence: {
                    en: '🌟 Unforgettable Impact. History becomes the most popular subject. Students develop deep empathy for veterans. A few students need counseling afterward.',
                    th: '🌟 ผลลัพธ์ที่ลืมไม่ลง วิชาประวัติศาสตร์กลายเป็นวิชาฮิตอันดับหนึ่ง เด็กมีความเห็นอกเห็นใจทหารผ่านศึกอย่างลึกซึ้ง แต่มีเด็กบางคนต้องเข้าปรึกษาจิตแพทย์ภายหลัง',
                    zh: '🌟 令人难忘的影响。历史成了最受欢迎的学科。学生们对退伍军人产生了深切的同情。事后有几名学生需要心理辅导。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Sanitized Version: "Remove any scenes of violence or suffering. Use VR to show the signing of treaties and political debates only."',
                    th: '🛑 ฉบับเซ็นเซอร์: "ตัดฉากความรุนแรงและความสูญเสียออกทั้งหมด ใช้ VR เพื่อแสดงฉากการเซ็นสนธิสัญญาและการดีเบตทางการเมืองเท่านั้น"',
                    zh: '🛑 净化版："除去任何暴力或受苦的场景。仅利用 VR 展示条约的签署和政治辩论。"'
                },
                consequence: {
                    en: '🐢 Boring Tech. The VR is expensive and boring. Students take the headsets off after 5 minutes. You wasted the budget on a "glorified movie theater."',
                    th: '🐢 เทคโนโลยีที่น่าเบื่อ VR ราคาแพงแต่ทำออกมาน่าเบื่อ เด็กใส่แว่นแค่ 5 นาทีก็ถอดทิ้ง คุณเสียเงินงบประมาณไปกับ "โรงหนังที่แค่หมุนหัวได้"',
                    zh: '🐢 乏味的技术。VR 设备昂贵且无趣。学生们戴上 5 分钟后就摘了下来。你把预算浪费在了一个"美化过的电影院"上。'
                },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Witness Mode: "Disable interaction. Students are \'ghosts\' who can only observe. Pair it with a mandatory reflection essay on ethics."',
                    th: '🤝 โหมดผู้สังเกตการณ์: "ปิดการโต้ตอบ นักเรียนเป็นเพียง \'วิญญาณ\' ที่มองเห็นแต่ทำอะไรไม่ได้ และต้องเขียนเรียงความสะท้อนความคิดเรื่องจริยธรรมควบคู่กันด้วย"',
                    zh: '🤝 见证模式："禁用交互功能。学生是只能观察的\'幽灵\'。配合一篇强制性的关于伦理的反思论文。"'
                },
                consequence: {
                    en: '✨ Respectful Innovation. It feels like a museum rather than a game. You secured the middle ground and gained parental trust.',
                    th: '✨ นวัตกรรมที่น่าเกรงขาม ให้ความรู้สึกเหมือนอยู่ในพิพิธภัณฑ์มากกว่าเล่นเกม คุณรักษาพื้นที่ส่วนกลางได้และได้รับความเชื่อใจจากผู้ปกครอง',
                    zh: '✨ 充满敬意的创新。感觉像博物馆而不是游戏。你保住了折中立场，赢得了家长的信任。'
                },
                stats: { competence: 60, ethics: 60, leadership: 60, innovation: 70 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Opt-In Experience: "Make the VR simulation an extracurricular for those with parental consent letters. Use traditional methods for the rest."',
                    th: '📈 ประสบการณ์ตามสมัครใจ: "ให้การจำลอง VR เป็นกิจกรรมนอกหลักสูตรสำหรับคนที่มีจดหมายยินยอมของพ่อแม่เท่านั้น ที่เหลือให้ใช้วิธีสอนแบบเดิม"',
                    zh: '📈 选择性体验："对于签有父母同意书的学生，将 VR 模拟作为课外活动。其余学生采用传统教学方法。"'
                },
                consequence: {
                    en: '⚖️ Diplomatic Success. No one is forced into trauma. But the class split creates two different levels of historical understanding.',
                    th: '⚖️ ชัยชนะทางการทูต ไม่มีใครถูกบังคับให้เจอภาพทำร้ายจิตใจ แต่การแบ่งเด็กเป็นสองกลุ่มทำให้ระดับความเข้าใจประวัติศาสตร์ต่างกัน',
                    zh: '⚖️ 外交成功。没有人被强迫面对心理创伤。但班级的分化导致了对历史理解的两个不同层面。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'curr_014',
        text: {
            en: '✍️ The Death of Cursive: A survey shows only 5% of your students can read or write cursive. You want to remove it entirely from Elementary stages to give more time for "Coding Ethics." Traditionalists are calling it the death of culture.',
            th: '✍️ จุดจบของการเขียนตัวบรรจง: ผลสำรวจชี้ว่าเด็กเพียง 5% อ่านหรือเขียนตัวบรรจงได้ คุณต้องการตัดมันออกจากประถมเพื่อเพิ่มเวลาให้วิชา "จริยธรรมการเขียนโค้ด" ฝ่ายอนุรักษนิยมบอกว่านี่คือจุดจบของวัฒนธรรม',
            zh: '✍️ 草书之死：一项调查显示，只有 5% 的学生能阅读或书写草书。你想在小学各阶段完全取消草书，以便为"编程伦理"腾出更多时间。传统主义者称这是文化的消亡。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Delete it: "Cursive is obsolete. Coding is the new literacy. We prioritize 2050, not 1950."',
                    th: '🚀 ลบทิ้งไปเลย: "ตัวขยุกขยิกมันล้าสมัยไปแล้ว โค้ดดิ้งคือการอ่านออกเขียนแบบใหม่ เรามุ่งหน้าสู่ปี 2050 ไม่ใช่ 1950"',
                    zh: '🚀 删掉它："草书已经过时了。编程是新的读写能力。我们优先考虑 2050 年，而不是 1950 年。"'
                },
                consequence: {
                    en: '🔥 Cultural War. Grandparents write angry letters to the paper. But your students become the highest-performing programmers in the state.',
                    th: '🔥 สงครามวัฒนธรรม ปู่ย่าตายายเขียนจดหมายด่าลงหนังสือพิมพ์ แต่เด็กโรงเรียนคุณกลายเป็นโปรแกรมเมอร์ที่เก่งที่สุดในรัฐ',
                    zh: '文化战争。祖父母们写信给报社表达愤怒。但你的学生成为了该州表现最优秀的程序员。'
                },
                stats: { competence: 50, ethics: 10, leadership: 30, innovation: 90 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Save it: "Handwriting is neurological. Research shows cursive aids brain development and connects us to historical documents. It stays mandatory."',
                    th: '🛑 รักษามันไว้: "การใช้มือนั้นส่งผลต่อระบบประสาท งานวิจัยบอกว่าการเขียนตัวบรรจงช่วยพัฒนาสมองและเชื่อมโยงเรากับประวัติศาสตร์ มันต้องเป็นวิชาบังคับต่อไป"',
                    zh: '🛑 保留它："书写与神经有关。研究表明草书有助于大脑发育，并将我们与历史文献联系起来。它仍是必修课。"'
                },
                consequence: {
                    en: '🛡️ Preserved Legacy. Your kids can read the Constitution in its original form. But they lose competitive ground to tech-focused charter schools.',
                    th: '🛡️ มรดกที่ได้รับการรักษา เด็กๆ อ่านรัฐธรรมนูญฉบับดั้งเดิมออก แต่พวกเขาสู้เด็กที่จบจากโรงเรียนเน้นเทคโนโลยีไม่ได้',
                    zh: '🛡️ 保留文化遗产。你的孩子能阅读原版的宪法。但在与注重技术的特许学校竞争时，他们失去了优势。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: -30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Hybrid Solution: "Teach cursive as an \'Art & Calligraphy\' elective. Replace the mandatory daily drill with the Coding ethics class."',
                    th: '🤝 ทางออกลูกครึ่ง: "สอนการเขียนเป็นวิชาเลือกในหมวดศิลปะ ส่วนเวลาวิชาประจำวันที่เคยเขียนบรรจงให้เปลี่ยนเป็นวิชาจริยธรรมเขียนโค้ดแทน"',
                    zh: '🤝 折中方案："将草书作为\'艺术与书法\'选修课。将强制性的日常练习改为编程伦理课。"'
                },
                consequence: {
                    en: '✨ Smart Transition. You pleased both sides. Most kids skip the elective, but the culture is technically preserved for those who care.',
                    th: '✨ การเปลี่ยนผ่านที่เฉลียวฉลาด คุณทำให้ทั้งสองฝ่ายแฮปปี้ เด็กส่วนใหญ่ไม่เลือกวิชานั้นหรอก แต่ในเชิงเทคนิคแล้ววัฒนธรรมยังไม่หายไปไหน',
                    zh: '✨ 明智的转型。你让双方都满意了。大多数孩子跳过了选修课，但对于那些在意的人来说，文化在技术上得到了保留。'
                },
                stats: { competence: 60, ethics: 60, leadership: 60, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🐢 The Passive Phase-Out: "Keep it in the curriculum but stop testing it. Teachers will focus on what is tested. It will die out naturally."',
                    th: '🐢 ค่อยๆ ให้มันตายไป: "เก็บไว้ในหลักสูตรแต่ไม่ต้องเอาไปสอบ ครูจะไปเน้นสอนเรื่องที่ต้องสอบเอง แล้วมันก็จะหายไปอย่างธรรมชาติ"',
                    zh: '🐢 被动淘汰："保留在课程中，但停止测试。老师会关注测试内容。它会自然消亡。"'
                },
                consequence: {
                    en: '📉 Bureaucratic Stagnation. No one is happy. Teachers are confused about priorities. You avoided conflict but failed to lead.',
                    th: '📉 สภาวะชะงักงันทางการเมือง ไม่มีใครแฮปปี้ ครูสับสนว่าควรเน้นตรงไหน คุณเลี่ยงความขัดแย้งได้แต่สอบตกเรื่องการเป็นผู้นำ',
                    zh: '📉 官僚式停滞。没人满意。老师们对重点感到困惑。你避免了冲突，但未能履行领导职责。'
                },
                stats: { competence: 20, ethics: 20, leadership: -40, innovation: 10 }
            }
        ]
    },
    {
        id: 'curr_015',
        text: {
            en: '📚 The "Banned" Book: A local group demands you remove a classic novel from the English curriculum due to its controversial language. If you keep it, you face a budget audit. If you remove it, the teachers union strikes.',
            th: '📚 หนังสือต้องห้าม: กลุ่มคนท้องถิ่นเรียกร้องให้ตัดนวนิยายคลาสสิกออกจากหลักสูตรภาษาอังกฤษเพราะใช้ภาษาที่เป็นประเด็น ถ้าเก็บไว้คุณจะถูกตรวจสอบงบประมาณ ถ้าตัดออกสหภาพครูจะประท้วงหยุดงานเทียบ',
            zh: '📚 "禁书"：由于一部经典小说的语言饱受争议，当地一个团体要求你将其从英语课程中移除。如果你保留它，你就面临预算审计。如果你移除它，教师工会将举行罢工。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Protect Freedom: "Classics are essential. We do not censor our library for political pressure. Bring on the audit."',
                    th: '🛡️ ปกป้องเสรีภาพ: "หนังสือคลาสสิกคือสิ่งสำคัญ เราจะไม่เซ็นเซอร์ห้องสมุดเพราะแรงกดดันทางการเมือง ตรวจงบมาได้เลย"',
                    zh: '🛡️ 保护自由："经典是必不可少的。我们不会因政治压力而审查我们的图书馆。审计就审计吧。"'
                },
                consequence: {
                    en: '🔥 Financial War. Your budget is cut by 10%. Teachers are inspired by your bravery and work extra hard. You are a free-speech legend.',
                    th: '🔥 สงครามการเงิน งบคุณถูกตัดไป 10% ครูมีแรงใจฮึดสู้เพราะความกล้าของคุณและทำงานหนักขึ้นเป็นพิเศษ คุณคือตำนานแห่งเสรีภาพในการพูด',
                    zh: '🔥 财务战争。你的预算被削减了 10%。教师们被你的勇敢所感动，工作额外努力。你成为了言论自由的传奇。'
                },
                stats: { competence: 40, ethics: 100, leadership: 90, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Remove and Replace: "There are 10,000 great books. Swapping one for a less controversial modern classic is just common sense. Avoid the audit."',
                    th: '🛑 ตัดออกและหาเล่มใหม่: "หนังสือดีๆ มีเป็นหมื่นเล่ม การเปลี่ยนเอาเล่มที่มันไม่เป็นประเด็นมาแทนก็แค่เรื่องสามัญสำนึก เลี่ยงการถูกตรวจสอบไปซะ"',
                    zh: '🛑 移除并替换："好书有成千上万。将一本换成争议较小的现代经典只是常识。避开审计。"'
                },
                consequence: {
                    en: '🐢 Compliance. The audit is avoided. But the English department morale collapses. They feel you "sold out" the value of literature.',
                    th: '🐢 การยอมตาม เลี่ยงการตรวจสอบได้จริง แต่ขวัญกำลังใจหมวดภาษาอังกฤษพังทลาย พวกเขารู้สึกว่าคุณ "ขายวิญญาณ" ปล่อยให้คุณค่าของวรรณกรรมหายไป',
                    zh: '妥协。避开了审计。但英语部门士气崩溃。他们觉得你"出卖"了文学的价值。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Critical Context: "Keep the book, but add a mandatory preface and classroom discussion about why the language is controversial. Change the curriculum from \'Reading\' to \'Critical Analysis.\'"',
                    th: '🤝 บริบทที่สำคัญ: "เก็บหนังสือไว้ แต่ต้องใส่บทนำบังคับและมีการถกเถียงในห้องเรียนว่าทำไมภาษานั้นถึงเป็นประเด็น เปลี่ยนหลักสูตรจากการ \'อ่าน\' เป็น \'การวิเคราะห์เชิงวิพากษ์\'"',
                    zh: '🤝 关键背景："保留这本书，但增加一个强制性的序言和课堂讨论，讨论为什么该语言饱受争议。将课程从\'阅读\'改为\'批判性分析\'。"'
                },
                consequence: {
                    en: '✨ Education Wins. You reframed the problem. The group can\'t complain because you are "addressing" their concern by critiquing the book itself.',
                    th: '✨ ชัยชนะของการศึกษา คุณเปลี่ยนมุมมองปัญหา กลุ่มคนเหล่านั้นว่าไม่ลงเพราะคุณได้ "จัดการ" ข้อกังวลของพวกเขาแล้วด้วยการวิพากษ์ตัวหนังสือเองในวิชา',
                    zh: '✨ 教育获胜。你重新界定了问题。那个团体没法抱怨，因为你通过批判书本本身来"解决"了他们的担忧。'
                },
                stats: { competence: 70, ethics: 70, leadership: 80, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Opt-In Reading: "Keep it on the syllabus but offer an alternative book for students whose parents object. Let families choose."',
                    th: '📈 อ่านตามความเหมาะสม: "เก็บไว้ในแผนการสอน แต่มีหนังสือทางเลือกให้สำหรับนักเรียนที่พ่อแม่ไม่สบายใจ ให้แต่ละครอบครัวเลือกเอง"',
                    zh: '📈 选择性阅读："保留在教学大纲中，但为那些父母反对的学生提供备选书籍。让家长自己选择。"'
                },
                consequence: {
                    en: '🐢 Fragmented Class. It\'s a logistical mess for teachers to teach two books at once. Some students feel stigmatized for their choice.',
                    th: '🐢 ห้องเรียนที่แยกส่วน เป็นภาระมหาศาลของครูที่ต้องสอนหนังสือสองเล่มพร้อมกัน นักเรียนบางคนรู้สึกเหมือนถูกตราหน้าจากการเลือกของตัวเอง',
                    zh: '🐢 分裂的课堂。对老师来说，同时教两本书简直是后勤灾难。有些学生因为自己的选择而感到蒙羞。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'curr_016',
        text: {
            en: '🌍 Climate Activism Grade: You want to add a "Social Impact" grade where students get credits for participating in local environmental protests. Conservative board members call it "political indoctrination."',
            th: '🌍 คะแนนกิจกรรมลดโลกร้อน: คุณต้องการเพิ่มคะแนน "ผลกระทบต่อสังคม" โดยเด็กจะได้หน่วยกิตจากการไปร่วมประท้วงเรื่องสิ่งแวดล้อมในพื้นที่ บอร์ดบริหารฝ่ายอนุรักษนิยมเรียกสิ่งนี้ว่า "การล้างสมองทางการเมือง"',
            zh: '🌍 气候行动评分：你想增加一个"社会影响"评分，学生参加当地的环境抗议活动可以获得学分。保守派董事会成员称其为"政治灌输"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Action is Learning: "Passive learning isn\'t enough. Students need to feel the weight of the future. The grade stays."',
                    th: '🚀 การปฏิบัติคือการเรียนรู้: "การเรียนแบบนั่งฟังอย่างเดียวไม่พอ เด็กต้องสัมผัสถึงน้ำหนักของอนาคต คะแนนนี้ต้องมีอยู่ต่อไป"',
                    zh: '🚀 行动就是学习："被动学习是不够的。学生需要感受到未来的重量。保留评分。"'
                },
                consequence: {
                    en: '🌟 Radical Future. Your school becomes a hub for young activists. National media loves it. But you face a legal challenge for using public funds to support protests.',
                    th: '🌟 อนาคตสุดโต่ง โรงเรียนกลายเป็นศูนย์รวมนักกิจกรรมรุ่นเยาว์ สื่อระดับชาติต่างรุมทำข่าว แต่คุณต้องเจอคดีความฐานใช้งบรัฐสนับสนุนการประท้วง',
                    zh: '🌟 激进的未来。你的学校成为了年轻活动家的枢纽。全国媒体都很喜欢。但由于动用公款支持抗议活动，你面临法律挑战。'
                },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Keep it Scientific: "Scrap the protest credits. Instead, make students write a 20-page scientific paper on carbon capture. Keep politics out."',
                    th: '🛑 อยู่ในขอบเขตวิชาการ: "ยกเลิกคะแนนประท้วง แต่ให้เด็กเขียนรายงานรายงานวิทย์ 20 หน้าเรื่องการดักจับคาร์บอนแทน กันเรื่องการเมืองออกไป"',
                    zh: '🛑 保持科学性："取消抗议学分。相反，让学生写一篇关于碳捕集的 20 页科学论文。让政治走开。"'
                },
                consequence: {
                    en: '🛡️ Neutral Ground. No legal trouble. But students find the assignment boring and disconnected from the real emergency. They lose interest in the subject.',
                    th: '🛡️ พื้นที่ที่เป็นกลาง ไม่มีปัญหาทางกฎหมาย แต่นักเรียนมองว่างานนี้น่าเบื่อและไม่เชื่อมโยงกับวิกฤตที่เกิดขึ้นจริง พวกเขาเริ่มหมดความสนใจในวิชานี้',
                    zh: '🛡️ 中立地带。没有法律麻烦。但学生觉得作业枯燥乏味，与现实的紧急情况脱节。他们对这门学科失去了兴趣。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: -40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Service Learning: "Change protests to \'Community Service.\' Credits for planting trees or cleaning rivers. Let them choose their form of impact."',
                    th: '🤝 การเรียนรู้ผ่านการบริการ: "เปลี่ยนจากประท้วงเป็น \'จิตอาสาชุมชน\' ให้หน่วยกิตจากการปลูกป่าหรือขุดลอกคลองแทน ให้เด็กเลือกรูปแบบการทำประโยชน์เอง"',
                    zh: '🤝 服务式学习："将抗议改为\'社区服务\'。植树或清理河流可以获得学分。让学生自己选择产生影响的方式。"'
                },
                consequence: {
                    en: '✨ Universal Support. Even the board loves this. It builds real-world skills without the political firestorm. Your leadership is praised.',
                    th: '✨ การสนับสนุนอย่างเป็นเอกฉันท์ แม้แต่บอร์ดบริหารก็ชอบสิ่งนี้ มันสร้างทักษะชีวิตจริงโดยไม่ต้องเจอพายุการเมือง คุณได้รับคำชมเรื่องภาวะผู้นำ',
                    zh: '✨ 普遍支持。甚至董事会也很喜欢这种做法。它在不引发政治风暴的情况下培养了现实世界的技能。你的领导能力受到了赞扬。'
                },
                stats: { competence: 60, ethics: 70, leadership: 70, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Optional Portfolio: "Don\'t grade it. Let students keep a portfolio of activism to show universities. It doesn\'t affect the GPA."',
                    th: '🤐 แฟ้มสะสมผลงาน (Portfolio) ทางเลือก: "ไม่ต้องให้คะแนน แต่ให้เด็กเก็บผลงานกิจกรรมไว้ไปโชว์ตอนเข้ามหาลัยเอง ไม่ส่งผลต่อเกรดเฉลี่ย"',
                    zh: '🤐 可选的作品集："不要给它评分。让学生保留一份行动的作品集，以向大学展示。这不会影响绩点。"'
                },
                consequence: {
                    en: '🐢 Safe and Ignored. Only the most dedicated students do it. It has zero impact on the overall school culture.',
                    th: '🐢 ปลอดภัยแต่ไม่มีใครสน มีเพียงเด็กที่ใจรักจริงๆ เท่านั้นที่ทำ มันไม่มีผลต่อการขับเคลื่อนวัฒนธรรมโรงเรียนในภาพรวมเลย',
                    zh: '🐢 安全但被忽视。只有最投入的学生才会去做。对整体学校文化没有产生任何影响。'
                },
                stats: { competence: 30, ethics: 40, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'curr_017',
        text: {
            en: '📅 4-Day Compressed Week: You are designing a curriculum that fits 5 days of learning into 4 longer days. Students love the 3-day weekend, but you must cut 1 hour of "Arts/Music" every week to fit the core math and science hours.',
            th: '📅 เรียน 4 วันแต่เข้มข้น: คุณกำลังออกแบบหลักสูตรที่อัดการเรียน 5 วันลงใน 4 วันที่เรียนยาวขึ้น เด็กๆ ชอบที่มีวันหยุด 3 วัน แต่คุณต้องยอมตัดเวลา "ศิลปะ/ดนตรี" ออกอาทิตย์ละ 1 ชม. เพื่อให้เพียงพอต่อชั่วโมงคณิตศาสตร์และวิทยาศาสตร์',
            zh: '📅 每周 4 天浓缩课时：你正在设计一套将 5 天的学习内容压缩进 4 天（每天更长）的课程。学生们喜欢 3 天的周末，但你每周必须削减 1 小时的"艺术/音乐"课，以保证核心数学和科学的课时。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Efficiency First: "The future is STEM. We can\'t cut Math. Students will discover music on their own with all that extra free time on Fridays."',
                    th: '🚀 เน้นประสิทธิภาพ: "อนาคตคือสายวิทย์-คณิต เราตัดเลขไม่ได้หรอก เดี๋ยววันศุกร์ที่หยุดไปเด็กๆ ก็คงไปหาแรงบันดาลใจทางดนตรีเองแหละ"',
                    zh: '🚀 效率第一："未来属于 STEM。我们不能削减数学。学生们可以在周五多出来的空闲时间里自己去探索音乐。"'
                },
                consequence: {
                    en: '📉 Aesthetic Decline. Test scores in core subjects go up, but your award-winning school band has to disband. The "creative soul" of the school dims.',
                    th: '📉 สุนทรียภาพที่เสื่อมถอย คะแนนสอบวิชาหลักพุ่งขึ้น แต่วงโยธวาทิตระดับชนะเลิศของโรงเรียนต้องยุบไป "จิตวิญญาณสร้างสรรค์" ของโรงเรียนมอดดับลง',
                    zh: '📉 审美衰落。核心科目的考试成绩提高了，但你那屡获殊荣的学校乐队却不得不解散。学校的"创造性灵魂"暗淡了。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Protect the Arts: "A four-day week is only acceptable if we maintain the balance. Cut 15 minutes from every core subject instead of killing music."',
                    th: '🛑 ปกป้องศิลปะ: "จะเรียน 4 วันก็ได้แต่ต้องสมดุล ไปตัดเวลาวิชาหลักละ 15 นาทีแทนที่จะมาฆ่าวิชาดนตรีทิ้ง"',
                    zh: '🛑 保护艺术："只有在保持平衡的前提下，每周 4 天课时制才是可以接受的。从每个核心科目中削减 15 分钟，而不是抹杀音乐课。"'
                },
                consequence: {
                    en: '🐢 The Slow Down. Teachers complain they can\'t finish the syllabus. You are technically "balanced," but everyone feels rushed and high-strung.',
                    th: '🐢 ความล่าช้า ครูบ่นว่าสอนตามแผนไม่ทัน คุณรักษาความ "สมดุล" ไว้ได้จริง แต่ทุกคนรู้สึกกดดันและต้องรีบเร่งจนเกินไป',
                    zh: '进度放缓。老师们抱怨无法完成教学大纲。你在技术上达到了"平衡"，但每个人都感到仓促且精神高度紧张。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Flipped Arts: "Move arts and music to an online \'project-based\' model. Students submit videos of their practice on Fridays to keep the credits without using classroom time."',
                    th: '🤝 ศิลปะแบบกลับด้าน: "ย้ายวิชาศิลปะและดนตรีไปเป็นแบบออนไลน์เน้นทำโปรเจกต์ เด็กๆ ส่งวิดีโอซ้อมในวันศุกร์แทนเพื่อเก็บหน่วยกิตโดยไม่เบียดเวลาในห้องเรียน"',
                    zh: '🤝 翻转艺术课："将艺术和音乐转变为在线\'项目制\'模式。学生在周五提交他们的练习视频，以便在不占用课堂时间的情况下保留学分。"'
                },
                consequence: {
                    en: '✨ Modern Compromise. It actually works! Students use their Friday to record music videos and digital art. You innovated the delivery method.',
                    th: '✨ การประนีประนอมที่ทันสมัย มันได้ผลแฮะ! เด็กๆ ใช้เวลาวันศุกร์ถ่ายมิวสิควิดีโอและทำศิลปะดิจิทัล คุณได้สร้างนวัตกรรมใหม่ในการจัดการเรียนรู้',
                    zh: '✨ 现代折中方案。真的奏效了！学生们利用周五的时间录制音乐视频和创作数字艺术。你创新了教学方式。'
                },
                stats: { competence: 60, ethics: 40, leadership: 60, innovation: 90 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 No Change: "If the 4-day week hurts the Arts, then we stay on 5 days. Integrity is not negotiable for convenience."',
                    th: '🤐 ไม่เปลี่ยน: "ถ้าเรียน 4 วันแล้วทำร้ายวิชาศิลปะ เราก็เรียน 5 วันต่อไป ความถูกต้องสำคัญกว่าความสะดวกสบาย"',
                    zh: '🤐 不作改变："如果每周 4 天课时制损害了艺术，那么我们就维持每周 5 天课时制。正直原则不容因便利而妥协。"'
                },
                consequence: {
                    en: '🛡️ Preserved Standards. You maintained the status quo. But the staff and students are burnout and jealous of the neighboring district\'s long weekends.',
                    th: '🛡️ มาตรฐานที่มั่นคง คุณรักษามาตรฐานเดิมไว้ได้ แต่ทั้งครูและเด็กต่างหมดไฟและอิจฉาเขตข้างๆ ที่ได้หยุดยาว 3 วัน',
                    zh: '🛡️ 保持标准。你维持了现状。但教职员工和学生都感到筋疲力尽，并且嫉妒邻近学区的长周末。'
                },
                stats: { competence: 40, ethics: 60, leadership: 50, innovation: -40 }
            }
        ]
    },
    {
        id: 'curr_018',
        text: {
            en: '🛠️ Vocational Shift: College tuition is hitting record highs. You want to shift the school focus from "Pre-University" to "Pre-Career," with mandatory plumbing, coding, and HVAC tracks. High-income parents are calling it "limiting their children\'s potential."',
            th: '🛠️ มุ่งสู่สายอาชีพ: เมื่อค่าเทอมมหาลัยพุ่งสูงสุดเป็นประวัติการณ์ คุณต้องการเปลี่ยนจุดเน้นของโรงเรียนจาก "เตรียมเข้ามหาลัย" เป็น "เตรียมประกอบอาชีพ" โดยบังคับเรียนวิชาช่างประปา เขียนโค้ด และช่างแอร์ พ่อแม่รวยๆ มองว่านี่คือการ "ปิดกั้นอนาคตลูก"',
            zh: '🛠️ 职业转型：大学学费正创下历史新高。你想将学校的重点从"预科"转移到"预就业"，增加强制性的管道工、编程和暖通空调课程。高收入家长称其为"限制了孩子的前能"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Pragmatic Future: "A debt-free plumber is more successful than a debt-ridden liberal arts major. We are building the working class of 2030."',
                    th: '🚀 อนาคตที่เน้นความจริง: "ช่างประปาที่ไร้หนี้ประสบความสำเร็จกว่าคนจบอาร์ตที่มีหนี้ท่วมหัว เรากำลังสร้างแรงงานคุณภาพแห่งปี 2030"',
                    zh: '🚀 务实的未来："一个背负债务的文科生不如一个没有债务的管道工。我们正在培养 2030 年的劳动阶层。"'
                },
                consequence: {
                    en: '🌟 Economic Win. Your graduates get high-paying jobs immediately. But the school loses its "Academic Prestige" status and enrollment from the wealthy drops.',
                    th: '🌟 ชัยชนะทางเศรษฐกิจ เด็กที่จบไปได้งานเงินเดือนสูงทันที แต่โรงเรียนเสียชื่อ "สถาบันวิชาการชั้นนำ" และยอดเด็กบ้านรวยลดฮวบ',
                    zh: '🌟 经济上的胜利。你的毕业生立即获得了高薪工作。但学校失去了其"学术威望"地位，富裕家庭的入学率下降。'
                },
                stats: { competence: 60, ethics: 30, leadership: 50, innovation: 80 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Elite Standards: "We must aim for the stars. Keep the high-level philosophy and physics. Those who want trades can go to night school."',
                    th: '🛑 มาตรฐานระดับสูง: "เราต้องเล็งที่ดวงดาว เก็บวิชาปรัชญาและฟิสิกส์ชั้นสูงไว้ ใครอยากเป็นช่างก็ไปเรียนภาคค่ำเอา"',
                    zh: '🛑 精英标准："我们必须志存高远。保留高水平的哲学和物理课。想学手艺的可以去上夜校。"'
                },
                consequence: {
                    en: '🛡️ Intellectual Bastion. Your school remains a pipeline for doctors and layers. But 40% of your remaining graduates struggle with massive student debt and no practical skills.',
                    th: '🛡️ ป้อมปราการทางปัญญา โรงเรียนยังเป็นบ่อเกิดของหมอและทนาย แต่เด็กอีก 40% ที่เหลือต้องจมกับหนี้กู้เรียนและไม่มีทักษะอาชีพติดตัว',
                    zh: '🛡️ 知识城堡。你的学校依然是医生和律师的摇篮。但你剩下的毕业生中有 40% 在巨大的学生债务和缺乏实用技能中挣扎。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: -30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 "The Polymath" Model: "Make one trade skill mandatory for EVERYONE. The future brain surgeon needs to know how a circuit board works. Dignity of labor for all."',
                    th: '🤝 โมเดล "พหูสูต": "บังคับเรียนวิชาช่างหนึ่งอย่างสำหรับทุกคน หมอผ่าตัดในอนาคตควรต้องรู้ว่าแผงวงจรทำงานยังไง ทุกอาชีพมีเกียรติเท่ากัน"',
                    zh: '🤝 "博学者"模式："让每个人都要强制学习一项手工艺。未来的脑科医生需要知道电路板是如何工作的。所有人都要尊重劳动。"'
                },
                consequence: {
                    en: '✨ Cultural Revolution. It’s a beautiful, unified school culture. Even the wealthy parents eventually love seeing their kids fix the kitchen sink. A new social standard.',
                    th: '✨ การปฏิวัติวัฒนธรรม วัฒนธรรมโรงเรียนสวยงามและกลมเกลียว แม้แต่พ่อแม่รวยๆ ก็ชอบที่เห็นลูกซ่อมซิงค์น้ำเองได้ กลายเป็นมาตรฐานสังคมใหม่',
                    zh: '✨ 文化革命。这是一种美好的、统一的学校文化。甚至富裕的家长最终也喜欢看到他们的孩子修理厨房水槽。一种新的社会标准。'
                },
                stats: { competence: 70, ethics: 70, leadership: 80, innovation: 70 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Late-Stage Track: "Only introduce vocational tracks in the final semester for those who are NOT applying to university. Keep it separate."',
                    th: '📈 แยกสายช่วงท้าย: "เปิดวิชาสายอาชีพเฉพาะเทอมสุดท้ายสำหรับคนที่จะไม่ต่อมหาลัยเท่านั้น แยกกลุ่มให้ชัดเจน"',
                    zh: '📈 后期分流："仅在最后一个学期为那些不准备考大学的学生引入职业课程。保持分离状态。"'
                },
                consequence: {
                    en: '🐢 The Status Quo. It’s better than nothing, but it feels like a "consolation prize" for the kids who aren\'t "academic enough." It maintains the class divide.',
                    th: '🐢 รักษาภาวะเดิม ดีกว่าไม่ทำอะไรเลย แต่มันให้ความรู้สึกเหมือน "รางวัลปลอบใจ" สำหรับเด็กที่ไม่เก่งวิชาการ และยังคงแบ่งแยกชนชั้นต่อไป',
                    zh: '现状。总比没有好，但对于那些不够"学术性"的孩子来说，这感觉就像是一个"安慰奖"。它维持了阶级分化。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 10 }
            }
        ]
    },
    {
        id: 'curr_design_019',
        text: {
            en: '🏫 The Four-Day Week: The district is considering a four-day school week to save costs and reduce teacher burnout. You must redesign the curriculum to fit shorter instruction time without losing academic rigor.',
            th: '🏫 สัปดาห์เรียน 4 วัน: เขตการศึกษากำลังพิจารณาเปลี่ยนไปเรียน 4 วันต่อสัปดาห์เพื่อประหยัดงบและลดความล้าของครู คุณต้องออกแบบหลักสูตรใหม่ให้เหมาะสมกับเวลาที่น้อยลงโดยไม่เสียคุณภาพวิชาการ',
            zh: '🏫 四天学制：学区正考虑实行四天学制以节省成本并减少教师倦怠。你必须重新设计课程，在缩短教学时间的同时不降低学术严谨性。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✂️ Trim the Fat: Remove non-essential electives and focus purely on core subjects (Math, Science, English).',
                    th: '✂️ ตัดส่วนเกิน: ถอดวิชาเลือกขที่ไม่จำเป็นออก แล้วโฟกัสเฉพาะวิชาหลัก (คณิต, วิทย์, อังกฤษ) ล้วนๆ',
                    zh: '✂️ 精简：移除非核心选修课，完全专注于核心科目（数学、科学、英语）。'
                },
                consequence: {
                    en: '📊 Efficiency Boost! Test scores stay stable, but students lose interest in school as the "fun" subjects are gone. Morale drops.',
                    th: '📊 ประสิทธิภาพเพิ่ม! คะแนนสอบคงที่ แต่นักเรียนหมดความสนใจในโรงเรียนเพราะวิชาที่ "สนุก" หายไป ขวัญกำลังใจลดลง',
                    zh: '📊 效率提升！统计分数稳定，但由于"有趣"的科目消失，学生失去了对学校的兴趣。士气下降。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '💻 Blended Friday: Use the 5th day for mandatory online independent study and project-based learning.',
                    th: '💻 วันศุกร์แบบผสม: ใช้สัปดาห์ที่ 5 สำหรับการเรียนออนไลน์ด้วยตัวเองและโครงงานที่บังคับ',
                    zh: '💻 混合星期五：将第五天用于强制性的在线自主学习和项目作业。'
                },
                consequence: {
                    en: '✨ Modern Success! Students learn self-discipline. Innovation scores skyrocket, though students without internet access struggle.',
                    th: '✨ ความสำเร็จสมัยใหม่! นักเรียนเรียนรู้ระเบียบวินัยในตนเอง คะแนนเทคโนโลยีพุ่ง แต่เด็กที่ไม่มีเน็ตต้องลำบาก',
                    zh: '✨ 现代成功！学生学会了自律。创新分数飙升，尽管没有网络连接的学生会感到困难。'
                },
                stats: { competence: 45, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '⏳ Longer Days: Keep all subjects but extend the school day from 8 AM to 5 PM for the 4 days.',
                    th: '⏳ ยืดเวลาเรียน: เก็บทุกวิชาไว้แต่ขยายเวลาเข้าเรียนเป็น 8 โมงเช้าถึง 5 โมงเย็นใน 4 วันนั้น',
                    zh: '⏳ 延长课时：保留所有科目，但将四天的上课时间延长至早上8点到下午5点。'
                },
                consequence: {
                    en: '😫 Burnout City. Everyone is exhausted by 3 PM. Quality of instruction plummets in the late afternoon.',
                    th: '😫 เพลียกันถ้วนหน้า ทุกคนหมดแรงตอนบ่าย 3 คุณภาพการสอนดิ่งลงในช่วงเย็น',
                    zh: '😫 倦怠城市。到下午3点大家都精疲力竭了。傍晚时分的教学质量暴跌。'
                },
                stats: { competence: 20, ethics: 25, leadership: 15, innovation: 5 }
            },
            {
                id: 'D',
                text: {
                    en: '🔙 Reject Change: Fight the four-day week. Argue that it hurts low-income families who rely on school for childcare.',
                    th: '🔙 ปฏิเสธ: คัดค้านสัปดาห์เรียน 4 วัน แย้งว่าจะกระทบครอบครัวรายได้น้อยที่ต้องพึ่งโรงเรียนในการดูแลลูก',
                    zh: '🔙 拒绝变革：反对四天学制。争辩称这会伤害依靠学校看顾孩子的低收入家庭。'
                },
                consequence: {
                    en: '🤝 Equity Hero. You save the 5-day week, but the district faces a massive budget deficit and must cut staff instead.',
                    th: '🤝 ฮีโร่แห่งความเสมอภาค คุณรักษา 5 วันไว้ได้ แต่เขตการศึกษาต้องเผชิญภาวะขาดดุลมหาศาลและต้องเลิกจ้างพนักงานแทน',
                    zh: '🤝 公平英雄。公保住了五天学制，但学区面临巨大的预算赤字，不得不裁减员工。'
                },
                stats: { competence: 30, ethics: 50, leadership: 45, innovation: 10 }
            }
        ]
    },
    {
        id: 'curr_design_020',
        text: {
            en: '🩺 Mental Health Integration: You want to add mental health and emotional intelligence (SEL) to the core curriculum. Critics call it "distracting from academics."',
            th: '🩺 บูรณาการสุขภาพจิต: คุณต้องการเพิ่มเรื่องสุขภาพจิตและความฉลาดทางอารมณ์ (SEL) ในหลักสูตรหลัก นักวิจารณ์บอกว่า "ทำให้เสียสมาธิจากการเรียน"',
            zh: '🩺 心理健康整合：你想将心理健康和情商（SEL）加入核心课程。批评者称这会"分散学习注意力"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧠 Dedicated Period: Add a mandatory 30-minute SEL block every morning for all grades.',
                    th: '🧠 ช่วงเวลาเฉพาะ: เพิ่มช่วง SEL บังคับ 30 นาทีทุกเช้าสำหรับทุกระดับชั้น',
                    zh: '🧠 专门课时：每天早晨为所有年级增加30分钟强制性的SEL（社交情感学习）时间。'
                },
                consequence: {
                    en: '🌈 Happy Campers! Discipline issues drop by 40%. Students feel safer, but some parents complain about "lost math time."',
                    th: '🌈 เด็กๆ มีความสุข! ปัญหาทางวินัยลดลง 40% นักเรียนรู้สึกปลอดภัยขึ้น แต่ผู้ปกครองบางคนบ่นว่า "เสียเวลาเรียนคณิต"',
                    zh: '🌈 快乐的学生！纪律问题减少了40%。学生感到更安全，但一些家长抱怨"浪费了数学时间"。'
                },
                stats: { competence: 35, ethics: 45, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🔬 Data-Driven Infusion: Embed SEL into existing subjects (e.g., emotional resilience in Literature, group ethics in Science).',
                    th: '🔬 แทรกซึมผ่านข้อมูล: ใส่ SEL เข้าไปในวิชาที่มีอยู่ (เช่น ความอดทนทางอารมณ์ในวิชาภาษา, จริยธรรมกลุ่มในวิชาวิทย์)',
                    zh: '🔬 数据驱动注入：将SEL嵌入现有科目中（例如：文学课的情绪韧性，科学课的团体伦理）。'
                },
                consequence: {
                    en: '🎓 Academic Excellence. Teachers find it natural. No time is "lost." Students apply skills to real work.',
                    th: '🎓 ความยอดเยี่ยมทางวิชาการ ครูรู้สึกว่าเป็นธรรมขาติ ไม่เสียเวลาเรียน นักเรียนได้ใช้ทักษะกับงานจริง',
                    zh: '🎓 学术卓越。老师觉得这很自然。没有"浪费"时间。学生将技能应用到实际工作中。'
                },
                stats: { competence: 50, ethics: 40, leadership: 35, innovation: 45 }
            },
            {
                id: 'C',
                text: {
                    en: '📉 Optional Workshop: Offer SEL only as an after-school elective for interested students.',
                    th: '📉 เวิร์กชอปทางเลือก: ให้ SEL เป็นวิชาเลือกหลังเลิกเรียนสำหรับนักเรียนที่สนใจเท่านั้น',
                    zh: '📉 可选研讨会：仅为感兴趣的学生提供课后SEL选修课。'
                },
                consequence: {
                    en: '😐 Marginal Impact. Only the most stable students attend. Those who need it most are too busy or unmotivated.',
                    th: '😐 ผลกระทบจำกัด มีเฉพาะนักเรียนที่โอเคอยู่แล้วเข้าร่วม ส่วนคนที่ต้องการมากที่สุดมักจะยุ่งหรือไม่สนใจ',
                    zh: '😐 边际影响。只有最稳定的学生参加。最需要它的学生要么太忙，要么缺乏动力。'
                },
                stats: { competence: 25, ethics: 20, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🙈 Crisis Response: Only provide SEL materials to students who are flagged with behavioral issues.',
                    th: '🙈 ตอบโต้เมื่อเกิดวิกฤต: ให้สื่อ SEL เฉพาะนักเรียนที่มีปัญหาด้านพฤติกรรมเท่านั้น',
                    zh: '🙈 危机应对：仅向被标记为有行为问题的学生提供SEL材料。'
                },
                consequence: {
                    en: '🚑 Band-Aid Solution. You are constantly "putting out fires" rather than building a supportive culture. Issues persist.',
                    th: '🚑 วิธีแก้ปัญหาเฉพาะหน้า คุณต้องคอย "ดับไฟ" ตลอดเวลาแทนที่จะสร้างวัฒนธรรมที่สนับสนุนกัน ปัญหายังคงอยู่',
                    zh: '🚑 创可贴式方案。你一直在"救火"，而不是建立一种支持性的文化。问题依然存在。'
                },
                stats: { competence: 20, ethics: 15, leadership: 10, innovation: 5 }
            }
        ]
    },
    {
        id: 'curr_design_021',
        text: {
            en: '🏢 Corporate Partnerships: A major retail chain wants to fund vocational paths in high schools, but they want to control the specific skills taught to match their entry-level jobs.',
            th: '🏢 ร่วมทุนองค์กร: เครือค้าปลีกยักษ์ใหญ่ต้องการให้ทุนสายอาชีพในโรงเรียนมัธยม แต่เขาต้องการคุมทักษะที่จะสอนให้ตรงกับงานระดับเริ่มต้นของเขา',
            zh: '🏢 企业伙伴关系：一家主要零售连锁店想资助高中的职业课程，但他们想控制所教授的具体技能，以匹配他们的初级职位。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Full Partnership: Take the funding. Our goal is to get students jobs immediately after graduation.',
                    th: '🤝 เป็นพาร์ทเนอร์เต็มตัว: รับทุน เป้าหมายเราคือให้นักเรียนมีงานทำทันทีหลังจบ',
                    zh: '🤝 全面合作：接受资助。我们的目标是让学生毕业后立即就能找到工作。'
                },
                consequence: {
                    en: '💰 Employment Surge! 90% job placement. However, students lack transferable skills if the company ever goes under.',
                    th: '💰 การจ้างงานพุ่ง! นักเรียนได้งาน 90% แต่พวกเขาจะขาดทักษะที่ใช้กับงานอื่นได้ถ้าบริษัทนั้นเจ๊ง',
                    zh: '💰 就业潮！90%的就业安置率。然而，如果该公司倒闭，学生将缺乏可转移的技能。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Curriculum Autonomy: Accept funding for equipment, but refuse their curriculum. We teach broader management skills, not just their POS system.',
                    th: '⚖️ อิสระในหลักสูตร: รับทุนซื้ออุปกรณ์ แต่ปฏิเสธหลักสูตรเขา เราสอนทักษะการจัดการที่กว้างกว่า ไม่ใช่แค่ระบบขายหน้าร้านของเขา',
                    zh: '⚖️ 课程自主：接受设备资助，但拒绝他们的课程。我们教授更广泛的管理技能，而不不仅仅是他们的收银系统。'
                },
                consequence: {
                    en: '🛡️ Balanced Education. Company is less happy, but students get a well-rounded vocational education. They can work anywhere.',
                    th: '🛡️ การศึกษาที่สมดุล บริษัทไม่ค่อยพอใจนัก แต่นักเรียนได้การศึกษาทางอาชีพที่รอบด้าน พวกเขาไปทำงานที่ไหนก็ได้',
                    zh: '🛡️ 平衡教育。公司不太高兴，但学生获得了全面的职业教育。他们可以在任何地方工作。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 35 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Tech Pivot: Pitch the partnership to a tech company instead of retail. Focus on coding over logistics.',
                    th: '🚀 พลิกธุรกิจ: ไปเสนอพาร์ทเนอร์กับบริษัทเทคแทนค้าปลีก เน้นการเขียนโค้ดมากกว่าโลจิสติกส์',
                    zh: '🚀 技术转型：向科技公司而非零售公司寻求合作。专注于编程而非物流。'
                },
                consequence: {
                    en: '✨ Future-Proofing. High-paying jobs. But the barrier to entry is higher, leaving struggling students behind.',
                    th: '✨ พร้อมสำหรับอนาคต งานรายได้สูง แต่เพดานการเข้าถึงสูงขึ้น ทิ้งเด็กที่เรียนไม่เก่งไว้ข้างหลัง',
                    zh: '✨ 面向未来。高薪职位。但准入门槛更高，让吃力的学生掉队。'
                },
                stats: { competence: 50, ethics: 30, leadership: 35, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🚫 No Corporate Influence: Reject all funding. Keep the curriculum purely academic and debt-free from commercial bias.',
                    th: '🚫 ไม่รับอิทธิพลองค์กร: ปฏิเสธทุกทุน รักษาเป็นหลักสูตรวิชาการบริสุทธิ์และปราศจากอคติทางการค้า',
                    zh: '🚫 无企业影响：拒绝所有资助。保持课程纯学术性，不带商业偏见，没有债务。'
                },
                consequence: {
                    en: '📉 Resource Deprived. Students work on 10-year-old computers. They are safe from "corporate brainwashing" but unprepared for the market.',
                    th: '📉 ขาดแคลนทรัพยากร นักเรียนต้องใช้คอมรุ่นเมื่อ 10 ปีที่แล้ว พวกเขาปลอดภัยจาก "การล้างสมองขององค์กร" แต่ไม่พร้อมสำหรับตลาดงาน',
                    zh: '📉 资源匮乏。学生在使用10年前的电脑。他们免受"企业洗脑"，但没有为市场做好准备。'
                },
                stats: { competence: 20, ethics: 50, leadership: 20, innovation: -10 }
            }
        ]
    },
    {
        id: 'curr_design_022',
        text: {
            en: '📜 History Rewrite: The state wants to change history textbooks to present a more "patriotic" view, downplaying certain historical injustices. The history department is in revolt.',
            th: '📜 เขียนประวัติศาสตร์ใหม่: รัฐต้องการเปลี่ยนตำราประวัติศาสตร์ให้นำเสนอมุมมองที่ "รักชาติ" มากกว่าเดิม โดยลดความสำคัญของความไม่ยุติธรรมในอดีตลง แผนกวิชาประวัติศาสตร์กำลังขัดขืน',
            zh: '📜 历史改写：州政府想修改历史教科书，以呈现更"爱国"的视角，淡化某些历史不公。历史系正在反抗。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Stand with Teachers: Refuse to adopt the new books. Use primary sources and expert-vetted materials instead.',
                    th: '🛡️ ยืนหยัดเคียงข้างครู: ปฏิเสธที่จะใช้หนังสือเล่มใหม่ ใช้แหล่งข้อมูลปฐมภูมิและสื่อที่ผู้เชี่ยวชาญรับรองแทน',
                    zh: '🛡️ 与教师站在一起：拒绝采用新书。改用原始资料和经专家审核的材料。'
                },
                consequence: {
                    en: '🔥 Political Firestorm. You become a hero to academics but the state threatens to withhold millions in funding. Legal battle starts.',
                    th: '🔥 พายุการเมือง คุณกลายเป็นฮีโร่ของนักวิชาการแต่รัฐขู่จะระงับงบประมาณนับล้าน เริ่มมีการฟ้องร้องทางกฎหมาย',
                    zh: '🔥 政治风暴。你成为了学术界的英雄，但州政府威胁要扣留数百万美元的资金。法律诉讼开始。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '📖 Dual Perspective: Use the new books for state compliance but supplement them with mandatory "Critical Inquiry" readings.',
                    th: '📖 มุมมองคู่ขนาน: ใช้หนังสือใหม่เพื่อให้ถูกระเบียบรัฐ แต่เสริมด้วยสื่อ "การคิดวิเคราะห์" ที่บังคับอ่านควบคู่กัน',
                    zh: '📖 双重视角：使用新书以符合州规定，但辅助以强制性的"批判性探索"阅读材料。'
                },
                consequence: {
                    en: '⚖️ Academic Tension. Students learn to spot bias. It’s hard to teach but results in very sharp, critical thinkers.',
                    th: '⚖️ ความตึงเครียดทางวิชาการ นักเรียนเรียนรู้ที่จะจับผิดอคติ สอนยากแต่ได้นักคิดวิเคราะห์ที่หลักแหลมมาก',
                    zh: '平衡学术紧张。学生学会了发现偏见。这很难教，但培养出了非常敏锐、具有批判性的思考者。'
                },
                stats: { competence: 45, ethics: 40, leadership: 35, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🏳️ Compliance: Follow the state guidelines. We need that funding to keep the lights on and schools running.',
                    th: '🏳️ ยอมรับระเบียบ: ทำตามแนวทางของรัฐ เราต้องการงบประมาณนั้นเพื่อให้โรงเรียนอยู่รอดและดำเนินงานต่อไปได้',
                    zh: '🏳️ 顺从：遵循州指南。我们需要那笔资金来维持运营和学校的运转。'
                },
                consequence: {
                    en: '📉 Moral Erosion. Best history teachers leave the district. Students get a sanitized, simplified view of the world.',
                    th: '📉 คุณธรรมเสื่อมถอย ครูประวัติศาสตร์เก่งๆ ลาออกไปหมด นักเรียนได้รับมุมมองโลกที่ถูกฟอกขาวและทำให้ง่ายเกินไป',
                    zh: '📉 道德侵蚀。最好的历史老师离开了学区。学生得到的是一种经过粉饰、简化的世界观。'
                },
                stats: { competence: 25, ethics: 10, leadership: 15, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Committee Delay: Form a "Stakeholder Review Board" to study the changes for 18 months. Buy time until the next election.',
                    th: '🤝 ประวิงเวลาด้วยคณะกรรมการ: ตั้ง "คณะกรรมการสอบทานผู้มีส่วนได้ส่วนเสีย" เพื่อศึกษาการเปลี่ยนแปลงเป็นเวลา 18 เดือน ซื้อเวลาจนกว่าจะถึงการเลือกตั้งครั้งหน้า',
                    zh: '🤝 委员会拖延：成立"利益相关者审查委员会"，对变化进行为期18个月的研究。拖延时间直到下一次选举。'
                },
                consequence: {
                    en: '🛑 Bureaucratic Stall. No one is happy, but you avoided a direct collision. Issue remains a ticking time bomb.',
                    th: '🛑 ความล่าช้าทางราชการ ไม่มีใครพอใจ แต่คุณเลี่ยงการปะทะตรงๆ ได้ ปัญหายังคงเป็นระเบิดเวลา',
                    zh: '🛑 官僚式拖延。没人高兴，但你避免了直接碰撞。问题仍然是一个定时炸弹。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'curr_design_023',
        text: {
            en: '📱 Smartphone Ban: The board wants to ban all smartphones during school hours to increase focus. You are worried about losing digital literacy opportunities.',
            th: '📱 แบนสมาร์ทโฟน: คณะกรรมการต้องการแบนสมาร์ทโฟนทุกเครื่องในช่วงเวลาเรียนเพื่อเพิ่มสมาธิ คุณกังวลว่านักเรียนจะเสียโอกาสในการเรียนรู้ทักษะดิจิทัล',
            zh: '📱 智能手机禁令：董事会想在教学时间禁止使用所有智能手机以提高注意力。你担心会失去培养数字素养的机会。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Total Ban: Lockers for phones. Focus on pen, paper, and face-to-face interaction.',
                    th: '🚫 แบนเด็ดขาด: เก็บโทรศัพท์ในล็อกเกอร์ โฟกัสที่ปากกา กระดาษ และการมีปฏิสัมพันธ์ต่อหน้า',
                    zh: '🚫 全面禁止：将手机锁进储物柜。专注于笔、纸和面对面的互动。'
                },
                consequence: {
                    en: '📈 Focus Up! Standardized test scores in Math and English rise. But students feel disconnected from modern tools.',
                    th: '📈 สมาธิดีขึ้น! คะแนนสอบมาตรฐานในคณิตและอังกฤษพุ่งขึ้น แต่นักเรียนรู้สึกตัดขาดจากเครื่องมือสมัยใหม่',
                    zh: '📈 注意力提升！数学和英语的标准化考试成绩上升。但学生觉得与现代工具脱节。'
                },
                stats: { competence: 35, ethics: 30, leadership: 30, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '📲 Strategic Use Only: Phones allowed in classrooms only when the lesson specifically requires them (QR codes, research).',
                    th: '📲 ใช้เฉพาะเชิงกลยุทธ์: อนุญาตให้ใช้โทรศัพท์ในห้องเรียนเฉพาะเมื่อบทเรียนต้องการเท่านั้น (เช่น สแกน QR, ทำวิจัย)',
                    zh: '📲 仅限战略性使用：仅在课特定需要时（二维码、研究）才允许在教室使用手机。'
                },
                consequence: {
                    en: '✅ Managed Success. Teachers have a hard time policing it, but students learn responsible usage "in context."',
                    th: '✅ สำเร็จแบบมีการจัดการ ครูอาจจะคุมยากหน่อย แต่นักเรียนได้เรียนรู้วิธีการใช้งานอย่างรับผิดชอบตามบริบท',
                    zh: '✅ 管理下的成功。老师在监管方面有困难，但学生学会在"情境中"负责任地使用。'
                },
                stats: { competence: 45, ethics: 35, leadership: 35, innovation: 45 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 School Devices Only: Ban personal phones but provide every student with a school-managed laptop or tablet with restricted apps.',
                    th: '💻 อุปกรณ์โรงเรียนเท่านั้น: แบนมือถือส่วนตัวแต่แจกแล็ปท็อปหรือแท็บเล็ตที่โรงเรียนคุมเองและจำกัดแอปให้ทุกคน',
                    zh: '💻 仅限学校设备：禁止个人手机，但为每个学生提供由学校管理且限制应用的笔记本电脑或平板电脑。'
                },
                consequence: {
                    en: '💰 Expensive Equity. Huge budget hit. But everyone has the same tools and distractions are minimized.',
                    th: '💰 ความเสมอภาคที่ราคาแพง งบประมาณหายไปเยอะมาก แต่ทุกคนมีเครื่องมือเท่ากันและลดสิ่งรบกวนได้ดี',
                    zh: '💰 昂贵的公平。巨大的预算支出。但每个人都有相同的工具，且干扰降到最低。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤔 Media Literacy Course: Don’t ban phones; instead, add a mandatory course on social media addiction and digital literacy.',
                    th: '🤔 หลักสูตรการสื่อสาร: ไม่ต้องแบน แต่เพิ่มวิชาบังคับเรื่องการเสพติดโซเชียลมีเดียและทักษะการใช้สื่อดิจิทัลแทน',
                    zh: '🤔 媒介素养课程：不禁止手机；相反，增加一门关于社交媒体成瘾和数字素养的强制性课程。'
                },
                consequence: {
                    en: '💡 Long-term Gain. It takes years to show results. Students still scroll on TikTok in the halls, but they can explain why it’s bad.',
                    th: '💡 ผลดีระยะยาว ต้องใช้เวลาหลายปีกว่าจะเห็นผล เด็กๆ ยังคงไถ TikTok ในทางเดิน แต่พวกเขาสามารถอธิบายได้ว่าทำไมมันถึงไม่ดี',
                    zh: '💡 长期收益。经年累月才能见成效。学生们依然在走廊刷TikTok，但他们能解释为什么这不好。'
                },
                stats: { competence: 40, ethics: 45, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'curr_design_024',
        text: {
            en: '🧬 Advanced Genetics: A prestigious science foundation wants to fund a "Personal Genomics" lab in the high school. Students will sequence their own DNA. Bioethics groups are terrified.',
            th: '🧬 พันธุศาสตร์ขั้นสูง: มูลนิธิวิทยาศาสตร์ชื่อดังต้องการให้ทุนแล็บ "พันธุศาสตร์ส่วนบุคคล" ในโรงเรียนมัธยม นักเรียนจะได้ถอดรหัส DNA ของตัวเอง กลุ่มจริยธรรมชีวภาพกลัวกันมาก',
            zh: '🧬 高级遗传学：一家著名的科学基金会想在高中资助一个"个人基因组学"实验室。学生将对自己的DNA进行测序。生物伦理组织感到非常恐慌。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Full Sequencing: Take the grant. This is the frontier of science. Give students hands-on experience with their own biology.',
                    th: '🚀 ถอดรหัสเต็มสูบ: รับทุนเลย นี่คือพรมแดนใหม่ของวิทยศาสตร์ ให้นักเรียนได้ลองทำจริงกับชีววิทยาของตัวเอง',
                    zh: '全面测序：接受资助。这是科学的前沿。让学生亲身体验自己的生物学。'
                },
                consequence: {
                    en: '🧬 Scientific Breakthrough. Students discover rare traits. However, one student discovers a genetic predisposition to a fatal disease without a counselor present. Trauma ensued.',
                    th: '🧬 ก้าวกระโดดทางวิทย์! นักเรียนพบลักษณะทางพันธุกรรมที่หายาก แต่มีคนหนึ่งบังเอิญเจอความเสี่ยงโรคร้ายโดยไม่มีที่ปรึกษาอยู่ด้วยจนเกิดบาดแผลทางใจ',
                    zh: '🧬 科学突破。学生发现了稀有性状。然而，一名学生在没有心理辅导员在场的情况下，发现了自己有某种致命疾病的遗传倾向。导致了心理创伤。'
                },
                stats: { competence: 50, ethics: -10, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🔬 Anonymized Study: Use the lab equipment but sequence plant or fruit fly DNA instead of student DNA.',
                    th: '🔬 การศึกษาแบบนิรนาม: ใช้เครื่องมือในแล็บถอดรหัส DNA ของพืชหรือแมลงหวี่แทนของนักเรียน',
                    zh: '🔬 匿名研究：使用实验室设备，但对植物或果蝇的DNA进行测序，而不是学生的DNA。'
                },
                consequence: {
                    en: '✅ Safe Learning. All the skill, none of the ethical risk. Foundation is slightly disappointed but keeps the funding.',
                    th: '✅ การเรียนรู้ที่ปลอดภัย ได้ทักษะครบแต่ไม่มีความเสี่ยงทางจริยธรรม มูลนิธิผิดหวังนิดหน่อยแต่ยังให้ทุนต่อ',
                    zh: '✅ 安全学习。学到了所有技能，没有伦理风险。基金会略感失望但保留了资助。'
                },
                stats: { competence: 45, ethics: 50, leadership: 35, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '📜 Strict Consent: Sequence student DNA but only with professional genetic counselors and dual-parental consent signatures.',
                    th: '📜 คำยินยอมที่เข้มงวด: ถอด DNA นักเรียนได้แต่ต้องมีที่ปรึกษาพันธุศาสตร์มืออาชีพและลายเซ็นยินยอมจากทั้งพ่อและแม่',
                    zh: '📜 严格合意：仅在有专业遗传咨询师和双亲签署同意书的情况下，才对学生的DNA进行测序。'
                },
                consequence: {
                    en: '🤝 Ethical Model. It becomes a national standard for bioethics in education. Very expensive and slow to implement.',
                    th: '🤝 โมเดลจริยธรรม กลายเป็นมาตรฐานระดับชาติสำหรับจริยธรรมชีวภาพในวงการศึกษา แต่แพงมากและทำได้ช้า',
                    zh: '🤝 伦理典范。这成为了教育领域生物伦理的国家标准。实施起来非常昂贵且缓慢。'
                },
                stats: { competence: 40, ethics: 55, leadership: 45, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🚫 Reject: Too dangerous. High schoolers are not emotionally mature enough for genetic revelations. Return the funds.',
                    th: '🚫 ปฏิเสธ: อันตรายเกินไป เด็กมัธยมยังไม่มีวุฒิภาวะทางอารมณ์พอสำหรับการรับรู้ความจริงทางพันธุกรรม คืนเงินทุนไป',
                    zh: '🚫 拒绝：太危险了。高中生在情感上还没成熟到可以面对基因真相。退还资金。'
                },
                consequence: {
                    en: '📉 Opportunity Lost. Science department falls behind neighboring districts. But no data leaks or psychological trauma occurred.',
                    th: '📉 เสียโอกาส แผนกวิทย์ล้าหลังเขตข้างเคียง แต่ไม่มีข้อมูลรั่วไหลหรือบาดแผลทางใจเกิดขึ้น',
                    zh: '📉 错失机会。科学系落后于邻近学区。但没有发生数据泄露或心理创伤。'
                },
                stats: { competence: 20, ethics: 45, leadership: 30, innovation: -10 }
            }
        ]
    },
    {
        id: 'curr_design_025',
        text: {
            en: '🌊 Climate Migration: A major coastal flood has brought 500 new students to your inland district within a month. Schools are overcrowded. You must design an "Emergency Curriculum" for temporary classrooms.',
            th: '🌊 การอพยพจากสภาพอากาศ: น้ำท่วมชายฝั่งครั้งใหญ่ทำให้มีนักเรียนใหม่ 500 คนย้ายมาเขตในเมืองของคุณในเดือนเดียว โรงเรียนแออัดมาก คุณต้องออกแบบ "หลักสูตรฉุกเฉิน" สำหรับห้องเรียนชั่วคราว',
            zh: '🌊 气候移民：一次重大的沿海洪水在一个月内为你们的内陆学区带来了500名新学生。学校人满为患。你必须为临时教室设计一套"应急课程"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⛺ Outdoor Academy: Use local parks and tents. Focus on environmental science and biology in the "real world."',
                    th: '⛺ โรงเรียนกลางแจ้ง: ใช้สวนสาธารณะและเต็นท์ โฟกัสวิชาวิทยาศาสตร์สิ่งแวดล้อมและชีววิทยาใน "โลกจริง"',
                    zh: '⛺ 户外学院：利用当地公园和帐篷。专注于"现实世界"中的环境科学和生物学。'
                },
                consequence: {
                    en: '✨ Magical Experience! Students love the freedom. High engagement. Logistics (rain/toilets) are difficult but manageable.',
                    th: '✨ ประสบการณ์ที่วิเศษ! นักเรียนชอบความอิสระ มีส่วนร่วมสูง การจัดการ (ฝน/ส้วม) ยากแต่พอไหว',
                    zh: '✨ 神奇的体验！学生喜欢这种自由。参与度高。后勤（下雨/厕所）虽然困难但可以应付。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 55 }
            },
            {
                id: 'B',
                text: {
                    en: '🌓 Shift System: Split the day. Local students 7AM-12PM, displaced students 1PM-6PM. Use standard curriculum.',
                    th: '🌓 ระบบกะ: แบ่งเวลาเรียน นักเรียนในพื้นที่ 7 โมงเช้า - เที่ยง, นักเรียนอพยพ บ่ายโมง - 6 โมงเย็น ใช้หลักสูตรมาตรฐาน',
                    zh: '🌓 轮班制：分段上课。本地学生早上7点到中午12点，迁入学生下午1点到6点。使用标准课程。'
                },
                consequence: {
                    en: '📉 Social Segregation. Two separate worlds. Local parents are furious about early starts. Resentment grows between groups.',
                    th: '📉 การแยกแยกทางสังคม เกิดสองโลกที่ขนานกัน ผู้ปกครองในพื้นที่โกรธที่ต้องตื่นเช้า เกิดความขัดแย้งระหว่างกลุ่ม',
                    zh: '📉 社会隔离。两个分离的世界。本地家长对提早上学感到愤怒。群体间的怨恨日益增长。'
                },
                stats: { competence: 30, ethics: 20, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Virtual Overflow: Provide laptops and keep the 500 new students on a 100% remote curriculum from a nearby community center.',
                    th: '💻 ห้องเรียนเสมือน: แจกแล็ปท็อปและให้เด็กใหม่ 500 คนเรียนออนไลน์ 100% จากศูนย์ชุมชนใกล้กลุ่ม',
                    zh: '💻 虚拟分流：提供笔记本电脑，让500名新学生在附近的社区中心接受100%的远程课程。'
                },
                consequence: {
                    en: '😐 Technical Fix. Efficient but students feel isolated and "second class." High dropout risk for the displaced kids.',
                    th: '😐 แก้ปัญหาทางเทคนิค มีประสิทธิภาพแต่นักเรียนรู้สึกโดดเดี่ยวและเป็น "ชนชั้นสอง" เด็กอพยพเสี่ยงดร็อปเรียนสูง',
                    zh: '😐 技术性修复。效率虽高，但学生感到孤立，觉得自己是"二等公民"。迁入孩子的辍学风险很高。'
                },
                stats: { competence: 35, ethics: 25, leadership: 35, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Total Integration: Pack local classrooms to 40 students each. Everyone follows the same curriculum together.',
                    th: '🤝 บูรณาการเต็มรูปแบบ: อัดนักเรียนในห้องเรียนเดิมเป็นห้องละ 40 คน ทุกคนเรียนหลักสูตรเดียวกันด้วยกัน',
                    zh: '🤝 全面整合：将本地教室塞满至每班40名学生。大家在一起学习相同的课程。'
                },
                consequence: {
                    en: '😫 Overwhelmed Teachers. Class management suffers. But it builds a community of shared struggle and empathy.',
                    th: '😫 ครูแบกรับไม่ไหว การจัดการห้องเรียนแย่ลง แต่สร้างชุมชนที่ร่วมทุกข์และเห็นอกเห็นใจกัน',
                    zh: '😫 教师不堪重负。班级管理受到影响。但这建立了一个共同奋斗和共情的社区。'
                },
                stats: { competence: 20, ethics: 45, leadership: 40, innovation: 5 }
            }
        ]
    },
    {
        id: 'curr_design_026',
        text: {
            en: '🎮 Gamification Overdose: You turned the Math curriculum into a fantasy RPG where students earn "XP" for homework. Engagement is at an all-time high, but students are now refusing to do any work that doesn\'t have a virtual reward.',
            th: '🎮 เสพติดเกมมิฟิเคชัน: คุณเปลี่ยนหลักสูตรเลขให้เป็นเกม RPG แฟนตาซีที่เด็กจะได้ "XP" จากการทำบ้านพัก ผลตอบรับดีเยี่ยมเด็กขยันสุดๆ แต่ตอนนี้พวกเขากลับปฏิเสธที่จะทำงานทุกอย่างที่ไม่มีรางวัลในเกมให้',
            zh: '🎮 游戏化过度：你将数学课程变成了一个奇幻角色扮演游戏（RPG），学生完成作业可以获得"经验值"（XP）。参与度创下历史新高，但现在学生开始拒绝做任何没有虚拟奖励的工作。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Double Down: "The old world is dead. If they need XP to learn, give them XP. Gamify everything, including the final exams."',
                    th: '🚀 ไปให้สุด: "โลกเก่ามันตายไปแล้ว ถ้าพวกเขาต้องการ XP เพื่อเรียนรู้ ก็ให้ไปเลย เปลี่ยนทุกอย่างให้เป็นเกม แม้แต่สอบปลายภาค"',
                    zh: '🚀 加倍投入："旧世界已经消亡。如果他们需要 XP 才能学习，那就给他们 XP。将一切都游戏化，包括期末考试。"'
                },
                consequence: {
                    en: '🌟 Ultra-High Engagement. Your school is famous as the "Gaming School." But when students graduate, they struggle in real-world jobs that don\'t give gold tokens for finishing tasks.',
                    th: '🌟 การมีส่วนร่วมสูงสุด โรงเรียนคุณมีชื่อเสียงในฐานะ "โรงเรียนเกม" แต่พอเด็กจบไป พวกเขาจะลำบากในชีวิตจริงที่ไม่มีเหรียญทองให้เวลาทำงานเสร็จ',
                    zh: '🌟 极高的参与度。你的学校作为"游戏学校"而闻名。但当学生毕业后，他们在现实世界中没有金币奖励的工作中感到挣扎。'
                },
                stats: { competence: 30, ethics: 30, leadership: 40, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Cold Turkey: "Remove all rewards immediately. We need to reclaim intrinsic motivation. Learning is its own reward. They will adapt or fail."',
                    th: '🛑 หักดิบ: "เอาของรางวัลออกให้หมดทันที เราต้องกู้คืนแรงจูงใจภายในกลับมา การเรียนรู้คือรางวัลในตัวมันเอง ใครปรับตัวไม่ได้ก็สอบตกไป"',
                    zh: '🛑 突然停止："立即移除所有奖励。我们需要找回内在动力。学习本身就是一种回报。他们要么适应，要么失败。"'
                },
                consequence: {
                    en: '📉 The Great Slump. Productivity craters for six months. Students feel betrayed. Eventually, a core group of serious learners emerges, but you lost the average kids.',
                    th: '📉 ภาวะซบเซาครั้งใหญ่ ประสิทธิภาพการเรียนตกระนาวอยู่ครึ่งปี เด็กๆ รู้สึกเหมือนถูกหักหลัง สุดท้ายจะมีแค่เด็กเก่งกลุ่มเล็กๆ ที่เหลืออยู่ แต่คุณเสียเด็กส่วนใหญ่ไปแล้ว',
                    zh: '📉 大滑坡。生产力在六个月内骤降。学生感到被背叛。最终，出现了一群核心的认真学习者，但你失去了普通孩子。'
                },
                stats: { competence: 50, ethics: 40, leadership: 20, innovation: -50 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The Phase-Out: "Keep the XP for drill-based tasks (like times tables), but remove it for deep projects. Explain to students the difference between training and thinking."',
                    th: '🤝 ค่อยๆ ปรับเปลี่ยน: "เก็บ XP ไว้สำหรับงานพื้นฐานที่ต้องฝึกซ้ำ (เช่น ท่องสูตรคูณ) แต่ตัดออกสำหรับงานโปรเจกต์เชิงลึก อธิบายให้เด็กเข้าใจความต่างระหว่างการฝึกฝนกับการคิดวิเคราะห์"',
                    zh: '🤝 逐步淘汰："保留基础练习任务（如乘法表）的 XP，但取消深度项目的 XP。向学生解释训练与思考之间的区别。"'
                },
                consequence: {
                    en: '✨ Nuanced Success. Students learn that some things are fun and some things are just hard. It requires a lot of "mentoring" time from teachers to maintain.',
                    th: '✨ ความสำเร็จที่ประณีต เด็กได้เรียนรู้ว่าบางอย่างก็สนุก บางอย่างก็ต้องอดทน แต่วิธีนี้ครูต้องเสียเวลา "เป็นพี่เลี้ยง" ให้เด็กๆ มากขึ้น',
                    zh: '✨ 微妙的成功。学生们了解到有些事情很有趣，而有些事情则很艰难。这需要教师投入大量的"指导"时间来维持。'
                },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Social Rewards: "Replace virtual gold with \'Social Coupons\' like leading the class discussion or choosing the next field trip. Value human connection over code."',
                    th: '📈 รางวัลทางสังคม: "เปลี่ยนจากทองจำลองเป็น \'คูปองสังคม\' เช่น ได้นำการอภิปรายในห้อง หรือเลือกสถานที่ทัศนศึกษาครั้งหน้า ให้คุณค่ากับความสัมพันธ์ของคนมากกว่าโค้ดเกม"',
                    zh: '📈 社会奖励："用\'社会优惠券\'代替虚拟金币，例如主持课堂讨论或选择下次郊游地点。重视人际关系而非代码。"'
                },
                consequence: {
                    en: '⚖️ Balanced Growth. The addiction to the screen fades. The classroom becomes a community again. A few "solo" learners miss the old digital tokens.',
                    th: '⚖️ การเติบโตที่สมดุล อาการเสพติดหน้าจอลดลง ห้องเรียนกลับเป็นชุมชนอีกครั้ง แม้เด็กสาย "โซโล่" บางคนจะโหยหาเหรียญดิจิทัลแบบเดิมก็เถอะ',
                    zh: '⚖️ 平衡增长。对屏幕的瘾消退了。课堂再次成为了一个共同体。少数"独自"学习者怀念旧的数字代币。'
                },
                stats: { competence: 50, ethics: 60, leadership: 70, innovation: 40 }
            }
        ]
    },
    {
        id: 'curr_design_027',
        text: {
            en: '🧪 The "Canceled" Scientist: A famous scientist in your Biology curriculum has been found to have held deeply racist views in their private letters. Activists want them removed. Scientists argue their discovery is too fundamental to ignore.',
            th: '🧪 นักวิทยาศาสตร์ผู้ถูกแบน: นักวิทยาศาสตร์ชื่อดังในบทเรียนชีววิทยาถูกขุดคุ้ยว่าเคยเขียนจดหมายที่มีแนวคิดเหยียดเชื้อชาติอย่างรุนแรง นักกิจกรรมต้องการให้ตัดชื่อเขาออก แต่นักวิทย์แย้งว่าสิ่งที่เขาค้นพบนั้นสำคัญเกินกว่าจะข้ามไปได้',
            zh: '🧪 被"取消"的科学家：你的生物课程中一位著名的科学家被发现在私人信件中持有严重的种族主义观点。活动家们要求将其移除。科学家们则辩称，他们的发现过于基础，不容忽视。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ "Pure" Science: "We teach the discovery, not the man. Keep the name, delete the personal history. Science should be objective."',
                    th: '🛡️ วิทยาศาสตร์บริสุทธิ์: "เราสอนสิ่งที่เขาค้นพบ ไม่ได้สอนความเป็นคน เก็บชื่อไว้ ลบประวัติส่วนตัวทิ้ง วิทยาศาสตร์ควรจะเป็นกลาง"',
                    zh: '🛡️ "纯粹"科学："我们教的是发现，而不是人。保留名字，删除个人历史。科学应该是客观的。"'
                },
                consequence: {
                    en: '📈 Content Integrity. The curriculum remains scientifically rigorous. But minority students feel alienated and the school is labeled "tone-deaf" in the news.',
                    th: '📈 เนื้อหาที่มั่นคง หลักสูตรยังคงความข้นทางวิทย์ได้ดี แต่เด็กกลุ่มชาติพันธุ์อาจรู้สึกไม่สบายใจ และโรงเรียนถูกสื่อโจมตีว่า "เมินเฉยต่อความรู้สึกสังคม"',
                    zh: '📈 内容完整性。课程在科学上保持严谨。但少数族裔学生感到被疏远，学校在新闻中被贴上"麻木不仁"的标签。'
                },
                stats: { competence: 50, ethics: 10, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔥 Full Erasure: "Total removal. Replace their work with a contemporary scientist\'s contributions or credit the \'Labs\' instead. We won\'t honor hate."',
                    th: '🔥 ลบทิ้งทั้งหมด: "ตัดออกให้หมด เอาผลงานของนักวิทย์สมัยใหม่มาใส่แทน หรือให้เครดิต \'ทีมวิจัย\' แทนชื่อตัวบุคคล เราจะไม่เชิดชูคนใจแคบ"',
                    zh: '🔥 完全抹除："全部移除。用当代科学家的贡献取代他们的工作，或者将功劳归于\'实验室\'。我们不会向仇恨致敬。"'
                },
                consequence: {
                    en: '🌟 Ethical Stand. You are a hero to the activists. However, the logic of the curriculum feels disjointed because you skipped a major historical step.',
                    th: '🌟 จุดยืนทางจริยธรรม คุณกลายเป็นฮีโร่ของเหล่านักกิจกรรม แต่ตรรกะของบทเรียนอาจจะดูขาดตอนเพราะคุณข้ามขั้นตอนสำคัญทางประวัติศาสตร์ไป',
                    zh: '🌟 道德立场。你是活动家眼中的英雄。然而，由于你跳过了一个重大的历史步骤，课程的逻辑显得支离破碎。'
                },
                stats: { competence: 30, ethics: 90, leadership: 50, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Integrated Critique: "Keep the discovery, but add a mandatory sidebar about the scientist\'s prejudice. Teach the kids that genius and cruelty can coexist."',
                    th: '🤝 วิพากษ์ในบทเรียน: "เก็บเนื้อหาไว้ แต่ต้องมีกรอบข้อความบังคับระบุเรื่องอคติของเขา สอนให้เด็กเห็นความเป็นจริงว่าความฉลาดกับความใจร้ายสามารถอยู่ในคนๆ เดียวกันได้"',
                    zh: '🤝 综合批判："保留发现，但增加一个强制性的侧栏，介绍该科学家的偏见。教导孩子们天才与残酷是可以并存的。"'
                },
                consequence: {
                    en: '✨ Masterful Education. You taught both biology AND critical history. It challenges students to think deeply about the human condition.',
                    th: '✨ ชัยชนะของการศึกษา คุณสอนทั้งชีววิทยาและประวัติศาสตร์ในเชิงวิพากษ์ มันทำให้นักเรียนได้ฝึกคิดลึกซึ้งเรื่องความเป็นมนุษย์',
                    zh: '✨ 高超的教育。你既教了生物学，又教了批判性历史。这挑战了学生对人类生存状况进行深入思考。'
                },
                stats: { competence: 60, ethics: 70, leadership: 80, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🐢 The Committee Roll: "Form a student board to decide how to handle each problematic figure in every subject. Let them lead the change."',
                    th: '🐢 ตั้งคณะกรรมการ: "ตั้งบอร์ดนักเรียนขึ้นมาช่วยกันตัดสินใจว่าจะจัดการกับบุคคลที่มีปัญหาในแต่ละวิชาอย่างไร ให้เด็กๆ เป็นผู้นำการเปลี่ยนแปลง"',
                    zh: '🐢 委员会制："成立一个学生委员会，决定如何处理每个学科中有问题的指标。让他们引领变革。"'
                },
                consequence: {
                    en: '⚖️ Democratic Process. You avoided making the hard choice. The process is slow, and some departments are stuck in "revision limbo" for months.',
                    th: '⚖️ กระบวนการประชาธิปไตย คุณเลี่ยงที่จะต้องตัดสินใจเรื่องยากๆ เองได้ แต่กระบวนการมันช้ามาก และครูบางหมวดต้องค้างเติ่งอยู่กับ "การแก้ไขบทเรียน" เป็นเดือนๆ',
                    zh: '⚖️ 民主进程。你避免了做出艰难的选择。过程很慢，一些部门数月来一直陷入"修订僵态"。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'curr_design_028',
        text: {
            en: '🤖 AI Grading: A new AI tool can grade 1,000 essays in seconds with 99% consistency with human markers. You want to implement it to free teachers for "Mentorship." The parents call it "dehumanizing education."',
            th: '🤖 การตรวจงานด้วย AI: เครื่องมือ AI ใหม่สามารถตรวจเรียงความ 1,000 ฉบับในพริบตา โดยให้คะแนนตรงกับครูถึง 99% คุณอยากใช้มันเพื่อเอาเวลาครูไป "เป็นที่ปรึกษา" ให้เด็กแทน แต่พ่อแม่บอกว่านี่คือ "การศึกษาที่ไร้หัวใจ"',
            zh: '🤖 AI 评分：一个新的 AI 工具可以在几秒钟内批改 1,000 篇作文，其一致性与人工批改相差无几（99%）。你想实施它，让教师腾出时间进行"指导"。家长们称之为"非人化的教育"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Efficiency First: "The consistency of AI is fairer than a tired teacher on a Friday night. We implement it. Teachers, go talk to your kids."',
                    th: '🚀 ประสิทธิภาพต้องมาก่อน: "AI ที่แม่นยำยุติธรรมกว่าครูที่เหนื่อยล้าในคืนวันศุกร์ เราจะใช้มัน ครูทั้งหลายไปคุยกับเด็กๆ ซะ"',
                    zh: '🚀 效率第一："AI 的一致性比周五晚上疲惫的老师更公平。我们实施它。老师们，去和你们的孩子沟通。"'
                },
                consequence: {
                    en: '🌟 Personalization Win. Teachers now have time for mental health check-ins with every kid. But a few students figure out how to "gaming" the AI with keywords to get easy A\'s.',
                    th: '🌟 ชัยชนะของการใส่ใจรายบุคคล ครูมีเวลาไปดูแลสุขภาพจิตเด็กได้ครบทุกคน แต่มีเด็กบางคนจับทาง AI ได้และแอบใส่คีย์เวิร์ดลับๆ เพื่อให้ได้เกรด A ง่ายๆ',
                    zh: '🌟 个性化的胜利。老师们现在有时间对每个孩子进行心理健康检查。但一些学生发现了如何通过关键词"忽悠" AI 来轻松拿 A。'
                },
                stats: { competence: 60, ethics: 30, leadership: 50, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Protect the Soul: "Writing is a connection between two minds. An AI doesn\'t have a soul. It cannot grade human creativity. Banned."',
                    th: '🛑 ปกป้องจิตวิญญาณ: "งานเขียนคือการเชื่อมต่อระหว่างใจสองดวง AI ไม่มีวิญญาณ มันประเมินความคิดสร้างสรรค์มนุษย์ไม่ได้ แบนทิ้งไป"',
                    zh: '🛑 保护灵魂："写作是两个灵魂之间的连接。AI 没有灵魂。它无法评判人类的创造力。禁止。"'
                },
                consequence: {
                    en: '🛡️ Human Integrity. Students feel their voices are heard. But teachers remain burnout, working 60-hour weeks, and grading quality starts to vary wildly.',
                    th: '🛡️ ศักดิ์ศรีความเป็นมนุษย์ นักเรียนรู้สึกว่ามีคนรับฟังสิ่งที่เขาสื่อจิงๆ แต่ครูก็ยังต้องทำงานหนักสัปดาห์ละ 60 ชม. จนคุณภาพการตรวจเริ่มแกว่งไปมา',
                    zh: '🛡️ 人的正直。学生觉得他们的声音被听到了。但老师们依然精疲力竭，每周工作 60 小时，评分质量开始出现巨大波动。'
                },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: -60 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The "Pilot" Hybrid: "AI does the first pass for grammar and structure. The human teacher does the final pass for nuance and voice. Everyone wins."',
                    th: '🤝 ลูกครึ่งไฮบริด: "ให้ AI ตรวจรอบแรกเรื่องไวยากรณ์และโครงสร้าง ส่วนครูตรวจรอบสุดท้ายเรื่องอารมณ์และสำนวน ได้ประโยชน์ทั้งสองทาง"',
                    zh: '🤝 "试点"混合模式："AI 负责初审语法和结构。人类教师负责终审细节和语调。双赢。"'
                },
                consequence: {
                    en: '✨ Golden Ratio. It effectively halves teacher workload while maintaining human oversight. It’s the most adopted model in the country.',
                    th: '✨ สัดส่วนทองคำ ช่วยลดงานครูได้ครึ่งหนึ่งในขณะที่ยังมีคนคุมอยู่ กลายเป็นโมเดลที่ถูกนำไปใช้มากที่สุดในประเทศ',
                    zh: '✨ 黄金比例。在保持人工监督的同时，有效地将教师的工作量减半。这是全国采用最多的模式。'
                },
                stats: { competence: 70, ethics: 60, leadership: 70, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Opt-In Testing: "Give students a choice: AI for instant 2-second feedback, or Human for 2-week deep feedback. Let them value the time."',
                    th: '📈 ให้เด็กเลือกเอง: "ให้นักเรียนเลือกได้: จะให้ AI ตรวจเพื่อรับฟีดแบ็กทันที หรือให้ครูตรวจซึ่งต้องรอ 2 อาทิตย์แต่เจาะลึก ฝึกให้เขารู้ค่าของเวลา"',
                    zh: '📈 自选测试："给学生一个选择：想要 AI 的秒回反馈，还是想要人类教师的两周深度反馈。让他们学会衡量时间。"'
                },
                consequence: {
                    en: '⚖️ Educational Lesson. Most students choose the instant AI feedback for drafts, and humans for the final. They learned how to use tools effectively.',
                    th: '⚖️ บทเรียนการใช้ชีวิต เด็กส่วนใหญ่เลือก AI ตอนร่างงาน และเลือกครูตอนส่งจริง พวกเขาได้เรียนรู้วิธีใช้เครื่องมือให้เป็นประโยชน์',
                    zh: '⚖️ 教育课程。大多数学生在初稿时选择 AI 的即时反馈，在终稿时选择人工。他们学会了如何有效地利用工具。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 60 }
            }
        ]
    },
    {
        id: 'curr_design_029',
        text: {
            en: '🧬 Evolution vs. Beliefs: Your district is in a conservative area. You are introducing a major update to the Biology curriculum on Gene Editing. Some parents demand that "Intelligent Design" be given equal time or they will pull their funding.',
            th: '🧬 วิวัฒนาการ vs ความเชื่อ: โรงเรียนคุณอยู่ในเขตอนุรักษนิยม คุณกำลังเตรียมบรรจุบทเรียนเรื่องการดัดแปลงพันธุกรรม (Gene Editing) ผู้ปกครองบางคนเรียกร้องให้สอนเรื่อง "พระเจ้าสร้างโลก" ในเวลาเท่าๆ กัน ไม่เช่นนั้นจะถอนเงินสนับสนุน',
            zh: '🧬 进化与信仰：你所在的学区位于保守地区。你正在对生物课程中的基因编辑内容进行重大更新。一些家长要求给予"智能设计论"同等的教学时间，否则他们将撤资。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Science Only: "This is a school, not a temple. We teach peer-reviewed facts. If the funding leaves, we cut the basketball program."',
                    th: '🔥 สายวิทยาศาสตร์เท่านั้น: "นี่คือโรงเรียน ไม่ใช่โบสถ์ เราสอนความจริงที่พิสูจน์แล้ว ถ้างบหายไป ก็ไปตัดงบทีมบาสเกตบอลแทนแล้วกัน"',
                    zh: '🔥 仅限科学："这里是学校，不是寺庙。我们教授经过同行评议的事实。如果资金撤走，我们就削减篮球项目。"'
                },
                consequence: {
                    en: '🛡️ Academic Purity. You become a hero of the scientific community. But the school loses significant funding, and local families start pulling their kids out for homeschooling.',
                    th: '🛡️ บริสุทธิ์ทางวิชาการ คุณเป็นฮีโร่ของวงการวิทยาศาสตร์ แต่โรงเรียนเสียทุนมหาศาล และพ่อแม่เริ่มพาลูกออกไปเรียน Homeschool กันหมด',
                    zh: '🛡️ 学术纯洁。你成为了科学界的英雄。但学校失去了大量资金，当地家庭开始让孩子退学进行居家教育。'
                },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Equal Time: "Give the parents what they want. It\'s better the kids hear both in school than only hearing the religious version at home. Keep the funding."',
                    th: '💰 แบ่งเวลาเท่ากัน: "ให้ในสิ่งที่พ่อแม่ต้องการ เด็กได้ยินทั้งสองเวอร์ชันในโรงเรียนยังดีกว่าไปฟังแต่เรื่องศาสนาอยู่ที่บ้านเฉยๆ รักษาเงินทุนไว้ก่อน"',
                    zh: '💰 同等时间："满足家长的需求。让孩子在学校听到两种说法，总比让他们在家里只听到宗教版本要好。保留资金。"'
                },
                consequence: {
                    en: '📈 Stability Win. The gym gets upgraded. No kids leave. But science teachers are demoralized and the school is mocked by national academic journals.',
                    th: '📈 ชนะเรื่องความมั่นคง โรงยิมได้รับการรีโนเวท ไม่มีเด็กลาออก แต่ครูวิทย์เสียขวัญกำลังใจและโรงเรียนถูกล้อเลียนในวารสารวิชาการระดับชาติ',
                    zh: '📈 稳定性得胜。体育馆升级了。没有孩子离开。但科学老师们士气低落，学校也受到了国家学术期刊的嘲讽。'
                },
                stats: { competence: 30, ethics: 20, leadership: 50, innovation: -40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Comparative Worlds: "Keep Biology scientific, but create a new elective called \'Philosophy of Creation\' where beliefs are discussed. Don\'t mix the two in the same book."',
                    th: '🤝 โลกที่คู่ขนาน: "เก็บวิชาชีวะให้เป็นวิทย์ร้อยเปอร์เซ็นต์ แต่เปิดวิชาเลือกใหม่ชื่อ \'ปรัชญาแห่งการกำเนิด\' เพื่อคุยกันเรื่องความเชื่อ อย่าเอาสองอย่างมาปนในเล่มเดียวกัน"',
                    zh: '🤝 比较世界："保持生物学的科学性，但开设一门名为\'创作哲学\'的新选修课，在其中讨论信仰。不要把这两者混在同一本书里。"'
                },
                consequence: {
                    en: '✨ Intellectual Sophistication. You respected both faith and facts by giving them their proper domains. Most parents accept this compromise.',
                    th: '✨ ความเหนือชั้นทางปัญญา คุณให้เกียรติทั้งความเชื่อและความจริงโดยการแบ่งพื้นที่ให้ชัดเจน พ่อแม่ส่วนใหญ่ยอมรับการประนีประนอมนี้',
                    zh: '✨ 智力上的练达。你通过赋予信仰和事实各自恰当的领域，尊重了二者。大多数家长接受这种折中方案。'
                },
                stats: { competence: 60, ethics: 70, leadership: 60, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 The Guest Speaker: "Science stays science. But invite local religious leaders for a Q&A session on \'Ethics of Gene Editing\' once a semester."',
                    th: '📈 เชิญวิทยากร: "วิทย์ก็คือวิทย์ แต่เชิญผู้นำศาสนามาจัด Q&A เรื่อง \'จริยธรรมในการตัดต่อพันธุกรรม\' เทอมละครั้ง"',
                    zh: '📈 客座演讲者："科学依然是科学。但每学期邀请当地宗教领袖参加一次关于\'基因编辑伦理\'的问答环节。"'
                },
                consequence: {
                    en: '⚖️ Community Bridge. It’s a polite gesture that satisfies the urge for dialogue without changing the core curriculum. A very diplomatic move.',
                    th: '⚖️ สะพานเชื่อมชุมชน เป็นท่าทีที่สุภาพและตอบโจทย์ความต้องการพูดคุยโดยไม่ต้องแก้เนื้อหาหลักสูตร เป็นการแก้ทางที่ดูแพงมาก',
                    zh: '⚖️ 社区桥梁。这是一种得体的姿态，在不改变核心课程的情况下满足了对话的愿望。这是一次非常巧妙的外交举动。'
                },
                stats: { competence: 50, ethics: 50, leadership: 70, innovation: 30 }
            }
        ]
    },
    {
        id: 'curr_design_030',
        text: {
            en: '🕵️ Corporate Data Mining: A tech company offers your school free laptops for all students if you use their "Adaptive Learning" software. The catch? They own all student data (habits, speed, mistakes) for their research.',
            th: '🕵️ การดักเก็บข้อมูลขององค์กร: บริษัทเทคโนโลยีเสนอแจกโน้ตบุ๊กฟรีให้เด็กทุกคน แลกกับการให้เด็กใช้ซอฟต์แวร์ "การเรียนรู้แบบปรับตัว" ของพวกเขา ข้อแม้คือเขายังสิทธิถือกรรมสิทธิ์ข้อมูลเด็กทั้งหมด (นิสัย, ความเร็ว, จุดที่ผิด) เพื่อทำวิจัย',
            zh: '🕵️ 企业数据挖掘：如果你使用某科技公司的"自适应学习"软件，该公司将为你的学校所有学生提供免费笔记本电脑。有什么代价吗？他们拥有所有学生数据（习惯、速度、错误）的所有权，用于他们的研究。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Privacy First: "Students are not test subjects. We don\'t sell their digital footprints for hardware. Buy the laptops through a bake sale instead."',
                    th: '🛡️ ความเป็นส่วนตัวต้องมาก่อน: "นักเรียนไม่ใช่หนูทดลอง เราจะไม่ขายรอยเท้าดิจิทัลของเด็กแลกคอมพิวเตอร์ ไปหางบจัดงานระดมทุนซื้อเองก็ได้"',
                    zh: '🛡️ 隐私第一："学生不是受试者。我们不会为了硬件出卖他们的数字足迹。改用义卖筹款的方式购买笔记本电脑吧。"'
                },
                consequence: {
                    en: '🌟 Ethical Shield. You are a champion of student rights. But you only raise enough for 10 laptops, leaving the rest of the school in the "digital dark ages."',
                    th: '🌟 โล่จริยธรรม คุณคือตัวแทนเรียกร้องสิทธิให้เด็กๆ แต่งบที่หาได้กลับซื้อโน้ตบุ๊กได้แค่ 10 เครื่อง ทิ้งคนอื่นให้ตกอยู่ใน "ยุคมืดดิจิทัล" ต่อไป',
                    zh: '🌟 道德之盾。你是学生权利的捍卫者。但你筹集的资金只够买 10 台笔记本电脑，导致学校其余部分处于"数字黑暗时代"。'
                },
                stats: { competence: 40, ethics: 100, leadership: 50, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 Tech at Any Cost: "Data is the new oil, and it\'s being mined anyway. Might as well get free laptops out of it. Sign the deal."',
                    th: '🚀 เทคโนโลยีต้องถึง: "ข้อมูลก็เหมือนน้ำมัน ยังไงเขาก็ขุดไปอยู่แล้ว สู้เอามาแลกโน้ตบุ๊กฟรีๆ ไม่ดีกว่าเหรอ เซ็นเลย"',
                    zh: '🚀 不惜代价发展技术："数据是新的石油，而且无论如何都会被挖掘。不如借此换取免费笔记本电脑。签署协议。"'
                },
                consequence: {
                    en: '🌟 Digital Leap. Every student now has the best tech. Test scores spike due to the AI tutors. But ten years later, your alumni find themselves "targeted" by specific ads.',
                    th: '🌟 ก้าวกระโดดสู่ดิจิทัล เด็กทุกคนมีเทคโนโลยีที่ดีที่สุด คะแนนสอบพุ่งเพราะมีติวเตอร์ AI แต่สิบปีให้หลัง ศิษย์เก่าของคุณจะถูกถล่มด้วยโฆษณาที่รู้ใจเกินเหตุ',
                    zh: '🌟 数字飞跃。现在每个学生都有最好的技术。由于 AI 导师，考试成绩激增。但十年后，你的校友发现自己成为了特定广告的"目标"。'
                },
                stats: { competence: 60, ethics: 10, leadership: 40, innovation: 100 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Anonymous Only: "Renegotiate. We take the laptops, but ALL student data must be encrypted and anonymized before it leaves the school server."',
                    th: '🤝 ข้อมูลนิรนามเท่านั้น: "ต่อรองใหม่ เราเอาเครื่อง แต่ข้อมูลเด็กทั้งหมดต้องถูกเข้ารหัสและทำเป็นนิรนามก่อนจะหลุดเข้าไปในเซิร์ฟเวอร์บริษัท"',
                    zh: '🤝 仅限匿名："重新谈判。我们要笔记本电脑，但所有学生数据在离开学校服务器之前必须经过加密和匿名处理。"'
                },
                consequence: {
                    en: '✨ Guarded Progress. The company agrees (grudgingly). You got the tech and protected the kids. You are seen as a savvy tech leader.',
                    th: '✨ ความก้าวหน้าที่รัดกุม บริษัทตกลงแบบจำใจ คุณได้เครื่องและได้ปกป้องเด็กๆ คุณถูกมองว่าเป็นผู้นำเทคโนโลยีที่เชี่ยวชาญ',
                    zh: '✨ 受到保护的进步。该公司（勉强）同意了。你获得了技术并保护了孩子们。你被视为一位精通技术的领导者。'
                },
                stats: { competence: 70, ethics: 70, leadership: 70, innovation: 70 }
            },
            {
                id: 'D',
                text: {
                    en: '🐢 The Opt-In Path: "Let the parents decide. Those who want the free laptop sign the data waiver. Those who don\'t, use textbooks."',
                    th: '🐢 ทางเลือกของผู้ปกครอง: "ให้พ่อแม่เลือกเอง ใครอยากได้คอมฟรีก็เซ็นยินยอมเรื่องข้อมูล ใครไม่เอาก็อ่านหนังสือเล่มต่อไป"',
                    zh: '🐢 可选路径："让家长决定。想要免费笔记本电脑的人签署数据豁免书。不想要的人，使用教科书。"'
                },
                consequence: {
                    en: '📉 Classroom Divide. Your class is now split into "digital haves" and "textbook have-nots." It makes teaching twice as hard for the faculty.',
                    th: '📉 ห้องเรียนที่แบ่งแยก ตอนนี้ห้องเรียนถุกแบ่งเป็นกลุ่ม "มีดิจิทัล" กับกลุ่ม "ไม่มีคอม" ทำให้ครูต้องเหนื่อยคูณสองในการเตรียมการสอน',
                    zh: '📉 课堂分歧。你的班级现在分成了"数字拥有者"和"教科书匮乏者"。这使教职员工的教学难度增加了一倍。'
                },
                stats: { competence: 30, ethics: 40, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'curr_design_031',
        text: {
            en: '📖 Open Source vs. Giants: You want to dump expensive textbooks ($200/unit) for "Open Educational Resources" (OER) written by volunteers. The books are free, but they aren\'t updated as often and lack fancy online portals.',
            th: '📖 โอเพนซอร์ส vs ยักษ์ใหญ่: คุณอยากเลิกใช้หนังสือเรียนราคาแพง (เล่มละ 7,000 บาท) แล้วเปลี่ยนไปใช้ "ทรัพยากรการศึกษาแบบเปิด" (OER) ที่อาสาสมัครร่วมกันเขียน หนังสือฟรีก็จริง แต่มันไม่ได้อัปเดตบ่อยและไม่มีระบบพอร์ทัลออนไลน์สวยๆ ให้ใช้',
            zh: '📖 开源与巨头：你想抛弃昂贵的教科书（每套 200 美元），改用由志愿者编写的"开放教育资源"（OER）。这些书是免费的，但更新频率较低，且缺乏华丽的在线门户。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Democratize Knowledge: "Information should be free. We save the district millions and students can keep the digital files forever. Switch to OER."',
                    th: '🚀 ข้อมูลที่เป็นประชาธิปไตย: "ข้อมูลควรจะฟรี เราประหยัดงบได้เป็นล้าน และเด็กสามารถเก็บไฟล์ดิจิทัลไว้ได้ตลอดไป เปลี่ยนเป็น OER ซะ"',
                    zh: '🚀 知识民主化："信息应该是免费的。我们为学区节省了数百万美元，学生可以永久保留数字文件。切换到 OER。"'
                },
                consequence: {
                    en: '🌟 Economic Relief. Families love the savings. But teachers have to spend their weekends creating their own quizzes since the OER doesn\'t provide them.',
                    th: '🌟 แบ่งเบาภาระเศรษฐกิจ ครอบครัวแฮปปี้ที่เซ็นเงินได้เยอะ แต่ครูต้องเสียวันหยุดไปกับการออกข้อสอบเอง เพราะใน OER ไม่มีคลังข้อสอบให้',
                    zh: '🌟 经济解脱。家长们很喜欢这项节省开支。但老师们不得不利用周末自己制作测验，因为 OER 不提供测验。'
                },
                stats: { competence: 40, ethics: 80, leadership: 50, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Elite Tools: "You get what you pay for. The textbook giants provide software that tracks progress and adapts to the kid. Keep the premium books."',
                    th: '🛑 เครื่องมือระดับพรีเมียม: "คุณภาพตามราคา ยักษ์ใหญ่สำนักพิมพ์มีซอฟต์แวร์ที่ติดตามความคืบหน้าและปรับตามตัวเด็กได้ ใช้หนังสือเกรดพรีเมียมต่อไปเถอะ"',
                    zh: '🛑 精英工具："一分钱一分货。教科书巨头提供的软件可以追踪进度并适应孩子。保留优质书籍。"'
                },
                consequence: {
                    en: '🛡️ Quality Assurance. Your curriculum is always up-to-date with the latest research. But poorer students struggle to afford the access codes and feel left behind.',
                    th: '🛡️ รับประกันคุณภาพ หลักสูตรของคุณทันสมัยและอิงงานวิจัยล่าสุดเสมอ แต่เด็กยากจนจะไม่มีเงินซื้อโค้ดเข้าใช้งานและรู้สึกโดนทิ้งไว้ข้างหลัง',
                    zh: '🛡️ 质量保证。你的课程始终与最新研究保持同步。但贫困学生难以负担访问码，感到被甩在了后面。'
                },
                stats: { competence: 60, ethics: 20, leadership: 40, innovation: -40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The "Write-Our-Own" Model: "Use OER as the base, but pay local professors a stipend to update it yearly for our district. We own the book now."',
                    th: '🤝 โมเดล "เขียนเองใช้เอง": "ใช้ OER เป็นตัวตั้ง แต่จ้างอาจารย์แถวนี้เป็นวิทยากรช่วยอัปเดตข้อมูลให้เขตเราทุกปี ทีนี้เราก็มีหนังสือเป็นของตัวเองแล้ว"',
                    zh: '🤝 "自主编写"模式："以 OER 为基础，但向当地教授支付津贴，每年为我们的学区进行更新。现在我们拥有了这本书。"'
                },
                consequence: {
                    en: '✨ Educational Sovereignty. It’s the perfect middle ground. You saved money and ensured quality. Teachers feel proud of their custom curriculum.',
                    th: '✨ เอกราชทางการศึกษา เป็นทางสายกลางที่สมบูรณ์แบบ คุณประหยัดเงินและยังคุมคุณภาพได้ ครูรู้สึกภูมิใจกับหลักสูตรที่เราสร้างขึ้นเอง',
                    zh: '✨ 教育主权。这是一个完美的折中方案。你在节省资金的同时确保了质量。教师们对自己的定制课程感到自豪。'
                },
                stats: { competence: 70, ethics: 70, leadership: 70, innovation: 90 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 The Hybrid Pass: "Buy the premium books for Math and Science where accuracy is critical. Use free OER for Humanities and History."',
                    th: '📈 ไฮบริดครึ่งทาง: "ซื้อหนังสือแพงๆ ให้วิชาเลขและวิทย์ที่ต้องการความแม่นยำสูง ส่วนพวกสายมนุษย์และประวัติศาสตร์ให้ใช้ OER ฟรี"',
                    zh: '📈 混合方案："在准确性至关重要的数学和科学领域购买优质书籍。在人文和历史领域使用免费的 OER。"'
                },
                consequence: {
                    en: '⚖️ Pragmatic Balance. You cut the budget by 50% without sacrificing core performance. A very sensible administrative decision.',
                    th: '⚖️ สมดุลตามจริง คุณลดงบไปได้ 50% โดยไม่เสียประสิทธิภาพในวิชาหลัก เป็นการตัดสินใจเชิงบริหารที่สมเหตุสมผลมาก',
                    zh: '⚖️ 务实的平衡。你在不牺牲核心业绩的情况下削减了 50% 的预算。这是一个非常明智的行政决策。'
                },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 40 }
            }
        ]
    },
    {
        id: 'curr_design_032',
        text: {
            en: '🧠 Mental Health Metric: You want to add "Emotional Wellness" as a mandatory part of the GPA. Students are graded on their ability to regulate stress and show empathy. Teachers fear it will lead to students "faking" emotions for grades.',
            th: '🧠 ตัวชี้วัดสุขภาพจิต: คุณต้องการเพิ่ม "ความสุขทางอารมณ์" เป็นคะแนนบังคับในเกรดเฉลี่ย เด็กจะถูกให้คะแนนจากความสามารถในการควบคุมความเครียดและการแสดงความเห็นอกเห็นใจ ครูเกรงว่าเด็กจะ "แสร้งทำ" อารมณ์เพื่อแลกเกรด',
            zh: '🧠 心理健康标准：你想将"情感健康"作为绩点（GPA）的强制性组成部分。根据学生调节压力和表现出共情的能力对其进行评分。教师们担心这会导致学生为了分数而"假装"情绪。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Measure What Matters: "We grade what we value. If we value mental health, we must measure it. Authentic or not, the practice helps."',
                    th: '🚀 วัดในสิ่งที่สำคัญ: "เราให้คะแนนในสิ่งที่เราให้ค่า ถ้าเราให้ค่าสุขภาพจิต เราก็ต้องวัดผลได้ จะจริงหรือหลอก การได้ฝึกฝนก็ยังดีกว่าไม่ทำเลย"',
                    zh: '🚀 衡量重要的东西："我们对重视的东西进行评分。如果我们重视心理健康，我们就必须衡量它。无论真假，练习总会有所帮助。"'
                },
                consequence: {
                    en: '🌟 Holistic Awareness. Students start talking about their feelings openly. However, the high-achieving "overachievers" become masters of emotional performativity.',
                    th: '🌟 ความตระหนักรู้ในองค์รวม เด็กๆ เริ่มเปิดใจคุยเรื่องความรู้สึกกันมากขึ้น อย่างไรก็ตาม พวกเด็กเรียนเก่งระดับท็อปจะกลายเป็นเทพแห่ง "การแสดงละครทางอามรณ์" เพื่อเอาคะแนน',
                    zh: '🌟 全面意识。学生们开始公开谈论自己的感受。然而，那些成绩优异的"尖子生"却成了情感表演大师。'
                },
                stats: { competence: 30, ethics: 40, leadership: 50, innovation: 80 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Keep it Private: "The school is for academics. Emotions are for parents and therapists. Don\'t turn the GPA into a psychological evaluation."',
                    th: '🛑 เรื่องส่วนตัว: "โรงเรียนมีไว้เพื่อวิชาการ เรื่องอารมณ์ให้เป็นหน้าที่พ่อแม่อละนักบำบัด อย่าเปลี่ยนเกรดเฉลี่ยให้กลายเป็นการประเมินทางจิตวิทยาเลย"',
                    zh: '🛑 保持私密："学校是搞学术的地方。情绪应该由家长和治疗师负责。不要把绩点变成心理评估。"'
                },
                consequence: {
                    en: '🛡️ Intellectual Privacy. No one is forced to share trauma for a grade. But your school remains a "stress-factory" with record levels of burnout.',
                    th: '🛡️ ความเป็นส่วนตัวทางปัญญา ไม่มีใครถูกบังคับให้แชร์อดีตที่ทำร้ายจิตใจเพื่อแลกเกรด แต่โรงเรียนคุณก็ยังเป็น "โรงงานผลิตความเครียด" ที่เด็กหมดไฟกันเป็นแถว',
                    zh: '🛡️ 知识隐私。没有人被迫为了分数而分享创伤。但你的学校依然是一个"压力工厂"，倦怠程度创历史新高。'
                },
                stats: { competence: 50, ethics: 20, leadership: 20, innovation: -50 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Ungraded Portfolio: "Include wellness goals in the curriculum, but make them Pass/Fail or reflective only. No impact on the final ranking."',
                    th: '🤝 พอร์ตแบบไม่มีเกรด: "ใส่เป้าหมายเรื่องสุขภาพไว้ในบทเรียน แต่ใช้ระบบแค่ ผ่าน/ไม่ผ่าน หรือแค่เขียนสะท้อนความคิดพอ ไม่ต้องเอาไปคำนวณอันดับในห้อง"',
                    zh: '🤝 无评分作品集："在课程中加入健康目标，但将其设为合格/不合格，或仅作为反思。不对最终排名产生影响。"'
                },
                consequence: {
                    en: '✨ Safe Space. Students value the time off, but since it "doesn\'t count," some stop taking it seriously. It remains a low-stakes habit-builder.',
                    th: '✨ พื้นที่ปลอดภัย เด็กๆ ชอบเวลาพักใจ แต่พอ "ไม่มีเกรด" บางคนก็ไม่จริงจังกับมัน แต่มันก็ยังเป็นเครื่องมือสร้างนิสัยที่ไม่มีความกดดัน',
                    zh: '✨ 安全空间。学生们很珍惜这段时间，但由于它"不计分"，有些人不再认真对待。它依然是一个低风险的习惯养成工具。'
                },
                stats: { competence: 50, ethics: 60, leadership: 60, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Teacher Wellness First: "Drop the student metric. Instead, reduce the curriculum load so teachers have time to be naturally supportive, not robotic graders."',
                    th: '📈 สุขภาพจิตครูต้องมาก่อน: "ไม่ต้องไปวัดผลเด็กหรอก แต่ไปลดภาระเนื้อหาลงเพื่อให้ครูมีเวลาใส่ใจเด็กอย่างเป็นธรรมชาติ ไม่ใช่เป็นแค่เครื่องจักรให้คะแนน"',
                    zh: '📈 教师健康第一："取消学生标准。相反，减轻课程负担，让老师有时间提供自然的支持，而不是成为评分机器。"'
                },
                consequence: {
                    en: '✨ Structural Health. The entire school atmosphere improves. It’s expensive because you had to hire more staff to cover the same hours, but quality is up.',
                    th: '✨ สุขภาพในเชิงโครงสร้าง บรรยากาศทั้งโรงเรียนดีขึ้นมาก มันอาจจะเปลืองงบเพราะต้องจ้างคนเพิ่มเพื่อให้สอนได้ครบชั่วโมงเดิม แต่คุณภาพชีวิตดีขึ้นชัดเจน',
                    zh: '✨ 结构性健康。整个学校的氛围都改善了。这很昂贵，因为你必须雇佣更多员工来覆盖相同的工作时长，但质量有所提高。'
                },
                stats: { competence: 60, ethics: 80, leadership: 90, innovation: 50 }
            }
        ]
    },
    {
        id: 'curr_design_033',
        text: {
            en: '🏠 The "No-Homework" Policy: Research suggests homework in early stages has zero impact on learning. You want to ban it district-wide. High-income parents, who use homework as a "competitive edge," are threatening a lawsuit.',
            th: '🏠 นโยบาย "ไร้การบ้าน": งานวิจัยชิ้นใหม่ชี้ว่าการบ้านในเด็กประถมไม่มีผลต่อการเรียนรู้เลย คุณต้องการสั่งแบนงานบ้านทั้งเขต พ่อแม่ฐานะดีที่มองว่าการบ้านคือ "ข้อได้เปรียบในการแข่งขัน" กำลังขู่จะฟ้องศาล',
            zh: '🏠 "无作业"政策：研究表明，早期阶段的作业对学习没有任何影响。你想在全学区范围内禁止作业。那些将作业视为"竞争优势"的高收入家长正威胁要提起诉讼。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Trust the Science: "The data is clear. Homework wastes family time. The ban stands. We see you in court."',
                    th: '🛡️ เชื่อมั่นในวิทยาศาสตร์: "ข้อมูลมันชัดเจน การบ้านทำให้เสียเวลาครอบครัว นโยบายนี้ต้องเดินหน้าต่อ แล้วไปเจอกันในศาล"',
                    zh: '🛡️ 相信科学："数据很明确。作业浪费了家庭时间。禁令维持。法庭上见。"'
                },
                consequence: {
                    en: '🌟 Hero of the Poor. Students from low-income homes, who don\'t have tutors, finally catch up. You win the court case, but those wealthy parents move to a specialized private school.',
                    th: '🌟 ฮีโร่ของผู้ยากไร้ เด็กจากครอบครัวยากจนที่ไม่มีตังค์จ้างติวเตอร์เริ่มตามเพื่อนทัน คุณชนะคดีความ แต่พ่อแม่รวยๆ เหล่านั้นย้ายลูกหนีไปเรียนเอกชนกันหมด',
                    zh: '🌟 穷人的英雄。来自低收入家庭、没有请家教的学生终于赶了上来。你赢得了官司，但那些富裕的家长搬到了专门的私立学校。'
                },
                stats: { competence: 40, ethics: 90, leadership: 70, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Yield to Parents: "If they want rigor, give them rigor. Increase the homework load. Parents are our customers, after all."',
                    th: '🛑 ยอมตามผู้ปกครอง: "ถ้าพวกเขาต้องการความเข้มข้น ก็จัดไป เพิ่มการบ้านเข้าไปอีก ยังไงพ่อแม่ก็คือลูกค้าของเรา"',
                    zh: '🛑 向家长让步："如果他们想要严谨，就给他们严谨。增加作业量。毕竟，家长是我们的客户。"'
                },
                consequence: {
                    en: '📈 Funding Retained. The wealthy families stay. But the achievement gap widens significantly, and child exhaustion levels reach an all-time high.',
                    th: '📈 รักษาเงินทุน ครอบครัวรวยๆ ยังอยู่ต่อ แต่ช่องว่างทางการศึกษาถ่างกว้างขึ้นมาก และระดับความเหนื่อยล้าของเด็กพุ่งสูงเป็นประวัติการณ์',
                    zh: '📈 保留资金。富裕家庭留了下来。但成绩差距显著扩大，儿童疲劳程度创下历史新高。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: -40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Optional "Enrichment": "No mandatory homework. But provide optional \'Challenge Packs\' for parents who want more. No grading, just for fun."',
                    th: '🤝 "ชุดฝึกเสริม" แบบสมัครใจ: "ไม่มีการบ้านบังคับ แต่มี \'แพ็กเกจท้าทาย\' ให้เลือกทำสำหรับพ่อแม่ที่อยากให้ลูกทำเพิ่ม ไม่มีการให้คะแนน แค่ทำเพื่อความสนุก"',
                    zh: '🤝 可选"强化"："没有强制性作业。但为想要更多的家长提供可选的\'挑战包\'。不评分，纯属娱乐。"'
                },
                consequence: {
                    en: '✨ Peaceful Synergy. The angry parents feel heard. The overworked kids get to rest. Most kids realize the "Challenge Packs" are actually helpful and do them anyway.',
                    th: '✨ สันติและลงตัว พ่อแม่ที่โกรธจัดรู้สึกว่ามีคนฟัง เด็กที่ทำงานหนักได้พักผ่อน เด็กส่วนใหญ่พบว่าชุดฝึกเสริมมันมีประโยชน์จริงๆ และสมัครใจทำเองในที่สุด',
                    zh: '✨ 和平的协同效应。愤怒的家长感到被重视。压力过大的孩子得到了休息。大多数孩子意识到"挑战包"其实很有用，所以还是会去做。'
                },
                stats: { competence: 60, ethics: 70, leadership: 80, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 The "Flipped Classroom": "Assign no work at home, but move the \'Lecture\' to video and the \'Practice\' to the classroom. Radical shift."',
                    th: '📈 ห้องเรียนกลับด้าน: "ไม่ต้องทำงานที่บ้าน แต่เปลี่ยนให้เด็กดู \'วิดีโอบรรยาย\' ที่บ้าน และมา \'ลงมือทำ\' ในห้องเรียนแทน การเปลี่ยนแปลงที่ถอนรากถอนโคน"',
                    zh: '📈 "翻转课堂"："家里不布置作业，但将\'讲座\'移至视频，将\'练习\'移至课堂。激进的转变。"'
                },
                consequence: {
                    en: '🚀 Innovation Win. It’s extremely effective for Science and Math. Students love it, but parents are confused because they "don\'t know how to help" anymore.',
                    th: '🚀 ชัยชนะทางนวัตกรรม ได้ผลดีมากสำหรับวิชาวิทย์และเลข เด็กๆ ชอบมาก แต่พ่อแม่จะงงๆ เพราะพวกเขาไม่รู้จะ "ช่วยลูกทำการบ้าน" ยังไงแล้ว',
                    zh: '🚀 创新胜利。这对科学和数学非常有效。学生们很喜欢，但家长们很困惑，因为他们不再"知道如何提供帮助"。'
                },
                stats: { competence: 70, ethics: 50, leadership: 60, innovation: 100 }
            }
        ]
    },
    {
        id: 'curr_design_034',
        text: {
            en: '🕶️ Metaverse Classrooms: A donor offers to build a fully digital campus in VR. Students can study from home as avatars in a 3D school. You can hire the best teachers from across the globe, but kids lose physical social interaction.',
            th: '🕶️ ห้องเรียนเมตาเวิร์ส: มีผู้อุปถัมภ์เสนอสร้างแคมปัสดิจิทัลเต็มรูปแบบใน VR เด็กๆ สามารถเรียนจากที่บ้านผ่านอวตารในโรงเรียน 3 มิติ คุณสามารถจ้างครูที่เก่งที่สุดจากทั่วโลกได้ แต่เด็กๆ จะเสียการปฏิสัมพันธ์ทางสังคมในโลกความจิงไป',
            zh: '🕶️ 元宇宙课堂：一位捐赠者提议在 VR（虚拟现实）中建立一个完全数字化的校园。学生可以作为虚拟化身在 3D 学校里坐在家里学习。你可以聘请全球最优秀的教师，但孩子们会失去现实中的社交互动。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 The Future is Now: "Physical buildings are a 19th-century constraint. Let our kids learn Physics from a NASA scientist in an avatar suit. Switch entirely."',
                    th: '🚀 อนาคตมาถึงแล้ว: "อาคารเรียนคือข้อจำกัดของศตวรรษที่ 19 ให้เด็กเราเรียนฟิสิกส์กับลุงจาก NASA ในชุดอวตารดีกว่า เปลี่ยนเป็นดิจิทัลร้อยเปอร์เซ็นต์ซะ"',
                    zh: '🚀 未来已至："实体建筑是 19 世纪的束缚。让我们的孩子向戴着虚拟头显的 NASA 科学家学习物理吧。完全切换。"'
                },
                consequence: {
                    en: '🌟 Academic Leap. Your school’s test scores become the highest in the world. But you see a massive spike in student loneliness and social anxiety reports.',
                    th: '🌟 ก้าวกระโดดทางวิชาการ คะแนนสอบโรงเรียนคุณสูงที่สุดในโลก แต่คุณจะพบว่ารายงานเรื่องความเหงาและโรควิตกกังวลในสังคมของเด็กพุ่งสูงขึ้นเป็นประวัติการณ์',
                    zh: '🌟 学术飞点。你的学校考试成绩成了全球最高。但你看到学生孤独感和社交焦虑报告大幅激增。'
                },
                stats: { competence: 80, ethics: 20, leadership: 40, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Protect the Physical: "Children need to run, smell the air, and look into a teacher\'s real eyes. Reject the VR campus. Use the money for a new garden."',
                    th: '🛑 ปกป้องโลกความจริง: "เด็กๆ ต้องได้วิ่ง ได้สูดอากาศ และสบตาครูจริงๆ ปฏิเสธแคมปัส VR ซะ แล้วเอาเงินไปทำสวนใหม่ดีกว่า"',
                    zh: '🛑 保护实体空间："孩子们需要奔跑，呼吸新鲜空气，并直视老师的眼睛。拒绝 VR 校园。把钱用在新建花园上。"'
                },
                consequence: {
                    en: '🛡️ Social Health. Your students are the most well-adjusted and happy. But they fall behind other districts in tech-literacy and global networking.',
                    th: '🛡️ สุขภาพทางสังคม เด็กของคุณปรับตัวเก่งและมีความสุขที่สุด แต่พวกเขาจะตามหลังเขตอื่นเรื่องความฉลาดทางเทคโนโลยีและการสร้างเครือข่ายระดับโลก',
                    zh: '🛡️ 社交健康。你的学生最适应环境也最快乐。但在技术素养和全球网络化方面，他们落后于其他学区。'
                },
                stats: { competence: 40, ethics: 70, leadership: 60, innovation: -60 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The 3-2 Split: "3 days on the physical campus for social/sports, and 2 days in the Metaverse for elite global lectures. Best of both worlds."',
                    th: '🤝 สูตร 3-2: "เข้าแคมปัสจริง 3 วันเพื่อสังคมและกีฬา และเข้าเมตาเวิร์ส 2 วันเพื่อฟังบรรยายจากสุดยอดครูระดับโลก ได้ประโยชน์ทั้งสองทาง"',
                    zh: '🤝 3-2 分流："3 天在实体校园进行社交/运动，2 天在元宇宙听取全球精英讲座。两全其美。"'
                },
                consequence: {
                    en: '✨ Modern Balance. It becomes the model for high-tier education. It requires complex scheduling and high maintenance costs, but the results are stellar.',
                    th: '✨ สมดุลสมัยใหม่ กลายเป็นต้นแบบการศึกษาระดับสูง มันต้องอาศัยการจัดตารางที่ซับซ้อนและค่าบำรุงรักษาสูง แต่ผลลัพธ์ที่ได้นั้นยอดเยี่ยมมาก',
                    zh: '✨ 现代平衡。它成为了高端教育的模板。虽然需要复杂的调度和高昂的维护成本，但结果是非常出色的。'
                },
                stats: { competence: 70, ethics: 50, leadership: 70, innovation: 90 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 VR Labs Only: "Keep the physical school, but use the Metaverse only for dangerous Chemistry labs or space-walk simulations. It\'s a tool, not a replacement."',
                    th: '📈 ใช้แค่ห้องแล็บ VR: "คงโรงเรียนจริงไว้ แต่ใช้เมตาเวิร์สแค่ตอนทำแล็บเคมีที่อันตรายหรือจำลองการเดินในอวกาศพอ มันคือเครื่องมือ ไม่ได้เอามาแทนที่ใคร"',
                    zh: '📈 仅限 VR 实验室："保留实体学校，但仅将元宇宙用于危险的化学实验或太空漫步模拟。它是一种工具，而不是替代品。"'
                },
                consequence: {
                    en: '⚖️ Safe Innovation. Zero parent pushback. No spikes in loneliness. You upgraded the tech stack without breaking the social fabric of the school.',
                    th: '⚖️ นวัตกรรมที่ปลอดภัย ไม่มีแรงต้านจากผู้ปกครอง ไม่มีความเหงาเพิ่มขึ้น คุณได้อัปเกรดเทคโนโลยีโดยไม่ทำลายโครงสร้างสังคมของโรงเรียน',
                    zh: '⚖️ 安全创新。家长零抵制。孤独感没有激增。你在不破坏学校社会结构的情况下升级了技术栈。'
                },
                stats: { competence: 60, ethics: 60, leadership: 60, innovation: 50 }
            }
        ]
    },
    {
        id: 'curr_design_035',
        text: {
            en: '🌿 Indigenous Wisdom: You want to integrate local Indigenous knowledge (traditional plant medicine, sustainable farming) into the Science curriculum. Some academics argue this isn\'t "rigorous science" and should stay in History.',
            th: '🌿 ภูมิปัญญาพื้นเมือง: คุณต้องการบูรณาการความรู้พื้นเมือง (ยาสมุนไพร, เกษตรยั่งยืน) เข้าไปในหลักสูตรวิทยาศาสตร์ นักวิชาการบางคนแย้งว่านี่ไม่ใช่ "วิทยาศาสตร์ที่เข้มข้น" และควรเก็บไว้ในวิชาประวัติศาสตร์ดีกว่า',
            zh: '🌿 原住民智慧：你想将当地原住民知识（传统植物药、可持续耕作）融入科学课程。一些学者认为这不属于"严谨科学"，应该留在历史课中。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Decolonize Science: "Scientific method can apply to any knowledge. Let students test traditional cures in the lab. It belongs in Science."',
                    th: '🚀 วิทยาศาสตร์ที่ไร้พรมแดน: "ระเบียบวิธีวิจัยทางวิทย์ใช้ได้กับทุกความรู้ ให้เด็กเอาสมุนไพรมาเข้าแล็บทดสอบจริงเลย มันคือวิทยาศาสตร์"',
                    zh: '🚀 去殖民化科学："科学方法可以应用于任何知识。让学生在实验室测试传统疗法。它属于科学。"'
                },
                consequence: {
                    en: '🌟 Cultural Victory. Indigenous students feel seen for the first time. Your school discovers a new organic pesticide that local farmers start using.',
                    th: '🌟 ชัยชนะทางวัฒนธรรม เด็กพื้นเมืองรู้สึกมีตัวตนเป็นครั้งแรก โรงเรียนคุณค้นพบยาฆ่าแมลงชีวภาพตัวใหม่ที่เกษตรกรแถวนั้นเริ่มเอาไปใช้จริง',
                    zh: '🌟 文化胜利。原住民学生第一次感到被重视。你的学校发现了一种当地农民开始使用的新有机农药。'
                },
                stats: { competence: 50, ethics: 90, leadership: 60, innovation: 80 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Pure Methods: "We follow the national standard. Western Science is the only path to university entrance. Keep Indigenous topics in the Heritage elective."',
                    th: '🛑 รักษามาตรฐาน: "เราทำตามมาตรฐานสากล วิทยาศาสตร์ตะวันตกคือทางเดียวที่จะเข้ามหาลัยได้ เก็บเรื่องพื้นเมืองไว้ในวิชาเลือกมรดกวัฒนธรรมพอ"',
                    zh: '🛑 纯粹方法："我们遵循国家标准。西方科学是进入大学的唯一途径。将原住民话题保留在遗产选修课中。"'
                },
                consequence: {
                    en: '🛡️ Standardization Win. Test scores remain predictable and high. But the curriculum feels "dry" and disconnected from the local environment.',
                    th: '🛡️ ชนะเรื่องมาตรฐาน คะแนนสอบนิ่งและสูงตามคาด แต่บทเรียนจะดู "จืดชืด" และไม่เชื่อมโยงกับสิ่งแวดล้อมในท้องถิ่นเลย',
                    zh: '🛡️ 标准化胜利。考试成绩保持在可预测的高水平。但课程显得"枯燥"，且与当地环境脱节。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: -40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The "Dual-Lense" Approach: "Teach both systems side-by-side. Analyze where traditional wisdom and modern chemistry overlap. It makes kids better scientists."',
                    th: '🤝 แว่นขยายสองทาง: "สอนทั้งสองระบบไปพร้อมๆ กัน วิเคราะห์จุดที่ภูมิปัญญาโบราณกับเคมีสมัยใหม่บรรจบกัน มันจะสร้างนักวิทย์ที่เก่งขึ้น"',
                    zh: '🤝 "双重透视"法："并排教授两种系统。分析传统智慧与现代化学重合的地方。这能让孩子成为更好的科学家。"'
                },
                consequence: {
                    en: '✨ Intellectual Synthesis. Your students develop a rare ability to bridge different worldviews. National awards follow for "Inclusive Curricula."',
                    th: '✨ การบูรณาการทางปัญญา เด็กของคุณจะมีความสามารถพิเศษในการเชื่อมโยงมุมมองที่ต่างกัน คุณได้รับรางวัลระดับชาติสาขา "หลักสูตรที่ครอบคลุมความหลากหลาย"',
                    zh: '✨ 知识合成。你的学生培养了一种弥合不同世界观的罕见能力。随后获得了"包容性课程"的国家级奖项。'
                },
                stats: { competence: 70, ethics: 80, leadership: 70, innovation: 70 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Guest Experts: "Keep the textbook as is, but bring in Indigenous elders as guest lecturers for the Biology ecology unit."',
                    th: '📈 เชิญปราชญ์ชาวบ้าน: "ใช้หนังสือเรียนตามเดิม แต่เชิญผู้เฒ่าบ้านมาเป็นวิทยากรช่วงที่เรียนวิชาชีวะเรื่องระบบนิเวศดีกว่า"',
                    zh: '📈 客座专家："保持教科书现状，但邀请原住民长者作为生物生态单元的客座讲师。"'
                },
                consequence: {
                    en: '⚖️ Polite Inclusion. A nice gesture that avoids bureaucratic headaches. It’s memorable for students but doesn\'t change the core way they think about science.',
                    th: '⚖️ การรวมกลุ่มที่สุภาพ เป็นท่าทีที่ดีที่เลี่ยงความยุ่งยากทางราชการได้ เด็กๆ จะจำแม่น แต่มันก็ไม่ได้เปลี่ยนวิธีคิดพื้นฐานของพวกเขาต่อวิทยาศาสตร์เท่าไหร่',
                    zh: '⚖️ 得体的包容。一个避开了官僚头痛问题的友好姿态。这对学生来说令人难忘，但并没有改变他们思考科学的核心方式。'
                },
                stats: { competence: 40, ethics: 60, leadership: 50, innovation: 20 }
            }
        ]
    },
    {
        id: 'curr_029', text: { en: '📊 Data Privacy: Ed-tech company wants to track every keystroke for "personalized learning." They offer $500k. Parents concerned.', th: '📊 ความเป็นส่วนตัวข้อมูล: บริษัทเทคการศึกษาต้องการติดตามการพิมพ์ทุกครั้งเพื่อ "การเรียนรู้ส่วนบุคคล" เสนอ 500,000 ดอลลาร์', zh: '📊 数据隐私：教育科技公司想追踪每次击键用于"个性化学习"，提供50万美元。' }, options: [
            { id: 'A', text: { en: '💰 Accept Deal', th: '💰 รับข้อเสนอ', zh: '💰 接受交易' }, consequence: { en: '🕵️ Surveillance State. Learning improves but trust erodes.', th: '🕵️ รัฐเฝ้าระวัง การเรียนรู้ดีขึ้นแต่ความไว้วางใจลดลง', zh: '🕵️ 监视状态。学习改善但信任侵蚀。' }, stats: { competence: 30, ethics: -10, leadership: 20, innovation: 40 } },
            { id: 'B', text: { en: '🛑 Reject', th: '🛑 ปฏิเสธ', zh: '🛑 拒绝' }, consequence: { en: '🛡️ Privacy Protected. Miss out on funding.', th: '🛡️ ปกป้องความเป็นส่วนตัว แต่พลาดเงินทุน', zh: '🛡️ 隐私保护。失去资金。' }, stats: { competence: 25, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '⚖️ Negotiate Limits', th: '⚖️ ต่อรองข้อจำกัด', zh: '⚖️ 谈判限制' }, consequence: { en: '✅ Balanced. Anonymized data only.', th: '✅ สมดุล ข้อมูลไม่ระบุตัวตนเท่านั้น', zh: '✅ 平衡。仅匿名数据。' }, stats: { competence: 40, ethics: 40, leadership: 40, innovation: 35 } },
            { id: 'D', text: { en: '📢 Parent Vote', th: '📢 ให้ผู้ปกครองลงคะแนน', zh: '📢 家长投票' }, consequence: { en: '🗳️ Democratic but slow. Community split.', th: '🗳️ ประชาธิปไตยแต่ช้า ชุมชนแตกแยก', zh: '🗳️ 民主但缓慢。社区分裂。' }, stats: { competence: 30, ethics: 35, leadership: 25, innovation: 15 } }
        ]
    },
    {
        id: 'curr_030', text: { en: '🎭 Arts vs Athletics: Both programs need new equipment. Budget only covers one.', th: '🎭 ศิลปะ vs กีฬา: ทั้งสองโปรแกรมต้องการอุปกรณ์ใหม่ งบพอครอบคลุมแค่อันเดียว', zh: '🎭 艺术vs体育：两个项目都需要新设备，预算只够一个。' }, options: [
            { id: 'A', text: { en: '🎨 Fund Arts', th: '🎨 ให้ศิลปะ', zh: '🎨 资助艺术' }, consequence: { en: '🖌️ Cultural Flourishing. Athletes protest.', th: '🖌️ วัฒนธรรมเฟื่องฟู นักกีฬาประท้วง', zh: '🖌️ 文化繁荣。运动员抗议。' }, stats: { competence: 30, ethics: 35, leadership: 25, innovation: 40 } },
            { id: 'B', text: { en: '⚽ Fund Athletics', th: '⚽ ให้กีฬา', zh: '⚽ 资助体育' }, consequence: { en: '🏆 Championship Season. Artists feel undervalued.', th: '🏆 ฤดูกาลแชมป์ ศิลปินรู้สึกไม่ได้รับการเห็นคุณค่า', zh: '🏆 冠军赛季。艺术家感到被低估。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '💰 Fundraise for Both', th: '💰 ระดมทุนทั้งสอง', zh: '💰 为两者筹款' }, consequence: { en: '✅ Community Effort. Exhausting but inclusive.', th: '✅ ความพยายามชุมชน เหนื่อยแต่ครอบคลุม', zh: '✅ 社区努力。累但包容。' }, stats: { competence: 40, ethics: 45, leadership: 45, innovation: 25 } },
            { id: 'D', text: { en: '🔄 Split Budget', th: '🔄 แบ่งงบ', zh: '🔄 分预算' }, consequence: { en: '😐 Half Measures. Neither program gets what they need.', th: '😐 ครึ่งๆ กลางๆ ทั้งสองไม่ได้สิ่งที่ต้องการ', zh: '😐 半吊子。两个项目都不够。' }, stats: { competence: 25, ethics: 30, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'curr_031', text: { en: '🧪 Lab Safety Crisis: Science labs need $2M safety upgrade or shut down. Insurance threatens to drop coverage.', th: '🧪 วิกฤตความปลอดภัยห้องแล็บ: ห้องปฏิบัติการวิทย์ต้องการอัปเกรดความปลอดภัย 2 ล้านดอลลาร์หรือปิด ประกันภัยขู่จะยกเลิก', zh: '🧪 实验室安全危机：科学实验室需要200万美元安全升级否则关闭，保险威胁撤保。' }, options: [
            { id: 'A', text: { en: '💸 Find Funds Immediately', th: '💸 หาเงินทุนทันที', zh: '💸 立即找资金' }, consequence: { en: '✅ Labs Saved. Had to cut other programs.', th: '✅ แล็บรอด ต้องตัดโปรแกรมอื่น', zh: '✅ 实验室保住。需削减其他项目。' }, stats: { competence: 40, ethics: 40, leadership: 45, innovation: 35 } },
            { id: 'B', text: { en: '🛑 Close Labs', th: '🛑 ปิดแล็บ', zh: '🛑 关闭实验室' }, consequence: { en: '📉 No Science Hands-On. AP science enrollment drops.', th: '📉 ไม่มีปฏิบัติการวิทย์ การลงทะเบียน AP วิทย์ลดลง', zh: '📉 没有科学实践。AP科学注册下降。' }, stats: { competence: 20, ethics: 25, leadership: 15, innovation: -10 } },
            { id: 'C', text: { en: '⚖️ Virtual Labs', th: '⚖️ แล็บเสมือน', zh: '⚖️ 虚拟实验室' }, consequence: { en: '💻 Safe but Sterile. Students miss tactile learning.', th: '💻 ปลอดภัยแต่ปราศจากชีวิต นักเรียนพลาดการเรียนรู้แบบสัมผัส', zh: '💻 安全但无菌。学生错过触觉学习。' }, stats: { competence: 30, ethics: 30, leadership: 25, innovation: 30 } },
            { id: 'D', text: { en: '🤝 Partner with University', th: '🤝 ร่วมมือกับมหาวิทยาลัย', zh: '🤝 与大学合作' }, consequence: { en: '🎓 Smart Solution. Students use university labs.', th: '🎓 ทางออกฉลาด นักเรียนใช้แล็บมหาวิทยาลัย', zh: '🎓 聪明方案。学生用大学实验室。' }, stats: { competence: 45, ethics: 35, leadership: 50, innovation: 40 } }
        ]
    },
    {
        id: 'curr_032', text: { en: '📚 Library Transformation: Reimagine library as makerspace, remove 80% of physical books for 3D printers and tools.', th: '📚 เปลี่ยนโฉมห้องสมุด: ออกแบบห้องสมุดใหม่เป็น makerspace ถอดหนังสือกายภาพ 80% เพื่อเครื่องพิมพ์ 3D และเครื่องมือ', zh: '📚 图书馆转型：重新设计为创客空间，移除80%实体书换3D打印机和工具。' }, options: [
            { id: 'A', text: { en: '🏭 Full Makerspace', th: '🏭 Makerspace เต็มรูป', zh: '🏭 全创客空间' }, consequence: { en: '🚀 Innovation Hub! But literature teachers devastated.', th: '🚀 ศูนย์นวัตกรรม! แต่ครูวรรณคดีเสียใจ', zh: '🚀 创新中心！但文学老师心碎。' }, stats: { competence: 35, ethics: 25, leadership: 30, innovation: 50 } },
            { id: 'B', text: { en: '📖 Keep Traditional Library', th: '📖 เก็บห้องสมุดแบบเดิม', zh: '📖 保持传统图书馆' }, consequence: { en: '📚 Nostalgia Wins. Students rarely visit anymore.', th: '📚 ความคิดถึงชนะ นักเรียนแทบไม่มาเยี่ยม', zh: '📚 怀旧获胜。学生很少再来。' }, stats: { competence: 25, ethics: 35, leadership: 20, innovation: -10 } },
            { id: 'C', text: { en: '⚖️ Hybrid Space', th: '⚖️ พื้นที่ผสมผสาน', zh: '⚖️ 混合空间' }, consequence: { en: '✅ Best Compromise. 50/50 books and makerspace.', th: '✅ การประนีประนมที่ดีที่สุด 50/50 หนังสือและ makerspace', zh: '✅ 最佳妥协。50/50书籍和创客空间。' }, stats: { competence: 40, ethics: 35, leadership: 40, innovation: 35 } },
            { id: 'D', text: { en: '💻 All Digital', th: '💻 ดิจิทัลทั้งหมด', zh: '💻 全数字' }, consequence: { en: '📱 E-Books Only. Equity issues for students without devices.', th: '📱 E-Book เท่านั้น ปัญหาความเสมอภาคสำหรับนักเรียนที่ไม่มีอุปกรณ์', zh: '📱 仅电子书。没设备学生的公平问题。' }, stats: { competence: 30, ethics: 20, leadership: 25, innovation: 40 } }
        ]
    },
    {
        id: 'curr_033', text: { en: '🎓 Grade Inflation Epidemic: Average GPA rose from 2.8 to 3.6 in 5 years. College admissions officers complaining grades meaningless.', th: '🎓 โรคระบาดเกรดเฟ้อ: GPA เฉลี่ยเพิ่มจาก 2.8 เป็น 3.6 ใน 5 ปี เจ้าหน้าที่รับเข้ามหาวิทยาลัยบ่นว่าเกรดไร้ความหมาย', zh: '🎓 分数膨胀流行病：平均GPA五年从2.8升至3.6，大学招生官抱怨成绩无意义。' }, options: [
            { id: 'A', text: { en: '📉 Reset Standards', th: '📉 รีเซ็ตมาตรฐาน', zh: '📉 重置标准' }, consequence: { en: '⚖️ Tough Love. GPAs drop. Parents revolt initially.', th: '⚖️ ความรักแบบเข้มงวด GPA ลดลง ผู้ปกครองก่อกบฎ', zh: '⚖️ 严厉之爱。GPA下降，家长最初反抗。' }, stats: { competence: 40, ethics: 45, leadership: 35, innovation: 20 } },
            { id: 'B', text: { en: '🤷 Accept It', th: '🤷 ยอมรับมัน', zh: '🤷 接受它' }, consequence: { en: '📈 Happy Students, Worthless Transcripts.', th: '📈 นักเรียนมีความสุข ใบแสดงผลไร้ค่า', zh: '📈 学生开心，成绩单无价值。' }, stats: { competence: 20, ethics: 15, leadership: 15, innovation: 0 } },
            { id: 'C', text: { en: '⚖️ Narrative Transcripts', th: '⚖️ ใบแสดงผลแบบเล่าเรื่อง', zh: '⚖️ 叙事成绩单' }, consequence: { en: '✅ Innovation. Replace grades with detailed skill portfolios.', th: '✅ นวัตกรรม แทนที่เกรดด้วยแฟ้มทักษะโดยละเอียด', zh: '✅ 创新。用详细技能档案取代成绩。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '📊 Add Class Rank', th: '📊 เพิ่มอันดับชั้น', zh: '📊 添加班级排名' }, consequence: { en: '⚔️ Competition Intensifies. Student stress skyrockets.', th: '⚔️ การแข่งขันรุนแรงขึ้น ความเครียดพุ่ง', zh: '⚔️ 竞争加剧。学生压力飙升。' }, stats: { competence: 30, ethics: 20, leadership: 25, innovation: 10 } }
        ]
    },
    {
        id: 'curr_034', text: { en: '🍎 Lunch Debt Shaming: Cafeteria stamps kids\' hands if they have lunch debt. Humiliating but effective collection method.', th: '🍎 การอับอายเพราะหนี้อาหารกลางวัน: โรงอาหารประทับตรามือเด็กถ้ามีหนี้อาหารกลางวัน น่าอับอายแต่เก็บเงินได้ผล', zh: '🍎 午餐债务羞辱：食堂在欠午餐费孩子手上盖章，羞辱但有效的催收方法。' }, options: [
            { id: 'A', text: { en: '🛑 Ban Shaming', th: '🛑 ห้ามทำให้อับอาย', zh: '🛑 禁止羞辱' }, consequence: { en: '❤️ Compassion Wins. Debt rises but dignity preserved.', th: '❤️ ความเห็นอกเห็นใจชนะ หนี้เพิ่มแต่ศักดิ์ศรีรักษาไว้', zh: '❤️ 同情获胜。债务增但尊严保留。' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '💰 Continue Stamping', th: '💰 ประทับตรา<strong>ต่', zh: '💰 继续盖章' }, consequence: { en: '😡 Public Outrage. Media exposes practice. You look cruel.', th: '😡 สาธารณะโกรธ สื่อเปิดเผยการปฏิบัติ คุณดูโหดร้าย', zh: '😡 公众愤怒。媒体曝光，你显得残酷。' }, stats: { competence: 25, ethics: -10, leadership: 15, innovation: 0 } },
            { id: 'C', text: { en: '🎁 Free Lunch for All', th: '🎁 อาหารกลางวันฟรีสำหรับทุกคน', zh: '🎁 全员免费午餐' }, consequence: { en: '✅ Universal Dignity. Costs more but eliminates shame.', th: '✅ ศักดิ์ศรีสากล แพงกว่าแต่กำจัดความอับอาย', zh: '✅ 普遍尊严。成本更高但消除羞耻。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'D', text: { en: '📧 Parent Notification Only', th: '📧 แจ้งผู้ปกครองเท่านั้น', zh: '📧 仅通知家长' }, consequence: { en: '📱 Private System. Respectful but less effective.', th: '📱 ระบบส่วนตัว เคารพแต่ได้ผลน้อยกว่า', zh: '📱 私密系统。尊重但效果较差。' }, stats: { competence: 35, ethics: 40, leadership: 30, innovation: 15 } }
        ]
    },
    {
        id: 'curr_035', text: { en: '🚌 Bus Route Equity: Wealthy neighborhood gets direct routes. Poor neighborhood has 90-minute commutes with 3 transfers.', th: '🚌 ความเป็นธรรมเส้นทางรถบัส: ย่านรวยได้เส้นทางตรง ย่านจนเดินทาง 90 นาทีต้องเปลี่ยน 3 ครั้ง', zh: '🚌 校车路线公平：富裕社区直达，贫困社区90分钟需换乘3次。' }, options: [
            { id: 'A', text: { en: '⚖️ Equalize Routes', th: '⚖️ แก้ไขเส้นทางให้เท่าเทียม', zh: '⚖️ 平衡路线' }, consequence: { en: '✅ Justice Served. Wealthy parents complain but minority students thrive.', th: '✅ ความยุติธรรม ผู้ปกครองรวยบ่นแต่นักเรียนชนกลุ่มน้อยเจริญ', zh: '✅ 正义伸张。富裕家长抱怨但少数族裔学生茁壮。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 25 } },
            { id: 'B', text: { en: '🤷 Status Quo', th: '🤷 รักษาสถานะเดิม', zh: '🤷 维持现状' }, consequence: { en: '😡 Inequality Festers. Civil rights complaint filed.', th: '😡 ความไม่เท่าเทียมเน่าเปื่อย ถูกร้องเรียนสิทธิพลเมือง', zh: '😡 不平等恶化。民权投诉。' }, stats: { competence: 25, ethics: 10, leadership: 15, innovation: 0 } },
            { id: 'C', text: { en: '💻 Remote Learning Option', th: '💻 ทางเลือกเรียนทางไกล', zh: '💻 远程学习选项' }, consequence: { en: '📱 Tech Solution. Solves commute but creates two-tier system.', th: '📱 ทางออกเทค แก้การเดินทางแต่สร้างระบบสองชั้น', zh: '📱 技术方案。解决通勤但创建双层系统。' }, stats: { competence: 30, ethics: 25, leadership: 25, innovation: 35 } },
            { id: 'D', text: { en: '🏫 Neighborhood Schools', th: '🏫 โรงเรียนในละแวก', zh: '🏫 社区学校' }, consequence: { en: '🏘️ De Facto Segregation. Convenient but perpetuates housing inequality.', th: '🏘️ การแบ่งแยกโดยพฤต วะ สะดวกแต่ส่งเสริมความไม่เท่าเทียมที่อยู่อาศัย', zh: '🏘️ 事实上的隔离。方便但延续住房不平等。' }, stats: { competence: 30, ethics: 15, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'curr_036', text: { en: '🎯 Tracking Debate: Should students be grouped by ability or mixed ability classrooms? Research shows both have pros/cons.', th: '🎯 การแบ่งกลุ่มตามความสามารถ: ควรจัดกลุ่มนักเรียนตามความสามารถหรือผสมกัน? งานวิจัยแสดงทั้งสองมีข้อดีข้อเสีย', zh: '🎯 分流辩论：学生应按能力分组还是混合能力教室？研究显示两者都有利弊。' }, options: [
            { id: 'A', text: { en: '📊 Ability Tracking', th: '📊 แบ่งตามความสามารถ', zh: '📊 能力分流' }, consequence: { en: '🚀 Top Students Excel. Lower tracks stigmatized.', th: '🚀 นักเรียนเก่งโดดเด่น กลุ่มล่างถูกตีตรา', zh: '🚀 尖子生出色。低轨被污名化。' }, stats: { competence: 35, ethics: 20, leadership: 25, innovation: 25 } },
            { id: 'B', text: { en: '🤝 Mixed Ability', th: '🤝 ความสามารถผสม', zh: '🤝 混合能力' }, consequence: { en: '✅ Peer Learning. Challenging to teach but more equitable.', th: '✅ เรียนรู้จากเพื่อน ท้าทายที่จะสอนแต่เป็นธรรมกว่า', zh: '✅ 同伴学习。教学具挑战性但更公平。' }, stats: { competence: 40, ethics: 45, leadership: 35, innovation: 30 } },
            { id: 'C', text: { en: '🔄 Flexible Grouping', th: '🔄 การจัดกลุ่มยืดหยุ่น', zh: '🔄 灵活分组' }, consequence: { en: '💡 Best Practice. Students move between levels based on mastery.', th: '💡 แนวปฏิบัติที่ดีที่สุด นักเรียนเคลื่อนย้ายระหว่างระดับตามความเข้าใจ', zh: '💡 最佳实践。学生根据掌握程度在级别间移动。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '🎓 Honors/AP Only', th: '🎓 เกียรตินิยม/AP เท่านั้น', zh: '🎓 仅荣誉/AP' }, consequence: { en: '🏆 Elite Focus. Most students feel abandoned.', th: '🏆 เน้นยอดนิยม นักเรียนส่วนใหญ่รู้สึกถูกทอดทิ้ง', zh: '🏆 精英焦点。大多数学生感到被遗弃。' }, stats: { competence: 30, ethics: 15, leadership: 20, innovation: 20 } }
        ]
    },
    {
        id: 'curr_037', text: { en: '📱 Phone Addiction Crisis: 70% of students admit checking phones during class. Academic performance declining.', th: '📱 วิกฤตติดโทรศัพท์: 70% ของนักเรียนยอมรับว่าเช็คโทรศัพท์ระหว่างเรียน ผลการเรียนลดลง', zh: '📱 手机成瘾危机：70%学生承认上课时看手机，学业表现下降。' }, options: [
            { id: 'A', text: { en: '🔒 Total Ban + Lockers', th: '🔒 แบนสิ้นเชิง + ล็อกเกอร์', zh: '🔒 全面禁止+储物柜' }, consequence: { en: '✅ Focus Returns. Students initially resist then adjust.', th: '✅ สมาธิกลับมา นักเรียนต่อต้านแรกแล้วปรับตัว', zh: '✅ 注意力回归。学生最初抵制后适应。' }, stats: { competence: 40, ethics: 35, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '📚 Allow Phones', th: '📚 อนุญาตโทรศัพท์', zh: '📚 允许手机' }, consequence: { en: '📉 Distraction Wins. Test scores continue to drop.', th: '📉 การเสียสมาธิชนะ คะแนนสอบลดลงต่อ', zh: '📉 分心获胜。考试成绩继续下降。' }, stats: { competence: 20, ethics: 20, leadership: 15, innovation: 15 } },
            { id: 'C', text: { en: '⏰ Scheduled Phone Breaks', th: '⏰ พักโทรศัพท์ตามกำหนดการ', zh: '⏰ 定时手机休息' }, consequence: { en: '⚖️ Compromise. 5 min phone break every hour.', th: '⚖️ ประนีประนอม พัก 5 นาทีทุกชั่วโมง', zh: '⚖️ 折衷。每小时5分钟手机休息。' }, stats: { competence: 35, ethics: 30, leadership: 30, innovation: 25 } },
            { id: 'D', text: { en: '📱 Integrate Phones into Lessons', th: '📱 บูรณาการโทรศัพท์เข้าบทเรียน', zh: '📱 将手机融入课程' }, consequence: { en: '💡 BYOD. Mixed results. Equity issues for students without smartphones.', th: '💡 BYOD ผลลัพธ์ผสม ปัญหาความเสมอภาคกับเด็กไม่มีสมาร์ทโฟน', zh: '💡 自带设备。结果参差，没智能手机学生的公平问题。' }, stats: { competence: 30, ethics: 25, leadership: 25, innovation: 40 } }
        ]
    },
    {
        id: 'curr_038', text: { en: '🧬 Evolution vs Creationism: State allows teaching "alternative theories." Science department refuses.', th: '🧬 วิวัฒนาการ vs ลัทธิสร้างสรรค์: รัฐอนุญาตสอน "ทฤษฎีทางเลือก" ภาควิชาวิทยาศาสตร์ปฏิเสธ', zh: '🧬 进化论vs创世论：州允许教授"替代理论"，科学系拒绝。' }, options: [
            { id: 'A', text: { en: '🔬 Science Only', th: '🔬 วิทยาศาสตร์เท่านั้น', zh: '🔬 仅科学' }, consequence: { en: '⚖️ Academic Integrity. Community protests. Political backlash.', th: '⚖️ ความซื่อสัตย์ทางวิชาการ ชุมชนประท้วง ปฏิกิริยาทางการเมือง', zh: '⚖️ 学术诚信。社区抗议，政治反弹。' }, stats: { competence: 40, ethics: 50, leadership: 35, innovation: 20 } },
            { id: 'B', text: { en: '📖 Teach Both', th: '📖 สอนทั้งสอง', zh: '📖 两者都教' }, consequence: { en: '📉 False Equivalence. Scientists condemn curriculum.', th: '📉 ความเท่าเทียมเท็จ นักวิทยาศาสตร์ประณามหลักสูตร', zh: '📉 虚假对等。科学家谴责课程。' }, stats: { competence: 25, ethics: 15, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🏫 Evolution in Science, Religion in Social Studies', th: '🏫 วิวัฒนาการในวิทย์ ศาสนาในสังคม', zh: '🏫 科学课教进化论，社会课教宗教' }, consequence: { en: '✅ Diplomatic Solution. Both sides grudgingly accept.', th: '✅ ทางออกทางการทูต ทั้งสองฝ่ายยอมรับอย่างไม่เต็มใจ', zh: '✅ 外交解决方案。双方勉强接受。' }, stats: { competence: 40, ethics: 35, leadership: 45, innovation: 25 } },
            { id: 'D', text: { en: '🤐 Avoid Topic Entirely', th: '🤐 หลีกเลี่ยงหัวข้อทั้งหมด', zh: '🤐 完全回避话题' }, consequence: { en: '🙈 Intellectual Cowardice. Students graduate ignorant of biology.', th: '🙈 ความขี้ขลาดทางสติปัญญา นักเรียนจบโดยไม่รู้ชีววิทยา', zh: '🙈 智力懦弱。学生毕业时对生物学一无所知。' }, stats: { competence: 15, ethics: 10, leadership: 10, innovation: -10 } }
        ]
    },
    {
        id: 'curr_039', text: { en: '🧑‍🏫 Teacher Burnout: 40% of staff plan to quit. Workload crushing. You can reduce class sizes OR increase pay 20%.', th: '🧑‍🏫 ครูหมดไฟ: 40% ของบุคลากรวางแผนลาออก ภาระงานท่วมท้น คุณสามารถลดขนาดชั้นเรียนหรือเพิ่มเงินเดือน 20%', zh: '🧑‍🏫 教师倦怠：40%员工计划辞职，工作量压垮人。你可以减少班级规模或加薪20%。' }, options: [
            { id: 'A', text: { en: '👥 Smaller Classes', th: '👥 ชั้นเรียนเล็กลง', zh: '👥 小班' }, consequence: { en: '✅ Better Teaching. Fewer teachers can afford to stay.', th: '✅ การสอนดีขึ้น ครูน้อยลงสามารถอยู่ได้', zh: '✅ 教学更好。但能留下的老师更少。' }, stats: { competence: 40, ethics: 40, leadership: 35, innovation: 20 } },
            { id: 'B', text: { en: '💰 Raise Pay', th: '💰 เพิ่มเงินเดือน', zh: '💰 加薪' }, consequence: { en: '💵 Morale Boost. Retention improves. Class sizes still large.', th: '💵 ขวัญกำลังใจดีขึ้น อัตราการอยู่ดีขึ้น ชั้นเรียนยังใหญ่', zh: '💵 士气提升。留任率改善但班级仍大。' }, stats: { competence: 35, ethics: 45, leadership: 40, innovation: 15 } },
            { id: 'C', text: { en: '📚 Reduce Paperwork', th: '📚 ลดเอกสารราชการ', zh: '📚 减少文书工作' }, consequence: { en: '⏰ Time Gift. Free up 10 hours/week. Actually addresses root cause.', th: '⏰ ของขวัญเวลา ว่าง 10 ชม./สัปดาห์ จัดการสาเหตุรากเหง้า', zh: '⏰ 时间礼物。每周节省10小时，真正解决根本原因。' }, stats: { competence: 45, ethics: 45, leadership: 50, innovation: 35 } },
            { id: 'D', text: { en: '🤷 Neither', th: '🤷 ไม่เลือกทั้งสอง', zh: '🤷 都不' }, consequence: { en: '📉 Mass Exodus. You lose your best teachers.', th: '📉 ล้นทะลักหมู่ คุณสูญเสียครูที่ดีที่สุด', zh: '📉 大规模流失。失去最好的老师。' }, stats: { competence: 15, ethics: 10, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'curr_040', text: { en: '🎬 Media Literacy: Fake news spreading in student social media. Need media literacy curriculum but whos qualified to teach "truth"?', th: '🎬 รู้เท่าทันสื่อ: ข่าวปลอมแพร่กระจายในโซเชียลมีเดียนักเรียน ต้องการหลักสูตรรู้เท่าทันสื่อแต่ใครมีคุณสมบัติสอน "ความจริง"?', zh: '🎬 媒体素养：假新闻在学生社交媒体传播，需要媒体素养课程但谁有资格教"真相"？' }, options: [
            { id: 'A', text: { en: '📰 Journalism Teachers', th: '📰 ครูสื่อสารมวลชน', zh: '📰 新闻教师' }, consequence: { en: '✅ Professional Perspective. Effective but some cry "bias."', th: '✅ มุมมองมืออาชีพ ได้ผลแต่บางคนร้องว่า "ลำเอียง"', zh: '✅ 专业视角。有效但有人哭喊"偏见"。' }, stats: { competence: 40, ethics: 40, leadership: 35, innovation: 30 } },
            { id: 'B', text: { en: '🧠 Critical Thinking in All Classes', th: '🧠 การคิดเชิงวิพากษ์ทุกวิชา', zh: '🧠 所有课程批判性思维' }, consequence: { en: '💡 Integrated Approach. Inconsistent quality across teachers.', th: '💡 แนวทางบูรณาการ คุณภาพไม่สม่ำเสมอระหว่างครู', zh: '💡 综合方法。教师质量参差不齐。' }, stats: { competence: 35, ethics: 35, leadership: 30, innovation: 35 } },
            { id: 'C', text: { en: '🤝 Invite Journalists', th: '🤝 เชิญนักข่าว', zh: '🤝 邀请记者' }, consequence: { en: '🎙️ Real-World Experts. Engaging but scheduling nightmare.', th: '🎙️ ผู้เชี่ยวชาญโลกแท้ น่าสนใจแต่จัดตารางยาก', zh: '🎙️ 现实世界专家。吸引人但日程安排噩梦。' }, stats: { competence: 40, ethics: 35, leadership: 35, innovation: 40 } },
            { id: 'D', text: { en: '📵 Ban Social Media', th: '📵 แบนโซเชียลมีเดีย', zh: '📵 禁止社交媒体' }, consequence: { en: '🚫 Avoidance. Problem continues off-campus.', th: '🚫 การหลีกเลี่ยง ปัญหาดำเนินต่อนอกวิทยาเขต', zh: '🚫 回避。问题在校外继续。' }, stats: { competence: 20, ethics: 20, leadership: 15, innovation: 0 } }
        ]
    },
    {
        id: 'curr_041', text: { en: '🏳️‍🌈 LGBTQ+ Curriculum: New law requires inclusive history curriculum. Conservative parents threaten lawsuits.', th: '🏳️‍🌈 หลักสูตร LGBTQ+: กฎหมายใหม่กำหนดหลักสูตรประวัติศาสตร์ที่ครอบคลุม ผู้ปกครองอนุรักษ์นิยมขู่ฟ้อง', zh: '🏳️‍🌈 LGBTQ+课程：新法律要求包容性历史课程，保守派家长威胁诉讼。' }, options: [
            { id: 'A', text: { en: '🏳️‍🌈 Full Compliance', th: '🏳️‍🌈 ปฏิบัติตามเต็มที่', zh: '🏳️‍🌈 完全遵守' }, consequence: { en: '✅ Legal & Ethical. Protests occur but you follow the law.', th: '✅ ถูกกฎหมายและจริยธรรม มีประท้วงแต่คุณทำตามกฎหมาย', zh: '✅ 合法且道德。发生抗议但你遵守法律。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 30 } },
            { id: 'B', text: { en: '🚫 Ignore Law', th: '🚫 เพิกเฉยกฎหมาย', zh: '🚫 无视法律' }, consequence: { en: '⚖️ State Sanctions. You lose funding and credibility.', th: '⚖️ รัฐลงโทษ คุณเสียทุนและความน่าเชื่อถือ', zh: '⚖️ 州制裁。失去资金和信誉。' }, stats: { competence: 20, ethics: 10, leadership: 15, innovation: 0 } },
            { id: 'C', text: { en: '📚 Age-Appropriate Implementation', th: '📚 การนำไปใช้ตามวัย', zh: '📚 适龄实施' }, consequence: { en: '⚖️ Measured Approach. Elementary gets basic inclusion, HS gets full history.', th: '⚖️ แนวทางที่วัดผลได้ ประถมได้พื้นฐาน มัธยมปลายได้ประวัติศาสตร์เต็ม', zh: '⚖️ 衡量方法。小学基本包容，高中完整历史。' }, stats: { competence: 45, ethics: 45, leadership: 40, innovation: 25 } },
            { id: 'D', text: { en: '🔄 Opt-Out Option', th: '🔄 ทางเลือกไม่เรียน', zh: '🔄 退出选项' }, consequence: { en: '😐 Safe Politically but creates segregated learning.', th: '😐 ปลอดภัยทางการเมืองแต่สร้างการเรียนรู้แบบแบ่งแยก', zh: '😐 政治上安全但造成隔离学习。' }, stats: { competence: 30, ethics: 25, leadership: 25, innovation: 15 } }
        ]
    },
    {
        id: 'curr_042', text: { en: '💻 Coding Requirement: Make coding mandatory for graduation. CS teachers scarce. Current teachers resistant to learning.', th: '💻 ข้อกำหนดการเขียนโค้ด: ทำให้การเขียนโค้ดเป็นข้อบังคับเพื่อจบการศึกษา ครู CS หายาก ครูปัจจุบันไม่ยอมเรียนรู้', zh: '💻 编程要求：编程成为毕业必修。计算机教师稀缺，现有教师抗拒学习。' }, options: [
            { id: 'A', text: { en: '🚀 Mandate + Train Teachers', th: '🚀 บังคับ + ฝึกครู', zh: '🚀 强制+培训教师' }, consequence: { en: '✅ Future Ready. Expensive and teachers resist.', th: '✅ พร้อมอนาคต แพงและครูต่อต้าน', zh: '✅ 为未来做好准备。昂贵且教师抵制。' }, stats: { competence: 40, ethics: 35, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '💰 Hire CS Specialists', th: '💰 จ้างผู้เชี่ยวชาญ CS', zh: '💰 聘请计算机专家' }, consequence: { en: '🎓 Quality Instruction. Budget hit. Creates teacher hierarchy.', th: '🎓 การสอนคุณภาพ งบตี สร้างลำดับขั้นครู', zh: '🎓 高质量教学。预算受损，造成教师等级制度。' }, stats: { competence: 45, ethics: 30, leadership: 35, innovation: 45 } },
            { id: 'C', text: { en: '📱 Online Courses', th: '📱 คอร์สออนไลน์', zh: '📱 在线课程' }, consequence: { en: '💻 Scalable but impersonal. Completion rates low.', th: '💻 ขยายได้แต่ไม่มีตัวตน อัตราผ่านต่ำ', zh: '💻 可扩展但非个人化。完成率低。' }, stats: { competence: 30, ethics: 25, leadership: 25, innovation: 35 } },
            { id: 'D', text: { en: '🤷 Make it Elective', th: '🤷 ทำให้เป็นวิชาเลือก', zh: '🤷 设为选修' }, consequence: { en: '📉 Access Gap. Only motivated students learn. Digital divide persists.', th: '📉 ช่องว่างการเข้าถึง เฉพาะนักเรียนที่มีแรงจูงใจเรียนรู้', zh: '📉 接入差距。只有积极的学生学习，数字鸿沟持续。' }, stats: { competence: 25, ethics: 20, leadership: 20, innovation: 20 } }
        ]
    },
    {
        id: 'curr_043', text: { en: '🌍 Mandarin Requirement: Local Chinese community wants Mandarin as 2nd language requirement. Spanish teachers fear job loss.', th: '🌍 ข้อกำหนดภาษาจีนกลาง: ชุมชนจีนในท้องถิ่นต้องการภาษาจีนกลางเป็นข้อกำหนดภาษาที่ 2 ครูสเปนกลัวตกงาน', zh: '🌍 普通话要求：当地华人社区希望将普通话作为第二语言要求，西班牙语老师担心失业。' }, options: [
            { id: 'A', text: { en: '🇨🇳 Add Mandarin', th: '🇨🇳 เพิ่มจีนกลาง', zh: '🇨🇳 增加普通话' }, consequence: { en: '🌏 Global Preparation. Spanish enrollment drops. Union furious.', th: '🌏 เตรียมสู่โลก การลงทะเบียนภาษาสเปนลดลง สหภาพโกรธ', zh: '🌏 全球准备。西班牙语注册下降，工会愤怒。' }, stats: { competence: 40, ethics: 30, leadership: 35, innovation: 40 } },
            { id: 'B', text: { en: '🇪🇸 Keep Spanish Only', th: '🇪🇸 เก็บสเปนเท่านั้น', zh: '🇪🇸 仅保留西班牙语' }, consequence: { en: '🤷 Status Quo. Chinese community feels ignored.', th: '🤷 สถานะเดิม ชุมชนจีนรู้สึกถูกเมิน', zh: '🤷 现状。华人社区感到被忽视。' }, stats: { competence: 30, ethics: 25, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🌐 Student Choice', th: '🌐 ทางเลือกนักเรียน', zh: '🌐 学生选择' }, consequence: { en: '✅ Democratic. Offer both. Expensive but fair.', th: '✅ ประชาธิปไตย เสนอทั้งสอง แพงแต่ยุติธรรม', zh: '✅ 民主。两者都提供，昂贵但公平。' }, stats: { competence: 45, ethics: 45, leadership: 45, innovation: 30 } },
            { id: 'D', text: { en: '💻 Duolingo', th: '💻 Duolingo', zh: '💻 多邻国' }, consequence: { en: '📱 Tech Band-Aid. Free but lacks cultural immersion.', th: '📱 พลาสเตอร์เทค ฟรีแต่ขาดการจุ่มตัววัฒนธรรม', zh: '📱 技术创可贴。免费但缺乏文化沉浸。' }, stats: { competence: 25, ethics: 25, leadership: 20, innovation: 30 } }
        ]
    },
    {
        id: 'curr_design_036',
        text: {
            en: '🤖 AI Personal Tutor: A startup offers free AI tutoring for every student in your district. The AI adapts to each child. But it also tracks every keystroke for "learning optimization."',
            th: '🤖 ติวเตอร์ AI ส่วนตัว: บริษัทสตาร์ทอัพเสนอติวเตอร์ AI ฟรีให้นักเรียนทุกคนในเขตของคุณ AI ปรับตัวตามเด็กแต่ละคน แต่มันก็บันทึกทุกการกดปุ่มเพื่อ "ปรับปรุงการเรียนรู้"',
            zh: '🤖 AI 个人导师：一家初创公司为你学区的每个学生提供免费的 AI 辅导。AI 会适应每个孩子。但它也会跟踪每一次击键以进行"学习优化"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✅ Full Adoption: Accept the offer. Modern problems need modern solutions.',
                    th: '✅ ใช้เต็มรูปแบบ: ยอมรับข้อเสนอ ปัญหายุคใหม่ต้องใช้วิธีแก้ยุคใหม่',
                    zh: '✅ 全面采用：接受提议。现代问题需要现代解决方案。'
                },
                consequence: {
                    en: '📊 Data Goldmine: Test scores soar. But 2 years later, the company sells to a Chinese firm and all student data goes overseas.',
                    th: '📊 เหมืองทองข้อมูล: คะแนนพุ่งสูง แต่ 2 ปีต่อมา บริษัทขายให้บริษัทจีน ข้อมูลนักเรียนทั้งหมดไปอยู่ต่างประเทศ',
                    zh: '📊 数据金矿：考试成绩飙升。但 2 年后，该公司卖给了一家中国公司，所有学生数据都流向了海外。'
                },
                stats: { competence: 40, ethics: -20, leadership: 20, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🔒 Privacy First: Reject unless they agree to local data storage and annual audits.',
                    th: '🔒 ความเป็นส่วนตัวก่อน: ปฏิเสธจนกว่าพวกเขาจะยอมเก็บข้อมูลในเซิร์ฟเวอร์ท้องถิ่นและตรวจสอบทุกปี',
                    zh: '🔒 隐私优先：拒绝，除非他们同意本地数据存储和年度审计。'
                },
                consequence: {
                    en: '🛡️ Ethical Stance: The startup refuses. Other districts get ahead in tech. Your students miss out but data stays safe.',
                    th: '🛡️ จุดยืนจริยธรรม: สตาร์ทอัพปฏิเสธ เขตอื่นก้าวหน้าทางเทค นักเรียนของคุณพลาดโอกาสแต่ข้อมูลปลอดภัย',
                    zh: '🛡️ 道德立场：初创公司拒绝了。其他学区在技术上领先。你的学生错过了机会，但数据保持安全。'
                },
                stats: { competence: 20, ethics: 50, leadership: 30, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧪 Pilot Program: Test with 100 volunteer students. Require parental consent forms.',
                    th: '🧪 โปรแกรมนำร่อง: ทดสอบกับนักเรียนอาสา 100 คน ต้องมีหนังสือยินยอมจากผู้ปกครอง',
                    zh: '🧪 试点计划：与 100 名志愿学生测试。需要家长同意书。'
                },
                consequence: {
                    en: '⚖️ Measured Approach: Results are promising. You expand slowly. Balance innovation with caution.',
                    th: '⚖️ แนวทางที่วัดผลได้: ผลลัพธ์มีแนวโน้มดี คุณขยายช้าๆ สมดุลระหว่างนวัตกรรมกับความระมัดระวัง',
                    zh: '⚖️ 谨慎方法：结果很有希望。你缓慢扩展。平衡创新与谨慎。'
                },
                stats: { competence: 35, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🏗️ Build Our Own: Use the interest to get funding for an open-source AI tutor built by district teachers.',
                    th: '🏗️ สร้างเองดีกว่า: ใช้ความสนใจนี้เพื่อหาทุนสร้างติวเตอร์ AI โอเพนซอร์สโดยครูในเขต',
                    zh: '🏗️ 自己建造：利用这种兴趣获得资金，由学区教师构建开源 AI 导师。'
                },
                consequence: {
                    en: '🚀 Moonshot: It takes 3 years and $2M, but you build something truly yours. Other districts license it from you.',
                    th: '🚀 ภารกิจใหญ่: ใช้เวลา 3 ปีและ 2 ล้านดอลลาร์ แต่คุณสร้างสิ่งที่เป็นของคุณจริงๆ เขตอื่นซื้อสิทธิ์จากคุณ',
                    zh: '🚀 雄心壮志：需要 3 年和 200 万美元，但你建立了真正属于自己的东西。其他学区从你这里获得许可。'
                },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 60 }
            }
        ]
    },
    {
        id: 'curr_design_037',
        text: {
            en: '📝 The Test-Optional Movement: Elite colleges are going test-optional (no SAT/ACT required). Your curriculum has been heavily weighted toward test prep. Do you pivot?',
            th: '📝 กระแสไม่บังคับสอบ: มหาวิทยาลัยชั้นนำเลิกบังคับสอบ SAT/ACT หลักสูตรของคุณเน้นเตรียมสอบมาก คุณจะเปลี่ยนไหม?',
            zh: '📝 考试可选运动：精英大学实行考试可选（不需要 SAT/ACT）。你的课程一直非常侧重于考试准备。你要转向吗？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎯 Double Down: Keep test prep. Many schools still use scores. Don\'t abandon what works.',
                    th: '🎯 เดินหน้าต่อ: เก็บการเตรียมสอบไว้ หลายมหาลัยยังใช้คะแนน อย่าทิ้งสิ่งที่ได้ผล',
                    zh: '🎯 加倍投入：保留考试准备。许多学校仍使用分数。不要放弃有效的方法。'
                },
                consequence: {
                    en: '📉 Outdated: Five years later, 80% of colleges are test-optional. Your students feel over-drilled and under-prepared for essays.',
                    th: '📉 ล้าสมัย: ห้าปีต่อมา 80% ของมหาลัยไม่บังคับสอบ นักเรียนของคุณรู้สึกว่าถูกสอบมากเกินแต่ไม่พร้อมเขียนเรียงความ',
                    zh: '📉 过时：五年后，80% 的大学实行考试可选。你的学生感觉训练过度，而作文准备不足。'
                },
                stats: { competence: 30, ethics: 20, leadership: -10, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '✍️ Shift to Holistic: Replace test prep with portfolio-building: essays, projects, leadership experience.',
                    th: '✍️ เปลี่ยนเป็นแบบองค์รวม: เปลี่ยนจากเตรียมสอบเป็นสร้างพอร์ตโฟลิโอ: เรียงความ โปรเจกต์ ประสบการณ์ผู้นำ',
                    zh: '✍️ 转向全面：用作品集建设取代考试准备：论文、项目、领导经验。'
                },
                consequence: {
                    en: '🌟 Future-Ready: Your students get into top schools with compelling personal stories. You lead the new wave.',
                    th: '🌟 พร้อมสำหรับอนาคต: นักเรียนของคุณเข้ามหาลัยชั้นนำด้วยเรื่องราวส่วนตัวที่น่าสนใจ คุณเป็นผู้นำกระแสใหม่',
                    zh: '🌟 面向未来：你的学生以引人入胜的个人故事进入顶尖学校。你引领新浪潮。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Balanced Approach: 50/50 split. Teach both test skills AND portfolio development.',
                    th: '⚖️ แนวทางสมดุล: แบ่งครึ่งๆ สอนทั้งทักษะสอบและการพัฒนาพอร์ตโฟลิโอ',
                    zh: '⚖️ 平衡方法：50/50 分配。既教考试技巧又教作品集开发。'
                },
                consequence: {
                    en: '🤷 Jack of Two Trades: Students are okay at both but excel at neither. Admissions results are average.',
                    th: '🤷 รู้ทั้งสองแต่ไม่เก่งทั้งสอง: นักเรียนพอทำทั้งสองได้แต่ไม่เยี่ยมทั้งสอง ผลการรับเข้าเป็นปานกลาง',
                    zh: '🤷 两样都会但都不精：学生两方面都还行，但都不出色。录取结果平平。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🎓 Student Choice: Let seniors choose their path: "Test Track" or "Portfolio Track."',
                    th: '🎓 ให้นักเรียนเลือก: ให้นักเรียนชั้นสูงเลือกเส้นทาง: "เส้นทางสอบ" หรือ "เส้นทางพอร์ตโฟลิโอ"',
                    zh: '🎓 学生选择：让高年级学生选择他们的路径："考试轨道"或"作品集轨道"。'
                },
                consequence: {
                    en: '🎯 Personalized Success: Each student plays to their strengths. Admissions improve across the board.',
                    th: '🎯 ความสำเร็จส่วนบุคคล: แต่ละคนเล่นตามจุดแข็ง ผลการรับเข้าดีขึ้นทั่วบอร์ด',
                    zh: '🎯 个性化成功：每个学生都发挥其优势。录取率全面提高。'
                },
                stats: { competence: 45, ethics: 35, leadership: 45, innovation: 40 }
            }
        ]
    },
    {
        id: 'curr_design_038',
        text: {
            en: '💰 Financial Literacy Mandate: The state requires a semester of "Personal Finance" for graduation. You must cut something to make room.',
            th: '💰 บังคับวิชาการเงิน: รัฐบังคับให้เรียน "การเงินส่วนบุคคล" หนึ่งเทอมเพื่อจบ คุณต้องตัดอะไรบางอย่างออกเพื่อให้มีที่ว่าง',
            zh: '💰 金融素养强制令：州政府要求毕业需要修一学期的"个人理财"课。你必须削减某些内容以腾出空间。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎨 Cut Electives: Remove one art or music elective slot.',
                    th: '🎨 ตัดวิชาเลือก: ตัดช่องวิชาเลือกศิลปะหรือดนตรีหนึ่งวิชา',
                    zh: '🎨 削减选修课：删除一个艺术或音乐选修课位。'
                },
                consequence: {
                    en: '🎭 Creative Drought: The band program suffers. Students become financially literate but culturally poorer.',
                    th: '🎭 ความแห้งแล้งของสร้างสรรค์: โปรแกรมวงดนตรีได้รับผลกระทบ นักเรียนรู้เรื่องการเงินแต่ยากจนทางวัฒนธรรม',
                    zh: '🎭 创造力枯竭：乐队项目受到影响。学生在财务上有文化，但在文化上更贫乏。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '📚 Integrate It: Teach finance concepts inside existing Math and Economics classes.',
                    th: '📚 บูรณาการเข้าไป: สอนแนวคิดการเงินภายในวิชาคณิตศาสตร์และเศรษฐศาสตร์ที่มีอยู่',
                    zh: '📚 整合它：在现有的数学和经济学课程中教授金融概念。'
                },
                consequence: {
                    en: '⚖️ Compliance Achieved: You met the mandate without cutting anything, but finance topics feel rushed and surface-level.',
                    th: '⚖️ ปฏิบัติตามได้: คุณทำตามที่สั่งโดยไม่ต้องตัดอะไร แต่หัวข้อการเงินดูเร่งรีบและตื้นเขิน',
                    zh: '⚖️ 达成合规：你在不削减任何内容的情况下满足了要求，但金融主题感觉匆忙且浅显。'
                },
                stats: { competence: 30, ethics: 30, leadership: 25, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🏋️ Cut PE: Replace one semester of gym with finance.',
                    th: '🏋️ ตัดพลศึกษา: เปลี่ยนพลศึกษาหนึ่งเทอมเป็นวิชาการเงิน',
                    zh: '🏋️ 削减体育：用金融课程替换一学期的体育课。'
                },
                consequence: {
                    en: '🍔 Health Crisis: Obesity rates increase. Students can balance a budget but not their diet.',
                    th: '🍔 วิกฤตสุขภาพ: อัตราโรคอ้วนเพิ่มขึ้น นักเรียนสมดุลงบฯ ได้แต่สมดุลอาหารไม่ได้',
                    zh: '🍔 健康危机：肥胖率上升。学生可以平衡预算，但不能平衡饮食。'
                },
                stats: { competence: 35, ethics: -10, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🌙 After-School Program: Offer finance as an optional after-school credit.',
                    th: '🌙 โปรแกรมหลังเลิกเรียน: เสนอวิชาการเงินเป็นหน่วยกิตเลือกหลังเลิกเรียน',
                    zh: '🌙 课后计划：将金融作为课后选修学分提供。'
                },
                consequence: {
                    en: '📉 Low Participation: Only motivated students attend. It doesn\'t meet the state mandate. You get flagged.',
                    th: '📉 เข้าร่วมน้อย: มีแต่เด็กที่มีแรงจูงใจเข้าเรียน ไม่เข้าตามเกณฑ์รัฐ คุณโดนตั้งข้อสังเกต',
                    zh: '📉 参与度低：只有有积极性的学生参加。这不符合州的要求。你被标记了。'
                },
                stats: { competence: 20, ethics: 30, leadership: -20, innovation: 30 }
            }
        ]
    },
    {
        id: 'curr_design_039',
        text: {
            en: '💻 Coding for All: Tech companies want coding taught K-12. "Every child should learn to code." But your teachers don\'t know how.',
            th: '💻 เขียนโค้ดสำหรับทุกคน: บริษัทเทคโนโลยีต้องการให้สอนเขียนโค้ดตั้งแต่ชั้นอนุบาลจนถึงมัธยม "เด็กทุกคนควรเรียนเขียนโค้ด" แต่ครูของคุณไม่รู้วิธี',
            zh: '💻 全民编程：科技公司希望从幼儿园到 12 年级教授编程。"每个孩子都应该学习编程。"但你的老师不知道怎么教。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎓 Train Teachers: Send 50 teachers to coding boot camps over summer.',
                    th: '🎓 ฝึกอบรมครู: ส่งครู 50 คนไปเข้าแคมป์เขียนโค้ดช่วงหยุดร้อน',
                    zh: '🎓 培训教师：暑期将 50 名教师送去编程训练营。'
                },
                consequence: {
                    en: '🧑‍💻 Homegrown Talent: It works! Teachers love the new skill. They teach basic Python and Scratch effectively.',
                    th: '🧑‍💻 พรสวรรค์ปลูกเอง: ได้ผล! ครูชอบทักษะใหม่ พวกเขาสอน Python และ Scratch พื้นฐานได้อย่างมีประสิทธิภาพ',
                    zh: '🧑‍💻 本土人才：成功了！教师喜欢新技能。他们有效地教授基础 Python 和 Scratch。'
                },
                stats: { competence: 45, ethics: 30, leadership: 40, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🏢 Hire Professionals: Recruit software engineers to teach part-time.',
                    th: '🏢 จ้างมืออาชีพ: รับสมัครวิศวกรซอฟต์แวร์มาสอนพาร์ทไทม์',
                    zh: '🏢 聘请专业人士：招聘软件工程师兼职教学。'
                },
                consequence: {
                    en: '💼 Mixed Results: Engineers know coding but can\'t manage classrooms. Discipline becomes a problem.',
                    th: '💼 ผลลัพธ์คละกัน: วิศวกรรู้เรื่องเขียนโค้ดแต่จัดการชั้นเรียนไม่ได้ ระเบียบวินัยกลายเป็นปัญหา',
                    zh: '💼 结果参半：工程师懂编程，但不会管理课堂。纪律成了问题。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '📱 Use Apps: Buy subscriptions to Code.org, Khan Academy, etc. Let students self-teach.',
                    th: '📱 ใช้แอป: ซื้อสมาชิก Code.org, Khan Academy ฯลฯ ให้นักเรียนเรียนรู้ด้วยตนเอง',
                    zh: '📱 使用应用：购买 Code.org、Khan Academy 等订阅。让学生自学。'
                },
                consequence: {
                    en: '🤖 Passive Learning: Some students thrive. Most get bored and click through without understanding.',
                    th: '🤖 การเรียนรู้แบบพาสซิฟ: นักเรียนบางคนประสบความสำเร็จ ส่วนใหญ่เบื่อและคลิกผ่านไปโดยไม่เข้าใจ',
                    zh: '🤖 被动学习：一些学生茁壮成长。大多数人感到无聊，点击浏览却不理解。'
                },
                stats: { competence: 25, ethics: 20, leadership: 15, innovation: 35 }
            },
            {
                id: 'D',
                text: {
                    en: '🎯 Selective Track: Only offer coding as an elective for interested students.',
                    th: '🎯 เส้นทางเลือก: เสนอเขียนโค้ดเป็นวิชาเลือกสำหรับนักเรียนที่สนใจเท่านั้น',
                    zh: '🎯 选择性轨道：仅将编程作为选修课提供给感兴趣的学生。'
                },
                consequence: {
                    en: '📉 Equity Gap: Rich kids whose parents can pay for private coding camps excel. Your students fall behind.',
                    th: '📉 ช่องว่างความเท่าเทียม: เด็กรวยที่พ่อแม่จ่ายค่าแคมป์เขียนโค้ดเอกชนได้ก้าวหน้า นักเรียนของคุณตกหล่น',
                    zh: '📉 公平差距：富裕孩子的父母可以支付私人编程营的费用，他们表现出色。你的学生落后了。'
                },
                stats: { competence: 20, ethics: -10, leadership: 10, innovation: 20 }
            }
        ]
    },
    {
        id: 'curr_design_040',
        text: {
            en: '📱 Social Media Literacy: Students are glued to TikTok and Instagram. You want to add "Digital Citizenship" to the curriculum. Parents say "stop wasting time."',
            th: '📱 รู้เท่าทันโซเชียลมีเดีย: นักเรียนติดกับ TikTok และ Instagram คุณต้องการเพิ่ม "พลเมืองดิจิทัล" ในหลักสูตร ผู้ปกครองบอกว่า "เลิกเสียเวลา"',
            zh: '📱 社交媒体素养：学生沉迷于 TikTok 和 Instagram。你想在课程中添加"数字公民身份"。家长说"别浪费时间"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📚 Standalone Class: Create a required "Digital Wellness" semester course.',
                    th: '📚 วิชาเดี่ยว: สร้างวิชาบังคับ "สุขภาพดิจิทัล" หนึ่งเทอม',
                    zh: '📚 独立课程：创建一门必修的"数字健康"学期课程。'
                },
                consequence: {
                    en: '🎓 Media Savvy: Students learn to spot deepfakes, understand algorithms. They become critical consumers.',
                    th: '🎓 ฉลาดสื่อ: นักเรียนเรียนรู้ที่จะจับดีพเฟก เข้าใจอัลกอริทึม พวกเขากลายเป็นผู้บริโภคที่มีวิจารณญาณ',
                    zh: '🎓 媒体精明：学生学会识别深度伪造，理解算法。他们成为有批判性的消费者。'
                },
                stats: { competence: 40, ethics: 50, leadership: 35, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Ban Phones: Just ban smartphones on campus entirely. Problem solved.',
                    th: '🚫 แบนโทรศัพท์: แค่แบนสมาร์ทโฟนในโรงเรียนทั้งหมด แก้ปัญหาได้',
                    zh: '🚫 禁止手机：完全禁止校园内使用智能手机。问题解决了。'
                },
                consequence: {
                    en: '😤 Rebellion: Students sneak phones anyway. You enforce harsh punishments. School feels like prison.',
                    th: '😤 กบฏ: นักเรียนแอบใช้โทรศัพท์อยู่ดี คุณลงโทษอย่างหนัก โรงเรียนรู้สึกเหมือนคุก',
                    zh: '😤 反叛：学生无论如何都偷偷使用手机。你实施严厉的惩罚。学校感觉像监狱。'
                },
                stats: { competence: 20, ethics: -20, leadership: -30, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '🎬 Use Social Media: Teach by creating TikToks for math lessons. Meet students where they are.',
                    th: '🎬 ใช้โซเชียลมีเดีย: สอนโดยสร้าง TikTok สำหรับบทเรียนคณิตศาสตร์ พบนักเรียนที่พวกเขาอยู่',
                    zh: '🎬 使用社交媒体：通过为数学课程创建 TikTok 来教学。在学生所在的地方与他们见面。'
                },
                consequence: {
                    en: '🎉 Viral Success: Your math teacher gets 2M followers. Students engage. But critics say you\'re "dumbing down" education.',
                    th: '🎉 ไวรัลสำเร็จ: ครูคณิตของคุณได้ผู้ติดตาม 2 ล้าน นักเรียนมีส่วนร่วม แต่นักวิจารณ์บอกว่าคุณ "ลดทอนคุณภาพ" การศึกษา',
                    zh: '🎉 病毒式成功：你的数学老师获得了 200 万粉丝。学生参与。但批评者说你在"降低"教育水平。'
                },
                stats: { competence: 35, ethics: 25, leadership: 30, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🧑‍🏫 Teacher Training: Train all teachers to integrate digital literacy into existing subjects.',
                    th: '🧑‍🏫 ฝึกอบรมครู: ฝึกอบรมครูทุกคนให้บูรณาการรู้เท่าทันดิจิทัลเข้ากับวิชาที่มีอยู่',
                    zh: '🧑‍🏫 教师培训：培训所有教师将数字素养融入现有学科。'
                },
                consequence: {
                    en: '⚖️ Gradual Shift: It takes time, but students get digital literacy alongside history, science, etc.',
                    th: '⚖️ การเปลี่ยนแปลงค่อยเป็นค่อยไป: ใช้เวลา แต่นักเรียนได้รับการรู้เท่าทันดิจิทัลพร้อมกับประวัติศาสตร์ วิทยาศาสตร์ ฯลฯ',
                    zh: '⚖️ 逐步转变：这需要时间，但学生在历史、科学等学科的同时获得数字素养。'
                },
                stats: { competence: 35, ethics: 40, leadership: 40, innovation: 25 }
            }
        ]
    },
    {
        id: 'curr_design_041',
        text: {
            en: '🏅 Varsity Esports: Students want "Esports" to count as a Varsity Sport (with PE credit). The football coach is furious. "Sitting in a chair isn\'t athletics!"',
            th: '🏅 อีสปอร์ตวาร์ซิตี้: นักเรียนต้องการให้ "อีสปอร์ต" นับเป็นกีฬาวาร์ซิตี้ (ได้หน่วยกิตพละ) โค้ชฟุตบอลโกรธจัด "นั่งบนเก้าอี้ไม่ใช่กีฬา!"',
            zh: '🏅 电子竞技校队：学生希望"电子竞技"算作校队运动（获得体育学分）。足球教练很愤怒。"坐在椅子上不是运动！"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎮 Make it a Sport: "Reflexes, team strategy, practice... it counts. Welcome to the 21st century."',
                    th: '🎮 ให้เป็นกีฬา: "ปฏิกิริยาโต้ตอบ กลยุทธ์ทีม การฝึกซ้อม... มันนับ ยินดีต้อนรับสู่ศตวรรษที่ 21"',
                    zh: '🎮 让它成为一项运动："反应、团队策略、练习……这都算。欢迎来到 21 世纪。"'
                },
                consequence: {
                    en: '🏆 New Champions: Your Esports team wins state championships. STEM engagement rises. Traditional jocks feel sidelined.',
                    th: '🏆 แชมป์ใหม่: ทีมอีสปอร์ตของคุณคว้าแชมป์ระดับรัฐ การมีส่วนร่วมด้าน STEM เพิ่มขึ้น นักกีฬาแบบเดิมรู้สึกถูกมองข้าม',
                    zh: '🏆 新冠军：你的电子竞技队赢得了州冠军。STEM 参与度上升。传统运动员感到被冷落。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Club Only: "It\'s a club, not a sport. No PE credit. Go run a lap."',
                    th: '🚫 แค่ชมรม: "มันเป็นชมรม ไม่ใช่กีฬา ไม่มีหน่วยกิตพละ ไปวิ่งรอบสนามซะ"',
                    zh: '🚫 仅限俱乐部："这是一个俱乐部，不是一项运动。没有体育学分。去跑一圈。"'
                },
                consequence: {
                    en: '😤 Missed Opportunity: The Esports team disbands. Tech-savvy kids feel undervalued. You saved the "purity" of PE.',
                    th: '😤 พลาดโอกาส: ทีมอีสปอร์ตยุบตัว เด็กเก่งเทครู้สึกไม่เห็นค่า คุณรักษา "ความบริสุทธิ์" ของพละไว้ได้',
                    zh: '😤 错失良机：电子竞技队解散。精通技术的孩子感到被低估。你挽救了体育课的"纯洁性"。'
                },
                stats: { competence: 30, ethics: 20, leadership: -10, innovation: -30 }
            },
            {
                id: 'C',
                text: {
                    en: '🏃 Hybrid Model: "Esports players get PE credit IF they do 20 mins of cardio before every practice."',
                    th: '🏃 โมเดลลูกผสม: "ผู้เล่นอีสปอร์ตได้หน่วยกิตพละ *ถ้า* พวกเขาทำคาร์ดิโอ 20 นาทีก่อนซ้อมทุกครั้ง"',
                    zh: '🏃 混合模式："如果电子竞技选手在每次练习前做 20 分钟的有氧运动，就可以获得体育学分。"'
                },
                consequence: {
                    en: '💪 Healthy Gamers: A brilliant compromise. Gamers get fit, jocks respect the grind. Everyone wins.',
                    th: '💪 เกมเมอร์สุขภาพดี: การประนีประนอมที่ยอดเยี่ยม เกมเมอร์ฟิตขึ้น นักกีฬาเคารพความพยายาม ชนะทุกฝ่าย',
                    zh: '💪 健康的游戏玩家：一个绝妙的妥协。游戏玩家变得健康，运动员尊重这种苦练。每个人都赢了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 60, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🔬 Turn it into Science: "Make it a Physics/Math elective about game mechanics, not a sport."',
                    th: '🔬 เปลี่ยนเป็นวิทยานิพนธ์: "ให้เป็นวิชาเลือกฟิสิกส์/คณิตศาสตร์เกี่ยวกับกลไกเกม ไม่ใช่กีฬา"',
                    zh: '🔬 将其转化为科学："让它成为关于游戏机制的物理/数学选修课，而不是一项运动。"'
                },
                consequence: {
                    en: '🤓 Academic Spin: It\'s educational, but sucks the fun out of it. Enrollment drops.',
                    th: '🤓 มุมวิชาการ: มันได้ความรู้ แต่ดูดความสนุกออกไปหมด คนลงเรียนลดลง',
                    zh: '🤓 学术旋转：它具有教育意义，但扼杀了其中的乐趣。入学率下降。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'curr_design_042',
        text: {
            en: '🥑 The Health Food Fight: You want to overhaul the Nutrition curriculum to focus on plant-based diets and sustainability. The local "Beef & Dairy" lobby threatens to cut funding for the football stadium.',
            th: '🥑 สงครามอาหารสุขภาพ: คุณต้องการยกเครื่องหลักสูตรโภชนาการเพื่อเน้นอาหารพืชและยั่งยืน ล็อบบี้ "เนื้อและนม" ท้องถิ่นขู่จะตัดงบสนามฟุตบอล',
            zh: '🥑 健康食品之战：你想彻底改革营养课程，专注于植物性饮食和可持续性。当地的"牛肉和乳制品"游说团体威胁要削减足球场的资金。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🥗 Stick to Plants: "The science is clear on climate and health. We teach facts, not pork... er, beef."',
                    th: '🥗 ยึดมั่นพืชผัก: "วิทยาศาสตร์ชัดเจนเรื่องภูมิอากาศและสุขภาพ เราสอนความจริง ไม่ใช่สอนตามใจ... เอ่อ เนื้อวัว"',
                    zh: '🥗 坚持植物："关于气候和健康的科学是明确的。我们教的是事实，而不是猪肉……呃，牛肉。"'
                },
                consequence: {
                    en: '🏟️ Funding Cut: You lose the stadium lights. The community is angry. But the kids are eating healthier.',
                    th: '🏟️ งบถูกตัด: คุณเสียไฟสนามฟุตบอล ชุมชนโกรธ แต่เด็กๆ กินอาหารสุขภาพดีขึ้น',
                    zh: '🏟️ 资金削减：你失去了体育场灯光。社区很愤怒。但孩子们的饮食更健康了。'
                },
                stats: { competence: 40, ethics: 50, leadership: 20, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🥩 Cave In: "Keep the food pyramid as is. Meat and milk are essential. Don\'t rock the boat."',
                    th: '🥩 ยอมจำนน: "คงพีระมิดอาหารไว้แบบเดิม เนื้อและนมจำเป็น อย่าแกว่งเท้าหาเสี้ยน"',
                    zh: '🥩 屈服："保持食物金字塔原样。肉和奶是必不可少的。别惹麻烦。"'
                },
                consequence: {
                    en: '🤝 Safe & Stale: Money is safe. Curriculum is 20 years outdated. Students learn nothing new.',
                    th: '🤝 ปลอดภัยแต่เก่าเก็บ: เงินปลอดภัย หลักสูตรล้าสมัยไป 20 ปี นักเรียนไม่ได้เรียนรู้อะไรใหม่',
                    zh: '🤝 安全且陈旧：资金安全。课程过时了 20 年。学生学不到新东西。'
                },
                stats: { competence: 20, ethics: -20, leadership: -10, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '🥘 "Global Diets": Teach nutrition through cultural lenses (Mediterranean, Asian, etc.). Include meat but emphasize balance.',
                    th: '🥘 "อาหารทั่วโลก": สอนโภชนาการผ่านเลนส์วัฒนธรรม (เมดิเตอร์เรเนียน, เอเชีย ฯลฯ) มีเนื้อสัตว์แต่เน้นความสมดุล',
                    zh: '🥘 "全球饮食"：通过文化视角（地中海、亚洲等）教授营养学。包括肉类，但强调平衡。'
                },
                consequence: {
                    en: '🌍 Cultural Win: Hard to argue with "culture." The lobby is confused but stays quiet. Kids try new foods.',
                    th: '🌍 ชัยชนะทางวัฒนธรรม: ยากที่จะเถียงคำว่า "วัฒนธรรม" ล็อบบี้งงแต่เงียบ เด็กๆ ได้ลองอาหารใหม่ๆ',
                    zh: '🌍 文化胜利：很难反驳"文化"。游说团体很困惑，但保持沉默。孩子们尝试新食物。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🗳️ Debate It: "Have students research and debate \'Meat vs. Plants\' themselves."',
                    th: '🗳️ โต้วาที: "ให้นักเรียนค้นคว้าและโต้วาทีหัวข้อ \'เนื้อ vs พืช\' กันเอง"',
                    zh: '🗳️ 辩论："让学生自己研究并辩论‘肉类与植物’。"'
                },
                consequence: {
                    en: '🗣️ Heated Classrooms: Parents get involved. It gets political fast. But critical thinking scores go up.',
                    th: '🗣️ ห้องเรียนเดือด: ผู้ปกครองเข้ามาเอี่ยว กลายเป็นเรื่องการเมืองรวดเร็ว แต่คะแนนการคิดวิเคราะห์พุ่ง',
                    zh: '🗣️ 激烈的课堂：家长介入。事情很快变得政治化。但批判性思维得分上升。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'curr_design_043',
        text: {
            en: '🚻 Sex Ed Debate: The state mandates an "Abstinence-Plus" curriculum. You want "Comprehensive" (including consent and safety). The PTA is split 50/50 and screaming matches are breaking out.',
            th: '🚻 ดีเบตเพศศึกษา: รัฐสั่งให้ใช้หลักสูตร "งดเว้นเป็นหลัก" (Abstinence-Plus) แต่คุณต้องการ "รอบด้าน" (รวมความยินยอมและความปลอดภัย) สมาคมผู้ปกครองเสียงแตก 50/50 และเริ่มตะโกนด่ากันแล้ว',
            zh: '🚻 性教育辩论：州政府强制实行"禁欲加"课程。你想要"全面"（包括同意和安全）。家长教师协会的分歧是 50/50，爆发了激烈的争吵。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📜 Follow Mandate: "Stick to the state law exactly. Don\'t risk funding or lawsuits."',
                    th: '📜 ทำตามคำสั่ง: "ยึดตามกฎหมายรัฐเป๊ะๆ อย่าเสี่ยงเรื่องงบหรือคดีความ"',
                    zh: '📜 遵循强制令："完全遵守州法律。不要拿资金或诉讼冒险。"'
                },
                consequence: {
                    en: '📉 Teen Rates Rise: Your distinct sees a spike in teen pregnancy. You followed the rules, but failed the kids.',
                    th: '📉 อัตราวัยรุ่นพุ่ง: เขตของคุณมีปัญหาท้องในวัยรุ่นพุ่งสูง คุณทำตามกฎ แต่ล้มเหลวต่อเด็กๆ',
                    zh: '📉 青少年比率上升：你所在的学区青少年怀孕率激增。你遵守了规则，但辜负了孩子。'
                },
                stats: { competence: 30, ethics: -10, leadership: 10, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Comprehensive: "Push the comprehensive curriculum. Call it \'Health & Safety.\' Better to ask forgiveness than permission."',
                    th: '🛡️ รอบด้าน: "ดันหลักสูตรจรอบด้านไปเลย เรียกมันว่า \'สุขภาพและความปลอดภัย\' ขอโทษทีหลังง่ายกว่าขออนุญาต"',
                    zh: '🛡️ 全面："推行全面课程。称之为‘健康与安全’。先斩后奏。"'
                },
                consequence: {
                    en: '🦸 Secret Service: Rates drop. Students are safer. You get sued by conservative parents, but the stats defend you.',
                    th: '🦸 บริการลับ: อัตราลดลง นักเรียนปลอดภัยขึ้น คุณโดนผู้ปกครองหัวอนุรักษ์ฟ้อง แต่สถิติช่วยปกป้องคุณ',
                    zh: '🦸 特勤局：比率下降。学生更安全。保守派父母起诉你，但统计数据为你辩护。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🏥 Bring in Doctors: "Outsource it to local health professionals. Let them take the heat. They are the experts."',
                    th: '🏥 เรียกหมอมา: "จ้างเหมารวมให้ผู้เชี่ยวชาญสาธารณสุขท้องถิ่นมาสอน ให้พวกเขารับหน้าไป พวกเขาคือผู้เชี่ยวชาญ"',
                    zh: '🏥 请医生："外包给当地卫生专业人员。让他们去承受压力。他们是专家。"'
                },
                consequence: {
                    en: '🩺 Medical Shield: Parents trust doctors more than teachers. It works well. Expensive, though.',
                    th: '🩺 โล่ทางการแพทย์: ผู้ปกครองเชื่อหมอมากกว่าครู ได้ผลดี แต่แพงหน่อย',
                    zh: '🩺 医疗盾牌：家长信任医生胜过信任老师。效果很好。不过很贵。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '👨‍👩‍👧 Parent Night: "Host a curriculum review night. Let parents vote on modules. Majority rules."',
                    th: '👨‍👩‍👧 คืนผู้ปกครอง: "จัดคืนทบทวนหลักสูตร ให้ผู้ปกครองโหวตเลือกโมดูล เสียงส่วนมากชนะ"',
                    zh: '👨‍👩‍👧 家长之夜："举办课程审查之夜。让家长对模块进行投票。少数服从多数。"'
                },
                consequence: {
                    en: '🎭 Chaos: It turns into a screaming match. Nothing gets decided. You look weak.',
                    th: '🎭 โกลาหล: กลายเป็นงานด่ากันเละ ตัดสินอะไรไม่ได้ คุณดูอ่อนแอ',
                    zh: '🎭 混乱：变成了尖叫比赛。什么也没决定。你看起来很软弱。'
                },
                stats: { competence: 20, ethics: 20, leadership: -40, innovation: 10 }
            }
        ]
    },
    {
        id: 'curr_design_044',
        text: {
            en: '👷 Vocational vs. College: Your district pushes "College for All," but local trades (welding, plumbing) are desperate for workers and pay $80k starting. Do you promote Trade School?',
            th: '👷 สายอาชีพ vs มหาลัย: เขตของคุณดันนโยบาย "ทุกคนต้องเข้ามหาลัย" แต่งานฝีมือท้องถิ่น (เชื่อม, ประปา) ขาดคนหนักมากและจ่ายเงินเดือนเริ่ม $80k คุณจะโปรโมตโรงเรียนสายอาชีพไหม?',
            zh: '👷 职业与大学：你的学区推行"全民上大学"，但当地的贸易行业（焊接、管道）急需工人，起薪 8 万美元。你会推广职业学校吗？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎓 College Only: "Don\'t lower expectations. A degree is the safest long-term bet for social mobility."',
                    th: '🎓 มหาลัยเท่านั้น: "อย่าลดความคาดหวัง ปริญญาคือการเดิมพันระยะยาวที่ปลอดภัยที่สุดสำหรับการเลื่อนชนชั้น"',
                    zh: '🎓 仅限大学："不要降低期望值。学位是社会流动的最安全长期赌注。"'
                },
                consequence: {
                    en: '💸 Debt Trap: Many students drop out with debt. Local businesses suffer from labor shortages.',
                    th: '💸 กับดักหนี้: นักเรียนหลายคนลาออกพร้อมหนี้สิน ธุรกิจท้องถิ่นต้องทนทุกข์จากการขาดแคลนแรงงาน',
                    zh: '💸 债务陷阱：许多学生背负债务辍学。当地企业遭受劳动力短缺之苦。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '🛠️ CTE Revolution: "Rebrand \'Shop Class\' to \'Engineering & Tech.\' Partner with unions. Destigmatize the trades."',
                    th: '🛠️ ปฏิวัติอาชีวะ: "รีแบรนด์ \'วิชาช่าง\' เป็น \'วิศวกรรมและเทคโนโลยี\' จับมือกับสหภาพ ลบภาพจำแย่ๆ ของสายอาชีพ"',
                    zh: '🛠️ CTE 革命："将‘车间课’更名为‘工程与技术’。与工会合作。消除对贸易行业的污名。"'
                },
                consequence: {
                    en: '🚀 Real Skills: Enrollment booms. Students graduate into high-paying jobs immediately. Parents are thrilled.',
                    th: '🚀 ทักษะจริง: ยอดสมัครพุ่ง นักเรียนจบมาได้งานเงินดีทันที ผู้ปกครองปลื้ม',
                    zh: '🚀 真正的技能：入学率激增。学生毕业后立即进入高薪工作岗位。家长们很兴奋。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Two Tracks: "Explicitly separate students in 9th grade: \'Academic Track\' vs \'Vocational Track\'."',
                    th: '⚖️ สองเส้นทาง: "แยกนักเรียนชัดเจนตอน ม.3: \'สายวิทย์\' vs \'สายอาชีพ\'"',
                    zh: '⚖️ 两条轨道："在 9 年级明确区分学生：‘学术轨道’与‘职业轨道’。"'
                },
                consequence: {
                    en: '🏷️ Class Divide: It recreates a class system. Low-income kids get pushed to vocational. Civil rights complaint filed.',
                    th: '🏷️ แบ่งชนชั้น: มันสร้างระบบชนชั้นขึ้นมาใหม่ เด็กจนถูกดันไปสายอาชีพ มีการร้องเรียนเรื่องสิทธิพลเมือง',
                    zh: '🏷️ 阶级划分：它重建了阶级体系。低收入孩子被推向职业学校。遭到民权投诉。'
                },
                stats: { competence: 20, ethics: -30, leadership: -10, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Career Fair Focus: "Just invite trade unions to Career Day alongside colleges. Let them compete."',
                    th: '🤝 โฟกัสงานแนะแนว: "แค่เชิญสหภาพแรงงานมางานแนะแนวพร้อมมหาลัย ให้พวกเขาแข่งกันเอง"',
                    zh: '🤝 招聘会焦点："只需邀请工会和大学一起参加职业日。让他们竞争。"'
                },
                consequence: {
                    en: '🤷 Passive: A small improvement. Colleges still dominate the conversation.',
                    th: '🤷 เฉยเมย: ดีขึ้นนิดหน่อย แต่มหาลัยก็ยังครองพื้นที่ส่วนใหญ่อยู่ดี',
                    zh: '🤷 被动：小有改进。大学仍然主导着对话。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'curr_design_045',
        text: {
            en: '📚 The Banned Book List: A parent group sends you a list of 50 books they want banned (including classics like "To Kill a Mockingbird"). They threaten to run for the school board if you refuse.',
            th: '📚 รายชื่อหนังสือต้องห้าม: กลุ่มผู้ปกครองส่งรายชื่อหนังสือ 50 เล่มที่ต้องการให้แบน (รวมถึงเล่มคลาสสิกอย่าง "To Kill a Mockingbird") พวกเขาขู่จะลงสมัครบอร์ดโรงเรียนถ้าคุณปฏิเสธ',
            zh: '📚 禁书清单：一个家长团体发给你一份清单，列出了他们想要禁的 50 本书（包括像《杀死一只知更鸟》这样的经典）。如果你拒绝，他们威胁要竞选校董会。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Defend Liberty: "I will not ban books. These are essential for critical thinking. Run for board if you want."',
                    th: '🛡️ ปกป้องเสรีภาพ: "ผมจะไม่แบนหนังสือ พวกนี้จำเป็นต่อการคิดวิเคราะห์ เชิญลงสมัครบอร์ดได้เลยถ้าอยากทำ"',
                    zh: '🛡️ 捍卫自由："我不会禁书。这些对批判性思维至关重要。如果你想，就去竞选校董会吧。"'
                },
                consequence: {
                    en: '🔥 Politics: They run. They win. You get fired next year. But you go down a martyr for intellectual freedom.',
                    th: '🔥 การเมือง: พวกเขาลงสมัคร พวกเขาชนะ คุณโดนไล่ออกปีหน้า แต่คุณจากไปอย่างวีรบุรุษแห่งเสรีภาพทางปัญญา',
                    zh: '🔥 政治：他们竞选。他们赢了。你明年被解雇。但你成为了知识自由的烈士。'
                },
                stats: { competence: 50, ethics: 60, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '✂️ Compromise: "We will remove the 5 most explicit books, but keep the classics. Deal?"',
                    th: '✂️ ประนีประนอม: "เราจะเอาหนังสือที่ล่อแหลมที่สุด 5 เล่มออก แต่เก็บเล่มคลาสสิกไว้ ตกลงไหม?"',
                    zh: '✂️ 妥协："我们将移除 5 本最露骨的书，但保留经典。成交？"'
                },
                consequence: {
                    en: '📉 Slippery Slope: They agree. Next month, they bring a list of 50 more. You showed weakness.',
                    th: '📉 ทางลาดชัน: พวกเขาตกลง เดือนหน้าพวกเขาส่งมาอีก 50 เล่ม คุณแสดงความอ่อนแอให้เห็น',
                    zh: '📉 滑坡：他们同意了。下个月，他们又带来了一份 50 本的清单。你表现出了软弱。'
                },
                stats: { competence: 20, ethics: -20, leadership: -10, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔒 Opt-Out Policy: "No bans. But parents can opt their OWN child out of any book and get an alternative assignment."',
                    th: '🔒 นโยบายขอเว้น: "ไม่มีการแบน แต่ผู้ปกครองขอเว้นลูก *ของตัวเอง* จากเล่มไหนก็ได้และทำงานอื่นแทน"',
                    zh: '🔒 退出政策："不禁书。但家长可以让*自己*的孩子退出任何书籍的学习，并获得替代作业。"'
                },
                consequence: {
                    en: '🧠 Smart Tactic: It diffuses the anger. Most honest complaints are solved. Extremists lose their platform.',
                    th: '🧠 กลยุทธ์ฉลาด: มันลดความโกรธเกลี้ยว คำร้องเรียนจริงใจส่วนใหญ่ถูกแก้ พวกหัวรุนแรงเสียเวที',
                    zh: '🧠 聪明的策略：这化解了愤怒。大多数诚实的抱怨都解决了。极端分子失去了他们的平台。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤫 Quiet Rotation: "Temporarily move them to the \'Optional Reading\' shelf. Don\'t assign them in class for a year."',
                    th: '🤫 หมุนเวียนเงียบๆ: "ย้ายไปไว้บนชั้น \'อ่านนอกเวลา\' ชั่วคราว ไม่สั่งเป็นการบ้านในปีนี้"',
                    zh: '🤫 安静轮换："暂时将它们移至‘选修阅读’书架。一年内不要在课堂上布置。"'
                },
                consequence: {
                    en: '🐢 Soft Censorship: You avoided the fight, but effective teaching stops. Teachers are confused about what is allowed.',
                    th: '🐢 เซ็นเซอร์แบบนุ่มนวล: คุณเลี่ยงการทะเลาะ แต่การสอนที่มีประสิทธิภาพหยุดชะงัก ครูงงว่าอะไรสอนได้ไม่ได้',
                    zh: '🐢 软审查：你避免了争斗，但有效的教学停止了。老师对什么已被允许感到困惑。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'curr_design_046',
        text: {
            en: '🗓️ The 4-Day School Week: Teachers are burning out and quitting. The union proposes a 4-day school week (longer days, Fridays off) to retain talent. Parents are worried about childcare.',
            th: '🗓️ เรียน 4 วันต่อสัปดาห์: ครูหมดไฟและลาออก สหภาพเสนอให้เรียน 4 วันต่อสัปดาห์ (วันเรียนยาวขึ้น หยุดวันศุกร์) เพื่อรักษาบุคลากร ผู้ปกครองกังวลเรื่องคนดูแลเด็ก',
            zh: '🗓️ 四天学制：教师精疲力竭并纷纷辞职。工会提议每周上课 4 天（每天时间延长，周五休息）以留住人才。家长担心育儿问题。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✅ Approve It: "We can\'t run a school without teachers. This is a necessary survival strategy."',
                    th: '✅ อนุมัติ: "เราเปิดโรงเรียนไม่ได้ถ้าไม่มีครู นี่คือกลยุทธ์ความอยู่รอดที่จำเป็น"',
                    zh: '✅ 批准："没有老师我们就无法办学。这是必要的生存策略。"'
                },
                consequence: {
                    en: '🧘 Happy Teachers: Retention soars. Teachers are rested and teach better. But low-income families struggle with Friday childcare.',
                    th: '🧘 ครูมีความสุข: อัตราการคงอยู่พุ่ง ครูพักผ่อนเพียงพอและสอนดีขึ้น แต่ครอบครัวรายได้ต่ำลำบากเรื่องดูแลเด็กวันศุกร์',
                    zh: '🧘 快乐的老师：留任率飙升。老师休息得很好，教学效果更好。但低收入家庭在周五的育儿方面很挣扎。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '❌ Reject It: "Schools are for students, not teacher convenience. Kids need consistency."',
                    th: '❌ ปฏิเสธ: "โรงเรียนมีไว้เพื่อนักเรียน ไม่ใช่ความสะดวกของครู เด็กๆ ต้องการความสม่ำเสมอ"',
                    zh: '❌ 拒绝："学校是为了学生，而不是为了老师的方便。孩子们需要一致性。"'
                },
                consequence: {
                    en: '🚪 Mass Exodus: 20% of your staff quits. You have to hire uncertified subs. Quality plummets.',
                    th: '🚪 ลาออกชุดใหญ่: 20% ของพนักงานคุณลาออก คุณต้องจ้างครูแทนที่ไม่มีใบอนุญาต คุณภาพดิ่งลงเหว',
                    zh: '🚪 大规模离职：20% 的员工辞职。你不得不雇用没有认证的代课老师。质量直线下降。'
                },
                stats: { competence: 20, ethics: 10, leadership: -30, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧒 Friday Care: "Approve the 4-day week, but use the budget savings to offer free \'Enrichment Fridays\' childcare."',
                    th: '🧒 ดูแลวันศุกร์: "อนุมัติ 4 วัน แต่ใช้างบที่ประหยัดได้มาจัด \'วันศุกร์เสริมทักษะ\' ดูแลเด็กฟรี"',
                    zh: '🧒 周五看护："批准四天工作制，但利用节省的预算提供免费的‘丰富周五’看护服务。"'
                },
                consequence: {
                    en: '🌟 Model District: It\'s a logistical nightmare to set up, but it works perfectly. Everyone is happy.',
                    th: '🌟 เขตต้นแบบ: การจัดตั้งเป็นฝันร้ายทางโลจิสติกส์ แต่ผลออกมาสมบูรณ์แบบ ทุกคนมีความสุข',
                    zh: '🌟 模范学区：建立起来是一场后勤噩梦，但效果完美。每个人都很开心。'
                },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Pay Raise: "Keep 5 days, but cut admin costs to give teachers a 20% raise."',
                    th: '💰 ขึ้นเงินเดือน: "เรียน 5 วันเหมือนเดิม แต่ตัดงบบริหารเพื่อขึ้นเงินเดือนครู 20%"',
                    zh: '💰 加薪："保持 5 天，但削减行政成本，给老师加薪 20%。"'
                },
                consequence: {
                    en: '📉 Budget War: The distinct goes into deficit. You are audited. Teachers take the money but are still tired.',
                    th: '📉 สงครามงบประมาณ: เขตขาดดุล คุณถูกตรวจสอบ ครูรับเงินแต่ก็ยังเหนื่อยอยู่ดี',
                    zh: '📉 预算战：学区出现赤字。你被审计了。老师们拿了钱，但仍然很累。'
                },
                stats: { competence: 30, ethics: 40, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'curr_design_047',
        text: {
            en: '🌍 Climate Curriculum: You redesign science classes to focus heavily on Climate Change and Green Energy. A prominent local industry (Coal/Oil) offers a $5M grant... if you include "Alternative Viewpoints."',
            th: '🌍 หลักสูตรภูมิอากาศ: คุณออกแบบวิชาวิทย์ใหม่โดยเน้นหนักเรื่องการเปลี่ยนแปลงภูมิอากาศและพลังงานสีเขียว อุตสาหกรรมท้องถิ่น (ถ่านหิน/น้ำมัน) เสนอทุน 5 ล้านดอลลาร์... ถ้าคุณใส่ "มุมมองทางเลือก" เข้าไปด้วย',
            zh: '🌍 气候课程：你重新设计科学课程，重点关注气候变化和绿色能源。当地一家著名的行业（煤炭/石油）提供 500 万美元的赠款……如果你包含"替代观点"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Reject Bribe: "Science is not for sale. Keep your money and your propaganda."',
                    th: '🚫 ปฏิเสธสินบน: "วิทยาศาสตร์ไม่ได้มีไว้ขาย เก็บเงินและโฆษณาชวนเชื่อของคุณไปเถอะ"',
                    zh: '🚫 拒绝贿赂："科学是非卖品。留着你的钱和你的宣传吧。"'
                },
                consequence: {
                    en: '🦅 Integrity: You lose the funding, but gain national respect. Environmental groups step in to help.',
                    th: '🦅 ความซื่อสัตย์: คุณเสียทุน แต่ได้ความเคารพระดับชาติ กลุ่มสิ่งแวดล้อมเข้ามาช่วย',
                    zh: '🦅 正直：你失去了资金，但赢得了全国的尊重。环保组织介入提供帮助。'
                },
                stats: { competence: 40, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Take the Money: "We can use the $5M to build solar labs. We\'ll just put their pamphlets in the back of the room."',
                    th: '🤝 รับเงิน: "เราใช้ 5 ล้านสร้างห้องแล็บโซลาร์ได้ เราก็แค่าวางแผ่นพับพวกเขาไว้หลังห้อง"',
                    zh: '🤝 拿钱："我们可以利用这 500 万建立太阳能实验室。我们把他们的小册子放在房间后面就行了。"'
                },
                consequence: {
                    en: '🏭 Compromised: Students spot the hypocrisy immediately. "Why are we learning about smog from a coal company?"',
                    th: '🏭 เสียจุดยืน: นักเรียนจับได้ว่ามือถือสากปากถือศีล "ทำไมเราเรียนเรื่องหมอกควันจากบริษัทถ่านหิน?"',
                    zh: '🏭 妥协：学生立刻发现了虚伪。"为什么我们要从煤炭公司那里了解雾霾？"'
                },
                stats: { competence: 30, ethics: -30, leadership: -20, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🧐 Critical Analysis: "Take the money, but use their materials as examples of corporate greenwashing in Media Literacy class."',
                    th: '🧐 วิเคราะห์เชิงวิพากษ์: "รับเงินมา แต่ใช้สื่อของพวกเขาเป็นตัวอย่างของการฟอกเขียวโดยองค์กรในวิชารู้เท่าทันสื่อ"',
                    zh: '🧐 批判性分析："拿钱，但在媒体素养课上把他们的材料当作企业‘漂绿’的例子。"'
                },
                consequence: {
                    en: '🔥 Loophole: A genius move. The company sues you for defamation, but you win. Legend status achieved.',
                    th: '🔥 ช่องโหว่: การเดินหมากอัจฉริยะ บริษัทฟ้องคุณข้อหาหมิ่นประมาทแต่คุณชนะ ได้สถานะตำนาน',
                    zh: '🔥 漏洞：天才之举。公司起诉你诽谤，但你赢了。成就传奇地位。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '⚖️ Neutral Tech: "Focus only on the engineering of energy systems, avoiding the political/climate debate entirely."',
                    th: '⚖️ เทคโนโลยีเป็นกลาง: "เน้นแค่วิศวกรรมระบบพลังงาน เลี่ยงการดีเบตเรื่องการเมือง/ภูมิอากาศไปเลย"',
                    zh: '⚖️ 中立技术："仅关注能源系统的工程设计，完全避免政治/气候辩论。"'
                },
                consequence: {
                    en: '🤖 Dry & Safe: Boring classes. Students learn mechanics but lack context on why it matters.',
                    th: '🤖 แห้งแล้งและปลอดภัย: วิชาเรียนน่าเบื่อ นักเรียนเรียนรู้กลไกแต่ขาดบริบทว่าทำไมมันถึงสำคัญ',
                    zh: '🤖 枯燥且安全：无聊的课程。学生学习了机械原理，但缺乏关于其重要性的背景知识。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'curr_design_048',
        text: {
            en: '➗ Algebra Politics: Data shows "tracking" (separating advanced math students) hurts diversity. You propose "Algebra for All" in 8th grade. Parents of gifted kids revolt.',
            th: '➗ การเมืองพีชคณิต: ข้อมูลชี้ว่า "การแบ่งห้อง" (แยกเด็กเก่งคณิต) ทำลายความหลากหลาย คุณเสนอ "พีชคณิตสำหรับทุกคน" ใน ม.2 ผู้ปกครองเด็กกิฟต์ประท้วง',
            zh: '➗ 代数政治：数据显示"分轨"（分开高等数学学生）损害了多样性。你提议在 8 年级实行"全民代数"。天才儿童的父母反抗。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 End Tracking: "Mix all students. Differentiated instruction in the same classroom. Equity first."',
                    th: '🚫 เลิกแบ่งห้อง: "คละนักเรียนทั้งหมด สอนแบบแยะระดับในห้องเดียวกัน ความเท่าเทียมต้องมาก่อน"',
                    zh: '🚫 结束分轨："混合所有学生。在同一课堂进行差异化教学。公平优先。"'
                },
                consequence: {
                    en: '📉 Flight Risk: Wealthy parents pull their kids out to private schools. The district loses funding and high performers.',
                    th: '📉 เสี่ยงคนหนี: ผู้ปกครองรวยย้ายลูกไปโรงเรียนเอกชน เขตเสียงบและเด็กเก่ง',
                    zh: '📉 逃离风险：富有的父母把孩子送到私立学校。学区失去了资金和表现优异的学生。'
                },
                stats: { competence: 30, ethics: 40, leadership: -20, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Keep Tracking: "We need to challenge the brightest minds. Keep the accelerated lane."',
                    th: '🛡️ แบ่งห้องต่อ: "เราต้องท้าทายสมองที่ฉลาดที่สุด เก็บเลนด่วนไว้"',
                    zh: '🛡️ 保持分轨："我们需要挑战最聪明的头脑。保持加速通道。"'
                },
                consequence: {
                    en: '🔒 Status Quo: High scores for the top 10%. The achievement gap widens. Nothing changes.',
                    th: '🔒 สถานะเดิม: คะแนนสูงสำหรับท็อป 10% ช่องว่างผลสัมฤทธิ์กว้างขึ้น ไม่มีอะไรเปลี่ยน',
                    zh: '🔒 现状：前 10% 的人得分很高。成就差距扩大。什么也没改变。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Acceleration for All: "Put EVERYONE in advanced math. Add double periods of support for struggling students."',
                    th: '🚀 เร่งเรียนทุกคน: "ใส่ทุกคนในคณิตขั้นสูง เพิ่มคาบสนับสนุนเป็นสองเท่าสำหรับเด็กที่ตามไม่ทัน"',
                    zh: '🚀 全民加速："让每个人都学习高等数学。为学习吃力的学生增加双倍的支持时间。"'
                },
                consequence: {
                    en: '📈 High Standards: It is expensive and exhausting for teachers, but it works. The "gap" closes from the bottom up.',
                    th: '📈 มาตรฐานสูง: มันแพงและเหนื่อยสำหรับครู แต่ได้ผล "ช่องว่าง" แคบลงจากล่างขึ้นบน',
                    zh: '📈 高标准：这对老师来说既昂贵又累人，但它是有效的。"差距"从下往上缩小了。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '💻 Flexible Pacing: "Use software to let kids move at their own speed. The teacher acts as a coach."',
                    th: '💻 ก้าวที่ยืดหยุ่น: "ใช้ซอฟต์แวร์ให้เด็กไปตามความเร็วตัวเอง ครูทำหน้าที่โค้ช"',
                    zh: '💻 灵活进度："使用软件让孩子按照自己的速度前进。老师充当教练。"'
                },
                consequence: {
                    en: '🕸️ Isolated: Students interact less. It becomes a room of silent kids on iPads.',
                    th: '🕸️ โดดเดี่ยว: นักเรียนปฏิสัมพันธ์กันน้อยลง กลายเป็นห้องที่มีแต่เด็กเงียบกดไอแพด',
                    zh: '🕸️ 孤立：学生互动减少。这变成了一个满是玩 iPad 的沉默孩子的房间。'
                },
                stats: { competence: 35, ethics: 25, leadership: 10, innovation: 30 }
            }
        ]
    },
    {
        id: 'curr_design_049',
        text: {
            en: '🥤 Brand Name Education: Budget cuts are brutal. A major soda company offers $2M to put their logo on lockers and sponsor the "Chemistry of Carbonation" module.',
            th: '🥤 การศึกษาติดแบรนด์: การตัดงบโหดร้ายมาก บริษัทน้ำอัดลมยักษ์ใหญ่เสนอ 2 ล้านดอลลาร์เพื่อติดโลโก้บนตู้ล็อคเกอร์และสปอนเซอร์โมดูล "เคมีของคาร์บอเนชั่น"',
            zh: '🥤 品牌教育：预算削减是残酷的。一家大型汽水公司提供 200 万美元，要把他们的标志印在储物柜上，并赞助"碳酸化化学"模块。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💸 Sell Out: "We need books. If that means looking at a logo, so be it."',
                    th: '💸 ขายตัว: "เราต้องการหนังสือ ถ้าต้องแลกกับการมองโลโก้ ก็เอา"',
                    zh: '💸 出卖："我们需要书。如果这意味着要看一个标志，那就这样吧。"'
                },
                consequence: {
                    en: '📢 Commercialized: The school looks like a mall. Students mock the "Soda Chemistry" class.',
                    th: '📢 เป็นพาณิชย์: โรงเรียนดูเหมือนห้าง นักเรียนล้อวิชา "เคมีน้ำอัดลม"',
                    zh: '📢 商业化：学校看起来像个商场。学生嘲笑"汽水化学"课。'
                },
                stats: { competence: 30, ethics: -20, leadership: -10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Starve: "No ads in schools. Ever. We will fundraise or cut costs elsewhere."',
                    th: '🛑 อดอยาก: "ไม่มีโฆษณาในโรงเรียน เด็ดขาด เราจะหาทุนหรือตัดงบที่อื่น"',
                    zh: '🛑 挨饿："学校里永远不能有广告。我们将筹款或在其他地方削减成本。"'
                },
                consequence: {
                    en: '📉 Austerity: You keep your soul, but lose teacher aides. Class sizes grow to 40.',
                    th: '📉 มัธยัสถ์: คุณรักษาจิตวิญญาณไว้ได้ แต่เสียผู้ช่วยครู ขนาดห้องเรียนเพิ่มเป็น 40 คน',
                    zh: '📉 紧缩：你保住了灵魂，但失去了助教。班级人数增加到 40 人。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🎨 Art Grants: "Reject the logo, but ask for a \'Community Art Grant\' with no strings attached. Use their guilt."',
                    th: '🎨 ทุนศิลปะ: "ปฏิเสธโลโก้ แต่ขอ \'ทุนศิลปะชุมชน\' แบบไม่มีเงื่อนไข ใช้ความรู้สึกผิดของพวกเขา"',
                    zh: '🎨 艺术资助："拒绝标志，但要求提供无附加条件的‘社区艺术资助’。利用他们的内疚感。"'
                },
                consequence: {
                    en: '🎭 Partial Win: They give $500k instead of $2M to save face. It helps, but not enough.',
                    th: '🎭 ชนะบางส่วน: พวกเขาให้ 5 แสนแทน 2 ล้านเพื่อรักษาหน้า ช่วยได้แต่ไม่พอ',
                    zh: '🎭 部分胜利：他们为了面子给了 50 万而不是 200 万。这有帮助，但还不够。'
                },
                stats: { competence: 40, ethics: 40, leadership: 45, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🔬 Corporate Partnership: "Counter-offer: They fund a recycling plant on campus. Their logo goes THERE, not in halls."',
                    th: '🔬 หุ้นส่วนองค์กร: "ยื่นข้อเสนอกลับ: พวกเขาให้ทุนสร้างโรงรีไซเคิลในโรงเรียน โลโก้แปะที่นั่น ไม่ใช่ในโถงทางเดิน"',
                    zh: '🔬 企业合作伙伴关系："反向提议：他们资助校园内的回收厂。他们的标志放在那里，而不是走廊里。"'
                },
                consequence: {
                    en: '♻️ Green Money: You turn a gross offer into a green resource. Good negotiation.',
                    th: '♻️ เงินสีเขียว: คุณเปลี่ยนข้อเสนอแย่ๆ ให้เป็นทรัพยากรสีเขียว การเจรจาที่ดี',
                    zh: '♻️ 绿色资金：你将一个糟糕的提议变成了绿色资源。很好的谈判。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 }
            }
        ]
    },
    {
        id: 'curr_design_050',
        text: {
            en: '🌱 The Unschooling Experiment: You want to pilot a "Student-Led Learning" program where 100 students have NO curriculum, just mentors and resources to pursue their own projects.',
            th: '🌱 การทดลองไม่เรียนในระบบ: คุณต้องการนำร่องโปรแกรม "การเรียนรู้ที่นักเรียนนำ" โดยนักเรียน 100 คน *ไม่มี* หลักสูตร มีแค่พี่เลี้ยงและทรัพยากรเพื่อทำโปรเจกต์ของตัวเอง',
            zh: '🌱 非学校教育实验：你想试点一个"学生主导学习"项目，100 名学生*没有*课程，只有导师和资源来追求他们自己的项目。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Launch It: "Standardization kills curiosity. Let them fly! This is the future."',
                    th: '🚀 เริ่มเลย: "มาตรฐานฆ่าความอยากรู้ ปล่อยให้พวกเขาบิน! นี่คืออนาคต"',
                    zh: '🚀以此启动："标准化扼杀好奇心。让他们飞翔吧！这就是未来。"'
                },
                consequence: {
                    en: '🌟 Innovation Hub: It\'s chaotic. Some kids play video games all day. But 20% create startups or write novels. It attracts global attention.',
                    th: '🌟 ศูนย์นวัตกรรม: มันวุ่นวาย เด็กบางคนเล่นเกมทั้งวัน แต่ 20% สร้างสตาร์ทอัพหรือเขียนนิยาย ดึงดูดความสนใจทั่วโลก',
                    zh: '🌟 创新中心：这很混乱。有些孩子整天玩电子游戏。但 20% 的人创建了初创公司或写小说。它吸引了全球的关注。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 70 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Risky: "No. We are a public school, not a Montessori camp. We need metrics."',
                    th: '🛑 เสี่ยงเกิน: "ไม่ เราเป็นโรงเรียนรัฐ ไม่ใช่ค่ายมอนเตสซอรี่ เราต้องการตัวชี้วัด"',
                    zh: '🛑 风险："不。我们是公立学校，不是蒙台梭利夏令营。我们需要指标。"'
                },
                consequence: {
                    en: '📉 Safe Boredom: You stick to the text book. Students graduate with average grades and zero passion.',
                    th: '📉 ความเบื่อที่ปลอดภัย: คุณยึดตามตำรา นักเรียนจบมาด้วยเกรดเฉลี่ยๆ และความหลงใหลเป็นศูนย์',
                    zh: '📉 安全的无聊：你坚持教科书。学生毕业时成绩平平，毫无激情。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '🎨 "Genius Hour": "Compromise. Keep the curriculum, but give every student 1 hour a day for independent projects."',
                    th: '🎨 "ชั่วโมงอัจฉริยะ": "ประนีประนอม เก็บหลักสูตรไว้ แต่ให้เวลา 1 ชั่วโมงต่อวันสำหรับโปรเจกต์อิสระ"',
                    zh: '🎨 "天才一小时"："妥协。保留课程，但每天给每个学生 1 小时进行独立项目。"'
                },
                consequence: {
                    en: '⏱️ Good Balance: Students look forward to that hour all day. It improves engagement in core classes too.',
                    th: '⏱️ สมดุลที่ดี: นักเรียนรอคอยชั่วโมงนั้นทั้งวัน ช่วยกระตุ้นความสนใจในวิชาหลักด้วย',
                    zh: '⏱️ 良好的平衡：学生整天都在期待那一个小时。它也提高了核心课程的参与度。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '📝 Honors Only: "Only offer this to students with a 4.0 GPA. They can be trusted."',
                    th: '📝 เฉพาะเกียรตินิยม: "เสนอให้เฉพาะนักเรียนเกรด 4.0 พวกเขาไว้ใจได้"',
                    zh: '📝 仅限优等生："仅向 GPA 为 4.0 的学生提供此机会。他们值得信任。"'
                },
                consequence: {
                    en: '🤴 Elitism: The smart kids get cooler stuff. The bored kids get more boredom. Resentment builds.',
                    th: '🤴 อภิสิทธิ์ชน: เด็กเก่งได้ของเจ๋งกว่า เด็กเบื่อยิ่งเบื่อเข้าไปอีก ความไม่พอใจก่อตัว',
                    zh: '🤴 精英主义：聪明的孩子得到了更酷的东西。无聊的孩子变得更无聊。怨恨在积累。'
                },
                stats: { competence: 30, ethics: 10, leadership: -10, innovation: 10 }
            }
        ]
    }
];
