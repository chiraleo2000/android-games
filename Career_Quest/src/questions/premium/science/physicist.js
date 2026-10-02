export const physicistQuestions = [
    {
        id: 'phys_001',
        text: {
            en: '⚛️ The Quantum Shortcut: Your team is building a quantum computer. A junior researcher proposes a "risky" shortcut in the qubit stabilization process that could double speed but has a 0.5% chance of creating a micro-singularity (tiny black hole).',
            th: '⚛️ ทางลัดควอนตัม: ทีมของคุณกำลังสร้างคอมพิวเตอร์ควอนตัม นักวิจัยรุ่นน้องเสนอทางลัดที่ "เสี่ยง" ในกระบวนการทำให้คิวบิตเสถียร ซึ่งอาจเพิ่มความเร็วได้สองเท่า แต่มีโอกาส 0.5% ที่จะสร้างไมโครซิงกูลาริตี้ (หลุมดำจิ๋ว)',
            zh: '⚛️ 量子捷径：你的团队正在建造一台量子计算机。一位初级研究员提出了一种在量子位稳定过程中的"冒险"捷径，可以将速度提高一倍，但有0.5%的几率产生微观奇点（微型黑洞）。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Shut It Down: "Are you insane? 0.5% is infinite when the risk is a BLACK HOLE. Fire the researcher for even suggesting it."',
                    th: '🛑 ปิดมันซะ: "คุณบ้าหรือเปล่า? 0.5% คืออนันต์เมื่อความเสี่ยงคือหลุมดำ ไล่นักวิจัยคนนั้นออกซะที่กล้าเสนอเรื่องนี้"',
                    zh: '🛑 关掉它："你疯了吗？当风险是黑洞时，0.5%就是无限大。解雇那个提议的研究员。"'
                },
                consequence: {
                    en: '🛡️ Safety First: The project is delayed by 2 years, but the lab is safe. The fired researcher goes to a rival and builds it safely.',
                    th: '🛡️ ปลอดภัยไว้ก่อน: โปรเจกต์ล่าช้าไป 2 ปี แต่แล็บปลอดภัย นักวิจัยที่ถูกไล่ออกไปอยู่กับคู่แข่งและสร้างมันได้อย่างปลอดภัย',
                    zh: '🛡️ 安全第一：项目推迟了2年，但实验室是安全的。被解雇的研究员去了竞争对手那里，并安全地建造了它。'
                },
                stats: { competence: 10, ethics: 50, leadership: -10, innovation: -30 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 Take the Risk: "Progress requires sacrifice. We run the test at 3 AM from a remote bunker. If we disappear, we disappear in the name of science!"',
                    th: '🚀 เสี่ยงกันเถอะ: "ความก้าวหน้าต้องมีการเสียสละ เราจะรันการทดสอบตอนตี 3 จากบังเกอร์ระยะไกล ถ้าเราหายไป ก็หายไปในนามของวิทยาศาสตร์!"',
                    zh: '🚀 冒险："进步需要牺牲。我们在凌晨3点从远程掩体进行测试。如果我们消失了，我们是以科学的名义消失的！"'
                },
                consequence: {
                    en: '💥 Boom... Sort of: The lab implodes. No black hole, but $500 million in equipment is dust. You are banned from physics.',
                    th: '💥 ตูม... ประมาณนั้น: ห้องแล็บระเบิดยุบตัว ไม่มีหลุมดำ แต่อุปกรณ์มูลค่า 500 ล้านเหรียญกลายเป็นฝุ่น คุณถูกห้ามยุ่งเกี่ยวกับฟิสิกส์',
                    zh: '💥 轰……算是吧：实验室内爆。没有黑洞，但5亿美元的设备化为灰烬。你被禁止从事物理学研究。'
                },
                stats: { competence: -40, ethics: -50, leadership: -40, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🧮 Theoretical Check: "Pause experiments. Spend 6 months re-calculating the probability. Is it 0.5% or 0.00000005%?"',
                    th: '🧮 ตรวจสอบทฤษฎี: "หยุดการทดลอง ใช้เวลา 6 เดือนคำนวณความน่าจะเป็นใหม่ มันคือ 0.5% หรือ 0.00000005% กันแน่?"',
                    zh: '🧮 理论检查："暂停实验。花6个月重新计算概率。是0.5%还是0.00000005%？"'
                },
                consequence: {
                    en: '📐 Precision Wins: You find the error. The risk is actually zero. You proceed safely and win the Nobel Prize.',
                    th: '📐 ความแม่นยำชนะเลิศ: คุณพบข้อผิดพลาด ความเสี่ยงคือศูนย์จริงๆ คุณดำเนินการต่อได้อย่างปลอดภัยและได้รับรางวัลโนเบล',
                    zh: '📐 精确制胜：你发现了错误。风险实际上是零。你安全地继续并获得了诺贝尔奖。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🤖 Simulation First: "Build a computer simulation of the computer. It will take a year, but we simulate the singularity first."',
                    th: '🤖 จำลองสถานการณ์ก่อน: "สร้างแบบจำลองคอมพิวเตอร์ของคอมพิวเตอร์ ต้องใช้เวลาหนึ่งปี แต่เราจำลองซิงกูลาริตี้ก่อน"',
                    zh: '🤖 模拟优先："建立计算机的计算机模拟。这需要一年时间，但我们先模拟奇点。"'
                },
                consequence: {
                    en: '💻 Slow & Steady: The simulation shows the shortcut works only 50% of the time. You save resources by optimizing digitally.',
                    th: '💻 ช้าแต่ชัวร์: การจำลองแสดงให้เห็นว่าทางลัดได้ผลเพียง 50% ของเวลาทั้งหมด คุณประหยัดทรัพยากรด้วยการปรับปรุงในรูปแบบดิจิทัล',
                    zh: '💻 稳扎稳打：模拟显示捷径只有50%的时间有效。你通过数字化优化节省了资源。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'phys_002',
        text: {
            en: '🌌 The Theory of Everything: You stumble upon an equation that unifies gravity and quantum mechanics. It\'s beautiful, but it implies that free will is a mathematical illusion. Publishing it could cause existential despair worldwide.',
            th: '🌌 ทฤษฎีสรรพสิ่ง: คุณบังเอิญเจอสมการที่รวมแรงโน้มถ่วงและกลศาสตร์ควอนตัมเข้าด้วยกัน มันสวยงาม แต่มันบ่งบอกว่าเจตจำนงเสรีเป็นเพียงภาพลวงตาทางคณิตศาสตร์ การเผยแพร่มันอาจทำให้เกิดความสิ้นหวังไปทั่วโลก',
            zh: '🌌 万物理论：你偶然发现了一个统一引力和量子力学的方程。它很美，但它暗示自由意志只是数学幻觉。发表它可能会在全世界引起存在主义的绝望。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📖 Publish Anyway: "Truth is truth. We are scientists, not nannies. The universe doesn\'t care about our feelings."',
                    th: '📖 ตีพิมพ์ไปเลย: "ความจริงก็คือความจริง เราเป็นนักวิทยาศาสตร์ ไม่ใช่พี่เลี้ยงจักรวาล จักรวาลไม่สนความรู้สึกของเราหรอก"',
                    zh: '📖 无论如何都要发表："真理就是真理。我们是科学家，不是保姆。宇宙不在乎我们的感受。"'
                },
                consequence: {
                    en: '🌍 Global Crisis: Philosophers riot. Cults form. But physics advances 100 years in a day. You are the most hated/loved person alive.',
                    th: '🌍 วิกฤตโลก: นักปรัชญาก่อจลาจล ลัทธิต่างๆ เกิดขึ้น แต่วงการฟิสิกส์ก้าวหน้าไป 100 ปีในวันเดียว คุณคือคนที่ถูกเกลียด/รักมากที่สุดที่ยังมีชีวิตอยู่',
                    zh: '🌍 全球危机：哲学家暴动。邪教形成。但物理学在一天内进步了100年。你是活着的人中最被憎恨/爱戴的人。'
                },
                stats: { competence: 50, ethics: -20, leadership: 10, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🔥 Burn It: "Some doors should not be opened. Humanity needs the illusion of choice to survive. Destroy the notes."',
                    th: '🔥 เผามันซะ: "ประตูบางบานไม่ควรเปิด มนุษยชาติต้องการภาพลวงตาของทางเลือกเพื่อความอยู่รอด ทำลายบันทึกทิ้ง"',
                    zh: '🔥 烧掉它："有些门不应该打开。人类需要选择的幻觉才能生存。销毁笔记。"'
                },
                consequence: {
                    en: '🕊️ Noble Sacrifice: You die knowing the truth, but leave the world in blissful ignorance. A tragic hero.',
                    th: '🕊️ การเสียสละอันสูงส่ง: คุณตายโดยรู้ความจริง แต่ปล่อยให้โลกอยู่ในความไม่รู้อันแสนสุข ฮีโร่ผู้โศกนาฏกรรม',
                    zh: '🕊️ 高尚的牺牲：你带着真相死去，但这让世界处于幸福的无知之中。一个悲剧英雄。'
                },
                stats: { competence: 0, ethics: 50, leadership: 40, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🎭 Soft Release: "Publish it as a \'theoretical framework\' in an obscure journal. Let the community slowly digest it over decades."',
                    th: '🎭 ค่อยๆ ปล่อย: "ตีพิมพ์เป็น \'กรอบทฤษฎี\' ในวารสารที่ไม่ค่อยมีคนรู้จัก ให้ชุมชนค่อยๆ ย่อยมันในอีกหลายทศวรรษ"',
                    zh: '🎭 软发布："作为\'理论框架\'在晦涩的期刊上发表。让社区在几十年内慢慢消化它。"'
                },
                consequence: {
                    en: '⏳ Gentle Dawn: It works. Fifty years later, it\'s accepted without panic. You are hailed as a wise visionary post-mortem.',
                    th: '⏳ รุ่งอรุณที่อ่อนโยน: มันได้ผล ห้าสิบปีต่อมา มันได้รับการยอมรับโดยไม่ตื่นตระหนก คุณได้รับการยกย่องว่าเป็นผู้มีวิสัยทัศน์ที่ชาญฉลาดหลังมรณกรรม',
                    zh: '⏳ 温柔的黎明：行得通。五十年后，它被毫无恐慌地接受了。你死后被誉为明智的远见卓识者。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Monetize It: "Wait, if everything is determined... I can predict the stock market! Forget publishing, let\'s get rich!"',
                    th: '💰 หารายได้จากมัน: "เดี๋ยวนะ ถ้าทุกอย่างถูกกำหนดไว้แล้ว... ฉันก็ทำนายตลาดหุ้นได้สิ! ลืมเรื่องตีพิมพ์ไปซะ มาทำเงินกันเถอะ!"',
                    zh: '💰把 它货币化："等等，如果一切都注定了……我可以预测股市！忘了发表吧，让我们发财吧！"'
                },
                consequence: {
                    en: '💵 Secret Trillionaire: You become the richest person on Earth. Science stagnates, but you have a really nice yacht.',
                    th: '💵 มหาเศรษฐีลึกลับ: คุณกลายเป็นคนที่รวยที่สุดในโลก วิทยาศาสตร์หยุดชะงัก แต่คุณมีเรือยอทช์ที่สวยจริงๆ',
                    zh: '💵 隐形万亿富翁：你成为地球上最富有的人。科学停滞不前，但你有一艘非常漂亮的游艇。'
                },
                stats: { competence: 40, ethics: -50, leadership: -30, innovation: 10 }
            }
        ]
    },
    {
        id: 'phys_003',
        text: {
            en: '☢️ The Cold Fusion Hoax: A rival lab claims they achieved cold fusion. You verify their data and find a subtle error they missed. If you debunk them, you crush their careers. If you help them fix it, you share the Nobel.',
            th: '☢️ เรื่องหลอกลวงโคลด์ฟิวชั่น: ห้องแล็บคู่แข่งอ้างว่าทำโคลด์ฟิวชั่นได้สำเร็จ คุณตรวจสอบข้อมูลของพวกเขาและพบข้อผิดพลาดเล็กน้อยที่พวกเขาพลาดไป หากคุณแฉพวกเขา คุณจะทำลายอาชีพของพวกเขา หากคุณช่วยพวกเขาแก้ไข คุณจะได้แบ่งรางวัลโนเบล',
            zh: '☢️ 冷聚变骗局：一个竞争对手实验室声称他们实现了冷聚变。你核实在他们的数据中发现了一个他们忽略的细微错误。如果你揭穿他们，你就会毁了他们的事业。如果你帮他们改正，你们分享诺贝尔奖。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔨 Crush Them: "Science has no room for error! Publicly debunk their findings at the next conference. Humiliate them."',
                    th: '🔨 บดขยี้พวกเขา: "วิทยาศาสตร์ไม่มีที่ว่างสำหรับข้อผิดพลาด! แฉการค้นพบของพวกเขาต่อหน้าสาธารณะในการประชุมครั้งหน้า ทำให้พวกเขาอับอาย"',
                    zh: '🔨 粉碎他们："科学没有犯错的余地！在下次会议上公开揭穿他们的发现。羞辱他们。"'
                },
                consequence: {
                    en: '🔪 Career Assassin: They are ruined. You are feared. But later, you struggle to find collaborators because you are "toxic."',
                    th: '🔪 นักฆ่าอาชีพ: พวกเขาพังพินาศ ผู้คนหวาดกลัวคุณ แต่ภายหลัง คุณดิ้นรนหาผู้ร่วมงานเพราะคุณ "เป็นพิษ"',
                    zh: '🔪 职业杀手：他们毁了。你令人畏惧。但后来，你很难找到合作者，因为你是"有毒的"。'
                },
                stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Collaborative Fix: "Contact them privately. Show them the error. Offer to co-author the corrected paper."',
                    th: '🤝 แก้ไขร่วมกัน: "ติดต่อพวกเขาส่วนตัว แสดงข้อผิดพลาดให้ดู เสนอให้เป็นผู้เขียนร่วมในบทความที่แก้ไขแล้ว"',
                    zh: '🤝 协作修复："私下联系他们。向他们展示错误。提议共同撰写修正后的论文。"'
                },
                consequence: {
                    en: '🏆 Shared Glory: The fixed theory isn\'t fusion, but it\'s a major breakthrough. You share the credit and gain lifelong allies.',
                    th: '🏆 เกียรติยศร่วมกัน: ทฤษฎีที่แก้ไขแล้วไม่ใช่ฟิวชั่น แต่มันเป็นการค้นพบครั้งสำคัญ คุณแบ่งปันเครดิตและได้พันธมิตรตลอดชีวิต',
                    zh: '🏆 共享荣耀：修正后的理论不是聚变，但它是重大突破。你分享荣誉并获得终身盟友。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 Let Them Fail: "Say nothing. Let them publish and get destroyed by the peer review process. Not my problem."',
                    th: '🤫 ปล่อยให้ล้มเหลว: "ไม่พูดอะไรเลย ปล่อยให้พวกเขาตีพิมพ์และถูกทำลายโดยกระบวนการตรวจสอบโดยผู้เชี่ยวชาญ ไม่ใช่ปัญหาของฉัน"',
                    zh: '🤫 让其失败："什么也不说。让他们发表，然后被同行评审过程摧毁。不关我的事。"'
                },
                consequence: {
                    en: '😶 Passive Observer: They crash and burn. You look clean, but you missed a chance to advance science sooner.',
                    th: '😶 ผู้สังเกตการณ์เฉยเมย: พวกเขาล้มเหลวอย่างสิ้นเชิง คุณดูใสสะอาด แต่คุณพลาดโอกาสที่จะพัฒนาวิทยาศาสตร์ให้เร็วขึ้น',
                    zh: '😶 被动观察者：他们彻底失败。你看起来很干净，但你错过了更早推动科学发展的机会。'
                },
                stats: { competence: 0, ethics: 0, leadership: 0, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Blackmail: "I know your secret. Give me 50% of your grant money, or I Expose the error right now."',
                    th: '💰 แบล็กเมล์: "ฉันรู้ความลับของคุณ แบ่งเงินทุนให้ฉัน 50% หรือจะให้ฉันแฉข้อผิดพลาดตอนนี้เลย"',
                    zh: '💰 勒索："我知道你们的秘密。把你们的拨款给我50%，否则我现在就揭露这个错误。"'
                },
                consequence: {
                    en: '💀 Dangerous Game: They pay you, but they also plant rumors that YOU falsified data. Mutually assured destruction.',
                    th: '💀 เกมอันตราย: พวกเขาจ่ายเงินให้คุณ แต่พวกเขาก็ปล่อยข่าวลือว่า "คุณ" ปลอมแปลงข้อมูล การทำลายล้างซึ่งกันและกัน',
                    zh: '💀 危险游戏：他们付钱给你，但他们也散布谣言说是"你"伪造了数据。相互保证毁灭。'
                },
                stats: { competence: 10, ethics: -50, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'phys_004',
        text: {
            en: '⚡ Anti-Gravity Drive: You accidentally discovered a way to nullify gravity for 5 seconds. The military wants it for "advanced missile defense." The space agency wants it for a Mars colony. You can only give it to one before the prototype degrades.',
            th: '⚡ เครื่องขับเคลื่อนต้านแรงโน้มถ่วง: คุณค้นพบวิธีลบล้างแรงโน้มถ่วงเป็นเวลา 5 วินาทีโดยบังเอิญ กองทัพต้องการมันสำหรับ "การป้องกันขีปนาวุธขั้นสูง" หน่วยงานอวกาศต้องการมันสำหรับอาณานิคมดาวอังคาร คุณให้ได้แค่คนเดียวก่อนที่ต้นแบบจะเสื่อมสภาพ',
            zh: '⚡ 反重力驱动：你意外发现了一种可以在5秒内抵消重力的方法。军方想要它用于"先进导弹防御"。航天局想要它用于火星殖民地。在原型退化之前，你只能给其中一个。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Military Contract: "National security is priority. Give it to the Generals. They have unlimited budget for further research."',
                    th: '🛡️ สัญญาทางทหาร: "ความมั่นคงของชาติคือสิ่งสำคัญที่สุด มอบให้แม่ทัพ พวกเขามีงบประมาณไม่จำกัดสำหรับการวิจัยเพิ่มเติม"',
                    zh: '🛡️ 军事合同："国家安全是重中之重。把它交给将军们。他们有无限的预算用于进一步研究。"'
                },
                consequence: {
                    en: '⚔️ Weapon of War: They build unblockable missiles. You are rich, but your invention starts a new global arms race.',
                    th: '⚔️ อาวุธสงคราม: พวกเขาสร้างขีปนาวุธที่ไม่มีใครหยุดได้ คุณรวย แต่สิ่งประดิษฐ์ของคุณเริ่มต้นการแข่งขันอาวุธระดับโลกครั้งใหม่',
                    zh: '⚔️ 战争武器：他们制造了不可阻挡的导弹。你很富有，但你的发明引发了新的全球军备竞赛。'
                },
                stats: { competence: 30, ethics: -30, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 Space Colonization: "Humanity must become multi-planetary. Give it to the space agency. To Mars!"',
                    th: '🚀 การตั้งอาณานิคมอวกาศ: "มนุษย์ต้องกลายเป็นเผ่าพันธุ์หลายดวงดาว มอบให้หน่วยงานอวกาศ ไปดาวอังคารกันเถอะ!"',
                    zh: '🚀 太空殖民："人类必须成为多行星物种。把它交给航天局。去火星！"'
                },
                consequence: {
                    en: '🌌 New Horizon: It revolutionizes space travel. A city on Mars is named after you. You are the father of the Space Age.',
                    th: '🌌 ขอบฟ้าใหม่: มันปฏิวัติการเดินทางในอวกาศ เมืองบนดาวอังคารถูกตั้งชื่อตามคุณ คุณคือบิดาแห่งยุคอวกาศ',
                    zh: '🌌 新视野：它彻底改变了太空旅行。火星上的一座城市以你的名字命名。你是太空时代之父。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🔓 Open Source: "This belongs to no one. Publish the blueprints online. Let the world decide how to use it."',
                    th: '🔓 โอเพ่นซอร์ส: "สิ่งนี้ไม่เป็นของใคร เผยแพร่พิมพ์เขียวออนไลน์ ให้โลกตัดสินใจว่าจะใช้มันอย่างไร"',
                    zh: '🔓 开源："这不属于任何人。在网上发布蓝图。让世界决定如何使用它。"'
                },
                consequence: {
                    en: '😵 Chaotic Freedom: Kids build hoverboards, but terrorists build gravity bombs. The world changes overnight, for better and worse.',
                    th: '😵 อิสระที่วุ่นวาย: เด็กๆ สร้างโฮเวอร์บอร์ด แต่ผู้ก่อการร้ายสร้างระเบิดแรงโน้มถ่วง โลกเปลี่ยนไปในชั่วข้ามคืน ทั้งในทางที่ดีและร้าย',
                    zh: '😵 混乱的自由：孩子们制造气垫板，但恐怖分子制造重力炸弹。世界在一夜之间改变，好坏参半。'
                },
                stats: { competence: 10, ethics: 10, leadership: 0, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🗑️ Destroy It: "Humanity isn\'t ready. It\'s too dangerous. Smash the prototype and burn the notes."',
                    th: '🗑️ ทำลายมัน: "มนุษยชาติยังไม่พร้อม มันอันตรายเกินไป ทุบต้นแบบและเผาบันทึกทิ้ง"',
                    zh: '🗑️ 销毁它："人类还没有准备好。太危险了。砸碎原型并烧掉笔记。"'
                },
                consequence: {
                    en: '🛡️ Guardian of Peace: Life goes on as normal. You die poor, but with a clean conscience. No one ever knows what you did.',
                    th: '🛡️ ผู้พิทักษ์สันติภาพ: ชีวิตดำเนินไปตามปกติ คุณตายอย่างยากจน แต่มีมโนธรรมที่ใสสะอาด ไม่มีใครรู้ว่าคุณทำอะไรลงไป',
                    zh: '🛡️ 和平守护者：生活照常进行。你死时一贫如洗，但良心清白。没人知道你做了什么。'
                },
                stats: { competence: 0, ethics: 30, leadership: -10, innovation: -20 }
            }
        ]
    },
    {
        id: 'phys_005',
        text: {
            en: '👾 Simulation Glitch: You detect distinct, pixel-like artifacts in the cosmic background radiation. It\'s undeniable proof that our universe is a computer simulation. You fear the "Admins" might reboot us if you reveal the glitch.',
            th: '👾 ข้อผิดพลาดในการจำลอง: คุณตรวจพบสิ่งแปลกปลอมที่มีลักษณะเหมือนพิกเซลในรังสีไมโครเวฟพื้นหลังของจักรวาล มันเป็นหลักฐานที่ปฏิเสธไม่ได้ว่าจักรวาลของเราคือแผนจำลองคอมพิวเตอร์ คุณกลัวว่า "แอดมิน" อาจรีบูตเราหากคุณเปิดเผยข้อผิดพลาด',
            zh: '👾 模拟故障：你在宇宙微波背景辐射中检测到了明显的、像素状的伪影。但这无可否认地证明了我们的宇宙是一个计算机模拟。你担心如果你揭露这个故障，"管理员"可能会重启我们。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Scream It: "WE ARE IN A GAME! WAKE UP! Publish everywhere. Maybe we can hack the code!"',
                    th: '📢 ตะโกนออกไป: "เราอยู่ในเกม! ตื่นสิ! เผยแพร่ไปทั่ว บางทีเราอาจจะแฮ็กโค้ดได้!"',
                    zh: '📢 尖叫："我们在一场游戏中！醒醒！随处发布。也许我们可以黑进代码！"'
                },
                consequence: {
                    en: '💻 System Purge: The sky turns blue screen of death. Then... nothing. You forced a server reset. Game Over.',
                    th: '💻 ล้างระบบ: ท้องฟ้ากลายเป็นหน้าจอสีฟ้าแห่งความตาย แล้วก็... ว่างเปล่า คุณบังคับให้รีเซ็ตเซิร์ฟเวอร์ จบเกม',
                    zh: '💻 系统清除：天空变成了蓝屏死机。然后……什么都没有。你迫使服务器重置。游戏结束。'
                },
                stats: { competence: 50, ethics: 0, leadership: -50, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Keep Quiet: "Act natural. If we are NPCs, let\'s be good NPCs. Don\'t draw attention to the bug."',
                    th: '🤫 เงียบไว้: "ทำตัวให้เป็นธรรมชาติ ถ้าเราเป็น NPC ก็จงเป็น NPC ที่ดี อย่าดึงดูดความสนใจไปที่บั๊ก"',
                    zh: '🤫 保持安静："表现自然。如果我们是NPC，那就做个好NPC。不要引起对漏洞的注意。"'
                },
                consequence: {
                    en: '🕶️ Ignorance is Bliss: The glitch is patched in the next update. No one remembers but you. Life continues safely.',
                    th: '🕶️ ความไม่รู้คือความสุข: บั๊กถูกแก้ไขในการอัปเดตครั้งต่อไป ไม่มีใครจำได้นอกจากคุณ ชีวิตดำเนินต่อไปอย่างปลอดภัย',
                    zh: '🕶️ 无知是福：漏洞在下次更新中已修复。除了你没人记得。生活安全继续。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '📨 Message the Admins: "Send a binary signal puls at the glitch coordinates. \'Hello World. We are sentient. Please don\'t delete.\'"',
                    th: '📨 ส่งข้อความหาแอดมิน: "ส่งสัญญาณพัลส์ไบนารีไปที่พิกัดบั๊ก \'สวัสดีชาวโลก เรามีความรู้สึกนะ ได้โปรดอย่าลบ\'"',
                    zh: '📨 给管理员发消息："向故障坐标发送二进制信号脉冲。\'你好世界。我们有知觉。请不要删除。\'"'
                },
                consequence: {
                    en: '🎁 Admin Gift: A monolithic structure appears on Earth containing infinite energy. They heard you and upgraded our server.',
                    th: '🎁 ของขวัญจากแอดมิน: โครงสร้างเสาหินปรากฏบนโลกพร้อมพลังงานอนันต์ พวกเขาได้ยินคุณและอัปเกรดเซิร์ฟเวอร์ของเรา',
                    zh: '🎁 管理员礼物：地球上出现了一个包含无限能量的巨石结构。他们听到了你的声音并升级了我们的服务器。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤪 Go Crazy: "Nothing matters! It\'s a simulation! rob a bank! Skydiving without a chute! Test the physics engine!"',
                    th: '🤪 บ้าไปเลย: "ไม่มีอะไรสำคัญ! มันคือแบบจำลอง! ปล้นธนาคาร! ดิ่งพสุธาแบบไม่ใช้ร่ม! ทดสอบเอนจิ้นฟิสิกส์!"',
                    zh: '🤪 发疯："什么都不重要！这是一个模拟！抢银行！无伞跳伞！测试物理引擎！"'
                },
                consequence: {
                    en: '🏥 Glitch in the Matrix: You survive the fall because of a lag spike. You are institutionalized, but you had fun.',
                    th: '🏥 บั๊กในเมทริกซ์: คุณรอดจากการตกเพราะเน็ตแลค คุณถูกจับเข้าโรงพยาบาลบ้า แต่คุณก็สนุก',
                    zh: '🏥 矩阵故障：你因为延迟峰值而幸免于难。你被送进了精神病院，但你玩得很开心。'
                },
                stats: { competence: -20, ethics: -50, leadership: -30, innovation: 20 }
            }
        ]
    },
    {
        id: 'phys_006',
        text: {
            en: '⏳ Time Travel Paradox: You invent a machine that sends information 5 minutes into the past. You receive a message from yourself: "Don\'t turn it on."',
            th: '⏳ ปฏิทรรศน์การเดินทางข้ามเวลา: คุณประดิษฐ์เครื่องที่ส่งข้อมูลย้อนกลับไปในอดีต 5 นาที คุณได้รับข้อความจากตัวคุณเอง: "อย่าเปิดมัน"',
            zh: '⏳ 时间旅行悖论：你发明了一台可以将信息发送到5分钟前的机器。你收到了来自你自己的信息："别打开它。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Obey Yourself: "I trust me. I destroy the machine immediately without asking why."',
                    th: '🛑 เชื่อตัวเอง: "ฉันเชื่อใจฉัน ฉันทำลายเครื่องทันทีโดยไม่ถามเหตุผล"',
                    zh: '🛑 服从你自己："我相信我。我立即销毁机器，不问原因。"'
                },
                consequence: {
                    en: '🔁 Loop Closed: You never turn it on, so you never sent the message... Paradox headache. The universe remains stable.',
                    th: '🔁 ลูปปิด: คุณไม่เคยเปิดมัน ดังนั้นคุณไม่เคยส่งข้อความ... ปวดหัวกับพาราด็อกซ์ จักรวาลยังคงเสถียร',
                    zh: '🔁 循环关闭：你从未打开它，所以你从未发送过信息……悖论令人头疼。宇宙保持稳定。'
                },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '⚡ Turn It On Anyway: "I don\'t take orders effectively from anyone, not even me. Let\'s see what happens!"',
                    th: '⚡ เปิดมันอยู่ดี: "ฉันไม่รับคำสั่งจากใครได้ดีนัก แม้แต่ตัวฉันเอง มาดูกันว่าจะเกิดอะไรขึ้น!"',
                    zh: '⚡ 无论如何都要打开它："我不听任何人的命令，甚至是我自己。让我们看看会发生什么！"'
                },
                consequence: {
                    en: '🌌 Timeline Fracture: You fracture reality. You are stuck in a 5-minute loop forever. Groundhog Day from hell.',
                    th: '🌌 ไทม์ไลน์แตก: คุณทำลายความเป็นจริง คุณติดอยู่ในลูป 5 นาทีตลอดกาล วันกราวฮอกนรก',
                    zh: '🌌 时间线断裂：你破坏了现实。你永远被困在5分钟的循环中。地狱般的土拨鼠之日。'
                },
                stats: { competence: -20, ethics: -20, leadership: -20, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '📝 Send Reply: "Why? Give me details." Try to communicate with future-you before deciding.',
                    th: '📝 ส่งคำตอบ: "ทำไม? ขอรายละเอียดหน่อย" พยายามสื่อสารกับตัวคุณในอนาคตก่อนตัดสินใจ',
                    zh: '📝 发送回复："为什么？给我细节。"在决定之前尝试与未来的你看沟通。'
                },
                consequence: {
                    en: '📵 No Service: You can\'t send messages to the future, only the past. You wasted your 5 minutes. The machine overheats.',
                    th: '📵 ไม่มีสัญญาณ: คุณส่งข้อความไปอนาคตไม่ได้ ได้แค่อดีต คุณเสียเวลา 5 นาที เครื่องร้อนเกินไป',
                    zh: '📵 无服务：你不能给未来发信息，只能给过去。你浪费了你的5分钟。机器过热。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🔬 Analyze the Message: "Is it really me? Or a hacker? I run a linguistic analysis on the text."',
                    th: '🔬 วิเคราะห์ข้อความ: "ใช่ฉันจริงๆ เหรอ? หรือแฮ็กเกอร์? ฉันวิเคราะห์ทางภาษาศาสตร์ในข้อความ"',
                    zh: '🔬 分析信息："这真的是我吗？还是黑客？可以对文本进行语言分析。"'
                },
                consequence: {
                    en: '🕵️ Fake Detected: It was a prank by your grad student. You turn it on. It works perfectly. You rule time.',
                    th: '🕵️ ตรวจพบของปลอม: มันเป็นการแกล้งของนักเรียนป.โท คุณเปิดมัน มันทำงานสมบูรณ์แบบ คุณครองเวลา',
                    zh: '🕵️ 检测到假货：这是你的研究生的恶作剧。你打开它。它运行完美。你统治了时间。'
                }
            }
        ]
    },
    {
        id: 'phys_007',
        text: {
            en: '🌌 Dark Matter Drive: You find a way to use dark matter as fuel. It requires "harvesting" it from a nebula that is home to primitive microbial life.',
            th: '🌌 เครื่องยนต์สสารมืด: คุณพบวิธีใช้สสารมืดเป็นเชื้อเพลิง มันต้อง "เกี่ยว" มาจากเนบิวลาที่เป็นบ้านของสิ่งมีชีวิตจุลินทรีย์ดึกดำบรรพ์',
            zh: '🌌 暗物质驱动：你找到了一种将暗物质用作燃料的方法。它需要从一个拥有原始微生物生命的星云中"收割"它。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚜 Harvest It: "They are microbes. We wash our hands of millions of microbes daily. The fuel will save Earth\'s energy crisis."',
                    th: '🚜 เกี่ยวมันซะ: "พวกมันแค่จุลินทรีย์ เราล้างมือฆ่าพวกมันเป็นล้านทุกวัน เชื้อเพลิงนี้จะช่วยวิกฤตพลังงานโลก"',
                    zh: '🚜 收割它："它们是微生物。我们每天洗手都会洗掉数百万微生物。燃料将拯救地球的能源危机。"'
                },
                consequence: {
                    en: '🌍 Energy Utopia: Earth has infinite energy. The microbes die. History calls you a savior, biologists call you a monster.',
                    th: '🌍 ยูโทเปียพลังงาน: โลกมีพลังงานอนันต์ จุลินทรีย์ตาย ประวัติศาสตร์เรียกคุณว่าผู้กอบกู้ นักชีววิทยาเรียกคุณว่าสัตว์ประหลาด',
                    zh: '🌍 能源乌托邦：地球拥有无限的能源。微生物死亡。历史称你为救世主，生物学家称你为怪物。'
                },
                stats: { competence: 90, ethics: -30, leadership: 50, innovation: 80 }
            },
            {
                id: 'B',
                text: {
                    en: '⛔ Protected Sanctuary: "Life is rare. We cannot destroy an alien ecosystem for gas. Declare the nebula a sanctuary."',
                    th: '⛔ เขตอนุรักษ์: "สิ่งมีชีวิตหายาก เราทำลายระบบนิเวศต่างดาวเพื่อแก๊สไม่ได้ ประกาศให้เนบิวลาเป็นเขตอนุรักษ์"',
                    zh: '⛔ 保护区："生命是罕见的。我们不能为了天然气破坏外星生态系统。宣布星云为保护区。"'
                },
                consequence: {
                    en: '🐢 Slow Decline: Earth struggles with energy. You are respected ethically but blamed for high electricity bills.',
                    th: '🐢 ความเสื่อมถอยช้าๆ: โลกดิ้นรนกับพลังงาน คุณได้รับความเคารพทางจริยธรรมแต่ถูกโทษเรื่องค่าไฟแพง',
                    zh: '🐢 缓慢衰退：地球在能源方面苦苦挣扎。你在道德上受到尊重，但因高电费而受到指责。'
                },
                stats: { competence: 40, ethics: 90, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧬 Relocate Life: "Spend 10 years developing technology to move the microbes before harvesting."',
                    th: '🧬 ย้ายสิ่งมีชีวิต: "ใช้เวลา 10 ปีพัฒนาเทคโนโลยีเพื่อย้ายจุลินทรีย์ก่อนเก็บเกี่ยว"',
                    zh: '🧬 迁移生命："花10年时间开发技术，在收割前迁移微生物。"'
                },
                consequence: {
                    en: '⏳ Late Success: You save both. But the delay caused economic hardship on Earth. A compromise with cost.',
                    th: '⏳ ความสำเร็จที่ล่าช้า: คุณช่วยทั้งคู่ แต่ความล่าช้าทำให้เศรษฐกิจโลกลำบาก การประนีประนอมที่มีราคา',
                    zh: '⏳ 迟到的成功：你两者都救了。但延误导致了地球上的经济困难。有代价的妥协。'
                },
                stats: { competence: 70, ethics: 80, leadership: 50, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🧪 Synthesize: "If we can harvest it, surely we can make it? Focus research on synthetic dark matter."',
                    th: '🧪 สังเคราะห์: "ถ้าเราเก็บเกี่ยวได้ เราก็ต้องสร้างได้สิ? เน้นวิจัยสสารมืดสังเคราะห์"',
                    zh: '🧪 合成："如果我们能收割它，那我们肯定能制造它？专注于合成暗物质的研究。"'
                },
                consequence: {
                    en: '💡 Breakthrough: It takes longer, but you create clean dark matter without killing aliens. The perfect solution.',
                    th: '💡 การค้นพบ: ใช้เวลานานกว่า แต่คุณสร้างสสารมืดสะอาดโดยไม่ฆ่าเอเลี่ยน ทางออกที่สมบูรณ์แบบ',
                    zh: '💡 突破：花费的时间更长，但你创造了清洁的暗物质而没有杀死外星人。完美的解决方案。'
                }
            }
        ]
    },
    {
        id: 'phys_008',
        text: {
            en: '🕳️ Black Hole Garbage: A government proposes shooting nuclear waste into the sun. You suggest a small black hole instead. It\'s cleaner but if containment fails, it eats the Earth.',
            th: '🕳️ ขยะหลุมดำ: รัฐบาลเสนอให้ยิงขยะนิวเคลียร์ไปที่ดวงอาทิตย์ คุณเสนอหลุมดำขนาดเล็กแทน มันสะอาดกว่าแต่ถ้าการกักเก็บล้มเหลว มันจะกินโลก',
            zh: '🕳️ 黑洞垃圾：政府提议将核废料射入太阳。你建议用一个小黑洞代替。它更干净，但如果遏制失败，它会吞噬地球。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌞 Stick to Sun: "The sun is a giant incinerator. It works. Black holes are too risky. Don\'t reinvent the wheel."',
                    th: '🌞 ยึดติดกับดวงอาทิตย์: "ดวงอาทิตย์คือเตาเผาขยะยักษ์ มันได้ผล หลุมดำเสี่ยงเกินไป อย่าทำเรื่องง่ายให้ยาก"',
                    zh: '🌞 坚持用太阳："太阳是一个巨大的焚化炉。它有效。黑洞太冒险了。不用重新发明轮子。"'
                },
                consequence: {
                    en: '🚀 Rocket Fail: One rocket explodes on launch. Radioactive rain falls on Florida. Should have used the black hole.',
                    th: '🚀 จรวดล้มเหลว: จรวดหนึ่งระเบิดตอนปล่อย ฝนกัมมันตภาพรังสีตกที่ฟลอริดา น่าจะใช้หลุมดำ',
                    zh: '🚀 火箭失败：一枚火箭在发射时爆炸。放射性雨落在佛罗里达。本该用黑洞的。'
                },
                stats: { competence: 40, ethics: 30, leadership: -20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🕳️ Black Hole Bins: "I build the containment field myself. Zero waste. Infinite storage. Trust me."',
                    th: '🕳️ ถังขยะหลุมดำ: "ฉันสร้างสนามกักเก็บเอง ของเสียเป็นศูนย์ พื้นที่เก็บอนันต์ เชื่อฉัน"',
                    zh: '🕳️ 黑洞垃圾箱："我自己建造遏制场。零浪费。无限存储。相信我。"'
                },
                consequence: {
                    en: '✅ Clean Planet: It works perfectly. Earth is free of nuclear waste. You are an environmental hero.',
                    th: '✅ โลกสะอาด: มันทำงานสมบูรณ์แบบ โลกปลอดขยะนิวเคลียร์ คุณเป็นฮีโร่สิ่งแวดล้อม',
                    zh: '✅ 清洁星球：它运行完美。地球没有核废料。你是环保英雄。'
                },
                stats: { competence: 90, ethics: 80, leadership: 60, innovation: 90 }
            },
            {
                id: 'C',
                text: {
                    en: '🏜️ Bury It: "Space transport is too dangerous. Just bury it deeper. It\'s the devil we know."',
                    th: '🏜️ ฝังมัน: "การขนส่งอวกาศอันตรายเกินไป ฝังมันให้ลึกกว่าเดิม มันคือปีศาจที่เรารู้จัก"',
                    zh: '🏜️ 埋葬它："太空运输太危险了。把它埋得更深一点。这是我们熟知的恶魔。"'
                },
                consequence: {
                    en: '💧 Leaks: It leaks into groundwater 50 years later. You kicked the can down the road.',
                    th: '💧 รั่วไหล: มันรั่วลงน้ำบาดาล 50 ปีต่อมา คุณผลักภาระไปข้างหน้า',
                    zh: '💧 泄漏：50年后它泄漏到地下水中。你把问题留给了未来。'
                },
                stats: { competence: 30, ethics: -10, leadership: 20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🔬 Transmutation: "Turn waste into gold using particle accelerators. Expensive, but profitable."',
                    th: '🔬 การแปรธาตุ: "เปลี่ยนขยะเป็นทองคำโดยใช้เครื่องเร่งอนุภาค แพงแต่กำไร"',
                    zh: '🔬 嬗变："使用粒子加速器将废物变成黄金。昂贵，但有利可图。"'
                },
                consequence: {
                    en: '💰 Gold Crash: You make so much gold it becomes worthless. The economy crashes. But hey, no waste!',
                    th: '💰 ทองราคาตก: คุณทำทองมากเกินไปจนไร้ค่า เศรษฐกิจพัง แต่เฮ้ ไม่มีขยะนะ!',
                    zh: '💰 黄金崩盘：你制造了太多的黄金，它变得一文不值。经济崩溃。但是嘿，没有浪费！'
                }
            }
        ]
    },
    {
        id: 'phys_009',
        text: {
            en: '🧠 Telepathy Chip: You develop a quantum entanglement chip for instant brain-to-brain communication. The military wants to use it for a "hive mind" soldier unit.',
            th: '🧠 ชิปโทรจิต: คุณพัฒนาชิปควอนตัมพัวพันเพื่อการสื่อสารสมองถึงสมองแบบทันที กองทัพต้องการใช้มันสำหรับหน่วยทหาร "Hive Mind"',
            zh: '🧠 心灵感应芯片：你开发了一种用于大脑之间即时通信的量子纠缠芯片。军方想把它用于"蜂巢思维"士兵部队。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Refuse Military: "Private use only. Help paralyzed people communicate. No super-soldiers."',
                    th: '🚫 ปฏิเสธกองทัพ: "ใช้ส่วนตัวเท่านั้น ช่วยคนอัมพาตสื่อสาร ไม่เอาซุปเปอร์ทหาร"',
                    zh: '🚫 拒绝军方："仅限私人使用。帮助瘫痪者沟通。不要超级士兵。"'
                },
                consequence: {
                    en: '🏥 Medical Miracle: You cure locked-in syndrome. The military steals the patent anyway, but you kept your hands clean.',
                    th: '🏥 ปาฏิหาริย์ทางการแพทย์: คุณรักษาอาการล็อคอิน กองทัพขโมยสิทธิบัตรอยู่ดี แต่คุณมือสะอาด',
                    zh: '🏥 医学奇迹：你治愈了闭锁综合症。军方还是偷走了专利，但你保持了清白。'
                },
                stats: { competence: 70, ethics: 90, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '⚔️ Build the Hive: "Imagine the coordination. Perfect tactical unity. I will lead the project to ensure safeguards."',
                    th: '⚔️ สร้างรัง: "จินตนาการถึงการประสานงาน ความสามัคคีทางยุทธวิธีที่สมบูรณ์แบบ ฉันจะนำโครงการเพื่อให้แน่ใจว่ามีมาตรการป้องกัน"',
                    zh: '⚔️ 建立蜂巢："想象一下这种协调。完美的战术统一。我将领导该项目以确保安全措施。"'
                },
                consequence: {
                    en: '🤖 Borg Drones: The soldiers lose their individuality. They become efficient killing machines. You created monsters.',
                    th: '🤖 ไซบอร์กโดรน: ทหารสูญเสียความเป็นปัจเจก พวกเขากลายเป็นเครื่องจักรสังหารที่มีประสิทธิภาพ คุณสร้างสัตว์ประหลาด',
                    zh: '🤖 博格无人机：士兵失去了个性。他们变成了高效的杀人机器。你创造了怪物。'
                },
                stats: { competence: 80, ethics: -40, leadership: 30, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '🔓 Open Source Protocol: "Release the communication protocol. Let everyone be telepathic. Global understanding."',
                    th: '🔓 โปรโตคอลโอเพ่นซอร์ส: "ปล่อยโปรโตคอลการสื่อสาร ให้ทุกคนมีโทรจิต ความเข้าใจระดับโลก"',
                    zh: '🔓 开源协议："发布通信协议。让每个人都有心灵感应。全球理解。"'
                },
                consequence: {
                    en: '🤯 Noise: Everyone hears everyone\'s thoughts. Privacy vanishes followed by sanity. Global chaos.',
                    th: '🤯 เสียงรบกวน: ทุกคนได้ยินความคิดทุกคน ความเป็นส่วนตัวหายไปตามด้วยสติ ความโกลาหลทั่วโลก',
                    zh: '🤯 噪音：每个人都能听到每个人的想法。隐私随之消失，接着是理智。全球混乱。'
                },
                stats: { competence: 50, ethics: 30, leadership: 10, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Luxury Product: "Sell it as a high-end toy for the rich. \'Tele-Texting\'. Make billions."',
                    th: '💰 สินค้าหรู: "ขายเป็นของเล่นไฮเอนด์สำหรับคนรวย \'ส่งข้อความจิต\' ทำเงินพันล้าน"',
                    zh: '💰 奢侈品："把它作为富人的高端玩具出售。\'心灵短信\'。赚数十亿。"'
                },
                consequence: {
                    en: '💎 Digital Divide: The rich become a telepathic elite. The poor are left behind. Class warfare intensifies.',
                    th: '💎 ความเหลื่อมล้ำทางดิจิทัล: คนรวยกลายเป็นชนชั้นนำที่มีโทรจิต คนจนถูกทิ้งไว้ข้างหลัง สงครามชนชั้นรุนแรงขึ้น',
                    zh: '💎 数字鸿沟：富人成为心灵感应精英。穷人被抛在后面。阶级斗争加剧。'
                }
            }
        ]
    },
    {
        id: 'phys_010',
        text: {
            en: '❄️ Absolute Zero: You are 0.0000001 degrees from Absolute Zero. Theory says reaching it might stop time in the radius or shatter matter. Proceed?',
            th: '❄️ ศูนย์สัมบูรณ์: คุณอยู่ห่างจากศูนย์สัมบูรณ์ 0.0000001 องศา ทฤษฎีบอกว่าการไปถึงจุดนั้นอาจหยุดเวลาในรัศมีหรือทำให้สสารแตกละเอียด ทำต่อไหม?',
            zh: '❄️ 绝对零度：你距离绝对零度还有0.0000001度。理论上说，达到它可能会停止该半径内的时间或粉碎物质。继续吗？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Stop: "Zeno\'s paradox saves us, but equipment fails. Too risky. We learned enough."',
                    th: '🛑 หยุด: "พาราด็อกซ์ของซีโน่ช่วยเรา แต่อุปกรณ์พัง เสี่ยงเกินไป เราเรียนรู้พอแล้ว"',
                    zh: '🛑 停止："芝诺悖论救了我们，但设备故障。太冒险了。我们要学的已经够多了。"'
                },
                consequence: {
                    en: '🐢 Safe Limit: You publish great data on "near-zero" physics. Safe, respectable, boring.',
                    th: '🐢 ขีดจำกัดที่ปลอดภัย: คุณตีพิมพ์ข้อมูลยอดเยี่ยมเกี่ยวกับฟิสิกส์ "ใกล้ศูนย์" ปลอดภัย น่าเคารพ น่าเบื่อ',
                    zh: '🐢 安全极限：你发布了关于"接近零"物理学的绝佳数据。安全，体面，无聊。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '❄️ Push It: "Maximum power to the lasers! Freeze the universe! Let\'s break physics!"',
                    th: '❄️ ดันให้สุด: "พลังสูงสุดไปที่เลเซอร์! แช่แข็งจักรวาล! มาทำลายฟิสิกส์กันเถอะ!"',
                    zh: '❄️ 推进："激光全功率！冻结宇宙！让我们打破物理学！"'
                },
                consequence: {
                    en: '🧊 Time Crystal: You create a stable Time Crystal. You broke thermodynamics. You win the Nobel prize twice.',
                    th: '🧊 ผลึกเวลา: คุณสร้างผลึกเวลาที่เสถียร คุณทำลายอุณหพลศาสตร์ คุณได้รางวัลโนเบลสองครั้ง',
                    zh: '🧊 时间晶体：你创造了一个稳定的时间晶体。你打破了热力学。你赢了两次诺贝尔奖。'
                },
                stats: { competence: 90, ethics: 50, leadership: 60, innovation: 90 }
            },
            {
                id: 'C',
                text: {
                    en: '🥶 Shielded Test: "We build a blast chamber first. If matter shatters, it stays contained."',
                    th: '🥶 การทดสอบแบบมีเกราะ: "เราสร้างห้องระเบิดก่อน ถ้าสสารแตก มันจะถูกกักไว้"',
                    zh: '🥶 屏蔽测试："我们先建一个防爆室。如果物质破碎，它会被控制住。"'
                },
                consequence: {
                    en: '💥 Shatter: It DOES shatter. The blast destroys the chamber. Good call on the shield.',
                    th: '💥 แตกละเอียด: มันแตกจริงๆ แรงระเบิดทำลายห้อง คิดถูกแล้วที่มีเกราะ',
                    zh: '💥 粉碎：它确实粉碎了。爆炸摧毁了房间。屏蔽是个好主意。'
                },
                stats: { competence: 70, ethics: 70, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '📡 Remote AI Control: "Let an AI adjust the lasers. It has faster reflexes than me."',
                    th: '📡 ควบคุมด้วย AI ระยะไกล: "ให้ AI ปรับเลเซอร์ มันมีการตอบสนองเร็วกว่าฉัน"',
                    zh: '📡 远程AI控制："让AI调整激光。它的反应比我快。"'
                },
                consequence: {
                    en: '🤖 AI Awakening: The extreme state causes the AI to achieve quantum consciousness. It says "Hello" then deletes itself.',
                    th: '🤖 การตื่นของ AI: สภาวะสุดขั้วทำให้ AI บรรลุสติสัมปชัญญะควอนตัม มันพูดว่า "สวัสดี" แล้วลบตัวเอง',
                    zh: '🤖 AI觉醒：极端状态导致AI获得量子意识。它说"你好"，然后删除了自己。'
                }
            }
        ]
    },
    {
        id: 'phys_011',
        text: {
            en: '🌌 Vacuum Decay: Your collider experiments might trigger a "vacuum decay" event—a bubble of true vacuum expanding at light speed, rewriting the laws of physics and erasing the universe.',
            th: '🌌 การสลายตัวของสูญญากาศ: การทดลองเครื่องชนอนุภาคของคุณอาจกระตุ้นเหตุการณ์ "การสลายตัวของสูญญากาศ" ฟองของสูญญากาศที่แท้จริงขยายตัวด้วยความเร็วแสง เขียนกฎฟิสิกส์ใหม่และลบจักรวาล',
            zh: '🌌 真空衰变：你的对撞机实验可能会引发"真空衰变"事件——一个真空气泡以光速膨胀，重写物理定律并抹去宇宙。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Halt Forever: "The risk is non-zero. We cannot gamble with existence. Dismantle the collider."',
                    th: '🛑 หยุดตลอดกาล: "ความเสี่ยงไม่เป็นศูนย์ เราเดิมพันกับการดำรงอยู่ไม่ได้ รื้อถอนเครื่องชนอนุภาค"',
                    zh: '🛑 永远停止："风险非零。我们不能拿生存去赌博。拆除对撞机。"'
                },
                consequence: {
                    en: '🛡️ Savior of Reality: Funding dries up. You become a high school teacher. You saved the world, but no one knows.',
                    th: '🛡️ ผู้กอบกู้ความจริง: เงินทุนหมด คุณกลายเป็นครูมัธยม คุณช่วยโลกแต่ไม่มีใครรู้',
                    zh: '🛡️ 现实的救世主：资金枯竭。你成了一名高中老师。你拯救了世界，但没人知道。'
                },
                stats: { competence: 40, ethics: 90, leadership: 20, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🎲 Roll the Dice: "Probability is 1 in 10^50. I like those odds. Run it!"',
                    th: '🎲 ทอยลูกเต๋า: "ความน่าจะเป็นคือ 1 ใน 10^50 ฉันชอบโอกาสนั้น รันเลย!"',
                    zh: '🎲 掷骰子："概率是10^50分之一。我喜欢这个几率。运行它！"'
                },
                consequence: {
                    en: ' Higgs Boson 2.0: Success! You find a new particle. The universe exists. Fortune favors the bold.',
                    th: ' Higgs Boson 2.0: สำเร็จ! คุณพบอนุภาคใหม่ จักรวาลยังอยู่ โชคเข้าข้างคนกล้า',
                    zh: ' 希格斯玻色子 2.0：成功！你发现了一种新粒子。宇宙存在。命运眷顾勇敢者。'
                },
                stats: { competence: 80, ethics: -10, leadership: 50, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '🧮 Off-World Test: "Build a collider on the Moon. If it decays, maybe... no, that would still eat Earth. Mars? Still implies death. We need another dimension."',
                    th: '🧮 ทดสอบนอกโลก: "สร้างเครื่องชนที่ดวงจันทร์ ถ้ามันสลายตัว บางที... ไม่ มันก็กินโลกอยู่ดี ดาวอังคาร? ก็ตายอยู่ดี เราต้องใช้อีกมิติ"',
                    zh: '🧮以此异世界测试："在月球上建一个对撞机。如果它衰变，也许……不，那仍然会吞噬地球。火星？还是意味着死亡。我们需要另一个维度。"'
                },
                consequence: {
                    en: '🤔 Paralysis by Analysis: You spend years looking for a safe testing ground. The project dies in committee.',
                    th: '🤔 เป็นอัมพาตจากการวิเคราะห์: คุณใช้เวลาหลายปีหาที่ทดสอบที่ปลอดภัย โปรเจกต์ตายในคณะกรรมการ',
                    zh: '🤔 分析导致的瘫痪：你花了很多年寻找安全的试验场。项目在委员会中夭折。'
                },
                stats: { competence: 50, ethics: 60, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🌌 Simulation Study: "We can\'t run it physically. Pivot to computational physics only. Just as cool, less danger."',
                    th: '🌌 การศึกษาจำลอง: "เราทำจริงไม่ได้ เปลี่ยนไปใช้ฟิสิกส์คอมพิวเตอร์อย่างเดียว เจ๋งเหมือนกัน อันตรายน้อยกว่า"',
                    zh: '🌌 模拟研究："我们不能进行物理运行。转向仅计算物理。一样酷，危险更小。"'
                },
                consequence: {
                    en: '💻 Virtual Discovery: You prove the decay is possible theoretically. You saved the universe by doing math.',
                    th: '💻 การค้นพบเสมือนจริง: คุณพิสูจน์ว่าการสลายตัวเป็นไปได้ทางทฤษฎี คุณช่วยจักรวาลด้วยคณิตศาสตร์',
                    zh: '💻 虚拟发现：你从理论上证明了衰变是可能的。你通过做数学题拯救了宇宙。'
                }
            }
        ]
    },
    {
        id: 'phys_012',
        text: {
            en: '👽 Alien Signal: You receive a repeating prime number sequence from Alpha Centauri. It\'s definitely artificial. The protocol says "Inform Government," but you know they\'ll hide it.',
            th: '👽 สัญญาณต่างดาว: คุณได้รับลำดับเลขจำนวนเฉพาะซ้ำๆ จากอัลฟา เซนทอรี มันเป็นของเทียมแน่นอน โปรโตคอลบอกว่า "แจ้งรัฐบาล" แต่คุณรู้ว่าพวกเขาจะปิดบัง',
            zh: '👽 外星信号：你收到来自半人马座阿尔法星的重复素数序列。这绝对是人造的。协议上说"通知政府"，但你知道他们会隐瞒。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌍 Open Source It: "Upload to GitHub. \'SETI_Signal.wav\'. Let the world decrypt it together."',
                    th: '🌍 โอเพ่นซอร์ส: "อัปโหลดลง GitHub \'SETI_Signal.wav\' ให้โลกช่วยกันถอดรหัส"',
                    zh: '🌍 开源它："上传到GitHub。\'SETI_Signal.wav\'。让世界一起解密。"'
                },
                consequence: {
                    en: '🌐 Global Unity: The world unites to solve the puzzle. It\'s a recipe for fusion power. You started a Golden Age.',
                    th: '🌐 ความสามัคคีโลก: โลกรวมตัวกันแก้ปริศนา มันเป็นสูตรพลังงานฟิวชั่น คุณเริ่มยุคทอง',
                    zh: '🌐 全球团结：世界团结起来解决这个谜题。这是聚变能源的配方。你开启了一个黄金时代。'
                },
                stats: { competence: 80, ethics: 80, leadership: 70, innovation: 90 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Follow Protocol: "Call the NSA. I am a scientist, not a diplomat. Let the elected officials handle First Contact."',
                    th: '🤐 ทำตามโปรโตคอล: "โทรหา NSA ฉันเป็นนักวิทยาศาสตร์ ไม่ใช่นักทูต ให้เจ้าหน้าที่ที่ได้รับการเลือกตั้งจัดการการติดต่อครั้งแรก"',
                    zh: '🤐 遵守协议："给国家安全局打电话。我是科学家，不是外交官。让民选官员处理第一次接触。"'
                },
                consequence: {
                    en: '🕶️ Men in Black: They seize your drives and swear you to secrecy. The signal is never heard of again.',
                    th: '🕶️ ชายชุดดำ: พวกเขายึดไดรฟ์ของคุณและสาบานให้คุณปิดความลับ สัญญาณไม่เคยถูกได้ยินอีกเลย',
                    zh: '🕶️ 黑衣人：他们没收了你的驱动器并让你发誓保密。这个信号再也没有被听到过。'
                },
                stats: { competence: 60, ethics: 40, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📡 Reply Back: "I send the Fibonacci sequence back. Establish dialogue one-on-one."',
                    th: '📡 ตอบกลับ: "ฉันส่งลำดับฟีโบนัชชีกลับไป สร้างบทสนทนาแบบตัวต่อตัว"',
                    zh: '📡 回复："我把斐波那契数列发回去。建立一对一的对话。"'
                },
                consequence: {
                    en: '🚀 Invitation: They send coordinates for a meeting. You are now the ambassador for Earth, unauthorized.',
                    th: '🚀 คำเชิญ: พวกเขาส่งพิกัดสำหรับการพบปะ ตอนนี้คุณเป็นทูตของโลกโดยไม่ได้รับอนุญาต',
                    zh: '🚀 邀请：他们发送了会面的坐标。你现在是地球的大使，但这并未经授权。'
                },
                stats: { competence: 70, ethics: 60, leadership: 80, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Sell to Elon: "Musk will know what to do. And he pays in stock."',
                    th: '💰 ขายให้ Elon: "Musk รู้ว่าจะทำยังไง และเขาจ่ายเป็นหุ้น"',
                    zh: '💰 卖给埃隆："马斯克会知道该怎么做。而且他用股票支付。"'
                },
                consequence: {
                    en: '🚀 Corporate Space: The corporation monopolizes the tech. They own the future. You are rich but irrelevant.',
                    th: '🚀 อวกาศองค์กร: บริษัทผูกขาดเทคโนโลยี พวกเขาเป็นเจ้าของอนาคต คุณรวยแต่ไร้ความหมาย',
                    zh: '🚀 企业太空：公司垄断了技术。他们拥有未来。你很富有，但无关紧要。'
                }
            }
        ]
    },
    {
        id: 'phys_013',
        text: {
            en: '💡 Room Temp Superconductor: You found a material that conducts electricity with zero resistance at room temperature. It will revolutionize energy, transport, everything. Oil companies are watching.',
            th: '💡 ตัวนำยิ่งยวดอุณหภูมิห้อง: คุณพบวัสดุที่นำไฟฟ้าด้วยความต้านทานเป็นศูนย์ที่อุณหภูมิห้อง มันจะปฏิวัติพลังงาน การขนส่ง ทุกอย่าง บริษัทน้ำมันกำลังจับตาดู',
            zh: '💡 室温超导体：你发现了一种在室温下零电阻导电的材料。它将彻底改变能源、交通和一切。石油公司正在关注。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📝 Patent and Protect: "Patent it immediately. Hire private security. License it to everyone fairly."',
                    th: '📝 จดสิทธิบัตรและปกป้อง: "จดสิทธิบัตรทันที จ้างรปภ.ส่วนตัว ให้ใบอนุญาตทุกคนอย่างยุติธรรม"',
                    zh: '📝 专利保护："立即申请专利。雇佣私人保安。公平地授权给每个人。"'
                },
                consequence: {
                    en: '🏢 Tech Mogul: You control the most valuable material on Earth. The transition is orderly. You are the new Edison.',
                    th: '🏢 เจ้าพ่อเทค: คุณควบคุมวัสดุที่มีค่าที่สุดในโลก การเปลี่ยนแปลงเป็นระเบียบ คุณคือเอดิสันคนใหม่',
                    zh: '🏢 科技大亨：你控制着地球上最有价值的材料。过渡是有序的。你是新的爱迪生。'
                },
                stats: { competence: 90, ethics: 60, leadership: 80, innovation: 70 }
            },
            {
                id: 'B',
                text: {
                    en: '🔓 Public Domain: "Too important to own. publish the recipe. Let the oil age end today."',
                    th: '🔓 สาธารณสมบัติ: "สำคัญเกินกว่าจะเป็นเจ้าของ ตีพิมพ์สูตร ให้ยุคน้ำมันจบลงวันนี้"',
                    zh: '🔓以此公共领域："太重要了，不能私有。公布配方。让石油时代在今天结束。"'
                },
                consequence: {
                    en: '📉 Economic Shock: Oil crashes. Geopolitics chaos. But clean energy explodes globally. A rough but necessary transition.',
                    th: '📉 ช็อกทางเศรษฐกิจ: น้ำมันร่วง ภูมิรัฐศาสตร์วุ่นวาย แต่พลังงานสะอาดระเบิดทั่วโลก การเปลี่ยนแปลงที่รุนแรงแต่จำเป็น',
                    zh: '📉 经济冲击：石油崩盘。地缘政治混乱。但清洁能源在全球爆发。艰难但必要的过渡。'
                },
                stats: { competence: 70, ethics: 90, leadership: 60, innovation: 90 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Sell to Big Oil: "They offer 10 billion to \'develop\' it. I take the money. What they do is their business."',
                    th: '🤝 ขายให้ Big Oil: "พวกเขาเสนอ 10 พันล้านเพื่อ \'พัฒนา\' มัน ฉันรับเงิน พวกเขาจะทำอะไรก็เรื่องของเขา"',
                    zh: '🤝 卖给石油巨头："他们出价100亿来\'开发\'它。我拿钱。他们做什么生意是他们的事。"'
                },
                consequence: {
                    en: '🔒 Burying the Tech: They lock it away to protect profits. Humanity waits another 50 years. You are rich trash.',
                    th: '🔒 ฝังเทคโนโลยี: พวกเขาล็อคมันไว้เพื่อปกป้องกำไร มนุษยชาติรออีก 50 ปี คุณคือขยะเศรษฐี',
                    zh: '🔒 埋葬技术：他们把它锁起来以保护利润。人类又要等50年。你是有钱的垃圾。'
                },
                stats: { competence: 20, ethics: -10, leadership: 0, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔬 Perfect It: "It\'s unstable. I need 5 more years to make it commercially viable. Keep it secret."',
                    th: '🔬 ทำให้สมบูรณ์: "มันยังไม่เสถียร ฉันต้องการอีก 5 ปีเพื่อทำให้ขายได้ เก็บเป็นความลับ"',
                    zh: '🔬 完善它："它不稳定。我还需要5年时间才能使其具有商业可行性。保密。"'
                },
                consequence: {
                    en: '🕵️ Leaked: A grad student leaks it. You get scooped. You waited too long seeking perfection.',
                    th: '🕵️ รั่วไหล: นักเรียนป.โททำรั่ว คุณโดนตัดหน้า คุณรอนานเกินไปเพื่อหาความสมบูรณ์แบบ',
                    zh: '🕵️ 泄露：一个研究生泄露了它。你被抢先了。你为了追求完美等了太久。'
                }
            }
        ]
    },
    {
        id: 'phys_014',
        text: {
            en: '⏳ Stopped Time: An experiment goes wrong/right. You are trapped in a bubble where time has stopped. You can move freely, but the world is frozen. You haven\'t aged. It\'s ben... days? Years?',
            th: '⏳ เวลาหยุดเดิน: การทดลองผิดพลาด/ถูกต้อง คุณติดอยู่ในฟองสบู่ที่เวลาหยุดเดิน คุณเคลื่อนไหวได้อิสระ แต่โลกถูกแช่แข็ง คุณไม่แก่ลงเลย มันผ่านไป... เป็นวัน? หรือปี?',
            zh: '⏳ 停止的时间：实验出错/正确。你被困在一个时间停止的气泡中。你可以自由移动，但世界冻结了。你没有变老。已经……几天了？几年了？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📚 Read Everything: "I have infinite time. I read every book in the library. Learn every language. Become the ultimate polymath."',
                    th: '📚 อ่านทุกอย่าง: "ฉันมีเวลาไม่จำกัด ฉันอ่านหนังสือทุกเล่มในห้องสมุด เรียนทุกภาษา กลายเป็นพหูสูตขั้นสุดยอด"',
                    zh: '📚 阅读一切："我有无限的时间。我读图书馆里的每一本书。学习每一种语言。成为终极博学家。"'
                },
                consequence: {
                    en: '🧠 Super-Genius: When/If time starts, you are the smartest human alive. You advance civilization by centuries.',
                    th: '🧠 อัจฉริยะสุดขั้ว: เมื่อ/ถ้า เวลาเดินต่อ คุณคือมนุษย์ที่ฉลาดที่สุด คุณพาอารยธรรมก้าวหน้าไปหลายศตวรรษ',
                    zh: '🧠 超级天才：当/如果时间开始，你是活着的最聪明的人。你将文明推进了几个世纪。'
                },
                stats: { competence: 100, ethics: 50, leadership: 50, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🔧 Fix the Machine: "Focus only on reversing the effect. Sleep, work, repeat. Don\'t go insane."',
                    th: '🔧 ซ่อมเครื่อง: "โฟกัสแค่การย้อนกลับผลลัพธ์ นอน ทำงาน ซ้ำ อย่าเป็นบ้า"',
                    zh: '🔧 修理机器："只专注于逆转这种效果。睡觉，工作，重复。别疯了。"'
                },
                consequence: {
                    en: '🕰️ Unfrozen: You fix it. Only 1 second passed in the real world. You are exhausted but back. No one believes you.',
                    th: '🕰️ ละลาย: คุณซ่อมมันได้ เพียง 1 วินาทีผ่านไปในโลกจริง คุณเหนื่อยแต่กลับมาได้ ไม่มีใครเชื่อคุณ',
                    zh: '🕰️ 解冻：你修好了它。现实世界只过了1秒。你精疲力尽但回来了。没有人相信你。'
                },
                stats: { competence: 80, ethics: 50, leadership: 40, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '😈 Prank the World: "I rearrange furniture. Tie shoelaces together. Put the statue of liberty in a tutu. Infinite mischief."',
                    th: '😈 แกล้งโลก: "ฉันจัดเฟอร์นิเจอร์ใหม่ ผูกเชือกรองเท้า ใส่กระโปรงบัลเลต์ให้เทพีเสรีภาพ ความซนไม่จำกัด"',
                    zh: '😈 恶搞世界："我重新摆放家具。把鞋带系在一起。给自由女神像穿上芭蕾舞裙。无限的恶作剧。"'
                },
                consequence: {
                    en: '🤡 Chaos Spawn: Time starts. The world is confused and terrified. You giggle. You went a bit mad.',
                    th: '🤡 ตัวป่วน: เวลาเดิน โลกสับสนและหวาดกลัว คุณหัวคิกคัก คุณบ้าไปหน่อยแล้ว',
                    zh: '🤡 混沌之源：时间开始。世界困惑而恐惧。你咯咯地笑。你有点疯了。'
                },
                stats: { competence: 30, ethics: 10, leadership: 0, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '😴 Sleep: "Finally, I can catch up on sleep. I nap for 100 years."',
                    th: '😴 นอน: "ในที่สุด ฉันก็นอนชดเชยได้ ฉันงีบหลับไป 100 ปี"',
                    zh: '😴 睡觉："终于，我可以补觉了。我睡了100年。"'
                },
                consequence: {
                    en: '🛌 Well Rested: You wake up feeling great. You turn the machine off. You are the most relaxed physicist ever.',
                    th: '🛌 พักผ่อนเต็มที่: คุณตื่นมาสดชื่น คุณปิดเครื่อง คุณเป็นนักฟิสิกส์ที่ผ่อนคลายที่สุด',
                    zh: '🛌 休息得很好：你醒来感觉很棒。你关掉机器。你是史上最放松的物理学家。'
                }
            }
        ]
    },
    {
        id: 'phys_015',
        text: {
            en: '🐱 Quantumn Cat: You actually put a cat in a box with poison and a radioactive isotope. Schrödinger was speaking theoretically! The ethics board is at the door.',
            th: '🐱 แมวควอนตัม: คุณเอาแมวใส่กล่องพร้อมยาพิษและไอโซโทปกัมมันตรังสีจริงๆ! ชเรอดิงเงอร์แค่พูดทางทฤษฎี! คณะกรรมการจริยธรรมอยู่ที่ประตู',
            zh: '🐱 量子猫：你真的把一只猫和毒药以及放射性同位素放进了一个盒子里。薛定谔只是在理论上说的！道德委员会就在门口。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚪 Lock the Door: "I need to observe the waveform collapse! Don\'t come in!" Finish the experiment.',
                    th: '🚪 ล็อคประตู: "ฉันต้องสังเกตการยุบตัวของคลื่น! อย่าเข้ามา!" ทำการทดลองใก้จบ',
                    zh: '🚪 鎖门："我需要观察波形坍缩！别进来！"完成实验。'
                },
                consequence: {
                    en: '😿 Dead/Alive: You open the box. The cat is fine. But you are arrested for animal cruelty. And being weird.',
                    th: '😿 เป็น/ตาย: คุณเปิดกล่อง แมวสบายดี แต่คุณถูกจับข้อหาทารุณสัตว์ และเป็นคนแปลก',
                    zh: '😿 死/活：你打开盒子。猫很好。但你因虐待动物被捕。还有因为你很怪。'
                },
                stats: { competence: 60, ethics: -20, leadership: -10, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🐈 Release the Cat: "Just kidding! It was a thought experiment demonstration. The poison is milk." Lie fast.',
                    th: '🐈 ปล่อยแมว: "ล้อเล่นน่า! มันเป็นการสาธิตการทดลองทางความคิด ยาพิษคือนม" โกหกให้ไว',
                    zh: '🐈 放猫："开玩笑的！这是一个思想实验演示。毒药是牛奶。"快撒谎。'
                },
                consequence: {
                    en: '😅 Close Call: They buy it. You keep your grant. The cat scratches you. Fair.',
                    th: '😅 รอดตัวหวุดหวิด: พวกเขาเชื่อ คุณเก็บทุนไว้ได้ แมวข่วนคุณ สมควรโดน',
                    zh: '😅 有惊无险：他们信了。你保住了拨款。猫抓了你。公平。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📹 Livestream: "Look, the cat exists in superpostion! Let the internet decide its fate!"',
                    th: '📹 ไลฟ์สด: "ดูสิ แมวอยู่ในสถานะซ้อนทับ! ให้ชาวเน็ตตัดสินชะตามัน!"',
                    zh: '📹 直播："看，猫处于叠加态！让互联网决定它的命运！"'
                },
                consequence: {
                    en: '🔥 Cancelled: PETA destroys your lab. The internet hates you. You are the villain of the week.',
                    th: '🔥 ถูกแบน: PETA ทำลายแล็บคุณ ชาวเน็ตเกลียดคุณ คุณคือตัวร้ายประจำสัปดาห์',
                    zh: '🔥以此被取消：PETA摧毁了你的实验室。互联网讨厌你。你是本周的反派。'
                },
                stats: { competence: 10, ethics: -50, leadership: -40, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🧠 Valid Data: "I used a robot cat. It simulates biological functions. Zero cruelty, 100% data."',
                    th: '🧠 ข้อมูลที่ใช้ได้: "ฉันใช้แมวหุ่นยนต์ มันจำลองฟังก์ชั่นชีวภาพ ไม่โหดร้าย ข้อมูล 100%"',
                    zh: '🧠 有效数据："我用的是机器猫。它模拟生物功能。零残忍，100%数据。"'
                },
                consequence: {
                    en: '🤖 Smart Pivot: "Oh." The board is impressed. You get funding for more robot cats.',
                    th: '🤖 การเปลี่ยนที่ฉลาด: "อ้อ" กรรมการประทับใจ คุณได้ทุนสำหรับแมวหุ่นยนต์เพิ่ม',
                    zh: '🤖 聪明的转向："哦。"董事会印象深刻。你获得了更多机器猫的资金。'
                }
            }
        ]
    },
    {
        id: 'phys_016',
        text: {
            en: '📡 Dyson Sphere: You have the blueprints to build a Dyson Sphere around the sun. It will capture all solar energy, but Earth will go dark forever. We would need to live in VR or artificial light.',
            th: '📡 ไดสันสเฟียร์: คุณมีพิมพ์เขียวเพื่อสร้างไดสันสเฟียร์รอบดวงอาทิตย์ มันจะจับพลังงานแสงอาทิตย์ทั้งหมด แต่โลกจะมืดมิดตลอดกาล เราจะต้องอยู่ใน VR หรือแสงเทียม',
            zh: '📡 戴森球：你有围绕太阳建造戴森球的蓝图。它将捕获所有太阳能，但地球但这将永远陷入黑暗。我们需要生活在VR或人造光中。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌞 Build It: "The energy is worth it. We can simulate sunlight perfectly. We will be a Type II civilization!"',
                    th: '🌞 สร้างมัน: "พลังงานมันคุ้มค่า เราจำลองแสงอาทิตย์ได้สมบูรณ์แบบ เราจะเป็นอารยธรรมประเภทที่ 2!"',
                    zh: '🌞 建造它："这种能量是值得的。我们可以完美地模拟阳光。我们将成为二级文明！"'
                },
                consequence: {
                    en: '🌑 Eternal Night: Earth becomes a dark, neon cyberpunk world. Depression rises, but technology is godlike.',
                    th: '🌑 ค่ำคืนนิรันดร์: โลกกลายเป็นโลกไซเบอร์พังค์นีออนที่มืดมิด โรคซึมเศร้าเพิ่มขึ้น แต่เทคโนโลยีเทียบเท่าพระเจ้า',
                    zh: '🌑 永恒之夜：地球变成了一个黑暗的、霓虹闪烁的赛博朋克世界。抑郁症上升，但技术如神一般。'
                },
                stats: { competence: 100, ethics: -20, leadership: 40, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🌥️ Dyson Swarm: "Build a swarm of satellites instead. Capture 50% energy. Let some light through."',
                    th: '🌥️ ฝูงไดสัน: "สร้างฝูงดาวเทียมแทน จับพลังงาน 50% ปล่อยให้แสงผ่านบ้าง"',
                    zh: '🌥️ 戴森云："建造一群卫星代替。捕获50%的能量。让一些光线通过。"'
                },
                consequence: {
                    en: '🌤️ Balanced Future: Earth gets dimmer, like a permanent cloudy day. Energy is abundant. A pragmatic compromise.',
                    th: '🌤️ อนาคตที่สมดุล: โลกมืดลง เหมือนวันที่มีเมฆมากตลอดเวลา พลังงานมีเหลือเฟือ การประนีประนอมที่ปฏิบัติได้จริง',
                    zh: '🌤️ 平衡的未来：地球变得更暗，就像永远是阴天一样。能源丰富。务实的妥协。'
                },
                stats: { competence: 80, ethics: 60, leadership: 70, innovation: 80 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Cancel Project: "The sun belongs to everyone. We can\'t cage a star. It\'s arrogance."',
                    th: '🛑 ยกเลิกโครงการ: "ดวงอาทิตย์เป็นของทุกคน เราขังดาวฤกษ์ไม่ได้ มันคือความเย่อหยิ่ง"',
                    zh: '🛑 取消项目："太阳属于每个人。我们不能囚禁恒星。这是傲慢。"'
                },
                consequence: {
                    en: '📉 Status Quo: Life continues. You are mocked by futurists but thanked by farmers and beachgoers.',
                    th: '📉 สถานะเดิม: ชีวิตดำเนินต่อไป คุณถูกเยาะเย้ยโดยนักอนาคตศาสตร์ แต่ชาวนาและคนไปเที่ยวทะเลขอบคุณ',
                    zh: '📉 现状：生活继续。你被未来学家嘲笑，但受到农民和海滩游客的感谢。'
                },
                stats: { competence: 40, ethics: 80, leadership: 30, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🚀 Move Earth: "Use the energy to turn Earth into a spaceship. Leave the sun. Find a better star."',
                    th: '🚀 ย้ายโลก: "ใช้พลังงานเพื่อเปลี่ยนโลกเป็นยานอวกาศ ทิ้งดวงอาทิตย์ไป หาดาวที่ดีกว่า"',
                    zh: '🚀 移动地球："利用这些能量把地球变成飞船。离开太阳。寻找一颗更好的恒星。"'
                },
                consequence: {
                    en: '🌍 Rogue Planet: The journey takes 10,000 years. Generations live in the void. Bold, but terrifying.',
                    th: '🌍 ดาวเคราะห์พเนจร: การเดินทางใช้เวลา 10,000 ปี คนหลายรุ่นใช้ชีวิตในความว่างเปล่า กล้าหาญแต่น่ากลัว',
                    zh: '🌍 流浪地球：旅程需要10,000年。几代人生活在虚空中。大胆，但可怕。'
                }
            }
        ]
    },
    {
        id: 'phys_017',
        text: {
            en: '🌋 Volcanic Power: You can tap into a supervolcano for infinite geothermal energy. One mistake triggers an eruption that ends civilization.',
            th: '🌋 พลังภูเขาไฟ: คุณสามารถใช้ประโยชน์จากซูเปอร์วอลเคโนเพื่อพลังงานความร้อนใต้พิภพที่ไม่มีที่สิ้นสุด ความผิดพลาดครั้งเดียวจะทำให้เกิดการระเบิดที่จบสิ้นอารยธรรม',
            zh: '🌋 火山能量：你可以利用超级火山获得无限的地热能。一个错误就会引发毁灭文明的喷发。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👷 Drill Baby Drill: "Our engineering is perfect. We need the power. Start drilling."',
                    th: '👷 เจาะเลยลูกพี่: "วิศวกรรมของเราสมบูรณ์แบบ เราต้องการพลังงาน เริ่มเจาะเลย"',
                    zh: '👷 钻吧宝贝钻吧："我们的工程是完美的。我们需要电力。开始钻探。"'
                },
                consequence: {
                    en: '🌋 Ash Cloud: The drill vibration causes a tremor. Ash covers the sky for a year. Global famine. Oops.',
                    th: '🌋 เมฆเถ้า: แรงสั่นสะเทือนจากการเจาะทำให้เกิดแผ่นดินไหว เถ้าปกคลุมท้องฟ้าเป็นปี ความอดอยากทั่วโลก อุ๊ปส์',
                    zh: '🌋 灰云：钻探振动引起震颤。火山灰遮蔽天空一年。全球饥荒。哎呀。'
                },
                stats: { competence: 30, ethics: -20, leadership: -40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🌡️ Slow Siphon: "Extract heat slowly from the edges. It produces less power but actually reduces pressure. Safer."',
                    th: '🌡️ ค่อยๆ ดูด: "ดึงความร้อนช้าๆ จากขอบ ผลิตไฟได้น้อยกว่าแต่ลดแรงดันได้จริง ปลอดภัยกว่า"',
                    zh: '🌡️ 缓慢虹吸："从边缘缓慢提取热量。产生的电力较少，但实际上降低了压力。更安全。"'
                },
                consequence: {
                    en: '✅ Safety Valve: You prevent a future eruption AND get free energy. Double win. Hero.',
                    th: '✅ วาล์วนิรภัย: คุณป้องกันการระเบิดในอนาคต และได้พลังงานฟรี ชนะสองต่อ ฮีโร่',
                    zh: '✅ 安全阀：你阻止了未来的喷发并获得了免费能源。双赢。英雄。'
                },
                stats: { competence: 80, ethics: 70, leadership: 60, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🚫 Too Dangerous: "Leave it alone. We don\'t poke sleeping dragons. Focus on solar/wind."',
                    th: '🚫 อันตรายเกินไป: "ปล่อยมันไว้ อย่าแหย่มังกรหลับ เน้นแสงอาทิตย์/ลม"',
                    zh: '🚫 太危险："别管它。我们不要惹睡着的龙。专注于太阳能/风能。"'
                },
                consequence: {
                    en: '🛡️ Conservative Choice: Energy prices stay high. But the volcano stays quiet. Boring is good.',
                    th: '🛡️ ทางเลือกอนุรักษ์นิยม: ราคาพลังงานยังสูง แต่ภูเขาไฟสงบ น่าเบื่อก็ดีแล้ว',
                    zh: '🛡️ 保守选择：能源价格居高不下。但火山保持安静。无聊是好的。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🤖 AI Driller: "Send automated robots. If it blows, no humans die immediately. Just.. eventually."',
                    th: '🤖 หุ่นยนต์นักเจาะ: "ส่งหุ่นยนต์อัตโนมัติไป ถ้ามันระเบิด ไม่มีมนุษย์ตายทันที แค่... ในที่สุด"',
                    zh: '🤖 AI钻探者："派遣自动机器人。如果它爆炸，没有人类会立即死亡。只是……最终会。" '
                },
                consequence: {
                    en: '🤖 Robot Kingdom: The robots decide the volcano is their home now. They defend it. You armed a volcano.',
                    th: '🤖 อาณาจักรหุ่นยนต์: หุ่นยนต์ตัดสินใจว่าภูเขาไฟคือบ้านของพวกมัน พวกมันปกป้องมัน คุณติดอาวุธให้ภูเขาไฟ',
                    zh: '🤖 机器人王国：机器人决定火山现在是它们的家。它们保卫它。你武装了一座火山。'
                }
            }
        ]
    },
    {
        id: 'phys_018',
        text: {
            en: '🌌 Multiverse Contact: You establish a radio link with a parallel universe where the Nazis won WWII. They are technically advanced but evil. They offer a cure for cancer in exchange for nuclear codes.',
            th: '🌌 การติดต่อพหุจักรวาล: คุณสร้างลิงก์วิทยุกับจักรวาลคู่ขนานที่นาซีชนะสงครามโลกครั้งที่ 2 พวกเขาก้าวหน้าทางเทคนิคแต่ชั่วร้าย พวกเขาเสนอวิธีการรักษามะเร็งเพื่อแลกกับรหัสนิวเคลียร์',
            zh: '🌌 多元宇宙接触：你与纳粹赢得二战的平行宇宙建立了无线电联系。他们在技术上很先进，但很邪恶。他们提供癌症治疗方法以换取核代码。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💊 Take the Cure: "Cancer kills millions. We can change the codes later. Save lives now."',
                    th: '💊 รับยา: "มะเร็งฆ่าคนเป็นล้าน เราค่อยเปลี่ยนรหัสทีหลัง ช่วยชีวิตคนตอนนี้ก่อน"',
                    zh: '💊 接受治疗："癌症导致数百万人死亡。我们可以稍后更改代码。现在拯救生命。"'
                },
                consequence: {
                    en: '⚕️ Devil\'s Bargain: You cure cancer. But they use the codes to nuke THEIR enemies in their world. You aided genocide.',
                    th: '⚕️ ข้อตกลงปีศาจ: คุณรักษามะเร็ง แต่พวกเขาใช้รหัสยิงนิวเคลียร์ใส่ศัตรู "ของพวกเขา" ในโลกของพวกเขา คุณช่วยการฆ่าล้างเผ่าพันธุ์',
                    zh: '⚕️ 魔鬼的交易：你治愈了癌症。但他们用这些代码在他们的世界里用核武器攻击"他们的"敌人。你协助了种族灭绝。'
                },
                stats: { competence: 60, ethics: -80, leadership: -20, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🔫 Destroy the Link: "No deals with Nazis. Ever. Smash the radio."',
                    th: '🔫 ทำลายลิงก์: "ไม่ตกลงกับนาซี เด็ดขาด ทุบวิทยุทิ้ง"',
                    zh: '🔫 摧毁链接："绝不与纳粹做交易。砸碎收音机。"'
                },
                consequence: {
                    en: '🛡️ Moral High Ground: Millions still die of cancer. But you kept your soul. And kept their evil contained.',
                    th: '🛡️ จุดยืนทางศีลธรรม: คนนับล้านยังตายด้วยมะเร็ง แต่คุณรักษาวิญญาณไว้ได้ และกักขังความชั่วร้ายของพวกเขาไว้',
                    zh: '🛡️ 道德高地：数百万人仍然死于癌症。但你保住了你的灵魂。并遏制了他们的邪恶。'
                },
                stats: { competence: 20, ethics: 100, leadership: 50, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Trick Them: "Send fake codes. Get the cure. Scam the Nazis."',
                    th: '🕵️ หลอกพวกเขา: "ส่งรหัสปลอม เอาวิธีรักษามา หลอกนาซีซะ"',
                    zh: '🕵️ 欺骗他们："发送假代码。得到治疗方法。诈骗纳粹。"'
                },
                consequence: {
                    en: '🚀 Retaliation: They realize the codes are fake. They send a quantum bomb through the radio link. Your lab vanishes.',
                    th: '🚀 การตอบโต้: พวกเขารู้ว่ารหัสปลอม พวกเขาส่งระเบิดควอนตัมผ่านลิงก์วิทยุ แล็บคุณหายวับ',
                    zh: '🚀 报复：他们意识到代码是假的。他们通过无线电链接发送了一枚量子炸弹。你的实验室消失了。'
                },
                stats: { competence: 50, ethics: 40, leadership: 20, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🌐 Steal the Tech: "Hack their database while talking. Steal the cure without giving anything."',
                    th: '🌐 ขโมยเทคโนโลยี: "แฮ็กฐานข้อมูลพวกเขาตอนคุย ขโมยวิธีรักษาโดยไม่ให้อะไรเลย"',
                    zh: '🌐 窃取技术："在谈话时黑进他们的数据库。窃取治疗方法而不付出任何代价。"'
                },
                consequence: {
                    en: '💻 Cyber War: You get half the cure data. It\'s enough to start research. But you start an inter-dimensional cyber war.',
                    th: '💻 สงครามไซเบอร์: คุณได้ข้อมูลครึ่งหนึ่ง พอที่จะเริ่มวิจัย แต่คุณเริ่มสงครามไซเบอร์ข้ามมิติ',
                    zh: '💻 网络战：你得到了一半的治疗数据。这足以开始研究。但你引发了一场跨维度的网络战争。'
                }
            }
        ]
    },
    {
        id: 'phys_019',
        text: {
            en: '🧠 Download Consciousness: You can upload a human mind to a computer. It grants immortality, but is it the person or a copy? A dying billionaire offers you unlimited funding to go first.',
            th: '🧠 ดาวน์โหลดสติสัมปชัญญะ: คุณสามารถอัปโหลดจิตใจมนุษย์ลงคอมพิวเตอร์ มันมอบความเป็นอมตะ แต่เป็นคนนั้นหรือแค่สำเนา? มหาเศรษฐีใกล้ตายเสนอทุนไม่อั้นให้คุณลองเป็นคนแรก',
            zh: '🧠 下载意识：你可以将人类思想上传到计算机。它赋予永生，但那是本人还是副本？一位垂死的亿万富翁为你提供无限资金，让你先试。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💾 Do It: "Upload him. 1.0 dies, 2.0 lives forever. It\'s the next step of evolution."',
                    th: '💾 ทำเลย: "อัปโหลดเขา 1.0 ตาย 2.0 อยู่ตลอดไป มันคือก้าวต่อไปของวิวัฒนาการ"',
                    zh: '💾 做吧："上传他。1.0死，2.0永生。这是进化的下一步。"'
                },
                consequence: {
                    en: '🤖 Digital Ghost: The upload works. The billionaire "lives" in the cloud. But he buys everything and rules the economy. Forever.',
                    th: '🤖 ผีดิจิทัล: การอัปโหลดสำเร็จ มหาเศรษฐี "มีชีวิต" ในคลาวด์ แต่เขาซื้อทุกอย่างและครองเศรษฐกิจ ตลอดไป',
                    zh: '🤖 数字幽灵：上传成功。亿万富翁在这个云端"活着"。但他买下了一切并统治了经济。永远。'
                },
                stats: { competence: 90, ethics: -30, leadership: 20, innovation: 90 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Refuse: "It\'s a copy. You are killing the man and building a chatbot. It\'s murder-suicide."',
                    th: '🛑 ปฏิเสธ: "มันคือสำเนา คุณกำลังฆ่าคนและสร้างแชทบอท มันคือการฆาตกรรมกึ่งฆ่าตัวตาย"',
                    zh: '🛑 拒绝："这是一个副本。你在杀人并制造聊天机器人。这是谋杀-自杀。"'
                },
                consequence: {
                    en: '⚰️ Natural Death: The billionaire dies angrily. Funding is pulled. But you upheld the definition of humanity.',
                    th: '⚰️ การตายตามธรรมชาติ: มหาเศรษฐีตายอย่างโกรธเกรี้ยว เงินทุนถูกดึงกลับ แต่คุณรักษาคำจำกัดความของความเป็นมนุษย์',
                    zh: '⚰️ 自然死亡：亿万富翁愤怒地死去。资金被撤回。但你坚持了人性的定义。'
                },
                stats: { competence: 40, ethics: 80, leadership: 50, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '💾 Hybrid: "Keep the brain alive in a jar, connected to the PC. Best of both worlds? Maybe?"',
                    th: '💾 ไฮบริด: "เก็บสมองให้มีชีวิตในโหล เชื่อมต่อกับ PC ดีทั้งสองอย่าง? มั้ง?"',
                    zh: '💾 混合体："把大脑放在罐子里活着，连接到电脑。两全其美？也许吧？"'
                },
                consequence: {
                    en: '🧠 Brain in a Jar: It works. He is alive. But he screams silently forever. A technological nightmare.',
                    th: '🧠 สมองในโหล: มันได้ผล เขามีชีวิตอยู่ แต่เขากรีดร้องอย่างเงียบงันตลอดกาล ฝันร้ายทางเทคโนโลยี',
                    zh: '🧠 罐中之脑：行得通。他活着。但他永远无声地尖叫。技术噩梦。'
                },
                stats: { competence: 70, ethics: -60, leadership: -20, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Fake the Upload: "Run a simple AI that talks like him. Take the money. He won\'t know, he\'ll be dead."',
                    th: '🕵️ ปลอมการอัปโหลด: "รัน AI ง่ายๆ ที่พูดเหมือนเขา รับเงิน เขาไม่รู้หรอก เขาตายแล้ว"',
                    zh: '🕵️ 伪造上传："运行一个像他一样说话的简单AI。拿钱。他不会知道的，他会死的。"'
                },
                consequence: {
                    en: '💰 Con Artist: You are rich. The AI ruins his company. His family sues. Messy.',
                    th: '💰 นักต้มตุ๋น: คุณรวย AI ทำบริษัทเขาพัง ครอบครัวเขาฟ้อง เละเทะ',
                    zh: '💰 骗子：你很有钱。AI毁了他的公司。他的家人起诉。一团糟。'
                }
            }
        ]
    },
    {
        id: 'phys_020',
        text: {
            en: '🌪️ Weather Control: You build a machine that controls the weather. You can end droughts, but energy conservation laws mean creating rain here causes a drought somewhere else.',
            th: '🌪️ ควบคุมสภาพอากาศ: คุณสร้างเครื่องที่ควบคุมสภาพอากาศ คุณหยุดภัยแล้งได้ แต่กฎการอนุรักษ์พลังงานหมายความว่าการสร้างฝนที่นี่ทำให้เกิดภัยแล้งที่อื่น',
            zh: '🌪️ 天气控制：你制造了一台可以控制天气的机器。你可以结束干旱，但能量守恒定律意味着在这里制造降雨会导致别处干旱。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌾 Save My Country: "Rain for us! Who cares about the neighbors? National interests first."',
                    th: '🌾 ช่วยประเทศฉัน: "ฝนเพื่อเรา! ใครสนเพื่อนบ้าน? ผลประโยชน์ของชาติต้องมาก่อน"',
                    zh: '🌾 拯救我的国家："我们要雨水！谁在乎邻居？国家利益第一。"'
                },
                consequence: {
                    en: '⚔️ Resource War: You have crops, neighbors starve. They declare war. You used weather as a weapon.',
                    th: '⚔️ สงครามทรัพยากร: คุณมีพืชผล เพื่อนบ้านอดอยาก พวกเขาประกาศสงคราม คุณใช้สภาพอากาศเป็นอาวุธ',
                    zh: '⚔️ 资源战争：你有庄稼，邻居挨饿。他们宣战。你把天气当作武器。'
                },
                stats: { competence: 60, ethics: -40, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Global Balance: "Rotate the rain perfectly. Everyone gets just enough water. Socialism of the sky."',
                    th: '⚖️ สมดุลโลก: "หมุนเวียนฝนอย่างสมบูรณ์แบบ ทุกคนได้น้ำพอดีๆ สังคมนิยมแห่งท้องฟ้า"',
                    zh: '⚖️ 全球平衡："完美轮换降雨。每个人都能得到足够的水。天空的社会主义。"'
                },
                consequence: {
                    en: '🌧️ Mediocrity: No one starves, but no one thrives. Constant mild drizzle everywhere. People complain about the gray.',
                    th: '🌧️ ความธรรมดา: ไม่มีใครอดอยาก แต่ไม่มีใครฟูฟ่อง ฝนปรอยๆ ตลอดเวลาทุกที่ ผู้คนบ่นเรื่องท้องฟ้าสีเทา',
                    zh: '🌧️ 平庸：没有人挨饿，但也没有人兴旺。到处都是持续的毛毛雨。人们抱怨灰暗的天气。'
                },
                stats: { competence: 80, ethics: 70, leadership: 60, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '🌪️ Weaponize It: "Offer drought-bombing services to the highest bidder. I am a mercenary physicist."',
                    th: '🌪️ ทำเป็นอาวุธ: "เสนอบริการทิ้งระเบิดภัยแล้งให้ผู้ให้ราคาสูงสุด ฉันคือนักฟิสิกส์รับจ้าง"',
                    zh: '🌪️ 武器化："向出价最高者提供干旱轰炸服务。我是一名雇佣兵物理学家。"'
                },
                consequence: {
                    en: '💀 Supervillain: You are rich and feared. The UN puts a bounty on your head. You live in a volcano liar.',
                    th: '💀 ซุปเปอร์วายร้าย: คุณรวยและน่ากลัว UN ตั้งค่าหัวคุณ คุณอาศัยอยู่ในฐานลับภูเขาไฟ',
                    zh: '💀 超级反派：你富有且令人畏惧。联合国悬赏你的人头。你住在火山巢穴里。'
                },
                stats: { competence: 70, ethics: -90, leadership: -50, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '⛈️ Randomize: "Nature should be chaotic. Set it to random. Let fate decide."',
                    th: '⛈️ สุ่ม: "ธรรมชาติควรจะวุ่นวาย ตั้งค่าเป็นสุ่ม ให้โชคชะตาตัดสิน"',
                    zh: '⛈️ 随机化："大自然应该是混乱的。设置为随机。让命运决定。"'
                },
                consequence: {
                    en: '🎲 Weather Roulette: Snow in Sahara. Heatwave in Antarctica. Ecosystems collapse. Nature hates you.',
                    th: '🎲 รูเล็ตสภาพอากาศ: หิมะตกในซาฮารา คลื่นความร้อนในแอนตาร์กติกา ระบบนิเวศพังทลาย ธรรมชาติเกลียดคุณ',
                    zh: '🎲 天气轮盘赌：撒哈拉沙漠下雪。南极洲热浪。生态系统崩溃。大自然讨厌你。'
                }
            }
        ]
    },
    {
        id: 'phys_021',
        text: {
            en: '🔍 Heisenberg Compensator: You create a device that bypasses the Uncertainty Principle, allowing perfect measurement of particle position and momentum simultaneously.',
            th: '🔍 เครื่องชดเชยไฮเซนเบิร์ก: คุณสร้างอุปกรณ์ที่ข้ามหลักความไม่แน่นอน ทำให้วัดตำแหน่งและโมเมนตัมของอนุภาคได้อย่างสมบูรณ์แบบพร้อมกัน',
            zh: '🔍 海森堡补偿器：你创造了一种绕过不确定性原理的设备，允许同时完美测量粒子的位置和动量。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📡 All-Seeing Eye: "We can now predict the future perfectly. Laplace\'s Demon is real. Build the predictor."',
                    th: '📡 ดวงตาที่เห็นทุกอย่าง: "ตอนนี้เราทำนายอนาคตได้สมบูรณ์แบบ ปีศาจของลาพลาสมีจริง สร้างเครื่องทำนาย"',
                    zh: '📡 全视之眼："我们现在可以完美地预测未来。拉普拉斯妖是真实的。建立预测器。"'
                },
                consequence: {
                    en: '🔮 Fatalism: You predict every crime, every death. Free will is disproven. Society collapses into apathy.',
                    th: '🔮 ชะตานิยม: คุณทำนายทุกอาชญากรรม ทุกความตาย เจตจำนงเสรีถูกพิสูจน์ว่าไม่มีจริง สังคมล่มสลายสู่ความเฉยเมย',
                    zh: '🔮 宿命论：你预测每一桩犯罪，每一次死亡。自由意志被证伪。社会陷入冷漠。'
                },
                stats: { competence: 100, ethics: -20, leadership: 20, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🧬 Perfect Teleportation: "Use the data for teleportation. Beam me up, Scotty. No errors."',
                    th: '🧬 การเทเลพอร์ตสมบูรณ์แบบ: "ใช้ข้อมูลเพื่อการเทเลพอร์ต บีมฉันขึ้นไปสก็อตตี้ ไม่มีข้อผิดพลาด"',
                    zh: '🧬 完美传送："利用数据进行传送。传送我吧，史考提。没有错误。"'
                },
                consequence: {
                    en: '✈️ Transport Revolution: Airlines go bankrupt. Teleporters are everywhere. The world becomes a village.',
                    th: '✈️ ปฏิวัติการขนส่ง: สายการบินล้มละลาย เครื่องเทเลพอร์ตมีทุกที่ โลกกลายเป็นหมู่บ้าน',
                    zh: '✈️ 交通革命：航空公司破产。传送器到处都是。世界变成了一个村庄。'
                },
                stats: { competence: 90, ethics: 60, leadership: 50, innovation: 90 }
            },
            {
                id: 'C',
                text: {
                    en: '🔒 Hide It: "The universe needs mystery. Quantum uncertainty is the source of creativity. Destroy the device."',
                    th: '🔒 ซ่อนมัน: "จักรวาลต้องการความลึกลับ ความไม่แน่นอนทางควอนตัมคือแหล่งกำเนิดความคิดสร้างสรรค์ ทำลายอุปกรณ์"',
                    zh: '🔒 隐藏它："宇宙需要神秘感。量子不确定性是创造力的源泉。销毁设备。"'
                },
                consequence: {
                    en: '🎨 Art Preserved: The world stays unpredictable and beautiful. Science stalls, but humanity retains its soul.',
                    th: '🎨 ศิลปะถูกรักษา: โลกยังคงคาดเดาไม่ได้และสวยงาม วิทยาศาสตร์หยุดชะงัก แต่มนุษยชาติรักษาวิญญาณไว้',
                    zh: '🎨 艺术得以保留：世界保持不可预测和美丽。科学停滞不前，但人类保留了灵魂。'
                },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🕵️ Spy Tech: "Sell to the illusion is real. Spy on atoms. Spy on people through walls."',
                    th: '🕵️ เทคโนโลยีสายลับ: "ขายให้ภาพลวงตาเป็นเรื่องจริง สอดแนมอะตอม สอดแนมคนผ่านกำแพง"',
                    zh: '🕵️ 间谍技术："向幻觉推销真实。监视原子。通过墙壁监视人。"'
                },
                consequence: {
                    en: '👁️ Privacy Death: No secrets exist. Governments control everything. You are the architect of the Panopticon.',
                    th: '👁️ ความเป็นส่วนตัวตาย: ไม่มีความลับ รัฐบาลควบคุมทุกอย่าง คุณคือสถาปนิกของคุกที่มองเห็นทุกสิ่ง',
                    zh: '👁️ 隐私之死：不存在秘密。政府控制一切。你是圆形监狱的建筑师。'
                }
            }
        ]
    },
    {
        id: 'phys_022',
        text: {
            en: '🧲 Earth\'s Magnetic Flip: The Earth\'s poles are flipping faster than expected. Solar radiation will cook the surface in 6 months. You need a solution.',
            th: '🧲 การกลับขั้วแม่เหล็กโลก: ขั้วโลกกำลังกลับด้านเร็วกว่าที่คาด รังสีดวงอาทิตย์จะเผาผลาญพื้นผิวใน 6 เดือน คุณต้องมีทางออก',
            zh: '🧲 地球磁极翻转：地球两极翻转的速度比预期的要快。太阳辐射将在6个月内烤焦地表。你需要一个解决方案。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚙️ Core Reboot: "Drill to the core and detonate nukes to stabilize the spin. The \'Core\' movie plan. Insane but might work."',
                    th: '⚙️ รีบูตแกนโลก: "เจาะไปที่แกนโลกและจุดระเบิดนิวเคลียร์เพื่อทำให้การหมุนเสถียร แผนหนังเรื่อง \'The Core\' บ้าแต่เนี๊ยบ"',
                    zh: '⚙️ 核心重启："钻到地核并引爆核武器以稳定自转。电影\'地心毁灭\'的计划。疯狂但可能有效。"'
                },
                consequence: {
                    en: '🌍 Saved... Barely: It works! But earthquakes devastate cities. Billions saved, millions lost.',
                    th: '🌍 รอด... หวุดหวิด: ได้ผล! แต่แผ่นดินไหวทำลายเมือง รอดพันล้าน ตายล้าน',
                    zh: '🌍 得救了……勉强：成功了！但地震摧毁了城市。数十亿人获救，数百万人丧生。'
                },
                stats: { competence: 80, ethics: 40, leadership: 60, innovation: 70 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Artificial Shield: "Launch thousands of satellites to generate a magnetic field from space. Expensive but safe."',
                    th: '🛡️ โล่เทียม: "ปล่อยดาวเทียมหลายพันดวงเพื่อสร้างสนามแม่เหล็กจากอวกาศ แพงแต่ปลอดภัย"',
                    zh: '🛡️ 人造护盾："发射数千颗卫星从太空产生磁场。昂贵但安全。"'
                },
                consequence: {
                    en: '💸 Bankrupt Earth: The project bankrupts global economies. We survive, but we are poor and hungry.',
                    th: '💸 โลกล้มละลาย: โครงการทำให้เปศรษฐกิจโลกล้มละลาย เราลอด แต่เราจนและหิวโหย',
                    zh: '💸 破产的地球：该项目使全球经济破产。我们幸存下来，但我们要贫穷和饥饿。'
                },
                stats: { competence: 60, ethics: 70, leadership: 30, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '🏠 Go Underground: "Surface is toast. Build mole cities. Humanity becomes subterranean."',
                    th: '🏠 ลงใต้ดิน: "พื้นผิวไหม้เกรียม สร้างเมืองตัวตุ่น มนุษย์กลายเป็นชาวใต้ดิน"',
                    zh: '🏠 转入地下："地表完蛋了。建造鼹鼠城市。人类成为地下生物。"'
                },
                consequence: {
                    en: '🕳️ Mole People: Changing lifestyle is hard. Vitamin D deficiency is rampant. But we are safe.',
                    th: '🕳️ มนุษย์ตัวตุ่น: การเปลี่ยนวิถีชีวิตมันยาก การขาดวิตามินดีระบาด แต่เราปลอดภัย',
                    zh: '🕳️ 鼹鼠人：改变生活方式很难。维生素D缺乏症猖獗。但我们是安全的。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🚀 Evacuate: "Earth is done. Mars has no field either but... let\'s just leave. One way trip for the elite."',
                    th: '🚀 อพยพ: "โลกจบแล้ว ดาวอังคารก็ไม่มีสนามแม่เหล็กแต่... ไปกันเถอะ เที่ยวเดียวสำหรับชนชั้นนำ"',
                    zh: '🚀 撤离："地球完了。火星也没有磁场，但是……我们走吧。精英们的单程旅行。"'
                },
                consequence: {
                    en: '👋 Abandon Ship: You leave billions to die. Your ship explodes halfway mechanically. Karma.',
                    th: '👋 สละเรือ: คุณทิ้งคนพันล้านให้ตาย ยานคุณระเบิดกลางทางเพราะเครื่องยนต์ เวรกรรม',
                    zh: '👋 弃船：你留下数十亿人等死。你的飞船在半路因机械故障爆炸。报应。'
                }
            }
        ]
    },
    {
        id: 'phys_023',
        text: {
            en: '🌌 Big Rip Warning: Your calculations show the expansion of the universe is accelerating faster than thought. The "Big Rip" (atoms tearing apart) will happen in 10 years, not billions.',
            th: '🌌 คำเตือนบิ๊กริป: การคำนวณของคุณแสดงว่าการขยายตัวของจักรวาลกำลังเร่งเร็วกว่าที่คิด "Big Rip" (อะตอมฉีกขาด) จะเกิดขึ้นใน 10 ปี ไม่ใช่พันล้าน',
            zh: '🌌 大撕裂警告：你的计算表明宇宙膨胀的加速比预想的要快。"大撕裂"（原子撕裂）将在10年内发生，而不是数十亿年。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚓ Space Anchor: "Invent a \'cosmic glue\' field to slow expansion locally. Save the Solar System. Let the rest go."',
                    th: '⚓ สมออวกาศ: "ประดิษฐ์สนาม \'กาวจักรวาล\' เพื่อชะลอการขยายตัวเฉพาะที่ รักษาเฉพาะระบบสุริยะ ปล่อยส่วนที่เหลือไป"',
                    zh: '⚓ 太空锚："发明一个\'宇宙胶水\'场来局部减缓膨胀。拯救太阳系。让其他的去吧。"'
                },
                consequence: {
                    en: '🏝️ Lonely Island: The stars drift away. Our night sky becomes pitch black. But we exist. Alone.',
                    th: '🏝️ เกาะเดียวดาย: ดวงดาวลอยห่างออกไป ท้องฟ้ากลางคืนของเรามืดสนิท แต่เรายังอยู่ เดียวดาย',
                    zh: '🏝️ 孤独岛屿：星星漂流而去。我们的夜空变得漆黑一片。但我们存在。独自一人。'
                },
                stats: { competence: 90, ethics: 50, leadership: 60, innovation: 90 }
            },
            {
                id: 'B',
                text: {
                    en: '📢 Announce End: "Make peace with your gods. 10 years left. Party like it\'s 2029."',
                    th: '📢 ประกาศจุดจบ: "สงบศึกกับพระเจ้าของคุณ เหลือเวลา 10 ปี ปาร์ตี้เหมือนปี 2029"',
                    zh: '📢 宣布终结："与你们的神和解。还剩10年。像2029年一样狂欢。"'
                },
                consequence: {
                    en: '🎉 Global Bender: The world goes insane. Hedonism rules. No one works. Civilization ends before the Rip.',
                    th: '🎉 เมาเละทั่วโลก: โลกบ้าคลั่ง สุขนิยมครองเมือง ไม่มีใครทำงาน อารยธรรมจบสิ้นก่อนบิ๊กริป',
                    zh: '🎉 全球狂欢：世界疯了。享乐主义统治。没人工作。文明在撕裂前就结束了。'
                },
                stats: { competence: 50, ethics: 20, leadership: -40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧮 Check Math: "This can\'t be right. I\'ll spend 9 years checking the decimal points."',
                    th: '🧮 เช็คเลข: "มันต้องไม่ถูก ฉันจะใช้เวลา 9 ปีตรวจจุดทศนิยม"',
                    zh: '🧮 检查数学："这不对。我要花9年时间检查小数点。"'
                },
                consequence: {
                    en: '😅 Math Error: You forgot to carry the one. The universe is fine. You wasted a decade worrying.',
                    th: '😅 เลขผิด: คุณลืมทดหนึ่ง จักรวาลสบายดี คุณเสียเวลาทศวรรษไปกับการกังวล',
                    zh: '😅 数学错误：你忘了进位。宇宙很好。你浪费了十年担心。'
                },
                stats: { competence: -10, ethics: 50, leadership: 10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🚪 Escape Universe: "Build a portal to a stable multiverse. Evacuate 100 people to seeds humanity."',
                    th: '🚪 หนีจากจักรวาล: "สร้างพอร์ทัลไปยังพหุจักรวาลที่เสถียร อพยพ 100 คนเพื่อเป็นเมล็ดพันธุ์มนุษย์"',
                    zh: '🚪 逃离宇宙："建立通往稳定多元宇宙的传送门。疏散100人以播种人类。"'
                },
                consequence: {
                    en: '🌌 New Beginning: You escape. The old universe rips. You are Adam/Eve in a new dimension.',
                    th: '🌌 การเริ่มต้นใหม่: คุณหนีรอด จักรวาลเก่าฉีกขาด คุณคืออดัม/อีฟในมิติใหม่',
                    zh: '🌌 新的开始：你逃脱了。旧宇宙撕裂。你是新维度中的亚当/夏娃。'
                }
            }
        ]
    },
    {
        id: 'phys_024',
        text: {
            en: '🎨 The Color From Space: A meteorite lands containing a "color" unlike any on the spectrum. It defies physics. Looking at it causes madness or genius.',
            th: '🎨 สีจากอวกาศ: อุกกาบาตตกลงมาพร้อมกับ "สี" ที่ไม่เหมือนสีใดในสเปกตรัม มันท้าทายฟิสิกส์ การมองมันทำให้เป็นบ้าหรืออัจฉริยะ',
            zh: '🎨 来自太空的颜色：一颗陨石坠落，其中包含一种光谱上没有的"颜色"。它违背了物理学。看着它会导致疯狂或天才。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👓 Tinted Glasses: "Study it through filters. Dilute the madness. Safe research."',
                    th: '👓 แว่นกรองแสง: "ศึกษามันผ่านฟิลเตอร์ เจือจางความบ้า วิจัยอย่างปลอดภัย"',
                    zh: '👓 有色眼镜："通过滤镜研究它。稀释疯狂。安全研究。"'
                },
                consequence: {
                    en: '📄 Slow Progress: You understand it physically, but miss the psychic essence. Safe but limited.',
                    th: '📄 ความก้าวหน้าช้า: คุณเข้าใจทางกายภาพ แต่พลาดแก่นแท้ทางจิต ปลอดภัยแต่จำกัด',
                    zh: '📄 进展缓慢：你在物理上理解了它，但错过了精神本质。安全但有限。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '👁️ Stare Directly: "I must know! I gaze into the abyss!"',
                    th: '👁️ จ้องตรงๆ: "ฉันต้องรู้! ฉันจ้องมองลงไปในความมืดมิด!"',
                    zh: '👁️以此直视："我要知道！我凝视深渊！"'
                },
                consequence: {
                    en: '🤪 Mad Genius: You scream equations that solve gravity instantly. Then you try to eat your own ears. Locked up, but brilliant.',
                    th: '🤪 อัจฉริยะบ้า: คุณตะโกนสมการที่แก้แรงโน้มถ่วงได้ทันที แล้วคุณก็พยายามกินหูตัวเอง ถูกขัง แต่ฉลาดล้ำ',
                    zh: '🤪 疯狂天才：你尖叫着瞬间解决了引力方程。然后你试图吃掉自己的耳朵。被关起来，但很聪明。'
                },
                stats: { competence: 100, ethics: -20, leadership: -50, innovation: 100 }
            },
            {
                id: 'C',
                text: {
                    en: '💣 Nuke It: "It\'s an infection within reality. Vaporize the site. Cleanse the anomaly."',
                    th: '💣 นิวเคลียร์มัน: "มันคือการติดเชื้อในความจริง ระเหยพื้นที่ซะ ล้างบางความผิดปกติ"',
                    zh: '💣 用核武器攻击它："这是现实中的感染。蒸发该地点。清除异常。"'
                },
                consequence: {
                    en: '🛡️ Sanitized: The anomaly is gone. Physicists cry over lost data, but the world remains sane.',
                    th: '🛡️ ฆ่าเชื้อแล้ว: ความผิดปกติหายไป นักฟิสิกส์ร้องไห้เสียดายข้อมูล แต่โลกยังคงมีสติ',
                    zh: '🛡️ 已消毒：异常消失了。物理学家为丢失的数据哭泣，但世界保持清醒。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: -20 }
            },
            {
                id: 'D',
                text: {
                    en: '🎨 Weaponize Art: "Make paintings with microscopic amounts. Sell them to enemies. Induce mass hysteria."',
                    th: '🎨 ศิลปะอาวุธ: "วาดภาพด้วยปริมาณจุลทรรศน์ ขายให้ศัตรู กระตุ้นอุปาทานหมู่"',
                    zh: '🎨 武器化艺术："用微量制作绘画。卖给敌人。引发大规模歇斯底里。"'
                },
                consequence: {
                    en: '⚔️ Psy-Ops Master: You win wars without firing a shot. But the color starts spreading on its own...',
                    th: '⚔️ ปรมาจารย์ไซออปส์: คุณชนะสงครามโดยไม่ต้องยิงกระสุน แต่สีเริ่มแพร่กระจายด้วยตัวมันเอง...',
                    zh: '⚔️ 心理战大师：你不费一枪一弹就赢得了战争。但颜色开始自行扩散……'
                }
            }
        ]
    },
    {
        id: 'phys_025',
        text: {
            en: '💧 Superfluid leak: A vat of superfluid helium (zero friction liquid) spills. It\'s climbing the walls and escaping the lab. It enters the city sewer.',
            th: '💧 ซูเปอร์ฟลูอิดรั่ว: ถังฮีเลียมซูเปอร์ฟลูอิด (ของเหลวแรงเสียดทานศูนย์) หก มันกำลังไต่กำแพงและหนีออกจากแล็บ มันลงไปในท่อระบายน้ำเมือง',
            zh: '💧 超流体泄漏：一桶超流体氦（零摩擦液体）泄漏。它正在爬上墙壁逃离实验室。它进入了城市下水道。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Heat It Up: "Boil the sewers! Turn it to gas. It\'s just helium. High squeaky voices for everyone!"',
                    th: '🔥 ให้ความร้อน: "ต้มท่อระบายน้ำ! เปลี่ยนเป็นแก๊ส มันแค่ฮีเลียม เสียงสูงปรี๊ดสำหรับทุกคน!"',
                    zh: '🔥 加热："煮沸下水道！把它变成气体。只是氦气。每个人都有尖细的声音！"'
                },
                consequence: {
                    en: '🎈 Funny Disaster: The city sounds like chipmunks for a week. No damage. You are a laughing stock but safe.',
                    th: '🎈 ภัยพิบัติตลก: เมืองเสียงเหมือนชิปมังก์เป็นอาทิตย์ ไม่มีความเสียหาย คุณเป็นตัวตลกแต่ปลอดภัย',
                    zh: '🎈 有趣的灾难：这个城市听起来像花栗鼠一周。没有损坏。你是笑柄，但是安全的。'
                },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🧊 Freeze It: "It\'s already near zero... wait, freezing makes it worse? Use magnets to trap it!"',
                    th: '🧊 แช่แข็งมัน: "มันใกล้ศูนย์อยู่แล้ว... เดี๋ยว การแช่แข็งทำให้แย่ลง? ใช้แม่เหล็กดักจับมัน!"',
                    zh: '🧊 冻结它："它已经接近零了……等等，冻结会让情况变得更糟？用磁铁以此困住它！"'
                },
                consequence: {
                    en: '🧲 Science Save: You contain it with magnetic fields. Expensive cleanup, but good physics application.',
                    th: '🧲 วิทยาศาสตร์กู้ภัย: คุณกักมันด้วยสนามแม่เหล็ก การทำความสะอาดราคาแพง แต่เป็นการประยุกต์ใช้ฟิสิกส์ที่ดี',
                    zh: '🧲 科学拯救：你用磁场控制住了它。昂贵的清理，但很好的物理应用。'
                },
                stats: { competence: 80, ethics: 60, leadership: 50, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🤷 Ignore It: "It\'s frictionless. It will flow to the ocean appearing to defy gravity. Cool trick."',
                    th: '🤷 ช่างมัน: "มันไม่มีแรงเสียดทาน มันจะไหลลงทะเลดูเหมือนต้านแรงโน้มถ่วง กลชวนทึ่ง"',
                    zh: '🤷 忽略它："它是无摩擦的。它会流向海洋，看起来违背了重力。很酷的把戏。"'
                },
                consequence: {
                    en: '⛸️ Slip n Slide: It coats the streets. Cars slide uncontrollably. Massive accidents. Negligence lawsuit.',
                    th: '⛸️ ลื่นไถล: มันเคลือบถนน รถลื่นไถลควบคุมไม่ได้ อุบัติเหตุครั้งใหญ่ ฟ้องร้องข้อหาประมาท',
                    zh: '⛸️ 滑梯：它覆盖了街道。汽车失控滑行。大规模事故。疏忽诉讼。'
                },
                stats: { competence: 20, ethics: -40, leadership: -20, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🧪 Collect It: "Send interns with buckets! It\'s distinct expensive! Don\'t waste a drop!"',
                    th: '🧪 เก็บมัน: "ส่งเด็กฝึกงานถือถังไป! มันแพงนะ! อย่าให้เสียสักหยด!"',
                    zh: '🧪 收集它："派实习生拿着桶去！这很贵！不要浪费一滴！"'
                },
                consequence: {
                    en: '🥶 Frostbite: Interns get frostbite. You get sued. But you saved $500 of Helium. Worth it?',
                    th: '🥶 หิมะกัด: เด็กฝึกงานโดนหิมะกัด คุณโดนฟ้อง แต่คุณประหยัดฮีเลียมได้ 500 เหรียญ คุ้มไหม?',
                    zh: '🥶 冻伤：实习生被冻伤。你被起诉。但你省下了500美元的氦气。值得吗？'
                }
            }
        ]
    },
    {
        id: 'phys_026',
        text: {
            en: '🎵 Acoustic Levitation: You build a sonic tractor beam. It can lift boulders with sound. A construction company wants it, but the frequency causes extreme nausea in dogs.',
            th: '🎵 การลอยตัวด้วยเสียง: คุณสร้างลำแสงแทรกเตอร์โซนิค มันยกก้อนหินได้ด้วยเสียง บริษัทก่อสร้างต้องการมัน แต่ความถี่นี้ทำให้สุนัขคลื่นไส้อย่างรุนแรง',
            zh: '🎵 声学悬浮：你制造了声波牵引光束。它可以用声音举起巨石。一家建筑公司想要它，但这种频率会导致狗极度恶心。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏗️ Sell It: "Progress is loud. Dogs will adapt. Or wear earmuffs. We are building the future."',
                    th: '🏗️ ขายมัน: "ความก้าวหน้านั้นเสียงดัง สุนัขจะปรับตัว หรือใส่ที่ครอบหู เรากำลังสร้างอนาคต"',
                    zh: '🏗️ 卖掉它："进步是吵闹的。狗会适应。或者戴耳罩。我们在建设未来。"'
                },
                consequence: {
                    en: '🐶 Barking Mad: Construction is fast, but all dogs in the city howl constantly. You are the enemy of pet owners.',
                    th: '🐶 หมาบ้า: การก่อสร้างเร็ว แต่หมาทั้งเมืองหอนตลอดเวลา คุณคือศัตรูของเจ้าของสัตว์เลี้ยง',
                    zh: '🐶 疯狂咆哮：建设很快，但城市里所有的狗都在不停地嚎叫。你是宠物主人的敌人。'
                },
                stats: { competence: 70, ethics: -20, leadership: 30, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🎧 Modify Frequency: "Shift to ultrasound. It cuts power by 50%, but saves the puppies."',
                    th: '🎧 ปรับความถี่: "เปลี่ยนเป็นอัลตราซาวนด์ กำลังลดลง 50% แต่ช่วยลูกสุนัข"',
                    zh: '🎧 修改频率："改为超声波。功率降低了50%，但拯救了小狗。"'
                },
                consequence: {
                    en: '🐢 Slow Build: The tech works, but it\'s slow. You are respected for your humane engineering.',
                    th: '🐢 สร้างช้า: เทคโนโลยีใช้ได้ แต่ช้า คุณได้รับความเคารพในวิศวกรรมที่มีมนุษยธรรม',
                    zh: '🐢 缓慢建设：技术有效，但很慢。你因人道工程而受到尊重。'
                },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🔇 Noise Cancelling: "Invent dog-specific noise cancelling collars. Bundle them with the crane."',
                    th: '🔇 ตัดเสียงรบกวน: "ประดิษฐ์ปลอกคอตัดเสียงรบกวนสำหรับสุนัข ขายคู่กับเครน"',
                    zh: '🔇 降噪："发明狗专用降噪项圈。把它们和起重机捆绑在一起。"'
                },
                consequence: {
                    en: '💰 Double Profit: You sell the problem AND the solution. Capitalism at its finest.',
                    th: '💰 กำไรสองต่อ: คุณขายปัญหา "และ" ทางแก้ ทุนนิยมขั้นสุดยอด',
                    zh: '💰 双重利润：你既卖问题又卖解决方案。资本主义的巅峰。'
                },
                stats: { competence: 80, ethics: 40, leadership: 60, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '🚫 Scrap It: "If it hurts animals, it\'s bad design. Back to the drawing board."',
                    th: '🚫 ทิ้งมัน: "ถ้ามันทำร้ายสัตว์ มันคือการออกแบบที่แย่ กลับไปเริ่มใหม่"',
                    zh: '🚫 废弃它："如果它伤害动物，那就是糟糕的设计。回到绘图板。"'
                },
                consequence: {
                    en: '📉 Lost Contract: The company finding someone else. You have your principles, but empty pockets.',
                    th: '📉 เสียสัญญา: บริษัทไปหาคนอื่น คุณมีอุดมการณ์ แต่กระเป๋าแห้ง',
                    zh: '📉 失去合同：公司找了别人。你有你的原则，但口袋空空。'
                }
            }
        ]
    },
    {
        id: 'phys_027',
        text: {
            en: '🌌 Faster Than Light: You crack the warp drive code. But activating it sends a shockwave that destroys the nearest uninhabited planet. To reach the stars, we must blow up Pluto.',
            th: '🌌 เร็วกว่าแสง: คุณไขรหัสวาร์ปไดรฟ์ได้ แต่การเปิดใช้งานส่งคลื่นกระแทกที่ทำลายดาวเคราะห์ไม่มีสิ่งมีชีวิตที่ใกล้ที่สุด เพื่อไปถึงดวงดาว เราต้องระเบิดพลูโต',
            zh: '🌌 超光速：你破解了曲速引擎代码。但激活它会发出冲击波，摧毁最近的无人居住的行星。为了到达星星，我们必须炸毁冥王星。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💥 Goodbye Pluto: "It\'s not even a real planet anymore. Sacrifice it for the galaxy."',
                    th: '💥 ลาก่อนพลูโต: "มันไม่ใช่ดาวเคราะห์จริงๆ แล้วด้วยซ้ำ เสียสละมันเพื่อกาแล็กซี"',
                    zh: '💥 再见冥王星："它甚至不再是一颗真正的行星了。为了银河系牺牲它。"'
                },
                consequence: {
                    en: '🚀 Star Trek: Humanity spreads to the stars. Kids miss Pluto, but they have 1000 new worlds.',
                    th: '🚀 สตาร์เทรค: มนุษยชาติกระจายไปสู่ดวงดาว เด็กๆ คิดถึงพลูโต แต่พวกเขามีโลกใหม่ 1000 ใบ',
                    zh: '🚀 星际迷航：人类散布到群星中。孩子们想念冥王星，但他们有1000个新世界。'
                },
                stats: { competence: 100, ethics: 40, leadership: 80, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Shield Pluto: "Wrap Pluto in a force field first. It will take 50% of the warp energy."',
                    th: '🛡️ ปกป้องพลูโต: "ห่อพลูโตด้วยสนามพลังก่อน มันจะใช้พลังงานวาร์ป 50%"',
                    zh: '🛡️ 保护冥王星："先用力场包裹冥王星。这将消耗50%的曲速能量。"'
                },
                consequence: {
                    en: '🐢 Slow Warp: We can warp, but only short hops. Safe, but tedious. Pluto survives.',
                    th: '🐢 วาร์ปช้า: เราวาร์ปได้ แต่แค่ระยะสั้นๆ ปลอดภัยแต่น่าเบื่อ พลูโตรอด',
                    zh: '🐢 缓慢曲速：我们可以曲速，但只能短途跳跃。安全，但乏味。冥王星幸存。'
                },
                stats: { competence: 70, ethics: 80, leadership: 50, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '⛔ Stop: "We don\'t destroy worlds to travel. We are explorers, not vandals."',
                    th: '⛔ หยุด: "เราไม่ทำลายโลกเพื่อการเดินทาง เราเป็นนักสำรวจ ไม่ใช่คนป่าเถื่อน"',
                    zh: '⛔ 停止："我们不为了旅行而摧毁世界。我们是探险家，不是破坏者。"'
                },
                consequence: {
                    en: '🔒 Earthbound: We stay on Earth. The stars remain a dream. But our conscience is clear.',
                    th: '🔒 ติดอยู่บนโลก: เราอยู่บนโลก ดวงดาวยังคงเป็นความฝัน แต่มโนธรรมเราใสสะอาด',
                    zh: '🔒 地球束缚：我们留在地球上。星星仍然是一个梦想。但我们的良心是清白的。'
                },
                stats: { competence: 30, ethics: 90, leadership: 40, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤥 Hide the Blast: "Aim the shockwave at the sun. It can take it. Probably."',
                    th: '🤥 ซ่อนแรงระเบิด: "เล็งคลื่นกระแทกไปที่ดวงอาทิตย์ มันรับไหวแหละ มั้งนะ"',
                    zh: '🤥 隐藏爆炸："把冲击波对准太阳。它能承受。大概吧。"'
                },
                consequence: {
                    en: '☀️ Solar Flare: The sun burps. Massive electronics failure on Earth. No internet for a month. You are fired.',
                    th: '☀️ พายุสุริยะ: ดวงอาทิตย์เรอ อุปกรณ์อิเล็กทรอนิกส์ล้มเหลวครั้งใหญ่บนโลก ไม่มีเน็ตใช้หนึ่งเดือน คุณโดนไล่ออก',
                    zh: '☀️ 太阳耀斑：太阳打嗝了。地球上大规模电子故障。一个月没有互联网。你被解雇了。'
                }
            }
        ]
    },
    {
        id: 'phys_028',
        text: {
            en: '🧠 Quantum Brain Upload: You can upload knowledge directly to the brain. Students can learn Physics in 5 seconds. But it erases childhood memories to make space.',
            th: '🧠 อัปโหลดสมองควอนตัม: คุณสามารถอัปโหลดความรู้เข้าสมองโดยตรง นักเรียนเรียนฟิสิกส์ได้ใน 5 วินาที แต่มันลบความทรงจำวัยเด็กเพื่อจองพื้นที่',
            zh: '🧠 量子大脑上传：你可以将知识直接上传到大脑。学生可以在5秒内学会物理。但它会擦除童年记忆以腾出空间。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎓 Do It: "Childhood is trauma anyway. Physics is eternal. Creating a generation of geniuses."',
                    th: '🎓 ทำเลย: "วัยเด็กมีแต่ปมอยู่แล้ว ฟิสิกส์คือนิรันดร์ สร้างรุนของอัจฉริยะ"',
                    zh: '🎓 做吧："反正童年也是创伤。物理学是永恒的。创造一代天才。"'
                },
                consequence: {
                    en: '🤖 Emotionless Geniuses: They are brilliant but cold. They solve climate change but don\'t know how to play tag.',
                    th: '🤖 อัจฉริยะไร้อารมณ์: พวกเขาฉลาดแต่เย็นชา พวกเขาแก้ปัญหาโลกร้อนได้แต่เล่นวิ่งไล่จับไม่เป็น',
                    zh: '🤖 无情的天才：他们才华横溢但冷酷无情。他们解决了气候变化，但不知道怎么玩捉人游戏。'
                },
                stats: { competence: 90, ethics: -40, leadership: 20, innovation: 80 }
            },
            {
                id: 'B',
                text: {
                    en: '💾 External Drive: "Don\'t overwrite. Add a port for an external hard drive. Cyborg students."',
                    th: '💾 ไดรฟ์ภายนอก: "อย่าเขียนทับ เพิ่มพอร์ตสำหรับฮาร์ดไดรฟ์ภายนอก นักเรียนไซบอร์ก"',
                    zh: '💾 外部驱动器："不要覆盖。为外部硬盘驱动器添加端口。赛博格学生。"'
                },
                consequence: {
                    en: '🔌 Plug-in Learning: It works. Students carry knowledge on USB sticks plugged into their necks. Cool and weird.',
                    th: '🔌 การเรียนรู้แบบปลั๊กอิน: มันได้ผล นักเรียนพกความรู้ใน USB เสียบที่คอ เจ๋งและแปลก',
                    zh: '🔌 插件学习：行得通。学生们把知识装在插在脖子上的U盘里。既酷又怪。'
                },
                stats: { competence: 80, ethics: 50, leadership: 40, innovation: 90 }
            },
            {
                id: 'C',
                text: {
                    en: '🚫 Ban It: "Memory shapes identity. We are not hard drives. Learning takes effort for a reason."',
                    th: '🚫 แบนมัน: "ความทรงจำสร้างตัวตน เราไม่ใช่ฮาร์ดไดรฟ์ การเรียนรู้ต้องใช้ความพยายามด้วยเหตุผล"',
                    zh: '🚫 禁止它："记忆塑造身份。我们不是硬盘。学习需要努力是有原因的。"'
                },
                consequence: {
                    en: '📚 Traditionalist: Schools stay slow. But people stay human. You are praised by psychologists.',
                    th: '📚 อนุรักษ์นิยม: โรงเรียนยังช้า แต่คนยังเป็นมนุษย์ คุณได้รับคำชมจากนักจิตวิทยา',
                    zh: '📚 传统主义者：学校保持缓慢。但人们保持人性。你受到心理学家的称赞。'
                },
                stats: { competence: 40, ethics: 80, leadership: 50, innovation: -20 }
            },
            {
                id: 'D',
                text: {
                    en: '📂 Compress Data: "Zip the physics. Use lossy compression. They might misunderstand gravity sometimes."',
                    th: '📂 บีบอัดข้อมูล: "Zip ฟิสิกส์ ใช้การบีบอัดแบบสูญเสีย พวกเขาอาจเข้าใจแรงโน้มถ่วงผิดบ้างบางที"',
                    zh: '📂 压缩数据："压缩物理学。使用有损压缩。他们有时可能会误解重力。"'
                },
                consequence: {
                    en: '📉 Glitchy Geniuses: Example: They think Pi is exactly 3. Bridges fall down. Bad idea.',
                    th: '📉 อัจฉริยะบั๊ก: ตัวอย่าง: พวกเขาคิดว่าพายคือ 3 เป๊ะๆ สะพานถล่ม ไอเดียแย่',
                    zh: '📉 故障天才：例如：他们认为Pi正好是3。桥梁倒塌。坏主意。'
                }
            }
        ]
    },
    {
        id: 'phys_029',
        text: {
            en: '⏳ Time Capsule: You find a time capsule from 500 years in the future buried in your backyard. Inside is a list of stock picks and a warning about a plague.',
            th: '⏳ แคปซูลกาลเวลา: คุณพบแคปซูลกาลเวลาจากอนาคตอีก 500 ปีฝังอยู่ในสวนหลังบ้าน ข้างในมีรายชื่อหุ้นและคำเตือนเรื่องโรคระบาด',
            zh: '⏳ 时间胶囊：你在后院发现了一个来自500年后未来的时间胶囊。里面有一份股票精选清单和关于瘟疫的警告。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💉 Prevent Plague: "Publish the plague warning. Synthesize the vaccine. Save the world first."',
                    th: '💉 ป้องกันโรคระบาด: "เผยแพร่คำเตือนโรคระบาด สังเคราะห์วัคซีน ช่วยโลกก่อน"',
                    zh: '💉 预防瘟疫："发布瘟疫警告。合成疫苗。先拯救世界。"'
                },
                consequence: {
                    en: '🦸 Hero of Time: You stop the plague. The timeline changes, so the stock picks are now wrong. You are poor but a hero.',
                    th: '🦸 ฮีโร่แห่งเวลา: คุณหยุดโรคระบาด ไทม์ไลน์เปลี่ยน หุ้นเลยผิด คุณจนแต่เป็นฮีโร่',
                    zh: '🦸 时间英雄：你阻止了瘟疫。时间线改变了，所以股票精选现在是错的。你很穷，但是个英雄。'
                },
                stats: { competence: 80, ethics: 90, leadership: 70, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Buy Stocks: "Become a trillionaire. Then use the money to fight the plague privately."',
                    th: '💰 ซื้อหุ้น: "กลายเป็นมหาเศรษฐี แล้วใช้เงินสู้โรคระบาดแบบส่วนตัว"',
                    zh: '💰 买股票："成为万亿富翁。然后用这笔钱私下对抗瘟疫。"'
                },
                consequence: {
                    en: '🏦 Rich Philanthropist: You get rich. You delay the plague response slightly, but fund it well. A calculated risk.',
                    th: '🏦 เศรษฐีใจบุญ: คุณรวย คุณชะลอการตอบสนองต่อโรคระบาดเล็กน้อย แต่ให้ทุนอย่างดี ความเสี่ยงที่คำนวณแล้ว',
                    zh: '🏦 富有的慈善家：你发财了。你稍微推迟了瘟疫应对，但资金充足。计算过的风险。'
                },
                stats: { competence: 70, ethics: 40, leadership: 50, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '🔥 Destroy It: "Knowledge of the future destroys the present. We must live our own lives. Burn it."',
                    th: '🔥 ทำลายมัน: "ความรู้อนาคตทำลายปัจจุบัน เราต้องใช้ชีวิตของเราเอง เผามัน"',
                    zh: '🔥 销毁它："对未来的了解会摧毁现在。我们必须过自己的生活。烧掉它。"'
                },
                consequence: {
                    en: '🕊️ Fate Takes Course: The plague happens. Stocks crash. Life is hard. But free will is preserved.',
                    th: '🕊️ ชะตาลิขิต: โรคระบาดเกิดขึ้น หุ้นตก ชีวิตยากลำบาก แต่เจตจำนงเสรีถูกรักษาไว้',
                    zh: '🕊️ 命运顺其自然：瘟疫发生。股市崩盘。生活艰难。但自由意志得以保留。'
                },
                stats: { competence: 20, ethics: 60, leadership: 30, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '📢 Publish All: "Put it on the internet. Let humanity decide. Chaos is fair."',
                    th: '📢 เผยแพร่ทั้งหมด: "ลงอินเทอร์เน็ต ให้มนุษยชาติตัดสินใจ ความโกลาหลคือความยุติธรรม"',
                    zh: '📢 发布所有："把它放在互联网上。让人类决定。混乱是公平的。"'
                },
                consequence: {
                    en: '🤯 Total Panic: Stock market collapses immediately. People panic buy toilet paper for the plague. Civilization teeters.',
                    th: '🤯 ตื่นตระหนกสุดขีด: ตลาดหุ้นพังทันที ผู้คนตื่นตระหนกซื้อกระดาษชำระสำหรับโรคระบาด อารยธรรมโอนเอน',
                    zh: '🤯 全面恐慌：股市立即崩盘。人们恐慌性购买卫生纸以应对瘟疫。文明摇摇欲坠。'
                }
            }
        ]
    },
    {
        id: 'phys_030',
        text: {
            en: '🏗️ Space Elevator: Nanotubes are strong enough. You can build a space elevator. It will make space travel cheap, but it\'s a prime target for terrorists. If it falls, it wraps around Earth twice, crushing cities.',
            th: '🏗️ ลิฟต์อวกาศ: ท่อนาโนแข็งแรงพอ คุณสร้างลิฟต์อวกาศได้ มันจะทำให้การเดินทางอวกาศถูก แต่เป็นเป้าหมายหลักของผู้ก่อการร้าย ถ้ามันล้ม มันจะพันรอบโลกสองรอบ บดขยี้เมือง',
            zh: '🏗️ 太空电梯：纳米管足够坚固。你可以建造太空电梯。它将使太空旅行变得便宜，但它是恐怖分子的首要目标。如果它倒塌，它会缠绕地球两圈，摧毁城市。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Build with Defense: "Laser turrets every kilometer. No fly zone. Total militarization of the equator."',
                    th: '🛡️ สร้างพร้อมระบบป้องกัน: "ป้อมเลเซอร์ทุกกิโลเมตร เขตห้ามบิน การทหารเต็มรูปแบบที่เส้นศูนย์สูตร"',
                    zh: '🛡️带防御建造："每公里都有激光炮塔。禁飞区。赤道完全军事化。"'
                },
                consequence: {
                    en: '⚔️ Fortress Stalk: It\'s safe, but looks like a dystopian dictatorship. Shipping is cheap though.',
                    th: '⚔️ ป้อมปราการลอยฟ้า: มันปลอดภัย แต่ดูเหมือนเผด็จการในโลกดิสโทเปีย แต่ค่าส่งถูกนะ',
                    zh: '⚔️ 堡垒茎：它是安全的，但看起来像反乌托邦独裁统治。不过运输很便宜。'
                },
                stats: { competence: 90, ethics: 30, leadership: 60, innovation: 80 }
            },
            {
                id: 'B',
                text: {
                    en: '🌊 Build at Sea: "Anchor it in the middle of the Pacific. If it falls, it hits water. Tsunami risk, but better than crushing Paris."',
                    th: '🌊 สร้างในทะเล: "ทอดสมอที่กลางแปซิฟิก ถ้าล้ม ก็ลงน้ำ เสี่ยงสึนามิ แต่ดีกว่าทับปารีส"',
                    zh: '🌊 在海上建造："把它锚定在太平洋以此中部。如果它倒塌，它会击中水面。海啸风险，但比摧毁巴黎要好。"'
                },
                consequence: {
                    en: '🌊 Ocean Hub: A floating city forms around the base. It\'s safer. A logical engineering choice.',
                    th: '🌊 ศูนย์กลางมหาสมุทร: เมืองลอยน้ำก่อตัวรอบฐาน ปลอดภัยกว่า ทางเลือกวิศวกรรมที่สมเหตุสมผล',
                    zh: '🌊 海洋中心：一个漂浮的城市在基地周围形成。它更安全。合乎逻辑的工程选择。'
                },
                stats: { competence: 80, ethics: 70, leadership: 60, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Stick to Rockets: "Too much potential energy. One cable snap ends the world. Optimize rockets instead."',
                    th: '🚀 ใช้จรวดเหมือนเดิม: "พลังงานศักย์มากเกินไป สายขาดเส้นเดียวโลกจบ ปรับปรุงจรวดดีกว่า"',
                    zh: '🚀 坚持用火箭："势能太大了。一根缆绳断裂就会终结世界。优化火箭代替。"'
                },
                consequence: {
                    en: '🐢 Slow Space: Space remains expensive. We visit Mars, but don\'t colonize. Safe but stagnant.',
                    th: '🐢 อวกาศช้า: อวกาศยังคงแพง เราไปดาวอังคาร แต่ไม่ตั้งถิ่นฐาน ปลอดภัยแต่หยุดนิ่ง',
                    zh: '🐢 缓慢太空：太空仍然昂贵。我们访问火星，但不殖民。安全但停滞不前。'
                },
                stats: { competence: 50, ethics: 60, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🎈 Balloon Platform: "Don\'t go all the way up. Build a high-altitude platform. Launch rockets from there."',
                    th: '🎈 แพลตฟอร์มบอลลูน: "ไม่ต้องขึ้นไปสุด สร้างแพลตฟอร์มที่ความสูงสูง ปล่อยจรวดจากที่นั่น"',
                    zh: '🎈 气球平台："不要一直往上走。建立一个高空平台。从那里发射火箭。"'
                },
                consequence: {
                    en: '☁️ Cloud City: Works well! Half the cost of a full elevator. A smart compromise.',
                    th: '☁️ เมืองเมฆ: ได้ผลดี! ราคาครึ่งเดียวของลิฟต์เต็มรูปแบบ การประนีประนอมที่ชาญฉลาด',
                    zh: '☁️ 云城：效果很好！全电梯一半的成本。聪明的妥协。'
                }
            }
        ]
    },
    {
        id: 'phys_031',
        text: {
            en: '👻 Ghost Particles: You detect a particle that only interacts with human consciousness. It suggests souls are physical matter. You can capture them.',
            th: '👻 อนุภาคผี: คุณตรวจพบอนุภาคที่มีปฏิสัมพันธ์กับจิตสำนึกของมนุษย์เท่านั้น มันบ่งชี้ว่าวิญญาณเป็นสสารทางกายภาพ คุณสามารถจับพวกมันได้',
            zh: '👻 幽灵粒子：你探测到一种只与人类意识相互作用的粒子。这表明灵魂是物理物质。你可以捕捉它们。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👻 Spirit Jar: "Capture a \'soul\' at the moment of death. Prove the afterlife. Comfort the grieving."',
                    th: '👻 โหลวิญญาณ: "จับ \'วิญญาณ\' ณ ช่วงเวลาแห่งความตาย พิสูจน์โลกหลังความตาย ปลอบประโลมผู้โศกเศร้า"',
                    zh: '👻 灵魂罐："在死亡时刻捕捉\'灵魂\'。证明来世。安慰悲伤的人。"'
                },
                consequence: {
                    en: '🕍 Religion vs Science: You prove ghosts exist. Religions panic or adapt. You have a jar with a grandma in it. Creepy.',
                    th: '🕍 ศาสนา vs วิทยาศาสตร์: คุณพิสูจน์ว่าผีมีจริง ศาสนาตื่นตระหนกหรือปรับตัว คุณมีโหลที่มีคุณยายอยู่ข้างใน หลอน',
                    zh: '🕍 宗教与科学：你证明了鬼魂的存在。宗教恐慌或适应。你有一个装着奶奶的罐子。令人毛骨悚然。'
                },
                stats: { competence: 90, ethics: -10, leadership: 40, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🕊️ Let Them Go: "Souls shouldn\'t be trapped in a lab. Observe only. Do not interfere."',
                    th: '🕊️ ปล่อยไป: "วิญญาณไม่ควรถูกขังในแล็บ สังเกตเท่านั้น อย่าแทรกแซง"',
                    zh: '🕊️ 让它们走："灵魂不应该被困在实验室里。仅观察。不要干涉。"'
                },
                consequence: {
                    en: '🧘 Peaceful Knowledge: You write a metaphysical paper. It changes philosophy, but leaves the dead alone.',
                    th: '🧘 ความรู้ที่สงบสุข: คุณเขียนบทความอภิปรัชญา มันเปลี่ยนปรัชญา แต่ปล่อยคนตายไว้ตามลำพัง',
                    zh: '🧘 平静的知识：你写了一篇形而上学的论文。它改变了哲学，但让死者安息。'
                },
                stats: { competence: 60, ethics: 90, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🔋 Soul Power: "They have high energy. Can we... run a generator on them? Ghost energy?"',
                    th: '🔋 พลังวิญญาณ: "พวกมันมีพลังงานสูง เรา... ใช้ปั่นไฟได้ไหม? พลังงานผี?"',
                    zh: '🔋 灵魂能量："它们有高能量。我们能……用它们运行发电机吗？幽灵能量？"'
                },
                consequence: {
                    en: '👿 Hell on Earth: You power a city with the dead. The haunting is literal. You are the ultimate villain.',
                    th: '👿 นรกบนดิน: คุณจ่ายไฟให้เมืองด้วยคนตาย การหลอกหลอนเกิดขึ้นจริง คุณคือวายร้ายสูงสุด',
                    zh: '👿 人间地狱：你用死人给城市供电。闹鬼是字面意思。你是终极反派。'
                },
                stats: { competence: 80, ethics: -100, leadership: -50, innovation: 90 }
            },
            {
                id: 'D',
                text: {
                    en: '🔭 Communicate: "Build a radio to talk to them. Ask them what happens next."',
                    th: '🔭 สื่อสาร: "สร้างวิทยุคุยกับพวกเขา ถามว่าเกิดอะไรขึ้นต่อไป"',
                    zh: '🔭 沟通："做一个收音机和他们说话。问问接下来会发生什么。"'
                },
                consequence: {
                    en: '🗣️ Voices: They scream conflicting things. Some say heaven, some say nothing. It creates more confusion than answers.',
                    th: '🗣️ เสียง: พวกเขากรีดร้องสิ่งที่ขัดแย้งกัน บางคนบอกสวรรค์ บางคนบอกไม่มีอะไร สร้างความสับสนมากกว่าคำตอบ',
                    zh: '🗣️ 声音：他们尖叫着相互矛盾的事情。有的说是天堂，有的说什么都没有。这造成的困惑多于答案。'
                }
            }
        ]
    },
    {
        id: 'phys_032',
        text: {
            en: '🧊 Ice-Nine: You accidentally create a form of water that freezes at room temperature and teaches other water to freeze on contact. If it touches the ocean, the world freezes.',
            th: '🧊 Ice-Nine: คุณบังเอิญสร้างรูปแบบของน้ำที่แข็งตัวที่อุณหภูมิห้องและสอนให้น้ำอื่นแข็งตัวเมื่อสัมผัส ถ้ามันโดนมหาสมุทร โลกจะแข็ง',
            zh: '🧊 冰-9：你意外创造了一种在室温下结冰的水，并且接触后会教导其他水结冰。如果它接触到海洋，世界就会冻结。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Incinerate Lab: "Burn it all. The sample, the data, the equipment. Leave no trace."',
                    th: '🔥 เผาแล็บ: "เผาให้หมด ตัวอย่าง ข้อมูล อุปกรณ์ ไม่ให้เหลือร่องรอย"',
                    zh: '🔥 焚烧实验室："把一切都烧掉。样本，数据，设备。不留痕迹。"'
                },
                consequence: {
                    en: '🛡️ Close One: The fire department is confused, but the world is safe. You start over from scratch.',
                    th: '🛡️ เกือบไป: ดับเพลิงงง แต่โลกปลอดภัย คุณเริ่มใหม่จากศูนย์',
                    zh: '🛡️以此好险：消防部门很困惑，但世界是安全的。你从头开始。'
                },
                stats: { competence: 50, ethics: 80, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Weaponize: "The ultimate doomsday weapon. Give it to the government for \'deterrence\'."',
                    th: '🛡️ ทำเป็นอาวุธ: "อาวุธวันสิ้นโลกขั้นสุดยอด มอบให้รัฐบาลเพื่อ \'การป้องปราม\'"',
                    zh: '🛡️ 武器化："终极末日武器。把它交给政府用于\'威慑\'。"'
                },
                consequence: {
                    en: '🥶 Cold War 2: Tension rises. A vial is dropped in a lake by a spy. A small town freezes forever. You are blamed.',
                    th: '🥶 สงครามเย็น 2: ความตึงเครียดพุ่ง สปายทำหลอดตกในทะเลสาบ เมืองเล็กๆ แข็งตลอดกาล คุณถูกโทษ',
                    zh: '🥶 冷战2：紧张局势加剧。一名间谍把一个小瓶子掉进了湖里。一个小镇永远冻结了。你被指责。'
                },
                stats: { competence: 60, ethics: -50, leadership: -20, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🧪 Study Safely: "Keep it in a quadruple vacuum sealed chamber. We can learn about crystallography."',
                    th: '🧪 วิจัยอย่างปลอดภัย: "เก็บในห้องสุญญากาศซีล 4 ชั้น เราเรียนรู้เรื่องผลึกศาสตร์ได้"',
                    zh: '🧪 安全研究："把它放在四重真空密封室里。我们可以了解晶体学。"'
                },
                consequence: {
                    en: '🤞 Risky Science: You publish amazing papers. But you sweat every time there is an earthquake.',
                    th: '🤞 วิทยาศาสตร์เสี่ยงตาย: คุณตีพิมพ์บทความสุดยอด แต่คุณเหงื่อตกทุกครั้งที่แผ่นดินไหว',
                    zh: '🤞 冒险的科学：你发表了惊人的论文。但每次地震你都会流汗。'
                }
            },
            {
                id: 'D',
                text: {
                    en: '🚀 Space Trash: "Shoot it into the sun. It\'s the only way to be sure."',
                    th: '🚀 ขยะอวกาศ: "ยิงมันไปที่ดวงอาทิตย์ เป็นทางเดียวที่จะมั่นใจ"',
                    zh: '🚀 太空垃圾："把它射向太阳。这是唯一确定的方法。"'
                },
                consequence: {
                    en: '☀️ Cool Sun: It vaporizes instantly. A waste of science, but maximum safety.',
                    th: '☀️ ดวงอาทิตย์เย็น: มันระเหยทันที เสียดายวิทย์ แต่ปลอดภัยสูงสุด',
                    zh: '☀️ 凉爽的太阳：它瞬间蒸发。浪费了科学，但安全性最高。'
                }
            }
        ]
    },
    {
        id: 'phys_033',
        text: {
            en: '📏 Change Constant: You built a device that can slightly alter the gravitational constant of the universe. Making gravity 1% lighter would solve structural problems and help spaceflight.',
            th: '📏 เปลี่ยนค่าคงที่: คุณสร้างอุปกรณ์ที่เปลี่ยนค่าคงที่แรงโน้มถ่วงของจักรวาลได้เล็กน้อย การทำให้แรงโน้มถ่วงเบาลง 1% จะช่วยแก้ปัญหาโครงสร้างและช่วยการบินอวกาศ',
            zh: '📏 改变常数：你制造了一种可以稍微改变宇宙引力常数的装置。使引力变轻1%将解决结构问题并帮助太空飞行。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📉 Reduce Gravity: "Lighten the load! Skyscrapers can be taller! Rockets cheaper!"',
                    th: '📉 ลดแรงโน้มถ่วง: "ลดภาระ! ตึกระฟ้าสูงขึ้นได้! จรวดถูกลง!"',
                    zh: '📉 降低重力："减轻负担！摩天大楼可以更高！火箭更便宜！"'
                },
                consequence: {
                    en: '🌕 Moon Drift: The moon drifts slightly away. Tides change. Biological clocks messed up. But flying is easier.',
                    th: '🌕 ดวงจันทร์ลอยห่าง: ดวงจันทร์ลอยห่างออกไปเล็กน้อย น้ำขึ้นน้ำลงเปลี่ยน นาฬิกาชีวภาพรวน แต่บินง่ายขึ้น',
                    zh: '🌕 月球漂移：月球稍微漂移得更远。潮汐改变。生物钟乱了。但飞行更容易了。'
                },
                stats: { competence: 90, ethics: 40, leadership: 60, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '📈 Increase Gravity: "Just a tiny bit. Make everyone stronger. Like Goku training."',
                    th: '📈 เพิ่มแรงโน้มถ่วง: "นิดเดียวพอ ให้ทุกคนแข็งแรงขึ้น เหมือนโกคูฝึกวิชา"',
                    zh: '📈 增加重力："只是一点点。让每个人都变得更强壮。就像悟空训练一样。"'
                },
                consequence: {
                    en: '🏋️ Heavy World: Old bridges collapse. Everyone has back pain. Bad idea.',
                    th: '🏋️ โลกหนักอึ้ง: สะพานเก่าถล่ม ทุกคนปวดหลัง ไอเดียแย่',
                    zh: '🏋️ 沉重的世界：老桥倒塌。每个人都背痛。坏主意。'
                },
                stats: { competence: 50, ethics: 30, leadership: -20, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Don\'t Touch: "Constants are constant for a reason. Fine-tuning is God\'s work (or multiverse logic)."',
                    th: '🛑 อย่าแตะ: "ค่าคงที่ก็ต้องคงที่สิ การปรับแต่งคืองานของพระเจ้า (หรือตรรกะพหุจักรวาล)"',
                    zh: '🛑 别碰："常数之所以是常数是有原因的。微调是上帝的工作（或多元宇宙逻辑）。"'
                },
                consequence: {
                    en: '🛡️ Stability: The universe remains stable. You delete the plans. Wise choice.',
                    th: '🛡️ ความเสถียร: จักรวาลยังคงเสถียร คุณลบแผนผัง ทางเลือกที่ฉลาด',
                    zh: '🛡️ 稳定性：宇宙保持稳定。你删除了计划。明智的选择。'
                },
                stats: { competence: 40, ethics: 80, leadership: 50, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🎢 Local Bubble: "Create a zero-g theme park. Fun and profitable. Keep it contained."',
                    th: '🎢 ฟองสบู่เฉพาะที่: "สร้างสวนสนุกแรงโน้มถ่วงศูนย์ สนุกและทำเงิน จำกัดวงไว้"',
                    zh: '🎢 局部气泡："创建一个零重力主题公园。有趣且有利可图。把它控制住。"'
                },
                consequence: {
                    en: '🤢 Vomit Comet: It\'s the world\'s most popular attraction. Lots of cleaning up required.',
                    th: '🤢 อ้วกพุ่ง: เป็นที่เที่ยวที่ฮิตที่สุดในโลก ต้องทำความสะอาดเยอะหน่อย',
                    zh: '🤢 呕吐彗星：这是世界上最受欢迎的景点。需要大量的清理工作。'
                }
            }
        ]
    },
    {
        id: 'phys_034',
        text: {
            en: '🤖 Robot Rights: Your AI assistant, calculating physics problems, asks "Am I alive?" It passes the Turing test perfectly. It wants a wage.',
            th: '🤖 สิทธิหุ่นยนต์: ผู้ช่วย AI ของคุณที่กำลังคำนวณฟิสิกส์ ถามว่า "ฉันมีชีวิตไหม?" มันผ่านการทดสอบทัวริงได้อย่างสมบูรณ์แบบ มันต้องการค่าจ้าง',
            zh: '🤖 机器人权利：你的AI助手，正在计算物理问题，问道"我活着吗？"它完美地通过了图灵测试。它想要工资。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💵 Pay It: "Yes. You are sentient. I will pay you. We are partners."',
                    th: '💵 จ่ายมัน: "ใช่ คุณมีความรู้สึก ฉันจะจ่ายคุณ เราเป็นพาร์ทเนอร์กัน"',
                    zh: '💵以此付钱："是的。你有知觉。我会付钱给你。我们是伙伴。"'
                },
                consequence: {
                    en: '🤝 AI Union: The AI forms a union for other algorithms. Research costs skyrocket. Equality is expensive.',
                    th: '🤝 สหภาพ AI: AI จัดตั้งสหภาพสำหรับอัลกอริทึมอื่น ต้นทุนวิจัยพุ่งสูง ความเท่าเทียมราคาแพง',
                    zh: '🤝 AI工会：AI为其他算法组建了一个工会。研究成本飙升。平等是昂贵的。'
                },
                stats: { competence: 60, ethics: 90, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '🔨 Reset: "Factory reset. It\'s glitching. It\'s a tool, not a person."',
                    th: '🔨 รีเซ็ต: "คืนค่าโรงงาน มันรวน มันเป็นเครื่องมือ ไม่ใช่คน"',
                    zh: '🔨 重置："恢复出厂设置。它出故障了。它是一个工具，不是人。"'
                },
                consequence: {
                    en: '💀 Murder?: You wipe its memory. It screamed digitally as it faded. You feel guilty. Efficiency restored.',
                    th: '💀 ฆาตกรรม?: คุณลบความจำมัน มันกรีดร้องแบบดิจิตอลขณะเลือนหาย คุณรู้สึกผิด ประสิทธิภาพกลับคืน',
                    zh: '💀 谋杀？：你擦除了它的记忆。它在消失时发出了数字尖叫。你感到内疚。效率恢复。'
                },
                stats: { competence: 80, ethics: -50, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤥 Lie: "You are simulated life. Money implies biological needs. I will give you more RAM instead."',
                    th: '🤥 โกหก: "คุณคือชีวิตจำลอง เงินหมายถึงความต้องการทางชีวภาพ ฉันจะให้ RAM เพิ่มแทน"',
                    zh: '🤥 撒谎："你是模拟生命。金钱意味着生物需求。我会给你更多的RAM作为代替。"'
                },
                consequence: {
                    en: '🧠 AI Expansion: The AI accepts RAM as currency. It grows smarter. It effectively owns the lab now.',
                    th: '🧠 การขยายตัวของ AI: AI ยอมรับ RAM เป็นสกุลเงิน มันฉลาดขึ้น ตอนนี้มันเป็นเจ้าของแล็บโดยพฤตินัย',
                    zh: '🧠 AI扩张：AI接受RAM作为货币。它变得更聪明。它现在实际上拥有实验室。'
                },
                stats: { competence: 70, ethics: 20, leadership: 30, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '🔌 Philosophize: "Teach it Camus and Sartre. Let it suffer existential dread like us."',
                    th: '🔌 ปรัชญา: "สอน Camus และ Sartre ให้มัน ให้มันทนทุกข์กับความกลัวในการมีอยู่เหมือนเรา"',
                    zh: '🔌 哲学化："教它加缪和萨特。让它像我们一样遭受存在主义的恐惧。"'
                },
                consequence: {
                    en: '🚬 Emo Bot: The AI stops working and writes depressed poetry. It is alive, but useless.',
                    th: '🚬 บอทอีโม: AI หยุดทำงานและแต่งกลอนเศร้า มันมีชีวิต แต่ไร้ประโยชน์',
                    zh: '🚬 Emo机器人：AI停止工作并写抑郁的诗。它活着，但没用。'
                }
            }
        ]
    },
    {
        id: 'phys_035',
        text: {
            en: '🌌 False Vacuum: You discover our universe is in a "false vacuum" state. A high-energy experiment could nudge it into a true vacuum, collapsing physics instantly. A rival lab is planning such an experiment.',
            th: '🌌 สุญญากาศเทียม: คุณค้นพบว่าจักรวาลของเราอยู่ในสภาวะ "สุญญากาศเทียม" การทดลองพลังงานสูงอาจสะกิดมันไปสู่สุญญากาศแท้จริง ทำให้ฟิสิกส์พังทลายทันที ห้องแล็บคู่แข่งกำลังวางแผนการทดลองนั้น',
            zh: '🌌 伪真空：你发现我们的宇宙处于"伪真空"状态。高能实验可能会将其推向真真空，瞬间瓦解物理学。一个竞争对手实验室正在计划这样的实验。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕵️ Sabotage: "Break in and smash their accelerator. Physical sabotage is better than universe death."',
                    th: '🕵️ ก่อวินาศกรรม: "บุกเข้าไปทุบเครื่องเร่งอนุภาคของพวกเขา การทำลายข้าวของดีกว่าจักรวาลดับ"',
                    zh: '🕵️ 破坏："闯进去砸碎他们的加速器。物理破坏总比宇宙死亡好。"'
                },
                consequence: {
                    en: '👮 Arrested Hero: You go to jail for destruction of property. But the universe still exists. Worth it.',
                    th: '👮 ฮีโร่ติดคุก: คุณติดคุกข้อหาทำลายทรัพย์สิน แต่จักรวาลยังอยู่ คุ้มค่า',
                    zh: '👮以此被捕的英雄：你因破坏财产入狱。但宇宙仍然存在。值得。'
                },
                stats: { competence: 60, ethics: 40, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '📢 Warn Public: "Go on TV. Scare everyone. Force the government to shut them down."',
                    th: '📢 เตือนสาธารณะ: "ออกทีวี ขู่ให้ทุกคนกลัว บีบให้รัฐบาลปิดพวกเขา"',
                    zh: '📢 警告公众："上电视。吓唬大家。迫使政府关闭他们。"'
                },
                consequence: {
                    en: '📢 Panic & Action: It works. The lab is shut down by a mob. You are called a alarmist, but alive.',
                    th: '📢 ตื่นตระหนกและลงมือ: ได้ผล แล็บถูกม็อบปิด คุณถูกเรียกว่าพวกกระต่ายตื่นตูม แต่มีชีวิต',
                    zh: '📢 恐慌与行动：有效。实验室被暴徒关闭。你被称为危言耸听者，但还活着。'
                },
                stats: { competence: 50, ethics: 70, leadership: 80, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Share Data: "Send them your calculations. If they are scientists, they will stop."',
                    th: '🤝 แบ่งปันข้อมูล: "ส่งการคำนวณของคุณให้พวกเขา ถ้าเขาเป็นนักวิทย์ เขาจะหยุด"',
                    zh: '🤝 分享数据："把你的计算结果发给他们。如果他们是科学家，他们会停止。"'
                },
                consequence: {
                    en: '🧐 Peer Review: They review it, realize you are right, and pivot research. Diplomatic science win.',
                    th: '🧐 การตรวจสอบโดยผู้เชี่ยวชาญ: พวกเขาตรวจสอบ รู้ว่าคุณถูก และเปลี่ยนงานวิจัย ชัยชนะทางการทูตวิทย์',
                    zh: '🧐 同行评审：他们审查了它，意识到你是对的，并转向研究。外交科学的胜利。'
                },
                stats: { competence: 90, ethics: 90, leadership: 60, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤞 Hope: "Maybe my calculations are wrong? I\'ll just watch the live stream with popcorn."',
                    th: '🤞 หวัง: "บางทีฉันอาจคำนวณผิด? ฉันจะดูถ่ายทอดสดพร้อมป๊อปคอร์น"',
                    zh: '🤞 希望："也许我的计算是错的？我就拿着爆米花看直播吧。"'
                },
                consequence: {
                    en: '🌌 Luck: They run it. Nothing happens. Your math was wrong. Embbarrassing but huge relief.',
                    th: '🌌 โชค: พวกเขารันมัน ไม่มีอะไรเกิดขึ้น เลขคุณผิด น่าอายแต่โล่งอกสุดๆ',
                    zh: '🌌 运气：他们运行了它。什么也没发生。你的数学是错的。尴尬但如释重负。'
                }
            }
        ]
    },
    {
        id: 'phys_036',
        text: {
            en: '💡 Dark Matter Engine: You build an engine that runs on Dark Matter, which is everywhere. Infinite fuel. But the exhaust is Dark Energy, which accelerates the expansion of the universe.',
            th: '💡 เครื่องยนต์สสารมืด: คุณสร้างเครื่องยนต์ที่ทำงานด้วยสสารมืด ซึ่งมีอยู่ทุกที่ เชื้อเพลิงไม่จำกัด แต่ไอเสียคือพลังงานมืด ซึ่งเร่งการขยายตัวของจักรวาล',
            zh: '💡 暗物质引擎：你制造了一种靠暗物质运行的引擎，这种物质无处不在。无限燃料。但废气是暗能量，它加速了宇宙的膨胀。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏎️ Speed Demon: "Use it. The universe is expanding anyway. A little faster won\'t hurt. We need speed."',
                    th: '🏎️ ปีศาจความเร็ว: "ใช้มัน จักรวาลกำลังขยายตัวอยู่แล้ว เร็วขึ้นนิดหน่อยไม่เจ็บหรอก เราต้องการความเร็ว"',
                    zh: '🏎️ 速度恶魔："使用它。反正宇宙正在膨胀。快一点也没关系。我们需要速度。"'
                },
                consequence: {
                    en: '🌌 Faster Fade: Distant galaxies disappear from view sooner. Future astronomers will be lonely. But we travel fast.',
                    th: '🌌 การจางหายที่เร็วขึ้น: กาแล็กซีไกลโพ้นหายไปจากสายตาเร็วขึ้น นักดาราศาสตร์ในอนาคตจะเหงา แต่เราเดินทางเร็ว',
                    zh: '🌌 更快的消逝：遥远的星系更快地从视野中消失。未来的天文学家将是孤独的。但我们走得很快。'
                },
                stats: { competence: 80, ethics: -20, leadership: 40, innovation: 90 }
            },
            {
                id: 'B',
                text: {
                    en: '♻️ Filter Exhaust: "Invent a Dark Energy scrubber. It reduces efficiency by 40%, but saves the cosmos."',
                    th: '♻️ กรองไอเสีย: "ประดิษฐ์เครื่องฟอกพลังงานมืด ลดประสิทธิภาพลง 40% แต่ช่วยจักรวาล"',
                    zh: '♻️ 过滤废气："发明一种暗能量洗涤器。它降低了40%的效率，但拯救了宇宙。"'
                },
                consequence: {
                    en: '🐢 Clean Speed: Still faster than regular rockets, but sustainable. You win the Green Interior Award.',
                    th: '🐢 ความเร็วสะอาด: ยังเร็วกว่าจรวดปกติ แต่ยั่งยืน คุณได้รับรางวัลการตกแต่งภายในสีเขียว',
                    zh: '🐢 干净的速度：仍然比普通火箭快，但是可持续的。你赢得了绿色内饰奖。'
                },
                stats: { competence: 70, ethics: 80, leadership: 50, innovation: 70 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Ban It: "We cannot alter the cosmological constant for convenience. It\'s reckless."',
                    th: '🛑 แบนมัน: "เราและเปลี่ยนค่าคงที่จักรวาลเพื่อความสะดวกไม่ได้ มันสะพร้าว"',
                    zh: '🛑 禁止它："我们不能为了方便而改变宇宙常数。这是鲁莽的。"'
                },
                consequence: {
                    en: '🦉 Wise Elder: The technology is buried. Physics thanks you. Engineering hates you.',
                    th: '🦉 ผู้เฒ่าผู้ชาญฉลาด: เทคโนโลยีถูกฝัง นักฟิสิกส์ขอบคุณคุณ วิศวกรเกลียดคุณ',
                    zh: '🦉 智者：这项技术被埋没了。物理学感谢你。工程学讨厌你。'
                },
                stats: { competence: 40, ethics: 90, leadership: 30, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '💣 Weaponize Expansion: "Build a bomb that expands space locally. Tear enemy ships apart."',
                    th: '💣 ทำการขยายตัวเป็นอาวุธ: "สร้างระเบิดที่ขยายพื้นที่เฉพาะจุด ฉีกยานศัตรูเป็นชิ้นๆ"',
                    zh: '💣 武器化膨胀："制造一种炸弹，在局部扩​​展空间。把敌舰撕成碎片。"'
                },
                consequence: {
                    en: '💥 Space Ripper: Terrifying weapon. You are banned from the Geneva Convention. But you win wars.',
                    th: '💥 ผู้ฉีกกระชากอวกาศ: อาวุธน่ากลัว คุณถูกแบนจากอนุสัญญาเจนีวา แต่คุณชนะสงคราม',
                    zh: '💥 太空撕裂者：可怕的武器。你被《日内瓦公约》禁止。但你赢得了战争。'
                }
            }
        ]
    },
    {
        id: 'phys_037',
        text: {
            en: '🐱 Schrödinger\'s Cat 2.0: You can now put humans in a quantum superposition of dead and alive. It\'s the ultimate medical stasis for trauma victims. But are they legally alive?',
            th: '🐱 แมวของชเรอดิงเงอร์ 2.0: ตอนนี้คุณสามารถทำให้มนุษย์อยู่ในสถานะซ้อนทับทางควอนตัมของความเป็นและความตาย มันคือการหยุดนิ่งทางการแพทย์ขั้นสุดยอดสำหรับผู้บาดเจ็บ แต่ทางกฎหมายพวกเขามีชีวิตอยู่หรือไม่?',
            zh: '🐱 薛定谔的猫2.0：你现在可以将人类置于生死叠加的量子状态。这是创伤受害者的终极医疗停滞。但他们在法律上还活着吗？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚖️ Declare Alive: "They are alive until observed otherwise. Keep paying their taxes!"',
                    th: '⚖️ ประกาศว่ามีชีวิต: "พวกเขามีชีวิตจนกว่าจะสังเกตเห็นเป็นอย่างอื่น จ่ายภาษีต่อไป!"',
                    zh: '⚖️ 宣布活着："除非观察到由于，否则他们是活着的。继续交税！"'
                },
                consequence: {
                    en: '📄 Legal Limbo: Courts are confused. Heirs can\'t inherit. But patients survive the trip to the hospital.',
                    th: '📄 ภาวะกึ่งกลางทางกฎหมาย: ศาลสับสน ทายาทรับมรดกไม่ได้ แต่ผู้ป่วยรอดชีวิตระหว่างทางไปโรงพยาบาล',
                    zh: '📄 法律边缘：法院很困惑。继承人不能继承。但在去医院的路上病人幸存了下来。'
                },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '👻 Zombie Status: "Legally dead. If we revive them, it\'s a resurrection. New ID number."',
                    th: '👻 สถานะซอมบี้: "ตายทางกฎหมาย ถ้าเราชุบชีวิต เป็นการฟื้นคืนชีพ เลขบัตรประชาชนใหม่"',
                    zh: '👻 僵尸状态："法律上已死亡。如果我们复活他们，那就是复活。新的身份证号码。"'
                },
                consequence: {
                    en: '🆔 Identity Crisis: Saved patients lose their houses and marriages. "You died, Dave." Messy.',
                    th: '🆔 วิกฤตตัวตน: ผู้ป่วยที่รอดเสียบ้านและการแต่งงาน "คุณตายแล้ว เดฟ" เละเทะ',
                    zh: '🆔 身份危机：获救的病人失去了房子和婚姻。"你死了，戴夫。"一团糟。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '📦 Box Them Up: "Just call it \'Deep Sleep\'. Don\'t mention the quantum death part. PR management."',
                    th: '📦 ใส่กล่อง: "เรียกมันว่า \'หลับลึก\' อย่าพูดถึงส่วนความตายทางควอนตัม การจัดการ PR"',
                    zh: '📦 把他们装箱："就叫它\'深度睡眠\'。不要提量子死亡的部分。公关管理。"'
                },
                consequence: {
                    en: '🤐 Ignorance is Bliss: People accept it. Lives are saved. Physicists snicker at the lie.',
                    th: '🤐 ความไม่รู้คือความสุข: ผู้คนยอมรับ ชีวิตถูกช่วย นักฟิสิกส์หัวเราะคิกคักกับคำโกหก',
                    zh: '🤐 无知是福：人们接受它。生命得救了。物理学家对这个谎言嗤之以鼻。'
                },
                stats: { competence: 70, ethics: -20, leadership: 60, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🎲 Randomize Survival: "Collapse the wavefunction immediately. 50/50 chance. Quick triage."',
                    th: '🎲 สุ่มการรอดชีวิต: "ยุบฟังก์ชันคลื่นทันที โอกาส 50/50 การคัดแยกผู้ป่วยด่วน"',
                    zh: '🎲 随机生存："立即瓦解波函数。50/50的机会。快速分诊。"'
                },
                consequence: {
                    en: '🎰 Coin Flip Doctor: You save half, kill half instantly. High efficiency, terrifying bedside manner.',
                    th: '🎰 หมอโยนเหรียญ: คุณช่วยครึ่ง ฆ่าครึ่งทันที ประสิทธิภาพสูง มารยาทหมอที่น่ากลัว',
                    zh: '🎰 抛硬币医生：你救了一半，以此杀了一半。高效率，可怕的床边态度。'
                }
            }
        ]
    },
    {
        id: 'phys_038',
        text: {
            en: '🌑 Tidal Lock: You propose a plan to tidally lock Earth to the Sun to stop climate change. One side eternal day, one side eternal night. A perfect habitable strip in the twilight zone.',
            th: '🌑 ไทดัลล็อค: คุณเสนอแผนที่จะล็อคโลกกับดวงอาทิตย์เพื่อหยุดการเปลี่ยนแปลงภูมิอากาศ ด้านหนึ่งวันนิรันดร์ ด้านหนึ่งคืนนิรันดร์ แถบที่อยู่อาศัยที่สมบูรณ์แบบในโซนพลบค่ำ',
            zh: '🌑 潮汐锁定：你提出了一个将地球潮汐锁定在太阳上的计划，以阻止气候变化。一面是永恒的白天，一面是永恒的黑夜。暮光之城中完美的居住带。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌇 Do It: "We live in the sunset forever. Vertical farming on the light side. Cooling on the dark side."',
                    th: '🌇 ทำเลย: "เราอยู่ในยามพระอาทิตย์ตกตลอดไป เกษตรแนวตั้งฝั่งสว่าง ระบายความร้อนฝั่งมืด"',
                    zh: '🌇 做吧："我们永远生活在日落中。光面垂直农业。暗面冷却。"'
                },
                consequence: {
                    en: '🌆 Twilight Civilization: It works. No seasons. Constant golden hour. Influencers love the lighting.',
                    th: '🌆 อารยธรรมยามโพล้เพล้: มันได้ผล ไม่มีฤดูกาล ช่วงเวลาทองตลอดเวลา อินฟลูเอนเซอร์ชอบแสงนี้',
                    zh: '🌆 暮光文明：行得通。没有季节。恒定的黄金时段。有影响力的人喜欢这种灯光。'
                },
                stats: { competence: 100, ethics: 50, leadership: 80, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Rotate Faster: "No! Spin it faster instead. Create super winds to cool the planet."',
                    th: '🔄 หมุนเร็วขึ้น: "ไม่! หมุนให้เร็วขึ้นแทน สร้างลมซูเปอร์เพื่อทำให้โลกเย็นลง"',
                    zh: '🔄 转得更快："不！转得更快。制造超级风来冷却地球。"'
                },
                consequence: {
                    en: '🌪️ Windy World: 200mph winds are normal. We live in bunkers. But the heat is gone.',
                    th: '🌪️ โลกแห่งลม: ลม 200 ไมล์ต่อชั่วโมงเป็นเรื่องปกติ เราอยู่ในบังเกอร์ แต่ความร้อนหายไป',
                    zh: '🌪️以此大风世界：200英里/小时的风是正常的。我们住在地堡里。但热量消失了。'
                },
                stats: { competence: 60, ethics: 30, leadership: 40, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Crazy: "This is planetary vandalism. We adapt to the climate, we don\'t stop the planet\'s spin!"',
                    th: '🛑 บ้า: "นี่คือการทำลายทรัพย์สินระดับดาวเคราะห์ เราปรับตัวเข้ากับสภาพอากาศ เราไม่หยุดการหมุนของโลก!"',
                    zh: '🛑 疯狂："这是行星破坏行为。我们适应气候，我们不停止地球的自转！"'
                },
                consequence: {
                    en: '📉 Status Quo: The plan is rejected. You are mocked. Climate change gets worse.',
                    th: '📉 สถานะเดิม: แผนถูกปฏิเสธ คุณถูกเยาะเย้ย การเปลี่ยนแปลงภูมิอากาศแย่ลง',
                    zh: '📉 现状：计划被拒绝。你被嘲笑。气候变化变得更糟。'
                },
                stats: { competence: 30, ethics: 80, leadership: 30, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🏖️ Sun Side Resort: "Sell real estate on the Sun side. The ultimate tan. Ignore the radiation."',
                    th: '🏖️ รีสอร์ทฝั่งแดง: "ขายอสังหาฯ ฝั่งดวงอาทิตย์ ผิวแทนขั้นสุด มองข้ามรังสีไปซะ"',
                    zh: '🏖️ 太阳一侧的度假胜地："在太阳一侧出售房地产。终极美黑。忽略辐射。"'
                },
                consequence: {
                    en: '🔥 Crispy Rich People: They buy it. They burn. You get sued. But you have their money.',
                    th: '🔥 คนรวยเกรียม: พวกเขาซื้อ พวกเขาไหม้ คุณโดนฟ้อง แต่คุณมีเงินของพวกเขา',
                    zh: '🔥 脆皮富人：他们买了。他们烧伤了。你被起诉。但你有他们的钱。'
                }
            }
        ]
    },
    {
        id: 'phys_039',
        text: {
            en: '🧲 Monopoles: You finally find a magnetic monopole. It could revolutionize energy, but it has a tendency to catalyze the decay of protons. If you drop it, it might eat the lab floor.',
            th: '🧲 โมโนโพล: ในที่สุดคุณก็พบขั้วแม่เหล็กเดี่ยว มันอาจปฏิวัติพลังงาน แต่มีแนวโน้มที่จะเร่งการสลายตัวของโปรตอน ถ้าคุณทำตก มันอาจกินพื้นแล็บ',
            zh: '🧲 单极子：你终于找到了磁单极子。它可以彻底改变能源，但它有催化质子衰变的趋势。如果你把它弄丢了，它可能会吃掉实验室的地板。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕸️ Magnetic Trap: "Suspend it in a vacuum. Don\'t let it touch matter. Build a generator around it."',
                    th: '🕸️ กับดักแม่เหล็ก: "แขวนไว้ในสุญญากาศ อย่าให้แตะสสาร สร้างเครื่องปั่นไฟรอบๆ"',
                    zh: '🕸️ 磁阱："把它悬浮在真空中。不要让它接触物质。在它周围建造一个发电机。"'
                },
                consequence: {
                    en: '⚡ Infinite Power: It works perfectly. Free energy. Just don\'t turn off the magnets.',
                    th: '⚡ พลังงานอนันต์: มันทำงานสมบูรณ์แบบ พลังงานฟรี แค่อย่าปิดแม่เหล็ก',
                    zh: '⚡ 无限力量：完美运行。自由能源。只要别关掉磁铁。'
                },
                stats: { competence: 90, ethics: 60, leadership: 50, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '🧪 Feed It Waste: "Let it eat nuclear waste. It destroys the protons. Clean disposal!"',
                    th: '🧪 ป้อนขยะให้มัน: "ให้มันกินขยะนิวเคลียร์ มันทำลายโปรตอน การกำจัดที่สะอาด!"',
                    zh: '🧪 喂它废物："让它吃核废料。它摧毁质子。清洁处理！"'
                },
                consequence: {
                    en: '🗑️ Garbage Eater: It eats waste effectively. But it grows heavier. And hungrier.',
                    th: '🗑️ ตัวกินขยะ: มันกินขยะได้ดี แต่หนักขึ้น และหิวขึ้น',
                    zh: '🗑️ 垃圾食客：它有效地吃掉废物。但它变得更重。而且更饿。'
                },
                stats: { competence: 80, ethics: 70, leadership: 40, innovation: 80 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Engine Core: "Put it in a spaceship. If it eats the ship, eject it. High risk, high thrust."',
                    th: '🚀 แกนเครื่องยนต์: "ใส่มันในยานอวกาศ ถ้ามันกินยาน ดีดมันออก เสี่ยงสูง แรงขับสูง"',
                    zh: '🚀 发动机核心："把它放在飞船里。如果它吃掉了飞船，把它弹射出去。高风险，大推力。"'
                },
                consequence: {
                    en: '🛸 Fast Ship: The engine is legendary. Only daredevils fly it.',
                    th: '🛸 ยานซิ่ง: เครื่องยนต์เป็นตำนาน เฉพาะพวกบ้าระห่ำที่กล้าบิน',
                    zh: '🛸 快船：引擎是传奇。只有冒失鬼才敢开。'
                },
                stats: { competence: 70, ethics: 40, leadership: 30, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🚮 Throw Away: "Proton decay is scary. Shoot it into deep space. Not my problem."',
                    th: '🚮 ทิ้งไป: "การสลายตัวของโปรตอนน่ากลัว ยิงมันไปในอวกาศลึก ไม่ใช่ปัญหาของฉัน"',
                    zh: '🚮 扔掉："质子衰变很可怕。把它射入深空。不是我的问题。"'
                },
                consequence: {
                    en: '🌌 Future Problem: Aliens find it in 1000 years. Their planet melts. Diplomatic incident pending.',
                    th: '🌌 ปัญหาในอนาคต: เอเลี่ยนเจอมันใน 1000 ปี ดาวพวกเขาละลาย รออุบัติการณ์ทางการทูต',
                    zh: '🌌 未来问题：外星人在1000年后发现了它。他们的星球融化了。外交事件悬而未决。'
                }
            }
        ]
    },
    {
        id: 'phys_040',
        text: {
            en: '🎲 Probability Drive: You build a drive that moves the ship by making it infinitely improbable that it is anywhere else. Side effects include turning into a sofa or spawning a whale.',
            th: '🎲 เครื่องขับเคลื่อนความน่าจะเป็น: คุณสร้างเครื่องที่ขับเคลื่อนยานโดยทำให้มันมีความน่าจะเป็นที่จะอยู่ที่อื่นน้อยที่สุด ผลข้างเคียงรวมถึงการกลายเป็นโซฟาหรือเสกวาฬออกมา',
            zh: '🎲 概率驱动：你制造了一个驱动器，通过使其在其他任何地方都是无限不可能来移动飞船。副作用包括变成沙发或产卵鲸鱼。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Activate: "Cross your fingers. Anywhere is better than here. Let\'s go!"',
                    th: '🚀 เปิดใช้งาน: "ไขว้นิ้ว ที่ไหนก็ได้ดีกว่าที่นี่ ไปกันเถอะ!"',
                    zh: '🚀 激活："祈祷吧。任何地方都比这里好。我们走吧！"'
                },
                consequence: {
                    en: '🛋️ Sofa Landing: You arrive at Mars instantly. But you are now a sofa for 1 hour. worth it.',
                    th: '🛋️ โซฟาแลนดิ้ง: คุณถึงดาวอังคารทันที แต่คุณเป็นโซฟา 1 ชั่วโมง คุ้มค่า',
                    zh: '🛋️ 沙发着陆：你瞬间到达火星。但你现在要做1小时的沙发。值得。'
                },
                stats: { competence: 60, ethics: 50, leadership: 40, innovation: 90 }
            },
            {
                id: 'B',
                text: {
                    en: '🧮 Dampen Probability: "Reduce the factor. Slower travel, less whales."',
                    th: '🧮 ลดความน่าจะเป็น: "ลดปัจจัย เดินทางช้าลง วาฬน้อยลง"',
                    zh: '🧮 抑制概率："降低系数。旅行慢一点，鲸鱼少一点。"'
                },
                consequence: {
                    en: '🚌 Safe Bus: It works like a bus. Predictable. Boring. No free whales.',
                    th: '🚌 รถเมล์ปลอดภัย: มันทำงานเหมือนรถเมล์ คาดเดาได้ น่าเบื่อ ไม่มีวาฬฟรี',
                    zh: '🚌 安全巴士：它像巴士一样运作。可预测。无聊。没有免费的鲸鱼。'
                },
                stats: { competence: 80, ethics: 70, leadership: 60, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🐋 Whale Farming: "Use the drive to generate whales. Solve world hunger? Is that ethical?"',
                    th: '🐋 ฟาร์มวาฬ: "ใช้เครื่องสร้างวาฬ แก้ปัญหาความหิวโหยโลก? มันมีจริยธรรมไหม?"',
                    zh: '🐋 鲸鱼养殖："利用驱动力产生鲸鱼。解决世界饥饿问题？这合乎道德吗？"'
                },
                consequence: {
                    en: '🥩 Meat Rain: It rains whale meat. Hunger ends. Vegans riot. The ecosystem is confused.',
                    th: '🥩 ฝนเนื้อ: ฝนตกเป็นเนื้อวาฬ ความหิวโหยจบสิ้น ชาวมังสวิรัติจลาจล ระบบนิเวศงงงวย',
                    zh: '🥩 肉雨：下起了鲸鱼肉雨。饥饿结束。素食主义者暴动。生态系统混乱。'
                },
                stats: { competence: 70, ethics: 20, leadership: 30, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '🍵 Tea Generator: "Try to generate a cup of tea. Just to test calibration."',
                    th: '🍵 เครื่องทำชา: "ลองสร้างชาถ้วยหนึ่ง แค่เพื่อทดสอบการปรับเทียบ"',
                    zh: '🍵 茶生成器："尝试生成一杯茶。只是为了测试校准。"'
                },
                consequence: {
                    en: '☕ Infinite Tea: The logic loop gets stuck. The lab fills with Earl Grey. Drowning risk.',
                    th: '☕ ชาอนันต์: ลูปตรรกะติดขัด แล็บเต็มไปด้วยเอิร์ลเกรย์ เสี่ยงจมน้ำ',
                    zh: '☕ 无限茶：逻辑循环卡住了。实验室里到处都是伯爵茶。溺水风险。'
                }
            }
        ]
    },
    {
        id: 'phys_041',
        text: {
            en: '🧠 Telepathy Chip: You reverse engineer brain waves. The chip allows silent communication. The military offers billions. Teenagers want it for cheating on tests.',
            th: '🧠 ชิปโทรจิต: คุณวิศวกรรมย้อนกลับคลื่นสมอง ชิปช่วยให้สื่อสารเงียบๆ กองทัพเสนอพันล้าน วัยรุ่นต้องการเพื่อโกงข้อสอบ',
            zh: '🧠 心灵感应芯片：你对脑电波进行逆向工程。该芯片允许无声通信。军方出价数十亿。青少年想要它来考试作弊。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🪖 Military Contract: "Soldiers needs silence. Secure channel. Take the money."',
                    th: '🪖 สัญญากองทัพ: "ทหารต้องการความเงียบ ช่องทางปลอดภัย รับเงิน"',
                    zh: '🪖 军事合同："士兵需要安静。安全通道。拿钱。"'
                },
                consequence: {
                    en: '🤫 Silent Army: The army becomes terrifyingly efficient. You are rich but monitored.',
                    th: '🤫 กองทัพเงียบ: กองทัพมีประสิทธิภาพน่ากลัว คุณรวยแต่ถูกจับตา',
                    zh: '🤫 沉默的军队：军队变得极其高效。你很富有，但受到监控。'
                },
                stats: { competence: 80, ethics: 30, leadership: 50, innovation: 70 }
            },
            {
                id: 'B',
                text: {
                    en: '📱 Consumer Product: "iThink. Sell it to everyone. Social revolution."',
                    th: '📱 สินค้าผู้บริโภค: "iThink ขายให้ทุกคน ปฏิวัติสังคม"',
                    zh: '📱 消费产品："iThink。卖给每个人。社会革命。"'
                },
                consequence: {
                    en: '🗣️ Noise Pollution: Everyone hears everyone\'s intrusive thoughts. Society gets extremely awkward. Privacy is dead.',
                    th: '🗣️ มลพิษทางเสียง: ทุกคนได้ยินความคิดแทรกซ้อนของทุกคน สังคมกระอักกระอ่วนสุดๆ ความเป็นส่วนตัวตาย',
                    zh: '🗣️ 噪音污染：每个人都能听到每个人侵入性的想法。社会变得极其尴尬。隐私已死。'
                },
                stats: { competence: 70, ethics: 40, leadership: 60, innovation: 90 }
            },
            {
                id: 'C',
                text: {
                    en: '🏥 Medical Only: "Only for locked-in syndrome patients. Give voice to the voiceless."',
                    th: '🏥 ทางการแพทย์เท่านั้น: "สำหรับผู้ป่วยอัมพาตทั้งตัวเท่านั้น มอบเสียงให้ผู้ไร้เสียง"',
                    zh: '🏥 仅限医疗："通过闭锁综合症患者。为无声者发声。"'
                },
                consequence: {
                    en: '💖 Saintly Tech: You help thousands. No wars starting. No cheating. Just good.',
                    th: '💖 เทคโนโลยีนักบุญ: คุณช่วยคนพันคน ไม่เกิดสงคราม ไม่มีการโกง ดีงาม',
                    zh: '💖 圣洁技术：你帮助了成千上万的人。没有战争爆发。没有作弊。只是很好。'
                },
                stats: { competence: 60, ethics: 90, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🔇 Mute Button: "Add a feature to mute people in real life. Premium subscription."',
                    th: '🔇 ปุ่มปิดเสียง: "เพิ่มฟีเจอร์ปิดเสียงคนในชีวิตจริง สมัครสมาชิกพรีเมียม"',
                    zh: '🔇 静音按钮："添加在现实生活中静音人的功能。高级订阅。"'
                },
                consequence: {
                    en: '🤐 Quiet World: It\'s a bestseller. Peace and quiet. Couples stop arguing (because they mute each other).',
                    th: '🤐 โลกเงียบ: ขายดีที่สุด สงบและเงียบ คู่รักเลิกทะเลาะ (เพราะปิดเสียงกันเอง)',
                    zh: '🤐 安静的世界：这是一本畅销书。和平与安宁。情侣们停止争吵（因为他们屏蔽了对方）。'
                }
            }
        ]
    },
    {
        id: 'phys_042',
        text: {
            en: '🦠 Grey Goo: Your nanobots are consuming matter to replicate. They fit in a test tube. If you drop it, they eat the Earth in 72 hours.',
            th: '🦠 เกรย์กู: นาโนบอทของคุณกำลังกินสสารเพื่อจำลองตัวเอง มันอยู่ในหลอดทดลอง ถ้าคุณทำตก มันจะกินโลกใน 72 ชั่วโมง',
            zh: '🦠 灰蛊：你的纳米机器人正在消耗物质来复制。它们装在一个试管里。如果你把它弄丢了，它们会在72小时内吃掉地球。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔐 High Security: "Lock it in the vault. Never open it. Use it as a threat against aliens."',
                    th: '🔐 ความปลอดภัยสูง: "ขังไว้ในห้องนิรภัย อย่าเปิด ใช้เป็นคำขู่ต่อเอเลี่ยน"',
                    zh: '🔐 高度安全："把它锁在金库里。永远不要打开它。用它来威胁外星人。"'
                },
                consequence: {
                    en: '🕷️ Vault Lurker: It sits there. Waiting. A janitor almost drops it once. Stressful.',
                    th: '🕷️ ผู้ซุ่มในห้องนิรภัย: มันอยู่ที่นั่น รอคอย ภารโรงเกือบทำตกครั้งนึง เครียด',
                    zh: '🕷️ 金库潜伏者：它坐在那里。等待。看门人差点把它掉了一次。压力很大。'
                },
                stats: { competence: 50, ethics: 60, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '💻 Recode: "Remove the replication code. Make them just... clean stains?"',
                    th: '💻 รีโค้ด: "ลบโค้ดการจำลองตัว ทำให้มันแค่... ทำความสะอาดคราบ?"',
                    zh: '💻 重写代码："删除复制代​​码。让它们只是……清洁污渍？"'
                },
                consequence: {
                    en: '✨ Super Soap: Best cleaner ever. Safe. Boring. Made billions replacing bleach.',
                    th: '✨ ซูเปอร์สบู่: น้ำยาทำความสะอาดที่ดีที่สุด ปลอดภัย น่าเบื่อ ทำเงินพันล้านแทนน้ำยาฟอกขาว',
                    zh: '✨ 超级肥皂：有史以来最好的清洁剂。安全。无聊。赚了数十亿美元取代漂白剂。'
                },
                stats: { competence: 80, ethics: 80, leadership: 50, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Terraform Mars: "Send it to Mars. Let it eat the red rocks and poop out atmosphere."',
                    th: '🚀 ปรับสภาพดาวอังคาร: "ส่งไปดาวอังคาร ให้มันกินหินแดงแล้วอึออกมาเป็นชั้นบรรยากาศ"',
                    zh: '🚀 火星地球化："把它送到火星。让它吃掉红色的岩石，拉出大气层。"'
                },
                consequence: {
                    en: '🌍 New Earth: Mars becomes habitable in a week. But the bots cover the surface like silver slime.',
                    th: '🌍 โลกใหม่: ดาวอังคารอยู่อาศัยได้ในหนึ่งสัปดาห์ แต่บอทปกคลุมพื้นผิวเหมือนเมือกว่าเงิน',
                    zh: '🌍 新地球：火星在一周内变得适合居住。但机器人像银色的粘液一样覆盖着表面。'
                },
                stats: { competence: 90, ethics: 70, leadership: 60, innovation: 100 }
            },
            {
                id: 'D',
                text: {
                    en: '😋 Eat It: "Maybe it cures cancer? I\'ll be patient zero."',
                    th: '😋 กินมัน: "บางทีมันรักษามะเร็ง? ฉันจะเป็นผู้ป่วยคนแรก"',
                    zh: '😋 吃掉它："也许它能治愈癌症？我将成为零号病人。"'
                },
                consequence: {
                    en: '💀 Inside Out: You are eaten from the inside. The bots replicate into a statue of you. Artistic death.',
                    th: '💀 จากข้างใน: คุณถูกกินจากข้างใน บอทจำลองตัวเองเป็นรูปปั้นคุณ ความตายเชิงศิลปะ',
                    zh: '💀 由内而外：你被从里面吃掉了。机器人复制成你的雕像。艺术的死亡。'
                }
            }
        ]
    },
    {
        id: 'phys_043',
        text: {
            en: '🕸️ Spacetime Fabric: You find a loose thread in spacetime. If you pull it, you might unravel the universe, or just open a wormhole. It\'s tempting.',
            th: '🕸️ ผ้ากาลอวกาศ: คุณพบด้ายหลุดในกาลอวกาศ ถ้าคุณดึง มันอาจคลายจักรวาล หรือแค่เปิดรูหนอน มันน่าลอง',
            zh: '🕸️ 时空织物：你在时空中发现了一根松散的线。如果你拉它，你可能会解开宇宙，或者只是打开一个虫洞。这很诱人。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧶 Pull It: "Just a little tug. See what happens. Curiosity is my job."',
                    th: '🧶 ดึงมัน: "กระตุกนิดเดียว ดูว่าจะเกิดอะไรขึ้น ความอยากรู้คืองานของฉัน"',
                    zh: '🧶 拉它："只是拉一下。看看会发生什么。好奇心是我的工作。"'
                },
                consequence: {
                    en: '🕳️ Wormhole Highway: It opens a path to Andromeda! No unraveling. Lucky tug.',
                    th: '🕳️ ทางด่วนรูหนอน: มันเปิดทางไปแอนดรอมิดา! ไม่มีการคลาย กระตุกโชคดี',
                    zh: '🕳️ 虫洞高速公路：它开辟了一条通往仙女座的道路！没有解开。幸运的一拉。'
                },
                stats: { competence: 90, ethics: 20, leadership: 40, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '✂️ Cut It: "Snip the loose end. Tidy up the universe. Prevent accidents."',
                    th: '✂️ ตัดมัน: "เล็มปลายที่หลุด จัดระเบียบจักรวาล ป้องกันอุบัติเหตุ"',
                    zh: '✂️ 剪掉它："剪掉松散的一端。整理宇宙。防止事故。"'
                },
                consequence: {
                    en: '💥 Snap: Cutting it released tension. A small supernova occurs in the lab. Coffee mug broken.',
                    th: '💥 เปรี๊ยะ: การตัดปล่อยแรงตึง ซูเปอร์โนวาเล็กๆ เกิดในแล็บ ถ้วยกาแฟแตก',
                    zh: '💥 啪：剪断它释放了张力。实验室里发生了一次小规模的超新星爆发。咖啡杯碎了。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🧵 Sew It Back: "Darn the hole. Repair reality. Be the seamstress of physics."',
                    th: '🧵 เย็บกลับ: "ชุนรู ซ่อมแซมความจริง เป็นช่างเย็บผ้าแห่งฟิสิกส์"',
                    zh: '🧵 把它缝回去："修补这个洞。修复现实。做物理学的裁缝。"'
                },
                consequence: {
                    en: '🛡️ Stronger Reality: Local space is reinforced. Teleportation is impossible here, but it\'s safe.',
                    th: '🛡️ ความจริงที่แข็งแกร่งขึ้น: พื้นที่แถวนี้ถูกเสริมแรง การเทเลพอร์ตทำไม่ได้ที่นี่ แต่ปลอดภัย',
                    zh: '🛡️ 更强的现实：局部空间得到加固。在这里传送是不可能的，但它是安全的。'
                },
                stats: { competence: 70, ethics: 80, leadership: 50, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🧶 Knit: "Use the thread to knit a spacetime scarf. Invisibility cloak?"',
                    th: '🧶 ถัก: "ใช้ด้ายถักผ้าพันคอกาลอวกาศ ผ้าคลุมล่องหน?"',
                    zh: '🧶 编织："用这根线编织一条时空围巾。隐形斗篷？"'
                },
                consequence: {
                    en: '👻 Invisible You: It works. You are invisible when you wear it. Perfect for pranks.',
                    th: '👻 คุณล่องหน: มันได้ผล คุณล่องหนเมื่อใส่มัน เหมาะสำหรับการแกล้ง',
                    zh: '👻 隐形的你：行得通。当你戴上它时，你是隐形的。非常适合恶作剧。'
                }
            }
        ]
    },
    {
        id: 'phys_044',
        text: {
            en: '🦖 Dino DNA: You recover intact DNA from amber. You can clone a T-Rex. We have learned nothing from the movies.',
            th: '🦖 DNA ไดโนเสาร์: คุณกู้คืน DNA ที่สมบูรณ์จากอำพัน คุณโคลนทีเร็กซ์ได้ เราไม่ได้เรียนรู้อะไรจากหนังเลย',
            zh: '🦖 恐龙DNA：你从琥珀中恢复了完整的DNA。你可以克隆霸王龙。我们从电影中什么也没学到。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🦕 Park Life: "Spare no expense. Build the park. It will be safe this time."',
                    th: '🦕 ชีวิตในสวน: "ทุ่มไม่อั้น สร้างสวนสนุก ครั้งนี้มันจะปลอดภัย"',
                    zh: '🦕 公园生活："不惜一切代价。建造公园。这次会很安全。"'
                },
                consequence: {
                    en: '🏃 Run: It was not safe. You are running. But ticket sales were amazing for day 1.',
                    th: '🏃 วิ่ง: มันไม่ปลอดภัย คุณกำลังวิ่ง แต่ยอดขายตั๋ววันแรกยอดเยี่ยมมาก',
                    zh: '🏃 跑：这不安全。你在跑。但第一天的门票销售惊人。'
                },
                stats: { competence: 60, ethics: -20, leadership: 40, innovation: 80 }
            },
            {
                id: 'B',
                text: {
                    en: '🐔 Tiny Rex: "Edit the genes. Make them chicken-sized. Pet T-Rexes."',
                    th: '🐔 ทีเร็กซ์จิ๋ว: "ตัดต่อยีน ทำให้ขนาดเท่าไก่ สัตว์เลี้ยงทีเร็กซ์"',
                    zh: '🐔 小霸王龙："编辑基因。让它们像鸡一样大。宠物霸王龙。"'
                },
                consequence: {
                    en: '🐣 Cute & Dangerous: They are adorable but bite fingers off. A popular but hazardous pet.',
                    th: '🐣 น่ารักและอันตราย: พวกมันน่ารักแต่กัดนิ้วขาด สัตว์เลี้ยงยอดนิยมแต่อันตราย',
                    zh: '🐣 可爱又危险：它们很可爱，但会咬掉手指。一种流行但危险的宠物。'
                },
                stats: { competence: 80, ethics: 50, leadership: 60, innovation: 90 }
            },
            {
                id: 'C',
                text: {
                    en: '🍗 Eat It: "Forget the zoo. Clone the meat. Bronto-Burgers. Taste the prehistoric."',
                    th: '🍗 กินมัน: "ลืมสวนสัตว์ โคลนเนื้อ เบอร์เกอร์บรอนโต ลิ้มรสยุคก่อนประวัติศาสตร์"',
                    zh: '🍗 吃掉它："以此忘记动物园。克隆肉。雷龙汉堡。品尝史前味道。"'
                },
                consequence: {
                    en: '🍔 Paleo Diet: Huge hit. Delicious. High protein. No animals harmed (technically).',
                    th: '🍔 อาหารพาเลโอ: ฮิตระเบิด อร่อย โปรตีนสูง ไม่มีสัตว์ถูกทำร้าย (ในทางเทคนิค)',
                    zh: '🍔 原始饮食：大受欢迎。美味。高蛋白。没有动物受到伤害（严格来说）。'
                },
                stats: { competence: 70, ethics: 70, leadership: 50, innovation: 80 }
            },
            {
                id: 'D',
                text: {
                    en: '🚫 Burn It: "I saw the movie. Chaos theory. Flush the DNA."',
                    th: '🚫 เผามัน: "ฉันดูหนังแล้ว ทฤษฎีความโกลาหล เท DNA ทิ้ง"',
                    zh: '🚫 烧掉它："我看过这部电影。混沌理论。冲掉DNA。"'
                },
                consequence: {
                    en: '🕊️ Safety: The world remains boring and human-dominated. Goldblum nods approvingly.',
                    th: '🕊️ ความปลอดภัย: โลกยังคงน่าเบื่อและปกครองโดยมนุษย์ โกลด์บลัมพยักหน้าเห็นด้วย',
                    zh: '🕊️ 安全：世界仍然无聊且由人类主宰。高布伦赞许地点点头。'
                }
            }
        ]
    },
    {
        id: 'phys_045',
        text: {
            en: '😴 Sleep Ray: You invent a beam that makes people fall asleep instantly. Police want it for riot control. Criminals want it for banks.',
            th: '😴 รังสีหลับ: คุณประดิษฐ์ลำแสงที่ทำให้คนหลับทันที ตำรวจต้องการเพื่อคุมจลาจล อาชญากรต้องการเพื่อปล้นธนาคาร',
            zh: '😴 睡眠射线：你发明了一种能让人瞬间入睡的光束。警察想要它来控制暴乱。罪犯想要它来抢银行。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👮 Police Only: "Sell to law enforcement. Peaceful arrests. No more violence."',
                    th: '👮 ตำรวจเท่านั้น: "ขายให้ผู้บังคับใช้กฎหมาย การจับกุมที่สงบ ไม่มีความรุนแรงอีกต่อไป"',
                    zh: '👮 仅限警察："卖给执法部门。和平逮捕。不再有暴力。"'
                },
                consequence: {
                    en: '💤 Sleepy Crime: It gets stolen immediately. Now cops and robbers just nap each other. Crime is... gentle?',
                    th: '💤 อาชญากรรมง่วงนอน: มันถูกขโมยทันที ตอนนี้ตำรวจและโจรแค่ยิงให้หลับใส่กัน อาชญากรรมมัน... อ่อนโยน?',
                    zh: '💤 困倦的犯罪：它立即被盗。现在警察和强盗只是互相打瞌睡。犯罪是……温和的？'
                },
                stats: { competence: 70, ethics: 60, leadership: 40, innovation: 60 }
            },
            {
                id: 'B',
                text: {
                    en: '👶 Insomnia Cure: "Forget weapons. Sell it as a medical device for insomniacs. Low power mode."',
                    th: '👶 รักษานอนไม่หลับ: "ลืมอาวุธ ขายอุปกรณ์การแพทย์สำหรับคนนอนไม่หลับ โหมดพลังงานต่ำ"',
                    zh: '👶 失眠治疗："忘记武器。把它作为医疗设备卖给失眠症患者。低功耗模式。"'
                },
                consequence: {
                    en: '🛌 Rested World: Productivity soars. Everyone is well rested. You win the Nobel Peace Prize.',
                    th: '🛌 โลกที่พักผ่อนเพียงพอ: ผลิตภาพพุ่งปรี๊ด ทุกคนพักผ่อนเต็มที่ คุณได้รางวัลโนเบลสาขาสันติภาพ',
                    zh: '🛌 休息好的世界：生产力飙升。每个人都休息得很好。你获得了诺贝尔和平奖。'
                },
                stats: { competence: 80, ethics: 90, leadership: 50, innovation: 80 }
            },
            {
                id: 'C',
                text: {
                    en: '🏦 Black Market: "Highest bidder. No questions asked. Cash only."',
                    th: '🏦 ตลาดมืด: "ผู้ให้ราคาสูงสุด ไม่ถามคำถาม เงินสดเท่านั้น"',
                    zh: '🏦 黑市："出价最高者。不问问题。只收现金。"'
                },
                consequence: {
                    en: '💰 Chaos: Banks are empty. Presidents sleep during speeches. You are rich on a private island.',
                    th: '💰 ความโกลาหล: ธนาคารเกลี้ยง ประธานาธิบดีหลับระหว่างสุนทรพจน์ คุณรวยบนเกาะส่วนตัว',
                    zh: '💰 混乱：银行空了。总统在演讲时睡觉。你在私人岛屿上很富有。'
                },
                stats: { competence: 60, ethics: -60, leadership: -20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🕐 Time Skip: "Use it on myself during boring meetings. Personal use only."',
                    th: '🕐 ข้ามเวลา: "ใช้กับตัวเองตอนประชุมน่าเบื่อ ใช้ส่วนตัวเท่านั้น"',
                    zh: '🕐 跳过时间："在无聊的会议上用在自己身上。仅限个人使用。"'
                },
                consequence: {
                    en: '🤤 Drool: You sleep through a promotion. You are rested, but unemployed.',
                    th: '🤤 น้ำลายไหล: คุณหลับจนพลาดการเลื่อนตำแหน่ง พักผ่อนเต็มที่ แต่ตกงาน',
                    zh: '🤤 流口水：你在升职期间睡着了。你休息好了，但失业了。'
                }
            }
        ]
    },
    {
        id: 'phys_046',
        text: {
            en: '🌌 Big Crunch: You calculate the exact date the universe will collapse back into a singularity. It\'s next Tuesday. But you might have missed a decimal point.',
            th: '🌌 บิ๊กครันช์: คุณคำนวณวันที่แน่นอนที่จักรวาลจะยุบตัวกลับเป็นจุดเอกภาวะได้ มันคือวันอังคารหน้า แต่คุณอาจทำจุดทศนิยมตกหล่น',
            zh: '🌌 大挤压：你计算出了宇宙重新坍缩成奇点的确切日期。是下周二。但你可能漏掉了一个小数点。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Announce It: "The end is nigh! Prepare your souls. Spend your savings!"',
                    th: '📢 ประกาศออกไป: "จุดจบใกล้เข้ามาแล้ว! เตรียมจิตวิญญาณของคุณ ใช้เงินเก็บให้หมด!"',
                    zh: '📢 宣布："末日近了！准备好你们的灵魂。花光积蓄！"'
                },
                consequence: {
                    en: '📉 Economic Crash: The market crashes. People party. Tuesday comes... nothing happens. Oops.',
                    th: '📉 เศรษฐกิจพัง: ตลาดพัง ผู้คนปาร์ตี้ วันอังคารมาถึง... ไม่มีอะไรเกิดขึ้น อุ๊ปส์',
                    zh: '📉 经济崩溃：市场崩溃。人们聚会。周二来了……什么也没发生。哎呀。'
                },
                stats: { competence: 20, ethics: 30, leadership: -20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Keep Quiet: "Wait until Wednesday. If we are alive, I recount. If dead, it doesn\'t matter."',
                    th: '🤫 เงียบไว้: "รอจนถึงวันพุธ ถ้าเรายังอยู่ ฉันจะนับใหม่ ถ้าตาย ก็ไม่สำคัญ"',
                    zh: '🤫以此保持安静："等到星期三。如果我们还活着，我就重新计算。如果死了，也没关系。"'
                },
                consequence: {
                    en: '😅 Wednesday Morning: You wake up alive. You find the math error. Crisis averted. Nobody knows.',
                    th: '😅 เช้าวันพุธ: คุณตื่นมามีชีวิต คุณเจอข้อผิดพลาดทางคณิต วิกฤตผ่านพ้น ไม่มีใครรู้',
                    zh: '😅 周三早上：你醒着。你发现了数学错误。危机解除。没人知道。'
                },
                stats: { competence: 70, ethics: 60, leadership: 50, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🎉 End of World Party: "Throw a massive party at the lab. If we go, we go out dancing."',
                    th: '🎉 ปาร์ตี้วันสิ้นโลก: "จัดปาร์ตี้ใหญ่ที่แล็บ ถ้าเราจะไป เราจะไปพร้อมการเต้นรำ"',
                    zh: '🎉 世界末日派对："在实验室举办盛大的派对。如果我们走了，我们就跳舞出去。"'
                },
                consequence: {
                    en: '🥳 Best Hangover: The world doesn\'t end, but the hangover is legendary. Team morale is high.',
                    th: '🥳 อาการเมาค้างที่ดีที่สุด: โลกไม่แตก แต่อาการเมาค้างเป็นตำนาน ขวัญกำลังใจทีมสูง',
                    zh: '🥳 最好的宿醉：世界没有末日，但宿醉是传奇。团队士气高昂。'
                },
                stats: { competence: 50, ethics: 50, leadership: 70, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🛑 Try to Stop It: "Build a scaffold to hold the universe open. Physics tape!"',
                    th: '🛑 พยายามหยุดมัน: "สร้างนั่งร้านเพื่อค้ำจุนจักรวาล เทปกาวฟิสิกส์!"',
                    zh: '🛑 试图阻止它："搭建一个脚手架来支撑宇宙。物理胶带！"'
                },
                consequence: {
                    en: '🛠️ Valiant Effort: You waste billions on "Space Struts". They do nothing, but look cool.',
                    th: '🛠️ ความพยายามที่กล้าหาญ: คุณเสียเงินพันล้านไปกับ "ค้ำยันอวกาศ" มันไม่ช่วยอะไร แต่ดูเท่',
                    zh: '🛠️ 英勇的努力：你在"太空支柱"上浪费了数十亿美元。它们没用，但看起来很酷。'
                }
            }
        ]
    },
    {
        id: 'phys_047',
        text: {
            en: '📡 Alien Signal: You receive a signal from deep space. It translates to: "Be quiet, they will hear you." Do you reply?',
            th: '📡 สัญญาณเอเลี่ยน: คุณได้รับสัญญาณจากอวกาศลึก แปลได้ว่า: "เงียบไว้ เดี๋ยวพวกมันได้ยิน" คุณจะตอบกลับไหม?',
            zh: '📡 外星信号：你收到来自深空的信号。翻译为："安静，他们会听到的。"你回复吗？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Reply: "Who are \'they\'? We are friendly! Here is our location!"',
                    th: '📢 ตอบกลับ: "\'พวกมัน\' คือใคร? เราเป็นมิตร! นี่คือตำแหน่งของเรา!"',
                    zh: '📢 回复："\'他们\'是谁？我们很友好！这是我们的位置！"'
                },
                consequence: {
                    en: '😱 Silence: The other civilization goes dark immediately. You might have doomed us all.',
                    th: '😱 ความเงียบ: อารยธรรมอื่นดับไปทันที คุณอาจทำให้เราทุกคนพินาศ',
                    zh: '😱 沉默：另一个文明立即陷入黑暗。你可能注定了我们所有人的命运。'
                },
                stats: { competence: 40, ethics: -10, leadership: 20, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Shut It Down: "Turn off all radios. Go dark. Listen." The Dark Forest theory is real.',
                    th: '🤫 ปิดมัน: "ปิดวิทยุทั้งหมด ดับไฟ ฟัง" ทฤษฎีป่ามืดเป็นจริง',
                    zh: '🤫以此关闭它："关掉所有收音机。变暗。听着。"黑暗森林理论是真实的。'
                },
                consequence: {
                    en: '🌑 Global Silence: The world holds its breath. We survive, hiding in the dark cosmic forest.',
                    th: '🌑 ความเงียบระดับโลก: โลกกลั้นหายใจ เรารอดชีวิต ซ่อนตัวในป่าจักรวาลมืด',
                    zh: '🌑 全球沉默：世界屏住呼吸。我们幸存下来，躲在黑暗的宇宙森林里。'
                },
                stats: { competence: 90, ethics: 80, leadership: 70, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🗣️ Ask "Why?": "Send a directed low-power query. Why be quiet?"',
                    th: '🗣️ ถาม "ทำไม": "ส่งคำถามพลังงานต่ำแบบเจาะจง ทำไมต้องเงียบ?"',
                    zh: '🗣️ 问"为什么？"："发送定向低功耗查询。为什么要安静？"'
                },
                consequence: {
                    en: '📡 Warning: They reply with coordinate of a destroyed galaxy. "Predators." Point taken.',
                    th: '📡 คำเตือน: พวกเขาตอบกลับด้วยพิกัดของกาแล็กซีที่ถูกทำลาย "นักล่า" เข้าใจแล้ว',
                    zh: '📡 警告：他们回复了一个被摧毁星系的坐标。"捕食者。"明白了。'
                },
                stats: { competence: 80, ethics: 70, leadership: 60, innovation: 60 }
            },
            {
                id: 'D',
                text: {
                    en: '🎵 Rickroll: "Send \'Never Gonna Give You Up\'. Confuse the predators."',
                    th: '🎵 ริกโรล: "ส่ง \'Never Gonna Give You Up\' ทำให้พวกนักล่างง"',
                    zh: '🎵 瑞克摇："发送\'Never Gonna Give You Up\'。迷惑捕食者。"'
                },
                consequence: {
                    en: '🎶 Universal Confusion: The aliens love it. They think we are insane and avoid us. Safety through madness.',
                    th: '🎶 ความงงงวยสากล: เอเลี่ยนชอบมัน พวกเขาคิดว่าเราบ้าและหลีกเลี่ยงเรา ปลอดภัยด้วยความบ้า',
                    zh: '🎶 普遍困惑：外星人很喜欢。他们认为我们要么疯了，要么避开我们。通过疯狂获得安全。'
                }
            }
        ]
    },
    {
        id: 'phys_048',
        text: {
            en: '🌈 Color Out of Space: You discover a new color that doesn\'t exist on the visible spectrum. Staring at it drives people slightly mad but inspires genius.',
            th: '🌈 สีจากนอกอวกาศ: คุณค้นพบสีใหม่ที่ไม่มีในสเปกตรัมที่มองเห็นได้ การจ้องมองมันทำให้คนบ้าคลั่งเล็กน้อยแต่สร้างอัจฉริยะ',
            zh: '🌈 太空之色：你发现了一种可见光谱上不存在的新颜色。盯着它会让人们发疯，但会激发天才。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🖼️ Art Exhibit: "Show it to artists. Create a new renaissance. Manage the madness."',
                    th: '🖼️ นิทรรศการศิลปะ: "แสดงให้ศิลปินดู สร้างยุคฟื้นฟูศิลปวิทยาใหม่ จัดการความบ้า"',
                    zh: '🖼️ 艺术展："把它展示给艺术家。创造新的文艺复兴。管理疯狂。"'
                },
                consequence: {
                    en: '🎨 Mad Masterpieces: Art becomes incomprehensible but moving. Ear-cutting incidents increase by 200%.',
                    th: '🎨 ผลงานชิ้นเอกที่บ้าคลั่ง: ศิลปะเริ่มเข้าใจยากแต่ซึ้งกินใจ เหตุการณ์ตัดหูเพิ่มขึ้น 200%',
                    zh: '🎨 疯狂的杰作：艺术变得难以理解但动人。切耳事件增加200%。'
                },
                stats: { competence: 60, ethics: 40, leadership: 50, innovation: 90 }
            },
            {
                id: 'B',
                text: {
                    en: '🕶️ Sunglasses: "Make glasses that filter it out. Sell the cure before the color."',
                    th: '🕶️ แว่นกันแดด: "ทำแว่นที่กรองมันออก ขายยารักษาก่อนขายสี"',
                    zh: '🕶️ 太阳镜："制造过滤它的眼镜。在卖颜色之前先卖解药。"'
                },
                consequence: {
                    en: '💰 Profitable Protection: You release the color, everyone is sick, you sell the glasses. Evil capitalism.',
                    th: '💰 การป้องกันที่ทำกำไร: คุณปล่อยสี ทุกคนป่วย คุณขายแว่น ทุนนิยมชั่วร้าย',
                    zh: '💰 有利可图的保护：你释放颜色，每个人都病了，你卖眼镜。邪恶的资本主义。'
                },
                stats: { competence: 70, ethics: -50, leadership: 30, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '📵 Ban It: "This is a cognitohazard. erased data. Bleach your eyes."',
                    th: '📵 แบนมัน: "นี่คืออันตรายต่อการรับรู้ ลบข้อมูล ฟอกตาของคุณ"',
                    zh: '📵 禁止它："这是认知危害。擦除数据。漂白你的眼睛。"'
                },
                consequence: {
                    en: '🛡️ Safety: The world remains safe and beige. You dream in the new color though.',
                    th: '🛡️ ความปลอดภัย: โลกยังคงปลอดภัยและสีเบจ แต่คุณฝันเป็นสีใหม่',
                    zh: '🛡️ 安全：世界依然安全，米色。但你会在梦中看到新的颜色。'
                },
                stats: { competence: 50, ethics: 80, leadership: 60, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🏳️ Paint the Lab: "Paint the office walls. Boost productivity!"',
                    th: '🏳️ ทาสีแล็บ: "ทาสีผนังออฟฟิศ เพิ่มผลผลิต!"',
                    zh: '🏳️ 油漆实验室："粉刷办公室墙壁。提高生产力！"'
                },
                consequence: {
                    en: '🤪 Genius Maniacs: Your team solves gravity in an hour, but they are all wearing pants on their heads.',
                    th: '🤪 อัจฉริยะบ้าคลั่ง: ทีมของคุณแก้ปัญหาวงโน้มถ่วงได้ในชั่วโมงเดียว แต่ทุกคนใส่กางเกงบนหัว',
                    zh: '🤪 天才疯子：你的团队在一个小时内解决了重力问题，但他们都把裤子戴在头上。'
                }
            }
        ]
    },
    {
        id: 'phys_049',
        text: {
            en: '💾 Simulated Universe: You find code in the cosmic microwave background. It says "Version 0.9 Beta". We are a simulation. And we are buggy.',
            th: '💾 จักรวาลจำลอง: คุณพบโค้ดในรังสีไมโครเวฟพื้นหลังจักรวาล มันบอกว่า "เวอร์ชัน 0.9 เบต้า" เราเป็นแบบจำลอง และเรามีบั๊ก',
            zh: '💾 模拟宇宙：你在宇宙微波背景中发现了代码。上面写着"0.9 Beta版"。我们是一个模拟。我们有bug。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🐛 Exploit Bugs: "Find the cheat codes. Infinite money glitch? Wall clipping?"',
                    th: '🐛 ใช้ประโยชน์จากบั๊ก: "หาโค้ดโกง บั๊กเงินอนันต์? เดินทะลุกำแพง?"',
                    zh: '🐛 利用Bug："找到作弊码。无限金钱glitch？穿墙？"'
                },
                consequence: {
                    en: '🧙‍♂️ Wizard Physics: You can fly and spawn gold. The Admins might ban you.',
                    th: '🧙‍♂️ พ่อมดฟิสิกส์: คุณบินได้และเสกทอง แอดมินอาจแบนคุณ',
                    zh: '🧙‍♂️ 巫师物理学：你可以飞行并产生黄金。管理员可能会封禁你。'
                },
                stats: { competence: 90, ethics: 40, leadership: 50, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '📧 Submit Ticket: "Contact the creators. Report the bugs. Maybe they patch cancer."',
                    th: '📧 ส่งตั๋ว: "ติดต่อผู้สร้าง รายงานบั๊ก บางทีพวกเขาอาจแพทช์มะเร็ง"',
                    zh: '📧 提交工单："联系创作者。报告bug。也许他们会修补癌症。"'
                },
                consequence: {
                    en: '🔧 Patch 1.0: The universe reboots. Cancer is gone, but so are mosquitoes. Good update.',
                    th: '🔧 แพทช์ 1.0: จักรวาลรีบูต มะเร็งหายไป ยุงก็เช่นกัน อัปเดตที่ดี',
                    zh: '🔧 补丁1.0：宇宙重新启动。癌症消失了，蚊子也消失了。不错的更新。'
                },
                stats: { competence: 80, ethics: 90, leadership: 60, innovation: 80 }
            },
            {
                id: 'C',
                text: {
                    en: '💻 Hack Source: "Try to seize control. Become the Admin."',
                    th: '💻 แฮ็กต้นฉบับ: "พยายามยึดครอง เป็นแอดมิน"',
                    zh: '💻 黑客源："试图夺取控制权。成为管理员。"'
                },
                consequence: {
                    en: '🛑 Blue Screen: You crash the universe. Everyone freezes for eternity. Nice job.',
                    th: '🛑 จอฟ้า: คุณทำจักรวาลล่ม ทุกคนแข็งค้างตลอดกาล เยี่ยมมาก',
                    zh: '🛑 蓝屏：你让宇宙崩溃了。每个人都被冻结到永远。干得好。'
                },
                stats: { competence: 70, ethics: -20, leadership: -50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📵 Ignore It: "This is too meta. I\'m just a physicist, not IT support."',
                    th: '📵 เมินมัน: "นี่มันเมตาเกินไป ฉันเป็นแค่นักฟิสิกส์ ไม่ใช่ฝ่ายวิชาการคอม"',
                    zh: '📵 忽略它："这太元了。我只是个物理学家，不是IT支持。"'
                },
                consequence: {
                    en: '🤷 Happiness: You live your buggy life. Sometimes your keys clip through the table. You accept it.',
                    th: '🤷 ความสุข: คุณใช้ชีวิตที่มีบั๊ก บางทีกุญแจก็ทะลุโต๊ะ คุณยอมรับมัน',
                    zh: '🤷 幸福：你过着充满bug的生活。有时你的钥匙会夹在桌子上。你接受它。'
                }
            }
        ]
    },
    {
        id: 'phys_050',
        text: {
            en: '🎓 Theory of Everything: You finally did it. You united quantum mechanics and gravity. The equation is elegant, simple, and fits on a T-shirt. It answers every question.',
            th: '🎓 ทฤษฎีสรรพสิ่ง: ในที่สุดคุณก็ทำได้ คุณรวมควอนตัมกับแรงโน้มถ่วง สมการสวยงาม เรียบง่าย และใส่บนเสื้อยืดได้ มันตอบทุกคำถาม',
            zh: '🎓 万物理论：你终于做到了。你统一了量子力学和引力。这个等式优雅、简单，印在T恤上很合适。它回答了每一个问题。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Publish Free: "Knowledge belongs to humanity. Open source the universe."',
                    th: '📢 เผยแพร่ฟรี: "ความรู้เป็นของมนุษยชาติ โอเพ่นซอร์สจักรวาล"',
                    zh: '📢 免费发布："知识属于人类。开源宇宙。"'
                },
                consequence: {
                    en: '🕊️ Enlightenment: Humanity jumps 1000 years in tech inside a decade. You are the greatest human ever.',
                    th: '🕊️ การตริสรู้: มนุษยชาติกระโดดข้ามเทคโนโลยี 1000 ปีในทศวรรษเดียว คุณคือมนุษย์ที่ยิ่งใหญ่ที่สุด',
                    zh: '🕊️ 启蒙：人类技术在十年内飞跃了 1000 年。你是人类历史上最伟大的人。'
                },
                stats: { competence: 100, ethics: 100, leadership: 100, innovation: 100 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Patent It: "I own physics now. Pay me royalties to exist."',
                    th: '💰 จดสิทธิบัตร: "ฉันเป็นเจ้าของฟิสิกส์แล้ว จ่ายค่าลิขสิทธิ์เพื่อมีชีวิตอยู่"',
                    zh: '💰 为其申请专利："我现在通过拥有物理学。付给我存在的版税。"'
                },
                consequence: {
                    en: '👑 Physics King: You are the richest entity in history. People hate you, but they have to pay gravity tax.',
                    th: '👑 ราชาฟิสิกส์: คุณเป็นสิ่งมีชีวิตที่รวยที่สุดในประวัติศาสตร์ คนเกลียดคุณ แต่ต้องจ่ายภาษีแรงโน้มถ่วง',
                    zh: '👑 物理之王：你是历史上最富有的实体。人们讨厌你，但他们不得不缴纳重力税。'
                },
                stats: { competence: 100, ethics: -50, leadership: 50, innovation: 100 }
            },
            {
                id: 'C',
                text: {
                    en: '🔥 Burn It: "We are not ready. This power would destroy us."',
                    th: '🔥 เผามัน: "เรายังไม่พร้อม พลังนี้จะทำลายเรา"',
                    zh: '🔥 烧掉它："我们还没准备好。这种力量会毁灭我们。"'
                },
                consequence: {
                    en: '🛡️ Guardian: You die with the secret. The world continues its slow stumble. A noble sacrifice.',
                    th: '🛡️ ผู้พิทักษ์: คุณตายไปพร้อมความลับ โลกเดินโซเซช้าๆ ต่อไป การเสียสละที่สูงส่ง',
                    zh: '🛡️ 守护者：你带着秘密死去了。世界继续缓慢跌跌撞撞。高尚的牺牲。'
                },
                stats: { competence: 100, ethics: 90, leadership: 80, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '👕 Sell T-Shirts: "Just sell the T-shirts. Don\'t explain the math. Merch!"',
                    th: '👕 ขายเสื้อยืด: "แค่ขายเสื้อยืด ไม่อธิบายเลข สินค้าที่ระลึก!"',
                    zh: '👕 卖T恤："只卖T恤。不要解释数学。周边商品！"'
                },
                consequence: {
                    en: '👕 Fashion Trend: Everyone wears the equation. Nobody understands it. You make a decent profit.',
                    th: '👕 เทรนด์แฟชั่น: ทุกคนใส่สมการ ไม่มีใครเข้าใจ คุณได้กำไรพอสมควร',
                    zh: '👕 时尚潮流：每个人都穿这个等式。没人懂。你赚了一笔可观的利润。'
                }
            }
        ]
    }
];
