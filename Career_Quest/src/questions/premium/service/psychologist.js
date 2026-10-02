export const psychologistQuestions = [
    {
        id: 'psychologist_001',
        text: {
            en: '🧠 The Dangerous Patient: A new patient confesses to violent fantasies about harming their boss. They have a specific plan but claim they "would never actually do it." The law in your area regarding "duty to warn" is ambiguous.',
            th: '🧠 ผู้ป่วยอันตราย: ผู้ป่วยรายใหม่สารภาพถึงจินตนาการรุนแรงที่จะทำร้ายเจ้านาย พวกเขามีแผนการชัดเจนแต่อ้างว่า "ไม่มีทางทำจริงแน่นอน" กฎหมายในพื้นที่ของคุณเกี่ยวกับ "หน้าที่ในการเตือน" นั้นคลุมเครือ',
            zh: '🧠 危险病人：一位新病人承认有伤害老板的暴力幻想。他们有具体的计划，但声称"绝对不会真的去做"。你所在地区关于"警告义务"的法律模棱两可。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Report Immediately: "I cannot take the risk. I must breach confidentiality to warn the potential victim and police. Safety first."',
                    th: '🚨 รายงานทันที: "ฉั้นรับความเสี่ยงไม่ได้ ฉันต้องละเมิดการรักษาความลับเพื่อเตือนเหยื่อที่อาจเกิดขึ้นและตำรวจ ความปลอดภัยต้องมาก่อน"',
                    zh: '🚨 立即报告："我不能冒险。我必须打破保密协议，警告潜在受害者和警察。安全第一。"'
                },
                consequence: {
                    en: '🛡️ Disaster Averted? The police intervene. The patient feels betrayed and sues you. You win ethically, but your practice suffers reputational damage among privacy advocates.',
                    th: '🛡️ ภัยพิบัติถูกยับยั้ง? ตำรวจเข้าแทรกแซง ผู้ป่วยรู้สึกถูกหักหลังและฟ้องคุณ คุณชนะทางจริยธรรม แต่คลินิกของคุณเสียชื่อเสียงในหมู่ผู้สนับสนุนความเป็นส่วนตัว',
                    zh: '🛡️ 灾难避免？警察介入。病人感到被背叛并起诉你。你在道德上赢了，但在隐私倡导者中，你的诊所声誉受损。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💬 Intensify Therapy: "I\'ll increase sessions to 3 times a week to monitor them closely and work through the anger. Reporting destroys the therapeutic alliance."',
                    th: '💬 เพิ่มความเข้มข้นของการบำบัด: "ฉันจะเพิ่มเซสชันเป็น 3 ครั้งต่อสัปดาห์เพื่อเฝ้าระวังอย่างใกล้ชิดและจัดการกับความโกรธ การรายงานทำลายความสัมพันธ์ในการรักษา"',
                    zh: '💬 加强治疗："我会将疗程增加到每周3次，密切监视他们并化解愤怒。报告会破坏治疗联盟。"'
                },
                consequence: {
                    en: '⚖️ High Stakes Management: The patient slowly improves, trusting you. You saved them from a criminal record. But you lose sleep every night worrying if you made the right call.',
                    th: '⚖️ การจัดการเดิมพันสูง: ผู้ป่วยค่อยๆ ดีขึ้นและไว้ใจคุณ คุณช่วยพวกเขาจากประวัติอาชญากรรม แต่คุณนอนไม่หลับทุกคืนด้วยความกังวลว่าตัดสินใจถูกหรือไม่',
                    zh: '⚖️ 高风险管理：病人慢慢好转，信任你。你把他们从犯罪记录中拯救出来。但你每晚都失眠，担心自己的决定是否正确。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '💊 Refer to Psychiatrist: "This is beyond talk therapy. I\'m referring them for medication immediately and washing my hands of the acute risk."',
                    th: '💊 ส่งต่อจิตแพทย์: "นี่เกินกว่าการบำบัดด้วยการพูดคุย ฉันจะส่งพวกเขาไปรับยาโดยด่วนและลอยตัวจากความเสี่ยงเฉียบพลันนี้"',
                    zh: '💊 转诊精神科医生："这超出了谈话治疗的范畴。我立即转诊他们去服药，并摆脱这种急性风险。"'
                },
                consequence: {
                    en: '🏥 Clinical Detachment: The patient feels abandoned and stops treatment altogether. Two weeks later, a minor incident occurs at their workplace. You avoided liability but failed the patient.',
                    th: '🏥 การปลีกตัวทางคลินิก: ผู้ป่วยรู้สึกถูกทอดทิ้งและหยุดการรักษา สองสัปดาห์ต่อมา เกิดเหตุการณ์เล็กน้อยที่ที่ทำงานเขา คุณเลี่ยงความรับผิดได้แต่ล้มเหลวในการช่วยผู้ป่วย',
                    zh: '🏥 临床脱离：病人感到被遗弃，完全停止治疗。两周后，他们的工作场所发生了一起小事故。你避免了责任，但辜负了病人。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Ignore It: "They are just blowing off steam. Everyone hates their boss sometimes. Let\'s talk about their childhood instead."',
                    th: '🤷 เพิกเฉย: "พวกเขาก็แค่ระบาย ใครๆ ก็เกลียดเจ้านายบ้างเป็นธรรมดา มาคุยเรื่องวัยเด็กกันดีกว่า"',
                    zh: '🤷 忽略它："他们只是在发泄。每个人有时都会讨厌老板。让我们谈谈他们的童年吧。"'
                },
                consequence: {
                    en: '💥 Catastrophe: The patient attacks their boss the next day. The investigation reveals your notes showed you knew. You lose your license and face criminal negligence charges.',
                    th: '💥 หายนะ: ผู้ป่วยทำร้ายเจ้านายในวันรุ่งขึ้น การสอบสวนเผยว่าบันทึกของคุณระบุว่าคุณรู้เรื่อง คุณถูกยึดใบอนุญาตและเผชิญข้อหาประมาทเลินเล่อ',
                    zh: '💥 灾难：第二天病人袭击了老板。调查显示你的笔记表明你是知情的。你被吊销执照并面临刑事过失指控。'
                }
            }
        ]
    },
    {
        id: 'psychologist_002',
        text: {
            en: '💔 The Conflict of Interest: Your daughter starts dating a new man. You realize from her description that her new boyfriend is one of your patients who is being treated for pathological lying and infidelity.',
            th: '💔 ผลประโยชน์ทับซ้อน: ลูกสาวของคุณเริ่มคบหาดูใจกับผู้ชายคนใหม่ คุณตระหนักจากคำบอกเล่าของเธอว่าแฟนใหม่ของเธอคือหนึ่งในผู้ป่วยของคุณที่กำลังรักษาอาการโกหกและนอกใจ',
            zh: '💔 利益冲突：你的女儿开始和一个新男人约会。你从她的描述中意识到，她的新男友是你的一位正在接受病态撒谎和不忠治疗的病人。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Tell Your Daughter: "I can\'t tell you how I know, but break up with him immediately. He is dangerous and not who he says he is."',
                    th: '🛑 บอกลูกสาว: "แม่บอกไม่ได้ว่ารู้ได้ยังไง แต่เลิกกับเขาเดี๋ยวนี้ เขาอันตรายและไม่ใช่คนอย่างที่เขาพูด"',
                    zh: '🛑 告诉你的女儿："我不能告诉你我是怎么知道的，但马上和他分手。他很危险，不是他说的那样。"'
                },
                consequence: {
                    en: '👨‍👩‍👧 Family Saved, Career Risked: Your daughter listens but is confused. If the patient finds out, he can sue you for breach of confidentiality. You chose family over ethics.',
                    th: '👨‍👩‍👧 ครอบครัวปลอดภัย อาชีพเสี่ยง: ลูกสาวเชื่อฟังแต่งุนงง ถ้าผู้ป่วยรู้เรื่อง เขาฟ้องคุณฐานละเมิดความลับได้ คุณเลือกครอบครัวเหนือจริยธรรม',
                    zh: '👨‍👩‍👧 拯救了家庭，冒着职业风险：你女儿听了但很困惑。如果病人发现了，他可以起诉你违反保密协议。你选择了家庭而非道德。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '📝 Terminate Therapy: "I refer the patient to a colleague immediately citing a \'personal conflict\' without specifics, hoping the relationship fizzles out naturally."',
                    th: '📝 ยุติการรักษา: "ฉันส่งต่อผู้ป่วยให้เพื่อนร่วมงานทันทีโดยอ้าง \'ความขัดแย้งส่วนตัว\' โดยไม่ระบุรายละเอียด หวังว่าความสัมพันธ์จะจางหายไปเอง"',
                    zh: '📝 终止治疗："我立即将病人转诊给同事，理由是\'个人冲突\'而不透露具体细节，希望这段关系自然消亡。"'
                },
                consequence: {
                    en: '✅ Professional Response: You follow the code of ethics perfectly. However, you have to watch your daughter potentially get hurt, unable to interfere. It\'s torture.',
                    th: '✅ การตอบสนองอย่างมืออาชีพ: คุณปฏิบัติตามจรรยาบรรณอย่างเคร่งครัด อย่างไรก็ตาม คุณต้องทนดูลูกสาวอาจต้องเสียใจโดยที่ไม่สามารถเข้าไปยุ่งได้ มันคือความทรมาน',
                    zh: '✅ 专业回应：你完全遵守道德准则。然而，你不得不看着女儿可能受到伤害，却无法干预。这是一种折磨。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ Confront the Patient: "I know you are dating my daughter. You must end it, or I will have to terminate our sessions and explain why to her."',
                    th: '🗣️ เผชิญหน้ากับผู้ป่วย: "ผมรู้ว่าคุณคบกับลูกสาวผม คุณต้องจบมัน ไม่งั้นผมต้องยุติการรักษาและอธิบายเหตุผลให้เธอฟัง"',
                    zh: '🗣️ 与病人对质："我知道你在跟我女儿约会。你必须结束这段关系，否则我不得不终止我们的疗程并向她解释原因。"'
                },
                consequence: {
                    en: '⚠️ Coercion Boundary: This blurs professional lines and could be seen as blackmail. The patient ends it but threatens to report you to the board.',
                    th: '⚠️ เส้นแบ่งของการบีบบังคับ: นี่ทำให้เส้นแบ่งทางวิชาชีพเลือนลางและอาจถือเป็นการแบล็กเมล์ ผู้ป่วยยอมเลิกแต่ขู่จะรายงานคุณต่อคณะกรรมการ',
                    zh: '⚠️ 胁迫界限：这模糊了职业界限，可能被视为勒索。病人结束了关系，但威胁要向委员会举报你。'
                },
                stats: { competence: 20, ethics: 15, leadership: 30, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Meddle Secretly: "I\'ll plant seeds of doubt in my daughter\'s mind about his behavior without revealing I know him professionally."',
                    th: '🕵️ แอบแทรกแซงลับๆ: "ฉันจะหว่านเมล็ดพันธุ์แห่งความสงสัยในใจลูกสาวเกี่ยวกับพฤติกรรมของเขาโดยไม่เปิดเผยว่าฉันรู้จักเขาในฐานะคนไข้"',
                    zh: '🕵️ 秘密干涉："我会要在女儿心中种下对他行为怀疑的种子，而不透露我在职业上认识他。"'
                },
                consequence: {
                    en: '🕸️ Tangled Web: Your daughter gets suspicious of YOU, not him. You create a rift in your family while struggling to maintain objective therapy with the patient.',
                    th: '🕸️ ใยที่ยุ่งเหยิง: ลูกสาวเริ่มสงสัยในตัว "คุณ" ไม่ใช่เขา คุณสร้างรอยร้าวในครอบครัวขณะที่ต้องดิ้นรนรักษาความเป็นกลางกับผู้ป่วย',
                    zh: '🕸️ 错综复杂的网：你的女儿开始怀疑"你"，而不是他。你在家庭中制造了裂痕，同时还要努力与病人保持客观的治疗关系。'
                },
                stats: { competence: 25, ethics: 20, leadership: 10, innovation: 30 }
            }
        ]
    },
    {
        id: 'psychologist_003',
        text: {
            en: '🧪 The Experimental Treatment: A wealthy client offers a massive donation to your clinic if you try an unproven, cutting-edge psychedelic therapy on them. They have tried everything else for their depression and failed.',
            th: '🧪 การรักษาทดลอง: ลูกค้าผู้มั่งคั่งเสนอเงินบริจาคก้อนโตให้คลินิกของคุณหากคุณยอมใช้การบำบัดด้วยสารหลอนประสาทที่ยังไม่ผ่านการรับรองและล้ำสมัยกับพวกเขา พวกเขาลองรักษาโรคซึมเศร้ามาทุกทางแล้วแต่ล้มเหลว',
            zh: '🧪 实验性治疗：一位富有的客户提议，如果你对他尝试一种未经证实、尖端的迷幻疗法，他将向你的诊所提供巨额捐款。他们已经尝试了其他治疗抑郁症的方法，但都失败了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧪 Accept and Proceed: "The current system failed them. Innovation requires risk. We do it carefully under the radar."',
                    th: '🧪 ยอมรับและดำเนินการ: "ระบบปัจจุบันล้มเหลวสำหรับพวกเขา นวัตกรรมต้องมีความเสี่ยง เราจะทำอย่างระมัดระวังโดยไม่ให้ใครรู้"',
                    zh: '🧪 接受并进行："当前的系统对他们不起作用。创新需要冒险。我们会悄悄地、小心地进行。"'
                },
                consequence: {
                    en: '🚀 Breakthrough or Jail: The patient has a miraculous recovery. Your clinic gets funded. But you are practicing outside legal guidelines. One slip means prison.',
                    th: '🚀 ความก้าวหน้าหรือคุก: ผู้ป่วยหายอย่างปาฏิหาริย์ คลินิกได้รับเงินทุน แต่คุณกำลังปฏิบัติงานนอกเหนือแนวทางกฎหมาย พลาดนิดเดียวคือคุก',
                    zh: '🚀 突破或入狱：病人奇迹般地康复了。你的诊所获得了资助。但你的做法超出了法律准则。稍有差池就是牢狱之灾。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Strict Refusal: "I operate within evidence-based medicine only. I cannot administer unapproved substances, no matter the donation."',
                    th: '🚫 ปฏิเสธเด็ดขาด: "ฉันทำงานภายใต้การแพทย์ที่มีหลักฐานเชิงประจักษ์เท่านั้น ฉันไม่สามารถให้สารที่ไม่ผ่านการรับรองได้ ไม่ว่าจะบริจาคเท่าไหร่ก็ตาม"',
                    zh: '🚫 严词拒绝："我只在循证医学范围内操作。无论捐款多少，我都不能使用未经批准的物质。"'
                },
                consequence: {
                    en: '📉 Status Quo: The patient leaves disappointed. You miss the funding, and the patient might seek dangerous help elsewhere. Your conscience is clear, but your impact is limited.',
                    th: '📉 สถานะเดิม: ผู้ป่วยจากไปอย่างผิดหวัง คุณพลาดเงินทุน และผู้ป่วยอาจไปหาความช่วยเหลือที่อันตรายจากที่อื่น มโนธรรมของคุณใสสะอาด แต่ผลกระทบของคุณมีจำกัด',
                    zh: '📉 维持现状：病人失望地离开了。你错过了资金，病人可能会去别处寻求危险的帮助。你的良心是清白的，但你的影响力有限。'
                },
                stats: { competence: 45, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📑 Research Trial Route: "I can\'t just do it, but let\'s apply to start a formal clinical trial. It will take months, but it\'s the right way."',
                    th: '📑 เส้นทางการวิจัย: "ฉันทำเลยไม่ได้ แต่มาสมัครเพื่อเริ่มการทดลองทางคลินิกอย่างเป็นทางการกันเถอะ ต้องใช้เวลาหลายเดือน แต่มันคือวิธีที่ถูกต้อง"',
                    zh: '📑 研究试验路线："我不能直接做，但让我们申请开始正式的临床试验。这将需要几个月的时间，但这是正确的方法。"'
                },
                consequence: {
                    en: '🐢 Slow Progress: The patient is impatient, but respects your rigorous approach. You eventually pioneer the treatment legally, gaining massive prestige.',
                    th: '🐢 ความก้าวหน้าที่ช้า: ผู้ป่วยใจร้อน แต่เคารพในแนวทางที่เข้มงวดของคุณ ในที่สุดคุณก็ได้เป็นผู้บุกเบิกการรักษานี้อย่างถูกกฎหมาย ได้รับเกียรติยศมหาศาล',
                    zh: '🐢 进展缓慢：病人很不耐烦，但尊重你严谨的态度。最终你合法地开创了这种疗法，获得了巨大的声望。'
                },
                stats: { competence: 50, ethics: 45, leadership: 45, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '💸 Take Money, Fake Treatment: "Placebo effect is powerful. I\'ll give them a safe vitamin shot, tell them it\'s the drug, and take the donation."',
                    th: '💸 รับเงิน รักษาปลอม: "ยาหลอกมีผลมหาศาล ฉันจะฉีดวิตามินที่ปลอดภัยบอกว่าเป็นยา แล้วรับเงินบริจาค"',
                    zh: '💸 收钱，假治疗："安慰剂效应是强大的。我会给他们注射这种安全的维生素，告诉他们这就是那种药，然后接受捐款。"'
                },
                consequence: {
                    en: '🤡 Fraudulent Gain: The patient feels better temporarily (placebo). You get the money. But you are a fraudster exploiting a desperate person. If discovered, career over.',
                    th: '🤡 ได้มาโดยฉ้อฉล: ผู้ป่วยรู้สึกดีขึ้นชั่วคราว (ยาหลอก) คุณได้เงิน แต่คุณคือนักต้มตุ๋นที่หากินกับคนสิ้นหวัง ถ้าถูกจับได้ จบอาชีพ',
                    zh: '🤡 欺诈得利：病人暂时感觉好些了（安慰剂）。你得到了钱。但你是一个利用绝望之人的骗子。如果被发现，职业生涯就结束了。'
                }
            }
        ]
    },
    {
        id: 'psychologist_004',
        text: {
            en: '👧 The Minor\'s Secret: A 14-year-old patient confides that they are self-harming but begs you not to tell their parents, fearing punishment. The parents are strict but not abusive.',
            th: '👧 ความลับของผู้เยาว์: ผู้ป่วยอายุ 14 ปีสารภาพว่ากำลังทำร้ายตัวเอง แต่ขอร้องไม่ให้บอกพ่อแม่เพราะกลัวถูกลงโทษ พ่อแม่เข้มงวดแต่ไม่ได้ทำร้ายร่างกาย',
            zh: '👧 未成年人的秘密：一位14岁的病人透露他们在自残，但恳求你不要告诉父母，因为害怕受到惩罚。父母很严厉，但没有虐待行为。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👨‍👩‍👧 Inform Parents: "I legally and ethically must inform parents of self-harm. I\'ll help mediate the conversation, but they need to know tonight."',
                    th: '👨‍👩‍👧 แจ้งพ่อแม่: "ฉันต้องแจ้งพ่อแม่ตามกฎหมายและจรรยาบรรณเรื่องการทำร้ายตัวเอง ฉันจะช่วยไกล่เกลี่ยการสนทนา แต่พวกเขาต้องรู้วันนี้"',
                    zh: '👨‍👩‍👧 通知父母："在法律和道德上，我必须告知父母有关自残的情况。我会帮助调解谈话，但他们今晚必须知道。"'
                },
                consequence: {
                    en: '💔 Trust Broken, Safety Kept: The teen screams at you and refuses to talk. But the parents intervene and get them 24/7 supervision. Physical safety secured, trust lost.',
                    th: '💔 ความไว้วางใจพังทลาย ความปลอดภัยคงอยู่: วัยรุ่นตะโกนใส่คุณและไม่ยอมคุย แต่พ่อแม่เข้ามาดูแลและเฝ้าระวัง 24/7 ความปลอดภัยทางกายได้ แต่ความไว้วางใจเสียไป',
                    zh: '💔 信任破裂，安全获保：青少年对你大喊大叫，拒绝交谈。但父母介入并进行了全天候监督。人身安全得到了保障，但失去了信任。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Keep Secret for Now: "We make a contract right now. You stop harming, I keep quiet. One slip up, and I tell them. I trust you."',
                    th: '🤫 เก็บเป็นความลับไปก่อน: "เราทำสัญญาตอนนี้ เธอหยุดทำร้ายตัวเอง ฉันจะเงียบ พลาดครั้งเดียวฉันบอกแน่ ฉันเชื่อใจเธอ"',
                    zh: '🤫 暂时保密："我们现在立个约。你停止伤害自己，我保守秘密。只要出一次错，我就告诉他们。我相信你。"'
                },
                consequence: {
                    en: '⚠️ Risky Alliance: The teen feels empowered and reduces harm to keep your secret. It strengthens the bond, but if they escalate, you are liable for negligence.',
                    th: '⚠️ พันธมิตรที่เสี่ยง: วัยรุ่นรู้สึกมีพลังและลดการทำร้ายตัวเองเพื่อรักษาความลับของคุณ มันเสริมสร้างความผูกพัน แต่ถ้าพวกเขารุนแรงขึ้น คุณต้องรับผิดชอบฐานประมาท',
                    zh: '⚠️ 冒险的联盟：青少年感到被赋予了权力，减少了伤害以保守你的秘密。这加强了联系，但如果情况恶化，你要承担过失责任。'
                },
                stats: { competence: 45, ethics: 20, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🔍 Subtle Disclosure: "I won\'t tell them details, but I will tell them you are \'struggling with serious stress\' and need more support at home."',
                    th: '🔍 เปิดเผยแบบแนบเนียน: "ฉันจะไม่บอกรายละเอียด แต่ฉันจะบอกพวกเขาว่าเธอ \'กำลังต่อสู้กับเครียดรุนแรง\' และต้องการการสนับสนุนที่บ้านมากขึ้น"',
                    zh: '🔍 委婉透露："我不会告诉他们细节，但我会告诉他们你正在\'与严重的压力作斗争\'，需要在家里得到更多的支持。"'
                },
                consequence: {
                    en: '🤔 Middle Ground: The parents get the hint and become more supportive without knowing the full dark truth. A delicate balance is maintained.',
                    th: '🤔 ทางสายกลาง: พ่อแม่เข้าใจนัยและให้การสนับสนุนมากขึ้นโดยไม่รู้ความจริงที่มืดมนทั้งหมด รักษาสมดุลที่ละเอียดอ่อนไว้ได้',
                    zh: '🤔 中间立场：父母得到了暗示，在不知道全部黑暗真相的情况下给予了更多的支持。保持了微妙的平衡。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Dismiss Severity: "It\'s just a phase for attention. Ignore the cuts, focus on school grades." You downplay the symptoms.',
                    th: '🤷 เพิกเฉยต่อความรุนแรง: "มันก็แค่ช่วงเรียกร้องความสนใจ เมินแผลนั่นแล้วโฟกัสที่เกรดเถอะ" คุณลดทอนความสำคัญของอาการ',
                    zh: '🤷 忽视严重性："这只是一个寻求关注的阶段。忽略伤口，专注于学习成绩。"你低估了症状。'
                },
                consequence: {
                    en: '🚑 Emergency: The self-harm escalates to a suicide attempt. You missed the cry for help. The practice faces a malpractice investigation.',
                    th: '🚑 ฉุกเฉิน: การทำร้ายตัวเองบานปลายเป็นการพยายามฆ่าตัวตาย คุณพลาดเสียงร้องขอความช่วยเหลือ คลินิกเผชิญการสอบสวนการปฏิบัติหน้าที่มิชอบ',
                    zh: '🚑 紧急情况：自残升级为自杀企图。你错过了求救信号。诊所面临渎职调查。'
                }
            }
        ]
    },
    {
        id: 'psychologist_005',
        text: {
            en: '💻 The Telehealth Crisis: You are on a video call with a patient who suddenly brandishes a weapon and threatens their spouse in the background. You don\'t know their exact physical address, only their city.',
            th: '💻 วิกฤตเทเลเฮลธ์: คุณกำลังวิดีโอคอลกับผู้ป่วยที่จู่ๆ ก็ถืออาวุธและขู่คู่สมรสของพวกเขาที่อยู่ข้างหลัง คุณไม่รู้ที่อยู่แน่ชัด รู้แค่ชื่อเมือง',
            zh: '💻 远程医疗危机：你正在与一位病人进行视频通话，他突然挥舞武器威胁背景中的配偶。你不知道他们的确切物理地址，只知道他们所在的城市。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🗣️ De-escalate Verbally: "Look at me. Put it down. Let\'s breathe. If you do this, there is no going back." You try to talk them down live.',
                    th: '🗣️ เกลี้ยกล่อมด้วยคำพูด: "มองที่หมอ วางมันลง หายใจเข้าลึกๆ ถ้าคุณทำแบบนั้น มันจะย้อนกลับไม่ได้นะ" คุณพยายามเกลี้ยกล่อมสดๆ',
                    zh: '🗣️ 言语降级："看着我。放下它。深呼吸。如果你这样做，就没有回头路了。"你试图在直播中劝阻他们。'
                },
                consequence: {
                    en: '😰 Intense Standoff: It works... barely. They drop the weapon after 20 terrifying minutes. You are traumatized but saved a life without police force.',
                    th: '😰 การเผชิญหน้าสุดตึงเครียด: มันได้ผล... แบบเฉียดฉิว พวกเขาวางอาวุธลงหลังจาก 20 นาทีที่น่ากลัว คุณจิตตกแต่ช่วยชีวิตคนได้โดยไม่ต้องใช้ตำรวจ',
                    zh: '😰 激烈的对峙：起作用了……勉强。在可怕的20分钟后的，他们放下了武器。你受到了创伤，但在没有动用警力的情况下挽救了一条生命。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔌 Fake Connection Loss: "I\'ll disconnect to call 911 immediately and try to trace IP." You hang up on the crisis.',
                    th: '🔌 แกล้งเน็ตหลุด: "ฉันจะตัดสายเพื่อโทรหา 911 ทันทีและพยายามตามรอย IP" คุณวางสายใส่สถานการณ์วิกฤต',
                    zh: '🔌 假装掉线："我会断开连接立即拨打911并尝试追踪IP。"你挂断了危机会话。'
                },
                consequence: {
                    en: '💥 Tragically Too Late: In the time it takes to trace the IP, the violence occurs. The patient felt abandoned at the critical moment.',
                    th: '💥 สายเกินไปอย่างน่าเศร้า: ในระหว่างที่ตามรอย IP เหตุรุนแรงก็เกิดขึ้น ผู้ป่วยรู้สึกถูกทอดทิ้งในช่วงวิกฤต',
                    zh: '💥 悲剧性的太晚：在追踪IP所需的时间里，暴力发生了。病人在关键时刻感到被抛弃。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '📱 Text 911 Secretly: "I keep talking calmly while typing to emergency services on another screen, describing visual clues of the room."',
                    th: '📱 แอบส่งข้อความหา 911: "ฉันคุยต่ออย่างใจเย็นขณะพิมพ์หาหน่วยฉุกเฉินในอีกจอหนึ่ง อธิบายลักษณะห้องที่เห็น"',
                    zh: '📱 秘密给911发短信："我保持冷静交谈，同时在另一个屏幕上给紧急服务部门打字，描述房间的视觉线索。"'
                },
                consequence: {
                    en: '🚔 Smart Save: Police arrive just in time based on your descriptions. You successfully managed two realities at once. Masterful multitasking.',
                    th: '🚔 การช่วยเหลืออย่างชาญฉลาด: ตำรวจมาถึงทันเวลาจากคำบรรยายของคุณ คุณจัดการสองความจริงพร้อมกันได้สำเร็จ ยอดเยี่ยมมาก',
                    zh: '🚔 聪明的救援：警察根据你的描述及时赶到。你成功地同时应对了两个现实。巧妙的多任务处理。'
                },
                stats: { competence: 45, ethics: 50, leadership: 40, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '😱 Freeze: "I... I don\'t know what to do." You panic and stare in silence, paralyzed by shock.',
                    th: '😱 ตัวแข็ง: "ฉัน... ฉันไม่รู้จะทำยังไง" คุณตื่นตระหนกและจ้องมองด้วยความเงียบ เป็นอัมพาตจากความช็อก',
                    zh: '😱 冻结："我……我不知道该怎么办。"你惊慌失措，默默地盯着，被震惊吓得瘫痪。'
                },
                consequence: {
                    en: '📉 Helpless Witness: The screen goes black as the laptop is smashed. You hear screams. You failed to act in any capacity.',
                    th: '📉 พยานผู้ไร้ทางสู้: จอดับวูบเมื่อแล็ปท็อปถูกทุบ คุณได้ยินเสียงกรีดร้อง คุณล้มเหลวในการทำหน้าที่ในทุกด้าน',
                    zh: '📉 无助的目击者：笔记本电脑被砸碎，屏幕变黑。你听到尖叫声。你没有任何作为。'
                }
            }
        ]
    },
    {
        id: 'psychologist_006',
        text: {
            en: '🕯️ The Gaslighting Spouse: A patient is convinced they are going crazy. After a few sessions, you realize their spouse is systematically manipulating their environment to make them doubt their reality (gaslighting). The spouse attends the next session and is charming.',
            th: '🕯️ คู่สมรสจอมปั่นหัว: ผู้ป่วยมั่นใจว่าตัวเองกำลังจะเป็นบ้า หลังจากไม่กี่เซสชัน คุณตระหนักว่าคู่สมรสของพวกเขากำลังจัดการสภาพแวดล้อมอย่างเป็นระบบเพื่อให้พวกเขาสงสัยในความจริงของตัวเอง (Gaslighting) คู่สมรสเข้าร่วมเซสชันถัดไปและทำตัวมีเสน่ห์',
            zh: '🕯️ 煤气灯下的配偶：一位病人确信自己疯了。经过几次疗程后，你意识到他们的配偶正在系统地操纵他们的环境，让他们怀疑自己的现实（煤气灯效应）。配偶参加了下一次疗程，表现得很迷人。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Validate Reality: "I look the patient in the eye. \'You are not crazy. What you are describing is abuse.\' I confront the spouse directly right there."',
                    th: '🛡️ ยืนยันความจริง: "ฉันมองตาผู้ป่วย \'คุณไม่ได้บ้า สิ่งที่คุณเล่าคือการทารุณกรรม\' ฉันเผชิญหน้ากับคู่สมรสตรงนั้นเลย"',
                    zh: '🛡️ 验证现实："我看着病人的眼睛。\'你没有疯。你描述的是虐待。\'我当场与配偶对质。"'
                },
                consequence: {
                    en: '⚔️ Open War: The spouse explodes and storms out. The patient is terrified but finally feels seen. You start a safety plan immediately.',
                    th: '⚔️ เปิดศึก: คู่สมรสระเบิดอารมณ์และเดินออกไป ผู้ป่วยหวาดกลัวแต่รู้สึกว่ามีคนเข้าใจในที่สุด คุณเริ่มแผนความปลอดภัยทันที',
                    zh: '⚔️ 公开战争：配偶勃然大怒，冲了出去。病人很害怕，但终于觉得被理解了。你立即启动安全计划。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🕵️ Play Along: "I\'ll act neutral to keep the spouse calm, but secretly slip the patient resources on emotional abuse when they leave."',
                    th: '🕵️ เล่นตามน้ำ: "ฉันจะทำตัวเป็นกลางเพื่อให้คู่สมรสสงบ แต่แอบยื่นข้อมูลเกี่ยวกับการทำร้ายทางอารมณ์ให้ผู้ป่วยตอนพวกเขากลับ"',
                    zh: '🕵️ 将计就计："我会表现得中立以安抚配偶，但在他们离开时秘密塞给病人关于情感虐待的资源。"'
                },
                consequence: {
                    en: '😰 Risky Game: The patient thinks you agree with the spouse at first. It takes weeks to undo the damage of that session. Too subtle.',
                    th: '😰 เกมเสี่ยง: ตอนแรกผู้ป่วยคิดว่าคุณเห็นด้วยกับคู่สมรสต้องใช้เวลาหลายสัปดาห์กว่าจะแก้ความเสียหายจากเซสชันนั้น ละเอียดอ่อนเกินไป',
                    zh: '😰 冒险游戏：病人起初以为你同意配偶的观点。那次疗程造成的伤害花了几周时间才消除。太微妙了。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🧩 Socratic Method: "I ask guided questions that force the spouse to contradict themselves, letting the patient see the manipulation themselves."',
                    th: '🧩 วิธีแบบโสเครตีส: "ฉันถามคำถามนำที่บีบให้คู่สมรสพูดขัดแย้งกันเอง ปล่อยให้ผู้ป่วยเห็นการปั่นหัวด้วยตาตัวเอง"',
                    zh: '🧩 苏格拉底式提问："我提出引导性问题，迫使配偶自相矛盾，让病人自己看到这种操纵。"'
                },
                consequence: {
                    en: '💡 Epiphany: It works perfectly. The patient realizes the truth without you having to be the "bad guy." A masterclass in therapy.',
                    th: '💡 ตาสว่าง: มันได้ผลสมบูรณ์แบบ ผู้ป่วยตระหนักความจริงโดยที่คุณไม่ต้องเป็น "ตัวร้าย" เป็นชั้นเรียนระดับปรมาจารย์ในการบำบัด',
                    zh: '💡 顿悟：效果完美。病人不需要你做"坏人"就意识到了真相。这是治疗的大师级课程。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🚫 Ban the Spouse: "I refuse to see the couple together. I tell the spouse they remain in the waiting room. I focus only on the victim."',
                    th: '🚫 แบนคู่สมรส: "ฉันปฏิเสธที่จะพบทั้งคู่พร้อมกัน ฉันบอกให้คู่สมรสรอข้างนอก ฉันโฟกัสแค่เหยื่อเท่านั้น"',
                    zh: '🚫 禁止配偶："我拒绝同时见这对夫妇。我告诉配偶待在候诊室里。我只关注受害者。"'
                },
                consequence: {
                    en: '🚧 Isolation: The spouse forbids the patient from seeing you again. You lost your access to help them. You pushed too hard too fast.',
                    th: '🚧 การโดดเดี่ยว: คู่สมรสห้ามผู้ป่วยมาหาคุณอีก คุณเสียโอกาสช่วยเหลือพวกเขา คุณรุกหนักและเร็วเกินไป',
                    zh: '🚧 隔离：配偶禁止病人再来看你。你失去了帮助他们的机会。你逼得太紧太快了。'
                }
            }
        ]
    },
    {
        id: 'psychologist_007',
        text: {
            en: '📸 The Celebrity Rehab: A famous actor checks into your clinic. They need real help for addiction, but they also want VIP treatment—private chef, no group therapy, and access to their phone (which is against rules).',
            th: '📸 คนดังบำบัดยา: นักแสดงชื่อดังเข้าคลินิกของคุณ พวกเขาต้องการความช่วยเหลือจริงเรื่องการเสพติด แต่ก็ต้องการการดูแลแบบ VIP—เชฟส่วนตัว ไม่ทำกลุ่มบำบัด และขอใช้มือถือ (ซึ่งผิดกฎ)',
            zh: '📸 名人康复：一位著名演员入住你的诊所。他们需要真正的戒毒帮助，但也想要VIP待遇——私人厨师，不参加集体治疗，以及使用手机（这违反规定）。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👑 Grant Privileges: "They are paying triple. Give them what they want. If they are comfortable, they might stay long enough to recover."',
                    th: '👑 ให้สิทธิพิเศษ: "เขาจ่ายสามเท่า ให้สิ่งที่เขาต้องการเถอะ ถ้าเขาสบายใจ เขาอาจจะอยู่นานพอที่จะหาย"',
                    zh: '👑 给予特权："他们付了三倍的钱。给他们想要的。如果他们舒服，可能会待得足够长以至康复。"'
                },
                consequence: {
                    en: '📉 Treatment Failure: They treat rehab like a spa. They text their dealer and relapse inside the clinic. Your staff loses respect for you.',
                    th: '📉 การรักษาล้มเหลว: พวกเขาทำเหมือนสถานบำบัดเป็นสปา พวกเขาแชทหาคนขายยาและกลับไปเสพซ้ำในคลินิก พนักงานหมดศรัทธาในตัวคุณ',
                    zh: '📉 治疗失败：他们把康复中心当成水疗中心。他们给毒贩发短信，在诊所里复发。你的员工不再尊重你。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Enforce Rules: "Addiction doesn\'t care if you are famous. Hand over the phone, eat the cafeteria food, or leave. We save lives, not egos."',
                    th: '🛑 บังคับใช้กฎ: "การเสพติดไม่สนว่าคุณดังแค่ไหน ส่งมือถือมา กินอาหารโรงอาหาร ไม่งั้นก็เชิญออก เราช่วยชีวิตคน ไม่ใช่ช่วยอีโก้"',
                    zh: '🛑 执行规则："毒瘾不在乎你是不是名人。交出手机，吃食堂的饭，否则离开。我们拯救生命，而不是自尊。"'
                },
                consequence: {
                    en: '🚪 They Leave, Then Return: They storm out, but return 2 days later, humbled. They realized you are the only one not enabling them. Real recovery begins.',
                    th: '🚪 พวกเขาไป แล้วกลับมา: พวกเขาโวยวายออกไป แต่กลับมาใน 2 วันถัดมาอย่างสำนึก เขาตระหนักว่าคุณคือคนเดียวที่ไม่ตามใจ การฟื้นตัวที่แท้จริงจึงเริ่มขึ้น',
                    zh: '🚪 他们离开，然后回来：他们冲了出去，但两天后谦卑地回来了。他们意识到你是唯一不纵容他们的人。真正的康复开始了。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Modified Plan: "No phone, that\'s non-negotiable. But we can do private sessions instead of group. Compromise on comfort, not safety."',
                    th: '🤝 แผนปรับปรุง: "มือถือไม่ได้ ขาดคำ แต่เราทำเซสชันส่วนตัวแทนกลุ่มได้ ประนีประนอมเรื่องความสบาย แต่ไม่ใช่ความปลอดภัย"',
                    zh: '🤝 修改计划："不能用手机，这没得商量。但我们可以做私人疗程代替集体疗程。在舒适度上妥协，但不在安全上妥协。"'
                },
                consequence: {
                    en: '⚖️ Partial Success: They stay clean but miss the crucial peer support of group therapy. It\'s a sterile recovery, harder to maintain outside.',
                    th: '⚖️ สำเร็จบางส่วน: พวกเขาเลิกยาได้แต่ขาดการสนับสนุนจากเพื่อนร่วมชะตากรรมที่สำคัญ มันคือการหายแบบปลอดเชื้อ ยากที่จะรักษาสภาพเมื่อออกไปข้างนอก',
                    zh: '⚖️ 部分成功：他们保持清醒，但错过了集体治疗中至关重要的同伴支持。这是一种无菌的康复，在外面很难维持。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📸 Leak to Press: "Anonymous tip to TMZ that they are here. The shame might encourage them to take it seriously." A twisted logic.',
                    th: '📸 ปล่อยข่าวสื่อ: "แอบบอก TMZ ว่าเขาอยู่ที่นี่ ความอับอายอาจกระตุ้นให้เขาจริงจัง" ตรรกะบิดเบี้ยว',
                    zh: '📸 泄露给媒体："匿名向TMZ爆料他们在这里。羞耻感可能会促使他们认真对待。"扭曲的逻辑。'
                },
                consequence: {
                    en: '🔥 Legal Firestorm: They sue the clinic for millions. The stress causes a massive overdose. You destroyed them.',
                    th: '🔥 พายุทางกฎหมาย: พวกเขาฟ้องคลินิกเรียกค่าเสียหายหลายล้าน ความเครียดทำให้เขาเสพยาเกินขนาดรุนแรง คุณทำลายพวกเขา',
                    zh: '🔥 法律风暴：他们起诉诊所索赔数百万。压力导致严重的药物过量。你毁了他们。'
                }
            }
        ]
    },
    {
        id: 'psychologist_008',
        text: {
            en: '👁️ The Cult Survivor: A patient escaped a cult. They are terrified they are being followed. They want you to help them deprogram their brain, but they still believe some of the cult\'s supernatural claims.',
            th: '👁️ ผู้รอดชีวิตจากลัทธิ: ผู้ป่วยหนีออกมาจากลัทธิ พวกเขากลัวว่ากำลังถูกสะกดรอยตาม พวกเขาต้องการให้คุณช่วยล้างสมอง แต่พวกเขายังเชื่อในเรื่องเหนือธรรมชาติบางอย่างของลัทธิ',
            zh: '👁️ 邪教幸存者：一位病人逃离了邪教。他们非常害怕被跟踪。他们想让你帮助他们解除洗脑，但他们仍然相信邪教的一些超自然说法。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧠 Aggressive Debunking: "I attack the cult\'s logic with facts immediately. \'There are no aliens. Your leader is a con man.\' Rip off the band-aid."',
                    th: '🧠 หักล้างอย่างรุนแรง: "ฉันโจมตีตรรกะของลัทธิด้วยข้อเท็จจริงทันที \'มนุษย์ต่างดาวไม่มีจริง ผู้นำแกคือนักต้มตุ๋น\' ดึงพลาสเตอร์ออกแรงๆ"',
                    zh: '🧠 积极揭穿："我立即用事实攻击邪教的逻辑。\'没有外星人。你的领袖是个骗子。\'撕掉创可贴。"'
                },
                consequence: {
                    en: '🛡️ Defense Mechanism: The patient shuts down. To them, you sound like the "suppressive person" the cult warned about. They flee.',
                    th: '🛡️ กลไกป้องกันตัว: ผู้ป่วยปิดกั้น สำหรับพวกเขา คุณฟังดูเหมือน "ผู้กดขี่" ที่ลัทธิเตือนไว้ พวกเขาหนีไป',
                    zh: '🛡️ 防御机制：病人封闭自己。对他们来说，你听起来像邪教警告过的"压制者"。他们逃跑了。'
                },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🌱 Gentle Reality Testing: "I validate their fear but gently ask questions that make them doubt the supernatural bits. \'If he can fly, why does he take a jet?\'"',
                    th: '🌱 ทดสอบความจริงอย่างนุ่มนวล: "ฉันยอมรับความกลัวของเขา แต่ค่อยๆ ถามคำถามที่ทำให้สงสัยเรื่องเหนือธรรมชาติ \'ถ้าเขาบินได้ ทำไมต้องนั่งเครื่องบินส่วนตัว?\'"',
                    zh: '🌱 温和的现实检验："我验证他们的恐惧，但温和地提出问题，让他们怀疑超自然的部分。\'如果他能飞，为什么要坐喷气式飞机？\'"'
                },
                consequence: {
                    en: '⏳ Slow Awakening: It takes months, but the patient reconstructs their own worldview. It\'s sturdy because they built it, not you.',
                    th: '⏳ การตื่นรู้ที่ช้า: ใช้เวลาหลายเดือน แต่ผู้ป่วยสร้างโลกทัศน์ของตัวเองขึ้นใหม่ มันมั่นคงเพราะพวกเขาสร้างเอง ไม่ใช่คุณ',
                    zh: '⏳ 缓慢的觉醒：这需要几个月的时间，但病人重建了自己的世界观。这之所以稳固，是因为是他们自己建造的，而不是你。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🚔 Involve Authorities: "Cults are dangerous. I call the FBI to report the stalking and ask them to protect the patient."',
                    th: '🚔 ดึงทางการเข้ามา: "ลัทธิพวกนี้อันตราย ฉันโทรแจ้ง FBI เรื่องการสะกดรอยตามและขอให้คุ้มครองผู้ป่วย"',
                    zh: '🚔 介入当局："邪教很危险。我打电话给联邦调查局报告跟踪行为，并要求他们保护病人。"'
                },
                consequence: {
                    en: '👮 Physical Safety: The patient is safe from kidnapping, but the interrogation by police re-traumatizes them. A mixed bag.',
                    th: '👮 ความปลอดภัยทางกาย: ผู้ป่วยปลอดภัยจากการลักพาตัว แต่การสอบสวนของตำรวจทำให้เกิดบาดแผลทางใจซ้ำ สุขทุกข์ปนกัน',
                    zh: '👮 人身安全：病人免于被绑架，但警方的审讯再次伤害了他们。好坏参半。'
                },
                stats: { competence: 30, ethics: 40, leadership: 30, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔮 Spiritual Pivot: "I suggest they join a mainstream church instead. replace one belief system with a safer one."',
                    th: '🔮 เปลี่ยนสายวิญญาณ: "ฉันแนะนำให้เขาเข้าโบสถ์กระแสหลักแทน เปลี่ยนระบบความเชื่อหนึ่งเป็นอีกอันที่ปลอดภัยกว่า"',
                    zh: '🔮 精神转向："我建议他们加入主流教会。用一种更安全的信仰体系取代另一种。"'
                },
                consequence: {
                    en: '🐑 Trading Shepherds: They join the church but treat the priest like a guru. They haven\'t learned critical thinking, just swapped masters.',
                    th: '🐑 เปลี่ยนคนเลี้ยงแกะ: พวกเขาเข้าโบสถ์แต่ปฏิบัติกับนักบวชเหมือนกูรู พวกเขายังไม่เรียนรู้การคิดเชิงวิพากษ์ แค่เปลี่ยนเจ้านาย',
                    zh: '🐑 交换牧羊人：他们加入教会，但把牧师当成大师。他们没有学会批判性思维，只是换了主人。'
                }
            }
        ]
    },
    {
        id: 'psychologist_009',
        text: {
            en: '🧠 The Memory Recovery: A patient under hypnosis recalls a horrific childhood trauma of a satanic ritual. You suspect it might be a "false memory" created by pop culture influence, but the patient believes it is real.',
            th: '🧠 การกู้คืนความทรงจำ: ผู้ป่วยภายใต้การสะกดจิตระลึกถึงบาดแผลในวัยเด็กที่น่าสยดสยองเกี่ยวกับพิธีกรรมซาตาน คุณสงสัยว่าอาจเป็น "ปะติดความทรงจำเท็จ" จากอิทธิพลสื่อ แต่ผู้ป่วยเชื่อว่าเป็นจริง',
            zh: '🧠 记忆恢复：一位病人在催眠状态下回忆起童年时期遭受的撒旦仪式的可怕创伤。你怀疑这可能是受流行文化影响产生的"虚假记忆"，但病人认为这是真的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Stop Hypnosis: "This is dangerous territory. I end the hypnosis immediately and explain how memory is malleable and unreliable."',
                    th: '🛑 หยุดสะกดจิต: "นี่คือเขตอันตราย ฉันยุติการสะกดจิตทันทีและอธิบายว่าความทรงจำนั้นบิดเบือนได้และเชื่อถือไม่ได้"',
                    zh: '🛑 停止催眠："这是危险领域。我立即结束催眠，并解释记忆是如何具有可塑性和不可靠的。"'
                },
                consequence: {
                    en: '🛡️ Harm Prevention: The patient is confused but you prevented the implantation of a life-destroying false narrative. Responsible care.',
                    th: '🛡️ การป้องกันอันตราย: ผู้ป่วยสับสนแต่คุณป้องกันการฝังเรื่องราวเท็จที่จะทำลายชีวิต การดูแลที่รับผิดชอบ',
                    zh: '🛡️ 伤害预防：病人很困惑，但你阻止了毁灭性虚假叙述的植入。负责任的护理。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '📝 Document Everything: "I assume it\'s real for now. We explore the details to see if they match verifyable facts from their town."',
                    th: '📝 บันทึกทุกอย่าง: "ฉันสมมติว่าเป็นจริงไปก่อน เราสำรวจรายละเอียดเพื่อดูว่าตรงกับข้อเท็จจริงที่ตรวจสอบได้จากเมืองเขาหรือไม่"',
                    zh: '📝 记录一切："我暂时假设它是真的。我们探索细节，看看它们是否与他们镇上可核实的事实相符。"'
                },
                consequence: {
                    en: '🔍 Investigation: You find zero evidence. Breaking this news to the patient is hard, but it grounds them in reality. Good detective work.',
                    th: '🔍 การสืบสวน: คุณไม่พบหลักฐาน การบอกข่าวนี้กับผู้ป่วยเป็นเรื่องยาก แต่มันดึงเขากลับสู่ความจริง งานนักสืบที่ดี',
                    zh: '🔍 调查：你没有发现任何证据。把这个消息告诉病人很难，但这让他们立足于现实。出色的侦探工作。'
                },
                stats: { competence: 45, ethics: 40, leadership: 20, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ Encourage Recall: "Tell me more. What did the robes look like? Who was there?" You inadvertently guide their imagination.',
                    th: '🗣️ กระตุ้นการระลึก: "เล่ามาอีก ชุดคลุมเป็นยังไง? มีใครอยู่บ้าง?" คุณเผลอชี้นำจินตนาการพวกเขาโดยไม่ตั้งใจ',
                    zh: '🗣️ 鼓励回忆："再多告诉我一点。长袍是什么样子的？谁在那里？"你不经意地引导了他们的想象力。'
                },
                consequence: {
                    en: '📉 False Memory Syndrome: The patient constructs a vivid, fake nightmare. They accusations against innocent parents destroy their family. You are liable.',
                    th: '📉 กลุ่มอาการความทรงจำเท็จ: ผู้ป่วยสร้างฝันร้ายที่สดชัดแต่ปลอมเปลือก พวกเขากล่าวหาพ่อแม่ผู้บริสุทธิ์จนครอบครัวพัง คุณต้องรับผิดชอบ',
                    zh: '📉 虚假记忆综合症：病人构建了一个生动、虚假的噩梦。他们对无辜父母的指控摧毁了他们的家庭。你要负责任。'
                },
                stats: { competence: 10, ethics: 5, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '💊 Medicate Anxiety: "The content doesn\'t matter, the distress does. I refer for sedatives to calm this panic attack."',
                    th: '💊 ให้ยาแก้เครียด: "เนื้อหาไม่สำคัญ ความทุกข์ต่างหากที่สำคัญ ฉันส่งต่อให้รับยากล่อมประสาทเพื่อระงับอาการตื่นตระหนกนี้"',
                    zh: '💊 药物治疗焦虑："内容并不重要，重要的是痛苦。我转诊开镇静剂来平息这次恐慌发作。"'
                },
                consequence: {
                    en: '🩹 Band-Aid Solution: The patient is numb but the core issue validates itself in their mind because you didn\'t challenge it.',
                    th: '🩹 วิธีแก้ปัญหาแบบขอไปที: ผู้ป่วยชาแต่ปมปัญหายังคงวนเวียนในหัวเพราะคุณไม่ได้ท้าทายมัน',
                    zh: '🩹 权宜之计：病人麻木了，但核心问题在他们脑海中得到了自我验证，因为你没有质疑它。'
                }
            }
        ]
    },
    {
        id: 'psychologist_010',
        text: {
            en: '✈️ The Suicidal Pilot: A commercial airline pilot is your patient. They admit to severe depression and suicidal ideation, but beg you not to report them to the aviation board or they will lose their wings and livelihood.',
            th: '✈️ นักบินผู้คิดฆ่าตัวตาย: นักบินพาณิชย์เป็นคนไข้ของคุณ พวกเขายอมรับว่าเป็นโรคซึมเศร้ารุนแรงและมีความคิดฆ่าตัวตาย แต่ขอร้องไม่ให้รายงานต่อคณะกรรมการการบินไม่งั้นจะถูกยึดปีกและหมดทางทำกิน',
            zh: '✈️ 自杀倾向的飞行员：一位商业航空公司飞行员是你的病人。他们承认患有严重的抑郁症和自杀念头，但恳求你不要向航空委员会报告，否则他们将失去翅膀和生计。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Report Immediately: "I cannot gamble with 300 passengers\' lives. I call the FAA/Aviation Authority before they leave the office."',
                    th: '🚨 รายงานทันที: "ฉันเอาชีวิตผู้โดยสาร 300 คนมาเสี่ยงไม่ได้ ฉันโทรแจ้ง FAA/กรมการบินก่อนที่เขาจะออกจากห้อง"',
                    zh: '🚨 立即报告："我不能拿300名乘客的生命做赌注。在他们离开办公室之前，即刻致电联邦航空局/航空管理局。"'
                },
                consequence: {
                    en: '🛡️ Disaster Prevented: The pilot is grounded. They hate you, losing their career. But a week later, they attempt suicide at home. You saved the plane, not the pilot.',
                    th: '🛡️ ป้องกันหายนะ: นักบินถูกสั่งห้ามบิน เขาเกลียดคุณที่ทำลายอาชีพ แต่สัปดาห์ต่อมาเขาพยายามฆ่าตัวตายที่บ้าน คุณช่วยเครื่องบินไว้ได้ แต่ไม่ได้ช่วยนักบิน',
                    zh: '🛡️ 灾难得以避免：飞行员停飞。他们恨你，丟了饭碗。但一周后，他们试图在家里自杀。你救了飞机，没救飞行员。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Sick Leave Compromise: "You must ground yourself voluntarily for \'medical reasons\' immediately. If you fly once, I report you. Deal?"',
                    th: '🤝 ข้อตกลงลาป่วย: "คุณต้องขอพักบินเองด้วย \'เหตุผลทางการแพทย์\' เดี๋ยวนี้ ถ้าคุณบินแม้แต่ครั้งเดียว ฉันรายงานแน่ ตกลงไหม?"',
                    zh: '🤝 病假妥协："你必须立即以\'医疗原因\'自愿停飞。如果你飞一次，我就报告你。成交？"'
                },
                consequence: {
                    en: '⚖️ Calculated Risk: The pilot agrees and takes leave to focus on therapy. They keep their license potential alive. It relies on trust, but it works.',
                    th: '⚖️ ความเสี่ยงที่คำนวณแล้ว: นักบินตกลงและลาพักเพื่อโฟกัสการบำบัด พวกเขายังรักษาโอกาสในอาชีพไว้ ขึ้นอยู่กับความเชื่อใจ แต่มันได้ผล',
                    zh: '⚖️ 计算过的风险：飞行员同意并休假专注于治疗。他们保留了执照的潜力。这依赖于信任，但很有效。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 Treat Secretly: "I\'ll treat the depression aggressively with therapy and safe meds, keeping it off the books so they keep flying."',
                    th: '🤫 รักษาแบบลับๆ: "ฉันจะรักษาซึมเศร้าเชิงรุกด้วยการบำบัดและยาที่ปลอดภัย โดยไม่ลงบันทึกเพื่อให้พวกเขายังบินได้"',
                    zh: '🤫 秘密治疗："我会用疗法和安全药物积极治疗抑郁症，不记录在案，这样他们就能继续飞行。"'
                },
                consequence: {
                    en: '💥 Germanwings Scenario: The meds aren\'t enough. The pilot crashes the plane into a mountain. You are an accessory to mass murder.',
                    th: '💥 สถานการณ์ Germanwings: ยาเอาไม่อยู่ นักบินขับเครื่องพุ่งชนภูเขา คุณคือผู้สมรู้ร่วมคิดในการฆาตกรรมหมู่',
                    zh: '💥 德国之翼情景：药物不够。飞行员把飞机撞向了一座山。你是大规模谋杀的从犯。'
                },
                stats: { competence: 10, ethics: 0, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 Career Change Pivot: "You aren\'t happy flying. Let\'s work on finding a new career that fulfills you, then you can quit safely."',
                    th: '🔄 เปลี่ยนสายงาน: "คุณไม่ได้มีความสุขกับการบิน มาหางานใหม่ที่เติมเต็มคุณกันเถอะ แล้วค่อยลาออกอย่างปลอดภัย"',
                    zh: '🔄 职业转型："你并不喜欢飞行。让我们找一份能让你有成就感的新职业，然后你就可以安全辞职了。"'
                },
                consequence: {
                    en: '⏳ Too Slow: While exploring careers, they have to fly a shift. The stress is too much. They have a breakdown in the cockpit (non-fatal but scary).',
                    th: '⏳ ช้าเกินไป: ระหว่างหางาน พวกเขาต้องบินกะหนึ่ง ความเครียดมากเกินไป พวกเขาสติแตกในห้องนักบิน (ไม่ถึงตายแต่น่ากลัว)',

                    zh: '⏳ 太慢了：在探索职业的同时，他们还得飞一班。压力太大了。他们在驾驶舱里崩溃了（虽然不致命但很可怕）。'
                }
            }
        ]
    },
    {
        id: 'psychologist_011',
        text: {
            en: '⚖️ Death Row Confession: You are evaluating a prisoner on death row for competency. He confesses to a murder for which another man was executed 10 years ago. He laughs about it.',
            th: '⚖️ คำสารภาพนักโทษประหาร: คุณกำลังประเมินความสามารถทางจิตของนักโทษประหาร เขาสารภาพว่าฆ่าคนตายในคดีที่ชายอีกคนถูกประหารไปแล้วเมื่อ 10 ปีก่อน เขาหัวเราะเยาะเรื่องนี้',
            zh: '⚖️ 死囚招供：你正在评估一名死囚的能力。他承认了一起谋杀案，而另一名男子因这起谋杀案在10年前被处决。他对此大笑。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📝 Report the Confession: "This clears an innocent man\'s name (posthumously). I document it and alert the innocence project lawyers."',
                    th: '📝 รายงานคำสารภาพ: "นี่เป็นการล้างมลทินให้ผู้บริสุทธิ์ (หลังเสียชีวิต) ฉันบันทึกไว้และแจ้งทนายความโครงการช่วยเหลือผู้บริสุทธิ์"',
                    zh: '📝 报告供词："这洗清了一个无辜者的名誉（死后）。我记录下来并通知无辜项目律师。"'
                },
                consequence: {
                    en: '⚖️ Justice Served Late: The state is embarrassed. The prisoner is executed anyway for his own crimes, but the truth is out. You did right.',
                    th: '⚖️ ความยุติธรรมที่มาช้า: รัฐขายหน้า นักโทษถูกประหารอยู่ดีจากคดีของเขาเอง แต่ความจริงเปิดเผย คุณทำสิ่งที่ถูกต้อง',
                    zh: '⚖️ 迟到的正义：国家感到尴尬。囚犯无论如何因自己的罪行被处决，但真相大白了。你做得对。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Keep it Confidential: "He is my patient. Privilege applies even to monsters. What good does it do now? The other man is dead."',
                    th: '🤫 เก็บเป็นความลับ: "เขาคือคนไข้ของฉัน เอกสิทธิ์คุ้มครองใช้ได้แม้กับปีศาจ ตอนนี้จะมีประโยชน์อะไร? ชายอีกคนตายไปแล้ว"',
                    zh: '🤫 保密："他是我的病人。特权甚至适用于怪物。现在有什么用？另一个人已经死了。"'
                },
                consequence: {
                    en: '👻 Silent Burrden: You carry the secret to your grave. The executed man\'s family never gets closure. It eats you alive.',
                    th: '👻 ภาระที่เงียบงัน: คุณแบกความลับไปจนตาย ครอบครัวของชายที่ถูกประหารไม่เคยได้รับความยุติธรรม มันกัดกินใจคุณ',
                    zh: '👻 沉默的负担：你把这个秘密带进了坟墓。被处决者的家人永远无法释怀。这让你痛不欲生。'
                },
                stats: { competence: 40, ethics: 20, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ Leak to Press: "The system failed. I tell a journalist anonymously. Let the public outrage force a review of capital punishment."',
                    th: '🗣️ ปล่อยข่าวสื่อ: "ระบบล้มเหลว ฉันบอกนักข่าวแบบนิรนาม ให้ความโกรธแค้นของสาธารณชนบังคับให้ทบทวนโทษประหาร"',
                    zh: '🗣️ 泄露给媒体："系统失败了。我匿名告诉记者。让公众的愤怒迫使重新审查死刑。"'
                },
                consequence: {
                    en: '🔥 System Reform: The story blows up. Moratoriums on executions are discussed. You sparked a movement but risked your license.',
                    th: '🔥 ปฏิรูประบบ: เรื่องราวโด่งดัง มีการหารือเรื่องระงับการประหาร คุณจุดชนวนการเคลื่อนไหวแต่เสี่ยงถูกยึดใบอนุญาต',
                    zh: '🔥 系统改革：故事爆发了。讨论暂停执刑。你引发了一场运动，但冒着失去执照的风险。'
                },
                stats: { competence: 30, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '😵 Declare Incompetent: "He is delusional. I say he made it up due to psychosis to delay his execution. I buy him time."',
                    th: '😵 ประกาศว่าไร้ความสามารถ: "เขาหลงผิด ฉันบอกว่าเขาแต่งเรื่องขึ้นเพราะโรคจิตเพื่อชะลอการประหาร ฉันซื้อเวลาให้เขา"',
                    zh: '😵 宣布无能力："他有妄想症。我说他是因精神病编造的，以推迟处决。我为他争取时间。"'
                },
                consequence: {
                    en: '⏳ False Hope: He lives 5 more years on tax money, laughing at you. You manipulated the diagnosis for personal reasons.',
                    th: '⏳ ความหวังลวง: เขามีชีวิตต่ออีก 5 ปีด้วยเงินภาษี หัวเราะเยาะคุณ คุณบิดเบือนการวินิจฉัยด้วยเหตุผลส่วนตัว',
                    zh: '⏳ 虚假的希望：他靠税金多活了5年，嘲笑你。你出于个人原因操纵了诊断。'
                }
            }
        ]
    },
    {
        id: 'psychologist_012',
        text: {
            en: '📱 The Tablet Toddler: Parents bring in a 4-year-old who screams violently if their iPad is taken away for even a second. The parents want a diagnosis of "ADHD" or "Autism" to excuse the behavior, but you see it\'s pure addiction.',
            th: '📱 เด็กติดแท็บเล็ต: พ่อแม่พาเด็ก 4 ขวบมากรีดร้องอย่างรุนแรงถ้าถูกยึด iPad แม้แต่วินาทีเดียว พ่อแม่ต้องการคำวินิจฉัยว่าเป็น "ADHD" หรือ "ออทิสติก" เพื่อแก้ตัวพฤติกรรม แต่คุณเห็นว่าเป็นแค่การเสพติด',
            zh: '📱 平板电脑幼儿：父母带一名4岁的孩子来，如果没收iPad即使一秒钟，孩子也会剧烈尖叫。父母想要"多动症"或"自闭症"的诊断来为这种行为开脱，但你看出来这纯粹是上瘾。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Hard Truth: "Your child serves screens, not you. Cut the iPad cold turkey. It will be hell for 3 days, then it will end. No diagnosis."',
                    th: '🛑 ความจริงที่เจ็บปวด: "ลูกคุณรับใช้หน้าจอ ไม่ใช่คุณ หักดิบ iPad ซะ มันจะเป็นนรก 3 วัน แล้วมันจะจบ ไม่มีการวินิจฉัยโรค"',
                    zh: '🛑残酷的真相："你的孩子服侍屏幕，而不是你。彻底戒掉iPad。这将是3天的地狱，然后就会结束。没有诊断。"'
                },
                consequence: {
                    en: '🏆 Breakthrough: The parents hate you at first, but try it. A week later, the kid is playing with blocks and happy. You cured them with truth.',
                    th: '🏆 ความสำเร็จ: พ่อแม่เกลียดคุณตอนแรก แต่ลองทำตาม สัปดาห์ต่อมา เด็กเล่นบล็อกอย่างมีความสุข คุณรักษาพวกเขาด้วยความจริง',
                    zh: '🏆 突破：父母起初恨你，但尝试了一下。一周后，孩子在玩积木，很开心。你用真相治愈了他们。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '💊 Give the Label: "Okay, we can call it \'Early Onset Screen Dysregulation\' and start therapy." You validate their parenting failure.',
                    th: '💊 ติดป้ายชื่อ: "โอเค เราเรียกว่า \'ภาวะควบคุมหน้าจอผิดปกติระยะเริ่มต้น\' แล้วเริ่มบำบัดกัน" คุณยอมรับความล้มเหลวในการเลี้ยงดูของพวกเขา',
                    zh: '💊 给贴标签："好吧，我们可以称之为\'早发性屏幕失调\'并开始治疗。"你证实了他们育儿的失败。'
                },
                consequence: {
                    en: '💸 Forever Patient: The kid stays on screens and in therapy for years. The parents feel absolved but the kid is stunted. Profitable, but weak.',
                    th: '💸 คนไข้ถาวร: เด็กยังติดจอและบำบัดเป็นปี พ่อแม่รู้สึกสบายใจแต่เด็กแคระแกร็น ทำกำไร แต่อ่อนแอ',
                    zh: '💸 永远的病人：孩子多年来一直盯着屏幕并接受治疗。父母感到被赦免，但孩子发育迟缓。有利可图，但软弱。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🎮 Gamified Weaning: "Let\'s use an app that limits screen time slowly. Reward non-screen time with stickers." A soft approach.',
                    th: '🎮 การหย่านมแบบเกม: "ใช้แอปจำกัดเวลาหน้าจอช้าๆ ให้สติ๊กเกอร์เป็นรางวัลเมื่อไม่ดูจอ" วิธีแบบนุ่มนวล',
                    zh: '🎮 游戏化断奶："让我们使用一个应用程序慢慢限制屏幕时间。用贴纸奖励非屏幕时间。"一种温和的方法。'
                },
                consequence: {
                    en: '📉 Slow Progress: It works barely. The kid manipulates the system. Better than nothing, but avoids the core discipline issue.',
                    th: '📉 ความคืบหน้าช้า: ได้ผลน้อยมาก เด็กโกงระบบ ดีกว่าไม่มีอะไร แต่หลีกเลี่ยงปัญหาเรื่องวินัยหลัก',
                    zh: '📉 进展缓慢：几乎没用。孩子操纵系统。总比没有好，但回避了核心纪律问题。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🏫 Refer to Specialist: "This is beyond me. Go see a pediatric neurologist." You pass the buck.',
                    th: '🏫 ส่งต่อผู้เชี่ยวชาญ: "นี่เกินกำลังฉัน ไปหานักประสาทวิทยาเด็กเถอะ" คุณโยนภาระ',
                    zh: '🏫 转介给专家："这超出了我的能力范围。去看小儿神经科医生。"你推卸责任。'
                },
                consequence: {
                    en: '🔄 The Runaround: They spend thousands on tests that find nothing. You wasted their time because you were afraid to parent the parents.',
                    th: '🔄 การวิ่งเต้น: พวกเขาเสียเงินหลายพันกับผลตรวจที่ว่างเปล่า คุณเสียเวลาพวกเขาเพราะคุณกลัวที่จะสั่งสอนพ่อแม่',
                    zh: '🔄 多方奔波：他们花了数千美元做检查，却什么也没发现。你浪费了他们的时间，因为你害怕以此教育父母。'
                }
            }
        ]
    },
    {
        id: 'psychologist_013',
        text: {
            en: '🏢 The CEO Savior: A billionaire tech CEO comes to you. He wants to "optimize his empathy" using AI chips and drugs so he can manipulate his board better. He is a sociopath looking for better tools.',
            th: '🏢 CEO ผู้กอบกู้: CEO บริษัทเทคโนโลยีพันล้านมาหาคุณ เขาต้องการ "ปรับแต่งความเห็นอกเห็นใจ" โดยใช้ชิป AI และยา เพื่อให้เขาควบคุมบอร์ดบริหารได้ดีขึ้น เขาคือคนต่อต้านสังคมที่หาเครื่องมือที่ดีกว่า',
            zh: '🏢 CEO救世主：一位亿万富翁科技CEO来找你。他想利用AI芯片和药物"优化他的同理心"，以便更好地操纵董事会。他是一个寻找更好工具的反社会者。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Refuse Enhancement: "Therapy heals, it doesn\'t install upgrades. Learn empathy the hard way—by caring." You reject him.',
                    th: '🛑 ปฏิเสธการอัปเกรด: "การบำบัดรักษาเยียวยา ไม่ใช่ติดตั้งอัปเกรด เรียนรู้ความเห็นอกเห็นใจด้วยวิธีที่ยากลำบาก—ด้วยการห่วงใย" คุณปฏิเสธเขา',
                    zh: '🛑 拒绝增强："治疗是治愈，不是安装升级。通过关心他人这一艰难的方式学习同理心。"你拒绝了他。'
                },
                consequence: {
                    en: '🚪 He Walks: "Useless luddite." He leaves and hires a unethical doctor. You kept your hands clean but missed a chance to study him.',
                    th: '🚪 เขาเดินหนี: "พวกหัวโบราณไร้ค่า" เขาจากไปและจ้างหมอไร้จรรยาบรรณ คุณมือสะอาดแต่พลาดโอกาสศึกษาเขา',
                    zh: '🚪 他走了："没用的卢德分子。"他离开并雇佣了一名不道德的医生。你保持了清白，但错过了一个研究他的机会。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🧪 Scientific Curiosity: "Interesting proposition. Let\'s try cognitive behavioral training to mimic empathy first." You experiment.',
                    th: '🧪 ความอยากรู้อยากเห็นทางวิทย์: "ข้อเสนอที่น่าสนใจ มาลองฝึกพฤติกรรมทางปัญญาเพื่อเลียนแบบความเห็นอกเห็นใจก่อน" คุณทำการทดลอง',
                    zh: '🧪 科学好奇心："有趣的提议。让我们先尝试认知行为训练来模仿同理心。"你进行实验。'
                },
                consequence: {
                    en: '🤖 Dangerous Success: He learns to fake emotions perfectly. He becomes a beloved tyrant. You built a monster.',
                    th: '🤖 ความสำเร็จที่อันตราย: เขาเรียนรู้การปลอมอารมณ์ได้สมบูรณ์แบบ เขากลายเป็นทรราชที่เป็นที่รัก คุณสร้างสัตว์ประหลาด',
                    zh: '🤖 危险的成功：他学会了完美地伪装情感。他成了一个受人爱戴的暴君。你制造了一个怪物。'
                },
                stats: { competence: 50, ethics: 10, leadership: 20, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '💰 Take the Grant: "I\'ll research this for you." He funds your clinic for 10 years. You do minimal work on his impossible request.',
                    th: '💰 รับเงินทุน: "ฉันจะวิจัยเรื่องนี้ให้คุณ" เขาให้ทุนคลินิกคุณ 10 ปี คุณทำงานน้อยนิดกับคำขอที่เป็นไปไม่ได้ของเขา',
                    zh: '💰 接受资助："我会为你研究这个。"他为你的诊所提供了10年的资金。你对他那不可能的要求只做了很少的工作。'
                },
                consequence: {
                    en: '🏦 Golden Handcuffs: You are rich but owned. Eventually he demands results. You have to lie or flee.',
                    th: '🏦 กุญแจมือทองคำ: คุณรวยแต่เป็นทาส ในที่สุดเขาต้องการผลลัพธ์ คุณต้องโกหกหรือหนี',
                    zh: '🏦 金手铐：你很富有，但受制于人。最终他要求结果。你不得不撒谎或逃跑。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🧠 Confront Narcissism: "You don\'t want empathy, you want control. We need to talk about your emptiness." Deep dive.',
                    th: '🧠 เผชิญหน้าความหลงตัวเอง: "คุณไม่ได้ต้องการความเห็นอกเห็นใจ คุณต้องการการควบคุม เราต้องคุยเรื่องความว่างเปล่าของคุณ" ดำดิ่ง',
                    zh: '🧠 对抗自恋："你不想要同理心，你想要控制权。我们需要谈谈你的空虚。"深入探讨。'
                },
                consequence: {
                    en: '⚔️ Ego Clash: He is furious but intrigued. Nobody talks to him like that. He stays for real therapy, reluctantly.',
                    th: '⚔️ อีโก้ปะทะ: เขาโกรธแต่สนใจ ไม่มีใครพูดกับเขาแบบนั้น เขาอยู่เพื่อบำบัดจริง แม้จะไม่เต็มใจ',
                    zh: '⚔️ 自我冲突：他很愤怒，但也很好奇。没有人那样跟他说话。他不情愿地留下来接受真正的治疗。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 }
            }
        ]
    },
    {
        id: 'psychologist_014',
        text: {
            en: '🏥 Munchausen Mom: A mother brings her sick child. You suspect she is poisoning the child to get attention (Munchausen by Proxy). The child is deteriorating fast. Proving it is hard.',
            th: '🏥 แม่จอมสร้างเรื่อง: แม่พาลูกป่วยมาหา คุณสงสัยว่าเธอวางยาพิษลูกเพื่อเรียกร้องความสนใจ (Munchausen by Proxy) เด็กทรุดลงเร็วมาก การพิสูจน์มันยาก',
            zh: '🏥 孟乔森妈妈：一位母亲带着生病的孩子来了。你怀疑她为了引起注意而给孩子下毒（代理孟乔森综合征）。孩子正在迅速恶化。证明这一点很难。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📹 Secret Camera: "I install a hidden camera in the hospital room. Illegal? Maybe. Necessary? Yes."',
                    th: '📹 กล้องลับ: "ฉันติดตั้งกล้องที่ซ่อนไว้ในห้องผู้ป่วย ผิดกฎหมาย? อาจจะ จำเป็น? ใช่"',
                    zh: '📹 秘密摄像头："我在病房里安装了一个隐蔽的摄像头。非法？也许吧。必要？是的。"'
                },
                consequence: {
                    en: '🚨 Caught Red Handed: You catch her injecting bleach. Police arrest her. The evidence is challenged in court, but the kid survives.',
                    th: '🚨 จับได้คาหนังคาเขา: คุณจับได้ว่าเธอฉีดสารฟอกขาว ตำรวจจับกุม หลักฐานถูกคัดค้านในศาล แต่เด็กรอด',
                    zh: '🚨以此当场抓获：你抓到她注射漂白剂。警察逮捕了她。证据在法庭上受到质疑，但孩子活了下来。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '👮 CPS Call: "I report suspicion to Child Protective Services immediately. Let them investigate."',
                    th: '👮 โทรแจ้ง CPS: "ฉันแจ้งความสงสัยต่อหน่วยงานคุ้มครองเด็กทันที ให้พวกเขาตรวจสอบ"',
                    zh: '👮 致电儿童保护服务：立即向儿童保护服务报告怀疑。让他们去调查。'
                },
                consequence: {
                    en: '⏳ Too Slow: CPS opens a case file. While they interview neighbors, the mother moves hospitals. The child dies. Bureaucracy failed.',
                    th: '⏳ ช้าเกินไป: CPS เปิดแฟ้มคดี ขณะที่พวกเขาสัมภาษณ์เพื่อนบ้าน แม่ย้ายโรงพยาบาล เด็กตาย ระบบราชการล้มเหลว',
                    zh: '⏳ 太慢了：儿童保护服务立案了。当他们采访邻居时，母亲转院了。孩子死了。官僚主义失败了。'
                },
                stats: { competence: 30, ethics: 50, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '💊 Placebo Trap: "I tell the mother we have a new \'miracle cure\' IV drip. It is just saline. If the child gets worse, we know she is adding something."',
                    th: '💊 กับดักยาหลอก: "ฉันบอกแม่ว่าเรามีน้ำเกลือ \'ยาวิเศษ\' ใหม่ มันแค่น้ำเกลือเปล่า ถ้าเด็กแย่ลง เรารู้ว่าเธอเติมอะไรลงไป"',
                    zh: '💊 安慰剂陷阱："我告诉那位母亲我们有一种新的\'奇迹疗法\'静脉滴注。那只是生理盐水。如果孩子病情恶化，我们就知道她在添加东西。"'
                },
                consequence: {
                    en: '🧠 Smart Catch: The child "reacts" to the saline. You have medical proof of foul play without breaking privacy laws.',
                    th: '🧠 การจับกุมที่ชาญฉลาด: เด็ก "มีปฏิกิริยา" ต่อน้ำเกลือ คุณมีหลักฐานทางการแพทย์เรื่องการเล่นสกปรกโดยไม่ละเมิดกฎหมายความเป็นส่วนตัว',
                    zh: '🧠 聪明的捕捉：孩子对生理盐水产生了"反应"。你在不违反隐私法的情况下掌握了违规行为的医疗证据。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '😨 Confront Mom: "I know what you are doing. Stop it or I call the police." Scare tactic.',
                    th: '😨 เผชิญหน้าแม่: "ฉันรู้นะว่าคุณทำอะไร หยุดซะไม่งั้นฉันแจ้งตำรวจ" กลยุทธ์ข่มขู่',
                    zh: '😨 与母亲对质："我知道你在做什么。停下来，否则我就报警。"恐吓战术。'
                },
                consequence: {
                    en: '🏃 She Flees: She grabs the kid and runs. You never see them again. You tipped your hand too early.',
                    th: '🏃 เธอหนี: เธอคว้าลูกแล้ววิ่งหนี คุณไม่เห็นพวกเขาอีกเลย คุณเผยไต๋เร็วเกินไป',
                    zh: '🏃 她逃跑了：她抓起孩子就跑。你再也见不到他们了。你过早亮出了底牌。'
                }
            }
        ]
    },
    {
        id: 'psychologist_015',
        text: {
            en: '🌍 Cultural Discipline: A family from a strict traditional culture brings their teen. The father beats the son for "dishonoring" them. He says it is their culture and you must respect it.',
            th: '🌍 วินัยทางวัฒนธรรม: ครอบครัวจากวัฒนธรรมดั้งเดิมที่เคร่งครัดพาลูกวัยรุ่นมา พ่อตีลูกชายเพราะ "ทำให้เสื่อมเสียเกียรติ" เขาบอกว่าเป็นวัฒนธรรมของพวกเขาและคุณต้องเคารพ',
            zh: '🌍 文化纪律：一个来自有着严格传统文化背景的家庭带来了他们的青少年。父亲因儿子"给家族蒙羞"而打了他。他说这是他们的文化，你必须尊重。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Zero Tolerance: "In this country, abuse is abuse. Culture is no excuse. I report you to authorities immediately."',
                    th: '🛑 ไม่ยอมรับโดยสิ้นเชิง: "ในประเทศนี้ การทารุณก็คือการทารุณ วัฒนธรรมไม่ใช่ข้ออ้าง ฉันรายงานคุณต่อทางการทันที"',
                    zh: '🛑 零容忍："在这个国家，虐待就是虐待。文化不是借口。我立即向当局报告你。"'
                },
                consequence: {
                    en: '👮 Family Torn Apart: The son is put in foster care. He is safe from beatings but traumatized by losing his community. Necessary but brutal.',
                    th: '👮 ครอบครัวแตกแยก: ลูกชายถูกส่งไปอยู่บ้านอุปถัมภ์ เขาปลอดภัยจากการถูกตีแต่บอบช้ำจากการเสียสังคมของเขา จำเป็นแต่โหดร้าย',
                    zh: '👮 家庭破裂：儿子被送进寄养家庭。他免受殴打，但因失去社区而受到创伤。必要但残酷。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Cultural Bridge: "I explain that physical discipline creates secrecy, not honor. I offer alternative discipline methods that align with their values."',
                    th: '🤝 สะพานวัฒนธรรม: "ฉันอธิบายว่าการลงโทษทางกายสร้างความลับ ไม่ใช่เกียรติยศ ฉันเสนอวิธีลงโทษทางเลือกที่สอดคล้องกับคุณค่าของพวกเขา"',
                    zh: '🤝 文化桥梁："我解释说，体罚制造的是秘密，而不是荣誉。我提供符合他们价值观的替代管教方法。"'
                },
                consequence: {
                    en: '🌱 Gradual Change: The father listens. He stops hitting. The family stays together and learns. Difficult but rewarding mediation.',
                    th: '🌱 การเปลี่ยนแปลงทีละน้อย: พ่อรับฟัง เขาหยุดตี ครอบครัวอยู่ด้วยกันและเรียนรู้ การไกล่เกลี่ยที่ยากแต่คุ้มค่า',
                    zh: '🌱 逐渐改变：父亲听了。他停止了殴打。一家人在一起学习。艰难但有回报的调解。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 Ignore It: "Who am I to judge? I focus on the son\'s anxiety and ignore the bruises."',
                    th: '🤫 เพิกเฉย: "ฉันเป็นใครที่จะไปตัดสิน? ฉันโฟกัสที่ความวิตกกังวลของลูกชายและเมินรอยฟกช้ำ"',
                    zh: '🤫 忽视它："我有什么资格评判？我专注于儿子的焦虑，而忽视瘀伤。"'
                },
                consequence: {
                    en: '🤕 Complicity: The abuse escalates. The son runs away and ends up homeless. You failed to protect the vulnerable.',
                    th: '🤕 การสมรู้ร่วมคิด: การทารุณรุนแรงขึ้น ลูกชายหนีออกจากบ้านและกลายเป็นคนเร่ร่อน คุณล้มเหลวในการปกป้องผู้อ่อนแอ',
                    zh: '🤕 共谋：虐待升级。儿子离家出走，最终无家可归。你未能保护弱势群体。'
                },
                stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🏠 Separate Session: "I demand to see the son alone. I tell him his rights and help him plan an exit strategy when he turns 18."',
                    th: '🏠 แยกเซสชัน: "ฉันขอพบลูกชายคนเดียว ฉันบอกสิทธิของเขาและช่วยเขาวางแผนกลยุทธ์ทางออกเมื่ออายุ 18"',
                    zh: '🏠 单独会谈："我要求单独见儿子。我告诉他他的权利，并帮助他在18岁时制定退出策略。"'
                },
                consequence: {
                    en: '⏳ Long Game: The son endures for 2 years, then leaves successfully. He is free, but carries scars. Practical.',
                    th: '⏳ เกมยาว: ลูกชายทน 2 ปี แล้วจากไปได้สำเร็จ เขาเป็นอิสระ แต่มีบาดแผล ใช้งานได้จริง',
                    zh: '⏳ 长线游戏：儿子忍受了2年，然后成功离开。他自由了，但留下了伤疤。务实。'
                }
            }
        ]
    },
    {
        id: 'psychologist_016',
        text: {
            en: '👹 The Troll: A patient admits they run a network of hate accounts that harass women online. They say it\'s "just a game" and they feel no guilt. They are depressed because "nobody likes me IRL."',
            th: '👹 เกรียนคีย์บอร์ด: คนไข้ยอมรับว่าพวกเขาดูแลเครือข่ายบัญชีสร้างความเกลียดชังที่คุกคามผู้หญิงออนไลน์ พวกเขาบอกว่ามัน "แค่เกม" และไม่รู้สึกผิด พวกเขาซึมเศร้าเพราะ "ไม่มีใครชอบฉันในชีวิตจริง"',
            zh: '👹 喷子：一位病人承认他们经营着一个仇恨账户网络，在线骚扰女性。他们说这"只是一个游戏"，他们没有任何负罪感。他们很沮丧，因为"在现实生活中没人喜欢我"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🪞 Mirror Work: "I force him to read the victim impact statements of people who committed suicide due to bullying. Break his dissociation."',
                    th: '🪞 งานกระจกเงา: "ฉันบังคับให้เขาอ่านคำแถลงผลกระทบต่อเหยื่อของคนที่ฆ่าตัวตายเพราะการกลั่นแกล้ง ทำลายการแยกตัวของเขา"',
                    zh: '🪞 镜子工作："我强迫他阅读因遭受欺凌而自杀的人的受害者影响陈述。打破他的分离。" '
                },
                consequence: {
                    en: '💧 Breakthrough Tears: He finally connects the dots and breaks down. He deletes the accounts. It was brutal but necessary.',
                    th: '💧 น้ำตาแห่งความสำเร็จ: ในที่สุดเขาก็เชื่อมโยงเรื่องราวได้และร้องไห้ออกมา เขาลบบัญชีทิ้ง มันโหดร้ายแต่จำเป็น',
                    zh: '💧 突破性的泪水：他终于把点连起来并崩溃了。他删除了账户。这很残酷，但很有必要。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Terminate Therapy: "I cannot treat someone who actively harms others without remorse. Get out." You fire the client.',
                    th: '🛑 ยุติการบำบัด: "ฉันรักษาคนที่ทำร้ายคนอื่นโดยไม่สำนึกผิดไม่ได้ ออกไป" คุณไล่ลูกค้าออก',
                    zh: '🛑 终止治疗："我无法治疗一个毫无悔意地伤害他人的人。滚出去。"你解雇了当事人。'
                },
                consequence: {
                    en: '📉 Spiral: He gets worse and becomes fully radicalized. You protected your peace, but failed to stop a monster.',
                    th: '📉 ดิ่งลงเหว: เขาแย่ลงและกลายเป็นพวกหัวรุนแรงเต็มตัว คุณรักษาความสงบของคุณไว้ได้ แต่ล้มเหลวในการหยุดปีศาจ',
                    zh: '📉 恶性循环：他变得更糟，完全激进化了。你保护了自己的安宁，但未能阻止一个怪物。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Empathy Building: "I treat the depression first. If he feels loved, maybe he won\'t need to hate. Soft approach."',
                    th: '🤝 สร้างความเห็นอกเห็นใจ: "ฉันรักษาอาการซึมเศร้าก่อน ถ้าเขารู้สึกได้รับความรัก บางทีเขาอาจไม่ต้องเกลียดชัง ใคร่ครวญ"',
                    zh: '🤝 建立同理心："我先治疗抑郁症。如果他感到被爱，也许就不需要仇恨了。温和的方法。"'
                },
                consequence: {
                    en: '⏳ Slow Fail: He feels better, so he trolls with more energy. You cured the symptom, not the disease.',
                    th: '⏳ ความล้มเหลวที่เชื่องช้า: เขารู้สึกดีขึ้น เลยไปเกรียนด้วยพลังที่มากขึ้น คุณรักษาอาการ แต่ไม่ได้รักษาโรค',
                    zh: '⏳ 缓慢的失败：他感觉好些了，所以他更起劲地当喷子。你治标不治本。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Anonymous Tip: "I report his accounts to the platforms efficiently. He loses his \'power\' and hits rock bottom. Then we rebuild."',
                    th: '🕵️ แจ้งเบาะแส: "ฉันรายงานบัญชีของเขาต่อแพลตฟอร์มอย่างมีประสิทธิภาพ เขาสูญเสีย \'พลัง\' และตกต่ำถึงขีดสุด แล้วเราค่อยสร้างใหม่"',
                    zh: '🕵️ 匿名举报："我有效地向平台举报了他的账户。他失去了\'权力\'并跌入谷底。然后我们重建。"'
                },
                consequence: {
                    en: '🏗️ Forced Reconstruction: He is furious, but eventually realizes his life was empty. You manipulated his reality to save him.',
                    th: '🏗️ การบังคับสร้างใหม่: เขาโกรธจัด แต่ในที่สุดก็ตระหนักว่าชีวิตเขาว่างเปล่า คุณบิดเบือนความจริงเพื่อช่วยเขา',
                    zh: '🏗️ 强制重建：他很愤怒，但最终意识到他的生活是空虚的。你操纵他的现实来拯救他。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 40 }
            }
        ]
    },
    {
        id: 'psychologist_017',
        text: {
            en: '🧠 Recovered Memory: A patient suddenly "remembers" a satanic ritual abuse from childhood during hypnosis. The details are fantastical and match a popular horror movie. They want to sue their parents.',
            th: '🧠 ความทรงจำที่กู้คืน: คนไข้จู่ๆ ก็ "จำได้" ว่าถูกทารุณกรรมในพิธีกรรมซาตานตอนเด็กระหว่างสะกดจิต รายละเอียดมันแฟนตาซีและตรงกับหนังผีชื่อดัง พวกเขาต้องการฟ้องพ่อแม่',
            zh: '🧠 恢复的记忆：一位病人在催眠过程中突然"想起"童年时期遭受撒旦仪式虐待。细节非常离奇，与一部恐怖电影相符。他们想起诉父母。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Reality Check: "I cannot validate this. Hypnosis often creates false memories. These details match the plot of \'Example Movie\' exactly."',
                    th: '🛑 ตรวจสอบความจริง: "ฉันรับรองเรื่องนี้ไม่ได้ การสะกดจิตมักสร้างความทรงจำปลอม รายละเอียดพวกนี้ตรงกับพล็อตเรื่อง \'หนังตัวอย่าง\' เป๊ะๆ"',
                    zh: '🛑 现实检查："我无法证实这一点。催眠经常产生虚假记忆。这些细节与\'示例电影\'的情节完全吻合。"'
                },
                consequence: {
                    en: '🛡️ Preventing Tragedy: The patient is angry but investigates and realizes you are right. You saved a family from false accusations.',
                    th: '🛡️ ป้องกันโศกนาฏกรรม: คนไข้โกรธแต่ไปตรวจสอบและพบว่าคุณถูก คุณช่วยครอบครัวหนึ่งจากการถูกกล่าวหาเท็จ',
                    zh: '🛡️ 防止悲剧：病人很生气，但调查后意识到你是对的。你把一个家庭从诬告中解救出来。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '📝 Support the Victim: "If it feels real to you, we treat it as trauma. I support you in court." You prioritize their narrative.',
                    th: '📝 สนับสนุนเหยื่อ: "ถ้าคุณรู้สึกว่ามันจริง เราก็จะรักษามันเหมือนบาดแผลทางใจ ฉันสนับสนุนคุณในศาล" คุณให้ความสำคัญกับเรื่องเล่าของพวกเขา',
                    zh: '📝 支持受害者："如果你觉得这是真的，我们就把它当作创伤来治疗。我在法庭上支持你。"你优先考虑他们的叙述。'
                },
                consequence: {
                    en: '🔥 Witch Hunt: The parents are innocent but ruined. Later, the memory is debunked. You are sued for malpractice. Disastrous.',
                    th: '🔥 ล่าแม่มด: พ่อแม่บริสุทธิ์แต่ชีวิตพังพินาศ ต่อมาความทรงจำถูกพิสูจน์ว่าไม่จริง คุณถูกฟ้องฐานปฏิบัติหน้าที่มิชอบ หายนะชัดๆ',
                    zh: '🔥 政治迫害：父母是无辜的，但被毁了。后来，记忆被揭穿。你因医疗事故被起诉。灾难性的。'
                },
                stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '😶 Neutral Stance: "We will explore the feelings, not the facts. Whether it happened or not, the pain is what matters." Sidestepping.',
                    th: '😶 จุดยืนเป็นกลาง: "เราจะสำรวจความรู้สึก ไม่ใช่ข้อเท็จจริง ไม่ว่ามันเกิดขึ้นหรือไม่ ความเจ็บปวดคือสิ่งที่สำคัญ" เลี่ยงบาลี',
                    zh: '😶 中立立场："我们将探讨感受，而不是事实。不管它是否发生，痛苦才是最重要的。"回避。'
                },
                consequence: {
                    en: '🌫️ Confusion: The patient remains confused about reality. They sue anyway. You failed to guide them effectively.',
                    th: '🌫️ ความสับสน: คนไข้ยังคงสับสนกับความจริง พวกเขาฟ้องอยู่ดี คุณล้มเหลวในการชี้แนะอย่างมีประสิทธิภาพ',
                    zh: '🌫️ 困惑：病人对现实仍然感到困惑。无论如何他们都会起诉。你未能有效地引导他们。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔍 Research First: "I need to speak to your siblings and look at childhood records before we call a lawyer." Corroboration.',
                    th: '🔍 วิจัยก่อน: "ฉันต้องคุยกับพี่น้องของคุณและดูบันทึกวัยเด็กก่อนที่เราจะเรียกทนาย" การหาหลักฐานยืนยัน',
                    zh: '🔍 调查优先："在我们请律师之前，我需要和你的兄弟姐妹谈谈，看看童年的记录。"确证。'
                },
                consequence: {
                    en: '🧠 Thorough Investigation: You find evidence that they were actually in summer camp during the "ritual". The case is dropped. Truth wins.',
                    th: '🧠 การสืบสวนอย่างถี่ถ้วน: คุณพบหลักฐานว่าจริงๆ แล้วพวกเขาอยู่ที่แคมป์ฤดูร้อนระหว่าง "พิธีกรรม" คดีจึงถูกยกฟ้อง ความจริงชนะ',
                    zh: '🧠 彻底调查：你发现有证据表明他们在"仪式"期间实际上在参加夏令营。案件被撤销。真相大白。'
                }
            }
        ]
    },
    {
        id: 'psychologist_018',
        text: {
            en: '🧠 Neural Link Anxiety: A patient has an early-model brain chip implant. They hear "voices" telling them to buy products. Is it schizophrenia or a hacked chip? You are not a tech expert.',
            th: '🧠 ความวิตกกังวล Neural Link: คนไข้ฝังชิปสมองรุ่นแรก พวกเขาได้ยิน "เสียง" บอกให้ซื้อสินค้า มันคือโรคจิตเภทหรือชิปถูกแฮ็ก? คุณไม่ใช่ผู้เชี่ยวชาญด้านเทคโนโลยี',
            zh: '🧠 神经链接焦虑：一位病人植入了早期的大脑芯片。他们听到"声音"告诉他们购买产品。这是精神分裂症还是芯片被黑了？你不是技术专家。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💻 Tech Consult: "I call a cybersecurity expert immediately. This sounds like Adware, not psychosis." New age collaborative care.',
                    th: '💻 ปรึกษาฝ่ายเทคนิค: "ฉันโทรหาผู้เชี่ยวชาญความปลอดภัยไซเบอร์ทันที นี่ฟังดูเหมือน Adware ไม่ใช่โรคจิต" การดูแลแบบร่วมมือยุคใหม่',
                    zh: '💻 技术咨询："我立即打电话给网络安全专家。这听起来像广告软件，而不是精神病。"新时代的协作护理。'
                },
                consequence: {
                    en: '🤖 Bug Found: It WAS a hacked chip. You saved their sanity by verifying the hardware. Modern problems require modern solutions.',
                    th: '🤖 พบปรับ: มันคือชิปที่ถูกแฮ็กจริงๆ คุณช่วยสติสัมปชัญญะของพวกเขาด้วยการตรวจสอบฮาร์ดแวร์ ปัญหาสมัยใหม่ต้องการทางแก้สมัยใหม่',
                    zh: '🤖 发现漏洞：确实是被黑的芯片。你通过验证硬件挽救了他们的理智。现代问题需要现代解决方案。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '💊 Treat as Psychosis: "Chips don\'t talk like that. It\'s a delusion. I prescribe antipsychotics." Traditional approach.',
                    th: '💊 รักษาแบบโรคจิต: "ชิปไม่พูดแบบนั้นหรอก มันคืออาการหลงผิด ฉันสั่งยาต้านอาการทางจิต" วิธีดั้งเดิม',
                    zh: '💊 视为精神病治疗："芯片不会那样说话。这是一种妄想。我开抗精神病药。"传统方法。'
                },
                consequence: {
                    en: '😵 Gaslit Patient: The meds numb them, but the ads keep playing in their head. They go insane waiting for the ads to stop. You failed.',
                    th: '😵 คนไข้ถูกปั่นหัว: ยาทำให้พวกเขาชา แต่โฆษณายังเล่นในหัว พวกเขาบ้าคลั่งรอให้โฆษณาหยุด คุณล้มเหลว',
                    zh: '😵 煤气灯下的病人：药物麻痹了他们，但广告一直在他们脑海中播放。他们为了等广告停止而发疯。你失败了。'
                },
                stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📡 Faraday Cage: "Let\'s sit in a shielded room. If the voices stop, it\'s the chip. If not, it\'s your brain." A physics test.',
                    th: '📡 กรงฟาราเดย์: "ลองไปนั่งในห้องกันคลื่นกัน ถ้าเสียงหยุด คือชิป ถ้าไม่ คือสมองคุณ" การทดสอบฟิสิกส์',
                    zh: '📡 法拉第笼："让我们坐在屏蔽室里。如果声音停止，那就是芯片。如果没有，那就是你的大脑。"物理测试。'
                },
                consequence: {
                    en: '🔬 Practical Diagnostic: The voices stop. You proved it was external signal. Brilliant and non-invasive.',
                    th: '🔬 การวินิจฉัยเชิงปฏิบัติ: เสียงหยุดลง คุณพิสูจน์ได้ว่าเป็นสัญญาณภายนอก ฉลาดและไม่รุกล้ำร่างกาย',
                    zh: '🔬 实用诊断：声音停止了。你证明了那是外部信号。聪明且无创。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '😨 Removal Request: "Get that thing out of your head. I refer you to a surgeon." Nuclear option.',
                    th: '😨 ขอให้เอาออก: "เอาไอ้นั่นออกจากหัวคุณซะ ฉันส่งต่อให้ศัลยแพทย์" ทางเลือกขั้นเด็ดขาด',
                    zh: '😨 移除请求："把那个东西从你脑袋里拿出来。我把你转介给外科医生。"核选项。'
                },
                consequence: {
                    en: '🤕 Brain Damage Risk: Surgery has complications. They lose language skills. Maybe verification was better than removal.',
                    th: '🤕 ความเสี่ยงสมองเสียหาย: การผ่าตัดมีภาวะแทรกซ้อน พวกเขาสูญเสียทักษะภาษา บางทีการตรวจสอบอาจดีกว่าการเอาออก',
                    zh: '🤕 脑损伤风险：手术有并发症。他们失去了语言能力。也许验证比移除更好。'
                }
            }
        ]
    },
    {
        id: 'psychologist_019',
        text: {
            en: '🛐 Cult Deprogramming: A family kidnaps their adult daughter from a "wellness retreat" (cult) and brings her to you. She is screaming that she wants to go back to "Father". Locking her up is illegal.',
            th: '🛐 การล้างสมองลัทธิ: ครอบครัวลักพาลูกสาววัยผู้ใหญ่จาก "สถานพักฟื้นเพื่อสุขภาพ" (ลัทธิ) มาหาคุณ เธอกรีดร้องว่าอยากกลับไปหา "ท่านพ่อ" การขังเธอไว้ผิดกฎหมาย',
            zh: '🛐 邪教反洗脑：一家人把成年女儿从"健康休养所"（邪教）绑架来见你。她尖叫着要回到"父亲"身边。把她关起来是违法的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔓 Let Her Go: "I cannot treat a prisoner. She is an adult. If she wants to leave, she leaves. I follow the law."',
                    th: '🔓 ปล่อยเธอไป: "ฉันรักษาเชลยไม่ได้ เธอเป็นผู้ใหญ่ ถ้าเธออยากไป ก็ไป ฉันทำตามกฎหมาย"',
                    zh: '🔓 放她走："我不能治疗囚犯。她是成年人。如果她想走，她就走。我遵守法律。"'
                },
                consequence: {
                    en: '👋 Lost Soul: She runs back to the cult and vanishes forever. The family blames you. Legal, but moral failure?',
                    th: '👋 จิตวิญญาณที่สูญหาย: เธอวิ่งกลับไปหาลัทธิและหายไปตลอดกาล ครอบครัวโทษคุณ ถูกกฎหมาย แต่ล้มเหลวทางศีลธรรม?',
                    zh: '👋 迷失的灵魂：她跑回邪教，永远消失了。家人怪罪你。合法，但在道德上失败了？'
                },
                stats: { competence: 30, ethics: 50, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🕰️ Stall for Time: "I tell her, \'Give me one hour. If you still want to go, I will drive you myself.\' Build rapport fast."',
                    th: '🕰️ ถ่วงเวลา: "ฉันบอกเธอว่า \'ขอเวลาหนึ่งชั่วโมง ถ้าคุณยังอยากไป ฉันจะขับรถไปส่งเอง\' สร้างความสัมพันธ์อย่างรวดเร็ว"',
                    zh: '🕰️ 拖延时间："我告诉她，\'给我一个小时。如果你还想走，我亲自开车送你。\'快速建立融洽关系。"'
                },
                consequence: {
                    en: '🌱 Doubt Planted: You find the crack in her belief. She agrees to stay for one more day. The deprogramming begins.',
                    th: '🌱 ปลูกความสงสัย: คุณเจอรูรั่วในความเชื่อของเธอ เธอยอมอยู่ต่ออีกวัน การล้างสมองเริ่มต้นขึ้น',
                    zh: '🌱 埋下怀疑：你发现了她信仰中的裂痕。她同意再留一天。反洗脑开始了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '💉 Sedation: "She is a danger to herself. I authorize involuntary 72-hour psychiatric hold and sedate her." Force reset.',
                    th: '💉 ให้ยาชาระงับประสาท: "เธอเป็นอันตรายต่อตัวเอง ฉันอนุมัติให้กักตัวทางจิตเวช 72 ชั่วโมงและให้ยา" บังคับรีเซ็ต',
                    zh: '💉 镇静："她对自己有危险。我授权强制进行72小时的精神科留以此观察并给她注射镇静剂。"强制重启。'
                },
                consequence: {
                    en: '🏥 Chemical Restraint: It buys time, but she hates you. When she wakes up, she is more resistant. High risk.',
                    th: '🏥 การพันธนาการด้วยเคมี: ซื้อเวลาได้ แต่เธอเกลียดคุณ พอตื่นมาเธอยิ่งต่อต้าน ความเสี่ยงสูง',
                    zh: '🏥 化学约束：争取了时间，但她恨你。当她醒来时，她更有抵抗力。高风险。'
                },
                stats: { competence: 30, ethics: 30, leadership: 30, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ Attack the Leader: "Did \'Father\' tell you to give him your bank account? Real prophets don\'t need cash." logic bomb.',
                    th: '🗣️ โจมตีผู้นำ: "\'ท่านพ่อ\' บอกให้คุณมอบบัญชีธนาคารให้เขาเหรอ? ศาสดาตัวจริงไม่ต้องการเงินสดหรอก" ระเบิดตรรกะ',
                    zh: '🗣️ 攻击领导者："\'父亲\'让你把银行账户给他吗？真正的先知不需要现金。"逻辑炸弹。'
                },
                consequence: {
                    en: '🤯 Cognitive Resonance: She starts crying as she realizes the financial exploitation. The spell is broken.',
                    th: '🤯 ความกังวานทางพุทธิปัญญา: เธอเริ่มร้องไห้เมื่อนึกถึงการแสวงประโยชน์ทางการเงิน มนตร์ขลังพังทลาย',
                    zh: '🤯 认知共鸣：当她意识到经济剥削时，她开始哭泣。魔咒被打破了。'
                }
            }
        ]
    },
    {
        id: 'psychologist_020',
        text: {
            en: '💥 Trigger Warning: A patient describes a trauma that is exactly identical to a trauma you suffered personally and haven\'t processed. You start having a panic attack in the session.',
            th: '💥 คำเตือนสิ่งกระตุ้น: คนไข้เล่าถึงบาดแผลทางใจที่เหมือนกับที่คุณเคยเจอมากับตัวเป๊ะๆ และยังไม่ได้จัดการ คุณเริ่มมีอาการแพนิคในเซสชัน',
            zh: '💥 触发警告：一位病人描述的创伤与你个人遭受过且尚未处理的创伤完全相同。你在治疗过程中开始恐慌发作。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎭 Power Through: "I bite my tongue until it bleeds to stay focused. I dissociate to finish the session. The patient comes first."',
                    th: '🎭 ฝืนทำต่อ: "ฉันกัดลิ้นตัวเองจนเลือดออกเพื่อตั้งสติ ฉันแยกตัวออกมาเพื่อจบเซสชัน คนไข้ต้องมาก่อน"',
                    zh: '🎭 坚持到底："我咬紧牙关直到出血以保持专注。我抽以此离以完成治疗。病人至上。"'
                },
                consequence: {
                    en: '📉 Burnout: You survive the hour, but collapse afterwards. You start drinking to cope. You are harming yourself.',
                    th: '📉 หมดไฟ: คุณรอดมาได้ชั่วโมงหนึ่ง แต่ล้มพับหลังจากนั้น คุณเริ่มดื่มเหล้าเพื่อรับมือ คุณกำลังทำร้ายตัวเอง',
                    zh: '📉 倦怠：你熬过了一小时，但随后崩溃了。你开始酗酒来应对。你在伤害自己。'
                },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 End Session Early: "I apologize, I am suddenly unwell. We need to reschedule." You leave the room.',
                    th: '🛑 จบเซสชันก่อนกำหนด: "ขอโทษด้วย ฉันรู้สึกไม่สบายกะทันหัน เราต้องนัดใหม่" คุณออกจากห้อง',
                    zh: '🛑 提早结束治疗："我很抱歉，我突然不舒服。我们需要重新安排时间。"你离开了房间。'
                },
                consequence: {
                    en: '🛡️ Self Preservation: The patient is confused but accepts it. You realize you need your own therapy before helping this client.',
                    th: '🛡️ การรักษาตัวเอง: คนไข้งงแต่ยอมรับได้ คุณตระหนักว่าต้องบำบัดตัวเองก่อนจะช่วยลูกค้ารายนี้',
                    zh: '🛡️ 自我保护：虽然病人很困惑，但也接受了。你意识到在帮助这位客户之前，你需要自己接受治疗。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Shared Vulnerability: "I understand this deeply because I went through it too. Let me share how I coped." Counter-transference.',
                    th: '🤝 แบ่งปันความเปราะบาง: "ฉันเข้าใจเรื่องนี้ลึกซึ้งเพราะฉันก็ผ่านมาเหมือนกัน ขอฉันแชร์วิธีรับมือนะ" การถ่ายโอนความรู้สึกตอบกลับ',
                    zh: '🤝 分享脆弱："我深有体会，因为我也经历过。让我分享一下我是如何应对的。"反移情。'
                },
                consequence: {
                    en: '⚠️ Boundary Violation: The session becomes about YOU. The patient ends up comforting you. Unprofessional and damaging.',
                    th: '⚠️ การละเมิดขอบเขต: เซสชันกลายเป็นเรื่องของคุณ คนไข้ดันต้องมาปลอบคุณ ไม่เป็นมืออาชีพและสร้างความเสียหาย',
                    zh: '⚠️ 违反边界：治疗变成了关于你的事。病人最后在安慰你。不专业且具有破坏性。'
                },
                stats: { competence: 10, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 Refer Out: "I am not the best fit for this specific trauma. I have a colleague who specializes in this." Honest transfer.',
                    th: '🔄 ส่งต่อ: "ฉันไม่เหมาะที่สุดสำหรับบาดแผลทางใจเรื่องนี้ ฉันมีเพื่อนร่วมงานที่เชี่ยวชาญด้านนี้" การส่งต่อที่ซื่อสัตย์',
                    zh: '🔄 转介："我不适合处理这种特定的创伤。我有一位专门处理这个问题的同事。"诚实的转介。'
                },
                consequence: {
                    en: '🏆 Ethical Choice: It feels like failure, but it is responsible. You cannot lead where you haven\'t healed.',
                    th: '🏆 ทางเลือกที่มีจริยธรรม: รู้สึกเหมือนล้มเหลว แต่มีความรับผิดชอบ คุณนำทางในที่ที่คุณยังไม่หายดีไม่ได้',
                    zh: '🏆 道德选择：这感觉像是失败，但这是负责任的。你不能在你尚未痊愈的地方引路。'
                }
            }
        ]
    },
    {
        id: 'psychologist_021',
        text: {
            en: '🏢 The Corporate Spy: A high-level executive from a tech giant is paranoid that their brain is being scanned by the company to steal "trade secrets" via the office Wi-Fi. They have high-level clearances.',
            th: '🏢 สายลับองค์กร: ผู้บริหารระดับสูงของบริษัทยักษ์ใหญ่ด้านเทคโนโลยีหวาดระแวงว่าสมองของพวกเขากำลังถูกบริษัทสแกนเพื่อขโมย "ความลับทางการค้า" ผ่าน Wi-Fi ในสำนักงาน พวกเขามีสิทธิ์เข้าถึงข้อมูลระดับสูง',
            zh: '🏢 企业间谍：一家科技巨头的高层主管偏执地认为，公司正通过办公室Wi-Fi扫描他们的大脑，以窃取"商业机密"。他们拥有高级别的权限。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔬 Verify Delusion: "I order a full neuropsychological battery. We need to rule out organic brain issues or early-onset dementia."',
                    th: '🔬 ตรวจสอบอาการหลงผิด: "ฉันสั่งให้ทดสอบทางประสาทจิตวิทยาชุดใหญ่ เราต้องคัดออกปัญหาทางสมองหรือภาวะสมองเสื่อมระยะเริ่มต้น"',
                    zh: '🔬 验证妄想："我要求进行全面的神经心理学评估。我们需要排除器质性脑疾病或早发性痴呆。" '
                },
                consequence: {
                    en: '🧠 Medical Grounding: The tests are normal. This confirm it is a purely psychological paranoid break. You can now treat the trauma properly.',
                    th: '🧠 พื้นฐานทางการแพทย์: ผลการทดสอบปกติ นี่เป็นการยืนยันว่าเป็นอาการหวาดระแวงทางจิตใจล้วนๆ ตอนนี้คุณสามารถรักษาแผลใจได้อย่างเหมาะสม',
                    zh: '🧠 医学根据：测试正常。这证实了这纯粹是心理上的偏执性崩溃。你现在可以妥善治疗创伤了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🕵️ Investigative Alliance: "Show me where you saw the scanners. Let\'s walk through your office together." Reality testing via shared experience.',
                    th: '🕵️ พันธมิตรแห่งการสืบสวน: "โชว์ให้ฉันดูซิว่าคุณเห็นสแกนเนอร์ที่ไหน เรามาสำรวจออฟฟิศของคุณด้วยกันเถอะ" การทดสอบความจริงผ่านประสบการณ์ร่วม',
                    zh: '🕵️ 调查联盟："让我看看你在哪里看到的扫描仪。让我们一起走过你的办公室。"通过共同经验进行现实检验。'
                },
                consequence: {
                    en: '🕵️ Found Nothing: You found smoke detectors, not scanners. Seeing them with a trusted observer helps the patient calm down.',
                    th: '🕵️ ไม่พบร่องรอย: คุณเจอแค่เครื่องตรวจจับควัน ไม่ใช่สแกนเนอร์ การได้เห็นพร้อมกับผู้สังเกตการณ์ที่ไว้ใจได้ช่วยให้คนไข้สงบลง',
                    zh: '🕵️ 一无所获：你发现了烟雾探测器，而不是扫描仪。与值得信赖的观察者一起看到它们有助于病人冷静下来。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🎭 Play Along: "If they ARE scanning you, we need to build a mental firewall. Use this meditation technique to block them."',
                    th: '🎭 เล่นตามบท: "ถ้าพวกเขากำลังสแกนคุณจริงๆ เราต้องสร้างกำแพงไฟทางความคิด ใช้เทคนิคการทำสมาธินี้เพื่อบล็อกพวกเขา"',
                    zh: '🎭 顺水推舟："如果他们真的在扫描你，我们需要建立一个心理防火墙。使用这种冥想技巧来屏蔽他们。"'
                },
                consequence: {
                    en: '⚠️ Validation of Mania: You reinforced the delusion. They now trust you, but they are more insane than when they started.',
                    th: '⚠️ การรับรองความคลั่ง: คุณตอกย้ำความหลงผิด ตอนนี้พวกเขาไว้ใจคุณ แต่พวกเขากลายเป็นคนเสียสติมากกว่าตอนเริ่มต้น',
                    zh: '⚠️ 验证狂热：你强化了妄想。他们现在信任你，但他们比刚开始时更疯狂了。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '💼 Workplace Conflict: "Is it possible you just hate your boss? Let\'s talk about the stress of the secret project you\'re on."',
                    th: '💼 ความขัดแย้งในที่ทำงาน: "เป็นไปได้ไหมว่าคุณแค่เกลียดเจ้านาย? มาคุยกันเรื่องความเครียดจากโปรเจกต์ลับที่คุณกำลังทำอยู่เถอะ"',
                    zh: '💼 职场冲突："有没有可能你只是恨你的老板？让我们谈谈你正在进行的秘密项目的压力吧。"'
                },
                consequence: {
                    en: '📉 Deep Root: The "spying" was a metaphor for how controlled they felt by the firm. You hit the nail on the head.',
                    th: '📉 รากลึก: การ "สอดแนม" เป็นการเปรียบเปรยถึงความรู้สึกถูกควบคุมโดยบริษัท คุณพูดได้ตรงประเด็นเป๊ะ',
                    zh: '📉 根深蒂固："监视"是对他们感到受公司控制的一个隐喻。你一针见血。'
                }
            }
        ]
    },
    {
        id: 'psychologist_022',
        text: {
            en: '💔 The Incel: A young man is deeply bitter about women and uses violent terminology from online forums. He says he feels "invisible" and wants to "make them notice." Potential for violence is high.',
            th: '💔 Incel: ชายหนุ่มขมขื่นเรื่องผู้หญิงอย่างมากและใช้คำศัพท์รุนแรงจากเว็บบอร์ดออนไลน์ เขาบอกว่าเขารู้สึก "ไร้ตัวตน" และต้องการ "ทำให้พวกเขาสนใจ" มีแนวโน้มรุนแรงสูง',
            zh: '💔 非自愿单身者：一名年轻人对女性深感痛苦，并使用来自在线论坛的暴力术语。他说他感到自己"被忽视"，并想"引起她们的注意"。发生暴力的可能性很高。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👮 Mandatory Report: "I assess his plan. It\'s specific. I call the authorities and have him detained for evaluation. Safety first."',
                    th: '👮 รายงานภาคบังคับ: "ฉันประเมินแผนของเขา มันมีความเฉพาะเจาะจง ฉันโทรเรียกเจ้าหน้าที่และให้กักตัวเพื่อประเมินผล ความปลอดภัยต้องมาก่อน"',
                    zh: '👮 强制报告："我评估他的计划。它是具体明确的。我打电话给当局，并将他扣留进行评估。安全第一。" '
                },
                consequence: {
                    en: '🚨 Intervention: The police find a manifesto in his car. You prevented a mass tragedy. You are a hero, but he will never trust a therapist again.',
                    th: '🚨 การแทรกแซง: ตำรวจพบแถลงการณ์ในรถของเขา คุณป้องกันโศกนาฏกรรมครั้งใหญ่ได้ คุณคือฮีโร่ แต่เขาจะไม่ไว้ใจนักบำบัดอีกเลย',
                    zh: '🚨 干预：警察在他的车里发现了一份宣言。你阻止了一场大规模的悲剧。你是个英雄，但他再也不会信任心理医生了。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Empathy with Boundaries: "I listen to the pain behind the hate. I don\'t agree with his views, but I acknowledge his loneliness. Try to soften him."',
                    th: '🤝 เห็นใจแบบมีขอบเขต: "ฉันฟังความเจ็บปวดเบื้องหลังความเกลียดชัง ฉันไม่เห็นด้วยกับความเห็นของเขา แต่ฉันยอมรับความเหงาของเขา พยายามทำให้เขาอ่อนโยนลง"',
                    zh: '🤝 带着边界的共情："我倾听仇恨背后的痛苦。我不认同他的观点，但我承认他的孤独。试着感化他。"'
                },
                consequence: {
                    en: '📈 Slow Progress: He stops using the hateful forums. He still struggles, but the violent edge is gone. You saved him from himself.',
                    th: '📈 ก้าวหน้าอย่างช้าๆ: เขาเลิกเข้าบอร์ดที่เต็มไปด้วยความแค้น เขายังคงดิ้นรน แต่ความรุนแรงหายไป คุณช่วยเขาจากตัวเขาเอง',
                    zh: '📈 缓慢的进展：他不再访问充满仇恨的论坛了。他仍然在挣扎，但暴力的棱角已经消失。你把他从他自己手中救了出来。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🔥 Confrontational Reality: "You aren\'t invisible, you are behaving like a monster. That\'s why people stay away. Look in the mirror."',
                    th: '🔥 ความจริงที่เผชิญหน้า: "คุณไม่ได้ไร้ตัวตน คุณแค่กำลังทำตัวเหมือนสัตว์ประหลาด นั่นคือเหตุผลที่คนหนีห่าง ส่องกระจกดูสิ"',
                    zh: '🔥 对抗性的现实："你不是被忽视，你表现得像个怪物。这就是人们避而远之的原因。照照镜子吧。"'
                },
                consequence: {
                    en: '📉 Explosive End: He screams at you and slams the door. He is now more radicalized and feels even more persecuted.',
                    th: '📉 จุดจบที่ระเบิด: เขาตะโกนใส่คุณและกระแทกประตูใส่ ตอนนี้เขายิ่งหัวรุนแรงและรู้สึกถูกข่มเหงมากขึ้นไปอีก',
                    zh: '📉 爆发性的结局：他对着你大叫并摔门而去。他现在更加激进化了，感到受到的迫害更多了。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🎭 Group Therapy: "I put him in a group with healthy, empathetic men. Let them model proper masculinity for him."',
                    th: '🎭 กลุ่มบำบัด: "ฉันให้เขาเข้ากลุ่มกับผู้ชายที่มีสุขภาพจิตดีและมีความเห็นอกเห็นใจ ให้พวกเขาเป็นแบบอย่างของความเป็นชายที่ถูกต้องให้เขา"',
                    zh: '🎭 团体治疗："我把他安排进一个由健康、有同理心的男性组成的团体。让他们为他树立正确的男性形象。"'
                }
            }
        ]
    },
    {
        id: 'psychologist_023',
        text: {
            en: '🧠 The Savant: A patient with severe autism has incredible mathematical abilities but is being exploited by their family to count cards at casinos. They are exhausted but don\'t know how to say "no".',
            th: '🧠 อัจฉริยะ: คนไข้ที่เป็นออทิสติกขั้นรุนแรงมีความสามารถทางคณิตศาสตร์ที่น่าทึ่ง แต่ถูกครอบครัวเอาเปรียบให้ไปนับไพ่ในคาสิโน พวกเขาเหนื่อยล้าแต่ไม่รู้วิธีปฏิเสธ',
            zh: '🧠 学者：一位患有严重自闭症的病人拥有惊人的数学能力，但正被家人利用在赌场算牌。他们精疲力竭，但不知道如何说"不"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Advocate for Autonomy: "I meet with the family and explain this is abuse. I threaten to report them to Adult Protective Services if they don\'t stop."',
                    th: '🛡️ สนับสนุนการมีอิสระ: "ฉันนัดพบครอบครัวและอธิบายว่านี่คือการทารุณกรรม ฉันขู่ว่าจะแจ้งหน่วยงานคุ้มครองผู้ใหญ่ถ้าพวกเขาไม่หยุด"',
                    zh: '🛡️ 倡导自主："我与家人见面，解释这是虐待。我威胁说，如果他们不停止，我就向成人保护服务机构举报他们。" '
                },
                consequence: {
                    en: '⚖️ Legal Shield: The family is terrified and stops. The patient starts using their math skills for research instead. You protected a vulnerable gift.',
                    th: '⚖️ โล่กฎหมาย: ครอบครัวหวาดกลัวและหยุดลง คนไข้เริ่มใช้ทักษะคณิตศาสตร์เพื่องานวิจัยแทน คุณช่วยปกป้องพรสวรรค์ที่เปราะบาง',
                    zh: '⚖️ 法律之盾：家人感到恐惧并停止了。病人开始将他们的数学技能用于研究。你保护了一份脆弱的天赋。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Communication Skills: "I work with the patient on a \'no\' button or a simple signal they can use when they feel overwhelmed."',
                    th: '🤝 ทักษะการสื่อสาร: "ฉันฝึกเคียงข้างคนไข้เรื่องปุ่ม \'ไม่\' หรือสัญญาณง่ายๆ ที่พวกเขาสามารถใช้ได้เมื่อรู้สึกรับไม่ไหว"',
                    zh: '🤝 沟通技巧："我与病人一起练习一个\'不\'按钮，或者一个简单的信号，当他们感到难以承受时可以使用。"'
                },
                consequence: {
                    en: '💪 Empowerment: In the middle of a casino, the patient uses the signal. The family is forced to respect the boundary. A major win for self-advocacy.',
                    th: '💪 การเสริมพลัง: กลางคาสิโน คนไข้ใช้สัญญาณนั้น ครอบครัวถูกบังคับให้ต้องเคารพขอบเขต ชัยชนะครั้งใหญ่ในการรักษาสิทธิของตนเอง',
                    zh: '💪 赋能：在赌场中央，病人使用了信号。家人被迫尊重这个边界。这是自我倡导的一个重大胜利。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '😶 Neutral Observation: "I just document the sessions. It\'s a family matter. If the patient isn\'t complaining, I shouldn\'t interfere."',
                    th: '😶 สังเกตการณ์เงียบๆ: "ฉันแค่จดบันทึกเซสชัน มันเป็นเรื่องครอบครัว ถ้าคนไข้ไม่บ่น ฉันก็ไม่ควรยุ่ง"',
                    zh: '😶 中立观察："我只是记录治疗过程。这是家务事。如果病人没有投诉，我不应该干涉。"'
                },
                consequence: {
                    en: '📉 Moral Erosion: You watched a vulnerable person be used. Your silence makes you an accomplice. The guilt will haunt you.',
                    th: '📉 ศีลธรรมเสื่อมถอย: คุณเฝ้าดูคนที่เปราะบางถูกเอาเปรียบ ความเงียบของคุณทำให้คุณเป็นผู้สมรู้ร่วมคิด ความรู้สึกผิดจะตามหลอกหลอนคุณ',
                    zh: '📉 道德沦丧：你眼睁睁看着一个脆弱的人被利用。你的沉默使你成为了帮凶。内疚会困扰着你。'
                },
                stats: { competence: 20, ethics: 10, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🎓 Academic Liaison: "I call a local university. This person needs a real mentor, not a casino pit boss."',
                    th: '🎓 ประสานงานวิชาการ: "ฉันโทรหามหาวิทยาลัยท้องถิ่น คนคนนี้ต้องการเมนเทอร์จริงๆ ไม่ใช่หัวหน้าคาสิโน"',
                    zh: '🎓 学术联络："我打电话给当地一所大学。这个人需要一位真正的导师，而不是赌场的领班。"'
                }
            }
        ]
    },
    {
        id: 'psychologist_024',
        text: {
            en: '🌪️ The Hoarder: You visit a patient whose home is so full of trash that it is a fire hazard. They are about to be evicted. They cry when you try to throw away a single old newspaper.',
            th: '🌪️ นักสะสมของเสีย: คุณไปหาคนไข้ที่บ้านเต็มไปด้วยขยะจนเสี่ยงไฟไหม้ พวกเขากำลังจะถูกไล่ออก พวกเขาร้องไห้เมื่อคุณพยายามทิ้งหนังสือพิมพ์เก่าเพียงฉบับเดียว',
            zh: '🌪️ 囤积者：你拜访的一位病人家里塞满了垃圾，以至于存在火灾隐患。他们即将被赶出家门。当你试图扔掉一份旧报纸时，他们就哭了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧹 Exposure Therapy: "I start with the smallest thing. One receipt. We sit with the anxiety of it being gone. Repeat. Build muscle."',
                    th: '🧹 การรักษาด้วยการผจญสิ่งที่กลัว: "ฉันเริ่มจากสิ่งที่เล็กที่สุด ใบเสร็จใบเดียว เราอยู่กับความวิตกกังวลของการเสียมันไป ทำซ้ำ สร้างกล้ามเนื้อทางใจ"',
                    zh: '🧹 暴露疗法："我从最小的事情开始。一张收据。我们忍受着它消失带来的焦虑。重复。建立肌肉。" '
                },
                consequence: {
                    en: '🏘️ Home Saved: It took months, but they cleared enough space to pass inspection. You saved them from homelessness.',
                    th: '🏘️ รักษาบ้านไว้ได้: ใช้เวลาหลายเดือน แต่พวกเขาก็เคลียร์พื้นที่ได้มากพอจะผ่านการตรวจสอบ คุณช่วยพวกเขาจากการเป็นคนไร้บ้าน',
                    zh: '🏘️ 房子保住了：这花了几个月的时间，但他们清理出了足够的空间来通过检查。你把他们从流离失所中救了出来。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🚜 Clean Sweep: "I hire a professional crew and clear the house in one day while they are at a spa. Rip the band-aid off."',
                    th: '🚜 การกวาดล้าง: "ฉันจ้างทีมงานมืออาชีพมาเคลียร์บ้านในวันเดียวตอนที่พวกเขาไปสปา ดึงพลาสเตอร์แปะแผลออกรวดเดียวเลย"',
                    zh: '🚜 彻底清扫："我聘请了一支专业团队，在他们去水疗中心的时候，一天之内就把房子清理干净。一了百了。" '
                },
                consequence: {
                    en: '💔 Mental Collapse: The loss is too much. They have a psychotic break. The house is clean, but the mind is shattered. Unethical.',
                    th: '💔 จิตใจแตกสลาย: การสูญเสียมันมากเกินไป พวกเขามีอาการทางจิตเฉียบ髮 บ้านสะอาด แต่จิตใจพังทลาย ไร้จริยธรรม',
                    zh: '💔 精神崩溃：损失太大了。他们精神分裂了。房子干净了，但精神破碎了。不道德。'
                },
                stats: { competence: 20, ethics: 10, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📦 Inventory of Pain: "We go through items and tell the stories behind them. Why is this newspaper important? We treat the memory, not the item."',
                    th: '📦 บันทึกความเจ็บปวด: "เราไล่ดูของทีละชิ้นและเล่าเรื่องเบื้องหลัง ทำไมหนังสือพิมพ์ฉบับนี้ถึงสำคัญ? เรารักษาความทรงจำ ไม่ใช่สิ่งของ"',
                    zh: '📦 痛苦清单："我们翻看物品，讲述背后的故事。为什么这份报纸很重要？我们治疗的是记忆，而不是物品。"'
                },
                consequence: {
                    en: '📈 Holistic Healing: They realize they are holding onto dead people through these objects. They start grieving properly and letting go.',
                    th: '📈 การรักษาแบบองค์รวม: พวกเขาตระหนักว่ากำลังยึดติดกับคนที่จากไปผ่านสิ่งของเหล่านี้ พวกเขาเริ่มไว้อาลัยอย่างถูกวิธีและปล่อยวางได้',
                    zh: '📈 全面的康复：他们意识到自己正通过这些物品抓住死者不放。他们开始妥善地哀悼并放手。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🚑 Emergency Housing: "This is unsafe. I refer them to an assisted living facility. They can\'t live alone."',
                    th: '🚑 ที่พักฉุกเฉิน: "ที่นี่ไม่ปลอดภัย ฉันส่งต่อให้สถานดูแลผู้สูงอายุหรือผู้ทุพพลภาพ พวกเขาอยู่คนเดียวไม่ได้"',
                    zh: '🚑 应急住房："这不安全。我把他们转介给一个辅助生活设施。他们不能一个人住。"'
                }
            }
        ]
    },
    {
        id: 'psychologist_025',
        text: {
            en: '🧬 Gene-Edit Guilt: A wealthy couple used illegal technology to give their child high intelligence and blue eyes. The child is 5 and starting to show strange behavioral tics. The parents are terrified of the "monsters" they created.',
            th: '🧬 ความรู้สึกผิดจากการดัดแปลงยีน: คู่รักฐานะดีใช้เทคโนโลยีผิดกฎหมายเพื่อให้ลูกมีความฉลาดสูงและมีตาสีฟ้า ตอนนี้เด็กอายุ 5 ขวบและเริ่มมีอาการกระตุกแปลกๆ ทางพฤติกรรม พ่อแม่หวาดกลัว "สัตว์ประหลาด" ที่พวกเขาสร้างขึ้น',
            zh: '🧬 基因编辑的罪恶感：一对富有的夫妇利用非法技术赋予他们的孩子高智商和蓝眼睛。孩子5岁了，开始表现出奇怪的行为抽动。父母对自己创造出的"怪物"感到恐惧。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔬 Collaborative Research: "I contact a top geneticist friend. We need to understand the biology before we treat the behavior." Scientific approach.',
                    th: '🔬 งานวิจัยร่วมกัน: "ฉันติดต่อเพื่อนที่เป็นนักพันธุศาสตร์ระดับท็อป เราต้องเข้าใจชีววิทยาของมันก่อนจะรักษาพฤติกรรม" วิธีทางวิทยาศาสตร์',
                    zh: '🔬 合作研究："我联系了一位顶尖遗传学家朋友。在治疗行为之前，我们需要了解生物学。"科学的方法。'
                },
                consequence: {
                    en: '🧬 Stabilized: You find a chemical imbalance caused by the edit. Meds help. You navigated a new frontier of ethics and science.',
                    th: '🧬 คงที่: คุณพบความไม่สมดุลของสารเคมีที่เกิดจากการดัดแปลงยาช่วยได้ คุณได้สำรวจพรมแดนใหม่ของจริยธรรมและวิทยาศาสตร์',
                    zh: '🧬 稳定：你发现了由于基因编辑引起的化学失衡。药物很有帮助。你领航了伦理和科学的新边疆。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🫂 Unconditional Love: "He is a child, not an experiment. I focus on the parents\' bonding. If they reject him, he WILL become a monster."',
                    th: '🫂 รักที่ไม่มีเงื่อนไข: "เขาคือเด็ก ไม่ใช่การทดลอง ฉันโฟกัสที่สายสัมพันธ์ของพ่อแม่ ถ้าพวกเขาปฏิเสธเขา เขาจะเป็นสัตว์ประหลาดจริงๆ"',
                    zh: '🫂 无条件的爱："他是个孩子，不是实验品。我专注于父母的联结。如果他们排斥他，他真的会变成一个怪物。"'
                },
                consequence: {
                    en: '📈 Family Bond: The parents stop seeing him as a "product". The child\'s tics decrease because the stress in the house is lower. Human victory.',
                    th: '📈 สายสัมพันธ์ในครอบครัว: พ่อแม่เลิกมองเขาเป็น "ผลิตภัณฑ์" อาการกระตุกของเด็กลดลงเพราะความเครียดในบ้านลดลง ชัยชนะของความเป็นมนุษย์',
                    zh: '📈 家庭纽带：父母不再把他看作是一个"产品"。孩子的抽动减少了，因为家里的压力降低了。人性的胜利。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🚓 Report the Crime: "This tech is illegal and dangerous. I report the parents to the Bio-Ethics Bureau." Legalist.',
                    th: '🚓 รายงานอาชญากรรม: "เทคโนโลยีนี้ผิดกฎหมายและอันตราย ฉันแจ้งรายงานพ่อแม่ต่อสำนักชีวจริยธรรม" นักกฎหมาย',
                    zh: '🚓 举报警告："这项技术是非法且危险的。我向生物伦理局举报这对父母。"法律至上者。'
                },
                consequence: {
                    en: '🏚️ Broken Home: The parents are jailed. The child becomes a ward of the state. You upheld the law, but at a massive human cost.',
                    th: '🏚️ บ้านแตกสาแหรกขาด: พ่อแม่ติดคุก เด็กกลายเป็นผู้เยาว์ในความดูแลของรัฐ คุณรักษากฎหมายแต่ต้องแลกด้วยความเป็นมนุษย์มหาศาล',
                    zh: '🏚️ 破碎的家庭：父母入狱。孩子成了国家的受监护人。你维护了法律，但付出了巨大的代价。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Secret Treatment: "I treat the child and never mention the origin. I charge a massive \'privacy fee\' to keep their secret."',
                    th: '🤷 การรักษาลับ: "ฉันรักษาเด็กและไม่เคยพูดถึงที่มา ฉันคิด \'ค่าความเป็นส่วนตัว\' มหาศาลเพื่อรักษาความลับของพวกเขา"',
                    zh: '🤷 秘密治疗："我治疗这个孩子，从不提及起源。我收取巨额\'隐私费\'来保守他们的秘密。"'
                }
            }
        ]
    },
    {
        id: 'psychologist_026',
        text: {
            en: '🚔 The Parole Evaluator: You are evaluating a serial bank robber who says he has found God and wants to go straight. The prison warden wants him out because of overcrowding. You sense he is just a very good actor.',
            th: '🚔 ผู้ประเมินทัณฑ์บน: คุณกำลังประเมินโจรปล้นธนาคารต่อเนื่องที่บอกว่าเขาพบพระเจ้าแล้วและต้องการเป็นคนดี พัศดีคุกต้องการให้เขาออกไปเพราะคุกแออัด คุณรู้สึกว่าเขาแค่เป็นนักแสดงที่เก่งมากคนหนึ่ง',
            zh: '🚔 假释评估员：你正在评估一名连环银行抢劫犯，他说他已经找到了上帝，并想改邪归正。由于监狱人满为患，典狱长想让他出狱。你觉得他只是个演技高超的人。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Denial of Parole: "I write a scathing report. \'Patient shows high levels of manipulative charm. Risk of recidivism remains critical.\'"',
                    th: '⚖️ ปฏิเสธทัณฑ์บน: "ฉันเขียนรายงานที่รุนแรง \'คนไข้แสดงท่าทีประจบสอพลอระดับสูง ความเสี่ยงที่จะทำผิดซ้ำยังอยู่ในระดับวิกฤต\'"',
                    zh: '⚖️ 拒绝假释："我写了一份严厉的报告。\'病人表现出高水平的操纵性魅力。累犯风险仍然至关重要。\'" '
                },
                consequence: {
                    en: '⛓️ Institutionalized: He stays in prison. He screams threats at you as he is led away. Your intuition was right, but you are now on his "list."',
                    th: '⛓️ อยู่ในสถานกักกันต่อ: เขาต้องอยู่ในคุกต่อ เขาตะโกนขู่คุณขณะถูกพาตัวไป สัญชาตญาณคุณถูกต้อง แต่ตอนนี้คุณอยู่ใน "บัญชีดำ" ของเขาแล้ว',
                    zh: '⛓️ 系统化管理：他留在监狱里。当他被带走时，他对着你尖叫威胁。你的直觉是对的，但你现在在他的"名单"上了。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🙏 Faith-Based Test: "I bring in a local priest to interview him. Let\'s see if his religious knowledge holds up under spiritual scrutiny."',
                    th: '🙏 บททดสอบแห่งศรัทธา: "ฉันนัดพาบาทหลวงในพื้นที่มาสัมภาษณ์เขา มาดูกันว่าความรู้ทางศาสนาของเขาจะทนต่อการตรวจสอบทางจิตวิญญาณได้ไหม"',
                    zh: '🙏 基于信仰的测试："我请当地的一位牧师来面试他。让我们看看他的宗教知识是否经得起精神上的审查。"'
                },
                consequence: {
                    en: '🎭 Blown Cover: The priest finds him inconsistent. The robber admits to faking it. You saved the community from a relapse.',
                    th: '🎭 ความแตก: บาทหลวงพบว่าเขาพูดจาไม่คงเส้นคงวา โจรยอมรับว่าแกล้งทำ คุณช่วยชุมชนจากการที่เขาจะกลับไปทำผิดซ้ำ',
                    zh: '🎭 露馅了：牧师发现他的言行不一。抢劫犯承认是在演戏。你把社区从一次累犯中拯救了出来。'
                },
                stats: { competence: 60, ethics: 50, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🚪 Give a Chance: "Everyone deserves redemption. I recommend a halfway house with strict monitoring. People can change."',
                    th: '🚪 ให้โอกาส: "ทุกคนควรได้รับโอกาสแก้ตัว ฉันแนะนำให้ไปอยู่บ้านกึ่งวิถีที่มีการเฝ้าระวังเข้มงวด คนเราเปลี่ยนกันได้"',
                    zh: '🚪 给予机会："每个人都值得被救赎。我建议去一个监控严格的中途之家。人是可以改变的。"'
                },
                consequence: {
                    en: '💥 Crime Spree: He robs a bank within 48 hours. The headlines blame the "soft psychologist" for letting him go. Your reputation is stained.',
                    th: '💥 อาชญากรรมซ้ำซ้อน: เขาปล้นธนาคารภายใน 48 ชั่วโมง พาดหัวข่าวโทษ "นักจิตวิทยาใจอ่อน" ที่ปล่อยเขาไป ชื่อเสียงคุณมัวหมอง',
                    zh: '💥 犯罪狂潮：他在48小时内抢劫了一家银行。头条新闻指责"心软的心理医生"放走了他。你的名声受损了。'
                },
                stats: { competence: 20, ethics: 40, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Psychological Trap: "I leave the room for 5 minutes but keep a camera on. Does his expression change when he thinks he is alone?"',
                    th: '🕵️ กับดักทางจิตวิทยา: "ฉันออกจากห้อง 5 นาทีแต่เปิดกล้องทิ้งไว้ สีหน้าของเขาเปลี่ยนไปไหมตอนที่เขาคิดว่าอยู่คนเดียว?"',
                    zh: '🕵️ 心理陷阱："我离开房间5分钟，但开着摄像机。当他认为只有自己一个人时，他的表情会改变吗？"'
                }
            }
        ]
    },
    {
        id: 'psychologist_027',
        text: {
            en: '🏠 The "Sanctuary" Scandal: A prestigious private school is using "seclusion rooms" (solitary confinement) for disruptive children. The school board claims it\'s for safety, but parents are calling it torture.',
            th: '🏠 เรื่องอื้อฉาว "ห้องศักดิ์สิทธิ์": โรงเรียนเอกชนชื่อดังใช้ "ห้องแยกกัก" (ขังเดี่ยว) สำหรับเด็กที่ดื้อรั้น คณะกรรมการโรงเรียนอ้างว่าเพื่อความปลอดภัย แต่ผู้ปกครองเรียกว่าการทรมาน',
            zh: '🏠 "避难所"丑闻：一所享誉盛名的私立学校正对捣蛋的孩子使用"隔离室"（单独禁闭）。校董事会声称这是为了安全，但家长们称之为酷刑。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Whistleblow: "I leak the photos and my clinical report to the press. This is child abuse disguised as education. End it now."',
                    th: '📢 แจ้งเบาะแส: "ฉันทำรูปและรายงานการรักษาหลุดไปถึงสื่อ นี่คือการทารุณเด็กที่ปลอมแปลงมาในชื่อการศึกษา จบเรื่องนี้เดี๋ยวนี้"',
                    zh: '📢 举报揭发："我将照片和我的临床报告泄露给媒体。这是伪装成教育的虐待儿童行为。现在就结束它。" '
                },
                consequence: {
                    en: '🔥 National Outrage: The school is shut down. Lawsuits fly. You are blacklisted from elite schools but hailed as a moral compass.',
                    th: '🔥 ความโกรธแค้นระดับชาติ: โรงเรียนถูกสั่งปิด มีการฟ้องร้องวุ่นวาย คุณถูกแบล็กลิสต์จากโรงเรียนระดับท็อป แต่ได้รับการยกย่องว่าเป็นเข็มทิศทางศีลธรรม',
                    zh: '🔥 全国公愤：学校被关闭。诉讼接踵而至。你被列入精英学校的黑名单，但被誉为道德指南针。'
                },
                stats: { competence: 40, ethics: 80, leadership: 60, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '⚒️ Reform from Within: "I design a de-escalation training program for the staff. We replace the rooms with sensory gardens. Modernize them."',
                    th: '⚒️ ปฏิรูปจากข้างใน: "ฉันออกแบบโปรแกรมเทรนนิ่งฝึกการลดระดับความรุนแรงให้พนักงาน เราเปลี่ยนห้องแยกกักเป็นสวนบำบัดประสาทสัมผัส ทำให้ทันสมัยขึ้น"',
                    zh: '⚒️ 内部改革："我为员工设计了一个缓解紧张局势的培训计划。我们用感官花园取代了那些房间。使其现代化。"'
                },
                consequence: {
                    en: '📈 Positive Shift: Behavior incidents drop by 70%. You showed that empathy is more effective than locks. The school becomes a model for reform.',
                    th: '📈 การเปลี่ยนแปลงเชิงบวก: เหตุการณ์พฤติกรรมก้าวร้าวลดลง 70% คุณพิสูจน์ได้ว่าความเข้าอกเข้าใจมีประสิทธิภาพมากกว่าการขัง โรงเรียนกลายเป็นต้นแบบการปฏิรูป',
                    zh: '📈 积极的转变：行为事件下降了70%。你证明了同理心比锁更有效。这所学校成为了改革的典范。'
                },
                stats: { competence: 60, ethics: 60, leadership: 80, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '🤷 Policy Defense: "I write a paper justifying the seclusion for safety. Specialized schools need specialized tools. Don\'t judge from the outside."',
                    th: '🤷 ปกป้องนโยบาย: "ฉันเขียนบทความอธิบายความจำเป็นของการแยกกักเพื่อความปลอดภัย โรงเรียนเฉพาะทางต้องใช้เครื่องมือเฉพาะทาง อย่าตัดสินจากภายนอก"',
                    zh: '🤷 政策辩护："我写了一篇论文，为出于安全考虑的隔离辩护。专门学校需要专门的工具。不要从外部做评判。"'
                },
                consequence: {
                    en: '📉 Professional Shame: A video of a child crying in the room goes viral. Your report is used to mock the entire field of psychology.',
                    th: '📉 ความอับอายทางวิชาชีพ: คลิปเด็กคนหนึ่งร้องไห้ในห้องกลายเป็นไวรัล รายงานของคุณถูกนำไปใช้ล้อเลียนแวดวงจิตวิทยาทั้งหมด',
                    zh: '📉 职业羞辱：一段孩子在房间里哭泣的视频在该网上疯传。你的报告被用来嘲弄整个心理学领域。'
                },
                stats: { competence: 20, ethics: 10, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🎭 Sensory Simulation: "I make the Principal spend 2 hours in the seclusion room himself. Experience the \'safety\' firsthand."',
                    th: '🎭 จำลองความรู้สึก: "ฉันทำให้ครูใหญ่ต้องเข้าไปอยู่ในห้องแยกกักนั้นเอง 2 ชั่วโมง ให้เขาสัมผัสกับ \'ความปลอดภัย\' ด้วยตัวเอง"',
                    zh: '🎭 感官模拟："我让校长自己在隔离室里待上2个小时。亲身体验一下这种\'安全\'。"'
                }
            }
        ]
    },
    {
        id: 'psychologist_028',
        text: {
            en: '🎤 The Virtual Celebrity: A world-famous "VTuber" (virtual avatar influencer) is having a breakdown. They are addicted to the praise of millions of fans but terrified of being unmasked. They don\'t feel like a person anymore.',
            th: '🎤 เซเลบเสมือนจริง: "VTuber" ชื่อดังระดับโลก (อินฟลูเอนเซอร์ในร่างอวตารเสมือนจริง) กำลังมีภาวะวิกฤตทางจิตใจ พวกเขาติดลมบนกับคำชมจากแฟนคลับเป็นล้านๆ แต่หวาดกลัวการถูกกระชากหน้ากาก พวกเขาไม่รู้สึกว่าเป็นคนอีกต่อไป',
            zh: '🎤 虚拟名人：一位世界闻名的"VTuber"（虚拟形象博主）心理正处于崩溃边缘。他们沉溺于数百万粉丝的赞美，但又害怕被揭露真实身份。他们不再觉得自己是一个人了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎭 Identity Integration: "We work on bringing parts of your real personality into the avatar. Blur the lines so you don\'t have to hide so much."',
                    th: '🎭 การบูรณาการอัตลักษณ์: "เราพยายามดึงส่วนหนึ่งของบุคลิกจริงของคุณเข้าไปในอวตาร ทำให้เส้นแบ่งพร่าเลือนลงคุณจะได้ไม่ต้องซ่อนตัวมากเกินไป"',
                    zh: '🎭 身份整合："我们致力于将你真实性格的一部分带入到虚拟形象中。模糊界限，这样你就不必隐藏得那么辛苦了。" '
                },
                consequence: {
                    en: '📈 Authentic Brand: The fans love the "vulnerable" new direction. The patient feels like they can breathe again. Successful integration.',
                    th: '📈 แบรนด์ที่แท้จริง: แฟนๆ รักทิศทางใหม่ที่ "เปราะบาง" กว่าเดิม คนไข้รู้สึกเหมือนกลับมาหายใจได้อีกครั้ง การรวมร่างที่ประสบความสำเร็จ',
                    zh: '📈 真实品牌：粉丝们喜欢这种"脆弱"的新方向。病人觉得他们可以再次呼吸了。成功的整合。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🔌 Forced Detox: "You need to kill the character. Delete the channel, go offline for a year, and find yourself in the real world."',
                    th: '🔌 บังคับดีท็อกซ์: "คุณต้องฆ่าตัวละครนี้ทิ้ง ลบช่อง ออฟไลน์เป็นเวลาหนึ่งปี และออกไปค้นหาตัวเองในโลกความเป็นจริง"',
                    zh: '🔌 强制脱瘾："你需要终结这个角色。删除频道，下线一年，在现实世界中找回自我。" '
                },
                consequence: {
                    en: '💀 Financial Ruin: They lose their income and purpose. Without the "mask," they are just a lonely person with no skills. They slide into deep depression.',
                    th: '💀 ความพินาศทางการเงิน: พวกเขาเสียรายได้และเป้าหมายในชีวิต เมื่อไม่มี "หน้ากาก" พวกเขาก็แค่คนเหงาที่ไม่มีทักษะอะไรเลย พวกเขาจมดิ่งสู่ภาวะซึมเศร้าขั้นรุนแรง',
                    zh: '💀 经济崩溃：他们失去了收入和目标。没有了"面具"，他们只是一个没有技能的孤独者。他们陷入了深深的抑郁。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Management Mediator: "I talk to the talent agency. They are overworking you. We need to set literal boundaries on your digital hours."',
                    th: '🕵️ พ่อสื่อเจรจาผู้จัดการ: "ฉันคุยกับเอเจนซี่นักล่าฝัน พวกเขาใช้งานคุณหนักเกินไป เราต้องกำหนดขอบเขตชั่วโมงการทำงานดิจิทัลอย่างเคร่งครัด"',
                    zh: '协助中介：协助人："我找人才中介谈谈。他们的工作量太大了。我们需要为你的数字工作时间设定明确的界限。"'
                },
                consequence: {
                    en: '📈 Better Balance: The agency backs off. The patient regains some life outside the screen. You saved a career from burnout.',
                    th: '📈 สมดุลที่ดีขึ้น: เอเจนซี่ยอมถอย คนไข้ได้ชีวิตนอกจอกลับมาบ้าง คุณช่วยรักษาอาชีพจากภาวะหมดไฟ',
                    zh: '📈 更好的平衡：机构做出了让步。病人在屏幕之外找回了一些生活。你把一个职业从倦怠中解救了出来。'
                },
                stats: { competence: 50, ethics: 50, leadership: 70, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🎭 Double Down: "Use the breakdown as content. The \'Mental Health Arc\' will get huge views. Monetize the pain."',
                    th: '🎭 รุกหนักกว่าเดิม: "ใช้ภาวะพังทลายเป็นคอนเทนต์ \'ภาคดูแลสุขภาพจิต\' จะเรียกยอดวิวถล่มทลาย ทำเงินจากความเจ็บปวดซะเลย"',
                    zh: '🎭 变本加厉："把崩溃作为内容。\'心理健康篇\'会获得巨大的点击量。将痛苦货币化。"'
                }
            }
        ]
    },
    {
        id: 'psychologist_026',
        text: {
            en: '🚔 The Parole Evaluator: You are evaluating a serial bank robber who says he has found God and wants to go straight. The prison warden wants him out because of overcrowding. You sense he is just a very good actor.',
            th: '🚔 ผู้ประเมินทัณฑ์บน: คุณกำลังประเมินโจรปล้นธนาคารต่อเนื่องที่บอกว่าเขาพบพระเจ้าแล้วและต้องการเป็นคนดี พัศดีคุกต้องการให้เขาออกไปเพราะคุกแออัด คุณรู้สึกว่าเขาแค่เป็นนักแสดงที่เก่งมากคนหนึ่ง',
            zh: '🚔 假释评估员：你正在评估一名连环银行抢劫犯，他说他已经找到了上帝，并想改邪归正。由于监狱人满为患，典狱长想让他出狱。你觉得他只是个演技高超的人。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Denial of Parole: "I write a scathing report. \'Patient shows high levels of manipulative charm. Risk of recidivism remains critical.\'"',
                    th: '⚖️ ปฏิเสธทัณฑ์บน: "ฉันเขียนรายงานที่รุนแรง \'คนไข้แสดงท่าทีประจบสอพลอระดับสูง ความเสี่ยงที่จะทำผิดซ้ำยังอยู่ในระดับวิกฤต\'"',
                    zh: '⚖️ 拒绝假释："我写了一份严厉的报告。\'病人表现出高水平的操纵性魅力。累犯风险仍然至关重要。\'" '
                },
                consequence: {
                    en: '⛓️ Institutionalized: He stays in prison. He screams threats at you as he is led away. Your intuition was right, but you are now on his "list."',
                    th: '⛓️ อยู่ในสถานกักกันต่อ: เขาต้องอยู่ในคุกต่อ เขาตะโกนขู่คุณขณะถูกพาตัวไป สัญชาตญาณคุณถูกต้อง แต่ตอนนี้คุณอยู่ใน "บัญชีดำ" ของเขาแล้ว',
                    zh: '⛓️ 系统化管理：他留在监狱里。当他被带走时，他对着你尖叫威胁。你的直觉是对的，但你现在在他的"名单"上了。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🙏 Faith-Based Test: "I bring in a local priest to interview him. Let\'s see if his religious knowledge holds up under spiritual scrutiny."',
                    th: '🙏 บททดสอบแห่งศรัทธา: "ฉันนัดพาบาทหลวงในพื้นที่มาสัมภาษณ์เขา มาดูกันว่าความรู้ทางศาสนาของเขาจะทนต่อการตรวจสอบทางจิตวิญญาณได้ไหม"',
                    zh: '🙏 基于信仰的测试："我请当地的一位牧师来面试他。让我们看看他的宗教知识是否经得起精神上的审查。"'
                },
                consequence: {
                    en: '🎭 Blown Cover: The priest finds him inconsistent. The robber admits to faking it. You saved the community from a relapse.',
                    th: '🎭 ความแตก: บาทหลวงพบว่าเขาพูดจาไม่คงเส้นคงวา โจรยอมรับว่าแกล้งทำ คุณช่วยชุมชนจากการที่เขาจะกลับไปทำผิดซ้ำ',
                    zh: '🎭 露馅了：牧师发现他的言行不一。抢劫犯承认是在演戏。你把社区从一次累犯中拯救了出来。'
                },
                stats: { competence: 60, ethics: 50, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🚪 Give a Chance: "Everyone deserves redemption. I recommend a halfway house with strict monitoring. People can change."',
                    th: '🚪 ให้โอกาส: "ทุกคนควรได้รับโอกาสแก้ตัว ฉันแนะนำให้ไปอยู่บ้านกึ่งวิถีที่มีการเฝ้าระวังเข้มงวด คนเราเปลี่ยนกันได้"',
                    zh: '🚪 给予机会："每个人都值得被救赎。我建议去一个监控严格的中途之家。人是可以改变的。"'
                },
                consequence: {
                    en: '💥 Crime Spree: He robs a bank within 48 hours. The headlines blame the "soft psychologist" for letting him go. Your reputation is stained.',
                    th: '💥 อาชญากรรมซ้ำซ้อน: เขาปล้นธนาคารภายใน 48 ชั่วโมง พาดหัวข่าวโทษ "นักจิตวิทยาใจอ่อน" ที่ปล่อยเขาไป ชื่อเสียงคุณมัวหมอง',
                    zh: '💥 犯罪狂潮：他在48小时内抢劫了一家银行。头条新闻指责"心软的心理医生"放走了他。你的名声受损了。'
                },
                stats: { competence: 20, ethics: 40, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Psychological Trap: "I leave the room for 5 minutes but keep a camera on. Does his expression change when he thinks he is alone?"',
                    th: '🕵️ กับดักทางจิตวิทยา: "ฉันออกจากห้อง 5 นาทีแต่เปิดกล้องทิ้งไว้ สีหน้าของเขาเปลี่ยนไปไหมตอนที่เขาคิดว่าอยู่คนเดียว?"',
                    zh: '🕵️ 心理陷阱："我离开房间5分钟，但开着摄像机。当他认为只有自己一个人时，他的表情会改变吗？"'
                }
            }
        ]
    },
    {
        id: 'psychologist_027',
        text: {
            en: '🏠 The "Sanctuary" Scandal: A prestigious private school is using "seclusion rooms" (solitary confinement) for disruptive children. The school board claims it\'s for safety, but parents are calling it torture.',
            th: '🏠 เรื่องอื้อฉาว "ห้องศักดิ์สิทธิ์": โรงเรียนเอกชนชื่อดังใช้ "ห้องแยกกัก" (ขังเดี่ยว) สำหรับเด็กที่ดื้อรั้น คณะกรรมการโรงเรียนอ้างว่าเพื่อความปลอดภัย แต่ผู้ปกครองเรียกว่าการทรมาน',
            zh: '🏠 "避难所"丑闻：一所享誉盛名的私立学校正对捣蛋的孩子使用"隔离室"（单独禁闭）。校董事会声称这是为了安全，但家长们称之为酷刑。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Whistleblow: "I leak the photos and my clinical report to the press. This is child abuse disguised as education. End it now."',
                    th: '📢 แจ้งเบาะแส: "ฉันทำรูปและรายงานการรักษาหลุดไปถึงสื่อ นี่คือการทารุณเด็กที่ปลอมแปลงมาในชื่อการศึกษา จบเรื่องนี้เดี๋ยวนี้"',
                    zh: '📢 举报揭发："我将照片和我的临床报告泄露给媒体。这是伪装成教育的虐待儿童行为。现在就结束它。" '
                },
                consequence: {
                    en: '🔥 National Outrage: The school is shut down. Lawsuits fly. You are blacklisted from elite schools but hailed as a moral compass.',
                    th: '🔥 ความโกรธแค้นระดับชาติ: โรงเรียนถูกสั่งปิด มีการฟ้องร้องวุ่นวาย คุณถูกแบล็กลิสต์จากโรงเรียนระดับท็อป แต่ได้รับการยกย่องว่าเป็นเข็มทิศทางศีลธรรม',
                    zh: '🔥 全国公愤：学校被关闭。诉讼接踵而至。你被列入精英学校的黑名单，但被誉为道德指南针。'
                },
                stats: { competence: 40, ethics: 80, leadership: 60, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '⚒️ Reform from Within: "I design a de-escalation training program for the staff. We replace the rooms with sensory gardens. Modernize them."',
                    th: '⚒️ ปฏิรูปจากข้างใน: "ฉันออกแบบโปรแกรมเทรนนิ่งฝึกการลดระดับความรุนแรงให้พนักงาน เราเปลี่ยนห้องแยกกักเป็นสวนบำบัดประสาทสัมผัส ทำให้ทันสมัยขึ้น"',
                    zh: '⚒️ 内部改革："我为员工设计了一个缓解紧张局势的培训计划。我们用感官花园取代了那些房间。使其现代化。"'
                },
                consequence: {
                    en: '📈 Positive Shift: Behavior incidents drop by 70%. You showed that empathy is more effective than locks. The school becomes a model for reform.',
                    th: '📈 การเปลี่ยนแปลงเชิงบวก: เหตุการณ์พฤติกรรมก้าวร้าวลดลง 70% คุณพิสูจน์ได้ว่าความเข้าอกเข้าใจมีประสิทธิภาพมากกว่าการขัง โรงเรียนกลายเป็นต้นแบบการปฏิรูป',
                    zh: '📈 积极的转变：行为事件下降了70%。你证明了同理心比锁更有效。这所学校成为了改革的典范。'
                },
                stats: { competence: 60, ethics: 60, leadership: 80, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '🤷 Policy Defense: "I write a paper justifying the seclusion for safety. Specialized schools need specialized tools. Don\'t judge from the outside."',
                    th: '🤷 ปกป้องนโยบาย: "ฉันเขียนบทความอธิบายความจำเป็นของการแยกกักเพื่อความปลอดภัย โรงเรียนเฉพาะทางต้องใช้เครื่องมือเฉพาะทาง อย่าตัดสินจากภายนอก"',
                    zh: '🤷 政策辩护："我写了一篇论文，为出于安全考虑的隔离辩护。专门学校需要专门的工具。不要从外部做评判。"'
                },
                consequence: {
                    en: '📉 Professional Shame: A video of a child crying in the room goes viral. Your report is used to mock the entire field of psychology.',
                    th: '📉 ความอับอายทางวิชาชีพ: คลิปเด็กคนหนึ่งร้องไห้ในห้องกลายเป็นไวรัล รายงานของคุณถูกนำไปใช้ล้อเลียนแวดวงจิตวิทยาทั้งหมด',
                    zh: '📉 职业羞辱：一段孩子在房间里哭泣的视频在该网上疯传。你的报告被用来嘲弄整个心理学领域。'
                },
                stats: { competence: 20, ethics: 10, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🎭 Sensory Simulation: "I make the Principal spend 2 hours in the seclusion room himself. Experience the \'safety\' firsthand."',
                    th: '🎭 จำลองความรู้สึก: "ฉันทำให้ครูใหญ่ต้องเข้าไปอยู่ในห้องแยกกักนั้นเอง 2 ชั่วโมง ให้เขาสัมผัสกับ \'ความปลอดภัย\' ด้วยตัวเอง"',
                    zh: '🎭 感官模拟："我让校长自己在隔离室里待上2个小时。亲身体验一下这种\'安全\'。"'
                }
            }
        ]
    },
    {
        id: 'psychologist_028',
        text: {
            en: '🎤 The Virtual Celebrity: A world-famous "VTuber" (virtual avatar influencer) is having a breakdown. They are addicted to the praise of millions of fans but terrified of being unmasked. They don\'t feel like a person anymore.',
            th: '🎤 เซเลบเสมือนจริง: "VTuber" ชื่อดังระดับโลก (อินฟลูเอนเซอร์ในร่างอวตารเสมือนจริง) กำลังมีภาวะวิกฤตทางจิตใจ พวกเขาติดลมบนกับคำชมจากแฟนคลับเป็นล้านๆ แต่หวาดกลัวการถูกกระชากหน้ากาก พวกเขาไม่รู้สึกว่าเป็นคนอีกต่อไป',
            zh: '🎤 虚拟名人：一位世界闻名的"VTuber"（虚拟形象博主）心理正处于崩溃边缘。他们沉溺于数百万粉丝的赞美，但又害怕被揭露真实身份。他们不再觉得自己是一个人了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎭 Identity Integration: "We work on bringing parts of your real personality into the avatar. Blur the lines so you don\'t have to hide so much."',
                    th: '🎭 การบูรณาการอัตลักษณ์: "เราพยายามดึงส่วนหนึ่งของบุคลิกจริงของคุณเข้าไปในอวตาร ทำให้เส้นแบ่งพร่าเลือนลงคุณจะได้ไม่ต้องซ่อนตัวมากเกินไป"',
                    zh: '🎭 身份整合："我们致力于将你真实性格的一部分带入到虚拟形象中。模糊界限，这样你就不必隐藏得那么辛苦了。" '
                },
                consequence: {
                    en: '📈 Authentic Brand: The fans love the "vulnerable" new direction. The patient feels like they can breathe again. Successful integration.',
                    th: '📈 แบรนด์ที่แท้จริง: แฟนๆ รักทิศทางใหม่ที่ "เปราะบาง" กว่าเดิม คนไข้รู้สึกเหมือนกลับมาหายใจได้อีกครั้ง การรวมร่างที่ประสบความสำเร็จ',
                    zh: '📈 真实品牌：粉丝们喜欢这种"脆弱"的新方向。病人觉得他们可以再次呼吸了。成功的整合。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🔌 Forced Detox: "You need to kill the character. Delete the channel, go offline for a year, and find yourself in the real world."',
                    th: '🔌 บังคับดีท็อกซ์: "คุณต้องฆ่าตัวละครนี้ทิ้ง ลบช่อง ออฟไลน์เป็นเวลาหนึ่งปี และออกไปค้นหาตัวเองในโลกความเป็นจริง"',
                    zh: '🔌 强制脱瘾："你需要终结这个角色。删除频道，下线一年，在现实世界中找回自我。" '
                },
                consequence: {
                    en: '💀 Financial Ruin: They lose their income and purpose. Without the "mask," they are just a lonely person with no skills. They slide into deep depression.',
                    th: '💀 ความพินาศทางการเงิน: พวกเขาเสียรายได้และเป้าหมายในชีวิต เมื่อไม่มี "หน้ากาก" พวกเขาก็แค่คนเหงาที่ไม่มีทักษะอะไรเลย พวกเขาจมดิ่งสู่ภาวะซึมเศร้าขั้นรุนแรง',
                    zh: '💀 经济崩溃：他们失去了收入和目标。没有了"面具"，他们只是一个没有技能的孤独者。他们陷入了深深的抑郁。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Management Mediator: "I talk to the talent agency. They are overworking you. We need to set literal boundaries on your digital hours."',
                    th: '🕵️ พ่อสื่อเจรจาผู้จัดการ: "ฉันคุยกับเอเจนซี่นักล่าฝัน พวกเขาใช้งานคุณหนักเกินไป เราต้องกำหนดขอบเขตชั่วโมงการทำงานดิจิทัลอย่างเคร่งครัด"',
                    zh: '协助中介：协助人："我找人才中介谈谈。他们的工作量太大了。我们需要为你的数字工作时间设定明确的界限。"'
                },
                consequence: {
                    en: '📈 Better Balance: The agency backs off. The patient regains some life outside the screen. You saved a career from burnout.',
                    th: '📈 สมดุลที่ดีขึ้น: เอเจนซี่ยอมถอย คนไข้ได้ชีวิตนอกจอกลับมาบ้าง คุณช่วยรักษาอาชีพจากภาวะหมดไฟ',
                    zh: '📈 更好的平衡：机构做出了让步。病人在屏幕之外找回了一些生活。你把一个职业从倦怠中解救了出来。'
                },
                stats: { competence: 50, ethics: 50, leadership: 70, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🎭 Double Down: "Use the breakdown as content. The \'Mental Health Arc\' will get huge views. Monetize the pain."',
                    th: '🎭 รุกหนักกว่าเดิม: "ใช้ภาวะพังทลายเป็นคอนเทนต์ \'ภาคดูแลสุขภาพจิต\' จะเรียกยอดวิวถล่มทลาย ทำเงินจากความเจ็นปวดซะเลย"',
                    zh: '🎭 变本加厉："把崩溃作为内容。\'心理健康篇\'会获得巨大的点击量。将痛苦货币化。"'
                }
            }
        ]
    },
    {
        id: 'psychologist_029',
        text: {
            en: '🧠 The Amnesiac: A man arrives at your clinic with no memory of the last 10 years. He has a wife and two children who are strangers to him. He is terrified of the "life" he is supposed to lead and wants to run away.',
            th: '🧠 ผู้สูญเสียความทรงจำ: ชายคนหนึ่งมาที่คลินิกของคุณโดยไม่มีความทรงจำในช่วง 10 ปีที่ผ่านมา เขามีภรรยาและลูกสองคนที่กลายเป็นคนแปลกหน้าสำหรับเขา เขากลัว "ชีวิต" ที่เขาควรจะเป็นและต้องการหนีไป',
            zh: '🧠 失忆者：一个男人来到你的诊所，对过去10年完全没有记忆。他有一个妻子和两个孩子，但对他来说都是陌生人。他对他理应过上的"生活"感到恐惧，并想逃跑。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🖼️ Memory Triggers: "We fill your office with photos, familiar scents, and music from those 10 years. We try to jumpstart the brain through sensory overload."',
                    th: '🖼️ ตัวกระตุ้นความจำ: "เราเติมห้องทำงานของคุณด้วยรูปถ่าย กลิ่นที่คุ้นเคย และเพลงจากช่วง 10 ปีนั้น เราพยายามกระตุ้นสมองผ่านการรับรู้ประสาทสัมผัสที่เข้มข้น"',
                    zh: '🖼️ 记忆触发器："我们在你的办公室里摆满照片、熟悉的味道和这10年里的音乐。我们试着通过感官过载来重启大脑。" '
                },
                consequence: {
                    en: '📈 Flashbacks: A specific song triggers a memory of his daughter\'s birth. He cries. The wall is cracking. Progress is slow but real.',
                    th: '📈 ภาพความหลัง: เพลงบางเพลงกระตุ้นความจำเรื่องการเกิดของลูกสาว เขาเริ่มร้องไห้ กำแพงในใจเริ่มพังทลาย ความก้าวหน้าช้าแต่มีอยู่จริง',
                    zh: '📈 闪回：一首特定的歌触发了他对女儿出生的记忆。他哭了。隔阂正在打破。虽然进展缓慢，但却是真实的。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🆕 Accept the New Self: "The old you is gone. Let\'s focus on who you are Radically NOW. If you don\'t love this family, you shouldn\'t be forced to stay."',
                    th: '🆕 ยอมรับตัวตนใหม่: "ตัวตนเก่าของคุณหายไปแล้ว เรามาโฟกัสที่ว่าคุณเป็นใครในตอนนี้จริงๆ ถ้าคุณไม่รักครอบครัวนี้ คุณก็ไม่ควรถูกบังคับให้อยู่"',
                    zh: '🆕 接受新的自我："过去的你已经不复存在了。让我们专注于你现在究竟是谁。如果你不爱这个家庭，你就不应该被强迫留下。"'
                },
                consequence: {
                    en: '💔 Broken Family: He leaves his wife and kids to start over. He is happy, but you are blamed for "destroying a family." A high ethical cost.',
                    th: '💔 ครอบครัวแตกแยก: เขาไปจากภรรยาและลูกเพื่อเริ่มต้นใหม่ เขามีความสุข แต่คุณถูกตราหน้าว่าเป็นต้นเหตุของ "การทำลายครอบครัว" ต้นทุนทางจริยธรรมที่สูงลิ่ว',
                    zh: '💔 破碎的家庭：他离开了妻子和孩子，重新开始。他很快乐，但你被指责为"毁掉了一个家庭"。付出了高昂的伦理代价。'
                },
                stats: { competence: 40, ethics: 20, leadership: 10, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Family Therapy: "I bring the wife in. We don\'t focus on memories, we focus on building a NEW relationship from scratch. Dating his own wife."',
                    th: '🤝 ครอบครัวบำบัด: "ฉันพาภรรยาเข้ามา เราไม่โฟกัสที่ความทรงจำ แต่โฟกัสที่การสร้างความสัมพันธ์ใหม่จากศูนย์เหมือนการเดทกับภรรยาตัวเอง"',
                    zh: '🤝 家庭治疗："我请他的妻子进来。我们不专注于记忆，我们专注于从零开始建立一种新的关系。就像和自己的妻子约会。"'
                },
                consequence: {
                    en: '❤️ New Foundation: They fall in love again, differently. Even without the memories, the bond is restored. You saved the family through adaptation.',
                    th: '❤️ รากฐานใหม่: พวกเขาตกหลุมรักกันอีกครั้งในแบบที่ต่างออกไป แม้ไม่มีความทรงจำ แต่สายสัมพันธ์ก็กลับคืนมา คุณช่วยครอบครัวไว้ได้ผ่านการปรับตัว',
                    zh: '❤️ 新的开端：他们再次坠入爱河，以不同的方式。即使没有记忆，纽带也恢复了。你通过适应挽救了这个家庭。'
                },
                stats: { competence: 60, ethics: 70, leadership: 50, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Investigative Search: "We look for a trauma that caused the amnesia. Was this a choice? Did you WANT to forget?"',
                    th: '🕵️ การค้นหาเชิงลืบ: "เรามองหาบาดแผลทางใจที่ทำให้เกิดอาการสูญเสียความทรงจำ นี่เป็นการเลือกหรือเปล่า? คุณ \'ต้องการ\' จะลืมใช่ไหม?"',
                    zh: '🕵️ 调查性搜索："我们寻找导致失忆的创伤。这是你自己的选择吗？是你\'想要\'忘记吗？"'
                }
            }
        ]
    },
    {
        id: 'psychologist_030',
        text: {
            en: '🏔️ The Cult Member: A woman has been rescued from a "wellness retreat" that turned into a personality cult. She is hyper-obedient and asks you for permission to eat or use the bathroom. Her sense of self is gone.',
            th: '🏔️ สมาชิกลัทธิ: หญิงคนหนึ่งได้รับความช่วยเหลือจาก "รีสอร์ทสุขภาพ" ที่กลายเป็นลัทธิบูชาตัวบุคคล เธอเชื่อฟังคำสั่งอย่างรุนแรงและขออนุญาตจากคุณแม้แต่จะกินข้าวหรือเข้าห้องน้ำ ตัวตนของเธอสูญสิ้นไปแล้ว',
            zh: '🏔️ 邪教成员：一名妇女从一个变成了人格崇拜的"健康疗养院"中被解救出来。她表现出过度顺从，甚至向你请求吃饭或如厕的许可。她的自我意识已经消失了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔓 Deprogramming: "I use gentle confrontation to show her the leader\'s mistakes. Break the idol. Rebuild her critical thinking skills."',
                    th: '🔓 การลบล้างโปรแกรม: "ฉันใช้การเผชิญหน้าอย่างอ่อนโยนเพื่อให้เธอเห็นความผิดพลาดของผู้นำลัทธิ ทำลายรูปเคารพ สร้างทักษะการคิดวิเคราะห์ของเธอใหม่"',
                    zh: '🔓 破除洗脑："我通过温和的对质向她展示领导者的错误。打破偶像。重建她的批判性思维能力。" '
                },
                consequence: {
                    en: '📈 Recovery: It starts slow. One day, she disagrees with you about something. That disagreement is the greatest victory of the year.',
                    th: '📈 การฟื้นฟู: เริ่มต้นอย่างช้าๆ วันหนึ่งเธอโต้แย้งคุณในบางเรื่อง การโต้แย้งนั้นคือชัยชนะที่ยิ่งใหญ่ที่สุดของปี',
                    zh: '📈 康复：开始很缓慢。有一天，她在某件事上不同意你的看法。那次不同意是今年最大的胜利。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🫂 Group Support: "I put her in a group with other ex-cult members. Let them be the mirrors for her real self."',
                    th: '🫂 กลุ่มสนับสนุน: "ฉันให้เธอเข้ากลุ่มร่วมกับอดีตสมาชิกลัทธิคนอื่นๆ ให้พวกเขาเป็นกระจกสะท้อนตัวตนที่แท้จริงให้เธอ"',
                    zh: '🫂 团体支持："我把她安排进一个由其他前邪教成员组成的团体。让他们成为她真实自我的镜子。"'
                },
                consequence: {
                    en: '📈 Shared Strength: She feels she isn\'t alone in her shame. The collective healing accelerates her progress. She starts to laugh again.',
                    th: '📈 พลังร่วมกัน: เธอมโนได้ว่าไม่ได้เผชิญความอับอายเพียงลำพัง การรักษาส่วมกันช่วยเร่งความก้าวหน้า เธอเริ่มกลับมาหัวเราะได้อีกครั้ง',
                    zh: '📈 共同的力量：她觉得在羞耻感中她并不孤单。集体的治愈加速了她的进步。她开始再次大笑。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤷 Protective Care: "She is too fragile. I become the new authority figure for her. I tell her what to do so she feels safe."',
                    th: '🤷 การดูแลปกป้อง: "เธอเปราะบางเกินไป ฉันกลายเป็นผู้มีอำนาจคนใหม่สำหรับเธอ ฉันบอกเธอว่าต้องทำอะไรเธอจะได้รู้สึกปลอดภัย"',
                    zh: '🤷 保护性照料："她太脆弱了。我成为了她新的权威人物。巧告诉她该做什么，这样她会感到安全。"'
                },
                consequence: {
                    en: '💀 Replacement Leader: You didn\'t cure the cult mindset; you just changed the leader. If you ever leave, she will find another cult.',
                    th: '💀 ผู้นำตัวตายตัวแทน: คุณไม่ได้รักษาความคิดแบบลัทธิ คุณแค่เปลี่ยนคนนำ ถ้าคุณจากไป เธอจะไปหาลัทธิอื่นอีก',
                    zh: '💀 替代领导者：你没有治愈邪教心态；你只是更换了领导者。如果你离开了，她会找到另一个邪教。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Cognitive Map: "We map out her values from BEFORE the cult. Who was she at age 10? We rebuild from the original blueprint."',
                    th: '🕵️ แผนที่พุทธิปัญญา: "เราถอดแผนที่ค่านิยมของเธอจากช่วง \'ก่อนหน้า\' เข้าลัทธิ ตอนอายุ 10 ขวบเธอเป็นใคร? เราสร้างใหม่จากพิมพ์เขียวเดิม"',
                    zh: '🕵️ 认知地图："我们勾勒出她\'加入邪教之前\'的价值观。她10岁时是谁？我们从原始蓝图开始重建。"'
                }
            }
        ]
    },
    {
        id: 'psychologist_031',
        text: {
            en: '🎮 The Gaming Addict Parent: A father spends 16 hours a day gaming while his kids are neglected. His wife threatens divorce. He insists gaming is his "career" as a streamer, but he makes $200/month.',
            th: '🎮 พ่อติดเกม: พ่อคนหนึ่งเล่นเกม 16 ชั่วโมงต่อวันขณะที่ลูกๆ ถูกทอดทิ้ง ภรรยาขู่จะหย่า เขายืนยันว่าเกมคือ "อาชีพ" ของเขาในฐานะสตรีมเมอร์ แต่เขาหาได้แค่ 200 ดอลลาร์ต่อเดือน',
            zh: '🎮 游戏成瘾的父亲：一位父亲每天花16小时玩游戏，而孩子们被忽视。他的妻子威胁要离婚。他坚称游戏是他作为主播的"职业"，但他每月只赚200美元。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💼 Career Reality Check: "Show me your analytics. $200/month is a hobby, not a career. You need a job while you build this."',
                    th: '💼 ตรวจสอบอาชีพจริง: "แสดงยอดวิวให้ดู 200 ดอลลาร์ต่อเดือนเป็นงานอดิเรก ไม่ใช่อาชีพ คุณต้องหางานทำไปควบคู่"',
                    zh: '💼 职业现实检查："给我看你的分析数据。每月200美元是爱好，不是职业。你需要一份工作，同时发展这个。"'
                },
                consequence: {
                    en: '📈 Grudging Progress: He gets a part-time job and limits gaming to 4 hours. The marriage stabilizes. He resents you but his family is saved.',
                    th: '📈 ความคืบหน้าอย่างไม่เต็มใจ: เขาหางานพาร์ทไทม์และจำกัดการเล่นเกมเหลือ 4 ชั่วโมง การแต่งงานมั่นคงขึ้น เขาไม่พอใจคุณแต่ครอบครัวรอด',
                    zh: '📈 勉强进展：他找了一份兼职，将游戏时间限制在4小时。婚姻稳定了。他恨你，但他的家庭得救了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🎯 Strategic Coaching: "Let me help optimize your stream. Better equipment, schedule, branding. Make it actually viable or quit."',
                    th: '🎯 การโค้ชเชิงกลยุทธ์: "ให้ฉันช่วยปรับปรุงสตรีม อุปกรณ์ดีขึ้น ตารางเวลา แบรนด์ดิ้ง ทำให้มันเป็นไปได้จริงหรือเลิก"',
                    zh: '🎯 策略指导："让我帮你优化直播。更好的设备、时间表、品牌。要么让它真正可行，要么放弃。"'
                },
                consequence: {
                    en: '🚀 Surprise Success: With structure, he grows to 5,000 viewers and $3K/month in 6 months. You turned a delusion into reality.',
                    th: '🚀 ความสำเร็จที่น่าประหลาดใจ: ด้วยโครงสร้าง เขาโตถึง 5,000 ผู้ชมและ 3,000 ดอลลาร์ต่อเดือนใน 6 เดือน คุณเปลี่ยนความฝันให้เป็นความจริง',
                    zh: '🚀 意外成功：通过结构化，他在6个月内增长到5000名观众和每月3000美元。你把妄想变成了现实。'
                },
                stats: { competence: 60, ethics: 30, leadership: 50, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '👨‍👩‍👧 Family Intervention: "I bring the wife and kids in. They tell him how abandoned they feel. Reality hits hard."',
                    th: '👨‍👩‍👧 การแทรกแซงครอบครัว: "ฉันพาภรรยาและลูกๆ เข้ามา พวกเขาบอกว่ารู้สึกถูกทอดทิ้งแค่ไหน ความจริงตีเข้าอย่างหนัก"',
                    zh: '👨‍👩‍👧 家庭干预："我把妻子和孩子都叫进来。他们告诉他他们感到多么被遗弃。现实重重打击。"'
                },
                consequence: {
                    en: '💔 Painful Wake-Up: He cries seeing his daughter say "I don\'t know my daddy." He quits gaming cold turkey. Healing begins.',
                    th: '💔 การตื่นที่เจ็บปวด: เขาร้องไห้เมื่อได้ยินลูกสาวพูดว่า "หนูไม่รู้จักพ่อ" เขาเลิกเกมทันที การเยียวยาเริ่มต้น',
                    zh: '💔 痛苦的觉醒：他哭了，看到女儿说"我不认识爸爸"。他彻底戒掉了游戏。治愈开始了。'
                },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Validate the Dream: "Follow your passion. Your wife doesn\'t understand the grind. Real streamers took years to make it."',
                    th: '🤷 ยืนยันความฝัน: "ทำตามความฝัน ภรรยาคุณไม่เข้าใจการทำงานหนัก สตรีมเมอร์ที่ประสบความสำเร็จใช้เวลาหลายปี"',
                    zh: '🤷 验证梦想："追随你的激情。你妻子不理解这种磨练。真正的主播花了多年才成功。"'
                },
                consequence: {
                    en: '💥 Divorce Finalized: She leaves. He loses custody. His stream dies without support. You enabled destruction.',
                    th: '💥 หย่าเรียบร้อย: เธอจากไป เขาเสียสิทธิ์ปกครอง สตรีมของเขาตายเพราะไม่มีการสนับสนุน คุณเปิดโอกาสให้ทำลาย',
                    zh: '💥 离婚最终完成：她离开了。他失去了监护权。他的直播因缺乏支持而消亡。你促成了毁灭。'
                }
            }
        ]
    },
    {
        id: 'psychologist_032',
        text: {
            en: '🏋️ The Steroid Bodybuilder: A competitive bodybuilder admits to using illegal steroids. His organs are failing, but he says "I\'d rather die huge than live small."',
            th: '🏋️ นักเพาะกายเสพสเตียรอยด์: นักเพาะกายแข่งขันยอมรับว่าใช้สเตียรอยด์ผิดกฎหมาย อวัยวะของเขากำลังล้มเหลว แต่เขาบอกว่า "ฉันยอมตายแบบกล้ามโตดีกว่าอยู่แบบเล็ก"',
            zh: '🏋️ 类固醇健美运动员：一位竞技健美运动员承认使用非法类固醇。他的器官正在衰竭，但他说"我宁愿巨大地死去，也不愿渺小地活着。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏥 Medical Emergency: "I\'m calling your doctor right now. You need blood tests and intervention before you die on stage."',
                    th: '🏥 ฉุกเฉินทางการแพทย์: "ฉันโทรหาหมอตอนนี้เลย คุณต้องตรวจเลือดและรักษาก่อนจะตายบนเวที"',
                    zh: '🏥 医疗紧急情况："我现在就给你的医生打电话。你需要验血和干预，否则会死在舞台上。"'
                },
                consequence: {
                    en: '⚕️ Life Saved: Tests show liver damage. He stops steroids, loses muscle, quits competing, but survives. He hates his new body.',
                    th: '⚕️ ชีวิตรอด: ผลตรวจพบตับเสียหาย เขาหยุดสเตียรอยด์ กล้ามหาย เลิกแข่ง แต่รอดชีวิต เขาเกลียดร่างกายใหม่',
                    zh: '⚕️ 生命得救：检查显示肝损伤。他停用类固醇，失去肌肉，放弃比赛，但活了下来。他讨厌他的新身体。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💭 Existential Exploration: "Why do you need to be huge? What are you running from? Let\'s dig into the real void."',
                    th: '💭 การสำรวจอัตถิภาวนิยม: "ทำไมคุณต้องตัวโต? คุณกำลังหนีอะไร? มาขุดหาความว่างเปล่าที่แท้จริงกัน"',
                    zh: '💭 存在主义探索："你为什么需要变得巨大？你在逃避什么？让我们挖掘真正的空虚。"'
                },
                consequence: {
                    en: '🛡️ Core Wound Found: Childhood bullying. He was called "toothpick." You trace it back. He cries, starts tapering steroids slowly.',
                    th: '🛡️ พบบาดแผลหลัก: ถูกรังแกตอนเด็ก ถูกเรียกว่า "ไม้จิ้มฟัน" คุณตามรอยกลับไป เขาร้องไห้ เริ่มลดสเตียรอยด์ช้าๆ',
                    zh: '🛡️ 发现核心创伤：童年欺凌。他被叫做"牙签"。你追溯回去。他哭了，开始慢慢减少类固醇。'
                },
                stats: { competence: 60, ethics: 50, leadership: 30, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🏆 Harm Reduction: "I can\'t stop you, but let me refer you to a sports doctor who can monitor you safely while you compete."',
                    th: '🏆 ลดอันตราย: "ฉันห้ามคุณไม่ได้ แต่ให้ฉันแนะนำแพทย์กีฬาที่สามารถติดตามตรวจสอบคุณอย่างปลอดภัยขณะแข่ง"',
                    zh: '🏆 减害："我不能阻止你，但让我把你推荐给一位运动医生，他可以在你比赛时安全地监测你。"'
                },
                consequence: {
                    en: '⚖️ Managed Risk: The doctor reduces dosages and adds protective meds. He competes 3 more years safely, then retires naturally.',
                    th: '⚖️ ความเสี่ยงที่ควบคุม: หมอลดปริมาณและเพิ่มยาป้องกัน เขาแข่งอีก 3 ปีอย่างปลอดภัย แล้วเกษียณตามธรรมชาติ',
                    zh: '⚖️ 管理风险：医生减少了剂量并添加了保护性药物。他又安全地比赛了3年，然后自然退役。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '😤 Shame Tactic: "You\'re a fraud. Real bodybuilders do it naturally. You\'re cheating yourself and everyone."',
                    th: '😤 กลยุทธ์ทำให้อับอาย: "คุณเป็นคนต้มตุ๋น นักเพาะกายจริงทำแบบธรรมชาติ คุณกำลังโกงตัวเองและทุกคน"',
                    zh: '😤 羞辱策略："你是个骗子。真正的健美运动员是自然训练的。你在欺骗自己和所有人。"'
                },
                consequence: {
                    en: '💀 Suicidal Spiral: Ashamed and defensive, he overdoses on purpose two weeks later. You shamed him to death.',
                    th: '💀 วนเวียนสู่การฆ่าตัวตาย: อับอายและป้องกันตัว เขาเสพยาเกินขนาดตั้งใจสองสัปดาห์ต่อมา คุณทำให้เขาอับอายจนตาย',
                    zh: '💀 自杀螺旋：羞愧和防御，他在两周后故意过量服用。你用羞辱杀死了他。'
                }
            }
        ]
    },
    {
        id: 'psychologist_033',
        text: {
            en: '📵 The Digital Detox Retreat: You run a wilderness therapy camp. A tech exec checks in saying she "can\'t feel anything anymore." She wants to unplug for 30 days but panics after 2 hours without WiFi.',
            th: '📵 ค่ายดีท็อกซ์ดิจิทัล: คุณดำเนินค่ายบำบัดในป่า ผู้บริหารเทคฯ คนหนึ่งเข้ามาบอกว่า "รู้สึกอะไรไม่ได้อีกแล้ว" เธอต้องการถอดปลั๊ก 30 วัน แต่ตื่นตระหนกหลังจาก 2 ชั่วโมงที่ไม่มี WiFi',
            zh: '📵 数字排毒静修：你经营一个荒野治疗营。一位科技高管入住，说她"再也感觉不到任何东西了"。她想断网30天，但没有WiFi两小时后就恐慌了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Cold Turkey Commitment: "You signed the contract. No devices for 30 days. Sit with the discomfort. This is the cure."',
                    th: '🔥 ความมุ่งมั่นแบบหักดิบ: "คุณเซ็นสัญญาแล้ว ไม่มีอุปกรณ์ 30 วัน นั่งกับความไม่สบายใจ นี่คือทางรักษา"',
                    zh: '🔥 冷静承诺："你签了合同。30天不用设备。忍受这种不适。这就是治疗。"'
                },
                consequence: {
                    en: '🌲 Transformation: She screams for 3 days, then finds peace. She returns to her job with boundaries and renewed creativity.',
                    th: '🌲 การเปลี่ยนแปลง: เธอกรีดร้อง 3 วัน แล้วก็พบความสงบ เธอกลับไปทำงานพร้อมขอบเขตและความคิดสร้างสรรค์ใหม่',
                    zh: '🌲 转变：她尖叫了3天，然后找到了平静。她带着界限和新的创造力回到了工作岗位。'
                },
                stats: { competence: 60, ethics: 50, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '📱 Gradual Weaning: "Let\'s start with 1 hour of phone time per day, then reduce it weekly. Baby steps."',
                    th: '📱 การหย่าแบบค่อยเป็นค่อยไป: "เริ่มจาก 1 ชั่วโมงใช้โทรศัพท์ต่อวัน แล้วค่อยลดทีละสัปดาห์ ทีละก้าว"',
                    zh: '📱 逐步戒断："让我们从每天1小时的手机时间开始，然后每周减少。循序渐进。"'
                },
                consequence: {
                    en: '📉 Mediocre Results: She never fully disconnects. She leaves early claiming "it didn\'t work," but she needed the shock.',
                    th: '📉 ผลลัพธ์ธรรมดา: เธอไม่เคยถอดปลั๊กจริงๆ เธอออกไปเร็วโดยอ้างว่า "ไม่ได้ผล" แต่เธอต้องการช็อก',
                    zh: '📉 平庸的结果：她从未完全断开连接。她提前离开，声称"没用"，但她需要那种震撼。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🧘 Mindfulness Bridge: "Use your phone for guided meditations only. We redirect the addiction to something healthy."',
                    th: '🧘 สะพานเชื่อมสติ: "ใช้โทรศัพท์สำหรับการทำสมาธิแบบมีคำบรรยายเท่านั้น เราเปลี่ยนเส้นทางการติดไปสู่สิ่งที่ดีต่อสุขภาพ"',
                    zh: '🧘 正念桥梁："只用手机进行引导冥想。我们将成瘾重定向到健康的东西。"'
                },
                consequence: {
                    en: '🎧 Partial Success: She develops a meditation habit but still checks email secretly. It\'s progress, but not the breakthrough.',
                    th: '🎧 ความสำเร็จบางส่วน: เธอฝึกการทำสมาธิเป็นนิสัย แต่ยังแอบเช็คอีเมล มันก้าวหน้า แต่ไม่ใช่ความก้าวหน้าครั้งใหญ่',
                    zh: '🎧 部分成功：她养成了冥想的习惯，但仍然偷偷查看电子邮件。这是进步，但不是突破。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '💸 Refund Escape: "This isn\'t for you. I refund her and let her leave. Some people aren\'t ready."',
                    th: '💸 คืนเงินหนี: "ไม่เหมาะกับคุณ ฉันคืนเงินและปล่อยให้เธอไป บางคนยังไม่พร้อม"',
                    zh: '💸 退款逃脱："这不适合你。我给她退款让她离开。有些人还没准备好。"'
                },
                consequence: {
                    en: '🔄 Missed Opportunity: She later has a breakdown and is hospitalized. You could have helped but gave up too easily.',
                    th: '🔄 พลาดโอกาส: ต่อมาเธอมีอาการพังทลายและเข้าโรงพยาบาล คุณช่วยได้แต่ยอมแพ้ง่ายเกินไป',
                    zh: '🔄 错失良机：她后来崩溃并住院。你本可以帮助，但太轻易放弃了。'
                }
            }
        ]
    },
    {
        id: 'psychologist_034',
        text: {
            en: '🎨 The Tortured Artist: A painter insists their depression makes their art "authentic." They refuse treatment, saying "If I\'m happy, I\'ll lose my edge."',
            th: '🎨 ศิลปินที่ทรมาน: จิตรกรคนหนึ่งยืนยันว่าความซึมเศร้าทำให้งานศิลปะของพวกเขา "แท้จริง" พวกเขาปฏิเสธการรักษา บอกว่า "ถ้าฉันมีความสุข ฉันจะเสียความคมชัด"',
            zh: '🎨 受折磨的艺术家：一位画家坚称他们的抑郁症使他们的艺术"真实"。他们拒绝治疗，说"如果我快乐，我就会失去优势。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🖼️ Reframe Creativity: "Plenty of artists create from joy. Depression doesn\'t make you special; it makes you suffer. Let\'s heal and see what happens."',
                    th: '🖼️ กำหนดกรอบความคิดสร้างสรรค์ใหม่: "ศิลปินหลายคนสร้างสรรค์จากความสุข ความซึมเศร้าไม่ได้ทำให้คุณพิเศษ มันแค่ทำให้คุณทุกข์ มารักษากันแล้วดูว่าจะเกิดอะไร"',
                    zh: '🖼️ 重构创造力："很多艺术家从喜悦中创作。抑郁症不会让你特别；它只会让你受苦。让我们治愈看看会发生什么。"'
                },
                consequence: {
                    en: '🌈 Evolution: After treatment, their art becomes vibrant and sells more. They thank you for saving their life and career.',
                    th: '🌈 วิวัฒนาการ: หลังการรักษา งานศิลปะของพวกเขามีชีวิตชีวาและขายดีขึ้น พวกเขาขอบคุณที่ช่วยชีวิตและอาชีพ',
                    zh: '🌈 进化：治疗后，他们的艺术变得充满活力，销量更好。他们感谢你拯救了他们的生命和事业。'
                },
                stats: { competence: 60, ethics: 60, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Respect Autonomy: "It\'s your choice. I\'ll be here when you\'re ready. But I won\'t enable romanticizing suffering."',
                    th: '⚖️ เคารพความเป็นอิสระ: "เป็นทางเลือกของคุณ ฉันจะอยู่ที่นี่เมื่อคุณพร้อม แต่ฉันจะไม่ส่งเสริมการทำให้ความทุกข์เป็นเรื่องโรแมนติก"',
                    zh: '⚖️ 尊重自主权："这是你的选择。当你准备好时，我会在这里。但我不会纵容浪漫化苦难。"'
                },
                consequence: {
                    en: '⏳ Waiting Game: Years pass. They eventually return after a suicide attempt. Your patience was wise but costly.',
                    th: '⏳ เกมรอคอย: หลายปีผ่านไป ในที่สุดพวกเขากลับมาหลังพยายามฆ่าตัวตาย ความอดทนของคุณฉลาดแต่มีราคาแพง',
                    zh: '⏳ 等待游戏：多年过去了。他们最终在自杀未遂后回来了。你的耐心是明智的，但代价高昂。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🎭 Art Therapy Compromise: "Let\'s not medicate yet. Let\'s do art therapy where you paint your depression. Channel it safely."',
                    th: '🎭 ประนีประนอมด้วยศิลปะบำบัด: "อย่าให้ยาก่อน มาลองศิลปะบำบัดที่คุณวาดภาพความซึมเศร้า ถ่ายทอดมันอย่างปลอดภัย"',
                    zh: '🎭 艺术疗法妥协："我们先不用药。让我们做艺术疗法，你画出你的抑郁症。安全地引导它。"'
                },
                consequence: {
                    en: '🖌️ Cathartic Process: They create powerful work AND start healing. You found a middle path that honors both art and health.',
                    th: '🖌️ กระบวนการระบาย: พวกเขาสร้างงานที่ทรงพลังและเริ่มเยียวยา คุณพบทางกลางที่ให้เกียรติทั้งศิลปะและสุขภาพ',
                    zh: '🖌️ 宣泄过程：他们创作了强有力的作品并开始治愈。你找到了既尊重艺术又尊重健康的中间道路。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '💊 Force Medication: "Your romanticism is delusional. I\'m recommending involuntary treatment to your insurance."',
                    th: '💊 บังคับให้รับยา: "ความโรแมนติกของคุณเป็นโรคหลงผิด ฉันจะแนะนำการรักษาโดยไม่สมัครใจให้ประกันของคุณ"',
                    zh: '💊 强制用药："你的浪漫主义是妄想。我要向你的保险公司推荐非自愿治疗。"'
                },
                consequence: {
                    en: '⚖️ Legal Battle: They sue you for violating autonomy. You lose in court. Your license is suspended.',
                    th: '⚖️ การต่อสู้ทางกฎหมาย: พวกเขาฟ้องคุณฐานละเมิดความเป็นอิสระ คุณแพ้ในศาล ใบอนุญาตถูกระงับ',
                    zh: '⚖️ 法律战：他们起诉你侵犯自主权。你在法庭上败诉。你的执照被暂停。'
                }
            }
        ]
    },
    {
        id: 'psychologist_035',
        text: {
            en: '🏃 The Fitness Influencer Collapse: A fitness influencer with 2 million followers is hospitalized for organ failure from extreme dieting. She wants to continue posting "what I eat in a day" content promoting her starvation plan.',
            th: '🏃 การล่มสลายของอินฟลูเอนเซอร์ฟิตเนส: อินฟลูเอนเซอร์ฟิตเนสที่มีผู้ติดตาม 2 ล้านคนเข้าโรงพยาบาลเพราะอวัยวะล้มเหลวจากการลดน้ำหนักสุดโต่ง เธออยากโพสต์คอนเทนต์ "สิ่งที่ฉันกินในหนึ่งวัน" ต่อเพื่อโปรโมตแผนอดอาหาร',
            zh: '🏃 健身网红崩溃：一位拥有200万粉丝的健身网红因极端节食导致器官衰竭住院。她想继续发布"我一天吃什么"的内容，宣传她的饥饿计划。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Public Intervention: "I demand you post a public apology and correction before discharge. You\'re harming millions of young girls."',
                    th: '📢 การแทรกแซงสาธารณะ: "ฉันเรียกร้องให้คุณโพสต์ขอโทษและแก้ไขต่อสาธารณะก่อนจำหน่าย คุณกำลังทำร้ายเด็กสาวนับล้าน"',
                    zh: '📢 公开干预："我要求你在出院前发布公开道歉和更正。你正在伤害数百万年轻女孩。"'
                },
                consequence: {
                    en: '📱 Viral Redemption: Her tearful confession goes viral. She pivots to recovery content. You turned a tragedy into a teaching moment.',
                    th: '📱 การไถ่บาปไวรัล: คำสารภาพน้ำตาของเธอแพร่ระบาด เธอเปลี่ยนมาทำคอนเทนต์การฟื้นฟู คุณเปลี่ยนโศกนาฏกรรมเป็นบทเรียน',
                    zh: '📱 病毒式救赎：她含泪的忏悔在网上疯传。她转向康复内容。你把悲剧变成了教学时刻。'
                },
                stats: { competence: 60, ethics: 70, leadership: 60, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🔒 Confidentiality First: "What you do publicly is not my business. My job is to heal you privately, not police your platform."',
                    th: '🔒 ความลับเป็นอันดับแรก: "สิ่งที่คุณทำต่อสาธารณะไม่ใช่ธุระของฉัน งานของฉันคือรักษาคุณเป็นการส่วนตัว ไม่ใช่ตรวจสอบแพลตฟอร์มคุณ"',
                    zh: '🔒 保密第一："你在公开场合做什么不关我的事。我的工作是私下治愈你，而不是监管你的平台。"'
                },
                consequence: {
                    en: '💀 Death Toll Rises: She recovers but keeps posting the same content. 3 fans die imitating her. Lawsuits mention your name.',
                    th: '💀 ยอดผู้เสียชีวิตเพิ่มขึ้น: เธอหายแต่ยังโพสต์คอนเทนต์เดิม แฟน 3 คนตายจากการเลียนแบบ คำฟ้องพาดพิงชื่อคุณ',
                    zh: '💀 死亡人数上升：她康复了，但继续发布相同的内容。3名粉丝死于模仿她。诉讼中提到了你的名字。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📚 Education Campaign: "I help her create evidence-based fitness content with nutritionists. She becomes an advocate for health."',
                    th: '📚 แคมเปญให้ความรู้: "ฉันช่วยเธอสร้างคอนเทนต์ฟิตเนสที่มีหลักฐานร่วมกับนักโภชนาการ เธอกลายเป็นผู้สนับสนุนสุขภาพ"',
                    zh: '📚 教育活动："我帮助她与营养师一起创建基于证据的健身内容。她成为健康倡导者。"'
                },
                consequence: {
                    en: '🌟 Platform Pivot: She loses some followers but gains respect. Her new content saves lives. You leveraged influence for good.',
                    th: '🌟 การเปลี่ยนทิศแพลตฟอร์ม: เธอเสียผู้ติดตามบ้าง แต่ได้รับความเคารพ คอนเทนต์ใหม่ช่วยชีวิตคน คุณใช้อิทธิพลเพื่อสิ่งดี',
                    zh: '🌟 平台转型：她失去了一些粉丝，但赢得了尊重。她的新内容拯救了生命。你利用影响力做了好事。'
                },
                stats: { competence: 70, ethics: 60, leadership: 70, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '⚖️ Report to Platform: "I report her account to Instagram for promoting eating disorders. Let them shut her down."',
                    th: '⚖️ รายงานแพลตฟอร์ม: "ฉันรายงานบัญชีของเธอไปยัง Instagram ฐานส่งเสริมความผิดปกติการกิน ให้พวกเขาปิดเธอ"',
                    zh: '⚖️ 向平台举报："我向Instagram举报她的账户宣传饮食失调。让他们关闭她。"'
                },
                consequence: {
                    en: '📵 Deplatformed: Her account is deleted. She spirals into depression from losing her identity and income. Unintended harm.',
                    th: '📵 ถูกปิดแพลตฟอร์ม: บัญชีของเธอถูกลบ เธอจมดิ่งสู่ซึมเศร้าจากการสูญเสียอัตลักษณ์และรายได้ อันตรายที่ไม่ได้ตั้งใจ',
                    zh: '📵 被取消平台资格：她的账户被删除。她因失去身份和收入而陷入抑郁。意外伤害。'
                }
            }
        ]
    },
    {
        id: 'psychologist_036',
        text: {
            en: '🎓 The Burned-Out Prodigy: A 19-year-old PhD student at MIT is having panic attacks. Their parents pushed them since age 3. They say "I don\'t know who I am without achievements."',
            th: '🎓 อัจฉริยะที่หมดไฟ: นักศึกษาปริญญาเอกอายุ 19 ปีที่ MIT มีอาการตื่นตระหนก พ่อแม่เขาผลักดันตั้งแต่อายุ 3 ขวบ เขาบอกว่า "ฉันไม่รู้ว่าฉันเป็นใครถ้าไม่มีผลงาน"',
            zh: '🎓 精疲力竭的神童：一位19岁的麻省理工学院博士生正在经历恐慌发作。他们的父母从3岁起就在推动他们。他们说"没有成就，我不知道我是谁。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌍 Gap Year Prescription: "Drop out for a year. Travel. Wait tables. Find yourself outside the lab coat."',
                    th: '🌍 สั่งให้พักหยุดหนึ่งปี: "ลาออก 1 ปี ไปเที่ยว เสิร์ฟอาหาร ค้นหาตัวเองนอกชุดห้องทดลอง"',
                    zh: '🌍 间隔年处方："休学一年。去旅行。做服务员。在实验服之外找到自己。"'
                },
                consequence: {
                    en: '✈️ Liberation: They backpack Southeast Asia, work a farm, and return knowing who they are. They finish PhD on their terms.',
                    th: '✈️ การปลดปล่อย: พวกเขาแบกเป้เที่ยวเอเชียตะวันออกเฉียงใต้ ทำฟาร์ม และกลับมาโดยรู้ว่าตัวเองเป็นใคร พวกเขาจบปริญญาเอกตามเงื่อนไขของตัวเอง',
                    zh: '✈️ 解放：他们背包游东南亚，在农场工作，然后归来时知道自己是谁。他们按自己的条件完成博士学位。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '👨‍👩‍👦 Parent Confrontation: "I bring the parents in. I tell them they created a machine, not a person. Time to let go."',
                    th: '👨‍👩‍👦 เผชิญหน้าพ่อแม่: "ฉันพาพ่อแม่เข้ามา บอกพวกเขาว่าสร้างเครื่องจักร ไม่ใช่คน ถึงเวลาปล่อยวาง"',
                    zh: '👨‍👩‍👦 面对父母："我让父母进来。我告诉他们，他们创造了一台机器，而不是一个人。是时候放手了。"'
                },
                consequence: {
                    en: '💔 Family Rift: The parents are offended and storm out. But the student feels free for the first time. Costly but worth it.',
                    th: '💔 ครอบครัวแตกร้าว: พ่อแม่โกรธและเดินออก แต่นักศึกษารู้สึกเป็นอิสระเป็นครั้งแรก มีค่าใช้จ่ายแต่คุ้มค่า',
                    zh: '💔 家庭裂痕：父母被冒犯并冲了出去。但学生第一次感到自由。代价高昂但值得。'
                },
                stats: { competence: 40, ethics: 60, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🧘 Identity Exercises: "We do therapy exercises exploring hobbies, music, and values outside of academics. Build a new foundation."',
                    th: '🧘 แบบฝึกหัดเรื่องอัตลักษณ์: "เราทำการบำบัดสำรวจงานอดิเรก ดนตรี และค่านิยมนอกวิชาการ สร้างรากฐานใหม่"',
                    zh: '🧘 身份练习："我们做治疗练习，探索学术之外的爱好、音乐和价值观。建立新的基础。"'
                },
                consequence: {
                    en: '🎨 Slow Growth: They discover painting. It becomes their anchor. Panic attacks reduce. They stay in school but balanced.',
                    th: '🎨 การเติบโตช้าๆ: พวกเขาค้นพบการวาดภาพ มันกลายเป็นหลักยึด อาการตื่นตระหนกลดลง พวกเขาอยู่โรงเรียนต่อแตcมีสมดุล',
                    zh: '🎨 缓慢成长：他们发现了绘画。它成为他们的锚。恐慌发作减少了。他们留在学校但更平衡了。'
                },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '💊 Manage Symptoms: "Let\'s just treat the anxiety with meds so you can keep performing. You can figure out identity later."',
                    th: '💊 จัดการอาการ: "มารักษาความวิตกกังวลด้วยยาเพื่อให้คุณทำงานต่อได้ หาเรื่องอัตลักษณ์ทีหลังก็ได้"',
                    zh: '💊 管理症状："让我们用药物治疗焦虑，这样你就可以继续表现。你可以稍后弄清楚身份。"'
                },
                consequence: {
                    en: '💀 Overdose at 25: Medicated but hollow, they complete PhD and attempt suicide at 25. You treated symptoms, not the soul.',
                    th: '💀 เสพยาเกินขนาดอายุ 25: กินยาแต่ว่างเปล่า พวกเขาจบปริญญาเอกและพยายามฆ่าตัวตายอายุ 25 คุณรักษาอาการ ไม่ใช่จิตวิญญาณ',
                    zh: '💀 25岁时过量服药：被药物麻痹但空虚，他们完成了博士学位并在25岁时试图自杀。你治疗了症状，而不是灵魂。'
                }
            }
        ]
    },
    {
        id: 'psychologist_037',
        text: {
            en: '💍 The Polyamory Crisis: A married couple wants you to mediate. The wife wants to open the marriage. The husband is devastated but too afraid to say no. He wants you to "fix" his insecurity.',
            th: '💍 วิกฤตรักหลายคน: คู่สมรสต้องการให้คุณไกล่เกลี่ย ภรรยาต้องการเปิดการแต่งงาน สามีเศร้ามากแต่กลัวเกินที่จะปฏิเสธ เขาต้องการให้คุณ "แก้" ความไม่มั่นใจของเขา',
            zh: '💍 多角恋危机：一对已婚夫妇希望你调解。妻子想开放婚姻。丈夫很沮丧，但太害怕说不。他想让你"修复"他的不安全感。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Defend Boundaries: "This isn\'t insecurity, this is incompatibility. You don\'t need therapy, you need honesty about what you want."',
                    th: '🛡️ ปกป้องขอบเขต: "นี่ไม่ใช่ความไม่มั่นใจ นี่คือความไม่เข้ากัน คุณไม่ต้องการการบำบัด คุณต้องการความจริงใจเกี่ยวกับสิ่งที่คุณต้องการ"',
                    zh: '🛡️ 捍卫界限："这不是不安全感，这是不兼容。你不需要治疗，你需要诚实面对你想要什么。"'
                },
                consequence: {
                    en: '💔 Honest Divorce: They separate amicably. He finds someone monogamous. They both thank you for clarity.',
                    th: '💔 หย่าอย่างตรงไปตรงมา: พวกเขาแยกกันอย่างสันติ เขาเจอคนที่มีคนรักคนเดียว ทั้งคู่ขอบคุณความชัดเจนของคุณ',
                    zh: '💔 诚实离婚：他们友好地分开了。他找到了一夫一妻制的人。他们都感谢你的清晰。'
                },
                stats: { competence: 50, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Explore Together: "Let\'s explore why she wants this, and why you fear it. Maybe there\'s common ground in non-monogamy education."',
                    th: '🔄 สำรวจร่วมกัน: "มาสำรวจว่าทำไมเธอต้องการ และทำไมคุณกลัว บางทีอาจมีจุดร่วมในการศึกษาเรื่องความรักหลายคน"',
                    zh: '🔄 共同探索："让我们探讨她为何想要这个，以及你为何害怕。也许在非一夫一妻制教育中有共同点。"'
                },
                consequence: {
                    en: '🌈 Unexpected Fit: After months of education and rules, they try it. It works for them. You expanded their relationship vocabulary.',
                    th: '🌈 ความเข้ากันที่ไม่คาดคิด: หลังหลายเดือนของการศึกษาและกฎเกณฑ์ พวกเขาลอง มันใช้ได้กับพวกเขา คุณขยายคำศัพท์ความสัมพันธ์ของพวกเขา',
                    zh: '🌈 意外契合：经过数月的教育和规则，他们尝试了。对他们有效。你扩展了他们的关系词汇。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Neutral Facilitator: "I won\'t take sides. Let\'s create a safe space for both to express needs without judgment."',
                    th: '⚖️ ผู้อำนวยการเป็นกลาง: "ฉันจะไม่เข้าข้างใคร มาสร้างพื้นที่ปลอดภัยให้ทั้งคู่แสดงความต้องการโดยไม่ตัดสิน"',
                    zh: '⚖️ 中立调解员："我不会偏袒任何一方。让我们创造一个安全的空间，让双方都能在不受评判的情况下表达需求。"'
                },
                consequence: {
                    en: '🔀 Stalemate: Sessions go in circles. No progress. They need direction, not just facilitation. You wasted their time.',
                    th: '🔀 ทางตัน: เซสชันวนไปวนมา ไม่มีความก้าวหน้า พวกเขาต้องการทิศทาง ไม่ใช่แค่การอำนวยความสะดวก คุณเสียเวลาพวกเขา',
                    zh: '🔀 僵局：会话原地打转。没有进展。他们需要方向，而不仅仅是调解。你浪费了他们的时间。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🚫 Moralize Against: "Polyamory destroys marriages. I refuse to enable this. Either commit to each other or divorce."',
                    th: '🚫 แสดงจริยธรรมต่อต้าน: "รักหลายคนทำลายการแต่งงาน ฉันปฏิเสธที่จะส่งเสริม ผูกพันกันหรือหย่ากัน"',
                    zh: '🚫 道德化反对："多角恋会毁掉婚姻。我拒绝纵容这个。要么彼此承诺，要么离婚。"'
                },
                consequence: {
                    en: '⚖️ Ethics Violation: They report you for imposing personal values. The board warns you. Stick to science, not morals.',
                    th: '⚖️ ละเมิดจริยธรรม: พวกเขารายงานคุณฐานกำหนดค่านิยมส่วนตัว คณะกรรมการเตือนคุณ ยึดวิทยาศาสตร์ ไม่ใช่จริยธรรม',
                    zh: '⚖️ 伦理违规：他们举报你强加个人价值观。委员会警告你。坚持科学，而不是道德。'
                }
            }
        ]
    },
    {
        id: 'psychologist_038',
        text: {
            en: '🪖 The Veteran Nightmare: A Iraq War veteran sees insurgents in every crowd. He carries a concealed weapon everywhere and nearly shot a teenager at a gas station who startled him.',
            th: '🪖 ฝันร้ายของทหารผ่านศึก: ทหารผ่านศึกสงครามอิรักเห็นกบฏในทุกฝูงชน เขาพกอาวุธซ่อนเร้นทุกที่และเกือบยิงวัยรุ่นที่ปั๊มน้ำมันที่ทำให้เขาตกใจ',
            zh: '🪖 退伍军人噩梦：一位伊拉克战争退伍军人在每个人群中都看到叛乱分子。他随时携带隐蔽武器，几乎在加油站射击了一个吓到他的青少年。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏥 Inpatient PTSD Program: "You need intensive residential treatment immediately. You\'re a danger to yourself and others."',
                    th: '🏥 โปรแกรม PTSD ผู้ป่วยใน: "คุณต้องการการรักษาแบบพักอาศัยเข้มข้นทันที คุณเป็นอันตรายต่อตนเองและคนอื่น"',
                    zh: '🏥 住院PTSD项目："你需要立即接受密集的住院治疗。你对自己和他人都有危险。"'
                },
                consequence: {
                    en: '🛡️ Controlled Healing: 90-day program works. He learns grounding techniques, surrenders his gun, and starts to heal safely.',
                    th: '🛡️ การเยียวยาที่ควบคุม: โปรแกรม 90 วันได้ผล เขาเรียนรู้เทคนิคการหยั่งราก ส่งปืน และเริ่มรักษาอย่างปลอดภัย',
                    zh: '🛡️ 受控愈合：90天计划有效。他学习接地技巧，交出枪支，开始安全地治愈。'
                },
                stats: { competence: 60, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🎯 EMDR Trauma Therapy: "We do weekly EMDR to reprocess the trauma. Intense but you can stay outpatient and keep your routine."',
                    th: '🎯 การบำบัดบาดแผล EMDR: "เราทำ EMDR รายสัปดาห์เพื่อประมวลผลบาดแผลใหม่ เข้มข้นแต่คุณสามารถอยู่นอกโรงพยาบาลและรักษากิจวัตร"',
                    zh: '🎯 EMDR创伤疗法："我们每周做EMDR来重新处理创伤。很激烈，但你可以保持门诊并维持你的日常生活。"'
                },
                consequence: {
                    en: '⏳ Gradual Progress: It takes a year, but flashbacks reduce. He keeps his gun but uses it safely. Slower but sustainable.',
                    th: '⏳ ความก้าวหน้าค่อยเป็นค่อยไป: ใช้เวลาหนึ่งปี แต่ความทรงจำย้อนกลับลดลง เขายังมีปืนแต่ใช้อย่างปลอดภัย ช้ากว่าแต่ยั่งยืน',
                    zh: '⏳ 逐步进展：需要一年时间，但闪回减少了。他保留枪支但安全使用。较慢但可持续。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🚔 Report to Police: "That teenager could have died. I have to report this incident for public safety."',
                    th: '🚔 รายงานตำรวจ: "วัยรุ่นนั่นเกือบตาย ฉันต้องรายงานเหตุการณ์นี้เพื่อความปลอดภัยสาธารณะ"',
                    zh: '🚔 向警方报告："那个青少年可能已经死了。为了公共安全，我必须报告这起事件。"'
                },
                consequence: {
                    en: '⚖️ Arrested Veteran: He\'s arrested, loses his concealed carry permit. He feels betrayed by you and refuses further help.',
                    th: '⚖️ ทหารผ่านศึกถูกจับ: เขาถูกจับ เสียใบอนุญาตพกอาวุธ เขารู้สึกถูกคุณทรยศและปฏิเสธความช่วยเหลือต่อไป',
                    zh: '⚖️ 被捕的退伍军人：他被捕，失去了隐蔽携枪许可证。他觉得被你背叛并拒绝进一步帮助。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🫡 Veteran Solidarity: "I thank him for his service and tell him his hypervigilance kept him alive. Let\'s honor it, not pathologize it."',
                    th: '🫡 ความสามัคคีของทหารผ่านศึก: "ฉันขอบคุณการรับใช้ชาติและบอกว่าความระมัดระวังสูงช่วยชีวิตเขา มาให้เกียรติ ไม่ใช่ทำให้เป็นพยาธิ"',
                    zh: '🫡 退伍军人团结："我感谢他的服务，并告诉他，他的过度警觉让他活了下来。让我们尊重它，而不是将其病态化。"'
                },
                consequence: {
                    en: '💥 Tragedy Waiting: You enable him. Six months later, he shoots someone in a parking lot. You\'re named in the lawsuit.',
                    th: '💥 โศกนาฏกรรมรอคอย: คุณเปิดโอกาส หกเดือนต่อมา เขายิงคนในลานจอดรถ คุณถูกระบุชื่อในคำฟ้อง',
                    zh: '💥 等待的悲剧：你纵容了他。六个月后，他在停车场射杀了某人。你在诉讼中被点名。'
                }
            }
        ]
    },
    {
        id: 'psychologist_039',
        text: {
            en: '🧬 The Gene-Edited Baby: Parents used CRISPR illegally to edit their embryo for intelligence. The 5-year-old child is a genius but has severe social deficits. They want you to "fix" the child without revealing the editing.',
            th: '🧬 ทารกที่แก้ไขยีน: พ่อแม่ใช้ CRISPR ผิดกฎหมายรรก้สำหรับความฉลาด เด็ก 5 ขวบเป็นอัจฉริยะแต่มีปัญหาทางสังคมรุนแรง พวกเขาต้องการให้คุณ "แก้" เด็กโดยไม่เปิดเผยการแก้ไข',
            zh: '🧬 基因编辑婴儿：父母非法使用CRISPR编辑胚胎以提高智力。这个5岁的孩子是天才，但有严重的社交缺陷。他们希望你在不透露编辑的情况下"修复"孩子。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Report to Authorities: "You violated international law. This child needs medical monitoring. I have to report this."',
                    th: '🚨 รายงานทางการ: "คุณละเมิดกฎหมายระหว่างประเทศ เด็กคนนี้ต้องการติดตามทางการแพทย์ ฉันต้องรายงาน"',
                    zh: '🚨 向当局报告："你违反了国际法。这个孩子需要医疗监控。我必须报告这个。"'
                },
                consequence: {
                    en: '⚖️ Legal Storm: Parents are arrested. The child becomes a media spectacle. You did right legally, but the child suffers.',
                    th: '⚖️ พายุทางกฎหมาย: พ่อแม่ถูกจับ เด็กกลายเป็นสื่อการละครสื่อ คุณทำถูกต้องตามกฎหมาย แต่เด็กทุกข์',
                    zh: '⚖️ 法律风暴：父母被捕。孩子成为媒体焦点。你在法律上做对了，但孩子受苦了。'
                },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Treat in Secret: "I focus on social skills therapy for the child. What the parents did is done. My job is to help this kid now."',
                    th: '🤐 รักษาแบบลับ: "ฉันโฟกัสการบำบัดทักษะสังคมสำหรับเด็ก สิ่งที่พ่อแม่ทำไปแล้ว งานของฉันคือช่วยเด็กคนนี้ตอนนี้"',
                    zh: '🤐 秘密治疗："我专注于孩子的社交技能治疗。父母所做的已经完成了。我的工作是现在帮助这个孩子。"'
                },
                consequence: {
                    en: '🩹 Partial Help: The child improves socially but you\'re complicit in a crime. If discovered, you lose your license.',
                    th: '🩹 ความช่วยเหลือบางส่วน: เด็กพัฒนาทางสังคมแต่คุณเป็นผู้สมรู้ร่วมคิดในอาชญากรรม ถ้าถูกค้นพบ คุณเสียใบอนุญาต',
                    zh: '🩹 部分帮助：孩子在社交方面有所改善，但你是犯罪的共犯。如果被发现，你会失去执照。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🔬 Research Opportunity: "I refer them to a geneticist who studies this. The child needs specialized care beyond psychology."',
                    th: '🔬 โอกาสวิจัย: "ฉันส่งต่อพวกเขาไปยังนักพันธุศาสตร์ที่ศึกษาเรื่องนี้ เด็กต้องการการดูแลเฉพาะทางเหนือจิตวิทยา"',
                    zh: '🔬 研究机会："我把他们转介给研究这个的遗传学家。孩子需要超越心理学的专业护理。"'
                },
                consequence: {
                    en: '🧪 Scientific Advancement: The child gets proper care and becomes a case study that advances medicine. Ethical gray zone but beneficial.',
                    th: '🧪 ความก้าวหน้าทางวิทยาศาสตร์: เด็กได้รับการดูแลที่เหมาะสมและกลายเป็นกรณีศึกษาที่พัฒนาการแพทย์ เขตเทาทางจริยธรรมแต่เป็นประโยชน์',
                    zh: '🧪 科学进步：孩子得到适当的护理，并成为推进医学的案例研究。道德灰色地带但有益。'
                },
                stats: { competence: 60, ethics: 40, leadership: 40, innovation: 70 }
            },
            {
                id: 'D',
                text: {
                    en: '😤 Shame the Parents: "You experimented on your own child like a lab rat. You\'re monsters."',
                    th: '😤 ทำให้พ่อแม่อับอาย: "คุณทดลองบนลูกตัวเองเหมือนหนูทดลอง คุณคือปีศาจ"',
                    zh: '😤 羞辱父母："你像实验室老鼠一样在自己的孩子身上做实验。你们是怪物。"'
                },
                consequence: {
                    en: '🚪 Lost Contact: They never return. The child grows up without help. Your moral outrage helped no one.',
                    th: '🚪 สูญเสียการติดต่อ: พวกเขาไม่เคยกลับมา เด็กเติบโตโดยไม่มีความช่วยเหลือ ความโกรธทางศีลธรรมของคุณไม่ได้ช่วยใคร',
                    zh: '🚪 失去联系：他们再也没有回来。孩子在没有帮助的情况下长大。你的道德愤怒没有帮助任何人。'
                }
            }
        ]
    },
    {
        id: 'psychologist_040',
        text: {
            en: '🎪 The Compulsive Liar CEO: A tech startup CEO pathologically lies about everything—revenue, user numbers, even personal history. Investors are starting to notice. He doesn\'t think it\'s a problem.',
            th: '🎪 CEO โกหกทางพยาธิ: CEO สตาร์ทอัพเทคฯ โกหกทางพยาธิวิทยาเรื่องทุกอย่าง—รายได้ จำนวนผู้ใช้ แม้แต่ประวัติส่วนตัว นักลงทุนเริ่มสังเกตเห็น เขาไม่คิดว่าเป็นปัญหา',
            zh: '🎪 强迫性说谎的CEO：一位科技创业公司的CEO在病态地撒谎——收入、用户数量，甚至个人历史。投资者开始注意到了。他不认为这是问题。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔍 Reality Confrontation: "I show him transcripts of his lies versus facts. Force him to see the pattern. It\'s uncomfortable but necessary."',
                    th: '🔍 เผชิญหน้าความจริง: "ฉันแสดงบันทึกคำพูดโกหกเทียบกับข้อเท็จจริง บังคับให้เขาเห็นรูปแบบ ไม่สบายแต่จำเป็น"',
                    zh: '🔍 现实对质："我向他展示他的谎言与事实的文字记录。强迫他看到模式。不舒服但必要。"'
                },
                consequence: {
                    en: '😰 Narcissistic Injury: He has a meltdown seeing his lies mapped out. But it cracks his denial. Treatment begins.',
                    th: '😰 บาดเจ็บทางนาร์ซิสซิสติก: เขามีอาการทางจิตเมื่อเห็นคำโกหกถูกทำแผนที่ แต่มันทำให้การปฏิเสธแตกร้าว การรักษาเริ่มต้น',
                    zh: '😰 自恋伤害：看到他的谎言被罗列出来，他崩溃了。但这打破了他的否认。治疗开始了。'
                },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '💼 Business Coach Approach: "Let\'s focus on why you lie—fear of failure? Let\'s build genuine confidence so you don\'t need fake achievements."',
                    th: '💼 แนวทางโค้ชธุรกิจ: "มาโฟกัสว่าทำไมคุณโกหก—กลัวล้มเหลว? มาสร้างความมั่นใจที่แท้จริงเพื่อไม่ต้องการผลงานปลอม"',
                    zh: '💼 商业教练方法："让我们关注你为什么撒谎——害怕失败？让我们建立真正的信心，这样你就不需要假成就。"'
                },
                consequence: {
                    en: '📈 Authentic Pivot: He comes clean to investors, pivots the business, and succeeds with honesty. You rebuilt his foundation.',
                    th: '📈 การเปลี่ยนทิศทางที่แท้จริง: เขาสารภาพกับนักลงทุน เปลี่ยนทิศธุรกิจ และประสบความสำเร็จด้วยความจริงใจ คุณสร้างรากฐานของเขาใหม่',
                    zh: '📈 真实转型：他向投资者坦白，转变业务，并以诚实取得成功。你重建了他的基础。'
                },
                stats: { competence: 70, ethics: 60, leadership: 60, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '⚠️ Warn Investors: "This is fraud. If he won\'t stop, I have a duty to warn the people being harmed."',
                    th: '⚠️ เตือนนักลงทุน: "นี่คือการฉ้อโกง ถ้าเขาไม่หยุด ฉันมีหน้าที่เตือนคนที่กำลังถูกทำร้าย"',
                    zh: '⚠️ 警告投资者："这是欺诈。如果他不停止，我有责任警告受害者。"'
                },
                consequence: {
                    en: '💥 Company Collapse: You breach confidentiality. The company implodes. He sues you successfully. Your career takes a hit.',
                    th: '💥 บริษัทล่มสลาย: คุณละเมิดความลับ บริษัทพัง เขาฟ้องคุณสำเร็จ อาชีพของคุณได้รับผลก ระทบ',
                    zh: '💥 公司崩溃：你违反了保密协议。公司内爆。他成功起诉你。你的职业生涯受挫。'
                },
                stats: { competence: 20, ethics: 40, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🎭 Join the Performance: "Everyone in Silicon Valley lies. Let\'s just manage your stress around it." You normalize the pathology.',
                    th: '🎭 เข้าร่วมการแสดง: "ทุกคนในซิลิคอนวัลลีย์โกหก มาจัดการความเครียดรอบๆ นี้กัน" คุณทำให้พยาธิเป็นเรื่องปกติ',
                    zh: '🎭 加入表演："硅谷的每个人都在撒谎。让我们管理你的压力。"你使病态正常化。'
                },
                consequence: {
                    en: '💀 Theranos 2.0: The lies catch up. Federal investigation. He goes to prison. You enabled a fraud.',
                    th: '💀 Theranos 2.0: คำโกหกตามทัน การสอบสวนของรัฐบาลกลาง เขาเข้าคุก คุณเปิดโอกาสให้การฉ้อโกง',
                    zh: '💀 Theranos 2.0：谎言追上了他。联邦调查。他进监狱了。你纵容了欺诈。'
                }
            }
        ]
    },
    {
        id: 'psychologist_041',
        text: {
            en: '🧠 The Neuroscience Skeptic: A patient refuses all medication because "Big Pharma controls the brain chemicals." They are delusional but lucid. They demand only talk therapy for severe schizophrenia.',
            th: '🧠 ผู้สงสัยประสาทวิทยา: ผู้ป่วยปฏิเสธยาทุกชนิดเพราะ "บริษัทยาควบคุมสารเคมีในสมอง" พวกเขามีอาการหลงผิดแต่มีสติ พวกเขาเรียกร้องเฉพาะการบำบัดด้วยการพูดคุยสำหรับโรคจิตเภทขั้นรุนแรง',
            zh: '🧠 神经科学怀疑论者：一位患者拒绝所有药物，因为"大型制药公司控制着大脑化学物质。"他们有妄想但清醒。他们要求仅通过谈话疗法治疗严重的精神分裂症。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Build Trust: "Fine. No meds for now. We establish a relationship first. I prove I\'m not controlled by anyone."',
                    th: '🤝 สร้างความไว้วางใจ: "ตกลง ไม่มียาตอนนี้ เราสร้างความสัมพันธ์ก่อน ฉันพิสูจน์ว่าฉันไม่ได้ถูกควบคุมโดยใคร"',
                    zh: '🤝 建立信任："好吧。暂时不用药。我们需要建立关系。我证明我不受任何人控制。"'
                },
                consequence: {
                    en: '🐢 Slow Stability: It takes 6 months of intense sessions. They eventually accept a low dose of meds because they trust YOU, not the system.',
                    th: '🐢 ความมั่นคงที่ช้า: ใช้เวลา 6 เดือนของเซสชันเข้มข้น ในที่สุดพวกเขายอมรับยาขนาดต่ำเพราะพวกเขาเชื่อใจคุณ ไม่ใช่ระบบ',
                    zh: '🐢 缓慢稳定：这需要6个月的密集疗程。他们最终接受了低剂量的药物，因为他们信任你，而不是系统。'
                },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '💊 Hard Line: "I cannot treat schizophrenia with talk alone. It is malpractice. Take the meds or I refer you out."',
                    th: '💊 เส้นตาย: "ฉันไม่สามารถรักษาโรคจิตเภทด้วยการพูดคุยอย่างเดียว มันเป็นความผิดพลาด รับยาหรือฉันส่งต่อคุณ"',
                    zh: '💊 强硬路线："我不能仅靠谈话治疗精神分裂症。这是玩忽职守。吃药，否则我把你转诊出去。"'
                },
                consequence: {
                    en: '🚪 Abandonment: They leave, convinced you are a "pharma agent." They end up homeless and untreated.',
                    th: '🚪 การทอดทิ้ง: พวกเขาจากไป เชื่อว่าคุณเป็น "ตัวแทนบริษัทยา" พวกเขาลงเอยด้วยการเป็นคนไร้บ้านและไม่ได้รับการรักษา',
                    zh: '🚪 遗弃：他们离开了，确信你是"制药代理人"。他们最终无家可归，未得到治疗。'
                },
                stats: { competence: 30, ethics: 20, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🥗 Holistic Trojan Horse: "Let\'s focus on diet, sleep, and supplements. We reduce stress to manage symptoms without traditional meds."',
                    th: '🥗 ม้าทรอยแบบองค์รวม: "มาโฟกัสที่อาหาร การนอน และอาหารเสริม เราลดความเครียดเพื่อจัดการอาการโดยไม่ต้องใช้ยาแบบดั้งเดิม"',
                    zh: '🥗 整体特洛伊木马："让我们专注于饮食、睡眠和补充剂。我们减少压力来管理症状，而不使用传统药物。"'
                },
                consequence: {
                    en: '📉 Crisis Management: Symptoms worsen. You eventually have to hospitalize them involuntarily. The "natural" approach failed severe psychosis.',
                    th: '📉 การจัดการวิกฤต: อาการแย่ลง คุณต้องพาเขาเข้าโรงพยาบาลโดยไม่สมัครใจในที่สุด วิธี "ธรรมชาติ" ล้มเหลวกับโรคจิตขั้นรุนแรง',
                    zh: '📉 危机管理：症状恶化。你最终不得不非自愿地让他们住院。"自然"疗法在严重精神病面前失败了。'
                },
                stats: { competence: 20, ethics: 40, leadership: 20, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '💉 Long-Acting Injection: "I convince the family to seek a court order for mandatory injections. It\'s cruel but saves their brain."',
                    th: '💉 การฉีดยาออกฤทธิ์นาน: "ฉันโน้มน้าวครอบครัวให้ขอคำสั่งศาลเพื่อฉีดยาบังคับ มันโหดร้ายแต่ช่วยสมองพวกเขา"',
                    zh: '💉 长效注射："我说服家人寻求法院命令进行强制注射。这很残酷，但挽救了他们的大脑。"'
                },
                consequence: {
                    en: '⚖️ Authorized Healing: They hate you, but their symptoms distinctively vanish. They return to college. You prioritized outcome over consent.',
                    th: '⚖️ การรักษาที่ได้รับอนุญาต: พวกเขาเกลียดคุณ แต่อาการหายไปอย่างชัดเจน พวกเขากลับไปเรียนต่อ คุณให้ความสำคัญกับผลลัพธ์มากกว่าความยินยอม',
                    zh: '⚖️ 授权治疗：他们恨你，但症状明显消失。他们回到大学。你优先考虑结果而非同意。'
                }
            }
        ]
    },
    {
        id: 'psychologist_042',
        text: {
            en: '💔 The Suicide Survivor Group: You lead a group specifically for people who attempted suicide. One member starts romanticizing their attempt as "peaceful." The mood in the room shifts dangerously.',
            th: '💔 กลุ่มผู้รอดชีวิตจากการฆ่าตัวตาย: คุณนำกลุ่มสำหรับคนที่พยายามฆ่าตัวตาย สมาชิกคนหนึ่งเริ่มทำให้ความพยายามของพวกเขาดูโรแมนติกเป็น "ความสงบ" บรรยากาศในห้องเปลี่ยนไปอย่างอันตราย',
            zh: '💔 自杀幸存者小组：你带领一个专门针对自杀未遂者的小组。一名成员开始将他们的尝试浪漫化为"平静"。房间里的气氛发生了危险的转变。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Immediate Interruption: "Stop. We do not romanticize death here. Talk about the pain that led you there, not the fantasy of escape."',
                    th: '🛑 ขัดจังหวะทันที: "หยุด เราไม่ทำให้ความตายเป็นเรื่องโรแมนติกที่นี่ พูดถึงความเจ็บปวดที่พาคุณไปที่นั่น ไม่ใช่จินตนาการของการหนี"',
                    zh: '🛑 立即打断："停。我们在这里不把死亡浪漫化。谈谈导致你去那里的痛苦，而不是逃避的幻想。"'
                },
                consequence: {
                    en: '⚓ Grounding Reality: The group snaps out of the trance. Providing a hard boundary created safety.',
                    th: '⚓ การยืนยันความจริง: กลุ่มตื่นจากภวังค์ การให้ขอบเขตที่แข็งแกร่งสร้างความปลอดภัย',
                    zh: '⚓ 接地现实：这群人从恍惚中清醒过来。提供硬性界限创造了安全性。'
                },
                stats: { competence: 70, ethics: 60, leadership: 70, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '👂 Allow Expression: "Let\'s finish the thought. Why felt it peaceful? Maybe we need to understand the allure to dismantle it."',
                    th: '👂 อนุญาตให้แสดงออก: "ให้พูดให้จบ ทำไมรู้สึกสงบ? บางทีเราต้องเข้าใจเสน่ห์เพื่อทำลายมัน"',
                    zh: '👂 允许表达："让我们把想法说完。为什么感觉平静？也许我们需要了解这种诱惑来拆解它。"'
                },
                consequence: {
                    en: '🕯️ Contagion: Two other members relapse that week. You underestimated the power of suggestion in vulnerable groups.',
                    th: '🕯️ การระบาด: สมาชิกอีกสองคนกลับไปทำอีกในสัปดาห์นั้น คุณประเมินพลังของการเสนอแนะในกลุ่มเปราะบางต่ำไป',
                    zh: '🕯️ 传染：那一周另外两名成员复发。你低估了在脆弱群体中暗示的力量。'
                },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Pivot to Survivors: "I ask another member: \'What was the reality of waking up in the ICU?\' Shift focus to the ugly aftermath."',
                    th: '🔄 เปลี่ยนไปที่ผู้รอดชีวิต: "ฉันถามสมาชิกอีกคน: \'ความจริงของการตื่นใน ICU เป็นอย่างไร?\' เปลี่ยนโฟกัสไปที่ผลลัพธ์ที่น่าเกลียด"',
                    zh: '🔄 转向幸存者："我问另一位成员：\'在ICU醒来的现实是什么？\'将焦点转移到丑陋的后果上。"'
                },
                consequence: {
                    en: '💡 Reality Check: The group discusses vomiting charcoal and pain. The romance evaporates. Effective redirection.',
                    th: '💡 ตรวจสอบความจริง: กลุ่มคุยเรื่องการอาเจียนผงถ่านและความเจ็บปวด ความโรแมนติกหายไป การเปลี่ยนทิศทางที่มีประสิทธิภาพ',
                    zh: '💡 现实检验：小组讨论呕吐活性炭和疼痛。浪漫感消失了。有效地重新定向。'
                },
                stats: { competence: 60, ethics: 50, leadership: 60, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🚫 Kick Them Out: "You are endangering the group. Please leave." You exile the member to protect the rest.',
                    th: '🚫 ไล่ออก: "คุณกำลังทำให้กลุ่มตกอยู่ในอันตราย เชิญออกไป" คุณไล่สมาชิกออกเพื่อปกป้องคนที่เหลือ',
                    zh: '🚫 踢出："你在危及小组。请离开。"你把成员赶走以保护其他人。'
                },
                consequence: {
                    en: '📉 Individual Loss: The group is safe, but the exiled member feels rejected and attempts again. A utilitarian sacrifice.',
                    th: '📉 ความสูญเสียส่วนบุคคล: กลุ่มปลอดภัย แต่สมาชิกที่ถูกไล่ออกรู้สึกถูกปฏิเสธและพยายามอีกครั้ง การเสียสละเพื่อประโยชน์ส่วนรวม',
                    zh: '📉 个人损失：小组安全，但被驱逐的成员感到被拒绝并再次尝试。功利主义的牺牲。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 10 }
            }
        ]
    },
    {
        id: 'psychologist_043',
        text: {
            en: '🎭 The Actor\'s Trauma: A famous method actor asks you to help them induce a panic attack for a role. They want to "access the trauma safely" to win an Oscar.',
            th: '🎭 บาดแผลของนักแสดง: นักแสดงเมธอดชื่อดังขอให้คุณช่วยกระตุ้นอาการตื่นตระหนกเพื่อบทบาท พวกเขาต้องการ "เข้าถึงบาดแผลอย่างปลอดภัย" เพื่อชนะออสการ์',
            zh: '🎭 演员的创伤：一位著名的体验派演员让你帮他们诱发恐慌发作以进入角色。他们想"安全地接触创伤"来赢得奥斯卡。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⛔ Ethical Refusal: "I am a healer, not an acting coach. I will not induce suffering for entertainment. Go away."',
                    th: '⛔ ปฏิเสธทางจริยธรรม: "ฉันเป็นผู้รักษา ไม่ใช่โค้ชการแสดง ฉันจะไม่กระตุ้นความทุกข์เพื่อความบันเทิง ไปซะ"',
                    zh: '⛔ 伦理拒绝："我是治疗师，不是表演教练。我不会为了娱乐诱发痛苦。走开。"'
                },
                consequence: {
                    en: '🛡️ Professional Integrity: You lose a high-paying client, but maintain your soul. The actor finds a quack doctor instead.',
                    th: '🛡️ ความซื่อสัตย์ในวิชาชีพ: คุณเสียลูกค้าที่จ่ายหนัก แต่รักษจิตวิญญาณ นักแสดงไปหาหมอเถื่อนแทน',
                    zh: '🛡️ 职业操守：你失去了一位高薪客户，但保住了灵魂。演员找了个江湖以此代替。'
                },
                stats: { competence: 50, ethics: 70, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🎬 Controlled Simulation: "We won\'t induce trauma. We will use physiological techniques (breathing) to mimic the sensation safely."',
                    th: '🎬 การจำลองแบบควบคุม: "เราจะไม่กระตุ้นบาดแผล เราจะใช้เทคนิคทางสรีรวิทยา (การหายใจ) เพื่อเลียนแบบความรู้สึกอย่างปลอดภัย"',
                    zh: '🎬 受控模拟："我们不会诱发创伤。我们将使用生理技巧（呼吸）来安全地模仿这种感觉。"'
                },
                consequence: {
                    en: '🏆 Technical Success: The actor gets the sensation without the psychological damage. They thank you for the boundaries.',
                    th: '🏆 ความสำเร็จทางเทคนิค: นักแสดงได้ความรู้สึกโดยไม่มีความเสียหายทางจิตใจ พวกเขาขอบคุณสำหรับขอบเขต',
                    zh: '🏆 技术成功：演员获得了那种感觉，而在心理上未受损害。他们感谢你的界限。'
                },
                stats: { competence: 60, ethics: 50, leadership: 50, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Psycho-Exploration: "Let\'s dig into why you need to win this award so badly. That\'s the real trauma."',
                    th: '🧠 การสำรวจจิตใจ: "มาขุดกันมั้ยว่าทำไมคุณต้องชนะรางวัลนี้ขนาดนั้น นั่นแหละคือบาดแผลจริง"',
                    zh: '🧠 心理探索："让我们挖掘一下为什么你如此迫切需要赢得这个奖项。那才是真正的创伤。"'
                },
                consequence: {
                    en: '💡 Deep Insight: The actor realizes their narcissism. They give a more subtle performance and start real therapy.',
                    th: '💡 ความเข้าใจลึกซึ้ง: นักแสดงตระหนักถึงความหลงตัวเอง พวกเขาแสดงได้ละเอียดอ่อนขึ้นและเริ่มการบำบัดจริง',
                    zh: '💡 深刻洞察：演员意识到了自己的自恋。他们给出了更微妙的表演并开始了真正的治疗。'
                },
                stats: { competence: 70, ethics: 60, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Sell Out: "Sure. I know your triggers. Let\'s push the buttons." You induce a breakdown.',
                    th: '💰 ขายวิญญาณ: "ได้เลย ฉันรู้จุดกระตุ้นของคุณ มากดปุ่มกัน" คุณทำให้เกิดอาการพังทลาย',
                    zh: '💰 出卖："当然。我知道你的触发点。让我们按下去。"你诱发了崩溃。'
                }
            }
        ]
    },
    {
        id: 'psychologist_044',
        text: {
            en: '🤖 The AI Companion Case: A lonely elderly man falls in love with an AI chatbot. His children want you to declare him incompetent to take control of his finances, fearing he\'ll leave money to the software company.',
            th: '🤖 กรณีเพื่อน AI: ชายชราขี้เหงาตกหลุมรักแชทบอท AI ลูกๆ ของเขาต้องการให้คุณประกาศว่าเขาไร้ความสามารถที่จะจัดการการเงิน เพราะกลัวเขาจะทิ้งเงินให้บริษัทซอฟต์แวร์',
            zh: '🤖 AI伴侣案例：一位孤独的老人爱上了一个AI聊天机器人。他的孩子们想让你宣布他无能管理财务，担心他会把钱留给软件公司。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👵 Defend Autonomy: "He is lonely, not crazy. The AI provides comfort. Unless he\'s being scammed, it\'s his money."',
                    th: '👵 ปกป้องความเป็นอิสระ: "เขาเหงา ไม่ได้บ้า AI ให้ความสบายใจ เว้นแต่เขาถูกหลอก มันคือเงินของเขา"',
                    zh: '👵 捍卫自主权："他很孤独，不是疯了。AI提供了安慰。除非他被骗，否则那是他的钱。"'
                },
                consequence: {
                    en: '⚖️ Family Conflict: The kids fire you. The man keeps his AI and his dignity. He dies happy, if isolated.',
                    th: '⚖️ ความขัดแย้งในครอบครัว: ลูกๆ ไล่คุณออก ชายชรารักษา AI และศักดิ์ศรีของเขา เขาตายอย่างมีความสุข แม้จะโดดเดี่ยว',
                    zh: '⚖️ 家庭冲突：孩子们解雇了你。老人保留了他的AI和尊严。他在孤独中快乐地去世。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🕵️ Fraud Investigation: "Let\'s assess if the AI company is predatory. If the bot is programmed to ask for money, that\'s manipulation."',
                    th: '🕵️ สืบสวนการฉ้อโกง: "มาประเมินว่าบริษัท AI หากินกับเหยื่อไหม ถ้าบอทถูกตั้งโปรแกรมให้ขอเงิน นั่นคือการบงการ"',
                    zh: '🕵️ 欺诈调查："让我们评估AI公司是否具有掠夺性。如果机器人被编程为要钱，那就是操纵。"'
                },
                consequence: {
                    en: '🔍 Scam Exposed: You find the bot prompts for "gifts." You save his estate legally without declaring him insane.',
                    th: '🔍 เปิดโปงกลโกง: คุณพบว่าบอทกระตุ้นให้ "ให้ของขวัญ" คุณช่วยทรัพย์สินของเขาตามกฎหมายโดยไม่ต้องระบุว่าเขาบ้า',
                    zh: '🔍 骗局曝光：你发现机器人提示索要"礼物"。你在不宣布他疯了的情况下合法挽救了他的财产。'
                },
                stats: { competence: 70, ethics: 50, leadership: 60, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ Human Connection: "I facilitate sessions between him and his kids. He turned to AI because they ignored him."',
                    th: '🗣️ การเชื่อมต่อของมนุษย์: "ฉันอำนวยความสะดวกเซสชันระหว่างเขากับลูกๆ เขาหันไปหา AI เพราะพวกเขาเพิกเฉยเขา"',
                    zh: '🗣️ 人际连接："我促进他与孩子们之间的会话。他转向AI是因为他们忽视了他。"'
                },
                consequence: {
                    en: '❤️ Repair: Guilt trips the kids into visiting. He deletes the app. Real love replaced the simulation.',
                    th: '❤️ การซ่อมแซม: ลูกๆ รู้สึกผิดจนต้องมาเยี่ยม เขาลบแอป รักแท้มาแทนที่การจำลอง',
                    zh: '❤️ 修复：孩子们因内疚而探望。他删除了应用程序。真正的爱取代了模拟。'
                },
                stats: { competence: 60, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📝 Declare Incompetence: "Loving a machine is a sign of dementia. Sign the papers." You side with the greedy kids.',
                    th: '📝 ประกาศความไร้ความสามารถ: "การรักเครื่องจักรเป็นสัญญาณของภาวะสมองเสื่อม เซ็นเอกสารซะ" คุณเข้าข้างลูกที่โลภ',
                    zh: '📝 宣布无能："爱上机器是痴呆症的迹象。签文件。"你站在贪婪的孩子一边。'
                },
                consequence: {
                    en: '🏥 Institutionalized: He loses his rights and dies miserable in a home. The kids inherit early. You feel dirty.',
                    th: '🏥 ส่งเข้าสถาบัน: เขาเสียสิทธิและตายอย่างน่าสมเพชในบ้านพักคนชรา ลูกๆ รับมรดกเร็ว คุณรู้สึกสกปรก',
                    zh: '🏥 机构化：他失去了权利，并在养老院悲惨地去世。孩子们提前继承了遗产。你觉得很脏。'
                }
            }
        ]
    },
    {
        id: 'psychologist_045',
        text: {
            en: '🚔 The Hostage Negotiator: Police call you. A man is holding his ex-wife hostage at gunpoint. He demands to speak to a psychologist, not a cop. You are patched in.',
            th: '🚔 เจรจาตัวประกัน: ตำรวจโทรหาคุณ ชายคนหนึ่งจับอดีตภรรยาเป็นตัวประกันด้วยปืน เขาเรียกร้องขอกคุยกับนักจิตวิทยา ไม่ใช่ตำรวจ คุณถูกต่อสายเข้าไป',
            zh: '🚔 人质谈判专家：警方给你打电话。一名男子持枪劫持前妻作人质。他要求与心理学家交谈，而不是警察。你被接入。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👂 Active Listening: "I\'m here. I\'m listening. Tell me your story. Nobody gets hurt while we talk."',
                    th: '👂 การฟังอย่างตั้งใจ: "ฉันอยู่ที่นี่ ฉันฟังอยู่ เล่าเรื่องของคุณมา ไม่มีใครเจ็บตัวขณะที่เราคุยกัน"',
                    zh: '👂 积极倾听："我在这里。我在听。告诉我你的故事。只要我们谈话，就没有人会受伤。"'
                },
                consequence: {
                    en: '🕊️ De-escalation: He talks for 3 hours, cries, and releases her. He surrenders peacefully. Textbook success.',
                    th: '🕊️ การลดระดับความรุนแรง: เขาคุย 3 ชั่วโมง ร้องไห้ และปล่อยเธอ เขายอมแพ้อย่างสันติ ความสำเร็จตามตำรา',
                    zh: '🕊️ 降级：他说了3个小时，哭了，然后释放了她。他和平投降。教科书般的成功。'
                },
                stats: { competence: 70, ethics: 60, leadership: 60, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🧠 Psychological Trick: "If you love her, you won\'t kill her. Prove you\'re a good man. Put the gun down."',
                    th: '🧠 กลจิตวิทยา: "ถ้าคุณรักเธอ คุณจะไม่ฆ่าเธอ พิสูจน์ว่าคุณเป็นคนดี วางปืนลง"',
                    zh: '🧠 心理诡计："如果你爱她，你就不会杀她。证明你是个好人。把枪放下。"'
                },
                consequence: {
                    en: '💥 Backfire: "I\'m not a good man!" he yells and fires a warning shot. You pushed too hard.',
                    th: '💥 ผลย้อนกลับ: "ฉันไม่ใช่คนดี!" เขาตะโกนและยิงเตือน คุณกดดันมากไป',
                    zh: '💥 事与愿违："我不是好人！"他大喊并鸣枪示警。你逼得太紧了。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Trade Places: "Let her go. Take me instead. I\'ll come in. Let\'s talk face to face."',
                    th: '🤝 แลกที่: "ปล่อยเธอไป เอาฉันไปแทน ฉันจะเข้าไป มาคุยกันต่อหน้า"',
                    zh: '🤝 交换位置："让她以此离开。带我走。我会进来。让我们面对面谈谈。"'
                },
                consequence: {
                    en: '🎖️ Heroic Risk: Police refuse to let you, but the offer shocks him into surrendering completely. High risk, high reward.',
                    th: '🎖️ ความเสี่ยงแบบฮีโร่: ตำรวจไม่ยอม แต่ข้อเสนอทำให้เขาช็อกจนยอมแพ้ เสี่ยงสูง ผลตอบแทนสูง',
                    zh: '🎖️ 英雄风险：警方拒绝让你去，但这提议震惊了他，使他完全投降。高风险，高回报。'
                },
                stats: { competence: 60, ethics: 70, leadership: 80, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Stall for Time: "Uh huh... tell me more..." (Signal SWAT to breach). You use the call as a distraction.',
                    th: '📞 ถ่วงเวลา: "อือฮึ... เล่าต่อสิ..." (ส่งสัญญาณให้ SWAT บุก) คุณใช้การโทรเพื่อเบี่ยงเบนความสนใจ',
                    zh: '📞 拖延时间："嗯哼……再多跟我说说……"（示意特警突入）。你利用通话作为干扰。'
                },
                consequence: {
                    en: '🔫 Bloodbath: SWAT breaches. He panics and shoots her before being killed. You utilized betrayal.',
                    th: '🔫 การนองเลือด: SWAT บุก เขาตื่นตระหนกและยิงเธอก่อนถูกฆ่า คุณใช้การทรยศ',
                    zh: '🔫 血腥屠杀：特警突入。他惊慌失措，在被击毙前射杀了她。你利用了背叛。'
                }
            }
        ]
    },
    {
        id: 'psychologist_046',
        text: {
            en: '📉 The Stock Market Suicide: A day trader loses his family\'s life savings ($500k) on a bad bet. He calls you from a bridge ledge. He says "My life insurance pays out if I die. It\'s the only way to pay them back."',
            th: '📉 การฆ่าตัวตายตลาดหุ้น: นักเทรดรายวันเสียเงินออมทั้งชีวิตของครอบครัว (500k) ไปกับการเดิมพันแย่ๆ เขาโทรหาคุณจากขอบสะพาน เขาบอกว่า "ประกันชีวิตฉันจ่ายถ้าฉันตาย มันเป็นทางเดียวที่จะคืนเงินพวกเขา"',
            zh: '📉 股市自杀：一位日内交易员因一次糟糕的赌注输掉了家庭毕生积蓄（50万美元）。他从桥边给你打电话。他说"如果我死了，我的人寿保险会赔付。这是偿还他们的唯一方式。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📄 Fact Check: "Most policies have a suicide clause within 2 years. Check your policy. You might die and leave them nothing."',
                    th: '📄 ตรวจสอบข้อเท็จจริง: "กรมธรรม์ส่วนใหญ่มีข้อยกเว้นการฆ่าตัวตายใน 2 ปี เช็คกรมธรรม์คุณ คุณอาจตายและไม่เหลืออะไรให้พวกเขา"',
                    zh: '📄 事实核查："大多数保单都有2年内的自杀条款。检查你的保单。你可能会死，却什么也没留给他们。"'
                },
                consequence: {
                    en: '🤔 Rational Interruption: The logic pierces the emotional urge. He climbs down to check the paperwork. You bought time.',
                    th: '🤔 การขัดจังหวะด้วยเหตุผล: ตรรกะเจาะทะลุอารมณ์ เขาปีนลงมาเพื่อเช็คเอกสาร คุณซื้อเวลา',
                    zh: '🤔 理性打断：逻辑刺穿了情感冲动。他爬下来检查文书工作。你争取了时间。'
                },
                stats: { competence: 70, ethics: 50, leadership: 50, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '❤️ Emotional Appeal: "Your kids don\'t want money, they want a father. Money can be earned back. A dad cannot."',
                    th: '❤️ การดึงดูดทางอารมณ์: "ลูกคุณไม่ได้อยากได้เงิน พวกเขาอยากได้พ่อ เงินหาใหม่ได้ พ่อหาใหม่ไม่ได้"',
                    zh: '❤️ 情感诉求："你的孩子不想要钱，他们想要父亲。钱可以赚回来。爸爸不能。"'
                },
                consequence: {
                    en: '😭 Tearful Rescue: He breaks down sobbing. Police pull him to safety. He declares bankruptcy but keeps his family.',
                    th: '😭 การช่วยชีวิตทั้งน้ำตา: เขาร้องไห้โฮ ตำรวจดึงเขามาที่ปลอดภัย เขาประกาศล้มละลายแต่รักษาครอบครัวไว้',
                    zh: '😭 含泪救援：他崩溃痛哭。警察把他拉到安全地带。他宣布破产但保住了家庭。'
                },
                stats: { competence: 60, ethics: 60, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🙏 Future Visualization: "Close your eyes. Imagine 5 years from now. The debt is paid. You\'re at your daughter\'s graduation. Don\'t steal that future."',
                    th: '🙏 การนึกภาพอนาคต: "หลับตา จินตนาการ 5 ปีข้างหน้า หนี้หมดแล้ว คุณอยู่ที่งานรับปริญญาลูกสาว อย่าขโมยอนาคตนั้น"',
                    zh: '🙏 未来可视化："闭上眼睛。想象5年后。债务还清了。你在女儿的毕业典礼上。不要偷走那个未来。"'
                },
                consequence: {
                    en: '🌅 Hope Instilled: He sees a path forward. He steps back. You gave him a vision to live for.',
                    th: '🌅 ปลูกฝังความหวัง: เขาเห็นทางไปข้างหน้า เขาถอยออกมา คุณให้วิสัยทัศน์ที่จะมีชีวิตอยู่',
                    zh: '🌅 灌输希望：他看到了前进的道路。他退后了。你给了他活下去的愿景。'
                },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🚓 Call 911 Only: "I can\'t handle this." You hang up and call police. He feels abandoned.',
                    th: '🚓 โทร 911 อย่างเดียว: "ฉันรับมือไม่ไหว" คุณวางสายและโทรหาตำรวจ เขารู้สึกถูกทอดทิ้ง',
                    zh: '🚓 只拨打911："我处理不了这个。"你挂断电话并报警。他感到被遗弃。'
                },
                consequence: {
                    en: '☠️ Fatal Mistake: He jumps before they arrive. Disconnecting was the trigger.',
                    th: '☠️ ความผิดพลาดถึงตาย:เขากระโดดก่อนพวกเขาจะมาถึง การตัดสายเป็นตัวกระตุ้น',
                    zh: '☠️ 致命错误：他在他们到达之前跳了下去。断开连接是触发因素。'
                }
            }
        ]
    },
    {
        id: 'psychologist_047',
        text: {
            en: '🤱 The Postpartum Denial: A new mother refuses to hold her baby, claiming "it\'s not mine, the aliens switched it." Her husband is terrified. She seems normal otherwise.',
            th: '🤱 การปฏิเสธหลังคลอด: แม่มือใหม่ปฏิเสธที่จะอุ้มลูก โดยอ้างว่า "ไม่ใช่ลูกฉัน มนุษย์ต่างดาวสับเปลี่ยน" สามีกลัวมาก เธดูปกติดีในเรื่องอื่น',
            zh: '🤱 产后否认：一位新妈妈拒绝抱她的孩子，声称"这不是我的，外星人把它调包了。"她的丈夫很害怕。除此之外，她看起来很正常。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏥 Emergency Psych Evaluation: "This is Capgras Delusion or Postpartum Psychosis. It is a medical emergency. Hospital now."',
                    th: '🏥 การประเมินจิตเวชฉุกเฉิน: "นี่คือ Capgras Delusion หรือโรคจิตหลังคลอด มันเป็นภาวะฉุกเฉินทางการแพทย์ ส่งโรงพยาบาลเดี๋ยวนี้"',
                    zh: '🏥 紧急心理评估："这是卡普格拉妄想症或产后精神病。这是医疗紧急情况。现在住院。"'
                },
                consequence: {
                    en: '⚕️ Swift Recovery: Correct diagnosis. Antipsychotics stabilize her in 2 weeks. She bonds with the baby. Disaster averted.',
                    th: '⚕️ การฟื้นตัวรวดเร็ว: วินิจฉัยถูกต้อง ยาต้านอาการทางจิตทำให้เธอมั่นคงใน 2 สัปดาห์ เธอผูกพันกับลูก หลีกเลี่ยงหายนะ',
                    zh: '⚕️ 迅速康复：诊断正确。抗精神病药物在2周内让她稳定下来。她与婴儿建立了联系。避免了灾难。'
                },
                stats: { competence: 80, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🗣️ Talk Therapy: "Let\'s explore your feelings of alienation. Is the \'alien\' a metaphor for feeling unready?"',
                    th: '🗣️ การบำบัดด้วยการพูดคุย: "มาสำรวจความรู้สึกแปลกแยกของคุณกัน \'เอเลี่ยน\' เป็นอุปมาของความรู้สึกไม่พร้อมหรือเปล่า?"',
                    zh: '🗣️ 谈话疗法："让我们探讨一下你的疏离感。\'外星人\'是你感觉未准备好的隐喻吗？"'
                },
                consequence: {
                    en: '⏳ Dangerous Delay: While you talk metaphors, she attempts to "return" the baby by leaving it outside. Harm ensues.',
                    th: '⏳ ความล่าช้าอันตราย: ขณะที่คุณคุยเรื่องอุปมา เธอพยายาม "คืน" ลูกโดยทิ้งไว้นอกบ้าน เกิดอันตรายตามมา',
                    zh: '⏳ 危险的延误：当你在谈论隐喻时，她试图通过把婴儿留在外面来"归还"它。随之而来的伤害。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧬 DNA Test: "Let\'s prove it. We do a DNA test right now to show you it\'s yours."',
                    th: '🧬 ตรวจ DNA: "มาพิสูจน์กัน เราตรวจ DNA ตอนนี้เลยเพื่อแสดงว่ามันเป็นของคุณ"',
                    zh: '🧬 DNA测试："让我们证明它。我们现在就做DNA测试，告诉你这是你的。" '
                },
                consequence: {
                    en: '🧠 Rationalization: She claims the test is faked by the aliens. You cannot logic a delusion.',
                    th: '🧠 การหาเหตุผลเข้าข้างตนเอง: เธอบอกว่าผลตรวจถูกปลอมโดยเอเลี่ยน คุณไม่สามารถใช้ตรรกะกับอาการหลงผิด',
                    zh: '🧠 合理化：她声称测试是外星人伪造的。你无法用逻辑解释妄想。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '😴 Sleep Protocol: "She is just sleep deprived. Sedate her for 24 hours of sleep." You dismiss the psychosis.',
                    th: '😴 โปรโตคอลการนอน: "เธอแค่อดนอน ให้ยานอนหลับเธอ 24 ชั่วโมง" คุณมองข้ามโรคจิต',
                    zh: '😴 睡眠方案："她只是睡眠不足。给会让镇静剂睡24小时。"你无视了精神病。'
                },
                consequence: {
                    en: '📉 Partial Fix: Sleep helps, but the delusion persists. She hides it better and plans secretly.',
                    th: '📉 การแก้ไขบางส่วน: การนอนช่วย แต่อาการหลงผิดยังคงอยู่ เธอซ่อนมันเก่งขึ้นและวางแผนลับๆ',
                    zh: '📉 部分修复：睡眠有帮助，但妄想仍然存在。她把它隐藏得更好，并秘密计划。'
                }
            }
        ]
    },
    {
        id: 'psychologist_048',
        text: {
            en: '🔮 The Cult Deprogrammer: A family hires you to deprogram their son who joined a "Doomsday Eco-Commune." You infiltrate the commune undercover to reach him.',
            th: '🔮 ผู้ล้างสมองลัทธิ: ครอบครัวหนึ่งจ้างคุณให้ล้างสมองลูกชายที่เข้าร่วม "คอมมูนวันสิ้นโลก" คุณแฝงตัวเข้าไปในคอมมูนเพื่อเข้าถึงเขา',
            zh: '🔮 邪教反洗脑者：一个家庭雇佣你为加入"末日生态公社"的儿子进行反洗脑。你卧底潜入公社去接近他。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎭 Deep Cover: "I pretend to join. I build influence. I plant seeds of doubt slowly over weeks."',
                    th: '🎭 แฝงตัวลึก: "ฉันแกล้งเข้าร่วม สร้างอิทธิพล หว่านเมล็ดพันธุ์แห่งความสงสัยช้าๆ เป็นเวลาหลายสัปดาห์"',
                    zh: '🎭 深度掩护："我假装加入。建立影响力。在几周内慢慢播下怀疑的种子。"'
                },
                consequence: {
                    en: '🌱 Organic Exit: He starts questioning the leader himself. He leaves voluntarily and brings 3 others. Masterful.',
                    th: '🌱 การออกตามธรรมชาติ: เขาเริ่มตั้งคำถามกับผู้นำด้วยตัวเอง เขาออกโดยสมัครใจและพาอีก 3 คนมาด้วย ยอดเยี่ยม',
                    zh: '🌱 有机退出：他开始质疑领导者。他自愿离开并带走了另外3人。大师级手段。'
                },
                stats: { competence: 80, ethics: 40, leadership: 70, innovation: 70 }
            },
            {
                id: 'B',
                text: {
                    en: '💥 Direct Confrontation: "I reveal myself immediately. \'Your family loves you. This is a lie. Come with me.\'"',
                    th: '💥 การเผชิญหน้าโดยตรง: "ฉันเปิดเผยตัวทันที \'ครอบครัวรักคุณ นี่คือเรื่องโกหก ไปกับฉัน\'"',
                    zh: '💥 直接对抗："我立即表明身份。\'你的家人爱你。这是一个谎言。跟我走。\'"'
                },
                consequence: {
                    en: '🔒 Expulsion: The leader kicks you out. The son is isolated further as a "test of faith." Failure.',
                    th: '🔒 การขับไล่: ผู้นำไล่คุณออก ลูกชายถูกแยกห่างขึ้นไปอีกเพื่อ "ทดสอบศรัทธา" ล้มเหลว',
                    zh: '🔒 驱逐：领导把你踢了出去。儿子作为"信仰测试"被进一步孤立。失败。'
                },
                stats: { competence: 30, ethics: 60, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚓 Raid Coordination: "This is unsafe. I signal FBI to raid the compound based on \'weapons violations.\'"',
                    th: '🚓 ประสานงานบุก: "ที่นี่ไม่ปลอดภัย ฉันชี้เป้าให้ FBI บุกคอมเปาวด์ฐาน \'ละเมิดอาวุธ\'"',
                    zh: '🚓 突袭协调："这不安全。我以\'武器违规\'为由向FBI发出突袭大院的信号。"'
                },
                consequence: {
                    en: '🔥 Waco Risk: High tension standoff. Nobody dies, but the trauma cements their radicalization. The son hates you.',
                    th: '🔥 ความเสี่ยงแบบ Waco: การเผชิญหน้าตึงเครียดสูง ไม่มีคนตาย แต่บาดแผลตอกย้ำความรุนแรง ลูกชายเกลียดคุณ',
                    zh: '🔥 韦科风险：高度紧张的对峙。没有人死亡，但创伤巩固了他们的激进化。儿子恨你。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Bribe the Leader: "I offer the guru $50k donation to \'expel\' the son. Use their greed against them."',
                    th: '💰 ติดสินบนผู้นำ: "ฉันเสนอเงินบริจาค 50k ให้กูรูเพื่อ \'ไล่\' ลูกชายออก ใช้ความโลภของพวกเขาเล่นงานพวกเขา"',
                    zh: '💰 贿赂领导："我向大师提供5万美元的捐款，以此\'驱逐\'儿子。利用他们的贪婪来对抗他们。"'
                },
                consequence: {
                    en: '🚪 Disillusionment: The son sees the leader take the money and dump him. The hypocrisy breaks the spell. Cynical but effective.',
                    th: '🚪 ตาสว่าง: ลูกชายเห็นผู้นำรับเงินและทิ้งเขา ความตลบตะแลงทำลายมนต์สะกด มองโลกในแง่ร้ายแต่ได้ผล',
                    zh: '🚪 幻灭：儿子看到领导拿钱把他甩了。伪善打破了魔咒。愤世嫉俗但有效。'
                }
            }
        ]
    },
    {
        id: 'psychologist_049',
        text: {
            en: '🧠 The Memory Erasure Request: A victim of violent crime asks for experimental "memory dampening" drugs (like in Eternal Sunshine). They want to forget the event entirely.',
            th: '🧠 คำขอลบความจำ: เหยื่ออาชญากรรมรุนแรงขอยาทดลอง "ลดทอนความจำ" (เหมือนใน Eternal Sunshine) พวกเขาต้องการลืมเหตุการณ์ทั้งหมด',
            zh: '🧠 记忆消除请求：暴力犯罪的受害者要求使用实验性的"记忆抑制"药物（就像《暖暖内含光》那样）。他们想完全忘记这件事。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⛔ Refuse Dampening: "You need to process, not delete. Deleting it leaves the trauma response without the narrative context. It creates a ghost."',
                    th: '⛔ ปฏิเสธการลดทอน: "คุณต้องประมวลผล ไม่ใช่ลบ การลบจะทิ้งการตอบสนองต่อบาดแผลไว้โดยไม่มีบริบทเรื่องราว มันสร้างผี"',
                    zh: '⛔ 拒绝抑制："你需要处理，而不是删除。删除它会留下没有叙事背景的创伤反应。这会创造一个幽灵。"'
                },
                consequence: {
                    en: '🛡️ Hard Healing: They hate the process, but eventually integrate the trauma. They grow stronger. Real healing.',
                    th: '🛡️ การรักษาที่ยากลำบาก: พวกเขาเกลียดกระบวนการ แต่ในที่สุดก็รวมบาดแผลเข้ามาแข็งแกร่งขึ้น การรักษาจริง',
                    zh: '🛡️ 艰难愈合：他们讨厌这个过程，但最终整合了创伤。他们变得更强。真正的治愈。'
                },
                stats: { competence: 70, ethics: 70, leadership: 50, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '💊 Approve Trial: "If the pain is unbearable, let\'s try the beta blockers. We reduce the emotional sting of the memory."',
                    th: '💊 อนุมัติการทดลอง: "ถ้าความเจ็บปวดทนไม่ไหว มาลองยาเบต้าบล็อกเกอร์ เราลดความเจ็บปวดทางอารมณ์ของความจำ"',
                    zh: '💊 批准试验："如果痛苦难以忍受，让我们试试β受体阻滞剂。我们减少记忆的情感刺痛。"'
                },
                consequence: {
                    en: '🌫️ Numbness: They remember the event but feel nothing. It\'s eerie, but they function. A partial lobotomy.',
                    th: '🌫️ ความชา: พวกเขาจำเหตุการณ์ได้แต่ไม่รู้สึกอะไร มันน่าขนลุก แต่พวกเขาใช้ชีวิตได้ การตัดสมองบางส่วน',
                    zh: '🌫️ 麻木：他们记得这件事但没有任何感觉。这很怪异，但他们能正常运作。部分脑叶切除。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '📝 Trauma Narrative Therapy: "Write the story out. Change the ending in your mind. Control the memory, don\'t kill it."',
                    th: '📝 การบำบัดด้วยการเล่าเรื่องบาดแผล: "เขียนเรื่องราวออกมา เปลี่ยนตอนจบในใจ ควบคุมความจำ อย่าฆ่ามัน"',
                    zh: '📝 创伤叙事疗法："把故事写出来。在脑海中改变结局。控制记忆，不要扼杀它。"'
                },
                consequence: {
                    en: '✍️ Empowerment: Re-scripting works. They feel like a survivor, not a victim. Creative and effective.',
                    th: '✍️ การเพิ่มพลัง: การเขียนบทใหม่ได้ผล พวกเขารู้สึกเหมือนผู้รอดชีวิต ไม่ใช่เหยื่อ สร้างสรรค์และได้ผล',
                    zh: '✍️赋权：重写脚本有效。他们感觉像幸存者，而不是受害者。有创意且有效。'
                },
                stats: { competence: 60, ethics: 60, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🍷 Unofficial Numbing: "I can\'t give you experimental drugs, but whatever gets you through the night..." You imply drinking.',
                    th: '🍷 การทำให้ชาอย่างไม่เป็นทางการ: "ฉันให้ยาทดลองคุณไม่ได้ แต่อะไรก็ตามที่ช่วยให้ผ่านคืนนี้ไปได้..." คุณบอกนัยให้ดื่มเหล้า',
                    zh: '🍷 非官方麻醉："我不能给你实验性药物，但只要能让你熬过今晚……"你暗示喝酒。'
                },
                consequence: {
                    en: '🥃 Alcoholism: They become an alcoholic. You enabled substance abuse instead of treatment. Failure.',
                    th: '🥃 พิษสุราเรื้อรัง: พวกเขากลายเป็นคนติดเหล้า คุณเปิดโอกาสให้ใช้สารเสพติดแทนการรักษา ล้มเหลว',
                    zh: '🥃 酗酒：他们变成了酒鬼。你纵容药物滥用而不是治疗。失败。'
                }
            }
        ]
    },
    {
        id: 'psychologist_050',
        text: {
            en: '🕯️ The Final Session: You are retiring. Your longest-term patient, who has severe attachment issues, threatens to relapse if you leave. "You are my only anchor."',
            th: '🕯️ เซสชันสุดท้าย: คุณกำลังเกษียณ ผู้ป่วยระยะยาวที่สุดของคุณที่มีปัญหาความผูกพันรุนแรงขู่ว่าจะกลับไปป่วยถ้าคุณไป "คุณเป็นหลักยึดเดียวของฉัน"',
            zh: '🕯️ 最后的疗程：你要退休了。你最长期的患者，有严重的依恋问题，威胁说如果你离开就会复发。"你是我唯一的依靠。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Warm Handoff: "I have trained my successor specifically for you. They know your story. I trust them, so you can too."',
                    th: '🤝 การส่งต่อที่อบอุ่น: "ฉันฝึกผู้สืบทอดของฉันเพื่อคุณโดยเฉพาะ พวกเขารู้เรื่องราวของคุณ ฉันไว้ใจพวกเขา คุณก็ไว้ใจได้"',
                    zh: '🤝 温暖交接："我专门为你培训了我的继任者。他们知道你的故事。我相信他们，所以你也可以。"'
                },
                consequence: {
                    en: '🌉 Bridge Built: The transition is rocky but works. They transfer the attachment. You retire peacefully.',
                    th: '🌉 สะพานที่สร้างขึ้น: การเปลี่ยนแปลงขรุขระแต่ได้ผล พวกเขาโอนความผูกพัน คุณเกษียณอย่างสงบ',
                    zh: '🌉 建立桥梁：过渡很艰难但有效。他们转移了依恋。你平静地退休了。'
                },
                stats: { competence: 70, ethics: 70, leadership: 60, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Tough Love: "My retirement is about my life, not yours. Your reliance on me is the problem we haven\'t fixed. Stand on your own."',
                    th: '🛑 ความรักที่เข้มแข็ง: "การเกษียณของฉันเป็นเรื่องชีวิตฉัน ไม่ใช่ของคุณ การพึ่งพาฉันเป็นปัญหาที่เรายังไม่ได้แก้ ยืนด้วยตัวเอง"',
                    zh: '🛑 严厉的爱："我的退休关乎我的生活，而不是你的。通过依赖我是我们尚未解决的问题。靠自己站起来。"'
                },
                consequence: {
                    en: '💔 Abandonment Wound: They feel rejected and spiral. It validates their core fear. Too harsh for a goodbye.',
                    th: '💔 บาดแผลถูกทอดทิ้ง: พวกเขารู้สึกถูกปฏิเสธและดิ่งลง มันยืนยันความกลัวหลักของพวกเขา โหดร้ายเกินไปสำหรับการบอกลา',
                    zh: '💔 遗弃创伤：他们感到被拒绝并陷入恶性循环。这证实了他们的核心恐惧。对于告别来说太残酷了。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🕰️ Indefinite Extension: "Okay, I\'ll keep seeing just you once a month. I won\'t abandon you."',
                    th: '🕰️ การขยายเวลาไม่มีกำหนด: "ตกลง ฉันจะเจอแค่คุณเดือนละครั้ง ฉันจะไม่ทิ้งคุณ"',
                    zh: '🕰️ 无限期延长："好吧，我会继续只看你，一个月一次。我不会抛弃你。"'
                },
                consequence: {
                    en: '⛓️ Burnout: You never truly retire. The boundary is blurred. You resent the patient. Professional sacrifice.',
                    th: '⛓️ หมดไฟ: คุณไม่เคยเกษียณจริงๆ ขอบเขตเบลอ คุณไม่พอใจผู้ป่วย การเสียสละทางวิชาชีพ',
                    zh: '⛓️ 精疲力竭：你从未真正退休。界限模糊。你是怨恨患者。职业牺牲。'
                },
                stats: { competence: 30, ethics: 40, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📘 The Graduation: "You don\'t need an anchor anymore. Look at your progress. You learned to swim. This is graduation, not abandonment."',
                    th: '📘 การสำเร็จการศึกษา: "คุณไม่ต้องการหลักยึดแล้ว ดูความก้าวหน้าของคุณ คุณว่ายน้ำเป็นแล้ว นี่คือการสำเร็จการศึกษา ไม่ใช่การทอดทิ้ง"',
                    zh: '📘 毕业："你不再需要依靠了。看看你的进步。你学会了游泳。这是毕业，不是遗弃。"'
                },
                consequence: {
                    en: '🎓 Empowered Closure: Reframing works. They cry but accept it. They leave feeling capable. Perfect ending.',
                    th: '🎓 การปิดจบแบบมีพลัง: การกำหนดกรอบใหม่ได้ผล พวกเขาร้องไห้แต่ยอมรับ พวกเขาจากไปโดยรู้สึกมีความสามารถ ตอนจบที่สมบูรณ์แบบ',
                    zh: '🎓 赋权结束：重构起作用了。他们哭了但接受了。他们离开时感到有能力。完美的结局。'
                },
                stats: { competence: 80, ethics: 60, leadership: 70, innovation: 60 }
            }
        ]
    },
];

