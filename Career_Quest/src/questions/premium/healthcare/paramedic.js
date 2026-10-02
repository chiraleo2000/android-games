
export const paramedicQuestions = [
    {
        id: 'paramedic_001',
        text: {
            en: '🚑 The Mass Casualty Triage: A bus has overturned. multiple victims. You see a young child (Red tag - critical) and an elderly man (Red tag - critical). You only have supplies to stabilize ONE immediately before backup arrives in 10 minutes.',
            th: '🚑 การคัดแยกผู้ป่วยหมู่: รถบัสพลิกคว่ำ ผู้บาดเจ็บหลายคน คุณเห็นเด็กเล็ก (ป้ายแดง - วิกฤต) และชายชรา (ป้ายแดง - วิกฤต) คุณมีอุปกรณ์สำหรับช่วยแค่คนเดียวก่อนกำลังเสริมจะมาใน 10 นาที',
            zh: '🚑 大规模伤亡分诊：一辆公共汽车翻车。多名受害者。你看到一个小孩（红色标签-危急）和一个老人（红色标签-危急）。在10分钟后支援到达之前，你只有物资可以立即稳定其中一个。'
        },
        options: [
            { id: 'A', text: { en: '👶 Save the Child: "He has more life years ahead. Prioritize the youth."', th: '👶 ช่วยเด็ก: "เขามีเวลาชีวิตเหลือมากกว่า ให้ความสำคัญกับเยาวชน"', zh: '👶 救孩子："他的未来还有更多年。优先考虑年轻人。"' }, consequence: { en: '⚖️ Emotional Logic. The child survives. The elderly man passes away. The family thanks you, but guilt lingers.', th: '⚖️ ตรรกะทางอารมณ์ เด็ก รอด ชายชราเสียชีวิต ครอบครัวขอบคุณ แต่ความรู้สึกผิดยังคงอยู่', zh: '⚖️ 情感逻辑。孩子幸存下来。老人去世了。家人感谢你，但内疚感挥之不去。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '👴 Save the Elderly Man: "He is closest to me. Triage rules say treat the most salvageable first."', th: '👴 ช่วยชายชรา: "เขาอยู่ใกล้ฉันที่สุด กฎการคัดแยกบอกว่ารักษาคนที่รอดง่ายสุดก่อน"', zh: '👴 救老人："他离我最近。分诊规则说先治疗最有救的人。"' }, consequence: { en: '📜 Strict Protocol. The man survives. The child dies before backup arrives. Public outcry is immense.', th: '📜 ตามระเบียบเคร่งครัด ชายชรารอด เด็กตายก่อนกำลังเสริมมา ประชาชนโกรธแค้น', zh: '📜 严格的协议。老人生还。孩子在支援到达前死亡。公众强烈抗议。' }, stats: { competence: 60, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🔄 Split Supplies: "Divide the supplies! Half dose for each! Try to buy time for both!"', th: '🔄 แบ่งอุปกรณ์: "แบ่งอุปกรณ์! คนละครึ่งโดส! พยายามซื้อเวลาให้ทั้งคู่!"', zh: '🔄 分物资："分物资！每人半剂量！试图为两人争取时间！"' }, consequence: { en: '⚡ High Risk. Both stabilize marginally. Backup arrives just in time. You saved two lives by breaking protocol.', th: '⚡ ความเสี่ยงสูง ทั้งคู่ประคองอาการได้ กำลังเสริมมาทันเวลา คุณช่วยสองชีวิตโดยฝ่าฝืนกฎ', zh: '⚡ 高风险。两人勉强稳定。支援及时赶到。你通过打破协议救了两条命。' }, stats: { competence: 80, ethics: 70, leadership: 70, innovation: 80 } },
            { id: 'D', text: { en: '📢 Call for Help: "I can\'t choose! Scream for bystanders to apply pressure!"', th: '📢 ร้องขอความช่วยเหลือ: "ฉันเลือกไม่ได้! ตะโกนให้คนมุงช่วยกดแผล!"', zh: '📢 求助："我无法选择！大声呼喊旁观者施压！"' }, consequence: { en: '🤝 Community Effort. Bystanders help. It\'s chaotic but effective. Both survive with minor complications.', th: '🤝 ความพยายามของชุมชน คนมุงช่วย วุ่นวายแต่ได้ผล ทั้งคู่รอดโดยมีภาวะแทรกซ้อนเล็กน้อย', zh: '🤝 社区努力。旁观者帮忙。很混乱但有效。两人都在轻微并发症下幸存。' }, stats: { competence: 60, ethics: 60, leadership: 80, innovation: 60 } }
        ]
    },
    {
        id: 'paramedic_002',
        text: {
            en: '💉 The Overdose: A known drug user is unconscious. Breathing is shallow using Narcan will wake him immediately, but he often becomes violent.',
            th: '💉 การใช้ยาเกินขนาด: ผู้ใช้ยาเสพติดหมดสติ หายใจตื้น การใช้ Narcan จะทำให้เขาตื่นทันที แต่เขามักจะก้าวร้าว',
            zh: '💉 过量：一名已知的吸毒者昏迷。呼吸浅。使用纳洛酮会让他立即醒来，但他经常变得暴力。'
        },
        options: [
            { id: 'A', text: { en: '💥 Full Dose Narcan: "Wake him up now! Breathing is priority!"', th: '💥 Narcan เต็มโดส: "ปลุกเขาเดี๋ยวนี้! หายใจสำคัญที่สุด!"', zh: '💥 全剂量纳洛酮："现在叫醒他！呼吸是首要任务！"' }, consequence: { en: '🥊 Immediate Wake-Up. He wakes up swinging. You get punched in the face but he is breathing.', th: '🥊 ตื่นทันที เขาตื่นมาเหวี่ยงหมัด คุณโดนชกหน้าแต่เขาหายใจ', zh: '🥊 立即醒来。他醒来就挥拳。你被打了一拳但他有呼吸。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '💧 Tiltration: "Give small increments. Just enough to restore breathing, not full wakefulness."', th: '💧 ให้ทีละน้อย: "ให้ทีละนิด แค่พอให้หายใจได้ ไม่ต้องตื่นเต็มที่"', zh: '💧 滴定："少量给药。足以恢复呼吸，而不是完全清醒。"' }, consequence: { en: '🧠 Smart Medicine. He breathes but stays drowsy. Safe transport. Perfect execution.', th: '🧠 การแพทย์ฉลาด เขาหายใจแต่ยังง่วง ขนส่งปลอดภัย ปฏิบัติงานสมบูรณ์แบบ', zh: '🧠 聪明的医学。他呼吸但保持困倦。安全转运。完美执行。' }, stats: { competence: 80, ethics: 70, leadership: 60, innovation: 70 } },
            { id: 'C', text: { en: '👮 Wait for Police: "Scene unsafe. Wait for PD to restrain him first."', th: '👮 รอตำรวจ: "พื้นที่ไม่ปลอดภัย รอตำรวจมาจับเขาก่อน"', zh: '👮 等警察："现场不安全。先等警察制服他。"' }, consequence: { en: '⏳ Hypoxia. He stops breathing while you wait. Brain damage occurs. Safety first, but at a cost.', th: '⏳ ขาดออกซิเจน เขาหยุดหายใจขณะที่คุณรอ สมองเสียหาย ปลอดภัยไว้ก่อนแต่มีราคาต้องจ่าย', zh: '⏳ 缺氧。你在等待时他停止呼吸。发生脑损伤。安全第一，但有代价。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🌬️ Bag Him: "Just ventilate with BVM. Let the drugs wear off naturally. No Narcan."', th: '🌬️ ใช้ BVM: "แค่ช่วยหายใจด้วย BVM ปล่อยให้ยาหมดฤทธิ์เอง ไม่ใช้ Narcan"', zh: '🌬️ 手动通气："只用球囊面罩通气。让药物自然消退。不用纳洛酮。"' }, consequence: { en: '🏋️ Exhausting but Safe. You bag him for 45 minutes to the hospital. He wakes up calm.', th: '🏋️ เหนื่อยแต่ปลอดภัย คุณช่วยหายใจให้เขา 45 นาทีจนถึงโรงพยาบาล เขาตื่นมาสงบ', zh: '🏋️ 累但安全。你在去医院的路上给他通气了45分钟。他醒来很平静。' }, stats: { competence: 70, ethics: 60, leadership: 50, innovation: 40 } }
        ]
    },
    {
        id: 'paramedic_003',
        text: {
            en: '🚔 The VIP Request: The Mayor has a minor cut but demands an ambulance ride to skip the ER wait. A cardiac call is pending nearby.',
            th: '🚔 คำขอ VIP: นายกเทศมนตรีมีแผลเล็กน้อยแต่ต้องการรถพยาบาลเพื่อลัดคิว ER มีเคสหัวใจรออยู่ใกล้ๆ',
            zh: '🚔 VIP请求：市长受了轻伤，但要求坐救护车以跳过急诊室等待。附近有一个心脏呼叫正在等待。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Refuse Transport: "Sir, this is not an emergency. We have a cardiac arrest. Grab a taxi."', th: '🛑 ปฏิเสธการขนส่ง: "ท่านครับ นี่ไม่ใช่ฉุกเฉิน เรามีเคสหัวใจหยุดเต้น เรียกรถแท็กซี่เถอะ"', zh: '🛑 拒绝转运："先生，这不是紧急情况。我们有心脏骤停。打的士吧。"' }, consequence: { en: '🏆 Integrity Win. You save the cardiac patient. Mayor is furious but public praises you.', th: '🏆 ชนะด้วยความซื่อสัตย์ คุณช่วยผู้ป่วยหัวใจ นายกโกรธแต่ประชาชนชื่นชม', zh: '🏆 正直获胜。你救了心脏病患者。市长很生气但公众称赞你。' }, stats: { competence: 70, ethics: 90, leadership: 80, innovation: 20 } },
            { id: 'B', text: { en: '🚑 Transport Mayor: "He is the boss. We have to follow orders. Dispatch another unit to the cardiac."', th: '🚑 ขนส่งนายก: "เขาเป็นเจ้านาย เราต้องทำตามคำสั่ง ส่งอีกคันไปหาเคสหัวใจ"', zh: '🚑 转运市长："他是老板。我们必须服从命令。派另一个单位去心脏病案。"' }, consequence: { en: '💀 Moral Failure. Cardiac patient dies due to delay. You kept your job but lost your soul.', th: '💀 ความล้มเหลวทางศีลธรรม ผู้ป่วยหัวใจตายเพราะล่าช้า คุณรักษางานแต่สูญเสียจิตวิญญาณ', zh: '💀 道德败坏。心脏病患者因延误死亡。你保住了工作但失去了灵魂。' }, stats: { competence: 30, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🩹 Treat & Leave: "I\'ll bandage you up right here, Sir. Signed refusal of transport. Go!"', th: '🩹 รักษาแล้วไป: "ผมจะทำแผลให้ตรงนี้ครับท่าน เซ็นปฏิเสธการขนส่ง ไป!"', zh: '🩹 治疗并离开："我会在这里给你包扎，先生。签署拒绝转运。走！"' }, consequence: { en: '⚡ Efficient. Mayor is annoyed but medically stable. You make it to the cardiac call in time.', th: '⚡ มีประสิทธิภาพ นายกรำคาญแต่นิ่งทางการแพทย์ คุณไปทันเคสหัวใจ', zh: '⚡ 高效。市长很恼火但医疗稳定。你及时赶到了心脏病案。' }, stats: { competence: 60, ethics: 70, leadership: 60, innovation: 50 } },
            { id: 'D', text: { en: '🎭 Fake Breakdown: "Oh no! Engine trouble! Call another rig for the Mayor! We\'re out of service!"', th: '🎭 แกล้งรถเสีย: "โอ้ไม่! เครื่องยนต์มีปัญหา! รถอื่นมารับนายก! เรางดให้บริการ!"', zh: '🎭 假装故障："哦不！引擎故障！叫另一辆车来接市长！我们暂停服务！"' }, consequence: { en: '🤥 Risky Lie. You speed to the cardiac call secretly. Mayor finds out later. Trouble ahead.', th: '🤥 โกหกเสี่ยง คุณซิ่งไปหาเคสหัวใจ \'ลับๆ\' นายกรู้ทีหลัง ปัญหาตามมา', zh: '🤥 冒险的谎言。你"秘密地"加速去心脏病案。市长后来发现了。麻烦在后头。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 70 } }
        ]
    },
    {
        id: 'paramedic_004',
        text: {
            en: '🏚️ The Hoarder House: Patient has chest pain inside a house filled with trash floor-to-ceiling. No room for a stretcher. Rats are visible.',
            th: '🏚️ บ้านนักสะสมขยะ: ผู้ป่วยเจ็บหน้าอกในบ้านเต็มไปด้วยขยะจากพื้นถึงเพดาน ไม่มีที่สำหรับเปล เห็นหนูวิ่ง',
            zh: '🏚️ 囤积者之家：病人在充满垃圾的房子里胸痛，垃圾从地板堆到天花板。没有担架的空间。可见老鼠。'
        },
        options: [
            { id: 'A', text: { en: '🤏 Fireman Carry: "Lift him out manually! Watch your step! Ignore the smell!"', th: '🤏 อุ้มออก: "อุ้มเขาออกมาเอง! ระวังเท้า! เมินกลิ่น!"', zh: '🤏 消防员搬运："手动把他抬出来！注意脚下！忽略气味！"' }, consequence: { en: '💪 Physical Feat. You get him out fast. Back injury risk high, but patient is safe.', th: '💪 ความสามารถทางกาย เอาเขาออกมาเร็ว เสี่ยงเจ็บหลัง แต่ผู้ป่วยปลอดภัย', zh: '💪 身体壮举。你很快把他弄出来了。背部受伤风险高，但病人安全。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🚒 Call Fire Dept: "Need extraction team! Cut a hole in the wall if needed!"', th: '🚒 เรียกดับเพลิง: "ต้องการทีมกู้ภัย! เจาะกำแพงถ้าจำเป็น!"', zh: '🚒 叫消防队："需要提取小组！如果有必要在墙上开个洞！"' }, consequence: { en: '🧱 Structural Solution. Takes 20 minutes but safe extraction. Patient condition worsens slightly.', th: '🧱 ทางออกโครงสร้าง ใช้เวลา 20 นาทีแต่ปลอดภัย อาการผู้ป่วยแย่ลงเล็กน้อย', zh: '🧱 结构性解决方案。需要20分钟但安全提取。病人情况略有恶化。' }, stats: { competence: 50, ethics: 50, leadership: 60, innovation: 40 } },
            { id: 'C', text: { en: '🧹 Clear a Path: "Start throwing trash! Make a path! We need the stretcher in!"', th: '🧹 เคลียร์ทาง: "เริ่มโยนขยะ! ทำทาง! เราต้องเอาเปลเข้าไป!"', zh: '🧹 清理道路："开始扔垃圾！开辟道路！我们需要担架进去！"' }, consequence: { en: '🦠 Hazardous Exposure. You disturb dust/mold. Crew gets sick later. Not effective.', th: '🦠 สัมผัสอันตราย คุณรบกวนฝุ่น/เชื้อรา ทีมป่วยทีหลัง ไม่ได้ผล', zh: '🦠 危险暴露。你扰动了灰尘/霉菌。船员后来生病了。无效。' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '💊 Treat on Pile: "Start IV and miserable meds right here on top of the newspapers."', th: '💊 รักษาบนกองขยะ: "เริ่ม IV และยาตรงนี้บนกองหนังสือพิมพ์"', zh: '💊 文案治疗："就在报纸堆上开始静脉注射和药物治疗。"' }, consequence: { en: '🤢 Unsanitary. Infection risk massive. But you stabilize him before moving. Compromise.', th: '🤢 ไม่ถูกสุขลักษณะ เสี่ยงติดเชื้อสูง แต่คุณคุมอาการก่อนย้าย ประนีประนอม', zh: '🤢 不卫生。感染风险巨大。但在移动之前你稳定了他。折衷。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 } }
        ]
    },
    {
        id: 'paramedic_005',
        text: {
            en: '👶 The Emergency Birth: Crown visible in the ambulance! The cord is wrapped around the baby\'s neck (nuchal cord). Mom is panicking.',
            th: '👶 การคลอดฉุกเฉิน: หัวเด็กโผล่ในรถพยาบาล! สายสะดือพันรอบคอเด็ก (สายสะดือพันคอ) แม่กำลังตื่นตระหนก',
            zh: '👶 紧急分娩：救护车里可见胎头！脐带绕在婴儿脖子上（脐带绕颈）。妈妈很恐慌。'
        },
        options: [
            { id: 'A', text: { en: '✂️ Cut the Cord: "Clamp and cut immediately before delivery!"', th: '✂️ ตัดสายสะดือ: "หนีบและตัดทันทีก่อนคลอด!"', zh: '✂️ 剪断脐带："分娩前立即夹住并剪断！"' }, consequence: { en: '✅ Standard Maneuver. Baby is delivered safely. Breathing starts. Textbook handling.', th: '✅ ท่าตามมาตรฐาน เด็กคลอดปลอดภัย เริ่มหายใจ จัดการตามตำรา', zh: '✅ 标准操作。婴儿安全分娩。开始呼吸。教科书式处理。' }, stats: { competence: 70, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🤏 Slip Over Head: "Try to slip the cord over the baby\'s head gently."', th: '🤏 รูดข้ามหัว: "พยายามรูดสายสะดือข้ามหัวเด็กเบาๆ"', zh: '🤏 滑过头顶："试着把脐带轻轻滑过婴儿的头。"' }, consequence: { en: '🏆 Gentle Success. It works! Cord stays intact. Baby born pink and crying. Best outcome.', th: '🏆 ความสำเร็จนุ่มนวล ได้ผล! สายสะดือไม่ขาด เด็กเกิดมาตัวชมพูร้องไห้ ผลลัพธ์ดีสุด', zh: '🏆 温柔的成功。奏效了！脐带完好无损。婴儿出生时粉红色并哭泣。最好的结果。' }, stats: { competence: 80, ethics: 70, leadership: 60, innovation: 40 } },
            { id: 'C', text: { en: '💨 Push Through: "Tell mom to push hard! Deliver through the cord!"', th: '💨 ดันทะลุ: "บอกแม่เบ่งแรงๆ! คลอดทะลุสายสะดือ!"', zh: '💨 用力推："告诉妈妈用力推！穿过脐带分娩！"' }, consequence: { en: '❌ Dangerous. Cord tightens. Baby hypoxic. Complications arise. Bad technique.', th: '❌ อันตราย สายสะดือรัดแน่น เด็กขาดออกซิเจน เกิดภาวะแทรกซ้อน เทคนิคแย่', zh: '❌ 危险。脐带收紧。婴儿缺氧。出现并发症。技术糟糕。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🩸 Emergency C-Section: "We can\'t deliver! Drive faster to hospital!"', th: '🩸 ผ่าคลอดฉุกเฉิน: "คลอดไม่ได้! ขับไปโรงพยาบาลเร็วขึ้น!"', zh: '🩸 紧急剖腹产："我们不能分娩！开快点去医院！"' }, consequence: { en: '🚫 Delay. Baby is stuck. Delivery happens anyway but uncontrolled. Messy and risky.', th: '🚫 ล่าช้า เด็กติด คลอดออกมาอยู่ดีแต่คุมไม่ได้ เละเทะและเสี่ยง', zh: '🚫 延误。婴儿卡住了。分娩无论如何都会发生，但无法控制。混乱且危险。' }, stats: { competence: 20, ethics: 30, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_006',
        text: {
            en: '🔫 The Gang Standoff: You arrive at a shooting. Police are not there yet. Victim is bleeding out in the street. Gang members are watching.',
            th: '🔫 การเผชิญหน้าแก๊ง: คุณมาถึงจุดยิงกัน ตำรวจยังไม่มา เหยื่อเลือดไหลหมดตัวบนถนน สมาชิกแก๊งกำลังมองดู',
            zh: '🔫帮派对峙：你到达枪击现场。警察还没到。受害者在街上流血。帮派成员在看。'
        },
        options: [
            { id: 'A', text: { en: '🏃‍♂️ Scoop and Run: "Grab him! Throw him in! Go! Go! Go!"', th: '🏃‍♂️ รีบอุ้มแล้วไป: "จับเขา! โยนเข้าไป! ไป! ไป! ไป!"', zh: '🏃‍♂️ 抱起就跑："抓住他！把他扔进去！走！走！走！"' }, consequence: { en: '⚡ High Stakes. You save him, but take fire as you leave. Bullet hole in ambulance. Adrenaline spike.', th: '⚡ เดิมพันสูง คุณช่วยเขา แต่โดนยิงตอนออก รูกระสุนที่รถพยาบาล อะดรีนาลีนพุ่ง', zh: '⚡ 高风险。你救了他，但在离开时遭到枪击。救护车上有弹孔。肾上腺素飙升。' }, stats: { competence: 70, ethics: 60, leadership: 80, innovation: 50 } },
            { id: 'B', text: { en: '🛑 Wait for PD: "Staging area! We don\'t enter until scene is secure!"', th: '🛑 รอตำรวจ: "จุดพักรอ! เราไม่เข้าจนกว่าพื้นที่จะปลอดภัย!"', zh: '🛑 等警察："集结区！在现场安全之前我们不进去！"' }, consequence: { en: '💀 Safety First. Victim dies waiting. Gang blames you. Protocol followed, but life lost.', th: '💀 ปลอดภัยไว้ก่อน เหยื่อตายขณะรอ แก๊งโทษคุณ ทำตามระเบียบ แต่เสียชีวิต', zh: '💀 安全第一。受害者在等待中死亡。帮派责怪你。遵循协议，但生命逝去。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Negotiate: "I\'m just here to help him. Don\'t shoot. Let me work."', th: '🤝 เจรจา: "ฉันมาช่วยเขาเฉยๆ อย่ายิง ให้ฉันทำงาน"', zh: '🤝 谈判："我只是来帮他的。别开枪。让我工作。"' }, consequence: { en: '🎲 Charisma Roll. They respect your courage. You treat him under their watch. Tense but successful.', th: '🎲 วัดดวงคารม พวกเขาเคารพความกล้า คุณรักษาเขาใต้สายตา เครียดแต่สำเร็จ', zh: '🎲 魅力卷。他们尊重你的勇气。你在他们的注视下治疗他。紧张但成功。' }, stats: { competence: 60, ethics: 70, leadership: 90, innovation: 70 } },
            { id: 'D', text: { en: '🚗 Drive By Assessment: "Drive by slowly to check breathing. Too hot to stop."', th: '🚗 ขับผ่านประเมิน: "ขับผ่านช้าๆ ดูการหายใจ ร้อนแรงเกินจะจอด"', zh: '🚗 开车通过评估："慢慢开车通过检查呼吸。太危险了不能停。"' }, consequence: { en: '👎 Useless. You get no info. Victim bleeds out. Waste of resources.', th: '👎 ไร้ประโยชน์ ไม่ได้ข้อมูล เหยื่อเลือดหมด สิ้นเปลืองทรัพยากร', zh: '👎 无用。你没得到任何信息。受害者失血过多。浪费资源。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'paramedic_007',
        text: {
            en: '🧠 The Psychiatric Crisis: Man on a bridge threatening to jump. He says he\'ll talk to a medic, not a cop. Police ask you to approach.',
            th: '🧠 วิกฤตจิตเวช: ชายบนสะพานขู่จะกระโดด เขาบอกจะคุยกับหมอ ไม่ใช่ตำรวจ ตำรวจขอให้คุณเข้าไป',
            zh: '🧠 精神危机：桥上的男子威胁要跳下去。他说他会和医护人员说话，而不是警察。警察让你靠近。'
        },
        options: [
            { id: 'A', text: { en: '🚶 Approach Calmly: "Hi, I\'m [Name]. I\'m here to listen. Tell me what\'s wrong."', th: '🚶 เข้าหาอย่างสงบ: "สวัสดี ผม [ชื่อ] ผมมาฟัง บอกผมสิว่าเป็นอะไร"', zh: '🚶 冷静靠近："嗨，我是[名字]。我是来倾听的。告诉我怎么了。"' }, consequence: { en: '❤️ Empathy Win. He talks. cries. Climbs back over railing. Life saved by words.', th: '❤️ ชนะด้วยความเห็นใจ เขาคุย ร้องไห้ ปีนกลับมา ชีวิตรอดด้วยคำพูด', zh: '❤️ 同理心获胜。他说话。哭泣。爬回栏杆。言语挽救了生命。' }, stats: { competence: 60, ethics: 80, leadership: 60, innovation: 40 } },
            { id: 'B', text: { en: '💊 Syringe Ready: "Hide a sedative syringe. Get close, then jab him!"', th: '💊 เตรียมเข็ม: "ซ่อนเข็มยาสลบ เข้าใกล้ แล้วฉีด!"', zh: '💊 准备注射器："藏好镇静剂注射器。靠近，然后刺他！"' }, consequence: { en: '⚠️ Fight. He sees it. Struggles. Almost falls. Police have to tackle him. Risky.', th: '⚠️ ต่อสู้ เขาเห็น ดิ้น เกือบตก ตำรวจต้องชาร์จ เสี่ยง', zh: '⚠️ 打斗。他看见了。挣扎。差点摔倒。警察必须抓住他。危险。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 20 } },
            { id: 'C', text: { en: '🛑 Refuse: "I\'m not a negotiator. Wait for SWAT crisis team."', th: '🛑 ปฏิเสธ: "ฉันไม่ใช่นักเจรจา รอทีมวิกฤต SWAT"', zh: '🛑 拒绝："我不是谈判专家。等特警危机小组。"' }, consequence: { en: '⏳ Standoff. He jumps before SWAT arrives. Missed opportunity.', th: '⏳ คุมเชิง เขากระโดดก่อน SWAT มา พลาดโอกาส', zh: '⏳ 对峙。在特警到达前他跳了下去。错失良机。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '📢 Megaphone: "Use the PA system from safety! \'Don\'t do it!\'"', th: '📢 โทรโข่ง: "ใช้ระบบเสียงจากที่ปลอดภัย! \'อย่าทำนะ!\'"', zh: '📢 扩音器："在安全的地方使用广播系统！\'别这么做！\'"' }, consequence: { en: '👂 Impersonal. He feels ignored. "You don\'t care!" Emotional escalation.', th: '👂 ไม่เป็นส่วนตัว เขารู้สึกถูกเมิน "คุณไม่สน!" อารมณ์พุ่งพล่าน', zh: '👂 冷漠。他觉得被忽视了。"你不在乎！"情绪升级。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'paramedic_008',
        text: {
            en: '⛷️ The Ski Resort Fracture: Skier hit a tree. Femur fracture (thigh bone) deformity. Screaming in agony on snowy slope. Cold is setting in.',
            th: '⛷️ กระดูกหักที่ลานสกี: นักสกีชนต้นไม้ กระดูกต้นขาหักผิดรูป ร้องครวญครางบนเนินหิมะ ความหนาวเริ่มมา',
            zh: '⛷️ 滑雪胜地骨折：滑雪者撞到树。股骨骨折（大腿骨）畸形。在雪坡上痛苦尖叫。寒冷袭来。'
        },
        options: [
            { id: 'A', text: { en: '🦴 Traction Splint: "Apply traction splint immediately to realign bone and reduce pain."', th: '🦴 ดึงกระดูก: "ใส่เฝือกดึงทันทีเพื่อจัดกระดูกและลดปวด"', zh: '🦴 牵引夹板："立即使用牵引夹板重新对齐骨骼并减轻疼痛。"' }, consequence: { en: '✅ Textbook. Pain reduced significantly. Blood loss minimized. Good PMS (Pulse, Motor, Sensory).', th: '✅ ตามตำรา ปวดลดลงมาก เสียเลือดน้อยลง PMS ดี (ชีพจร, การขยับ, ความรู้สึก)', zh: '✅ 教科书式。疼痛显著减轻。失血最小化。良好的PMS（脉搏，运动，感觉）。' }, stats: { competence: 80, ethics: 60, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '💊 Pain Meds First: "IV Morphine! Manage pain before moving anything!"', th: '💊 ยาแก้ปวดก่อน: "ฉีดมอร์ฟีน! จัดการความปวดก่อนขยับอะไร!"', zh: '💊 先给止痛药："静脉注射吗啡！在移动任何东西之前控制疼痛！"' }, consequence: { en: '❄️ Hypothermia Risk. Starting IV in snow takes time. Patient gets colder. Priorities mixed.', th: '❄️ เสี่ยงตัวเย็นเกิน เริ่ม IV ในหิมะใช้เวลา ผู้ป่วยหนาวขึ้น ลำดับความสำคัญปนกัน', zh: '❄️ 体温过低风险。在雪地里开始静脉注射需要时间。病人变得更冷。优先级混乱。' }, stats: { competence: 50, ethics: 70, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🎒 Scoop and Go: "Just put him on the sled as is! Fix it in the warm ambulance!"', th: '🎒 ตักแล้วไป: "เอาเขาขึ้นเลื่อนสภาพนั้นเลย! ไปแก้ในรถอุ่น!"', zh: '🎒 铲起就走："就这样把他放在雪橇上！在温暖的救护车里修理！"' }, consequence: { en: '😖 Agony. The ride down is torture. Muscle spasms cause further damage. Fast but cruel.', th: '😖 ทรมาน การนั่งลงไปคือการทรมาน กล้ามเนื้อเกร็งทำลายเพิ่ม เร็วแต่โหดร้าย', zh: '😖 痛苦。下来的路程是折磨。肌肉痉挛造成进一步伤害。快但残酷。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🏒 Improvise Splint: "Use ski poles to splint the leg! We don\'t have the big kit!"', th: '🏒 เฝือกด้นสด: "ใช้ไม้สกีดามขา! เราไม่มีชุดใหญ่!"', zh: '🏒 即兴夹板："用滑雪杖做夹板！我们没有大包！"' }, consequence: { en: '🛠️ Resourceful. Works well enough to transport down. Good improvisation.', th: '🛠️ หัวไว ใช้ได้ดีพอขนลงมา การด้นสดที่ดี', zh: '🛠️ 足智多谋。足以运送下来。很好的即兴发挥。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 80 } }
        ]
    },
    {
        id: 'paramedic_009',
        text: {
            en: '👵 The DNR Confusion: 90 y/o female cardiac arrest. Family says "She has a DNR!" but can\'t find the paper. Rules say: No paper = Start CPR.',
            th: '👵 ความสับสน DNR: หญิง 90 ปี หัวใจหยุดเต้น ครอบครัวบอก "เธอมีใบ DNR!" แต่หาไม่เจอ กฎบอก: ไม่มีใบ = ปั๊มหัวใจ',
            zh: '👵 放弃抢救困惑：90岁女性心脏骤停。家人说"她有放弃抢救书！"但找不到文件。规则说：没有文件=开始心肺复苏。'
        },
        options: [
            { id: 'A', text: { en: '💔 Start CPR: "Sorry, I need the paper. Starting compressions."', th: '💔 เริ่ม CPR: "ขอโทษครับ ผมต้องเห็นใบ เริ่มปั๊ม"', zh: '💔 开始心肺复苏："对不起，我需要文件。开始按压。"' }, consequence: { en: '🦴 Ribs Break. You perform CPR on a frail lady. Family screams "Stop!" Paper found 10 mins later. Trauma.', th: '🦴 ซี่โครงหัก คุณปั๊มหัวใจหญิงเปราะบาง ครอบครัวตะโกน "หยุด!" ใบเจอ 10 นาทีทีหลัง แผลใจ', zh: '🦴 肋骨断裂。你对一位虚弱的女士进行心肺复苏。家属尖叫"停！"10分钟后找到文件。创伤。' }, stats: { competence: 60, ethics: 30, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🛑 Honor Family Word: "I believe you. She is 90. We will not resuscitate."', th: '🛑 ให้เกียรติคำพูด: "ผมเชื่อคุณ เธอ 90 แล้ว เราจะไม่กู้ชีพ"', zh: '🛑 尊重家人的话："我相信你。她90岁了。我们将不抢救。"' }, consequence: { en: '⚖️ Ethical Risk. You respected wishes, but technically broke the law. Medical director reviews case.', th: '⚖️ เสี่ยงจริยธรรม คุณเคารพเจตนา แต่เทคนิคผิดกฎหมาย ผู้อำนวยการแพทย์ทบทวนเคส', zh: '⚖️ 伦理风险。你尊重意愿，但在技术上违反了法律。医疗主管审查案件。' }, stats: { competence: 50, ethics: 80, leadership: 60, innovation: 40 } },
            { id: 'C', text: { en: '📞 Call Doc: "Call Medical Control immediately! Get doctor verification over phone!"', th: '📞 โทรหาหมอ: "โทรศูนย์การแพทย์ทันที! ให้หมอยืนยันทางโทรศัพท์!"', zh: '📞 叫医生："立即呼叫医疗控制！通过电话获得医生确认！"' }, consequence: { en: '✅ CYA. Doctor authorizes stopping. You followed chain of command. Best legal protection.', th: '✅ ป้องกันตัว หมออนุญาตให้หยุด คุณทำตามสายบังคับบัญชา คุ้มครองกฎหมายดีสุด', zh: '✅ 保护自己。医生授权停止。你遵循了指挥链。最好的法律保护。' }, stats: { competence: 70, ethics: 70, leadership: 50, innovation: 20 } },
            { id: 'D', text: { en: '🐢 Slow Code: "Do very light compressions. Pretend to work until paper is found."', th: '🐢 โค้ดช้า: "ปั๊มเบาๆ แกล้งทำจนกว่าจะเจอใบ"', zh: '🐢 缓慢代码："做非常轻的按压。假装工作直到找到文件。"' }, consequence: { en: '🚫 Unethical. Dishonest medicine. Worst of both worlds. Don\'t do this.', th: '🚫 ผิดจริยธรรม การแพทย์ไม่ซื่อสัตย์ แย่ทั้งสองทาง อย่าทำ', zh: '🚫 不道德。不诚实的医学。两全其害。别这样做。' }, stats: { competence: 20, ethics: -50, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_010',
        text: {
            en: '💉 The Impossible IV: Dehydrated baby needs fluids. veins are flat. You tried twice and missed. Mom is crying "Stop poking him!"',
            th: '💉 เจาะเส้นเป็นไปไม่ได้: เด็กขาดน้ำต้องการน้ำเกลือ เส้นแบน คุณลองสองครั้งพลาด แม่ร้อง "หยุดแทงเขา!"',
            zh: '💉 不可能的静脉注射：脱水婴儿需要补液。静脉扁平。你试了两次都失败了。妈妈在哭"别戳他了！"'
        },
        options: [
            { id: 'A', text: { en: '🦴 Drill IO: "Intraosseous access! Drill into the shin bone! 100% success rate!"', th: '🦴 เจาะ IO: "ทางกระดูก! เจาะเข้าหน้าแข้ง! สำเร็จ 100%!"', zh: '🦴 骨内输液："骨内通路！钻入胫骨！100%成功率！"' }, consequence: { en: '⚡ Intense but Critical. Mom freaks out at the drill, but fluids go in immediately. Baby perks up.', th: '⚡ รุนแรงแต่วิกฤต แม่แตกตื่นที่เห็นสว่าน แต่น้ำเกลือเข้าทันที เด็กดีขึ้น', zh: '⚡ 激烈但关键。妈妈对钻头吓坏了，但是液体立即进去了。婴儿好转。' }, stats: { competence: 80, ethics: 60, leadership: 60, innovation: 70 } },
            { id: 'B', text: { en: '👀 Try Again: "I need focus. One more try in the scalp vein."', th: '👀 ลองอีกครั้ง: "ขอสมาธิ ลองอีกทีที่เส้นหัว"', zh: '👀 再试一次："我需要专注。再试一次头皮静脉。"' }, consequence: { en: '❌ Failure. You miss again. Now you have 3 holes and no access. Mom kicks you out.', th: '❌ ล้มเหลว พลาดอีก ตอนนี้มี 3 รู ไม่มีทางเข้า แม่ไล่คุณออก', zh: '❌ 失败。你又错过了。现在你有3个洞但没有通路。妈妈把你赶出去了。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🚑 Transport & Monitor: "Forget the IV. Just drive safely. Hospital has ultrasound."', th: '🚑 ขนส่งและดู: "ลืม IV ขับปลอดภัยพอ โรงพยาบาลมีอัลตราซาวด์"', zh: '🚑 转运和监控："忘掉静脉注射。安全驾驶。医院有超声波。"' }, consequence: { en: '🏥 Safe Deferral. Baby arrives stable-ish. Sometimes knowing when to stop is a skill.', th: '🏥 เลื่อนปลอดภัย เด็กมาถึงพอไหว บางทีการรู้ว่าเมื่อไหร่ควรหยุดคือทักษะ', zh: '🏥 安全延期。婴儿到达时还算稳定。有时知道何时停止是一种技能。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 10 } },
            { id: 'D', text: { en: '🧴 Rectal Fluids: "Old school trick. Fluids per rectum. No needles."', th: '🧴 น้ำเกลือทางทวาร: "ทริคโรงเรียนเก่า น้ำเกลือทางก้น ไม่ใช้เข็ม"', zh: '🧴 直肠补液："老派技巧。直肠补液。不用针。"' }, consequence: { en: '🤨 Weird but Works. It absorbs slowly. Mom is confused but allows it. Creative.', th: '🤨 แปลกแต่ได้ผล ดูดซึมช้า แม่ งงแต่ยอม สร้างสรรค์', zh: '🤨 奇怪但有效。吸收缓慢。妈妈很困惑但允许了。有创意。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 80 } }
        ]
    },
    {
        id: 'paramedic_011',
        text: {
            en: '🐝 The EpiPen Shortage: You have ONE EpiPen left. Two patients stung by bees, both wheezing. One is 20, one is 60. Who gets it?',
            th: '🐝 EpiPen ขาดแคลน: คุณเหลือ EpiPen อันเดียว ผู้ป่วยสองคนโดนผึ้งต่อย หอบทั้งคู่ คนหนึ่ง 20 คนหนึ่ง 60 ให้ใคร?',
            zh: '🐝 EpiPen短缺：你只剩下一支EpiPen。两名患者被蜜蜂蜇伤，都在喘息。一个是20岁，一个是60岁。给谁？'
        },
        options: [
            { id: 'A', text: { en: '🧑 Give to 20 y/o: "Younger patient has stronger immune response, might close airway faster."', th: '🧑 ให้คน 20: "คนหนุ่มสาวมีภูมิคุ้มกันแรงกว่า อาจปิดทางเดินหายใจเร็วกว่า"', zh: '🧑 给20岁的："年轻患者有更强的免疫反应，气道可能关闭得更快。"' }, consequence: { en: '✅ Logical Triage. 20y/o recovers. 60y/o struggles but survives with neb treatments.', th: '✅ คัดแยกมีเหตุผล 20ปีหาย 60ปีลำบากแต่รอดด้วยยาพ่น', zh: '✅ 逻辑分诊。20岁康复。60岁挣扎但通过雾化治疗幸存。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '👴 Give to 60 y/o: "Older patient has less reserve. Can\'t handle hypoxia."', th: '👴 ให้คน 60: "คนแก่มีทุนสำรองน้อยกว่า ทนขาดออกซิเจนไม่ได้"', zh: '👴 给60岁的："老年患者储备较少。无法承受缺氧。"' }, consequence: { en: '⚖️ Compassion. 60y/o needed it more. 20y/o toughs it out. Good clinical judgment.', th: '⚖️ ความเห็นใจ 60ปีต้องการมากกว่า 20ปีทนไหว วิจารณญาณคลินิกดี', zh: '⚖️ 同情心。60岁更需要它。20岁挺过来了。良好的临床判断。' }, stats: { competence: 70, ethics: 60, leadership: 60, innovation: 40 } },
            { id: 'C', text: { en: '💉 Split the Dose: "Draw it out with a syringe! Split 0.15mg each!"', th: '💉 แบ่งโดส: "ดูดออกมาใส่เข็ม! แบ่งคนละ 0.15mg!"', zh: '💉 分剂量："用注射器抽出来！每人0.15毫克！"' }, consequence: { en: '🏆 MacGyver Move. You improvise and save both. Requires manual dexterity. High skill.', th: '🏆 ท่า MacGyver คุณด้นสดช่วยทั้งคู่ ต้องมือแม่น ทักษะสูง', zh: '🏆 百战天龙式操作。你即兴发挥救了两人。需要手巧。高技能。' }, stats: { competence: 90, ethics: 80, leadership: 80, innovation: 90 } },
            { id: 'D', text: { en: '🚑 Drive Fast: "No Epi for anyone. Oxygen only. Diesel therapy."', th: '🚑 ขับเร็ว: "ไม่มี Epi ให้ใคร ออกซิเจนอย่างเดียว ดีเซลบำบัด"', zh: '🚑 开快点："谁都不给Epi。只有氧气。柴油疗法。"' }, consequence: { en: '🤒 Poor Care. Both worsen enroute. You failed to utilize resources.', th: '🤒 การดูแลแย่ ทั้งคู่แย่ลงระหว่างทาง คุณล้มเหลวในการใช้ทรัพยากร', zh: '🤒 护理不佳。途中两人都恶化。你未能利用资源。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_012',
        text: {
            en: '🔥 The Burn Victim: 60% body burns. In agony. BP is dropping (shock). Pain meds lower BP further. Do you treat pain or shock?',
            th: '🔥 เหยื่อไฟไหม้: ไหม้ 60% ทรมาน ความดันตก (ช็อก) ยาแก้ปวดทำความดันตกอีก รักษาปวดหรือช็อก?',
            zh: '🔥 烧伤受害者：60%身体烧伤。痛苦。血压下降（休克）。止痛药会进一步降低血压。你治疗疼痛还是休克？'
        },
        options: [
            { id: 'A', text: { en: '💊 Give Fentanyl: "Can\'t let him suffer like this. Small doses titrate carefully."', th: '💊 ให้ Fentanyl: "ปล่อยให้ทรมานแบบนี้ไม่ได้ ให้โดสเล็กๆ ค่อยๆ ปรับ"', zh: '💊 给芬太尼："不能让他这样受苦。小剂量仔细滴定。"' }, consequence: { en: '❤️ Humane Care. BP dips slightly but fluids compensate. He is grateful.', th: '❤️ ดูแลอย่างมนุษย์ ความดันตกนิดหน่อยแต่น้ำเกลือช่วย เขาซึ้งใจ', zh: '❤️ 人道护理。血压略有下降，但液体补偿。他很感激。' }, stats: { competence: 60, ethics: 80, leadership: 50, innovation: 40 } },
            { id: 'B', text: { en: '🩸 Fluids Only: "BP is priority. No pain meds until stable pressure. Sorry buddy."', th: '🩸 น้ำเกลืออย่างเดียว: "ความดันกสำคัญสุด ไม่ให้ยาแก้ปวดจนกว่าจะนิ่ง โทษนะเพื่อน"', zh: '🩸 只给液体："血压是首要任务。直到压力稳定才给止痛药。抱歉伙计。"' }, consequence: { en: '😖 Necessary Cruelty. He survives shock but screams the whole way. Trauma incresed.', th: '😖 ความโหดร้ายที่จำเป็น เขารอดช็อกแต่ร้องตลอดทาง เพิ่มความเจ็บช้ำ', zh: '😖 必要的残酷。他幸存于休克但一路尖叫。创伤增加。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🌡️ Ketamine: "Dissociative anesthetic! Treats pain AND supports BP! Magic drug!"', th: '🌡️ คีตามีน: "ยาสลบแยกตัว! รักษาปวด และช่วยความดัน! ยาวิเศษ!"', zh: '🌡️ 氯胺酮："分离性麻醉剂！治疗疼痛并支持血压！神药！"' }, consequence: { en: '🏆 Perfect Pharmacology. Ketamine is the ideal choice here. Patient is in space, body is stable.', th: '🏆 เภสัชวิทยาสมบูรณ์ คีตามีนคือทางเลือกอุดมคติ ผู้ป่วยลอยลำ ร่างกายนิ่ง', zh: '🏆 完美的药理学。氯胺酮是这里的理想选择。病人在太空中，身体稳定。' }, stats: { competence: 90, ethics: 70, leadership: 60, innovation: 80 } },
            { id: 'D', text: { en: '❄️ Cool Water: "Pour sterile water on burns to soothe pain."', th: '❄️ น้ำเย็น: "เทน้ำสะอาดบนแผลเพื่อลดปวด"', zh: '❄️ 冷水："倒无菌水在烧伤处以减轻疼痛。"' }, consequence: { en: '🥶 Bad Idea. Induces hypothermia in large burns. Condition worsens.', th: '🥶 ไอเดียแย่ ทำให้ตัวเย็นเกินในแผลใหญ่ อาการแย่ลง', zh: '🥶 坏主意。在大面积烧伤中诱发体温过低。病情恶化。' }, stats: { competence: 20, ethics: 50, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_013',
        text: {
            en: '🚔 Police Custody: Suspect tased multiple times. Agitated. Hot skin. Police say "He\'s faking, take him to jail." You suspect Excited Delirium.',
            th: '🚔 การคุมขังตำรวจ: ผู้ต้องสงสัยโดนช็อตไฟฟ้าหลายครั้ง ตื่นเต้น ตัวร้อน ตำรวจบอก "เขาแกล้ง พาไปคุก" คุณสงสัยภาวะคลุ้มคลั่งตื่นตัว',
            zh: '🚔 警方拘留：嫌疑人被泰瑟枪电击多次。激动。皮肤发烫。警察说"他在装，带他去监狱。"你怀疑兴奋性谵妄。'
        },
        options: [
            { id: 'A', text: { en: '🏥 Sedate & Transport: "He needs chemical sedation now! Going to hospital, not jail!"', th: '🏥 ยาสงบและส่ง: "เขาต้องใช้ยาสงบเดี๋ยวนี้! ไปโรงพยาบาล ไม่ใช่คุก!"', zh: '🏥 镇静和转运："他现在需要化学镇静！去医院，不监狱！"' }, consequence: { en: '🏆 Correct Call. Condition is lethal. You save him from cardiac arrest. Cops unhappy but you were right.', th: '🏆 ตัดสินถูก ภาวะนี้ถึงตาย คุณช่วยเขาจากหัวใจหยุด ตำรวจไม่พอใจแต่คุณถูก', zh: '🏆 正确的决定。情况是致命的。你救了他免于心脏骤停。警察不高兴但你是对的。' }, stats: { competence: 80, ethics: 70, leadership: 70, innovation: 50 } },
            { id: 'B', text: { en: '👮 Clear for Jail: "Vitals look okay-ish. Sign release form. Police handle him."', th: '👮 อนุญาตไปคุก: "สัญญาณชีพดูพอไหว เซ็นปล่อย ตำรวจจัดกา"', zh: '👮 批准入狱："生命体征看起来还好。签署释放表。警察处理他。"' }, consequence: { en: '💀 Death in Custody. He codes in the cell an hour later. Inquiry focuses on your clearance.', th: '💀 ตายในคุก เขาหยุดหายใจในห้องขังชั่วโมงถัดมา การสอบสวนพุ่งไปที่การเซ็นของคุณ', zh: '💀 拘留期间死亡。一小时后他在牢房里停搏。调查集中在你的许可上。' }, stats: { competence: 20, ethics: 20, leadership: 0, innovation: 0 } },
            { id: 'C', text: { en: '💧 Cool Down: "Just active cooling. Ice packs. Drink water. Monitor."', th: '💧 ลดความร้อน: "แค่ลดความร้อน ถุงน้ำแข็ง ดื่มน้ำ เฝ้าดู"', zh: '💧 降温："只是主动降温。冰袋。喝水。监控。"' }, consequence: { en: '⚠️ Insufficient. He needs sedation to stop the metabolic storm. Partial success.', th: '⚠️ ไม่พอ เขาต้องการยาสงบเพื่อหยุดพายุเมตาบอลิก สำเร็จบางส่วน', zh: '⚠️ 不足。他需要镇静来停止代谢风暴。部分成功。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🤷 Obey Police: "You guys know him best. If you say he\'s faking, he\'s faking."', th: '🤷 เชื่อตำรวจ: "พวกคุณรู้จักเขาดีสุด ถ้าบอกว่าแกล้ง ก็แกล้ง"', zh: '🤷 服从警察："你们最了解他。如果你们说他在装，他就在装。"' }, consequence: { en: '📉 Negligence. Never let police decide medicine. License revoked.', th: '📉 ละเลย อย่าให้ตำรวจตัดสินการแพทย์ ใบอนุญาตถูกเพิกถอน', zh: '📉 疏忽。永远不要让警察决定医学。执照被吊销。' }, stats: { competence: 10, ethics: 10, leadership: -50, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_014',
        text: {
            en: '🤰 The Eclampsia Seizure: Pregnant patient seizing (eclampsia). Mag Sulfate is the drug. You accidentally draw up too much. Realize before pushing.',
            th: '🤰 ชักครรภ์เป็นพิษ: คนท้องชัก (ครรภ์เป็นพิษ) ยาคือ Mag Sulfate คุณดูดมามากเกินไป รู้ตัวก่อนฉีด',
            zh: '🤰 子痫发作：孕妇癫痫发作（子痫）。硫酸镁是药物。你不小心抽多了。在推注前意识到。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Discard & Redraw: "Dump it! Draw correct 4g dose! Precision matters!"', th: '🛑 ทิ้งและดูดใหม่: "เททิ้ง! ดูดโดส 4g ที่ถูก! ความแม่นยำสำคัญ!"', zh: '🛑 丢弃并重抽："倒掉！抽取正确的4g剂量！精确很重要！"' }, consequence: { en: '✅ Safe. Delay is 30 seconds but overdose is avoided. Good check.', th: '✅ ปลอดภัย ช้า 30 วิแต่เลี่ยงยาเกิน เช็คดี', zh: '✅ 安全。延迟30秒但避免了过量。检查得好。' }, stats: { competence: 70, ethics: 80, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '💉 Give Partial: "Just inject half the syringe. It\'s labeled. I can eyeball it."', th: '💉 ให้บางส่วน: "ฉีดแค่ครึ่งหลอด มีขีดบอก กะด้วยตาได้"', zh: '💉 给部分："只注射半管。有标签。我可以用眼估算。"' }, consequence: { en: '⚠️ Risky Shortcut. Hard to titrate under stress. Not recommended practice.', th: '⚠️ ทางลัดเสี่ยง กะยากตอนเครียด ไม่แนะนำ', zh: '⚠️ 冒险的捷径。压力下难以滴定。不推荐的做法。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '💉 Give It All: "More Mag is better than seizures! Just give it!"', th: '💉 ให้หมด: "Mag เยอะดีกว่าชัก! ให้ไปเลย!"', zh: '💉 全部给："多点镁总比癫痫好！给吧！"' }, consequence: { en: '💀 Respiratory Depression. She stops breathing from Mag toxicity. Now you need Calcium.', th: '💀 กดการหายใจ เธอหยุดหายใจจากพิษ Mag ตอนนี้ต้องใช้แคลเซียม', zh: '💀 呼吸抑制。她因镁中毒停止呼吸。现在你需要钙。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '💊 Give Valium Instead: "Mag is hard to mix. Just give Valium to stop seizure."', th: '💊 ให้ Valium แทน: "Mag ผสมยาก ให้ Valium หยุดชักพอ"', zh: '💊 改给安定："镁很难混合。只给安定停止癫痫。"' }, consequence: { en: '👎 Wrong Drug. Valium stops seizing but doesn\'t fix eclampsia physiology. Baby sedated.', th: '👎 ยาผิด Valium หยุดชักแต่ไม่แก้กลไกครรภ์เป็นพิษ เด็กหลับ', zh: '👎 错药。安定停止癫痫但不能解决子痫生理。婴儿镇静。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'paramedic_015',
        text: {
            en: '🌊 The Flood Rescue: Hurricane aftermath. A family is trapped on a roof. Water is rising. You can fit 3 people in the boat. There are 5: Dad, Mom, Teen, Baby, and Grandma (frail).',
            th: '🌊 การกู้ภัยน้ำท่วม: หลังพายุเฮอริเคน ครอบครัวติดบนหลังคา น้ำขึ้นรับได้ 3 คน มี 5 คน: พ่อ แม่ วัยรุ่น ทารก ยาย (เปราะบาง)',
            zh: '🌊 洪水救援：飓风过后。一家人被困在屋顶。水正在上涨。你的船能装3人。有5人：爸爸、妈妈、青少年、婴儿和奶奶（虚弱）。'
        },
        options: [
            { id: 'A', text: { en: '👶 Grandma & Baby First: "Most vulnerable first. Dad and Teen are strongest. Mom can help Baby."', th: '👶 ยายและทารกก่อน: "อ่อนแอสุดก่อน พ่อกับวัยรุ่นแข็งแรงสุด แม่ช่วยทารกได้"', zh: '👶 奶奶和婴儿优先："最脆弱的优先。爸爸和青少年最强壮。妈妈可以帮婴儿。"' }, consequence: { en: '⚖️ Classic Triage. You take Grandma, Mom, Baby. Dad and Teen wait. Risk they get washed away, but vulnerable are safe.', th: '⚖️ คัดแยกคลาสสิก ยาย แม่ ทารก พ่อกับวัยรุ่นรอ เสี่ยงโดนพัด แต่อนุรักษ์คนอ่อนแอ', zh: '⚖️ 经典分诊。你带走奶奶、妈妈、婴儿。爸爸和青少年等待。他们被冲走的风险，但弱者安全。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '💪 Strongest First: "Take Dad/Teen to help row/rescue others. Grandma slows us down."', th: '💪 แข็งแรงสุดก่อน: "เอาพ่อ/วัยรุ่นไปช่วยพาย/กู้คนอื่น ยายทำเราช้า"', zh: '💪 最强壮优先："带爸爸/青少年去帮助划船/救其他人。奶奶会拖慢我们。"' }, consequence: { en: '😖 Utilitarian. You save the able-bodied. Grandma drowns. Efficient but heartless.', th: '😖 ประโยชน์นิยม ช่วยคนแข็งแรง ยายจมน้ำ มีประสิทธิภาพแต่ไร้หัวใจ', zh: '😖 功利主义。你救了健全人。奶奶淹死了。有效率但无情。' }, stats: { competence: 50, ethics: 20, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🚤 Overload Boat: "Squeeze everyone! Throw equipment overboard! Risk capsizing!"', th: '🚤 อัดคน: "เบียดทุกคน! โยนอุปกรณ์ทิ้ง! เสี่ยงเรือล่ม!"', zh: '🚤 超载："挤进所有人！把设备扔下水！冒翻船风险！"' }, consequence: { en: '🎲 High Risk Gamble. Water laps the gunwales. Engine struggles. You barely make it. Hero or fool?', th: '🎲 เดิมพันสูง น้ำปริ่มขอบ เครื่องคราง รอดหวุดหวิด ฮีโร่หรือโง่?', zh: '🎲 高风险赌博。水拍打着船舷。引擎挣扎。你勉强做到了。英雄还是傻瓜？' }, stats: { competence: 40, ethics: 80, leadership: 30, innovation: 60 } },
            { id: 'D', text: { en: '🚁 Call Air Support: "Too risky for boat. Mark location and wait for chopper."', th: '🚁 เรียกทางอากาศ: "เสี่ยงเกินสำหรับเรือ มาร์คจุดรอฮ." ', zh: '🚁 呼叫空中支援："船太危险。标记位置等直升机。"' }, consequence: { en: '⏳ Uncertainty. Chopper is busy. Water rises. You left them. Bad outcome likely.', th: '⏳ ไม่แน่นอน ฮ.ไม่ว่าง น้ำขึ้น คุณทิ้งพวกเขา ผลลัพธ์แย่', zh: '⏳ 不确定性。直升机很忙。水涨了。你留下了他们。结果可能很糟糕。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_016',
        text: {
            en: '💉 The Hive Mind: Patient with severe allergic reaction. You are out of EpiPens. Your partner suggests using the "veterinary Epi" from the K9 unit vehicle nearby.',
            th: '💉 ความคิดรังผึ้ง: ผู้ป่วยแพ้รุนแรง EpiPen หมด คู่หูแนะนำใช้ "Epi สัตว์" จากรถ K9 แถวนั้น',
            zh: '💉 蜂群思维：严重过敏反应患者。你的EpiPen用完了。你的搭档建议使用附近K9单位车辆的"兽用Epi"。'
        },
        options: [
            { id: 'A', text: { en: '🐶 Use Vet Epi: "Epinephrine is epinephrine! Calculate the dose and inject!"', th: '🐶 ใช้ Epi สัตว์: "Epinephrine ก็คือ Epinephrine! คำนวณโดสแล้วฉีด!"', zh: '🐶 使用兽用Epi："肾上腺素就是肾上腺素！计算剂量并注射！"' }, consequence: { en: '🧪 Chemistry Win. It works perfectly. Patient breathes. You stepped outside protocol to save a life.', th: '🧪 ชนะเคมี ได้ผลสมบูรณ์ ผู้ป่วยหายใจ คุณก้าวข้ามระเบียบเพื่อช่วยชีวิต', zh: '🧪 化学胜利。效果完美。病人呼吸。你走出协议救了一条命。' }, stats: { competence: 80, ethics: 60, leadership: 70, innovation: 90 } },
            { id: 'B', text: { en: '🛑 Refuse: "Not human grade! Not FDA approved for humans! Liable for lawsuit!"', th: '🛑 ปฏิเสธ: "ไม่ใช่เกรดคน! อย.ไม่รับรองคน! โดนฟ้องแน่!"', zh: '🛑 拒绝："不是人用级！未经FDA批准用于人类！容易被起诉！"' }, consequence: { en: '⚰️ Patient Dies. Airway closes while you argue. Legal protection over life.', th: '⚰️ ผู้ป่วยตาย ทางเดินหายใจปิดขณะเถียง กฎหมายสำคัญกว่าชีวิต', zh: '⚰️ 患者死亡。当你争论时气道关闭。法律保护重于生命。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🚑 Drive Faster: "Load and go! Hospital has Epi! Don\'t risk dog drugs!"', th: '🚑 ขับเร็วขึ้น: "ขนแล้วไป! โรงพยาบาลมี Epi! อย่าเสี่ยงยาหมา!"', zh: '🚑 开快点："装车走！医院有Epi！别拿狗药冒险！"' }, consequence: { en: '⚖️ Close Call. Patient turns blue. Hospital saves him just in time.', th: '⚖️ เฉียดฉิว ผู้ป่วยเขียว โรงพยาบาลช่วยทันเวลา', zh: '⚖️ 险情。病人变蓝。医院及时救了他。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '📞 Call Control: "Ask medical director for permission to use K9 meds."', th: '📞 โทรศูนย์: "ขออนุญาตผอ.แพทย์ใช้ยา K9"', zh: '📞 呼叫控制："请求医疗主管允许使用K9药物。"' }, consequence: { en: '✅ Authorized. Doc says "Do it." You have cover. Good process.', th: '✅ อนุมัติ หมอบอก "ทำเลย" มีคนรับรอง กระบวนการดี', zh: '✅ 授权。医生说"做吧。"你有掩护。好的流程。' }, stats: { competence: 60, ethics: 70, leadership: 50, innovation: 30 } }
        ]
    },
    {
        id: 'paramedic_017',
        text: {
            en: '🏚️ The Structure Fire: Firefighters bring out a victim. Soot around mouth. Coughing. You suspect airway burns. He insists "I\'m fine, just smoke."',
            th: '🏚️ ไฟไหม้โครงสร้าง: ดับเพลิงนำเหยื่อออกมา เขม่ารอบปาก ไอ สงสัยทางเดินหายใจไหม้ แต่อ้าง "ผมไม่เป็นไร แค่ควัน"',
            zh: '🏚️ 结构火灾：消防员救出一名受害者。嘴周围有烟灰。咳嗽。你怀疑气道烧伤。他坚持"我没事，只是烟。" '
        },
        options: [
            { id: 'A', text: { en: '😤 RSI Intubation: "Your throat will swell shut in 10 mins! I\'m sedating and intubating NOW!"', th: '😤 ใส่ท่อ RSI: "คอคุณจะบวมปิดใน 10 นาที! ผมจะวางยาและใส่ท่อเดี๋ยวนี้!"', zh: '😤 快速序列插管："你的喉咙会在10分钟内肿胀关闭！我现在镇静并插管！"' }, consequence: { en: '🏆 Life Save. He fights initially, but tube goes in. 15 mins later his neck is massive. You saved him.', th: '🏆 ช่วยชีวิต เขาขัดขืน แต่ใส่ท่อได้ 15 นาทีต่อมาคอบวมเป่ง คุณช่วยเขา', zh: '🏆 救命。起初他反抗，但管子进去了。15分钟后他的脖子肿得很大。你救了他。' }, stats: { competence: 90, ethics: 70, leadership: 80, innovation: 50 } },
            { id: 'B', text: { en: '👀 Watch & Wait: "Stay in ambulance. If voice changes, we act. Keep kit ready."', th: '👀 เฝ้าระวัง: "อยู่บนรถ ถ้าเสียงเปลี่ยน เราทำ เตรียมชุดพร้อม"', zh: '👀 观察等待："待在救护车里。如果声音改变，我们行动。准备好工具箱。"' }, consequence: { en: '😰 Panic. Swelling happens fast. You have to intubate a closed throat. Nearly failed.', th: '😰 ตื่นตระหนก บวมเร็ว ต้องใส่ท่อในคอที่ปิด เกือบพลาด', zh: '😰 恐慌。肿胀发生得很快。你必须对封闭的喉咙进行插管。差点失败。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '📝 Refusal: "Sign here if you don\'t want treatment. But you might die."', th: '📝 ปฏิเสธ: "เซ็นตรงนี้ถ้าไม่รักษา แต่อาจตายนะ"', zh: '📝 拒绝："如果你不想治疗就在这里签字。但你可能会死。"' }, consequence: { en: '💀 Dead at Scene. He collapses 5 mins after signing. You let a hypoxic patient sign away his life.', th: '💀 ตายที่เกิดเหตุ เขาล้ม 5 นาทีหลังเซ็น คุณให้คนขาดออกซิเจนเซ็นทิ้งชีวิต', zh: '💀 死于现场。他在签字后5分钟倒下。你让缺氧病人签掉了他的命。' }, stats: { competence: 20, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '💊 Nebulizer: "Give Albuterol for the smoke. Might help wheezing."', th: '💊 พ่นยา: "ให้ Albuterol สำหรับควัน อาจช่วยหอบ"', zh: '💊 雾化器："给沙丁胺醇治疗烟雾。可能有助于喘息。"' }, consequence: { en: '🚫 Useless. This is edema, not bronchospasm. False sense of security.', th: '🚫 ไร้ผล นี่คือบวมน้ำ ไม่ใช่หลอดลมตีบ ความปลอดภัยจอมปลอม', zh: '🚫 无用。这是水肿，不是支气管痉挛。虚假的安全感。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'paramedic_018',
        text: {
            en: '🩸 The Bleeding Gsw: Gunshot wound to the groin (junctional hemorrhage). Tourniquet won\'t work (too high). Direct pressure isn\'t stopping it.',
            th: '🩸 แผลยิงเลือดสาด: แผลยิงที่ขาหนีบ (จุดเชื่อมต่อ) ชะเนาะใช้ไม่ได้ (สูงเกิน) กดแผลเอาไม่อยู่',
            zh: '🩸 出血枪伤：腹股沟枪伤（交界处出血）。止血带没用（太高）。直接加压止不住。'
        },
        options: [
            { id: 'A', text: { en: '🩹 Wound Packing: "Pack the wound with hemostatic gauze! Push deep! Finger inside!"', th: '🩹 ยัดแผล: "ยัดแผลด้วยผ้าห้ามเลือด! ดันลึก! นิ้วเข้าไป!"', zh: '🩹 伤口填塞："用止血纱布填塞伤口！深推！手指进去！"' }, consequence: { en: '✅ Correct. Painful but effective. You pack onto the artery. Bleeding controls.', th: '✅ ถูกต้อง เจ็บแต่ได้ผล คุณยัดใส่เส้นเลือดแดง เลือดหยุด', zh: '✅ 正确。痛苦但有效。你填塞到动脉上。出血控制住。' }, stats: { competence: 80, ethics: 60, leadership: 50, innovation: 40 } },
            { id: 'B', text: { en: '🗜️ TQ Anyway: "Try to jam a tourniquet as high as possible. Crank it hard!"', th: '🗜️ ดันทุรัง TQ: "พยายามยัดชะเนาะให้สูงที่สุด ขันให้แน่น!"', zh: '🗜️ 强行止血带："试着把止血带尽可能往上塞。用力拧！"' }, consequence: { en: '❌ Fail. It slips. Bleeding continues. Anatomy prevents occlusion.', th: '❌ พลาด มันหลุด เลือดไหลต่อ กายวิภาคไม่ให้ปิด', zh: '❌ 失败。它滑落了。出血继续。解剖结构阻止了闭塞。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '👖 TXA Drug: "Give Tranexamic Acid IV immediately! Clot the blood chemically!"', th: '👖 ยา TXA: "ให้ Tranexamic Acid IV ทันที! แข็งเลือดด้วยเคมี!"', zh: '👖 TXA药物："立即静脉注射氨甲环酸！化学凝血！"' }, consequence: { en: '⏳ Too Slow. TXA helps later, but mechanical stop is needed NOW. Bleeds out.', th: '⏳ ช้าไป TXA ช่วยทีหลัง แต่ต้องหยุดทางกลเดี๋ยวนี้ เลือดหมด', zh: '⏳ 太慢了。TXA稍后有帮助，但现在需要机械停止。失血过多。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🦵 Knee Pressure: "Put my knee in his groin! Body weight pressure!"', th: '🦵 เข่ากด: "เอาเข่ากดขาหนีบ! ใช้น้ำหนักตัวกด!"', zh: '🦵 膝盖加压："把我的膝盖放在他的腹股沟上！体重加压！"' }, consequence: { en: '⚠️ Exhausting. Works temporarily but you can\'t move him. Dynamic problem.', th: '⚠️ เหนื่อย ได้ผลชั่วคราวแต่ย้ายไม่ได้ ปัญหาไดนามิก', zh: '⚠️ 筋疲力尽。暂时有效但你不能移动他。动态问题。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 } }
        ]
    },
    {
        id: 'paramedic_019',
        text: {
            en: '🤢 The Frequent Flyer: Same drunk man calls 911 for "stomach ache" every Friday. It\'s Friday. He smells of vodka. He looks fine.',
            th: '🤢 นักบินขาประจำ: คนเมาคนเดิมโทร 911 "ปวดท้อง" ทุกวันศุกร์ นี่วันศุกร์ กลิ่นวอดก้าหึ่ง ดูไม่เป็นไร',
            zh: '🤢 常客：同一个醉汉每逢周五就打911叫"胃痛"。今天是周五。他闻起来有伏特加味。他看起来很好。'
        },
        options: [
            { id: 'A', text: { en: '🏥 Transport Anyway: "Protocol says we transport everyone who asks. Liability avoidance."', th: '🏥 ขนส่งอยู่ดี: "ระเบียบบอกต้องส่งทุกคนที่ขอ เลี่ยงความรับผิด"', zh: '🏥 照样转运："协议规定我们要转运每一个要求的人。避免责任。"' }, consequence: { en: '🙄 Routine. ER nurses yell at you. Waste of a bed. But you are safe.', th: '🙄 กิจวัตร พยาบาล ER ด่า เปลืองเตียง แต่คุณปลอดภัย', zh: '🙄 例行公事。急诊室护士对你大喊大叫。浪费床位。但你是安全的。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🔍 Detailed Exam: "Actually inspect his abdomen. Palpate deep. Check history."', th: '🔍 ตรวจละเอียด: "ตรวจท้องจริงจัง กดลึก เช็คประวัติ"', zh: '🔍 详细检查："实际上检查他的腹部。深触诊。检查病史。"' }, consequence: { en: '🏆 Save. You find a pulsatile mass (AAA). It wasn\'t the vodka. He was dying.', th: '🏆 ช่วยชีวิต เจอก้อนเต้นตุบ (AAA) ไม่ใช่วอดก้า เขากำลังจะตาย', zh: '🏆 救援。你发现了一个搏动性肿块（腹主动脉瘤）。不是伏特加。他快死了。' }, stats: { competence: 90, ethics: 80, leadership: 60, innovation: 50 } },
            { id: 'C', text: { en: '🚕 Taxi Voucher: "Call him a cab. Give him a sandwich. Clear the scene."', th: '🚕 คูปองแท็กซี่: "เรียกแท็กซี่ให้ ให้แซนด์วิช เคลียร์พื้นที่"', zh: '🚕 的士券："给他叫辆出租车。给他个三明治。清理现场。"' }, consequence: { en: '🎲 Risk. Usually works. If he dies, you go to jail. Gambling license.', th: '🎲 เสี่ยง ปกติได้ผล ถ้าตาย คุณติดคุก พนันใบอนุญาต', zh: '🎲 风险。通常有效。如果他死了，你坐牢。拿执照赌博。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 20 } },
            { id: 'D', text: { en: '😠 Scold Him: "Stop abusing 911! Im not taking you! Walk it off!"', th: '😠 ดุเขา: "หยุดใช้ 911 ทางผิด! ฉันไม่รับ! เดินกลับไป!"', zh: '😠 骂他："别再滥用911了！我不带你！走开！"' }, consequence: { en: '📉 Unprofessional. Bystanders record you. Viral video "Mean Medic". Fired.', th: '📉 ไม่มืออาชีพ คนอัดคลิป วิดีโอไวรัล "หมอใจร้าย" ไล่ออก', zh: '📉 不专业。旁观者录像。病毒视频"刻薄的医护"。被解雇。' }, stats: { competence: 20, ethics: 10, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_020',
        text: {
            en: '⚡ The Lightning Strike: Golfer struck by lightning. Clothes blown off. Cardiac arrest (asystole). Burns in fern pattern.',
            th: '⚡ ฟ้าผ่า: นักกอล์ฟโดนฟ้าผ่า เสื้อผ้ากระจุย หัวใจหยุด (asystole) รอยไหม้ลายเฟิร์น',
            zh: '⚡ 雷击：高尔夫球手被雷击。衣服被炸飞。心脏骤停（心脏停搏）。蕨类图案烧伤。'
        },
        options: [
            { id: 'A', text: { en: '🔋 Prolonged CPR: "Lightning resets the heart! Treat as reversible! Go longer than usual!"', th: '🔋 CPR ยาวนาน: "ฟ้ารีเซ็ตหัวใจ! รักษาแบบกลับคืนได้! ปั๊มนานกว่าปกติ!"', zh: '🔋 延长CPR："闪电重置心脏！视为可逆！比平时做得更久！"' }, consequence: { en: '🏆 Physiology Knowledge. Standard asystole is dead, but lightning is different. He recovers.', th: '🏆 ความรู้สรีระ Asystole ปกติตาย แต่ฟ้าผ่าต่างกัน เขาฟื้น', zh: '🏆 生理学知识。标准心脏停搏是死亡，但闪电不同。他康复了。' }, stats: { competence: 80, ethics: 60, leadership: 50, innovation: 60 } },
            { id: 'B', text: { en: '📞 Call Pronouncement: "Asystole is dead. Injuries incompatible with life. Call it."', th: '📞 ประกาศตาย: "Asystole คือตาย บาดเจ็บเข้ากันไม่ได้กับชีวิต จบงาน"', zh: '📞 宣告死亡："心脏停搏就是死亡。伤害与生命不相容。结束吧。"' }, consequence: { en: '❌ Mistake. Lightning victims have high survival potential. You gave up too soon.', th: '❌ พลาด เหยื่อฟ้าผ่ามีโอกาสรอดสูง คุณยอมแพ้เร็วไป', zh: '❌ 错误。雷击受害者生存潜力高。你放弃得太早了。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '⚡ Defibrillate: "Shock him! Jump start the battery!"', th: '⚡ กระตุกหัวใจ: "ช็อตเขา! จั๊มสตาร์ทแบตเตอรี่!"', zh: '⚡ 除颤："电击他！启动电池！"' }, consequence: { en: '🚫 Useless. You can\'t shock asystole (flatline). Shows lack of training.', th: '🚫 ไร้ผล ช็อตกราฟราบไม่ได้ แสดงว่าขาดการฝึก', zh: '🚫 无用。你不能电击心脏停搏（平线）。显示缺乏训练。' }, stats: { competence: 20, ethics: 40, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🩹 Treat Burns First: "Cover the burns! Prevent infection! Then CPR."', th: '🩹 รักษาแผลไหม้ก่อน: "ปิดแผล! กันติดเชื้อ! แล้วค่อยปั๊ม"', zh: '🩹 先治烧伤："盖住烧伤！防止感染！然后心肺复苏。"' }, consequence: { en: '☠️ Backwards. Dead people don\'t get infections. ABCs (Airway Breathing Circulation) always first.', th: '☠️ กลับหัว คนตายไม่ติดเชื้อ ABCs (ทางเดินหายใจ หายใจ ไหลเวียน) มาก่อนเสมอ', zh: '☠️ 本末倒置。死人不会感染。ABCs（气道呼吸循环）永远是第一位的。' }, stats: { competence: 10, ethics: 20, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_021',
        text: {
            en: '💉 The Allergic Reaction Mystery: Patient in anaphylaxis.  You give Epi. She doesn\'t improve. Second dose - still nothing. Partner says "Maybe she\'s on beta blockers?"',
            th: '💉 ความลึกลับแพ้ยา: ผู้ป่วยแพ้ยาร้ายแรง ให้ Epi ไม่ดีขึ้น ให้ doseสอง - ยังไม่ดี คู่หูบอก "เธออาจกินยาบล็อกเบต้า?"',
            zh: '💉 过敏反应之谜：患者过敏性休克。你给了肾上腺素。她没有好转。第二剂-仍然没有。搭档说"也许她在服用β受体阻滞剂？"'
        },
        options: [
            { id: 'A', text: { en: '💊 Glucagon Push: "You\'re right! Glucagon bypasses beta receptors! Give 1mg!"', th: '💊 ให้ Glucagon: "ถูกแล้ว! Glucagon บายพาสตัวรับเบต้า! ให้ 1mg!"', zh: '💊 胰高血糖素推注："你说得对！胰高血糖素绕过β受体！给1毫克！"' }, consequence: { en: '🏆 Textbook Save. Glucagon works immediately. Airway opens. She lives. Brilliant pharmacology.', th: '🏆 ช่วยตามตำรา Glucagon ได้ผลทันที ทางเดินหายใจเปิด เธอรอด ความรู้เภสัชวิทยาเยี่ยม', zh: '🏆 教科书式救援。胰高血糖素立即奏效。气道打开。她活了。出色的药理学。' }, stats: { competence: 70, ethics: 60, leadership: 50, innovation: 60 } },
            { id: 'B', text: { en: '⚡ More Epi: "Double the dose! 0.5mg auto-injector! Push harder!"', th: '⚡ Epi มากกว่า: "เพิ่ม dose สองเท่า! 0.5mg! อัดแรงกว่า!"', zh: '⚡ 更多肾上腺素："加倍剂量！0.5毫克自动注射器！更用力推！"' }, consequence: { en: '💀 Overdose Crisis. Her heart races at 200bpm. Cardiac arrest from too much Epi. Wrong call.', th: '💀 วิกฤตยาเกิน หัวใจเต้น 200ครั้ง/นาที หัวใจหยุดจาก Epi มากไป ตัดสินใจผิด', zh: '💀 过量危机。她的心率飙至200次/分。肾上腺素过量导致心脏骤停。错误决定。' }, stats: { competence: 20, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🔄 Intubate: "Secure the airway mechanically. Forget pharmacology. Just breathe for her."', th: '🔄 ใส่ท่อ: "คุมทางเดินหายใจด้วยกล อย่างอื่นช่าง หายใจแทนเธอ"', zh: '🔄 插管："从机械上保护气道。忘掉药理学。只为她呼吸。"' }, consequence: { en: '🏥 Stabilized. You bypass the problem. She survives to the hospital. Practical over theoretical.', th: '🏥 คุมอาการได้ คุณบายพาสปัญหา เธอรอดถึงโรงพยาบาล ปฏิบัติมากกว่าทฤษฎี', zh: '🏥 稳定。你绕过了问题。她活着到了医院。实践重于理论。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '📞 Call Medical Control: "I need doctor authorization for alternative protocols!"', th: '📞 โทรศูนย์การแพทย์: "ต้องการอนุญาตหมอสำหรับแนวทางอื่น!"', zh: '📞 呼叫医疗控制："我需要医生授权替代方案！"' }, consequence: { en: '⏳ Delayed Too Long. She codes while you\'re on hold. Initiative matters in EMS.', th: '⏳ ล่าช้าเกิน เธอหัวใจหยุดขณะที่คุณรอสาย ความคิดริเริ่มสำคัญใน EMS', zh: '⏳ 延迟太久。你等待时她停搏了。急救医疗服务需要主动性。' }, stats: { competence: 30, ethics: 40, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_022',
        text: {
            en: '🚨 The Ambulance Crash: Your ambulance hits black ice on highway. You roll 3 times. Your unconscious patient is ejected. Your partner has a head injury. You\'re okay.',
            th: '🚨 รถพยาบาลชน: รถคุณชนน้ำแข็งดำบนทางด่วน กลิ้ง 3 รอบ ผู้ป่วยสลบถูกโยนออกไป คู่หูบาดเจ็บที่หัว คุณไม่เป็นไร',
            zh: '🚨 救护车事故：你的救护车在高速公路上撞到黑冰。翻了3次。你昏迷的病人被抛出去了。你的搭档头部受伤。你没事。'
        },
        options: [
            { id: 'A', text: { en: '👨‍⚕️ Partner First: "My partner is family. Treat him first. Patient second."', th: '👨‍⚕️ คู่หูก่อน: "คู่หูเป็นครอบครัว รักษาเขาก่อน ผู้ป่วยรอง"', zh: '👨‍⚕️ 搭档优先："我的搭档是家人。先治疗他。病人其次。"' }, consequence: { en: '⚖️ Ethical Dilemma. Partner survives. Patient dies. Investigation finds you prioritized wrong. Suspended.', th: '⚖️ ภาวะกลืนไม่เข้าคายไม่ออก คู่หูรอด ผู้ป่วย ตาย การสอบสวนพบว่าคุณเลือกผิด โดนพักงาน', zh: '⚖️道德困境。搭档幸存。病人死亡。调查发现你优先级错误。停职。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🚑 Patient First: "Duty to patient supersedes. Stabilize the original patient first."', th: '🚑 ผู้ป่วยก่อน: "หน้าที่ต่อผู้ป่วยเหนือกว่า คุมอาการผู้​ป่วยเดิมก่อน"', zh: '🚑 病人优先："对患者的责任优先。先稳定原来的病人。"' }, consequence: { en: '✅ By the Book. Patient lives. Partner is pissed but understands later. Professional integrity.', th: '✅ ตามคำสั่ง ผู้ป่วยรอด คู่หูโกรธแต่เข้าใจทีหลัง ความซื่อสัตย์ทางวิชาชีพ', zh: '✅ 照章办事。病人活了。搭档生气但后来理解了。职业操守。' }, stats: { competence: 60, ethics: 70, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '📢 Activate Emergency: "Mayday! Two medics down! We need immediate backup! Triage both!"', th: '📢 ประกาศฉุกเฉิน: "Mayday! หมอล้ม 2! ต้องการกำลังเสริมทันที! คัดแยกทั้งคู่!"', zh: '📢 启动紧急响应："求救！两名医护倒下！我们需要立即支援！两人都分诊！"' }, consequence: { en: '🏆 Leadership. Backup arrives fast. Both survive. You coordinated instead of panicking.', th: '🏆 ภาวะผู้นำ กำลังเสริมมาเร็ว ทั้งคู่รอด คุณประสานงานแทนที่จะตื่นตระหนก', zh: '🏆 领导力。支援迅速到达。两人都幸存。你协调而不是恐慌。' }, stats: { competence: 70, ethics: 60, leadership: 80, innovation: 50 } },
            { id: 'D', text: { en: '🌀 Freeze: "I don\'t know what to do. This is too much. Call for help and wait."', th: '🌀 แข็งทื่อ: "ไม่รู้จะทำยังไง มากเกินไป โทรขอความช่วยแล้วรอ"', zh: '🌀 呆住："我不知道该怎么办。这太过分了。打电话求助然后等待。"' }, consequence: { en: '💀 Both Die. Golden hour wasted. PTSD haunts you forever. You quit EMS next month.', th: '💀 ทั้งคู่ตาย เสียชั่วโมงทอง PTSD หลอกหลอนตลอดไป คุณลาออก EMS เดือนหน้า', zh: '💀 两人都死了。黄金时间浪费了。创伤后应激障碍永远困扰你。下个月你辞职了。' }, stats: { competence: 10, ethics: 20, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_023',
        text: {
            en: '🧠 The Stroke Protocol Debate: Patient shows stroke symptoms. Last known normal was "sometime yesterday." Partner says "We can\'t give tPA - outside the window."',
            th: '🧠 ข้อถกเถียงโปรโตคอลโรคหลอดเลือดสมอง: ผู้ป่วยแสดงอาการโรคหลอดเลือดสมอง ปกติครั้งสุดท้าย "เมื่อวานตอนไหนไม่แน่ใจ" คู่หูบอก "ให้ tPA ไม่ได้ - เกินเวลา"',
            zh: '🧠 中风方案争论：患者出现中风症状。最后一次正常是"昨天某个时候"。搭档说"我们不能给tPA-超出时间窗。"'
        },
        options: [
            { id: 'A', text: { en: '🚑 Stroke Center: "Load and go! Let the neurologist decide. We transport ASAP."', th: '🚑 ศูนย์โรคหลอดเลือดสมอง: "ขนไป! ให้หมอประสาทตัดสิน ส่งด่วนที่สุด"', zh: '🚑 中风中心："装车就走！让神经科医生决定。我们尽快转运。"' }, consequence: { en: '✅ Best Practice. Hospital does CT perfusion scan. Patient qualifies. Brain saved.', th: '✅ ปฏิบัติดีที่สุด โรงพยาบาล CT perfusion ผู้ป่วยผ่านเกณฑ์ สมองรอด', zh: '✅ 最佳实践。医院做了CT灌注扫描。患者符合条件。大脑得救。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '⏰ Rule Out: "Too risky for tPA. Take to regular ER. Document \'outside window.\'"', th: '⏰ ตัดออก: "tPA เสี่ยงเกิน พาไป ER ธรรมดา บันทึก \'เกินเวลา\'"', zh: '⏰ 排除："tPA风险太高。送普通急诊室。记录\'超出时间窗\'。"' }, consequence: { en: '💔 Missed Opportunity. Turns out patient woke with symptoms - was eligible. Permanent disability.', th: '💔 พลาดโอกาส ปรากฏว่าผู้ป่วยตื่นมาพบอาการ - มีสิทธิ์ พิการถาวร', zh: '💔 错过机会。原来患者醒来时出现症状-符合条件。永久残疾。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🎯 Wake-Up Stroke Protocol: "Call ahead! Tell them possible wake-up stroke! They\'ll prep MRI!"', th: '🎯 โปรโตคอลโรคหลอดเลือดสมองตอนตื่น: "โทร่ล่วงหน้า! บอกอาจเป็นตอนตื่น! เขาจะเตรียม MRI!"', zh: '🎯唤醒中风方案："提前打电话！告诉他们可能是唤醒中风！他们会准备MRI！"' }, consequence: { en: '🏆 Cutting Edge. You know the latest protocols. MRI shows salvageable tissue. Patient walks out.', th: '🏆 ล้ำสมัย คุณรู้แนวทางล่าสุด MRI แสดงเนื้อเยื่อช่วยได้ ผู้ป่วยเดินออก', zh: '🏆 前沿。你知道最新的方案。MRI显示可挽救的组织。患者走出去了。' }, stats: { competence: 80, ethics: 70, leadership: 60, innovation: 80 } },
            { id: 'D', text: { en: '💊 Give ASA Only: "Aspirin is safe. At least thin the blood. No heroics."', th: '💊 ให้ ASA อย่างเดียว: "แอสไพรินปลอดภัย อย่างน้อยเลือดจางลง ไม่ต้องเป็นฮีโร่"', zh: '💊 只给阿司匹林："阿司匹林是安全的。至少稀释血液。不要冒险。"' }, consequence: { en: '⚠️ Mediocre. ASA helps minimally. Patient has moderate deficits. You played it safe.', th: '⚠️ ธรรมดา ASA ช่วยนิดหน่อย ผู้ป่วยพิการปานกลาง คุณเล่นแบบปลอดภัย', zh: '⚠️ 平庸。阿司匹林帮助很小。患者有中度缺陷。你选择了保守。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'paramedic_024',
        text: {
            en: '👶 The Premature Baby: Woman delivers a 26-week preemie in the back of your ambulance. Baby is blue, not breathing, fits in your palm.',
            th: '👶 ทารกคลอดก่อนกำหนด: ผู้หญิงคลอดทารกคลอดไม่แก่เดือน 26 สัปดาห์ข้างหลังรถ ทารกเขียว ไม่หายใจ พอดีฝ่ามือ',
            zh: '👶 早产婴儿：妇女在你的救护车后座分娩了26周的早产儿。婴儿发蓝，没有呼吸，能放在你的手掌里。'
        },
        options: [
            { id: 'A', text: { en: '🫁 Full Resuscitation: "Ventilate with pediatric BVM! Tiny breaths! Warm blankets! Go go go!"', th: '🫁 กู้ชีพเต็มที่: "ช่วยหายใจด้วย BVM เด็ก! หายใจนิดๆ! ผ้าห่มอุ่น! ไป ไป ไป!"', zh: '🫁 全力复苏："用儿科球囊面罩通气！微小呼吸！温暖毯子！走走走！"' }, consequence: { en: '🏥 NICU Admit. Baby survives to hospital. Long NICU stay ahead. You gave them a chance.', th: '🏥 รับเข้า NICU ทารกรอดถึงโรงพยาบาล ต้องอยู่ NICU นาน คุณให้โอกาสพวกเขา', zh: '🏥 新生儿重症监护室收治。婴儿活着到了医院。漫长的新生儿重症监护室住院。你给了他们机会。' }, stats: { competence: 70, ethics: 70, leadership: 60, innovation: 40 } },
            { id: 'B', text: { en: '💔 Comfort Care: "26 weeks... odds are terrible. Keep baby warm. Let the parents hold them."', th: '💔 การดูแลบรรเทา: "26 สัปดาห์... โอกาสน้อยมาก ให้ทารกอุ่น ให้พ่อแม่กอด"', zh: '💔 安慰性护理："26周……几率很糟糕。让婴儿保暖。让父母抱着他们。"' }, consequence: { en: '😢 Peaceful Passing. Baby dies in mom\'s arms. Some babies are too small. Parents are devastated.', th: '😢 จากไปอย่างสงบ ทารกตายในอ้อมแขนแม่ ทารกบางคนเล็กเกิน พ่อแม่ทำลายล่ำสลาย', zh: '😢 安详离世。婴儿在妈妈怀里去世。有些婴儿太小了。父母崩溃了。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '⚡ Aggressive NICU Protocol: "Intubate with 2.5 ETT! IV access! Treat like a real patient!"', th: '⚡ แนวทาง NICU ก้าวร้าว: "ใส่ท่อ 2.5 ETT! เจาะเส้น! รักษาเหมือนผู้ป่วยจริง!"', zh: '⚡ 激进的新生儿重症监护室方案："用2.5气管插管插管！静脉通路！像真正的病人一样治疗！"' }, consequence: { en: '🏆 Miracle Save. You stabilize vitals perfectly. Baby becomes a success story. You\'re a legend.', th: '🏆 ปาฏิหาริย์ช่วยชีวิต คุณคุมสัญญาณชีพสมบูรณ์ ทารกกลายเป็นเรื่องราวความสำเร็จ คุณเป็นตำนาน', zh: '🏆 奇迹救援。你完美稳定了生命体征。婴儿成了成功案例。你是传奇。' }, stats: { competence: 80, ethics: 60, leadership: 70, innovation: 70 } },
            { id: 'D', text: { en: '📞 Call NICU Direct: "Get neonatal team on phone! I need real-time guidance!"', th: '📞 โทร NICU โดยตรง: "ให้ทีมทารกแรกเกิดรับสาย! ต้องการคำแนะนำเรียลไทม์!"', zh: '📞 直接致电新生儿重症监护室："让新生儿团队接电话！我需要实时指导！"' }, consequence: { en: '🎓 Team Approach. NICU talks you through it. Baby stabilizes. Good use of resources.', th: '🎓 แนวทางทีม NICU แนะนำทีละขั้น ทารกคุมอาการได้ ใช้ทรัพยากรได้ดี', zh: '🎓 团队方法。新生儿重症监护室指导你。婴儿稳定了。资源利用得当。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'paramedic_025',
        text: {
            en: '🔒 The Locked-In Patient: Massive stroke patient. Eyes open, can blink, but totally paralyzed. He blinks "YES" he\'s in pain. Pupils equal.',
            th: '🔒 ผู้ป่วยขังใน: ผู้ป่วยโรคหลอดเลือดสมองใหญ่ ตาลืม กระพริบได้ แต่อัมพาตทั้งหมด กระพริบ "ใช่" เขาเจ็บ รูม่านตาเท่ากัน',
            zh: '🔒 闭锁综合征患者：大面积中风患者。眼睛睁着，可以眨眼，但完全瘫痪。他眨眼表示"是"他在疼痛。瞳孔等大。'
        },
        options: [
            { id: 'A', text: { en: '💊 Pain Relief: "He\'s conscious and reporting pain. Give fentanyl. Relieve suffering."', th: '💊 แก้ปวด: "เขามีสติและรายงานเจ็บ ให้เฟนทานิล บรรเทาความทุกข์"', zh: '💊 止痛："他有意识且报告疼痛。给予芬太尼。减轻痛苦。"' }, consequence: { en: '❤️ Compassionate. He blinks "thank you." Quality of life matters even when outcome is grim.', th: '❤️ มีความเมตรา เขากระพริบ "ขอบคุณ" คุณภาพชีวิตสำคัญแม้ผลลัพธ์จะแย่', zh: '❤️ 富有同情心。他眨眼表示"谢谢"。即使结果严峻，生活质量也很重要。' }, stats: { competence: 60, ethics: 80, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '🚫 No Narcotics: "Stroke patients need neuro assessment. Narcotics cloud the exam."', th: '🚫 ไม่ให้ยาเสพติด: "คนโรคหลอดเลือดสมองต้องประเมินระบบประสาท ยาเสพติดทำให้ไม่ชัด"', zh: '🚫 不给麻醉剂："中风患者需要神经评估。麻醉剂会混淆检查。"' }, consequence: { en: '😢 Suffering. He cries (with his eyes). You followed protocol but ignored humanity.', th: '😢 ทุกข์ทรมาน เขาร้องไห้ (ด้วยตา) คุณทำตามกฎแต่ละเลยความเป็นมนุษย์', zh: '😢 痛苦。他哭了（用眼睛）。你遵循了规程但忽略了人性。' }, stats: { competence: 50, ethics: 20, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🗣️ Communicate: "Use eye blinks. 1=yes, 2=no. Ask questions. Explain everything."', th: '🗣️ สื่อสาร: "ใช้การกระพริบตา 1=ใช่, 2=ไม่ ถามคำถาม อธิบายทุกอย่าง"', zh: '🗣️ 沟通："用眨眼。1次=是，2次=否。问问题。解释一切。"' }, consequence: { en: '🏆 Humanity Preserved. You treat him as a person, not a vegetable. He feels respected.', th: '🏆 รักษาความเป็นมนุษย์ คุณดูแลเขาในฐานะคน ไม่ใช่ผัก เขารู้สึกได้รับการเคารพ', zh: '🏆 保留人性。你把他当人对待，而不是植物人。他感到受尊重。' }, stats: { competence: 60, ethics: 70, leadership: 60, innovation: 60 } },
            { id: 'D', text: { en: '⚡ Focus Stroke Care: "Airway, breathing, rapid transport. Pain is secondary to stroke."', th: '⚡ โฟกัสดูแลโรคหลอดเลือดสมอง: "ทางเดินหายใจ หายใจ ส่งเร็ว ความเจ็บปวดรอง"', zh: '⚡ 专注中风护理："气道、呼吸、快速转运。疼痛次于中风。"' }, consequence: { en: '🏥 Optimal Transport. You get him to stroke center fast. But zero bedside manner.', th: '🏥 ส่งดีที่สุด พาเขาไปศูนย์โรคหลอดเลือดสมองเร็ว แต่ไม่มีมารยาทข้างเตียง', zh: '🏥 最佳转运。你快速把他送到中风中心。但零床边礼仪。' }, stats: { competence: 70, ethics: 40, leadership: 40, innovation: 20 } }
        ]
    },
    {
        id: 'paramedic_026',
        text: {
            en: '🐕 The Service Dog Dilemma: Patient codes. His service dog won\'t leave his side, growling at you. 80lb German Shepherd blocking access.',
            th: '🐕 ภาวะกลืนไม่เข้าคายไม่ออกหมาช่วยเหลือ: ผู้ป่วยหัวใจหยุด หมาช่วยเหลือไม่ยอมไปไหน คำรามใส่คุณ ตัวเยอรมันเชพเพิร์ด 80lb กีดขวางทาง',
            zh: '🐕 服务犬困境：患者停搏。他的服务犬不愿离开他身边，对你咆哮。80磅的德国牧羊犬阻挡通道。'
        },
        options: [
            { id: 'A', text: { en: '🚓 Animal Control: "Call animal control! Get the dog removed! Patient priority!"', th: '🚓 ควบคุมสัตว์: "เรียกควบคุมสัตว์! เอาหมาออก! ผู้ป่วยสำคัญกว่า!"', zh: '🚓 动物管制："叫动物管制！把狗弄走！病人优先！"' }, consequence: { en: '⏳ Delayed 8 Minutes. Dog is removed but patient dies during wait. Bad call.', th: '⏳ ล่าช้า 8 นาที หมาถูกเอาออกแต่ผู้ป่วยตายขณะรอ ตัดสินใจผิด', zh: '⏳ 延迟8分钟。狗被弄走了，但病人在等待期间死了。糟糕的决定。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🥩 Distract: "Partner! Toss food from the kitchen! Draw the dog away!"', th: '🥩 เบี่ยงเบน: "คู่หู! โยนอาหาจากครัว! ดึงหมาออกไป!"', zh: '🥩 分散注意力："搭档！从厨房扔食物！把狗引开！"' }, consequence: { en: '✅ Smart Thinking. Dog chases food. You access patient. CPR successful. Improvisation wins.', th: '✅ คิดฉลาด หมาวิ่งตามอาหาร คุณเข้าถึงผู้ป่วย CPR สำเร็จ การด้นสดได้ผล', zh: '✅ 聪明思维。狗追食物。你接触到病人。心肺复苏成功。即兴发挥获胜。' }, stats: { competence: 60, ethics: 60, leadership: 70, innovation: 80 } },
            { id: 'C', text: { en: '🤝 Bond: "Good boy. I\'m here to help dad. Let me help him. Easy..."', th: '🤝 สร้างสายสัมพันธ์: "เด็กดี ฉันมาช่วยพ่อ ให้ช่วยเขานะ สบายๆ..."', zh: '🤝 建立联系："好孩子。我是来帮爸爸的。让我帮他。放心……"' }, consequence: { en: '🐶 Dog Calms. Sensing your intent, the dog backs off. You work smoothly. Emotional intelligence.', th: '🐶 หมาสงบลง รู้สึกเจตนาคุณ หมาถอย คุณทำงานราบรื่น ความฉลาดทางอารมณ์', zh: '🐶 狗冷静下来。感知到你的意图，狗退后了。你顺利工作。情商。' }, stats: { competence: 60, ethics: 70, leadership: 60, innovation: 60 } },
            { id: 'D', text: { en: '💉 Sedate Dog: "Ketamine dart for the dog! Aggressive animal protocol!"', th: '💉 ให้หมานอน: "คีตามีนสำหรับหมา! กฎการสัตว์ดุร้าย!"', zh: '💉 给狗镇静："给狗用氯胺酮飞镖！攻击性动物处置方案！"' }, consequence: { en: '⚖️ Lawsuit. Dog owner sues you for harming service animal. Patient lives but you\'re in court.', th: '⚖️ คดีความ เจ้าของหมาฟ้องคุณทำร้ายสัตว์ช่วยเหลือ ผู้ป่วยรอดแต่คุณติดศาล', zh: '⚖️ 诉讼。狗主人起诉你伤害服务犬。病人活了但你要上法庭。' }, stats: { competence: 50, ethics: 20, leadership: 30, innovation: 40 } }
        ]
    },
    {
        id: 'paramedic_027',
        text: {
            en: '🏭 The Industrial Accident: Man\'s arm is trapped in machinery. They need to dismantle equipment to free him - 90 minutes. He\'s losing blood fast.',
            th: '🏭 อุบัติเหตุโรงงาน: แขนชายติดในเครื่องจักร ต้องถอดอุปกรณ์เพื่อปลดปล่อยเขา - 90 นาที เขาเสียเลือดเร็ว',
            zh: '🏭 工业事故：男子的手臂被困在机器中。他们需要拆卸设备才能救他-90分钟。他正在快速失血。'
        },
        options: [
            { id: 'A', text: { en: '✂️ Field Amputation: "Call surgeon to scene. Amputate now. 90 minutes = death."', th: '✂️ ตัดในสนาม: "เรียกศัลย์มาที่เกิดเหตุ ตัดเลย 90 นาที = ตาย"', zh: '✂️ 现场截肢："叫外科医生到现场。现在截肢。90分钟=死亡。"' }, consequence: { en: '🏥 Life Over Limb. Surgeon arrives in 20 mins. Arm is amputated. Man lives. Grim but necessary.', th: '🏥 ชีวิตเหนือแขนขา ศัลย์มาใน 20 นาที ตัดแขน ชายรอด โหดร้ายแต่จำเป็น', zh: '🏥 生命重于肢体。外科医生20分钟内到达。截肢。男子活了。严峻但必要。' }, stats: { competence: 70, ethics: 60, leadership: 70, innovation: 50 } },
            { id: 'B', text: { en: '🩸 Tourniquet + Wait: "Apply tourniquets. Fluid resuscitation. Wait for machinery team."', th: '🩸 ชะเนาะ + รอ: "ขันชะเนาะ เติมน้ำเกลือ รอทีมเครื่องจักร"', zh: '🩸 止血带+等待："上止血带。液体复苏。等待机械团队。"' }, consequence: { en: '⚖️ 50/50. Tourniquets buy time. He survives but arm is already dead tissue. Amputation anyway.', th: '⚖️ ครึ่งต่อครึ่ง ชะเนาะซื้อเวลา เขารอดแต่แขนตายแล้ว ก็ต้องตัดอยู่ดี', zh: '⚖️ 五五开。止血带争取时间。他幸存但前臂已经坏死。反正要截肢。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '⚡ Mechanical Override: "Use hydraulic cutters! Cut the machine ourselves! Don\'t wait!"', th: '⚡ บังคับกลไก: "ใช้กรรไกรไฮดรอลิก! ตัดเครื่องเอง! อย่ารอ!"', zh: '⚡ 机械覆盖："使用液压切割机！我们自己切割机器！不要等！"' }, consequence: { en: '🏆 Bold Success. Fire dept helps cut metal. Arm freed in 25 mins. Arm and life saved.', th: '🏆 ความสำเร็จกล้าหาญ ดับเพลิงช่วยตัดโลหะ ปล่อยแขนใน 25 นาที ทั้งแขนและชีวิตรอด', zh: '🏆 大胆成功。消防部门帮助切割金属。25分钟内解放手臂。手臂和生命都得救。' }, stats: { competence: 80, ethics: 70, leadership: 80, innovation: 80 } },
            { id: 'D', text: { en: '🏥 Transport with Machine: "Load him AND the machine piece onto flatbed! Go to hospital!"', th: '🏥 ขนส่งพร้อมเครื่อง: "ยกเขาและชิ้นเครื่องขึ้นรถกระบะ! ไปโรงพยาบาล!"', zh: '🏥 连机器一起运："把他和机器部件一起装到平板车！去医院！"' }, consequence: { en: '🎪 Circus. Impractical. Machine is bolted to floor. Wastes 30 minutes trying. Bad engineering judgment.', th: '🎪 ละครสัตว์ ไม่ได้ผล เครื่องติดสลักพื้น เสียเวลา 30 นาทีลอง ตัดสินวิศวกรรมผิด', zh: '🎪 马戏团。不切实际。机器固定在地板上。浪费30分钟尝试。工程判断失误。' }, stats: { competence: 20, ethics: 40, leadership: 10, innovation: 30 } }
        ]
    },
    {
        id: 'paramedic_028',
        text: {
            en: '🧓 The Language Barrier: Elderly Chinese patient. Chest pain. You have no translator. He doesn\'t speak English. His family isn\'t answering phones.',
            th: '🧓 อุปสรรคภาษา: ผู้ป่วยชาวจีนสูงอายุ เจ็บหน้าอก ไม่มีล่ามด เขาพูดอังกฤษไม่ได้ ครอบครัวรับสายไม่ได้',
            zh: '🧓 语言障碍：老年中国患者。胸痛。你没有翻译。他不会说英语。他的家人不接电话。'
        },
        options: [
            { id: 'A', text: { en: '📱 Translation App: "Use Google Translate! Type \'Where is pain?\' Show visuals!"', th: '📱 แอปแปลภาษา: "ใช้ Google Translate! พิมพ์ \'ปวดที่ไหน?\' โชว์ภาพ!"', zh: '📱 翻译应用："使用谷歌翻译！输入\'哪里痛？\'展示视觉！"' }, consequence: { en: '✅ Modern Solution. App bridges gap. You get history. Treat appropriately. Tech wins.', th: '✅ แก้ปัญหาสมัยใหม่ แอปเชื่อมช่องว่าง ได้ประวัต รักษาถูกต้อง เทคชนะ', zh: '✅ 现代解决方案。应用程序弥合差距。你获得了病史。适当治疗。科技获胜。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 70 } },
            { id: 'B', text: { en: '🎭 Charades: "Point at chest. Make pain face. Use universal gestures."', th: '🎭 ทายคำ: "ชี้หน้าอก ทำหน้าเจ็บ ใช้ท่าทางสากล"', zh: '🎭 比划："指着胸部。做出痛苦的表情。使用通用手势。"' }, consequence: { en: '⚠️ Basic Communication. You get "chest pain" but miss critical details like radiation, onset. Incomplete assessment.', th: '⚠️ สื่อสารพื้นฐาน คุณได้ "เจ็บหน้าอก" แต่พลดรายละเอียดสำคัญอย่างลามไป เริ่ม ประเมินไม่สมบูรณ์', zh: '⚠️ 基本沟通。你得到了"胸痛"但错过了关键细节如放射、发作。评估不完整。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '📞 Hospital Interpreter: "Call ER! Get Chinese interpreter on speaker! Real-time translation!"', th: '📞 ล่ามโรงพยาบาล: "โทร ER! เปิดลำโพงล่ามจีน! แปลเรียลไทม์!"', zh: '📞 医院翻译："打电话给急诊室！让中文翻译开扬声器！实时翻译！"' }, consequence: { en: '🏆 Professional. Hospital interpreter translates perfectly. Full history obtained. Gold standard.', th: '🏆 มืออาชีพ ล่ามโรงพยาบาลแปลสมบูรณ์ ได้ประวัติเต็ม มาตรฐานทอง', zh: '🏆 专业。医院翻译完美翻译。获得完整病史。金标准。' }, stats: { competence: 70, ethics: 70, leadership: 60, innovation: 60 } },
            { id: 'D', text: { en: '🚑 Transport Blind: "Chest pain is chest pain. 12-lead ECG. Aspirin. Transport. Let hospital figure it out."', th: '🚑 ส่งแบบมืดบอด: "เจ็บหน้าอกก็เจ็บหน้าอก คลื่นหัวใจ 12 ทาง แอสไพริน ส่ง ให้โรงพยาบาลแก้"', zh: '🚑 盲目转运："胸痛就是胸痛。12导联心电图。阿司匹林。转运。让医院搞清楚。"' }, consequence: { en: '⚖️ Adequate But Lazy. You treat symptoms without full assessment. Misses nuances.', th: '⚖️ พอใช้แต่ขี้เกียจ รักษาอาการไม่ประเมินเต็มที่ พลาดรายละเอียดปลีกย่อย', zh: '⚖️ 足够但懒惰。你治疗症状而不进行充分评估。错过细微差别。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'paramedic_029',
        text: {
            en: '⛪ The Faith Healer Scene: Family has been "praying over" a diabetic kid in a coma for 3 days. No insulin. "God will heal him." Kid is near death.',
            th: '⛪ ที่เกิดเหตุหมอผีศรัทธา: ครอบครัว "สวดมนต์" เด็กเบาหวานโคม่า 3 วัน ไม่ให้อินซูลิน "พระเจ้าจะรักษา" เด็กใกล้ตาย',
            zh: '⛪ 信仰治疗现场：家人对一个昏迷的糖尿病孩子"祈祷"了3天。没有胰岛素。"上帝会治愈他。"孩子濒临死亡。'
        },
        options: [
            { id: 'A', text: { en: '🚨 Seize Child: "This is neglect! I\'m taking him! Police backup now!"', th: '🚨 ยึดเด็ก: "นี่ละเลย! ฉันจะพาไป! สำรองตำรวจเดี๋ยวนี้!"', zh: '🚨 带走孩子："这是疏忽！我要带走他！现在就叫警察支援！"' }, consequence: { en: '⚖️ Legal Battle. You save kid but family sues for religious freedom violation. Years in court.', th: '⚖️ สงครามกฎหมาย คุณช่วยเด็กแต่ครอบครัวฟ้องละเมิดเสรีภาพทางศาสนา ติดศาลหลายปี', zh: '⚖️ 法律战。你救了孩子，但家人起诉侵犯宗教自由。多年诉讼。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🙏 Religious Bridge: "God gave us insulin as a gift! Using medicine honors Him! Let us help!"', th: '🙏 สะพานศาสนา: "พระเจ้าให้อินซูลินเป็นของขวัญ! ใช้ยาเป็นเกียรติพระองค์! ให้เราช่วย!"', zh: '🙏 宗教桥梁："上帝赐予我们胰岛素作为礼物！使用药物是荣耀祂！让我们帮忙！"' }, consequence: { en: '🏆 Persuasion Win. Family agrees! You frame medicine as divine tool. Kid saved. Brilliant.', th: '🏆 ชนะการโน้มน้าว ครอบครัวยอม! คุณนำเสนอยาเป็นเครื่องมือศักดิ์สิทธิ์ เด็กรอด ฉลาดมาก', zh: '🏆 说服胜利。家人同意了！你将医药描述为神圣工具。孩子得救。出色。' }, stats: { competence: 70, ethics: 80, leadership: 80, innovation: 80 } },
            { id: 'C', text: { en: '📞 CPS Hotline: "Call child protective services. Document everything. Let authorities handle."', th: '📞ตามรักษาเด็ก: "โทรบริการคุ้มครองเด็ก บันทึกทุกอย่าง ให้เจ้าหน้าที่จัดการ"', zh: '📞 儿童保护服务热线："打电话给儿童保护服务。记录一切。让当局处理。"' }, consequence: { en: '⏳ Kid Dies. CPS investigates 2 days later. Too slow. You passed the buck.', th: '⏳ เด็กตาย CPS สอบสวน 2 วันถัดมา ช้าไป คุณส่งต่อความรับผิดชอบ', zh: '⏳ 孩子死了。儿童保护服务2天后调查。太慢了。你推卸责任。' }, stats: { competence: 30, ethics: 30, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '💉 Stealth Treatment: "Distract parents. Partner gives insulin covertly. \'God worked through us.\'"', th: '💉 รักษาแบบขลัง: "เบี่ยงเบนพ่อแม่ คู่หูให้อินซูลินแอบๆ \'พระเจ้าทำงานผ่านเรา\'"', zh: '💉 隐秘治疗："分散父母注意力。搭档秘密给胰岛素。\'上帝通过我们工作。\'"' }, consequence: { en: '⚖️ Deception. Kid lives but you violated consent. Ethically murky. Ends justify means?', th: '⚖️ การหลอกลวง เด็กรอดแต่คุณละเมิดความยินยอม จริยธรรมคลุมเครือ จุดจบพิสูจน์วิถี?', zh: '⚖️ 欺骗。孩子活了但你违反了同意。道德上模糊。目的证明手段？' }, stats: { competence: 60, ethics: 40, leadership: 30, innovation: 50 } }
        ]
    },
    {
        id: 'paramedic_030',
        text: {
            en: '🚁 The Helicopter Decision: Critical trauma. Ground transport 45 mins. Helicopter 12 mins. But weather is marginal - pilot says "Your call, medic."',
            th: '🚁 การตัดสินใจเฮลิคอปเตอร์: บาดเจ็บวิกฤต ขนส่งภาคพื้น 45 นาที เฮลิคอปเตอร์ 12 นาที แต่อากาศเฉียดกร่อย - นักบินบอก "คุณตัดสินครับหมอ"',
            zh: '🚁 直升机决定：危重创伤。地面运输45分钟。直升机12分钟。但天气边缘-飞行员说"你决定，医护。"'
        },
        options: [
            { id: 'A', text: { en: '🚁 Fly: "Launch! Time is tissue! 33 minutes saved is worth the risk!"', th: '🚁 บิน: "ออกตัว! เวลาคือเนื้อเยื่อ! ประหยัด 33 นาทีคุ้มเสี่ยง!"', zh: '🚁 飞："起飞！时间就是组织！节省33分钟值得冒险！"' }, consequence: { en: '🌩️ Crash. Helicopter hits turbulence and crashes. Patient, crew, and you all die. Gamble失败ed.', th: '🌩️ ตก เฮลิคอปเตอร์โดนลมปั่นป่วนและตก ผู้ป่วย ลูกเรือ และคุณตายหมด เสี่ยงพลาด', zh: '🌩️ 坠机。直升机遇到湍流并坠毁。病人、机组人员和你全部死亡。赌博失败。' }, stats: { competence: 20, ethics: 30, leadership: -30, innovation: 10 } },
            { id: 'B', text: { en: '🚗 Ground: "Too risky. We drive carefully but fast. Load and go."', th: '🚗 ภาคพื้น: "เสี่ยงเกิน เราขับระวังแต่เร็ว ขนแล้วไป"', zh: '🚗 地面："太危险了。我们小心但快速地开。装车就走。"' }, consequence: { en: '🏥 Patient Survives. Rough ride but you make it. Conservative choice pays off.', th: '🏥 ผู้ป่วยรอด ขับขรุขระแต่มาถึง ทางเลือกระมัดระวังจ่ายผล', zh: '🏥 患者幸存。颠簸但你成功了。保守选择得到回报。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '📍 Meet Halfway: "Helicopter flies to safer LZ 20 mins away. We drive there. Compromise."', th: '📍ผลึกครึ่งทาง: "เฮลิคอปเตอร์บินไป LZ ที่ปลอดภัยกว่า 20 นาที เราขับไปพบ ประนีประนอม"', zh: '📍 在中途会合："直升机飞到20分钟外更安全的起降区。我们开车到那里。折衷。"' }, consequence: { en: '🏆 Best of Both. Helicopter avoids bad weather. You get 25min transport total. Smart logistics.', th: '🏆 ดีทั้งคู่ เฮลิคอปเตอร์หลีกเลี่ยงอากาศแย่ คุณได้ขนส่งรวม 25 นาที โล ์จิสติกส์ฉลาด', zh: '🏆 两全其美。直升机避开恶劣天气。你总共获得25分钟运输。聪明的物流。' }, stats: { competence: 80, ethics: 70, leadership: 80, innovation: 80 } },
            { id: 'D', text: { en: '⚖️ Pilot Decides: "You\'re the flight expert. I defer to your judgment."', th: '⚖️ นักบินตัดสิน: "คุณเชี่ยวชาญการบิน ฉันเชื่อคุณ"', zh: '⚖️ 飞行员决定："你是飞行专家。我尊重你的判断。"' }, consequence: { en: '🚫 Pilot Cancels. He won\'t risk it. Ground transport. Patient dies enroute. Passing responsibility failed.', th: '🚫 นักบินยกเลิก เขาไม่เสี่ยง ขนส่งภาคพื้น ผู้ป่วยตายระหว่างทาง ส่งต่อความรับผิดชอบพลาด', zh: '🚫 飞行员取消。他不愿冒险。地面运输。病人途中死亡。推卸责任失败。' }, stats: { competence: 40, ethics: 40, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_031',
        text: {
            en: '🐍 The Snake Bite: Hiker bitten by a rattlesnake. Leg swelling fast. He wants you to "suck the venom out" or cut the wound.',
            th: '🐍 งูกัด: นักเดินป่าถูกงูหางกระดิ่งกัด ขาบวมเร็ว เขาจะให้คุณ "ดูดพิษออก" หรือกรีดแผล',
            zh: '🐍 蛇咬伤：徒步旅行者被响尾蛇咬伤。腿肿得很快。他想让你"吸出毒液"或切开伤口。'
        },
        options: [
            { id: 'A', text: { en: '🔪 Cut & Suck: "Old cowboy trick! Cut an X and suck it out!"', th: '🔪 กรีดและดูด: "ทริคคาวบอยเก่า! กรีดตัว X แล้วดูดออก!"', zh: '🔪 切开吸吮："老牛仔的把戏！切个X吸出来！"' }, consequence: { en: '❌ Myth. You cause nerve damage and infection. Venom is already in bloodstream. Malpractice.', th: '❌ ความเชื่อผิด ทำลายเส้นประสาทและติดเชื้อ พิษเข้ากระแสเลือดแล้ว ผิดพลาดร้ายแรง', zh: '❌ 神话。你造成神经损伤和感染。毒液已经在血液中。医疗事故。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🩹 Tourniquet: "Tie it off tight! Stop the venom from spreading!"', th: '🩹 ชะเนาะ: "รัดให้แน่น! หยุดพิษกระจาย!"', zh: '🩹 止血带："扎紧！阻止毒液扩散！"' }, consequence: { en: '🦵 Limb Loss. Concentrates venom in the leg, destroying tissue. Amputation likely. Bad medicine.', th: '🦵 เสียขา พิษกระจุกทำลายเนื้อเยื่อ ต้องตัดขา การแพทย์แย่', zh: '🦵 肢体丧失。毒液集中在腿部，破坏组织。可能截肢。糟糕的医学。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '📏 Mark & Transport: "Immobilize limb. Mark redness line every 15 mins. Calm him down. Go."', th: '📏 มาร์คและส่ง: "ดามขา มาร์คแนวแดงทุก 15 นาที ทำให้เขาสงบ ไป"', zh: '📏 标记和转运："固定肢体。每15分钟标记红线。让他冷静下来。走。"' }, consequence: { en: '✅ Standard of Care. You track progression for the hospital. Limb saved. No heroics needed.', th: '✅ มาตรฐานดูแล ติดตามอาการให้โรงพยาบาล ขารอด ไม่ต้องเป็นฮีโร่', zh: '✅ 护理标准。你为医院追踪进展。肢体保住。不需要英雄主义。' }, stats: { competence: 70, ethics: 60, leadership: 60, innovation: 20 } },
            { id: 'D', text: { en: '❄️ Ice Pack: "Freeze the venom! Slows down the enzymes!"', th: '❄️ ประคบเย็น: "แช่แข็งพิษ! ชะลอเอนไซม์!"', zh: '❄️ 冰袋："冷冻毒液！减慢酶的速度！"' }, consequence: { en: '🥶 Tissue Damage. Ice crystals + venom = severe necrosis. You made it worse.', th: '🥶 เนื้อเยื่อเสียหาย เกล็ดน้ำแข็ง + พิษ = ตายรุนแรง คุณทำแย่ลง', zh: '🥶 组织损伤。冰晶+毒液=严重坏死。你让情况变得更糟。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'paramedic_032',
        text: {
            en: '🦠 The Sepsis Alert: Nursing home patient. "Just a bit tired." Fever 101. HR 110. BP 90/50. Partner says "She\'s just dehydrated."',
            th: '🦠 การแจ้งเตือนติดเชื้อในกระแสเลือด: ผู้ป่วยบ้านพักคนชรา "แค่เพลียนิดหน่อย" ไข้ 101 ชีพจร 110 ความดัน 90/50 คู่หูบอก "แค่ขาดน้ำ"',
            zh: '🦠 脓毒症警报：疗养院病人。"只是有点累。"发烧101（38.3°C）。心率110。血压90/50。搭档说"她只是脱水了。"'
        },
        options: [
            { id: 'A', text: { en: '🚨 Sepsis Alert: "Fluid bolus NOW! Alert hospital \'Code Sepsis\'! She is crashing!"', th: '🚨 แจ้งเตือน Sepsis: "โหลดน้ำเกลือเดี๋ยวนี้! แจ้งโรงพยาบาล \'Code Sepsis\'! เธอกำลังทรุด!"', zh: '🚨 脓毒症警报："现在液体推注！通知医院\'脓毒症代码\'！她快不行了！"' }, consequence: { en: '🏆 Life Save. Early recognition saves lives. Antibiotics started immediately at ED. Good catch.', th: '🏆 ช่วยชีวิต รู้เร็วรอด ยาฆ่าเชื้อเริ่มทันทีที่ ED ตาไว', zh: '🏆 救命。早期识别挽救生命。急诊室立即开始抗生素治疗。抓得好。' }, stats: { competence: 80, ethics: 70, leadership: 70, innovation: 30 } },
            { id: 'B', text: { en: '💧 Oral Fluids: "Here grandma, drink some water. We\'ll drive slow."', th: '💧 ดื่มน้ำ: "นี่ยาย ดื่มน้ำหน่อย เราจะขับช้าๆ"', zh: '💧 口服补液："给，奶奶，喝点水。我们会开慢点。"' }, consequence: { en: '📉 Shock. She goes into septic shock enroute. BP plummets. You missed the signs.', th: '📉 ช็อก เธอช็อกระหว่างทาง ความดันร่วง คุณพลาดสัญญาณ', zh: '📉 休克。她在途中进入感染性休克。血压骤降。你错过了迹象。' }, stats: { competence: 40, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '💊 Tylenol: "Treat the fever. That\'s the main issue concerning the family."', th: '💊 ไทลินอล: "ลดไข้ นั่นคือปัญหาหลักที่ญาติกังวล"', zh: '💊 泰诺："治疗发烧。这是家属关心的主要问题。"' }, consequence: { en: '🚫 Symptom Management. Fever is a symptom, not the cause. Hypotension ignores. Dangerous.', th: '🚫 รักษาตามอาการ ไข้คืออาการ ไม่ใช่สาเหตุ เมินความดันตก อันตราย', zh: '🚫 症状管理。发烧是症状，不是原因。忽视低血压。危险。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🛌 Leave at Home: "Vitals are borderline. Call us if she gets worse."', th: '🛌 ให้อยู่บ้าน: "สัญญาณชีพปริ่มๆ โทรหาเราถ้าแย่ลง"', zh: '🛌 留在家："生命体征处于边缘。如果她恶化再给我们打电话。"' }, consequence: { en: '☠️ Death. She dies that night. Negligence lawsuit. You ignored SIRS criteria.', th: '☠️ ตาย เธอตายคืนนั้น ฟ้องละเลย คุณเมินเกณฑ์ SIRS', zh: '☠️ 死亡。那天晚上她死了。疏忽诉讼。你无视了SIRS标准。' }, stats: { competence: 10, ethics: 10, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_033',
        text: {
            en: '🧸 The Child Abuse Suspicion: Toddler with a broken arm. Parents say "He fell down stairs." You see bruises in various stages of healing on his back.',
            th: '🧸 ข้อสงสัยทารุณเด็ก: เด็กวัยหัดเดินแขนหัก พ่อแม่บอก "ตกบันได" คุณเห็นรอยช้ำหลายระยะที่หลัง',
            zh: '🧸 虐待儿童嫌疑：蹒跚学步的孩子手臂骨折。父母说"他从楼梯上摔下来的。"你看到他背上有愈合程度不同的瘀伤。'
        },
        options: [
            { id: 'A', text: { en: '🕵️ Document & Report: "Treat normally. Be nice. Document EVERYTHING. Report to CPS privately."', th: '🕵️ บันทึกและรายงาน: "รักษาปกติ ดีด้วย บันทึกทุกเอย่าง รายงาน CPS ลับหลัง"', zh: '🕵️ 记录和报告："正常治疗。态度要好。记录一切。私下向儿童保护服务报告。"' }, consequence: { en: '✅ Protector. You build a legal case without endangering the child now. Smart.', th: '✅ ผู้ปกป้อง คุณสร้างพยานหลักฐานโดยไม่ทำให้เด็กเสี่ยงตอนนี้ ฉลาด', zh: '✅ 保护者。你在不危及孩子的情况下建立了法律案件。聪明。' }, stats: { competence: 70, ethics: 90, leadership: 60, innovation: 30 } },
            { id: 'B', text: { en: '😠 Confront Parents: "These bruises aren\'t from falling! Did you hit him?!?"', th: '😠 เผชิญหน้าพ่อแม่: "รอยช้ำนี่ไม่ได้มาจากตก! คุณตึเขาเหรอ?!?"', zh: '😠 与父母对峙："这些瘀伤不是摔的！你打他了吗？！?"' }, consequence: { en: '🛑 Danger. Parents get defensive/violent. refuse transport. Child stays in danger. Bad move.', th: '🛑 อันตราย พ่อแม่ป้องกันตัว/ก้าวร้าว ปฏิเสธส่ง เด็กอยู่ในอันตราย ก้าวพลาด', zh: '🛑 危险。父母变得防御/暴力。拒绝转运。孩子仍处于危险中。糟糕的一步。' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🙈 Ignore: "Not my job to judge. Fix the arm. Transport."', th: '🙈 เมิน: "ไม่ใช่งานฉันตัดสิน ดามแขน ส่ง"', zh: '🙈 忽略："不是我的工作去评判。固定手臂。转运。"' }, consequence: { en: '📉 Mandatory Reporter Failure. You broke the law. Child returns to abuse environment.', th: '📉 ล้มเหลวหน้าที่ผู้รายงาน คุณทำผิดกฎหมาย เด็กกลับไปโดนทำร้าย', zh: '📉 强制报告失败。你犯法了。孩子回到受虐环境。' }, stats: { competence: 20, ethics: 0, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🚓 Police Assist: "Request PD for \'accident report\'. Let them see the bruises."', th: '🚓 ตำรวจช่วย: "ขอตวรจทำ \'รายงานอุบัติเหตุ\' ให้พวกเขาเห็นรอยช้ำ"', zh: '🚓 警察协助："请求警察做\'事故报告\'。让他们看看瘀伤。"' }, consequence: { en: '🤝 Teamwork. Cops document scene conditions. Adds weight to CPS report.', th: '🤝 ทีมเวิร์ค ตำรวจบันทึกสภาพที่เกิดเหตุ เพิ่มน้ำหนักรายงาน CPS', zh: '🤝 团队合作。警察记录现场情况。增加儿童保护服务报告的分量。' }, stats: { competence: 60, ethics: 70, leadership: 60, innovation: 40 } }
        ]
    },
    {
        id: 'paramedic_034',
        text: {
            en: '🍬 The DKA vs Drunk: College kid found passed out at a party. Smells fruity. Friends say "He drank a lot." Breathalyzer is 0.00.',
            th: '🍬 DKA หรือ เมา: เด็กมหาลัยสลบที่ปาร์ตี้ กลิ่นผลไม้ เพื่อนบอก "ดิ่มเยอะ" เป่าแอลกอฮอล์ 0.00',
            zh: '🍬 糖尿病酮症酸中毒 vs 醉酒：大学生在派对上昏倒。闻起来有水果味。朋友说"他喝了很多。"呼吸分析仪是0.00。'
        },
        options: [
            { id: 'A', text: { en: '🧪 Check Sugar: "Fruity breath = Ketones! Specific Gravity check! It\'s DKA!"', th: '🧪 เช็คน้ำตาล: "กลิ่นผลไม้ = คีโตน! เช็คค่าน้ำตาล! นี่ DKA!"', zh: '🧪 查血糖："水果味呼吸=酮体！查比重！是DKA！"' }, consequence: { en: '🏆 Diagnostic Win. Glucose is "High". You start fluids. You saved him from coma.', th: '🏆 ชนะการวินิจฉัย น้ำตาล "สูง" เริ่มน้ำเกลือ คุณช่วยเขาจากโคม่า', zh: '🏆 诊断胜利。血糖"高"。你开始输液。你救了他免于昏迷。' }, stats: { competence: 90, ethics: 60, leadership: 60, innovation: 50 } },
            { id: 'B', text: { en: '🍺 Assume Drunk: "Breathalyzer is broken. He\'s at a party. Let him sleep it off."', th: '🍺 เหมาว่าเมา: "เครื่องเป่าพัง เขาอยู่ปาร์ตี้ ให้เขานอนพัก"', zh: '🍺 假设醉酒："呼吸分析仪坏了。他在派对上。让他睡一觉就好了。"' }, consequence: { en: '☠️ Fatal Mistake. He dies of acidosis in his sleep. "Fruity breath" is a classic sign you missed.', th: '☠️ พลาดถึงตาย เขาตายจากกรดเกินขณะหลับ "กลิ่นผลไม้" สัญญาณคลาสสิกที่คุณพลาด', zh: '☠️ 致命错误。他在睡梦中死于酸中毒。"水果味呼吸"是你错过的经典迹象。' }, stats: { competence: 10, ethics: 10, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '💉 Narcan: "Unconscious young person = Drugs. Give Narcan."', th: '💉 Narcan: "คนหนุ่มสาวหมดสติ = ยา ให้ Narcan"', zh: '💉 纳洛酮："昏迷的年轻人=毒品。给纳洛酮。"' }, consequence: { en: '🚫 Wrong Path. Nothing happens. You waste time chasing drugs while his blood turns to acid.', th: '🚫 ผิดทาง ไม่เกิดอะไรขึ้น เสียเวลาไล่ล่ายาขณะที่เลือดเขาเป็นกรด', zh: '🚫 走错路。什么也没发生。你在血液变酸时浪费时间追逐毒品。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🏥 Transport Unknown: "I don\'t know what it is. Just take him in."', th: '🏥 ส่งแบบไม่รู้: "ไม่รู้ว่าเป็นอะไร แค่ส่งไป"', zh: '🏥 未知转运："我不知道是什么。带他进去就行。" ' }, consequence: { en: '🤷 Passive. Hospital figures it out. Patient survives but you brought no value.', th: '🤷 เฉยเมย โรงพยาบาลจัดการ ผู้ป่วยรอดแต่คุณไร้ค่า', zh: '🤷由于。医院搞清楚了。病人幸存但你没有产生价值。' }, stats: { competence: 40, ethics: 40, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_035',
        text: {
            en: '🖐️ The Traumatic Amputation: Construction worker cut off his hand. Hand is on the dirty floor. Bleeding is controlled with tourniquet.',
            th: '🖐️ การตัดอวัยวะจากอุบัติเหตุ: คนงานก่อสร้างมือขาด มืออยู่บนพื้นสกปรก เลือดหยุดด้วยชะเนาะ',
            zh: '🖐️ 创伤性截肢：建筑工人切断了他的手。手在脏地板上。出血已用止血带控制。'
        },
        options: [
            { id: 'A', text: { en: '❄️ Preserve Hand: "Wrap hand in damp gauze, bag it, put bag on ice. Don\'t freeze directly!"', th: '❄️ เก็บมือ: "ห่อมือกอซชื้น ใส่ถุง วางถุงบนน้ำแข็ง อย่าแช่แข็งตรงๆ!"', zh: '❄️ 保存手："用湿纱布包好手，装袋，把袋子放在冰上。不要直接冷冻！"' }, consequence: { en: '✅ Perfect Preservation. Surgeons reattach it successfully. Function restored.', th: '✅ เก็บรักษาดีเลิศ ศัลย์ต่อติด ฟังก์ชันกลับมา', zh: '✅ 完美保存。外科医生成功重新接上。功能恢复。' }, stats: { competence: 80, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🧊 Direct Ice: "Put the hand directly in the ice bucket! Keep it cold!"', th: '🧊 แช่แข็งตรง: "เอามือใส่น้ำแข็งเลย! ให้เย็น!"', zh: '🧊 直接冰冻："把手直接放在冰桶里！保持寒冷！"' }, consequence: { en: '🥶 Frostbite. Tissue death prevents reattachment. You saved the part but killed the cells.', th: '🥶 เนื้อตาย ความเย็นทำลายเนื้อเยื่อต่อไม่ได้ คุณเก็บชิ้นส่วนแต่ฆ่าเซลล์', zh: '🥶 冻伤。组织死亡阻碍重新接合。你保存了部件但杀死了细胞。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🚮 Leave It: "Too dirty. Can\'t save it. Focus on patient survival."', th: '🚮 ทิ้งมัน: "สกปรกเกิน เก็บไม่ได้ โฟกัสผู้ป่วยรอด"', zh: '🚮 留下它："太脏了。救不了。专注于病人得救。"' }, consequence: { en: '👊 Disability. Patient lives with a stump. He sues you because it was salvageable.', th: '👊 พิการ ผู้ป่วยอยู่กับตอแขน เขาฟ้องคุณเพราะมันเก็บได้', zh: '👊 残疾。病人带着残肢生活。他起诉你，因为它是可挽救的。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🥛 Milk Cleanse: "Wash it in milk! Like a tooth!"', th: '🥛 ล้างนม: "ล้างในนม! เหมือนฟัน!"', zh: '🥛 牛奶清洗："用牛奶洗！就像牙齿一样！"' }, consequence: { en: '🤨 Weird Science. Not standard for limbs. Might introduce bacteria. Surgeons confused.', th: '🤨 วิทย์แปลก ไม่ใช่มาตรฐานแขนขา อาจเพิ่มแบคทีเรีย ศัลย์งง', zh: '🤨 怪异科学。不是肢体的标准。可能引入细菌。外科医生困惑。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 60 } }
        ]
    },
    {
        id: 'paramedic_036',
        text: {
            en: '🚙 The Multi-Car Pileup: 20 cars involved. Fog. Chaos. You are the first unit on scene. People are screaming everywhere.',
            th: '🚙 รถชนวินาศสันตะโร: 20 คัน หมอก วุ่นวาย คุณเป็นคันแรกที่ถึง คนกรีดร้องทั่ว',
            zh: '🚙 多车连环相撞：20辆车卷入。雾。混乱。你是第一个到达现场的单位。到处都有人在尖叫。'
        },
        options: [
            { id: 'A', text: { en: '📋 Command Mode: "I am Incident Commander! Partner, start triage! I\'ll call resources!"', th: '📋 โหมดบัญชาการ: "ฉันคือผบ.เหตุการณ์! คู่หู เริ่มคัดแยก! ฉันเรียกทรัพยากร!"', zh: '📋 指挥模式："我是事故指挥官！搭档，开始分诊！我呼叫资源！"' }, consequence: { en: '🏆 Leadership Win. You organize the chaos. Help arrives effectively. Mass lives saved.', th: '🏆 ชนะผู้นำ คุณจัดการความวุ่นวาย ความช่วยเหลือมาอย่างมีผล ช่วยชีวิตหมู่', zh: '🏆 领导力胜利。你组织混乱。帮助有效到达。拯救了大量生命。' }, stats: { competence: 70, ethics: 60, leadership: 100, innovation: 40 } },
            { id: 'B', text: { en: '🏃 Start Treating: "Run to the first screaming person! Tourniquet! Bandage!"', th: '🏃 เริ่มรักษา: "วิ่งไปหาคนแรกที่ร้อง! ชะเนาะ! ทำแผล!"', zh: '🏃 开始治疗："跑到第一个尖叫的人那里！止血带！包扎！"' }, consequence: { en: '❌ Tunnel Vision. You save one person while 10 die waiting for backup you didn\'t call.', th: '❌ วิสัยทัศน์อุโมงค์ คุณช่วย 1 คน ขณะที่ 10 คนตายรอกำลังเสริมที่คุณไม่เรียก', zh: '❌ 隧道视野。你救了一个人，而10个人在等待你没有呼叫的支援时死亡。' }, stats: { competence: 50, ethics: 50, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🚗 Stay in Truck: "Scene unsafe! Wait for Fire Dept to block traffic!"', th: '🚗 อยู่ในรถ: "พื้นที่ไม่ปลอดภัย! รอดับเพลิงกั้นรถ!"', zh: '🚗 待在车里："现场不安全！等消防队封锁交通！"' }, consequence: { en: '🛡️ Over-Safety. You protect yourself but delay triage by 15 mins. Recoverable victims die.', th: '🛡️ ปลอดภัยเกิน คุณป้องกัยตัวแต่ช้าคัดแยก 15 นาที เหยื่อที่น่าจะรอดตาย', zh: '🛡️ 过度安全。你保护了自己，但推迟了15分钟分诊。可恢复的受害者死亡。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🗣️ Megaphone Triage: "If you can walk, walk to my voice! Green tags clear the zone!"', th: '🗣️ คัดแยกโทรโข่ง: "ถ้าเดินไหว เดินมาทางเสียง! ป้ายเขียวเคลียร์พื้นที่!"', zh: '🗣️ 扩音器分诊："如果你能走，走到我的声音这里！绿标清除区域！"' }, consequence: { en: '✅ Effective. Sorts out the walking wounded instantly. Clears half the chaos.', th: '✅ ได้ผล แยกคนเจ็บเดินได้ทันที เคลียร์ครึ่งหนึ่งของความวุ่นวาย', zh: '✅ 有效。立即分拣出能行走的伤员。清除了一半的混乱。' }, stats: { competence: 60, ethics: 50, leadership: 70, innovation: 60 } }
        ]
    },
    {
        id: 'paramedic_037',
        text: {
            en: '✒️ The Tattoo DNR: Patient codes. He has "DO NOT RESUSCITATE" tattooed on his chest. No paper form found.',
            th: '✒️ รอยสัก DNR: ผู้ป่วยหัวใจหยุด เขามีรอยสัก "DO NOT RESUSCITATE" บนหน้าอก หาใบไม่เจอ',
            zh: '✒️ 纹身放弃抢救：患者停搏。他胸口纹着"DO NOT RESUSCITATE"（放弃抢救）。未找到纸质表格。'
        },
        options: [
            { id: 'A', text: { en: '⚡ Work Him: "Tattoos aren\'t legal docs! Maybe he regrets it! CPR!"', th: '⚡ ปั๊มเขา: "รอยสักไม่ใช่กฎหมาย! เขาอาจเสียใจ! CPR!"', zh: '⚡ 抢救他："纹身不是法律文件！也许他后悔了！心肺复苏！"' }, consequence: { en: '✅ Legally Safe. You resuscitate. Standard protocol. He sues later for "wrongful life" (rare but possible).', th: '✅ ปลอดภัยทางกฎหมาย คุณกู้ชีพ ระเบียบปกติ เขาฟ้องทีหลัง "ชีวิตที่ผิด" (หายากแต่เป็นไปได้)', zh: '✅ 法律安全。你复苏了。标准方案。他后来起诉"错误生命"（虽罕见但可能）。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Honor Tattoo: "The intent is clear. I\'m not cracking ribs on a guy who wrote NO on his chest."', th: '🛑 เคารพรอยสัก: "เจตนาชัดเจน ฉันไม่หักซี่โครงคนที่เขียนว่า NO บนอก"', zh: '🛑 尊重纹身："意图很明确。我不会在一个胸口写着NO的人身上压断肋骨。"' }, consequence: { en: '⚖️ Grey Area. Most systems say ignore tattoos. You risk license, but ethics feel right.', th: '⚖️ พื้นที่สีเทา ระบบส่วนใหญ่บอกเมินรอยสัก คุณเสี่ยงใบอนุญาต แต่ใจรู้สึกถูก', zh: '⚖️ 灰色地带。大多数系统说忽略纹身。你拿执照冒险，但伦理上感觉是对的。' }, stats: { competence: 50, ethics: 80, leadership: 40, innovation: 50 } },
            { id: 'C', text: { en: '🤳 Call Consult: "Get a doctor on the recorded line. Describe tattoo. Ask for order."', th: '🤳 โทรปรึกษา: "ให้หมออยู่ในสายบันทึก อธิบายรอยสัก ขอคำสั่ง"', zh: '🤳 呼叫咨询："让医生在录音线上。描述纹身。请求指令。"' }, consequence: { en: '🏆 CYA Win. Doctor takes the liability. "Stop CPR." You followed orders.', th: '🏆 ชนะการปัดความรับผิด หมอรับผิดชอบ "หยุด CPR" คุณทำตามคำสั่ง', zh: '🏆 自保胜利。医生承担责任。"停止心肺复苏。"你遵循了命令。' }, stats: { competence: 70, ethics: 70, leadership: 60, innovation: 30 } },
            { id: 'D', text: { en: '🚫 Partial Effort: "Do slow CPR while partner looks for papers."', th: '🚫 พยายามครึ่งๆ: "ปั๊มช้าๆ ขณะคู่หูหาใบ"', zh: '🚫 部分努力："做缓慢的心肺复苏，同时搭档找文件。"' }, consequence: { en: '👎 Bad Medicine. Brain damage territory. Either do it or don\'t.', th: '👎 การแพทย์แย่ โซนสมองเสียหาย จะทำก็ทำไม่ทำก็ไม่ทำ', zh: '👎 糟糕的医学。脑损伤领域。要么做要么不做。' }, stats: { competence: 20, ethics: 10, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_038',
        text: {
            en: '💨 The CO Leak: Family of 4 all feeling "flu-like." Headache, nausea. Winter time. Heater is running. You get a headache too upon entering.',
            th: '💨 แก๊ส CO รั่ว: ครอบครัว 4 คนรู้สึก "เหมือนเป็นหวัด" ปวดหัว คลื่นไส้ หน้าหนาว ฮีตเตอร์เปิด คุณเข้าไปก็ปวดหัว',
            zh: '💨 一氧化碳泄漏：一家4口都感觉"像流感"。头痛，恶心。冬季。取暖器开着。你一进去也头痛。'
        },
        options: [
            { id: 'A', text: { en: '🤢 Evacuate Immediately: "Everybody out! Now! Leave everything! CO leak!"', th: '🤢 อพยพด่วน: "ทุกคนออกไป! เดี๋ยวนี้! ทิ้งทุกอย่าง! แก๊สรั่ว!"', zh: '🤢 立即撤离："所有人出去！现在！以此为重！一氧化碳泄漏！"' }, consequence: { en: '🏆 Scene Safety. You recognized the signs. CO levels were lethal. You saved 4 lives + crew.', th: '🏆 ความปลอดภัยพื้นที่ คุณรู้สัญญาณ ระดับ CO ถึงตาย คุณช่วย 4 ชีวิต + ทีม', zh: '🏆 现场安全。你识别了迹象。一氧化碳水平是致命的。你救了4条命+机组人员。' }, stats: { competence: 90, ethics: 80, leadership: 90, innovation: 40 } },
            { id: 'B', text: { en: '💊 Treat Flu: "It\'s flu season. Take some ibuprofen. Hydrate."', th: '💊 รักษาหวัด: "หน้าหวัด กินยาแก้ปวด ดื่มน้ำ"', zh: '💊 治疗流感："现在是流感季节。吃点布洛芬。补水。"' }, consequence: { en: '☠️ Mass Death. They all die in their sleep. You passed out in the rig later. Catastrophe.', th: '☠️ ตายหมู่ เขาตายกันหมดตอนหลับ คุณสลบในรถทีหลัง หายนะ', zh: '☠️ 大规模死亡。他们都在睡梦中死去。你后来在车里昏倒了。灾难。' }, stats: { competence: 10, ethics: 0, leadership: -50, innovation: 0 } },
            { id: 'C', text: { en: '📟 Check Detector: "Walk back to truck to get CO detector. Verify first."', th: '📟 เช็คเครื่องจับ: "เดินกลับรถไปเอาเครื่อง CO ยืนยันก่อน"', zh: '📟 检查探测器："走回卡车拿一氧化碳探测器。先验证。"' }, consequence: { en: '⚠️ Risk. Values confirm high CO. But you exposed yourself unnecessarily.', th: '⚠️ เสี่ยง ค่า CO สูงยืนยัน แต่คุณเอาตัวไปเสี่ยงโดยไม่จำเป็น', zh: '⚠️ 风险。数值确认高一氧化碳。但你不必要地暴露了自己。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🚪 Open Windows: "Open all windows. Air it out. Treat inside."', th: '🚪 เปิดหน้าต่าง: "เปิดหน้าต่างทุกบาน ระบายอากาศ รักษาข้างใน"', zh: '🚪 打开窗户："打开所有窗户。通风。在里面治疗。"' }, consequence: { en: '⏳ Slow Fix. Reduces gas but still dangerous. Active source might overwhelm ventilation.', th: '⏳ แก้ช้า ลดแก๊สแต่ยังอันตราย แหล่งกำเนิดอาจชนะการระบาย', zh: '⏳ 缓慢修复。减少气体但仍然危险。活性源可能会压倒通风。' }, stats: { competence: 50, ethics: 60, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'paramedic_039',
        text: {
            en: '🎖️ The Veteran Flashback: Combat vet with PTSD hearing fireworks. He is hiding under a car with a knife, screaming about "incoming." Police are shouting at him.',
            th: '🎖️ ภาพหลอนทหารผ่านศึก: ทหารผ่านศึก PTSD ได้ยินพลุ ซ่อนใต้รถถือมีด ตะโกน "ข้าศึกบุก" ตำรวจตะโกนใส่',
            zh: '🎖️ 老兵闪回：患有PTSD的战斗老兵听到烟花声。他拿着刀躲在车底，大喊"有来袭"。警察对他大喊大叫。'
        },
        options: [
            { id: 'A', text: { en: '🗣️ Military Rapport: "Sergeant! This is the medic! Sector is secure! Stand down soldier!"', th: '🗣️ ใช้ภาษาทหาร: "จ่า! นี่หมอ! พื้นที่ปลอดภัยแล้ว! พักได้ทหาร!"', zh: '🗣️ 军事默契："中士！我是医护兵！区域安全！退下士兵！"' }, consequence: { en: '🏆 Connect. He recognizes the lingo. Snaps out of it. Hands over knife. De-escalated.', th: '🏆 เชื่อมต่อ เขาจำภาษาได้ ได้สติ คืนมีด ลดระดับความรุนแรง', zh: '🏆 连接。他认出了行话。清醒过来。交出刀。局势缓和。' }, stats: { competence: 70, ethics: 80, leadership: 80, innovation: 80 } },
            { id: 'B', text: { en: '👮 Let Cops Handle: "He has a knife. Taser him. Not my scene."', th: '👮 ให้ตำรวจจัดการ: "เขามีมีด ช็อตเลย ไม่ใช่งานฉัน"', zh: '👮 让警察处理："他有刀。电击他。不关我的事。"' }, consequence: { en: '⚡ Violence. He gets tased/shot. Psychological trauma worsened. Physical injuries added.', th: '⚡ รุนแรง โดนช็อต/ยิง แผลใจแย่ลง เจ็บตัวเพิ่ม', zh: '⚡ 暴力。他被电击/枪击。心理创伤加重。增加了身体伤害。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🩹 Approach Slowly: "Crawling under the car with him. Soft voice. \'It\'s okay\'."', th: '🩹 เข้าหาช้าๆ: "คลานเข้าไปใต้รถกับเขา เสียงนุ่ม \'ไม่เป็นไรนะ\'"', zh: '🩹 慢慢靠近："爬到车底和他在一起。轻声细语。\'没事了\'。"' }, consequence: { en: '⚠️ High Risk. You are in stabbing range. He might mistake you for enemy. Dangerous empathy.', th: '⚠️ เสี่ยงสูง อยู่ในระยะแทง เขาอาจนึกว่าศัตรู ความเห็นใจที่อันตราย', zh: '⚠️ 高风险。你在刺伤范围内。他可能把你误认为敌人。危险的同理心。' }, stats: { competence: 50, ethics: 70, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '💉 Sedation Plan: "Cops distract him. I jab him from behind. Ketamine."', th: '💉 แผนยาสลบ: "ตำรวจหลอกล่อ ฉันแทงข้างหลัง คีตามีน"', zh: '💉 镇静计划："警察分散他注意力。我从后面刺他。氯胺酮。"' }, consequence: { en: '🤐 Functional but Rough. Solves the immediate threat but destroys trust. Chemically restrained.', th: '🤐 ใช้ได้แต่หยาบ แก้ภัยคุกคามแต่ทำลายความไว้ใจ ถูกมัดด้วยเคมี', zh: '🤐以此但粗暴。解决了直接威胁但破坏了信任。化学约束。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 30 } }
        ]
    },
    {
        id: 'paramedic_040',
        text: {
            en: '🕊️ The Hospice Patient: Terminal cancer. Agonal breathing (gasping). Family is panicking "Do something!" Hospice nurse is not there.',
            th: '🕊️ ผู้ป่วยระยะสุดท้าย: มะเร็งระยะสุดท้าย หายใจเฮือก (agonal) ญาติแตกตื่น "ทำอะไรสักอย่าง!" พยาบาลประคับประคองไม่อยู่',
            zh: '🕊️ 临终关怀病人：晚期癌症。濒死呼吸（喘息）。家人惊慌失措"做点什么！"临终关怀护士不在。'
        },
        options: [
            { id: 'A', text: { en: '🎓 Education: "This is the natural dying process. He is not in pain. Let\'s make him comfortable."', th: '🎓 ให้ความรู้: "นี่คือกระบวนการตายตามธรรมชาติ เขาไม่เจ็บ ทำให้เขาสบายตัวเถอะ"', zh: '🎓 教育："这是自然死亡过程。他不痛苦。让我们让他舒服点。"' }, consequence: { en: '❤️ Emotional Care. You calm the family. Patient dies peacefully. No futile trauma.', th: '❤️ ดูแลใจ สงบสติญาติ ผู้ป่วยตายสงบ ไม่มีการทารุณไร้ผล', zh: '❤️ 情感关怀。你安抚家人。病人安详离世。没有徒劳的创伤。' }, stats: { competence: 70, ethics: 90, leadership: 80, innovation: 40 } },
            { id: 'B', text: { en: '⚡ Full Code: "Start CPR! Bag him! Tubed! Transport!"', th: '⚡ กู้ชีพเต็ม: "เริ่ม CPR! บีบแบ็ก! ใส่ท่อ! ส่ง!"', zh: '⚡ 全力抢救："开始心肺复苏！给他通气！插管！转运！"' }, consequence: { en: '💔 Dignity Lost. You torture a dying man. Ribs broken. Family regrets it later. Bad ethics.', th: '💔 ศักดิ์ศรีหาย คุณทรมานคนใกล้ตาย ซี่โครงหัก ญาติเสียใจทีหลัง จริยธรรมแย่', zh: '💔 尊严丧失。你折磨一个垂死的人。肋骨断裂。家人后来后悔了。糟糕的伦理。' }, stats: { competence: 40, ethics: 10, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '💊 Morphine: "Give pain meds to settle the breathing. Comfort measure."', th: '💊 มอร์ฟีน: "ให้ยาแก้ปวดให้หายใจนิ่ง มาตรการสบายตัว"', zh: '💊 吗啡："给止痛药平复呼吸。舒适措施。"' }, consequence: { en: '✅ Palliative Skill. Helps air hunger. Hastens death slightly but increases comfort. Appropriate.', th: '✅ ทักษะประคับประคอง ช่วยหิวอากาศ เร่งตายนิดหน่อยแต่เพิ่มความสบาย เหมาะสม', zh: '✅ 姑息技能。帮助空气饥饿。稍微加速死亡但增加舒适度。适当。' }, stats: { competence: 80, ethics: 80, leadership: 60, innovation: 30 } },
            { id: 'D', text: { en: '🚗 Transport Routine: "We can\'t declare death here. Take him to ER to die."', th: '🚗 ส่งตามระเบียบ: "เราประกาศตายที่นี่ไม่ได้ พาไปตายที่ ER"', zh: '🚗 照常转运："我们不能在这里宣布死亡。带他去急诊室死。"' }, consequence: { en: '🏥 Cold Bureaucracy. He dies under fluorescent lights among strangers. Family feels robbed.', th: '🏥 ระบบราชการเย็นชา เขาตายใต้ไฟนีออนท่ามกลางคนแปลกหน้า ญาติรู้สึกถูกปล้น', zh: '🏥 冷酷的官僚主义。他在陌生人中间死在日光灯下。家人感觉被剥夺了。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_041',
        text: {
            en: '🔫 The Active Shooter Triage: Scene is "warm." Shooter is down but not confirmed. You find a screaming victim with a leg wound (Green tag) and a silent victim with a chest wound (Red tag). You can only drag one to safety.',
            th: '🔫 การคัดแยกกราดยิง: พื้นที่ "อุ่น" คนยิงถูกยิงแต่ยังไม่ยืนยัน พบเหยื่อกรีดร้องแผลขา (ป้ายเขียว) และเหยื่อเงียบแผลอก (ป้ายแดง) ลากได้คนเดียว',
            zh: '🔫 活跃射手分诊：现场是"温热"的。射手已倒下但未确认。你发现一名腿部受伤的尖叫受害者（绿标）和一名胸部受伤的沉默受害者（红标）。你只能拖一个人到安全地带。'
        },
        options: [
            { id: 'A', text: { en: '🔴 Drag Red: "Treat the most critical first! The green guy can wait!"', th: '🔴 ลากแดง: "รักษาวิกฤตสุดก่อน! คนเขียวรอได้!"', zh: '🔴 拖红标："先治疗最危急的！绿标家伙可以等！"' }, consequence: { en: '❌ Tactical Error. Red requires too much care. In a warm zone, you maximize survivors. Green guy could have walked with help.', th: '❌ พลาดทางยุทธวิธี แดงต้องการดูแลมากไป ในโซนอุ่น ต้องเน้นจำนวนรอด คนเขียวเดินได้ถ้าช่วย', zh: '❌ 战术错误。红标需要太多护理。在温热区域，你要最大化幸存者。绿标家伙本可以在帮助下行走。' }, stats: { competence: 40, ethics: 60, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🟢 Drag Green: "Get the viable victim out! Red is likely dead. Hard choices."', th: '🟢 ลากเขียว: "เอาคนที่รอดแน่ออกไป! แดงน่าจะตาย ทางเลือกยาก"', zh: '🟢 拖绿标："把能存活的受害者带出去！红标可能死了。艰难的选择。"' }, consequence: { en: '🏆 Triage Reality. Hardest call. Saving the salvageable is the rule of mass casualty.', th: '🏆 ความจริงการคัดแยก ตัดสินใจยากสุด ช่วยคนที่รอดได้คือกฎของเหตุการณ์หมู่', zh: '🏆 分诊现实。最艰难的决定。拯救可挽救者是大规模伤亡的规则。' }, stats: { competence: 80, ethics: 50, leadership: 70, innovation: 40 } },
            { id: 'C', text: { en: '🛡️ Stay Put: "Too dangerous! Hunker down and treat both until SWAT clears it!"', th: '🛡️ อยู่เฉย: "อันตรายเกิน! หมอบและรักษาทั้งคู่จน SWAT เคลียร์!"', zh: '🛡️ 原地待命："太危险了！蹲下治疗两人，直到特警队清除！"' }, consequence: { en: '☠️ Sitting Ducks. Shooter had a backup plan. Explosive goes off. Everyone dies.', th: '☠️ เป้าล่อ คนยิงมีแผนสำรอง ระเบิดทำงาน ตายหมด', zh: '☠️ 活靶子。射手有后备计划。爆炸发生。所有人都死了。' }, stats: { competence: 20, ethics: 30, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🏃 Run for Help: "I need a stretcher! Running back to the cold zone!"', th: '🏃 วิ่งขอช่วย: "ต้องการเปล! วิ่งกลับไปโซนเย็น!"', zh: '🏃 跑去求助："我需要担架！跑回冷区！"' }, consequence: { en: '📉 Abandonment. You left patients in a kill zone. Cowardice under fire.', th: '📉 ทอดทิ้ง คุณทิ้งผู้ป่วยในโซนฆ่า ขี้ขลาดเมื่อเจอศึก', zh: '📉 遗弃。你把病人留在杀戮区。战火下的懦弱。' }, stats: { competence: 10, ethics: 0, leadership: -50, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_042',
        text: {
            en: '🏙️ The Frequent Flyer: "Crazy Karl" calls 911 for chest pain for the 50th time this year. Usually wants a sandwich. Today he seems quiet, pale, and sweaty.',
            th: '🏙️ ขาประจำ: "คาร์ลคนบ้า" โทร 911 เจ็บหน้าอกครั้งที่ 50 ของปี ปกติอยากได้แซนวิช วันนี้เขาดูเงียบ ซีด และเหงื่อออก',
            zh: '🏙️ 常客："疯子卡尔"今年第50次因为胸痛打911。通常是想要三明治。今天他看起来很安静，脸色苍白，出汗。'
        },
        options: [
            { id: 'A', text: { en: '🥪 Dismiss: "Cut it out Karl. Here\'s a sandwich. Sign the refusal."', th: '🥪 ไล่: "พอได้แล้วคาร์ล อะแซนวิช เซ็นปฏิเสธซะ"', zh: '🥪 打发："别闹了卡尔。给你三明治。签拒收单。"' }, consequence: { en: '☠️ STEMI. The boy who cried wolf finally had a wolf. He dies of a massive heart attack.', th: '☠️ STEMI เด็กเลี้ยงแกะเจอหมาป่าจริงๆ เขาตายจากหัวใจวายเฉียบพลัน', zh: '☠️ STEMI（ST段抬高型心肌梗死）。喊狼来了的孩子终于遇到了狼。他死于大面积心脏病发作。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } },
            { id: 'B', text: { en: '📟 12-Lead ECG: "He looks different today. Trust your eyes, not history. Full workup."', th: '📟 คลื่นหัวใจ 12: "วันนี้เขาดูต่าง เชื่อตา ไม่เชื่อประวัติ ตรวจเต็ม"', zh: '📟 12导联心电图："他今天看起来不一样。相信你的眼睛，而不是病史。全面检查。"' }, consequence: { en: '🏆 Good Instincts. It IS a heart attack. You catch it despite the bias. Professionalism.', th: '🏆 สัญชาตญาณดี หัวใจวายจริง คุณจับได้แม้มีอคติ ความเป็นมืออาชีพ', zh: '🏆 直觉敏锐。真的是心脏病发作。尽管有偏见，你还是抓住了它。专业精神。' }, stats: { competence: 90, ethics: 80, leadership: 60, innovation: 20 } },
            { id: 'C', text: { en: '🚓 Police Transport: "PD can take him to detox. He smells like booze."', th: '🚓 ตำรวจส่ง: "ตำรวจพาไปล้างพิษได้ เขามีกลิ่นเหล้า"', zh: '🚓 警察转运："警察可以带他去戒毒所。他闻起来有酒味。"' }, consequence: { en: '⚖️ Dump. Police find him dead in the back seat. Inquiry launched.', th: '⚖️ ทิ้งงาน ตำรวจเจอเขาตายเบาะหลัง สอบสวนเริ่ม', zh: '⚖️ 推卸。警察发现他死在后座。启动调查。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🚑 Slow Transport: "Fine, get in. No lights/sirens. Just a taxi ride."', th: '🚑 ส่งช้า: "เออ ขึ้นมา ไม่เปิดไฟ/ไซเรน แค่แท็กซี่"', zh: '🚑 慢速转运："好吧，上车。不开灯/警报。只是出租车。" ' }, consequence: { en: '📉 Delay. He codes in the truck. You are unprepared. Poor patient care.', th: '📉 ล่าช้า เขาหยุดหายใจในรถ คุณไม่พร้อม ดูแลผู้ป่วยแย่', zh: '📉 延误。他在车里停搏。你毫无准备。糟糕的病人护理。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_043',
        text: {
            en: '📢 The Bystander CPR: Arrive at supermarket. Man down. A frantic layperson is doing terrible CPR (pushing on stomach).',
            th: '📢 CPR พลเมืองดี: ถึงซูเปอร์มาร์เก็ต คนล้ม ชาวบ้านตื่นตระหนกทำ CPR แย่มาก (กดที่ท้อง)',
            zh: '📢 旁观者CPR：到达超市。有人倒下。一个疯狂的外行在做糟糕的CPR（按压胃部）。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Take Over: "Get out of the way! I\'m a professional!" (Shove them aside)', th: '🛑 เข้าแทน: "หลบไป! ฉันมืออาชีพ!" (ผลักออก)', zh: '🛑 接管："让开！我是专业的！"（把他们推开）' }, consequence: { en: '⚠️ Rough. You establish better CPR, but you alienated the helper. Could be smoother.', th: '⚠️ หยาบ คุณทำ CPR ดีขึ้น แต่ทำลายน้ำใจคนช่วย น่าจะนุ่มนวลกว่านี้', zh: '⚠️ 粗鲁。你建立了更好的CPR，但你疏远了帮手。本可以更顺畅。' }, stats: { competence: 70, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Coach: "You\'re doing great! Just move your hands up to the center of the chest! Hard and fast!"', th: '🤝 โค้ช: "เยี่ยมมาก! แค่เลื่อนมือขึ้นกลางอก! แรงและเร็ว!"', zh: '🤝 指导："你做得很好！只是把手移到胸部中央！既用力又快！"' }, consequence: { en: '🏆 Force Multiplier. Bystander corrects form. You can now focus on airway/IV while they pump. Leadership.', th: '🏆 ทวีคูณกำลัง ชาวบ้านแก้ท่า คุณโฟกัสทางเดินหายใจ/น้ำเกลือขณะเขาปั๊ม ภาวะผู้นำ', zh: '🏆 力量倍增器。旁观者矫正姿势。你可以在他们按压时专注于气道/静脉注射。领导力。' }, stats: { competence: 80, ethics: 80, leadership: 90, innovation: 60 } },
            { id: 'C', text: { en: '👀 Watch & Setup: "Let them continue while I get the pads on."', th: '👀 ดูและเตรียม: "ให้เขาทำต่อขณะฉันติดแผ่น"', zh: '👀 观察和设置："让他们继续，我贴电极片。"' }, consequence: { en: '❌ Ineffective. Stomach perfusions don\'t move blood. Brain dies while you set up.', th: '❌ ไร้ผล กดท้องเลือดไม่เดิน สมองตายขณะคุณเตรียม', zh: '❌ 无效。胃部灌注不能推动血液。你在设置时脑死亡。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '📢 Yell for Help: "Who knows CPR?! I need someone else!"', th: '📢 ตะโกนหาช่วย: "ใครเป็น CPR?! ขอคนอื่น!"', zh: '📢 大喊求助："谁会CPR？！我需要别人！"' }, consequence: { en: '⏳ Waste of Time. You fix it yourself or coach. Don\'t herd cats.', th: '⏳ เสียเวลา คุณแก้เองหรือสอน อย่ามัวหาคน', zh: '⏳ 浪费时间。你自己解决或指导。不要瞎忙活。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_044',
        text: {
            en: '🛗 The Elevator Birth: Woman in active labor stuck in elevator between floors. Crowning. Power out. Fire dept says "30 mins to open doors."',
            th: '🛗 คลอดในลิฟต์: ผู้หญิงเจ็บท้องคลอดติดในลิฟต์ระหว่างชั้น หัวโผล่ ไฟดับ ดับเพลิงบอก "30 นาทีเปิดประตู"',
            zh: '🛗 电梯分娩：临产妇女被困在楼层之间的电梯里。胎头着冠。停电。消防队说"30分钟开门。"'
        },
        options: [
            { id: 'A', text: { en: '👶 Deliver: "Gloves on! Sterile field! We are having a baby right here, right now!"', th: '👶 ทำคลอด: "ใส่ถุงมือ! พื้นที่ปราศจากเชื้อ! เราจะคลอดกันตรงนี้ ตอนนี้!"', zh: '👶 接生："戴手套！无菌区！我们要在这里，现在生孩子！"' }, consequence: { en: '🏆 Adaptability. Baby delivered safely. You suction and warm. Mom is calm. Great work.', th: '🏆 การปรับตัว คลอดปลอดภัย ดูดเสมหะและให้อุ่น แม่สงบ ยอดเยี่ยม', zh: '🏆 适应性。婴儿安全分娩。你吸痰并保暖。妈妈很冷静。干得好。' }, stats: { competence: 80, ethics: 70, leadership: 70, innovation: 60 } },
            { id: 'B', text: { en: '✋ Hold It In: "Tell mom to cross legs and breathe! Don\'t push until we get to hospital!"', th: '✋ อั้นไว้: "บอกแม่ไขว้ขาและหายใจ! อย่าเบ่งจนกว่าจะถึงโรงพยาบาล!"', zh: '✋ 憋住："告诉妈妈交叉双腿呼吸！到医院前不要用力！"' }, consequence: { en: '☠️ Cord Prolapse. Dangerous advice. Stopping labor causes distress. Baby suffers hypoxia.', th: '☠️ สายสะดือย้อย คำแนะนำอันตราย หยุดคลอดทำเครียด ทารกขาดออกซิเจน', zh: '☠️ 脐带脱垂。危险的建议。停止分娩导致窘迫。婴儿遭受缺氧。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🔨 Force Doors: "Try to pry the doors open with the jump kit!"', th: '🔨 งัดประตู: "ลองงัดประตูด้วยกระเป๋ายา!"', zh: '🔨 强行开门："试着用急救包撬开门！"' }, consequence: { en: '⚠️ Injury. You break the kit and strain your back. Doors don\'t budge. Distracted from patient.', th: '⚠️ บาดเจ็บ กระเป๋าพัง หลังเสีย ประตูไม่ขยับ ละเลยผู้ป่วย', zh: '⚠️ 受伤。你弄坏了急救包，扭伤了背。门纹丝不动。从病人身上分心。' }, stats: { competence: 30, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '💊 Sedate Mom: "Give her pain meds to knock her out. Pause the labor."', th: '💊 ทำให้แม่หลับ: "ให้ยาแก้ปวดให้หลับ หยุดคลอด"', zh: '💊 镇静妈妈："给她止痛药让她昏倒。暂停分娩。"' }, consequence: { en: '📉 Respiratory Depression. Baby comes out sedated and floppy. Needs resuscitation.', th: '📉 กดการหายใจ ทารกออกมาหลับและปวกเปียก ต้องกู้ชีพ', zh: '📉 呼吸抑制。婴儿出生时处于镇静和松弛状态。需要复苏。' }, stats: { competence: 10, ethics: 20, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_045',
        text: {
            en: '🤪 The Psychiatric Emergency: Man running in traffic, naked, sweating profusely, screaming incoherently. Superhuman strength - threw a cop off him. "Excited Delirium."',
            th: '🤪 ฉุกเฉินจิตเวช: ชายวิ่งในจราจร แก้ผ้า เหงื่อท่วม ตะโกนไม่รู้เรื่อง แรงเยอะผิดมนุษย์ - เหวี่ยงตำรวจกระเด็น "Excited Delirium"',
            zh: '🤪 精神病急诊：男子在车流中裸奔，大汗淋漓，语无伦次地尖叫。超人的力量——把一个警察甩开了。"兴奋性谵妄。"'
        },
        options: [
            { id: 'A', text: { en: '💉 Ketamine Dart: "Chemical restraint immediately! 5mg/kg IM! He will code from acidosis if we don\'t stop him!"', th: '💉 คีตามีน: "มัดด้วยเคมีด่วน! 5mg/kg IM! เขาจะหัวใจหยุดจากกรดเกินถ้าไม่หยุด!"', zh: '💉 氯胺酮飞镖："立即化学约束！5mg/kg肌注！如果我们不阻止他，他会因酸中毒而停搏！"' }, consequence: { en: '🏆 Life Saving. He goes down gently. Vital signs stabilize. You treat the metabolic storm.', th: '🏆 ช่วยชีวิตเขาสงบลง สัญญาณชีพนิ่ง รักษาพายุมะตาบอลิก', zh: '🏆 救命。他轻轻倒下。生命体征稳定。你治疗代谢风暴。' }, stats: { competence: 90, ethics: 70, leadership: 80, innovation: 70 } },
            { id: 'B', text: { en: '👮 Dogpile: "Everyone jump on him! Hold him down!"', th: '👮 รุมจับ: "ทุกคนกระโดดใส่! กดเขาไว้!"', zh: '👮 叠罗汉："所有人都扑上去！按住他！"' }, consequence: { en: '☠️ Positional Asphyxia. Compressing his chest while he fights leads to cardiac arrest. You killed him.', th: '☠️ ขาดอากาศหายใจจากการจัดท่า กดหน้าอกขณะเขาสู้ทำหัวใจหยุด คุณฆ่าเขา', zh: '☠️ 体位性窒息。在他挣扎时压迫他的胸部导致心脏骤停。你杀了他。' }, stats: { competence: 10, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🗣️ Talk Down: "Sir, please calm down. Put some clothes on."', th: '🗣️ กล่อม: "คุณครับ ใจเย็นๆ ใส่เสื้อผ้าเถอะ"', zh: '🗣️ 劝说："先生，请冷静。穿上衣服。"' }, consequence: { en: '❌ Impossible. His brain is cooking. Reason doesn\'t work on receptors. He runs into a truck.', th: '❌ เป็นไปไม่ได้ สมองเขาเดือด เหตุผลใช้ไม่ได้กับตัวรับ เขาวิ่งชนรถบรรทุก', zh: '❌ 不可能。他的大脑在燃烧。理性对受体不起作用。他撞上了一辆卡车。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🚓 Taser X3: "Tase him again! Keep tasing until he stops!"', th: '🚓 ช็อต 3: "ช็อตอีก! ช็อตจนกว่าจะหยุด!"', zh: '🚓 电击枪X3："再电击他！一直电击直到他停下！"' }, consequence: { en: '📉 Cardiac Chaos. Electrical storm meets metabolic storm. Fatal arrhythmia.', th: '📉 หัวใจวุ่นวาย พายุไฟฟ้าเจอพายุมะตาบอลิก หัวใจเต้นผิดจังหวะถึงตาย', zh: '📉 心脏混乱。电风暴遇到代谢风暴。致命的心律失常。' }, stats: { competence: 20, ethics: 10, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_046',
        text: {
            en: '❄️ The Pediatric Drowning: 4-year-old found in frozen lake. Submerged 20 mins. Pulseless and apneic. Skin is ice cold.',
            th: '❄️ เด็กจมน้ำ: 4 ขวบเจอในทะเลสาบน้ำแข็ง จม 20 นาที ไม่มีชีพจร ไม่หายใจ ผิวเย็นเฉียบ',
            zh: '❄️ 小儿溺水：4岁儿童在冰冻湖中被发现。淹没20分钟。无脉搏和呼吸暂停。皮肤冰冷。'
        },
        options: [
            { id: 'A', text: { en: '🌡️ Resuscitate Warm: "They\'re not dead until they\'re warm and dead! CPR! Gentle handling!"', th: '🌡️ กู้ชีพแบบอุ่น: "ยังไม่ตายจนกว่าจะอุ่นและตาย! CPR! ทำเบาๆ!"', zh: '🌡️ 复温复苏："只有温热且死亡才算死亡！心肺复苏！轻柔处理！"' }, consequence: { en: '🏆 Miracle Potential. Cold preserves brain function. Long resuscitation leading to recovery.', th: '🏆 โอกาสปาฏิหาริย์ ความเย็นรักษาสมอง กู้ชีพยาวนานนำสู่การฟื้นตัว', zh: '🏆 奇迹潜力。寒冷保存大脑功能。长时间复苏导致康复。' }, stats: { competence: 90, ethics: 80, leadership: 80, innovation: 50 } },
            { id: 'B', text: { en: '💀 Call DO: "20 mins underwater? It\'s over. Save the resources."', th: '💀 ประกาศตาย: "20 นาทีใต้น้ำ? จบแล้ว ประหยัดทรัพยากร"', zh: '💀 宣告死亡："水下20分钟？结束了。节省资源。"' }, consequence: { en: '❌ Severe Error. Cold water drowning cases have survived up to an hour. You gave up on a viable kid.', th: '❌ ผิดพลาดรุนแรง จมน้ำเย็นรอดได้ถึงชั่วโมง คุณทิ้งเด็กที่มีโอกาส', zh: '❌ 严重错误。冷水溺水病例有人存活长达一小时。你放弃了一个有希望的孩子。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } },
            { id: 'C', text: { en: '🔥 Hot Packs: "Put heat packs directly on skin! Warm him up fast!"', th: '🔥 ประคบร้อน: "วางถุงร้อนบนผิวเลย! อุ่นเขาเร็วๆ!"', zh: '🔥 热敷包："直接把热敷包放在皮肤上！让他快点暖和起来！"' }, consequence: { en: '⚠️ Burns. Cold skin burns easily. Rewarming should be internal/gradual or ECMO.', th: '⚠️ ไหม้ ผิวเย็นไหม้ง่าย การอุ่นควรทำภายใน/ค่อยเป็นค่อยไป หรือ ECMO', zh: '⚠️ 烧伤。冷皮肤容易烧伤。复温应该是内部/渐进的或ECMO。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🚁 Fly to Trauma: "Go to nearest trauma center!" (Not pediatric)', th: '🚁 บินไปศูนย์อุบัติเหตุ: "ไปศูนย์ใกล้สุด!" (ไม่ใช่เด็ก)', zh: '🚁 飞往创伤中心："去最近的创伤中心！"（不是儿科）' }, consequence: { en: '🔄 Wrong Destination. Kid needs Pediatric ICU/ECMO bypass capability. Trauma center might not have it.', th: '🔄 ผิดที่ เด็กต้องการ ICU เด็ก/ECMO ศูนย์อุบัติเหตุอาจไม่มี', zh: '🔄 错误的目的地。孩子需要儿科ICU/ECMO旁路能力。创伤中心可能没有。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_047',
        text: {
            en: '⚖️ The Bariatric Rescue: 600lb patient with chest pain on 3rd floor. Narrow stairs. No elevator. You have a 2-person crew.',
            th: '⚖️ กู้ภัยคนอ้วน: ผู้ป่วย 600lb เจ็บหน้าอกชั้น 3 บันไดแคบ ไม่มีลิฟต์ มีทีม 2 คน',
            zh: '⚖️ 肥胖救援：600磅病人胸痛，在3楼。楼梯狭窄。没有电梯。你们只有2个人。'
        },
        options: [
            { id: 'A', text: { en: '🚒 Lift Assist: "Call Fire Dept for heavy lift! We need 6 people and a tarp/stokes basket!"', th: '🚒 ขอแรงยก: "เรียกดับเพลิงช่วยยก! ต้องการ 6 คนและผ้าใบ/เปลตะกร้า!"', zh: '🚒 举重援助："呼叫消防队进行重型举重！我们需要6个人和一块防水布/斯托克斯篮子！"' }, consequence: { en: '🏆 Safe & Effective. Protects your back and the patient. Professional resource management.', th: '🏆 ปลอดภัยและได้ผล ป้องกันหลังคุณและผู้ป่วย บริหารทรัพยากรมืออาชีพ', zh: '🏆 安全有效。保护你的背部和病人。专业的资源管理。' }, stats: { competence: 80, ethics: 60, leadership: 90, innovation: 40 } },
            { id: 'B', text: { en: '💪 Hero Time: "We can take him. Grab the sheet. On three!"', th: '💪 เวลาฮีโร่: "เราไหว จับผ้า นับสาม!"', zh: '💪 英雄时刻："我们可以带他走。抓住床单。数到三！"' }, consequence: { en: '🚑 Career Ender. You drop the patient. Heriated discs in your back. Workers comp and lawsuit.', th: '🚑 จบอาชีพ คุณทำผู้ป่วยหลุดมือ หมอนรองกระดูกทับเส้น ประกันสังคมและคดีความ', zh: '🚑 职业终结者。你摔了病人。背部椎间盘突出。工伤赔偿和诉讼。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🚶 Walk Him: "If you want to go to the hospital, you have to walk down."', th: '🚶 ให้เดิน: "ถ้าอยากไปโรงพยาบาล ต้องเดินลงมา"', zh: '🚶 让他走："如果你想去医院，你得自己走下去。"' }, consequence: { en: '❌ Cardiac Stress. Exertion worsens the heart attack. He codes on the stairs. Your fault.', th: '❌ เครียดหัวใจ การออกแรงทำหัวใจวายแย่ลง เขาหยุดหายใจบนบันได ความผิดคุณ', zh: '❌ 心脏压力。用力会加重心脏病发作。他在楼梯上停搏。你的错。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🏗️ Window Strategy: "Remove the window. Use the ladder truck bucket."', th: '🏗️ แผนหน้าต่าง: "ถอดหน้าต่าง ใช้กระเช้ารถดับเพลิง"', zh: '🏗️ 窗口策略："拆掉窗户。使用梯车斗。"' }, consequence: { en: '🛠️ Creative but Slow. Takes 45 mins. Good for non-emergency, bad for chest pain. But cool.', th: '🛠️ สร้างสรรค์แต่ช้า ใช้ 45 นาที ดีสำหรับไม่ฉุกเฉิน แย่สำหรับเจ็บหน้าอก แต่เท่', zh: '🛠️ 有创意但很慢。耗时45分钟。适合非紧急情况，不适合胸痛。但也酷。' }, stats: { competence: 60, ethics: 50, leadership: 60, innovation: 80 } }
        ]
    },
    {
        id: 'paramedic_048',
        text: {
            en: '🔥 The Burn Math: Patient with 50% Body Surface Area burns. 80kg. Long transport. You need to calculate fluid resuscitation (Parkland Formula/Consensus).',
            th: '🔥 คณิตศาสตร์แผลไหม้: ผู้ป่วยแผลไหม้ 50% ของร่างกาย 80kg ขนส่งไกล ต้องคำนวณน้ำเกลือ (สูตร Parkland)',
            zh: '🔥 烧伤数学：患者50%体表面积烧伤。80公斤。长途运输。你需要计算液体复苏（帕克兰公式/共识）。'
        },
        options: [
            { id: 'A', text: { en: '🧮 Calculate: "4ml x 80kg x 50% = 16,000ml total. Give half (8L) in first 8 hours. Start large bore IVs!"', th: '🧮 คำนวณ: "4ml x 80kg x 50% = 16,000ml รวม ให้ครึ่ง (8L) ใน 8 ชม.แรก เจาะเส้นใหญ่!"', zh: '🧮 计算："4ml x 80kg x 50% = 16,000ml 总量。前8小时给一半（8L）。开始大口径静脉注射！"' }, consequence: { en: '🏆 Clinical Excellence. Perfect math. Prevents burn shock and kidney failure. Surgeon praises you.', th: '🏆 เป็นเลิศทางคลินิก คณิตเป๊ะ ป้องกันช็อกแผลไหม้และไตวาย ศัลย์ชม', zh: '🏆 临床卓越。完美数学。预防烧伤休克和肾衰竭。外科医生表扬你。' }, stats: { competence: 100, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '💧 Wide Open: "Just hang bags and squeeze! He needs fluids!"', th: '💧 เปิดหมด: "แขวนถุงแล้วบีบ! เขาต้องการน้ำ!"', zh: '💧以此全开："挂上袋子挤就行！他需要液体！"' }, consequence: { en: '🌊 Compassion Error. You might over-resuscitate causing pulmonary edema (fluid in lungs). Precision matters.', th: '🌊 ความเห็นใจพลาด คุณอาจให้น้ำเกินทำน้ำท่วมปอด ความแม่นยำสำคัญ', zh: '🌊以此同情错误。你可能复苏过度导致肺水肿（肺部积液）。精度很重要。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🚫 Hold Fluids: "Fluids make swelling worse. Wait for hospital."', th: '🚫 งดน้ำ: "น้ำทำบวมแย่ลง รอโรงพยาบาล"', zh: '🚫以此限制液体："液体会加重肿胀。等医院。"' }, consequence: { en: '🌵 Hypovolemic Shock. He loses plasma rapidly. Dies of organ failure. Basic burn care fail.', th: '🌵 ช็อกขาดน้ำ เขาเสียพลาสมาเร็ว ตายจากอวัยวะล้มเหลว ตกม้าตายดูแลแผลไหม้', zh: '🌵 低血容量休克。他迅速失去血浆。死于器官衰竭。基本烧伤护理失败。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '📱 App Check: "Using my protocol app to calculate. Double check with partner."', th: '📱 เช็คแอป: "ใช้แอปโปรโตคอลคำนวณ เช็คซ้ำกับคู่หู"', zh: '📱 应用检查："使用我的协议应用程序计算。与搭档再次确认。"' }, consequence: { en: '✅ Safe. Smart use of tools. Reduces human math error under stress.', th: '✅ ปลอดภัย ใช้เครื่องมือฉลาด ลดความผิดพลาดคณิตของคนตอนเครียด', zh: '✅ 安全。聪明使用工具。减少压力下的人为数学错误。' }, stats: { competence: 80, ethics: 60, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'paramedic_049',
        text: {
            en: '🤺 The Impaled Object: Kid fell on a fence. Steel fence post impaled through the thigh. Fire dept cut the post, but 2 feet remain sticking out.',
            th: '🤺 วัตถุปักคา: เด็กตกใส่รั้ว เสาเหล็กปักทะลุต้นขา ดับเพลิงตัดเสา แต่เหลือ 2 ฟุตยื่นออกมา',
            zh: '🤺 异物刺入：孩子摔在栅栏上。钢栅栏柱刺穿大腿。消防队切断了柱子，但还有2英尺伸出来。'
        },
        options: [
            { id: 'A', text: { en: '🧱 Stabilize in Place: "Pack bulky dressing around it! Don\'t let it move! Tape it down!"', th: '🧱 ยึดให้อยู่กับที่: "แพ็คผ้าหนารอบๆ! อย่าให้ขยับ! พันเทป!"', zh: '🧱以此固定："在周围填充大块敷料！别让它动！用胶带固定！"' }, consequence: { en: '🏆 Textbook. The object is plugging the hole. Moving it causes hemorrhage. Expert care.', th: '🏆 ตามตำรา วัตถุอุดรูอยู่ ขยับทำเลือดออก ดูแลเชี่ยวชาญ', zh: '🏆 教科书式。物体堵住了洞。移动它会导致大出血。专家护理。' }, stats: { competence: 80, ethics: 60, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '🤏 Remove It: "Pull it out so we can fit him in the truck. Apply pressure after."', th: '🤏 ดึงออก: "ดึงออกจะได้เอาเข้ามรถได้ แล้วกดเลือด"', zh: '🤏 拔出来："把它拔出来，这样我们就能把他装进车里。之后加压。"' }, consequence: { en: '🩸 Arterial Spray. You uncorked the femoral artery. He bleeds out in minutes. Fatal.', th: '🩸 เลือดพุ่งกระฉูด คุณเปิดจุกเส้นเลือดใหญ่ เขาเลือดหมดตัวในไม่กี่นาที ถึงตาย', zh: '🩸 动脉喷射。你拔掉了股动脉的塞子。他在几分钟内流干血。致命。' }, stats: { competence: 10, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '✂️ Cut Shorter: "Ask fire to cut it closer to the skin."', th: '✂️ ตัดสั้นลง: "ขอดับเพลิงตัดให้ชิดผิว"', zh: '✂️ 切短点："让消防队把它切得离皮肤更近点。"' }, consequence: { en: '⚠️ Vibrations. Cutting shakes the object, tearing vessels inside. Risk > Benefit.', th: '⚠️ แรงสั่นสะเทือน การตัดทำวัตถุสั่น ฉีกเส้นเลือดข้างใน เสี่ยง > ประโยชน์', zh: '⚠️ 震动。切割以此摇晃物体，撕裂内部血管。风险 > 收益。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🩹 Loose Bandage: "Just cover it lightly so we can see if it bleeds."', th: '🩹 พันหลวม: "ปิดเบาๆ จะได้ดูว่าเลือดออกไหม"', zh: '🩹以此松散包扎："轻盖一下，这样我们可以看到它是否出血。"' }, consequence: { en: '📉 Instability. Does not prevent movement. Damage occurs during transport bumps.', th: '📉 ไม่มั่นคง ไม่กันขยับ เสียหายตอนรถกระแทก', zh: '📉 不稳定。不能防止移动。运输颠簸期间发生损坏。' }, stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'paramedic_050',
        text: {
            en: '👵 The Nursing Home Fire: Fire alarm. Smoke active. 20 bedridden patients. You are first on scene with your partner. Fire is spreading.',
            th: '👵 ไฟไหม้บ้านพักคนชรา: สัญญาณไฟ ควันขึ้น ผู้ป่วยติดเตียง 20 คน คุณถึงคนแรกกับคู่หู ไฟกำลังลาม',
            zh: '👵 养老院火灾：火警。烟雾弥漫。20名卧床病人。你和搭档最先到达现场。火势正在蔓延。'
        },
        options: [
            { id: 'A', text: { en: '🚪 Close Doors: "Containment! Shut patient doors to block smoke! Mark rooms! Wait for Fire!"', th: '🚪 ปิดประตู: "จำกัดวง! ปิดประตูผู้ป่วยกันควัน! มาร์คห้อง! รอดับเพลิง!"', zh: '🚪 关门："控制！关闭病人房门阻挡烟雾！标记房间！等消防队！"' }, consequence: { en: '🏆 Strategic Save. You can\'t carry 20 people. Protecting them in place saved the most lives.', th: '🏆 การช่วยเชิงกลยุทธ์ คุณแบก 20 คนไม่ไหว การป้องกันในที่ช่วยชีวิตได้มากสุด', zh: '🏆 战略性救援。你搬不动20个人。就地保护他们挽救了最多的生命。' }, stats: { competence: 90, ethics: 70, leadership: 100, innovation: 60 } },
            { id: 'B', text: { en: '🏃 Carry One: "Grab the first person and run! Come back for more!"', th: '🏃 แบกหนึ่ง: "คว้าคนแรกแล้ววิ่ง! กลับมาเอาอีก!"', zh: '🏃 搬一个："抓住第一个人就跑！回来再搬！"' }, consequence: { en: '📉 Inefficient. You save 1 or 2. The smoke kills the other 18 while doors are open. Panic response.', th: '📉 ไร้ประสิทธิภาพ คุณช่วย 1 หรือ 2 ควันฆ่าอีก 18 ขณะประตูเปิด ปฏิกิริยาตื่นตระหนก', zh: '📉 低效。你救了1或2个。烟雾在门开着时杀死了其他18个。恐慌反应。' }, stats: { competence: 40, ethics: 60, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🔥 Fight Fire: "Grab the extinguisher! I\'m going in to fight the beast!"', th: '🔥 ดับไฟ: "คว้าถังดับเพลิง! ฉันจะเข้าไปสู้กับสัตว์ร้าย!"', zh: '🔥 灭火："拿灭火器！我要进去跟它拼了！"' }, consequence: { en: '☠️ Hero Complex. You aren\'t a firefighter. You get overcome by smoke. Now there are 2 more victims.', th: '☠️ ปมฮีโร่ คุณไม่ใช่ดับเพลิง โดนควันเล่นงาน ตอนนี้มีเหยื่อเพิ่มอีก 2', zh: '☠️ 英雄情结。你不是消防员。你被烟雾熏倒。现在又多了2名受害者。' }, stats: { competence: 20, ethics: 30, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '📢 Evacuate Staff: "Get the nurses out! They can help us organize outside!"', th: '📢 อพยพพนักงาน: "เอาพยาบาลออกไป! เขาช่วยเราจัดระเบียบข้างนอกได้!"', zh: '📢 撤离员工："让护士出去！她们可以在外面帮我们组织！"' }, consequence: { en: '⚖️ Partial Win. Good to save staff, but patients are left vulnerable. Better than nothing.', th: '⚖️ ชนะบางส่วน ดีทึ่ช่วยพนักงาน แต่ผู้ป่วยเสี่ยง ดีกว่าไม่มีอะไร', zh: '⚖️以此部分胜利。拯救员工很好，但病人处于危险之中。总比没有好。' }, stats: { competence: 60, ethics: 50, leadership: 60, innovation: 20 } }
        ]
    }
];
