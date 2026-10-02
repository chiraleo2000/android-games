export const educationAdminQuestions = [
    {
        id: 'eadm_001',
        text: {
            en: '📱 The Viral Teacher: A video of one of your veteran teachers making a controversial political comment in class goes viral. Half the community wants them fired; the other half calls it "freedom of speech."',
            th: '📱 ครูไวรัล: วิดีโอของครูรุ่นเก๋าคนหนึ่งที่แสดงความคิดเห็นทางการเมืองที่เป็นประเด็นในห้องเรียนกลายเป็นไวรัล คนครึ่งชุมชนต้องการให้ไล่ออก แต่อีกครึ่งบอกว่าเป็น "เสรีภาพในการพูด"',
            zh: '📱 走红的老师：你的一位资深老师在课堂上发表争议性政治言论的视频在网上疯传。一半的社区成员希望开除他们；另一半则称这是"言论自由"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Terminate Immediately: "We have a zero-tolerance policy for political bias in the classroom. Safety and neutrality first."',
                    th: '🔥 ไล่ออกทันที: "เรามีนโยบายความอดทนเป็นศูนย์ต่ออคติทางการเมืองในห้องเรียน ความปลอดภัยและความเป็นกลางต้องมากก่อน"',
                    zh: '🔥 立即解雇："我们对课堂上的政治偏见实行零容忍政策。安全和中立第一。"'
                },
                consequence: {
                    en: '🛡️ Rigid Neutrality. You stop the immediate PR fire, but the teacher union sues you for wrongful termination. Other teachers are now terrified to speak at all.',
                    th: '🛡️ ความเป็นกลางที่แข็งกร้าว คุณหยุดปัญหา PR เฉพาะหน้าได้ แต่สหภาพครูฟ้องคุณฐานเลิกจ้างไม่เป็นธรรม ครูคนอื่นตอนนี้กลัวจนไม่กล้าพูดอะไรเลย',
                    zh: '🛡️ 僵化的中立。你阻止了眼前的公关危机，但教师工会因不当解雇起诉了你。其他老师现在完全不敢说话。'
                },
                stats: { competence: 40, ethics: 30, leadership: 60, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Formal Investigation: "Follow the contract to the letter. Placed on administrative leave while we conduct a 30-day review of their entire career."',
                    th: '⚖️ สอบสวนตามระเบียบ: "ทำตามสัญญาจ้างอย่างเคร่งครัด ให้พักงานไปก่อนในระหว่างที่เราทำการตรวจสอบย้อนหลัง 30 วันเกี่ยวกับประวัติการทำงานทั้งหมดของเขา"',
                    zh: '⚖️ 正式调查："严格按照合同办事。在我们就其整个职业生涯进行为期30天的评估期间，实行行政休假。"'
                },
                consequence: {
                    en: '🐢 Slow Justice. The internet moved on by day 5, but the tension in the school is thick. You protected the process, but the leadership looked indecisive.',
                    th: '🐢 ความเบื่อหน่ายของกระบวนการ อินเทอร์เน็ตลืมเรื่องนี้ไปแล้วในวันที่ 5 แต่ความตึงเครียดในโรงเรียนยังสูงอยู่ คุณปกป้องกรรมวิธีได้ แต่ภาวะผู้นำดูเหมือนไม่เด็ดขาด',
                    zh: '🐢 迟到的正义。到第5天，互联网已经淡忘了这件事，但学校里的紧张气氛依然浓厚。你保护了流程，但领导层看起来优柔寡断。'
                },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Dialogue Approach: "Organize a town hall. Let the teacher explain the context and hear from the affected students. Education, not punishment."',
                    th: '🤝 แนวทางเจรจา: "จัดเวทีเสวนา ให้ครูได้อธิบายบริบทและรับฟังจากนักเรียนที่ได้รับผลกระทบ ใช้การศึกษาเป็นทางออกไม่ใช่การลงโทษ"',
                    zh: '🤝 对话方式："组织一次全体会议。让老师解释背景，并听取受影响学生的意见。是教育，而不是惩罚。"'
                },
                consequence: {
                    en: '✨ Healing. It\'s a messy, emotional night, but it turns into a teaching moment for the whole community. You built trust through transparency.',
                    th: '✨ การเยียวยา เป็นค่ำคืนที่วุ่นวายและเต็มไปด้วยอารมณ์ แต่มันกลายเป็นบทเรียนสำหรับคนทั้งชุมชน คุณสร้างความเชื่อมั่นผ่านความโปร่งใส',
                    zh: '✨ 治愈。这是一个混乱、感性的夜晚，但它成为了整个社区的一个教学时刻。你通过透明度建立了信任。'
                },
                stats: { competence: 50, ethics: 70, leadership: 80, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Statement of Support: "He has a right to his opinion outside of core curriculum. We stand by our staff against internet mobs."',
                    th: '🤐 แถลงการณ์สนับสนุน: "เขามีสิทธิ์ที่จะมีความเห็นนอกเหนือจากหลักสูตรแกนกลาง เราขอยืนเคียงข้างบุคลากรของเราเพื่อต่อสู้กับการล่าแม่มดในเน็ต"',
                    zh: '🤐 支持声明："他在核心课程之外有权发表自己的意见。我们支持我们的员工对抗网络暴徒。"'
                },
                consequence: {
                    en: '🔥 Escalation. The mob turns on YOU. Protesters block the school gates. You are seen as a political partisan rather than an administrator.',
                    th: '🔥 สถานการณ์บานปลาย การล่าแม่มดย้ายมาที่ตัวคุณแทน ผู้ประท้วงปิดทางเข้าโรงเรียน คุณถูกมองว่าเป็นพวกฝักใฝ่ทางการเมืองมากกว่าเป็นผู้บริหาร',
                    zh: '🔥 升级。暴徒转向攻击你。抗议者封锁了校门。你被视为政治党徒，而不是管理者。'
                },
                stats: { competence: 30, ethics: 40, leadership: 30, innovation: 0 }
            }
        ]
    },
    {
        id: 'eadm_002',
        text: {
            en: '📵 The No-Phone Policy: You want to implement a total ban on cell phones during school hours. Students are planning a "text-in" protest, and some parents worry about emergency contact.',
            th: '📵 นโยบายงดใช้มือถือ: คุณต้องการเริ่มใช้นโยบายห้ามใช้มือถือโดยเด็ดขาดในช่วงเวลาเรียน นักเรียนวางแผนประท้วงด้วยการรุมส่งข้อความ และผู้ปกครองบางส่วนก็กังวลเรื่องการติดต่อยามฉุกเฉิน',
            zh: '📵 无手机政策：你打算在校期间实行全面手机禁令。学生们正在策划一场"发短信"抗议活动，一些家长则担心紧急联系问题。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Hard Ban: "Magnetic pouches for all phones. No exceptions. Reclaim the focus of our classrooms."',
                    th: '🚫 แบนด็ดขาด: "ใช้ซองใส่โทรศัพท์แบบล็อคแม่เหล็กสำหรับทุกคน ไม่มีข้อยกเว้น ทวงคืนสมาธิในห้องเรียนกลับมา"',
                    zh: '🚫 严禁："所有手机都放在磁吸袋里。没有例外。夺回我们课堂的专注力。"'
                },
                consequence: {
                    en: '📉 Compliance Conflict. Students find ways to hack the pouches. You spend 50% of your time as a "phone policeman" instead of a leader.',
                    th: '📉 ความขัดแย้งเรื่องการปฏิบัติตาม นักเรียนหาวิธีแฮกซองจนได้ คุณต้องเสียเวลา 50% ไปกับการเป็น "ตำรวจมือถือ" แทนที่จะได้ทำงานบริหาร',
                    zh: '📉 合规冲突。学生们找到了破解磁吸袋的方法。你50%的时间都花在了当"手机警察"上，而不是当领导。'
                },
                stats: { competence: 40, ethics: 30, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Educational Model: "Teach a digital citizenship unit first. Let students earn \'Phone Zones\' during lunch by maintaining focus in class."',
                    th: '🤝 โมเดลการศึกษา: "สอนวิชาพลเมืองดิจิทัลก่อน ให้นักเรียนสะสมแต้มเพื่อมีสิทธิ์ใช้ใน \'เขตมือถือ\' ช่วงพักเที่ยง แลกกับการตั้งใจเรียนในห้อง"',
                    zh: '🤝 教育模式："首先教授数字公民单元。让学生通过在课堂上保持专注来换取午餐期间的\'手机区域\'权限。"'
                },
                consequence: {
                    en: '✨ Cultural Shift. It takes longer, but students actually learn self-regulation. The atmosphere is more relaxed and respectful.',
                    th: '✨ การเปลี่ยนผ่านทางวัฒนธรรม ใช้เวลานานกว่า แต่เด็กได้เรียนรู้การควบคุมตัวเองจริงๆ บรรยากาศผ่อนคลายและให้เกียรติกันมากขึ้น',
                    zh: '✨ 文化转变。这需要更长的时间，但学生们确实学会了自我调节。气氛更加轻松和尊重。'
                },
                stats: { competence: 50, ethics: 60, leadership: 60, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '📱 Tech Integration: "If you can\'t beat them, join them. Integrate phones INTO the lessons. Use apps for polling and research."',
                    th: '📱 บูรณาการไอที: "ถ้าชนะไม่ได้ ก็เข้าร่วมซะเลย รวมมือถือเข้าไปในบทเรียน ใช้แอปเพื่อทำโพลหรืองานวิจัย"',
                    zh: '📱 技术集成："如果你无法击败他们，就加入他们。将手机整合到教学中。利用应用程序进行投票和研究。"'
                },
                consequence: {
                    en: '🔥 Chaos. Teachers are overwhelmed. Students spend half the time on TikTok pretending to do research. Discipline collapses.',
                    th: '🔥 ความวุ่นวาย ครูแบกรับไม่ไหว นักเรียนใช้เวลาครึ่งนึงไปกับ TikTok แล้วอ้างว่ากำลังทำวิจัย ผลคือระเบียบวินัยพังทลาย',
                    zh: '🔥 混乱。教师们不知所措。学生们一半的时间花在刷TikTok上，假装在做研究。纪律崩溃。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 70 }
            },
            {
                id: 'D',
                text: {
                    en: '🐢 The Slow Roll: "Ban them for 6th grade only. See if the data proves better grades, then move up to 7th next year."',
                    th: '🐢 ค่อยเป็นค่อยไป: "เริ่มแบนเฉพาะชั้น ป.6 ก่อน ดูซิว่าเกรดจะดีขึ้นไหม แล้วค่อยขยับไปชั้น ป.7 ในปีหน้า"',
                    zh: '🐢 缓慢推行："仅对六年级实行禁令。看看数据是否证明成绩有所提高，然后明年再推广到七年级。"'
                },
                consequence: {
                    en: '⚖️ Data Driven. You have proof before the battle with the high-schoolers. But the current implementation feels unfair to the younger kids.',
                    th: '⚖️ ขับเคลื่อนด้วยข้อมูล คุณมีข้อพิสูจน์ก่อนที่จะต้องไปรบกับพวกเด็กโต แต่การทำแบบนี้ดูไม่ยุติธรรมสำหรับเด็กเล็กเท่าไหร่',
                    zh: '⚖️ 数据驱动。在与高中生展开博弈之前，你已经有了证据。但目前的实施情况让较小的孩子感到不公平。'
                },
                stats: { competence: 60, ethics: 40, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'eadm_003',
        text: {
            en: '🔒 The Cyberattack: Your student database is hit by ransomware. The hackers demand $50,000 or they reveal sensitive medical and disciplinary records of 5,000 students.',
            th: '🔒 ไซเบอร์แอคแทค: ฐานข้อมูลนักเรียนถูกมัลแวร์เรียกค่าไถ่โจมตี แฮกเกอร์เรียกเงิน 50,000 ดอลลาร์ มิฉะนั้นจะเปิดเผยประวัติการรักษาและประวัติวินัยที่ละเอียดอ่อนของนักเรียน 5,000 คน',
            zh: '🔒 网络攻击：你的学生数据库遭到了勒索软件的袭击。黑客要求支付5万美元，否则他们将公开5,000名学生的敏感医疗和处分记录。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💸 Pay the Ransom: "Protect student privacy at any cost. Use the emergency reserve fund. Tell no one."',
                    th: '💸 จ่ายค่าไถ่: "ปกป้องความเป็นส่วนตัวของเด็กไว้ไม่ว่าจะแลกด้วยอะไร ใช้เงินสำรองฉุกเฉิน และห้ามบอกใครเด็ดขาด"',
                    zh: '💸 支付赎金："不惜一切代价保护学生隐私。动用紧急预备基金。不要告诉任何人。"'
                },
                consequence: {
                    en: '💀 Blackmail loop. They take the money and come back next month for more. You are now an accomplice in a felony. The data leaks anyway.',
                    th: '💀 วงจรแบล็กเมล์ พวกเขาเอาเงินไปแล้วก็กลับมาอีกในเดือนหน้า ตอนนี้คุณกลายเป็นผู้สมรู้ร่วมคิดในอาชญากรรม และสุดท้ายข้อมูลก็รั่วอยู่ดี',
                    zh: '💀 勒索循环。他们拿了钱，下个月还会再来。你现在成了重罪的共犯。数据还是泄露了。'
                },
                stats: { competence: 10, ethics: -20, leadership: -40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '👮 Call the FBI: "We don\'t negotiate. Report it to federal authorities and tell the parents immediately. Transparency is our only shield."',
                    th: '👮 เรียก FBI: "เราไม่เจรจา แจ้งเจ้าหน้าที่รัฐบาลกลางและบอกผู้ปกครองทันที ความโปร่งใสคือเกราะกำบังเดียวของเรา"',
                    zh: '👮 拨打FBI电话："我们不谈判。向联邦当局报告，并立即告知家长。透明度是我们唯一的盾牌。"'
                },
                consequence: {
                    en: '📉 PR Hurricane. Parents are terrified and sue the district. But you followed the law and likely prevented future attacks.',
                    th: '📉 พายุ PR ผู้ปกครองตื่นตระหนกและฟ้องร้องเขตการศึกษา แต่คุณทำตามกฎหมายและช่วยป้องกันการโจมตีในอนาคตได้',
                    zh: '📉 公关风暴。家长们感到惶恐并起诉了学区。但你遵守了法律，并可能阻止了未来的攻击。'
                },
                stats: { competence: 50, ethics: 70, leadership: 60, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Hire Private Tech: "Hire an elite cybersecurity firm to counter-hack or retrieve the data. Pay them the $50k instead of the hackers."',
                    th: '🕵️ จ้างบริษัทไอทีส่วนตัว: "จ้างทีมไซเบอร์ระดับระดับแนวหน้ามาวางระบบสู้หรือดึงข้อมูลกลับมา จ่ายเงิน 50,000 ดอลลาร์ให้กับทีมนี้แทนแฮกเกอร์"',
                    zh: '🕵️ 聘请私人技术团队："聘请一家精锐的网络安全公司进行反黑客攻击或检索数据。把那5万美元给他们，而不是给黑客。"'
                },
                consequence: {
                    en: '🌟 Technical Save. They successfully lock the hackers out. Your security is now top-tier. You are a tech-hero, though the bill is steep.',
                    th: '🌟 การเซ็นเซอร์ทางเทคนิค พวกเขาหยุดแฮกเกอร์ได้สำเร็จ ระบบความปลอดภัยของคุณตอนนี้ดีที่สุด คุณคือฮีโร่สายไอที แม้ว่าบิลค่าจ้างจะแพงหูฉี่ก็ตาม',
                    zh: '🌟 技术拯救。他们成功地将黑客阻挡在外。你的安全性现在是顶级的。尽管账单金额巨大，但你成了技术英雄。'
                },
                stats: { competence: 70, ethics: 50, leadership: 50, innovation: 90 }
            },
            {
                id: 'D',
                text: {
                    en: '🕯️ Admit Defeat: "The data is gone. Shut down the servers, buy every student identity theft protection for a year, and start over."',
                    th: '🕯️ ยอมรับความพ่ายแพ้: "ข้อมูลหายไปแล้ว ปิดเซิร์ฟเวอร์ ซื้อประกันการคุ้มครองการโจรกรรมข้อมูลให้นักเรียนทุกคนเป็นเวลาหนึ่งปี และเริ่มใหม่ทั้งหมด"',
                    zh: '🕯️ 承认失败："数据丢失了。关闭服务器，为每个学生购买为期一年的身份盗窃保护，然后重新开始。"'
                },
                consequence: {
                    en: '🐢 Humble Recovery. It\'s expensive and slow, but honest. The community respects your humility and realism.',
                    th: '🐢 การฟื้นฟูที่ถ่อมตัว มันแพงและช้า แต่มันคือความจริง ชุมชนเคารพในความถ่อมตัวและความเป็นจริงของคุณ',
                    zh: '龟速恢复。虽然昂贵且缓慢，但很诚实。社区尊重你的谦逊和现实主义。'
                },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 10 }
            }
        ]
    },
    {
        id: 'eadm_004',
        text: {
            en: '⚖️ The Funding Split: You have a surplus budget of $200,000. The Special Education department needs it for 3 more aides. The "Gifted and Talented" program needs it for a new science lab.',
            th: '⚖️ การแบ่งสรรงบประมาณ: คุณมีงบประมาณเหลือ 200,000 ดอลลาร์ ฝ่ายการศึกษาพิเศษต้องการงบนี้เพื่อจ้างผู้ช่วยเพิ่ม 3 คน ส่วนฝ่ายนักเรียนที่มีความสามารถพิเศษต้องการงบนี้สำหรับห้องแล็บวิทยาศาสตร์ใหม่',
            zh: '⚖️ 资金分配：你拥有20万美元的盈余预算。特殊教育部门需要它来聘请另外3名助手。而"天才与资优"项目则需要它来建立一个新的科学实验室。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💝 Priority to SpEd: "Equity means supporting those who need it most. The aides will transform lives. The lab can wait."',
                    th: '💝 ให้ความสำคัญกับการศึกษาพิเศษ (SpEd): "ความเท่าเทียมคือการสนับสนุนผู้ที่ต้องการมากที่สุด ผู้ช่วยเหล่านี้จะเปลี่ยนชีวิตเด็กได้ ห้องแล็บรอไปก่อน"',
                    zh: '💝 特教优先："公平意味着支持那些最需要的人。助手们将改变生活。实验室可以等等。"'
                },
                consequence: {
                    en: '✨ Inclusivity Win. The SpEd department is thriving. But the "Gifted" parents are moving their kids to private schools, draining the tax base.',
                    th: '✨ ชัยชนะของความครอบคลุม ฝ่าย SpEd เติบโตขึ้นมาก แต่ผู้ปกครองของเด็กหัวกะทิเริ่มพาลูกย้ายไปโรงเรียนเอกชน ทำให้ฐานภาษีลดลง',
                    zh: '✨ 包容性的胜利。特教部门蓬勃发展。但"天才"学生的家长们正将孩子转入私立学校，导致税基在流失。'
                },
                stats: { competence: 40, ethics: 70, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 Priority to Innovation: "We need to foster the leaders of tomorrow. The lab will produce breakthroughs. SpEd has federal mandates for baseline funding anyway."',
                    th: '🚀 ให้ความสำคัญกับนวัตกรรม: "เราต้องสร้างผู้นำในอนาคต ห้องแล็บจะสร้างความก้าวหน้าใหม่ๆ ยังไงซะฝ่าย SpEd ก็มีเงินอุดหนุนขั้นพื้นฐานจากรัฐอยู่แล้ว"',
                    zh: '🚀 创新优先："我们需要培养未来的领导者。实验室将产生突破。反正特教也有联邦授权的基线建设资金。"'
                },
                consequence: {
                    en: '🌟 Elite Excellence. The lab is the talk of the town. Students win national competitions. But you are hit with a civil rights audit for neglect in SpEd.',
                    th: '🌟 ความเป็นเลิศระดับหัวกะทิ ห้องแล็บเป็นที่พูดถึงไปทั่วเมือง นักเรียนชนะการแข่งขันระดับชาติ แต่คุณถูกเรียกตรวจสอบสิทธิพลเมืองฐานละเลยฝ่าย SpEd',
                    zh: '🌟 精英卓越。实验室成了全镇的话题。学生们在全国竞赛中获奖。但由于在特教方面的疏忽，你遭到了民权审计。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 90 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 50/50 Split: "Split it. $100k each. Neither gets exactly what they wanted, but everyone gets something. Fairness through subtraction."',
                    th: '🤝 แบ่งครึ่ง: "แบ่งอย่างละครึ่ง 100,000 ต่อฝ่าย ไม่มีใครได้ครบตามต้องการ แต่ทุกคนก็ได้บ้าง คือความยุติธรรมผ่านการเฉลี่ย"',
                    zh: '🤝 对半分："对半分。各得10万美元。谁也没能完全得到想要的，但大家都得到了一些。通过削减来实现公平。"'
                },
                consequence: {
                    en: '😑 Universal Mediocrity. The SpEd aides are part-time and ineffective. The lab is under-equipped. You pleased no one by trying to please everyone.',
                    th: '😑 ความธรรมดาที่ทั่วถึงกัน ผู้ช่วย SpEd ทำงานพาร์ทไทม์และไม่มีประสิทธิภาพ ห้องแล็บก็อุปกรณ์ไม่ครบ คุณไม่สามารถทำให้ใครพอใจได้เลยเพราะมัวแต่พยายามตามใจทุกคน',
                    zh: '😑 普遍的平庸。特教助教是兼职的，效率低下。实验室设备落后。你试图取悦每个人，结果却谁也没取悦。'
                },
                stats: { competence: 30, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🎨 Integrated Solution: "Fund the Lab, but only if the G&T students use it to design and build assistive tech devices for the SpEd students."',
                    th: '🎨 ทางออกบูรณาการ: "ให้งบห้องแล็บ แต่มีเงื่อนไขว่านักเรียนหัวกะทิต้องใช้มันเพื่อออกแบบและสร้างอุปกรณ์เทคโนโลยีช่วยเหลือนักเรียน SpEd"',
                    zh: '🎨 综合解决方案："资助实验室，但前提是天才学生必须利用它为特教学生设计和建造辅助技术设备。"'
                },
                consequence: {
                    en: '✨ Magic. It\'s a beautiful interdisciplinary model. National news covers the school. You solved the budget crisis with empathy.',
                    th: '✨ ความมหัศจรรย์ เป็นโมเดลบูรณาการที่สวยงาม ข่าวระดับชาติลงพื้นที่ทำข่าวที่โรงเรียน คุณแก้ปัญหางบประมาณด้วยความเห็นใจ',
                    zh: '✨ 奇迹。这是一个漂亮的跨学科模式。全国新闻都报道了这所学校。你用同理心解决了预算危机。'
                },
                stats: { competence: 60, ethics: 60, leadership: 80, innovation: 80 }
            }
        ]
    },
    {
        id: 'eadm_005',
        text: {
            en: '🛡️ Security vs. Support: After a local scare, the board wants to hire 3 armed School Resource Officers (SROs). Teachers and students want 3 more mental health counselors instead.',
            th: '🛡️ ความมั่นคง ปะทะ การสนับสนุน: หลังเกิดเหตุการณ์ระทึกขวัญในพื้นที่ คณะกรรมการต้องการจ้างเจ้าหน้าที่รักษาความปลอดภัยติดอาวุธ (SRO) 3 นาย ส่วนครูและนักเรียนต้องการจ้างนักจิตวิทยาเพิ่มอีก 3 คนแทน',
            zh: '🛡️ 安全对阵支持：在当地发生一起恐慌事件后，董事会希望聘请3名武装学校资源官员（SRO）。教师和学生则希望改为增聘3名心理健康顾问。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔫 Hard Security: "I agree with the board. Physical safety is the prerequisite for learning. We need armed presence now."',
                    th: '🔫 ความมั่นคงจัดเต็ม: "ฉันเห็นด้วยกับคณะกรรมการ ความปลอดภัยทางกายภาพคือเงื่อนไขแรกของการเรียนรู้ เราต้องการเจ้าหน้าที่ติดอาวุธตอนนี้"',
                    zh: '🔫 硬性安全："我同意董事会的意见。身体安全是学习的前提。我们现在需要武装人员的存在。"'
                },
                consequence: {
                    en: '👮 Garrison Mentality. The school feels like a prison. Minority students report feeling less safe and more targeted. But the threat level is low.',
                    th: '👮 บรรยากาศเหมือนค่ายทหาร โรงเรียนให้ความรู้สึกเหมือนคุก นักเรียนกลุ่มน้อยรู้สึกไม่ปลอดภัยและกลัวถูกเพ่งเล็ง แต่ระดับความเสี่ยงภัยก็ลดต่ำลง',
                    zh: '警备心态。学校感觉像座监狱。少数族裔学生反映感觉更不安全，更易成为目标。但威胁水平很低。'
                },
                stats: { competence: 40, ethics: 30, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧠 Mental Health First: "Address the root cause. Counselors prevent violence before it starts. I defy the board on this."',
                    th: '🧠 สุขภาพจิตต้องมาก่อน: "แก้ที่ต้นเหตุ นักจิตวิทยาช่วยป้องกันความรุนแรงก่อนที่มันจะเกิด ฉันจะคัดค้านคณะกรรมการในเรื่องนี้"',
                    zh: '🧠 心理健康第一："解决根本原因。顾问在暴力发生前进行预防。我在这件事上违抗董事会的命令。"'
                },
                consequence: {
                    en: '⚖️ Social Victory. The school environment improves drastically. But the first time a fight breaks out, the local paper blames your "lax" security.',
                    th: '⚖️ ชัยชนะทางสังคม สภาพแวดล้อมในโรงเรียนดีขึ้นอย่างมาก แต่ครั้งแรกที่มีเรื่องทะเลาะวิวาท หนังสือพิมพ์ท้องถิ่นจะโทษว่าความปลอดภัยของคุณ "หละหลวม"',
                    zh: '⚖️ 社会层面的胜利。学校环境大为改善。但第一次发生打斗时，当地报纸就指责你的安保"松懈"。'
                },
                stats: { competence: 50, ethics: 70, leadership: 70, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The Hybrid Hire: "Hire 1 SRO and 2 Counselors. And the SRO must be trained in restorative justice and mental health aid."',
                    th: '🤝 จ้างแบบผสม: "จ้าง SRO 1 นายและนักจิตวิทยา 2 คน โดย SRO ต้องผ่านการอบรมเรื่องกระบวนการยุติธรรมเชิงสมานฉันท์และการปฐมพยาบาลด้านสุขภาพจิตด้วย"',
                    zh: '🤝 混合聘用："聘请1名SRO和2名顾问。而且SRO必须接受过修复性正义和心理健康救助方面的培训。"'
                },
                consequence: {
                    en: '✨ Modern Guard. The SRO becomes a mentor, not just a guard. You built a model that other districts copy. Excellent balance.',
                    th: '✨ ยามสมัยใหม่ SRO กลายเป็นที่ปรึกษา ไม่ใช่แค่คนเฝ้ายาม คุณสร้างโมเดลที่เขตอื่นเอาไปทำตาม เป็นความสมดุลที่ยอดเยี่ยม',
                    zh: '✨ 现代警卫。SRO成为了导师，而不仅仅是守卫。你建立了一个其他学区争相模仿的模式。出色的平衡。'
                },
                stats: { competence: 60, ethics: 60, leadership: 60, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '💻 Tech Surveillance: "Skip the people. Install AI-driven cameras and metal detectors. Keep the human budget for education."',
                    th: '💻 การสอดส่องด้วยเทคโนโลยี: "ไม่ต้องใช้คน ติดตั้งกล้องที่ขับเคลื่อนด้วย AI และเครื่องตรวจจับโลหะแทน เก็บเงินไว้ใช้งบการศึกษาดีกว่า"',
                    zh: '💻 技术监控："不雇人。安装人工智能驱动的摄像头和金属探测器。把人力预算留给教育。"'
                },
                consequence: {
                    en: '🐢 Cold Solution. It\'s efficient but invasive. Students feel watched 24/7. It lacks the "human touch" that prevents crises.',
                    th: '🐢 ทางออกที่เย็นชา มันมีประสิทธิภาพแต่ละเมิดความเป็นส่วนตัว นักเรียนรู้สึกเหมือนถูกจ้องมองตลอด 24 ชม. ขาด "ความสัมพันธ์แบบมนุษย์" ที่จะช่วยป้องกันวิกฤต',
                    zh: '🐢 冷酷的解决方案。虽然高效但具有侵略性。学生感觉全天候受到监视。它缺乏预防危机的"人情味"。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 70 }
            }
        ]
    },
    {
        id: 'eadm_006',
        text: {
            en: '🪧 The Social Protest: Students are planning a walkout to support a controversial social justice movement during midterms. The donor foundation threatens to cancel scholarship funds if you allow it.',
            th: '🪧 การประท้วงทางสังคม: นักเรียนวางแผนที่จะวอล์คเอาท์เพื่อสนับสนุนความเคลื่อนไหวทางสังคมที่เป็นประเด็นในช่วงสอบมิดเทอม มูลนิธิผู้บริจาคขู่ว่าจะยกเลิกทุนการศึกษาหากคุณอนุญาตให้จัด',
            zh: '🪧 社会抗议：学生们正计划在期中考试期间举行罢课，以支持一场有争议的社会正义运动。捐赠基金会威胁说，如果你允许这样做，他们将取消奖学金。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Prohibit it: "Midterms are non-negotiable. Any student participating will receive a zero. Education comes before activism."',
                    th: '🛑 สั่งห้าม: "การสอบมิดเทอมต่อรองไม่ได้ นักเรียนคนไหนที่เข้าร่วมจะได้ศูนย์ การศึกษาต้องมาก่อนการเคลื่อนไหว"',
                    zh: '🛑 禁止："期中考试不可协商。任何参加的学生都将记为零分。教育优先于行动主义。"'
                },
                consequence: {
                    en: '🛡️ Enforced Order. The students stay in school. Scholarships are saved. But the student body views you as an authoritarian puppet.',
                    th: '🛡️ รักษาระเบียบเด็ดขาด นักเรียนยอมอยู่ในโรงเรียน รักษาทุนไว้ได้ แต่เด็กๆ จะมองว่าคุณเป็นหุ่นเชิดจอมเผด็จการ',
                    zh: '🛡️ 强制秩序。学生留在了学校。奖学金保住了。但学生群体把你视为独裁的傀儡。'
                },
                stats: { competence: 40, ethics: 30, leadership: 50, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Reschedule the Protest: "Tell the students they can protest AFTER 3 PM without penalty. Respect the cause but protect the scores."',
                    th: '🤝 เลื่อนเวลาประท้วง: "บอกนักเรียนว่าประท้วงได้หลังบ่าย 3 โมงโดยไม่มีบทลงโทษ ให้เกียรติแรงผลักดันแต่ก็น้องรักษาคะแนนไว้ด้วย"',
                    zh: '🤝 重新安排抗议时间："告诉学生他们可以在下午3点后举行抗议，且不受惩罚。尊重这一事业，但要保护分数。"'
                },
                consequence: {
                    en: '🐢 Compromise. Most students comply, but the activists feel you "sterilized" their impact. The donor is skeptical but pays.',
                    th: '🐢 ประนีประนอม นักเรียนส่วนใหญ่ยอมทำตาม แต่นักกิจกรรมรู้สึกว่าคุณ "ทำให้พลังของการประท้วงอ่อนแอลง" ผู้บริจาคยังสงสัยอยู่แต่ก็ยอมจ่าย',
                    zh: '妥协。大多数学生服从了，但活动人士觉得你"弱化"了他们的影响。捐赠者持怀疑态度，但还是出钱了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Use it as a Teaching Moment: "Designate the walkout as a \'Civics Lab.\' Those who participate must write a research paper on the movement\'s history."',
                    th: '🚀 เปลี่ยนเป็นบทเรียน: "กำหนดให้การวอล์คเอาท์เป็น \'ห้องแล็บรัฐศาสตร์\' คนที่เข้าร่วมต้องเขียนรายงานวิจัยเกี่ยวกับประวัติศาสตร์ของความเคลื่อนไหวนี้"',
                    zh: '🚀 将其作为教学时刻："将罢课指定为\'民法实验\'。参与者必须写一篇关于该运动历史的研究论文。"'
                },
                consequence: {
                    en: '✨ Educational Win. You justified the absence to the donor as "experiential learning." The students learn deeply. A political masterstroke.',
                    th: '✨ ชัยชนะของการศึกษา คุณอ้างกับผู้บริจาคได้ว่าเป็นการ "เรียนรู้ผ่านประสบการณ์" นักเรียนได้เรียนรู้อย่างลึกซึ้ง เป็นการเดินเกมการเมืองที่เฉียบขาด',
                    zh: '✨ 教育的胜利。你向捐赠者辩称缺勤是"经验式学习"。学生们学得很深入。这是政治上的神来之笔。'
                },
                stats: { competence: 60, ethics: 60, leadership: 70, innovation: 90 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Neutral Stance: "Say nothing. Let the principals handle it. Avoid taking a side to protect your own career."',
                    th: '🤐 วางตัวเป็นกลาง: "ไม่ต้องพูดอะไร ให้ผอ.แต่ละโรงเรียนจัดการเอง เลี่ยงการเลือกข้างเพื่อปกป้องตำแหน่งตัวเอง"',
                    zh: '🤐 中立立场："什么都不说。让校长们去处理。避免表态以保护自己的职业生涯。"'
                },
                consequence: {
                    en: '📉 Leadership Vacuum. Chaos ensues as different schools have different rules. You look weak to both sides. The board questions your value.',
                    th: '📉 สภาวะสุญญากาศของผู้นำ เกิดความวุ่นวายเพราะแต่ละโรงเรียนมีกฎไม่เหมือนกัน คุณดูอ่อนแอในสายตาทั้งสองฝ่าย คณะกรรมการเริ่มสงสัยในตัวคุณ',
                    zh: '领导力真空。混乱接踵而至，因为不同的学校有不同的规则。你在双方看来都很软弱。董事会质疑你的价值。'
                },
                stats: { competence: 20, ethics: 20, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'eadm_007',
        text: {
            en: '👹 The Abusive Principal: Your high-performing elementary principal has been accused of verbal abuse by 5 staff members. However, under his leadership, the school moved from "F" to "A" in one year. He is a local legend.',
            th: '👹 ผอ.หัวรุนแรง: ผอ.โรงเรียนประถมที่มีผลงานดีเด่นถูกพนักงาน 5 คนกล่าวหาว่าใช้ความรุนแรงทางคำพูด อย่างไรก็ตาม ภายใต้การนำของเขา โรงเรียนขยับจากเกรด "F" เป็น "A" ได้ในเวลาเพียงปีเดียว เขาคือตำนานของที่นี่',
            zh: '👹 虐待员工的校长：你的一位表现优异的小学校长被5名员工指控言语虐待。然而，在他的领导下，学校在一年内从"F"级提升到了"A"级。他是当地的传奇人物。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Terminate: "Excellence does not justify abuse. I will fire him to protect staff mental health. Culture over scores."',
                    th: '🔥 ไล่ออก: "ความเป็นเลิศไม่ใช่ข้ออ้างของการทำร้ายจิตใจ ฉันจะไล่เขาออกเพื่อปกป้องสุขภาพจิตพนักงาน วัฒนธรรมองค์กรสำคัญกว่าคะแนน"',
                    zh: '🔥 解雇："卓越不能成为虐待的理由。为了保护员工的心理健康，我将解雇他。文化重于分数。"'
                },
                consequence: {
                    en: '⚔️ Backlash. Parents are furious that the "man who saved the school" is gone. Scores plummet next year. But staff morale eventually stabilizes.',
                    th: '⚔️ กระแสต่อต้าน ผู้ปกครองโกรธจัดที่ "คนที่กอบกู้โรงเรียน" ถูกไล่ออก ปีต่อมาคะแนนตกร่วงกราว แต่ขวัญกำลังใจพนักงานเริ่มมั่นคงในระยะยาว',
                    zh: '⚔️ 反弹。家长们对于"救了学校的人"离去感到愤怒。明年的分数骤降。但员工的士气最终稳定了下来。'
                },
                stats: { competence: 40, ethics: 80, leadership: 60, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Coaching & Probation: "Put him on a strict improvement plan. Mandatory emotional intelligence coaching. If it happens once more, he\'s gone."',
                    th: '🤝 ฝึกอบรมและทัณฑ์บน: "ให้เขาเข้าแผนปรับปรุงอย่างเข้มงวด บังคับเข้าคอร์สพัฒนาความฉลาดทางอารมณ์ ถ้าเกิดเรื่องอีกครั้งเดียว เขาต้องไปทันที"',
                    zh: '🤝 指导与留职察看："让他执行严格的改进计划。强制性的情商指导。如果再发生一次，他就得引咎辞职。"'
                },
                consequence: {
                    en: '🐢 Middle Ground. He resents you and does the bare minimum of coaching. The staff feels like you didn\'t really protect them.',
                    th: '🐢 ทางสายกลาง เขาโกรธคุณและเข้าอบรมพอเป็นพิธี พนักงานรู้สึกว่าคุณไม่ได้ปกป้องพวกเขาจริงๆ',
                    zh: '妥协方案。他怨恨你，只进行最起码的指导。员工觉得你并没有真正保护他们。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Move Him Up: "Promote him to a district-level role where he doesn\'t manage people directly. Keep his strategy, lose his toxicity."',
                    th: '🤐 เลื่อนตำแหน่งขึ้นไป: "ดันเขาขึ้นไปรับตำแหน่งระดับเขตที่ไม่ต้องบริหารคนโดยตรง รักษาแผนยุทธศาสตร์เขาไว้ แต่เอาความเป็นพิษออกไป"',
                    zh: '🤐 晋升提拨："提拔他到学区一级的职位，在那里他不直接管理人。保留他的战略，去除他的毒性。"'
                },
                consequence: {
                    en: '🤮 Promoted for Abuse. The staff is disgusted. You solved the school problem but poisoned the district office. Toxic success.',
                    th: '🤮 ทำชั่วได้ดี พนักงานรู้สึกขยะแขยง คุณแก้ปัญหาที่โรงเรียนได้แต่เอาความเน่าเฟะมาไว้ที่สำนักงานเขตแทน เป็นความสำเร็จที่ขมขื่น',
                    zh: '🤮 因虐待受提拔。员工们感到恶心。你解决了学校的问题，却毒害了学区办公室。有毒的成功。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🏛️ Mediation: "Sit him down with the 5 staff members and a mediator. Force a face-to-face reconciliation. High transparency."',
                    th: '🏛️ ประสานรอยร้าว: "ให้เขามาเผชิญหน้ากับพนักงานทั้ง 5 คนพร้อมคนกลาง บีบให้มีการปรับความเข้าใจกันต่อหน้า เน้นความโปร่งใสสูงสุด"',
                    zh: '🏛️ 调解："让他与5名员工和一名调解人坐下来。促成面对面的和解。高透明度。"'
                },
                consequence: {
                    en: '✨ Powerful Resolution. He actually apologizes. The staff feels empowered. The school keeps its star leader and its dignity. Rare win.',
                    th: '✨ ทางออกที่ทรงพลัง เขายอมขอโทษจริงๆ พนักงานรู้สึกมีอำนาจต่อรอง โรงเรียนรักษาผู้นำคนเก่งไว้ได้พร้อมศักดิ์ศรี เป็นชัยชนะที่หาได้ยาก',
                    zh: '✨ 有力的解决。他真的道歉了。员工感到权力得到了保障。学校保留了明星领导和尊严。罕见的胜利。'
                },
                stats: { competence: 60, ethics: 60, leadership: 80, innovation: 30 }
            }
        ]
    },
    {
        id: 'eadm_008',
        text: {
            en: '📅 The Four-Day Week: To save $1M on transportation and utility costs, the board proposes a four-day school week. Teachers are excited, but working parents are panicked about childcare.',
            th: '📅 เรียน 4 วันต่อสัปดาห์: เพื่อประหยัดเงิน 1 ล้านดอลลาร์ในค่าเดินทางและสาธารณูปโภค คณะกรรมการเสนอให้เรียน 4 วันต่อสัปดาห์ ครูตื่นเต้นมาก แต่พ่อแม่วัยทำงานตื่นตระหนกเรื่องการหาที่ฝากเด็ก',
            zh: '📅 每周四天课程：为了节省100万美元的运输和公用事业成本，董事会提议实行每周四天的工作制。老师们很兴奋，但双职工家长对托儿问题感到恐慌。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Approve it: "The savings will go directly into teacher salaries and classroom tech. Efficiency first. Families will adapt."',
                    th: '🚀 อนุมัติ: "เงินที่ประหยัดได้จะถูกนำไปเพิ่มเงินเดือนครูและซื้อเทคโนโลยีมาใช้ในห้องเรียน เน้นประสิทธิภาพก่อน ครอบครัวเดี๋ยวก็ปรับตัวกันเอง"',
                    zh: '🚀 批准："节省下来的资金将直接用于教师薪酬和教室技术。效率第一。家庭会适应的。"'
                },
                consequence: {
                    en: '📉 Economic Burden. Wealthier parents find tutors; poorer students fall behind on that 5th day. You saved the budget but widened the equity gap.',
                    th: '📉 ภาระทางเศรษฐกิจ พ่อแม่ที่มีฐานะจะไปจ้างติวเตอร์ ส่วนเด็กยากจนจะล้าหลังในวันที่ 5 ที่หยุดไป คุณเซฟงบได้แต่เพิ่มช่องว่างความเหลื่อมล้ำ',
                    zh: '📉 经济负担。富裕的家长能找到导师；贫穷的学生在第5天会掉队。你保住了预算，但扩大了公平差距。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Deny it: "We are a safe haven for children. If we close, our most vulnerable students suffer. Find the $1M elsewhere."',
                    th: '🛑 ไม่อนุมัติ: "เราคือบ้านที่ปลอดภัยสำหรับเด็ก ถ้าเราปิด นักเรียนที่ยากไร้ที่สุดจะลำบาก ไปหาทางประหยัด 1 ล้านจากที่อื่นแทน"',
                    zh: '🛑 拒绝："我们是孩子们的避风港。如果我们关闭，我们最脆弱的学生将受苦。到别处去筹那100万美元。"'
                },
                consequence: {
                    en: '🔥 Teacher Exodus. Morale drops. Some high-quality teachers leave for the neighboring district that DID switch to 4 days. You kept the mission but lost the talent.',
                    th: '🔥 ครูลาออก ขวัญกำลังใจตกต่ำ ครูเก่งๆ บางคนย้ายไปอยู่เขตข้างๆ ที่เปลี่ยนไปเรียน 4 วันแล้ว คุณรักษาภารกิจไว้ได้แต่รักษายอดฝีมือไว้ไม่ได้',
                    zh: '🔥 教师流失。士气下降。一些高质量的老师离开了，去了邻近的实行四天工作制的学区。你保留了使命，但流失了人才。'
                },
                stats: { competence: 40, ethics: 60, leadership: 50, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The Enrichment Friday: "Switch to 4 days of core class, but keep the building open on Friday for non-mandatory clubs and sports run by community volunteers."',
                    th: '🤝 ศุกร์หรรษาเสริมทักษะ: "เปลี่ยนไปเรียนวิชาหลัก 4 วัน แต่ยังเปิดอาคารในวันศุกร์เพื่อทำชมรมและกีฬาตามความสมัครใจ โดยใช้คนในชุมชนมาเป็นอาสาสมัครรันกิจกรรม"',
                    zh: '🤝 丰富周五内容："改为四天核心课程，但周五保持大楼开放，由社区志愿者经营非强制性的俱乐部和体育活动。"'
                },
                consequence: {
                    en: '✨ Community Hub. It solves the childcare issue for most. It creates a vibrant school culture. You look like a genius of logistical design.',
                    th: '✨ ศูนย์กลางชุมชน แก้ปัญหาเรื่องที่ฝากเลี้ยงได้เกือบทั้งหมด สร้างวัฒนธรรมโรงเรียนที่สดใส คุณดูเหมือนอัจฉริยะด้านการออกแบบการขนส่งและบริหารจัดการ',
                    zh: '✨ 社区枢纽。这为大多数人解决了托儿问题。它创造了充满活力的学校文化。你看起来像是物流设计的天才。'
                },
                stats: { competence: 60, ethics: 50, leadership: 70, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Opt-In Pilot: "Only apply it to the High School. See the impact on test scores before affecting the younger kids who need more care."',
                    th: '📈 โครงการนำร่อง: "ใช้เฉพาะกับมัธยมปลายก่อน ดูผลกระทบคะแนนสอบก่อนที่จะไปทำกับเด็กเล็กที่ยังต้องการคนดูแล"',
                    zh: '📈 选择性试点："只对高中实行。在影响需要更多照顾的小孩之前，先看看对考试成绩的影响。"'
                },
                consequence: {
                    en: '⚖️ Rational Progress. The data shows high schoolers handle it well. You have a phased implementation plan that parents accept.',
                    th: '⚖️ ความก้าวหน้าที่สมเหตุสมผล ข้อมูลชี้ว่าเด็กโตคุมตัวเองได้ดี คุณมีแผนการเริ่มใช้เป็นระยะที่ผู้ปกครองยอมรับ',
                    zh: '⚖️ 理性的进步。数据表明高中生处理得很好。你有一个分阶段实施计划，家长们也接受了。'
                },
                stats: { competence: 60, ethics: 50, leadership: 50, innovation: 40 }
            }
        ]
    },
    {
        id: 'eadm_009',
        text: {
            en: '👥 The Shadow Tutoring: You discover a group of wealthy parents has hired your math teachers to privately tutor their kids after hours, giving them an unfair advantage on exams. It\'s technically not against the rules, but it feels wrong.',
            th: '👥 ติวเงาทมิฬ: คุณพบว่ากลุ่มผู้ปกครองที่มีฐานะจ้างครูคณิตศาสตร์ไปติวส่วนตัวให้ลูกตัวเองหลังเลิกเรียน ทำให้เด็กกลุ่มนี้ได้เปรียบในการสอบแบบไม่เป็นธรรม ในทางเทคนิคไม่ผิดกฎ แต่มันดูไม่ถูกต้อง',
            zh: '👥 暗影辅导：你发现一群富裕的家长雇用了你的数学老师在课后为他们的孩子进行私人辅导，这给他们在考试中带来了不公平的优势。从技术上讲，这并不违反规则，但感觉不对劲。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Ban the Practice: "Teachers cannot take private money from current students. It\'s a massive conflict of interest. Period."',
                    th: '🚫 สั่งห้าม: "ครูห้ามรับเงินส่วนตัวจากนักเรียนปัจจุบัน มันคือผลประโยชน์ทับซ้อนครั้งใหญ่ จบนะ"',
                    zh: '🚫 禁止此类行为："老师不能从当前的学生那里收取私人资金。这是巨大的利益冲突。就这样。"'
                },
                consequence: {
                    en: '🛡️ Integrity Restored. The exams feel fair again. But your teachers (who are underpaid) are furious at the loss of income. Some quit.',
                    th: '🛡️ กู้คืนความซื่อสัตย์ การสอบดูยุติธรรมอีกครั้ง แต่ครูของคุณ (ที่เงินเดือนน้อยอยู่แล้ว) โกรธจัดที่เสียรายได้ไป บางคนถึงขั้นลาออก',
                    zh: '🛡️ 恢复诚信。考试再次变得公平。但你的老师（工资偏低）因失去收入而愤愤不平。有些人辞职了。'
                },
                stats: { competence: 40, ethics: 70, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Official After-School: "Force the tutoring into an official district program. The district pays the teachers, and it\'s free for students in need. Funded by high fees for the wealthy."',
                    th: '🤝 กิจกรรมหลังเลิกเรียนที่เป็นทางการ: "บังคับให้การติวย้ายมาอยู่ในโครงการของเขตอย่างเป็นทางการ เขตเป็นคนจ่ายเงินให้ครู เด็กที่ลำบากเรียนฟรี โดยใช้งบจากค่าธรรมเนียมแพงๆ ที่เก็บจากคนรวย"',
                    zh: '🤝 官方课后辅导："将辅导纳入官方的学区项目。学区向老师支付工资，对有需要的学生免费。资金由富裕家庭支付的高额费用提供。"'
                },
                consequence: {
                    en: '✨ Robin Hood Model. You subsidized local education using private wealth. Everyone wins, but the wealthy parents complain about the cost.',
                    th: '✨ โมเดลโรบินฮู้ด คุณใช้งบจากคนรวยมาอุดหนุนการศึกษาส่วนรวม ทุกฝ่ายได้ประโยชน์ แต่ผู้ปกครองรวยๆ จะบ่นเรื่องราคาที่แพงขึ้น',
                    zh: '罗宾汉模式。你利用私人财富资助了当地教育。每个人都赢了，但富裕的家长抱怨成本太高。'
                },
                stats: { competence: 60, ethics: 60, leadership: 70, innovation: 80 }
            },
            {
                id: 'C',
                text: {
                    en: '📈 Blind Grading: "I won\'t stop the tutoring, but I will implement blind, external grading for all major exams. No teacher grades their own student."',
                    th: '📈 การตรวจข้อสอบแบบไม่ระบุตัวตน: "ฉันจะไม่ห้ามการติว แต่จะใช้ระบบตรวจข้อสอบจากคนนอกและไม่ระบุชื่อนักเรียน ครูไม่มีสิทธิ์ตรวจข้อสอบลูกศิษย์ตัวเอง"',
                    zh: '📈 盲改："我不会阻止辅导，但我将对所有重大考试实行盲改和外部评分。没有老师能给自己的学生评分。"'
                },
                consequence: {
                    en: '⚖️ Tactical Neutrality. You removed the potential for bias without fighting the parents or the teachers. It\'s a smart bureaucratic move.',
                    th: '⚖️ ความเป็นกลางเชิงยุทธวิธี คุณขจัดความลำเอียงที่อาจเกิดขึ้นได้โดยไม่ต้องไปรบกับครูหรือผู้ปกครอง เป็นการเดินหมากแบบนักบริหารที่ฉลาด',
                    zh: '⚖️ 战术中立。你消除了潜在的偏见，而没有与家长或老师发生冲突。这是一个明智的官僚举动。'
                },
                stats: { competence: 70, ethics: 50, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Ignore It: "They are working hard to succeed. My teachers are professionals. I trust their judgement."',
                    th: '🤐 เมินเฉย: "พวกเขาก็แค่พยายามทำงานหนักเพื่อความสำเร็จ ครูของฉันคือมืออาชีพ ฉันเชื่อมั่นในการตัดสินใจของพวกเขา"',
                    zh: '🤐 忽略它："他们正在努力争取成功。我的老师是专业人士。我信任他们的判断。"'
                },
                consequence: {
                    en: '📉 Corruption Rumors. The school gets a reputation of being "pay-to-win." Top talent from poor backgrounds stops applying to your district.',
                    th: '📉 ข่าวลือเรื่องทุจริต โรงเรียนเสียชื่อว่า "จ่ายเงินเพื่อชนะ" เด็กเก่งๆ ที่มีฐานะยากจนจะเริ่มไม่ส่งลูกมาเรียนที่นี่',
                    zh: '关于腐败的传言。学校获得了"付费获胜"的名声。贫困背景的顶尖人才不再向你的学区提交申请。'
                },
                stats: { competence: 20, ethics: 10, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'eadm_010',
        text: {
            en: '🤝 The PTA Power Struggle: The PTA President is a major donor and is effectively trying to run the school, demanding say in teacher hiring and curriculum. The teachers are on the verge of a strike.',
            th: '🤝 ศึกชิงอำนาจ PTA: ประธานสมาคมผู้ปกครองและครู (PTA) เป็นรายใหญ่ที่บริจาคเงินและพยายามจะเข้ามาบริหารโรงเรียนเสียเอง ทั้งเรื่องการจ้างครูและหลักสูตร จนครูเตรียมจะประท้วงหยุดงานแล้ว',
            zh: '🤝 PTA权力斗争：PTA主席是一位主要捐赠者，实际上是在试图管理学校，要求在教师聘用和课程设置方面有发言权。老师们正处于罢工的边缘。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Reclaim Authority: "The PTA is an advisory body, not a board of directors. I clearly define the boundaries in a legal memo. No donor runs our classrooms."',
                    th: '🛑 ทวงคืนอำนาจ: "PTA คือที่ปรึกษา ไม่ใช่บอร์ดบริหาร ฉันออกบันทึกข้อความทางกฎหมายระบุขอบเขตชัดเจน ไม่มีผู้บริจาคคนไหนมีสิทธิ์มาสั่งการในห้องเรียน"',
                    zh: '🛑 夺回权力："PTA是一个咨询机构，而不是董事会。我也在法律备忘录中明确界定了界限。任何捐赠者都不能管理我们的教室。"'
                },
                consequence: {
                    en: '🔥 Financial Fallout. The donor pulls $200k. But the teachers feel immense respect for you. The school culture transforms into a true professional environment.',
                    th: '🔥 ผลกระทบทางการเงิน ผู้บริจาคถอนเงิน 200,000 ดอลลาร์ออกไป แต่ครูทุกคนเคารพคุณอย่างมาก วัฒนธรรมโรงเรียนกลายเป็นสังคมของมืออาชีพที่แท้จริง',
                    zh: '🔥 财务影响。捐赠者撤回了20万美元。但老师们对你产生了巨大的尊重。学校文化转变为真正的专业环境。'
                },
                stats: { competence: 50, ethics: 70, leadership: 90, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 The Advisory Seat: "Give her a seat on a non-binding advisory committee. Let her feel heard without giving her actual voting power. Appeasement."',
                    th: '🤝 ที่นั่งที่ปรึกษา: "ให้เธอนั่งในคณะกรรมการที่ปรึกษาที่ไม่มีผลผูกพัน ให้เธอรู้สึกว่ามีคนฟังแต่ไม่มีอำนาจโหวตจริง เป็นการประนีประนอม"',
                    zh: '🤝 顾问席位："在不具约束力的咨询委员会中给她一个席位。让她感觉自己的意见被听取，但不赋予她实际的投票权。平息事态。"'
                },
                consequence: {
                    en: '🐢 Managed Ego. She stays happy for a while, but eventually realizes it\'s a symbolic role and gets even angrier later. You delayed the explosion.',
                    th: '🐢 บริหารอีโก้ เธอจะแฮปปี้อยู่พักหนึ่ง แต่สุดท้ายพอรู้ว่าเป็นแค่หัวโขนก็จะโกรธหนักกว่าเดิม คุณแค่อยืดเวลาการระเบิดออกไป',
                    zh: '以此控制自尊心。她会高兴一段时间，但最终会意识到这是一个象征性的角色，以后会更加愤怒。你推迟了爆发的时间。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '📉 Side with PTA: "She represents the parents. We should listen. If the budget benefits, maybe we let her influence one small department."',
                    th: '📉 เลือกข้าง PTA: "เธอคือตัวแทนผู้ปกครอง เราควรฟัง ถ้ามันเป็นผลดีต่อเงินงบประมาณ เราอาจจะยอมให้เธอมีอิทธิพลในภาควิชาเล็กๆ สักที่นึง"',
                    zh: '📉 站在PTA这一边："她代表家长。我们应该听取意见。如果对预算有利，也许我们可以让她影响一个小的部门。"'
                },
                consequence: {
                    en: '🤮 Sellout. The math department (the one you gave her) becomes a mess of her personal ideologies. High-quality staff leave immediately.',
                    th: '🤮 ขายตัว ภาควิชาคณิตศาสตร์ (ที่คุณยกให้เธอคุม) กลายเป็นที่รองรับอุดมคติส่วนตัวของเธอจนเละเทะ พนักงานเก่งๆ ลาออกทันที',
                    zh: '🤮 出卖。数学部门（你交给她的那个）变成了她个人意识形态的一团乱麻。高质量的员工立即离开了。'
                },
                stats: { competence: 20, ethics: 10, leadership: -50, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🏛️ Structural Reform: "Dissolve the current PTA and reform it as a broader \'Community Council\' including local business and alumni to dilute her power."',
                    th: '🏛️ ปฏิรูปโครงสร้าง: "ยุบ PTA ชุดปัจจุบันแล้วตั้งใหม่เป็น \'สภาชุมชน\' ที่รวมธุรกิจในพื้นที่และศิษย์เก่าเข้ามาด้วยเพื่อลดทอนอำนาจของเธอ"',
                    zh: '🏛️ 结构性改革："解散目前的PTA，并将其重组为一个包括当地企业和校友在内的范围更广的\'社区委员会\'，以此削弱她的权力。"'
                },
                consequence: {
                    en: '✨ Strategic Genius. You broadened the school\'s support base and neutralized a toxic individual legally and subtly.',
                    th: '✨ อัจฉริยะเชิงกลยุทธ์ คุณได้ขยายฐานการสนับสนุนโรงเรียนให้กว้างขึ้นและกำจัดคนที่เป็นพิษออกไปได้อย่างถูกกฎหมายและแนบเนียน',
                    zh: '✨ 战略天才。你扩大了学校的支持基础，并合法、微妙地中和了一个有害的人。'
                },
                stats: { competence: 70, ethics: 50, leadership: 80, innovation: 60 }
            }
        ]
    },
    {
        id: 'eadm_011',
        text: {
            en: '🏫 Charter School Challenge: A high-performing charter school wants to open in your district. It will take top students and funding away from public schools, but parents are demanding more choices.',
            th: '🏫 ความท้าทายจากโรงเรียนทางเลือก: โรงเรียนทางเลือก (Charter School) ที่มีผลงานดีต้องการเปิดในเขตของคุณ มันจะดึงนักเรียนเก่งๆ และงบประมาณไปจากโรงเรียนรัฐ แต่ผู้ปกครองต้องการทางเลือกเพิ่ม',
            zh: '🏫 特许学校挑战：一所表现优异的特许学校想在你的学区开办。它会从公立学校抽走尖子生和资金，但家长们要求更多的选择。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Collaborate: Approve the charter but demand a partnership where they share their teaching methods with public school teachers.',
                    th: '🤝 ร่วมมือ: อนุมัติให้เปิดแต่ต้องมีข้อตกลงพาร์ทเนอร์ที่เขาต้องแบ่งปันวิธีการสอนกับครูโรงเรียนรัฐ',
                    zh: '🤝 合作：批准特许学校，但要求建立伙伴关系，让他们与公立学校教师分享教学方法。'
                },
                consequence: {
                    en: '✨ Innovation Hub. Public schools improve by learning from the charter. You are hailed as a visionary, though some union leaders are wary.',
                    th: '✨ ศูนย์กลางนวัตกรรม โรงเรียนรัฐดีขึ้นจากการเรียนรู้จากโรงเรียนทางเลือก คุณได้รับยกย่องว่าเป็นผู้มองการณ์ไกล แต่ผู้นำสหภาพบางคนยังระแวง',
                    zh: '✨ 创新中心。公立学校通过向特许学校学习而得到改善。你被誉为有远见的人，尽管一些工会领导人持谨慎态度。'
                },
                stats: { competence: 45, ethics: 40, leadership: 45, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Block the Charter: Use zoning and safety regulations to delay or block their opening. Protect the public school budget at all costs.',
                    th: '🚫 ขวางโรงเรียนทางเลือก: ใช้กฎระเบียบเรื่องผังเมืองและความปลอดภัยเพื่อถ่วงเวลาหรือระงับการเปิด ปกป้องงบโรงเรียนรัฐทุกวิถีทาง',
                    zh: '🚫 阻碍特许学校：利用规划和安全法规延迟或阻碍其开办。不惜一切代价保护公立学校预算。'
                },
                consequence: {
                    en: '🛡️ Budget Protected. Public schools keep their funding, but angry parents start a "School Choice" social media campaign against you.',
                    th: '🛡️ ปกป้องงบได้ โรงเรียนรัฐยังมีเงินทุนครบ แต่ผู้ปกครองที่โกรธเริ่มทำแคมเปญโซเชียลต่อต้านคุณเรื่อง "สิทธิในการเลือกโรงเรียน"',
                    zh: '🛡️ 预算得到保护。公立学校保留了资金，但愤怒的家长们发起了针对你的"学校选择"社交媒体运动。'
                },
                stats: { competence: 30, ethics: 20, leadership: 35, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Compete: Instead of blocking them, launch a specialized "GT (Gifted & Talented) Academy" within your existing public schools to keep the top students.',
                    th: '🚀 แข่งขัน: แทนที่จะขวาง ให้เปิด "สถาบันเด็กอัจฉริยะ (GT)" ในโรงเรียนรัฐที่คุณมีอยู่เดิมเพื่อรักษานักเรียนเก่งๆ ไว้',
                    zh: '🚀 竞争：与其阻碍，不如在现有公立学校内开办专门的"天才学院"，以留住尖子生。'
                },
                consequence: {
                    en: '🏆 Market Victory. Most parents stay with the public schools. It’s expensive to run, but your district’s reputation hits an all-time high.',
                    th: '🏆 ชัยชนะในตลาด ผู้ปกครองส่วนใหญ่ยังอยู่กับโรงเรียนรัฐ ถึงจะใช้งบเยอะแต่ชื่อเสียงเขตการศึกษาของคุณพุ่งสูงสุดเป็นประวัติการณ์',
                    zh: '🏆 市场胜利。大多数家长留在了公立学校。运行成本很高，但你学区的声望达到了历史最高点。'
                },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '⚖️ Equity Audit: Approve the charter ONLY if they agree to take a reflective percentage of special education and low-income students.',
                    th: '⚖️ ตรวจสอบความเท่าเทียม: อนุมัติโรงเรียนทางเลือกเฉพาะเมื่อเขาตกลงจะรับนักเรียนพิเศษและนักเรียนรายได้น้อยในสัดส่วนที่เท่ากับโรงเรียนรัฐ',
                    zh: '⚖️ 公平审计：只有当特许学校同意招收相应比例的特殊教育学生和低收入学生时，才予以批准。'
                },
                consequence: {
                    en: '⚖️ Fairness Hero. The charter refuses and goes elsewhere, or agrees and struggles with the same issues you face. You stood for equity.',
                    th: '⚖️ ฮีโร่แห่งความยุติธรรม โรงเรียนทางเลือกอาจจะปฏิเสธแล้วไปที่อื่น หรือตกลงและต้องเผชิญปัญหาเดียวกับที่คุณเจอ คุณทำเพื่อความเท่าเทียม',
                    zh: '⚖️ 公平英雄。特许学校要么拒绝并去往他处，要么同意并面临和你一样的困难。你捍卫了公平。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'eadm_012',
        text: {
            en: '🩺 School Nurse Shortage: Your district only has 3 nurses for 15 schools. A student has a serious allergic reaction at a school without a nurse. The parents are suing.',
            th: '🩺 ขาดแคลนพยาบาลโรงเรียน: เขตของคุณมีพยาบาลแค่ 3 คนสำหรับ 15 โรงเรียน เกิดเหตุนักเรียนแพ้รุนแรงในโรงเรียนที่ไม่มีพยาบาล ผู้ปกครองกำลังฟ้องร้อง',
            zh: '🩺 校医短缺：你学区的15所学校只有3名校医。一名学生在没有校医的学校发生了严重的过敏反应。家长正提起诉讼。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📜 Emergency Funding: Immediately cut the sports travel budget to hire 5 more nurses and provide EpiPens to every classroom.',
                    th: '📜 งบฉุกเฉิน: ตัดงบค่าเดินทางนักกีฬาลงทันทีเพื่อจ้างพยาบาลเพิ่ม 5 คน และแจก EpiPen ให้ทุกห้องเรียน',
                    zh: '📜 紧急资金：立即削减体育差旅预算，增聘5名校医，并为每个教室配备肾上腺素注射器（EpiPen）。'
                },
                consequence: {
                    en: '🛡️ Safety Guaranteed. The lawsuit is settled. Athletes and coaches are furious, but no more students are at risk.',
                    th: '🛡️ รับประกันความปลอดภัย ยอมความในคดีได้ นักกีฬาและโค้ชโกรธมาก แต่ไม่มีนักเรียนคนไหนเสี่ยงชีวิตอีก',
                    zh: '🛡️ 安全保障。诉讼达成和解。运动员和教练们很愤怒，但不再有学生面临风险。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💻 Telehealth Pilot: Partner with a local hospital for "Virtual Nurse" stations in every school office via video link.',
                    th: '💻 นำร่อง Telehealth: เป็นพาร์ทเนอร์กับโรงพยาบาลท้องถิ่นเพื่อทำจุด "พยาบาลเสมือน" ในทุกออฟฟิศโระเรียนผ่านวิดีโอ',
                    zh: '💻 远程医疗试点：与当地医院合作，在每个学校办公室通过视频链接设立"虚拟校医"站。'
                },
                consequence: {
                    en: '✨ Tech Solution! Efficient and cheaper than full-time nurses. You get press coverage for "21st Century Safety."',
                    th: '✨ ทางออกสายเทค! มีประสิทธิภาพและถูกกว่าจ้างพยาบาลเต็มเวลา คุณได้ลงข่าวเรื่อง "ความปลอดภัยแห่งศตวรรษที่ 21"',
                    zh: '✨ 技术方案！高效且比全职校医便宜。你因"21世纪安全保障"获得了媒体报道。'
                },
                stats: { competence: 45, ethics: 35, leadership: 35, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Train Everyone: Mandate that every single teacher and administrator completes advanced first-aid and EpiPen training.',
                    th: '🤝 ฝึกคนเพิ่ม: บังคับให้ครูและผู้บริหารทุกคนต้องผ่านการฝึกปฐมพยาบาลขั้นสูงและการใช้ EpiPen ทกคน',
                    zh: '🤝 全员培训：强制要求每位教师和行政人员完成高级急救和EpiPen使用培训。'
                },
                consequence: {
                    en: '💪 Prepared Staff. Teachers feel overwhelmed with extra responsibility, but the "safety net" is now everywhere, not just in the nurse office.',
                    th: '💪 ทีมงานพร้อม ครูรู้สึกแบกภาระเพิ่มขึ้นมาก แต่ "ข่ายความปลอดภัย" มีอยู่ทุกที่ ไม่ใช่แค่ในห้องพยาบาล',
                    zh: '💪 训练有素的员工。教师们觉得额外责任过重，但"安全网"现在无处不在，而不仅仅是在校医室。'
                },
                stats: { competence: 35, ethics: 40, leadership: 45, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '⚖️ Legal Defense: Fight the lawsuit. Argue that the district followed all state-mandated ratios and isn’t liable for the reaction.',
                    th: '⚖️ สู้คดี: สู้คดีในศาล แย้งว่าเขตการศึกษาทำตามสัดส่วนที่รัฐกำหนดทุกประการและไม่ต้องรับผิดชอบต่ออาการแพ้นั้น',
                    zh: '⚖️ 法律辩护：进行诉讼。辩称学区遵守了所有州政府规定的比例，不对过敏反应承担责任。'
                },
                consequence: {
                    en: '📉 PR Nightmare. You look cold and uncaring. Even if you win the case, you lose the community’s trust for years.',
                    th: '📉 หายนะ PR คุณดูเป็นคนเย็นชาและไม่ใส่ใจ ถึงจะชนะคดีแต่คุณเสียความเชื่อใจจากชุมชนไปหลายปี',
                    zh: '公关噩梦。你看起来冷漠无情。即使赢了官司，你也失去了社区多年的信任。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 0 }
            }
        ]
    },
    {
        id: 'eadm_013',
        text: {
            en: '🚨 Zero Tolerance vs Restore: A student brings a small pocket knife to school for a "camping project" but forgets it in their bag. State law says "Zero Tolerance = Automatic Expulsion."',
            th: '🚨 กฎเหล็ก vs การฟื้นฟูวินัย: นักเรียนพกมีดพับเล็กๆ มาโรงเรียนเพื่อ "โครงงานแคมป์ปิ้ง" แต่ลืมไว้ในกระเป๋า กฎหมายรัฐบอกว่า "ยอมไม่ได้ = ไล่ออกอัตโนมัติ"',
            zh: '🚨 零容忍与恢复性正义：一名学生为了"露营项目"带了一把小折刀到学校，但忘在包里了。州法律规定"零容忍 = 自动开除"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📜 Follow the Law: Expel the student. We cannot make exceptions for weapons, or we open the door to chaos.',
                    th: '📜 ทำตามกฎ: ไล่นักเรียนออก เราจะยกเว้นเรื่องอาวุธไม่ได้ ไม่อย่างนั้นจะเกิดความโกลาหล',
                    zh: '📜 遵守法律：开除该学生。我们不能对武器破例，否则会打开混乱之门。'
                },
                consequence: {
                    en: '📉 Life Ruined. A good student loses their future over a mistake. You are seen as a rigid bureaucrat. Safety remains high but morale is low.',
                    th: '📉 ชีวิตพัง นักเรียนดีๆ คนหนึ่งเสียอนาคตเพราะความผิดพลาดครั้งเดียว คุณถูกมองว่าเป็นข้าราชการที่แข็งทื่อ ความปลอดภัยยังสูงแต่ขวัญกำลังใจต่ำ',
                    zh: '📉 毁掉人生。一名好学生因一个错误失去了未来。你被视为僵化的官僚。安全性保持高位但士气低落。'
                },
                stats: { competence: 30, ethics: 15, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Suspended Sentence: Give a long suspension instead of expulsion. Use a legal loophole to classify the knife as a "project tool."',
                    th: '⚖️ รอลงอาญา: ให้พักการเรียนเป็นเวลานานแทนการไล่ออก ใช้ช่องโหว่ทางกฎหมายตีความว่ามีดคือ "เครื่องมือทำโครงงาน"',
                    zh: '⚖️ 缓期执行：予以长期停学而非开除。利用法律漏洞将该刀具归类为"项目工具"。'
                },
                consequence: {
                    en: '🤝 Compassionate Middle. You save the student’s record. Some conservative board members are angry, but teachers appreciate the logic.',
                    th: '🤝 กลางๆ แบบมีเมตตา คุณรักษาประวัตินักเรียนไว้ได้ กรรมการอนุรักษ์นิยมบางคนโกรธ แต่ครูชื่นชมในเหตุผลของคุณ',
                    zh: '🤝 富有同情心的折中方案。你保住了学生的记录。一些保守的董事会成员很生气，但教师们赞赏你的逻辑。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 25 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Restorative Justice: No expulsion. The student must lead a "Safety Awareness" seminar and perform community service.',
                    th: '🔄 กระบวนการยุติธรรมเชิงสมานฉันท์: ไม่ไล่ออก แต่นักเรียนต้องเป็นผู้นำเซมินาร์ "สร้างความตระหนักด้านความปลอดภัย" และบำเพ็ญประโยชน์',
                    zh: '🔄 恢复性正义：不开除。学生必须领导一场"安全意识"研讨会并进行社区服务。'
                },
                consequence: {
                    en: '✨ Modern Discipline. The student learns from the mistake. It sets a new precedent for the district, focusing on growth over punishment.',
                    th: '✨ วินัยยุคใหม่ นักเรียนเรียนรู้จากความผิดพลาด เป็นบรรทัดฐานใหม่ให้เขตการศึกษา โฟกัสที่การเติบโตมากกว่าการลงโทษ',
                    zh: '✨ 现代纪律。学生从错误中吸取教训。这为学区树立了新先例，专注于成长而非惩罚。'
                },
                stats: { competence: 35, ethics: 50, leadership: 45, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🙈 Look the Other Way: Return the knife to the parents quietly and "lose" the incident report. Pretend it never happened.',
                    th: '🙈 แกล้งไม่เห็น: คืนมีดให้ผู้ปกครองเงียบๆ และ "ทำหาย" รายงานบันทึกเหตุการณ์ แกล้งทำเหมือนไม่มีอะไรเกิดขึ้น',
                    zh: '🙈 视而不见：悄悄把刀还给家长，并"弄丢"事故报告。假装从未发生过。'
                },
                consequence: {
                    en: '🔥 Corruption Scandal. A staff member leaks the cover-up. You are fired for ethical violations. The student is eventually expelled anyway.',
                    th: '🔥 อื้อฉาวทุจริต พนักงานคนหนึ่งแฉเรื่องการปกปิด คุณถูกไล่ออกเพราะละเมิดจริยธรรม และสุดท้ายนักเรียนก็ถูกไล่ออกอยู่ดี',
                    zh: '🔥 腐败丑闻。一名员工泄露了隐瞒行为。你因违反职业道德被解雇。该学生最终还是被开除了。'
                },
                stats: { competence: 10, ethics: -50, leadership: -40, innovation: 10 }
            }
        ]
    },
    {
        id: 'eadm_014',
        text: {
            en: '🏫 The Stadium Debt: Your predecessor built a $50M football stadium using high-interest bonds. Now, you have to cut the music and arts programs to pay the debt interest.',
            th: '🏫 หนี้สนามกีฬา: ผู้บริหารคนก่อนสร้างสนามกีฬาฟุตบอลมูลค่า $50M โดยใช้พันธบัตรดอกเบี้ยสูง ตอนนี้คุณต้องตัดงบดนตรีและศิลปะเพื่อจ่ายดอกเบี้ยหนี้นั้น',
            zh: '🏫 体育场债务：你的前任利用高息债券建造了一座耗资5000万美元的橄榄球场。现在，你不得不削减音乐和艺术项目来偿还债务利息。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✂️ Accept Reality: Cut arts and music. Sports bring in revenue and local support. We must honor the debt.',
                    th: '✂️ ยอมรับความจริง: ตัดศิลปะและดนตรี กีฬาช่วยสร้างรายได้และแรงสนับสนุนในท้องถิ่น เราต้องชำระหนี้',
                    zh: '✂️ 接受现实：削减艺术和音乐。体育能带来收入和当地支持。我们必须偿还债务。'
                },
                consequence: {
                    en: '📉 Cultural Desert. The arts community is devastated. Your district wins games but loses its soul. College applications to elite schools dip.',
                    th: '📉 ทะเลทรายทางวัฒนธรรม ชุมชนศิลปะพังพินาศ เขตของคุณชนะการแข่งกีฬาแต่เสียจิตวิญญาณ อัตราการเข้ามหาลัยดังๆ ลดลง',
                    zh: '📉 文化荒漠。艺术界遭到毁灭性打击。你的学区赢得了比赛，但失去了灵魂。名校的大学申请率下降。'
                },
                stats: { competence: 30, ethics: 20, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏗️ Sell the Naming Rights: Partner with a major corporation to rename the stadium for 10 years to fund the arts.',
                    th: '🏗️ ขายชื่อสนามกีฬา: เป็นพาร์ทเนอร์กับบริษัทใหญ่เพื่อเปลี่ยนชื่อสนามกีฬาเป็นเวลา 10 ปี เพื่อเอางบมาใช้กับศิลปะ',
                    zh: '🏗️ 出售冠名权：与一家大型公司合作，将体育场更名10年，以此资助艺术。'
                },
                consequence: {
                    en: '✨ Commercial Success. The "Amazon Stadium" pays for the orchestra. Traditionalists hate the commercialism, but the kids keep their instruments.',
                    th: '✨ ความสำเร็จทางการค้า "Amazon Stadium" คือคนจ่ายค่าวงออเคสตรา พวกอนุรักษนิยมเกลียดความเป็นธุรกิจ แต่เด็กๆ ยังมีเครื่องดนตรีเล่น',
                    zh: '✨ 商业成功。"亚马逊体育场"支付了管弦乐队的费用。传统主义者讨厌这种商业化，但孩子们的乐器保住了。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 45 }
            },
            {
                id: 'C',
                text: {
                    en: '📉 Tax Hike Referendum: Ask the voters for a small property tax increase specifically to "Save School Arts."',
                    th: '📉 ลงประชามติขึ้นภาษี: ขอให้ผู้ลงคะแนนยินยอมขึ้นภาษีที่ดินเล็กน้อยเจาะจงเพื่อ "รักษาศิลปะในโรงเรียน"',
                    zh: '📉 加税全民公投：要求选民小幅增加财产税，专门用于"拯救校园艺术"。'
                },
                consequence: {
                    en: '🗳️ Democratic Gamble. If it passes, you are a hero. If it fails (which is likely), you have to cut even deeper to show you "heard" the voters.',
                    th: '🗳️ เดิมพันประชาธิปไตย ถ้าผ่าน คุณคือฮีโร่ ถ้าไม่ผ่าน (ซึ่งมีโอกาสสูง) คุณต้องตัดงบเยอะกว่าเดิมเพื่อโชว์ว่าคุณ "ฟัง" เสียงประชาชน',
                    zh: '🗳️ 民主赌博。如果通过了，你就是英雄。如果失败了（这极有可能），你不得不进一步削减开支，以显示你"听取了"选民的意见。'
                },
                stats: { competence: 35, ethics: 40, leadership: 50, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🛑 Default & Renegotiate: Refuse to pay the high interest. Force the bondholders to the table. Threaten a legal audit of the original contract.',
                    th: '🛑 ผิดนัดชำระและเจรจาใหม่: ปฏิเสธจ่ายดอกเบี้ยสูง บังคับให้เจ้าหนี้มาคุยกัน ขู่ว่าจะให้มีการตรวจสอบกฎหมายของสัญญาเดิม',
                    zh: '🛑 违约并重新谈判：拒绝支付高利息。强迫债权人回到谈判桌。威胁要对原始合同进行法律审计。'
                },
                consequence: {
                    en: '👊 Street Fighter. Your district’s credit score plummets, but you save $2M a year. It’s a messy war that lasts for years.',
                    th: '👊 นักสู้ข้างถนน คะแนนเครดิตของเขตคุณดิ่งลงเหว แต่คุณประหยัดเงินได้ $2M ต่อปี เป็นสงครามที่ยุ่งเหยิงนับปี',
                    zh: '👊 街头斗士。你学区的信用评分暴跌，但你每年节省了200万美元。这是一场持续多年的混乱战争。'
                },
                stats: { competence: 40, ethics: 25, leadership: 45, innovation: 30 }
            }
        ]
    },
    {
        id: 'eadm_015',
        text: {
            en: '📱 Viral Student Prank: A group of students performs a dangerous TikTok challenge in the hallway, causing thousands in property damage and minor injuries to a janitor.',
            th: '📱 แกล้งแรงจนไวรัล: นักเรียนกลุ่มหนึ่งทำภารกิจท้าทายใน TikTok ที่อันตรายในโถงทางเดิน ทำให้ทรัพย์สินพังหลายพันดอลลาร์และภารโรงได้รับบาดเจ็บเล็กน้อย',
            zh: '📱 走红的学生恶作剧：一群学生在走廊里进行危险的TikTok挑战，造成了数千美元的财产损失，并导致一名校工轻伤。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👮 Legal Action: Press charges against the students and involve the police. Use them as an example to deter others.',
                    th: '👮 ดำเนินคดี: แจ้งความจับนักเรียนและดึงตำรวจเข้ามาเกี่ยวข้อง ใช้พวกเขาเป็นเยี่ยงอย่างเพื่อไม่ให้คนอื่นทำตาม',
                    zh: '👮 法律行动：起诉这些学生并让警察介入。以此为诫，震慑他人。'
                },
                consequence: {
                    en: '🛡️ Safety Reclaimed. Pranks stop immediately. But critics say you "criminalized childhood mistakes" and ruined their records.',
                    th: '🛡️ ได้ความปลอดภัยคืน การแกล้งกันหยุดลงทันที แต่นักวิจารณ์บอกว่าคุณ "ทำความผิดวัยเด็กให้เป็นคดีอาญา" และทำลายประวัติพวกเขา',
                    zh: '🛡️ 夺回安全感。恶作剧立即停止。但批评者说你将"童年错误犯罪化"，并毁了他们的记录。'
                },
                stats: { competence: 35, ethics: 20, leadership: 45, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🧹 Labor Restitution: Instead of police, mandate that the students work 100 hours of manual labor alongside the injured janitor.',
                    th: '🧹 ชดเชยด้วยแรงงาน: แทนที่จะแจ้งตำรวจ บังคับให้นักเรียนต้องไปทำงานใช้แรงงาน 100 ชั่วโมงร่วมกับภารโรงที่บาดเจ็บ',
                    zh: '🧹 劳动补偿：用强制学生与受伤校工并肩进行100小时体力劳动来代替报警。'
                },
                consequence: {
                    en: '✨ Life Lesson. Students gain immense respect for the staff and the school building. The social media backlash is positive.',
                    th: '✨ บทเรียนชีวิต นักเรียนเกิดความเคารพต่อทีมงานและอาคารโรงเรียนอย่างมาก กระแสตอบรับในโซเชียลเป็นไปในทางบวก',
                    zh: '✨ 人生课程。学生对员工和教学楼产生了极大的尊重。社交媒体上的反馈是积极的。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '💸 Financial Responsibility: Bill the parents for every cent of the damage. If they don’t pay, the students can\'t participate in graduation.',
                    th: '💸 ความรับผิดชอบทางการเงิน: เรียกเก็บเงินผู้ปกครองทุกบาททุกสตางค์ของค่าเสียหาย ถ้าไม่จ่าย นักเรียนจะไม่ได้เข้าร่วมพิธีจบการศึกษา',
                    zh: '💸 经济责任：要家长赔偿每一分钱的损失。如果不赔偿，这些学生就不能参加毕业典礼。'
                },
                consequence: {
                    en: '💰 Budget Neutral. The district recovers the money. But low-income families are devastated by the bill, causing a massive class controversy.',
                    th: '💰 งบไม่เสีย เขตได้เงินคืน แต่ครอบครัวรายได้น้อยพังเพราะบิลนี้ ทำให้เกิดความขัดแย้งเรื่องชนชั้นอย่างหนัก',
                    zh: '💰 预算中性。学区追回了资金。但低收入家庭被账单压垮，引发了巨大的阶层争议。'
                },
                stats: { competence: 45, ethics: 15, leadership: 30, innovation: 5 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Digital Citizenship Reform: Use the incident to launch a new, district-wide "Influencer Ethics" course for all students.',
                    th: '🤝 ปฏิรูปพลเมืองดิจิทัล: ใช้เหตุการณ์นี้เปิดหลักสูตรใหม่ "จริยธรรมอินฟลูเอนเซอร์" สำหรับนักเรียนทุกคนทั้งเขต',
                    zh: '🤝 数字公民改革：利用这一事件，为所有学生开设一门全新的、全学区范围内的"网红伦理"课程。'
                },
                consequence: {
                    en: '💡 Innovative Pivot. You turned a disaster into an education opportunity. Other districts buy your curriculum.',
                    th: '💡 พลิกสู่นวัตกรรม คุณเปลี่ยนหายนะให้เป็นโอกาสทางการศึกษา เขตอื่นมาขอซื้อหลักสูตรคุณไปใช้',
                    zh: '💡 创新转型。你将灾难转化为了教育机会。其他学区向你购买这套课程。'
                },
                stats: { competence: 40, ethics: 35, leadership: 40, innovation: 60 }
            }
        ]
    },
    {
        id: 'eadm_016',
        text: {
            en: '🏫 Overcrowding Crisis: Enrollment surged 20% this year. Classrooms now have 45 students crammed in spaces designed for 25. Teachers are threatening a walkout, citing unsafe conditions and impossible workload.',
            th: '🏫 วิกฤตห้องเรียนแออัด: จำนวนนักเรียนพุ่งขึ้น 20% ในปีนี้ ห้องเรียนมี 45 คนแน่นห้องที่ออกแบบไว้สำหรับ 25 คน ครูกำลังขู่ว่าจะหยุดงาน อ้างว่าสภาพไม่ปลอดภัยและภาระงานเกินตัว',
            zh: '🏫 拥挤危机：今年入学人数激增20%。设计容纳25人的教室现在挤进了45名学生。教师威胁要罢工，称条件不安全、工作量不堪重负。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏗️ Portable Classrooms: "Order 20 trailer units immediately. They\'ll be ready in 6 weeks. Not pretty, but functional."',
                    th: '🏗️ ห้องเรียนเคลื่อนที่: "สั่งตู้คอนเทนเนอร์ 20 ยูนิตทันที จะพร้อมใน 6 สัปดาห์ ไม่สวย แต่ใช้งานได้"',
                    zh: '🏗️ 移动教室："立即订购20个拖车单元。6周后就绪。不美观，但实用。"'
                },
                consequence: {
                    en: '📦 Quick Fix, Ugly Campus. The trailers solve the space problem, but the campus looks like a construction site. Property values nearby drop, and parents complain about the "temporary" feel after 3 years.',
                    th: '📦 แก้เร็วแต่น่าเกลียด ตู้คอนเทนเนอร์แก้ปัญหาพื้นที่ได้ แต่โรงเรียนดูเหมือนไซต์ก่อสร้าง ราคาบ้านบริเวณใกล้เคียงตกลง และผู้ปกครองบ่นเรื่องความรู้สึก "ชั่วคราว" หลังจาก 3 ปี',
                    zh: '📦 快速修复，校园丑陋。拖车解决了空间问题，但校园看起来像建筑工地。附近房价下跌，3年后家长还在抱怨"临时"的感觉。'
                },
                stats: { competence: 40, ethics: 30, leadership: 35, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🕐 Split-Shift Schedule: "Run two sessions: 7 AM-12 PM and 1 PM-6 PM. Double capacity without new buildings."',
                    th: '🕐 ตารางแบ่งกะ: "เปิดสองช่วง: 7.00-12.00 น. และ 13.00-18.00 น. เพิ่มความจุเป็นสองเท่าโดยไม่ต้องสร้างอาคารใหม่"',
                    zh: '🕐 分班制时间表："两个时段：上午7-12点和下午1-6点。不建新楼就能翻倍容量。"'
                },
                consequence: {
                    en: '⚙️ Efficient But Soulless. You maximized facility use, but killed school culture. No clubs, sports, or after-school programs can run. Working parents struggle with the weird pickup times.',
                    th: '⚙️ มีประสิทธิภาพแต่ไร้วิญญาณ คุณใช้สถานที่อย่างเต็มที่ แต่ทำลายวัฒนธรรมโรงเรียน ไม่มีชมรม กีฬา หรือกิจกรรมหลังเลิกเรียน ผู้ปกครองที่ทำงานลำบากกับเวลารับลูกที่แปลกๆ',
                    zh: '⚙️ 高效但没有灵魂。你最大化了设施使用，但扼杀了学校文化。无法开展俱乐部、体育或课后活动。双职工家长难以应对奇怪的接送时间。'
                },
                stats: { competence: 45, ethics: 25, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Hybrid Model: "Half the students come Monday/Wednesday, half Tuesday/Thursday. Friday is remote for all."',
                    th: '💻 โมเดลผสม: "นักเรียนครึ่งนึงมาจันทร์/พุธ อีกครึ่งมาอังคาร/พฤหัส วันศุกร์เรียนออนไลน์ทุกคน"',
                    zh: '💻 混合模式："一半学生周一/周三来，一半周二/周四来。周五全部远程。"'
                },
                consequence: {
                    en: '📉 Test Scores Plummet. The hybrid system creates learning gaps. Students fall behind, especially those without home internet. Teachers burn out managing two simultaneous curriculums.',
                    th: '📉 คะแนนสอบดิ่งลงอย่างหนัก ระบบผสมสร้างช่องว่างการเรียนรู้ นักเรียนตามไม่ทัน โดยเฉพาะคนที่ไม่มีอินเทอร์เน็ตที่บ้าน ครูหมดไฟจากการจัดการหลักสูตรสองแบบพร้อมกัน',
                    zh: '📉 考试成绩暴跌。混合系统造成学习差距。学生掉队，尤其是没有家庭网络的学生。教师因管理两套并行课程而精疲力竭。'
                },
                stats: { competence: 30, ethics: 30, leadership: 25, innovation: 35 }
            },
            {
                id: 'D',
                text: {
                    en: '💸 Emergency Bond Measure: "Go to voters now for $50M to build a new wing. Pain first, but solves it permanently."',
                    th: '💸 มาตรการพันธบัตรฉุกเฉิน: "ไปขอผู้ลงคะแนนตอนนี้สำหรับ 50 ล้านเพื่อสร้างอาคารใหม่ เจ็บก่อน แต่แก้ถาวร"',
                    zh: '💸 紧急债券措施："现在就向选民申请5000万美元建新楼。先受苦，但永久解决问题。"'
                },
                consequence: {
                    en: '🏗️ Long-Term Vision. The bond passes narrowly. Construction takes 2 years of noise and detours, but you ultimately built a legacy. Future generations will benefit from your courage.',
                    th: '🏗️ วิสัยทัศน์ระยะยาว พันธบัตรผ่านอย่างหวุดหวิด การก่อสร้างใช้เวลา 2 ปีของเสียงดังและเบนทาง แต่คุณสร้างมรดกในที่สุด คนรุ่นหลังจะได้ประโยชน์จากความกล้าของคุณ',
                    zh: '🏗️ 长远眼光。债券勉强通过。建设需要2年的噪音和绕道，但你最终建立了遗产。后代将受益于你的勇气。'
                },
                stats: { competence: 50, ethics: 45, leadership: 60, innovation: 30 }
            }
        ]
    },
    {
        id: 'eadm_017',
        text: {
            en: '🏈 The Concussion Dilemma: Your star quarterback took a hard hit in the semi-finals. The team doctor says he has a concussion and must sit out. The coach insists he\'s fine and demands he play in tomorrow\'s championship game.',
            th: '🏈 ภาวะลำบากเรื่องการกระทบกระเทือนสมอง: ควอเตอร์แบ็คดาวของคุณถูกทุบอย่างหนักในรอบรองชนะเลิศ แพทย์ทีมบอกว่าเขามีอาการกระทบกระเทือนสมองและต้องพักการเล่น แต่โค้ชยืนยันว่าเขาสบายดีและเรียกร้องให้เล่นในเกมชิงแชมป์วันพรุ่งนี้',
            zh: '🏈 脑震荡困境：你的明星四分卫在半决赛中遭到重击。队医说他有脑震荡，必须休息。但教练坚称他没事，要求他在明天的冠军赛中上场。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Medical First: "The doctor\'s word is final. The student sits out, even if we lose. Health over trophies."',
                    th: '🛡️ การแพทย์มาก่อน: "คำของหมอคือคำตัดสิน นักเรียนต้องนั่งสำรอง แม้เราจะแพ้ก็ตาม สุขภาพสำคัญกว่าถ้วยรางวัล"',
                    zh: '🛡️ 医疗优先："医生的话就是最终决定。学生休息，即使我们输掉比赛。健康胜过奖杯。"'
                },
                consequence: {
                    en: '🏆 Integrity Win, Stadium Loss. Your team loses 14-10. The town is devastated. But the player makes a full recovery and later thanks you publicly for saving his future.',
                    th: '🏆 ชนะเรื่องความซื่อสัตย์ แพ้เรื่องสนาม ทีมของคุณแพ้ 14-10 เมืองเสียใจมาก แต่นักกีฬาหายดีอย่างเต็มที่และภายหลังขอบคุณคุณต่อหน้าสาธารณะที่ช่วยชีวิตอนาคตของเขา',
                    zh: '🏆 诚信胜利，由场馆失利。你的球队以14-10输了。全镇都很沮丧。但球员完全康复了，后来公开感谢你挽救了他的未来。'
                },
                stats: { competence: 40, ethics: 55, leadership: 45, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🏥 Let Him Play: "The kid says he\'s fine. The coach says he\'s fine. It\'s the championship. Suit up."',
                    th: '🏥 ให้เขาเล่น: "เด็กบอกไหว โค้ชบอกไหว นี่มันรอบชิง แต่งตัวลงสนามเลย"',
                    zh: '🏥 让他上场："孩子说他没事。教练说他没事。这是冠军赛。穿上装备。"'
                },
                consequence: {
                    en: '🚑 Tragedy Strikes. He takes another hit and suffers permanent brain damage. The lawsuit costs the district $10M. You are fired in disgrace.',
                    th: '🚑 โศกนาฏกรรม เขาโดนกระแทกอีกครั้งและสมองเสียหายถาวร การฟ้องร้องทำเขตเสียเงิน 10 ล้านดอลลาร์ คุณถูกไล่ออกอย่างอัปยศ',
                    zh: '🚑 悲剧发生。他再次受到重击，遭受永久性脑损伤。诉讼使学区损失1000万美元。你被不光彩地解雇了。'
                },
                stats: { competence: 10, ethics: -50, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🩺 Second Opinion: "Send him to an independent neurologist immediately. We do whatever that specialist says, no matter what."',
                    th: '🩺 ขอความเห็นที่สอง: "ส่งเขาไปหาหมอระบบประสาทอิสระทันที หมอว่าไงว่าตามนั้น ไม่ว่ายังไงก็ตาม"',
                    zh: '🩺 第二意见："立即送他去看独立的神经科医生。无论那位专家怎么说，我们都照做。"'
                },
                consequence: {
                    en: '✅ Professional Call. The specialist confirms the concussion. He sits. Parents are angry, but you have ironclad medical documentation to protect the district.',
                    th: '✅ การตัดสินใจมืออาชีพ หมอยืนยันว่าสมองกระทบกระเทือน เขาต้องพัก พ่อแม่โกรธ แต่คุณมีเอกสารแพทย์ที่แน่นหนาป้องกันเขตไว้',
                    zh: '✅ 专业呼吁。专家证实了脑震荡。他休息。家长们很生气，但你有铁一般的医疗文件来保护学区。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📝 Waiver Waiver: "Parents must sign a liability waiver acknowledging the risks. If they sign, he plays."',
                    th: '📝 ใบสละสิทธิ์: "ผู้ปกครองต้องเซ็นใบสละสิทธิ์รับรู้ความเสี่ยง ถ้าเซ็น ก็ให้เล่น"',
                    zh: '📝 弃权书："家长必须签署责任弃权书，承认风险。如果他们签了，他就上场。"'
                },
                consequence: {
                    en: '⚖️ Legal Shield, Moral Fail. He plays and gets hurt. The waiver holds up in court, but the community sees you as callous and irresponsible.',
                    th: '⚖️ โล่กฎหมาย ศีลธรรมสอบตก เขาเล่นและเจ็บ ใบสละสิทธิ์ช่วยในศาลได้ แต่ชุมชนมองคุณว่าใจดำและไร้ความรับผิดชอบ',
                    zh: '⚖️ 法律护盾，道得败笔。他上场并受伤了。弃权书在法庭上有效，但社区认为你冷酷无情且不负责任。'
                },
                stats: { competence: 35, ethics: 20, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'eadm_018',
        text: {
            en: '🚫 The Book Ban Battle: A group of parents demands the removal of "To Kill a Mockingbird" from the curriculum, citing racial slurs in the text. English teachers argue it\'s essential for teaching historical context and racism.',
            th: '🚫 สงครามห้ามหนังสือ: กลุ่มผู้ปกครองเรียกร้องให้ถอด "To Kill a Mockingbird" ออกจากหลักสูตร อ้างถึงคำด่าเหยียดเชื้อชาติในข้อความ ครูภาษาอังกฤษโต้แย้งว่ามันจำเป็นสำหรับการสอนบริบททางประวัติศาสตร์และการเหยียดผิว',
            zh: '🚫 禁书之战：一群家长要求将《杀死一只知更鸟》从课程中删除，理由是文本中有种族歧视用语。英语老师辩称这对教授历史背景和种族主义至关重要。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Ban the Book: "We don\'t need to expose students to slurs, even in context. Replace it with a modern alternative."',
                    th: '🔥 ถอดหนังสือออก: "เราไม่จำเป็นต้องให้เด็กเห็นคำด่า แม้ในบริบท แทนที่ด้วยทางเลือกสมัยใหม่"',
                    zh: '🔥 禁书："我们不需要让学生接触歧视性用语，即使是在语境中。用现代替代品替换它。"'
                },
                consequence: {
                    en: '📉 Slippery Slope. Once you ban one book, the demands multiply. Soon, parents are challenging "The Diary of Anne Frank," "1984," and more. You\'ve opened Pandora\'s box of censorship.',
                    th: '📉 ความลื่นไถลของการเซ็นเซอร์ เมื่อคุณห้ามหนังสือเล่มหนึ่ง ข้อเรียกร้องก็เพิ่มขึ้น ไม่นานผู้ปกครองก็ท้าทาย "บันทึกของแอนน์ แฟรงก์" "1984" และอื่นๆ คุณเปิดกล่องแพนดอร่าของการเซ็นเซอร์',
                    zh: '📉 滑坡效应。一旦你禁了一本书，要求就会成倍增加。很快，家长们就会质疑《安妮日记》、《1984》等。你打开了审查的潘多拉盒子。'
                },
                stats: { competence: 25, ethics: 20, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '📖 Keep It, Defend It: "This is a Pulitzer Prize-winning work. Academic freedom means teaching uncomfortable truths. The book stays."',
                    th: '📖 เก็บไว้และปกป้อง: "นี่คืองานที่ได้รับรางวัลพูลิตเซอร์ เสรีภาพทางวิชาการหมายถึงการสอนความจริงที่ไม่สบายใจ หนังสือนี้ต้องอยู่"',
                    zh: '📖 保留并捍卫："这是普利策奖获奖作品。学术自由意味着教授令人不安的真相。书留下。"'
                },
                consequence: {
                    en: '⚖️ Legal Battle. Parents sue the district. The ACLU defends you pro bono. You win the case but spend a year in courtrooms instead of classrooms.',
                    th: '⚖️ การต่อสู้ทางกฎหมาย ผู้ปกครองฟ้องเขตการศึกษา ACLU ว่าความให้คุณฟรี คุณชนะคดี แต่ใช้เวลาหนึ่งปีในห้องพิจารณาแทนที่จะอยู่ในห้องเรียน',
                    zh: '⚖️ 法律战。家长起诉学区。ACLU免费为你辩护。你赢了官司，但花了一年时间在法庭而非课堂上。'
                },
                stats: { competence: 40, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🔞 Age-Restricted Access: "Make it optional reading for 11th/12th grade only, with parental consent forms required."',
                    th: '🔞 จำกัดอายุการเข้าถึง: "ทำให้เป็นการอ่านทางเลือกสำหรับชั้นปีที่ 11/12 เท่านั้น โดยต้องมีแบบฟอร์มยินยอมจากผู้ปกครอง"',
                    zh: '🔞 限制年龄访问："仅将其作为11/12年级的选读书目，需要家长同意书。"'
                },
                consequence: {
                    en: '⚖️ Compromise. Both sides are mildly unhappy, which means you found the middle. Teachers can still teach it to mature students; concerned parents can opt out.',
                    th: '⚖️ ประนีประนอม ทั้งสองฝ่ายไม่พอใจเล็กน้อย ซึ่งหมายความว่าคุณพบจุดกึ่งกลาง ครูยังสามารถสอนให้กับนักเรียนที่โตพอได้ ผู้ปกครองที่กังวลสามารถเลือกไม่เรียนได้',
                    zh: '⚖️ 妥协。双方都略感不满，这意味着你找到了中间地带。教师仍可向成熟学生教授；担忧的家长可以选择退出。'
                },
                stats: { competence: 45, ethics: 40, leadership: 45, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ Community Forum: "Let\'s hold a public forum where students, parents, and scholars can discuss the book\'s value together."',
                    th: '🗣️ เวทีชุมชน: "จัดเวทีสาธารณะให้นักเรียน ผู้ปกครอง และนักวิชาการสามารถหารือเกี่ยวกับคุณค่าของหนังสือร่วมกัน"',
                    zh: '🗣️ 社区论坛："让我们举办一个公共论坛，学生、家长和学者可以一起讨论这本书的价值。"'
                },
                consequence: {
                    en: '🎤 Democracy in Chaos. The forum turns into a shouting match. But surprisingly, hearing student voices sways many parents. The book stays, with added lesson plans on critical analysis.',
                    th: '🎤 ประชาธิปไตยในความวุ่นวาย เวทีกลายเป็นการตะโกนใส่กัน แต่น่าแปลกที่การได้ยินเสียงของนักเรียนทำให้ผู้ปกครองหลายคนเปลี่ยนใจ หนังสือยังคงอยู่พร้อมแผนการสอนเพิ่มเติมเกี่ยวกับการวิเคราะห์เชิงวิพากษ์',
                    zh: '🎤 混乱中的民主。论坛变成了一场叫嚣大战。但令人惊讶的是，听到学生的声音动摇了许多家长。书保留了下来，并增加了关于批判性分析的课程计划。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 45 }
            }
        ]
    },
    {
        id: 'eadm_019',
        text: {
            en: '❄️ The Snow Day Gamble: Weather reports show a 50/50 chance of a severe blizzard hitting during dismissal time at 3 PM. The forecast has been wrong before. Do you close school preemptively?',
            th: '❄️ การเดิมพันวันหิมะ: รายงานอากาศแสดง 50/50 ที่จะมีพายุหิมะรุนแรงถล่มในเวลาเลิกเรียน 15.00 น. การพยากรณ์เคยผิดมาก่อน คุณจะปิดโรงเรียนล่วงหน้าไหม?',
            zh: '❄️ 雪日赌博：天气预报显示下午3点放学时有50/50的可能遭遇严重暴风雪。预报以前出过错。你会提前关校吗？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏫 Stay Open: "We\'ve weathered storms before. I won\'t disrupt working parents\' schedules on a maybe. School stays open."',
                    th: '🏫 เปิดต่อ: "เราเคยผ่านพายุมาแล้ว ฉันจะไม่รบกวนตารางของผู้ปกครองที่ทำงานเพราะเรื่อง \'อาจจะ\' โรงเรียนเปิดต่อ"',
                    zh: '🏫 保持开放："我们以前经历过风暴。我不会因为一个\'也许\'就打乱双职工家长的日程。学校保持开放。"'
                },
                consequence: {
                    en: '🚌 Disaster. The storm hits early at 1 PM. Buses slide off roads. Three students are injured. You become the face of poor judgment on the evening news.',
                    th: '🚌 หายนะ พายุถล่มเร็วตอนบ่ายโมง รถบัสลื่นไถลออกจากถนน เด็กบาดเจ็บ 3 คน คุณกลายเป็นตัวแทนของการตัดสินใจที่แย่บนข่าวช่วงเย็น',
                    zh: '🚌 灾难。暴风雪下午1点提前来袭。校车滑出路面。三名学生受伤。你成为晚间新闻上判断失误的代表。'
                },
                stats: { competence: 15, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏠 Close School: "Safety first. Cancel school now. Better safe than sorry."',
                    th: '🏠 ปิดโรงเรียน: "ความปลอดภัยก่อน ยกเลิกเรียนตอนนี้ ปลอดภัยดีกว่าเสียใจ"',
                    zh: '🏠 关校："安全第一。现在取消学校。安全胜于后悔。"'
                },
                consequence: {
                    en: '☀️ Sunny Day, Angry Calls. The storm never materializes. Parents who took unpaid leave to stay home are furious. The local paper mocks your "snowflake" decision.',
                    th: '☀️ วันแดดจัด สายโทรโกรธ พายุไม่เกิดขึ้นเลย ผู้ปกครองที่ลาไม่ได้เงินเพื่ออยู่บ้านโกรธมาก หนังสือพิมพ์ท้องถิ่นเยาะเย้ยการตัดสินใจ "ขี้กลัว" ของคุณ',
                    zh: '☀️ 晴天，愤怒电话。暴风雪从未发生。那些请无薪假待在家的家长很愤怒。当地报纸嘲笑你的"雪花"决定。'
                },
                stats: { competence: 30, ethics: 40, leadership: 25, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🕐 Early Dismissal: "Dismiss at noon. Beats the storm window and gives parents time to adjust."',
                    th: '🕐 เลิกเร็ว: "เลิกเที่ยง หลบหน้าต่างพายุและให้เวลาผู้ปกครองปรับตัว"',
                    zh: '🕐 提前放学："中午放学。避开暴风雪窗口，给家长时间调整。"'
                },
                consequence: {
                    en: '🚗 Traffic Nightmare. Early release creates rush-hour chaos at noon. But students get home safely before the snow starts. Parents appreciate the communication even if inconvenienced.',
                    th: '🚗 ฝันร้ายจราจร การเลิกเร็วสร้างความวุ่นวายในชั่วโมงเร่งรีบตอนเที่ยง แต่นักเรียนกลับถึงบ้านอย่างปลอดภัยก่อนหิมะเริ่มตก ผู้ปกครองขอบคุณการสื่อสารแม้จะไม่สะดวก',
                    zh: '🚗 交通噩梦。提前放学造成中午高峰时段的混乱。但学生在雪开始下之前安全回家。尽管不便，家长们感激这种沟通。'
                },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '💻 Remote Learning Day: "Switch to virtual. Students log in from home. No travel, no risk."',
                    th: '💻 วันเรียนออนไลน์: "เปลี่ยนเป็นออนไลน์ นักเรียนล็อกอินจากบ้าน ไม่ต้องเดินทาง ไม่มีความเสี่ยง"',
                    zh: '💻 远程学习日："切换到虚拟学习。学生在家登录。不用出行，没有风险。"'
                },
                consequence: {
                    en: '✅ Modern Solution, Tech Issues. Half the district loses internet when the storm actually hits. You made the right call, but the execution was messy.',
                    th: '✅ ทางออกสมัยใหม่ ปัญหาเทคโนโลยี ครึ่งเขตเสียอินเทอร์เน็ตเมื่อพายุถล่มจริง คุณตัดสินใจถูก แต่การดำเนินการยุ่งเหยิง',
                    zh: '✅ 现代解决方案，技术问题。当暴风雪真的来袭时，半个学区失去了互联网。你做了正确的决定，但执行混乱。'
                },
                stats: { competence: 45, ethics: 45, leadership: 40, innovation: 60 }
            }
        ]
    },
    {
        id: 'eadm_020',
        text: {
            en: '🍽️ Lunch Debt Scandal: A photo goes viral showing a cafeteria worker throwing away a hot meal from a 3rd-grader who owes $15 in lunch debt, replacing it with a cold cheese sandwich. National media is calling.',
            th: '🍽️ อื้อฉาวหนี้อาหารกลางวัน: รูปภาพไวรัลแสดงพนักงานโรงอาหารทิ้งอาหารร้อนของเด็กชั้นประถมศึกษาปีที่ 3 ที่ค้างค่าอาหารกลางวัน 15 ดอลลาร์ แทนที่ด้วยแซนด์วิชชีสเย็น สื่อระดับชาติกำลังโทรมา',
            zh: '🍽️ 午餐债务丑闻：一张照片疯传，显示食堂工作人员将一名欠15美元午餐费的三年级学生的热餐扔掉，换成冷芝士三明治。全国媒体正在打电话。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🥪 Defend the Policy: "Federal guidelines require we provide an alternative meal. The policy was followed correctly. No comment beyond that."',
                    th: '🥪 ปกป้องนโยบาย: "แนวทางของรัฐบาลกลางกำหนดให้เราจัดหาอาหารทางเลือก ทำตามนโยบายอย่างถูกต้อง ไม่มีความเห็นเพิ่มเติม"',
                    zh: '🥪 捍卫政策："联邦指导方针要求我们提供替代餐食。政策执行正确。无可奉告。"'
                },
                consequence: {
                    en: '📉 PR Disaster. You look heartless on CNN. Donations to the school dry up. Teachers are ashamed to work for you. Technically correct, morally bankrupt.',
                    th: '📉 หายนะ PR คุณดูไร้หัวใจบน CNN การบริจาคให้โรงเรียนหยุดชะงัก ครูละอายที่ทำงานให้คุณ ถูกต้องตามเทคนิค แต่ล้มละลายทางศีลธรรม',
                    zh: '📉 公关灾难。你在CNN上看起来无情。对学校的捐款枯竭。教师羞于为你工作。技术上正确，道德上破产。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '💸 Clear All Debt: "I\'m using emergency discretionary funds to wipe out $45,000 in lunch debt for all students. No child goes hungry."',
                    th: '💸 ล้างหนี้ทั้งหมด: "ฉันใช้งบดุลยพินิจฉุกเฉินเพื่อล้างหนี้ค่าอาหารกลางวัน 45,000 ดอลลาร์สำหรับนักเรียนทุกคน ไม่มีเด็กคนไหนหิวโหย"',
                    zh: '💸 清除所有债务："我将使用紧急裁量资金清除所有学生45,000美元的午餐债务。没有孩子挨饿。"'
                },
                consequence: {
                    en: '❤️ Hero Status. You trend on Twitter. Ellen DeGeneres calls you. But the board is furious—that was the field trip fund. Budget crisis looms.',
                    th: '❤️ สถานะฮีโร่ คุณติดเทรนด์บนทวิตเตอร์ เอลเลน ดีเจเนอเรสโทรหาคุณ แต่คณะกรรมการโกรธจัด—นั่นคืองบทัศนศึกษา วิกฤตงบประมาณใกล้เข้ามาแล้ว',
                    zh: '❤️ 英雄地位。你在推特上成为热门话题。艾伦·德杰尼勒斯打电话给你。但董事会很愤怒——那是实地考察基金。预算危机迫在眉睫。'
                },
                stats: { competence: 40, ethics: 70, leadership: 60, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Community Donor Fund: "Launch a \'No Kid Hungry\' campaign asking local businesses and families to donate. Keep it sustainable and community-driven."',
                    th: '🤝 กองทุนบริจาคชุมชน: "เริ่มแคมเปญ \'ไม่มีเด็กหิว\' ขอให้ธุรกิจท้องถิ่นและครอบครัวบริจาค ทำให้มันยั่งยืนและขับเคลื่อนโดยชุมชน"',
                    zh: '🤝 社区捐赠基金："发起\'无饥饿儿童\'活动，请求当地企业和家庭捐赠。保持可持续性和社区驱动。"'
                },
                consequence: {
                    en: '🎁 Goodwill Wave. Local restaurants and grocery stores rally. Within a week, you raise $60,000—more than the debt! But will it last year-to-year?',
                    th: '🎁 คลื่นความปรารถนาดี ร้านอาหารและร้านขายของชำในท้องถิ่นรวมตัวกัน ภายในหนึ่งสัปดาห์ คุณระดมทุนได้ 60,000 ดอลลาร์—มากกว่าหนี้! แต่มันจะอยู่ได้ทุกปีหรือไม่?',
                    zh: '🎁 善意浪潮。当地餐馆和杂货店响应号召。一周内，你筹集了60,000美元——超过债务！但这能年复一年持续吗？'
                },
                stats: { competence: 50, ethics: 60, leadership: 60, innovation: 55 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Blame the Worker: "This was one employee acting independently, against policy. She\'s been disciplined. We regret the incident."',
                    th: '📢 โทษพนักงาน: "นี่คือพนักงานคนเดียวที่กระทำเองโดยไม่สอดคล้องกับนโยบาย เธอถูกลงโทษแล้ว เราเสียใจกับเหตุการณ์นี้"',
                    zh: '📢 归咎于员工："这是一名员工违反政策独立行事。她已被处分。我们对此事件表示遗憾。"'
                },
                consequence: {
                    en: '🐍 Scapegoat Strategy. The worker\'s union condemns you. Staff morale craters. You saved face publicly but destroyed internal trust.',
                    th: '🐍 กลยุทธ์แพะรับบาป สหภาพแรงงานประณามคุณ ขวัญกำลังใจพนักงานตกต่ำ คุณรักษาหน้าต่อสาธารณะแต่ทำลายความไว้วางใจภายใน',
                    zh: '🐍 替罪羊策略。工会谴责你。员工士气崩溃。你在公众面前保住了面子，但摧毁了内部信任。'
                },
                stats: { competence: 15, ethics: -10, leadership: -20, innovation: 0 }
            }
        ]
    },
    {
        id: 'eadm_021',
        text: {
            en: '🐔 Operation Chicken Run: The senior class released three chickens in the hallways labeled "1", "2", and "4". Staff has spent all morning looking for chicken #3. It doesn\'t exist.',
            th: '🐔 ปฏิบัติการไก่วิ่ง: นักเรียนชั้นปีสุดท้ายปล่อยไก่ 3 ตัวในโถงทางเดิน แปะป้าย "1", "2", และ "4" ครูอาจารย์หาไก่เบอร์ "3" กันทั้งเช้า แต่มันไม่มีอยู่จริง',
            zh: '🐔 跑鸡行动：毕业班学生在走廊放了三只鸡，分别标有"1"、"2"和"4"。工作人员找了一上午并不存在的"3"号鸡。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Call Off the Search: "It\'s a classic prank. There is no chicken #3. Everyone back to class."',
                    th: '🛑 ยกเลิกการค้นหา: "มุกคลาสสิก ไม่มีไก่เบอร์ 3 หรอก ทุกคนกลับเข้าห้องเรียน"',
                    zh: '🛑 停止搜索："这是个经典恶作剧。没有3号鸡。大家回教室。" '
                },
                consequence: {
                    en: '😎 Cool Head. You save hours of wasted time. The students appreciate that you got the joke but didn\'t let it slide too far.',
                    th: '😎 หัวเย็น คุณประหยัดเวลาไปได้หลายชั่วโมง นักเรียนชื่นชมที่คุณทันมุกแต่ก็ไม่ปล่อยให้เลยเถิด',
                    zh: '😎 冷静。你节省了数小时的浪费时间。学生们很感激你懂这个梗，但没有放任自流。'
                },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔒 Biohazard Lockdown: "We cannot risk a biological hazard. Lock down the school until the area is swept by animal control."',
                    th: '🔒 ล็อกดาวน์ชีวภาพ: "เราเสี่ยงเรื่องเชื้อโรคไม่ได้ ปิดโรงเรียนจนกว่ากรมปศุสัตว์จะมาตรวจ"',
                    zh: '🔒 生物危害封锁："我们需要冒生化危害的风险。封锁学校，直到动物控制中心清扫该区域。" '
                },
                consequence: {
                    en: '🙄 Overreaction. You look like a panic-monger. The local news mocks the "Phantom Chicken Lockdown."',
                    th: '🙄 เล่นใหญ่ไป คุณดูเหมือนคนขี้ตื่น ข่าวท้องถิ่นล้อเรื่อง "ล็อกดาวน์ไก่ผี"',
                    zh: '🙄 反应过度。你看起来像个制造恐慌的人。当地新闻嘲笑"幽灵鸡封锁"。'
                },
                stats: { competence: 20, ethics: 40, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📸 Laugh it Off: "Take a selfie with chicken #1. Post it saying \'Culprit apprehended.\' Let the kids have their fun."',
                    th: '📸 ขำๆ ไป: "ถ่ายเซลฟี่กับไก่เบอร์ 1 โพสต์บอกว่า \'จับคนร้ายได้แล้ว\' ให้เด็กๆ ได้สนุกบ้าง"',
                    zh: '📸 一笑置之："与1号鸡自拍。发帖说\'罪犯已逮捕\'。让孩子们玩得开心。" '
                },
                consequence: {
                    en: '✨ Morale Boost. You are the "cool principal." Senior pranks stay harmless because they respect you.',
                    th: '✨ ขวัญกำลังใจพุ่ง คุณคือ "ผอ.สุดคูล" การแกล้งของรุ่นพี่จะไม่อันตรายเพราะเขาเคารพคุณ',
                    zh: '✨ 士气大增。你是"酷校长"。毕业恶作剧保持无害，因为他们尊重你。'
                },
                stats: { competence: 40, ethics: 30, leadership: 60, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '⚖️ Punish the Class: "Cancel the senior prom unless the \'missing\' chicken is produced or someone confesses."',
                    th: '⚖️ ลงโทษทั้งชั้น: "ยกเลิกงานพรอมจนกว่าจะหาไก่ที่ \'หายไป\' เจอ หรือมีคนสารภาพ"',
                    zh: '⚖️ 惩罚全班："取消毕业舞会，直到交出\'丢失\'的鸡或有人招供。" '
                },
                consequence: {
                    en: '🔥 Rebellion. You punished everyone for a ghost. The seniors vandalize your car in retaliation.',
                    th: '🔥 กบฏ คุณลงโทษทุกคนเพราะผีไก่ รุ่นพี่มากรีดรถคุณเป็นการแก้แค้น',
                    zh: '🔥 叛乱。你因为一只幽灵鸡惩罚了所有人。毕业生为了报复破坏了你的车。'
                },
                stats: { competence: 10, ethics: 20, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'eadm_022',
        text: {
            en: '🚽 "Devious Licks" Trend: A viral TikTok challenge has students stealing soap dispensers and destroying bathroom mirrors. The damage is costing thousands per week.',
            th: '🚽 เทรนด์ "Devious Licks": ชาเลนจ์ TikTok ไวรัลที่นักเรียนแข่งกันขโมยที่กดสบู่และทุบกระจกห้องน้ำ ความเสียหายหลายพันดอลลาร์ต่อสัปดาห์',
            zh: '🚽 "Devious Licks"风潮：一个病毒式TikTok挑战让学生偷窃皂液器并破坏厕所镜子。每周损失数千美元。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔒 Lock the Bathrooms: "Lock all restrooms during class time. Students must get a key from the main office."',
                    th: '🔒 ล็อกห้องน้ำ: "ล็อกห้องน้ำทุกห้องระหว่างคาบเรียน นักเรียนต้องมาเอากุญแจที่ธุรการ"',
                    zh: '🔒 锁厕所："上课时间锁上所有洗手间。学生必须从办公室拿钥匙。" '
                },
                consequence: {
                    en: '📉 Dignity Loss. It stops the damage, but treating students like inmates causes outraged parent emails and hygiene issues.',
                    th: '📉 เสียศักดิ์ศรี หยุดความเสียหายได้ แต่ปฏิบัติกับนักเรียนเหมือนนักโทษทำให้ผู้ปกครองโกรธและมีปัญหาอนามัย',
                    zh: '📉 尊严丧失。这阻止了破坏，但像对待囚犯一样对待学生引发了家长愤怒的邮件和卫生问题。'
                },
                stats: { competence: 40, ethics: 20, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🕵️ Student Patrols: "Recruit student \'hall monitors\' to report on their peers in exchange for extra credit."',
                    th: '🕵️ สายตรวจนักเรียน: "รับสมัครนักเรียนเป็น \'สารวัตรนักเรียน\' ให้รายงานเพื่อนแลกกับคะแนนพิเศษ"',
                    zh: '🕵️ 学生巡逻："招募学生\'走廊监察员\'举报同伴以换取额外学分。" '
                },
                consequence: {
                    en: '🐍 Snitch Culture. Violence erupts between monitors and vandals. You turned the school into a police state.',
                    th: '🐍 วัฒนธรรมขี้ฟ้อง เกิดความรุนแรงระหว่างสารวัตรกับคนพังของ คุณทำโรงเรียนเป็นรัฐตำรวจ',
                    zh: '🐍 告密文化。监察员和破坏者之间爆发暴力冲突。你把学校变成了警察国家。'
                },
                stats: { competence: 20, ethics: 10, leadership: -10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🎨 Artistic Intervention: "Let art students paint murals in the bathrooms. Kids are less likely to destroy art they created."',
                    th: '🎨 ศิลปะบำบัด: "ให้เด็กศิลป์วาดภาพฝาผนังในห้องน้ำ เด็กๆ ไม่ค่อยกล้าทำลายงานศิลปะที่ตัวเองสร้าง"',
                    zh: '🎨 艺术干预："让艺术生在厕所画壁画。孩子们不太可能破坏自己创作的艺术。" '
                },
                consequence: {
                    en: '✨ Psychology Win. The "cool" bathrooms become a point of pride. Vandalism drops by 90%.',
                    th: '✨ ชนะทางจิตวิทยา ห้องน้ำ "สุดเท่" กลายเป็นความภูมิใจ การพังของลดลง 90%',
                    zh: '✨ 心理学胜利。"酷"厕所成为了骄傲点。破坏行为减少了90%。'
                },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '🚪 Remove Doors: "Take the doors off the main entrances to bathrooms to increase visibility. Privacy is a privilege."',
                    th: '🚪 ถอดประตู: "ถอดประตูทางเข้าหลักของห้องน้ำออกเพื่อให้มองเห็น ความเป็นส่วนตัวคืออภิสิทธิ์"',
                    zh: '🚪 拆除门："拆除厕所主入口的门以增加能见度。隐私是一种特权。" '
                },
                consequence: {
                    en: '⚖️ Privacy Violation. It works effectively, but makes everyone uncomfortable. A borderline human rights issue.',
                    th: '⚖️ ละเมิดความเป็นส่วนตัว ได้ผลดี แต่ทุกคนอึดอัด ก้ำกึ่งละเมิดสิทธิมนุษยชน',
                    zh: '⚖️ 侵犯隐私。这很有效，但让每个人都不舒服。处于人权问题的边缘。'
                },
                stats: { competence: 50, ethics: 10, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'eadm_023',
        text: {
            en: '🏳️‍🌈 The Flag Debate: A teacher hangs a Pride flag in their classroom. A vocal group of parents demands its removal, calling it "political indoctrination." Students are planning a walkout if you remove it.',
            th: '🏳️‍🌈 ดีเบตธงสีรุ้ง: ครูแขวนธง Pride ในห้องเรียน กลุ่มผู้ปกครองเรียกร้องให้เอาออก หาว่า "ล้างสมองทางการเมือง" นักเรียนขู่จะประท้วงถ้าเอาออก',
            zh: '🏳️‍🌈 旗帜辩论：一位老师在教室里挂了骄傲旗。一群直言不讳的家长要求将其移除，称其为"政治灌输"。如果你移除它，学生计划罢课。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Remove It: "Schools must be neutral spaces. No flags other than the national and state flags are permitted."',
                    th: '🚫 เอาออก: "โรงเรียนต้องเป็นพื้นที่กลาง ห้ามธงอื่นนอกจากธงชาติและธงรัฐ"',
                    zh: '🚫 移除："学校必须是中立空间。除国旗和州旗外，不允许悬挂其他旗帜。" '
                },
                consequence: {
                    en: '📢 Student Walkout. 500 students leave class in protest. You pleased the conservative parents but lost the student body\'s trust.',
                    th: '📢 นักเรียนประท้วงหยุดเรียน นักเรียน 500 คนเดินออกจากห้องเรียน คุณเอาใจผู้ปกครองอนุรักษ์นิยมได้แต่เสียใจนักเรียน',
                    zh: '📢 学生罢课。500名学生罢课抗议。你取悦了保守派家长，但失去了全体学生的信任。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Defend It: "Our mission is inclusivity. The flag represents safety for marginalized students. It stays."',
                    th: '🛡️ ปกป้อง: "พันธกิจเราคือความไม่แบ่งแยก ธงนี้คือสัญลักษณ์ความปลอดภัยของนักเรียนกลุ่มน้อย มันจะอยู่ที่เดิม"',
                    zh: '🛡️ 捍卫："我们的使命是包容性。旗帜代表边缘学生的即安全。它留下。" '
                },
                consequence: {
                    en: '✉️ Angry Emails. A deluge of complaints floods your inbox, but LGBTQ+ students feel seen and safe. Teachers rally behind you.',
                    th: '✉️ อีเมลเดือด คำร้องเรียนถล่มอินบ็อกซ์ แต่นักเรียน LGBTQ+ รู้สึกปลอดภัย ครูสนับสนุนคุณ',
                    zh: '✉️ 愤怒邮件。投诉水般涌入你的收件箱，但LGBTQ+学生感到被关注和安全。老师们支持你。'
                },
                stats: { competence: 50, ethics: 60, leadership: 60, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ Free Speech Zone: "Allow any student or teacher to display symbols of their beliefs on their personal desks/areas."',
                    th: '🗣️ โซนเสรีภาพ: "อนุญาตให้นักเรียนหรือครูแสดงสัญลักษณ์ความเชื่อของตนบนโต๊ะ/พื้นที่ส่วนตัวได้"',
                    zh: '🗣️ 言论自由区："允许任何学生或老师在个人办公桌/区域展示其信仰的符号。" '
                },
                consequence: {
                    en: '⚔️ Culture War. Next week, someone hang a Confederate flag. You\'ve created a battlefield in the classroom.',
                    th: '⚔️ สงครามวัฒนธรรม อาทิตย์หน้ามีคนแขวนธงสมาพันธรัฐ คุณสร้างสนามรบในห้องเรียน',
                    zh: '⚔️ 文化战争。下周，有人挂起了邦联旗。你在教室里创造了一个战场。'
                },
                stats: { competence: 30, ethics: 40, leadership: 30, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Designated "Unity Wall": "Create a specific bulletin board in the hallway for all diversity and club symbols, keeping classrooms neutral."',
                    th: '🤝 "กำแพงสามัคคี": "จัดบอร์ดเฉพาะในโถงทางเดินสำหรับสัญลักษณ์ความหลากหลายและชมรม ให้ห้องเรียนเป็นกลาง"',
                    zh: '🤝 指定"团结墙"："在走廊设立专门的公告板，展示所有多样性和俱乐部标志，保持教室中立。" '
                },
                consequence: {
                    en: '⚖️ Diplomatic Compromise. It de-escalates the immediate conflict. Neither side is thrilled, but the school keeps functioning.',
                    th: '⚖️ ประนีประนอมทางการทูต ลดความขัดแย้งระยะสั้น ไม่มีฝ่ายไหนปลื้มสุดๆ แต่โรงเรียนเดินหน้าต่อได้',
                    zh: '⚖️ 外交妥协。这缓解了当前的冲突。双方都不兴奋，但学校继续运转。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 }
            }
        ]
    },
    {
        id: 'eadm_024',
        text: {
            en: '🥦 Menu Mutiny: The student council demands vegan and halal options in the cafeteria. The head cook refuses, saying "It\'s too expensive and nobody will eat that rabbit food."',
            th: '🥦 กบฏเมนูอาหาร: สภานักเรียนเรียกร้องเมนูวีแกนและฮาลาล หัวหน้าแม่ครัวปฏิเสธ บอกว่า "แพงไปและไม่มีใครกินหญ้าพวกนั้นหรอก"',
            zh: '🥦 菜单兵变：学生会要求食堂提供纯素和清真选项。厨师长拒绝，称"太贵了，没人会吃那种兔子食。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🥗 Mandate the Menu: "Inclusivity extends to the cafeteria. Find the budget or I will find a new cook."',
                    th: '🥗 บังคับเมนู: "ความเท่าเทียมรวมถึงในโรงอาหารด้วย หางบมาซะ ไม่งั้นฉันจะหาแม่ครัวใหม่"',
                    zh: '🥗 强制菜单："包容性延伸到食堂。找到预算，否则我就找个新厨师。" '
                },
                consequence: {
                    en: '🍽️ Modern Standard. The cook leaves, but the new menu is a hit. Participation in school lunch rises 15%.',
                    th: '🍽️ มาตรฐานใหม่ แม่ครัวลาออก แต่เมนูใหม่ฮิตมาก ยอดกินมื้อเที่ยงเพิ่ม 15%',
                    zh: '🍽️ 现代标准。厨师离开了，但新菜单大受欢迎。学校午餐的参与率上升了15%。'
                },
                stats: { competence: 50, ethics: 60, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '👅 Taste Test Pilot: "Host a \'Global Cuisines\' day. If students actually buy the vegan food, we keep it permanently."',
                    th: '👅 ทดลองชิม: "จัดวัน \'อาหารโลก\' ถ้านักเรียนซื้อกินจริงๆ เราจะบรรจุเป็นเมนูถาวร"',
                    zh: '👅以此口味测试："举办一个\'全球美食\'日。如果学生真的买纯素食物，我们就永久保留。" '
                },
                consequence: {
                    en: '📊 Data-Driven. The pilot is a success. You have the numbers to justify the cost to the board.',
                    th: '📊 ขับเคลื่อนด้วยข้อมูล การทดลองสำเร็จ คุณมีตัวเลขไปของบจากบอร์ดได้',
                    zh: '📊 数据驱动。试点成功。你有数据向董事会证明成本的合理性。'
                },
                stats: { competence: 60, ethics: 40, leadership: 50, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🍕 Side with Cook: "Budgets are tight. Stick to the USDA minimum requirements. Pizza and corn it is."',
                    th: '🍕 เข้าข้างแม่ครัว: "งบเราน้อย ยึดตามมาตรฐานขั้นต่ำพอ พิซซ่ากับข้าวโพดต่อไป"',
                    zh: '🍕 站在厨师一边："预算很紧。坚持美国农业部的最低要求。披萨和玉米就这样。" '
                },
                consequence: {
                    en: '📉 Health Decline. Students boycott lunch, bringing unhealthy snacks from home. A missed opportunity for health education.',
                    th: '📉 สุขภาพแย่ลง นักเรียนแบนมื้อเที่ยง หิ้วขนมถุงมาินเอง พลาดโอกาสสอนเรื่องสุขภาพ',
                    zh: '📉 健康下降。学生抵制午餐，从家里带不健康的零食。错失了健康教育的机会。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🚚 Food Truck Fridays: "Invite local diverse food trucks once a week to fill the gap without changing our kitchen."',
                    th: '🚚 ศุกร์ฟู้ดทรัก: "เชิญรถขายอาหารท้องถิ่นมาอาทิตย์ละครั้ง เติมเต็มส่วนที่ขาดโดยไม่ต้องเปลี่ยนครัวเรา"',
                    zh: '🚚 餐车星期五："每周邀请当地多样化的餐车来一次，在不改变我们厨房的情况下填补空白。" '
                },
                consequence: {
                    en: '🚀 Crowd Pleaser. Everyone loves it. It costs the school nothing and supports local business.',
                    th: '🚀 ถูกใจมหาชน ทุกคนชอบ โรงเรียนไม่เสียเงินแถมช่วยธุรกิจท้องถิ่น',
                    zh: '🚀以此取悦大众。每个人都喜欢。学校不用花钱，还支持了当地企业。'
                },
                stats: { competence: 45, ethics: 40, leadership: 45, innovation: 70 }
            }
        ]
    },
    {
        id: 'eadm_025',
        text: {
            en: '🤖 The AI Epidemic: English teachers report that 50% of essays this semester were likely written by ChatGPT. They want to ban all laptops in class.',
            th: '🤖 โรคระบาด AI: ครูภาษาอังกฤษรายงานว่าเรียงความ 50% เทอมนี้เขียนโดย ChatGPT พวกเขาอยากแบนแล็ปท็อปทั้งหมดในคลาส',
            zh: '🤖 AI流行病：英语老师报告说，这学期50%的论文可能是ChatGPT写的。他们想在课堂上禁止所有笔记本电脑。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📝 Return to Pen & Paper: "Ban digital submissions for essays. All writing must be done in class by hand."',
                    th: '📝 กลับสู่ปากกาและกระดาษ: "แบนการส่งงานดิจิทัล งานเขียนทั้งหมดต้องเขียนด้วยมือในห้องเรียน"',
                    zh: '📝 回归纸笔："禁止提交电子版论文。所有写作必须在课堂上手写完成。" '
                },
                consequence: {
                    en: '🔙 Integrity Secured. Cheating drops to zero. But students complain about hand cramps and lack of preparation for the digital world.',
                    th: '🔙 ได้ความซื่อสัตย์คืน การโกงเป็นศูนย์ แต่นักเรียนบ่นเรื่องปวดมือและไม่ได้เตรียมพร้อมสู่โลกดิจิทัล',
                    zh: '🔙 诚信得到保障。作弊降至零。但学生抱怨手抽筋，且缺乏对数字世界的准备。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤖 Embrace & Adapt: "Teach students how to use AI as a tool. Grade them on how well they edit, fact-check, and expand on the AI\'s output."',
                    th: '🤖 รับและปรับใช้: "สอนนักเรียนใช้ AI เป็นเครื่องมือ ให้คะแนนจากการแก้ไข ตรวจสอบข้อเท็จจริง และขยายความจากสิ่งที่ AI เขียน"',
                    zh: '🤖 拥抱与适应："教学生如何将AI作为一种工具。根据他们对AI输出的编辑、事实核查和扩展程度进行评分。" '
                },
                consequence: {
                    en: '🚀 Future Ready. You are leading the charge in modern pedagogy. Students are engaged and learning synthesis skills.',
                    th: '🚀 พร้อมสู่อนาคต คุณเป็นผู้นำด้านการศึกษาสมัยใหม่ นักเรียนสนใจและได้ทักษะการสังเคราะห์',
                    zh: '🚀 面向未来。你在现代教育学方面处于领先地位。学生们很投入，正在学习综合技能。'
                },
                stats: { competence: 50, ethics: 40, leadership: 60, innovation: 90 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Purchase Detectors: "Spend $20k on advanced AI detection software and automatically fail anyone caught using it."',
                    th: '🕵️ ซื้อเครื่องตรวจ: "ทุ่มงบ 2 หมื่นดอลลาร์ซื้อซอฟต์แวร์ตรวจ AI ตัวเทพ ใครโดนจับได้ปรับตกทันที"',
                    zh: '🕵️ 购买检测器："花2万美元购买先进的AI检测软件，并在发现任何人使用时自动判不及格。" '
                },
                consequence: {
                    en: '⚠️ False Positives. The software flags innocent students. Parents threaten lawsuits. It turns into a witch hunt.',
                    th: '⚠️ ตรวจผิดพลาด ซอฟต์แวร์จับผิดเด็กบริสุทธิ์ พ่อแม่ขู่ฟ้อง กลายเป็นการล่าแม่มด',
                    zh: '⚠️ 误报。软件标记了无辜的学生。家长威胁要诉讼。这变成了猎巫行动。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ Oral Defense: "Keep the essays, but require a 2-minute oral defense with the teacher to prove they understand the material."',
                    th: '🗣️ สอบป้องกันปากเปล่า: "ให้เขียนเรียงความเหมือนเดิม แต่ต้องสอบปากเปล่า 2 นาทีกับครูเพื่อพิสูจน์ว่าเข้าใจ"',
                    zh: '🗣️ 口头答辩："保留论文，但要求与老师进行2分钟的口头答辩，以证明他们理解材料。" '
                },
                consequence: {
                    en: '🎓 High Standards. It increases grading time significantly, but ensures true mastery. Teachers respect the rigor.',
                    th: '🎓 มาตรฐานสูง เพิ่มเวลาตรวจงานเยอะมาก แต่ยืนยันความรู้ได้จริง ครูเคารพในความเข้มข้น',
                    zh: '🎓 高标准。这大大增加了评分时间，但确保了真正的掌握。老师们尊重这种严谨。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 30 }
            }
        ]
    },
    {
        id: 'eadm_026',
        text: {
            en: '🚬 The Vape Haze: Bathroom vape sensors are triggering 50 times a day. Students are vaping in stalls, between classes, and even in the back of the library. It\'s an addiction crisis.',
            th: '🚬 หมอกควันบุหรี่ไฟฟ้า: เซ็นเซอร์ตรวจจับบุหรี่ไฟฟ้าในห้องน้ำดัง 50 ครั้งต่อวัน นักเรียนสูบในห้องน้ำ ระหว่างคาบเรียน และแม้แต่หลังห้องสมุด มันคือวิกฤตการเสพติด',
            zh: '🚬 电子烟迷雾：厕所电子烟传感器每天触发50次。学生在隔间、课间甚至图书馆后面吸电子烟。这是一场成瘾危机。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👮 Zero Tolerance Raids: "Conduct random bathroom sweeps with security and police. Immediate suspension for possession."',
                    th: '👮 บุกจับแบบไม่อะลุ่มอล่วย: "สุ่มตรวจห้องน้ำพร้อม รปภ. และตำรวจ พักการเรียนทันทีที่เจอของ"',
                    zh: '👮 零容忍突袭："与保安和警察一起进行随机厕所扫荡。一经发现立即停学。"'
                },
                consequence: {
                    en: '🚔 Hostile Environment. Suspensions skyrocket, but the "cat and mouse" game intensifies. Students find better hiding spots, and trust evaporates.',
                    th: '🚔 สภาพแวดล้อมที่เป็นศัตรู ยอดพักการเรียนพุ่ง แต่เกม "แมวไล่จับหนู" รุนแรงขึ้น นักเรียนหาที่ซ่อนใหม่ได้ และความไว้วางใจมลายหายไป',
                    zh: '🚔 敌对环境。停学人数激增，但"猫抓老鼠"的游戏加剧。学生找到了更好的藏身之处，信任荡然无存。'
                },
                stats: { competence: 30, ethics: 25, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🏥 Rehabilitation Over Punishment: "Replace suspensions with mandatory Saturday \'Quit Nicotine\' seminars and counseling. Treat it as a health issue, not a crime."',
                    th: '🏥 บำบัดแทนลงโทษ: "เปลี่ยนโทษพักการเรียนเป็นสัมมนา \'เลิกนิโคติน\' บังคับวันเสาร์และการให้คำปรึกษา มองว่าเป็นปัญหาสุขภาพ ไม่ใช่อาชญากรรม"',
                    zh: '🏥 康复胜于惩罚："用强制性的周六\'戒尼古丁\'研讨会和咨询代替停学。将其视为健康问题，而不是犯罪。"'
                },
                consequence: {
                    en: '❤️ Health Win. It takes time, but addiction rates slowly drop. Parents appreciate the supportive approach over disciplinary records.',
                    th: '❤️ ชนะด้านสุขภาพ ใช้เวลาหน่อย แต่อัตราการติดลดลงช้าๆ ผู้ปกครองชื่นชมแนวทางช่วยเหลือมากกว่าการบันทึกวินัย',
                    zh: '❤️ 健康胜利。这需要时间，但在成瘾率缓慢下降。家长们赞赏这种支持性的方法，而不是纪律处分。'
                },
                stats: { competence: 45, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🚪 Close the Bathrooms: "Lock all bathrooms except one main set near the office to monitor entry. Radical problems require radical solutions."',
                    th: '🚪 ปิดห้องน้ำ: "ล็อกห้องน้ำทุกห้องยกเว้นชุดหลักใกล้ธุรการเพื่อคุมการเข้าออก ปัญหารุนแรงต้องแก้ด้วยวิธีรุนแรง"',
                    zh: '🚪 关闭厕所："除了办公室附近的一组主厕所外，锁上所有厕所并监控进入。激进的问题需要激进的解决方案。"'
                },
                consequence: {
                    en: '🚽 Hygiene Nightmare. Lines are massive. Accidents happen. Parents are calling the health department about "inhumane conditions."',
                    th: '🚽 ฝันร้ายสุขอนามัย แถวยาวเหยียด เกิดอุบัติเหตุราดกางเกง ผู้ปกครองโทรแจ้งกรมอนามัยเรื่อง "สภาพขาดมนุษยธรรม"',
                    zh: '🚽 卫生噩梦。排长队。发生意外。家长们正打电话给卫生部门投诉"不人道条件"。'
                },
                stats: { competence: 15, ethics: 10, leadership: 5, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '💸 Fine the Parents: "Issue $500 fines to parents for every device confiscated. Hit them in the wallet and they\'ll stop buying them."',
                    th: '💸 ปรับผู้ปกครอง: "ออกค่าปรับ 500 ดอลลาร์ให้ผู้ปกครองต่ออุปกรณ์ที่ยึดได้ เล่นงานกระเป๋าตังค์เดี๋ยวก็เลิกซื้อให้ลูก"',
                    zh: '💸 罚款家长："每没收一台设备向家长罚款500美元。打击他们的钱包，他们就会停止购买。"'
                },
                consequence: {
                    en: '💰 Revenue & Rage. You make money, but low-income families are devastated. You are viewed as a tax collector, not an educator.',
                    th: '💰 รายได้และความโกรธแค้น ได้เงินก็จริง แต่ครอบครัวรายได้น้อยพังพินาศ คุณถูกมองว่าเป็นคนเก็บภาษี ไม่ใช่นักการศึกษา',
                    zh: '💰 收入与愤怒。你赚了钱，但低收入家庭遭受重创。你被视为税吏，而不是教育家。'
                },
                stats: { competence: 35, ethics: 20, leadership: 25, innovation: 10 }
            }
        ]
    },
    {
        id: 'eadm_027',
        text: {
            en: '🏈 The Booster Scandal: A wealthy parent, who funded the new stadium, is implicitly threatening to pull funding unless the coach starts his son at Quarterback.',
            th: '🏈 เรื่องฉาวสปอนเซอร์: ผู้ปกครองร่ำรวยที่ออกเงินสร้างสนามใหม่ ขู่กลายๆ ว่าจะถอนทุนถ้าโค้ชไม่ให้ลูกชายเขาเป็นตัวจริงตำแหน่งควอเตอร์แบ็ค',
            zh: '🏈 赞助商丑闻：一位资助了新体育馆的富有家长暗示，除非教练让他儿子首发四分卫，否则将撤资。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Back the Coach: "Placement is based on talent, not bank accounts. If he pulls the money, so be it. We have integrity."',
                    th: '🛑 หนุนหลังโค้ช: "ตำแหน่งขึ้นอยู่กับพรสวรรค์ ไม่ใช่ยอดเงินในบัญชี ถ้าเขาถอนทุนก็ช่างมัน เรามีศักดิ์ศรี"',
                    zh: '🛑 支持教练："位置取决于天赋，而不是银行账户。如果他撤资，那就撤吧。我们有诚信。"'
                },
                consequence: {
                    en: '⚖️ Integrity Kept, Stadium Lost. The funding vanishes. The stadium remains half-built for years. But the coach and team respect you deeply.',
                    th: '⚖️ รักษาศักดิ์ศรี เสียสนาม เงินทุนหายวับ สนามสร้างค้างครึ่งๆ กลางๆ ไปหลายปี แต่โค้ชและทีมเคารพคุณมาก',
                    zh: '⚖️ 保持诚信，失去体育场。资金消失了。体育场多年来一直处于半完工状态。但教练和球队深切尊重你。'
                },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Take the Money: "Tell the coach to play the kid for a few insignificant games. We need this stadium for the whole community."',
                    th: '💰 รับเงินไว้: "บอกโค้ชให้ส่งเด็กลงเล่นเกมที่ไม่สำคัญสัก 2-3 เกม เราต้องการสนามนี้เพื่อชุมชนทั้งมวล"',
                    zh: '💰 拿钱："告诉教练让那孩子打几场无关紧要的比赛。我们需要这个体育场造福整个社区。"'
                },
                consequence: {
                    en: '🏟️ Stadium Built, Soul Sold. The stadium is beautiful. But the team morale tanks, and rumors of corruption plague your administration.',
                    th: '🏟️ ได้สนาม ขายวิญญาณ สนามสวยงาม แต่ขวัญกำลังใจทีมตกต่ำ และข่าวลือเรื่องการทุจริตกัดกินการบริหารของคุณ',
                    zh: '🏟️ 体育场建成，灵魂出卖。体育场很漂亮。但球队士气低落，腐败传闻困扰着你的行政管理。'
                },
                stats: { competence: 30, ethics: -10, leadership: 15, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 The "Warning": "Privately warn the parent that bribery is illegal and effective immediately, all donations must be anonymous to prevent conflict of interest."',
                    th: '🤫 "คำเตือน": "เตือนผู้ปกครองเป็นการส่วนตัวว่าการติดสินบนผิดกฎหมาย และให้มีผลทันที การบริจาคทั้งหมดต้องไม่ระบุชื่อเพื่อป้องกันผลประโยชน์ทับซ้อน"',
                    zh: '🤫 "警告"："私下警告家长贿赂是违法的，并且立即生效，所有捐款必须匿名以防止利益冲突。"'
                },
                consequence: {
                    en: '💣 Temporary Peace. He backs off for now, but finds other ways to exert influence later. You kicked the can down the road.',
                    th: '💣 ความสงบชั่วคราว เขาถอยไปก่อน แต่หาทางอื่นมาใช้อิทธิพลทีหลัง คุณแค่ปัดปัญหาไปวันๆ',
                    zh: '💣 暂时的和平。他暂时退缩了，但之后会找到其他方式施加影响。你只是把问题推迟了。'
                },
                stats: { competence: 20, ethics: 15, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Go Public: "Announce the threat at the next board meeting. Shine a light on the attempted extortion."',
                    th: '📢 แฉต่อสาธารณะ: "ประกาศคำขู่ในการประชุมบอร์ดครั้งหน้า ฉายแสงไปที่ความพยายามกรรโชกทรัพย์"',
                    zh: '📢 公之于众："在下次董事会上宣布这一威胁。曝光这种勒索企图。"'
                },
                consequence: {
                    en: '🎥 High Drama. The parent is humiliated and pulls the kid from school. You are praised for transparency but alienated the wealthy donor class.',
                    th: '🎥 ดราม่าใหญ่โต ผู้ปกครองอับอายและย้ายลูกออก คุณได้รับคำชมเรื่องความโปร่งใสแต่ถูกกลุ่มเศรษฐีผู้บริจาคแบน',
                    zh: '🎥 戏剧性高潮。家长受辱并让孩子退学。你因透明度受到赞扬，但疏远了富有的捐赠阶层。'
                },
                stats: { competence: 35, ethics: 40, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'eadm_028',
        text: {
            en: '🦠 Toxic Mold Scare: The Old Wing smells musty. Teachers complain of headaches. A proper mold test costs $10k, and potential remediation could be $500k—bankrupting the district.',
            th: '🦠 ราพิษระทึกขวัญ: ตึกเก่ามีกลิ่นอับ ครูบ่นว่าปวดหัว การตรวจราอย่างถูกต้องใช้เงิน 1 หมื่นดอลลาร์ และค่าแก้ไขอาจถึง 5 แสน—ทำเขตล้มละลายได้เลย',
            zh: '🦠 毒霉菌恐慌：旧楼有霉味。老师抱怨头痛。适当的霉菌检测要花1万美元，潜在的修复可能高达50万美元——这会让学区破产。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🙈 Ignore and Deny: "It\'s just humidity and old building smell. Buy some dehumidifiers and air fresheners ($500)."',
                    th: '🙈 เมินและปฏิเสธ: "แค่ความชื้นกับกลิ่นตึกเก่า ซื้อเครื่องลดความชื้นกับน้ำหอมก็พอ (500 ดอลลาร์)"',
                    zh: '🙈 无视并否认："只是潮湿和旧楼的味道。买些除湿机和空气清新剂（500美元）。"'
                },
                consequence: {
                    en: '🏥 Health Lawsuit. Six months later, three teachers are hospitalized with asthma. The class action lawsuit costs millions. Your negligence is criminal.',
                    th: '🏥 ฟ้องร้องเรื่องสุขภาพ 6 เดือนต่อมา ครู 3 คนเข้าโรงพยาบาลเพราะหอบหืด การฟ้องร้องแบบกลุ่มเสียค่าปรับหลายล้าน ความละเลยของคุณคืออาชญากรรม',
                    zh: '🏥 健康诉讼。六个月后，三名教师因哮喘住院。集体诉讼花费数百万。你的疏忽是犯罪。'
                },
                stats: { competence: 15, ethics: -20, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧪 Test Immediately: "Safety cannot be priced. Order the full environmental panel. If we find mold, we will find the money to fix it."',
                    th: '🧪 ตรวจทันที: "ความปลอดภัยตีราคาไม่ได้ สั่งตรวจสิ่งแวดล้อมเต็มรูปแบบ ถ้าเจอรา เราจะหาเงินมาซ่อม"',
                    zh: '🧪 立即检测："安全是无价的。订购全面的环境检测小组。如果我们发现霉菌，我们会找钱来修。"'
                },
                consequence: {
                    en: '💸 Financial Strain, Moral Gain. You find black mold. You have to cut the art and music budget to fix it, but you saved lungs and lives.',
                    th: '💸 เครียดเรื่องเงิน กำไรเรื่องใจ เจอราดำจริง คุณต้องตัดงบศิลปะและดนตรีมาซ่อม แต่คุณช่วยปอดและชีวิตคนไว้',
                    zh: '💸 财政紧张，道德收益。你发现了黑霉菌。你不得不削减艺术和音乐预算来修复它，但你挽救了肺和生命。'
                },
                stats: { competence: 40, ethics: 45, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧼 The Bleach Solution: "Have the custodial staff scrub everything with industrial bleach over the weekend. A deep clean should solve it."',
                    th: '🧼 วิธีไฮเตอร์: "ให้ภารโรงขัดทุกอย่างด้วยไฮเตอร์อุตสาหกรรมในวันหยุด ล้างครั้งใหญ่น่าจะจบ"',
                    zh: '🧼 漂白剂解决方案："让保洁人员在周末用工业漂白剂擦洗所有东西。深度清洁应该能解决问题。"'
                },
                consequence: {
                    en: '🩹 Band-Aid Fix. It smells clean for a month, then the mold returns with a vengeance. You look incompetent for thinking bleach kills porous mold.',
                    th: '🩹 แก้ผ้าเอาหน้ารอด กลิ่นสะอาดเดือนเดียว แล้วราก็กลับมาดุเดือดกว่าเดิม คุณดูไร้ความสามารถที่คิดว่าไฮเตอร์ฆ่าราในรูพรุนได้',
                    zh: '🩹 权宜之计。闻起来干净了一个月，然后霉菌变本加厉地回来了。你以为漂白剂能杀死多孔霉菌，这让你看起来很无能。'
                },
                stats: { competence: 25, ethics: 20, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🏗️ Close the Wing: "Condemn the Old Wing immediately. Move classes to the gym and cafeteria until we pass a bond measure."',
                    th: '🏗️ ปิดตึก: "สั่งปิดตึกเก่าทันที ย้ายคลาสไปเรียนโรงยิมและโรงอาหารจนกว่าเราจะผ่านกฎหมายพันธบัตร"',
                    zh: '🏗️ 关闭侧楼："立即查封旧楼。将课程转移到体育馆和食堂，直到我们通过债券措施。"'
                },
                consequence: {
                    en: '🏫 Overcrowding Chaos. Learning conditions are terrible, but parents see the urgency and vote for the renovation bond in record numbers.',
                    th: '🏫 ความวุ่นวายแออัด สภาพการเรียนแย่มาก แต่ผู้ปกครองเห็นความเร่งด่วนและโหวตผ่านพันธบัตรซ่อมแซมถล่มทลาย',
                    zh: '🏫 拥挤的混乱。学习条件很糟糕，但家长们看到了紧迫性，并以创纪录的人数投票支持翻新债券。'
                },
                stats: { competence: 35, ethics: 40, leadership: 35, innovation: 20 }
            }
        ]
    },
    {
        id: 'eadm_029',
        text: {
            en: '🥤 The Soda Ban: The district wants to ban all sugary drinks. Coca-Cola offers a $100,000 "sponsorship" for exclusive vending rights—funding that could save the sports program.',
            th: '🥤 การแบนน้ำอัดลม: เขตต้องการแบนเครื่องดื่มน้ำตาลทั้งหมด โค้กเสนอ "สปอนเซอร์" 1 แสนดอลลาร์แลกสิทธิ์ตู้กดผูกขาด—เงินที่ช่วยโปรแกรมกีฬาได้',
            zh: '🥤 苏打禁令：学区想要禁止所有含糖饮料。可口可乐提供10万美元的"赞助"以获得独家自动售货权——但这笔资金可以挽救体育项目。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Take the Deal: "We need the money. Put the vending machines in the hallways. Personal responsibility determines what kids drink."',
                    th: '💰 รับดีล: "เราต้องการเงิน ตั้งตู้ในโถงทางเดินเลย ความรับผิดชอบส่วนตัวกำหนดเองว่าเด็กจะดื่มอะไร"',
                    zh: '💰 接受交易："我们需要钱。把自动售货机放在走廊里。个人责任决定孩子喝什么。"'
                },
                consequence: {
                    en: '💵 Fully Funded, Health Disaster. The football team gets new gear, but childhood obesity and hyperactivity spike. The PTA calls you a "sellout."',
                    th: '💵 เงินเต็มถัง หายนะสุขภาพ ทีมบอลได้ชุดใหม่ แต่โรคอ้วนและเด็กไฮเปอร์พุ่งปรี๊ด สมาคมผู้ปกครองด่าคุณว่า "คนขายอุดมการณ์"',
                    zh: '💵 资金充足，健康灾难。足球队换了新装备，但儿童肥胖和多动症激增。家长教师协会称你为"叛徒"。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Total Ban: "No sugary drinks on campus. Reject the sponsorship. We model health, not capitalism."',
                    th: '🚫 แบนราบคาบ: "ห้ามน้ำหวานในโรงเรียน ปฏิเสธสปอนเซอร์ เราเป็นแบบอย่างสุขภาพ ไม่ใช่ทุนนิยม"',
                    zh: '🚫 全面禁止："校园内禁止含糖饮料。拒绝赞助。我们树立的是健康榜样，而不是资本主义。"'
                },
                consequence: {
                    en: '🥦 Healthy but Broke. Sugar intake drops, but you have to introduce "Pay to Play" fees for sports, angering low-income families.',
                    th: '🥦 สุขภาพดีแต่ถังแตก การกินน้ำตาลลดลง แต่คุณต้องเก็บค่า "Pay to Play" สำหรับกีฬา ทำให้ครอบครัวรายได้น้อยโกรธ',
                    zh: '🥦 健康但破产。糖摄入量下降，但你不得不为此引入体育"付费参与"费用，激怒了低收入家庭。'
                },
                stats: { competence: 35, ethics: 40, leadership: 35, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🥗 Healthy Options Only: "Accept the deal ONLY if they stock the machines with water, zero-sugar tea, and juice. No sodas."',
                    th: '🥗 เฉพาะทางเลือกสุขภาพ: "รับดีลเฉพาะถ้าพวกเขาใส่แค่น้ำเปล่า ชาไม่มีน้ำตาล และน้ำผลไม้ ห้ามน้ำอัดลม"',
                    zh: '🥗 仅限健康选项："只有当他们在机器里放水、无糖茶和果汁时才接受交易。不要苏打水。"'
                },
                consequence: {
                    en: '✅ Win-Win Negotiation. The company grumbles but agrees to gain market presence. You get the funding AND maintain health standards.',
                    th: '✅ การเจรจาวินวิน บริษัทยอม (แบบบ่นๆ) เพื่อได้พื้นที่ตลาด คุณได้เงินทุนและรักษามาตรฐานสุขภาพ',
                    zh: '✅ 双赢谈判。公司虽然发牢骚但同意以获得市场份额。你既获得了资金又保持了健康标准。'
                },
                stats: { competence: 45, ethics: 35, leadership: 40, innovation: 35 }
            },
            {
                id: 'D',
                text: {
                    en: '🏅 Alumni Match: "Reject the corporate money. Launch an alumni fundraising drive specifically to save the sports program."',
                    th: '🏅 ระดมทุนศิษย์เก่า: "ปฏิเสธเงินนายทุน เริ่มแคมเปญระดมทุนจากศิษย์เก่าเพื่อช่วยกีฬาทีมเดียว"',
                    zh: '🏅 校友匹配："拒绝企业资金。发起校友筹款活动，专门为了挽救体育项目。"'
                },
                consequence: {
                    en: '🤝 Community Pride. It takes more effort, but the community rallies. The sports program is saved by the people, not a soda giant.',
                    th: '🤝 ความภูมิใจชุมชน ต้องใช้แรงเยอะกว่า แต่ชุมชนร่วมใจ โปรแกรมกีฬาอยู่รอดได้ด้วยประชาชน ไม่ใช่น้ำอัดลมยักษ์ใหญ่',
                    zh: '🤝 社区自豪感。这需要更多努力，但社区团结起来了。体育项目是由人民而不是苏打水巨头拯救的。'
                },
                stats: { competence: 40, ethics: 40, leadership: 45, innovation: 25 }
            }
        ]
    },
    {
        id: 'eadm_030',
        text: {
            en: '👺 The Mascot Controversy: Your school mascot, the "Chieftain," is considered offensive by indigenous groups. Alumni love the tradition and threaten to stop donating if you change it.',
            th: '👺 ประเด็นมาสคอต: มาสคอตโรงเรียน "ท่านหัวหน้าเผ่า" ถูกมองว่าเหยียดโดยกลุ่มชนพื้นเมือง ศิษย์เก่ารักประเพณีนี้และขู่หยุดบริจาคถ้าเปลี่ยน',
            zh: '👺 吉祥物争议：你们学校的吉祥物"酋长"被土著团体认为具有冒犯性。校友们热爱这一传统，并威胁如果你改变它就停止捐款。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔄 Change It Now: "It\'s racist and outdated. Change it to the \'Wildcats\' immediately. We don\'t trade dignity for dollars."',
                    th: '🔄 เปลี่ยนเดี๋ยวนี้: "มันเหยียดเชื้อชาติและล้าหลัง เปลี่ยนเป็น \'Wildcats\' เดี๋ยวนี้ เราไม่แลกศักดิ์ศรีกับเงิน"',
                    zh: '🔄 现在就改："这是种族主义和过时的。立即将其改为\'野猫\'。我们不出卖尊严换取金钱。"'
                },
                consequence: {
                    en: '✅ Moral Victory, Financial Hit. You are on the right side of history, but the alumni fund drops by 40%. You have to tighten the budget significantly.',
                    th: '✅ ชนะทางศีลธรรม เจ็บทางเงิน คุณอยู่ข้างที่ถูกต้องของประวัติศาสตร์ แต่กองทุนศิษย์เก่าลดลง 40% คุณต้องรัดเข็มขัดงบประมาณอย่างหนัก',
                    zh: '✅ 道德胜利，经济受创。你站在历史正确的一边，但校友基金下降了40%。你必须大幅紧缩预算。'
                },
                stats: { competence: 35, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Defend the Tradition: "We honor the history of the tribe with this name. It stays. Focus on real issues."',
                    th: '🛡️ ปกป้องประเพณี: "เราให้เกียรติประวัติศาสตร์ชนเผ่าด้วยชื่อนี้ มันจะอยู่ต่อ โฟกัสเรื่องจริงจังเถอะ"',
                    zh: '🛡️ 捍卫传统："我们用这个名字纪念部落的历史。它保留。关注真正的问题。"'
                },
                consequence: {
                    en: '👺 Public Shame. The national news picks up the story. Students protest at halftime. You look out of touch and insensitive.',
                    th: '👺 ขายหน้าประเทาศ ข่าวแห่งชาติตีแผ่ นักเรียนประท้วงช่วงพักครึ่ง คุณดูหลุดโลกและไม่มีความรู้สึก',
                    zh: '👺 公众羞辱。全国性新闻报道了这件事。学生在中场休息时抗议。你看起来脱节且麻木不仁。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Tribal Partnership: "Reach out to the local tribe. Ask for their blessing and guidance to redesign the mascot to be respectful and historically accurate."',
                    th: '🤝 หุ้นส่วนชนเผ่า: "ติดต่อชนเผ่าท้องถิ่น ขอพรและคำแนะนำเพื่อออกแบบมาสคอตใหม่ให้แสดงความเคารพและถูกต้องตามประวัติศาสตร์"',
                    zh: '🤝 部落伙伴关系："接触当地部落。请求他们的祝福和指导，重新设计吉祥物，使其具有尊重性和历史准确性。"'
                },
                consequence: {
                    en: '🦅 Honored Alliance. The tribe agrees to partner with the school. The mascot evolves into a symbol of education and respect. Alumni are won over.',
                    th: '🦅 พันธมิตรทรงเกียรติ ชนเผ่าตกลงร่วมมือกับโรงเรียน มาสคอตวิวัฒนาการเป็นสัญลักษณ์ของการศึกษาและความเคารพ ศิษย์เก่ายอมรับ',
                    zh: '🦅 荣誉联盟。部落同意与学校合作。吉祥物演变为教育和尊重的象征。校友们被争取过来了。'
                },
                stats: { competence: 45, ethics: 45, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🗳️ Put it to a Vote: "Let the current students and faculty vote. Majority rules."',
                    th: '🗳️ ให้โหวต: "ให้นักเรียนปัจจุบันและบุคลากรโหวต เสียงข้างมากตัดสิน"',
                    zh: '🗳️ 投票表决："让现在的学生和教职员工投票。少数服从多数。"'
                },
                consequence: {
                    en: '📉 Tyranny of the Majority. The white majority votes to keep it. Minority students feel marginalized and unheard. You abdicated your leadership.',
                    th: '📉 เผด็จการเสียงข้างมาก คนส่วนใหญ่โหวตให้เก็บไว้ นักเรียนกลุ่มน้อยรู้สึกถูกกีดกันและไม่มีใครฟัง คุณละทิ้งความเป็นผู้นำ',
                    zh: '📉 多数人的暴政。白人多数投票保留它。少数族裔学生感到被边缘化和被忽视。你放弃了你的领导权。'
                },
                stats: { competence: 25, ethics: 20, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'eadm_031',
        text: {
            en: '🧬 The Textbook War: A conservative school board member demands that warning stickers reading "Evolution is a Theory, Not a Fact" be placed on all biology textbooks.',
            th: '🧬 สงครามหนังสือเรียน: สมาชิกบอร์ดหัวอนุรักษ์นิยมเรียกร้องให้ติดสติกเกอร์คำเตือนว่า "วิวัฒนาการเป็นเพียงทฤษฎี ไม่ใช่ข้อเท็จจริง" บนหนังสือเรียนชีววิทยาทุกเล่ม',
            zh: '🧬 教科书之战：一位保守派校董会成员要求在所有生物教科书上贴上写有"进化论是理论，而非事实"的警告贴纸。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔬 Fight for Science: "Absolutely not. Evolution is the cornerstone of modern biology. I will not undermine our science curriculum."',
                    th: '🔬 สู้เพื่อวิทยาศาสตร์: "ไม่ได้เด็ดขาด วิวัฒนาการเป็นรากฐานของชีววิทยาสมัยใหม่ ฉันจะไม่บ่อนทำลายหลักสูตรวิทยาศาสตร์ของเรา"',
                    zh: '🔬 为科学而战："绝对不行。进化论是现代生物学的基石。我不会破坏我们的科学课程。"'
                },
                consequence: {
                    en: '🛡️ Integrity Preserved, Job Endangered. Science teachers applaud you, but the board member starts a campaign to have you removed.',
                    th: '🛡️ รักษาความสมบูรณ์ เสี่ยงตกงาน ครูวิทยาศาสตร์ปรบมือให้ แต่สมาชิกบอร์ดเริ่มแคมเปญเพื่อปลดคุณ',
                    zh: '🛡️ 保持完整性，工作受威胁。科学老师为你鼓掌，但董事会成员发起了一场罢免你的运动。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🏷️ Paste the Stickers: "If it keeps the funding flowing and the board happy, just paste the stickers. Kids ignore them anyway."',
                    th: '🏷️ แปะสติกเกอร์ไป: "ถ้ามันทำให้เงินไหลมาเทมาและบอร์ดแฮปปี้ ก็แปะๆ ไปเถอะ เด็กๆ ก็ไม่ได้สนใจอยู่แล้ว"',
                    zh: '🏷️ 贴上贴纸："如果这能保持资金流动并让董事会高兴，那就贴上贴纸吧。反正孩子们也会无视它们。"'
                },
                consequence: {
                    en: '📉 Academic Embarrassment. The story goes national. Top universities question the quality of your graduates. Science teachers resign in protest.',
                    th: '📉 ความอับอายทางวิชาการ เรื่องดังระดับชาติ มหาวิทยาลัยชั้นนำตั้งคำถามถึงคุณภาพเด็กจบใหม่ ครูวิทย์ลาออกประท้วง',
                    zh: '📉 学术尴尬。这个故事传遍全国。顶尖大学质疑你们毕业生的质量。科学老师辞职抗议。'
                },
                stats: { competence: 20, ethics: 15, leadership: 15, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The "Critical Thinking" Compromise: "Don\'t use stickers. Instead, add a unit on \'Debating Scientific Theories\' to teach students how to analyze evidence themselves."',
                    th: '🤝 ข้อตกลง "การคิดเชิงวิพากษ์": "อย่าใช้สติกเกอร์ แต่เพิ่มบทเรียน \'การโต้วาทีทฤษฎีทางวิทยาศาสตร์\' สอนให้เด็กวิเคราะห์หลักฐานด้วยตัวเอง"',
                    zh: '🤝 "批判性思维"妥协："不要使用贴纸。相反，增加一个\'辩论科学理论\'的单元，教学生如何自己分析证据。"'
                },
                consequence: {
                    en: '✅ Diplomatic Masterstroke. You appease the board by acknowledging the "debate" while actually strengthening scientific literacy.',
                    th: '✅ การทูตขั้นเทพ คุณเอาใจบอร์ดโดยยอมรับว่ามี "การถกเถียง" แต่จริงๆ แล้วกำลังเสริมสร้างความรู้ทางวิทยาศาสตร์',
                    zh: '✅ 外交妙招。你通过承认"辩论"来安抚董事会，同时实际上加强了科学素养。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '📝 Legal Shield: "Agree to the stickers only if the Board signs a legal waiver accepting 100% liability for any lawsuits from civil liberties groups."',
                    th: '📝 โล่ทางกฎหมาย: "ยอมให้แปะก็ต่อเมื่อบอร์ดเซ็นสละสิทธิ์รับผิดชอบ 100% หากมีการฟ้องร้องจากกลุ่มสิทธิพลเมือง"',
                    zh: '📝 法律护盾："只有在董事会签署法律豁免书，承担来自公民自由团体诉讼的100%责任时，才同意贴贴纸。"'
                },
                consequence: {
                    en: '⚠️ Bureaucratic Block. The board backs down, afraid of the legal risk. You won by using their own weapon: lawyers.',
                    th: '⚠️ การบล็อกด้วยระบบราชการ บอร์ดถอยเพราะกลัวความเสี่ยงทางกฎหมาย คุณชนะด้วยอาวุธของพวกเขาเอง: ทนายความ',
                    zh: '⚠️ 官僚阻碍。董事会因害怕法律风险而退缩。你用他们自己的武器赢了：律师。'
                },
                stats: { competence: 30, ethics: 25, leadership: 25, innovation: 10 }
            }
        ]
    },
    {
        id: 'eadm_032',
        text: {
            en: '📱 The TikTok Teacher: A new 23-year-old math teacher has 2 million followers. Her content is fun and engages students, but she frequently films dances with students during class time.',
            th: '📱 ครู TikTok: ครูคณิตคนใหม่วัย 23 มีผู้ติดตาม 2 ล้าน คอนเทนต์เธอสนุกและดึงดูดนักเรียน แต่เธอชอบถ่ายเต้นกับเด็กในเวลาเรียนบ่อยๆ',
            zh: '📱 TikTok老师：一位23岁的新数学老师拥有200万粉丝。她的内容很有趣且吸引学生，但她经常在这个上课时间与学生一起拍舞蹈视频。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Fire Her: "This is a place of learning, not a content studio. Filming students is a privacy violation. She\'s out."',
                    th: '🛑 ไล่ออก: "นี่คือที่เรียนหนังสือ ไม่ใช่สตูดิโอถ่ายงาน การถ่ายนักเรียนละเมิดความเป็นส่วนตัว เชิญออก"',
                    zh: '🛑 开除她："这是学习的地方，不是内容工作室。拍摄学生侵犯隐私。她被开除了。"'
                },
                consequence: {
                    en: '🤖 Generation Gap. Students revolt. You are painted as a "boomer" who hates fun. Morale plummets.',
                    th: '🤖 ช่องว่างระหว่างวัย นักเรียนประท้วง คุณถูกมองว่าเป็น "บูมเมอร์" ที่เกลียดความสนุก ขวัญกำลังใจดิ่งลงเหว',
                    zh: '🤖 代沟。学生反抗。你被描绘成讨厌乐趣的"老古董"。士气暴跌。'
                },
                stats: { competence: 20, ethics: 20, leadership: 15, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '📢 Promote It: "This is free marketing! Make her the Digital Ambassador. Let\'s show the world how modern our school is."',
                    th: '📢 โปรโมทเลย: "นี่คือการตลาดฟรี! ตั้งเธอเป็นทูตดิจิทัลเลย ให้โลกเห็นว่าโรงเรียนเราทันสมัยแค่ไหน"',
                    zh: '📢 推广："这是免费营销！让她担任数字大使。让世界看看我们的学校有多现代。"'
                },
                consequence: {
                    en: '🚀 Enrollment Boom, Safety Risk. Enrollment spikes, but you are walking a legal tightrope. One slip-up on camera could ruin the district.',
                    th: '🚀 ยอดสมัครพุ่ง ความเสี่ยงภัย ยอดสมัครเรียนพุ่ง แต่คุณกำลังไต่ลวดหนามทางกฎหมาย พลาดหน้ากล้องทีเดียวอาจพังทั้งเขต',
                    zh: '🚀 入学率激增，安全风险。入学率飙升，但你在法律的钢丝上行走。镜头前的一次失误就可能毁掉整个学区。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Distinct Guidelines: "Keep the account, but no filming during instruction time, and every student in a video must have a signed media release form."',
                    th: '⚖️ กฎระเบียบชัดเจน: "เก็บแอคเคาท์ไว้ แต่ห้ามถ่ายตอนสอน และนักเรียนทุกคนในคลิปต้องมีใบยินยอมเซ็นชื่อ"',
                    zh: '⚖️ 明确准则："保留账户，但教学时间内不得拍摄，视频中的每个学生必须有签署的媒体发布表。"'
                },
                consequence: {
                    en: '✅ Professional Balance. The teacher agrees. You harness the engagement while covering your legal bases.',
                    th: '✅ สมดุลมืออาชีพ ครูตกลง คุณได้ประโยชน์จากความมีส่วนร่วมพร้อมกับป้องกันตัวเองทางกฎหมาย',
                    zh: '✅ 专业平衡。老师同意了。你在利用参与度的同时也有法律保障。'
                },
                stats: { competence: 45, ethics: 45, leadership: 45, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Ignore It: "As long as test scores are up, I don\'t care what she does. Plausible deniability."',
                    th: '🤷 เมินเฉย: "ตราบใดที่คะแนนสอบดี ฉันไม่สนหรอกว่าเธอทำอะไร ปฏิเสธความรับผิดชอบได้ถ้ามีเรื่อง"',
                    zh: '🤷 无视："只要考试成绩上升，我不在乎她做什么。推诿责任。"'
                },
                consequence: {
                    en: '💣 Ticking Time Bomb. Eventually, she accidentally posts something inappropriate. Without guidelines, it falls on you.',
                    th: '💣 ระเบิดเวลา ในที่สุดเธอก็เผลอโพสต์อะไรไม่เหมาะสม โดยไม่มีกฎระเบียบ ความผิดมาตกที่คุณ',
                    zh: '💣 定时炸弹。最终，她不小心发布了不适当的内容。没有指导方针，责任全在你。'
                },
                stats: { competence: 30, ethics: 25, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'eadm_033',
        text: {
            en: '🏫 Asbestos Discovery: Routine maintenance uncovers exposed asbestos in the elementary gym ceiling. Removal will cost $2 million—money you simply do not have.',
            th: '🏫 เจอแร่ใยหิน: การซ่อมบำรุงปกติเจอแร่ใยหินโผล่ที่เพดานโรงยิมประถม การเอาออกต้องใช้ 2 ล้าน—เงินที่คุณไม่มีทางมี',
            zh: '🏫 发现石棉：例行维护在小学体育馆天花板发现了裸露的石棉。移除将花费200万美元——你根本没有这笔钱。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚧 Seal and Monitor: "Encapsulate it. Build a false ceiling underneath. It\'s safe as long as it\'s not disturbed ($50k)."',
                    th: '🚧 ปิดผนึกและเฝ้าระวัง: "หุ้มมันไว้ สร้างเพดานหลอกข้างใต้ ปลอดภัยตราบใดที่ไม่มีใครไปยุ่ง (5 หมื่น)"',
                    zh: '🚧 密封并监控："将其封装。在下面建个假天花板。只要不被打扰就是安全的（5万美元）。"'
                },
                consequence: {
                    en: '📦 Safe Enough. The gym stays open. It\'s a legal solution, but parents whisper about you "hiding poison."',
                    th: '📦 ปลอดภัยพอ โรงยิมเปิดต่อ ถูกกฎหมายแต่ผู้ปกครองซุบซิบว่าคุณ "ซ่อนยาพิษ"',
                    zh: '📦 够安全。体育馆保持开放。这是一个合法的解决方案，但家长们私以此耳语说你"藏毒"。'
                },
                stats: { competence: 35, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '💸 Emergency Bond: "Close the gym. Call a state of emergency. Cannibalize the high school technology budget. Remove it NOW."',
                    th: '💸 งบฉุกเฉิน: "ปิดโรงยิม ประกาศสภาวะฉุกเฉิน โยกงบเทคโนโลยีมัธยมมาใช้ เอาออกเดี๋ยวนี้"',
                    zh: '💸 紧急债券："关闭体育馆。宣布紧急状态。挪用高中技术预算。立即移除。"'
                },
                consequence: {
                    en: '🛡️ Safety First, Tech Last. The asbestos is gone. But high schoolers are stuck with Windows 95 for another decade. Zero liability risk.',
                    th: '🛡️ ปลอดภัยก่อน เทคโนทีหลัง ใยหินหายไป แต่เด็กมัธยมต้องทนใช้ Windows 95 ไปอีกสิบปี ความเสี่ยงรับผิดเป็นศูนย์',
                    zh: '🛡️ 安全第一，技术最后。石棉没了。但高中生还得用Windows 95十年。零责任风险。'
                },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 Silence is Golden: "Don\'t log the report. It was never found. Patch the hole and pray."',
                    th: '🤫 นิ่งเสียตำลึงทอง: "อย่าลงบันทึกรายงาน ถือว่าไม่เคยเจอ อุดรูแล้วสวดมนต์เอา"',
                    zh: '🤫 沉默是金："不要记录报告。从未发现过。补好洞并祈祷。"'
                },
                consequence: {
                    en: '💀 Criminal Negligence. A maintenance worker gets sick years later. The cover-up is revealed. You go to prison.',
                    th: '💀 ประมาทเลินเล่ออาญา คนงานป่วยในหลายปีต่อมา การปกปิดถูกเปิดโปง คุณติดคุก',
                    zh: '💀 刑事过失。一名维修工人在数年后生病。掩盖被揭露。你进监狱。'
                },
                stats: { competence: 10, ethics: -50, leadership: -20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Media Blitz: "Alert the press. Show them the danger. Shame the state government into providing emergency disaster relief funds."',
                    th: '📢 โหมโรงสื่อ: "แจ้งนักข่าว ให้เห็นอันตราย กดดันรัฐบาลให้ส่งงบช่วยเหลือภัยพิบัติฉุกเฉิน"',
                    zh: '📢 媒体攻势："提醒媒体。向他们展示危险。羞辱州政府以提供紧急救灾资金。"'
                },
                consequence: {
                    en: '🎥 PR Gamble. The bad press hurts property values, but the Governor cuts a check to make you stop talking. The issue is fixed.',
                    th: '🎥 การเดิมพัน PR ข่าวเสียทำราคาบ้านตก แต่ผู้ว่าฯ เซ็นเช็คให้เพื่อให้คุณหยุดพูด ปัญหาจบ',
                    zh: '🎥 公关赌博。坏新闻损害了房产价值，但州长为了让你闭嘴开了支票。问题解决了。'
                },
                stats: { competence: 30, ethics: 40, leadership: 35, innovation: 30 }
            }
        ]
    },
    {
        id: 'eadm_034',
        text: {
            en: '🎓 The 95% Ultamatum: The state threatens to take over your district if graduation rates don\'t hit 95% this year. You are currently at 88%. Teachers are asking if they should "fudge" the numbers.',
            th: '🎓 คำขาด 95%: รัฐขู่ยึดเขตการศึกษาถ้าอัตราการจบไม่ถึง 95% ปีนี้ คุณอยู่ที่ 88% ครูถามว่าจะให้ "ปรุงแต่ง" ตัวเลขไหม',
            zh: '🎓 95%最后通牒：如果今年毕业率达不到95%，州政府威胁要接管你们的学区。目前是88%。老师们问是否应该"篡改"数字。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📈 Cook the Books: "Just get them across the stage. Pass everyone who is close. We can\'t survive a state takeover."',
                    th: '📈 ตกแต่งบัญชี: "แค่ให้พวกเขาจบๆ ไป ให้ผ่านทุกคนที่เกือบผ่าน เราไม่รอดแน่ถ้าโดนรัฐยึด"',
                    zh: '📈 做假账："只要让他们过关就行。让所有接近及格的人通过。我们无法在州接管下生存。"'
                },
                consequence: {
                    en: '📉 Scandal in Making. You hit 96%. But next year, whistleblowers reveal the grade inflation. Your degree becomes worthless paper.',
                    th: '📉 สร้างเรื่องฉาว คุณทำได้ 96% แต่ปีหน้าคนแฉเรื่องเกรดเฟ้อ ปริญญาของคุณกลายเป็นกระดาษไร้ค่า',
                    zh: '📉 酝酿丑闻。你达到了96%。但明年，举报人会揭露分数膨胀。你的学位变成了废纸。'
                },
                stats: { competence: 30, ethics: -20, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Hold the Line: "Standards matter more than statistics. If we fail, we fail with integrity. Do your jobs honestly."',
                    th: '🛑 ยึดมั่นมาตรฐาน: "มาตรฐานสำคัญกว่าสถิติ ถ้าเราตก เราก็ตกอย่างมีศักดิ์ศรี ทำหน้าที่อย่างซื่อสัตย์"',
                    zh: '🛑 坚守底线："标准比统计数据更重要。如果我们失败，我们要有尊严地失败。诚实地做你们的工作。"'
                },
                consequence: {
                    en: '🛡️ Honorable Defeat. You hit 89%. The state sends an oversight committee, but they are impressed by your rigor and decide to help, not replace you.',
                    th: '🛡️ ความพ่ายแพ้อย่างมีเกียรติ ได้ 89% รัฐส่งกรรมการมาคุม แต่เขาประทับใจความเข้มแข็งของคุณและตัดสินใจช่วย ไม่ใช่มาแทน',
                    zh: '🛡️ 光荣的失败。你达到了89%。州政府派了一个监督委员会，但他们对你的严谨印象深刻，决定帮助而不是取代你。'
                },
                stats: { competence: 35, ethics: 50, leadership: 25, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🆘 Weekend Recovery Blitz: "Mandatory Saturday school and evening make-up sessions for all at-risk seniors. Pay teachers double overtime."',
                    th: '🆘 ปฏิบัติการกู้ชีพวันหยุด: "บังคับเรียนวันเสาร์และค่ำเพื่อซ่อมเกรดเด็กปีสุดท้ายที่เสี่ยง จ่ายโอทีครูสองเท่า"',
                    zh: '🆘 周末恢复突击："针对所有高风险毕业生强制进行周六学校和晚间补习。付给老师双倍加班费。"'
                },
                consequence: {
                    en: '💻 Hard Earned Victory. You scrape by with 95.1%. Teachers are exhausted and the budget is busted, but the students actually did the work.',
                    th: '💻 ชัยชนะที่ได้มายากลำบาก ผ่านมาได้ 95.1% ครูเหนื่อยโฮกและงบพังยับ แต่นักเรียนได้ทำงานส่งจริงๆ',
                    zh: '💻 来之不易的胜利。你勉强达到了95.1%。老师们筋疲力尽，预算爆表，但学生们确实完成了工作。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Lower the Requirements: "Emergency petition to the board to lower the credit requirement for this cohort due to \'post-pandemic learning loss\'."',
                    th: '📉 ลดเกณฑ์: "ยื่นคำร้องฉุกเฉินต่อบอร์ดขอลดหน่วยกิตจบการศึกษาสำหรับรุ่นนี้เนื่องจาก \'การเรียนถดถอยหลังโควิด\'"',
                    zh: '📉 降低要求："向董事会紧急请愿，以\'大流行后学习损失\'为由降低这一届的学分要求。"'
                },
                consequence: {
                    en: '📜 The Diploma Mill. You pass, but local employers stop hiring your graduates because they know the bar was lowered.',
                    th: '📜 โรงงานปั๊มใบปริญญา คุณผ่าน แต่นายจ้างท้องถิ่นเลิกจ้างเด็กจบใหม่ของคุณเพราะรู้ว่าลดมาตรฐาน',
                    zh: '📜 文凭工厂。你可以通过，但当地雇主不再雇用你的毕业生，因为他们知道门槛降低了。'
                },
                stats: { competence: 25, ethics: 10, leadership: 15, innovation: 0 }
            }
        ]
    },
    {
        id: 'eadm_035',
        text: {
            en: '🚌 Rolling Billboards: To close a budget gap, the transportation director suggests wrapping school buses in advertisements. A personal injury lawyer and a beer distributor offer the highest bids.',
            th: '🚌 ป้ายโฆษณาเคลื่อนที่: เพื่อปิดงบประมาณ ผอ.ขนส่งเสนอให้หุ้มรถบัสด้วยโฆษณา ทนายความคดีบาดเจ็บและตัวแทนจำหน่ายเบียร์เสนอราคาสูงสุด',
            zh: '🚌 滚动广告牌：为了填补预算缺口，交通主管建议在校车上投放广告。一位人身伤害律师和一家啤酒分销商出价最高。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Take the Highest Bidder: "Money is money. Wrap \'em up. If the beer company pays double, schools get double."',
                    th: '💰 ใครจ่ายสูงสุดเอาคนนั้น: "เงินคือเงิน ติดไปเลย ถ้าบริษัทเบียร์จ่ายสองเท่า โรงเรียนก็ได้สองเท่า"',
                    zh: '💰 接受最高出价者："钱就是钱。包起来。如果啤酒公司付双倍，学校就得双倍。"'
                },
                consequence: {
                    en: '🍺 PR Nightmare. "School Bus Beer Ads" make national headlines. You get the cash but look incredibly tacky and irresponsible.',
                    th: '🍺 ฝันร้าย PR "โฆษณาเบียร์บนรถโรงเรียน" ขึ้นหน้าหนึ่ง ได้เงินแต่ดูเสี่ยวและไร้ความรับผิดชอบสุดๆ',
                    zh: '🍺 公关噩梦。"校车啤酒广告"成为全国头条新闻。你拿到了钱，但看起来非常俗气和不负责任。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 No Ads Ever: "Our buses are not commercial spaces. We will find savings elsewhere. Maintain our dignity."',
                    th: '🚫 ห้ามโฆษณาเด็ดขาด: "รถบัสเราไม่ใช่พื้นที่โฆษณา เราจะไปประหยัดงบส่วนอื่น รักษาศักดิ์ศรีเราไว้"',
                    zh: '🚫 绝无广告："我们的巴士不是商业空间。我们会从其他地方节省开支。保持我们的尊严。"'
                },
                consequence: {
                    en: '🛡️ Dignity Maintained, Programs Cut. The buses look clean/yellow, but you have to fire three library aides to make up the deficit.',
                    th: '🛡️ รักษาศักดิ์ศรี ตัดงบส่วนอื่น รถบัสดูสะอาด/เหลือง แต่คุณต้องไล่ผู้ช่วยห้องสมุด 3 คนออกเพื่อชดเชย',
                    zh: '🛡️ 尊严得以保持，项目被削减。巴士看起来很干净/黄色，但你不得不解雇三名图书馆助理来弥补赤字。'
                },
                stats: { competence: 35, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '👶 Kid-Safe Sponsors Only: "Allow ads, but vet them strictly. Local tutoring centers, pediatricians, and museums only. Reject the lawyer and beer."',
                    th: '👶 เฉพาะสอนเซอร์เด็ก: "ให้มีโฆษณาได้ แต่คัดเข้ม เฉพาะกวดวิชา หมอเด็ก และพิพิธภัณฑ์ ปัดทนายกับเบียร์ทิ้ง"',
                    zh: '👶 仅限儿童安全赞助商："允许广告，但要严格审查。仅限当地辅导中心、儿科医生和博物馆。拒绝律师和啤酒。"'
                },
                consequence: {
                    en: '✅ Reasonable Compromise. You raise half the money of the top bid, but keep your soul. The community accepts it.',
                    th: '✅ การประนีประนอมที่มีเหตุผล ได้เงินครึ่งเดียวจากยอดสูงสุด แต่รักษาจิตวิญญาณ ชุมชนยอมรับได้',
                    zh: '✅ 合理妥协。你筹集了最高出价的一半资金，但保住了你的灵魂。社区接受了。'
                },
                stats: { competence: 40, ethics: 35, leadership: 35, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🎨 Student Art Showcase: "Sell \'sponsorships\' to local businesses to display student artwork on buses, with a small logo for the donor."',
                    th: '🎨 โชว์รูมศิลปะนักเรียน: "ขาย \'สปอนเซอร์\' ให้ธุรกิจท้องถิ่นเพื่อแสดงงานศิลปะนักเรียนบนรถบัส พร้อมโลโก้เล็กๆ ของผู้บริจาค"',
                    zh: '🎨 学生艺术展示："向当地企业出售\'赞助权\'，在巴士上展示学生艺术作品，并附上捐赠者的小标志。"'
                },
                consequence: {
                    en: '❤️ Cultural Win. The buses look beautiful "mobile galleries." Businesses love the positive association. It raises good money.',
                    th: '❤️ ชนะใจวัฒนธรรม รถบัสดูสวยงามเป็น "แกลเลอรี่เคลื่อนที่" ธุรกิจชอบภาพลักษณ์บวก หาเงินได้ดี',
                    zh: '❤️ 文化胜利。巴士看起来像美丽的"移动画廊"。企业喜欢这种积极的联想。这筹集了可观的资金。'
                },
                stats: { competence: 30, ethics: 45, leadership: 40, innovation: 40 }
            }
        ]
    },
    {
        id: 'eadm_036',
        text: {
            en: '🍽️ Cafeteria Wars: Students are boycotting the "gray mush" served in the cafeteria. A corporate catering giant offers to take over with "restaurant quality" meals and a $50k signing bonus, but it means firing the beloved local lunch ladies.',
            th: '🍽️ สงครามโรงอาหาร: นักเรียนคว่ำบาตร "ข้าวต้มกุ๊ยสีเทา" ที่โรงอาหาร บริษัทยักษ์ใหญ่เสนอเข้ามาทำแทนด้วยอาหาร "คุณภาพภัตตาคาร" และให้โบนัส 5 หมื่น แต่ต้องไล่ป้าๆ ที่ทำครัวมานานออก',
            zh: '🍽️ 食堂之战：学生们正在抵制食堂供应的"灰色糊状物"。一家大型餐饮公司提出以"餐厅质量"的饭菜和5万美元的签约奖金接管，但这意味着要解雇深受爱戴的当地午餐阿姨。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Sign the Contract: "Efficiency and nutrition come first. We need the money, and the kids need to eat. Apologize to the staff."',
                    th: '🤝 เซ็นสัญญา: "ประสิทธิภาพและโภชนาการต้องมาก่อน เราต้องการเงิน และเด็กๆ ต้องกิน ขอโทษพนักงานด้วย"',
                    zh: '🤝 签署合同："效率和营养第一。我们需要钱，孩子们需要吃饭。向员工道歉。"'
                },
                consequence: {
                    en: '🍔 Tasty but Cold. The food is better, but the cafeteria feels sterile. The community resents you for firing "Grandma Joan."',
                    th: '🍔 อร่อยแต่เย็นชา อาหารดีขึ้น แต่โรงอาหารดูไร้ชีวิตชีวา ชุมชนเกลียดที่คุณไล่ "ป้าโจน" ออก',
                    zh: '🍔 好吃但冷漠。食物变好了，但食堂感觉很贫瘠。社区因为你解雇了"琼奶奶"而怨恨你。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '👩‍🍳 Revamp Locally: "Keep the staff but send them to culinary training. Increase the food budget by cutting landscaping costs."',
                    th: '👩‍🍳 ปรับปรุงกันเอง: "เก็บพนักงานไว้แต่ส่งไปฝึกทำอาหาร เพิ่มงบค่าอาหารโดยตัดงบจัดสวน"',
                    zh: '👩‍🍳 本地改造："留住员工，但送他们去接受烹饪培训。通过削减景观美化成本来增加食品预算。"'
                },
                consequence: {
                    en: '🍲 Home Cooked Hero. The food improves drastically. Morale soars. The grass outside is long, but the kids are happy.',
                    th: '🍲 ฮีโร่อาหารทำเอง อาหารดีขึ้นผิดหูผิดตา ขวัญกำลังใจพุ่ง หญ้าข้างนอกยาวเฟื้อย แต่เด็กๆ แฮปปี้',
                    zh: '🍲 家常菜英雄。食物有了极大的改善。士气高涨。外面的草长得很长，但孩子们很开心。'
                },
                stats: { competence: 35, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🥗 Farm-to-Table Student Program: "Turn the overgrown lot into a garden. Let the culinary students cook for the school under supervision."',
                    th: '🥗 โครงการปลูกเองกินเอง: "เปลี่ยนที่รกๆ เป็นสวนผัก ให้นักเรียนคหกรรมทำอาหารให้โรงเรียนกินโดยมีครูคุม"',
                    zh: '🥗 从农场到餐桌的学生项目："把杂草丛生的空地变成花园。让烹饪专业的学生在监督下为全校做饭。"'
                },
                consequence: {
                    en: '🌱 Chaos and Learning. It\'s messy and lunch is late sometimes, but students learn huge life skills. National press covers the initiative.',
                    th: '🌱 วุ่นวายแต่ได้เรียนรู้ มันเละเทะและข้าวเลทบ้าง แต่นักเรียนได้ทักษะชีวิตมหาศาล สื่อระดับชาติมาทำข่าว',
                    zh: '🌱 混乱与学习。虽然很乱，午餐有时会迟到，但学生们学到了巨大的生活技能。国家媒体报道了这一举措。'
                },
                stats: { competence: 30, ethics: 40, leadership: 35, innovation: 55 }
            },
            {
                id: 'D',
                text: {
                    en: '🌭 Food Trucks: "Invite local food trucks to rotate daily. The school takes a 10% cut of profits."',
                    th: '🌭 ฟู้ดทรัค: "ชวนฟู้ดทรัคท้องถิ่นมาขายสลับกัน โรงเรียนหัก 10% จากกำไร"',
                    zh: '🌭 餐车："邀请当地餐车每天轮流。学校从利润中抽取10%。"'
                },
                consequence: {
                    en: '🌮 Popularity Spike, Nutrition Dip. Kids love the tacos and burgers. Obesity rates rise, and parents complain about the cost.',
                    th: '🌮 ป๊อปพุ่ง โภชนาการดิ่ง เด็กชอบทาโก้กับเบอร์เกอร์ อัตราอ้วนพุ่ง พ่อแม่บ่นเรื่องแพง',
                    zh: '🌮 人气飙升，营养下降。孩子们喜欢炸玉米饼和汉堡。肥胖率上升，家长抱怨费用高。'
                },
                stats: { competence: 25, ethics: 15, leadership: 20, innovation: 40 }
            }
        ]
    },
    {
        id: 'eadm_037',
        text: {
            en: '📚 The "Divisive" Books: A powerful parent group submits a list of 50 library books to be banned, claiming they teach "critical race theory" and "inappropriate gender ideology."',
            th: '📚 หนังสือ "แตกแยก": กลุ่มผู้ปกครองทรงอิทธิพลยื่นรายชื่อหนังสือ 50 เล่มให้แบน โดยอ้างว่าสอน "ทฤษฎีสีผิววิพากษ์" และ "อุดมการณ์ทางเพศที่ไม่เหมาะสม"',
            zh: '📚 "那本"书：一个有影响力的家长团体提交了一份包含50本要被禁的图书馆书籍清单，声称这些书教授"批判性种族理论"和"不适当的性别意识形态"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Ban Them All: "I don\'t want political heat. Pull the books. Libraries should be neutral zones."',
                    th: '🚫 แบนให้หมด: "ฉันไม่อยากมีดราม่าการเมือง เอาหนังสือออกให้หมด ห้องสมุดต้องเป็นเขตเป็นกลาง"',
                    zh: '🚫 全部禁止："我不想要政治热度。把书撤下来。图书馆应该是中立区。"'
                },
                consequence: {
                    en: '🔥 Censorship Firestorm. The ACLU sues. Students stage a "read-in" protest. You are branded a coward by the academic community.',
                    th: '🔥 พายุการเซ็นเซอร์ ACLU ฟ้องร้อง นักเรียนประท้วงด้วยการนั่งอ่านหนังสือ คุณถูกตราหน้าว่าเป็นคนขี้ขลาดจากวงการวิชาการ',
                    zh: '🔥 审查风暴。美国公民自由联盟起诉。学生们举行"静坐阅读"抗议。你被学术界贴上了懦夫的标签。'
                },
                stats: { competence: 20, ethics: -10, leadership: 15, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Review Committee: "Follow procedure. Form a committee of teachers, parents, and librarians to review each challenged book individually."',
                    th: '⚖️ คณะกรรมการตรวจสอบ: "ทำตามขั้นตอน ตั้งกรรมการครู ผู้ปกครอง และบรรณารักษ์เพื่อพิจารณาหนังสือทีละเล่ม"',
                    zh: '⚖️ 审查委员会："遵循程序。组成一个由教师、家长和图书管理员组成的委员会，单独审查每本受质疑的书。"'
                },
                consequence: {
                    en: '✅ Bureaucratic Shield. It takes forever, angering the fast-action parents, but most books stay. You respected the process.',
                    th: '✅ โล่ระบบราชการ ใช้เวลานานมาก ทำให้ผู้ปกครองใจร้อนโกรธ แต่หนังสือส่วนใหญ่ยังอยู่ คุณเคารพกระบวนการ',
                    zh: '✅ 官僚护盾。这花了很长时间，激怒了想要快速行动的家长，但大多数书都保留了下来。你尊重了程序。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 15 }
            },
            {
                id: 'C',
                text: {
                    en: '📖 Freedom Section: "Keep the books, but move them to a special \'Perspective\' section requiring parental permission slips for check-out."',
                    th: '📖 โซนเสรีภาพ: "เก็บหนังสือไว้ แต่ย้ายไปโซนพิเศษ \'มุมมอง\' ที่ต้องมีใบอนุญาตผู้ปกครองถึงจะยืมได้"',
                    zh: '📖 自由区："保留这些书，但将它们移到特殊的\'视角\'区，借阅需要家长许可单。"'
                },
                consequence: {
                    en: '🤝 Unhappy Medium. Librarians hate the gatekeeping; parents think it\'s still too accessible. But you avoid lawsuits.',
                    th: '🤝 ทางสายกลางที่ไม่มีใครชอบ บรรณารักษ์เกลียดการกีดกัน ผู้ปกครองคิดว่ามันยังเข้าถึงง่ายไป แต่คุณเลี่ยงการฟ้องร้องได้',
                    zh: '🤝 不愉快的中间派。图书管理员讨厌这种把关；家长认为仍然太容易获取。但你避免了诉讼。'
                },
                stats: { competence: 35, ethics: 30, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ Defend Intellectual Freedom: "Publicly refuse. \'A library offers windows to the world, not mirrors of your own living room.\' Keep them on the shelves."',
                    th: '🗣️ ปกป้องเสรีภาพทางปัญญา: "ปฏิเสธต่อหน้าธารกำนัล \'ห้องสมุดคือหน้าต่างสู่โลกกว้าง ไม่ใช่กระจกเงาสะท้อนห้องนั่งเล่นของคุณ\' เก็บไว้บนชั้นต่อไป"',
                    zh: '🗣️ 捍卫知识自由："公开拒绝。\'图书馆提供通向世界的窗户，而不是你自己客厅的镜子。\'把它们留在书架上。"'
                },
                consequence: {
                    en: '🏆 Hero of the First Amendment. Librarians and students rally behind you. The parents launch a recall effort, but your spine impresses the silent majority.',
                    th: '🏆 ฮีโร่แห่งการแก้ไขรัฐธรรมนูญ บรรณารักษ์และนักเรียนหนุนหลังคุณ ผู้ปกครองเริ่มล่ารายชื่อถอดถอน แต่ความกล้าของคุณประทับใจคนส่วนใหญ่ที่เงียบอยู่',
                    zh: '🏆 第一修正案的英雄。图书管理员和学生支持你。家长们发起了罢免行动，但你的骨气给沉默的大多数留下了深刻印象。'
                },
                stats: { competence: 40, ethics: 50, leadership: 55, innovation: 30 }
            }
        ]
    },
    {
        id: 'eadm_038',
        text: {
            en: '📢 The Walkout: Inflation is at 8%, but the budget allows for only a 2% raise. The Teachers\' Union votes to strike starting Monday—the first day of state testing.',
            th: '📢 การประท้วงหยุดงาน: เงินเฟ้อ 8% แต่งบให้ขึ้นเงินเดือนได้แค่ 2% สหภาพครูโหวตหยุดงานวันจันทร์นี้—วันแรกของการสอบระดับรัฐ',
            zh: '📢 罢工：通货膨胀率为8%，但预算只允许加薪2%。教师工会投票决定从周一开始罢工——这是州因考试的第一天。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Find the Money: "Cave to demands. Slash the Arts, Music, and Sports budgets by 50% to fund the raises. We need teachers in classrooms."',
                    th: '💰 หาเงินมาให้ได้: "ยอมตามคำขอ หั่นงบศิลปะ ดนตรี และกีฬา 50% มาโปะเงินเดือน เราต้องมีครูในห้องเรียน"',
                    zh: '💰 找钱："屈服于要求。将艺术、音乐和体育预算削减50%以资助加薪。我们需要老师在教室里。"'
                },
                consequence: {
                    en: '📉 Joyless School. The teachers are back, but the school is a shell. Students are bored and disengaged without programs.',
                    th: '📉 โรงเรียนไร้สุข ครูผ่อนคลาย แต่โรงเรียนกลวงโบ๋ นักเรียนเบื่อและไม่อยากเรียนเพราะไม่มีกิจกรรม',
                    zh: '📉 毫无乐趣的学校。老师们回来了，但学校只剩个空壳。没有项目，学生们感到无聊并不投入。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Hard Line: "Strike is illegal. Cancel classes. File an injunction forcing them back to work. Hire indefinite substitutes."',
                    th: '🛑 ไม้อ่อนข้อ: "การหยุดงานผิดกฎหมาย ยกเลิกการเรียน ยื่นฟ้องบังคับให้กลับมาทำงาน จ้างครูแทนแบบไม่มีกำหนด"',
                    zh: '🛑 强硬路线："罢工是非法的。取消课程。申请禁令强迫他们回去工作。雇佣无限期的代课老师。"'
                },
                consequence: {
                    en: '⚔️ War Zone. The strike ends, but the relationship is poisoned forever. Best teachers leave for neighboring districts.',
                    th: '⚔️ พื้นที่สงคราม การหยุดงานจบ แต่ความสัมพันธ์พังทลายถาวร ครูดีๆ ย้ายหนีไปเขตอื่นหมด',
                    zh: '⚔️ 战区。罢工结束了，但关系永远中毒了。最好的老师去了邻近的学区。'
                },
                stats: { competence: 40, ethics: 10, leadership: 15, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🪧 Join the Line: "Walk out WITH them. Send a message to the State Capitol that our funding model is broken. Risk your own job."',
                    th: '🪧 ร่วมวงด้วย: "เดินประท้วงไปกับพวกเขา ส่งหาสารถึงรัฐสภาว่าโมเดลการให้ทุนเรามันพัง เสี่ยงตำแหน่งตัวเอง"',
                    zh: '🪧 加入行列："与他们一起罢工。向州议会传达我们的资助模式已崩溃的信息。拿你自己的工作冒险。"'
                },
                consequence: {
                    en: '❤️ Legendary Solidarity. The state notices. Funding isn\'t fixed immediately, but morale is at an all-time high. You are "The People\'s Super."',
                    th: '❤️ ความสามัคคีระดับตำนาน รัฐเริ่มสนใจ เงินงบยังไม่มาทันที แต่ขวัญกำลังใจพุ่งสูงสุด คุณคือ "ซูเปอร์ฯ ของประชาชน"',
                    zh: '❤️ 传奇般的团结。州政府注意到了。资金没有立即解决，但士气空前高涨。你是"人民的总监"。'
                },
                stats: { competence: 25, ethics: 50, leadership: 60, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🗓️ Creative Perks: "I can\'t give you 8% cash, but I can offer a 4-day work week for students (5 for teachers seeking prep time) and better benefits."',
                    th: '🗓️ สวัสดิการสร้างสรรค์: "ฉันให้เงิน 8% ไม่ได้ แต่ให้เรียน 4 วันต่อสัปดาห์ได้ (5 วันสำหรับครูที่อยากเตรียมสอน) และสวัสดิการที่ดีขึ้น"',
                    zh: '🗓️ 创造性福利："我不能给你8%的现金，但我可以为学生提供每周4天的工作制（为寻求备课时间的老师提供5天）和更好的福利。"'
                },
                consequence: {
                    en: '✅ Innovative Compromise. Teachers accept the lifestyle improvement over the cash. Attraction for new hires increases.',
                    th: '✅ การประนีประนอมอย่างสร้างสรรค์ ครูยอมรับคุณภาพชีวิตที่ดีขึ้นแทนเงินสด การดึงดูดครูใหม่เพิ่มขึ้น',
                    zh: '✅ 创新的妥协。教师接受生活方式的改善而非现金。对新员工的吸引力增加。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 55 }
            }
        ]
    },
    {
        id: 'eadm_039',
        text: {
            en: '🤖 The AI Accusation: A history teacher gives "F" grades to 60 students, claiming their essays were AI-written based on a scanner with a 20% false-positive rate. Parents are furious.',
            th: '🤖 ข้อหา AI: ครูประวัติศาสตร์ให้เกรด "F" นักเรียน 60 คน อ้างว่าเรียงความเขียนโดย AI โดยใช้เครื่องสแกนที่มีอัตราผิดพลาด 20% ผู้ปกครองโกรธจัด',
            zh: '🤖 AI指控：一位历史老师给60名学生打了"F"，声称他们的论文是AI写的，依据是一个有20%误报率的扫描仪。家长们暴怒。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Back the Teacher: "Technology usage is cheating. If the scanner flagged it, they redo it. Teachers control the classroom."',
                    th: '🛡️ หนุนหลังครู: "การใช้เทคโนโลยีคือการโกง ถ้าเครื่องฟ้อง ก็ต้องทำใหม่ ครูเป็นคนคุมห้องเรียน"',
                    zh: '🛡️ 支持老师："使用技术就是作弊。如果扫描仪标记了，他们就重做。老师控制课堂。"'
                },
                consequence: {
                    en: '⚖️ Innocent Victims. Several innocent honor students lose scholarships. The district is sued for defamation.',
                    th: '⚖️ เหยื่อผู้บริสุทธิ์ นักเรียนเกียรตินิยมผู้บริสุทธิ์หลายคนเสียทุน เขตถูกฟ้องข้อหาหมิ่นประมาท',
                    zh: '⚖️ 无辜的受害者。几名无辜的优等生失去了奖学金。学区因诽谤被起诉。'
                },
                stats: { competence: 20, ethics: 15, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '📝 Oral Defense: "Suspend the grades. Implement 5-minute oral defenses for every student to prove they know their topic."',
                    th: '📝 สอบปากเปล่า: "ระงับเกรดไว้ก่อน ให้สอบสัมภาษณ์ปากเปล่าคนละ 5 นาทีเพื่อพิสูจน์ว่ารู้จริง"',
                    zh: '📝 口头辩护："暂停评分。对每个学生进行5分钟的口头辩护，以证明他们了解自己的主题。"'
                },
                consequence: {
                    en: '✅ Truth Prevails. It takes a week of time, but the cheaters are exposed and the innocent are vindicated. A fair, rigorous solution.',
                    th: '✅ ความจริงปรากฏ เสียเวลาไปหนึ่งสัปดาห์ แต่คนโกงถูกจับได้และคนบริสุทธิ์พ้นมลทิน เป็นทางออกที่ยุติธรรมและเข้มงวด',
                    zh: '✅ 真理获胜。这一周的时间虽然长，但作弊者被曝光，无辜者被证明清白。一个公平、严谨的解决方案。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '↩️ Overturn Everything: "The tool is unreliable. Pass everyone. Tell the teacher to stop using unverified tech."',
                    th: '↩️ กลับคำตัดสินทั้งหมด: "เครื่องมือเชื่อถือไม่ได้ ให้ผ่านทุกคน บอกครูให้เลิกใช้เทคโนโลยีที่ยังไม่พิสูจน์"',
                    zh: '↩️ 推翻一切："该工具不可靠。让所有人通过。告诉老师停止使用未经验证的技术。"'
                },
                consequence: {
                    en: '📉 Cheaters Prosper. The students learn that they can get away with anything if they complain loud enough. Teacher morale sinks.',
                    th: '📉 คนโกงเฟื่องฟู นักเรียนเรียนรู้ว่าทำอะไรก็ได้ถ้าโวยวายดังพอ ขวัญกำลังใจครูตกต่ำ',
                    zh: '📉 作弊者得逞。学生们学到了只要抱怨声够大，就可以逃脱任何惩罚。教师士气低落。'
                },
                stats: { competence: 25, ethics: 20, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🖊️ In-Class Writing Only: "Moving forward, all essays must be written by hand, in class, blue books only. Problem solved."',
                    th: '🖊️ เขียนในห้องเท่านั้น: "จากนี้ไป เรียงความต้องเขียนด้วยมือ ในห้องเรียน สมุดเล่มน้ำเงินเท่านั้น จบปัญหา"',
                    zh: '🖊️ 仅限课堂写作："以后，所有论文必须在课堂上手写，仅限蓝皮书。问题解决。"'
                },
                consequence: {
                    en: '🔙 Retrograde Success. It feels like 1990, but cheating drops to zero. Students actually learn to write again.',
                    th: '🔙 ความสำเร็จแบบย้อนยุค รู้สึกเหมือนปี 1990 แต่การโกงเหลือศูนย์ นักเรียนได้หัดเขียนจริงๆ อีกครั้ง',
                    zh: '🔙 倒退的成功。感觉像1990年，但作弊降为零。学生们真的又学会了写作。'
                },
                stats: { competence: 35, ethics: 40, leadership: 40, innovation: 10 }
            }
        ]
    },
    {
        id: 'eadm_040',
        text: {
            en: '🏈 The Hazing Ritual: Leaked video shows varsity players forcing freshmen to participate in humiliating "initiations." The championship-winning coach calls it "building toughness."',
            th: '🏈 พิธีกรรมรับน้อง: วิดีโอหลุดเผยนักกีฬารุ่นพี่บังคับเฟรชชี่ทำเรื่องน่าอายเพื่อ "รับน้อง" โค้ชแชมป์บอกว่า "สร้างความอดทน"',
            zh: '🏈 欺凌仪式：泄露的视频显示校队球员强迫新生参加羞辱性的"入会仪式"。冠军教练称之为"建立韧性"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔨 Zero Tolerance: "Fire the coach immediately. Cancel the rest of the football season. This ends TODAY."',
                    th: '🔨 ไม่ยอมรับเด็ดขาด: "ไล่โค้ชออกทันที ยกเลิกฤดูกาลแข่งที่เหลือ เรื่องนี้จบวันนี้"',
                    zh: '🔨 零容忍："立即开除教练。取消剩下的橄榄球赛季。这一切今天结束。"'
                },
                consequence: {
                    en: '💣 Nuclear Option. The town hates you. You receive death threats. But hazing is permanently eradicated from the district culture.',
                    th: '💣 ระเบิดนิวเคลียร์ เมืองเกลียดคุณ คุณได้รับคำขู่ฆ่า แต่การรับน้องรุนแรงถูกกำจัดออกจากวัฒนธรรมเขตถาวร',
                    zh: '💣 核选项。镇上的人恨你。你收到死亡威胁。但欺凌行为从学区文化中被永久根除。'
                },
                stats: { competence: 35, ethics: 55, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Suspensions: "Suspend the players involved for 3 games. Put the coach on probation. Keep the season alive."',
                    th: '⚖️ พักการเรียน: "พักการเรียนนักเรียนที่เกี่ยวข้อง 3 เกม ภาคทัณฑ์โค้ช ให้ฤดูกาลแข่งดำเนินต่อ"',
                    zh: '⚖️ 停赛："对涉事球员停赛3场。对教练进行留以此察看。保留赛季。"'
                },
                consequence: {
                    en: '🩹 Weak Discipline. The team still makes playoffs. The behavior goes underground but doesn\'t stop. You look weak.',
                    th: '🩹 วินัยอ่อนแอ ทีมยังได้เข้าเพลย์ออฟ พฤติกรรมหลบลงใต้ดินแต่ไม่หยุด คุณดูอ่อนแอ',
                    zh: '🩹 纪律涣散。球队仍然进入了季后赛。这种行为转入地下但并未停止。你看起来很软弱。'
                },
                stats: { competence: 30, ethics: 25, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Restorative Justice: "Mandatory counseling for the team. Senior players must lead anti-bullying workshops for middle schoolers."',
                    th: '🤝 ความยุติธรรมเชิงสมานฉันท์: "บังคับให้คำปรึกษาทีม รุ่นพี่ต้องนำเวิร์กช็อปต่อต้านการกลั่นแกล้งให้เด็กมัธยมต้น"',
                    zh: '🤝 恢复性正义："对团队进行强制咨询。高年级球员必须为初中生主持反欺凌研讨会。"'
                },
                consequence: {
                    en: '🧠 Culture Shift. It takes time, but the players actually learn empathy. The coach eventually quits, unable to adapt.',
                    th: '🧠 เปลี่ยนวัฒนธรรม ใช้เวลา แต่นักเรียนได้เรียนรู้ความเห็นอกเห็นใจจริงๆ โค้ชลาออกในที่สุดเพราะปรับตัวไม่ได้',
                    zh: '🧠 文化转变。这需要时间，但球员们真的学会了同理心。教练最终因为无法适应而辞职。'
                },
                stats: { competence: 40, ethics: 45, leadership: 45, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🙈 Cover Up: "Handle it \'internally.\' No press releases. Let the coach handle discipline. We need that championship."',
                    th: '🙈 ปกปิดข้อมูล: "จัดการวงใน ห้ามออกข่าว ให้โค้ชจัดการเรื่องวินัย เราต้องการแชมป์"',
                    zh: '🙈 掩盖："\'内部\'处理。不发新闻稿。让教理纪律。我们需要那个冠军。"'
                },
                consequence: {
                    en: '💀 Scandal Detonation. A second, worse video leaks a month later. You are fired for negligence and cover-up.',
                    th: '💀 เรื่องฉาวระเบิด วิดีโอที่สองที่แย่กว่าหลุดมาเดือนหน้า คุณถูกไล่ออกฐานละเลยและปกปิด',
                    zh: '💀 丑闻引爆。一个月后，第二个更糟糕的视频泄露。你因疏忽和掩盖被解雇。'
                },
                stats: { competence: 10, ethics: -50, leadership: -10, innovation: 0 }
            }
        ]
    },
    {
        id: 'eadm_041',
        text: {
            en: '🌪️ Tornado Relief Shelter: A neighboring town has been devastated by a tornado. The Red Cross asks to use your high school gym as a long-term shelter for 300 displaced families, but it will cancel all indoor sports and PE for the season.',
            th: '🌪️ ศูนย์พักพิงหลบภัยพายุทอร์นาโด: เมืองข้างเคียงถูกพายุทอร์นาโดถล่มราบ สภากาชาดขอใช้โรงยิมมัธยมของคุณเป็นที่พักพิงระยะยาวสำหรับ 300 ครอบครัว แต่จะต้องยกเลิกกีฬาทุกชนิดและการเรียนพละในร่มตลอดฤดูกาล',
            zh: '🌪️ 龙卷风救灾避难所：邻近的一个城镇被龙卷风摧毁。红十字会要求使用你的高中体育馆作为300个流离失所家庭的长期避难所，但这将取消本赛季的所有室内运动和体育课。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏠 Open the Doors: "Cancel the sports. People lost their homes. We are a community hub first, a sports center second."',
                    th: '🏠 เปิดประตูรับ: "ยกเลิกกีฬาไปเลย คนเขาเสียบ้าน เราเป็นศูนย์รวมชุมชนก่อน แล้วค่อยเป็นศูนย์กีฬา"',
                    zh: '🏠 敞开大门：“取消体育活动。人们失去了家园。我们首先是一个社区中心，其次才是体育中心。”'
                },
                consequence: {
                    en: '❤️ Compassionate Chaos. The school is chaotic and smells like soup, but the students learn a real lesson in empathy. The media loves you.',
                    th: '❤️ ความวุ่นวายที่เปี่ยมเมตตา โรงเรียนวุ่นวายและเหม็นกลิ่นแกง แต่นักเรียนได้เรียนรู้บทเรียนชีวิตจริงเรื่องความเห็นอกเห็นใจ สื่อรักคุณ',
                    zh: '❤️ 同情的混乱。学校一片混乱，闻起来像汤，但学生们学到了关于同理心的真正一课。媒体爱你。'
                },
                stats: { competence: 40, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Decline, Protect Schooling: "We can\'t disrupt education. Direct them to the convention center downtown. Our students need normalcy."',
                    th: '🛑 ปฏิเสธ ปกป้องการเรียน: "เราจะขัดขวางการศึกษาไม่ได้ ให้ไปใช้ศูนย์ประชุมในเมืองเถอะ นักเรียนเราต้องการความปกติ"',
                    zh: '🛑 拒绝，保护教育：“我们不能扰乱教育。引导他们去市中心的会议中心。我们的学生需要常态。”'
                },
                consequence: {
                    en: '❄️ Cold Efficiency. Parents are secretly relieved sports continue, but the neighboring town brands you as heartless.',
                    th: '❄️ ประสิทธิภาพที่เย็นชา ผู้ปกครองโล่งใจเงียบๆ ที่กีฬายังมีต่อ แต่เมืองข้างๆ ตราหน้าว่าคุณใจดำ',
                    zh: '❄️ 冷酷的效率。家长们暗自庆幸体育活动继续进行，但邻镇给你贴上了无情的标签。'
                },
                stats: { competence: 45, ethics: 10, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🏕️ Field Tents Proposal: "Don\'t use the gym. Set up military-grade heated tents on the football field. We lose the field, but keep the gym."',
                    th: '🏕️ ข้อเสนอเต็นท์สนาม: "ไม่ใช้โรงยิม ให้ตั้งเต็นท์ทหารติดฮีตเตอร์ที่สนามฟุตบอลแทน เราเสียสนามบอล แต่เก็บโรงยิมไว้"',
                    zh: '🏕️ 野战帐篷提议：“不要使用体育馆。在足球场上搭建军用级加热帐篷。我们失去了场地，但保留了体育馆。”'
                },
                consequence: {
                    en: '⚖️ Muddy Middle Ground. It\'s a logistical nightmare with mud everywhere, but you compromised effectively. No one is fully happy.',
                    th: '⚖️ ทางสายกลางเปื้อนโคลน มันเป็นฝันร้ายด้านการจัดการ โคลนเต็มไปหมด แต่คุณประนีประนอมได้ผล ไม่มีใครแฮปปี้สุดๆ',
                    zh: '⚖️ 泥泞的中间地带。这是一场后勤噩梦，到处都是泥，但你有效地进行了妥协。没有谁是完全满意的。'
                },
                stats: { competence: 40, ethics: 35, leadership: 35, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Fundraising Drive Instead: "We won\'t host, but I will authorize a district-wide fundraising drive and donate our bus fleet for transport."',
                    th: '💰 ระดมทุนแทน: "เราจะไม่รับพักพิง แต่ฉันจะอนุมัติการระดมทุนทั้งเขตและบริจาครถบัสเราเพื่อช่วยขนส่ง"',
                    zh: '💰 改为筹款活动：“我们不会提供场地，但我将批准在全区范围内开展筹款活动，并捐赠我们的巴士车队用于运输。”'
                },
                consequence: {
                    en: '💵 Checkbook Charity. You give money, not shelter. Ideally efficient, but it lacks the human touch.',
                    th: '💵 การกุศลด้วยเช็ค คุณให้เงิน ไม่ใช่ที่พัก มีประสิทธิภาพในอุดมคติ แต่ขาดสัมผัสแห่งความเป็นมนุษย์',
                    zh: '💵 支票簿慈善。你给的是钱，不是住所。理想情况下是高效的，但缺乏人情味。'
                },
                stats: { competence: 35, ethics: 25, leadership: 30, innovation: 15 }
            }
        ]
    },
    {
        id: 'eadm_042',
        text: {
            en: '💉 The Vaccine Mandate: A severe measles outbreak hits the state. Health officials recommend mandating vaccines for student attendance. 20% of your parents are fiercely anti-vax and threaten to pull their kids out.',
            th: '💉 คำสั่งวัคซีน: โรคหัดระบาดหนักในรัฐ เจ้าหน้าที่สาธารณสุขแนะนำให้บังคับฉีดวัคซีนก่อนเข้าเรียน ผู้ปกครอง 20% ต่อต้านรุนแรงและขู่จะเอาลูกออก',
            zh: '💉 疫苗强制令：严重的麻疹疫情袭击了该州。卫生官员建议强制接种疫苗才能入学。20%的家长强烈反对疫苗，并威胁要让孩子退学。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💉 Strict Mandate: "No shot, no school. Public health overrides personal preference. Enforce it immediately."',
                    th: '💉 บังคับเด็ดขาด: "ไม่ฉีด ไม่ต้องเรียน สาธารณสุขสำคัญกว่าความพอใจส่วนตัว บังคับใช้ทันที"',
                    zh: '💉 严格强制：“不打针，不上学。公共卫生凌驾于个人偏好之上。立即执行。”'
                },
                consequence: {
                    en: '🛡️ Safety with Consequences. Measles cases drop to zero. However, you lose funding due to the drop in enrollment from protesting parents.',
                    th: '🛡️ ปลอดภัยแต่มีผลตามมา เคสหัดเหลือศูนย์ แต่คุณเสียเงินอุดหนุนเพราะเด็กลาออกจากการประท้วง',
                    zh: '🛡️ 有后果的安全。麻疹病例降至零。然而，由于抗议家长的退学，你失去了资金。'
                },
                stats: { competence: 45, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤷 Voluntary Advisory: "We strongly encourage it, but we won\'t ban anyone. It\'s a parent\'s choice."',
                    th: '🤷 แนะนำแบบสมัครใจ: "เราแนะนำอย่างยิ่ง แต่จะไม่แบนใคร มันเป็นทางเลือกของผู้ปกครอง"',
                    zh: '🤷 自愿建议：“我们强烈鼓励这样做，但我们不会禁止任何人。这是家长的选择。”'
                },
                consequence: {
                    en: '🦠 School Outbreak. The outbreak spreads within the school. You are forced to close for two weeks anyway. Negligence lawsuits follow.',
                    th: '🦠 ระบาดในโรงเรียน โรคระบาดลามในโรงเรียน คุณจำใจต้องปิดเรียน 2 สัปดาห์อยู่ดี โดนฟ้องฐานละเลย',
                    zh: '🦠 学校爆发。疫情在学校内蔓延。无论如何你都被迫关闭两周。随之而来的是疏忽诉讼。'
                },
                stats: { competence: 15, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Remote Option: "Unvaccinated students must switch to our remote learning academy until the outbreak ends."',
                    th: '💻 ทางเลือกเรียนออนไลน์: "นักเรียนที่ไม่ฉีดวัคซีนต้องย้ายไปเรียนออนไลน์จนกว่าการระบาดจะจบ"',
                    zh: '💻 远程选项：“未接种疫苗的学生必须转到我们的远程学习学院，直到疫情结束。”'
                },
                consequence: {
                    en: '✅ Safe & Fair. You protect the physical school while respecting rights to education. It\'s expensive to run parallel tracks, though.',
                    th: '✅ ปลอดภัยและแฟร์ คุณปกป้องโรงเรียนพร้อมเคารพสิทธิการศึกษา แต่การรันสองระบบมันเปลืองงบ',
                    zh: '✅ 安全公平。你在保护实体学校的同时也尊重受教育权。不过，运行平行轨道的成本很高。'
                },
                stats: { competence: 40, ethics: 45, leadership: 40, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '😷 Mask & Test Protocol: "Unvaccinated students can come, but must wear N95 masks and submit weekly negative tests."',
                    th: '😷 มาตรการแมสก์และตรวจ: "คนไม่ฉีดมาเรียนได้ แต่ต้องใส่ N95 และส่งผลตรวจเป็นลบทุกสัปดาห์"',
                    zh: '😷 口罩和检测协议：“未接种疫苗的学生可以来，但必须佩戴N95口罩并提交每周的阴性检测结果。”'
                },
                consequence: {
                    en: '🩹 Enforcement Nightmare. Teachers become mask police. It\'s a weak compromise that annoys everyone.',
                    th: '🩹 ฝันร้ายการบังคับใช้ ครูต้องกลายเป็นตำรวจจับแมสก์ เป็นการประนีประนอมที่อ่อนแอและน่ารำคาญ',
                    zh: '🩹 执行噩梦。老师变成了口罩警察。这是一个惹恼所有人的软弱妥协。'
                },
                stats: { competence: 25, ethics: 25, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'eadm_043',
        text: {
            en: '🚽 The Bathroom Bill: The State Legislature passes a law banning students from using bathrooms adhering to their gender identity, conflicting with Federal Title IX protections. You are caught in the legal crossfire.',
            th: '🚽 กฎหมายห้องน้ำ: สภารัฐผ่านกฎหมายห้ามนักเรียนใช้ห้องน้ำตามอัตลักษณ์ทางเพศ ซึ่งขัดแย้งกับการคุ้มครอง Title IX ของรัฐบาลกลาง คุณติดอยู่ท่ามกลางเพลิงกฎหมาย',
            zh: '🚽 厕所法案：州立法机关通过一项法律，禁止学生使用符合其性别认同的厕所，这与联邦第九章的保护相冲突。你陷入了法律交火中。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏛️ Follow Federal Law: "Title IX is federal. We will ignore the state law to protect our students\' civil rights and federal funding."',
                    th: '🏛️ ตามกฎหมายรัฐบาลกลาง: "Title IX คือกฎหมายกลาง เราจะไม่สนกฎหมายรัฐเพื่อปกป้องสิทธิพลเมืองนักเรียนและงบจากส่วนกลาง"',
                    zh: '🏛️ 遵守联邦法律：“第九章是联邦法律。我们将无视州法律，以保护我们学生的公民权利和联邦资助。”'
                },
                consequence: {
                    en: '⚖️ Federal Funding Safe, State War. You keep your federal grants, but the Governor threatens to fire you.',
                    th: '⚖️ เงินกลางรอด เปิดศึกกับรัฐ คุณรักษางบกลางไว้ได้ แต่ผู้ว่าฯ ขู่จะไล่คุณออก',
                    zh: '⚖️ 联邦资金安全，州战争。你保住了联邦拨款，但州长威胁要解雇你。'
                },
                stats: { competence: 40, ethics: 45, leadership: 35, innovation: 25 }
            },
            {
                id: 'B',
                text: {
                    en: '🤠 Follow State Law: "We are a state entity. We must follow state law. Enforce biological sex bathroom use."',
                    th: '🤠 ตามกฎหมายรัฐ: "เราเป็นหน่วยงานรัฐ ต้องทำตามกฎหมายรัฐ บังคับใช้ห้องน้ำตามเพศกำเนิด"',
                    zh: '🤠 遵守州法律：“我们是州实体。我们必须遵守州法律。强制执行生理性别厕所使用。”'
                },
                consequence: {
                    en: '⚖️ Civil Rights Lawsuit. The ACLU sues you immediately. Student protests disrupt classes daily.',
                    th: '⚖️ คดีสิทธิพลเมือง ACLU ฟ้องคุณทันที นักเรียนประท้วงป่วนคลาสตลอด',
                    zh: '⚖️ 民权诉讼。美国公民自由联盟立即起诉你。学生抗议每天扰乱课堂。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚻 All-Gender Renovation: "Remodel ALL bathrooms to be single-stall, floor-to-ceiling privacy unisex pods. No more \'boys\' or \'girls\' rooms."',
                    th: '🚻 รีโนเวทแบบไม่จำกัดเพศ: "ทำห้องน้ำใหม่ทั้งหมดเป็นห้องเดี่ยว ผนังชนเพดาน ไม่แบ่งเพศ ไม่มีห้อง \'ชาย\' หรือ \'หญิง\' อีกต่อไป"',
                    zh: '🚻 全性别改造：“将所有浴室改造成单间、落地隐私的中性隔间。不再有‘男’或‘女’洗手间。”'
                },
                consequence: {
                    en: '🚀 Expensive Loophole. It costs millions, but technically complies with both laws while increasing privacy for everyone. Genius escape.',
                    th: '🚀 ช่องโหว่ราคาแพง ใช้เงินหลายล้าน แต่ทางเทคนิคคือถูกกฎหมายทั้งคู่แถมเพิ่มความเป็นส่วนตัวให้ทุกคน ทางรอดอัจฉริยะ',
                    zh: '🚀 昂贵的漏洞。这花费了数百万美元，但在技术上既符合两项法律，又增加了每个人的隐私。天才的逃脱。'
                },
                stats: { competence: 45, ethics: 45, leadership: 40, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Don\'t Ask, Don\'t Tell: "Remove all signage from bathroom doors. Stop monitoring who goes where. Plausible deniability."',
                    th: '🤐 ไม่ถาม ไม่บอก: "เอาป้ายหน้าห้องน้ำออกให้หมด เลิกจับตาดูว่าใครเข้าห้องไหน ปฏิเสธความรับผิดชอบได้"',
                    zh: '🤐 不问不说：“拆除浴室门上的所有标志。停止监控谁去了哪里。推诿责任。”'
                },
                consequence: {
                    en: '💣 Chaos and Unrest. It confuses everyone and solves nothing. Fights break out.',
                    th: '💣 วุ่นวายและไม่สงบ ทุกคนงงและแก้ปัญหาอะไรไม่ได้เลย เกิดการชกต่อยกัน',
                    zh: '💣 混乱和动荡。这让所有人都感到困惑，什么也解决不了。打架斗殴爆发。'
                },
                stats: { competence: 20, ethics: 25, leadership: 15, innovation: 0 }
            }
        ]
    },
    {
        id: 'eadm_044',
        text: {
            en: '🍎 Teacher Carry Policy: New state legislation allows districts to let teachers carry concealed firearms. Your insurance provider says premiums will triple if you opt-in.',
            th: '🍎 นโยบายพกปืนของครู: กฎหมายใหม่รัฐอนุญาตให้เขตการศึกษาให้ครูพกปืนซ่อนได้ บริษัทประกันบอกเบี้ยจะขึ้น 3 เท่าถ้าเอาด้วย',
            zh: '🍎 教师携带枪支政策：新的州立法允许学区让教师隐蔽携带枪支。你的保险提供商表示，如果你选择加入，保费将翻三倍。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Maintain Gun-Free Zone: "Schools are for books, not bullets. We opt-out. I\'d rather pay for books than liability insurance."',
                    th: '🚫 รักษาเขตปลอดปืน: "โรงเรียนมีไว้สำหรับหนังสือ ไม่ใช่กระสุน เราไม่เอา ฉันยอมจ่ายค่าหนังสือดีกว่าค่าประกันความรับผิด"',
                    zh: '🚫 维持无枪区：“学校是为了书本，而不是子弹。我们选择退出。我宁愿把钱花在书本上，也不愿花在责任保险上。”'
                },
                consequence: {
                    en: '🛡️ Safety Standard. Teachers feel safer from accidents. A faction of parents protests your "soft target" status.',
                    th: '🛡️ มาตรฐานความปลอดภัย ครูรู้สึกปลอดภัยจากอุบัติเหตุ กลุ่มผู้ปกครองประท้วงที่คุณทำโรงเรียนเป็น "เป้านิ่ง"',
                    zh: '🛡️ 安全标准。老师们觉得更安全，不会发生意外。一部分家长抗议你的“软目标”地位。'
                },
                stats: { competence: 40, ethics: 45, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔫 Arm the Staff: "Seconds count. Allow trained volunteers to carry. We will cut the art budget to pay the insurance premiums."',
                    th: '🔫 ติดอาวุธเจ้าหน้าที่: "ทุกวินาทีมีค่า อนุญาตให้อาสาสมัครที่ผ่านการฝึกพกได้ เราจะตัดงบศิลปะไปจ่ายค่าประกัน"',
                    zh: '🔫 武装员工：“分秒必争。允许受过训练的志愿者配枪。我们将削减艺术预算来支付保险费。”'
                },
                consequence: {
                    en: '💸 Financial & Moral Cost. An accidental discharge in the breakroom injures a microwave. Parents are terrified.',
                    th: '💸 ต้นทุนการเงินและศีลธรรม ปืนลั่นในห้องพักครูไมโครเวฟพัง ผู้ปกครองหวาดผวา',
                    zh: '💸 财务和道德成本。休息室的一次走火损坏了微波炉。家长们吓坏了。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '👮 Specialized Security Team: "No regular teachers. Only hire retired police officers as designated School Marshals."',
                    th: '👮 ทีมความปลอดภัยพิเศษ: "ไม่ให้ครูธรรมดาพก จ้างเฉพาะตำรวจเกษียณเป็นจอมพลโรงเรียนเท่านั้น"',
                    zh: '👮 专门的安全团队：“不要普通老师。只雇佣退休警察作为指定的学校法警。”'
                },
                consequence: {
                    en: '⚔️ Professional Perimeter. It\'s safer than amateur carriers. It creates a slight "police state" vibe, but it works.',
                    th: '⚔️ ขอบเขตมืออาชีพ ปลอดภัยกว่าให้มือสมัครเล่นพก บรรยากาศเหมือน "รัฐตำรวจ" หน่อยๆ แต่ได้ผล',
                    zh: '⚔️ 专业周边。这比业余携带者安全。它营造了一种轻微的“警察国家”氛围，但它是有效的。'
                },
                stats: { competence: 30, ethics: 25, leadership: 30, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🔒 Bio-metric Coffers: "Allow guns, but they must be locked in bio-metric safes in classrooms, not carried on person."',
                    th: '🔒 ตู้เซฟชีวภาพ: "ให้มีปืนได้ แต่ต้องล็อกในตู้เซฟสแกนนิ้วในห้องเรียน ห้ามพกติดตัว"',
                    zh: '🔒 生物识别保险箱：“允许枪支，但必须锁在教室的生物识别保险箱里，不能随身携带。”'
                },
                consequence: {
                    en: '📦 Useless Compromise. In an emergency, fumbling with a safe takes too long. Insurance still goes up.',
                    th: '📦 การประนีประนอมที่ไร้ค่า ในเหตุฉุกเฉิน มัวแต่ไขตู้มันช้าไป เบี้ยประกันก็ยังขึ้นอยู่ดี',
                    zh: '📦 无用的妥协。在紧急情况下，摆弄保险箱太费时间了。保险费还是上涨了。'
                },
                stats: { competence: 25, ethics: 20, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'eadm_045',
        text: {
            en: '🤖 The Automated Cleaning Crew: A robotics firm offers a fleet of janitorial bots for $500k/year less than your current custodial staff budget. It would mean firing 10 beloved local staff members.',
            th: '🤖 ทีมทำความสะอาดอัตโนมัติ: บริษัทหุ่นยนต์เสนอฝูงบอททำความสะอาดที่ถูกกว่างบภารโรงปัจจุบัน 5 แสนต่อปี แต่นั่นหมายถึงต้องไล่คนงานท้องถิ่นที่เป็นที่รักออก 10 คน',
            zh: '🤖 自动化清洁队：一家机器人公司提供一支清洁机器车队，费用比目前的保管人员预算少50万美元/年。这意味着要解雇10名深受爱戴的当地员工。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤖 Full Automation: "We have a deficit. $500k is 5 teacher salaries. Buy the bots. Business is business."',
                    th: '🤖 อัตโนมัติเต็มรูปแบบ: "เราขาดทุนอยู่ 5 แสนนี่จ้างครูได้ 5 คน ซื้อบอทซะ ธุรกิจก็คือธุรกิจ"',
                    zh: '🤖 全自动化：“我们有赤字。50万美元是5名老师的薪水。买机器人。公事公办。”'
                },
                consequence: {
                    en: '💰 Cold Cash. You save the money, but the hallways are soulless. Students vandalize the robots constantly.',
                    th: '💰 เงินสดเย็นชา คุณประหยัดเงิน แต่ทางเดินไร้จิตวิญญาณ นักเรียนแกล้งพังหุ่นยนต์ตลอดเวลา',
                    zh: '💰 冷冰冰的现金。你省了钱，但走廊里没有灵魂。学生们不断破坏机器人。'
                },
                stats: { competence: 40, ethics: 20, leadership: 25, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🧹 Keep the Humans: "Schools are about people. These staff members mentor kids in their own way. We find savings elsewhere."',
                    th: '🧹 เก็บคนไว้: "โรงเรียนคือเรื่องของคน พนักงานเหล่านี้ช่วยสอนเด็กในแบบของเขา เราไปหาเงินทางอื่น"',
                    zh: '🧹 留住人类：“学校是以人为本的。这些工作人员以他们自己的方式指导孩子。我们在别处寻找储蓄。”'
                },
                consequence: {
                    en: '❤️ High Morale, Low Funds. The community respects you. You have to endure slightly older textbooks to pay the wages.',
                    th: '❤️ กำลังใจสูง เงินต่ำ ชุมชนเคารพคุณ คุณต้องทนใช้ตำราเก่าหน่อยเพื่อจ่ายเงินเดือน',
                    zh: '❤️ 士气高涨，资金低。社区尊重你。为了支付工资，你不得不忍受稍旧的教科书。'
                },
                stats: { competence: 30, ethics: 45, leadership: 35, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Retrain & Hybridize: "Buy half the bots for night cleaning. Retrain the staff to be \'Robot Techs\' and Hall Monitors during the day."',
                    th: '🔄 ฝึกใหม่และผสมผสาน: "ซื้อบอทครึ่งหนึ่งไว้ทำความสะอาดกลางคืน ฝึกพนักงานให้เป็น \'ช่างหุ่นยนต์\' และคนคุมตึกตอนกลางวัน"',
                    zh: '🔄 再培训和混合：“买一半的机器人用于夜间清洁。重新培训员工在白天担任‘机器人技术员’和走廊监视员。”'
                },
                consequence: {
                    en: '🚀 Workforce Evolution. You save some money, keep jobs, and upskill your staff. A perfect managerial pivot.',
                    th: '🚀 วิวัฒนาการแรงงาน คุณประหยัดเงิน รักษาคน และเพิ่มทักษะให้พนักงาน การหมุนทางบริหารที่สมบูรณ์แบบ',
                    zh: '🚀 劳动力进化。你节省了一些钱，保住了工作，并提升了员工的技能。完美的管理枢轴。'
                },
                stats: { competence: 45, ethics: 50, leadership: 50, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '🌗 Natural Attrition: "Don\'t fire anyone. Buy bots only as people retire or quit. A slow transition."',
                    th: '🌗 ให้คนออกเองตามธรรมชาติ: "ไม่ต้องไล่ใครออก ซื้อบอทเมื่อมีคนเกษียณหรือลาออก ค่อยๆ เปลี่ยน"',
                    zh: '🌗 自然减员：“不要解雇任何人。只有在有人退休或辞职时才买机器人。缓慢的过渡。”'
                },
                consequence: {
                    en: '😐 Safe Stagnation. It takes too long to see savings. You are paying for redundant systems for years.',
                    th: '😐 ความชะงักงันที่ปลอดภัย กว่าจะเห็นเงินออมก็นานเกินไป คุณต้องจ่ายซ้ำซ้อนหลายปี',
                    zh: '😐 安全的停滞。花太长时间才能看到积蓄。你多年来一直在为冗余系统买单。'
                },
                stats: { competence: 35, ethics: 30, leadership: 30, innovation: 25 }
            }
        ]
    },
    {
        id: 'eadm_046',
        text: {
            en: '📅 Year-Round Schooling: Data shows "summer slide" hurts lower-income students most. You propose a year-round calendar (45 days on, 15 off). Parents rely on summer childcare and are furious.',
            th: '📅 การเรียนทั้งปี: ข้อมูลชี้ "ช่วงลืมความรู้ปิดเทอม" ทำร้ายเด็กยากจนที่สุด คุณเสนอปฏิทินเรียนทั้งปี (เรียน 45 หยุด 15) ผู้ปกครองที่พึ่งพาการเลี้ยงลูกช่วงซัมเมอร์โกรธจัด',
            zh: '📅 全年制学校：数据显示“暑期滑坡”对低收入学生的伤害最大。你提议实行全年制日历（上45天，休15天）。依赖暑期托儿服务的家长非常愤怒。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🗓️ Implement It: "The data is clear. We are here to educate, not to coordinate vacations. Switch the calendar."',
                    th: '🗓️ ทำเลย: "ข้อมูลชัดเจน เรามาเพื่อสอน ไม่ใช่มาจัดตารางพักร้อน เปลี่ยนปฏิทินซะ"',
                    zh: '🗓️ 实施它：“数据很清楚。我们在这里是为了教育，而不是为了协调假期。切换日历。”'
                },
                consequence: {
                    en: '📈 Academic Gain, Social Pain. Test scores rise for at-risk kids. But wealthy families pull students out to private schools.',
                    th: '📈 วิชาการขึ้น สังคมเจ็บ คะแนนสอบเด็กกลุ่มเสี่ยงสูงขึ้น แต่ครอบครัวรวยย้ายลูกไปโรงเรียนเอกชน',
                    zh: '📈 学术收益，社会痛苦。处于危险中的孩子的考试成绩上升。但富裕家庭将学生转到私立学校。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '❌ Cancel Proposal: "The community isn\'t ready. We keep the agrarian summer break. It\'s not worth the fight."',
                    th: '❌ ยกเลิกข้อเสนอ: "ชุมชนยังไม่พร้อม เก็บปิดเทอมหน้าร้อนแบบเกษตรกรรมไว้ ไม่คุ้มที่จะทะเลาะ"',
                    zh: '❌ 取消提议：“社区还没有准备好。我们保留农业暑假。不值得为此争吵。”'
                },
                consequence: {
                    en: '📉 Status Quo Failure. The "summer slide" continues. Your gap between rich and poor students widens.',
                    th: '📉 ล้มเหลวแบบเดิมๆ ปัญหาลืมความรู้ยังคงอยู่ ช่องว่างรวยจนในโรงเรียนกว้างขึ้น',
                    zh: '📉 现状失败。“暑期滑坡”继续。贫富学生之间的差距扩大。'
                },
                stats: { competence: 30, ethics: 25, leadership: 25, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🏖️ Robust Summer Program: "Keep the calendar, but offer free, fun, academic-heavy summer camps for all students."',
                    th: '🏖️ โปรแกรมซัมเมอร์เข้มข้น: "เก็บปืนทิทินเดิม แต่เปิดค่ายซัมเมอร์ฟรี สนุก และวิชาการแน่นสำหรับทุกคน"',
                    zh: '🏖️ 强大的暑期项目：“保留日历，但为所有学生提供免费、有趣、学术繁重的夏令营。”'
                },
                consequence: {
                    en: '✅ Expensive Fix. It works for those who attend. It destroys your budget surplus, but keeps parents happy.',
                    th: '✅ การแก้ปัญหาที่แพง ได้ผลสำหรับคนที่มา งบเหลือจ่ายหายเกลี้ยง แต่ผู้ปกครองแฮปปี้',
                    zh: '✅ 昂贵的修复。它对参加的人有效。这摧毁了你的预算盈余，但让家长们很高兴。'
                },
                stats: { competence: 35, ethics: 35, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Partial Adjustment: "Shorten summer by 2 weeks and add a fall and spring break. Small steps."',
                    th: '📉 ปรับบางส่วน: "ลดซัมเมอร์ลง 2 อาทิตย์ แล้วเพิ่มเบรกฤดูใบไม้ร่วงและผลิ ก้าวทีละนิด"',
                    zh: '📉 部分调整：“缩短两周暑假，增加秋假和春假。小步走。”'
                },
                consequence: {
                    en: '⚖️ Mild Compromise. It irritates everyone a little bit, but doesn\'t cause a revolt. Impact is minimal.',
                    th: '⚖️ การประนีประนอมเบาๆ ทุกคนรำคาญนิดหน่อย แต่ไม่ถึงกับประท้วง ผลกระทบน้อย',
                    zh: '⚖️ 温和的妥协。这让每个人都有点恼火，但不会引起反抗。影响微乎其微。'
                },
                stats: { competence: 40, ethics: 30, leadership: 35, innovation: 30 }
            }
        ]
    },
    {
        id: 'eadm_047',
        text: {
            en: '🧪 Lead Pipe Crisis: Tests reveal critical levels of lead in the water fountains of your oldest elementary school. Replacing the plumbing will cost $1 Million instantly.',
            th: '🧪 วิกฤตท่อตะกั่ว: ผลทดสอบเจอสารตะกั่วระดับวิกฤตในน้ำดื่มโรงเรียนประถมที่เก่าแก่ที่สุด การเปลี่ยนท่อจะใช้เงิน 1 ล้านทันที',
            zh: '🧪 铅管危机：测试显示你最古老的小学饮水机铅含量达到临界水平。更换管道将立即花费100万美元。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚧 Shut Off & Bottled Water: "Turn off the fountains. Switch to bottled water indefinitely. We can\'t afford pipes."',
                    th: '🚧 ปิดน้ำและใช้น้ำขวด: "ปิดก๊อกน้ำ เปลี่ยนไปใช้น้ำขวดไม่มีกำหนด เราไม่มีเงินเปลี่ยนท่อ"',
                    zh: '🚧 关闭并使用瓶装水：“关闭饮水机。无限期改用瓶装水。我们买不起管子。”'
                },
                consequence: {
                    en: '🥤 Environmental Disaster. The plastic waste is monumental. Parents worry about microplastics. But no lead poisoning.',
                    th: '🥤 หายนะสิ่งแวดล้อม ขยะพลาสติกมหาศาล ผู้ปกครองกังวลไมโครพลาสติก แต่ไม่มีพิษตะกั่ว',
                    zh: '🥤 环境灾难。塑料垃圾是巨大的。家长担心中微塑料。但没有铅中毒。'
                },
                stats: { competence: 30, ethics: 35, leadership: 25, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💸 Emergency Bond & Replace: "Health is non-negotiable. Issue an emergency bond. Replace every inch of pipe. Fix it right."',
                    th: '💸 พันธบัตรฉุกเฉินและเปลี่ยน: "สุขภาพต่อรองไม่ได้ ออกพันธบัตรฉุกเฉิน เปลี่ยนท่อทุกนิ้ว แก้ให้จบ"',
                    zh: '💸 紧急债券和更换：“健康是不可商量的。发行紧急债券。更换每一寸管道。彻底修好。”'
                },
                consequence: {
                    en: '🛡️ Costly Safety. The community moans about taxes, but trust in the school\'s safety skyrockets. You sleep well at night.',
                    th: '🛡️ ความปลอดภัยราคาแพง ชุมชนบ่นเรื่องภาษี แต่ความเชื่อมั่นความปลอดภัยพุ่งสูง คุณนอนหลับสบาย',
                    zh: '🛡️ 昂贵的安全。社区抱怨税收，但对学校安全的信任飙升。你晚上睡得很香。'
                },
                stats: { competence: 45, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 Install Filters: "Industrial point-of-use filters on every tap ($50k). It removes the lead without ripping open walls."',
                    th: '🤫 ติดไส้กรอง: "ติดฟิลเตอร์อุตสาหกรรมที่ก๊อกทุกจุด (5 หมื่น) กรองตะกั่วได้โดยไม่ต้องทุบกำแพง"',
                    zh: '🤫 安装过滤器：“在每个水龙头上安装工业即用型过滤器（5万美元）。它在不拆墙的情况下去除铅。”'
                },
                consequence: {
                    en: '🧪 Maintenance Risk. It works initially, but if a janitor forgets to change a filter one month, kids get poisoned. High liability.',
                    th: '🧪 ความเสี่ยงการบำรุงรักษา ตอนแรกได้ผล แต่ถ้าภารโรงลืมเปลี่ยนฟิลเตอร์เดือนนึง เด็กโดนพิษแน่ ความรับผิดสูง',
                    zh: '🧪 维护风险。最初有效，但如果看门人某个月忘记更换过滤器，孩子们就会中毒。高责任。'
                },
                stats: { competence: 35, ethics: 30, leadership: 30, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🏞️ Bring Your Own Water: "Decommission fountains. Tell parents to pack 2 liters of water with every child. Not our problem."',
                    th: '🏞️ พกน้ำมาเอง: "เลิกใช้ก๊อกน้ำ บอกผู้ปกครองให้ห่อน้ำ 2 ลิตรให้ลูกมา เลิกไม่ใช่ปัญหาเรา"',
                    zh: '🏞️ 自带水：“停用饮水机。告诉家长给每个孩子带2升水。不是我们的问题。”'
                },
                consequence: {
                    en: '😡 Dehydration and Rage. Kids pass out in gym class. Parents riot. You look incompetent.',
                    th: '😡 ขาดน้ำและเกรี้ยวกราด เด็กเป็นลมในคาบพละ พ่อแม่จลาจล คุณดูไร้ความสามารถ',
                    zh: '😡 脱水和愤怒。孩子们在体育课上晕倒。家长暴动。你看起来无能。'
                },
                stats: { competence: 20, ethics: 15, leadership: 15, innovation: 0 }
            }
        ]
    },
    {
        id: 'eadm_048',
        text: {
            en: '📵 The Total Phone Ban: The state mandates a "bell-to-bell" no cell phone policy. Teachers are expected to collect 30 phones every period, leading to conflicts and theft accusations.',
            th: '📵 แบนมือถือเบ็ดเสร็จ: รัฐสั่งนโยบายห้ามมือถือ "ตั้งแต่ระฆังแรกยันระฆังสุดท้าย" ครูต้องเก็บมือถือ 30 เครื่องทุกคาบ นำไปสู่ความขัดแย้งและข้อหาขโมยของ',
            zh: '📵 全面手机禁令：州政府强制执行“从上课铃到下课铃”的无手机政策。老师每节课要收30部手机，导致冲突和盗窃指控。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔒 Locking Pouches (Yondr): "Buy magnetic locking pouches. Students keep their phones, but can\'t use them. Cost: $100k."',
                    th: '🔒 ถุงล็อกแม่เหล็ก (Yondr): "ซื้อถุงล็อกแม่เหล็ก นักเรียนเก็บมือถือไว้กับตัวแต่ใช้ไม่ได้ ราคา: 1 แสน"',
                    zh: '🔒 锁袋（Yondr）：“购买磁性锁袋。学生保留手机，但无法使用。成本：10万美元。”'
                },
                consequence: {
                    en: '✅ Compliance without Liability. Teachers don\'t have to touch phones. Students pay attention. Money well spent.',
                    th: '✅ การปฏิบัติตามโดยไม่ต้องรับผิด ครูไม่ต้องแตะมือถือ นักเรียนตั้งใจเรียน เงินที่จ่ายไปคุ้มค่า',
                    zh: '✅ 合规且无责任。老师不必接触手机。学生专心听讲。钱花得值。'
                },
                stats: { competence: 40, ethics: 35, leadership: 40, innovation: 45 }
            },
            {
                id: 'B',
                text: {
                    en: '👀 Enforce via Discipline: "Teachers confiscate on sight. Three strikes = expulsion. Make them fear the rule."',
                    th: '👀 บังคับด้วยวินัย: "ครูยึดทันทีที่เห็น 3 ครั้ง = ไล่ออก ทำให้กลัวกฎ"',
                    zh: '👀 通过纪律强制执行：“老师一看到就没收。三次违规=开除。让他们由此规则。”'
                },
                consequence: {
                    en: '⚔️ Guerilla Warfare. Students hide phones in fake books. The vibe is adversarial and hostile.',
                    th: '⚔️ สงครามกองโจร นักเรียนซ่อนมือถือในหนังสือปลอม บรรยากาศเป็นศัตรูและเกลียดชัง',
                    zh: '⚔️ 游击战。学生把手机藏在假书里。气氛充满敌意和对抗。'
                },
                stats: { competence: 25, ethics: 20, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤷 Malicious Compliance: "Tell teachers to ask for phones, but if a student refuses, just document it and move on. Don\'t fight."',
                    th: '🤷 ทำตามแบบขอไปที: "บอกครูให้ขอมือถือ แต่ถ้านักเรียนไม่ให้ ก็แค่จดชื่อแล้วสอนต่อ อย่าไปสู้"',
                    zh: '🤷 恶意合规：“告诉老师索要手机，但如果学生拒绝，只需记录下来并继续。不要争吵。”'
                },
                consequence: {
                    en: '⚖️ Paper Tiger. The state fines you for lack of enforcement. Kids text openly.',
                    th: '⚖️ เสือกระดาษ รัฐปรับคุณฐานไม่บังคับใช้ เด็กนั่งส่งข้อความกันโจ่งแจ้ง',
                    zh: '⚖️ 纸老虎。州政府因缺乏执行力而罚款你。孩子们公开以此发短信。'
                },
                stats: { competence: 20, ethics: 15, leadership: 15, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🗑️ Phone Lockers at Entry: "Students verify phones into lockers at the front door. No phones in the building at all."',
                    th: '🗑️ ตู้ล็อกเกอร์หน้าประตู: "นักเรียนฝากมือถือเข้าล็อกเกอร์ที่หน้าปรตู ห้ามมีมือถือในตึกเด็ดขาด"',
                    zh: '🗑️ 入口处的手机储物柜：“学生在门口核实手机以此入储物柜。大楼里根本没有手机。”'
                },
                consequence: {
                    en: '😡 Bottleneck Crisis. Entry takes 45 minutes every morning. Parents scream about "safety" if they can\'t reach kids.',
                    th: '😡 วิกฤตคอขวด ตอนเช้าต้องรอเข้าแถว 45 นาที พ่อแม่โวยวายเรื่อง "ความปลอดภัย" ถ้าติดต่อลูกไม่ได้',
                    zh: '😡 瓶颈危机。每天早上入场需要45分钟。如果联系不到孩子，家长会大喊“安全”。'
                },
                stats: { competence: 30, ethics: 25, leadership: 25, innovation: 15 }
            }
        ]
    },
    {
        id: 'eadm_049',
        text: {
            en: '🥋 Security Contract: Your security contract is up. Parents want more protection after a nearby incident. You have three bids: a Private Contractor, the Local Police Department, or a Community "Dads on Duty" initiative.',
            th: '🥋 สัญญาความปลอดภัย: สัญญารปภ. หมดอายุ ผู้ปกครองต้องการการคุ้มครองเพิ่มหลังมีเหตุใกล้เคียง มี 3 เจ้าเสนอ: บริษัทเอกชน, สถานีตำรวจท้องถิ่น, หรือโครงการชุมชน "กลุ่มคุณพ่อเฝ้ายาม"',
            zh: '🥋 安全合同：你的安全合同到期了。在附近发生一起事件后，家长希望获得更多保护。你有三个投标：私人承包商、当地警察局或社区“值班爸爸”倡议。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏢 Private Firm: "Hire \'ShieldCorp\'. They look menacing and carry Tasers. It minimizes liability for the district."',
                    th: '🏢 บริษัทเอกชน: "จ้าง \'ShieldCorp\' ดูน่าเกรงขามและพกเครื่องช็อตไฟฟ้า ลดความรับผิดของเขต"',
                    zh: '🏢 私人公司：“雇佣‘盾牌公司’。他们看起来来势汹汹，携带泰瑟枪。这最大限度地减少了学区的责任。”'
                },
                consequence: {
                    en: '🤖 Mall Cop Vibes. They are expensive and largely ineffective. They spend most of the time on their phones.',
                    th: '🤖 ฟีลยามห้าง แพงและไร้ประสิทธิภาพ วันๆ เอาแต่เล่นมือถือ',
                    zh: '🤖 商场保安的感觉。他们很贵，而且基本上无效。他们大部分时间都在玩手机。'
                },
                stats: { competence: 30, ethics: 30, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '👮 Local Police (SROs): "Real cops with real guns. It sends a message of absolute order."',
                    th: '👮 ตำรวจท้องถิ่น (SROs): "ตำรวจจริง ปืนจริง ส่งสัญญาณถึงความมีระเบียบขั้นเด็ดขาด"',
                    zh: '👮 当地警察（驻校警）：“真警察配真枪。这发出了绝对秩序的信号。”'
                },
                consequence: {
                    en: '🚔 Pipeline to Prison. Arrests for minor fights skyrocket. Minority students feel targeted. The school feels like a jail.',
                    th: '🚔 ท่อส่งสู่คุก การจับกุมจากการทะเลาะเล็ๆ น้อยๆ พุ่งสูง นักเรียนส่วนน้อยรู้สึกถูกเพ่งเล็ง โรงเรียนเหมือนคุก',
                    zh: '🚔 通往监狱的管道。因小打小闹而被捕的人数激增。少数族裔学生感觉成了目标。学校感觉像监狱。'
                },
                stats: { competence: 35, ethics: 25, leadership: 25, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 "Dads on Duty": "Hire local fathers and community mentors. No guns, just vibes and de-escalation training."',
                    th: '🧠 "กลุ่มคุณพ่อเฝ้ายาม": "จ้างพ่อๆ ในท้องถิ่นและพี่เลี้ยงชุมชน ไม่มีปืน มีแค่บรรยากาศดีๆ และการฝึกเจรจาไกล่เกลี่ย"',
                    zh: '🧠 “值班爸爸”：“雇佣当地父亲和社区导师。没有枪，只有氛围和缓和冲突的培训。”'
                },
                consequence: {
                    en: '❤️ Community Win. Violence drops because kids respect the dads. It\'s cheap and builds massive goodwill.',
                    th: '❤️ ชัยชนะชุมชน ความรุนแรงลดลงเพราะเด็กเกรงใจพ่อๆ ราคาถูกและสร้างความปรารถนาดีมหาศาล',
                    zh: '❤️ 社区胜利。暴力下降，因为孩子们尊重这些爸爸。这很便宜，并且建立了巨大的善意。'
                },
                stats: { competence: 40, ethics: 45, leadership: 45, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🎥 Tech Surveillance Only: "No guards. Install AI face-recognition cameras everywhere. Automated alerts to police."',
                    th: '🎥 กล้องวงจรปิดไฮเทคเท่านั้น: "ไม่เอายาม ติดกล้อง AI จดจำใบหน้าทุกที่ แจ้งเตือนตำรวจอัตโนมัติ"',
                    zh: '🎥 仅限技术监控：“不要警卫。到处安装AI面部识别摄像头。自动向警察报警。”'
                },
                consequence: {
                    en: '👁️ Dystopian High. Privacy groups sue. The system flags innocent students constantly. It\'s a mess.',
                    th: '👁️ มัธยมดิสโทเปีย กลุ่มความเป็นส่วนตัวฟ้อง ระบบแจ้งเตือนผิดพลาดใส่นักเรียนบริสุทธิ์ตลอด เละเทะ',
                    zh: '👁️ 反乌托邦高中。隐私团体起诉。系统不断标记无辜的学生。这是一团糟。'
                },
                stats: { competence: 25, ethics: 20, leadership: 20, innovation: 35 }
            }
        ]
    },
    {
        id: 'eadm_050',
        text: {
            en: '🎓 Valedictorian Dispute: Two students are fighting for top spot. Student A has a 4.0 in easy classes. Student B has a 3.99 taking every AP physics and calculus class available. Student B\'s parents threaten to sue for "rigor discrimination."',
            th: '🎓 ศึกชิงที่ 1 ของรุ่น: นักเรียนสองคนแย่งที่ 1 นักเรียน A ได้ 4.0 ในวิชาง่ายๆ นักเรียน B ได้ 3.99 จากการลงวิชาฟิสิกส์และแคลคูลัสยากๆ ทั้งหมด พ่อแม่ B ขู่ฟ้องฐาน "กีดกันความยาก"',
            zh: '🎓 致辞生纠纷：两名学生正在争夺第一名。学生A在简单课程中获得4.0。学生B选修了所有AP物理和微积分课程，成绩为3.99。学生B的父母威胁要起诉“严谨性歧视”。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📊 Rules are Rules (Student A): "The handbook says Highest GPA wins. We cannot change the rules at the finish line. Student A wins."',
                    th: '📊 กฎคือกฎ (นักเรียน A): "คู่มือบอกว่าเกรดสูงสุดชนะ เราเปลี่ยนกฎตอนเข้าเส้นชัยไม่ได้ นักเรียน A ชนะ"',
                    zh: '📊 规则就是规则（学生A）：“手册上说GPA最高的获胜。我们不能在终点线改变规则。学生A获胜。”'
                },
                consequence: {
                    en: '🤖 Correct but Unfair. Student B is devastated. Top colleges question your school\'s ranking system.',
                    th: '🤖 ถูกต้องแต่ไม่แฟร์ นักเรียน B ใจสลาย มหาวิทยาลัยดังสงสัยระบบจัดอันดับโรงเรียนคุณ',
                    zh: '🤖 正确但不公平。学生B崩溃了。顶尖大学质疑你学校的排名系统。'
                },
                stats: { competence: 30, ethics: 25, leadership: 25, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🧠 Award Student B: "Use executive discretion. A 3.99 in AP classes is objectively superior to a 4.0 in Basket Weaving. B is Valedictorian."',
                    th: '🧠 มอบให้นักเรียน B: "ใช้ดุลยพินิจผู้บริหาร 3.99 ในวิชายากย่อมเหนือกว่า 4.0 ในวิชาสานตะกร้า B คือที่ 1"',
                    zh: '🧠 奖励学生B：“行使行政裁量权。AP课程的3.99客观上优于编篮子的4.0。B是致辞生。”'
                },
                consequence: {
                    en: '⚖️ Fairness Lawsuit. Student A\'s parents sue you for breach of contract. You win morally but lose legally.',
                    th: '⚖️ คดีความเป็นธรรม พ่อแม่ A ฟ้องคุณฐานผิดสัญญา คุณชนะทางธรรมแต่แพ้ทางกฎหมาย',
                    zh: '⚖️ 公平诉讼。学生A的父母起诉你违约。你在道德上赢了，但在法律上输了。'
                },
                stats: { competence: 35, ethics: 40, leadership: 35, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🎤 Co-Valedictorians: "Declare a tie. They both speak. Rewrite the handbook next year to use Weighted GPA."',
                    th: '🎤 ครองแชมป์ร่วม: "ประกาศเสมอ ให้พูดทั้งคู่ แก้กฎคู่มือปีหน้าให้ใช้เกรดถ่วงน้ำหนัก"',
                    zh: '🎤 联合致辞生：“宣布平局。两人都演讲。明年重写手册，使用加权GPA。”'
                },
                consequence: {
                    en: '✅ Diplomatic Success. It\'s a bit awkward on stage, but avoids litigation. The policy change fixes this forever.',
                    th: '✅ ความสำเร็จทางการทูต บนเวทีอาจดูเก้ๆ กังๆ หน่อยแต่เลี่ยงคดีได้ การแก้กฎจะจบปัญหานี้ถาวร',
                    zh: '✅ 外交成功。在舞台上有点尴尬，但避免了诉讼。政策变更永远解决了这个问题。'
                },
                stats: { competence: 45, ethics: 45, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🗳️ Let the Senior Class Vote: "This distinction is about representing the class. Let the seniors vote on who speaks."',
                    th: '🗳️ ให้รุ่นพี่โหวต: "ตำแหน่งนี้คือตัวแทนรุ่น ให้เด็กปีสุดท้ายโหวตว่าใครจะได้พูด"',
                    zh: '🗳️ 让毕业班投票：“这个荣誉是关于代表班级的。让毕业生投票决定谁演讲。”'
                },
                consequence: {
                    en: '🎉 Popularity Contest. Neither A nor B wins; the quarterback with a 2.5 GPA wins. It\'s a joke.',
                    th: '🎉 การประกวดความป๊อป A และ B ไม่ได้ทั้งคู่ แต่ควอเตอร์แบ็กเกรด 2.5 ชนะ ตลกแท้',
                    zh: '🎉 人气竞赛。A和B都没赢；GPA 2.5的四分卫赢了。这是个笑话。'
                },
                stats: { competence: 20, ethics: 20, leadership: 15, innovation: 10 }
            }
        ]
    }
];


