export const professorQuestions = [
    {
        id: 'prof_001',
        text: {
            en: '📝 Publish or Perish: You have a breakthrough in your research, but the data has a small inconsistency that would take 6 months to re-verify. A top-tier journal wants to publish it NOW for the annual special edition.',
            th: '📝 ตีพิมพ์หรือตายไป: คุณค้นพบสิ่งที่ก้าวกระโดดในงานวิจัย แต่ข้อมูลมีจุดที่ไม่สม่ำเสมอนิดหน่อยซึ่งต้องใช้เวลาอีก 6 เดือนในการตรวจสอบซ้ำ วารสารระดับท็อปต้องการตีพิมพ์ผลงานของคุณ "ตอนนี้" เพื่อให้ทันฉบับพิเศษประจำปี',
            zh: '📝 发表或是灭亡：你的研究取得了突破，但数据存在一处微小的不一致，需要花6个月时间重新验证。一家顶级期刊想在当下的年度特刊上发表它。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Publish Now: "It\'s a minor detail. The main conclusion is correct. This publication will secure my tenure. I\'ll correct it in a follow-up."',
                    th: '🚀 ตีพิมพ์เลย: "มันแค่รายละเอียดเล็กน้อย ข้อสรุปหลักยังถูกต้อง การตีพิมพ์นี้จะช่วยให้ฉันได้ตำแหน่งศาสตราจารย์ถาวร เดี๋ยวค่อยไปแก้ในงานฉบับหน้า"',
                    zh: '🚀 现在发表："这是一个微小的细节。主要结论是正确的。这次发表将确保我的终身教职。我将在后续研究中予以纠正。"'
                },
                consequence: {
                    en: '📉 Reputation Damage. Other researchers try to replicate your work and fail. You get tenure, but your name is associated with "sloppy science" for a decade.',
                    th: '📉 เสียชื่อเสียง นักวิจัยคนอื่นพยายามเลียนแบบงานคุณแต่ทำไม่สำเร็จ คุณได้ตำแหน่งถาวรมาจริง แต่ชื่อของคุณจะถูกตราหน้าว่าเป็น "วิทยาศาสตร์ลวกๆ" ไปอีกสิบปี',
                    zh: '📉 声誉受损。其他研究人员试图复制你的研究，但失败了。你获得了终身教职，但你的名字在十年内都与"草率的科学"联系在一起。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Wait and Verify: "Integrity is everything. I\'ll decline the special edition and re-run the experiments, even if it delays my career by a year."',
                    th: '🛑 รอและตรวจสอบ: "ความซื่อสัตย์คือทุกสิ่ง ฉันจะปฏิเสธฉบับพิเศษนั้นแล้วทำการตรวจสอบซ้ำ แม้ว่ามันจะทำให้ความก้าวหน้าในอาชีพช้าลงไปปีนึงก็ตาม"',
                    zh: '🛑 等待验证："诚信高于一切。我将拒绝参加特刊，重新进行实验，即使这意味着我的职业生涯会推迟一年。"'
                },
                consequence: {
                    en: '🛡️ Academic Gold Standard. Your paper is eventually published and becomes the definitive work in the field. You lose the "quick" tenure, but gain lifetime respect.',
                    th: '🛡️ มาตรฐานทองคำทางวิชาการ ในที่สุดงานคุณก็ได้ตีพิมพ์และกลายเป็นงานอ้างอิงหลักในวงการ คุณเสียโอกาสเลื่อนขั้น "แบบเร็ว" แต่ได้ความเคารพยกย่องไปตลอดชีวิต',
                    zh: '🛡️ 学术金准。你的论文最终发表，并成为该领域的权威著作。你失去了"快速"晋升终身教职的机会，但赢得了终身的尊重。'
                },
                stats: { competence: 60, ethics: 80, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Add a Disclaimer: "Publish now but include a detailed note about the inconsistency and call for more research. Transparency as a middle ground."',
                    th: '🤝 เพิ่มคำสงวนสิทธิ์: "ตีพิมพ์ตอนนี้แต่ใส่หมายเหตุโดยละเอียดเกี่ยวกับจุดที่ไม่สม่ำเสมอนั้น และระบุว่าต้องมีการวิจัยเพิ่มเติม ความโปร่งใสคือทางสายกลาง"',
                    zh: '🤝 增加免责声明："现在发表，但加入关于数据不一致的详细备注，并呼吁进行更多研究。将透明度作为折中方案。"'
                },
                consequence: {
                    en: '⚖️ Nuanced Success. The journal accepts the honesty. You are praised for your transparency. It doesn\'t have the same "wow" factor, but it\'s solid science.',
                    th: '⚖️ ความสำเร็จที่ลึกซึ้ง วารสารยอมรับในความซื่อสัตย์ คุณได้รับคำชมเรื่องความโปร่งใส แม้มันจะไม่ว้าวเท่าที่ควร แต่มันคืองานวิทยาศาสตร์ที่แน่นปึ้ก',
                    zh: '⚖️ 细微的成功。期刊接受了诚实。你因透明度而受到赞扬。虽然它没有同样的"震撼"效果，但它是可靠的科学。'
                },
                stats: { competence: 50, ethics: 60, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🧑‍🤝‍🧑 Collaborative Audit: "Invite my rival to co-author and help verify the data. Two names, half the glory, but double the speed and certainty."',
                    th: '🧑‍🤝‍🧑 การตรวจสอบร่วมกัน: "เชิญคู่แข่งมาร่วมเขียนและช่วยตรวจสอบข้อมูล มีสองชื่อ หารความภูมิใจไปครึ่งนึง แต่ได้ความเร็วและความมั่นใจคูณสอง"',
                    zh: '🧑‍🤝‍🧑 合作审计："邀请我的竞争对手共同撰稿并协助验证数据。两个名字，一半的荣耀，但速度和确定性都提高了两倍。"'
                },
                consequence: {
                    en: '✨ Professional Harmony. You turned a rival into an ally. The paper is perfect and the industry is shocked by the collaboration. A leadership masterpiece.',
                    th: '✨ ความสามัคคีทางวิชาชีพ คุณเปลี่ยนคู่แข่งให้กลายเป็นมิตร งานออกมาสมบูรณ์แบบและวงการต้องตกตะลึงกับการร่วมมือกันครั้งนี้ เป็นผลงานการนำที่สุดยอด',
                    zh: '✨ 职业和谐。你把竞争对手变成了盟友。论文很完美，业界对这次合作感到震惊。这是领导力的杰作。'
                },
                stats: { competence: 50, ethics: 50, leadership: 90, innovation: 30 }
            }
        ]
    },
    {
        id: 'prof_002',
        text: {
            en: '🎓 Research vs. Teaching: Your university prioritizes research grants, but your students are struggling with the complex material and need extra office hours. You can either win the "Grant of the Year" or the "Teacher of the Year," but not both.',
            th: '🎓 วิจัย ปะทะ การสอน: มหาวิทยาลัยเน้นเรื่องเงินทุนวิจัย แต่นักเรียนกำลังลำบากกับเนื้อหาที่ยากและต้องการเวลาปรึกษาเพิ่ม คุณสามารถเลือกคว้า "ทุนวิจัยแห่งปี" หรือ "ครูดีเด่นแห่งปี" ได้อย่างใดอย่างหนึ่งเท่านั้น',
            zh: '🎓 研究与教学：你的大学优先分配研究经费，但你的学生正在苦修复杂的材料，需要额外的面谈时间。你可以赢得"年度研究奖"或"年度教师奖"，但不能两者兼得。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔬 Focus on Research: "Grants pay for the labs and the PhD students. My personal teaching reviews can take a hit for the greater good of the department."',
                    th: '🔬 เน้นงานวิจัย: "เงินทุนช่วยจ่ายค่าแล็บและค่านักศึกษาปริญญาเอก ผลประเมินการสอนส่วนตัวของฉันจะแย่ลงบ้างเพื่อประโยชน์ส่วนรวมของภาควิชาก็ยอม"',
                    zh: '🔬 专注于研究："经费支付实验室和博士生的费用。为了系里的更大利益，我的个人教学评价可以受点影响。"'
                },
                consequence: {
                    en: '💰 Funding King. You win the $2M grant. Your department is saved. But your undergraduates feel like numbers in a machine. You are a star, but not a mentor.',
                    th: '💰 เจ้าพ่อเงินทุน คุณคว้าทุน 2 ล้านดอลลาร์มาได้ ภาควิชารอดตาย แต่นักศึกษาปริญญาตรีรู้สึกเหมือนเป็นแค่ตัวเลขในเครื่องจักร คุณเป็นดาวเด่นแต่ไม่ใช่ครูที่ดี',
                    zh: '💰 资金之王。你赢得了200万美元的资助。你的系得救了。但你的本科生觉得自己只是机器上的数字。你是一位明星，但不是一位导师。'
                },
                stats: { competence: 60, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🏫 Focus on Teaching: "Students are the priority. I will cancel two conferences to host open-door office hours every day this semester."',
                    th: '🏫 เน้นการสอน: "นักเรียนต้องมาก่อน ฉันจะยกเลิกไปร่วมงานสัมมนา 2 งานเพื่อเปิดเวลาให้เด็กเข้ามาปรึกษาได้ทุกวันในเทอมนี้"',
                    zh: '🏫 专注于教学："学生是首位。我将取消两次会议，以便在本学期每天安排开放式面谈时间。"'
                },
                consequence: {
                    en: '❤️ Student Hero. Your students pass with flying colors. Many go on to great careers. But the Dean is disappointed in your lack of new funding.',
                    th: '❤️ ฮีโร่ของเด็กๆ นักเรียนสอบผ่านกันแบบคะแนนพุ่งฉลุย หลายคนไปได้ดีในอาชีพการงาน แต่คณบดีผิดหวังที่คุณหาเงินทุนใหม่เข้าภาคไม่ได้เลย',
                    zh: '❤️ 学生英雄。你的学生以优异的成绩通过了考试。许多人此后事业有成。但院长对你缺乏新资金感到失望。'
                },
                stats: { competence: 40, ethics: 70, leadership: 60, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤖 Scalable Teaching: "I\'ll record high-quality video lectures and use AI chatbots to handle basic student questions so I can focus on the grant."',
                    th: '🤖 การสอนแบบขยายขนาดได้: "ฉันจะอัดวิดีโอเลคเชอร์คุณภาพสูงและใช้ AI แชทบอทมาช่วยตอบคำถามพื้นฐานของเด็ก ฉันจะได้ไปโฟกัสเรื่องขอทุน"',
                    zh: '🤖 可扩展教学："我将录制高质量的视频讲座，并使用AI聊天机器人来处理学生的基础问题，这样我就可以专注于申请经费了。"'
                },
                consequence: {
                    en: '✨ Modern Efficiency. It works! Students get 24/7 help from the bot, and you get the grant. You are seen as an innovator in educational tech.',
                    th: '✨ ประสิทธิภาพที่ทันสมัย มันได้ผล! เด็กได้รับการโต้ตอบจากบอทตลอด 24 ชม. และคุณก็ได้ทุนวิจัยด้วย คุณถูกมองว่าเป็นนวัตกรด้านเทคโนโลยีการศึกษา',
                    zh: '✨ 现代效率。它奏效了！学生可以从机器人那里获得全天候帮助，你也得到了资助。你被视为教育技术领域的创新者。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 90 }
            },
            {
                id: 'D',
                text: {
                    en: '🧑‍🤝‍🧑 Peer Mentorship: "Train my top PhD students to run the office hours for the undergraduates. Empower the next generation while I lead the research."',
                    th: '🧑‍🤝‍🧑 รุ่นพี่สอนรุ่นน้อง: "ฝึกนักศึกษาป.เอกตัวท็อปให้มาช่วยคุมเวลาให้คำปรึกษาเด็กป.ตรี เป็นการให้น้องได้ฝึกฝนในขณะที่ฉันก็ทำงานวิจัยไปด้วย"',
                    zh: '🧑‍🤝‍🧑 同伴指导："培训我顶尖的博士生，让他们负责本科生的面谈。在我领导研究的同时，为下一代赋能。"'
                },
                consequence: {
                    en: '📈 Leadership Victory. Your PhDs learn how to teach, and the undergrads get more attention. A sustainable model for a busy professor.',
                    th: '📈 ชัยชนะของภาวะผู้นำ เด็กป.เอกได้ฝึกสอน และเด็กป.ตรีได้รับการดูแลมากขึ้น เป็นโมเดลที่ยั่งยืนสำหรับศาสตราภิชานที่งานยุ่ง',
                    zh: '📈 领导力的胜利。你的博士生学会了如何教学，本科生得到了更多的关注。对于一位忙碌的教授来说，这是一个可持续的模式。'
                },
                stats: { competence: 50, ethics: 50, leadership: 80, innovation: 40 }
            }
        ]
    },
    {
        id: 'prof_003',
        text: {
            en: '🕵️ The Donor\'s Son: You catch a student plagiarizing his entire final thesis. He is the son of the university\'s biggest donor. The President hints that "mercy" would be beneficial for the upcoming medical center funding.',
            th: '🕵️ ลูกชายผู้มีพระคุณ: คุณจับได้ว่านักศึกษาคนหนึ่งลอกวิทยานิพนธ์จบการศึกษามาทั้งหมด เขาคือลูกชายของผู้บริจาครายใหญ่ที่สุดของมหาลัย อธิการบดีเปรยว่า "ความเมตตา" จะเป็นประโยชน์ต่อการระดมทุนสร้างศูนย์การแพทย์ที่กำลังจะมาถึง',
            zh: '🕵️ 捐赠者的儿子：你发现一名学生抄袭了他的整个毕业论文。他是大学最大捐赠者的儿子。校长暗示说，"仁慈"将有利于即将到来的医疗中心资助。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Absolute Zero: "Academic integrity cannot be bought. I fail him and report it to the ethics board. No exceptions."',
                    th: '🚫 ศูนย์เท่านั้น: "ความซื่อสัตย์ทางวิชาการซื้อไม่ได้ ฉันให้เขาตกและรายงานเรื่องนี้ต่อคณะกรรมการจริยธรรม ไม่มีข้อยกเว้น"',
                    zh: '🚫 绝对零分："学术诚信不容收买。我让他不及格，并向伦理委员会报告。没有例外。"'
                },
                consequence: {
                    en: '🔥 Institutional Fallout. The donor pulls $10M. The medical center is cancelled. You are a hero to your peers but a pariah to the administration.',
                    th: '🔥 ผลกระทบระดับสถาบัน ผู้บริจาคถอนเงิน 10 ล้านดอลลาร์ ศูนย์การแพทย์ถูกยกเลิก คุณคือฮีโร่ในหมู่เพื่อนร่วมวิชาชีพแต่เป็นตัวแสบในสายตาผู้บริหาร',
                    zh: '🔥 机构余震。捐赠者撤回了1,000万美元。医疗中心建设项目取消。你是同事眼中的英雄，但在管理层看来，你是个不受欢迎的人。'
                },
                stats: { competence: 40, ethics: 100, leadership: 60, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Extreme Rewrite: "I won\'t fail him, but I\'ll force him to re-write the entire thesis in my office under supervision over the break. No grade until it\'s his own work."',
                    th: '🤝 เขียนใหม่ทั้งหมด: "ฉันจะไม่ให้เขาตก แต่จะบังคับให้เขามานั่งเขียนวิทยานิพนธ์ใหม่ทั้งหมดในห้องทำงานฉันภายใต้การคุมเข้มช่วงปิดเทอม ไม่มีการให้เกรดจนกว่าจะเป็นงานของเขาเองจริงๆ"',
                    zh: '🤝 彻底重写："我不会让他不及格，但我会强迫他在假期里在我的办公室监督下重新写完整个论文。在他自己独立完成之前，不予计分。"'
                },
                consequence: {
                    en: '⚖️ Firm Compassion. The student actually learns something. The donor is annoyed but can\'t claim you were unfair. You protected the school and your soul.',
                    th: '⚖️ ความเมตตาที่หนักแน่น นักศึกษาคนนั้นได้เรียนรู้จริงๆ ผู้บริจาครู้สึกรำคาญแต่ว่าคุณไม่ยุติธรรมไม่ได้ คุณปกป้องได้ทั้งโรงเรียนและจิตวิญญาณตัวเอง',
                    zh: '⚖️ 坚定的慈悲心。学生确实学到了一些东西。捐赠者很恼火，但不能说你不公平。你保护了学校，也保护了自己的灵魂。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Look the Other Way: "I\'ll give him a \'C\' and move on. The medical center will save thousands of lives. One spoiled kid\'s degree isn\'t worth $10M."',
                    th: '🤐 แกล้งเมินไป: "ฉันจะให้เกรด \'C\' แล้วปล่อยไป ศูนย์การแพทย์จะช่วยชีวิตคนได้เป็นพัน ชีวิตเด็กสปอยล์คนเดียวไม่มีค่าเท่าเงิน 10 ล้านดอลลาร์หรอก"',
                    zh: '🤐 视而不见："我会给他个\'C\'，然后了事。医疗中心将挽救成千上万人的生命。一个被宠坏的孩子的学位不值1,000万美元。"'
                },
                consequence: {
                    en: '🤮 Ethical Decay. Rumors spread. Other students find out and lose all respect for you. You are technically a "success," but you feel like a fraud.',
                    th: '🤮 จริยธรรมเสื่อมถอย ข่าวลือแพร่สะพัด นักศึกษาคนอื่นรู้เรื่องและหมดความนับถือในตัวคุณ ในทางเทคนิคคุณคือคน "ประสบความสำเร็จ" แต่ข้างในคุณรู้สึกเหมือนคนลวงโลก',
                    zh: '道德败坏。谣言四起。其他学生发现了这件事，对你彻底失去了尊重。从技术上讲，你是"成功"的，但你觉得自己是个骗子。'
                },
                stats: { competence: 30, ethics: -20, leadership: -40, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Partial Penalty: "I reduce his grade by two letters and require community service. It\'s a punishment, but not a career-killing one for him."',
                    th: '📉 ลงโทษบางส่วน: "ฉันลดเกรดเขาลงสองขั้นและสั่งให้ไปทำงานบริการสังคม เป็นการลงโทษที่เจ็บแต่ไม่ถึงขั้นทำลายอนาคตเขา"',
                    zh: '📉 部分处罚："我将他的成绩降低两个等级，并要求其参加社区服务。这是一种处罚，但不足以毁掉他的职业生涯。"'
                },
                consequence: {
                    en: '🐢 Weak Compromise. The donor thinks you are a nuisance, and the staff think you are weak. You satisfied no one.',
                    th: '🐢 การประนีประนอมที่อ่อนแอ ผู้บริจาคมองว่าคุณเป็นตัวน่ารำคาญ ส่วนบุคลากรก็มองว่าคุณอ่อนแอ คุณไม่สามารถทำให้ใครพอใจได้เลย',
                    zh: '软弱的妥协。捐赠者认为你是个麻烦，而同事则认为你很软弱。你谁也没能取悦。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'prof_004',
        text: {
            en: '🤖 The AI Thesis: A student submits a brilliant thesis that is clearly enhanced by AI. They argue that using AI is no different than using a calculator for math. Your department has no clear policy yet.',
            th: '🤖 วิทยานิพนธ์ AI: นักศึกษาส่งวิทยานิพนธ์ที่ยอดเยี่ยมมากแต่เห็นชัดว่าใช้ AI ช่วย เขาแย้งว่าการใช้ AI ไม่ต่างจากการใช้เครื่องคิดเลขในวิชาคณิตศาสตร์ ภาควิชาของคุณยังไม่มีนโยบายที่ชัดเจนในเรื่องนี้',
            zh: '🤖 AI论文：一名学生提交了一篇出色的论文，显而易见是经过AI增强的。他们认为，使用AI与在数学中使用计算器没有什么不同。你的系目前还没有明确的政策。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Total Ban: "AI obscures original thought. I reject the thesis and require a handwritten oral exam to prove knowledge. We must protect the human mind."',
                    th: '🛑 สั่งห้ามโดยเด็ดขาด: "AI บดบังความคิดสร้างสรรค์ดั้งเดิม ฉันปฏิเสธวิทยานิพนธ์นี้และสั่งให้สอบปากเปล่าแบบเขียนมือเพื่อพิสูจน์ความรู้ เราต้องปกป้องจิตปัญญาของมนุษย์"',
                    zh: '🛑 全面禁止："AI掩盖了原始思想。我拒绝这篇论文，并要求进行手写的口头测试以证明其掌握了知识。我们必须保护人类的思想。"'
                },
                consequence: {
                    en: '🐢 Luddite Reputation. You are seen as "old school." Students avoid your classes. But the work in your lab remains 100% human-verified.',
                    th: '🐢 ชื่อเสียงนักอนุรักษนิยมสุดโต่ง คุณถูกมองว่าเป็น "คนยุคเก่า" นักศึกษาเลี่ยงวิชาคุณ แต่ผลงานในแล็บของคุณจะยังเป็นฝีมือมนุษย์ 100% ที่ตรวจสอบได้',
                    zh: '保守的名声。你被视为"老派人"。学生们避开你的课。但你的实验室工作始终保持着100%的人工验证。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: -40 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 Full Integration: "They are right. I\'ll pass it and spend the next month rewriting our curriculum to teach HOW to use AI ethically as a co-pilot."',
                    th: '🚀 บูรณาการเต็มรูปแบบ: "เขาพูดถูก ฉันจะให้ผ่านและจะใช้เวลาเดือนหน้าเขียนหลักสูตรใหม่เพื่อสอนวิธีใช้ AI อย่างมีจริยธรรมในฐานะผู้ช่วยนักบิน"',
                    zh: '🚀 全面集成："他们是对的。我会给这篇论文通过，并在下个月重写我们的课程，教授如何将AI作为辅助工具进行合乎道德的使用。"'
                },
                consequence: {
                    en: '🌟 Visionary Leader. Your department becomes the world leader in "AI-Augmented Education." Enrollment spikes. You are at the cutting edge.',
                    th: '🌟 ผู้นำที่มีวิสัยทัศน์ ภาควิชาของคุณกลายเป็นผู้นำโลกด้าน "การศึกษาที่เสริมด้วย AI" ยอดสมัครเรียนพุ่งสูง คุณคือคนแถวหน้าของวงการ',
                    zh: '🌟 远见卓识的领导者。你的系成为了"AI增强型教育"领域的全球领导者。入学人数激增。你处于时代的最前沿。'
                },
                stats: { competence: 60, ethics: 40, leadership: 60, innovation: 100 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Disclosure Policy: "You must include an \'AI Appendix\' detailing exactly which prompts were used and for what sections. Partial credit for the AI-generated parts."',
                    th: '⚖️ นโยบายการเปิดเผยข้อมูล: "คุณต้องแนบ \'ภาคผนวก AI\' ที่ระบุพรอพท์ที่ใช้และใช้กับส่วนไหนอย่างละเอียด จะได้คะแนนเพียงบางส่วนสำหรับส่วนที่ AI สร้างให้"',
                    zh: '⚖️ 披露政策："你必须加入一个\'AI附录\'，详细说明具体使用了哪些提示词以及用于哪些章节。AI生成的部分只得部分分数。"'
                },
                consequence: {
                    en: '⚖️ Balanced Standard. You created a framework that allows tech but rewards human effort. Other professors adopt your "Disclosure Model."',
                    th: '⚖️ มาตรฐานที่สมดุล คุณสร้างกรอบที่อนุญาตให้ใช้เทคโนโลยีแต่ก็ให้รางวัลความพยายามของมนุษย์ ศาสตราจารย์คนอื่นนำ "โมเดลการเปิดเผยข้อมูล" ของคุณไปใช้ตาม',
                    zh: '⚖️ 平衡的标准。你建立了一个既允许技术使用又奖励人类努力的框架。其他教授也采用了你的"披露模式"。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ The Detective: "I\'ll use AI-detectors to catch them. If the score is over 50%, they fail automatically. No discussion."',
                    th: '🕵️ ยอดนักสืบ: "ฉันจะใช้โปรแกรมตรวจจับ AI เพื่อจับผิด ถ้าคะแนนเกิน 50% คือตกโดยอัตโนมัติ ไม่มีการเจรจา"',
                    zh: '🕵️ 侦探："我将使用AI检测器来抓住他们。如果评分超过50%，他们就自动不及格。没商量。"'
                },
                consequence: {
                    en: '📉 False Positives. You fail a student who actually wrote it themselves. A lawsuit follows. You realize AI-detectors are unreliable.',
                    th: '📉 ผลลวงที่ผิดพลาด คุณให้เด็กคนที่เขียนเองจริงๆ ตก เกิดการฟ้องร้องตามมา คุณจึงได้รู้ว่าโปรแกรมตรวจจับ AI นั้นเชื่อถือไม่ได้ 100%',
                    zh: '📉 误报。你让一名实际独立完成论文的学生不及格。随后引发了诉讼。你意识到AI检测器是不可靠的。'
                },
                stats: { competence: 20, ethics: 20, leadership: -20, innovation: -10 }
            }
        ]
    },
    {
        id: 'prof_005',
        text: {
            en: '🎤 The Radical Speaker: The student union invites a highly controversial figure to speak on campus. The local community is protesting. The administration wants you, as a senior professor, to cancel the event to prevent a riot.',
            th: '🎤 วิทยากรสุดโต่ง: สโมสรนักศึกษาเชิญบุคคลที่เป็นข้อขัดแย้งอย่างมากมาพูดในมหาลัย ชุมชนในพื้นที่กำลังประท้วง ฝ่ายบริหารต้องการให้คุณในฐานะศาสตราจารย์อาวุโสไปสั่งยกเลิกงานเพื่อป้องกันการจลาจล',
            zh: '🎤 激进演讲者：学生会邀请了一位极具争议的人物到校演讲。当地社区正在举行抗议。校方希望作为资深教授的你取消这项活动，以防止骚乱。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Protect Freedom of Speech: "A university is for difficult ideas. I will personally moderator the talk to ensure it stays civil. The event proceeds."',
                    th: '🛡️ ปกป้องเสรีภาพในการพูด: "มหาวิทยาลัยมีไว้สำหรับความคิดที่ท้าทาย ฉันจะเป็นผู้ดำเนินรายการด้วยตัวเองเพื่อให้แน่ใจว่าจะอยู่ในกติกา งานต้องดำเนินต่อ"',
                    zh: '🛡️ 保护言论自由："大学是容纳各种艰难思想的地方。我将亲自主持讲座，以确保其保持文明。活动照常进行。"'
                },
                consequence: {
                    en: '🔥 Riot & Respect. There is minor property damage, but you are hailed as a champion of free inquiry. The students feel truly empowered to debate.',
                    th: '🔥 จลาจลและความเคารพ มีทรัพย์สินเสียหายเล็กน้อย แต่คุณได้รับยกย่องเป็นแชมป์แห่งเสรีภาพทางความคิด นักศึกษารู้สึกมีอำนาจในการดีเบตอย่างแท้จริง',
                    zh: '🔥 骚乱与尊重。虽然出现了轻微的财产损失，但你被誉为自由探究的捍卫者。学生们感到真正有了辩论的权力。'
                },
                stats: { competence: 50, ethics: 60, leadership: 90, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Cancel for Safety: "Violence is never an educational tool. I\'ll cancel it and organize a series of balanced panels on the topic instead."',
                    th: '🛑 ยกเลิกเพื่อความปลอดภัย: "ความรุนแรงไม่ใช่เครื่องมือทางการศึกษา ฉันจะยกเลิกงานนี้และจัดงานเสวนาที่ระดมความเห็นหลากหลายในหัวข้อนี้แทน"',
                    zh: '🛑 为了安全取消："暴力绝不是一种教育工具。我将取消它，并改为组织一系列关于该主题的平衡小组讨论。"'
                },
                consequence: {
                    en: '🐢 Peaceful Mediocrity. No windows are broken, but the student union is furious and calls you a corporate puppet. They host the event in a parking lot anyway.',
                    th: '🐢 ความเงียบสงบที่แสนธรรมดา ไม่มีหน้าต่างบานไหนแตก แต่สโมสรนักศึกษาโกรธมากและตราหน้าว่าคุณเป็นหุ่นเชิด สุดท้ายพวกเขาก็ไปจัดงานกันที่ลานจอดรถอยู่ดี',
                    zh: '🐢 和平的平庸。窗户没破，但学生会勃然大怒，称你为公司的傀儡。无论如何，他们还是在停车场举办了活动。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The Critical Counter: "Let him speak, but ONLY if he agrees to a 1-hour public debate immediately after with a professor who disagrees with him (me)."',
                    th: '🤝 การโต้แย้งเชิงวิพากษ์: "ให้เขาพูดได้ แต่ต้องยอมดีเบตต่อหน้าสาธารณะเป็นเวลา 1 ชม. ทันทีหลังจากนั้น กับศาสตราจารย์ที่ไม่เห็นด้วยกับเขา (ซึ่งก็คือฉัน)"',
                    zh: '🤝 批评性反击："可以让他讲，但前提是他必须同意在讲座结束后立即与一位持不同政见的教授（我）进行一小时的公开辩论。"'
                },
                consequence: {
                    en: '✨ Academic Masterstroke. You dismantled his arguments in real-time. The students learn more from the debate than the lecture itself. A huge win for logic.',
                    th: '✨ ผลงานชิ้นเอกทางวิชาการ คุณทำลายข้อโต้แย้งของเขาแบบสดๆ นักศึกษาได้เรียนรู้จากการดีเบตมากกว่าตัวเลคเชอร์เองเสียอีก เป็นชัยชนะครั้งใหญ่ของตรรกะ',
                    zh: '✨ 学术上的神来之笔。你实时拆解了他的论点。学生们从辩论中学到的比从讲座本身学到的更多。逻辑学的一次巨大胜利。'
                },
                stats: { competence: 70, ethics: 40, leadership: 60, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Stay Silent: "It\'s a student matter. I won\'t get involved. I have a lab to run."',
                    th: '🤐 นิ่งเงียบไว้: "มันเป็นเรื่องของนักศึกษา ฉันจะไม่เข้าไปยุ่ง ฉันมีงานแล็บต้องทำ"',
                    zh: '🤐 保持沉默："这是学生的事情。我不会介入。我有实验室要打理。"'
                },
                consequence: {
                    en: '🐢 Neglect. The event happens, it\'s a disaster, and the administration blames the senior faculty for a lack of guidance. Your leadership score drops.',
                    th: '🐢 การละเลย งานจัดขึ้น ผลออกมาหายนะ และฝ่ายบริหารก็โทษว่าพวกศาสตราจารย์อาวุโสไม่ยอมให้คำแนะนำ คะแนนภาวะผู้นำของคุณตก',
                    zh: '🐢 疏忽。活动举办了，由于缺乏指导，校方将结果归咎于资深教职员工。你的领导力分数下降了。'
                },
                stats: { competence: 30, ethics: 20, leadership: -50, innovation: 0 }
            }
        ]
    },
    {
        id: 'prof_006',
        text: {
            en: '💰 The "Dirty" Grant: An oil giant with a poor environmental record offers you a $5 million grant for your climate science lab. They insist on the right to "review" your findings before publication.',
            th: '💰 ทุนสีเทา: บริษัทยักษ์ใหญ่ด้านน้ำมันที่มีประวัติการทำลายสิ่งแวดล้อมเสนอทุน 5 ล้านดอลลาร์ให้แล็บวิทยาศาสตร์ภูมิอากาศของคุณ โดยยืนกรานขอสิทธิ์ที่จะ "ตรวจสอบ" ผลการวิจัยก่อนตีพิมพ์',
            zh: '💰 "肮脏的"资助：一家环境记录糟糕的石油巨头为你的气候科学实验室提供500万美元的资助。他们坚持在发表前拥有"审查"发现的权利。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Refuse: "I will not give a polluter any influence over my science. We\'ll find funding elsewhere, even if we have to scale back."',
                    th: '🛑 ปฏิเสธ: "ฉันจะไม่ให้ผู้ก่อมลพิษมามีอิทธิพลเหนือวิทยาศาสตร์ของฉัน เราจะหาทุนจากที่อื่น แม้ว่าจะต้องลดขนาดแล็บลงก็ตาม"',
                    zh: '🛑 拒绝："我不会让污染者对我的科学研究产生任何影响。我们将到别处寻找资金，即使我们不得不缩减规模。"'
                },
                consequence: {
                    en: '🛡️ Pure Science. Your integrity is legendary. You lose some PhD students who needed the funding, but your findings are never questioned.',
                    th: '🛡️ วิทยาศาสตร์บริสุทธิ์ ความซื่อสัตย์ของคุณเป็นที่เลื่องลือ คุณเสียเด็กป.เอกบางคนที่ต้องการทุนไป แต่ผลวิจัยของคุณจะไม่ถูกใครกังขาได้เลย',
                    zh: '🛡️ 纯粹科学。你的诚信是传奇性的。你流失了一些需要这笔资金的博士生，但你的发现从未受到质疑。'
                },
                stats: { competence: 40, ethics: 90, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Take it & Fight: "Take the money, do the research, and if they try to block the findings, I\'ll become a whistleblower. Their money will fund their own exposure."',
                    th: '💰 รับมาแล้วสู้กลับ: "เอาเงินมา ทำวิจัยไป ถ้าพวกเขากล้ามาขวางผลวิจัย ฉันจะแฉเอง เงินเขาแหละที่จะมาขุดความผิดเขาเอง"',
                    zh: '💰 接受并战斗："拿了这笔钱，做研究，如果他们试图阻止研究结果的公布，我就去做检举人。他们的钱将资助他们揭露自己的行为。"'
                },
                consequence: {
                    en: '⚔️ Whistleblower Scandal. You release the data, they sue you. It\'s a legal nightmare for 5 years, but the public truth is out. You are a global icon.',
                    th: '⚔️ เรื่องอื้อฉาวผู้แจ้งเบาะแส คุณปล่อยข้อมูลออกมา พวกเขาฟ้องคุณ เป็นฝันร้ายทางกฎหมายไป 5 ปี แต่ความจริงปรากฏต่อสาธารณะแล้ว คุณกลายเป็นไอคอนระดับโลก',
                    zh: '⚔️ 检举丑闻。你公布了数据，他们起诉了你。这是一场持续5年的法律噩梦，但公众真相大白于天下。你成了一位全球偶像。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Negotiate Terms: "I will accept the grant ONLY if the contract explicitly states they have zero review power and the findings are Open Access immediately."',
                    th: '🤝 เจรจาเงื่อนไข: "ฉันจะรับทุนนี้ก็ต่อเมื่อในสัญญาระบุชัดเจนว่าพวกเขาไม่มีสิทธิ์ตรวจสอบ และผลวิจัยต้องเป็น Open Access ทันทีเท่านั้น"',
                    zh: '🤝 协商条款："只有在合同明确规定他们没有审查权且研究结果立即公开获取的情况下，我才会接受这笔资助。"'
                },
                consequence: {
                    en: '✨ Masterful Deal. They agree to it for the "Good PR" of supporting you. You get the money and your freedom. A masterpiece of negotiation.',
                    th: '✨ ดีลเทพ พวกเขาตกลงเพราะอยากได้ PR สวยๆ ว่าสนับสนุนคุณ คุณได้ทั้งเงินและอิสระ เป็นมาสเตอร์คลาสของการเจรจาต่อรอง',
                    zh: '✨ 高明的交易。为了支持你带来的"良好公关"，他们同意了。你得到了钱，也得到了自由。谈判的杰作。'
                },
                stats: { competence: 70, ethics: 50, leadership: 70, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🐢 Discreet Acceptance: "Keep the grant quiet. Use it for the general lab fund so it\'s not directly tied to one specific \'anti-oil\' paper."',
                    th: '🐢 รับมาเงียบๆ: "ไม่ต้องประโคมเรื่องทุน ใช้เป็นงบกลางของแล็บไป จะได้ไม่ดูเหมือนผูกติดกับงานวิจัยที่ต่อต้านน้ำมันโดยตรง"',
                    zh: '谨慎接受："悄悄地接受这笔资助。将其用于普通实验室基金，这样它就不会与某篇特定的\'反石油\'论文直接挂钩。"'
                },
                consequence: {
                    en: '📉 Ethical Erosion. A student journalist discovers the link. You are accused of being a "shill" for big oil. Your data, even if true, is now tainted.',
                    th: '📉 จริยธรรมกร่อนสลาย นักข่าวที่เป็นนักศึกษารู้ความจริงเข้า คุณถูกตราหน้าว่าเป็น "ขี้ข้า" บริษัทย่อมัน ข้อมูลของคุณแม้จะจริงแค่ไหนก็มีมลทินไปแล้ว',
                    zh: '📉 道德侵蚀。一名学生记者发现了个中的联系。你被指控是大石油公司的"托儿"。你的数据即使真实，现在也受到了玷污。'
                },
                stats: { competence: 30, ethics: 10, leadership: -20, innovation: 20 }
            }
        ]
    },
    {
        id: 'prof_007',
        text: {
            en: '🧠 Mental Health Crisis: During finals week, three of your top students independently report being on the verge of a breakdown. If you delay the exam, it delays graduation for 50 people. If you proceed, you risk their safety.',
            th: '🧠 วิกฤตสุขภาพจิต: ระหว่างช่วงสอบปลายภาค นักศึกษาหัวกะทิ 3 คนรายงานมาว่าตัวเองกำลังจะสติแตก ถ้าคุณเลื่อนสอบ มันจะทำให้เด็ก 50 คนเรียนจบช้าลง ถ้าคุณจัดสอบต่อ คุณก็เสี่ยงต่อความปลอดภัยของพวกเขา',
            zh: '🧠 心理健康危机：在期末周期间，你的三位顶级学生独立报告说他们正处于精神崩溃的边缘。如果你推迟考试，50个人的毕业时间也会随之推后。如果你继续进行，你就有冒着危及他们安全的风险。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Mandatory Reschedule: "Health before grades. I reschedule the exam for two weeks later and work with the administration to ensure no one is penalized for graduation."',
                    th: '🛑 เลื่อนสอบภาคบังคับ: "สุขภาพสำคัญกว่าเกรด ฉันเลื่อนสอบไปอีก 2 สัปดาห์ และจะทำงานร่วมกับฝ่ายบริหารเพื่อให้แน่ใจว่าจะไม่มีใครจบไม่ทัน"',
                    zh: '🛑 强制改期："健康由于成绩。我将考试延期两周，并与校方合作以确保没有人因延迟毕业而受到处罚。"'
                },
                consequence: {
                    en: '✨ Compassionate Leader. The community praises your humanity. The students recover. It adds 40 hours of work for you, but you saved lives.',
                    th: '✨ ผู้นำที่เปี่ยมด้วยเมตตา ชุมชนชมเชยในความเป็นมนุษย์ของคุณ นักศึกษาฟื้นตัวกลับมาได้ แม้มันจะเพิ่มงานให้คุณ 40 ชม. แต่คุณช่วยชีวิตคนไว้ได้จริงๆ',
                    zh: '✨ 富有同情心的领导者。社区赞扬你的人性。学生康复了。这为你增加了40小时的工作量，但你拯救了生命。'
                },
                stats: { competence: 40, ethics: 80, leadership: 70, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Individual Accommodations: "Give the three students an \'Incomplete\' and allow them to take a special exam later. The rest of the class proceeds as scheduled."',
                    th: '🤝 ดูแลเป็นรายบุคคล: "ให้นักศึกษา 3 คนนั้นได้เกรด \'I\' ไปก่อนและให้มาสอบรอบพิเศษทีหลัง ส่วนนักเรียนที่เหลือสอบตามกำหนดการเดิม"',
                    zh: '🤝 个别安排："给这三名学生\'成绩暂缺\'，并允许他们稍后参加特殊考试。其余班级按原定计划进行。"'
                },
                consequence: {
                    en: '⚖️ Standard Fairness. You solved the immediate crisis without disrupting the whole system. Efficient, though it doesn\'t address the "burnout culture."',
                    th: '⚖️ ความยุติธรรมตามมาตรฐาน คุณแก้ปัญหาวิกฤตเฉพาะหน้าได้โดยไม่ทำระบบรวน มีประสิทธิภาพดี แม้มันจะไม่ได้แก้ปัญหา "วัฒนธรรม Burnout" ในโรงเรียนก็ตาม',
                    zh: '⚖️ 标准公平。你在没有扰乱整个系统的情况下解决了眼前的危机。虽然没有解决"倦怠文化"的问题，但很高效。'
                },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Radical Change: "Cancel the exam permanently. Grade everyone based on their midterms and a one-page self-reflection. Reduce the stress systemically."',
                    th: '🚀 เปลี่ยนแปลงแบบสุดขั้ว: "ยกเลิกการสอบปลายภาคไปเลย ให้เกรดทุกคนตามคะแนนมิดเทอมและให้เขียนบันทึกสะท้อนตัวเองคนละหน้า ลดความเครียดเชิงระบบ"',
                    zh: '🚀 彻底改变："永久取消考试。根据期中考试成绩和一页自我反思来给每个人评分。从制度上减轻压力。"'
                },
                consequence: {
                    en: '📉 Academic Rigor Questioned. The students are relaxed, but the Dean is worried your degree carries less weight now. You are known as "Professor Easy."',
                    th: '📉 ถูกกังขาเรื่องวิชาการ นักศึกษาผ่อนคลายขึ้นมาก แต่คณบดีกังวลว่าใบปริญญาจะดูมีน้ำหนักน้อยลง คุณถูกขนานนามว่า "ศาสตราจารย์งานสบาย"',
                    zh: '📉 学术严谨性受到质疑。学生们放松了，但院长担心你的学位含金量现在降低了。你被称为"容易过关的教授"。'
                },
                stats: { competence: 30, ethics: 60, leadership: 40, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '🐢 The Hard Lesson: "Life is stressful. Proceed with the exam. Offer a slightly lower grading curve to compensate, but don\'t stop the system."',
                    th: '🐢 บทเรียนที่โหดร้าย: "ชีวิตมันก็เครียดแบบนี้แหละ จัดสอบต่อไป แต่จะขยับเกณฑ์คะแนนให้ง่ายขึ้นนิดหน่อยเพื่อชดเชย แต่ระบบต้องเดินหน้าต่อ"',
                    zh: '🐢 艰苦的教训："生活压力很大。继续进行考试。提供略低的评分曲线作为补偿，但不要停止系统。"'
                },
                consequence: {
                    en: '📉 Resentment. One student has a public breakdown during the test. The class performs poorly. You maintained the rules but lost the trust of the students.',
                    th: '📉 ความขุ่นเคือง นักศึกษาคนหนึ่งสติแตกกลางห้องสอบ ทั้งชั้นทำคะแนนได้แย่ คุณรักษาหัวโขนกฎระเบียบไว้ได้แต่เสียความมั่นใจจากเด็กไปหมดแล้ว',
                    zh: '📉 怨恨。一名学生在考试期间公开崩溃。班级表现不佳。你维护了规则，但失去了学生的信任。'
                },
                stats: { competence: 40, ethics: 20, leadership: -30, innovation: -10 }
            }
        ]
    },
    {
        id: 'prof_008',
        text: {
            en: '❤️ The Graduate Advance: Your most brilliant PhD student, who you are co-authoring a major paper with, confesses they have romantic feelings for you and wants to date. The paper is 2 weeks from submission.',
            th: '❤️ ความสัมพันธ์กับศิษย์เอก: นักศึกษาป.เอกที่เก่งที่สุดของคุณ ซึ่งคุณกำลังร่วมเขียนงานวิจัยชิ้นสำคัญด้วยกันอยู่ มาสารภาพว่าชอบคุณและอยากเดทด้วย งานวิจัยเหลืออีก 2 สัปดาห์ก็จะส่งแล้ว',
            zh: '❤️ 研究生的表白：你最杰出的博士生，也是你的一篇重大论文的共同作者，向你表白对你有浪漫好感并想交个朋友。而这篇论文离提交还有2周时间。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Hard Professional Boundary: "Explain that this is inappropriate and must stop. Immediately hand over their supervision to another professor to avoid a conflict of interest."',
                    th: '🛑 ขีดเส้นใต้ความเป็นมืออาชีพ: "อธิบายว่านี่คือสิ่งที่ไม่เหมาะสมและต้องหยุดลงทันที ส่งต่อการดูแลเขาให้กับศาสตราจารย์คนอื่นเพื่อเลี่ยงผลประโยชน์ทับซ้อน"',
                    zh: '🛑 坚定的专业界限："解释这是不合适的，必须停止。立即将对他们的监督权力移交给另一位教授，以避免利益冲突。"'
                },
                consequence: {
                    en: '🛡️ Ethical Integrity. You protected your career and the student\'s. The paper is delayed, and the relationship is awkward, but you followed the rules.',
                    th: '🛡️ ความซื่อสัตย์ทางจริยธรรม คุณปกป้องทั้งอาชีพตัวเองและของลูกศิษย์ แต่อาจทำให้งานชิ้นนี้ล่าช้าและความสัมพันธ์น่าอึดอัด แต่คุณทำตามกฎถูกต้อง',
                    zh: '🛡️ 道德诚信。你保护了自己和学生的职业生涯。论文推迟了，关系变得尴尬，但你遵守了规则。'
                },
                stats: { competence: 40, ethics: 90, leadership: 60, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 "Let\'s finish the paper first": "Tell them we cannot discuss this until the paper is submitted and the supervision is officially over. Put it on ice."',
                    th: '🤝 "ทำงานให้เสร็จก่อน": "บอกเขาว่าเราจะคุยเรื่องนี้ไม่ได้จนกว่างานวิจัยจะส่งและบทบาทที่ปรึกษาจบลงอย่างเป็นทางการ แช่แข็งเรื่องนี้ไว้ก่อน"',
                    zh: '🤝 "让我们先完成论文"："告诉他们，在论文提交且监督正式结束之前，我们不能讨论这件事。先把它搁置起来。"'
                },
                consequence: {
                    en: '⚠️ Gray Area. You finish the paper, but the power dynamic is now skewed. The administration later hears about the conversation and questions your judgment.',
                    th: '⚠️ พื้นที่สีเทา คุณทำงานเสร็จจริงแต่อำนาจในความสัมพันธ์มันบิดเบี้ยวไปแล้ว ต่อมาผู้บริหารรู้เรื่องและเริ่มตั้งคำถามถึงวุฒิภาวะของคุณ',
                    zh: '灰色区域。你完成了论文，但现在的权力动态已经倾斜。后来校方听说了这次对话，并质疑你的判断。'
                },
                stats: { competence: 50, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Ignore and Avoid: "Pretend it didn\'t happen. Stay professional and cold until the paper is done, then distance yourself without explanation."',
                    th: '🤐 เมินและเลี่ยง: "ทำเหมือนไม่มีอะไรเกิดขึ้น ทำตัวเคร่งขรึมเป็นมืออาชีพจนกว่างานจะเสร็จ จากนั้นก็ค่อยๆ ตีตัวออกห่างโดยไม่อธิบายอะไร"',
                    zh: '🤐 忽略并回避："假装没发生过。保持专业和冷淡，直到论文完成，然后毫无解释地疏远对方。"'
                },
                consequence: {
                    en: '📉 Mental Trauma. The student feels rejected and confused, and their work suffers. You avoided the HR office but hurt a brilliant mind.',
                    th: '📉 บาดแผลทางจิตใจ ลูกศิษย์รู้สึกถูกปฏิเสธและสับสน จนงานของเขาพังลง คุณเลี่ยงปัญหาจากฝ่ายบุคคลได้แต่ทำร้ายจิตใจของเด็กที่เก่งคนนึงไป',
                    zh: '📉 精神创伤。学生感到被拒绝和困惑，他们的工作也受到了影响。你回避了人力资源办公室，但伤害了一个聪明的头脑。'
                },
                stats: { competence: 30, ethics: 30, leadership: -20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤵 Reporting Self: "Immediately report the conversation to the Ethics Board myself and ask for guidance. Transparency is the only way to protect both parties."',
                    th: '🤵 รายงานตัวเอง: "รายงานบทสนทนานี้ต่อคณะกรรมการจริยธรรมด้วยตัวเองทันทีและขอคำแนะนำ ความโปร่งใสคือทางเดียวที่จะปกป้องทั้งสองฝ่าย"',
                    zh: '🤵 自我报告："由我自己立即向伦理委员会报告这段对话，并寻求指导。透明度是保护双方的唯一途径。"'
                },
                consequence: {
                    en: '✨ Professional Masterclass. The board helps manage the transition. You look like the most ethical person in the building. A benchmark for others.',
                    th: '✨ มาสเตอร์คลาสของมืออาชีพ คณะกรรมการช่วยจัดการช่วงเปลี่ยนผ่านนี้ คุณดูเป็นคนที่มีจริยธรรมสูงที่สุดในตึก เป็นมาตรฐานให้คนอื่นทำตาม',
                    zh: '✨ 专业大师级课程。委员会协助管理过渡。你看起来是这栋楼里最有道德的人。成了他人的标杆。'
                },
                stats: { competence: 40, ethics: 100, leadership: 80, innovation: 10 }
            }
        ]
    },
    {
        id: 'prof_009',
        text: {
            en: '🤝 Peer Review Dilemma: You are reviewing a paper by your main academic rival. It is brilliant and groundbreaking, but it proves your last 5 years of research was wrong. You can find a small reason to reject it.',
            th: '🤝 ศึก Peer Review: คุณได้รับมอบหมายให้ตรวจงานวิจัยของคู่แข่งเบอร์หนึ่ง งานชิ้นนี้สุดยอดและปฏิวัติวงการมาก แต่มันพิสูจน์ว่างานวิจัยที่คุณทำมาตลอด 5 ปีนั้น "ผิด" คุณสามารถหาช่องโหว่เล็กๆ เพื่อสั่งปัดตกงานนี้ได้',
            zh: '🤝 同行评审困境：你正在审阅你的学术劲敌的一篇论文。这篇论文很精彩，具有开创性，但它证明了你过去5年的研究是错误的。你可以找个微小的理由拒绝它。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌟 Accept with Praise: "Truth is truth. I recommend immediate publication and write a supportive commentary admitting my previous work was incomplete."',
                    th: '🌟 ยอมรับพร้อมคำชม: "ความจริงก็คือความจริง ฉันแนะนำให้ตีพิมพ์ทันทีและจะเขียนความเห็นสนับสนุน พร้อมยอมรับว่างานวิจัยที่ผ่านมาของฉันยังมีส่วนที่ขาดไป"',
                    zh: '🌟 表示赞赏并接受："真理就是真理。我建议立即发表，并写一篇支持性的评论，承认我以前的研究是不完整的。"'
                },
                consequence: {
                    en: '✨ Scientific Legend. You are praised for your humility and dedication to truth. Your rival is stunned. Science moves forward because of you.',
                    th: '✨ ตำนานแห่งวงการ คุณได้รับคำชมในความถ่อมตัวและการอุทิศตนเพื่อความจริง คู่แข่งของคุณถึงกับอึ้ง วงการวิทยาศาสตร์ก้าวหน้าไปได้เพราะสปิริตของคุณ',
                    zh: '✨ 科学传奇。你对真理的谦逊和奉献精神受到赞扬。你的对手惊呆了。科学正因为你而向前迈进。'
                },
                stats: { competence: 60, ethics: 100, leadership: 80, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🐢 Reject for "Clarification": "It\'s too fast. I\'ll ask for extensive revisions on minor points to delay the publication by a year while I try to save my own research."',
                    th: '🐢 ปัดตกโดยอ้างว่า "ต้องชี้แจง": "มันเร็วเกินไป ฉันจะสั่งให้แก้ไขในจุดยิบย่อยขนานใหญ่เพื่อดึงเวลาตีพิมพ์ออกไปสักปีนึง ในระหว่างที่ฉันหาทางแก้กื้องานวิจัยตัวเอง"',
                    zh: '以"澄清"为由拒绝："太快了。我会要求针对细微之处进行广泛修订，从而将出版时间推迟一年，同时我也想坐实并挽救我自己的研究。"'
                },
                consequence: {
                    en: '📉 Moral Failure. Your rival eventually gets it published elsewhere. They realize what you did. You kept your 5-year legacy but lost your soul.',
                    th: '📉 ความล้มเหลวทางศีลธรรม สุดท้ายคู่แข่งคุณก็ได้ไปตีพิมพ์ที่อื่น เขาจะรู้ทันทีว่าคุณทำอะไรลงไป คุณรักษาเกียรติยศ 5 ปีไว้ได้แต่เสียจิตวิญญาณไปแล้ว',
                    zh: '📉 道德失败。你的对手最终在其他地方发表了论文。他们意识到你做了什么。你保留了5年的成就，但丢了魂。'
                },
                stats: { competence: 30, ethics: 10, leadership: -20, innovation: -50 }
            },
            {
                id: 'C',
                text: {
                    en: '🧑‍🤝‍🧑 Recuse Yourself: "Inform the journal of a conflict of interest. I cannot be impartial here. Let another expert decide."',
                    th: '🧑‍🤝‍🧑 ขอถอนตัว: "แจ้งวารสารว่ามีผลประโยชน์ทับซ้อน ฉันไม่สามารถเป็นกลางในงานนี้ได้ ให้ผู้เชี่ยวชาญคนอื่นตัดสินใจแทนเถอะ"',
                    zh: '🧑‍🤝‍🧑 退出评审："通知期刊存在利益冲突。我无法在这里保持公正。让另一位专家来决定吧。"'
                },
                consequence: {
                    en: '🛡️ Safe Integrity. You didn\'t lie, but you didn\'t help the truth get out faster either. You protected your reputation through neutrality.',
                    th: '🛡️ ความซื่อสัตย์ที่ปลอดภัย คุณไม่ได้โกหก แต่ก็ไม่ได้ช่วยให้ความจริงปรากฏเร็วขึ้นเช่นกัน คุณปกป้องชื่อเสียงไว้ได้ด้วยความเป็นกลาง',
                    zh: '🛡️ 安全的诚信。你没有撒谎，但你也没有帮助真相更快地大白于天下。你通过中立保护了自己的名誉。'
                },
                stats: { competence: 50, ethics: 70, leadership: 50, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🚀 Collaborate: "Contact them directly. Offer to merge our findings into one mega-paper that explains both phases of the science. Shared glory."',
                    th: '🚀 ร่วมมือกันเลย: "ติดต่อเขาโดยตรง เสนอให้รวมงานเราเข้าด้วยกันเป็นงานวิจัยยักษ์ใหญ่ที่อธิบายวิทยาศาสตร์ทั้งสองเฟส แบ่งปันชื่อเสียงกัน"',
                    zh: '🚀 合作："直接联系他们。提议将我们的发现合并成一篇涵盖科学这两个阶段的宏篇巨著。共享荣耀。"'
                },
                consequence: {
                    en: '🌟 Paradigm Shift. The combined paper is the most cited of the decade. You are both seen as titans of the field. Unity over ego.',
                    th: '🌟 การสั่นสะเทือนวงการ งานวิจัยที่รวมกันนี้กลายเป็นงานที่ถูกอ้างอิงมากที่สุดในรอบทศวรรษ คุณทั้งคู่ถูกมองว่าเป็นยักษ์ใหญ่ของวงการ ความสามัคคีเหนืออีโก้',
                    zh: '🌟 范式转移。这篇合作论文是十年来被引用次数最多的论文。你们两人都被视为该领域的泰斗。团结高于自我。'
                },
                stats: { competence: 70, ethics: 60, leadership: 70, innovation: 80 }
            }
        ]
    },
    {
        id: 'prof_010',
        text: {
            en: '📜 Open Access vs. Prestige: You have a paper that could help public health in developing nations. A prestigious paywalled journal offers the cover story. A small Open Access journal would make it free to everyone immediately.',
            th: '📜 เข้าถึงฟรี หรือ ชื่อเสียง: คุณมีงานวิจัยที่มีประโยชน์ต่อสาธารณสุขในประเทศกำลังพัฒนา วารสารชั้นนำที่ต้องสมัครสมาชิก (Paywall) เสนอให้คุณเป็นเรื่องเด่นบนปก ส่วนวารสาร Open Access เล็กๆ จะทำให้ทุกคนเข้าถึงงานคุณได้ฟรีทันที',
            zh: '📜 开放获取还是声誉：你有一篇可以帮助发展中国家公共卫生的论文。一家负有盛名的、需付费阅读的期刊提供了封面报道的机会。而一家小型开放获取期刊则会立即让所有人免费阅读。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏷️ Traditional Prestige: "The cover story brings eye-balls and funding to my school. Prestige is the currency of the university. I go with the big journal."',
                    th: '🏷️ ชื่อเสียงแบบดั่งเดิม: "การได้ขึ้นปกดึงดูดความสนใจและเงินทุนเข้ามหาลัยได้มาก ชื่อเสียงคือเงินตราของมหาลัย ฉันขอไปกับวารสารใหญ่"',
                    zh: '🏷️ 传统声望："封面故事为我的学校带来了关注和资金。声望是大学的通行货币。我选择大型期刊。"'
                },
                consequence: {
                    en: '💰 Funding Spike. Your university gets a major donation. You get a raise. But doctors in poor countries cannot afford to read your life-saving data.',
                    th: '💰 ทุนวิจัยพุ่งขึ้น มหาลัยได้เงินบริจาคก้อนใหญ่ คุณได้ขึ้นเงินเดือน แต่หมอในประเทศยากจนไม่มีเงินจ่ายเพื่ออ่านข้อมูลที่คุณวิจัยมาเพื่อช่วยชีวิตคน',
                    zh: '资金飙升。你的大学得到了一笔巨额捐赠。你获得了加薪。但贫困国家的医生负担不起阅读你的救命数据的费用。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🌍 Open Access Priority: "The goal of science is to help humanity. I publish it for free. Knowledge should never be behind a paywall."',
                    th: '🌍 เน้นการเข้าถึง (Open Access): "เป้าหมายของวิทยาศาสตร์คือการช่วยมนุษยชาติ ฉันจะตีพิมพ์ฟรี ความรู้ไม่ควรถูกขังไว้หลังกำแพงการเงิน"',
                    zh: '🌍 开放获取优先："科学的目标是帮助人类。我免费发表。知识绝不应该存在于付费墙之后。"'
                },
                consequence: {
                    en: '❤️ Humanitarian Hero. Your data is used in clinics globally. Thousands are helped. Your Dean grumbles about the lack of "tier-one" points.',
                    th: '❤️ ฮีโร่เพื่อมนุษยชาติ ข้อมูลคุณถูกนำไปใช้ในคลินิกทั่วโลก ช่วยคนได้เป็นพัน คณบดีบ่นพึมพำที่คุณทำคะแนน "วารสารระดับ 1" หายไป',
                    zh: '❤️ 人道主义英雄。你的数据在全球的诊所中使用。成千上万的人得到了帮助。你的院长在抱怨由于缺乏"顶级"积分。'
                },
                stats: { competence: 50, ethics: 90, leadership: 60, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Hybrid Waiver: "I negotiate with the big journal. I only sign if they agree to waive the paywall specifically for IPs in developing countries. A geo-locked compromise."',
                    th: '🤝 ข้อตกลงแบบผสม: "ฉันเจรจากับวารสารใหญ่ ฉันจะเซ็นสัญญาถ้าพวกเขายอมปลดล็อกให้อ่านฟรีเฉพาะในประเทศกำลังพัฒนาเท่านั้น เป็นการพบกันครึ่งทาง"',
                    zh: '🤝 混合豁免："我与大型期刊进行谈判。只有当他们同意专门针对发展中国家的IP地址豁免付费墙时，我才会签字。这是一项受地理限制的妥协。"'
                },
                consequence: {
                    en: '✨ Genius Negotiator. You got the prestige AND the impact. This is the hardest deal to strike, but you did it. A victory for smart diplomacy.',
                    th: '✨ นักเจรจาระดับเทพ คุณได้ทั้งชื่อเสียงและผลลัพธ์เพื่อส่วนรวม เป็นดีลที่ทำยากที่สุดแต่คุณทำได้สำเร็จ เป็นชัยชนะของการทูตที่ชาญฉลาด',
                    zh: '✨ 天才谈判家。你既获得了声望，也产生了影响。这是最难达成的交易，但你做到了。精明外交的胜利。'
                },
                stats: { competence: 70, ethics: 70, leadership: 70, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Self-Archive: "Publish in the big journal, but immediately post the \'Pre-print\' version on my personal blog and ResearchGate for free."',
                    th: '🤐 เก็บสำเนาเอง: "ตีพิมพ์ในวารสารใหญ่ แต่เอาฉบับร่าง (Pre-print) ไปโพสต์ลงบล็อกส่วนตัวและ ResearchGate ให้คนอ่านฟรีทันที"',
                    zh: '🤐 自行存档："在大型期刊上发表，但立即在我的个人博客和ResearchGate上免费发布\'预印本\'版本。"'
                },
                consequence: {
                    en: '⚠️ Legal Gray Area. The journal threatens to sue for copyright violation. You spend months in a legal battle, though the info is technically out.',
                    th: '⚠️ พื้นที่สีเทาทางกฎหมาย วารสารขู่จะฟ้องเรื่องละเมิดลิขสิทธิ์ คุณต้องเสียเวลาฟ้องร้องนานนับเดือน แม้ว่าข้อมูลจะหลุดออกไปแล้วจริงๆ ก็ตาม',
                    zh: '法律灰色地带。期刊威胁要起诉侵犯版权。虽然信息在技术上已经公开，但你还是在法律诉讼中耗费了数月时间。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 60 }
            }
        ]
    },
    {
        id: 'prof_011',
        text: {
            en: 'books Textbook Royalty: You wrote the standard textbook for your field. A new edition is due. Publishers want you to just shuffle the chapters so students can\'t buy used copies. It will cost them $200 each.',
            th: 'books ค่าลิขสิทธิ์ตำรา: คุณเขียนตำรามาตรฐานของสาขา ฉบับใหม่ต้องออกแล้ว สำนักพิมพ์อยากให้คุณแค่สลับบทไปมา เพื่อให้นักเรียนซื้อหนังสือมือสองไม่ได้ ราคาเล่มละ 200 ดอลลาร์',
            zh: 'books 教科书版税：你编写了该领域的标准教科书。新版即将截稿。出版商希望你只是重新编排章节，这样学生就买不到二手书了。每本售价200美元。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Shuffle & Profit: "I have a mortgage. Shuffle the chapters. Add a new preface. Collect the royalties."',
                    th: '💰 สลับแล้วรวย: "ฉันมีหนี้บ้านต้องผ่อน สลับบทไป ใส่คำนำใหม่ รับค่าลิขสิทธิ์"',
                    zh: '💰 重新编排并获利："我有抵押贷款。重新编排章节。添加新的序言。收取版税。"'
                },
                consequence: {
                    en: '💵 Financial Gain. You make $50k this year. Students hate you and pirate the PDF anyway. You feel a bit slimy.',
                    th: '💵 กำไรทางการเงิน คุณได้เงิน 5 หมื่นปีนี้ นักเรียนเกลียดคุณและไปโหลด PDF เถื่อนอยู่ดี คุณรู้สึกสกปรกหน่อยๆ',
                    zh: '💵 经济收益。你今年赚了5万美元。学生们讨厌你，反正会去盗版PDF。你觉得自己有点卑鄙。'
                },
                stats: { competence: 40, ethics: -20, leadership: -10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Refuse New Edition: "The content hasn\'t changed. Keep selling the old edition. I won\'t exploit my own students."',
                    th: '🛑 ปฏิเสธฉบับใหม่: "เนื้อหาไม่ได้เปลี่ยน ขายเล่มเก่าต่อไป ฉันไม่เอาเปรียบนักเรียนตัวเอง"',
                    zh: '🛑 拒绝新版："内容没有改变。继续销售旧版。我不会剥削我自己的学生。"'
                },
                consequence: {
                    en: '🛡️ Student Hero. The publisher is furious and threatens to find a new author. Students love you.',
                    th: '🛡️ ฮีโร่นักเรียน สำนักพิมพ์โกรธและขู่จะหาคนเขียนใหม่ นักเรียนรักคุณ',
                    zh: '🛡️ 学生英雄。出版商很生气，威胁要找一位新作者。学生们爱你。'
                },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Go Open Source: "Screw the publisher. I\'m releasing the PDF for free online as an Open Educational Resource (OER)."',
                    th: '💻 เปิดโอเพนซอร์ส: "ช่างหัวสำนักพิมพ์ ฉันจะปล่อย PDF ฟรีออนไลน์เป็นสื่อการศึกษาแบบเปิด (OER)"',
                    zh: '💻 开源："去他的出版商。我将作为开放教育资源（OER）在线免费发布PDF。"'
                },
                consequence: {
                    en: '✨ Academic Rockstar. You lose the royalties, but your influence skyrockets. You are invited to speak everywhere about OER.',
                    th: '✨ ร็อคสตาร์วิชาการ คุณเสียค่าลิขสิทธิ์ แต่อิทธิพลพุ่งกระฉูด คุณได้รับเชิญไปพูดเรื่อง OER ทุกที่',
                    zh: '✨ 学术巨星。你失去了版税，但你的影响力飙升。你被邀请到各地演讲，谈论OER。'
                },
                stats: { competence: 60, ethics: 90, leadership: 70, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Negotiate Price: "I\'ll write a real update with new research, but you must cap the price at $50. Deal or no deal."',
                    th: '🤝 ต่อรองราคา: "ฉันจะเขียนอัปเดตใหม่จริงๆ ใส่ข้อมูลวิจัยใหม่ แต่คุณต้องคุมราคาที่ 50 ดอลลาร์ รับหรือไม่รับ"',
                    zh: '🤝 协商价格："我会写一个包含新研究的真正更新版，但你们必须把价格限制在50美元。成交还是拉倒。"'
                },
                consequence: {
                    en: '⚖️ Fair Trade. It\'s a lot of work to actually update it, but the price is reasonable. A good middle ground.',
                    th: '⚖️ การค้าที่เป็นธรรม งานหนักที่ต้องอัปเดตจริง แต่ราคาสมเหตุสมผล ทางสายกลางที่ดี',
                    zh: '⚖️ 公平交易。真正更新它需要大量工作，但价格合理。一个很好的折中方案。'
                },
                stats: { competence: 70, ethics: 60, leadership: 50, innovation: 20 }
            }
        ]
    },
    {
        id: 'prof_012',
        text: {
            en: '🏛️ Tenure Review: It is your tenure year. The committee is split. The Dean suggests you drop your controversial research on "Systemic Bias in University Hiring" to ensure a unanimous vote.',
            th: '🏛️ ประเมินตำแหน่ง: ปีนี้ปีตัดสินตำแหน่งศาสตราจารย์ถาวร คณะกรรมการเสียงแตก คณบดีแนะนำให้คุณทิ้งงานวิจัยหัวข้อ "อคติเชิงระบบในการจ้างงานมหาลัย" เพื่อให้โหวตผ่านเป็นเอกฉันท์',
            zh: '🏛️ 终身教职审查：这是你的终身教职审查年。委员会意见分歧。院长建议你放弃关于"大学招聘中的系统性偏见"的有争议研究，以确保全票通过。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏳️ Drop the Research: "I need the job security. I\'ll pivot to safe data analysis. I can return to this topic when I\'m safe."',
                    th: '🏳️ ทิ้งงานวิจัย: "ฉันต้องการความมั่นคง ฉันจะเปลี่ยนไปทำวิเคราะห์ข้อมูลที่ปลอดภัย ฉันค่อยกลับมาทำเรื่องนี้ตอนปลอดภัยแล้วก็ได้"',
                    zh: '🏳️ 放弃研究："我需要这份工作的保障。我将转向安全的数据分析。等我安全了再回到这个话题。"'
                },
                consequence: {
                    en: '🛡️ Tenure Granted. You are safe. But you feel silenced. Will you ever really go back? Probably not.',
                    th: '🛡️ ได้ตำแหน่ง คุณปลอดภัย แต่รู้สึกโดนปิดปาก คุณจะกลับมาทำจริงเหรอ? คงไม่มั้ง',
                    zh: '🛡️ 获得终身教职。你安全了。但你觉得被噤声了。你还会真的回去做那个研究吗？可能不会。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '⚔️ Double Down: "This bias is exactly why I need tenure. I\'m publishing the findings NOW, before the vote. Force their hand."',
                    th: '⚔️ จัดหนักกว่าเดิม: "อคตินี้แหละคือเหตุผลที่ฉันต้องได้ตำแหน่ง ฉันจะตีพิมพ์ผลวิจัย \'เดี๋ยวนี้\' ก่อนโหวต บังคับให้พวกเขาเลือก"',
                    zh: '⚔️ 加倍下注："这种偏见正是需要终身教职的原因。我现在就要在投票前发表发现。逼他们表态。"'
                },
                consequence: {
                    en: '🔥 High Risk. It goes viral. They grant tenure because they are afraid of the PR backlash if they fire the "bias researcher."',
                    th: '🔥 เสี่ยงสูง มันไวรัล พวกเขาให้ตำแหน่งเพราะกลัวโดนทัวร์ลงถ้าไล่ "นักวิจัยเรื่องอคติ" ออก',
                    zh: '🔥 高风险。它病毒式传播。他们授予了你终身教职，因为他们害怕一旦解雇"偏见研究员"会引来公关反击。'
                },
                stats: { competence: 60, ethics: 80, leadership: 70, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Soft Pivot: "Rename the study to \'Hiring Trends in Higher Ed.\' Same data, boring title. Fly under the radar."',
                    th: '🤝 เปลี่ยนชื่อให้นุ่มลง: "เปลี่ยนชื่อเป็น \'แนวโน้มการจ้างงานในศึกษาระดับสูง\' ข้อมูลเดิม ชื่อน่าเบื่อ บินต่ำหลบเรดาร์"',
                    zh: '🤝 软性转向："将研究重命名为\'高等教育的招聘趋势\'。同样的数据，无聊的标题。避开雷达。"'
                },
                consequence: {
                    en: '⚖️ Survival. You get tenure. The paper is published but ignored because the title is dull. You survived to fight another day.',
                    th: '⚖️ เอาตัวรอด ได้ตำแหน่ง งานตีพิมพ์แต่ไม่มีคนสนเพราะชื่อน่าเบื่อ รอดไปสู้ใหม่วันหน้า',
                    zh: '⚖️ 生存。你获得了终身教职。论文发表了但被忽略了，因为标题很枯燥。你活下来了，以备来日再战。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '👋 Resign in Protest: "If I can\'t speak truth, I don\'t want to stay here. I\'ll take my grant money to a rival university."',
                    th: '👋 ลาออกประท้วง: "ถ้าพูดความจริงไม่ได้ ก็ไม่อยากอยู่ ฉันจะเอาทุนฉันไปม.คู่แข่ง"',
                    zh: '👋 抗议辞职："如果我不能说真话，我不想留在这里。我会带着我的资助金去竞争对手的大学。"'
                },
                consequence: {
                    en: '🚀 Bold Exit. The rival university welcomes you with open arms (and a raise). Your old Dean looks like a fool.',
                    th: '🚀 ทางออกที่กล้าหาญ คู่แข่งอ้าแขนรับคุณ (พร้อมขึ้นเงินเดือน) คณบดีเก่าดูโง่ไปเลย',
                    zh: '🚀 大胆离开。竞争对手大学张开双臂欢迎你（并加薪）。你的老院长看起来像个傻瓜。'
                },
                stats: { competence: 70, ethics: 90, leadership: 60, innovation: 40 }
            }
        ]
    },
    {
        id: 'prof_013',
        text: {
            en: '💸 The Budget Cut: The department budget is slashed by 15%. You must cut something: Adjuncts (part-time teachers), Graduate Student stipends, or Lab Equipment upgrades.',
            th: '💸 งบโดนตัด: งบภาควิชาโดนหั่น 15% คุณต้องตัดอะไรสักอย่าง: อาจารย์พิเศษ (Adjuncts), เงินเดือนเด็กป.เอก, หรือเงินอัปเกรดแล็บ',
            zh: '💸 预算削减：系里的预算被削减了15%。你必须削减一些东西：兼职教师、研究生津贴或实验室设备升级。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👨‍🏫 Cut Adjuncts: "Fire the part-timers. We\'ll just increase class sizes to 100 students per lecture. Quality suffers, but the core survives."',
                    th: '👨‍🏫 ตัดอาจารย์พิเศษ: "เลิกจ้างพาร์ทไทม์ เพิ่มขนาดห้องเรียนเป็น 100 คนต่อคาบ คุณภาพแย่ลง แต่แกนหลักอยู่รอด"',
                    zh: '👨‍🏫 削减兼职教师："解雇兼职人员。我们将班级规模扩大到每堂课100名学生。质量受损，但核心得以生存。"'
                },
                consequence: {
                    en: '📉 Education Factory. Students hate the giant classes. You are overworked. But the PhDs get paid.',
                    th: '📉 โรงงานผลิตบัณฑิต นักเรียนเกลียดห้องเรียนยักษ์ คุณทำงานหนักเกิน แต่เด็กป.เอกได้เงิน',
                    zh: '📉 教育工厂。学生讨厌大班授课。你工作过度。但博士生拿到了钱。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🎓 Cut PhD Stipends: "Reduce graduate pay. They are students, they can take loans. Preserves the teaching faculty."',
                    th: '🎓 ตัดเงินเด็กป.เอก: "ลดเงินเดือนป.เอก พวกเขาเป็นนักเรียน กู้เรียนสิ รักษาอาจารย์ผู้สอนไว้"',
                    zh: '🎓 削减博士津贴："减少研究生工资。他们是学生，可以贷款。保留教学师资。"'
                },
                consequence: {
                    en: '🔥 Strike Risk. The grad students unionize and protest. Your research halts because they stop working. Bad move.',
                    th: '🔥 เสี่ยงสไตรค์ เด็กป.เอกรวมตัวประท้วง งานวิจัยหยุดชะงักเพราะพวกเขาหยุดงาน เดินหมากผิด',
                    zh: '🔥 罢工风险。研究生组建工会抗议。你的研究停止了，因为他们停止了工作。糟糕的一步。'
                },
                stats: { competence: 30, ethics: 20, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🔬 Cut Equipment: "Delay the new microscopes and servers. We work with old tech for another year. People over machines."',
                    th: '🔬 ตัดงบอุปกรณ์: "ชะลอซื้อกล้องจุลทรรศน์และเซิร์ฟเวอร์ ใช้ของเก่าไปอีกปี คนสำคัญกว่าเครื่องจักร"',
                    zh: '🔬 削减设备："推迟购买显微镜和服务器。我们要用旧技术再工作一年。人比机器重要。"'
                },
                consequence: {
                    en: '🛡️ Morale Saver. It\'s annoying to use slow computers, but no one lost their job. The team appreciates the sacrifice.',
                    th: '🛡️ รักษาขวัญกำลังใจ น่ารำคาญที่ต้องใช้คอมช้าๆ แต่ไม่มีใครตกงาน ทีมงานซึ้งใจในการเสียสละ',
                    zh: '🛡️ 士气救星。使用慢速电脑很讨厌，但没人失业。团队感谢这一牺牲。'
                },
                stats: { competence: 50, ethics: 70, leadership: 60, innovation: -20 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Salary & Fundraising: "I\'ll take a 10% pay cut if the other senior faculty do too, and we launch an alumni fundraising drive to cover the rest."',
                    th: '🤝 ลดเงินเดือน & ระดมทุน: "ฉันยอมตัดเงินเดือน 10% ถ้าศาสตราจารย์คนอื่นเอาด้วย แล้วเราไประดมทุนศิษย์เก่ามาโปะส่วนที่เหลือ"',
                    zh: '🤝 薪水与筹款："如果其他资深教员也这样做，我将接受10%的减薪，并且我们将发起校友筹款活动来支付剩余部分。"'
                },
                consequence: {
                    en: '🌟 Inspiring Leadership. It\'s hard to organize, but your personal sacrifice shames/inspires others into helping. You saved everyone.',
                    th: '🌟 ภาวะผู้นำที่สร้างแรงบันดาลใจ จัดการยาก แต่การเสียสละของคุณทำให้คนอื่นละอาย/มีไฟจนต้องช่วย คุณช่วยทุกคนไว้ได้',
                    zh: '🌟 鼓舞人心的领导力。组织起来很难，但你的个人牺牲羞辱/激励了其他人来提供帮助。你拯救了每个人。'
                },
                stats: { competence: 60, ethics: 90, leadership: 90, innovation: 40 }
            }
        ]
    },
    {
        id: 'prof_014',
        text: {
            en: '📢 The Viral Misinformation: A popular TikToker is misinterpreting your research to promote a dangerous diet fad. It\'s getting millions of views.',
            th: '📢 ข้อมูลเท็จไวรัล: ติ๊กต็อกเกอร์คนดังเอาวิจัยคุณไปตีความผิดๆ เพื่อโปรโมตสูตรลดความอ้วนอันตราย ยอดวิวเป็นล้าน',
            zh: '📢 病毒式错误信息：一位流行TikTok用户曲解你的研究，推广一种危险的节食风尚。它获得了数百万的观看。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚔️ Stitch & Debunk: "Create a TikTok account. Duet their video. Destroy their argument with facts and sass. Fight fire with fire."',
                    th: '⚔️ Stitch & แฉ: "สมัคร TikTok Duet วิดีโอเขา ทำลายข้อโต้แย้งด้วยความจริงและความแซ่บ หนามยอกเอาหนามบ่ง"',
                    zh: '⚔️ 拼接与揭穿："创建一个TikTok账户。合拍他们的视频。用事实和讽刺摧毁他们的论点。以毒攻毒。"'
                },
                consequence: {
                    en: '🚀 Science Influencer. You go viral yourself. Gen Z loves a savage professor. You corrected the record and gained a massive platform.',
                    th: '🚀 อินฟลูฯ สายวิทย์ คุณไวรัลซะเอง Gen Z ชอบศาสตราจารย์ปากแจ๋ว คุณแก้ข่าวสำเร็จและได้พื้นที่สื่อมหาศาล',
                    zh: '🚀 科学网红。你自己也红了。Z世代喜欢犀利的教授。你纠正了记录并获得了一个巨大的平台。'
                },
                stats: { competence: 70, ethics: 60, leadership: 50, innovation: 90 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Legal Cease & Desist: "Have the university lawyers send a letter demanding they take it down for misusing copyrighted university data."',
                    th: '🛑 จดหมายเตือนทางกฎหมาย: "ให้ทนายมหาลัยส่งจดหมายสั่งให้ลบฐานละเมิดลิขสิทธิ์ข้อมูลมหาลัย"',
                    zh: '🛑 法律终止函："让大学律师发信要求他们撤下数据，理由是滥用受版权保护的大学数据。"'
                },
                consequence: {
                    en: '🐢 Slow & Boring. They take it down, but the damage is done. The fans call you a "corporate bully." You look out of touch.',
                    th: '🐢 ช้าและน่าเบื่อเขาลบจริง แต่ความเสียหายเกิดไปแล้ว แฟนคลับด่าคุณว่า "เผด็จการองค์กร" คุณดูหลุดยุค',
                    zh: '🐢 缓慢且无聊。他们撤下了视频，但损害已经造成。粉丝们称你为"企业霸凌者"。你看起来脱节了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '📝 Official Statement: "Publish a dry, formal correction on the department website. Hope people find it."',
                    th: '📝 แถลงการณ์ทางการ: "ลงบทแก้ข่าวแห้งๆ ทางการบนเว็บภาควิชา หวังว่าคนจะมาเจอนะ"',
                    zh: '📝 官方声明："在系网站上发布一份枯燥、正式的更正。希望人们能发现它。"'
                },
                consequence: {
                    en: '📉 Ineffective. No one reads the department website. The misinformation keeps spreading. You failed to protect the public.',
                    th: '📉 ไร้ผล ไม่มีใครอ่านเว็บภาควิชาหรอก ข้อมูลเท็จยังกระจายต่อ คุณล้มเหลวในการปกป้องสาธารณะ',
                    zh: '📉 无效。没人读系网站。错误信息继续传播。你未能保护公众。'
                },
                stats: { competence: 20, ethics: 30, leadership: -10, innovation: -30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Invite for Dialogue: "Publicly invite the influencer to your lab to \'learn the real science.\' Turn it into a teaching moment."',
                    th: '🤝 เชิญมาคุย: "เชิญอินฟลูฯ คนนั้นมาแล็บคุณออกสื่อ เพื่อ \'เรียนรู้วิทยาศาสตร์จริงๆ\' เปลี่ยนวิกฤตเป็นโอกาสสอน"',
                    zh: '🤝 邀请对话："公开邀请网红来你的实验室\'学习真正的科学\'。把它变成一个教学时刻。"'
                },
                consequence: {
                    en: '✨ PR Win. If they accept, you educate them. If they refuse, they look scared. Smart power play.',
                    th: '✨ ชัยชนะ PR ถ้าเขามา คุณได้สอน ถ้าไม่มา เขาดูป๊อด เดินเกมฉลาด',
                    zh: '✨ 公关胜利。如果他们接受，你就教育他们。如果他们拒绝，他们看起来很害怕。聪明的权力游戏。'
                },
                stats: { competence: 60, ethics: 70, leadership: 80, innovation: 60 }
            }
        ]
    },
    {
        id: 'prof_015',
        text: {
            en: '🧠 The Cognition Enhancers: You notice 40% of your class is using "Wait-Wake" pills (a mild, legal-ish nootropic) to study for 20 hours straight. It\'s not cheating, but it\'s unhealthy.',
            th: '🧠 ยาเพิ่มพลังสมอง: คุณสังเกตว่า 40% ของนักเรียนใช้ยา "Wait-Wake" (nootropic อ่อนๆ ที่กึ่งถูกกฎหมาย) เพื่ออ่านหนังสือ 20 ชม. ติด มันไม่โกงก็จริง แต่ไม่ดีต่อสุขภาพ',
            zh: '🧠 认知增强剂：你注意到40%的班级学生正在使用"Wait-Wake"药丸（一种温和、半合法的益智药）连续学习20小时。这不算作弊，但不健康。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Ban Substances: "Add a clause to the syllabus banning performance-enhancing substances. Drug test before the final (if legal allows)."',
                    th: '🛑 แบนสาร: "เพิ่มกฎในประมวลรายวิชาห้ามใช้สารเพิ่มสมรรถนะ ตรวจฉี่ก่อนสอบไฟนอล (ถ้ากฎหมายยอม)"',
                    zh: '🛑 禁止物质："在课程大纲中增加条款，禁止使用提高成绩的物质。期末考试前进行药物测试（如果法律允许）。"'
                },
                consequence: {
                    en: '⚠️ Overreach. Students protest invasion of privacy. You spend more time policing pee than teaching physics.',
                    th: '⚠️ เกินขอบเขต นักเรียนประท้วงเรื่องละเมิดความเป็นส่วนตัว คุณเสียเวลาตรวจฉี่มากกว่าสอนฟิสิกส์',
                    zh: '⚠️ 越权。学生抗议侵犯隐私。你花在监管尿液上的时间比教物理还多。'
                },
                stats: { competence: 30, ethics: 40, leadership: 10, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🗣️ Health Seminar: "Dedicate a lecture to sleep science and memory. Show them data that sleep helps retention more than pills. Educate, don\'t regulate."',
                    th: '🗣️ สัมมนาสุขภาพ: "อุทิศคาบนึงสอนเรื่องวิทยาศาสตร์การนอนและความจำ โชว์ข้อมูลว่าการนอนช่วยจำดีกว่ายา ให้ความรู้ ไม่ใช่บังคับ"',
                    zh: '🗣️ 健康研讨会："专门举办一次关于睡眠科学和记忆的讲座。向他们展示睡眠比药丸更能帮助记忆的数据。教育，而不是监管。"'
                },
                consequence: {
                    en: '✨ Positive Influence. Some students listen. You build trust. It\'s the responsible educator approach.',
                    th: '✨ อิทธิพลบวก นักเรียนบางคนฟัง คุณสร้างความเชื่อใจ เป็นวิถีของครูผู้รับผิดชอบ',
                    zh: '✨ 积极影响。一些学生听进去了。你建立了信任。这是负责任的教育者方法。'
                },
                stats: { competence: 60, ethics: 70, leadership: 60, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '📉 Curve the Test: "Make the test harder to account for the \'enhanced\' study. If they want to be superhumans, test them like superhumans."',
                    th: '📉 ปรับเคิร์ฟโหด: "ออกข้อสอบให้ยากขึ้นรับมือการเรียนแบบ \'อัปเกรด\' ถ้าอยากเป็นยอดมนุษย์ ก็สอบแบบยอดมนุษย์ซะ"',
                    zh: '📉 调整考试曲线："让考试变得更难，以应对\'增强型\'学习。如果他们想成为超人，就像考验超人一样考验他们。"'
                },
                consequence: {
                    en: '☠️ Arms Race. Students take MORE pills to keep up. Someone has a seizure in class. You escalated the problem.',
                    th: '☠️ สงครามสะสมอาวุธ เด็กยิ่งกินยาเพิ่มเพื่อให้ทัน ใครสักคนชักกลางห้อง คุณทำให้ปัญหาบานปลาย',
                    zh: '☠️ 军备竞赛。学生服用更多的药丸以跟上。有人在课堂上癫痫发作。你升级了问题。'
                },
                stats: { competence: 20, ethics: -10, leadership: -20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Ignore: "If it\'s legal, it\'s coffee 2.0. As long as they know the material, I don\'t care how they learned it."',
                    th: '🤐 ช่างมัน: "ถ้ามันถูกกฎหมาย มันก็คือกาแฟ 2.0 ตราบใดที่เขารู้เนื้อหา ฉันไม่สนหรอกว่าเรียนมายังไง"',
                    zh: '🤐 忽略："如果它是合法的，它就是咖啡2.0。只要他们懂材料，我不在乎他们是怎么学到的。"'
                },
                consequence: {
                    en: '🐢 Passive Acceptance. The trend grows. It becomes the norm. You are an observer of a new, jittery era.',
                    th: '🐢 การยอมรับแบบจำยอม เทรนด์เติบโต กลายเป็นเรื่องปกติ คุณเป็นผู้สังเกตการณ์ของยุคใหม่ที่สั่นสู้',
                    zh: '🐢 被动接受。趋势增长。这成为常态。你是一个新的、紧张不安时代的观察者。'
                },
                stats: { competence: 40, ethics: 30, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'prof_016',
        text: {
            en: '🖥️ The Lab Crash: The main server for your research lab has crashed. The backup is 3 months old (someone forgot to automate it). Recovering data costs $20k from the emergency fund.',
            th: '🖥️ แล็บล่ม: เซิร์ฟเวอร์หลักของแล็บวิจัยคุณล่ม ข้อมูลสำรองเก่าไป 3 เดือน (มีคนลืมตั้งออโต้) กู้ข้อมูลใช้เงิน 2 หมื่นดอลลาร์จากงบฉุกเฉิน',
            zh: '🖥️ 实验室崩溃：你研究实验室的主服务器崩溃了。备份是3个月前的（有人忘了自动化它）。从紧急基金中恢复数据需要2万美元。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Pay the Data Recovery: "Money comes and goes, data is time. Pay the experts. We can\'t lose 3 months of work."',
                    th: '💰 จ่ายค่ากู้ข้อมูล: "เงินมาแล้วก็ไป ข้อมูลคือเวลา จ่ายผู้เชี่ยวชาญซะ เราเสียงาน 3 เดือนไม่ได้"',
                    zh: '💰 支付数据恢复费用："钱来去去，数据就是时间。支付给专家。我们不能失去3个月的工作。"'
                },
                consequence: {
                    en: '🛡️ Saved. You get the data back. The dean is mad about the money, but the project stays on track. Crisis managed.',
                    th: '🛡️ รอด กู้ข้อมูลได้ คณบดีโกรธเรื่องเงิน แต่โปรเจกต์เดินต่อได้ จัดการวิกฤตสำเร็จ',
                    zh: '🛡️ 得救。你找回了数据。院长由于钱的事很生气，但项目保持在轨道上。危机得以管理。'
                },
                stats: { competence: 60, ethics: 50, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔨 Redo the Work: "It\'s a good lesson. Make the grad students redo the experiments. They might find errors they missed the first time."',
                    th: '🔨 ทำใหม่: "บทเรียนราคาแพง ให้เด็กป.เอกทำทดลองใหม่ อาจจะเจอจุดผิดที่พลาดไปรอบแรกก็ได้"',
                    zh: '🔨 重做工作："这是一个很好的教训。让研究生重做实验。他们可能会发现第一次错过的错误。"'
                },
                consequence: {
                    en: '📉 Mutiny. The grad students hate you. Morale hits rock bottom. They do it, but the quality is rushed and resentful.',
                    th: '📉 ก่อกบฏ เด็กป.เอกเกลียดคุณ ขวัญกำลังใจดิ่งเหว พวกเขาทำนะแต่งานรีบและเต็มไปด้วยความแค้น',
                    zh: '📉 兵变。研究生讨厌你。士气跌入谷底。他们做了，但质量仓促，充满怨恨。'
                },
                stats: { competence: 30, ethics: 20, leadership: -40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤥 Fake It: "We can extrapolate the missing 3 months from the previous data. It follows a predictable trend. No one will know."',
                    th: '🤥 เมคเอา: "เราอนุมานข้อมูล 3 เดือนที่หายไปจากข้อมูลเก่าได้ แนวโน้มมันเดาได้ ไม่มีใครรู้หรอก"',
                    zh: '🤥 造假："我们可以根据以前的数据推算出丢失的3个月数据。它遵循可预测的趋势。没人会知道。"'
                },
                consequence: {
                    en: '😵 Fraud. It works until review. A reviewer notices the data is "too perfect." You face a formal inquiry.',
                    th: '😵 ฉ้อโกง มันรอดจนถึงขั้นรีวิว คนตรวจสังเกตว่าข้อมูล "เป๊ะเกินไป" คุณเจอสอบสวนอย่างเป็นทางการ',
                    zh: '😵 欺诈。它一直有效直到审查。一位审稿人注意到数据"太完美了"。你面临正式调查。'
                },
                stats: { competence: 10, ethics: -80, leadership: -50, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤖 AI Reconstruction: "Use a predictive AI model to fill the gaps based on the raw logs we do have. Mark it as \'Simulated Data\' in the paper."',
                    th: '🤖 AI สร้างใหม่: "ใช้โมเดล AI ทำนายเพื่อเติมช่องว่างจากล็อกดิบที่เรามี ระบุว่าเป็น \'Simulated Data\' ในงานวิจัย"',
                    zh: '🤖 AI重建："使用预测性AI模型根据我们拥有的原始日志来填补空白。在论文中将其标记为\'模拟数据\'。"'
                },
                consequence: {
                    en: '⚖️ Honest Innovation. The journal accepts it with the caveat. You saved the money and the time, with transparency.',
                    th: '⚖️ นวัตกรรมที่ซื่อสัตย์ วารสารยอมรับแบบมีเงื่อนไข คุณประหยัดเงินและเวลา ด้วยความโปร่งใส',
                    zh: '⚖️ 诚实的创新。期刊接受了它，并带有警示。你通过透明度节省了钱和时间。'
                },
                stats: { competence: 70, ethics: 70, leadership: 60, innovation: 80 }
            }
        ]
    },
    {
        id: 'prof_017',
        text: {
            en: '☕ The Coffee Shop Office: Your office is being renovated for 3 weeks. You have nowhere to meet students. A local coffee shop offers you a "reserved table" if you buy a $5 coffee every hour.',
            th: '☕ ออฟฟิศร้านกาแฟ: ห้องทำงานคุณปิดปรับปรุง 3 สัปดาห์ ไม่มีที่เจอเด็ก ร้านกาแฟแถวนั้นเสนอ "โต๊ะจอง" ให้ถ้าคุณซื้อกาแฟละ 5 ดอลลาร์ทุกชั่วโมง',
            zh: '☕ 咖啡店办公室：你的办公室正在装修，为期3周。你无处会见学生。一家当地咖啡店提议，如果你每小时买一杯5美元的咖啡，就给你一张"预留桌"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Expensable Coffee: "Sure. I\'ll treat it as a temporary workspace. I\'ll try to expense the coffee to the department (good luck)."',
                    th: '💰 เบิกค่ากาแฟ: "เอาสิ ถือเป็นที่ทำงานชั่วคราว ฉันจะลองเบิกค่ากาแฟกับภาควิชาดู (โชคดีนะ)"',
                    zh: '💰 可以报销的咖啡："当然。我会把它当作临时工作空间。我会尝试向系里报销咖啡费用（祝你好运）。"'
                },
                consequence: {
                    en: '☕ Caffeinated Productivity. It\'s a nice vibe. Students love meeting there. You spend $200 of your own money, but morale is high.',
                    th: '☕ งานเดินด้วยกาแฟ บรรยากาศดี เด็กชอบมาคุย คุณควักเนื้อ 200 ดอลลาร์แต่ขวัญกำลังใจดี',
                    zh: '☕ 咖啡因生产力。氛围不错。学生们喜欢在那里见面。你花了200美元自己的钱，但士气很高。'
                },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🚶 Walk-and-Talk: "No office needed. We will do \'Walking Meetings\' around the campus pond. Healthy and free."',
                    th: '🚶 เดินไปคุยไป: "ไม่ต้องใช้ออฟฟิศ เราจะ \'เดินประชุม\' รอบสระน้ำมหาลัย สุขภาพดีแถมฟรีด้วย"',
                    zh: '🚶 边走边谈："不需要办公室。我们将在校园池塘周围进行\'步行会议\'。既健康又免费。"'
                },
                consequence: {
                    en: '🏃 Fitness Prof. Some students love it, some (out of shape ones) dread it. But it works fine for 3 weeks.',
                    th: '🏃 ศ.สายฟิต นักเรียนบางคนชอบ บางคน (ที่ไม่ฟิต) กลัว แต่มันก็ถูไถไปได้ 3 อาทิตย์',
                    zh: '🏃 健身教授。一些学生喜欢它，一些（身体走样的）学生害怕它。但在3周内效果不错。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Virtual Only: "Zoom only for 3 weeks. I\'m working from home in my pajamas. Sorry not sorry."',
                    th: '💻 ออนไลน์ล้วน: "Zoom เท่านั้น 3 อาทิตย์ ฉันจะ WFH ในชุดนอน เสียใจนะแต่ไม่แคร์"',
                    zh: '💻 仅限虚拟："仅限Zoom 3周。我身穿睡衣在家工作。抱歉但不后悔。"'
                },
                consequence: {
                    en: '🐢 Disconnected. Students miss the face-to-face. You get a lot of writing done, but you feel isolated.',
                    th: '🐢 ตัดขาด นักเรียนคิดถึงการเจอหน้า คุณปั่นงานเขียนได้เยอะแต่รู้สึกโดดเดี่ยว',
                    zh: '🐢 断开连接。学生们想念面对面。你完成了大量写作，但你感到孤立。'
                },
                stats: { competence: 60, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '📚 Library Squatter: "Take over a large table in the library common area. Put up a sign. Hope security doesn\'t kick me out."',
                    th: '📚 ยึดห้องสมุด: "ยึดโต๊ะใหญ่ในพื้นที่ส่วนกลางห้องสมุด ติดป้ายไว้ หวังว่ายามจะไม่ไล่"',
                    zh: '📚 图书馆"霸占者"："在图书馆公共区域占一张大桌子。挂个牌子。希望安保人员不会把我踢出去。"'
                },
                consequence: {
                    en: '📢 Public Notice. It\'s loud and public. Everyone sees your meetings. Zero privacy, but very accessible.',
                    th: '📢 ประกาศสาธารณะ เสียงดังและโจ่งแจ้ง ทุกคนเห็นการประชุมหมด ไร้ความเป็นส่วนตัวแต่เข้าถึงง่ายสุดๆ',
                    zh: '📢 公告。这里很吵且是公开的。每个人都看到了你的会议。零隐私，但非常容易接触。'
                },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 0 }
            }
        ]
    },
    {
        id: 'prof_018',
        text: {
            en: '📊 The Statistical Trap: You realize a standard statistical method used in your field for 20 years is actually flawed. Correcting it invalidates hundreds of past papers, including your mentors.',
            th: '📊 กับดักสถิติ: คุณเพิ่งรู้ว่าวิธีทางสถิติมาตรฐานที่ใช้กันมา 20 ปีในวงการมันผิดจริงๆ การแก้สิ่งนี้จะทำให้งานวิจัยเก่าๆ เป็นร้อยชิ้นเป็นโมฆะ รวมทั้งของอาจารย์คุณด้วย',
            zh: '📊 统计陷阱：你意识到你所在领域使用了20年的标准统计方法实际上是有缺陷的。纠正它将使数百篇过去的论文作废，包括你导师的论文。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💣 Publish the Correction: "Science corrects itself. Burn it down. Publish the proof that the method is flawed. Let the chips fall."',
                    th: '💣 ตีพิมพ์บทแก้: "วิทยาศาสตร์ต้องแก้ไขตัวเอง เผามันให้ราบ ตีพิมพ์บทพิสูจน์ว่าวิธีมันผิด ช่างหัวผลที่จะตามมา"',
                    zh: '💣 发表更正："科学会自我纠正。烧了它。发表证明该方法有缺陷的证据。听天由命。"'
                },
                consequence: {
                    en: '🔥 Field Disruption. Chaos. You are attacked by senior academics. But the younger generation hails you as a revolutionary.',
                    th: '🔥 วงการปั่นป่วน โกลาหล คุณโดนพวกอาวุโสรุมกินโต๊ะ แต่เด็กรุ่นใหม่ยกย่องคุณเป็นนักปฏิวัติ',
                    zh: '🔥 领域颠覆。混乱。你受到了资深学者的攻击。但年轻一代将你视为革命者。'
                },
                stats: { competence: 80, ethics: 90, leadership: 70, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Quiet Transition: "Stop using the method myself. Tell my students. Start a slow shift without explicitly calling out the past errors."',
                    th: '🤫 เปลี่ยนผ่านเงียบๆ: "เลิกใช้เอง บอกลูกศิษย์ เริ่มเปลี่ยนช้าๆ โดยไม่ไปชี้หน้าด่าว่าอดีตผิด"',
                    zh: '🤫 安静过渡："我自己停止使用该方法。告诉我的学生。开始缓慢转变，而不明确指出过去的错误。"'
                },
                consequence: {
                    en: '🐢 Slow Fix. It takes 10 years, but the field corrects. You avoided the war, but you left flawed science in the record for too long.',
                    th: '🐢 แก้ช้า ใช้เวลา 10 ปีกว่าจะแก้หมด คุณเลี่ยงสงครามได้ แต่คุณปล่อยให้ความผิดพลาดอยู่ในประวัติศาสตร์นานเกินไป',
                    zh: '🐢 缓慢修复。这需要10年，但该领域得以修正。你避免了战争，但你让有缺陷的科学留在记录中太久了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Stay Silent: "It\'s too big. Correcting it would destroy public trust in our field. Just keep using it. It\'s \'good enough.\'"',
                    th: '🤐 เงียบไว้: "เรื่องมันใหญ่ไป การแก้จะทำลายความเชื่อใจสาธารณะ ใช้ๆ ไปเถอะ มัน \'ดีพอ\' แล้ว"',
                    zh: '🤐 保持沉默："这太大了。纠正它会摧毁公众对我们领域的信任。继续使用它。它\'足够好了\'。"'
                },
                consequence: {
                    en: '📉 Structural Rot. The field stagnates because the math is wrong. You know you are part of the problem.',
                    th: '📉 โครงสร้างเน่าเฟะ วงการย่ำอยู่กับที่เพราะเลขมันผิด คุณรู้ดีว่าคุณคือส่วนหนึ่งของปัญหา',
                    zh: '📉 结构性腐烂。由于数学错误，该领域停滞不前。你知道你是问题的一部分。'
                },
                stats: { competence: 30, ethics: -50, leadership: -20, innovation: -40 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Private Seminar: "Hold a closed-door meeting with the top 50 leaders. Present the finding. Decide collectively how to handle the PR."',
                    th: '🤝 สัมมนาลับ: "จัดประชุมปิดกับผู้นำท็อป 50 นำเสนอสิ่งที่พบ ตัดสินใจร่วมกันว่าจะจัดการ PR ยังไง"',
                    zh: '🤝 私人研讨会："与前50名领导人举行闭门会议。展示发现。集体决定如何处理公关。"'
                },
                consequence: {
                    en: '🛡️ Controlled Demolition. The field agrees to a phased update. It preserves reputation while fixing the math. Responsible leadership.',
                    th: '🛡️ การทำลายแบบควบคุม วงการตกลงที่จะอัปเดตเป็นระยะ รักษาชื่อเสียงไว้ได้พร้อมแก้เลข ภาวะผู้นำที่รับผิดชอบ',
                    zh: '🛡️ 控制拆除。该领域同意进行分阶段更新。它在修复数学的同时维护了声誉。负责任的领导力。'
                },
                stats: { competence: 60, ethics: 60, leadership: 80, innovation: 50 }
            }
        ]
    },
    {
        id: 'prof_019',
        text: {
            en: '🐦 The Twitter Feud: Another professor insults your sub-field on Twitter ("Macro-economics is just astrology for men"). You recently published a book on exactly this.',
            th: '🐦 สงครามทวิตเตอร์: ศาสตราจารย์อีกคนด่าสาขาคุณบนทวิตเตอร์ ("เศรษฐศาสตร์มหภาคก็แค่โหราศาสตร์สำหรับผู้ชาย") คุณเพิ่งตีพิมพ์หนังสือเรื่องนี้เป๊ะๆ',
            zh: '🐦 Twitter争执：另一位教授在Twitter上侮辱你的子领域（"宏观经济学只不过是男性的占星术"）。你最近刚出版了一本关于此事的书。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚔️ Clap Back: "Quote tweet with a chart proving them wrong and a scathing insult about their citation count. #AcademicBurn"',
                    th: '⚔️ สวนกลับ: "โควททวีตด้วยกราฟที่พิสูจน์ว่าเขาผิดพร้อมคำด่าเจ็บๆ เรื่องยอด Citation ของเขา #AcademicBurn"',
                    zh: '⚔️ 反击："用图表引用推文证明他们是错误的，并对他们的引用计数进行严厉的侮辱。#AcademicBurn"'
                },
                consequence: {
                    en: '🔥 Viral Drama. You gain 10k followers. Your book sales spike. But you look petty and undignified.',
                    th: '🔥 ดราม่าไวรัล ผู้ติดตามเพิ่มหมื่นนึง ยอดขายหนังสือพุ่ง แต่คุณดูใจแคบและไร้มาด',
                    zh: '🔥 病毒式戏剧。你获得了1万名追随者。你的书销量激增。但你看起来心胸狭窄且有失体统。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤔 High Road Thread: "Write a thoughtful 10-tweet thread explaining the nuance of the field and inviting them to read your book (link included)."',
                    th: '🤔 เธรดหล่อๆ: "เขียนเธรด 10 ทวีตแบบมีสาระ อธิบายความลึกซึ้งของสาขาแล้วชวนเขามาอ่านหนังสือ (แนบลิงก์)"',
                    zh: '🤔 高调线程："写一个深思熟虑的10条推文线程，解释该领域的细微之处，并邀请他们阅读你的书（附上链接）。"'
                },
                consequence: {
                    en: '✨ Classy Promotion. People respect your cool head. You sell fewer books than the drama route, but you kept your dignity.',
                    th: '✨ การโปรโมตแบบมีคลาส คนนับถือความใจเย็น ขายได้น้อยกว่าแบบดราม่าแต่รักษาศักดิ์ศรีตไว้ได้',
                    zh: '✨ 优雅的推广。人们尊重你的冷静。虽然卖出的书比戏剧路线少，但你保持了尊严。'
                },
                stats: { competence: 60, ethics: 70, leadership: 60, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🔇 Block & Ignore: "I don\'t engage with trolls, even tenured ones. Block. Keep working."',
                    th: '🔇 บล็อกและเมิน: "ฉันไม่คุยกับเกรียน แม้จะเป็นเกรียนมีตำแหน่ง บล็อก ทำงานต่อ"',
                    zh: '🔇 屏蔽并忽略："我不与喷子互动，即使是终身教授。屏蔽。继续工作。"'
                },
                consequence: {
                    en: '🛡️ Peace. You saved your mental health. The tweet dies out in 24 hours. Silence is power.',
                    th: '🛡️ ความสงบ คุณรักษาสุขภาพจิต ทวีตนั้นดับไปใน 24 ชม. ความเงียบคือพลัง',
                    zh: '🛡️ 和平。你挽救了自己的心理健康。推文在24小时内消失。沉默就是力量。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤡 Self-Deprecating Joke: "Retweet with \'As a Capricorn, I resent this.\' diffuse the tension with humor."',
                    th: '🤡 เล่นมุกตัวเอง: "รีทวีตว่า \'ในฐานะชาวราศีมังกร ฉันไม่พอใจนะ\' ละลายความตึงเครียดด้วยอารมณ์ขัน"',
                    zh: '🤡 自嘲笑话："转发并附上\'作为魔羯座，我对此表示愤慨。\'用幽默化解紧张局势。"'
                },
                consequence: {
                    en: '😄 Likable. It plays well. You seem human. No research points, but "Cool Prof" points +10.',
                    th: '😄 น่าคบหา ผลตอบรับดี คุณดูเป็นมนุษย์ ไม่ได้แต้มวิจัยแต่ได้แต้ม "อาจารย์คูลๆ" +10',
                    zh: '😄 讨人喜欢。效果不错。你看起来像人。没有研究积分，但"酷教授"积分+10。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 10 }
            }
        ]
    },
    {
        id: 'prof_020',
        text: {
            en: '👴 The Emeritus Office: A 90-year-old Emeritus Professor refuses to vacate his large office, which you need for your new lab equipment. He visits once a month to water a plant.',
            th: '👴 ห้องศ.กิตติคุณ: ศาสตราจารย์กิตติคุณวัย 90 ไม่ยอมย้ายออกจากห้องทำงานใหญ่ ซึ่งคุณจำเป็นต้องใช้ลงเครื่องมือแล็บใหม่ แกแวะมาเดือนละครั้งมารดน้ำต้นไม้',
            zh: '👴 名誉教授办公室：一位90岁的名誉教授拒绝腾出他的大办公室，而你需要用它来放置新的实验室设备。他每月来一次给植物浇水。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🗝️ Force the Move: "Go to the Dean. Get the locks changed. He is retired. The space belongs to active research. It\'s brutal but necessary."',
                    th: '🗝️ บังคับย้าย: "ไปหาคณบดี เปลี่ยนแม่กุญแจ เขาเกษียณแล้ว พื้นที่ต้องเป็นของคนทำงาน โหดร้ายแต่จำเป็น"',
                    zh: '🗝️ 强行搬迁："去找院长。更换锁芯。他退休了。空间属于活跃的研究。这很残酷但很有必要。"'
                },
                consequence: {
                    en: '❄️ Cold Efficiency. You get the room. The old professor cries in the hall. Everyone thinks you are a monster.',
                    th: '❄️ ประสิทธิภาพที่เลือดเย็น คุณได้ห้อง ศ.แก่ร้องไห้ในโถงทางเดิน ทุกคนคิดว่าคุณเป็นปีศาจ',
                    zh: '❄️ 冷酷的效率。你得到了房间。这位老教授在走廊里哭泣。每个人都认为你是个怪物。'
                },
                stats: { competence: 60, ethics: -20, leadership: -30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Shared Space: "Keep his desk in the corner. Set up my lab around him. He can watch the science happen. Maybe he has stories."',
                    th: '🤝 พื้นที่ร่วม: "เก็บโต๊ะเขาไว้มุมห้อง ตั้งแล็บล้อมเขาไว้ ให้เขาดูวิทยาศาสตร์เกิดขึ้น เขาอาจจะมีเรื่องเล่าดีๆ"',
                    zh: '🤝 共享空间："把他的桌子留在角落。在我他周围设立实验室。他可以看到科学的发生。也许他有故事。"'
                },
                consequence: {
                    en: '❤️ Heartwarming. He loves watching the students. He actually donates $100k to your lab in his will later. Kindness pays.',
                    th: '❤️ อบอุ่นหัวใจ แกชอบดูเด็กๆ ทำงาน สุดท้ายแกบริจาค 1 แสนดอลลาร์ให้แล็บคุณในพินัยกรรม ความใจดีเห็นผล',
                    zh: '❤️ 暖心。他喜欢看学生们。后来他实际上在遗嘱中向你的实验室捐赠了10万美元。善良有回报。'
                },
                stats: { competence: 50, ethics: 80, leadership: 60, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🌱 Move the Plant: "Offer to water his plant for him or move it to the lobby. Gently explain that the equipment is coming next week."',
                    th: '🌱 ย้ายต้นไม้: "เสนอตัวรดน้ำต้นไม้ให้ หรือย้ายไปไว้ล็อบบี้ อธิบายอย่างนุ่มนวลว่าเครื่องมือจะมาอาทิตย์หน้าแล้ว"',
                    zh: '🌱 移动植物："提议为他浇水或将其移至大堂。温和地解释设备下周就要到了。"'
                },
                consequence: {
                    en: '🐢 Slow Process. He agrees reluctantly. It takes 6 months of gentle prodding. Your equipment sits in boxes, but you kept the peace.',
                    th: '🐢 กระบวนการช้า แกยอมรับแบบไม่เต็มใจ ใช้เวลาตะล่อม 6 เดือน เครื่องมือคุณกองในกล่อง แต่คุณรักษาความสงบไว้ได้',
                    zh: '🐢 缓慢的过程。他勉强同意。花了6个月的时间温和地敦促。你的设备放在箱子里，但你保持了和平。'
                },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🏛️ Build Him a Shrine: "Convince the department to name a reading room after him and move his stuff there. Frame it as an \'Honor\' not an eviction."',
                    th: '🏛️ สร้างศาลเจ้าให้: "กล่อมภาควิชาให้ตั้งชื่อห้องอ่านหนังสือตามชื่อแกแล้วย้ายของแกไปที่นั่น บอกว่าเป็น \'เกียรติยศ\' ไม่ใช่การไล่ที่"',
                    zh: '🏛️ 为他建一座圣殿："说服系里以他的名字命名一间阅读室，并把他的东西搬到那里。把它框架为一种\'荣誉\'而不是驱逐。"'
                },
                consequence: {
                    en: '✨ Diplomatic Win. He feels honored (and leaves). You get the room. Everyone is happy. You should be in administration.',
                    th: '✨ ชัยชนะทางการทูตแกรู้สึกเป็นเกียรติ (และยอมไป) คุณได้ห้อง ทุกคนแฮปปี้ คุณน่าไปเป็นผู้บริหารนะ',
                    zh: '✨ 外交胜利。他感到荣幸（并离开）。你得到了房间。每个人都很高兴。你应该去搞行政。'
                },
                stats: { competence: 60, ethics: 50, leadership: 80, innovation: 30 }
            }
        ]
    },
    {
        id: 'prof_021',
        text: {
            en: '🎤 The TED Talk: You are invited to give a TED Talk. The producers want you to simplify your research to the point where it is scientifically inaccurate but "inspiring."',
            th: '🎤 ทอล์กโชว์ TED: คุณได้รับเชิญไปพูด TED Talk โปรดิวเซอร์อยากให้คุณย่อยงานวิจัยให้ง่ายจนถึงขั้นที่มันไม่ถูกต้องทางวิทยาศาสตร์แล้ว แต่ "สร้างแรงบันดาลใจ"',
            zh: '🎤 TED演讲：你受邀以此以此进行TED演讲。制片人希望你简化你的研究，以至于它在科学上是不准确的，但"鼓舞人心"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌟 Simplify & Inspire: "Do it. The public doesn\'t need nuance. They need hope. I\'ll be a star."',
                    th: '🌟 ย่อยและสร้างแรงบันดาลใจ: "ทำเลย สาธารณชนไม่ต้องการความซับซ้อน เขาต้องการความหวัง ฉันจะเป็นดารา"',
                    zh: '🌟 简化以此以此与鼓以此舞人心："做吧。公众不需要细以此微差别。他们需要希望。我会成为明星。"'
                },
                consequence: {
                    en: '✨ Fame. The video gets 10M views. Your book becomes a bestseller. Your colleagues roll their eyes at your "pop science."',
                    th: '✨ ชื่อเสียง วิดีโอได้ 10 ล้านวิว หนังสือขายดีถล่มทลาย เพื่อนร่วมงานกลอกตาใส่ "วิทยาศาสตร์ป๊อป" ของคุณ',
                    zh: '✨ 名声。视频获得了1000万次观看。以此以此你的以此书以此以此成为畅以此以此以此以此销书。你的同事对你的"流行科学"以此翻以此以此白眼。'
                },
                stats: { competence: 30, ethics: 20, leadership: 60, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Stick to Facts: "Refuse to dumb it down. Give a lecture on the actual complexity. Boredom is better than lies."',
                    th: '🛑 ยึดความจริง: "ปฏิเสธที่จะทำให้มันปัญญาอ่อน เลกเชอร์เรื่องความซับซ้อนจริงๆ ไปเลย น่าเบื่อดีกว่าโกหก"',
                    zh: '🛑 坚持以此事实："拒绝把它以此以此弄以此以此得以此以此愚以此以此蠢。以此以此以此就实际的复杂性以此进行以此以此以此以此以此讲以此以此座。无聊总比说谎好。"'
                },
                consequence: {
                    en: '🐢 Niche Respect. The talk is not viral. But serious scientists respect you for holding the line.',
                    th: '🐢 ความเคารพเฉพาะกลุ่ม ทอล์กไม่ไวรัล แต่นักวิทยาศาสตร์ตัวจริงนับถือที่คุณรักษาจุดยืน',
                    zh: '🐢以此以此以此以此非以此主流尊重。演以此讲以此没有走红。但以此严肃的科以此以此学家以此因以此你以此坚守底线以此而以此尊以此重你。'
                },
                stats: { competence: 70, ethics: 80, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The Metaphor: "Work overtime to find a perfect metaphor that is simple BUT accurate. It\'s hard, but possible."',
                    th: '🤝 อุปมาอุปไมย: "ทำงานล่วงเวลาเพื่อหาคำเปรียบเปรยที่สมบูรณ์แบบ ที่ง่าย \'แต่\' ถูกต้อง ยากแต่เป็นไปได้"',
                    zh: '🤝 隐喻："以此加班以此以此加点找到一个既简单又准确的以此以此完美以此以此隐以此以此喻。这很难，以此但以此以此以此以此是可以做到的。"'
                },
                consequence: {
                    en: '🌟 Communication Genius. You nailed it. The public understands, and the experts nod in approval. The best of both worlds.',
                    th: '🌟 อัจฉริยะการสื่อสาร คุณทำได้ สาธารณชนเข้าใจและผู้เชี่ยวชาญยอมรับ ได้ทั้งขึ้นทั้งล่อง',
                    zh: '🌟 沟通以此以此天才。你以此做以此到了。公以此众理解了，专家们也点头赞以此同。以此以此两以此以此全以此以此齐以此以此以此美。'
                },
                stats: { competence: 60, ethics: 70, leadership: 70, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '🤡 Comedy Routine: "Forget the science. Tell funny anecdotes about lab disasters. Be the \'Stand-up Scientist.\'"',
                    th: '🤡 สายฮา: "ช่างหัววิทยาศาสตร์ เล่าเรื่องตลกเกี่ยวกับความหายนะในแล็บ เป็น \'นักวิทย์เดี่ยวไมโครโฟน\'"',
                    zh: '🤡 喜剧表演："以此以此以此忘记科以此以此以此以此学。讲以此讲以此以此关于实验以此以此室灾难的有趣轶以此以此事。以此以此以此做\'脱以此口秀科学家\'。"'
                },
                consequence: {
                    en: '😄 Crowd Pleaser. You are invited to host awards shows. No one knows what you actually research, but they love you.',
                    th: '😄 ขวัญใจมหาชน คุณได้รับเชิญไปเป็นพิธีกรงานประกาศรางวัล ไม่มีใครรู้หรอกว่าคุณวิจัยอะไร แต่เขารักคุณ',
                    zh: '😄以此以此以此取悦以此观众。你受邀主以此持颁以此奖以此以此典礼。以此以此没以此人知道你以此以此实际以此上以此以此以此以此在研究什么，但以此他们爱你。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'prof_022',
        text: {
            en: '🌍 The Climate Conference: You are flying to a major climate change conference to present your paper on carbon footprints. Students call you a hypocrite for flying.',
            th: '🌍 การประชุมภูมิอากาศ: คุณกำลังจะบินไปประชุมเรื่องการเปลี่ยนแปลงสภาพภูมิอากาศครั้งใหญ่เพื่อนำเสนอเรื่องรอยเท้าคาร์บอน นักเรียนด่าว่าคุณมือถือสากปากถือศีลที่นั่งเครื่องบินไป',
            zh: '🌍 气候以此以此会议：你正以此飞往以此一以此以此个大型以此气候变以此化会议，展以此示你关以此以此于碳以此足以此迹的论文。以此学生以此以此以此以此称你坐飞以此以此以此以此以此机是伪君子。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✈️ Fly Anyway: "Systemic change happens in these rooms. My personal flight is negligible compared to the policy I might influence."',
                    th: '✈️ บินอยู่ดี: "การเปลี่ยนแปลงเชิงระบบเกิดในห้องประชุมพวกนี้ เที่ยวบินส่วนตัวของฉันมันขี้ปะติ๋วเมื่อเทียบกับนโยบายที่ฉันอาจผลักดันได้"',
                    zh: '✈️ 无论以此以此如何以此都要飞："系统性以此以此变以此以此革发以此生在以此这些以此房间里。与我可能影以此以此响的政策相比，我个人以此以此以此的以此以此飞行以此微以此不以此以此以此以此以此以此时足道。"'
                },
                consequence: {
                    en: '⚖️ Pragmatism. You influence the treaty. The world is better off. The students still tweet mean things.',
                    th: '⚖️ ปฏิบัตินิยม คุณมีอิทธิพลต่อสนธิสัญญา โลกดีขึ้น นักเรียนก็ยังทวีตด่าอยู่ดี',
                    zh: '⚖️ 实用以此主义。以此以此你影以此以此响了条约。世界变以此以此得了以此更以此以此以此美好。以此以此学生们仍以此然以此在推特上以此发以此以此布以此刻薄以此以此以此以此的话。'
                },
                stats: { competence: 60, ethics: 40, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🚆 Take the Train: "It takes 3 days instead of 5 hours. I will work on the train. Walk the talk."',
                    th: '🚆 นั่งรถไฟ: "ใช้เวลา 3 วันแทนที่จะ 5 ชั่วโมง ฉันจะทำงานบนรถไฟ ทำให้ดูเป็นตัวอย่าง"',
                    zh: '🚆 坐以此火车："需以此以此要3天而以此不是5小时。我以此以此将以此在火以此车以此上工作。言以此出必以此行。"'
                },
                consequence: {
                    en: '🛡️ Integrity Icon. You arrive exhausted but morally superior. Your dedication makes headlines.',
                    th: '🛡️ ไอคอนความซื่อสัตย์ คุณมาถึงแบบหมดสภาพแต่เหนือกว่าทางศีลธรรม ความทุ่มเทของคุณเป็นข่าวหน้าหนึ่ง',
                    zh: '🛡️ 诚信图以此以此标。你精以此疲以此以此力以此以此以此竭但以此以此道以此德以此高以此以此尚地到达。以此你的以此奉献以此以此以此精神上了头以此以此条。'
                },
                stats: { competence: 50, ethics: 90, leadership: 60, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Present Virtually: "Refuse to fly. Demand they let you Zoom in. If they refuse, boycott."',
                    th: '💻 นำเสนอออนไลน์: "ปฏิเสธที่จะบิน เรียกร้องให้เขาให้คุณ Zoom เข้ามา ถ้าไม่ยอม ก็บอยคอต"',
                    zh: '💻 虚拟以此以此演示："拒绝飞以此以此行。要求他们以此以此以此以此以此让你通过Zoom参以此加。以此以此如果以此以此以此他们以此拒绝，就以此以此以此以此抵制。"'
                },
                consequence: {
                    en: '🚀 Digital Activism. You start a movement. Conferences begin offering hybrid options. You changed the industry norms.',
                    th: '🚀 นักกิจกรรมดิจิทัล คุณเริ่มการเคลื่อนไหว งานประชุมเริ่มมีทางเลือกแบบไฮบริด คุณเปลี่ยนบรรทัดฐานวงการ',
                    zh: '🚀 数字以此以此行动主义。你发起了一场以此运以此以此动。会议开以此始提供以此以此以此以此以此以此混合选项。你改以此以此变了行以此业以此规范。'
                },
                stats: { competence: 50, ethics: 80, leadership: 80, innovation: 90 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Offset & Forget: "Buy triple carbon offsets. Post the receipt. Fly first class. Problem solved (with money)."',
                    th: '🤷 จ่ายชดเชยแล้วจบ: "ซื้อคาร์บอนเครดิตชดเชย 3 เท่า โพสต์ใบเสร็จ บินเฟิร์สคลาส ปัญหาแก้ได้ (ด้วยเงิน)"',
                    zh: '🤷 抵消以此以此并忘以此以此记："购买三以此以此以此倍的碳以此以此抵消。张贴收据。以此坐以此头等舱飞行。问题解以此决以此（用以此以此以此以此以此以此钱）。"'
                },
                consequence: {
                    en: '💵 Greenwashing. You feel good, but the science says offsets are dodgy. You bought a clear conscience, not a cleaner planet.',
                    th: '💵 ฟอกเขียว คุณรู้สึกดี แต่วิทยาศาสตร์บอกว่าเครดิตชดเชยมันเทาๆ คุณซื้อความสบายใจ ไม่ใช่ซื้อโลกที่สะอาดขึ้น',
                    zh: '💵 漂以此以此绿。你感以此以此觉不错，但科以此以此学表明抵消是以此靠以此以此以此以此以此不住的。你买了以此以此问心以此以此无愧，而不是以此一个以此更以此清洁以此以此的地球。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'prof_023',
        text: {
            en: '📚 The Citation Ring: A group of colleagues invites you to join a "support group" where everyone agrees to cite each other\'s papers to boost rankings. It\'s undetectable but unethical.',
            th: '📚 แก๊งปั่น Citation: กลุ่มเพื่อนร่วมงานชวนคุณเข้า "กลุ่มช่วยเหลือ" ที่ทุกคนตกลงจะอ้างอิงเปเปอร์ของกันและกันเพื่อปั่นอันดับ ตรวจจับไม่ได้แต่ผิดจริยธรรม',
            zh: '📚 引以此用以此圈：以此一群同事邀请你加以此入一个"以此支持以此以此以此以此小组"，每个人都以此以此以此同以此以此以此意相互引以此用对以此方的以此以此以此论文以提以此以此以此高以此以此以此排以此名。无法以此检测以此但以此不以此以此以此道德。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Refuse: "I earn my citations. Count me out." You stay clean.',
                    th: '🚫 ปฏิเสธ: "ฉันหา Citation ด้วยฝีมือตัวเอง ไม่เอาด้วย" คุณตัวสะอาด',
                    zh: '🚫 拒绝："我自己赢得以此以此引用。以此以此别算以此上以此以此以此我。"你保持清以此以此以此白。'
                },
                consequence: {
                    en: '🛡️ Integrity. Your numbers are lower than theirs. They get promoted faster. But you sleep well at night.',
                    th: '🛡️ ศักดิ์ศรี ตัวเลขคุณต่ำกว่าเขา พวกเขาเลื่อนขั้นเร็วกว่า แต่คุณนอนหลับสบายไร้กังวล',
                    zh: '🛡️ 诚信。你的以此数据比他们的低。他们以此以此以此以此以此升以此职以此得更以此以此快。以此但以此以此你晚以此以此上睡得以此安稳。'
                },
                stats: { competence: 50, ethics: 90, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Join In: "Everyone does it. It\'s part of the game. I\'ll cite their irrelevant papers if they cite mine."',
                    th: '🤝 เอาด้วย: "ใครๆ ก็ทำกัน มันเป็นเกม ฉันจะอ้างอิงเปเปอร์ขยะของเขาถ้าเขาอ้างอิงของฉัน"',
                    zh: '🤝 加以此以此以此入："每个人以此以此都这以此么做。以此以此这是游以此以此以此以此以此以此以此以此戏的以此一部分。如果以此以此以此他们引用我的论以此以此文，我也会引以此用他以此们的不相关以此论文。"'
                },
                consequence: {
                    en: '📈 Metric Boost. Your h-index soars. You get a grant. You are part of the swamp now.',
                    th: '📈 ตัวเลขพุ่ง h-index ทะลุเพดาน คุณได้ทุนวิจัย คุณกลายเป็นส่วนหนึ่งของโคลนตมแล้ว',
                    zh: '📈以此以此以此指标提升。你的h指数以此飙以此以此升。你得到了以此以此以此以此一笔以此以此拨款。你以此以此现以此以此以此在以此以此以此成了以此以此以此泥以此潭的一部以此以此分。'
                },
                stats: { competence: 40, ethics: -40, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Expose Them: "Gather evidence. Report the ring to the journals. Blow the whistle on your friends."',
                    th: '🕵️ แฉให้ยับ: "เก็บหลักฐาน รายงานแก๊งนี้ต่อวารสาร เป่านกหวีดใส่เพื่อนตัวเอง"',
                    zh: '🕵️ 揭以此以此露他们："收集以此证据。向以此期以此刊以此举以此报以此该圈子。举以此以此报以此以此你的以此以此朋友。"'
                },
                consequence: {
                    en: '⚔️ War. The ring is busted. Papers are retracted. You are ostracized socially but hailed as a cleaner of science.',
                    th: '⚔️ สงคราม แก๊งแตก เปเปอร์โดนถอน คุณโดนสังคมรังเกียจแต่ได้รับยกย่องว่าเป็นคนทำความสะอาดวงการ',
                    zh: '⚔️ 战争。以此圈子被以此侦破。以此以此以此论以此文以此以此被以此以此撤回。以此以此以此你在以此以此社交以此上受到排以此斥，以此但以此被以此以此以此以此誉以此为以此以此科以此学以此的以此清以此洁工。'
                },
                stats: { competence: 60, ethics: 100, leadership: 50, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🧠 Strategic Citations: "Don\'t join the ring, but be \'generous\' with citations for friends who help me. Quid pro quo lite."',
                    th: '🧠 อ้างอิงเชิงกลยุทธ์: "ไม่เข้าแก๊ง แต่ \'ใจป้ำ\' อ้างอิงเพื่อนที่ช่วยฉันบ่อยๆ หมูไปไก่มาแบบเบาๆ"',
                    zh: '🧠 战以此以此以此以此略以此引用："不以此要以此加以此入该以此以此圈以此子，但对帮以此助我以此以此的朋友要\'慷以此慨\'以此引以此以此用以此以此。轻度以此以此投桃报李以此。" '
                },
                consequence: {
                    en: '⚖️ Standard Practice. You play the game without breaking the rules explicitly. You survive comfortably.',
                    th: '⚖️ วิถีปกติ คุณเล่นเกมโดยไม่แหกกฎชัดเจน คุณอยู่รอดสบายๆ',
                    zh: '⚖️ 标以此准以此以此做以此以此以此法。你在没有以此以此明确以此以此打以此破规则的以此情况下以此以此参与游以此以此戏。你舒服地以此以此活了以此下以此来。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 0 }
            }
        ]
    },
    {
        id: 'prof_024',
        text: {
            en: '🖥️ The Software License: Your lab\'s license for critical analysis software has expired. It costs $5k to renew. A student finds a cracked version on a torrent site.',
            th: '🖥️ ลิขสิทธิ์ซอฟต์แวร์: ไลเซนส์ซอฟต์แวร์วิเคราะห์ตัวสำคัญของแล็บหมดอายุ ต่ออายุ 5 พันดอลลาร์ นักเรียนไปหาตัวแคร็กมาจากเว็บทอเรนต์',
            zh: '🖥️ 软件许以此可以此证：你的以此实验以此以此以此以此以此以此室以此的关键分析软以此件许以此可证以此以此以此已过期。续以此费以此需要5千美元。一以此名以此学生在以此以此洪以此以此流网站上以此以此以此找以此以此到了以此一以此以此个以此破解版。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏴‍☠️ Use the Crack: "Budget is tight. Install it on the offline machine. Who will know?"',
                    th: '🏴‍☠️ ใช้ของเถื่อน: "งบมันน้อย ลงในเครื่องออฟไลน์ซะ ใครจะรู้"',
                    zh: '🏴‍☠️ 使以此用破解版："预以此算以此紧张。把它以此以此安装在以此离以此线机器上。谁以此以此以此会以此知道？"'
                },
                consequence: {
                    en: '🦠 Malware Risk. It works for a while, then ransomware locks your data. You lose weeks of work and look incompetent.',
                    th: '🦠 เสี่ยงมัลแวร์ ใช้ได้สักพัก Ransomware ล็อกข้อมูลจ้า เสียงานหลายสัปดาห์แถมดูไร้น้ำยา',
                    zh: '🦠 恶以此以此以此性软以此件风以此以此以此险。它以此以此以此奏效了以此一以此段以此时间，然后以此勒索软件以此以此以此锁以此住了你的数以此据。你以此以此失去以此以此了几以此周的以此以此以此以此工作，看起来很无以此以此以此能。'
                },
                stats: { competence: 20, ethics: -30, leadership: -30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Pay the Fee: "We follow the law. Spend the emergency money. Software is a tool, we pay for tools."',
                    th: '💰 จ่ายเงินซะ: "เราทำตามกฎหมาย ใช้งบฉุกเฉิน ซอฟต์แวร์คือเครื่องมือ เราต้องจ่ายค่าเครื่องมือ"',
                    zh: '💰 支以此以此付以此以此以此费以此以此用："我们遵以此以此守以此以此法律。花掉以此以此紧以此急以此资以此以此金。软以此件是以此一以此种工以此具，我们以此以此为工以此具付以此费。" '
                },
                consequence: {
                    en: '🛡️ Safe & Poor. You are broke for the month, but your data is safe and legal. No stress.',
                    th: '🛡️ ปลอดภัยแต่จน ถังแตกไปทั้งเดือนแต่ข้อมูลปลอดภัยและถูกกฎหมาย ไม่เครียด',
                    zh: '🛡️ 安以此全且贫以此以此穷。你这个以此月破以此产了，但你的数据以此以此以此以此是安全和合法的。没以此以此以此以此有压力。'
                },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🐧 Switch to Linux: "Time to learn open-source alternatives. It\'s free but hard to use. Force the students to learn coding."',
                    th: '🐧 ย้ายไป Linux: "ได้เวลาเรียนรู้ทางเลือกโอเพนซอร์ส ฟรีแต่ใช้ยาก บังคับเด็กเขียนโค้ดเป็นซะ"',
                    zh: '🐧 转以此以此以此向以此Linux："是时候以此以此以此以此学以此以此以此以此习开源替以此以此代以此以此以此以此时以此方以此以此案了。它以此是以此免以此以此费的，但很难使以此以此以此用。强以此迫以此学生以此学习以此编码。" '
                },
                consequence: {
                    en: '🚀 Skill Upgrade. The first month is hell. Then, your lab becomes super-proficient in Python/R. You are now independent of corporate software.',
                    th: '🚀 อัปเกรดสกิล เดือนแรกคือนรก หลังจากนั้นแล็บคุณจะเซียน Python/R กลายเป็นอิสระจากซอฟต์แวร์นายทุน',
                    zh: '🚀 技以此以此以此能升级。第一个月是以此地以此狱。以此以此然后，你的实验以此室在Python/R方面变以此以此得以此以此非以此常精通。你现以此以此在以此独立于企业软以此以此件。'
                },
                stats: { competence: 70, ethics: 60, leadership: 50, innovation: 90 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Beg for Discount: "Email the company. Tell them we are a poor academic lab doing good work. Ask for a waiver."',
                    th: '🤝 ขอส่วนลด: "อีเมลหาบริษัท บอกเขาว่าเราเป็นแล็บจนๆ ที่ทำดี ขอยกเว้นค่าธรรมเนียม"',
                    zh: '🤝 乞以此求以此折以此以此以此以此以此以此扣："给公司发以此以此电子邮件。告以此诉他们我们是一个正在以此做以此好事以此的以此贫穷以此学术实验以此室。申以此以此请豁以此以此免。" '
                },
                consequence: {
                    en: '✨ Education License. They give you a 90% discount. It took 3 emails, but you saved the day.',
                    th: '✨ ไลเซนส์การศึกษา เขาให้ส่วนลด 90% ส่งเมล 3 รอบแต่ก็ช่วยแล็บไว้ได้',
                    zh: '✨ 教以此以此以此以此育许以此可以此证。他以此们以此给了以此以此你以此以此90%的折以此以此以此以此扣。以此花以此了3封以此以此邮件，但你以此挽以此以此以此救以此以此以此以此了局以此以此以此以此面。'
                },
                stats: { competence: 60, ethics: 60, leadership: 60, innovation: 10 }
            }
        ]
    },
    {
        id: 'prof_025',
        text: {
            en: '🏫 The High School Intern: A brilliant 16-year-old wants to intern in your lab. It\'s a lot of paperwork and safety liability.',
            th: '🏫 เด็กฝึกงานมัธยม: เด็ก 16 สุดอัจฉริยะอยากมาฝึกงานในแล็บ เอกสารเยอะมากและความรับผิดชอบเรื่องความปลอดภัยก็สูง',
            zh: '🏫 高中实习生：一以此以此名以此才以此华以此以此以此横以此溢的16岁以此以此少年以此想在你的实验以此室实以此习。这涉以此及大量以此的文书以此工作和安以此以此全责以此以此任。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚪 "Too Young": "Come back when you are 18. I can\'t deal with the liability of a minor in a chem lab."',
                    th: '🚪 "เด็กไป": "อายุ 18 ค่อยมา ฉันรับผิดชอบผู้เยาว์ในแล็บเคมีไม่ไหว"',
                    zh: '🚪 "太以此以此年轻"："等你18岁再回来。我无以此以此以此以此法承以此以此担以此未成以此年人以此在以此化学实以此验室的责以此以此任。" '
                },
                consequence: {
                    en: '🛡️ Safe Choice. You avoided risk. The kid goes to a rival lab and wins a science fair. You missed out.',
                    th: '🛡️ ทางเลือกปลอดภัย เลี่ยงความเสี่ยง เด็กไปแล็บคู่แข่งและชนะงานวิทย์ คุณพลาดแล้ว',
                    zh: '🛡️ 安以此全的选以此择。你避以此免以此以此了风以此以此以此险。那个孩子去了以此以此竞以此争对以此以此手的实验室并赢得了以此以此以此科以此以此以此学以此展览以此以此以此会。你错以此以此过了。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🌟 Mentor Them: "I\'ll sign the papers. I\'ll personally supervise. Talent must be nurtured early."',
                    th: '🌟 ปั้นเด็ก: "ฉันจะเซ็นเอกสาร จะคุมเอง พรสวรรค์ต้องรีบปั้น"',
                    zh: '🌟 指以此以此导他们："以此以此我会签署文件。我会以此亲自监督。人才必须以此从以此小以此以此培养。" '
                },
                consequence: {
                    en: '🚀 Future Nobel. The kid is a genius. They do more work than your grad students. You are their lifelong mentor.',
                    th: '🚀 อนาคตโนเบล เด็กนี่มันอัจฉริยะ ทำงานเยอะกว่าเด็กป.เอกอีก คุณเป็นอาจารย์เขาตลอดชีวิต',
                    zh: '🚀 未来以此以此以此的以此诺以此以此贝尔以此奖以此得主。那以此个以此以此以此孩以此子是个天才。他们做的工作比你的研以此究以此生以此还多。你是他们终身的以此导以此以此师。'
                },
                stats: { competence: 60, ethics: 70, leadership: 80, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '🔍 Shadow Only: "You can watch, but don\'t touch the chemicals. Observation internship only."',
                    th: '🔍 ดูอย่างเดียว: "ดูได้ แต่ห้ามจับสารเคมี ฝึกงานแบบสังเกตการณ์เท่านั้น"',
                    zh: '🔍 仅以此以此限以此旁以此以此以此观："以此以此你可以看，但不以此以此要以此以此以此碰化学品。以此以此仅限观以此以此以此以此以此察实习。" '
                },
                consequence: {
                    en: '⚖️ Boredom. The kid gets bored and leaves after a week. You killed their spark.',
                    th: '⚖️ น่าเบื่อ เด็กเบื่อแล้วก็ไปในอาทิตย์เดียว คุณดับไฟฝันเขา',
                    zh: '⚖️ 无以此聊。那以此个孩以此子以此很无以此聊，一周后就离开以此以此了。你扼以此以此杀以此了他们的火以此花。'
                },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: -20 }
            },
            {
                id: 'D',
                text: {
                    en: '💻 Data Project: "Don\'t come to the lab. Here is a dataset. Analyze it from home. If you find something, we publish."',
                    th: '💻 โปรเจกต์ข้อมูล: "ไม่ต้องมาแล็บ เอาชุดข้อมูลนี้ไป วิเคราะห์จากที่บ้าน ถ้าเจออะไรดีๆ เราตีพิมพ์"',
                    zh: '💻 数据项目："别来实以此以此验室。这是一个以此数据以此以此以此集。在家以此分析以此它。如果你以此以此发现以此以此了以此什么，我们以此以此就发表。" '
                },
                consequence: {
                    en: '✨ Remote Success. Safe and productive. They find a pattern you missed. Good delegation.',
                    th: '✨ ความสำเร็จทางไกล ปลอดภัยและได้งาน เขาเจอแพทเทิร์นที่คุณพลาดไป มอบหมายงานได้ดี',
                    zh: '✨ 远以此以此程成功。安全且以此富以此有成效。以此他们发现了以此以此你以此以此错过的以此以此以此以此以此模式。很好的以此授以此以此权。'
                },
                stats: { competence: 60, ethics: 60, leadership: 60, innovation: 50 }
            }
        ]
    },
    {
        id: 'prof_026',
        text: {
            en: '🍾 The Tenure Party: You finally got tenure! How do you celebrate with your colleagues?',
            th: '🍾 ปาร์ตี้ฉลองตำแหน่ง: ได้ศาสตราจารย์ถาวรแล้ว! จะฉลองกับเพื่อนร่วมงานยังไง',
            zh: '🍾 终身教职以此以此派以此对：你终于以此获以此得以此以此以此了终以此以此身教职！以此以此你如何以此与同事以此一起以此庆以此祝？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🍷 Expensive Dinner: "Invite the senior faculty to a fine dining restaurant. Network with the elites. Leave the students out."',
                    th: '🍷 ดินเนอร์หรู: "เชิญพวกตัวท็อปไปกินร้านหรู สร้างคอนเนคชั่นกับชนชั้นนำ ทิ้งนักเรียนไว้ข้างหลัง"',
                    zh: '🍷 昂贵以此晚餐："邀以此请资深以此教以此员去以此高级餐厅。与精以此英以此建立联以此系。把学以此生以此以此排除在外。" '
                },
                consequence: {
                    en: '🤵 Club Membership. You are now truly "one of them." Your students feel a barrier growing, but your political capital is high.',
                    th: '🤵 สมาชิกคลับ คุณคือ "พวกเดียวกับเขา" แล้วจริงๆ นักเรียนรู้สึกถึงกำแพง แต่แต้มการเมืองคุณสูง',
                    zh: '🤵 俱乐部以此会员以此资格。以此以此你以此现以此以此在以此以此以此真以此正以此是"他们中的一员"了。以此以此你的学生以此以此以此以此感以此以此以此以此觉以此以此到障碍在以此增以此以此加，但以此你的政以此治以此资本很高。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🍕 Pizza in the Lab: "Order 50 pizzas for the whole department. Students, janitors, everyone invited. Keeping it grounded."',
                    th: '🍕 พิซซ่าในแล็บ: "สั่งพิซซ่า 50 ถาดเลี้ยงทั้งภาควิชา นักเรียน ภารโรง เชิญหมด ติดดินเข้าไว้"',
                    zh: '🍕 实验以此室以此披以此萨："为整以此个系以此以此以此以此订购50份披萨。学生、清洁以此以此以此以此工，以此邀请以此以此以此以此每以此个人。以此以此保以此以此持以此以此接地以此气。" '
                },
                consequence: {
                    en: '❤️ People\'s Prof. A legendary party. Morale is sky high. You spent $1000, but bought loyalty.',
                    th: '❤️ ศาสตราจารย์มหาชน ปาร์ตี้ในตำนาน ขวัญกำลังใจพุ่งปรี๊ด เสียเงินพันนึงแต่ได้ใจคน',
                    zh: '❤️ 人民以此以此教以此授。一以此场传以此奇以此以此以此的以此以此以此派对。士气以此以此以此以此高涨。你花以此了1000美以此以此元，但以此买以此来以此以此了以此以此以此忠诚。'
                },
                stats: { competence: 40, ethics: 70, leadership: 80, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '😴 Go Home & Sleep: "I\'ve been working 80 hours a week for 6 years. I\'m going home to sleep for 14 hours. No party."',
                    th: '😴 กลับไปนอน: "ฉันทำงาน 80 ชม. ต่ออาทิตย์มา 6 ปี กลับไปนอนยาว 14 ชม. ไม่จัดหรอกปาร์ตี้"',
                    zh: '😴 回家以此睡觉："我已以此经以此连以此续6年以此以此每周工作80小时了。我要回以此以此家以此睡14个小时。不开以此以此以此派对。" '
                },
                consequence: {
                    en: '💊 Recovery. You actually rest. You return on Monday fresh for the first time in a decade. Self-care win.',
                    th: '💊 ฟื้นฟู ได้พักจริงๆ กลับมาทำงานวันจันทร์แบบสดชื่นครั้งแรกในรอบทศวรรษ ชนะเลิศการดูแลตัวเอง',
                    zh: '💊 恢复。你以此真以此正以此得以此以此到了以此休息。周一你回以此以此来时，是十以此年来以此以此以此第以此以此以此以此以此以此以此以此一次感以此觉以此精力充以此沛。自以此我以此以此保以此养的胜利。'
                },
                stats: { competence: 60, ethics: 50, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🎤 Karaokebomb: "Rented a karaoke bar. Mandatory attendance for my grad students. Prepare to hear me sing \'I Will Survive\'."',
                    th: '🎤 ระเบิดคาราโอเกะ: "เหมาบาร์คาราโอเกะ เด็กป.เอกบังคับมา เตรียมฟังฉันร้อง \'I Will Survive\' ซะ"',
                    zh: '🎤 卡拉OK炸弹："租了一以此家卡拉OK吧。我的以此以此研究以此生必须以此以此参以此以此以此加。准以此备好以此听以此我以此唱\'I Will Survive\'。" '
                },
                consequence: {
                    en: '😄 Fun but Forced. The students have fun eventually, but "mandatory fun" is always a bit stressful. Good memories though.',
                    th: '😄 สนุกแต่บังคับ เด็กๆ ก็สนุกแหละ แต่ "ความสนุกภาคบังคับ" มันน่าเครียดนิดๆ แต่ก็เป็นความทรงจำที่ดี',
                    zh: '😄 有以此以此以此趣但以此是被以此以此被迫的。以此以此以此学以此生们最以此以此终以此玩得很开以此心，但"强以此制性以此以此的乐趣"以此以此总是有以此以此点以此以此压以此力。不过这是美好以此以此以此的以此回忆。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 10 }
            }
        ]
    },
    {
        id: 'prof_027',
        text: {
            en: '📉 The Decline: Your last 3 grant applications were rejected. You haven\'t published in a year. You feel your "prime" is over.',
            th: '📉 ขาลง: ขอทุนไป 3 รอบโดนปัดตกหมด ไม่ได้ตีพิมพ์มาปีนึงแล้ว รู้สึกว่า "ยุคทอง" ของตัวเองจบลงแล้ว',
            zh: '📉 下坡以此路："你以此以此以此最以此以此以此近的3份拨以此以此款申请以此都以此以此被拒以此绝以此了。你已以此以此经一以此年没有发以此表以此论文了。以此以此以此以此你感以此觉你的"以此全以此以此以此盛时以此期"以此已经结束了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔄 Reinvent: "Learn a completely new field (e.g., from Biology to Bio-Informatics). Start as a novice again. Scary but necessary."',
                    th: '🔄 ปฏิรูปต้วเอง: "เรียนสาขาใหม่ไปเลย (เช่น ชีววิทยา ไป ชีวสารสนเทศ) เริ่มเป็นมือใหม่อีกครั้ง น่ากลัวแต่จำเป็น"',
                    zh: '🔄 重以此塑："学以此以此习以此以此一个以此完以此全以此以此以此以此以此以此以此不同的领以此域（例如，从生物以此学到生以此以此物以此信息以此学）。再次以此以新手身以此份以此开以此以此始。以此以此可怕但有以此以此必要。" '
                },
                consequence: {
                    en: '🚀 Second Wind. You struggle for 2 years, then produce breakthrough interdisciplinary work. You are back on top.',
                    th: '🚀 ลมหายใจที่สอง ดิ้นรนอยู่ 2 ปี แต่ก็สร้างงานข้ามสายพันธุ์ที่ยอดเยี่ยม กลับมายืนหนึ่ง',
                    zh: '🚀 第以此二以此以此以此以此以此缕以此以此以此风。以此以此你挣以此以此扎了2年，然后以此生以此产以此以此以此出以此以此以此以此突破性以此的跨以此以此学科作品。以此以此你又回到以此以此以此了巅峰。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '👨‍💼 Go Admin: "If I can\'t research, I\'ll rule. Aim for Department Chair or Dean. Power over discovery."',
                    th: '👨‍💼 ไปเป็นผู้บริหาร: "ถ้าวิจัยไม่ได้ ก็ปกครองซะ เล็งเก้าอี้หัวหน้าภาคหรือคณบดี อำนาจเหนือการค้นพบ"',
                    zh: '👨‍💼 去搞行以此政："如果我以此不能以此以此以此以此进行研究，我就以此去以此统以此以此治。目以此以此以此以此标以此以此是系以此主以此任或以此以此院以此长。以此以此权以此以此力以此以此以此凌驾于发以此以此现之上。" '
                },
                consequence: {
                    en: '🏛️ Bureaucrat. You get the power. You stop doing science, but you control the money. A different kind of success.',
                    th: '🏛️ ข้าราชการ คุณได้อำนาจ เลิกทำวิทย์ แต่คุมเงิน ความสำเร็จคนละแบบ',
                    zh: '🏛️ 官以此以此以此以此僚。以此你以此得到了以此权以此以此力。以此你停以此止了科以此学研究，但你以此控以此制以此以此以此以此了资金。以此另一种以此以此成功的形以此以此以此以此式。'
                },
                stats: { competence: 30, ethics: 40, leadership: 80, innovation: -40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Collaborator: "Stop trying to be the lead. Join huge consortium papers as a supporting author. Ride the coattails."',
                    th: '🤝 ผู้ร่วมมือ: "เลิกพยายามเป็นตัวเอก ไปแจมกับเปเปอร์กลุ่มใหญ่ๆ เป็นผู้สนับสนุน เกาะชายเสื้อเขาไป"',
                    zh: '🤝 合以此以此以此以此作者："停以此以此以此以此止试以此图成为以此领导者。以此以此以此以以此支以此持作以此以此以此者的身以此以此份加入大型财以此以此团的以此论以此以此以此文。以此以此以此搭以此顺以此以此风车。" '
                },
                consequence: {
                    en: '🐢 Safe Decline. You stay employed. You publish, but you are never the "star" again. Comfortable obscurity.',
                    th: '🐢 ขาลงที่ปลอดภัย มีงานทำ มีงานตีพิมพ์ แต่ไม่เคยเป็น "ดาว" อีกเลย ความจืดจางที่แสนสบาย',
                    zh: '🐢 安以此全以此以此衰退。你保以此住了以此以此以此工以此以此作。以此你以此以此以此发表以此以此了论以此文，但以此你再也以此以此不是"明以此以此星"了。舒以此适的以此以此默默以此以此以此以此以此无以此闻。'
                },
                stats: { competence: 40, ethics: 50, leadership: 20, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '⚔️ Bitter Critic: "Start a blog criticizing modern research methods. If I can\'t create, I will critique."',
                    th: '⚔️ นักวิจารณ์ขี้แพ้: "เขียนบล็อกด่าวิธีวิจัยสมัยใหม่ ถ้าฉันสร้างไม่ได้ ฉันก็จะแซะ"',
                    zh: '⚔️ 尖以此以此以此酸以此刻薄以此的评论以此以此以此家："开以此以此以此以此一个以此以此博以此客批以此以此评现以此以此以此代以此以此研以此以此以此以此以此以此以此究方法。以此以此以此如果我以此不能创以此作，以此以此我就以此以此以此以此以此去批评。" '
                },
                consequence: {
                    en: '😡 Grumpy Old Prof. You become famous for being angry. It pays the bills (Simstack helps), but you are respected for sharpness, not science.',
                    th: '😡 ศ.แก่ขี้บ่น ดังเพราะความเกรี้ยวกราด ได้เงิน (จาก Substack มั้ง) คนนับถือความปากไว ไม่ใช่งานวิทย์',
                    zh: '😡 脾以此以此气以此暴躁以此的老教以此授。以此你以此因以此以此愤以此怒以此而成以此以此以此以此名。它支以此付以此了以此账单（Simstack有以此所帮助），但以此人们以此以此尊以此重你的以此是以此你的以此以此犀以此以此利，而不以此是以此科以此学。'
                },
                stats: { competence: 50, ethics: 30, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'prof_028',
        text: {
            en: '🔨 The Lab Renovation: The university gives you funds to renovate your lab. You can build a state-of-the-art facility OR a collaborative space designed for student interaction.',
            th: '🔨 รีโนเวทแล็บ: มหาลัยให้เงินทำแล็บใหม่ เลือกสร้างแล็บล้ำยุคสุดไฮเทค หรือ พื้นที่ทำงานร่วมที่ออกแบบให้เด็กได้ปฏิสัมพันธ์กัน',
            zh: '🔨 实验以此以此以此以此以此以此室以此以此以此以此改造：以此大以此以此学以此给你以此资金以此以此改以此以此以此造你以此的实验室。你以此可以建以此造一以此个最先以此进的设以此施以此或者以此一个以此以此以此以此专以此为以此以此以此学生以此以此以此互以此动设计的以此协以此作以此空间。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔬 Tech First: "Buy the best machines. Isolate the workspaces. We need precision, not chatting."',
                    th: '🔬 เทคโนโลยีต้องมาก่อน: "ซื้อเครื่องจักรที่ดีที่สุด แยกพื้นที่ทำงาน เราต้องการความแม่นยำ ไม่ใช่เม้าท์มอย"',
                    zh: '🔬 技以此以此术优以此先："购买以此以此最以此以此以此以此好的机器。隔以此以此以此以此离以此以此工作以此空间。我们需要以此精以此以此以此以此确以此，不以此是聊天。" '
                },
                consequence: {
                    en: '🤖 Automation. Productivity increases. Students feel lonely and isolated. It\'s a cold, hard science factory.',
                    th: '🤖 อัตโนมัติ ผลิตผลเพิ่ม นักเรียนเหงาและโดดเดี่ยว มันคือโรงงานวิทย์ที่เย็นชา',
                    zh: '🤖 自以此以此动化。以此生产力以此以此提高。学以此生感到孤独和以此以此以此以此以此孤立。以此这是以此以此以此一以此以此个冰冷、以此坚以此硬的以此科以此以此学以此工以此以此厂。'
                },
                stats: { competence: 70, ethics: 50, leadership: 30, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '☕ Collaboration First: "Open plan. Whiteboards everywhere. Coffee machine in the center. Ideas happen when people talk."',
                    th: '☕ การร่วมมือต้องมาก่อน: "โอเพนแพลน กระดานไวท์บอร์ดทุกที่ เครื่องชงกาแฟตรงกลาง ไอเดียเกิดตอนคนคุยกัน"',
                    zh: '☕ 协以此作优以此以此先："以此开放式以此以此布以此局。以此以此以此到处都以此以此以此是白板。咖啡机以此以此在中间。当以此以此人们以此以此以此以此交谈以此时，以此创以此意就以此会产以此以此生。" '
                },
                consequence: {
                    en: '✨ Creativity Hub. It\'s noisy, but the ideas flowing are amazing. Students love being there. The vibe is electric.',
                    th: '✨ ฮับความคิดสร้างสรรค์ เสียงดังหน่อยแต่ไอเดียไหลลื่นสุดยอด นักเรียนชอบมาอยู่ที่นี่ บรรยากาศมีไฟ',
                    zh: '✨ 创以此意中心。以此以此这里很以此吵，但以此流以此以此以此动的创以此以此意以此令人以此以此以此惊以此以此以此以此以此叹。以此学生们喜以此以此以此欢以此待在这里。以此氛围以此令人以此兴以此奋。'
                },
                stats: { competence: 50, ethics: 60, leadership: 70, innovation: 80 }
            },
            {
                id: 'C',
                text: {
                    en: '🔒 Security Fortress: "Biometric locks. Blast-proof glass. Make it ultra-secure for high-risk research. Get military contracts."',
                    th: '🔒 ป้อมปราการ: "ล็อกสแกนนิ้ว กระจกกันระเบิด ทำให้ปลอดภัยขั้นสุดสำหรับงานวิจัยเสี่ยงสูง รับงานกองทัพ"',
                    zh: '🔒 安以此全以此堡垒："生物以此识别以此锁。防以此爆玻璃。使以此以此以此其以此对高风以此险以此研以此究来说超以此级安以此全。以此获得以此以此军事以此合同。" '
                },
                consequence: {
                    en: '🛡️ Classified. You get rich military grants. But you can\'t talk about your work. Your lab is a black box.',
                    th: '🛡️ ความลับ ได้ทุนกองทัพรวยเละ แต่พูดเรื่องงานไม่ได้ แล็บคุณคือกล่องดำ',
                    zh: '🛡️ 机以此密。你获以此以此得了以此以此丰以此厚的以此军以此以此事以此拨以此款。但你以此以此不以此能谈以此论你的工作。你的实以此以此以此验室是以此一个黑匣以此子。'
                },
                stats: { competence: 60, ethics: 40, leadership: 50, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '💸 Cheap & Save: "Paint the walls, buy used desks, and keep the rest of the money for travel grants. The facility doesn\'t matter."',
                    th: '💸 ประหยัด & เก็บเงิน: "ทาสีผนัง ซื้อโต๊ะมือสอง เก็บเงินที่เหลือไว้เป็นทุนเดินทาง ตัวตึกไม่สำคัญหรอก"',
                    zh: '💸 廉以此以此价且以此以此以此省以此钱："粉以此刷以此以此以此以此以此以此墙壁，以此以此以此买以此以此二手书以此桌，把剩以此以此下以此的钱留以此以此以此作以此差旅补以此助。以此设以此施无关以此以此以此紧要。" '
                },
                consequence: {
                    en: '✈️ Travel Rich. Your lab looks dumpy, but your students go to every conference in Hawaii and Paris. They are happy global nomads.',
                    th: '✈️ เที่ยวรวย แล็บดูโทรม แต่เด็กได้ไปคอนเฟอเรนซ์ที่ฮาวายและปารีสทุกงาน เป็นนกขมิ้นอินเตอร์ที่มีความสุข',
                    zh: '✈️ 旅以此以此以此游以此以此以此富翁。你的实验以此以此室看起以此以此来很以此破以此旧，但你的以此学生去以此以此以此以此夏威夷和以此巴以此以此以此以此黎以此以此以此参加每一以此个会以此议。他以此以此们是以此快乐以此的全球以此以此游牧民。'
                },
                stats: { competence: 40, ethics: 50, leadership: 60, innovation: 20 }
            }
        ]
    },
    {
        id: 'prof_029',
        text: {
            en: '📜 The Legacy Data: Retiring professor gifts you 40 years of handwritten data notebooks. It\'s a goldmine but impossible to search. Digitizing it will take 1 year of student labor.',
            th: '📜 ข้อมูลมรดก: ศาสตราจารย์ที่เกษียณมอบสมุดจดข้อมูลด้วยมือตลอด 40 ปีให้คุณ มันคือขุมทรัพย์แต่ค้นหาไม่ได้เลย ต้องใช้แรงนักเรียน 1 ปีเพื่อแปลงเป็นดิจิทัล',
            zh: '📜 遗以此留以此以此数以此以此以此据：以此退以此以此休教授以此以此以此送给以此你40年以此以此以此的以此手写以此以此数据以此笔记以此本。这以此以此是一座以此金以此以此以此矿，但无法搜以此索。以此以此将其以此以此数以此字以此化以此以此将耗费以此以此以此以此1年以此的以此学生劳以此动力。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📥 Scanning Sweatshop: "Order the undergrads to type it all up. It\'s \'character building.\' No pay, just credit."',
                    th: '📥 โรงงานนรกสแกน: "สั่งให้เด็กป.ตรีพิมพ์มันทั้งหมด มันคือ \'การสร้างคาแรคเตอร์\' ไม่จ่ายเงิน ให้แต่เครดิต"',
                    zh: '📥 扫描以此血汗以此工厂："命以此令以此本科以此生把以此它以此以此们全部打以此出以此来。这以此是\'性以此以此格塑造\'。以此没以此以此有报以此酬，只以此有以此学以此分。" '
                },
                consequence: {
                    en: '📉 Hate. The undergrads despise you. The data gets digitized, but full of typos because they didn\'t care.',
                    th: '📉 ความเกลียดชัง เด็กป.ตรีเกลียดคุณ ข้อมูลถูกดิจิไทซ์แต่เต็มไปด้วยคำผิดเพราะพวกเขาไม่ใส่ใจ',
                    zh: '📉 仇以此恨。以此以此本科以此生以此以此鄙以此视你。以此以此数据被以此以此数以此字化了，但以此充满了以此拼以此以此写以此错以此误，因以此为他以此们以此以此不以此在乎。'
                },
                stats: { competence: 50, ethics: -20, leadership: -40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤖 Crowd-Source: "Upload scans online. Create a citizen science project asking the public to transcribe pages for fun/prizes."',
                    th: '🤖 ระดมพล: "อัปโหลดสแกนออนไลน์ สร้างโปรเจกต์วิทยาศาสตร์ภาคพลเมืองขอให้คนทั่วไปช่วยถอดความแลกกับความสนุก/รางวัล"',
                    zh: '🤖 众以此以此以此以此以此以此包："以此以此以此以此在线上以此以此传扫描件。以此创建一以此以此个公民科以此学项以此目，以此以此以此要求以此以此以此公众为以此了乐趣/以此奖以此以此品而转以此以此录页面。" '
                },
                consequence: {
                    en: '✨ Public Engagement. It becomes a fun internet challenge. Data digitized in 3 months for free. Innovation win.',
                    th: '✨ การมีส่วนร่วมสาธารณะ กลายเป็นชาเลนจ์สนุกๆ บนเน็ต ข้อมูลเสร็จใน 3 เดือนฟรีๆ ชนะเลิศนวัตกรรม',
                    zh: '✨ 公以此以此以此众参与。以此以此它变以此成了一以此个有趣以此的互联网以此挑战。数据以此在3个月内免以此以此费以此以此数字以此以此化。创以此以此新以此胜利。'
                },
                stats: { competence: 60, ethics: 70, leadership: 60, innovation: 90 }
            },
            {
                id: 'C',
                text: {
                    en: '🔥 Recycle Bin: "It\'s old data. Probably irrelevant. Throw it out. Focus on the future."',
                    th: '🔥 ถังขยะ: "ข้อมูลเก่า คงไม่สำคัญแล้ว ทิ้งไป โฟกัสอนาคต"',
                    zh: '🔥 回以此以此收以此箱："这以此以此是旧以此数据。可以此以此能以此以此无关以此以此以此紧以此要以此以此以此以此。以此以此以此扔以此掉以此它。专以此注以此于未来。" '
                },
                consequence: {
                    en: '📉 Lost History. You threw away the cure for a rare disease (maybe). You\'ll never know. Efficiency over wisdom.',
                    th: '📉 ประวัติศาสตร์ที่หายไป คุณทิ้งวิธีรักษาโรคหายากไป (มั้ง) คุณไม่มีวันรู้ ประสิทธิภาพเหนือปัญญา',
                    zh: '📉 丢以此以此以此以此失的历史。以此以此你以此以此以此扔掉了以此治以此以此愈以此以此以此一以此以此以此以此种罕以此以此见以此疾病的以此方以此法（以此以此也以此以此许以此以此）。以此你永远以此以此不以此以此会以此知道。以此以此以此效率以此以此胜过以此智以此慧。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Grant for Archivist: "Write a grant specifically to hire a professional archivist. Do it right, even if it takes time."',
                    th: '💰 ขอทุนจ้างคนเก็บ: "เขียนขอทุนเพื่อจ้างนักจดหมายเหตุอาชีพ ทำไห้ถูก แม้จะนาน"',
                    zh: '💰 资以此以此以此以此料员拨以此以此以此款："专以此门以此为以此聘请以此以此专以此业档以此以此案管理员以此以此撰以此写以此拨款申请。以此以此做对此以此以此以此事，即使以此这以此需要以此时间。" '
                },
                consequence: {
                    en: '🛡️ Professionalism. You get the money. The data is preserved perfectly. Historians love you.',
                    th: '🛡️ ความเป็นมืออาชีพ คุณได้เงิน ข้อมูลถูกเก็บรักษาอย่างสมบูรณ์แบบ นักประวัติศาสตร์รักคุณ',
                    zh: '🛡️ 专以此以此以此业精神。以此以此以此你以此得到以此以此以此以此了资金。以此以此以此数以此据被以此以此以此以此以此以此完以此以此美保以此存。以此历史学以此以此家以此爱以此你。'
                },
                stats: { competence: 50, ethics: 80, leadership: 50, innovation: 0 }
            }
        ]
    },
    {
        id: 'prof_030',
        text: {
            en: '📢 The Protest: Students are occupying the administration building to protest tuition hikes. The President asks you to go talk to them as a "neutral negotiator."',
            th: '📢 การประท้วง: นักศึกษายุตตึกบริหารประท้วงค่าเทอมขึ้น อธิการบดีขอให้คุณไปคุยกับพวกเขาในฐานะ "คนกลางเจรจา"',
            zh: '📢 抗以此议：学以此生以此以此以此们以此正以此在占领以此以此行以此以此政大楼，以此以此抗议以此学以此费上以此涨。以此校长请你以"以此中立谈判以此者"的以此身以此份去和以此以此以此以此他以此们以此谈谈。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Side with Students: "I go, but I join the sit-in. Tuition is too high. I stand with the kids."',
                    th: '🤝 เข้าข้างเด็ก: "ฉันไป แต่ฉันไปนั่งประท้วงด้วย ค่าเทอมแพงไป ฉันยืนข้างเด็ก"',
                    zh: '🤝 站在以此以此学生一边："我以此去了，但我以此以此以此以此以此以此加入了以此静坐以此示以此以此威。以此学费以此太以此以此以此以此高了。我和孩以此以此子以此以此们站在以此一以此以此时起。" '
                },
                consequence: {
                    en: '🔥 Rebel Prof. Administration hates you. Students love you. You might lose your bonus, but you are a campus hero.',
                    th: '🔥 ศาสตราจารย์ขบถ ผู้บริหารเกลียดคุณ นักเรียนรักคุณ คุณอาจอดโบนัส แต่คุณคือฮีโร่มหาลัย',
                    zh: '🔥 叛以此以此逆教以此授。管以此以此以此以此理层讨厌你。以此以此学生们爱以此你。以此你可以此以此以此以此以此以此时能以此以此会以此失去奖以此以此金，但你以此是校园英以此雄。'
                },
                stats: { competence: 40, ethics: 80, leadership: 80, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '👔 Side with Admin: "Tell the students to grow up and go to class. Economics dictates tuition must rise. Disperse now."',
                    th: '👔 เข้าข้างผู้บริหาร: "บอกเด็กให้โตได้แล้วและไปเรียน เศรษฐศาสตร์มันบังคับให้ค่าเทอมต้องขึ้น แยกย้ายเดี๋ยวนี้"',
                    zh: '👔 站在以此以此管以此以此以此理层一以此以此以此以此以此时边："告诉以此以此以此学生们长以此以此以此以此大并去上以此以此课。以此以此以此以此经以此以此济以此学以此决定以此了以此学费必以此须上涨。以此以此现以此以此以此以此以此在解以此以此散。" '
                },
                consequence: {
                    en: '🧊 Ice Cold. The protest breaks up, but your tires get slashed the next day. You are the establishment now.',
                    th: '🧊 เย็นชา ม็อบแตก แต่ยางรถคุณโดนกรีดวันรุ่งขึ้น คุณคือพวกอภิสิทธิ์ชนเต็มตัวแล้ว',
                    zh: '🧊 冰冷。抗以此以此议以此以此以此解散以此了，但第以此二天以此你的以此轮以此以此胎以此以此以此以此以此以此时被划以此破了。你以此现以此以此在是体以此制以此内以此以此的的以此以此人以此以此了。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ True Mediator: "Facilitate a town hall. Get the President to actually listen. Force a compromise (cap the hike at 2%)."',
                    th: '🗣️ คนกลางตัวจริง: "จัดทำประชาคณิต ให้อธิการบดีมาฟังจริงๆ บังคับให้เกิดการประนีประนอม (คุมเพดานขึ้นราคาที่ 2%)"',
                    zh: '🗣️ 真正以此以此的调以此以此以此以此解以此人："促以此成以此时一以此场以此市以此政厅会以此以此以此以此议。以此让校以此以此长真以此正倾听。强以此以此迫以此达以此成妥以此协（将涨以此以此幅以此限制在2%）。" '
                },
                consequence: {
                    en: '✨ Peacekeeper. Difficult work, but you diffuse the situation. Both sides respect your fairness.',
                    th: '✨ ผู้รักษาสันติภาพ งานยาก แต่คุณคลี่คลายสถานการณ์ได้ ทั้งสองฝ่ายเคารพความยุติธรรมของคุณ',
                    zh: '✨ 维以此和人员。以此时困以此难的工作，但以此你以此缓和以此了局以此势。以此双方以此都以此尊以此重以此你的公平。'
                },
                stats: { competence: 70, ethics: 70, leadership: 80, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Call in Sick: "Im suddenly feeling very ill. I cannot mediate. Good luck." Avoid the crossfire.',
                    th: '🤐 ป่วยการเมือง: "จู่ๆ ก็ป่วยหนัก ไปเจรจาไม่ได้ โชคดีนะ" เลี่ยงลูกหลง',
                    zh: '🤐 请以此病以此以此假："以此"突然以此感觉以此非以此常以此不以此舒服。我以此无法调以此解。以此以此祝你好运。"以此避以此免以此以此交火。'
                },
                consequence: {
                    en: '🐢 Cowardice. The protest turns violent. You watched it on TV. Safe, but useless.',
                    th: '🐢 ความขี้ขลาด ม็อบรุนแรง คุณดูข่าวผ่านทีวี ปลอดภัยแต่ไร้ประโยชน์',
                    zh: '🐢 怯以此懦。以此抗议以此变以此得以此暴力。你以此在电以此视上以此看着以此它。安以此全，但以此无用。'
                },
                stats: { competence: 30, ethics: 30, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'prof_031',
        text: {
            en: '🏫 The Online Course: A massive online learning platform (MOOC) wants you to record a course. It will reach 100,000 students, but you lose IP rights to your lectures.',
            th: '🏫 คอร์สออนไลน์: แพลตฟอร์มเรียนออนไลน์ยักษ์ใหญ่ (MOOC) อยากให้คุณอัดคอร์สสอน จะเข้าถึงนักเรียนแสนคน แต่คุณเสียสิทธิ์ IP ในคำสอนของคุณ',
            zh: '🏫 在线课程：一个大型在线学习平台（MOOC）希望你录制一门课程。它将覆盖10万名学生，但你将失去讲座的知识产权。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Sell Out: "Take the money. Reach the masses. Who cares about copyright if I\'m famous?"',
                    th: '💰 ขายวิญญาณ: "เอาเงิน เข้าถึงมวลชน ใครสนลิขสิทธิ์ถ้าฉันดัง"',
                    zh: '💰 出卖："拿钱。接触大众。如果我出名了，谁在乎版权？"'
                },
                consequence: {
                    en: '🌟 Ed-Tech Star. You become a global brand. The university is jealous but can\'t stop you.',
                    th: '🌟 ดารา Ed-Tech คุณกลายเป็นแบรนด์ระดับโลก มหาลัยอิจฉาแต่ห้ามคุณไม่ได้',
                    zh: '🌟 教育科技明星。你成为了一个全球品牌。大学很嫉妒，但无法阻止你。'
                },
                stats: { competence: 60, ethics: 40, leadership: 50, innovation: 70 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Protect IP: "My lectures are my life\'s work. I won\'t sign them away to a tech giant. Decline."',
                    th: '🚫 ปกป้อง IP: "คำสอนคือผลงานทั้งชีวิต ฉันไม่เซ็นยกให้ยักษ์ใหญ่เทคฯ ปฏิเสธ"',
                    zh: '🚫 保护知识产权："我的讲座是我毕生的心血。我不会把它们签给科技巨头。拒绝。"'
                },
                consequence: {
                    en: '🛡️ Intellectual Freedom. You miss the fame, but you own your mind. You record your own videos later on YouTube.',
                    th: '🛡️ อิสรภาพทางปัญญา คุณพลาดความดัง แต่คุณเป็นเจ้าของความคิดตัวเอง วันหลังคุณอัดลง YouTube เองก็ได้',
                    zh: '🛡️ 知识自由。你错过了名声，但你拥有自己的思想。以后你自己录制视频发到YouTube上。'
                },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Negotiate Terms: "I\'ll do it, but only if the content is Creative Commons licensed after 1 year. Fight for open access."',
                    th: '🤝 ต่อรองเงื่อนไข: "ฉันจะทำ แต่เนื้อหาต้องเป็น Creative Commons หลังครบ 1 ปี สู้เพื่อการเข้าถึงแบบเปิด"',
                    zh: '🤝 协商条款："我会做，但前提是内容在1年后获得知识共享许可。为开放获取而战。"'
                },
                consequence: {
                    en: '⚖️ Deal Maker. They agree reluctantly. You get the platform AND the ethics. Smart move.',
                    th: '⚖️ นักดีล เขาตกลงแบบไม่เต็มใจ คุณได้ทั้งพื้นที่และจริยธรรม เดินหมากฉลาด',
                    zh: '⚖️ 交易撮合者。他们勉强同意。你既得到了平台，又保住了道德。明智之举。'
                },
                stats: { competence: 60, ethics: 70, leadership: 60, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤖 AI Avatar: "License my likeness to let an AI teach the course based on my notes. Passive income forever."',
                    th: '🤖 อวตาร AI: "ขายสิทธิ์หน้าตาให้ AI สอนแทนตามโน้ตฉัน เสือนอนกินตลอดชาติ"',
                    zh: '🤖 AI化身："授权我的肖像，让AI根据我的笔记授课。永远的被动收入。"'
                },
                consequence: {
                    en: '👻 uncanny Valley. The AI is good... too good. Students prefer the robot to the real you. You replaced yourself.',
                    th: '👻 หุบเขาคนคล้าย AI มันเก่ง... เก่งเกินไป นักเรียนชอบหุ่นยนต์มากกว่าตัวจริงของคุณ คุณแทนที่ตัวเองซะงั้น',
                    zh: '👻 恐怖谷。AI很好……太好了。学生们更喜欢机器人而不是真实的你。你取代了你自己。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 90 }
            }
        ]
    },
    {
        id: 'prof_032',
        text: {
            en: '✈️ Sabbatical Dilemma: You are offered a prestigious 1-year sabbatical abroad. Your PhD students depend on you for weekly guidance. No one else can supervise them.',
            th: '✈️ ลาพักเพื่อวิจัย: ได้รับเสนอให้ไปพักวิจัย 1 ปีในต่างประเทศที่มีชื่อเสียง แต่เด็กป.เอกของคุณต้องการคำแนะนำทุกสัปดาห์ ไม่มีใครอื่นดูแลพวกเขาได้',
            zh: '✈️ 休假困境：你获得了为期一年的海外知名研修机会。但你的博士生每周都依赖你的指导。没有其他人能监督他们。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌍 Take Sabbatical: "This is a once-in-a-lifetime opportunity. I can supervise remotely via Zoom."',
                    th: '🌍 ไปพักวิจัย: "นี่คือโอกาสที่มาครั้งเดียวในชีวิต ฉันจะดูแลทางไกลผ่าน Zoom"',
                    zh: '🌍 接受休假："这是千载难逢的机会。我可以通过Zoom远程指导。"'
                },
                consequence: {
                    en: '📉 Remote Struggles. Time zones kill productivity. Two students drop out. Your career advances, but you lost protégés.',
                    th: '📉 ปัญหาระยะไกล ต่างเวลาทำลายผลงาน นักศึกษา 2 คนลาออก อาชีพของคุณก้าวหน้าแต่เสียศิษย์ไป',
                    zh: '📉 远程困难。时差严重影响效率。两名学生退学。你的职业发展了，但失去了门生。'
                },
                stats: { competence: 60, ethics: 20, leadership: 10, innovation: 70 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Decline: "My students come first. I will wait until they graduate."',
                    th: '🛑 ปฏิเสธ: "นักเรียนสำคัญกว่า ฉันจะรอจนกว่าพวกเขาจะจบ"',
                    zh: '🛑 拒绝："我的学生优先。我会等到他们毕业。"'
                },
                consequence: {
                    en: '❤️ Loyalty Rewarded. Students succeed brilliantly. They dedicate their dissertations to you. The sabbatical offer never comes again.',
                    th: '❤️ ความภักดีได้รับผลตอบแทน นักเรียนประสบความสำเร็จ พวกเขาอุทิศวิทยานิพนธ์ให้คุณ แต่โอกาสพักวิจัยจะไม่มีอีก',
                    zh: '❤️ 忠诚得到回报。学生取得辉煌成就。他们将论文献给你。但休假机会再也没有了。'
                },
                stats: { competence: 40, ethics: 90, leadership: 80, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Bring Them Along: "Negotiate to bring my 3 PhD students with me. Turn it into a team sabbatical."',
                    th: '🤝 พาไปด้วยกัน: "เจรจาให้พาเด็กป.เอก 3 คนไปด้วย เปลี่ยนเป็นการพักวิจัยแบบทีม"',
                    zh: '🤝 带上他们："协商把我的3名博士生一起带去。变成团队休假。"'
                },
                consequence: {
                    en: '✨ Dream Team. The collaboration produces 5 co-authored papers. Your students gain international experience. A legendary year.',
                    th: '✨ ทีมในฝัน ความร่วมมือสร้างงานวิจัยร่วม 5 ชิ้น นักเรียนได้ประสบการณ์ระดับนานาชาติ ปีแห่งตำนาน',
                    zh: '✨ 梦之队。合作产生了5篇合著论文。你的学生获得国际经验。传奇的一年。'
                },
                stats: { competence: 70, ethics: 60, leadership: 90, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '⏱️ Delay 6 Months: "Ask for a delayed start so I can help them reach a stable milestone first."',
                    th: '⏱️ เลื่อน 6 เดือน: "ขอเลื่อนเริ่มงานเพื่อให้ได้ช่วยนักเรียนถึงจุดสำคัญก่อน"',
                    zh: '⏱️ 推迟6个月："要求延迟开始，这样我可以先帮助他们达到稳定的里程碑。"'
                },
                consequence: {
                    en: '⚖️ Balanced Approach. Everyone is satisfied. Students are stable, you get the sabbatical. A mature compromise.',
                    th: '⚖️ แนวทางสมดุล ทุกคนพอใจ นักเรียนมั่นคง คุณได้พักวิจัย การประนีประนอมที่เป็นผู้ใหญ่',
                    zh: '⚖️ 平衡方法。每个人都满意。学生稳定，你也得到了休假。成熟的妥协。'
                },
                stats: { competence: 60, ethics: 70, leadership: 70, innovation: 40 }
            }
        ]
    },
    {
        id: 'prof_033',
        text: {
            en: '🧪 Lab Safety Violation: A brilliant postdoc repeatedly violates safety protocols to speed up experiments. They produce excellent results but endanger everyone.',
            th: '🧪 ละเมิดความปลอดภัยแล็บ: นักวิจัยหลังป.เอกที่เก่งละเมิดมาตรฐานความปลอดภัยซ้ำๆ เพื่อเร่งการทดลอง ผลงานดีมาก แต่เป็นอันตรายต่อทุกคน',
            zh: '🧪 实验室安全违规：一位杰出的博士后反复违反安全规程以加快实验速度。他们产出优秀成果但危及所有人。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Immediate Termination: "Fire them on the spot. Safety is non-negotiable."',
                    th: '🚨 ไล่ออกทันที: "ไล่ออกทันที ความปลอดภัยไม่มีต่อรอง"',
                    zh: '🚨 立即解雇："当场解雇。安全没有商量余地。"'
                },
                consequence: {
                    en: '🛡️ Zero Tolerance. The lab is safe. But you lose groundbreaking research and gain a reputation for being "too harsh."',
                    th: '🛡️ ไม่ยอมให้อภัย แล็บปลอดภัย แต่เสียงานวิจัยสำคัญไป และมีชื่อเสียงว่า "โหดเกินไป"',
                    zh: '🛡️ 零容忍。实验室安全了。但你失去了开创性研究，并获得了"太严厉"的名声。'
                },
                stats: { competence: 40, ethics: 90, leadership: 60, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '⚠️ Final Warning: "One more violation and you\'re out. Mandatory safety retraining this week."',
                    th: '⚠️ เตือนครั้งสุดท้าย: "อีกครั้งก็ออก ต้องเข้าฝึกความปลอดภัยใหม่สัปดาห์นี้"',
                    zh: '⚠️ 最后警告："再违规一次就开除。本周必须进行安全再培训。"'
                },
                consequence: {
                    en: '⚖️ Second Chance. They comply grudgingly. Work slows but stays safe. A fair balance.',
                    th: '⚖️ โอกาสครั้งที่สอง พวกเขาปฏิบัติตามอย่างไม่เต็มใจ งานช้าลงแต่ปลอดภัย สมดุลพอดี',
                    zh: '⚖️ 第二次机会。他们勉强遵守。工作变慢但安全。公平的平衡。'
                },
                stats: { competence: 50, ethics: 70, leadership: 60, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🔬 Isolate Workspace: "Give them a separate locked lab space. They can risk themselves but not others."',
                    th: '🔬 แยกพื้นที่ทำงาน: "ให้พื้นที่แล็บแยกที่ล็อคได้ เสี่ยงตัวเองได้แต่อย่าเสี่ยงคนอื่น"',
                    zh: '🔬 隔离工作空间："给他们一个单独的上锁实验室空间。他们可以冒险，但不能危及其他人。"'
                },
                consequence: {
                    en: '📉 Ethical Gray Zone. The research continues, but you enabled dangerous behavior. Legal liability looms.',
                    th: '📉 พื้นที่สีเทาทางจริยธรรม งานวิจัยดำเนินต่อ แต่คุณส่งเสริมพฤติกรรมอันตราย อาจมีความผิดทางกฎหมาย',
                    zh: '📉 道德灰色地带。研究继续，但你助长了危险行为。法律责任迫在眉睫。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Collaborate on Protocol: "Work with them to develop new protocols that are both safe AND fast."',
                    th: '🤝 ร่วมพัฒนาโปรโตคอล: "ทำงานร่วมกันเพื่อพัฒนาโปรโตคอลใหม่ที่ทั้งปลอดภัยและเร็ว"',
                    zh: '🤝 协作制定规程："与他们合作制定既安全又快速的新规程。"'
                },
                consequence: {
                    en: '✨ Innovation Win. You create industry-standard protocols. Published in Nature. Leadership at its finest.',
                    th: '✨ ชัยชนะนวัตกรรม สร้างโปรโตคอลมาตรฐานอุตสาหกรรม ตีพิมพ์ใน Nature ภาวะผู้นำระดับเทพ',
                    zh: '✨ 创新成功。你们制定了行业标准规程。发表在《自然》杂志上。领导力的最高境界。'
                },
                stats: { competence: 80, ethics: 70, leadership: 90, innovation: 90 }
            }
        ]
    },
    {
        id: 'prof_034',
        text: {
            en: '🌏 International Student Crisis: Your top student from abroad loses their visa due to policy changes. They have 2 weeks to leave or switch universities.',
            th: '🌏 วิกฤตนักเรียนต่างชาติ: นักเรียนหัวกะทิจากต่างประเทศเสียวีซ่าเพราะนโยบายเปลี่ยน มีเวลา 2 สัปดาห์ต้องออกหรือย้ายมหาลัย',
            zh: '🌏 国际学生危机：你顶尖的海外学生因政策变化而失去签证。他们有2周时间要么离开要么转学。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Follow Policy: "I sympathize but can\'t break immigration law. Help them transfer credits to a school in their home country."',
                    th: '⚖️ ทำตามนโยบาย: "เห็นใจแต่ฝืนกฎหมายตรวจคนเข้าเมืองไม่ได้ ช่วยโอนหน่วยกิตไปมหาลัยในประเทศเขา"',
                    zh: '⚖️ 遵守政策："我同情但不能违反移民法。帮助他们将学分转到本国学校。"'
                },
                consequence: {
                    en: '📉 Legal Compliance. You are safe legally. The student resents you forever. Potential is wasted.',
                    th: '📉 ปฏิบัติตามกฎหมาย คุณปลอดภัยทางกฎหมาย นักเรียนขุ่นเคืองคุณตลอดไป ศักยภาพสูญเปล่า',
                    zh: '📉 法律合规。你在法律上安全了。学生永远怨恨你。潜力被浪费。'
                },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🔥 Advocacy Campaign: "Launch a public campaign to pressure the university to sponsor an emergency visa extension."',
                    th: '🔥 รณรงค์สนับสนุน: "เปิดแคมเปญสาธารณะกดดันมหาลัยให้สนับสนุนขอวีซ่าฉุกเฉิน"',
                    zh: '🔥 倡导运动："发起公开运动，迫使大学赞助紧急签证延期。"'
                },
                consequence: {
                    en: '✨ Hero Status. The media picks it up. The university caves. The student stays. You made a real difference.',
                    th: '✨ สถานะฮีโร่ สื่อหยิบเรื่องขึ้นมา มหาลัยยอม นักเรียนอยู่ได้ คุณสร้างความเปลี่ยนแปลงจริงๆ',
                    zh: '✨ 英雄地位。媒体报道了此事。大学让步。学生留下了。你真的产生了影响。'
                },
                stats: { competence: 50, ethics: 80, leadership: 90, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '💰 Personal Sponsorship: "Hire them as a full-time research assistant on my grant. That might qualify them for a work visa."',
                    th: '💰 สนับสนุนส่วนตัว: "จ้างเป็นผู้ช่วยวิจัยเต็มเวลาจากเงินทุนฉัน อาจได้วีซ่าทำงาน"',
                    zh: '💰 个人赞助："用我的资助雇用他们为全职研究助理。这可能使他们有资格获得工作签证。"'
                },
                consequence: {
                    en: '⚖️ Creative Solution. It works, but drains your grant budget. You saved them but sacrificed lab resources.',
                    th: '⚖️ วิธีแก้สร้างสรรค์ ได้ผล แต่ใช้งบทุนหมดไป ช่วยเขาไว้ได้แต่เสียทรัพยากรแล็บ',
                    zh: '⚖️ 创造性解决方案。有效了，但耗尽了你的资助预算。你救了他们但牺牲了实验室资源。'
                },
                stats: { competence: 60, ethics: 70, leadership: 60, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🌍 Remote Completion: "Let them finish the degree remotely from home. Modern technology makes it possible."',
                    th: '🌍 จบแบบระยะไกล: "ให้จบปริญญาทางไกลจากบ้าน เทคโนโลยีสมัยใหม่ทำได้"',
                    zh: '🌍 远程完成："让他们在家远程完成学位。现代技术使之成为可能。"'
                },
                consequence: {
                    en: '⚠️ Half Solution. They get the degree but miss networking opportunities. A bittersweet ending.',
                    th: '⚠️ ครึ่งทาง ได้ปริญญาแต่พลาดโอกาสสร้างเครือข่าย จบแบบหวานอมขมกลืน',
                    zh: '⚠️ 半解决方案。他们获得了学位但错过了社交机会。苦乐参半的结局。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 40 }
            }
        ]
    },
    {
        id: 'prof_035',
        text: {
            en: '📝 Ghost Authorship Request: A pharmaceutical company offers $100K to add their CEO as co-author on your drug safety study, despite them doing no work.',
            th: '📝 ขอแอบเพิ่มชื่อผู้เขียน: บริษัทยาเสนอ 100,000 ดอลลาร์ให้เพิ่มชื่อ CEO เป็นผู้เขียนร่วมในงานวิจัยความปลอดภัยของยา ทั้งที่เขาไม่ได้ทำงาน',
            zh: '📝 幽灵作者请求：一家制药公司提供10万美元，要求将他们的CEO添加为你药物安全研究的合著者，尽管他们没做任何工作。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Hard Refusal: "Authorship must be earned. This is academic fraud. I decline."',
                    th: '🚫 ปฏิเสธสนิท: "ชื่อผู้เขียนต้องหามาด้วยความ��ายงาน นี่คือการทุจริตทางวิชาการ ปฏิเสธ"',
                    zh: '🚫 坚决拒绝："作者身份必须赚得。这是学术欺诈。我拒绝。"'
                },
                consequence: {
                    en: '🛡️ Ethical Stand. Your integrity is unquestionable. But the company blacklists you from future funding.',
                    th: '🛡️ จุดยืนจริยธรรม ความซื่อสัตย์ไม่ต้องสงสัย แต่บริษัทขึ้นบัญชีดำไม่ให้ทุนอนาคต',
                    zh: '🛡️ 道德立场。你的诚信毋庸置疑。但公司将你列入黑名单，不再提供资助。'
                },
                stats: { competence: 40, ethics: 100, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Accept the Deal: "It\'s just a name. The science is still valid. This money funds 3 more studies."',
                    th: '💰 ตกลง: "แค่ชื่อ วิทยาศาสตร์ยังถูกต้อง เงินนี้ทำวิจัยได้อีก 3 งาน"',
                    zh: '💰 接受交易："只是一个名字。科学仍然有效。这笔钱资助3项更多研究。"'
                },
                consequence: {
                    en: '📉 Corruption. A whistleblower exposes it. Your career is permanently damaged. Was $100K worth your soul?',
                    th: '📉 ทุจริต มีคนแฉ อาชีพเสียหายถาวร 100,000 ดอลลาร์คุ้มกับจิตวิญญาณเหรอ?',
                    zh: '📉 腐败。举报人揭露了它。你的职业生涯永久受损。10万美元值得你的灵魂吗？'
                },
                stats: { competence: 30, ethics: -50, leadership: -40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Acknowledgment Only: "You can be in the Acknowledgments section as a funder, not as an author."',
                    th: '🤝 ขอบคุณเท่านั้น: "ขึ้นชื่อในส่วนขอบคุณในฐานะผู้ให้ทุน ไม่ใช่ผู้เขียน"',
                    zh: '🤝 仅致谢："你可以作为资助者出现在致谢部分，而不是作者。"'
                },
                consequence: {
                    en: '⚖️ Compromise. They accept reluctantly. You keep integrity and most of the money. Diplomacy wins.',
                    th: '⚖️ ประนีประนอม พวกเขายอมรับอย่างไม่เต็มใจ คุณรักษาความซื่อสัตย์และได้เงินส่วนใหญ่ การทูตชนะ',
                    zh: '⚖️ 妥协。他们勉强接受。你保持了诚信并获得大部分资金。外交获胜。'
                },
                stats: { competence: 60, ethics: 70, leadership: 70, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📰 Public Exposure: "Report this attempted bribery to the Journal Ethics Board and the media."',
                    th: '📰 เปิดโปงต่อสาธารณะ: "รายงานการพยายามติดสินบนนี้ต่อคณะกรรมการจริยธรรมและสื่อ"',
                    zh: '📰 公开曝光："向期刊伦理委员会和媒体报告这一贿赂企图。"'
                },
                consequence: {
                    en: '🔥 Industry Shakeup. You become a crusader against ghost authorship. The company faces investigations. You\'re a legend.',
                    th: '🔥 สั่นสะเทือนวงการ คุณกลายเป็นนักรณรงค์ต่อต้าน Ghost Authorship บริษัทถูกสอบสวน คุณเป็นตำนาน',
                    zh: '🔥 行业震荡。你成为反对幽灵作者的斗士。公司面临调查。你成了传奇。'
                },
                stats: { competence: 50, ethics: 90, leadership: 80, innovation: 40 }
            }
        ]
    },
    {
        id: 'prof_036',
        text: {
            en: '💀 Posthumous Publication: Your mentor passed away before finishing their magnum opus. You have access to all notes. Do you finish and publish it under both names?',
            th: '💀 ตีพิมพ์หลังเสีย: อาจารย์ที่ปรึกษาเสียชีวิตก่อนทำงานชิ้นเอกเสร็จ คุณมีโน้ตทั้งหมด จะทำต่อและตีพิมพ์ใต้ชื่อทั้งสองคนไหม?',
            zh: '💀 遗作发表：你的导师在完成其代表作之前去世了。你可以访问所有笔记。你会完成并以两人名义发表吗？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✍️ Finish as Co-Author: "Complete the work. Publish under both our names with a tribute introduction."',
                    th: '✍️ ทำต่อในนามผู้เขียนร่วม: "ทำงานให้เสร็จ ตีพิมพ์ใต้ชื่อทั้งสองพร้อมบทนำทำความเคารพ"',
                    zh: '✍️ 作为合著者完成："完成工作。以我们两人的名义发表，并附上致敬序言。"'
                },
                consequence: {
                    en: '❤️ Beautiful Legacy. The field honors your mentor. You gain r��spect for finishing their dream. A touching collaboration.',
                    th: '❤️ มรดกที่งดงาม วงการให้เกียรติอาจารย์ คุณได้รับความเคารพที่ทำฝันเขาให้สำเร็จ ความร่วมมือที่น่าประทับใจ',
                    zh: '❤️ 美好的遗产。该领域向你的导师致敬。你因完成他们的梦想而获得尊重。感人的合作。'
                },
                stats: { competence: 70, ethics: 80, leadership: 60, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Preserve as Archive: "Don\'t publish it. Preserve the incomplete manuscript as historical archive only."',
                    th: '🛑 เก็บเป็นจดหมายเหตุ: "อย่าตีพิมพ์ เก็บต้นฉบับไม่สมบูรณ์ไว้เป็นจดหมายเหตุทางประวัติศาสตร์"',
                    zh: '🛑 保存为档案："不要发表。仅将未完成的手稿作为历史档案保存。"'
                },
                consequence: {
                    en: '⚖️ Conservative Respect. Scholars appreciate the restraint. But the world never sees the potential breakthrough.',
                    th: '⚖️ ความเคารพแบบอนุรักษนิยม นักวิชาการชื่นชมความรู้จักยับยั้ง แต่โลกจะไม่เห็นการก้าวกระโดดที่อาจเกิดขึ้น',
                    zh: '⚖️ 保守的尊重。学者们欣赏这种克制。但世界永远不会看到潜在的突破。'
                },
                stats: { competence: 40, ethics: 70, leadership: 50, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '📖 Publish Solo: "It\'s 90% my work to finish it. Dedicate it to their memory, but my name goes first."',
                    th: '📖 ตีพิมพ์ชื่อคนเดียว: "90% เป็นงานฉันที่ทำให้เสร็จ อุทิศให้เขาเป็นอนุสรณ์ แต่ชื่อฉันขึ้นก่อน"',
                    zh: '📖 单独发表："完成它90%是我的工作。献给他们的记忆，但我的名字在前。"'
                },
                consequence: {
                    en: '📉 Reputation Hit. Other scholars call you an opportunist. The mentor\'s family feels betrayed.',
                    th: '📉 เสียชื่อเสียง นักวิชาการคนอื่นว่าคุณฉวยโอกาส ครอบครัวอาจารย์รู้สึกถูกหักหลัง',
                    zh: '📉 声誉受损。其他学者称你为机会主义者。导师的家人感到被背叛。'
                },
                stats: { competence: 50, ethics: 20, leadership: 10, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🧑‍🤝‍🧑 Collaborative Completion: "Invite their former students to co-author. Make it a memorial project."',
                    th: '🧑‍🤝‍🧑 ทำต่อแบบร่วมมือ: "เชิญศิษย์เก่าของเขามาเขียนร่วม ทำเป็นโครงการอนุสรณ์"',
                    zh: '🧑‍🤝‍🧑 协作完成："邀请他们的前学生共同撰写。使其成为纪念项目。"'
                },
                consequence: {
                    en: '✨ Community Triumph. A 10-author paper honoring the mentor. Everyone contributes. A masterclass in leadership.',
                    th: '✨ ชัยชนะของชุมชน งาน 10 ผู้เขียนเพื่อเป็นเกียรติแก่อาจารย์ ทุกคนมีส่วนร่วม มาสเตอร์คลาสภาวะผู้นำ',
                    zh: '✨ 社区胜利。一篇由10位作者撰写的论文以纪念导师。每个人都做出了贡献。领导力的大师课。'
                },
                stats: { competence: 60, ethics: 90, leadership: 100, innovation: 40 }
            }
        ]
    },
    {
        id: 'prof_037',
        text: {
            en: '📊 Grade Inflation Pressure: The Dean wants all faculty to raise average GPAs to improve rankings. Your class average is 2.8 (honest grading). They want 3.5+.',
            th: '📊 กดดันเกรด: คณบดีต้องการให้อาจารย์ทุกคนยกเกรดให้สูงขึ้นเพื่อเพิ่ม Ranking ชั้นคุณเฉลี่ย 2.8 (ให้เกรดจริง) แต่ต้องการ 3.5+',
            zh: '📊 成绩膨胀压力：院长希望所有教师提高平均GPA以改善排名。你的班级平均成绩是2.8（诚实评分）。他们想要3.5+。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Refuse: "I grade on merit. Inflating grades devalues the degree."',
                    th: '🛑 ปฏิเสธ: "ฉันให้เกรดตามความสามารถ การยกเกรดทำให้ปริญญาไร้ค่า"',
                    zh: '🛑 拒绝："我按成绩评分。成绩膨胀会贬低学位价值。"'
                },
                consequence: {
                    en: '🛡️ Integrity Maintained. Students respect you. The Dean threatens your teaching load.',
                    th: '🛡️ รักษาความซื่อสัตย์ นักเรียนเคารพคุณ คณบดีขู่จะลดภาระสอน',
                    zh: '🛡️ 保持诚信。学生尊重你。院长威胁你的教学负担。'
                },
                stats: { competence: 40, ethics: 90, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Comply: "Fine. Everyone gets +1 letter grade. Easy money for me."',
                    th: '💰 ยอม: "ได้ ทุกคนได้เกรดสูงขึ้น 1 ระดับ งานง่ายสำหรับฉัน"',
                    zh: '💰 服从："好的。每个人都提高一个等级。对我来说很容易。"'
                },
                consequence: {
                    en: '📉 Hollow Victory. Students pass without learning. Your reputation as an educator plummets.',
                    th: '📉 ชัยชนะกลวงๆ นักเรียนผ่านโดยไม่ได้เรียนรู้ ชื่อเสียงในฐานะครูตกต่ำ',
                    zh: '📉 空洞的胜利。学生不学习就通过了。你作为教育者的声誉一落千丈。'
                },
                stats: { competence: 30, ethics: -30, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Curve Adjustment: "Add optional extra credit projects that actually teach more material. Earn the higher grades."',
                    th: '🤝 ปรับเกณฑ์: "เพิ่มโปรเจกต์พิเศษที่สอนเพิ่มเติมจริงๆ หาเกรดสูงมาด้วยความรู้"',
                    zh: '🤝 调整曲线："添加可选的额外学分项目，实际教授更多材料。赚取更高的成绩。"'
                },
                consequence: {
                    en: '⚖️ Middle Path. Motivated students thrive. Lazy ones still fail. A fair compromise.',
                    th: '⚖️ ทางสายกลาง นักเรียนขยันเจริญ คนขี้เกียจก็ยังตก การประนีประนอมที่ยุติธรรม',
                    zh: '⚖️ 中间路线。积极的学生茁壮成长。懒惰的人仍然失败。公平的妥协。'
                },
                stats: { competence: 60, ethics: 60, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '📰 Public Resistance: "Write an op-ed exposing grade inflation practices. Make it a national conversation."',
                    th: '📰 ต่อต้านต่อสาธารณะ: "เขียนบทความเปิดโปงการยกเกรด ทำให้เป็นประเด็นระดับชาติ"',
                    zh: '📰 公开抵制："撰写专栏文章揭露成绩膨胀做法。使其成为全国性话题。"'
                },
                consequence: {
                    en: '🔥 Controversial Hero. Media loves it. The Dean hates you. You become a symbol of reform.',
                    th: '🔥 ฮีโร่ที่ถกเถียง สื่อชอบมาก คณบดีเกลียดคุณ คุณกลายเป็นสัญลักษณ์ของการปฏิรูป',
                    zh: '🔥 有争议的英雄。媒体喜欢它。院长讨厌你。你成为改革的象征。'
                },
                stats: { competence: 50, ethics: 80, leadership: 70, innovation: 60 }
            }
        ]
    },
    {
        id: 'prof_038',
        text: {
            en: '❌ Low Enrollment Crisis: Your specialized seminar on "Advanced Pedagogical Theory" only has 3 students enrolled. The university minimum is 10. The administration threatens to cancel it.',
            th: '❌ วิกฤตคนลงทะเบียนน้อย: วิชาสัมมนาพิเศษเรื่อง "ทฤษฎีการสอนขั้นสูง" ของคุณมีนักเรียนลงแค่ 3 คน ขั้นต่ำของมหาลัยคือ 10 คน ฝ่ายบริหารขู่จะยกเลิกคลาส',
            zh: '❌ 招生不足危机：你关于“高级教学理论”的专业研讨会只有3名学生注册。大学最低要求是10人。行政部门威胁要取消它。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Accept Cancellation: "Rules are rules. I will use the free time to write my grant proposal instead."',
                    th: '🛑 ยอมรับการยกเลิก: "กฎก็คือกฎ ฉันจะใช้เวลาว่างนี้ไปเขียนข้อเสนอทุนวิจัยแทน"',
                    zh: '🛑 接受取消：“规则就是规则。我会利用这段空闲时间写我的拨款申请。”'
                },
                consequence: {
                    en: '📉 Lost Educational Opportunity. The 3 passionate students are disappointed and scramble to find another elective.',
                    th: '📉 เสียโอกาสทางการศึกษา นักเรียน 3 คนที่ตั้งใจเรียนผิดหวังและต้องรีบหาวิชาเลือกอื่น',
                    zh: '📉 失去教育机会。3名热情的学生感到失望，并匆忙寻找另一门选修课。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 The "Easy A" Strategy: "Spread the word that this class is an easy A with no exams. We\'ll fill the seats by tomorrow."',
                    th: '💰 กลยุทธ์ "เกรด A ง่าย": "ปล่อยข่าวไปว่าวิชานี้แจก A ไม่มีสอบ เดี๋ยวคนก็ลงเต็มพรุ่งนี้"',
                    zh: '💰 “简单A”策略：“散布消息说这门课很容易拿A，没有考试。我们明天就能坐满。”'
                },
                consequence: {
                    en: '📉 Academic Dilution. You get 20 students, but most are disengaged. The original 3 feel cheated.',
                    th: '📉 วิชาการเจือจาง คุณได้นักเรียน 20 คนแต่ส่วนใหญ่ไม่สนใจเรียน นักเรียน 3 คนแรกทึ่ตั้งใจรู้สึกเหมือนโดนหลอก',
                    zh: '📉 学术稀释。你有20名学生，但大多数人都心不在焉。最初的3人感到受骗。'
                },
                stats: { competence: 30, ethics: -20, leadership: 20, innovation: -30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Collaborative Merger: "I\'ll co-teach with Professor Miller\'s \'History of Education\' class. We can combine our small cohorts into a powerful interdisciplinary seminar."',
                    th: '🤝 ควบรวมวิชา: "ฉันจะสอนร่วมกับวิชา \'ประวัติศาสตร์การศึกษา\' ของศาสตราจารย์มิลเลอร์ เราจะรวมกลุ่มเล็กๆ เป็นสัมมนาสหวิทยาการที่ทรงพลัง"',
                    zh: '🤝 合作合并：“我将与米勒教授的‘教育史’课程共同授课。我们可以将我们的小团体合并成一个强大的跨学科研讨会。”'
                },
                consequence: {
                    en: '✨ Synergy & Success. The combined class is a hit. Students love the dual perspective. Administration praises your adaptability.',
                    th: '✨ พลังร่วมและความสำเร็จ คลาสรวมได้รับความนิยมมาก นักเรียนชอบมุมมองคู่ขนาน ผู้บริหารชมเชยความยืดหยุ่นของคุณ',
                    zh: '✨ 协同与成功。合并后的课程大受欢迎。学生们喜欢双重视角。行政部门称赞你的适应能力。'
                },
                stats: { competence: 70, ethics: 60, leadership: 80, innovation: 70 }
            },
            {
                id: 'D',
                text: {
                    en: '🌐 Go Global (MOOC): "I will open the course online as a MOOC for free. If thousands enroll globally, the university can\'t say there\'s no interest."',
                    th: '🌐 โกอินเตอร์ (MOOC): "ฉันจะเปิดคอร์สออนไลน์เป็น MOOC ฟรี ถ้าคนลงเป็นพันจากทั่วโลก มหาลัยจะบอกว่าไม่มีคนสนใจไม่ได้"',
                    zh: '🌐 走向全球 (MOOC)：“我将作为MOOC免费在线开设这门课程。如果全球有数千人注册，大学就不能说没有兴趣。”'
                },
                consequence: {
                    en: '🚀 International Fame. 5,000 students enroll from 40 countries. You become a digital education pioneer.',
                    th: '🚀 ชื่อเสียงระดับโลก นักเรียน 5,000 คนจาก 40 ประเทศลงทะเบียน คุณกลายเป็นผู้บุกเบิกการศึกษายุคดิจิทัล',
                    zh: '🚀以此国际声誉。来自40个国家的5,000名学生注册。你成为数字教育的先驱。'
                },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 100 }
            }
        ]
    },
    {
        id: 'prof_039',
        text: {
            en: '🎬 usage in Documentary: A major streaming service wants to film your lectures for a documentary series on "The Future of Thought". It brings prestige, but cameras might affect student behavior.',
            th: '🎬 ถ่ายทำสารคดี: บริการสตรีมมิ่งยักษ์ใหญ่อยากมาถ่ายเลคเชอร์คุณทำสารคดีเรื่อง "อนาคตทางความคิด" มันนำมาซึ่งชื่อเสียง แต่กล้องอาจกระทบพฤติกรรมเด็ก',
            zh: '🎬 纪录片拍摄：一家大型流媒体服务公司想拍摄你的讲座，制作关于“思想的未来”的纪录片系列。这带来了声望，但摄像机可能会影响学生的行为。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📹 Full Access: "Film everything. The world deserves to see what we do here regarding critical thinking."',
                    th: '📹 อนุญาตเต็มที่: "ถ่ายทุกอย่าง โลกสมควรเห็นว่าเราทำอะไรที่นี่เกี่ยวกับการคิดวิเคราะห์"',
                    zh: '📹 完全准入：“拍摄一切。世界应该看到我们在批判性思维方面所做的事情。”'
                },
                consequence: {
                    en: '🌟 Celebrity Professor. You become famous, but your classroom turns into a performance stage. Private discussions vanish.',
                    th: '🌟 ศาสตราจารย์คนดัง คุณโด่งดัง แต่ห้องเรียนกลายเป็นเวทีการแสดง การอภิปรายส่วนตัวหายไป',
                    zh: '🌟 名人教授。你出名了，但在你的课堂变成了表演舞台。私人讨论消失了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 60, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Decline: "My classroom is a sanctuary for learning, not a refined set for entertainment. No cameras."',
                    th: '🛑 ปฏิเสธ: "ห้องเรียนฉันคือพื้นที่ศักดิ์สิทธิ์เพื่อการเรียนรู้ ไม่ใช่ฉากเพื่อความบันเทิง ห้ามถ่าย"',
                    zh: '🛑 拒绝：“我的教室是学习的圣殿，不是娱乐的布景。不要摄像机。”'
                },
                consequence: {
                    en: '🛡️ Integrity Preserved. Students feel safe to speak their minds. The Dean is annoyed at the missed PR opportunity.',
                    th: '🛡️ รักษาความซื่อสัตย์ นักเรียนรู้สึกปลอดภัยที่จะพูดสิ่งที่คิด คณบดีรำคาญที่พลาดโอกาส PR',
                    zh: '🛡️ 保持正直。学生们感到安全，敢于说出自己的想法。院长对错过的公关机会感到恼火。'
                },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Controlled Filming: "You can interview me and film B-roll of the campus, but the actual seminar discussions are off-limits."',
                    th: '🤝 ถ่ายแบบควบคุม: "สัมภาษณ์ฉันและถ่ายบรรยากาศมหาลัยได้ แต่ช่วงอภิปรายในสัมมนาห้ามถ่ายเด็ดขาด"',
                    zh: '🤝 受控拍摄：“你们可以采访我并拍摄校园的空镜头，但实际的研讨会讨论是禁止的。”'
                },
                consequence: {
                    en: '⚖️ Balanced Approach. You get the publicity without compromising student privacy. A professional compromise.',
                    th: '⚖️ แนวทางสมดุล คุณได้พื้นที่สื่อโดยไม่ละเมิดความเป็นส่วนตัวนักเรียน การประนีประนอมอย่างมืออาชีพ',
                    zh: '⚖️ 平衡的方法。你在不损害学生隐私的情况下获得了宣传。专业的妥协。'
                },
                stats: { competence: 60, ethics: 70, leadership: 60, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🎥 Student Production: "Instead of outsiders, let my media students film and edit it as their capstone project. They learn real skills."',
                    th: '🎥 โปรดักชั่นนักเรียน: "แทนที่จะให้คนนอกทำ ให้นักเรียนสื่อสารมวลชนของฉันถ่ายและตัดต่อเป็นโปรเจกต์จบ ได้ฝึกทักษะจริง"',
                    zh: '🎥 学生制作：“与其让外人来，不如让我的媒体专业学生作为他们的毕业设计来拍摄和编辑。他们能学到真正的技能。”'
                },
                consequence: {
                    en: '✨ Educational Innovation. The documentary wins a student film award. You empower your students directly.',
                    th: '✨ นวัตกรรมการศึกษา สารคดีได้รับรางวัลภาพยนตร์นักเรียน คุณเสริมพลังให้นักเรียนโดยตรง',
                    zh: '✨ 教育创新。纪录片获得了学生电影奖。你直接赋予了你的学生权力。'
                },
                stats: { competence: 70, ethics: 60, leadership: 80, innovation: 90 }
            }
        ]
    },
    {
        id: 'prof_040',
        text: {
            en: '🎙️ Lecture Recording Debate: The Student Union demands that all lectures be recorded and uploaded effectively immediately. Some faculty worry about content being taken out of context.',
            th: '🎙️ ข้อถกเถียงเรื่องอัดเสียง: สโมสรนักศึกษาเรียกร้องให้อัดและอัพโหลดเลคเชอร์ทั้งหมดทันที อาจารย์บางคนกังวลเรื่องเนื้อหาถูกตัดต่อผิดบริบท',
            zh: '🎙️ 讲座录制辩论：学生会要求立即录制并上传所有讲座。一些教师担心内容被断章取义。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📹 Total Transparency: "I have nothing to hide. Record it all. Knowledge should be accessible to those who miss class."',
                    th: '📹 โปร่งใสที่สุด: "ฉันไม่มีอะไรต้องซ่อน อัดให้หมด ความรู้ควรเข้าถึงได้สำหรับคนที่ขาดเรียน"',
                    zh: '📹 完全透明：“我没有什么可隐瞒的。全部录下来。缺课的人也应该能获得知识。”'
                },
                consequence: {
                    en: '📢 Accessibility Win. Students appreciate the flexibility. Attendance drops slightly, but grades improve.',
                    th: '📢 ชนะเรื่องการเข้าถึง นักเรียนชอบความยืดหยุ่น การเข้าเรียนลดลงนิดหน่อยแต่เกรดดีขึ้น',
                    zh: '📢 无障碍胜利。学生们感激这种灵活性。出勤率略有下降，但成绩有所提高。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Strict Ban: "Classroom dynamics depend on privacy. If you want to learn, you must be present physically and mentally."',
                    th: '🛑 ห้ามเด็ดขาด: "บรรยากาศห้องเรียนขึ้นอยู่กับความเป็นส่วนตัว ถ้าอยากเรียนรู้ ต้องเอาตัวและหัวใจมานั่งเรียน"',
                    zh: '🛑 严厉禁止：“课堂动态取决于隐私。如果你想学习，你必须身心都在场。”'
                },
                consequence: {
                    en: '📉 Modernity Clash. Students view you as a dinosaur. Disabled students file a formal complaint.',
                    th: '📉 ขัดแย้งกับยุคสมัย นักเรียนมองว่าคุณไดโนเสาร์ นักเรียนพิการยื่นคำร้องเรียนอย่างเป็นทางการ',
                    zh: '📉 现代性冲突。学生们视你为老古董。残疾学生提出正式投诉。'
                },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: -40 }
            },
            {
                id: 'C',
                text: {
                    en: '🎧 Podcast Summary: "I won\'t record the live class, but I will record a high-quality 20-minute summary podcast after each lecture."',
                    th: '🎧 พอดแคสต์สรุป: "ฉันจะไม่อัดในคลาส แต่จะอัดพอดแคสต์สรุป 20 นาทีคุณภาพสูงให้หลังเลิกเรียนทุกครั้ง"',
                    zh: '🎧 播客摘要：“我不会录制现场课程，但我会在每次讲座后录制高质量的20分钟摘要播客。”'
                },
                consequence: {
                    en: '✨ Best of Both Worlds. Students love the concise format for revision. You become known as a tech-savvy educator.',
                    th: '✨ ดีที่สุดทั้งสองทาง นักเรียนชอบรูปแบบกระชับไว้ทบทวน คุณขึ้นชื่อว่าเป็นครูทันสมัย',
                    zh: '✨ 两全其美。学生们喜欢这种简洁的复习形式。你被称为精通技术的教育家。'
                },
                stats: { competence: 70, ethics: 60, leadership: 70, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '🔐 Secure Portal: "Recordings are fine, but they stay behind a secure login, expire in 7 days, and cannot be downloaded."',
                    th: '🔐 พอร์ทัลปลอดภัย: "อัดได้นะ แต่อยู่ในระบบล็อกอิน หายไปใน 7 วันและห้ามดาวน์โหลด"',
                    zh: '🔐 安全门户：“录音可以，但必须通过安全登录访问，7天后过期，且不能下载。”'
                },
                consequence: {
                    en: '🛡️ Controlled Compromise. You protect your intellectual property while helping students catch up.',
                    th: '🛡️ การประนีประนอมแบบควบคุม คุณปกป้องทรัพย์สินทางปัญญาพร้อมช่วยนักเรียนตามบทเรียนทัน',
                    zh: '🛡️ 受控妥协。你在帮助学生跟上的同时保护了自己的知识产权。'
                },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 30 }
            }
        ]
    },
    {
        id: 'prof_041',
        text: {
            en: '👔 Department Chair Offer: The Dean offers you the Department Chair position. It means significantly more power and a salary bump, but 50% less time for your research and teaching.',
            th: '👔 ข้อเสนอหัวหน้าภาควิชา: คณบดีเสนอตำแหน่งหัวหน้าภาควิชาให้คุณ อำนาจและเงินเดือนเพิ่มขึ้นมาก แต่เวลาวิจัยและสอนจะหายไป 50%',
            zh: '👔 系主任职位：院长为你提供系主任职位。这意味着更多的权力和更高的薪水，但你的研究和教学时间将减少50%。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✅ Accept the Role: "I can shape the future of this department. The administrative burden is worth the influence."',
                    th: '✅ รับตำแหน่ง: "ฉันจะกำหนดอนาคตของภาควิชานี้ ภาระงานบริหารคุ้มค่ากับอิทธิพลที่ได้"',
                    zh: '✅ 接受职位：“我可以塑造这个系的未来。行政负担值得这个影响力。”'
                },
                consequence: {
                    en: '🏛️ Bureaucratic Leader. You improve department funding, but your latest paper stalls indefinitely. Colleagues view you as "management" now.',
                    th: '🏛️ ผู้นำข้าราชการ คุณหาทุนให้ภาควิชาได้เพิ่มขึ้น แต่งานวิจัยล่าสุดหยุดชะงัก เพื่อนร่วมงานมองคุณเป็น "ฝ่ายบริหาร" ไปแล้ว',
                    zh: '🏛️ 官僚领袖。你增加了系的资金，但你最新的论文无限期停滞。同事们现在视你为“管理层”。'
                },
                stats: { competence: 60, ethics: 50, leadership: 90, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Decline: "I am a scholar first, an administrator never. I will not sacrifice my research for paperwork."',
                    th: '🛑 ปฏิเสธ: "ฉันคือนักวิชาการ ไม่ใช่นักบริหาร ฉันจะไม่เสียสละงานวิจัยให้งานเอกสาร"',
                    zh: '🛑 拒绝：“我首先是学者，绝不是行政人员。我不会为了文书工作牺牲我的研究。”'
                },
                consequence: {
                    en: '🔬 Research Focus. You publish a breakthrough paper that year. The Dean is irritated but respects your output.',
                    th: '🔬 มุ่งเน้นวิจัย คุณตีพิมพ์งานวิจัยทะลุทะลวงในปีนั้น คณบดีหงุดหงิดแต่เคารพผลงานคุณ',
                    zh: '🔬 专注研究。那年你发表了一篇突破性的论文。院长很恼火，但尊重你的产出。'
                },
                stats: { competence: 80, ethics: 60, leadership: 30, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Rotating Chair Proposal: "I\'ll take it for 2 years only, provided we implement a rotating chair system so no one gets stuck permanently."',
                    th: '🤝 เสนอระบบเวียน: "ฉันจะรับแค่ 2 ปี โดยมีเงื่อนไขว่าเราต้องใช้ระบบเวียนหัวหน้าภาค เพื่อไม่ให้ใครติดหล่มถาวร"',
                    zh: '🤝 轮换主席提议：“我只做2年，前提是我们实施轮换主席制度，这样没人会被永久困住。”'
                },
                consequence: {
                    en: '⚖️ Sustainable Leadership. Shifts department culture to shared responsibility. You balance research and duty reasonably well.',
                    th: '⚖️ ภาวะผู้นำยั่งยืน เปลี่ยนวัฒนธรรมภาควิชาให้เป็นความรับผิดชอบร่วม คุณบริหารเวลาวิจัยและหน้าที่ได้ดีพอสมควร',
                    zh: '⚖️ 可持续领导力。将系文化转变为共同责任。你合理地平衡了研究和职责。'
                },
                stats: { competence: 70, ethics: 70, leadership: 70, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🔥 Radical Reformer: "I\'ll take it, but only if I have full authority to restructure the tenure process and budget."',
                    th: '🔥 นักปฏิรูปสุดขั้ว: "ฉันจะรับ แต่ต้องมีอำนาจเต็มในการปรับโครงสร้าง Tenure และงบประมาณ"',
                    zh: '🔥 激进改革者：“我接受，但前提是我有全权重组终身教职在大和预算。”'
                },
                consequence: {
                    en: '⚡ High Stakes. You make enemies fast but modernize the department. It\'s a stressful, high-impact tenure.',
                    th: '⚡ เดิมพันสูง คุณสร้างศัตรูเร็วแต่ทำให้ภาควิชาทันสมัย เป็นวาระที่เครียดแต่สร้างผลกระทบสูง',
                    zh: '⚡ 高风险。你很快树敌，但使系里实现了现代化。这是一个压力大、影响深远的任期。'
                },
                stats: { competence: 60, ethics: 70, leadership: 100, innovation: 80 }
            }
        ]
    },
    {
        id: 'prof_042',
        text: {
            en: '🏎️ Mid-Career Crisis: You feel bored with academia. The repetitive cycle of grants, grading, and committees is wearing you down. A tech giant offers you 3x your salary to lead their R&D lab.',
            th: '🏎️ วิกฤตกลางอาชีพ: คุณเบื่อวงการวิชาการ วงจรเดิมๆ ของการขอทุน ตัดเกรด และประชุมคณะกรรมการทำให้คุณหมดไฟ บริษัทยักษ์ใหญ่เสนอเงินเดือน 3 เท่าให้คุณไปคุมแล็บ R&D',
            zh: '🏎️ 中期职业危机：你对学术界感到厌倦。申请拨款、评分和委员会的重复循环让你精疲力竭。一家科技巨头提供3倍薪水邀请你领导他们的研发实验室。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏢 Leave for Industry: "It\'s time for a new challenge (and a new tax bracket). Goodbye, ivory tower."',
                    th: '🏢 ไปเอกชน: "ถึงเวลาสำหรับความท้าทายใหม่ (และฐานภาษีใหม่) ลาก่อนหอคอยงาช้าง"',
                    zh: '🏢 投身业界：“是时候迎接新挑战（和新税级）了。再见，象牙塔。”'
                },
                consequence: {
                    en: '💰 Wealthy but Constrained. You are rich, but you miss intellectual freedom. You answer to shareholders now, not truth.',
                    th: '💰 รวยแต่ถูกจำกัด คุณรวยแต่คิดถึงเสรีภาพทางปัญญา ตอนนี้คุณต้องตอบผู้ถือหุ้น ไม่ใช่ความจริง',
                    zh: '💰 富有但受限。你很有钱，但你怀念思想自由。你现在对股东负责，而不是对真理负责。'
                },
                stats: { competence: 70, ethics: 40, leadership: 50, innovation: 80 }
            },
            {
                id: 'B',
                text: {
                    en: '🏛️ Stay the Course: "Tenure is freedom. I can\'t put a price on exploring whatever I want, whenever I want."',
                    th: '🏛️ อยู่ต่อ: "Tenure คืออิสรภาพ ตีราคาไม่ได้หรอกกับการได้ค้นคว้าอะไรก็ได้เมื่อไหร่ก็ได้"',
                    zh: '🏛️ 坚持到底：“终身教职就是自由。我想研究什么就研究什么，这是无价的。”'
                },
                consequence: {
                    en: '🛡️ Steady Wisdom. You find peace in mentorship. The feeling of boredom passes as you start a weird new project.',
                    th: '🛡️ ปัญญาที่มั่นคง คุณพบความสงบในการเป็นพี่เลี้ยง ความเบื่อหายไปเมื่อคุณเริ่มโปรเจกต์แปลกๆ ใหม่',
                    zh: '🛡️ 稳定的智慧。你在指导中找到了平静。当你开始一个奇怪的新项目时，无聊感就消失了。'
                },
                stats: { competence: 60, ethics: 70, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Spin-off Startup: "I\'ll stay a professor but launch a startup on the side to commercialize my research. Best of both worlds?"',
                    th: '🚀 เปิดสตาร์ทอัพ: "ฉันจะเป็นอาจารย์ต่อแต่เปิดสตาร์ทอัพควบคู่เพื่อเอางานวิจัยไปทำเงิน ดีทั้งสองทางไหม?"',
                    zh: '🚀 衍生初创公司：“我会保留教授职位，但同时创办一家初创公司将我的研究商业化。两全其美？”'
                },
                consequence: {
                    en: '⚡ Exhausting Success. You work 80 hours a week. Both the university and your company compete for your soul.',
                    th: '⚡ ความสำเร็จที่เหนื่อยล้า คุณทำงานสัปดาห์ละ 80 ชั่วโมง ทั้งมหาลัยและบริษัทแย่งวิญญาณคุณ',
                    zh: '⚡ 令人精疲力竭的成功。你每周工作80小时。大学和你的公司都在争夺你的灵魂。'
                },
                stats: { competence: 80, ethics: 50, leadership: 70, innovation: 100 }
            },
            {
                id: 'D',
                text: {
                    en: '✈️ Sabbatical Reset: "I need a break. I\'ll take a year-long sabbatical to travel and write a popular science book."',
                    th: '✈️ พัก Sabbatical: "ฉันต้องการพัก ฉันจะลาพักวิจัย 1 ปีไปเที่ยวและเขียนหนังสือวิทยาศาสตร์สำหรับคนทั่วไป"',
                    zh: '✈️ 休假重置：“我需要休息。我要休一年的学术假去旅行并写一本普及科学书。”'
                },
                consequence: {
                    en: '🌟 Renewed Passion. You return refreshed, with a bestseller book that brings fame to the department.',
                    th: '🌟 ไฟแรงอีกครั้ง คุณกลับมาอย่างสดชื่น พร้อมหนังสือขายดีที่สร้างชื่อให้ภาควิชา',
                    zh: '🌟 重燃激情。你精神焕发地回来了，带着一本给系里带来声誉的畅销书。'
                },
                stats: { competence: 60, ethics: 60, leadership: 50, innovation: 60 }
            }
        ]
    },
    {
        id: 'prof_043',
        text: {
            en: '👶 Legacy Admission Dilemma: A major donor explicitly asks you to advocate for their son\'s admission to your PhD program. The applicant is mediocre and barely meets the requirements.',
            th: '👶 ปัญหาลูกศิษย์เก่า: ผู้บริจาครายใหญ่ขอให้คุณช่วยดันลูกชายเข้าเรียนปริญญาเอก ผู้สมัครคนนี้มีความสามารถปานกลางและแทบไม่ผ่านเกณฑ์',
            zh: '👶 校友子女录取困境：一位主要捐赠者明确要求你支持他儿子进入你的博士项目。申请人资质平庸，勉强达到要求。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Firm Rejection: "Admission is based on merit alone. I cannot advocate for a student who isn\'t ready."',
                    th: '🛑 ปฏิเสธเสียงแข็ง: "การรับเข้าดูที่ความสามารถเท่านั้น ฉันช่วยนักเรียนที่ยังไม่พร้อมไม่ได้"',
                    zh: '🛑 坚决拒绝：“录取仅基于成绩。我不能支持一个没有准备好的学生。”'
                },
                consequence: {
                    en: '🛡️ Integrity Maintained. The donor withdraws funding for the new lab. Your colleagues are partially annoyed but respect you.',
                    th: '🛡️ รักษาความซื่อสัตย์ ผู้บริจาคถอนทุนสร้างแล็บใหม่ เพื่อนร่วมงานรำคาญนิดหน่อยแต่เคารพคุณ',
                    zh: '🛡️ 保持正直。捐赠者撤回了新实验室的资金。你的同事有些恼火，但尊重你。'
                },
                stats: { competence: 50, ethics: 100, leadership: 60, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Quiet Acceptance: "The department needs that new building. I\'ll take him as my student and guide him closely."',
                    th: '💰 ยอมรับเงียบๆ: "ภาควิชาต้องการตึกใหม่นั่น ฉันจะรับเขาเป็นลูกศิษย์และดูแลอย่างใกล้ชิดเอง"',
                    zh: '💰 默默接受：“系里需要那栋新楼。我会收他为学生并密切指导他。”'
                },
                consequence: {
                    en: '🏗️ Bought Progress. We get the building. You spend years dragging a weak student through a PhD. It\'s draining.',
                    th: '🏗️ ความเจริญที่ซื้อมา เราได้ตึก คุณเสียเวลาหลายปีลากนักเรียนอ่อนๆ ให้จบเอก เหนื่อยมาก',
                    zh: '🏗️ 买来的进步。我们得到了那栋楼。你花了好几年时间拖着一个差生读完博士。这很累人。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '⏳ Conditional Waitlist: "I\'ll place him on the waitlist. If he improves his proposal or takes a master\'s first, we can reconsider."',
                    th: '⏳ รอแบบมีเงื่อนไข: "ฉันจะใส่ชื่อในบัญชีสำรอง ถ้าเขาปรับปรุงข้อเสนอหรือเรียนโทก่อน เราจะพิจารณาใหม่"',
                    zh: '⏳以此条件候补：“我会把他列入候补名单。如果他改进提案或先读个硕士，我们可以重新考虑。”'
                },
                consequence: {
                    en: '⚖️ Diplomatic Delay. The donor is unhappy but not furious. The student actually goes to a Master\'s program to improve.',
                    th: '⚖️ การยื้อแบบทูต ผู้บริจาคไม่พอใจแต่ไม่โกรธจัด นักเรียนคนนั้นไปเรียนโทเพื่อปรับปรุงตัวจริงๆ',
                    zh: '⚖️ 外交拖延。捐赠者不高兴但没有大发雷霆。学生实际上去读硕士项目来提高自己。'
                },
                stats: { competence: 60, ethics: 70, leadership: 60, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Mentorship Compromise: "I won\'t admit him now, but I will offer to mentor him personally for a year to help him build a competitive application."',
                    th: '🤝 ทางสายกลางพี่เลี้ยง: "ฉันไม่รับตอนนี้ แต่เสนอจะติวให้ส่วนตัว 1 ปีเพื่อช่วยให้เขาสมัครแข่งได้จริง"',
                    zh: '🤝 指导妥协：“我现在不会通过他的申请，但我愿意给他做一年的个人指导，帮他建立有竞争力的申请材料。”'
                },
                consequence: {
                    en: '✨ Constructive Growth. The student works hard and earns his spot next year legitimately. The donor is impressed by your care.',
                    th: '✨ การเติบโตเชิงสร้างสรรค์ นักเรียนขยันและสอบติดปีหน้าได้เองอย่างชอบธรรม ผู้บริจาคประทับใจความใส่ใจของคุณ',
                    zh: '✨ 建设性成长。该学生努力工作，第二年凭借实力赢得了席位。捐赠者对你的关心印象深刻。'
                },
                stats: { competence: 70, ethics: 80, leadership: 80, innovation: 50 }
            }
        ]
    },
    {
        id: 'prof_044',
        text: {
            en: '📚 Textbook Racket: A publisher wants you to author the 12th edition of a standard textbook. They plan to hike the price to $300 and add a "digital access code" that kills the used book market.',
            th: '📚 กลโกงตำราเรียน: สำนักพิมพ์อยากให้คุณเขียนตำรามาตรฐานฉบับพิมพ์ที่ 12 เขากะจะขึ้นราคาเป็น $300 และใส่ code ดิจิทัลเพื่อฆ่าตลาดหนังสือมือสอง',
            zh: '📚 教科书勒索：一家出版商希望你编写一本标准教科书的第12版。他们计划将价格提高到300美元，并添加一个“数字访问代码”以扼杀二手书市场。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Sign the Deal: "It\'s standard industry practice. The royalties will pay for my kids\' college."',
                    th: '💰 เซ็นสัญญา: "มันเป็นเรื่องปกติในวงการ ค่าลิขสิทธิ์จะส่งลูกฉันเรียนมหาลัยได้"',
                    zh: '💰 签署协议：“这是行业标准做法。版税可以支付我孩子上大学的费用。”'
                },
                consequence: {
                    en: '💸 Student Burden. You make money, but your students struggle to afford the materials. Some fail because they can\'t buy the book.',
                    th: '💸 ภาระนักเรียน คุณได้เงิน แต่นักเรียนลำบากซื้อตำรา บางคนตกเพราะไม่มีเงินซื้อหนังสือ',
                    zh: '💸 学生负担。你赚钱了，但你的学生买不起教材。有些人因为买不起书而挂科。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Refuse & Criticize: "I won\'t be part of this extortion. Keep the old edition alive or I walk."',
                    th: '🛑 ปฏิเสธและวิจารณ์: "ฉันไม่ร่วมขบวนการขูดรีดนี้ ใช้ฉบับเดิมต่อไปไม่งั้นฉันถอนตัว"',
                    zh: '🛑 拒绝并批评：“我不会参与这种勒索。保留旧版本，否则我就退出。”'
                },
                consequence: {
                    en: '🛡️ Moral Stand. The publisher drops you. You lose the royalties, but gain immense respect from the student body.',
                    th: '🛡️ จุดยืนทางศีลธรรม สนพ. เทคุณ คุณเสียค่าลิขสิทธิ์ แต่ได้ใจนักเรียนไปเต็มๆ',
                    zh: '🛡️ 道德立场。出版商抛弃了你。你失去了版税，但在学生群体中赢得了极大的尊重。'
                },
                stats: { competence: 50, ethics: 90, leadership: 70, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '✏️ Write an OER (Open Educational Resource): "I\'ll write my own textbook and release it for free online under Creative Commons."',
                    th: '✏️ เขียน OER (สื่อการสอนเปิด): "ฉันจะเขียนตำราเองแล้วปล่อยฟรีออนไลน์ใต้สัญญา Creative Commons"',
                    zh: '✏️ 编写OER（开放教育资源）：“我会编写自己的教科书，并在知识共享许可下免费在线发布。”'
                },
                consequence: {
                    en: '🌟 Hero of Education. It\'s massive unpaid work, but it gets adopted globally. You revolutionize the field\'s accessibility.',
                    th: '🌟 ฮีโร่การศึกษา งานหนักไม่ได้เงิน แต่คนใช้ทั่วโลก คุณปฏิวัติการเข้าถึงความรู้ในสาขานี้',
                    zh: '🌟 教育英雄。这是巨大的无偿工作，但被全球采用。你彻底改变了该领域的可访问性。'
                },
                stats: { competence: 80, ethics: 90, leadership: 80, innovation: 90 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Hard Negotiation: "I\'ll write it only if we cap the price at $50 and allow loose-leaf versions. Take it or leave it."',
                    th: '🤝 ต่อรองหนัก: "ฉันจะเขียนให้ก็ต่อเมื่อคุมราคาไม่เกิน $50 และยอมให้ปรับรูปแบบได้ รับเงื่อนไขนี้ไม่งั้นก็จบ"',
                    zh: '🤝 艰难谈判：“只有价格上限为50美元并允许活页版本，我才会写。要么接受，要么拉倒。”'
                },
                consequence: {
                    en: '⚖️ Consumer Protection. They begrudgingly agree because they need your name. Students save millions collectively.',
                    th: '⚖️ คุ้มครองผู้บริโภค เขายอมอย่างไม่เต็มใจเพราะต้องการชื่อคุณ นักเรียนประหยัดเงินรวมกันได้หลายล้าน',
                    zh: '⚖️ 消费者保护。他们勉强同意，因为他们需要你的名字。学生们总共节省了数百万美元。'
                },
                stats: { competence: 70, ethics: 70, leadership: 60, innovation: 40 }
            }
        ]
    },
    {
        id: 'prof_045',
        text: {
            en: '🧪 Scientific Misconduct: You discover that a seminal paper you co-authored 10 years ago contains falsified data from a former grad student. The paper is the foundation of your reputation.',
            th: '🧪 การทุจริตทางวิทยาศาสตร์: คุณค้นพบว่างานวิจัยชิ้นสำคัญที่คุณร่วมเขียนเมื่อ 10 ปีก่อนมีข้อมูลเท็จจากอดีตนักศึกษาปริญญาโท งานชิ้นนี้คือรากฐานชื่อเสียงของคุณ',
            zh: '🧪 科学不端行为：你发现自己10年前合著的一篇开创性论文包含一名前研究生伪造的数据。这篇论文是你声誉的基础。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Immediate Retraction: "Publicly retract the paper immediately. The truth matters more than my career."',
                    th: '📢 ถอนงานวิจัยทันที: "ประกาศถอนงานวิจัยทันที ความจริงสำคัญกว่าอาชีพของฉัน"',
                    zh: '📢 立即撤回：“立即公开撤回论文。真相这比我的职业生涯更重要。”'
                },
                consequence: {
                    en: '🛡️ Painful Integrity. Your citation count drops, and you lose a grant. However, the scientific community hails you as a paragon of honesty.',
                    th: '🛡️ ความซื่อสัตย์ที่เจ็บปวด ยอดการอ้างอิงลดลง คุณเสียทุนวิจัย แต่ชุมชนวิทยาศาสตร์ยกย่องคุณว่าเป็นแบบอย่างความซื่อสัตย์',
                    zh: '🛡️ 痛苦的正直。你的引用次数下降，失去了一笔拨款。然而，科学界称赞你是诚实的典范。'
                },
                stats: { competence: 60, ethics: 100, leadership: 40, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Bury It: "Ideally we\'d fix it, but it\'s 10 years old. No one will notice. Why ruin lives over old numbers?"',
                    th: '🤫 ฝังมันซะ: "ในอุดมคติเราควรแก้ แต่ 10 ปีแล้วนะ ไม่มีใครสังเกตหรอก จะทำลายชีวิตคนเพราะข้อมุลเก่าทำไม"',
                    zh: '🤫 埋葬它：“理想情况下我们会修复它，但这已经是10年前的事了。没人会注意到的。为什么要为旧数据毁掉生活？”'
                },
                consequence: {
                    en: '💣 Time Bomb. You keep your fame for now. Two years later, a rival exposes it. Your career ends in disgrace.',
                    th: '💣 ระเบิดเวลา คุณรักษาชื่อเสียงไว้ได้ตอนนี้ 2 ปีต่อมาคู่แข่งแฉ อาชีพคุณจบลงด้วยความอัปยศ',
                    zh: '💣 定时炸弹。你暂时保持了名声。两年后，竞争对手揭露了此事。你的职业生涯以耻辱告终。'
                },
                stats: { competence: 20, ethics: -100, leadership: -50, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📝 Correction Notice: "Publish a correction for the specific figure without retracting the whole paper. It\'s an honest mistake."',
                    th: '📝 แจ้งแก้ไข: "ตีพิมพ์ใบแจ้งแก้ไขเฉพาะรูปกราฟนั้นโดยไม่ถอนทั้งเปเปอร์ มันเป็นความผิดพลาดโดยสุจริต"',
                    zh: '📝 更正通知：“发布针对特定图表的更正，而不撤回整篇论文。这是一个诚实的错误。”'
                },
                consequence: {
                    en: '⚖️ Grey Area. The journal accepts it, but whispers of "sloppy science" follow you. It saves your grant but stains your legacy.',
                    th: '⚖️ พื้นที่สีเทา วารสารยอมรับ แต่เสียงซุบซิบเรื่อง "งานหยาบ" ตามหลอกหลอน รักษาทุนได้แต่เปื้อนมลทิน',
                    zh: '⚖️ 灰色地带。期刊接受了它，但关于“草率科学”的传言伴随着你。它保住了你的拨款，但玷污了你的遗产。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Internal Investigation: "Launch a full department audit of all that student\'s work before going public. We need the full scope."',
                    th: '🕵️ สอบสวนภายใน: "เริ่มการตรวจสอบงานทั้งหมดของนักเรียนคนนั้นในภาควิชาก่อนจะประกาศ เราต้องเห็นภาพรวมทั้งหมด"',
                    zh: '🕵️ 内部调查：“在公开之前，对该学生的所有工作进行全面的部门审计。我们需要了解全部范围。”'
                },
                consequence: {
                    en: '🏛️ Thorough Leadership. You find 3 other falsified papers. You clean house. It\'s a scandal, but you control the narrative.',
                    th: '🏛️ ภาวะผู้นำที่รอบคอบ คุณเจอเปเปอร์ปลอมอีก 3 ใบ คุณล้างบางภาควิชา เป็นเรื่องอื้อฉาวแต่คุณคุมสถานการณ์ได้',
                    zh: '🏛️ 彻底的领导。你还发现了另外3篇伪造的论文。你清理了门户。这是一丑闻，但你控制了叙事。'
                },
                stats: { competence: 80, ethics: 80, leadership: 90, innovation: 20 }
            }
        ]
    },
    {
        id: 'prof_046',
        text: {
            en: '🗳️ Political Bias Accusation: A student group accuses you of political bias in your lectures because you critiqued a specific economic policy. They demand an apology and "neutral" teaching.',
            th: '🗳️ ข้อหาอคติทางการเมือง: กลุ่มนักศึกษากล่าวหาว่าคุณมีอคติทางการเมืองในเลคเชอร์เพราะคุณวิจารณ์นโยบายเศรษฐกิจหนึ่ง พวกเขาเรียกร้องคำขอโทษและการสอนที่เป็น "กลาง"',
            zh: '🗳️ 政治偏见指控：一个学生团体指控你在讲座中存有政治偏见，因为你批评了一项特定的经济政策。他们要求道歉并进行“中立”教学。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤐 Apologize & Pivot: "I apologize if I caused offense. I will stick strictly to the textbook definitions from now on."',
                    th: '🤐 ขอโทษและเปลี่ยนทาง: "ขอโทษหากทำให้ขุ่นเคือง ฉันจะยึดตามนิยามในตำราอย่างเคร่งครัดแต่นี้ไป"',
                    zh: '🤐 道歉并转向：“如果我造成冒犯，我深表歉意。从现在起，我将严格遵守教科书的定义。”'
                },
                consequence: {
                    en: '📉 Sterile Teaching. The controversy dies, but your class becomes incredibly boring. Critical thinking is stifled.',
                    th: '📉 การสอนที่เป็นหมัน ความขัดแย้งจบลง แต่คลาสจืดชืดสุดๆ การคิดวิเคราะห์ถูกกดทับ',
                    zh: '📉 枯燥的教学。争议平息了，但你的课程变得极其无聊。批判性思维被扼杀。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: -30 }
            },
            {
                id: 'B',
                text: {
                    en: '🎤 Double Down: "Facts have a well-known bias. I was presenting data, not opinion. I will not apologize for teaching reality."',
                    th: '🎤 ยืนกรานหนักแน่น: "ความจริงมันมีอคติของมันอยู่แล้ว ฉันนำเสนอข้อมูล ไม่ใช่ความเห็น ฉันจะไม่ขอโทษที่สอนความจริง"',
                    zh: '🎤 加倍坚持：“事实众所周知是有偏见的。我展示的是数据，而不是观点。我不会因为教授现实而道歉。”'
                },
                consequence: {
                    en: '🔥 Free Speech Icon. You become a hero to half the campus and a villain to the other. Enrollment spikes due to the drama.',
                    th: '🔥 ไอคอนเสรีภาพ คุณเป็นฮีโร่ของคนครึ่งมหาลัยและตัวร้ายของอีกครึ่ง ยอดลงทะเบียนพุ่งเพราะดราม่า',
                    zh: '🔥 言论自由偶像。你成为校园一半人的英雄和另一半人的反派。由于这场闹剧，注册人数激增。'
                },
                stats: { competence: 70, ethics: 60, leadership: 70, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Host a Debate: "Let\'s turn this into a learning moment. I\'ll invite a guest speaker with the opposing view for a public debate next week."',
                    th: '🤝 จัดดีเบต: "เปลี่ยนวิกฤตเป็นโอกาสเรียนรู้ ฉันจะเชิญวิทยากรฝั่งตรงข้ามมาดีเบตสาธารณะสัปดาห์หน้า"',
                    zh: '🤝 举办辩论：“让我们把它变成一个学习时刻。下周我将邀请一位持相反观点的客座演讲者进行公开辩论。”'
                },
                consequence: {
                    en: '✨ Educational Mastery. The debate is widely attended and respectful. You demonstrate true intellectual pluralism.',
                    th: '✨ ความเป็นเลิศทางการศึกษา คนเข้าฟังดีเบตล้นหลามและให้เกียรติกัน คุณแสดงให้เห็นความหลากหลายทางปัญญาที่แท้จริง',
                    zh: '✨ 教育大师。辩论会广受欢迎且充满尊重。你展示了真正的知识多元化。'
                },
                stats: { competence: 80, ethics: 80, leadership: 90, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '📺 Record & Release: "I will record my next lecture addressing this critique point-by-point. Let the internet decide who is biased."',
                    th: '📺 อัดและปล่อยของ: "ฉันจะอัดเทปเลคเชอร์หน้า ตอบโต้ข้อวิจารณ์ทีละจุด ให้ชาวเน็ตตัดสินว่าใครมีอคติ"',
                    zh: '📺 录制并发布：“我将录制我的下一场讲座，逐点回应这一批评。让互联网决定谁有偏见。”'
                },
                consequence: {
                    en: '⚠️ Viral Gamble. It could vindicate you or destroy you depending on the Reddit threads. High risk.',
                    th: '⚠️ การเดิมพันไวรัล มันอาจพิสูจน์ความบริสุทธิ์หรือทำลายคุณ ขึ้นอยู่กับกระทู้ Reddit เสี่ยงสูง',
                    zh: '⚠️ 病毒式赌博。这可能会为你辩护，也可能会毁掉你，取决于Reddit的帖子。高风险。'
                },
                stats: { competence: 60, ethics: 50, leadership: 50, innovation: 70 }
            }
        ]
    },
    {
        id: 'prof_047',
        text: {
            en: '👴 Retirement Dilemma: You are 70. You still love teaching, but younger colleagues hint that you are holding onto a spot that could go to a diverse, modern scholar.',
            th: '👴 ภาวะกลืนไม่เข้าคายไม่ออกเรื่องเกษียณ: คุณอายุ 70 รักการสอนอยู่ แต่เพื่อนร่วมงานรุ่นใหม่เปรยว่าคุณกั๊กที่นั่งที่ควรจะเป็นของนักวิชาการยุคใหม่ที่หลากหลาย',
            zh: '👴 退休困境：你70岁了。你仍然热爱教学，但年轻同事暗示你占据了一个本可以给多元化现代学者的职位。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚪 Retire Gracefully: "They are right. It\'s time to pass the torch. I\'ll retire at the end of the semester."',
                    th: '🚪 เกษียณอย่างสง่างาม: "เขาพูดถูก ถึงเวลาส่งต่อคบเพลิง ฉันจะเกษียณจบเทอมนี้"',
                    zh: '🚪 优雅退休：“他们是对的。是时候传递火炬了。我会在学期末退休。”'
                },
                consequence: {
                    en: '🌅 Dignified Exit. You get a heartfelt farewell party. The department hires a brilliant new star.',
                    th: '🌅 จากไปอย่างมีเกียรติ งานเลี้ยงอำลาซึ้งใจ ภาควิชาจ้างดาวรุ่งดวงใหม่มาแทน',
                    zh: '🌅 体面的退出。你得到了一个由衷的欢送会。系里通过聘请了一位才华横溢的新星。'
                },
                stats: { competence: 40, ethics: 70, leadership: 60, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🧱 Resist & Stay: "I am at the peak of my intellectual powers! Discrimination against age is illegal. I\'m staying."',
                    th: '🧱 ต้านและอยู่ต่อ: "สมองฉันกำลังแล่นสุดขีด! การกีดกันทางอายุผิดกฎหมาย ฉันจะอยู่!"',
                    zh: '🧱 反抗并留下：“我正处于智力的巅峰！年龄歧视是非法的。我不走。”'
                },
                consequence: {
                    en: '❄️ Cold Atmosphere. You stay, but the faculty lounge becomes silent when you enter. You block new blood.',
                    th: '❄️ บรรยากาศเย็นชา คุณอยู่ต่อ แต่ห้องพักครูเงียบกริบเมื่อคุณเข้า คุณขวางทางเลือดใหม่',
                    zh: '❄️ 冷漠的氛围。你留下了，但当你进入教员休息室时，里面变得鸦雀无声。你阻碍了新鲜血液。'
                },
                stats: { competence: 60, ethics: 40, leadership: -20, innovation: -40 }
            },
            {
                id: 'C',
                text: {
                    en: '🎓 Emeritus Transition: "I\'ll retire from full-time duties but stay on as Emeritus to teach one seminar and mentor PhD students."',
                    th: '🎓 เปลี่ยนเป็นกิตติมศักดิ์: "ฉันจะเกษียณจากงานเต็มเวลา แต่ขอเป็นศาสตราจารย์กิตติมศักดิ์สอน 1 วิชาและคุมเด็กเอก"',
                    zh: '🎓 荣誉过渡：“我将从全职职责中退休，但保留荣誉教授身份，教授一门研讨会并指导博士生。”'
                },
                consequence: {
                    en: '🤝 Perfect Balance. You keep your connection and status, but free up the budget line for a new hire.',
                    th: '🤝 สมดุลที่สมบูรณ์แบบ คุณรักษาสถานะและความผูกพัน แต่เปิดงบประมาณให้จ้างคนใหม่',
                    zh: '🤝 完美的平衡。你保持了联系和地位，但释放了预算用于新员工。”'
                },
                stats: { competence: 70, ethics: 80, leadership: 80, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🌱 Create a Fellowship: "I will retire, but I\'ll donate a portion of my estate to fund a \'Future Leaders\' postdoc fellowship here."',
                    th: '🌱 สร้างทุนการศึกษา: "ฉันจะเกษียณ แต่จะบริจาคทรัพย์สินส่วนหนึ่งตั้งกองทุน Postdoc \'ผู้นำแห่งอนาคต\' ที่นี่"',
                    zh: '🌱 设立奖学金：“我会退休，但我会捐出一部分财产，在这里资助一个‘未来领袖’博士后奖学金。”'
                },
                consequence: {
                    en: '🏛️ Living Legacy. You are immortalized. The new scholars you fund will carry your name for generations.',
                    th: '🏛️ ตำนานที่มีชีวิต คุณเป็นอมตะทางวิชาการ นักวิชาการใหม่ที่คุณให้ทุนจะสืบสานชื่อคุณไปหลายรุ่น',
                    zh: '🏛️ 活着的遗产。你不朽了。你资助的新学者将代代相传你的名字。'
                },
                stats: { competence: 60, ethics: 90, leadership: 100, innovation: 60 }
            }
        ]
    },
    {
        id: 'prof_048',
        text: {
            en: '🤖 AI Grading Dilemma: The university provides a new AI tool that can grade essays in seconds with "95% accuracy." Using it would save you 20 hours a week, but students trust human feedback.',
            th: '🤖 ปัญหา AI ตัดเกรด: มหาลัยจัดหาเครื่องมือ AI ตัวใหม่ที่ตรวจเรียงความได้ในไม่กี่วินาทีด้วย "ความแม่นยำ 95%" การใช้มันจะช่วยคุณประหยัดเวลา 20 ชม. ต่อสัปดาห์ แต่นักเรียนเชื่อมั่นในคำวิจารณ์จากมนุษย์',
            zh: '🤖 AI评分困境：大学提供了一种新的AI工具，可以在几秒钟内以“95%的准确率”对论文进行评分。使用它可以每周为你节省20小时，但学生信任人类的反馈。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚡ Full Automation: "I\'ll use the AI for all grading. I need that time for research. Students won\'t know the difference."',
                    th: '⚡ อัตโนมัติเต็มรูปแบบ: "ฉันจะใช้ AI ตรวจทั้งหมด ฉันต้องการเวลานั้นไปทำวิจัย นักเรียนดูไม่ออกหรอก"',
                    zh: '⚡ 全自动化：“我将使用AI进行所有评分。我需要那个时间做研究。学生们不会看出区别。”'
                },
                consequence: {
                    en: '📉 Efficient but Cold. You publish more, but students complain about generic feedback. A few catch on and feel cheated.',
                    th: '📉 รวดเร็วแต่เย็นชา คุณดีพิมพ์งานเพิ่มขึ้น แต่นักเรียนบ่นเรื่องคอมเมนต์ที่ดูเป็นแพทเทิร์น มีบางคนจับได้และรู้สึกถูกโกง',
                    zh: '📉 高效但冷漠。你发表了更多文章，但学生抱怨反馈太笼统。一些人发现了并感到受骗。'
                },
                stats: { competence: 60, ethics: 30, leadership: 40, innovation: 80 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Human Only: "I will never let a machine judge human nuances. I will grade every paper myself, even if I sleep less."',
                    th: '🛑 มนุษย์เท่านั้น: "ฉันจะไม่มีวันให้เครื่องจักรมาตัดสินความละเอียดอ่อนของมนุษย์ ฉันจะตรวจเองทุกแผ่น ต่อให้นอนน้อยลง"',
                    zh: '🛑 仅限人类：“我决不会让机器判断人类的细微差别。我会亲自批改每一篇论文，即使我少睡一点。”'
                },
                consequence: {
                    en: '🤝 Deep Connection. Students cherish your detailed notes. You are exhausted but beloved. Your research output slows down.',
                    th: '🤝 ความผูกพันลึกซึ้ง นักเรียนหวงแหนโน้ตละเอียดของคุณ คุณเหนื่อยสายตัวแทบขาดแต่เป็นที่รัก งานวิจัยคุณช้าลง',
                    zh: '🤝 深厚联系。学生们珍视你详细的笔记。虽然筋疲力尽，但深受爱戴。你的研究产出放缓。'
                },
                stats: { competence: 50, ethics: 90, leadership: 60, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '🦾 Augmented Grading: "I\'ll use the AI to do a first pass for grammar and structure, then I\'ll add personal comments on the content."',
                    th: '🦾 การตรวจแบบผสมผสาน: "ฉันจะใช้ AI ตรวจรอบแรกเรื่องไวยากรณ์และโครงสร้าง แล้วฉันจะเขียนคอมเมนต์ส่วนเนื้อหาเพิ่มเอง"',
                    zh: '🦾 增强评分：“我会用AI先过一遍语法和结构，然后我会加上关于内容的个人评论。”'
                },
                consequence: {
                    en: '⚡ Smart Balance. Grading takes half the time, and feedback quality actually improves. Best practice achieved.',
                    th: '⚡ สมดุลที่ฉลาด การตรวจใช้เวลาน้อยลงครึ่งหนึ่ง และคุณภาพคอมเมนต์ดีขึ้นด้วยซ้ำ บรรลุแนวทางปฏิบัติที่ดีที่สุด',
                    zh: '⚡ 聪明的平衡。评分时间减少了一半，反馈质量实际上提高了。实现了最佳实践。'
                },
                stats: { competence: 80, ethics: 70, leadership: 70, innovation: 90 }
            },
            {
                id: 'D',
                text: {
                    en: '🎓 Peer Review Experiment: "I\'ll have students grade each other using the AI rubric, teaching them how to critique."',
                    th: '🎓 การทดลอง Peer Review: "ฉันจะให้นักเรียนตรวจงานกันเองโดยใช้เกณฑ์ของ AI สอนให้เขารู้จักการวิจารณ์"',
                    zh: '🎓以此同行评审实验：“我会让学生使用AI评估标准互相评分，教他们如何进行批评。”'
                },
                consequence: {
                    en: '📢 Pedagogical Shift. It\'s chaotic at first, but students learn more from grading than writing. A risky but rewarding success.',
                    th: '📢 การเปลี่ยนผ่านทางกาทสอน ตอนแรกวุ่นวาย แต่นักเรียนได้เรียนรู้จากการตรวจมากกว่าการเขียน เสี่ยงแต่คุ้มค่า',
                    zh: '📢 教学转变。起初很混乱，但学生从评分中学到的东西比写作还多。一次冒险但有回报的成功。'
                },
                stats: { competence: 60, ethics: 60, leadership: 80, innovation: 70 }
            }
        ]
    },
    {
        id: 'prof_049',
        text: {
            en: '📣 Office Occupation: A group of student activists occupies your office to protest university investments in fossil fuels. They refuse to leave until you sign their petition.',
            th: '📣 ยึดห้องทำงาน: กลุ่มนักศึกษานักเคลื่อนไหวบุกยึดห้องทำงานคุณเพื่อประท้วงที่มหาลัยลงทุนในเชื้อเพลิงฟอสซิล พวกเขาไม่ยอมออกจนกว่าคุณจะเซ็นคำร้อง',
            zh: '📣 占领办公室：一群学生激进分子占领了你的办公室，抗议大学投资化石燃料。他们拒绝离开，除非你在他们的请愿书上签字。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👮 Call Security: "I support free speech, but this is trespassing. Remove them so I can work."',
                    th: '👮 เรียก รปภ.: "ฉันสนับสนุนเสรีภาพการแสดงออก แต่นี่มันบุกรุก ลากพวกเขาออกไป ฉันจะทำงาน"',
                    zh: '👮 呼叫保安：“我支持言论自由，但这是非法入侵。把他们赶走，以便我能工作。”'
                },
                consequence: {
                    en: '🔒 Order Restored. The students are dragged out. You are vilified on social media as an enemy of the planet.',
                    th: '🔒 คืนความสงบ นักเรียนถูกลากออกไป คุณถูกประณามในโซเชียลว่าเป็นศัตรูของโลก',
                    zh: '🔒 恢复秩序。学生们被拖了出去。你在社交媒体上被诋毁为地球的敌人。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '✍️ Sign Immediately: "You\'re right. The climate crisis is urgent. I stand with you."',
                    th: '✍️ เซ็นทันที: "พวกเธอพูดถูก วิกฤตภูมิอากาศมันเร่งด่วน ฉันยืนข้างพวกเธอ"',
                    zh: '✍️ 立即签字：“你们是对的。气候危机迫在眉睫。我与你们站在一起。”'
                },
                consequence: {
                    en: '🌱 Activist Hero. The students cheer. The Board of Trustees notes your name as a "troublemaker."',
                    th: '🌱 ฮีโร่นักเคลื่อนไหว นักเรียนเฮ สภามหาลัยกาชื่อคุณว่าเป็น "ตัวป่วน"',
                    zh: '🌱 激进派英雄。学生们欢呼。董事会将你的名字记为“麻烦制造者”。'
                },
                stats: { competence: 40, ethics: 80, leadership: 70, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '☕ Serve Tea & Debate: "I won\'t sign under duress, but I will cancel my afternoon plans to sit and discuss this strategy with you. Tea?"',
                    th: '☕ เสิร์ฟชาและคุยกัน: "ฉันไม่เซ็นภายใต้การข่มขู่ แต่ฉันจะยกเลิกนัดบ่ายนี้นั่งคุยกลยุทธ์กับพวกเธอ เอาน้ำชาไหม?"',
                    zh: '☕ 奉茶辩论：“我不会在胁迫下签字，但我会取消下午的计划，坐下来和你们讨论这个策略。喝茶吗？”'
                },
                consequence: {
                    en: '🤝 Respectful Dialogue. The occupation turns into a seminar. They leave peacefully, respecting your nuanced stance.',
                    th: '🤝 การสนทนาที่ให้เกียรติ การยึดพื้นที่กลายเป็นวงสัมมนา พวกเขากลับไปอย่างสงบ เคารพจุดยืนที่ละเอียดอ่อนของคุณ',
                    zh: '🤝 尊重的对话。占领变成了研讨会。他们和平离开，尊重你细致入微的立场。'
                },
                stats: { competence: 70, ethics: 90, leadership: 90, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🚪 Leave & Work from Home: "I\'m not engaging with coercion. Enjoy the office. I\'ll be at Starbucks."',
                    th: '🚪 หนีไปทำที่บ้าน: "ฉันไม่ยุ่งกับการขู่เข็ญ เชิญใช้ห้องตามสบาย ฉันจะไปอยู่สตาร์บัคส์"',
                    zh: '🚪 离开并居家办公：“我不参与胁迫。享受办公室吧。我就去星巴克。”'
                },
                consequence: {
                    en: '🤷 Passive Avoidance. The protest loses steam without an audience. You get your work done, but look indifferent.',
                    th: '🤷 หลีกเลี่ยงแบบเฉยเมย การประท้วงฝ่อไปเองเมื่อไม่มีคนดู คุณทำงานเสร็จ แต่ดูเหมือนคนไม่สนโลก',
                    zh: '🤷 被动回避。没有观众，抗议失去了动力。你完成了工作，但看起来漠不关心。'
                },
                stats: { competence: 60, ethics: 50, leadership: 30, innovation: 20 }
            }
        ]
    },
    {
        id: 'prof_050',
        text: {
            en: '🎤 The Last Lecture: You are chosen to give the university\'s prestigious "Last Lecture" of the year. Thousands will attend. What is your core message?',
            th: '🎤 เลคเชอร์ครั้งสุดท้าย: คุณได้รับเลือกให้ขึ้นพูด "Last Lecture" อันทรงเกียรติประจำปีของมหาลัย คนฟังเป็นพัน อะไรคือใจความสำคัญของคุณ?',
            zh: '🎤 最后一课：你被选中发表大学年度著名的“最后一课”。数千人将出席。你的核心信息是什么？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧠 Intellectual Rigor: "The world is complex. Reject easy answers. Question everything, even me."',
                    th: '🧠 ความเข้มข้นทางปัญญา: "โลกมันซับซ้อน จงปฏิเสธคำตอบง่ายๆ จงตั้งคำถามกับทุกสิ่ง แม้แต่ตัวฉัน"',
                    zh: '🧠 智力严谨：“世界是复杂的。拒绝简单的答案。质疑一切，甚至是我。”'
                },
                consequence: {
                    en: '🦉 Academic Legacy. A sobering, powerful speech. It doesn\'t go viral on TikTok, but it changes lives deeply.',
                    th: '🦉 ตำนานวิชาการ สุนทรพจน์ที่ทรงพลังและเตือนสติ มันไม่ได้ไวรัลใน TikTok แต่เปลี่ยนชีวิตคนอย่างลึกซึ้ง',
                    zh: '🦉 学术遗产。一场发人深省、充满力量的演讲。它没有在TikTok上走红，但深刻地改变了生活。'
                },
                stats: { competence: 90, ethics: 70, leadership: 80, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '❤️ Empathetic Wisdom: "Success is meaningless without kindness. Be good to each other. Grades fade; character stays."',
                    th: '❤️ ปัญญาแห่งความเห็นใจ: "ความสำเร็จไร้ความหมายถ้าขาดความเมตตา ดีต่อกันเข้าไว้ เกรดเลือนหายแต่นิสัยคงอยู่"',
                    zh: '❤️ 同理心智慧：“没有善良，成功毫无意义。善待彼此。成绩会褪色；品格长存。”'
                },
                consequence: {
                    en: '😭 Tear-Jerker. The audience weeps. You are remembered as the "soul" of the university.',
                    th: '😭 เรียกน้ำตา ผู้ฟังร้องไห้ คุณถูกจดจำว่าเป็น "จิตวิญญาณ" ของมหาวิทยาลัย',
                    zh: '😭 催泪弹。观众落泪。你被铭记为大学的“灵魂”。'
                },
                stats: { competence: 50, ethics: 100, leadership: 90, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Radical Futurism: "The university as we know it is dead. Smash the system. Go build something new!"',
                    th: '🚀 อนาคตนิยมสุดขั้ว: "มหาลัยแบบที่เรารู้จักมันตายแล้ว ทำลายระบบซะ ออกไปสร้างสิ่งใหม่!"',
                    zh: '🚀 激进未来主义：“我们要知道的大学已经死了。打破体制。去创造新事物！”'
                },
                consequence: {
                    en: '🔥 Shockwave. The administration is horrified. The students are electrified. You go out with a bang.',
                    th: '🔥 คลื่นกระแทก ผู้บริหารช็อก นักเรียนตื่นตัวไฟลุก คุณจากไปแบบทิ้งทวนสุดๆ',
                    zh: '🔥 冲击波。行政部门感到震惊。学生们感到兴奋。你轰轰烈烈地离开了。'
                },
                stats: { competence: 70, ethics: 60, leadership: 80, innovation: 100 }
            },
            {
                id: 'D',
                text: {
                    en: '🤡 Self-Deprecating Humor: "I have no idea what I\'m doing. Failing is the only way to learn. Have fun!"',
                    th: '🤡 ตลกเสียดสีตัวเอง: "ฉันก็ไม่รู้หรอกว่าทำอะไรอยู่ ความล้มเหลวคือทางเดียวที่จะเรียนรู้ สนุกกับมันซะ!"',
                    zh: '🤡 自嘲式幽默：“我不知道自己在做什么。失败是学习的唯一途径。玩得开心！”'
                },
                consequence: {
                    en: '😂 Relatable Legend. Students love your authenticity. You become the most approachable professor on campus.',
                    th: '😂 ตำนานที่เข้าถึงได้ นักเรียนรักความจริงใจของคุณ คุณกลายเป็นอาจารย์ที่เข้าถึงง่ายที่สุดในมหาลัย',
                    zh: '😂 亲切的传奇。学生们喜欢你的真实。你成为校园里最平易近人的教授。'
                },
                stats: { competence: 50, ethics: 70, leadership: 70, innovation: 60 }
            }
        ]
    }
];
