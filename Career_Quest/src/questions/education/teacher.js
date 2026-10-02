// Teacher Career Questions
// Ultra-Comprehensive set: 50 detailed, story-rich questions
// Each scenario is a mini-case study with deep consequences and realistic stats

export const teacherQuestions = [

    // SECTION 1: CLASSROOM MANAGEMENT & ETHICS (Questions 1-10)

    {
        id: 'te_001',
        text: {
            en: '📏 The Mid-Term Meltdown: You\'re teaching 10th-grade Math. Leo, a quiet student struggling with grades, suddenly slams his book and yells,"This is useless! I\'m never going to use this in real life!"He tries to storm out. 30 students are watching. How do you react?',
            th: '📏 วิกฤตกลางเทอม: คุณสอนคณิตศาสตร์เกรด 10 ลีโอ นักเรียนที่เงียบแต่เริ่มเรียนตามไม่ทัน จู่ๆ ก็ปิดหนังสือเสียงดังแล้วตะโกนว่า"นี่มันไร้ประโยชน์! ผมจะไม่มีวันได้ใช้สิ่งนี้ในชีวิตจริง!"เขาพยายามเดินออกไป นักเรียน 30 คนในห้องกำลังจ้องมอง คุณจะทำอย่างไร?',
            zh: '📏 期中崩溃：你正在教十年级数学。里奥是一个平时很安静但成绩很差的学生，突然用力关上书，大喊：“这没用！我在现实生活中永远不会用到这个！”他试图冲出去。30名学生都在看着。你如何反应？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Strict Discipline:"Leo, sit down. You are disrupting the class. We will discuss this in the principal\'s office later."',
                    th: '⚖️ วินัยเข้มงวด:"ลีโอ นั่งลง เธอกำลังรบกวนชั้นเรียน เราจะไปคุยเรื่องนี้ที่ห้องอาจารย์ใหญ่ทีหลัง"',
                    zh: '⚖️ 严格纪律：“里奥，坐下。你正在干扰课堂。我们稍后去校长办公室谈这件事。”'
                },
                consequence: {
                    en: '⚠️ Power Struggle! Leo storms out anyway. You maintain authority with others, but Leo loses trust in you. He fails the next test, and his parents are furious. Class tension remains high.',
                    th: '⚠️ การปะทะอำนาจ! ลีโอเดินออกไปอยู่ดี คุณรักษาอำนาจในห้องไว้ได้ แต่ลีโอเสียความเชื่อมั่นในตัวคุณ เขาตกการสอบครั้งต่อไป และพ่อแม่ของเขาโกรธมาก บรรยากาศในห้องตึงเครียด',
                    zh: '⚠️ 权力斗争！里奥还是冲了出去。你在其他学生面前维持了权威，但里奥失去了对你的信任。他下次考试不及格，他的父母很愤怒。班级紧张气氛持续。'
                },
                stats: { competence: 30, ethics: 35, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 The Empathetic Pivot:"Leo, wait. You\'re right to ask why this matters. Let\'s pause. If anyone can explain how trigonometry applies to their dream job, we skip homework today."',
                    th: '🤝 การเปลี่ยนมุมมองอย่างเห็นใจ:"ลีโอ รอเดี๋ยว เธอพูดถูกที่ถามว่าทำไมสิ่งนี้ถึงสำคัญ มาหยุดกันก่อน ถ้าใครอธิบายได้ว่าตรีโกณมิติใช้กับอาชีพในฝันได้อย่างไร วันนี้ไม่มีการบ้าน"',
                    zh: '🤝 共情转向：“里奥，等等。你问这为什么重要是对的。让我们暂停一下。如果有人能解释三角函数如何应用于他们的梦想职业，我们今天就免除作业。”'
                },
                consequence: {
                    en: '✅ Engagement Spike! The class erupts in discussion. Leo stays. You spend 15 minutes connecting math to real careers. Homework completion for the next unit jumps 40% as students see the purpose.',
                    th: '✅ การมีส่วนร่วมพุ่งสูง! ชั้นเรียนเกิดการถกเถียง ลีโออยู่ต่อ คุณใช้เวลา 15 นาทีเชื่อมโยงคณิตศาสตร์กับอาชีพจริง อัตราการส่งการบ้านในบทถัดไปเพิ่มขึ้น 40% เพราะนักเรียนเห็นเป้าหมาย',
                    zh: '✅ 参与度飙升！全班爆发讨论。里奥留了下来。你花了15分钟将数学与现实职业联系起来。下一单元的作业完成率提高了40%，因为学生们看到了目的。'
                },
                stats: { competence: 45, ethics: 40, leadership: 45, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🚶 Private Sidebar:"Class, work on problem 4 for two minutes. Leo, let\'s step outside."Privately:"I see you\'re frustrated. Is it the math, or is something else going on?"',
                    th: '🚶 คุยส่วนตัว:"นักเรียน ลองทำโจทย์ข้อ 4 สักสองนาทีนะ ลีโอ ออกมาคุยกับครูข้างนอกหน่อย"พูดเป็นส่วนตัว:"ครูเห็นว่าเธอหงุดหงิด มันเป็นเรื่องคณิตศาสตร์ หรือมีอะไรเกิดขึ้นหรือเปล่า?"',
                    zh: '🚶 私下交谈：“同学们，做两分钟第四题。里奥，我们到外面谈谈。”私下沟通：“我看出来你很沮丧。是数学的问题，还是发生了别的事？”'
                },
                consequence: {
                    en: '🛡️ Trust Established! Leo admits he\'s stressed about family issues. You offer an extension. He returns calmed. His grade improves from a D to a B- by graduation. You built a mentor relationship.',
                    th: '🛡️ สร้างความเชื่อมั่น! ลีโอสารภาพว่าเครียดเรื่องปัญหาครอบครัว คุณขยายเวลาส่งงานให้ เขาเย็นลงและกลับเข้าห้อง เกรดของเขาดีขึ้นจาก D เป็น B- เมื่อจบการศึกษา คุณได้สร้างความสัมพันธ์แบบเมนเทอร์',
                    zh: '🛡️ 建立信任！里奥承认他对家庭问题感到压力。你给他延长了期限。他平静地回到了教室。到毕业时，他的成绩从D提高到了B-。你建立了导师关系。'
                },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🃏 Humorous Diffuser:"Leo, if I don\'t use it in real life, I lose my job! Help me keep my apartment by finishing this page. 5-minute break if we finish early."',
                    th: '🃏 ใช้ความตลก:"ลีโอ ถ้าครูไม่ได้ใช้สิ่งนี้ในชีวิตจริง ครูจะตกงานนะ! ช่วยให้ครูมีที่พักอยู่ต่อไปด้วยการทำหน้านี้ให้เสร็จ ถ้าเสร็จเร็วครูให้พัก 5 นาที"',
                    zh: '🃏 幽默化解：“里奥，如果我在现实生活中不用它，我就失业了！帮我完成这一页，好让我保住我的公寓。如果我们提前完成，就休息5分钟。”'
                },
                consequence: {
                    en: '⚠️ Superficial Fix. The class laughs and Leo sits down, but his struggle is ignored. He continues to feel lost. You lose some academic credibility for"bribing"students with breaks.',
                    th: '⚠️ แก้ปัญหาผิวเผิน นักเรียนหัวเราะและลีโอนั่งลง แต่ปัญหาของเขาถูกละเลย เขายังคงรู้สึกหลงทาง คุณเสียความน่าเชื่อถือทางวิชาการไปบ้างเพราะการใช้เวลาพักมา"ติดสินบน"',
                    zh: '⚠️ 表面修复。全班哄堂大笑，里奥坐了下来，但他的困境被忽视了。他继续感到迷茫。你因为用休息时间“贿赂”学生而失去了一些学术公信力。'
                },
                stats: { competence: 25, ethics: 30, leadership: 35, innovation: 35 }
            }
        ]
    },

    {
        id: 'te_002',
        text: {
            en: '📱 The Digital Distraction: School policy forbids phones. You catch Sarah—a top student—texting under her desk. If reported, she loses her scholarship chance. If not, you break the rules you set for everyone.',
            th: '📱 การรบกวนจากมือถือ: นโยบายโรงเรียนห้ามใช้โทรศัพท์ คุณจับได้ว่าซาร่าห์—นักเรียนหัวกะทิ—แอบส่งข้อความใต้โต๊ะ ถ้าถูกรายงาน เธอจะเสียโอกาสรับทุน ถ้าไม่รายงาน คุณก็ทำลายกฎที่ตั้งไว้เอง',
            zh: '📱 数字分心：学校政策禁用手机。你发现萨拉——一名优秀学生——在课桌下发短信。如果举报，她将失去奖学金机会。如果不举报，你就破坏了你为大家制定的规矩。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📜 Strict Enforcement: Confiscate and file a report."Rules apply to everyone, Sarah. Leadership requires integrity."',
                    th: '📜 บังคับใช้อย่างเคร่งครัด: ยึดและทำรายงาน"กฎใช้กับทุกคนนะซาร่าห์ ภาวะผู้นำต้องการความซื่อตรง"',
                    zh: '📜 严格执行：没收并记录。“规矩对每个人都适用，萨拉。领导力需要正直。”'
                },
                consequence: {
                    en: '⚖️ Bitter Justice. Sarah loses the scholarship. Her parents complain. However, phone use in your class stops entirely. You are known as"fair but cold."Discipline is high.',
                    th: '⚖️ ความยุติธรรมที่ขมขื่น ซาร่าห์เสียทุน พ่อแม่ของเธอร้องเรียน อย่างไรก็ตาม การใช้โทรศัพท์ในห้องของคุณหยุดลงอย่างสิ้นเชิง คุณถูกมองว่า"ยุติธรรมแต่เย็นชา"ระเบียบวินัยสูง',
                    zh: '⚖️ 苦涩的公正。萨拉失去了奖学金。她的父母抱怨。然而，你课上的手机使用完全停止了。你被称为“公正但冷漠”。纪律严明。'
                },
                stats: { competence: 35, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Verbal Warning:"Sarah, put it on my desk for the rest of class. This is your only warning. Don\'t let it happen again."',
                    th: '🤫 เตือนด้วยวาจา:"ซาร่าห์ เอามาวางบนโต๊ะครูจนกว่าจะจบคาบ นี่คือคำเตือนครั้งเดียวและครั้งสุดท้าย อย่าให้เกิดขึ้นอีก"',
                    zh: '🤫 口头警告：“萨拉，下课前把它放在我桌上。这是你唯一的警告。不要再犯了。”'
                },
                consequence: {
                    en: '✅ Relationship Saved. Sarah is grateful and becomes your most helpful student. She wins the scholarship. Other students notice the leniency; some start testing boundaries.',
                    th: '✅ รักษาความสัมพันธ์ ซาร่าห์ซาบซึ้งและกลายเป็นผู้ช่วยที่ดีที่สุดของครู เธอได้รับทุน นักเรียนคนอื่นเริ่มเห็นความใจดีและบางคนเริ่มลองดีกับกฎ',
                    zh: '✅ 关系保住了。萨拉心存感激，成了你最得力的助手。她赢得了奖学金。其他学生注意到了这种宽容；一些人开始挑战底线。'
                },
                stats: { competence: 40, ethics: 35, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 The Tech Break:"Everyone take 60 seconds to check phones, then we lock them away for the final 20 minutes of deep work."',
                    th: '🔄 พักใช้เทคโนโลยี:"ทุกคนให้เวลา 60 วินาทีเพื่อเช็คโทรศัพท์ จากนั้นเราจะเก็บมันไว้เพื่อโฟกัสงานในช่วง 20 นาทีสุดท้าย"',
                    zh: '🔄 科技休息：“大家花60秒检查手机，然后我们在最后20分钟的深度学习中把它们收起来。”'
                },
                consequence: {
                    en: '🌟 Innovative! Sarah puts the phone away safely. You implement"phone hotels"which other teachers adopt. Engagement increases as you treat them like adults. You get an award.',
                    th: '🌟 นวัตกรรม! ซาร่าห์เก็บโทรศัพท์อย่างปลอดภัย คุณเริ่มใช้"ที่พักโทรศัพท์"ซึ่งครูคนอื่นก็นำไปใช้ การมีส่วนร่วมเพิ่มขึ้นเพราะคุณปฏิบัติกับเด็กเหมือนผู้ใหญ่ คุณได้รับรางวัล',
                    zh: '🌟 创新！萨拉安全地收起了手机。你实施了“手机旅馆”，其他老师也纷纷效仿。由于你像对待成年人一样对待他们，参与度增加了。你获得了一个奖项。'
                },
                stats: { competence: 45, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '👀 Silent Proximity: Stand next to Sarah\'s desk while teaching until she realizes you know and hides it herself.',
                    th: '👀 การกดดันด้วยความเงียบ: ยืนข้างโต๊ะซาร่าห์ในขณะที่สอนจนกว่าเธอจะรู้ตัวและซ่อนมันไปเอง',
                    zh: '👀 沉默靠近：授课时站在萨拉桌旁，直到她意识到你发现了并自己藏起来。'
                },
                consequence: {
                    en: '⚠️ Short-term Fix. Sarah stops, but feels paranoid. You didn\'t address rule-breaking formally, so she does it anyway in other classes. Conflict avoided but discipline failed.',
                    th: '⚠️ แก้ปัญหาชั่วคราว ซาร่าห์หยุดแต่รู้สึกระแวง คุณไม่ได้จัดการเรื่องการทำผิดกฎอย่างเป็นทางการ เธอจึงไปทำในห้องอื่นต่อ เลี่ยงความขัดแย้งได้แต่ล้มเหลวเรื่องวินัย',
                    zh: '⚠️ 短期修复。萨拉停止了，但感到心惊肉跳。你没有正式处理违规行为，所以她在其他课上照做不误。避免了冲突但纪律失败。'
                },
                stats: { competence: 30, ethics: 35, leadership: 30, innovation: 25 }
            }
        ]
    },

    {
        id: 'te_003',
        text: {
            en: '💰 The Grade Grubber: A powerful board member\'s son, Jack, is at an 89.4%. The father emails you:"My son needs that A for Ivy League. A small adjustment won\'t hurt anyone, right?"He hints at sponsoring your next classroom project.',
            th: '💰 การขอเกรด: ลูกชายของสมาชิกบอร์ดผู้มีอำนาจ แซค ได้คะแนน 89.4% พ่อของเขาส่งอีเมลหาคุณ:"ลูกชายผมต้องการเกรด A เพื่อเข้า Ivy League การปรับคะแนนเล็กน้อยไม่เสียหายอะไรใช่ไหม?"เขาเปรยว่าจะสนับสนุนโครงการห้องเรียนครั้งต่อไปของคุณด้วย',
            zh: '💰 索要分数：一名有权势的校董事会成员的儿子杰克成绩是89.4%。父亲给你发邮件：“我儿子需要那个A才能上常春藤盟校。小小调整一下没关系吧？”他暗示会赞助你下一个课堂项目。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Firm Integrity:"Grades reflect mastery, not sponsorship. Jack earned a B+. I cannot change the data."',
                    th: '🚫 ยืนหยัดในความซื่อตรง:"เกรดสะท้อนถึงการเรียนรู้ ไม่ใช่การสนับสนุน แซคได้ B+ ครูไม่สามารถเปลี่ยนข้อมูลได้"',
                    zh: '🚫 坚定正直：“分数反映的是掌握程度，而不是赞助。杰克得到了B+。我不能更改数据。”'
                },
                consequence: {
                    en: '🛡️ Respect Gained! The board member is annoyed but respects your backbone. Other teachers feel empowered. Jack works harder next term and gets a real A. Your reputation for ethics is legendary.',
                    th: '🛡️ ได้รับความเคารพ! สมาชิกบอร์ดรำคาญแต่เคารพในความเด็ดเดี่ยวของคุณ ครูคนอื่นรู้สึกมีพลัง แซคพยายามขยันขึ้นในเทอมหน้าและได้ A จริงๆ ชื่อเสียงเรื่องจริยธรรมของคุณกลายเป็นตำนาน',
                    zh: '🛡️ 赢得尊重！董事会成员虽然恼火，但尊重你的骨气。其他老师感到备受鼓舞。杰克下学期更加努力，得到了真正的A。你的职业道德名声远扬。'
                },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 The"Extra Credit"Compromise:"I don\'t change grades, but Jack can do a 10-page research paper over the weekend to earn the last 0.6%."',
                    th: '🤝 การประนีประนอมด้วยงานเพิ่ม:"ครูไม่เปลี่ยนเกรด แต่แซคสามารถทำรายงานวิจัย 10 หน้าในช่วงสุดสัปดาห์เพื่อเพิ่มคะแนน 0.6% ที่เหลือได้"',
                    zh: '🤝 “额外学分”妥协：“我不改分数，但杰克可以在周末写一篇10页的研究论文来赚取最后那0.6%。”'
                },
                consequence: {
                    en: '⚖️ Ethical Gray Area. Jack gets the A, but other students find out and feel the system is rigged for the rich. You get the project funding, but some colleagues look at you differently. Jack learns money buys opportunities.',
                    th: '⚖️ พื้นที่สีเทาทางจริยธรรม แซคได้ A แต่นักเรียนคนอื่นรู้ข่าวและรู้สึกว่าระบบเอื้อคนรวย คุณได้ทุนทำโครงการ แต่เพื่อนร่วมงานบางคนมองคุณเปลี่ยนไป แซคเรียนรู้ว่าเงินซื้อโอกาสได้',
                    zh: '⚖️ 伦理灰色地带。杰克得到了A，但其他学生发现后觉得系统是为富人操纵的。你得到了项目资金，但一些同事看你的眼神不一样了。杰克学会了金钱可以买到机会。'
                },
                stats: { competence: 35, ethics: 20, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '📉 Strict Curve:"I\'ll re-evaluate the entire class. If many struggled with one question, I\'ll throw it out."(The curve helps Jack, but only if others benefit).',
                    th: '📉 ปรับเกณฑ์ทั้งห้อง:"ครูจะประเมินคะแนนทั้งห้องใหม่ ถ้าหลายคนทำโจทย์ข้อเดียวไม่ได้ ครูจะตัดข้อนั้นออก"(วิธีนี้ช่วยแซค แต่ต้องช่วยคนอื่นด้วย)',
                    zh: '📉 严格曲线：“我会重新评估全班成绩。如果很多人在某道题上遇到困难，我就把它去掉。”（曲线对杰克有利，但前提是其他人也受益）。'
                },
                consequence: {
                    en: '✅ Pedagogically Sound! Jack gets his A, 5 other students get grade bumps too. The father is happy. You didn\'t"cheat"for one person, you adjusted for everyone. Data-driven and fair.',
                    th: '✅ ถูกต้องตามหลักการ! แซคได้ A และนักเรียนอีก 5 คนก็ได้คะแนนเพิ่มด้วย พ่อของเขาพอใจ คุณไม่ได้"โกง"ให้คนเดียว แต่ปรับให้ทุกคน ทำงานตามข้อมูลและยุติธรรม',
                    zh: '✅ 教学合理！杰克得到了A，另外5名学生也提升了成绩。父亲很高兴。你没有为一个人“作弊”，你为每个人做了调整。数据驱动且公平。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '⚖️ Report the Influence: Inform the Principal about the email and the"sponsorship"offer to maintain transparency.',
                    th: '⚖️ รายงานความพยายามกดดัน: แจ้งอาจารย์ใหญ่เรื่องอีเมลและข้อเสนอ"การสนับสนุน"เพื่อความโปร่งใส',
                    zh: '⚖️ 举报干预：向校长告知邮件和“赞助”提议，以维持透明度。'
                },
                consequence: {
                    en: '⚠️ Political Fallout. The Principal handles it, but the board member now dislikes you. You are safe from ethical breach, but your funding for future projects is constantly rejected. You are clean but isolated.',
                    th: '⚠️ ผลกระทบทางการเมือง อาจารย์ใหญ่เป็นคนจัดการ แต่สมาชิกบอร์ดคนนั้นไม่ชอบคุณแล้ว คุณรอดจากเรื่องจริยธรรม แต่เงินทุนโครงการในอนาคตถูกปฏิเสธตลอด คุณขาวสะอาดแต่ถูกโดดเดี่ยว',
                    zh: '⚠️ 政治后果。校长处理了这件事，但董事会成员现在讨厌你。你免受了职业道德侵害，但你未来项目的资金申请不断被拒绝。你很清白但被孤立了。'
                },
                stats: { competence: 30, ethics: 50, leadership: 35, innovation: 15 }
            }
        ]
    },

    {
        id: 'te_004',
        text: {
            en: '🧩 The Inclusion Dilemma: You have a student, Maya, who is clearly struggling with reading speed and focus. Her parents refuse"Special Ed"testing because of the stigma. Maya is falling behind and becoming depressed. Your class size is 35.',
            th: '🧩 ปมปัญหาการเรียนร่วม: คุณมีนักเรียนชื่อ มายา ที่เห็นได้ชัดว่ามีปัญหาเรื่องความเร็วในการอ่านและสมาธิ พ่อแม่ของเธอปฏิเสธการประเมิน"การศึกษาพิเศษ"เพราะกลัวถูกตราหน้า มายาเริ่มเรียนไม่ทันและมีภาวะซึมเศร้า ในขณะที่คุณมีนักเรียนในห้องถึง 35 คน',
            zh: '🧩 融合教育困境：你有一名学生玛雅，显然在阅读速度和注意力方面有困难。由于耻辱感，她的父母拒绝接受“特殊教育”测试。玛雅正在落后并变得抑郁。你的班级规模是35人。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎨 Universal Design (UDL): Modify your entire teaching style to use more visuals, audio, and group work so Maya benefits without being singled out.',
                    th: '🎨 ออกแบบการเรียนรู้ที่เป็นสากล (UDL): ปรับรูปแบบการสอนทั้งหมดโดยใช้ภาพ เสียง และงานกลุ่มมากขึ้น เพื่อให้มายาได้รับประโยชน์โดยไม่ต้องถูกแยกออกมาเป็นพิเศษ',
                    zh: '🎨 通用设计（UDL）：修改你的整个教学风格，使用更多的视觉、音频和小组合作，让玛雅受益而不用被单独挑出来。'
                },
                consequence: {
                    en: '✅ Success for All! Maya starts participating more. Interestingly, your"top"students also perform better with the diverse materials. You become a leader in UDL methodology. Maya gains confidence.',
                    th: '✅ ความสำเร็จของทุกคน! มายาเริ่มมีส่วนร่วมมากขึ้น ที่น่าสนใจคือกลุ่มนักเรียน"หัวกะทิ"ก็ทำงานได้ดีขึ้นด้วยสื่อที่หลากหลาย คุณกลายเป็นผู้นำด้านระเบียบวิธี UDL มายามีความมั่นใจขึ้น',
                    zh: '✅ 全员成功！玛雅开始更多地参与。有趣的是，你的“顶尖”学生在使用多样化教材的情况下也表现得更好。你成为了UDL方法论的领导者。玛雅赢得了自信。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🗣️ Heart-to-Heart with Parents: Invite parents for a home visit. Show them Maya\'s work and explain that testing is a"ticket to support,"not a label.',
                    th: '🗣️ เปิดใจกับผู้ปกครอง: เชิญพ่อแม่มาคุยกันที่บ้าน แสดงผลงานของมายาให้พวกเขาดู และอธิบายว่าการประเมินคือ"ตั๋วสู่ความช่วยเหลือ"ไม่ใช่การแปะป้าย',
                    zh: '🗣️ 与家长谈心：邀请家长家访。向他们展示玛雅的作品，并解释测试是“获得支持的入场券”，而非标签。'
                },
                consequence: {
                    en: '🤝 Trust Won! The parents cry, admitting they were scared. They agree to testing. Maya gets an IEP and an aide. Her grades skyrocket. You are praised for your compassionate communication.',
                    th: '🤝 ได้รับความไว้วางใจ! พ่อแม่ร้องไห้และยอมรับว่าพวกเขากลัว พวกเขาตกลงให้ประเมิน มายาได้รับแผนการเรียนเฉพาะบุคคลและคนช่วยสอน เกรดของเธอพุ่งสูง คุณได้รับคำชมเรื่องการสื่อสารที่เปี่ยมด้วยความเห็นอกเห็นใจ',
                    zh: '🤝 赢得信任！家长哭了，承认他们很害怕。他们同意接受测试。玛雅得到了IEP和一名助教。她的成绩飞速提升。你因富有同情心的沟通而受到称赞。'
                },
                stats: { competence: 40, ethics: 45, leadership: 45, innovation: 25 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Peer Tutoring: Pair Maya with a high-performing student who is kind."You help him with ideas, he helps you with the reading portions."',
                    th: '🤝 เพื่อนช่วยเพื่อน: จับคู่มายากับนักเรียนเก่งที่มีความเมตตา"เธอช่วยเขาเรื่องไอเดีย ส่วนเขาช่วยเธอเรื่องการอ่าน"',
                    zh: '🤝 同伴辅导：将玛雅与一名善良的高年级学生配对。“你帮他出主意，他帮你在阅读部分。”'
                },
                consequence: {
                    en: '⚠️ Mixed Results. Maya feels a bit ashamed relying on a peer. The peer student stays focused on Maya instead of his own work. Her grades stay stable but she doesn\'t learn the core skills she needs.',
                    th: '⚠️ ผลลัพธ์กึ่งดีกึ่งเสีย มายารู้สึกอายเล็กน้อยที่ต้องพึ่งเพื่อน เพื่อนที่ช่วยก็เสียสมาธิจากงานตัวเอง เกรดของเธอคงที่แต่เธอไม่ได้เรียนรู้ทักษะพื้นฐานที่จำเป็นจริงๆ',
                    zh: '⚠️ 结果参差不齐。玛雅因为依赖同伴而感到有点羞愧。同伴学生专注于玛雅而忽视了自己的工作。她的成绩保持稳定，但她没有学到所需的核知识技能。'
                },
                stats: { competence: 30, ethics: 35, leadership: 35, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📏 Just Grade Fairly: Maintain the same standards."Maya needs to learn to adapt to the real world. Life doesn\'t provide extra time."',
                    th: '📏 ให้คะแนนตามเกณฑ์: รักษามาตรฐานเดิม"มายาต้องเรียนรู้ที่จะปรับตัวเข้ากับโลกแห่งความจริง ชีวิตจริงไม่มีเวลาพิเศษให้เพิ่ม"',
                    zh: '📏 公平打分：维持同样的标准。“玛雅需要学会适应现实世界。生活不会提供额外的时间。”'
                },
                consequence: {
                    en: '💀 Failure. Maya fails your class and eventually drops out of high school. You followed the"rules"but failed the student. Years later, you see her working a dead-end job and feel a pang of regret.',
                    th: '💀 ความล้มเหลว มายาสอบตกในวิชาของคุณและในที่สุดก็ลาออกจากโรงเรียน คุณทำตาม"กฎ"แต่ล้มเหลวในฐานะครู หลายปีต่อมา คุณเห็นเธอทำงานที่ไม่มีอนาคตและรู้สึกเจ็บปวดในใจ',
                    zh: '💀 失败。玛雅你的课不及格，最终从高中辍学。你遵守了“规矩”，却没能救学生。多年以后，你看到她做着一份没有前途的工作，感到一阵悔恨。'
                },
                stats: { competence: 20, ethics: 15, leadership: 20, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_005',
        text: {
            en: '🤖 The AI Plagiarism Scandal: Half the class submits essays that look suspiciously like ChatGPT output—perfect grammar but zero personal insight. If you fail them all, you have a PR disaster and mass parent complaints. If you ignore it, you admit defeat to AI.',
            th: '🤖 เรื่องอื้อฉาว AI ลอกเลียนแบบ: นักเรียนครึ่งห้องส่งบทความที่ดูเหมือนใช้ ChatGPT อย่างน่าสงสัย—ไวยากรณ์เป๊ะแต่ไม่มีความคิดเห็นส่วนตัวเลย ถ้าคุณให้ตกทุกคน คุณจะเจอวิกฤต PR และการร้องเรียนจากพ่อแม่มหาศาล ถ้าคุณเพิกเฉย ก็เท่ากับคุณยอมแพ้ต่อ AI',
            zh: '🤖 AI 剽窃丑闻：班上一半的学生提交的论文看起来可疑地像ChatGPT的产出——完美的语法，但没有任何个人见解。如果你让他们全部不及格，你将面临一场公关灾难和大规模家长投诉。如果你忽视它，你就承认向AI低头。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Lockdown Essays: Cancel the typed essays. Everyone must rewrite their entire paper by hand in class next Monday. No notes allowed.',
                    th: '🛡️ สอบเขียนในห้อง: ยกเลิกบทความที่พิมพ์มา ทุกคนต้องเขียนบทความใหม่ทั้งหมดด้วยลายมือในห้องเรียนวันจันทร์หน้า ห้ามใช้โน้ต',
                    zh: '🛡️ 闭卷论文：取消打印论文。下周一每个人必须在课堂上手写重写整篇论文。不允许使用笔记。'
                },
                consequence: {
                    en: '⚖️ Fairness Prevails. The AI users struggle and get lower grades. The honest students are annoyed but feel the system is now fair. You eliminate AI cheating for the term. Students learn that you can\'t be fooled.',
                    th: '⚖️ ความยุติธรรมชนะ คนที่ใช้ AI ดิ้นรนและได้คะแนนต่ำลง นักเรียนที่ทำเองรำคาญแต่รู้สึกว่าระบบยุติธรรมแล้ว คุณกำจัดการโกงด้วย AI ได้ตลอดเทอม นักเรียนเรียนรู้ว่าคุณหลอกไม่ได้',
                    zh: '⚖️ 公平获胜。使用AI的学生感到吃力并得到了较低的分数。诚实的学生虽然恼火，但觉得系统现在公平了。你在本学期消除了AI作弊。学生们意识到你不可掉以轻心。'
                },
                stats: { competence: 40, ethics: 45, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Pivot to AI-Literacy:"I know you used AI. Now, your new assignment is to critique the AI\'s essay and find 5 factual errors or biases in its logic."',
                    th: '🔄 เปลี่ยนเป็นความฉลาดทาง AI:"ครูรู้ว่าพวกเธอใช้ AI งานใหม่ของพวกเธอคือ วิจารณ์บทความที่ AI เขียนมา และหาข้อผิดพลาดทางข้อเท็จจริงหรือความลำเอียงในตรรกะให้ได้ 5 จุด"',
                    zh: '🔄 转向AI素养：“我知道你们用了AI。现在，你们的新任务是评论AI的论文，并找出其逻辑中的5个事实错误或偏见。”'
                },
                consequence: {
                    en: '🌟 Innovation Leader! Students are shocked. They learn that AI is a tool, not a replacement for thinking. This becomes your most famous lesson. The district adopts your"AI Integrity Policy."You are a pioneer.',
                    th: '🌟 ผู้นำนวัตกรรม! นักเรียนตกใจ พวกเขาเรียนรู้ว่า AI เป็นเครื่องมือ ไม่ใช่สิ่งที่มาแทนที่ความคิด นี่กลายเป็นบทเรียนที่มีชื่อเสียงที่สุดของคุณ เขตการศึกษาใช้นโยบาย"จริยธรรม AI"ของคุณ คุณคือผู้บุกเบิก',
                    zh: '🌟 创新领导者！学生们震惊了。他们了解到AI是一个工具，而不是思考的替代品。这成了你最著名的课程。学区采用了你的“AI诚信政策”。你是个先驱者。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ Oral Defense: Schedule 5-minute 1-on-1 interviews with every student to explain their arguments. If they can\'t explain it, they fail.',
                    th: '🗣️ การสอบปากเปล่า: นัดคุยตัวต่อตัวคนละ 5 นาทีเพื่อให้อธิบายอาร์กิวเมนต์ในบทความ ถ้าอธิบายไม่ได้คือตก',
                    zh: '🗣️ 口头答辩：安排与每位学生进行5分钟的一对一访谈，解释他们的论点。如果解释不出来，就不及格。'
                },
                consequence: {
                    en: '✅ Comprehensive Truth. You spend 3 grueling days in meetings. 12 students admit to cheating. 3 students were actually just very good writers. You save the innocent and punish the guilty. You are exhausted but proud.',
                    th: '✅ ความจริงที่ครบถ้วน คุณใช้เวลา 3 วันที่แสนเหนื่อยในการประชุม นักเรียน 12 คนยอมรับว่าโกง นักเรียน 3 คนที่จริงแล้วแค่เขียนเก่งมาก คุณช่วยคนบริสุทธิ์และลงโทษคนผิด คุณเหนื่อยมากแต่ภูมิใจ',
                    zh: '✅ 全面的真相。你花了3天时间进行令人筋疲力竭的面谈。12名学生承认作弊。3名学生其实只是写得非常好。你拯救了无辜者，惩罚了有罪者。你虽然精疲力竭但很自豪。'
                },
                stats: { competence: 45, ethics: 50, leadership: 45, innovation: 25 }
            },
            {
                id: 'D',
                text: {
                    en: '🤫 The Quiet Pass:"I\'ll just grade the content. I don\'t have time to police 150 students. I\'ll focus on the students who actually want to learn."',
                    th: '🤫 ปล่อยผ่านเงียบๆ:"ครูจะแค่ให้คะแนนตามเนื้อหา ครูไม่มีเวลามานั่งไล่ตามจับเด็ก 150 คนหรอก ครูจะโฟกัสแค่เด็กที่อยากเรียนจริงๆ"',
                    zh: '🤫 悄悄放过：“我只给内容打分。我没有时间监管150名学生。我会专注于那些真正想学习的学生。”'
                },
                consequence: {
                    en: '💀 Academic Decay. Word spreads that yours is an"Easy A"class. Honest students stop trying. AI use becomes 100% by next year. You lose all passion for teaching as you feel like you\'re grading robots.',
                    th: '💀 ความเสื่อมถอยทางวิชาการ มีข่าวแพร่ออกไปว่าวิชาของคุณ"ได้ A ง่าย"นักเรียนที่ซื่อสัตย์เลิกพยายาม ปีหน้าทุกคนใช้ AI 100% คุณหมดไฟในการสอนเพราะรู้สึกเหมือนกำลังให้คะแนนหุ่นยนต์',
                    zh: '💀 学术衰退。消息传开，说你的课是“轻松拿A”。诚顺的学生不再努力。到明年，AI的使用率达到了100%。你失去了对教学的所有热情，因为你觉得自己在给机器人打分。'
                },
                stats: { competence: 15, ethics: 10, leadership: 15, innovation: 20 }
            }
        ]
    },
    {
        id: 'te_006',
        text: {
            en: '🚌 The Field Trip Funding: You\'ve planned an amazing trip to the NASA space center. It costs $200 per student. 15 students can\'t afford it and will have to stay behind in the library. If you cancel, everyone loses. If you go, the equity gap is visible for all to see.',
            th: '🚌 ทุนทัศนศึกษา: คุณวางแผนทริปสุดเจ๋งไปศูนย์อวกาศ NASA ค่าใช้จ่ายคนละ $200 นักเรียน 15 คนไม่มีเงินจ่ายและต้องถูกทิ้งไว้ที่ห้องสมุด ถ้าคุณยกเลิก ทุกคนก็ไม่ได้ไป ถ้าคุณไป ช่องว่างความเหลื่อมล้ำจะปรากฏให้ทุกคนเห็นชัดเจน',
            zh: '🚌 研学经费：你策划了一次去NASA太空中心的精彩旅行。每名学生费用200美元。15名学生负担不起，只能留在图书馆。如果你取消，所有人都会失望。如果你去，教育公平的差距将显而易见。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Community Hustle: Launch a massive 48-hour bake sale and crowdfunding campaign."We go together, or no one goes."',
                    th: '💰 ระดมทุนชุมชน: เริ่มกิจกรรมขายขนมและระดมทุนออนไลน์อย่างหนักใน 48 ชั่วโมง"เราไปพร้อมกัน หรือไม่ต้องไปสักคน"',
                    zh: '💰 社区众筹：发起一次大规模的48小时烘焙义卖和众筹活动。“我们要么一起去，要么谁都不去。”'
                },
                consequence: {
                    en: '✅ Community Unity! You raise $4,000. Every student goes. The local news covers the story. You are exhausted but the bonding between students is incredible. You gain a reputation as a teacher who fights for their kids.',
                    th: '✅ ชุมชนเป็นหนึ่งเดียว! คุณระดมทุนได้ $4,000 นักเรียนทุกคนได้ไป ข่าวท้องถิ่นนำเสนอเรื่องนี้ คุณเหนื่อยสายตัวแทบขาดแต่ความผูกพันในห้องเรียนสุดยอดมาก คุณขึ้นชื่อว่าเป็นครูที่สู้เพื่อนักเรียน',
                    zh: '✅ 社区团结！你筹集了4000美元。每名学生都去了。当地新闻报道了这个故事。你虽然精疲力竭，但学生之间的纽带变得非常牢固。你赢得了为孩子们争取利益的老师的名声。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 45 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 The Selective Subsidy: Ask the wealthy parents to"sponsor a student."Keep the donations anonymous to protect dignity.',
                    th: '🤝 การอุปถัมภ์รายคน: ขอให้ผู้ปกครองที่มีฐานะช่วย"เป็นสปอนเซอร์ให้นักเรียน"โดยเก็บข้อมูลเป็นความลับเพื่อรักษาศักดิ์ศรีของเด็ก',
                    zh: '🤝 选择性资助：请富裕的家长“资助一名学生”。保持匿名捐赠以保护尊严。'
                },
                consequence: {
                    en: '✅ Elegant Solution. All students go. No one knows who paid for whom. You avoided the stress of a bake sale. However, you didn\'t solve the long-term funding issue, just a one-time fix.',
                    th: '✅ วิธีแก้ปัญหาที่ชาญฉลาด นักเรียนทุกคนได้ไป ไม่มีใครรู้ว่าใครจ่ายให้ใคร คุณเลี่ยงความเครียดจากการขายของได้ แต่คุณไม่ได้แก้ปัญหาเรื่องทุนในระยะยาว เป็นแค่การแก้รายครั้ง',
                    zh: '✅ 优雅的解决方案。所有学生都去了。没人知道谁为谁付了钱。你避免了义卖的压力。然而，你没有解决长期的经费问题，只是临时解决。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🏢 Corporate Partnership: Contact a local tech company. Offer to put their logo on class t-shirts in exchange for funding the disadvantaged students.',
                    th: '🏢 ร่วมมือกับองค์กร: ติดต่อบริษัทเทคโนโลยีในท้องถิ่น เสนอว่าจะติดโลโก้บริษัทบนเสื้อทีมของห้องแลกกับทุนการศึกษาให้เด็กที่ขาดแคลน',
                    zh: '🏢 企业合作：联系当地科技公司。提议在班级T恤上印上他们的标志，以换取对贫困学生的资助。'
                },
                consequence: {
                    en: '🌟 Business Savvy! The company pays for the ENTIRE trip, not just the 15. You have extra money for classroom supplies. You establish a long-term partnership for future internships. You are a networking genius.',
                    th: '🌟 ความฉลาดทางธุรกิจ! บริษัทจ่ายค่าทริปให้"ทุกคน"ไม่ใช่แค่ 15 คน คุณมีเงินเหลือซื้ออุปกรณ์การเรียนด้วย คุณสร้างพันธมิตรระยะยาวสำหรับการฝึกงานในอนาคต คุณคืออัจฉริยะด้านเครือข่าย',
                    zh: '🌟 商业头脑！公司支付了“所有”人的行程费用，而不仅仅是那15个人。你有额外的钱购买课堂用品。你为未来的实习建立了长期合作伙伴关系。你是个人脉天才。'
                },
                stats: { competence: 45, ethics: 35, leadership: 45, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🚫 Cancel the Trip:"If equity can\'t be guaranteed, we do a virtual tour for free in the classroom. No child left behind."',
                    th: '🚫 ยกเลิกทริป:"ถ้าความเท่าเทียมไม่เกิดขึ้น เราก็จะทัศนศึกษาผ่านหน้าจอในห้องเรียนแทน ไม่มีใครต้องถูกทิ้งไว้ข้างหลัง"',
                    zh: '🚫 取消旅行：“如果不能保证公平，我们就在教室里进行免费的虚拟参观。不让一个孩子掉队。”'
                },
                consequence: {
                    en: '⚠️ Disappointment. The class is heartbroken. The wealthy parents are angry because they already paid. You held to your principles, but the students missed a life-changing experience. Morale plummets.',
                    th: '⚠️ ความผิดหวัง ชั้นเรียนเสียใจมาก พ่อแม่ที่รวยก็โกรธเพราะจ่ายเงินไปแล้ว คุณรักษาสัจจะแต่เด็กๆ พลาดประสบการณ์ที่อาจเปลี่ยนชีวิตพวกเขาได้ ขวัญกำลังใจดิ่งเหว',
                    zh: '⚠️ 失望。全班都很伤心。富裕的家长很生气，因为他们已经付了钱。你坚持了原则，但学生们错失了改变人生的经历。士气低落。'
                },
                stats: { competence: 30, ethics: 45, leadership: 25, innovation: 15 }
            }
        ]
    },

    {
        id: 'te_007',
        text: {
            en: '🧠 The Gifted Rebel: Felix is a genius. He finishes your 1-hour physics test in 8 minutes and spends the rest of the time making paper airplanes and distracting other students. He says your class is"boring and slow."',
            th: '🧠 อัจฉริยะจอมป่วน: เฟลิกซ์เป็นเด็กอัจฉริยะ เขาทำข้อสอบฟิสิกส์ 1 ชั่วโมงเสร็จใน 8 นาที แล้วใช้เวลาที่เหลือพับเครื่องบินกระดาษและกวนสมาธิเพื่อนคนอื่น เขาบอกว่าวิชาของคุณ"น่าเบื่อและช้าไป"',
            zh: '🧠 天才叛逆者：菲利克斯是个天才。他8分钟就做完了你1小时的物理测试，剩下的时间就在折纸飞机并干扰其他学生。他说你的课“既无聊又慢”。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👨‍🏫 The Teaching Assistant:"Felix, since you finished early, I need you to lead a small study group for students who are stuck on problem 5."',
                    th: '👨‍🏫 ผู้ช่วยสอน:"เฟลิกซ์ ในเมื่อเธอเสร็จเร็ว ครูอยากให้เธอไปนำกลุ่มติวเล็กๆ ให้เพื่อนที่ยังติดโจทย์ข้อ 5 อยู่หน่อย"',
                    zh: '👨‍🏫 助教：“菲利克斯，既然你提前做完了，我需要你带领一个小组，帮助那些卡在第5题的学生。”'
                },
                consequence: {
                    en: '⚠️ Potential Backfire. Felix is arrogant; he makes the struggling students feel stupid. You haven\'t solved his boredom, you just gave him an audience for his ego. The struggling students feel worse.',
                    th: '⚠️ ผลเสียที่อาจเกิดขึ้น เฟลิกซ์อีโก้สูง เขาทำให้เพื่อนที่เรียนไม่เก่งรู้สึกโง่ คุณไม่ได้แก้ความเบื่อของเขา แต่คุณแค่หาผู้ชมให้เขาลองดี เด็กที่เรียนอ่อนรู้สึกแย่ลงไปอีก',
                    zh: '⚠️ 潜在的适得其反。菲利克斯很傲慢；他让吃力的学生觉得自己很笨。你没有解决他的无聊，你只是给他的虚荣心找了观众。吃力的学生感觉更糟了。'
                },
                stats: { competence: 35, ethics: 30, leadership: 30, innovation: 25 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 The Challenge:"Felix, if you\'re bored, here is a NASA-level aerodynamics problem set. If you solve it, you get an automatic A for the term and can go to the library during class."',
                    th: '🚀 ความท้าทาย:"เฟลิกซ์ ถ้าเธอเบื่อ นี่คือโจทย์อากาศพลศาสตร์ระดับ NASA ถ้าเธอแก้ได้ ครูให้เกรด A อัตโนมัติสำหรับเทอมนี้ และเธอสามารถไปห้องสมุดในคาบของครูได้เลย"',
                    zh: '🚀 挑战：“菲利克斯，如果你觉得无聊，这是一套NASA级别的空气动力学题目。如果你解开了，你本学期自动拿A，而且上课时间可以去图书馆。”'
                },
                consequence: {
                    en: '✅ Genius Unleashed! Felix is obsessed. He spends weeks on the problem, eventually presenting a solution that stuns you. He discovers a passion for aerospace engineering. You successfully differentiated instruction.',
                    th: '✅ ปลดปล่อยอัจฉริยะ! เฟลิกซ์หมกมุ่นกับมันมาก เขาใช้เวลาหลายสัปดาห์และทำเฉลยที่ทำให้คุณอึ้ง เขาพบแพสชั่นด้านวิศวกรรมการบิน คุณจัดการการสอนที่แตกต่างได้สำเร็จ',
                    zh: '✅ 天才爆发！菲利克斯着迷了。他花了几个星期研究这个问题，最后提交了一个让你震惊的方案。他发现了对航空航天工程的热情。你成功执行了差异化教学。'
                },
                stats: { competence: 50, ethics: 35, leadership: 40, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '📋 Strict Protocol:"Finish the worksheet, then read the textbook quietly. No paper airplanes. Respect the learning environment."',
                    th: '📋 ระเบียบเคร่งครัด:"ทำงานให้เสร็จ แล้วนั่งอ่านตำราเงียบๆ ห้ามพับเครื่องบินกระดาษ เคารพบรรยากาศการเรียนด้วย"',
                    zh: '📋 严格规程：“做完工作表，然后安静看书。不准折纸飞机。尊重学习环境。”'
                },
                consequence: {
                    en: '💀 Talent Wasted. Felix starts skipping your class. He loses interest in school and becomes a"troublemaker."You kept the class quiet, but you lost a brilliant mind. High competence in discipline, zero in innovation.',
                    th: '💀 เสียของ เฟลิกซ์เริ่มโดดเรียน เขาหมดความสนใจในโรงเรียนและกลายเป็น"เด็กเกเร"คุณควบคุมห้องให้เงียบได้แต่คุณทำลายจิตวิญญาณเด็กฉลาดไป วินัยเยี่ยม แต่นวัตกรรมเป็นศูนย์',
                    zh: '💀 人才浪费。菲利克斯开始逃课。他失去了学习兴趣，成了一个“麻烦制造者”。你让教室保持安静，但你失去了一个天才。纪律能力高，创新能力为零。'
                },
                stats: { competence: 30, ethics: 20, leadership: 30, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 The Mentorship Path:"Felix, you\'re fast. Design a physics experiment for next week that involves paper airplanes. You will teach the class the science behind it."',
                    th: '🔄 เส้นทางเมนเทอร์:"เฟลิกซ์ เธอทำไวมาก งั้นออกแบบการทดลองฟิสิกส์เรื่องเครื่องบินกระดาษสำหรับสัปดาห์หน้าที แล้วเธอจะเป็นคนสอนเพื่อนเรื่องวิทยาศาสตร์ที่อยู่เบื้องหลังมัน"',
                    zh: '🔄 导师之路：“菲利克斯，你很快。为下周设计一个关于纸飞机的物理实验。你将向全班讲解其背后的科学道理。”'
                },
                consequence: {
                    en: '✅ Leadership Growth! Felix puts his energy into teaching. He learns humility while the class learns aero-physics. He stops being a disruption and starts being a leader. You created a safe space for talent.',
                    th: '✅ ภาวะผู้นำเติบโต! เฟลิกซ์ทุ่มเทให้กับการสอน เขาเรียนรู้ความถ่อมตัวในขณะที่คนอื่นเรียนฟิสิกส์ เขาหยุดกวนและเริ่มเป็นผู้นำ คุณสร้างพื้นที่ที่ปลอดภัยให้คนเก่ง',
                    zh: '✅ 领导力增长！菲利克斯投入到教学中。他在向全班讲解航空物理的过程中学会了谦逊。他不再是个干扰者，而成了领袖。你为天才创造了安全空间。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 45 }
            }
        ]
    },

    {
        id: 'te_008',
        text: {
            en: '📚 Controversial Curriculum: You are teaching a history unit on an event that deeply offends a conservative group of parents. They demand you skip the unit or lose your job. The school board is wavering. How do you handle the pressure?',
            th: '📚 หลักสูตรขัดแย้ง: คุณกำลังสอนประวัติศาสตร์ในเหตุการณ์ที่ไปกระทบจิตใจผู้ปกครองกลุ่มอนุรักษนิยมอย่างรุนแรง พวกเขาเรียกร้องให้คุณข้ามบทนี้ไป ไม่อย่างนั้นจะให้คุณตกงาน บอร์ดโรงเรียนเริ่มลังเล คุณจะรับมือความกดดันอย่างไร?',
            zh: '📚 争议课程：你正在教授一节关于某个历史事件的课程，该事件深深触犯了一群保守派家长的神经。他们要求你跳过这一单元，否则就让你丢掉饭碗。学校董事会正在动摇。你如何应对压力？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✊ Academic Freedom:"I follow the state standards and historical facts. I will not erase history for political comfort. I\'m staying the course."',
                    th: '✊ เสรีภาพทางวิชาการ:"ฉันทำตามมาตรฐานรัฐและข้อเท็จจริงทางประวัติศาสตร์ ฉันจะไม่ลบประวัติศาสตร์เพื่อความสบายใจทางการเมือง ฉันจะสอนต่อไป"',
                    zh: '✊ 学术自由：“我遵循州标准和历史事实。我不会为了政治上的舒适而抹杀历史。我坚持原来的课程。”'
                },
                consequence: {
                    en: '⚖️ High-Stakes Battle! You keep the unit. You are fired, but you sue for wrongful termination and win. You become a national symbol for teacher rights. Your career shifts to advocacy, but students miss out on your teaching.',
                    th: '⚖️ เดิมพันสูงลิ่ว! คุณสอนต่อ คุณถูกไล่ออก แต่คุณฟ้องร้องเรียกความเป็นธรรมและชนะ คุณกลายเป็นสัญลักษณ์ระดับชาติของสิทธิครู อาชีพคุณเปลี่ยนไปทางนักสิทธิมนุษยชน แต่เด็กๆ พลาดบทเรียนของคุณ',
                    zh: '⚖️ 高风险战斗！你坚持了课程。你被解雇了，但你以不正当终止合同起诉并获胜。你成为了教师权利的国家象征。你的事业转向了维权，但学生们错过了你的教学。'
                },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 The Dialogue Open: Invite the parents to a community forum. Explain the pedagogy:"We teach HOW to think, not WHAT to think. Here are the sources we use."',
                    th: '🤝 เปิดเวทีเสวนา: เชิญผู้ปกครองมาร่วมประชุม อธิบายหลักการสอน:"เราสอนวิธีคิด ไม่ใช่สั่งให้คิดตาม นี่คือแหล่งข้อมูลที่เราใช้"',
                    zh: '🤝 开启对话：邀请家长参加社区论坛。解释教学法：“我们教的是‘如何’思考，而不是‘思考什么’。这是我们使用的来源。”'
                },
                consequence: {
                    en: '✅ Crisis Averted. By showing the facts and being transparent, most parents calm down. They see you aren\'t"indoctrinating"but educating. You keep your job and the unit stays. High leadership and ethics.',
                    th: '✅ วิกฤตคลี่คลาย ด้วยการโชว์ข้อเท็จจริงและโปร่งใส ผู้ปกครองส่วนใหญ่ใจเย็นลง พวกเขาเห็นว่าคุณไม่ได้"ล้างสมอง"แต่คือการ"ให้การศึกษา"คุณยังทำงานต่อได้และได้สอนบทนั้น ผู้นำและจริยธรรมสูงมาก',
                    zh: '✅ 危机化解。通过展示事实并保持透明，大多数家长冷静了下来。他们看到你不是在“洗脑”而是在教育。你保住了工作，课程也保留了下来。高领导力，高职业道德。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '📄 The Balanced Approach:"I\'ll present two different historical perspectives on this event and let students debate the merits based on primary sources."',
                    th: '📄 วิธีสมดุล:"ฉันจะนำเสนอประวัติศาสตร์จากสองมุมมอง และให้นักเรียนโต้วาทีย์ถึงข้อดีข้อเสียโดยอ้างอิงจากแหล่งข้อมูลปฐมภูมิ"',
                    zh: '📄 平衡方法：“我将展示关于这一事件的两种不同的历史观点，让学生们根据一手资料对优缺点进行辩论。”'
                },
                consequence: {
                    en: '✅ Intellectual Mastery! Students learn critical thinking skills. Parents can\'t complain because you are presenting"all sides."This becomes the highest-rated lesson of the year. You are a pedagogical master.',
                    th: '✅ เจ้านายทางปัญญา! นักเรียนได้ฝึกทักษะการคิดเชิงวิพากษ์ ผู้ปกครองร้องเรียนไม่ได้เพราะคุณเสนอ"ทุกด้าน"นี่กลายเป็นบทเรียนที่ได้คะแนนประเมินสูงสุดแห่งปี คุณคือครูมือโปร',
                    zh: '✅ 智力飞跃！学生们学会了批判性思维技巧。家长们没法抱怨，因为你展示了“所有方面”。这成了年度评价最高的课程。你是一位教学大师。'
                },
                stats: { competence: 50, ethics: 45, leadership: 45, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Play it Safe:"It\'s not worth the fight. I\'ll skip the unit and move on to something safer like the Industrial Revolution."',
                    th: '🤐 ปลอดภัยไว้ก่อน:"มันไม่คุ้มที่จะสู้ ฉันจะข้ามบทนี้ไปเรียนเรื่องที่ปลอดภัยกว่าอย่างการปฏิวัติอุตสาหกรรมแทน"',
                    zh: '🤐 保险起见：“打这场仗不值得。我会跳过这一单元，转而讲一些更安全的东西，比如工业革命。”'
                },
                consequence: {
                    en: '💀 Moral Erosion. You keep your job, but you feel hollow. You lose the respect of your students who know you caved to pressure. You stop being a"teacher"and start being a"delivery person"for safe content.',
                    th: '💀 ความเสื่อมถอยทางศีลธรรม คุณยังทำงานต่อได้แต่รู้สึกว่างเปล่าในใจ คุณเสียความเคารพจากนักเรียนที่รู้ว่าคุณยอมจำนนต่อแรงกดดัน คุณเลิกเป็น"ครู"และเป็นแค่"คนส่งงาน"สำหรับเนื้อหาที่ปลอดภัย',
                    zh: '💀 道德侵蚀。你保住了工作，但感到内心空虚。你失去了那些知道你向压力屈服的学生们的尊重。你不再是一名“老师”，而成了一名传递安全内容的“快递员”。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_009',
        text: {
            en: '📸 Social Media Scandal: A student, Emma, posts a video of herself criticizing the school board on TikTok. It goes viral. The board wants her suspended for"bringing disrepute."Emma says she\'s just practicing"Freedom of Speech."',
            th: '📸 เรื่องอื้อฉาวโซเชียล: เอ็มม่า นักเรียนในห้อง โพสต์วิดีโอบน TikTok วิพากษ์วิจารณ์บอร์ดโรงเรียน และมันกลายเป็นไวรัล บอร์ดต้องการพักการเรียนเธอฐาน"ทำให้โรงเรียนเสียชื่อเสียง"แต่เอ็มม่าบอกว่าเธอแค่ใช้"เสรีภาพในการพูด"',
            zh: '📸 社交媒体丑闻：一名学生艾玛在TikTok上发布了一段批评学校董事会的视频。视频疯传。董事会想以“败坏名声”为由让她停学。艾玛说她只是在行使“言论自由”。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Defend the Student:"The school cannot punish a student for speech made off-campus. I will stand with Emma at the hearing."',
                    th: '⚖️ ปกป้องนักเรียน:"โรงเรียนไม่สามารถลงโทษเด็กเพราะคำพูดนอกรั้วโรงเรียนได้ ฉันจะยืนข้างเอ็มม่าในการพิจารณาคดี"',
                    zh: '⚖️ 保护学生：“学校不能因为学生在校外的言论而处罚她。我将在听证会上支持艾玛。”'
                },
                consequence: {
                    en: '✅ Integrity Win. Emma is not suspended. The ACLU gets involved and wins the case. Students view you as a hero. However, the administration blocks your promotion for"disloyalty."',
                    th: '✅ ชนะด้วยความซื่อสัตย์ เอ็มม่าไม่ถูกพักการเรียน องค์กรเพื่อสิทธิพลเมืองเข้ามาร่วมและชนะคดี นักเรียนมองคุณเป็นฮีโร่ แต่ฝ่ายบริหารบล็อกการเลื่อนตำแหน่งของคุณฐาน"ไม่จงรักภักดี"',
                    zh: '✅ 正直获胜。艾玛没有停学。美国公民自由联盟介入并赢得了官司。学生们视你为英雄。然而，校方以“不忠诚”为由阻止了你的晋升。'
                },
                stats: { competence: 35, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 The Civics Lesson:"Let\'s turn this into an assignment. Everyone research Supreme Court cases on student speech. Emma, lead the debate."',
                    th: '🔄 บทเรียนพลเมือง:"มาเปลี่ยนเรื่องนี้เป็นงานกัน ทุกคนไปหาข้อมูลคดีในศาลย่อยเกี่ยวกับคำพูดของนักเรียน เอ็มม่า เธอเป็นคนนำการโต้วาทีนะ"',
                    zh: '🔄 公民课程：“让我们把这件事变成一项任务。每个人都去研究最高法院关于学生言论的案例。艾玛，由你带领辩论。”'
                },
                consequence: {
                    en: '🌟 Pedagogical Brilliance! The board is mollified because you turned a scandal into education. Emma feels heard but learns the nuances of law. The class receives the highest scores in district history for Social Studies.',
                    th: '🌟 ความเป็นเลิศทางการสอน! บอร์ดหายโกรธเพราะคุณเปลี่ยนเรื่องแฉเป็นเรื่องเรียน เอ็มม่ารู้สึกว่ามีคนฟังแต่ก็ได้เรียนรู้ความละเอียดอ่อนของกฎหมาย ห้องนี้ได้คะแนนวิชาสังคมสูงสุดในประวัติศาสตร์เขต',
                    zh: '🌟 教学天才！董事会平息了怒火，因为你把一场丑闻变成了教育。艾玛感到被重视，但也学会了法律的细微差别。全班在学区的社会研究考试中获得了历史最高分。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Private Counsel:"Emma, honey, just delete the video. It\'s not worth your future. The board will win and you\'ll lose college entrance."',
                    th: '🤐 คำแนะนำส่วนตัว:"เอ็มม่า ลบวิดีโอเถอะลูก มันไม่คุ้มกับอนาคตหรอก บอร์ดชนะแน่แล้วเธอจะเสียประวัติเข้ามหาวิทยาลัยนะ"',
                    zh: '🤐 私下劝告：“艾玛，宝贝，删掉视频吧。这不值得搭上你的前途。董事会会赢，而你会失去大学入学机会。”'
                },
                consequence: {
                    en: '⚠️ Pragmatic but Hollow. Emma deletes the video but loses all respect for you. She feels the world is a place where power suppresses truth. You kept your career safe but failed to inspire courage.',
                    th: '⚠️ จริงจังแต่ว่างเปล่า เอ็มม่าลบวิดีโอแต่เลิกเคารพคุณอย่างสิ้นเชิง เธอรู้สึกว่าโลกนี้เป็นที่ที่อำนาจปิดปากความจริง คุณรักษาอาชีพไว้ได้แต่ล้มเหลวในการสร้างคนกล้า',
                    zh: '⚠️ 务实但空洞。艾玛删掉了视频，但完全失去了对你的尊重。她觉得世界是一个权力压制真相的地方。你保住了事业，但未能激发勇气。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 15 }
            },
            {
                id: 'D',
                text: {
                    en: '📜 Neutral Enforcement:"I don\'t get involved in school politics. I only care about the curriculum. Suspension is an administrative matter."',
                    th: '📜 บังคับตามระเบียบที่เป็นกลาง:"ฉันไม่ยุ่งเรื่องการเมืองในโรงเรียน ฉันสนใจแต่หลักสูตร การพักการเรียนเป็นเรื่องของฝ่ายบริหาร"',
                    zh: '📜 中立执行：“我不参与学校政治。我只关心课程。停学是行政事务。”'
                },
                consequence: {
                    en: '💀 Trust Broken. The students stop coming to you for advice. You are safe, but you are a"ghost"in the school—someone who does work but has no impact on lives. Minimal stats across the board.',
                    th: '💀 ทำลายความเชื่อมั่น นักเรียนเลิกมาปรึกษาคุณ คุณปลอดภัยดีแต่เหมือนเป็น"วิญญาณ"ในโรงเรียน—คนที่ทำงานไปวันๆ แต่ไม่มีผลต่อชีวิตใครเลย',
                    zh: '💀 信任破裂。学生们不再向你寻求建议。你是安全了，但你成了学校里的一个“幽灵”——一个只管干活但对他人生活没有任何影响的人。全线统计数据低迷。'
                },
                stats: { competence: 20, ethics: 20, leadership: 15, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_010',
        text: {
            en: '🔥 Teacher Burnout: It\'s November. You\'ve been working 70-hour weeks. Your health is failing, you\'re snapping at students, and you haven\'t slept in days. The grading pile is 400 deep. Do you prioritize yourself or the mission?',
            th: '🔥 ครูหมดไฟ: เข้าเดือนพฤศจิกายนแล้ว คุณทำงานสัปดาห์ละ 70 ชั่วโมง สุขภาพเริ่มพัง คุณเริ่มหงุดหงิดใส่นักเรียน และไม่ได้นอนมาหลายวัน งานที่ต้องตรวจสะสมอยู่ 400 ชิ้น คุณจะเลือกตัวเองหรือเลือกภารกิจ?',
            zh: '🔥 教师崩盘：现在是11月。你一周工作70小时。你的健康每况愈下，你对学生大发雷霆，而且已经好几天没睡觉了。待批改的作业堆了400份。你优先选择自己还是使命？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛌 Mental Health Day: Call in sick for 2 days. Complete zero work. Spend the time sleeping and walking in nature to reset.',
                    th: '🛌 วันสุขภาพจิต: ลาป่วย 2 วัน ไม่แตะงานเลย ใช้เวลานอนและเดินเล่นในป่าเพื่อรีเซ็ตตัวเอง',
                    zh: '🛌 心理健康日：请病假2天。完全不干活。把时间花在睡觉和在大自然中漫步来重置状态。'
                },
                consequence: {
                    en: '✅ Recovery Win! You return refreshed and apologize to students for your temper. They respect your vulnerability. You implement a"Self-Care"unit that students love. You survive the year.',
                    th: '✅ การฟื้นฟูที่ได้ผล! คุณกลับมาด้วยความสดชื่นและขอโทษเด็กๆ เรื่องอารมณ์เสีย พวกเขาเคารพในความกล้าเปิดเผยของคุณ คุณใส่บทเรียน"การดูแลตนเอง"ที่นักเรียนชอบมาก คุณผ่านปีนี้ไปได้',
                    zh: '✅ 康复获胜！你恢复了精神状态并为自己的坏脾气向学生道歉。他们尊重你的坦诚。你实施了一个深受学生喜爱的“自我关爱”单元。你挺过了这一年。'
                },
                stats: { competence: 35, ethics: 40, leadership: 45, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '📉 Simplify Grading: Put the 400 papers in a box. Give everyone a"Complete"grade based on effort and focus on the next lesson. Lower the workload immediately.',
                    th: '📉 ลดทอนงานตรวจ: เอางาน 400 ชิ้นใส่กล่อง ให้ทุกคน"ผ่าน"ตามความพยายามแล้วโฟกัสบทเรียนถัดไป ลดภาระงานตัวเองทันที',
                    zh: '📉 简化批改：把那400份作业放进箱子。根据表现给每个人一个“完成”等第，然后专注于下一课。立即降低工作量。'
                },
                consequence: {
                    en: '⚠️ Academic Slack. Students realize they aren\'t getting real feedback. They stop trying on assignments. Your burnout is fixed, but the learning quality drops for 3 months. You recover eventually.',
                    th: '⚠️ ความหย่อนยานทางวิชาการ นักเรียนรู้ว่าไม่ได้รับคำแนะนำจริงๆ พวกเขาเลิกตั้งใจทำงาน คุณหายหมดไฟแต่คุณภาพการเรียนตกไป 3 เดือน ในที่สุดคุณก็กู้คืนมาได้',
                    zh: '⚠️ 学术懈怠。学生们意识到他们没有得到真正的反馈。他们不再努力完成作业。你的崩盘缓解了，但在3个月内教学质量下降了。你最终恢复了过来。'
                },
                stats: { competence: 25, ethics: 30, leadership: 30, innovation: 35 }
            },
            {
                id: 'C',
                text: {
                    en: '👥 Student-Centered Grading: Spend class time having students peer-evaluate the 400 papers using a strict rubric you provide. They learn by grading.',
                    th: '👥 ตรวจโดยนักเรียน: ใช้เวลาในห้องให้นักเรียนตรวจงานกันเองทั้ง 400 ชิ้น โดยใช้เกณฑ์ที่ครูเตรียมมาให้ พวกเขาจะได้เรียนรู้จากการลองตรวจดู',
                    zh: '👥 学生主导批改：利用课堂时间让学生根据你提供的严格量规互评那400份作业。他们在批改中学到知识。'
                },
                consequence: {
                    en: '🌟 Innovation Streak! Students actually love it—they see the grading process and understand the criteria better. Your pile is gone in 2 days. You created a sustainable workflow. You are a management genius.',
                    th: '🌟 ประกายแห่งนวัตกรรม! นักเรียนชอบมาก—พวกเขาได้เห็นขั้นตอนการให้คะแนนและเข้าใจเกณฑ์มากขึ้น งานค้างหายเกลี้ยงใน 2 วัน คุณสร้างระบบงานที่ยั่งยืนได้สำเร็จ คุณคืออัจฉริยะด้านการจัดการ',
                    zh: '🌟 创新迸发！学生们实际上很喜欢——他们看到了批改过程，更好地理解了标准。你的积压量在2天内就消失了。你创造了一个可持续的工作流程。你是个管理天才。'
                },
                stats: { competence: 50, ethics: 35, leadership: 45, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '💪 Power Through:"Sleep is for the weak. I\'ll finish all 400 papers this weekend with caffeine. The mission comes first."',
                    th: '💪 สู้ตาย:"การนอนมีไว้สำหรับคนอ่อนแอ ฉันจะตรวจงาน 400 ชิ้นให้เสร็จสุดสัปดาห์นี้ด้วยกาแฟ ภารกิจต้องมาก่อน"',
                    zh: '💪 强撑下去：“睡觉是弱者的事。我这个周末要靠咖啡因批完所有400份作业。使命第一。”'
                },
                consequence: {
                    en: '💀 Total Collapse. You faint in class on Monday. You end up in the hospital for 2 weeks. A substitute teacher ruins your class culture. The 400 papers are lost in the chaos. You learn the hard way that a dead teacher can\'t teach.',
                    th: '💀 พังทลายโดยสิ้นเชิง คุณเป็นลมในห้องเรียนวันจันทร์ และต้องเข้าโรงพยาบาล 2 สัปดาห์ ครูสอนแทนทำวัฒนธรรมห้องเรียนพังเละ งาน 400 ชิ้นหายไปในความโกลาหล คุณได้เรียนรู้บทเรียนที่เจ็บปวดว่าครูที่ตายแล้วสอนใครไม่ได้',
                    zh: '💀 彻底崩盘。你在周一的课堂上晕倒了。你在医院住了2周。代课老师毁掉了你的班级文化。那400份作业在混乱中丢失了。你付出了惨重的代价才明白，垮掉的老师是教不了书的。'
                },
                stats: { competence: 10, ethics: 10, leadership: 10, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_011',
        text: {
            en: '📊 Standardized Test Pressure: The state exam is in 2 weeks. Your school\'s funding depends on the scores. Your Principal tells you to stop doing"creative projects"and just do drill-and-kill test prep for 10 days.',
            th: '📊 แรงกดดันสอบมาตรฐาน: การสอบระดับรัฐจะเริ่มใน 2 สัปดาห์ งบประมาณโรงเรียนขึ้นอยู่กับคะแนนสอบนี้ อาจารย์ใหญ่สั่งให้คุณหยุดทำ"โครงการสร้างสรรค์"และให้ติวข้อสอบแบบเน้นย้ำซ้ำทวนอย่างเดียวเป็นเวลา 10 วัน',
            zh: '📊 标准化考试压力：州统考还有2周。你学校的经费取决于分数。校长要求你停止进行“创意项目”，只做10天的机械式备考。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📋 Follow Orders:"Scores matter for the school\'s survival. I\'ll cancel the art project and focus only on the exam."',
                    th: '📋 ทำตามสั่ง:"คะแนนสำคัญต่อความอยู่รอดของโรงเรียน ฉันจะยกเลิกโครงการศิลปะและโฟกัสที่การสอบเท่านั้น"',
                    zh: '📋 服从命令：“分数关乎学校的生存。我将取消艺术项目，只专注于考试。”'
                },
                consequence: {
                    en: '📈 High Scores, Low Spirit. Your students score in the 90th percentile. The school is saved financially. But the students hate your subject now. No one signs up for your advanced class next year. You are a"corporate"success but a pedagogical failure.',
                    th: '📈 คะแนนสูงแต่เสียวิญญาณ นักเรียนทำคะแนนได้เปอร์เซ็นไทล์ที่ 90 โรงเรียนรอดพ้นวิกฤตการเงิน แต่นักเรียนเกลียดวิชาที่คุณสอนไปแล้ว ไม่มีใครลงทะเบียนเรียนวิชาขั้นสูงกับคุณในปีหน้า คุณประสบความสำเร็จในแง่"องค์กร"แต่ล้มเหลวในฐานะ"ครู"',
                    zh: '📈 高分低能。你的学生成绩在第90百分位。学校在财务上得救了。但学生们现在讨厌你的学科。明年没人报名参加你的高级班。你在“企业”层面是成功的，但在教学上是失败的。'
                },
                stats: { competence: 45, ethics: 30, leadership: 35, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '🎨 The Stealth Integration:"I\'ll gamify the test prep. We\'ll use the creative project as a way to solve exam-style problems. The students won\'t even realize they\'re prepping."',
                    th: '🎨 การแทรกซึมอย่างแนบเนียน:"ฉันจะเปลี่ยนการติวให้เป็นเกม เราจะใช้โครงการสร้างสรรค์มาเป็นวิธีแก้โจทย์แนวข้อสอบ เด็กๆ จะไม่รู้ตัวด้วยซ้ำว่ากำลังติวอยู่"',
                    zh: '🎨 隐形融合：“我会把备考游戏化。我们将利用创意项目来解决考试风格的问题。学生们甚至不会意识到他们在备考。”'
                },
                consequence: {
                    en: '🌟 Genius Teaching! Students are engaged AND they learn the test mechanics. Your scores are the highest in the school AND the students still love the subject. You are promoted to Head of Department. You proved creativity is the best prep.',
                    th: '🌟 การสอนระดับเซียน! นักเรียนมีส่วนร่วมและได้เรียนรู้กลไกข้อสอบ คะแนนของคุณสูงที่สุดในโรงเรียนและเด็กๆ ยังรักวิชานี้อยู่ คุณได้เลื่อนขั้นเป็นหัวหน้าแผนก คุณพิสูจน์แล้วว่าความคิดสร้างสรรค์คือการเตรียมตัวที่ดีที่สุด',
                    zh: '🌟 天才教学！学生们投入其中，同时也掌握了考试机制。你的分数是全校最高的，而且学生们依然喜爱这门学科。你被提拔为教研组长。你证明了创意是最好的备考方案。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '✊ Passive Resistance:"I\'ll keep doing 50% projects and 50% prep. Balance is best. I won\'t let the bureaucrats ruin my classroom."',
                    th: '✊ การดื้อเงียบ:"ฉันจะทำโครงการ 50% และติว 50% ความสมดุลคือสิ่งที่ดีที่สุด ฉันจะไม่ปล่อยให้พวกข้าราชการมาทำลายห้องเรียนของฉัน"',
                    zh: '✊ 消极抵制：“我会坚持50%的时间做项目，50%的时间备考。平衡是最好的。我不会让官僚毁了我的课堂。”'
                },
                consequence: {
                    en: '⚠️ Mediocre Results. The scores are"just okay,"and the creative projects feel rushed and unfinished. Both sides suffer. The Principal is disappointed. You learned that trying to please everyone often pleases no one.',
                    th: '⚠️ ผลลัพธ์งั้นๆ คะแนนออกมาแค่อยู่ในเกณฑ์ และโครงการสร้างสรรค์ก็ดูรีบทำไม่เสร็จ ทั้งสองฝั่งแย่พอกัน อาจารย์ใหญ่ผิดหวัง คุณได้เรียนรู้ว่าพยายามเอาใจทุกคน มักไม่ถูกใจใครเลย',
                    zh: '⚠️ 平庸的结果。分数“还可以”，而创意项目显得仓促且未完成。两边都受损。校长很失望。你明白，试图取悦所有人往往谁也取悦不了。'
                },
                stats: { competence: 30, ethics: 35, leadership: 30, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Advocate for Change: Organize a teacher meeting to lobby the board against over-testing. Use your data to show that creativity leads to better long-term outcomes.',
                    th: '📢 นักขับเคลื่อนการเปลี่ยนแปลง: จัดประชุมครูเพื่อล็อบบี้บอร์ดโรงเรียนให้ลดการสอบที่มากเกินไป ใช้ข้อมูลของคุณโชว์ว่าความคิดสร้างสรรค์ให้ผลลัพธ์ในระยะยาวที่ดีกว่า',
                    zh: '📢 倡导变革：组织教师会议，游说董事会反对过度测试。利用你的数据展示出创意能带来更好的长期效果。'
                },
                consequence: {
                    en: '✅ Policy Shift! The board is impressed by your data. They reduce mandatory drill time for the whole district. You lose some prep time this year, but you changed the future of the school. Huge leadership boost.',
                    th: '✅ การเปลี่ยนนโยบาย! บอร์ดประทับใจข้อมูลของคุณ พวกเขาลดเวลาติวบังคับลงทั้งเขต แม้ปีนี้คุณจะเสียเวลาติวไปบ้าง แต่คุณได้เปลี่ยนอนาคตของโรงเรียน ผู้นำพุ่งกระฉูด',
                    zh: '✅ 政策转变！董事会通过你的数据深受影响。他们减少了全学区强制训练的时间。你今年损失了一些备考时间，但你改变了学校的未来。领导力巨大提升。'
                },
                stats: { competence: 40, ethics: 45, leadership: 50, innovation: 45 }
            }
        ]
    },

    {
        id: 'te_012',
        text: {
            en: '🤝 The Bully Redirection: A student, Ryan, is a classic bully. He\'s physically intimidating and makes fun of others. But you notice he has a natural protective instinct toward his younger sister. How do you channel this?',
            th: '🤝 การเปลี่ยนทิศเด็กเกเร: ไรอัน เป็นเด็กเกเรตัวยง เขาชอบข่มขู่เพื่อนและล้อเลียนคนอื่น แต่คุณสังเกตเห็นว่าเขามีสัญชาตญาณปกป้องน้องสาวตัวเองอย่างมาก คุณจะดึงจุดนี้มาใช้ลำดับอย่างไร?',
            zh: '🤝 恶霸转型：名学生瑞安是个典型的恶霸。他身体强壮，爱取笑他人。但你注意到他对妹妹有一种天然的保护本能。你如何引导这一点？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👮 The Security Guard:"Ryan, you like protecting people. I\'m making you the Official Class Safety Officer. Your job is to make sure NO ONE gets picked on in my room."',
                    th: '👮 ผู้พิทักษ์ความปลอดภัย:"ไรอัน เธอชอบปกป้องคนอื่น งั้นครูจะแต่งตั้งเธอเป็นเจ้าหน้าที่ความปลอดภัยประจำห้อง งานของเธอคือทำให้แน่ใจว่าไม่มีใครถูกรังแกในห้องนี้"',
                    zh: '👮 安全卫士：“瑞安，你喜欢保护别人。我任命你为正式的班级安全官员。你的职责是确保我教室内没有人被欺负。”'
                },
                consequence: {
                    en: '✅ Identity Shift! Ryan takes the job seriously. He stops bullying and starts intervening when others are mean. The class feels safe. He finds a sense of"noble"purpose. You transformed a villain into a hero.',
                    th: '✅ เปลี่ยนตัวตน! ไรอันรับงานนี้อย่างจริงจัง เขาเลิกรังแกเพื่อนและเริ่มเข้าไปห้ามเวลาคนอื่นนิสัยไม่ดี ห้องเรียนรู้สึกปลอดภัย เขาพบเป้าหมายที่"สูงส่ง"คุณเปลี่ยนตัวร้ายให้เป็นฮีโร่ได้สำเร็จ',
                    zh: '✅ 身份转变！瑞安认真对待这份工作。他停止了欺凌，并开始在他人刻薄时介入。班级感到安全。他找到了一种“高尚”的目的感。你把一个反派变成了英雄。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '📋 Strict Punishment:"Zero tolerance, Ryan. One more comment and you get a 3-day suspension. I don\'t care why you do it, just stop."',
                    th: '📋 บทลงโทษเด็ดขาด:"ห้ามทำเด็ดขาดนะไรอัน ถ้ามีอีกครั้งเดียวคือพักการเรียน 3 วัน ครูไม่สนว่าทำไมเธอถึงทำ แค่หยุดซะ"',
                    zh: '📋 严厉处罚：“零容忍，瑞安。再说一句就停学3天。我不管你为什么要这么做，给我闭嘴。”'
                },
                consequence: {
                    en: '⚠️ Suppressed Anger. Ryan stays quiet in class but bullies kids in the hallway where you can\'t see. He views you as an enemy. The problem isn\'t solved, it\'s just hidden.',
                    th: '⚠️ ความโกรธที่ถูกกดทับ ไรอันเงียบลงในห้องแต่ไปแกล้งเด็กที่โถงทางเดินที่คุณมองไม่เห็นแทน เขาเห็นคุณเป็นศัตรู ปัญหาไม่ได้ถูกแก้ แค่ถูกซ่อนไว้เท่านั้น',
                    zh: '⚠️ 压抑的愤怒。瑞安在课上保持安静，但在你看不见的走廊里欺负孩子。他视你为敌人。问题没有解决，只是被藏起来了。'
                },
                stats: { competence: 30, ethics: 35, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ The Empathy Exercise: Have Ryan work in a group where he has to protect a vulnerable student as part of a simulation or role-play.',
                    th: '🗣️ ฝึกความเห็นใจ: ให้ไรอันทำงานกลุ่มโดยมีโจทย์ให้เขาต้องปกป้องเพื่อนที่อ่อนแอในสถานการณ์จำลองหรือการแสดงบทบาทสมมติ',
                    zh: '🗣️ 共情练习：让瑞安参加小组活动，作为模拟或角色扮演的一部分，他必须保护一名弱势学生。'
                },
                consequence: {
                    en: '✅ Slow Progress. Ryan struggles at first but slowly starts to connect with others. It takes a whole year, but by graduation, he is a changed person. You chose the long game and won.',
                    th: '✅ ความก้าวหน้าที่เชื่องช้า ตอนแรกไรอันลำบากใจ แต่ค่อยๆ เริ่มเชื่อมโยงกับคนอื่นได้ดีขึ้น ใช้เวลาทั้งปีแต่เมื่อจบการศึกษาเขาเป็นคนใหม่ไปเลย คุณเลือกเดินเกมยาวและคุณชนะ',
                    zh: '✅ 缓慢的进展。瑞安起初很挣扎，但慢慢开始与他人建立联系。这花了一门整年的时间，但到毕业时，他脱胎换骨了。你选择了放长线，并赢得了胜利。'
                },
                stats: { competence: 40, ethics: 45, leadership: 40, innovation: 35 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Parental Intervention: Call his parents and mention his protective nature at home. Suggest they help him find positive outlets like sports.',
                    th: '🤝 ให้พ่อแม่ช่วย: โทรหาพ่อแม่เขาและเล่าเรื่องที่เขามีนิสัยชอบปกป้องคนที่บ้าน แนะนำให้พระแม่ช่วยหาทางระบายออกทางอื่นที่ดีกว่าอย่างเช่นการเล่นกีฬา',
                    zh: '🤝 家长干预：给他的父母打电话，提到他在家里的保护天性。建议他们帮他寻找积极的出口，比如运动。'
                },
                consequence: {
                    en: '✅ Holistic Win. Ryan joins the wrestling team. He learns discipline and finds a place where his physical strength is an asset, not a weapon. His behavior improves across all classes.',
                    th: '✅ ชนะแบบองค์รวม ไรอันเข้าทีมมวยปล้ำ เขาเรียนรู้วินัยและพบพื้นที่ที่ความแรงของเขาเป็นข้อดีไม่ใช่เป็นอาวุธ นิสัยเขาดีขึ้นในทุกวิชาเรียน',
                    zh: '✅ 全面获胜。瑞安加入了摔跤队。他学会了纪律，并找到了一个让他的体力成为资产而非武器的地方。他在所有课程中的表现都得到了改善。'
                },
                stats: { competence: 35, ethics: 40, leadership: 45, innovation: 25 }
            }
        ]
    },

    {
        id: 'te_013',
        text: {
            en: '🍕 Hidden Hunger: You notice a student, Leo, is always falling asleep in class and never brings lunch. You suspect his family is struggling with food insecurity. He refuses to take"free lunch"because he\'s embarrassed.',
            th: '🍕 ความหิวที่ซ่อนอยู่: คุณสังเกตว่า ลีโอ มักจะหลับในห้องและไม่เคยเอาข้าวกลางวันมาเลย คุณสงสัยว่าครอบครัวเขากำลังลำบาทเรื่องอาหาร แต่เขาปฏิเสธที่จะรับ"ข้าวกลางวันฟรี"เพราะเขารู้สึกอาย',
            zh: '🍕 隐藏的饥饿：你注意到一名学生里奥总是在课上睡觉，而且从不带午饭。你怀疑他的家庭正面临食品短缺问题。但由于感到尴尬，他拒绝接受“免费午餐”。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🍎 The"Extra Snack"Trick:"Leo, I bought too many apples. Can you help me finish them so they don\'t rot? It would be a big favor."',
                    th: '🍎 ทริค"ขนมส่วนเกิน":"ลีโอ ครูซื้อแอปเปิลมาเยอะเกินไป ช่วยครูทีเดี๋ยวจะเน่าหมด ถือว่าเป็นพระคุณอย่างสูง"',
                    zh: '🍎 “多余零食”小花招：“里奥，我苹果买多了。你能帮我吃点吗，免得烂掉？那可帮了我大忙了。”'
                },
                consequence: {
                    en: '✅ Dignity Preserved. Leo eats the apples. His focus improves. You start a"Community Snack Drawer"for everyone, making it normal to take food. You provided a safety net without the stigma.',
                    th: '✅ รักษาศักดิ์ศรี ลีโอกินแอปเปิล และสมาธิเขาดีขึ้น คุณเริ่มทำ"ลิ้นชักขนมชุมชน"ให้ทุกคน ทำให้การหยิบอาหารไปกินเป็นเรื่องปกติ คุณสร้างตาข่ายรองรับโดยไม่แปะป้ายตราหน้าใคร',
                    zh: '✅ 尊严得以保留。里奥吃了苹果。他的注意力提高了。你为所有人开设了一个“社区零食抽屉”，让拿取食物变得很平常。你提供了一个没有耻辱感的安全网。'
                },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '📋 Follow Protocol: Report the situation to the school social worker and counselor immediately."Professional boundaries are important."',
                    th: '📋 ทำตามขั้นตอน: รายงานสถานการณ์ให้เจ้าหน้าที่สังคมสงเคราะห์โรงเรียนและที่ปรึกษาทราบทันที"ขอบเขตความเป็นมืออาชีพคือเรื่องสำคัญ"',
                    zh: '📋 遵循规程：立即向学校社会工作者和辅导员报告情况。“职业边界很重要。”'
                },
                consequence: {
                    en: '⚠️ Bureaucratic Delay. The social worker is overwhelmed. It takes 3 weeks to contact the family. Leo stays hungry and fails his mid-terms. You were professional, but the student suffered.',
                    th: '⚠️ ความล่าช้าทางระบบ เจ้าหน้าที่งานล้นมือ กว่าจะติดต่อไปที่ครอบครัวได้ใช้เวลา 3 สัปดาห์ ลีอยังหิวและสอบกลางภาคตก คุณทำแบบมืออาชีพแต่เด็กก็ต้องลำบาก',
                    zh: '⚠️ 官僚延误。社会工作者忙得不可开交。花了3周才联系上家长。里奥一直挨饿，期中考试不及格。你是很职业，但学生受苦了。'
                },
                stats: { competence: 35, ethics: 35, leadership: 30, innovation: 15 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Personal Support: Secretly buy him a $50 grocery gift card and slip it into his backpack with a note:"From a friend. Keep going."',
                    th: '🤝 ช่วยส่วนตัว: แอบซื้อบัตรของขวัญซูเปอร์มาร์เก็ต $50 ใส่กระเป๋าเป้เขาพร้อมโน้ต:"จากเพื่อนคนหนึ่ง สู้ต่อไปนะ"',
                    zh: '🤝 个人资助：偷偷买一张50美元的超市礼品卡塞进他的背包，并附上纸条：“朋友送的，加油。”'
                },
                consequence: {
                    en: '⚠️ Ethical Risk. Leo is grateful, but he now feels he owes you. If discovery by administration, you could be reprimanded for giving personal gifts to students. You helped the individual but risked your career.',
                    th: '⚠️ ความเสี่ยงทางจริยธรรม ลีโอซาบซึ้งแต่เขารู้สึกเหมือนเป็นหนี้บุญคุณคุณ ถ้าฝ่ายบริหารรู้เข้า คุณอาจถูกตำหนิฐานให้ของขวัญส่วนตัวแก่นักเรียน คุณช่วยเด็กได้แต่เอาอาชีพตัวเองไปเสี่ยง',
                    zh: '⚠️ 伦理性风险。里奥心存感激，但他现在觉得欠了你。如果被管理层发现，你可能会因为私自给学生送礼而受到训诫。你帮助了个人，但牺牲了事业风险。'
                },
                stats: { competence: 30, ethics: 40, leadership: 25, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🏢 Systemic Fix: Start a"Free Breakfast Club"at the school for ALL students, funded by a local church or charity. No questions asked.',
                    th: '🏢 แก้ที่ระบบ: เริ่ม"ชมรมอาหารเช้าฟรี"ในโรงเรียนให้"ทุกคน"โดยขอทุนจากโบสถ์หรือองค์กรการกุศลท้องถิ่น ไม่ต้องมีการซักถามใดๆ',
                    zh: '🏢 系统性解决：在学校为“所有”学生创办一个“免费早餐俱乐部”，由当地教堂或慈善机构资助。不问任何问题。'
                },
                consequence: {
                    en: '🌟 Heroic Impact! 50 students who were secretly hungry now have food. Attendance improves by 15%. You are nominated for a community service award. You solved the problem for everyone.',
                    th: '🌟 ผลกระทบระดับฮีโร่! นักเรียน 50 คนที่แอบหิวตอนนี้มีอาหารกิน อัตราการเข้าเรียนเพิ่มขึ้น 15% คุณถูกเสนอชื่อรางวัลบริการชุมชน คุณแก้ปัญหาให้ทุกคนได้จริงๆ',
                    zh: '🌟 英雄般的影响！50名暗中挨饿的学生现在有了食物。出勤率提高了15%。你被提名社区服务奖。你为所有人解决了问题。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 50 }
            }
        ]
    },

    {
        id: 'te_014',
        text: {
            en: '🩹 The Playground Injury: During recess, a student falls and has a deep cut. They are crying and bleeding. The school nurse is at lunch. Other students are panicking. What is your immediate action?',
            th: '🩹 อุบัติเหตุในสนามเด็กเล่น: ระหว่างพักเที่ยง นักเรียนล้มและมีแผลลึก เขาร้องไห้และเลือดออกมาก ครูพยาบาลไปพักเที่ยงพอดี นักเรียนคนอื่นเริ่มแตกตื่น คุณจะทำอย่างไรทันที?',
            zh: '🩹 操场受伤：课间休息时，一名学生摔倒并有一处深伤口。他们在哭，且在流血。校医正在吃午饭。其他学生都很恐慌。你的职觉反应是什么？初衷是什么？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚑 Emergency Call: Call emergency services immediately. "Safety is non-negotiable, let the professionals handle this."',
                    th: '🚑 เรียกกู้ชีพ: โทรเรียกหน่วยฉุกเฉินทันที "ความปลอดภัยต่อรองไม่ได้ ให้มืออาชีพจัดการเถอะ"',
                    zh: '🚑 紧急呼叫：立即拨打紧急服务电话。“安全是不容谈判的，让专业人士来处理。”'
                },
                consequence: {
                    en: '⚖️ High-Cost Safety. The ambulance arrives quickly. The student is saved, but the school faces high costs and parent panic. You are praised for your decisiveness but questioned on "overreacting."',
                    th: '⚖️ ความปลอดภัยราคาสูง รถพยาบาลมาไว เด็กปลอดภัย แต่โรงเรียนต้องแบกรับค่าใช้จ่ายและพ่อแม่ตื่นตระหนก คุณได้รับคำชมเรื่องความเด็ดเดี่ยว แต่ถูกตั้งคำถามว่า "ทำเกินกว่าเหตุ" หรือไม่',
                    zh: '⚖️ 高成本安全。救护车很快就到了。学生获救了，但学校面临高昂费用和家长恐慌。你因果敢而受到称赞，但因“反应过度”而受到质疑。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🩹 First Aid Hero: Use the first aid kit to clean and bandage the wound yourself while staying calm.',
                    th: '🩹 ฮีโร่ปฐมพยาบาล: ใช้ชุดปฐมพยาบาลล้างแผลและพันแผลด้วยตัวเอง พร้อมกับรักษาสติให้มั่น',
                    zh: '🩹 急救英雄：冷静地使用急救箱亲自清洗并包扎伤口。'
                },
                consequence: {
                    en: '✅ Practical Survival. You stop the bleeding and calm the class. The nurse arrives later and confirms you did a great job. Students see you as a steady leader in crisis.',
                    th: '✅ การรอดชีวิตที่ใช้งานได้จริง คุณหยุดเลือดได้และทำให้ชั้นเรียนสงบลง ครูพยาบาลมาถึงภายหลังและยืนยันว่าคุณทำได้ดีมาก นักเรียนมองว่าคุณเป็นผู้นำที่มั่นคงในยามวิกฤต',
                    zh: '✅ 实际生存。你止住了血并平息了全班的恐慌。护士稍后赶到，确认你做得很好。学生们视你为危机中的稳定领导者。'
                },
                stats: { competence: 50, ethics: 35, leadership: 45, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '📣 Delegate & Search: Assign students to find the nurse and principal while you stay with the student.',
                    th: '📣 มอบหมายงาน: สั่งให้นักเรียนไปตามครูพยาบาลและอาจารย์ใหญ่ ในขณะที่คุณอยู่เฝ้านักเรียนที่เจ็บ',
                    zh: '📣 委派与搜寻：指派学生寻找护士和校长，而你留在学生身边。'
                },
                consequence: {
                    en: '⚠️ Slow Response. By the time the nurse is found, the student has lost a lot of blood. The situation was managed, but your lack of direct action caused delays. You gain leadership points for delegation but lose competence.',
                    th: '⚠️ การตอบสนองที่ล่าช้า กว่าจะเจอครูพยาบาล นักเรียนก็เสียเลือดไปมาก สถานการณ์คลี่คลายลงได้ แต่การที่คุณไม่ลงมือเองทำให้เกิดความล่าช้า คุณได้คะแนนภาวะผู้นำจากการแบ่งงานแต่เสียคะแนนความสามารถ',
                    zh: '⚠️ 反应迟缓。等到找到护士时，学生已经失血很多。虽然情况得到了控制，但你缺乏直接行动导致了延误。你因委派工作而获得领导力积分，但失去了胜任力积分。'
                },
                stats: { competence: 30, ethics: 40, leadership: 45, innovation: 15 }
            },
            {
                id: 'D',
                text: {
                    en: '👀 Silent Observer: Stay with the student but tell everyone to wait for the nurse. "I am not trained for this."',
                    th: '👀 ผู้เฝ้ามองที่เงียบขรึม: อยู่กับนักเรียนแต่บอกให้ทุกคนรอครูพยาบาล "ฉันไม่ได้ถูกฝึกมาเพื่อเรื่องนี้"',
                    zh: '👀 沉默观察者：留在学生身边，但告诉所有人等待护士。“我没有受过这方面的培训。”'
                },
                consequence: {
                    en: '💀 Panic Spike. The student becomes more terrified. The lack of action causes chaos among the other students. You avoid legal trouble, but you lose the respect of your class.',
                    th: '💀 ความตกใจพุ่งสูง นักเรียนที่เจ็บยิ่งหวาดกลัว การเฉยเมยทำให้เกิดความวุ่นวายในหมู่นักเรียนคนอื่น คุณเลี่ยงปัญหาทางกฎหมายได้ แต่คุณเสียความเคารพจากคนทั้งชั้น',
                    zh: '💀 恐慌加剧。学生变得更加恐惧。由于没有采取行动，其他学生也陷入了混乱。你避免了法律麻烦，但失去了全班的尊重。'
                },
                stats: { competence: 20, ethics: 30, leadership: 15, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_015',
        text: {
            en: '🤝 The Group Project Crisis: You assign a major group project. One group has a "slacker" who isn\'t contributing, and the other members are furious. They demand you remove the student or give them a separate grade.',
            th: '🤝 วิกฤตงานกลุ่ม: คุณสั่งงานกลุ่มชิ้นใหญ่ กลุ่มหนึ่งมี "คนอู้งาน" ที่ไม่ช่วยทำอะไรเลย จนคนอื่นในกลุ่มโกรธมาก พวกเขาเรียกร้องให้คุณคัดนักเรียนคนนั้นออกหรือขอแยกเกรด',
            zh: '🤝 小组项目危机：你布置了一个重大小组项目。其中一个小组有个“偷懒的人”不参与工作，其他成员非常愤怒。他们要求你将该学生踢出小组，或者给他们分别评分。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Firm Fairness: "Grades are individual. If you can prove they didn\'t contribute, they fail. Document everything."',
                    th: '⚖️ ความยุติธรรมที่เด็ดขาด: "เกรดเป็นรายบุคคล ถ้าพวกเธอพิสูจน์ได้ว่าเขาไม่ช่วย เขาจะสอบตก จงจดบันทึกทุกอย่างไว้"',
                    zh: '⚖️ 坚定的公平：“评分是针对个人的。如果你能证明他们没贡献，他们就挂科。记录每一件事。”'
                },
                consequence: {
                    en: '✅ Accountability. The slacker gets a reality check and fails. The hardworking students feel heard. However, you spend hours reviewing "evidence." You are seen as fair but bureaucratic.',
                    th: '✅ ความรับผิดชอบ คนอู้งานถูกดัดนิสัยและสอบตก นักเรียนที่ขยันรู้สึกได้รับการคุ้มครอง แต่คุณต้องเสียเวลาหลายชั่วโมงเพื่อตรวจ "หลักฐาน" คุณถูกมองว่ายุติธรรมแต่ระเบียบเยอะ',
                    zh: '✅ 问责制。偷懒的人得到了教训且挂科了。勤奋的学生感到被重视。然而，你花了几个小时来审查“证据”。你被看作是公平但官僚的人。'
                },
                stats: { competence: 40, ethics: 45, leadership: 40, innovation: 25 }
            },
            {
                id: 'B',
                text: {
                    en: '🗣️ Mediation: Schedule a mandatory meeting with the group to help them communicate and redistribute tasks.',
                    th: '🗣️ การไกล่เกลี่ย: นัดประชุมกลุ่มแบบบังคับเพื่อช่วยให้พวกเขาสื่อสารและกระจายงานกันใหม่',
                    zh: '🗣️ 调解：安排一次强制性的小组会议，帮助他们沟通并重新分配任务。'
                },
                consequence: {
                    en: '🌟 Soft Skills Win! The students learn conflict resolution. The group eventually works better together. You are praised for building teamwork skills, not just testing knowledge.',
                    th: '🌟 ชนะด้วยทักษะทางสังคม! นักเรียนได้เรียนรู้การแก้ปัญหาความขัดแย้ง ในที่สุดกลุ่มก็ทำงานด้วยกันได้ดีขึ้น คุณได้รับคำชมเรื่องการสร้างทักษะการทำงานเป็นทีม ไม่ใช่แค่ทดสอบความรู้อย่างเดียว',
                    zh: '🌟 软技能获胜！学生们学会了冲突解决。该小组最终合作得更好了。你因培养团队协作能力而不仅仅是测试知识而受到称赞。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 35 }
            },
            {
                id: 'C',
                text: {
                    en: '📜 Strict "One Grade" Policy: "In the real world, you win or lose as a team. Work it out amongst yourselves."',
                    th: '📜 นโยบาย "เกรดเดียวทั้งกลุ่ม": "ในโลกความจริง เราชนะหรือแพ้ไปด้วยกันเป็นทีม จงไปจัดการกันเอง"',
                    zh: '📜 严格的“统一评分”政策：“在现实世界中，团队同生共死。你们自己解决。”'
                },
                consequence: {
                    en: '⚠️ Bitter Resentment. The high-achievers do all the work and the slacker gets an A. Your reputation for "fairness" takes a hit, but the slacker passes.',
                    th: '⚠️ ความขุ่นเคืองที่ฝังลึก กลุ่มเด็กเก่งต้องแบกงานทั้งหมดและเด็กอู้ก็ได้ A ด้วย ชื่อเสียงเรื่อง "ความยุติธรรม" ของคุณพังทลาย แต่เด็กอู้รอดไปได้',
                    zh: '⚠️ 强烈的怨恨。优秀的学生做了所有的工作，而偷懒的人得了 A。你“公平”的名声受损，但偷懒的人通过了。'
                },
                stats: { competence: 30, ethics: 20, leadership: 30, innovation: 15 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 Pivot to Individual Projects: Cancel the group aspect and make everyone do their own project.',
                    th: '🔄 เปลี่ยนเป็นงานเดี่ยว: ยกเลิกส่วนงานกลุ่มแล้วให้ทุกคนทำงานของตัวเองแทน',
                    zh: '🔄 转向个人项目：取消小组形式，让每个人做自己的项目。'
                },
                consequence: {
                    en: '⚠️ Chaos. Half the work is already done in groups. The students are frustrated by the sudden change. You avoided the conflict but caused a logistical nightmare.',
                    th: '⚠️ ความโกลาหล งานครึ่งหนึ่งถูกทำเป็นกลุ่มไปแล้ว นักเรียนหงุดหงิดกับการเปลี่ยนกะทันหัน คุณเลี่ยงความขัดแย้งได้แต่สร้างฝันร้ายด้านการจัดการซะเอง',
                    zh: '⚠️ 混乱。一半的工作已经以小组形式完成了。学生们对突然的改变感到沮丧。你避免了冲突，但造成了后勤方面的噩梦。'
                },
                stats: { competence: 25, ethics: 35, leadership: 20, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_016',
        text: {
            en: '🎁 The Subtle Bribe? A student, Eric, gives you a $100 gift card during finals week. He says it\'s just "gratitude," but his grade is currently a 79.5% (C+).',
            th: '🎁 สินบนนิ่มๆ หรือเปล่า? เอริค นักเรียนในห้อง ให้บัตรของขวัญมูลค่า $100 กับคุณในช่วงสัปดาห์สอบไฟนอล เขาบอกว่านั่นเป็นแค่ "สินน้ำใจ" แต่ปัจจุบันเกรดของเขาอยู่ที่ 79.5% (C+)',
            zh: '🎁 隐形贿赂：一名学生埃里克在期末周给了你一张 100 美元的礼品卡。他说这只是“感激之情”，但他目前的成绩是 79.5% (C+)。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Ethical Transparency: "Thank you, Eric, but I cannot accept gifts over $20. Please give this back to your parents."',
                    th: '🚫 ความโปร่งใสทางจริยธรรม: "ขอบใจนะเอริค แต่ครูรับของขวัญที่มีมูลค่าเกิน $20 ไม่ได้หรอก เอาไปคืนคุณพ่อคุณแม่เถอะนะ"',
                    zh: '🚫 职业道德透明： “谢谢你，埃里克，但我不能接受超过 20 美元的礼物。请把这个还给你的父母。”'
                },
                consequence: {
                    en: '🛡️ Integrity Preserved. Eric is embarrassed but understands. You report the incident to the office to be safe. You are known as "incorruptible." Eric works hard and gets his B- legitimately.',
                    th: '🛡️ รักษาความซื่อตรง เอริครู้สึกอายแต่ก็เข้าใจ คุณรายงานเรื่องนี้ให้ฝ่ายปกครองทราบเพื่อความปลอดภัย คุณขึ้นชื่อว่าเป็นครูที่ "ซื้อไม่ได้" เอริคตั้งใจเรียนจนได้ B- มาด้วยตัวเองอย่างสง่างาม',
                    zh: '🛡️ 保持正直。埃里克虽然尴尬但理解了。为了稳妥起见，你向办公室报告了此事。你被公认为“清廉”。埃里克努力学习，合法地得到了 B-。'
                },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '☕ The "Common Sense" Way: Accept it but don\'t change the grade. Use the money for classroom supplies.',
                    th: '☕ ทางสายกลาง: รับไว้แต่ไม่เปลี่ยนเกรด แล้วเอาเงินนั้นไปซื้ออุปกรณ์การเรียนให้ห้องเรียนแทน',
                    zh: '☕ “常识”方法：接受它但不改分。把这笔钱用于购买课堂用品。'
                },
                consequence: {
                    en: '⚠️ Ethical Gray Area. Eric is disappointed when his grade doesn\'t change. Word spreads that you accept gifts. Even though you used it for the class, the perception of bias remains.',
                    th: '⚠️ พื้นที่สีเทาทางจริยธรรม เอริคผิดหวังที่เกรดไม่เปลี่ยน ความลับรั่วไหลว่าคุณรับของขวัญ แม้คุณจะเอาไปใช้เพื่อห้องเรียน แต่ภาพลักษณ์เรื่องการลำเอียงก็ยังคงอยู่',
                    zh: '⚠️ 道德灰色地带。当成绩没变时，埃里克很失望。你收礼的消息传开了。尽管你把它用于班级，但偏见的印象依然存在。'
                },
                stats: { competence: 35, ethics: 30, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '📈 The "Nudge": Accept the gift and round his grade up to an 80% (B-). "He tried hard anyway."',
                    th: '📈 การแถมคะแนน: รับของขวัญแล้วปัดเกรดให้เขาเป็น 80% (B-) "ยังไงเขาก็พยายามมากอยู่แล้ว"',
                    zh: '📈 “推动”：接受礼物并将他的成绩四舍五入到 80% (B-)。“无论如何他都很努力。”'
                },
                consequence: {
                    en: '💀 Moral Erosion. You feel dirty. Other students notice Eric\'s grade bump without a test and start whispering about favoritism. You lose your moral authority.',
                    th: '💀 ความเสื่อมถอยทางศีลธรรม คุณรู้สึกไม่ดี นักเรียนคนอื่นสังเกตเห็นเกรดเอริคที่พุ่งขึ้นโดยไม่ได้สอบ และเริ่มซุบซิบเรื่องการลำเอียง คุณเสียอำนาจทางศีลธรรมไปแล้ว',
                    zh: '💀 道德侵蚀。你感到这种做法很不光彩。其他学生注意到埃里克没考试成绩就上升了，开始私下议论你的偏见。你失去了道德权威。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ Public Refusal: Use the moment to teach the class about professional ethics and why teachers can\'t accept bribes.',
                    th: '🗣️ ปฏิเสธกลางห้อง: ใช้โอกาสนี้สอนทั้งชั้นเรื่องจริยธรรมวิชาชีพ และทำไมครูถึงรับสินบนไม่ได้',
                    zh: '🗣️ 公开拒绝：利用这个时刻教导全班职业道德，以及为什么老师不能接受贿赂。'
                },
                consequence: {
                    en: '⚠️ Social Disaster. Eric is publicly humiliated and cries. His parents file a complaint for "bullying." You held your ground but destroyed a relationship. High ethics, low empathy.',
                    th: '⚠️ หายนะทางสังคม เอริคอับอายขายหน้าคนทั้งห้องและร้องไห้ พ่อแม่เขาทำเรื่องร้องเรียนฐาน "บูลลี่ลูก" คุณยืนหยัดในหลักการแต่ทำลายความสัมพันธ์พังยับ จริยธรรมสูงแต่น้ำใจต่ำ',
                    zh: '⚠️ 社交灾难。埃里克在公开场合受辱并大哭。他的父母以“欺凌”为由提出投诉。你坚守了立场，但毁掉了一段关系。高道德，低同理心。'
                },
                stats: { competence: 30, ethics: 40, leadership: 35, innovation: 15 }
            }
        ]
    },

    {
        id: 'te_017',
        text: {
            en: '🪑 The Classroom Layout Dispute: Students want to replace standard desks with bean bags and standing desks. It fosters creativity but the Administration says it\'s "unprofessional" and a safety hazard.',
            th: '🪑 ข้อพิพาทเรื่องการจัดห้อง: นักเรียนอยากเปลี่ยนโต๊ะเรียนมาตรฐานเป็นบีนแบ็กและโต๊ะยืน เพราะมันช่วยส่งเสริมความคิดสร้างสรรค์ แต่ฝ่ายบริหารบอกว่ามัน "ดูไม่เป็นมืออาชีพ" และอาจเกิดอันตรายได้',
            zh: '🪑 教室布局纠纷：学生们想用豆袋沙发和站立式办公桌取代标准课桌。这能促进创造力，但行政部门表示这“不专业”且存在安全隐患。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎨 Creative compromise: Create a "Relaxation Zone" with two bean bags and alternate students, keeping the rest of the desks.',
                    th: '🎨 ประนีประนอมอย่างสร้างสรรค์: ทำเสื่อนั่ง "โซนผ่อนคลาย" โดยใช้บีนแบ็กสองตัวแล้วให้สลับกันนั่ง ส่วนที่เหลือยังใช้โต๊ะปกติ',
                    zh: '🎨 创意妥协：创建一个带有两个豆袋沙发的“放松区”，分配学生轮流使用，保留其余课桌。'
                },
                consequence: {
                    en: '✅ Balanced Growth. Both side are mollified. Students enjoy the zone and behavior improves. The Administration accepts it as a "pilot program."',
                    th: '✅ การเติบโตที่สมดุล ทั้งสองฝ่ายพอใจ นักเรียนสนุกกับโซนใหม่และนิสัยดีขึ้น ฝ่ายบริหารยอมรับว่าเป็น "โครงการนำร่อง"',
                    zh: '✅ 平衡发展。双方都平息了。学生们喜欢这个区域，表现也有所改善。行政部门将其视为“试点计划”予以接受。'
                },
                stats: { competence: 45, ethics: 35, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '📋 Follow the Rules: "Desks stay. We are here to work, not lounge around. Focus on the lesson."',
                    th: '📋 ทำตามกฎ: "ต้องใช้โต๊ะเดิม เรามาที่นี่เพื่อทำงาน ไม่ใช่มานั่งเล่น โฟกัสเรื่องเรียนไป"',
                    zh: '📋 遵循规则：“保留课桌。我们到这里是来学习的，不是来闲逛的。专注于课堂内容。”'
                },
                consequence: {
                    en: '⚠️ Standard Rigidity. The room remains functional but students feel unheard. Innovation drops, but the Admin is happy with your discipline.',
                    th: '⚠️ ความเถรตรงที่ตึงเกินไป ห้องยังใช้งานได้ดีแต่นักเรียนรู้สึกว่าไม่มีใครฟัง นวัตกรรมหดหาย แต่ฝ่ายบริหารพอใจในรเบียบวินัยของคุณ',
                    zh: '⚠️ 标准呆板。教室保持了其功能，但学生们感到没人听取他们的意见。创新下降，但行政部门对你的纪律感到满意。'
                },
                stats: { competence: 40, ethics: 30, leadership: 35, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📣 Empower Student Voice: Help students write a formal proposal and present it to the school board to change the policy.',
                    th: '📣 พลังเสียงนักเรียน: ช่วยนักเรียนเขียนข้อเสนออย่างเป็นทางการและให้นำไปเสนอต่อบอร์ดโรงเรียนเพื่อเปลี่ยนนโยบาย',
                    zh: '📣 赋予学生话语权：帮助学生撰写正式提案，并将其提交给学校董事会以更改政策。'
                },
                consequence: {
                    en: '🌟 Heroic Leadership! The board is impressed by the students\' professionalism. They grant a budget for new furniture. You are seen as a teacher who truly empowers youth.',
                    th: '🌟 ภาวะผู้นำระดับฮีโร่! บอร์ดประทับใจในความเป็นมืออาชีพของเด็กๆ พวกเขาอนุมัติงบซื้อเฟอร์นิเจอร์ใหม่ คุณถูกมองว่าเป็นครูที่ส่งเสริมเยาวชนอย่างแท้จริง',
                    zh: '🌟 英雄般的领导！董事会对学生的专业素养印象深刻。他们拨款购买新家具。你被看作是一个真正赋予青年权利的老师。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '🤫 Guerrilla Innovation: Bring in the bean bags anyway and hide them when the principal walks by.',
                    th: '🤫 นวัตกรรมใต้ดิน: แอบเอาบีนแบ็กเข้ามาเลยแล้วค่อยซ่อนเวลาอาจารย์ใหญ่เดินผ่าน',
                    zh: '🤫 游击式创新：不管怎样，带进豆袋沙发，校长走过来时就把它们藏起来。'
                },
                consequence: {
                    en: '💀 Integrity Failure. You get caught eventually. You are seen as deceptive and unprofessional. The bean bags are confiscated, and you get a formal reprimand.',
                    th: '💀 ความซื่อสัตย์ล้มเหลว ในที่สุดคุณก็โดนจับได้ คุณถูกมองว่าหลอกลวงและไม่เป็นมืออาชีพ บีนแบ็กถูกยึด และคุณถูกตำหนิอย่างเป็นทางการ',
                    zh: '💀 正直受损。你最终被抓住了。你被看作是虚伪和不专业的。豆袋沙发被没收，你也受到了正式训诫。'
                },
                stats: { competence: 20, ethics: 10, leadership: 20, innovation: 30 }
            }
        ]
    },

    {
        id: 'te_018',
        text: {
            en: '❄️ The Sudden Closure: A heavy snowstorm closes school for 3 days. The curriculum is already tight. You are not required to teach online, but your students have a big exam next week. What is your move?',
            th: '❄️ โรงเรียนปิดกะทันหัน: พายุหิมะถล่มทำให้โรงเรียนต้องปิด 3 วัน หลักสูตรก็กำลังเร่งอยู่ คุณไม่ถูกบังคับให้สอนออนไลน์ แต่นักเรียนมีการสอบชิ้นใหญ่สัปดาห์หน้า คุณจะทำอย่างไร?',
            zh: '❄️ 突然停课：一场大风雪导致学校停课3天。课程进度已经很紧了。虽然没要求你在线教学，但你的学生下周要参加一项重大考试。你的计划是什么？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💻 Voluntary Webinar: Host a 1-hour optional review session on Zoom for students who want to stay ahead.',
                    th: '💻 เว็บบินาร์อาสา: จัดติวผ่าน Zoom แบบไม่บังคับ 1 ชั่วโมงให้เด็กที่อยากเตรียมตัวล่วงหน้า',
                    zh: '💻 自愿网络研讨会：在 Zoom 上为想要保持领先的学生举办一个 1 小时的可选复习环节。'
                },
                consequence: {
                    en: '✅ Dedicated Educator. 70% of students attend. They feel prepared and grateful. You go above and beyond without forcing anyone. High leadership and competence.',
                    th: '✅ ครูผู้เสียสละ นักเรียน 70% เข้าเรียน พวกเขารู้สึกพร้อมและซาบซึ้ง คุณทำมากกว่าหน้าที่โดยไม่บังคับใคร ผู้นำและความสามารถสูงมาก',
                    zh: '✅ 敬业的教育者。70% 的学生参加了。他们感到准备充分并且心存感激。你在不强迫任何人的情况下超越了职责。高领导力和高能力。'
                },
                stats: { competence: 45, ethics: 40, leadership: 45, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🛌 Enjoy the Break: "If the school is closed, I am closed. Rest is essential for effective teaching."',
                    th: '🛌 พักผ่อนให้เต็มที่: "ถ้าโรงเรียนปิด ฉันก็ปิด พักผ่อนเพื่อการสอนที่มีประสิทธิภาพ"',
                    zh: '🛌 享受假期：“如果学校停课，那我也休息。休息对于有效的教学至关重要。”'
                },
                consequence: {
                    en: '⚠️ Standard Compliance. You returned refreshed, but students are stressed and scores on the exam are lower than usual. You followed contract but missed a chance to support.',
                    th: '⚠️ ทำตามมาตรฐาน คุณกลับมาด้วยความสดชื่น แต่นักเรียนเครียดและคะแนนสอบออกมาต่ำกว่าปกติ คุณทำตามสัญญาจ้างแต่พลาดโอกาสที่จะช่วยลูกศิษย์',
                    zh: '⚠️ 标准合规。你恢复了精神，但学生们压力很大，考试成绩也比平时低。你履行了合同，但错过了提供支持的机会。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📚 Digital Packets: Email everyone a self-study guide and practice problems to complete at their own pace.',
                    th: '📚 ชุดการเรียนรู้ดิจิทัล: ส่งอีเมลแนวข้อสอบและโจทย์ฝึกหัดให้ทุกคนไปทำตามความสะดวกของตัวเอง',
                    zh: '📚 数字化资料包：通过电子邮件向每个人发送一份自学指南和练习题，让他们按照自己的进度完成。'
                },
                consequence: {
                    en: '✅ Resourceful. Students appreciate the guidance. It shows you care without demanding their presence online. A solid middle ground.',
                    th: '✅ มีไหวพริบ นักเรียนขอบคุณที่ยังมีแนวทางให้เห็นว่าคุณห่วงโดยไม่ต้องนัดเจอกันออนไลน์ เป็นทางสายกลางที่ยอดเยี่ยม',
                    zh: '✅ 足智多谋。学生们很感激你的指导。这表明你很关心他们，但不需要他们在网上露面。一个可靠的折中方案。'
                },
                stats: { competence: 40, ethics: 35, leadership: 35, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Mandatory Online Class: Declare that since we have technology, class will meet at the normal time via video link.',
                    th: '📢 บังคับเรียนออนไลน์: ประกาศว่าในเมื่อเรามีเทคโนโลยี เราก็จะเรียนตามเวลาปกติทางวิดีโอคอล',
                    zh: '📢 强制在线课程：宣布既然我们有技术手段，那么课堂将通过视频链接在正常时间进行。'
                },
                consequence: {
                    en: '⚠️ Backlash. Parents complain because their kids don\'t have internet or are shovel-snowing. You are seen as "out of touch" with reality. Leadership drops.',
                    th: '⚠️ กระแสลบ พ่อแม่ร้องเรียนเพราะเด็กบางคนไม่มีอินเทอร์เน็ตหรือต้องไปช่วยกวาดหิมะ คุณถูกมองว่าเป็นพวก "ไม่สนโลกความจริง" ภาวะผู้นำลดลง',
                    zh: '⚠️ 强烈的抵制。家长们投诉，因为他们的孩子没有网络或者是正在铲雪。你被认为“脱离现实”。领导力下降。'
                },
                stats: { competence: 35, ethics: 20, leadership: 25, innovation: 35 }
            }
        ]
    },

    {
        id: 'te_019',
        text: {
            en: '🚬 The Forbidden Discovery: You find a vape pen on the floor of your classroom after the students leave. You suspect it belongs to a student who has been struggling with mental health issues.',
            th: '🚬 สิ่งของต้องห้าม: คุณพบพอตบุหรี่ไฟฟ้าบนพื้นห้องเรียนหลังจากนักเรียนกลับไปแล้ว คุณสงสัยว่ามันจะเป็นของนักเรียนคนหนึ่งที่กำลังมีปัญหาสุขภาพจิต',
            zh: '🚬 禁忌的发现：学生离开后，你在教室地板上发现了一支电子烟。你怀疑它属于一个一直受心理健康问题困扰的学生。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Strict Compliance: Turn the device in to the administration immediately and report your suspicion. "Rules are rules."',
                    th: '🚨 ทำตามระเบียบเป๊ะ: ส่งของให้ฝ่ายบริหารทันทีและรายงานข้อสงสัยของคุณ "กฎก็ต้องเป็นกฎ"',
                    zh: '🚨 严格合规：立即将设备上交给行政部门并报告你的怀疑。“规则就是规则。”'
                },
                consequence: {
                    en: '⚠️ Harsh Justice. The student is suspended. They lose access to school mental health resources. You followed the rulebook, but the student\'s spiral deepens. Ethics high, empathy low.',
                    th: '⚠️ ความยุติธรรมที่รุนแรง นักเรียนถูกพักการเรียนและหมดสิทธิ์เข้าถึงแหล่งช่วยเหลือทางสุขภาพจิตของโรงเรียน คุณทำตามระเบียบแต่เด็กอาการหนักกว่าเดิม จริยธรรมสูงแต่น้ำใจต่ำ',
                    zh: '⚠️ 严厉的公正。该学生被停学。他们失去了获得学校心理健康资源的机会。你遵守了准则，但学生的情况进一步恶化。高道德，低同理心。'
                },
                stats: { competence: 35, ethics: 45, leadership: 30, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Private Confrontation: Speak to the student privately. "I found this. I won\'t report it this time, but you need to see a counselor."',
                    th: '🤝 เผชิญหน้าส่วนตัว: คุยกับนักเรียนคนนั้นเป็นการส่วนตัว "ครูเจอสิ่งนี้ ครูจะไม่รายงานคราวนี้ แต่เธอต้องไปหาครูแนะแนวสะนะ"',
                    zh: '🤝 私下交涉：私下找该学生谈话。“我发现了这个。这次我不会举报，但你需要去看辅导员。”'
                },
                consequence: {
                    en: '✅ Trust Won. The student breaks down and admits their struggle. You build a deep mentor relationship. However, you are technically breaking school policy. A risky but human win.',
                    th: '✅ ได้รับความเชื่อใจ นักเรียนเสียอาการและยอมรับปัญหาของเขา คุณสร้างความสัมพันธ์แบบเมนเทอร์ได้ลึกซึ้ง แต่ทางเทคนิคแล้วคุณกำลังแหกนโยบายโรงเรียน เป็นชัยชนะที่เสี่ยงแต่มีความเป็นมนุษย์',
                    zh: '✅ 赢得信任。学生崩溃了并承认了自己的困境。你建立了一段深刻的导师关系。然而，你严格来说违反了学校政策。这是一个冒险但人性化的胜利。'
                },
                stats: { competence: 40, ethics: 35, leadership: 45, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🗑️ Silent Amnesty: Throw the device in the trash and never mention it. "I didn\'t see anything."',
                    th: '🗑️ อภัยทานเงียบขรึม: ทิ้งของลงถังขยะแล้วทำเป็นไม่เคยเห็น "ฉันไม่เห็นอะไรทั้งนั้น"',
                    zh: '🗑️ 沉默大赦：将设备扔进垃圾桶，从此只字不提。“我什么也没看见。”'
                },
                consequence: {
                    en: '⚠️ Neglect. You avoided the conflict, but you didn\'t help the student. They continue their behavior in secret. You are safe but ineffective.',
                    th: '⚠️ ความเพิกเฉย คุณเลี่ยงความขัดแย้งได้แต่คุณไม่ได้ช่วยเด็กเลย เขายังทำนิสัยเดิมต่อไปลับๆ คุณปลอดภัยดีแต่ไร้ผลงาน',
                    zh: '⚠️ 忽视。你避免了冲突，但你并没有帮助这个学生。他们依然在秘密地继续这种行为。你是安全了，但无所作为。'
                },
                stats: { competence: 25, ethics: 20, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 Professional Pivot: Report the device anonymously to the counselor as a "found item" so they can initiate a wellness check without a discipline report.',
                    th: '🔄 พลิกแพลงอย่างมืออาชีพ: รายงานของชิ้นนี้กับครูแนะแนวแบบไม่ระบุชื่อว่าเป็น "ของที่เก็บได้" เพื่อให้เขาเริ่มกระบวนการดูแลเด็กโดยไม่ต้องมีประวัติลงโทษ',
                    zh: '🔄 职业转型：匿名向辅导员报告该设备为“寻获物品”，这样他们就可以在没有纪律报告的情况下启动健康检查。'
                },
                consequence: {
                    en: '🌟 Tactical Genius! The student gets the help they need without the stigma of suspension. You navigated the system perfectly. High competence and ethics.',
                    th: '🌟 อัจฉริยะทางยุทธวิธี! นักเรียนได้รับพความช่วยเหลือที่จำเป็นโดยไม่ต้องถูกพักการเรียน คุณจัดการระบบได้อย่างไร้ที่ติ ความสามารถและจริยธรรมสูงมาก',
                    zh: '🌟 战术天才！学生得到了所需的帮助，而没有停学的耻辱。你完美地驾驭了系统。高胜任力和高道德。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 45 }
            }
        ]
    },

    {
        id: 'te_020',
        text: {
            en: '📋 The Lesson Plan Thief: A colleague, Mr. Miller, uses your award-winning lesson plan for a presentation to the Board without giving you any credit. He is praised as an "innovator."',
            th: '📋 จอมโจรแผนการสอน: เพื่อนร่วมงาน มิสเตอร์มิลเลอร์ เอาแผนการสอนที่ได้รับรางวัลของคุณไปนำเสนอยังบอร์ดโรงเรียนโดยไม่ให้เครดิตคุณเลย เขาได้รับคำชมว่าเป็น "นักนวัตกรรม"',
            zh: '📋 教案小偷：同事米勒先生在向董事会做演示时使用了你获奖的教案，但没有给你任何署名。他被誉为“创新者”。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Direct Confrontation: Speak to him privately. "I noticed you used my plan. I expect credit next time, or I\'ll speak to the Principal."',
                    th: '🛡️ เผชิญหน้าตรงๆ: คุยกับเขาเป็นการส่วนตัว "ฉันเห็นนะว่าคุณใช้แผนของฉัน คราวหน้าขอเครดิตด้วย ไม่งั้นฉันจะไปคุยกับอาจารย์ใหญ่"',
                    zh: '🛡️ 直接交涉：私下找他谈话。“我注意到你用了我的方案。我希望下次能署名，否则我会去找校长谈谈。”'
                },
                consequence: {
                    en: '✅ Professional Boundary. He apologizes and feels ashamed. You kept your dignity. However, the relationship remains tense.',
                    th: '✅ ขอบเขตความเป็นมืออาชีพ เขาขอโทษและรู้สึกละอายใจ คุณรักษาศักดิ์ศรีไว้ได้ แต่ความสัมพันธ์ยังคงตึงเครียด',
                    zh: '✅ 职业边界。他道歉了并感到羞愧。你保持了尊严。然而，关系依然紧张。'
                },
                stats: { competence: 40, ethics: 40, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Stay Silent: "It\'s okay, the most important thing is that the kids benefit from the plan. It\'s not about me."',
                    th: '🤐 เงียบไว้ก่อน: "ไม่เป็นไรหรอก สิ่งสำคัญที่สุดคือเด็กได้รับประโยชน์จากแผนนั้น มันไม่ใช่เรื่องของฉัน"',
                    zh: '🤐 保持沉默：“没关系，最重要的是孩子们能从方案中受益。这不是为了我个人。”'
                },
                consequence: {
                    en: '⚠️ Passive Victim. You avoid the fight, but Mr. Miller continues to steal other people\'s work. You feel building resentment.',
                    th: '⚠️ ตกเป็นเหยื่อทางอ้อม คุณเลี่ยงการทะเลาะได้แต่มิสเตอร์มิลเลอร์ก็จะเที่ยวไปขโมยงานคนอื่นต่อไป คุณรู้สึกว่าความขุ่นเคืองในใจเริ่มสะสม',
                    zh: '⚠️ 消极受害者。你避免了争吵，但米勒先生继续窃取他人的成果。你感到了日益积聚的怨恨。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📣 Report to Administration: Formally report the intellectual property theft to the Principal.',
                    th: '📣 รายงานฝ่ายบริหาร: ทำรายงานขโมยทรัพย์สินทางปัญญาอย่างเป็นทางการส่งให้อาจารย์ใหญ่',
                    zh: '📣 向行政部门报告：正式向校长报告该起知识产权窃取行为。'
                },
                consequence: {
                    en: '⚖️ Nuclear Fallout. Mr. Miller is reprimanded. The school staff is divided into "sides." You got justice, but the workplace atmosphere becomes toxic.',
                    th: '⚖️ สงครามนิวเคลียร์ มิสเตอร์มิลเลอร์ถูกตำหนิ ครูในโรงเรียนแบ่งฝักแบ่งฝ่าย คุณได้รับความยุธรรมจริงแต่บรรยากาศในที่ทำงานกลายเป็นพิษ',
                    zh: '⚖️ 严重后果。米勒先生受到了训诫。全校员工分裂成两个阵营。你得到了公正，但工作氛围变得有害。'
                },
                stats: { competence: 35, ethics: 50, leadership: 30, innovation: 15 }
            },
            {
                id: 'D',
                text: {
                    en: '🌟 The Public Reframe: During the next staff meeting, thank Mr. Miller for "prototyping" your design and offer to help others implement it properly.',
                    th: '🌟 พลิกเกมกลางที่แจ้ง: ในการประชุมครูครั้งหน้า ให้ขอบคุณมิสเตอร์มิลเลอร์ที่ช่วย "ทดลองใช้" แผนของคุณ และเสนอตัวช่วยคนอื่นให้เอาไปใช้ได้อย่างถูกต้อง',
                    zh: '🌟 公开重塑：在下次员工会议上，感谢米勒先生“试用”了你的设计，并提议帮助其他人正确实施该方案。'
                },
                consequence: {
                    en: '🔥 Masterful Chess. You subtly let everyone know it was your work without attacking him. You are seen as a generous leader. Mr. Miller is humiliated silently.',
                    th: '🔥 หมากรุกชั้นครู คุณทำให้ทุกคนรู้เนียนๆ ว่านั่นคือผลงานของคุณโดยไม่โจมตีเขา คุณถูกมองว่าเป็นผู้นำที่ใจกว้าง มิสเตอร์มิลเลอร์หน้าแตกเงียบๆ',
                    zh: '🔥 高明博弈。你巧妙地让每个人都知道那是你的成果，而没有攻击他。你被看作是一个慷慨的领导者。米勒先生私下里感到很羞愧。'
                },
                stats: { competence: 50, ethics: 45, leadership: 50, innovation: 45 }
            }
        ]
    },

    {
        id: 'te_041',
        text: {
            en: '🚁 The Helicopter Parent: A parent emails you three times a day asking for minute-by-minute updates on their child’s progress and demanding you scan and email every worksheet immediately.',
            th: '🚁 ผู้ปกครองจอมบงการ: ผู้ปกครองส่งอีเมลหาคุณวันละ 3 รอบเพื่อขออัปเดตความคืบหน้าของลูกแบบนาทีต่อนาที และสั่งให้คุณสแกนส่งใบงานทุกใบให้ดูทันที',
            zh: '🚁 直升机家长：家长每天给你发三次邮件，要求你每分钟更新孩子的进度，并要求你立即扫描并发送每一份工作表。'
        },
        options: [
            { id: 'A', text: { en: '🖇️ The Weekly Digest: "I will provide a comprehensive update every Friday. This allows me to focus on teaching during the week."', th: '🖇️ สรุปรายสัปดาห์: "ครูจะสรุปยอดให้ทุกวันศุกร์นะคะ วิธีนี้จะทำให้ครูมีเวลาโฟกัสกับการสอนกับการสอนในวันธรรมดาได้เต็มที่"', zh: '🖇️ 每周摘要：“我将在每个周五提供全面的更新。这让我能在周内专注于教学。”' }, consequence: { en: '✅ Boundaries Set. The parent is initially annoyed but accepts the routine. You regain your sanity and show professional leadership.', th: '✅ กำหนดขอบเขตได้สำเร็จ! ตอนแรกผู้ปกครองอาจจะรำคาญแต่ก็ยอมรับเงื่อนไขนี้ คุณได้สุขภาพจิตคืนมาและแสดงความเป็นมืออาชีพ', zh: '✅ 边界设定。家长最初很恼火，但接受了这种常规。你恢复了理智并展示了专业领导力。' }, stats: { competence: 40, ethics: 35, leadership: 45, innovation: 20 } },
            { id: 'B', text: { en: '📧 Compliance: "I\'ll do it. Keeping parents happy is part of the job, even if it takes my entire lunch break."', th: '📧 ยอมทำตาม: "ได้ค่ะ การทำให้ผู้ปกครองสบายใจคือส่วนหนึ่งของงาน แม้ว่ามันจะดึงเวลาพักเที่ยงทั้งหมดไปก็ตาม"', zh: '📧 服从：“我会做的。让家长开心也是工作的一部分，即使这会占用我整个午休时间。”' }, consequence: { en: '⚠️ Burnout Risk. The parent becomes even more demanding. Other parents start asking for the same treatment. You are exhausted and have no time for lesson planning.', th: '⚠️ เสี่ยงหมดไฟ! ผู้ปกครองจะยิ่งเรียกร้องมากขึ้น ผู้ปกครองคนอื่นเริ่มเห็นแล้วอยากได้แบบเดียวกันบ้าง คุณจะเหนื่อยมากจนไม่มีเวลาเตรียมสอน', zh: '⚠️ 职业倦怠风险。家长变得更加变本加厉。其他家长也开始要求同样的待遇。你筋疲力尽，没有时间准备课程。' }, stats: { competence: 30, ethics: 25, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Portal Training: "All grades are updated in the online portal by 5 PM daily. Let me show you how to log in so you can track progress in real-time."', th: '🤝 สอนใช้ระบบ: "เกรดทั้งหมดจะอัปเดตในระบบออนไลน์ทุกวันตอน 5 โมงเย็นนะคะ เดี๋ยวครูสอนวิธีล็อกอินให้ดู จะได้ติดตามผลได้แบบเรียลไทม์เลย"', zh: '🤝 系统培训：“所有成绩每天下午5点前都会在在线门户更新。我来教你如何登录，这样你就可以实时追踪进度。”' }, consequence: { en: '🌟 Tech Hero! The parent feels empowered and stops emailing. You leveraged existing tools to solve a communication problem. High innovation.', th: '🌟 ฮีโร่ไอที! ผู้ปกครองรู้สึกอุ่นใจและเลิกส่งอีเมลกวนใจ คุณใช้เครื่องมือที่มีอยู่แก้ปัญหาการสื่อสารได้ยอดเยี่ยม', zh: '🌟 科技英雄！家长感到有了掌控感并停止了发邮件。你利用现有工具解决了沟通问题。高创新。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🤐 Ignore and Delay: Only respond to every 5th email. Hope they get the hint that you are busy.', th: '🤐 เมินและถ่วงเวลา: ตอบอีเมลแค่ 1 ใน 5 ฉบับ หวังว่าเขาจะรู้ตัวว่าคุณยุ่ง', zh: '🤐 忽视和拖延：只回复每5封邮件中的1封。希望他们明白你很忙。' }, consequence: { en: '💀 Escalation. The parent complains to the Principal that you are "unresponsive" and "unprofessional." You get a formal reprimand.', th: '💀 เรื่องบานปลาย! ผู้ปกครองไปร้องเรียนอาจารย์ใหญ่ว่าคุณ "ไม่ตอบสนอง" และ "ไม่เป็นมืออาชีพ" จนคุณโดนตำหนิอย่างเป็นทางการ', zh: '💀 事态升级。家长向校长投诉你“不回应”且“不专业”。你受到了正式诫勉。' }, stats: { competence: 15, ethics: 15, leadership: 10, innovation: 10 } }
        ]
    },

    {
        id: 'te_042',
        text: {
            en: '🚌 The Field Trip Fiasco: During a museum trip, a student "borrows" a small souvenir without paying. The museum security catches them. Do you handle it internally or let the law take its course?',
            th: '🚌 ทริปทัศนศึกษาวุ่นวาย: ระหว่างไปพิพิธภัณฑ์ นักเรียนแอบ "หยิบ" ของที่ระลึกชิ้นเล็กๆ มาโดยไม่จ่ายเงิน รปภ. จับได้ คุณจะจัดการเองในโรงเรียนหรือจะปล่อยให้เป็นเรื่องของกฎหมาย?',
            zh: '🚌 研学旅行之乱：在博物馆参观期间，一名学生在没付钱的情况下“借”了一个小纪念品。博物馆安保人员抓住了他们。你是内部处理还是按法律程序办？'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Proper Restitution: "The student will apologize, pay double the price from their own money, and be banned from the next two trips. Please don\'t call the police."', th: '⚖️ การชดใช้ที่เหมาะสม: "ให้นักเรียนขอโทษ จ่ายเงินเพิ่มเป็นสองเท่าจากเงินตัวเอง และห้ามไปทัศนศึกษาใน 2 ครั้งถัดไป ได้โปรดอย่าเรียกตำรวจเลยนะคะ"', zh: 'A 适当的赔偿：“学生将道歉，自掏腰包支付双倍价格，并被禁止参加接下来的两次活动。请不要报警。”' }, consequence: { en: '✅ Firm but Fair. The museum accepts. The student is terrified but learns the cost of theft. You protected their permanent record while instilling discipline.', th: '✅ เด็ดขาดแต่ยุติธรรม พิพิธภัณฑ์ยอมรับเงื่อนไข นักเรียนกลัวมากแต่ได้เรียนรู้ราคาของความมักง่าย คุณปกป้องประวัติเขาได้พร้อมกับสอนวินัยไปในตัว', zh: '✅ 坚定而公平。博物馆接受了。学生吓坏了，但也学到了偷窃的代价。你在灌输纪律的同时保护了他们的永久档案。' }, stats: { competence: 45, ethics: 40, leadership: 45, innovation: 20 } },
            { id: 'B', text: { en: '🚔 Strict Law: "Rules were broken. Museum policy applies. Call the parents and the authorities."', th: '🚔 กฎหมายเคร่งครัด: "ในเมื่อทำผิดกฎ ก็ต้องว่าไปตามนโยบายพิพิธภัณฑ์ เรียกผู้ปกครองและเจ้าหน้าที่มาได้เลยค่ะ"', zh: 'B 法律严明：“规矩破了。按博物馆政策办。叫家长和当局过来。”' }, consequence: { en: '⚠️ Nuclear Result. The student gets a juvenile record for a $5 magnet. Parents are furious at your lack of support. The school gets bad PR for their students\' behavior.', th: '⚠️ ผลลัพธ์รุนแรง! นักเรียนมีประวัติอาชญากรรมเด็กเพราะแม่เหล็กติดตู้เย็นอันละไม่กี่บาท พ่อแม่โกรธที่คุณไม่ช่วยปกป้อง โรงเรียนเสียชื่อเสียงจากพฤติกรรมเด็ก', zh: '⚠️ 极端后果。学生因为一个5美元的磁铁留下了少年犯罪记录。家长对你的缺乏支持感到愤怒。学校因学生的行为而面临公关压力。' }, stats: { competence: 30, ethics: 50, leadership: 25, innovation: 10 } },
            { id: 'C', text: { en: '🤫 Quiet Cover-up: Pay for the item yourself and scold the student privately on the bus later. Don\'t tell the Principal.', th: '🤫 ปิดเรื่องเงียบ: คุณจ่ายให้เองแล้วไปดุนักเรียนส่วนตัวบนรถบัสทีหลัง ไม่ต้องให้อาจารย์ใหญ่รู้เรื่องนี้', zh: 'C 悄悄隐瞒：你自己掏钱买下那个物品，稍后在车上私下训斥学生。不要告诉校长。' }, consequence: { en: '💀 Moral Hazard. The student learns that others will clean up their messes. If the Principal finds out later, your integrity is destroyed. You chose the easy way, not the right way.', th: '💀 ภัยทางศีลธรรม! นักเรียนจะเรียนรู้ว่าคนอื่นจะตามล้างตามเช็ดให้เอง ถ้าอาจารย์ใหญ่รู้ทีหลัง ความน่าเชื่อถือคุณจะพังทลาย คุณเลือกทางง่ายแต่ไม่ใช่ทางที่ถูก', zh: '💀 道德风险。学生学到别人会为他们的烂摊子收尸。如果校长后来发现了，你的诚信就毁了。你选择了容易的路，而不是正确的路。' }, stats: { competence: 20, ethics: 10, leadership: 15, innovation: 10 } },
            { id: 'D', text: { en: '🔄 Civic Lesson: "We stay at the museum. The student works for 2 hours cleaning the gift shop to earn the item. The class watches the lesson in accountability."', th: '🔄 บทเรียนหน้าที่พลเมือง: "เราจะอยู่ที่นี่ต่อ ให้นักเรียนทำงานช่วยทำความสะอาดร้านของที่ระลึก 2 ชั่วโมงเพื่อแลกของชิ้นนั้น ให้เด็กคนอื่นดูไว้เป็นบทเรียนเรื่องความรับผิดชอบ"', zh: 'D 公民课：“我们留在博物馆。学生在礼品店打工2小时以换取该物品。全班同学观看这一关于问责制的课程。”' }, consequence: { en: '🌟 Innovative Discipline! The museum manager loves the idea. The student actually feels proud of the work. You turned a crime into a character-building moment.', th: '🌟 นวัตกรรมแห่งวินัย! ผู้จัดการพิพิธภัณฑ์ชอบไอเดียนี้มาก นักเรียนรู้สึกภูมิใจในงานที่ทำ คุณเปลี่ยนคดีความให้กลายเป็นโอกาสสร้างนิสัยที่ดี', zh: '🌟 创新纪律！博物馆经理很喜欢这个主意。学生实际上对工作感到自豪。你把一次违法行为变成了塑造性格的时刻。' }, stats: { competence: 45, ethics: 40, leadership: 50, innovation: 50 } }
        ]
    },

    {
        id: 'te_043',
        text: {
            en: '🎭 The Substitute Slander: You return from a sick day to find the substitute teacher left a note: "Worst class ever. They hid my keys, called me names, and did zero work." Your students say the sub was "mean and started it."',
            th: '🎭 เรื่องวุ่นครูสอนแทน: คุณกลับจากลาป่วยแล้วพบโน้ตจากครูสอนแทนว่า "เป็นห้องที่แย่ที่สุดที่เคยสอนมา เด็กๆ แอบซ่อนกุญแจ ก่นด่า และไม่ทำงานเลย" แต่นักเรียนบอกว่าครูนั่นแหละที่ "ใจร้ายและเริ่มก่อน"',
            zh: '🎭 代课丑闻：你病假归来，发现代课老师留下张纸条：“有史以来最差的班级。他们藏了我的钥匙，辱骂我，而且什么活都不干。”你的学生说代课老师“很凶，而且是他先挑衅的”。'
        },
        options: [
            { id: 'A', text: { en: '📋 Mass Punishment: "Until I get the keys back and an apology, there is no recess and double homework for a week. I support my colleagues."', th: '📋 ลงโทษยกกลุ่ม: "จนกว่าจะได้กุญแจคืนและคำขอโทษ จะไม่มีการพักเที่ยงและมีการบ้านเพิ่มสองเท่าเป็นเวลาหนึ่งสัปดาห์ ครูต้องปกป้องเพื่อนร่วมวิชาชีพ"', zh: 'A 集体惩罚：“在我拿回钥匙并得到道歉之前，这一周没有课间休息，作业加倍。我支持我的同事。”' }, consequence: { en: '⚖️ Solid Authority. You get the keys back. The students learn there are consequences for disrespecting substitutes. You are known as a teacher who doesn\'t tolerate chaos.', th: '⚖️ อำนาจที่มั่นคง! คุณได้กุญแจคืน นักเรียนเรียนรู้ว่าการไม่เคารพครูสอนแทนส่งผลอย่างไร คุณถูกมองว่าเป็นครูที่ไม่ยอมให้เกิดความวุ่นวาย', zh: '⚖️ 稳固的权威。你拿回了钥匙。学生们意识到不敬代课老师是有后果。你被称为不容忍混乱的老师。' }, stats: { competence: 40, ethics: 35, leadership: 45, innovation: 15 } },
            { id: 'B', text: { en: '🗣️ The Investigation: "Write down exactly what happened from your perspective. If the stories align, I\'ll talk to the Sub and the Principal."', th: '🗣️ การสืบสวน: "เขียนสิ่งที่เกิดขึ้นตามมุมมองของพวกเธอมา ถ้าเรื่องราวตรงกัน ครูจะไปคุยกับครูสอนแทนและอาจารย์ใหญ่เอง"', zh: 'B 调查：“从你们的角度写下到底发生了什么。如果说法一致，我会去找代课老师和校长谈谈。”' }, consequence: { en: '✅ Fair Hearing. You find out the sub WAS verbally abusive. You protect your students while still requiring they return the hidden keys. Balanced and just.', th: '✅ การรับฟังที่ยุติธรรม! คุณพบว่าครูสอนแทนใช้วาจาไม่สุภาพจริงๆ คุณปกป้องนักเรียนได้พร้อมกับสั่งให้คืนกุญแจที่ซ่อนไว้ มีความสมดุลและยุติธรรม', zh: '✅ 公平听证。你发现代课老师确实有言语虐待行为。你保护了学生，同时仍要求他们归还藏起来的钥匙。平衡且公正。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 25 } },
            { id: 'C', text: { en: '🃏 Practical Joke Dismissal: "Haha, hiding the keys is a classic. Just don\'t do it again, okay? Let\'s get back to work."', th: '🃏 มองเป็นเรื่องตลก: "ฮ่าฮ่า แอบซ่อนกุญแจนี่มันคลาสสิกจริงๆ แต่อย่าทำอีกนะโอเคไหม? มาเริ่มเรียนกันเถอะ"', zh: 'C 玩笑带过：“哈哈，藏钥匙真是经典。只要别再犯就行，好吗？让我们开始干活吧。”' }, consequence: { en: '💀 Anarchy. Substitutes refuse to work for your school. The students lose respect for all authority figures because they know you won\'t enforce rules. Class management becomes impossible.', th: '💀 ความโกลาหล! ครูสอนแทนปฏิเสธที่จะมาโรงเรียนคุณ นักเรียนจะเลิกเคารพทุกคนที่มีอำนาจเพราะรู้ว่าคุณไม่บังคับใช้กฎ การจัดการห้องเรียนจะทำไม่ได้เลย', zh: '💀 无政府状态。代课老师拒绝为你所在的学校工作。学生们对所有权威人物失去尊重，因为他们知道你不会执行规矩。课堂管理变得不可能。' }, stats: { competence: 15, ethics: 10, leadership: -20, innovation: 20 } },
            { id: 'D', text: { en: '🔄 Restorative Circle: Have the students write a letter to the sub explaining the conflict and proposing a better way to interact next time.', th: '🔄 วงสนทนาเชิงสมานฉันท์: ให้นักเรียนเขียนจดหมายถึงครูสอนแทนเพื่ออธิบายความขัดแย้งและเสนอแนวทางการปฏิสัมพันธ์ที่ดีขึ้นในครั้งหน้า', zh: 'D 恢复性圆桌会议：让学生给代课老师写一封信，解释冲突并提出下次互动的更好方式。' }, consequence: { en: '🌟 Emotional Intelligence. Students learn to process conflict via communication rather than pranks. The sub feels respected, and the class matures significantly.', th: '🌟 ความฉลาดทางอารมณ์! นักเรียนเรียนรู้ที่จะจัดการความขัดแย้งผ่านการสื่อสารมากกว่าการแกล้งกัน ครูสอนแทนได้รับความเคารพ และเด็กๆ ดูโตขึ้นมาก', zh: '🌟 情绪智力。学生学会通过沟通而非恶作剧来处理冲突。代课老师感到受尊重，班级显著成熟了。' }, stats: { competence: 40, ethics: 45, leadership: 45, innovation: 50 } }
        ]
    },

    {
        id: 'te_044',
        text: {
            en: '👗 The Prom Dress Code: A student is wearing a dress that technically violates the school’s "modesty" rules but is culturally significant to her heritage. The administration demands you tell her to cover up or leave.',
            th: '👗 กฎเหล็กชุดพรอม: นักเรียนใส่ชุดที่ทางเทคนิคแล้วผิดกฎ "ความเรียบร้อย" ของโรงเรียน แต่มันเป็นชุดที่มีความสำคัญทางวัฒนธรรมตามมรดกของเธอ ฝ่ายบริหารสั่งให้คุณบอกเธอให้หาอะไรมาคลุมหรือให้ออกจากงาน',
            zh: '👗 舞会着装规范：一名学生的着装在技术上违反了学校的“端庄”规定，但对其文化传承具有重要意义。校方要求你告诉她要么盖起来，要么离开。'
        },
        options: [
            { id: 'A', text: { en: '✊ Cultural Advocate: "I refuse. This is a cultural expression, not a violation. I will explain the significance to the Principal."', th: '✊ ผู้ปกป้องวัฒนธรรม: "ฉันปฏิเสธค่ะ นี่คือการแสดงออกทางวัฒนธรรมไม่ใช่การทำผิดกฎ ฉันจะไปอธิบายความสำคัญให้อาจารย์ใหญ่ฟังเอง"', zh: 'A 文化倡导者：“我拒绝。这是文化表达，不是违规。我会向校长解释其重要性。”' }, consequence: { en: '✅ Diverse Victory. The Principal listens. The student feels seen and proud. You helped update the school’s policy to be more inclusive. You are a hero to the minority students.', th: '✅ ชัยชนะแห่งความหลากหลาย! อาจารย์ใหญ่ยอมฟัง นักเรียนรู้สึกได้รับการยอมรับและภูมิใจ คุณช่วยเปลี่ยนนโยบายโรงเรียนให้ครอบคลุมมากขึ้น คุณคือฮีโร่ของนักเรียนกลุ่มน้อย', zh: '✅ 多元化的胜利。校长听取了意见。学生感到被重视和自豪。你帮助更新了学校政策，使其更具包容性。你是少数族裔学生眼中的英雄。' }, stats: { competence: 40, ethics: 50, leadership: 45, innovation: 40 } },
            { id: 'B', text: { en: '🧣 The Compromise: "Wear this stylish shawl just for the official photos, then you can take it off for the dancing. Let’s keep everyone happy."', th: '🧣 ทางสายกลาง: "ใส่ผ้าคลุมไหล่สวยๆ นี่แค่ตอนถ่ายรูปทางการนะ จากนั้นตอนเต้นค่อยถอดออก จะได้แฮปปี้ทุกฝ่าย"', zh: 'B 妥协：“只在官方合演时披上这条时尚披肩，跳舞时就可以摘掉。让大家都开心吧。”' }, consequence: { en: '⚖️ Diplomatic Peace. The administration is satisfied, the student still gets to enjoy her night. You avoided a scene, though the underlying bias remains.', th: '⚖️ สันติภาพทางการทูต ฝ่ายบริหารพอใจ นักเรียนยังสนุกกับคืนนี้ได้ คุณเลี่ยงความวุ่นวายได้แม้ว่าอคติลึกๆ จะยังคงอยู่ก็ตาม', zh: '⚖️ 外交和平。校方满意了，学生仍然能享受她的夜晚。你避免了闹僵，尽管潜在的偏见仍然存在。' }, stats: { competence: 45, ethics: 35, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '📜 Follow Orders: "Rules are rules, Maria. Put the sweater on or I have to escort you out. I don\'t want you to miss prom."', th: '📜 ทำตามคำสั่ง: "กฎคือกฎจ้ะมาเรีย ใส่เสื้อคลุมซะไม่งั้นครูต้องพาเธอออกไป ครูไม่อยากให้เธอพลาดงานพรอมนะ"', zh: 'C 服从命令：“规矩就是规矩，玛利亚。穿上毛衣，否则我不得不护送你出去。我不想让你错过舞会。”' }, consequence: { en: '⚠️ Resentment. The student cries and leaves anyway. She feels targeted and misunderstood. You followed policy but damaged a relationship forever.', th: '⚠️ ความขุ่นเคือง! นักเรียนร้องไห้และเดินออกจากงานไปอยู่ดี เธอรู้สึกถูกเพ่งเล็งและไม่ได้รับความเข้าใจ คุณทำตามนโยบายแต่ทำลายความสัมพันธ์พังทลายตลอดกาล', zh: '⚠️ 怨恨。学生还是哭了并离开了。她感到被针对和误解。你遵循了政策，但永远损害了关系。' }, stats: { competence: 30, ethics: 20, leadership: 15, innovation: 10 } },
            { id: 'D', text: { en: '🤫 Look the Other Way: Pretend you didn\'t hear the order and move to the other side of the room.', th: '🤫 ทำเป็นมองไม่เห็น: แกล้งทำเป็นไม่ได้ยินคำสั่งแล้วเดินไปอีกฝั่งของห้อง', zh: 'D 视而不见：假装没听到命令，走到房间的另一边。' }, consequence: { en: '💀 Professional Friction. Another teacher reports her, and then reports YOU for negligence. You look incompetent and cowardice.', th: '💀 ความขัดแย้งในที่ทำงาน! ครูคนอื่นไปรายงานเธอ และรายงาน "คุณ" ข้อหาละเลยหน้าที่ คุณจะดูไร้ความสามารถและขี้ขลาด', zh: '💀 职业摩擦。另一名老师举报了她，随后因你失职而举报了你。你显得既无能又胆小。' }, stats: { competence: 20, ethics: 15, leadership: 10, innovation: 10 } }
        ]
    },

    {
        id: 'te_045',
        text: {
            en: '🏀 Sports Over Study: The star basketball player is missing your class twice a week for "travel games." He’s failing, but the Coach says he’s the school’s only ticket to the championships. The Coach asks you to "be flexible."',
            th: '🏀 กีฬาเด่นแต่เน้นเรียน: นักกีฬาบาสเกตบอลดาวเด่นขาดเรียนสัปดาห์ละ 2 ครั้งเพื่อไป "แข่งที่อื่น" เขาเริ่มเรียนไม่รู้เรื่อง แต่โค้ชบอกว่าเขาคือความหวังเดียวของโรงเรียนที่จะไปคว้าแชมป์ โค้ชขอให้คุณ "ช่วยยืดหยุ่น" หน่อย',
            zh: '🏀 体育重于学业：明星篮球运动员每周两次因“客场比赛”缺席你的课。他成绩不及格，但教练说他是学校获得冠军的唯一指望。教练要求你“灵活处理”。'
        },
        options: [
            { id: 'A', text: { en: '🚫 No Pass, No Play: "The policy is clear. He misses one more assignment, and I report his failing grade to the athletic department. Academics first."', th: '🚫 ไม่ผ่านไม่ได้ลง: "นโยบายชัดเจนค่ะ ถ้าเขาขาดงานอีกแค่ชิ้นเดียว ฉันจะรายงานคะแนนตกให้ฝ่ายกีฬาเรียนทราบ การเรียนต้องมาก่อน"', zh: 'A 不及格不准赛：“政策很明确。如果他再缺交一份作业，我就向体育部报告他的不及格成绩。学业第一。”' }, consequence: { en: '⚖️ Hard Integrity. The player is benched, the team loses. You are hated by the sports fans, but you upheld the value of education. The player eventually starts studying seriously.', th: '⚖️ ความซื่อสัตย์ที่แข็งแกร่ง! ผู้เล่นโดนแบน ทีมแพ้ คุณโดนแฟนกีฬาเกลียด แต่คุณรักษาคุณค่าของการศึกษาไว้ได้ ในที่สุดผู้เล่นคนนั้นก็เริ่มหันมาตั้งใจเรียนจริงๆ', zh: '⚖️ 强硬的职业道德。球员被停赛，球队输了。你被体育迷们讨厌，但你维护了教育的价值。球员最终开始认真学习。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '📝 Required Tutoring: "He can travel, but he must attend mandatory tutoring during his lunch break every day until his grade is a B. The Coach must oversee this."', th: '📝 บังคับติวเพิ่ม: "เขาไปแข่งได้ แต่ต้องเข้าติวบังคับช่วงพักเที่ยงทุกวันจนกว่าเกรดจะได้ B และโค้ชต้องเป็นคนคุมเรื่องนี้ด้วยนะ"', zh: 'B 要求辅导：“他可以去比赛，但必须每天午休时间参加强制辅导，直到成绩达到B。教练必须监督此事。”' }, consequence: { en: '✅ The Balanced Path. The Coach agrees because he wants the player eligible. The student’s grades improve AND the team wins. You showed leadership by finding a solution.', th: '✅ ทางสายกลางที่สมดุล! โค้ชยอมรับเพราะอยากให้เด็กได้ลงเล่น เกรดนักเรียนดีขึ้น "และ" ทีมก็ชนะ คุณแสดงความเป็นผู้นำในการแก้ปัญหา', zh: '✅ 平衡之路。教练同意了，因为他希望球员有参赛资格。学生的成绩提高了，球队也赢了。你通过找到解决方案展示了领导力。' }, stats: { competence: 45, ethics: 40, leadership: 45, innovation: 30 } },
            { id: 'C', text: { en: '🤐 Look Away: Give him "completion" points for simple tasks to keep him eligible. You don’t want the drama of a championship loss on your hands.', th: '🤐 เมินๆ ไป: ให้คะแนน "ผ่าน" สำหรับงานง่ายๆ เพื่อให้เขาเรียนผ่าน จะได้ไม่ต้องมารับผิดชอบดราม่าถ้าทีมแพ้เพราะเขาไม่ได้ลง', zh: 'C 视而不见：在简单任务上给他“完成”分以维持他的参赛资格。你不想承担因丢掉冠军而引发的流言卑语。' }, consequence: { en: '💀 Academic Decay. Other students notice the favoritism. You lose credibility. The player learns that being an athlete means rules don\'t apply to him. You failed your mission.', th: '💀 ความเสื่อมถอยทางวิชาการ! นักเรียนคนอื่นเห็นความลำเอียง คุณเสียความน่าเชื่อถือ เด็กเรียนรู้ว่าการเป็นนักกีฬาทำให้เหนือกฎเกณฑ์ คุณล้มเหลวในภารกิจความเป็นครู', zh: '💀 学术衰退。其他学生注意到了这种优待。你失去了公信力。球员学到，身为运动员意味着规则对他不适用。你辜负了自己的使命。' }, stats: { competence: 20, ethics: 10, leadership: 15, innovation: 10 } },
            { id: 'D', text: { en: '💻 Virtual Learning: Create a custom digital curriculum for him to complete while on the bus to games. No work, no play.', th: '💻 การเรียนออนไลน์: สร้างหลักสูตรดิจิทัลพิเศษให้เขาทำระหว่างนั่งรถไปแข่ง ไม่ทำงานก็ไม่ได้ลงสนาม', zh: 'D 虚拟学习：为他量身定制一套数字课程，让他在去比赛的车上完成。不干活就没比赛。' }, consequence: { en: '🌟 Innovation Streak! You use technology to solve the time-management issue. Other teachers adopt your "Athletic Learning Modules." You are seen as a pioneer.', th: '🌟 ประกายแห่งนวัตกรรม! คุณใช้เทคโนโลยีแก้ปัญหาการจัดการเวลา ครูคนอื่นนำ "มอดูลการเรียนสำหรับนักกีฬา" ของคุณไปใช้ คุณถูกมองว่าเป็นผู้บุกเบิก', zh: '🌟 创新迸发！你利用技术解决了时间管理问题。其他老师也采用了你的“运动员学习模块”。你被视为先锋。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 } }
        ]
    },

    {
        id: 'te_046',
        text: {
            en: '🛡️ The Metal Detector Debate: After a local scare, the school installs metal detectors. The atmosphere feels like a prison. Students are late to class every day. Parents are split. The administration asks your opinion in a public meeting.',
            th: '🛡️ ข้อถกเถียงเรื่องเครื่องตรวจโลหะ: หลังจากมีเหตุการณ์น่าตกใจในพื้นที่ โรงเรียนติดตั้งเครื่องตรวจโลหะ บรรยากาศเหมือนคุกเลย นักเรียนมาสายทุกวัน ผู้ปกครองเสียงแตก ฝ่ายบริหารขอความเห็นคุณในที่ประชุมสาธารณะ',
            zh: '🛡️ 金属探测器争论：在发生一次当地恐慌后，学校安装了金属探测器。气氛感觉像监狱。学生们每天上课都迟到。家长们意见分歧。校方在公开会议上询问你的意见。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Safety First: "I support the measures. A secure environment is necessary for learning. We will adjust our schedules to accommodate the delays."', th: '🛡️ ความปลอดภัยต้องมาก่อน: "ฉันสนับสนุนมาตรการนี้ สภาพแวดล้อมที่ปลอดภัยจำเป็นต่อการเรียนรู้ เราจะปรับตารางเวลาเพื่อรองรับความล่าช้าเอง"', zh: 'A 安全第一：“我支持这些措施。安全的环境对学习至关重要。我们将调整时间表以适应延迟。”' }, consequence: { en: '⚖️ Cautious Security. The detectors stay. The school feels safer, but morale is lower. You are seen as reliable and pro-administration.', th: '⚖️ ความปลอดภัยที่ระแวดระวัง เครื่องตรวจยังอยู่ โรงเรียนดูปลอดภัยขึ้นแต่ขวัญกำลังใจลดลง คุณถูกมองว่าพึ่งพาได้และอยู่ฝั่งบริหาร', zh: '⚖️ 谨慎的安保。探测器保留了下来。学校感觉更安全了，但士气较低。你被视为可靠且支持行政部门。' }, stats: { competence: 40, ethics: 35, leadership: 45, innovation: 15 } },
            { id: 'B', text: { en: '🕊️ Focus on Wellness: "Detectors treat children like criminals. We should invest in more counselors and mental health support instead. Let’s remove the bars."', th: '🕊️ เน้นเรื่องสุขภาพจิต: "เครื่องตรวจทรีตเด็กเหมือนอาชญากร เราควรลงทุนกับที่ปรึกษาและสุขภาพจิตมากกว่า มาเอากรงออกกันเถอะ"', zh: 'B 专注于健康：“探测器把孩子当成犯人。我们应该转而投资更多的辅导员和心理健康支持。让我们拆掉栅栏吧。”' }, consequence: { en: '✅ Student Advocacy. You gain massive trust from students. The board eventually compromises by adding more staff. You led a movement for a more humane school culture.', th: '✅ ตัวแทนนักเรียน! คุณได้รับความไว้วางใจมหาศาลจากเด็กๆ สุดท้ายบอร์ดประนีประนอมด้วยการเพิ่มเจ้าหน้าที่ คุณเป็นผู้นำการเคลื่อนไหวเพื่อวัฒนธรรมโรงเรียนที่มีความเป็นมนุษย์มากขึ้น', zh: '✅ 学生支持。你赢得了解生的极大信任。董事会最终通过增加人员配置做出了妥协。你领导了一场争取更人性化学校文化的运动。' }, stats: { competence: 35, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🤐 Stay Neutral: "It’s a complex issue. I will implement whatever the board decides as long as I can still teach my subject."', th: '🤐 วางตัวเป็นกลาง: "มันเป็นเรื่องซับซ้อนค่ะ ฉันจะทำตามที่บอร์ดตัดสินใจตราบใดที่ฉันยังได้สอนวิชาของฉันอยู่"', zh: 'C 保持中立：“这是一个复杂的问题。只要我还能教我的课，我会执行董事会的任何决定。”' }, consequence: { en: '⚠️ Leadership Failure. Both sides view you as indecisive. You missed an opportunity to influence the school’s future. You are safe but irrelevant.', th: '⚠️ ล้มเหลวในภาวะผู้นำ ทั้งสองฝ่ายมองว่าคุณลังเล คุณพลาดโอกาสในการกำหนดอนาคตของโรงเรียน คุณปลอดภัยแต่ไม่มีความหมาย', zh: 'C 领导力失败。双方都认为你优柔寡断。你错失了影响学校未来的机会。你安全了，但无关紧要。' }, stats: { competence: 30, ethics: 20, leadership: 15, innovation: 10 } },
            { id: 'D', text: { en: '🔄 Modern Tech: "Traditional detectors are slow. Let’s pilot an AI-based passive scanning system that identifies threats without lines or stops."', th: '🔄 เทคโนโลยีสมัยใหม่: "เครื่องตรวจแบบเดิมมันช้า มาลองใช้ระบบสแกน AI ที่ตรวจจับภัยคุกคามได้โดยไม่ต้องต่อแถวหยุดรอดีกว่า"', zh: 'D 现代科技：“传统的探测器很慢。让我们试点一套基于AI的被动扫描系统，无需排队或停留即可识别威胁。”' }, consequence: { en: '🌟 Tech Visionary. The district loves the innovative suggestion. You help secure a grant for the new tech. The school stays safe AND efficient. You are a genius.', th: '🌟 วิสัยทัศน์ไอที! เขตการศึกษาชอบไอเดียสร้างสรรค์นี้มาก คุณช่วยหาทุนซื้อเทคโนโลยีใหม่ได้ โรงเรียนปลอดภัย "และ" มีประสิทธิภาพ คุณคืออัจฉริยะ', zh: 'D 科技愿景。学区非常喜欢这个创新的建议。你帮忙争取到了一笔购买新科技的拨款。学校既安全又高效。你是个天才。' }, stats: { competence: 45, ethics: 40, leadership: 45, innovation: 60 } }
        ]
    },

    {
        id: 'te_047',
        text: {
            en: '🤐 The Teacher’s Lounge Leak: In the breakroom, a senior colleague is gossiping about a student’s "problematic" mother, calling her a "nightmare" and laughing at her financial struggles. Other teachers are joining in.',
            th: '🤐 คำนินทาในห้องรับรองครู: ในห้องพักครู เพื่อนร่วมงานอาวุโสกำลังนินทาแม่ของนักเรียนคนหนึ่งว่าเป็น "ตัวปัญหา" เป็น "ฝันร้าย" และหัวเราะเยาะเรื่องปัญหาการเงินของเธอ ครูคนอื่นเริ่มผสมโรงด้วย',
            zh: '🤐 教师休息室的泄密：在休息室里，一位老同事正在八卦一名学生的“问题”母亲，称她为“噩梦”，并嘲笑她的经济困境。其他老师也加入了进来。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Professional Shutdown: "This conversation is unprofessional and hurtful to the student. Let’s focus on how we can support the family instead of mocking them."', th: '🚫 หยุดการกระทำที่ไร้วิชาชีพ: "การคุยแบบนี้ไม่เป็นมืออาชีพและทำร้ายจิตใจนักเรียนนะคะ เรามาโฟกัสว่าจะช่วยครอบครัวเขายังไงดีกว่าละเลยที่จะล้อเลียนพวกเขา"', zh: 'A 职业化的制止：“这种谈话既不专业又会伤害到学生。让我们专注于如何支持这个家庭，而不是嘲笑他们。”' }, consequence: { en: '✅ Ethical Pillar. The room goes quiet. Most teachers feel ashamed and stop. The senior colleague is annoyed at you, but the culture of the lounge shift toward respect.', th: '✅ เสาหลักแห่งจริยธรรม! ห้องเงียบกริบ ครูส่วนใหญ่รู้สึกละอายและหยุด เพื่อนร่วมงานอาวุโสอาจรำคาญคุณ แต่วัฒนธรรมในห้องพักครูเปลี่ยนไปในทางที่เคารพกันมากขึ้น', zh: 'A 伦理支柱。房间里安静了下来。大多数老师感到羞愧并停了下来。那位老同事对你很恼火，但休息室的文化转向了尊重。' }, stats: { competence: 40, ethics: 55, leadership: 45, innovation: 20 } },
            { id: 'B', text: { en: '🤝 Pivot the Subject: "Speaking of that student, I noticed they are doing great in Biology. Maybe we should focus on their strengths?"', th: '🤝 เปลี่ยนประเด็น: "พูดถึงเด็กคนนี้พอดี ฉันสังเกตว่าเขาเรียนชีววิทยาเก่งมากนะ เราลองมาดูจุดแข็งของเขาดีไหมคะ?"', zh: 'B 转移话题：“说到那个学生，我发现他们的生物学得很好。也许我们应该关注他们的长处？”' }, consequence: { en: '⚖️ Diplomatic Redirect. You stopped the mocking without causing direct conflict. It’s effective but doesn’t address the underlying toxicity.', th: '⚖️ การเปลี่ยนทิศทางอย่างมีชั้นเชิง! คุณหยุดการล้อเลียนได้โดยไม่ทำให้ขัดแย้งโดยตรง มันได้ผลแต่ไม่ได้แก้เรื่องนิสัยเสียที่ต้นเหตุ', zh: 'B 外交式的重定向。你在没有引发直接冲突的情况下停止了嘲笑。这很有效，但没有解决潜在的有毒氛围。' }, stats: { competence: 35, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '🤐 Stay Silent: Keep your head down and drink your coffee. It’s not worth making enemies with senior staff over gossip.', th: '🤐 นิ่งเงียบไว้: ก้มหน้าก้มตาจิบกาแฟไป ไม่คุ้มที่จะสร้างศัตรูกับคนเก่าแก่เพียงเพราะเรื่องนินทา', zh: 'C 保持沉默：埋头喝你的咖啡。为了八卦而得罪资深员工不值得。' }, consequence: { en: '⚠️ Complicit Silence. You feel dirty afterwards. You know the student deserves better. You prioritized social comfort over student advocacy.', th: '⚠️ ความเงียบที่สมรู้ร่วมคิด! คุณรู้สึกแย่กับตัวเองหลังจากนั้น คุณรู้ว่านักเรียนควรได้รับสิ่งที่ดีกว่านี้ คุณเลือกความสบายใจในสังคมมากกว่าการปกป้องเด็ก', zh: '⚠️ 同谋般的沉默。事后你感到很龌龊。你知道那个学生应该得到更好的对待。你为了社交上的舒适而放弃了对学生的提倡。' }, stats: { competence: 30, ethics: 20, leadership: 15, innovation: 10 } },
            { id: 'D', text: { en: '📢 Inform the Principal: Report the unprofessional conduct to the Principal later. This behavior shouldn’t be tolerated.', th: '📢 รายงานอาจารย์ใหญ่: ไปรายงานพฤติกรรมที่ไม่เป็นมืออาชีพให้อาจารย์ใหญ่ทราบทีหลัง พฤติกรรมแบบนี้ไม่ควรปล่อยไว้', zh: 'D 告知校长：稍后向校长报告这种不专业的行为。这种行为不应被容忍。' }, consequence: { en: '💀 Cultural Backlash. The teachers find out you reported them. You are now the "traitor teacher." You get excluded from meetings and lunches. High ethics, but your work life becomes a nightmare.', th: '💀 แรงสะท้อนกลับทางสังคม! ครูคนอื่นรู้ว่าคุณรายงานพวกเขา ตอนนี้คุณกลายเป็น "ครูคนทรยศ" คุณถูกกีดกันจากการประชุมและมื้อเที่ยง จริยธรรมสูงนะแต่ชีวิตการทำงานจะกลายเป็นนรก', zh: 'D 文化反噬。老师们发现你举报了他们。你现在成了“叛徒老师”。你被排除在会议和午餐之外。职业道德虽高，但你的工作生活变成了噩梦。' }, stats: { competence: 20, ethics: 50, leadership: 20, innovation: 10 } }
        ]
    },

    {
        id: 'te_021',
        text: {
            en: '📚 The Banned Book: You assign a classic novel that contains mature themes. A parent group labels it"inappropriate"and demands it be removed. The book is critical to the curriculum. The Principal is hesitant.',
            th: '📚 หนังสือต้องห้าม: คุณมอบหมายให้อ่านนวนิยายคลาสสิกที่มีเนื้อหาสำหรับผู้ใหญ่ กลุ่มผู้ปกครองระบุว่า"ไม่เหมาะสม"และเรียกร้องให้ถอดออก หนังสือเล่มนี้สำคัญต่อหลักสูตร อาจารย์ใหญ่ลังเล',
            zh: '📚 禁书：你布置了一本包含成人主题的经典小说。一个家长团体将其标记为“不当”并要求将其移除。这本书对课程至关重要。校长对此犹豫不决。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📜 Academic Defense:"I will write a formal defense citing educational standards and university requirements. We don\'t ban ideas here; we discuss them."',
                    th: '📜 การป้องกันทางวิชาการ:"ฉันจะเขียนคำชี้แจงอย่างเป็นทางการโดยอ้างอิงมาตรฐานการศึกษาและข้อกำหนดของมหาวิทยาลัย เราไม่แบนความคิดที่นี่ แต่เราถกเถียงกัน"',
                    zh: '📜 学术辩护：“我将撰写一份正式辩护，引用教育标准和大学要求。在这里我们不禁止思想；我们讨论它们。”'
                },
                consequence: {
                    en: '✅ Intellectual Win. Ideally, the board sides with you. The controversy actually makes students MORE interested in reading the book. You are seen as a defender of intellect. However, some parents remain hostile.',
                    th: '✅ ชนะทางปัญญา ในอุดมคติ บอร์ดเข้าข้างคุณ ความขัดแย้งทำให้นักเรียนสนใจอ่านหนังสือมากขึ้น คุณถูกมองว่าเป็นผู้ปกป้องปัญญา อย่างไรก็ตาม ผู้ปกครองบางคนยังคงเป็นศัตรู',
                    zh: '✅ 智力胜利。理想情况下，董事会支持你。争议反而让学生对阅读这本书更感兴趣。你被视为理智的捍卫者。然而，一些家长仍然充满敌意。'
                },
                stats: { competence: 45, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Alternative Option:"I value parental choice. I will offer an alternative book for students whose parents object, but the original stands for the rest."',
                    th: '🔄 ทางเลือกสำรอง:"ฉันเคารพทางเลือกของผู้ปกครอง ฉันจะเสนอหนังสือทางเลือกสำหรับนักเรียนที่พ่อแม่ไม่เห็นด้วย แต่เล่มเดิมยังคงอยู่สำหรับคนที่เหลือ"',
                    zh: '🔄 替代选项：“我尊重家长的选择。我将为家长反对的学生提供一本替代书籍，但其他人照旧。”'
                },
                consequence: {
                    en: '✅ Diplomatic Peace. The parents are satisfied they have a choice. The censorship crisis is averted. However, it creates extra work for you to teach two novels at once.',
                    th: '✅ สันติภาพทางการทูต ผู้ปกครองพอใจที่มีทางเลือก วิกฤตการเซ็นเซอร์ถูกหลีกเลี่ยง อย่างไรก็ตาม มันสร้างงานเพิ่มให้คุณที่ต้องสอนนวนิยายสองเล่มพร้อมกัน',
                    zh: '✅ 外交和平。家长们对有选择权感到满意。审查危机得以避免。然而，同时教授两本小说给你增加了额外的工作量。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Remove the Book:"I\'ll replace it with something safer. It\'s not worth the job security risk."',
                    th: '🤐 ถอดหนังสือออก:"ฉันจะเปลี่ยนเป็นเล่มที่ปลอดภัยกว่า มันไม่คุ้มกับความเสี่ยงเรื่องความมั่นคงในงาน"',
                    zh: '🤐 撤下书籍：“我会换一本更安全的书。为了这份工作去冒险不值得。”'
                },
                consequence: {
                    en: '⚠️ Standard Dropped. The curriculum is watered down. Students notice you caved and lose some respect for your intellectual bravery. You are safe, but the education quality suffers.',
                    th: '⚠️ มาตรฐานตกต่ำ หลักสูตรถูกลดทอนความเข้มข้น นักเรียนเห็นว่าคุณยอมแพ้และลดความเคารพในความกล้าหาญทางปัญญาของคุณ คุณปลอดภัย แต่คุณภาพการศึกษาแย่ลง',
                    zh: '⚠️ 标准下降。课程被淡化。学生们注意到你屈服了，对你的智力勇气的尊重减少了。你是安全的，但教育质量受损。'
                },
                stats: { competence: 25, ethics: 20, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Media Leak: Anonymously tip off the local news about the"book ban attempt"to rally public support.',
                    th: '📢 ปล่อยข่าวสื่อ: แอบแจ้งข่าวท้องถิ่นแบบนิรนามเกี่ยวกับ"ความพยายามแบนหนังสือ"เพื่อระดมเสียงสนับสนุนจากสาธารณะ',
                    zh: '📢 媒体泄密：匿名向当地新闻爆料“禁书企图”，以争取公众支持。'
                },
                consequence: {
                    en: '⚠️ Chaos. The school is swarmed by reporters. The board is embarrassed and angry. They might save the book to save face, but they will hunt for the leaker. High risk.',
                    th: '⚠️ ความโกลาหล โรงเรียนถูกนักข่าวรุมล้อม บอร์ดอับอายและโกรธ พวกเขาอาจเก็บหนังสือไว้เพื่อรักษาหน้า แต่พวกเขาจะตามล่าตัวคนปล่อยข่าว ความเสี่ยงสูง',
                    zh: '⚠️ 混乱。学校被记者包围。董事会既尴尬又愤怒。为了面子他们可能会保留这本书，但他们会追查泄密者。高风险。'
                },
                stats: { competence: 30, ethics: 30, leadership: 25, innovation: 40 }
            }
        ]
    },

    {
        id: 'te_022',
        text: {
            en: '💻 The Cyber-Bullying Ring: You discover a private Discord server where 10 of your male students are rating girls in the class on their appearance in a vile way. It\'s technically off-campus, but it\'s affecting the classroom atmosphere.',
            th: '💻 แก๊งไซเบอร์บูลลี่: คุณค้นพบเซิร์ฟเวอร์ Discord ส่วนตัวที่นักเรียนชาย 10 คนในห้องกำลังให้คะแนนรูปร่างหน้าตาของเด็กผู้หญิงในทางที่เลวร้าย ทางเทคนิคแล้วมันอยู่นอกโรงเรียน แต่มันกระทบบรรยากาศในห้องเรียน',
            zh: '💻 网络欺凌圈子：你发现了一个私人Discord服务器，你班上的10名男生在里面以一种恶劣的方式对班上女生的外貌进行评分。严格来说这是校外行为，但它正在影响课堂气氛。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Zero Tolerance:"I am reporting this to the administration and parents immediately. This constitutes sexual harassment and creates a hostile environment."',
                    th: '🚨 ไม่ยอมความ:"ฉันจะรายงานเรื่องนี้ต่อฝ่ายบริหารและผู้ปกครองทันที นี่เข้าข่ายการล่วงละเมิดทางเพศและสร้างสภาพแวดล้อมที่เป็นปฏิปักษ์"',
                    zh: '🚨 零容忍：“我立即向行政部门和家长报告此事。这构成了性骚扰并造成了敌对环境。”'
                },
                consequence: {
                    en: '✅ Justice Served. The boys are suspended. The girls feel validated and safe knowing you protected them. The boys\' parents are angry, but the law is on your side. You set a precedent.',
                    th: '✅ ความยุติธรรมทำงาน เด็กผู้ชายถูกพักการเรียน เด็กผู้หญิงรู้สึกได้รับการยอมรับและปลอดภัยที่รู้ว่าคุณปกป้องพวกเธอ พ่อแม่เด็กผู้ชายโกรธ แต่กฎหมายอยู่ข้างคุณ คุณสร้างบรรทัดฐานใหม่',
                    zh: '✅ 正义得到伸张。这些男生被停学。女生们感到被认可并且很安全，因为知道你保护了她们。男生的父母很生气，但法律站在你这一边。你开创了一个先例。'
                },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '💬 Restorative Justice:"We will have a closed-door session. The boys must read their comments aloud in front of their mothers. Then, we discuss respect."',
                    th: '💬 ความยุติธรรมเชิงสมานฉันท์:"เราจะมีเซสชันปิดประตู เด็กผู้ชายต้องอ่านคอมเมนต์ของตัวเองให้แม่ของพวกเขาฟัง จากนั้นเราจะคุยเรื่องความเคารพ"',
                    zh: '💬 恢复性正义：“我们将举行一次闭门会议。男生们必须在他们母亲面前大声朗读他们的评论。然后，我们讨论尊重。”'
                },
                consequence: {
                    en: '🌟 Moral Awakening. The shame is palpable. The boys break down and truly apologize. This is far more effective than suspension. You changed their hearts, not just their records.',
                    th: '🌟 การตื่นรู้ทางศีลธรรม ความอับอายเป็นสิ่งที่จับต้องได้ เด็กผู้ชายร้องไห้และขอโทษจากใจจริง นี่ได้ผลมากกว่าการพักการเรียนมาก คุณเปลี่ยนหัวใจพวกเขา ไม่ใช่แค่เปลี่ยนประวัติ',
                    zh: '🌟 道德觉醒。羞愧感显而易见。男生们崩溃了，真诚地道歉。这比停学有效得多。你改变了他们的心，而不仅仅是他们的记录。'
                },
                stats: { competence: 50, ethics: 45, leadership: 50, innovation: 45 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Ignore Off-Campus:"It\'s not on school wifi. It\'s not my jurisdiction. I can\'t police their private lives."',
                    th: '🤐 เมินเรื่องนอกโรงเรียน:"ไม่ได้ใช้ไวไฟโรงเรียน มันอยู่นอกเขตอำนาจฉัน ฉันไปคุมชีวิตส่วนตัวพวกเขาไม่ได้"',
                    zh: '🤐 忽视校外行为：“这不是在学校的WiFi上。不在我的管辖范围内。我不能监管他们的私生活。”'
                },
                consequence: {
                    en: '💀 Toxic Spillover. The environment becomes poisonous. The girls find out you knew and did nothing. They lose all trust. The culture of your class collapses.',
                    th: '💀 พิษร้ายลามเข้าห้อง บรรยากาศเป็นพิษ เด็กผู้หญิงรู้ว่าคุณรู้แต่ไม่ทำอะไร พวกเขาหมดความศรัทธา วัฒนธรรมในห้องเรียนของคุณพังทลาย',
                    zh: '💀 毒性蔓延。环境变得恶劣。女生们发现你知道却无动于衷。她们失去了所有的信任。你班级的文化崩溃了。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Inform Parents Quietly: Call the boys\' parents privately."Check your son\'s Discord. Handle it at home so the school doesn\'t have to involved police."',
                    th: '🤝 บอกผู้ปกครองเงียบๆ: โทรหาพ่อแม่เด็กผู้ชายเป็นการส่วนตัว"เช็ค Discord ลูกชายคุณหน่อยนะ จัดการกันที่บ้านเถอะ โรงเรียนจะได้ไม่ต้องเรียกตำรวจ"',
                    zh: '🤝 悄悄通知家长：私下给男生的父母打电话。“检查一下你儿子的Discord。在家里处理好，免得学校不得不让警察介入。”'
                },
                consequence: {
                    en: '⚠️ Partial Fix. Most parents handle it, but some deny it. The boys know you snitched but didn\'t punish them directly. They fear you but don\'t respect you.',
                    th: '⚠️ แก้ปัญหาครึ่งเดียว พ่อแม่ส่วนใหญ่จัดการ แต่บางคนปฏิเสธ เด็กผู้ชายรู้ว่าคุณฟ้องแต่ไม่ได้ลงโทษเอง พวกเขากลัวคุณแต่ไม่เคารพคุณ',
                    zh: '⚠️ 部分修复。大多数父母处理了，但有些人否认。男生们知道你告密了但没有直接惩罚他们。他们怕你但不尊重你。'
                },
                stats: { competence: 30, ethics: 30, leadership: 25, innovation: 20 }
            }
        ]
    },

    {
        id: 'te_023',
        text: {
            en: '🕒 The Late Bloomer: A student, Sam, has failed every test all year. Suddenly, in the final unit, something clicks. He gets a 100% on the final exam. Mathematically, he still fails the year due to averaged zeros. Do you pass him?',
            th: '🕒 ดอกไม้บานช้า: แซม สอบตกทุกครั้งมาตลอดปี จู่ๆ ในบทสุดท้าย เขาก็เข้าใจทะลุปรุโปร่ง เขาได้ 100% ในสอบปลายภาค แต่ตามคณิตศาสตร์แล้ว เขายังคงสอบตกทั้งปีเพราะเฉลี่ยกับศูนย์ที่ผ่านมา คุณจะให้เขาผ่านไหม?',
            zh: '🕒 大器晚成：一名学生萨姆整年所有考试都不及格。突然，在最后一个单元，他开窍了。他在期末考试中得了100分。从数学上讲，由于平均了之前的零分，他这一年还是不及格。你让他过吗？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📈 Mastery Grading:"Grades reflect what you know NOW, not what you knew then. If you mastered the content, you pass. I will override the math."',
                    th: '📈 ให้คะแนนตามความรู้ปัจจุบัน:"เกรดสะท้อนสิ่งที่เรารู้ ตอนนี้ ไม่ใช่สิ่งที่เรารู้เมื่อก่อน ถ้าเธอเข้าใจเนื้อหาแล้ว เธอก็ผ่าน ครูจะแก้คะแนนให้"',
                    zh: '📈掌握程度评分：“分数反映的是你‘现在’知道什么，而不是那时知道什么。如果你掌握了内容，你就通过。我会覆盖数学计算结果。”'
                },
                consequence: {
                    en: '✅ Life Changed. Sam graduates. He realizes he isn\'t"stupid,"just slow to start. He goes on to college. You prioritized learning over bureaucracy. A triumph of pedagogy.',
                    th: '✅ เปลี่ยนชีวิต แซมเรียนจบ เขาตระหนักว่าเขาไม่ได้"โง่"แค่เครื่องติดช้า เขาได้ไปต่อมหาลัย คุณเลือกการเรียนรู้มากกว่าระบบราชการ ชัยชนะของการสอน',
                    zh: '✅ 人生改变。萨姆毕业了。他意识到自己不是“笨”，只是起步慢。他上了大学。你将学习置于官僚主义之上。这是教学法的胜利。'
                },
                stats: { competence: 50, ethics: 45, leadership: 40, innovation: 45 }
            },
            {
                id: 'B',
                text: {
                    en: '🔢 The Math is Law:"I can\'t ignore 9 months of failure. It wouldn\'t be fair to students who worked hard all year. You must retake the class."',
                    th: '🔢 คณิตศาสตร์คือกฎหมาย:"ครูจะเมินความล้มเหลว 9 เดือนไม่ได้ มันไม่แฟร์กับคนที่ขยันมาทั้งปี เธอต้องเรียนซ้ำ"',
                    zh: '🔢 数学即法律：“我不能忽视9个月的失败。这对整年努力学习的学生不公平。你必须重修这门课。”'
                },
                consequence: {
                    en: '💀 Hope Crushed. Sam drops out. He proved he knew the material but the system rejected him. He hates education forever. You followed policy but failed the human.',
                    th: '💀 ทำลายความหวัง แซมลาออก เขาพิสูจน์แล้วว่าเขารู้เรื่องแต่ระบบปฏิเสธเขา เขาเกลียดการศึกษาไปตลอดชีวิต คุณทำตามนโยบายแต่ล้มเหลวในความเป็นคน',
                    zh: '💀 希望破灭。萨姆辍学了。他证明了他掌握了材料，但系统拒绝了他。他永远恨教育。你遵循了政策，但辜负了这个人。'
                },
                stats: { competence: 20, ethics: 15, leadership: 15, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The Compromise:"I\'ll give you a D-. Just enough to pass, but not enough to hurt the GPA ranking of others."',
                    th: '🤝 ทางสายกลาง:"ครูจะให้ D- เธอ แค่พอให้ผ่าน แต่ไม่สูงพอที่จะไปกระทบอันดับเกรดของคนอื่น"',
                    zh: '🤝 妥协：“我会给你一个D-。刚好通过，但不至于损害其他人的GPA排名。”'
                },
                consequence: {
                    en: '⚠️ Mercy Pass. Sam passes, but the D- hurts his transcript. It\'s a kindness, but slightly underhanded. You bent the rules quietly.',
                    th: '⚠️ ให้ผ่านด้วยความเมตตา แซมผ่าน แต่ D- ทำให้ใบเกรดเขาไม่สวย มันคือความใจดีแต่แอบทำลับหลัง คุณบิดกฎนิดหน่อย',
                    zh: '⚠️ 仁慈通过。萨姆通过了，但D-损害了他的成绩单。这是一种善意，但有点偷偷摸摸。你悄悄地通融了规则。'
                },
                stats: { competence: 35, ethics: 30, leadership: 25, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 Summer School:"You know the material now, so Summer School will be easy. Go prove it there to get the credit officially."',
                    th: '🔄 เรียนภาคฤดูร้อน:"ตอนนี้เธอรู้เรื่องแล้ว ดังนั้นซัมเมอร์นี้คงหมูๆ ไปพิสูจน์ตัวเองที่นั่นเพื่อเอาหน่วยกิตอย่างเป็นทางการนะ"',
                    zh: '🔄 暑期班：“你现在掌握了材料，所以暑期班会很容易。去那里证明自己以正式获得学分。”'
                },
                consequence: {
                    en: '⚠️ Bureaucratic Hurdle. Sam is annoyed. He has to pay for summer school and waste time re-learning what he just aced. He might not show up. It\'s a risky bet.',
                    th: '⚠️ อุปสรรคระบบราชการ แซมรำคาญ เขาต้องจ่ายค่าเรียนซัมเมอร์และเสียเวลาเรียนซ้ำสิ่งที่เขาเพิ่งทำได้เต็ม เขาอาจจะไม่มาเลย มันเป็นการเดิมพันที่เสี่ยง',
                    zh: '⚠️ 官僚障碍。萨姆很恼火。他必须支付暑期班费用，并浪费时间重新学习他刚刚拿了满分的内容。他可能根本不去。这是个冒险的赌注。'
                },
                stats: { competence: 30, ethics: 35, leadership: 20, innovation: 15 }
            }
        ]
    },

    {
        id: 'te_024',
        text: {
            en: '🎤 The Unprepared Observation: The Principal walks in for a surprise formal observation. You planned a relaxed"reading day"where students just sit and read. This looks like"lazy teaching"on the evaluation form. What do you do?',
            th: '🎤 การนิเทศที่ไม่ทันตั้งตัว: อาจารย์ใหญ่เดินเข้ามาเพื่อนิเทศการสอนแบบไม่บอกล่วงหน้า คุณวางแผนวันนี้เป็น"วันอ่านหนังสือ"สบายๆ ที่ให้นักเรียนแค่นั่งอ่านเฉยๆ นี่มันดูเหมือน"ครูขี้เกียจ"ในแบบประเมิน คุณจะทำยังไง?',
            zh: '🎤 措手不及的视察：校长突然走进来进行正式视察。你计划的是轻松的“阅读日”，学生们只是坐着阅读。这在评估表上看起来像“懒惰教学”。你怎么办？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎭 The Instant Pivot: Clap your hands."Okay class, reading time over! Let\'s immediately move to the Socratic Seminar discussion about Chapter 5!"(Improvise a high-energy lesson).',
                    th: '🎭 การพลิกแพลงทันที: ปรบมือ"เอาล่ะนักเรียน จบเวลาอ่าน! มาเริ่มการอภิปรายแบบโสเครติสเกี่ยวกับบทที่ 5 กันเลย!"(ด้นสดบทเรียนพลังสูง)',
                    zh: '🎭 即兴转向：拍拍手。“好了同学们，阅读时间结束！让我们立即开始关于第5章的苏格拉底式研讨会讨论！”（即兴上一堂高能量的课）。'
                },
                consequence: {
                    en: '🌟 Performance Art! The students are confused but play along. The Principal is impressed by the"rigor."You are exhausted by the adrenaline but you get a perfect score. You faked it and made it.',
                    th: '🌟 ศิลปะการแสดง! นักเรียนงงแต่ก็เล่นตามน้ำ อาจารย์ใหญ่ประทับใจใน"ความเข้มข้น"คุณเหนื่อยโฮกจากอะดรีนาลีนแต่ได้คะแนนเต็ม คุณแถจนรอด',
                    zh: '🌟 行为艺术！学生们很困惑，但配合了你。校长对“严谨性”印象深刻。你因肾上腺素飙升而精疲力竭，但你拿到了满分。你装模作样却成功了。'
                },
                stats: { competence: 50, ethics: 25, leadership: 45, innovation: 45 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Defend the Method: Whisper to Principal:"We are building sustained attention spans and reading endurance. Observe how focused they are. This is a critical skill."',
                    th: '🛡️ ปกป้องวิธีการ: กระซิบกับอาจารย์ใหญ่:"เรากำลังสร้างช่วงความสนใจที่ยั่งยืนและความอดทนในการอ่าน สังเกตสิครับว่าพวกเขามีสมาธิแค่ไหน นี่คือทักษะสำคัญนะ"',
                    zh: '🛡️ 捍卫方法：对校长耳语：“我们正在通过培养持续的注意力和阅读耐力。观察他们有多专注。这是一项关键技能。”'
                },
                consequence: {
                    en: '✅ Confidence Win. The Principal observes the silence and agrees. You proved that"quiet"isn\'t"lazy."You get a good review for classroom management.',
                    th: '✅ ชนะด้วยความมั่นใจ อาจารย์ใหญ่สังเกตความเงียบและเห็นด้วย คุณพิสูจน์ว่า"เงียบ"ไม่ได้แปลว่า"ขี้เกียจ"คุณได้รีวิวดีเรื่องการจัดการชั้นเรียน',
                    zh: '✅ 自信获胜。校长观察了安静的场面并表示同意。你证明了“安静”不是“懒惰”。你在课堂管理方面获得了好评。'
                },
                stats: { competence: 45, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '😬 Apologize later: Let them read. Email the Principal later explaining it was a"down day."Hope for mercy.',
                    th: '😬 ค่อยขอโทษทีหลัง: ปล่อยให้อ่านไป อีเมลหาอาจารย์ใหญ่ทีหลังอธิบายว่าเป็น"วันพัก"หวังว่าจะเมตตา',
                    zh: '😬 事后道歉：让他们读。稍后给校长发邮件解释这是“放松日”。祈求宽恕。'
                },
                consequence: {
                    en: '⚠️ Low Score. The Principal marks you as"Unsatisfactory"for Instruction. You have to undergo a performance improvement plan. Honesty didn\'t pay off this time.',
                    th: '⚠️ คะแนนต่ำ อาจารย์ใหญ่ให้คะแนน"ไม่ผ่าน"ในหัวข้อการสอน คุณต้องเข้าแผนปรับปรุงประสิทธิภาพ ความซื่อสัตย์ไม่ช่วยอะไรในครั้งนี้',
                    zh: '⚠️ 低分。校长在教学一项给你打了“不合格”。你必须执行绩效改进计划。这次诚实没有回报。'
                },
                stats: { competence: 20, ethics: 40, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '📝 Create Instant Worksheet: Quickly write 3 discussion questions on the board and make them write essay responses.',
                    th: '📝 สร้างใบงานด่วน: รีบเขียนคำถามอภิปลาย 3 ข้อบนกระดานและให้พวกเขาเขียนเรียงความตอบ',
                    zh: '📝 制作即时工作表：在黑板上快速写下3个讨论问题，让他们写论文回答。'
                },
                consequence: {
                    en: '⚠️ Busy Work. Students are annoyed at the sudden work. The Principal sees it looks unplanned. It\'s better than doing nothing, but barely.',
                    th: '⚠️ งานเผา นักเรียนรำคาญที่มีงานงอก อาจารย์ใหญ่ดูออกว่าไม่ได้เตรียมมา ดีกว่าไม่ทำอะไรนิดหน่อย',
                    zh: '⚠️ 忙碌的工作。学生们对突如其来的工作感到恼火。校长看出这像是没有计划的。这比什么都不做强，但也强不到哪去。'
                },
                stats: { competence: 30, ethics: 30, leadership: 25, innovation: 20 }
            }
        ]
    },

    {
        id: 'te_025',
        text: {
            en: '👕 The Dress Code Rebellion: A popular student, Chloe, wears a crop top that violates the dress code. The admin tells you to"dress code"her (send her to office). Chloe says,"Why are you sexualizing my body? It\'s just a stomach."',
            th: '👕 การต่อต้านระเบียบแต่งกาย: นักเรียนคนดัง โคลอี้ ใส่เสื้อเอวลอยซึ่งผิดระเบียบ ฝ่ายบริหารสั่งให้คุณ"จัดการ"เธอ (ส่งห้องปกครอง) โคลอี้สวนว่า"ทำไมครูต้องมองร่างกายหนูเป็นเรื่องเพศด้วย? มันก็แค่ท้อง"',
            zh: '👕 着装规范反抗：受欢迎的学生克洛伊穿了一件露脐上衣，违反了着装规范。行政部门让你“执行规范”（送她去办公室）。克洛伊说：“你为什么要性化我的身体？这只是肚子而已。”'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Private Logic:"Chloe, I agree the rule is outdated. But my job is to enforce it. Put on this jacket for today, and I will help you petition the student council to change the rule tomorrow."',
                    th: '🤝 ตรรกะส่วนตัว:"โคลอี้ ครูเห็นด้วยว่ากฎมันล้าหลัง แต่หน้าที่ครูคือต้องคุมกฎ ใส่แจ็คเก็ตนี้ก่อนวันนี้ แล้วพรุ่งนี้ครูจะช่วยเธอเขียนคำร้องสภานักเรียนเพื่อเปลี่ยนกฎ"',
                    zh: '🤝 私下讲理：“克洛伊，我同意这规则过时了。但我的工作是执行它。今天穿上这件夹克，明天我会帮你向学生会请愿修改规则。”'
                },
                consequence: {
                    en: '✅ Trust & Change. She respects the honesty. She covers up but starts a campaign. You guided her energy into civic action instead of rebellion. You kept your job and dignity.',
                    th: '✅ ความเชื่อใจและการเปลี่ยนแปลง เธอเคารพความจริงใจ เธอยอมปิดแต่เริ่มแคมเปญรณรงค์ คุณนำพลังของเธอไปสู่การขับเคลื่อนสังคมแทนการกบฏ คุณรักษาทั้งงานและศักดิ์ศรี',
                    zh: '✅ 信任与改变。她尊重这份诚实。她遮盖了一下，但发起了一场运动。你引导她的精力投入到公民行动而不是反叛中。你保住了工作和尊严。'
                },
                stats: { competence: 45, ethics: 45, leadership: 45, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '👮 Strict Enforcement:"Go to the office, Chloe. I don\'t make the rules, I just work here. Don\'t argue."',
                    th: '👮 บังคับใช้เคร่งครัด:"ไปห้องปกครอง โคลอี้ ครูไม่ได้ตั้งกฎ ครูแค่ทำงานที่นี่ อย่าเถียง"',
                    zh: '👮 严格执行：“去办公室，克洛伊。规则不是我定的，我只是在这儿工作。别争辩。”'
                },
                consequence: {
                    en: '⚠️ Resentment. Chloe goes, but she villainizes you on social media. The girls in class turn against you. You chose policy over rapport.',
                    th: '⚠️ ความขุ่นเคือง โคลอี้ไป แต่เธอโพสต์ด่าคุณเป็นตัวร้ายในโซเชียล เด็กผู้หญิงในห้องหันมาต่อต้านคุณ คุณเลือกนโยบายมากกว่าความสัมพันธ์',
                    zh: '⚠️ 怨恨。克洛伊去了，但她在社交媒体上把你妖魔化。班上的女生都反对你。你选择了政策而非融洽关系。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '👀 Selective Blindness: Pretend you don\'t see it. Compliment her work on the essay and ignore the shirt.',
                    th: '👀 แกล้งตาบอด: แกล้งทำเมิน ชมงานเขียนเรียงความของเธอและไม่ต้องสนเสื้อผ้า',
                    zh: '👀 选择性失明：假装没看见。称赞她的论文作业，无视那件衬衫。'
                },
                consequence: {
                    en: '⚠️ Risk of Reprimand. Another teacher reports her. The Principal yells at YOU for not catching it. Chloe thinks you\'re cool, but your boss thinks you\'re incompetent.',
                    th: '⚠️ เสี่ยงโดนตำหนิ ครูคนอื่นไปรายงาน อาจารย์ใหญ่ด่า คุณ ที่ไม่จัดการ โคลอี้คิดว่าคุณเจ๋ง แต่เจ้านายคิดว่าคุณไร้น้ำยา',
                    zh: '⚠️ 受训斥风险。另一位老师举报了她。校长因为你没有发现而对“你”大吼大叫。克洛伊觉得你很酷，但你的老板觉得你无能。'
                },
                stats: { competence: 20, ethics: 30, leadership: 25, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ Public Debate:"Interesting point, Chloe. Class, let\'s pause. Does dress code promote professionalism or oppress expression? Let\'s discuss."',
                    th: '🗣️ ดีเบตกลางห้อง:"ประเด็นน่าสนใจนะโคลอี้ ทุกคนหยุดก่อน ระเบียบแต่งกายส่งเสริมความเป็นมืออาชีพหรือกดขี่การแสดงออก? มาคุยกัน"',
                    zh: '🗣️ 公开辩论：“有趣的观点，克洛伊。同学们，让我们暂停一下。着装规范是促进了职业素养还是压制了表达？让我们讨论一下。”'
                },
                consequence: {
                    en: '🌟 Teachable Moment. You diffuse the tension by making it academic. Chloe forgets to be angry and starts debating. Administration is annoyed you didn\'t send her out, but the pedagogy was solid.',
                    th: '🌟 นาทีทองของการสอน คุณสลายความตึงเครียดด้วยวิชาการ โคลอี้ลืมโกรธและเริ่มถกเถียง ฝ่ายบริหารรำคาญที่คุณไม่ไล่เธอออก แต่วิธีการสอนของคุณแน่นปึ้ก',
                    zh: '🌟 施教时刻。你通过将其学术化来化解紧张局势。克洛伊忘了生气，开始辩论。管理层对你没把她赶出去感到恼火，但教学法是扎实的。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 50 }
            }
        ]
    },

    {
        id: 'te_026',
        text: {
            en: '💰 The Wealth Gap Project: You assign a project requiring internet access and printing at home. A student, David, never turns it in. You realize later he is homeless and living in a car. How do you adjust?',
            th: '💰 ช่องว่างความรวย: คุณสั่งงานที่ต้องใช้อินเทอร์เน็ตและปริ้นต์งานจากที่บ้าน เดวิด ไม่เคยส่งงานเลย คุณมารู้ทีหลังว่าเขาโฮมเลสและอาศัยอยู่ในรถ คุณจะปรับเปลี่ยนอย่างไร?',
            zh: '💰 贫富差距项目：你布置了一个需要在家上网和打印的项目。学生大卫从未上交。你后来才意识到他是无家可归者，住在车里。你如何调整？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔄 Pivot to In-Class:"Change of plans, everyone. The project is now done 100% in class using school laptops. No homework."(Do this for everyone to hide David\'s situation).',
                    th: '🔄 ปรับมาทำในห้อง:"เปลี่ยนแผนนะทุกคน โปรเจกต์นี้จะทำในห้อง 100% โดยใช้แล็ปท็อปโรงเรียน ไม่มีการบ้าน"(ทำแบบนี้กับทุกคนเพื่อปกปิดสถานะของเดวิด)',
                    zh: '🔄 转向课内完成：“大家注意，计划有变。项目现在100%在课堂上使用学校笔记本电脑完成。没有家庭作业。”（对所有人这样做以掩盖大卫的情况）。'
                },
                consequence: {
                    en: '✅ Equity Champion. David can perform. He excels now that the barrier is gone. Other students are relieved to have no homework. You removed the"poverty penalty"without shaming anyone.',
                    th: '✅ แชมป์แห่งความเท่าเทียม เดวิดทำงานได้ เขาทำได้ดีเมื่ออุปสรรคหายไป เพื่อนคนอื่นก็โล่งใจที่ไม่มีการบ้าน คุณลบ"บทลงโทษความจน"โดยไม่ทำให้ใครอับอาย',
                    zh: '✅ 公平冠军。大 卫可以表现了。障碍消除后，他表现出色。其他学生也因没有家庭作业而如释重负。你在不羞辱任何人的情况下消除了“贫困惩罚”。'
                },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 45 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Private Exception: Pull David aside and tell him he can handwrite it and you\'ll accept it. Give him paper and pens.',
                    th: '🤝 ข้อยกเว้นส่วนตัว: เรียกเดวิดมาคุยแล้วบอกว่าให้เขาเขียนมือมาได้และคุณจะรับ ให้กระดาษและปากกาเขา',
                    zh: '🤝 私下例外：把大卫拉到一边，告诉他可以手写，你会接受。给他纸和笔。'
                },
                consequence: {
                    en: '⚠️ Functionally Okay. He does the work, but it looks"worse"than the printed ones, making him feel inferior. You solved the logistics but not the dignity issue.',
                    th: '⚠️ พอไปวัดไปวา เขาทำงานมา แต่มันดู"แย่กว่า"งานปริ้นต์ ทำให้เขารู้สึกด้อยกว่า คุณแก้เรื่องการส่งงานได้แต่แก้เรื่องศักดิ์ศรีไม่ได้',
                    zh: '⚠️ 功能上还可以。他做了作业，但看起来比打印的“差”，让他感到自卑。你解决了后勤问题，但没解决尊严问题。'
                },
                stats: { competence: 35, ethics: 35, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🏢 Resource Connection: Walk him to the library and introduce him to the librarian who can let him print for free before school.',
                    th: '🏢 เชื่อมต่อทรัพยากร: พาเขาไปห้องสมุดและแนะนำให้รู้จักบรรณารักษ์ที่สามารถให้เขาปริ้นต์งานฟรีตอนเช้าได้',
                    zh: '🏢 资源对接：带他去图书馆，把他介绍给图书管理员，管理员可以让他上学前免费打印。'
                },
                consequence: {
                    en: '✅ Practical Help. It helps him, but it requires him to come early, which might be hard living in a car. It\'s a good step but assumes he has transportation control.',
                    th: '✅ ความช่วยเหลือที่ใช้ได้จริง ช่วยเขาได้ แต่เขาต้องมาเช้าซึ่งอาจจะยากถ้าอยู่อาศัยในรถ เป็นก้าวที่ดีแต่ทึกทักเอาเองว่าเขาควบคุมการเดินทางได้',
                    zh: '✅ 实际帮助。这对也就是帮了他，但这要求他早到，这对住在车里的人来说可能很困难。这是好的一步，但前提是他能掌控交通。'
                },
                stats: { competence: 40, ethics: 40, leadership: 35, innovation: 25 }
            },
            {
                id: 'D',
                text: {
                    en: '📜 Grade Grace:"I\'ll just exempt you from this assignment, David. Don\'t worry about it."',
                    th: '📜 ยกเว้นเกรด:"ครูจะยกเว้นงานนี้ให้เธอแล้วกันเดวิด ไม่ต้องห่วงนะ"',
                    zh: '📜 评分宽限：“大卫，这个作业我就给你免了。别担心。”'
                },
                consequence: {
                    en: '⚠️ Soft bigotry. You expect less of him because he is poor. He learns less than the others. He needs skills, not pity.',
                    th: '⚠️ ความใจดีที่ดูถูก คุณคาดหวังจากเขาน้อยเพราะเขาจน เขาได้เรียนรู้น้อยกว่าคนอื่น เขาต้องการทักษะ ไม่ใช่ความสงสาร',
                    zh: '⚠️ 软性偏见。你因为他穷而降低了对他的期望。他学到的比别人少。他需要技能，而不是怜悯。'
                },
                stats: { competence: 20, ethics: 25, leadership: 20, innovation: 15 }
            }
        ]
    },

    {
        id: 'te_027',
        text: {
            en: '🚨 The Active Shooter Drill: You are conducting a lockdown drill. The students are terrified. One 6-year-old starts crying uncontrollably and asking if"bad men"are coming. The protocol says"Total Silence."What do you do?',
            th: '🚨 ซ้อมหนีตายนกราดยิง: คุณกำลังซ้อมแผนล็อคดาวน์ นักเรียนกวัวมาก เด็ก 6 ขวบคนหนึ่งร้องไห้ไม่หยุดและถามว่า"คนร้าย"กำลังมาใช่ไหม ตามระเบียบระบุว่า"ต้องเงียบสนิท"คุณจะทำอย่างไร?',
            zh: '🚨 活跃枪手演习：你正在进行封锁演习。学生们吓坏了。一个6岁的孩子开始失控地大哭，问是不是“坏人”来了。协议规定“绝对安静”。你做什么？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '❤️ Comfort First: Break protocol. Whisper to him, hold his hand, and hum quietly to soothe him."It\'s just a game, let\'s be ninjas."',
                    th: '❤️ ปลอบโยนก่อน: แหกกฎ กระซิบกับเขา จับมือเขา และฮัมเพลงเบาๆ เพื่อปลอบ"มันแค่เกมลูก เรามาเป็นนินจากันเถอะ"',
                    zh: '❤️ 安慰优先：打破协议。对他耳语，握住他的手，轻声哼唱安抚他。“这只是个游戏，我们来当忍者。”'
                },
                consequence: {
                    en: '✅ Trauma Informed. He calms down. The silence is restored. You prioritized psychological safety over strict adherence. The Principal notices you"broke silence"but understands why.',
                    th: '✅ เข้าใจบาดแผลใจ เขาใจเย็นลง ความเงียบกลับมา คุณเลือกความปลอดภัยทางใจมากกว่าการเคร่งครัดกฎ อาจารย์ใหญ่เห็นว่าคุณ"ไม่เงียบ"แต่เข้าใจเหตุผล',
                    zh: '✅ 创伤知情。他冷静下来了。安静恢复了。你将心理安全置于严格遵守之上。校长注意到你“打破了沉默”，但理解原因。'
                },
                stats: { competence: 40, ethics: 50, leadership: 35, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Strict Silence: Put a finger to your lips and ignore the crying to maintain the simulation\'s integrity. Silence saves lives.',
                    th: '🤐 เงียบกริบ: เอานิ้วแตะปากและเมินเสียงร้องไห้เพื่อรักษาความสมจริงของการซ้อม ความเงียบช่วยชีวิตคน',
                    zh: '🤐 严格安静：把手指放在嘴唇上，无视哭声，以维持演习的完整性。安静由于拯救生命。'
                },
                consequence: {
                    en: '⚠️ Emotional Damage. The child is traumatized and now hates school. Other students are distressed by his crying. You followed the rulebook but broke the child.',
                    th: '⚠️ บาดแผลทางอารมณ์ เด็กรู้สึกฝังใจและเกลียดโรงเรียน เพื่อนคนอื่นก็เครียดตามไปด้วย คุณทำตามคู่มือแต่ทำลายเด็ก',
                    zh: '⚠️ 情感伤害。孩子受到了创伤，现在讨厌上学。其他学生因他的哭声而感到苦恼。你遵守了规则书，但毁了孩子。'
                },
                stats: { competence: 35, ethics: 20, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 The Distraction: Pass him a tablet with headphones (muted) to watch a cartoon immediately.',
                    th: '🔄 การเบี่ยงเบนความสนใจ: ยื่นแท็บเล็ตพร้อมหูฟัง (ปิดเสียง) ให้เขาดูการ์ตูนทันที',
                    zh: '🔄 分散注意力：立刻给他一个带耳机（静音）的平板电脑看动画片。'
                },
                consequence: {
                    en: '🌟 Tactical Win. He stops crying instantly. Silence is maintained. You improvised a tool for crisis management. Smart.',
                    th: '🌟 ชัยชนะทางยุทธวิธี เขาหยุดร้องทันที ความเงียบยังคงอยู่ คุณประยุกต์ใช้เครื่องมือจัดการวิกฤต ฉลาดมาก',
                    zh: '🌟 战术胜利。他立刻停止了哭泣。保持了安静。你即兴创作了一种危机管理工具。聪明。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 End Drill: Open the door and yell"Drill Over!"because the student is in distress. Safety drill shouldn\'t cause panic.',
                    th: '📢 จบการซ้อม: เปิดประตูและตะโกนว่า"จบการซ้อม!"เพราะนักเรียนกำลังแย่ การซ้อมความปลอดภัยต้องไม่ทำให้แตกตื่น',
                    zh: '📢 结束演习：打开门大喊“演习结束！”，因为学生处于痛苦之中。安全演习不应引起恐慌。'
                },
                consequence: {
                    en: '💀 Safety Failure. You ruined the district-wide drill. The Principal is furious. You are reprimanded for endangering the school\'s preparedness status.',
                    th: '💀 ความล้มเหลวเรื่องความปลอดภัย คุณทำแผนซ้อมทั้งเขตพัง อาจารย์ใหญ่โกรธจัด คุณถูกตำหนิฐานทำให้ความพร้อมของโรงเรียนตกอยู่ในความเสี่ยง',
                    zh: '💀 安全失败。你搞砸了全学区的演习。校长大发雷霆。你因危害学校的备战状态而受到训诫。'
                },
                stats: { competence: 10, ethics: 30, leadership: 15, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_028',
        text: {
            en: '🏫 The Toxic Staff Lounge: You walk into the teachers\' lounge. A group of veteran teachers is loudly mocking a special needs student."He\'s so annoying, I can\'t stand him."Do you intervene?',
            th: '🏫 ห้องพักครูที่เป็นพิษ: คุณเดินเข้าห้องพักครู กลุ่มครูอาวุโสกำลังล้อเลียนเด็กพิเศษเสียงดัง"มันน่ารำคาญจะตาย ฉันล่ะทนไม่ไหว"คุณจะแทรกแซงไหม?',
            zh: '🏫 有毒的教工休息室：你走进教师休息室。一群资深教师正在大声嘲笑一名有特殊需求的学生。“他太烦人了，我受不了他。”你会介入吗？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Speak Up:"Hey, that\'s a kid we\'re talking about. It makes me uncomfortable to hear us talk about students like that."',
                    th: '🛡️ พูดออกไป:"เฮ้ย นั่นเรากำลังพูดถึงเด็กอยู่นะ ผมไม่สบายใจที่ได้ยินเราพูดถึงนักเรียนแบบนั้น"',
                    zh: '🛡️ 挺身而出：“嘿，我们在谈论的是个孩子。听到我们这样谈论学生让我感到不舒服。”'
                },
                consequence: {
                    en: '✅ Brave but Lonely. The room goes silent. They roll their eyes and stop inviting you to lunch. But you receive a quiet"thank you"from a younger teacher who was scared to speak. You shifted the culture.',
                    th: '✅ กล้าหาญแต่โดดเดี่ยว ห้องเงียบกริบ พวกเขามองบนและเลิกชวนคุณกินข้าวเที่ยง แต่คุณได้รับคำ"ขอบคุณ"เบาๆ จากครูรุ่นน้องที่ไม่กล้าพูด คุณได้เปลี่ยนวัฒนธรรมองค์กร',
                    zh: '✅ 勇敢但孤独。房间里鸦雀无声。他们翻白眼，不再叫你吃午饭。但你收到了一个不敢说话的年轻老师悄悄说的“谢谢”。你改变了文化。'
                },
                stats: { competence: 35, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🚪 Walk Out: Just leave the room immediately. Don\'t engage with toxicity.',
                    th: '🚪 เดินหนี: เดินออกจากห้องทันที อย่าไปยุ่งกับเความประสาทแดก',
                    zh: '🚪 走开：立即离开房间。不参与那种有害的讨论。'
                },
                consequence: {
                    en: '⚠️ Passive Compliance. You protected your own peace, but by saying nothing, you silently condoned the behavior. The bullying continues.',
                    th: '⚠️ ยอมจำนนทางอ้อม คุณรักษาความสงบใจตัวเอง แต่การไม่พูดอะไรคือการยอมรับพฤติกรรมนั้นลึกๆ การบูลลี่ยังดำเนินต่อไป',
                    zh: '⚠️ 消极顺从。你保护了自己的安宁，但通过保持沉默，你默许了这种行为。欺凌还在继续。'
                },
                stats: { competence: 25, ethics: 20, leadership: 15, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Reframe:"Actually, I found that if gives him a fidget spinner, he calms down. He\'s really sweet once you get his sensory needs met."',
                    th: '🤝 เปลี่ยนมุมมอง:"ที่จริง ผมพบว่าถ้าให้ Fidget Spinner เขา เขาจะนิ่งลงนะ เขาน่ารักมากถ้าเราตอบสนองความต้องการทางประสาทสัมผัสเขาได้"',
                    zh: '🤝 重塑观点：“其实，我发现如果给他一个指尖陀螺，他就会冷静下来。一旦满足了他的感官需求，他真的很可爱。”'
                },
                consequence: {
                    en: '🌟 Positive Influence. You didn\'t attack the teachers, you attacked the ignorance. They listen to your strategy. The tone shifts from mockery to problem-solving. Masterful social engineering.',
                    th: '🌟 อิทธิพลเชิงบวก คุณไม่ได้โจมตีครู แต่โจมตีความไม่รู้ พวกเขาฟังวิธีของคุณ บรรยากาศเปลี่ยนจากการล้อเลียนเป็นการแก้วปัญหา วิศวกรรมสังคมขั้นเทพ',
                    zh: '🌟积极影响。你没有攻击老师，你攻击的是无知。他们听取了你的策略。基调从嘲笑变成了解决问题。大师级的社会工程。'
                },
                stats: { competence: 45, ethics: 45, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '📝 Report: Record the conversation and send it to HR.',
                    th: '📝 รายงาน: อัดเสียงบทสนทนาแล้วส่งฝ่ายบุคคล',
                    zh: '📝 举报：录下对话并发送给人力资源部。'
                },
                consequence: {
                    en: '💀 Nuclear War. The teachers are reprimanded. They figure out it was you. You are now the"rat."Your life at school becomes miserable due to retaliation. High ethics, zero survival skills.',
                    th: '💀 สงครามนิวเคลียร์ ครูพวกนั้นถูกตำหนิ เขารู้ว่าเป็นคุณ ตอนนี้คุณคือ"หนอนบ่อนไส้"ชีวิตในโรงเรียนคุณบรรลัยแน่เพราะการแก้แค้น จริยธรรมสูง แต่สกิลเอาตัวรอดเป็นศูนย์',
                    zh: '💀 核战。老师们受到了训斥。他们猜出是你干的。你现在成了“告密者”。由于遭到报复，你在学校的生活变得悲惨。高职业道德，零生存技能。'
                },
                stats: { competence: 20, ethics: 40, leadership: 10, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_029',
        text: {
            en: '💰 The Teachers\' Strike: The union votes to strike for better pay and smaller class sizes. It will last 2 weeks. Your students have AP exams coming up. If you strike, they miss review. If you cross the picket line, you betray your colleagues.',
            th: '💰 การประท้วงหยุดงานของครู: สหภาพโหวตให้หยุดงานเพื่อเรียกร้องค่าจ้างและขนาดห้องเรียนที่ดีกว่า เป็นเวลา 2 สัปดาห์ นักเรียนคุณมีสอบ AP ใกล้เข้ามา ถ้าคุณหยุดงาน พวกเขาอดทบทวน ถ้าคุณฝ่าวงล้อมประท้วงเข้าไปสอน คุณทรยศเพื่อนร่วมงาน',
            zh: '💰 教师罢工：工会投票决定罢工，要求更高的工资和更小的班级规模。罢工将持续2周。你的学生即将通过AP考试。如果你罢工，他们就会错过复习。如果你越过纠察线，你就背叛了你的同事。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✊ Hold the Line:"I strike. Better working conditions attract better teachers, which helps students long-term. I can\'t undermine the union."',
                    th: '✊ ยืนหยัดประท้วง:"ฉันหยุดงาน สภาพงานที่ดีจะดึงดูดครูเก่งๆ ซึ่งช่วยนักเรียนในระยะยาว ฉันทำลายสหภาพไม่ได้"',
                    zh: '✊ 坚守阵线：“我罢工。更好的工作条件能吸引更好的老师，这对学生的长远发展有帮助。我不能破坏工会。”'
                },
                consequence: {
                    en: '⚖️ Short-term Pain, Long-term Gain. Students struggle on the AP exam. Parents are mad. But eventually, the strike wins raise. You kept your solidarity. Colleagues respect you deeply.',
                    th: '⚖️ เจ็บสั้นดีกว่าปวดนาน นักเรียนทำข้อสอบ AP ได้ลำบาก พ่อแม่โกรธ แต่สุดท้ายการประท้วงชนะได้ขึ้นเงินเดือน คุณรักษาความสามัคคี เพื่อนร่วมงานเคารพคุณมาก',
                    zh: '⚖️ 短痛换长利。学生在AP考试中很吃力。家长很生气。但最终，罢工赢得了加薪。你保持了团结。同事们深深地尊重你。'
                },
                stats: { competence: 30, ethics: 45, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🏫 Cross the Line:"My duty is to the kids in front of me, not the union politics. I will teach."',
                    th: '🏫 ฝ่าวงล้อม:"หน้าที่ฉันคือเด็กที่อยู่ตรงหน้า ไม่ใช่การเมืองสหภาพ ฉันจะสอน"',
                    zh: '🏫 越过纠察线：“我的职责是对面前的孩子负责，而不是工会政治。我要教书。”'
                },
                consequence: {
                    en: '⚠️ Scab! You teach, and your students get high scores. However, other teachers scream at you daily. You are ostracized in the teachers\' lounge for years. You are alone.',
                    th: '⚠️ ไอ้คนทรยศ! คุณสอนและเด็กได้คะแนนดี แต่ครูคนอื่นตะโกนด่าคุณทุกวัน คุณถูกแบนจากห้องพักครูเป็นปีๆ คุณโดดเดี่ยว',
                    zh: '⚠️ 工贼！你教书，你的学生拿了高分。然而，其他老师每天对你大喊大叫。你在教师休息室被排挤了数年。你是孤独的。'
                },
                stats: { competence: 45, ethics: 20, leadership: 15, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Secret Zoom Sessions:"I strike officially, but I will host voluntary, secret Zoom review sessions at night for my specific students."',
                    th: '💻 ซูมลับ:"ฉันหยุดงานอย่างเป็นทางการ แต่ฉันจะจัดติวผ่านซูมแบบสมัครใจและเป็นความลับตอนกลางคืนให้นักเรียนของฉัน"',
                    zh: '💻 秘密Zoom会议：“我在官方名义上罢工，但我会在晚上为我的特定学生举办自愿的、秘密的Zoom复习课。”'
                },
                consequence: {
                    en: '🌟 Double Win. You get the pay raise AND your students pass. You are exhausted from working double duty, but your conscience is clear. You fed the kids while fighting the war.',
                    th: '🌟 ชนะสองเด้ง คุณได้ขึ้นเงินเดือนและนักเรียนก็สอบผ่าน คุณเหนื่อยสายตัวแทบขาดจากการทำงานสองทาง แต่ใจคุณสบาย คุณป้อนข้าวให้ลูกในขณะที่ออกรบ',
                    zh: '🌟 双赢。你得到了加薪，你也通过了考试。双重任务让你精疲力竭，但你问心无愧。你在打仗的同时喂饱了孩子们。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Protest with Students: Invite students to join the picket line."Civics Lesson! Come learn how labor rights are won!"',
                    th: '📢 ประท้วงกับนักเรียน: เชิญนักเรียนมาร่วมเดินขบวน"บทเรียนหน้าที่พลเมือง! มาเรียนรู้วิธีเรียกร้องสิทธิแรงงานกัน!"',
                    zh: '📢 与学生一起抗议：邀请学生加入纠察线。“公民课！来学习劳工权利是如何赢得的！”'
                },
                consequence: {
                    en: '✅ Powerful Optics. The sight of students supporting teachers forces the board to settle early. The strike ends in 3 days. Students learn a real-world lesson. You are a legend.',
                    th: '✅ ภาพลักษณ์ทรงพลัง ภาพนักเรียนสนับสนุนครูบีบให้บอร์ดต้องรีบเจรจา การประท้วงจบใน 3 วัน นักเรียนได้เรียนรู้บทเรียนโลกความจริง คุณคือตำนาน',
                    zh: '✅ 强大的视觉效果。学生支持老师的景象迫使董事会提前和解。罢工3天就结束了。学生们学到了现实世界的一课。你是个传奇。'
                },
                stats: { competence: 40, ethics: 45, leadership: 50, innovation: 50 }
            }
        ]
    },

    {
        id: 'te_030',
        text: {
            en: '💔 The Divorce Fallout: A student\'s parents are going through a messy divorce. The father emails you constantly for updates on the mother\'s behavior. The mother tells you to block the father\'s email. You are caught in the middle.',
            th: '💔 ผลพวงการหย่าร้าง: พ่อแม่นักเรียนกำลังหย่าร้างกันแบบเละเทะ คนพ่อส่งอีเมลหาคุณตลอดเพื่อเช็คพฤติกรรมแม่ คนแม่บอกให้คุณบล็อกอีเมลพ่อ คุณอยู่ตรงกลาง',
            zh: '💔 离婚余波：一名学生的父母正在经历一场混乱的离婚。父亲不断给你发邮件询问母亲的行为。母亲让你屏蔽父亲的邮件。你被夹在中间。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Legal Neutrality:"I communicate only about the student\'s customized academic progress. I CC both parents on all emails. I will not discuss personal matters."',
                    th: '⚖️ เป็นกลางทางกฎหมาย:"ฉันสื่อสารเฉพาะเรื่องความก้าวหน้าทางการเรียนของนักเรียนเท่านั้น ฉันสำเนาถึงผู้ปกครองทั้งสองคนในทุกอีเมล ฉันจะไม่คุยเรื่องส่วนตัว"',
                    zh: '⚖️ 法律中立：“我只交流关于学生的定制化学术进展。所有邮件我都会抄送给双方家长。我不会讨论私事。”'
                },
                consequence: {
                    en: '✅ Ironclad Professionalism. It\'s annoying, but they can\'t manipulate you. You protect the student from being used as a pawn. The lawyers respect your clear boundaries.',
                    th: '✅ ความเป็นมืออาชีพที่แข็งแกร่ง มันน่ารำคาญ แต่พวกเขาปั่นหัวคุณไม่ได้ คุณปกป้องนักเรียนจากการถูกใช้เป็นเบี้ย ทนายความเคารพในขอบเขตที่ชัดเจนของคุณ',
                    zh: '✅ 铁一般的专业素养。这很烦人，但他们无法操纵你。你保护了学生不被当作棋子。律师尊重你清晰的界限。'
                },
                stats: { competence: 45, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Side with Custody: Ask the administration for the court order. Only communicate with the primary custodian.',
                    th: '🤝 เข้าข้างผู้ที่มีสิทธิ์ปกครอง: ขอคำสั่งศาลจากฝ่ายบริหาร สื่อสารเฉพาะกับผู้ปกครองหลักเท่านั้น',
                    zh: '🤝 站在监护权一方：向行政部门索要法院命令。只与主要监护人沟通。'
                },
                consequence: {
                    en: '⚠️ Risky bet. Custody changes. If you pick the wrong side, you get sued. The other parent feels alienated and attacks the school.',
                    th: '⚠️ เดิมพันเสี่ยง สิทธิ์ปกครองเปลี่ยนได้ ถ้าคุณเลือกผิดฝั่ง คุณโดนฟ้อง อีกฝ่ายรู้สึกแปลกแยกและโจมตีโรงเรียน',
                    zh: '⚠️ 冒险的赌注。监护权会变。如果你站错队，会被起诉。另一方家长感到被疏远并攻击学校。'
                },
                stats: { competence: 35, ethics: 30, leadership: 25, innovation: 15 }
            },
            {
                id: 'C',
                text: {
                    en: '❤️ Comfort the Student: Ignore the parents mostly. Focus on the kid."Hey, I know things are loud at home. My room is a quiet zone. You are safe here."',
                    th: '❤️ ปลอบนักเรียน: เมินพ่อแม่เป็นหลัก โฟกัสที่เด็ก"เฮ้ ครูรู้ว่าที่บ้านเสียงดัง ห้องครูเป็นโซนเงียบนะ เธอปลอดภัยที่นี่"',
                    zh: '❤️ 安慰学生：基本上无视家长。专注于孩子。“嘿，我知道家里很吵。我的房间是安静区。你在这儿很安全。”'
                },
                consequence: {
                    en: '✅ Emotional Sanctuary. The emails pile up, but the student feels loved. Grades stabilize. You provide the stability they lack at home.',
                    th: '✅ หลุมหลบภัยทางใจ อีเมลกองท่วม แต่เด็กราสึกได้รับความรัก เกรดนิ่งขึ้น คุณมอบความมั่นคงที่เขาหาไม่ได้จากที่บ้าน',
                    zh: '✅ 情感避难所。邮件堆积如山，但学生感受到了爱。成绩稳定下来。你提供了他们在家里得不到的稳定性。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Forward to Principal:"I am not paid enough for this. Principal, please handle all communication for this family."',
                    th: '📢 ส่งต่อให้อาจารย์ใหญ่:"เงินเดือนฉันไม่คุ้มกับเรื่องนี้ อาจารย์ใหญ่คะ ช่วยจัดการการสื่อสารทั้งหมดของครอบครัวนี้ทีค่ะ"',
                    zh: '📢 转给校长：“这点钱不值得我受这个罪。校长，请处理这个家庭的所有沟通。”'
                },
                consequence: {
                    en: '⚠️ Bureaucratic Solution. It works, but you lose connection with the family. The principal handles it coldly. You saved your sanity but lost your influence.',
                    th: '⚠️ ทางออกบบราชการ มันได้ผล แต่คุณเสียการเชื่อมต่อกับครอบครัว อาจารย์ใหญ่จัดการแบบเย็นชา คุณรักษาสุขภาพจิตได้แต่เสียอิทธิพล',
                    zh: '⚠️ 官僚解决方案。有效，但你失去了与家庭的联系。校长冷冷地处理了。你保住了理智，但失去了影响力。'
                },
                stats: { competence: 30, ethics: 25, leadership: 20, innovation: 15 }
            }
        ]
    },

    {
        id: 'te_031',
        text: {
            en: '🎤 The AI Academic Debate: You suspect several students used AI to write their final essays. The quality is too high, but plagiarism checkers show 0%. How do you proceed?',
            th: '🎤 ข้อพิพาทเรื่อง AI: คุณสงสัยว่านักเรียนหลายคนใช้ AI เขียนเรียงความส่ง เพราะคุณภาพสูงเกินจริง แต่เว็บตรวจการคัดลอกให้ 0% คุณจะทำอย่างไร?',
            zh: '🎤 AI 学术辩论：你怀疑有几名学生使用了 AI 来写期末论文。质量太高了，但抄袭检查器显示的重复率为 0%。你该如何处理？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕵️ Oral Defense: Require every student to do a 5-minute oral defense of their essay to prove they understand the content.',
                    th: '🕵️ สอบปากเปล่า: บังคับให้นักเรียนทุกคนสอบปากเปล่า 5 นาทีเกี่ยวกับเรียงความของตัวเองเพื่อพิสูจน์ความเข้าใจ',
                    zh: '🕵️ 口头答辩：要求每个学生对他们的论文进行 5 分钟的口头答辩，以证明他们理解其中的内容。'
                },
                consequence: {
                    en: '✅ Accountability. Most students struggle to explain the AI-generated parts. You catch the cheaters fairly. It takes time, but you preserve academic integrity.',
                    th: '✅ ความโปร่งใส นักเรียนส่วนใหญ่อธิบายส่วนที่ AI เขียนไม่ได้ คุณจับคนโกงได้คาหนังคาเขา แม้จะเสียเวลาแต่คุณรักษาศักดิ์ศรีทางวิชาการไว้ได้',
                    zh: '✅ 问责。大多数学生很难解释 AI 生成的部分。你公平地抓住了作弊者。这需要时间，但你维护了学术正直。'
                },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Adapt & Integrate: "AI is a tool. I will change the rubric to grade critical thinking and original voice instead of just grammar and structure."',
                    th: '🤝 ปรับตัวและใช้งาน: "AI คือเครื่องมือ ครูจะเปลี่ยนเกณฑ์การให้คะแนนไปที่การคิดวิจารณ์และสำเนียงการเขียนเฉพาะตัวแทนที่จะเป็นแค่แกรมม่า"',
                    zh: '🤝 适应与整合：“AI 是一种工具。我将修改评分标准，重点评价批判性思维和原创性见解，而不仅仅是语法和结构。”'
                },
                consequence: {
                    en: '🌟 Future Focused. Students learn to use AI responsibly. You are seen as a forward-thinking teacher. However, traditionalists in the school criticize you for "giving up."',
                    th: '🌟 มองการณ์ไกล นักเรียนได้เรียนรู้การใช้ AI อย่างรับผิดชอบ คุณถูกมองว่าเป็นครูนวัตกร แต่กลุ่มครูหัวเก่าอาจจะมองว่าคุณ "ยอมแพ้" ต่อเทคโนโลยี',
                    zh: '🌟 关注未来。学生们学会了负责任地使用 AI。你被看作是一个具有前瞻性的老师。然而，学校里的传统主义者批评你“放弃了”。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🚫 Zero Tolerance: Give everyone a C- and warn them that any future AI use will result in an automatic F.',
                    th: '🚫 ไม่ทนกับการโกง: ให้ C- ทุกคน และขู่ว่าถ้าเจอการใช้ AI อีกในอนาคตจะให้ F ทันที',
                    zh: '🚫 零容忍：给每个人 C-，并警告他们今后使用 AI 将导致自动不及格。'
                },
                consequence: {
                    en: '⚠️ Unfair Blanket. Honest students are furious and their parents call the principal. You lose trust with your class and fail to provide evidence of cheating.',
                    th: '⚠️ กราดโง่ นักเรียนที่ทำเองโกรธมากและพ่อแม่เขาก็โทรหาอาจารย์ใหญ่ คุณเสียความเชื่อใจจากเด็กๆ แถมยังไม่มีหลักฐานการโกงที่ชัดเจน',
                    zh: '⚠️ 不公平的一揽子处理。诚实的学生非常愤怒，他们的家长给校长打了电话。你失去了班级的信任，且未能提供作弊的证据。'
                },
                stats: { competence: 20, ethics: 20, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '📝 In-Class Re-write: Make the final essay an in-class, handwritten assignment from now on.',
                    th: '📝 เขียนสดในห้อง: เปลี่ยนให้การสอบเขียนเรียงความเป็นงานเขียนมือในห้องเรียนนับจากนี้เป็นต้นไป',
                    zh: '📝 课堂重写：从现在起，将期末论文改为课堂手写作业。'
                },
                consequence: {
                    en: '✅ Practical Fix. Cheating is eliminated. However, students with handwriting difficulties or anxiety suffer. It feels retrograde but effective.',
                    th: '✅ แก้ปัญหาได้จริง การโกงหมดไป แต่เด็กที่มีปัญหาเรื่องลายมือหรือมีความตื่นเต้นจะเสียเปรียบ มันดูถอยหลังเข้าคลองแต่ได้ผล',
                    zh: '✅ 实际解决。杜绝了作弊。然而，有书写困难或焦虑的学生会受苦。这感觉是倒退，但很有效。'
                },
                stats: { competence: 45, ethics: 40, leadership: 35, innovation: 15 }
            }
        ]
    },

    {
        id: 'te_032',
        text: {
            en: '🤫 The Student Secret: A student, Maya, tells you she is planning to drop out and work to support her family. She begs you not to tell the administration or her parents.',
            th: '🤫 ความลับของนักเรียน: มายา บอกคุณว่าเธอวางแผนจะลาออกไปทำงานช่วยครอบครัว เธอขอร้องไม่ให้คุณบอกฝ่ายบริหารหรือพ่อแม่ของเธอ',
            zh: '🤫 学生的秘密：一名学生玛雅告诉你，她打算辍学去工作，以补贴家用。她恳求你不要告诉校方或她的父母。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Professional Duty: Immediately inform the social worker and Maya\'s parents. "Dropout prevention is my priority."',
                    th: '🛡️ หน้าที่รับผิดชอบ: แจ้งนักสังคมสงเคราะห์และพ่อแม่ของมายาทันที "การป้องกันเด็กลาออกคือความสำคัญสูงสุดของฉัน"',
                    zh: '🛡️ 职业职责：立即通知社会工作者和玛雅的父母。“防止辍学是我的首要任务。”'
                },
                consequence: {
                    en: '⚠️ Broken Trust. Maya feels betrayed and stops talking to you entirely. The school provides some aid, but she feels humiliated. You saved her from dropping out but lost the connection.',
                    th: '⚠️ ทำลายความเชื่อใจ มายารู้สึกถูกทรยศและเลิกคุยกับคุณไปเลย โรงเรียนให้ความช่วยเหลือบ้างแต่เธอรู้สึกอับอาย คุณช่วยไม่ให้เขาลาออกได้แต่เสียความสัมพันธ์ไปแล้ว',
                    zh: '⚠️ 失去信任。玛雅感到被背叛，完全不再和你说话。学校提供了一些援助，但她感到羞耻。你阻止了她辍学，但失去了联系。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Resource Bridge: Help Maya find local scholarships or night-school options so she can stay in school while working.',
                    th: '🤝 สะพานแห่งโอกาส: ช่วยมายาหาทุนการศึกษาในท้องถิ่นหรือหาทางเลือกเรียนภาคค่ำ เพื่อให้เธอเรียนต่อได้ไปพร้อมกับทำงาน',
                    zh: '🤝 资源桥梁：帮助玛雅寻找当地奖学金或夜校选择，让她在工作的同时留在学校。'
                },
                consequence: {
                    en: '🌟 Life Changing. Maya finishes her degree while helping her family. She sees you as her greatest mentor. You solved the systemic problem without violating her privacy.',
                    th: '🌟 เปลี่ยนชีวิต มายาเรียนจบพร้อมกับช่วยที่บ้านได้ เธอเห็นคุณเป็นสุดยอดเมนเทอร์ คุณแก้ปัญหาเชิงโครงสร้างได้โดยไม่ล่วงเกินความเป็นส่วนตัวของเธอ',
                    zh: '🌟 改变生活。玛雅在帮助家人的同时完成了学业。她把你视为她最伟大的导师。你在不侵犯她隐私的情况下解决了系统性问题。'
                },
                stats: { competence: 50, ethics: 45, leadership: 50, innovation: 45 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Respect Privacy: Keep the secret. "It\'s her life and her choice."',
                    th: '🤐 เคารพความเป็นส่วนตัว: เก็บความลับไว้ "นั่นคือชีวิตและทางเลือกของเธอ"',
                    zh: '🤐 尊重隐私：保守秘密。“那是她的生活和她的选择。”'
                },
                consequence: {
                    en: '💀 Failure to Intervene. Maya drops out 2 months later. You wonder if you could have done more. The admin finds out you knew and didn\'t report it, leading to a reprimand.',
                    th: '💀 ล้มเหลวที่จะช่วย มายาลาออกในอีก 2 เดือนต่อมา คุณได้แต่สงสัยว่าตัวเองช่วยอะไรได้มากกว่านี้ไหม ฝ่ายบริหารรู้เข้าว่าคุณรู้แต่ไม่รายงาน คุณโดนตำหนิชุดใหญ่',
                    zh: '💀 未能干预。玛雅两个月后辍学了。你怀疑自己本可以做得更多。校方发现你知情未报，导致你受到了训诫。'
                },
                stats: { competence: 20, ethics: 30, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 The Parent Meeting: Convince Maya to let you host a meeting with her parents to explain the situation professionally.',
                    th: '🔄 นัดคุยกับพ่อแม่: โน้มน้าวให้มายายอมให้คุณจัดประชุมกับพ่อแม่เธอเพื่ออธิบายสถานการณ์อย่างเป็นมืออาชีพ',
                    zh: '🔄 家长会：说服玛雅让你安排一次与她父母的会议，以专业的方式解释情况。'
                },
                consequence: {
                    en: '✅ Middle Ground. The parents were unaware of Maya\'s stress. They find a way to make it work. It was a difficult conversation, but effective.',
                    th: '✅ ทางสายกลาง พ่อแม่ไม่เคยรู้เลยว่ามายาเครียดขนาดนี้ พวกเขาหาทางออกร่วมกันได้ การพูดคุยเป็นไปอย่างยากลำบากแต่ก็ได้ผลดี',
                    zh: '✅ 正折中方案。父母此前并不知道玛雅的压力。他们找到了解决办法。这是一次艰难的谈话，但很有效。'
                },
                stats: { competence: 40, ethics: 40, leadership: 45, innovation: 20 }
            }
        ]
    },

    {
        id: 'te_033',
        text: {
            en: '💰 The Donor Parent: A parent who just donated $50,000 for the new library demands that their son get a lead role in the school play, even though he failed the audition.',
            th: '💰 ผู้ปกครองสายเปย์: พ่อแม่นักเรียนที่เพิ่งบริจาคเงิน 1.5 ล้านบาทเพื่อสร้างห้องสมุดใหม่ เรียกร้องให้ลูกชายได้บทนำในละครโรงเรียน ทั้งที่เขาออดิชั่นตกรอบ',
            zh: '💰 捐赠者家长：一位刚刚为新图书馆捐赠了 5 万美元的家长要求让他们的儿子在学校戏剧中担任主角，尽管他没通过试镜。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Artistic Integrity: "No. Casting is based on merit. The donor status doesn\'t matter here."',
                    th: '⚖️ จรรยาบรรณศิลปิน: "ไม่ครับ การคัดตัวมาจากความสามารถ สถานะผู้บริจาคไม่มีผลที่นี่"',
                    zh: '⚖️ 艺术正直：“不行。选角是基于能力的。捐赠者的身份在这里不重要。”'
                },
                consequence: {
                    en: '✅ Integrity Win. The other students respect you deeply for your fairness. However, the donor is furious and pulls the funding. The Principal is stressed, but the theater department is proud.',
                    th: '✅ ชนะด้วยความซื่อสัตย์ นักเรียนคนอื่นเคารพคุณอย่างมากในความยุติธรรม แต่ผู้บริจาคโกรธจัดและถอนการสนับสนุน อาจารย์ใหญ่เครียดหนักแต่แผนกการละครภูมิใจในตัวคุณ',
                    zh: '✅ 正直获胜。其他学生由于你的公平而深深地尊重你。然而，捐赠者大发雷霆并撤回了资金。校长倍感压力，但戏剧部感到自豪。'
                },
                stats: { competence: 45, ethics: 50, leadership: 40, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Diplomatic Deal: Give him a secondary role with high visibility and call it "Dual Casting."',
                    th: '🤝 ข้อตกลงทางการทูต: ให้บทสมทบเด่นๆ กับเขาแล้วเรียกว่าเป็น "บทบาทคู่"',
                    zh: '🤝 外交交易：给他一个高曝光度的次要角色，并称之为“双重角选”。'
                },
                consequence: {
                    en: '✅ Peace Restored. The parent is satisfied. The play goes on with the funding. The lead student is a bit annoyed but it works out. You are a master of compromise.',
                    th: '✅ รักษาความสงบ พ่อแม่พอใจ ละครได้ทุนสร้างต่อ นักเรียนที่ได้บทนำอาจจะนอยด์นิคหน่อยแต่ก็โอเค คุณคือนักประนีประนอมตัวจริง',
                    zh: '✅ 恢复和平。家长满意了。戏剧凭借资金继续进行。领衔的学生有点恼火，但最终解决了。你是妥协的高手。'
                },
                stats: { competence: 40, ethics: 30, leadership: 45, innovation: 35 }
            },
            {
                id: 'C',
                text: {
                    en: '💸 Pure Pragmatism: Give him the lead. "The library benefits hundreds; one play isn\'t worth 50k."',
                    th: '💸 เน้นผลลัพธ์: ให้บทนำเขาไปเถอะ "ห้องสมุดช่วยคนเป็นร้อย ละครเรื่องเดียวไม่คุ้มกับเงินล้านหรอก"',
                    zh: '💸 纯粹的实用主义：让他演主角。“图书馆能让数百人受益；一部戏不值 5 万美元。”'
                },
                consequence: {
                    en: '⚠️ Reputation Hit. Word spreads that roles are for sale. Talented students stop participating in the theater program. You saved the library but killed the culture.',
                    th: '⚠️ เสียชื่อเสียง ข่าวลือกระจายว่าบทละครมีไว้ขาย เด็กเก่งๆ เลิกเข้าร่วมชมรมการละคร คุณรักษาห้องสมุดได้แต่ทำลายวัฒนธรรมโรงเรียนพังพินาศ',
                    zh: '⚠️ 声誉受损。消息传开，说角色是可以买卖的。有才华的学生不再参加戏剧项目。你保住了图书馆，但毁掉了文化。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 Performance Coaching: Offer the donor\'s son intensive 1-on-1 coaching to earn a better role next semester fairly.',
                    th: '🔄 สอนพิเศษส่วนตัว: เสนอการสอนการแสดงแบบตัวต่อตัวให้ลูกชายผู้บริจาค เพื่อให้เขาพัฒนาความสามารถจนได้บทที่เหมาะสมในเทอมหน้าอย่างยุติธรรม',
                    zh: '🔄 表演指导：为捐赠者的儿子提供密集的一对一指导，以便在下学期公平地获得更好的角色。'
                },
                consequence: {
                    en: '✅ Long-term Fix. The son actually improves. The donor is impressed by your dedication instead of your compliance. You grow a new talent. Excellent leadership.',
                    th: '✅ แก้ปัญหาที่ต้นเหตุ เด็กพัฒนาขึ้นจริงๆ ผู้บริจาคประทับใจในความทุ่มเทของคุณแทนการทำตามคำสั่ง คุณสร้างเพชรเม็ดใหม่ ภาวะผู้นำเยี่ยมยอด',
                    zh: '✅ 长期解决。儿子确实进步了。捐赠者对你的奉献精神而非顺从而感到印象深刻。你培养了一个新的人才。优秀的领导力。'
                },
                stats: { competence: 45, ethics: 40, leadership: 45, innovation: 30 }
            }
        ]
    },

    {
        id: 'te_034',
        text: {
            en: '🌡️ The Lab Safety Crisis: Your science lab equipment is 15 years old and failing. The school says there is no budget for replacements. You found a minor gas leak in one station.',
            th: '🌡️ วิกฤตความปลอดภัยในแล็บ: อุปกรณ์วิทยาศาสตร์เก่า 15 ปีและเริ่มพัง โรงเรียนบอกไม่มีงบเปลี่ยน คุณเจอแก๊สรั่วนิดๆ ที่โต๊ะหนึ่ง',
            zh: '🌡️ 实验室安全危机：你的实验室设备已有 15 年历史，且正在失效。校方表示没有更换预算。你在一个实验台发现了一处轻微的煤气泄漏。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Shut it Down: Refuse to teach any lab-based lessons until the equipment is certified safe. "Safety over curriculum."',
                    th: '🚨 ปิดแล็บทันที: ปฏิเสธการสอนปฏิบัติการจนกว่าอุปกรณ์จะได้รับการยืนยันว่าปลอดภัย "ความปลอดภัยต้องมาก่อนหลักสูตร"',
                    zh: '🚨 关停：在设备经认证安全之前，拒绝教授任何基于实验室的课程。“安全高于课程。”'
                },
                consequence: {
                    en: '✅ Safety First. The Principal is angry about the delay, but the board is forced to find emergency funds. You protected your students from a literal explosion.',
                    th: '✅ เน้นความปลอดภัย อาจารย์ใหญ่โกรธที่การเรียนล่าช้า แต่บอร์ดโรงเรียนถูกบีบให้หาเงินงบฉุกเฉิน คุณช่วยให้นักเรียนรอดจากการระเบิดได้จริงๆ',
                    zh: '✅ 安全第一。校长虽然对延误感到愤怒，但董事会被迫拨出应急资金。你保护了你的学生免受爆炸伤害。'
                },
                stats: { competence: 40, ethics: 50, leadership: 45, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '🛠️ Self-Repair: Temporarily fix the leak with sealant and DIY methods to keep the lessons going.',
                    th: '🛠️ ซ่อมเอง: ใช้ยาแนวและวิธี DIY ซ่อมรั่วชั่วคราวเพื่อให้เปิดเรียนต่อไปได้',
                    zh: '🛠️ 自行打理：用密封胶和 DIY 方法暂时修复泄漏，以维持课堂教学。'
                },
                consequence: {
                    en: '⚠️ High Risk. It holds for a while, but it\'s not a professional fix. You are liable if something goes wrong. The school sees you as "low maintenance" and continues to ignore the funding needs.',
                    th: '⚠️ ความเสี่ยงสูง มันอยู่ได้สักพักแต่ไม่ใช่การซ่อมแบบมืออาชีพ ถ้าเกิดอะไรขึ้นคุณต้องรับผิดชอบ โรงเรียนจะมองว่าคุณ "อยู่ง่าย" และยังคงเมินเรื่องการให้งบต่อไป',
                    zh: '⚠️ 高风险。虽然能维持一段时间，但这并非专业修复。如果出了差错，你将承担责任。校方认为你“易于打理”，并继续忽略对资金的需求。'
                },
                stats: { competence: 35, ethics: 20, leadership: 20, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Virtual Labs: Pivot the entire curriculum to high-quality VR and online simulations until the physical lab is fixed.',
                    th: '💻 แล็บเสมือนจริง: เปลี่ยนหลักสูตรทั้งหมดไปใช้ VR และการจำลองออนไลน์คุณภาพสูงจนกว่าแล็บจะซ่อมเสร็จ',
                    zh: '💻 虚拟实验室：在物理实验室修复之前，将整个课程转向高质量的 VR 和在线模拟。'
                },
                consequence: {
                    en: '🌟 Innovation Win! Students love the VR tech. You prove that learning can happen anywhere. You bypass the safety risk entirely while modernizing the class.',
                    th: '🌟 ชนะด้วยนวัตกรรม! นักเรียนชอบเทคโนโลยี VR มาก คุณพิสูจน์ว่าการเรียนรู้เกิดขึ้นได้ทุกที่ คุณเลี่ยงความเสี่ยงได้ 100% พร้อมกับทำห้องเรียนให้ทันสมัย',
                    zh: '🌟 创新获胜！学生们非常喜欢 VR 技术。你证明了学习可以在任何地方发生。你在使课堂现代化的同时，完全绕过了安全风险。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Media Pressure: Post photos of the failing equipment and the leak (safely) on social media to shame the district into action.',
                    th: '📢 กดดันผ่านสื่อ: ถ่ายรูปอุปกรณ์ที่พังและจุดที่รั่ว (แบบปลอดภัย) ลงโซเชียลเพื่อให้เขตรู้สึกอายจนต้องลงมือทำอะไรสักอย่าง',
                    zh: '📢 舆论压力：在社交媒体上发布（安全地拍摄）失效设备和泄漏的照片，羞辱学区采取行动。'
                },
                consequence: {
                    en: '⚠️ Chaos. You get the funding, but you are seen as a "traitor" by the administration. You likely won\'t get a promotion or award for years. High impact, high cost.',
                    th: '⚠️ ความโกลาหล คุณได้งบมาจริงแต่ถูกฝ่ายบริหารมองว่าเป็น "คนทรยศ" คุณอาจจะไม่ได้เลื่อนขั้นหรือรางวัลไปอีกหลายปี ผลกระทบสูงแต่ราคาที่ต้องจ่ายก็แพง',
                    zh: '⚠️ 混乱。你得到了资金，但你被行政部门视为“叛徒”。你可能数年都无法获得晋升或奖项。高影响力，高昂代价。'
                },
                stats: { competence: 35, ethics: 35, leadership: 30, innovation: 45 }
            }
        ]
    },

    {
        id: 'te_035',
        text: {
            en: '🤝 The Inclusive Classroom: A transgender student, Alex, asks you to use their preferred pronouns. The parents have explicitly forbidden the school from doing so and threatened to sue.',
            th: '🤝 ห้องเรียนที่เท่าเทียม: อเล็กซ์ นักเรียนข้ามเพศ ขอให้คุณเรียกสรรพนามที่เจ้าตัวพอใจ แต่พ่อแม่เขาประกาศห้ามโรงเรียนทำแบบนั้นและขู่จะฟ้อง',
            zh: '🤝 包容性课堂：一名跨性别学生亚历克斯要求你使用他们偏好的代词。但其父母明确禁止学校这样做，并威胁说要起诉。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '❤️ Direct Support: "I will use Alex\'s preferred pronouns in class. A student\'s identity and safety come before parent demands."',
                    th: '❤️ สนับสนุนเต็มที่: "ครูจะใช้สรรพนามที่อเล็กซ์ต้องการในห้อง อัตลักษณ์และความปลอดภัยของนักเรียนสำคัญกว่าความต้องการของพ่อแม่"',
                    zh: '❤️ 直接支持：“我将在课堂上使用亚历克斯偏好的代词。学生的认同和安全高于家长的要求。”'
                },
                consequence: {
                    en: '✅ Moral Hero. Alex feels safe and focus improves. However, the school gets sued and the Principal is furious. You might lose your job, but you saved a life.',
                    th: '✅ ฮีโร่ทางศีลธรรม อเล็กซ์รู้สึกปลอดภัยและเรียนได้ดีขึ้น แต่โรงเรียนถูกฟ้องและอาจารย์ใหญ่โกรธมาก คุณอาจตกงานแต่คุณก็ได้ช่วยชีวิตคนไว้',
                    zh: '✅ 道德英雄。亚历克斯感到安全，注意力也有所提高。然而，学校被告了，校长大发雷霆。你可能会失去工作，但你拯救了一个生命。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Legal Neutrality: Use Alex\'s last name only to avoid pronouns entirely.',
                    th: '⚖️ เป็นกลางทางกฎหมาย: เรียกแค่นามสกุลเพื่อเลี่ยงการใช้สรรพนามไปเลย',
                    zh: '⚖️ 法律中立：仅使用亚历克斯的姓氏，以完全避免使用代词。'
                },
                consequence: {
                    en: '✅ The "Safety" Pass. You avoid the lawsuit and the parent conflict. Alex feels a bit alienated but understands your position. It\'s an awkward compromise.',
                    th: '✅ รอดแบบปลอดภัย คุณเลี่ยงการฟ้องร้องและความขัดแย้งกับพ่อแม่ได้ อเล็กซ์อาจจะรู้สึกแปลกแยกนิดหน่อยแต่เข้าใจสถานการณ์ของคุณ เป็นการประนีประนอมที่น่าอึดอัด',
                    zh: '✅ “安全”过关。你避免了诉讼和家长冲突。亚历克斯感到有点疏远，但理解你的处境。这是一个尴尬的妥协。'
                },
                stats: { competence: 45, ethics: 30, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '👨‍👩‍👦 Mediation Meeting: Invite the parents and Alex for a mediated discussion with the school counselor to find common ground.',
                    th: '👨‍👩‍👦 นัดเจรจา: ชวนพ่อแม่และอเล็กซ์มาคุยกันโดยมีครูแนะแนวเป็นคนกลางเพื่อหาทางออกร่วมกัน',
                    zh: '👨‍👩‍👦 调解会：邀请家长和亚历克斯在学校辅导员的主持下进行调解讨论，寻找共同点。'
                },
                consequence: {
                    en: '🌟 Bridge Builder. It\'s emotional and tense, but the family starts communicating. You moved the problem from legal to relational. High leadership.',
                    th: '🌟 นักสร้างสะพาน บรรยากาศตึงเครียดและกดดันสะเทือนใจ แต่ครอบครัวเริ่มหันหน้าคุยกัน คุณเปลี่ยนปัญหาจากเรื่องกฎหมายมาเป็นเรื่องความสัมพันธ์ ภาวะผู้นำสูงมาก',
                    zh: '🌟 桥梁搭建者。过程充满情感且紧张，但家人开始沟通了。你将问题从法律层面转到了关系层面。高领导力。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '📜 Follow Parent Wishes: Use the legal birth pronouns. "I must follow parent directives to avoid legal trouble."',
                    th: '📜 ทำตามความต้องการพ่อแม่: ใช้สรรพนามถามสูติบัตร "ฉันต้องทำตามคำสั่งผู้ปกครองเพื่อเลี่ยงปัญหาทางกฎหมาย"',
                    zh: '📜 遵从家长意愿：按照法律出生代词。 “我必须遵循家长的指示以避免法律麻烦。”'
                },
                consequence: {
                    en: '💀 Devastating Impact. Alex becomes suicidal and stops coming to school. You are seen as an "agent of oppression" by other students. You are legally safe but morally bankrupt.',
                    th: '💀 ผลกระทบเลวร้าย อเล็กซ์เริ่มมีความคิดอยากฆ่าตัวตายและไม่มาโรงเรียนอีกเลย คุณถูกนักเรียนคนอื่นมองว่าเป็น "เครื่องมือการกดขี่" คุณปลอดภัยทางกฎหมายแต่ล้มละลายทางศีลธรรม',
                    zh: '💀 毁灭性影响。亚历克斯产生了自杀倾向并停止上学。你被其他学生看作是“压迫者的代理人”。你在法律上是安全的，但在道德上已经破产。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_036',
        text: {
            en: '🏫 The Toxic Rivalry: Two students are constantly competing for the highest grade. It has turned into sabotage—one student deleted the other\'s digital project file.',
            th: '🏫 การแข่งขันที่เป็นพิษ: นักเรียนสองคนแข่งกันชิงอันดับหนึ่งจนลุกลามถึงขั้นกลั่นแกล้ง—คนหนึ่งแอบลบไฟล์งานดิจิทัลของอีกคนทิ้ง',
            zh: '🏫 有毒的竞争：两名学生不断为争取最高分而竞争。这种竞争已经演变成了蓄意破坏——其中一名学生删除了另一名的数字化项目文件。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Discipline & F: Report the sabotage to the principal and give the saboteur an automatic failing grade for the year.',
                    th: '🚨 ลงโทษและให้ F: รายงานการกลั่นแกล้งต่ออาจารย์ใหญ่และให้เด็กที่ลบงานเพื่อนสอบตกวิชานี้ทันทีทั้งปี',
                    zh: '🚨 纪律处分与挂科：向校长报告搜查行为，并给予破坏者该学年自动不及格的处分。'
                },
                consequence: {
                    en: '⚖️ Harsh Justice. Sabotage is stopped, but the student becomes a pariah. The rivalry is over, but at the cost of one student\'s future.',
                    th: '⚖️ ความยุติธรรมที่รุนแรง การแกล้งกันหยุดลงแต่เด็กคนนั้นจะกลายเป็นคนนอกคอกในสังคมเพื่อน การแข่งขันจบลงโดยต้องแลกกับอนาคตของเด็กหนึ่งคน',
                    zh: '⚖️ 严厉的公正。破坏行为停止了，但该学生成了被排斥的人。竞争结束了，但代价是一名学生的前途。'
                },
                stats: { competence: 40, ethics: 45, leadership: 35, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Restorative Justice: Make the saboteur help the other student rebuild their project and apologize publicly.',
                    th: '🔄 การชดใช้ความผิด: บังคับให้คนแกล้งเพื่อนต้องช่วยกู้และทำโปรเจกต์เดิมให้เพื่อนใหม่ พร้อมขอโทษต่อหน้าสาธารณะ',
                    zh: '🔄 恢复性正义：让破坏者帮助另一名学生重新建立他们的项目，并公开道歉。'
                },
                consequence: {
                    en: '🌟 Character Building. The students learn about empathy and repairing harm. They eventually become neutral peers. You chose growth over punishment.',
                    th: '🌟 สร้างเสริมลักษณะนิสัย นักเรียนได้เรียนรู้เรื่องความเห็นใจและการชดใช้ความผิด ในที่สุดทั้งคู่ก็กลับมาเป็นเพื่อนกันได้แบบปกติ คุณเลือกการเติบโตมากกว่าการลงโทษ',
                    zh: '🌟 性格塑造。学生们学会了共情和弥补伤害。他们最终成为了关系一般但正常的同伴。你选择成长而非惩罚。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Collaborate Instead: Force the two students to complete the NEXT project together as a single group.',
                    th: '🤝 บังคับทำงานคู่: บังคับให้ทั้งคู่ต้อทำโปรเจกต์ "ถัดไป" ร่วมกันเป็นกลุ่มเดียว',
                    zh: '🤝 改为合作：强迫这两名学生作为一个小组共同完成下一个项目。'
                },
                consequence: {
                    en: '⚠️ High Tension. They hate every second of it. The project is good, but the personal resentment remains. You managed the output but didn\'t fix the hearts.',
                    th: '⚠️ ความตึงเครียดสูง ทั้งคู่เกลียดช่วงเวลานั้นมาก งานออกมาดีแต่ความขุ่นเคืองในใจยังอยู่ คุณคุมผลงานได้แต่แก้ใจคนไม่ได้',
                    zh: '⚠️ 高度紧张。他们讨厌其中的每一秒。项目很好，但个人的怨恨依然存在。你控制了产出，但没能修补人心。'
                },
                stats: { competence: 35, ethics: 25, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Administrative Pass: Let the IT department handle the file recovery and ignore the motive.',
                    th: '🤐 ให้ฝ่าย IT จัดการ: ให้แผนก IT กู้ไฟล์คืนมาแล้วก็ทำเป็นเมินเรื่องแรงจูงใจเบื้องหลังไป',
                    zh: '🤐 行政处理：让 IT 部门负责文件恢复，无视其动机。'
                },
                consequence: {
                    en: '⚠️ Toxic Persistence. The file is recovered, but the saboteur feels they "got away with it." They will strike again later. You ignored a deep character flaw.',
                    th: '⚠️ พิษร้ายฝังลึก ไฟล์กู้คืนมาได้แต่คนแกล้งรู้สึกว่า "รอดไปได้" และเขาจะแกล้งอีกในอนาคต คุณเมินจุดบกพร่องในนิสัยที่รุนแรง',
                    zh: '⚠️ 有毒的持续。文件恢复了，但破坏者觉得他们“逃脱了惩罚”。他们以后还会再次出手。你忽略了深刻的性格缺陷。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_037',
        text: {
            en: '🩺 The Teacher Burnout: You are working 70 hours a week and your health is failing. You have a stack of 100 essays to grade. You are tempted to just give everyone an "A" to save your sanity.',
            th: '🩺 ครูหมดไฟ: คุณทำงาน 70 ชั่วโมงต่อสัปดาห์จนเสียสุขภาพ มีเรียงความ 100 ฉบับกองอยู่ตรงหน้า คุณอยากจะให้ "A" ทุกคนไปเลยเพื่อรักษาจิตใจตัวเอง',
            zh: '🩺 教师倦怠：你每周工作 70 小时，健康状况正在恶化。你有一堆 100 篇论文要批改。你很想给每个人一个“A”，以保全你的理智。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛌 Mental Health Day: Take a 3-day sick leave and extend the grading deadline. "I cannot pour from an empty cup."',
                    th: '🛌 วันลาพักใจ: ลาป่วย 3 วันและเลื่อนกำหนดส่งเกรดออกไป "ฉันให้ในสิ่งที่ฉันไม่มีไม่ได้"',
                    zh: '🛌 心理健康日：请 3 天病假，并推迟评分截止日期。“我不能杯空强斟。”'
                },
                consequence: {
                    en: '✅ Resilience. You return refreshed and grade fairly. Students are slightly annoyed by the delay, but the quality of feedback is better. You prioritized long-term career survival.',
                    th: '✅ การฟื้นตัว คุณกลับมาด้วยความสดชื่นและให้เกรดอย่างยุติธรรม นักเรียนอาจจะเซ็งนิดหน่อยที่ช้า แต่คุณภาพการตรวจดีกว่าเดิมมาก คุณเลือกที่จะรักษาอาชีพตัวเองในระยะยาว',
                    zh: '✅ 韧性。你恢复了精神，公平地进行了评分。学生对延误稍有不满，但反馈的质量更好。你优先考虑了职业生涯的长久性。'
                },
                stats: { competence: 40, ethics: 40, leadership: 35, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '📈 The "A" Pass: Give everyone an A- and a generic "Good Job!" comment.',
                    th: '📈 ปล่อย A: ให้ A- ทุกคนพร้อมคอมเมนต์กว้างๆ ว่า "ทำดีมาก!"',
                    zh: '📈 “A”级过关：给每个人一个 A-，以及一条通用的“做得好！”评语。'
                },
                consequence: {
                    en: '💀 Academic Decay. Students notice the lack of feedback and stop trying. Your professional reputation is ruined if the Principal reviews your grading. You saved time but failed the mission.',
                    th: '💀 ความเสื่อมถอยวิชาการ นักเรียนสังเกตเห็นว่าไม่มีคำแนะนำที่มีประโยชน์และเลิกตั้งใจเรียน ชื่อเสียงวิชาชีพคุณพังแน่ถ้าอาจารย์ใหญ่มาตรวจเกรด คุณรักษาเวลาแต่แพ้ต่อภารกิจ',
                    zh: '💀 学术瓦解。学生注意到了缺乏反馈并停止努力。如果校长审查你的评分，你的职业声誉就毁了。你节省了时间，但没能完成使命。'
                },
                stats: { competence: 15, ethics: 10, leadership: 15, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Peer Review Pivot: Change the assignment so students grade each other using a detailed rubric, then you just review the final marks.',
                    th: '🤝 ให้เพื่อนตรวจกันเอง: ปรับงานให้นักเรียนตรวจของกันและกันโดยใช้เกณฑ์ที่ละเอียด แล้วคุณค่อยมาไล่ดูคะแนนสุดท้ายอีกที',
                    zh: '🤝 转向同行评审：修改作业，让学生根据详细的评分标准互相评分，然后你只审查最终分数。'
                },
                consequence: {
                    en: '🌟 Strategy Win! Students learn how to evaluate work. You reduce your workload by 80%. It’s a pedagogical masterstroke born of necessity.',
                    th: '🌟 ชนะด้วยกลยุทธ์! นักเรียนได้เรียนรู้วิธีการประเมินงาน คุณลดงานตัวเองได้ถึง 80% เป็นวิธีสอนที่ยอดเยี่ยมที่เกิดจากสถานการณ์บังคับ',
                    zh: '🌟 策略获胜！学生们学会了如何评估作品。你把自己的工作量减轻了 80%。这是出于必要而进行的教学上的高明之举。'
                },
                stats: { competence: 45, ethics: 35, leadership: 45, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '☕ Power Through: Drink excessive caffeine and spend the entire weekend grading without sleep.',
                    th: '☕ ฝืนทำให้จบ: อัดคาเฟอีนและใช้เวลาทั้งสุดสัปดาห์ตรวจงานโดยไม่นอน',
                    zh: '☕ 硬撑到底：摄入过量咖啡因，不眠不休地花整个周末批改作业。'
                },
                consequence: {
                    en: '⚠️ Health Crisis. You finish the grading but end up in the hospital with exhaustion on Monday. You have no balance. You are a martyr but not a sustainable educator.',
                    th: '⚠️ วิกฤตสุขภาพ คุณตรวจเสร็จจริงแต่ต้องเข้าโรงพยาบาลเพราะร่างกายทรุดโทรมในเช้าวันจันทร์ คุณไม่มีสมดุลชีวิต คุณคือผู้เสียสละที่ไม่ได้อยู่ทำอาชีพนี้ต่อในระยะยาว',
                    zh: '⚠️ 健康危机。你完成了评分，但周一因为精疲力竭而进了医院。你失去了生活平衡。你是个殉道者，但不是一个可持续发展的教育工作者。'
                },
                stats: { competence: 35, ethics: 35, leadership: 20, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_038',
        text: {
            en: '🌍 The Language Barrier: A new student, Jin, speaks no English. You have no ESL support staff this month. The other students are ignoring him, and he looks lost and isolated.',
            th: '🌍 กำแพงภาษา: จิน นักเรียนใหม่ พูดภาษาอังกฤษไม่ได้เลย เดือนนี้ไม่มีเจ้าหน้าที่ซัพพอร์ตภาษาที่สอง นักเรียนคนอื่นเมินเขา เขาดูหลงทางและโดดเดี่ยว',
            zh: '🌍 语言障碍：新学生金不会说英语。本月你没有 ESL（英语作为第二语言）支持人员。其他学生都无视他，他看起来既迷茫又孤立。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📱 Tech Solution: Give him a school tablet with a live-translation app and modified digital lessons.',
                    th: '📱 ใช้เทคโนโลยี: ยื่นแท็บเล็ตโรงเรียนที่มีแอปแปลภาษาแบบเรียลไทม์และบทเรียนดิจิทัลที่ปรับมาเพื่อเขา',
                    zh: '📱 技术方案：给他一个带有实时翻译应用和修改后的数字化课程的学校平板电脑。'
                },
                consequence: {
                    en: '✅ Functional Inclusion. Jin can follow the basic curriculum. It’s not perfect, but he is learning. You used technology to bridge a gap.',
                    th: '✅ การมีส่วนร่วมที่มีผลจริง จินสามารถเรียนตามหลักสูตรพื้นฐานได้ แม้ไม่สมบูรณ์แบบแต่เขาก็ได้เรียนรู้ คุณใช้เทคโนโลยีอุดช่องว่างได้ดี',
                    zh: '✅ 职能包容。金能跟上基础课程。这并不完美，但他正在学习。你利用技术弥补了差距。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 45 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Peer Buddy: Assign a kind, patient student to be his "ambassador" and help him navigate the day.',
                    th: '🤝 เพื่อนคู่หู: มอบหมายให้นักเรียนที่ใจดีและอดทนเป็น "ทูต" ช่วยดูแลเขาทั้งวัน',
                    zh: '🤝 同伴伙伴：指派一名善良、耐心的学生担任他的“大使”，并帮助他度过这一天。'
                },
                consequence: {
                    en: '🌟 Empathy Growth. The "buddy" student gains leadership skills, and Jin feels welcomed socially even if he doesn\'t understand the words. You built a community.',
                    th: '🌟 ความเห็นใจที่งอกงาม เพื่อนคู่หูได้ฝึกภาวะผู้นำ และจินรู้สึกได้รับการต้อนรับทางสังคมแม้จะยังฟังไม่ออก คุณสร้างชุมชนขึ้นมา',
                    zh: '🌟 共情成长。“伙伴”学生获得了领导技能，金即使听不懂语言，在社交上也感到了受欢迎。你建立了一个社区。'
                },
                stats: { competence: 40, ethics: 45, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Focus on Basics: Just give him drawing assignments and basic math until the ESL staff returns next month.',
                    th: '🤐 เน้นพื้นฐาน: ให้เขาวาดเขียนและทำเลขง่ายๆ ไปก่อนจนกว่าเจ้าหน้าที่ภาษาจะกลับมาเดือนหน้า',
                    zh: '🤐 专注于基础：只给他画画作业和基础数学，直到下月 ESL 专业人员回来。'
                },
                consequence: {
                    en: '⚠️ Stalled Progress. Jin is bored and feels "stupid." A month of learning is wasted. You avoided the extra work but failed the student.',
                    th: '⚠️ ความก้าวหน้าที่หยุดชะงัก จินเบื่อและรู้สึกว่าตัวเอง "โง่" เวลาเรียน 1 เดือนหายไปเปล่าๆ คุณเลี่ยงงานงอกแต่ล้มเหลวในการสอนเด็ก',
                    zh: '⚠️ 进度停滞。金感到无聊并觉得自己“很笨”。一整月的学习时间被浪费了。你避免了额外工作，但没能对该学生尽责。'
                },
                stats: { competence: 25, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 Visual Immersion: Redesign your entire unit to be 90% visual (infographics, videos, models) so everyone can learn regardless of language.',
                    th: '🔄 การเรียนรู้ผ่านภาพ: ออกแบบบทเรียนใหม่ทั้งหมดให้เป็นภาพ 90% (อินโฟกราฟิก, วิดีโอ, โมเดล) เพื่อให้ทุกคนเรียนได้โดยไม่เกี่ยงเรื่องภาษา',
                    zh: '🔄 视觉沉浸：将整个单元重新设计为 90% 的视觉形式（信息图表、视频、模型），以便每个人都能在不考虑语言的情况下进行学习。'
                },
                consequence: {
                    en: '🌟 Pedagogical Innovation. Not only does Jin learn, but your native speakers understand the concepts better too. You discovered that Universal Design helps everyone.',
                    th: '🌟 นวัตกรรมการสอน ไม่ใช่แค่จินที่ได้เรียน แต่เด็กคนอื่นก็เข้าใจเนื้อหาชัดขึ้นด้วย คุณค้นพบว่าการออกแบบที่เป็นสากลช่วยทุกคนได้จริง',
                    zh: '🌟 教学创新。不仅金学会了，你的母语母语学生也能更好地理解这些概念。你发现通用设计对每个人都有帮助。'
                },
                stats: { competence: 50, ethics: 45, leadership: 45, innovation: 50 }
            }
        ]
    },

    {
        id: 'te_039',
        text: {
            en: '🎤 The Controversial Speaker: You invited a local activist to speak to your civics class. The board finds out and orders you to cancel, claiming the speaker is "too radical."',
            th: '🎤 วิทยากรเจ้าปัญหา: คุณเชิญนักกิจกรรมในท้องถิ่นมาพูดในวิชาหน้าที่พลเมือง บอร์ดโรงเรียนรู้เข้าและสั่งให้ยกเลิก โดยอ้างว่าวิทยากรคนนี้ "หัวรุนแรงเกินไป"',
            zh: '🎤 备受争议的演说家：你邀请了一位当地活动家来为你的公民课发表演讲。校董会发现后命令你取消，声称演说家“太激进了”。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✊ Stand Your Ground: "Academic freedom is vital. The speaker stays, or I resign."',
                    th: '✊ ยืนหยัดในหลักการ: "เสรีภาพทางวิชาการสำคัญที่สุด วิทยากรคนนี้ต้องได้พูด ไม่งั้นฉันลาออก"',
                    zh: '✊ 坚持立场：“学术自由至关重要。演讲继续，否则我辞职。”'
                },
                consequence: {
                    en: '⚠️ High Drama. The speaker talks, and the students are inspired. However, you are forced out by the end of the semester. You became a martyr for free speech.',
                    th: '⚠️ เรื่องราวใหญ่โต วิทยากรได้พูดและนักเรียนได้รับแรงบันดาลใจ แต่คุณถูกบีบให้ออกเมื่อจบเทอม คุณกลายเป็นผู้สละชีพเพื่อเสรีภาพในการพูด',
                    zh: '⚠️ 剧烈冲突。演讲进行了，学生们受到了启发。然而，你在学期结束时被迫离职。你成为了言论自由的殉道者。'
                },
                stats: { competence: 35, ethics: 50, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Balanced Panel: Invite a speaker with the opposing view to speak at the same time to provide "balance."',
                    th: '🔄 จัดดีเบต: เชิญวิทยากรที่มีความเห็นตรงข้ามมาพูดพร้อมกันเพื่อให้เกิด "สมดุล"',
                    zh: '🔄 平衡小组：同时邀请一位持有相反观点的演说家，以提供“平衡”。'
                },
                consequence: {
                    en: '✅ Diplomatic Masterstroke. The board is satisfied. The students learn critical thinking by comparing views. You saved the event and maximized learning.',
                    th: '✅ กลยุทธ์ทางการทูตชั้นเลิศ บอร์ดโรงเรียนพอใจ นักเรียนได้ฝึกการคิดวิพากษ์จากการเปรียบเทียบความเห็น คุณรักษาอีเวนต์ไว้ได้และเพิ่มการเรียนรู้ถึงขีดสุด',
                    zh: '✅ 外交杰作。校董会满意了。学生们通过比较观点学会了批判性思维。你挽救了这次活动并实现了学习最大化。'
                },
                stats: { competence: 45, ethics: 40, leadership: 45, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Quiet Cancellation: Cancel the speaker and apologize to the students. "It was out of my control."',
                    th: '🤐 ยกเลิกเงียบๆ: ยกเลิกวิทยากรและขอโทษนักเรียน "มันเกินอำนาจที่ครูจะจัดการได้"',
                    zh: '🤐 悄然取消：取消演说并向学生道歉。“这超出了我的控制范围。”'
                },
                consequence: {
                    en: '⚠️ Loss of Respect. Students see you as "weak" and "complicit" in censorship. The trust in your civics curriculum is broken.',
                    th: '⚠️ เสียความเคารพ นักเรียนมองว่าคุณ "อ่อนแอ" และ "สมรู้ร่วมคิด" ในการเซ็นเซอร์ ความเชื่อมั่นในวิชาหน้าที่พลเมืองพังทลาย',
                    zh: '⚠️ 失去尊重。学生认为你表现“软弱”，是审查制度的“共犯”。对你公民课课程的信任破灭了。'
                },
                stats: { competence: 20, ethics: 20, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '💻 Video Alternative: Record a private interview with the activist and post it on a secure school server for "optional" viewing.',
                    th: '💻 เปลี่ยนเป็นวิดีโอ: บันทึกการสัมภาษณ์ส่วนตัวกับนักกิจกรรมแล้วลงในเซิร์ฟเวอร์โรงเรียนให้เป็นทางเลือกในการ "รับชมเอง"',
                    zh: '💻 视频替代方案：录制一段对该活动家的私人采访，并将其发布在安全的学校服务器上，供“可选”观看。'
                },
                consequence: {
                    en: '✅ Technically Safe. You bypassed the live event ban. Students get the info. The board can\'t easily complain about "optional material." Smart navigation.',
                    th: '✅ ปลอดภัยทางเทคนิค คุณเลี่ยงข้อห้ามอีเวนต์สดได้ นักเรียนได้ข้อมูล บอร์ดโรงเรียนหาเรื่องบ่นลำบากเพราะเป็น "เนื้อหาทางเลือก" เป็นการเอาตัวรอดที่ฉลาด',
                    zh: '✅ 技术上安全。你绕过了现场活动禁令。学生得到了信息。校董会无法轻易投诉“可选资料”。聪明地应对。'
                },
                stats: { competence: 40, ethics: 35, leadership: 40, innovation: 45 }
            }
        ]
    },

    {
        id: 'te_040',
        text: {
            en: '📊 The Curve Disaster: Your midterm exam was too hard, and the average was 45%. If you "curve" the grades, the students who studied hard complain it\'s unfair. If you don\'t, half the class fails.',
            th: '📊 วิกฤตคะแนนสอบ: ข้อสอบกลางภาคยากเกินไปจนคะแนนเฉลี่ยอยู่ที่ 45% ถ้าคุณ "ปัดเกรด" เด็กที่ตั้งใจเรียนจะประท้วงว่าไม่แฟร์ ถ้าไม่ปัด เด็กครึ่งห้องจะสอบตก',
            zh: '📊 曲线评分灾难：你的期中考试太难了，平均分只有 45%。如果你通过“曲线评分”来提高分数，努力学习的学生会抱怨不公平。如果你不这样做，半数学生将不及格。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔢 Pure Math Curve: Apply the standard bell curve. "The test was flawed; the curve fixes the measurement."',
                    th: '🔢 ปัดตามหลักการ: ใช้การปัดคะแนนแบบอิงกลุ่ม (Bell Curve) "ข้อสอบมีข้อบกพร่อง การปัดคะแนนคือการแก้ไขการวัดผล"',
                    zh: '🔢 纯数学曲线：应用标准钟形曲线。“测试有失误；曲线评分修正了测量结果。”'
                },
                consequence: {
                    en: '✅ Systemic Fix. Most students pass. The top students are annoyed but overall the class morale is saved. You admitted the test was too hard.',
                    th: '✅ แก้ที่ระบบ ส่วนใหญ่สอบผ่าน เด็กท็อปอาจจะนอยด์นิดหน่อยแต่ขวัญกำลังใจคนทั้งห้องถูกรักษาไว้ได้ คุณยอมรับว่าข้อสอบยากเกินไป',
                    zh: '✅ 系统性修复。大多数学生及格了。拔尖的学生感到恼火，但总体上全班的士气保住了。你承认了测试难度太大。'
                },
                stats: { competence: 45, ethics: 40, leadership: 35, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '📝 Retake Opportunity: Offer a "Correction Quiz" where students can earn back half the points they lost by explaining the correct answers.',
                    th: '📝 โอกาสแก้ตัว: จัดสอบ "ควิซแก้ไข" โดยให้นักเรียนได้คะแนนคืนครึ่งหนึ่งจากที่เสียไป หากอธิบายคำตอบที่ถูกต้องได้',
                    zh: '📝 重考机会：提供一次“修正测验”，学生可以通过解释正确答案来赢回失去的一半分数。'
                },
                consequence: {
                    en: '🌟 Mastery Learning! Students actually learn the material they missed. Top students are happy because they can get 100%. You turned a failure into a learning moment.',
                    th: '🌟 การเรียนรู้สู่ความสำเร็จ! นักเรียนได้เรียนรู้เนื้อหาที่พลาดไปจริงๆ เด็กเก่งก็แฮปปี้เพราะอัพคะแนนเป็น 100% ได้ คุณเปลี่ยนความล้มเหลวให้เป็นนาทีทองของการเรียนรู้',
                    zh: '🌟 掌握学习法！学生们真正学会了他们漏掉的知识。优秀的学生很高兴，因为他们可以拿到 100 分。你将失败转变为学习契机。'
                },
                stats: { competence: 50, ethics: 45, leadership: 50, innovation: 45 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 No Curve: Stick to the raw scores. "Standards are standards. Study harder next time."',
                    th: '🤐 ไม่มีการปัดคะแนน: ใช้คะแนนดิบเดิม "มาตรฐานก็คือมาตรฐาน คราวหน้าตั้งใจกว่านี้แล้วกัน"',
                    zh: '🤐 不设曲线：坚持原始分数。 “标准就是标准。下次努力学习。”'
                },
                consequence: {
                    en: '💀 Classroom Collapse. Students lose all motivation and start to disruptive behavior. Parents flood the office with complaints. You upheld "standards" but lost your students.',
                    th: '💀 ห้องเรียนล่มสลาย นักเรียนหมดแรงจูงใจและเริ่มนิสัยเกเร พ่อแม่ร้องเรียนล้นห้องปกครอง คุณรักษา "มาตรฐาน" ไว้ได้แต่เสียลูกศิษย์ไปหมดแล้ว',
                    zh: '💀 课堂崩溃。学生失去了所有动力，并开始出现破坏性行为。家长的投诉洪水般涌向办公室。你维护了“标准”，但失去了学生。'
                },
                stats: { competence: 20, ethics: 20, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Selective Rounding: Bump the grades of students who participated in class, but leave the others with their raw scores.',
                    th: '📈 ปัดคะแนนเฉพาะบุคคล: อัพคะแนนให้เด็กที่ช่วยงานในห้อง แต่ทิ้งคะแนนดิบไว้ให้คนที่เหลือ',
                    zh: '📈 选择性进位：提高课堂表现活跃的学生的成绩，而对其余学生维持原始分数。'
                },
                consequence: {
                    en: '⚠️ Favoritism Scandal. Students realize the grading is subjective. They stop studying and start trying to "please you" instead of learning facts. Integrity is gone.',
                    th: '⚠️ เรื่องอื้อฉาวเกี่ยวกับการลำเอียง นักเรียนรู้ว่าเกรดมาจากความพอใจส่วนตัว พวกเขาเลิกเรียนและหันมา "เอาใจคุณ" แทนความรู้ ความซื่อสัตย์พังพินาศ',
                    zh: '⚠️ 偏私丑闻。学生意识到评分是主观的。他们停止学习，开始试图“取悦你”，而不是学习知识。正直荡然无存。'
                },
                stats: { competence: 25, ethics: 15, leadership: 20, innovation: 15 }
            }
        ]
    },

    {
        id: 'te_041',
        text: {
            en: '📱 The Cyberbullying Leak: A student shows you a private Discord group where several of your students are making fun of a teacher’s appearance and spreading rumors. It’s "off-campus" but affecting the school mood.',
            th: '📱 แชทหลุดบูลลี่: นักเรียนคนหนึ่งโชว์กลุ่ม Discord ลับที่นักเรียนหลายคนในห้องกำลังล้อเลียนหน้าตาครูอีกคนและกุเรื่องใส่ความ แม้จะคุยกัน "นอกโรงเรียน" แต่ส่งผลต่อบรรยากาศในห้องเรียน',
            zh: '📱 网络欺凌泄露：一名学生向你展示了一个私人的 Discord 群组，你班上的几名学生正在那里嘲笑一名老师的外貌并散布谣言。虽然这是在“校外”发生的，但正在影响学校的情绪。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Formal Report: Report the chat to the Principal and the teacher involved. "Cyberbullying is a violation of the code of conduct."',
                    th: '🚨 รายงานทางการ: แจ้งเรื่องแชทหลุดให้อาจารย์ใหญ่และครูที่ถูกพาดพิงทราบ "การบูลลี่ออนไลน์ถือเป็นความผิดร้ายแรงตามระเบียบ"',
                    zh: '🚨 正式报告：向校长及当事老师报告聊天内容。“网络欺凌违反了行为准则。”'
                },
                consequence: {
                    en: '⚖️ Harsh Justice. The students are suspended. The teacher is hurt but grateful for the info. The class becomes quiet and fearful of you. You followed the law but lost the "safe space" vibe.',
                    th: '⚖️ ความยุติธรรมที่รุนแรง นักเรียนถูกพักการเรียน ครูคนนั้นเสียความรู้สึกแต่ขอบคุณที่คุณบอก ความในห้องเริ่มเงียบและหวาดกลัวคุณ คุณทำตามกฎแต่บรรยากาศ "พื้นที่ปลอดภัย" หายไป',
                    zh: '⚖️ 严厉的公正。学生们被停学了。受害老师很伤心，但对你提供的信息表示感谢。班级变得安静了，而且学生们开始害怕你。你遵守了法规，但失去了“安全空间”的氛围。'
                },
                stats: { competence: 40, ethics: 50, leadership: 35, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '🗣️ The Class Lesson: Don’t name names, but host a "Digital Citizenship" lesson about the permanence of online words and empathy.',
                    th: '🗣️ บทเรียนในห้อง: ไม่ระบุชื่อคนทำ แต่จัดคาบเรียน "ความเป็นพลเมืองดิจิทัล" เกี่ยวกับความคงอยู่ของข้อความออนไลน์และความเห็นใจผู้อื่น',
                    zh: '🗣️ 课堂教育：不点名，但主持一堂关于网络言论持久性和共情能力的“数字公民”课。'
                },
                consequence: {
                    en: '🌟 Soft Power. The involved students feel guilty and shut down the group. You preserved their dignity while correcting the behavior. Some think you were "too soft" on bullies.',
                    th: '🌟 พลังเงียบ นักเรียนที่ทำรู้สึกผิดและตัดสินใจปิดกลุ่มนั้นทิ้ง คุณรักษาศักดิ์ศรีของพวกเขาไว้ได้พร้อมกับแก้พฤติกรรม แต่บางคนอาจมองว่าคุณ "ใจดีเกินไป" กับคนนิสัยไม่ดี',
                    zh: '🌟 软实力。涉事学生感到内疚并解散了群组。你在纠正行为的同时保留了他们的尊严。有些人认为你对欺凌者“太软弱”了。'
                },
                stats: { competence: 45, ethics: 40, leadership: 45, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Private Confrontation: Call the ringleaders into your office for a "firm talk" without involving the principal.',
                    th: '🤝 เชิญมาคุยส่วนตัว: เรียกตัวหัวโจกมาพบที่ห้องพักครูเพื่อ "ตักเตือนอย่างจริงจัง" โดยยังไม่แจ้งอาจารย์ใหญ่',
                    zh: '🤝 私下交涉：在不告知校长的情况下，将带头者叫到你的办公室进行一次“严肃谈话”。'
                },
                consequence: {
                    en: '✅ Effective Fear. You scared them into stopping. They respect your "street smart" approach. However, if the Principal finds out later, you might be in trouble for hiding it.',
                    th: '✅ ได้ผลทันตา คุณทำให้พวกเขากลัวจนหยุดทำ พวกเขาเคารพในความ "เขี้ยว" ของคุณ แต่ถ้าอาจารย์ใหญ่รู้ทีหลัง คุณอาจจะเดือดร้อนที่ปกปิดเรื่องไว้',
                    zh: '✅ 有效震慑。你把他们吓住了，让他们停止了欺凌。他们非常佩服你那种“老练”的处理方式。然而，如果校长后来发现了，你可能会因为隐瞒此事而陷入麻烦。'
                },
                stats: { competence: 35, ethics: 30, leadership: 40, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Ignore it: "It happened on Discord outside of school hours. I have no jurisdiction there."',
                    th: '🤐 เมินเฉย: "มันเกิดใน Discord นอกเวลาเรียน ฉันไม่มีอำนาจไปจัดการตรงนั้น"',
                    zh: '🤐 无视它：“这发生在校外时间的 Discord 上。我对此没有管辖权。”'
                },
                consequence: {
                    en: '💀 Toxic Culture. The rumors grow and the teacher eventually quits due to the harassment. You avoided the paperwork but failed to protect your colleague.',
                    th: '💀 วัฒนธรรมเป็นพิษ ข่าวลือรุนแรงขึ้นเรื่อยๆ จนครูคนนั้นลาออกเพราะถูกคุกคาม คุณเลี่ยงงานเอกสารได้แต่ล้มเหลวในการปกป้องเพื่อนร่วมงาน',
                    zh: '💀 有毒文化。谣言愈演愈烈，那名老师最终因受骚扰而辞职。你虽然避开了文书工作，但没能保护好同事。'
                },
                stats: { competence: 20, ethics: 15, leadership: 15, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_042',
        text: {
            en: '🩺 The Meltdown: A neurodivergent student is having a sensory overload meltdown in the middle of a test. Other students are distracted and some are making fun of their behavior.',
            th: '🩺 อาการกำเริบ: นักเรียนที่มีความต้องการพิเศษเกิดอาการ Sensory Overload (รับรู้ทางประสาทสัมผัสมากเกินไป) จนคุมตัวเองไม่ได้กลางห้องสอบ นักเรียนคนอื่นเริ่มเสียสมาธิและบางคนแอบขำ',
            zh: '🩺 崩溃：一名神经多样性学生在考试中途因感官超负荷而崩溃。其他学生注意力分散，有些人甚至在取笑他们的行为。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Immediate Deflection: Ask a trusted student to lead the class out to the hallway while you stay to calm the student down.',
                    th: '🛡️ แก้ปัญหาเฉพาะหน้า: ให้นักเรียนที่ไว้ใจได้พาทั้งชั้นออกไปรอนอกห้องเรียน ส่วนคุณอยู่ช่วยสงบสติอารมณ์ให้นักเรียนคนนั้น',
                    zh: '🛡️ 立即引导：在留下来安抚这名学生的同时，让一名值得信赖的学生带领全班到走廊去。'
                },
                consequence: {
                    en: '✅ Empathy & Safety. You provide the student with privacy and safety. The class is protected from seeing a vulnerable moment. You are seen as a high-empathy leader.',
                    th: '✅ ความเห็นใจและความปลอดภัย คุณมอบความเป็นส่วนตัวและความปลอดภัยให้เด็ก ทั้งชั้นไม่ต้องเห็นช่วงเวลาที่เปราะบาง คุณถูกมองว่าเป็นผู้นำที่มีเมตตาสูง',
                    zh: '✅ 共情与安全。你给了这名学生隐私和安全感。避免了全班目睹脆弱时刻。你被视为一位具有高度共情能力的领导者。'
                },
                stats: { competence: 45, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🚨 Call Logistics: Call the office to have them remove the student immediately so the test can continue.',
                    th: '🚨 ทำตามขั้นตอน: โทรเรียกห้องปกครองให้มารับตัวนักเรียนคนนั้นออกไปทันที เพื่อให้คนอื่นสอบต่อได้',
                    zh: '🚨 呼叫后勤：致电办公室让他们立即带走这名学生，以便考试继续进行。'
                },
                consequence: {
                    en: '⚠️ Clinical Efficiency. The test finishes on time, but the student feels traumatized by the "removal." Other students see you as cold. Competence is high, but ethics/empathy is low.',
                    th: '⚠️ ประสิทธิภาพที่ไร้หัวใจ สอบเสร็จทันเวลาแต่เด็กคนนั้นรู้สึกเหมือนถูก "กำจัด" นักเรียนคนอื่นมองว่าคุณเย็นชา ความสามารถสูงแต่น้ำใจต่ำ',
                    zh: '⚠️ 极其高效。考试按时结束了，但这名学生因被“带走”而深感创伤。其他学生觉得你很冷酷。胜任力很高，但道德和共情力较低。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ The Education Moment: Pause the test and explain to the class why the student is struggling, asking for their patience.',
                    th: '🗣️ นาทีแห่งการเรียนรู้: หยุดการสอบและอธิบายให้เพื่อนร่วมชั้นฟังว่าทำไมเพื่อนคนนี้ถึงมีอาการแบบนี้ เพื่อขอความเห็นใจ',
                    zh: '🗣️ 教育时刻：暂停考试，向全班解释为什么这名学生表现得如此挣扎，并请求大家的耐心。'
                },
                consequence: {
                    en: '⚠️ Mixed Results. The student feels exposed and embarrassed by the public explanation. However, the other students learn about neurodiversity. High innovation, low privacy.',
                    th: '⚠️ ผลลัพธ์คาดไม่ถึง เด็กที่อาการกำเริบรู้สึกว่าตัวเองถูกแฉและอับอายที่ถูกอธิบายกลางห้อง แต่เพื่อนคนอื่นก็ได้ความรู้เรื่องความหลากหลายทางประสาท นวัตกรรมสูงแต่เสียความเป็นส่วนตัว',
                    zh: '⚠️ 褒贬不一。由于公开解释，这名学生感到难堪和尴尬。然而，其他学生了解了神经多样性。高创新，低隐私。'
                },
                stats: { competence: 35, ethics: 35, leadership: 40, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Push Through: Just keep telling the student to "be quiet" and try to finish the test.',
                    th: '🤐 ฝืนทำต่อไป: บอกให้นักเรียน "เงียบๆ หน่อย" แล้วพยายามนั่งคุมสอบต่อจนจบ',
                    zh: '🤐 硬撑着：只是一直告诉那名学生“安静点”，并试图完成考试。'
                },
                consequence: {
                    en: '💀 Disaster. The meltdown escalates into an emergency. No one finishes the test properly. You look incompetent and cruel.',
                    th: '💀 หายนะ อาการหนักขึ้นจนกลายเป็นเหตุฉุกเฉิน ไม่มีใครทำข้อสอบได้สำเร็จ คุณดูไร้ความสามารถและโหดร้าย',
                    zh: '💀 灾难。崩溃升级为紧急情况。没人能好好完成考试。你看起来既无能又冷酷。'
                },
                stats: { competence: 15, ethics: 20, leadership: 15, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_043',
        text: {
            en: '🏫 The Unqualified Task: The school is short-staffed and asks you to teach Advanced Physics, a subject you haven\'t touched since high school. You are currently an English teacher.',
            th: '🏫 งานที่ไม่ถนัด: โรงเรียนขาดคนและขอให้คุณไปสอนฟิสิกส์ระดับสูง ซึ่งคุณไม่ได้แตะเลยตั้งแต่สมัยมัธยม ทั้งที่ปัจจุบันคุณเป็นครูสอนภาษาอังกฤษ',
            zh: '🏫 胜任不了的任务：学校人手短缺，要求你教高等物理，这是你高中毕业后就没碰过的科目。你目前是一名英语老师。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Professional Refusal: "I am not qualified. It would be a disservice to the students. Please find a certified teacher."',
                    th: '🛡️ ปฏิเสธอย่างมืออาชีพ: "ฉันไม่มีคุณสมบัติพอ ถ้าสอนไปเด็กจะเสียประโยชน์ โปรดหาครูที่จบสายนี้มาเถอะค่ะ"',
                    zh: '🛡️ 职业性拒绝：“我不具备相关资格。这会对学生造成损害。请找一位有认证的老师。”'
                },
                consequence: {
                    en: '✅ Integrity Preserved. The students get a substitute who knows the material later. The Principal is annoyed but can\'t argue with your logic. You protected your professional standards.',
                    th: '✅ รักษาเกรดวิชาชีพ ในที่สุดนักเรียนก็ได้ครูที่รู้จริงมาสอนแทน อาจารย์ใหญ่อาจจะนอยด์นิคหน่อยแต่ก็เถียงไม่ออก คุณรักษามาตรฐานวิชาชีพไว้ได้',
                    zh: '✅ 保持正直。学生们后来得到了一位懂物理的代课老师。校长虽然恼火，但无法反驳你的逻辑。你维护了自己的职业标准。'
                },
                stats: { competence: 40, ethics: 45, leadership: 40, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '📚 Crash Course: Accept it and spend late nights self-studying the textbook to stay one chapter ahead of the students.',
                    th: '📚 เรียนลัดจัดเต็ม: ตอบรับงานและใช้เวลาดึกดื่นอ่านตำราเรียนเองเพื่อให้ความรู้ล่วงหน้านักเรียนไปสักหนึ่งบท',
                    zh: '📚 应急学习：接受任务，深夜自学课本，争取比学生领先一章的内容。'
                },
                consequence: {
                    en: '⚠️ High Stress. You are exhausted. You can only answer basic questions. Students realize you aren\'t an expert. You helped the school, but the learning quality is mediocre.',
                    th: '⚠️ เครียดจัด คุณเหนื่อยล้ามากและตอบได้แค่คำถามพื้นๆ นักเรียนเริ่มจับทางได้ว่าคุณไม่ใช่ตัวจริง คุณช่วยโรงเรียนได้แต่คุณภาพการเรียนออกมางั้นๆ',
                    zh: '⚠️ 高压。你精疲力竭。你只能回答一些基础问题。学生们意识到你不是专家。你帮了学校，但教学质量平平。'
                },
                stats: { competence: 35, ethics: 35, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Digital Pivot: Set up an online course (like Khan Academy) for the students and act as a "facilitator" rather than a lecturer.',
                    th: '💻 ใช้ตัวช่วยดิจิทัล: ใช้คอร์สเรียนออนไลน์ (เช่น Khan Academy) ให้เด็กเรียน แล้วคุณทำหน้าที่เป็น "ผู้อำนวยความสะดวก" แทนการสอนหน้าห้อง',
                    zh: '💻 数字化转型：为学生建立一个在线课程（如可汗学院），将自己定位为“引导者”而非讲师。'
                },
                consequence: {
                    en: '🌟 Innovation Win! The students learn from world-class experts online. You spend your time helping them with organization and study skills. It’s the best result given the circumstances.',
                    th: '🌟 ชนะด้วยนวัตกรรม! นักเรียนได้เรียนกับผู้เชี่ยวชาญระดับโลกทางออนไลน์ คุณใช้เวลาไปกับการช่วยพวกเขาจัดระเบียบและทักษะการเรียนรู้ เป็นทางออกที่ดีที่สุดในสถานการณ์นี้',
                    zh: '🌟 创新获胜！学生们从世界级的在线专家那里学习。你把时间花在帮助他们提高组织能力和学习技巧上。这是特定情况下最好的结果。'
                },
                stats: { competence: 45, ethics: 40, leadership: 45, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Fake it: Read the teacher\'s guide and just read the notes aloud. If you don\'t know an answer, tell them to "Google it."',
                    th: '🤝 แกล้งทำเป็นรู้: อ่านคู่มือครูแล้วประคองสอนไปตามโน้ต ถ้าตอบไม่ได้ก็บอกให้เด็กไป "เสิร์ช Google เอา"',
                    zh: '🤝 装样子：看教师指南，然后大声读笔记。如果你不知道答案，就告诉他们“去谷歌搜搜吧”。'
                },
                consequence: {
                    en: '💀 Academic Failure. The students learn nothing and fail their final exams. You are seen as lazy and dishonest. Reputation ruined.',
                    th: '💀 ล้มเหลวทางวิชาการ นักเรียนไม่ได้อะไรเลยและสอบตกไฟนอลกันหมด คุณถูกมองว่าขี้เกียจและไม่ซื่อสัตย์ ชื่อเสียงพังทลาย',
                    zh: '💀 学术失败。学生们什么也没学到，期末考试也不及格。你被看作是懒惰且不诚实的。声誉毁于一旦。'
                },
                stats: { competence: 20, ethics: 15, leadership: 15, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_044',
        text: {
            en: '🍲 The Hidden Struggle: You notice a student, Liam, is sleeping in class and has no lunch every day. You suspect he is experiencing homelessness but doesn\'t want to admit it.',
            th: '🍲 ความลำบากที่ซ่อนอยู่: คุณสังเกตว่าเลียมหลับในห้องและไม่มีข้าวกลางวันกินทุกวัน คุณสงสัยว่าเขาอาจจะกลายเป็นคนไร้บ้านแต่ไม่อยากยอมรับ',
            zh: '🍲 隐秘的挣扎：你注意到一名学生利亚姆每天都在课堂上睡觉，而且没带午餐。你怀疑他正处于无家可归的状态，但不想承认。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '❤️ Secret Support: Bring extra food for "the class" every day but make sure Liam gets a large portion. "Keep it quiet."',
                    th: '❤️ แอบช่วยเหลือ: เตรียมอาหารมาเผื่อ "คนทั้งห้อง" ทุกวันแต่แอบให้เลียมเยอะหน่อย "ทำแบบเงียบๆ"',
                    zh: '❤️ 秘密支持：每天为“全班”准备额外的食物，但确保利亚姆分到大的那一份。“保持低调。”'
                },
                consequence: {
                    en: '✅ Humanitarian Win. Liam gets fed and stays in school. He trusts you deeply. However, you aren\'t fixing the root cause (housing). You are spending your own money.',
                    th: '✅ ชนะใจเพื่อนมนุษย์ เลียมอิ่มท้องและเรียนต่อได้ เขายังเชื่อใจคุณมากด้วย แต่คุณไม่ได้แก้ปัญหาที่ต้นเหตุ (เรื่องที่อยู่อาศัย) และต้องควักกระเป๋าตัวเอง',
                    zh: '✅ 人道主义获胜。利亚姆填饱了肚子，继续上学。他深受感动，非常信任你。然而，你并没有解决根本原因（住房问题）。你是在花自己的钱。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Social Services: Report the situation to the school counselor and child protective services immediately.',
                    th: '🛡️ แจ้งหน่วยงาน: แจ้งเรื่องนี้กับครูแนะแนวและหน่วยงานคุ้มครองเด็กทันที',
                    zh: '🛡️ 社会服务：立即向学校辅导员和儿童保护机构报告情况。'
                },
                consequence: {
                    en: '⚠️ Traumatic Intervention. Liam is put into the foster system. He is safe and fed, but he feels you betrayed his secret and ruined his family. High ethics, low empathy.',
                    th: '⚠️ การช่วยที่รุนแรง เลียมถูกส่งเข้าสถานสงเคราะห์ เขามีข้าวกินและปลอดภัยดีแต่รู้สึกว่าคุณทรยศความลับและทำลายครอบครัวเขา จริยธรรมสูงแต่น้ำใจต่ำ',
                    zh: '⚠️ 造成创伤的干预。利亚姆被送入了寄养系统。他虽然安全且有饭吃，但他觉得你背叛了他的秘密，毁了他的家庭。高道德，低同理心。'
                },
                stats: { competence: 45, ethics: 45, leadership: 45, innovation: 15 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Resource Coordinator: Discreetly help Liam\'s family connect with local charities and the school\'s emergency fund.',
                    th: '🤝 ประสานงานช่วยเหลือ: แอบช่วยครอบครัวของเลียมติดต่อองค์กรการกุศลในพื้นที่และขอทุนฉุกเฉินของโรงเรียน',
                    zh: '🤝 资源协调：谨小慎微地帮助利亚姆的家人联系当地慈善机构和学校的应急基金。'
                },
                consequence: {
                    en: '🌟 Holistic Victory. The family gets housing support AND food. Liam stays in school and his grades improve. You used the system to actually fix the life. Masterful leadership.',
                    th: '🌟 ชัยชนะที่ครบวงจร ครอบครัวเขาได้ทั้งที่พักและอาหาร เลียมเรียนต่อได้และเกรดดีขึ้น คุณใช้ระบบช่วยคนให้ลืมตาอ้าปากได้จริงๆ ภาวะผู้นำขั้นเทพ',
                    zh: '🌟 全面胜利。该家庭获得了住房支持和食物。利亚姆留在学校，成绩也有所提高。你利用现有体系真正改善了生活。高超的领导力。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Boundaries: "I am a teacher, not a social worker. I will treat him like any other student and grade him on his performance."',
                    th: '🤐 รักษาขอบเขต: "ฉันเป็นครู ไม่ใช่นักสังคมสงเคราะห์ ฉันจะปฏิบัติกับเขาเหมือนเด็กคนอื่นและให้เกรดตามผลงาน"',
                    zh: '🤐 保持界限：“我是老师，不是社会工作者。我会像对待其他学生一样对待他，并根据他的表现评分。”'
                },
                consequence: {
                    en: '💀 Tragic Ending. Liam fails your class and eventually drops out to live on the streets full-time. You maintained "professional boundaries" but failed as a human.',
                    th: '💀 จุดจบที่น่าสลด เลียมสอบตกวิชาคุณและลาออกไปอยู่ข้างถนนถาวร คุณรักษา "ขอบเขตความเป็นมืออาชีพ" ได้แต่ล้มเหลวในความเป็นมนุษย์',
                    zh: '💀 悲剧结局。利亚姆你的课没及格，最终辍学成了一名全职流浪汉。你维护了“职业界限”，但在人性关怀上失败了。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_045',
        text: {
            en: '🚁 The Helicopter Parent: A parent, Mrs. Sharp, demands to sit in the back of your classroom every day to "observe" your teaching because she thinks you are "too experimental."',
            th: '🚁 ผู้ปกครองจอมบงการ: มิสซิสชาร์ป เรียกร้องขอมานั่งหลังห้องเรียนทุกวันเพื่อ "สังเกตการณ์" การสอนของคุณ เพราะเธอมองว่าคุณ "ชอบทดลองอะไรแปลกๆ เกินไป"',
            zh: '🚁 直升机家长：家长夏普夫人要求每天坐在你教室后面“观察”你的教学，因为她认为你“太爱搞实验了”。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Firm Boundary: "No. My classroom is a safe space for students to make mistakes, which requires privacy. You can see the lesson plans, but you cannot sit in."',
                    th: '🛡️ ขีดเส้นตาย: "ไม่ครับ ห้องเรียนของผมคือพื้นที่ปลอดภัยที่เด็กมีสิทธิทำพลาด ซึ่งต้องมีความเป็นส่วนตัว คุณดูแผนการสอนได้แต่จะเข้ามานั่งไม่ได้"',
                    zh: '🛡️ 坚定的界限：“不行。我的教室是学生们犯错的安全空间，这需要隐私。您可以看教案，但不能旁听。”'
                },
                consequence: {
                    en: '✅ Authority Reclaimed. Students feel relieved they aren\'t being watched. Mrs. Sharp complains to the board, but the Principal backs you up for protecting student privacy.',
                    th: '✅ กู้คืนอำนาจในห้องเรียน นักเรียนโล่งใจที่ไม่ต้องถูกจ้องจับผิด มิสซิสชาร์ปร้องเรียนบอร์ด แต่ศิษย์และอาจารย์ใหญ่สนับสนุนคุณเรื่องการปกป้องความเป็นส่วนตัวของเด็ก',
                    zh: '✅ 夺回权威。学生们因为不受监视而感到轻松。夏普夫人向校董会投诉，但校长支持你保护学生隐私。'
                },
                stats: { competence: 40, ethics: 40, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Open Door Invitation: Invite her once a month for a scheduled "Parent Showcase" instead of every day.',
                    th: '🤝 ข้อเสนอพบกันครึ่งทาง: นัด "วันโชว์ผลงานผู้ปกครอง" เดือนละครั้งแทนที่จะให้เข้ามาทุกวัน',
                    zh: '🤝 开门邀请：邀请她参加每月一次的“家长展示日”，而不是让她每天都来。'
                },
                consequence: {
                    en: '✅ Strategic Peace. She feels included and "expert" while you keep your daily autonomy. It builds a bridge with a difficult parent.',
                    th: '✅ ยุทธศาสตร์สันติภาพ เธอรู้สึกมีส่วนร่วมและเป็น "คนสำคัญ" ในขณะที่คุณยังสอนตามปกติได้ทุกวัน เป็นการสร้างสัมพันธ์กับพ่อแม่ที่เรื่องเยอะได้ดี',
                    zh: '✅ 策略性和平。她感到了被接纳和受尊重，而你也保持了日常教学的自主权。这与难缠的家长建立了桥梁。'
                },
                stats: { competence: 45, ethics: 35, leadership: 40, innovation: 35 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Total Submission: Let her sit in. "I have nothing to hide. If it keeps the peace, so be it."',
                    th: '🤐 ยอมจำนน: ให้เขาเข้ามานั่งเถอะ "ผมไม่มีอะไรปิดบัง ถ้ามันทำให้บ้านเมืองสงบก็เอาเถอะ"',
                    zh: '🤐 全面妥协：让她旁听。 “我没有什么好隐瞒的。如果这能维持和平，那就这样吧。”'
                },
                consequence: {
                    en: '💀 Classroom Chill. Students are terrified of her and stop participating. You spend 50% of your time defending your choices to her. You lost control of your environment.',
                    th: '💀 ห้องเรียนเป็นน้ำแข็ง นักเรียนหวาดกลัวเธอจนไม่กล้ามีส่วนร่วม คุณต้องเสียเวลา 50% ไปกับการแก้ตัวเรื่องวิธีสอนให้เธอฟัง คุณเสียการควบคุมห้องเรียนไปแล้ว',
                    zh: '💀 课堂僵局。学生们都怕她，不再参与课堂活动。你花了 50% 的时间向她解释你的教学选择。你失去了对教学环境的控制。'
                },
                stats: { competence: 25, ethics: 20, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 Feedback Loop: Ask Mrs. Sharp to be a "volunteer helper" for a specific project instead of a passive observer.',
                    th: '🔄 ดึงมาเป็นพวก: ขอให้มิสซิสชาร์ปมาเป็น "อาสาสมัครช่วยงาน" ในโปรเจกต์หนึ่งแทนที่จะให้นั่งดูเฉยๆ',
                    zh: '🔄 反馈循环：请夏普夫人担任特定项目的“志愿助手”，而不是一名被动的观察者。'
                },
                consequence: {
                    en: '🌟 Psychological Flip. She realizes how hard teaching is and becomes your biggest supporter. You co-opted the enemy into an ally. Genius leadership.',
                    th: '🌟 พลิกจิตวิทยา เธอรู้ซึ้งว่าการสอนมันเหนื่อยแค่ไหนและกลับมาเป็นฝ่ายสนับสนุนคุณแทน คุณเปลี่ยนศัตรูให้เป็นมิตรได้ ภาวะผู้นำอัจฉริยะ',
                    zh: '🌟 心理逆转。她意识到教学有多么辛苦，转而成了你最大的支持者。你成功地将对手变成了盟友。天才般的领导力。'
                },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 45 }
            }
        ]
    },

    {
        id: 'te_046',
        text: {
            en: '🚨 The False Accusation: A student, Chloe, accuses your colleague of hitting her. You were in the hallway at the time and you know for a fact the colleague didn\'t even touch her. Chloe is a student you have a great relationship with.',
            th: '🚨 คำใส่ร้าย: โคลอี้ นักเรียนในห้อง กล่าวหาว่าครูอีกคนตบเธอ คุณอยู่ในโถงทางเดินตอนนั้นพอดีและรู้ความจริงว่าครูคนนั้นไม่ได้แตะต้องเธอเลย โคลอี้คือนักเรียนที่คุณสนิทและรักมาก',
            zh: '🚨 诬告：学生克洛伊指责你的同事打了她。当时你就在走廊里，你确切地知道同事甚至连碰都没碰过她。克洛伊是一个和你关系很好的学生。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Truth First: Provide an immediate, honest testimony to the administration clearing your colleague.',
                    th: '⚖️ ความจริงเป็นสิ่งไม่ตาย: ให้การตามจริงกับฝ่ายบริหารทันทีเพื่อช่วยเพื่อนร่วมงานว่าเขาบริสุทธิ์',
                    zh: '⚖️ 事实至上：立即向校方提供诚实的证词，为你的同事洗清冤屈。'
                },
                consequence: {
                    en: '✅ Integrity Win. Your colleague\'s career is saved. Chloe is suspended for lying. She feels betrayed by you and the relationship is dead. You chose truth over loyalty.',
                    th: '✅ ชนะด้วยความสัตย์จริง อาชีพของเพื่อนร่วมงานรอด โคลอี้ถูกพักการเรียนฐานโกหก เธอรู้สึกว่าถูกคุณทรยศและความสัมพันธ์ก็ขาดสะบั้น คุณเลือกความจริงมากกว่าพวกพ้อง',
                    zh: '✅ 正直获胜。你的同事保住了饭碗。克洛伊因撒谎被停学。她觉得被你背叛了，你们的关系也到头了。你选择了真理而非私交。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 15 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Private Talk with Chloe: Confront Chloe privately. "I saw everything. You need to take this back before it ruins a life."',
                    th: '🤝 คุยกับโคลอี้ส่วนตัว: เผชิญหน้ากับโคลอี้ "ครูเห็นทุกอย่างนะ เธอต้องไปถอนคำพูดก่อนที่จะทำลายชีวิตคนอื่น"',
                    zh: '🤝 与克洛伊私下谈话：私下找克洛伊谈谈。“我目睹了全过程。在它毁掉别人的生活之前，你需要收回这段话。”'
                },
                consequence: {
                    en: '🌟 Moral Courage. Chloe admits she lied for attention and confesses to the principal. You saved the colleague AND the student from a permanent mistake. Masterful mediation.',
                    th: '🌟 ความกล้าหาญทางจริยธรรม โคลี้ยอมรับว่าเรียกร้องความสนใจและไปสารภาพกับอาจารย์ใหญ่ คุณช่วยทั้งเพื่อนร่วมงานและลูกศิษย์ไม่ให้เดินทางผิด ภาวะผู้นำที่ยอดเยี่ยม',
                    zh: '🌟 道德勇气。克洛伊承认她为了博关注而撒谎，并向校长自首。你从一个永久性的错误中拯救了同事，也拯救了学生。高超的调解技巧。'
                },
                stats: { competence: 45, ethics: 45, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Stay Out of It: "I don\'t want to get involved. I\'ll just say I didn\'t see anything."',
                    th: '🤐 อย่าหาเรื่องใส่ตัว: "ฉันไม่อยากยุ่ง จะบอกแค่ว่าไม่เห็นอะไรทั้งนั้น"',
                    zh: '🤐 置身事外：“我不想卷入其中。我只会说我什么也没看见。”'
                },
                consequence: {
                    en: '💀 Failure of Character. Your colleague is fired and their life is ruined. You live with the guilt forever. You kept your connection with Chloe but lost your soul.',
                    th: '💀 ล้มเหลวในความเป็นคน เพื่อนร่วมงานถูกไล่ออกและชีวิตพัง คุณต้องอยู่กับความรู้สึกผิดไปตลอดกาล คุณรักความสัมพันธ์กับโคลอี้ได้แต่เสียจิตวิญญาณความเป็นครูไปแล้ว',
                    zh: '💀 人格失败。你的同事被开除了，生活也毁了。你将永远生活在愧疚中。你保住了与克洛伊的关系，但失去了灵魂。'
                },
                stats: { competence: 20, ethics: 10, leadership: 15, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ Support Chloe: Assume she must have a reason for feeling attacked even if no physical contact happened.',
                    th: '🗣️ สนับสนุนโคลอี้: เชื่อว่าที่เธอพูดต้องมีเหตุผลที่ทำให้เธอรู้สึกถูกคุกคาม แม้ครูคนนั้นจะไม่ได้แตะตัวเธอก็ตาม',
                    zh: '🗣️ 支持克洛伊：假定她觉得受到攻击肯定是有原因的，即使没有发生肢体接触。'
                },
                consequence: {
                    en: '⚠️ Ideological Blindness. You help Chloe win a legal battle based on a lie. You gain the "pro-student" reputation but you are factually wrong. Ethics plummet.',
                    th: '⚠️ ความลำเอียงทางอุดมการณ์ คุณช่วยโคลอี้ชนะคดีบนคำโกหก คุณได้ชื่อว่าเป็นครู "สายซัพพอร์ตเด็ก" แต่ความจริงมันไม่ใช่ จริยธรรมของคุณดิ่งลงเหว',
                    zh: '⚠️ 思想盲从。你基于谎言帮助克洛伊赢得了法律诉讼。你获得了“亲学生”的名声，但事实上你错了。职业道德一落千丈。'
                },
                stats: { competence: 25, ethics: 10, leadership: 20, innovation: 15 }
            }
        ]
    },

    {
        id: 'te_047',
        text: {
            en: '💰 The Golden Opportunity: A elite private school offers you double your salary, a private office, and 10-student classes. But your current public school students, who need you most, will lose their best teacher.',
            th: '💰 โอกาสทอง: โรงเรียนเอกชนระดับหัวกะทิเสนอเงินเดือน 2 เท่า ห้องทำงานส่วนตัว และห้องเรียนที่มีเด็กแค่ 10 คน แต่ถ้าคุณไป นักเรียนในโรงเรียนรัฐบาลปัจจุบันที่ต้องการคุณที่สุด จะเสียครูที่ดีที่สุดไป',
            zh: '💰 黄金机遇：一所精英私立学校为你提供双倍薪水、私人办公室和 10 人的小班教学。但你目前公立学校的学生们——那些最需要你的孩子——将失去他们最好的老师。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛌 Personal Wellbeing: Take the job. "I need to take care of my own family and future. I have served enough."',
                    th: '🛌 ความสุขส่วนตัว: ไปรับงานนั้น "ฉันต้องดูแลครอบครัวและอนาคตตัวเอง ฉันรับใช้ที่นี่มาพอแล้ว"',
                    zh: '🛌 个人福祉：接受这份工作。“我需要照顾好自己的家庭和未来。我也贡献得够多了。”'
                },
                consequence: {
                    en: '✅ Logical Success. Your quality of life improves drastically. You can afford a house. Your public school students are sad but understand. You are human, not a martyr.',
                    th: '✅ ความสำเร็จตามตรรกะ คุณภาพชีวิตคุณดีขึ้นแบบก้าวกระโดด มีเงินซื้อบ้าน นักเรียนที่เดิมเสียใจแต่เข้าใจ คุณคือมนุษย์ ไม่ใช่ผู้วิเศษที่ต้องเสียสละตลอดเวลา',
                    zh: '✅ 理性的成功。你的生活质量大幅提高。你买得起房子了。你公立学校的学生虽然难过，但表示理解。你是人，不是殉道者。'
                },
                stats: { competence: 40, ethics: 35, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '✊ Stay & Fight: Decline the offer. "These kids have nothing; they can\'t lose me too."',
                    th: '✊ ยืนหยัดสู้ต่อ: ปฏิเสธข้อเสนอ "เด็กพวกนี้ไม่มีอะไรให้ยึดเหนี่ยวแล้ว พวกเขาจะเสียฉันไปอีกไม่ได้"',
                    zh: '✊ 留下来战斗：拒绝邀请。“这些孩子一无所有；他们不能再失去我了。”'
                },
                consequence: {
                    en: '🌟 Moral Legend. You become the heart of the school. Students show massive improvement because they know you chose them. You are poor but deeply fulfilled.',
                    th: '🌟 ตำนานทางศีลธรรม คุณกลายเป็นหัวใจของโรงเรียน นักเรียนมีพัฒนาการที่ยอดเยี่ยมเพราะเขารู้ว่าคุณเลือกจะอยู่เพื่อพวกเขา คุณอาจจะจนแต่ใจคุณอิ่มเอมที่สุด',
                    zh: '🌟 道德传奇。你成了这所学校的核心。学生们进步巨大，因为他们知道你选择了他们。你虽然清贫，但内心极度充实。'
                },
                stats: { competence: 45, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Hybrid Compromise: Take the job, but start a free weekend tutoring program for your old public school students.',
                    th: '🔄 ทางสายกลาง: ไปรับงานใหม่ แต่จัดโปรแกรมติวฟรีช่วงสุดสัปดาห์ให้นักเรียนโรงเรียนรัฐบาลเดิมทีคุณเคยสอน',
                    zh: '🔄 混合折中方案：接受这份工作，但为以前公立学校的学生启动一项免费周末辅导计划。'
                },
                consequence: {
                    en: '✅ The Best of Both Worlds. You get the money and keep the impact. You are exhausted working 7 days a week, but you are a community hero. Masterful balance.',
                    th: '✅ ได้ทั้งสองอย่าง คุณได้เงินและยังคงมีอิทธิพลต่อเด็ก คุณเหนื่อยมากที่ต้องทำ 7 วันต่อสัปดาห์ แต่คุณคือฮีโร่ของชุมชน การบริหารจัดการยอดเยี่ยม',
                    zh: '✅ 两全其美。你拿到了钱，也保持了影响力。虽然每周工作 7 天精疲力竭，但你是社区英雄。高超的平衡术。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Use as Leverage: Use the offer to demand a raise from your current underfunded school.',
                    th: '📢 ใช้เป็นข้อต่อรอง: ใช้ข้อเสนอนั้นมาบีบขอขึ้นเงินเดือนกับโรงเรียนรัฐบาลเดิมที่งบก็น้อยอยู่แล้ว',
                    zh: '📢 作为筹码：利用该工作邀请向你目前资金不足的学校要求加薪。'
                },
                consequence: {
                    en: '⚠️ Backfire. The school has no money even if they want to pay you. You look out of touch and greedy. The Principal tells you to just leave. You lost your leverage and your reputation.',
                    th: '⚠️ เข้าตัว โรงเรียนไม่มีเงินให้คุณจริงๆ แม้เขาจะอยากให้อยู่ คุณดูเหมือนพวกหน้าเงินและไม่สนความเป็นจริง อาจารย์ใหญ่บอกให้คุณไปเถอะ คุณเสียทั้งอำนาจต่อรองและชื่อเสียง',
                    zh: '⚠️ 弄巧成拙。学校即使想付你钱也没钱。你看起来脱离现实且贪婪。校长直接让你走人。你失去了筹码，也丢了名声。'
                },
                stats: { competence: 30, ethics: 15, leadership: 20, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_048',
        text: {
            en: '📱 The Phone Policy: The school board mandates a 100% ban on phones. You know that for some low-income students, their phone is their only computer for research.',
            th: '📱 นโยบายมือถือ: บอร์ดโรงเรียนสั่งแบนมือถือ 100% แต่คุณรู้ดีว่าสำหรับเด็กยากจนบางคน มือถือคือคอมพิวเตอร์เครื่องเดียวที่เขาใช้ค้นคว้าหาความรู้ได้',
            zh: '📱 手机政策：学校董事会下令全面禁用手机。你清楚对于一些低收入家庭的学生来说，手机是他们进行研究所用的唯一“电脑”。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Follow the Rule: "Rules apply to everyone. Leave phones in the lockers or they are confiscated."',
                    th: '🚨 ทำตามกฎเป๊ก: "กฎต้องคือกฎ เก็บมือถือไว้ในล็อกเกอร์ ไม่งั้นจะถูกยึด"',
                    zh: '🚨 遵守规定：“规则对每个人都适用。手机留在储物柜里，否则没收。”'
                },
                consequence: {
                    en: '⚠️ Standard Compliance. The classroom is quiet but students without laptops fall behind. You followed the board but the achievement gap widened.',
                    th: '⚠️ ทำตามมาตรฐาน ห้องเรียนสงบเงียบดีแต่เด็กที่ไม่มีแล็ปท็อปเรียนไม่ทันเพื่อน คุณทำความความต้องการบอร์ดแต่เพิ่มช่องว่างทางการศึกษาให้กว้างขึ้น',
                    zh: '⚠️ 标准合规。课堂很安静，但没有电脑的学生落后了。你遵循了董事会的要求，但成绩差距扩大了。'
                },
                stats: { competence: 35, ethics: 30, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Tactical Disobedience: Allow phones for "Academic Research" only, and hide them when admins walk by.',
                    th: '🤫 แหกกฎอย่างมีชั้นเชิง: อนุญาตให้ใช้มือถือเพื่อ "การวิจัยทางวิชาการ" เท่านั้น และแอบเก็บเวลาฝ่ายบริหารเดินผ่าน',
                    zh: '🤫 战术性不服从：仅允许出于“学术研究”目的使用手机，并在管理人员走过时把它们藏起来。'
                },
                consequence: {
                    en: '✅ Human Win. Your students stay caught up. They respect you for "having their backs." You are a rebel with a cause, but you risk a formal reprimand.',
                    th: '✅ ชนะในความเป็นคน นักเรียนเรียนทันเพื่อน พวกเขาเคารพคุณที่ "คอยปกป้องพวกเขา" คุณคือนักปฏิวัติที่มีอุดมการณ์ แต่เสี่ยงที่จะถูกตำหนิอย่างเป็นทางการ',
                    zh: '✅ 人情胜利。你的学生们跟上了进度。他们因为你“挺他们”而尊重你。你是个有正当理由的反叛者，但也面临正式训诫的风险。'
                },
                stats: { competence: 40, ethics: 40, leadership: 45, innovation: 45 }
            },
            {
                id: 'C',
                text: {
                    en: '📢 Demand Equity: Refuse the ban until the school provides a 1-to-1 laptop program for every student.',
                    th: '📢 เรียกร้องความเท่าเทียม: ปฏิเสธการแบนจนกว่าโรงเรียนจะจัดหาแล็ปท็อปให้เด็กได้ครบทุกคนแบบ 1 ต่อ 1',
                    zh: '📢 要求公平：在学校为每名学生提供 1 比 1 的笔记本电脑项目之前，拒绝执行禁令。'
                },
                consequence: {
                    en: '🌟 Policy Hero. Your protest gains media attention. The district is shamed into buying chromebooks for all. You solved the root problem for the entire school. High leadership.',
                    th: '🌟 ฮีโร่นักนโยบาย การประท้วงของคุณเป็นข่าว สื่อให้ความสนใจ จนเขตการศึกษาต้องยอมซื้อ Chromebook ให้เด็กทุกคน คุณแก้ปัญหาที่ต้นเหตุให้คนทั้งโรงเรียน ภาวะผู้นำสูงสุดยอด',
                    zh: '🌟 政策英雄。你的抗议引起了媒体关注。学区被迫为所有人购买了 Chromebook。你解决了全校的根本问题。高领导力。'
                },
                stats: { competence: 50, ethics: 45, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 Visual Curriculum: Switch all lessons to printed paper handouts so no technology is needed at all.',
                    th: '🔄 กลับสู่ยุคกระดาษ: เปลี่ยนบทเรียนทั้งหมดเป็นใบงานกระดาษ เพื่อจะได้ไม่ต้องใช้เทคโนโลยีเลย',
                    zh: '🔄 视觉课程：将所有课程改为打印纸质讲义，这样就完全不需要任何技术手段了。'
                },
                consequence: {
                    en: '⚠️ Retrograde Safety. No one breaks the rules, but your students are unprepared for the digital world. You wasted a fortune on paper. You played it safe but boring.',
                    th: '⚠️ ถอยหลังเพื่อความปลอดภัย ไม่มีใครทำผิดกฎแต่นักเรียนจะไม่มีทักษะสำหรับโลกดิจิทัล คุณเสียเงินไปกับค่ากระดาษมหาศาล คุณเลือกทางที่ปลอดภัยแต่น่าเบื่อที่สุด',
                    zh: '⚠️ 退步的安全。没有人违反规则，但你的学生没能为数字世界做好准备。你浪费了大量的纸张。你选择了稳妥但乏味的方式。'
                },
                stats: { competence: 30, ethics: 40, leadership: 25, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_049',
        text: {
            en: '🎭 The Class Clown: A student, Ryan, is brilliantly funny but constantly disrupts the lesson with jokes. The class loves him, but you are falling behind on the curriculum.',
            th: '🎭 ตัวตลกในห้อง: ไรอัน เป็นเด็กที่ตลกอัจฉริยะมากแต่มักจะแทรกมุกตลกกลางคาบเรียนประจำ เพื่อนๆ ชอบเขามาก แต่คุณกำลังสอนไม่ทันหลักสูตร',
            zh: '🎭 班级小丑：学生瑞安非常有幽默感，但经常以讲笑话的方式打断课程。班里同学都很喜欢他，但你的教学进度落后了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Strict Discipline: Send Ryan to the office every time he makes a joke. "Focus is non-negotiable."',
                    th: '🚨 ลงโทษเด็ดขาด: ส่งไรอันไปห้องปกครองทุกครั้งที่เขาเล่นมุก "สมาธิในการเรียนต่อรองไม่ได้"',
                    zh: '🚨 严厉纪律：瑞安每次讲笑话都把他送到办公室。“注意力集中是不容谈判的。”'
                },
                consequence: {
                    en: '⚠️ Professional Coldness. The classroom becomes efficient but joyful-less. Ryan starts to hate school and his grades drop. You are boring and strict.',
                    th: '⚠️ ความเย็นชาแบบมืออาชีพ ห้องเรียนมีประสิทธิภาพแต่ไร้ความร่าเริง ไรอันเริ่มเกลียดโรงเรียนและเกรดตก คุณกลายเป็นครูที่น่าเบื่อและเจ้าระเบียบ',
                    zh: '⚠️ 职业冷漠。课堂变得高效但缺乏快乐。瑞安开始讨厌学校，成绩也下降了。你显得乏味且严厉。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🎤 "The Ryan Show": Give Ryan 5 minutes at the end of class to do a comedy routine, IF the class stays focused during the lesson.',
                    th: '🎤 "ไรอันโชว์": ให้เวลาไรอัน 5 นาทีตอนท้ายชั่วโมงเพื่อแสดงตลก "ถ้า" ทั้งห้องตั้งใจเรียนตลอดทั้งคาบ',
                    zh: '🎤 “瑞安秀”：如果在课堂上大家都能保持专注，就在下课前给瑞安 5 分钟表演喜剧。'
                },
                consequence: {
                    en: '🌟 Engagement Win! The class works harder than ever to earn their 5 minutes of fun. Ryan feels valued instead of punished. You used his talent as an incentive.',
                    th: '🌟 ชนะด้วยการมีส่วนร่วม! ทั้งห้องตั้งใจเรียนยิ่งกว่าเดิมเพื่อแลกกับ 5 นาทีแห่งความสุข ไรอันรู้สึกว่าตัวเองมีค่ามากกว่าถูกทำโทษ คุณใช้ความสามารถเขาเป็นรางวัลล่อใจที่ยอดเยี่ยม',
                    zh: '🌟 参与感获胜！全班为了赢得那 5 分钟的快乐，学习比以往任何时候都更加努力。瑞安感到了被认可而非被惩罚。你利用了他的才华作为激励。'
                },
                stats: { competence: 45, ethics: 40, leadership: 45, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Educational Pivot: Ask Ryan to help you present lessons using his humor to make the concepts more memorable.',
                    th: '🔄 ดึงมาช่วยสอน: ขอให้ไรอันช่วยพรีเซนต์บทเรียนโดยใช้มุกตลกของเขาเพื่อให้เพื่อนๆ จำเนื้อหาได้แม่นขึ้น',
                    zh: '🔄 教学转身：请瑞安协助你讲解课程，利用他的幽默让概念更加深入人心。'
                },
                consequence: {
                    en: '🌟 Pedagogical Masterstroke. Ryan becomes your unofficial co-teacher. Scores improve because the lessons are entertaining. High leadership and innovation.',
                    th: '🌟 กลยุทธ์การสอนชั้นครู ไรอันกลายเป็นครูช่วยสอนอย่างไม่เป็นทางการ คะแนนสอบดีขึ้นเพราะบทเรียนสนุกสนาน ภาวะผู้นำและนวัตกรรมสูงมาก',
                    zh: '🌟 教学绝招。瑞安成了你的非正式助教。由于课程生动有趣，成绩有所提高。高领导力和高创新。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Ignore it: Just try to talk over him and hope he gets bored.',
                    th: '🤐 ทำเป็นเมิน: พยายามสอนแทรกมุกเขาไปเรื่อยๆ หวังว่าสักวันเขาจะเบื่อไปเอง',
                    zh: '🤐 无视他：只是试图盖过他的声音说话，希望他会觉得无聊。'
                },
                consequence: {
                    en: '💀 Chaos. Ryan gets louder to get the attention. You lose all authority. The classroom becomes a playground. You look weak.',
                    th: '💀 ความโกลาหล ไรอันจะลามปามหนักขึ้นเพื่อเรียกร้องความสนใจ คุณเสียอำนาจคุมห้องเรียน ห้องกลายเป็นสนามเด็กเล่น คุณดูอ่อนแอมาก',
                    zh: '💀 混乱。瑞安为了获得关注而变本加厉。你失去了所有权威。教室变成了操场。你看起来很软弱。'
                },
                stats: { competence: 15, ethics: 15, leadership: 15, innovation: 10 }
            }
        ]
    },

    {
        id: 'te_050',
        text: {
            en: '🎓 The Final Choice: It\'s the end of your career. How do you want to be remembered? You have one final speech to give to your graduating class.',
            th: '🎓 ทางเลือกสุดท้าย: นี่คือจุดสิ้นสุดของอาชีพครู คุณอยากให้คนจดจำคุณอย่างไร? คุณมีสถาบันสุดท้ายที่จะกล่าวกับนักเรียนที่กำลังจะจบการศึกษา',
            zh: '🎓 最终的选择：职业生涯结束了。你希望被如何怀念？你最后还有一次面向毕业生的演讲。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧠 The Expert: "I hope I taught you the facts and the rigor needed to succeed in the real world."',
                    th: '🧠 ผู้เชี่ยวชาญ: "ครูหวังว่าครูได้สอนความจริงและความเข้มงวดที่จำเป็นต่อความสำเร็จในโลกความจริงให้พวกเธอแล้ว"',
                    zh: '🧠 专家： “我希望我教会了你们进入现实世界并取得成功所需的事实和严谨态度。”'
                },
                consequence: {
                    en: '✅ Intellectual Legacy. You are remembered as a tough, brilliant teacher who produced winners. Your students are doctors and lawyers. You win the "Highest Competence" ending.',
                    th: '✅ มรดกทางสติปัญญา คุณถูกจดจำในฐานะครูที่เก่งและเข้มงวดที่สร้างผู้ชนะ ลูกศิษย์คุณกลายเป็นหมอและทนาย คุณจบด้วยฉาก "ความสามารถสูงสุด"',
                    zh: '✅ 智慧遗产。你作为一名严厉、出众、培养出成功者的老师而被怀念。你的学生中产出了医生和律师。你赢得了“最高胜任力”结局。'
                },
                stats: { competence: 100, ethics: 60, leadership: 80, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '❤️ The Heart: "I hope you remember that someone believed in you, even when you didn\'t believe in yourselves."',
                    th: '❤️ ดวงใจของศิษย์: "ครูหวังว่าพวกเธอจะจำได้ว่ามีใครบางคนที่เชื่อในตัวพวกเธอเสมอ แม้ในวันที่พวกเธอไม่เชื่อมั่นในตัวเองเลยก็ตาม"',
                    zh: '❤️ 爱心： “我希望你们记住，即使在你们不相信自己的时候，也有人相信你们。”'
                },
                consequence: {
                    en: '🌟 Emotional Legacy. Students visit your grave years later. You are the teacher who saved lives and mended hearts. You win the "Highest Empathy & Ethics" ending.',
                    th: '🌟 มรดกทางใจ นักเรียนยังกลับมาหาคุณแม้ผ่านไปหลายปี คุณคือครูที่ช่วยชีวิตคนและรักษาใจที่แตกสลาย คุณจบด้วยฉาก "ความเห็นใจและจริยธรรมสูงสุด"',
                    zh: '🌟 情感遗产。多年后学生们仍会去拜访你。你是那位拯救生命、修补心灵的老师。你赢得了“最高共情与道德”结局。'
                },
                stats: { competence: 60, ethics: 100, leadership: 80, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '💡 The Innovator: "I hope I taught you to break the rules, think for yourselves, and change the world."',
                    th: '💡 ผู้นำนวัตกรรม: "ครูหวังว่าครูได้สอนให้พวกเธอกล้าแหกกฎ คิดด้วยตัวเอง และกล้าที่จะเปลี่ยนโลกทางใบนี้"',
                    zh: '💡 创新者： “我希望我教会了你们打破规则、独立思考并改变世界。”'
                },
                consequence: {
                    en: '🔥 Visionary Legacy. Your students become activists, artists, and entrepreneurs. You are remembered as the teacher who started a revolution. You win the "Highest Innovation" ending.',
                    th: '🔥 มรดกแห่งวิสัยทัศน์ ลูกศิษย์คุณกลายเป็นนักกิจกรรม ศิลปิน และผู้ประกอบการ คุณถูกจดจำในฐานะครูที่เริ่มจุดไฟแห่งการปฏิวัติ คุณจบด้วยฉาก "นวัตกรรมสูงสุด"',
                    zh: '🔥 远见遗产。你的学生成为了活动家、艺术家和企业家。你作为一名发起革命的老师而被怀念。你赢得了“最高创新”结局。'
                },
                stats: { competence: 70, ethics: 80, leadership: 90, innovation: 100 }
            },
            {
                id: 'D',
                text: {
                    en: '👑 The Leader: "I hope I taught you how to lead, how to take responsibility, and how to stand tall in the storm."',
                    th: '👑 ผู้นำที่แท้จริง: "ครูหวังว่าครูได้สอนให้พวกเธอรู้วิธีการนำคน รู้วิธีรับผิดชอบ และรู้วิธีที่จะยืนหยัดอย่างสง่างามท่ามกลางพายุ"',
                    zh: '👑 领导者： “我希望我教会了你们如何领导、如何承担责任以及如何在暴风雨中屹立不倒。”'
                },
                consequence: {
                    en: '🏛️ Institutional Legacy. You become the Principal, then the Superintendent. You changed the whole district for the better. You win the "Highest Leadership" ending.',
                    th: '🏛️ มรดกแห่งสถาบัน คุณได้เป็นอาจารย์ใหญ่ และต่อด้วยหัวหน้าเขตการศึกษา คุณเปลี่ยนทั้งเขตให้ดีขึ้นได้จริง คุณจบด้วยฉาก "ภาวะผู้นำสูงสุด"',
                    zh: '🏛️ 机构遗产。你成了校长，后来成了学区长。你让整个学区变得更好了。你赢得了“最高领导力”结局。'
                },
                stats: { competence: 80, ethics: 80, leadership: 100, innovation: 70 }
            }
        ]
    }
];


