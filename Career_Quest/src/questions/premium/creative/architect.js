/* eslint-disable no-unused-vars */
export const architectQuestions = [
    {
        id: 'architect_001',
        text: {
            en: '🏢 The Glass Tower Paradox: A billionaire client demands an all-glass skyscraper in the middle of the desert. It looks iconic but is an environmental disaster that will require massive air conditioning energy. He says, "Build it, or I hire someone else."',
            th: '🏢 ปริศนาตึกระฟ้ากระจก: ลูกค้ามหาเศรษฐีต้องการตึกระฟ้าที่ทำจากกระจกทั้งหมดใจกลางทะเลทราย มันดูเป็นสัญลักษณ์แต่เป็นหายนะทางสิ่งแวดล้อมที่ต้องใช้พลังงานเครื่องปรับอากาศมหาศาล เขาบอกว่า "สร้างมัน หรือฉันจะจ้างคนอื่น"',
            zh: '🏢 玻璃塔悖论：一位亿万富翁客户要求在沙漠中央建造一座全玻璃摩天大楼。它看起来标志性但却是一场环境灾难，需要巨大的空调能源。他说："建造它，或者我雇别人。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏗️ Just Build It: "Yes sir. The customer is always right. It will be a shiny monument to your ego."',
                    th: '🏗️ สร้างมันไปเถอะ: "ครับผม ลูกค้าถูกเสมอ มันจะเป็นอนุสาวรีย์ที่แวววาวสำหรับอัตตาของคุณ"',
                    zh: '🏗️ 尽管建造："是的先生。顾客永远是对的。这将是你自我的闪亮纪念碑。"'
                },
                consequence: {
                    en: '💵 Profit over Planet! The firm makes millions. You get a huge bonus. But environmentalists protest outside your office daily. You feel hollow.',
                    th: '💵 กำไรมาก่อนโลก! บริษัททำเงินได้หลายล้าน คุณได้รับโบนัสมหาศาล แต่นักสิ่งแวดล้อมประท้วงหน้าสำนักงานของคุณทุกวัน คุณรู้สึกว่างเปล่า',
                    zh: '💵 利润高于地球！公司赚了几百万。你得到巨额奖金。但环保主义者每天在你的办公室外抗议。你感到空虚。'
                },
                stats: { competence: 40, ethics: -30, leadership: -10, innovation: -20 }
            },
            {
                id: 'B',
                text: {
                    en: '🌵 The Sustainable Refusal: "No. It is irresponsible. I will not put my name on a climate crime. Use stone and shade or find another architect."',
                    th: '🌵 การปฏิเสธอย่างยั่งยืน: "ไม่ มันไม่มีความรับผิดชอบ ผมจะไม่ใส่ชื่อของผมในอาชญากรรมทางสภาพอากาศ ใช้หินและร่มเงาหรือหาสถาปนิกคนอื่น"',
                    zh: '🌵 可持续的拒绝："不。这是不负责任的。我不会把名字签在气候犯罪上。用石头和阴凉处或者找别的建筑师。"'
                },
                consequence: {
                    en: '🚪 Fired but Famous! He fires you. But your refusal goes viral. You become a hero for green architecture. Smaller, ethical clients line up.',
                    th: '🚪 ถูกไล่ออกแต่ดัง! เขาไล่คุณออก แต่การปฏิเสธของคุณกลายเป็นไวรัล คุณกลายเป็นฮีโร่ของสถาปัตยกรรมสีเขียว ลูกค้าที่มีจริยธรรมรายย่อยเข้าแถวรอ',
                    zh: '🚪 被解雇但出名！他解雇了你。但你的拒绝在网上疯传。你成为绿色建筑的英雄。较小的、有道德的客户排队等候。'
                },
                stats: { competence: 10, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '💡 High-Tech Solution: "What if we use smart-glass that tints automatically and generate solar power? It costs 40% more, but you will be a tech pioneer."',
                    th: '💡 ทางออกไฮเทค: "ถ้าเราใช้สมาร์ทกลาสที่ปรับสีอัตโนมัติและผลิตพลังงานแสงอาทิตย์ล่ะ? มันแพงกว่า 40% แต่คุณจะเป็นผู้บุกเบิกเทคโนโลยี"',
                    zh: '💡 高科技解决方案："如果我们使用自动变色并产生太阳能的智能玻璃呢？成本高出 40%，但你会成为技术先驱。"'
                },
                consequence: {
                    en: '🚀 Future Built! The client loves the ego boost of being "futuristic." The building wins innovation awards. You pushed the industry forward.',
                    th: '🚀 อนาคตที่สร้างขึ้น! ลูกค้าชอบการเพิ่มอัตตาจากการเป็น "ล้ำยุค" อาคารได้รับรางวัลนวัตกรรม คุณผลักดันอุตสาหกรรมไปข้างหน้า',
                    zh: '🚀 未来已建！客户喜欢这种"未来主义"带来的自我提升。这座建筑获得了创新奖。你推动了行业向前发展。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'architect_002',
        text: {
            en: '🏚️ Community vs. Gentrification: A developer wants to bulldoze a historic, low-income neighborhood to build luxury condos. They offer you the lead architect role. It is the biggest contract of your career.',
            th: '🏚️ ชุมชนกับเจนตริฟิเคชั่น: นักพัฒนาต้องการรื้อถอนย่านประวัติศาสตร์ที่มีรายได้น้อยเพื่อสร้างคอนโดหรู พวกเขาเสนอตำแหน่งสถาปนิกหลักให้คุณ มันเป็นสัญญาที่ใหญ่ที่สุดในอาชีพของคุณ',
            zh: '🏚️ 社区与士绅化：开发商想推平一个历史悠久的低收入社区来建造豪华公寓。他们为你提供首席建筑师的角色。这是你职业生涯中最大的合同。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💰 Take the Job: "Cities change. If I do not design it, someone worse will. I will try to add a small park for the public."',
                    th: '💰 รับงาน: "เมืองเปลี่ยนแปลง ถ้าผมไม่ออกแบบ คนที่แย่กว่านี้จะทำ ผมจะพยายามเพิ่มสวนสาธารณะเล็กๆ ให้ประชาชน"',
                    zh: '💰 接下工作："城市在变化。如果我不设计，会有更糟糕的人来做。我会尝试为公众增加一个小公园。"'
                },
                consequence: {
                    en: '🏢 Cold Success! The condos are beautiful but empty investments. The former residents protest the opening. You are rich but hated locally.',
                    th: '🏢 ความสำเร็จที่เย็นชา! คอนโดสวยงามแต่เป็นการลงทุนที่ว่างเปล่า ผู้อยู่อาศัยเดิมประท้วงการเปิดตัว คุณรวยแต่ถูกเกลียดชังในท้องถิ่น',
                    zh: '🏢 冷酷的成功！公寓很漂亮但却是空置的投资。前居民抗议开业。你有钱但在当地被憎恨。'
                },
                stats: { competence: 40, ethics: -40, leadership: -10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 The Ethical Stand: "I cannot destroy this community\'s history. Turn down the contract and write an op-ed about preserving the neighborhood."',
                    th: '🛑 จุดยืนทางจริยธรรม: "ผมไม่สามารถทำลายประวัติศาสตร์ของชุมชนนี้ได้ ปฏิเสธสัญญาและเขียนบทความแสดงความคิดเห็นเกี่ยวกับการอนุรักษ์ย่านนั้น"',
                    zh: '🛑 道德立场："我不能摧毁这个社区的历史。拒绝合同并写一篇关于保护社区的专栏文章。"'
                },
                consequence: {
                    en: '❤️ People\'s Architect! You lose the money, but the community rallies behind you. You start a non-profit for affordable housing design.',
                    th: '❤️ สถาปนิกของประชาชน! คุณเสียเงิน แต่ชุมชนรวมตัวกันสนับสนุนคุณ คุณเริ่มองค์กรไม่แสวงหาผลกำไรสำหรับการออกแบบที่อยู่อาศัยราคาไม่แพง',
                    zh: '❤️ 人民建筑师！你失去了钱，但社区团结在你身后。你创办了一个非营利组织，致力于经济适用房设计。'
                },
                stats: { competence: -10, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Integrating the Old: "I will take it ONLY if we preserve the facade of the old buildings and include 30% affordable housing units inside."',
                    th: '🤝 บูรณาการของเก่า: "ผมจะรับก็ต่อเมื่อเรารักษาด้านหน้าของอาคารเก่าและรวมยูนิตที่อยู่อาศัยราคาไม่แพง 30% ไว้ข้างใน"',
                    zh: '🤝 整合旧物："只有当我们保留旧建筑的立面并在内部包含 30% 的经济适用房单元时，我才会接受。"'
                },
                consequence: {
                    en: '🏗️ Difficult Balance! The developer hates it, but the city approves it because of your plan. It is a construction nightmare but a social triumph. Stress is high.',
                    th: '🏗️ สมดุลที่ยากลำบาก! นักพัฒนาเกลียดมัน แต่เมืองอนุมัติเพราะแผนของคุณ มันเป็นฝันร้ายของการก่อสร้างแต่เป็นชัยชนะทางสังคม ความเครียดสูง',
                    zh: '🏗️ 艰难的平衡！开发商讨厌它，但因为你的计划，城市批准了它。这是一场建筑噩梦，但也是社会胜利。压力很大。'
                },
                stats: { competence: 30, ethics: 30, leadership: 30, innovation: 40 }
            }
        ]
    },
    {
        id: 'architect_003',
        text: {
            en: '🌉 The Bridge Collapse: During an inspection of a bridge you designed 5 years ago, you find a micro-fracture in a support beam. It *might* hold for another 20 years, or fail tomorrow. Closing it will cause city-wide gridlock.',
            th: '🌉 สะพานถล่ม: ระหว่างการตรวจสอบสะพานที่คุณออกแบบเมื่อ 5 ปีก่อน คุณพบรอยร้าวเล็กๆ ในคานรับน้ำหนัก มัน *อาจจะ* อยู่ได้อีก 20 ปี หรือพังในวันพรุ่งนี้ การปิดสะพานจะทำให้จราจรติดขัดทั่วเมือง',
            zh: '🌉 桥梁倒塌：在检查你5年前设计的桥梁时，你发现支撑梁有一个微小的裂缝。它 *可能* 会再支撑20年，或者明这就倒塌。关闭它将导致全市交通瘫痪。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤫 Silent Monitor: "Install sensors to watch it closely. Do not panic the public yet. We can fix it quietly at night over months."',
                    th: '🤫 ผู้เฝ้าระวังเงียบ: "ติดตั้งเซ็นเซอร์เพื่อเฝ้าดูอย่างใกล้ชิด อย่าเพิ่งให้ประชาชนตื่นตระหนก เราสามารถแก้ไขอย่างเงียบๆ ในตอนกลางคืนเป็นเวลาหลายเดือน"',
                    zh: '🤫 沉默监控："安装传感器密切监视它。先不要让公众恐慌。我们可以在几个月内的晚上悄悄修复它。"'
                },
                consequence: {
                    en: '🎲 Gambling with Lives! It holds. You fix it. No one knows. But you barely sleep for 6 months. Your hair turns gray from stress.',
                    th: '🎲 พนันด้วยชีวิต! มันอยู่ได้ คุณซ่อมมัน ไม่มีใครรู้ แต่คุณแทบไม่ได้นอนเป็นเวลา 6 เดือน ผมของคุณเปลี่ยนเป็นสีเทาจากความเครียด',
                    zh: '🎲博彩生命！它撑住了。你修复了它。没人知道。但你这6个月几乎没睡过觉。你的头发因压力而变白。'
                },
                stats: { competence: 30, ethics: -20, leadership: 10, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚨 Immediate Shutdown: "Close the bridge NOW! I do not care about traffic. Human life is non-negotiable. Call the Mayor."',
                    th: '🚨 ปิดทันที: "ปิดสะพานเดี๋ยวนี้! ผมไม่สนเรื่องจราจร ชีวิตมนุษย์ต่อรองไม่ได้ โทรหานายกเทศมนตรี"',
                    zh: '🚨 立即关闭："也就是现在关闭桥梁！我不在乎交通。人的生命是不可谈判的。给市长打电话。"'
                },
                consequence: {
                    en: '🛡️ Public Safety Hero! The city hates the traffic, but engineers confirm the risk was real. You saved lives. Your reputation for integrity is ironclad.',
                    th: '🛡️ ฮีโร่ความปลอดภัยสาธารณะ! เมืองเกลียดการจราจร แต่วิศวยืนยันว่าความเสี่ยงนั้นมีอยู่จริง คุณช่วยชีวิตคน ชื่อเสียงด้านความซื่อสัตย์ของคุณแข็งแกร่งดั่งเหล็กกล้า',
                    zh: '🛡️ 公共安全英雄！城市讨厌交通，但工程师证实风险是真实的。你拯救了生命。你正直的声誉坚不可摧。'
                },
                stats: { competence: 20, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🔧 Innovative Patch: "Use experimental carbon-fiber wraps to reinforce it while cars are still driving. It is unproven but theoretically safe."',
                    th: '🔧 การแก้ไขเชิงนวัตกรรม: "ใช้แผ่นหุ้มคาร์บอนไฟเบอร์ทดลองเพื่อเสริมความแข็งแรงในขณะที่รถยังวิ่งอยู่ มันยังไม่ได้รับการพิสูจน์แต่ปลอดภัยในทางทฤษฎี"',
                    zh: '🔧 创新补丁："使用实验性的碳纤维包裹层在车辆行驶时加固它。这是未经证实的，但在理论上是安全的。"'
                },
                consequence: {
                    en: '🧪 Engineering Marvel! The patch works perfectly. You publish a paper on the technique. You turned a disaster into a breakthrough.',
                    th: '🧪 สิ่งมหัศจรรย์ทางวิศวกรรม! แผ่นแปะทำงานได้อย่างสมบูรณ์แบบ คุณตีพิมพ์บทความเกี่ยวกับเทคนิคนี้ คุณเปลี่ยนหายนะให้กลายเป็นความก้าวหน้า',
                    zh: '🧪 工程奇迹！补丁完美工作。你发表了一篇关于该技术的论文。你把一场灾难变成了突破。'
                },
                stats: { competence: 50, ethics: 10, leadership: 20, innovation: 50 }
            }
        ]
    },
    {
        id: 'architect_004',
        text: {
            en: '🏚️ The Historic Renovation: You are tasked with modernizing a 200-year-old library. The city wants "sleek and modern." The historians want "preservation." The budget only allows for one direction.',
            th: '🏚️ การบูรณะประวัติศาสตร์: คุณได้รับมอบหมายให้ปรับปรุงห้องสมุดอายุ 200 ปีให้ทันสมัย เมืองต้องการ "โฉบเฉี่ยวและทันสมัย" นักประวัติศาสตร์ต้องการ "การอนุรักษ์" งบประมาณอนุญาตเพียงทิศทางเดียว',
            zh: '🏚️ 历史翻新：你的任务是将一座拥有 200 年历史的图书馆现代化。城市想要"时尚和现代"。历史学家想要"保护"。预算只允许一个方向。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🦄 Futuristic Overhaul: "Gut the inside. Keep the shell. Put a glass box on top. Make it a destination for tourists."',
                    th: '🦄 การรื้อระบบแห่งอนาคต: "รื้อข้างในออก เก็บเปลือกไว้ ใส่กล่องแก้วด้านบน ทำให้เป็นจุดหมายปลายทางสำหรับนักท่องเที่ยว"',
                    zh: '🦄 未来主义大修："掏空内部。保留外壳。在上面放一个玻璃盒子。让它成为游客的目的地。"'
                },
                consequence: {
                    en: '📸 Instagram Famous! The library becomes a viral hotspot. Traditionalists hate it, but usage goes up 300%. The city loves the tax revenue.',
                    th: '📸 ดังใน Instagram! ห้องสมุดกลายเป็นจุดฮอตไวรัล พวกอนุรักษ์นิยมเกลียดมัน แต่ยอดการใช้งานพุ่งขึ้น 300% เมืองชอบรายได้จากภาษี',
                    zh: '📸 Instagram 名人！图书馆成为病毒式热点。传统主义者讨厌它，但使用率上升了 300%。城市喜欢税收收入。'
                },
                stats: { competence: 30, ethics: -10, leadership: 20, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '📜 Faithful Restoration: "Restore the original woodwork. Hide the technology. Make it look exactly like 1820. Respect the past."',
                    th: '📜 การบูรณะอย่างซื่อสัตย์: "บูรณะงานไม้ดั้งเดิม ซ่อนเทคโนโลยี ทำให้ดูเหมือนปี 1820 เป๊ะๆ เคารพในอดีต"',
                    zh: '📜 忠实修复："修复原来的木制品。隐藏技术。让它看起来和 1820 年一模一样。尊重过去。"'
                },
                consequence: {
                    en: '🕰️ Time Capsule! It is beautiful and quiet. The historians give you an award. But young people stop coming. It becomes a museum, not a library.',
                    th: '🕰️ แคปซูลเวลา! มันสวยงามและเงียบสงบ นักประวัติศาสตร์มอบรางวัลให้คุณ แต่คนรุ่นใหม่เลิกมา มันกลายเป็นพิพิธภัณฑ์ ไม่ใช่ห้องสมุด',
                    zh: '🕰️ 时间胶囊！它美丽而安静。历史学家给你颁奖。但年轻人不再来了。它变成了博物馆，而不是图书馆。'
                },
                stats: { competence: 40, ethics: 30, leadership: 10, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '⚖️ The "Ghost" Structure: "Build a transparent, ultra-modern wing that gently touches the old building without damaging it. Contrast creates dialogue."',
                    th: '⚖️ โครงสร้าง "ผี": "สร้างปีกตึกที่โปร่งใสและทันสมัยสุดๆ ที่สัมผัสอาคารเก่าอย่างนุ่มนวลโดยไม่ทำลายมัน ความขัดแย้งสร้างบทสนทนา"',
                    zh: '⚖️ "幽灵"结构："建造一个透明的、超现代的侧翼，轻轻接触旧建筑而不损坏它。对比创造对话。"'
                },
                consequence: {
                    en: '🎨 Architectural Poetry! The design is praised globally for its sensitivity and boldness. You bridged the centuries perfectly.',
                    th: '🎨 บทกวีทางสถาปัตยกรรม! การออกแบบได้รับการยกย่องทั่วโลกในด้านความอ่อนไหวและความกล้าหาญ คุณเชื่อมศตวรรษได้อย่างสมบูรณ์แบบ',
                    zh: '🎨 建筑诗歌！该设计因其敏感性和大胆性而享誉全球。你完美地连接了几个世纪。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 40 }
            }
        ]
    },
    {
        id: 'architect_005',
        text: {
            en: '📉 The Material Switch: Steel prices skyrocketed overnight. To stay on budget for the school project, the contractor suggests using Grade-B concrete instead. It is technically legal but less durable.',
            th: '📉 การเปลี่ยนวัสดุ: ราคาเหล็กพุ่งสูงขึ้นชั่วข้ามคืน เพื่อให้อยู่ในงบประมาณสำหรับโครงการโรงเรียน ผู้รับเหมาแนะนำให้ใช้คอนกรีตเกรด B แทน มันถูกกฎหมายในทางเทคนิคแต่ทนทานน้อยกว่า',
            zh: '📉 材料转换：钢材价格一夜之间飙升。为了保持学校项目的预算，承包商建议改用 B 级混凝土。这在技术上是合法的，但不那么耐用。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💸 Accept the Substitute: "We have no more money. Use the concrete. It fits the code. We need to finish the school on time."',
                    th: '💸 ยอมรับสิ่งทดแทน: "เราไม่มีเงินแล้ว ใช้คอนกรีตเถอะ มันผ่านเกณฑ์ เราต้องทำโรงเรียนให้เสร็จตรงเวลา"',
                    zh: '💸 接受替代品："我们没钱了。用混凝土吧。它符合规范。我们需要按时完成学校。"'
                },
                consequence: {
                    en: '🏚️ Cracks in 5 Years! The school opens on time. But maintenance costs triple in a few years as cracks appear. The school board blames you.',
                    th: '🏚️ รอยร้าวใน 5 ปี! โรงเรียนเปิดตรงเวลา แต่ค่าบำรุงรักษาเพิ่มขึ้นสามเท่าในไม่กี่ปีเมื่อรอยร้าวปรากฏขึ้น คณะกรรมการโรงเรียนโทษคุณ',
                    zh: '🏚️ 5 年内裂缝！学校按时开学。但随着裂缝的出现，维护成本在几年内增加了两倍。学校董事会责怪你。'
                },
                stats: { competence: -10, ethics: -20, leadership: 10, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Halt and Raise Funds: "Stop construction. I will go to the city council and beg for more budget. I won\'t build a fragile school for kids."',
                    th: '🛑 หยุดและระดมทุน: "หยุดการก่อสร้าง ผมจะไปสภาเมืองและขอมบประมาณเพิ่ม ผมจะไม่สร้างโรงเรียนเปราะบางให้เด็กๆ"',
                    zh: '🛑 停止并筹集资金："停止施工。我会去市议会乞求更多预算。我不会给孩子们建一所脆弱的学校。"'
                },
                consequence: {
                    en: '📢 Public Outcry! The delay angers parents. But your speech goes viral. The city grants the funds. You look like a champion of safety.',
                    th: '📢 เสียงโวยวายของสาธารณชน! ความล่าช้าทำให้ผู้ปกครองโกรธ แต่สุนทรพจน์ของคุณกลายเป็นไวรัล เมืองอนุมัติเงินทุน คุณดูเหมือนแชมป์แห่งความปลอดภัย',
                    zh: '📢 公众抗议！延误激怒了家长。但你的演讲在网上疯传。城市拨发了资金。你看起来像是安全的捍卫者。'
                },
                stats: { competence: 20, ethics: 50, leadership: 50, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '📐 Redesign the Structure: "Redesign the roof to use timber instead of steel. It is cheaper and sustainable, but requires re-doing all the engineering blueprints."',
                    th: '📐 ออกแบบโครงสร้างใหม่: "ออกแบบหลังคาใหม่โดยใช้ไม้แทนเหล็ก มันถูกกว่าและยั่งยืน แต่ต้องทำพิมพ์เขียววิศวกรรมใหม่ทั้งหมด"',
                    zh: '📐 重新设计结构："重新设计屋顶，用木材代替钢材。它更便宜且可持续，但需要重做所有工程蓝图。"'
                },
                consequence: {
                    en: '🌲 Eco-Innovation! The timber look is warm and beautiful. It becomes a case study for sustainable school design. Hard work paid off.',
                    th: '🌲 นวัตกรรมเชิงนิเวศ! ลุคไม้ดูอบอุ่นและสวยงาม มันกลายเป็นกรณีศึกษาสำหรับการออกแบบโรงเรียนที่ยั่งยืน การทำงานหนักคุ้มค่า',
                    zh: '🌲 生态创新！木材外观温暖而美丽。它成为了可持续学校设计的案例研究。努力得到了回报。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 50 }
            }
        ]
    },
    {
        id: 'architect_006',
        text: {
            en: '♿ The Accessibility Battle: A wealthy client wants a grand, sweeping staircase as the entrance to their museum. Adding a wheelchair ramp would "ruin the symmetry." The law requires it.',
            th: '♿ การต่อสู้เพื่อการเข้าถึง: ลูกค้าผู้มั่งคั่งต้องการบันไดวนที่ยิ่งใหญ่เป็นทางเข้าพิพิธภัณฑ์ของพวกเขา การเพิ่มทางลาดสำหรับวีลแชร์จะ "ทำลายความสมมาตร" กฎหมายบังคับให้มี',
            zh: '♿ 无障碍之战：一位富有的客户想要一个宏伟的、蜿蜒的楼梯作为博物馆的入口。增加轮椅坡道会"破坏对称性"。法律要求这样做。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚪 The Side Door: "Put the ramp around the back near the service entrance. Hide it with bushes. The front stays pure."',
                    th: '🚪 ประตูข้าง: "เอาทางลาดไปไว้ด้านหลังใกล้ทางเข้าเซอร์วิส ซ่อนมันด้วยพุ่มไม้ ด้านหน้ายังคงบริสุทธิ์"',
                    zh: '🚪 侧门："把坡道放在服务入口附近的后面。用灌木丛把它藏起来。前面保持纯净。"'
                },
                consequence: {
                    en: '🚫 Discrimination Lawsuit! The museum opens. Disability advocates protest the "second-class citizen" treatment. The client sues you for bad advice.',
                    th: '🚫 การฟ้องร้องเรื่องการเลือกปฏิบัติ! พิพิธภัณฑ์เปิด ผู้สนับสนุนคนพิการประท้วงการปฏิบัติแบบ "พลเมืองชั้นสอง" ลูกค้าฟ้องคุณเพราะคำแนะนำที่ไม่ดี',
                    zh: '🚫 歧视诉讼！博物馆开放。残疾人权益倡导者抗议"二等公民"待遇。客户因糟糕的建议起诉你。'
                },
                stats: { competence: -20, ethics: -50, leadership: -20, innovation: -10 }
            },
            {
                id: 'B',
                text: {
                    en: '🎢 The Ramp IS the Design: "Make the entire entrance a long, spiraling gentle ramp that everyone walks up. No stairs at all. Universal design."',
                    th: '🎢 ทางลาดคือการออกแบบ: "ทำให้ทางเข้าทั้งหมดเป็นทางลาดเกลียวยาวที่ทุกคนเดินขึ้นได้ ไม่มีบันไดเลย การออกแบบเพื่อทุกคน"',
                    zh: '🎢 坡道就是设计："让整个入口成为每个人都走上去的长长的螺旋形缓坡。根本没有楼梯。通用设计。"'
                },
                consequence: {
                    en: '♿ Inclusion Icon! The "Infinite Walk" becomes the museum\'s signature feature. Everyone loves the easy climb. You won an award for inclusivity.',
                    th: '♿ ไอคอนแห่งการรวมทุกคน! "Infinite Walk" กลายเป็นจุดเด่นของพิพิธภัณฑ์ ทุกคนชอบการเดินขึ้นที่ง่ายดาย คุณได้รับรางวัลสำหรับการไม่แบ่งแยก',
                    zh: '♿ 包容性图标！"无限行走"成为博物馆的标志性特征。每个人都喜欢轻松的攀登。你因包容性获奖。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🦾 Hidden Lift: "Install a high-tech platform lift that hides into the stairs when not used. Expensive, but keeps the look."',
                    th: '🦾 ลิฟต์ซ่อน: "ติดตั้งลิฟต์แพลตฟอร์มไฮเทคที่ซ่อนอยู่ในบันไดเมื่อไม่ได้ใช้งาน แพงนะ แต่รักษาลุคไว้ได้"',
                    zh: '🦾 隐藏式升降机："安装一个高科技平台升降机，不用时隐藏在楼梯里。很贵，但保持了外观。"'
                },
                consequence: {
                    en: '🔧 Maintenance Hell! It looks great on day one. By day 30, it breaks fast. Guests are stuck. It becomes a money pit.',
                    th: '🔧 นรกแห่งการซ่อมบำรุง! วันแรกดูดี วันที่ 30 พังยับ แขกติดอยู่ข้างใน กลายเป็นหลุมสูบเงิน',
                    zh: '🔧 维护地狱！第一天看起来很棒。到了第 30 天，它坏得很快。客人被困住了。它变成了个无底洞。'
                },
                stats: { competence: 20, ethics: 10, leadership: 0, innovation: 40 }
            }
        ]
    },
    {
        id: 'architect_007',
        text: {
            en: '🏗️ The Strike: The construction workers union goes on strike demanded safer conditions halfway through the skyscraper build. The project is bleeding money every day it stops.',
            th: '🏗️ การนัดหยุดงาน: สหภาพแรงงานก่อสร้างนัดหยุดงานเรียกร้องสภาพการทำงานที่ปลอดภัยกว่ากลางคันระหว่างการสร้างตึกระฟ้า โครงการสูญเสียเงินทุกวันที่หยุด',
            zh: '🏗️ 罢工：建筑工人工会在摩天大楼建造中途罢工，要求更安全的条件。项目每停止一天都在流血。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤜 Break the Strike: "Hire non-union scab labor. We have a deadline. Security will escort them in."',
                    th: '🤜 ทำลายการนัดหยุดงาน: "จ้างแรงงานขัดตาทัพที่ไม่อยู่ในสหภาพ เรามีกำหนดส่ง รปภ. จะพาพวกเขาเข้าไป"',
                    zh: '🤜 破坏罢工："雇佣非工会的工贼。我们有截止日期。安保人员会护送他们进去。"'
                },
                consequence: {
                    en: '⚔️ Violence and Sabotage! The site becomes a battleground. Equipment is damaged. The bad PR is catastrophic. No one wants to lease in the building.',
                    th: '⚔️ ความรุนแรงและการก่อวินาศกรรม! ไซต์งานกลายเป็นสนามรบ อุปกรณ์เสียหาย PR แย่จนหายนะ ไม่มีใครอยากเช่าตึกนี้',
                    zh: '⚔️ 暴力和破坏！工地变成了战场。设备受损。糟糕的公关是灾难性的。没人想在这栋楼里租房。'
                },
                stats: { competence: 10, ethics: -40, leadership: -40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '👷‍♂️ Negotiate Safety: "Meet with the union leaders. Agree to better harnesses and shorter shifts. Cut costs elsewhere (interior finishes)."',
                    th: '👷‍♂️ เจรจาความปลอดภัย: "พบผู้นำสหภาพ ตกลงเรื่องสายรัดที่ดีกว่าและกะที่สั้นลง ลดต้นทุนที่อื่น (การตกแต่งภายใน)"',
                    zh: '👷‍♂️ 谈判安全："与工会领导人会面。同意更好的安全带和更短的轮班。削减其他地方的成本（内部装修）。"'
                },
                consequence: {
                    en: '🤝 Solidarity! The workers return with high morale. They work faster and better because they feel respected. The finish is plain, but the structure is solid.',
                    th: '🤝 ความสามัคคี! คนงานกลับมาด้วยขวัญกำลังใจสูง พวกเขาทำงานเร็วขึ้นและดีขึ้นเพราะรู้สึกได้รับความเคารพ การตกแต่งเรียบง่าย แต่โครงสร้างแข็งแกร่ง',
                    zh: '🤝 团结！工人们带着高昂的士气回来了。他们工作得更快更好，因为他们感到了尊重。装修很朴素，但结构很坚固。'
                },
                stats: { competence: 30, ethics: 40, leadership: 50, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤖 Prefabrication: "Order prefabricated modules from a factory overseas. Crane them in. Fewer workers needed on site."',
                    th: '🤖 ชิ้นส่วนสำเร็จรูป: "สั่งโมดูลสำเร็จรูปจากโรงงานในต่างประเทศ ยกเครนเข้ามา ใช้คนงานหน้างานน้อยลง"',
                    zh: '🤖 预制："从海外工厂订购预制模块。用起重机吊进去。现场需要的工人更少。"'
                },
                consequence: {
                    en: '🚢 Logistics Nightmare! The modules get stuck in customs. The project is delayed anyway. But you learned a new building method.',
                    th: '🚢 ฝันร้ายด้านโลจิสติกส์! โมดูลติดอยู่ที่ศุลกากร โครงการล่าช้าอยู่ดี แต่คุณได้เรียนรู้วิธีการสร้างแบบใหม่',
                    zh: '🚢 物流噩梦！模块卡在海关。不管怎样项目都推迟了。但你学会了一种新的建筑方法。'
                },
                stats: { competence: 20, ethics: 0, leadership: 10, innovation: 40 }
            }
        ]
    },
    {
        id: 'architect_008',
        text: {
            en: '🤴 The Dictator\'s Palace: A notorious authoritarian leader invites you to design their new presidential palace. The budget is unlimited. "Make it scream POWER," he says.',
            th: '🤴 พระราชวังเผด็จการ: ผู้นำอำนาจนิยมที่มีชื่อเสียงเชิญคุณไปออกแบบทำเนียบประธานาธิบดีแห่งใหม่ งบประมาณไม่จำกัด "ทำให้มันตะโกนว่า อำนาจ," เขาบอก',
            zh: '🤴 独裁者的宫殿：一位臭名昭著的独裁领导人邀请你设计他们的新总统府。预算是无限的。"让它尖叫权力，"他说。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏰 Build the Fortress: "Gold statues. 50-foot doors. Massive walls. Take the money and run."',
                    th: '🏰 สร้างป้อมปราการ: "รูปปั้นทองคำ ประตูสูง 50 ฟุต กำแพงมหึมา รับเงินแล้วหนีไป"',
                    zh: '🏰 建造堡垒："金像。50 英尺高的门。巨大的墙壁。拿钱快跑。"'
                },
                consequence: {
                    en: '🩸 Blood Money! You become rich but infamous. Western democracies sanction you. You can only work for villains now.',
                    th: '🩸 เงินเปื้อนเลือด! คุณรวยแต่มีชื่อเสีย ประชาธิปไตยตะวันตกคว่ำบาตรคุณ ตอนนี้คุณทำงานให้วายร้ายได้เท่านั้น',
                    zh: '🩸 血腥钱！你变得富有但声名狼藉。西方民主国家制裁你。你现在只能为恶棍工作。'
                },
                stats: { competence: 50, ethics: -50, leadership: -20, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🕵️ Subversive Design: "Design it to be open and transparent. Glass walls. Public plazas within the compound. Symbolize democracy subtly."',
                    th: '🕵️ การออกแบบที่บ่อนทำลาย: "ออกแบบให้เปิดกว้างและโปร่งใส กำแพงกระจก ลานสาธารณะภายในบริเวณ เป็นสัญลักษณ์ของประชาธิปไตยอย่างแนบเนียน"',
                    zh: '🕵️ 颠覆性设计："设计得开放透明。玻璃墙。大院内的公共广场。巧妙地象征民主。"'
                },
                consequence: {
                    en: '😨 Dangerous Game! The leader realizes what you did halfway through. You are fired and barely escape the country. Your bravery is legendary.',
                    th: '😨 เกมอันตราย! ผู้นำรู้ตัวว่าคุณทำอะไรลงไปกลางคัน คุณถูกไล่ออกและแทบจะหนีออกจากประเทศไม่ได้ ความกล้าหาญของคุณเป็นตำนาน',
                    zh: '😨 危险的游戏！领导中途意识到你做了什么。你被解雇了，几乎无法逃离这个国家。你的勇气是传奇的。'
                },
                stats: { competence: 20, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '✋ Decline Politely: "I am too busy with... a dog house renovation. Sorry." Ghost the messages.',
                    th: '✋ ปฏิเสธอย่างสุภาพ: "ผมยุ่งมากกับ... การปรับปรุงบ้านสุนัข ขอโทษครับ" เมินข้อความ',
                    zh: '✋ 礼貌拒绝："我太忙了……在装修狗屋。抱歉。" 玩失踪。'
                },
                consequence: {
                    en: '👻 Safe but Boring. You missed a payday and a story, but you sleep soundly at night. Your soul is intact.',
                    th: '👻 ปลอดภัยแต่น่าเบื่อ คุณพลาดวันจ่ายเงินและเรื่องราว แต่คุณนอนหลับสนิทในตอนกลางคืน จิตวิญญาณของคุณยังอยู่ครบ',
                    zh: '👻 安全但无聊。你错过了发薪日和故事，但你晚上睡得很香。你的灵魂完好无损。'
                },
                stats: { competence: 0, ethics: 20, leadership: 0, innovation: 0 }
            }
        ]
    },
    {
        id: 'architect_009',
        text: {
            en: '👁️ Smart City Privacy: A tech giant hires you to design a "Smart Neighborhood." Every wall, streetlamp, and bench has sensors to track residents for "optimization." It feels like a surveillance state.',
            th: '👁️ ความเป็นส่วนตัวของเมืองอัจฉริยะ: ยักษ์ใหญ่ด้านเทคโนโลยีจ้างคุณให้ออกแบบ "ย่านอัจฉริยะ" ทุกกำแพง โคมไฟถนน และม้านั่งมีเซ็นเซอร์เพื่อติดตามผู้อยู่อาศัยเพื่อ "การเพิ่มประสิทธิภาพ" มันรู้สึกเหมือนรัฐแห่งการเฝ้าระวัง',
            zh: '👁️ 智慧城市隐私：一家科技巨头雇佣你设计一个"智慧社区"。每这墙、路灯和长椅都有传感器来追踪居民以进行"优化"。感觉像是一个监控国家。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📡 Total Integration: "Data is the future. Embed sensors everywhere. The efficiency gains are worth the loss of privacy."',
                    th: '📡 บูรณาการทั้งหมด: "ข้อมูลคืออนาคต ฝังเซ็นเซอร์ไว้ทุกที่ ประสิทธิภาพที่ได้คุ้มค่ากับการสูญเสียความเป็นส่วนตัว"',
                    zh: '📡 全面整合："数据就是未来。到处嵌入传感器。效率的提高通过失去隐私是值得的。"'
                },
                consequence: {
                    en: '🤖 Dystopian Efficiency! The neighborhood runs perfectly. No traffic, no waste. But residents are paranoid and depressed. You built a gilded cage.',
                    th: '🤖 ประสิทธิภาพแบบดิสโทเปีย! ย่านนี้ดำเนินไปอย่างสมบูรณ์แบบ รถไม่ติด ไม่มีขยะ แต่ผู้อยู่อาศัยหวาดระแวงและซึมเศร้า คุณสร้างกรงทอง',
                    zh: '🤖 反乌托邦效率！社区运转完美。没有交通，没有浪费。但居民偏执和沮丧。你建造了一个镀金的笼子。'
                },
                stats: { competence: 50, ethics: -30, leadership: -10, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '📵 Privacy by Design: "Design \'Dead Zones\' and physical barriers where signals can\'t reach. Give people spaces to be invisible."',
                    th: '📵 ความเป็นส่วนตัวโดยการออกแบบ: "ออกแบบ \'โซนตาย\' และสิ่งกีดขวางทางกายภาพที่สัญญาณเข้าไม่ถึง ให้พื้นที่ผู้คนในการล่องหน"',
                    zh: '📵 设计隐私："设计\'死区\'和信号无法到达的物理屏障。给人们隐形的空间。"'
                },
                consequence: {
                    en: '🧘 Human-Centric Tech! Residents love the "Analog Parks." The tech giant is annoyed but the neighborhood is the most desirable in the city.',
                    th: '🧘 เทคโนโลยีที่ยึดมนุษย์เป็นศูนย์กลาง! ผู้อยู่อาศัยชอบ "สวนอนาล็อก" ยักษ์ใหญ่ด้านเทคโนโลยีรำคาญ แต่ย่านนี้เป็นที่ต้องการมากที่สุดในเมือง',
                    zh: '🧘 以人为本的科技！居民喜欢"模拟公园"。科技巨头很恼火，但这个社区是城市里最令人向往的。'
                },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '📜 Transparent Data: "Install screens that show EXACTLY what is being tracked in real-time. Make the surveillance visible and opt-in."',
                    th: '📜 ข้อมูลที่โปร่งใส: "ติดตั้งหน้าจอที่แสดงสิ่งที่ถูกติดตามแบบเรียลไทม์อย่างชัดเจน ทำให้การเฝ้าระวังมองเห็นได้และเลือกได้"',
                    zh: '📜 透明数据："安装屏幕，准确显示正在实时跟踪的内容。让监控可见并可选择加入。"'
                },
                consequence: {
                    en: '📊 Honest Architecture! It sparks a global debate about data. You are seen as a thoughtful innovator, not just a builder.',
                    th: '📊 สถาปัตยกรรมที่ซื่อสัตย์! จุดประกายการถกเถียงระดับโลกเกี่ยวกับข้อมูล คุณถูกมองว่าเป็นนวัตกรที่คิดรอบคอบ ไม่ใช่แค่ผู้สร้าง',
                    zh: '📊以此诚实的建筑！它引发了关于数据的全球辩论。你被视为一位深思熟虑的创新者，而不仅仅是一位建设者。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'architect_010',
        text: {
            en: '🥈 The Plagiarism Accusation: Your junior architect presents a stunning design for the opera house. You submit it and win. A week later, you realize it is a copy of an obscure student project from Japan.',
            th: '🥈 ข้อกล่าวหาเรื่องการลอกเลียนแบบ: สถาปนิกรุ่นน้องของคุณนำเสนอการออกแบบโรงอุปรากรที่น่าทึ่ง คุณส่งมันและชนะ สัปดาห์ต่อมา คุณตระหนักว่ามันเป็นสำเนาของโครงการนักเรียนที่ไม่มีชื่อเสียงจากญี่ปุ่น',
            zh: '🥈 抄袭指控：你的初级建筑师为歌剧院提交了一份令人惊叹的设计。你提交并获胜。一周后，你意识到这是日本一个默默无闻的学生项目的副本。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤫 Cover Up: "It is parallel thinking. Coincidence. Modify the roof slightly so it isn\'t identical. Deny everything."',
                    th: '🤫 ปกปิด: "มันเป็นการคิดแบบขนาน บังเอิญ ปรับหลังคานิดหน่อยเพื่อไม่ให้เหมือนเป๊ะ ปฏิเสธทุกอย่าง"',
                    zh: '🤫 掩盖："这是平行思维。巧合。稍微修改一下屋顶，让它不完全一样。否认一切。"'
                },
                consequence: {
                    en: '🤥 Living a Lie! You keep the project. But you live in fear of being exposed. You fire the junior, but they know your secret.',
                    th: '🤥 อยู่กับคำโกหก! คุณเก็บโครงการไว้ แต่คุณใช้ชีวิตด้วยความกลัวว่าจะถูกเปิดโปง คุณไล่รุ่นน้องออก แต่พวกเขารู้ความลับของคุณ',
                    zh: '🤥 生活在谎言中！你保留了这个项目。但你生活在被揭穿的恐惧中。你解雇了那个初级员工，但他们知道你的秘密。'
                },
                stats: { competence: 10, ethics: -50, leadership: -20, innovation: -50 }
            },
            {
                id: 'B',
                text: {
                    en: '📢 Confess and Credit: "Contact the Japanese student. Offer them co-lead credit and half the fee. Apologize publicly."',
                    th: '📢 สารภาพและให้เครดิต: "ติดต่อนักเรียนญี่ปุ่นเสนอเครดิตร่วมและค่าธรรมเนียมครึ่งหนึ่ง ขอโทษต่อสาธารณะ"',
                    zh: '📢 坦白并归功："联系日本学生。给他们联合负责人的荣誉和一半的费用。公开道歉。"'
                },
                consequence: {
                    en: '🤝 Respect Earned! The client is shocked but impressed by your honesty. The student becomes a star. You mentored a genius instead of stealing.',
                    th: '🤝 ได้รับความเคารพ! ลูกค้าตกใจแต่ประทับใจในความซื่อสัตย์ของคุณ นักเรียนกลายเป็นดาวเด่น คุณเป็นที่ปรึกษาให้อัจฉริยะแทนที่จะขโมย',
                    zh: '🤝 赢得尊重！客户很震惊，但对你的诚实印象深刻。那个学生成了明星。你指导了一位天才而不是偷窃。'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚮 Withdraw: "We cannot build this. Withdraw the bid citing \'internal errors.\' Start over from scratch."',
                    th: '🚮 ถอนตัว: "เราสร้างสิ่งนี้ไม่ได้ ถอนการประมูลโดยอ้าง \'ข้อผิดพลาดภายใน\' เริ่มต้นใหม่จากศูนย์"',
                    zh: '🚮 撤回："我们不能建造这个。以\'内部错误\'为由撤回投标。从头开始。"'
                },
                consequence: {
                    en: '📉 Loss of Face! The firm looks incompetent. You lose the contract. But your conscience is clear.',
                    th: '📉 เสียหน้า! บริษัทดูไร้ความสามารถ คุณเสียสัญญา แต่จิตสำนึกของคุณใสสะอาด',
                    zh: '📉 丢脸！公司看起来很无能。你失去了合同。但你的良心是清白的。'
                },
                stats: { competence: -20, ethics: 30, leadership: 10, innovation: 0 }
            }
        ]
    },
    {
        id: 'architect_011',
        text: {
            en: '🔥 Urban Heat Island: Your new city square design is all concrete and glass. It will be 10°C hotter than the surroundings. Adding trees costs 20% more and hides the architecture.',
            th: '🔥 เกาะความร้อนในเมือง: การออกแบบจัตุรัสเมืองใหม่ของคุณเป็นคอนกรีตและกระจกทั้งหมด มันจะร้อนกว่าบริเวณโดยรอบ 10°C การเพิ่มต้นไม้มีค่าใช้จ่ายเพิ่มขึ้น 20% และบดบังทัศนียภาพ',
            zh: '🔥 城市热岛：你的新城市广场设计全部是混凝土和玻璃。它将比周围环境热 10°C。添加树木不仅成本增加 20%，还会遮挡建筑。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌳 Green Canopy: "Plant mature trees everywhere. Shade is more important than showing off the facade."',
                    th: '🌳 ร่มเงาสีเขียว: "ปลูกต้นไม้ใหญ่ทุกที่ ร่มเงาสำคัญกว่าการโชว์หน้าอาคาร"',
                    zh: '🌳 绿色顶蓬："到处种植成熟的树木。阴凉比炫耀立面更重要。"'
                },
                consequence: {
                    en: '🌿 Oasis in the City! People flock to the cool square. It becomes the most loved spot in town. You win a sustainability award.',
                    th: '🌿 โอเอซิสในเมือง! ผู้คนแห่กันไปที่จัตุรัสเย็นสบาย กลายเป็นจุดที่คนรักที่สุดในเมือง คุณชนะรางวัลความยั่งยืน',
                    zh: '🌿 城市绿洲！人们涌向凉爽的广场。它成为城里最受喜爱的地方。你赢得了可持续发展奖。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🏢 Keep it Sleek: "Architecture is art. Do not hide it. Install misting fans for the heat."',
                    th: '🏢 รักษาความโฉบเฉี่ยว: "สถาปัตยกรรมคือศิลปะ อย่าซ่อนมัน ติดตั้งพัดลมไอน้ำสำหรับความร้อน"',
                    zh: '🏢 保持时尚："建筑是艺术。不要隐藏它。安装喷雾风扇来降温。"'
                },
                consequence: {
                    en: '🥵 Beautiful Oven! It looks great in photos but is empty during the day because it is scorching hot. Critics call it "hostile design."',
                    th: '🥵 เตาอบที่สวยงาม! ดูดีในรูปแต่ว่างเปล่าในตอนกลางวันเพราะร้อนจัด นักวิจารณ์เรียกว่า "การออกแบบที่เป็นปฏิปักษ์"',
                    zh: '🥵 美丽的烤箱！照片上看起来很棒，但白天空无一人，因为太热了。评论家称之为"敌对设计"。'
                },
                stats: { competence: 20, ethics: -20, leadership: -10, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '💧 Vertical Gardens: "Cover the walls with plants. It cools the air and looks futuristic. Expensive maintenance though."',
                    th: '💧 สวนแนวตั้ง: "คลุมผนังด้วยพืช มันทำให้อากาศเย็นลงและดูทันสมัย แต่ค่าบำรุงรักษาแพง"',
                    zh: '💧 垂直花园："用植物覆盖墙壁。它能冷却空气，看起来充满未来感。但维护费用昂贵。"'
                },
                consequence: {
                    en: '🍀 Living Building! It requires constant care, but it becomes an icon of eco-futurism. The air quality improves.',
                    th: '🍀 อาคารที่มีชีวิต! มันต้องการการดูแลอย่างต่อเนื่อง แต่กลายเป็นไอคอนของอนาคตเชิงนิเวศ คุณภาพอากาศดีขึ้น',
                    zh: '🍀 活体建筑！它需要持续的护理，但它成为生态未来主义的标志。空气质量得到改善。'
                },
                stats: { competence: 50, ethics: 40, leadership: 20, innovation: 50 }
            }
        ]
    },
    {
        id: 'architect_012',
        text: {
            en: '🖨️ 3D Printed Homes: A startup wants you to design a community of 3D printed houses. They are cheap and fast to build, but look "blobby" and strange.',
            th: '🖨️ บ้านพิมพ์ 3 มิติ: สตาร์ทอัพต้องการให้คุณออกแบบชุมชนบ้านพิมพ์ 3 มิติ ราคาถูกและสร้างเร็ว แต่ดู "เป็นก้อน" และแปลก',
            zh: '🖨️ 3D 打印房屋：一家初创公司想让你设计一个 3D 打印房屋社区。它们造价低廉且建造迅速，但看起来"像面团"且怪异。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧱 Texture Hack: "Design patterns into the print layers. Make the \'blobby\' look intentional and artistic."',
                    th: '🧱 แฮ็คลวดลาย: "ออกแบบลวดลายในชั้นพิมพ์ ทำให้ลุค \'ก้อน\' ดูตั้งใจและเป็นศิลปะ"',
                    zh: '🧱 纹理黑客："在打印层中设计图案。让\'面团\'外观看起来是有意为之且具有艺术感。"'
                },
                consequence: {
                    en: '🎨 Affordable Art! The houses are a hit. You proved cheap housing can be beautiful.',
                    th: '🎨 ศิลปะราคาไม่แพง! บ้านฮิตมาก คุณพิสูจน์แล้วว่าที่อยู่อาศัยราคาถูกก็สวยได้',
                    zh: '🎨 负担得起的艺术！房子很受欢迎。你证明了廉价住房也可以很漂亮。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Reject the Tech: "I build with brick and wood. 3D printing is a gimmick. I will design modular wood homes instead."',
                    th: '🛑 ปฏิเสธเทคโนโลยี: "ผมสร้างด้วยอิฐและไม้ การพิมพ์ 3 มิติเป็นลูกเล่น ผมจะออกแบบบ้านไม้แบบแยกส่วนแทน"',
                    zh: '🛑 拒绝技术："我用砖和木头建造。3D 打印是个噱头。我会设计模块化木屋代替。"'
                },
                consequence: {
                    en: '🪵 Classic Quality. The wood homes are nicer but cost 3x more. Only the rich can afford them. Opportunity lost.',
                    th: '🪵 คุณภาพคลาสสิก บ้านไม้ดีกว่าแต่แพงกว่า 3 เท่า มีแต่คนรวยที่ซื้อได้ พลาดโอกาส',
                    zh: '🪵 经典品质。木屋更好，但贵 3 倍。只有富人买得起。失去了机会。'
                },
                stats: { competence: 30, ethics: 10, leadership: 0, innovation: -30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤖 Mass Production: "Print them as fast as possible. Quantity over aesthetics. Solving homelessness is the priority."',
                    th: '🤖 การผลิตจำนวนมาก: "พิมพ์ให้เร็วที่สุด ปริมาณสำคัญกว่าความสวยงาม การแก้ปัญหาคนไร้บ้านคือความสำคัญสูงสุด"',
                    zh: '🤖 大规模生产："尽可能快地打印。数量胜于美观。解决无家可归问题是当务之急。"'
                },
                consequence: {
                    en: '🏠 Functional Ugly. You house thousands, but the neighborhood looks like a sci-fi slum. Critics mock it, residents thank you.',
                    th: '🏠 น่าเกลียดแต่ใช้งานได้ คุณให้ที่อยู่คนเป็นพัน แต่ย่านนั้นดูเหมือนสลัมไซไฟ นักวิจารณ์ล้อเลียน ผู้อยู่อาศัยขอบคุณ',
                    zh: '🏠 实用但丑陋。你安置了数千人，但社区看起来像科幻贫民窟。评论家嘲笑它，居民感谢你。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'architect_013',
        text: {
            en: '🚀 Mars Colony: Getting the contract to design the first Mars habitat. Radiation shielding requires thick, windowless walls. The astronauts will feel trapped.',
            th: '🚀 อาณานิคมดาวอังคาร: การได้รับสัญญาออกแบบที่อยู่อาศัยบนดาวอังคารแห่งแรก การป้องกันรังสีต้องใช้ผนังหนาไม่มีหน้าต่าง นักบินอวกาศจะรู้สึกเหมือนถูกขัง',
            zh: '🚀 火星殖民地：获得设计第一个火星栖息地的合同。辐射屏蔽需要厚实的无窗墙壁。宇航员会感到被困住。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📺 Virtual Windows: "Line the walls with 8K screens showing Earth landscapes. It tricks the brain."',
                    th: '📺 หน้าต่างเสมือน: "บุผนังด้วยหน้าจอ 8K แสดงทิวทัศน์โลก หลอกสมอง"',
                    zh: '📺 虚拟窗户："在墙上排列显示地球景观的 8K 屏幕。它能欺骗大脑。"'
                },
                consequence: {
                    en: '🧠 Mental Health Win. Astronauts feel calmer. It consumes power, but sanity is preserved.',
                    th: '🧠 ชนะใจสุขภาพจิต นักบินอวกาศรู้สึกสงบขึ้น กินพลังงาน แต่รักษาสติไว้ได้',
                    zh: '🧠 心理健康胜利。宇航员感到更平静。它消耗电力，但保持了理智。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🕳️ Underground Living: "Build deep underground. Use lava tubes. Zero view, maximum safety."',
                    th: '🕳️ การใช้ชีวิตใต้ดิน: "สร้างลึกลงไปใต้ดิน ใช้ท่อลาวา ไม่มีวิว ปลอดภัยสูงสุด"',
                    zh: '🕳️ 地下生活："建在地下深处。利用熔岩管。零景观，最大安全。"'
                },
                consequence: {
                    en: '🛡️ Safe but Grim. It is the safest option, but morale plummets. It feels like a prison.',
                    th: '🛡️ ปลอดภัยแต่น่ากลัว เป็นทางเลือกที่ปลอดภัยที่สุด แต่ขวัญกำลังใจตกต่ำ รู้สึกเหมือนคุก',
                    zh: '🛡️ 安全但阴郁。这是最安全的选择，但士气暴跌。感觉像监狱。'
                },
                stats: { competence: 50, ethics: 10, leadership: -10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧊 Ice Home: "3D print the habitat with Mars ice. It blocks radiation but lets in light. Translucent walls."',
                    th: '🧊 บ้านน้ำแข็ง: "พิมพ์ที่อยู่อาศัย 3 มิติด้วยน้ำแข็งดาวอังคาร กันรังสีแต่ให้แสงเข้า ผนังโปร่งแสง"',
                    zh: '🧊 冰屋："用火星冰 3D 打印栖息地。它能阻挡辐射但允许光线通过。半透明墙壁。"'
                },
                consequence: {
                    en: '🌟 Beautiful Science! The habitat glows with natural light. It is a masterpiece of alien architecture.',
                    th: '🌟 วิทยาศาสตร์ที่สวยงาม! ที่อยู่อาศัยเรืองแสงด้วยแสงธรรมชาติ เป็นผลงานชิ้นเอกของสถาปัตยกรรมต่างดาว',
                    zh: '🌟 美丽的科学！栖息地在自然光下发光。它是外星建筑的杰作。'
                },
                stats: { competence: 30, ethics: 20, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'architect_014',
        text: {
            en: '☯️ Feng Shui vs. Function: A superstitious client rejects your structurally perfect layout because "the energy flow is wrong." They want to move the bathroom to the center of the house (a plumbing nightmare).',
            th: '☯️ ฮวงจุ้ยกับฟังก์ชัน: ลูกค้าผู้เชื่อเรื่องโชคลางปฏิเสธผังที่สมบูรณ์แบบทางโครงสร้างของคุณเพราะ "การไหลเวียนของพลังงานผิด" พวกเขาต้องการย้ายห้องน้ำไปกลางบ้าน (ฝันร้ายของท่อประปา)',
            zh: '☯️ 风水与功能：一位迷信的客户拒绝了你结构完美的布局，因为"能量流向不对"。他们想把浴室搬到房子中央（管道噩梦）。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🙅 Refuse: "Physics comes before metaphysics. Putting plumbing there is a leak risk. I won\'t do it."',
                    th: '🙅 ปฏิเสธ: "ฟิสิกส์มาก่อนอภิปรัชญา การวางท่อตรงนั้นเสี่ยงรั่ว ผมไม่ทำ"',
                    zh: '🙅 拒绝："物理学先于形而上学。把管道放在那里有泄漏风险。我不会那样做。"'
                },
                consequence: {
                    en: '🚮 Client Lost. They fire you and hire a "Energy Consultant." You keep your sanity.',
                    th: '🚮 เสียลูกค้า พวกเขาไล่คุณออกและจ้าง "ที่ปรึกษาพลังงาน" คุณรักษาสติของคุณ',
                    zh: '🚮 客户流失。他们解雇了你，聘请了一位"能量顾问"。你保持了理智。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🙏 Comply: "Whatever you say. I will use extra expensive waterproofing and pumps. It will cost double."',
                    th: '🙏 ปฏิบัติตาม: "แล้วแต่คุณ ผมจะใช้วัสดุกันซึมและปั๊มแพงพิเศษ ราคาจะแพงเป็นสองเท่า"',
                    zh: '🙏 顺从："随你怎么说。我会使用超昂贵的防水材料和泵。成本会翻倍。"'
                },
                consequence: {
                    en: '💸 Happy Client. The house is built. It is weird, but they pay you handsomely. Plumbers hate you.',
                    th: '💸 ลูกค้ามีความสุข สร้างบ้านเสร็จ มันแปลก แต่พวกเขาจ่ายงาม ช่างประปาเกลียดคุณ',
                    zh: '💸 快乐的客户。房子建好了。虽然很奇怪，但他们付给你丰厚的报酬。水管工恨你。'
                },
                stats: { competence: 30, ethics: -10, leadership: 0, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '🎨 Creative Illusion: "Use mirrors and curved walls to redirect the \'energy\' without moving the plumbing. Convince them it works."',
                    th: '🎨 ภาพลวงตาที่สร้างสรรค์: "ใช้กระจกและผนังโค้งเพื่อเปลี่ยนทิศทาง \'พลังงาน\' โดยไม่ต้องย้ายท่อ โน้มน้าวพวกเขาว่ามันได้ผล"',
                    zh: '🎨 创意错觉："利用镜子和弧形墙壁改变\'能量\'流向，而不移动管道。说服他们这行得通。"'
                },
                consequence: {
                    en: '🧠 Psychological Design. The client feels great. The building works. You solved a human problem with design.',
                    th: '🧠 การออกแบบเชิงจิตวิทยา ลูกค้ารู้สึกดี อาคารใช้งานได้ คุณแก้ปัญหาของมนุษย์ด้วยการออกแบบ',
                    zh: '🧠 心理设计。客户感觉很好。建筑运作正常。你用设计解决了一个人类问题。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 }
            }
        ]
    },
    {
        id: 'architect_015',
        text: {
            en: '🚇 The Underground City: Singapore runs out of land and asks you to design a subterranean city layer for 100,000 people. The challenge is making it not feel like a bunker.',
            th: '🚇 เมืองใต้ดิน: สิงคโปร์ที่ดินหมดและขอให้คุณออกแบบชั้นเมืองใต้ดินสำหรับ 100,000 คน ความท้าทายคือทำให้ไม่รู้สึกเหมือนบังเกอร์',
            zh: '🚇 地下城市：新加坡土地耗尽，要求你设计一个容纳 10 万人的地下城市层。挑战在于让它感觉不像是一个地堡。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '☀️ Light Wells: "Drill massive shafts to the surface. Bring in real sunlight and rain. Connect to the sky."',
                    th: '☀️ บ่อน้ำแสง: "เจาะปล่องขนาดใหญ่สู่พื้นผิว นำแสงแดดและฝนจริงเข้ามา เชื่อมต่อกับท้องฟ้า"',
                    zh: '☀️ 光井："钻巨大的竖井通向地面。引入真正的阳光和雨水。与天空连接。"'
                },
                consequence: {
                    en: '🌤️ Subterranean Park! It feels open and airy. It becomes a model for future cities. Expensive but worth it.',
                    th: '🌤️ สวนใต้ดิน! รู้สึกโล่งและโปร่งสบาย กลายเป็นต้นแบบสำหรับเมืองในอนาคต แพงแต่คุ้มค่า',
                    zh: '🌤️ 地下公园！感觉开阔通风。它成为未来城市的典范。昂贵但值得。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '💡 Artificial Day: "Use massive LED skies that simulate day/night cycles perfectly. Total control of weather."',
                    th: '💡 วันเทียม: "ใช้ท้องฟ้า LED ขนาดใหญ่ที่จำลองวงจรวัน/คืนได้อย่างสมบูรณ์แบบ ควบคุมสภาพอากาศทั้งหมด"',
                    zh: '💡 人造白昼："使用巨大的 LED 天空完美模拟昼夜循环。完全控制天气。"'
                },
                consequence: {
                    en: '🎮 Truman Show Vibes. It is impressive but slightly eerie. People lose track of time. Efficient use of space.',
                    th: '🎮 บรรยากาศ Truman Show น่าประทับใจแต่น่าขนลุกเล็กน้อย ผู้คนลืมเวลา การใช้พื้นที่อย่างมีประสิทธิภาพ',
                    zh: '🎮 楚门的世界氛围。令人印象深刻但有点怪异。人们失去了时间感。空间的高效利用。'
                },
                stats: { competence: 40, ethics: 10, leadership: 20, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🏢 Dense Efficiency: "Pack them in. Focus on transit and utilities. It is a place to sleep, not live. They go up for leisure."',
                    th: '🏢 ประสิทธิภาพหนาแน่น: "อัดเข้าไป โฟกัสที่การขนส่งและสาธารณูปโภค เป็นที่นอน ไม่ใช่ที่อยู่ ขึ้นไปข้างบนเพื่อพักผ่อน"',
                    zh: '🏢 密集效率："把他们塞进去。专注于交通和公用事业。这是一个睡觉的地方，而不是生活的地方。他们上去休闲。"'
                },
                consequence: {
                    en: '🐀 Mole People. It works as a dorm but has zero culture. Suicide rates spike underground.',
                    th: '🐀 คนตุ่น ใช้งานได้เหมือนหอพักแต่ไม่มีวัฒนธรรม อัตราการฆ่าตัวตายพุ่งสูงใต้ดิน',
                    zh: '🐀 鼹鼠人。它作为宿舍很有效，但没有文化。地下自杀率飙升。'
                },
                stats: { competence: 30, ethics: -30, leadership: -10, innovation: -10 }
            }
        ]
    },
    {
        id: 'architect_016',
        text: {
            en: '🌊 Floating City: Rising sea levels threaten a coastal nation. You propose a floating city. The tech exists, but massive storms are a risk.',
            th: '🌊 เมืองลอยน้ำ: ระดับน้ำทะเลที่สูงขึ้นคุกคามประเทศชายฝั่ง คุณเสนอเมืองลอยน้ำ เทคโนโลยีมีอยู่ แต่พายุใหญ่เป็นความเสี่ยง',
            zh: '🌊 漂浮城市：海平面上升威胁到一个沿海国家。你提议建立一个漂浮城市。技术是存在的，但巨大的风暴是一个风险。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚓ Anchored Giant: "Build massive concrete platforms anchored to the seabed. Stable but rigid."',
                    th: '⚓ ยักษ์ที่ยึดสมอ: "สร้างแพลตฟอร์มคอนกรีตขนาดใหญ่ยึดกับพื้นทะเล เสถียรแต่แข็งทื่อ"',
                    zh: '⚓ 锚定巨人："建造锚定在海床上的巨大混凝土平台。稳定但僵硬。"'
                },
                consequence: {
                    en: '🧱 Too Stiff. A mega-typhoon causes cracks in the concrete. Maintenance is a nightmare. But it survives.',
                    th: '🧱 แข็งเกินไป ไต้ฝุ่นยักษ์ทำให้เกิดรอยร้าวในคอนกรีต การบำรุงรักษาเป็นฝันร้าย แต่รอด',
                    zh: '🧱 太僵硬了。一场超级台风导致混凝土开裂。维护是一场噩梦。但它幸存了下来。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🎋 Modular Flex: "Connect smaller hexagonal modules that move with the waves. Biomimicry like lily pads."',
                    th: '🎋 โมดูลยืดหยุ่น: "เชื่อมต่อโมดูลหกเหลี่ยมขนาดเล็กที่เคลื่อนที่ไปกับคลื่น การเลียนแบบชีวภาพเหมือนใบบัว"',
                    zh: '🎋 模块化柔性："连接较小的六边形模块，随波浪移动。仿生像睡莲叶。"'
                },
                consequence: {
                    en: '🌊 Resilient Flow. The city rides out the storm smoothly. It feels organic and safe. A triumph of engineering.',
                    th: '🌊 การไหลที่ยืดหยุ่น เมืองผ่านพายุไปได้อย่างราบรื่น รู้สึกเป็นธรรมชาติและปลอดภัย ชัยชนะของวิศวกรรม',
                    zh: '🌊 弹性流动。城市平稳地度过了风暴。感觉有机且安全。工程学的胜利。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🚢 Ship City: "Just decommission huge oil tankers and cruise ships. Refit them into housing. Mobile culture."',
                    th: '🚢 เมืองเรือ: "แค่ปลดระวางเรือบรรทุกน้ำมันและเรือสำราญขนาดใหญ่ ปรับปรุงเป็นที่อยู่อาศัย วัฒนธรรมเคลื่อนที่"',
                    zh: '🚢 船舶城市："只需将巨大的油轮和游轮退役。将它们改装成住房。移动文化。"'
                },
                consequence: {
                    en: '🏴‍☠️ Waterworld. It works cheaply but becomes a lawless flotilla. Sanitation is an issue.',
                    th: '🏴‍☠️ Waterworld ทำงานได้ถูกแต่กลายเป็นกองเรือไร้กฎหมาย สุขอนามัยเป็นปัญหา',
                    zh: '🏴‍☠️ 水世界。它运作廉价，但变成了一个无法无天的船队。卫生是一个问题。'
                },
                stats: { competence: 20, ethics: 10, leadership: -20, innovation: 20 }
            }
        ]
    },
    {
        id: 'architect_017',
        text: {
            en: '😠 The Spite House: A client owns a tiny, triangular sliver of land. He wants to build a tall, thin house just to block his neighbor\'s view because they had a feud. It is legal, but petty.',
            th: '😠 บ้านขี้อิจฉา: ลูกค้าเป็นเจ้าของที่ดินรูปสามเหลี่ยมเล็กๆ แถบหนึ่ง เขาต้องการสร้างบ้านทรงสูงและบางเพียงเพื่อบังวิวของเพื่อนบ้านเพราะพวกเขามีเรื่องบาดหมางกัน มันถูกกฎหมายแต่ใจแคบ',
            zh: '😠 怨恨屋：一位客户拥有一小块三角形的土地。他想建一座又高又瘦的房子，只是为了挡住邻居的视线，因为他们有仇。这是合法的，但很小气。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✍️ Build It: "A job is a job. Also, the challenge of building on 2 meters width is fun."',
                    th: '✍️ สร้างมัน: "งานคืองาน นอกจากนี้ความท้าทายในการสร้างบนความกว้าง 2 เมตรก็น่าสนุก"',
                    zh: '✍️ 建造它："工作就是工作。而且，在 2 米宽的土地上建造的挑战很有趣。"'
                },
                consequence: {
                    en: '📏 Architecture Meme. The house becomes a tourist attraction. The neighbor sues, but you win. You are known as "The Petty Architect."',
                    th: '📏 มีมสถาปัตยกรรม บ้านกลายเป็นสถานที่ท่องเที่ยว เพื่อนบ้านฟ้องแต่คุณชนะ คุณเป็นที่รู้จักในนาม "สถาปนิกใจแคบ"',
                    zh: '📏 建筑模因。这所房子成了旅游胜地。邻居起诉，但你赢了。你被称为"小气建筑师"。'
                },
                stats: { competence: 50, ethics: -20, leadership: -10, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Refuse: "I do not use my skills for revenge. Grow up."',
                    th: '🚫 ปฏิเสธ: "ผมไม่ใช้ทักษะเพื่อการแก้แค้น โตได้แล้ว"',
                    zh: '🚫 拒绝："我不会用我的技能来复仇。成熟点。"'
                },
                consequence: {
                    en: '😌 Moral High Ground. You lose the fee, but maintain your dignity. The client goes elsewhere.',
                    th: '😌 พื้นที่สูงทางศีลธรรม คุณเสียค่าธรรมเนียม แต่รักษาศักดิ์ศรีของคุณ ลูกค้าไปหาที่อื่น',
                    zh: '😌 道德制高点。你失去了费用，但保持了尊严。客户去了别处。'
                },
                stats: { competence: 10, ethics: 50, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🎨 Turn it into Art: "Design it as a sculpture park or vertical garden. Block the view with beauty, not malice."',
                    th: '🎨 เปลี่ยนเป็นศิลปะ: "ออกแบบเป็นสวนประติมากรรมหรือสวนแนวตั้ง บังวิวด้วยความงาม ไม่ใช่ความปองร้าย"',
                    zh: '🎨 将其转化为艺术："将其设计为雕塑公园或垂直花园。用美而不是恶意来阻挡视线。"'
                },
                consequence: {
                    en: '🕊️ Feud Ended? The structure is so nice even the neighbor likes it. You diffused the hate.',
                    th: '🕊️ ความบาดหมางจบลง? โครงสร้างสวยจนเพื่อนบ้านยังชอบ คุณสลายความเกลียดชัง',
                    zh: '🕊️ 仇恨结束？结构太好了，连邻居都喜欢。你化解了仇恨。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 40 }
            }
        ]
    },
    {
        id: 'architect_018',
        text: {
            en: '🧱 Brutalism Revival: The city wants a new courthouse. You love Brutalism (raw concrete, massive forms), but the public hates it and finds it depressing.',
            th: '🧱 การฟื้นฟูบรูทัลลิสต์: เมืองต้องการศาลใหม่ คุณรักบรูทัลลิสต์ (คอนกรีตดิบ รูปทรงมหึมา) แต่ประชาชนเกลียดและพบว่ามันน่าหดหู่',
            zh: '🧱 野兽派复兴：城市想要一座新法院。你喜欢野兽派（原始混凝土，巨大的形式），但公众讨厌它，觉得它令人沮丧。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏗️ Pure Brutalism: "Concrete is honest. Strength. They will learn to appreciate it in 50 years."',
                    th: '🏗️ บรูทัลลิสต์บริสุทธิ์: "คอนกรีตคือความซื่อสัตย์ ความแข็งแกร่ง พวกเขาจะเรียนรู้ที่จะชื่นชมมันใน 50 ปี"',
                    zh: '🏗️ 纯粹的野兽派："混凝土是诚实的。力量。他们会在 50 年后学会欣赏它。"'
                },
                consequence: {
                    en: '🗯️ Public Hatred. People call it "The Bunker." It functions well, but everyone feels intimidated entering it.',
                    th: '🗯️ ความเกลียดชังของสาธารณชน ผู้คนเรียกมันว่า "บังเกอร์" มันใช้งานได้ดี แต่ทุกคนรู้สึกหวาดกลัวเมื่อเข้าไป',
                    zh: '🗯️ 公众仇恨。人们称之为"地堡"。它运作良好，但每个人进去时都感到害怕。'
                },
                stats: { competence: 40, ethics: 10, leadership: -20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🏛️ Neoclassical Polish: "Fine. Columns and marble. Give them what they expect. Boring but safe."',
                    th: '🏛️ นีโอคลาสสิกขัดเงา: "ก็ได้ เสาและหินอ่อน ให้สิ่งที่พวกเขาคาดหวัง น่าเบื่อแต่ปลอดภัย"',
                    zh: '🏛️ 新古典主义抛光："好吧。柱子和大理石。给他们想要的。无聊但安全。"'
                },
                consequence: {
                    en: '😴 Forgettable. It blends in. No one complains, no one praises. Just another government building.',
                    th: '😴 ลืมง่าย มันกลมกลืน ไม่มีใครบ่น ไม่มีใครชม แค่อาคารรัฐบาลอีกแห่ง',
                    zh: '😴 令人遗忘。它混入其中。没人抱怨，没人赞美。只是又一座政府大楼。'
                },
                stats: { competence: 30, ethics: 0, leadership: 10, innovation: -20 }
            },
            {
                id: 'C',
                text: {
                    en: '🌿 Eco-Brutalism: "Massive concrete forms, but covered in vines and moss. Soften the gray with green. Solarpunk aesthetics."',
                    th: '🌿 อีโคบรูทัลลิสต์: "รูปทรงคอนกรีตมหึมา แต่คลุมด้วยเถาวัลย์และมอส ลดความแข็งกระด้างของสีเทาด้วยสีเขียว สุนทรียศาสตร์โซลาร์พังค์"',
                    zh: '🌿 生态野兽派："巨大的混凝土形式，但覆盖着藤蔓和苔藓。用绿色柔化灰色。太阳朋克美学。"'
                },
                consequence: {
                    en: '😍 Viral Hit! "The Ruins of the Future." It looks post-apocalyptic but hopeful. Everyone loves it.',
                    th: '😍 ไวรัลฮิต! "ซากปรักหักพังแห่งอนาคต" ดูเหมือนหลังวันสิ้นโลกแต่มีความหวัง ทุกคนรักมัน',
                    zh: '😍 病毒式热门！"未来的废墟。"它看起来像后启示录但充满希望。每个人都喜欢它。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'architect_019',
        text: {
            en: '🧪 Self-Healing Concrete: A lab offers you experimental "living concrete" for a bridge. It heals its own cracks with bacteria, but if it mutates, it could... eat the steel reinforcements.',
            th: '🧪 คอนกรีตซ่อมแซมตัวเอง: ห้องปฏิบัติการเสนอ "คอนกรีตที่มีชีวิต" ทดลองสำหรับสะพาน มันสมานรอยร้าวเองด้วยแบคทีเรีย แต่ถ้ามันกลายพันธุ์ มันอาจ... กินเหล็กเสริม',
            zh: '🧪 自愈混凝土：一个实验室为你提供用于桥梁的实验性"活性混凝土"。它用细菌修复自己的裂缝，但如果发生突变，它通过……吃掉钢筋。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Take the Risk: "Maintenance costs act as a killer. This solves it. I trust the science."',
                    th: '🚀 รับความเสี่ยง: "ค่าบำรุงรักษาเป็นตัวฆ่า สิ่งนี้แก้ปัญหาได้ ผมเชื่อมั่นในวิทยาศาสตร์"',
                    zh: '🚀 承担风险："维护成本是致命的。这解决了问题。我相信科学。"'
                },
                consequence: {
                    en: '🦠 Biology Experiment. It works for 10 years, then turns slime green. It smells, but it stands. Unique character.',
                    th: '🦠 การทดลองทางชีววิทยา มันทำงานได้ 10 ปี แล้วเปลี่ยนเป็นสีเขียวเมือก มีกลิ่น แต่ยังตั้งอยู่ ตัวละครที่ไม่เหมือนใคร',
                    zh: '🦠 生物实验。它工作了 10 年，然后变成了粘液绿色。它有味道，但它屹立不倒。独特的性格。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Safety First: "Too experimental for public infrastructure. Stick to epoxy injections."',
                    th: '🛡️ ปลอดภัยไว้ก่อน: "ทดลองเกินไปสำหรับโครงสร้างพื้นฐานสาธารณะ ยึดติดกับการฉีดอีพ็อกซี่"',
                    zh: '🛡️ 安全第一："这对于公共基础设施来说太具实验性了。坚持使用环氧树脂注射。"'
                },
                consequence: {
                    en: '📒 Standard Practice. Boring, expensive maintenance, but zero risk of a "concrete virus."',
                    th: '📒 การปฏิบัติมาตรฐาน น่าเบื่อ ค่าบำรุงรักษาแพง แต่ไม่มีความเสี่ยงของ "ไวรัสคอนกรีต"',
                    zh: '📒 标准做法。无聊，昂贵的维护，但没有"混凝土病毒"的风险。'
                },
                stats: { competence: 30, ethics: 30, leadership: 10, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧱 Hybrid Use: "Use it on non-structural benches and walls first. Test it in the real world safely."',
                    th: '🧱 การใช้งานผสม: "ใช้กับม้านั่งและผนังที่ไม่ใช่โครงสร้างก่อน ทดสอบในโลกแห่งความเป็นจริงอย่างปลอดภัย"',
                    zh: '🧱 混合使用："首先在非结构长椅和墙壁上使用它。在现实世界中安全地测试它。"'
                },
                consequence: {
                    en: '🔬 Smart Pilot. The benches heal themselves. Data is gathered. Ideally prudent.',
                    th: '🔬 นักบินที่ฉลาด ม้านั่งซ่อมแซมตัวเอง ข้อมูลถูกรวบรวม รอบคอบอย่างอุดมคติ',
                    zh: '🔬 聪明的试点。长椅自我修复。收集数据。理想的谨慎。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 30 }
            }
        ]
    },
    {
        id: 'architect_020',
        text: {
            en: '🌀 The "Unbuildable" Design: You sketch fluid, gravity-defying shape in a dream. Engineers say it stands 50% chance of collapse during construction. Curves are impossible.',
            th: '🌀 การออกแบบ "ที่สร้างไม่ได้": คุณสเก็ตช์รูปร่างที่ลื่นไหล ท้าทายแรงโน้มถ่วงในความฝัน วิศวกรบอกว่ามีโอกาส 50% ที่จะถล่มระหว่างการก่อสร้าง เส้นโค้งเป็นไปไม่ได้',
            zh: '🌀 "无法建造"的设计：你在梦中画出了流动的、反重力的形状。工程师说在施工期间有 50% 的几率倒塌。曲线是不可能的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎢 Push Limits: "Use aerospace materials. Carbon fiber. 3D print the joints. Make it happen."',
                    th: '🎢 ผลักดันขีดจำกัด: "ใช้วัสดุการบินและอวกาศ คาร์บอนไฟเบอร์ พิมพ์ข้อต่อ 3 มิติ ทำให้มันเกิดขึ้น"',
                    zh: '🎢 突破极限："使用航空航天材料。碳纤维。3D 打印接头。让它发生。"'
                },
                consequence: {
                    en: '🏛️ Iconic Landmark! It takes 10 years and goes 5x over budget. But it defines the skyline for a century. You are a legend.',
                    th: '🏛️ แลนด์มาร์กที่เป็นไอคอน! ใช้เวลา 10 ปีและเกินงบ 5 เท่า แต่มันกำหนดเส้นขอบฟ้ามาเป็นศตวรรษ คุณเป็นตำนาน',
                    zh: '🏛️ 标志性地标！花了 10 年，超出预算 5 倍。但它定义了一个世纪的天际线。你是一个传奇。'
                },
                stats: { competence: 50, ethics: 10, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '📐 Rationalize It: "Straighten the curves slightly. Add support columns. Keep the spirit but make it safe."',
                    th: '📐 ทำให้สมเหตุสมผล: "ยืดเส้นโค้งเล็กน้อย เพิ่มเสาค้ำ รักษาจิตวิญญาณแต่ทำให้ปลอดภัย"',
                    zh: '📐 合理化："稍微拉直曲线。添加支撑柱。保持精神但使其安全。"'
                },
                consequence: {
                    en: '📉 Watered Down. It looks like a cheap imitation of your sketch. The magic is gone.',
                    th: '📉 เจือจาง มันดูเหมือนการเลียนแบบราคาถูกของสเก็ตช์ของคุณ เวทมนตร์หายไป',
                    zh: '📉 缩水。它看起来像你草图的廉价模仿。魔力消失了。'
                },
                stats: { competence: 30, ethics: 0, leadership: 0, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🖼️ Paper Architecture: "Do not build it. Publish the plans as a theoretical masterpiece. Influence others."',
                    th: '🖼️ สถาปัตยกรรมกระดาษ: "ไม่ต้องสร้าง ตีพิมพ์แผนงานเป็นผลงานชิ้นเอกทางทฤษฎี มีอิทธิพลต่อผู้อื่น"',
                    zh: '🖼️ 纸上建筑："不要建造它。将计划作为理论杰作发布。影响他人。"'
                },
                consequence: {
                    en: '📚 Academic Fame. Students study your "Lost Achievement." You inspire a generation without risking a collapse.',
                    th: '📚 ชื่อเสียงทางวิชาการ นักเรียนศึกษา "ความสำเร็จที่หายไป" ของคุณ คุณสร้างแรงบันดาลใจให้คนรุ่นหลังโดยไม่ต้องเสี่ยงต่อการถล่ม',
                    zh: '📚 学术名声。学生研究你的"失去的成就"。你激励了一代人而没有冒倒塌的风险。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 40 }
            }
        ]
    },
    {
        id: 'architect_021',
        text: {
            en: '🐜 Biomimicry Ventilation: You are designing a tower in a hot climate. Instead of AC, you propose a ventilation system inspired by termite mounds. It is risky and unproven at this scale.',
            th: '🐜 การระบายอากาศแบบเลียนแบบชีวภาพ: คุณกำลังออกแบบตึกในภูมิอากาศร้อน แทนที่จะใช้แอร์ คุณเสนอระบบระบายอากาศที่ได้รับแรงบันดาลใจจากจอมปลวก มันเสี่ยงและยังไม่ได้รับการพิสูจน์ในระดับนี้',
            zh: '🐜 仿生通风：你正在设计炎热气候下的一座塔楼。如果不使用空调，你提议采用受白蚁丘启发的通风系统。这种规模是有风险且未经证实的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🐜 Trust Nature: "Termites know physics better than we do. Build it. No AC at all."',
                    th: '🐜 เชื่อในธรรมชาติ: "ปลวกรู้เรื่องฟิสิกส์ดีกว่าเรา สร้างมันเลย ไม่มีแอร์เลย"',
                    zh: '🐜 相信自然："白蚁比我们更懂物理。建造它。完全没有空调。"'
                },
                consequence: {
                    en: '🌬️ Cool Breeze! It works perfectly. Energy costs are zero. You revolutionize sustainable design.',
                    th: '🌬️ สายลมเย็น! มันทำงานได้สมบูรณ์แบบ ค่าพลังงานเป็นศูนย์ คุณปฏิวัติการออกแบบที่ยั่งยืน',
                    zh: '🌬️ 凉风！它完美运作。能源成本为零。你彻底改变了可持续设计。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '❄️ Backup Hybrid: "Install the termite system, but keep a backup AC system just in case."',
                    th: '❄️ ไฮบริดสำรอง: "ติดตั้งระบบปลวก แต่เก็บระบบแอร์สำรองไว้เผื่อฉุกเฉิน"',
                    zh: '❄️ 备用混合动力："安装白蚁系统，但保留备用空调系统以防万一。"'
                },
                consequence: {
                    en: '💰 Expensive Safety. The client complains about paying for two systems. But the building is comfortable.',
                    th: '💰 ความปลอดภัยที่แพง ลูกค้าบ่นเรื่องจ่ายเงินสองระบบ แต่อาคารก็สะดวกสบาย',
                    zh: '💰 昂贵的安全。客户抱怨要为两个系统付费。但大楼很舒适。'
                },
                stats: { competence: 40, ethics: 20, leadership: 10, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🔌 Stick to AC: "Too risky. Just put in a big chiller. Clients hate sweating."',
                    th: '🔌 ยึดติดกับแอร์: "เสี่ยงเกินไป แค่ใส่เครื่องทำความเย็นขนาดใหญ่ ลูกค้าเกลียดเหงื่อออก"',
                    zh: '🔌 坚持空调："太冒险了。只需安装一个大冷水机组。客户讨厌出汗。"'
                },
                consequence: {
                    en: '🔌 Energy Hog. The building is cold but costs a fortune to run. Environmentalists protest.',
                    th: '🔌 ตัวกินพลังงาน อาคารเย็นแต่ค่าไฟแพงมหาศาล นักสิ่งแวดล้อมประท้วง',
                    zh: '🔌 能源消耗大户。大楼很冷，但运行成本很高。环保主义者抗议。'
                },
                stats: { competence: 30, ethics: -20, leadership: 0, innovation: -30 }
            }
        ]
    },
    {
        id: 'architect_022',
        text: {
            en: '📦 Micro-Apartments: A developer wants to squeeze 500 units into a building meant for 200. "Micro-living," they call it. 15 square meters per person. Is it efficiency or a human rights violation?',
            th: '📦 อพาร์ทเมนต์ขนาดจิ๋ว: นักพัฒนาต้องการบีบ 500 ยูนิตลงในตึกที่ควรจุ 200 "การใช้ชีวิตแบบไมโคร" พวกเขาเรียกมัน 15 ตารางเมตรต่อคน เป็นประสิทธิภาพหรือการละเมิดสิทธิมนุษยชน?',
            zh: '📦 微型公寓：开发商想把 500 个单元挤进原本只能容纳 200 人的大楼里。他们称之为"微生活"。每人 15 平方米。这是效率还是侵犯人权？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛋️ Smart Furniture: "Design walls that move. Beds that hide. Make 15sqm feel like 30sqm. It is a puzzle."',
                    th: '🛋️ เฟอร์นิเจอร์อัจฉริยะ: "ออกแบบผนังที่เคลื่อนที่ได้ เตียงที่ซ่อนได้ ทำให้ 15 ตรม. รู้สึกเหมือน 30 ตรม. มันคือปริศนา"',
                    zh: '🛋️ 智能家具："设计可移动的墙壁。隐藏的床。让 15 平方米感觉像 30 平方米。这是一个谜题。"'
                },
                consequence: {
                    en: '🧩 Tetris Master! Young people love the affordability and gadgetry. You solved the housing crisis... sort of.',
                    th: '🧩 ปรมาจารย์ Tetris! คนหนุ่มสาวชอบความประหยัดและลูกเล่น คุณแก้วิกฤตที่อยู่อาศัย... ในระดับหนึ่ง',
                    zh: '🧩 俄罗斯方块大师！年轻人喜欢其实惠和新奇的小玩意。你解决了住房危机……某种程度上。'
                },
                stats: { competence: 50, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Push Back: "Humans need space. I will only design 300 units minimum. I won\'t design rabbit hutches."',
                    th: '🛑 ยันกลับ: "มนุษย์ต้องการพื้นที่ ผมจะออกแบบขั้นต่ำ 300 ยูนิตเท่านั้น ผมจะไม่ออกแบบกรงกระต่าย"',
                    zh: '🛑 顶回去："人类需要空间。我至少只设计 300 个单元。我不会设计兔子窝。"'
                },
                consequence: {
                    en: '📉 Fired. The developer hires someone else. The "rabbit hutches" get built anyway. You kept your morals.',
                    th: '📉 ถูกไล่ออก นักพัฒนาจ้างคนอื่น "กรงกระต่าย" ถูกสร้างอยู่ดี คุณรักษาศีลธรรมของคุณ',
                    zh: '📉 被解雇。开发商雇了别人。"兔子窝"还是建成了。你保持了道德。'
                },
                stats: { competence: 0, ethics: 50, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🏢 Common Spaces: "Small rooms, but massive shared kitchens, gyms, and lounges. Force community."',
                    th: '🏢 พื้นที่ส่วนกลาง: "ห้องเล็ก แต่ครัว ยิม และเลานจ์ส่วนกลางขนาดใหญ่ บังคับให้เกิดชุมชน"',
                    zh: '🏢 公共空间："小房间，但有巨大的共用厨房、健身房和休息室。强迫社区化。"'
                },
                consequence: {
                    en: '🤝 Dorm Life for Adults. It works beautifully. Residents are friends. Loneliness is cured.',
                    th: '🤝 ชีวิตหอพักสำหรับผู้ใหญ่ มันทำงานได้อย่างสวยงาม ผู้อยู่อาศัยเป็นเพื่อนกัน ความเหงาหายไป',
                    zh: '🤝 成年人的宿舍生活。运作得很漂亮。居民是朋友。孤独被治愈了。'
                },
                stats: { competence: 40, ethics: 40, leadership: 40, innovation: 30 }
            }
        ]
    },
    {
        id: 'architect_023',
        text: {
            en: '🌑 Shadow Casting: Your proposed skyscraper is so tall it will cast a permanent shadow over the city\'s central park. The wealthy client does not care.',
            th: '🌑 การทอดเงา: ตึกระฟ้าที่คุณเสนอสูงมากจนจะทอดเงาถาวรเหนือสวนสาธารณะกลางเมือง ลูกค้าผู้มั่งคั่งไม่สนใจ',
            zh: '🌑 投射阴影：你提议的摩天大楼太高了，会在城市中央公园投下永久的阴影。富有的客户并不在乎。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✂️ Taper the Top: "Redesign the top to be thin and transparent. Let light through. It costs floor space."',
                    th: '✂️ เรียวนยอด: "ออกแบบยอดให้บางและโปร่งใส ให้แสงผ่าน เสียพื้นที่ใช้สอย"',
                    zh: '✂️ 锥形顶部："重新设计顶部，使其变薄且透明。让光线通过。这会消耗建筑面积。"'
                },
                consequence: {
                    en: '🌤️ Considerate Design. The park gets sun. The client earns less rent, but the city approves the permit faster.',
                    th: '🌤️ การออกแบบที่เกรงใจ สวนได้รับแดด ลูกค้าได้ค่าเช่าน้อยลง แต่เมืองอนุมัติใบอนุญาตเร็วขึ้น',
                    zh: '🌤️ 体贴的设计。公园有阳光。客户赚的租金少了，但城市批准许可证的速度更快了。'
                },
                stats: { competence: 40, ethics: 40, leadership: 20, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🕶️ Built It Tall: "Shadows move. It is fine. The view from the penthouse is worth the park dying."',
                    th: '🕶️ สร้างสูง: "เงาเคลื่อนที่ได้ ไม่เป็นไร วิวจากเพนท์เฮาส์คุ้มค่ากับสวนที่ตาย"',
                    zh: '🕶️ 建得高："阴影会移动。没关系。顶层公寓的景色值得公园牺牲。"'
                },
                consequence: {
                    en: '🥀 Dead Grass. The park becomes damp and mossy. Public protests target your firm.',
                    th: '🥀 หญ้าตาย สวนกลายเป็นที่ชื้นแฉะและมีมอส การประท้วงของสาธารณชนเพ่งเล็งบริษัทของคุณ',
                    zh: '🥀 死草。公园变得潮湿，长满苔藓。公众抗议针对你的公司。'
                },
                stats: { competence: 30, ethics: -40, leadership: -20, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🪞 Heliostats: "Install giant mirrors on a nearby building to reflect sunlight BACK into the park."',
                    th: '🪞 เฮลิโอสแตท: "ติดตั้งกระจกยักษ์บนตึกใกล้เคียงเพื่อสะท้อนแสงแดดกลับลงไปในสวน"',
                    zh: '🪞 定日镜："在附近的建筑物上安装巨大的镜子，将阳光反射回公园。"'
                },
                consequence: {
                    en: '☀️ Tech Solution! It works brilliantly. You look like a genius wizard. The "Sun Catcher" becomes a landmark.',
                    th: '☀️ ทางออกเทคโนโลยี! มันทำงานได้ยอดเยี่ยม คุณดูเหมือนพ่อมดอัจฉริยะ "Sun Catcher" กลายเป็นแลนด์มาร์ก',
                    zh: '☀️ 技术解决方案！效果极佳。你看起来像个天才巫师。"捕日者"成为地标。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'architect_024',
        text: {
            en: '🛢️ Adaptive Reuse: An old offshore oil rig is being decommissioned. A hotel chain wants to turn it into a luxury adventure resort. It is rusted and smells like petrol.',
            th: '🛢️ การนำกลับมาใช้ใหม่: แท่นขุดเจาะน้ำมันเก่านอกชายฝั่งกำลังจะถูกปลดระวาง เครือโรงแรมต้องการเปลี่ยนให้เป็นรีสอร์ทผจญภัยหรู มันเป็นสนิมและมีกลิ่นน้ำมัน',
            zh: '🛢️ 适应性再利用：一个旧的海上石油钻井平台正在退役。一家连锁酒店想把它变成豪华探险度假村。它生锈了，闻起来像汽油。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎨 Industrial Chic: "Keep the rust. Seal it. The grittiness is the brand. Diving from the helipad!"',
                    th: '🎨 อินดัสเทรียลชิค: "เก็บสนิมไว้ ซีลมัน ความดิบคือแบรนด์ กระโดดน้ำจากลานจอดเฮลิคอปเตอร์!"',
                    zh: '🎨 工业风："保留铁锈。密封它。粗犷就是品牌。从停机坪跳水！"'
                },
                consequence: {
                    en: '🤩 Adventure Hotspot! Influencers love it. It is dangerous but thrilling. Fully booked.',
                    th: '🤩 จุดฮอตแห่งการผจญภัย! อินฟลูเอนเซอร์ชอบมาก อันตรายแต่น่าตื่นเต้น จองเต็ม',
                    zh: '🤩 探险热点！网红们很喜欢。很危险但很刺激。预订一空。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🧼 Scrub and Clad: "Remove everything dangerous. Clad the rig in white polymer. Make it look like a spaceship."',
                    th: '🧼 ขัดและหุ้ม: "เอาทุกอย่างที่อันตรายออก หุ้มแท่นด้วยโพลีเมอร์สีขาว ทำให้ดูเหมือนยานอวกาศ"',
                    zh: '🧼 擦洗和包层："清除所有危险物品。用白色聚合物包裹钻井平台。让它看起来像宇宙飞船。"'
                },
                consequence: {
                    en: '🚀 Sterile Luxury. It is safe and clean, but lost its soul. Guests say it feels like a hospital.',
                    th: '🚀 ความหรูหราที่ปลอดเชื้อ ปลอดภัยและสะอาด แต่สูญเสียจิตวิญญาณ แขกบอกว่ารู้สึกเหมือนโรงพยาบาล',
                    zh: '🚀 无菌奢华。安全干净，但失去了灵魂。客人说感觉像医院。'
                },
                stats: { competence: 30, ethics: 30, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🐠 Reef Builder: "Sink the lower legs purposely to create a coral reef. Build glass-bottom rooms. Eco-tourism."',
                    th: '🐠 ผู้สร้างแนวปะการัง: "จมขาช่วงล่างอย่างตั้งใจเพื่อสร้างแนวปะการัง สร้างห้องพื้นกระจก การท่องเที่ยวเชิงนิเวศ"',
                    zh: '🐠 珊瑚礁建造者："故意让下部支腿下沉以建造珊瑚礁。建造玻璃底房间。生态旅游。"'
                },
                consequence: {
                    en: '🐠 Ocean Paradise. The reef grows. Divers come from everywhere. You turned an oil polluter into a sanctuary.',
                    th: '🐠 สวรรค์แห่งมหาสมุทร แนวปะการังเติบโต นักดำน้ำมาจากทุกที่ คุณเปลี่ยนผู้ก่อมลพิษน้ำมันให้เป็นเขตรักษาพันธุ์',
                    zh: '🐠 海洋天堂。珊瑚礁生长。潜水员从四面八方赶来。你把石油污染者变成了避难所。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'architect_025',
        text: {
            en: '🌌 Zero Gravity Hotel: A space tourism company hires you to design a hotel in orbit. Up and down do not exist. Traditional floor plans are useless.',
            th: '🌌 โรงแรมแรงโน้มถ่วงศูนย์: บริษัทท่องเที่ยวอวกาศจ้างคุณให้ออกแบบโรงแรมในวงโคจร ขึ้นและลงไม่มีอยู่จริง ผังพื้นแบบดั้งเดิมไร้ประโยชน์',
            zh: '🌌 零重力酒店：一家太空旅游公司聘请你设计轨道酒店。不存在上下之分。传统的平面图毫无用处。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕸️ The Spiderweb: "Use Velcro walls and elastic tethers everywhere. People float and attach themselves like spiders."',
                    th: '🕸️ ใยแมงมุม: "ใช้ผนังเวลโครและเชือกยืดหยุ่นทุกที่ ผู้คนลอยและยึดตัวเองเหมือนแมงมุม"',
                    zh: '🕸️ 蜘蛛网："到处使用尼龙搭扣墙和弹性系绳。人们像蜘蛛一样漂浮并附着。"'
                },
                consequence: {
                    en: '🤸 Fun but Messy. Guests love the freedom initially, then get tangled. It is chaotic.',
                    th: '🤸 สนุกแต่วุ่นวาย แขกชอบอิสระในตอนแรก แล้วก็พันกัน ยุ่งเหยิง',
                    zh: '🤸 有趣但混乱。客人一开始喜欢这种自由，然后就被缠住了。这很混乱。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🍩 The Centrifuge: "Build a rotating wheel to create artificial gravity. Keep it familiar. People get space-sick otherwise."',
                    th: '🍩 เครื่องหมุนเหวี่ยง: "สร้างล้อหมุนเพื่อสร้างแรงโน้มถ่วงเทียม ให้มันคุ้นเคย ไม่งั้นคนจะเมาอวกาศ"',
                    zh: '🍩 离心机："建造一个旋转轮来产生人造重力。保持熟悉感。否则人们会患太空病。"'
                },
                consequence: {
                    en: '🤢 Engineering Challenge. It wobbles slightly, causing nausea. But it is the only way to eat soup.',
                    th: '🤢 ความท้าทายทางวิศวกรรม มันโคลงเคลงเล็กน้อย ทำให้คลื่นไส้ แต่มันเป็นวิธีเดียวที่จะกินซุป',
                    zh: '🤢 工程挑战。它轻微晃动，引起恶心。但这是喝汤的唯一方法。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🎈 Padded Cell: "Soft, cylindrical rooms padded on all sides. You push off surfaces. 3D movement is the feature."',
                    th: '🎈 ห้องนวม: "ห้องทรงกระบอกนุ่มๆ บุรอบด้าน คุณถีบตัวออกจากพื้นผิว การเคลื่อนไหว 3 มิติคือจุดเด่น"',
                    zh: '🎈 软垫牢房："四面都有软垫的圆柱形房间。你推开表面。3D 运动是特色。"'
                },
                consequence: {
                    en: '🧘 Space Zen. It feels safe and womb-like. Guests sleep floating in mid-air. True space experience.',
                    th: '🧘 สเปซเซน รู้สึกปลอดภัยและเหมือนอยู่ในครรภ์ แขกนอนลอยกลางอากาศ ประสบการณ์อวกาศที่แท้จริง',
                    zh: '🧘 太空禅。感觉安全，像子宫一样。客人在半空中漂浮睡觉。真正的太空体验。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            }
        ]
    },
    {
        id: 'architect_026',
        text: {
            en: '🔇 Acoustic Disaster: The new concert hall looks stunning, but testing reveals a "dead spot" in the VIP section where sound is muffled. Fixing it ruins the aesthetic.',
            th: '🔇 หายนะทางอคูสติก: คอนเสิร์ตฮอลล์ใหม่ดูน่าทึ่ง แต่การทดสอบเผยให้เห็น "จุดบอด" ในโซน VIP ที่เสียงอู้อี้ การแก้ไขจะทำลายสุนทรียภาพ',
            zh: '🔇 声学灾难：新的音乐厅看起来令人惊叹，但在测试中发现 VIP 区有一个"死角"，声音在那里很闷。修复它会破坏美感。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔊 Digital Fix: "Install hidden speakers in the VIP seats to boost the sound. No one will know it is not acoustic."',
                    th: '🔊 แก้ไขดิจิตอล: "ติดลำโพงซ่อนในเบาะ VIP เพื่อเพิ่มเสียง ไม่มีใครรู้หรอกว่าไม่ใช่เสียงจริง"',
                    zh: '🔊 数字修复："在 VIP 座位上安装隐藏式扬声器以增强声音。没人会知道这不是声学效果。"'
                },
                consequence: {
                    en: '🤫 Audiophile Scandal. Critics detect the speakers. "Fake Sound" headlines destroy the hall\'s reputation.',
                    th: '🤫 สแกนดัลหูทอง นักวิจารณ์จับได้เรื่องลำโพง พาดหัว "เสียงปลอม" ทำลายชื่อเสียงของฮอลล์',
                    zh: '🤫 发烧友丑闻。评论家发现了扬声器。"假声"头条新闻毁掉了大厅的声誉。'
                },
                stats: { competence: 20, ethics: -40, leadership: -20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🍄 Ugly Panels: "Hang acoustic clouds and panels. It looks cluttered, but the sound must be perfect."',
                    th: '🍄 แผงน่าเกลียด: "แขวนก้อนเมฆและแผงอคูสติก มันดูรก แต่เสียงต้องสมบูรณ์แบบ"',
                    zh: '🍄 丑陋的面板："悬挂声学云和面板。看起来很乱，但声音必须完美。"'
                },
                consequence: {
                    en: '🎻 Sonic Perfection. Musicians love it. Audiences forgive the messy ceiling because the sound is divine.',
                    th: '🎻 ความสมบูรณ์แบบของเสียง นักดนตรีรักมัน ผู้ชมให้อภัยเพดานที่รกเพราะเสียงนั้นไพเราะ',
                    zh: '🎻 声音完美。音乐家喜欢它。观众原谅了凌乱的天花板，因为声音是神圣的。'
                },
                stats: { competence: 50, ethics: 30, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🤷 Ignore It: "They are VIPs, they are here to be seen, not to listen. The seats are comfortable."',
                    th: '🤷 ช่างมัน: "พวกเขาคือ VIP มาที่นี่เพื่อให้คนเห็น ไม่ใช่มาฟัง เบาะนั่งสบายก็พอ"',
                    zh: '🤷 忽略它："他们是 VIP，他们来这里是为了露面，而不是为了听。座位很舒服。"'
                },
                consequence: {
                    en: '📉 Rich Anger. Donor funding dries up when the Mayor can\'t hear the opera. You lose future contracts.',
                    th: '📉 ความโกรธของคนรวย เงินบริจาคแห้งหายเมื่อนายกเทศมนตรีไม่ได้ยินโอเปร่า คุณเสียสัญญาในอนาคต',
                    zh: '📉 富人的愤怒。当市长听不到歌剧时，捐助资金就枯竭了。你失去了未来的合同。'
                },
                stats: { competence: 10, ethics: -20, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'architect_027',
        text: {
            en: '💰 The Impossible Budget: A non-profit wants a "world-class community center" but has a budget suitable for a shed. "Be creative," they say.',
            th: '💰 งบประมาณที่เป็นไปไม่ได้: องค์กรไม่แสวงหาผลกำไรต้องการ "ศูนย์ชุมชนระดับโลก" แต่มีงบประมาณสำหรับโรงเก็บของ "จงใช้ความคิดสร้างสรรค์" พวกเขาบอก',
            zh: '💰 不可能的预算：一家非营利组织想要一个"世界级的社区中心"，但预算只够建一个棚子。"要有创意，"他们说。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📦 Shipping Containers: "Stack used shipping containers. Paint them bright colors. Industrial cool. Cheap."',
                    th: '📦 ตู้คอนเทนเนอร์: "ซ้อนตู้คอนเทนเนอร์ใช้แล้ว ทาสีสดใส เท่แบบอุตสาหกรรม ถูก"',
                    zh: '📦 集装箱："堆叠用过的集装箱。给它们涂上鲜艳的颜色。工业酷。便宜。"'
                },
                consequence: {
                    en: '🎨 Trendy Box. It works well and looks hip. It gets hot in summer, but the budget was met.',
                    th: '🎨 กล่องสุดเทรนด์ ใช้งานได้ดีและดูฮิป ร้อนในฤดูร้อน แต่ทำตามงบได้',
                    zh: '🎨 时尚的盒子。效果很好，看起来很时髦。夏天很热，但满足了预算。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Volunteer Labor: "The community builds it themselves. Use earthbags and adobe. I supervise."',
                    th: '🤝 แรงงานอาสาสมัคร: "ชุมชนสร้างมันด้วยตัวเอง ใช้ถุงดินและดินเหนียว ผมคุมงาน"',
                    zh: '🤝 志愿劳动："社区自己建造。使用土袋和土坯。我监督。"'
                },
                consequence: {
                    en: '❤️ True Ownership. The building is wonky and imperfect, but the locals love it because they made it.',
                    th: '❤️ ความเป็นเจ้าของที่แท้จริง อาคารจะเบี้ยวๆ และไม่สมบูรณ์ แต่ชาวบ้านรักมันเพราะพวกเขาทำมัน',
                    zh: '❤️ 真正的主人翁感。建筑摇摇欲坠且不完美，但当地人因为是自己建造的而喜欢它。'
                },
                stats: { competence: 30, ethics: 50, leadership: 50, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🏳️ Give Up: "It cannot be done. Come back when you have money." You walk away.',
                    th: '🏳️ ยอมแพ้: "มันทำไม่ได้ กลับมาเมื่อคุณมีเงิน" คุณเดินจากไป',
                    zh: '🏳️ 放弃："这做不到。有钱了再来。"你走开了。'
                },
                consequence: {
                    en: '🚪 Opportunity Missed. Another architect takes the job and becomes famous for doing much with little.',
                    th: '🚪 พลาดโอกาส สถาปนิกคนอื่นรับงานและมีชื่อเสียงจากการทำมากด้วยทรัพยากรน้อย',
                    zh: '🚪 错失良机。另一位建筑师接下了这份工作，并因少花钱多办事而成名。'
                },
                stats: { competence: 0, ethics: 0, leadership: -10, innovation: 0 }
            }
        ]
    },
    {
        id: 'architect_028',
        text: {
            en: '🎭 Historic Facade: The developer wants to demolish a historic theater but keep ONLY the front wall to satisfy preservation laws, building a glass skyscraper behind it. "Facadism."',
            th: '🎭 ฟาซาดประวัติศาสตร์: นักพัฒนาต้องการรื้อถอนโรงละครประวัติศาสตร์แต่เก็บ *เฉพาะ* ผนังด้านหน้าเพื่อให้เป็นไปตามกฎหมายอนุรักษ์ สร้างตึกระฟ้ากระจกข้างหลัง "Facadism"',
            zh: '🎭 历史立面：开发商想要拆除一座历史悠久的剧院，但 *仅仅* 保留前墙以满足保护法，在后面建造一座玻璃摩天大楼。"立面主义"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧟 The Frankenstein: "Do it. Propped up old wall, sterile new tower. It is the compromise reality."',
                    th: '🧟 แฟรงเกนสไตน์: "ทำเลย ผนังเก่าค้ำยัน ตึกใหม่ปลอดเชื้อ มันคือความเป็นจริงที่ประนีประนอม"',
                    zh: '🧟 弗兰肯斯坦："做吧。支撑起旧墙，无菌的新塔。这是妥协的现实。"'
                },
                consequence: {
                    en: '🏚️ Hallow Shell. It looks fake and cheap. Heritage groups mourn the loss of the interior.',
                    th: '🏚️ เปลือกกลวง ดูปลอมและราคาถูก กลุ่มมรดกอาลัยการสูญเสียภายใน',
                    zh: '🏚️ 空壳。看起来既假又廉价。遗产团体哀悼内部的丧失。'
                },
                stats: { competence: 30, ethics: -20, leadership: 0, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Deep Integration: "Set the tower back. Keep the lobby and stage. Use the old theater as the building\'s entrance hall."',
                    th: '🤝 การบูรณาการเชิงลึก: "ถอยตึกกลับไป เก็บล็อบบี้และเวทีไว้ ใช้โรงละครเก่าเป็นโถงทางเข้าของอาคาร"',
                    zh: '🤝 深度整合："把塔楼往后退。保留大堂和舞台。利用旧剧院作为大楼的入口大厅。"'
                },
                consequence: {
                    en: '🎭 Grand Entrance! The lobby is magnificent. The tower feels rooted in history. Tenants pay a premium.',
                    th: '🎭 ทางเข้าที่ยิ่งใหญ่! ล็อบบี้งดงาม ตึกรู้สึกหยั่งรากในประวัติศาสตร์ ผู้เช่าจ่ายแพงกว่า',
                    zh: '🎭 盛大的入口！大堂宏伟壮观。这座塔楼让人感觉植根于历史。租客支付溢价。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🏗️ Save It All: "No tower here. Renovate the theater only. Find another site for the office."',
                    th: '🏗️ เก็บไว้ทั้งหมด: "ไม่มีตึกที่นี่ ปรับปรุงโรงละครเท่านั้น หาที่อื่นสำหรับออฟฟิศ"',
                    zh: '🏗️ 全部保存："这里没有塔楼。只翻新剧院。另找地方建办公室。"'
                },
                consequence: {
                    en: '🚫 You are Fired. The developer wants density. You protected the building, but lost the job.',
                    th: '🚫 คุณถูกไล่ออก นักพัฒนาต้องการความหนาแน่น คุณปกป้องอาคาร แต่เสียงาน',
                    zh: '🚫 你被解雇了。开发商想要密度。你保护了建筑，但丢了工作。'
                },
                stats: { competence: 10, ethics: 50, leadership: 20, innovation: 0 }
            }
        ]
    },
    {
        id: 'architect_029',
        text: {
            en: '🤖 AI Architect: A software company releases an AI that designs floor plans 1000x faster than you. Your firm wants to fire 50% of junior architects and use the AI.',
            th: '🤖 สถาปนิก AI: บริษัทซอฟต์แวร์เปิดตัว AI ที่ออกแบบผังพื้นได้เร็วกว่าคุณ 1000 เท่า บริษัทของคุณต้องการไล่สถาปนิกรุ่นน้องออก 50% และใช้ AI',
            zh: '🤖 AI 建筑师：一家软件公司发布了一款 AI，其设计平面图的速度比你快 1000 倍。你的公司想解雇 50% 的初级建筑师并使用 AI。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🖱️ Embrace Automation: "Fire them. We need to stay competitive. Retrain the survivors to prompt the AI."',
                    th: '🖱️ โอบรับระบบอัตโนมัติ: "ไล่ออกเลย เราต้องแข่งขันได้ ฝึกผู้รอดชีวิตใหม่ให้ป้อนคำสั่ง AI"',
                    zh: '🖱️ 拥抱自动化："解雇他们。我们需要保持竞争力。重新培训幸存者以提示 AI。"'
                },
                consequence: {
                    en: '⚡ Efficiency Spike. Profits soar, but the office feels soulless. The AI makes weird mistakes nobody catches.',
                    th: '⚡ ประสิทธิภาพพุ่ง กำไรพุ่ง แต่ออฟฟิศรู้สึกไร้จิตวิญญาณ AI ทำผิดพลาดแปลกๆ ที่ไม่มีใครจับได้',
                    zh: '⚡ 效率激增。利润飙升，但这公室感觉没有灵魂。AI 犯了一些没人发现的奇怪错误。'
                },
                stats: { competence: 40, ethics: -30, leadership: -20, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🧠 Human Touch: "AI cannot understand emotion or culture. Keep the juniors. Use AI as a tool, not a replacement."',
                    th: '🧠 สัมผัสของมนุษย์: "AI ไม่เข้าใจอารมณ์หรือวัฒนธรรม เก็บเด็กๆ ไว้ ใช้ AI เป็นเครื่องมือ ไม่ใช่สิ่งทดแทน"',
                    zh: '🧠 人情味："AI 无法理解情感或文化。保留初级员工。将 AI 用作工具，而不是替代品。"'
                },
                consequence: {
                    en: '🤝 Mentorship wins. The juniors use AI to become super-architects. The work is high quality and human.',
                    th: '🤝 การให้คำปรึกษาชนะ รุ่นน้องใช้ AI เป็นซูเปอร์สถาปนิก งานมีคุณภาพสูงและมีความเป็นมนุษย์',
                    zh: '🤝 导师制胜出。初级员工利用 AI 成为超级建筑师。工作质量高且人性化。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Ban AI: "No machines designing homes. Artisanal drafting only. We sell Premium Human Design."',
                    th: '🛑 แบน AI: "ไม่มีเครื่องจักรออกแบบบ้าน วาดมือเท่านั้น เราขายการออกแบบโดยมนุษย์ระดับพรีเมียม"',
                    zh: '🛑 禁止 AI："没有机器设计房屋。仅限手工绘图。我们销售优质的人类设计。"'
                },
                consequence: {
                    en: '🦕 Niche Market. You become a luxury boutique for hipsters. You survive, but you are slow.',
                    th: '🦕 ตลาดเฉพาะกลุ่ม คุณกลายเป็นบูติกหรูสำหรับฮิปสเตอร์ คุณอยู่รอด แต่คุณช้า',
                    zh: '🦕 利基市场。你成为时髦人士的奢侈精品店。你活下来了，但你很慢。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: -40 }
            }
        ]
    },
    {
        id: 'architect_030',
        text: {
            en: '⛺ Disaster Relief: An earthquake hits devastating a region. You are sent to design emergency shelters. Speed is everything. Resources are scarce.',
            th: '⛺ การบรรเทาภัยพิบัติ: แผ่นดินไหวถล่มภูมิภาคเสียหายยับเยิน คุณถูกส่งไปออกแบบศูนย์พักพิงฉุกเฉิน ความเร็วคือทุกสิ่ง ทรัพยากรมีน้อย',
            zh: '⛺ 救灾：地震袭击了一个地区，造成了毁灭性的破坏。你被派去设计紧急避难所。速度就是一切。资源稀缺。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎋 Paper Tubes: "Use cardboard tubes and tarp. Like Shigeru Ban. Cheap, recyclable, and instant setup."',
                    th: '🎋 ท่อกระดาษ: "ใช้ท่อกระดาษแข็งและผ้าใบ เหมือน Shigeru Ban ถูก รีไซเคิลได้ และติดตั้งทันที"',
                    zh: '🎋 纸管："使用纸板管和防水布。像坂茂一样。便宜，可回收，即时设置。"'
                },
                consequence: {
                    en: '🕊️ Dignity in Crisis. The shelters are beautiful and private. You save thousands of lives.',
                    th: '🕊️ ศักดิ์ศรีในวิกฤต ศูนย์พักพิงสวยงามและเป็นส่วนตัว คุณช่วยชีวิตคนนับพัน',
                    zh: '🕊️ 危机中的尊严。避难所美丽而私密。你拯救了成千上万的生命。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '⛺ Military Tents: "Standard issue canvas tents. Rugged and proven. Do not experiment now."',
                    th: '⛺ เต็นท์ทหาร: "เต็นท์ผ้าใบมาตรฐาน ทนทานและพิสูจน์แล้ว อย่าเพิ่งทดลองตอนนี้"',
                    zh: '⛺ 军用帐篷："标准帆布帐篷。坚固且经过验证。现在不要做实验。"'
                },
                consequence: {
                    en: '🌧️ Miserable but Safe. It is a refugee camp. Cold and depressing, but it keeps the rain off.',
                    th: '🌧️ น่าเวทนาแต่ปลอดภัย มันคือค่ายผู้ลี้ภัย หนาวและน่าหดหู่ แต่กันฝนได้',
                    zh: '🌧️ 悲惨但安全。这是一个难民营。寒冷而令人沮丧，但它能挡雨。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧱 Rubble Walls: "Use the debris from collapsed houses to build new walls in wire cages. Clean up while building."',
                    th: '🧱 ผนังเศษซาก: "ใช้เศษซากจากบ้านที่ถล่มเพื่อสร้างผนังใหม่ในกรงลวด ทำความสะอาดขณะก่อสร้าง"',
                    zh: '🧱 瓦砾墙："利用倒塌房屋的碎片在金属网笼中建造新墙。边建边清理。"'
                },
                consequence: {
                    en: '💪 Heavy Labor. It takes too long. People sleep in the rain while waiting for "perfect" recycled walls.',
                    th: '💪 แรงงานหนัก ใช้เวลานานเกินไป ผู้คนนอนตากฝนระหว่างรอผนังรีไซเคิลที่ "สมบูรณ์แบบ"',
                    zh: '💪 重体力劳动。这花了太长时间。人们在雨中睡觉，等待"完美"的再生墙。'
                },
                stats: { competence: 40, ethics: 30, leadership: 0, innovation: 30 }
            }
        ]
    },


    {
        id: 'architect_031',
        text: {
            en: '🏗️ The Ego Project: A famous dictator wants you to design his new palace. The budget is unlimited. "Make it bigger than Versailles," he says. The world is watching.',
            th: '🏗️ โปรเจ็กต์อีโก้: เผด็จการชื่อดังต้องการให้คุณออกแบบพระราชวังใหม่ของเขา งบประมาณไม่จำกัด "ทำให้ใหญ่กว่าแวร์ซาย" เขากล่าว โลกกำลังจับตามอง',
            zh: '🏗️ 自我膨胀的项目：一位著名的独裁者让你设计他的新宫殿。预算是无限的。"让它比凡尔赛宫还大，"他说。全世界都在看着。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏰 Accept: "Architecture is about buildings, not politics. I will build the greatest palace in history."',
                    th: '🏰 ยอมรับ: "สถาปัตยกรรมเป็นเรื่องของอาคาร ไม่ใช่การเมือง ผมจะสร้างพระราชวังที่ยิ่งใหญ่ที่สุดในประวัติศาสตร์"',
                    zh: '🏰 接受："建筑是关于建筑物的，而不是政治。我将建造历史上最伟大的宫殿。"'
                },
                consequence: {
                    en: '💰 Blood Money. You become insanely rich and famous. But Western nations sanction you. You are the "Dictator\'s Architect."',
                    th: '💰 เงินเปื้อนเลือด คุณรวยและดังมาก แต่ชาติตะวันตกคว่ำบาตรคุณ คุณคือ "สถาปนิกของเผด็จการ"',
                    zh: '💰 血腥钱。你变得极其富有和出名。但西方国家制裁你。你是"独裁者的建筑师"。'
                },
                stats: { competence: 50, ethics: -50, leadership: 20, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🖕 Public Refusal: "I do not build for tyrants. Donate the money to your people." Tweet about it.',
                    th: '🖕 ปฏิเสธต่อสาธารณะ: "ผมไม่สร้างให้ทรราช บริจาคเงินให้ประชาชนของคุณเถอะ" ทวีตเกี่ยวกับเรื่องนี้',
                    zh: '🖕 公开拒绝："我不为暴君建造。把钱捐给你的子民。"发推文谈论此事。'
                },
                consequence: {
                    en: '⭐ Hero of the People. You lose the money, but gain global respect. You might need a bodyguard though.',
                    th: '⭐ วีรบุรุษของประชาชน คุณเสียเงิน แต่ได้รับความเคารพจากทั่วโลก คุณอาจต้องมีบอดี้การ์ด',
                    zh: '⭐ 人民英雄。你失去了钱，但赢得了全球的尊重。不过你可能需要保镖。'
                },
                stats: { competence: 0, ethics: 50, leadership: 50, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🕵️ Sabotage: "Design it, but include secret tunnels and weak points for future revolutionaries."',
                    th: '🕵️ วินาศกรรม: "ออกแบบมัน แต่รวมอุโมงค์ลับและจุดอ่อนสำหรับการปฏิวัติในอนาคต"',
                    zh: '🕵️ 破坏："以此设计，但要为未来的革命者包括秘密隧道和弱点。"'
                },
                consequence: {
                    en: '🕵️ Risky Game. If caught, you are dead. If not, you are a secret legend. The palace is built.',
                    th: '🕵️ เกมเสี่ยง ถ้าถูกจับได้ คุณตาย ถ้าไม่ คุณคือตำนานลับ พระราชวังถูกสร้าง',
                    zh: '🕵️ 冒险游戏。如果被抓到，你就死定了。如果没有，你就是一个秘密传奇。宫殿建成了。'
                },
                stats: { competence: 40, ethics: 30, leadership: 10, innovation: 40 }
            }
        ]
    },
    {
        id: 'architect_032',
        text: {
            en: '🌳 The Treehouse Hotel: A client wants a luxury hotel built *in* a protected rainforest. "Do not cut down a single tree," the brief says. "The hotel must float."',
            th: '🌳 โรงแรมบ้านต้นไม้: ลูกค้าต้องการโรงแรมหรู *ใน* ป่าฝนที่ได้รับความคุ้มครอง "ห้ามตัดต้นไม้แม้แต่ต้นเดียว" บรีฟระบุ "โรงแรมต้องลอย"',
            zh: '🌳 树屋酒店：一位客户想在受保护的雨林 *中* 建造一家豪华酒店。"不要砍伐任何一棵树，"简介上说。"酒店必须漂浮。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌫️ Suspension Cables: "Suspend the pods from cables between the strongest trees. Minimal impact on the ground."',
                    th: '🌫️ สายเคเบิลแขวน: "แขวนพ็อดจากสายเคเบิลระหว่างต้นไม้ที่แข็งแรงที่สุด ผลกระทบต่อพื้นดินน้อยที่สุด"',
                    zh: '🌫️ 悬索："用最结实的树之间的缆索悬挂吊舱。对地面的影响最小。"'
                },
                consequence: {
                    en: '🌲 Forest Magic. Guests feel like birds. The trees stay healthy. It is a masterpiece of engineering.',
                    th: '🌲 เวทมนตร์แห่งป่า แขกรู้สึกเหมือนนก ต้นไม้ยังคงแข็งแรง มันเป็นผลงานชิ้นเอกทางวิศวกรรม',
                    zh: '🌲 森林魔法。客人感觉像鸟一样。树木保持健康。这是工程学的杰作。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🦾 Stilts: "Drive deep steel piles to support the structures above the roots. Avoid the trunks."',
                    th: '🦾 เสาเข็ม: "ตอกเสาเข็มเหล็กลึกเพื่อรองรับโครงสร้างเหนือราก หลีกเลี่ยงลำต้น"',
                    zh: '🦾 高跷："打入深层钢桩以支撑根部上方的结构。避开树干。"'
                },
                consequence: {
                    en: '🚧 Root Damage. You didn\'t cut trees, but you killed the roots. The forest slowly dies around the hotel.',
                    th: '🚧 ความเสียหายของราก คุณไม่ได้ตัดต้นไม้ แต่คุณฆ่าราก ป่าค่อยๆ ตายรอบโรงแรม',
                    zh: '🚧 根部损伤。你没有砍树，但你杀死了树根。森林在他店周围慢慢死去。'
                },
                stats: { competence: 30, ethics: -20, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🎈 Helium Balloons: "Use tethered helium balloons to hold up the tents. Zero footprint!"',
                    th: '🎈 ลูกโป่งฮีเลียม: "ใช้ลูกโป่งฮีเลียมผูกเชือกเพื่อพยุงเต็นท์ ไม่มีรอยเท้าเลย!"',
                    zh: '🎈 氦气球："使用系留氦气球支撑帐篷。零占地！"'
                },
                consequence: {
                    en: '💨 Blown Away. A storm hits and the hotel flies away (safely, mostly). Too unstable.',
                    th: '💨 ปลิวหาย พายุเข้าและโรงแรมปลิวหาย (ปลอดภัย ส่วนใหญ่) ไม่มั่นคงเกินไป',
                    zh: '💨 被吹走。暴风雨来袭，酒店飞走了（大部分是安全的）。太不稳定了。'
                },
                stats: { competence: 10, ethics: 40, leadership: 0, innovation: 40 }
            }
        ]
    },
    {
        id: 'architect_033',
        text: {
            en: '⛪ The Atheist Church: A secular organization wants a "Sanctuary of Reason." It needs to feel spiritual and awe-inspiring, but without any religious symbols.',
            th: '⛪ โบสถ์อเทวนิยม: องค์กรฆราวาสต้องการ "วิหารแห่งเหตุผล" ต้องรู้สึกถึงจิตวิญญาณและความน่าเกรงขาม แต่ไม่มีสัญลักษณ์ทางศาสนาใดๆ',
            zh: '⛪ 无神论教堂：一个世俗组织想要一个"理性圣殿"。它需要让人感到精神崇高和敬畏，但没有任何宗教符号。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌌 Cosmic Light: "Use pure geometry and light. Like the Pantheon. Frame the sky. Awe comes from nature."',
                    th: '🌌 แสงจักรวาล: "ใช้เรขาคณิตและแสงบริสุทธิ์ เหมือนแพนธีออน กรอบท้องฟ้า ความน่าเกรงขามมาจากธรรมชาติ"',
                    zh: '🌌 宇宙之光："使用纯粹的几何形状和光线。像万神殿一样。以天空为框。敬畏来自自然。"'
                },
                consequence: {
                    en: '✨ Transcendence. People cry when they enter. It is spiritual without dogma. A modern classic.',
                    th: '✨ การก้าวข้ามขีดจำกัด ผู้คนร้องไห้เมื่อเข้ามา มันเป็นจิตวิญญาณโดยไม่มีความเชื่อทางศาสนา คลาสสิกสมัยใหม่',
                    zh: '✨ 超越。人们一进来就哭了。这是一种没有教条的精神体验。现代经典。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '📚 Giant Library: "Knowledge is god. Build a cathedral of books. Walls lined with encyclopedias."',
                    th: '📚 ห้องสมุดยักษ์: "ความรู้คือพระเจ้า สร้างมหาวิหารแห่งหนังสือ ผนังเรียงรายไปด้วยสารานุกรม"',
                    zh: '📚 巨大的图书馆："知识就是上帝。建造一座书籍大教堂。墙上排列着百科全书。"'
                },
                consequence: {
                    en: '🤓 Nerd Heaven. It feels a bit like a university, not a sanctuary. But very useful.',
                    th: '🤓 สวรรค์ของเนิร์ด รู้สึกเหมือนมหาวิทยาลัยนิดหน่อย ไม่ใช่วิหาร แต่มีประโยชน์มาก',
                    zh: '🤓 书呆子天堂。感觉有点像大学，而不是圣殿。但也很有用。'
                },
                stats: { competence: 40, ethics: 40, leadership: 10, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🔬 Lab Aesthetic: "White walls, chrome, microscopes on altars. Worship science literally."',
                    th: '🔬 สุนทรียภาพห้องแล็บ: "ผนังสีขาว โครเมียม กล้องจุลทรรศน์บนแท่นบูชา บูชาวิทยาศาสตร์ตามตัวอักษร"',
                    zh: '🔬 实验室美学："白墙，铬，祭坛上的显微镜。字面上崇拜科学。"'
                },
                consequence: {
                    en: '🏥 Cold and Clinical. It feels like a dentist\'s waiting room. Nobody feels inspired.',
                    th: '🏥 เย็นชาและเหมือนคลินิก รู้สึกเหมือนห้องรอหมอฟัน ไม่มีใครรู้สึกได้รับแรงบันดาลใจ',
                    zh: '🏥 冷漠且临床。感觉像牙医的候诊室。没人感到受启发。'
                },
                stats: { competence: 20, ethics: 10, leadership: 0, innovation: -10 }
            }
        ]
    },
    {
        id: 'architect_034',
        text: {
            en: '🌊 Flood Zone: You are designing a housing estate in a flood-prone area. The developer wants to ignore it to save money. "Floods happen once in 100 years," he says.',
            th: '🌊 โซนน้ำท่วม: คุณกำลังออกแบบหมู่บ้านจัดสรรในพื้นที่เสี่ยงน้ำท่วม นักพัฒนาต้องการเพิกเฉยเพื่อประหยัดเงิน "น้ำท่วมเกิดขึ้นครั้งเดียวใน 100 ปี" เขากล่าว',
            zh: '🌊 洪水区：你正在一个洪水多发地区设计住宅区。开发商想为了省钱而忽略这一点。"洪水每 100 年才发生一次，"他说。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏠 Amphibious Houses: "Design houses that float on guide poles when the water rises. Safe and resilient."',
                    th: '🏠 บ้านสะเทินน้ำสะเทินบก: "ออกแบบบ้านที่ลอยบนเสานำทางเมื่อน้ำขึ้น ปลอดภัยและยืดหยุ่น"',
                    zh: '🏠 两栖房屋："设计当水位上升时能在导向杆上漂浮的房屋。安全且有弹性。"'
                },
                consequence: {
                    en: '🚤 Future Proof. A flood hits next year. Your houses float. The developer looks like a genius (thanks to you).',
                    th: '🚤 พิสูจน์อนาคต น้ำท่วมปีหน้า บ้านของคุณลอยได้ นักพัฒนาดูเหมือนอัจฉริยะ (ขอบคุณคุณ)',
                    zh: '🚤 面向未来。明年发洪水。你的房子漂浮着。开发商看起来像个天才（多亏了你）。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🧱 Raise the Ground: "Import tons of dirt. Raise the whole site 2 meters. Expensive earthworks."',
                    th: '🧱 ถมดิน: "นำเข้าดินจำนวนมาก ถมทั้งไซต์สูงขึ้น 2 เมตร งานดินราคาแพง"',
                    zh: '🧱 抬高地面："进口成吨的泥土。将整个场地抬高 2 米。昂贵的土方工程。"'
                },
                consequence: {
                    en: '🧱 Brute Force. It works, but it displaced water to the neighboring poor village, flooding them instead.',
                    th: '🧱 แก้ปัญหาด้วยกำลัง มันได้ผล แต่ดันน้ำไปท่วมหมู่บ้านยากจนข้างเคียงแทน',
                    zh: '🧱 蛮力。它奏效了，但它把水排到了邻近的贫困村庄，淹没了他们。'
                },
                stats: { competence: 40, ethics: -30, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🙈 Obey Client: "Okay. Build on the ground. Maybe install better drains."',
                    th: '🙈 เชื่อลูกค้า: "โอเค สร้างบนพื้นราบ อาจจะติดตั้งท่อระบายน้ำดีๆ"',
                    zh: '🙈 服从客户："好的。建在地面上。也许安装更好的排水沟。"'
                },
                consequence: {
                    en: '🌊 Disaster. The flood comes. Houses are ruined. Lawsuits bankrupt the developer and your firm.',
                    th: '🌊 หายนะ น้ำท่วม บ้านพัง ฟ้องร้องกันจนนักพัฒนาและบริษัทของคุณล้มละลาย',
                    zh: '🌊 灾难。洪水来了。房屋被毁。诉讼使开发商和你的公司破产。'
                },
                stats: { competence: -50, ethics: -40, leadership: -40, innovation: 0 }
            }
        ]
    },
    {
        id: 'architect_035',
        text: {
            en: '🎨 The Color War: The city council demands all buildings be "Neutral Beige." You believe color brings joy and mental health. You have a new school project.',
            th: '🎨 สงครามสี: สภาเมืองต้องการให้อาคารทั้งหมดเป็น "สีเบจที่เป็นกลาง" คุณเชื่อว่าสีสันนำมาซึ่งความสุขและสุขภาพจิต คุณมีโปรเจ็กต์โรงเรียนใหม่',
            zh: '🎨 色彩之战：市议会要求所有建筑物必须是"中性米色"。你认为色彩能带来快乐和心理健康。你有一个新的学校项目。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌈 Hidden Rainbow: "Beige on the outside. Exploded rainbow colors in the courtyard and interiors."',
                    th: '🌈 รุ้งซ่อนแอบ: "สีเบจภายนอก สีรุ้งระเบิดในลานและภายใน"',
                    zh: '🌈 隐藏的彩虹："外面是米色。庭院和内部是爆炸般的彩虹色。"'
                },
                consequence: {
                    en: '🤫 Secret Joy. The kids love it. The council is happy. You found the loophole.',
                    th: '🤫 ความสุขลับๆ เด็กๆ ชอบ สภาเมืองพอใจ คุณพบช่องโหว่',
                    zh: '🤫 秘密的快乐。孩子们很喜欢。议会很高兴。你发现了漏洞。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🎨 Rebel Paint: "Paint the whole school bright yellow. Plead \'Artistic License.\' Risk a fine."',
                    th: '🎨 ทาสีกบฏ: "ทาทั้งโรงเรียนเป็นสีเหลืองสด อ้าง \'ใบอนุญาตทางศิลปะ\' เสี่ยงโดนปรับ"',
                    zh: '🎨 叛逆油漆："把整所学校漆成亮黄色。请求\'艺术许可\'。冒着被罚款的风险。"'
                },
                consequence: {
                    en: '🚔 Repainted. The council forces you to repaint it gray at your expense. A waste.',
                    th: '🚔 ทาสีใหม่ สภาเมืองบังคับให้คุณทาสีเทาทับโดยออกค่าใช้จ่ายเอง สิ้นเปลือง',
                    zh: '🚔 重漆。议会强迫你自费把它漆成灰色。浪费。'
                },
                stats: { competence: 20, ethics: 10, leadership: 10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧱 Textured Beige: "Use beige brick, beige wood, beige stone. Interest through texture, not color."',
                    th: '🧱 เบจมีพื้นผิว: "ใช้อิฐเบจ ไม้เบจ หินเบจ ความน่าสนใจผ่านพื้นผิว ไม่ใช่สี"',
                    zh: '🧱 纹理米色："使用米色砖、米色木材、米色石头。通过纹理而不是颜色来吸引人。"'
                },
                consequence: {
                    en: '🧐 Elegant Boring. It is sophisticated but dull. The kids find it depressing.',
                    th: '🧐 น่าเบื่อที่สง่างาม มันซับซ้อนแต่น่าเบื่อ เด็กๆ รู้สึกหดหู่',
                    zh: '🧐 优雅的无聊。很精致但很沉闷。孩子们觉得很压抑。'
                },
                stats: { competence: 40, ethics: 20, leadership: 10, innovation: 20 }
            }
        ]
    },
    {
        id: 'architect_036',
        text: {
            en: '🗑️ Waste Management: A city wants a new waste-to-energy plant. Nobody wants to live near it. "NIMBY" (Not In My Back Yard) protests are huge.',
            th: '🗑️ การจัดการขยะ: เมืองต้องการโรงไฟฟ้าขยะใหม่ ไม่มีใครอยากอยู่ใกล้มัน การประท้วง "NIMBY" (อย่ามาสร้างหลังบ้านฉัน) ใหญ่โต',
            zh: '🗑️ 废物管理：一个城市想要一个新的垃圾发电厂。没人想住在它附近。"NIMBY"（不要在我家后院）抗议活动非常巨大。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⛷️ Ski Slope Plant: "Bury the plant under a hill. Put a dry ski slope and park on top. Just like Copenhagen."',
                    th: '⛷️ โรงงานลานสกี: "ฝังโรงงานใต้เนินเขา ทำลานสกีและสวนสาธารณะข้างบน เหมือนที่โคเปนเฮเกน"',
                    zh: '⛷️ 滑雪坡工厂："把工厂埋在山下。在上面建一个旱雪滑雪坡和公园。就像哥本哈根一样。"'
                },
                consequence: {
                    en: '⛷️ Community Hub. People love the park. They forget the garbage burning underneath. Genius branding.',
                    th: '⛷️ ศูนย์กลางชุมชน ผู้คนรักสวน พวกเขาลืมเรื่องขยะที่เผาอยู่ข้างล่าง การสร้างแบรนด์อัจฉริยะ',
                    zh: '⛷️ 社区中心。人们喜欢公园。他们忘记了下面燃烧的垃圾。天才的品牌推广。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🏭 Generic Box: "Build a standard industrial box. Put a high fence around it. Hide it."',
                    th: '🏭 กล่องทั่วไป: "สร้างกล่องอุตสาหกรรมมาตรฐาน ทำรั้วสูงรอบๆ ซ่อนมัน"',
                    zh: '🏭 通用盒子："建造一个标准的工业盒子。在周围围上高栅栏。把它藏起来。"'
                },
                consequence: {
                    en: '😡 Eyesore. It looks ugly and suspicious. Property values drop. The protests continue.',
                    th: '😡 สิ่งอุจาดตา มันดูน่าเกลียดและน่าสงสัย มูลค่าทรัพย์สินลดลง การประท้วงดำเนินต่อไป',
                    zh: '😡 碍眼。它看起来很丑陋且可疑。房产价值下跌。抗议还在继续。'
                },
                stats: { competence: 30, ethics: 10, leadership: 0, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🌸 Scent Garden: "Surround the plant with a botanical garden of highly fragrant flowers to mask odors."',
                    th: '🌸 สวนกลิ่นหอม: "ล้อมรอบโรงงานด้วยสวนพฤกษศาสตร์ที่มีดอกไม้กลิ่นหอมแรงเพื่อกลบกลิ่น"',
                    zh: '🌸 香味花园："用香气浓郁的鲜花植物园包围工厂以掩盖气味。"'
                },
                consequence: {
                    en: '🌺 Perfumed Trash. The mix of jasmine and burning trash is nauseating. Nice try though.',
                    th: '🌺 ขยะน้ำหอม กลิ่นมะลิผสมขยะเผามันชวนอ้วก พยายามได้ดีนะ',
                    zh: '🌺 香水垃圾。茉莉花和燃烧垃圾的混合气味令人作呕。不过也是一种尝试。'
                },
                stats: { competence: 20, ethics: 30, leadership: 10, innovation: 30 }
            }
        ]
    },
    {
        id: 'architect_037',
        text: {
            en: '🧟 Zombie Defense: A wealthy prepper hires you to design a "Zombie-Proof Mansion." He is serious. He wants moats, turrets, and no windows on the ground floor.',
            th: '🧟 ป้องกันซอมบี้: นักเตรียมตัวผู้มั่งคั่งจ้างคุณให้ออกแบบ "คฤหาสน์กันซอมบี้" เขาจริงจัง เขาต้องการคูเมือง ป้อมปืน และไม่มีหน้าต่างที่ชั้นล่าง',
            zh: '🧟 僵尸防御：一位富有的末日准备者雇你设计一座"防僵尸豪宅"。他是认真的。他想要护城河、炮塔，一楼没有窗户。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏰 Modern Castle: "Use thick concrete walls, retractable bridges, and roof gardens. Market it as \'Ultra-Secure Luxury.\'"',
                    th: '🏰 ปราสาทสมัยใหม่: "ใช้ผนังคอนกรีตหนา สะพานชัก และสวนดาดฟ้า ทำตลาดว่าเป็น \'ความหรูหราที่ปลอดภัยขั้นสูงสุด\'"',
                    zh: '🏰 现代城堡："使用厚混凝土墙、伸缩桥和屋顶花园。将其作为\'超安全奢华\'进行营销。"'
                },
                consequence: {
                    en: '🏰 Safe and Stylish. It looks monolithic and cool. The client feels invincible.',
                    th: '🏰 ปลอดภัยและมีสไตล์ มันดูเป็นแท่งหินและเท่ ลูกค้ารู้สึกว่าไม่มีใครทำร้ายได้',
                    zh: '🏰 安全时尚。它看起来整体且很酷。客户觉得自己不可战胜。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🙄 Talk Him Out: "Zombies aren\'t real. Let\'s build a nice open-plan villa instead."',
                    th: '🙄 เกลี้ยกล่อม: "ซอมบี้ไม่มีจริง สร้างวิลล่าแบบเปิดโล่งสวยๆ กันเถอะ"',
                    zh: '🙄 说服他："僵尸不是真的。我们还是建一座漂亮的开放式别墅吧。"'
                },
                consequence: {
                    en: '👋 Fired. "You are not taking the threat seriously!" He hires a bunker specialist.',
                    th: '👋 ถูกไล่ออก "คุณไม่จริงจังกับภัยคุกคาม!" เขาจ้างผู้เชี่ยวชาญบังเกอร์',
                    zh: '👋 被解雇。"你没有认真对待威胁！"他雇了一位掩体专家。'
                },
                stats: { competence: 10, ethics: 40, leadership: 0, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🔫 Lethal Traps: "Install flamethrowers in the garden and spikes in the moat. Maximum lethality."',
                    th: '🔫 กับดักมรณะ: "ติดตั้งเครื่องพ่นไฟในสวนและหนามในคูเมือง ความตายขั้นสูงสุด"',
                    zh: '🔫 致命陷阱："在花园里安装喷火器，在护城河里安装尖刺。最大的杀伤力。"'
                },
                consequence: {
                    en: '⚖️ Legal Nightmare. The city refuses the permit. "You cannot build murder traps." You look like a maniac.',
                    th: '⚖️ ฝันร้ายทางกฎหมาย เมืองไม่อนุมัติใบอนุญาต "คุณสร้างกับดักฆ่าคนไม่ได้" คุณดูเหมือนคนบ้า',
                    zh: '⚖️ 法律噩梦。城市拒绝批准许可证。"你不能建造谋杀陷阱。"你看起来像个疯子。'
                },
                stats: { competence: 20, ethics: -50, leadership: -20, innovation: 10 }
            }
        ]
    },
    {
        id: 'architect_038',
        text: {
            en: '🕯️ Light Pollution: An astronomer complains that your new mall\'s bright LED facade is blinding his telescope. The mall owner loves the bright lights.',
            th: '🕯️ มลภาวะทางแสง: นักดาราศาสตร์บ่นว่าไฟ LED สว่างจ้าของห้างใหม่ของคุณทำให้กล้องโทรทรรศน์ของเขาบอด เจ้าของห้างชอบไฟสว่างๆ',
            zh: '🕯️ 光污染：一位天文学家抱怨你新商场的明亮 LED 立面使他的望远镜无法使用。商场老板喜欢明亮的灯光。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💡 Smart Dimming: "Install directional LEDs that point DOWN only. Use timers to dim them after 10 PM. Best of both worlds."',
                    th: '💡 การหรี่ไฟอัจฉริยะ: "ติดตั้ง LED แบบมีทิศทางที่ชี้ลงเท่านั้น ตั้งเวลาหรี่ไฟหลัง 4 ทุ่ม ดีทั้งสองฝ่าย"',
                    zh: '💡 智能调光："安装仅指向下的定向 LED。使用计时器在晚上 10 点后将它们调暗。两全其美。"'
                },
                consequence: {
                    en: '🌌 Dark Skies. The astronomer is happy. The mall saves electricity. Responsible design.',
                    th: '🌌 ท้องฟ้ามืด นักดาราศาสตร์มีความสุข ห้างประหยัดค่าไฟ การออกแบบที่รับผิดชอบ',
                    zh: '🌌 黑暗的天空。天文学家很高兴。商场省电。负责任的设计。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🕶️ Sunglasses Effect: "Tell the astronomer to move. Focus on the mall. Make it brighter!"',
                    th: '🕶️ เอฟเฟกต์แว่นกันแดด: "บอกนักดาราศาสตร์ให้ย้ายไป โฟกัสห้าง ทำให้สว่างขึ้นอีก!"',
                    zh: '🕶️ 墨镜效应："告诉天文学家搬家。专注于商场。让它更亮！"'
                },
                consequence: {
                    en: '✨ Blinding Success. The mall attracts customers, but the local ecosystem suffers. Birds fly into windows.',
                    th: '✨ ความสำเร็จที่บาดตา ห้างดึงดูดลูกค้า แต่ระบบนิเวศท้องถิ่นเสียหาย นกบินชนหน้าต่าง',
                    zh: '✨ 令人眼花缭乱的成功。商场吸引了顾客，但当地生态系统遭受重创。鸟撞上窗户。'
                },
                stats: { competence: 30, ethics: -30, leadership: 10, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🌑 Turn It Off: "Remove the facade lighting entirely. Rely on streetlights."',
                    th: '🌑 ปิดมัน: "เอาไฟหน้าอาคารออกทั้งหมด พึ่งพาไฟถนน"',
                    zh: '🌑 关掉它："完全拆除立面照明。依靠路灯。"'
                },
                consequence: {
                    en: '👻 Ghost Mall. It looks closed at night. Revenue drops. The owner is furious.',
                    th: '👻 ห้างผีสิง ดูเหมือนปิดตอนกลางคืน รายได้ลดลง เจ้าของโกรธจัด',
                    zh: '👻 鬼商场。晚上看起来像关门了一样。收入由降。老板很生气。'
                },
                stats: { competence: 20, ethics: 20, leadership: -20, innovation: -10 }
            }
        ]
    },
    {
        id: 'architect_039',
        text: {
            en: '🕸️ The Ruin Bar: A trendy client bought a collapsing factory. He wants to keep it "exactly as is" but safe for 1000 drunk people. If you fix too much, it loses the vibe.',
            th: '🕸️ บาร์ซากปรักหักพัง: ลูกค้าสุดแนวซื้อโรงงานที่กำลังถล่ม เขาต้องการเก็บมันไว "ตามที่เป็นอยู่เป๊ะๆ" แต่ปลอดภัยสำหรับคนเมา 1000 คน ถ้าซ่อมมากไป ก็เสียบรรยากาศ',
            zh: '🕸️ 废墟酒吧：一位时髦的客户买下了一家倒塌的工厂。他想保持"原样"，但要确保 1000 名醉汉的安全。如果你修得太多，它就会失去这种氛围。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🕵️ Invisible Structure: "Insert steel beams INSIDE the old brick columns. Use clear glass glass to shore up walls."',
                    th: '🕵️ โครงสร้างล่องหน: "สอดคานเหล็กเข้าไป *ข้างใน* เสาอิฐเก่า ใช้กระจกใสค้ำยันผนัง"',
                    zh: '🕵️ 隐形结构："在旧砖柱 *内部* 插入钢梁。使用透明玻璃支撑墙壁。"'
                },
                consequence: {
                    en: '👻 Safe Decay. It looks dangerous but is rock solid. The hipsters love the "authenticity."',
                    th: '👻 ความเสื่อมโทรมที่ปลอดภัย ดูอันตรายแต่แข็งแกร่ง ฮิปสเตอร์ชอบ "ความแท้จริง"',
                    zh: '👻 安全的腐烂。它看起来很危险，但坚如磐石。时髦人士喜欢这种"真实感"。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🚧 Warning Tape: "Just cordon off the really bad bits with tape. Let them sign a waiver."',
                    th: '🚧 เทปเตือน: "กั้นส่วนที่แย่จริงๆ ด้วยเทป ให้พวกเขาเซ็นใบสละสิทธิ์"',
                    zh: '🚧 警戒胶带："用胶带把真正糟糕的地方封锁起来。让他们签署豁免书。"'
                },
                consequence: {
                    en: '🚑 Lawsuit Central. Someone gets hit by a falling brick. The place is shut down in a week.',
                    th: '🚑 ศูนย์รวมคดีความ มีคนโดนอิฐหล่นใส่ สถานที่ถูกสั่งปิดในหนึ่งสัปดาห์',
                    zh: '🚑 诉讼中心。有人被落下的砖头砸中。这个地方一周后就被关闭了。'
                },
                stats: { competence: 10, ethics: -40, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🧹 Clean Break: "This is unsafe. Tear it down and build a replica \'ruin\' from new materials."',
                    th: '🧹 รื้อเกลี้ยง: "นี่ไม่ปลอดภัย รื้อทิ้งและสร้าง \'ซาก\' เลียนแบบจากวัสดุใหม่"',
                    zh: '🧹 彻底决裂："这不安全。把它拆了，用新材料建造一个复制的\'废墟\'。"'
                },
                consequence: {
                    en: '🎢 Disney Ruins. It looks like a theme park. The cool crowd hates it. It flops.',
                    th: '🎢 ซากดิสนีย์ ดูเหมือนสวนสนุก คนคูลๆ เกลียดมัน เจ๊ง',
                    zh: '🎢 迪士尼废墟。它看起来像一个主题公园。很酷的人群讨厌它。它失败了。'
                },
                stats: { competence: 30, ethics: 20, leadership: 0, innovation: -20 }
            }
        ]
    },
    {
        id: 'architect_040',
        text: {
            en: '🏗️ Modular Mayhem: You designed a modular hotel where rooms are built in a factory and stacked like Lego. The crane operator drops a module. It is dented.',
            th: '🏗️ ความโกลาหลแบบโมดูลาร์: คุณออกแบบโรงแรมโมดูลาร์ที่ห้องถูกสร้างในโรงงานและซ้อนกันเหมือนเลโก้ คนขับเครนทำโมดูลหล่น มันบุบ',
            zh: '🏗️ 模块化混乱：你设计了一个模块化酒店，房间在工厂建造，像乐高积木一样堆叠。起重机操作员掉了一个模块。它凹陷了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔄 Reject and Reorder: "Send it back. We cannot risk structural integrity. Delay the opening by 2 weeks."',
                    th: '🔄 ปฏิเสธและสั่งใหม่: "ส่งกลับไป เราเสี่ยงเรื่องความมั่นคงของโครงสร้างไม่ได้ เลื่อนการเปิดไป 2 สัปดาห์"',
                    zh: '🔄 拒绝并重新订购："把它送回去。我们不能拿结构完整性冒险。推迟 2 周开业。"'
                },
                consequence: {
                    en: '🔒 Safe and Sound. The client is annoyed by the delay but appreciates the safety. No later issues.',
                    th: '🔒 ปลอดภัยหายห่วง ลูกค้าหงุดหงิดที่ล่าช้าแต่ขอบคุณเรื่องความปลอดภัย ไม่มีปัญหาภายหลัง',
                    zh: '🔒 安然无恙。客户对延误感到恼火，但赞赏安全性。以后没问题。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🔨 Hammer it Out: "It is just cosmetic. Bang the dent out and stack it. No one will see it inside the wall."',
                    th: '🔨 เคาะออก: "แค่ความสวยงาม เคาะรอยบุบออกแล้วซ้อนเลย ไม่มีใครเห็นข้างในกำแพงหรอก"',
                    zh: '🔨 把它敲出来："这只是为了美观。把凹痕敲出来然后堆叠起来。没人会在墙里面看到它。"'
                },
                consequence: {
                    en: '📉 Structural Failure. Years later, water leaks through the micro-cracks. Major scandal.',
                    th: '📉 ความล้มเหลวของโครงสร้าง หลายปีต่อมา น้ำรั่วผ่านรอยร้าวเล็กๆ สแกนดัลใหญ่',
                    zh: '📉 结构性破坏。多年后，水通过微裂缝渗漏。重大丑闻。'
                },
                stats: { competence: 20, ethics: -40, leadership: -20, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🛋️ Furniture Hides All: "Put that module on the ground floor as a storage room. Don\'t use it for guests."',
                    th: '🛋️ เฟอร์นิเจอร์บังมิด: "เอาโมดูลนั้นไว้ชั้นล่างเป็นห้องเก็บของ อย่าใช้รับแขก"',
                    zh: '🛋️ 家具掩盖一切："把那个模块放在一楼作为储藏室。不要给客人用。"'
                },
                consequence: {
                    en: '🤔 Quick Fix. It works, but you lost a revenue-generating room. An acceptable compromise.',
                    th: '🤔 แก้ขัดรวดเร็ว มันใช้ได้ แต่คุณเสียห้องทำเงินไปหนึ่งห้อง การประนีประนอมที่ยอมรับได้',
                    zh: '🤔 快速修复。这行得通，但这让你失去了一个创收的房间。可以接受的妥协。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'architect_041',
        text: {
            en: '🚢 The Floating City: Rising sea levels threaten a coastal nation. You are asked to design a floating city for 10,000 people. It must be self-sufficient.',
            th: '🚢 เมืองลอยน้ำ: ระดับน้ำทะเลที่สูงขึ้นคุกคามประเทศชายฝั่ง คุณได้รับคำขอให้ออกแบบเมืองลอยน้ำสำหรับ 10,000 คน มันต้องพึ่งพาตนเองได้',
            zh: '🚢 漂浮城市：海平面上升威胁着一个沿海国家。你被要求为一个拥有 10,000 人的漂浮城市进行设计。它必须是自给自足的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🪸 Bio-Rock: "Grow the city using electrified minerals to create limestone. Like a coral reef. It gets stronger with time."',
                    th: '🪸 หินชีวภาพ: "ปลูกเมืองโดยใช้แร่ธาตุที่มีประจุไฟฟ้าเพื่อสร้างหินปูน เหมือนแนวปะการัง ยิ่งนานยิ่งแข็งแกร่ง"',
                    zh: '🪸 生物岩："利用带电矿物质生长出石灰石来建造城市。就像珊瑚礁一样。随着时间的推移，它会变得越来越坚固。"'
                },
                consequence: {
                    en: '🐡 Eternal City. It works. Marine life thrives on the hull. It becomes a blueprint for the future.',
                    th: '🐡 เมืองนิรันดร์ มันได้ผล สิ่งมีชีวิตในทะเลเติบโตบนตัวเรือ มันกลายเป็นพิมพ์เขียวสำหรับอนาคต',
                    zh: '🐡 永恒之城。它奏效了。海洋生物在船体上繁衍生息。它成为了未来的蓝图。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🏗️ Concrete Pontoons: "Massive hollow concrete blocks. Proven technology. Connect them with bridges."',
                    th: '🏗️ ทุ่นคอนกรีต: "บล็อกคอนกรีตกลวงขนาดใหญ่ เทคโนโลยีที่พิสูจน์แล้ว เชื่อมต่อด้วยสะพาน"',
                    zh: '🏗️ 混凝土浮桥："巨大的空心混凝土块。成熟的技术。用桥梁连接它们。"'
                },
                consequence: {
                    en: '🏢 Stable but Gray. It feels like a parking lot on water. Functional, but depressing.',
                    th: '🏢 มั่นคงแต่สีเทา รู้สึกเหมือนลานจอดรถบนน้ำ ใช้งานได้จริง แต่น่าหดหู่',
                    zh: '🏢 稳定但灰暗。感觉就像水上的停车场。实用，但令人沮丧。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚢 Old Tankers: "Buy retired oil tankers. Retrofit them into apartments. Lash them together."',
                    th: '🚢 เรือบรรทุกน้ำมันเก่า: "ซื้อเรือบรรทุกน้ำมันที่ปลดระวางแล้ว ดัดแปลงเป็นอพาร์ตเมนต์ ผูกติดกัน"',
                    zh: '🚢 旧油轮："购买退役油轮。将它们改造成公寓。把它们绑在一起。"'
                },
                consequence: {
                    en: '🔧 Rust Bucket. Maintenance is a nightmare. It feels like a dystopian movie. People leave.',
                    th: '🔧 ถังสนิม การบำรุงรักษาคือฝันร้าย รู้สึกเหมือนหนังดิสโทเปีย ผู้คนย้ายออก',
                    zh: '🔧 生锈的桶。维护简直是一场噩梦。感觉像是一部反乌托邦电影。人们纷纷离开。'
                },
                stats: { competence: 20, ethics: 10, leadership: 0, innovation: 20 }
            }
        ]
    },
    {
        id: 'architect_042',
        text: {
            en: '🌳 Vertical Forest: You want to cover a skyscraper in trees to absorb CO2. Engineers say the extra weight and wind load are impossible.',
            th: '🌳 ป่าแนวตั้ง: คุณต้องการปกคลุมตึกระฟ้าด้วยต้นไม้เพื่อดูดซับ CO2 วิศวกรบอกว่าน้ำหนักส่วนเกินและแรงลมเป็นไปไม่ได้',
            zh: '🌳 垂直森林：你想在摩天大楼上覆盖树木以吸收二氧化碳。工程师说额外的重量和风荷载是不可能的。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏺 Super planters: "Reinforce the balconies with steel. Use bonsai techniques to keep trees small but leafy."',
                    th: '🏺 กระถางยักษ์: "เสริมความแข็งแรงให้ระเบียงด้วยเหล็ก ใช้เทคนิคบอนไซเพื่อให้ต้นไม้เล็กแต่ใบดก"',
                    zh: '🏺 超级花盆："用钢材加固阳台。使用盆景技术保持树木小而茂盛。"'
                },
                consequence: {
                    en: '🌿 Breathing Tower. It works. The air quality improves around the building. Birds nest in the 40th floor.',
                    th: '🌿 ตึกหายใจได้ มันได้ผล คุณภาพอากาศรอบอาคารดีขึ้น นกทำรังที่ชั้น 40',
                    zh: '🌿 会呼吸的塔。它奏效了。建筑物周围的空气质量得到改善。鸟类在 40 楼筑巢。'
                },
                stats: { competence: 50, ethics: 50, leadership: 20, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🎨 Fake Vines: "Use plastic plants. They look green, need no water, and weigh nothing. It is the \'look\' that matters."',
                    th: '🎨 เถาวัลย์ปลอม: "ใช้ต้นไม้พลาสติก ดูเขียว ไม่ต้องใช้น้ำ และเบาหวิว \'ลุค\' ต่างหากที่สำคัญ"',
                    zh: '🎨 假藤蔓："使用塑料植物。它们看起来是绿色的，不需要水，而且没有重量。重要的是\'外观\'。"'
                },
                consequence: {
                    en: '🗑️ Greenwashing. The sun fades the plastic to blue. It becomes an environmental joke. You are mocked.',
                    th: '🗑️ ฟอกเขียว แดดเลียพลาสติกจนซีดเป็นสีฟ้า กลายเป็นเรื่องตลกสิ่งแวดล้อม คุณถูกล้อเลียน',
                    zh: '🗑️ 漂绿。太阳把塑料晒成了蓝色。这成了一个环境笑话。你被嘲笑了。'
                },
                stats: { competence: 10, ethics: -40, leadership: -10, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🍃 Moss Walls: "Forget trees. Use moss panels. Lightweight, high oxygen, easy maintenance."',
                    th: '🍃 ผนังมอส: "ลืมต้นไม้ไปซะ ใช้แผงมอส น้ำหนักเบา ออกซิเจนสูง ดูแลรักษาง่าย"',
                    zh: '🍃 苔藓墙："忘掉树木吧。使用苔藓面板。重量轻，氧气含量高，易于维护。"'
                },
                consequence: {
                    en: '🟢 Fuzzy Green. It is not as dramatic as trees, but it works efficiently. A sensible compromise.',
                    th: '🟢 เขียวฟูฟ่อง มันไม่ดรามาเท่าต้นไม้ แต่ทำงานได้อย่างมีประสิทธิภาพ การประนีประนอมที่สมเหตุสมผล',
                    zh: '🟢 毛茸茸的绿色。它不像树木那样引人注目，但效果显著。一个明智的妥协。'
                },
                stats: { competence: 40, ethics: 40, leadership: 10, innovation: 30 }
            }
        ]
    },
    {
        id: 'architect_043',
        text: {
            en: '⛪ The Glass Cathedral: A client wants a church made entirely of glass. "Transparency to God," they say. You worry about the greenhouse effect baking the congregation.',
            th: '⛪ มหาวิหารแก้ว: ลูกค้าต้องการโบสถ์ที่ทำจากกระจกทั้งหมด "ความโปร่งใสต่อพระเจ้า" พวกเขากล่าว คุณกังวลเรื่องปรากฏการณ์เรือนกระจกที่จะอบผู้เข้าร่วมพิธี',
            zh: '⛪ 玻璃大教堂：一位客户想要一座完全由玻璃建造的教堂。"向上帝透明，"他们说。你担心温室效应会烤焦会众。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌬️ Double Skin: "Build two glass walls with a ventilated gap in between. Convection cools the air naturally."',
                    th: '🌬️ ผนังสองชั้น: "สร้างผนังกระจกสองชั้นที่มีช่องระบายอากาศตรงกลาง การพาความร้อนจะทำให้อากาศเย็นลงตามธรรมชาติ"',
                    zh: '🌬️ 双层表皮："建造两层玻璃墙，中间留有通风间隙。对流自然冷却空气。"'
                },
                consequence: {
                    en: '❄️ Crystal Cool. It is beautiful and comfortable. The HVAC bills are low. Engineering win.',
                    th: '❄️ เย็นดุจคริสตัล สวยงามและสบาย ค่าแอร์ต่ำ ชนะเลิศวิศวกรรม',
                    zh: '❄️ 水晶般的凉爽。美丽而舒适。暖通空调账单很低。工程学的胜利。'
                },
                stats: { competence: 50, ethics: 40, leadership: 20, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '💨 Mega AC: "Install massive air conditioners. Blast cold air at their feet. They can wear sweaters."',
                    th: '💨 แอร์ยักษ์: "ติดตั้งเครื่องปรับอากาศขนาดมหึมา เป่าลมเย็นที่เท้า ให้พวกเขาใส่เสื้อกันหนาว"',
                    zh: '💨 超级空调："安装巨大的空调。对着他们的脚吹冷风。他们可以穿毛衣。"'
                },
                consequence: {
                    en: '🔊 Noisy Prayer. The AC hum drowns out the choir. It is freezing at the bottom and hot at the top.',
                    th: '🔊 คำอธิษฐานที่เสียงดัง เสียงฮัมของแอร์กลบเสียงประสานเสียง ข้างล่างหนาวเหน็บ ข้างบนร้อนจัด',
                    zh: '🔊 嘈杂的祈祷。空调的嗡嗡声淹没了合唱团的声音。下冷上热。'
                },
                stats: { competence: 30, ethics: -20, leadership: 0, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🌫️ Fritted Glass: "Use glass with ceramic dots to block 50% of the sun. It creates a misty light effect."',
                    th: '🌫️ กระจกฟริต: "ใช้กระจกที่มีจุดเซรามิกเพื่อกันแดด 50% สร้างเอฟเฟกต์แสงหมอก"',
                    zh: '🌫️ 烧结玻璃："使用带有陶瓷点的玻璃来阻挡 50% 的阳光。它会产生朦胧的光效。"'
                },
                consequence: {
                    en: '☁️ Heavenly Glow. The light is diffused and holy. Temperature is manageable.',
                    th: '☁️ แสงสวรรค์ แสงฟุ้งกระจายและดูศักดิ์สิทธิ์ อุณหภูมิพอจัดการได้',
                    zh: '☁️ 天堂般的光芒。光线漫射而神圣。温度是可控的。'
                },
                stats: { competence: 40, ethics: 30, leadership: 10, innovation: 20 }
            }
        ]
    },
    {
        id: 'architect_044',
        text: {
            en: '🏢 The Skinny Skyscraper: A client has a tiny plot of land in NYC. He wants a "pencil tower" - super tall, super thin. Swaying in the wind is a major concern.',
            th: '🏢 ตึกระฟ้าผอมเพรียว: ลูกค้ามีที่ดินผืนเล็กในนิวยอร์ก เขาต้องการ "Pencil Tower" - สูงมาก ผอมมาก การแกว่งตัวในลมเป็นข้อกังวลหลัก',
            zh: '🏢 瘦削的摩天大楼：一位客户在纽约有一块很小的地皮。他想要一座"铅笔塔"——超高、超细。在风中摇晃是一个主要问题。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏋️ Tuned Mass Damper: "Hang a 100-ton pendulum at the top to counteract the swaying. Physics!"',
                    th: '🏋️ ตัวลดแรงสั่นสะเทือน: "แขวนลูกตุ้มหนัก 100 ตันไว้ที่ยอดตึกเพื่อต้านทานการแกว่ง ฟิสิกส์!"',
                    zh: '🏋️ 调谐质量阻尼器："在顶部悬挂一个 100 吨重的钟摆来抵消晃动。物理学！"'
                },
                consequence: {
                    en: '🕍 Steady as a Rock. The tower stands still in hurricanes. The penthouse owners don\'t spill their champagne.',
                    th: '🕍 นิ่งดั่งหินผา ตึกยืนหยัดในพายุเฮอริเคน เจ้าของเพนท์เฮาส์ทำแชมเปญไม่หก',
                    zh: '🕍 稳如磐石。塔在飓风中屹立不倒。顶层公寓的业主不会洒掉香槟。'
                },
                stats: { competence: 50, ethics: 20, leadership: 10, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🌬️ Blow-Through Floors: "Leave some floors empty and open to let wind pass through. Reduces drag."',
                    th: '🌬️ ชั้นลมผ่าน: "ปล่อยบางชั้นให้ว่างและเปิดโล่งเพื่อให้ลมผ่าน ลดแรงต้าน"',
                    zh: '🌬️ 通风楼层："让一些楼层空置并开放，让风通过。减少阻力。"'
                },
                consequence: {
                    en: '💨 Whistling Tower. It works structurally, but the tower whistles loudly in storms. Neighbors sue.',
                    th: '💨 ตึกผิวปาก โครงสร้างได้ผล แต่ตึกส่งเสียงหวีดหวิวเสียงดังในพายุ เพื่อนบ้านฟ้อง',
                    zh: '💨 呼啸塔。结构上可行，但塔在暴风雨中发出巨大的呼啸声。邻居起诉。'
                },
                stats: { competence: 40, ethics: 10, leadership: 0, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤢 Ignore Sway: "Rich people have strong stomachs. Build it cheap. Let it sway."',
                    th: '🤢 เมินการแกว่ง: "คนรวยกระเพาะแข็งแรง สร้างถูกๆ ปล่อยให้มันแกว่ง"',
                    zh: '🤢 忽略摇晃："有钱人胃口好。建得便宜点。让它摇晃吧。"'
                },
                consequence: {
                    en: '🤮 Sea Sick Suites. The top floors are unlivable. Guests vomit. The tower is nicknamed "The Barf Spire."',
                    th: '🤮 ห้องสวีทเมาเรือ ชั้นบนอยู่ไม่ได้ แขกอ้วก ตึกได้รับฉายา "ยอดตึกอ้วก"',
                    zh: '🤮 晕船套房。顶层无法居住。客人呕吐。这座塔被昵称为"呕吐塔"。'
                },
                stats: { competence: 10, ethics: -30, leadership: -20, innovation: -10 }
            }
        ]
    },
    {
        id: 'architect_045',
        text: {
            en: '🏗️ 3D Printed Colony: You are designing a Mars habitat. Sending materials from Earth is too expensive. You must use local materials.',
            th: '🏗️ อาณานิคมพิมพ์ 3 มิติ: คุณกำลังออกแบบที่อยู่อาศัยบนดาวอังคาร การส่งวัสดุจากโลกแพงเกินไป คุณต้องใช้วัสดุท้องถิ่น',
            zh: '🏗️ 3D 打印殖民地：你正在设计火星栖息地。从地球运送材料太贵了。你必须使用当地材料。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌋 Martian Concrete: "Mix Martian soil (regolith) with sulfur. Print igloos. Radiation proof."',
                    th: '🌋 คอนกรีตดางอังคาร: "ผสมดินดาวอังคาร (เรโกลิธ) กับกำมะถัน พิมพ์กระท่อมเอสกิโม กันรังสี"',
                    zh: '🌋 火星混凝土："将火星土壤（风化层）与硫磺混合。打印冰屋。防辐射。"'
                },
                consequence: {
                    en: '👽 Red Homes. Tough, warm, and cheap. The first true off-world architecture.',
                    th: '👽 บ้านสีแดง แข็งแกร่ง อบอุ่น และถูก สถาปัตยกรรมต่างดาวที่แท้จริงแห่งแรก',
                    zh: '👽 红色家园。坚固、温暖且便宜。第一个真正的外星建筑。'
                },
                stats: { competence: 50, ethics: 30, leadership: 20, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🧊 Ice Palaces: "Melt subsurface ice and 3D print ice domes. Light passes through, radiation stopped."',
                    th: '🧊 วังน้ำแข็ง: "ละลายน้ำแข็งใต้ดินและพิมพ์โดมน้ำแข็ง แสงผ่านได้ รังสีหยุด"',
                    zh: '🧊 冰宫："融化地下冰并 3D 打印冰穹。光线透过，辐射被阻挡。"'
                },
                consequence: {
                    en: '💎 Beautiful but Fragile. A temperature spike creates a slush puppy. Keep the AC on high.',
                    th: '💎 สวยแต่เปราะบาง อุณหภูมิพุ่งทำให้กลายเป็นสลัชปั่น เปิดแอร์แรงๆ ไว้',
                    zh: '💎 美丽但脆弱。温度飙升会变成雪泥。把空调开大。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🚀 Cannibalize Ships: "Deconstruct the landing ships. Use the metal panels to build shacks."',
                    th: '🚀 ชำแหละยาน: "รื้อยานลงจอด ใช้แผ่นโลหะสร้างเพิง"',
                    zh: '🚀 拆解飞船："拆解着陆船。用金属板建造棚屋。"'
                },
                consequence: {
                    en: '🥫 Tin Can Town. It works, but now you have no way home. Morale plummets.',
                    th: '🥫 เมืองกระป๋อง ใช้ได้ แต่ตอนนี้คุณไม่มีทางกลับบ้าน ขวัญกำลังใจดิ่งลงเหว',
                    zh: '🥫 锡罐镇。这行得通，但现在你回不了家了。士气暴跌。'
                },
                stats: { competence: 20, ethics: 10, leadership: -30, innovation: 0 }
            }
        ]
    },
    {
        id: 'architect_046',
        text: {
            en: '🌉 The Bridge to Nowhere: A politician wants a magnificent bridge connecting the city to... an empty island he owns. It is a vanity project.',
            th: '🌉 สะพานสู่ความว่างเปล่า: นักการเมืองต้องการสะพานอลังการเชื่อมเมืองกับ... เกาะเปล่าๆ ที่เขาเป็นเจ้าของ มันเป็นโปรเจ็กต์สนองนี๊ด',
            zh: '🌉 通往无何有之乡的桥梁：一位政客想要一座宏伟的桥梁，将城市连接到……他拥有的一个空岛。这是一个面子工程。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎡 Destination Bridge: "Make the bridge itself the destination. Add parks, cafes, and viewing decks ON the bridge."',
                    th: '🎡 สะพานจุดหมายปลายทาง: "ทำให้ตัวสะพานเป็นจุดหมายปลายทาง เพิ่มสวน คาเฟ่ และดาดฟ้าชมวิว *บน* สะพาน"',
                    zh: '🎡 目的地桥梁："让桥梁本身成为目的地。在桥上增设公园、咖啡馆和观景台。"'
                },
                consequence: {
                    en: '🌉 Vital Public Space. People go there to hang out. The empty island doesn\'t matter. You saved the project.',
                    th: '🌉 พื้นที่สาธารณะที่สำคัญ ผู้คนไปที่นั่นเพื่อสังสรรค์ เกาะเปล่าๆ ไม่สำคัญ คุณช่วยโปรเจ็กต์ไว้',
                    zh: '🌉 重要的公共空间。人们去那里闲逛。空岛并不重要。你拯救了这个项目。'
                },
                stats: { competence: 50, ethics: 30, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🚧 Minimal Viable Bridge: "Build the cheapest concrete causeway possible. Take the fee. Run."',
                    th: '🚧 สะพานพอใช้: "สร้างทางยกระดับคอนกรีตที่ถูกที่สุดเท่าที่จะทำได้ รับค่าจ้าง หนี"',
                    zh: '🚧 最低可行桥梁："建造尽可能便宜的混凝土堤道。拿钱。跑路。"'
                },
                consequence: {
                    en: '🛣️ Ugly Scar. The city hates it. It is barely used. Your reputation takes a hit.',
                    th: '🛣️ แผลเป็นน่าเกลียด เมืองเกลียดมัน แทบไม่ได้ใช้ ชื่อเสียงคุณเสียหาย',
                    zh: '🛣️ 丑陋的伤疤。城市讨厌它。它几乎没人用。你的声誉受到打击。'
                },
                stats: { competence: 30, ethics: -20, leadership: 0, innovation: 0 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Whistleblow: "This is corruption. Report it to the press. Cancel the project."',
                    th: '🛑 เป่านกหวีด: "นี่คือการคอร์รัปชัน รายงานต่อสื่อ ยกเลิกโปรเจ็กต์"',
                    zh: '🛑 揭发："这是腐败。向媒体举报。取消项目。"'
                },
                consequence: {
                    en: '⚖️ Political Enemy. You stop the waste, but the politician makes sure you never work in this city again.',
                    th: '⚖️ ศัตรูทางการเมือง คุณหยุดความสิ้นเปลือง แต่นักการเมืองทำให้แน่ใจว่าคุณจะไม่ได้งานในเมืองนี้อีก',
                    zh: '⚖️ 政治敌人。你阻止了浪费，但政客确保你再也无法在这个城市工作。'
                },
                stats: { competence: 10, ethics: 50, leadership: 40, innovation: 0 }
            }
        ]
    },
    {
        id: 'architect_047',
        text: {
            en: '🕋 The Black Box: A tech company wants a windowless black cube data center in a historic downtown district. Locals are horrified.',
            th: '🕋 กล่องดำ: บริษัทเทคโนโลยีต้องการศูนย์ข้อมูลทรงลูกบาศก์สีดำไม่มีหน้าต่างในย่านใจกลางเมืองประวัติศาสตร์ ชาวบ้านหวาดกลัว',
            zh: '🕋 黑匣子：一家科技公司想要在历史悠久的市中心区建造一个无窗的黑色立方体数据中心。当地人感到恐惧。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🪞 Mirror Cladding: "Cover it in polished stainless steel. It reflects the historic buildings around it. It disappears."',
                    th: '🪞 หุ้มกระจกเงา: "คลุมด้วยสแตนเลสขัดเงา สะท้อนอาคารประวัติศาสตร์รอบๆ มันจะหายไป"',
                    zh: '🪞 镜面覆层："用抛光不锈钢覆盖它。它反射周围的历史建筑。它消失了。"'
                },
                consequence: {
                    en: '👻 The Phantom Building. It looks cool and respectful. Preservationists accept the compromise.',
                    th: '👻 ตึกปีศาจ ดูเท่และให้เกียรติ นักอนุรักษ์ยอมรับการประนีประนอม',
                    zh: '👻 幻影建筑。看起来很酷且值得尊敬。保护主义者接受了这种妥协。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '🖼️ Digital Canvas: "Cover the walls in giant LED screens. Display art or simulate windows. Interactive facade."',
                    th: '🖼️ ผืนผ้าใบดิจิทัล: "คลุมผนังด้วยจอ LED ยักษ์ แสดงงานศิลปะหรือจำลองหน้าต่าง ฟาซาดแบบโต้ตอบ"',
                    zh: '🖼️ 数字画布："用巨大的 LED 屏幕覆盖墙壁。展示艺术品或模拟窗户。互动立面。"'
                },
                consequence: {
                    en: '📺 Times Square 2.0. Too bright! Locals can\'t sleep. Hacks display rude images. Chaos.',
                    th: '📺 ไทม์สแควร์ 2.0 สว่างไป! ชาวบ้านนอนไม่หลับ แฮกเกอร์ฉายภาพหยาบคาย วุ่นวาย',
                    zh: '📺 时代广场 2.0。太亮了！当地人睡不着觉。黑客展示粗鲁的图像。混乱。'
                },
                stats: { competence: 30, ethics: -10, leadership: 10, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🧗 Climbing Wall: "Turn the exterior into a public climbing wall. Make the fortress fun."',
                    th: '🧗 หน้าผาจำลอง: "เปลี่ยนภายนอกให้เป็นหน้าผาจำลองสาธารณะ ทำให้ป้อมปราการสนุก"',
                    zh: '🧗 攀岩墙："把外观变成公共攀岩墙。让堡垒变得有趣。"'
                },
                consequence: {
                    en: '🧗 Urban Gym. Young people love it. The black cube becomes a hangout spot. Active design.',
                    th: '🧗 ยิมในเมือง คนหนุ่มสาวชอบ กล่องดำกลายเป็นที่สังสรรค์ การออกแบบที่แอคทีฟ',
                    zh: '🧗 城市健身房。年轻人喜欢它。黑色立方体成了聚会场所。积极的设计。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 40 }
            }
        ]
    },
    {
        id: 'architect_048',
        text: {
            en: '🏚️ Post-War Rebuild: A city was bombed. You are in charge of the reconstruction. Do you restore the old look or build modern?',
            th: '🏚️ การสร้างใหม่หลังสงคราม: เมืองถูกระเบิด คุณรับผิดชอบการสร้างใหม่ คุณจะคืนสภาพเดิมหรือสร้างแบบสมัยใหม่?',
            zh: '🏚️ 战后重建：一座城市被炸毁。你负责重建。你是恢复旧貌还是建造现代建筑？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏰 Faithful Restoration: "Rebuild exactly as it was. Heal the trauma. Restore identity. Tourists will come back."',
                    th: '🏰 การบูรณะที่ซื่อสัตย์: "สร้างใหม่เหมือนเดิมเป๊ะ เยียวยาบาดแผล คืนอัตลักษณ์ นักท่องเที่ยวจะกลับมา"',
                    zh: '🏰 忠实修复："完全按原样重建。治愈创伤。恢复身份。游客会回来的。"'
                },
                consequence: {
                    en: '📸 Disney History. It feels a bit fake, but locals cry with joy to see their town back. Healing architecture.',
                    th: '📸 ประวัติศาสตร์ดิสนีย์ รู้สึกปลอมนิดๆ แต่ชาวบ้านร้องไห้ด้วยความดีใจที่เห็นเมืองกลับมา สถาปัตยกรรมเยียวยา',
                    zh: '📸 迪士尼历史。感觉有点假，但当地看到城镇归来喜极而泣。治愈系建筑。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🏙️ Modern Grid: "The old narrow streets were inefficient. Bulldoze the rubble. Build wide avenues and modern towers."',
                    th: '🏙️ ตารางสมัยใหม่: "ถนนแคบๆ แบบเก่าไม่มีประสิทธิภาพ ไถเศษซากทิ้ง สร้างถนนกว้างและตึกสมัยใหม่"',
                    zh: '🏙️ 现代网格："古老的狭窄街道效率低下。推土机铲除瓦砾。建造宽阔的大道和现代塔楼。"'
                },
                consequence: {
                    en: '🚗 Traffic City. Efficient for cars, but no soul. You erased the memories forever.',
                    th: '🚗 เมืองจราจร มีประสิทธิภาพสำหรับรถ แต่ไร้จิตวิญญาณ คุณลบความทรงจำไปตลอดกาล',
                    zh: '🚗 交通城市。对汽车来说效率很高，但没有灵魂。你永远抹去了记忆。'
                },
                stats: { competence: 50, ethics: -20, leadership: 10, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Hybrid Memorial: "Keep the ruins of the main church as a memorial. Build modern around it. Remember and move on."',
                    th: '🤝 อนุสรณ์สถานไฮบริด: "เก็บซากโบสถ์หลักไว้เป็นอนุสรณ์ สร้างความทันสมัยรอบๆ จดจำและก้าวต่อไป"',
                    zh: '🤝 混合纪念馆："保留主教堂的废墟作为纪念馆。在周围建造现代建筑。铭记并继续前进。"'
                },
                consequence: {
                    en: '🕊️ Poignant Balance. Powerful emotional impact. The city looks to the future without forgetting the past.',
                    th: '🕊️ ความสมดุลที่เจ็บปวด ผลกระทบทางอารมณ์ที่ทรงพลัง เมืองมองไปข้างหน้าโดยไม่ลืมอดีต',
                    zh: '🕊️ 凄美的平衡。强大的情感冲击。城市展望未来，不忘过去。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 }
            }
        ]
    },
    {
        id: 'architect_049',
        text: {
            en: '🌡️ The Melting Glaciers: A research station in Antarctica is sinking because the ice shelf is melting faster than predicted. They need a new station.',
            th: '🌡️ ธารน้ำแข็งละลาย: สถานีวิจัยในแอนตาร์กตีกากำลังจมเพราะหิ้งน้ำแข็งละลายเร็วกว่าที่คาด พวกเขาต้องการสถานีใหม่',
            zh: '🌡️ 融化的冰川：南极洲的一个研究站正在下沉，因为冰架融化的速度比预期的要快。他们需要一个新的车站。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🎿 Ski-Station: "Put the whole station on giant hydraulic skis. When ice moves, we tow the station to a safe spot."',
                    th: '🎿 สถานีสกี: "วางทั้งสถานีบนสกีไฮดรอลิกยักษ์ เมื่อน้ำแข็งเคลื่อนที่ เราลากสถานีไปที่ปลอดภัย"',
                    zh: '🎿 滑雪站："把整个站放在巨大的液压滑雪板上。当冰移动时，我们将站拖到安全的地方。"'
                },
                consequence: {
                    en: '⛷️ Mobile Science. Brilliant. The station survives for decades by moving away from cracks. Halley VI style.',
                    th: '⛷️ วิทยาศาสตร์เคลื่อนที่ ยอดเยี่ยม สถานีอยู่รอดได้หลายทศวรรษโดยการย้ายหนีรอยแยก สไตล์ Halley VI',
                    zh: '⛷️ 移动科学。太棒了。该站通过远离裂缝存活了数十年。哈雷六号风格。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🚁 Air Drop Mods: "Drop lightweight pods from helicopters. Quick to replace if lost. Disposable architecture."',
                    th: '🚁 แอร์ดรอปพ็อด: "ทิ้งพ็อดน้ำหนักเบาจากเฮลิคอปเตอร์ เปลี่ยนง่ายถ้าหาย สถาปัตยกรรมใช้แล้วทิ้ง"',
                    zh: '🚁 空投模块："从直升机上投下轻型吊舱。如果丢失，可以快速更换。一次性建筑。"'
                },
                consequence: {
                    en: '🗑️ Space Junk. The ice is littered with abandoned pods. Scientists hate the cramped spaces.',
                    th: '🗑️ ขยะอวกาศ น้ำแข็งเกลื่อนไปด้วยพ็อดที่ถูกทิ้ง นักวิทยาศาสตร์เกลียดพื้นที่คับแคบ',
                    zh: '🗑️ 太空垃圾。冰面上到处是被遗弃的吊舱。科学家讨厌狭窄的空间。'
                },
                stats: { competence: 30, ethics: -10, leadership: 0, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🧗 Bedrock Anchor: "Drill through 2km of ice to find bedrock. Build a tower up. Insanely expensive."',
                    th: '🧗 สมอหินดาน: "เจาะผ่านน้ำแข็ง 2 กม. เพื่อหาหินดาน สร้างหอคอยขึ้นมา แพงระยับ"',
                    zh: '🧗 基岩锚："钻过 2 公里的冰层找到基岩。建一座塔。极其昂贵。"'
                },
                consequence: {
                    en: '💸 Budget Freeze. The project runs out of money before the foundation is laid. Project cancelled.',
                    th: '💸 งบแช่แข็ง เงินหมดก่อนวางรากฐาน โปรเจ็กต์ถูกยกเลิก',
                    zh: '💸 预算冻结。在打地基之前资金就用光了。项目取消。'
                },
                stats: { competence: 10, ethics: 10, leadership: -20, innovation: -10 }
            }
        ]
    },
    {
        id: 'architect_050',
        text: {
            en: '🏆 The Masterpiece: You are old and famous. You want to design your final building, your tomb/museum. How do you want to be remembered?',
            th: '🏆 ผลงานชิ้นเอก: คุณแก่และมีชื่อเสียง คุณต้องการออกแบบอาคารสุดท้ายของคุณ สุสาน/พิพิธภัณฑ์ของคุณ คุณต้องการให้คนจดจำอย่างไร?',
            zh: '🏆 杰作：你年老成名。你想设计你的最后通过建筑，你的坟墓/博物馆。你想如何被铭记？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📐 Pure Void: "A perfect empty cube of black stone. No door. Inside is just my sketches. Mystery."',
                    th: '📐 ความว่างเปล่าบริสุทธิ์: "ลูกบาศก์หินสีดำที่ว่างเปล่าสมบูรณ์แบบ ไม่มีประตู ข้างในมีแค่สเก็ตช์ของผม ความลึกลับ"',
                    zh: '📐 纯粹的虚空："一个完美的黑色石头空立方体。没有门。里面只是我的草图。神秘。"'
                },
                consequence: {
                    en: '⬛ The Monolith. Architecture students pilgrimage to stare at the wall. You are a legend of minimalism.',
                    th: '⬛ เสาหิน นักเรียนสถาปัตย์จาริกแสวงบุญมาจ้องผนัง คุณคือตำนานของความเรียบง่าย',
                    zh: '⬛ 巨石。建筑系学生朝圣般地凝视着墙壁。你是极简主义的传奇。'
                },
                stats: { competence: 50, ethics: 30, leadership: 50, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🏫 The School: "Don\'t build a monument to me. Build a free school of design for poor students. My legacy is people."',
                    th: '🏫 โรงเรียน: "ไม่ต้องสร้างอนุสาวรีย์ให้ผม สร้างโรงเรียนออกแบบฟรีสำหรับนักเรียนยากจน มรดกของผมคือผู้คน"',
                    zh: '🏫 学校："不要为我建造纪念碑。为贫困学生建立一所免费的设计学校。我的遗产是人。"'
                },
                consequence: {
                    en: '❤️ Eternal Legacy. You are forgotten as a stylist, but loved as a teacher. The profession gets better because of you.',
                    th: '❤️ มรดกนิรันดร์ คุณถูกลืมในฐานะสไตลิสต์ แต่เป็นที่รักในฐานะครู วิชาชีพดีขึ้นเพราะคุณ',
                    zh: '❤️ 永恒的遗产。作为一个造型师，你被遗忘了，作为一个老师，你被爱戴。这个职业因为你而变得更好。'
                },
                stats: { competence: 40, ethics: 60, leadership: 60, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🎢 The Skyscraper Coaster: "A 100-story tower with a roller coaster wrapped around it. Fun! Chaos! Why so serious?"',
                    th: '🎢 ตึกรถไฟเหาะ: "ตึก 100 ชั้นที่มีรถไฟเหาะพันรอบ สนุก! วุ่นวาย! ทำไมต้องซีเรียส?"',
                    zh: '🎢 摩天大楼过山车："一座被过山车缠绕的 100 层塔楼。有趣！混乱！干嘛那么严肃？"'
                },
                consequence: {
                    en: '🤡 The Mad Architect. It is built. It is hideous and fun. You die laughing.',
                    th: '🤡 สถาปนิกบ้า สร้างเสร็จ น่าเกลียดและสนุก คุณตายตาหลับพร้อมเสียงหัวเราะ',
                    zh: '🤡 疯狂建筑师。它建成了。既丑陋又有趣。你笑死了。'
                },
                stats: { competence: 50, ethics: 10, leadership: 10, innovation: 50 }
            }
        ]
    },
];
