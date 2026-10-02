export const pilotQuestions = [
    {
        id: 'pilot_001',
        text: {
            en: '✈️ The Fuel Gamble: You are captaining a flight from London to New York. Heavy headwinds have burned more fuel than expected. You are 45 minutes from JFK, and your fuel reserves are dipping into the "mandatory diversion" range. However, proceeding to JFK is possible if the winds die down as forecast. Diverting means stranding 300 passengers in Boston overnight.',
            th: '✈️ การเดิมพันด้วยเชื้อเพลิง: คุณเป็นกัปตันเที่ยวบินจากลอนดอนไปนิวยอร์ก ลมต้านแรงทำให้เผาผลาญเชื้อเพลิงมากกว่าที่คาดไว้ คุณอยู่ห่างจาก JFK 45 นาที และเชื้อเพลิงสำรองของคุณกำลังลดลงสู่ระดับ "บังคับเปลี่ยนเส้นทาง" อย่างไรก็ตาม การไปต่อที่ JFK เป็นไปได้ถ้าลมสงบลงตามพยากรณ์ การเปลี่ยนเส้นทางหมายถึงการทิ้งผู้โดยสาร 300 คนไว้ที่บอสตันข้ามคืน',
            zh: '✈️ 燃料赌博：你正作为机长执飞从伦敦到纽约的航班。强逆风消耗了比预期更多的燃料。你离肯尼迪机场还有 45 分钟，你的燃料储备正在下降到"强制备降"范围。然而，如果风力如预报那样减弱，前往肯尼迪机场是可能的。备降意味着让 300 名乘客在波士顿滞留过夜。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Divert Instantly: "Boston Center, Mayday Fuel. We are diverting to Logan immediately." Prioritize absolute safety over passenger comfort and airline costs.',
                    th: '🚨 เปลี่ยนเส้นทางทันที: "ศูนย์บอสตัน, Mayday Fuel เราจะเปลี่ยนเส้นทางไปโลแกนทันที" ให้ความสำคัญกับความปลอดภัยสูงสุดเหนือความสะดวกสบายของผู้โดยสารและค่าใช้จ่ายของสายการบิน',
                    zh: '🚨 立即备降："波士顿中心，燃油求救。我们要立即备降洛根机场。"将绝对安全置于乘客舒适度和航空公司成本之上。'
                },
                consequence: {
                    en: '🛡️ Safety First! You land in Boston with safe margins. Passengers are annoyed, and the airline loses $50k in hotels. But the FAA reviews your decision and praises your strict adherence to protocol. License safe.',
                    th: '🛡️ ปลอดภัยไว้ก่อน! คุณลงจอดที่บอสตันด้วยระยะปลอดภัย ผู้โดยสารหงุดหงิด และสายการบินเสียค่าโรงแรม 50,000 ดอลลาร์ แต่ FAA ตรวจสอบการตัดสินใจของคุณและชื่นชมการปฏิบัติตามระเบียบอย่างเคร่งครัด ใบอนุญาตปลอดภัย',
                    zh: '🛡️ 安全第一！你在波士顿安全降落。乘客很恼火，航空公司损失了 5 万美元的酒店费。但联邦航空局审查了你的决定，并赞扬你严格遵守协议。执照安全。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🎲 Press On: "We check the winds every 5 minutes. If it gets worse, we divert. If it holds, we make it." You trust your skill and the forecast to save the day.',
                    th: '🎲 ลุยต่อ: "เราเช็คลมทุก 5 นาที ถ้ามันแย่ลง เราเปลี่ยนเส้นทาง ถ้ามันคงที่ เราไปถึงแน่" คุณเชื่อมั่นในทักษะของคุณและพยากรณ์อากาศเพื่อกู้สถานการณ์',
                    zh: '🎲 继续前进："我们每 5 分钟检查一次风向。如果变糟，我们就备降。如果保持不变，我们就能赶到。"你相信你的技术和预报能挽救局面。'
                },
                consequence: {
                    en: '😅 Narrow Escape! You land at JFK with engines fuming on vapors—below legal minimums. You save the schedule, but a whistleblower reports the low fuel state. You are suspended pending investigation.',
                    th: '😅 รอดมาได้หวุดหวิด! คุณลงจอดที่ JFK ด้วยเชื้อเพลิงก้นถัง—ต่ำกว่าเกณฑ์ขั้นต่ำทางกฎหมาย คุณรักษารางไว้ได้ แต่มีคนเป่านกหวีดรายงานสถานะเชื้อเพลิงต่ำ คุณถูกพักงานระหว่างการสอบสวน',
                    zh: '😅 险象环生！你在肯尼迪机场降落，引擎几乎是在靠油气运转——低于法定最低标准。你保住了时刻表，但有人举报了低油量状态。你在调查期间被停职。'
                },
                stats: { competence: 40, ethics: -20, leadership: 20, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤥 Declare "Priority": "Tower, we have a medical emergency on board. Request priority landing." Lie to get a direct path to cut flight time and save fuel.',
                    th: '🤥 ประกาศ "สิทธิพิเศษ": "หอบังคับการ เรามีเหตุฉุกเฉินทางการแพทย์บนเครื่อง ขอลงจอดเป็นกรณีพิเศษ" โกหกเพื่อขอเส้นทางตรงเพื่อลดเวลาบินและประหยัดเชื้อเพลิง',
                    zh: '🤥 宣布"优先"："塔台，我们机上有医疗紧急情况。请求优先着陆。"撒谎以获得直飞路径，缩短飞行时间并节省燃料。'
                },
                consequence: {
                    en: '🚫 Career Suicide! You land safely with fuel to spare. But upon arrival, paramedics find no sick passenger. The deception is uncovered. You are fired and stripped of your license permanently.',
                    th: '🚫 ฆ่าตัวตายทางอาชีพ! คุณลงจอดอย่างปลอดภัยโดยมีเชื้อเพลิงเหลือ แต่เมื่อมาถึง ทีมแพทย์ไม่พบผู้โดยสารป่วย การหลอกลวงถูกเปิดเผย คุณถูกไล่ออกและยึดใบอนุญาตถาวร',
                    zh: '🚫 职业自杀！你安全降落，燃料还有富余。但到达后，医护人员发现没有生病的乘客。欺骗行为败露。你被解雇并被永久吊销执照。'
                },
                stats: { competence: 20, ethics: -50, leadership: -40, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🗳️ Ask the Co-Pilot: "What do you think? I\'m 50/50. You make the call." absolve yourself of the responsibility.',
                    th: '🗳️ ถามนักบินผู้ช่วย: "คุณคิดว่าไง? ผม 50/50 คุณตัดสินใจเลย" ปัดความรับผิดชอบออกจากตัว',
                    zh: '🗳️ 询问副驾驶："你怎么看？我拿不准。你来决定。"免除自己的责任。'
                },
                consequence: {
                    en: '📉 weak Command! The co-pilot panics and chooses poorly. You land late at a random airport. The crew loses all faith in your ability to command. The "Captain" title becomes a joke.',
                    th: '📉 คำสั่งอ่อนแอ! นักบินผู้ช่วยตื่นตระหนกและเลือกได้แย่ คุณลงจอดช้าที่สนามบินสุ่มสักแห่ง ลูกเรือหมดศรัทธาในความสามารถในการสั่งการของคุณ ตำแหน่ง "กัปตัน" กลายเป็นเรื่องตลก',
                    zh: '📉 指挥软弱！副驾驶惊慌失措，做出了糟糕的选择。你在一个随机机场迟到了。机组人员对你的指挥能力完全失去信心。"机长"头衔成了笑话。'
                },
                stats: { competence: -10, ethics: 10, leadership: -50, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_002',
        text: {
            en: '🍸 The Tipsy First Officer: You meet your Co-Pilot at the hotel bar the night before a 6 AM flight. It\'s 10 PM. He orders a double whiskey. "Relax Cap, I stop 8 hours before throttle up, like the rule says." But he looks exhausted and smells like he\'s been drinking all afternoon.',
            th: '🍸 นักบินผู้ช่วยขี้เมา: คุณเจอนักบินผู้ช่วยของคุณที่บาร์โรงแรมคืนก่อนบินตอน 6 โมงเช้า ตอนนี้ 4 ทุ่ม เขาเพิ่งสั่งวิสกี้ดับเบิ้ล "สบายๆ น่ากัปตัน ผมหยุด 8 ชั่วโมงก่อนบินตามกฎเป๊ะ" แต่เขาดูหมดสภาพและกลิ่นเหมือนดื่มมาทั้งบ่าย',
            zh: '🍸 微醺的大副：你在早上 6 点飞行前的晚上 10 点在酒店酒吧遇到了你的副驾驶。他点了一杯双份威士忌。"放松点机长，我会在起飞前 8 小时停发，就像规定说的那样。"但他看起来筋疲力尽，闻起来像喝了一整个下午。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Ground Him: "You\'re done. Go to your room. I\'m calling scheduling to get a replacement. I won\'t fly with you in this state."',
                    th: '🛑 สั่งพักบิน: "คุณจบแล้ว ไปที่ห้องของคุณ ผมจะโทรหาฝ่ายจัดตารางบินเพื่อขอคนแทน ผมจะไม่บินกับคุณในสภาพนี้"',
                    zh: '🛑 让他停飞："你完了。回房间去。我会打电话给调度安排替补。我不会在这种状态下和你一起飞的。"'
                },
                consequence: {
                    en: '✅ Crisis Averted! The flight is delayed 2 hours waiting for a reserve pilot. The First Officer is sent to rehab. You saved the passengers from a potential disaster and maintained professional standards.',
                    th: '✅ วิกฤตผ่านพ้น! เที่ยวบินล่าช้า 2 ชั่วโมงเพื่อรอนักบินสำรอง นักบินผู้ช่วยถูกส่งไปบำบัด คุณช่วยผู้โดยสารจากหายนะที่อาจเกิดขึ้นและรักษามาตรฐานวิชาชีพ',
                    zh: '✅ 危机解除！航班因等待后备飞行员延误了 2 小时。大副被送去康复中心。你把乘客从潜在的灾难中拯救出来，并保持了职业标准。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '👀 Watch Him Closely: "Drink that water and go to sleep NOW. I\'ll breathalyze you myself in the morning. One ppm over, and you\'re reported."',
                    th: '👀 จับตาดูใกล้ชิด: "ดื่มน้ำนั่นแล้วไปนอนเดี๋ยวนี้ ผมจะตรวจวัดแอลกอฮอล์คุณเองตอนเช้า ถ้าเกินแม้แต่นิดเดียว ผมรายงานแน่"',
                    zh: '👀以此盯着他："喝了那杯水，马上睡觉。早上我会亲自给你测酒精。超标一点点，我就举报你。"'
                },
                consequence: {
                    en: '⚠️ High Stress! The flight happens. He is sober but hungover and slow. You have to do 90% of the work. You land safely, but you spent the whole flight terrified of a mistake.',
                    th: '⚠️ ความเครียดสูง! เที่ยวบินดำเนินไป เขาหายเมาแต่เมาค้างและช้า คุณต้องทำงาน 90% เอง คุณลงจอดปลอดภัย แต่คุณใช้เวลาทั้งเที่ยวบินหวาดกลัวว่าจะเกิดข้อผิดพลาด',
                    zh: '⚠️ 高度紧张！航班照常进行。他清醒了但宿醉且反应迟钝。你得干 90% 的活。虽然安全降落，但你整个飞行过程都在担心出得错误。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🍻 Join Him: "You know what? It\'s been a long month. Barkeep, give me a beer. We\'ll handle it tomorrow." Bond with your crewmate.',
                    th: '🍻 ร่วมวงด้วย: "รู้อะไรมั้ย? เดือนนี้มันยาวนาน บาร์เทนเดอร์ ขอเบียร์ให้ผมหน่อย พรุ่งนี้ค่อยว่ากัน" สร้างความสัมพันธ์กับลูกเรือ',
                    zh: '🍻 加入他："你知道吗？这个月太漫长了。酒保，给我来杯啤酒。我们明天再搞定它。"与你的机组人员搞好关系。'
                },
                consequence: {
                    en: '☠️ Grave Error! Both of you are impaired in the morning. You miss a critical checklist item. The plane takes off with incorrect flap settings. Stall warning sounds immediately...',
                    th: '☠️ ความผิดพลาดร้ายแรง! ทั้งคู่สภาพไม่ไหวตอนเช้า คุณพลาดรายการตรวจสอบสำคัญ เครื่องบินขึ้นบินด้วยการตั้งค่าแฟลปที่ไม่ถูกต้อง เสียงเตือนการร่วงหล่นดังขึ้นทันที...',
                    zh: '☠️ 严重错误！早上你们俩都受损了。你们漏掉了一个关键的检查项目。飞机带着错误的襟翼通过起飞。失速警报立即响起……'
                },
                stats: { competence: -50, ethics: -50, leadership: -40, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤐 Ignore It: Walk away without saying anything. Assume he knows his limits. Not your business to babysit grown men.',
                    th: '🤐 ทำเป็นไม่เห็น: เดินหนีโดยไม่พูดอะไร ถือว่าเขารู้ขีดจำกัดของตัวเอง ไม่ใช่ธุระของคุณที่ต้องมาเลี้ยงดูผู้ชายตัวโตๆ',
                    zh: '🤐 无视它：什么也不说就走开。假设他知道自己的底线。照看成年男人不是你的工作。'
                },
                consequence: {
                    en: '🤨 Silent Complicity! He flies, but makes several errors you have to correct silently. The cabin crew notices his smell and files an anonymous report. You are implicated for not reporting him.',
                    th: '🤨 การสมรู้ร่วมคิดแบบเงียบๆ! เขาบินได้ แต่ทำผิดพลาดหลายครั้งที่คุณต้องแก้ไขเงียบๆ ลูกเรือในห้องโดยสารได้กลิ่นเขาและรายงานแบบไม่ระบุชื่อ คุณถูกพาดพิงว่าไม่รายงานเขา',
                    zh: '🤨 沉默的共犯！他飞了，但犯了几个你不得不默默纠正的错误。机舱乘务员注意到了他的气味并提交了匿名报告。你因未举报他而受到牵连。'
                },
                stats: { competence: 0, ethics: -30, leadership: -20, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_003',
        text: {
            en: '🩺 The Sick Captain: You are the First Officer. The Captain looks pale and is sweating. He insists he\'s "fine," but then he slurs his speech during the welcome announcement. You are about to take off on a 10-hour flight.',
            th: '🩺 กัปตันป่วย: คุณเป็นผู้ช่วยนักบิน กัปตันหน้าซีดและเหงื่อแตก เขายืนยันว่า "สบายดี" แต่แล้วเขาก็พูดอ้อแอ้ระหว่างประกาศต้อนรับ คุณกำลังจะบินไฟล์ท 10 ชั่วโมง',
            zh: '🩺 生病的机长：你是副驾驶。机长看起来脸色苍白，浑身是汗。他坚持说他"没事"，但在欢迎广播时口齿不清。你们即将开始 10 小时的飞行。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Abort Takeoff: "Captain, you are incapacitated. I am taking command. Return to gate. Medical team needed."',
                    th: '🛑 ยกเลิกการขึ้นบิน: "กัปตัน คุณไม่พร้อมปฏิบัติหน้าที่ ผมขอรับมอบอำนาจ กลับไปที่หลุมจอด ต้องการทีมแพทย์"',
                    zh: '🛑 中止起飞："机长，你已丧失行动能力。我接管指挥权。返回登机口。需要医疗队。"'
                },
                consequence: {
                    en: '🛡️ Safety First: He was having a stroke. You saved his life and the flight. The airline commends your decisiveness.',
                    th: '🛡️ ปลอดภัยไว้ก่อน: เขาเป็นโรคหลอดเลือดสมอง คุณช่วยชีวิตเขาและเที่ยวบิน สายการบินชมเชยความเด็ดขาดของคุณ',
                    zh: '🛡️ 安全第一：他中风了。你救了他的命，也救了这次航班。航空公司称赞你的果断。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Let Him Fly: "He\'s the veteran. Maybe just a cold. I\'ll watch him closely and take over if he passes out."',
                    th: '🤐 ปล่อยเขาบิน: "เขาเป็นมือเก๋า อาจจะแค่เป็นหวัด ผมจะจับตาดูเขาใกล้ๆ และรับช่วงต่อถ้าเขาหมดสติ"',
                    zh: '🤐 让他飞："他是老手了。可能只是感冒。我会密切注视他，如果他晕倒我就接手。"'
                },
                consequence: {
                    en: '💥 Mid-Air Crisis: He collapses over the Atlantic. You have to fly solo for 5 hours while flight attendants try CPR. Trauma ensues.',
                    th: '💥 วิกฤตกลางเวหา: เขาหมดสติเหนือมหาสมุทรแอตแลนติก คุณต้องบินเดี่ยว 5 ชม. ขณะที่แอร์โฮสเตสพยายามปั๊มหัวใจ เกิดบาดแผลทางใจ',
                    zh: '💥 空中危机：他在大西洋上空倒下了。你不得不独自飞行 5 小时，而空乘人员在尝试心肺复苏。随之而来的创伤。'
                },
                stats: { competence: 20, ethics: -30, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '💊 Offer Medicine: "Here, take some aspirin and coffee. Shake it off, Cap. We have a schedule to keep."',
                    th: '💊 ให้ยา: "นี่ครับ กินแอสไพรินกับกาแฟหน่อย สลัดมันทิ้งไปครับกัปตัน เราต้องรักษาเวลา"',
                    zh: '💊 提供药物："给，吃点阿司匹林，喝点咖啡。振作点，机长。我们得赶时间。"'
                },
                consequence: {
                    en: '💀 Fatal Error: It was a heart attack. The aspirin helps slightly, but he dies in the cockpit. You land with a corpse next to you.',
                    th: '💀 ความผิดพลาดร้ายแรง: มันคือหัวใจวาย แอสไพรินช่วยนิดหน่อย แต่เขาตายในห้องนักบิน คุณลงจอดโดยมีศพอยู่ข้างๆ',
                    zh: '💀 致命错误：那是心脏病发作。阿司匹林有一点点帮助，但他死在了驾驶舱里。你降落时身边有一具尸体。'
                },
                stats: { competence: 10, ethics: -40, leadership: -30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Secret Dispatch Call: "Call Dispatch on headset privately. \'Captain looks sick. Requesting standby crew just in case.\' Delay boarding."',
                    th: '📞 แอบโทรหาศูนย์: "โทรหาศูนย์ควบคุมผ่านหูฟังส่วนตัว \'กัปตันดูป่วยครับ ขอลูกเรือสแตนด์บายเผื่อไว้\' ชะลอการขึ้นเครื่อง"',
                    zh: '📞 秘密调度电话："私下用耳机呼叫调度。‘机长看起来病了。请求备用机组人员以防万一。’推迟登机。"'
                },
                consequence: {
                    en: '🧠 Smart Move: A replacement captain arrives in 30 mins. The original captain is hospitalized. You avoided drama.',
                    th: '🧠 ตาเดินฉลาด: กัปตันคนใหม่มาถึงใน 30 นาที กัปตันคนเดิมถูกส่งโรงพยาบาล คุณเลี่ยงดราม่าได้',
                    zh: '🧠 明智之举：替补机长 30 分钟后到达。原来的机长住院了。你避免了戏剧性事件。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'pilot_004',
        text: {
            en: '🌋 The Volcanic Ash: You are flying near a volcano that just erupted. Radar shows clear air ahead, but satellite reports suggest a thin ash cloud might be in your path. Ash destroys engines. Going around adds 2 hours and you might need to refuel.',
            th: '🌋 เถ้าภูเขาไฟ: คุณกำลังบินใกล้ภูเขาไฟที่เพิ่งระเบิด เรดาร์โชว์ว่าอากาศแจ่มใส แต่ดาวเทียมรายงานว่าอาจมีเมฆเถ้าจางๆ ในเส้นทาง เถ้าทำลายเครื่องยนต์ การบินอ้อมใช้เวลาเพิ่ม 2 ชั่วโมงและอาจต้องเติมน้ำมัน',
            zh: '🌋 火山灰：你正飞行在一座刚刚喷发的火山附近。雷达显示前方空气晴朗，但卫星报告表明你的航线上可能有稀薄的火山灰云。火山灰会摧毁引擎。绕行会增加 2 小时，并且你可能需要加油。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔄 Divert Immediately: "Not risking it. Ash is invisible to weather radar. Rerouting to alternate airport for fuel."',
                    th: '🔄 เปลี่ยนเส้นทางทันที: "ไม่เสี่ยง เถ้ามองไม่เห็นด้วยเรดาร์อากาศ เปลี่ยนเส้นทางไปสนามบินสำรองเพื่อเติมน้ำมัน"',
                    zh: '🔄 立即备降："不冒这个险。气象雷达看不见火山灰。改道备降机场加油。"'
                },
                consequence: {
                    en: '📉 Expensive Safety: Passengers are furious about the delay. The airline loses money. But another plane that flew through lost 2 engines.',
                    th: '📉 ความปลอดภัยราคาแพง: ผู้โดยสารโกรธที่ล่าช้า สายการบินเสียเงิน แต่เครื่องบินอีกลำที่บินผ่านไปเสียเครื่องยนต์ 2 เครื่อง',
                    zh: '📉 昂贵的安全：乘客对延误感到愤怒。航空公司亏了钱。但这另一架飞过去的飞机损失了 2 个引擎。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛫 Fly Through: "Radar is clear. It\'s probably fine. Full throttle to get through quickly."',
                    th: '🛫 บินฝ่าไป: "เรดาร์เคลียร์ น่าจะโอเค เร่งเครื่องเต็มที่เพื่อผ่านไปให้เร็ว"',
                    zh: '🛫 飞过去："雷达是清晰的。大概没事。全速通过。"'
                },
                consequence: {
                    en: '🔥 Engine Flameout: All 4 engines fail due to ash glassification. You glide to a miracle water landing. You are a hero, but barely.',
                    th: '🔥 เครื่องยนต์ดับ: เครื่องยนต์ทั้ง 4 ดับเพราะเถ้าหลอมละลาย คุณร่อนลงจอดทางน้ำอย่างปาฏิหาริย์ คุณเป็นฮีโร่ แต่ก็เกือบไป',
                    zh: '🔥 引擎熄火：所有 4 个引擎因火山玻璃化而故障。你奇迹般地滑翔水上迫降。你是个英雄，但很险。'
                },
                stats: { competence: 30, ethics: -20, leadership: -10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🆙 Climb Higher: "Climb to 45,000 feet. Try to fly OVER the plume. Push the aircraft to its max ceiling."',
                    th: '🆙 บินสูงขึ้น: "ไต่ระดับไปที่ 45,000 ฟุต พยายามบินเหนือกลุ่มควัน ดันเครื่องบินให้ถึงเพดานบินสูงสุด"',
                    zh: '🆙 爬升："爬升到 45,000 英尺。试着飞越烟羽。将飞机推至最大升限。"'
                },
                consequence: {
                    en: '🥶 Stall Warning: You climbed too high for the weight. The plane stalls (aerodynamic stall). You lose 5000ft recovering. Passengers vomit.',
                    th: '🥶 คำเตือนเครื่องร่วง: คุณไต่ระดับสูงเกินไปสำหรับน้ำหนัก เครื่องบินเกิดอาการ Stall (ร่วงหล่นทางอากาศพลศาสตร์) คุณเสียความสูง 5000 ฟุตในการกู้คืน ผู้โดยสารอ้วกแตก',
                    zh: '🥶 失速警告：以目前的重量你爬升得太高了。飞机失速（气动失速）。你在改出时掉了 5000 英尺高度。乘客呕吐。'
                },
                stats: { competence: -10, ethics: 10, leadership: -20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '👀 Visual Watch: "Reduce speed. Post crew at windows to watch for \'St. Elmo\'s Fire\' on wings. Turn if we see anything."',
                    th: '👀 เฝ้าระวังด้วยสายตา: "ลดความเร็ว ให้ลูกเรือดูหน้าต่างหา \'ไฟเซนต์เอลโม\' ที่ปีก เลี้ยวถ้าเห็นอะไร"',
                    zh: '👀目视观察："减速。安排机组人员在窗口观察机翼上的‘圣埃尔莫之火’。如果看到什么就掉头。"'
                },
                consequence: {
                    en: '🐢 Slow Crawl: You skirt the edge of the cloud. Engines sustain minor damage ($1M repair), but you make it. A risky calculated bet.',
                    th: '🐢 คลานช้าๆ: คุณบินเฉียดขอบเมฆ เครื่องยนต์เสียหายเล็กน้อย (ค่าซ่อม 1 ล้าน) แต่ก็รอดมาได้ การเดิมพันที่คำนวณแล้วเสี่ยง',
                    zh: '🐢 缓慢爬行：你擦过云团边缘。引擎受到轻微损坏（100 万美元维修费），但你做到了。一场经过计算的冒险赌博。'
                },
                stats: { competence: 30, ethics: 20, leadership: 30, innovation: 30 }
            }
        ]
    },
    {
        id: 'pilot_005',
        text: {
            en: '👶 The Unaccompanied Minor: A flight attendant tells you an 8-year-old traveling alone is having a severe panic attack and trying to open the exit door at 30,000 feet. Restraining him looks bad, but he is dangerous.',
            th: '👶 ผู้เยาว์เดินทางลำพัง: แอร์โฮสเตสบอกคุณว่าเด็ก 8 ขวบที่เดินทางคนเดียวเกิดอาการแพนิกอย่างรุนแรงและพยายามเปิดประตูฉุกเฉินที่ความสูง 30,000 ฟุต การจับเขามัดดูไม่ดี แต่เขาอันตราย',
            zh: '👶 无人陪伴儿童：一名空乘告诉你，一名独自旅行的 8 岁儿童严重恐慌发作，试图在 30,000 英尺高空打开紧急出口。制服他看起来很糟糕，但他很危险。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '👮‍♂️ Restrain Him: "Use zip ties. Tie him to the seat. Safety is non-negotiable. I don\'t care how it looks on TikTok."',
                    th: '👮‍♂️ จับมัด: "ใช้สายรัดเคเบิ้ล มัดเขาติดกับเบาะ ความปลอดภัยต่อรองไม่ได้ ผมไม่สนว่าจะดูยังไงใน TikTok"',
                    zh: '👮‍♂️ 制服他："使用扎带。把他绑在座位上。安全没得商量。我不在乎这在 TikTok 上看起来怎样。"'
                },
                consequence: {
                    en: '🔒 Secure but Viral: The kid screams bloody murder. Passengers film it. You are villainized online, but the FAA supports you fully.',
                    th: '🔒 ปลอดภัยแต่เป็นไวรัล: เด็กร้องเสียงหลง ผู้โดยสารถ่ายคลิป คุณกลายเป็นผู้ร้ายในโลกออนไลน์ แต่ FAA สนับสนุนคุณเต็มที่',
                    zh: '🔒 安全但疯传：孩子哭天抢地。乘客拍了下来。你在网上成了恶人，但联邦航空局（FAA）全力支持你。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🧸 Captain Intervention: "I\'ll go back. Leave the cockpit to the First Officer. Maybe a pilot hat and a calm voice will work."',
                    th: '🧸 กัปตันเข้าแทรกแซง: "ผมจะไปเอง ฝากห้องนักบินไว้กับผู้ช่วย บางที่หมวกนักบินและเสียงนุ่มๆ อาจช่วยได้"',
                    zh: '🧸 机长干预："我回去看看。把驾驶舱留给副驾驶。也许飞行员的帽子和平静的声音会管用。"'
                },
                consequence: {
                    en: '✨ Magical Moment: You calm the kid down. He falls asleep. Passengers applaud. You risked leaving the flight deck, but it paid off.',
                    th: '✨ ช่วงเวลามหัศจรรย์: คุณกล่อมเด็กสงบ เขาหลับไป ผู้โดยสารปรบมือ คุณเสี่ยงที่ทิ้งห้องนักบิน แต่ก็คุ้มค่า',
                    zh: '✨ 神奇时刻：你安抚了孩子。他睡着了。乘客鼓掌。你冒了离开驾驶舱的险，但得到了回报。'
                },
                stats: { competence: 30, ethics: 50, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '💉 Sedate Him: "Is there a doctor on board? Ask them to administer a sedative immediately."',
                    th: '💉 ให้ยาสลบ: "มีหมอบนเครื่องไหม? ขอให้เขาฉีดยากล่อมประสาททันที"',
                    zh: '💉 给他镇静剂："机上有医生吗？请他们立即注射镇静剂。"'
                },
                consequence: {
                    en: '⚖️ Legal Grey Area: A doctor does it. The kid sleeps. The parents sue later for "unauthorized medical procedure." Messy.',
                    th: '⚖️ พื้นที่สีเทาทางกฎหมาย: หมอทำให้ เด็กหลับ ผู้ปกครองฟ้องทีหลังข้อหา "หัตถการทางการแพทย์โดยไม่ได้รับอนุญาต" ยุ่งเหยิง',
                    zh: '⚖️ 法律灰色地带：一位医生做了。孩子睡着了。父母后来起诉"未经授权的医疗程序"。烂摊子。'
                },
                stats: { competence: 20, ethics: 10, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🛬 Emergency Land: "Passenger disturbance. Divert to nearest airport. Hand him to police/parents."',
                    th: '🛬 ลงจอดฉุกเฉิน: "ผู้โดยสารก่อความวุ่นวาย เปลี่ยนเส้นทางไปสนามบินที่ใกล้ที่สุด ส่งตัวให้ตำรวจ/ผู้ปกครอง"',
                    zh: '🛬 紧急降落："乘客骚乱。备降最近的机场。把他交给警察/父母。"'
                },
                consequence: {
                    en: '🕰️ Overreaction?: You delay 300 people for a scared 8-year-old. The airline is annoyed at the cost, but safety is maintained.',
                    th: '🕰️ ทำเกินไปไหม?: คุณทำให้คน 300 คนล่าช้าเพราะเด็ก 8 ขวบที่กลัว สายการบินหงุดหงิดเรื่องค่าใช้จ่าย แต่รักษาความปลอดภัยได้',
                    zh: '🕰️ 反应过度？：你为了一个受惊的 8 岁孩子耽误了 300 人。航空公司对成本很恼火，但保持了安全。'
                },
                stats: { competence: 30, ethics: 30, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_006',
        text: {
            en: '🎅 The Santa Sleigh: It\'s Christmas Eve. ATC asks you to confirm a "visual on Santa" for the kids listening on the radio. You are a serious professional and lying on frequency is technically a violation.',
            th: '🎅 เลื่อนซานต้า: คืนวันคริสต์มาสอีฟ หอบังคับการบินขอให้คุณยืนยัน "มองเห็นซานต้า" เพื่อเด็กๆ ที่ฟังวิทยุอยู่ คุณเป็นมืออาชีพที่จริงจัง และการโกหกบนคลื่นความถี่ถือเป็นการละเมิดกฎ',
            zh: '🎅 圣诞老人的雪橇：平安夜。空管要求你确认"目视到圣诞老人"，以便给收听无线电的孩子们听。你是一个严肃的专业人士，在频率上撒谎在技术上是违规的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎄 Play Along: "Tower, confirm visual on a red sleigh, altitude 30,000. He\'s fast! Over." Make the kids\' night.',
                    th: '🎄 เล่นตามน้ำ: "หอบังคับการ ยืนยันมองเห็นเลื่อนสีแดง ความสูง 30,000 เขาเร็วมาก! เปลี่ยน" สร้างความสุขให้เด็กๆ',
                    zh: '🎄 配合："塔台，确认目视红色雪橇，高度 30,000。他很快！完毕。"让孩子们开心。'
                },
                consequence: {
                    en: '💖 Heartwarming: The clip goes viral positively. The airline loves the PR. The FAA ignores the "violation."',
                    th: '💖 อบอุ่นหัวใจ: คลิปกลายเป็นไวรัลในแง่ดี สายการบินชอบ PR นี้ FAA เมินเฉยต่อ "การละเมิดกฎ"',
                    zh: '💖 暖心：这段剪辑在网上正向疯传。航空公司喜欢这种公关。联邦航空局无视了这次"违规"。'
                },
                stats: { competence: 20, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '😐 Strict Protocol: "Tower, negative contact. Please keep frequency clear for operational traffic only."',
                    th: '😐 เคร่งครัดระเบียบ: "หอบังคับการ ไม่พบเป้าหมาย กรุณาใช้คลื่นความถี่สำหรับจราจรทางอากาศเท่านั้น"',
                    zh: '😐 严格规程："塔台，未接触。请保持频率仅供操作通信使用。"'
                },
                consequence: {
                    en: '🧊 The Grinch: You killed the vibe. ATC hates you. You get a reputation for being zero fun.',
                    th: '🧊 เดอะกริ๊นช์: คุณทำลายบรรยากาศ พวก ATC เกลียดคุณ คุณได้ชื่อว่าเป็นคนไร้ความสนุก',
                    zh: '🧊 圣诞怪杰：你破坏了气氛。空管由于你。你得了个毫无情趣的名声。'
                },
                stats: { competence: 40, ethics: 20, leadership: -30, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤔 Ambiguous Reply: "Tower, traffic in sight at 12 o\'clock... unidentified red beacon light. Suggest caution."',
                    th: '🤔 ตอบกำกวม: "หอบังคับการ พบเป้าหมายที่ 12 นาฬิกา... ไฟสัญญาณสีแดงระบุไม่ได้ แนะนำให้ระวัง"',
                    zh: '🤔 模棱两可的回答："塔台，12 点钟方向看到交通......不明红色信标灯。建议小心。"'
                },
                consequence: {
                    en: '😏 Clever Balance: You didn\'t lie (it could be a plane), but you implied Santa. Everyone is happy.',
                    th: '😏 สมดุลที่ชาญฉลาด: คุณไม่ได้โกหก (อาจเป็นเครื่องบิน) แต่คุณสื่อถึงซานต้า ทุกคนแฮปปี้',
                    zh: '😏 巧妙的平衡：你没撒谎（那可能是一架飞机），但你暗示了圣诞老人。大家都高兴。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 30 }
            }
        ]
    },
    {
        id: 'pilot_007',
        text: {
            en: '🦅 The Bird Strike: Just after takeoff (V1), a flock of geese hits the windshield and left engine. The windshield cracks (can\'t see out), and the engine is vibrating violently. You are heavy with fuel.',
            th: '🦅 นกชนเครื่อง: หลังบินขึ้น (V1) ฝูงห่านชนกระจกหน้าและเครื่องยนต์ซ้าย กระจกร้าว (มองไม่เห็น) และเครื่องยนต์สั่นสะเทือนรุนแรง น้ำมันเต็มถัง',
            zh: '🦅 鸟击：就在起飞（V1）后，一群大雁撞上了挡风玻璃和左引擎。挡风玻璃破裂（看不见外面），引擎剧烈震动。你装满了燃料。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔄 Immediate Return: "Declare Emergency. Mayday! Turn back immediatley. Land overweight. Risk the landing gear collapse."',
                    th: '🔄 กลับทันที: "ประกาศเหตุฉุกเฉิน เมย์เดย์! เลี้ยวกลับทันที ลงจอดแบบน้ำหนักเกิน เสี่ยงฐานล้อพัง"',
                    zh: '🔄 立即返航："宣布紧急情况。梅代（求救）！立即返航。超重着陆。冒起落架折断的风险。"'
                },
                consequence: {
                    en: '🔥 Hot Brakes: You land hard. Tires blow out. Brakes catch fire. But everyone evacuates safely. Hull loss, but lives saved.',
                    th: '🔥 เบรกไหม้: คุณลงจอดหนัก ยางระเบิด เบรกไฟลุก แต่ทุกคนอพยพปลอดภัย เครื่องพังยับ แต่ชีวิตรอด',
                    zh: '🔥 刹车过热：你着陆很重。轮胎爆裂。刹车着火。但所有人都安全撤离。机身损毁，但挽救了生命。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '⛽ Dump Fuel: "Climb to 5000ft. Dump fuel for 30 minutes to reach landing weigth. Hope the engine holds together."',
                    th: '⛽ ทิ้งน้ำมัน: "ไต่ระดับไป 5000 ฟุต ทิ้งน้ำมัน 30 นาทีเพื่อให้ได้น้ำหนักลงจอด หวังว่าเครื่องยนต์จะไม่พังไปก่อน"',
                    zh: '⛽ 放油："爬升到 5000 英尺。放油 30 分钟以达到着陆重量。希望引擎能撑住。"'
                },
                consequence: {
                    en: '💥 Vibration Damage: The vibrating engine tears off the pylon during the hold. You lose hydraulics. It turns into a massive crisis.',
                    th: '💥 ความเสียหายจากการสั่น: เครื่องยนต์ที่สั่นฉีกไพลอนขาดระหว่างบินรอ คุณเสียระบบไฮดรอลิก กลายเป็นวิกฤตใหญ่',
                    zh: '💥 震动损坏：震动的引擎在盘旋时撕裂了挂架。你失去了液压系统。演变成一场巨大的危机。'
                },
                stats: { competence: 20, ethics: -10, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '👀 Side Window Landing: "Can\'t see forward. Open the side cockpit window. Stick head out (goggles on) to land visually. Old school."',
                    th: '👀 ลงจอดด้วยหน้าต่างข้าง: "มองข้างหน้าไม่เห็น เปิดหน้าต่างข้างห้องนักบิน ยื่นหัวออกไป (ใส่แว่น) เพื่อดูทางลงจอด แบบดั้งเดิม"',
                    zh: '👀 侧窗着陆："看不见前方。打开驾驶舱侧窗。把头伸出去（戴上护目镜）目视着陆。老派作风。"'
                },
                consequence: {
                    en: '😎 Ace Pilot: It\'s incredibly loud and windy, but you grease the landing. The passengers cheer. Legendary skill.',
                    th: '😎 ยอดนักบิน: เสียงดังและลมแรงมาก แต่คุณลงจอดนิ่มนวล ผู้โดยสารเฮ ทักษะระดับตำนาน',
                    zh: '😎 王牌飞行员：噪音极大，风很大，但你完美着陆。乘客欢呼。传奇般的技巧。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'pilot_008',
        text: {
            en: '🌩️ The Thunderstorm Wallet: You are approaching the destination. A massive thunderstorm covers the airport. You have enough fuel to circle for 30 minutes or divert to a faraway airport. Passengers will miss connections if you divert.',
            th: '🌩️ กระเป๋าตังค์พายุฟ้าคะนอง: คุณกำลังเข้าใกล้จุดหมาย พายุฝนฟ้าคะนองขนาดใหญ่ปกคลุมสนามบิน คุณมีเชื้อเพลิงพอที่จะบินวน 30 นาทีหรือเปลี่ยนเส้นทางไปสนามบินไกลๆ ผู้โดยสารจะตกเครื่องต่อถ้าคุณเปลี่ยนเส้นทาง',
            zh: '🌩️ 雷暴钱包：你正在接近目的地。一场巨大的雷暴覆盖了机场。你有足够的燃料盘旋 30 分钟或改道去一个遥远的机场。如果你改道，乘客将错过转机。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔄 Hold and Hope: "Enter a holding pattern. The storm might pass in 20 minutes. We can land then."',
                    th: '🔄 บินวนและหวัง: "เข้าสู่รูปแบบการบินวน พายุอาจจะผ่านไปใน 20 นาที เราค่อยลงตอนนั้น"',
                    zh: '🔄 等待和希望："进入盘旋模式。风暴可能会在 20 分钟内过去。那时我们可以降落。"'
                },
                consequence: {
                    en: '🎰 The Gamble: Storm didn\'t move. You reach minimum fuel. Now you HAVE to divert, but with less fuel safety margin. Stressful but safe landing.',
                    th: '🎰 การเดิมพัน: พายุไม่ขยับ คุณถึงขีดจำกัดเชื้อเพลิง ตอนนี้คุณ *ต้อง* เปลี่ยนเส้นทาง แต่ด้วยเชื้อเพลิงสำรองที่น้อยกว่า เครียดแต่ลงจอดปลอดภัย',
                    zh: '🎰 赌博：风暴没有移动。你达到了最低燃料。现在你*必须*改道，但燃料安全余量更少了。压力很大，但安全着陆。'
                },
                stats: { competence: 20, ethics: 10, leadership: 0, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛫 Divert Immediately: "Safety first. Diverting to alternate airport NOW. Apologize to passengers on PA."',
                    th: '🛫 เปลี่ยนเส้นทางทันที: "ปลอดภัยไว้ก่อน เปลี่ยนเส้นทางไปสนามบินสำรอง *เดี๋ยวนี้* ขอโทษผู้โดยสารผ่านเสียงตามสาย"',
                    zh: '🛫 立即改道："安全第一。*现在*改道去备降机场。在广播中向乘客道歉。"'
                },
                consequence: {
                    en: '🛡️ Responsible Choice: Passengers groan, but you land with full tanks and zero stress. Airline operations hates the logistics, but safety board approves.',
                    th: '🛡️ ทางเลือกที่รับผิดชอบ: ผู้โดยสารบ่นอุบ แต่คุณลงจอดด้วยถังน้ำมันเต็มและไม่เครียด ฝ่ายปฏิบัติการเกลียดเรื่องโลจิสติกส์ แต่คณะกรรมการความปลอดภัยชื่นชม',
                    zh: '🛡️ 负责任的选择：乘客呻吟，但你满油且零压力着陆。航空公司运营部门讨厌这种物流，但安全委员会批准了。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '⚡ Punch Through: "Trust the radar. I see a gap in the red zone. We can shoot the gap and land. I\'m a good pilot."',
                    th: '⚡ ฝ่าเข้าไป: "เชื่อเรดาร์สิ ผมเห็นช่องว่างในโซนสีแดง เราพุ่งผ่านช่องนั้นแล้วลงจอดได้ ผมขับเก่ง"',
                    zh: '⚡ 穿过去："相信雷达。我看到红区有个缺口。我们可以穿过缺口着陆。我是个好飞行员。"'
                },
                consequence: {
                    en: '😱 Turbulence Terror: You clear the gap, but the turbulence is extreme. People vomit. Overhead bins pop open. You land, but get suspended for recklessness.',
                    th: '😱 ความสยองของหลุมอากาศ: คุณผ่านช่องมาได้ แต่หลุมอากาศรุนแรงมาก คนอ้วก ช่องเก็บของเหนือหัวเปิดออก คุณลงจอดได้ แต่โดนพักงานฐานประมาท',
                    zh: '😱 湍流恐怖：你清理了缺口，但湍流非常剧烈。人们呕吐。头顶行李箱弹开。你着陆了，但因鲁莽而被停职。'
                },
                stats: { competence: -20, ethics: -40, leadership: -30, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🗳️ Ask Passengers: "Folks, we can circle or divert. Who wants to take a chance? Vote by raising hands."',
                    th: '🗳️ ถามผู้โดยสาร: "ทุกท่านครับ เราจะบินวนหรือไปที่อื่นดี ใครอยากเสี่ยงบ้าง? ยกมือโหวตครับ"',
                    zh: '🗳️ 询问乘客："伙计们，我们可以盘旋或改道。谁想冒险？举手表决。"'
                },
                consequence: {
                    en: '🤡 Unprofessional: A passenger films this. "Pilot asks us to fly the plane." Viral mockery. Airline fires you.',
                    th: '🤡 ไม่เป็นมืออาชีพ: ผู้โดยสารถ่ายคลิปไว้ "นักบินให้เราขับเครื่องบินแทน" ไวรัลล้อเลียน สายการบินไล่คุณออก',
                    zh: '🤡 不专业：一名乘客拍下了这一幕。"飞行员让我们开飞机。"病毒式嘲弄。航空公司解雇了你。'
                },
                stats: { competence: -50, ethics: -10, leadership: -50, innovation: -20 }
            }
        ]
    },
    {
        id: 'pilot_009',
        text: {
            en: '🤮 The Sick Passenger: Mid-Atlantic. A passenger has severe chest pains. Is it a heart attack or indigestion? There is a doctor on board who says "I think it\'s serious, but I have no equipment." Diverting takes 3 hours and costs $50k in fuel.',
            th: '🤮 ผู้โดยสารป่วย: กลางมหาสมุทรแอตแลนติก ผู้โดยสารเจ็บหน้าอกรุนแรง หัวใจวายหรืออาหารไม่ย่อย? มีหมอบนเครื่องบอกว่า "ผมว่าอาการหนัก แต่ผมไม่มีอุปกรณ์" การเปลี่ยนเส้นทางใช้เวลา 3 ชั่วโมงและค่าน้ำมัน 50,000 ดอลลาร์',
            zh: '🤮 生病的乘客：大西洋中部。一名乘客胸痛剧烈。是心脏病发作还是消化不良？机上有一名医生说"我认为很严重，但我没有设备。"改道需要 3 小时，燃料费用为 5 万美元。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏥 Divert Immediately: "Fuel dumping now. Heading to nearest land. Life over money."',
                    th: '🏥 เปลี่ยนเส้นทางทันที: "ทิ้งน้ำมันเดี๋ยวนี้ มุ่งหน้าสู่แผ่นดินที่ใกล้ที่สุด ชีวิตสำคัญกว่าเงิน"',
                    zh: '🏥 立即改道："现在放油。前往最近的陆地。生命高于金钱。"'
                },
                consequence: {
                    en: '❤️ Life Saved: It WAS a heart attack. He survives because of you. The airline grumbles about cost but puts it in a PR release.',
                    th: '❤️ ชีวิตรอด: มัน *คือ* หัวใจวาย เขารอดเพราะคุณ สายการบินบ่นเรื่องเงินแต่ก็เอาไปทำ PR',
                    zh: '❤️以此挽救：那*是*一次心脏病发作。因为你，他活了下来。航空公司抱怨成本，但将其作为公关发布。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '⏩ Continue On: "We are closer to destination than turnaround. Full throttle to get there faster. Give him oxygen."',
                    th: '⏩ บินต่อ: "เราใกล้ถึงจุดหมายมากกว่าหันกลับ เร่งเครื่องเต็มที่ไปให้ถึงเร็วขึ้น ให้ออกซิเจนเขา"',
                    zh: '⏩ 继续："我们要比折返更接近目的地。全速前进，更快到达。给他吸氧。"'
                },
                consequence: {
                    en: '🎲 The Risk: He stabilizes. It was bad gas. You saved money and time. But if he had died, you\'d be sued.',
                    th: '🎲 ความเสี่ยง: เขาอาการคงที่ แค่แก๊สในกระเพาะ คุณประหยัดเงินและเวลา แต่ถ้าเขาตาย คุณโดนฟ้องแน่',
                    zh: '🎲 风险：他稳定下来了。是严重的胀气。你节省了金钱和时间。但如果他死了，你会被起诉。'
                },
                stats: { competence: 30, ethics: -20, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '💊 Ask Doctor to Improvise: "Can you do anything? Use the first aid kit. We will stay on course unless you say he is dying right NOW."',
                    th: '💊 ขอให้หมอประยุกต์: "หมอทำอะไรได้มั้ย? ใช้ชุดปฐมพยาบาล เราจะบินต่อจนกว่าหมอจะบอกว่าเขากำลังจะตาย *เดี๋ยวนี้*"',
                    zh: '💊 让医生即兴发挥："你能做什么吗？使用急救箱。我们将保持航向，除非你说他*现在*这就快死了。"'
                },
                consequence: {
                    en: '⚖️ Calculated Wait: The doctor monitors him. He survives the flight. You placed the burden on the doctor. Smart but cold.',
                    th: '⚖️ การรอที่คำนวณไว้: หมอเฝ้าดูเขา เขารอดจนถึงปลายทาง คุณโยนภาระให้หมอ ฉลาดแต่เย็นชา',
                    zh: '⚖️ 精心计算的等待：医生监视着他。他在飞行中幸存下来。你把包袱甩给了医生。聪明但冷酷。'
                },
                stats: { competence: 20, ethics: 10, leadership: 20, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🗳️ Upgrade Him: "Move him to First Class for comfort. Maybe the champagne will help?"',
                    th: '🗳️ อัปเกรดเขา: "ย้ายเขาไปเฟิร์สคลาสเพื่อความสบาย แชมเปญอาจช่วยได้?"',
                    zh: '🗳️ 给他升舱："把他移到头等舱以求舒适。也许香槟会有帮助？"'
                },
                consequence: {
                    en: '🤦 Medical Fail: Champagne makes it worse (indigestion). He vomits on a VIP. Total chaos.',
                    th: '🤦 การแพทย์ล้มเหลว: แชมเปญทำให้อาการแย่ลง (อาหารไม่ย่อย) เขาอ้วกใส่ VIP วุ่นวายสุดๆ',
                    zh: '🤦 医疗失败：香槟让情况变得更糟（消化不良）。他吐了一位贵宾一身。一片混乱。'
                },
                stats: { competence: -30, ethics: -10, leadership: -20, innovation: -10 }
            }
        ]
    },
    {
        id: 'pilot_010',
        text: {
            en: '💤 The Sleepy Co-Pilot: It\'s a red-eye flight. Your First Officer (FO) falls asleep in the cockpit. This is against regulations (unless controlled rest). He is snoring loudly. You are tired too.',
            th: '💤 นักบินผู้ช่วยขี้เซา: เที่ยวบินดึกดื่น นักบินผู้ช่วย (FO) ของคุณหลับในห้องนักบิน นี่ผิดกฎ (ยกเว้นการพักแบบควบคุม) เขากรนดัง คุณเองก็เหนื่อย',
            zh: '💤 昏昏欲睡的副驾驶：这是红眼航班。你的副驾驶 (FO) 在驾驶舱睡着了。这违反了规定（除非是受控休息）。他鼾声如雷。你也累了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⏰ Wake Him Up: "Hey! Wake up! We need to stay alert. Drink this coffee. Check the gauges."',
                    th: '⏰ ปลุกเขา: "เฮ้ย! ตื่น! เราต้องตื่นตัวไว้ กินกาแฟนี่ เช็คเกจวัดต่างๆ"',
                    zh: '⏰ 叫醒他："嘿！醒醒！我们需要保持警惕。喝了这杯咖啡。检查仪表。"'
                },
                consequence: {
                    en: '☕ Standard Proc: He wakes up groggy but gets back to work. Safe, but fatigue is still a risk for both of you.',
                    th: '☕ ขั้นตอนมาตรฐาน: เขาตื่นมางัวเงียแต่กลับมาทำงาน ปลอดภัย แต่ความเหนื่อยล้ายังเป็นความเสี่ยงของคุณทั้งคู่',
                    zh: '☕ 标准程序：他醒来时昏昏沉沉，但又回去工作了。安全，但疲劳对你们俩来说仍然是一个风险。'
                },
                stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Let Him Sleep: "I\'ll take the radio. Let him rest for 20 mins. A rested pilot is safer for landing."',
                    th: '🤫 ปล่อยให้หลับ: "ผมจะดูวิทยุเอง ให้เขาพัก 20 นาที นักบินที่พักผ่อนเพียงพอจะลงจอดได้ปลอดภัยกว่า"',
                    zh: '🤫 让他睡："我会负责无线电。让他休息 20 分钟。休息好的飞行员着陆更安全。"'
                },
                consequence: {
                    en: '🤝 Unofficial CRM: It\'s "Controlled Rest" without the paperwork. He wakes up fresh for the approach. Good leadership/Bad compliance.',
                    th: '🤝 CRM แบบไม่ทางการ: มันคือ "การพักแบบควบคุม" โดยไม่มีเอกสาร เขาตื่นมาสดชื่นพร้อมลงจอด ความเป็นผู้นำดี/การปฏิบัติตามกฎแย่',
                    zh: '🤝 非官方 CRM：这是没有文书工作的"受控休息"。他醒来时精神焕发，准备进近。良好的领导力/糟糕的合规性。'
                },
                stats: { competence: 30, ethics: 10, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '😴 Sleep Too: "Auto-pilot is on. I\'ll just close my eyes for 5 minutes..."',
                    th: '😴 หลับด้วย: "ออโต้ไพลอตเปิดอยู่ ผมจะหลับตาแค่ 5 นาที..."',
                    zh: '😴 也睡会儿："自动驾驶已开启。我就闭眼 5 分钟……"'
                },
                consequence: {
                    en: '🚨 Overshoot: You both sleep for an hour. Air Traffic Control is screaming on the radio. You flew past the airport. Major incident.',
                    th: '🚨 บินเลย: คุณทั้งคู่หลับไปชั่วโมงนึง หอควบคุมตะโกนเรียกทางวิทยุ คุณบินเลยสนามบิน เรื่องใหญ่แน่',
                    zh: '🚨 飞过头：你们俩都睡了一个小时。空中交通管制员在无线电里尖叫。你飞过了机场。重大事故。'
                },
                stats: { competence: -50, ethics: -50, leadership: -50, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '📝 Report Him: Wake him up and file a formal report on landing. "Unfit for duty due to fatigue."',
                    th: '📝 รายงานเขา: ปลุกเขาและเขียนรายงานทางการตอนลงจอด "ไม่พร้อมปฏิบัติหน้าที่เนื่องจากความเหนื่อยล้า"',
                    zh: '📝 举报他：叫醒他并在着陆时提交正式报告。"因疲劳而不适合执行任务。"'
                },
                consequence: {
                    en: '👮 By the Book: He gets suspended. The union hates you. The airline investigates schedules. You are \'that guy\'.',
                    th: '👮 ตรงตามตำรา: เขาโดนพักงาน สหภาพเกลียดคุณ สายการบินสอบสวนตารางบิน คุณกลายเป็น \'ไอ้หมอนั่น\'',
                    zh: '👮 照章办事：他被停职了。工会恨你。航空公司调查时间表。你是"那个人"。'
                },
                stats: { competence: 10, ethics: 40, leadership: -20, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_011',
        text: {
            en: '🍾 The VIP Request: The CEO of the airline is on board in 1A. He sends a note: "Let my son (10 years old) visit the cockpit during flight." Post-9/11 rules strictly forbid this.',
            th: '🍾 คำขอ VIP: CEO ของสายการบินนั่งอยู่ 1A เขาส่งโน้ตมา: "ให้ลูกชายผม (10 ขวบ) เข้าไปดูห้องนักบินระหว่างบินหน่อย" กฎหลังเหตุการณ์ 9/11 ห้ามเรื่องนี้เด็ดขาด',
            zh: '🍾 VIP 请求：航空公司的 CEO 就在 1A 座位上。他发来一张纸条："让我的儿子（10 岁）在飞行期间参观驾驶舱。"9/11 后的规则严格禁止这样做。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚪 Deny Entry: "Send a note back. \'Sorry sir, federal regulations. I cannot unlock the door.\'"',
                    th: '🚪 ปฏิเสธการเข้า: "ส่งโน้ตกลับไป \'ขอโทษครับท่าน กฎหมายรัฐบาลกลาง ผมปลดล็อกประตูไม่ได้\'"',
                    zh: '🚪 拒绝入内："回一张纸条。‘对不起，先生，联邦法规。我不能开门。’"'
                },
                consequence: {
                    en: '🛡️ Professional Wall: CEO is annoyed but can\'t fire you for following the law. You kept the flight secure.',
                    th: '🛡️ กำแพงมืออาชีพ: CEO หงุดหงิดแต่ไล่คุณออกไม่ได้เพราะทำตามกฎหมาย คุณรักษาความปลอดภัยเที่ยวบิน',
                    zh: '🛡️ 专业墙：CEO 很恼火，但不能因为你遵守法律而解雇你。你保证了航班的安全。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔓 Allow It: "It\'s the boss. Check IDs, let the kid in for 2 mins. Don\'t touch anything."',
                    th: '🔓 อนุญาต: "นั่นเจ้านายนะ เช็คบัตร ให้เด็กเข้ามา 2 นาที ห้ามจับอะไรนะ"',
                    zh: '🔓 允许："是老板。检查证件，让孩子进来 2 分钟。别碰任何东西。"'
                },
                consequence: {
                    en: '🤫 Secret Tour: The kid loves it. CEO leaves a big tip/commendation. But on the black box recording... evidence exists.',
                    th: '🤫 ทัวร์ลับ: เด็กชอบมาก CEO ให้ทิปหนัก/คำชม แต่ในกล่องดำ... มีหลักฐานอยู่',
                    zh: '🤫 秘密参观：孩子很喜欢。CEO 留下了丰厚的小费/嘉奖。但在黑匣子录音里……存在证据。'
                },
                stats: { competence: 20, ethics: -20, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📷 Compromise: "I can\'t open the door. But I will take a Polaroid of the cockpit and sign it for him."',
                    th: '📷 ประนีประนอม: "ผมเปิดประตูไม่ได้ แต่ผมจะถ่ายรูปโพลารอยด์ห้องนักบินแล้วเซ็นชื่อให้เขา"',
                    zh: '📷 妥协："我不能开门。但我会拍一张驾驶舱的宝丽以此照片并签名给他。"'
                },
                consequence: {
                    en: '✨ Diplomatic Win: CEO respects the safety culture and the gesture. Kid gets a cool souvenir.',
                    th: '✨ ชัยชนะทางการทูต: CEO เคารพวัฒนธรรมความปลอดภัยและท่าทีของคุณ เด็กได้ของที่ระลึกเจ๋งๆ',
                    zh: '✨ 外交胜利：CEO 尊重安全文化和这种姿态。孩子得到了很酷的纪念品。'
                },
                stats: { competence: 30, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Report CEO: Call company dispatch via radio. "CEO is attempting to breach cockpit security." Cover your ass.',
                    th: '📞 รายงาน CEO: เรียกศูนย์ผ่านวิทยุ "CEO พยายามฝ่าฝืนความปลอดภัยห้องนักบิน" เซฟตัวเองไว้ก่อน',
                    zh: '📞 举报 CEO：通过无线电呼叫公司调度。"CEO 试图破坏驾驶舱安全。"以此自保。'
                },
                consequence: {
                    en: '🔥 Career Suicide: You technically followed protocol, but you humiliated the boss. You will check tires in Siberia forever.',
                    th: '🔥 ฆ่าตัวตายทางอาชีพ: ในทางเทคนิคคุณทำถูก แต่คุณฉีกหน้าเจ้านาย คุณจะได้ไปเช็คลมยางที่ไซบีเรียตลอดไป',
                    zh: '🔥 职业自杀：你在技术上遵循了协议，但以此羞辱了老板。你将永远在西伯利亚检查轮胎。'
                },
                stats: { competence: 10, ethics: 30, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_012',
        text: {
            en: '🛬 The Crosswind Landing: Landing at your home base. Winds are gusting 40 knots, right at the limit of the aircraft. You are tired. Fuel is low-ish. If you go around, you might divert.',
            th: '🛬 การลงจอดขวางลม: ลงจอดที่ฐานหลัก ลมกระโชก 40 นอต พอดีขีดจำกัดเครื่องบิน คุณเหนื่อย น้ำมันก็เริ่มน้อย ถ้าบินวนใหม่อาจต้องเปลี่ยนสนามบิน',
            zh: '🛬 侧风着陆：在基地着陆。阵风 40 节，正好在飞机的极限。你累了。燃料不足。如果你复飞，你可能要改道。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🦅 Stick the Landing: "I can do this. Crab into the wind. Kick the rudder last second. Plant it firmly."',
                    th: '🦅 ลงจอดให้ได้: "ผมทำได้ บินเอียงสู้ลม ถีบหางเสือวิสุดท้าย กดลงพื้นแน่นๆ"',
                    zh: '🦅 坚持着陆："我能行。迎风蟹行。最后一秒踢方向舵。稳稳地落下。"'
                },
                consequence: {
                    en: '🏆 Hero Arrival: A rough, bumpy landing, but safer than running out of fuel. Passengers clap.',
                    th: '🏆 ฮีโร่มาถึง: ลงจอดกระแทกหน่อย แต่ปลอดภัยกว่าน้ำมันหมด ผู้โดยสารปรบมือ',
                    zh: '🏆 英雄以此：一次粗暴、颠簸的着陆，但比燃料耗尽要安全。乘客鼓掌。'
                },
                stats: { competence: 50, ethics: 20, leadership: 20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Go Around: "Unstable. Too risky. Power up! Go around. We will try one more time or divert."',
                    th: '🔄 บินวนใหม่: "ไม่เสถียร เสี่ยงไป เร่งเครื่อง! บินวนใหม่ เราจะลองอีกครั้งหรือเปลี่ยนสนามบิน"',
                    zh: '🔄 复飞："不稳定。太冒险了。加油！复飞。我们会再试一次或改道。"'
                },
                consequence: {
                    en: '🛡️ Safety Standard: Correct decision. You divert to a calmer airport. It costs money and time, but zero risk of crash.',
                    th: '🛡️ มาตรฐานความปลอดภัย: ตัดสินใจถูก คุณไปลงสนามบินที่ลมสงบกว่า เสียเงินและเวลา แต่เสี่ยงเครื่องตกเป็นศูนย์',
                    zh: '🛡️ 安全标准：正确的决定。你改道去一个更平静的机场。这花费了金钱和时间，但坠机风险为零。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤖 Auto-Land: "Let the computer handle it. It reacts faster than me."',
                    th: '🤖 ออโต้แลนด์: "ให้คอมพิวเตอร์จัดการ มันตอบสนองไวกว่าผม"',
                    zh: '🤖 自动着陆："让电脑处理。它的反应比我快。"'
                },
                consequence: {
                    en: '❌ System Limit: Auto-land disconnects at 100ft because wind exceeds its limit! You have to scramble to take control. Near miss.',
                    th: '❌ ขีดจำกัดระบบ: ออโต้แลนด์ตัดตอน 100 ฟุตเพราะลมเกินลิมิต! คุณต้องรีบคว้าคันบังคับ เกือบไปแล้ว',
                    zh: '❌ 系统限制：自动着陆在 100 英尺处断开，因为风速超过了它的限制！你必须仓促接管控制权。险些失误。'
                },
                stats: { competence: -10, ethics: 0, leadership: -10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤠 Cowboy Stunt: "Bank hard, slip the plane, drop it like a stone to minimize wind exposure."',
                    th: '🤠 สตั๊นท์คาวบอย: "เอียงเครื่องหนักๆ สลิปเครื่อง ทิ้งดิ่งลงไปเพื่อลดการปะทะลม"',
                    zh: '🤠 牛仔特技："大角度倾斜，侧滑飞机，像石头一样扔下去以尽量减少风的影响。"'
                },
                consequence: {
                    en: '💥 Hard Landing: You blow two tires and damage the landing gear. It counts as an "accident". Investigation follows.',
                    th: '💥 ลงจอดกระแทก: ยางระเบิด 2 เส้น ฐานล้อพัง ถือเป็น "อุบัติเหตุ" โดนสอบสวนตามระเบียบ',
                    zh: '💥 硬着陆：你爆了两个轮胎并损坏了起落架。这算是一次"事故"。随之而来的是调查。'
                },
                stats: { competence: -20, ethics: -20, leadership: -30, innovation: -10 }
            }
        ]
    },
    {
        id: 'pilot_013',
        text: {
            en: '🌪️ The Microburst: On short final, your airspeed suddenly drops by 20 knots and the nose pitches down. You\'re experiencing a microburst—a violent downdraft.',
            th: '🌪️ ไมโครบาสต์: ขณะกำลังจะลงจอด ความเร็วลมลดลงกะทันหัน 20 นอตและหัวเครื่องเริ่มปักลง คุณกำลังเจอกับไมโครบาสต์—กระแสลมกดที่รุนแรงมาก',
            zh: '🌪️ 微下击暴流：在最后进场阶段，你的空速突然下降了 20 节，机头下沉。你正遭遇微下击暴流——一种剧烈的下降气流。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Full Power, Pitch Up: "Go-around! Max power, flaps to takeoff position, and pull the nose up to the limit without stalling."',
                    th: '🚀 อัดกำลังเต็มพิกัด เชิดหัวขึ้น: "โกอราวน์! ใส่กำลังสูงสุด กางแฟลปไปที่ตำแหน่งเทคออฟ และดึงหัวขึ้นให้สุดเท่าที่ทำได้โดยไม่ให้เครื่องร่วง"',
                    zh: 'A：全功率，抬头："复飞！最大功率，襟翼调至起飞位置，在不失速的情况下将机头抬至极限。"'
                },
                consequence: {
                    en: '🌟 Escape: You narrowly avoid the ground. The windshear warning screams, but you climb out. Your training saved everyone.',
                    th: '🌟 หนีพ้น: คุณรอดจากการกระแทกพื้นหวุดหวิด สัญญาณเตือนวินด์เชียร์ดังระงม แต่คุณไต่ระดับขึ้นมาได้ การฝึกฝนช่วยชีวิตทุกคนไว้',
                    zh: '🌟 脱险：你险些撞地。风切变警报大作，但你成功爬升。你的训练救了所有人。'
                },
                stats: { competence: 50, ethics: 20, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛬 Try to Land: "We\'re too low to go around. Push the power forward and just try to fly it onto the runway."',
                    th: '🛬 พยายามลงจอด: "เราต่ำเกินกว่าจะโกอราวน์แล้ว ดันกำลังไปข้างหน้าแล้วพยายามประคองเครื่องลงรันเวย์ให้ได้"',
                    zh: 'B：尝试降落："我们太低了，无法复飞。加大轴功率，试着把飞机开到跑道上。"'
                },
                consequence: {
                    en: '💥 Hard Landing: The downdraft slams you onto the runway. The landing gear collapses. Minor injuries, but the plane is totaled.',
                    th: '💥 ลงจอดรุนแรง: กระแสลมกดกระแทกเครื่องลงกับรันเวย์อย่างแรง ฐานล้อพัง บาดเจ็บเล็กน้อยแต่เครื่องบินพังยับ',
                    zh: 'B：硬着陆：下降气流将你猛撞在跑道上。起落架坍塌。人员轻伤，但飞机全毁。'
                },
                stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🛡️ Stabilized Approach: "I saw the clouds earlier. I kept an extra 15 knots of speed just in case. Now I have the energy to fly through it."',
                    th: '🛡️ การเข้าหาที่เสถียร: "ผมเห็นเมฆตั้งแต่แรกแล้ว เลยเผื่อความเร็วไว้เพิ่ม 15 นอตเผื่อไว้ ตอนนี้ผมเลยมีแรงพอจะบินผ่านมันไปได้"',
                    zh: 'C：稳定进场："我早些时候看到了云层。为了以防万一，我额外保持了 15 节的空速。现在我有足够的能量飞过它。"'
                },
                consequence: {
                    en: '🧠 Proactive Safety: Your foresight meant the drop didn\'t put you in danger. You land safely while other planes are diverted.',
                    th: '🧠 ความปลอดภัยเชิงรุก: การมองการณ์ไกลของคุณทำให้ความเร็วที่ตกลงไปไม่ทำให้เกิดอันตราย คุณลงจอดได้อย่างปลอดภัยขณะที่ลำอื่นต้องเปลี่ยนสนามบิน',
                    zh: 'C：前瞻性安全：你的远见意味着速度下降并没让你陷入危险。你安全降落，而其他飞机则被迫改道。'
                },
                stats: { competence: 50, ethics: 30, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📻 Call for Help: "Mayday! Mayday! Windshear! Tower, we need instructions!"',
                    th: '📻 เรียกขอความช่วยเหลือ: "เมย์เดย์! เมย์เดย์! วินด์เชียร์! หอบังคับการ ขอคำแนะนำด่วน!"',
                    zh: 'D：呼救："求救！求救！风切变！塔台，我们需要指示！"'
                },
                consequence: {
                    en: '📉 Too Late: By the time the tower responds, you\'ve already hit the ground. Aviate, Navigate, Communicate—you forgot the first one.',
                    th: '📉 สายไปเสียแล้ว: กว่าหออากาศจะตอบกลับ คุณก็กระแทกพื้นไปแล้ว บิน-นำทาง-สื่อสาร—คุณลืมกฎข้อแรกไป',
                    zh: 'D：太迟了：等塔台回复时，你已经撞地了。飞操、导航、通讯——你忘了第一条。'
                },
                stats: { competence: -20, ethics: 10, leadership: -10, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_014',
        text: {
            en: '💼 The Pushy CEO: You\'re flyling a private jet for a tech billionaire. The destination airport has heavy fog below minimums. He comes to the cockpit and says, "I have a $10B deal in an hour. Land anyway. I\'ll pay your fine."',
            th: '💼 CEO ผู้กดดัน: คุณกำลังบินเครื่องบินเจ็ทส่วนตัวให้มหาเศรษฐีเทคโนโลยี สนามบินปลายทางมีหมอกหนาจัดต่ำกว่าระดับที่ลงจอดได้ เขาเดินมาที่ห้องนักบินแล้วพูดว่า "ผมมีดีลหมื่นล้านในอีกชั่วโมงนึง ลงจอดไปเลย เดี๋ยวผมจ่ายค่าปรับให้เอง"',
            zh: '💼 霸道的 CEO：你正为一位科技亿万富翁驾驶私人飞机。目的地机场的大雾低于最低着陆标准。他来到驾驶舱说："一小时后我有个 100 亿美元的交易。照样降落。罚款我来付。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Firm Refusal: "Sir, professional regulations and safety aren\'t for sale. We are diverting to the alternate. Please return to your seat."',
                    th: '🚫 ปฏิเสธหนักแน่น: "ท่านครับ กฎระเบียบวิชาชีพและความปลอดภัยซื้อไม่ได้ เราจะเปลี่ยนไปลงสนามบินสำรองแทน เชิญกลับไปนั่งที่ครับ"',
                    zh: 'A：坚决拒绝："先生，职业规范和安全是金钱买不来的。我们要改道前往备降机场。请回到你的座位上。"'
                },
                consequence: {
                    en: '🛡️ Integrity: He fumes and fires you upon landing. However, the FAA hears of it and you get a job with a major airline for your integrity.',
                    th: '🛡️ ศักดิ์ศรี: เขาเดือดจัดและไล่คุณออกทันทีที่ลงจอด แต่ FAA ทราบเรื่องและคุณได้งานที่สายการบินใหญ่เพราะจรรยาบรรณของคุณ',
                    zh: 'A：正气：他勃然大怒，并在着陆后解雇了你。然而，联邦航空局（FAA）听说了这件事，你因你的正直而在一家大型航空公司谋得了职位。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '👁️ Take a Look: "I\'ll fly the approach to minimums. If I see the lights, I\'ll land. If not, we go around. That\'s the limit."',
                    th: '👁️ ขอลองดูหน่อย: "ผมจะบินเข้าหาจนถึงระดับต่ำสุดที่อนุญาต ถ้าเห็นไฟรันเวย์ผมจะลง ถ้าไม่เห็นเราจะโกอราวน์ นี่คือขีดจำกัดสูงสุดของผมครับ"',
                    zh: 'B：看一看："我会飞到最低标准高度。如果我看到灯光，我就降落。如果没有，我们就复飞。这是底线。"'
                },
                consequence: {
                    en: '🌫️ Missed Approach: You don\'t see anything. You go around safely. The CEO is still mad, but he can\'t argue with physics.',
                    th: '🌫️ ไม่เห็นรันเวย์: คุณมองไม่เห็นอะไรเลย จึงโกอราวน์อย่างปลอดภัย CEO ยังโกรธอยู่แต่เขาเถียงกฎฟิสิกส์ไม่ได้',
                    zh: 'B：错过进场：你什么也没看见。你安全地复飞了。CEO 依然很生气，但他无法违背物理规律。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🎰 Take the Risk: "It\'s a CAT II runway and I\'m feeling lucky. I can probably spot the threshold if I dip just slightly below minimums."',
                    th: '🎰 ยอมเสี่ยง: "มันเป็นรันเวย์ CAT II และผมรู้สึกดวงดี น่าจะพอเห็นหัวรันเวย์ได้ถ้าผมลดระดับต่ำกว่าเกณฑ์นิดหน่อย"',
                    zh: 'C：冒险："这是 II 类跑道，我觉得运气不错。如果我稍稍降到最低标准以下，或许能发现跑道入口。"'
                },
                consequence: {
                    en: '💀 CFIT (Controlled Flight Into Terrain): You thought you saw lights, but it was a reflection on the fog. You hit the trees short of the runway.',
                    th: '💀 พุ่งชนพื้นดิน: คุณคิดว่าเห็นไฟแต่มันเป็นแสงสะท้อนบนหมอก คุณพุ่งชนต้นไม้ก่อนถึงรันเวย์',
                    zh: 'C：受控飞行撞地（CFIT）：你以为看到了灯光，但那只是雾气的反射。你在跑道前方撞上了树木。'
                },
                stats: { competence: -40, ethics: -50, leadership: -30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🏢 Creative Diversion: "Sir, fog is thick there, but a nearby military base has GCA (Ground Controlled Approach). I\'ll call in a favor to get us in there."',
                    th: '🏢 ทางเลือกที่สร้างสรรค์: "ท่านครับ หมอกที่นั่นหนามาก แต่ฐานทัพอากาศใกล้ๆ มีระบบ GCA ผมจะขอลองใช้เส้นสายพาเราลงที่นั่นแทน"',
                    zh: 'D：创意改道："先生，那里的雾很浓，但附近的一个军事基地有地面控制进场（GCA）系统。我会找人帮忙让我们在那里降落。"'
                },
                consequence: {
                    en: '🧠 Problem Solver: You got the CEO to his meeting on time via a different airport. He gives you a massive bonus and a new watch.',
                    th: '🧠 นักแก้ปัญหา: คุณพา CEO ไปประชุมทันเวลาผ่านสนามบินอื่น เขาให้โบนัสก้อนโตและนาฬิกาเรือนใหม่แก่คุณ',
                    zh: 'D：问题解决者：你通过另一个机场让 CEO 按时参加了会议。他给了你一笔巨额奖金和一块新表。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'pilot_015',
        text: {
            en: '🔥 The Cargo Fire: Midway over the Atlantic, the fire suppression system in the main cargo hold triggers. You check the sensors—the temperature is rising rapidly. You\'re 3 hours from land.',
            th: '🔥 ไฟไหม้ระวางบรรทุกสินค้า: ระหว่างทางข้ามมหาสมุทรแอตแลนติก ระบบดับเพลิงในระวางบรรทุกหลักทำงาน คุณเช็กเซ็นเซอร์พบว่าอุณหภูมิกำลังพุ่งสูงขึ้นอย่างรวดเร็ว คุณอยู่ห่างจากแผ่นดิน 3 ชั่วโมง',
            zh: '🔥 货舱着火：在大西洋上空的中途，主货舱的灭火系统启动。你检查传感器——温度正在迅速上升。你距离陆地还有 3 小时。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌊 Emergency Descent and Ditch: "Fire is too hot. We won\'t make 3 hours. I\'m putting her in the water while we still have control."',
                    th: '🌊 ลดระดับฉุกเฉินและลงจอดในน้ำ: "ไฟร้อนเกินไป เราอยู่ไม่ถึง 3 ชั่วโมงแน่ ผมจะเอาเครื่องลงน้ำตอนนี้ตอนที่ยังคุมเครื่องได้อยู่"',
                    zh: 'A：紧急下降并迫降水面："火势太旺了。我们撑不了 3 小时。趁我们还能控制飞机，我要在水面上迫降。"'
                },
                consequence: {
                    en: '💀 Disaster: Ditching in the open ocean at night is almost always fatal. The fire was likely contained by the Halon, and you crashed a flyable plane.',
                    th: '💀 หายนะ: การลงจอดในมหาสมุทรตอนกลางคืนมักจะจบด้วยความตาย ไฟน่าจะถูกจำกัดไว้ได้ด้วยก๊าซฮาลอน แต่คุณกลับพาเครื่องที่ยังบินได้ไปตก',
                    zh: 'A：灾难：夜间在公海迫降几乎总是致命的。火势很可能已被海龙灭火剂控制，而你却损毁了一架尚能飞行的飞机。'
                },
                stats: { competence: 10, ethics: 20, leadership: 0, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '✈️ Full Throttle to Land: "Climb to thin air to starve the fire of oxygen, fire the remaining extinguishers, and run the engines at max continuous thrust to hit the coast."',
                    th: '✈️ เร่งสุดตัวหาที่ลง: "ไต่ระดับขึ้นไปที่อากาศเบาบางเพื่อตัดออกซิเจนไฟ ฉีดถังดับเพลิงที่เหลือ และเร่งเครื่องยนต์สูงสุดเพื่อไปให้ถึงชายฝั่ง"',
                    zh: 'B：全速飞向陆地："爬升到空气稀薄处以夺走火源的氧气，启动剩余的灭火器，并以最大连续推力运行引擎以冲向海岸。"'
                },
                consequence: {
                    en: '🌟 Miracle: You landed with the floor literally melting under the passengers. Everyone evacuated. You are a national hero.',
                    th: '🌟 ปาฏิหาริย์: คุณลงจอดได้ในขณะที่พื้นห้องโดยสารกำลังไหม้เกรียม ทุกคนอพยพทัน คุณกลายเป็นฮีโร่ของชาติ',
                    zh: 'B：奇迹：着陆时，乘客脚下的地板简直都在融化。全体人员撤离。你成了国家英雄。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '📻 Rely on Auto-Pilot: "The Halon should hold it. I\'ll keep our standard speed and altitude to conserve fuel in case we need to loiter near the airport."',
                    th: '📻 พึ่งพาระบบอัตโนมัติ: "ก๊าซฮาลอนน่าจะเอาอยู่ ผมจะรักษาความเร็วและระดับความสูงมาตรฐานไว้เพื่อประหยัดน้ำมัน เผื่อเราต้องบินวนรอที่สนามบิน"',
                    zh: 'C：依赖自动驾驶："海龙灭火剂应该能撑得住。我会保持标准速度和高度以节省燃油，以防我们需要在机场附近盘旋。"'
                },
                consequence: {
                    en: '📉 Fatal Delay: The fire burns through the hydraulic lines 1 hour from land. You lose control of the plane.',
                    th: '📉 ความล่าช้าที่เลวร้าย: ไฟเผาสายไฮดรอลิกขาดก่อนถึงฝั่ง 1 ชั่วโมง คุณสูญเสียการควบคุมเครื่องยนต์และเครื่องบิน',
                    zh: 'C：致命的延迟：火势在距离陆地 1 小时路程时烧断了液压管线。你失去了对飞机的控制。'
                },
                stats: { competence: 20, ethics: 20, leadership: -10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🌬️ Depressurize the Cabin: "Pop the outflow valves. Let\'s suck all the air out of the cargo hold. If it has no air, it has no fire."',
                    th: '🌬️ ลดความดันในเครื่อง: "เปิดวาล์วระบายอากาศ ดูดอากาศออกจากระวางบรรทุกให้หมด ถ้าไม่มีอากาศ ไฟก็ดับ"',
                    zh: 'D：机舱减压："打开排气阀。让我们把货舱里的空气全部吸走。如果没有空气，就没有火。"'
                },
                consequence: {
                    en: '🧠 Bold Thinking: It slows the fire significantly. You make it to land with much less damage than expected. Boeing studies your flight.',
                    th: '🧠 ความคิดที่กล้าหาญ: มันช่วยให้ไฟช้าลงอย่างมาก คุณถึงฝั่งโดยมีความเสี่ยงน้อยกว่าที่คาด บูอิ้งถึงกับต้องเอาเที่ยวบินคุณไปศึกษา',
                    zh: 'D：大胆的想法：这显著减缓了火势。你着陆时受到的损伤远比预期的要小。波音公司研究了你的飞行过程。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'pilot_016',
        text: {
            en: '📉 Total Electrical Failure: You\'re flying at night. Suddenly, the screens go dark. No GPS, no digital attitude indicator. You have the analog standby instruments, a flashlight, and a dark cockpit.',
            th: '📉 ระบบไฟฟ้าดับทั้งหมด: คุณกำลังบินตอนกลางคืน จู่ๆ หน้าจอก็ดับมืดลง ไม่มี GPS ไม่มีมาตรวัดระดับดิจิทัล คุณเหลือเพียงเครื่องวัดสำรองแบบอนาล็อก ไฟฉาย และห้องนักบินที่มืดมิด',
            zh: '📉 全电力故障：你正在夜间飞行。突然，屏幕全部变黑。没有 GPS，没有数字姿态指示器。你只有模拟备用仪表、一支手电筒和一个漆黑的驾驶舱。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔦 Flashlight and Analog: "Grit your teeth. Hold the flashlight in your mouth to see the standby gauge. Fly by the seat of your pants and look for city lights."',
                    th: '🔦 ไฟฉายและอนาล็อก: "กัดฟันสู้ คาบไฟฉายไว้ในปากเพื่อดูเข็มอนาล็อค บินด้วยความรู้สึกและมองหาแสงไฟจากเมือง"',
                    zh: 'A：手电筒和模拟仪表："咬紧牙关。嘴里衔着手电筒看备用表盘。凭直觉飞行并寻找城市灯光。"'
                },
                consequence: {
                    en: '🌟 Raw Skill: You managed to find an airport and landed using visual references. You proved that computers don\'t fly planes—pilots do.',
                    th: '🌟 ทักษะล้วนๆ: คุณหาสนามบินเจอและลงจอดโดยใช้การมองเห็น คุณพิสูจน์แล้วว่าคอมพิวเตอร์ไม่ได้บินเก่งไปกว่านักบิน',
                    zh: 'A：原始技能：你成功找到了一个机场，并利用视觉参考降落。你证明了飞机的驾驶者是飞行员，而非电脑。'
                },
                stats: { competence: 50, ethics: 10, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '📻 Emergency Battery: "Check the RAT (Ram Air Turbine). Deploy it to give us basic emergency power for the radios and flight instruments."',
                    th: '📻 แบตเตอรี่ฉุกเฉิน: "เช็ก RAT (กังหันลมฉุกเฉิน) กางมันออกมาเพื่อให้มีไฟฟ้าฉุกเฉินมาใช้กับวิทยุและเครื่องวัด"',
                    zh: 'B：应急电池："检查冲压空气涡轮（RAT）。部署它为我们的无线电和飞行仪表提供基本的应急电力。"'
                },
                consequence: {
                    en: '🧠 Technical Knowledge: You remembered the emergency turbine. It gives you just enough power to fly an ILS approach. Safety restored.',
                    th: '🧠 ความรู้ทางเทคนิค: คุณจำกังหันลมฉุกเฉินได้ มันให้พลังงานพอที่จะบินเข้าหาด้วยระบบ ILS ความปลอดภัยกลับคืนมา',
                    zh: 'B：技术知识：你记起了应急涡轮机。它为你提供了恰好足够的电力来执行 ILS 进场。安全恢复。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '📱 Use Your iPad: "I have ForeFlight on my iPad with an internal GPS. I\'ll use it as our primary navigation and attitude source."',
                    th: '📱 ใช้ iPad: "ผมมีแอป ForeFlight ใน iPad ที่มี GPS ในตัว ผมจะใช้มันเป็นเครื่องนำทางหลักและดูระดับเครื่องแทนหน้าจอที่ดับไป"',
                    zh: 'C：使用你的 iPad："我的 iPad 上装有带内部 GPS 的 ForeFlight。我会用它作为我们的主要导航和姿态参考。"'
                },
                consequence: {
                    en: '💡 Modern Solution: It works! The iPad\'s AHRS (Attitude Heading Reference System) provides a stable horizon. You land comfortably.',
                    th: '💡 ทางแก้สมัยใหม่: ได้ผลดี! ระบบ AHRS ใน iPad ช่วยให้เห็นเส้นขอบฟ้าที่เสถียร คุณลงจอดได้อย่างสบายใจ',
                    zh: 'C：现代方案：奏效了！iPad 的姿态航向参考系统（AHRS）提供了一个稳定的地平线。你轻松降落。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🆘 Panic: "I can\'t see anything! We\'re going into a graveyard spiral! I\'m pulling the parachute (if BRS equipped)."',
                    th: '🆘 ตื่นตระหนก: "ผมมองไม่เห็นอะไรเลย! เครื่องกำลังควงสว่านดิ่งลงเหว! ผมจะดึงร่มชูชีพแล้วนะ (ถ้าเครื่องมีระบบ BRS)"',
                    zh: 'D：惊慌："我什么也看不见！我们要陷入死亡螺旋了！我要拉开降落伞（如果配备了整机降落伞系统 BRS）。"'
                },
                consequence: {
                    en: '💀 Inexperience: You lost spatial awareness. Without a horizon, you banked the plane into the ground while trying to fix the radio.',
                    th: '💀 ขาดประสบการณ์: คุณสูญเสียการรับรู้ทิศทาง เมื่อไม่มีเส้นขอบฟ้า คุณพาเครื่องเอียงพุ่งตกพื้นขณะที่พยายามซ่อมวิทยุ',
                    zh: 'D：缺乏经验：你失去了空间感知。在没有地平线参考的情况下，你边试图修理无线电，边导致飞机侧倾坠地。'
                },
                stats: { competence: -50, ethics: 10, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_017',
        text: {
            en: '🐦 High Altitude Bird Strike: You\'re at 30,000 feet. A stray goose hits the engine. There\'s a loud bang and severe vibrations. The EGT (Exhaust Gas Temp) is redlining.',
            th: '🐦 นกชนที่เพดานบินสูง: คุณอยู่ที่ระดับ 30,000 ฟุต นกห่านพลัดหลงพุ่งชนเครื่องยนต์ เกิดเสียงดังสนั่นและตัวเครื่องสั่นอย่างรุนแรง อุณหภูมิไอเสีย (EGT) พุ่งทะลุขีดแดง',
            zh: '🐦 高空鸟击：你正处于 30,000 英尺的高空。一只迷路的鹅撞上了引擎。发出了一声巨响并伴有剧烈震动。排气温度（EGT）已达到红线。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Immediate Shutdown: "Throttle back to idle, then shut down that engine. We don\'t want it exploding and taking the wing with it. Declare an emergency."',
                    th: '🛑 ดับเครื่องทันที: "เบาเครื่องมาที่รอบเดินเบา แล้วดับเครื่องยนต์นั้นซะ เราไม่อยากให้มันระเบิดจนพัดปีกหลุดไป ประกาศภาวะฉุกเฉินด่วน"',
                    zh: 'A：立即关闭："将油门切回怠速，然后关闭那个引擎。我们不想让它爆炸并连带毁掉机翼。宣布紧急状态。"'
                },
                consequence: {
                    en: '🛡️ Safe Handling: The vibrations stop. You fly on one engine to the nearest maintenance base. Professional and calm.',
                    th: '🛡️ การจัดการที่ปลอดภัย: ตัวเครื่องหยุดสั่น คุณบินด้วยเครื่องยนต์เดียวไปยังฐานซ่อมบำรุงที่ใกล้ที่สุด มีความเป็นมืออาชีพและเยือกเย็น',
                    zh: 'A：安全处理：震动停止了。你用单发飞行到了最近的维修基地。表现专业且冷静。'
                },
                stats: { competence: 40, ethics: 20, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '📉 Partial Power: "Keep it running at low thrust to maintain our altitude. We need that engine to stay above the mountains ahead."',
                    th: '📉 ให้กำลังบางส่วน: "เลี้ยงให้มันรันที่กำลังต่ำไว้เพื่อรักษาระดับความสูง เราต้องพึ่งเครื่องยนต์นั้นเพื่อให้ข้ามภูเขาข้างหน้าไปได้"',
                    zh: 'B：部分动力："让它以低推力运行以保持高度。我们需要那个引擎来飞越前方的山脉。"'
                },
                consequence: {
                    en: '🔥 Engine Fire: Running a damaged engine causes a major fire inside the cowling. Now you have two emergencies.',
                    th: '🔥 ไฟไหม้เครื่องยนต์: การรันเครื่องที่เสียหายทำให้เกิดไฟไหม้หนักขึ้นในฝาครอบเครื่องยนต์ ตอนนี้คุณเจองานงอกสองอย่างเลย',
                    zh: 'B：引擎着火：运行受损的引擎导致发动机罩内发生大火。现在你面临两个紧急情况。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🔍 Check the Visuals: "Send the first officer to the passenger cabin to look out the window. Tell me if the engine is shedding parts or leaking oil."',
                    th: '🔍 เช็กด้วยสายตา: "ส่งนักบินผู้ช่วยไปที่ห้องโดยสารให้มองออกไปนอกหน้าต่าง บอกผมทีว่าเครื่องยนต์มีชิ้นส่วนหลุดหรือน้ำมันรั่วไหม"',
                    zh: 'C：视觉检查："派副驾驶去客舱，透过窗户观察。告诉我引擎是否在掉落零件或漏油。"'
                },
                consequence: {
                    en: '🤝 Good CRM: You get real-time info. The engine is missing half its fan blades. You shut it down and divert. Perfect decision-making.',
                    th: '🤝 ระบบจัดการที่ดี (CRM): คุณได้ข้อมูลแบบเรียลไทม์ ใบพัดหายไปครึ่งหนึ่ง คุณจึงดับเครื่องแล้วเปลี่ยนเส้นทาง เป็นการตัดสินใจที่สมบูรณ์แบบ',
                    zh: 'C：良好的 CRM：你获得了实时信息。引擎失去了一半的扇叶。你关闭了引擎并改道。完美的决策。'
                },
                stats: { competence: 50, ethics: 20, leadership: 50, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🚀 Max Thrust: "We need more power to stabilize! Push both throttles forward!"',
                    th: '🚀 อัดกำลังสูงสุด: "เราต้องการกำลังเพิ่มเพื่อประคองเครื่อง! ดันคันเร่งทั้งสองไปข้างหน้าให้สุด!"',
                    zh: 'D：最大推力："我们需要更多动力来稳定！将两具油门都推到底！"'
                },
                consequence: {
                    en: '💥 Catastrophic Failure: The damaged engine disintegrates, sending shrapnel into the fuselage. You lose cabin pressure.',
                    th: '💥 ความล้มเหลวที่หายนะ: เครื่องยนต์ที่พังอยู่แล้วแตกกระจาย ส่งสะเก็ดระเบิดพุ่งเข้าใส่ตัวเครื่อง คุณสูญเสียความดันในห้องโดยสาร',
                    zh: 'D：灾难性故障：受损的发动机解体，碎片飞进机身。你失压了。'
                },
                stats: { competence: -40, ethics: 10, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_018',
        text: {
            en: '🏥 The Medical Emergency: A passenger has a severe heart attack. A doctor on board says he will die if you don\'t land in 20 minutes. The nearest airport is an Air Force base with a short runway and restricted airspace.',
            th: '🏥 เหตุฉุกเฉินทางการแพทย์: ผู้โดยสารมีอาการหัวใจวายรุนแรง หมอบนเครื่องบอกว่าเขาจะตายถ้าไม่ลงจอดใน 20 นาที สนามบินที่ใกล้ที่สุดคือฐานทัพอากาศที่มีรันเวย์สั้นและเป็นเขตหวงห้ามทางอากาศ',
            zh: '🏥 医疗紧急情况：一名乘客突发严重心脏病。机上的一位医生说，如果你不在 20 分钟内降落，他就会没命。最近的机场是一个跑道较短且领空受限的空军基地。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎖️ Target the Air Base: "Declare a Medical Mayday. Fly straight for the base. Don\'t wait for permission, just tell them we\'re coming."',
                    th: '🎖️ มุ่งหน้าสู่ฐานทัพอากาศ: "ประกาศเมย์เดย์ทางการแพทย์ บินตรงไปที่ฐานทัพเลย ไม่ต้องรออนุญาต แค่บอกเขาว่าเรากำลังจะไป"',
                    zh: 'A：瞄准空军基地："宣布医疗求救。直飞基地。不要等待许可，直接告诉他们我们要降落。"'
                },
                consequence: {
                    en: '🌟 Life Saved: The military facilitates the landing. Ambulances meet the plane. The passenger survives. You might face an inquiry, but you saved a life.',
                    th: '🌟 ช่วยชีวิตสำเร็จ: ทหารช่วยอำนวยความสะดวกในการลงจอด รถพยาบาลมารอรับที่เครื่อง ผู้โดยสารรอดชีวิต คุณอาจต้องถูกสอบสวนแต่คุณช่วยชีวิตคนไว้ได้',
                    zh: 'A：拯救生命：军方协助了降落。救护车在飞机旁等候。乘客生还。你可能会面临调查，但你挽救了一条人命。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏢 Major Airport: "Speed up. We\'ll head to the major international airport 40 minutes away. They have better medical facilities and a longer runway."',
                    th: '🏢 สนามบินหลัก: "เร่งความเร็ว เราจะไปสนามบินนานาชาติที่อยู่ห่างไป 40 นาที ที่นั่นมีอุปกรณ์การแพทย์ดีกว่าและรันเวย์ยาวกว่า"',
                    zh: 'B：主要机场："加速。我们将前往 40 分钟路程外的大型国际机场。那里有更好的医疗设施和更长的跑道。"'
                },
                consequence: {
                    en: '💀 Too Late: The passenger dies blocks from the hospital. The doctor says the extra 20 minutes was the difference.',
                    th: '💀 สายไปเสียแล้ว: ผู้โดยสารเสียชีวิตก่อนถึงมือหมอ หมอบอกว่าเวลา 20 นาทีที่เสียไปคือตัวตัดสินความตาย',
                    zh: 'B：太迟了：乘客在距离医院几个街区的地方去世了。医生说多出的那 20 分钟就是生与死的差别。'
                },
                stats: { competence: 30, ethics: 10, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📞 Telemedicine: "Patch the doctor on board through to the company\'s medical consultants via satellite phone. Maybe they can stabilize him for the longer flight."',
                    th: '📞 การแพทย์ทางไกล: "ต่อโทรศัพท์ดาวเทียมให้หมอบนเครื่องคุยกับที่ปรึกษาทางการแพทย์ของบริษัท บางทีเขาอาจจะช่วยประคองอาการให้บินไปต่อได้ยาวกว่านี้"',
                    zh: 'C：远程医疗："通过卫星电话将机上的医生连线到公司的医疗顾问。也许他们能稳定住病人的情况，以便进行更长时间的飞行。"'
                },
                consequence: {
                    en: '🧠 Calculated Risk: The specialists guide the onboard doctor through a complex procedure. The passenger stabilizes. You land at the major airport safely.',
                    th: '🧠 ความเสี่ยงที่คำนวณมาแล้ว: ผู้เชี่ยวชาญช่วยบอกขั้นตอนที่ซับซ้อนให้หมอบนเครื่อง ผู้โดยสารอาการคงที่ คุณลงจอดที่สนามบินหลักได้อย่างปลอดภัย',
                    zh: 'C：经过计算的挑战：专家们指导机上的医生完成了一次复杂的操纵。乘客的情况稳定了下来。你安全降落在了主要机场。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Policy First: "I can\'t land at a military base without an engine failure. It\'s against company policy and national security. Stay the course."',
                    th: '🤷 กฎต้องมาก่อน: "ผมลงจอดที่ฐานทัพทหารโดยที่เครื่องยนต์ไม่ได้เสียไม่ได้ มันผิดกฎบริษัทและความมั่นคงของชาติ บินตามเส้นทางเดิมต่อไป"',
                    zh: 'D：政策优先："没有引擎故障我不能在军事基地降落。这违反了公司政策和国家安全。保持航线。"'
                },
                consequence: {
                    en: '📉 Reputation Ruined: The story hits the news. You are seen as a heartless bureaucrat. You are forced to resign.',
                    th: '📉 เสียชื่อเสียง: เรื่องนี้กลายเป็นข่าว คุณถูกมองว่าเป็นพวกบ้ากฎระเบียบจนไร้หัวใจ สุดท้ายคุณถูกกดดันให้ลาออก',
                    zh: 'D：名誉扫地：此事登上了新闻。你被视为一个冷酷无情的官僚。你被迫辞职。'
                },
                stats: { competence: 10, ethics: -50, leadership: -40, innovation: -10 }
            }
        ]
    },
    {
        id: 'pilot_019',
        text: {
            en: '⛽ The Fuel Imbalance: You notice the left wing tank is empty while the right is full. The plane is banking left. You suspect a leak in the left fuel line.',
            th: '⛽ น้ำมันไม่สมดุล: คุณสังเกตเห็นถังน้ำมันปีกซ้ายว่างเปล่าในขณะที่ปีกขวาเต็ม เครื่องเริ่มเอียงไปทางซ้าย คุณสงสัยว่ามีน้ำมันรั่วในท่อซ้าย',
            zh: '⛽ 燃油不平衡：你注意到左翼油箱已经空了，而右翼油箱还是满的。飞机正向左倾斜。你怀疑左燃油管路发生了泄漏。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔄 Crossfeed: "Open the crossfeed valve to feed both engines from the right tank. We need to balance the plane."',
                    th: '🔄 ครอสฟีด: "เปิดวาล์วครอสฟีดเพื่อให้น้ำมันจากถังขวาไปเลี้ยงทั้งสองเครื่องยนต์ เราต้องทำให้เครื่องสมดุล"',
                    zh: 'A：交叉进油："打开交叉进油阀，从右油箱为两具发动机供油。我们需要平衡飞机。"'
                },
                consequence: {
                    en: '💀 Engine Flameout: Since the leak was active, opening the crossfeed just sucked all the fuel from your good tank and dumped it out the leak. Now both engines quit.',
                    th: '💀 เครื่องยนต์ดับ: เนื่องจากมีการรั่วอยู่จริง การเปิดครอสฟีดจึงเป็นการดูดน้ำมันจากถังที่ดีไปทิ้งผ่านรูรั่วจนหมด ตอนนี้เครื่องยนต์ดับทั้งสองเครื่องเลย',
                    zh: 'A：发动机熄火：由于泄漏一直在发生，打开交叉进油只是吸光了你完好油箱里的全部燃油，并将其排出了漏洞。现在两具引擎都熄火了。'
                },
                stats: { competence: 10, ethics: 20, leadership: 0, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔍 Verify the Leak: "Don\'t crossfeed yet! Check the fuel flow indicators and look out the window for a vapor trail. If it\'s a leak, keep the systems isolated."',
                    th: '🔍 ตรวจสอบการรั่ว: "อย่าเพิ่งครอสฟีด! เช็กมาตรวัดการไหลของน้ำมันและมองออกไปนอกหน้าต่างว่ามีคราบไอระเหยไหม ถ้ามันรั่วจริง ต้องแยกส่วนระบบไว้"',
                    zh: 'B：确认泄漏："先不要交叉进油！检查燃油流量指示器，并看向窗外寻找蒸汽尾迹。如果是泄漏，保持系统隔离。"'
                },
                consequence: {
                    en: '🛡️ Professional Diagnosis: You confirmed the leak. You landed safely using only fuel from the good tank. You prevented a dual-engine failure.',
                    th: '🛡️ การวินิจฉัยแบบมืออาชีพ: คุณยืนยันว่ามีการรั่วจริง และลงจอดได้อย่างปลอดภัยโดยใช้น้ำมันจากถังที่ดีอย่างเดียว คุณช่วยป้องกันเครื่องยนต์ดับคู่ไว้ได้',
                    zh: 'B：专业诊断：你确认了泄漏。你仅利用完好油箱的燃油便安全降落。你防止了双发同时熄火。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ Side-Slip: "I\'ll fly the plane in a side-slip to keep the heavy wing up. It\'s draggy, but it buys us time to reach an airport."',
                    th: '⚖️ ไซด์-สลิป: "ผมจะบินแบบเอียงตัว (side-slip) เพื่อพยุงปีกที่หนักไว้ มันจะต้านลมหน่อยแต่ช่วยซื้อเวลาให้เราไปถึงสนามบิน"',
                    zh: 'C：侧滑："我会以侧滑姿态驾驶飞机，以保持沉重的机翼向上。虽然阻力很大，但能为我们到达机场赢得时间。"'
                },
                consequence: {
                    en: '🧠 Airman Skill: You managed the balance issue with pure flying technique. Passengers were a bit sick from the crabbed angle, but they are alive.',
                    th: '🧠 ทักษะนักบิน: คุณจัดการปัญหาความสมดุลด้วยเทคนิคการบินล้วนๆ ผู้โดยสารอาจจะเมารถบ้างเพราะบินเอียงๆ แต่ทุกคนปลอดภัย',
                    zh: 'C：飞行技能：你完全凭借飞行技术处理了平衡问题。乘客们因为飞机的侧侧交角而有些晕机，但他们都活着。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '📻 ATC Help: "Ask the tower for a fuel calculation. I\'m too stressed to do the math myself."',
                    th: '📻 ขอกำลังเสริม ATC: "ขอให้หอคำนวณน้ำมันให้ที ผมเครียดจนคิดเลขเองไม่ไหวแล้ว"',
                    zh: 'D：ATC 协助："请塔台帮我计算燃油。我压力太大了，没法自己计算。"'
                },
                consequence: {
                    en: '📉 Poor Command: ATC doesn\'t know your specific fuel burn rates. Their bad advice leads you to run out of fuel 5 miles short.',
                    th: '📉 ความเป็นผู้นำต่ำ: ATC ไม่สูทราบอัตราการเผาผลาญน้ำมันที่แน่นอนของคุณ คำแนะนำที่ผิดพลาดทำให้คุณน้ำมันหมดก่อนถึงรันเวย์ 5 ไมล์',
                    zh: 'D：指挥不利：航空交通管制（ATC）并不了解你具体的燃油消耗率。他们拙劣的建议导致你在距离跑道 5 英里处耗光了燃油。'
                },
                stats: { competence: 10, ethics: 10, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_020',
        text: {
            en: '🛬 The Stuck Flaps: You\'re on approach and the flaps get stuck at 0 degrees. You have to land with high speed to avoid stalling. The runway is wet.',
            th: '🛬 แฟลปค้าง: คุณกำลังจะลงจอดแต่แฟลปค้างที่ 0 องศา คุณต้องลงจอดด้วยความเร็วสูงเพื่อไม่ให้เครื่องร่วง และที่สำคัญ รันเวย์เปียกด้วย',
            zh: '🛬 襟翼卡住：你正在进场，但襟翼卡在了 0 度位置。你必须以高速降落以避免失速。且跑道是湿的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏎️ Fast and Low: "Calculate the new Vref speed. Fly it onto the runway and use maximum brakes and reverse thrust immediately. Don\'t flare too much."',
                    th: '🏎️ เร็วและต่ำ: "คำนวณความเร็ว Vref ใหม่ พุ่งลงไปที่รันเวย์แล้วเหยียบเบรกให้สุดพร้อมเปิดรีเวิร์สทรัสต์ทันที อย่าเชิดหัวนานเกินไป"',
                    zh: 'A：高速低平进场："计算新的参考速度（Vref）。将其飞向跑道，并立即使用最大制动和反推力。不要拉平过度。"'
                },
                consequence: {
                    en: '🌟 Pro Landing: You stopped with 100 feet of runway to spare. Your tires are smoking, but you handled the emergency perfectly.',
                    th: '🌟 การลงจอดอย่างเซียน: คุณหยุดได้โดยเหลือรันเวย์แค่ 100 ฟุต ยางล้อควันโขมงแต่คุณจัดการเหตุฉุกเฉินนี้ได้สมบูรณ์แบบ',
                    zh: 'A：专业降落：你在剩余 100 英尺跑道的地方停了下来。轮胎在冒烟，但你完美地处理了这次紧急情况。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '💧 Hydroplaning Fear: "I\'m afraid of sliding off. I\'ll try to land as slowly as possible at 0 flaps to protect the brakes."',
                    th: '💧 กลัวเหินน้ำ: "ผมกลัวเครื่องไถลออกนอกทาง ผมจะพยายามลงให้ช้าที่สุดเท่าที่จะทำได้ที่แฟลป 0 องศาเพื่อถนอมเบรก"',
                    zh: 'B：担心滑水："我担心会滑出去。我会尝试在 0 度襟翼下尽可能缓慢地降落，以保护刹车。"'
                },
                consequence: {
                    en: '💥 Stall Crash: You got too slow. The wing lost lift 50 feet above the ground. The plane slammed down and broke the wing spar.',
                    th: '💥 เครื่องร่วง: คุณบินช้าเกินไป ปีกสูญเสียแรงยกที่ความสูง 50 ฟุตเหนือพื้น เครื่องกระแทกพื้นจนปีกหัก',
                    zh: 'B：失速坠毁：你的速度太慢了。机翼在离地 50 英尺处失去了升力。飞机重重摔下，折断了翼梁。'
                },
                stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🏗️ Diversion to Long Runway: "We need more room. I\'m diverting to the regional airport 50 miles away—it has a 12,000 ft runway. Safety over convenience."',
                    th: '🏗️ เปลี่ยนไปรันเวย์ยาว: "เราต้องการพื้นที่เพิ่ม ผมจะยอมเปลี่ยนไปสนามบินภูมิภาคที่อยู่ห่างไป 50 ไมล์ ที่นั่นมีรันเวย์ยาว 12,000 ฟุต ความปลอดภัยต้องมาก่อนความสะดวก"',
                    zh: 'C：改道至长跑道："我们需要更大的空间。我要改道前往 50 英里外的地区机场——那里有 12,000 英尺长的跑道。安全重于便利。"'
                },
                consequence: {
                    en: '⚖️ Solid Judgment: You landed safely with plenty of room. The company is annoyed about the extra fuel, but the safety officer praises you.',
                    th: '⚖️ การวิจารณ์ที่เฉียบแหลม: คุณลงจอดได้อย่างปลอดภัยและมีพื้นที่เหลือเฟือ บริษัทอาจตะหงุดหงิดเรื่องค่าน้ำมันแต่เจ้าหน้าที่ความปลอดภัยชมคุณยกใหญ่',
                    zh: 'C：稳健的判断：你安全降落，且空间充裕。公司对额外的油耗感到不满，但安全官员赞赏了你。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔧 Hand Crank: "Get the manual. I\'ll have the co-pilot try to crank them down manually while I fly. We\'ll keep orbiting until they come down."',
                    th: '🔧 หมุนด้วยมือ: "หยิบคู่มือมา ผมจะให้ผู้ช่วยนักบินลองพยายามหมุนแฟลปด้วยมือขณะที่ผมบิน เราจะบินวนไปเรื่อยๆ จนกว่ามันจะลงมา"',
                    zh: 'D：手动摇杆："拿出手册。在我飞行时，让副驾驶尝试手动摇下襟翼。我们会一直盘旋直到它们降下来。"'
                },
                consequence: {
                    en: '🧠 Persistence: It took 20 minutes and a sore arm, but you got 15 degrees of flaps. The landing was normal. Excellent resource management.',
                    th: '🧠 ความพยายาม: ใช้เวลา 20 นาทีจนแขนล้า แต่ก็ได้แฟลปมา 15 องศา ลงจอดได้ตามปกติ เป็นการจัดการทรัพยากรที่ยอดเยี่ยม',
                    zh: 'D：坚持不懈：花了 20 分钟不仅手臂酸痛，你还摇下了 15 度的襟翼。着陆正常。出色的资源管理。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'pilot_021',
        text: {
            en: '🌋 Volcanic Ash: You are flying a long-haul route when a nearby volcano erupts. The ash cloud is moving fast. Radar doesn\'t see ash, but you notice a "St. Elmo\'s Fire" glow on the windshield and a faint smell of sulfur.',
            th: '🌋 เถ้าภูเขาไฟ: คุณกำลังบินเส้นทางระยะไกลแล้วจู่ๆ ภูเขาไฟแถวนั้นก็ปะทุขึ้นมา กลุ่มเถ้าถ่านเคลื่อนที่เร็วมาก เรดาร์มองไม่เห็นเถ้า แต่มองเห็นแสงวูบวาบ "St. Elmo\'s Fire" บนกระจกหน้าและเริ่มได้กลิ่นกำมะถันจางๆ',
            zh: '🌋 火山灰：你正在执飞长途航线，此时附近的一座火山爆发了。灰云移动速度很快。雷达看不到火山灰，但你注意到挡风玻璃上有“圣艾尔摩之火”的光芒，并闻到一股淡淡的硫磺味。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔄 Immediate 180: "Turn the aircraft 180 degrees immediately. Ash can flame out the engines in minutes. We are exiting the area now."',
                    th: '🔄 กลับลำทันที: "เลี้ยวกลับ 180 องศาทันที เถ้าภูเขาไฟทำให้เครื่องยนต์ดับได้ภายในไม่กี่นาที เราต้องออกจากพื้นที่นี้เดี๋ยวนี้"',
                    zh: 'A：立即掉头：“立即将飞机转向 180 度。火山灰可能在几分钟内导致发动机熄火。我们现在就撤离该区域。”'
                },
                consequence: {
                    en: '🛡️ Engines Saved: You exited the cloud just in time. Inspection shows minor scouring, but no permanent damage. You saved a $200M jet.',
                    th: '🛡️ รักษาเครื่องยนต์: คุณออกจากกลุ่มเถ้าได้ทันเวลา ผลตรวจออกมาว่ามีการขัดสีนิดหน่อยแต่ไม่มีความเสียหายถาวร คุณช่วยเครื่องบินลำละ 200 ล้านดอลลาร์ไว้ได้',
                    zh: '🛡️ 发动机保住了：你及时撤出了灰云。检查显示轻微磨损，但没有永久性损坏。你保住了一架价值 2 亿美元的喷气机。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '⬆️ Climb Above: "Increase power and climb to Flight Level 410. Most ash clouds stay low. We can probably clear it and stay on schedule."',
                    th: '⬆️ ไต่ระดับขึ้นไป: "เพิ่มกำลังเครื่องยนต์แล้วไต่ไปที่ระดับเพดานบิน 410 กลุ่มเถ้าส่วนใหญ่จะอยู่ต่ำ เราน่าจะข้ามมันไปได้และบินตามกำหนดการต่อ"',
                    zh: 'B：向上爬升：“增加功率并爬升至 410 飞行高度层。大多数灰云停留位置较低。我们或许能越过它并保持准时。”'
                },
                consequence: {
                    en: '💀 Engine Failure: As you increased power, the ash melted into glass inside the turbine. Both engines failed. You are now a glider in the dark.',
                    th: '💀 เครื่องยนต์ดับ: พอคุณเร่งเครื่อง เถ้าภูเขาไฟก็ละลายกลายเป็นกระจกเคลือบข้างในกังหัน เครื่องยนต์ดับทั้งสองข้าง ตอนนี้คุณกำลังขับเครื่องบินที่กลายเป็นเครื่องร่อนกลางความมืด',
                    zh: 'B：发动机故障：当你增加功率时，火山灰在涡轮内部融化成了玻璃。两台发动机都熄火了。你现在成了黑暗中的滑翔机。'
                },
                stats: { competence: 10, ethics: 10, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Glide Descent: "Reduce power to idle to minimize heat. Descend to find clear air beneath the ash. Keep the engines cool to prevent glass formation."',
                    th: '🧠 ร่อนลง: "ลดกำลังเครื่องยนต์ลงให้เบาสุดเพื่อลดความร้อน ร่อนลงหาอากาศที่เคลียร์ข้างล่างกลุ่มเถ้า รักษาเครื่องยนต์ให้เย็นเข้าไว้เพื่อไม่ให้เถ้าละลายเป็นกระจก"',
                    zh: 'C：滑翔下降：“将功率减至怠速以最大限度减少热量。下降并在火山灰下方寻找清晰空域。保持发动机冷却以防止玻璃形成。”'
                },
                consequence: {
                    en: '💡 Technical Masterclass: By reducing heat, the ash didn\'t melt. You safely maneuvered out of the plume. Boeing uses your flight data for training.',
                    th: '💡 มาสเตอร์คลาสเทคนิค: การลดความร้อนทำให้เถ้าไม่ละลาย คุณพาเครื่องออกจากกลุ่มควันได้อย่างปลอดภัย โบอิ้งเอาข้อมูลการบินของคุณไปใช้ฝึกนักบินคนอื่นเลยนะ',
                    zh: 'C：技术大师课：通过降温，火山灰没有融化。你安全地操纵飞机飞出了烟羽。波音公司将你的飞行数据用于教学。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Request Vector: "Call ATC and ask for a vector around the area. Trust their weather radar more than my eyes."',
                    th: '📞 ขอเส้นทางใหม่: "เรียกศูนย์ควบคุมการจราจร (ATC) แล้วขอเส้นทางเลี่ยงพื้นที่ เชื่อเรดาร์ของเขาดีกว่าเชื่อตาตัวเอง"',
                    zh: 'D：请求引导：“呼叫空管请求绕过该区域的引导。信任他们的气象雷达胜过信任我自己的眼睛。”'
                },
                consequence: {
                    en: '⚠️ ATC Blindness: ATC radar doesn\'t see fine ash. They told you to proceed. By the time you realize the smell is getting stronger, the engines are already surging.',
                    th: '⚠️ จุดบอดของ ATC: เรดาร์ ATC มองไม่เห็นเถ้าละเอียด เขาบอกให้คุณบินต่อไปได้ กว่าจะรู้ตัวว่ากลิ่นแรงขึ้น เครื่องยนต์ก็เริ่มกระตุกเสียแล้ว',
                    zh: 'D：空管盲点：空管雷达看不到细微火山灰。他们让你继续飞行。当你意识到气味越来越浓时，发动机已经开始喘振了。'
                },
                stats: { competence: 20, ethics: 10, leadership: -10, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_022',
        text: {
            en: '⚖️ The VIP Pressure: You are flying a private jet for a tech billionaire. A massive thunderstorm is directly over the destination airport. The billionaire demands you land anyway because he has a "$10 Billion merger" meeting in 30 minutes.',
            th: '⚖️ แรงกดดันจาก VIP: คุณกำลังขับเครื่องบินส่วนตัวให้มหาเศรษฐีเทคโนโลยี พายุฝนฟ้าคะนองรุนแรงพัดถล่มสนามบินปลายทาง มหาเศรษฐียืนยันให้คุณลงจอดให้ได้เพราะเขามีประชุม "ดีลร่วมทุนหมื่นล้าน" ในอีก 30 นาที',
            zh: '⚖️ VIP 的压力：你正在为一位科技亿万富翁驾驶私人飞机。目的地机场正上方笼罩着巨大的雷暴。亿万富翁要求你无论如何都要着陆，因为他在 30 分钟后有一场“百亿美元并购”会议。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Divert: "Sir, I am the Captain. We are diverting to the alternate airport for safety. Your life is worth more than a merger. Prepare for landing at the alternate."',
                    th: '🚫 เปลี่ยนสนามบิน: "ท่านครับ ผมคือกัปตัน เพื่อความปลอดภัยเราจะเปลี่ยนไปลงสนามบินสำรองแทน ชีวิตท่านสำคัญกว่าดีลธุรกิจครับ เตรียมตัวลงจอดที่สนามบินสำรองได้เลย"',
                    zh: 'A：航向转移：“先生，我是机长。为了安全，我们将改道前往备降机场。您的生命比并购案更值钱。准备在备降机场着陆。”'
                },
                consequence: {
                    en: '🛡️ Safety Standard: He fires you on the tarmac, but the aviation community hails you. A неделю later, another jet tried that landing and crashed. You made the right call.',
                    th: '🛡️ มาตรฐานความปลอดภัย: เขาไล่คุณออกทันทีที่ลงจอด แต่คนในวงการการบินยกย่องคุณมาก หนึ่งสัปดาห์ต่อมา มีเครื่องอีกลำพยายามแลนดิ้งในพายุแบบเดียวกันแล้วตก คุณตัดสินใจถูกแล้ว',
                    zh: 'A：安全准则：他在停机坪上解雇了你，但航空界对你表示赞赏。一周后，另一架喷气机尝试在那对着陆时坠毁。你做出了正确的决定。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛬 Attempt the Landing: "He\'s my boss and I need this job. I\'ll try to find a gap in the storm cells and get him there on time."',
                    th: '🛬 พยายามลงจอด: "เขาคือนายจ้างและฉันต้องเลี้ยงชีพ ฉันจะพยายามหาช่องว่างระหว่างกลุ่มฝนแล้วพาเขาไปส่งให้ทันเวลา"',
                    zh: 'B：尝试着陆：“他是我的老板，我需要这份工作。我会尝试在风暴细胞间寻找间隙，按时把他送到那里。”'
                },
                consequence: {
                    en: '💀 Microburst: As you approached, a microburst slammed the aircraft into the runway. Everyone survived with injuries, but the jet is a total loss. Your license is revoked.',
                    th: '💀 ไมโครเบิร์สต: ระหว่างพยายามลงจอด ลมกดรุนแรง (Microburst) กระแทกเครื่องบินลงกับรันเวย์ ทุกคนรอดแต่บาดเจ็บ เครื่องพังยับเยิน และใบอนุญาตคุณถูกยึดถาวร',
                    zh: 'B：微下击暴流：当你接近时，一股微下击暴流将飞机猛撞向跑道。所有人虽然受伤但幸存，但喷气机彻底报废。你的执照被吊销。'
                },
                stats: { competence: 20, ethics: 10, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Tactical Hold: "Tell him we\'ll hold for 15 minutes. Use the real-time weather data to show him the storm front. Negotiate a fast car transport from a nearby smaller strip."',
                    th: '🧠 รอจังหวะ: "บอกเขาว่าเราจะรอบินวน 15 นาที เปิดแผนที่อากาศเรียลไทม์ให้เขาดูแนวพายุ แล้วเสนอให้ไปลงที่สนามบินเล็กๆ ใกล้ๆ แล้วจัดรถรับส่งที่วิ่งเร็วๆ แทน"',
                    zh: 'C：战术等待：“告诉他我们将等待 15 分钟。使用实时气象数据向他展示风暴前缘。协商从附近的较小停机坪安排快速汽车运送。”'
                },
                consequence: {
                    en: '💡 Negotiation Win: He accepts. You land at a rural strip 10 miles away. He makes his meeting via video call in the car. He gives you a bonus for the creative solution.',
                    th: '💡 ชนะด้วยการเจรจา: เขายอมรับ คุณลงจอดที่รันเวย์ท้องถิ่นห่างออกไป 10 ไมล์ เขาเข้าประชุมผ่านวิดีโอคอลบนรถได้ทันเวลาพอดี และยังได้โบนัสเพิ่มจากวิธีแก้ปัญหาที่สร้างสรรค์นี้ด้วย',
                    zh: 'C：谈判胜利：他接受了。你在 10 密耳外的一个乡村停机坪着陆。他在车里通过视频会议参加了会议。他因你创意的解决方案给了你奖金。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Let the Co-Pilot Decide: "I\'m too stressed. First Officer, what do you think? It\'s your call."',
                    th: '🤷 ให้ผู้ช่วยตัดสินใจ: "ฉันเครียดเกินไปแล้ว นักบินผู้ช่วย คุณคิดว่าไง? คุณตัดสินใจเลยแล้วกัน"',
                    zh: 'D：让副驾驶决定：“我压力太大了。副驾驶，你怎么看？你说了算。”'
                },
                consequence: {
                    en: '📉 Leadership Failure: The Co-Pilot is intimidated by the billionaire and tries to land. You end up in a dangerous crosswind situation. Total loss of authority.',
                    th: '📉 ความล้มเหลวในความเป็นผู้นำ: นักบินผู้ช่วยเกรงใจมหาเศรษฐีเลยพยายามจะลงจอด คุณลงเอยด้วยสถานการณ์ลมกรรโชกข้างที่อันตรายมาก และคุณสูญเสียอำนาจการสั่งการไปโดยปริยาย',
                    zh: 'D：领导力失败：副驾驶被亿万富翁吓到了并尝试着陆。你最终陷入了危险的侧风情况。彻底丧失威信。'
                },
                stats: { competence: 10, ethics: 20, leadership: -50, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_023',
        text: {
            en: '🚢 The Hudson Scenario: Both engines flamed out at 3,000 feet due to bird strikes. You are over a dense city with no airports in range. You have about 90 seconds to decide.',
            th: '🚢 สถานการณ์แม่น้ำฮัดสัน: เครื่องยนต์ดับทั้งสองข้างที่ระดับ 3,000 ฟุตเพราะนกบินชน คุณอยู่เหนือเมืองที่หนาแน่นและไม่มีสนามบินอยู่ในระยะที่จะร่อนไปถึง คุณมีเวลาตัดสินใจแค่ 90 วินาที',
            zh: '🚢 哈德逊场景：由于鸟群撞击，两台发动机在 3000 英尺高度熄火。你正处于密集的城市上空，航程内没有机场。你有大约 90 秒的时间做出决定。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌊 River Ditching: "Head for the river. It\'s the only flat space. Configure for a water landing and tell the crew to brace. Professionalism is maintaining control."',
                    th: '🌊 ลงจอดในแม่น้ำ: "มุ่งหน้าไปที่แม่น้ำ นั่นคือที่เดียวที่ราบเรียบพอ เตรียมระบบสำหรับการลงจอดบนน้ำและบอกทีมงานให้เตรียมรับแรงกระแทก ความเป็นมืออาชีพคือการรักษาการควบคุมไว้จนนาทีสุดท้าย"',
                    zh: 'A：河流迫降：“前往河流。那是唯一的平坦空间。配置好水面着陆模式，并告诉机组人员做好防冲击准备。专业精神就是保持控制。”'
                },
                consequence: {
                    en: '🛡️ Miracle Save: You landed perfectly. Everyone survived. You are an international hero and the textbook example of airmanship.',
                    th: '🛡️ ปาฏิหาริย์รอดชีวิต: คุณลงจอดได้อย่างสมบูรณ์แบบ ทุกคนรอดชีวิต คุณกลายเป็นฮีโร่ระดับโลกและเป็นตัวอย่างในตำราเรียนวิชาการบินเลยล่ะ',
                    zh: '🛡️ 奇迹营救：你着陆得非常完美。所有人幸存。你成了国际英雄，是飞行技术的教科书案例。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛣️ Highway Landing: "The river is too cold and dangerous. I\'m going for that wide highway. The cars will just have to move."',
                    th: '🛣️ ลงจอดบนทางหลวง: "แม่น้ำมันหนาวและอันตรายเกินไป ฉันจะลงจอดบนทางหลวงกว้างๆ นั่นแหละ พวกรถยนต์ก็ต้องหลบไปเอง"',
                    zh: 'B：公路着陆：“河水太冷太危险了。我要去那条宽阔的公路。汽车只能让路。”'
                },
                consequence: {
                    en: '💀 Catastrophe: Your wings clipped an overpass and power lines. The aircraft cartwheeled into a gas station. Massive loss of life on the ground and on the plane.',
                    th: '💀 หายนะ: ปีกเครื่องบินไปเกี่ยวกับสะพานลอยและสายไฟ เครื่องหมุนเคว้งพุ่งเข้าใส่ปั๊มน้ำมัน มีผู้เสียชีวิตมหาศาลทั้งบนพื้นดินและบนเครื่อง',
                    zh: 'B：大难临头：你的机翼切到了立交桥和电线。飞机侧翻撞进了一个加油站。地面和飞机上都造成了惨重的人命损失。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Relight Protocol: "Ignore the ditching plan for a moment. Focus entirely on the engine relight manual. If I can get even one engine back, we can reach the airport."',
                    th: '🧠 สู้เพื่อสตาร์ทใหม่: "อย่าเพิ่งไปสนเรื่องลงจอดฉุกเฉิน ทุ่มสมาธิทั้งหมดไปที่คู่มือการสตาร์ทเครื่องยนต์ใหม่ (Relight) ถ้าขอแค่ข้างเดียวกลับมาทำงานได้ เราก็ไปถึงสนามบิน"',
                    zh: 'C：重启协议：“暂时忽略迫降计划。完全专注于发动机重启手册。如果我能让哪怕一台发动机恢复工作，我们就能到达机场。”'
                },
                consequence: {
                    en: '📉 Fixed Mindset: You focused so hard on the engines that you lost situational awareness of your altitude. You crashed into an apartment building while still trying to start the engine.',
                    th: '📉 ยึดติดจนเสียการควบคุม: คุณมัวแต่พะวงเรื่องเครื่องยนต์จนลืมสังเกตระดับเพดานบิน คุณพุ่งชนตึกอพาร์ตเมนต์ในขณะที่ยังพยายามบิดสวิตช์สตาร์ทเครื่องอยู่เลย',
                    zh: 'C：固定思维：你由于太过专注于发动机，丧失了对高度的情景意识。当你在尝试启动发动机时，飞机撞进了一栋公寓楼。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: -20 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Delegate the Glide: "First Officer, fly the glide. I will handle the radio and the restart procedures. Teamwork will save us."',
                    th: '📞 แบ่งหน้าที่: "นักบินผู้ช่วย คุณร่อนเครื่องไปนะ ฉันจะจัดการวิทยุและขั้นตอนการสตาร์ทเครื่องใหม่เอง การทำงานเป็นทีมจะช่วยเราได้"',
                    zh: 'D：委派滑翔：“副驾驶，你来负责滑翔。我来处理电台和重启程序。团队协作会救了我们的。”'
                },
                consequence: {
                    en: '⚠️ Shared Failure: The co-pilot froze under the pressure. By the time you took back the controls, it was too late to configure for a proper ditching.',
                    th: '⚠️ ความล้มเหลวร่วมกัน: นักบินผู้ช่วยตัวแข็งทื่อด้วยความกดดัน กว่าคุณจะกลับมาคุมเครื่องเองได้ ก็สายเกินไปที่จะจัดระเบียบเครื่องสำหรับการลงจอดบนน้ำที่ถูกต้องแล้ว',
                    zh: 'D：共同失败：副驾驶在压力下僵住了。当你重新接管控制权时，已经来不及配置正确的迫降模式了。'
                },
                stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_024',
        text: {
            en: '🛰️ GPS Spoofing: You are flying over a conflict zone. Suddenly, your GPS shows you are 50 miles off course, heading into restricted airspace. But your inertial navigation and ground-based beacons say you are fine.',
            th: '🛰️ สัญญาณ GPS ปลอม: คุณกำลังบินผ่านพื้นที่ขัดแย้ง จู่ๆ GPS ของคุณก็บอกว่าคุณบินออกนอกเส้นทางไป 50 ไมล์ และกำลังมุ่งหน้าเข้าเขตน่านฟ้าต้องห้าม แต่ระบบนำทางเฉื่อย (Inertial Navigation) และสัญญาณวิทยุภาคพื้นดินยืนยันว่าคุณยังอยู่ในเส้นทางปกติ',
            zh: '🛰️ GPS 欺骗：你正在飞越冲突地区。突然，你的 GPS 显示你偏离航线 50 英里，正进入禁飞区。但你的惯性导航系统和地面信标显示你一切正常。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📡 Trust the Analog: "Trust the VORs and Inertial units. GPS is being spoofed. Report the interference to ATC and stay on our verified course."',
                    th: '📡 เชื่อระบบออนะล็อก: "เชื่อสัญญาณ VOR และระบบแรงเฉื่อย GPS โดนกวนสัญญาณชัวร์ รายงานการรบกวนสัญญาณไปที่ ATC และบินตามเส้นทางที่ยืนยันแล้วต่อไป"',
                    zh: 'A：信任模拟系统：“信任 VOR 和惯性单元。GPS 正受到欺骗。向空管报告干扰情景，并保持在经核实的航线上。”'
                },
                consequence: {
                    en: '🛡️ Professional Integrity: You avoided a diplomatic incident and potentially being shot down. Your airline upgrades its anti-spoofing software based on your report.',
                    th: '🛡️ ศักดิ์ศรีความเป็นมืออาชีพ: คุณเลี่ยงอุบัติการณ์ทางการทูตและโอกาสโดนยิงร่วงไปได้ สายการบินอัปเกรดซอฟต์แวร์ป้องกันการกวนสัญญาณทันทีจากรายงานของคุณ',
                    zh: 'A：职业诚信：你避免了一场外交事件，甚至可能避免了被击落。你的航空公司根据你的报告升级了防欺骗软件。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛰️ Trust the GPS: "GPS is modern and accurate. Maybe the ground beacons are old. Turn to match the GPS course immediately."',
                    th: '🛰️ เชื่อ GPS: "GPS มันทันสมัยและแม่นยำนะ สัญญาณภาคพื้นดินอาจจะเก่าไปแล้ว เลี้ยวตามเส้นทางที่ GPS บอกเดี๋ยวนี้เลย"',
                    zh: 'B：信任 GPS：“GPS 现代且准确。也许地面信标已经过时了。立即转向以匹配 GPS 航线。”'
                },
                consequence: {
                    en: '🚨 Intercepted: You flew directly into a military zone. Two fighter jets intercepted you and forced you to land in a hostile country. Prison time.',
                    th: '🚨 โดนสกัด: คุณบินเข้าเขตทหารโดยตรง เครื่องบินรบสองลำเข้าสกัดและบังคับให้คุณลงจอดในประเทศศัตรู คุณติดคุกยาวเลยล่ะ',
                    zh: 'B：被拦截：你直接飞入了一处军事禁区。两架战斗机拦截了你，并强迫你在一个敌对国家着陆。随后是牢狱之灾。'
                },
                stats: { competence: 10, ethics: 10, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Triple-Check: "Perform a cross-fix using three different ground-based VOR stations. If two agree against the GPS, we ignore the GPS completely."',
                    th: '🧠 ตรวจสอบสามทาง: "หาพิกัดตัดกัน (Cross-fix) จากสถานีวิทยุ VOR ภาคพื้นดิน 3 แห่ง ถ้า 2 ใน 3 บอกตรงกันว่า GPS ผิด เราจะตัดระบบ GPS ทิ้งไปเลย"',
                    zh: 'C：三重检查：“使用三个不同的地面 VOR 站进行交叉定位。如果两个站的结论与 GPS 相反，我们就完全忽略 GPS。”'
                },
                consequence: {
                    en: '💡 Analytical Win: You find the exact error. You continue the flight safely. Your methodical approach is used as a case study for "Cognitive Jamming."',
                    th: '💡 ชนะด้วยการวิเคราะห์: คุณหาข้อผิดพลาดที่แน่นอนเจอและบินต่อไปได้อย่างปลอดภัย วิธีการที่เป็นระบบของคุณได้กลายเป็นกรณีศึกษาเรื่อง "การรับมือสัญญาณรบกวนทางความคิด"',
                    zh: 'C：分析胜利：你找到了确切的错误。你安全地继续飞行。你的循序渐进的方法被用作“认知干扰”的案例研究。'
                },
                stats: { competence: 50, ethics: 30, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Panic call: "Mayday Mayday, our instruments are broken. Help us navigate!"',
                    th: '📞 ร้องขอความช่วยเหลือ: "เมย์เดย์ เมย์เดย์ เครื่องวัดประกอบการบินเราพัง ช่วยบอกทางเราหน่อย!"',
                    zh: 'D：恐慌呼救：“紧急！紧急！我们的仪表坏了。请求协助导航！”'
                },
                consequence: {
                    en: '📉 Reputation Damage: You broadcasted your incompetence to every plane in the region. ATC helped you, but you are grounded for re-training.',
                    th: '📉 เสียชื่อเสียง: คุณประกาศความไม่เอาไหนให้เครื่องบินทุกลำแถวนั้นรู้ ATC ช่วยคุณได้นั่นแหละ แต่คุณโดนสั่งพักงานไปฝึกมาใหม่',
                    zh: 'D：名誉受损：你向该地区的所有飞机广播了你的不称职。空管虽然提供了帮助，但你被禁飞以进行重新培训。'
                },
                stats: { competence: 10, ethics: 20, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_025',
        text: {
            en: '🧠 The Automated Complacency: You\'ve been on autopilot for 8 hours. Suddenly, the autopilot disconnects with a loud alarm and the plane banks hard left. You have 2 seconds to remember how to fly manual at high altitude.',
            th: '🧠 ความชะล่าใจในระบบอัตโนมัติ: คุณใช้ระบบออโต้ไพล็อตมา 8 ชั่วโมงเต็ม จู่ๆ ระบบก็ตัดการทำงานพร้อมเสียงแจ้งเตือนดังลั่นและเครื่องบินเอียงซ้ายอย่างแรง คุณมีเวลาแค่ 2 วินาทีในการเรียกคืนสัญชาตญาณการบินด้วยมือที่ระดับเพดานบินสูง',
            zh: '🧠 自动驾驶的安逸：你已经开启自动驾驶 8 小时了。突然，自动驾驶断开并响起刺耳的警报，飞机向左剧烈倾斜。你有 2 秒钟的时间回忆起在高海拔地区如何手动驾驶。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕹️ Level the Wings: "Identify, Verify, Act. Neutralize the controls. Don\'t overcorrect or you\'ll snap the tail off. Just level the wings and stabilize."',
                    th: '🕹️ ปรับระดับปีก: "ระบุปัญหา ยืนยัน แล้วค่อยทำ ปรับคันบังคับให้เป็นกลาง อย่าดึงแรงเกินไปเดี๋ยวหางจะขาด แค่ประคองปีกให้ตรงและทำให้เครื่องนิ่ง"',
                    zh: 'A：调平机翼：“识别、查证、行动。中立化控制。不要过度修正，否则会折断机尾。只需调平机翼并使其稳定。”'
                },
                consequence: {
                    en: '🛡️ Hand-fly Success: You stabilized the jet. It was a Pitot tube failure. You flew manual for the next 2 hours safely. Respect earned.',
                    th: '🛡️ บินด้วยมือสำเร็จ: คุณประคองเครื่องจนนิ่งได้ ปรากฏว่าเป็นเพราะท่อปิโตต์ขัดข้อง คุณบินด้วยมือต่อไปอีก 2 ชั่วโมงจนถึงที่หมายอย่างปลอดภัย ทุกคนยอมรับในฝีมือ',
                    zh: 'A：手动飞行成功：你使喷气机稳定了下来。那是皮托管故障造成的。你在此后的 2 小时内安全地进行了手动驾驶。赢得了尊重。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Reset Autopilot: "Push the AP button again! It probably just glitched. Let the computer handle the bank."',
                    th: '🔄 รีเซ็ตออโต้ไพล็อต: "กดปุ่ม AP อีกรอบสิ! มันอาจจะแค่เอ๋อไปแวบเดียว ให้คอมพิวเตอร์มันแก้อาการเอียงเองเถอะ"',
                    zh: 'B：重置自动驾驶：“再次按下 AP 按钮！它可能只是出故障了。让电脑处理侧倾。”'
                },
                consequence: {
                    en: '💀 High-Altitude Stall: The computer was getting bad data. By trying to re-engage, you let the plane enter a deep stall. You crashed into the ocean.',
                    th: '💀 ร่วงหล่นที่เพดานบินสูง: คอมพิวเตอร์กำลังรับข้อมูลที่ผิดพลาด การพยายามฝืนใช้ระบบต่อทำให้เครื่องค้างและร่วงลงมา (Deep Stall) คุณตกลงสู่มหาสมุทร',
                    zh: 'B：高空失速：电脑正在接收错误数据。通过尝试重新连接，你让飞机进入了深度失速。最终坠入大海。'
                },
                stats: { competence: 10, ethics: 10, leadership: -40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Unusual Attitude Training: "Deploy the Speedbrakes. We need to get the nose down and gain airspeed before leveling out. Aerodynamics 101."',
                    th: '🧠 นำวิชาแก้ท่าบินผิดปกติมาใช้: "กางเบรกอากาศ (Speedbrakes) เราต้องกดจมูกลงแล้วเอาความเร็วคืนมาก่อนจะปรับระดับให้ตรง หลักอากาศพลศาสตร์พื้นฐานเลยนะ"',
                    zh: 'C：异常姿态训练：“部署减速板。在调平之前，我们需要压低机头并获得空速。这是空气动力学基础。”'
                },
                consequence: {
                    en: '💡 Skill Win: Your quick recovery from an unusual attitude was flawless. The airline adds this scenario to the annual simulator check.',
                    th: '💡 ชนะด้วยทักษะ: คุณแก้ท่าบินที่ผิดปกติได้อย่างไร้ที่ติ สายการบินเอาสถานการณ์นี้ไปใส่ในการทดสอบเครื่องจำลองการบินประจำปีเลยล่ะ',
                    zh: 'C：技术胜利：你从异常姿态中快速恢复，表现无瑕。航空公司将此场景加入了年度模拟机检查。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '😱 Scream for Help: "Look at the manual! What does the alarm mean? Help me!"',
                    th: '😱 ร้องขอความช่วยเหลือ: "ไปเปิดคู่มือสิ! เสียงเตือนนี่มันคืออะไร? ช่วยฉันด้วย!"',
                    zh: 'D：尖叫求助：“看手册！警报是什么意思？救救我！”'
                },
                consequence: {
                    en: '💀 Fatal Delay: While you were looking for the book, the plane entered an unrecoverable spiral. Game over.',
                    th: '💀 ล่าช้าจนถึงแก่ชีวิต: ระหว่างที่คุณมัวแต่หาหนังสือ เครื่องก็นิ่งไม่พอแล้วเริ่มหมุนเคว้งจนกู้คืนไม่ได้ จบเห่ครับ',
                    zh: 'D：致命延误：当你还在找书时，飞机进入了无法恢复的螺旋状态。游戏结束。'
                },
                stats: { competence: 0, ethics: 10, leadership: -50, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_026',
        text: {
            en: '🏥 The Medical Emergency: A passenger is having a severe heart attack. You are 2 hours from your destination over the Pacific. There is a small island with a military strip only 20 minutes away, but landing there requires a special permit and could compromise national security.',
            th: '🏥 เหตุฉุกเฉินทางการแพทย์: ผู้โดยสารคนหนึ่งเกิดอาการหัวใจวายกะทันหัน คุณต้องบินอีก 2 ชั่วโมงถึงจะถึงปลายทางเหนือมหาสมุทรแปซิฟิก มีเกาะเล็กๆ ที่มีรันเวย์ทหารอยู่ห่างออกไปแค่ 20 นาที แต่การลงจอดที่นั่นต้องมีใบอนุญาตพิเศษและอาจกระทบต่อความมั่นคงของชาติ',
            zh: '🏥 医疗紧急情况：一名乘客突发严重心脏病。你在太平洋上空，距离目的地还有 2 小时航程。仅 20 分钟路程外有一个带有军事跑道的小岛，但在那里着陆需要特殊许可，并可能危及国家安全。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚑 Emergency Diversion: "Declare a Medical Emergency. I\'m landing on that military strip. Human life is the priority. Deal with the politics later."',
                    th: '🚑 ลงจอดฉุกเฉิน: "ประกาศเหตุฉุกเฉินทางการแพทย์ ฉันจะเอาเครื่องลงที่รันเวย์ทหารนั่นแหละ ชีวิตคนสำคัญที่สุด เรื่องการเมืองค่อยว่ากันทีหลัง"',
                    zh: 'A：紧急备降：“宣布医疗紧急情况。我要在那个军事跑道到着陆。人命关天。政治问题以后再说。”'
                },
                consequence: {
                    en: '🛡️ Life Saved: The passenger survived thanks to the quick landing. You were interrogated for 10 hours by the military, but the airline defended you.',
                    th: '🛡️ ช่วยชีวิตคนได้: ผู้โดยสารรอดชีวิตเพราะคุณเอาเครื่องลงไว คุณโดนทหารเรียกไปสอบสวนนาน 10 ชั่วโมง แต่สายการบินออกหน้าปกป้องคุณเต็มที่',
                    zh: 'A：生命获救：得益于快速着陆，乘客幸存了下来。你接受了军方 10 小时的讯问，但航空公司为你辩护。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '✈️ Proceed to Destination: "The military will arrest us and the passenger might not get better help there anyway. Speed up to the destination instead."',
                    th: '✈️ บินไปต่อ: "ทหารคงจับเราแน่ๆ และผู้โดยสารอาจจะไม่ได้รับความช่วยที่ดีกว่าที่นั่นด้วย เร่งเครื่องไปให้ถึงปลายทางเร็วขึ้นแทนแล้วกัน"',
                    zh: 'B：继续前往目的地：“军方会逮捕我们的，而且乘客在那里也不一定能得到更好的救助。加速前往目的地吧。”'
                },
                consequence: {
                    en: '💀 Fatal Choice: The passenger died 40 minutes later. The lawsuits from the family are massive. Your crew is traumatized.',
                    th: '💀 ทางเลือกที่ผิดพลาด: ผู้โดยสารเสียชีวิตในอีก 40 นาทีต่อมา ครอบครัวฟ้องเรียกค่าเสียหายมหาศาล และลูกเรือของคุณเสียขวัญไปตามๆ กัน',
                    zh: 'B：致命选择：乘客在 40 分钟后去世。家属提出的诉讼规模巨大。你的机组人员受到了心灵创伤。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Tele-Medicine Liaison: "Call the ground medical hotline. Ask the doctors on board to use the AED and perform surgery if needed while we fly at max speed. Coordinate meeting an ambulance on the ground."',
                    th: '🧠 ประสานงานการแพทย์ทางไกล: "เรียกสายด่วนแพทย์ภาคพื้นดิน ขอให้หมอที่อยู่บนเครื่องใช้เครื่อง AED และผ่าตัดถ้าจำเป็นในระหว่างที่เราเร่งความเร็วสูงสุด ประสานงานให้รถพยาบาลมารอรับทันทีที่แตะพื้น"',
                    zh: 'C：远程医疗联络：“呼叫地面医疗热线。请机上的医生使用 AED，并在我们以最高速度飞行期间必要时进行手术。协调地面救护车接应。”'
                },
                consequence: {
                    en: '💡 Dynamic Solution: You combined maximum speed with high-tech onboard medical care. The passenger was stabilized and made it to the destination. Professionalism at its peak.',
                    th: '💡 ทางออกที่เหนือชั้น: คุณใช้ความเร็วสูงสุดควบคู่ไปกับการดูแลทางการแพทย์ไฮเทคบนเครื่อง ผู้โดยสารอาการคงที่และไปถึงที่หมายได้อย่างปลอดภัย นี่คือมืออาชีพตัวจริง',
                    zh: 'C：动态解决方案：你将极限速度与高科技机上医疗护理相结合。乘客病情稳定并到达了目的地。职业精神达到巅峰。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Let the Doctors Decide: "Doctors, do you want me to land? I\'ll do whatever you say."',
                    th: '📞 ให้หมอตัดสินใจ: "คุณหมอครับ อยากให้ผมเอาเครื่องลงไหม? ผมจะทำตามที่คุณหมอบอกเลย"',
                    zh: 'D：让医生决定：“医生们，你们要到着陆吗？我听你们的。”'
                },
                consequence: {
                    en: '📉 Indecisive Leadership: The doctors argued among themselves. You lost precious time. In aviation, the Captain makes the final safety call, and you failed to do so.',
                    th: '📉 ความโลเลของผู้นำ: เหล่าคุณหมอเถียงกันเอง คุณเสียเวลาอันมีค่าไป ในงานการบิน กัปตันต้องเป็นคนฟันธงเรื่องความปลอดภัยขั้นสุดท้าย และคุณทำไม่ได้',
                    zh: 'D：优柔寡断的领导力：医生们争论不休。你浪费了宝贵的时间。在航空领域，由机长做出最终的安全决定，而你没能做到。'
                },
                stats: { competence: 20, ethics: 30, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_027',
        text: {
            en: '🚢 The Cargo Fire: Your fire suppression system has been triggered in the lower cargo hold. You have one bottle of Halon left. The warning light is still blinking. You are over the Atlantic night.',
            th: '🚢 ไฟไหม้ห้องบรรทุกสินค้า: ระบบระดับกองไฟในห้องบรรทุกสินค้าด้านล่างทำงาน คุณเหลือถังแก๊สฮาลอน (Halon) แค่ถังเดียวแล้ว แต่ไฟเตือนยังกระพริบไม่หยุด คุณอยู่กลางมหาสมุทรแอตแลนติกในความมืดมิด',
            zh: '🚢 货舱起火：下层货舱的灭火系统已被触发。你只剩下一瓶哈龙灭火剂了。警告灯仍在闪烁。此时你正飞越深夜的大西洋。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🆘 Emergency Descent: "Dump fuel, descend to 10,000 feet, and depressurize the plane to starve the fire of oxygen. We are heading for the nearest coastline now."',
                    th: '🆘 ร่อนลงฉุกเฉิน: "ทิ้งน้ำมัน ร่อนลงไปที่ 10,000 ฟุต และลดความดันในเครื่องเพื่อตัดออกซิเจนไม่ให้ไปเลี้ยงไฟ มุ่งหน้าเข้าหาชายฝั่งที่ใกล้ที่สุดเดี๋ยวนี้"',
                    zh: 'A：紧急下降：“倾倒燃料，下降至 10,000 英尺，并让飞机减压以耗尽火源的氧气。我们现在就向最近的海岸线进发。”'
                },
                consequence: {
                    en: '🛡️ Safety Protocol: The fire went out. You landed at a remote military base in Greenland. The cargo (Lithium batteries) was charcoal. You saved the plane.',
                    th: '🛡️ มาตรฐานความปลอดภัย: ไฟดับลง คุณลงจอดที่ฐานทัพทหารในกรีนแลนด์ สินค้า (แบตเตอรี่ลิเธียม) กลายเป็นถ่านไปหมดแล้ว แต่คุณรักษาเครื่องบินไว้ได้',
                    zh: 'A：安全协议：火熄灭了。你在格陵兰岛的一个偏远军事基地着陆。贷物（锂电池）已成木炭。你保住了飞机。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 Stay at Altitude: "The fire is probably out and it\'s just a sensor error. Depressurizing will freeze the passengers. Stay high to save fuel and reach the destination."',
                    th: '🚀 บินที่ระดับเดิมต่อ: "ไฟน่าจะดับแล้วล่ะ นั่นคงแค่เซนเซอร์พัง การลดความดันจะทำให้ผู้โดยสารหนาวตายได้ บินสูงๆ ต่อไปเพื่อประหยัดน้ำมันให้ถึงปลายทางเถอะ"',
                    zh: 'B：保持高度：“火可能已经熄火了，这只是传感器错误。减压会让乘客冻僵。保持高空飞行以节省燃料并到达目的地。”'
                },
                consequence: {
                    en: '💀 Catastrophe: The fire wasn\'t out. It burned through the hydraulic lines. The aircraft became uncontrollable and fell into the ocean. No survivors.',
                    th: '💀 หายนะ: ไฟยังไม่ดับ มันเผาสายไฮดรอลิกขาด เครื่องบินควบคุมไม่ได้และตกสู่มหาสมุทร ไม่มีผู้รอดชีวิต',
                    zh: 'B：大难临头：火并没熄灭。它烧断了液压管线。飞机变得无法控制并坠入大海。无人生还。'
                },
                stats: { competence: 10, ethics: 10, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Thermal Imaging Hack: "Use the landing gear camera if possible, or send the crew with a portable thermal camera to check the floorboards. Identify the exact spot before wasting the last Halon bottle."',
                    th: '🧠 ทริคกล้องตรวจจับความร้อน: "ใช้กล้องตรงฐานล้อถ้าทำได้ หรือส่งลูกเรือไปพร้อมกล้องตรวจจับความร้อนแบบพกพาเพื่อเช็กพื้นเครื่อง ระบุจุดที่แน่นอนให้ได้ก่อนจะเสียฮาลอนถังสุดท้ายไปเปล่าๆ"',
                    zh: 'C：热成像技巧：“如果可能，利用起落架摄像头，或者派机组人员携带便携式热成像仪检查地板。在浪费最后一瓶哈龙之前确定精准起火点。”'
                },
                consequence: {
                    en: '💡 Technical Masterclass: You correctly identified it was a small electrical fire. One targeted burst put it out. You saved the passengers from a cold emergency descent.',
                    th: '💡 มาสเตอร์คลาสเทคนิค: คุณระบุได้ถูกต้องว่าเป็นแค่ไฟไหม้จากไฟฟ้าเล็กน้อย พ่นไปทีเดียวก็ดับ คุณช่วยให้ผู้โดยสารไม่ต้องเจอประสบการณ์ร่อนลงฉุกเฉินอันหนาวเหน็บ',
                    zh: 'C：技术大师课：你准确识别出那是一处微小的电气起火。一次针对性的喷射就灭了火。你让乘客免受了寒冷的紧急下降。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Consult Maintenance: "Call the ground engineers via satellite. Ask them if we should use the last bottle yet. I don\'t want to be blamed for wasting it."',
                    th: '📞 ปรึกษาฝ่ายซ่อมบำรุง: "โทรหาฝ่ายวิศวกรภาคพื้นดินผ่านดาวเทียม ถามเขาว่าควรใช้ถังสุดท้ายเลยไหม ฉันไม่อยากโดนว่าถ้าใช้ไปเปล่าๆ"',
                    zh: 'D：咨询维修人员：“通过卫星呼叫地面工程师。问他们我们是否应该现在就使用最后一瓶。我不想因为浪费它而受到指责。”'
                },
                consequence: {
                    en: '📉 Indecision: While you were on the phone, the fire spread. By the time they said "Yes," the fire was too big for one bottle. Career ended in tragedy.',
                    th: '📉 ความโลเล: ระหว่างที่คุณคุยโทรศัพท์ ไฟก็ลามไปแล้ว กว่าเขาจะบอกว่า "ใช้เลย" ไฟก็ใหญ่เกินกว่าที่แก๊สถังเดียวจะดับได้แล้ว จบชีวิตการทำงานด้วยโศกนาฏกรรม',
                    zh: 'D：优柔寡断：当你还在打电话时，火势蔓延了。当他们说“用吧”的时候，火势已经大到一瓶灭火器无法扑灭了。职业生涯以悲剧告终。'
                },
                stats: { competence: 20, ethics: 30, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_028',
        text: {
            en: '🏗️ The Tail Strike: During a heavy takeoff in a long aircraft (like a 747-8 or A350-1000), you feel a sudden shudder. The tail might have hit the runway. The plane is climbing, but the cabin isn\'t pressurizing properly.',
            th: '🏗️ หางกระแทกพื้น: ระหว่างการบินขึ้นท่ามกลางน้ำหนักที่มากของเครื่องบินลำยาว (เช่น 747-8 หรือ A350-1000) คุณรู้สึกถึงแรงสั่นสะเทือนกะทันหัน หางเครื่องอาจจะกระแทกรันเวย์ไปแล้ว เครื่องกำลังไต่ระดับแต่ความดันในห้องโดยสารไม่เพิ่มขึ้นตามปกติ',
            zh: '🏗️ 擦机尾：在长型飞机（如 747-8 或 A350-1000）重载起飞期间，你感觉到突然的剧烈震动。机尾可能撞到了跑道。飞机正在爬升，但机舱压力无法正常建立。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Stop Climb: "Level off at 5,000 feet immediately. Do not pressurize. We are returning for an emergency landing. A compromised hull can fail catastrophically at altitude."',
                    th: '🛑 หยุดไต่ระดับ: "รักษาระดับที่ 5,000 ฟุตทันที อย่าเพิ่มความดัน เราจะกลับไปลงจอดฉุกเฉินโครงสร้างตึกที่พังอาจจะระเบิดออกได้ถ้าบินสูงเกินไป"',
                    zh: 'A：停止爬升：“立即在 5,000 英尺高度平飞。不要加压。我们要返回进行紧急着陆。受损的机体在高空可能会发生灾难性的失效。”'
                },
                consequence: {
                    en: '🛡️ Disaster Averted: You saved the plane. Inspection showed a 2-meter crack in the rear pressure bulkhead. Had you continued to 35,000 feet, the tail would have blown off. Hero.',
                    th: '🛡️ หยุดยั้งหายนะ: คุณช่วยเครื่องบินไว้ได้ ผลตรวจเจอเขม่ารอยร้าวยาว 2 เมตรตรงแผงกั้นความดันด้านหลัง ถ้าคุณฝืนบินไปที่ 35,000 ฟุต หางเครื่องคงจะระเบิดกระจุยไปแล้ว คุณคือฮีโร่เลย',
                    zh: 'A：化险为夷：你保住了飞机。检查显示后压力隔板有一道 2 米长的裂缝。如果你继续爬升到 35,000 英尺，机尾就会炸飞。英雄。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '✈️ Proceed with caution: "It\'s a long flight to London. Let\'s climb slow and see if the pumps can keep up with the leak. We can\'t dump $100k of fuel for a little bump."',
                    th: '✈️ บินต่ออย่างระมัดระวัง: "นี่เป็นไฟลท์ยาวไปลอนดอนนะ ค่อยๆ ไต่ระดับไปดูว่าเครื่องปั๊มความดันจะพอสู้กับรอยรั่วได้ไหม เราจะทิ้งน้ำมันแสนเหรียญเพียงเพราะแค่เครื่องกระแทกนิดเดียวไม่ได้"',
                    zh: 'B：谨慎前行：“飞往伦敦的路很长。我们慢慢爬升，看看泵能不能跟上漏气的速度。我们不能因为一点碰撞就倾倒价值 10 万美元的燃料。”'
                },
                consequence: {
                    en: '💀 Catastrophic Failure: At 20,000 feet, the rear bulkhead exploded. The vertical stabilizer was lost. The plane crashed. This is why we follow protocols.',
                    th: '💀 ความล้มเหลวที่เลวร้าย: ที่ระดับ 20,000 ฟุต แผงกั้นด้านหลังระเบิดออก แพนหางดิ่งหลุดหายไป เครื่องตกในที่สุด นี่คือเหตุผลว่าทำไมเราต้องทำตามระเบียบ',
                    zh: 'B：灾难性失效：在 20,000 英尺高度，后隔板爆炸了。垂直安定面脱落。飞机坠毁。这就是为什么要遵守规程的原因。'
                },
                stats: { competence: 10, ethics: 10, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 External Camera Verify: "Switch to the tail-fin camera. If we can see physical damage, we ditch fuel and land. If not, we perform a slow pressure-test at 10,000 feet."',
                    th: '🧠 ตรวจสอบจากกล้องภายนอก: "สลับไปดูหน้าจอกล้องตรงหางเครื่อง ถ้าเห็นความเสียหายทางกายภาพ เราจะทิ้งน้ำมันแล้วลงจอด ถ้าไม่เห็น เราจะทดสอบความดันช้าๆ ที่ระดับ 10,000 ฟุต"',
                    zh: 'C：外部摄像头核实：“切换到垂直尾翼摄像头。如果我们能看到物理损坏，就倾倒燃料到着陆。如果没有，我们就在 10,000 英尺高度进行缓慢的压力测试。”'
                },
                consequence: {
                    en: '💡 Technical Masterclass: Using the camera, you saw skin rippling. You landed safely. Your use of secondary systems for diagnostics is now a standard training recommendation.',
                    th: '💡 มาสเตอร์คลาสเทคนิค: จากกล้อง คุณเห็นรอยย่นของผิวเครื่องบิน คุณเลยเอาเครื่องลงอย่างปลอดภัย การใช้ระบบรองในการวินิจฉัยของคุณกลายเป็นคำแนะนำมาตรฐานในการฝึกอบรมไปแล้ว',
                    zh: 'C：技术大师课：通过摄像头，你看到了蒙皮起皱。你安全着陆。你利用次要系统进行诊断的做法现已被列为标准培训建议。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Ask the Passengers: "Ask the cabin crew if they hear a whistling sound from the back. Use them as my ears."',
                    th: '📞 ถามผู้โดยสาร: "บอกลูกเรือให้ฟังหน่อยว่าได้ยินเสียงหวีดหวิวจากด้านหลังเครื่องไหม ให้เขาเป็นหูเป็นตาแทนฉัน"',
                    zh: 'D：询问乘客：“询问机组人员是否听到后面有哨声。把他们当作我的耳朵。”'
                },
                consequence: {
                    en: '📉 Panic: The request caused a mass panic in the cabin. People started screaming and ignoring safety instructions. You lost control of the situation.',
                    th: '📉 ความตื่นตระหนก: คำขอนั้นทำให้เกิดความโกลาหลในห้องโดยสาร ผู้คนเริ่มกรีดร้องและไม่ฟังคำแนะนำด้านความปลอดภัย คุณสูญเสียการควบคุมสถานการณ์ไปเลย',
                    zh: 'D：恐慌：这个请求引起了机舱内的大规模恐慌。人们开始尖叫并忽略安全指示。你失去了对局面的控制。'
                },
                stats: { competence: 20, ethics: 20, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_029',
        text: {
            en: '🚢 The Unstable Approach: You are on short final. A sudden gust of wind put you above the glideslope and too fast. You can force it down to stay on schedule, or go-around and be late.',
            th: '🚢 การร่อนลงที่ไม่มั่นคง: คุณกำลังจะแตะพื้นในอีกไม่กี่อึดใจ จู่ๆ ลมกระโชกก็ทำให้เครื่องอยู่เหนือแนวร่อน (Glideslope) และความเร็วสูงเกินไป คุณจะฝืนกดเครื่องลงเพื่อให้ทันกำหนดการ หรือจะบินวนใหม่ (Go-around) แต่จะถึงช้าลง',
            zh: '🚢 不稳定的进近：你正处于最后的进近阶段。突然的一阵强风让你高出了下滑道且速度过快。你可以强行降落以保持准时，或者复飞但会迟到。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔄 Go-Around: "Unstable approach. Going around. Flaps 20, Positive Rate, Gear Up. Safety is non-negotiable."',
                    th: '🔄 บินวนใหม่: "การร่อนลงไม่มั่นคง ขอบินวนใหม่ กางแฟลป 20, อัตราไต่เป็นบวก, เก็บฐานล้อ เรื่องความปลอดภัยต่อรองไม่ได้"',
                    zh: 'A：复飞：“进近不稳定。正在复飞。襟翼 20，正爬升率，收起落架。安全不容商量。”'
                },
                consequence: {
                    en: '🛡️ Professionalism: You landed safely on the second try. The airline data-tracker gives you a high safety score. The passengers are slightly annoyed but alive.',
                    th: '🛡️ ความเป็นมืออาชีพ: คุณลงจอดได้อย่างปลอดภัยในการพยายามครั้งที่สอง ระบบติดตามข้อมูลของสายการบินให้คะแนนความปลอดภัยคุณสูงมาก ผู้โดยสารอาจจะเคืองนิดหน่อยแต่พวกเขายังมีชีวิตอยู่',
                    zh: 'A：专业精神：你在第二次尝试时安全着陆。航空公司的数据追踪器给了你很高的安全评分。乘客们略感恼火，但都还活着。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🛬 Force the Landing: "I can handle it. Just push the nose down and use maximum braking and reverse thrust. We need that gate in 5 minutes."',
                    th: '🛬 ฝืนลงจอด: "ฉันเอาอยู่ แค่กดจมูกเครื่องลงแล้วใช้เบรกเต็มกำลังกับระบบย้อนแรงดันเครื่องยนต์ (Reverse Thrust) เราต้องไปที่ประตูขึ้นเครื่องในอีก 5 นาที"',
                    zh: 'B：强行着陆：“我能应付。只需压低机头，并使用最大制动和反推。我们需要在 5 分钟内到达登机口。”'
                },
                consequence: {
                    en: '💀 Runway Excursion: You touched down too far down the runway. The brakes overheated and caught fire. The plane slid into the grass. Millions in damage and career over.',
                    th: '💀 หลุดรันเวย์: คุณแตะพื้นเลยจุดที่ควรลงจอดไปไกลเกินไป เบรกเกิดความร้อนจัดจนไฟลุก เครื่องไถลออกไปบนสนามหญ้า ความเสียหายหลายล้านดอลลาร์และอาชีพคุณจบลงทันที',
                    zh: 'B：偏出跑道：你在跑道过远的地方触地。制动器过热并起火。飞机滑入了草地。造成了数百万美元的损失，职业生涯就此结束。'
                },
                stats: { competence: 20, ethics: 10, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 Side-Slip Skill: "Use a cross-control side-slip to increase drag and lose altitude without increasing speed. It\'s an old-school pilot trick for a modern jet."',
                    th: '🧠 ทักษะการร่อนเอียงขวางลม: "ใช้วิธี Side-slip (การเอียงเครื่องขวางลม) เพื่อเพิ่มแรงต้านและลดระดับเพดานบินโดยที่ความเร็วไม่เพิ่มขึ้น นี่คือไม้ตายนักบินรุ่นเก๋าสำหรับเครื่องบินยุคใหม่เลยล่ะ"',
                    zh: 'C：侧滑技术：“使用交叉操纵侧滑来增加阻力并在不增加速度的情况下降低高度。这是针对现代喷气机的一种老派飞行员技巧。”'
                },
                consequence: {
                    en: '💡 Technical Masterclass: It was a beautiful maneuver. You touched down right on the numbers. The spotting community on YouTube goes crazy for your landing video.',
                    th: '💡 มาสเตอร์คลาสเทคนิค: มันเป็นการคุมเครื่องที่สวยงามมาก คุณแตะพื้นตรงจุดเป๊ะๆ กลุ่มนักถ่ายภาพเครื่องบินใน YouTube แห่กันแชร์คลิปแลนดิ้งของคุณกันแบบถล่มทลาย',
                    zh: 'C：技术大师课：这是一次非常漂亮的操纵。你精准地在标志线上触地。YouTube 上的飞友群体为你的着陆视频感到疯狂。'
                },
                stats: { competence: 50, ethics: 20, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Ask ATC for Priority: "Tell ATC we are coming in hot and need the full runway cleared immediately. Just in case."',
                    th: '📞 ขอสิทธิลงจอดก่อน: "บอก ATC ว่าเรากำลังร่อนลงด้วยความเร็วสูงและต้องการให้เคลียร์รันเวย์ทั้งหมดเดี๋ยวนี้ เผื่อไว้ก่อน"',
                    zh: 'D：请求空管优先权：“告诉空管我们要高速降落，需要立即清理整条跑道。以防万一。”'
                },
                consequence: {
                    en: '📉 Bureaucratic Mess: ATC denied the request because of departing traffic. You were forced into a late go-around anyway, but now you\'re low on fuel and stressed.',
                    th: '📉 ความวุ่นวายของระบบ: ATC ปฏิเสธคำขอเพราะมีเครื่องลำอื่นกำลังจะบินขึ้น คุณถูกบังคับให้บินวนใหม่อยู่ดีแต่ตอนนี้น้ำมันเริ่มเหลือน้อยและคุณเริ่มเครียดแล้ว',
                    zh: 'D：官僚麻烦：空管因为有起飞流量而拒绝了请求。你还是被迫在很晚的时候复飞，但现在你油量不足且压力巨大。'
                },
                stats: { competence: 10, ethics: 20, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_030',
        text: {
            en: '🚢 The Cyber Attack: Your glass cockpit displays suddenly start showing "Error 404" and random cat images. The primary flight displays are gone. You are in thick clouds. The backup analog instruments are still working.',
            th: '🚢 การโจมตีทางไซเบอร์: หน้าจอดิจิทัลในห้องนักบินจู่ๆ ก็ขึ้นคำว่า "Error 404" และรูปแมวเต็มไปหมด หน้าจอแสดงผลหลักหายไปหมดเลย คุณกำลังบินอยู่ท่ามกลางเมฆหนาทึบ แต่เข็มวัดระบบอนาล็อกสำรองยังใช้งานได้อยู่',
            zh: '🚢 网络攻击：你的玻璃座舱显示屏突然开始显示“Error 404”和随机的猫咪图像。主飞行显示器消失了。你正处于浓云之中。备用模拟仪表仍在工作。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕹️ Back to Basics: "Ignore the screens. Fly the needle, ball, and airspeed on the backup instruments. This is what we trained for in flight school. Hand-fly us to clear air."',
                    th: '🕹️ กลับสู่พื้นฐาน: "เลิกมองหน้าจอ มองแค่เข็ม ลูกบอล และความเร็วบนเครื่องวัดสำรองพอ นี่คือสิ่งที่เราฝึกมาตั้งแต่โรงเรียนการบิน บินด้วยมือพาเราออกไปหาท้องฟ้าที่สดใสซะ"',
                    zh: 'A：回归基础：“忽略屏幕。依靠备用仪表上的指针、球形仪和空速表飞行。这就是我们在飞行学校训练的目的。手动驾驶我们飞向清晰空域。”'
                },
                consequence: {
                    en: '🛡️ Professionalism: You kept the plane level and climbed out of the clouds. You landed safely using only analog dials. You are the ultimate pilot.',
                    th: '🛡️ ความเป็นมืออาชีพ: คุณประคองเครื่องให้ตรงและไต่ระดับออกจากเมฆได้สำเร็จ คุณลงจอดได้อย่างปลอดภัยโดยใช้แค่ปุ่มหมุนอนาล็อก คุณคือนักบินที่ยอดเยี่ยมที่สุด',
                    zh: 'A：专业精神：你保持了飞机平稳并飞出了云层。你仅凭模拟仪表盘就安全着陆。你是顶尖的飞行员。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Reboot the Computer: "Pull the flight computer circuit breakers and reset them. We need those screens back to fly safely. The backups aren\'t enough for a 787."',
                    th: '🔄 รีบูตคอมพิวเตอร์: "ดึงเบรกเกอร์คอมพิวเตอร์การบินออกแล้วรีเซ็ตใหม่ เราต้องได้หน้าจอกลับมาถึงจะบินปลอดภัย ระบบสำรองมันไม่พอสำหรับเครื่อง 787 หรอก"',
                    zh: 'B：重启电脑：“拔掉飞行电脑的断路器并重置它们。我们需要那些屏幕才能安全飞行。备用系统对 787 来说不够用。”'
                },
                consequence: {
                    en: '💀 Total Power Loss: By pulling the breakers, you accidentally disconnected the fly-by-wire system too. The plane became a brick. You crashed.',
                    th: '💀 ระบบไฟฟ้าดับทั้งหมด: การดึงเบรกเกอร์ทำให้คุณเผลอไปตัดระบบ Fly-by-wire ด้วย เครื่องบินเลยกลายเป็นก้อนหินพุ่งลงพื้น เครื่องตกครับ',
                    zh: 'B：全机断电：由于拔掉了断路器，你也不小心断开了电传操纵系统。飞机就像砖头一样坠落。你坠毁了。'
                },
                stats: { competence: 10, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧠 iPad Navigation: "Use our company iPads! They have independent GPS and charts. Mount them to the yoke and use them as primary displays while we fly by the backup dials."',
                    th: '🧠 ใช้ iPad นำทาง: "ใช้ iPad ของบริษัทสิ! มันมี GPS และแผนที่แยกเป็นเอกราช เอามาติดตรงคันบังคับแล้วใช้เป็นหน้าจอหลักในขณะที่เราดูเข็มวัดสำรองไปด้วย"',
                    zh: 'C：iPad 导航：“使用我们公司的 iPad！它们有独立的 GPS 和航图。把它们架在操纵杆上，当作主显示器，同时配合备用仪表飞行。”'
                },
                consequence: {
                    en: '💡 Dynamic Solution: The iPads saved your situational awareness. You navigated around a mountain range that was hidden in the clouds. Great use of available tools.',
                    th: '💡 ทางออกที่ชาญฉลาด: iPad ช่วยให้คุณรู้พิกัดตัวเองได้ คุณร่อนหลบเทือกเขาที่ซ่อนอยู่ในเมฆมาได้ การรู้จักใช้เครื่องมือที่มีอยู่ให้เป็นประโยชน์นั้นยอดเยี่ยมมาก',
                    zh: 'C：动态解决方案：iPad 挽救了你的情景意识。你绕过了一座隐藏在云层中的山脉。对现有具的极佳利用。'
                },
                stats: { competence: 50, ethics: 30, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📞 Call IT Support: "Radio the airline operations center. Tell them they have a virus and ask them to fix it remotely."',
                    th: '📞 เรียกไอที: "วิทยุไปที่ศูนย์ปฏิบัติการของสายการบิน บอกเขาว่ามีไวรัสและขอให้เขาช่วยแก้ปัญหาจากทางไกลให้หน่อย"',
                    zh: 'D：呼叫 IT 支持：“无线电联系航空公司运营中心。告诉他们感染了病毒，并请求他们远程修复。”'
                },
                consequence: {
                    en: '📉 Lack of Initiative: They told you there is no remote fix for a flying plane. You wasted 5 minutes and drifted 2,000 feet off altitude while talking.',
                    th: '📉 ขาดความริเริ่ม: เขาบอกคุณว่าไม่มีระบบแก้ปัญหาทางไกลสำหรับเครื่องที่กำลังบินอยู่หรอก คุณเสียเวลาไป 5 นาทีและบินวูบลงมา 2,000 ฟุตระหว่างที่มัวแต่คุย',
                    zh: 'D：缺乏主观能动性：他们告诉你正在飞行的飞机无法远程修复。你在说话时浪费了 5 分钟，并偏离了 2,000 英尺的高度。'
                },
                stats: { competence: 10, ethics: 20, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'pilot_031',
        text: {
            en: '⛽ The Fuel Emergency: Mid-flight over the ocean, your fuel gauge shows 30% less than calculated. Either a gauge error or a fuel leak. Nearest airport is 45 minutes away. You have maybe 40 minutes of fuel.',
            th: '⛽ เหตุฉุกเฉินน้ำมัน: กลางทางเหนือมหาสมุทร มาตรวัดน้ำมันแสดงน้อยกว่าที่คำนวณไว้ 30% อาจเป็นมาตรวัดเสียหรือน้ำมันรั่ว สนามบินที่ใกล้ที่สุดอยู่ห่างไป 45 นาที น้ำมันคงเหลืออีกแค่ 40 นาที',
            zh: '⛽ 燃料紧急情况：飞越海洋途中，油量表显示比计算少30%。可能是仪表故障或燃料泄漏。最近的机场在45分钟外。你可能还有40分钟的燃料。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Declare Emergency: "Mayday! Request priority vectors to nearest airport. Dump all non-essential weight."',
                    th: '🚨 ประกาศฉุกเฉิน: "Mayday! ขอเส้นทางเร่งด่วนไปสนามบินที่ใกล้ที่สุด ทิ้งน้ำหนักที่ไม่จำเป็นทั้งหมด"',
                    zh: '🚨 宣布紧急情况："求救！请求前往最近机场的优先航线。丢弃所有非必要重量。"'
                },
                consequence: {
                    en: '✈️ Safe Landing! ATC clears all traffic. You land with 2 minutes of fuel remaining. Fire trucks standing by. Heart pounding but alive.',
                    th: '✈️ ลงจอดปลอดภัย! ATC เคลียร์ทราฟิกทั้งหมด ลงจอดได้โดยมีน้ำมันเหลืออีก 2 นาที รถดับเพลิงพร้อมอยู่ หัวใจเต้นแรงแต่รอด',
                    zh: '✈️ 安全着陆！空管清空所有交通。你在还剩2分钟燃料时着陆。消防车待命。心跳加速但活着。'
                },
                stats: { competence: 60, ethics: 50, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🎲 Gamble on Gauge: "The gauge is probably wrong. Continue to planned destination. Monitor closely."',
                    th: '🎲 เดิมพันกับมาตรวัด: "มาตรวัดน่าจะเสีย บินต่อไปปลายทางตามแผน เฝ้าระวังอย่างใกล้ชิด"',
                    zh: '🎲 赌仪表：仪表可能错了。继续前往计划目的地。密切监控。"'
                },
                consequence: {
                    en: '💀 Ditching at Sea! Engines flame out 10 miles from shore. You ditch in the ocean. All survive but the investigation destroys your career.',
                    th: '💀 ลงน้ำ! เครื่องยนต์ดับห่าง 10 ไมล์จากฝั่ง ลงน้ำในมหาสมุทร ทุกคนรอดแต่การสอบสวนทำลายอาชีพ',
                    zh: '💀ಹಡಗು海上迫降！发动机在离海岸10英里处熄火。你迫降到海洋中。所有人幸存但调查摧毁了你的职业生涯。'
                },
                stats: { competence: -30, ethics: -40, leadership: -30, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📡 Request Fuel Truck: "Land at closer regional airport. Have fuel truck meet us on arrival for immediate refuel and continue."',
                    th: '📡 ขอรถน้ำมัน: "ลงที่สนามบินภูมิภาคที่ใกล้กว่า ให้รถน้ำมันมารอเติมทันทีและบินต่อ"',
                    zh: '📡 请求加油车：在更近的地区机场着陆。让加油车在到达时马上加油然后继续。'
                },
                consequence: {
                    en: '🎯 Perfect Plan! You land safely, refuel in 15 minutes, continue the flight. Passengers barely notice the detour.',
                    th: '🎯 แผนสมบูรณ์! ลงจอดปลอดภัย เติมน้ำมัน 15 นาที บินต่อ ผู้โดยสารแทบไม่สังเกตการเบี่ยงเส้นทาง',
                    zh: '🎯 完美计划！你安全着陆，15分钟内加油，继续飞行。乘客几乎没注意到绕道。'
                },
                stats: { competence: 70, ethics: 40, leadership: 60, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🔧 Emergency Descent: "Descend to lower altitude where fuel efficiency is better. Conserve every drop."',
                    th: '🔧 ลดระดับฉุกเฉิน: "ลดไปที่ระดับต่ำกว่าซึ่งประหยัดน้ำมันกว่า รักษาทุกหยด"',
                    zh: '🔧 紧急下降："下降到燃料效率更好的较低高度。节省每一滴。"'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'pilot_032',
        text: {
            en: '🦅 Bird Strike on Takeoff: 30 seconds after liftoff, a flock of geese hits both engines. Engine 1 flames out immediately. Engine 2 is sputtering. You are 500 feet altitude, climbing slowly.',
            th: '🦅 นกชนตอนขึ้น: 30 วินาทีหลังขึ้น ฝูงห่านชนเครื่องยนต์ทั้งสอง เครื่อง 1 ดับทันที เครื่อง 2 สะดุด อยู่ที่ระดับ 500 ฟุต กำลังไต่ช้าๆ',
            zh: '🦅 起飞时撞鸟：起飞后30秒，一群鹅撞击了两个发动机。发动机1立即熄火。发动机2在喷溅。你在500英尺高度，缓慢爬升。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔄 Return to Airport: "Turn back! We can make the runway. Full thrust on Engine 2!"',
                    th: '🔄 กลับสนามบิน: "กลับไป! เรากลับถึงรันเวย์ได้ ดันเต็มที่เครื่อง 2!"',
                    zh: '🔄 返回机场："掉头！我们能回到跑道。发动机2全推力！"'
                },
                consequence: {
                    en: '💥 Engine 2 Fails! The turn bleeds too much energy. Engine 2 dies. You crash into buildings short of the runway. 50 dead.',
                    th: '💥 เครื่อง 2 ล้ม! การเลี้ยวใช้พลังงานมากเกิน เครื่อง 2 ตาย ชนอาคารก่อนถึงรันเวย์ คนตาย 50',
                    zh: '💥 发动机2故障！转弯消耗了太多能量。发动机2熄火。你撞进跑道前的建筑物。50人死亡。'
                },
                stats: { competence: 10, ethics: 20, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🌊 River Ditching: "Ahead is a river. Line up. We are going swimming. Brace for impact!"',
                    th: '🌊 ลงแม่น้ำ: "ข้างหน้ามีแม่น้ำ จัดแนว เราจะลงน้ำ เตรียมรับแรงกระแทก!"',
                    zh: '🌊 河上迫降："前面有条河。对准。我们要游泳了。准备受冲击！"'
                },
                consequence: {
                    en: '🏆 Miracle on the River! Perfect ditching. All 155 passengers survive. You are hailed as a hero. Book deals and movies follow.',
                    th: '🏆 ปาฏิหาริย์บนแม่น้ำ! ลงน้ำสมบูรณ์แบบ ผู้โดยสาร 155 คนรอดหมด ทุกคนเรียกคุณว่าฮีโร่ ข้อเสนอสัญญาหนังสือและหนังตามมา',
                    zh: '🏆 河上奇迹！完美迫降。所有155名乘客幸存。你被誉为英雄。书籍交易和电影随之而来。'
                },
                stats: { competence: 80, ethics: 70, leadership: 80, innovation: 60 }
            },
            {
                id: 'C',
                text: {
                    en: '🏟️ Open Field: "There! A golf course. Flat and clear. Gear up landing!"',
                    th: '🏟️ ทุ่งโล่ง: "นั่น! สนามกอล์ฟ แบนและโล่ง ลงแบบไม่เปิดล้อ!"',
                    zh: '🏟️ 空旷场地："那边！高尔夫球场。平坦且空旷。收起落架着陆！"'
                },
                consequence: {
                    en: '✈️ Controlled Crash! The belly landing works. 10 injuries but no deaths. The investigation clears you.',
                    th: '✈️ ตกแบบควบคุม! ลงท้องเครื่องสำเร็จ บาดเจ็บ 10 คนแต่ไม่มีคนตาย การสอบสวนพ้นผิด',
                    zh: '✈️ 受控坠毁！腹部着陆成功。10人受伤但无人死亡。调查宣布你无罪。'
                },
                stats: { competence: 70, ethics: 60, leadership: 70, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🔧 Attempt Restart: "Keep flying straight. Try to restart Engine 1. We need power!"',
                    th: '🔧 พยายามสตาร์ทใหม่: "บินตรงต่อไป พยายามสตาร์ทเครื่อง 1 เราต้องการกำลัง!"',
                    zh: '🔧 尝试重启："保持直飞。尝试重启发动机1。我们需要动力！"'
                },
                consequence: {
                    en: '⏱️ No Time! The restart procedure takes 90 seconds. You only have 20. You crash into suburbs. Total loss.',
                    th: '⏱️ ไม่มีเวลา! การรีสตาร์ทใช้เวลา 90 วินาที แต่มีแค่ 20 ชนในชานเมือง เสียหายทั้งหมด',
                    zh: '⏱️ 没时间了！重启程序需要90秒。你只有20秒。你撞进郊区。全毁。'
                },
                stats: { competence: 20, ethics: 30, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'pilot_033',
        text: {
            en: '👨‍⚕️ Medical Emergency: A passenger is having a heart attack. A doctor on board says he needs to land within 20 minutes or the man will die. You are 45 minutes from destination but there is a tiny airstrip 15 minutes away.',
            th: '👨‍⚕️ เหตุฉุกเฉินทางการแพทย์: ผู้โดยสารหัวใจวาย หมอบนเครื่องบอกว่าต้องลงภายใน 20 นาทีไม่งั้นตาย ยังอีก 45 นาทีถึงปลายทาง แต่มีสนามบินเล็กๆ อยู่ห่าง 15 นาที',
            zh: '👨‍⚕️ 医疗紧急情况：一名乘客心脏病发作。机上医生说他需要在20分钟内着陆否则会死。你距目的地还有45分钟，但15分钟外有个小型简易机场。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏥 Divert to Airstrip: "Diverting now! Get ambulance ready at the strip!"',
                    th: '🏥 เบี่ยงไปสนามบินเล็ก: "เบี่ยงทางเดี๋ยวนี้! เรียกรถพยาบาลพร้อมที่สนามบิน!"',
                    zh: '🏥 转向简易机场："现在转向！让救护车在简易机场准备好！"'
                },
                consequence: {
                    en: '❤️ Life Saved! The man survives. His family hugs you at the gate. But the 200 other passengers missed connections. Complaints filed.',
                    th: '❤️ ชีวิตรอด! ชายคนนั้นรอด ครอบครัวกอดคุณที่ประตู แต่ผู้โดยสารอีก 200 คนพลาดเที่ยวต่อ มีการร้องเรียน',
                    zh: '❤️ 生命获救！那个人活下来了。他的家人在登机口拥抱你。但其他200名乘客错过了转机。投诉被提交。'
                },
                stats: { competence: 50, ethics: 70, leadership: 50, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '✈️ Continue Flight: "We maintain course. The doctor will do his best. We have 200 other passengers with connections."',
                    th: '✈️ บินต่อ: "เรายังคงเส้นทาง หมอจะทำดีที่สุด เรามีผู้โดยสารอีก 200 คนที่มีเที่ยวต่อ"',
                    zh: '✈️ 继续飞行："我们保持航线。医生会尽力。我们还有200名有转机的乘客。"'
                },
                consequence: {
                    en: '💔 The Man Dies. The family sues. Media calls you heartless. You lose your job despite following company cost-benefit protocol.',
                    th: '💔 ชายคนนั้นตาย ครอบครัวฟ้อง สื่อเรียกคุณว่าไร้หัวใจ คุณเสียงานทั้งที่ทำตามโปรโตคอลบริษัท',
                    zh: '💔 那个人死了。家人起诉。媒体称你无情。尽管遵循公司成本效益协议，你还是失去了工作。'
                },
                stats: { competence: 30, ethics: -40, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📞 Airline Decision: "Call dispatch. Let management decide medical vs. schedule trade-off."',
                    th: '📞 ให้สายการบินตัดสิน: "โทรหาศูนย์ ให้ฝ่ายบริหารตัดสินเรื่องแลกเปลี่ยนระหว่างการแพทย์กับตาราง"',
                    zh: '📞 航空公司决定："呼叫调度中心。让管理层决定医疗与时刻表的权衡。"'
                },
                consequence: {
                    en: '⏱️ Delay Kills! Dispatch takes 5 minutes to decide. They say divert, but now it is too late. The man dies. You followed protocol but still carry guilt.',
                    th: '⏱️ ความล่าช้าฆ่าคน! ศูนย์ใช้เวลา 5 นาทีตัดสิน เขาบอกเบี่ยง แต่สายเกินแล้ว ชายคนนั้นตาย คุณทำตามแต่ยังมีความรู้สึกผิด',
                    zh: '⏱️ 延误致命！调度中心花了5分钟决定。他们说转向，但现在太晚了。那个人死了。你遵循了协议但仍然内疚。'
                },
                stats: { competence: 30, ethics: 10, leadership: -10, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '🚁 Request Medevac: "Can we get a helicopter intercept? Transfer the patient mid-flight?"',
                    th: '🚁 ขอเฮลิคอปเตอร์: "เราได้เฮลิคอปเตอร์มาสกัดไหม? ย้ายผู้ป่วยกลางอากาศ?"',
                    zh: '🚁 请求医疗直升机："我们能让直升机拦截吗？飞行中转移病人？"'
                },
                consequence: {
                    en: '🚫 Impossible! ATC says no helicopter can match your airspeed and altitude safely. The fantasy wastes 3 precious minutes.',
                    th: '🚫 เป็นไปไม่ได้! ATC บอกไม่มีเฮลิคอปเตอร์ไหนจี้ความเร็วและระดับของคุณได้อย่างปลอดภัย จินตนาการเสียเวลา 3 นาทีอันมีค่า',
                    zh: '🚫 不可能！空管说没有直升机能安全匹配你的空速和高度。幻想浪费了宝贵的3分钟。'
                },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 20 }
            }
        ]
    },
    {
        id: 'pilot_034',
        text: {
            en: '🌪️ Wind Shear on Final: 200 feet from touchdown, sudden downdraft slams you toward the runway. Sink rate alarm screaming. Airspeed collapsing.',
            th: '🌪️ ลมแรงฉับพลันใกล้ลง: ห่าง 200 ฟุตจากสัมผัสพื้น กระแสลมลงฉับพลันทุบคุณลงสู่รันเวย์ สัญญาณเตือนอัตราตกกำลังร้อง ความเร็วลดลงรวดเร็ว',
            zh: '🌪️ 最后阶段风切变：距着陆200英尺，突然的下降气流将你猛推向跑道。下沉率警报尖叫。空速崩溃。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚡ Full Thrust Go-Around: "TOGA! TOGA! Firewall the throttles! Climb out!"',
                    th: '⚡ ดันเต็มที่แล้วบินวน: "TOGA! TOGA! ดันแรงเต็มที่! ไต่ออกไป!"',
                    zh: '⚡ 全推力复飞："起飞复飞！起飞复飞！油门推到底！爬升！"'
                },
                consequence: {
                    en: '✈️ Clean Escape! Engines spool up just in time. You climb clear of the shear. Second approach is smooth. Perfect pilot technique.',
                    th: '✈️ หนีสะอาด! เครื่องยนต์เร่งทันเวลา ไต่พ้นลมแรง ลงครั้งที่สองได้สะดวก เทคนิคนักบินสมบูรณ์แบบ',
                    zh: '✈️ 干净逃脱！发动机及时加速。你爬升脱离切变。第二次进近顺利。完美的飞行员技术。'
                },
                stats: { competence: 70, ethics: 50, leadership: 60, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '💪 Power Through: "Add power but commit to landing! We are too close to go around!"',
                    th: '💪 บังคับผ่าน: "เพิ่มแรงแต่บังคับลง! เราใกล้เกินจะบินวนแล้ว!"',
                    zh: '💪 强行通过："加大动力但坚持着陆！我们太近了不能复飞！"'
                },
                consequence: {
                    en: '💥 Hard Landing! You slam the runway at 1,000 fpm descent. Landing gear collapses. Fuselage cracks. Injuries but no deaths. Career over.',
                    th: '💥 ลงแรง! กระแทกรันเวย์ที่อัตรา 1,000 ฟุตต่อนาที ขาลงพัง ลำตัวร้าว มีบาดเจ็บแต่ไม่มีคนตาย อาชีพจบ',
                    zh: '💥 硬着陆！你以1000英尺/分钟的下降率猛撞跑道。起落架坍塌。机身裂开。有伤亡但无人死亡。职业生涯结束。'
                },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🎯 Dive for Speed: "Pitch down! Trade altitude for airspeed! Then flare hard!"',
                    th: '🎯 โฉบลงหาความเร็ว: "ก้มลง! แลกระดับเอาความเร็ว! แล้วยกจมูกแรง!"',
                    zh: '🎯 俯冲求速：下降机头！用高度换空速！然后用力拉平！'
                },
                consequence: {
                    en: '🎲 Risky Save! It works... barely. You touchdown 50 knots fast and use every inch of runway. Passengers pale. FAA calls you in for questioning.',
                    th: '🎲 ช่วยเสี่ยง! ได้ผล... แทบไม่ สัมผัสพื้นเร็ว 50 นอตและใช้รันเวย์ทุกนิ้ว ผู้โดยสารซีด FAA เรียกไปสอบถาม',
                    zh: '🎲 冒险救援！成功了……勉强。你以超速50节着陆，用尽了跑道的每一寸。乘客脸色苍白。FAA叫你去问话。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📡 Warning Others: "Go around AND broadcast windshear warning to all aircraft on frequency!"',
                    th: '📡 เตือนคนอื่น: "บินวนและประกาศเตือนลมแรงให้เครื่องบินทั้งหมดบนความถี่!"',
                    zh: '📡 警告其他飞机："复飞并在频率上向所有飞机广播风切变警告！"'
                },
                consequence: {
                    en: '🏆 Heroic Airmanship! Three planes behind you also go around thanks to your warning. You saved many lives. Medal follows.',
                    th: '🏆 ความเป็นนักบินฮีโร่! เครื่องบินสามลำหลังคุณบินวนตามคำเตือน คุณช่วยชีวิตได้มาก ได้รับเหรียญตาม',
                    zh: '🏆 英勇的飞行技术！你后面的三架飞机也因你的警告而复飞。你救了很多生命。随后获得奖章。'
                },
                stats: { competence: 80, ethics: 70, leadership: 80, innovation: 40 }
            }
        ]
    },
    {
        id: 'pilot_035',
        text: {
            en: '🎭 Drunk Passenger: A belligerent drunk passenger is harassing flight attendants. He punched one. The nearest airport is 90 minutes away. Restraints are on board.',
            th: '🎭 ผู้โดยสารเมา: ผู้โดยสารเมาก้าวร้าวรังควาญลูกเรือ ชกหนึ่งคน สนามบินที่ใกล้ที่สุดอยู่ห่าง 90 นาที มีอุปกรณ์มัดบนเครื่อง',
            zh: '🎭 醉酒乘客：一名好斗的醉酒乘客骚扰空乘人员。他打了一个。最近的机场在90分钟外。机上有约束装置。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚨 Divert Immediately: "This is assault. Divert to nearest airport. Police will meet us."',
                    th: '🚨 เบี่ยงทันที: "นี่คือการทำร้าย เบี่ยงไปสนามบินที่ใกล้ที่สุด ตำรวจจะมารอ"',
                    zh: '🚨 立即转向："这是袭击。转向最近的机场。警察会等我们。"'
                },
                consequence: {
                    en: '⚖️ Justice Served! The drunk is arrested. But the diversion costs $50K. Company questions if you overreach.',
                    th: '⚖️ ความยุติธรรมมา! คนเมาถูกจับ แต่การเบี่ยงเสียค่าใช้จ่าย 50K บริษัทตั้งคำถามว่าคุณทำเกินไปหรือเปล่า',
                    zh: '⚖️ 正义得到伸张！醉汉被逮捕。但转向花费5万美元。公司质疑你是否反应过度。'
                },
                stats: { competence: 50, ethics: 60, leadership: 50, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔗 Restrain Him: "Zip-tie him to his seat. Continue to destination. File report on arrival."',
                    th: '🔗 มัดเขา: "มัดเขาไว้กับที่นั่งด้วยซิปไท บินต่อไปปลายทาง ยื่นรายงานตอนมาถึง"',
                    zh: '🔗 约束他："用束线带把他绑在座位上。继续前往目的地。到达后提交报告。"'
                },
                consequence: {
                    en: '📹 Viral Video! Passenger films the restraint. "Airline Brutality" trends. You did right but optics are terrible.',
                    th: '📹 วิดีโอไวรัล! ผู้โดยสารถ่ายการมัด "ความโหดร้ายของสายการบิน" เทรนด์ คุณทำถูกแต่ภาพลักษณ์แย่',
                    zh: '📹 病毒视频！乘客拍摄了约束过程。"航空公司暴行"成为趋势。你做对了但观感糟糕。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🍷 Offer More Alcohol: "Give him free drinks. Drunk people eventually pass out. Keep peace."',
                    th: '🍷 ยื่นเหล้าเพิ่ม: "ให้เขาเครื่องดื่มฟรี คนเมาสุดท้ายจะหลับ รักษาความสงบ"',
                    zh: '🍷 提供更多酒精："给他免费饮料。醉鬼最终会晕过去。保持和平。"'
                },
                consequence: {
                    en: '💀 Alcohol Poisoning! He passes out... permanently. Emergency landing. Cardiac arrest. He survives but sues. You enabled him.',
                    th: '💀 พิษจากเหล้า! เขาหมดสติ... ตลอดกาล ลงฉุกเฉิน หัวใจหยุด รอดแต่ฟ้อง คุณเป็นตัวการ',
                    zh: '💀 酒精中毒！他晕过去了……永久性的。紧急着陆。心脏骤停。他活下来了但起诉了。你助长了他。'
                },
                stats: { competence: -20, ethics: -50, leadership: -30, innovation: 0 }
            },
            {
                id: 'D',
                text: {
                    en: '💪 Passenger Volunteers: "Ask for able-bodied passenger volunteers to help restrain if needed. Build a team."',
                    th: '💪 ผู้โดยสารอาสา: "ขอผู้โดยสารที่แข็งแรงอาสาช่วยมัดถ้าจำเป็น สร้างทีม"',
                    zh: '💪 乘客志愿者："请求身体健康的乘客志愿者在需要时帮助约束。建立团队。"'
                },
                consequence: {
                    en: '🤝 Community Action! 6 passengers form a wall. The drunk calms down seeing he is outmatched. No violence needed.',
                    th: '🤝 การกระทำของชุมชน! ผู้โดยสาร 6 คนสร้างกำแพง คนเมาสงบลงเมื่อเห็นว่าแพ้เลข ไม่ต้องใช้ความรุนแรง',
                    zh: '🤝 社区行动！6名乘客形成一堵墙。醉汉看到自己被压制而冷静下来。无需暴力。'
                },
                stats: { competence: 60, ethics: 50, leadership: 70, innovation: 50 }
            }
        ]
    },
    {
        id: 'pilot_036',
        text: {
            en: '🚧 Runway Incursion: On takeoff roll at 120 knots, a cargo truck crosses the runway ahead. You have 5 seconds to decide.',
            th: '🚧 รถบุกรันเวย์: กำลังวิ่งขึ้นที่ 120 นอต รถบรรทุกวิ่งตัดรันเวย์ข้างหน้า มีเวลา 5 วินาทีตัดสิน',
            zh: '🚧 跑道侵入：起飞滑跑到120节时，一辆货车横穿前方跑道。你有5秒钟决定。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Abort Takeoff', th: '🛑 ยกเลิกการขึ้น', zh: '🛑 中断起飞' }, consequence: { en: '💥 Hard brake! You stop 50 feet from the truck. All survive. Tires blown.', th: '💥 เบรกแรง! หยุดห่าง 50 ฟุตจากรถ ทุกคนรอด ยางระเบิด', zh: '💥 猛刹车！你在离卡车50英尺处停下。所有人幸存。轮胎爆裂。' }, stats: { competence: 70, ethics: 60, leadership: 60, innovation: 20 } },
            { id: 'B', text: { en: '🚀 Continue Takeoff', th: '🚀 ขึ้นต่อ', zh: '🚀 继续起飞' }, consequence: { en: '✈️ You rotate early and clear the truck by 10 feet. Masterful!', th: '✈️ ยกจมูกเร็วและพ้นรถไป 10 ฟุต ชั้นเซียน!', zh: '✈️ 你提前拉起，以10英尺间隙越过卡车。精湛！' }, stats: { competence: 80, ethics: 40, leadership: 70, innovation: 60 } },
            { id: 'C', text: { en: '⬅️ Swerve Off Runway', th: '⬅️ เลี้ยวออกรันเวย์', zh: '⬅️ 偏离跑道' }, consequence: { en: '💥 You hit soft ground. Landing gear collapses. No deaths but aircraft totaled.', th: '💥 ชนพื้นอ่อน ขาพับ ไม่มีคนตายแต่เครื่องเสียหมด', zh: '💥 你撞上软地。起落架坍塌。无人死亡但飞机报废。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 30 } },
            { id: 'D', text: { en: '📢 Warning Horn', th: '📢 บีบแตร', zh: '📢 鸣笛警告' }, consequence: { en: '⏱️ Too late! The truck hears but cannot clear in time. Collision. 15 dead.', th: '⏱️ สายเกิน! รถได้ยินแต่หลบไม่ทัน ชน คนตาย 15', zh: '⏱️ 太晚了！卡车听到但来不及避开。碰撞。15人死亡。' }, stats: { competence: 10, ethics: 20, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'pilot_037',
        text: {
            en: '📡 Total Instrument Failure: All screens go black. No GPS, no artificial horizon, no airspeed. You are in clouds at night.',
            th: '📡 เครื่องมือล้มทั้งหมด: จอทั้งหมดดับ ไม่มี GPS ไม่มีขอบฟ้าเทียม ไม่มีความเร็ว อยู่ในเมฆกลางคืน',
            zh: '📡 仪表全失：所有屏幕都黑了。没有GPS，没有姿态仪，没有空速表。你在夜间云中。'
        },
        options: [
            { id: 'A', text: { en: '🧭 Fly by Feel', th: '🧭 บินด้วยสัมผัส', zh: '🧭 凭感觉飞' }, consequence: { en: '🌀 Spatial Disorientation! You enter a death spiral. Everyone dies.', th: '🌀 หลงทิศ! เข้าวงเวียนมรณะ ทุกคนตาย', zh: '🌀 空间迷向！你进入死亡螺旋。所有人死亡。' }, stats: { competence: -20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '📱 Use iPad Backup', th: '📱 ใช้ iPad สำรอง', zh: '📱 使用iPad备份' }, consequence: { en: '🎯 Smart Pilot! The backup iPad saves the day. You navigate to clear air and land safely.', th: '🎯 นักบินฉลาด! iPad สำรองช่วยชีวิต นำทางสู่อากาศโล่งและลงปลอดภัย', zh: '🎯 聪明的飞行员！备用iPad救了你。你导航到晴空并安全着陆。' }, stats: { competence: 80, ethics: 50, leadership: 70, innovation: 70 } },
            { id: 'C', text: { en: '📞 ATC Vectors', th: '📞 ให้ ATC นำทาง', zh: '📞 空管引导' }, consequence: { en: '🎙️ Controlled Flight! ATC guides you down using radar vectors. Perfect teamwork.', th: '🎙️ บินควบคุม! ATC นำลงด้วยเรดาร์ ทีมเวิร์คสมบูรณ์', zh: '🎙️ 受控飞行！空管用雷达引导你下降。完美团队合作。' }, stats: { competence: 70, ethics: 60, leadership: 60, innovation: 30 } },
            { id: 'D', text: { en: '☀️ Climb Above Clouds', th: '☀️ ไต่เหนือเมฆ', zh: '☀️ 爬升至云上' }, consequence: { en: '⛽ Fuel runs out waiting for dawn. You glide to a crash landing. 40 injuries.', th: '⛽ น้ำมันหมดรอรุ่งสาง ร่อนลงตกแรง บาดเจ็บ 40', zh: '⛽ 等待黎明时燃料耗尽。你滑翔迫降。40人受伤。' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: 20 } }
        ]
    },
    {
        id: 'pilot_038',
        text: {
            en: '🔫 Hijacker Threat: A passenger claims to have a bomb. Demands you fly to a hostile nation.',
            th: '🔫 แฮกเครื่องบิน: ผู้โดยสารอ้างว่ามีระเบิด เรียกร้องให้บินไปประเทศศัตรู',
            zh: '🔫 劫机威胁：一名乘客声称有炸弹要求你飞往敌对国家。'
        },
        options: [
            { id: 'A', text: { en: '✈️ Comply', th: '✈️ ทำตาม', zh: '✈️ 服从' }, consequence: { en: '🎭 Fake Bomb! Military intercepts. Hijacker arrested. You followed protocol correctly.', th: '🎭 ระเบิดปลอม! กองทัพสกัด แฮกถูกจับ คุณทำตามขั้นตอนถูก', zh: '🎭 假炸弹！军方拦截。劫机者被捕。你正确遵守了协议。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🥊 Fight Back', th: '🥊 สู้กลับ', zh: '🥊 反击' }, consequence: { en: '💀 Real Bomb! You overpower him but he triggers it. Total loss.', th: '💀 ระเบิดจริง! คุณจัดการได้แต่เขากดชนวน เสียหายทั้งหมด', zh: '💀 真炸弹！你制服了他但他引爆了。全毁。' }, stats: { competence: 10, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🎤 Negotiate', th: '🎤 เจรจา', zh: '🎤 谈判' }, consequence: { en: '🕐 5-Hour Standoff. Eventually he surrenders. All safe but traumatized.', th: '🕐 ปะทะ 5 ชั่วโมง ในที่สุดเขายอมแพ้ ทุกคนปลอดภัยแต่บอบช้ำ', zh: '🕐 5小时对峙。最终他投降。所有人安全但受创伤。' }, stats: { competence: 50, ethics: 60, leadership: 70, innovation: 40 } },
            { id: 'D', text: { en: '🎯 Secret Code to ATC', th: '🎯 ส่งรหัสลับให้ ATC', zh: '🎯 向空管发密码' }, consequence: { en: '🚁 Tactical Team! Special forces board mid-flight. Hijacker neutralized. Hero pilot!', th: '🚁 ทีมยุทธวิธี! กองกำลังพิเศษขึ้นระหว่างบิน แฮกถูกปราบ นักบินฮีโร่!', zh: '🚁 战术小队！特种部队飞行中登机。劫机者被制服。英雄飞行员！' }, stats: { competence: 80, ethics: 70, leadership: 80, innovation: 70 } }
        ]
    },
    {
        id: 'pilot_039',
        text: {
            en: '🌋 Volcanic Ash Cloud: You fly into unexpected ash. Engines start coughing. Windscreen obscured.',
            th: '🌋 เถ้าภูเขาไฟ: บินเข้าเถ้าโดยไม่คาดคิด เครื่องยนต์ไอติด กระจกหน้ามัว',
            zh: '🌋 火山灰云：你飞进意外的火山灰。发动机开始咳嗽。挡风玻璃模糊。'
        },
        options: [
            { id: 'A', text: { en: '⬇️ Emergency Descent', th: '⬇️ ลดฉุกเฉิน', zh: '⬇️ 紧急下降' }, consequence: { en: '✈️ Clear Air! You drop below the ash layer. Engines recover. Scary but successful.', th: '✈️ อากาศโล่ง! ลดต่ำกว่าชั้นเถ้า เครื่องยนต์ฟื้น น่ากลัวแต่สำเร็จ', zh: '✈️ 晴空！你降至火山灰层下方。发动机恢复。惊险但成功。' }, stats: { competence: 70, ethics: 50, leadership: 60, innovation: 40 } },
            { id: 'B', text: { en: '↩️ 180 Turn', th: '↩️ กลับหลัง 180', zh: '↩️ 180度转向' }, consequence: { en: '🎯 Smart Move! You exit the ash cloud. All 4 engines damaged but functional.', th: '🎯 ท่าฉลาด! ออกจากเถ้าได้ เครื่องยนต์ 4 ตัวเสียหายแต่ใช้ได้', zh: '🎯 明智之举！你退出火山灰云。所有4个发动机受损但可用。' }, stats: { competence: 75, ethics: 50, leadership: 65, innovation: 50 } },
            { id: 'C', text: { en: '⚡ Max Power', th: '⚡ แรงสูงสุด', zh: '⚡ 最大功率' }, consequence: { en: '💥 Engines Flame Out! Ash ingestion too severe. All engines fail. Glide to emergency landing.', th: '💥 เครื่องยนต์ดับ! กินเถ้ามากเกิน เครื่องยนต์ล้มหมด ร่อนลงฉุกเฉิน', zh: '💥 发动机熄火！吸入火山灰过多。所有发动机失效。滑翔紧急着陆。' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '📡 Broadcast Warning', th: '📡 ประกาศเตือน', zh: '📡 广播警告' }, consequence: { en: '🏆 Saved 20 Planes! Your warning prevents a catastrophe. Medal of Honor.', th: '🏆 ช่วย 20 ลำ! คำเตือนป้องกันภัยพิบัติ ได้เหรียญกล้า', zh: '🏆 拯救20架飞机！你的警告防止了灾难。荣誉勋章。' }, stats: { competence: 80, ethics: 80, leadership: 80, innovation: 50 } }
        ]
    },
    {
        id: 'pilot_040',
        text: {
            en: '👶 Baby Delivery: A pregnant passenger goes into labor. No doctor on board. 2 hours to destination.',
            th: '👶 ทารกคลอดบนเครื่อง: ผู้โดยสารท้องแก่เจ็บท้องคลอด ไม่มีหมอบนเครื่อง อีก 2 ชั่วโมงถึงปลายทาง',
            zh: '👶 婴儿分娩：孕妇乘客临产。机上无医生。距目的地2小时。'
        },
        options: [
            { id: 'A', text: { en: '🏥 Immediate Divert', th: '🏥 เบี่ยงทันที', zh: '🏥 立即转向' }, consequence: { en: '👶 Healthy Baby! Land at regional hospital. Mother and child fine. Passengers applaud.', th: '👶 ทารกสุขภาพดี! ลงที่โรงพยาบาลภูมิภาค แม่ลูกสบายดี ผู้โดยสารปรบมือ', zh: '👶 健康宝宝！在地区医院着陆。母子平安。乘客鼓掌。' }, stats: { competence: 60, ethics: 70, leadership: 60, innovation: 30 } },
            { id: 'B', text: { en: '✈️ Continue Flight', th: '✈️ บินต่อ', zh: '✈️ 继续飞行' }, consequence: { en: '👶 Air Birth! Flight attendants deliver the baby mid-flight. Viral news story!', th: '👶 คลอดบนอากาศ! ลูกเรือทำคลอดกลางอากาศ ข่าวไวรัล!', zh: '👶 空中分娩！空乘人员在飞行中接生。病毒新闻故事！' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 60 } },
            { id: 'C', text: { en: '📞 Medical Advice', th: '📞 ขอคำแนะนำทางการแพทย์', zh: '📞 医疗建议' }, consequence: { en: '🎙️ Remote Doctor! Ground medical team guides crew through delivery. Success!', th: '🎙️ หมอทางไกล! ทีมแพทย์พื้นดินนำลูกเรือทำคลอด สำเร็จ!', zh: '🎙️ 远程医生！地面医疗团队指导机组人员接生。成功！' }, stats: { competence: 70, ethics: 60, leadership: 70, innovation: 50 } },
            { id: 'D', text: { en: '🚁 Helicopter Medevac', th: '🚁 เฮลิคอปเตอร์พยาบาล', zh: '🚁 直升机医疗' }, consequence: { en: '🚫 Impossible! No helicopter can reach cruise altitude. Waste precious time.', th: '🚫 เป็นไปไม่ได้! เฮลิคอปเตอร์ถึงระดับบินไม่ได้ เสียเวลาอันมีค่า', zh: '🚫 不可能！没有直升机能到达巡航高度。浪费宝贵时间。' }, stats: { competence: 20, ethics: 40, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'pilot_041',
        text: {
            en: '🔥 Cargo Fire Warning: Fire alarm in the main cargo hold. You are 2 hours from land. Fire suppression bottles are available but limited.',
            th: '🔥 สัญญาณเตือนไฟไหม้สินค้า: สัญญาณเตือนไฟไหม้ในห้องเก็บสินค้าหลัก อยู่ห่างจากฝั่ง 2 ชั่วโมง มีถังดับเพลิงแต่จำกัด',
            zh: '🔥 货舱火警警告：主货舱火警。距陆地2小时。灭火瓶可用但有限。'
        },
        options: [
            { id: 'A', text: { en: '🧯 Discharge & Dive', th: '🧯 ฉีดสารดับเพลิงและดำดิ่ง', zh: '🧯 释放并俯冲' }, consequence: { en: '🌊 Ocean Ditch! Fire persists. You ditch near a ship. 80% survival.', th: '🌊 ลงน้ำ! ไฟยังไหม้ ลงน้ำใกล้เรือ รอด 80%', zh: '🌊 海上迫降！大火持续。你在船附近迫降。80%幸存。' }, stats: { competence: 60, ethics: 70, leadership: 60, innovation: 30 } },
            { id: 'B', text: { en: '🔄 Verify First', th: '🔄 ตรวจสอบก่อน', zh: '🔄 先验证' }, consequence: { en: '🔥 Too Late! While verifying sensors, fire breaches the cabin floor. Total loss.', th: '🔥 สายเกิน! ขณะตรวจสอบเซ็นเซอร์ ไฟทะลุพื้นห้องโดยสาร เสียหายทั้งหมด', zh: '🔥 太晚了！验证传感器时，大火烧穿客舱地板。全毁。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🧯 Discharge & Max Speed', th: '🧯 ฉีดสารดับเพลิงและเร่งสุด', zh: '🧯 释放并全速' }, consequence: { en: '🏁 Race Against Time! You land just as smoke fills the cockpit. Everyone evacuates safely. Plane burns on tarmac.', th: '🏁 แข่งกับเวลา! ลงจอดพอดีควันเต็มห้องนักบิน อพยพปลอดภัย เครื่องไหม้บนลาน', zh: '🏁 与时间赛跑！烟雾充满驾驶舱时着陆。所有人安全撤离。飞机在停机坪燃烧。' }, stats: { competence: 80, ethics: 60, leadership: 70, innovation: 50 } },
            { id: 'D', text: { en: '🌡️ Depressurize Cabin', th: '🌡️ ลดความดันห้องโดยสาร', zh: '🌡️以此舱减压' }, consequence: { en: '❄️ Fire Starved! Removing oxygen slows the fire. You make it to land with minor damage.', th: '❄️ ไฟขาดออกซิเจน! การเอาออกซิเจนออกช่วยชะลอไฟ ลงจอดได้เสียหายเล็กน้อย', zh: '❄️ 火势受阻！移除氧气减缓火势。轻微受损着陆。' }, stats: { competence: 90, ethics: 50, leadership: 80, innovation: 80 } }
        ]
    },
    {
        id: 'pilot_042',
        text: {
            en: '💤 Co-Pilot Incapacitated: Your co-pilot passes out mid-flight. Food poisoning. You are alone in the cockpit on a long-haul flight.',
            th: '💤 นักบินผู้ช่วยหมดสติ: นักบินผู้ช่วยหมดสติกลางอากาศ อาหารเป็นพิษ คุณอยู่คนเดียวในห้องนักบินในเที่ยวบินระยะไกล',
            zh: '💤 副驾驶丧失能力：副驾驶飞行中晕倒。食物中毒。你在长途飞行中独自在驾驶舱。'
        },
        options: [
            { id: 'A', text: { en: '📢 Call Flight Attendant', th: '📢 เรียกลูกเรือ', zh: '📢 呼叫空乘' }, consequence: { en: '🤝 Team Support! Head FA helps monitor radios while you fly. Safe landing.', th: '🤝 ทีมสนับสนุน! หัวหน้าลูกเรือช่วยฟังวิทยุขณะคุณบิน ลงจอดปลอดภัย', zh: '🤝 团队支持！乘务长帮你监控无线电。安全着陆。' }, stats: { competence: 60, ethics: 50, leadership: 70, innovation: 30 } },
            { id: 'B', text: { en: '💊 Medicate Him', th: '💊 ให้ยาเขา', zh: '💊 给他也药' }, consequence: { en: '💤 He Wakes Up Groggy. He tries to help but makes a mistake. You have to override him.', th: '💤 เขาตื่นมางัวเงีย พยายามช่วยแต่ทำพลาด คุณต้องแย่งบังคับ', zh: '💤 他昏沉醒来。试图帮忙但犯错。你不得不接管。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '💪 Solo Hero', th: '💪 ฮีโร่ลุยเดี่ยว', zh: '💪 孤胆英雄' }, consequence: { en: '😫 Exhaustion! You handle everything but are exhausted on landing. Minor runway excursion.', th: '😫 หมดแรง! คุณทำทุกอย่างแต่หมดแรงตอนลง ออกนอกรันเวย์เล็กน้อย', zh: '😫 筋疲力尽！你处理一切但着陆时精疲力竭。轻微冲出跑道。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '🔍 Doctor Passenger', th: '🔍 ผู้โดยสารที่เป็นหมอ', zh: '🔍 医生乘客' }, consequence: { en: '🩺 Perfect Care! Doctor treats co-pilot in business class. You focus on flying. All good.', th: '🩺 การดูแลสมบูรณ์แบบ! หมอรักษานักบินผู้ช่วยในชั้นธุรกิจ คุณโฟกัสการบิน ทุกอย่างดี', zh: '🩺 完美护理！医生在商务舱治疗副驾驶。你专注于飞行。一切顺利。' }, stats: { competence: 70, ethics: 60, leadership: 60, innovation: 40 } }
        ]
    },
    {
        id: 'pilot_043',
        text: {
            en: '🌪️ Microburst Encounter: On approach, you see a rain shaft that looks like a microburst. You are on a strict schedule.',
            th: '🌪️ เจอลมไมโครเบิร์สต: ตอนเข้าใกล้ เห็นลำฝนที่ดูเหมือนไมโครเบิร์สต ตารางเวลาแน่นมาก',
            zh: '🌪️ 遭遇微下击暴流：进近时，你看到像微下击暴流的雨柱。时间表很紧。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Go Around', th: '🛑 บินวน', zh: '🛑 复飞' }, consequence: { en: '✅ Safety First! You delay 20 mins but avoid a crash. Passengers grumble but live.', th: '✅ ปลอดภัยไว้ก่อน! ล่าช้า 20 นาทีแต่ไม่ตก ผู้โดยสารบ่นแต่รอด', zh: '✅ 安全第一！延误20分钟但避免坠机。乘客抱怨但活着。' }, stats: { competence: 80, ethics: 60, leadership: 70, innovation: 20 } },
            { id: 'B', text: { en: '⚡ Punch Through', th: '⚡ ฝ่าเข้าไป', zh: '⚡ 强行穿越' }, consequence: { en: '📉 500ft Drop! You lose massive altitude. Terrain warning triggers. Barely pull out.', th: '📉 ตก 500 ฟุต! ระดับลดฮวบ เตือนพื้นที่ดัง ดึงขึ้นได้หวุดหวิด', zh: '📉 掉落500英尺！高度剧降。地形警告触发。勉强拉起。' }, stats: { competence: 10, ethics: -20, leadership: -10, innovation: 10 } },
            { id: 'C', text: { en: '🔄 Hold Pattern', th: '🔄 บินรอ', zh: '🔄 等待航线' }, consequence: { en: '⏳ Waiting Game. Storm passes in 10 mins. Safe landing. Smart decision.', th: '⏳ เกมรอ พายุผ่านใน 10 นาที ลงจอดปลอดภัย ตัดสินใจฉลาด', zh: '⏳ 等待游戏。风暴10分钟通过。安全着陆。明智决定。' }, stats: { competence: 70, ethics: 50, leadership: 60, innovation: 30 } },
            { id: 'D', text: { en: '🎯 Tight Turn Approach', th: '🎯 เลี้ยวแคบเข้าหา', zh: '🎯甚至急转弯进近' }, consequence: { en: '🎢 Unstable! You avoid the rain but the turn is too tight. Unstable approach. Go around anyway.', th: '🎢 ไม่เสถียร! เลี่ยงเฝนได้แต่เลี้ยวแคบไป การเข้าใกล้ไม่นิ่ง ต้องบินวนอยู่ดี', zh: '🎢 不稳定！你避开了雨但转弯太急。进近不稳定。还是复飞了。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'pilot_044',
        text: {
            en: '🧊 Wings Icing: Ice is building up on the wings faster than de-icing boots can clear it. Performance is degrading.',
            th: '🧊 น้ำแข็งเกาะปีก: น้ำแข็งเกาะปีกเร็วกว่าระบบละลายน้ำแข็งจะเคลียร์ได้ สมรรถนะกำลังลดลง',
            zh: '🧊 机翼结冰：机翼结冰速度超过除冰靴清除速度。性能正在下降。'
        },
        options: [
            { id: 'A', text: { en: '⬇️ Descend to Warmer Air', th: '⬇️ ลดลงสู่อากาศอุ่น', zh: '⬇️ 下降至暖空气' }, consequence: { en: '🌡️ Ice Melts! Performance returns. But you burn more fuel at low altitude.', th: '🌡️ น้ำแข็งละลาย! สมรรถนะกลับมา แต่เปลืองน้ำมันที่ระดับต่ำ', zh: '🌡️ 冰融化！性能恢复。但在低空燃烧更多燃料。' }, stats: { competence: 70, ethics: 50, leadership: 60, innovation: 30 } },
            { id: 'B', text: { en: '🔄 Turn Back', th: '🔄 กลับหลัง', zh: '🔄 掉头' }, consequence: { en: '🛡️ Conservative Safety. Flight cancelled but no risk taken. Passengers rebooked.', th: '🛡️ ปลอดภัยแบบอนุรักษ์นิยม ยกเลิกเที่ยวบินแต่ไม่เสี่ยง ผู้โดยสารจองใหม่', zh: '🛡️ 保守安全。航班取消但不冒险。乘客改签。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 10 } },
            { id: 'C', text: { en: '💪 Power Through', th: '💪 เร่งเครื่องฝ่า', zh: '💪 加力穿越' }, consequence: { en: '😰 Stall Warning! Ice disturbs airflow. Stall horn blares. You dive to recover.', th: '😰 เตือนร่วง! น้ำแข็งกวนอากาศ แตรเตือนร่วงดัง ดิ่งลงเพื่อแก้', zh: '😰 失速警告！冰干扰气流。失速号角响起。你俯冲改出。' }, stats: { competence: 20, ethics: -10, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '📈 Climb Over Weather', th: '📈 ไต่เหนือสภาพอากาศ', zh: '📈 爬升越过天气' }, consequence: { en: '🐌 Too Heavy! Ice weight prevents climb. You stall and lose 2000ft. Dangerous.', th: '🐌 หนักเกิน! น้ำหนักน้ำแข็งทำไต่ไม่ได้ เครื่องร่วงเสีย 2000 ฟุต อันตราย', zh: '🐌 太重了！冰的重量阻止爬升。你失速并损失2000英尺。危险。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'pilot_045',
        text: {
            en: '🛰️ GPS Jamming: You are flying near a conflict zone. GPS signal is lost due to military jamming. Navigation is degraded.',
            th: '🛰️ GPS ถูกรบกวน: บินใกล้เขตขัดแย้ง สัญญาณ GPS หายเพราะทหารกวน การนำทางลดประสิทธิภาพ',
            zh: '🛰️ GPS干扰：飞近冲突区。因军事干扰GPS信号丢失。导航降级。'
        },
        options: [
            { id: 'A', text: { en: '🧭 Inertial Navigation', th: '🧭 การนำทางเฉื่อย', zh: '🧭 惯性导航' }, consequence: { en: '🗺️ Old School Tech! You rely on INS gyros. Drift is minimal. You arrive safely.', th: '🗺️ เทคโนโลยีเก่า! พึ่งไจโร INS ความคลาดเคลื่อนน้อย ถึงปลอดภัย', zh: '🗺️ 老派技术！你依靠惯性导航陀螺仪。漂移极小。安全到达。' }, stats: { competence: 80, ethics: 50, leadership: 60, innovation: 40 } },
            { id: 'B', text: { en: '📡 Request Radar Vectors', th: '📡 ขอเรดาร์นำทาง', zh: '📡 请求雷达引导' }, consequence: { en: '🚫 No Radar Coverage! ATC cannot see you either. You are flying blind.', th: '🚫 ไม่มีเรดาร์! ATC ก็ไม่เห็นคุณ คุณบินตาบอด', zh: '🚫 无雷达覆盖！空管也看不到你。你在盲飞。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '👀 Visual Landmarks', th: '👀 จุดสังเกตทางสายตา', zh: '👀 视觉地标' }, consequence: { en: '☁️ Cloud Cover! You cannot see ground landmarks. You get lost.', th: '☁️ เมฆบัง! ไม่เห็นจุดสังเกตพื้นดิน หลงทาง', zh: '☁️ 云层覆盖！你看不到地面地标。你迷路了。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '📻 Proximity Radio', th: '📻 วิทยุระยะใกล้', zh: '📻 近距无线电' }, consequence: { en: '📡 Aircraft Relay. You ask other planes for position. Teamwork gets you through.', th: '📡 เครื่องบินต่อสัญญาณ ถามตำแหน่งเครื่องอื่น ทีมเวิร์คช่วยให้ผ่านไปได้', zh: '📡 飞机接力。你询问其他飞机位置。团队合作带你通过。' }, stats: { competence: 70, ethics: 60, leadership: 70, innovation: 60 } }
        ]
    },
    {
        id: 'pilot_046',
        text: {
            en: '👓 Laser Strike: A green laser hits the cockpit during final approach. Both pilots are temporarily blinded.',
            th: '👓 เลเซอร์ยิงใส่: เลเซอร์สีเขียวยิงเข้าห้องนักบินช่วงเข้าใกล้ตาสองคนบอดชั่วคราว',
            zh: '👓 激光袭击：进近最后阶段绿色激光击中驾驶舱。两名飞行员暂时失明。'
        },
        options: [
            { id: 'A', text: { en: '🛑 Go Around Blind', th: '🛑 บินวนแบบตาบอด', zh: '🛑 盲目复飞' }, consequence: { en: '🎢 Chaotic Climb. You pitch up instinctively. Disoriented but safe altitude.', th: '🎢 การไต่ที่วุ่นวาย เชิดหัวขึ้นตามสัญชาตญาณ งงทิศแต่ระดับปลอดภัย', zh: '🎢 混乱爬升。你本能地拉起。迷失方向但高度安全。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '🤖 Autoland', th: '🤖 ระบบลงจอดอัตโนมัติ', zh: '🤖 自动着陆' }, consequence: { en: '🎯 Tech Saves Eyes! You engage Autoland. The plane lands itself perfectly.', th: '🎯 เทคโนโลยีช่วยตา! เปิด Autoland เครื่องลงจอดเองสมบูรณ์แบบ', zh: '🎯 科技救眼！你启动自动着陆。飞机完美自动着陆。' }, stats: { competence: 80, ethics: 50, leadership: 60, innovation: 70 } },
            { id: 'C', text: { en: '😎 Look Away', th: '😎 มองไปทางอื่น', zh: '😎 移开视线' }, consequence: { en: '⚡ Too Late. Damage done. You strain to see runway lights. Hard landing.', th: '⚡ สายไป บาดเจ็บแล้ว พยายามมองไฟรันเวย์ ลงกระแทก', zh: '⚡ 太晚了。伤害造成。你努力看跑道灯。硬着陆。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '👮 Report Position', th: '👮 รายงานตำแหน่ง', zh: '👮 报告位置' }, consequence: { en: '🚓 Police Dispatch. You circle while police catch the culprit. Justice!', th: '🚓 ตำรวจออกปฏิบัติการ บินวนรอตำรวจจับคนร้าย ยุติธรรม!', zh: '🚓 警察出动。你在警察抓捕罪犯时盘旋。正义！' }, stats: { competence: 60, ethics: 70, leadership: 60, innovation: 30 } }
        ]
    },
    {
        id: 'pilot_047',
        text: {
            en: '🐕 Loose Animal: A large dog escapes its crate in the cargo hold and is chewing wiring.',
            th: '🐕 สัตว์หลุด: สุนัขตัวใหญ่หลุดจากกรงในห้องสินค้าและกำลังกัดสายไฟ',
            zh: '🐕 动物逃脱：一只大狗在货舱逃出笼子正在咬电线。'
        },
        options: [
            { id: 'A', text: { en: '💡 Cut Power to Hold', th: '💡 ตัดไฟห้องสินค้า', zh: '💡 切断货舱电源' }, consequence: { en: '🛑 Systems Offline! You lose some sensors but the dog stops getting shocked. Safe.', th: '🛑 ระบบออฟไลน์! เสียเซ็นเซอร์บางตัวแต่หมาหยุดถูกไฟดูด ปลอดภัย', zh: '🛑 系统离线！你失去一些传感器但狗不再被电击。安全。' }, stats: { competence: 60, ethics: 60, leadership: 50, innovation: 40 } },
            { id: 'B', text: { en: '📉 Emergency Land', th: '📉 ลงฉุกเฉิน', zh: '📉 紧急着陆' }, consequence: { en: '🐶 Dog Rescued. Wiring damaged but repairable. Owner grateful.', th: '🐶 ช่วยหมาได้ สายไฟเสียหายแต่ซ่อมได้ เจ้าของซึ้งใจ', zh: '🐶 狗获救。电线受损但可修复。主人感激。' }, stats: { competence: 50, ethics: 70, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '✈️ Continue', th: '✈️ ไปต่อ', zh: '✈️ 继续' }, consequence: { en: '🔥 Short Circuit. Sparks ignite insulation. Fire in cargo. See Pilot 041.', th: '🔥 ลัดวงจร ประกายไฟจุดฉนวน ไฟไหม้ห้องสินค้า ดูข้อ Pilot 041', zh: '🔥 短路。火花引燃绝缘体。货舱起火。见Pilot 041。' }, stats: { competence: 20, ethics: -10, leadership: -10, innovation: 0 } },
            { id: 'D', text: { en: '💤 Sedative Gas?', th: '💤 ก๊าซยาสลบ?', zh: '💤 镇静气体？' }, consequence: { en: '🚫 Feature Not Installed. Airlines don\'t carry sedative gas. You watched too many movies.', th: '🚫 ไม่มีฟังก์ชั่นนี้ สายการบินไม่มีก๊าซยาสลบ ดูหนังมากไป', zh: '🚫 未安装此功能。航空公司不携带镇静气体。你电影看多了。' }, stats: { competence: 10, ethics: 20, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'pilot_048',
        text: {
            en: '🍽️ Food Poisoning: Both pilots ate the fish. You both feel stomach cramps. Standard protocol says pilots eat different meals, but catering messed up.',
            th: '🍽️ อาหารเป็นพิษ: นักบินทั้งสองกินปลา ปวดท้องทั้งคู่ โปรโตคอลบอกให้กินต่างกันแต่ครัวทำพลาด',
            zh: '🍽️ 食物中毒：两名飞行员都吃了鱼。都感到胃痉挛。标准协议规定飞行员吃不同餐食，但配餐搞砸了。'
        },
        options: [
            { id: 'A', text: { en: '🚽 Take Turns', th: '🚽 สลับเวร', zh: '🚽 轮流' }, consequence: { en: '🤢 Miserable Flight. You manage to land but it is the hardest flight of your life.', th: '🤢 เที่ยวบินสุดทรมาน ลงจอดได้แต่เป็นเที่ยวบินที่ยากที่สุดในชีวิต', zh: '🤢 悲惨的飞行。你设法着陆但这你一生最艰难的飞行。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 20 } },
            { id: 'B', text: { en: '📢 Any Pilots on Board?', th: '📢 มีนักบินบนเครื่องไหม?', zh: '📢 机上有飞行员吗？' }, consequence: { en: '👨‍✈️ Passenger Lands! An off-duty captain takes controls. You are hospitalized.', th: '👨‍✈️ ผู้โดยสารลงจอด! กัปตันนอกเวลารับช่วง คุณเข้าโรงพยาบาล', zh: '👨‍✈️ 乘客着陆！一名下班机长接管控制。你住院了。' }, stats: { competence: 50, ethics: 60, leadership: 60, innovation: 40 } },
            { id: 'C', text: { en: '💊 Emergency Kit', th: '💊 ชุดยาฉุกเฉิน', zh: '💊 急救箱' }, consequence: { en: '💊 Meds Help. Strong anti-nausea meds keep you functional. Protocol review follows.', th: '💊 ยาช่วย ยาแก้คลื่นไส้แรงช่วยให้ทำงานได้ มีการทบทวนโปรโตคอลตามมา', zh: '💊 药物有帮助。强力止吐药让你保持功能。随后进行协议审查。' }, stats: { competence: 70, ethics: 50, leadership: 60, innovation: 30 } },
            { id: 'D', text: { en: '🤖 Autopilot Max', th: '🤖 ออโต้ไพลอตสูงสุด', zh: '🤖 自动驾驶最大化' }, consequence: { en: '💻 Tech Dependent. You let the plane do 99% of work. Risky if systems fail.', th: '💻 พึ่งเทค ให้เครื่องทำ 99% เสี่ยงถ้าระบบล่ม', zh: '💻 依赖科技。你让飞机做99%的工作。如果系统故障很危险。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'pilot_049',
        text: {
            en: '🌋 Volcanic Eruption Visible: You see a plume eruption 100 miles away. Routes say it is clear, but eyes say otherwise.',
            th: '🌋 ภูเขาไฟระเบิดเห็นได้ชัด: เห็นควันระเบิด 100 ไมล์ เส้นทางบอกโล่งแต่ตาเห็นต่าง',
            zh: '🌋 火山喷发可见：你看到100英里外有烟羽喷发。航线显示畅通，但眼睛看到的相反。'
        },
        options: [
            { id: 'A', text: { en: '🛫 Deviate Upwind', th: '🛫 เบี่ยงทิศเหนือลม', zh: '🛫 上风处绕飞' }, consequence: { en: '✅ Safe Path. You avoid the ash. ATC confirms eruption 10 mins later.', th: '✅ ทางปลอดภัย เลี่ยงเถ้าได้ ATC ยืนยันระเบิด 10 นาทีต่อมา', zh: '✅ 安全路径。你避开了火山灰。空管10分钟后确认喷发。' }, stats: { competence: 80, ethics: 50, leadership: 70, innovation: 50 } },
            { id: 'B', text: { en: '📡 Trust Flight Plan', th: '📡 เชื่อแผนบิน', zh: '📡 相信飞行计划' }, consequence: { en: '😷 Sulfur Smell. You enter thin ash. Engines degrade 10%. Maintenance required.', th: '😷 กลิ่นกำมะถัน เข้าเถ้าบาง เครื่องยนต์ลด 10% ต้องซ่อมบำรุง', zh: '😷 硫磺味。你进入稀薄火山灰。发动机性能下降10%。需要维修。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '📸 Take Photos', th: '📸 ถ่ายรูป', zh: '📸 拍照' }, consequence: { en: '🤳 Distracted! You drift off course while snapping pics. ATC scolds you.', th: '🤳 เสียสมาธิ! หลุดเส้นทางขณะถ่ายรูป ATC ดุ', zh: '🤳 分心！拍照时偏离航线。空管责骂你。' }, stats: { competence: 10, ethics: 10, leadership: 0, innovation: 0 } },
            { id: 'D', text: { en: '📞 PIREP', th: '📞 รายงานนักบิน', zh: '📞 飞行员报告' }, consequence: { en: '🤝 Community Service. Your report warns everyone. Airspace closed efficiently.', th: '🤝 บริการชุมชน รายงานของคุณเตือนทุกคน น่านฟ้าปิดอย่างมีประสิทธิภาพ', zh: '🤝 社区服务。你的报告警告了所有人。空域有效关闭。' }, stats: { competence: 70, ethics: 70, leadership: 60, innovation: 30 } }
        ]
    },
    {
        id: 'pilot_050',
        text: {
            en: '退休 Retirement Flight: It is your final flight. Captain. Water cannon salute planned. The weather is marginal crosswind.',
            th: '退休 เที่ยวบินเกษียณ: เที่ยวบินสุดท้าย กัปตัน มีแผนยิงน้ำต้อนรับ อากาศลมขวางหมิ่นเหม่',
            zh: '退休 退休飞行：这是你的最后一次飞行，机长。计划有水炮礼。天气是边缘侧风。'
        },
        options: [
            { id: 'A', text: { en: '👨‍✈️ Greaser Landing', th: '👨‍✈️ ลงนิ่มสุดๆ', zh: '👨‍✈️ 丝滑着陆' }, consequence: { en: '🧈 Butter! Perfect touchdown. Applause. A legendary end to a career.', th: '🧈 เนย! แตะพื้นสมบูรณ์แบบ ปรบมือ จบอาชีพอย่างตำนาน', zh: '🧈 黄油般顺滑！完美着陆。掌声。职业生涯的传奇结局。' }, stats: { competence: 90, ethics: 50, leadership: 80, innovation: 50 } },
            { id: 'B', text: { en: '🔄 Divert and Bus', th: '🔄 เบี่ยงและนั่งรถ', zh: '🔄 备降坐大巴' }, consequence: { en: '🛡️ Safety Legend. You chose safety over ego on your last day. Respect.', th: '🛡️ ตำนานความปลอดภัย เลือกปลอดภัยมากกว่าอืโก้วันสุดท้าย นับถือ', zh: '🛡️ 安全传奇。你在最后一天选择了安全通过自我。尊重。' }, stats: { competence: 100, ethics: 80, leadership: 90, innovation: 20 } },
            { id: 'C', text: { en: '🎉 Let FO Land', th: '🎉 ให้ผู้ช่วยลง', zh: '🎉 让副驾驶着陆' }, consequence: { en: '🤝 Torch Passed. FO makes a firm landing. You mentor until the very last second.', th: '🤝 ส่งต่อคบเพลิง ผู้ช่วยลงหนักแน่น คุณสอนจนวินาทีสุดท้าย', zh: '🤝 火炬传递。副驾驶稳健着陆。你指导到最后一秒。' }, stats: { competence: 80, ethics: 70, leadership: 90, innovation: 40 } },
            { id: 'D', text: { en: '🤕 Crash', th: '🤕 ตก', zh: '🤕 坠毁' }, consequence: { en: '🏴 Sad Ending. You pushed limits for glory and failed. Legacy tarnished.', th: '🏴 จบเศร้า ดันขีดจำกัดเพื่อเกียรติยศแต่พลาด มรดกมัวหมอง', zh: '🏴 悲伤结局。你为了荣耀突破极限但失败了。遗产蒙羞。' }, stats: { competence: 0, ethics: 0, leadership: 0, innovation: 0 } }
        ]
    }
];


