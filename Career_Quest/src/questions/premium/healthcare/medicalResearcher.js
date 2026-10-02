
export const medicalResearcherQuestions = [
    {
        id: 'med_researcher_001',
        text: {
            en: '🧪 The Data Anomaly: You are on the verge of curing a rare disease. But 5% of your data points show severe side effects in mice. Removing these "outliers" would make the paper perfect and guarantee a $10M grant. Keeping them might kill the project.',
            th: '🧪 ความผิดปกติของข้อมูล: คุณกำลังจะรักษาโรคหายากได้ แต่ 5% ของข้อมูลจุดแสดงผลข้างเคียงรุนแรงในหนู การลบ "ค่าผิดปกติ" เหล่านี้จะทำให้งานวิจัยสมบูรณ์แบบและการันตีเงินทุน $10M การเก็บไว้อาจทำให้โครงการถูกยุบ',
            zh: '🧪 数据异常：你即将治愈一种罕见疾病。但5%的数据点显示小鼠有严重的副作用。删除这些"异常值"会让论文完美并保证获得1000万美元的资助。保留它们可能会扼杀这个项目。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧹 Clean the Data: "Remove the outliers. It\'s probably just measurement error. We can\'t let this cure die because of a few bad mice."',
                    th: '🧹 ทำความสะอาดข้อมูล: "ลบค่าผิดปกติออก น่าจะเป็นแค่ความผิดพลาดในการวัด เราปล่อยให้ยานี้ตายไปเพราะหนูไม่กี่ตัวไม่ได้"',
                    zh: '🧹 清理数据："删除异常值。这可能只是测量误差。我们不能因为几只老鼠就让这种疗法夭折。"'
                },
                consequence: {
                    en: '💰 Grant Won, Soul Lost. You get the money and fame. But 3 years later, human trials show the same side effects. Patients suffer. You live with the guilt forever.',
                    th: '💰 ได้เงินทุน แต่เสียจิตวิญญาณ คุณได้เงินและชื่อเสียง แต่ 3 ปีต่อมา การทดลองในมนุษย์แสดงผลข้างเคียงเดียวกัน ผู้ป่วยทนทุกข์ คุณอยู่กับความรู้สึกผิดตลอดไป',
                    zh: '💰 赢得资助，失去灵魂。你得到了金钱和名誉。但3年后，人体试验显示了同样的副作用。病人受苦。你永远生活在内疚中。'
                },
                stats: { competence: 50, ethics: -50, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Publish Everything: "Science is truth. Publish the side effects prominently. We might lose the grant, but we won\'t hurt anyone."',
                    th: '🛡️ ตีพิมพ์ทุกอย่าง: "วิทยาศาสตร์คือความจริง ตีพิมพ์ผลข้างเคียงให้เด่นชัด เราอาจเสียเงินทุน แต่เราจะไม่ทำร้ายใคร"',
                    zh: '🛡️ 发布一切："科学就是真理。显著地发布副作用。我们可能会失去资助，但我们不会伤害任何人。"'
                },
                consequence: {
                    en: '📉 Funding Cut, Respect Gained. The grant is denied. The lab downsizes. But the scientific community hails your integrity. You eventually find a safer workaround.',
                    th: '📉 เงินทุนถูกตัด ได้รับความเคารพ เงินทุนถูกปฏิเสธ ห้องแล็บลดขนาด แต่ชุมชนวิทยาศาสตร์ยกย่องความซื่อสัตย์ของคุณ ในที่สุดคุณก็หาวิธีที่ปลอดภัยกว่าได้',
                    zh: '📉 资金削减，赢得尊重。资助被拒绝。实验室缩小规模。但科学界称赞你的正直。并没有最终找到更安全的变通方法。'
                },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Delay & Re-test: "Do not publish yet. Spend 6 months re-testing those specific cases. We risk being scooped by a rival lab."',
                    th: '🕵️ ชะลอและทดสอบใหม่: "ยังไม่ตีพิมพ์ ใช้เวลา 6 เดือนทดสอบเคสเหล่านั้นใหม่ เราเสี่ยงที่จะโดนแล็บคู่แข่งตัดหน้า"',
                    zh: '🕵️ 推迟并重新测试："暂时不要发布。花6个月时间重新测试这些特定病例。我们冒着被竞争对手实验室抢先的风险。"'
                },
                consequence: {
                    en: '🐢 Slow but Sure. The rival lab publishes first but their drug fails later. You publish the correct, safe version a year later. You win the long game.',
                    th: '🐢 ช้าแต่ชัวร์ แล็บคู่แข่งตีพิมพ์ก่อนแต่ยาพวกเขาล้มเหลวทีหลัง คุณตีพิมพ์เวอร์ชันที่ถูกต้องและปลอดภัยในอีกหนึ่งปีให้หลัง คุณชนะในระยะยาว',
                    zh: '🐢 缓慢但稳妥。竞争对手实验室先发布，但他们的药物后来失败了。一年后你发布了正确、安全的版本。你赢得了长远的胜利。'
                },
                stats: { competence: 50, ethics: 50, leadership: 20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🤡 Blame the Student: "It was probably the intern\'s fault. Fire the intern, discard that data batch, and proceed."',
                    th: '🤡 โทษนักศึกษาฝึกงาน: "น่าจะเป็นความผิดของเด็กฝึกงาน ไล่ออกซะ ทิ้งข้อมูลชุดนั้น แล้วไปต่อ"',
                    zh: '🤡 怪罪学生："这可能是实习生的错。解雇实习生，丢弃那批数据，继续进行。"'
                },
                consequence: {
                    en: '☠️ Toxic Culture. The team lives in fear. They start hiding mistakes from you. A major explosion in the lab occurs due to unreported equipment failure.',
                    th: '☠️ วัฒนธรรมเป็นพิษ ทีมอยู่ด้วยความกลัว พวกเขาเริ่มซ่อนความผิดพลาดจากคุณ เกิดการระเบิดครั้งใหญ่ในแล็บเพราะอุปกรณ์เสียที่ไม่มีใครกล้ารายงาน',
                    zh: '☠️ 有毒文化。团队生活在恐惧中。他们开始向你隐瞒错误。由于未报告的设备故障，实验室发生了大爆炸。'
                },
                stats: { competence: 20, ethics: -40, leadership: -40, innovation: 10 }
            }
        ]
    },
    {
        id: 'med_researcher_002',
        text: {
            en: '💉 The Big Pharma Keep: A massive pharmaceutical company offers to fund your entire lab for 5 years. The catch? They own all the IP and can "veto" any publication they deem "commercially damaging."',
            th: '💉 ข้อเสนอยักษ์ใหญ่ยา: บริษัทยาขนาดใหญ่เสนอให้ทุนแล็บของคุณทั้งงาน 5 ปี ข้อแม้? พวกเขาเป็นเจ้าของทรัพย์สินทางปัญญาทั้งหมดและสามารถ "ยับยั้ง" การตีพิมพ์ใดๆ ที่พวกเขาเห็นว่า "เสียหายต่อการค้า"',
            zh: '💉 大型制药公司的保留：一家大型制药公司提出为你整个实验室提供5年的资金。条件？他们拥有所有知识产权，并且可以"否决"任何他们认为"在商业上有害"的出版物。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🤝 Take the Money: "We need the resources. I\'ll just research things they like. Science requires gold."', th: '🤝 รับเงิน: "เราต้องการทรัพยากร ผมจะวิจัยแค่สิ่งที่พวกเขาชอบ วิทยาศาสตร์ต้องใช้ทองคำ"', zh: '🤝 拿钱："我们需要资源。我就研究他们喜欢的东西。科学需要资金。"' },
                consequence: { en: '🏗️ Golden Cage. You have the best equipment in the world. But you are a corporate puppet. You discover a cure that is too cheap to be profitable, and they bury it.', th: '🏗️ กรงทอง คุณมีอุปกรณ์ที่ดีที่สุดในโลก แต่คุณเป็นหุ่นเชิดของบริษัท คุณค้นพบวิธีรักษาที่ถูกเกินกว่าจะทำกำไร และพวกเขาก็ฝังมัน', zh: '🏗️ 金笼子。你拥有世界上最好的设备。但你是企业的傀儡。你发现了一种因为太便宜而无法获利的疗法，他们把它掩盖了。' },
                stats: { competence: 50, ethics: -20, leadership: 30, innovation: 40 }
            },
            {
                id: 'B',
                text: { en: '🚫 Refund & Resist: "We serve humanity, not shareholders. Reject the deal. application for government grants instead."', th: '🚫 ปฏิเสธและต่อต้าน: "เรารับใช้มนุษยชาติ ไม่ใช่ผู้ถือหุ้น ปฏิเสธดีล สมัครขอทุนรัฐบาลแทน"', zh: '🚫 拒绝并抵抗："我们服务于人类，而不是股东。拒绝这笔交易。申请政府资助代替。"' },
                consequence: { en: '📉 Struggle Street. You spend 50% of your time writing grant proposals. Equipment is old. But your discoveries are open-source and save millions of lives globally.', th: '📉 ถนนสายลำบาก คุณใช้เวลา 50% เขียนขอทุน อุปกรณ์เก่า แต่การค้นพบของคุณเป็นโอเพ่นซอร์สและช่วยชีวิตคนนับล้านทั่วโลก', zh: '📉 奋斗之路。你花50%的时间写资助申请。设备陈旧。但你的发现是开源的，在全球拯救了数百万人的生命。' },
                stats: { competence: 30, ethics: 60, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: { en: '⚖️ Negotiate Hard: "Accept funding only for specific projects. Demand a \'Public Health Override\' clause for essential cures."', th: '⚖️ เจรจาหนัก: "รับทุนเฉพาะโครงการเจาะจง เรียกร้องข้อสัญญา \'Public Health Override\' สำหรับการรักษาที่จำเป็น"', zh: '⚖️ 强硬谈判："只接受特定项目的资助。要求对基本疗法有\'公共卫生覆盖\'条款。"' },
                consequence: { en: '🧠 Shark Move. They agree, reluctantly. You walk a tightrope, but you maintain some independence while using their cash. Stressful but effective.', th: '🧠 เดินเกมแบบฉลาม พวกเขาตกลงอย่างไม่เต็มใจ คุณเดินบนเส้นด้าย แต่ยังคงความเป็นอิสระได้บ้างโดยใช้เงินพวกเขา เครียดแต่ได้ผล', zh: '🧠 鲨鱼行动。他们不情愿地同意了。你如履薄冰，但你在使用他们现金的同时保持了一定的独立性。压力大但有效。' },
                stats: { competence: 45, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'D',
                text: { en: '🕵️ Double Agent: "Take the money, sign the NDA, but leak critical findings to the press anonymously."', th: '🕵️ สายลับสองหน้า: "รับเงิน เซ็น NDA แต่แอบปล่อยผลวิจัยสำคัญให้นักข่าวแบบนิรนาม"', zh: '🕵️ 双面间谍："拿钱，签保密协议，但匿名向媒体泄露关键发现。"' },
                consequence: { en: '🔥 Lawsuit Hell. You get caught. They sue you for breach of contract. Your career ends in a courtroom, bankrupt and discredited.', th: '🔥 นรกคดีความ คุณโดนจับได้ เขาฟ้องคุณฐานผิดสัญญา อาชีพคุณจบลงในศาล ล้มละลายและเสียเครดิต', zh: '🔥 诉讼地狱。你被抓住了。他们起诉你违约。你的职业生涯在法庭上结束，破产且声名扫地。' },
                stats: { competence: 30, ethics: -10, leadership: -20, innovation: 20 }
            }
        ]
    },
    {
        id: 'med_researcher_003',
        text: {
            en: '🐒 The Animal Dilemma: Your new drug shows incredible promise for Alzheimer\'s, but it requires testing on primates (monkeys). The protocol is painful for them. Activists are protesting outside your home.',
            th: '🐒 ปัญหาสัตว์ทดลอง: ยาใหม่ของคุณมีความหวังสูงมากสำหรับอัลไซเมอร์ แต่ต้องทดสอบในสัตว์ตระกูลลิง (Primates) ขั้นตอนการทดลองนั้นเจ็บปวดสำหรับพวกเขา นักกิจกรรมกำลังประท้วงหน้าบ้านคุณ',
            zh: '🐒 动物困境：你的新药对阿尔茨海默症显示出惊人的希望，但需要在灵长类动物（猴子）身上进行测试。实验方案对它们来说很痛苦。激进分子正在你家门外抗议。'
        },
        options: [
            {
                id: 'A',
                text: { en: '🧪 Science First: "Proceed with the test. Millions of humans are suffering. It\'s a necessary sacrifice. Increase security."', th: '🧪 วิทยาศาสตร์มาก่อน: "ดำเนินการทดสอบต่อ มนุษย์นับล้านกำลังทรมาน มันคือความเสียสละที่จำเป็น เพิ่มมาตรการรักษาความปลอดภัย"', zh: '🧪 科学至上："继续测试。数百万人类正在受苦。这是必要的牺牲。加强安保。"' },
                consequence: { en: '💊 Cure Found. The drug works. You win a Nobel Prize. But you are haunted by the images of the monkeys. You donate half your prize money to animal sanctuaries.', th: '💊 พบทางรักษา ยาได้ผล คุณได้รางวัลโนเบล แต่คุณถูกหลอกหลอนด้วยภาพของลิงเหล่านั้น คุณบริจาคเงินรางวัลครึ่งหนึ่งให้เขตรักษาพันธุ์สัตว์', zh: '💊 找到疗法。药物有效。你获得了诺贝尔奖。但猴子的画面挥之不去。你把自己一半的奖金捐给了动物收容所。' },
                stats: { competence: 60, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: { en: '💻 Computer Simulation: "Pause animal testing. Invest heavily in AI modeling to simulate the reaction. It\'s slower and riskier."', th: '💻 แบบจำลองคอมพิวเตอร์: "หยุดทดสอบสัตว์ ลงทุนหนักใน AI เพื่อจำลองปฏิกิริยา ช้ากว่าและเสี่ยงกว่า"', zh: '💻 计算机模拟："暂停动物测试。大力投资AI模型来模拟反应。这更慢且风险更大。"' },
                consequence: { en: '🐢 Delayed Success. It takes 2 extra years. Many patients die waiting. But when you finally succeed, you establish a new "Cruelty-Free" standard for research. History honors you.', th: '🐢 ความสำเร็จที่ล่าช้า ใช้เวลาเพิ่ม 2 ปี ผู้ป่วยหลายคนตายระหว่างรอ แต่เมื่อสำเร็จ คุณสร้างมาตรฐาน "ไร้ความโหดร้าย" ใหม่สำหรับการวิจัย ประวัติศาสตร์ยกย่องคุณ', zh: '🐢 迟到的成功。多花了2年时间。许多病人在等待中死去。但当你最终成功时，你确立了新的"无残忍"研究标准。历史向你致敬。' },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: 60 }
            },
            {
                id: 'C',
                text: { en: '🗣️ Engage Crowd: "Invite the protest leaders in. Show them the lab conditions. Negotiate better welfare standards."', th: '🗣️ คุยกับมวลชน: "เชิญแกนนำประท้วงเข้ามา ให้ดูสภาพแล็บ เจรจามาตรฐานสวัสดิภาพที่ดีขึ้น"', zh: '🗣️由此行事："邀请抗议领袖进来。向他们展示实验室条件。协商更好的福利标准。"' },
                consequence: { en: '🤝 Uncommon Ground. They agree to stop protesting if you implement enrichment programs. The stress lowers. The research proceeds ethically.', th: '🤝 จุดร่วมที่ไม่ธรรมดา พวกเขาตกลงหยุดประท้วงถ้าคุณทำโครงการส่งเสริมคุณภาพชีวิตสัตว์ ความเครียดลดลง งานวิจัยเดินหน้าอย่างมีจริยธรรม', zh: '🤝 非同寻常的共识。如果你实施丰富化项目，他们同意停止抗议。压力降低。研究在道德上继续进行。' },
                stats: { competence: 40, ethics: 50, leadership: 60, innovation: 20 }
            },
            {
                id: 'D',
                text: { en: '🛑 Cancel Project: "I can\'t do it. The cost is too high. Shut down the Alzheimer\'s division."', th: '🛑 ยกเลิกโครงการ: "ผมทำไม่ได้ ราคามันสูงเกินไป ปิดแผนกอัลไซเมอร์ซะ"', zh: '🛑 取消项目："我做不到。代价太大了。关闭阿尔茨海默症部门。"' },
                consequence: { en: '📉 Career Suicide. You are labeled "soft." Funding agencies blacklist you. You end up teaching high school biology.', th: '📉 ฆ่าตัวตายทางอาชีพ คุณถูกตราหน้าว่า "ใจเสาะ" หน่วยงานทุนขึ้นบัญชีดำ คุณจบที่การสอนชีวะ ม.ปลาย', zh: '📉 职业自杀。你被贴上"软弱"的标签。资助机构将你列入黑名单。你最终去教高中生物。' },
                stats: { competence: 10, ethics: 20, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'med_researcher_004',
        text: {
            en: '🦠 The Lab Leak: A centrifuge malfunctions and shatters a vial containing a modified flu virus. It\'s likely contained, but protocol requires a full hazmat lockdown and reporting to the CDC (which will pause your lab for months).',
            th: '🦠 แล็บรั่ว: เครื่องปั่นเหวี่ยงขัดข้องและทำหลอดไวรัสไข้หวัดใหญ่ดัดแปลงแตก น่าจะควบคุมได้ แต่โปรโตคอลบังคับให้ล็อคดาวน์ Hazmat เต็มรูปแบบและแจ้ง CDC (ซึ่งจะหยุดแล็บคุณหลายเดือน)',
            zh: '🦠 实验室泄漏：离心机发生故障，震碎了一个装有改良流感病毒的小瓶。很可能已经被控制住了，但协议要求进行全面的危险品封锁并向疾控中心报告（这将导致你的实验室停工数月）。'
        },
        options: [
            { id: 'A', text: { en: '🚨 Full Protocol: "Sound the alarm! Lock the doors! Call the CDC! Safety is non-negotiable."', th: '🚨 โปรโตคอลเต็มรูปแบบ: "กดกริ่งเตือนภัย! ล็อคประตู! โทรหา CDC! ความปลอดภัยต่อรองไม่ได้"', zh: '🚨 全面协议："拉响警报！锁上门！致电疾控中心！安全没得商量。"' }, consequence: { en: '✅ Safe but Stalled. The lab is closed for 3 months. You lose precious time. But the team trusts you explicitly with their lives.', th: '✅ ปลอดภัยแต่ชะงัก แล็บปิด 3 เดือน คุณเสียเวลาอันมีค่า แต่ทีมไว้ใจคุณเรื่องชีวิตอย่างที่สุด', zh: '✅ 安全但停滞。实验室关闭了3个月。你失去了宝贵的时间。但团队绝对信任你会保护他们的生命。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🤫 Quiet Cleanup: "It was a small spill. Bleach it 10 times. UV lights on. Nobody mention this. We get back to work."', th: '🤫 ทำความสะอาดเงียบๆ: "มันแค่หกนิดหน่อย ราดไฮเตอร์ 10 รอบ เปิดไฟ UV ห้ามใครพูดเรื่องนี้ กลับไปทำงาน"', zh: '🤫 悄悄清理："只是一次小的泄漏。漂白10次。打开紫外线灯。谁也不许提这件事。我们回去工作。"' }, consequence: { en: '☣️ Silent Spread. One technician coughs a week later. It wasn\'t contained. You cause a minor local outbreak. You are arrested for criminal negligence.', th: '☣️ การแพร่ระบาดเงียบ ช่างเทคนิคไอในสัปดาห์ต่อมา มันไม่ถูกควบคุม คุณทำให้เกิดการระบาดท้องถิ่นเล็กน้อย คุณถูกจับข้อหาประมาทเลินเล่อทางอาญา', zh: '☣️ 无声传播。一名技术人员一周后咳嗽。它没有被控制住。你导致了一次小的局部爆发。你因刑事过失被捕。' }, stats: { competence: 10, ethics: -60, leadership: -50, innovation: 10 } },
            { id: 'C', text: { en: '🏥 Internal Quarantine: "Quarantine everyone in this room for 48 hours. We monitor ourselves. If clean, we clean up and report a \'minor incident\' later."', th: '🏥 กักตัวภายใน: "กักตัวทุกคนในห้องนี้ 48 ชั่วโมง เฝ้าระวังกันเอง ถ้าปลอดเชื้อ เราทำความสะอาดแล้วค่อยรายงาน \'อุบัติเหตุเล็กน้อย\' ทีหลัง"', zh: '🏥 内部隔离："将这间屋子里的所有人隔离48小时。我们自我监测。如果没问题，我们清理现场并在稍后报告\'轻微事故\'。"' }, consequence: { en: '🎲 Risky Gamble. Luckily, no one is infected. The team bonds over the sleepover from hell. But they know you bent the rules.', th: '🎲 การเดิมพันเสี่ยง โชคดีไม่มีใครติดเชื้อ ทีมสนิทกันขึ้นผ่านการนอนค้างคืนนรกแตก แต่พวกเขารู้ว่าคุณบิดเบือนกฎ', zh: '🎲 冒险的赌博。幸运的是，没有人被感染。团队在这次地狱般的过夜中建立了联系。但他们知道你破坏了规则。' }, stats: { competence: 30, ethics: 20, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '🏃 Evacuate & Seal: "Get everyone out! Seal the room immediately. We deal with the decon ourselves tomorrow without the CDC."', th: '🏃 อพยพและปิดผนึก: "ทุกคนออกไป! ปิดผนึกห้องทันที เราจะจัดการกำจัดเชื้อกันเองพรุ่งนี้โดยไม่บอก CDC"', zh: '🏃 疏散并封锁："让所有人出去！立即封锁房间。我们明天自己处理去污，不通知疾控中心。"' }, consequence: { en: '⚠️ Contamination Risk. The seal wasn\'t perfect. Traces of virus escape. You avoid disaster narrowly, but the stress causes two researchers to quit.', th: '⚠️ ความเสี่ยงปนเปื้อน การปิดผนึกไม่สมบูรณ์ ร่องรอยไวรัสหลุดรอด คุณรอดหายนะมาได้หวุดหวิด แต่ความเครียดทำให้นักวิจัยลาออก 2 คน', zh: '⚠️ 污染风险。封锁并不完美。微量病毒逃逸。你侥幸避免了灾难，但压力导致两名研究员辞职。' }, stats: { competence: 20, ethics: 0, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'med_researcher_005',
        text: {
            en: '🎖️ The Military Contract: The Department of Defense wants to fund your pathogen research. They offer unlimited budget, but the research will be classified and potentially weaponized. "It\'s for defense," they claim.',
            th: '🎖️ สัญญาทางทหาร: กระทรวงกลาโหมต้องการให้ทุนวิจัยเชื้อโรคของคุณ พวกเขาเสนองบประมาณไม่อั้น แต่งานวิจัยจะเป็นความลับและอาจถูกนำไปทำอาวุธ "เพื่อการป้องกัน" พวกเขาอ้าง',
            zh: '🎖️ 军事合同：国防部想要资助你的病原体研究。他们提供无限的预算，但研究将被列为机密，并可能被武器化。他们声称"这是为了防御"。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Accept the Mission: "Science is a tool. I will take the money and ensure our soldiers are safe. I can control the output."', th: '🤝 รับภารกิจ: "วิทยาศาสตร์คือเครื่องมือ ฉันจะรับเงินและรับรองว่าทหารของเราปลอดภัย ฉันควบคุมผลลัพธ์ได้"', zh: '🤝 接受任务："科学是一种工具。我会拿钱并在确保我们士兵的安全。我可以控制产出。"' }, consequence: { en: '🛡️ Patriot or Pawn? You build incredible defenses. But 5 years later, you see a news report of a "mysterious outbreak" in an enemy country that matches your strain. Guilt consumes you.', th: '🛡️ ผู้รักชาติหรือเบี้ย? คุณสร้างการป้องกันที่ยอดเยี่ยม แต่ 5 ปีต่อมา คุณเห็นข่าว "การระบาดลึกลับ" ในประเทศศัตรูที่ตรงกับสายพันธุ์เชื้อของคุณ ความผิดกัดกินใจคุณ', zh: '🛡️ 爱国者还是棋子？你建立了不可思议的防御。但5年后，你看到新闻报道敌国发生了一场"神秘爆发"，与你的菌株相符。内疚吞噬了你。' }, stats: { competence: 60, ethics: -40, leadership: 20, innovation: 50 } },
            { id: 'B', text: { en: '🚫 Strict Refusal: "I am a healer, not a soldier. My work stays public and peaceful. Get out of my lab."', th: '🚫 ปฏิเสธเสียงแข็ง: "ฉันเป็นผู้รักษา ไม่ใช่ทหาร งานของฉันต้องเป็นสาธารณะและเพื่อสันติภาพ ออกไปจากแล็บของฉัน"', zh: '🚫 严词拒绝："我是治疗者，不是士兵。我的工作必须是公开且和平的。滚出我的实验室。"' }, consequence: { en: '🕊️ Principle Stand. You lose the funding. The DoD funds your rival instead. Your rival wins the Nobel prize, but your conscience is clean.', th: '🕊️ จุดยืนแห่งหลักการ คุณเสียเงินทุน DoD ไปให้ทุนคู่แข่งแทน คู่แข่งได้โนเบล แต่จิตสำนึกคุณสะอาด', zh: '🕊️ 原则立场。你失去了资助。国防部转而资助你的竞争对手。你的竞争对手获得了诺贝尔奖，但你的良心是清白的。' }, stats: { competence: 30, ethics: 60, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🕵️ The "Dual Use" Compromise: "Take the money but steer the research purely towards vaccines. Hide the offensive capabilities in complex data."', th: '🕵️ การประนีประนอม "ใช้สองทาง": "รับเงินแต่เบี่ยงเบนงานวิจัยไปทางวัคซีนล้วนๆ ซ่อนความสามารถในการโจมตีไว้ในข้อมูลซับซ้อน"', zh: '🕵️ "双重用途"妥协："拿钱，但将研究完全引向疫苗。将攻击能力隐藏在复杂的数据中。"' }, consequence: { en: '🎭 Dangerous Game. The General is suspicious. You spend more time covering your tracks than researching. Eventually, they audit you and pull the plug.', th: '🎭 เกมอันตราย นายพลเริ่มสงสัย คุณใช้เวลาปกปิดร่องรอยมากกว่าวิจัย ในที่สุดพวกเขาก็ตรวจสอบและถอดปลั๊ก', zh: '🎭 危险的游戏。将军起了疑心。你花在掩盖行踪上的时间比研究还多。最终，他们审计了你并终止了项目。' }, stats: { competence: 40, ethics: 20, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '📢 Whistleblow: "Leak the offer to the New York Times. \'The Army is weaponizing flu viruses.\' Stop it before it starts."', th: '📢 เป่านกหวีด: "ปล่อยข่าวนี่ให้ New York Times \'กองทัพกำลังทำไวรัสไข้หวัดใหญ่เป็นอาวุธ\' หยุดมันก่อนจะเริ่ม"', zh: '📢 揭发："向《纽约时报》泄露这一提议。\'军队正在将流感病毒武器化。\'在它开始之前阻止它。"' }, consequence: { en: '❄️ Deep Freeze. The story explodes. The program is cancelled. But you lose your security clearance and are blacklisted from all government grants.', th: '❄️ แช่แข็ง เรื่องราวดังระเบิด โครงการถูกยกเลิก แต่คุณเสียสิทธิ์การเข้าถึงข้อมูลลับและโดนแบล็คลิสต์จากทุนรัฐบาลทั้งหมด', zh: '❄️ 深度冻结。故事爆炸了。项目被取消。但你失去了安全许可，并被列入所有政府资助的黑名单。' }, stats: { competence: 20, ethics: 50, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'med_researcher_006',
        text: {
            en: '🎓 The Peer Review Ring: You discover a group of top journals are trading favors—"You accept my bad paper, I accept yours." To get your groundbreaking analytical paper published, the editor implies you need to "play the game" and cite his irrelevant work.',
            th: '🎓 วงจร Peer Review: คุณค้นพบว่ากลุ่มวารสารชั้นนำกำลังแลกเปลี่ยนผลประโยชน์—"นายรับเปเปอร์ห่วยๆ ของฉัน ฉันรับของนาย" เพื่อให้เปเปอร์วิเคราะห์สุดล้ำของคุณได้ตีพิมพ์ บรรณาธิการบอกเป็นนัยว่าคุณต้อง "ตามน้ำ" และอ้างอิงงานที่ไม่เกี่ยวข้องของเขา',
            zh: '🎓 同行评审圈：你发现一群顶级期刊正在进行利益交换——"你接受我的烂论文，我就接受你的。"为了让你突破性的分析论文得以发表，编辑暗示你需要"玩这个游戏"并引用他不相关的作品。'
        },
        options: [
            { id: 'A', text: { en: '🤝 Play the Game: "Add the citations. It changes nothing in the science. Getting published in Nature is worth a bruised ego."', th: '🤝 ตามน้ำ: "เพิ่มการอ้างอิงไป มันไม่ได้เปลี่ยนวิทยาศาสตร์ การได้ตียพิมพ์ใน Nature คุ้มที่ยอมเสียศักดิ์ศรี"', zh: '🤝 玩游戏："加上引用。这一改变不了科学。在《自然》上发表论文值得受这点委屈。"' }, consequence: { en: '📈 Impact Factor High. Your career soars. But you are now part of the corruption. You start favoring your friends\' papers too. The cycle continues.', th: '📈 Impact Factor สูง อาชีพคุณพุ่งทะยาน แต่ตอนนี้คุณเป็นส่วนหนึ่งของการคอร์รัปชัน คุณเริ่มเข้าข้างเปเปอร์เพื่อนคุณเหมือนกัน วงจรอุบาทว์ดำเนินต่อ', zh: '📈 影响因子高。你的事业腾飞。但你现在也是腐败的一部分。你也开始偏袒朋友的论文。循环继续。' }, stats: { competence: 50, ethics: -20, leadership: 20, innovation: 30 } },
            { id: 'B', text: { en: '🏹 Expose Them: "Write an op-ed exposing the citation cartel. Name names. Burn the corrupt journals down."', th: '🏹 แฉพวกมัน: "เขียนบทความแฉแก๊งอ้างอิงรุะบุชื่อ เผาวารสารทุจริตพวกนั้นให้วอด"', zh: '🏹 揭露他们："写一篇专栏文章揭露引用卡特尔。点名道姓。烧毁那些腐败的期刊。"' }, consequence: { en: '🔥 Martyrdom. You are banned from major journals. But you launch a new Open Science platform that becomes the gold standard for honest research.', th: '🔥 การเป็นมรณสักขี คุณถูกแบนจากวารสารหลัก แต่คุณเปิดแพลตฟอร์ม Open Science ใหม่ที่กลายเป็นมาตรฐานทองคำของการวิจัยที่ซื่อสัตย์', zh: '🔥 殉道。你被主要期刊封杀。但你推出了一个新的开放科学平台，成为诚实研究的黄金标准。' }, stats: { competence: 30, ethics: 70, leadership: 60, innovation: 50 } },
            { id: 'C', text: { en: '🐢 Submit Elsewhere: "Withdraw the paper. Submit to a lower-tier journal with honest integrity. The work speaks for itself."', th: '🐢 ส่งที่อื่น: "ถอนเปเปอร์ ส่งวารสารเกรดรองที่มีจริยธรรม ผลงานจะพิสูจน์ตัวมันเอง"', zh: '🐢 投别处："撤回论文。投给诚信度高的低级别期刊。作品会为自己说话。"' }, consequence: { en: '📉 Slow Recognition. It takes 3 years to get citations. You missed the spotlight, but kept your soul. Safe, boring choice.', th: '📉 การยอมรับที่ล่าช้า ใช้เวลา 3 ปีกว่าจะมีการอ้างอิง คุณพลาดสปอตไลท์ แต่รักษาจิตวิญญาณ ทางเลือกที่ปลอดภัยและน่าเบื่อ', zh: '📉 缓慢的认可。花了3年时间才获得引用。你错过了聚光灯，但保住了灵魂。安全、无聊的选择。' }, stats: { competence: 40, ethics: 50, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🕵️ Malicious Compliance: "Add the citation, but in a footnote explaining why it is irrelevant and forced by the editor."', th: '🕵️ การต่อต้านแบบเนียนๆ: "ใส่อ้างอิง แต่ใส่ในเชิงอรรถอธิบายว่าทำไมมันไม่เกี่ยวและถูกบังคับโดยบรรณาธิการ"', zh: '🕵️ 恶意服从："加上引用，但在脚注中解释为什么它不相关且是编辑强迫的。"' }, consequence: { en: '⚔️ War Declared. The editor rejects it instantly and badmouths you to everyone. You tried to be clever and got burned.', th: '⚔️ ประกาศสงคราม บรรณาธิการปฏิเสธทันทีและนินทาคุณให้ทุกคนฟัง คุณพยายามจะฉลาดแต่โดนเล่นงาน', zh: '⚔️ 宣战。编辑立即拒绝并向所有人说你坏话。你试图耍小聪明，结果被烧伤了。' }, stats: { competence: 20, ethics: 30, leadership: -10, innovation: 10 } }
        ]
    },
    {
        id: 'med_researcher_007',
        text: {
            en: '🧠 The Student Pluralist: Your brilliant PhD student shows you a draft. It contains a paragraph copied word-for-word from a competitor\'s obscure 1990 paper. She says it was an accident/placeholder. She is your top earner.',
            th: '🧠 นักศึกษาลอกงาน: นักศึกษาปริญญาเอกหัวกะทิส่งดราฟต์ให้คุณ มีหนึ่งย่อหน้าที่ลอกคำต่อคำมาจากเปเปอร์ปี 1990 ของคู่แข่ง เธอบอกว่ามันเป็นอุบัติเหตุ/ที่คั่นหน้า เธอคือตัวทำเงินของคุณ',
            zh: '🧠 学生剽窃者：你才华横溢的博士生给你看了一份草稿。其中有一段逐字抄袭了竞争对手1990年的一篇晦涩论文。她说这是意外/占位符。她是你的摇钱树。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Zero Tolerance: "Plagiarism is death. Expel her from the program. Protect the lab\'s reputation at all costs."', th: '🚫 ไม่ยอมรับเด็ดขาด: "การลอกงานคือความตาย ไล่เธอออกจากโปรแกรม ปกป้องชื่อเสียงแล็บไม่ว่าจะยังไง"', zh: '🚫 零容忍："剽窃就是死亡。把她逐出项目。不惜一切代价保护实验室的声誉。"' }, consequence: { en: '📉 Brain Drain. You lose your best worker. The lab slows down. But everyone knows you have iron standards.', th: '📉 สมองไหล คุณเสียคนทำงานเก่งที่สุด แล็บช้าลง แต่ทุกคนรู้ว่าคุณมีมาตรฐานเหล็ก', zh: '📉 人才流失。你失去了最好的员工。实验室变慢了。但每个人都知道你有铁一般的标准。' }, stats: { competence: 30, ethics: 60, leadership: 40, innovation: -10 } },
            { id: 'B', text: { en: '⚠️ Formal Warning: "Rewrite the paper from scratch under supervision. One more strike and you are out. This goes on your record."', th: '⚠️ เตือนอย่างเป็นทางการ: "เขียนเปเปอร์ใหม่ทั้งหมดภายใต้การดูและ ครั้งหน้าไล่ออก บันทึกเรื่องนี้ลงประวัติ"', zh: '⚠️ 正式警告："在监督下从头重写论文。再犯一次就出局。这会记入你的档案。"' }, consequence: { en: '🎓 Redemption. She is terrified and works twice as hard. She becomes a meticulous researcher and eventually a professor.', th: '🎓 การไถ่บาป เธอหวาดกลัวและทำงานหนักขึ้นสองเท่า เธอกลายเป็นนักวิจัยที่ละเอียดรอบคอบและเป็นศาสตราจารย์ในที่สุด', zh: '🎓 救赎。她吓坏了，加倍努力工作。她成为了一名一丝不苟的研究员，最终成为了一名教授。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '🤫 Cover Up: "Just change the wording. Don\'t tell anyone. It happened to me once too. Be careful."', th: '🤫 ปกปิด: "แค่เปลี่ยนคำ อย่าบอกใคร เคยเกิดกับฉันเหมือนกัน ระวังหน่อย"', zh: '🤫 掩盖："改改措辞就行。别告诉任何人。我也发生过这种事。小心点。"' }, consequence: { en: '💣 Habit Forming. She learns that corners can be cut. Years later, she fakes data in a major trial. You taught her that.', th: '💣 สร้างนิสัย เธอเรียนรู้ว่าทางลัดทำได้ หลายปีต่อมา เธอปลอมข้อมูลในการทดลองใหญ่ คุณสอนเธอเอง', zh: '💣 养成习惯。她学会了可以走捷径。多年后，她在一项重大试验中伪造数据。是你教她的。' }, stats: { competence: 20, ethics: -50, leadership: -30, innovation: 10 } },
            { id: 'D', text: { en: '📝 Retraction Training: "Make the whole lab take an ethics course. Use this as a teaching moment without naming her."', th: '📝 อบรมจริยธรรม: "ให้ทั้งแล็บอบรมคอร์สจริยธรรม ใช้เป็นโอกาสสอนโดยไม่ต้องระบุชื่อเธอ"', zh: '📝 撤回培训："让整个实验室参加职业道德课程。以此为契机进行教育，不要点她的名。"' }, consequence: { en: '😴 Eyes Rolled. The team hates the extra homework. The lesson is diluted. She doesn\'t feel the gravity of her error.', th: '😴 มองบน ทีมเกลียดการบ้านเพิ่ม บทเรียนเจือจาง เธอไม่รู้สึกถึงความร้ายแรงของความผิด', zh: '😴 翻白眼。团队讨厌额外的家庭作业。教训被淡化了。她没有感到错误的严重性。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'med_researcher_008',
        text: {
            en: '⚖️ The Patent Troll: You invent a cheap, lifesaving diagnostic device. A "Patent Troll" company sues you, claiming they own the concept of "measuring blood" vaguely. They want a settlement that would bankrupt your startup.',
            th: '⚖️ โทรลล์สิทธิบัตร: คุณประดิษฐ์เครื่องวินิจฉัยราคาถูกที่ช่วยชีวิตคน บริษัท "Patent Troll" ฟ้องคุณ อ้างว่าพวกเขาเป็นเจ้าของคอนเซปต์ "การวัดเลือด" แบบกว้างๆ พวกเขาต้องการค่าเสียหายที่จะทำให้สตาร์ทอัพคุณเจ๊ง',
            zh: '⚖️ 专利流氓：你发明了一种廉价的救命诊断设备。一家"专利流氓"公司起诉你，声称他们拥有"测量血液"这一模糊概念的所有权。虽然要求和解金，但这会让你的初创公司破产。'
        },
        options: [
            { id: 'A', text: { en: '⚔️ Fight in Court: "We will not yield to extortion. Sell the lab equipment to pay for lawyers. We fight for truth!"', th: '⚔️ สู้ในศาล: "เราจะไม่ยอมจำนนต่อการรีดไถ ขายอุปกรณ์แล็บไปจ้างทนาย เราสู้เพื่อความจริง!"', zh: '⚔️ 法庭抗争："我们不会屈服于勒索。卖掉实验室设备支付律师费。我们为真理而战！"' }, consequence: { en: '🏆 Pyrrhic Victory. You win after 2 years. But the lab is gone. You are broke. The device never hits the market. But you set a legal precedent.', th: '🏆 ชัยชนะบนซากปรักหักพัง คุณชนะหลังผ่านไป 2 ปี แต่แล็บหายไปแล้ว คุณถังแตก เครื่องมือไม่ได้ขาย แต่คุณสร้างบรรทัดฐานทางกฎหมาย', zh: '🏆 皮洛士式胜利。2年后你赢了。但实验室没了。你破产了。设备从未上市。但你开创了法律先例。' }, stats: { competence: 20, ethics: 60, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🤝 Settle: "Pay them what we can. Give them 10% equity. We need to stay alive to help patients."', th: '🤝 ยอมความ: "จ่ายเท่าที่ไหว ให้หุ้น 10% เราต้องอยู่รอดเพื่อช่วยผู้ป่วย"', zh: '🤝 和解："能付多少付多少。给他们10%的股权。我们需要活下去帮助病人。"' }, consequence: { en: '🩸 Bleeding Out. The trolls are on your board now. They stifle innovation to save costs. The device becomes expensive and mediocre.', th: '🩸 เลือดไหลไม่หยุด พวกโทรลล์มาอยู่ในบอร์ดบริหาร พวกเขากดดันนวัตกรรมเพื่อลดต้นทุน เครื่องมือกลายเป็นของแพงและห่วย', zh: '🩸 失血过多。流氓现在在你的董事会里。他们为了节省成本扼杀创新。设备变得昂贵且平庸。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: -20 } },
            { id: 'C', text: { en: '🔓 Open Source It: "Release all blueprints online for free. They can\'t sue everyone. Make it public domain immediately."', th: '🔓 เปิดโอเพ่นซอร์ส: "ปล่อยพิมพ์เขียวทั้งหมดออนไลน์ฟรี พวกเขาฟ้องทุกคนไม่ได้ ทำให้เป็นสาธารณสมบัติทันที"', zh: '🔓 开源："免费在线发布所有蓝图。他们不能起诉所有人。立即将其变为公有领域。"' }, consequence: { en: '🌍 Global Impact. You lose potential billions in profit. But makers worldwide start 3D printing your device. You save millions of lives directly.', th: '🌍 ผลกระทบระดับโลก คุณเสียโอกาสทำกำไรพันล้าน แต่นักประดิษฐ์ทั่วโลกเริ่ม 3D print เครื่องมือคุณ คุณช่วยชีวิตคนล้านคนโดยตรง', zh: '🌍 全球影响。你失去了数以十亿计的潜在利润。但全世界的创客开始3D打印你的设备。你直接拯救了数百万人的生命。' }, stats: { competence: 50, ethics: 70, leadership: 60, innovation: 80 } },
            { id: 'D', text: { en: '🕵️ Counter-Attack: "Dig up dirt on their CEO. Find their prior art invalidation. Fight dirty."', th: '🕵️ สวนกลับ: "ขุดคุ้ยเรื่อง CEO มัน หาหลักฐานว่าสิทธิบัตรเก่าโมฆะ เล่นสกปรกบ้าง"', zh: '🕵️ 反击："挖他们CEO的丑闻。找到他们现有技术的无效证明。玩阴的。"' }, consequence: { en: '🕶️ Noir Science. You find evidence of fraud. They drop the suit in panic. It works, but you spend your time being a detective, not a scientist.', th: '🕶️ วิทยาศาสตร์ฟิล์มนัวร์ คุณเจอหลักฐานฉ้อโกง พวกเขารีบถอนฟ้อง ได้ผล แต่คุณเสียเวลาไปกับการเป็นนักสืบ ไม่ใช่นักวิทยาศาสตร์', zh: '🕶️ 黑色科学。你发现了欺诈的证据。他们惊慌失措地撤诉。有效，但你把时间花在做侦探上，而不是科学家。' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'med_researcher_009',
        text: {
            en: '📢 The Dangerous Discovery: You analyze a 5,000-year-old ice core and revive a dormant precursor to Smallpox. It is highly infectious. If you publish, terrorists could engineer it. If you don\'t, we can\'t make vaccines.',
            th: '📢 การค้นพบอันตราย: คุณวิเคราะห์แกนน้ำแข็ง 5,000 ปีและปลุกบรรพบุรุษไข้ทรพิษที่หลับใหล มันติดเชื้อง่ายมาก ถ้าตีพิมพ์ ผู้ก่อการร้ายอาจเอามันไปดัดแปลง ถ้าไม่ เราก็ทำวัคซีนไม่ได้',
            zh: '📢 危险的发现：你分析了一个5000年前的冰芯，复活了一种休眠的天花前体。它具有高度传染性。如果你发表，恐怖分子可能会利用它。如果不发表，我们就无法制造疫苗。'
        },
        options: [
            { id: 'A', text: { en: '🔒 Deep Secret: "Destroy the samples. Burn the data. Never speak of this. Humanity is not ready."', th: '🔒 ความลับดำมืด: "ทำลายตัวอย่าง เผาข้อมูล ห้ามพูดถึงเรื่องนี้ มนุษยชาติยังไม่พร้อม"', zh: '🔒 深藏秘密："销毁样本。烧毁数据。绝口不提。人类还没准备好。"' }, consequence: { en: '🛡️ Guardian. You prevented a potential apocalypse. But 10 years later, global warming melts the ice and the virus releases naturally. We are unprepared.', th: '🛡️ ผู้พิทักษ์ คุณป้องกันวันสิ้นโลก แต่ 10 ปีต่อมา ภาวะโลกร้อนละลายน้ำแข็งและไวรัสหลุดออกมาตามธรรมชาติ เราไม่พร้อมรับมือ', zh: '🛡️ 守护者。你阻止了一场潜在的末日。但10年后，全球变暖融化了冰层，病毒自然释放。我们毫无准备。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: -10 } },
            { id: 'B', text: { en: '📝 Redacted Publish: "Publish the warning and vaccine targets, but redact the genetic sequence. Share full data only with WHO."', th: '📝 ตีพิมพ์แบบเซ็นเซอร์: "ตีพิมพ์คำเตือนและเป้าหมายวัคซีน แต่ปิดบังรหัสพันธุกรรม แชร์ข้อมูลเต็มกับ WHO เท่านั้น"', zh: '📝 删减发布："发布警告和疫苗靶点，但删减基因序列。只与世卫组织分享完整数据。"' }, consequence: { en: '✅ Responsible Science. It\'s a difficult balance. Some criticize you for "censoring science," but the WHO develops a stockpile. You sleep at night.', th: '✅ วิทยาศาสตร์ที่รับผิดชอบ เป็นสมดุลที่ยาก บางคนด่าคุณว่า "เซ็นเซอร์วิทย์" แต่ WHO ได้คลังวัคซีน คุณนอนหลับสบาย', zh: '✅ 负责任的科学。这是一个艰难的平衡。有人批评你"审查科学"，但世卫组织建立了储备。你晚上睡得很香。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🌍 Full Open Access: "Information wants to be free. Publish the full genome. Trust the world to build defenses."', th: '🌍 เปิดเผยทั้งหมด: "ข้อมูลต้องการอิสระ ตีพิมพ์จีโนมทั้งหมด เชื่อมั่นว่าโลกจะสร้างการป้องกัน"', zh: '🌍 全面开放获取："信息渴望自由。发布完整基因组。相信世界会建立防御。"' }, consequence: { en: '☠️ Bio-Terror. A cult in a basement synthesizes the virus. A subway attack kills 50,000. You are called the "Oppenheimer of Biology."', th: '☠️ ก่อการร้ายชีวภาพ ลัทธิใต้ดินสังเคราะห์ไวรัส โจมตีรถไฟใต้ดินตาย 50,000 คุณถูกเรียกว่า "ออพเพนไฮเมอร์แห่งชีววิทยา"', zh: '☠️ 生物恐怖。地下室的一个邪教组织合成了病毒。地铁袭击造成5万人死亡。你被称为"生物学界的奥本海默"。' }, stats: { competence: 50, ethics: -100, leadership: -50, innovation: 20 } },
            { id: 'D', text: { en: '🤝 Government Handover: "Call the CIA. Hand it all over to them. Let the spooks handle security."', th: '🤝 ส่งต่อรัฐบาล: "โทรหา CIA ส่งทุกอย่างให้พวกเขา ให้สายลับจัดการความปลอดภัย"', zh: '🤝 移交政府："给中情局打电话。把一切移交给他们。让特工处理安全问题。"' }, consequence: { en: '📦 Disappearance. Men in black vans take your hard drives. You never hear about it again. Did they destroy it? Or weaponize it? You\'ll never know.', th: '📦 การหายสาบสูญ ชายชุดดำมายกฮาร์ดไดรฟ์คุณไป คุณไม่ได้ยินข่าวอีกเลย พวกเขาทำลาย? หรือทำอาวุธ? คุณไม่มีวันรู้', zh: '📦 消失。黑车里的人拿走了你的硬盘。你再也没听过这事。他们是销毁了？还是武器化了？你永远不会知道。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'med_researcher_010',
        text: {
            en: '🥦 The Celebrity Fad: A famous influencer claims your research proves that "Eating dirt cures cancer." It\'s false. But your lab is getting thousands of dollars in donations from her fans.',
            th: '🥦 กระแสคนดัง: อินฟลูเอนเซอร์ชื่อดังอ้างว่างานวิจัยของคุณพิสูจน์ว่า "กินดินรักษามะเร็ง" มันไม่จริง แต่แล็บคุณได้รับเงินบริจาคหลายพันดอลลาร์จากแฟนคลับเธอ',
            zh: '🥦 名人热潮：一位著名网红声称你的研究证明"吃土能治愈癌症"。这是假的。但你的实验室收到了她粉丝数千美元的捐款。'
        },
        options: [
            { id: 'A', text: { en: '🤐 Take the Cash: "Money is money. We aren\'t telling them to eat dirt, she is. Use the donations for real cancer research."', th: '🤐 รับเงิน: "เงินก็คือเงิน เราไม่ได้บอกให้กินดิน เธอบอก เอาเงินบริจาคมาวิจัยมะเร็งของจริง"', zh: '🤐 拿钱："钱就是钱。我们没让他们吃土，是她说的。把捐款用于真正的癌症研究。"' }, consequence: { en: '🤥 Loss of Trust. Eventually, a fan gets sick. The media digs up your silence. You are complicit in the scam. Reputation ruined.', th: '🤥 สูญเสียความเชื่อถือ ในที่สุดแฟนคลับป่วย สื่อขุดคุ้ยความเงียบของคุณ คุณสมรู้ร่วมคิดในการหลอกลวง ชื่อเสียงป่นปี้', zh: '🤥 失去信任。最终，这名粉丝生病了。媒体挖出了你的沉默。你是骗局的同谋。声誉扫地。' }, stats: { competence: 40, ethics: -30, leadership: -10, innovation: 20 } },
            { id: 'B', text: { en: '📢 Public Correction: "Issue a press release: \'Eating dirt is dangerous. Please stop.\' Return the donations."', th: '📢 แก้ข่าว: "ออกแถลงการณ์: \'กินดินอันตราย หยุดเถอะ\' คืนเงินบริจาค"', zh: '📢 公开更正："发布新闻稿：\'吃土很危险。请停止。\'退还捐款。"' }, consequence: { en: '🛡️ Integrity Checked. The influencer attacks you. "Negative energy scientists!" But medical boards applaud you. You keep your license clean.', th: '🛡️ ตรวจสอบความซื่อสัตย์ อินฟลูฯ โจมตีคุณ "นักวิทย์พลังลบ!" แต่แพทยสภาปรบมือให้ ใบอนุญาตคุณขาวสะอาด', zh: '🛡️ 正直受检。网红攻击你。"负能量科学家！"但医学委员会为你鼓掌。你的执照保持清白。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Education Pivot: "Invite the influencer to the lab. Teach her the real science. Try to convert her platform into a force for good."', th: '🤝 เปลี่ยนเป็นให้ความรู้: "เชิญอินฟลูฯ มาแล็บ สอนวิทย์ของจริง พยายามเปลี่ยนแพลตฟอร์มเธอให้เป็นพลังบวก"', zh: '🤝 教育转向："邀请网红来实验室。教她真正的科学。试图将她的平台转变为向善的力量。"' }, consequence: { en: '🎓 Viral Science. She gets bored and leaves. BUT, her audience learns a bit about immunology. Better than nothing. A noble attempt.', th: '🎓 วิทยาศาสตร์ไวรัล เธอเบื่อและกลับไป แต่คนดูเธอได้เรียนรู้เรื่องภูมิคุ้มกันบ้าง ดีกว่าไม่ได้ทำอะไร ความพยายามที่น่ายกย่อง', zh: '🎓 病毒式科学。她感到无聊离开了。但是，她的受众学到了一些免疫学知识。总比没有好。一次高尚的尝试。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'D', text: { en: '🤑 Endorsement Deal: "Contact her agent. Offer to launch a verified supplement line. If they want to buy snake oil, sell them non-toxic snake oil."', th: '🤑 ดีลโฆษณา: "ติดต่อเอเจนท์ เสนอทำอาหารเสริมที่มีอย. ถ้าเขาอยากซื้อน้ำมันงู ก็ขายน้ำมันงูแบบไม่เป็นพิษให้ละกัน"', zh: '🤑 代言交易："联系她的经纪人。提议推出经过验证的补充剂系列。如果他们想买蛇油，就卖给他们无毒的蛇油。"' }, consequence: { en: '💰 Sellout. You make millions. You quit research to run a supplement company. You are rich, but you are no longer a scientist.', th: '💰 ขายวิญญาณ คุณรวยเละ คุณเลิกวิจัยไปเปิดบริษัทอาหารเสริม คุณรวย แต่ไม่ใช่คนทำวิจัยอีกต่อไป', zh: '💰 售罄。你赚了数百万。你辞去研究工作去经营一家补充剂公司。你有钱了，但你不再是科学家了。' }, stats: { competence: 30, ethics: -40, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'med_researcher_011',
        text: {
            en: '⏳ The Broken Ultra-Freezer: It is 3 AM. The -80°C freezer alarm goes off. It holds 20 years of samples. The backup generator fails. You have 30 minutes before everything thaws. You can only save 30% of the samples by moving them to a small backup unit.',
            th: '⏳ ตู้แช่แข็งพัง: ตี 3 สัญญาณเตือนตู้ -80°C ดัง มันเก็บตัวอย่าง 20 ปี เครื่องปั่นไฟสำรองเจ๊ง มีเวลา 30 นาทีก่อนละลาย คุณเซฟได้แค่ 30% โดยย้ายไปตู้สำรองเล็ก',
            zh: '⏳ 损坏的超低温冰箱：凌晨3点。-80°C冰箱警报响起。里面保存了20年的样本。备用发电机故障。在所有东西解冻前你有30分钟。通过将样本转移到小型备用装置，你只能保存30%的样本。'
        },
        options: [
            { id: 'A', text: { en: '👴 Save the Oldest: "Save the founding samples from the 90s. They are irreplaceable history."', th: '👴 เซฟของเก่า: "เก็บตัวอย่างยุค 90 มันคือประวัติศาสตร์ที่หาใหม่ไม่ได้"', zh: '👴 保存最老的："保存90年代的基础样本。它们是不可替代的历史。"' }, consequence: { en: '📜 Museum Piece. You save history, but lose current projects. Identify trends over decades, but current PhD students lose their thesis work.', th: '📜 ชิ้นส่วนพิพิธภัณฑ์ คุณรักษาประวัติศาสตร์ แต่เสียโปรเจกต์ปัจจุบัน ดูเทรนด์ข้ามทศวรรษได้ แต่นักศึกษา ป.เอก เสงานวิทยานิพนธ์', zh: '📜 博物馆藏品。你保存了历史，但导致当前项目失败。确定了几十年的趋势，但现在的博士生失去了他们的论文工作。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '👶 Save the Newest: "Save the current students\' work. The past is gone. The future depends on them graduating."', th: '👶 เซฟของใหม่: "เก็บงานนักศึกษาปัจจุบัน อดีตผ่านไปแล้ว อนาคตขึ้นอยู่กับการจบของพวกเขา"', zh: '👶 保存最新的："保存当前学生的作品。过去已去。未来取决于他们能否毕业。"' }, consequence: { en: '🎓 Leader\'s Choice. The students cry with relief. You lose longitudinal data, but you save careers. The team loyalty is unbreakable.', th: '🎓 ทางเลือกผู้นำ นักศึกษาร้องไห้ด้วยความโล่งใจ คุณเสียข้อมูลระยะยาว แต่รักษาอาชีพความภักดีของทีมแน่นแฟ้น', zh: '🎓 领袖的选择。学生们如释重负地哭了。你失去了纵向数据，但你拯救了职业生涯。团队忠诚度牢不可破。' }, stats: { competence: 40, ethics: 50, leadership: 70, innovation: 30 } },
            { id: 'C', text: { en: '💰 Save the Funded: "Save the samples related to the million-dollar grant. Money keeps the lights on. Politics first."', th: '💰 เซฟงานมีทุน: "เก็บตัวอย่างที่เกี่ยวกับทุนล้านดอลล์ เงินช่วยให้ไฟติด การเมืองต้องมาก่อน"', zh: '💰 保存有资助的："保存与百万美元资助相关的样本。钱能维持运营。政治第一。"' }, consequence: { en: '🏢 Cold Logic. The lab survives financially. But innovation dies because you sacrificed the risky, interesting pilot data.', th: '🏢 ตรรกะเย็นชา แล็บรอดทางการเงิน แต่นวัตกรรมตายเพราะคุณสละข้อมูลนำร่องที่เสี่ยงแต่น่าสนใจ', zh: '🏢 冷酷的逻辑。实验室在财务上幸存下来。但创新死了，因为你牺牲了冒险、有趣的试点数据。' }, stats: { competence: 50, ethics: 20, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🧊 Dry Ice Dash: "Call everyone! Drive to the supermarket! Buy all the dry ice! Try to save EVERYTHING!"', th: '🧊 ซิ่งแห้งน้ำแข็ง: "โทรหาทุกคน! ขับไปซุปเปอร์! เหมาน้ำแข็งแห้ง! พยายามเซฟทุกอย่าง!"', zh: '🧊 干冰冲刺："叫所有人！开车去超市！买光所有干冰！试图保存一切！"' }, consequence: { en: '🎲 High Stakes. You manage to save 80% with a chaotic dry ice bridge. But one postdoc gets frostbite. A legendary story.', th: '🎲 เดิมพันสูง คุณเซฟได้ 80% ด้วยสะพานน้ำแข็งแห้งสุดวุ่นวาย แต่โพสต์ด็อคคนนึงโดนน้ำแข็งกัด เรื่องเล่าในตำนาน', zh: '🎲 高风险。你用混乱的干冰桥设法保存了80%。但一名博士后被冻伤了。一个传奇的故事。' }, stats: { competence: 40, ethics: 40, leadership: 50, innovation: 60 } }
        ]
    },
    {
        id: 'med_researcher_012',
        text: {
            en: '🧬 The Nepotism Hire: The Dean of Medicine asks you to hire his son as a researcher. The son is... not bright. He mixes up pipettes. But the Dean controls your lab space allocation.',
            th: '🧬 เด็กเส้น: คณบดีแพทย์ฝากลูกชายมาทำงานวิจัย ลูกชาย... ไม่ค่อยฉลาด เขาหยิบปิเปตผิดๆ ถูกๆ แต่คณบดีคุมการจัดสรรพื้นที่แล็บคุณ',
            zh: '🧬 裙带关系雇佣：医学院院长让你雇佣他的儿子做研究员。这儿子……不太聪明。他搞混了移液管。但院长控制着你的实验室空间分配。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Refuse: "My lab is merit-based. He is a safety hazard. I cannot accept him."', th: '🛑 ปฏิเสธ: "แล็บฉันวัดที่ผลงาน เขาเป็นตัวอันตราย ฉันรับไม่ได้"', zh: '🛑 拒绝："我的实验室是唯才是举的。他是个安全隐患。我不能接受他。"' }, consequence: { en: '📉 Evicted. The Dean is "offended." Next month, your lab is moved to the basement with no windows. But your team respects you.', th: '📉 โดนไล่ที่ คณบดี "เคือง" เดือนหน้าแล็บคุณย้ายไปห้องใต้ดินไม่มีหน้าต่าง แต่ทีมเคารพคุณ', zh: '📉 被驱逐。院长"生气了"。下个月，你的实验室被搬到了没有窗户的地下室。但你的团队尊重你。' }, stats: { competence: 40, ethics: 60, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🧸 Babysit: "Hire him, but give him safe, useless tasks. Counting test tubes. Washing beakers. Keep him out of the way."', th: '🧸 พี่เลี้ยงเด็ก: "รับไว้ แต่ให้ทำงานปลอดภัย ไร้ประโยชน์ นับหลอดทดลอง ล้างบีกเกอร์ ให้อยู่ห่างๆ งาน"', zh: '🧸 当保姆："雇佣他，但给他安排安全、无用的任务。数试管。洗烧杯。让他别碍事。"' }, consequence: { en: '🙄 Team Morale Hit. The team resents having to babysit the "Prince." It drains energy. But you keep your nice lab space.', th: '🙄 ขวัญกำลังใจเสีย ทีมเซ็งที่ต้องเลี้ยง "เจ้าชาย" เปลืองแรง แต่คุณรักษพื้นที่แล็บสวยๆ ไว้ได้', zh: '🙄 团队士气受以此。团队通过不得不照顾"王子"而感到不满。这消耗了精力。但你保住了你漂亮的实验室空间。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 20 } },
            { id: 'C', text: { en: '👨‍🏫 Mentor Him: "Take it as a challenge. Spend extra hours teaching him. Maybe he just needs a good teacher."', th: '👨‍🏫 เป็นพี่เลี้ยง: "ถือเป็นความท้าทาย ใช้เวลาสอนเขาเพิ่ม เขาอาจแค่ต้องการครูดีๆ"', zh: '👨‍🏫 指导他："把它当作一个挑战。花额外的时间教他。也许他只是需要一个好老师。"' }, consequence: { en: '🐢 Slow Growth. He improves slightly. He isn\'t great, but he becomes competent enough not to kill anyone. The Dean owes you a favor.', th: '🐢 โตช้าๆ เขาดีขึ้นนิดหน่อย ไม่เก่ง แต่พอถูไถไม่ฆ่าใครตาย คณบดีติดหนี้บุญคุณคุณ', zh: '🐢 缓慢成长。他略有进步。他不优秀，但足以胜任，不会害死人。院长欠你一个人情。' }, stats: { competence: 40, ethics: 50, leadership: 60, innovation: 20 } },
            { id: 'D', text: { en: '🔄 Leverage: "Hire him, then demand a new mass spectrometer from the Dean as \'essential training equipment\' for his son."', th: '🔄 ต่อรอง: "รับไว้ แล้วขอเครื่องแมสสเปกฯ ใหม่จากคณบดี อ้างว่าเป็น \'อุปกรณ์ฝึกจำเป็น\' สำหรับลูกเขา"', zh: '🔄 利用："雇佣他，然后向院长要求一台新的质谱仪作为给他儿子的\'必要培训设备\'。"' }, consequence: { en: '🧠 Political Masterclass. You get a $500k machine. The son breaks some glassware, but the machine boosts output by 200%.', th: '🧠 ชั้นเชิงการเมือง คุณได้เครื่องจักร 5 แสนเหรียญ ลูกชายทำแก้วแตกบ้าง แต่เครื่องจักรเพิ่มผลผลิต 200%', zh: '🧠 政治大师级。你得到了一台50万美元的机器。儿子打碎了一些玻璃器皿，但机器将产量提高了200%。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'med_researcher_013',
        text: {
            en: '💤 The 48-Hour Experiment: A critical time-lapse experiment requires you to inject samples every hour for 48 hours straight. No sleep. You are at hour 36. You are hallucinating.',
            th: '💤 การทดลอง 48 ชม.: การทดลอง time-lapse สำคัญบังคับให้คุณฉีดตัวอย่างทุกชั่วโมง 48 ชม. ติด ห้ามหลับ ตอนนี้ชั่วโมงที่ 36 คุณเริ่มหลอน',
            zh: '💤 48小时实验：一项关键的延时摄影实验要求你连续48小时每小时注射一次样本。不睡觉。你在第36小时。你出现了幻觉。'
        },
        options: [
            { id: 'A', text: { en: '😵 Push Through: "I can do this. Coffee. Slap face. Just 12 more points. Don\'t be weak."', th: '😵 ลุยต่อ: "ฉันทำได้ กาแฟ ตบหน้า อีกแค่ 12 จุด อย่าอ่อนแอ"', zh: '😵 坚持到底："我能行。咖啡。扇耳光。再坚持12个点。别软弱。"' }, consequence: { en: '📉 Bad Data. You finished, but you labeled the last 10 tubes wrong in your delirium. The experiment works, but the data is garbage. Wasted week.', th: '📉 ข้อมูลพัง จบนะ แต่คุณแปะป้าย 10 หลอดสุดท้ายผิดตอนเบลอๆ การทดลองได้ผล แต่ข้อมูลขยะ เสียเวลาฟรีทั้งวีค', zh: '📉 糟糕的数据。你完成了，但在神志不清时把最后10个试管贴错了标签。实验成功了，但数据是垃圾。浪费了一周。' }, stats: { competence: 20, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '🤝 Shift Work: "Wake up a student at 3 AM. \'I need help. Take over.\' It disrupts their sleep, but saves the data."', th: '🤝 เข้าเวร: "ไปปลุกนักศึกษาตอนตี 3 \'ช่วยหน่อย รับช่วงต่อที\' กวนเวลานอนเขา แต่เซฟข้อมูลไว้ได้"', zh: '🤝 轮班工作："凌晨3点叫醒一个学生。\'我需要帮助。接手一下。\'这打扰了他们的睡眠，但保存了数据。"' }, consequence: { en: '✅ Team Support. The student is groggy but accurate. You collapse on the floor. You buy them lunch for a week. Success.', th: '✅ ทีมซัพพอร์ต นักศึกษางัวเงียแต่แม่นยำ คุณสลบคาพื้น คุณเลี้ยงข้าวเขาหนึ่งอาทิตย์ สำเร็จ', zh: '✅ 团队支持。学生虽然昏昏欲睡但很准确。你瘫倒在地板上。你给他们买了一周的午餐。成功。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '🤖 Automation: "Spend the first 4 hours rigging a crude robot arm to do the injections. If it fails, I fail."', th: '🤖 อัตโนมัติ: "ใช้ 4 ชั่วโมงแรกเขียนโปรแกรมแขนกลห่วยๆ ให้ฉีดแทน ถ้าพังก็จบ"', zh: '🤖 自动化："虽然只有4小时，改装一个简陋的机械臂来进行注射。如果失败，我就失败了。"' }, consequence: { en: '💡 Genius Move. The robot works perfectly. You sleep for 40 hours. You now have an automated system for future experiments.', th: '💡 มูฟอัจฉริยะ หุ่นยนต์ทำงานเป๊ะ คุณนอนยาว 40 ชม. ตอนนี้คุณมีระบบอัตโนมัติสำหรับการทดลองในอนาคต', zh: '💡 天才之举。机器人完美工作。你睡了40个小时。你现在拥有了一个用于未来实验的自动化系统。' }, stats: { competence: 60, ethics: 50, leadership: 30, innovation: 70 } },
            { id: 'D', text: { en: '🛑 Cancel: "It\'s unsafe. Stop the experiment. We need a better protocol before we try this marathon again."', th: '🛑 ยกเลิก: "ไม่ปลอดภัย หยุดการทดลอง เราต้องมีแผนที่ดีกว่านี้ก่อนจะมาราธอนกันอีก"', zh: '🛑 取消："这不安全。停止实验。在我们再次尝试这种马拉松之前，我们需要更好的协议。"' }, consequence: { en: '🛡️ Safety First. You lose time and reagents ($500). But you avoid burnout. Next time you schedule shifts properly.', th: '🛡️ ปลอดภัยไว้ก่อน เสียเวลาและน้ำยา ($500) แต่ไม่หมดไฟ ครั้งหน้าคุณจัดเวรยามให้เหมาะสม', zh: '🛡️ 安全第一。你浪费了时间和试剂（500美元）。但你避免了倦怠。下次你会合理安排轮班。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 20 } }
        ]
    },
    {
        id: 'med_researcher_014',
        text: {
            en: '🦠 The Superbug: A hospital sends you a sample of a bacteria that is resistant to EVERY known antibiotic. Your team is terrified to handle it. If it escapes, it\'s untreatable.',
            th: '🦠 เชื้อดื้อยา: โรงพยาบาลส่งตัวอย่างแบคทีเรียที่ดื้อยาปฏิชีวนะ "ทุกชนิด" ที่โลกรู้จัก ทีมคุณกลัวที่จะจับมัน ถ้าหลุดรอด คือรักษาไม่ได้',
            zh: '🦠 超级细菌：一家医院给你发来了一种对所有已知抗生素都有耐药性的细菌样本。你的团队不敢处理它。如果它逃逸，就无法治愈。'
        },
        options: [
            { id: 'A', text: { en: '🔥 Incinerate: "Too risky. We aren\'t a BSL-4 lab. Destroy it immediately before mistakes happen."', th: '🔥 เผาทิ้ง: "เสี่ยงไป เราไม่ใช่แล็บ BSL-4 ทำลายทันทีก่อนจะเกิดข้อผิดพลาด"', zh: '🔥 焚烧："太冒险了。我们不是BSL-4实验室。在发生错误之前立即销毁它。"' }, consequence: { en: '🛡️ Zero Risk. You are safe. But the bacteria spreads in the hospital and kills 20 people because you refused to study it.', th: '🛡️ ความเสี่ยงศูนย์ คุณปลอดภัย แต่แบคทีเรียระบาดในโรงพยาบาลฆ่าคน 20 ศพเพราะคุณปฏิเสธที่จะศึกษามัน', zh: '🛡️ 零风险。你是安全的。但细菌在医院传播并杀死了20人，因为你拒绝研究它。' }, stats: { competence: 20, ethics: 30, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🔬 Solo Mission: "Everyone out. I will handle this sample alone. If anyone gets infected, it will be me."', th: '🔬 ภารกิจเดี่ยว: "ทุกคนออกไป ฉันจะจัดการตัวอย่างนี้คนเดียว ถ้าใครจะติดเชื้อ ให้เป็นฉัน"', zh: '🔬 单人任务："所有人出去。我独自处理这个样本。如果有人被感染，那只能是我。"' }, consequence: { en: '🎖️ Heroic Leadership. You isolate the genome safely. The team respects your bravery. You find a weakness in the cell wall.', th: '🎖️ ภาวะผู้นำฮีโร่ คุณแยกจีโนมได้อย่างปลอดภัย ทีมเคารพความกล้าหาญ คุณจุดอ่อนที่ผนังเซลล์', zh: '🎖️ 英雄般的领导力。你安全地分离了基因组。团队尊重你的勇气。你发现了细胞壁的一个弱点。' }, stats: { competence: 60, ethics: 60, leadership: 70, innovation: 50 } },
            { id: 'C', text: { en: '📢 Crowd-Source: "Send samples to 10 other labs. Distributed computing. We need a solution FAST."', th: '📢 ระดมสมอง: "ส่งตัวอย่างให้ 10 แล็บอื่น กระจายงาน เราต้องการคำตอบด่วนที่สุด"', zh: '📢 众包："将样本发送给其他10个实验室。分布式计算。我们需要尽快找到解决方案。"' }, consequence: { en: '🎲 Spread Risk. One of the other labs has a leak. It spreads. You are blamed for distributing a biohazard unnecessarily.', th: '🎲 กระจายความเสี่ยง แล็บอื่นทำหลุด มันระบาด คุณโดนด่าว่าแจกจ่ายเชื้ออันตรายโดยไม่จำเป็น', zh: '🎲 扩散风险。其他实验室之一发生了泄漏。它传播开了。你因不必要地分发生物危害而受到指责。' }, stats: { competence: 30, ethics: 20, leadership: -20, innovation: 20 } },
            { id: 'D', text: { en: '💊 Phage Therapy: "Antibiotics are dead. Try bacteriophages (viruses that eat bacteria). It\'s old Soviet tech, but it might work."', th: '💊 ฟาจบำบัด: "ยาปฏิชีวนะตายแล้ว ลองแบคทีริโอฟาจ (ไวรัสกินแบคทีเรีย) เทคโนโลยีโซเวียตเก่า แต่เอาจได้ผล"', zh: '💊 噬菌体疗法："抗生素已经死路一条。试试噬菌体（吃细菌的病毒）。这是苏联的老技术，但可能有效。"' }, consequence: { en: '🚀 Ancient Innovation. It works! You revive a forgotten field of medicine. The Superbug is eaten alive. Massive breakthrough.', th: '🚀 นวัตกรรมโบราณ ได้ผล! คุณฟื้นฟูศาสตร์การแพทย์ที่ถูกลืม ซุปเปอร์บั๊กโดนกินเรียบ การค้นพบครั้งยิ่งใหญ่', zh: '🚀 古老的创新。有效！你复兴了一个被遗忘的医学领域。超级细菌被活活吃掉。巨大的突破。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 80 } }
        ]
    }
    ,
    {
        id: 'med_researcher_015',
        text: {
            en: '🎯 The Billionaire\'s Deadline: A tech mogul with a terminal illness offers your lab a $50M "unrestricted gift" if you fast-track his experimental treatment. He bypasses FDA safety protocols. He has 6 months to live.',
            th: '🎯 เส้นตายมหาเศรษฐี: เจ้าพ่อเทคโนโลยีที่ป่วยระยะสุดท้ายเสนอ "เงินให้เปล่า" $50M แก่แล็บของคุณ ถ้าคุณเร่งการรักษาทดลองให้เขา เขาข้ามขั้นตอนความปลอดภัย FDA เขามีเวลาเหลือ 6 เดือน',
            zh: '🎯 亿万富翁的最后期限：一位患有绝症的科技大亨提出，如果你能加快他的实验性治疗，他将向你的实验室提供5000万美元的"无限制赠款"。他绕过了FDA的安全协议。他只有6个月的生命了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💊 Emergency Access: "Give him the drug. It\'s his life, his risk. The $50M will fund cures for millions."',
                    th: '💊 การเข้าถึงฉุกเฉิน: "ให้ยาเขาไป มันคือชีวิตเขา ความเสี่ยงของเขา เงิน $50M จะช่วยวิจัยรักษาคนได้อีกนับล้าน"',
                    zh: '💊 紧急使用权："给他药。这是他的生命，他的风险。这5000万美元将资助数百万人的治疗。"'
                },
                consequence: {
                    en: '⚖️ High Stakes. He survives for 2 years, and the funding transforms your lab. But critics call you a "mercenary doctor."',
                    th: '⚖️ เดิมพันสูงเขารอดไปได้ 2 ปี และเงินทุนเปลี่ยนโฉมแล็บคุณ แต่ผู้วิจารณ์เรียกคุณว่า "หมอรับจ้าง"',
                    zh: '⚖️ 高风险。他存活了2年，资金彻底改变了你的实验室。但批评者称你为"雇佣兵医生"。'
                },
                stats: { competence: 50, ethics: -30, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Strict Protocol: "No. We cannot skip safety phases. If he dies, he dies. The rules exist to protect the many."',
                    th: '🚫 โปรโตคอลเข้มงวด: "ไม่ เราข้ามขั้นตอนความปลอดภัยไม่ได้ ถ้าเขาตายก็คือตาย กฎมีไว้เพื่อปกป้องคนหมู่มาก"',
                    zh: '🚫 严格协议："不。我们不能跳过安全阶段。如果他死了，那是命。规则的存在是为了保护大多数人。"'
                },
                consequence: {
                    en: '⚰️ Tragic Integrity. He dies 4 months later. You miss the funding, but the FDA commends your unwavering standards.',
                    th: '⚰️ ความซื่อสัตย์ที่น่าเศร้า เขาเสียชีวิตใน 4 เดือนต่อมา คุณพลาดเงินทุน แต่ FDA ยกย่องมาตรฐานที่มั่นคงของคุณ',
                    zh: '⚰️ 悲剧性的正直。他在4个月后去世。你错过了资助，但FDA赞扬你不可动摇的标准。'
                },
                stats: { competence: 40, ethics: 70, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Compassionate Use Plea: "Apply for FDA \'Compassionate Use\' status. It takes time we don\'t have, but it\'s legal."',
                    th: '⚖️ ขอใช้สิทธิ์เมตตาธรรม: "ยื่นขอสถานะ \'Compassionate Use\' กับ FDA มันใช้เวลาที่เราแทบไม่มี แต่มันถูกกฎหมาย"',
                    zh: '⚖️ 同情使用抗辩："申请FDA的\'同情使用\'地位。这需要我们没有的时间，但它是合法的。"'
                },
                consequence: {
                    en: '🐢 Bureaucratic Race. Approval comes days before he slips into a coma. It\'s too late. You did it right, but it feels wrong.',
                    th: '🐢 การแข่งกับระบบราชการ อนุมัติมาไม่กี่วันก่อนเขาโคม่า มันสายไป คุณทำถูกแล้ว แต่รู้สึกผิด',
                    zh: '🐢 官僚竞赛。批准在他陷入昏迷前几天才下来。太晚了。你做得很对，但感觉不对。'
                },
                stats: { competence: 50, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Public Refusal: "Reject the money publicly. Send a message that science is not for sale to the highest bidder."',
                    th: '📢 ปฏิเสธออกสื่อ: "ปฏิเสธเงินอย่างเปิดเผย ส่งสารว่าวิทยาศาสตร์ไม่ได้มีไว้ขายให้คนให้ราคาสูงสุด"',
                    zh: '📢 公开拒绝："公开拒绝这笔钱。传达一个信息：科学不会卖给出价最高的人。"'
                },
                consequence: {
                    en: '🛡️ Moral Icon. You become the face of ethical science. Donations from the public pour in, though less than $50M.',
                    th: '🛡️ ไอคอนจริยธรรม คุณกลายเป็นหน้าตาของวิทย์ที่มีจริยธรรม เงินบริจาคจากประชาชนหลั่งไหลมา แม้จะไม่ถึง $50M',
                    zh: '🛡️ 道德偶像。你成为伦理科学的代言人。公众的捐款蜂拥而至，虽然少于5000万美元。'
                },
                stats: { competence: 30, ethics: 80, leadership: 60, innovation: 10 }
            }
        ]
    },
    {
        id: 'med_researcher_016',
        text: {
            en: '🌍 The Data Hostage: A rival lab possesses the genetic sequence you need to complete your vaccine. They refuse to share it unless you list their Director as the lead author on your paper, despite them doing none of the work.',
            th: '🌍 ตัวประกันข้อมูล: แล็บคู่แข่งมีรหัสพันธุกรรมที่คุณต้องใช้ทำวัคซีน พวกเขาไม่ยอมแชร์นอกจากคุณจะใส่ชื่อผอ.เขาเป็นผู้แต่งหลัก แม้พวกเขาจะไม่ได้ทำงานเลยก็ตาม',
            zh: '🌍 数据人质：一个竞争对手的实验室拥有你完成疫苗所需的基因序列。他们拒绝分享，除非你将他们的主任列为论文的主要作者，尽管他们没有做任何工作。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Add them as Co-Author: "Fine. Put his name on it. The vaccine is more important than academic credit. Let\'s get this done."',
                    th: '🤝 ใส่ชื่อไป: "ก็ได้ ใส่ชื่อเขาไป วัคซีนสำคัญกว่าเครดิตวิชาการ ทำให้มันจบๆ ไป"',
                    zh: '🤝 添加他们为共同作者："好吧。把他的名字加上。疫苗比学术声誉更重要。让我们完成这项工作。"'
                },
                consequence: {
                    en: '📈 Shared Glory. The paper is a hit. He takes most of the credit at conferences. You grind your teeth but the science advances.',
                    th: '📈 แบ่งปันความรุ่งโรจน์ เปเปอร์ดังระเบิด เขาแย่งเครดิตไปหมดในงานประชุม คุณกัดฟันทนแต่วิทยาศาสตร์ก้าวหน้า',
                    zh: '📈 共享荣耀。这篇论文很轰动。他在会议上抢走了大部分功劳。你咬牙切齿，但科学进步了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🧪 Reproduce Data Yourself: "I won\'t be bullied. We will sequence it ourselves. It will take 6 extra months, but it will be OURS."',
                    th: '🧪 ทำข้อมูลเองใหม่: "ฉันจะไม่ยอมโดนรังแก เราจะถอดรหัสเอง เสียเวลาเพิ่ม 6 เดือน แต่มันจะเป็นของเรา"',
                    zh: '🧪 自己重现数据："我不会被欺负。我们将自己进行测序。这需要由额外6个月，但它将属于我们。"'
                },
                consequence: {
                    en: '🐢 The Honorable Slog. You are scooped. Another lab publishes a similar vaccine while you were re-doing work. You kept your pride but lost the race.',
                    th: '🐢 งานหนักอย่างมีเกียรติ คุณโดนปาดหน้า แล็บอื่นตีพิมพ์วัคซีนคล้ายกันตอนคุณกำลังทำงานซ้ำ คุณรักษาศักดิ์ศรีแต่แพ้การแข่งขัน',
                    zh: '🐢 光荣的苦干。你被抢先了。当你重做工作时，另一个实验室发布了类似的疫苗。你保住了尊严但输掉了比赛。'
                },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '📢 Public Shaming: "Tweet the email exchange. \'Dr. X is holding lifesaving data hostage for authorship.\' Let the internet decide."',
                    th: '📢 ประจาน: "ทวีตอีเมลโต้ตอบ \'ดร.X จับข้อมูลช่วยชีวิตเป็นตัวประกันแลกชื่อ\' ให้ชาวเน็ตตัดสิน"',
                    zh: '📢 公开羞辱："在推特上发布邮件往来。\'X博士为了署名权扣押救命数据。\'让互联网来决定。"'
                },
                consequence: {
                    en: '🔥 Scorched Earth. The internet destroys him. He releases the data to save face. You have made a powerful enemy for life.',
                    th: '🔥 แผดเผา ชาวเน็ตรุมสับเขาเละ เขายอมปล่อยข้อมูลเพื่อรักษาหน้า คุณสร้างศัตรูตัวฉกาจไปตลอดชีวิต',
                    zh: '🔥 焦土政策。互联网摧毁了他。为了挽回面子，他发布了数据。你树立了一个终身的强敌。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ The Trade: "Offer him unpublished data from our failed Alzheimer\'s study in exchange. A secret trade of assets."',
                    th: '🕵️ การแลกเปลี่ยน: "เสนอข้อมูลที่ไม่ได้ตีพิมพ์ของการศึกษาอัลไซเมอร์ที่ล้มเหลวของเราให้แลกกัน การแลกเปลี่ยนลับๆ"',
                    zh: '🕵️ 交易："用我们失败的阿尔茨海默症研究中未发表的数据作为交换。资产的秘密交易。"'
                },
                consequence: {
                    en: '🤝 Shadow Alliance. You get the data. You now have a channel for backroom deals. Useful, but shady.',
                    th: '🤝 พันธมิตรเงา คุณได้ข้อมูล ตอนนี้คุณมีช่องทางดีลหลังฉาก มีประโยชน์ แต่ไม่ขาวสะอาด',
                    zh: '🤝 影子联盟。你得到了数据。你现在有了一个幕后交易的渠道。有用，但不可告人。'
                },
                stats: { competence: 60, ethics: 20, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'med_researcher_017',
        text: {
            en: '🧪 The Silent Contaminant: You discover that a reagent used in your lab for the past 2 years was contaminated. This means 50+ published papers might be invalid. Retracting them would destroy the careers of 10 PhD students.',
            th: '🧪 สารปนเปื้อนเงียบ: คุณพบว่าสารเคมีที่ใช้ในแล็บมา 2 ปีมีการปนเปื้อน แปลว่าเปเปอร์ 50+ ฉบับอาจใช้ไม่ได้ การถอนมันจะทำลายอาชีพของนักศึกษา ป.เอก 10 คน',
            zh: '🧪 沉默的污染物：你发现实验室过去2年使用的一种试剂被污染了。这意味着50多篇已发表的论文可能是无效的。撤回这些论文将毁掉10名博士生的职业生涯。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Mass Retraction: "Integrity is non-negotiable. Retract every single paper. We apologize and start over. It\'s the only way."',
                    th: '📢 ถอนขนานใหญ่: "ความซื่อสัตย์ต่อรองไม่ได้ ถอนเปเปอร์ทุกฉบับ เราขอโทษและเริ่มใหม่ มันเป็นทางเดียว"',
                    zh: '📢 大规模撤稿："诚信是不可谈判的。撤回每一篇论文。我们道歉并重新开始。这是唯一的办法。"'
                },
                consequence: {
                    en: '💣 Nuclear Option. The lab is decimated. Students leave in tears. But you become a legend of scientific honesty. Funding returns slowly.',
                    th: '💣 ทางเลือกนิวเคลียร์ แล็บพังพินาศ นักศึกษาร้องไห้ลาออก แต่คุณกลายเป็นตำนานแห่งความซื่อสัตย์ เงินทุนค่อยๆ กลับมา',
                    zh: '💣 核选项。实验室遭到重创。学生含泪离开。但你成为了科学诚实的传奇。资金慢慢回流。'
                },
                stats: { competence: 50, ethics: 90, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Selective Fix: "Only retract the ones where the contamination changed the conclusion. Let the negligible errors slide regarding the others."',
                    th: '🤫 เลือกแก้: "ถอนเฉพาะอันที่การปนเปื้อนเปลี่ยนผลสรุป อันที่ error นิดหน่อยปล่อยผ่านไป"',
                    zh: '🤫 选择性修复："只撤回那些污染改变了结论的论文。让其他论文中可忽略的错误过去。"'
                },
                consequence: {
                    en: '🤐 Calculated Risk. You save most of the papers. But years later, someone runs a meta-analysis and finds the anomalies. Scandal ensues.',
                    th: '🤐 ความเสี่ยงที่คำนวณไว้ คุณรักษาเปเปอร์ส่วนใหญ่ไว้ได้ แต่หลายปีต่อมา มีคนทำ Meta-analysis แล้วเจอความผิดปกติ สแกนดัลตามมา',
                    zh: '🤐 经过计算的风险。你保住了大部分论文。但多年后，有人进行了一项荟萃分析并发现了异常。丑闻随之而来。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Sue the Vendor: "Shift the blame. Sue the chemical supplier publicly. Announce that our results are \'under review\' due to their negligence."',
                    th: '⚖️ ฟ้องคนขาย: "โยนความผิด ฟ้องซัพพลายเออร์ออกสื่อ ประกาศว่าผลลัพธ์เรา \'กำลังตรวจสอบ\' เพราะความสะเพร่าของพวกเขา"',
                    zh: '⚖️ 起诉供应商："推卸责任。公开起诉化学品供应商。宣布由于他们的疏忽，我们的结果\'正在审查中\'。"'
                },
                consequence: {
                    en: '🛡️ Deflection Shield. You distract the community with a legal drama. It buys time, but doesn\'t fix the bad science floating around.',
                    th: '🛡️ โล่ปัดป้อง คุณเบี่ยงเบนความสนใจด้วยดราม่ากฎหมาย ซื้อเวลาได้ แต่ไม่ได้แก้วิทยาศาสตร์ผิดๆ ที่ลอยอยู่ในวงการ',
                    zh: '🛡️ 偏转盾牌。你用一出法律大戏转移了社区的注意力。这争取了时间，但并没有解决四处流传的伪科学。'
                },
                stats: { competence: 30, ethics: 40, leadership: 50, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Re-Test Consortium: "Keep the papers up for now. Massive overtime to replicate key findings. Retract only if we can\'t reproduce."',
                    th: '🤝 รวมพลังทดสอบซ้ำ: "ค้างเปเปอร์ไว้ก่อน ทำโอทีหนักเพื่อทดสอบผลลัพธ์หลักซ้ำ ถอนเฉพาะอันที่ทำซ้ำไม่ได้จริงๆ"',
                    zh: '🤝 重测联盟："暂时保留论文。大规模加班以复制关键发现。只有在我们无法重现的情况下才撤稿。"'
                },
                consequence: {
                    en: '💪 Exhausting Victory. The team sleeps in the lab for months. You save 80% of the work honestly. A management feat.',
                    th: '💪 ชัยชนะที่เหนื่อยยาก ทีมนอนราบเป็นเดือน คุณรักษาผลงานได้ 80% อย่างซื่อสัตย์ ความสำเร็จทางการบริหาร',
                    zh: '💪 筋疲力尽的胜利。团队在实验室睡了几个月。你诚实地挽救了80%的工作。一项管理壮举。'
                },
                stats: { competence: 60, ethics: 70, leadership: 80, innovation: 40 }
            }
        ]
    },
    {
        id: 'med_researcher_018',
        text: {
            en: '👨‍⚕️ The Desperate Plea: A terminal cancer patient begs to see the raw data of your study. It showed only 5% success in mice and caused liver failure in 20%. She has 2 weeks to live and wants "hope."',
            th: '👨‍⚕️ คำร้องขอที่สิ้นหวัง: ผู้ป่วยมะเร็งระยะสุดท้ายขอดูข้อมูลดิบของคุณ มันสำเร็จแค่ 5% ในหนูและทำตับพัง 20% เธอเหลือเวลา 2 อาทิตย์และต้องการ "ความหวัง"',
            zh: '👨‍⚕️ 绝望的恳求：一名晚期癌症患者恳求查看你研究的原始数据。它在老鼠身上只有5%的成功率，并导致20%的老鼠肝衰竭。她只有2周的生命，她想要"希望"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📂 Show All Data: "Here is the raw data. It\'s likely to kill you faster. But you have a right to know the truth."',
                    th: '📂 ให้ดูหมด: "นี่คือข้อมูลดิบ มันน่าจะฆ่าคุณเร็วกว่าเดิม แต่คุณมีสิทธิ์รู้ความจริง"',
                    zh: '📂 展示所有数据："这是原始数据。它可能会让你死得更快。但你有权知道真相。"'
                },
                consequence: {
                    en: '💔 Cruel Reality. She reads it and weeps. She spends her final days depressed instead of hopeful. But you respected her autonomy.',
                    th: '💔 ความจริงที่โหดร้าย เธออ่านแล้วร้องไห้ เธอใช้วันสุดท้ายอย่างหดหู่แทนที่จะมีความหวัง แต่คุณเคารพการตัดสินใจของเธอ',
                    zh: '💔 残酷的现实。她读了之后哭了。她在抑郁而不是希望中度过了最后的日子。但你尊重了她的自主权。'
                },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Kindly Refuse: "I cannot share unchecked data. It would be irresponsible. Please spend this time with your family."',
                    th: '🚫 ปฏิเสธอย่างนุ่มนวล: "หมอแชร์ข้อมูลที่ยังไม่ตรวจสอบไม่ได้ มันไม่รับผิดชอบ โปรดใช้เวลานี้กับครอบครัวเถอะ"',
                    zh: '🚫 善意拒绝："我不能分享未经核实的数据。那是不负责任的。请把这段时间留给家人。" '
                },
                consequence: {
                    en: '🕊️ Gentle Letdown. She is angry at first, but eventually accepts peace. You bore the burden of being the "bad guy" to save her peace.',
                    th: '🕊️ การปล่อยวาง เธอโกรธตอนแรก แต่สุดท้ายก็จากไปอย่างสงบ คุณยอมรับบท "คนใจร้าย" เพื่อรักษาความสงบให้เธอ',
                    zh: '🕊️ 温柔的失望。起初她很生气，但最终接受了平静。为了挽救她的平静，你背负了做"坏人"的负担。'
                },
                stats: { competence: 40, ethics: 70, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '💊 Compassionate Use Trial: "We can try it under strict supervision. It\'s a hail mary, but if you sign the waivers, we proceed."',
                    th: '💊 ทดลองใช้เพื่อมนุษยธรรม: "เราลองได้ภายใต้การดูแลเข้มงวด มันเสี่ยงมาก แต่ถ้าเซ็นยินยอม เราก็มาลองกัน"',
                    zh: '💊 同情用药试验："我们可以在严格监督下尝试。这即使孤注一掷，但如果你签署弃权书，我们就继续。"'
                },
                consequence: {
                    en: '⚕️ Medical Hazard. She dies of liver failure in 3 days. It was painful. You wonder if you just hastened her death.',
                    th: '⚕️ อันตรายทางการแพทย์ เธอตายเพราะตับวายใน 3 วัน มันเจ็บปวด คุณสงสัยว่าคุณแค่เร่งให้เธอตายเร็วขึ้นรึเปล่า',
                    zh: '⚕️ 医疗隐患。她在3天后死于肝衰竭。那是痛苦的。你怀疑自己是否只是加速了她的死亡。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Refer to Oncologist: "I am a researcher, not a clinician. I will forward everything to your doctor and let them decide."',
                    th: '🤝 ส่งต่อหมอมะเร็ง: "ผมเป็นนักวิจัย ไม่ใช่หมอรักษา ผมจะส่งข้อมูลให้หมอของคุณให้เขาตัดสินใจ"',
                    zh: '🤝 转介给肿瘤科医生："我是研究员，不是临床医生。我会把所有东西转给你的医生，让他们决定。"'
                },
                consequence: {
                    en: '🛡️ Professional Boundary. The oncologist advises against it. You followed the chain of command and avoided malpractice.',
                    th: '🛡️ ขอบเขตมืออาชีพ หมอมะเร็งแนะนำว่าอย่าทำ คุณทำตามสายงานและเลี่ยงการทำผิดมาตรฐานแพทย์',
                    zh: '🛡️ 专业界限。肿瘤科医生建议不要这样做。你遵循了指挥链，避免了医疗事故。'
                },
                stats: { competence: 60, ethics: 50, leadership: 30, innovation: 10 }
            }
        ]
    },
    {
        id: 'med_researcher_019',
        text: {
            en: '🎤 The Viral Distort: A popular health podcast misinterprets your study, claiming "Coffee Cures Diabetes!" (It doesn\'t). Millions are now stopping their meds to drink espresso. Your inbox is exploding.',
            th: '🎤 ไวรัลบิดเบือน: พอดแคสต์สุขภาพดังตีความงานวิจัยคุณผิด อ้างว่า "กาแฟรักษาเบาหวาน!" (ไม่จริง) คนล้านคนหยุดกินยามาซดเอสเพรสโซ่ กล่องข้อความคุณระเบิดแล้ว',
            zh: '🎤 病毒式歪曲：一个流行的健康播客曲解了你的研究，声称"咖啡能治愈糖尿病！"（并没有）。数百万人现在停止服药去喝浓缩咖啡。你的收件箱爆炸了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Immediate Correction: "Issue a press release NOW. \'DO NOT STOP YOUR MEDS.\' Contact the podcast and demand a retraction."',
                    th: '📢 แก้ด่วน: "ออกแถลงการณ์เดี๋ยวนี้ \'อย่า-หยุด-ยา\' ติดต่อพอดแคสต์ให้แก้ข่าว"',
                    zh: '📢 立即更正："立即发布新闻稿。\'不要停药。\'联系播客并要求撤回。"'
                },
                consequence: {
                    en: '🛡️ Damage Control. The podcast fans attack you as a "Big Pharma Shill." But you saved lives. Integrity intact.',
                    th: '🛡️ ควบคุมความเสียหาย แฟนคลับพอดแคสต์รุมด่าว่าคุณเป็น "ขี้ข้าบริษัทยา" แต่คุณช่วยชีวิตคน ความซื่อสัตย์ยังอยู่ครบ',
                    zh: '🛡️ 损害控制。播客粉丝攻击你是"大型制药公司的托儿"。但你拯救了生命。正直完好无损。'
                },
                stats: { competence: 50, ethics: 80, leadership: 60, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Ignore It: "They are idiots. It will blow over in a week. Responding only gives them more attention."',
                    th: '🤐 ช่างมัน: "พวกงี่เง่า เดี๋ยวอาทิตย์เดียวก็หาย การไปตอบโต้เท่ากับให้แสงพวกเขา"',
                    zh: '🤐 忽略它："他们是白痴。一周后就会平息。回应只会引起更多关注。"'
                },
                consequence: {
                    en: '🚑 Emergency Spike. Closets ERs report diabetic comas. A lawyer sues you for "ambiguous communication." It did not blow over.',
                    th: '🚑 ยอดฉุกเฉินพุ่ง ห้องฉุกเฉินรายงานคนเป็นลมเบาหวานพุ่ง ทนายฟ้องคุณฐาน "สื่อสารกำกวม" มันไม่หายไปเอง',
                    zh: '🚑 急诊激增。最近的急诊室报告糖尿病昏迷病例。律师起诉你"沟通含糊"。事情并没有平息。'
                },
                stats: { competence: 20, ethics: -40, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤳 Educational Pivot: "Start a TikTok channel reacting to the bad science. Use the hype to teach mechanism of action."',
                    th: '🤳 พลิกวิกฤตเป็นความรู้: "เปิดช่อง TikTok รีแอคใส่วิทย์มั่วๆ อาศัยกระแสนี้สอนกลไกการออกฤทธิ์จริงๆ ไปเลย"',
                    zh: '🤳 教育转向："开一个TikTok频道反驳伪科学。利用炒作来教授作用机制。"'
                },
                consequence: {
                    en: '✨ Influencer Scientist. You get 1M followers. The misinformation stops, and you have a new platform for future grants.',
                    th: '✨ อินฟลูฯ สายวิทย์ ผู้ติดตาม 1 ล้าน ข้อมูลมั่วหยุดไป และคุณมีแพลตฟอร์มใหม่ไว้ขอทุนในอนาคต',
                    zh: '✨ 网红科学家。你有了100万粉丝。错误信息停止了，你为未来的资助有了一个新平台。'
                },
                stats: { competence: 60, ethics: 60, leadership: 70, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '🤑 Launch "Dr. Coffee" Course: "If they want coffee, sell them the \'Correct\' coffee reporting. Profit from the idiocy."',
                    th: '🤑 เปิดคอร์ส "หมอกาแฟ": "ถ้าอยากกินกาแฟ ก็ขายรายงานกาแฟ \'ที่ถูกต้อง\' ให้เลย หากินกับความโง่ซะ"',
                    zh: '🤑 推出"咖啡博士"课程："如果他们想要咖啡，就卖给他们\'正确\'的咖啡报告。从愚蠢中获利。"'
                },
                consequence: {
                    en: '💰 Moral Bankruptcy. You make $200k in a week. The university revokes your tenure. You are now a grifter.',
                    th: '💰 ล้มละลายทางศีลธรรม คุณได้เงิน $200k ในอาทิตย์เดียว มหาลัยยึดตำแหน่งถาวร ตอนนี้คุณคือนักต้มตุ๋น',
                    zh: '💰 道德沦丧。你一周赚了20万美元。大学撤销了你的终身教职。你现在是个骗子。'
                },
                stats: { competence: 30, ethics: -80, leadership: 20, innovation: 40 }
            }
        ]
    },
    {
        id: 'med_researcher_020',
        text: {
            en: '🧠 The Burnout Crisis: Your most brilliant post-doc hasn\'t slept in 3 days. She\'s hallucinating data patterns. If she stops, the experiment fails. If she continues, she might crack.',
            th: '🧠 วิกฤตหมดไฟ: โพสต์ด็อกที่เก่งที่สุดของคุณไม่ได้นอนมา 3 วัน เธอเริ่มเห็นภาพหลอนในข้อมูล ถ้าเธอหยุด การทดลองล่ม ถ้าทำต่อ เธออาจสติแตก',
            zh: '🧠 倦怠危机：你最杰出的博士后已经3天没睡了。她出现了数据模式的幻觉。如果她停止，实验就会失败。如果她继续，她可能会崩溃。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Mandatory Leave: "Pack your bags. Go home. Sleep for 48 hours. I don\'t care about the data; I care about you."',
                    th: '🛑 บังคับลา: "เก็บของ กลับบ้านไปนอน 48 ชม. ฉันไม่สนข้อมูล ฉันสนตัวเธอ"',
                    zh: '🛑 强制休假："收拾行李。回家。睡48小时。我不在乎数据；我在乎你。"'
                },
                consequence: {
                    en: '❤️ A Life Saved. The experiment is ruined ($10k loss). But she returns refreshed and loyal for life. You built a human culture.',
                    th: '❤️ หนึ่งชีวิตที่รักษาไว้ การทดลองพัง (เสีย $10k) แต่เธอกลับมาสดใสและภักดีตลอดไป คุณสร้างวัฒนธรรมของความเป็นมนุษย์',
                    zh: '❤️ 挽救生命。实验毁了（损失1万美元）。但她精神焕发地回来了，终身忠诚。你建立了人性化的文化。'
                },
                stats: { competence: 40, ethics: 80, leadership: 90, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '☕ Push Her: "We are at the finish line. Here is an energy drink. Just 6 more hours. You can sleep when you\'re famous."',
                    th: '☕ เค้นให้สุด: "เราจะเข้าเส้นชัยแล้ว เอานี่ เครื่องดื่มชูกำลัง อีกแค่ 6 ชม. ไว้ไปนอนตอนดังแล้ว"',
                    zh: '☕ 逼她一把："我们就在终点线了。这是能量饮料。再坚持6小时。成名后再睡。"'
                },
                consequence: {
                    en: '🏥 Psychotic Break. She finishes the data, then collapses. She is hospitalized for exhaustion and quits science forever.',
                    th: '🏥 สติแตก เธอทำข้อมูลเสร็จแล้วล้มตึง ต้องเข้าโรงพยาบาลเพราะร่างกายรับไม่ไหว และลาออกจากวงการวิทย์ถาวร',
                    zh: '🏥 精神崩溃。她完成了数据，然后倒下了。她因过度劳累住院，并永远退出了科学界。'
                },
                stats: { competence: 50, ethics: -60, leadership: -50, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Tag Team: "I\'ll take over. Give me your notes. Go sleep on the couch in the office if you refuse to leave."',
                    th: '🤝 แท็กทีม: "ฉันทำต่อเอง เอาโน้ตมา ไปนอนที่โซฟาในออฟฟิศซะถ้าดื้อจะไม่กลับบ้าน"',
                    zh: '🤝 接力："我来接手。把笔记给我。如果你不肯走，就去办公室的沙发上睡。"'
                },
                consequence: {
                    en: '📉 Quality Dip. You aren\'t as skilled as her at this specific task. The data is messy, but usable. Nobody dies.',
                    th: '📉 คุณภาพตก คุณไม่เก่งเท่าเธอในงานเฉพาะนี้ ข้อมูลจะเละหน่อย แต่ใช้ได้ ไม่มีใครตาย',
                    zh: '📉 质量下降。在这项具体任务上你不如她熟练。数据很混乱，但可以使用。没人死。'
                },
                stats: { competence: 40, ethics: 60, leadership: 70, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '💊 Suggest "Enhancement": "Look the other way while implying that \'smart drugs\' (Adderall) might help her focus."',
                    th: '💊 แนะนำ "ตัวช่วย": "ทำเป็นมองไม่เห็นแล้วเปรยๆ ว่า \'ยาขยัน\' (Adderall) อาจช่วยให้มีสมาธินะ"',
                    zh: '💊 建议"增强"："睁只眼闭只眼，暗示\'聪明药\'（阿德拉）可能有助于她集中注意力。"'
                },
                consequence: {
                    en: '💊 Addiction. She gets through the week but develops a dependency. It eventually ruins her career. You were the enabler.',
                    th: '💊 การเสพติด เธอรอดสัปดาห์นั้นมาได้แต่ติดยา สุดท้ายอาชีพพัง คุณเองที่เป็นคนส่งเสริม',
                    zh: '💊 上瘾。她熬过了一周，但产生了依赖性。这最终毁了她的职业生涯。你是推波助澜者。'
                },
                stats: { competence: 30, ethics: -50, leadership: -40, innovation: 10 }
            }
        ]
    },
    {
        id: 'med_researcher_021',
        text: {
            en: '💰 Grant Fraud: Your co-investigator, a famous professor, has been falsifying budget reports. He\'s using grant money to fund his personal "conferences" in Hawaii. You find the fake receipts.',
            th: '💰 ฉ้อโกงทุน: ผู้ร่วมวิจัยของคุณ ศาสตราจารย์ชื่อดัง ปลอมแปลงรายงานงบประมาณ เขาใช้เงินทุนไปจัด "การประชุม" ส่วนตัวที่ฮาวาย คุณเจอใบเสร็จปลอม',
            zh: '💰 拨款欺诈：你的合作研究员，一位著名的教授，一直在伪造预算报告。他利用拨款资助他在夏威夷的个人"会议"。你发现了伪造的收据。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Report Immediately: "This is embezzlement. Go straight to the University Oversight Committee. Hand over the evidence."',
                    th: '🚨 รายงานทันที: "นี่มันยักยอกทรัพย์ ไปหาคณะกรรมการตรวจสอบของมหาวิทยาลัย ส่งหลักฐานให้หมด"',
                    zh: '🚨 立即报告："这是挪用公款。直接去大学监督委员会。移交证据。"'
                },
                consequence: {
                    en: '⚖️ Justice Served. The lab is frozen during the investigation. You lose funding for 2 years, but your integrity is ironclad.',
                    th: '⚖️ ความยุติธรรมทำงาน แล็บถูกอายัดระหว่างสอบสวน คุณเสียทุนไป 2 ปี แต่ความซื่อสัตย์ของคุณแข็งแกร่งดั่งเหล็ก',
                    zh: '⚖️ 伸张正义。实验室在调查期间被冻结。你失去了2年的资助，但你的正直是铁板钉钉的。'
                },
                stats: { competence: 40, ethics: 80, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🙈 Ignore It: "He brings in millions. If he goes down, we all go down. Pretend you never saw the receipts."',
                    th: '🙈 ทำเป็นไม่เห็น: "เขาหาเงินเข้าได้เป็นล้าน ถ้าเขาล้ม เราก็ล้มหมด แกล้งทำเป็นไม่เห็นใบเสร็จพวกนั้นซะ"',
                    zh: '🙈 忽略它："他带来了数百万资金。如果他倒下了，我们都会倒下。假装你从未见过收据。"'
                },
                consequence: {
                    en: '🔗 Complicity. An external audit catches him 6 months later. You are implicated as an accomplice. Banned from federal grants.',
                    th: '🔗 สมรู้ร่วมคิด ผู้ตรวจสอบภายนอกจับเขาได้ใน 6 เดือนต่อมา คุณโดนหางเลขว่าเป็นผู้สมรู้ร่วมคิด โดนแบนจากทุนรัฐบาล',
                    zh: '🔗 同谋。6个月后，外部审计抓住了他。你被牵连为同谋。被禁止申请联邦拨款。'
                },
                stats: { competence: 20, ethics: -70, leadership: -50, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 Private Confrontation: "Confront him privately. \'Pay it back, or I blow the whistle.\' Force him to fix it quietly."',
                    th: '🤫 เคลียร์ส่วนตัว: "เผชิญหน้าส่วนตัว \'จ่ายคืนซะ ไม่งั้นฉันเป่านกหวีด\' บังคับให้เขาแก้ปัญหาเงียบๆ"',
                    zh: '🤫 私下对质："私下与他对质。\'还钱，否则我就揭发。\'强迫他悄悄解决。"'
                },
                consequence: {
                    en: '🤝 Unsteady Truce. He pays it back, terrified. But he resents you and badmouths you to other PIs behind your back.',
                    th: '🤝 การพักรบที่สั่นคลอน เขาจ่ายคืนด้วยความกลัว แต่เขาแค้นคุณและนินทาคุณให้ PI คนอื่นฟังลับหลัง',
                    zh: '🤝 不稳定的休战。他害怕地还了钱。但他怨恨你，并在背后向其他PI说你坏话。'
                },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Anonymous Tip: "Mail the receipts to the audit office with no return address. Watch the fireworks from a safe distance."',
                    th: '🕵️ แจ้งเบาะแสไม่ระบุชื่อ: "ส่งใบเสร็จไปที่สำนักงานตรวจสอบแบบไม่ระบุผู้ส่ง ดูดอกไม้ไฟจากระยะปลอดภัย"',
                    zh: '🕵️ 匿名举报："将收据邮寄给审计办公室，不留回信地址。在安全距离观看烟火。"'
                },
                consequence: {
                    en: '☁️ Cloud of Suspicion. The investigation starts. Everyone in the lab suspects everyone else. Morale tanks, but you are safe.',
                    th: '☁️ เมฆหมอกแห่งความสงสัย การสอบสวนเริ่มขึ้น ทุกคนในแล็บระแวงกันเอง ขวัญกำลังใจตกต่ำ แต่คุณปลอดภัย',
                    zh: '☁️ 疑云密布。调查开始了。实验室里的每个人都怀疑其他人。士气低落，但你是安全的。'
                },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: 10 }
            }
        ]
    },
    {
        id: 'med_researcher_022',
        text: {
            en: '🧬 CRISPR Dilemma: Country X has approved germline editing on human embryos (designer babies). They offer you $20M and full immunity to lead their new institute. It is illegal in your home country.',
            th: '🧬 ปัญหา CRISPR: ประเทศ X อนุมัติการตัดต่อพันธุกรรมในตัวอ่อนมนุษย์ (ทารกสั่งทำ) เขาเสนอ $20M และอภิสิทธิ์เต็มที่ให้คุณไปนำสถาบันใหม่ ผิดกฎหมายในประเทศคุณ',
            zh: '🧬 CRISPR困境：X国已批准对人类胚胎进行种系编辑（设计婴儿）。他们提供2000万美元和完全豁免权让你领导他们的新研究所。这在你的祖国是非法的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✈️ Accept and Relocate: "Science has no borders. If I don\'t do it, someone less qualified will. I will write history."',
                    th: '✈️ รับและย้าย: "วิทยาศาสตร์ไร้พรมแดน ถ้าฉันไม่ทำ คนที่เก่งน้อยกว่าก็จะทำ ฉันจะจารึกประวัติศาสตร์"',
                    zh: '✈️ 接受并搬迁："科学无国界。如果我不做，资质较差的人也会做。我将书写历史。"'
                },
                consequence: {
                    en: '🌍 Global Outcast. You make a breakthrough, but the Western scientific community excommunicates you. History remembers you as a villain.',
                    th: '🌍 แกะดำโลก คุณค้นพบครั้งใหญ่ แต่วงการวิทย์ตะวันตกตัดขาดคุณ ประวัติศาสตร์จารึกว่าคุณเป็นวายร้าย',
                    zh: '🌍 全球弃儿。你取得了突破，但西方科学界将你逐出教会。历史把你记作恶棍。'
                },
                stats: { competence: 60, ethics: -60, leadership: 40, innovation: 90 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Decline Firmly: "Some lines should never be crossed. Playing God is not in my job description. Reject the offer."',
                    th: '🚫 ปฏิเสธเสียงแข็ง: "เส้นบางเส้นไม่ควรข้าม การเล่นบทพระเจ้าไม่อยู่ในหน้าที่ฉัน ปฏิเสธข้อเสนอ"',
                    zh: '🚫 坚决拒绝："有些底线永远不应逾越。扮演上帝不在我的工作职责范围内。拒绝提议。"'
                },
                consequence: {
                    en: '😴 Clear Conscience. You sleep well at night. Six months later, you read about a horrific failed experiment in Country X.',
                    th: '😴 สบายใจ คุณหลับสบาย อีก 6 เดือนต่อมา คุณอ่านข่าวการทดลองล้มเหลวสุดสยองในประเทศ X',
                    zh: '😴 问心无愧。你晚上睡得很香。六个月后，你读到了关于X国一次可怕的失败实验。'
                },
                stats: { competence: 30, ethics: 70, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📜 Join Ethics Board: "Decline leading, but offer to join their ethics board to establish safety protocols. A middle ground."',
                    th: '📜 เข้าบอร์ดจริยธรรม: "ปฏิเสธการนำ แต่ขอเข้าบอร์ดจริยธรรมเพื่อสร้างโปรโตคอลความปลอดภัย ทางสายกลาง"',
                    zh: '📜 加入道德委员会："拒绝领导，但提议加入他们的道德委员会以建立安全协议。中间立场。"'
                },
                consequence: {
                    en: '⚖️ The Regulator. You prevent the worst disasters. Progress is slow, but you save lives from being mere experiments.',
                    th: '⚖️ ผู้คุมกฎ คุณป้องกันหายนะร้ายแรงที่สุด ความก้าวหน้าช้า แต่คุณช่วยชีวิตจากการเป็นแค่หนูทดลอง',
                    zh: '⚖️ 监管者。你阻止了最严重的灾难。进展缓慢，但你拯救了生命免于仅仅成为实验品。'
                },
                stats: { competence: 50, ethics: 60, leadership: 70, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ Leak to Media: "Accept the initial meeting, record everything, and leak it to the New York Times. Expose their dangerous plans."',
                    th: '🗣️ แฉสื่อ: "รับนัดแรก อัดเสียงทุกอย่าง แล้วปล่อยให้ New York Times แฉแผนอันตรายของพวกเขา"',
                    zh: '🗣️ 向媒体泄露："接受初步会议，记录一切，然后泄露给《纽约时报》。揭露他们的危险计划。"'
                },
                consequence: {
                    en: '🕵️ Spy Games. The program is cancelled due to international pressure. You are blacklisted by Country X forever.',
                    th: '🕵️ เกมจารชน โครงการถูกยกเลิกเพราะแรงกดดันระหว่างประเทศ คุณโดนประเทศ X ขึ้นบัญชีดำตลอดชีพ',
                    zh: '🕵️ 间谍游戏。该项目因国际压力而取消。你被X国永久列入黑名单。'
                },
                stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'med_researcher_023',
        text: {
            en: '📊 The P-Hacking Temptation: Your study on a new heart drug returned p=0.06 (not significant). If you remove 3 "outlier" patients who had the flu, it becomes p=0.04 (significant). Publication depends on this.',
            th: '📊 สิ่งล่อใจค่า P: งานวิจัยยาหัวใจตัวใหม่ได้ค่า p=0.06 (ไม่มีนัยสำคัญ) ถ้าคุณตัดผู้ป่วย "ตัวแปร" 3 คนที่เป็นไข้หวัดออก ค่าจะเหลือ p=0.04 (มีนัยสำคัญ) การตีพิมพ์ขึ้นอยู่กับสิ่งนี้',
            zh: '📊 P值的诱惑：你关于一种新心脏药物的研究返回p=0.06（不显著）。如果你删除3名患流感的"异常"患者，它变为p=0.04（显著）。发表取决于此。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✂️ Remove Outliers: "They had the flu! It confounded the data. Remove them and publish. The drug clearly works."',
                    th: '✂️ ตัดตัวแปร: "พวกเขาเป็นไข้หวัด! มันกวนข้อมูล เอาออกแล้วตีพิมพ์ ยามันได้ผลชัดๆ"',
                    zh: '✂️ 删除异常值："他们得了流感！这混淆了数据。删除他们并发布。这种药显然有效。"'
                },
                consequence: {
                    en: '🤥 The Glass House. Paper accepted in Nature. But other labs fail to replicate it. Whispers of fraud follow you.',
                    th: '🤥 บ้านกระจก ตีพิมพ์ใน Nature แต่แล็บอื่นทำซ้ำไม่ได้ เสียงนินทาว่าโกงตามติดคุณ',
                    zh: '🤥 玻璃屋。论文被《自然》接受。但其他实验室无法复制它。欺诈的传言跟随着你。'
                },
                stats: { competence: 40, ethics: -50, leadership: 20, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '📉 Publish Null Result: "Honesty is science. Publish the p=0.06. Negative results are still results."',
                    th: '📉 ตีพิมพ์ผลศูนย์: "ความซื่อสัตย์คือวิทยาศาสตร์ ตีพิมพ์ p=0.06 ผลเป็นลบก็คือผลลัพธ์"',
                    zh: '📉 发布无效结果："诚实就是科学。发布p=0.06。负面结果仍然是结果。"'
                },
                consequence: {
                    en: '🗑️ The Rejection. Top journals reject it. You publish in a low-tier journal. You sleep well, but your tenure file looks thin.',
                    th: '🗑️ การถูกปฏิเสธ วารสารดังปฏิเสธ ลงวารสารเกรดรอง คุณหลับสบาย แต่แฟ้มผลงานขอตำแหน่งดูบางเบา',
                    zh: '🗑️ 被拒。顶级期刊拒绝了它。你在低级别期刊上发表。你睡得很香，但你的终身教职档案看起来很单薄。'
                },
                stats: { competence: 50, ethics: 70, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Pre-Register New Study: "This data is suggestive, not conclusive. Pre-register a new, larger trial to confirm strictly."',
                    th: '🔄 ลงทะเบียนวิจัยใหม่: "ข้อมูลนี้แค่ชี้แนะ ไม่ฟันธง ลงทะเบียนทดลองใหม่ที่ใหญ่ขึ้นเพื่อยืนยันอย่างเข้มงวด"',
                    zh: '🔄 预注册新研究："这个数据是提示性的，不是结论性的。预注册一个新的、更大规模的试验来严格确认。"'
                },
                consequence: {
                    en: '🏅 The Gold Standard. It takes 2 more years. The new study confirms the drug works wonderfully. You are hailed as a rigorous leader.',
                    th: '🏅 มาตรฐานทองคำ ใช้เวลาอีก 2 ปี การศึกษาใหม่ยืนยันว่ายาได้ผลยอดเยี่ยม คุณได้รับยกย่องว่าเป็นผู้นำที่เข้มงวด',
                    zh: '🏅 黄金标准。又花了2年时间。新研究证实该药物效果奇佳。你被誉为严谨的领导者。'
                },
                stats: { competence: 60, ethics: 80, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤔 Ask PI: "Defer to your boss. \'Here is the data. Do we cut the flu patients?\' Let him take the fall."',
                    th: '🤔 ถามหัวหน้า: "โยนให้หัวหน้า \'นี่ข้อมูลครับ เราตัดคนเป็นหวัดออกไหม?\' ให้เขารับผิดชอบ"',
                    zh: '🤔 问导师："听从你老板的意见。\'这是数据。我们要剔除流感患者吗？\'让他承担责任。"'
                },
                consequence: {
                    en: '🐑 Just Following Orders. He says delete. You do it. You learn how to cheat from the best.',
                    th: '🐑 แค่ทำตามคำสั่ง เขาบอกให้ลบ คุณก็ทำ คุณเรียนรู้วิธีโกงจากยอดฝีมือ',
                    zh: '🐑 只是奉命行事。他说删除。你做了。你向最优秀的人学会了如何作弊。'
                },
                stats: { competence: 30, ethics: 20, leadership: -20, innovation: 10 }
            }
        ]
    },
    {
        id: 'med_researcher_024',
        text: {
            en: '🎭 The Double Agent: A massive Pharma Corp offers you a $200k/year "consultancy" role. It requires minimal work, but you must not disparage their drugs in your university lectures. You are currently teaching Pharmacology.',
            th: '🎭 สายลับสองหน้า: บริษัทยายักษ์ใหญ่เสนอตำแหน่ง "ที่ปรึกษา" $200k/ปี งานน้อยมาก แต่คุณห้ามว่าร้ายยาของเขาในการสอนในมหาลัย ตอนนี้คุณสอนวิชาเภสัชวิทยาอยู่',
            zh: '🎭 双重间谍：一家大型制药公司为你提供年薪20万美元的"顾问"职位。工作量极小，但你不得在大学讲座中贬低他们的药物。你目前正在教授药理学。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📝 Accept & Disclose: "Take the money, but disclose the conflict of interest on slide 1 of every lecture. Transparency is key."',
                    th: '📝 รับและแจ้ง: "รับเงิน แต่แจ้งผลประโยชน์ทับซ้อนในสไลด์แรกทุกคาบ ความโปร่งใสคือหัวใจ"',
                    zh: '📝 接受并披露："拿钱，但在每次讲座的第一张幻灯片上披露利益冲突。透明度是关键。"'
                },
                consequence: {
                    en: '🤝 Managed Conflict. The university approves. Students are skeptical of your lectures on that company\'s drugs, but you are rich.',
                    th: '🤝 จัดการความขัดแย้ง มหาลัยอนุมัติ นักศึกษาสงสัยเวลาคุณสอนเรื่องยาบริษัทนั้น แต่คุณรวย',
                    zh: '🤝 管理冲突。大学批准了。学生们对你以此公司药物的讲座持怀疑态度，但你有钱了。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Accept & Hide: "Who will know? I just won\'t mention the side effects of their blockbuster drug. Easy money."',
                    th: '🤫 รับและซ่อน: "ใครจะรู้? ฉันก็แค่ไม่พูดถึงผลข้างเคียงของยาตัวดังของเขา เงินง่ายๆ"',
                    zh: '🤫 接受并隐瞒："谁会知道？我只是不提他们畅销药的副作用。容易赚的钱。"'
                },
                consequence: {
                    en: '🔥 Fireable Offense. A student records your lecture and cross-references it with your tax returns (leaked). You are fired.',
                    th: '🔥 ความผิดไล่ออก นักศึกษาอัดเสียงคุณแล้วไปเทียบกับภาษี (ที่หลุดมา) คุณโดนไล่ออก',
                    zh: '🔥 可解雇的罪行。一名学生录下了你的讲座，并将其与你的纳税申报单（泄露）进行核对。你被解雇了。'
                },
                stats: { competence: 40, ethics: -70, leadership: -40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🚫 Decline on Principle: "I cannot serve two masters. My duty is to my students and the truth. Keep your money."',
                    th: '🚫 ปฏิเสธด้วยหลักการ: "ข้าสองเจ้าบ่าวสองนายไม่ได้ หน้าที่ฉันคือต่อตัวนักศึกษาและความจริง เก็บเงินคุณไปเถอะ"',
                    zh: '🚫 原则上拒绝："我不能侍奉两个主子。我的责任是面对我的学生和真理。留着你的钱吧。"'
                },
                consequence: {
                    en: '🛡️ Academic Pureblood. You struggle with a mortgage, but your students trust you implicitly. You win a "Teacher of the Year" award.',
                    th: '🛡️ เลือดแท้วิชาการ คุณลำบากเรื่องผ่อนบ้าน แต่นักศึกษาเชื่อใจคุณหมดใจ คุณได้รางวัล "ครูดีเด่น"',
                    zh: '🛡️ 学术纯血统。你在为抵押贷款挣扎，但你的学生绝对信任你。你赢得了"年度教师"奖。'
                },
                stats: { competence: 40, ethics: 80, leadership: 40, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📈 Negotiate Stock Options: "Cash is taxable. Give me equity. If the drug succeeds, I want a piece of the pie."',
                    th: '📈 ต่อรองหุ้น: "เงินสดเสียภาษี ขอหุ้นแทน ถ้ายาปัง ฉันขอส่วนแบ่งด้วย"',
                    zh: '📈 谈判股票期权："现金要收税。给我股权。如果药物成功，我要分一杯羹。"'
                },
                consequence: {
                    en: '🎰 The Gambler. You are now financially invested in their success. Your bias becomes unconscious but powerful. Scientific blindness.',
                    th: '🎰 นักพนัน ตอนนี้คุณลงเรือลำเดียวกับเขาแล้ว อคติคุณทำงานโดยไม่รู้ตัวแต่มรุนแรง ตาบอดทางวิทย์',
                    zh: '🎰 赌徒。你现在在经济上投资于他们的成功。你的偏见变得无意识但强大。科学盲目。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 60 }
            }
        ]
    },
    {
        id: 'med_researcher_025',
        text: {
            en: '🔥 The Lab Fire: A malfunctioning sprinkler destroys $500k of samples. It was university negligence. However, you could claim $800k in damages to upgrade your equipment if you "adjust" the inventory list.',
            th: '🔥 ไฟไหม้แล็บ: สปริงเกอร์พังทำลายตัวอย่างมูลค่า $500k เป็นความสะเพร่าของมหาลัย แต่คุณเคลมค่าเสียหายได้ $800k เพื่ออัปเกรดอุปกรณ์ถ้าคุณ "แก้" รายการของ',
            zh: '🔥 实验室火灾：故障的喷淋毁坏了价值50万美元的样品。这是大学的疏忽。然而，如果你"调整"库存清单，你可以索赔80万美元的损失来升级你的设备。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤥 Claim Inflated Amount: "The university owes us for this mess. Pad the list. We need that new microscope."',
                    th: '🤥 เคลมเกินจริง: "มหาลัยติดหนี้เราจากเรื่องเละเทะนี้ เพิ่มรายการไป เราต้องใช้กล้องจุลทรรศน์ใหม่"',
                    zh: '🤥 索赔夸大金额："大学因这个烂摊子欠我们的。虚报清单。我们需要那台新显微镜。"'
                },
                consequence: {
                    en: '🕵️ Fraud Buster. Insurance investigators are thorough. They find the discrepancy. You face potential criminal fraud charges.',
                    th: '🕵️ มือปราบโกง นักสืบประกันละเอียดมาก เขาเจอความไม่ตรงกัน คุณเสี่ยงโดนคดีฉ้อโกง',
                    zh: '🕵️ 欺诈克星。保险调查员很彻底。他们发现了差异。你面临潜在的刑事欺诈指控。'
                },
                stats: { competence: 30, ethics: -40, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '📝 Accurate Claim: "List exactly what was lost. Integrity is worth more than a fancy microscope."',
                    th: '📝 เคลมตามจริง: "ลิสต์ไปตามที่หายจริง ความซื่อสัตย์มีค่ามากกว่ากล้องหรูๆ"',
                    zh: '📝 准确索赔："列出确切丢失的物品。诚信比昂贵的显微镜更值钱。"'
                },
                consequence: {
                    en: '🏗️ Slow Rebuild. You get exactly enough to replace what was lost. Work resumes. You sleep soundly.',
                    th: '🏗️ สร้างใหม่ช้าๆ คุณได้เงินพอดีของที่หาย งานเดินต่อ หลับสบาย',
                    zh: '🏗️ 缓慢重建。你得到的钱正好够重置丢失的物品。工作恢复。你睡得很安稳。'
                },
                stats: { competence: 50, ethics: 70, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '📢 Fundraise Instead: "Use the disaster for PR. \'Save our Science!\' Crowdfund the repairs and upgrades from alumni."',
                    th: '📢 ระดมทุนแทน: "ใช้วิกฤตทำ PR \'ช่วยวิทย์เราด้วย!\' ระดมทุนซ่อมและอัปเกรดจากศิษย์เก่า"',
                    zh: '📢 改为筹款："利用灾难进行公关。\'拯救我们的科学！\'向校友众筹维修和升级费用。"'
                },
                consequence: {
                    en: '🚀 Community Boost. Alumni love a sob story. You raise $1M legally. The lab is better than ever.',
                    th: '🚀 แรงหนุนชุมชน ศิษย์เก่าชอบเรื่องน่าเห็นใจ คุณระดมทุนได้ $1M อย่างถูกกฎหมาย แล็บเจ๋งกว่าเดิม',
                    zh: '🚀 社区推动。校友们喜欢悲情故事。你合法筹集了100万美元。实验室前所未有的好。'
                },
                stats: { competence: 40, ethics: 60, leadership: 70, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '⚖️ Blame Maintenance: "Sues the maintenance department personaly. Go to war with the university facilities team."',
                    th: '⚖️ โทษซ่อมบำรุง: "ฟ้องแผนกซ่อมบำรุงส่วนตัว ประกาศสงครามกับทีมอาคารสถานที่"',
                    zh: '⚖️ 怪罪维护部门："亲自起诉维护部门。与大学设施团队开战。"'
                },
                consequence: {
                    en: '🧱 Stonewalled. The facilities team now delays every repair in your lab by 3 weeks. Retaliation is subtle and painful.',
                    th: '🧱 โดนดอง ทีมอาคารตอนนี้ดึงเรื่องซ่อมทุกอย่างในแล็บคุณไป 3 อาทิตย์ การแก้แค้นที่แนบเนียนและเจ็บปวด',
                    zh: '🧱 受阻。设施团队现在将你实验室的每次维修推迟3周。报复是微妙而痛苦的。'
                },
                stats: { competence: 30, ethics: -30, leadership: -20, innovation: 10 }
            }
        ]
    },
    {
        id: 'med_researcher_026',
        text: {
            en: '🌐 The Paywall Dilemma: A top-tier journal (Impact Factor 50) accepts your paper but demands a $5,000 Article Processing Charge (APC) to make it Open Access. You have $0 left in your grant.',
            th: '🌐 ปัญหา Paywall: วารสารชั้นนำ (Impact Factor 50) ยอมรับเปเปอร์ของคุณ แต่เรียกเก็บค่าดำเนินการ $5,000 เพื่อให้เป็น Open Access เงินทุนคุณเหลือ $0',
            zh: '🌐 付费墙困境：一家顶级期刊（影响因子50）接受了你的论文，但要求支付5000美元的文章处理费（APC）以实现开放获取。你的资助金剩0元。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💸 Pay from Own Pocket: "Use your personal savings. The public funded this research; they deserve to read it for free."',
                    th: '💸 จ่ายเอง: "ใช้เงินเก็บส่วนตัว ประชาชนจ่ายภาษีให้งานวิจัยนี้ เขาควรได้อ่านฟรี"',
                    zh: '💸 自掏腰包："动用你的个人积蓄。公众资助了这项研究；他们理应免费阅读。"'
                },
                consequence: {
                    en: '🔓 Global Access. Your paper is cited by everyone from doctors to high schoolers. You are broke but influential.',
                    th: '🔓 เข้าถึงได้ทั่วโลก เปเปอร์คุณถูกอ้างอิงโดยทุกคนตั้งแต่หมอยันเด็กมัธยม คุณถังแตกแต่มีอิทธิพล',
                    zh: '🔓 全球访问。你的论文被从医生到高中生的所有人引用。你破产了但有影响力。'
                },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🔒 Paywall It: "Let the journal lock it behind a $35/article paywall. Institutions will subscribe anyway."',
                    th: '🔒 ติด Paywall: "ให้วารสารล็อคมันไว้หลังกำแพง $35/บทความ สถาบันต่างๆ ก็บอกรับสมาชิกอยู่แล้ว"',
                    zh: '🔒 设付费墙："让期刊把它锁在35美元/篇的付费墙后。反正机构会订阅的。"'
                },
                consequence: {
                    en: '🚫 Restricted Knowledge. Only wealthy universities can read your work. Developing nations are left in the dark.',
                    th: '🚫 ความรู้ถูกจำกัด เฉพาะมหาลัยรวยๆ เท่านั้นที่อ่านงานคุณได้ ประเทศกำลังพัฒนาถูกทิ้งให้มืดมน',
                    zh: '🚫 受限知识。只有富有的大学才能阅读你的作品。发展中国家被蒙在鼓里。'
                },
                stats: { competence: 40, ethics: -20, leadership: 20, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '📄 Post Green OA: "Publish behind the paywall, but upload the \'Accepted Manuscript\' to a free preprint server legally."',
                    th: '📄 โพสต์ Green OA: "ตีพิมพ์หลัง Paywall แต่อัปโหลด \'ฉบับรับตีพิมพ์\' ขึ้นเซิร์ฟเวอร์ฟรีอย่างถูกกฎหมาย"',
                    zh: '📄 发布绿色OA："在付费墙后发表，但合法地将\'已接受手稿\'上传到免费预印本服务器。"'
                },
                consequence: {
                    en: '🧠 Smart Compromise. You get the prestige and the reach. The journal grumbles but allows it.',
                    th: '🧠 การประนีประนอมฉลาด คุณได้ทั้งเกียรติยศและการเข้าถึง วารสารบ่นอุบแต่ก็ยอม',
                    zh: '🧠 聪明的妥协。你既得到了声望又得到了传播。期刊虽然抱怨但允许了。'
                },
                stats: { competence: 60, ethics: 70, leadership: 50, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🏴‍☠️ Sci-Hub It: "Upload the PDF directly to Sci-Hub or ResearchGate against copyright rules. Information wants to be free."',
                    th: '🏴‍☠️ Sci-Hub เลย: "อัปโหลด PDF ขึ้น Sci-Hub หรือ ResearchGate ทั้งที่ผิดลิขสิทธิ์ ข้อมูลต้องการอิสระ"',
                    zh: '🏴‍☠️ Sci-Hub之："违反版权规则直接将PDF上传到Sci-Hub或ResearchGate。信息渴望自由。"'
                },
                consequence: {
                    en: '⚖️ Copyright Strike. The publisher sends a cease-and-desist. Your university is not amused by the legal threat.',
                    th: '⚖️ ละเมิดลิขสิทธิ์ สำนักพิมพ์ส่งจดหมายเตือน มหาวิทยาลัยไม่ขำกับคำขู่ทางกฎหมาย',
                    zh: '⚖️ 版权打击。出版商发出停止侵权通知。你的大学对法律威胁感到不满。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'med_researcher_027',
        text: {
            en: '💉 Vaccine Hesitancy: Your cousin, an influencer with 100k followers, is posting "Vaccines cause magnetism" myths. She tags you as her source: "My cousin is a scientist and agrees!"',
            th: '💉 ความลังเลวัคซีน: ญาติคุณที่เป็นอินฟลูเอนเซอร์ผู้ติดตาม 100k โพสต์ว่า "วัคซีนทำให้ตัวดูดแม่เหล็ก" และแท็กคุณเป็นแหล่งข้อมูล: "ญาติฉันเป็นนักวิทย์ก็เห็นด้วย!"',
            zh: '💉 疫苗犹豫：你的表亲，一位拥有10万粉丝的网红，正在发布"疫苗导致磁性"的谣言。她标记你为来源："我的表亲是科学家，他也同意！"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Public Rebuttal: "Comment publicly: \'This is false. Vaccines save lives. Please stop spreading misinformation.\' Humiliate her if needed."',
                    th: '📢 โต้แย้งสาธารณะ: "คอมเมนต์ออกสื่อ: \'ไม่จริง วัคซีนช่วยชีวิต หยุดแพร่ข้อมูลเท็จได้แล้ว\' หักหน้าเธอถ้าจำเป็น"',
                    zh: '📢 公开反驳："公开评论：\'这是假的。疫苗拯救生命。请停止传播错误信息。\'如果有必要，羞辱她。"'
                },
                consequence: {
                    en: '⚔️ Family Feud. Your cousin blocks you and turns the family against you. But thousands of followers see the truth.',
                    th: '⚔️ ศึกสายเลือด ญาติบล็อกคุณและยุให้ครอบครัวเกลียดคุณ แต่ผู้ติดตามนับพันได้เห็นความจริง',
                    zh: '⚔️ 家庭不和。你的表亲拉黑了你，并让家人反对你。但成千上万的粉丝看到了真相。'
                },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Private Plea: "DM her softly. \'Please take it down, it undermines my career.\' Avoid public confrontation."',
                    th: '🤫 ขอร้องหลังไมค์: "ทักส่วนตัว \'ลบเถอะ มันกระทบงานฉัน\' เลี่ยงการปะทะหน้าสื่อ"',
                    zh: '🤫 私下恳求："轻声私信她。\'请把它撤下来，这破坏了我的职业生涯。\'避免公开对峙。"'
                },
                consequence: {
                    en: '🙉 Deaf Ears. She ignores you. The post goes viral. Colleagues start asking if you really believe that.',
                    th: '🙉 เข้าหูซ้ายทะลุขวา เธอเพิกเฉย โพสต์ไวรัล เพื่อนร่วมงานเริ่มถามว่าคุณเชื่อแบบนั้นจริงเหรอ',
                    zh: '🙉 充耳不闻。她无视你。帖子疯传。同事开始问你是否真的相信那个。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚨 Report Account: "Report the post to the platform for misinformation. Don\'t engage personally."',
                    th: '🚨 รายงานบัญชี: "กดรายงานโพสต์ให้แพลตฟอร์มฐานข้อมูลเท็จ ไม่ต้องยุ่งเกี่ยวส่วนตัว"',
                    zh: '🚨 举报账户："向平台举报该帖子为虚假信息。不要亲自介入。"'
                },
                consequence: {
                    en: '🚫 Account Ban. Her account is suspended. She calls you crying, blaming \'big pharma censorship\'. You stay silent.',
                    th: '🚫 บัญชีบิน บัญชีเธอถูกระงับ เธอโทรมาแบบร้องไห้ โทษ \'การเซ็นเซอร์ของบริษัทยา\' คุณเงียบกริบ',
                    zh: '🚫 账户封禁。她的账户被暂停。她哭着给你打电话，责怪\'大药厂的审查\'。你保持沉默。'
                },
                stats: { competence: 40, ethics: 60, leadership: 30, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Ignore It: "It\'s just family drama. It will blow over. Block her and focus on your lab work."',
                    th: '🤷 ช่างมัน: "ก็แค่ดราม่าครอบครัว เดี๋ยวก็ผ่านไป บล็อกเธอแล้วโฟกัสงานแล็บ"',
                    zh: '🤷 忽略它："这只是家庭闹剧。会过去的。拉黑她，专注于你的实验室工作。"'
                },
                consequence: {
                    en: '🦠 Silence is Consent. Your silence is interpreted as agreement. Your reputation takes a hit in the scientific community.',
                    th: '🦠 ความเงียบคือการยอมรับ การเงียบของคุณถูกตีความว่าเห็นด้วย ชื่อเสียงคุณเสียหายในวงการวิทย์',
                    zh: '🦠 沉默即同意。你的沉默被解读为同意。你的声誉在科学界受到打击。'
                },
                stats: { competence: 20, ethics: -40, leadership: -20, innovation: 10 }
            }
        ]
    },
    {
        id: 'med_researcher_028',
        text: {
            en: '🏆 The Nobel Feud: Your team\'s discovery is shortlisted for the Nobel Prize. The committee only allows 3 laureates. There are 4 key contributors, including Dr. X, who did the early crucial work but left the lab.',
            th: '🏆 ศึกโนเบล: การค้นพบของทีมคุณเข้ารอบชิงโนเบล คณะกรรมการให้แค่ 3 คน มีผู้มีส่วนร่วมหลัก 4 คน รวมถึง ดร.X ที่ทำส่วนสำคัญช่วงแรกแต่ลาออกไป',
            zh: '🏆 诺贝尔恩怨：你团队的发现入围了诺贝尔奖。委员会只允许3名获奖者。有4名主要贡献者，包括X博士，他做了早期关键工作但离开了实验室。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✂️ Cut Dr. X: "He left. He\'s not part of the team anymore. Submit the current trio. History is written by the victors."',
                    th: '✂️ ตัด Dr. X: "เขาออกไปแล้ว ไม่ใช่คนในทีมแล้ว ส่งชื่อ 3 คนปัจจุบัน ประวัติศาสตร์เขียนโดยผู้ชนะ"',
                    zh: '✂️ 剔除X博士："他离开了。他不再是团队的一部分。提交目前的三人组。历史是由胜利者书写的。"'
                },
                consequence: {
                    en: '🥇 Hollow Victory. You win, but Dr. X writes a book exposing the snub. The scientific community is divided.',
                    th: '🥇 ชัยชนะกลวง คุณชนะ แต่ Dr. X เขียนหนังสือแฉ วงการวิทย์เสียงแตก',
                    zh: '🥇 空洞的胜利。你赢了，但X博士写了一本书揭露冷落。科学界分裂了。'
                },
                stats: { competence: 60, ethics: -50, leadership: 30, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Withdraw Nomination: "All 4 or none. Tell the committee we refuse to accept the prize unless they change the rule."',
                    th: '🤝 ถอนการเสนอชื่อ: "ต้องได้ 4 คนหรือไม่ก็ไม่เอา บอกกรรมการว่าเราไม่รับรางวัลถ้าไม่แก้กฎ"',
                    zh: '🤝 撤回提名："要么4个人要么没有。告诉委员会除非他们改变规则，否则我们拒绝接受奖项。"'
                },
                consequence: {
                    en: '🗿 Principled Legend. The prize goes to someone else. You are remembered as the team that stood for justice.',
                    th: '🗿 ตำนานผู้มีหลักการ รางวัลตกเป็นของคนอื่น คุณถูกจดจำในฐานะทีมที่ยืนหยัดเพื่อความยุติธรรม',
                    zh: '🗿 原则传奇。奖项给了别人。你被铭记为坚持正义的团队。'
                },
                stats: { competence: 50, ethics: 90, leadership: 80, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤔 Rotate Authorship: "Suggest specific wording to the committee to acknowledge Dr. X as a \'co-discoverer\' without the medal."',
                    th: '🤔 หมุนเวียนชื่อ: "เสนอคำพูดเฉพาะให้กรรมการยกย่อง Dr. X ว่าเป็น \'ผู้ร่วมค้นพบ\' แต่ไม่ได้เหรียญ"',
                    zh: '🤔 轮换署名："向委员会建议具体的措辞，承认X博士是\'共同发现者\'，但没有奖章。"'
                },
                consequence: {
                    en: '📜 Diplomatic Solution. Dr. X is bitter but legally acknowledged. You win the prize.',
                    th: '📜 ทางออกทางการทูต Dr. X ขมขื่นแต่ได้รับการยอมรับทางกฎหมาย คุณได้รางวัล',
                    zh: '📜 外交解决方案。X博士很痛苦，但在法律上得到了承认。你赢得了奖项。'
                },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🎲 Draw Straws: "Let luck decide. The loser gets a guaranteed tenure position and 50% of the prize money privately."',
                    th: '🎲 จับไม้สั้นไม้ยาว: "ให้ดวงตัดสิน ผู้แพ้จะได้ตำแหน่ง Tenure และเงินรางวัล 50% แบบลับๆ"',
                    zh: '🎲 抽签："让运气决定。输家私下获得有保障的终身教职和50%的奖金。"'
                },
                consequence: {
                    en: '🤫 The Secret Pact. It works, but the secret hangs over the lab forever. The "loser" watches you with envy.',
                    th: '🤫 สัญญาลับ มันได้ผล แต่ความลับปกคลุมแล็บตลอดไป "ผู้แพ้" มองคุณด้วยความอิจฉา',
                    zh: '🤫 秘密协定。这很有效，但秘密永远笼罩在实验室上方。"输家"嫉妒地看着你。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'med_researcher_029',
        text: {
            en: '🧫 The Swap: You wake up in a cold sweat. You realize you swapped the labels on Patient A and Patient B\'s biopsy samples yesterday. Results differ: one is benign, one is aggressive cancer.',
            th: '🧫 การสลับ: คุณตื่นมาเหงื่อท่วม คุณนึกได้ว่าสลับป้ายชื่อตัวอย่างเนื้อเยื่อคนไข้ A กับ B เมื่อวาน ผลลัพธ์ต่างกัน: คนนึงปกติ อีกคนเป็นมะเร็งรุนแรง',
            zh: '🧫 调换：你在冷汗中醒来。你意识到昨天你把病人A和病人B的活检样本标签贴反了。结果不同：一个是良性的，一个是侵袭性癌症。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📞 Call Immediately: "Call the hospital NOW. Stop the treatment. Admit the mistake. Apologize profusely."',
                    th: '📞 โทรทันที: "โทรหาโรงพยาบาลเดี๋ยวนี้ หยุดการรักษา ยอมรับผิด ขอโทษรัวๆ"',
                    zh: '📞 立即致电："马上给医院打电话。停止治疗。承认错误。再三道歉。"'
                },
                consequence: {
                    en: '🚑 Crisis Averted. The doctors are angry, but the patients are safe. You face a disciplinary hearing, but your conscience is clear.',
                    th: '🚑 ภัยถูกปัดป้อง หมอโกรธ แต่คนไข้ปลอดภัย คุณโดนสอบวินัย แต่ใจคุณสะอาด',
                    zh: '🚑 危机解除。医生很生气，但病人是安全的。你面临纪律听证会，但你问心无愧。'
                },
                stats: { competence: 40, ethics: 80, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Wait and See: "Maybe I didn\'t swap them? Don\'t panic yet. Wait for the confirmation test next week."',
                    th: '🤐 รอดูก่อน: "บางทีฉันอาจไม่ได้สลับ? อย่าเพิ่งตื่นตูม รอผลยืนยันอาทิตย์หน้า"',
                    zh: '🤐 观望："也许我没有弄反？先别慌。等待下周的确认测试。"'
                },
                consequence: {
                    en: '⚰️ Fatal Delay. Patient B starts chemotherapy unnecessarily. Patient A\'s cancer metastasizes. You are sued for malpractice.',
                    th: '⚰️ ความล่าช้าถึงตาย คนไข้ B เริ่มคีโมฟรีๆ คนไข้ A มะเร็งลาม คุณโดนฟ้องฐานประมาทเลินเล่อ',
                    zh: '⚰️ 致命的延误。病人B开始了不必要的化疗。病人A的癌症转移了。你因医疗事故被起诉。'
                },
                stats: { competence: 20, ethics: -90, leadership: -60, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Shift Blame: "Log in and alter the timestamp. Make it look like the technician made the swap after you left."',
                    th: '🕵️ โยนความผิด: "ล็อกอินเข้าไปแก้เวลา ทำให้ดูเหมือนช่างเทคนิคเป็นคนสลับหลังจากคุณกลับไปแล้ว"',
                    zh: '🕵️ 转移视线："登录并更改时间戳。让它看起来像是你离开后技术员弄反的。"'
                },
                consequence: {
                    en: '🎭 The Setup. The technician is fired. You survive, but you live with the guilt of destroying a career.',
                    th: '🎭 การจัดฉาก ช่างเทคนิคโดนไล่ออก คุณรอด แต่ต้องอยู่กับความรู้สึกผิดที่ทำลายอาชีพคนอื่น',
                    zh: '🎭 陷害。技术员被解雇。你活下来了，但你背负着毁掉别人职业生涯的内疚生活。'
                },
                stats: { competence: 30, ethics: -60, leadership: -40, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '📊 Silent Retest: "Rrush to the lab at midnight. Re-run samples. Send \'corrected\' report as a \'system update\' without admitting error."',
                    th: '📊 แอบตรวจแก้: "รีบไปแล็บตอนเที่ยงคืน ตรวจใหม่ ส่งรายงาน \'ฉบับแก้ไข\' อ้างว่าเป็น \'อัปเดตระบบ\' โดยไม่รับผิด"',
                    zh: '📊 沉默重测："午夜冲进实验室。重新运行样本。发送\'更正\'报告作为\'系统更新\'而不承认错误。"'
                },
                consequence: {
                    en: '😰 Close Call. The hospital is confused but accepts the new data. You saved face, but the risk was enormous.',
                    th: '😰 เฉียดตาย โรงพยาบาลงงแต่ก็รับข้อมูลใหม่ คุณรักษาหน้าไว้ได้ แต่ความเสี่ยงมหาศาล',
                    zh: '😰 侥幸脱险。医院很困惑，但接受了新数据。你保住了面子，但风险巨大。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'med_researcher_030',
        text: {
            en: '📚 The Textbook Legacy: You discover a major error in a foundational textbook you wrote 10 years ago. It is used in medical schools globally. Correcting it means admitting you taught incorrect science to a generation.',
            th: '📚 มรดกตำราเรียน: คุณเจอข้อผิดพลาดใหญ่ในตำราพื้นฐานที่คุณเขียนเมื่อ 10 ปีก่อน มันถูกใช้ในโรงเรียนแพทย์ทั่วโลก การแก้แปลว่ายอมรับว่าสอนผิดให้คนทั้งรุ่น',
            zh: '📚 教科书遗产：你在10年前写的一本基础教科书中发现了一个重大错误。它是全球医学院都在使用的教材。纠正它意味着承认你向一代人教授了错误的科学。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Global Errata: "Issue a public correction immediately. Notify all publishers. \'Science corrects itself, and so must I.\'"',
                    th: '📢 แก้ไขทั่วโลก: "ออกประกาศแก้ไขทันที แจ้งสำนักพิมพ์ทั้งหมด \'วิทยาศาสตร์แก้ไขตัวเองได้ ฉันก็ต้องทำได้\'"',
                    zh: '📢 全球勘误："立即发布公开更正。通知所有出版商。\'科学会自我修正，我也必须如此。\'"'
                },
                consequence: {
                    en: '🙇 Professional Humility. It\'s embarrassing, but your honesty boosts your long-term credibility. Sales dip, then recover.',
                    th: '🙇 ความอ่อนน้อมทางวิชาชีพ น่าอายหน่อย แต่ความซื่อสัตย์เพิ่มเครดิตระยะยาว ยอดขายตกแล้วเดี๋ยวก็ขึ้น',
                    zh: '🙇 职业谦逊。这很尴尬，但你的诚实提升了你的长期信誉。销量下降，然后回升。'
                },
                stats: { competence: 40, ethics: 80, leadership: 60, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Quiet Revision: "Fix it in the 12th Edition coming out next year. Don\'t announce it. Old copies will fade away."',
                    th: '🤫 แก้เงียบๆ: "แก้ในพิมพ์ครั้งที่ 12 ปีหน้า ไม่ต้องประกาศ เดี๋ยวเล่มเก่าก็หายไปเอง"',
                    zh: '🤫以此修正："在明年出版的第12版中修正它。不要宣布。旧版本会逐渐消失。"'
                },
                consequence: {
                    en: '🏚️ Lingering Falsehoods. Students using cheap old editions continue to learn the wrong formula. Medical errors occur.',
                    th: '🏚️ ความเท็จที่ยังอยู่ นักเรียนที่ใช้เล่มเก่ามือสองยังเรียนสูตรผิดๆ ต่อไป เกิดความผิดพลาดทางการแพทย์',
                    zh: '🏚️ 挥之不去的谬误。使用廉价旧版本的学生继续学习错误的公式。发生医疗错误。'
                },
                stats: { competence: 30, ethics: -30, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🛡️ Blame the Editor: "Claim it was a printing error introduced by the publisher. \'My manuscript was correct!\' (It wasn\'t)."',
                    th: '🛡️ โทษบรรณาธิการ: "อ้างว่าเป็นความผิดการพิมพ์ของสำนักพิมพ์ \'ต้นฉบับฉันถูกนะ!\' (จริงๆ ไม่ใช่)"',
                    zh: '🛡️ 怪罪编辑："声称这是出版商引入的印刷错误。\'我的手稿是正确的！\'（其实不是）。"'
                },
                consequence: {
                    en: '🤥 Loss of Trust. The publisher leaks your original manuscript proving you wrong. You look petty and dishonest.',
                    th: '🤥 สูญเสียความเชื่อถือ สำนักพิมพ์ปล่อยต้นฉบับจริงแฉคุณ คุณดูใจแคบและไม่ซื่อสัตย์',
                    zh: '🤥 失去信任。出版商泄露了你的原始手稿证明你错了。你显得心胸狭窄且不诚实。'
                },
                stats: { competence: 20, ethics: -60, leadership: -30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🌐 Online Resource: "Create a free website explaining the error and the correct modern approach. Turn it into a teaching moment."',
                    th: '🌐 แหล่งข้อมูลออนไลน์: "สร้างเว็บฟรีอธิบายข้อผิดพลาดและวิธีที่ถูก เปลี่ยนให้เป็นบทเรียน"',
                    zh: '🌐 在线资源："创建一个免费网站解释错误和正确的现代方法。把它变成一个教学时刻。"'
                },
                consequence: {
                    en: '💡 Modern Educator. The website becomes more popular than the book. You are praised for adaptability.',
                    th: '💡 ครูสมัยใหม่ เว็บไซต์ดังกว่าหนังสืออีก คุณได้รับคำชมเรื่องการปรับตัว',
                    zh: '💡 现代教育家。该网站变得比书更受欢迎。你因适应能力强而受到赞扬。'
                },
                stats: { competence: 50, ethics: 70, leadership: 60, innovation: 50 }
            }
        ]
    }

    ,
    {
        id: 'med_researcher_031',
        text: {
            en: '👨‍⚖️ The Expert Witness: A tobacco company Lawyer offers you $50,000/day to testify in a class-action lawsuit. They want you to say there is "insufficient evidence" that their specific additive causes cancer. Technically, the data is ambiguous.',
            th: '👨‍⚖️ พยานผู้เชี่ยวชาญ: ทนายบริษัทบุหรี่เสนอเงิน $50,000/วัน ให้คุณไปเป็นพยานในคดีฟ้องร้องกลุ่ม เขาอยากให้คุณพูดว่า "หลักฐานไม่เพียงพอ" ที่จะบอกว่าสารเติมแต่งของเขาก่อให้เกิดมะเร็ง ซึ่งทางเทคนิคแล้วข้อมูลก็กํากวมจริง',
            zh: '👨‍⚖️ 专家证人：一位烟草公司的律师提供5万美元/天的费用，让你在一起集体诉讼中作证。他们希望你说没有"充分证据"证明他们的特定添加剂会导致癌症。从技术上讲，数据确实模棱两可。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤝 Accept the Offer: "Take the deal. I can testify truthfully about the ambiguity while getting paid. It\'s not a lie."',
                    th: '🤝 รับข้อเสนอ: "รับงาน ฉันสามารถให้การตามจริงเรื่องความกํากวมแถมได้เงิน มันไม่ใช่คำโกหก"',
                    zh: '🤝 接受提议："接受交易。我可以诚实地作证数据的模糊性，同时获得报酬。这不是谎言。"'
                },
                consequence: {
                    en: '💰 Blood Money. You buy a new house. The public sees you as a corporate shill. Your academic reputation tanks.',
                    th: '💰 เงินบาป คุณซื้อบ้านใหม่ สาธารณชนมองว่าคุณเป็นขี้ข้าบริษัท ชื่อเสียงวิชาการพังทลาย',
                    zh: '💰 血汗钱。你买了新房子。公众把你视为企业的托儿。你的学术声誉一落千丈。'
                },
                stats: { competence: 40, ethics: -60, leadership: -20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🙅 Refuse on Principle: "I will not defend an industry that kills millions. Tell them to get lost."',
                    th: '🙅 ปฏิเสธด้วยหลักการ: "ฉันจะไม่ปกป้องอุตสาหกรรมที่ฆ่าคนเป็นล้าน บอกพวกเขาไปให้พ้น"',
                    zh: '🙅 原则上拒绝："我不会为杀害数百万人的行业辩护。让他们滚。"'
                },
                consequence: {
                    en: '🛡️ Integrity Intact. You lose a fortune, but sleep well at night. Anti-smoking groups praise you.',
                    th: '🛡️ รักษาความซื่อสัตย์ คุณเสียโอกาสรวยแต่นอนหลับสบาย กลุ่มต้านบุหรี่ชื่นชมคุณ',
                    zh: '🛡️ 正直无损。你失去了一笔财富，但晚上睡得很香。反吸烟团体赞扬你。'
                },
                stats: { competence: 40, ethics: 80, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Testify for Plaintiffs: "Refuse the company, and offer to testify for the victims instead (for free or standard rate)."',
                    th: '⚖️ ให้การฝ่ายโจทก์: "ปฏิเสธบริษัท และเสนอตัวไปเป็นพยานให้ผู้เสียหายแทน (ฟรีหรือเรตปกติ)"',
                    zh: '⚖️ 为原告作证："拒绝公司，并主动提出为受害者作证（免费或标准费率）。"'
                },
                consequence: {
                    en: '✊ Justice Served. Your testimony helps victims win $100M. The tobacco company hates you.',
                    th: '✊ ความยุติธรรมบังเกิด คำให้การคุณช่วยให้เหยื่อชนะคดี $100M บริษัทบุหรี่เกลียดคุณ',
                    zh: '✊ 伸张正义。你的证词帮助受害者赢得了1亿美元。烟草公司恨你。'
                },
                stats: { competence: 50, ethics: 90, leadership: 60, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Recommend a Colleague: "Pass the offer to Dr. Smith, who loves money. Keep your hands clean but maintain the connection."',
                    th: '🤷 แนะนำเพื่อน: "ส่งงานต่อให้ Dr. Smith ที่ชอบเงิน มือเราสะอาดแต่ยังรักษาสายสัมพันธ์"',
                    zh: '🤷 推荐同事："把提议转给爱钱的史密斯博士。保持双手干净但维持关系。"'
                },
                consequence: {
                    en: '🕸️ The Enabler. Dr. Smith takes the fall. You are seen as complicit by association.',
                    th: '🕸️ ผู้สนับสนุน Dr. Smith รับกรรม คุณถูกมองว่ามีส่วนรู้เห็น',
                    zh: '🕸️ 推动者。史密斯博士背了黑锅。你被视为同谋。'
                },
                stats: { competence: 30, ethics: -20, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'med_researcher_032',
        text: {
            en: '🔬 The Million-Dollar Microscope: Your lab\'s flagship $1M Electron Microscope has a critical failure during a major project. The manufacturer says repairs will take 4 months. A "grey market" engineer offers to fix it in 3 days using unauthorized parts.',
            th: '🔬 กล้องจุลทรรศน์ล้านเหรียญ: กล้องจุลทรรศน์อิเล็กตรอนราคา $1M ของแล็บพังระหว่างโปรเจกต์ใหญ่ ผู้ผลิตบอกซ่อม 4 เดือน ช่าง "ตลาดมืด" เสนอซ่อม 3 วันใช้อะไหล่เทียบ',
            zh: '🔬 百万显微镜：你实验室的旗舰百万美元电子显微镜在重大项目中发生严重故障。制造商说维修需要4个月。一名"灰市"工程师提出用未经授权的零件在3天内修好。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔧 Unauthorized Repair: "Do it. We need data NOW. If it works, nobody needs to know."',
                    th: '🔧 ซ่อมเถื่อน: "ทำเลย เราต้องการข้อมูลเดี๋ยวนี้ ถ้ามันใช้ได้ก็ไม่ต้องมีใครรู้"',
                    zh: '🔧 未授权维修："做吧。我们需要数据。如果能用，没人需要知道。"'
                },
                consequence: {
                    en: '⚡ Short-Term Win, Long-Term Risk. It works perfectly for a month, then melts down. Warranty voided. $200k damage.',
                    th: '⚡ ชนะระยะสั้น เสี่ยงระยะยาว มันใช้ได้ดีเดือนนึงแล้วก็ละลาย ประกันขาด เสียหาย $200k',
                    zh: '⚡ 短期胜利，长期风险。它完美运行了一个月，然后熔毁了。保修失效。20万美元损失。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '⏳ Wait for Official Repair: "Follow protocol. Request a deadline extension for the grant. Safety first."',
                    th: '⏳ รอซ่อมศูนย์: "ตามระเบียบ ยื่นเรื่องขอขยายเวลาทุน ปลอดภัยไว้ก่อน"',
                    zh: '⏳ 等待官方维修："遵循协议。申请延长拨款期限。安全第一。"'
                },
                consequence: {
                    en: '🐢 The Slow Lane. The project is delayed. Competitors might scoop you, but your equipment is safe.',
                    th: '🐢 เลนช้า โปรเจกต์ล่าช้า คู่แข่งอาจชิงตัดหน้า แต่อุปกรณ์ปลอดภัย',
                    zh: '🐢 慢车道。项目延误。竞争对手可能会抢先，但你的设备是安全的。'
                },
                stats: { competence: 30, ethics: 60, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚚 Rent Equipment: "Pay exorbitant fees to rent time at a neighboring university\'s core facility. It blows the budget."',
                    th: '🚚 เช่าเครื่อง: "ยอมจ่ายแพงไปเช่าใช้เครื่องของมหาลัยข้างๆ งบบานปลาย"',
                    zh: '🚚 租用设备："支付高昂费用租用邻近大学核心设施的时间。预算超支。"'
                },
                consequence: {
                    en: '💸 Broke but Published. You get the data on time. You have to fire a summer student to cover costs.',
                    th: '💸 ถังแตกแต่ได้ตีพิมพ์ ได้ข้อมูลทันเวลา แต่ต้องไล่นักศึกษาฝึกงานออกเพื่อโปะค่าใช้จ่าย',
                    zh: '💸 破产但发表。你按时得到了数据。你不得不解雇一名暑期学生来支付费用。'
                },
                stats: { competence: 50, ethics: 50, leadership: 60, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🛠️ Attempt DIY Repair: "I have a PhD in Physics. How hard can it be? Pass me the screwdriver."',
                    th: '🛠️ ลองซ่อมเอง: "ฉันจบเอกฟิสิกส์นะ มันจะยากแค่ไหนกันเชียว ส่งไขควงมา"',
                    zh: '🛠️ 尝试DIY维修："我有物理学博士学位。能有多难？把螺丝刀递给我。"'
                },
                consequence: {
                    en: '💥 Catastrophic Failure. You somehow align the lens backwards and fry the sensor. You are the laughing stock of the department.',
                    th: '💥 พังพินาศ คุณประกอบเลนส์กลับด้านทำเซนเซอร์ไหม้ เป็นตัวตลกของภาควิชา',
                    zh: '💥 灾难性故障。这也行，你把镜头装反了，烧坏了传感器。你是系里的笑柄。'
                },
                stats: { competence: 60, ethics: 20, leadership: -40, innovation: 80 }
            }
        ]
    },
    {
        id: 'med_researcher_033',
        text: {
            en: '🦠 Biohazard Transport Crisis: A courier service drops a container of Biosafety Level 3 (BSL-3) live virus samples in the airport lobby. The seal is cracked but not leaking yet. The courier calls you in panic.',
            th: '🦠 วิกฤตขนส่งเชื้อ: คนส่งของทำกล่องใส่ไวรัสระดับ 3 (BSL-3) ตกในล็อบบี้สนามบิน ซีลแตกแต่ยังไม่รั่ว เขาโทรหาคุณด้วยความตื่นตระหนก',
            zh: '🦠 生物危害运输危机：快递服务将一箱生物安全3级（BSL-3）活病毒样本掉在机场大厅。密封破裂但尚未泄漏。快递员惊慌失措地给你打电话。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤐 Deny Involvement: "I don\'t know you. Throw it in the trash and leave." (Leave no trace)',
                    th: '🤐 ปฏิเสธความเกี่ยวข้อง: "ฉันไม่รู้จักคุณ ทิ้งมันลงถังขยะแล้วหนีไปซะ" (ไม่ทิ้งร่องรอย)',
                    zh: '🤐 否认参与："我不认识你。把它扔进垃圾桶然后离开。"（不留痕迹）'
                },
                consequence: {
                    en: '☣️ Outbreak Risk. The virus eventually leaks in the landfill. FBI traces the strain to your lab. Prison time.',
                    th: '☣️ เสี่ยงระบาด ไวรัสรั่วในบ่อขยะ FBI ตามสืบสายพันธุ์มาถึงแล็บคุณ คุกแน่นอน',
                    zh: '☣️ 爆发风险。病毒最终在垃圾填埋场泄漏。FBI追踪毒株到你的实验室。入狱。'
                },
                stats: { competence: 20, ethics: -90, leadership: -50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '📞 Coordinate Cleanup: "Stay clear of people. I am calling the Hazmat team and the CDC right now. Do not touch it."',
                    th: '📞 ประสานงานทำความสะอาด: "อยู่ห่างคนอื่น ฉันจะโทรหาทีมวัตถุอันตรายและ CDC เดี๋ยวนี้ ห้ามแตะมัน"',
                    zh: '📞 协调清理："远离人群。我现在就给危化品小组和疾控中心打电话。别碰它。"'
                },
                consequence: {
                    en: '👮 Controlled Response. The airport is evacuated. You face a $50k fine for improper packaging, but no one dies.',
                    th: '👮 คุมสถานการณ์ สนามบินถูกอพยพ คุณโดนปรับ $50k ฐานแพ็คของไม่ดี แต่ไม่มีใครตาย',
                    zh: '👮 受控响应。机场被疏散。你因包装不当面临5万美元罚款，但没人死亡。'
                },
                stats: { competence: 40, ethics: 60, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🚗 Personal Intervention: "I\'m driving there now with a containment kit. I can fix this faster than the government."',
                    th: '🚗 บุกไปเอง: "ฉันจะขับรถไปเดี๋ยวนี้พร้อมชุดกู้ภัย ฉันจัดการได้เร็วกว่ารัฐบาลแน่"',
                    zh: '🚗 亲自干预："我现在带着遏制工具包开车过去。我比政府处理得更快。"'
                },
                consequence: {
                    en: '🦸 Dangerous Heroism. You secure the sample, but you are exposed. You spend 3 weeks in quarantine.',
                    th: '🦸 ฮีโร่อันตราย คุณเก็บกู้สำเร็จ แต่สัมผัสเชื้อ ต้องกักตัว 3 อาทิตย์',
                    zh: '🦸 危险的英雄主义。你固定了样本，但你暴露了。你在隔离区待了3周。'
                },
                stats: { competence: 50, ethics: 60, leadership: 70, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📰 Alert the Media: "Post it on Twitter to warn people at the airport. Safety through transparency!"',
                    th: '📰 แจ้งสื่อ: "โพสต์ลง Twitter เตือนคนในสนามบิน ปลอดภัยด้วยความโปร่งใส!"',
                    zh: '📰 提醒媒体："发推特警告机场的人。通过透明度确保安全！"'
                },
                consequence: {
                    en: '😱 Mass Panic. A stampede injures 20 people. Authorities blame you for inciting chaos.',
                    th: '😱 ตื่นตระหนกหมู่ คนเหยียบกันเจ็บ 20 คน ทางการโทษว่าคุณปลุกปั่น',
                    zh: '😱 大规模恐慌。踩踏事故造成20人受伤。当局指责你煽动混乱。'
                },
                stats: { competence: 30, ethics: 30, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'med_researcher_034',
        text: {
            en: '📝 The Ghostwriter: A pharmaceutical company offers you $20,000 to put your name as "Lead Author" on a review paper written entirely by their marketing department. It subtly promotes their new drug.',
            th: '📝 ผีเขียน: บริษัทยาเสนอเงิน $20,000 ให้คุณใส่ชื่อเป็น "ผู้เขียนหลัก" ในบทความทบทวนวรรณกรรมที่ทีมการตลาดเขาเขียนเองทั้งหมด มันแอบเชียร์ยาใหม่ของเขา',
            zh: '📝 代笔：一家制药公司提供2万美元，让你在他们营销部门全权撰写的综述论文上署名为"主要作者"。它巧妙地推广了他们的新药。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🖋️ Sign It: "Easy money. I\'ll just skim it to make sure there are no obvious errors. Everyone does it."',
                    th: '🖋️ เซ็นไป: "เงินง่ายๆ เดี๋ยวอ่านผ่านๆ ให้แน่ใจว่าไม่มีคำผิดชัดๆ ใครๆ ก็ทำกัน"',
                    zh: '🖋️ 签了它："快钱。我就略读一下确保没有明显错误。大家都这么做。"'
                },
                consequence: {
                    en: '🤥 sold Out. The paper helps the drug sell. Later, side effects emerge, and you are sued as the "author".',
                    th: '🤥 ขายวิญญาณ เปเปอร์ช่วยยาขายดี วันหลังมีผลข้างเคียงโผล่ คุณโดนฟ้องในฐานะ "ผู้แต่ง"',
                    zh: '🤥 出卖。论文帮助药物销售。后来，副作用出现了，你作为"作者"被起诉。'
                },
                stats: { competence: 30, ethics: -60, leadership: -20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '📝 Major Rewrite: "I accept the topic but I delete their text and write my own unbiased review. Keep the fee?"',
                    th: '📝 เขียนใหม่หมด: "รับหัวข้อแต่ลบเนื้อหาเขาทิ้ง เขียนรีวิวเป็นกลางเอง เก็บค่าเรื่องไว้ได้ไหม?"',
                    zh: '📝 重大重写："我接受这个话题，但我删除他们的文本，写我自己的公正评论。保留费用？"'
                },
                consequence: {
                    en: '🚫 Contract Breached. The company hates your honest review and pulls the paper. You get nothing.',
                    th: '🚫 ผิดสัญญา บริษัทเกลียดรีวิวตรงไปตรงมาของคุณและถอนเปเปอร์ ไม่ได้อะไรเลย',
                    zh: '🚫 违约。公司讨厌你的诚实评论并撤回了论文。你一无所获。'
                },
                stats: { competence: 50, ethics: 70, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Strict Refusal: "Ghostwriting is academic misconduct. I am reporting this offer to the journal editors."',
                    th: '🛑 ปฏิเสธเด็ดขาด: "การรับจ้างใส่ชื่อคือการประพฤติผิดทางวิชาการ ฉันจะรายงานเรื่องนี้ให้บรรณาธิการวารสารทราบ"',
                    zh: '🛑 严词拒绝："代笔是学术不端行为。我会向期刊编辑报告这个提议。"'
                },
                consequence: {
                    en: '✨ Whistleblower. You burn a bridge with Big Pharma, but earn immense respect from peers.',
                    th: '✨ ผู้เปิดโปง คุณแตกหักกับบริษัทยาใหญ่ แต่ได้ความเคารพมหาศาลจากเพื่อนร่วมงาน',
                    zh: '✨ 举报人。你烧毁了与大药厂的桥梁，但赢得了同行的极大尊重。'
                },
                stats: { competence: 40, ethics: 90, leadership: 50, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🔽 Pass to Junior: "I\'m too busy, but my postdoc needs publications. I\'ll introduce you." (Plausible deniability)',
                    th: '🔽 โยนให้ลูกน้อง: "ฉันยุ่งมาก แต่โพสต์ด็อกฉันต้องการผลงาน เดี๋ยวแนะนำให้" (ปัดความรับผิดชอบ)',
                    zh: '🔽 转给大三："我太忙了，但我的博后需要发表文章。我会介绍你们。"（推诿责任）'
                },
                consequence: {
                    en: '🥀 Corrupting Youth. Your postdoc takes the bait. Their career starts with a lie. You failed as a mentor.',
                    th: '🥀 ทำลายเยาวชน โพสต์ด็อกหลงกล อาชีพเขาเริ่มด้วยคำลวง คุณล้มเหลวในฐานะอาจารย์',
                    zh: '🥀 腐蚀青年。你的博后上钩了。他们的职业生涯始于谎言。你作为导师失败了。'
                },
                stats: { competence: 20, ethics: -50, leadership: -40, innovation: 10 }
            }
        ]
    },
    {
        id: 'med_researcher_035',
        text: {
            en: '🤖 The AI Revelation: You use a new Google DeepMind AlphaFold-style tool to re-analyze your protein structure data from 10 years ago. It finds a subtle but fatal flaw in your statistical model. Your most famous discovery—the basis of your career—is invalid.',
            th: '🤖 การเปิดเผยของ AI: คุณใช้เครื่องมือสไตล์ AlphaFold วิเคราะห์โครงสร้างโปรตีนเมื่อ 10 ปีก่อนใหม่ มันเจอข้อผิดพลาดเล็กน้อยแต่ถึงตายในโมเดลสถิติของคุณ การค้นพบที่ดังที่สุดของคุณ—รากฐานอาชีพคุณ—เป็นโมฆะ',
            zh: '🤖 AI启示录：你使用一种新的DeepMind AlphaFold风格工具重新分析你10年前的蛋白质结构数据。它发现了你统计模型中一个微妙但致命的缺陷。你最著名的发现——你职业生涯的基础——是无效的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Retract and Correct: "Write a retraction paper. \'Advances in AI have shown my previous work was in error.\' Start over."',
                    th: '📢 ถอนและแก้ไข: "เขียนเปเปอร์ถอนงาน \'ความก้าวหน้าของ AI แสดงให้เห็นว่างานเก่าฉันผิด\' เริ่มใหม่"',
                    zh: '📢 撤回并更正："写一篇撤回论文。\'AI的进步表明我之前的工作是错误的。\'重新开始。"'
                },
                consequence: {
                    en: '📉 Heroic Failure. Your stock drops temporarily, but you are hailed as a champion of scientific truth. New grants follow.',
                    th: '📉 ความล้มเหลวเยี่ยงวีรบุรุษ หุ้นคุณตกชั่วคราว แต่ได้รับการยกย่องว่าเป็นผู้พิทักษ์ความจริง ทุนใหม่ตามมา',
                    zh: '📉 英雄般的失败。你的股票暂时下跌，但你被誉为科学真理的捍卫者。新的资助随之而来。'
                },
                stats: { competence: 60, ethics: 90, leadership: 70, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Bury the Data: "Delete the AI results. \'The AI is probably hallucinating.\' Never speak of this again."',
                    th: '🤫 ฝังข้อมูล: "ลบผล AI ทิ้ง \'AI มันคงหลอนไปเองแหละ\' ห้ามพูดเรื่องนี้อีก"',
                    zh: '🤫 埋葬数据："删除AI结果。\'AI可能在产生幻觉。\'再也不要提这件事。"'
                },
                consequence: {
                    en: '🧟 Living a Lie. You keep your fame, but imposter syndrome eats you alive. Eventually, someone else finds the truth.',
                    th: '🧟 อยู่บนคำลวง คุณรักษาชื่อเสียงไว้ได้ แต่ความรู้สึกตัวปลอมกัดกินใจ สุดท้ายคนอื่นก็เจอความจริง',
                    zh: '🧟生活在谎言中。你保持了名气，但冒名顶替综合症吞噬了你。最终，别人会发现真相。'
                },
                stats: { competence: 20, ethics: -80, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Pivot the Narrative: "Publish a new paper: \'Refining the model with AI.\' Frame it as an update, not a retraction."',
                    th: '🔄 บิดเรื่องราว: "ตีพิมพ์เปเปอร์ใหม่: \'การปรับปรุงโมเดลด้วย AI\' เสนอว่าเป็นอัปเดต ไม่ใช่การถอนงาน"',
                    zh: '🔄 扭转叙事："发表一篇新论文：\'用AI完善模型。\'把它包装成更新，而不是撤回。"'
                },
                consequence: {
                    en: '🐍 Slippery Slope. Experts notice you didn\'t admit the fundamental error. Trust erodes.',
                    th: '🐍 ทางลาดชัน ผู้เชี่ยวชาญดูออกว่าคุณไม่ยอมรับความผิดพลาดพื้นฐาน ความเชื่อถือลดลง',
                    zh: '🐍 滑坡。专家注意到你没有承认根本错误。信任受到侵蚀。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🥊 Fight the AI: "Publish a defense attacking the AI\'s methodology. \'Machines cannot understand biology!\'"',
                    th: '🥊 สู้กับ AI: "ตีพิมพ์งานป้องกันตัวโจมตีวิธีของ AI \'เครื่องจักรไม่เข้าใจชีววิทยาหรอก!\'"',
                    zh: '🥊 对抗AI："发表辩护文章攻击AI的方法论。\'机器无法通过生物学！\'"'
                },
                consequence: {
                    en: '🦖 Old Guard. You look like a dinosaur fighting the asteroid. The field moves on without you.',
                    th: '🦖 ไดโนเสาร์ คุณดูเหมือนไดโนเสาร์สู้กับอุกกาบาต วงการเดินหน้าต่อโดยไม่มีคุณ',
                    zh: '🦖 老顽固。你就象是恐龙在对抗小行星。该领域在你缺席的情况下继续前进。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: -20 }
            }
        ]
    },
    {
        id: 'med_researcher_036', text: { en: '🏢 Office Politics: Department chair wants to merge your lab with a rival to save rent.', th: '🏢 การเมืองออฟฟิศ: หัวหน้าภาคอยากรวมแล็บคุณกับคู่แข่งเพื่อประหยัดค่าเช่า', zh: '🏢 办公室政治：系主任想合并你和对手的实验室省房租。' }, options: [
            { id: 'A', text: { en: 'Resist openly', th: 'ต้านอย่างเปิดเผย', zh: '公开抵抗' }, consequence: { en: 'Create enemies. Admin hates you.', th: 'สร้างศัตรู ฝ่ายบริหารเกลียด', zh: '树敌。行政人员讨厌你。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: 'Accept and collaborate', th: 'ยอมรับและร่วมมือ', zh: '接受并合作' }, consequence: { en: 'Synergy potential. Culture clash.', th: 'ศักยภาพร่วม วัฒนธรรมขัดแย้ง', zh: '协同潜力。文化冲突。' }, stats: { competence: 50, ethics: 50, leadership: 60, innovation: 40 } },
            { id: 'C', text: { en: 'Sabotage rival lab', th: 'บ่อนทำลายแล็บคู่แข่ง', zh: '破坏对手实验室' }, consequence: { en: 'Toxic war. Productivity zero.', th: 'สงครามพิษ ผลผลิตศูนย์', zh: '有毒战争。生产率为零。' }, stats: { competence: 20, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'D', text: { en: 'Propose alternative savings', th: 'เสนอทางประหยัดอื่น', zh: '提出替代储蓄方案' }, consequence: { en: 'Win-win solution found.', th: 'เจอทางออก Win-win', zh: '找到双赢方案。' }, stats: { competence: 60, ethics: 60, leadership: 70, innovation: 50 } }
        ]
    },
    {
        id: 'med_researcher_037', text: { en: '🐭 Endangered Species: A rare frog mucus cures HIV. Harvesting them kills the species.', th: '🐭 สัตว์ใกล้สูญพันธุ์: เมือกกบหายากรักษา HIV เก็บเกี่ยวแล้วกบสูญพันธุ์', zh: '🐭 濒危物种：稀有青蛙粘液治HIV。采集会导致灭绝。' }, options: [
            { id: 'A', text: { en: 'Harvest to extinction', th: 'เก็บจนสูญพันธุ์', zh: '采集至灭绝' }, consequence: { en: 'Cure HIV. Biodiversity loss.', th: 'รักษา HIV สูญเสียความหลากหลาย', zh: '治愈HIV。生物多样性丧失。' }, stats: { competence: 50, ethics: -40, leadership: 20, innovation: 30 } },
            { id: 'B', text: { en: 'Synthesize artificially', th: 'สังเคราะห์เทียม', zh: '人工合成' }, consequence: { en: 'Takes 10 years. People die waiting.', th: 'ใช้ 10 ปี คนตายระหว่างรอ', zh: '需10年。人死于等待。' }, stats: { competence: 60, ethics: 80, leadership: 50, innovation: 90 } },
            { id: 'C', text: { en: 'Captive breeding program', th: 'โปรแกรมเพาะเลี้ยง', zh: '圈养繁殖计划' }, consequence: { en: 'Slow supply. Sustainable.', th: 'ของมีน้อย ยั่งยืน', zh: '供应慢。可持续。' }, stats: { competence: 50, ethics: 70, leadership: 60, innovation: 50 } },
            { id: 'D', text: { en: 'Ignore discovery', th: 'เพิกเฉยการค้นพบ', zh: '忽略发现' }, consequence: { en: 'Knowledge lost. Species saved.', th: 'ความรู้หาย สัตว์รอด', zh: '知识丧失。物种得救。' }, stats: { competence: 30, ethics: 50, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'med_researcher_038', text: { en: '💊 Self-Experimentation: You have a radical vaccine. FDA says no. You want to inject yourself.', th: '💊 ทดลองตัวเอง: คุณมีวัคซีนรุนแรง FDA ห้าม คุณอยากฉีดตัวเอง', zh: '💊 自我实验：你有激进疫苗。FDA拒绝。想自注。' }, options: [
            { id: 'A', text: { en: 'Do it secretly', th: 'ทำลับๆ', zh: '秘密进行' }, consequence: { en: 'You get sick. No medical record.', th: 'คุณป่วย ไม่มีบันทึกแพทย์', zh: '你病了。无医疗记录。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 40 } },
            { id: 'B', text: { en: 'Do it publicly', th: 'ทำออกสื่อ', zh: '公开进行' }, consequence: { en: 'Media circus. University fires you.', th: 'ละครสัตว์สื่อ มหาวิทยาลัยไล่ออก', zh: '媒体马戏团。大学解雇你。' }, stats: { competence: 40, ethics: 40, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: 'Wait for approval', th: 'รออนุมัติ', zh: '等待批准' }, consequence: { en: 'Years pass. Safe and legal.', th: 'หลายปีผ่าน ปลอดภัยถูกกฎหมาย', zh: '多年过去。安全合法。' }, stats: { competence: 50, ethics: 70, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: 'Test on pet dog', th: 'ลองกับหมาเลี้ยง', zh: '在宠物狗上测试' }, consequence: { en: 'Animal cruelty charges. Jail.', th: 'ข้อหาทารุณสัตว์ คุก', zh: '虐待动物指控。入狱。' }, stats: { competence: 10, ethics: -80, leadership: -50, innovation: 0 } }
        ]
    },
    {
        id: 'med_researcher_039', text: { en: '🕶️ Spy Offer: Foreign government wants blueprints of your pathogen lab security.', th: '🕶️ ข้อเสนอลับ: รัฐบาลต่างชาติอยากได้พิมพ์เขียวความปลอดภัยแล็บเชื้อโรคคุณ', zh: '🕶️ 间谍提议：外国政府想要你病原体实验室的安全蓝图。' }, options: [
            { id: 'A', text: { en: 'Sell it', th: 'ขาย', zh: '卖掉' }, consequence: { en: 'Treason. Life in prison.', th: 'กบฏ คุกตลอดชีวิต', zh: '叛国。终身监禁。' }, stats: { competence: 20, ethics: -100, leadership: -80, innovation: 0 } },
            { id: 'B', text: { en: 'Report to FBI/Authorities', th: 'แจ้ง FBI/ทางการ', zh: '向FBI/当局报告' }, consequence: { en: 'Become double agent. Stressful.', th: 'เป็นสายลับสองหน้า เครียด', zh: '成为双面特工。压力大。' }, stats: { competence: 50, ethics: 70, leadership: 60, innovation: 30 } },
            { id: 'C', text: { en: 'Ignore and block', th: 'เพิกเฉยและบล็อก', zh: '忽略并拉黑' }, consequence: { en: 'They hack you instead.', th: 'พวกเขาแฮ็กคุณแทน', zh: '他们改黑你。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 10 } },
            { id: 'D', text: { en: 'Give fake blueprints', th: 'ให้พิมพ์เขียวปลอม', zh: '给假蓝图' }, consequence: { en: 'Dangerous game. They realize later.', th: 'เกมอันตราย พวกเขารู้ทีหลัง', zh: '危险游戏。后来发现。' }, stats: { competence: 40, ethics: 40, leadership: 50, innovation: 40 } }
        ]
    },
    {
        id: 'med_researcher_040', text: { en: '🎓 PhD Student Crisis: Student deletes 2 years of data by accident. No backups.', th: '🎓 วิกฤต ป.เอก: นักศึกษาลบข้อมูล 2 ปีโดยบังเอิญ ไม่มีสำรอง', zh: '🎓 博士生危机：学生意外删除2年数据。无备份。' }, options: [
            { id: 'A', text: { en: 'Expel the student', th: 'ไล่ออก', zh: '开除学生' }, consequence: { en: 'Cruel but sets standard. Bad morale.', th: 'โหดร้ายแต่สร้างมาตรฐาน ขวัญเสีย', zh: '残酷但树立标准。士气低落。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: 'Try data recovery', th: 'กู้ข้อมูล', zh: '尝试数据恢复' }, consequence: { en: 'Expensive specialist. Partial success.', th: 'จ้างผู้เชี่ยวชาญแพง สำเร็จบางส่วน', zh: '昂贵专家。部分成功。' }, stats: { competence: 50, ethics: 60, leadership: 70, innovation: 40 } },
            { id: 'C', text: { en: 'Falsify to fill gaps', th: 'ปลอมเติมช่องว่าง', zh: '伪造填补空白' }, consequence: { en: 'Academic fraud. Ticking time bomb.', th: 'โกงวิชาการ ระเบิดเวลา', zh: '学术欺诈。定时炸弹。' }, stats: { competence: 20, ethics: -60, leadership: -40, innovation: 10 } },
            { id: 'D', text: { en: 'Restart project', th: 'เริ่มใหม่', zh: '重启项目' }, consequence: { en: 'Delay graduation. Honest work.', th: 'จบช้า งานซื่อสัตย์', zh: '延期毕业。诚实工作。' }, stats: { competence: 40, ethics: 70, leadership: 50, innovation: 20 } }
        ]
    }

    ,
    {
        id: 'med_researcher_041', text: { en: '📚 Predatory Journal: You receive an email: "Publish in 24 hours! No review needed! Cost $200."', th: '📚 วารสารลวงโลก: อีเมล: "ตีพิมพ์ใน 24 ชม.! ไม่ต้องรีวิว! $200"', zh: '📚 掠夺性期刊：邮件："24小时发表！无需评审！200美元。"' }, options: [
            { id: 'A', text: { en: 'Publish there', th: 'ตีพิมพ์เลย', zh: '在那里发表' }, consequence: { en: 'Career stain. Serious scientists mock you.', th: 'ประวัติด่างพร้อย นักวิทย์จริงจังล้อเลียน', zh: '职业污点。严肃科学家嘲笑。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: 'Delete email', th: 'ลบอีเมล', zh: '删除邮件' }, consequence: { en: 'Standard practice. Avoid scam.', th: 'เรื่องปกติ หลีกเลี่ยงกลโกง', zh: '标准做法。避免骗局。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: 'Submit fake paper to troll', th: 'ส่งเปเปอร์ปลอมไปป่วน', zh: '提交假论文恶搞' }, consequence: { en: 'Viral story. Wastes time.', th: 'เรื่องไวรัล เสียเวลา', zh: '病毒式故事。浪费时间。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 30 } },
            { id: 'D', text: { en: 'Report to university', th: 'รายงานมหาวิทยาลัย', zh: '向大学报告' }, consequence: { en: 'Spam filter updated. Help others.', th: 'อัปเดตตัวกรองสแปม ช่วยคนอื่น', zh: '垃圾邮件过滤更新。助人。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 20 } }
        ]
    },
    {
        id: 'med_researcher_042', text: { en: '🧪 Broken Centrifuge: Main centrifuge vibrates dangerously. Budget freeze means no replacement.', th: '🧪 เครื่องปั่นพัง: เครื่องหลักสั่นอันตราย งบถูกแช่แข็งไม่มีเปลี่ยน', zh: '🧪 离心机损坏：主机剧烈震动。预算冻结无法更换。' }, options: [
            { id: 'A', text: { en: 'Use it anyway', th: 'ใช้ไปเถอะ', zh: '照样用' }, consequence: { en: 'Explodes. Shrapnel injury. Lawsuit.', th: 'ระเบิด สะเก็ดทำเจ็บ ฟ้องร้อง', zh: '爆炸。弹片受伤。诉讼。' }, stats: { competence: 10, ethics: -50, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: 'Balance tubes by hand carefully', th: 'ถ่วงดุลหลอดด้วยมืออย่างระวัง', zh: '小心手动平衡试管' }, consequence: { en: 'Stressful. Works temporarily. Slow.', th: 'เครียด ใช้ได้ชั่วคราว ช้า', zh: '压力大。暂时有效。慢。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 20 } },
            { id: 'C', text: { en: 'Pause experiments requiring it', th: 'หยุดการทดลองที่ต้องใช้', zh: '暂停需要它的实验' }, consequence: { en: 'Delay. Safety prioritized.', th: 'ล่าช้า ปลอดภัยมาก่อน', zh: '延误。安全优先。' }, stats: { competence: 30, ethics: 60, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: 'Borrow from neighbor lab', th: 'ยืมแล็บข้างๆ', zh: '借用邻居实验室' }, consequence: { en: 'Favors traded. Collaboration starts.', th: 'แลกเปลี่ยนบุญคุณ เริ่มร่วมมือ', zh: '人情交换。开始合作。' }, stats: { competence: 50, ethics: 50, leadership: 60, innovation: 30 } }
        ]
    },
    {
        id: 'med_researcher_043', text: { en: '💊 Placebo Effect: Patients in placebo group report feeling "cured".', th: '💊 ยาหลอก: คนไข้กลุ่มยาหลอกบอกว่า "หาย"', zh: '💊 安慰剂效应：安慰剂组患者报告"治愈"。' }, options: [
            { id: 'A', text: { en: 'Ignore placebo data', th: 'เพิกเฉยข้อมูลยาหลอก', zh: '忽略安慰剂数据' }, consequence: { en: 'Biased results. Bad science.', th: 'ผลลัพธ์ลำเอียง วิทย์แย่', zh: '结果偏差。坏科学。' }, stats: { competence: 20, ethics: -30, leadership: 0, innovation: 0 } },
            { id: 'B', text: { en: 'Investigate psychological cause', th: 'สืบสาเหตุจิตวิทยา', zh: '调查心理原因' }, consequence: { en: 'New paper on mind-body link.', th: 'เปเปอร์ใหม่เรื่องจิต-กาย', zh: '身心联系新论文。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 70 } },
            { id: 'C', text: { en: 'Tell them they got placebo', th: 'บอกความจริง', zh: '告诉他们是安慰剂' }, consequence: { en: 'Unblinds study. Ruins trial.', th: 'เปิดเผยการทดลอง การทดลองพัง', zh: '揭盲。破坏试验。' }, stats: { competence: 10, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: 'Market sugar pills', th: 'ขายยาแป้ง', zh: '推销糖丸' }, consequence: { en: 'Fraud. Ethics board revokes license.', th: 'ฉ้อโกง ยึดใบอนุญาต', zh: '欺诈。吊销执照。' }, stats: { competence: 30, ethics: -90, leadership: -50, innovation: 20 } }
        ]
    },
    {
        id: 'med_researcher_044', text: { en: '🖱️ Mouse Escape: Three genetically modified mice are missing.', th: '🖱️ หนูหาย: หนูตัดต่อยีน 3 ตัวหายไป', zh: '🖱️ 老鼠逃跑：三只转基因老鼠失踪。' }, options: [
            { id: 'A', text: { en: 'Set traps quietly', th: 'วางกับดักเงียบๆ', zh: '悄悄设陷阱' }, consequence: { en: 'Found one. Two breed in vents.', th: 'เจอตัวนึง อีกสองตัวออกลูกในท่อ', zh: '找到一只。两只在通风口繁殖。' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: 10 } },
            { id: 'B', text: { en: 'Full lockdown immediately', th: 'ล็อกดาวน์ทันที', zh: '立即全面封锁' }, consequence: { en: 'Disrupts work. Mice found. Safe.', th: 'งานสะดุด เจอหนู ปลอดภัย', zh: '工作中断。找回老鼠。安全。' }, stats: { competence: 50, ethics: 60, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: 'Buy replacement mice', th: 'ซื้อหนูใหม่มาแทน', zh: '买替代鼠' }, consequence: { en: 'Cover-up. Wild mutants roam.', th: 'ปกปิด หนูดูดายเพ่นพ่าน', zh: '掩盖。变种鼠游荡。' }, stats: { competence: 10, ethics: -70, leadership: -50, innovation: 0 } },
            { id: 'D', text: { en: 'Blame cleaning staff', th: 'โทษแม่บ้าน', zh: '怪清洁工' }, consequence: { en: 'Innocent fired. You are toxic.', th: 'คนบริสุทธิ์ตกงาน คุณเป็นพิษ', zh: '无辜者被解雇。你有毒。' }, stats: { competence: 20, ethics: -50, leadership: -30, innovation: 0 } }
        ]
    },
    {
        id: 'med_researcher_045', text: { en: '🌍 Climate Conference: Fly to Bali for a "Green Science" conference? Emits 2 tons CO2.', th: '🌍 ประชุมโลกร้อน: บินไปบาหลีประชุม "Green Science"? ปล่อย CO2 2 ตัน', zh: '🌍 气候会议：飞巴厘岛参加"绿色科学"会？排放2吨CO2。' }, options: [
            { id: 'A', text: { en: 'Don\'t go. Zoom in.', th: 'ไม่ไป ประชุม Zoom', zh: '不去。Zoom参会。' }, consequence: { en: 'Walk the talk. Miss networking.', th: 'ทำดั่งพูด พลาดคอนเนคชัน', zh: '言行一致。错过社交。' }, stats: { competence: 40, ethics: 70, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: 'Fly business class', th: 'บิน Business Class', zh: '飞商务舱' }, consequence: { en: 'Hypocrite. Enjoy the beach.', th: 'มือถือสากปากถือศีล สนุกชายหาด', zh: '伪君子。享受海滩。' }, stats: { competence: 30, ethics: -20, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: 'Offset carbon credits', th: 'ซื้อคาร์บอนเครดิต', zh: '购买碳信用' }, consequence: { en: 'Guilt assuaged. Networking.', th: 'ลดความผิด ได้คอนเนคชัน', zh: '减轻内疚。社交。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: 'Send student instead', th: 'ส่งนักเรียนไปแทน', zh: '派学生去' }, consequence: { en: 'Student happy. You save time.', th: 'นักเรียนแฮปปี้ คุณประหยัดเวลา', zh: '学生高兴。你省时间。' }, stats: { competence: 40, ethics: 50, leadership: 60, innovation: 30 } }
        ]
    },
    {
        id: 'med_researcher_046', text: { en: '🖥️ Hacked Data: Hackers ransom your database for 1 Bitcoin.', th: '🖥️ ข้อมูลโดนแฮ็ก: แฮ็กเกอร์เรียกค่าไถ่ฐานข้อมูล 1 Bitcoin', zh: '🖥️ 数据被黑：黑客勒索1比特币赎回数据库。' }, options: [
            { id: 'A', text: { en: 'Pay ransom', th: 'จ่ายค่าไถ่', zh: '付赎金' }, consequence: { en: 'Get data. Encourages crime.', th: 'ได้ข้อมูล สนับสนุนโจร', zh: '获数据。助长犯罪。' }, stats: { competence: 30, ethics: -20, leadership: 10, innovation: 10 } },
            { id: 'B', text: { en: 'Refuse to pay', th: 'ไม่จ่าย', zh: '拒付' }, consequence: { en: 'Lose data. Start over.', th: 'เสียข้อมูล เริ่มใหม่', zh: '丢数据。重来。' }, stats: { competence: 40, ethics: 60, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: 'Consult IT security', th: 'ปรึกษา IT', zh: '咨询IT安全' }, consequence: { en: 'They might decrypt. Proper channel.', th: 'อาจถอดรหัสได้ ช่องทางถูกต้อง', zh: '可能解密。正规渠道。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 30 } },
            { id: 'D', text: { en: 'Try to hack back', th: 'แฮ็กกลับ', zh: '试图反黑' }, consequence: { en: 'Illegal. Dangerous retaliation.', th: 'ผิดกฎหมาย โดนสวนกลับอันตราย', zh: '非法。危险报复。' }, stats: { competence: 60, ethics: -30, leadership: -10, innovation: 50 } }
        ]
    },
    {
        id: 'med_researcher_047', text: { en: '💉 Dirty Needle: You accidentally prick yourself with a used HIV needle.', th: '💉 เข็มสกปรก: คุณทำเข็ม HIV ใช้แล้วตำมือโดยบังเอิญ', zh: '💉 脏针头：意外被用过的HIV针头扎伤。' }, options: [
            { id: 'A', text: { en: 'Start PEP immediately', th: 'เริ่มยาต้าน PEP ทันที', zh: '立即开始PEP' }, consequence: { en: 'Sick for a month. Save life.', th: 'ป่วยเป็นเดือน รอดชีวิต', zh: '病一个月。保命。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: 'Wash and hope', th: 'ล้างและหวัง', zh: '清洗并祈祷' }, consequence: { en: 'Risk infection. Denial.', th: 'เสี่ยงติดเชื้อ ปฏิเสธความจริง', zh: '感染风险。否认。' }, stats: { competence: 10, ethics: 20, leadership: -20, innovation: 0 } },
            { id: 'C', text: { en: 'Hide injury', th: 'ซ่อนแผล', zh: '隐瞒伤口' }, consequence: { en: 'Anxious. Risk partners. Bad.', th: 'กังวล เสี่ยงคู่นอน แย่', zh: '焦虑。风险伴侣。坏。' }, stats: { competence: 20, ethics: -50, leadership: -30, innovation: 0 } },
            { id: 'D', text: { en: 'Modify safety protocols', th: 'แก้กฎความปลอดภัย', zh: '修改安全协议' }, consequence: { en: 'Report injury. Prevent future ones.', th: 'รายงาน กันเกิดซ้ำ', zh: '报告伤害。预防未来。' }, stats: { competence: 60, ethics: 60, leadership: 70, innovation: 40 } }
        ]
    },
    {
        id: 'med_researcher_048', text: { en: '📢 Talk Show: Late-night host invites you to perform "explosive science experiments".', th: '📢 ทอล์กโชว์: พิธีกรดึกชวนคุณไปทำ "การทดลองระเบิดตูมตาม"', zh: '📢 脱口秀：深夜主持邀你表演"爆炸科学实验"。' }, options: [
            { id: 'A', text: { en: 'Do it for fame', th: 'ทำเพื่อชื่อเสียง', zh: '为名气做' }, consequence: { en: 'Fun but trivializes science.', th: 'สนุกแต่ทำให้วิทย์ดูไร้สาระ', zh: '有趣但贬低科学。' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: 'Refuse dignity', th: 'ปฏิเสธศักดิ์ศรี', zh: '拒绝尊严' }, consequence: { en: 'Boring scientist label.', th: 'ตราหน้าว่านักวิทย์น่าเบื่อ', zh: '无聊科学家标签。' }, stats: { competence: 40, ethics: 60, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: 'Negotiate real science segment', th: 'ต่อรองช่วงสาระจริง', zh: '协商真实科学环节' }, consequence: { en: 'Educate millions. Hard sell.', th: 'สอนคนล้านคน ขายยาก', zh: '教育数百万人。难推销。' }, stats: { competence: 50, ethics: 50, leadership: 60, innovation: 50 } },
            { id: 'D', text: { en: 'Send funny postdoc', th: 'ส่งโพสต์ด็อกตลกไป', zh: '派幽默博后去' }, consequence: { en: 'Delegate fame. They shine.', th: 'มอบหมายงานดัง เขาเกิด', zh: '委派名气。他们发光。' }, stats: { competence: 40, ethics: 50, leadership: 70, innovation: 30 } }
        ]
    },
    {
        id: 'med_researcher_049', text: { en: '💊 Drug Expiry: $50k of reagents expired yesterday. Still sealed.', th: '💊 ยาหมดอายุ: สารเคมี $50k หมดอายุเมื่อวาน ยังซีลอยู่', zh: '💊 药物过期：5万试剂昨过期。未拆封。' }, options: [
            { id: 'A', text: { en: 'Use them', th: 'ใช้เลย', zh: '使用' }, consequence: { en: 'Works fine. Risk validity.', th: 'ใช้ได้ เสี่ยงความถูกต้อง', zh: '管用。风险有效性。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: 'Discard and buy new', th: 'ทิ้งซื้อใหม่', zh: '丢弃买新' }, consequence: { en: 'Waste money. Ensure quality.', th: 'เปลืองเงิน รับรองคุณภาพ', zh: '浪费钱。保质量。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: 'Validate potency first', th: 'ตรวจสอบประสิทธิภาพก่อน', zh: '先验证效力' }, consequence: { en: 'Smart compromise. Documented.', th: 'ประนีประนอมฉลาด บันทึกไว้', zh: '聪明妥协。记录。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: 'Donate to high school', th: 'บริจาคโรงเรียน', zh: '捐给高中' }, consequence: { en: 'Tax write-off. Inspires kids.', th: 'ลดภาษี สร้างแรงบันดาลใจเด็ก', zh: '抵税。激励孩子。' }, stats: { competence: 40, ethics: 70, leadership: 60, innovation: 30 } }
        ]
    },
    {
        id: 'med_researcher_050', text: { en: '🏆 Retirement: You are 70. Time to retire?', th: '🏆 เกษียณ: อายุ 70 แล้ว ถึงเวลาเกษียณ?', zh: '🏆 退休：你70岁。该退休？' }, options: [
            { id: 'A', text: { en: 'Work until death', th: 'ทำจนตาย', zh: '工作至死' }, consequence: { en: 'Died at bench. Legendary dedication.', th: 'ตายคาโต๊ะ ทุ่มเทในตำนาน', zh: '死在实验台。传奇奉献。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'B', text: { en: 'Retire to garden', th: 'เกษียณทำสวน', zh: '退休种花' }, consequence: { en: 'Peaceful end. Science moves on.', th: 'จบสงบ วิทย์เดินหน้าต่อ', zh: '平静结局。科学继续。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: 'Professor Emeritus', th: 'ศาสตราจารย์กิตติคุณ', zh: '名誉教授' }, consequence: { en: 'Mentor next gen. Keep office.', th: 'สอนรุ่นถัดไป เก็บห้องทำงาน', zh: '指导下代。保留办公室。' }, stats: { competence: 50, ethics: 60, leadership: 70, innovation: 30 } },
            { id: 'D', text: { en: 'Write memoirs', th: 'เขียนบันทึก', zh: '写回忆录' }, consequence: { en: 'Best-seller. Inspire future.', th: 'ขายดี สร้างแรงบันดาลใจอนาคต', zh: '畅销。激励未来。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 40 } }
        ]
    }

];