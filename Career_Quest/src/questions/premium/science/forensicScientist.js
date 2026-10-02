export const forensicScientistQuestions = [
    {
        id: 'forensic_001',
        text: {
            en: '🔍 Contaminated Evidence: You are analyzing DNA from a high-profile murder case. You realize a junior technician accidentally sneezed near the sample, potentially contaminating it. The prosecution needs a result TODAY.',
            th: '🔍 หลักฐานปนเปื้อน: คุณกำลังวิเคราะห์ DNA จากคดีฆาตกรรมที่เป็นข่าวดัง คุณรู้ว่าช่างเทคนิคย่อยจามใกล้ตัวอย่างโดยไม่ได้ตั้งใจ ซึ่งอาจทำให้ปนเปื้อน อัยการต้องการผลลัพธ์ "วันนี้"',
            zh: '🔍 被污染的证据：你正在分析一起备受瞩目的谋杀案的DNA。你意识到一名初级技术员不小心在样本附近打了个喷嚏，可能污染了它。检方需要"今天"出结果。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Report & Delay: "Halt everything. Document the contamination incident. Request a new sample extraction, even if it delays the trial by weeks."',
                    th: '🚨 รายงานและล่าช้า: "หยุดทุกอย่าง บันทึกเหตุการณ์การปนเปื้อน ขอการสกัดตัวอย่างใหม่ แม้ว่าจะทำให้การพิจารณาคดีล่าช้าไปหลายสัปดาห์ก็ตาม"',
                    zh: '🚨 报告并推迟："停止一切。记录污染事件。请求重新提取样本，即使这会使审判推迟数周。"'
                },
                consequence: {
                    en: '✅ Integrity Saves Justice! It creates a media scandal about lab protocols, but the new clean sample convicts the real killer. You are praised for honesty.',
                    th: '✅ ความซื่อสัตย์ช่วยงความยุติธรรม! มันสร้างเรื่องอื้อฉาวทางสื่อเกี่ยวกับระเบียบวิธีในแล็บ แต่ตัวอย่างใหม่ที่สะอาดช่วยตัดสินลงโทษฆาตกรตัวจริงได้ คุณได้รับคำชมในความซื่อสัตย์',
                    zh: '✅ 正直拯救正义！这引发了关于实验室协议的媒体丑闻，但新的干净样本定罪了真正的凶手。你因诚实而受到赞扬。'
                },
                stats: { competence: 20, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧪 Run It Anyway: "The contamination is likely negligible. Run the test. If the results are strong enough, no one needs to know about the sneeze."',
                    th: '🧪 รันผลต่อไป: "การปนเปื้อนน่าจะเล็กน้อย รันการทดสอบไปเลย ถ้าผลลัพธ์ชัดเจนพอ ก็ไม่มีใครจำเป็นต้องรู้เรื่องการจาม"',
                    zh: '🧪 无论如何都要运行："污染可能微不足道。运行测试。如果结果足够强，没人需要知道打喷嚏的事。"'
                },
                consequence: {
                    en: '⚖️ Mistrial! The defense lawyer finds traces of the technician\'s DNA. The case is thrown out. A guilty man walks free because of you.',
                    th: '⚖️ การพิจารณาคดีเป็นโมฆะ! ทนายจำเลยพบร่องรอย DNA ของช่างเทคนิค คดีถูกยกฟ้อง คนผิดลอยนวลเพราะคุณ',
                    zh: '⚖️ 审判无效！辩护律师发现了技术员的DNA痕迹。案件被驳回。有罪的人因为你而逍遥法外。'
                },
                stats: { competence: -30, ethics: -40, leadership: -20, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Clean It Digitally: "Use software to filter out the known profile of the technician. Present the cleaned data as raw data."',
                    th: '💻 ทำความสะอาดด้วยดิจิทัล: "ใช้ซอฟต์แวร์กรองโปรไฟล์ที่รู้จักของช่างเทคนิคออกไป นำเสนอข้อมูลที่ทำความสะอาดแล้วว่าเป็นข้อมูลดิบ"',
                    zh: '💻 数字化清理："使用软件过滤掉已知的技术员特征。将清理后的数据作为原始数据呈现。"'
                },
                consequence: {
                    en: '🚫 Fabricated Evidence! You are caught altering data. This is a crime. You lose your license and face jail time.',
                    th: '🚫 หลักฐานเท็จ! คุณถูกจับได้ว่าแก้ไขข้อมูล นี่เป็นอาชญากรรม คุณสูญเสียใบอนุญาตและต้องโทษจำคุก',
                    zh: '🚫 伪造证据！你被抓到篡改数据。这是犯罪。你失去了执照并面临监禁。'
                },
                stats: { competence: -50, ethics: -50, leadership: -50, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔬 Advanced Separation: "Try a risky, experimental chemical separation technique to isolate the older DNA. It might destroy the sample, but it\'s our only shot at speed."',
                    th: '🔬 การแยกขั้นสูง: "ลองใช้เทคนิคการแยกทางเคมีแบบทดลองที่เสี่ยงเพื่อแยก DNA ที่เก่ากว่า มันอาจทำลายตัวอย่าง แต่นี่เป็นโอกาสเดียวที่เราจะทำได้เร็ว"',
                    zh: '🔬 高级分离："尝试一种有风险的实验性化学分离技术来分离旧的DNA。它可能会破坏样本，但这是我们唯一的快速机会。"'
                },
                consequence: {
                    en: '✨ Miracle Worker! It works perfectly. You get a pure profile in record time. You pioneered a new forensic method.',
                    th: '✨ ผู้สร้างปาฏิหาริย์! มันได้ผลอย่างสมบูรณ์แบบ คุณได้โปรไฟล์ที่บริสุทธิ์ในเวลาอันเป็นประวัติการณ์ คุณเป็นผู้บุกเบิกวิธีการทางนิติวิทยาศาสตร์ใหม่',
                    zh: '✨ 奇迹创造者！它完美运作。你在创纪录的时间内得到了纯净的特征。你开创了一种新的法医方法。'
                },
                stats: { competence: 50, ethics: 20, leadership: 10, innovation: 50 }
            }
        ]
    },
    {
        id: 'forensic_002',
        text: {
            en: '🎤 Expert Witness: You are testifying in court against a powerful mob boss. His lawyer is aggressive, attacking your personal life to discredit your science. What do you do?',
            th: '🎤 พยานผู้เชี่ยวชาญ: คุณกำลังให้การในศาลต่อต้านหัวหน้าแก๊งมาเฟียผู้ทรงอิทธิพล ทนายของเขาก้าวร้าว โจมตีชีวิตส่วนตัวของคุณเพื่อดิสเครดิตวิทยาศาสตร์ของคุณ คุณจะทำอย่างไร?',
            zh: '🎤 专家证人：你正在出庭作证指控一位有权势的黑帮老大。他的律师咄咄逼人，攻击你的私生活以败坏你的科学声誉。你会怎么做？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '😡 Fight Back: "Get angry! \'My personal life is irrelevant! Stick to the facts you cheap lawyer!\'"',
                    th: '😡 โต้กลับ: "โกรธจัด! \'ชีวิตส่วนตัวของฉันไม่เกี่ยว! ยึดตามข้อเท็จจริงสิ ทนายกระจอก!\'"',
                    zh: '😡 反击："生气！\'我的私生活无关紧要！坚持事实，你这个廉价律师！\'"'
                },
                consequence: {
                    en: '💢 Lost Cool: The jury sees you as unstable. The lawyer smirks; he got exactly the reaction he wanted. Your testimony is disregarded.',
                    th: '💢 เสียอาการ: ลูกขุนมองว่าคุณอารมณ์ไม่มั่นคง ทนายยิ้มเยาะ; เขาได้รับปฏิกิริยาที่ต้องการเป๊ะๆ คำให้การของคุณถูกเพิกเฉย',
                    zh: '💢 失去冷静：陪审团认为你不稳定。律师假笑；他得到了他想要的反应。你的证词被无视了。'
                },
                stats: { competence: -10, ethics: 0, leadership: -20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '❄️ Ice Cold Logic: "Remain completely emotionless. Answer only with \'Yes\', \'No\', or scientific data. Refuse to engage in drama."',
                    th: '❄️ ตรรกะอันเยือกเย็น: "ไร้อารมณ์โดยสิ้นเชิง ตอบเพียง \'ใช่\', \'ไม่ใช่\' หรือข้อมูลทางวิทยาศาสตร์ ปฏิเสธที่จะเล่นตามเกมดราม่า"',
                    zh: '❄️ 冰冷逻辑："保持完全无动于衷。只回答\'是\'、\'否\'或科学数据。拒绝参与戏剧。"'
                },
                consequence: {
                    en: '🧊 Unshakable: The lawyer looks foolish trying to provoke a robot. The jury trusts your objectivity completely. Conviction secured.',
                    th: '🧊 ไม่หวั่นไหว: ทนายดูโง่เขลาที่พยายามยั่วโมโหหุ่นยนต์ ลูกขุนเชื่อมั่นในความเป็นกลางของคุณอย่างเต็มที่ การตัดสินลงโทษสำเร็จ',
                    zh: '🧊 不可动摇：律师试图激怒机器人显得很愚蠢。陪审团完全信任你的客观性。定罪成功。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '😭 Play Victim: "Start crying. \'I am just trying to do my job and seek justice for the victim!\' Garner sympathy."',
                    th: '😭 เล่นบทเหยื่อ: "เริ่มร้องไห้ \'ฉันแค่พยายามทำงานของฉันและแสวงหาความยุติธรรมให้เหยื่อ!\' เรียกคะแนนความเห็นใจ"',
                    zh: '😭 扮演受害者："开始哭泣。\'我只是想做好我的工作，为受害者伸张正义！\' 博取同情。"'
                },
                consequence: {
                    en: '🎭 Too Theatrical: The judge calls a recess. Some jurors feel sorry, others think you are weak. It\'s a gamble that barely pays off.',
                    th: '🎭 เล่นใหญ่ไปหน่อย: ผู้พิพากษาสั่งพัก ลูกขุนบางคนสงสาร คนอื่นคิดว่าคุณอ่อนแอ มันเป็นการเดิมพันที่ได้ไม่คุ้มเสีย',
                    zh: '🎭 太戏剧化：法官宣布休庭。一些陪审员感到抱歉，其他人认为你很软弱。这是一场勉强得到回报的赌博。'
                },
                stats: { competence: -20, ethics: -10, leadership: -30, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤓 Over-explain: "Bury him in jargon. Explain the polymerase chain reaction for 20 minutes in excruciating detail until he gives up."',
                    th: '🤓 อธิบายเยอะเกิน: "ฝังเขาด้วยศัพท์เทคนิค อธิบายปฏิกิริลูกโซ่พอลิเมอเรสเป็นเวลา 20 นาทีอย่างละเอียดจนเขาถอดใจ"',
                    zh: '🤓 过度解释："用行话淹没他。用极其痛苦的细节解释聚合酶链反应20分钟，直到他放弃。"'
                },
                consequence: {
                    en: '😴 Boring but Effective: The lawyer gets bored, the judge gets bored, but you establish dominance via knowledge. He stops asking questions.',
                    th: '😴 น่าเบื่อแต่ได้ผล: ทนายเบื่อ ผู้พิพากษาเบื่อ แต่คุณสร้างอำนาจเหนือกว่าด้วยความรู้ เขาเลิกถามคำถาม',
                    zh: '😴 无聊但有效：律师烦了，法官烦了，但你通过知识建立了统治地位。他不再问问题了。'
                },
                stats: { competence: 30, ethics: 10, leadership: 10, innovation: 20 }
            }
        ]
    },
    {
        id: 'forensic_003',
        text: {
            en: '🚔 The "Perfect" Crime: A brilliant chemist has created a poison that metabolizes into natural compounds within 2 hours. You have a body that died 3 hours ago. Standard tests show nothing.',
            th: '🚔 อาชญากรรม "สมบูรณ์แบบ": นักเคมีอัจฉริยะสร้างยาพิษที่เผาผลาญเป็นสารประกอบธรรมชาติภายใน 2 ชั่วโมง คุณมีศพที่เสียชีวิตเมื่อ 3 ชั่วโมงที่แล้ว การทดสอบมาตรฐานไม่พบอะไรเลย',
            zh: '🚔 "完美"犯罪：一位才华横溢的化学家制造了一种毒药，能在2小时内代谢成天然化合物。你只有一具3小时前死亡的尸体。标准测试什么也没发现。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤷 Give Up: "Natural causes. Sometimes people just die. We can\'t find what isn\'t there. Close the file."',
                    th: '🤷 ยอมแพ้: "สาเหตุธรรมชาติ บางครั้งคนก็ตายเฉยๆ เราหาสิ่งที่ไม่มีอยู่ไม่ได้ ปิดแฟ้มคดี"',
                    zh: '🤷 放弃："自然原因。有时人就是会死。我们找不到不存在的东西。结案。"'
                },
                consequence: {
                    en: '🚪 Cold Case: The killer walks free and kills again a month later using the same method. You missed a pattern.',
                    th: '🚪 คดีแช่แข็ง: ฆาตกรลอยนวลและฆ่าคนอีกครั้งในเดือนถัดมาด้วยวิธีเดิม คุณพลาดรูปแบบสำคัญ',
                    zh: '🚪 悬案：凶手逍遥法外，一个月后用同样的方法再次杀人。你错过了一个模式。'
                },
                stats: { competence: -20, ethics: -10, leadership: -10, innovation: -30 }
            },
            {
                id: 'B',
                text: {
                    en: '🧬 Metabolite Hunting: "The poison is gone, but the ghost remains. Look for the specific ratios of the natural metabolites. It requires developing a new test from scratch."',
                    th: '🧬 ล่าเมตาโบไลต์: "ยาพิษหายไป แต่วิญญาณยังอยู่ ค้นหาอัตราส่วนเฉพาะของเมตาโบไลต์ธรรมชาติ ต้องพัฒนาการทดสอบใหม่จากศูนย์"',
                    zh: '🧬 代谢物狩猎："毒药消失了，但幽灵还在。寻找天然代谢物的具体比例。这需要从头开发一种新的测试。"'
                },
                consequence: {
                    en: '💡 Breakthrough! It takes 48 hours of non-stop work, but you find the imbalance! You prove murder mathematically. Genius.',
                    th: '💡 ทะลุทะลวง! ใช้เวลาทำงานต่อเนื่อง 48 ชั่วโมง แต่คุณพบความไม่สมดุล! คุณพิสูจน์การฆาตกรรมทางคณิตศาสตร์ได้ อัจฉริยะ',
                    zh: '💡 突破！这需要48小时的不间断工作，但你发现了不平衡！你用数学证明了谋杀。天才。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Bluff the Suspect: "Tell the detectives to tell the suspect we found the poison. Watch his reaction. We have no evidence, just psychology."',
                    th: '🕵️ บลัฟผู้ต้องสงสัย: "บอกนักสืบให้บอกผู้ต้องสงสัยว่าเราเจอยาพิษ ดูปฏิกิริยาของเขา เราไม่มีหลักฐาน มีแค่จิตวิทยา"',
                    zh: '🕵️ 虚张声勢："告诉侦探告诉嫌疑人我们发现了毒药。观察他的反应。我们没有证据，只有心理学。"'
                },
                consequence: {
                    en: '😟 Confession... Maybe: The suspect panics and confesses! But in court, the confession is thrown out because you lied about evidence.',
                    th: '😟 คำสารภาพ... มั้ง: ผู้ต้องสงสัยตื่นตระหนกและสารภาพ! แต่ในศาล คำสารภาพถูกปัดตกเพราะคุณโกหกเรื่องหลักฐาน',
                    zh: '😟 招供……也许：嫌疑人恐慌并招供了！但在法庭上，供词被驳回，因为你对证据撒谎。'
                },
                stats: { competence: 10, ethics: -30, leadership: 10, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📱 Check Digital Footprint: "Forget the body. Check his search history and credit card purchases for chemical precursors."',
                    th: '📱 ตรวจสอบรอยเท้าดิจิทัล: "ลืมเรื่องศพไปก่อน ตรวจสอบประวัติการค้นหาและการซื้อบัตรเครดิตของเขาเพื่อหาสารตั้งต้นทางเคมี"',
                    zh: '📱 检查数字足迹："忘了尸体吧。检查他的搜索历史和信用卡购买记录，寻找化学前体。"'
                },
                consequence: {
                    en: '🔗 Circumstantial Win: You find the receipts. It\'s not biological proof, but combine with motive, it\'s enough for a conviction.',
                    th: '🔗 ชนะด้วยพยานแวดล้อม: คุณพบใบเสร็จ มันไม่ใช่หลักฐานทางชีวภาพ แต่เมื่อรวมกับแรงจูงใจ มันเพียงพอสำหรับการตัดสินลงโทษ',
                    zh: '🔗 旁证胜利：你找到了收据。这不是生物学证据，但结合动机，足以定罪。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'forensic_004',
        text: {
            en: '📹 Deepfake Dilemma: Surveillance footage clearly shows the suspect stabbing the victim. But your frame-by-frame analysis reveals micro-artifacts suggesting it\'s a state-of-the-art AI Deepfake. The police want to use it to force a plea deal.',
            th: '📹 ภาวะกลืนไม่เข้าคายไม่ออกของ Deepfake: ภาพวงจรปิดแสดงให้เห็นชัดเจนว่าผู้ต้องสงสัยแทงเหยื่อ แต่การวิเคราะห์ทีละเฟรมของคุณเผยให้เห็นความผิดปกติเล็กน้อยที่บ่งชี้ว่าเป็น AI Deepfake ที่ล้ำสมัย ตำรวจต้องการใช้มันเพื่อบีบให้ยอมรับสารภาพ',
            zh: '📹 Deepfake两难：监控录像清楚地显示嫌疑人刺伤了受害者。但你的逐帧分析揭示了微小的伪影，表明这是最先进的AI Deepfake。警方想利用它来迫使达成认罪协议。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤐 Stay Silent: "It looks real enough. If he\'s guilty, he\'s guilty. Let the jury decide if it\'s fake. Not my job to defend him."',
                    th: '🤐 เงียบไว้: "มันดูเหมือนจริงพอ ถ้าเขาผิดจริง ก็คือผิด ให้ลูกขุนตัดสินเองว่ามันปลอมไหม ไม่ใช่หน้าที่ของฉันที่จะปกป้องเขา"',
                    zh: '🤐 保持沉默："看起来够真的了。如果他有罪，那就是有罪。让陪审团决定它是不是假的。不是我的工作来为他辩护。"'
                },
                consequence: {
                    en: '⛓️ Wrongful Conviction: He pleads guilty out of fear. Later, the real video surfaces. You knew and said nothing. Disgrace.',
                    th: '⛓️ การตัดสินผิดพลาด: เขายอมรับสารภาพด้วยความกลัว ต่อมาวิดีโอจริงปรากฏขึ้น คุณรู้แต่ไม่พูดอะไร น่าอัปยศ',
                    zh: '⛓️ 错判：他因恐惧而认罪。后来，真正的视频浮出水面。你知道却什么也没说。耻辱。'
                },
                stats: { competence: -10, ethics: -50, leadership: -20, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚩 Flag the Evidence: "Write an official report challenging the authenticity of the video. \'This is synthetic media, not evidence.\'"',
                    th: '🚩 ปักธงหลักฐาน: "เขียนรายงานอย่างเป็นทางการคัดค้านความถูกต้องของวิดีโอ \'นี่เป็นสื่อสังเคราะห์ ไม่ใช่หลักฐาน\'"',
                    zh: '🚩 标记证据："写一份官方报告质疑视频的真实性。\'这是合成媒体，不是证据。\'"'
                },
                consequence: {
                    en: '🛡️ Guardian of Truth: The police are furious, but the judge throws out the video. You establish the first protocol for detecting deepfakes in court.',
                    th: '🛡️ ผู้พิทักษ์ความจริง: ตำรวจโกรธจัด แต่ผู้พิพากษาปัดตกวิดีโอ คุณสร้างระเบียบการแรกสำหรับการตรวจจับ deepfake ในศาล',
                    zh: '🛡️ 真理守护者：警方非常愤怒，但法官驳回了视频。你建立了法庭上检测deepfake的第一个协议。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Counter-Investigation: "Who made this fake? Trace the digital signature embedded in the rendering artifacts to find the real framer."',
                    th: '🕵️ การสืบสวนสวนกลับ: "ใครทำของปลอมนี้? ติดตามลายเซ็นดิจิทัลที่ฝังอยู่ในสิ่งแปลกปลอมในการเรนเดอร์เพื่อหาคนใส่ร้ายตัวจริง"',
                    zh: '🕵️ 反调查："谁做了这个假的？追踪嵌入在渲染伪影中的数字签名，找到真正的陷害着。"'
                },
                consequence: {
                    en: '🕵️‍♂️ Real Detective Work: You trace it to a rival gang\'s hacker. You solve two crimes at once. The police forgive your initial obstruction.',
                    th: '🕵️‍♂️ งานนักสืบตัวจริง: คุณตามรอยไปถึงแฮกเกอร์ของแก๊งคู่แข่ง คุณไขคดีสองคดีในคราวเดียว ตำรวจให้อภัยที่คุณขัดขวางในตอนแรก',
                    zh: '🕵️‍♂️ 真正的侦探工作：你追踪到了敌对帮派的黑客。你一次解决了两起犯罪。警方原谅了你最初的阻挠。'
                },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Police Deal: "Tell the Chief privately but suggest using it to bluff only. \'Don\'t put this in court, but use it in interrogation.\'"',
                    th: '🤝 ข้อตกลงตำรวจ: "บอกหัวหน้าเป็นการส่วนตัวแต่แนะนำให้ใช้เพื่อบลัฟเท่านั้น \'อย่านำสิ่งนี้ขึ้นศาล แต่ใช้ในการสอบสวน\'"',
                    zh: '🤝 警方交易："私下告诉局长，但建议只用来虚张声势。\'不要把这个带上法庭，但在审讯中使用它。\'"'
                },
                consequence: {
                    en: '⚖️ Grey Area: It works, the guy confesses to other crimes. Justice is served, but your ethics are murky.',
                    th: '⚖️ พื้นที่สีเทา: มันได้ผล ชายนั่นสารภาพคดีอื่น ความยุติธรรมเกิดขึ้น แต่จริยธรรมของคุณมัวหมอง',
                    zh: '⚖️ 灰色地带：奏效了，那家伙供认了其他罪行。正义得到了伸张，但你的道德是模糊的。'
                },
                stats: { competence: 30, ethics: -10, leadership: 10, innovation: 20 }
            }
        ]
    },
    {
        id: 'forensic_005',
        text: {
            en: '⏳ Cold Case Paradox: You test DNA from a 30-year-old murder. It matches a prominent Senator who just voted to double your lab\'s funding. He was 18 at the time. Releasing this destroys him and likely your lab.',
            th: '⏳ ปริศนาคดีแช่แข็ง: คุณทดสอบ DNA จากคดีฆาตกรรมเมื่อ 30 ปีก่อน มันตรงกับวุฒิสมาชิกคนดังที่เพิ่งโหวตเพิ่มงบประมาณให้ห้องแล็บของคุณเป็นสองเท่า ตอนนั้นเขาอายุ 18 การเปิดเผยเรื่องนี้จะทำลายเขาและน่าจะทำลายห้องแล็บของคุณด้วย',
            zh: '⏳ 悬案悖论：你测试了30年前谋杀案的DNA。它与一位著名的参议员相匹配，他刚刚投票决定将你实验室的资金增加一倍。当时他18岁。发布这个会毁了他，也可能毁了你的实验室。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💣 Drop the Bomb: "Justice has no expiration date. Report the match immediately to the deepest federal level possible."',
                    th: '💣 ทิ้งระเบิด: "ความยุติธรรมไม่มีวันหมดอายุ รายงานผลที่ตรงกันทันทีไปยังระดับรัฐบาลกลางที่ลึกที่สุดเท่าที่จะทำได้"',
                    zh: '💣 投下炸弹："正义没有保质期。立即向尽可能高的联邦级别报告匹配结果。"'
                },
                consequence: {
                    en: '🏛️ Political Firestorm: The Senator is arrested. Your funding is cut to zero by his allies. You are a martyr for truth.',
                    th: '🏛️ พายุกระหน่ำทางการเมือง: วุฒิสมาชิกถูกจับ งบประมาณของคุณถูกตัดเหลือศูนย์โดยพันธมิตรของเขา คุณคือผู้พลีชีพเพื่อความจริง',
                    zh: '🏛️ 政治风暴：参议员被捕。你的资金被他的盟友削减为零。你是真理的殉道者。'
                },
                stats: { competence: 20, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔥 Destroy the Sample: "It was 30 years ago. He does more good now. Accidentally \'drop\' the test tube into the incinerator."',
                    th: '🔥 ทำลายตัวอย่าง: "มันผ่านมา 30 ปีแล้ว ตอนนี้เขาทำประโยชน์มากกว่า แกล้งทำหลอดทดลอง \'หล่น\' ลงในเตาเผาโดยไม่ได้ตั้งใจ"',
                    zh: '🔥 销毁样本："那是30年前的事了。他现在做得更好。不小心把试管\'掉\'进焚化炉。"'
                },
                consequence: {
                    en: '🕴️ Shadow Guilt: You keep your funding and the Senator stays in power. But you know you are protecting a murderer. You can\'t sleep.',
                    th: '🕴️ ความผิดในเงามืด: คุณรักษาเงินทุนไว้ได้และวุฒิสมาชิกยังคงมีอำนาจ แต่คุณรู้ว่าคุณกำลังปกป้องฆาตกร คุณนอนไม่หลับ',
                    zh: '🕴️ 阴影内疚：你保住了资金，参议员继续掌权。但你知道你在保护一个凶手。你无法入睡。'
                },
                stats: { competence: 0, ethics: -50, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '✉️ Anonymous Tip: "Leak the results to an investigative journalist. Keep your name off it. Let them do the digging."',
                    th: '✉️ ข้อมูลนิรนาม: "ปล่อยผลลัพธ์ให้นักข่าวสืบสวนสอบสวน อย่าให้มีชื่อคุณ ให้พวกเขาไปขุดคุ้ยเอง"',
                    zh: '✉️ 匿名举报："将结果泄露给调查记者。不要署名。让他们去挖掘。"'
                },
                consequence: {
                    en: '📰 Headlines: The stor breaks. You act surprised. The Senator falls, and your lab survives because you weren\'t directly involved.',
                    th: '📰 พาดหัวข่าว: ข่าวหลุดออกมา คุณแกล้งทำเป็นประหลาดใจ วุฒิสมาชิกล้ม และแล็บของคุณรอดเพราะคุณไม่ได้เกี่ยวข้องโดยตรง',
                    zh: '📰 头条新闻：故事爆出。你假装惊讶。参议员倒台了，你的实验室幸存下来，因为你没有直接卷入。'
                },
                stats: { competence: 30, ethics: 10, leadership: 0, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ Confront Him: "Private meeting. \'I know what you did. I won\'t tell, but you must double your donation to victim support groups.\'"',
                    th: '🗣️ เผชิญหน้า: "นัดพบส่วนตัว \'ผมรู้ว่าคุณทำอะไร ผมจะไม่บอกใคร แต่คุณต้องบริจาคเงินให้กลุ่มช่วยเหลือเหยื่อเพิ่มเป็นสองเท่า\'"',
                    zh: '🗣️ 与他对质："私下会面。\'我知道你做了什么。我不会说，但你必须给受害者支持团体加倍捐款。\'"'
                },
                consequence: {
                    en: '♟️ Dangerous Leverage: He agrees, but now he owns you. Or you own him? It\'s a dangerous game of blackmail.',
                    th: '♟️ อำนาจต่อรองที่อันตราย: เขาตกลง แต่ตอนนี้เขาเป็นเจ้าของคุณ หรือคุณเป็นเจ้าของเขา? มันเป็นเกมแบล็กเมล์ที่อันตราย',
                    zh: '♟️ 危险的杠杆：他同意了，但现在他拥有你了。或者你拥有他？这是一场危险的勒索游戏。'
                },
                stats: { competence: 10, ethics: -30, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'forensic_006',
        text: {
            en: '🔬 Lab Mix-Up: Two murder cases - one serial killer, one self-defense. The DNA samples are identical twins. You accidentally mixed up the labels. The trial starts tomorrow.',
            th: '🔬 สับสนในห้องแล็บ: คดีฆาตกรรมสองคดี - นักฆ่าต่อเนื่องและป้องกันตัว ตัวอย่าง DNA เป็นฝาแฝดเหมือน คุณติดป้ายสลับกันโดยไม่ตั้งใจ การพิจารณาคดีเริ่มพรุ่งนี้',
            zh: '🔬 实验室混乱：两起谋杀案-一个连环杀手，一个正当防卫。DNA样本是同卵双胞胎。你不小心弄混了标签。审判明天开始。'
        },
        options: [
            {
                id: 'A', text: {
                    en: '🚨 Emergency Halt: "Call both judges. Request 48hr continuance to re-test everything from scratch."', th: '🚨 หยุดฉุกเฉิน: "โทรหาผู้พิพากษาทั้งคู่ ขอเลื่อนคดี 48 ชม. เพื่อทดสอบใหม่ทั้งหมด"', zh: '🚨 紧急停止："打电话给两位法官。请求延期48小时重新测试所有样本。"'
                }, consequence: { en: '⚖️ Justice Delayed: You save both cases from mistrial, but lawyers are furious at you. Your reputation for reliability is questioned.', th: '⚖️ ความยุติธรรมล่าช้า: คุณช่วยคดีทั้งสองจากการพิจารณาคดีผิดพลาด แต่ทนายโกรธคุณมาก ความน่าเชื่อถือของคุณถูกตั้งคำถาม', zh: '⚖️ 正义延迟：你避免了两起案件的审判无效，但律师对你很愤怒。你的可靠性声誉受到质疑。' }, stats: { competence: 20, ethics: 50, leadership: 30, innovation: 0 }
            },
            { id: 'B', text: { en: '🎲 Guess: "50/50 shot. Pick one. Hope for the best. No one will ever know."', th: '🎲 เดา: "โอกาสครึ่งต่อครึ่ง เลือกหนึ่ง หวังว่าจะโชคดี ไม่มีใครรู้"', zh: '🎲 猜测："五五开的机会。选一个。祈祷好运。没人会知道。"' }, consequence: { en: '☠️ Wrong Guess: You send an innocent person to death row. The serial killer walks free. 10 years later, DNA tech advances and your mistake is exposed.', th: '☠️ เดาผิด: คุณส่งคนบริสุทธิ์ไปรอตาย ฆาตกรต่อเนื่องเดินอิสระ 10 ปีต่อมา เทคโนโลยี DNA ก้าวหน้าและความผิดพลาดของคุณถูกเปิดโปง', zh: '☠️ 猜错了：你送了一个无辜者去死刑。连环杀手逍遥法外。10年后DNA技术进步，你的错误暴露了。' }, stats: { competence: -50, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'C', text: { en: '🧬 Emergency Re-Sample: "Break into evidence locker tonight. Re-extract DNA from both crime scenes personally."', th: '🧬 เก็บตัวอย่างใหม่ฉุกเฉิน: "บุกเข้าห้องเก็บหลักฐานคืนนี้ สกัด DNA จากที่เกิดเหตุทั้งสองด้วยตัวเอง"', zh: '🧬 紧急重新采样："今晚闯入证物室。亲自从两个犯罪现场重新提取DNA。"' }, consequence: { en: '🛡️ Rogue Save: You fix it. But the illegal entry is recorded on camera. The defense moves to exclude all your evidence.', th: '🛡️ การช่วยเหลือแบบกบฏ: คุณแก้ไขได้ แต่การบุกเข้าที่ผิดกฎหมายถูกบันทึกกล้อง ฝ่ายจำเลยขอให้ตัดหลักฐานทั้งหมดของคุณออก', zh: '🛡️ 流氓拯救：你修复了它。但非法进入被摄像机记录。辩方要求排除你的所有证据。' }, stats: { competence: 30, ethics: -20, leadership: 10, innovation: 20 } },
            { id: 'D', text: { en: '🤐 Bury It: "Delete the mix-up from the records. Proceed as if nothing happened. Trust your original instinct."', th: '🤐 ฝังไว้: "ลบข้อผิดพลาดจากบันทึก ดำเนินการเหมือนไม่มีอะไรเกิดขึ้น เชื่อสัญชาตญาณแรกของคุณ"', zh: '🤐 掩埋它："从记录中删除混淆。像什么都没发生一样继续。相信你最初的直觉。"' }, consequence: { en: '💀 Coverup Curse: Your lab tech notices discrepancies and reports you for data manipulation. You are fired and criminally charged.', th: '💀 คำสาปการปกปิด: ช่างแล็บของคุณสังเกตเห็นความผิดปกติและรายงานคุณข้อหาปลอมแปลงข้อมูล คุณถูกไล่ออกและถูกดำเนินคดีอาญา', zh: '💀 掩盖诅咒：你的实验室技术员注意到差异并报告你数据操纵。你被解雇并被刑事指控。' }, stats: { competence: -30, ethics: -50, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_007',
        text: {
            en: '🔫 Gunshot Residue Mystery: The GSR on the suspect matches the murder weapon, but you notice they work at a shooting range. They could have residue from their job, not the crime.',
            th: '🔫 ปริศนาตกค้างจากการยิง: GSR บนผู้ต้องสงสัยตรงกับอาวุธฆาตกรรม แต่คุณสังเกตเห็นว่าพวกเขาทำงานที่สนามยิงปืน พวกเขาอาจมีตกค้างจากงาน ไม่ใช่จากอาชญากรรม',
            zh: '🔫 枪击残留物之谜：嫌疑人身上的GSR与凶器匹配，但你注意到他们在靶场工作。他们可能有工作中的残留物，而不是犯罪的。'
        },
        options: [
            { id: 'A', text: { en: '📊 Full Context: "Present both findings: GSR match AND occupation. Let the jury decide."', th: '📊 บริบทเต็ม: "นำเสนอทั้งสองข้อค้นพบ: GSR ตรงกัน และอาชีพ ให้คณะลูกขุนตัดสินใจ"', zh: '📊 完整背景："呈现两项发现：GSR匹配和职业。让陪审团决定。"' }, consequence: { en: '⚖️ Honest Testimony: Defense tears your evidence apart using your own testimony. Suspect walks. Was it justice or did you help a killer?', th: '⚖️ การเบิกความซื่อสัตย์: ฝ่ายจำเลยฉีกหลักฐานของคุณด้วยคำเบิกความของคุณเอง ผู้ต้องสงสัยพ้นผิด นี่คือความยุติธรรมหรือคุณช่วยฆาตกร?', zh: '⚖️ 诚实证词：辩方用你自己的证词撕碎了你的证据。嫌疑人走了。这是正义还是你帮了凶手？' }, stats: { competence: 40, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🤐 Omit Details: "Report the match. Skip mentioning the job. Not your job to defend the suspect."', th: '🤐 ละเว้นรายละเอียด: "รายงานการจับคู่ ข้ามการกล่าวถึงงาน ไม่ใช่งานของคุณที่จะปกป้องผู้ต้องสงสัย"', zh: '🤐 省略细节："报告匹配。跳过提及工作。辩护嫌疑人不是你的工作。"' }, consequence: { en: '❌ Guilty Verdict: Convicted. 5 years later, another murder with identical MO. The real killer was free because you hid exculpatory evidence.', th: '❌ คำตัดสินว่ามีความผิด: ถูกลงโทษ 5 ปีต่อมา การฆาตกรรมอีกครั้งด้วย MO เหมือนกัน ฆาตกรตัวจริงเป็นอิสระเพราะคุณซ่อนหลักฐานยกเว้นความผิด', zh: '❌ 有罪裁决：定罪。5年后，另一起具有相同手法的谋杀案。真正的凶手因为你隐瞒免责证据而逍遥法外。' }, stats: { competence: 0, ethics: -40, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🔬 Advanced Testing: "Request isotope ratio analysis of the GSR. Different ammunition batches have unique signatures."', th: '🔬 การทดสอบขั้นสูง: "ขอการวิเคราะห์อัตราส่วนไอโซโทปของ GSR กระสุนชุดต่างๆ มีลายเซ็นที่ไม่ซ้ำกัน"', zh: '🔬 高级测试："要求对GSR进行同位素比分析。不同批次的弹药具有独特的特征。"' }, consequence: { en: '🧪 Scientific Victory: The isotopes prove the GSR is from a different ammo batch than used at the range. Definitive evidence!', th: '🧪 ชัยชนะทางวิทยาศาสตร์: ไอโซโทปพิสูจน์ว่า GSR มาจากกระสุนชุดที่แตกต่างจากที่ใช้ที่สนาม หลักฐานชัดเจน!', zh: '🧪 科学胜利：同位素证明GSR来自与靶场使用的不同批次的弹药。确凿证据！' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 } },
            {
                id: 'D', text: { en: '🕵️ Investigate Myself: "Visit the range secretly. Collect GSR samples from their workplace to compare."', th: '🕵️ สอบสวนด้วยตัวเอง: "ไปที่สนามแบบลับๆ เก็บตัวอย่าง GSR จากที่ทำงานของพวกเขาเพื่อเปรียบเทียบ"', zh: '🕵️ 自己调查："秘密访问靶场。从他们的工作场所收集GSR样本进行比较。"' }, consequence: { en: '🚫 Chain Violation: Your unauthorized collection makes all evidence inadmissible. The case collapses. Both prosecution and defense hate you.', th: '🚫 ละเมิดห่วงโซ่: การเก็บโดยไม่ได้รับอนุญาตของคุณทำให้หลักฐานทั้งหมดไม่สามารถรับได้ คดีล้ม ทั้งฝ่ายโจทก์และจำเลยเกลียดคุณ', zh: '🚫 链条违规：你未经授权的收集使所有证据不被采纳。案件崩溃。检方和辩方都恨你。' }, stats: { competence: -20, ethics: 10, leadership: -30, innovation: 20 }
            }
        ]
    },
    {
        id: 'forensic_008',
        text: {
            en: '💻 Digital Forensics Trap: You recover deleted emails from a CEO\'s laptop proving corporate fraud. But you also find his secret therapy records revealing severe mental illness.',
            th: '💻 กับดักนิติเวชดิจิทัล: คุณกู้คืนอีเมลที่ถูกลบจากแล็ปท็อปของ CEO พิสูจน์การฉ้อโกงองค์กร แต่คุณยังพบบันทึกการบำบัดลับของเขาเปิดเผยความเจ็บป่วยทางจิตร้ายแรง',
            zh: '💻 数字取证陷阱：你从CEO的笔记本电脑中恢复了已删除的电子邮件，证明了公司欺诈。但你也发现了他的秘密治疗记录，揭示了严重的精神疾病。'
        },
        options: [
            { id: 'A', text: { en: '📧 Report Only Relevant: "Include fraud emails. The therapy files are protected by medical privacy. Delete them."', th: '📧 รายงานเฉพาะที่เกี่ยวข้อง: "รวมอีเมลฉ้อโกง ไฟล์การบำบัดได้รับการปกป้องโดยความเป็นส่วนตัวทางการแพทย์ ลบพวกมัน"', zh: '📧 仅报告相关内容："包括欺诈邮件。治疗文件受医疗隐私保护。删除它们。"' }, consequence: { en: '🏥 Ethical Win: The defense never finds out about the mental health records. Clean conviction. You respected privacy.', th: '🏥 ชัยชนะทางจริยธรรม: ฝ่ายจำเลยไม่เคยรู้เกี่ยวกับบันทึกสุขภาพจิต การตัดสินความผิดสะอาด คุณเคารพความเป็นส่วนตัว', zh: '🏥 道德胜利：辩方从未发现心理健康记录。干净的定罪。你尊重了隐私。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '📁 Turn Over Everything: "All recovered data goes to both sides. Full transparency. Let lawyers sort it out."', th: '📁 ส่งมอบทุกอย่าง: "ข้อมูลที่กู้คืนทั้งหมดไปยังทั้งสองฝ่าย โปร่งใสเต็มที่ ให้ทนายจัดการ"', zh: '📁 移交所有内容："所有恢复的数据都交给双方。完全透明。让律师解决。"' }, consequence: { en: '🎭 Media Circus: The therapy records leak to press. The trial becomes about mental health, not fraud. Public sympathy shifts. He walks.', th: '🎭 ละครสื่อ: บันทึกการบำบัดรั่วไหลสู่สื่อ การพิจารณาคดีกลายเป็นเรื่องสุขภาพจิต ไม่ใช่การฉ้อโกง ความเห็นอกเห็นใจของสาธารณะเปลี่ยน เขาเดินอิสระ', zh: '🎭 媒体马戏团：治疗记录泄露给媒体。审判变成了关于心理健康而非欺诈。公众同情转向。他走了。' }, stats: { competence: 10, ethics: 20, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🔒 Seal Medical Files: "File a motion to have therapy records sealed as privileged. Protect privacy while exposing fraud."', th: '🔒 ปิดผนึกไฟล์ทางการแพทย์: "ยื่นคำร้องให้มีการปิดผนึกบันทึกการบำบัดเป็นสิทธิพิเศษ ปกป้องความเป็นส่วนตัวในขณะที่เปิดเผยการฉ้อโกง"', zh: '🔒 密封医疗文件："提交动议将治疗记录作为特权密封。在揭露欺诈的同时保护隐私。"' }, consequence: { en: '⚖️ Legal Balance: Judge agrees to seal. The fraud case proceeds without the mental health sideshow. Professional handling.', th: '⚖️ สมดุลทางกฎหมาย: ผู้พิพากษาตกลงที่จะปิดผนึก คดีฉ้อโกงดำเneินต่อไปโดยไม่มีการแสดงสุขภาพจิตเสริม การจัดการอย่างมืออาชีพ', zh: '⚖️ 法律平衡：法官同意密封。欺诈案件在没有心理健康副本的情况下进行。专业处理。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '💰 Blackmail Leverage: "Anonymously leak snippets of the therapy records to the CEO. Offer to "lose" them for a price."', th: '💰 อำนาจต่อรองแบล็กเมล์: "แอบรั่วไหลข้อมูลส่วนหนึ่งของบันทึกการบำบัดให้ CEO เสนอที่จะ "สูญหาย" พวกมันในราคา"', zh: '💰 勒索杠杆："匿名泄露治疗记录片段给CEO。提出以一定价格让它们"丢失"。"' }, consequence: { en: '🚔 FBI Sting: The CEO is wearing a wire. You are arrested for extortion. Your career ends in prison.', th: '🚔 FBI ดักจับ: CEO สวมสายลับ คุณถูกจับกุมข้อหาเรียกค่าไถ่ อาชีพของคุณสิ้นสุดในคุก', zh: '🚔 FBI诱捕：CEO戴着窃听器。你因敲诈勒索被捕。你的职业生涯在监狱中结束。' }, stats: { competence: -50, ethics: -50, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_009',
        text: {
            en: '🩸 Blood Spatter Debate: You analyze a domestic violence scene. The spatter pattern suggests the victim fought back hard. But the defense claims you\'re not properly certified in blood pattern analysis.',
            th: '🩸 การถกเถียงรอยเลือด: คุณวิเคราะห์ฉากความรุนแรงในครอบครัว รูปแบบการกระเซ็นแนะนำว่าเหยื่อสู้กลับอย่างหนัก แต่ฝ่ายจำเลยอ้างว่าคุณไม่ได้รับการรับรองอย่างเหมาะสมในการวิเคราะห์รูปแบบเลือด',
            zh: '🩸 血溅争议：你分析家庭暴力现场。溅血模式表明受害者激烈反击。但辩方声称你在血型分析方面没有适当的认证。'
        },
        options: [
            { id: 'A', text: { en: '🎓 Admit Limits: "You\'re right. I\'m not an expert in blood spatter. I can only confirm it\'s the victim\'s blood."', th: '🎓 ยอมรับข้อจำกัด: "คุณพูดถูก ฉันไม่ใช่ผู้เชี่ยวชาญในรอยเลือด ฉันสามารถยืนยันได้เพียงว่ามันเป็นเลือดของเหยื่อ"', zh: '🎓 承认局限："你说得对。我不是血溅专家。我只能确认那是受害者的血。"' }, consequence: { en: '📉 Weakened Case: Your honesty costs the prosecution their best evidence. The abuser gets a light sentence. But your scientific integrity is intact.', th: '📉 คดีอ่อนแอลง: ความซื่อสัตย์ของคุณทำให้ฝ่ายโจทก์เสียหลักฐานที่ดีที่สุด ผู้ทำร้ายได้รับโทษเบา แต่ความซื่อตรงทางวิทยาศาสตร์ของคุณยังคงอยู่', zh: '📉 案件弱化：你的诚实让检方失去了最好的证据。施虐者得到轻判。但你的科学诚信保持完整。' }, stats: { competence: 20, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🎖️ Defend Credentials: "I have 15 years of general forensic experience. Blood analysis is part of routine training. I\'m qualified."', th: '🎖️ ปกป้องคุณสมบัติ: "ฉันมีประสบการณ์นิติเวชทั่วไป 15 ปี การวิเคราะห์เลือดเป็นส่วนหนึ่งของการฝึกอบรมประจำ ฉันมีคุณสมบัติ"', zh: '🎖️ 捍卫资格："我有15年的综合取证经验。血液分析是常规培训的一部分。我有资格。"' }, consequence: { en: '⚖️ Credibility Attack: Defense brings in a board-certified expert who contradicts you. Your reputation takes a hit.', th: '⚖️ การโจมตีความน่าเชื่อถือ: ฝ่ายจำเลยนำผู้เชี่ยวชาญที่ได้รับการรับรองจากคณะกรรมการที่โต้แย้งคุณ ชื่อเสียงของคุณได้รับผลกระทบ', zh: '⚖️ 信誉攻击：辩方带来了一位持证专家反驳你。你的声誉受损。' }, stats: { competence: -10, ethics: 10, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '📚 Emergency Certification: "Request a week continuance. Take a crash course and get certified before testifying."', th: '📚 การรับรองฉุกเฉิน: "ขอเลื่อนคดีหนึ่งสัปดาห์ เรียนหลักสูตรเร่งรัดและได้รับการรับรองก่อนให้การ"', zh: '📚 紧急认证："要求延期一周。在作证前参加速成课程并获得认证。"' }, consequence: { en: '🏆 Prepared Expert: You pass the certification. Your testimony is rock solid. The abuser is convicted. Professional excellence.', th: '🏆 ผู้เชี่ยวชาญที่เตรียมพร้อม: คุณผ่านการรับรอง การเบิกความของคุณแข็งแกร่งมาก ผู้ทำร้ายถูกลงโทษ ความเป็นเลิศทางวิชาชีพ', zh: '🏆 准备充分的专家：你通过了认证。你的证词坚如磐石。施虐者被定罪。专业卓越。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '🤥 Fake It: "Inflate your credentials. Claim you studied under a famous expert. No one will check."', th: '🤥 ปลอมมัน: "เติมแต่งคุณสมบัติของคุณ อ้างว่าคุณเรียนภายใต้ผู้เชี่ยวชาญที่มีชื่อเสียง ไม่มีใครตรวจสอบ"', zh: '🤥 伪造它："夸大你的资格。声称你师从著名专家。没人会检查。"' }, consequence: { en: '🚨 Perjury Charge: Defense investigates. They find your lie. You are charged with perjury. Disbarred from testifying forever.', th: '🚨 ข้อหาให้การเท็จ: ฝ่ายจำเลยสอบสวน พวกเขาพบการโกหกของคุณ คุณถูกดำ���นินคดีข้อหาให้การเท็จ ถูกตัดสิทธิ์ให้การตลอดไป', zh: '🚨 伪证指控：辩方调查。他们发现了你的谎言。你被指控伪证。永久禁止作证。' }, stats: { competence: -40, ethics: -50, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_010',
        text: {
            en: '🦴 Skeleton Identification: You find a skeleton in the woods. Dental records match a woman missing for 20 years. But her "grieving" husband just remarried and has kids. Exhuming the truth destroys his new family.',
            th: '🦴 การระบุโครงกระดูก: คุณพบโครงกระดูกในป่า บันทึกทันตกรรมตรงกับผู้หญิงที่หายไป 20 ปี แต่สามีที่ "โศกเศร้า" ของเธอเพิ่งแต่งงานใหม่และมีลูก การขุดคุ้ยความจริงทำลายครอบครัวใหม่ของเขา',
            zh: '🦴 骨骼识别：你在树林中发现了一具骨骼。牙科记录与一名失踪20年的女性匹配。但她"悲伤的"丈夫刚再婚并有了孩子。挖掘真相会摧毁他的新家庭。'
        },
        options: [
            { id: 'A', text: { en: '🔍 Full Investigation: "Notify homicide. Investigate the husband. He had motive and opportunity 20 years ago."', th: '🔍 การสอบสวนเต็มรูปแบบ: "แจ้งฝ่ายฆาตกรรม สอบสวนสามี เขามีแรงจูงใจและโอกาสเมื่อ 20 ปีก่อน"', zh: '🔍 全面调查："通知凶杀科。调查丈夫。他20年前有动机和机会。"' }, consequence: { en: '⚖️ Justice Served: He confesses. The remains are buried properly. His new wife leaves him. Cold cases matter.', th: '⚖️ ความยุติธรรมสำเร็จ: เขาสารภาพ ซากถูกฝังอย่างเหมาะสม ภรรยาใหม่ของเขาทิ้งเขา คดีเก่ามีความสำคัญ', zh: '⚖️ 正义得到伸张：他坦白了。遗骸被妥善安葬。他的新妻子离开了他。陈年旧案很重要。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Quiet Closure: "Identify the body. Give the family closure. But don\'t pursue murder charges. Too much time has passed."', th: '🤝 การปิดเงียบๆ: "ระบุศพ ให้ครอบครัวปิดเรื่อง แต่อย่าดำเนินคดีฆาตกรรม เวลาผ่านไปมากเกินไป"', zh: '🤝 安静的结案："确认尸体。让家人得到了结。但不要追究谋杀指控。时间过去太久了。"' }, consequence: { en: '☮️ Peaceful Lie: The original family gets to bury their daughter. The new family is spared. But you enabled a murderer to keep his secret.', th: '☮️ การโกหกอย่างสงบ: ครอบครัวเดิมได้ฝังลูกสาว ครอบครัวใหม่รอดพ้น แต่คุณช่วยให้ฆาตกรเก็บความลับของเขาไว้', zh: '☮️ 和平的谎言：原家庭得以埋葬女儿。新家庭得以幸免。但你帮助了凶手保守秘密。' }, stats: { competence: 20, ethics: -20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '📞 Anonymous Tip: "Leak the identity to a true crime podcast. Let public pressure force police action without your name attached."', th: '📞 ทิปนิรนาม: "รั่วไหลข้อมูลให้พอดคาสต์อาชญากรรมจริง ให้แรงกดดันสาธารณะบังคับให้ตำรวจดำเนินการโดยไม่มีชื่อของคุณ"', zh: '📞 匿名举报："将身份泄露给真实犯罪播客。让公众压力迫使警方行动，而不附上你的名字。"' }, consequence: { en: '📻 Media Frenzy: The case reopens. You avoid direct involvement. But the podcast misreports facts and damages both families unnecessarily.', th: '📻 สื่อคลั่งไคล้: คดีเปิดใหม่ คุณหลีกเลี่ยงการมีส่วนร่วมโดยตรง แต่พอดคาสต์รายงานข้อเท็จจริงผิดและทำความเสียหายต่อครอบครัวทั้งสองอย่างไม่จำเป็น', zh: '📻 媒体狂热：案件重新开启。你避免直接参与。但播客错误报道事实，不必要地伤害了两个家庭。' }, stats: { competence: 10, ethics: 0, leadership: -10, innovation: 20 } },
            {
                id: 'D', text: { en: '🗑️ Destroy Records: "Misfile the dental match. Let the skeleton remain a Jane Doe. Preserve the peace."', th: '🗑️ ทำลายบันทึก: "ยื่นการจับคู่ทันตกรรมผิด ปล่อยให้โครงกระดูกยังคงเป็น Jane Doe รักษาความสงบ"', zh: '🗑️ 销毁记录："错误归档牙科匹配。让骨骼保持无名氏状态。保持和平。"' }, consequence: {
                    en: '👻 Haunted: The original family never gets closure. The spirits haunt you. Your conscience eats you alive eventually.', th: '👻 หลอกหลอน: ครอบครัวเดิมไม่เคยได้ปิดเรื่อง วิญญาณหลอกหลอนคุณ จิตสำนึกของคุณกัดกินคุณจนในที่สุด', zh: '👻 闹鬼：原家庭永远得不到答案。鬼魂缠着你。你的良心最终吞噬了你。'
                }, stats: { competence: -20, ethics: -50, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'forensic_011',
        text: { en: '🧬 Chimera Dispute: DNA from a crime scene matches the suspect... but only partially. It also matches his unborn twin. He is a chimera. The jury is confused. The defense claims "It wasn\'t him, it was his inner brother."', th: '🧬 ข้อพิพาทไคเมร่า: DNA จากที่เกิดเหตุตรงกับผู้ต้องสงสัย... แต่เพียงบางส่วน มันยังตรงกับฝาแฝดที่ยังไม่เกิดของเขาด้วย เขาเป็นไคเมร่า ลูกขุนสับสน ฝ่ายจำเลยอ้างว่า "ไม่ใช่เขา แต่เป็นพี่น้องภายในของเขา"', zh: '🧬 嵌合体争议：犯罪现场的DNA与嫌疑人匹配...但只是部分匹配。它还匹配他未出生的双胞胎。他是个嵌合体。陪审团很困惑。辩方声称"不是他，是他体内的兄弟。"' },
        options: [
            { id: 'A', text: { en: '🧑‍🏫 Biology Lesson: "Spend days educating the jury on chimerism. It is still ONE person. He is responsible."', th: '🧑‍🏫 บทเรียนชีววิทยา: "ใช้เวลาหลายวันให้ความรู้ลูกขุนเรื่องไคเมร่า มันยังคงเป็นคนคนเดียว เขาต้องรับผิดชอบ"', zh: '🧑‍🏫 生物课："花几天时间教育陪审团关于嵌合体。这仍然是一个人。他要负责。"' }, consequence: { en: '🧠 Clarity Wins: It\'s boring, but the jury understands. They convict. You set a legal precedent for genetic anomalies.', th: '🧠 ความชัดเจนชนะ: มันน่าเบื่อ แต่ลูกขุนเข้าใจ พวกเขาตัดสินลงโทษ คุณสร้างบรรทัดฐานทางกฎหมายสำหรับความผิดปกติทางพันธุกรรม', zh: '🧠 清晰获胜：这很无聊，但陪审团明白了。他们定罪。你为基因异常设定了法律先例。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '🤷 Simplify to "Match": "Don\'t confuse them. Just say \'It is a match\'. Omit the biological nuance."', th: '🤷 ทำให้ง่ายเป็น "ตรงกัน": "อย่าทำให้พวกเขาสับสน แค่บอกว่า \'มันตรงกัน\' ละเว้นรายละเอียดทางชีวภาพ"', zh: '🤷 简化为"匹配"："不要让他们困惑。只说\'是匹配的\'。省略生物学上的细微差别。"' }, consequence: { en: '⚖️ Appeal Risk: Convicted. But defense appeals on "suppressed scientific evidence". The case drags on for years.', th: '⚖️ ความเสี่ยงอุทธรณ์: ถูกตัดสินลงโทษ แต่จำเลยอุทธรณ์เรื่อง "ปิดบังหลักฐานทางวิทยาศาสตร์" คดียืดเยื้อหลายปี', zh: '⚖️ 上诉风险：定罪。但辩方以"隐瞒科学证据"为由上诉。案件拖延多年。' }, stats: { competence: 30, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🔬 Secondary Evidence: "DNA is messy. Focus on fingerprints and footprints. Use DNA only as backup."', th: '🔬 หลักฐานรอง: "DNA มันยุ่งเหยิง เน้นลายนิ้วมือและรอยเท้า ใช้ DNA เป็นแค่ตัวสำรอง"', zh: '🔬 次要证据："DNA很乱。专注于指纹和脚印。仅将DNA作为备份。"' }, consequence: { en: '👣 Solid Ground: You build a traditional case. It\'s harder, but bulletproof. He is convicted without the biological circus.', th: '👣 พื้นฐานแน่น: คุณสร้างคดีแบบดั้งเดิม ยากกว่า แต่กันกระสุน เขาถูกตัดสินลงโทษโดยไม่ต้องมีละครสัตว์ทางชีวภาพ', zh: '👣 坚实基础：你建立了一个传统的案件。更难，但无懈可击。他在没有生物学闹剧的情况下被定罪。' }, stats: { competence: 40, ethics: 50, leadership: 20, innovation: 10 } },
            { id: 'D', text: { en: '😨 "Evil Twin": "Play into it! Maybe he has a split personality controlled by the twin DNA! (Pseudoscience)"', th: '😨 "แฝดชั่วร้าย": "เล่นตามน้ำ! บางทีเขาอาจมีบุคลิกแตกแยกที่ควบคุมโดย DNA แฝด! (วิทย์เทียม)"', zh: '😨 "邪恶双胞胎"："顺水推舟！也许他有一个由双胞胎DNA控制的分裂人格！（伪科学）"' }, consequence: { en: '📺 Media Sensation: True Crime fanatics love you. The scientific community disowns you. You are a joke.', th: '📺 สื่อตื่นเต้น: แฟนคลับอาชญากรรมจริงรักคุณ ชุมชนวิทยาศาสตร์ตัดหางปล่อยวัด คุณกลายเป็นตัวตลก', zh: '📺 媒体轰动：真实犯罪狂热者爱你。科学界不承认你。你是个笑话。' }, stats: { competence: -30, ethics: -50, leadership: -20, innovation: -40 } }
        ]
    },
    {
        id: 'forensic_012',
        text: { en: '🔥 Arson or Flashover?: A historic building burned down. Developers want the land. Burn patterns look like liquid accelerant (arson), but could be "flashover" (accidental intense heat). The mayor wants it cleared for construction.', th: '🔥 วางเพลิงหรือ Flashover?: อาคารประวัติศาสตร์ถูกไฟไหม้ นักพัฒนาต้องการที่ดิน รูปแบบการไหม้ดูเหมือนสารเร่งที่เป็นของเหลว (วางเพลิง) แต่อาจเป็น "flashover" (ความร้อนรุนแรงโดยอุบัติเหตุ) นายกเทศมนตรีต้องการเคลียร์ที่เพื่อก่อสร้าง', zh: '🔥 纵火还是轰燃？：一座历史建筑被烧毁。开发商想要这块地。燃烧模式看起来像液体助燃剂（纵火），但也可能是"轰燃"（意外的剧烈高热）。市长希望清理现场以进行施工。' },
        options: [
            { id: 'A', text: { en: '🐕 Bring the Dog: "Use an accelerant-sniffing dog. If he sits, it\'s arson. If not, accident."', th: '🐕 นำสุนัขมา: "ใช้สุนัขดมกลิ่นสารเร่ง ถ้ามันนั่ง คือวางเพลิง ถ้าไม่ คืออุบัติเหตุ"', zh: '🐕 带狗来："使用嗅探助燃剂的狗。如果它坐下，就是纵火。如果没有，就是意外。"' }, consequence: { en: '🐶 False Positive Risk: Dog signals. You declare arson. Later, chemical tests show it was just melted plastic. Embarrassing.', th: '🐶 ความเสี่ยงผลบวกเท็จ: สุนัขส่งสัญญาณ คุณประกาศวางเพลิง ต่อมาผลทดสอบเคมีโชว์ว่าเป็นแค่พลาสติกละลาย น่าอาย', zh: '🐶 假阳性风险：狗发出信号。你宣布纵火。后来，化学测试显示那只是融化的塑料。尴尬。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🧪 Gas Chromatography: "Dig up the floor. Run GC-MS analysis. Takes 2 weeks. Tell the mayor to wait."', th: '🧪 แก๊สโครมาโทกราฟี: "ขุดพื้น วิเคราะห์ GC-MS ใช้เวลา 2 สัปดาห์ บอกนายกฯ ให้รอ"', zh: '🧪 气相色谱："挖开地板。进行GC-MS分析。需要2周。告诉市长等着。"' }, consequence: { en: '⏳ Truth Prevails: No accelerant found. It was an electrical fault. The developers are sued for negligence. Science wins.', th: '⏳ ความจริงชนะ: ไม่พบสารเร่ง มันเป็นไฟฟ้าลัดวงจร นักพัฒนาถูกฟ้องฐานละเลย วิทยาศาสตร์ชนะ', zh: '⏳ 真理战胜：未发现助燃剂。是电气故障。开发商因疏忽被起诉。科学胜利。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🏗️ Clear the Site: "Pattern is inconclusive. Can\'t prove arson. Let them build. It\'s good for the economy."', th: '🏗️ เคลียร์พื้นที่: "รูปแบบไม่สรุป พิสูจน์วางเพลิงไม่ได้ ให้พวกเขาสร้าง ดีต่อเศรษฐกิจ"', zh: '🏗️ 清理现场："模式不确定。无法证明纵火。让他们建吧。这对经济有好处。"' }, consequence: { en: '💰 Rapid Growth: The mall is built. But you always wonder if you let a criminal burn down history.', th: '💰 การเติบโตอย่างรวดเร็ว: ห้างถูกสร้าง แต่คุณสงสัยเสมอว่าคุณปล่อยให้อาชญากรเผาประวัติศาสตร์หรือไม่', zh: '💰 快速增长：商场建成了。但你总是怀疑自己是否让罪犯烧毁了历史。' }, stats: { competence: 10, ethics: -20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '💻 Fire Simulation: "Recreate the building in 3D. Run physics sims to see if natural fire could create those patterns."', th: '💻 จำลองไฟ: "สร้างอาคารใน 3D รันซิมฟิสิกส์เพื่อดูว่าไฟธรรมชาติสร้างรูปแบบเหล่านั้นได้ไหม"', zh: '💻 火灾模拟："在3D中重建建筑。运行物理模拟，看看自然火灾是否会产生这些模式。"' }, consequence: { en: '🔥 Virtual Proof: The sim matches perfectly. It was a ventilation issue, not arson. You revolutionize fire investigation.', th: '🔥 บทพิสูจน์เสมือน: ซิมตรงเป๊ะ มันเป็นปัญหาการระบายอากาศ ไม่ใช่วางเพลิง คุณปฏิวัติการสืบสวนไฟไหม้', zh: '🔥 虚拟证据：模拟完美匹配。是通风问题，不是纵火。你彻底改变了火灾调查。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 } }
        ]
    },
    {
        id: 'forensic_013',
        text: { en: '🔫 The Ghost Gun: A murder weapon was a 3D-printed plastic gun that shattered upon firing. You have a bag of plastic shards. The police found a printer at the suspect\'s house.', th: '🔫 ปืนผี: อาวุธสังหารคือปืนพลาสติกพิมพ์ 3D ที่แตกละเอียดเมื่อยิง คุณมีถุงใส่เศษพลาสติก ตำรวจพบเครื่องพิมพ์ที่บ้านผู้ต้องสงสัย', zh: '🔫 幽灵枪：凶器是一把3D打印的塑料枪，射击时粉碎了。你有一袋塑料碎片。警方在嫌疑人家中发现了一台打印机。' },
        options: [
            { id: 'A', text: { en: '🧩 The Puzzle: "Spend 3 weeks gluing shards together to match the striations on the bullet."', th: '🧩 จิ๊กซอว์: "ใช้เวลา 3 สัปดาห์ทากาวเศษเข้าด้วยกันเพื่อจับคู่กับร่องรอยบนกระสุน"', zh: '🧩 拼图："花3周把碎片粘在一起，以匹配子弹上的条纹。"' }, consequence: { en: '🔫 Perfect Match: You reconstruct the barrel. It matches the bullet. Irrefutable proof. You have zero sleep.', th: '🔫 การจับคู่สมบูรณ์: คุณสร้างลำกล้องใหม่ มันตรงกับกระสุน หลักฐานที่ปฏิเสธไม่ได้ คุณไม่ได้นอนเลย', zh: '🔫 完美匹配：你重构了枪管。与子弹匹配。无可辩驳的证据。你完全没睡。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🖨️ Printer Forensics: "Analyze the printer\'s EEPROM. See what file was last printed. Match the filament chemical composition."', th: '🖨️ นิติเวชเครื่องพิมพ์: "วิเคราะห์ EEPROM ของเครื่องพิมพ์ ดูว่าไฟล์ล่าสุดที่พิมพ์คืออะไร จับคู่ส่วนประกอบทางเคมีของเส้นพลาสติก"', zh: '🖨️ 打印机取证："分析打印机的EEPROM。看看上次打印的是什么文件。匹配长丝化学成分。"' }, consequence: { en: '💾 Digital Smoking Gun: The logs show "Gun_Final_V2.stl" printed at the time of murder. Conviction secured fast.', th: '💾 หลักฐานเด็ดดิจิทัล: บันทึกแสดง "Gun_Final_V2.stl" ถูกพิมพ์เวลาฆาตกรรม การตัดสินลงโทษรวดเร็ว', zh: '💾 数字确凿证据：日志显示"Gun_Final_V2.stl"在谋杀发生时被打印。快速定罪。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 50 } },
            { id: 'C', text: { en: '🤷 Too Fragmented: "It\'s just plastic dust. No rifling left. Case is unsolvable physically."', th: '🤷 แตกละเอียดเกิน: "มันแค่ฝุ่นพลาสติก ไม่มีเกลียวเหลือ คดีแก้ไม่ได้ทางกายภาพ"', zh: '🤷 太破碎："只是塑料粉末。没有留下膛线。案件在物理上无法解决。"' }, consequence: { en: '❌ Suspect Walks: Without a weapon link, the defense claims he was just printing toys. He gets away.', th: '❌ ผู้ต้องสงสัยรอด: ปราศจากความเชื่อมโยงอาวุธ ฝ่ายจำเลยอ้างว่าเขาแค่พิมพ์ของเล่น เขาหนีไปได้', zh: '❌ 嫌疑人走了：没有武器联系，辩方声称他只是在打印玩具。他逃脱了。' }, stats: { competence: -20, ethics: -10, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🧪 Filament Batch: "Trace the plastic to a specific verified batch sold only to him."', th: '🧪 ล็อตเส้นพลาสติก: "ตามรอยพลาสติกไปยังล็อตเฉพาะที่ตรวจสอบแล้วซึ่งขายให้เขาเท่านั้น"', zh: '🧪 长丝批次："追踪塑料到仅卖给他的特定验证批次。"' }, consequence: { en: '📊 Probability Argument: It\'s strong evidence, but circumstantial. Defense argues "Anyone could buy that batch". Weak finish.', th: '📊 ข้อโต้แย้งความน่าจะเป็น: หลักฐานหนักแน่น แต่เป็นพยานแวดล้อม จำเลยแย้ง "ใครก็ซื้อล็อตนั้นได้" จบไม่สวย', zh: '📊 概率论证：这是强有力的证据，但是旁证。辩方辩称"任何人都可以买那一批"。结局无力。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 20 } }
        ]
    },
    {
        id: 'forensic_014',
        text: { en: '💊 Celebrity Overdose: A pop star dies. Public screams murder. Tox screen shows a lethal mix of rare drugs. You find a tiny puncture wound. Is it a needle (murder) or an insect bite (accident)?', th: '💊 ดาราโอเวอร์โดส: ป๊อปสตาร์เสียชีวิต สาธารณะตะโกนว่าฆาตกรรม ผลสารพิษโชว์ส่วนผสมยามรณะที่หายาก คุณพบแผลเจาะเล็กๆ เป็นเข็ม (ฆาตกรรม) หรือแมลงกัด (อุบัติเหตุ)?', zh: '💊 名人吸毒过量：一位流行歌星去世。公众惊呼谋杀。毒理筛查显示罕见药物的致死混合物。你发现一个微小的穿刺伤口。是针头（谋杀）还是虫咬（意外）？' },
        options: [
            { id: 'A', text: { en: '🔬 Tissue Histology: "Slice the wound site. Look for inflammatory response. Insect venom vs drug residue."', th: '🔬 เนื้อเยื่อวิทยา: "เฉือนแผล ดูการตอบสนองการอักเสบ พิษแมลง vs ตกค้างยา"', zh: '🔬 组织学："切片伤口部位。寻找炎症反应。昆虫毒液与药物残留。"' }, consequence: { en: '🔍 The Truth: You find microscopic metal shavings. It was a needle. Homicide investigation launched. You are the star witness.', th: '🔍 ความจริง: คุณพบเศษโลหะขนาดเล็กจิ๋ว มันคือเข็ม การสืบสวนฆาตกรรมเริ่มขึ้น คุณเป็นพยานปากเอก', zh: '🔍 真相：你发现了微小的金属屑。是针头。凶杀调查启动。你是明星证人。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '📰 Leak "Accident": "Calm the public. Say it was natural/accidental. Avoid a media frenzy."', th: '📰 ปล่อยข่าว "อุบัติเหตุ": "ทำให้สาธารณะสงบ บอกว่าเป็นธรรมชาติ/อุบัติเหตุ หลีกเลี่ยงสื่อคลั่ง"', zh: '📰 泄露"意外"："以此平息公众。说是自然/意外。避免媒体狂热。"' }, consequence: { en: '🤥 Conspiracy Born: Fans don\'t believe you. #JusticeForStar trends. You look like a cover-up artist.', th: '🤥 ทฤษฎีสมคบคิดเกิด: แฟนๆ ไม่เชื่อคุณ #JusticeForStar ติดเทรนด์ คุณดูเหมือนนักปกปิด', zh: '🤥 阴谋诞生：粉丝不相信你。#为明星伸张正义 开始流行。你看起来像个掩盖真相的人。' }, stats: { competence: 10, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '💉 Test the Wound: "Swab the puncture for DNA. Did the killer lick the needle? (Unlikely but possible)"', th: '💉 ทดสอบแผล: "Swap แผลหา DNA ฆาตกรเลียเข็มไหม? (ไม่น่าเป็นไปได้แต่เป็นไปได้)"', zh: '💉 测试伤口："擦拭穿刺处寻找DNA。凶手舔过针头吗？（不太可能但有可能）"' }, consequence: { en: '🧬 Long Shot Fails: No DNA. You wasted time. The body is degrading. Should have done histology.', th: '🧬 ยิงไกลพลาด: ไม่มี DNA คุณเสียเวลา ศพกำลังเน่า น่าจะทำเนื้อเยื่อวิทยา', zh: '🧬 鸟枪法失败：没有DNA。你浪费了时间。尸体正在降解。本该做组织学的。' }, stats: { competence: 20, ethics: 20, leadership: -10, innovation: -10 } },
            { id: 'D', text: { en: '🕵️ Psychological Profile: "Drugs suggest suicide. The wound is irrelevant. Declare suicide."', th: '🕵️ โปรไฟล์จิตวิทยา: "ยาบ่งบอกการฆ่าตัวตาย แผลไม่เกี่ยว ประกาศฆ่าตัวตาย"', zh: '🕵️ 心理侧写："药物暗示自杀。伤口无关紧要。宣布自杀。"' }, consequence: { en: '😡 Wrong Conclusion: It was murder. The killer comes forward 5 years later for a book deal. You are disgraced.', th: '😡 ข้อสรุปผิด: มันคือฆาตกรรม ฆาตกรออกมา 5 ปีต่อมาเพื่อขายหนังสือ คุณเสียหน้า', zh: '😡 错误结论：是谋杀。凶手5年后出来出书。你丢脸了。' }, stats: { competence: -30, ethics: -20, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_015',
        text: { en: '💻 Ransomware Attack: Hackers lock your lab\'s database. They want 10 Bitcoin. If you don\'t pay, they delete evidence for 500 active cases. Trials will be dismissed. Backups failed.', th: '💻 โจมตี Ransomware: แฮกเกอร์ล็อคฐานข้อมูลแล็บของคุณ พวกเขาต้องการ 10 Bitcoin ถ้าไม่จ่าย พวกเขาลบหลักฐาน 500 คดี คดีจะถูกยกฟ้อง สำรองข้อมูลล้มเหลว', zh: '💻 勒索软件攻击：黑客锁定了你实验室的数据库。他们要10个比特币。如果你不付钱，他们就删除500个活跃案件的证据。审判将被驳回。备份失败。' },
        options: [
            { id: 'A', text: { en: '💸 Pay Them: "Use the discretionary fund. We cannot let rapists and murderers walk free."', th: '💸 จ่ายพวกเขา: "ใช้กองทุนฉุกเฉิน เราปล่อยให้ผู้ข่มขืนและฆาตกรลอยนวลไม่ได้"', zh: '💸 付钱给他们："使用这笔自由裁量资金。我们不能让强奸犯和杀人犯逍遥法外。"' }, consequence: { en: '🔓 Unlocked but Broke: Data restored. But you funded criminals. The FBI investigates you for aiding terrorists.', th: '🔓 ปลดล็อคแต่ถังแตก: ข้อมูลกู้คืน แต่คุณให้เงินอาชญากร FBI สอบสวนคุณฐานช่วยผู้ก่อการร้าย', zh: '🔓 解锁但破产：数据恢复。但你资助了罪犯。FBI调查你资助恐怖分子。' }, stats: { competence: 30, ethics: -20, leadership: 40, innovation: 0 } },
            { id: 'B', text: { en: '🛡️ Don\'t Negotiate: "Refuse. Re-process physical evidence for high-priority cases. We work 24/7 for months."', th: '🛡️ ไม่เจรจา: "ปฏิเสธ ประมวลผลหลักฐานทางกายภาพใหม่สำหรับคดีด่วน เราทำงาน 24/7 เป็นเดือน"', zh: '🛡️ 不谈判："拒绝。为高优先级案件重新处理物证。我们几个月全天候工作。"' }, consequence: { en: '🏋️ Brutal Grind: You save the top 50 cases. 450 minor cases are dismissed. Your team hates you, but you kept dignity.', th: '🏋️ งานหนักสายตัวแทบขาด: คุณช่วย 50 คดีท็อป 450 คดีเล็กถูกยกฟ้อง ทีมเกลียดคุณ แต่คุณรักษาศักดิ์ศรี', zh: '🏋️ 残酷的折磨：你挽救了前50个案件。450个要案件被驳回。你的团队恨你，但你保持了尊严。' }, stats: { competence: 40, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '☠️ Counter-Hack: "Hire a grey-hat hacker to break their encryption. Illegal but necessary."', th: '☠️ แฮกกลับ: "จ้างแฮกเกอร์หมวกเทาเจาะการเข้ารหัส ผิดกฎหมายแต่จำเป็น"', zh: '☠️ 反黑客："雇佣灰帽黑客破解他们的加密。非法但必要。"' }, consequence: { en: '⚔️ Cyber War: The hacker fails and corrupts the data permanently. Now you have nothing. Total disaster.', th: '⚔️ สงครามไซเบอร์: แฮกเกอร์พลาดและทำข้อมูลเสียหายถาวร ตอนนี้คุณไม่เหลืออะไร หายนะสิ้นเชิง', zh: '⚔️ 网络战：黑客失败并永久损坏了数据。现在你一无所有。彻底的灾难。' }, stats: { competence: 10, ethics: -10, leadership: 10, innovation: 30 } },
            { id: 'D', text: { en: '📢 Public Plea: "Go to the news. Ask hackers for the key. Shame them."', th: '📢 ขอร้องสาธารณะ: "ไปออกข่าว ขอคีย์จากแฮกเกอร์ ประจานพวกเขา"', zh: '📢 公众请求："去上新闻。向黑客要密钥。羞辱他们。"' }, consequence: { en: '🤡 Mockery: Hackers release private emails of your staff instead. You provided entertainment, not a solution.', th: '🤡 การล้อเลียน: แฮกเกอร์ปล่อยอีเมลส่วนตัวของทีมงานคุณแทน คุณสร้างความบันเทิง ไม่ใช่ทางแก้ไข', zh: '🤡 嘲笑：黑客反而泄露了你员工的私人邮件。你提供了娱乐，而不是解决方案。' }, stats: { competence: -20, ethics: 10, leadership: -30, innovation: -10 } }
        ]
    },
    {
        id: 'forensic_016',
        text: { en: '🤖 AI Truth Detector: The court is trialing a new AI that analyzes expert witnesses for "micro-expressions of deceit". It flags your truthful testimony about DNA evidence as "High Probability of Deception".', th: '🤖 AI จับเท็จ: ศาลกำลังทดลอง AI ใหม่ที่วิเคราะห์พยานผู้เชี่ยวชาญหา "การแสดงออกทางสีหน้าขนาดเล็กของการหลอกลวง" มันปักธงคำให้การที่เป็นจริงของคุณเกี่ยวกับหลักฐาน DNA ว่า "มีความน่าจะเป็นที่จะหลอกลวงสูง"', zh: '🤖 AI测谎仪：法院正在试用一种新的AI，分析专家证人的"微表情欺骗"。它将你关于DNA证据的真实证词标记为"欺骗概率高"。' },
        options: [
            { id: 'A', text: { en: '🗣️ Argue with AI: "This machine is junk! I am a scientist! My pulse is high because I am angry, not lying!"', th: '🗣️ เถียงกับ AI: "เครื่องจักรนี้มันขยะ! ฉันเป็นนักวิทยาศาสตร์! ชีพจรฉันเต้นเร็วเพราะฉันโกรธ ไม่ใช่โกหก!"', zh: '🗣️ 与AI争论："这机器是垃圾！我是科学家！我脉搏快是因为我生气，不是撒谎！"' }, consequence: { en: '📉 Credibility Drop: You look defensive. The AI marks you as "Hostile". The jury trusts the screen over the human.', th: '📉 ความน่าเชื่อถือลดลง: คุณดูเหมือนแก้ตัว AI ระบุว่าคุณ "เป็นปฏิปักษ์" ลูกขุนเชื่อหน้าจอมากกว่ามนุษย์', zh: '📉 誉下降：你看起来像是在防御。AI将你标记为"敌对"。陪审团相信屏幕胜过相信人。' }, stats: { competence: 0, ethics: 10, leadership: -20, innovation: -20 } },
            { id: 'B', text: { en: '😐 Poker Face: "suppress all emotion. Speak like a monotone synthesizer. Beat the algorithm."', th: '😐 หน้านิ่ง: "ระงับอารมณ์ทั้งหมด พูดเหมือนเครื่องสังเคราะห์เสียงโทนเดียว เอาชนะอัลกอริทึม"', zh: '😐 扑克脸："压抑所有情绪。像单调合成器一样说话。打败算法。"' }, consequence: { en: '✅ Green Light: The AI validates you as "Truthful". But the jury finds you creepy and cold. You win, but at what cost?', th: '✅ ไฟเขียว: AI ยืนยันว่าคุณ "จริงใจ" แต่ลูกขุนมองว่าคุณน่าขนลุกและเย็นชา คุณชนะ แต่ต้องแลกด้วยอะไร?', zh: '✅ 绿灯：AI验证你为"诚实"。但陪审团觉得你令人毛骨悚然和冷漠。你赢了，但代价是什么？' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'C', text: { en: '🔬 Attack the Code: "Ignore the result. testify about the AI\'s lack of peer review and training data bias."', th: '🔬 โจมตีโค้ด: "เพิกเฉยต่อผลลัพธ์ ให้การเกี่ยวกับการขาดการตรวจสอบโดยผู้เชี่ยวชาญและอคติของข้อมูลฝึกสอนของ AI"', zh: '🔬 攻击代码："忽略结果。作证说明AI缺乏同行评审和训练数据偏差。"' }, consequence: { en: '🛡️ System Dismantled: You expose the AI\'s flaws. The judge throws out the AI system. You save future witnesses.', th: '🛡️ ระบบพังทลาย: คุณเปิดโปงข้อบกพร่องของ AI ผู้พิพากษายกเลิกระบบ AI คุณช่วยพยานในอนาคต', zh: '🛡️ 系统拆除：你揭露了AI的缺陷。法官废除了AI系统。你拯救了未来的证人。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '😰 Panic: "Stutter. Sweat. Doubt yourself. Maybe I AM wrong?"', th: '😰 ตื่นตระหนก: "ติดอ่าง เหงื่อแตก สงสัยตัวเอง บางทีฉันอาจจะผิด?"', zh: '😰 恐慌："结巴。出汗。怀疑自己。也许我是错的？"' }, consequence: { en: '❌ Witness Impeached: You are removed from the stand. The case collapses. Your career might be over.', th: '❌ พยานถูกปลด: คุณถูกถอดจากคอกพยาน คดีล้ม อาชีพของคุณอาจจบสิ้น', zh: '❌ 证人被弹劾：你被赶下证席。案件崩溃。你的职业生涯可能结束了。' }, stats: { competence: -40, ethics: 0, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_017',
        text: { en: '🧟 Body Farm Donation: A family wants their grandmother\'s body back for burial. But she donated herself to your "Body Farm" to study decomposition rates. She is currently... halfway through the process.', th: '🧟 การบริจาค Body Farm: ครอบครัวต้องการศพคุณย่าคืนเพื่อไปฝัง แต่เธอบริจาคตัวเองให้ "Body Farm" ของคุณเพื่อศึกษาอัตราการเน่าเปื่อย ตอนนี้เธอ... ผ่านกระบวนการไปครึ่งทางแล้ว', zh: '🧟 尸体农场捐赠：一个家庭想要回祖母的尸体安葬。但她把自己捐给了你的"尸体农场"研究分解率。她目前...处于过程的一半。' },
        options: [
            { id: 'A', text: { en: '🚫 Contract is Contract: "Refuse. She signed the papers. Science comes first. It is legal."', th: '🚫 สัญญาคือสัญญา: "ปฏิเสธ เธอเซ็นเอกสาร วิทยาศาสตร์มาก่อน มันถูกกฎหมาย"', zh: '🚫 合同就是合同："拒绝。她签了文件。科学第一。这是合法的。"' }, consequence: { en: '📰 PR Nightmare: "Lab holds grandma hostage!" The headlines are brutal. Funding drops due to public outrage.', th: '📰 ฝันร้าย PR: "แล็บจับคุณย่าเป็นตัวประกัน!" พาดหัวข่าวโหดร้าย เงินทุนลดลงเพราะความโกรธแค้นของสาธารณะ', zh: '📰 公关噩梦："实验室扣押祖母！"标题很残酷。由于公众愤怒，资金下降。' }, stats: { competence: 10, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '📦 Return Remains: "Halt the study. Cremate what is left. Return the ashes. Show compassion."', th: '📦 คืนร่าง: "หยุดการศึกษา เผาสิ่งที่เหลือ คืนเถ้ากระดูก แสดงความเห็นใจ"', zh: '📦 归还遗体："停止研究。火化剩下的部分。归还骨灰。表现出同情心。"' }, consequence: { en: '🤝 Human Decency: The family is grateful. You lose data, but gain community respect.', th: '🤝 ศักดิ์ศรีความเป็นมนุษย์: ครอบครัวซาบซึ้ง คุณเสียข้อมูล แต่ได้ความเคารพจากชุมชน', zh: '🤝 人类尊严：家人很感激。你丢失了数据，但获得了社区的尊重。' }, stats: { competence: 0, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🤥 "She is buried": "Lie. Tell them she was already cremated and scattered as per contract. Provide fake ashes."', th: '🤥 "เธอถูกฝังแล้ว": "โกหก บอกพวกเขาว่าเธอถูกเผาและโปรยเถ้าแล้วตามสัญญา ให้เถ้าปลอม"', zh: '🤥 "她被埋葬了"："撒谎。告诉他们她已经按照合同被火化并撒掉了。提供假骨灰。"' }, consequence: { en: '⚖️ Fraud Suit: They find out. Not only is it fraud, it is mishandling of remains. You are sued for millions.', th: '⚖️ คดีฉ้อโกง: พวกเขารู้ ไม่เพียงแต่ฉ้อโกง แต่ยังจัดการศพไม่ถูกต้อง คุณถูกฟ้องหลายล้าน', zh: '⚖️ 欺诈诉讼：他们发现了。不仅是欺诈，还是对遗体的不当处理。你被起诉索赔数百万。' }, stats: { competence: -20, ethics: -50, leadership: -30, innovation: 0 } },
            { id: 'D', text: { en: '🎓 Educational Compromise: "Invite the family to see the contribution she is making to solving murders. Explain the science."', th: '🎓 การประนีประนอมเพื่อการศึกษา: "เชิญครอบครัวมาดูการมีส่วนร่วมของเธอในการไขคดีฆาตกรรม อธิบายวิทยาศาสตร์"', zh: '🎓 教育妥协："邀请家人看看她为破获谋杀案所做的贡献。解释科学。"' }, consequence: { en: '🧠 Perspective Shift: They are horrified but understand. They agree to let the study finish. risky but effective.', th: '🧠 เปลี่ยนมุมมอง: พวกเขาสยดสยองแต่เข้าใจ พวกเขาตกลงให้การศึกษาเสร็จสิ้น เสี่ยงแต่ได้ผล', zh: '🧠 视角转变：他们很害怕但理解。他们同意让研究完成。冒险但有效。' }, stats: { competence: 40, ethics: 30, leadership: 50, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_018',
        text: { en: '🧬 The Male Female: Routine DNA swabs from a female victim\'s fingernails show male DNA. Police arrest her boyfriend. But deeper analysis suggests the male DNA is... inside her blood cells (Microchimerism from a past pregnancy).', th: '🧬 หญิงที่มี DNA ชาย: การตรวจ DNA จากเล็บของเหยื่อหญิงพบ DNA ชาย ตำรวจจับแฟนหนุ่มของเธอ แต่การวิเคราะห์ลึกซึ้งชี้ว่า DNA ชายอยู่... ในเม็ดเลือดของเธอ (Microchimerism จากการตั้งครรภ์ในอดีต)', zh: '🧬 男性女性：从女性受害者指甲中提取的常规DNA显示有男性DNA。警方逮捕了她的男友。但更深入的分析表明，男性DNA...在她的血细胞内（来自过去怀孕的微嵌合体）。' },
        options: [
            { id: 'A', text: { en: '🛑 Stop the Arrest: "Release him. The \'foreign\' DNA is her own. It\'s from her son born 10 years ago."', th: '🛑 หยุดการจับกุม: "ปล่อยเขา DNA \'แปลกปลอม\' คือของเธอเอง มันมาจากลูกชายที่เกิดเมื่อ 10 ปีก่อน"', zh: '🛑 停止逮捕："释放他。\'外来\'DNA是她自己的。来自她10年前出生的儿子。"' }, consequence: { en: '🔓 Freedom: The boyfriend is released. You prevented a false accusation based on biological rarity.', th: '🔓 อิสรภาพ: แฟนหนุ่มถูกปล่อย คุณป้องกันข้อกล่าวหาเท็จจากความหายากทางชีวภาพ', zh: '🔓 自由：男友被释放。你基于生物学上的罕见性阻止了诬告。' }, stats: { competence: 50, ethics: 50, leadership: 20, innovation: 30 } },
            { id: 'B', text: { en: '🤷 Let It Play Out: "Report \'Male DNA found\'. Only explain the nuance if asked. Not my job to interpret."', th: '🤷 ปล่อยไปตามเรื่อง: "รายงาน \'พบ DNA ชาย\' อธิบายรายละเอียดเมื่อถูกถามเท่านั้น ไม่ใช่หน้าที่ฉันที่จะตีความ"', zh: '🤷 顺其自然："报告\'发现男性DNA\'。只有在被问到时才解释细微差别。解释不是我的工作。"' }, consequence: { en: '⛓️ Injustice: Defense lawyer misses it. Boyfriend convicted. You technically told the truth but lied by omission.', th: '⛓️ ความไม่ยุติธรรม: ทนายจำเลยพลาด แฟนหนุ่มถูกตัดสินลงโทษ คุณพูดความจริงทางเทคนิคแต่โกหกโดยการละเว้น', zh: '⛓️ 不公正：辩护律师错过了。男友被定罪。你在技术上说了实话，但通过隐瞒撒了谎。' }, stats: { competence: 10, ethics: -40, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🔬 Verify Source: "Test the DNA against her son. Confirm the mismatch with the boyfriend. Be 100% sure."', th: '🔬 ตรวจสอบแหล่งที่มา: "ทดสอบ DNA เทียบกับลูกชายของเธอ ยืนยันว่าไม่ตรงกับแฟนหนุ่ม มั่นใจ 100%"', zh: '🔬 验证来源："将DNA与她儿子进行比对。确认与男友不匹配。百分百确定。"' }, consequence: { en: '🛡️ Scientific Rigor: Validation takes time, but the result is indisputable. You write a paper on it.', th: '🛡️ ความเข้มงวดทางวิทยาศาสตร์: การตรวจสอบใช้เวลา แต่ผลลัพธ์โต้แย้งไม่ได้ คุณเขียนบทความเกี่ยวกับเรื่องนี้', zh: '🛡️ 科学严谨：验证需要时间，但结果无可争议。你为此写了一篇论文。' }, stats: { competence: 40, ethics: 40, leadership: 10, innovation: 20 } },
            { id: 'D', text: { en: '🤫 Hide the Anomaly: "Just ignore that peak in the data. Report \'No foreign DNA\'. Simplify the case."', th: '🤫 ซ่อนความผิดปกติ: "เพิกเฉยต่อยอดกราฟนั้นในข้อมูล รายงาน \'ไม่พบ DNA แปลกปลอม\' ทำให้คดีง่ายขึ้น"', zh: '🤫 隐藏异常："忽略数据中的那个峰值。报告\'无外来DNA\'。简化案件。"' }, consequence: { en: '🗑️ Data Tampering: You altered scientific data to fit a narrative. If caught, you are finished.', th: '🗑️ การปลอมแปลงข้อมูล: คุณแก้ไขข้อมูลวิทยาศาสตร์เพื่อให้เข้ากับเรื่องราว ถ้าถูกจับได้ คุณจบเห่', zh: '🗑️ 数据篡改：你为了配合叙述而篡改科学数据。如果被抓，你就完了。' }, stats: { competence: -30, ethics: -50, leadership: -20, innovation: -10 } }
        ]
    },
    {
        id: 'forensic_019',
        text: { en: '🥀 Pollen Alibi: A murder suspect claims he was at the beach. You find pollen on his shoes. It looks like pine pollen (forest), but could be a rare coastal shrub pollen (beach).', th: '🥀 ข้อแก้ตัวเกสรดอกไม้: ผู้ต้องสงสัยฆาตกรรมอ้างว่าอยู่ที่ชายหาด คุณพบเกสรดอกไม้บนรองเท้า ดูเหมือนเกสรสน (ป่า) แต่อาจเป็นเกสรพุ่มไม้ชายฝั่งที่หายาก (ชายหาด)', zh: '🥀 花粉不在场证明：一名谋杀嫌疑人声称他在海滩。你在他的鞋子上发现了花粉。它看起来像松树花粉（森林），但也可能是一种罕见的沿海灌木花粉（海滩）。' },
        options: [
            { id: 'A', text: { en: '🔬 Electron Microscope: "Use SEM imaging. The texture differences are only visible at 10,000x magnification."', th: '🔬 กล้องจุลทรรศน์อิเล็กตรอน: "ใช้ภาพ SEM ความแตกต่างของพื้นผิวจะเห็นได้ที่กำลังขยาย 10,000 เท่าเท่านั้น"', zh: '🔬 电子显微镜："使用SEM成像。纹理差异只有在10000倍放大倍率下可见。"' }, consequence: { en: '🔍 Resolution: It is the coastal shrub. His alibi checks out! You prevented a wrongful arrest.', th: '🔍 ความละเอียด: มันคือพุ่มไม้ชายฝั่ง ข้อแก้ตัวของเขาผ่าน! คุณป้องกันการจับกุมผิด', zh: '🔍 辨率：是沿海灌木。他的不在场证明查实了！你阻止了错误的逮捕。' }, stats: { competence: 50, ethics: 30, leadership: 10, innovation: 40 } },
            { id: 'B', text: { en: '🌲 Call it Pine: "It looks like pine. It\'s probably pine. He\'s lying. Report it as pine."', th: '🌲 เรียกมันว่าสน: "ดูเหมือนสน น่าจะเป็นสน เขาโกหก รายงานว่าเป็นสน"', zh: '🌲 说它是松树："看起来像松树。大概是松树。他在撒谎。报告说是松树。"' }, consequence: { en: '⚖️ Lazy Error: Defense expert proves you wrong in court. "If it looks like a duck, sometimes it\'s a goose." You look incompetent.', th: '⚖️ ความผิดพลาดขี้เกียจ: ผู้เชี่ยวชาญจำเลยพิสูจน์ว่าคุณผิดในศาล "ถ้ามันดูเหมือนเป็ด บางครั้งมันก็เป็นห่าน" คุณดูไร้ความสามารถ', zh: '⚖️ 懒惰的错误：辩方专家在法庭上证明你错了。"如果它看起来像鸭子，有时它其实是鹅。"你看起来很无能。' }, stats: { competence: -30, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🤷 Inconclusive: "Report \'Pollen Type A\'. Do not specify origin. Let detectives find other evidence."', th: '🤷 ไม่สรุป: "รายงาน \'เกสรชนิด A\' ไม่ระบุแหล่งี่มา ให้นักสืบหาหลักฐานอื่น"', zh: '🤷 不确定："报告\'A型花粉\'。不说明来源。让侦探寻找其他证据。"' }, consequence: { en: '📁 Safe but Useless: The evidence is ignored. The case goes cold. You didn\'t help, didn\'t hurt.', th: '📁 ปลอดภัยแต่ไร้ค่า: หลักฐานถูกเพิกเฉย คดีเงียบ คุณไม่ได้ช่วยและไม่ได้ทำลาย', zh: '📁 安全但无用：证据被忽略。案件变冷。你没帮忙，也没捣乱。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '🌍 Soil Sample Comparison: "Go to the specific beach. Collect soil. Compare the pollen profile variety."', th: '🌍 เปรียบเทียบตัวอย่างดิน: "ไปที่ชายหาดนั้น เก็บดิน เปรียบเทียบความหลากหลายของโปรไฟล์เกสร"', zh: '🌍 土壤样本比较："去那个特定的海滩。收集土壤。比较花粉剖面多样性。"' }, consequence: { en: '🗺️ Ecological Context: The pollen mix matches the beach exactly. Strong corroboration. Good field work.', th: '🗺️ บริบทนิเวศวิทยา: ส่วนผสมเกสรตรงกับชายหาดเป๊ะ การยืนยันที่แข็งแกร่ง งานภาคสนามที่ดี', zh: '🗺️ 生态背景：花粉混合物与海滩完全匹配。强有力的佐证。很棒的实地工作。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'forensic_020',
        text: { en: '💧 Isotope Origins: An unidentified child\'s body is found. No DNA matches. Isotope analysis of the teeth suggests they grew up in a specific, secretive cult compound in the desert. The cult is heavily armed.', th: '💧 ้นกำเนิดไอโซโทป: พบศพเด็กไม่ทราบชื่อ ไม่มี DNA ตรงกัน การวิเคราะห์ไอโซโทปของฟันบ่งชี้ว่าเขาโตในคอมพาวนด์ลัทธิลับเฉพาะในทะเลทราย ลัทธินี้มีอาวุธหนัก', zh: '💧 同位素起源：发现一具不明身份的儿童尸体。没有DNA匹配。牙齿的同位素分析表明他们在沙漠中一个特定的、秘密的邪教大院里长大。该邪教全副武装。' },
        options: [
            { id: 'A', text: { en: '🚨 Raid Recommendation: "Evidence is solid. Recommend immediate SWAT raid to find the parents and other kids."', th: '🚨 แนะนำการบุก: "หลักฐานแน่น แนะนำ SWAT บุกทันทีเพื่อหาพ่อแม่และเด็กคนอื่น"', zh: '🚨 突袭建议："证据确凿。建议特警立即突袭寻找父母和其他孩子。"' }, consequence: { en: '🔫 Waco Situation: The raid turns violent. People die. The isotopes were right, but the cost was high.', th: '🔫 สถานการณ์ Waco: การบุกรุนแรง มีคนตาย ไอโซโทปถูก แต่ราคาที่จ่ายสูง', zh: '🔫 韦科惨案局势：突袭变得暴力。有人死亡。同位素是正确的，但代价很高。' }, stats: { competence: 40, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🤫 Secret Surveillance: "Send results to FBI intelligence only. Do not trigger a local police response."', th: '🤫 การเฝ้าระวังลับ: "ส่งผลลัพธ์ไปที่หน่วยข่าวกรอง FBI เท่านั้น อย่ากระตุ้นการตอบสนองของตำรวจท้องที่"', zh: '🤫 秘密监视："仅将结果发送给FBI情报部门。不要引发当地警方的回应。"' }, consequence: { en: '🕵️ Long Game: FBI monitors them. Months later, they arrest the leaders peacefully. You showed restraint.', th: '🕵️ เกมยาว: FBI เฝ้าระวังพวกเขา หลายเดือนต่อมา พวกเขาจับผู้นำอย่างสงบ คุณแสดงความยับยั้งชั่งใจ', zh: '🕵️ 长期博弈：FBI监视他们。几个月后，他们和平逮捕了头目。你表现出了克制。' }, stats: { competence: 30, ethics: 40, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🔬 Double Check: "Isotopes can be tricky. Maybe it\'s just a similar water source elsewhere? Don\'t accuse yet."', th: '🔬 ตรวจสอบซ้ำ: "ไอโซโทปอาจซับซ้อน บางทีแค่น้ำแหล่งคล้ายกันที่อื่น? อย่าเพิ่งกล่าวหา"', zh: '🔬 复查："同位素可能很棘手。也许只是别处类似的水源？先别指控。"' }, consequence: { en: '⏳ Missed Opportunity: While you hesitate, the cult moves location. The trail goes cold.', th: '⏳ พลาดโอกาส: ขณะที่คุณลังเล ลัทธิย้ายที่ ร่องรอยหายไป', zh: '⏳ 错失良机：当你犹豫时，邪教转移了地点。线索断了。' }, stats: { competence: 10, ethics: 0, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '📰 Media Leak: "Leak \'Cult Killings\' to the press. Flush them out with cameras."', th: '📰 ข่าวหลุด: "ปล่อยข่าว \'ลัทธิสังหาร\' ให้สื่อ ไล่พวกเขาออกมาด้วยกล้อง"', zh: '📰 媒体泄露："向媒体泄露\'邪教杀戮\'。用摄像机把他们逼出来。"' }, consequence: { en: '🔥 Cult Suicide: The panic causes a mass suicide event. You are indirectly responsible.', th: '🔥 ลัทธิฆ่าตัวตาย: ความตื่นตระหนกทำให้เกิดการฆ่าตัวตายหมู่ คุณรับผิดชอบทางอ้อม', zh: '🔥 邪教自杀：恐慌导致大规模自杀事件。你负有间接责任。' }, stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_021',
        text: { en: '👻 Virtopsy Request: A victim\'s family refuses a traditional autopsy due to religious beliefs. They want a "Virtopsy" (CT/MRI scan only). You suspect poisoning, which scans might miss.', th: '👻 คำขอ Virtopsy: ครอบครัวเหยื่อปฏิเสธการชันสูตรแบบดั้งเดิมเนื่องจากความเชื่อทางศาสนา พวกเขาต้องการ "Virtopsy" (สแกน CT/MRI เท่านั้น) คุณสงสัยว่าถูกวางยาพิษ ซึ่งการสแกนอาจพลาด', zh: '👻 虚拟解剖请求：受害者家属因宗教信仰拒绝传统尸检。他们想要"虚拟解剖"（仅CT/MRI扫描）。你怀疑中毒，扫描可能会漏掉。' },
        options: [
            { id: 'A', text: { en: '🔪 Forced Autopsy: "Get a court order. Legal duty overrides religion. Cut them open."', th: '🔪 บังคับชันสูตร: "ขอคำสั่งศาล หน้าที่ทางกฎหมายเหนือกว่าศาสนา ผ่าเลย"', zh: '🔪 强制尸检："申请法院命令。法律义务凌驾于宗教之上。切开他们。"' }, consequence: { en: '⚖️ Legal But Cruel: You find the poison. But the community riots. You are hated. Was it worth it?', th: '⚖️ ถูกกฎหมายแต่โหดร้าย: คุณพบยาพิษ แต่ชุมชนจลาจล คุณถูกเกลียด มันคุ้มไหม?', zh: '⚖️ 合法但残酷：你发现了毒药。但社区暴动。你被恨。这值得吗？' }, stats: { competence: 40, ethics: 10, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '💻 Scan & Needle: "respect the body. Do the CT scan. Use a needle biopsy for toxicology. Minimally invasive."', th: '💻 สแกนและเข็ม: "เคารพร่างกาย ทำ CT scan ใช้เข็มเจาะเพื่อดูพิษวิทยา บุกรุกน้อยที่สุด"', zh: '💻 扫描和针头："尊重遗体。做CT扫描。用针活检进行毒理学检查。微创。"' }, consequence: { en: '🤝 Elegant Compromise: You find the poison via the needle. The body stays intact. Everyone is happy.', th: '🤝 การประนีประนอมที่สวยงาม: คุณพบยาพิษผ่านเข็ม ร่างกายยังคงสภาพดี ทุกคนพอใจ', zh: '🤝 优雅的妥协：你通过针头发现了毒药。遗体保持完整。皆大欢喜。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '🤷 Scan Only: "Just do the scan. If we miss the poison, we miss it. Respect their rights."', th: '🤷 สแกนเท่านั้น: "แค่สแกน ถ้าเราพลาดพิษ ก็พลาด เคารพสิทธิของพวกเขา"', zh: '🤷 仅扫描："只做扫描。如果我们错过了毒药，那就错过了。尊重他们的权利。"' }, consequence: { en: '🚪 Killer Walks: Scan is negative. Determination: Natural Causes. The poisoner gets away.', th: '🚪 ฆาตกรลอยนวล: สแกนเป็นลบ สรุป: สาเหตุธรรมชาติ นักวางยาหนีไปได้', zh: '🚪 凶手走了：扫描结果为阴性。结论：自然原因。投毒者逃脱了。' }, stats: { competence: 10, ethics: 20, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '🩸 Blood from Heart: "Extract blood via syringe. Tell them it i part of \'embalming preparation\'. Lie."', th: '🩸 เลือดจากหัวใจ: "ดูดเลือดด้วยเข็มฉีดยา บอกพวกเขาว่าเป็นส่วนหนึ่งของ \'การเตรียมดองศพ\' โกหก"', zh: '🩸 心血："通过注射器抽取血液。告诉他们这是\'防腐准备\'的一部分。撒谎。"' }, consequence: { en: '🤥 Risky Deception: You get the sample. But if they inspect the records, you deceived a grieving family.', th: '🤥 การหลอกลวงที่เสี่ยง: คุณได้ตัวอย่าง แต่ถ้าพวกเขาตรวจสอบบันทึก คุณหลอกครอบครัวที่โศกเศร้า', zh: '🤥 危险的欺骗：你得到了样本。但如果他们检查记录，你欺骗了一个悲伤的家庭。' }, stats: { competence: 30, ethics: -30, leadership: -10, innovation: 10 } }
        ]
    },
    {
        id: 'forensic_022',
        text: { en: '🤝 Secondary Transfer: Your DNA is found on a murder weapon. You have an alibi, but you shook hands with the prime suspect earlier that day. He transferred your DNA to the gun.', th: '🤝 การถ่ายโอนรอง: DNA ของคุณถูกพบบนอาวุธสังหาร คุณมีถิ่นที่อยู่ แต่คุณจับมือกับผู้ต้องสงสัยหลักเมื่อเช้านั้น เขาถ่ายโอน DNA ของคุณไปที่ปืน', zh: '🤝 二次转移：你的DNA在凶器上被发现。你有不在场证明，但这天早些时候你和主要嫌疑人握过手。他把你的DNA转移到了枪上。' },
        options: [
            { id: 'A', text: { en: '🧑‍🏫 Teach the Jury: "Demonstrate touch DNA transfer in court. Show how easily it jumps from person to object."', th: '🧑‍🏫 สอนลูกขุน: "สาธิตการถ่ายโอน DNA จากการสัมผัสในศาล แสดงให้เห็นว่ามันกระโดดจากคนสู่วัตถุง่ายแค่ไหน"', zh: '🧑‍🏫 教育陪审团："在法庭上演示接触DNA转移。展示它多么容易从人转移到物体。"' }, consequence: { en: '🧠 Expert Defense: You clear your name and educate the system about DNA volatility. Masterclass.', th: '🧠 การป้องกันระดับผู้เชี่ยวชาญ: คุณล้างมลทินและให้ความรู้ระบบเกี่ยวกับความผันผวนของ DNA วิชาเอก', zh: '🧠 专家辩护：你洗清了罪名，并教育系统关于DNA的挥发性。大师级。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '😠 Denial: "I never touched it! The lab made a mistake! It\'s contamination!"', th: '😠 ปฏิเสธ: "ฉันไม่เคยแตะมัน! แล็บทำผิดพลาด! มันคือการปนเปื้อน!"', zh: '😠 否认："我从没碰过它！实验室搞错了！是污染！"' }, consequence: { en: '🤨 Suspicious: Blaming colleagues looks bad. You look guilty. The jury doubts you.', th: '🤨 น่าสงสัย: การโทษเพื่อนร่วมงานดูแย่ คุณดูเหมือนผิด ลูกขุนสงสัยในตัวคุณ', zh: '🤨 可疑：指责同事看起来很糟糕。你看起来有罪。陪审团怀疑你。' }, stats: { competence: -10, ethics: -10, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🕵️ Find the Real DNA: "Test the gun for the suspect\'s sweat/oils underneath my DNA."', th: '🕵️ หา DNA จริง: "ทดสอบปืนหาเหงื่อ/น้ำมันของผู้ต้องสงสัยใต้ DNA ของฉัน"', zh: '🕵️ 寻找真正的DNA："测试枪支，寻找我DNA下的嫌疑人汗水/油脂。"' }, consequence: { en: '🔬 Stratification: You prove his DNA is the base layer, yours is on top. Physical proof of transfer sequence.', th: '🔬 การแบ่งชั้น: คุณพิสูจน์ได้ว่า DNA ของเขาเป็นชั้นฐาน ของคุณอยู่ด้านบน หลักฐานทางกายภาพของลำดับการถ่ายโอน', zh: '🔬 分层：你证明了他的DNA是底层，你的在上面。转移顺序的物理证据。' }, stats: { competence: 50, ethics: 30, leadership: 20, innovation: 40 } },
            { id: 'D', text: { en: '💼 Lawyer Up: "Say nothing. Let my lawyer handle it. Don\'t try to be the expert in my own case."', th: '💼 สวมบททนาย: "ไม่พูดอะไร ให้ทนายจัดการ อย่าพยายามเป็นผู้เชี่ยวชาญในคดีของตัวเอง"', zh: '💼 律师介入："什么也不说。让我的律师处理。不要试图在自己的案件中当专家。"' }, consequence: { en: '⚖️ Safe Route: Charges dropped eventually. But the mystery lingers. People still whisper.', th: '⚖️ เส้นทางปลอดภัย: ข้อหาถูกยกฟ้องในที่สุด แต่ปริศนายังคงอยู่ ผู้คนยังซุบซิบ', zh: '⚖️ 安全路线：指控最终撤销。但谜团挥之不去。人们仍在窃窃私语。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_023',
        text: { en: '⌚ Smart Watch Witness: The victim\'s FitBit recorded heart stoppage at 9:00 PM. The suspect has a solid alibi for 9:00 PM. But Rigor Mortis suggests death was at 11:00 PM. Technology vs Biology.', th: '⌚ พยาน Smart Watch: FitBit ของเหยื่อบันทึกหัวใจหยุดเต้นที่ 21:00 น. ผู้ต้องสงสัยมีถิ่นที่อยู่ที่แน่นหนาสำหรับ 21:00 น. แต่การแข็งตัวของศพบ่งชี้ว่าตายตอน 23:00 น. เทคโนโลยี vs ชีววิทยา', zh: '⌚ 智能手表证人：受害者的FitBit记录心脏在晚上9:00停止。嫌疑人在晚上9:00有确凿的不在场证明。但尸僵表明死亡时间是晚上11:00。技术 vs 生物学。' },
        options: [
            { id: 'A', text: { en: '📱 Trust the Watch: "Digital data doesn\'t lie. Biology is inexact. Death was 9 PM. Suspect clears."', th: '📱 เชื่อนาฬิกา: "ข้อมูลดิจิทัลไม่โกหก ชีววิทยาไม่แม่นยำ ตายตอน 3 ทุ่ม ผู้ต้องสงสัยรอด"', zh: '📱 相信手表："数字数据不会撒谎。生物学是不精确的。死亡时间是晚上9点。嫌疑人清白。"' }, consequence: { en: '🤖 Tech Error: The watch was hacked/removed? No, simply low battery glitch. The suspect killed her at 11. You let him go.', th: '🤖 ข้อผิดพลาดเทคโนโลยี: นาฬิกาถูกแฮก/ถอด? ไม่ แค่แบตต่ำรวน ผู้ต้องสงสัยฆ่าเธอตอน 5 ทุ่ม คุณปล่อยเขาไป', zh: '🤖 技术错误：手表被黑/取下了？不，只是低电量故障。嫌疑人在11点杀了她。你放走了他。' }, stats: { competence: -20, ethics: -20, leadership: -10, innovation: 10 } },
            { id: 'B', text: { en: '🧟 Trust the Body: "Rigor/Livor mortis physics are absolute. The watch is wrong. Investigate the watch anomaly."', th: '🧟 เชื่อร่างกาย: "ฟิสิกส์การแข็งตัว/ตกตะกอนเลือดเป็นสิ่งสัมบูรณ์ นาฬิกาผิด สอบสวนความผิดปกติของนาฬิกา"', zh: '🧟 相信身体："尸僵/尸斑物理学是绝对的。手表错了。调查手表异常。"' }, consequence: { en: '🔍 Spoof Revealed: The killer put the watch on a pacing machine to fake the time! Brilliant deduction. Biology wins.', th: '🔍 การปลอมแปลงถูกเปิดเผย: ฆาตกรใส่นาฬิกาบนเครื่องกระตุ้นหัวใจเพื่อปลอมเวลา! การอนุมานที่ยอดเยี่ยม ชีววิทยาชนะ', zh: '🔍 欺骗揭露：凶手把手表放在起搏器上伪造时间！精彩的推。生物学胜利。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '⚖️ Split the Difference: "Estimated time 10:00 PM +/- 1 hour. Cover all bases."', th: '⚖️ แบ่งครึ่ง: "เวลาโดยประมาณ 22:00 น. +/- 1 ชั่วโมง ครอบคลุมทั้งหมด"', zh: '⚖️ 折中："估计时间晚上10:00 +/- 1小时。涵盖所有情况。"' }, consequence: { en: '📉 Vague: The timeline is too broad. The prosecution cannot build a narrative. The jury is confused.', th: '📉 คลุมเครือ: ไทม์ไลน์กว้างเกินไป ฝ่ายโจทก์สร้างเรื่องราวไม่ได้ ลูกขุนสับสน', zh: '📉 模糊：时间线太宽。检方无法构建叙述。陪审团很困惑。' }, stats: { competence: 0, ethics: 10, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🕵️ Data Forensics: "Analyze the watch data raw logs. Look for \'off-wrist\' sensors."', th: '🕵️ นิติเวชข้อมูล: "วิเคราะห์บันทึกดิบของข้อมูลนาฬิกา หาเซ็นเซอร์ \'ถอดออกจากข้อมือ\'"', zh: '🕵️ 数据取证："分析手表的原始日志数据。寻找\'脱离手腕\'传感器。"' }, consequence: { en: '💾 Technical Proof: Logs show it was removed at 9 PM but kept moving. Proves tampering. Good cyber-physical blend.', th: '💾 บทพิสูจน์ทางเทคนิค: บันทึกโชว์ว่าถูกถอดตอน 3 ทุ่มแต่ยังเคลื่อนไหว พิสูจน์การดัดแปลง การผสมผสานไซเบอร์-กายภาพที่ดี', zh: '💾 技术证明：日志显示它在9点被取下但仍在移动。证明篡改。良好的网络物理融合。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 40 } }
        ]
    },
    {
        id: 'forensic_024',
        text: { en: '🦏 Rhino Horn Powder: Customs seizes a diplomat\'s bag full of powder. He claims it is "medicinal tea". You suspect endangered rhino horn. He has diplomatic immunity, but if it is bio-contraband, immunity might be waived.', th: '🦏 ผงนอแรด: ศุลกากรยึดกระเป๋าทูตเต็มไปด้วยผง เขาอ้างว่าเป็น "ชาสมุนไพร" คุณสงสัยว่าเป็นนอแรดใกล้สูญพันธุ์ เขามีเอกสิทธิ์ทางการทูต แต่ถ้าเป็นของเถื่อนทางชีวภาพ เอกสิทธิ์อาจถูกยกเว้น', zh: '🦏 犀牛角粉：海关查获了一个装满粉末的外交官包。他声称这是"药茶"。你怀疑是濒危犀牛角。他有外交豁免权，但如果是生物违禁品，豁免权可能会被放弃。' },
        options: [
            { id: 'A', text: { en: '🧬 Keratin DNA Test: "Run a PCR for Rhino DNA sequences. Prove origin."', th: '🧬 ตรวจ DNA เคราติน: "รัน PCR หาลาดรหัสพันธุกรรมแรด พิสูจน์แหล่งที่มา"', zh: '🧬 角蛋白DNA测试："对犀牛DNA序列进行PCR。证明来源。"' }, consequence: { en: '🚓 Caught: It is White Rhino. Diplomat declared "Persona Non Grata". Major conservation win.', th: '🚓 จับได้: มันคือแรดขาว ทูตถูกประกาศเป็นบุคคลไม่พึงปรารถนา ชัยชนะการอนุรักษ์ครั้งใหญ่', zh: '🚓 抓获：是白犀牛。外交官被宣布为"不受欢迎的人"。重大的保护胜利。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: '☕ Taste Test (Joke): "Drink it. If I don\'t get a headache, it\'s tea. (Don\'t actually do this)"', th: '☕ ชิมทดสอบ (ล้อเล่น): "ดื่มมัน ถ้าฉันไม่ปวดหัว มันคือชา (อย่าทำจริงๆ นะ)"', zh: '☕ 尝味测试（玩笑）："喝了它。如果我不头，那就是茶。（别真的这么做）"' }, consequence: { en: '🤢 Sick: You sniffed it too hard. It was actually poisoned bait. You are in hospital.', th: '🤢 ป่วย: คุณดมแรงไปหน่อย จริงๆ แล้วมันคือเหยื่อพิษ คุณเข้าโรงพยาบาล', zh: '🤢 生病：你闻得太猛了。这其实是有毒诱饵。你进了医院。' }, stats: { competence: -30, ethics: -10, leadership: -40, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Let it Slide: "Diplomatic immunity is tricky. Let him go. Not worth the international incident."', th: '🤝 ปล่อยผ่าน: "เอกสิทธิ์ทางการทูตมันซับซ้อน ปล่อยเขาไป ไม่คุ้มกับเหตุการณ์ระหว่างประเทศ"', zh: '🤝 放行："外交豁免权很棘手。让他走。不值得引发国际事件。"' }, consequence: { en: '🚢 Smuggler Highway: word gets out your lab is soft. Smuggling increases 300%. Shameful.', th: '🚢 ทางด่วนนักลักลอบ: ข่าวลือแพร่สะพัดว่าแล็บคุณอ่อน การลักลอบเพิ่มขึ้น 300% น่าละอาย', zh: '🚢 走私高速公路：消息传出说你的实验室很软弱。走私增加了300%。可耻。' }, stats: { competence: -10, ethics: -50, leadership: -30, innovation: 0 } },
            { id: 'D', text: { en: '🔬 Mass Spectrometry: "Look for Keratin vs Cellulose signatures. Fast and non-destructive."', th: '🔬 แมสสเปกโตรเมตรี: "หาสัญญาณเคราตินเทียบกับเซลลูโลส เร็วและไม่ทำลาย"', zh: '🔬 质谱分析："寻找角蛋白与纤维素的特征。快速且非破坏性。"' }, consequence: { en: '✅ Quick ID: Confirmed animal product. Authorities seize it without damaging the sample.', th: '✅ ระบุเร็ว: ยืนยันผลิตภัณฑ์สัตว์ เจ้าหน้าที่ยึดโดยไม่ทำลายตัวอย่าง', zh: '✅ 快速识别：确认动物产品。当局在不损坏样本的情况下扣押了它。' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 30 } }
        ]
    },
    {
        id: 'forensic_025',
        text: { en: '💥 Bus Crash ID: A bus explodes. 40 bodies are commingled and burned. Politicians want ID\'s by tomorrow morning for a press conference. Impossible timeline.', th: '💥 รถบัสระเบิด ID: รถบัสระเบิด 40 ศพปะปนกันและถูกเผา นักการเมืองต้องการ ID ภายในพรุ่งนี้เช้าเพื่อแถลงข่าว ไทม์ไลน์เป็นไปไม่ได้', zh: '💥 公交车坠毁ID：一辆公交车爆炸。40具尸体混在一起被烧焦。政客们想要明天早上就要身份证明来举行新闻发布会。不可能的时间表。' },
        options: [
            { id: 'A', text: { en: '🚫 Refuse Pressure: "It takes as long as it takes. If I rush, I give the wrong leg to the wrong mother."', th: '🚫 ปฏิเสธแรงกดดัน: "มันใช้เวลานานเท่าที่จำเป็น ถ้าฉันรีบ ฉันจะส่งขาผิดข้างให้แม่ผิดคน"', zh: '🚫 拒绝压力："需要多长时间就多长时间。如果我匆忙，我会把错误的腿给错误的母亲。"' }, consequence: { en: '🐢 Slow but Right: Politicians rage. You are demoted. But the families get the correct remains eventually.', th: '🐢 ช้าแต่ถูก: นักการเมืองเกรี้ยวกราด คุณถูกลดขั้น แต่ครอบครัวได้รับศพที่ถูกต้องในที่สุด', zh: '🐢 慢但正确：政客们大发雷霆。你被降职。但家属最终得到了正确的遗体。' }, stats: { competence: 50, ethics: 50, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🎲 Rapid Visual ID: "Guess based on personal effects (rings, watches). Skip DNA for now."', th: '🎲 ระบุด้วยภาพเร็ว: "เดาจากของใช้ส่วนตัว (แหวน, นาฬิกา) ข้าม DNA ไปก่อน"', zh: '🎲 快速视觉识别："根据个人物品（戒指、手表）猜测。暂时跳过DNA。"' }, consequence: { en: '☠️ Mistakes Made: People swapped seats! Clothing was wrong. You misidentified 50% of victims. Horror.', th: '☠️ ความผิดพลาด: คนสลับที่นั่ง! เสื้อผ้าผิด คุณระบุผิด 50% ของเหยื่อ สยองขวัญ', zh: '☠️ 犯错：人们换了座位！衣服也错了。你误认了50%的受害者。恐怖。' }, stats: { competence: -50, ethics: -40, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '🧬 Rapid DNA Machines: "Deploy the experimental field-DNA units. Lower accuracy but fast processing."', th: '🧬 เครื่อง DNA เร็ว: "ใช้หน่วย DNA ภาคสนามทดลอง ความแม่นยำต่ำกว่าแต่ประมวลผลเร็ว"', zh: '🧬 快速DNA机器："部署实验性现场DNA装置。精度较低但处理快速。"' }, consequence: { en: '⚡ Technology Save: It works! 90% identified in 12 hours. The errors are minor. You are a hero.', th: '⚡ เทคโนโลยีช่วยชีวิต: ได้ผล! 90% ระบุได้ใน 12 ชม. ข้อผิดพลาดเล็กน้อย คุณเป็นฮีโร่', zh: '⚡ 技术救援：奏效了！12小时内识别出90%。错误很小。你是英雄。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🦷 Dental Records: "Focus only on teeth. Ignore limbs. Teeth survive fire best."', th: '🦷 บันทึกทันตกรรม: "เน้นแค่ฟัน เพิกเฉยต่อแขนขา ฟันรอดจากไฟได้ดีที่สุด"', zh: '🦷 牙科记录："只关注牙齿。忽略四肢。牙齿最耐火。"' }, consequence: { en: '🦷 Smart Filter: You identify everyone fast. But families are upset they only get "pieces" back initially.', th: '🦷 ตัวกรองฉลาด: คุณระบุทุกคนได้เร็ว แต่ครอบครัวไม่พอใจที่ได้คืนแค่ "ชิ้นส่วน" ในตอนแรก', zh: '🦷 智能过滤：你很快识别了每个人。但家属很不高兴，他们最初只拿回了"碎片"。' }, stats: { competence: 40, ethics: 20, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'forensic_026',
        text: { en: '🧟 Zombie Virus Risk: You dig up a permafrost mummy. It is 30,000 years old. There is a risk of releasing ancient smallpox. The museum wants it displayed immediately.', th: '🧟 ความเสี่ยงไวรัสซอมบี้: คุณขุดมัมมี่ในชั้นดินเยือกแข็ง อายุ 30,000 ปี มีความเสี่ยงที่จะปล่อยโรคฝีดาษโบราณ พิพิธภัณฑ์ต้องการจัดแสดงทันที', zh: '🧟 僵尸病毒风险：你挖出具永久冻土木乃伊。它有30000年的历史。有释放古代天花的风险。博物馆希望立即展出。' },
        options: [
            { id: 'A', text: { en: '😷 Quarantine & Drill: "Seal the lab. Drill into the bone in a bio-safety level 4 box. Safety first."', th: '😷 กักกันและเจาะ: "ปิดผนึกแล็บ เจาะกระดูกในกล่องความปลอดภัยทางชีวภาพระดับ 4 ปลอดภัยไว้ก่อน"', zh: '😷 隔离和钻孔："封锁实验室。在生物安全4级盒子中钻入骨头。安全第一。"' }, consequence: { en: '🛡️ Safe Science: It takes months, but you find a new giant virus safely. No pandemic started. Good job.', th: '🛡️ วิทยาศาสตร์ที่ปลอดภัย: ใช้เวลาหลายเดือน แต่คุณพบไวรัสยักษ์ชนิดใหม่ได้อย่างปลอดภัย ไม่มีการระบาดของโรค ทำได้ดี', zh: '🛡️ 安全科学：这需要几个月的时间，但你安全地发现了一种新的巨型病毒。没有引发大流行。干得好。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🤧 Just Open It: "Ancient viruses can\'t infect modern humans. That\'s a myth. Open the bag!"', th: '🤧 เปิดมันเลย: "ไวรัสโบราณไม่สามารถติดเชื้อในมนุษย์สมัยใหม่ได้ นั่นเป็นเรื่องแต่ง เปิดถุง!"', zh: '🤧 直接打开："古代病毒无法感染现代人类。那是神话。打开袋子！"' }, consequence: { en: '🤒 Patient Zero: You get a fever. The CDC locks down the city. You caused a mini-plague. Nice going.', th: '🤒 ผู้ป่วยหมายเลขศูนย์: คุณมีไข้ CDC ปิดเมือง คุณทำให้เกิดโรคระบาดเล็กน้อย "เยี่ยม" ไปเลย', zh: '🤒 零号病人：你发烧了。疾控中心封锁了城市。你引发了一场小型瘟疫。干得漂亮。' }, stats: { competence: -20, ethics: -20, leadership: -30, innovation: -10 } },
            { id: 'C', text: { en: '🧊 Keep Frozen: "Display it in a negative pressure freezer. Do not sample. Preservation is key."', th: '🧊 แช่แข็งไว้: "จัดแสดงในตู้แช่แข็งแรงดันลบ ห้ามเก็บตัวอย่าง การเก็บรักษาคือกุญแจสำคัญ"', zh: '🧊 保持冷冻："在负压冷冻柜中展示。不要取样。保存是关键。"' }, consequence: { en: '❄️ Boring but Safe: The public loves the "Ice Man". Science learns nothing, but no one dies.', th: '❄️ น่าเบื่อแต่ปลอดภัย: สาธารณชนรัก "มนุษย์น้ำแข็ง" วิทยาศาสตร์ไม่ได้เรียนรู้อะไร แต่ไม่มีใครตาย', zh: '❄️ 无聊但安全：公众喜欢"冰人"。科学一无所获，但没人死亡。' }, stats: { competence: 10, ethics: 10, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🧬 Remote Scan: "Use Terahertz radiation scanning. Peek inside without cutting."', th: '🧬 สแกนระยะไกล: "ใช้การสแกนรังสีเทราเฮิร์ตซ์ มองเข้าไปข้างในโดยไม่ต้องผ่า"', zh: '🧬 远程扫描："使用太赫兹辐射扫描。无需切割即可查看内部。"' }, consequence: { en: '👁️ High Tech View: You see the organ structure. It\'s safe and innovative. You win an award.', th: '👁️ มุมมองไฮเทค: คุณเห็นโครงสร้างอวัยวะ ปลอดภัยและเป็นนวัตกรรม คุณได้รับรางวัล', zh: '👁️ 高科技视角：你看到了器官结构。安全且创新。你获奖了。' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 50 } }
        ]
    },
    {
        id: 'forensic_027',
        text: { en: '🩸 Marrow Donor Confusion: DNA from semen at a crime scene matches a suspect. BUT, blood from the suspect matches... someone else entirely. He had a bone marrow transplant 5 years ago.', th: '🩸 ความสับสนผู้บริจาคไขกระดูก: DNA จากน้ำเชื้อในที่เกิดเหตุตรงกับผู้ต้องสงสัย แต่เลือดจากผู้ต้องสงสัยตรงกับ... คนอื่นโดยสิ้นเชิง เขาปลูกถ่ายไขกระดูกเมื่อ 5 ปีก่อน', zh: '🩸 骨髓捐赠者困惑：犯罪现场精液的DNA与嫌疑人匹配。但是，嫌疑人的血液与......完全是另一个人匹配。他在5年前进行了骨髓移植。' },
        options: [
            { id: 'A', text: { en: '🕵️ Cheek Swab: "Blood is donor DNA. Sperm is original DNA. Swab his cheek to confirm original DNA profile."', th: '🕵️ สวอปแก้ม: "เลือดเป็น DNA ผู้บริจาค อสุจิเป็น DNA เดิม สวอปแก้มเพื่อยืนยันโปรไฟล์ DNA เดิม"', zh: '🕵️ 脸颊拭子："血液是捐赠者的DNA。精子是原始DNA。擦拭他的脸颊以确认原始DNA特征。"' }, consequence: { en: '✅ Correct Match: Cheek cells usually keep original DNA. You confirm he is the rapist. Textbook biology.', th: '✅ การจับคู่ถูกต้อง: เซลล์แก้มมักเก็บ DNA เดิม คุณยืนยันว่าเขาคือผู้ข่มขืน ชีววิทยาตามตำรา', zh: '✅ 正确匹配：脸颊细胞通常保留原始DNA。你确认他是强奸犯。教科书式的生物学。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🤯 Arrest the Donor: "The blood says it\'s this guy in Ohio. Arrest him!"', th: '🤯 จับผู้บริจาค: "เลือดบอกว่าเป็นชายคนนี้ในโอไฮโอ จับเขา!"', zh: '🤯 逮捕捐赠者："血液说是俄亥俄州的这家伙。逮捕他！"' }, consequence: { en: '🚫 False Arrest: You arrest a hero who saved a life. He sues. You look stupid.', th: '🚫 จับแพะ: คุณจับฮีโร่ที่ช่วยชีวิตคน เขาฟ้อง คุณดูโง่', zh: '🚫 错误逮捕：你逮捕了一位救人性命的英雄。他起诉。你看起来很蠢。' }, stats: { competence: -40, ethics: -10, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '🧪 Hair Root Test: "Blood is compromised. Use hair roots. They don\'t change after transplant."', th: '🧪 ทดสอบรากผม: "เลือดเปื้อนเปรอะ ใช้รากผม พวกมันไม่เปลี่ยนหลังปลูกถ่าย"', zh: '🧪 发根测试："血液受损。使用发根。移植后它们不会改变。"' }, consequence: { en: '👍 Solid Proof: Hair matches sperm. Case closed. Good alternative sample choice.', th: '👍 หลักฐานแน่น: ผมตรงกับอสุจิ ปิดคดี ทางเลือกตัวอย่างที่ดี', zh: '👍 确凿证据：头发与精子匹配。结案。不错的替代样本选择。' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '🤷 Confusion: "It\'s a chimera mess. I can\'t rely on this. Throw out the DNA evidence."', th: '🤷 สับสน: "มันเป็นเรื่องยุ่งเหยิงของไคเมร่า ฉันพึ่งพามันไม่ได้ ทิ้งหลักฐาน DNA"', zh: '🤷 困惑："这是一个嵌合体混乱。我不能依赖这个。扔掉DNA证据。"' }, consequence: { en: '⚖️ Killer Free: You threw away the only link. He walks. All because you didn\'t understand transplants.', th: '⚖️ ฆาตกรลอยนวล: คุณทิ้งการเชื่อมโยงเดียว เขาเดินจากไป ทั้งหมดเพราะคุณไม่เข้าใจการปลูกถ่าย', zh: '⚖️ 凶手自由：你扔掉了唯一的联系。他走了。全皆因为你不懂移植。' }, stats: { competence: -30, ethics: -20, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_028',
        text: { en: '💾 Bio-Hacker Storage: Search of a hacker\'s apartment yields a vial of liquid. You sequence the DNA in it. It\'s not human. It\'s synthetic DNA encoding a binary stream... a Bitcoin wallet key worth millions.', th: '💾 ที่เก็บข้อมูล Bio-Hacker: การค้นหาอพาร์ตเมนต์แฮกเกอร์พบขวดของเหลว คุณตรวจสอบลำดับ NA ในนั้น มันไม่ใช่คน มันคือ DNA สังเคราะห์ที่เข้ารหัสสตรีมไบนารี... คีย์กระเป๋าเงิน Bitcoin มูลค่าหลายล้าน', zh: '💾 生物黑客存储：搜查一名黑客的公寓发现了一小瓶液体。你对其DNA进行测序。它不是人类。它是编码二进制流的合成DNA……价值数百万的比特币钱包密钥。' },
        options: [
            { id: 'A', text: { en: '💰 Steal the Key: "Decode it. Transfer the coins to an offshore account. Burn the sample. No one knows."', th: '💰 ขโมยคีย์: "ถอดรหัส โอนเหรียญเข้าบัญชีออฟชอร์ เผาตัวอย่าง ไม่มีใครรู้"', zh: '💰 偷密钥："解码它。将硬币转移到离岸账户。烧掉样本。没人知道。"' }, consequence: { en: '✈️ Rich Fugitive: You are rich! But the hacker gets out of jail and hunts you down. Game Over?', th: '✈️ ผู้ลี้ภัยรวย: คุณรวย! แต่แฮกเกอร์ออกจากคุกและตามล่าคุณ เกมโอเวอร์?', zh: '✈️ 富有的逃犯：你发财了！但黑客出狱后追捕你。游戏结束？' }, stats: { competence: 0, ethics: -100, leadership: 0, innovation: 20 } },
            { id: 'B', text: { en: '👮 Evidence Log: "Decode it. Print the key. Log it as asset evidence. Hand it to the Feds."', th: '👮 บันทกหลักฐาน: "ถอดรหัส ปริ้ต์คีย์ บันทึกเป็นหลักฐานทรัพย์สิน ส่งให้ Feds"', zh: '👮 证据日志："解码它。打印密钥。将其记录为资产证据。交给联邦调查局。"' }, consequence: { en: '⭐ Promotion: Biggest seizure in department history. You are the "Cyber-Bio Expert".', th: '⭐ เลื่อนตำแหน่ง: การยึดครั้งใหญ่สุดในประวัติศาสตร์แผนก คุณคือ "ผู้เชี่ยวชาญไซเบอร์-ชีวภาพ"', zh: '⭐ 晋升：部门历史上最大的查获。你是"网络生物专家"。' }, stats: { competence: 50, ethics: 50, leadership: 30, innovation: 40 } },
            { id: 'C', text: { en: '🧪 "It\'s Just Water": "Don\'t check for data. Test for drugs. Negative. Pour it out."', th: '🧪 "มันแค่น้ำ": "อย่าตรวจหาข้อมูล ทดสอบยาเสพติด เป็นลบ เททิ้ง"', zh: '🧪 "只是水"："不检查数据。测试毒品。阴性。倒掉。"' }, consequence: { en: '🚽 Money Flushed: You poured 50 million dollars down the drain. The hacker laughs at you in court.', th: '🚽 เงินละลายน้ำ: คุณเทเงิน 50 ล้านดอลลาร์ลงท่อ แฮกเกอร์หัวเราะเยาะคุณในศาล', zh: '🚽 钱冲走了：你把5000万美元倒进了下水道。黑客在法庭上嘲笑你。' }, stats: { competence: -20, ethics: 0, leadership: -10, innovation: -20 } },
            { id: 'D', text: { en: '🧬 Preserve Sample: "I don\'t know what this is. Freeze it for future tech."', th: '🧬 เก็บรักษาตัวอย่าง: "ฉันไม่รู้ว่านี่คืออะไร แช่แข็งไว้สำหรับเทคโนโลยีในอนาคต"', zh: '🧬 保存样本："我不道这是什么。冷冻它以备将来技术使用。"' }, consequence: { en: '🕰️ Future Win: 5 years later, you realize what it was. The money is still there. Good instinct.', th: '🕰️ ชนะในอนาคต: 5 ปีต่อมา คุณรู้ว่ามันคืออะไร เงินยังอยู่ สัญชาตญาณดี', zh: '🕰️ 未来的胜利：5年后，你意识到那是什么。钱还在。好的直觉。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'forensic_029',
        text: { en: '🐀 Rats in the Locker: The night guard swears he saw "ghosts" moving evidence bags. You inspect the locker. A kilo of cocaine is missing. There are droppings everywhere. The rats... are high.', th: '🐀 หนูในตู้เก็บของ: ยามกะดึกสาบานว่าเห็น "ผี" ย้ายถุงหลักฐาน คุณตรวจสอบตู้ โคเคนหายไปหนึ่งกิโล มีมูลสัตว์ทุกที่ หนู... กำลังเมา', zh: '🐀 储物柜里的老鼠：夜间警卫发誓他看到"鬼魂"在移动证物袋。你检查储物柜。一公斤可卡因丢失了。到处都是粪便。老鼠……嗨了。' },
        options: [
            { id: 'A', text: { en: '🔫 Hunt the Rats: "Set traps. Test the rats\' stomachs for cocaine. Recover the \'evidence\' biologically."', th: '🔫 ล่าหนู: "วางกับดัก ตรวจสอบกระเพาะหนูหาโคเคน กู้คืน \'หลักฐาน\' ทางชีวภาพ"', zh: '🔫 猎杀老鼠："设陷阱。测试老鼠的胃是否有可卡因。从生物学上恢复\'证据\'。"' }, consequence: { en: '🧪 Gross Science: You prove the rats ate it. The case holds up in court (barely). You need a new locker.', th: '🧪 วิทยาศาสตร์น่าขยะแขยง: คุณพิสูจน์ว่าหนูกินมัน คดียังคงฟังขึ้นในศาล (หวุดหวิด) คุณต้องการตู้ใหม่', zh: '🧪 恶心的科学：你证明老鼠吃了它。案件在法庭上站得住脚（勉强）。你需要一个新的储物柜。' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 20 } },
            { id: 'B', text: { en: '🤥 Blame the Guard: "He stole it. He\'s making up the ghost story. Fire him."', th: '🤥 โทษยาม: "เขาขโมยไป เขาแต่งเรื่องผี ไล่เขาออก"', zh: '🤥 怪罪警卫："他偷了。他编造鬼故事。解雇他。"' }, consequence: { en: '⚖️ Wrongful Termination: The guard had a bodycam. It shows the rats. You are sued for slander.', th: '⚖️ เลิกจ้างผิดกฎหมาย: ยามมีกล้องติดตัว มันโชว์หนู คุณถูกฟ้องฐานหมิ่นประมาท', zh: '⚖️ 非法解雇：警卫有执法记录仪。它显示了老鼠。你因诽谤被起诉。' }, stats: { competence: -20, ethics: -30, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '🧹 Clean and Cover: "Sweep up the droppings. Report \'clerical error\'. Better than admitting we have junkies rats."', th: '🧹 ทำความสะอาดและปกปิด: "กวาดมูลสัตว์ รายงาน \'ข้อผิดพลาดทางธุรการ\' ดีกว่ายอมรับว่าเรามีหนูขี้ยา"', zh: '🧹 清理和掩盖："扫除粪便。报告\'文书错误\'。比承认我们有瘾君子老鼠要好。"' }, consequence: { en: '📉 Coverup Failure: Audit finds the missing weight. You are suspected of stealing it.', th: '📉 ปกปิดล้มเหลว: การตรวจสอบพบน้ำหนักที่หายไป คุณถูกสงสัยว่าขโมย', zh: '📉 掩盖失败：审计发现重量缺失。你被怀疑偷了它。' }, stats: { competence: -30, ethics: -40, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🔒 Secure Storage: "Admit the breach. Install steel cages. This is a learning momeent for infrastructure."', th: '🔒 ที่เก็บของปลอดภัย: "ยอมรับการรั่วไหล ติดตั้งกรงเหล็ก นี่คือช่วงเวลาเรียนรู้สำหรับโครงสร้างพื้นฐาน"', zh: '🔒 安全存储："承认违规。安装钢笼。这是基础设施的学习时刻。"' }, consequence: { en: '🏗️ Improvement: The integrity of the lab is questioned, but your transparency saves your job.', th: '🏗️ การปรับปรุง: ความสมบูรณ์ของแล็บถูกตั้งคำถาม แต่ความโปร่งใสของคุณช่วยรักษางานไว้', zh: '🏗️ 改进：实验室的完整性受到质疑，但你的透明度保住了你的工作。' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_030',
        text: { en: '💊 Mass Spec Bottleneck: A bad batch of fentanyl pills is killing people. Police seized 5,000 pills. You need to identify the analogue by morning to warn hospitals. Your machine does 100/hr.', th: '💊 คอขวด Mass Spec: ยาเฟนทานิลลอตไม่ดีกำลังฆ่าคน ตำรวจยึด 5,000 เม็ด คุณต้องระบุอะนาล็อกภายในเช้าเพื่อเตือนโรงพยาบาล เครื่องของคุณทำได้ 100/ชม.', zh: '💊 质谱瓶颈：一批劣质芬太尼药丸正在致人死亡。警方查获了5000粒药丸。你需要在早上之前确定类似物以警告医院。你的机器每小时做100个。' },
        options: [
            { id: 'A', text: { en: '🎲 Random Sampling: "Test 10 pills. Assume the rest are the same. Probability says it\'s fine."', th: '🎲 สุ่มตัวอย่าง: "ทดสอบ 10 เม็ด สมมติว่าที่เหลือเหมือนกัน ความน่าจะเป็นบอกว่าโอเค"', zh: '🎲 随机抽样："测试10粒药丸。假设其余的都一样。概率上说是没问题的。"' }, consequence: { en: '📈 Statistical Win: It works. You identify the strain (Carfentanil). Lives saved. Fast and efficient.', th: '📈 ชัยชนะทางสถิติ: ได้ผล คุณระบุสายพันธุ์ (Carfentanil) ช่วยชีวิตคน เร็วและมีประสิทธิภาพ', zh: '📈 统计胜利：奏效了。你确定了菌株（卡芬太尼）。挽救了生命。快速高效。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '🏃 All Nighter: "Run 3 machines in parallel. Call in favors from university labs. Test them ALL."', th: '🏃 โต้รุ่ง: "รัน 3 เครื่องขนานกัน ขอความช่วยเหลือจากแล็บมหาวิทยาลัย ทดสอบทั้งหมด"', zh: '🏃 通宵："并行运行3台机器。向大学实验室求助。全部测试。"' }, consequence: { en: '💤 Exhaustion: You test 3000. It\'s enough. But you collapse from fatigue. Dedication noted.', th: '💤 หมดแรง: คุณทดสอบ 3000 มันพอ แต่คุณล้มพับเพราะความเหนื่อย ความทุ่มเทถูกบันทึกไว้', zh: '💤 筋疲力尽：你测试了3000。够了。但你因疲劳倒下了。奉献精神被注意到。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🤷 Warn Broadly: "Don\'t test. Just issue a \'Super Potent\' warning for everything. Scaring them is good."', th: '🤷 เตือนกว้างๆ: "ไม่ต้องทดสอบ แค่ออกประกาศเตือน \'รุนแรงพิเศษ\' สำหรับทุกอย่าง ทำให้พวกเขากลัวก็ดี"', zh: '🤷 广泛警告："不测试。只发布所有东西的\'超强效\'警告。吓吓他们有好处。"' }, consequence: { en: '🐺 Cry Wolf: Addicts ignore the warning because you always say that. More overdose deaths.', th: '🐺 เด็กเลี้ยงแกะ: ผู้เสพเมินคำเตือนเพราะคุณพูดแบบนั้นตลอด คนตายเพราะใช้ยาเกินขนาดมากขึ้น', zh: '🐺 狼来了：瘾君子忽略警告，因为你总是这么说。更多人因吸毒过量死亡。' }, stats: { competence: -10, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🌈 Color Test: "Use chemical spot tests first. Sort by color reaction, then Mass Spec the groups."', th: '🌈 ทดสอบสี: "ใช้การทดสอบจุดเคมีก่อน แยกตามปฏิกิริยาสี แล้วค่อย Mass Spec กลุ่ม"', zh: '🌈 颜色测试："先使用化学点滴测试。按颜色反应分类，然后对组进行质谱分析。"' }, consequence: { en: '⚡ Smart Triage: You filter out the inert cutting agents fast. You focus the slow machine on the real poison. Smart.', th: '⚡ การคัดกรองฉลาด: คุณกรองสารเจือปนที่ไม่ออกฤทธิ์ออกเร็ว คุณโฟกัสเครื่องช้าไปที่ยาพิษจริง ฉลาด', zh: '⚡ 智能分诊：你很快过虑掉了惰性切割剂。你把慢速机器集中在真正的毒药上。聪明。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 40 } }
        ]
    },
    {
        id: 'forensic_031',
        text: { en: '🚀 Zero-G Spatter: Murder on a commercial space station. Blood is floating in spheres, not splattering. You are guiding the investigation via video link. The tourists are destroying evidence.', th: '🚀 เลือดกระเซ็นในแรงโน้มถ่วงศูนย์: ฆาตกรรมบนสถานีอวกาศเชิงพาณิชย์ เลือดลอยเป็นทรงกลม ไม่กระเซ็น คุณกำลังแนะนำการสืบสวนผ่านวิดีโอลิงก์ นักท่องเที่ยวกำลังทำลายหลักฐาน', zh: '🚀 零重力飞溅：并在商业空间站发生谋杀案。血液以球形式漂浮，而不是飞溅。你正在通过视频连线指导调查。游客正在破坏证据。' },
        options: [
            { id: 'A', text: { en: '🛑 Freeze Frame: "Tell them to stop moving! Air currents move the spheres. Turn off ventilation!"', th: '🛑 หยุดภาพ: "บอกพวกเขาให้หยุดขยับ! กระแสลมทำให้ทรงกลมเคลื่อนที่ ปิดการระบายอากาศ!"', zh: '🛑 定格："告诉他们别动！气流会移动球体。关闭通风！"' }, consequence: { en: '❄️ Preserved Scene: Ventilation off. CO2 rises, but spheres stay put. You map the 3D coordinates. Success.', th: '❄️ ฉากถูกรักษา: ปิดระบายอากาศ CO2 เพิ่มขึ้น แต่ทรงกลมอยู่ที่เดิม คุณทำแผนที่พิกัด 3D สำเร็จ', zh: '❄️ 保存现场：通风关闭。二氧化碳上升，但球体保持原位。你绘制了3D坐标。成功。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '🧹 Vacuum It: "Collect the blood spheres with a vacuum cleaner. We can DNA test the bag later."', th: '🧹 ดูดมัน: "เก็บทรงกลมเลือดด้วยเครื่องดูดฝุ่น เราตรวจ DNA ในถุงทีหลังได้"', zh: '🧹 吸尘："用吸尘器收集血球。我们可以稍后测试袋子里的DNA。"' }, consequence: { en: '🧩 Context Lost: You have the DNA (who died), but lost the pattern (how they died). Case becomes harder.', th: '🧩 บริบทหาย ุณมี DNA (ใครตาย) แต่เสียรูปแบบ (ตายยังไง) คดียากขึ้น', zh: '🧩 背景丢失：你有DNA（谁死了），但丢失了模式（怎么死的）。案件变得更难。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 20 } },
            { id: 'C', text: { en: '📷 3D Photogrammetry: "Ask passengers to float around and take photos from all angles. Crowd-source the scan."', th: '📷 โฟโตแกรมเมตรี 3D: "ขอให้ผู้โดยสารลอยรอบๆ และถ่ายรูปจากทุกมุม ใช้ฝูงชนช่วยสแกน"', zh: '📷 3D摄影测量："让乘客四处漂浮，从各个角度拍照。众包扫描。"' }, consequence: { en: '📹 Virtual Scene: You build a perfect VR model of the floating blood. Modern problems require crowd solutions.', th: '📹 ฉากเสมือน: คุณสร้างโมเดล VR ที่สมบูรณ์แบบของเลือดที่ลอยอยู่ ปัญหาสมัยใหม่ต้องการทางแก้จากฝูงชน', zh: '📹 虚拟场景：你建立了漂浮血液的完美VR模型。现代问题需要众包解决方案。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 } },
            { id: 'D', text: { en: '🤷 Give Up: "Fluid dynamics in zero-g are chaotic. Just interview suspects. Forensics is useless."', th: '🤷 ยอมแพ้: "พลศาสตร์ของไหลในแรงโน้มถ่วงศูนย์มันโกลาหล แค่สัมภาษณ์ผู้ต้องสงสัย นิติเวชไร้ประโยชน์"', zh: '🤷 放弃："零重力下的流体动力学是混乱的。只采访嫌疑人。取证无用。"' }, consequence: { en: '🚫 Lazy Science: You missed the trail. The blood trail actually pointed to the airlock. Killer escaped.', th: '🚫 วิทยาศาสตร์ขี้เกียจ: คุณพลาดร่องรอย รอยเลือดชี้ไปที่แอร์ล็อค ฆาตกรหนีไป', zh: '🚫 懒惰科学：你错过了线索。血迹实际上指向气闸。凶手逃脱了。' }, stats: { competence: -30, ethics: -10, leadership: -20, innovation: -10 } }
        ]
    },
    {
        id: 'forensic_032',
        text: { en: '🗿 The Clay Face: You perform facial reconstruction on a skull. A mother sees the photo and claims "That\'s my boy!". But DNA comparison with her is 0% match. She insists the DNA is wrong.', th: '🗿 หน้าดินเหนียว: คุณทำการสร้างใบหน้าจากกะโหลกศีรษะ แม่คนหนึ่งเห็นรูปและอ้างว่า "นั่นลูกชายฉัน!" แต่การเปรียบเทียบ DNA กับเธอคือ 0% เธอยืนยันว่า DNA ผิด', zh: '🗿 黏土脸：你对头骨进行面部重建。一位母亲看到照片并声称"那是我的孩子！"。但与她的DNA比对是0%匹配。她坚持DNA是错的。' },
        options: [
            { id: 'A', text: { en: '💔 Break it Gently: "Faces look alike. DNA doesn\'t lie. I am sorry, but this is not him."', th: '💔 บอกอย่างนุ่มนวล: "ใบหน้าคล้ายกันได้ DNA ไม่โกหก เสียใจด้วย แต่นี่ไม่ใช่เขา"', zh: '💔 温柔地打破："脸看起来很像。DNA不会撒谎。我很抱歉，但这不是他。"' }, consequence: { en: '😢 Sad Truth: She cries and leaves. You saved her from false hope. Professional integrity maintained.', th: '😢 ความจริงที่น่าเศร้า: เธอร้องไห้และจากไป คุณช่วยเธอจากความหวังปลอม รักษาความซื่อตรงในวิชาชีพ', zh: '😢 悲伤的真相：她哭着离开了。你把她从错误的希望中拯救出来。保持了职业操守。' }, stats: { competence: 50, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🎨 Resculpt: "Maybe I made the nose too wide. I\'ll change it to look LESS like him to stop her pain."', th: '🎨 ปั้นใหม่: "บางทีฉันทำจมูกกว้างไป ฉันจะเปลี่ยนให้เหมือนเขาน้อยลงเพื่อหยุดความเจ็บปวดของเธอ"', zh: '🎨 重塑："也许我把鼻子弄得太宽了。我会把它改得不像他，以停止她的痛苦。"' }, consequence: { en: '🎭 Bias Introduced: You are altering evidence based on emotion. Now the face looks like no one.', th: '🎭 อคติเกิดขึ้น: คุณกำลังแก้ไขหลักฐานตามอารมณ์ ตอนนี้ใบหน้าไม่เหมือนใครเลย', zh: '🎭 引入偏见：你基于情感改变证据。现在这张脸看起来谁也不像。' }, stats: { competence: -20, ethics: -10, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🧬 Check Adoption: "Test DNA against the father? Or check adoption records? Maybe she isn\'t the bio-mom?"', th: '🧬 เช็คการรับเลี้ยง: "ตรวจ DNA กับพ่อไหม? หรือเช็คบันทึกการรับเลี้ยง? บางทีเธออาจไม่ใช่แม่แท้ๆ?"', zh: '🧬 检查收养："测试父亲的DNA？或者检查收养记录？也许她不是生母？"' }, consequence: { en: '🤯 Twist: He WAS adopted. She didn\'t know. The skull IS her son. You solved a family secret.', th: '🤯 หักมุม: เขาถูกรับเลี้ยง เธอไม่รู้ กะโหลกคือลูกชายเธอ คุณไขความลับครอบครัว', zh: '🤯 反转：他是被收养的。她不知道。头骨是她的儿子。你解开了一个家庭秘密。' }, stats: { competence: 50, ethics: 30, leadership: 20, innovation: 30 } },
            { id: 'D', text: { en: '🤷 Agree with Mom: "Okay, maybe sample was bad. Let\'s declare it a match based on ID."', th: '🤷 เห็นด้วยกับแม่: "โอเค บางทีตัวอย่างอาจไม่ดี ประกาศว่าตรงกันตามการระบุตัวตน"', zh: '🤷 同意妈妈："好吧，也许样本不好。让我们根据ID宣布匹配。"' }, consequence: { en: '❌ Identification Error: It wasn\'t him. You declared a stranger dead. The real son walks in a year later.', th: '❌ ผิดพลาดการระบุ: ไม่ใช่เขา คุณประกาศว่าคนแปลกหน้าตาย ลูกชายตัวจริงเดินเข้ามา 1 ปีต่อมา', zh: '❌ 识别错误：不是他。你宣布一个陌生人死亡。真正的儿子一年后走进来了。' }, stats: { competence: -40, ethics: -40, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_033',
        text: { en: '🪰 Maggot Math: Maggot size suggests death was 5 days ago. But the smart thermostat history shows the AC was blasting freezing cold air for 3 days, which slows maggot growth. The body might be older.', th: '🪰 คณิตศาสตร์หนอน: ขนาดหนอนบ่งชี้ว่าตายเมื่อ 5 วันก่อน แต่ประวัติเทอร์โมสตัทอัจฉริยะโชว์ว่าแอร์เป่าลมเย็นจัดมา 3 วัน ซึ่งชะลอการโตของหนอน ศพอาจเกกว่านั้น', zh: '🪰 蛆虫数学：蛆虫大小表明死亡发生在5天前。但智能恒温器历史显示空调吹了3天的冷风，这减缓了蛆虫的生长。尸体可能更老。' },
        options: [
            { id: 'A', text: { en: '🌡️ Recalculate: "Apply the \' Accumulated Degree Days\' formula adjusting for the cold period. Estimate 8-10 days."', th: '🌡️ คำนวณใหม่: "ใช้สูตร \'Accumulated Degree Days\' ปรับตามช่วงเย็น ประมาณ 8-10 วัน"', zh: '🌡️ 重新计算："应用\'积温日\'公式调整寒冷期。估计8-10天。"' }, consequence: { en: '📅 Timeline Shift: The new time breaks the suspect\'s alibi! He thought the cold would fool you.', th: '📅 ไทม์ไลน์เปลี่ยน: เวลาใหม่ทำลายข้อแก้ตัวของผู้ต้องสงสัย! เขาคิดว่าความเย็นจะหลอกคุณได้', zh: '📅 时间线转移：新的时间打破了嫌疑人的不在场证明！他以为寒冷会骗过你。' }, stats: { competence: 50, ethics: 30, leadership: 20, innovation: 30 } },
            { id: 'B', text: { en: '📏 Standard Protocol: "Ignore the AC. Biology varies. Stick to the standard growth chart."', th: '📏 โปรโตคอลมาตรฐาน: "เพิกเฉยต่อแอร์ ชีววิทยามีความหลากหลาย ยึดตามตารางการเติบโตมาตรฐาน"', zh: '📏 标准协议："忽略空调。生物学各不相同。坚持标准生长图表。"' }, consequence: { en: '🧊 Cold Error: You underestimated the time. The killer has an alibi for 5 days ago. He walks.', th: '🧊 ข้อผิดพลาดความเย็น: คุณประเมินเวลาต่ำไป ฆาตกรมีข้อแก้ตัวสำหรับ 5 วันก่อน เขาเดินจากไป', zh: '🧊 寒冷错误：你低估了时间。凶手有5天前的不在场证明。他走了。' }, stats: { competence: -10, ethics: 0, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🧪 Breed Them: "Grow these maggots in the lab at cold temp to reproduce the rate. Experimental verification."', th: '🧪 เพาะพันธุ์: "เลี้ยงหนอนเหล่านี้ในแล็บที่อุณหภูมิเย็นเพื่อจำลองอัตรา การตรวจสอบเชิงทดลอง"', zh: '🧪 培育它们："在实验室低温下培育这些蛆虫以复现速率。实验验证。"' }, consequence: { en: '🔬 Perfect Model: It takes time, but your model proves the delay factor perfectly. Court is impressed.', th: '🔬 โมเดลสมบูรณ์: ใช้เวลา แต่โมเดลของคุณพิสูจน์ปัจจัยความล่าช้าได้สมบูรณ์แบบ ศาลประทับใจ', zh: '🔬 完美模型：这需要时间，但你的模型完美证明了延迟因素。法庭印象深刻。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 } },
            { id: 'D', text: { en: '🤢 "Close Enough": "Give a wide range: \'Death occurred 2 to 14 days ago\'. Safe but useless."', th: '🤢 "ใกล้เคียงพอ": "ให้ช่วงกว้าง: \'ตายเมื่อ 2 ถึง 14 วันก่อน\' ปลอดภัยแต่ไร้ประโยชน์"', zh: '🤢 "差不多"："给出一个大范围：\'死亡发生在2到14天前\'。安全但无用。"' }, consequence: { en: '📉 Vague: Detectives hate you. "Thanks for narrowing it down to \'sometime this month\'".', th: '📉 คลุมเครือ: นักสืบเกลียดคุณ "ขอบคุณที่บีบให้แคบลงเหลือ \'สักวันในเดือนนี้\'"', zh: '📉 模糊：侦探讨厌你。"谢谢你缩小到\'本月某时\'"。' }, stats: { competence: 0, ethics: 10, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_034',
        text: { en: '☢️ Glowing Corpse: A spy dies mysteriously. You start the autopsy. Your Geiger counter goes crazy. It is Polonium-210. You have already opened the chest. The room is contaminated.', th: '☢️ ศพเรืองแสง: สายลับตายอย่างลึกลับ คุณเริ่มชันสูตร เครื่องวัด Geiger ของคุณดังลั่น มันคือ Polonium-210 คุณเปิดหน้าอกแล้ว ห้องปนเปื้อน', zh: '☢️ 发光尸体：一名间谍神秘死亡。你开始尸检。你的盖革计数器疯了。是钋-210。你已经打开了胸腔。房间被污染了。' },
        options: [
            { id: 'A', text: { en: '🏃 Run!: "Evacuate! Seal the room! Leave the body Open!"', th: '🏃 วิ่ง!: "อพยพ! ปิดผนึกห้อง! ทิ้งศพที่เปิดอยู่!"', zh: '🏃 跑！："撤离！封锁房间！留下开着的尸体！"' }, consequence: { en: '😰 Panic: You survive, but the contamination spreads to the hall. Decon costs millions.', th: '😰 ตื่นตระหนก: คุณรอด แต่การปนเปื้อนแพร่ไปที่โถงทางเดิน ค่าล้างพิษหลายล้าน', zh: '😰 恐慌：你活下来了，但污染扩散到了大厅。去污耗资数百万。' }, stats: { competence: -10, ethics: 0, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🛡️ Containment: "Stay calmly. Staple the incision closed. Bag the body heavy-duty. Then shower."', th: '🛡️ การกักกัน: "ใจเย็นๆ เย็บปิดแผล ใส่ถุงศพหนาพิเศษ แล้วอาบน้ำ"', zh: '🛡️ 遏制："保持冷静。缝合切口。用重型袋子装尸体。然后淋浴。"' }, consequence: { en: '🦸 Heroic Risk: You absorbed some radiation, but you contained the threat. The agency owes you.', th: '🦸 ความเสี่ยงฮีโร่: คุณได้รับรังสีบ้าง แต่คุณกักกันภัยคุกคาม หน่วยงานติดหนี้บุญคุณคุณ', zh: '🦸 英雄冒险：你吸收了一些辐射，但遏制了威胁。该机构欠你的。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 10 } },
            { id: 'C', text: { en: '🌡️ Finish the Job: "I\'m already exposed. Might as well extract the bullet/poison source to prove it."', th: '🌡️ ทำให้จบ: "ฉันโดนแล้ว สู้เอาหัวกระสุน/แหล่งพิษออกมาเพื่อพิสูจน์ดีกว่า"', zh: '🌡️ 完成工作："我已经暴露了。甚至取出子弹/毒源来证明这一点。"' }, consequence: { en: '☠️ Fatal Dedication: You get the sample, but the dose is lethal. You die a slow death. Was it worth it?', th: '☠️ ความทุ่มเทมรณะ: คุณได้ตัวอย่าง แต่ปริมาณมันถึงตาย คุณตายช้าๆ มันคุ้มไหม?', zh: '☠️ 致命奉献：你得到了样本，但剂量是致命的。你慢慢死去。值得吗？' }, stats: { competence: 50, ethics: 50, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '📱 Call Hazmat: "Don\'t move. Call the hazmat team to come get me and the body."', th: '📱 เรียก Hazmat: "อย่าขยับ เรียกทีม Hazmat มาเอาฉันและศพ"', zh: '📱 呼叫危险品处理队："别动。叫危险品处理队来接我和尸体。"' }, consequence: { en: '🐢 Slow & Safe: You wait 4 hours in a suit. Safe extraction. Professional response.', th: '🐢 ช้าและปลอดภัย: คุณรอ 4 ชั่วโมงในชุด การช่วยเหลือปลอดภัย การตอบสนองมืออาชีพ', zh: '🐢 慢且安全：你穿着防护服等了4个小时。安全提取。专业反应。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_035',
        text: { en: '🗣️ Voice Deepfake: Prosecution has a recording of the suspect confessing. Suspect says "It\'s AI generated!". The audio waves look perfect. But the background noise... loops every 4 seconds.', th: '🗣️ เสียง Deepfake: ฝ่ายโจทก์มีบันทึกเสียงผู้ต้องสงสัยสารภาพ ผู้ต้องสงสัยบอก "AI สร้าง!" คลื่นเสียงดูสมบูรณ์แบบ แต่เสียงพื้นหลัง... วนลูปทุก 4 วินาที', zh: '🗣️ 语音Deepfake：检方有嫌疑人招供的录音。嫌疑人说"是AI生成的！"。声波看起来很完美。但背景噪音......每4秒循环一次。' },
        options: [
            { id: 'A', text: { en: '🔁 Loop Analysis: "Isolate the background. Prove the loop. Nature doesn\'t loop perfectly. It\'s fake."', th: '🔁 วิเคราะห์ลูป: "แยกพื้นหลัง พิสูจน์ลูป ธรรมชาติไม่วนลูปเป๊ะๆ มันปลอม"', zh: '🔁 循环分析："分离背景。证明循环。自然界不会完美循环。是假的。"' }, consequence: { en: '✅ Fake Exposed: The "confession" was stitched together. You destroy the prosecution\'s key evidence. Justice wins.', th: '✅ ของปลอมถูกแฉ: "คำสารภาพ" ถูกตัดต่อรวมกัน คุณทำลายหลักฐานสำคัญของโจทก์ ความยุติธรรมชนะ', zh: '✅ 假货曝光："供词"是拼凑起来的。你摧毁了检方的关键证据。正义获胜。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 40 } },
            { id: 'B', text: { en: '🤷 Ignore Noise: "Focus on the voice formants. They match the suspect. The noise is just bad recording equipment."', th: '🤷 เพิกเฉยเสียงรบกวน: "โฟกัสที่ฟอร์แมนต์เสียง ตรงกับผู้ต้องสงสัย เสียงรบกวนแค่อุปกรณ์อัดห่วย"', zh: '🤷 忽略噪音："专注于语音共振峰。它们与嫌疑人匹配。噪音只是糟糕的录音设备。" ' }, consequence: { en: '⚖️ Bad Ruling: You authenticate a fake. Innocent man convicted. Experts mock your oversight later.', th: '⚖️ คำตัดสินแย่: คุณรับรองของปลอม คนบริสุทธิ์ติดคุก ผู้เชี่ยวชาญล้อเลียนความสะเพร่าของคุณทีหลัง', zh: '⚖️ 糟糕的裁决：你认证了赝品。无辜者被定罪。专家后来嘲笑你的疏忽。' }, stats: { competence: -30, ethics: -20, leadership: -10, innovation: -10 } },
            { id: 'C', text: { en: '🎧 Spectral Subtraction: "Remove the noise. Listen to the voice artifacts. Metallic robot tint?"', th: '🎧 การลบสเปกตรัม: "ลบเสียงรบกวน ฟังสิ่งแปลกปลอมในเสียง เสียงโลหะหุ่นยนต์?"', zh: '🎧 谱减法："去除噪音。听听语音伪影。金属机器人音色？"' }, consequence: { en: '🤖 Artifacts Found: Without the noise, the voice sounds robotic. Bad AI generation. Confirmed fake.', th: '🤖 พบสิ่งแปลกปลอม: ปราศจากเสียงรบกวน เสียงฟังดูเหมือนหุ่นยนต์ การสร้าง AI ห่วย ยืนยันปลอม', zh: '🤖 发现伪影：没有噪音，声音听起来像机器人。糟糕的AI生成。确认为假。' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 30 } },
            { id: 'D', text: { en: '🕵️ Source Trace: "Analyze the file metadata. Find the software used to create it."', th: '🕵️ ตามรอยแหล่งที่มา: "วิเคราะห์เมตาดาต้าไฟล์ หาซอฟตแวร์ที่ใช้สร้าง"', zh: '🕵️ 来源追踪："分析文件元数据。找到用于创建它的软件。"' }, consequence: { en: '💾 Metadata Wipe: The creator was smart. Metadata is scrubbed. Dead end. Should have looked at the audio.', th: '💾 เมตาดาต้าถูกลบ: ผู้สร้างฉลาด เมตาดาต้าเกลี้ยง ทางตัน น่าจะดูที่เสียง', zh: '💾 元数据擦除：创建者很聪明。元数据被擦除。死胡同。本该看音频的。' }, stats: { competence: 10, ethics: 0, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_036',
        text: { en: '🔥 Firefighter Arsonist: You analyze arson debris and find a rare accelerant mix (Vanilla & Kerosene). This "recipe" is an old firefighter trick to mask the smell. The Fire Chief is the main suspect.', th: '🔥 นักดับเพลิงวางเพลิง: คุณวิเคราะห์เศษซากเพลิงไหม้และพบส่วนผสมสารเร่งไฟหายาก (วานิลลา & น้ำมันก๊าด) "สูตร" นี้เป็นเคล็ดลับนักดับเพลิงเก่าแก่เพื่อกลบกลิ่น หัวหน้าดับเพลิงเป็นผู้ต้องสงสัยหลัก', zh: '🔥 消防员纵火犯：你分析了纵火碎片，发现了一种罕见的助燃剂混合物（香草和煤油）。这个"配方"是老消防员用来掩盖气味的把戏。消防队长是主要嫌疑人。' },
        options: [
            { id: 'A', text: { en: '🕵️ Internal Affairs: "Report directly to the Mayor. Do not trust the police (who work with the Chief)."', th: '🕵️ กิจการภายใน: "รายงานตรงต่อนายกเทศมนตรี อย่าไว้ใจตำรวจ (ที่ทำงานร่วมกับหัวหน้า)"', zh: '🕵️ 内务部："直接向市长汇报。不要相信警察（他们与局长共事）。"' }, consequence: { en: '⚖️ High Stakes: You start a political war. The Chief is arrested. You are safe, but the department hates you.', th: '⚖️ เดิมพันสูง: คุณเริ่มสงครามการเมือง หัวหน้าถูกจับ คุณปลอดภัย แต่แผนกเกลียดคุณ', zh: '⚖️ 高风险：你引发了一场政治战争。局长被捕。你是安全的，但部门恨你。' }, stats: { competence: 50, ethics: 50, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🤫 Confront Him: "Tell the Chief what you found. Give him a chance to explain. Maybe he was framed?"', th: '🤫 เผชิญหน้า: "บอกหัวหน้าว่าคุณเจออะไร ให้โอกาสเขาอธิบาย บางทีเขาอาจถูกใส่ร้าย?"', zh: '🤫 与他对质："告诉局长你发现了什么。给他一个解释的机会。也许他是被陷害的？"' }, consequence: { en: '🔥 Evidence Lost: The evidence "accidentally" burns up that night. You were naive. He destroyed it.', th: '🔥 หลักฐานหาย: หลักฐาน "อุบัติเหตุ" ไหม้คืนนั้น คุณไร้เดียงสา เขาทำลายมัน', zh: '🔥 证据丢失：那天晚上证据"意外"烧毁了。你太天真了。他毁了它。' }, stats: { competence: -20, ethics: -20, leadership: -30, innovation: 0 } },
            { id: 'C', text: { en: '🧪 Blind Test: "Send samples to an outside lab. Remove your name. Let the result speak for itself."', th: '🧪 ทดสอบแบบบอด: "ส่งตวอย่างไปแล็บนอก ลบชื่อคุณ ให้ผลลัพธ์พูดเอง"', zh: '🧪 盲测："将样本送到外部实验室。去掉你的名字。让结果不言自明。"' }, consequence: { en: '🛡️ Neutrality: The state lab confirms it. The arrest happens without your bias being questioned. Smart.', th: '🛡️ ความเป็นกลาง: แล็บรัฐยืนยัน การจับกุมเกิดขึ้นโดยไม่มีใครสงสัยอคติของคุณ ฉลาด', zh: '🛡️ 中立：国家实验室证实了这一点。逮捕发生了，你的偏见没有受到质疑。聪明。' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 10 } },
            { id: 'D', text: { en: '🤥 "Common Chemical": "Report it as generic kerosene. Vanilla is common in... air fresheners? Let it slide."', th: '🤥 "สารเคมีทั่วไป": "รายงานว่าเป็นน้ำมันก๊าดทั่วไป วานิลลาหาง่ายใน... น้ำหอมปรับอากาศ? ปล่อยผ่าน"', zh: '🤥 "常见化学品"："将其报告为普通煤油。香草在......空气清新剂中很常见？放行。"' }, consequence: { en: '🏙️ More Fires: The Chief burns down an orphanage next. You have blood on your hands.', th: '🏙️ ไฟไหม้เพิ่ม: หัวหน้าเผาสถานเลี้ยงเด็กกำพร้าถัดไป เลือดเปื้อนมือคุณ', zh: '🏙️ 更多火灾：局长接着烧毁了一家孤儿院。你手上沾满了鲜血。' }, stats: { competence: -30, ethics: -50, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_037',
        text: { en: '🪞 Mirror Shot: A victim was shot through a glass window and a mirror. The laser trajectory analysis is confusing because of refraction. Detectives think the shooter was on the roof. You think they were on the street.', th: '🪞 ยิงผ่านกระจก: เหยื่อถูกยิงผ่านหน้าต่างกระจกและกระจกเงา การวิเคราะห์วิถีเลเซอร์สับสนเพราะการหักเห นักสืบคิดว่ามือปืนอยู่บนหลังคา คุณคิดว่าพวกเขาอยู่บนถนน', zh: '🪞 镜子射击：一名受害者穿过玻璃窗和镜子被枪杀。由于折射，激光轨迹分析令人困惑。侦探认为枪手在屋顶上。你认为他们在街上。' },
        options: [
            { id: 'A', text: { en: '📐 Refractive Math: "Calculate the Refractive Index of the specific glass types. Adjust the laser angle by 2 degrees."', th: '📐 คณิตศาสตร์หักเห: "คำนวณดัชนีหักเหของชนิดแก้วเฉพาะ ปรับมุมเลเซอร์ 2 องศา"', zh: '📐 折射数学："计算特定玻璃类型的折射率。将激光角度调整2度。"' }, consequence: { en: '🎯 Exact Hit: The math proves it was the street! You find the shell casing in the gutter. Physics wins.', th: '🎯 ยิงแม่น: คณิตศาสตร์พิสูจน์ว่าเป็นถนน! คุณพบปลอกกระสุนในรางน้ำ ฟิสิกส์ชนะ', zh: '🎯 准确命中：数学证明是在街上！你在阴沟里发现了弹壳。物理学胜利。' }, stats: { competence: 50, ethics: 20, leadership: 10, innovation: 30 } },
            { id: 'B', text: { en: '👷 Reconstruct Scene: "Buy the same window and mirror. Shoot a laser through it physically. Don\'t rely on math."', th: '👷 สร้างฉากจำลอง: "ซื้อหน้าต่างและกระจกแบบเดียวกัน ยิงเลเซอร์ผ่านมันจริงๆ อย่าพึ่งแค่เลข"', zh: '👷 重建现场："购买相同的窗户和镜子。用激光物理穿过它。不要依赖数学。"' }, consequence: { en: '🛠️ Practical Proof: It matches. The jury understands the physical demo better than equations. Good show.', th: '🛠️ บทพิสูจน์ปฏิบัติ: มันตรงกัน ลูกขุนเข้าใจการสาธิตจริงมากกว่าสมการ การแสดงที่ดี', zh: '🛠️ 实际证明：匹配。陪审团比方程更能理解物理演示。好戏。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 } },
            { id: 'C', text: { en: '🤷 "Close Enough": "The difference is minor. Just agree with the detectives to keep the team happy."', th: '🤷 "ใกล้เคียงพอ": "ความต่างเล็กน้อย แค่เห็นด้วยกับนักสืบเพื่อรักษาความสุขในทีม"', zh: '🤷 "差不多"："差异很小。只要同意侦探的意见，让团队开心就好。"' }, consequence: { en: '🧱 Wrong Suspect: They raid the roof building. Arrest the wrong guy. The real shooter escapes.', th: '🧱 ผู้ต้องสงสัยผิด: พวกเขาบุกตึกหลังคา จับผิดคน มือปืนตัวจริงหนี', zh: '🧱 错误的嫌疑人：他们突袭了屋顶建筑。抓错了人。真正的枪手逃脱了。' }, stats: { competence: -20, ethics: -30, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🔫 Stringing: "Use physical string instead of lasers. It doesn\'t refract (joke). Actually, string is useless here."', th: '🔫 การขึงเชือก: "ใช้เชือกจริงแทนเลเซอร์ มันไม่หักเห (ล้อเล่น) จริงๆ แล้วเชือกไร้ค่าที่นี่"', zh: '🔫 拉线："用物理线代替激光。它不会折射（玩笑）。实际上，线在这里没用。"' }, consequence: { en: '🤡 Amateur: You look silly trying to pull a string through a solid pane of glass. Detectives laugh.', th: '🤡 มือสมัครเล่น: คุณดูตลกที่พยายามดึงเชือกผ่านแผ่นกระจก นักสืบหัวเราะ', zh: '🤡 业余：你试图把一根绳子穿过一块实心玻璃，看起来很傻。侦探们笑了。' }, stats: { competence: -10, ethics: 0, leadership: -20, innovation: -10 } }
        ]
    },
    {
        id: 'forensic_038',
        text: { en: '🦷 Bite Mark Dubiety: The DA pressures you to confirm a bite mark on the victim matches the suspect. You know that bite mark analysis is widely considered pseudo-science now with high error rates.', th: '🦷 ความน่าสงสัยของรอยกัด: อัยการกดดันให้คุณยืนยันว่ารอยกัดบนเหยื่อตรงกับผู้ต้องสงสัย คุณรู้ว่าการวิเคราะห์รอยกัดถือเป็นวิทยาศาสตร์เทียมที่มีอัตราผิดพลาดสูงในปัจจุบัน', zh: '🦷 咬痕疑点：地方检察官向你施压，要求你确认受害者身上的咬痕与嫌疑人相符。你知道咬痕分析现在被广泛认为是伪科学，错误率很高。' },
        options: [
            { id: 'A', text: { en: '🚫 Refuse Match: "I can say it is \'consistent with human teeth\', but I cannot match a specific person. It is reckless."', th: '🚫 ปฏิเสธการจับคู่: "ฉันบอกได้ว่าเป็น \'ฟันมนุษย์\' แต่ระบุตัวคนไม่ได้ มันประมาท"', zh: '🚫 拒绝匹配："我可以说它与\'人类牙齿一致\'，但我无法匹配特定的人。这很鲁莽。"' }, consequence: { en: '🛡️ Integrity: DA acts mad, but you avoid a future exoneration scandal. You stick to real science.', th: '🛡️ ความซื่อตรง: อัยการโกรธ แต่คุณหลีกเลี่ยงสแกนดัลการพ้นผิดในอนาคต คุณยึดมั่นในวิทยศาตร์จริง', zh: '🛡️ 正直：地方检察官很生气，但你避免了未来的无罪丑闻。你坚持真正的科学。' }, stats: { competence: 50, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🦷 "It\'s a Match": "Sure. The incisor rotation is unique. I\'ll testify it\'s him. Put him away."', th: '🦷 "มันตรงกัน": "แน่นอน การหมุนของฟันหน้ามีเอกลักษณ์ ฉันจะให้การว่าเป็นเขา จับเขาขัง"', zh: '🦷 "是匹配的"："当然。门牙旋转是独特的。我会作证就是他。把他关起来。"' }, consequence: { en: '⚖️ Junk Science: He is convicted. 10 years later, DNA proves he is innocent. You are disgraced.', th: '⚖️ วิทยาศาสตร์ขยะ: เขาถูกตัดสินลงโทษ 10 ปีต่อมา DNA พิสูจน์ว่าเขาบริสุทธิ์ คุณอัปยศ', zh: '⚖️ 垃圾科学：他被定罪。10年后，DNA证明他是无辜的。你声名狼藉。' }, stats: { competence: -30, ethics: -50, leadership: -20, innovation: -10 } },
            { id: 'C', text: { en: '🧬 Swab for Saliva: "Forget the mark shape. Swab the center for saliva DNA. Double soak technique."', th: '🧬 สวอปน้ำลาย: "ลืมรูปร่างรอยกัด สวอปตรงกลางหาน้ำลาย DNA เทคนิคแช่สองครั้ง"', zh: '🧬 唾液拭子："忘掉痕迹形状。擦拭中心以获取唾液DNA。双浸技术。"' }, consequence: { en: '💡 Real Evidence: You find DNA! You don\'t need the dubious bite mark analysis. Case solid.', th: '💡 หลักฐานจริง: คุณเจอ DNA! ไม่ต้องพึ่งการวิเคราะห์รอยกัดที่น่าสงสัย คดีแน่นหนา', zh: '💡 真实证据：你发现了DNA！你不需要可疑的咬痕分析。案件确凿。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 30 } },
            { id: 'D', text: { en: '📚 Cite Literature: "Write a report citing 50 studies debunking bite marks. Educate the DA."', th: '📚 อ้างอิงวรรณกรรม: "เขียนรายงานอ้างอิง 50 การศึกษาที่หักล้างรอยกัด ให้ความรู้อัยการ"', zh: '📚 引用文献："写一份报告，引用50项揭穿咬痕的研究。教育地方检察官。"' }, consequence: { en: '🤓 Academic Stand: The DA drops the evidence. You are annoying but technically right.', th: '🤓 จุดยืนวิชาการ: อัยการทิ้งหลักฐาน คุณน่ารำคาญแต่ถูกทางเทคนิค', zh: '🤓 学术立场：地方检察官放弃了证据。你很烦人，但在技术上是正确的。' }, stats: { competence: 40, ethics: 40, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_039',
        text: { en: '🔐 Ransomware Autopsy: You start a CT scan on a murder victim. The screen goes red. "YOUR FILES ARE ENCRYPTED. PAY 5 BTC". The hackers locked the body scan data effectively holding the evidence hostage.', th: '🔐 การชันสูตร Ransomware: คุณเริ่มสแกน CT ศพฆาตกรรม หน้าจอเป็นสีแดง "ไฟล์ของคุณถูกเข้ารหัส จ่าย 5 BTC" แฮกเกอร์ล็อกข้อมูลสแกนศพ จับหลักฐานเป็นตัวประกัน', zh: '🔐 勒索软件尸检：你开始对一名谋杀受害者进行CT扫描。屏幕变红。"您的文件已被加密。支付5比特币"。黑客锁定了尸体扫描数据，实际上是扣押了证据。' },
        options: [
            { id: 'A', text: { en: '🖥️ Offline Backup: "Hopefully the auto-backup to the hard drive worked? Check the local cache!"', th: '🖥️ สำรองข้อมูลออฟไลน์: "หวังว่าการสำรองออโต้ลงฮาร์ดไดรฟ์จะทำงาน? เช็คแคชท้องถิ่น!"', zh: '🖥️ 离线备份："希望硬盘的自动备份起作用了？检查本地缓存！"' }, consequence: { en: '💾 Save: You find a temp file! It is partial but enough to see the bullet path. You beat the hackers.', th: '💾 รอด: คุณเจอไฟล์ชั่วคราว! มันไม่สมบูรณ์แต่พอเห็นวิถีกระสุน คุณชนะแฮกเกอร์', zh: '💾 保存：你找到了一个临时文件！它是局部的，但足以看到子弹路径。你打败了黑客。' }, stats: { competence: 40, ethics: 20, leadership: 10, innovation: 30 } },
            { id: 'B', text: { en: '💰 Pay Up: "We need the data now. Use the department slush fund. Pay them."', th: '💰 จ่ายซะ: "เราต้องการข้อมูลเดี๋ยวนี้ ใช้กองทุนลับแผนก จ่ายพวกเขา"', zh: '💰 付钱："我们现在需要数据。使用部门行贿基金。付钱给他们。"' }, consequence: { en: '💸 Bad Precedent: They unlock it. But next week, they hack you again. You funded criminals.', th: '💸 บรรทัดฐานแย่: พวกเขาปลดล็อก แต่สัปดาห์หน้าเจาะอีก คุณให้ทุนอาชญากร', zh: '💸 坏先例：他们解锁了它。但下周，他们又黑了你。你资助了罪犯。' }, stats: { competence: -10, ethics: -30, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🔪 Manual Autopsy: "Screw the tech. Grab the scalpel. We do this the old fashioned way."', th: '🔪 ชันสูตรมือ: "ช่างหัวเทคโนโลยี หยิบมีดผ่าตัด เราทำแบบดั้งเดิม"', zh: '🔪 手动尸检："去他的技术。拿手术刀来。我们用老式方法做。"' }, consequence: { en: '🩸 Messy but True: You destroy the digital record chance, but you find the bullet physically. Reliable.', th: '🩸 เลอะเทอะแต่จริง: คุณทำลายโอกาสบันทึกดิจิทัล แต่คุณเจอกระสุนจริงๆ เชื่อถือได้', zh: '🩸 混乱但真实：你破坏了数字记录的机会，但你从物理上找到了子弹。可靠。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: -10 } },
            { id: 'D', text: { en: '🕵️ Counter-Hack: "Call the Cyber-Crime division. Trace the IP through the hospital network."', th: '🕵️ แฮกกลับ: "เรียกแผนกอาชญากรรมไซเบอร์ ตามรอย IP ผ่านเครือข่ายโรงพยาบาล"', zh: '🕵️ 反黑客："呼叫网络犯罪部门。通过医院网络追踪IP。"' }, consequence: { en: '🔗 Collaboration: You don\'t get the data back instantly, but you help catch the hackers. Big picture win.', th: '🔗 ร่วมมือ: คุณไม่ได้ข้อมูลคืนทันที แต่ช่วยจับแฮกเกอร์ ชนะในภาพรวม', zh: '🔗 协作：你没有立即取回数据，但你帮助抓住了黑客。大局胜利。' }, stats: { competence: 20, ethics: 40, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'forensic_040',
        text: { en: '🐲 Toxic Tattoo: Victim died of heavy metal poisoning (Lead/Mercury). He got a full body tattoo via illegal underground artist last week. The ink looks... homemade. Investigating the ink might prove manslaughter.', th: '🐲 รอยสักมีพิษ: เหยื่อตายด้วยพิษโลหะหนัก (ตะกั่ว/ปรอท) เขาทำรอยสักเต็มตัวจากช่างเถื่อนเมื่อสัปดาห์ก่อน หมึกดู... ทำเอง การสอบสวนหมึกอาจพิสูจน์การฆ่าคนตายโดยไม่เจตนา', zh: '🐲 有毒纹身：受害者死于重金属中毒（铅/汞）。上周他通过非法地下艺术家纹了全身。墨水看起来......是自制的。调查墨水可能证明是过失杀人。' },
        options: [
            { id: 'A', text: { en: '🧪 Skin Biopsy: "Sample the tattooed skin. Dissolve tissue. Run Mass Spec for mercury/lead levels."', th: '🧪 ตัดชิ้นเนื้อผิวหนัง: "เก็บตัวอย่างผิวรอยสัก ละลายเนื้อเยื่อ รัน Mass Spec หาระดับปรอท/ตะกั่ว"', zh: '🧪 皮肤活检："取样纹身皮肤。溶解组织。运行质谱分析汞/铅水平。"' }, consequence: { en: '📈 Exact Match: The skin has lethal levels. The ink pot in the artist\'s shop matches. Case closed.', th: '📈 ตรงกันเป๊ะ: ผิวหนังมีระดับถึงตาย กระปุกหมึกในร้านช่างตรงกัน ปิดคดี', zh: '📈 完全匹配：皮肤含有致死量。艺术家店里的墨水罐匹配。结案。' }, stats: { competence: 50, ethics: 30, leadership: 10, innovation: 20 } },
            { id: 'B', text: { en: '🎨 Raid the Shop: "Seize all inks. Test them. Ignore the body for now."', th: '🎨 บุกร้าน: "ยึดหมึกทั้งหมด ตรวจสอบพวกมัน เพิกเฉยต่อศพไปก่อน"', zh: '🎨 突袭商店："没收所有墨水。测试它们。暂时忽略尸体。"' }, consequence: { en: '🧹 Cleaned Up: The artist dumped the inks already! You have no link to the victim. You failed.', th: '🧹 เก็บกวาดแล้ว: ช่างทิ้งหมึกไปแล้ว! คุณไม่มีจุดเชื่อมโยงกับเหยื่อ คุณล้มเหลว', zh: '🧹 清理完毕：艺术家已经把墨水倒了！你与受害者没有任何联系。你失败了。' }, stats: { competence: -10, ethics: -10, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🩸 Blood Test Only: "Heavy metals stay in blood. Just test blood."', th: '🩸 ตรวจเลือดเท่านั้น: "โลหะหนักอยู่ในเลือด แค่ตรวจเลือด"', zh: '🩸 仅验血："重金属留在血液中。只验血。"' }, consequence: { en: '❓ Source Unknown: You confirm poisoning, but not the source. Defense argues he ate bad fish. Case weak.', th: '❓ ไม่ทราบแหล่ง: คุณยืนยันการโดนพิษ แต่ไม่ใช่แหล่งที่มา ฝ่ายจำเลยอ้างว่าเขากินปลาเน่า คดีอ่อน', zh: '❓ 来源不明：你证实了中毒，但未证实来源。辩方辩称他吃了坏鱼。案件薄弱。' }, stats: { competence: 10, ethics: 10, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '👁️ X-Ray Skin: "Heavy metals block X-rays. X-ray the skin flaps. If they are opaque, it\'s metal."', th: '👁️ X-Ray ผิว: "โลหะหนักกั้น X-rays เอ็กซ์เรย์แผ่นผิวหนัง ถ้ามันทึบแสง คือโลหะ"', zh: '👁️ X光皮肤："重金属阻挡X射线。对皮瓣进行X光检查。如果它们是不透明的，那就是金属。"' }, consequence: { en: '💡 Clever Visualization: The tattoo lights up on X-ray. Visual proof for the jury. Innovative.', th: '💡 การมองเห็นที่ฉลาด: รอยสักสว่างบน X-ray หลักฐานภาพสำหรับลูกขุน นวัตกรรม', zh: '💡 巧妙的可视化：纹身在X光下亮起来。给陪审团的视觉证据。创新。' }, stats: { competence: 40, ethics: 20, leadership: 10, innovation: 50 } }
        ]
    },
    {
        id: 'forensic_041',
        text: { en: '👯 Identical Twin Trouble: A robbery DNA sample matches Twin A and Twin B perfectly. Twin A has an alibi. Twin B does not. But you need to distinguish them biologically to be sure.', th: '👯 ปัญหาฝาแฝดแท้: ตัวอย่าง DNA การปล้นตรงกับแฝด A และแฝด B เป๊ะ แฝด A มีข้อแก้ตัว แฝด B ไม่มี แต่คุณต้องแยกพวกเขาทางชีวภาพเพื่อความแน่ใจ', zh: '👯 同卵双胞胎麻烦：抢劫案的DNA样本与双胞胎A和双胞胎B完美匹配。双胞胎A有不在场证明。双胞胎B没有。但你需要从生物学上区分他们以确保万无一失。' },
        options: [
            { id: 'A', text: { en: '👆 Fingerprints: "Identical twins do NOT have identical fingerprints. Check the prints!"', th: '👆 ลายนิ้วมือ: "ฝาแฝดแท้ไม่มีลายนิ้วมือเหมือนกัน ตรวจลายนิ้วมือ!"', zh: '👆 指纹："同卵双胞胎没有相同的指纹。检查指纹！"' }, consequence: { en: '✅ Classic Win: Fingerprints are phenotype, not genotype. Development in womb changes them. You identify Twin B.', th: '✅ ชัยชนะคลาสสิก: ลายนิ้วมือเป็นฟีโนไทป์ ไม่ใช่จีโนไทป์ การพัฒนาในครรภ์เปลี่ยนมัน คุณระบุแฝด B', zh: '✅ 经典胜利：指纹是表型，不是基因型。子宫内的发育改变了它们。你认出了双胞胎B。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🧬 Next Gen Sequencing: "Sequence their entire genome looking for random mutations since birth."', th: '🧬 ลำดับพันธุกรรมยุคถัดไป: "ลำดับจีโนมทั้งหมดหาการกลายพันธุ์สุ่มตั้งแต่เกิด"', zh: '🧬 下一代测序："对他们的整个基因组进行测序，寻找出生以来的随机突变。"' }, consequence: { en: '💸 Expensive: It costs $50,000 and finds one SNP difference. Overkill, but works scientifically.', th: '💸 แพง: ราคา $50,000 และเจอ SNP ต่างกันจุดเดียว เกินจำเป็น แต่ได้ผลทางวิทยาศาสตร์', zh: '💸 昂贵：花费50000美元，发现一个SNP差异。杀鸡用牛刀，但在科学上不仅奏效。' }, stats: { competence: 40, ethics: 10, leadership: -10, innovation: 40 } },
            { id: 'C', text: { en: '👃 Scent Dog: "Use a dog. Twins smell different due to diet and environment."', th: '👃 สุนัขดมกลิ่น: "ใช้สุนัข แฝดกลิ่นต่างกันเพราะอาหารและสิ่งแวดล้อม"', zh: '👃 嗅探犬："用狗。双胞胎因饮食和环境不同而气味不同。"' }, consequence: { en: '🐕 Jury Doubt: The dog signals Twin B. But the jury thinks it\'s voodoo science. Case shaky.', th: '🐕 ลูกขุนสงสัย: สุนัขชี้แฝด B แต่ลูกขุนคิดว่าเป็นไสยศาสตร์ คดีสั่นคลอน', zh: '🐕 陪审团怀疑：狗向双胞胎B发出信号。但陪审团认为这是伏都教科学。案件不可靠。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 10 } },
            { id: 'D', text: { en: '🤷 Guess: "Twin B has no alibi. Just say the DNA matches him specifically. Lie slightly."', th: '🤷 เดา: "แฝด B ไม่มีข้อแก้ตัว แค่บอกว่า DNA ตรงกับเขาโดยเฉพาะ โกหกนิดหน่อย"', zh: '🤷 猜："双胞胎B没有不在场证明。就说DNA与他特别匹配。撒一点谎。"' }, consequence: { en: '🤥 Perjury: You lie under oath. If found out, every case you ever touched is reopened.', th: '🤥 ให้การเท็จ: คุณโกหกภายใต้คำสาบาน ถ้าถูกจับได้ ทุกคดีที่คุณเคยทำจะถูกรื้อฟื้น', zh: '🤥 伪证：你在宣誓后撒谎。如果被发现，你经手的所有案件都会重审。' }, stats: { competence: -20, ethics: -50, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_042',
        text: { en: '🧼 Bleached Blood: A suspect washed his bloody clothes with bleach. Luminol glows brightly, but bleach also causes Luminol to glow (False Positive). You need to confirm it is actually blood.', th: '🧼 เลือดฟอกขาว: ผู้ต้องสงสัยซักเสื้อผ้าเปื้อนเลือดด้วยน้ำยาฟอกขาว ลูมินอลเรืองแสงจ้า แต่น้ำยาฟอกขาวก็ทำให้ลูมินอลเรืองแสงได้ (ผลบวกปลอม) คุณต้องยืนยันว่าเป็นเลือดจริง', zh: '🧼 漂白血：嫌疑人用漂白剂清洗血衣。鲁米诺发出明亮的光，但漂白剂也会导致鲁米诺发光（假阳性）。你需要确认它实际上是血。' },
        options: [
            { id: 'A', text: { en: '⏳ Wait it Out: "Bleach glow fades fast. Blood glow lasts. Wait 30 seconds."', th: '⏳ รอเวลา: "แสงฟอกขาวจางเร็ว แสงเลือดอยู่นาน รอ 30 วินาที"', zh: '⏳ 等待："漂白剂的光芒褪色很快。血的光芒持续。等30秒。"' }, consequence: { en: '🕵️ Experienced Eye: The glow fades. It was just bleach! You avoided a false accusation. Experience pays off.', th: '🕵️ สายตาผู้มีประสบการณ์: แสงจางลง มันแค่น้ำยาฟอกขาว! คุณหลีกเลี่ยงข้อกล่าวหาเท็จ ประสบการณ์คุ้มค่า', zh: '🕵️ 经验丰富的眼睛：光芒褪去。只是漂白剂！你避免了诬告。经验得到了回报。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🧪 Tetramethylbenzidine: "Use TMB test. It is less sensitive to oxidizers like bleach."', th: '🧪 Tetramethylbenzidine: "ใช้ทดสอบ TMB มันไวต่อสารออกซิไดซ์อย่างน้ำยาฟอกขาวน้อยกว่า"', zh: '🧪 四甲基联苯胺："使用TMB测试。它对漂白剂等氧化剂不太敏感。"' }, consequence: { en: '✅ Chemical Validation: TMB stays clear. No blood. Scientific confirmation.', th: '✅ การตรวจสอบเคมี: TMB ใส ไม่มีเลือด การยืนยันทางวิทยาศาสตร์', zh: '✅ 化学验证：TMB保持透明。没有血。科学确认。' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 20 } },
            { id: 'C', text: { en: '📢 Declare Blood: "It glows. It\'s blood. Arrest him. He bleached it to hide it!"', th: '📢 ประกาศเลือด: "มันเรืองแสง มันคือเลือด จับเขา เขาฟอกขาวเพื่อซ่อนมั!"', zh: '📢 宣称血液："发光了。是血。逮捕他。他漂白它是为了隐藏！"' }, consequence: { en: '⚖️ False Positive: It was just bleach on a chef\'s apron. Case dismissed due to your incompetence.', th: '⚖️ ผลบวกปลอม: มันแค่สารฟอกขาวบนผ้ากันเปื้อนเชฟ คดียกฟ้องเพราะความไร้ความสามารถของคุณ', zh: '⚖️ 假阳性：只是厨师围裙上的漂白剂。案件因你的无能而被驳回。' }, stats: { competence: -30, ethics: -20, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🧬 Try DNA anyway: "Extract DNA. Maybe some nuclei survived the bleach?"', th: '🧬 ลอง DNA ดู: "สกัด DNA บางทีนิวเคลียสอาจรอดจากสารฟอกขาว?"', zh: '🧬 无论如何尝试DNA："提取DNA。也许有些细胞核在漂白剂中幸存下来？"' }, consequence: { en: '🗑️ degraded: DNA is destroyed. You wasted a kit. But at least you tried.', th: '🗑️ เสื่อมสภาพ: DNA ถูกทำลาย คุณเสียชุดตรวจฟรี แต่อย่างน้อยก็ได้ลอง', zh: '🗑️以此降解：DNA被破坏。你浪费了一个试剂盒。但至少你尝试过。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_043',
        text: { en: '🔫 3D Printed Gun: A suspect used a 3D printed plastic gun. It exploded upon firing. You have a pile of plastic shards embedded in the wall and the victim. You need to prove it was a gun.', th: '🔫 ปืนพิมพ์ 3D: ผู้ต้องสงสัยใช้ปืนพลาสติกพิมพ์ 3D มันระเบิดเมื่อยิง คุณมีกองเศษพลาสติกฝังในกำแพงและเหยื่อ คุณต้องพิสูจน์ว่ามันคือปืน', zh: '🔫 3D打印枪：一名嫌疑人使用了3D打印的塑料枪。开火时它爆炸了。你有一堆嵌入墙壁和受害者体内的塑料碎片。你需要证明这是一把枪。' },
        options: [
            { id: 'A', text: { en: '🧩 Jigsaw Puzzle: "Collect every shard. Glue them back together to form the gun frame."', th: '🧩 จิ๊กซอว์: "เก็บทุกเศษ กาวมันกลับรวมกันเป็นโครงปืน"', zh: '🧩 拼图玩具："收集每一块碎片。把它们粘回去形成枪架。"' }, consequence: { en: '🔫 Visual Proof: You reconstruct the "Liberator" pistol model. Undeniable proof.', th: '🔫 หลักฐานภาพ: คุณสร้างโมเดลปืนพก "Liberator" ใหม่ หลักฐานที่ปฏิเสธไม่ได้', zh: '🔫 视觉证明：你重建了"解放者"手枪模型。不可否认的证据。' }, stats: { competence: 50, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '💻 File Match: "Scan the shards. Match curvature to known STL files of 3D guns."', th: '💻 จับคู่ไฟล์: "สแกนเศษ จับคู่ความโค้งกับไฟล์ STL ที่รู้จักของปืน 3D"', zh: '💻 文件匹配："扫描碎片。将曲率与已知的3D枪支STL文件进行匹配。"' }, consequence: { en: '🤖 Digital Forensic: You match the fragment geometry to a downloaded file on the suspect\'s PC. Perfect link.', th: '🤖 นิติเวชลุคดิจิทัล: คุณจับคู่เรขาคณิตชิ้นส่วนกับไฟล์ที่ดาวน์โหลดใน PC ผู้ต้องสงสัย การเชื่อมโยงสมบูรณ์', zh: '🤖 数字取证：你将碎片几何形状与嫌疑人PC上的下载文件相匹配。完美的链接。' }, stats: { competence: 50, ethics: 40, leadership: 10, innovation: 40 } },
            { id: 'C', text: { en: '🤷 "It\'s just plastic": "Could be a toy. Could be a toaster part. Too fragmented."', th: '🤷 "มันแค่พลาสติก": "อาจเป็นของเล่น อาจเป็นชิ้นส่วนเครื่องปิ้งขนมปัง แตกเกินไป"', zh: '🤷 "只是塑料"："可能是玩具。可能是烤面包机零件。太破碎了。"' }, consequence: { en: '🚪 Suspect Walks: Defense claims it was a plastic pipe. You couldn\'t prove purpose.', th: '🚪 ผู้ต้องสงสัยรอด: ฝ่ายจำเลยอ้างว่าเป็นท่อพลาสติก คุณพิสูจน์วัตถุประสงค์ไม่ได้', zh: '🚪 嫌疑人走了：辩方声称那是一根塑料管。你无法证明用途。' }, stats: { competence: -20, ethics: -10, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🔥 Melt Check: "Melt the plastic to check density. Compare to high-impact filament."', th: '🔥 เช็คการหลอม: "หลอมพลาสติกเพื่อเช็คความหนาแน่น เปรียบเทียบกับเส้นใยรับแรงกระแทกสูง"', zh: '🔥 熔体检查："熔化塑料以检查密度。与高冲击长丝进行比较。"' }, consequence: { en: '📊 Material Science: It is PLA+, common for guns. Suggestive, but not definitive.', th: '📊 วัสดุศาสตร์: มันคือ PLA+ ทั่วไปสำหรับปืน ชี้ชวนแต่ไม่ฟันธง', zh: '📊 材料科学：这是PLA+，常用于枪支。有暗示性，但非决定性。' }, stats: { competence: 30, ethics: 20, leadership: 0, innovation: 10 } }
        ]
    },
    {
        id: 'forensic_044',
        text: { en: '✨ Glitter Trace: A murder happens at a protest. The suspect is wearing normal clothes, but deep in his ear canal, you find a single speck of hexagonal, purple glitter. The victim was covered in "Protest Purple" glitter bomb.', th: '✨ ร่องรอยกากเพชร: ฆาตกรรมเกิดขึ้นที่การประท้วง ผู้ต้องสงสัยสวมชุดปกติ แต่ลึกในรูหู คุณพบกากเพชรสีม่วงหกเหลี่ยมชิ้นเดียว เหยื่อถูกปกคลุมด้วยระเบิดกากเพชร "Protest Purple"', zh: '✨ 闪粉痕迹：抗议活动中发生谋杀案。嫌疑人穿着普通衣服，但在他的耳道深处，你发现了一粒六角形的紫色闪光粉。受害者被"抗议紫"闪光弹覆盖。' },
        options: [
            { id: 'A', text: { en: '🔬 Micro-Comparison: "Glitter is unique. Compare size, shape, color, and thickness under microscope."', th: '🔬 เปรียบเทียบจุลภาค: "กากเพชรมีเอกลักษณ์ เปรียบเทียบขนาด รูปร่าง สี และความหนาใต้กล้องจุลทรรศน์"', zh: '🔬 显微比较："闪光粉是独特的。在显微镜下比较大小、形状、颜色和厚度。"' }, consequence: { en: '✅ The Sparkle Gun: Locard\'s Exchange Principle wins! The glitter matches perfectly. He was there.', th: '✅ ปืนประกาย: หลักการแลกเปลี่ยนของ Locard ชนะ! กากเพชรตรงกันเป๊ะ เขาอยู่ที่นั่น', zh: '✅ 闪光枪：洛卡德交换原理获胜！闪光粉完美匹配。他在那里。' }, stats: { competence: 50, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🤏 Too Small: "One speck? Could be contamination from the police car. Dismiss it."', th: '🤏 เล็กเกินไป: "ชิ้นเดียว? อาจปนเปื้อนจากรถตำรวจ ทิ้งไป"', zh: '🤏 太小："一粒？可能是警车的污染。驳回。"' }, consequence: { en: '❌ Evidence Ignored: You threw away the only link. He claims he was at home. He walks.', th: '❌ หลักฐานถูกเมิน: คุณทิ้งการเชื่อมโยงเดียว เขาอ้างว่าอยู่บ้าน เขาเดินจากไป', zh: '❌ 证据被忽略：你扔掉了唯一的联系。他声称他在家。他走了。' }, stats: { competence: -20, ethics: -10, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🏭 Factory Visit: "Find the manufacturer of this glitter. Get their distribution list."', th: '🏭 เยี่ยมโรงงาน: "หาผู้ผลิตกากเพชรนี้ ขอรายชื่อการจำหน่าย"', zh: '🏭 访问工厂："找到这种闪光粉的制造商。获取他们的分销名单。"' }, consequence: { en: '📦 Supply Chain: Only one shop sold this batch. The suspect used his credit card there. Boom.', th: '📦 ห่วงโซ่อุปทาน: มีร้านเดียวขายลอตนี้ ผู้ต้องสงสัยใช้บัตรเครดิตที่นั่น บูม', zh: '📦 供应链：只有一家商店出售这批货。嫌疑人在那里使用了他的信用卡。轰。' }, stats: { competence: 50, ethics: 30, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '👂 Ear Wax DNA: "forget the glitter. Test the ear wax for victim DNA (maybe splatter?)."', th: '👂 DNA ขี้หู: "ลืมกากเพชร ตรวจขี้หูหา DNA เหยื่อ (อาจกระเด็น?)"', zh: '👂 耳垢DNA："忘了闪光粉。测试耳垢是否有受害者DNA（也许是飞溅？）。"' }, consequence: { en: '🧪 Long Shot: No victim DNA found. You ignored the glitter, now you have nothing.', th: '🧪 หวังไกล: ไม่เจอ DNA เหยื่อ คุณเมินกากเพชร ตอนนี้คุณไม่เหลืออะไร', zh: '🧪 机会渺茫：未发现受害者DNA。你忽略了闪光粉，现在你一无所有。' }, stats: { competence: 0, ethics: 10, leadership: -10, innovation: 10 } }
        ]
    },
    {
        id: 'forensic_045',
        text: { en: '🍕 Stomach Alibi: Suspect says he was hiking all day. Victim died at 4 PM. Stomach contents show largely undigested pepperoni pizza. Police know the victim bought pizza at 3:30 PM.', th: '🍕 ข้อแก้ตัวในกระเพาะ: ผู้ต้องสงสัยบอกว่าเดินป่าทั้งวัน เหยื่อตาย 16:00 น. เนื้อหาในกระเพาะโชว์พิซซ่าเปปเปอโรนีที่ยังไม่ค่อยย่อย ตำรวจรู้ว่าเหยื่อซื้อพิซซ่า 15:30 น.', zh: '🍕 胃不在场证明：嫌疑人说他整天都在徒步旅行。受害者下午4点死亡。胃内容物显示大部分未消化的意大利以此香肠披萨。警方知道受害者在下午3:30买的比萨。' },
        options: [
            { id: 'A', text: { en: '✅ Corroborate Time: "Digestion implies death <1 hour after eating. Fits 4 PM. Suspect needs a better alibi."', th: '✅ ยืนยันเวลา: "การย่อยชี้ว่าตาย <1 ชม. หลังกิน ตรงกับ 16:00 น. ผู้ต้องสงสัยต้องมีข้อแก้ตัวที่ดีกว่านี้"', zh: '✅ 确证时间："消化意味着进食后不到1小时死亡。符合下午4点。嫌疑人需要更好的不在场证明。"' }, consequence: { en: '🕵️ Timeline Locked: Science anchors the timeline. Suspect\'s hiking story falls apart. He confesses.', th: '🕵️ ไทม์ไลน์ล็อก: วิทยาศาสตร์ยึดเวลา เรื่องเดินป่าของผู้ต้องสงสัยพังทลาย เขาสารภาพ', zh: '🕵️ 时间线锁定：科学锚定了时间线。嫌疑人的徒步旅行故事崩溃了。他招供了。' }, stats: { competence: 50, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🤢 "Stress Digestion": "Stress stops digestion. Maybe he ate at noon and was scared? Timeline could be wrong."', th: '🤢 "การย่อยเครียด": "ความเครียดหยุดการย่อย บางทีเขากินตอนเที่ยงและกลัว? ไทม์ไลน์อาจผิด"', zh: '🤢 "压力消化"："压力会停止消化。也许他中午吃了，很害怕？时间线可能是错的。"' }, consequence: { en: '📉 Muddy Waters: You doubt your own evidence. Defense uses your quote to create reasonable doubt. Acquitted.', th: '📉 น้ำขุ่น: คุณสงสัยหลักฐานตัวเอง ฝ่ายจำเลยใช้คำพูดคุณสร้างความสงสัยตามสมควร ยกฟ้อง', zh: '📉 浑水：你怀疑自己的证据。辩方引用你的话来制造合理的怀疑。无罪释放。' }, stats: { competence: -20, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🔬 Analyze Toppings: "Test the pepperoni brand. Maybe it\'s not the pizza places\'s brand?"', th: '🔬 วิเคราะห์หน้า: "ทดสอบยี่ห้อเปปเปอโรนี บางทีอาจไม่ใช่ยี่ห้อของร้านพิซซ่า?"', zh: '🔬 分析配料："测试意大利以此香肠品牌。也许不是披萨店的品牌？"' }, consequence: { en: '🍕 Brand Match: It confirms the source. Adds detail, but time was the real factor.', th: '🍕 จับคู่ยี่ห้อ: ยืนยันแหล่งที่มา เพิ่มรายละเอียด แต่เวลาคือปัจจัยจริง', zh: '🍕 品牌匹配：确认来源。增加了细节，但时间是真正的因素。' }, stats: { competence: 30, ethics: 20, leadership: 0, innovation: 20 } },
            { id: 'D', text: { en: '🤷 Ignore Stomach: "Stomach content analysis is unreliable. Rely on body temp (Algor Mortis)."', th: '🤷 เมินกระเพาะ: "วิเคราะห์เนื้อหากระเพาะเชื่อถือไม่ได้ พึ่งอุณหภูมิร่างกาย (Algor Mortis)"', zh: '🤷 忽略胃："胃内容物分析不可靠。依靠体温（尸冷）。"' }, consequence: { en: '🌡️ Body Temp Vary: The body was in the sun. Temp is wrong. You threw away the best clock (the pizza).', th: '🌡️ อุณหภูมิร่างกายแปรปรวน: ศพอยู่กลางแดด อุณหภูมิผิด คุณทิ้งนาฬิกาที่ดีที่สุด (พิซซ่า)', zh: '🌡️ 体温变化：尸体在阳光下。温度错了。你扔掉了最好的时钟（披萨）。' }, stats: { competence: -10, ethics: 0, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'forensic_046',
        text: { en: '🧬 Mitochondrial Eve: You find skeletal remains. Nuclear DNA is destroyed. Only Mitochondrial DNA (mtDNA) remains. It matches the suspect... and his 5 brothers, his mother, and his grandmother. Defense moves to dismiss.', th: '🧬 Mitochondrial Eve: คุณพบโครงกระดูก DNA นิวเคลียสถูกทำลาย เหลือแค่ Mitochondrial DNA (mtDNA) มันตรงกับผู้ต้องสงสัย... และพี่ชาย 5 คน แม่ และยายของเขา ฝ่ายจำเลยขอให้ยกฟ้อง', zh: '🧬 线粒体夏娃：你发现了骸骨。核DNA被破坏。只剩下线粒体DNA（mtDNA）。它与嫌疑人匹配……还有他的5个兄弟、他的母亲和他的祖母。辩方提议驳回。' },
        options: [
            { id: 'A', text: { en: '📊 Statistical Context: "Present the exclusion ratio. While not unique, it excludes 99.9% of the population."', th: '📊 บริบททางสถิติ: "นำเสนออัตราการคัดออก แม้ไม่ซ้ำกัน แต่คัดออก 99.9% ของประชากร"', zh: '📊 统计背景："展示排除率。虽然不是唯一的，但它排除了99.9%的人口。"' }, consequence: { en: '👨‍⚖️ Strong Case: The jury understands "It\'s one of this family". Combined with other clues, he is convicted.', th: '👨‍⚖️ คดีแข็งแกร่ง: ลูกขุนเข้าใจ "คนในครอบครัวนี้" รวมกับเบาะแสอื่น เขาถูกตัดสินลงโทษ', zh: '👨‍⚖️ 强有力的案件：陪审团明白"是这个家庭的一员"。结合其他线索，他被定罪。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🤷 Admit Defeat: "mtDNA is weak. Without Nuclear DNA, I can\'t point to him. I withdraw the match."', th: '🤷 ยอมแพ้: "mtDNA อ่อนแอ ปราศจาก DNA นิวเคลียส ฉันชี้ตัวเขาไม่ได้ ฉันถอนการจับคู่"', zh: '🤷 承认失败："mtDNA很弱。没有核DNA，我无法指向他。我撤回匹配。"' }, consequence: { en: '🚪 Case Closed: The killer walks. You were too cautious. mtDNA is valid evidence if explained right.', th: '🚪 ปิดคดี: ฆาตกรเดินจากไป คุณระวังเกินไป mtDNA เป็นหลักฐานที่ใช้ได้ถ้าอธิบายถูก', zh: '🚪 结案：凶手走了。你太谨慎了。如果解释得当，mtDNA是有效证据。' }, stats: { competence: -20, ethics: 0, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: '🤥 "It\'s a Match": "Don\'t explain the maternal inheritance. Just say \'DNA Match\'. Let the lawyer figure it out."', th: '🤥 "มันตรงกัน": "ไม่อธิบายการถ่ายทอดทางแม่ แค่บอก \'DNA ตรงกัน\' ให้ทนายหาเอง"', zh: '🤥 "是匹配的"："不要解释母系遗传。只说\'DNA匹配\'。让律师去弄清楚。"' }, consequence: { en: '⚖️ Misleading: Defense destroys you on cross-examination. "So it could be his grandma?" You look like a fraud.', th: '⚖️ ทำให้เข้าใจผิด: ฝ่ายจำเลยทำลายคุณตอนซักค้าน "งั้นอาจเป็นยายของเขา?" คุณดูเหมือนคนโกง', zh: '⚖️ 误导：辩方在盘问中摧毁了你。"所以可能是他奶奶？"你看起来像个骗子。' }, stats: { competence: -10, ethics: -40, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🦴 Y-STR Test: "Test the Y-Chromosome STRs. It narrows it to the male line only. Excluding mom/sisters."', th: '🦴 ทดสอบ Y-STR: "ทดสอบ STR ของโครโมโซม Y มันบีบให้เหลือแค่สายผู้ชาย ตัดแม่/พี่สาวออก"', zh: '🦴 Y-STR测试："测试Y染色体STR。它将其缩小到男性系。排除妈妈/姐妹。"' }, consequence: { en: '💡 Better Focus: Good thinking! Now it\'s just him or his brothers. Police find the brother\'s alibis. Got him.', th: '💡 โฟกัสดีขึ้น: คิดดี! ตอนนี้เหลือแค่เขาหรือพี่ชาย ตำรวจหาข้อแก้ตัวพี่ชายได้ จับได้แล้ว', zh: '💡 更好的焦点：好主意！现在只有他或他的兄弟。警方发现了兄弟的不在场证明。抓住他了。' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 30 } }
        ]
    },
    {
        id: 'forensic_047',
        text: { en: '🚗 Tire Tread Void: A hit-and-run leaves skid marks. The tread pattern is weird. It matches a standard tire... but with a manufacturing defect that only occurred in one batch of 500 tires.', th: '🚗 รอยยางว่างเปล่า: การชนแล้วหนีทิ้งรอยเบรก รูปแบบดอกยางแปลก มันตรงกับยางมาตรฐาน... แต่มีข้อบกพร่องการผลิตที่เกิดในลอตเดียว 500 เส้น', zh: '🚗 轮胎胎面间隙：肇事逃逸留下了刹车痕。胎面花纹很奇怪。它与标准轮胎匹配......但有一个制造缺陷，只出现在一批500个轮胎中。' },
        options: [
            { id: 'A', text: { en: '🏭 Recall Data: "Subpoena the tire company for the list of buyers of that defect batch."', th: '🏭 ข้อมูลเรียกคืน: "หมายศาลบริษัทยางขอรายชื่อผู้ซื้อลอตมีตำหนินั้น"', zh: '🏭 召回数据："传唤轮胎公司索取该缺陷批次的买家名单。"' }, consequence: { en: '📝 The List: You get 500 names. One is in this city even. It is the Mayor\'s son. Oh boy.', th: '📝 รายชื่อ: คุณได้ 500 ชื่อ หนึ่งคนอยู่ในเมืองนี้ด้วยซ้ำ คือลูกชายนายกเทศมนตรี โอ้โห', zh: '📝 名单：你得到了500个名字。甚至有一个在这个城市。是市长的儿子。哦，天哪。' }, stats: { competence: 50, ethics: 40, leadership: 10, innovation: 20 } },
            { id: 'B', text: { en: '📏 Measure Width: "Pattern doesn\'t matter. Just get the tire width. Narrow it to car model."', th: '📏 วัดความกว้าง: "รูปแบบไม่สำคัญ แค่เอาความกว้างยาง บีบให้เหลือรุ่นรถ"', zh: '📏 测量宽度："花纹并不重要。只获取它胎度。缩小到车型。"' }, consequence: { en: '🚗 Too Broad: Width matches 50 car models. Thousands of suspects. You missed the specific clue.', th: '🚗 กว้างไป: ความกว้างตรงกับรถ 50 รุ่น ผู้ต้องสงสัยเป็นพัน คุณพลาดเบาะแสเฉพาะเจาะจง', zh: '🚗 太宽泛：宽度匹配50种车型。数千名嫌疑人。你错过了特定线索。' }, stats: { competence: 0, ethics: 10, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🤷 "Standard Tire": "Defects aren\'t reliable features. Just report \'Michelin Tire\'. Don\'t overreach."', th: '🤷 "ยางมาตรฐาน": "ตำหนิไม่ใช่คุณสมบัติที่เชื่อถือได้ รายงาน \'ยางมิชลิน\' อย่าทำเกินตัว"', zh: '🤷 "标准轮胎"："缺陷不是可靠的特征。只报告\'米其林轮胎\'。不要过度。"' }, consequence: { en: '📉 Dead End: Police stop every car with Michelin tires. It\'s a PR disaster. Case cold.', th: '📉 ทางตัน: ตำรวจหยุดรถทุกคันที่ใช้ยางมิชลิน หายนะ PR คดีเงียบ', zh: '📉 死胡同：警察拦下每辆装有米其林轮胎的汽车。这是一场公关灾难。案件变冷。' }, stats: { competence: -20, ethics: 0, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '🔬 Chemical Rub: "Analyze the rubber compound left on the road. Maybe this batch had extra sulfur?"', th: '🔬 การถูเคมี: "วิเคราะห์ส่วนผสมยางที่เหลือบนถนน บางทีลอตนี้อาจมีกำมะถันพิเศษ?"', zh: '🔬 化学研磨："分析留在路上的橡胶化合物。也许这一批有额外的硫？"' }, consequence: { en: '⚗️ Confirmation: Chemical analysis confirms it\'s the defect batch. Double proof. Solid work.', th: '⚗️ การยืนยัน: การวิเคราะห์เคมียืนยันว่าเป็นลอตมีตำหนิ พิสูจน์สองชั้น งานแน่น', zh: '⚗️ 确认：化学分析证实是缺陷批次。双重证明。扎实的工作。' }, stats: { competence: 40, ethics: 30, leadership: 10, innovation: 30 } }
        ]
    },
    {
        id: 'forensic_048',
        text: { en: '🌳 Ancestry Trap: A cold case from 1980. You have killer DNA. No police database match. You want to upload it to a public ancestry tree website to find his simplified 3rd cousins and build a family tree.', th: '🌳 กับดักบรรพบุรุษ: คดีเย็นจากปี 1980 คุณมี DNA ฆาตกร ไม่ตรงฐานข้อมูลตำรวจ คุณต้องการอัปโหลดไปยังเว็บไซต์ลำดับวงศ์ตระกูลสาธารณะเพื่อหาลูกพี่ลูกน้องรุ่นที่ 3 และสร้างแผนผังครอบครัว', zh: '🌳 祖先陷阱：1980年的一起悬案。你有杀手DNA。警方数据库不匹配。你想把它上传到一个公共祖先树网站，找到他的远房表亲并建立家谱。' },
        options: [
            { id: 'A', text: { en: '🕵️ Do It Lying: "Upload as a fake user searching for \'missing dad\'. Don\'t tell the site it\'s police work."', th: '🕵️ โกหกทำ: "อัปโหลดในนามผู้ใช้ปลอมค้นหา \'พ่อที่หายไป\' อย่าบอกเว็บว่าเป็นงานตำรวจ"', zh: '🕵️ 撒谎去做："作为搜索\'失踪父亲\'的假用户上传。不要告诉网站这是警察的工作。"' }, consequence: { en: '⚖️ Grey Area Win: You find him! But privacy advocates sue the department. The precedent is set.', th: '⚖️ ชัยชนะสีเทา: คุณเจอเขา! แต่นักสิทธิส่วนบุคคลฟ้องแผนก บรรทัดฐานถูกตั้งแล้ว', zh: '⚖️ 灰色地带胜利：你找到了他！但隐私倡导者起诉该部门。先例已定。' }, stats: { competence: 50, ethics: -20, leadership: 10, innovation: 50 } },
            { id: 'B', text: { en: '🛑 Privacy First: "We cannot violate the privacy of distant relatives. Wait for a direct match law."', th: '🛑 ความเป็นส่วนตัวต้องมาก่อน: "เราละเมิดความเป็นส่วนตัวของญาติห่างๆ ไม่ได้ รอกฎหมายจับคู่โดยตรง"', zh: '🛑 隐私第一："我们不能侵犯远房亲戚的隐私。等待直接匹配法。"' }, consequence: { en: '👴 Killer Dies: The killer dies of old age next year. You respected privacy, but justice failed.', th: '👴 ฆาตกรตาย: ฆาตกรตายด้วยโรคชราปีหน้า คุณเคารพความเป็นส่วนตัว แต่ความยุติธรรมล้มเหลว', zh: '👴 凶手死亡：凶手明年死于年老。你尊重隐私，但正义失败了。' }, stats: { competence: -10, ethics: 40, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '📜 Get a Warrant: "Force the ancestry company to cooperate. Make it official and legal."', th: '📜 ขอหมายศาล: "บังคับบริษัทบรรพบุรุษให้ร่วมมือ ทำให้เป็นทางการและถูกกฎหมาย"', zh: '📜以此获得搜查令："迫使祖先公司合作。使其正式和合法。"' }, consequence: { en: '🧱 Corporate Wall: They fight it in court for 5 years. You get nothing. Technology moves faster than law.', th: '🧱 กำแพงองค์กร: พวกเขาสู้ในศาล 5 ปี คุณไม่ได้อะไรเลย เทคโนโลยีไปไวกว่ากฎหมาย', zh: '🧱 企业墙：他们在法庭上抗争了5年。你一无所获。技术发展快于法律。' }, stats: { competence: 20, ethics: 30, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '🎣 The Sting: "Collect DNA from the cousin\'s trash to verify the link first. Build the tree externally."', th: '🎣 การล่อซื้อ: "เก็บ DNA จากขยะของลูกพี่ลูกน้องเพื่อยืนยันความเชื่อมโยงก่อน สร้างแผนผังภายนอก"', zh: '🎣 诱捕："先从表亲的垃圾中收集DNA以验证联系。在外部建立树。"' }, consequence: { en: '✅ Loophole exploiter: It\'s "discarded DNA". Legal. You map the tree and arrest the Golden State Killer.', th: '✅ ผู้ใช้ช่องโหว่: มันคือ "DNA ที่ถูกทิ้ง" ถูกกฎหมาย คุณทำแผนผังและจับนักฆ่า Golden State', zh: '✅ 漏洞利用：这是"废弃的DNA"。合法。你绘制了树图并逮捕了金州杀手。' }, stats: { competence: 50, ethics: 20, leadership: 30, innovation: 40 } }
        ]
    },
    {
        id: 'forensic_049',
        text: { en: '⭕ The Ghost Object: A room is covered in blood spatter spray (arterial gush). But in the center of the wall, there is a perfect clean circle void. The killer was standing there holding... something.', th: '⭕ วัตถุผี: ห้องปกคลุมด้วยละอองเลือด (เลือดพุ่งจากหลอดเลือดแดง) แต่ตรงกลางผนัง มีวงกลมสะอาดเป๊ะ นักฆ่ายืนตรงนั้นถือ... บางอย่าง', zh: '⭕ 鬼魂物体：房间里布满了血迹飞溅（动脉涌出）。但在墙的中央，有一个完美的干净圆形空隙。凶手站在那里拿着......东西。' },
        options: [
            { id: 'A', text: { en: '🛡️ Shield Theory: "He was holding a round shield? Maybe a pot lid? Search for round objects!"', th: '🛡️ ทฤษฎีโล่: "เขาถือโล่กลม? หรือฝาหม้อ? ค้นหาวัตถุทรงกลม!"', zh: '🛡️ 盾牌理论："他拿着圆盾？也许是锅盖？搜索圆形物体！"' }, consequence: { en: '🍳 Weapon Found: You find a bloody paella pan in the dishwasher. Matches the void perfectly.', th: '🍳 พบอาวุธ: คุณเจอกระทะปาเอญ่าเปื้อนเลือดในเครื่องล้างจาน ตรงกับช่องว่างเป๊ะ', zh: '🍳 发现武器：你在洗碗机里发现了一个血迹斑斑的海鲜饭锅。与空隙完美匹配。' }, stats: { competence: 50, ethics: 40, leadership: 20, innovation: 30 } },
            { id: 'B', text: { en: '👕 "Missing Person": "Maybe someone else was standing there? A second victim?"', th: '👕 "คนหาย": "บางทีคนอื่นยืนตรงนั้น? เหยื่อคนที่สอง?"', zh: '👕 "失踪人员"："也许有别人站在那里？第二个受害者？"' }, consequence: { en: '🤷 Confusion: Search teams waste time looking for a body that doesn\'t exist. It was just an object.', th: '🤷 สับสน: ทีมค้นหาเสียเวลาหาศพที่ไม่มีจริง มันเป็นแค่วัตถุ', zh: '🤷 困惑：搜救队浪费时间去寻找一具不存在的尸体。那只是一个物体。' }, stats: { competence: -10, ethics: 0, leadership: -10, innovation: 0 } },
            { id: 'C', text: { en: '🖼️ The Painting: "Was a painting on the wall removed? Check the back of the wall art."', th: '🖼️ ภาพวาด: "ภาพวาดบนผนังถูกเอาออกไหม? เช็คดานหลังงานศิลปะ"', zh: '🖼️ 画："墙上的画被取下来了吗？检查艺术品的背面。"' }, consequence: { en: '👀 Logical Guess: Good guess, but the void isn\'t square. Geometry matters!', th: '👀 เดาอย่างมีตรรกะ: เดาดี แต่วช่องว่างไม่ใช่สี่เหลี่ยม เรขาคณิตสำคัญ!', zh: '👀 逻辑猜测：猜得不错，但空隙不是方形的。几何很重要！' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '🥋 Killer\'s Body: "The killer blocked the spray. He is covered in blood. Check hospitals for covered men."', th: '🥋 ร่างนักฆ่า: "นักฆ่าบังละออง เขาเปื้อนเลือด เช็คโรงพยาบาลหาคนที่เปื้อน"', zh: '🥋 凶手的身体："凶手挡住了喷雾。他浑身是血。检查医院是否有被覆盖的人。"' }, consequence: { en: '🚗 Manhunt: Police find a guy soaked in blood at an ER. The void was his shoulder/head. Nice deduction.', th: '🚗 ล่ามนุษย์: ตำรวจเจอชายชุ่มเลือดที่ห้องฉุกเฉิน ช่องว่างคือไหล่/หัวของเขา การอนุมานที่ดี', zh: '🚗 搜捕：警方在急诊室发现了一个浑身是血的家伙。空隙是他的肩膀/头。很好的推论。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 10 } }
        ]
    },
    {
        id: 'forensic_050',
        text: { en: '💎 The Perfect Crime: A billionaire is dead. No DNA. No prints. No forced entry. Toxicology negative. Heart failure listed. But you see a tiny red dot under his eyelid.', th: '💎 อาชญากรรมสมบูรณ์แบบ: มหาเศรษฐีตาย ไม่มี DNA ไม่มีลายนิ้วมือ ไม่มีการงัดแงะ พิษวิทยาเป็นลบ ระบุหัวใจล้มเหลว แต่คุณเห็นจุดแดงเล็กๆ ใต้เปลือกตา', zh: '💎 完美犯罪：一位亿万富翁死了。没有DNA。没有指纹。没有强行进入。毒理学阴性。列为心力衰竭。但你在他的眼睑下看到了一个小红点。' },
        options: [
            { id: 'A', text: { en: '💉 Micro-Injection: "It\'s a needle stick. Injection of Potassium Chloride? It mimics heart attacks."', th: '💉 การฉีดจุลภาค: "มันคือรอยเข็ม ฉีดโพแทสเซียมคลอไรด์? มันเลียนแบบหัวใจวาย"', zh: '💉 微量注射："这是一根针刺。注射氯化钾？它模仿心脏病发作。"' }, consequence: { en: '🩸 Difficult Proof: Potassium is natural in the body. You test the vitreous fluid in the eye. Elevated K+ confirmed! You solved the impossible.', th: '🩸 บทพิสูจน์ยาก: โพแทสเซียมเป็นธรรมชาติในร่างกาย คุณตรวจของเหลวในตา (vitreous) ค่า K+ สูงยืนยัน! คุณไขคดีที่เป็นไปไม่ได้', zh: '🩸 困难的证明：钾在体内是天然的。你测试眼球中的玻璃体液。确认K+升高！你解开了不可能的谜题。' }, stats: { competence: 50, ethics: 50, leadership: 30, innovation: 50 } },
            { id: 'B', text: { en: '🕷️ Insect Bite: "Just a spider bite. Unrelated. He had a heart attack."', th: '🕷️ แมลงกัด: "แค่แมงมุมกัด ไม่เกี่ยว เขาหัวใจวาย"', zh: '🕷️ 虫咬："只是蜘蛛咬伤。无关。他心脏病发作了。"' }, consequence: { en: '💀 Killer Retires: The killer inherits billions. You missed the only clue. You retire in shame.', th: '💀 นักฆ่าเกษียณ: นักฆ่ารับมรดกพันล้าน คุณพลาดเบาะแสเดียว คุณเกษียณด้วยความอับอาย', zh: '💀 凶手退休：凶手继承了数十亿。你错过了唯一的线索。你羞愧地退休了。' }, stats: { competence: -50, ethics: -20, leadership: -40, innovation: -20 } },
            { id: 'C', text: { en: '👁️ Petechial Hemorrhage: "It\'s a burst vessel from strangulation! Look for neck bruising!"', th: '👁️ จุดเลือดออก: "มันคือเส้นเลือดแตกจากการถูกบีบคอ! หาข้ำที่คอ!"', zh: '👁️ 瘀点出血："这是勒死导致的血管破裂！寻找颈部瘀伤！"' }, consequence: { en: '🧣 Ghost Choking: No neck marks. You are seeing things. But at least you are suspicious.', th: '🧣 ผีบีบคอ: ไม่มีรอยคอ คุณตาฝาด แต่อย่างน้อยคุณก็สงสัย', zh: '🧣 鬼魂窒息：没有颈部痕迹。你出现幻觉了。但至少你是怀疑的。' }, stats: { competence: 0, ethics: 10, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '🔪 Full Autopsy: "I don\'t know. Cut everything open. Brain, heart, lungs."', th: '🔪 ชันสูตรเต็มรูปแบบ: "ฉันไม่รู้ ผ่าทุกอย่าง สมอง หัวใจ ปอด"', zh: '🔪 全面尸检："我不知道。切开所有东西。大脑，心脏，肺。"' }, consequence: { en: '🔄 Standard Procedure: You find nothing obvious. The "Unknown Cause" stands. The dot was the key.', th: '🔄 ขั้นตอนมาตรฐาน: คุณไม่เจออะไรชัดเจน "สาเหตุไม่ทราบ" ยังคงอยู่ จุดนั้นคือกุญแจ', zh: '🔄 标准程序：你没有发现明显的通过。 "原因不明"成立。那个点是关键。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } }
        ]
    }
];
