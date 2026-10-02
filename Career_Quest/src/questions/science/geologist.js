export const geologistQuestions = [
    // SECTION 1: EARLY CAREER & FIELDWORK (Questions 1-15) - Focus on technical skills, ethics, and early discoveries
    {
        id: 'geo_001',
        text: {
            en: '🗺️ The Lithium Discovery Dilemma: While surveying a remote region in the Andes for a junior mining client, you discover a massive, undocumented lithium deposit. The area is also an indigenous heritage site not yet marked on government maps. Your client is struggling financially and this would save them. What do you report?',
            th: '🗺️ ภาวะกลืนไม่เข้าคายไม่ออกของการค้นพบลิเธียม: ในขณะที่สำรวจพื้นที่ห่างไกลในเทือกเขาแอนดีสให้กับลูกค้าเหมืองแร่รายย่อย คุณค้นพบแหล่งลิเธียมขนาดมหาศาลที่ไม่มีเอกสารบันทึก พื้นที่นี้ยังเป็นแหล่งมรดกของชนเผ่าพื้นเมืองที่ยังไม่ได้ทำเครื่องหมายบนแผนที่รัฐบาล ลูกค้าของคุณกำลังดิ้นรนทางการเงินและการค้นพบนี้จะช่วยชีวิตพวกเขา คุณจะรายงานอะไร?',
            zh: '🗺️ 锂矿发现的困境：在安第斯山脉偏远地区为一家初级矿业客户勘测时，你发现了一个巨大的、未记录的锂矿床。该地区也是一个尚未在政府地图上标记的原住民遗产地。你的客户正陷入财务困境，这将拯救他们。你会报告什么？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📝 Report Only the Heritage Site:"I file a report detailing the heritage significance to the government immediately to protect the site. I tell the client the area shows \'negligible potential\' to discourage mining."',
                    th: '📝 รายงานเฉพาะแหล่งมรดก:"ฉันยื่นรายงานรายละเอียดความสำคัญของมรดกต่อรัฐบาลทันทีเพื่อปกป้องสถานที่ ฉันบอกลูกค้าว่าพื้นที่แสดง \'ศักยภาพที่ละเลยได้\' เพื่อกีดกันการทำเหมือง"',
                    zh: '📝 仅报告遗产地："我立即向政府提交一份详细说明遗产重要性的报告以保护该遗址。我告诉客户该地区显示\'潜力微不足道\'以阻止采矿。"'
                },
                consequence: {
                    en: '⚖️ Ethical Victory, Career Hit! The site becomes a protected park. The indigenous community honors you. However, your client goes bankrupt and sues you for"negligent surveying"after a competitor finds the lithium years later. You are blacklisted by junior miners but hailed by NGOs.',
                    th: '⚖️ ชัยชนะทางจริยธรรม แต่กระทบอาชีพ! สถานที่นี้กลายเป็นอุทยานที่ได้รับการคุ้มครอง ชุมชนพื้นเมืองให้เกียรติคุณ อย่างไรก็ตาม ลูกค้าของคุณล้มละลายและฟ้องคุณข้อหา"สำรวจโดยประมาท"หลังจากคู่แข่งพบลิเธียมในหลายปีต่อมา คุณถูกขึ้นบัญชีดำโดยนักขุดรายย่อยแต่ได้รับการยกย่องจาก NGO',
                    zh: '⚖️ 道德胜利，职业打击！该遗址成为受保护的公园。原住民社区向你致敬。然而，你的客户破产了，并在竞争对手多年后发现锂矿后起诉你"勘测疏忽"。你被初级矿工列入黑名单，但受到非政府组织的赞扬。'
                },
                stats: { competence: 30, ethics: 50, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Full Disclosure to Client:"I provide the client with the full geological data including the deposit size. I add a footnote about \'potential cultural artifacts\' but let them decide how to handle the permitting."',
                    th: '💰 เปิดเผยข้อมูลทั้งหมดต่อลูกค้า:"ฉันให้ข้อมูลทางธรณีวิทยาทั้งหมดแก่ลูกค้า รวมถึงขนาดของแหล่งแร่ ฉันเพิ่มหมายเหตุเกี่ยวกับ \'วัตถุทางวัฒนธรรมที่อาจมี\' แต่ปล่อยให้พวกเขาตัดสินใจว่าจะจัดการกับการขออนุญาตอย่างไร"',
                    zh: '💰 向客户完全披露："我向客户提供完整的地质数据，包括矿床大小。我加了一个关于\'潜在文物\'的脚注，但让他们决定如何处理许可。"'
                },
                consequence: {
                    en: '🏗️ The Mine is Built! The client stock soars 3000%. They bulldoze the heritage site before regulators can act. You get a massive bonus and a reputation as a"finder."But investigative journalists expose your report footprint. Public outcry is severe.',
                    th: '🏗️ เหมืองถูกสร้างขึ้น! หุ้นลูกค้าพุ่งขึ้น 3000% พวกเขาไถกลบแหล่งมรดกก่อนที่หน่วยงานกำกับดูแลจะดำเนินการได้ คุณได้รับโบนัสก้อนโตและชื่อเสียงในฐานะ"ผู้ค้นพบ"แต่นักข่าวสืบสวนเปิดเผยร่องรอยรายงานของคุณ เสียงวิพากษ์วิจารณ์จากสาธารณชนรุนแรงมาก',
                    zh: '🏗️ 矿山建成了！客户股票飙升3000%。他们在监管机构采取行动之前推平了遗产地。你获得巨额奖金和"发现者"的声誉。但调查记者曝光了你的报告足迹。公众强烈抗议。'
                },
                stats: { competence: 50, ethics: -40, leadership: 10, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Mediation Strategy:"I organize a confidential meeting between the tribal leaders and the mining CEO. I propose a joint venture where the tribe gets 20% equity and the heritage site is preserved as a visitor center within the mine complex."',
                    th: '🤝 กลยุทธ์การไกล่เกลี่ย:"ฉันจัดประชุมลับระหว่างผู้นำเผ่าและ CEO เหมืองแร่ ฉันเสนอการร่วมทุนที่เผ่าได้รับหุ้น 20% และแหล่งมรดกได้รับการอนุรักษ์เป็นศูนย์ผู้มาเยือนภายในเขตเหมือง"',
                    zh: '🤝 调解策略："我安排部落首领和矿业CEO进行秘密会议。我提议建立合资企业，部落获得20%的股权，并将遗产地作为矿区内的游客中心加以保护。"'
                },
                consequence: {
                    en: '🏆 The"Green Gold"Model! It takes 6 months of negotiation. The deal is signed. It becomes a global case study for sustainable mining. You are promoted to Chief Sustainability Officer. The mine is smaller, but fully supported by locals.',
                    th: '🏆 โมเดล"ทองคำสีเขียว"! การเจรจาใช้เวลา 6 เดือน ข้อตกลงถูกลงนาม กลายเป็นกรณีศึกษาทั่วโลกสำหรับการทำเหมืองที่ยั่งยืน คุณได้รับการเลื่อนตำแหน่งเป็นประธานเจ้าหน้าที่ฝ่ายความยั่งยืน เหมืองมีขนาดเล็กลง แต่ได้รับการสนับสนุนอย่างเต็มที่จากคนท้องถิ่น',
                    zh: '🏆"绿金"模式！经过6个月的谈判。协议签署。它成为可持续采矿的全球案例研究。你被提升为首席可持续发展官。矿山规模较小，但得到当地人的全力支持。'
                },
                stats: { competence: 40, ethics: 45, leadership: 50, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '🔬 Academic Publication:"I resign from the contract citing conflict of interest. I publish the geological findings in a scientific journal, making the data public knowledge for anyone to access."',
                    th: '🔬 การตีพิมพ์ทางวิชาการ:"ฉันลาออกจากสัญญาโดยอ้างความขัดแย้งทางผลประโยชน์ ฉันตีพิมพ์ผลการค้นพบทางธรณีวิทยาในวารสารวิทยาศาสตร์ ทำให้ข้อมูลเป็นความรู้สาธารณะที่ใครก็เข้าถึงได้"',
                    zh: '🔬 学术发表："我以利益冲突为由辞去合同。我在科学期刊上发表地质发现，使数据成为任何人都可以获取的公共知识。"'
                },
                consequence: {
                    en: '📚 Academic Fame, Industry Outcast! You gain massive citations and scientific respect. A bidding war starts for the land. The government steps in to manage the auction. You lose the money but gain tenure at a top university. You are seen as a purist.',
                    th: '📚 ชื่อเสียงทางวิชาการ แต่เป็นแกะดำในอุตสาหกรรม! คุณได้รับการอ้างอิงและความเคารพทางวิทยาศาสตร์อย่างมหาศาล สงครามการประมูลที่ดินเริ่มต้นขึ้น รัฐบาลเข้ามาจัดการการประมูล คุณเสียเงินแต่ได้ตำแหน่งอาจารย์ประจำมหาวิทยาลัยชั้นนำ คุณถูกมองว่าเป็นพวกยึดมั่นในอุดมการณ์',
                    zh: '📚 学术声誉，行业弃儿！你获得大量引用和科学尊重。土地竞标战开始。政府介入管理拍卖。你失去了金钱，但在顶尖大学获得了终身教职。你被视为纯粹主义者。'
                },
                stats: { competence: 50, ethics: 30, leadership: 15, innovation: 30 }
            }
        ]
    },
    {
        id: 'geo_002',
        text: {
            en: '🌋 The Volcanic Warning: You are monitoring a dormant volcano near a growing tourist town. Seismic data shows a 15% increase in tremors—statistically insignificant but mirroring the pattern of the 1980 eruption. A major holiday festival starts in 2 days. The mayor asks you to keep quiet to save the local economy.',
            th: '🌋 คำเตือนภูเขาไฟ: คุณกำลังเฝ้าติดตามภูเขาไฟที่สงบแล้วใกล้เมืองท่องเที่ยวที่กำลังเติบโต ข้อมูลแผ่นดินไหวแสดงแรงสั่นสะเทือนเพิ่มขึ้น 15%—ซึ่งไม่มีนัยสำคัญทางสถิติแต่คล้ายคลึงกับรูปแบบการระเบิดปี 1980 เทศกาลวันหยุดใหญ่จะเริ่มในอีก 2 วัน นายกเทศมนตรีขอให้คุณเงียบไว้เพื่อรักษาเศรษฐกิจท้องถิ่น',
            zh: '🌋 火山警告：你正在监测一个不断发展的旅游城镇附近的休眠火山。地震数据显示震动增加了15%——统计上不显著，但与1980年爆发的模式相似。一个重要的节日庆典将在2天后开始。市长要求你保持沉默以拯救当地经济。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Issue Red Alert Evacuation:"Data patterns don\'t lie. I cannot risk 5,000 lives. I issue a formal recommendation for immediate evacuation, bypassing the mayor."',
                    th: '📢 ออกคำสั่งอพยพด่วนระดับแดง:"รูปแบบข้อมูลไม่โกหก ฉันไม่สามารถเสี่ยงชีวิต 5,000 คน ฉันออกคำแนะนำอย่างเป็นทางการให้อพยพทันที โดยข้ามหน้านายกเทศมนตรี"',
                    zh: '📢 发布红色警报疏散："数据模式不会撒谎。我不能拿5000条生命冒险。我绕过市长，正式建议立即疏散。"'
                },
                consequence: {
                    en: '📉 False Alarm Fallback! The town is evacuated. The festival is ruined. The volcano DOES NOT erupt. The town loses $10M. You are fired for"inducing panic"and sued by resort owners. BUT, you sleep at night knowing you prioritized safety. Your career in public safety is over.',
                    th: '📉 สัญญาณเตือนภัยพลาด! เมืองถูกอพยพ เทศกาลล่ม ภูเขาไฟ"ไม่"ระเบิด เมืองสูญเสีย $10M คุณถูกไล่ออกข้อหา"ก่อให้เกิดความตื่นตระหนก"และถูกฟ้องโดยเจ้าของรีสอร์ท แต่คุณนอนหลับสบายเพราะรู้ว่าคุณให้ความสำคัญกับความปลอดภัย อาชีพของคุณในความปลอดภัยสาธารณะจบลง',
                    zh: '📉 虚惊一场！城镇被疏散。节日毁了。火山没有爆发。城镇损失1000万美元。你因"引发恐慌"被解雇并被度假村业主起诉。但是，你知道自己将安全放在首位，这让你问心无愧。你的公共安全职业生涯结束了。'
                },
                stats: { competence: 30, ethics: 50, leadership: -20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '👀 Increased Monitoring:"I won\'t order an evacuation yet, but I demand budget for 24/7 drone monitoring and installation of 5 new gas sensors today. If markers rise 1% more, we evacuate."',
                    th: '👀 เพิ่มการเฝ้าระวัง:"ฉันจะยังไม่สั่งอพยพ แต่ฉันขืองบประมาณสำหรับโดรนเฝ้าระวัง 24/7 และติดตั้งเซ็นเซอร์ก๊าซใหม่ 5 ตัววันนี้ ถ้าตัวบ่งชี้เพิ่มขึ้นอีก 1% เราจะอพยพ"',
                    zh: '👀加强监测："我还不会下令疏散，但我要求预算用于24/7无人机监测和今天安装5个新的气体传感器。如果指标再上升1%，我们就疏散。"'
                },
                consequence: {
                    en: '✅ The Close Call! The sensors pick up a sulfur spike 12 hours later. You evacuate the town just 4 hours before a minor plume eruption. Ash covers the empty town. You are hailed as a hero who balanced science and economics perfectly. The mayor gives you a key to the city.',
                    th: '✅ เกือบไปแล้ว! เซ็นเซอร์ตรวจพบซัลเฟอร์พุ่งสูงในอีก 12 ชั่วโมงต่อมา คุณอพยพเมืองเพียง 4 ชั่วโมงก่อนการระเบิดพ่นเถ้าถ่านเล็กน้อย เถ้าถ่านปกคลุมเมืองที่ว่างเปล่า คุณได้รับการยกย่องว่าเป็นฮีโร่ที่รักษาสมดุลระหว่างวิทยาศาสตร์และเศรษฐกิจได้อย่างสมบูรณ์แบบ นายกเทศมนตรีมอบกุญแจเมืองให้คุณ',
                    zh: '✅ 险在眉睫！传感器在12小时后检测到硫含量激增。你在一次轻微的羽流喷发前4小时疏散了城镇。火山灰覆盖了空荡荡的城镇。你被誉为完美平衡科学与经济的英雄。市长给了你一把城市钥匙。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 35 }
            },
            {
                id: 'C',
                text: {
                    en: '🤫 Comply with Mayor but Prepare:"I\'ll stay quiet publicly, but I leak the \'raw data\' to a university friend who blogs about geology. Let the rumor mill encourage voluntary evacuation."',
                    th: '🤫 ปฏิบัติตามนายกฯ แต่เตรียมพร้อม:"ฉันจะเงียบต่อสาธารณะ แต่ฉันปล่อย \'ข้อมูลดิบ\' ให้เพื่อนมหาวิทยาลัยที่เขียนบล็อกเกี่ยวกับธรณีวิทยา ให้ข่าวลือกระตุ้นการอพยพโดยสมัครใจ"',
                    zh: '🤫 顺从市长但也做准备："我会公开保持沉默，但我把\'原始数据\'泄露给一位写地质学博客的大学朋友。让谣言工厂鼓励自愿疏散。"'
                },
                consequence: {
                    en: '⚖️ Chaos Management! Rumors spread causing a partial panic exit. The festival attendance drops 40%. The volcano burps steam but no major eruption. You saved some from potential danger but lost credibility with authorities for the leak. You are transferred to a desk job.',
                    th: '⚖️ การจัดการความโกลาหล! ข่าวลือแพร่สะพัดทำให้เกิดการอพยพด้วยความตื่นตระหนกบางส่วน ผู้เข้าร่วมเทศกาลลดลง 40% ภูเขาไฟพ่นไอน้ำออกมาแต่ไม่มีการระเบิดใหญ่ คุณช่วยบางคนจากอันตรายที่อาจเกิดขึ้นแต่สูญเสียความน่าเชื่อถือกับเจ้าหน้าที่จากการปล่อยข่าว คุณถูกย้ายไปทำงานเอกสาร',
                    zh: '⚖️ 混乱管理！谣言四起导致部分恐慌性撤离。节日出席率下降40%。火山喷出蒸汽但没有大爆发。你从潜在危险中拯救了一些人，但因泄密而失去了当局的信任。你被调去做文职工作。'
                },
                stats: { competence: 35, ethics: 20, leadership: 25, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '📊 Revise the Thresholds:"The 1980 data is outdated. Modern models suggest this level of activity is normal for this specific magmatic system. I advise proceeding with the festival fully."',
                    th: '📊 แก้ไขเกณฑ์:"ข้อมูลปี 1980 ล้าสมัยแล้ว โมเดลสมัยใหม่ชี้ว่าระดับกิจกรรมนี้เป็นปกติสำหรับระบบแมกมาเฉพาะนี้ ฉันแนะนำให้ดำเนินเทศกาลต่อไปอย่างเต็มที่"',
                    zh: '📊 修改阈值："1980年的数据过时了。现代模型表明这种活动水平对于这个特定的岩浆系统是正常的。我建议完全进行节日活动。"'
                },
                consequence: {
                    en: '🎲 High Stakes Gamble! The volcano stays dormant. The festival makes record profits. You are seen as a"pragmatic scientist"and mining companies try to recruit you for high-risk projects. But you know secretly you just got lucky. It haunts you.',
                    th: '🎲 การเดิมพันเดิมพันสูง! ภูเขาไฟยังคงสงบ เทศกาลทำกำไรเป็นประวัติการณ์ คุณถูกมองว่าเป็น"นักวิทยาศาสตร์เชิงปฏิบัติ"และบริษัทเหมืองแร่พยายามดึงตัวคุณไปทำโครงการความเสี่ยงสูง แต่คุณรู้อยู่ลึกๆ ว่าคุณแค่โชคดี มันหลอกหลอนคุณ',
                    zh: '🎲 高风险赌博！火山保持休眠。节日创纪录盈利。你被视为"务实的科学家"，矿业公司试图招募你参与高风险项目。但私下里你知道你只是运气好。这让你心有余悸。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 40 }
            }
        ]
    },
    {
        id: 'geo_003',
        text: {
            en: '🛢️ The Fracking Fault Line: You are a consultant for an energy firm doing hydraulic fracturing. Your analysis shows their new injection well sits directly on a deep, inactive fault line. The company geologists say it\'s"sealed."Activating it could trigger magnitude 4.0 quakes in a nearby city.',
            th: '🛢️ รอยเลื่อน Fracking: คุณเป็นที่ปรึกษาให้กับบริษัทพลังงานที่ทำ hydraulic fracturing การวิเคราะห์ของคุณแสดงให้เห็นว่าบ่อฉีดใหม่ของพวกเขาตั้งอยู่บนรอยเลื่อนลึกที่ไม่มีการใช้งาน นักธรณีวิทยาของบริษัทบอกว่ามัน"ปิดสนิท"แล้ว การกระตุ้นมันอาจทำให้เกิดแผ่นดินไหวขนาด 4.0 ในเมืองใกล้เคียง',
            zh: '🛢️ 水力压裂断层线：你是一家能源公司的顾问，正在进行水力压裂。你的分析显示他们的新注入井直接位于一条深层的非活动断层线上。公司的地质学家说它是"密封的"。激活它可能会在附近的城市引发4.0级地震。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Refuse to Sign Off:"I will not certify this well. The risk of induced seismicity is too high. Move the injection site 50km north, costing $2M extra."',
                    th: '🛑 ปฏิเสธที่จะลงนาม:"ฉันจะไม่รับรองบ่อน้ำนี้ ความเสี่ยงของแผ่นดินไหวที่เกิดจากการกระตุ้นสูงเกินไป ย้ายจุดฉีดไปทางทิศเหนือ 50 กม. ซึ่งมีค่าใช้จ่ายเพิ่ม $2M"',
                    zh: '🛑 拒绝签字："我不会认证这口井。诱发地震的风险太高了。将注入点向北移动50公里，额外花费200万美元。"'
                },
                consequence: {
                    en: '🛡️ Safety First! The company fires you and hires a"yes-man."They drill anyway. 3 months later, a 4.2 quake cracks 500 homes. You testify in court with your original report. You become a key expert witness in industry regulations. You lose clients but gain public trust.',
                    th: '🛡️ ความปลอดภัยมาก่อน! บริษัทไล่คุณออกและจ้าง"คนขี้ประจบ"พวกเขาเจาะอยู่ดี 3 เดือนต่อมา แผ่นดินไหว 4.2 ทำให้บ้าน 500 หลังร้าว คุณให้การในศาลพร้อมรายงานฉบับเดิมของคุณ คุณกลายเป็นพยานผู้เชี่ยวชาญคนสำคัญในกฎระเบียบอุตสาหกรรม คุณเสียลูกค้าแต่ได้รับความไว้วางใจจากสาธารณชน',
                    zh: '🛡️ 安全第一！公司解雇了你并雇佣了一个"唯唯诺诺的人"。他们还是钻探了。3个月后，4.2级地震震裂了500所房屋。你带着原来的报告出庭作证。你成为行业监管的关键专家证人。你失去了客户，但赢得了公众信任。'
                },
                stats: { competence: 45, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🔬 Propose Monitoring & Limits:"We proceed, but install \'traffic light\' sensors. If seismic activity exceeds magnitude 1.5, we stop injection immediately. I personally oversee the data."',
                    th: '🔬 เสนอการเฝ้าระวังและขีดจำกัด:"เราดำเนินการต่อ แต่ติดตั้งเซ็นเซอร์ \'ระบบไฟจราจร\' หากกิจกรรมแผ่นดินไหวเกินขนาด 1.5 เราหยุดการฉีดทันที ฉันดูแลข้อมูลด้วยตัวเอง"',
                    zh: '🔬 提议监测和限制："我们继续，但安装\'红绿灯\'传感器。如果地震活动超过1.5级，我们立即停止注入。我亲自监督数据。"'
                },
                consequence: {
                    en: '⚙️ Operational Success! Quakes start happening. You trigger the shutoff at mag 1.8. It prevents damage. The company is annoyed at the downtime but avoids lawsuits. You established a new industry standard for safe injection protocols.',
                    th: '⚙️ ความสำเร็จในการดำเนินงาน! แผ่นดินไหวเริ่มเกิดขึ้น คุณสั่งปิดที่ขนาด 1.8 มันป้องกันความเสียหาย บริษัทรำคาญที่ต้องหยุดงานแต่หลีกเลี่ยงการถูกฟ้องร้อง คุณสร้างมาตรฐานอุตสาหกรรมใหม่สำหรับโปรโทคอลการฉีดที่ปลอดภัย',
                    zh: '⚙️ 运营成功！地震开始发生。你在1.8级时触发了关闭。这防止了损害。公司对停工感到恼火，但避免了诉讼。你建立了安全注入协议的新行业标准。'
                },
                stats: { competence: 50, ethics: 40, leadership: 35, innovation: 45 }
            },
            {
                id: 'C',
                text: {
                    en: '📝 Modify the Report Language:"State the fault exists but emphasize the low probability of activation based on their geologist\'s models. Add a liability waiver for yourself."',
                    th: '📝 แก้ไขภาษาในรายงาน:"ระบุว่ามีรอยเลื่อนอยู่แต่เน้นความน่าจะเป็นต่ำของการกระตุ้นตามโมเดลของนักธรณีวิทยาของพวกเขา เพิ่มข้อสละสิทธิ์ความรับผิดชอบสำหรับตัวคุณเอง"',
                    zh: '📝 修改报告措辞："说明断层存在，但根据他们地质学家的模型强调激活概率低。为自己添加免责声明。"'
                },
                consequence: {
                    en: '⚖️ The Legal Shield! The well operates. Small quakes happen (Mag 2.5), causing anxiety but no damage. Residents protest. You are technically clear of blame, but your peers know you caved. Your reputation as an independent consultant is tarnished.',
                    th: '⚖️ โล่กฎหมาย! บ่อน้ำทำงาน แผ่นดินไหวเล็กน้อยเกิดขึ้น (ขนาด 2.5) ทำให้เกิดความกังวลแต่ไม่มีความเสียหาย ชาวบ้านประท้วง คุณพ้นผิดทางเทคนิค แต่เพื่อนร่วมงานรู้ว่าคุณยอมจำนน ชื่อเสียงของคุณในฐานะที่ปรึกษาอิสระมัวหมอง',
                    zh: '⚖️ 法律盾牌！油井运行。发生小地震（2.5级），引起焦虑但没有损害。居民抗议。你在技术上没有责任，但你的同行知道你屈服了。你作为独立顾问的声誉受损。'
                },
                stats: { competence: 35, ethics: 25, leadership: 20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🌍 Leak to Environmental Group:"Send the fault maps anonymously to the local \'Stop Fracking\' chapter. Let public pressure force the company to move."',
                    th: '🌍 ปล่อยข่าวให้กลุ่มสิ่งแวดล้อม:"ส่งแผนที่รอยเลื่อนแบบไม่ระบุชื่อไปยังกลุ่ม \'หยุด Fracking\' ท้องถิ่น ให้แรงกดดันจากสาธารณะบังคับให้บริษัทต้องย้าย"',
                    zh: '🌍 泄露给环保组织："匿名将断层地图发送给当地的\'停止水力压裂\'分会。让公众压力迫使公司搬迁。"'
                },
                consequence: {
                    en: '🔥 Project Cancelled! The leaked maps go viral. Protesters block the site. The company cancels the project and investigates the leak. They suspect you. You lose the contract and get sued for NDA breach, though they can\'t fully prove it. Legal fees bankrupt you.',
                    th: '🔥 โครงการถูกยกเลิก! แผนที่ที่หลุดออกไปกลายเป็นไวรัล ผู้ประท้วงปิดกั้นสถานที่ บริษัทเลิกโครงการและสืบสวนการรั่วไหล พวกเขาสงสัยคุณ คุณเสียสัญญาและถูกฟ้องฐานละเมิด NDA แม้ว่าพวกเขาจะพิสูจน์ไม่ได้เต็มที่ ค่าธรรมเนียมกฎหมายทำให้คุณล้มละลาย',
                    zh: '🔥 项目取消！泄露的地图病毒式传播。抗议者封锁现场。公司取消项目并调查泄密事件。他们怀疑你。你失去了合同并因违反保密协议被起诉，尽管他们不能完全证明。法律费用让你破产。'
                },
                stats: { competence: 20, ethics: 35, leadership: 10, innovation: 15 }
            }
        ]
    },
    // ... continue generating questions 4-50 following this structure
    // Since I cannot output 50 full questions in one go due to token limits, 
    // I will generate the file in chunks. The user asked for the FULL file.
    // I will provide a substantial set of questions now (1-10) and then the user can request more or I can append.
    // Wait, the prompt implies"overwrite". I will write as many as I fit. 
    // Let's aim for 15 solid questions first to ensure high quality and fit the token limit, 
    // then I can add more via append or the user can prompt to continue.

    // ... Question 4 ...
    {
        id: 'geo_004',
        text: {
            en: '💎 The Blood Diamond Doubt: You are verifying a diamond yield in a conflict zone in Africa for a legitimate Canadian miner. The yield is unusually high—too high for this alluvial deposit. You suspect the local warlord is"salting"the mine with illicit diamonds to launder them through your client\'s supply chain.',
            th: '💎 ข้อสงสัยเพชรเลือด: คุณกำลังตรวจสอบผลผลิตเพชรในเขตขัดแย้งในแอฟริกาสำหรับผู้ทำเหมืองแคนาดาที่ถูกกฎหมาย ผลผลิตสูงผิดปกติ—สูงเกินไปสำหรับแหล่งตะกอนน้ำพานี้ คุณสงสัยว่าขุนศึกท้องถิ่นกำลัง"โรยเกลือ"(ปลอมปน) เหมืองด้วยเพชรผิดกฎหมายเพื่อฟอกผ่านห่วงโซ่อุปทานของลูกค้าคุณ',
            zh: '💎 血钻疑云：你正在非洲冲突地区为一家合法的加拿大矿业公司核实钻石产量。产量高得不寻常——对于这种冲积矿床来说太高了。你怀疑当地军阀正在用非法钻石"掺假"矿山，以便通过你客户的供应链清洗它们。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔬 Isotope Trace Analysis:"I secretly take random samples back to the lab for trace element analysis to fingerprint their origin. It will take 2 weeks, delaying the shipment."',
                    th: '🔬 การวิเคราะห์ร่องรอยไอโซโทป:"ฉันแอบนำตัวอย่างสุ่มกลับไปที่ห้องแล็บเพื่อวิเคราะห์ธาตุร่องรอยเพื่อระบุแหล่งกำเนิด มันจะใช้เวลา 2 สัปดาห์ ทำให้การขนส่งล่าช้า"',
                    zh: '🔬 同位素示踪分析："我秘密地将随机样本带回实验室进行微量元素分析，以确定其来源指纹。这将需要2周，推迟发货。"'
                },
                consequence: {
                    en: '🕵️ Fraud Exposed! The analysis proves 40% of diamonds are from a blood-diamond region 200km away. You present undeniable proof. The client terminates the local partnership immediately. You dodge a massive UN sanctions scandal. Your forensic geology skills are legendary.',
                    th: '🕵️ การโกงถูกเปิดเผย! การวิเคราะห์พิสูจน์ว่า 40% ของเพชรมาจากเขตเพชรเลือดห่างออกไป 200 กม. คุณนำเสนอหลักฐานที่ปฏิเสธไม่ได้ ลูกค้ายกเลิกหุ้นส่วนท้องถิ่นทันที คุณหลบเลี่ยงเรื่องอื้อฉาวการคว่ำบาตรของ UN ครั้งใหญ่ ทักษะธรณีวิทยานิติวิทยาศาสตร์ของคุณเป็นตำนาน',
                    zh: '🕵️ 欺诈曝光！分析证明40%的钻石来自200公里外的血钻区。你提供了无可辩驳的证据。客户立即终止了当地的合作伙伴关系。你躲过了一场巨大的联合国制裁丑闻。你的法医地质学技能成为传奇。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 45 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 certify the Yield:"It\'s not my job to play detective. The stones are in the ground, I saw them dug up. I certify the count and geology as witnessed."',
                    th: '🤐 รับรองผลผลิต:"ไม่ใช่งานของฉันที่จะเล่นเป็นนักสืบ หินอยู่ในดิน ฉันเห็นมันถูกขุดขึ้นมา ฉันรับรองจำนวนและธรณีวิทยาตามที่เห็น"',
                    zh: '🤐 认证产量："扮演侦探不是我的工作。石头在地里，我看到它们被挖出来。我根据目击情况认证数量和地质。"'
                },
                consequence: {
                    en: '🩸 Complicit in Crimes! The diamonds flow. The warlord uses profits to buy weapons. A year later, a whistleblower exposes the scheme. Your signature is on the certification. You are indicted for aiding smuggling. Career over. Prison time likely.',
                    th: '🩸 สมรู้ร่วมคิดในอาชญากรรม! เพชรไหลเวียน ขุนศึกใช้กำไรซื้ออาวุธ หนึ่งปีต่อมา ผู้เปิดโปงเปิดเผยแผนการ ลายเซ็นของคุณอยู่บนใบรับรอง คุณถูกฟ้องข้อหาช่วยเหลือการลักลอบขนของเถื่อน อาชีพจบสิ้น มีโอกาสติดคุก',
                    zh: '🩸 同谋犯罪！钻石流通。军阀利用利润购买武器。一年后，一名举报人揭露了这一阴谋。你的签名在证书上。你因协助走私而被起诉。职业生涯结束。可能会坐牢。'
                },
                stats: { competence: 20, ethics: -50, leadership: -40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '👮 Alert the Client Security:"I tell the client\'s security chief my suspicions immediately. Ask for armed protection before investigating further."',
                    th: '👮 แจ้งฝ่ายความปลอดภัยลูกค้า:"ฉันบอกหัวหน้าฝ่ายความปลอดภัยของลูกค้าเกี่ยวกับข้อสงสัยของฉันทันที ขอความคุ้มครองพร้อมอาวุธก่อนตรวจสอบเพิ่มเติม"',
                    zh: '👮 提醒客户安保："我立即将我的怀疑告诉客户的安保主管。在进一步调查之前要求武装保护。"'
                },
                consequence: {
                    en: '⚔️ Dangerous Escalation! The security chief was bribed by the warlord. They hold you hostage for"visa irregularities."It takes a government intervention and $500k ransom to free you. You survive, but you are traumatized and lose your field credentials.',
                    th: '⚔️ การยกระดับที่อันตราย! หัวหน้าฝ่ายความปลอดภัยได้รับสินบนจากขุนศึก พวกเขาจับคุณเป็นตัวประกันข้อหา"ความผิดปกติของวีซ่า"ต้องใช้การแทรกแซงของรัฐบาลและค่าไถ่ $500k เพื่อปล่อยตัวคุณ คุณรอดมาได้ แต่คุณมีบาดแผลทางใจและเสียเครดิตการทำงานภาคสนาม',
                    zh: '⚔️ 危险升级！安保主管被军阀收买了。他们以"签证违规"为由扣押你作为人质。需要政府干预和50万美元赎金才能释放你。你活了下来，但身心受创并失去了野外工作资格。'
                },
                stats: { competence: 30, ethics: 30, leadership: 10, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Report"Inconsistent Geology":"I write a report stating the deposit geology does not match the yield quality, recommending a full suspension of operations for a \'geological audit\'."',
                    th: '📉 รายงาน"ธรณีวิทยาไม่สอดคล้อง":"ฉันเขียนรายงานระบุว่าธรณีวิทยาของแหล่งแร่ไม่ตรงกับคุณภาพผลผลิต แนะนำให้ระงับการดำเนินงานทั้งหมดเพื่อ \'การตรวจสอบทางธรณีวิทยา\'"',
                    zh: '📉 报告"地质不一致"："我写了一份报告，指出矿床地质与产量质量不符，建议为了\'地质审计\'全面暂停运营。"'
                },
                consequence: {
                    en: '🛑 Operational Pause! The confusing report freezes the supply chain. The warlord gets impatient and moves operations elsewhere. The client loses money but avoids the dirty diamonds. You are fired for being"vague,"but you stopped the laundering successfully.',
                    th: '🛑 การหยุดชะงักของการดำเนินงาน! รายงานที่สับสนทำให้ห่วงโซ่อุปทานหยุดชะงัก ขุนศึกหมดความอดทนและย้ายการดำเนินงานไปที่อื่น ลูกค้าเสียเงินแต่หลีกเลี่ยงเพชรสกปรก คุณถูกไล่ออกข้อหา"คลุมเครือ"แต่คุณหยุดการฟอกเงินได้สำเร็จ',
                    zh: '🛑 运营暂停！令人困惑的报告冻结了供应链。军阀变得不耐烦，将业务转移到别处。客户损失了钱，但避开了肮脏的钻石。你因"含糊不清"被解雇，但你成功阻止了洗钱。'
                },
                stats: { competence: 40, ethics: 40, leadership: 25, innovation: 30 }
            }
        ]
    },
    {
        id: 'geo_005',
        text: {
            en: '🌊 The Deep Sea Mining Permit: A startup wants you to lead an environmental impact assessment for harvesting manganese nodules in the Pacific. The area contains unknown hydrothermal vent species. The pay is $300k/year. They need a report that shows"minimal disruption"to get the permit.',
            th: '🌊 ใบอนุญาตทำเหมืองทะเลลึก: สตาร์ทอัพต้องการให้คุณนำการประเมินผลกระทบสิ่งแวดล้อมสำหรับการเก็บเกี่ยวก้อนแมงกานีสในแปซิฟิก พื้นที่นี้มีสิ่งมีชีวิตปากปล่องความร้อนใต้ทะเลที่ไม่รู้จัก ค่าตอบแทน $300k/ปี พวกเขาต้องการรายงานที่แสดงให้เห็นว่ามี"การรบกวนน้อยที่สุด"เพื่อให้ได้ใบอนุญาต',
            zh: '🌊 深海采矿许可证：一家初创公司想让你领导一项评估太平洋锰结核开采环境影响的工作。该地区包含未知的热液喷口物种。薪水是30万美元/年。他们需要一份显示"干扰最小"的报告以获得许可证。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🐋 Design Low-Impact Tech:"I accept, but only if I can design the harvesting protocols personally to avoid vents by 5km buffers. I will not sign off on \'minimal disruption\' without engineering controls."',
                    th: '🐋 ออกแบบเทคโนโลยีผลกระทบต่ำ:"ฉันรับงาน แต่ก็ต่อเมื่อฉันสามารถออกแบบโปรโทคอลการเก็บเกี่ยวด้วยตัวเองเพื่อหลีกเลี่ยงปากปล่องด้วยระยะกันชน 5 กม. ฉันจะไม่เซ็นรับรอง \'การรบกวนน้อยที่สุด\' โดยไม่มีการควบคุมทางวิศวกรรม"',
                    zh: '🐋 设计低影响技术："我接受，但前提是我能亲自设计采集协议，以5公里的缓冲区避开喷口。如果没有工程控制，我不会签署\'干扰最小\'。"'
                },
                consequence: {
                    en: '💡 Innovation Breakthrough! You force them to use expensive hovering collectors. It works. The biodiversity is preserved. The company wins the"Sustainable Ocean"award. You set the global standard for responsible deep-sea mining.',
                    th: '💡 ความก้าวหน้าทางนวัตกรรม! คุณบังคับให้พวกเขาใช้เครื่องเก็บเกี่ยวแบบลอยตัวที่ราคาแพง มันได้ผล ความหลากหลายทางชีวภาพได้รับการอนุรักษ์ บริษัทได้รับรางวัล"มหาสมุทรยั่งยืน"คุณกำหนดมาตรฐานระดับโลกสำหรับการทำเหมืองทะเลลึกอย่างมีความรับผิดชอบ',
                    zh: '💡 创新突破！你强迫他们使用昂贵的悬停采集器。这很有效。生物多样性得以保存。公司获得了"可持续海洋"奖。你为负责任的深海采矿设定了全球标准。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '✍️ Write the Desired Report:"The seafloor is vast. Statistically, we are only affecting 0.01% of the area. I focus on the vast emptiness rather than the biological hotspots."',
                    th: '✍️ เขียนรายงานตามที่ต้องการ:"พื้นทะเลกว้างใหญ่ ในทางสถิติ เรากระทบพื้นที่เพียง 0.01% ฉันโฟกัสที่ความว่างเปล่าอันกว้างใหญ่แทนที่จะเป็นจุดร้อนทางชีวภาพ"',
                    zh: '✍️ 撰写所需的报告："海底是巨大的。统计上，我们只影响了0.01%的区域。我专注于巨大的空旷区域，而不是生物热点。"'
                },
                consequence: {
                    en: '⛈️ Ecological Backlash! The permits are granted. Mining begins. Sediment plumes kill a rare tube worm colony found nowhere else on Earth. Marine biologists name the extinction after you (mockingly). You are rich but despised in the scientific community.',
                    th: '⛈️ ผลกระทบทางนิเวศวิทยา! ใบอนุญาตได้รับอนุมัติ การทำเหมืองเริ่มขึ้น ตะกอนฟุ้งกระจายฆ่าอาณานิคมหนอนท่อหายากที่ไม่พบที่อื่นในโลก นักชีววิทยาทางทะเลตั้งชื่อการสูญพันธุ์ตามคุณ (อย่างล้อเลียน) คุณรวยแต่เป็นที่รังเกียจในวงการวิทยาศาสตร์',
                    zh: '⛈️ 生态反弹！许可证获批。采矿开始。沉积物羽流杀死了一种地球上其他地方都没有的稀有管虫群落。海洋生物学家用你的名字命名这次灭绝（嘲讽地）。你很富有，但在科学界受到鄙视。'
                },
                stats: { competence: 30, ethics: -30, leadership: 10, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '📡 Demand a 2-Year Study:"We know nothing about these depths. I require a 2-year baseline biodiversity study before any extraction recommendations can be made."',
                    th: '📡 เรียกร้องการศึกษา 2 ปี:"เราไม่รู้อะไรเลยเกี่ยวกับความลึกเหล่านี้ ฉันต้องการการศึกษาพื้นฐานความหลากหลายทางชีวภาพ 2 ปี ก่อนที่จะให้คำแนะนำการสกัดใดๆ"',
                    zh: '📡 要求进行2年的研究："我们对这些深度一无所知。在提出任何开采建议之前，我要求进行为期2年的生物多样性基线研究。"'
                },
                consequence: {
                    en: '💸 Opportunity Lost: The startup says"we don\'t have the runway for that"and hires someone else. You watch from the sidelines as they proceed carelessly. You keep your integrity but had zero influence on the outcome. A frustrating reality of consulting.',
                    th: '💸 โอกาสที่สูญเสีย: สตาร์ทอัพบอกว่า"เราไม่มีเงินทุนสำหรับเรื่องนั้น"และจ้างคนอื่น คุณมองดูจากข้างสนามในขณะที่พวกเขาดำเนินการอย่างประมาท คุณรักษาความซื่อสัตย์แต่ไม่มีอิทธิพลต่อผลลัพธ์เลย ความจริงที่น่าหงุดหงิดของการเป็นที่ปรึกษา',
                    zh: '💸 机会错失：初创公司说"我们没有那样的资金跑道"并雇佣了其他人。你在一旁看着他们草率行事。你保持了正直，但对结果毫无影响。咨询业令人沮丧的现实。'
                },
                stats: { competence: 35, ethics: 45, leadership: 15, innovation: 25 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Partner with Pharma:"I approach a pharmaceutical company. These vents could hold cures for cancer. I propose a dual-use mission: genetic prospecting AND mineral harvesting. Diversify the value to justify stricter protection."',
                    th: '🤝 ร่วมมือกับฟาร์มา:"ฉันเข้าหาบริษัทเภสัชกรรม ปากปล่องเหล่านี้อาจมียารรักษามะเร็ง ฉันเสนอภารกิจการใช้งานคู่: การสำรวจพันธุกรรม และ การเก็บแร่ธาตุ กระจายมูลค่าเพื่อพิสูจน์ความจำเป็นในการปกป้องที่เข้มงวดขึ้น"',
                    zh: '🤝 与制药公司合作："我接洽一家制药公司。这些喷口可能含有治疗癌症的药物。我提议双重用途任务：基因勘探和矿物通过。多样化价值以证明更严格保护的合理性。"'
                },
                consequence: {
                    en: '🧬 The Blue Bio-Economy! The pharma money flows in, funding the expensive protection tech the miners couldn\'t afford. You barely mine any manganese because the genetic patents prove more valuable. You accidentally pivoted a mining company into a biotech firm.',
                    th: '🧬 เศรษฐกิจชีวภาพสีน้ำเงิน! เงินจากบริษัทยาไหลเข้ามา ให้ทุนเทคโนโลยีป้องกันแพงๆ ที่นักขุดจ่ายไม่ไหว คุณแทบไม่ได้ขุดแมงกานีสเลยเพราะสิทธิบัตรพันธุกรรมมีค่ามากกว่า คุณบังเอิญเปลี่ยนบริษัทเหมืองแร่ให้เป็นบริษัทไบโอเทค',
                    zh: '🧬 蓝色生物经济！制药资金涌入，资助了矿工负担不起的昂贵保护技术。你几乎没开采任何锰，因为基因专利更有价值。你意外地将一家矿业公司转型为生物技术公司。'
                },
                stats: { competence: 40, ethics: 45, leadership: 40, innovation: 50 }
            }
        ]
    },

    // SECTION 2: RESOURCE MANAGEMENT & GEOTECHNICAL ENGINEERING (Questions 6-15)

    {
        id: 'geo_006',
        text: {
            en: '🧊 The Glacier Melt Warning: You are monitoring a glacier feeding a major hydroelectric dam. Your models predict a heatwave will cause a"melt pulse"that could overtop the dam, threatening the village below. The energy company argues your model is"alarmist"and refusing to lower water levels (losing millions in power generation).',
            th: '🧊 คำเตือนการละลายของธารน้ำแข็ง: คุณกำลังเฝ้าติดตามธารน้ำแข็งที่ส่งน้ำให้เขื่อนผลิตไฟฟ้าพลังน้ำขนาดใหญ่ โมเดลของคุณทำนายว่าคลื่นความร้อนจะทำให้เกิด"ชีพจรการละลาย"ที่อาจล้นเขื่อนและคุกคามหมู่บ้านด้านล่าง บริษัทพลังงานโต้แย้งว่าโมเดลของคุณ"ตื่นตูม"และปฏิเสธที่จะลดระดับน้ำ (สูญเสียรายได้จากการผลิตไฟฟ้าหลายล้าน)',
            zh: '🧊 冰川融化警告：你正在监测一条为大型水电大坝供水的冰川。你的模型预测热浪将导致"融化脉冲"，可能漫过大坝，威胁下方的村庄。能源公司争辩说你的模型是"危言耸听"，并拒绝降低水位（损失数百万发电收入）。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Leak to the Village Mayor:"I meet the mayor secretly. tell him to demand a water release. I provide the data he needs to pressure the company."',
                    th: '📢 ปล่อยข่าวให้นายกเทศมนตรีประจำหมู่บ้าน:"ฉันพบนายกเทศมนตรีอย่างลับๆ บอกเขาให้เรียกร้องการระบายน้ำ ฉันให้ข้อมูลที่เขาต้องใช้กดดันบริษัท"',
                    zh: '📢 向村长泄密："我秘密会见村长。告诉他要求放水。我提供他对公司施压所需的数据。"'
                },
                consequence: {
                    en: '⚖️ Crisis Averted, Trust Broken! The mayor rallies the press. The company is forced to release water. The melt pulse hits, the dam holds. You are sued for NDA breach but the village treats you like family. You can never work for big energy again.',
                    th: '⚖️ วิกฤตหลีกเลี่ยงได้ แต่ความเชื่อใจพังทลาย! นายกเทศมนตรีระดมสื่อ บริษัทถูกบังคับให้ระบายน้ำ ชีพจรการละลายมาถึง เขื่อนรับไหว คุณถูกฟ้องฐานละเมิด NDA แต่หมู่บ้านดูแลคุณเหมือนครอบครัว คุณไม่สามารถทำงานให้บริษัทพลังงานยักษ์ใหญ่ได้อีก',
                    zh: '⚖️ 危机得以避免，信任破裂！村长召集媒体。公司被迫放水。融化脉冲袭来，大坝保住了。你因违反保密协议被起诉，但村里人待你如家人。你再也不能为大能源公司工作了。'
                },
                stats: { competence: 40, ethics: 45, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '📊 Formal Safety Override:"I invoke the \'Imminent Danger Clause\' in my contract. I officially advise the state regulator directly, putting my license on the line."',
                    th: '📊 การใช้อำนาจความปลอดภัยอย่างเป็นทางการ:"ฉันใช้ \'ข้อกำหนดอันตรายที่ใกล้จะถึง\' ในสัญญาของฉัน ฉันแจ้งหน่วยงานกำกับดูแลของรัฐโดยตรงอย่างเป็นทางการ โดยเอาใบอนุญาตของฉันเป็นประกัน"',
                    zh: '📊 正式安全覆盖："我援引合同中的\'迫在眉睫的危险条款\'。我正式直接建议州监管机构，拿我的执照冒险。"'
                },
                consequence: {
                    en: '🏆 Professional Triumph! The regulator steps in. Water is released. The company is fined for ignoring you. You are recognized as a Geologist of fierce integrity. Your consultancy rates double.',
                    th: '🏆 ชัยชนะทางวิชาชีพ! หน่วยงานกำกับดูแลเข้ามาแทรกแซง น้ำถูกระบาย บริษัทถูกปรับที่เพิกเฉยต่อคุณ คุณได้รับการยอมรับว่าเป็นนักธรณีวิทยาที่มีความซื่อสัตย์อย่างรุนแรง ค่าตัวที่ปรึกษาของคุณเพิ่มเป็นสองเท่า',
                    zh: '🏆 职业胜利！监管机构介入。水被释放。公司因忽视你而被罚款。你被公认为具有极高诚信的地质学家。你的咨询费率翻倍。'
                },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Propose a Controlled Spill:"I negotiate a compromise. We release 50% of the recommended amount now, and install real-time sensors to release more only if the pulse starts. Efficient and safe."',
                    th: '🤝 เสนอการระบายน้ำแบบควบคุม:"ฉันเจรจาประนีประนอม เราเร่งระบายน้ำ 50% ของจำนวนที่แนะนำตอนนี้ และติดตั้งเซ็นเซอร์เรียลไทม์เพื่อระบายเพิ่มเฉพาะเมื่อชีพจรการละลายเริ่มขึ้น มีประสิทธิภาพและปลอดภัย"',
                    zh: '🤝 提议控制性泄洪："我协商折中方案。我们现在释放建议量的50%，并安装实时传感器，仅在脉冲开始时释放更多。高效且安全。"'
                },
                consequence: {
                    en: '🌊 The Risky Middle! The pulse is stronger than expected. The dam barely holds. There is minor flooding in the village fields. Both sides are angry at you—the village for the flood, the company for the lost water. Compromise isn\'t always the answer to physics.',
                    th: '🌊 ทางสายกลางที่เสี่ยง! ชีพจรการละลายแรงกว่าที่คาด เขื่อนเกือบรับไม่ไหว มีน้ำท่วมเล็กน้อยในทุ่งนาของหมู่บ้าน ทั้งสองฝ่ายโกรธคุณ—หมู่บ้านโกรธเรื่องน้ำท่วม บริษัทโกรธเรื่องน้ำที่หายไป การประนีประนอมไม่ใช่คำตอบของฟิสิกส์เสมอไป',
                    zh: '🌊 危险的中间路线！脉冲比预期的更强。大坝勉强支撑。村里的田地发生了轻微洪水。双方都对你生气——村里人因为洪水，公司因为损失的水。妥协并不总是物理问题的答案。'
                },
                stats: { competence: 30, ethics: 30, leadership: 25, innovation: 35 }
            },
            {
                id: 'D',
                text: {
                    en: '💻 Recalibrate the Model:"Maybe the data is alarming. I\'ll adjust the friction coefficients to be less conservative. Let\'s see if we can get a result the client likes better."',
                    th: '💻 ปรับเทียบโมเดลใหม่:"บางทีข้อมูลอาจจะดูน่ากลัวไป ฉันจะปรับสัมประสิทธิ์แรงเสียดทานให้ระมัดระวังน้อยลง มาดูกันว่าเราจะได้ผลลัพธ์ที่ลูกค้าชอบมากกว่าไหม"',
                    zh: '💻 重新校准模型："也许数据令人担忧。我会调整摩擦系数，使其不那么保守。让我们看看能否得到客户更喜欢的结果。"'
                },
                consequence: {
                    en: '💀 Catastrophic Failure! The dam overflows. The structural integrity is compromised. The village is flooded (luckily no deaths, but massive damage). The investigation finds your"adjusted"model. You face criminal negligence charges.',
                    th: '💀 ความล้มเหลวหายนะ! เขื่อนล้น ความสมบูรณ์ของโครงสร้างเสียหาย หมู่บ้านถูกน้ำท่วม (โชคดีไม่มีผู้เสียชีวิต แต่เสียหายมหาศาล) การสอบสวนพบโมเดลที่"ปรับแต่ง"ของคุณ คุณเผชิญข้อหาประมาทเลินเล่อทางอาญา',
                    zh: '💀 灾难性失败！大坝溢流。结构完整性受损。村庄被淹（幸好没有死亡，但损失巨大）。调查发现了你"调整过"的模型。你面临刑事过失指控。'
                },
                stats: { competence: -30, ethics: -50, leadership: -40, innovation: -10 }
            }
        ]
    },
    {
        id: 'geo_007',
        text: {
            en: '🔋 The Rare Earth Dilemma: You find a high-grade deposit of Neodymium (crucial for EV motors) in a rainforest reserve. The law allows extraction if"strategic national interest"is proven. The habitat is home to a critically endangered primate. The government asks for your recommendation.',
            th: '🔋 ภาวะกลืนไม่เข้าคายไม่ออกของแร่หายาก: คุณพบแหล่งแร่นีโอไดเมียมเกรดสูง (สำคัญสำหรับมอเตอร์ EV) ในเขตอนุรักษ์ป่าฝน กฎหมายอนุญาตให้ขุดเจาะได้หากพิสูจน์ได้ว่าเป็น"ผลประโยชน์เชิงยุทธศาสตร์ของชาติ"ถิ่นที่อยู่นี้เป็นบ้านของสัตว์ตระกูลลิงที่ใกล้สูญพันธุ์อย่างยิ่ง รัฐบาลขอคำแนะนำจากคุณ',
            zh: '🔋 稀土困境：你在雨林保护区发现了一个高品位的钕矿床（对电动汽车电机至关重要）。如果证明是"国家战略利益"，法律允许开采。该栖息地是一种极度濒危灵长类动物的家园。政府征求你的建议。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏗️ Recommend Extraction with Offsets:"The world needs EVs to fight climate change. I recommend mining 30% of the deposit and funding a new, larger reserve nearby for the primates."',
                    th: '🏗️ แนะนำการขุดเจาะพร้อมชดเชย:"โลกต้องการ EV เพื่อต่อสู้กับดลกร้อน ฉันแนะนำให้ขุด 30% ของแหล่งแร่และให้ทุนสร้างเขตอนุรักษ์ใหม่ที่ใหญ่กว่าใกล้เคียงสำหรับลิง"',
                    zh: '🏗️ 建议开采并补偿："世界需要电动汽车来对抗气候变化。我建议开采30%的矿床，并资助在附近为灵长类动物建立一个新的、更大的保护区。"'
                },
                consequence: {
                    en: '⚖️ The Utilitarian Choice! The mine opens. The primates are moved. 20% die in transport, but the rest thrive in the new park. EV production costs drop globally. You are praised by economists but hated by strict conservationists. A tough but impactful trade-off.',
                    th: '⚖️ ทางเลือกแบบอรรถประโยชน์! เหมืองเปิด ลิงถูกย้าย 20% ตายระหว่างขนย้าย แต่ที่เหลือเติบโตในสวนใหม่ ต้นทุนการผลิต EV ลดลงทั่วโลก คุณได้รับคำชมจากนักเศรษฐศาสตร์แต่ถูกเกลียดชังโดยนักอนุรักษ์ที่เข้มงวด การแลกเปลี่ยนที่ยากแต่มีผลกระทบ',
                    zh: '⚖️ 功利主义的选择！矿山开业。灵长类动物被转移。20%在运输途中死亡，但其余的在新公园里茁壮成长。全球电动汽车生产成本下降。你受到经济学家的称赞，但被严格的环保主义者憎恨。一个艰难但有影响力的权衡。'
                },
                stats: { competence: 45, ethics: 20, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Deny the Permit:"This ecosystem is irreplaceable. No amount of Neodymium is worth extinction. I classify the site as \'Geologically Unstable\' to block mining legally."',
                    th: '🛡️ ปฏิเสธใบอนุญาต:"ระบบนิเวศนี้ไม่สามารถทดแทนได้ นีโอไดเมียมจำนวนเท่าใดก็ไม่คุ้มกับการสูญพันธุ์ ฉันจัดประเภทพื้นที่นี้ว่า \'ไม่มั่นคงทางธรณีวิทยา\' เพื่อปิดกั้นการทำเหมืองตามกฎหมาย"',
                    zh: '🛡️ 拒绝许可证："这个生态系统是不可替代的。再多的钕也不值得以灭绝为代价。我将该地点归类为\'地质不稳定\'以从法律上阻止采矿。"'
                },
                consequence: {
                    en: '🌳 Guardian of Nature! The forest is saved. The primates survive. The government is furious and investigates your"unstable"claim. You lose your government clearance but win a prestigious global environmental prize.',
                    th: '🌳 ผู้พิทักษ์ธรรมชาติ! ป่าได้รับการรักษา ลิงรอดชีวิต รัฐบาลโกรธจัดและสอบสวนข้ออ้าง"ไม่มั่นคง"ของคุณ คุณเสียสิทธิ์เข้าถึงข้อมูลรัฐบาลแต่ชนะรางวัลสิ่งแวดล้อมระดับโลก',
                    zh: '🌳 自然守护者！森林保住了。灵长类动物幸存下来。政府非常愤怒并调查你的"不稳定"声明。你失去了政府许可，但赢得了著名的全球环境奖。'
                },
                stats: { competence: 30, ethics: 50, leadership: 35, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔬 Develop In-Situ Leaching:"We don\'t open-pit mine. We use bio-mining bacteria to leach the metal without cutting trees. It\'s experimental and expensive, but saves the forest."',
                    th: '🔬 พัฒนาการชะละลายในที่:"เราไม่ทำเหมืองเปิด เราใช้แบคทีเรียชีวภาพเพื่อชะล้างโลหะโดยไม่ตัดต้นไม้ มันเป็นเรื่องทดลองและแพง แต่รักษาป่าไว้"',
                    zh: '🔬 开发原地浸出："我们不进行露天开采。我们利用生物采矿细菌在不砍伐树木的情况下浸出金属。这是实验性的且昂贵，但能拯救森林。"'
                },
                consequence: {
                    en: '🧪 Technological Triumph! The pilot works. Yield is low, but the forest is untouched. You pioneer a new field of"Eco-Mining."Stocks in bio-mining tech soar. You become a wealthy visionary.',
                    th: '🧪 ชัยชนะทางเทคโนโลยี! โครงการนำร่องได้ผล ผลผลิตต่ำ แต่ป่าไม่ถูกแตะต้อง คุณบุกเบิกสาขาใหม่ของ"Eco-Mining"หุ้นในเทคโนโลยีเหมืองชีวภาพพุ่งสูง คุณกลายเป็นผู้มีวิสัยทัศน์ที่ร่ำรวย',
                    zh: '🧪 技术胜利！试点工作奏效。产量虽低，但森林未受影响。你开创了"生态采矿"的新领域。生物采矿技术股票飙升。你成为富有的远见卓识者。'
                },
                stats: { competence: 50, ethics: 45, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤫 Secret Extraction Zone:"We re-draw the map boundaries so the deposit falls just \'outside\' the reserve. It\'s a clerical error fix. We mine fast and quietly."',
                    th: '🤫 เขตขุดเจาะลับ:"เราวาดเส้นขอบเขตแผนที่ใหม่เพื่อให้แหล่งแร่ตกอยู่ \'ข้างนอก\' เขตอนุรักษ์พอดี มันเป็นการแก้ไขข้อผิดพลาดทางธุรการ เราขุดเร็วและเงียบ"',
                    zh: '🤫 秘密开采区："我们将地图边界重新划定，使矿床刚好落在保护区\'之外\'。这只是文书错误的修复。我们快速且悄悄地开采。"'
                },
                consequence: {
                    en: '🕵️ Scandal and Ruin! Satellite imagery exposes the deforestation. The"boundary shift"is traced to your login. You are charged with corruption and environmental destruction. You flee the country.',
                    th: '🕵️ เรื่องอื้อฉาวและความหายนะ! ภาพถ่ายดาวเทียมเปิดเผยการตัดไม้ทำลายป่า"การเลื่อนขอบเขต"ถูกติดตามกลับมาที่ล็อกอินของคุณ คุณถูกตั้งข้อหาคอร์รัปชันและทำลายสิ่งแวดล้อม คุณหนีออกนอกประเทศ',
                    zh: '🕵️ 丑闻和毁灭！卫星图像曝光了森林砍伐。"边界转移"被追踪到你的登录。你被指控腐败和破坏环境。你逃离了这个国家。'
                },
                stats: { competence: 20, ethics: -50, leadership: -30, innovation: 10 }
            }
        ]
    },
    {
        id: 'geo_008',
        text: {
            en: '🏙️ The Skyscraper Sinkhole: You are the lead geotechnical engineer for a 100-story tower in Dubai. During excavation, you find a massive limestone cavity (void) 50 meters down. The timeline is tight. Filling it with concrete will cost $5M and take 3 weeks. The developer suggests"bridging"over it with steel.',
            th: '🏙️ หลุมยุบตึกระฟ้า: คุณเป็นวิศวกรธรณีเทคนิคนำสำหรับตึก 100 ชั้นในดูไบ ระหว่างการขุดเจาะ คุณพบโพรงหินปูนขนาดใหญ่ลึก 50 เมตร กำหนดการแน่นมาก การเติมคอนกรีตจะใช้เงิน $5M และเวลา 3 สัปดาห์ ผู้พัฒนาแนะนำให้"สร้างสะพาน"ข้ามด้วยเหล็ก',
            zh: '🏙️ 摩天大楼天坑：你是迪拜一座100层塔楼的首席岩土工程师。在挖掘过程中，你在地下50米处发现了一个巨大的石灰岩空洞。工期很紧。用混凝土填充将耗资500万美元并耗时3周。开发商建议用钢铁"架桥"跨过它。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Stop Work Order:"Absolutely not. Bridging is a temporary fix for a 100-year structure. I order a full stop until the void is pressure-grouted. Safety is non-negotiable."',
                    th: '🛑 สั่งหยุดงาน:"ไม่ได้เด็ดขาด การสร้างสะพานเป็นวิธีแก้ชั่วคราวสำหรับโครงสร้าง 100 ปี ฉันสั่งหยุดงานทั้งหมดจนกว่าโพรงจะถูกอัดฉีดด้วยแรงดัน ความปลอดภัยต่อรองไม่ได้"',
                    zh: '🛑 停工令："绝对不行。对于一个百年结构来说，架桥只是临时修复。我命令全面停工，直到空洞被压力注浆填满。安全是不可谈判的。"'
                },
                consequence: {
                    en: '🛡️ Expensive Integrity! The developer screams, threatens, but complies. The tower is delayed. But 5 years later, a nearby tower tilts due to similar soil issues, while yours stands perfectly straight. You become the most trusted engineer in the region.',
                    th: '🛡️ ความซื่อสัตย์ราคาแพง! ผู้พัฒนากรีดร้อง ข่มขู่ แต่ยอมทำตาม ตึกล่าช้า แต่ 5 ปีต่อมา ตึกใกล้เคียงเอียงเพราะปัญหาดินคล้ายกัน ในขณะที่ตึกของคุณตั้งตรงอย่างสมบูรณ์ คุณกลายเป็นวิศวกรที่ได้รับความไว้วางใจสูงสุดในภูมิภาค',
                    zh: '🛡️ 昂贵的正直！开发商尖叫、威胁，但还是照办了。塔楼延期了。但5年后，附近的一座塔楼因类似的土壤问题倾斜，而你的塔楼依然笔直挺立。你成为该地区最受信任的工程师。'
                },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🏗️ Accept the Bridge Strategy:"The steel beam load calculations theoretically work. It\'s risky but innovative. We proceed carefully with sensors watching for settlement."',
                    th: '🏗️ ยอมรับกลยุทธ์สะพาน:"การคำนวณโหลดคานเหล็กในทางทฤษฎีใช้ได้ มันเสี่ยงแต่เป็นนวัตกรรม เราดำเนินการอย่างระมัดระวังพร้อมเซ็นเซอร์เฝ้าระวังการทรุดตัว"',
                    zh: '🏗️ 接受架桥策略："钢梁载荷计算理论上是可行的。这很有风险但很创新。我们小心推进，并用传感器监测沉降。"'
                },
                consequence: {
                    en: '📉 The Slow Sink! The tower is built. Year 1 is fine. Year 3, it sinks 15cm on one side. Elevators jam. Glass panels crack. The retrofit to fix it costs $100M. The developer sues you for"approving a flawed design."Nightmare scenario.',
                    th: '📉 การจมอย่างช้าๆ! ตึกถูกสร้าง ปีที่ 1 ปกติ ปีที่ 3 มันจมลง 15 ซม. ด้านหนึ่ง ลิฟต์ติดขัด แผงกระจกแตก การซ่อมแซมย้อนหลังใช้เงิน $100M ผู้พัฒนาฟ้องคุณข้อหา"อนุมัติการออกแบบที่มีข้อบกพร่อง"สถานการณ์ฝันร้าย',
                    zh: '📉 缓慢下沉！塔楼建成。第1年还好。第3年，它在一侧下沉了15厘米。电梯卡住。玻璃板破裂。修复工程耗资1亿美元。开发商起诉你"批准了有缺陷的设计"。噩梦般的场景。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '💡 Innovate with Geopolymer Injection:"Concrete is too slow. Let\'s use expanding geopolymer resin. It cures in 24 hours and fills the void. It costs $7M, but saves 3 weeks."',
                    th: '💡 นวัตกรรมด้วยการฉีดจีโอพอลิเมอร์:"คอนกรีตช้าเกินไป มาใช้เรซินจีโอพอลิเมอร์ขยายตัว มันเซ็ตตัวใน 24 ชั่วโมงและเต็มโพรง ค่าใช้จ่าย $7M แต่ประหยัดเวลา 3 สัปดาห์"',
                    zh: '💡 地聚合物注射创新："混凝土太慢了。让我们使用膨胀地聚合物树脂。它在24小时内固化并填充空洞。花费700万美元，但节省3周时间。"'
                },
                consequence: {
                    en: '🚀 Engineering Genius! The developer balks at the price but loves the speed. The solution works perfectly. You write a paper on"Rapid Void Mitigation in Skyscrapers."You get a bonus equal to the time saved.',
                    th: '🚀 อัจฉริยะวิศวกรรม! ผู้พัฒนาชะงักกับราคาแต่ชอบความเร็ว วิธีแก้ปัญหาได้ผลสมบูรณ์ คุณเขียนบทความเรื่อง"การบรรเทาโพรงอย่างรวดเร็วในตึกระฟ้า"คุณได้รับโบนัสเท่ากับเวลาที่ประหยัดได้',
                    zh: '🚀 工程天才！开发商对价格犹豫不决，但喜欢这种速度。解决方案完美奏效。你写了一篇关于"摩天大楼快速空洞缓解"的论文。你获得了相当于节省时间的奖金。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤷 Ignore Small Voids:"The scan resolution is tricky. Let\'s argue it\'s just loose sand, not a void. Run the piles deeper and hope friction holds it."',
                    th: '🤷 เพิกเฉยต่อโพรงเล็กๆ:"ความละเอียดการสแกนมันหลอกตา มาอ้างว่าเป็นแค่ทรายร่วน ไม่ใช่โพรง ตอกเสาเข็มให้ลึกขึ้นและหวังว่าแรงเสียดทานจะเอาอยู่"',
                    zh: '🤷 忽略小空洞："扫描分辨率很棘手。让我们争辩说这只是松散的沙子，而不是空洞。把桩打得更深些，希望摩擦力能支撑住。"'
                },
                consequence: {
                    en: '🎲 Rolling the Dice! It... actually works? The deep piles find bedrock. The void collapses around them but the friction holds. You saved money and time. But you know it was a gamble. You start cutting corners on other projects. Hubris sets in.',
                    th: '🎲 ทอยลูกเต๋า! มัน... ได้ผลจริงดิ? เสาเข็มลึกเจอชั้นหินดาน โพรงถล่มรอบๆ แต่แรงเสียดทานรับไหว คุณประหยัดเงินและเวลา แต่คุณรู้ว่ามันคือการพนัน คุณเริ่มลดสเปคในโครงการอื่น ความโอหังครอบงำ',
                    zh: '🎲 掷骰子！它……竟然奏效了？深桩找到了基岩。空洞在它们周围塌陷，但摩擦力支撑住了。你节省了金钱和时间。但你知道这是一场赌博。你开始在其他项目上偷工减料。傲慢滋生。'
                },
                stats: { competence: 25, ethics: -20, leadership: 20, innovation: 15 }
            }
        ]
    },
    {
        id: 'geo_009',
        text: {
            en: '🌌 The Mars Landing Site: You are on the selection committee for the next Mars rover. Site A is a flat plain—100% safe landing, but scientifically boring (basalt). Site B is a canyon edge—high crashing risk (30%), but potentially holds fossilized microbial mats (evidence of life). The mission costs $2.5B.',
            th: '🌌 จุดลงจอดดาวอังคาร: คุณอยู่ในคณะกรรมการคัดเลือกสำหรับรถสำรวจดาวอังคารคันต่อไป จุด A เป็นที่ราบเรียบ—ปลอดภัย 100% แต่ทางวิทยาศาสตร์น่าเบื่อ (บะซอลต์) จุด B เป็นขอบหุบเขา—เสี่ยงชนสูง (30%) แต่อาจมีแผ่นจุลินทรีย์ฟอสซิล (หลักฐานสิ่งมีชีวิต) ภารกิจมูลค่า $2.5B',
            zh: '🌌 火星着陆点：你是下一辆火星探测器的选址委员会成员。地点A是一个平原——100%安全着陆，但在科学上很无聊（玄武岩）。地点B是峡谷边缘——坠毁风险高（30%），但可能拥有化石微生物垫（生命证据）。任务耗资25亿美元。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛡️ Choose Site A (Safety):"We answer to taxpayers. We cannot risk losing a $2.5B asset on arrival. We land safe and drill deep. Maybe we find something under the basalt."',
                    th: '🛡️ เลือกจุด A (ความปลอดภัย):"เราต้องตอบคำถามผู้เสียภาษี เราไม่สามารถเสี่ยงสูญเสียทรัพย์สิน $2.5B ตั้งแต่มาถึง เราลงจอดปลอดภัยและเจาะลึก บางทีเราอาจเจออะไรใต้บะซอลต์"',
                    zh: '🛡️ 选择地点A（安全）："我们要向纳税人负责。我们不能冒险在抵达时就损失25亿美元的资产。我们安全着陆并深钻。也许我们在玄武岩下能发现什么。"'
                },
                consequence: {
                    en: '😐 Routine Success! The rover lands perfectly. It operates for 10 years. It finds... more basalt. Dust. Some interesting salts. The public loses interest in Mars. Funding for future missions is cut. You played it safe, and science stalled.',
                    th: '😐 ความสำเร็จตามระเบียบ! รถสำรวจลงจอดสมบูรณ์แบบ มันทำงาน 10 ปี มันเจอ... บะซอลต์เพิ่ม ฝุ่น เกลือที่น่าสนใจบ้าง สาธารณชนหมดความสนใจในดาวอังคาร เงินทุนสำหรับภารกิจในอนาคตถูกตัด คุณเพลย์เซฟ และวิทยาศาสตร์ก็ชะงัก',
                    zh: '😐 常规成功！探测器完美着陆。它运行了10年。它发现了……更多玄武岩。灰尘。一些有趣的盐。公众对火星失去了兴趣。未来任务的资金被削减。你为了安全行事，科学停滞不前。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 Choose Site B (Discovery):"No risk, no glory. If we want to find life, we go where the water was. I vote for the Canyon. I\'ll work overtime to improve the landing radar to lower the risk."',
                    th: '🚀 เลือกจุด B (การค้นพบ):"ไม่เสี่ยง ไม่รุ่ง ถ้าเราอยากเจอสิ่งมีชีวิต เราต้องไปที่ที่มีน้ำเคยอยู่ ฉันโหวตให้หุบเขา ฉันจะทำงานล่วงเวลาเพื่อปรับปรุงเรดาร์ลงจอดเพื่อลดความเสี่ยง"',
                    zh: '🚀 选择地点B（发现）："没有风险就没有荣耀。如果我们想发现生命，我们就去水曾经存在的地方。我投票给峡谷。我会加班改进着陆雷达以降低风险。"'
                },
                consequence: {
                    en: '🎉 History Made! The landing is terrifying. One wheel is damaged. BUT, right there in the cliff face: stromatolites! Proof of ancient life! The world goes wild. Humanity changes forever. You are a legend.',
                    th: '🎉 ประวัติศาสตร์ถูกสร้าง! การลงจอดน่าหวาดเสียว ล้อหนึ่งเสียหาย แต่ตรงนั้นที่หน้าผา: สโตรมาโตไลต์! หลักฐานของชีวิตโบราณ! โลกคลั่งไคล้ มนุษยชาติเปลี่ยนไปตลอดกาล คุณคือตำนาน',
                    zh: '🎉 创造历史！着陆过程令人惊恐。一个轮子损坏了。但是，就在悬崖面上：层叠石！古代生命的证据！世界沸腾了。人类永远改变了。你是个传奇。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 The Hybrid Approach:"We land at Site A, but equip the rover with a long-range autonomous breakdown mode to drive 20km to Site B over 2 years."',
                    th: '🤝 แนวทางผสมผสาน:"เราลงจอดที่จุด A แต่ติดตั้งโหมดขับเคลื่อนอัตโนมัติระยะไกลให้รถสำรวจเพื่อขับ 20 กม. ไปยังจุด B ในเวลา 2 ปี"',
                    zh: '🤝 混合方法："我们在地点A着陆，但这给探测器配备远程自主故障模式，以便在2年内行驶20公里到达地点B。"'
                },
                consequence: {
                    en: '⏳ The Long Trek! Reliable landing. Then, the most boring road trip in history. The rover gets stuck in a sand trap at km 12. Mission ends halfway. You tried to have it both ways and got neither.',
                    th: '⏳ การเดินทางอันยาวนาน! ลงจอดเชื่อถือได้ จากนั้นทริปที่น่าเบื่อที่สุดในประวัติศาสตร์ รถสำรวจติดหล่มทรายที่ กม. 12 ภารกิจจบลงกลางทาง คุณพยายามจะเอาทั้งสองอย่างแต่ไม่ได้อะไรเลย',
                    zh: '⏳ 漫长的跋涉！可靠着陆。然后是一场史上最无聊的公路旅行。探测器在第12公里处陷入沙坑。任务半途而废。你想两全其美，结果一无所获。'
                },
                stats: { competence: 30, ethics: 25, leadership: 30, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🚁 Push for the Drone:"Forget the rover wheels. Use the budget to add a heavy-lift helicopter drone that can fly from Safe Site A to Canyon B and fetch samples."',
                    th: '🚁 ผลักดันโดรน:"ลืมล้อรถสำรวจไปซะ ใช้งบประมาณเพิ่มโดรนเฮลิคอปเตอร์ยกของหนักที่บินจากจุดปลอดภัย A ไปหุบเขา B และเก็บตัวอย่างกลับมา"',
                    zh: '🚁 推动无人机："忘掉探测器轮子吧。利用预算增加一架重型直升机无人机，它可以从安全地点A飞到峡谷B并取回样本。"'
                },
                consequence: {
                    en: '🚁 Tech Pivot! The engineering team hates the redesign, but you push it. The drone works beautifully, hopping into the canyon and back. You revolutionized planetary exploration tactics.',
                    th: '🚁 การเปลี่ยนทิศทางเทคโนโลยี! ทีมวิศวกรเกลียดการออกแบบใหม่ แต่คุณผลักดันมัน โดรนทำงานอย่างงดงาม บินลงไปในหุบเขาและกลับมา คุณปฏิวัติกลยุทธ์การสำรวจดาวเคราะห์',
                    zh: '🚁 技术转型！工程团队讨厌重新设计，但你推动了它。无人机工作得很漂亮，跳进峡谷又回来。你彻底改变了行星探索战术。'
                },
                stats: { competence: 50, ethics: 35, leadership: 45, innovation: 50 }
            }
        ]
    },
    {
        id: 'geo_010',
        text: {
            en: '🦕 The Quarry Fossil: You are surveying a limestone quarry for a cement company. You notice crushed bone fragments in the conveyor belt. You trace it back to a blast zone and find the snout of a Tyrannosaurus-sized predator. The quarry owner says,"If we report this, they shut us down for years. Work halted. Crush it."',
            th: '🦕 ฟอสซิลในเหมืองหิน: คุณกำลังสำรวจเหมืองหินปูนสำหรับบริษัทปูนซีเมนต์ คุณสังเกตเห็นเศษกระดูกบดในสายพานลำเลียง คุณตามรอยกลับไปที่เขตระเบิดและพบจมูกของนักล่าขนาดไทแรนโนซอรัส เจ้าของเหมืองบอกว่า"ถ้าเรารายงานเรื่องนี้ เขาจะสั่งปิดเราเป็นปี งานหยุด บดมันซะ"',
            zh: '🦕 采石场化石：你正在为一家水泥公司勘测石灰石采石场。你注意到传送带上有碎骨片。你追踪回爆破区，发现了一只霸王龙大小的捕食者的口鼻部。采石场老板说："如果我们报告这个，他们会关我们好几年。工作停滞。把它粉碎掉。"'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Stand Firm:"I am legally obligated to report paleontological resources. I\'m calling the state museum now. Touch that wall and you go to jail."',
                    th: '🛑 ยืนกราน:"ฉันมีหน้าที่ตามกฎหมายที่ต้องรายงานทรัพยากรบรรพชีวินวิทยา ฉันจะโทรหาพิพิธภัณฑ์ของรัฐเดี๋ยวนี้ แตะผนังนั้นแล้วคุณติดคุก"',
                    zh: '🛑 立场坚定："我有法律义务报告古生物资源。我现在就给州博物馆打电话。碰那面墙你就去坐牢。"'
                },
                consequence: {
                    en: '🏛️ Science Saved, Job Lost! The quarry is seized by the state via eminent domain. It becomes a world-famous dig site. You discover a new species (Tyrannosaurus imperator). The cement company sues you for breach of contract, but the scientific community rallies for your legal fund.',
                    th: '🏛️ วิทยาศาสตร์รอด งานหาย! เหมืองถูกยึดโดยรัฐผ่านกฎหมายเวนคืน กลายเป็นแหล่งขุดค้นที่มีชื่อเสียงระดับโลก คุณค้นพบสายพันธุ์ใหม่ (Tyrannosaurus imperator) บริษัทปูนฟ้องคุณฐานผิดสัญญา แต่วงการวิทยาศาสตร์ระดมทุนช่วยค่ากฎหมายคุณ',
                    zh: '🏛️ 科学保住了，工作丢了！采石场被国家通过征用权扣押。它成为世界著名的挖掘地点。你发现了一个新物种（帝王霸王龙）。水泥公司起诉你违约，但科学界为你的法律基金集会。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 The Night Rescue:"Give me 48 hours. I\'ll excavate the skull and major bones quietly at night with my team. You get your quarry back, science gets the Holotype."',
                    th: '🤫 การกู้ภัยยามวิกาล:"ให้เวลาฉัน 48 ชั่วโมง ฉันจะขุดกะโหลกและกระดูกหลักๆ อย่างเงียบๆ ในตอนกลางคืนกับทีมของฉัน คุณได้เหมืองคืน วิทยาศาสตร์ได้ตัวอย่างต้นแบบ"',
                    zh: '🤫 夜间救援："给我48小时。我会和我的团队在晚上悄悄挖掘头骨和主要骨骼。你拿回你的采石场，科学界得到正模标本。"'
                },
                consequence: {
                    en: '🦴 Rogue Paleontologist! You pull off the heist. The specimen is safe. You claim you found it"in a riverbed"to protect the quarry owner. The lie eats at you, and lack of geological context (stratigraphy) hurts the scientific value, but the beast is saved.',
                    th: '🦴 นักบรรพชีวินวิทยานอกคอก! คุณทำสำเร็จ ตัวอย่างปลอดภัย คุณอ้างว่าเจอมัน"ในท้องน้ำ"เพื่อปกป้องเจ้าของเหมือง คำโกหกกัดกินใจคุณ และการขาดบริบททางธรณีวิทยา (การลำดับชั้นหิน) ทำให้คุณค่าทางวิทยาศาสตร์ลดลง แต่สัตว์ร้ายนั้นปลอดภัย',
                    zh: '🦴 流氓古生物学家！你完成了抢劫。标本很安全。你声称你是在"河床"中发现它的，以保护采石场老板。谎言吞噬着你，缺乏地质背景（地层学）损害了科学价值，但这头野兽保住了。'
                },
                stats: { competence: 45, ethics: 30, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '💰 Crush It:"It\'s just bones. People need cement. I look the other way. Payment for this month is due tomorrow, right?"',
                    th: '💰 บดมันซะ:"ก็แค่กระดูก คนต้องการปูน ฉันจะทำเป็นไม่เห็น ค่าจ้างเดือนนี้จ่ายพรุ่งนี้ใช่ไหม?"',
                    zh: '💰 粉碎它："只是骨头而已。人们需要水泥。我把头转过去。这个月的款项明天到期，对吧？"'
                },
                consequence: {
                    en: '💀 History Erased! The crusher roars. 66 million years of history turns into sidewalk pavement. You get paid. A worker leaks a photo of the skull before it was crushed. You are doxxed, shamed, and stripped of your credentials. You end up selling insurance.',
                    th: '💀 ประวัติศาสตร์ถูกลบ! เครื่องบดคำราม 66 ล้านปีของประวัติศาสตร์กลายเป็นทางเท้า คุณได้รับเงิน คนงานปล่อยภาพกะโหลกก่อนถูกบด คุณถูกขุดประวัติ ประจาน และยึดใบอนุญาต คุณจบลงด้วยการขายประกัน',
                    zh: '💀 历史被抹去！破碎机轰鸣。6600万年的历史变成了人行道铺路石。你拿到了钱。一名工人泄露了头骨被粉碎前的照片。你被人肉搜索、羞辱并被剥夺资格。你最终去卖保险了。'
                },
                stats: { competence: 10, ethics: -50, leadership: -20, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🔄 Buy the delay:"I\'ll pay the daily operational cost of the quarry ($10k) from my own pocket for 3 days to excavate properly. I\'ll crowd-fund to reimburse myself later."',
                    th: '🔄 ซื้อเวลา:"ฉันจะจ่ายค่าดำเนินงานรายวันของเหมือง ($10k) จากกระเป๋าตัวเองเป็นเวลา 3 วันเพื่อขุดอย่างถูกต้อง ฉันจะระดมทุนเพื่อคืนเงินตัวเองทีหลัง"',
                    zh: '🔄 花钱买延迟："我会自掏腰包支付采石场3天的日常运营成本（1万美元），以便正确挖掘。稍后我会众筹来报销自己。"'
                },
                consequence: {
                    en: '💸 Sacrifice Play! You drain your savings. You save the fossil properly with context. The story goes viral. The crowdfunding raises $500k, covering your costs and funding a whole museum wing. You are the"People\'s Paleontologist."',
                    th: '💸 การเล่นแบบเสียสละ! คุณใช้เงินเก็บจนหมด คุณรักษาฟอสซิลไว้อย่างถูกต้องพร้อมบริบท เรื่องราวกลายเป็นไวรัล การระดมทุนได้ $500k ครอบคลุมต้นทุนของคุณและให้ทุนสร้างปีกพิพิธภัณฑ์ใหม่ คุณคือ"นักบรรพชีวินวิทยาของประชาชน"',
                    zh: '💸 牺牲打！你耗尽了积蓄。你利用背景正确地保存了化石。故事疯传。众筹筹集了50万美元，涵盖了你的成本并资助了整个博物馆翼楼。你是"人民的古生物学家"。'
                },
                stats: { competence: 45, ethics: 50, leadership: 45, innovation: 35 }
            }
        ]
    },

    // SECTION 3: ENVIRONMENTAL POLICY & CONTROVERSIAL PROJECTS (Questions 11-20)

    {
        id: 'geo_011',
        text: {
            en: '♨️ Geothermal vs. Tourism: You identify a massive geothermal reservoir just outside a famous National Park known for its geysers. Developing it could power the whole state with clean energy, but models show a 20% risk of"dampening"the park\'s famous geysers, ruining tourism.',
            th: '♨️ พลังงานความร้อนใต้พิภพ vs การท่องเที่ยว: คุณระบุแหล่งเก็บกักความร้อนใต้พิภพขนาดใหญ่นอกอุทยานแห่งชาติที่มีชื่อเสียงเรื่องน้ำพุร้อน การพัฒนามันสามารถจ่ายไฟสะอาดให้ทั้งรัฐได้ แต่โมเดลแสดงความเสี่ยง 20% ที่จะทำให้"น้ำพุร้อน"ของอุทยานอ่อนลง ทำลายการท่องเที่ยว',
            zh: '♨️ 地热与旅游业：你在以间歇泉闻名的著名国家公园外发现了一个巨大的地热储层。开发它可以为整个州提供清洁能源，但模型显示有20%的风险会"抑制"公园著名的间歇泉，破坏旅游业。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚡ Prioritize Clean Energy:"Climate change is the bigger threat. Tourism can adapt. I recommend full development. The energy needs of millions outweigh the vacation photos of thousands."',
                    th: '⚡ ให้ความสำคัญกับพลังงานสะอาด:"การเปลี่ยนแปลงสภาพภูมิอากาศเป็นภัยคุกคามที่ใหญ่กว่า การท่องเที่ยวปรับตัวได้ ฉันแนะนำให้พัฒนาเต็มรูปแบบ ความต้องการพลังงานของผู้คนนับล้านสำคัญกว่ารูปถ่ายวันหยุดของคนนับพัน"',
                    zh: '⚡ 优先发展清洁能源："气候变化是更大的威胁。旅游业可以适应。我建议全面开发。数百万人的能源需求比起数千人的度假照片更重要。"'
                },
                consequence: {
                    en: '🔌 Lights On, Geysers Off! The plant is built. Carbon emissions drop 40%. But Old Faithful stops erupting. Tourism revenue crashes $500M/year. Locals hate you. You are a hero to the climate movement but a villain to the local economy.',
                    th: '🔌 ไฟติด น้ำพุดับ! โรงไฟฟ้าถูกสร้าง การปล่อยคาร์บอนลดลง 40% แต่ Old Faithful หยุดปะทุ รายได้การท่องเที่ยวหายไป $500M/ปี คนท้องถิ่นเกลียดคุณ คุณเป็นฮีโร่ของขบวนการด้านภูมิอากาศแต่เป็นตัวร้ายต่อเศรษฐกิจท้องถิ่น',
                    zh: '🔌 灯亮了，喷泉停了！发电厂建成。碳排放下降40%。但老忠实泉停止喷发。旅游收入每年暴跌5亿美元。当地人恨你。你是气候运动的英雄，却是当地经济的罪人。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🏞️ Protect the Park:"Natural heritage is priceless. Even a 1% risk is too high. I declare the reservoir \'hydrologically connected\' to the park and untouchable to stop the project."',
                    th: '🏞️ ปกป้องอุทยาน:"มรดกทางธรรมชาติประเมินค่าไม่ได้ แม้ความเสี่ยง 1% ก็สูงไป ฉันประกาศว่าแหล่งเก็บกักนี้ \'เชื่อมต่อทางอุทกวิทยา\' กับอุทยานและแตะต้องไม่ได้เพื่อหยุดโครงการ"',
                    zh: '🏞️ 保护公园："自然遗产是无价的。即使是1%的风险也太高了。我宣布储层与公园\'水文相连\'且不可触碰，以阻止该项目。"'
                },
                consequence: {
                    en: '🌲 Pristine but Polluted! The park is saved. But the state builds a coal plant instead to meet demand. Smog chokes the spruce trees you saved. You realize protecting one spot sometimes harms the whole picture. A heavy conscience.',
                    th: '🌲 บริสุทธิ์แต่มีมลพิษ! อุทยานถูกรักษาไว้ แต่รัฐสร้างโรงไฟฟ้าถ่านหินแทนเพื่อตอบสนองความต้องการ หมอกควันปกคลุมต้นสนที่คุณรักษาไว้ คุณตระหนักว่าการปกป้องจุดหนึ่งบางครั้งทำลายภาพรวม ความรู้สึกผิดที่หนักอึ้ง',
                    zh: '🌲 原始但被污染！公园保住了。但该州建造了一座燃煤电厂来满足需求。烟雾通过你拯救的云杉林。你意识到保护一个地方有时会损害整体。良心不安。'
                },
                stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧪 Binary Cycle Tech:"We use a closed-loop binary system that reinjects 100% of the fluids. It costs double, but keeps pressure equilibrium. We do a slow, staged rollout to monitor geyser pressure."',
                    th: '🧪 เทคโนโลยีวัฏจักรคู่:"เราใช้ระบบปิดแบบไบนารีที่อัดฉีดของเหลวกลับลงไป 100% มันแพงเป็นสองเท่า แต่รักษาสมดุลแรงดัน เราจะเริ่มดำเนินการเป็นระยะอย่างช้าๆ เพื่อติดตามแรงดันน้ำพุร้อน"',
                    zh: '🧪 双循环技术："我们使用闭环双系统，100%回注流体。成本加倍，但保持压力平衡。我们分阶段缓慢推进，以监测间歇泉压力。"'
                },
                consequence: {
                    en: '⚖️ The Golden Balance! It works. Energy is produced (expensive but green) and the geysers keep flowing (mostly). You prove that engineering can coexist with nature if you pay the price. A textbook success story.',
                    th: '⚖️ สมดุลทองคำ! มันได้ผล ผลิตพลังงานได้ (แพงแต่สะอาด) และน้ำพุร้อนยังคงไหล (ส่วนใหญ่) คุณพิสูจน์ให้เห็นว่าวิศวกรรมสามารถอยู่ร่วมกับธรรมชาติได้หากคุณยอมจ่าย เรื่องราวความสำเร็จระดับตำราเรียน',
                    zh: '⚖️ 黄金平衡！奏效了。生产了能源（昂贵但绿色），间歇泉继续流动（大部分）。你证明了只要付出代价，工程可以与自然共存。教科书式的成功故事。'
                },
                stats: { competence: 50, ethics: 45, leadership: 45, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Secret Drilling:"We drill directionally from private land 5 miles away to tap the edge of the reservoir. Legally gray, but we avoid the direct jurisdiction of the park buffer zone."',
                    th: '💰 การเจาะลับ:"เราเจาะแบบกำหนดทิศทางจากที่ดินส่วนตัวห่างออกไป 5 ไมล์เพื่อเจาะขอบแหล่งเก็บกัก เทาๆ ในทางกฎหมาย แต่เราหลีกเลี่ยงเขตอำนาจศาลโดยตรงของโซนกันชนอุทยาน"',
                    zh: '💰 秘密钻探："我们从5英里外的私人土地定向钻探，以开发储层的边缘。法律灰色地带，但我们避开了公园缓冲区的直接管辖权。"'
                },
                consequence: {
                    en: '🕵️ Legal Quagmire! The park rangers notice pressure drops. They sue. Your directional drilling maps are subpoenaed. You are fined for"resource theft"from a federal entity. Your license is suspended.',
                    th: '🕵️ ปลักโคลนทางกฎหมาย! เจ้าหน้าที่อุทยานสังเกตเห็นแรงดันลดลง พวกเขาฟ้อง แผนที่การเจาะแบบกำหนดทิศทางของคุณถูกหมายเรียก คุณถูกปรับข้อหา"ขโมยทรัพยากร"จากหน่วยงานรัฐบาลกลาง ใบอนุญาตของคุณถูกระงับ',
                    zh: '🕵️ 法律泥潭！公园护林员注意到压力下降。他们起诉。你的定向钻探地图被传唤。你因从联邦实体"窃取资源"而被罚款。你的执照被吊销。'
                },
                stats: { competence: 35, ethics: -20, leadership: -10, innovation: 25 }
            }
        ]
    },
    {
        id: 'geo_012',
        text: {
            en: '☢️ The Nuclear Repository: You lead the geological safety team for a permanent nuclear waste repository. The chosen site is in granite, geologically stable for 1 billion years. However, locals protest, claiming groundwater connects to their farms. Your isotope data proves 100% isolation, but no one believes you.',
            th: '☢️ ที่เก็บกากนิวเคลียร์: คุณนำทีมความปลอดภัยทางธรณีวิทยาสำหรับที่เก็บกากนิวเคลียร์ถาวร สถานที่ที่เลือกอยู่ในหินแกรนิต มั่นคงทางธรณีวิทยามา 1 พันล้านปี อย่างไรก็ตาม ชาวบ้านประท้วง อ้างว่าน้ำใต้ดินเชื่อมต่อกับฟาร์มของพวกเขา ข้อมูลไอโซโทปของคุณพิสูจน์การแยกตัว 100% แต่ไม่มีใครเชื่อคุณ',
            zh: '☢️ 核废料库：你领导永久核废料库的地质安全团队。选定的地点位于花岗岩中，地质稳定了10亿年。然而，当地人抗议，声称地下水连接到他们的农场。你的同位素数据证明是100%隔离的，但没人相信你。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📊 The Data Dump:"Facts don\'t care about feelings. I release a 5,000-page raw data report and hold a town hall where I lecture them on Darcy\'s Law of permeability. Science will win."',
                    th: '📊 การเทข้อมูล:"ข้อเท็จจริงไม่สนใจความรู้สึก ฉันเผยแพร่รายงานข้อมูลดิบ 5,000 หน้าและจัดประชุมศาลากลางที่ฉันบรรยายเรื่องกฎของดาร์ซีเกี่ยวกับความสามารถในการซึมผ่าน วิทยาศาสตร์จะชนะ"',
                    zh: '📊 数据倾倒："事实不在乎感受。我发布了一份5000页的原始数据报告，并举行了一次市政厅会议，向他们讲授达西渗透率定律。科学会获胜。"'
                },
                consequence: {
                    en: '🗣️ Communication Disaster! The locals feel condescended to. They riot. Politicians panic and cancel the project. The waste stays in temporary, unsafe storage near cities. You were right on rock, but wrong on people.',
                    th: '🗣️ หายนะทางการสื่อสาร! ชาวบ้านรู้สึกถูกดูถูก พวกเขาจลาจล นักการเมืองตื่นตระหนกและยกเลิกโครงการ ของเสียยังคงอยู่ในที่เก็บชั่วคราวที่ไม่ปลอดภัยใกล้เมือง คุณถูกเรื่องหิน แต่ผิดเรื่องคน',
                    zh: '🗣️ 沟通灾难！当地人觉得被居高临下地对待。他们暴动。政客们恐慌并取消了这个项目。废物留在了城市附近的临时、不安全的储存处。你在岩石上是对的，但在人上是错的。'
                },
                stats: { competence: 50, ethics: 30, leadership: -20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Citizen Science Program:"I invite local farmers to join the monitoring team. We train them to take their own water samples and test them in independent labs. Detailed, patient engagement."',
                    th: '🤝 โครงการวิทยาศาสตร์ภาคพลเมือง:"ฉันเชิญเกษตรกรท้องถิ่นเข้าร่วมทีมเฝ้าระวัง เราฝึกเขาให้เก็บตัวอย่างน้ำของตัวเองและทดสอบในห้องแล็บอิสระ การมีส่วนร่วมที่ละเอียดและอดทน"',
                    zh: '🤝 公民科学计划："我邀请当地农民加入监测团队。我们培训他们采集自己的水样并在独立实验室进行测试。详细、耐心的参与。"'
                },
                consequence: {
                    en: '🕊️ Trust Built! It takes 2 years longer, but the farmers see the truth themselves. Opposition fades. The repository opens safely. You write the handbook on"Social License to Operate"for geoscientists.',
                    th: '🕊️ ความเชื่อใจถูกสร้าง! ใช้เวลานานกว่าเดิม 2 ปี แต่เกษตรกรเห็นความจริงด้วยตัวเอง การต่อต้านจางหายไป ที่เก็บเปิดอย่างปลอดภัย คุณเขียนคู่มือเรื่อง"ใบอนุญาตทางสังคมในการดำเนินงาน"สำหรับนักธรณีวิทยา',
                    zh: '🕊️ 建立信任！多花了2年时间，但农民们亲眼看到了真相。反对声消退。仓库安全开启。你为地球科学家编写了"社会经营许可"手册。'
                },
                stats: { competence: 45, ethics: 50, leadership: 50, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Recommend Relocation:"The geology is perfect, but the social geology is toxic. I advise moving to the alternative site in the desert, even though the rock is 10% less stable."',
                    th: '🛑 แนะนำให้ย้ายสถานที่:"ธรณีวิทยาสมบูรณ์แบบ แต่ธรณีวิทยาสังคมเป็นพิษ ฉันแนะนำให้ย้ายไปที่ทางเลือกในทะเลทราย แม้ว่าหินจะมั่นคงน้อยกว่า 10%"',
                    zh: '🛑 建议搬迁："地质是完美的，但社会地质是有毒的。我建议搬到沙漠的替代地点，即使岩石稳定性低10%。"'
                },
                consequence: {
                    en: '🚚 The Expensive Move! The project moves. Costs triple. The new site has minor leaks in 500 years, but no one lives there to care. A pragmatic solution, but technically inferior.',
                    th: '🚚 การย้ายที่แพงระยับ! โครงการย้าย ต้นทุนเพิ่มสามเท่า สถานที่ใหม่มีรอยรั่วเล็กน้อยใน 500 ปี แต่ไม่มีใครอยู่ที่นั่นที่จะสนใจ วิธีแก้ปัญหาเชิงปฏิบัติ แต่ด้อยกว่าทางเทคนิค',
                    zh: '🚚 昂贵的搬迁！项目移动。成本增加三倍。新地点在500年后有轻微泄漏，但没人住在那里也就没人关心。一个务实的解决方案，但在技术上较差。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 The Payoff:"Don\'t argue science. Argue money. Propose a massive compensation package: new schools, hospitals, and direct cash checks to every resident funded by the project."',
                    th: '💰 การจ่ายเงินปิดปาก:"อย่าเถียงเรื่องวิทยาศาสตร์ เถียงด้วยเงิน เสนอแพกเกจชดเชยขนาดใหญ่: โรงเรียนใหม่ โรงพยาบาล และเช็คเงินสดตรงถึงผู้อยู่อาศัยทุกคนโดยทุนโครงการ"',
                    zh: '💰 报酬："不要争论科学。争论钱。提出巨额补偿方案：新学校、医院，以及由项目资助给每位居民的直接现金支票。"'
                },
                consequence: {
                    en: '💵 Bought Silence! The protests stop instantly. The site is built. It works fine. But you set a precedent that safety is"bought,"not proven. You are viewed as a corporate fixer.',
                    th: '💵 ซื้อความเงียบ! การประท้วงหยุดทันที สถานที่ถูกสร้าง มันทำงานได้ดี แต่คุณสร้างบรรทัดฐานว่าความปลอดภัยถูก"ซื้อ"ไม่ใช่พิสูจน์ คุณถูกมองว่าเป็นนักแก้ปัญหาขององค์กร',
                    zh: '💵 买来的沉默！抗议立即停止。地点建成。运作良好。但你开创了一个先例，即安全是"买来的"，而不是证明出来的。你被视为企业掮客。'
                },
                stats: { competence: 30, ethics: 20, leadership: 25, innovation: 30 }
            }
        ]
    },
    {
        id: 'geo_013',
        text: {
            en: '🏖️ Coastal Managed Retreat: You advise a wealthy coastal town. Rising sea levels and erosion will destroy the front row of mansions in 10 years. You can build a seawall (protects property for 20 years but destroys the public beach) or recommend"managed retreat"(abandon houses, save the beach).',
            th: '🏖️ การถอยร่นชายฝั่งที่มีการจัดการ: คุณให้คำปรึกษาเมืองชายฝั่งที่ร่ำรวย ระดับน้ำทะเลที่สูงขึ้นและการกัดเซาะจะทำลายคฤหาสน์แถวหน้าใน 10 ปี คุณสามารถสร้างกำแพงกันคลื่น (ปกป้องทรัพย์สินได้ 20 ปีแต่ทำลายหาดสาธารณะ) หรือแนะนำ"การถอยร่นที่มีการจัดการ"(ละทิ้งบ้าน รักษาหาด)',
            zh: '🏖️ 海岸有计划撤退：你为通过富裕的沿海城镇提供建议。海平面上升和侵蚀将在10年内摧毁前排豪宅。你可以建造海堤（保护财产20年但破坏公共海滩）或建议"有计划撤退"（放弃房屋，拯救海滩）。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧱 Build the Great Wall:"Property rights are paramount. I design a massive concrete seawall. It will cost millions and scour away the sand, but the houses stay dry for my lifetime."',
                    th: '🧱 สร้างกำแพงยักษ์:"สิทธิในทรัพย์สินสำคัญที่สุด ฉันออกแบบกำแพงคอนกรีตขนาดใหญ่ มันจะใช้เงินหลายล้านและกัดเซาะทรายหายไป แต่บ้านจะแห้งสนิทตลอดชีวิตของฉัน"',
                    zh: '🧱 建造长城："产权至上。我设计了一座巨大的混凝土海堤。这将耗资数百万并冲刷掉沙子，但房子在我有生之年能保持干燥。"'
                },
                consequence: {
                    en: '🏰 Fortress Mentality! The wall is built. The beach disappears physically. Tourism dies. The town becomes a concrete fortress protecting a few rich retirees. The ocean eventually undermines the wall anyway 30 years later.',
                    th: '🏰 ความคิดแบบป้อมปราการ! กำแพงถูกสร้าง ชายหาดหายไปทางกายภาพ การท่องเที่ยวตาย เมืองกลายเป็นป้อมปราการคอนกรีตปกป้องคนรวยวัยเกษียณไม่กี่คน ในที่สุดมหาสมุทรก็กัดเซาะใต้กำแพงอยู่ดีใน 30 ปีต่อมา',
                    zh: '🏰 堡垒心态！墙建成了。海滩在物理上消失了。旅游业消亡。城镇变成了一个保护少数富裕退休人员的混凝土堡垒。30年后，海洋最终还是破坏了墙基。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🔙 Advocate Managed Retreat:"We must surrender to the sea. I create a zoning plan to buy out the front row and turn it into dunes. Homeowners scream lawsuits."',
                    th: '🔙 สนับสนุนการถอยร่นที่มีการจัดการ:"เราต้องยอมจำนนต่อทะเล ฉันสร้างแผนโซนนิ่งเพื่อซื้อคืนแถวหน้าและเปลี่ยนเป็นเนินทราย เจ้าของบ้านกรีดร้องฟ้องร้อง"',
                    zh: '🔙 提倡有计划撤退："我们必须向大海投降。我制定了一个分区计划，买断前排并将其变成沙丘。房主们尖叫着要打官司。"'
                },
                consequence: {
                    en: '🌊 Painful Progress! You are fired by the town council but hired by the State Governor. The policy is forced through. The beach is restored as a natural buffer. It becomes a national model for climate adaptation. You are a visionary unpopular in your hometown.',
                    th: '🌊 ความก้าวหน้าที่เจ็บปวด! คุณถูกไล่ออกโดยสภาเมืองแต่ถูกจ้างโดยผู้ว่าการรัฐ นโยบายถูกบังคับใช้ ชายหาดได้รับการฟื้นฟูเป็นแนวกันชนธรรมชาติ มันกลายเป็นโมเดลระดับชาติสำหรับการปรับตัวต่อภูมิอากาศ คุณเป็นผู้มีวิสัยทัศน์ที่ไม่เป็นที่นิยมในบ้านเกิด',
                    zh: '🌊 痛苦的进步！你被市议会解雇，但被州长聘用。政策被强制通过。海滩恢复为自然缓冲区。它成为气候适应的国家典范。你在家乡是一个不受欢迎的有远见者。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 40 }
            },
            {
                id: 'C',
                text: {
                    en: '🌱 Living Shorelines:"No concrete walls. We plant mangroves and build oyster reefs. It\'s a soft defense. It might not save the houses in a Category 5 storm, but it saves the beach and slows erosion."',
                    th: '🌱 ชายฝั่งมีชีวิต:"ไม่มีกำแพงคอนกรีต เราปลูกป่าชายเลนและสร้างแนวปะการังหอยนางรม มันคือการป้องกันแบบนุ่มนวล มันอาจช่วยบ้านไม่ได้ในพายุระดับ 5 แต่ช่วยชายหาดและชะลอการกัดเซาะ"',
                    zh: '🌱 生态海岸线："没有混凝土墙。我们种植红树林并建造牡蛎礁。这是一种软防御。它可能无法在5级风暴中拯救房屋，但它拯救了海滩并减缓了侵蚀。"'
                },
                consequence: {
                    en: '🌿 Eco-Harmony! The"green wall"becomes a park. It attracts fish and tourists. It buys the houses another 15 years while maintaining quality of life. A compromise that pleases almost everyone.',
                    th: '🌿 ความกลมกลืนทางนิเวศ!"กำแพงเขียว"กลายเป็นสวนสาธารณะ มันดึงดูดปลาและนักท่องเที่ยว มันซื้อเวลาให้บ้านอีก 15 ปีในขณะที่รักษาคุณภาพชีวิต การประนีประนอมที่ถูกใจเกือบทุกคน',
                    zh: '🌿 生态和谐！"绿墙"变成了公园。它吸引了鱼类和游客。它为房屋争取了另外15年的时间，同时保持了生活质量。一个几乎让所有人都满意的折衷方案。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🚛 Sand Replenishment Loop:"We just dredge sand offshore and pump it back on the beach every 2 years. It\'s an endless maintenance cost ($2M/year), but no one has to move or see a wall."',
                    th: '🚛 วงจรเติมทราย:"เราแค่ขุดทรายนอกชายฝั่งและปั๊มกลับมาที่หาดทุก 2 ปี มันเป็นค่าบำรุงรักษาไม่รู้จบ ($2M/ปี) แต่ไม่มีใครต้องย้ายหรือเห็นกำแพง"',
                    zh: '🚛 补沙循环："我们只是疏浚近海沙子，每2年将其泵回海滩。这是无休止的维护成本（每年200万美元），但没人需要搬家或看到墙。"'
                },
                consequence: {
                    en: '💸 The Money Pit! The town goes into debt keeping up with the sand pumping. The offshore ecosystem is damaged by dredging. It preserves the status quo until the town goes bankrupt. A kick-the-can solution.',
                    th: '💸 หลุมบ่อทางการเงิน! เมืองเป็นหนี้จากการต้องปั๊มทรายตลอด ระบบนิเวศนอกชายฝั่งเสียหายจากการขุดลอก มันรักษาสถานะเดิมไว้จนเมืองล้มละลาย วิธีแก้ปัญหาแบบผลัดวันประกันพรุ่ง',
                    zh: '💸 烧钱坑！城镇因跟上抽沙速度而负债累累。近海生态系统因疏浚而受损。这维持了现状，直到城镇破产。一个踢皮球的解决方案。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'geo_014',
        text: {
            en: '💧 The Nitrate Plume: You investigate a village\'s well water causing blue baby syndrome. You trace high nitrates to a massive corporate farm upstream. The farm says,"We follow all fertilizer regulations."Your data shows the regulations are outdated for this soil type.',
            th: '💧 การแพร่กระจายของไนเตรต: คุณสอบสวนน้ำบ่อของหมู่บ้านที่ทำให้เกิดโรคเด็กตัวเขียว คุณตามรอยไนเตรตสูงไปที่ฟาร์มบริษัทขนาดใหญ่ต้นน้ำ ฟาร์มบอกว่า"เราปฏิบัติตามกฎระเบียบปุ๋ยทุกอย่าง"ข้อมูลของคุณแสดงว่ากฎระเบียบนั้นล้าสมัยสำหรับชนิดดินนี้',
            zh: '💧 硝酸盐羽流：你正在调查导致蓝婴综合症的村庄井水。你将高硝酸盐追溯到上游的一个大型企业农场。农场说："我们遵守所有化肥规定。"你的数据显示，针对这种土壤类型，规定已经过时了。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏛️ Lobby for Reg Change:"I don\'t sue the farm yet. I take the data to the State Capitol to change the laws. Once the law changes, the farm must improve. It\'s the long game."',
                    th: '🏛️ ล็อบบี้เปลี่ยนกฎหมาย:"ฉันยังไม่ฟ้องฟาร์ม ฉันนำข้อมูลไปที่เมืองหลวงรัฐเพื่อเปลี่ยนกฎหมาย เมื่อกฎหมายเปลี่ยน ฟาร์มต้องปรับปรุง มันคือเกมยาว"',
                    zh: '🏛️ 游说修改法规："我还不起诉农场。我把数据带到州议会大厦去修改法律。一旦法律改变，农场就必须改进。这是长远之计。"'
                },
                consequence: {
                    en: '📜 Policy Victory! It takes 3 years. The law is updated. The farm installs buffers. But in those 3 years, 10 more kids get sick. You fixed the system but failed the immediate victims.',
                    th: '📜 ชัยชนะทางนโยบาย! ใช้เวลา 3 ปี กฎหมายได้รับการอัปเดต ฟาร์มติดตั้งแนวกันชน แต่ใน 3 ปีนั้น เด็กอีก 10 คนป่วย คุณแก้ระบบแต่ล้มเหลวกับผู้เคราะห์ร้ายเฉพาะหน้า',
                    zh: '📜 政策胜利！花了3年时间。法律更新了。农场安装了缓冲区。但在那3年里，又有10个孩子生病了。你修复了系统，并未能帮助当前的受害者。'
                },
                stats: { competence: 45, ethics: 35, leadership: 45, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '⚖️ Sue for Negligence:"Regulations are a minimum, not a shield. Knowledge of harm creates liability. I testify against the farm for the families. Demand immediate water filtration funding."',
                    th: '⚖️ ฟ้องข้อหาประมาท:"กฎระเบียบคือขั้นต่ำ ไม่ใช่โล่ ความรู้เรื่องอันตรายสร้างความรับผิดชอบ ฉันให้การต่อต้านฟาร์มเพื่อครอบครัว เรียกร้องทุนกรองน้ำทันที"',
                    zh: '⚖️ 起诉疏忽："规定是最低标准，不是挡箭牌。知晓危害产生责任。我代表家庭出庭作证指控农场。要求立即提供水过滤资金。"'
                },
                consequence: {
                    en: '👨‍⚖️ Justice Served! The jury agrees. The farm pays millions. The village gets a new water plant. You are blacklisted by the agricultural lobby but become a hero for public health.',
                    th: '👨‍⚖️ ความยุติธรรมบังเกิด! คณะลูกขุนเห็นด้วย ฟาร์มจ่ายหลายล้าน หมู่บ้านได้โรงงานน้ำใหม่ คุณถูกขึ้นบัญชีดำโดยกลุ่มล็อบบี้เกษตรแต่กลายเป็นฮีโร่ด้านสาธารณสุข',
                    zh: '👨‍⚖️ 正义伸张！陪审团同意。农场赔偿数百万。村庄获得了新的水厂。你被农业游说团体列入黑名单，但成为公共卫生的英雄。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🧬 Bioremediation Pilot:"I propose a partnership with the farm. We plant deep-rooted nitrate-absorbing barrier crops (like Alfalfa) along the edges. I get a grant to pay for it."',
                    th: '🧬 โครงการนำร่องการบำบัดทางชีวภาพ:"ฉันเสนอความร่วมมือกับฟาร์ม เราปลูกพืชกั้นที่ดูดซับไนเตรตรากลึก (เช่น อัลฟัลฟา) ตามขอบ ฉันหาทุนมาจ่ายให้"',
                    zh: '🧬 生物修复试点："我提议与农场合作。我们在边缘种植深根硝酸盐吸收屏障作物（如紫花苜蓿）。我获得了一笔赠款来支付费用。"'
                },
                consequence: {
                    en: '🌾 Collaborative Win! The farm agrees because it\'s free PR. The nitrate levels drop 60% in one season. You solve the problem without court battles. A model for Agro-Geology.',
                    th: '🌾 ชัยชนะร่วมกัน! ฟาร์มตกลงเพราะเป็นการประชาสัมพันธ์ฟรี ระดับไนเตรตลดลง 60% ในฤดูเดียว คุณแก้ปัญหาโดยไม่ต้องขึ้นศาล แบบจำลองสำหรับเกษตรธรณีวิทยา',
                    zh: '🌾 合作共赢！农场同意了，因为这是免费的公关。硝酸盐水平在一个季节内下降了60%。你无需法庭斗争就解决了问题。农业地质学的典范。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '🤫 Dig Deeper Wells:"The plume is shallow. We just drill the village wells 100ft deeper to a confined aquifer. It\'s a quick fix ($50k). Ignore the farm."',
                    th: '🤫 ขุดบ่อให้ลึกขึ้น:"การแพร่กระจายมันตื้น เราแค่เจาะบ่อหมู่บ้านให้ลึกขึ้น 100 ฟุตไปยังชั้นน้ำบาดาลระบบปิด เป็นการแก้ปัญหาเร็ว ($50k) เมินฟาร์มไปซะ"',
                    zh: '🤫 挖更深的井："羽流很浅。我们只要把村里的井钻深100英尺，到达承压含水层。这是一个快速修复（5万美元）。无视农场。"'
                },
                consequence: {
                    en: '🩹 Band-Aid Solution! The water is clean... for now. But you allowed the pollution to continue unchecked. Eventually, the pollution might reach the deep aquifer too. You avoided conflict but didn\'t solve the root cause.',
                    th: '🩹 วิธีแก้แบบแปะพลาสเตอร์! น้ำสะอาด... สำหรับตอนนี้ แต่คุณปล่อยให้มลพิษดำเนินต่อไปโดยไม่ตรวจสอบ ในที่สุดมลพิษอาจถึงชั้นน้ำลึกด้วย คุณหลีกเลี่ยงความขัดแย้งแต่ไม่ได้แก้ที่ต้นเหตุ',
                    zh: '🩹 权宜之计！水是干净的……暂时。但你允许污染不受控制地继续。最终，污染也可能到达深层含水层。你避免了冲突，但没有解决根本原因。'
                },
                stats: { competence: 35, ethics: 25, leadership: 15, innovation: 20 }
            }
        ]
    },
    {
        id: 'geo_015',
        text: {
            en: '☄️ The Meteorite Hunter: You track a fireball to a remote desert. You find a rare Carbonaceous Chondrite (contains building blocks of life). A private collector offers you $100,000 cash on the spot. A museum offers you $5,000 and"recognition."',
            th: '☄️ นักล่าอุกกาบาต: คุณติดตามลูกไฟไปยังทะเลทรายห่างไกล คุณพบ คาร์บอนนาเซียส คอนไดรต์ หายาก (มีองค์ประกอบพื้นฐานของชีวิต) นักสะสมเอกชนเสนอเงินสด $100,000 ทันที พิพิธภัณฑ์เสนอ $5,000 และ"การยอมรับ"',
            zh: '☄️ 陨石猎人：你追踪火流星到了偏远的沙漠。你发现了一块稀有的碳质球粒陨石（包含生命的基石）。一位私人收藏家当场向你报价10万美元现金。一家博物馆给你5000美元和"认可"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏛️ Donate to Museum:"This belongs to humanity. The science it contains is priceless. I take the $5k and write the paper on it myself."',
                    th: '🏛️ บริจาคให้พิพิธภัณฑ์:"นี่เป็นสมบัติของมนุษยชาติ วิทยาศาสตร์ที่มันมีอยู่ประเมินค่าไม่ได้ ฉันรับเงิน $5k และเขียนงานวิจัยเกี่ยวกับมันด้วยตัวเอง"',
                    zh: '🏛️ 捐赠给博物馆："这属于人类。它包含的科学是无价的。我拿这5000美元，自己写论文。"'
                },
                consequence: {
                    en: '🔭 Scientific Immortal! The rock reveals amino acids from space. You are lead author on a Nature paper. You are broke but famous in science. The rock sits in a display case with your name.',
                    th: '🔭 อมตะทางวิทยาศาสตร์! หินเปิดเผยกรดอะมิโนจากอวกาศ คุณเป็นผู้เขียนหลักในงานวิจัย Nature คุณถังแตกแต่โด่งดังในวงการวิทยาศาสตร์ หินอยู่ในตู้โชว์พร้อมชื่อของคุณ',
                    zh: '🔭 科学不朽！这块石头揭示了来自太空的氨基酸。你是《自然》杂志论文的第一作者。你身无分文但在科学界很有名。石头陈列在柜子里，上面有你的名字。'
                },
                stats: { competence: 40, ethics: 50, leadership: 20, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '💵 Sell to Collector:"I have student loans to pay. I take the $100k. I keep a tiny fragment for myself to analyze secretly later."',
                    th: '💵 ขายให้นักสะสม:"ฉันมีหนี้กยศ.ต้องจ่าย ฉันเอาเงิน $100k ฉันเก็บเศษเล็กๆ ไว้ให้ตัววิเคราะห์ลับๆ ทีหลัง"',
                    zh: '💵 卖给收藏家："我有助学贷款要还。我拿这10万美元。我自己留一小块碎片以后秘密分析。"'
                },
                consequence: {
                    en: '🤑 Rich but Vacant! You pay off your debts. But the main rock disappears into a private safe, never to be studied. Your secret fragment is too small for meaningful data. You lost a piece of the universe for comfort.',
                    th: '🤑 รวยแต่ว่างเปล่า! คุณใช้หนี้หมด แต่หินก้อนหลักหายไปในตู้เซฟส่วนตัว ไม่เคยถูกศึกษา เศษลับของคุณเล็กเกินกว่าจะได้ข้อมูลที่มีความหมาย คุณสูญเสียชิ้นส่วนของจักรวาลเพื่อความสบาย',
                    zh: '🤑 富有但空虚！你还清了债务。但这块主石消失在一个私人保险箱里，永远不会被研究。你的秘密碎片太小，无法获得有意义的数据。为了舒适，你失去了宇宙的一部分。'
                },
                stats: { competence: 30, ethics: -30, leadership: -10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤝 Broker a Deal:"I tell the collector: \'You buy it, but you MUST loan it to the museum for 5 years for study and display.\' I take a 10% commission ($10k)."',
                    th: '🤝 เป็นนายหน้าเจรจา:"ฉันบอกนักสะสม: \'คุณซื้อมันได้ แต่คุณต้องให้พิพิธภัณฑ์ยืม 5 ปีเพื่อศึกษาและจัดแสดง\' ฉันขอค่าคอมมิชชั่น 10% ($10k)"',
                    zh: '🤝 促成交易："我告诉收藏家：\'你买下它，但你必须把它借给博物馆5年用于研究和展示。\'我抽取10%的佣金（1万美元）。"'
                },
                consequence: {
                    en: '🧠 Smart Business! The collector agrees for the prestige. The museum gets the data. You get some money. Everyone wins. You become known as a shrewd operator in the geo-market.',
                    th: '🧠 ธุรกิจฉลาด! นักสะสมตกลงเพื่อเกียรติยศ พิพิธภัณฑ์ได้ข้อมูล คุณได้เงิน ทุกคนชนะ คุณเป็นที่รู้จักในฐานะผู้ดำเนินการที่เฉลียวฉลาดในตลาดธรณี',
                    zh: '🧠 精明的生意！收藏家为了声望同意了。博物馆得到了数据。你得到了一些钱。大家都赢了。你在地质市场上被称为精明的经营者。'
                },
                stats: { competence: 40, ethics: 30, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🔪 Saw in Half:"The Judgment of Solomon. I say \'I\'ll cut it in half right now. Half for the museum (free), half for you ($50k).\'"',
                    th: '🔪 เลื่อยครึ่ง:"คำตัดสินของโซโลมอน ฉันบอก \'ฉันจะตัดครึ่งเดี๋ยวนี้ ครึ่งหนึ่งให้พิพิธภัณฑ์ (ฟรี) ครึ่งหนึ่งให้คุณ ($50k)\'"',
                    zh: '🔪 据成两半："所罗门的审判。我说\'我现在就把它切成两半。一半给博物馆（免费），一半给你（5万美元）。\'"'
                },
                consequence: {
                    en: '💥 Risky Cut! You risk shattering the fragile rock. You succeed. The museum is happy (they get a sample). The collector feels special (he has the other half). You get paid. But purists say you"destroyed"the specimen\'s integrity.',
                    th: '💥 การตัดที่เสี่ยง! คุณเสี่ยงทำหินเปราะแตก คุณทำสำเร็จ พิพิธภัณฑ์มีความสุข (ได้ตัวอย่าง) นักสะสมรู้สึกพิเศษ (มีอีกครึ่ง) คุณได้เงิน แต่พวกบริสุทธิ์นิยมบอกว่าคุณ"ทำลาย"ความสมบูรณ์ของตัวอย่าง',
                    zh: '💥 冒险切割！你冒着粉碎脆弱岩石的风险。你成功了。博物馆很高兴（他们得到了样本）。收藏家觉得很特别（他有另一半）。你拿到了钱。但纯粹主义者说你"破坏"了标本的完整性。'
                },
                stats: { competence: 35, ethics: 20, leadership: 30, innovation: 35 }
            }
        ]
    },

    // SECTION 4: URBAN & GLOBAL HAZARDS (Questions 16-25)

    {
        id: 'geo_016',
        text: {
            en: '🚇 The Aquifer Tunnel: You are the chief geologist for a subway tunnel project. You hit a larger-than-expected aquifer. Boring through will drain the aquifer, drying up wells for 500 farms above. Sealing the tunnel walls 100% to prevent drainage will cost $50M and delay the project 6 months.',
            th: '🚇 อุโมงค์ชั้นน้ำบาดาล: คุณเป็นหัวหน้านักธรณีวิทยาโครงการอุโมงค์รถไฟใต้ดิน คุณเจอกับชั้นน้ำบาดาลที่ใหญ่กว่าที่คาด การเจาะผ่านจะระบายน้ำออก ทำให้บ่อน้ำของฟาร์ม 500 แห่งด้านบนแห้งเหือด การปิดผนึกผนังอุโมงค์ 100% เพื่อป้องกันการระบายน้ำจะใช้เงิน $50M และทำให้โครงการล่าช้า 6 เดือน',
            zh: '🚇 含水层隧道：你是地铁隧道项目的首席地质学家。你遇到了一个比预期更大的含水层。钻探通过将排干含水层，使上方500个农场的水井干涸。100%密封隧道壁以防止排水将耗资5000万美元，并使项目推迟6个月。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🧱 Seal It Completely:"We cannot steal the farmers\' water. It is illegal and immoral. We pause and grout the tunnel fully. Better late than thirsty."',
                    th: '🧱 ปิดผนึกให้สนิท:"เราขโมยน้ำเกษตรกรไม่ได้ มันผิดกฎหมายและผิดศีลธรรม เราหยุดและยาแนวอุโมงค์ให้สมบูรณ์ ช้าดีกว่าอดน้ำ"',
                    zh: '🧱 完全密封："我们不能偷农民的水。这是非法和不道德的。我们暂停并完全灌浆隧道。迟做总比渴死好。"'
                },
                consequence: {
                    en: '🛁 Waterproof Hero! The project is delayed. The city is furious at the traffic. But the farms are saved. You avoid a massive class-action lawsuit. The engineering marvel of a"dry tunnel"wins awards.',
                    th: '🛁 ฮีโร่กันน้ำ! โครงการล่าช้า เมืองโกรธเรื่องจราจร แต่ฟาร์มรอด คุณหลีกเลี่ยงการฟ้องร้องแบบกลุ่มขนาดใหญ่ สิ่งมหัศจรรย์ทางวิศวกรรมของ"อุโมงค์แห้ง"ได้รับรางวัล',
                    zh: '🛁 防水英雄！项目延期。城市对交通感到愤怒。但农场保住了。你避免了一场大规模的集体诉讼。"干隧道"的工程奇迹获奖。'
                },
                stats: { competence: 50, ethics: 50, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '💧 Drain and Compensate:"It\'s cheaper to just drill and pay for new wells. I propose a fund to drill deeper wells for every affected farmer. We keep moving."',
                    th: '💧 ระบายและชดเชย:"มันถูกกว่าที่จะแค่เจาะและจ่ายค่าบ่อใหม่ ฉันเสนกองทุนเพื่อเจาะบ่อลึกขึ้นให้เกษตรกรทุกคนที่ได้รับผลกระทบ เราลุยต่อ"',
                    zh: '💧 排水并赔偿："直接钻探并为此支付新井费用更便宜。我提议设立基金，为每一位受影响的农民钻更深的井。我们继续前进。"'
                },
                consequence: {
                    en: '🌵 The Drying Land! You drain the aquifer. The farmers get deep wells, but the surface vegetation dies. Sinkholes start appearing due to subsidence. Looking back, it was an ecological disaster for a subway.',
                    th: '🌵 แผ่นดินแห้งแล้ง! คุณระบายชั้นน้ำ เกษตรกรได้บ่อลึก แต่พืชพรรณบนดินตาย หลุมยุบเริ่มปรากฏขึ้นจากการทรุดตัว มองย้อนกลับไป มันเป็นหายนะทางนิเวศวิทยาเพื่อแลกกับรถไฟใต้ดิน',
                    zh: '🌵 干涸的土地！你排干了含水层。农民有了深井，但地表植被枯死。由于地面沉降，天坑开始出现。回想起来，这对地铁来说是一场生态灾难。'
                },
                stats: { competence: 30, ethics: 20, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔄 Route Deviation:"We can\'t win this. I redesign the alignment to go deeper, under the aquifer. It adds 2km to the track but avoids the water entirely."',
                    th: '🔄 เบี่ยงเส้นทาง:"เราชนะเรื่องนี้ไม่ได้ ฉันออกแบบแนวเส้นทางใหม่ให้ลึกลงไปอีก ใต้ชั้นน้ำบาดาล เพิ่มระยะทาง 2 กม. แต่หลีกเลี่ยงน้ำทั้งหมด"',
                    zh: '🔄 路线偏离："我们赢不了这个。我重新设计路线，走得更深，在含水层下面。这增加了2公里的轨道，但这完全避开了水。"'
                },
                consequence: {
                    en: '🛤️ The Long Way Home! The deviation works technically, but increases travel time forever. Passengers complain every day about the"scenic route in the dark."But geologically, it was the smartest move.',
                    th: '🛤️ ทางกลับบ้านที่ยาวนาน! การเบี่ยงเส้นทางได้ผลทางเทคนิค แต่เพิ่มเวลาเดินทางตลอดไป ผู้โดยสารบ่นทุกวันเรื่อง"เส้นทางชมวิวในความมืด"แต่ทางธรณีวิทยา มันฉลาดที่สุด',
                    zh: '🛤️ 漫漫回家路！偏离在技术上行得通，但这永远增加了旅行时间。乘客每天都在抱怨"黑暗中的风景路线"。但在地质上，这是最明智的举动。'
                },
                stats: { competence: 45, ethics: 40, leadership: 25, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🤫 Conceal the Extent:"Report it as a \'minor pocket\' of water. Pump it out at night. By the time they notice the water table dropping, the tunnel will be lined."',
                    th: '🤫 ปกปิดขอบเขต:"รายงานว่าเป็น \'กระเปาะน้ำเล็กน้อย\' สูบออกตอนกลางคืน กว่าพวกเขาจะรู้ว่าระดับน้ำลดลง อุโมงค์ก็บุผนังเสร็จแล้ว"',
                    zh: '🤫 隐瞒程度："将其报告为水的\'小口袋\'。晚上把它抽出来。等他们注意到地下水位下降时，隧道已经衬砌好了。"'
                },
                consequence: {
                    en: '⚖️ Criminal Negligence! The subsidence collapses a farmhouse. A family is injured. The investigation proves you falsified the logs. You go to prison. The project is abandoned.',
                    th: '⚖️ ความประมาทเลินเล่อทางอาญา! การทรุดตัวทำให้บ้านไร่ถล่ม ครอบครัวหนึ่งบาดเจ็บ การสอบสวนพิสูจน์ว่าคุณปลอมแปลงบันทึก คุณติดคุก โครงการถูกทิ้งร้าง',
                    zh: '⚖️ 刑事过失！沉降导致一座农舍倒塌。一家人受伤。调查证明你伪造了日志。你入狱了。项目被遗弃。'
                },
                stats: { competence: 20, ethics: -50, leadership: -40, innovation: 10 }
            }
        ]
    },
    {
        id: 'geo_017',
        text: {
            en: '🏗️ The Asbestos Surprise: Renovating an old high school, you find blue asbestos (crocidolite) in the insulation—the most deadly kind. Removal requires sealing the school for 3 months. The School Board begs you to"encapsulate it"(seal it in place) instead to keep school open, saving $2M.',
            th: '🏗️ เซอร์ไพรส์แร่ใยหิน: การปรับปรุงโรงเรียนมัธยมเก่า คุณพบแร่ใยหินสีฟ้า (โครซิโดไลต์) ในฉนวน—ชนิดที่อันตรายที่สุด การกำจัดต้องปิดโรงเรียน 3 เดือน คณะกรรมการโรงเรียนขอร้องให้คุณ"ห่อหุ้มมัน"(ปิดผนึกไว้กับที่) แทนเพื่อให้โรงเรียนเปิดต่อไปได้ ประหยัดเงิน $2M',
            zh: '🏗️ 石棉惊魂：在翻修一所旧高中时，你在绝缘材料中发现了蓝石棉（青石棉）——最致命的一种。移除需要封闭学校3个月。校务委员会恳求你"封装它"（将其密封在原地）以保持学校开放，节省200万美元。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🦠 Full Abatement:"Absolutely not. Encapsulation can fail. Kids kick walls. I order a full shutdown and removal. Safety of children is absolute."',
                    th: '🦠 การกำจัดเต็มรูปแบบ:"ไม่ได้เด็ดขาด การห่อหุ้มอาจล้มเหลว เด็กๆ เตะผนัง ฉันสั่งปิดและกำจัดทั้งหมด ความปลอดภัยของเด็กเป็นสิ่งสัมบูรณ์"',
                    zh: '🦠 全面治理："绝对不行。封装可能会失败。孩子们会踢墙。我命令全面关闭并移除。儿童的安全是绝对的。"'
                },
                consequence: {
                    en: '🏫 Clean Start! Parents freak out about the closure, but relieved regarding safety. The removal finds even more asbestos. You saved lives from mesothelioma 30 years down the line. You are Trusted.',
                    th: '🏫 การเริ่มต้นที่สะอาด! ผู้ปกครองตกใจเรื่องการปิด แต่โล่งใจเรื่องความปลอดภัย การกำจัดพบแร่ใยหินมากกว่าเดิมอีก คุณช่วยชีวิตคนจากมะเร็งเยื่อหุ้มปอดในอีก 30 ปีข้างหน้า คุณได้รับความไว้วางใจ',
                    zh: '🏫 干净的开始！家长们对学校关闭感到恐慌，但对安全感到宽慰。移除过程中发现了更多石棉。你挽救了30年后可能患间皮瘤的生命。你被信任。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🖌️ Encapsulate Carefully:"It\'s legal to encapsulate. We use double-thick industrial epoxy and install air monitors. We save the school year and the money."',
                    th: '🖌️ ห่อหุ้มอย่างระมัดระวัง:"การห่อหุ้มถูกกฎหมาย เราใช้อีพอกซีอุตสาหกรรมหนาสองเท่าและติดตั้งเครื่องตรวจวัดอากาศ เราช่วยปีการศึกษาและประหยัดเงิน"',
                    zh: '🖌️ 小心封装："封装是合法的。我们使用双倍厚度的工业环氧树脂并安装空气监测器。我们保住了学年和资金。"'
                },
                consequence: {
                    en: '🕒 Tick Tock! It works for 10 years. Then a leaky roof damages the seal. Fibers get out. It becomes a massive scandal later. You followed the rules, but the rules weren\'t good enough.',
                    th: '🕒 ติ๊กต็อก! มันได้ผล 10 ปี จากนั้นหลังคารั่วทำลายซีล เส้นใยหลุดออกมา กลายเป็นเรื่องอื้อฉาวใหญ่ภายหลัง คุณทำตามกฎ แต่กฎยังดีไม่พอ',
                    zh: '🕒 滴答滴答！它用了10年。然后屋顶漏水损坏了密封。纤维跑了出来。后来这成了一个巨大的丑闻。你遵守了规则，但规则不够好。'
                },
                stats: { competence: 35, ethics: 20, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Ignore and Cover:"Drywall over it. If we don\'t test it, we don\'t know it\'s there. Plausible deniability. Let\'s get this project done."',
                    th: '🤐 เพิกเฉยและปิดทับ:"ติดผนังเบาทับไป ถ้าเราไม่ตรวจ เราก็ไม่รู้ว่ามีอยู่ การปฏิเสธที่ฟังขึ้น มาทำโครงการนี้ให้เสร็จกันเถอะ"',
                    zh: '🤐 无视并掩盖："用石膏板覆盖。如果我们不测试，我们就不知道它在那里。合理的推诿。让我们把这个项目做完。"'
                },
                consequence: {
                    en: '💀 Silent Killer! You finish on time. 20 years later, a cluster of cancer cases emerges among alumni. Investigative journalist traces it back to the renovation records. You are sued into oblivion.',
                    th: '💀 ฆาตกรเงียบ! คุณเสร็จงานตรงเวลา 20 ปีต่อมา กลุ่มผู้ป่วยมะเร็งปรากฏขึ้นในหมู่ศิษย์เก่า นักข่าวสืบสวนตามรอยกลับไปที่บันทึกการปรับปรุง คุณถูกฟ้องจนหมดตัว',
                    zh: '💀 沉默的杀手！你按时完成了。20年后，校友中出现了一群癌症病例。调查记者追查到翻修记录。你被起诉至遗忘。'
                },
                stats: { competence: 10, ethics: -50, leadership: -20, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '🤖 Robot Removal:"Too dangerous for humans. I develop a plan to use remote-controlled demo robots to strip the asbestos at night/weekends. Slow but safe and keeps school open."',
                    th: '🤖 การกำจัดด้วยหุ่นยนต์:"อันตรายเกินไปสำหรับมนุษย์ ฉันพัฒนาแผนใช้หุ่นยนต์รื้อถอนบังคับวิทยุเพื่อลอกแร่ใยหินตอนกลางคืน/วันหยุด ช้าแต่ปลอดภัยและโรงเรียนเปิดได้"',
                    zh: '🤖 机器人移除："对人类来说太危险了。我制定了一个计划，利用遥控拆除机器人在夜间/周末剥离石棉。慢但安全，且保持学校开放。"'
                },
                consequence: {
                    en: '🦾 High-Tech Solution! It costs $3M (over budget), but the parents crowd-fund the extra. You demonstrate how robotics can solve hazmat issues. You start a specialized hazmat-robotics firm.',
                    th: '🦾 ทางออกไฮเทค! ใช้เงิน $3M (เกินงบ) แต่ผู้ปกครองระดมทุนส่วนเพิ่มให้ คุณสาธิตว่าหุ่นยนต์แก้ปัญหาวัตถุอันตรายได้อย่างไร คุณเปิดบริษัทหุ่นยนต์วัตถุอันตรายเฉพาะทาง',
                    zh: '🦾 高科技解决方案！耗资300万美元（超出预算），但家长们众筹了额外费用。你展示了机器人如何解决危险品问题。你创办了一家专业的危险品机器人公司。'
                },
                stats: { competence: 45, ethics: 45, leadership: 40, innovation: 50 }
            }
        ]
    },
    {
        id: 'geo_018',
        text: {
            en: '☠️ The Cyanide Spill: A gold mine tailings dam leaks cyanide into a river. The company wants to"dilute it"by releasing more water from an upstream dam to flush it out. This will wash the poison downstream to a fishing village but lower the concentration to"legal"levels quickly.',
            th: '☠️ การรั่วไหลของไซยาไนด์: เขื่อนกากแร่ทองคำรั่วไหลไซยาไนด์ลงแม่น้ำ บริษัทต้องการ"เจือจางมัน"โดยการปล่อยน้ำเพิ่มจากเขื่อนต้นน้ำเพื่อล้างมันออก สิ่งนี้จะพัดพาพิษลงไปปลายน้ำสู่หมู่บ้านชาวประมง แต่ลดความเข้มข้นลงสู่ระดับ"ถูกกฎหมาย"อย่างรวดเร็ว',
            zh: '☠️ 氰化物泄漏：金矿尾矿坝将氰化物泄漏到河流中。公司希望通过从上游大坝释放更多的水来"稀释它"，以将其冲走。这将把毒药冲到下游的渔村，但迅速将浓度降低到"合法"水平。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌊 The Flush Strategy:"Biology is numbers. Dilution is the solution to pollution. We flush it. The fish might suffer, but no humans will die from acute poisoning."',
                    th: '🌊 กลยุทธ์การล้าง:"ชีววิทยาคือตัวเลข การเจือจางคือทางแก้ของมลพิษ เราล้างมัน ปลาอาจทรมาน แต่ไม่มีมนุษย์คนไหนตายจากพิษเฉียบพลัน"',
                    zh: '🌊 冲洗策略："生物学就是数字。稀释是污染的解决方案。我们冲掉它。鱼可能会遭殃，但没有人会死于急性中毒。"'
                },
                consequence: {
                    en: '🎣 Dead Zone! You meet legal limits. But the"diluted"flush wipes out the fish eggs in the estuary. The fishing village loses its livelihood for 5 years. They sue for economic damages. You followed regulations but destroyed an economy.',
                    th: '🎣 เดดโซน! คุณผ่านเกณฑ์กฎหมาย แต่การล้างแบบ"เจือจาง"กวาดล้างไข่ปลาในปากแม่น้ำ หมู่บ้านชาวประมงสูญเสียอาชีพเป็นเวลา 5 ปี พวกเขาฟ้องเรียกค่าเสียหายทางเศรษฐกิจ คุณทำตามกฎแต่ทำลายเศรษฐกิจ',
                    zh: '🎣死区！你达到了法律限制。但"稀释"冲洗消灭了河口的鱼卵。渔村失去了5年的生计。他们起诉要求经济赔偿。你遵守了规定，但摧毁了一个经济体。'
                },
                stats: { competence: 40, ethics: 20, leadership: 30, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🧪 Chemical Neutralization:"Dumping more water is lazy. We dump tons of Hydrogen Peroxide and Ferrous Sulfate to break down the cyanide instantly. It costs $5M and turns the river red (rust), but kills the poison."',
                    th: '🧪 การทำให้เป็นกลางทางเคมี:"การเทน้ำเพิ่มมันมักง่าย เราเทไฮโดรเจนเปอร์ออกไซด์และเฟอร์รัสซัลเฟตตันๆ เพื่อสลายไซยาไนด์ทันที ใช้เงิน $5M และทำให้น้ำเป็นสีแดง (สนิม) แต่ฆ่าพิษได้"',
                    zh: '🧪 化学中和："倒更多的水是懒惰的做法。我们倾倒成吨的过氧化氢和硫酸亚铁来瞬间分解氰化物。这耗资500万美元，并使河流变红（铁锈），但能杀灭毒素。"'
                },
                consequence: {
                    en: '🔴 The Red River! The river runs red like blood. Panic ensues. BUT, the water is non-toxic. The fish survive. Once the rust settles, the river recovers fully. You are praised for decisive chemical intervention.',
                    th: '🔴 แม่น้ำสีแดง! แม่น้ำไหลเป็นสีแดงเหมือนเลือด เกิดความตื่นตระหนก แต่ น้ำไม่มีพิษ ปลา รอด เมื่อสนิมตกตะกอน แม่น้ำก็ฟื้นตัวเต็มที่ คุณได้รับคำชมจากการแทรกแซงทางเคมีที่เด็ดขาด',
                    zh: '🔴红河！河水像血一样红。随后出现了恐慌。但是，水是无毒的。鱼活了下来。一旦铁锈沉淀，河流就会完全恢复。你因果断的化学干预而受到称赞。'
                },
                stats: { competence: 50, ethics: 45, leadership: 45, innovation: 45 }
            },
            {
                id: 'C',
                text: {
                    en: '🚧 Containment Dam:"We bulldoze a temporary earthen dam downstream immediately to catch the plume. Then we pump it out and treat it. It floods a few acres of forest."',
                    th: '🚧 เขื่อนกักกัน:"เราใช้รถไถสร้างเขื่อนดินชั่วคราวปลายน้ำทันทีเพื่อดักจับมลพิษ จากนั้นเราสูบมันออกและบำบัด มันทำให้น้ำท่วมป่าไม่กี่เอเคอร์"',
                    zh: '🚧 围堵坝："我们立即在下游推土建造一座临时土坝来拦截羽流。然后我们把它抽出来处理。这淹没了几英亩森林。"'
                },
                consequence: {
                    en: '🧱 The Physical Barrier! Good engineering. You catch 90% of the spill. The treatment takes months. It\'s messy and expensive, but valid. You are seen as a"boots on the ground"problem solver.',
                    th: '🧱 สิ่งกีดขวางทางกายภาพ! วิศวกรรมที่ดี คุณดักจับการรั่วไหลได้ 90% การบำบัดใช้เวลาหลายเดือน มันเละเทะและแพง แต่ได้ผล คุณถูกมองว่าเป็นนักแก้ปัญหาที่"ลงมือทำจริง"',
                    zh: '🧱 物理屏障！很好的工程。你拦截了90%的泄漏。处理需要几个月。这很麻烦且昂贵，但有效。你被视为"脚踏实地"的问题解决者。'
                },
                stats: { competence: 45, ethics: 40, leadership: 40, innovation: 30 }
            },
            {
                id: 'D',
                text: {
                    en: '🙊 Wait and See:"Sunlight breaks down cyanide naturally (UV photolysis). Let\'s just monitor it. If it doesn\'t degrade, we act. Until then, hush."',
                    th: '🙊 รอดูสถานการณ์:"แสงแดดสลายไซยาไนด์ตามธรรมชาติ (UV photolysis) แค่เฝ้าดูมัน ถ้าไม่ย่อยสลาย เราค่อยลงมือ จนกว่าจะถึงตอนนั้น เงียบไว้"',
                    zh: '🙊 观望："阳光自然分解氰化物（紫外光解）。我们就监测它。如果它不降解，我们就行动。在此之前，嘘。"'
                },
                consequence: {
                    en: '⛅ Cloudy Forecast! A storm hits. No sun. The cyanide flows undegraded. It hits the village water supply. People get sick. You are charged with"reckless endangerment."',
                    th: '⛅ พยากรณ์อากาศมีเมฆมาก! พายุเข้า ไม่มีแดด ไซยาไนด์ไหลไปไม่ย่อยสลาย เข้าสู่แหล่งน้ำหมู่บ้าน คนป่วย คุณถูกตั้งข้อหา"ทำให้เกิดอันตรายโดยประมาท"',
                    zh: '⛅ 多云预报！风暴来袭。没有太阳。氰化物未降解地流过。它击中了村庄的供水系统。人们生病了。你被指控"鲁莽危害"。'
                },
                stats: { competence: 30, ethics: -40, leadership: -30, innovation: 10 }
            }
        ]
    },
    {
        id: 'geo_019',
        text: {
            en: '📉 The Earthquake Prediction: Your new AI model predicts a magnitude 7.0 quake hitting the capital city in 48 hours with 85% confidence. The city has 10 million people. Evacuation would cause panic, looting, and maybe deaths. If you are wrong, the economy collapses ($50B loss).',
            th: '📉 การทำนายแผ่นดินไหว: โมเดล AI ใหม่ของคุณทำนายว่าแผ่นดินไหวขนาด 7.0 จะถล่มเมืองหลวงใน 48 ชั่วโมงด้วยความมั่นใจ 85% เมืองมีประชากร 10 ล้านคน การอพยพจะทำให้เกิดความตื่นตระหนก การปล้นสะดม และอาจมีผู้เสียชีวิต ถ้าคุณผิด เศรษฐกิจพังพินาศ (สูญเสีย $50B)',
            zh: '📉 地震预测：你的新AI模型以85%的置信度预测48小时内会有7.0级地震袭击首都。该市有1000万人口。疏散会导致恐慌、抢劫，甚至死亡。如果你错了，经济就会崩溃（损失500亿美元）。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Full Public Warning:"I cannot withhold this. I announce the prediction on national TV. Better safe than dead. I stake my entire reputation on this model."',
                    th: '📢 คำเตือนสาธารณะเต็มรูปแบบ:"ฉันปิดบังเรื่องนี้ไม่ได้ ฉันประกาศคำทำนายทางทีวีระดับชาติ ปลอดภัยไว้ก่อนดีกว่าตาย ฉันเอาชื่อเสียงทั้งหมดของฉันเป็นเดิมพันกับโมเดลนี้"',
                    zh: '📢 全面公开警告："我不能隐瞒这一点。我在国家电视台上宣布这一预测。宁安全也不要死。我把我的全部声誉都押在这个模型上。"'
                },
                consequence: {
                    en: '🏚️ The Shake or Fake? If it hits: You are the Prophet, savior of millions. If it misses: You are the most hated person in history, sued for billions, jailed for inducing panic. High risk, ultimate stakes.',
                    th: '🏚️ ไหวหรือลวง? ถ้ามันเกิด: คุณคือศาสดา ผู้ช่วยชีวิตนับล้าน ถ้าไม่เกิด: คุณคือคนที่ถูกเกลียดที่สุดในประวัติศาสตร์ ถูกฟ้องเป็นพันล้าน ติดคุกข้อหาก่อความตื่นตระหนก ความเสี่ยงสูง เดิมพันสูงสุด',
                    zh: '🏚️ 震动还是假象？如果发生了：你是先知，数百万人的救世主。如果错过了：你是历史上最令人讨厌的人，被起诉数十亿美元，因引发恐慌而入狱。高风险，终极赌注。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '👮 Quiet Alert to Services:"I tell emergency services and hospitals to go to \'Code Red\' readiness only. No public announcement. We prepare for the worst without causing panic."',
                    th: '👮 แจ้งหน่วยงานเงียบๆ:"ฉันบอกหน่วยฉุกเฉินและโรงพยาบาลให้เตรียมพร้อมระดับ \'Code Red\' เท่านั้น ไม่มีการประกาศต่อสาธารณะ เราเตรียมรับมือสิ่งเลวร้ายที่สุดโดยไม่ทำให้ตื่นตระหนก"',
                    zh: '👮 向服务部门发出悄悄警报："我告诉紧急服务部门和医院只进入\'红色代码\'准备状态。不公开发布。我们为最坏的情况做准备，而不引起恐慌。"'
                },
                consequence: {
                    en: '🚑 Controlled Chaos! The quake hits. Public wasn\'t ready, but ambulances were. Death toll is reduced by 20%. You are criticized for not warning everyone, but praised for preventing a panic stampede. A balanced ethical choice.',
                    th: '🚑 ความโกลาหลที่ควบคุมได้! แผ่นดินไหวเกิดขึ้น ประชาชนไม่พร้อม แต่รถพยาบาลพร้อม ยอดผู้เสียชีวิตลดลง 20% คุณถูกวิจารณ์ที่ไม่เตือนทุกคน แต่ได้รับคำชมที่ป้องกันการเหยียบกันตายจากการตื่นตระหนก ทางเลือกจริยธรรมที่สมดุล',
                    zh: '🚑 受控的混乱！地震来袭。公众没有准备好，但救护车准备好了。死亡人数减少了20%。你因没有警告所有人而受到批评，但因防止了恐慌性踩踏而受到称赞。一个平衡的道德选择。'
                },
                stats: { competence: 40, ethics: 35, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🤷 Suppress the AI:"Models are glitchy. 85% isn\'t 100%. I can\'t ruin the city based on a black box algorithm. I delete the run log. We wait."',
                    th: '🤷 ระงับ AI:"โมเดลมันมีข้อผิดพลาด 85% ไม่ใช่ 100% ฉันไม่สามารถทำลายเมืองด้วยอัลกอริทึมกล่องดำ ฉันลบบันทึกการรัน เราจะรอ"',
                    zh: '🤷 压制AI："模型有故障。85%不是100%。我不能因为一个黑盒算法毁了这个城市。我删除了运行日志。我们等待。"'
                },
                consequence: {
                    en: '🧟 The Guilt Trip! The quake hits. 50,000 die. You could have saved them. No one knows you predicted it. You live with the secret shame forever. You quit geology and become a monk.',
                    th: '🧟 ตราบาป! แผ่นดินไหวเกิดขึ้น 50,000 คนตาย คุณน่าจะช่วยพวกเขาได้ ไม่มีใครรู้ว่าคุณทำนายได้ คุณอยู่กับความอับอายลับๆ นี้ตลอดไป คุณลาออกจากวงการธรณีและบวชพระ',
                    zh: '🧟 负罪感！地震来袭。5万人死亡。你本可以救他们。没人知道你预测到了。你永远带着秘密的耻辱生活。你退出了地质界，成为了一名僧侣。'
                },
                stats: { competence: 30, ethics: -50, leadership: -30, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Leak as"Rumor":"I post the prediction on Reddit anonymously. \'My uncle works at the survey...\'. Let the viral internet spread the warning organically. I deny involvement."',
                    th: '📉 ปล่อยข่าวลือ:"ฉันโพสต์คำทำนายใน Reddit แบบไม่ระบุตัวตน \'ลุงฉัยทำงานที่กรมสำรวจ...\' ให้อินเทอร์เน็ตไวรัลกระจายคำเตือนเอง ฉันปฏิเสธความเกี่ยวข้อง"',
                    zh: '📉 泄露为"谣言"："我匿名在Reddit上发布预测。\'我叔叔在测量局工作……\'让病毒式互联网有机地传播警告。我否认参与。"'
                },
                consequence: {
                    en: '🗣️ Viral Panic! The rumor spreads. Some leave, some stay. It creates confusion. The quake hits. You saved the"believers."Authorities are furious at the"leaker."A chaotic but partial success.',
                    th: '🗣️ ความตื่นตระหนกไวรัล! ข่าวลือกระจาย บางคนหนี บางคนอยู่ มันสร้างความสับสน แผ่นดินไหวเกิดขึ้น คุณช่วย"ผู้ศรัทธา"ได้ ทางการโกรธจัดกับ"คนปล่อยข่าว"ความสำเร็จที่โกลาหลแต่ก็ได้ผลบ้าง',
                    zh: '🗣️ 病毒式恐慌！谣言传播。有的离开，有的留下。这造成了混乱。地震来袭。你救了"信徒"。当局对"泄密者"感到愤怒。一次混乱但不完全的成功。'
                },
                stats: { competence: 35, ethics: 25, leadership: 10, innovation: 40 }
            }
        ]
    },
    {
        id: 'geo_020',
        text: {
            en: '☀️ Geo-Engineering"Sun-Dimming": To stop catastrophic warming, a UN committee considers injecting sulfur dioxide into the stratosphere (simulating a volcano) to reflect sunlight. You are lead scientist. Models show it stops warming instantly but disrupts Asian Monsoons, potentially causing famine for 2 Billion people.',
            th: '☀️ วิศวกรรมธรณี"การหรี่แสงอาทิตย์": เพื่อหยุดโลกร้อนหายนะ คณะกรรมการ UN พิจารณาฉีดซัลเฟอร์ไดออกไซด์เข้าสู่ชั้นบรรยากาศสตราโตสเฟียร์ (จำลองภูเขาไฟ) เพื่อสะท้อนแสงอาทิตย์ คุณเป็นหัวหน้านักวิทยาศาสตร์ โมเดลแสดงว่ามันหยุดโลกร้อนทันทีแต่รบกวนมรสุมเอเชีย อาจทำให้เกิดความอดอยากแก่คน 2 พันล้านคน',
            zh: '☀️ 地球工程"太阳调光"：为了阻止灾难性的变暖，一个联合国委员会考虑向平流层注入二氧化硫（模拟火山）以反射阳光。你是首席科学家。模型显示它能立即停止变暖，但会破坏亚洲季风，可能导致20亿人饥荒。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Launch the Shield:"The Arctic is melting NOW. We must act. We launch the sulfur. We send massive food aid to Asia to compensate. It\'s the lesser of two evils."',
                    th: '🚀 ปล่อยโล่:"อาร์กติกกำลังละลาย เดี๋ยวนี้ เราต้องลงมือ เราปล่อยซัลเฟอร์ เราส่งความช่วยเหลือด้านอาหารมหาศาลไปเอเชียเพื่อชดเชย มันคือความชั่วร้ายที่น้อยกว่า"',
                    zh: '🚀 发射护盾："北极正在融化。我们必须行动。我们发射硫磺。我们向亚洲运送大量粮食援助以进行补偿。这是两害相权取其轻。"'
                },
                consequence: {
                    en: '❄️ The Cool World! Temperatures drop 1.5°C. Ice sheets stabilize. BUT, India faces a mega-drought. Political wars erupt. You saved the poles but broke the tropics. History calls you the"Ice King/Queen"with mixed feelings.',
                    th: '❄️ โลกเย็น! อุณหภูมิลด 1.5°C แผ่นน้ำแข็งเสถียร แต่ อินเดียเผชิญภัยแล้งยักษ์ สงครามการเมืองปะทุ คุณรักษาขั้วโลกแต่ทำลายเขตร้อน ประวัติศาสตร์เรียกคุณว่า"ราชา/ราชินีน้ำแข็ง"ด้วยความรู้สึกผสมปนเป',
                    zh: '❄️ 清凉世界！温度下降1.5°C。冰盖稳定。但是，印度面临特大干旱。政治战争爆发。你拯救了极地，但破坏了热带。历史称你为"冰王/后"，毁誉参半。'
                },
                stats: { competence: 50, ethics: 20, leadership: 50, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Veto the Plan:"The risk of famine is unacceptable. We cannot play God with the weather systems. I kill the project and demand aggressive carbon cuts instead."',
                    th: '🚫 ยับยั้งแผน:"ความเสี่ยงของความอดอยากยอมรับไม่ได้ เราเล่นเป็นพระเจ้ากับระบบสภาพอากาศไม่ได้ ฉันล้มโครงการและเรียกร้องการลดคาร์บอนอย่างรุนแรงแทน"',
                    zh: '🚫 否决计划："饥荒的风险是不可接受的。我们不能像上帝一样操纵天气系统。我终止该项目，并要求大幅削减碳排放。"'
                },
                consequence: {
                    en: '🔥 The Slow Burn! Warming continues. Sea levels rise. Cities flood. But you avoided the immediate famine. Humanity struggles on naturally. You are praised for your caution/humility.',
                    th: '🔥 การเผาไหม้อย่างช้าๆ! โลกร้อนดำเนินต่อไป ระดับน้ำทะเลสูงขึ้น เมืองน้ำท่วม แต่คุณหลีกเลี่ยงความอดอยากเฉพาะหน้าได้ มนุษยชาติดิ้นรนต่อไปตามธรรมชาติ คุณได้รับคำชมในความระมัดระวัง/ความถ่อมตน',
                    zh: '🔥 缓慢燃烧！变暖仍在继续。海平面上升。城市被淹。但你避免了眼前的饥荒。人类顺其自然地挣扎。你因谨慎/谦逊而受到称赞。'
                },
                stats: { competence: 40, ethics: 45, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '📉 Localized Trial:"Global is too risky. We test over the poles only. If the monsoons shift even 1%, we abort immediately. Adaptive management."',
                    th: '📉 การทดลองเฉพาะที่:"ระดับโลกเสี่ยงเกินไป เราทดสอบเหนือขั้วโลกเท่านั้น ถ้ามรสุมเปลี่ยนแม้แต่ 1% เรายกเลิกทันที การจัดการแบบปรับตัว"',
                    zh: '📉 局部试验："全球范围太冒险了。我们要只在极地上空测试。如果季风移动哪怕1%，我们立即中止。适应性管理。"'
                },
                consequence: {
                    en: '🧪 Scientific Approach! The polar test works moderately well. It slows the melt without wrecking the monsoon. You prove geo-engineering is a scalpel, not a hammer. Funding increases.',
                    th: '🧪 แนวทางวิทยาศาสตร์! การทดสอบขั้วโลกได้ผลดีพอสมควร มันชะลอการละลายโดยไม่ทำลายมรสุม คุณพิสูจน์ว่าวิศวกรรมธรณีเป็นมีดผ่าตัด ไม่ใช่ค้อน เงินทุนเพิ่มขึ้น',
                    zh: '🧪 科学方法！极地测试效果尚可。它在不破坏季风的情况下减缓了融化。你证明了地球工程是一把手术刀，而不是锤子。资金增加。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '☁️ Cloud Brightening Instead:"Sulfur is toxic. I pivot the team to \'Marine Cloud Brightening\' (spraying sea salt). It\'s reversible and localized. Safer tech."',
                    th: '☁️ การเพิ่มความสว่างเมฆแทน:"ซัลเฟอร์เป็นพิษ ฉันเปลี่ยนทีมไปทำ \'การเพิ่มความสว่างเมฆทางทะเล\' (พ่นเกลือทะเล) มันย้อนกลับได้และเฉพาะที่ เทคโนโลยีที่ปลอดภัยกว่า"',
                    zh: '☁️ 云层增亮替代："硫磺有毒。我将团队转向\'海洋云层增亮\'（喷洒海盐）。这是可逆的且局部的。更安全的技术。"'
                },
                consequence: {
                    en: '💡 The Safer Bet! It\'s less effective than sulfur but carries 0% famine risk. It cools the oceans slightly, saving coral reefs. You are hailed as the"Green Geo-engineer."',
                    th: '💡 การเดิมพันที่ปลอดภัยกว่า! มันมีประสิทธิภาพน้อยกว่าซัลเฟอร์แต่มีความเสี่ยงความอดอยาก 0% มันทำมหาสมุทรเย็นลงเล็กน้อย ช่วยแนวปะการัง คุณได้รับการยกย่องว่าเป็น"วิศวกรธรณีสีเขียว"',
                    zh: '💡 更安全的赌注！它的效果不如硫磺，但饥荒风险为0%。它使海洋稍微冷却，拯救了珊瑚礁。你被誉为"绿色地球工程师"。'
                },
                stats: { competence: 45, ethics: 50, leadership: 35, innovation: 45 }
            }
        ]
    },

    // SECTION 5: FRONTIER & ETHICAL DILEMMAS (Questions 21-30)

    {
        id: 'geo_021',
        text: {
            en: '🌊 The Deep Sea Nodules: You find a field of polymetallic nodules (Manganese, Cobalt) on the abyssal plain. Vacuuming them up would flood the battery market, lowering EV prices by 50%. But it will create sediment plumes that smother a unique deep-sea ecosystem we barely understand.',
            th: '🌊 ก้อนโลหะใต้ทะเลลึก: คุณพบทุ่งก้อนโลหะโพลีเมทัลลิก (แมงกานีส, โคบอลต์) บนที่ราบก้นสมุทร การดูดมันขึ้นมาจะทำให้ตลาดแบตเตอรี่ล้นตลาด ลดราคา EV ลง 50% แต่จะสร้างตะกอนฟุ้งกระจายที่ปกคลุมระบบนิเวศใต้ทะเลลึกที่เราแทบไม่เข้าใจ',
            zh: '🌊不仅海结核：你在深海平原上发现了一片多金属结核（锰、钴）。用吸尘器开采它们将淹没电池市场，使电动汽车价格降低50%。但这会产生沉积物羽流，窒息我们几乎不了解的独特深海生态系统。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚜 Harvest It All:"The surface world is burning. We need batteries NOW. The deep sea is dark and empty. I authorize full-scale automated dredging."',
                    th: '🚜 เก็บเกี่ยวให้หมด:"โลกผิวน้ำกำลังไหม้ เราต้องการแบตเตอรี่เดี๋ยวนี้ ทะเลลึกมืดและว่างเปล่า ฉันอนุมัติการขุดลอกอัตโนมัติเต็มรูปแบบ"',
                    zh: '🚜 全部收割："地表世界正在燃烧。我们现在需要电池。深海黑暗而空旷。我授权进行全面自动疏浚。"'
                },
                consequence: {
                    en: '⚡ Electric Future! EV prices plummet. Adoption soars. Surface carbon drops. But 10 years later, we discover the sediment plumes wiped out a sponge species that held the cure for Alzheimer\'s. A tragic trade-off.',
                    th: '⚡ อนาคตไฟฟ้า! ราคา EV ดิ่งลง การใช้งานพุ่งสูง คาร์บอนบนผิวดินลดลง แต่ 10 ปีต่อมา เราค้นพบว่าตะกอนทำลายสายพันธุ์ฟองน้ำที่มีทางรักษาอัลไซเมอร์ การแลกเปลี่ยนที่น่าเศร้า',
                    zh: '⚡ 电动未来！电动汽车价格暴跌。采用率飙升。地表碳排放下降。但10年后，我们发现沉积物羽流消灭了一种海绵物种，而这种海绵掌握着治疗阿尔茨海默病的良方。悲剧性的权衡。'
                },
                stats: { competence: 45, ethics: 20, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🛡️ Declare Protection Zone:"We know too little. I apply the Precautionary Principle. I declare the area a Marine Heritage Site, banning mining until we have 50 years of data."',
                    th: '🛡️ ประกาศเขตคุ้มครอง:"เรารู้น้อยเกินไป ฉันใช้หลักการป้องกันไว้ก่อน ฉันประกาศให้พื้นที่นี้เป็นมรดกทางทะเล ห้ามทำเหมืองจนกว่าเราจะมีข้อมูล 50 ปี"',
                    zh: '🛡️ 宣布设立保护区："我们知之甚少。我应用预防原则。我宣布该区域为海洋遗产地，禁止采矿，直到我们拥有50年的数据。"'
                },
                consequence: {
                    en: '🐢 Ocean Safe, Climate Lag! The ecosystem is pristine. But battery shortages continue. EV adoption stalls. Oil companies stay powerful longer. Critics blame you for slowing the green transition.',
                    th: '🐢 มหาสมุทรปลอดภัย ภูมิอากาศล่าช้า! ระบบนิเวศบริสุทธิ์ แต่แบตเตอรี่ยังขาดแคลน การใช้ EV ชะงัก บริษัทน้ำมันมีอำนาจนานขึ้น นักวิจารณ์โทษคุณที่ทำให้การเปลี่ยนผ่านสีเขียวช้าลง',
                    zh: '🐢 海洋安全，气候滞后！生态系统保持原始状态。但电池短缺仍在继续。电动汽车普及停滞。石油公司保持强势的时间更长。批评者指责你减缓了绿色转型。'
                },
                stats: { competence: 40, ethics: 50, leadership: 30, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🤖 Low-Impact Plucking:"No dredging. I commission a swarm of AI drones to gently pick up nodules one by one without disturbing the sediment. Costs 10x more, but it\'s clean."',
                    th: '🤖 การหยิบจับผลกระทบต่ำ:"ไม่ขุดลอก ฉันจ้างฝูงโดรน AI ให้หยิบก้อนโลหะทีละก้อนอย่างนุ่มนวลโดยไม่รบกวนตะกอน แพงกว่า 10 เท่า แต่สะอาด"',
                    zh: '🤖 低影响采摘："不进行疏浚。我委托一群AI无人机轻轻地逐一拾取结核，不扰动沉积物。成本高出10倍，但很干净。"'
                },
                consequence: {
                    en: '🚀 Tech Breakthrough! It works slowly. The nodules are expensive ("Artisan Conflict-Free Cobalt"), marketed to luxury brands. You launch a premium ethical mining industry.',
                    th: '🚀 ความก้าวหน้าทางเทคโนโลยี! มันทำงานช้า ก้อนโลหะมีราคาแพง ("โคบอลต์ทำมือไร้ความขัดแย้ง") ทำการตลาดกับแบรนด์หรู คุณเปิดตัวอุตสาหกรรมเหมืองแร่ที่มีจริยธรรมระดับพรีเมียม',
                    zh: '🚀 技术突破！进展缓慢。结核很昂贵（"工匠无冲突钴"），向奢侈品牌推销。你启动了一个高端道德采矿行业。'
                },
                stats: { competence: 50, ethics: 45, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Sell the Coordinates:"I found them, but I won\'t mine them. I sell the map to the highest bidder (a shady conglomerate) and wash my hands of the result."',
                    th: '🤝 ขายพิกัด:"ฉันเจอมัน แต่ฉันจะไม่ขุด ฉันขายแผนที่ให้ผู้เสนอราคาสูงสุด (กลุ่มธุรกิจสีเทา) และล้างมือจากผลลัพธ์"',
                    zh: '🤝 出售坐标："我找到了，但我不会开采。我把地图卖给出价最高的人（一个黑心财团），然后洗手不干。"'
                },
                consequence: {
                    en: '💰 Blood Money! You get rich. The conglomerate destroys the seafloor unregulated. International waters have no police. You watch the destruction from your yacht, knowing you caused it.',
                    th: '💰 เงินเปื้อนเลือด! คุณรวย กลุ่มธุรกิจทำลายพื้นทะเลโดยไม่มีระเบียบ น่านน้ำสากลไม่มีตำรวจ คุณดูการทำลายล้างจากเรือยอร์ชของคุณ รู้ว่าคุณเป็นคนก่อ',
                    zh: '💰 血钱！你发财了。财团不受监管地破坏海床。国际水域没有警察。你在游艇上看着破坏，知道是你造成的。'
                },
                stats: { competence: 20, ethics: -40, leadership: -20, innovation: 0 }
            }
        ]
    },
    {
        id: 'geo_022',
        text: {
            en: '🏗️ The Sand Mafia: A developing nation needs sand for concrete to build hospitals and schools. The legal supply is exhausted. A local"Sand Mafia"offers to dredge a protected river delta illegally for you at night. Without this sand, construction stops indefinitely.',
            th: '🏗️ มาเฟียทราย: ประเทศกำลังพัฒนาต้องการทรายสำหรับคอนกรีตเพื่อสร้างโรงพยาบาลและโรงเรียน แหล่งถูกกฎหมายหมดแล้ว"มาเฟียทราย"ท้องถิ่นเสนอขุดลอกดินดอนสามเหลี่ยมปากแม่น้ำที่ได้รับการคุ้มครองอย่างผิดกฎหมายให้คุณในตอนกลางคืน หากไม่มีทรายนี้ การก่อสร้างจะหยุดชะงักอย่างไม่มีกำหนด',
            zh: '🏗️ 沙土黑手党：一个发展中国家需要沙子来制造混凝土以建造医院和学校。合法供应已耗尽。当地的"沙土黑手党"提议在夜间为你非法通过疏浚受保护的河流三角洲。没有这些沙子，建设将无限期停止。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🌑 Look Away:"We need the hospitals. I pay them in cash. Don\'t tell me where it comes from. Just deliver 1000 tons by Monday."',
                    th: '🌑 ทำเป็นไม่เห็น:"เราต้องการโรงพยาบาล ฉันจ่ายเงินสด ไม่ต้องบอกว่ามาจากไหน แค่ส่ง 1000 ตันภายในวันจันทร์"',
                    zh: '🌑 视而不见："我们需要医院。我付现金给他们。别告诉我它是哪儿来的。周一前交货1000吨就行。"'
                },
                consequence: {
                    en: '🏥 Buildings Up, Delta Down! The hospitals are built. But the delta erosion causes major flooding in the next monsoon, destroying poor villages. You traded infrastructure for stability. The guilt lingers.',
                    th: '🏥 ตึกขึ้น เดลต้าลง! โรงพยาบาลถูกสร้าง แต่การกัดเซาะของเดลต้าทำให้น้ำท่วมใหญ่ในมรสุมหน้า ทำลายหมู่บ้านยากจน คุณแลกโครงสร้างพื้นฐานกับความมั่นคง ความรู้สึกผิดยังคงอยู่',
                    zh: '🏥 建筑起来了，三角洲消失了！医院建成了。但三角洲侵蚀在随后的季风中导致大洪水，摧毁了贫穷的村庄。你用基础设施换取了稳定性。内疚感挥之不去。'
                },
                stats: { competence: 30, ethics: -30, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🧱 Substitute Materials:"Sand is over. We pivot to \'Desert Sand Concrete\' using a new (untested) chemical binder I read about. It costs same but risks structural weakness."',
                    th: '🧱 วัสดุทดแทน:"ทรายจบแล้ว เราเปลี่ยนไปใช้ \'คอนกรีตทรายทะเลทราย\' โดยใช้สารยึดเกาะเคมีใหม่ (ยังไม่ทดสอบ) ที่ฉันอ่านเจอ ราคาเท่ากันแต่เสี่ยงโครงสร้างอ่อนแอ"',
                    zh: '🧱 替代材料："沙子用完了。我们转向\'沙漠沙混凝土\'，使用我在书中读到的一种新的（未经测试的）化学粘合剂。成本相同，但有结构脆弱的风险。"'
                },
                consequence: {
                    en: '🧪 Risky Innovation! The binder holds... mostly. Cracks appear in 5 years, requiring repairs. But you broke the reliance on river sand. You prompt a global research race for sand alternatives.',
                    th: '🧪 นวัตกรรมเสี่ยง! ตัวยึดเกาะยึดอยู่... ส่วนใหญ่ รอยร้าวปรากฏใน 5 ปี ต้องซ่อมแซม แต่คุณทำลายการพึ่งพาทรายแม่น้ำ คุณกระตุ้นการแข่งวิจัยระดับโลกสำหรับทางเลือกทราย',
                    zh: '🧪 冒险创新！粘合剂支撑住了……大部分。5年后出现裂缝，需要维修。但你打破了对河沙的依赖。你引发了全球寻找沙子替代品的研究竞赛。'
                },
                stats: { competence: 45, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '♻️ Recycle Rebellion:"We mine the city itself. I start a program to crush old demolished rubble into aggregate. It slows us down by 50%, but it\'s circular economy."',
                    th: '♻️ การปฏิวัติรีไซเคิล:"เราทำเหมืองในเมืองเลย ฉันเริ่มโครงการบดซากปรักหักพังเก่าเป็นมวลรวม มันทำให้เราช้าลง 50% แต่มันคือเศรษฐกิจหมุนเวียน"',
                    zh: '♻️ 回收叛乱："我们开采城市本身。我启动了一个项目，将旧的拆除瓦砾粉碎成骨料。这让我们慢了50%，但这是循环经济。"'
                },
                consequence: {
                    en: '🔄 Slow but Steady! The delay annoys the government. But the method proves viable. You solve the waste problem AND the sand problem. The UN awards you a sustainability medal.',
                    th: '🔄 ช้าแต่มั่นคง! ความล่าช้าทำให้รัฐบาลรำคาญ แต่วิธีการพิสูจน์แล้วว่าใช้ได้ คุณแก้ปัญหาขยะและปัญหาทราย UN มอบเหรียญความยั่งยืนให้คุณ',
                    zh: '🔄 缓慢但稳健！延误惹恼了政府。但这种方法被证明是可行的。你既解决了废物问题又解决了沙子问题。联合国授予你可持续发展奖章。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🛑 Halt and Report:"I report the Mafia to the federal police. I refuse to build until legal supply is found. I face threats to my life."',
                    th: '🛑 หยุดและรายงาน:"ฉันรายงานมาเฟียต่อตำรวจรัฐบาลกลาง ฉันปฏิเสธที่จะสร้างจนกว่าจะหาแหล่งถูกกฎหมายได้ ฉันเผชิญคำขู่เอาชีวิต"',
                    zh: '🛑 停止并报告："我向联邦警察举报黑手党。在找到合法供应之前，我拒绝施工。我面临生命威胁。"'
                },
                consequence: {
                    en: '🚔 Brave but Stalemate! The police raid the delta. The Mafia retreats. But no sand comes. The hospital is never finished. A skeleton structure stands as a monument to your integrity. The locals are divided on whether you are a hero or a blocker.',
                    th: '🚔 กล้าหาญแต่จนตรอก! ตำรวจบุกเดลต้า มาเฟียถอย แต่ไม่มีทรายมา โรงพยาบาลสร้างไม่เสร็จ โครงสร้างกระดูกงูตั้งตระหง่านเป็นอนุสรณ์ความซื่อสัตย์ของคุณ คนท้องถิ่นเสียงแตกวาคุณเป็นฮีโร่หรือตัวขัดขวาง',
                    zh: '🚔 勇敢但僵局！警察突袭了三角洲。黑手党撤退了。通过没有沙子运来。医院从未完工。一个骨架结构为你正直的纪念碑。当地人在你是英雄还是阻碍者的问题上存在分歧。'
                },
                stats: { competence: 30, ethics: 50, leadership: 30, innovation: 10 }
            }
        ]
    },
    {
        id: 'geo_023',
        text: {
            en: '🌖 Moon Base Ice: You command the Shackleton Crater base. You find a massive ice deposit. It belongs to"All Mankind"by treaty. But your sponsoring nation orders you to claim it exclusively as"Strategic Water Reserve"and block other nations\' rovers. If you disobey, they cut your oxygen supply budget.',
            th: '🌖 น้ำแข็งฐานดวงจันทร์: คุณบัญชาการฐาน Shackleton Crater คุณพบแหล่งน้ำแข็งขนาดใหญ่ เป็นของ"มวลมนุษยชาติ"ตามสนธิสัญญา แต่ชาติผู้สนับสนุนสั่งให้คุณอ้างสิทธิ์แต่เพียงผู้เดียวว่าเป็น"ทุนสำรองน้ำเชิงยุทธศาสตร์"และขัดขวางรถสำรวจชาติอื่น ถ้าขัดขืน เขาจะตัดงบออกซิเจนของคุณ',
            zh: '🌖 月球基地冰：你指挥着沙克尔顿陨石坑基地。你发现了一个巨大的冰矿床。根据条约，它属于"全人类"。但你的赞助国命令你将其独占为"战略水储备"，并阻止其他国家的探测器。如果你不服从，他们会削减你的氧气供应预算。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚩 Plant the Flag:"I follow orders. My crew\'s survival comes first. I set up perimeter beacons and jam the sensors of the approaching Chinese/Euro rovers."',
                    th: '🚩 ปักธง:"ฉันทำตามคำสั่ง การรอดชีวิตของลูกเรือต้องมาก่อน ฉันตั้งเครื่องส่งสัญญาณขอบเขตและรบกวนสัญญาเซ็นเซอร์ของรถสำรวจจีน/ยุโรปที่เข้ามา"',
                    zh: '🚩 插旗："我服从命令。我的船员的生存是第一位的。我设置周边信标并干扰接近的中国/欧洲探测器的传感器。"'
                },
                consequence: {
                    en: '🚀 Space War I! You secure the ice. Your nation dominates space. But you started a cold war in orbit. Sabotage becomes common. Space is no longer peaceful.',
                    th: '🚀 สงครามอวกาศครั้งที่ 1! คุณยึดน้ำแข็งได้ ชาติของคุณครองอวกาศ แต่คุณเริ่มสงครามเย็นในวงโคจร การวินาศกรรมกลายเป็นเรื่องปกติ อวกาศไม่สงบสุขอีกต่อไป',
                    zh: '🚀 第一太次空战！你保住了冰。你的国家主宰了太空。但你在轨道上发动了冷战。破坏变得司空见惯。太空不再和平。'
                },
                stats: { competence: 40, ethics: -20, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🌍 Leak to the UN:"I broadcast the coordinates on an open channel to Earth. \'Here is the water, come and share it.\' I force my nation\'s hand to cooperate."',
                    th: '🌍 ปล่อยข่าวให้ UN:"ฉันออกอากาศพิกัดในช่องเปิดสู่โลก \'นี่คือน้ำ มาแบ่งกันซะ\' ฉันบีบมือชาติของฉันให้ร่วมมือ"',
                    zh: '🌍 向联合国泄密："我在向地球开放的频道上广播坐标。\'水在这里，来分享吧。\'我迫使我的国家合作。"'
                },
                consequence: {
                    en: '🕊️ Martyr of Luna! Your nation is furious and recalls you. You are court-martialed on Earth. BUT, the international community steps in to manage the ice jointly. You delayed Space War.',
                    th: '🕊️ ผู้พลีชีพแห่งดวงจันทร์! ชาติของคุณโกรธจัดและเรียกตัวกลับ คุณถูกศาลทหารบนโลก แต่ ชุมชนนานาชาติเข้ามาจัดการน้ำแข็งร่วมกัน คุณชะลอสงครามอวกาศ',
                    zh: '🕊️ 月球烈士！你的国家很愤怒，召回了你。你在地球上受到军事法庭审判。但是，国际社会介入共同管理冰层。你推迟了太空战。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '💧 Fake Contamination:"I report the ice is mixed with toxic perchlorates and unusable without my proprietary filter tech (which doesn\'t exist). I buy time to negotiate."',
                    th: '💧 แกล้งปนเปื้อน:"ฉันรายงานว่าน้ำแข็งปนเปื้อนเปอร์คลอเรตเป็นพิษและใช้ไม่ได้ถ้าไม่มีเทคโนโลยีกรองเฉพาะของฉัน (ซึ่งไม่มีจริง) ฉันซื้อเวลาเพื่อเจรจา"',
                    zh: '💧 假污染："我报告说冰中混合了有毒的高氯酸盐，没有我的专有过滤技术（其实不存在）无法使用。我争取时间进行谈判。"'
                },
                consequence: {
                    en: '🤥 The Bluff Holds! Nations hesitate. You use the delay to set up a shared distribution hub informally. By the time they realize the lie, the infrastructure is already shared. Clever diplomacy.',
                    th: '🤥 การบลัฟได้ผล! นานาชาติลังเล คุณใช้ความล่าช้าตั้งศูนย์กระจายสินค้าร่วมกันอย่างไม่เป็นทางการ กว่าพวกเขาจะรู้ความจริง โครงสร้างพื้นฐานก็ถูกแชร์ไปแล้ว การทูตที่ฉลาด',
                    zh: '🤥虚张声势奏效了！各国犹豫不决。你利用延迟非正式地建立了一个共享分发中心。等他们意识到谎言时，基础设施已经共享了。聪明的外交。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🧊 Sabotage the Drill:"If we can\'t share, no one gets it. I trigger a micro-collapse in the lava tube entrance. The ice is sealed off for everyone for 10 years."',
                    th: '🧊 วินาศกรรมเครื่องเจาะ:"ถ้าแบ่งกันไม่ได้ ก็ไม่มีใครได้ ฉันกระตุ้นการถล่มเล็กน้อยที่ปากท่อลาวา น้ำแข็งถูกปิดตายสำหรับทุกคนเป็นเวลา 10 ปี"',
                    zh: '🧊 破坏钻机："如果我们不能分享，谁也别想得到。我在熔岩管入口引发了微型坍塌。冰层被封锁了10年，谁也进不去。"'
                },
                consequence: {
                    en: '💥 Dog in the Manger! You destroyed the access. The mission is a failure. You return in disgrace. Humans have to bring water from Earth at $1M/liter. You set exploration back a decade.',
                    th: '💥 หมาหวงกราง! คุณทำลายทางเข้า ภารกิจล้มเหลว คุณกลับมาอย่างน่าอดสู มนุษย์ต้องเอาน้ำมาจากโลกในราคา $1M/ลิตร คุณทำให้การสำรวจถอยหลังไปหนึ่งทศวรรษ',
                    zh: '💥 占着茅坑不拉屎！你破坏了通道。任务失败。你带着耻辱回来。人类不得不以每升100万美元的价格从地球运水。你让探索倒退了十年。'
                },
                stats: { competence: 30, ethics: 10, leadership: -30, innovation: -10 }
            }
        ]
    },
    {
        id: 'geo_024',
        text: {
            en: '🔥 The Methane Bomb: Surveying the Siberian permafrost, you find a massive methane crater about to"burp."If it blows, it releases 50 million tons of CO2e. You can ignite it now (flaring it to CO2, which is less potent than Methane) or try to cap it (risky, might explode during work).',
            th: '🔥 ระเบิดมีเทน: การสำรวจชั้นดินเยือกแข็งไซบีเรีย คุณพบปล่องมีเทนขนาดใหญ่กำลังจะ"เรอ"ถ้ามันระเบิด จะปล่อย CO2e 50 ล้านตัน คุณสามารถจุดไฟเผามันตอนนี้ (เปลี่ยนเป็น CO2 ซึ่งรุนแรงน้อยกว่ามีเทน) หรือพยายามปิดฝามัน (เสี่ยง อาจระเบิดระหว่างงาน)',
            zh: '🔥 甲烷炸弹：在西伯利亚永久冻土勘测时，你发现一个巨大的甲烷火山口即将"打嗝"。如果它爆炸，将释放5000万吨二氧化碳当量。你可以现在点燃它（将其燃烧成二氧化碳，其威力小于甲烷）或尝试封盖它（有风险，可能在工作中爆炸）。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Burn It:"Better CO2 than Methane. I throw a flare. Calculating the 25x reduction in greenhouse potential. It looks like a portal to hell, but it saves the climate."',
                    th: '🔥 เผามัน:"CO2 ดีกว่ามีเทน หยอดพลุไฟ คำนวณการลดศักยภาพเรือนกระจก 25 เท่า ดูเหมือนประตูนรก แต่ช่วยภูมิอากาศ"',
                    zh: '🔥 烧掉它："二氧化碳比甲烷好。我扔了一枚照明弹。计算出温室效应潜力降低了25倍。它看起来像通往地狱的门户，但它拯救了气候。"'
                },
                consequence: {
                    en: '🌋 Controlled Burn! The pillar of fire lasts 6 months. Locals are terrified. But atmospheric scientists verify you successfully mitigated the damage. A pragmatic, ugly win.',
                    th: '🌋 การเผาแบบควบคุม! เสาเพลิงอยู่นาน 6 เดือน ชาวบ้านหวาดกลัว แต่นักวิทยาศาสตร์บรรยากาศยืนยันว่าคุณบรรเทาความเสียหายได้สำเร็จ ชัยชนะที่ปฏิบัติจริงแต่น่าเกลียด',
                    zh: '🌋 受控燃烧！火柱持续了6个月。当地人吓坏了。但大气科学家证实你成功减轻了损害。一场务实、丑陋的胜利。'
                },
                stats: { competence: 45, ethics: 30, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🏗️ Attempt to Cap:"We can capture this gas for energy! I mobilize a heavy drill team to install a recapture dome. It\'s a race against pressure."',
                    th: '🏗️ พยายามปิดฝา:"เราจับก๊าซนี้มาทำพลังงานได้! ฉันระดมทีมเจาะหนักเพื่อติดตั้งโดมดักจับ แข่งกับแรงดัน"',
                    zh: '🏗️ 尝试封盖："我们可以捕获这种气体作为能源！我调动一支重型钻探队安装一个重新捕获圆顶。这是一场与压力的赛跑。"'
                },
                consequence: {
                    en: '💥 Boom! The pressure was too unstable. The rig sparks. The crater explodes. Your team is killed. The gas is released anyway. Hubris cost lives.',
                    th: '💥 บูม! แรงดันไม่เสถียรเกินไป แท่นเจาะเกิดประกายไฟ ปล่องระเบิด ทีมของคุณเสียชีวิต ก๊าซถูกปล่อยออกมาอยู่ดี ความโอหังแลกด้วยชีวิต',
                    zh: '💥 轰！压力太不稳定了。钻机打火。火山口爆炸。你的团队遇难。不管怎样，气体还是释放了。傲慢让人付出了生命的代价。'
                },
                stats: { competence: 30, ethics: -20, leadership: -50, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '❄️ Liquid Nitrogen Freeze:"Freeze the ground back solid. We pump massive amounts of LN2 to stabilize the permafrost plug until winter returns. Buying time."',
                    th: '❄️ แช่แข็งไนโตรเจนเหลว:"แช่พื้นดินให้กลับมาแข็ง เราปั๊ม LN2 จำนวนมหาศาลเพื่อทำให้จุกดินเยือกแข็งเสถียรจนกว่าฤดูหนาวจะมา ซื้อเวลา"',
                    zh: '❄️ 液氮冷冻："把地面冻回固体。我们泵送大量液氮来稳定永久冻土塞，直到冬天回来。争取时间。"'
                },
                consequence: {
                    en: '🧊 The Big Chill! It works temporarily. Cost is insane. Next summer, it starts melting again. You realize you are fighting a losing battle against global warming thermodynamics.',
                    th: '🧊 ความเย็นยะเยือก! มันได้ผลชั่วคราว ราคาแพงบ้าเลือด ฤดูร้อนหน้า มันเริ่มละลายอีก คุณตระหนักว่าคุณกำลังต่อสู้ที่แพ้ให้กับเทอร์โมไดนามิกส์ของโลกร้อน',
                    zh: '🧊 大寒潮！暂时奏效。成本高得离谱。明年夏天，它又开始融化。你意识到你在与全球变暖热力学进行一场注定失败的战斗。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '🎥 Documentary Protest:"I don\'t touch it. I film it. I create a viral video \'The Earth is Farting Death.\' I use the fear to lobby for climate funding."',
                    th: '🎥 สารคดีประท้วง:"ฉันไม่แตะต้องมัน ฉันถ่ายมัน ฉันทำวิดีโอไวรัล \'โลกกำลังตดความตายออกมา\' ฉันใช้ความกลัวเพื่อล็อบบี้หาทุนภูมิอากาศ"',
                    zh: '🎥 纪录片抗议："我不碰它。我把它拍下来。我制作了一个病毒视频\'地球正在放屁致死\'。我利用恐惧来游说气候资金。"'
                },
                consequence: {
                    en: '📢 Awareness Spike! The gas releases. But the video changes public opinion. Funding pours into permafrost research. You sacrificed the battle to win the war (maybe).',
                    th: '📢 ความตระหนักพุ่ง! ก๊าซรั่วไหล แต่วิดีโอเปลี่ยนความเห็นสาธารณะ เงินทุนไหลเข้าวิจัยดินเยือกแข็ง คุณสละการรบเพื่อชนะสงคราม (มั้ง)',
                    zh: '📢 意识飙升！气体释放。但视频改变了公众舆论。资金涌入永久冻土研究。你牺牲了战斗来赢得战争（也许）。'
                },
                stats: { competence: 20, ethics: 30, leadership: 45, innovation: 30 }
            }
        ]
    },
    {
        id: 'geo_025',
        text: {
            en: '🌋 Volcanic Island Tourism: You monitor an active volcano island popular with tourists. Tremors are slightly elevated but within"normal"background noise. Tour operators pressure you to keep the alert level Green."One Red alert ruins our season,"they say.',
            th: '🌋 การท่องเที่ยวเกาะภูเขาไฟ: คุณเฝ้าระวังเกาะภูเขาไฟที่ยังคุกรุ่นซึ่งเป็นที่นิยมของนักท่องเที่ยว แรงสั่นสะเทือนสูงขึ้นเล็กน้อยแต่ยังอยู่ในเสียงรบกวนพื้นหลัง"ปกติ"ผู้ประกอบการท่องเที่ยวตดดันให้คุณคงระดับเตือนเฝ้าระวังสีเขียว"สีแดงครั้งเดียวทำลายฤดูกาลของเรา"พวกเขากล่าว',
            zh: '🌋 火山岛旅游：你正在监测一个深受游客欢迎的活火山岛。震颤略有升高，但处于"正常"背景噪声范围内。旅游运营商向你施压，要求保持绿色警报级别。"一次红色警报就会毁了我们的旺季，"他们说。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Raise Alert to Yellow:"I see instability. I move to Yellow. No landing in the crater. Boat tours only. Safety matches the data."',
                    th: '🛑 ยกระดับเป็นสีเหลือง:"ฉันเห็นความไม่มั่นคง ฉันเปลี่ยนเป็นสีเหลือง ห้ามลงจอดในปล่อง ทัวร์เรือเท่านั้น ความปลอดภัยตรงกับข้อมูล"',
                    zh: '🛑 将警报提升为黄色："我看到了不稳定性。我调到黄色。禁止在火山口着陆。只能乘船游览。安全与数据相符。"'
                },
                consequence: {
                    en: '⚠️ The Close Call! A phreatic explosion happens 2 days later. Ash covers the landing pad. Because of your Yellow alert, no one was there. You saved 50 lives. Operators grumble but respect you.',
                    th: '⚠️ เฉียดตาย! การระเบิดไอน้ำเกิดขึ้น 2 วันต่อมา เถ้าปกคลุมลานจอด เพราะเตือนสีเหลืองของคุณ ไม่มีใครอยู่ที่นั่น คุณช่วย 50 ชีวิต ผู้ประกอบการบ่นแต่เคารพคุณ',
                    zh: '⚠️ 险些出事！2天后发生潜水层爆炸。随后火山灰覆盖了着陆垫。因为你的黄色警报，那里没有人。你救了50条命。运营商抱怨但尊重你。'
                },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 0 }
            },
            {
                id: 'B',
                text: {
                    en: '🟢 Keep it Green:"Data is inconclusive. I stand down. But I install an extra seismometer and watch it 24/7 personally."',
                    th: '🟢 คงสีเขียวไว้:"ข้อมูลสรุปไม่ได้ ฉันถอย แต่ฉันติดเครื่องวัดความสั่นสะเทือนเพิ่มและเฝ้าดู 24/7 ด้วยตัวเอง"',
                    zh: '🟢 保持绿色："数据尚无定论。我按兵不动。但我安装了一个额外的地震仪并亲自24/7监视它。"'
                },
                consequence: {
                    en: '💀 Tragedy Strikes! The eruption is sudden. No time to warn. 20 tourists are killed. You are investigated for negligence. The"pressure from operators"defense fails. Your career is over.',
                    th: '💀 โศกนาฏกรรม! การระเบิดเกิดขึ้นทันที ไม่มีเวลาเตือน 20 นักท่องเที่ยวเสียชีวิต คุณถูกสอบสวนความประมาท ข้ออ้าง"แรงกดดันจากผู้ประกอบการ"ฟังไม่ขึ้น อาชีพของคุณจบลง',
                    zh: '💀 悲剧发生了！火山爆发很突然。来不及警告。20名游客丧生。你因疏忽而被调查。"来自运营商的压力"的辩护失败。你的职业生涯结束了。'
                },
                stats: { competence: 20, ethics: -50, leadership: -40, innovation: -10 }
            },
            {
                id: 'C',
                text: {
                    en: '🚁 Mandatory Helmets/Gas Masks:"Green alert, but strict PPE protocols. Everyone wears helmets and carries oxygen. Liability waivers signed."',
                    th: '🚁 บังคับหมวกนิรภัย/หน้ากากกันก๊าซ:"เตือนสีเขียว แต่โปรโตคอล PPE เข้มงวด ทุกคนสวมหมวกและพกออกซิเจน เซ็นยกเว้นความรับผิด"',
                    zh: '🚁 强制佩戴头盔/防毒面具："绿色警报，但严格执行个人防护装备（PPE）协议。每个人都戴头盔并携带氧气。签署免责声明。"'
                },
                consequence: {
                    en: '🩹 Partial Protection! The eruption happens. Helmets save some from falling rocks, but burns affect many. It\'s a disaster, but your safety protocols mitigated the worst. You are still sued.',
                    th: '🩹 การปกป้องบางส่วน! การระเบิดเกิดขึ้น หมวกช่วยบางคนจากหินถล่ม แต่แผลไฟไหม้โโนหลายคน เป็นหายนะ แต่โปรโตคอลของคุณบรรเทาสิ่งที่แย่ที่สุด คุณยังถูกฟ้องอยู่ดี',
                    zh: '🩹 部分保护！火山爆发了。头盔救了一些人免于落石伤害，但许多人被烧伤。这是一场灾难，但你的安全协议减轻了最坏的情况。还是要被起诉。'
                },
                stats: { competence: 30, ethics: 30, leadership: 20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Secret Shutdown:"I call the insurance company of the tour boats. I tell them the risk is too high. They cancel the operators\' insurance. Tours stop due to \'paperwork.\' I take the blame for bureaucracy."',
                    th: '📉 สั่งปิดลับ:"ฉันโทรหาบริษัทประกันของเรือทัวร์ บอกความเสี่ยงสูงไป เขายกเลิกประกันผู้ประกอบการ ทัวร์หยุดเพราะ \'งานเอกสาร\' ฉันรับผิดเรื่องระบบราชการ"',
                    zh: '📉 秘密关闭："我给游船的保险公司打电话。告诉他们风险太高。并非取消运营商的保险。游览因\'文书工作\'而停止。我承担官僚主义的责任。"'
                },
                consequence: {
                    en: '🧙‍♂️ Bureaucratic Wizardry! No one is on the island when it blows. People blame"red tape"not the volcano. You saved lives by manipulating the system. The perfect crime of safety.',
                    th: '🧙‍♂️ พ่อหมดทางราชการ! ไม่มีใครอยู่บนเกาะตอนระเบิด คนโทษ"ระเบียบราชการ"ไม่ใช่ภูเขาไฟ คุณช่วยชีวิตโดยการปั่นหัวระบบ อาชญากรรมแห่งความปลอดภัยที่สมบูรณ์แบบ',
                    zh: '🧙‍♂️ 官僚魔法！火山爆发时岛上没有人。人们责怪"繁文缛节"而不是火山。你通过操纵系统挽救了生命。完美的安全犯罪。'
                },
                stats: { competence: 45, ethics: 40, leadership: 45, innovation: 50 }
            }
        ]
    },

    // SECTION 6: DISASTER RESPONSE & PUBLIC SAFETY (Questions 26-35)

    {
        id: 'geo_026',
        text: {
            en: '🕳️ The Urban Void: Ground Penetrating Radar (GPR) reveals a massive void under the busiest intersection in the city. It could collapse tomorrow or in 10 years. Closing the intersection will paralyze the city\'s economy for weeks. The mayor asks:"Is it imminent?"You honestly don\'t know.',
            th: '🕳️ หลุมยุบกลางเมือง: เรดาร์ทะลุทะลวงพื้นดิน (GPR) เปิดเผยโพรงขนาดใหญ่ใต้สี่แยกที่พลุกพล่านที่สุดในเมือง มันอาจถล่มพรุ่งนี้หรือใน 10 ปี การปิดสี่แยกจะทำให้เศรษฐกิจเมืองเป็นอัมพาตหลายสัปดาห์ นายกถามว่า:"มันจวนตัวไหม?"คุณไม่รู้จริงๆ',
            zh: '🕳️ 城市空洞：探地雷达（GPR）显示城市最繁忙的十字路口下方有一个巨大的空洞。它可能在明天或10年后坍塌。关闭十字路口将使城市经济瘫痪数周。市长问："它迫在眉睫吗？"你真的不知道。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚧 Close It Down:"I treat it as imminent. Close the roads. Drill and fill it with concrete immediately. Better gridlock than a bus falling into a hole."',
                    th: '🚧 ปิดมันซะ:"ฉันถือว่ามันจวนตัว ปิดถนน เจาะและอัดคอนกรีตทันที รถติดดีกว่ารถเมล์ตกลงไปในหลุม"',
                    zh: '🚧 关闭它："我把它当作迫在眉睫的危险。封路。立即钻孔并用混凝土填充。交通堵塞总比公交车掉进洞里好。"'
                },
                consequence: {
                    en: '🛑 Gridlock Hero! The city hates you for the traffic. But during drilling, the roof collapses. If cars were there, 50 people would have died. You are vindicated on the front page.',
                    th: '🛑 ฮีโร่รถติด! คนในเมืองเกลียดคุณเรื่องรถติด แต่ระหว่างการเจาะ หลังคาถล่ม ถ้ารถอยู่ที่นั่น 50 คนคงตาย คุณได้รับการพิสูจน์ความถูกต้องบนหน้าหนึ่ง',
                    zh: '🛑 拥堵英雄！城市因交通痛恨你。但在钻探过程中，顶板塌陷了。如果车在那儿，会死50人。你在头版上得到了平反。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '📸 Monitor Live:"We install fiber-optic strain sensors. We keep the road open but watch the data 24/7. If it moves 1mm, we hit the red button. It\'s risky but efficient."',
                    th: '📸 เฝ้าระวังสด:"เราติดตั้งเซ็นเซอร์ความเครียดใยแก้วนำแสง เราเปิดถนนไว้แต่ดูข้อมูล 24/7 ถ้ามันขยับ 1 มม. เรากดปุ่มแดง เสี่ยงแต่มีประสิทธิภาพ"',
                    zh: '📸 实时监控："我们要安装光纤应变传感器。我们保持道路畅通，但24/7监控数据。如果它移动1毫米，我们就按下红色按钮。这有风险但很有效。"'
                },
                consequence: {
                    en: '⚡ The Signal! 3 weeks later, the sensors spike. You trigger the sirens. Traffic stops just 10 seconds before the collapse. It was Hollywood-level timing. You become a legend.',
                    th: '⚡ สัญญาณมา! 3 สัปดาห์ต่อมา เซ็นเซอร์พุ่งสูง คุณเปิดไซเรน การจราจรหยุดเพียง 10 วินาทีก่อนถล่ม มันเป็นจังหวะระดับฮอลลีวูด คุณกลายเป็นตำนาน',
                    zh: '⚡ 信号！3周后，传感器出现尖峰。你拉响警报。交通在坍塌前10秒停止。这是好莱坞级别的时机。你成为了传奇。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '💉 Night Grouting:"We inject quick-setting foam/grout at night only, lane by lane. We fix it slowly while traffic moves by day. We pray it holds during rush hour."',
                    th: '💉 การอัดฉีดกลางคืน:"เราฉีดโฟม/ปูนที่แข็งตัวเร็วตอนกลางคืนเท่านั้น ทีละเลน เราซ่อมมันช้าๆ ขณะที่รถวิ่งตอนกลางวัน เราภาวนาให้มันรับไหวตอนชั่วโมงเร่งด่วน"',
                    zh: '💉 夜间灌浆："我们要只在夜间逐车道注入速凝泡沫/灌浆。我们在白天通车的同时缓慢修复。我们祈祷它在高峰时段能撑住。"'
                },
                consequence: {
                    en: '🤞 Luck Runs Out! Vibration from a heavy truck triggers a partial slump. A car gets stuck (no injuries). The scandal exposes your gamble."Geologist Gambles with Commuters Lives."',
                    th: '🤞 โชคหมด! แรงสั่นสะเทือนจากรถบรรทุกทำให้เกิดการทรุดตัวบางส่วน รถคันหนึ่งติดหล่ม (ไม่มีใครบาดเจ็บ) เรื่องอื้อฉาวเปิดโปงการเดิมพันของคุณ"นักธรณีวิทยาเดิมพันด้วยชีวิตผู้สัญจร"',
                    zh: '🤞 运气耗尽！重型卡车的震动引发了部分坍塌。一辆车被卡住（无人受伤）。丑闻暴露了你的赌博。"地质学家拿通勤者的生命通过赌注。"'
                },
                stats: { competence: 30, ethics: -30, leadership: -20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🏗️ Build a Bridge:"Forget filling it. I propose building a bridge *over* the intersection immediately. It treats the ground as unstable permanently. Expensive but permanent."',
                    th: '🏗️ สร้างสะพาน:"ลืมเรื่องถมไปเลย ฉันเสนอสร้างสะพาน *ข้าม* สี่แยกทันที มันถือว่าพื้นดินไม่เสถียรถาวร แพงแต่ถาวร"',
                    zh: '🏗️ 架桥："别想填了。我提议立即在十字路口上方建一座桥。这视地面为永久不稳定。昂贵但一劳永逸。"'
                },
                consequence: {
                    en: '🌉 The Skyway! It takes 2 years. The sinkhole eventually opens up underneath, turning into a tourist attraction under the bridge. You correctly identified that the ground was lost.',
                    th: '🌉 ทางลอยฟ้า! ใช้เวลา 2 ปี หลุมยุบเปิดออกข้างใต้จริงๆ กลายเป็นที่เที่ยวใต้สะพาน คุณระบุถูกแล้วว่าพื้นดินนั้นเสียสภาพไปแล้ว',
                    zh: '🌉 天桥！花了2年时间。天坑最终在下面裂开，变成了桥下的旅游景点。你正确地识别出地面已经没救了。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 40 }
            }
        ]
    },
    {
        id: 'geo_027',
        text: {
            en: '🌊 The Landslide Dam: A massive landslide has blocked a river in the mountains, creating a rapidly filling lake. If the dam bursts, it will wipe out a town of 5,000 people below. You have 24 hours before it over-tops.',
            th: '🌊 เขื่อนดินถล่ม: ดินถล่มขนาดใหญ่ปิดกั้นแม่น้ำในภูเขา สร้างทะเลสาบที่น้ำเต็มอย่างรวดเร็ว ถ้าเขื่อนแตก มันจะกวาดล้างเมือง 5,000 คนด้านล่าง คุณมีเวลา 24 ชั่วโมงก่อนน้ำล้น',
            zh: '🌊 堰塞湖：大规模山体滑坡堵塞了山区的河流，形成了一个迅速蓄满的湖泊。如果大坝决堤，将夷平下方5000人的城镇。你还有24小时它就会漫顶。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Evacuate Now:"The dam is unstable. Forget saving the town\'s property. Get the people out. I issue a Level 5 Evacuation order immediately."',
                    th: '📢 อพยพเดี๋ยวนี้:"เขื่อนไม่มั่นคง ลืมเรื่องรักษาทรัพย์สินเมือง เอาคนออกมา ฉันออกคำสั่งอพยพระดับ 5 ทันที"',
                    zh: '📢 立即撤离："大坝不稳定。别管镇上的财产了。让人们撤离。我立即发布5级撤离令。"'
                },
                consequence: {
                    en: '🏚️ Ghost Town Crushed! The dam bursts 10 hours later. The town is erased. No one died. You are hailed as a savior, though the town is gone forever.',
                    th: '🏚️ เมืองร้างถูกบดขยี้! เขื่อนแตก 10 ชั่วโมงต่อมา เมืองหายไป ไม่มีใครตาย คุณได้รับการยกย่องว่าเป็นผู้ช่วยชีวิต แม้เมืองจะหายไปตลอดกาล',
                    zh: '🏚️ 鬼城被毁！10小时后大坝决堤。城镇被抹去。没有人死亡。你被誉为救世主，尽管城镇永远消失了。'
                },
                stats: { competence: 50, ethics: 50, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💣 Precision Blasting:"We can direct the flow. I propose using explosives to cut a spillway channel *now* to drain it controlled. It\'s risky; the blast could trigger the failure."',
                    th: '💣 การระเบิดแม่นยำ:"เรากำหนดทิศทางการไหลได้ ฉันเสนอให้ใช้วัตถุระเบิดตัดช่องระบายน้ำ *ตอนนี้* เพื่อระบายแบบควบคุม เสี่ยง; แรงระเบิดอาจกระตุ้นให้เขื่อนพัง"',
                    zh: '💣 精确爆破："我们可以引导水流。我提议使用炸药*现在*开凿一条溢洪道来通过控制排水。这有风险；爆炸可能会引发崩塌。"'
                },
                consequence: {
                    en: '🧨 The Surgeon\'s Strike! The blast works perfectly. Water drains steadily. The town is saved with minor flooding. You are called"The Dam Whisperer."',
                    th: '🧨 การโจมตีของศัลยแพทย์! การระเบิดได้ผลสมบูรณ์ น้ำระบายออกอย่างสม่ำเสมอ เมืองรอดโดยน้ำท่วมเล็กน้อย คุณถูกเรียกว่า"ผู้กระซิบเขื่อน"',
                    zh: '🧨 外科医生般的打击！爆破效果完美。水流稳定排出。城镇得救，只有轻微洪水。你被称为"大坝低语者"。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🚜 Siphon Pumps:"Explosives are too dangerous. We helicopter in rapid-deployment high-volume pumps to lower the level. It\'s slower, but safer."',
                    th: '🚜 ปั๊มกาลักน้ำ:"ระเบิดอันตรายไป เราใช้เฮลิคอปเตอร์ขนปั๊มน้ำแรงดันสูงแบบติดตั้งเร็วมาลดระดับน้ำ ช้ากว่า แต่ปลอดภัยกว่า"',
                    zh: '🚜 虹吸泵："炸药太危险了。我们用直升机运送快速部署的大流量泵来降低水位。这比较慢，但更安全。"'
                },
                consequence: {
                    en: '⏳ Too Little Too Late! The pumps aren\'t fast enough against the inflow. The dam overtops and breaches. Evacuation starts late. 100 people die. You played it too safe.',
                    th: '⏳ น้อยเกินไปและสายเกินไป! ปั๊มไม่เร็วพอเทียบกับน้ำเข้า เขื่อนล้นและแตก การอพยพเริ่มช้า 100 คนเสียชีวิต คุณเพลย์เซฟเกินไป',
                    zh: '⏳杯水车薪，为时已晚！泵的速度赶不上进水速度。大坝漫顶并决堤。疏散开始得太晚。100人死亡。你太保守了。'
                },
                stats: { competence: 20, ethics: 10, leadership: -30, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🧱 Reinforce the Blockage:"Maybe it holds? We dump concrete barriers to strengthen the landslide dam face. Hope it becomes a permanent lake."',
                    th: '🧱 เสริมความแข็งแรง:"บางทีมันอาจจะอยู่? เราทิ้งแท่งคอนกรีตเพื่อเสริมหน้าเขื่อนดินถล่ม หวังว่ามันจะกลายเป็นทะเลสาบถาวร"',
                    zh: '🧱 加固在此堵塞物："也许它能撑住？我们倾倒混凝土屏障来加固滑坡坝面。希望它能变成一个永久的湖泊。"'
                },
                consequence: {
                    en: '🌊 Catastrophic Failure! Adding weight to an unstable dam was stupid. It collapses instantly under the new load. Total destruction. You made it worse.',
                    th: '🌊 หายนะ! การเพิ่มน้ำหนักให้เขื่อนที่ไม่มั่นคงมันโง่มาก มันถล่มทันทีภายใต้น้ำหนักใหม่ พังพินาศหมด คุณทำมันแย่ลง',
                    zh: '🌊 灾难性失败！给不稳定的堤坝增加重量是愚蠢的。它在新载荷下瞬间坍塌。彻底毁灭。你让情况变得更糟了。'
                },
                stats: { competence: -10, ethics: -10, leadership: -50, innovation: 0 }
            }
        ]
    },
    {
        id: 'geo_028',
        text: {
            en: '🏙️ The Sinking City: Your capital city is sinking 10cm/year due to excessive groundwater extraction. In 20 years, 40% of the city will be underwater. Industries demand water. The government demands a solution that doesn\'t stop growth.',
            th: '🏙️ เมืองที่กำลังจม: เมืองหลวงของคุณกำลังจม 10 ซม./ปี เนื่องจากการสูบน้ำบาดาลเกินขนาด ใน 20 ปี 40% ของเมืองจะอยู่ใต้น้ำ อุตสาหกรรมต้องการน้ำ รัฐบาลต้องการทางออกที่ไม่หยุดการเติบโต',
            zh: '🏙️ 下沉的城市：由于过度开采地下水，你的首都正以每年10厘米的速度下沉。20年后，40%的城市将被淹没。工业界需要水。政府要求一个不停止增长的解决方案。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Ban Extractions:"Stop pumping NOW. All industries must switch to expensive piped desalinated water or leave. I don\'t care about GDP, I care about existing."',
                    th: '🛑 ห้ามสูบน้ำ:"หยุดสูบเดี๋ยวนี้ ทุกอุตสาหกรรมต้องเปลี่ยนไปใช้น้ำประปาจากการแยกเกลือที่ราคาแพงหรือออกไป ฉันไม่สน GDP ฉันสนการมีอยู่ของเมือง"',
                    zh: '🛑 禁止开采："现在停止抽水。所有行业必须改用昂贵的管道淡化水，否则就离开。我不在乎GDP，我在乎的是生存。"'
                },
                consequence: {
                    en: '🛑 The Hard Stop! The sinking slows significantly. Factories close, unemployment spikes. Riots happen. But the city is saved for the next century. A painful, necessary surgery.',
                    th: '🛑 การหยุดชะงัก! การจมช้าลงอย่างมาก โรงงานปิด การว่างงานพุ่ง จลาจลเกิดขึ้น แต่เมืองรอดไปอีกศตวรรษ การผ่าตัดที่เจ็บปวดแต่จำเป็น',
                    zh: '🛑 硬刹车！下沉明显减缓。工厂关闭，失业率飙升。发生骚乱。但城市保住了下个世纪。一次痛苦但必要的手术。'
                },
                stats: { competence: 50, ethics: 40, leadership: 20, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '💉 Artificial Recharge:"We capture floodwater and inject it back into the aquifer under high pressure. It pushes the ground back up (heave). Extremely expensive infrastructure."',
                    th: '💉 การเติมน้ำเทียม:"เราดักจับน้ำท่วมและอัดฉีดกลับลงไปในชั้นน้ำบาดาลด้วยแรงดันสูง มันดันพื้นดินกลับขึ้นมา (การยกตัว) โครงสร้างพื้นฐานแพงระยับ"',
                    zh: '💉 人工回灌："我们捕获洪水并在高压下将其注回含水层。它把地面推回上面（隆起）。极其昂贵的基础设施。"'
                },
                consequence: {
                    en: '🏗️ Engineering Marvel! It works. The city stabilizes and even rises 2cm. You win the Nobel Prize for Geo-Engineering. It costs 20% of the national budget but saves the capital.',
                    th: '🏗️ สิ่งมหัศจรรย์ทางวิศวกรรม! มันได้ผล เมืองเสถียรและสูงขึ้น 2 ซม. คุณได้รางวัลโนเบลสาขาวิศวกรรมธรณี ใช้งบ 20% ของชาติแต่ช่วยเมืองหลวงไว้',
                    zh: '🏗️ 工程奇迹！奏效了。城市稳定下来，甚至上升了2厘米。你获得了诺贝尔地球工程奖。这花费了国家预算的20%，但拯救了首都。'
                },
                stats: { competence: 50, ethics: 45, leadership: 45, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🏰 Build Seawalls:"Let it sink. We just build higher and higher dikes around the city. Like New Orleans or Netherlands. We engineer our way out without changing habits."',
                    th: '🏰 สร้างกำแพงกันคลื่น:"ปล่อยมันจม เราแค่สร้างเขื่อนรอบเมืองให้สูงขึ้นเรื่อยๆ เหมือนนิวออร์ลีนส์หรือเนเธอร์แลนด์ เราใช้วิศวกรรมแก้ปัญหาโดยไม่เปลี่ยนนิสัย"',
                    zh: '🏰 建造海堤："让它沉吧。我们只是在城市周围修建越来越高的堤坝。像新奥尔良或荷兰那样。我们在不改变习惯的情况下通过工程解决问题。"'
                },
                consequence: {
                    en: '🚽 The Bowl Effect! The city becomes a deep bowl below sea level. One day, a pump fails during a typhoon. The catastrophe is biblical. You delayed the doom to make it 10x worse.',
                    th: '🚽 ปรากฏการณ์ชามอ่าง! เมืองกลายเป็นชามลึกต่ำกว่าระดับน้ำทะเล วันหนึ่ง ปั๊มเสียระหว่างไต้ฝุ่น หายนะระดับตำนาน คุณชะลอจุดจบเพื่อทำให้มันแย่ลง 10 เท่า',
                    zh: '🚽 碗效应！城市变成了海平面以下的深碗。有一天，台风期间水泵发生故障。灾难是毁灭性的。你推迟了厄运，却让它变本加厉了10倍。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 }
            },
            {
                id: 'D',
                text: {
                    en: '🚚 Move the Capital:"This place is doomed. I recommend building a new capital in the jungle/highlands. Start fresh. Abandon this sinking ship slowly."',
                    th: '🚚 ย้ายเมืองหลวง:"ที่นี่จบแล้ว ฉันแนะนำให้สร้างเมืองหลวงใหม่ในป่า/ที่ราบสูง เริ่มต้นใหม่ ทิ้งเรือที่กำลังจมลำนี้อย่างช้าๆ"',
                    zh: '🚚 迁都："这地方没救了。我建议在丛林/高地建设新首都。重新开始。慢慢抛弃这艘下沉的船。"'
                },
                consequence: {
                    en: '🏛️ The Great Migration! It happens (Indonesia style). Ecological damage to the new site is high. The old poor are left behind in the sinking city. You are pragmatic but heartless.',
                    th: '🏛️ การอพยพครั้งยิ่งใหญ่! มันเกิดขึ้น (สไตล์อินโดนีเซีย) ความเสียหายทางนิเวศต่อที่ใหม่สูง คนจนเก่าถูกทิ้งไว้ในเมืองที่กำลังจม คุณเป็นคนปฏิบัติจริงแต่ไร้หัวใจ',
                    zh: '🏛️ 大迁徙！这发生了（印尼风格）。对新地点的生态破坏很大。原来的穷人被留在了下沉的城市。你很务实但无情。'
                },
                stats: { competence: 45, ethics: 30, leadership: 50, innovation: 30 }
            }
        ]
    },
    {
        id: 'geo_029',
        text: {
            en: '🌊 The Tsunami Warning: An offshore earthquake (Mag 7.8) hits. Your shallow-water buoys trigger an alert, but deep-ocean sensors are silent due to maintenance. It *could* be a"Tsunami Earthquake"(slow rupture, massive wave). If you warn: millions flee, huge cost. If you don\'t and it hits: mass casualties.',
            th: '🌊 คำเตือนสึนามิ: แผ่นดินไหวนอกชายฝั่ง (ขนาด 7.8) เกิดขึ้น ทุ่นน้ำตื้นของคุณแจ้งเตือน แต่เซ็นเซอร์ทะเลลึกเงียบเพราะซ่อมบำรุง มัน *อาจ* เป็น"แผ่นดินไหวสึนามิ"(รอยเลื่อนช้า คลื่นยักษ์) ถ้าคุณเตือน: คนล้านหนี ต้นทุนมหาศาล ถ้าไม่และมันถล่ม: ตายหมู่',
            zh: '🌊 海啸警报：发生近海地震（7.8级）。你的浅水浮标触发了警报，但深海传感器因维护而静默。这*可能*是一次"海啸地震"（缓慢破裂，巨浪）。如果你发出警告：数百万人逃离，代价巨大。如果你不警告而它来了：大规模伤亡。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Issue Warning:"Better safe than sorry. I sound the alarm for the entire coastline. EVACUATE NOW. I assume the worst case scenario."',
                    th: '📢 ออกคำเตือน:"กันไว้ดีกว่าแก ฉันกดสัญญาณเตือนภัยสำหรับชายฝั่งทั้งหมด อพยพเดี๋ยวนี้ ฉันสมมติสถานการณ์ที่เลวร้ายที่สุด"',
                    zh: '📢 发布警报："安全总比后悔好。我向整个海岸线发出警报。立即撤离。我假设是最坏的情况。"'
                },
                consequence: {
                    en: '🌊 The Boy Who Cried Wolf? The wave is small (50cm). People are angry at the panic/traffic. Tourist season is disrupted. BUT, you sleep well knowing you didn\'t gamble with lives. Trust erodes slightly.',
                    th: '🌊 เด็กเลี้ยงแกะ? คลื่นเล็ก (50 ซม.) คนโกรธเรื่องตื่นตระหนก/รถติด ฤดูกาลท่องเที่ยวชะงัก แต่ คุณหลับสบายที่รู้ว่าไม่ได้เดิมพันด้วยชีวิต ความเชื่อมั่นลดลงเล็กน้อย',
                    zh: '🌊 狼来了的孩子？浪很小（50厘米）。人们对恐慌/交通感到愤怒。旅游旺季被打乱。但是，你知道自己没有拿生命去赌博，睡得很香。信任略有下降。'
                },
                stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '🤫 Wait for Visual:"I call the harbor master at the nearest island (10 mins away). \'Do you see rapid draw-down?\' I wait for human confirmation before scaring millions."',
                    th: '🤫 รอภาพยืนยัน:"ฉันโทรหาเจ้าท่าที่เกาะที่ใกล้ที่สุด (ห่าง 10 นาที) \'คุณเห็นน้ำลดลงอย่างรวดเร็วไหม?\' ฉันรอการยืนยันจากมนุษย์ก่อนจะทำให้คนล้านตื่นตระหนก"',
                    zh: '🤫 等待目视："我打电话给最近岛屿（10分钟路程）的港务长。\'你看到水位急剧下降了吗？\'在吓唬这就是数百万人之前，我等待人工确认。"'
                },
                consequence: {
                    en: '📞 The Critical Call! The harbor master screams"WATER RECEDING!". You trigger the alarm 15 mins late. The wave hits. Those 15 mins cost 200 lives, but you saved thousands. A haunting delay.',
                    th: '📞 สายด่วนวิกฤต! เจ้าท่าตะโกน"น้ำกำลังลด!". คุณกดเตือนภัยช้าไป 15 นาที คลื่นถล่ม 15 นาทีนั้แลกด้วย 200 ชีวิต แต่คุณช่วยได้หลายพัน ความล่าช้าที่ตามหลอกหลอน',
                    zh: '📞 关键时刻的电话！港务长尖叫"水退了！"。你晚了15分钟拉响警报。海啸来袭。这15分钟导致200人死亡，但你救了数千人。令人难以忘怀的延误。'
                },
                stats: { competence: 30, ethics: 30, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤖 AI Prediction:"My experimental AI analyzes the seismic waveform frequency. It says it\'s a \'slow quake\' high tsunami potential. I trust the machine over the missing sensors."',
                    th: '🤖 AI ทำนาย:"AI ทดลองของฉันวิเคราะห์ความถี่คลื่นไหวสะเทือน มันบอกว่าเป็น \'แผ่นดินไหวช้า\' ศักยภาพสึนามิสูง ฉันเชื่อเครื่องจักรมากกว่าเซ็นเซอร์ที่หายไป"',
                    zh: '🤖 AI预测："我的实验性AI分析地震波形频率。它说这是\'慢地震\'高海啸潜力。我相信机器胜过缺失的传感器。"'
                },
                consequence: {
                    en: '🎯 Bullseye! The AI was right. A huge wave hits. The early warning based on seismic data alone saves everyone. You revolutionize tsunami warning systems.',
                    th: '🎯 เข้าเป้า! AI ถูกต้อง คลื่นยักษ์ถล่ม การเตือนล่วงหน้าจากข้อมูลไหวสะเทือนอย่างเดียวช่วยทุกคนไว้ คุณปฏิวัติระบบเตือนภัยสึนามิ',
                    zh: '🎯 正中靶心！AI是对的。巨浪来袭。仅基于地震数据的早期预警拯救了所有人。你彻底改变了海啸预警系统。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '📉 Silent Mode:"No deep sensor data = no confirmation. I do not alert. History suggests 7.8 usually doesn\'t trigger mega-tsunamis in this region."',
                    th: '📉 โหมดเงียบ:"ไม่มีข้อมูลเซ็นเซอร์ลึก = ไม่มีการยืนยัน ฉันไม่เตือน ประวัติศาสตร์ชี้ว่า 7.8 มักไม่กระตุ้นสึนามิยักษ์ในภูมิภาคนี้"',
                    zh: '📉 静默模式："没有深层传感器数据 = 无法确认。我不报警。历史表明，该地区7.8级地震通常不会引发特大海啸。"'
                },
                consequence: {
                    en: '💀 The Black Swan! It was a rare tsunami quake. Meters of water hit the coast. Thousands die. You are charged with manslaughter for failing to act on the shallow buoy alert.',
                    th: '💀 หงส์ดำ! มันเป็นแผ่นดินไหวสึนามิที่หายาก น้ำสูงหลายเมตรถล่มชายฝั่ง คนพันตาย คุณถูกตั้งข้อหาฆ่าคนตายโดยไม่เจตนาที่ไม่ดำเนินการตามคำเตือนทุ่นน้ำตื้น',
                    zh: '💀 黑天鹅！这是一次罕见的海啸地震。数米高的水袭击了海岸。数千人死亡。你因未能根据浅水浮标警报采取行动而被指控过失杀人。'
                },
                stats: { competence: 10, ethics: -50, leadership: -50, innovation: 0 }
            }
        ]
    },
    {
        id: 'geo_030',
        text: {
            en: '☁️ CCS Leak: You operate a Carbon Capture and Storage (CCS) facility sequestering CO2 in an old oil reservoir. Sensors pass, but a nearby village reports dead cattle and breathless birds (signs of CO2 lake turnover/leak). Monitoring wells show nothing.',
            th: '☁️ CCS รั่วไหล: คุณดำเนินงานโรงงานดักจับและกักเก็บคาร์บอน (CCS) ในแหล่งน้ำมันเก่า เซ็นเซอร์ผ่านหมด แต่หมู่บ้านใกล้เคียงรายงานวัวตายและนกหายใจไม่ออก (สัญญาณของ CO2 พลิกกลับ/รั่วไหล) บ่อเฝ้าระวังไม่แสดงอะไร',
            zh: '☁️ CCS泄漏：你在一个旧油藏中运营碳捕获和储存（CCS）设施以隔离二氧化碳。传感器通过，但附近的村庄报告有牛死亡和鸟类呼吸困难（二氧化碳湖翻转/泄漏的迹象）。监测井什么也没显示。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Shut Down Injection:"Something is missing. I stop operations immediately. Evacuate the village to high ground. I suspect an unmapped fault leak."',
                    th: '🛑 ปิดการอัดฉีด:"มีบางอย่างผิดปกติ ฉันหยุดการดำเนินงานทันที อพยพหมู่บ้านขึ้นที่สูง ฉันสงสัยว่ามีรอยเลื่อนรั่วไหลที่ไม่อยู่ในแผนที่"',
                    zh: '🛑 停止注入："有些不对劲。我立即停止操作。将村庄疏散到高地。我怀疑有未绘制的断层泄漏。"'
                },
                consequence: {
                    en: '🕵️ Invisible Killer Found! You were right. An old borehole was leaking CO2 into a depression. You prevented a mass asphyxiation event. The project is dead, but the people are alive.',
                    th: '🕵️ พบนักฆ่าล่องหน! คุณคิดถูก รูเจาะเก่ากำลังรั่ว CO2 ลงในแอ่ง คุณป้องกันเหตุการณ์ขาดอากาศหายใจหมู่ โครงการจบเห่ แต่คนรอด',
                    zh: '🕵️ 找到了隐形杀手！你是对的。一个旧钻孔将二氧化碳泄漏到一个洼地。你阻止了一场大规模窒息事件。项目死了，但人活着。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🤷 Trust the Sensors:"Data is Green. Cattle die for many reasons. I order a biological vet team to check the cows first. We keep injecting."',
                    th: '🤷 เชื่อนเซ็นเซอร์:"ข้อมูลเป็นสีเขียว วัวตายได้หลายสาเหตุ ฉันสั่งทีมสัตวแพทย์ไปตรวจวัวก่อน เราอัดฉีดต่อ"',
                    zh: '🤷 相信传感器："数据是绿色的。牛死的原因有很多。我命令生物兽医团队先检查奶牛。我们继续注入。"'
                },
                consequence: {
                    en: '💤 The Big Sleep! That night, a CO2 bubble burps out. It flows into the village valley. 50 people never wake up. Your sensors were positioned wrong. Negligence.',
                    th: '💤 การหลับใหลครั้งใหญ่! คืนนั้น ฟอง CO2 เรอออกมา มันไหลลงหุบเขาหมู่บ้าน 50 คนไม่ตื่นอีกเลย เซ็นเซอร์ของคุณวางผิดตำแหน่ง ความประมาท',
                    zh: '💤 长眠！那天晚上，一个二氧化碳气泡喷出。它流入村庄的山谷。50人再也没有醒来。你的传感器位置放错了。疏忽。'
                },
                stats: { competence: 20, ethics: -50, leadership: -40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🌬️ Install Giant Fans:"If gas is pooling, we blow it away. I deploy massive industrial fans to ventilate the valley while we investigate. A physical engineering fix."',
                    th: '🌬️ ติดพัดลมยักษ์:"ถ้าก๊าซรวมตัว เราเป่ามันไป ฉันติดตั้งพัดลมอุตสาหกรรมขนาดใหญ่เพื่อระบายอากาศในหุบเขาขณะเราตรวจสอบ การแก้ไขทางวิศวกรรมกายภาพ"',
                    zh: '🌬️ 安装巨型风扇："如果气体聚集，我们就把它吹走。我们在调查的同时部署大型工业风扇对山谷进行通风。物理工程修复。"'
                },
                consequence: {
                    en: '🌪️ The Windy Band-Aid! It disperses the gas. It works as a temporary safety measure. You find the leak later. Innovative thinking saved the day, though it looked ridiculous.',
                    th: '🌪️ พลาสเตอร์สายลม! มันกระจายก๊าซ ได้ผลเป็นมาตรการความปลอดภัยชั่วคราว คุณหารอยรั่วเจอทีหลัง การคิดเชิงนวัตกรรมช่วยกู้สถานการณ์ แม้จะดูตลกก็ตาม',
                    zh: '🌪️ 有风的创可贴！它驱散了气体。作为临时安全措施，它奏效了。你后来发现了泄漏。创新思维拯救了这一天，虽然看起来很荒谬。'
                },
                stats: { competence: 40, ethics: 40, leadership: 30, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Buy the Village:"This location is risky. I offer a buyout 200% market value to relocate the village entirely. We turn the area into a purely industrial exclusionary zone."',
                    th: '💰 ซื้อหมู่บ้าน:"ทำเลนี้เสี่ยง ฉันเสนอซื้อกิจการ 200% ของราคาตลาดเพื่อย้ายหมู่บ้านทั้งหมด เราเปลี่ยนพื้นที่เป็นเขตอุตสาหกรรมหวงห้ามล้วนๆ"',
                    zh: '💰 买下村庄："这个位置有风险。我提供200%的市场价值收购，将村庄整体搬迁。我们将该地区变成纯工业禁区。"'
                },
                consequence: {
                    en: '🏘️ Clear Zone! Expensive but effective. The leak happens later, but no one is there. You solved the social problem with money. The project continues safely.',
                    th: '🏘️ เคลียร์โซน! แพงแต่ได้ผล รั่วไหลเกิดขึ้นทีหลัง แต่ไม่มีใครอยู่ คุณแก้ปัญหาสังคมด้วยเงิน โครงการดำเนินต่ออย่างปลอดภัย',
                    zh: '🏘️ 清空区域！昂贵但有效。后来发生了泄漏，但那里没有人。你用钱解决了社会问题。项目安全继续。'
                },
                stats: { competence: 45, ethics: 30, leadership: 40, innovation: 30 }
            }
        ]
    }
    ,

    // SECTION 7: THE LONG NOW & EXISTENTIAL RISKS (Questions 31-35)

    {
        id: 'geo_031',
        text: {
            en: '☢️ The 10,000 Year Tomb: Designing a nuclear waste repository deep in granite. We need a warning marker for future humans (or aliens) not to dig here in 10,000 years. Language will change. Symbols might be misinterpreted (like"Treasure buried here!"). How do you mark it?',
            th: '☢️ สุสาน 10,000 ปี: การออกแบบที่เก็บกากนิวเคลียร์ลึกในหินแกรนิต เราต้องการเครื่องหมายเตือนมนุษย์ในอนาคต (หรือมนุษย์ต่างดาว) ไม่ให้ขุดที่นี่ในอีก 10,000 ปี ภาษาจะเปลี่ยนไป สัญลักษณ์อาจถูกตีความผิด (เช่น"สมบัติฝังอยู่ที่นี่!") คุณจะทำเครื่องหมายอย่างไร?',
            zh: '☢️ 万年古墓：在花岗岩深处设计核废料储存库。我们需要一个警告标志，提醒未来的人类（或外星人）在10,000年内不要在这里挖掘。语言会改变。符号可能会被误解（比如"宝藏埋在这里！"）。你怎么标记它？'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '😱 Landscape of Thorns:"We sculpt the landscape into jagged, hostile spikes. A place of fear. No straight lines. Instinctive repulsion. The \'Spike Field\' design."',
                    th: '😱 ภูมิทัศน์แห่งหนาม:"เราแกะสลักภูมิทัศน์ให้เป็นยอดแหลมที่ขรุขระและดูเป็นศัตรู สถานที่แห่งความกลัว ไม่มีเส้นตรง ความรังเกียจตามสัญชาตญาณ การออกแบบ \'ทุ่งหนาม\'"',
                    zh: '😱 荆棘景观："我们将景观塑造成锯齿状、充满敌意的尖刺。一个恐惧的地方。没有直线。本能的排斥。\'尖刺场\'设计。"'
                },
                consequence: {
                    en: '🏰 The Forbidden Castle! The scary spikes become a legend."The Cursed Place."Myths attract adventurous teenagers and cults. They dig *because* it looks forbidden. You inadvertently created a tourist trap of doom.',
                    th: '🏰 ปราสาทต้องห้าม! หนามที่น่ากลัวกลายเป็นตำนาน"สถานที่ต้องคำสาป"ตำนานดึงดูดวัยรุ่นขาลุยและลัทธิ พวกเขาขุด *เพราะ* มันดูต้องห้าม คุณสร้างกับดักนักท่องเที่ยวแห่งความหายนะโดยไม่ตั้งใจ',
                    zh: '🏰 禁忌城堡！可怕的尖刺成为了传说。"被诅咒的地方。"神话吸引了喜欢冒险的青少年和邪教。他们挖掘*是因为*它看起来是禁止的。你不经意间创造了一个厄运旅游陷阱。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '😶 Leave No Trace:"Don\'t mark it. We backfill the tunnel perfectly. We plant native forest. We erase it from maps. Ignorance is safety. If they don\'t know it\'s there, they won\'t look."',
                    th: '😶 ไม่ทิ้งร่องรอย:"อย่าทำเครื่องหมาย ถมกลับอุโมงค์ให้สมบูรณ์ ปลูกป่าท้องถิ่น ลบออกจากแผนที่ ความไม่รู้คือความปลอดภัย ถ้าพวกเขาไม่รู้ว่ามีอยู่ พวกเขาก็จะไม่หา"',
                    zh: '😶 不留痕迹："不要标记它。我们完美地回填隧道。种植原生森林。从地图上抹去它。无知就是安全。如果他们不知道它在那里，他们就不会去找。"'
                },
                consequence: {
                    en: '💤 The Silent Guardian! It works perfectly for 2,000 years. Then, a future civilization coincidentally drills for geothermal energy right there. Boom. But statistically, it was the best bet.',
                    th: '💤 ผู้พิทักษ์เงียบ! มันได้ผลสมบูรณ์แบบ 2,000 ปี จากนั้น อารยธรรมในอนาคตบังเอิญเจาะหาพลังงานความร้อนใต้พิภพตรงนั้นพอดี บูม แต่ทางสถิติ มันเป็นเดิมพันที่ดีที่สุด',
                    zh: '💤 沉默的守护者！它完美地运作了2000年。然后，未来的文明恰巧就在那里钻探地热能。轰。但从统计上讲，这是最好的赌注。'
                },
                stats: { competence: 50, ethics: 40, leadership: 30, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🛸 Rosetta Disks:"Information is key. We bury thousands of ceramic micro-disks with diagrams of atoms and radiation sickness near the surface. Self-decoding warnings."',
                    th: '🛸 แผ่นโรเซตตา:"ข้อมูลคือกุญแจ เราฝังไมโครดิสก์เซรามิกพันชิ้นพร้อมแผนภาพอะตอมและโรคจากรังสีไว้ใกล้ผิวดิน คำเตือนที่ถอดรหัสได้ด้วยตัวเอง"',
                    zh: '🛸 罗塞塔圆盘："信息是关键。我们在地表附近埋藏数千个带有原子和辐射病图解的陶瓷微盘。自解码警告。"'
                },
                consequence: {
                    en: '📜 The Library! Future archaeologists find them. They understand the danger. They designate it a"Zone of Death"but study it from a distance. You successfully communicated across eons.',
                    th: '📜 ห้องสมุด! นักโบราณคดีในอนาคตพบพวกมัน พวกเขาเข้าใจอันตราย พวกเขากำหนดให้เป็น"เขตแห่งความตาย"แต่ศึกษามันจากระยะไกล คุณสื่อสารข้ามกัปข้ามกัลป์ได้สำเร็จ',
                    zh: '📜 图书馆！未来的考古学家发现了它们。他们明白了危险。他们将其指定为"死亡区"但在远处进行研究。你成功地跨越了亿万年进行交流。'
                },
                stats: { competence: 45, ethics: 50, leadership: 40, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '🧬 Generic"Atomic Priesthood":"We create a religion/culture whose sole duty is to guard the site and pass down the legend of the \'Sleeping Demon.\' Oral tradition survives longer than stone."',
                    th: '🧬"นักบวชอะตอม":"เราสร้างศาสนา/วัฒนธรรมที่มีหน้าที่เดียวคือเฝ้าสถานที่และส่งต่อตำนานของ \'ปีศาจหลับใหล\' มุขปาฐะอยู่รอดนานกว่าหิน"',
                    zh: '🧬 通用"原子祭司"："我们创造一种宗教/文化，其唯一职责是守护该遗址并传承\'沉睡恶魔\'的传说。口头传统比石头存活得更久。"'
                },
                consequence: {
                    en: '🛐 Cult of the Atom! The priesthood lasts 500 years, then corrupts. They start worshipping the waste as a god. They open the tomb to"commune"with the deity. Radiation poisoning is interpreted as"divine touch."',
                    th: '🛐 ลัทธิอะตอม! นักบวชอยู่ได้ 500 ปี แล้วก็เสื่อมทราม พวกเขาเริ่มบูชาขยะเป็นพระเจ้า พวกเขาเปิดสุสานเพื่อ"สื่อสาร"กับเทพเจ้า พิษรังสีถูกตีความว่าเป็น"สัมผัสศักดิ์สิทธิ์"',
                    zh: '🛐 原子崇拜！祭司团维持了500年，然后腐败了。他们开始把废料当作神来崇拜。他们打开坟墓与神灵"交流"。辐射中毒被解释为"神圣的触摸"。'
                },
                stats: { competence: 30, ethics: 20, leadership: 50, innovation: 40 }
            }
        ]
    },
    {
        id: 'geo_032',
        text: {
            en: '🌋 The Supervolcano Tap: A supervolcano (like Yellowstone) is showing pressure buildup. An infinite energy consortium proposes drilling into the magma chamber to bleed off pressure (preventing eruption) and generate unlimited clean cooling electricity. Risk: Drilling might trigger the eruption.',
            th: '🌋 ก๊อกซุปเปอร์ภูเขาไฟ: ซุปเปอร์ภูเขาไฟ (เหมือนเยลโลว์สโตน) แสดงแรงดันสะสม กลุ่มทุนพลังงานอนันต์เสนอเจาะเข้าไปในกระเปาะแมกมาเพื่อระบายแรงดัน (ป้องกันการระเบิด) และผลิตไฟฟ้าสะอาดหล่อเย็นแบบไม่จำกัด ความเสี่ยง: การเจาะอาจกระตุ้นการระเบิด',
            zh: '🌋 超级火山龙头：一座超级火山（像黄石公园）显示压力积聚。一个无限能源财团提议钻入岩浆室释放压力（防止喷发）并产生无限的清洁冷却电力。风险：钻探可能会引发喷发。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⚡ Drill Baby Drill:"It\'s a win-win. We save North America from ash and get free power. I lead the drilling team. Precision is everything."',
                    th: '⚡ เจาะเลยลูกพี่:"วิน-วิน เราช่วยอเมริกาเหนือจากเถ้าและได้ไฟฟรี ฉันนำทีมเจาะ ความแม่นยำคือทุกสิ่ง"',
                    zh: '⚡ 钻吧宝贝："这是双赢。我们把北美从火山灰中拯救出来，还能获得免费电力。我带领钻探队。精确就是一切。"'
                },
                consequence: {
                    en: '🌍 New Age of Energy! It works. You tap the beast. The world enters a post-scarcity energy era. You are the wealthiest geologist in history. The volcano goes back to sleep.',
                    th: '🌍 ยุคใหม่แห่งพลังงาน! มันได้ผล คุณเจาะสัตว์ร้าย โลกเข้าสู่ยุคพลังงานหลังความขาดแคลน คุณเป็นนักธรณีที่รวยที่สุดในประวัติศาสตร์ ภูเขาไฟกลับไปหลับ',
                    zh: '🌍 能源新时代！奏效了。你开发了这头野兽。世界进入了后稀缺能源时代。你是历史上最富有的地质学家。火山重新沉睡。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🚫 Absolute Ban:"Are you insane? You don\'t poke a sleeping dragon underneath a continent. I refuse and blockade the site with protesters."',
                    th: '🚫 ห้ามเด็ดขาด:"บ้าหรือเปล่า? คุณไปแหย่มังกรหลับใต้ทวีปไม่ได้ ฉันปฏิเสธและปิดล้อมพื้นที่ด้วยผู้ประท้วง"',
                    zh: '🚫 绝对禁止："你疯了吗？你不能在一个大陆下面戳一条沉睡的龙。我拒绝并带领抗议者封锁现场。"'
                },
                consequence: {
                    en: '⏳ The Ticking Clock: You stop the drilling. 50 years later, it erupts naturally. Half the USA is destroyed. Surviving historians argue if"The Tap"would have saved them.',
                    th: '⏳ นาฬิกาเดินถอยหลัง: คุณหยุดการเจาะ 50 ปีต่อมา มันระเบิดตามธรรมชาติ ครึ่งหนึ่งของอเมริกาถูกทำลาย นักประวัติศาสตร์ที่รอดชีวิตเถียงกันว่า"ก๊อก"จะช่วยพวกเขาได้ไหม',
                    zh: '⏳ 滴答作响的时钟：你阻止了钻探。50年后，它自然喷发了。半个美国被摧毁。幸存的历史学家争论"龙头"是否本可以拯救他们。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🔬 Indirect Cooling:"Drilling in is madness. We circulate water in the bedrock *above* the chamber to wick away heat slowly. Slower, safer, sustainable."',
                    th: '🔬 การทำความเย็นทางอ้อม:"เจาะเข้าไปมันบ้า เราหมุนเวียนน้ำในชั้นหิน *เหนือ* กระเปาะแมกมาเพื่อดึงความร้อนออกช้าๆ ช้ากว่า ปลอดภัยกว่า ยั่งยืน"',
                    zh: '🔬 间接冷却："钻进去是疯狂的。我们在岩浆室*上方*的基岩中循环水，慢慢带走热量。更慢，更安全，可持续。"'
                },
                consequence: {
                    en: '🥈 The Middle Path! It generates some power and delays the eruption by 10,000 years. It\'s not infinite energy, but it solves the immediate threat. A sensible compromise.',
                    th: '🥈 ทางสายกลาง! มันผลิตไฟได้บ้างและชะลอการระเบิดไป 10,000 ปี ไม่ใช่พลังงานโอนันต์ แต่แก้ภัยคุกคามเฉพาะหน้า การประนีประนอมที่สมเหตุสมผล',
                    zh: '🥈 中庸之道！它产生了一些电力，并将喷发推迟了10,000年。这不是无限能源，但它解决了眼前的威胁。一个明智的妥协。'
                },
                stats: { competence: 45, ethics: 45, leadership: 30, innovation: 40 }
            },
            {
                id: 'D',
                text: {
                    en: '📡 AI Monitoring Only:"We don\'t touch it. We use the money to build bunkers and arks. If it goes, we survive underground. Geology always wins."',
                    th: '📡 เฝ้าระวังด้วย AI เท่านั้น:"เราไม่แตะมัน เราใช้เงินสร้างบังเกอร์และเรืออาร์ก ถ้ามันระเบิด เรามุดดินรอด ธรณีวิทยาชนะเสมอ"',
                    zh: '📡 仅AI监控："我们不碰它。我们用这些钱建造掩体和方舟。如果它爆发，我们在地下生存。地质学总是赢家。"'
                },
                consequence: {
                    en: '鼹 Mole People! It erupts. You survive in luxury bunkers. The surface is dead for a decade. You emerge as the leader of the Mole People, ruling the ashes.',
                    th: '鼹 มนุษย์ตุ่น! มันระเบิด คุณรอดในบังเกอร์หรู ผิวดินตายไปหนึ่งทศวรรษ คุณออกมาในฐานะผู้นำมนุษย์ตุ่น ปกครองเถ้าถ่าน',
                    zh: '鼹 鼹鼠人！它喷发了。你在豪华掩体中幸存下来。地表死寂了十年。你作为鼹鼠人的领袖出现，统治着灰烬。'
                },
                stats: { competence: 50, ethics: 10, leadership: 20, innovation: 20 }
            }
        ]
    },
    {
        id: 'geo_033',
        text: {
            en: '🦠 The Ancient Virus: Mining permafrost for rare earth metals, you find a well-preserved woolly mammoth carcass. Your field scanner detects an unknown dormant Giant Virus (30,000 years old). The university wants the sample. The mining corp wants to burn it to avoid a shutdown.',
            th: '🦠 ไวรัสโบราณ: การทำเหมืองดินเยือกแข็งหาแร่อินทรีย์หายาก คุณพบซากแมมมอธที่มีขนยาวสภาพดี เครื่องสแกนภาคสนามตรวจพบไวรัลยักษ์ที่ไม่รู้จัก (อายุ 30,000 ปี) มหาวิทยาลัยต้องการตัวอย่าง บริษัทเหมืองต้องการเผามันเพื่อหลีกเลี่ยงการปิดงาน',
            zh: '🦠 远古病毒：在永久冻土中开采稀土金属时，你发现了一具保存完好的猛犸象尸体。你的现场扫描仪检测到一种未知的休眠巨型病毒（30,000岁）。大学想要样本。矿业公司想把它烧掉以避免停工。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🔥 Burn It All:"I\'ve seen this movie. Flamethrower. Now. We sterilize the site. No science is worth a pandemic."',
                    th: '🔥 เผาให้หมด:"ฉันเคยดูหนังเรื่องนี้ ปืนพ่นไฟ เดี๋ยวนี้ เราฆ่าเชื้อพื้นที่ ไม่มีวิทยาศาสตร์ไหนคุ้มกับโรคระบาด"',
                    zh: '🔥 烧光它们："我看过这部电影。火焰喷射器。现在。我们要对现场进行消毒。没有任何科学值得以大流行为代价。"'
                },
                consequence: {
                    en: '🛡️ Safety First! The sample is destroyed. Scientists are furious ("Loss of knowledge!"). But 5 years later, another team finds it, gets infected, and starts a plague. You were the only one with the guts to stop it.',
                    th: '🛡️ ปลอดภัยไว้ก่อน! ตัวอย่างถูกทำลาย นักวิทยาศาสตร์โกรธจัด ("สูญเสียความรู้!") แต่ 5 ปีต่อมา อีกทีมพบมัน ติดเชื้อ และเริ่มโรคระบาด คุณเป็นคนเดียวที่กล้าพอจะหยุดมัน',
                    zh: '🛡️ 安全第一！样本被销毁。科学家们很愤怒（"知识的损失！"）。但5年后，另一个团队发现了它，被感染，并引发了瘟疫。你是唯一有胆量阻止它的人。'
                },
                stats: { competence: 40, ethics: 40, leadership: 50, innovation: 10 }
            },
            {
                id: 'B',
                text: {
                    en: '📦 Level 4 Containment:"I secure the sample in a hermetic titanium canister. I transport it personally to a Bio-Safety Level 4 lab. We study it to make a vaccine."',
                    th: '📦 การกักกันระดับ 4:"ฉันเก็บตัวอย่างในถังไทเทเนียมปิดสนิท ฉันขนส่งด้วยตัวเองไปยังแล็บชีวความปลอดภัยระดับ 4 เราศึกษามันเพื่อทำวัคซีน"',
                    zh: '📦 4级防护："我把样本固定在密封的钛罐里。我亲自把它送到生物安全4级实验室。我们研究它以制造疫苗。"'
                },
                consequence: {
                    en: '💉 The Cure! It was a deadly pathogen. But because you brought it in safely, we developed a cure *before* it melted out naturally elsewhere. You saved millions proactively.',
                    th: '💉 ทางรักษา! มันเป็นเชื้อโรคร้ายแรง แต่เพราะคุณนำมันเข้ามาอย่างปลอดภัย เราพัฒนาทางรักษา *ก่อน* ที่มันจะละลายออกมาตามธรรมชาติที่อื่น คุณช่วยชีวิตคนนับล้านในเชิงรุก',
                    zh: '💉 治愈方法！这是一种致命的病原体。但因为你安全地把它带回来，我们在它在别处自然融化*之前*开发出了治疗方法。你积极主动地拯救了数百万人的生命。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '🤷 Ignore & Mine:"Sensors glitch all the time. It\'s just dead meat. Throw it in the tailing pile. Keep digging."',
                    th: '🤷 เพิกเฉยและขุดต่อ:"เซ็นเซอร์รวนตลอดแหละ มันก็แค่เนื้อตาย โยนลงกองหางแร่ ขุดต่อ"',
                    zh: '🤷 无视并开采："传感器总是出故障。这只是一块死肉。把它扔进尾矿堆。继续挖。"'
                },
                consequence: {
                    en: '🧟 Patient Zero! A worker eats lunch near the pile. The virus jumps. First symptoms: desire to migrate north. Jokes aside, it wipes out 30% of humanity. You are Patient Zero\'s boss.',
                    th: '🧟 ผู้ป่วยหมายเลขศูนย์! คนงานกินข้าวเที่ยงใกล้กองหางแร่ ไวรัสกระโดด อาการแรก: อยากอพยพไปทางเหนือ ล้อเล่นน่า มันกวาดล้างมนุษย์ไป 30% คุณคือหัวหน้าของผู้ป่วยหมายเลขศูนย์',
                    zh: '🧟 零号病人！一名工人在矿堆附近吃午饭。病毒跳跃了。最初的症状：渴望向北迁徙。玩笑归玩笑，它消灭了30%的人类。你是零号病人的老板。'
                },
                stats: { competence: 10, ethics: -50, leadership: -30, innovation: -10 }
            },
            {
                id: 'D',
                text: {
                    en: '💰 Auction Sample:"Dark Web. Highest bidder. Bio-weapons division or eccentric collector? Not my problem. Sample available for pickup."',
                    th: '💰 ประมูลตัวอย่าง:"ดาร์กเว็บ ผู้เสนอราคาสูงสุด แผนกอาวุธชีวภาพหรือนักสะสมเพี้ยน? ไม่ใช่ปัญหาของฉัน ตัวอย่างพร้อมรับ"',
                    zh: '💰 拍卖样本："暗网。价高者得。生物武器部门还是古怪的收藏家？不是我的问题。样本可供提取。"'
                },
                consequence: {
                    en: '🕵️ Intercepted! The transfer is busted by Interpol. You are charged with bio-terrorism. You spend life in a plastic cell.',
                    th: '🕵️ ถูกสกัดจับ! การส่งมอบถูกตำรวจสากลทลาย คุณถูกตั้งข้อหาก่อการร้ายชีวภาพ คุณใช้ชีวิตที่เหลือในคุกพลาสติก',
                    zh: '🕵️被拦截！交易被国际刑警组织破获。你被指控犯有生物恐怖主义罪。你在塑料牢房里度过余生。'
                },
                stats: { competence: 30, ethics: -50, leadership: -20, innovation: 10 }
            }
        ]
    },
    {
        id: 'geo_034',
        text: {
            en: '🔋 The Pink Lake: You find a pristine salt flat in the Andes, containing enough Lithium to power Earth\'s transition to green energy forever. However, it is sacred ground to the indigenous people who believe the lake is the"Eye of the God."Developing it destroys the lake.',
            th: '🔋 ทะเลสาบสีชมพู: คุณพบที่ราบเกลือบริสุทธิ์ในเทือกเขาแอนดีส มีลิเธียมเพียงพอที่จะขับเคลื่อนการเปลี่ยนผ่านสู่พลังงานสีเขียวของโลกได้ตลอดไป อย่างไรก็ตาม มันเป็นพื้นที่ศักดิ์สิทธิ์ของชนพื้นเมืองที่เชื่อว่าทะเลสาบคือ"ดวงตาของพระเจ้า"การพัฒนามันทำลายทะเลสาบ',
            zh: '🔋 粉红湖：你在安第斯山脉发现了一个原始的盐滩，其中含有足够的锂，可以永远为地球向绿色能源的过渡提供动力。然而，它是土著人民的圣地，他们认为这个湖是"上帝之眼"。开发它会破坏湖泊。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚜 Galaxy Brain Utilitarianism:"The climate crisis kills everyone, including them. We must mine it. I offer them royalties and relocation. The needs of the many outweigh the sacred."',
                    th: '🚜 ประโยชน์นิยมมันสมองจักรวาล:"วิกฤตภูมิอากาศฆ่าทุกคน รวมถึงพวกเขาด้วย เราต้องขุด ฉันเสนอส่วนแบ่งสัมปทานและการย้ายถิ่นฐาน ความต้องการของคนส่วนใหญ่สำคัญกว่าความศักดิ์สิทธิ์"',
                    zh: '🚜 银河大脑功利主义："气候危机会杀死所有人，包括他们。我们必须开采。我为他们提供特许权使用费和搬迁。多数人的需求重于神圣。"'
                },
                consequence: {
                    en: '🌍 Green Planet, Grey Soul! Carbon 0 achieved. The world is saved. But the indigenous culture is erased, their"Eye"blinded. You are remembered as a Savior-Tyrant.',
                    th: '🌍 โลกสีเขียว วิญญาณสีเทา! คาร์บอน 0 สำเร็จ โลกรอด แต่วัฒนธรรมพื้นเมืองถูกลบเลือน"ดวงตา"ของพวกเขาบอดลง คุณถูกจดจำในฐานะผู้ไถ่บาปที่เป็นทรราช',
                    zh: '🌍 绿色星球，灰色灵魂！实现了零碳。世界得救了。但土著文化被抹去，他们的"眼睛"瞎了。你被人们铭记为救世主暴君。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Respect the Sacred:"I walk away. Cultural genocide is not a valid trade for batteries. We find lithium elsewhere or recycle. Some things are not for sale."',
                    th: '🤝 เคารพสิ่งศักดิ์สิทธิ์:"ฉันเดินจากไป การฆ่าล้างเผ่าพันธุ์ทางวัฒนธรรมไม่ใช่ข้อแลกเปลี่ยนที่ถูกต้องสำหรับแบตเตอรี่ เราหาลิเธียมที่อื่นหรือรีไซเคิล บางอย่างไม่ได้มีไว้ขาย"',
                    zh: '🤝 尊重神圣："我走开。文化种族灭绝不是电池的有效交易。我们在别处寻找锂或进行回收。有些东西是非卖品。"'
                },
                consequence: {
                    en: '🐢 The Moral Victory! The lake remains beautiful. The battery crisis worsens. Prices go up. But you won the Human Rights award. Maybe hydrogen is the future anyway?',
                    th: '🐢 ชัยชนะทางศีลธรรม! ทะเลสาบยังคงสวยงาม วิกฤตแบตเตอรี่แย่ลง ราคาพุ่ง แต่คุณได้รับรางวัลสิทธิมนุษยชน บางทีไฮโดรเจนอาจเป็นอนาคตอยู่แล้ว?',
                    zh: '🐢 道德胜利！湖依然美丽。电池危机恶化。价格上涨。但你赢得了人权奖。也许氢能反正才是未来？'
                },
                stats: { competence: 30, ethics: 50, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🧪 Direct Lithium Extraction (DLE):"We don\'t use evaporation ponds. We use DLE technology. We suck out the brine, filter lithium, and pump the water back instantly. No visual change. Sacred lake stays intact."',
                    th: '🧪 การสกัดลิเธียมโดยตรง (DLE):"เราไม่ใช้บ่อระเหย เราใช้เทคโนโลยี DLE เราดูดน้ำเค็ม กรองลิเธียม และปั๊มน้ำกลับทันที ไม่มีการเปลี่ยนแปลงทางสายตา ทะเลสาบศักดิ์สิทธิ์ยังคงอยู่"',
                    zh: '🧪 直接锂萃取（DLE）："我们不使用蒸发池。我们使用DLE技术。我们抽出卤水，过滤锂，然后立即把水泵回去。没有视觉变化。圣湖完好无损。"'
                },
                consequence: {
                    en: '✨ The Tech Harmony! It works. Indigenous elders approve because the"Spirit Water"returns. We get the lithium. High cost, but perfect balance. Innovation wins.',
                    th: '✨ ความกลมกลืนทางเทคโนโลยี! มันได้ผล ผู้อาวุโสชนพื้นเมืองอนุมัติเพราะ"น้ำวิญญาณ"ไหลกลับคืน เราได้ลิเธียม ต้นทุนสูง แต่สมดุลสมบูรณ์แบบ นวัตกรรมชนะ',
                    zh: '✨ 技术和谐！奏效了。土著长老批准了，因为"灵水"回归了。我们得到了锂。成本高，但平衡完美。创新赢了。'
                },
                stats: { competence: 50, ethics: 45, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤥 bribe the Chief:"Every man has a price. I find the leader\'s rival, fund a coup, and pay the new chief to \'bless\' the mining project."',
                    th: '🤥 ติดสินบนหัวหน้า:"ทุกคนมีราคา ฉันหาคู่แข่งของผู้นำ ให้ทุนยึดอำนาจ และจ่ายหัวหน้าคนใหม่ให้ \'อวยพร\' โครงการเหมือง"',
                    zh: '🤥 贿赂酋长："每个人都有价码。我找到首领的对手，资助其发动政变，并付钱给新酋长\'祝福\'采矿项目。"'
                },
                consequence: {
                    en: '🩸 Civil War! The tribe fractures. Fighting breaks out over the"Blood Lithium."The mine is sabotaged repeatedly. You lose money and sleep. Evil and stupid.',
                    th: '🩸 สงครามกลางเมือง! เผ่าแตกแยก การต่อสู้ปะทุขึ้นแย่งชิง"ลิเธียมเลือด"เหมืองถูกวินาศกรรมซ้ำแล้วซ้ำเล่า คุณเสียเงินและนอนไม่หลับ ชั่วและโง่',
                    zh: '🩸 内战！部落分裂。围绕"血锂"爆发了战斗。矿井屡遭破坏。你既赔钱又失眠。既邪恶又愚蠢。'
                },
                stats: { competence: 20, ethics: -50, leadership: -30, innovation: 10 }
            }
        ]
    },
    {
        id: 'geo_035',
        text: {
            en: '☄️ The Rock from Above: A 500m asteroid is on collision course with Earth. Impact in 6 months. It\'s not an extinction event, but a"City Killer."Geology isn\'t just looking down anymore. You propose a deflection mission.',
            th: '☄️ หินจากฟากฟ้า: ดาวเคราะห์น้อย 500 เมตร กำลังพุ่งชนโลก การปะทะใน 6 เดือน ไม่ใช่การสูญพันธุ์ แต่เป็น"นักฆ่าเมือง"ธรณีวิทยาไม่ได้มองแค่ข้างล่างอีกต่อไป คุณเสนอภารกิจเบี่ยงเบน',
            zh: '☄️ 来自上方的岩石：一颗500米长的小行星正在与地球发生碰撞。6个月后撞击。这不是灭绝事件，而是"城市杀手"。地质学不再只是向下看。你提议执行偏转任务。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚀 Kinetic Impactor:"Hit it hard. We launch a heavy probe to slam into it and nudge its trajectory. Simple physics. High probability of success."',
                    th: '🚀 ตัวกระแทกจลนศาสตร์:"ชนมันแรงๆ เราปล่อยยานสำรวจหนักเพื่อกระแทกมันและขยับวิถี ฟิสิกส์ง่ายๆ โอกสสำเร็จสูง"',
                    zh: '🚀 动能撞击器："狠狠地撞它。我们发射一个重型探测器撞击它并推移其轨迹。简单的物理学。成功率很高。"'
                },
                consequence: {
                    en: '🎳 Strike! We nudged it. It misses Earth by 20,000 km. Close, but safe. You proved humanity can defend itself. Planetary Defense becomes a major field.',
                    th: '🎳 สไตรค์! เราขยับมันได้ มันพลาดโลกไป 20,000 กม. ใกล้ แต่ปลอดภัย คุณพิสูจน์ว่ามนุษยชาติปกป้องตัวเองได้ การป้องกันดาวเคราะห์กลายเป็นสาขาหลัก',
                    zh: '🎳 全中！我们推动了它。它以20,000公里的距离与地球擦肩而过。很近，但很安全。你证明了人类可以自卫。行星防御成为一个主要领域。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '☢️ Nuclear Nudge:"Too risky to just poke it. We detonate a nuke nearby. The vaporization of surface rock creates a jet effect. Guaranteed movement."',
                    th: '☢️ การสะกิดด้วยนิวเคลียร์:"เสี่ยงเกินไปที่จะแค่จิ้ม เราจุดระเบิดนิวเคลียร์ใกล้ๆ การระเหยของหินผิวหน้าสร้างเอฟเฟกต์เจ็ต รับประกันการเคลื่อนที่"',
                    zh: '☢️ 核推移："仅仅戳它太冒险了。我们在附近引爆核弹。表面岩石的蒸发产生喷气效应。保证移动。"'
                },
                consequence: {
                    en: '🧩 It Broke! The nuke shattered the asteroid into buckshot. Instead of one big rock, we now have 1,000 radioactive meteors raining down. Widespread damage but no single crater. A messy save.',
                    th: '🧩 มันแตก! นิวเคลียร์ทำลายดาวเคราะห์น้อยเป็นลูกปราย แทนที่จะเป็นหินก้อนใหญ่ ตอนนี้เรามีอุกกาบาตกัมมันตภาพรังสี 1,000 ลูกตกใส่ ความเสียหายกระจายวงกว้างแต่ไม่มีหลุมเดียว การช่วยที่เละเทะ',
                    zh: '🧩它碎了！核弹把小行星炸成了散弹。现在的不是一块大石头，而是1000颗放射性流星雨点般落下。造成广泛破坏，但没有单一的陨石坑。一次混乱的救援。'
                },
                stats: { competence: 30, ethics: 20, leadership: 30, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🎨 Paint It White:"Yarkovsky effect! We send a swarm of bots to paint one side white. The pressure from sunlight will slowly push it off course. Elegant geology."',
                    th: '🎨 ทามันสีขาว:"เอฟเฟกต์ยาร์คอฟสกี้! เราส่งฝูงบอทไปทาสีขาวด้านหนึ่ง แรงดันจากแสงอาทิตย์จะค่อยๆ ดันมันออกจากวิถี ธรณีวิทยาที่สง่างาม"',
                    zh: '🎨把它涂白："雅科夫斯基效应！我们派一群机器人把一边涂成白色。来自阳光的压力会慢慢把它推离轨道。优雅的地质学。"'
                },
                consequence: {
                    en: '🐌 Too Slow... It moved, but not enough. It grazes the atmosphere, exploding over the ocean. Huge tsunami. Your theory was beautiful, but physics is cruel.',
                    th: '🐌 ช้าไป... มันขยับ แต่ไม่พอ มันเฉียดชั้นบรรยากาศ ระเบิดเหนือมหาสมุทร สึนามิยักษ์ ทฤษฎีของคุณสวยงาม แต่ฟิสิกส์โหดร้าย',
                    zh: '🐌 太慢了……它移动了，但不够。它擦过大气层，在海洋上空爆炸。巨大的海啸。你的理论很美，但物理学很残酷。'
                },
                stats: { competence: 40, ethics: 30, leadership: 20, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '⛏️ Mine It Apart:"Don\'t deflect it. Eat it. We send rapid mining drones to dismantle it for platinum and water before it arrives. Turn a threat into profit."',
                    th: '⛏️ ขุดแยกชิ้นส่วน:"อย่าเบี่ยงเบน กินมันซะ เราส่งโดรนทำเหมืองด่วนไปถอดประกอบเอาแพลตตินัมและน้ำก่อนมันมาถึง เปลี่ยนภัยคุกคามเป็นกำไร"',
                    zh: '⛏️ 开采分解："不要偏转它。吃掉它。我们派遣快速采矿无人机在它到达之前将其拆除以获取铂金和水。将威胁转化为利润。"'
                },
                consequence: {
                    en: '🤑 Ultimate Resource! The drones consume 80% of the mass. The rest burns up harmlessly. You saved the world AND crashed the platinum market. You go down as the boldest industrialist ever.',
                    th: '🤑 ทรัพยากรสูงสุด! โดรนกินมวลไป 80% ที่เหลือเผาไหม้อย่างไม่มีอันตราย คุณช่วยโลก และทำตลาดแพลตตินัมพัง คุณถูกจดจำในฐานะนักอุตสาหกรรมที่กล้าหาญที่สุด',
                    zh: '🤑 终极资源！无人机消耗了80%的质量。其余的无害地烧毁了。你拯救了世界，并摧毁了铂金市场。你作为有史以来最大胆的实业家被载入史册。'
                },
                stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 }
            }
        ]
    },
    {
        id: 'geo_036',
        text: {
            en: '🌪️ The Climate Intervention: You are asked to assess a radical geo-engineering project: injecting sulfur aerosols into the stratosphere to cool the planet. It will definitely lower temperatures by 1.5°C, but your models show a 15% chance it will disrupt the Asian Monsoon, causing famine for millions.',
            th: '🌪️ การแทรกแซงสภาพภูมิอากาศ: คุณถูกขอให้ประเมินโครงการวิศวกรรมภูมิศาสตร์ที่รุนแรง: การฉีดละอองซัลเฟอร์เข้าไปในชั้นบรรยากาศสตราโตสเฟียร์เพื่อทำให้โลกเย็นลง มันจะลดอุณหภูมิลง 1.5°C อย่างแน่นอน แต่โมเดลของคุณแสดงโอกาส 15% ที่จะขัดขวางมรสุมเอเชีย ซึ่งทำให้เกิดความอดอยากสำหรับคนนับล้าน',
            zh: '🌪️ 气候干预：你被要求评估一个激进的地球工程项目：将硫气溶胶注入平流层以冷却地球。它肯定会将温度降低1.5°C，但你的模型显示有15%的几率会破坏亚洲季风，导致数百万人饥荒。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Veto the Project: "The risk of unintended consequences is too high. We cannot play God with the weather systems. Focus on emissions reduction instead."',
                    th: '🛑 ยับยั้งโครงการ: "ความเสี่ยงของผลที่ตามมาโดยไม่ตั้งใจสูงเกินไป เราไม่สามารถเล่นบทพระเจ้ากับระบบสภาพอากาศได้ โฟกัสไปที่การลดการปล่อยก๊าซแทน"',
                    zh: '🛑 否决该项目："意外后果的风险太高了。我们不能拿天气系统扮演上帝。专注于减排。"'
                },
                consequence: {
                    en: '🛡️ Safety Preserved! The project is halted. Global warming continues its slow march. You are praised for caution, but 10 years later, as heatwaves kill thousands, you wonder if you were too cowardly.',
                    th: '🛡️ รักษาความปลอดภัย! โครงการถูกระงับ ภาวะโลกร้อนยังคงดำเนินต่อไปอย่างช้าๆ คุณได้รับคำชมจากความระมัดระวัง แต่ 10 ปีต่อมา เมื่อคลื่นความร้อนฆ่าคนนับพัน คุณสงสัยว่าคุณขี้ขลาดเกินไปหรือไม่',
                    zh: '🛡️ 安全得以保存！项目停止。全球变暖继续缓慢行进。你因谨慎受到称赞，但10年后，当热浪导致数千人死亡时，你怀疑自己是否太懦弱了。'
                },
                stats: { competence: 40, ethics: 45, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🚀 Greenlight with Monitoring: "We do it. The climate emergency is here. We start small, monitor the monsoon daily, and abort if we see deviation."',
                    th: '🚀 ไฟเขียวพร้อมการเฝ้าระวัง: "เราทำมัน ภาวะฉุกเฉินทางภูมิอากาศอยู่ที่นี่ เราเริ่มเล็กๆ เฝ้าระวังมรสุมทุกวัน และยกเลิกหากเราเห็นความเบี่ยงเบน"',
                    zh: '🚀 绿灯放行并监测："我们做。气候紧急情况就在这里。我们从小规模开始，每天监测季风，如果发现偏差就中止。"'
                },
                consequence: {
                    en: '⚖️ The Great Experiment! The Earth cools! Crops improve in the US but struggle slightly in India. Politics get messy. You are the architect of the "Cooling Era." It works, but the geopolitical tension is extreme.',
                    th: '⚖️ การทดลองครั้งยิ่งใหญ่! โลกเย็นลง! พืชผลดีขึ้นในสหรัฐแต่ดิ้นรนเล็กน้อยในอินเดีย การเมืองยุ่งเหยิง คุณคือสถาปนิกแห่ง "ยุคแห่งความเย็น" มันได้ผล แต่ความตึงเครียดทางภูมิรัฐศาสตร์รุนแรงมาก',
                    zh: '⚖️ 伟大的实验！地球降温了！美国的农作物好转，但在印度略显挣扎。政治变得混乱。你是"冷却时代"的建筑师。它奏效了，但地缘政治紧张局势极其严重。'
                },
                stats: { competence: 50, ethics: 30, leadership: 45, innovation: 50 }
            },
            {
                id: 'C',
                text: {
                    en: '📉 Suppress the Risk Data: "Report the cooling benefits but minimize the monsoon risk in the executive summary. Politicians won\'t understand probabilities anyway."',
                    th: '📉 ปกปิดข้อมูลความเสี่ยง: "รายงานประโยชน์ของการทำความเย็นแต่ลดความเสี่ยงของมรสุมในบทสรุปสำหรับผู้บริหาร นักการเมืองไม่เข้าใจความน่าจะเป็นอยู่ดี"',
                    zh: '📉 压制风险数据："在执行摘要中报告冷却效益，但尽量减少季风风险。政客们反正也不懂概率。"'
                },
                consequence: {
                    en: '💀 Humanitarian Disaster! The project launches. The monsoon FAILS. Famine strikes. The suppressed report leaks. You are tried for "Crimes Against Humanity." A grim legacy.',
                    th: '💀 หายนะทางมนุษยธรรม! โครงการเปิดตัว มรสุมล้มเหลว ความอดอยากเกิดขึ้น รายงานที่ถูกปกปิดรั่วไหล คุณถูกพิจารณาคดี "อาชญากรรมต่อมนุษยชาติ" มรดกที่น่ากลัว',
                    zh: '💀 人道主义灾难！项目启动。季风失败。饥荒袭来。被压制的报告泄露。你因"反人类罪"受审。严峻的遗产。'
                },
                stats: { competence: 30, ethics: -50, leadership: -40, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 International Coalition: "I refuse to sign unless this is a UN-managed project with a compensation fund for affected nations. No single country controls the thermostat."',
                    th: '🤝 พันธมิตรระหว่างประเทศ: "ฉันปฏิเสธที่จะเซ็น ยกเว้นว่านี่จะเป็นโครงการที่จัดการโดย UN พร้อมกองทุนชดเชยสำหรับประเทศที่ได้รับผลกระทบ ไม่มีประเทศเดียวที่ควบคุมเทอร์โมสตัท"',
                    zh: '🤝 国际联盟："除非这是一个由联合国管理的项目，并为受影响国家设立赔偿基金，否则我拒绝签字。没有任何一个国家能控制恒温器。"'
                },
                consequence: {
                    en: '🕊️ Global Diplomacy! It takes 5 years to agree, but the project launches with global buy-in. When issues arise, the fund helps. You are hailed as a statesman of science.',
                    th: '🕊️ การทูตระดับโลก! ใช้เวลา 5 ปีในการตกลง แต่โครงการเปิดตัวด้วยการยอมรับระดับโลก เมื่อเกิดปัญหา กองทุนช่วยได้ คุณได้รับการยกย่องว่าเป็นรัฐบุรุษแห่งวิทยาศาสตร์',
                    zh: '🕊️ 全球外交！花了5年达成协议，但项目在全球支持下启动。当出现问题时，基金提供了帮助。你被誉为科学政治家。'
                },
                stats: { competence: 40, ethics: 50, leadership: 50, innovation: 35 }
            }
        ]
    },
    {
        id: 'geo_037',
        text: {
            en: '🌚 The Lunar Water Rights: You are the chief geologist for MoonBase Alpha. You find a crater filed with pure water ice—essential for fuel and life. It is technically in the "overlap zone" claimed by a rival nation\'s base. Your commander orders you to extract it immediately before they notice.',
            th: '🌚 สิทธิในน้ำบนดวงจันทร์: คุณเป็นหัวหน้านักธรณีวิทยาของ MoonBase Alpha คุณพบหลุมอุกกาบาตที่เต็มไปด้วยน้ำแข็งบริสุทธิ์—จำเป็นสำหรับเชื้อเพลิงและชีวิต ในทางเทคนิคมันอยู่ใน "โซนทับซ้อน" ที่อ้างสิทธิ์โดยฐานของประเทศคู่แข่ง ผู้บัญชาการของคุณสั่งให้คุณสกัดมันทันทีก่อนที่พวกเขาจะสังเกตเห็น',
            zh: '🌚 月球水权：你是月球基地阿尔法的首席地质学家。你发现了一个满是纯净水冰的陨石坑——这对燃料和生命至关重要。从技术上讲，它位于敌对国家基地声称拥有的"重叠区"。你的指挥官命令你在他们注意到之前立即开采。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '⛏️ Quick Extraction: "Yes, Commander. We deploy the rover swarms now. Possession is nine-tenths of the law in space. We take it all."',
                    th: '⛏️ การสกัดด่วน: "ครับผู้บัญชาการ เราปล่อยฝูงรถสำรวจเดี๋ยวนี้ การครอบครองคือเก้าในสิบของกฎหมายในอวกาศ เราเอามาทั้งหมด"',
                    zh: '⛏️ 快速开采："是的，指挥官。我们现在部署漫游车群。在太空中，占有就是王道。我们全都要。"'
                },
                consequence: {
                    en: '⚔️ Space Skirmish! You get the water. The rivals arrive too late and are furious. They jam your comms and sabotage a solar array. A Cold War starts on the Moon. You have water/fuel, but live in constant fear.',
                    th: '⚔️ การปะทะในอวกาศ! คุณได้น้ำ คู่แข่งมาช้าเกินไปและโกรธจัด พวกเขารบกวนการสื่อสารของคุณและวินาศกรรมแผงโซลาร์เซลล์ สงครามเย็นเริ่มขึ้นบนดวงจันทร์ คุณมีน้ำ/เชื้อเพลิง แต่ใช้ชีวิตด้วยความหวาดกลัวตลอดเวลา',
                    zh: '⚔️ 太空小冲突！你得到了水。对手来得太晚，非常愤怒。他们干扰你的通信并破坏太阳能电池板。月球上的冷战开始了。你有水/燃料，但生活在持续的恐惧中。'
                },
                stats: { competence: 45, ethics: 20, leadership: 30, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Joint Usage Proposal: "I hail the rival base directly. \'We found water in the neutral zone. Let\'s build a shared pipeline and split it 50/50.\' Better neighbors than enemies."',
                    th: '🤝 ข้อเสนอการใช้งานร่วมกัน: "ฉันเรียกฐานคู่แข่งโดยตรง \'เราเจอน้ำในโซนกลาง มาสร้างท่อร่วมกันและแบ่ง 50/50\' เป็นเพื่อนบ้านดีกว่าศัตรู"',
                    zh: '🤝 共同使得提议："我直接呼叫对手基地。\'我们在中立区发现了水。让我们建立共享管道并五五分成。\'做邻居总比做敌人好。"'
                },
                consequence: {
                    en: '🕊️ Solar System Treaty! The commander is angry but the rivals agree. The "Lunar Water Treaty" becomes the foundation for peaceful space law. You are reprimanded for verifying orders but celebrated by Earth diplomats.',
                    th: '🕊️ สนธิสัญญาระบบสุริยะ! ผู้บัญชาการโกรธแต่คู่แข่งตกลง "สนธิสัญญาน้ำดวงจันทร์" กลายเป็นรากฐานสำหรับกฎหมายอวกาศที่สงบสุข คุณถูกตำหนิเรื่องคำสั่งแต่ได้รับการเฉลิมฉลองจากนักการทูตโลก',
                    zh: '🕊️ 太阳系条约！指挥官很生气，但对手同意了。"月球水条约"成为和平太空法的基石。你因核实命令受到谴责，但受到地球外交官的庆祝。'
                },
                stats: { competence: 40, ethics: 45, leadership: 50, innovation: 35 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Delay and Dissemble: "I pretend the rover is broken to delay extraction. I write a report showing the deposit is unstable. I buy time for a diplomatic solution."',
                    th: '🛑 ถ่วงเวลาและแกล้งทำ: "ฉันแกล้งทำเป็นว่ารถสำรวจเสียเพื่อชะลอการสกัด ฉันเขียนรายงานแสดงให้เห็นว่าแหล่งแร่ไม่มั่นคง ฉันซื้อเวลาสำหรับการแก้ปัญหาทางการทูต"',
                    zh: '🛑 拖延和掩饰："我假装漫游车坏了以推迟开采。我写了一份报告显示矿床不稳定。我为外交解决方案争取时间。"'
                },
                consequence: {
                    en: '🐢 Bureaucratic Standoff! The rival base finds it 2 days later. Now it\'s a standoff. Negotiation happens without you initiating it. You avoided war but look incompetent due to "equipment failures."',
                    th: '🐢 การเผชิญหน้าทางราชการ! ฐานคู่แข่งพบมันใน 2 วันต่อมา ตอนนี้เป็นการเผชิญหน้า การเจรจาเกิดขึ้นโดยที่คุณไม่ต้องเริ่ม คุณหลีกเลี่ยงสงครามแต่ดูไร้ความสามารถเนื่องจาก "ความล้มเหลวของอุปกรณ์"',
                    zh: '🐢 官僚僵局！对手基地2天后发现了它。现在是僵局。谈判在你并未发起的情况下发生了。你避免了战争，但因"设备故障"显得无能。'
                },
                stats: { competence: 25, ethics: 35, leadership: 20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🧪 Scientific Preserve: "This ice core contains 4 billion years of solar history! We cannot melt it for fuel! I barricade the site as a scientific research zone."',
                    th: '🧪 เขตอนุรักษ์ทางวิทยาศาสตร์: "แกนน้ำแข็งนี้มีประวัติศาสตร์ดวงอาทิตย์ 4 พันล้านปี! เราละลายมันเพื่อเชื้อเพลิงไม่ได้! ฉันปิดกั้นสถานที่ในฐานะโซนวิจัยวิทยาศาสตร์"',
                    zh: '🧪 科学保护区："这个冰芯包含40亿年的太阳历史！我们不能把它融化当燃料！我将该地点作为科学研究区封锁起来。"'
                },
                consequence: {
                    en: '🔬 Science vs. Survival! You are relieved of duty for insubordination. They melt it anyway. You watch the history disappear into fuel tanks. You return to Earth as a martyr for science, but the base survives because of the fuel.',
                    th: '🔬 วิทยาศาสตร์ vs การอยู่รอด! คุณถูกปลดจากหน้าที่ฐานขัดคำสั่ง พวกเขาละลายมันอยู่ดี คุณมองดูประวัติศาสตร์หายไปในถังเชื้อเพลิง คุณกลับโลกในฐานะผู้พลีชีพเพื่อวิทยาศาสตร์ แต่ฐานอยู่รอดได้เพราะเชื้อเพลิง',
                    zh: '🔬 科学与生存！你因抗命被解除职务。他们还是把它融化了。你看着历史消失在燃料箱里。你作为科学烈士回到地球，但基地因燃料而幸存。'
                },
                stats: { competence: 45, ethics: 50, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'geo_038',
        text: {
            en: '🌋 The Caldera Super-Resort: A luxury developer wants to build a "Magma Resort" inside a dormant caldera. They want you to sign off that the magma chamber is "stable for 500 years." It technically is, but a freak earthquake could destabilize it instantly.',
            th: '🌋 ซูเปอร์รีสอร์ทปากปล่องภูเขาไฟ: นักพัฒนาหรูต้องการสร้าง "Magma Resort" ภายในปากปล่องภูเขาไฟที่สงบแล้ว พวกเขาต้องการให้คุณเซ็นรับรองว่าห้องแมกมา "มั่นคงสำหรับ 500 ปี" ในทางเทคนิคมันใช่ แต่แผ่นดินไหวประหลาดอาจทำให้มันไม่มั่นคงทันที',
            zh: '🌋 火山口超级度假村：一位豪华开发商想在一个休眠火山口内建造"岩浆度假村"。他们想让你签字证明岩浆室"稳定500年"。从技术上讲是的，但一场反常的地震可能会让它瞬间不稳定。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '✍️ Sign with Disclaimers: "I certify it is stable under CURRENT conditions. I add a 20-page appendix of Force Majeure (Acts of God) clauses to protect myself."',
                    th: '✍️ เซ็นพร้อมข้อจำกัดความรับผิดชอบ: "ฉันรับรองว่ามันมั่นคงภายใต้เงื่อนไขปัจจุบัน ฉันเพิ่มภาคผนวก 20 หน้าเกี่ยวกับเหตุสุดวิสัย (การกระทำของพระเจ้า) เพื่อปกป้องตัวเอง"',
                    zh: '✍️ 签署免责声明："我证明在当前条件下它是稳定的。我添加了20页的不可抗力条款附录来保护自己。"'
                },
                consequence: {
                    en: '🏗️ The Resort is Built! It\'s a hit. Instagram models flock there. You get paid well. 5 years later, a tremor causes a gas leak that evacuates the hotel. You point to page 14 of your disclaimer. You are legally safe, but morally gray.',
                    th: '🏗️ รีสอร์ทถูกสร้าง! มันปังมาก นางแบบ Instagram แห่กันไปที่นั่น คุณได้รับค่าตอบแทนดี 5 ปีต่อมา แรงสั่นสะเทือนทำให้ก๊าซรั่วจนต้องอพยพโรงแรม คุณชี้ไปที่หน้า 14 ของข้อจำกัดความรับผิดชอบ คุณปลอดภัยทางกฎหมาย แต่สีเทาทางศีลธรรม',
                    zh: '🏗️ 度假村建成！很受欢迎。Instagram模特蜂拥而至。你的报酬很高。5年后，一次震动导致气体泄漏，酒店被迫疏散。你指着免责声明的第14页。你在法律上是安全的，但在道德上是灰色的。'
                },
                stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 }
            },
            {
                id: 'B',
                text: {
                    en: '🛑 Refuse Risk: "Geology doesn\'t give 500-year guarantees. Building on top of a magma chamber is insanity. I veto the location."',
                    th: '🛑 ปฏิเสธความเสี่ยง: "ธรณีวิทยาไม่ได้ให้การรับประกัน 500 ปี การสร้างบนห้องแมกมาคือความบ้าคลั่ง ฉันยับยั้งสถานที่นี้"',
                    zh: '🛑 拒绝风险："地质学不提供500年的保证。在岩浆室上建造是疯狂的。我否决这个地点。"'
                },
                consequence: {
                    en: '🛡️ Project Killed! The developer moves to a boring beach location. You miss a big paycheck. 20 years later, the caldera actually uplifts 2 meters. If the hotel had been there, it would have been crushed. You were right.',
                    th: '🛡️ โครงการถูกฆ่า! นักพัฒนาย้ายไปที่ชายหาดที่น่าเบื่อ คุณพลาดเช็คก้อนโต 20 ปีต่อมา ปากปล่องภูเขาไฟยกตัวขึ้น 2 เมตรจริงๆ ถ้ารีสอร์ทอยู่ที่นั่น มันคงถูกบดขยี้ คุณคิดถูก',
                    zh: '🛡️ 项目被毙！开发商搬到了一个无聊的海滩地点。你错过了一大笔薪水。20年后，火山口实际上升了2米。如果酒店在那儿，早被压碎了。你是对的。'
                },
                stats: { competence: 50, ethics: 45, leadership: 40, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '💡 Safety Engineering: "We build it on floating seismic dampeners and install massive gas venting systems. It will cost extra, but be the safest volcano hotel on Earth."',
                    th: '💡 วิศวกรรมความปลอดภัย: "เราสร้างมันบนตัวลดแรงสั่นสะเทือนแบบลอยตัวและติดตั้งระบบระบายก๊าซขนาดใหญ่ มันจะมีค่าใช้จ่ายเพิ่ม แต่เป็นโรงแรมภูเขาไฟที่ปลอดภัยที่สุดในโลก"',
                    zh: '💡 安全工程："我们将它建立在浮动地震阻尼器上，并安装巨大的气体排放系统。这会花费额外费用，但将是地球上最安全的火山酒店。"'
                },
                consequence: {
                    en: '🚀 Architectural Marvel! The developer complains but agrees. The hotel wins engineering awards. When the tremor hits, the building sways but stays intact. You set a new standard for extreme construction.',
                    th: '🚀 สิ่งมหัศจรรย์ทางสถาปัตยกรรม! นักพัฒนาร้องเรียนแต่ตกลง โรงแรมชนะรางวัลวิศวกรรม เมื่อแรงสั่นสะเทือนมาถึง ตึกโยกแต่ยังคงสภาพดี คุณกำหนดมาตรฐานใหม่สำหรับการก่อสร้างสุดขั้ว',
                    zh: '🚀 建筑奇迹！开发商抱怨但同意了。酒店赢得了工程奖项。当震动来袭时，建筑物摇晃但完好无损。你为极端建筑设定了新标准。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '🤥 Fake the Report: "Sure, boss. 500 years stable. Let\'s get this signed so I can pay my mortgage."',
                    th: '🤥 ปลอมรายงาน: "ได้เลยเจ้านาย มั่นคง 500 ปี มาเซ็นกันเถอะฉันจะได้จ่ายค่าจำนอง"',
                    zh: '🤥 伪造报告："当然，老板。500年稳定。让我们签了这个，这样我好还房贷。"'
                },
                consequence: {
                    en: '💀 Nightmare! The hotel is built. 2 years later, unstable ground cracks the foundation. The hotel collapses. 200 deaths. You go to prison for gross negligence. Don\'t lie about magma.',
                    th: '💀 ฝันร้าย! โรงแรมถูกสร้าง 2 ปีต่อมา พื้นดินที่ไม่มั่นคงทำให้รากฐานร้าว โรงแรมถล่ม เสียชีวิต 200 คน คุณเข้าคุกข้อหาประมาทเลินเล่ออย่างร้ายแรง อย่าโกหกเรื่องแมกมา',
                    zh: '💀 噩梦！酒店建成。2年后，不稳定的地面震裂了地基。酒店倒塌。200人死亡。你因重大过失入狱。不要在岩浆上撒谎。'
                },
                stats: { competence: 10, ethics: -50, leadership: -40, innovation: 10 }
            }
        ]
    },
    {
        id: 'geo_039',
        text: {
            en: '💎 The Fake Gem Scandal: You discover that a major jewelry chain has been selling heat-treated sapphires as "all natural" for years. Millions of dollars in fraud. The chain hires you to verify their new stock, but implies you should ignore the "old inventory" still on shelves.',
            th: '💎 สแกนดัลอัญมณีปลอม: คุณค้นพบว่าเครือร้านอัญมณีรายใหญ่ขายไพลินเผาความร้อนว่าเป็น "ธรรมชาติล้วน" มาหลายปี การฉ้อโกงหลายล้านดอลลาร์ ทางเครือจ้างคุณให้ตรวจสอบสต็อกใหม่ของพวกเขา แต่บอกเป็นนัยว่าคุณควรเพิกเฉยต่อ "สินค้าเก่า" ที่ยังอยู่บนชั้นวาง',
            zh: '💎 假宝石丑闻：你发现一家大型珠宝连锁店多年来一直将热处理蓝宝石当作"全天然"出售。数百万美元的欺诈。该连锁店聘请你核实他们的新库存，但暗示你应该忽略仍在货架上的"旧库存"。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Whistleblower: "I cannot work for fraudsters. I report the old inventory to the Trade Commission and release my findings to the press."',
                    th: '📢 ผู้เปิดโปง: "ฉันทำงานให้พวกต้มตุ๋นไม่ได้ ฉันรายงานสินค้าเก่าต่อคณะกรรมาธิการการค้าและเผยแพร่ผลลัพธ์ของฉันต่อสื่อ"',
                    zh: '📢 举报人："我不能为诈骗犯工作。我向贸易委员会报告旧库存，并向媒体发布我的发现。"'
                },
                consequence: {
                    en: '💥 Market Crash! The chain goes bankrupt. Consumers panic. The gemstone market takes a hit. You are sued but win. You launch your own "Verified Natural" certification firm and become the most trusted name in gems.',
                    th: '💥 ตลาดพัง! เครือร้านล้มละลาย ผู้บริโภคตื่นตระหนก ตลาดอัญมณีได้รับผลกระทบ คุณถูกฟ้องแต่ชนะ คุณเปิดบริษัทรับรอง "Verified Natural" ของตัวเองและกลายเป็นชื่อที่ได้รับความไว้วางใจที่สุดในอัญมณี',
                    zh: '💥 市场崩盘！连锁店破产。消费者恐慌。宝石市场受到打击。你被起诉但赢了。你推出了自己的"验证天然"认证公司，成为宝石界最受信任的名字。'
                },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 30 }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Clean the New Stock: "I focus on the job I was hired for. I ensure every new stone is perfect. The old stock is not my scope. Legal liability is on them, not me."',
                    th: '🤐 ทำสต็อกใหม่ให้สะอาด: "ฉันโฟกัสกับงานที่ถูกจ้าง ฉันมั่นใจว่าหินใหม่ทุกก้อนสมบูรณ์แบบ สต็อกเก่าไม่ได้อยู่ในขอบเขตของฉัน ความรับผิดทางกฎหมายอยู่ที่พวกเขา ไม่ใช่ฉัน"',
                    zh: '🤐 清理新库存："我专注于我受以此的工作。面确保每一块新石头都是完美的。旧库存不在我的范围内。法律责任在他们，不在我。"'
                },
                consequence: {
                    en: '⚖️ Silent Complicity! The company slowly phases out the fakes. They survive. You get paid. But years later, customers find out about the old fakes and wonder why you didn\'t speak up. Your brand suffers "guilt by association."',
                    th: '⚖️ การสมรู้ร่วมคิดแบบเงียบๆ! บริษัทค่อยๆ เลิกขายของปลอม พวกเขารอด คุณได้เงิน แต่หลายปีต่อมา ลูกค้าพบความจริงเกี่ยวกับของปลอมเก่าและสงสัยว่าทำไมคุณไม่พูด แบรนด์ของคุณเสียหายจาก "ความผิดเพราะความเกี่ยวข้อง"',
                    zh: '⚖️ 沉默的同谋！公司慢慢淘汰了假货。他们活下来了。你拿到了钱。但在几年后，客户发现了旧假货，并想知道你为什么不发声。你的品牌遭受"连带罪责"。'
                },
                stats: { competence: 40, ethics: 20, leadership: 20, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '💰 Blackmail Leverage: "I know about the old stock. Double my fee, and I\'ll help you engage a \'buyback program\' to quietly remove them without admitting fraud."',
                    th: '💰 อำนาจแแบล็กเมล์: "ฉันรู้เรื่องสต็อกเก่า จ่ายค่าธรรมเนียมฉันสองเท่า และฉันจะช่วยคุณทำ \'โครงการซื้อคืน\' เพื่อนำพวกมันออกไปเงียบๆ โดยไม่ต้องยอมรับการฉ้อโกง"',
                    zh: '💰 勒索筹码："我知道旧库存的事。把我的费用加倍，我会帮你们搞一个\'回购计划\'，悄悄把它们移除而不承认欺诈。"'
                },
                consequence: {
                    en: '🤵 The Fixer! You get rich. The company cleans up its mess quietly. You are known in the industry as someone who "solves problems." Lucrative, but dirty.',
                    th: '🤵 นักแก้ปัญหา! คุณรวย บริษัทล้างความยุ่งเหยิงเงียบๆ คุณเป็นที่รู้จักในวงการว่าเป็นคนที่ "แก้ปัญหา" ได้กำไรดี แต่สกปรก',
                    zh: '🤵摆平人！你发财了。公司悄悄清理了烂摊子。你在业内被称为"解决问题"的人。有利可图，但肮脏。'
                },
                stats: { competence: 45, ethics: 10, leadership: 25, innovation: 35 }
            },
            {
                id: 'D',
                text: {
                    en: '📜 Demand Transparency Policy: "I will take the job ONLY if you institute a transparent audit of ALL inventory immediately. If you refuse, I walk."',
                    th: '📜 เรียกร้องนโยบายความโปร่งใส: "ฉันจะรับงานต่อเมื่อคุณเริ่มการตรวจสอบสต็อกทั้งหมดอย่างโปร่งใสทันที ถ้าคุณปฏิเสธ ฉันไป"',
                    zh: '📜 要求透明政策："只有你们立即对所有库存进行透明审计，我才会接受这份工作。如果你们拒绝，我就走人。"'
                },
                consequence: {
                    en: '🚪 They Blink (or not)! They refuse and you walk. They hire a yes-man. 6 months later the scandal breaks. You legally prove you refused to participate. You emerge with clean hands and high integrity.',
                    th: '🚪 พวกเขากะพริบตา (หรือไม่)! พวกเขาปฏิเสธและคุณเดินออกมา พวกเขาจ้างคนขี้ประจบ 6 เดือนต่อมาเรื่องอื้อฉาวแตก คุณพิสูจน์ทางกฎหมายได้ว่าคุณปฏิเสธที่จะเข้าร่วม คุณรอดด้วยมือที่สะอาดและความซื่อสัตย์สูง',
                    zh: '🚪 他们眨眼了（或者没眨）！他们拒绝了，你走了。他们雇了个唯唯诺诺的人。6个月后丑闻爆发。你在法律上证明了你拒绝参与。你带着干净的双手和崇高的正直全身而退。'
                },
                stats: { competence: 45, ethics: 50, leadership: 40, innovation: 20 }
            }
        ]
    },
    {
        id: 'geo_040',
        text: {
            en: '🦕 The Mass Extinction Theory: You find a layer of iridium in 200-million-year-old rock that contradicts the current accepted theory of the Triassic extinction. Publishing it will upset the careers of 5 famous senior professors (who decide your tenure).',
            th: '🦕 ทฤษฎีการสูญพันธุ์ครั้งใหญ่: คุณพบชั้นอิริเดียมในหินอายุ 200 ล้านปีที่ขัดแย้งกับทฤษฎีที่ยอมรับในปัจจุบันของการสูญพันธุ์ยุคไทรแอสสิก การตีพิมพ์มันจะทำให้ศาสตราจารย์อาวุโสที่มีชื่อเสียง 5 คน (ผู้ตัดสินตำแหน่งของคุณ) ไม่พอใจ',
            zh: '🦕 大灭绝理论：你在2亿年前的岩石中发现了铱层，这与目前公认的三叠纪灭绝理论相矛盾。发表它会扰乱5位著名资深教授（他们决定你的终身教职）的职业生涯。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📢 Publish and Perish?: "Science seeks truth, not friends. I publish in Nature. Let the old guard crumble."',
                    th: '📢 ตีพิมพ์แล้วพินาศ?: "วิทยาศาสตร์แสวงหาความจริง ไม่ใช่เพื่อน ฉันตีพิมพ์ใน Nature ให้พวกหัวเก่าพังทลายไป"',
                    zh: '📢 发表即毁灭？："科学寻求真理，而不是朋友。我在《自然》上发表。让老顽固们崩溃吧。"'
                },
                consequence: {
                    en: '🏆 Paradigm Shift! The backlash is brutal. You are denied tenure at your current uni. BUT, the evidence is undeniable. 5 years later, you win the Nobel/Crafoord Prize. You changed the textbooks.',
                    th: '🏆 การเปลี่ยนแปลงกระบวนทัศน์! กระแตีกลับรุนแรง คุณถูกปฏิเสธตำแหน่งที่มหาวิทยาลัยปัจจุบัน แต่หลักฐานปฏิเสธไม่ได้ 5 ปีต่อมา คุณชนะรางวัลโนเบล/คราฟอร์ด คุณเปลี่ยนตำราเรียน',
                    zh: '🏆 范式转移！反击是残酷的。你在目前的大学被拒绝终身教职。但是，证据是无可否认的。5年后，你获得了诺贝尔/克拉福德奖。你改变了教科书。'
                },
                stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 }
            },
            {
                id: 'B',
                text: {
                    en: '🤝 Collaborative Approach: "I approach the senior professors first. \'Look at this strange data. Help me interpret it.\' Co-author the paper with them so they feel like part of the discovery."',
                    th: '🤝 แนวทางร่วมมือ: "ฉันเข้าหาศาสตราจารย์อาวุโสก่อน \'ดูข้อมูลแปลกๆ นี้สิ ช่วยฉันตีความหน่อย\' เขียนบทความร่วมกับพวกเขาเพื่อให้พวกเขารู้สึกเป็นส่วนหนึ่งของการค้นพบ"',
                    zh: '🤝 合作方式："我先找资深教授。\'看这个奇怪的数据。帮我解释一下。\'与他们合著论文，让他们感觉自己是发现的一部分。"'
                },
                consequence: {
                    en: '🐢 Slow Evolution! They dilute your findings to "preserve" their old theories. The paper is weak. You get tenure because you played nice, but the breakthrough is delayed by 10 years. Safe career, mediocre science.',
                    th: '🐢 วิวัฒนาการที่เชื่องช้า! พวกเขาทำให้การค้นพบของคุณจางลงเพื่อ "รักษา" ทฤษฎีเก่าของพวกเขา บทความอ่อน คุณได้ตำแหน่งเพราะทำตัวดี แต่ความก้าวหน้าล่าช้าไป 10 ปี อาชีพปลอดภัย วิทยาศาสตร์งั้นๆ',
                    zh: '🐢 缓慢进化！他们稀释你的发现以"保留"他们的旧理论。论文很弱。你因为表现乖巧而获得终身教职，但突破推迟了10年。职业生涯安全，科学平庸。'
                },
                stats: { competence: 40, ethics: 30, leadership: 35, innovation: 20 }
            },
            {
                id: 'C',
                text: {
                    en: '🤐 Wait for Tenure: "I hide the samples in my safe. I wait 3 years until I have tenure. THEN I drop the bombshell."',
                    th: '🤐 รอตำแหน่ง: "ฉันซ่อนตัวอย่างในตู้เซฟ ฉันรอ 3 ปีจนกว่าจะได้ตำแหน่ง จากนั้นฉันค่อยทิ้งระเบิด"',
                    zh: '🤐 等待终身教职："我把样本藏在保险箱里。我等3年直到获得终身教职。然后我扔出重磅炸弹。"'
                },
                consequence: {
                    en: '⏱️ The Smart Strategy? You get tenure. You publish. BUT, a grad student in China finds the same layer 2 years later and scoops you. You lost priority. Lesson: Science waits for no one.',
                    th: '⏱️ กลยุทธ์ที่ฉลาด? คุณได้ตำแหน่ง คุณตีพิมพ์ แต่มีนักศึกษาป.โทในจีนเจอชั้นเดียวกันใน 2 ปีต่อมาและตัดหน้าคุณ คุณเสียสิทธิ์ บทเรียน: วิทยาศาสตร์ไม่รอใคร',
                    zh: '⏱️ 聪明的策略？你获得了终身教职。你发表了。但是，中国的一名研究生2年后发现了同一层，并抢先发表。你失去了优先权。教训：科学不等人。'
                },
                stats: { competence: 40, ethics: 25, leadership: 20, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '🤔 Anonymous Leak: "I mail copies of the data to a rival lab known for attacking accepted theories. Let them fight the battle."',
                    th: '🤔 การรั่วไหลแบบนิรนาม: "ฉันส่งสำเนาข้อมูลให้แล็บคู่แข่งที่ขึ้นชื่อเรื่องการโจมตีทฤษฎีที่ยอมรับกัน ให้พวกเขาสู้รบเอง"',
                    zh: '🤔 匿名泄密："我把数据副本寄给一个以攻击公认理论闻名的竞争实验室。让他们去打仗。"'
                },
                consequence: {
                    en: '🕵️ Spectator Sport! The rival lab gets the glory. You watch the drama. You keep your job, but deep down you know you gave away your legacy due to fear. Regret follows you.',
                    th: '🕵️ กีฬาคนดู! แล็บคู่แข่งได้เกียรติยศ คุณดูละครดราม่า คุณรักษางานไว้ได้ แต่ลึกๆ คุณรู้ว่าคุณยกมรดกของคุณให้คนอื่นเพราะความกลัว ความเสียใจตามหลอกหลอน',
                    zh: '🕵️ 旁观者运动！竞争实验室获得了荣耀。你看戏。你保住了工作，但在内心深处你知道你因恐惧而放弃了你的遗产。后悔伴随着你。'
                },
                stats: { competence: 30, ethics: 20, leadership: 10, innovation: 10 }
            }
        ]
    },
    {
        id: 'geo_041',
        text: {
            en: '🧱 The Ancient Aquifer: You advise a desert city running out of water. You find a "fossil aquifer" deep underground—water trapped for 10,000 years. If tapped, it will save the city for 50 years, but once gone, it\'s gone forever (non-renewable).',
            th: '🧱 ชั้นน้ำบาดาลโบราณ: คุณให้คำแนะนำเมืองทะเลทรายที่กำลังขาดแคลนน้ำ คุณพบ "ชั้นน้ำบาดาลฟอสซิล" ลึกใต้ดิน—น้ำที่ถูกกักไว้ 10,000 ปี หากเจาะใช้ มันจะช่วยเมืองได้ 50 ปี แต่เมื่อหมดแล้ว ก็จะหมดไปตลอดกาล (ไม่หมุนเวียน)',
            zh: '🧱 古代含水层：你为一座缺水的沙漠城市提供建议。你在地下深处发现了一个"化石含水层"——被困了10000年的水。如果开发，它将拯救这座城市50年，但一旦耗尽，就永远消失了（不可再生）。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '💧 Tap It with Strict Limits: "We use it, BUT only 50% of capacity, and enforce harsh water rationing immediately to extend its life to 100 years. Buy time for desalination tech."',
                    th: '💧 เจาะแบบจำกัดเข้มงวด: "เราใช้มัน แต่เพียง 50% ของความจุ และบังคับใช้การปันส่วนน้ำที่รุนแรงทันทีเพื่อขยายอายุเป็น 100 ปี ซื้อเวลาสำหรับเทคโนโลยีกลั่นน้ำทะเล"',
                    zh: '💧 严格限制开发："我们使用它，但只用50%的容量，并立即执行严格的配水，将其寿命延长至100年。为海水淡化技术争取时间。"'
                },
                consequence: {
                    en: '⏳ Bought Time! The city survives. The high water prices drive innovation in recycling. By the time the aquifer runs low, the city is water-independent. Smart resource management.',
                    th: '⏳ เวลาที่ซื้อมา! เมืองรอด ราคาน้ำที่สูงขับเคลื่อนนวัตกรรมในการรีไซเคิล เมื่อชั้นน้ำบาดาลใกล้หมด เมืองก็พึ่งพาตัวเองเรื่องน้ำได้ การจัดการทรัพยากรที่ชาญฉลาด',
                    zh: '⏳ 争取到了时间！城市幸存下来。高水价推动了回收创新。当含水层枯竭时，城市已经实现了水独立。明智的资源管理。'
                },
                stats: { competence: 50, ethics: 40, leadership: 45, innovation: 35 }
            },
            {
                id: 'B',
                text: {
                    en: '🧛 Tap It Dry: "The city is dying NOW. Pump it full speed. Future generations will figure out a solution. Our job is to save the people living today."',
                    th: '🧛 สูบให้แห้ง: "เมืองกำลังจะตายเดี๋ยวนี้ สูบเต็มสปีด คนรุ่นหลังจะหาวิธีแก้ปัญหาเอง งานของเราคือช่วยคนที่อยู่ตอนนี้"',
                    zh: '🧛 抽干它："城市现在就要死了。全速抽水。后代会想出解决办法的。我们的工作是拯救今天活着的人。"'
                },
                consequence: {
                    en: '🎉 Boom and Bust! The city booms. Green lawns in the desert. 40 years later, the water stops abruptly. The city becomes a ghost town. You are long retired, but your legacy is a ruin in the sand.',
                    th: '🎉 รุ่งเรืองแล้วร่วงโรย! เมืองเจริญรุ่งเรือง สนามหญ้าเขียวในทะเลทราย 40 ปีต่อมา น้ำหยุดไหลกะทันหัน เมืองกลายเป็นเมืองร้าง คุณเกษียณนานแล้ว แต่มรดกของคุณคือซากปรักหักพังในทราย',
                    zh: '🎉 繁荣与萧条！城市繁荣。沙漠里的绿草坪。40年后，水突然停了。城市变成了鬼城。你早已退休，但你的遗产是沙堆中的废墟。'
                },
                stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🛑 Refuse to Tap: "This is stealing from the future. I will not authorize fossil water extraction. You must limit growth and recycle wastewater instead."',
                    th: '🛑 ปฏิเสธที่จะเจาะ: "นี่คือการขโมยจากอนาคต ฉันจะไม่อนุญาตให้สกัดน้ำฟอสซิล คุณต้องจำกัดการเติบโตและรีไซเคิลน้ำเสียแทน"',
                    zh: '🛑 拒绝开发："这是在窃取未来。我不会批准化石水开采。你们必须限制增长并回收废水。"'
                },
                consequence: {
                    en: '🌵 Immediate Crisis! The city rejects your advice and hires someone else. They drill anyway. You stood by your principles but failed to guide the policy. You watch from afar.',
                    th: '🌵 วิกฤตทันที! เมืองปฏิเสธคำแนะนำของคุณและจ้างคนอื่น พวกเขาเจาะอยู่ดี คุณยึดมั่นในหลักการแต่ล้มเหลวในการชี้นำนโยบาย คุณมองดูจากที่ไกลๆ',
                    zh: '🌵 立即危机！城市拒绝了你的建议并雇佣了其他人。他们还是钻探了。你坚持原则，但未能指导政策。你从远处观望。'
                },
                stats: { competence: 35, ethics: 50, leadership: 15, innovation: 20 }
            },
            {
                id: 'D',
                text: {
                    en: '💡 Use as Emergency Reserve: "Connect the pipes but keep the valve CLOSED. Use it only for drought years. Make the city live on renewable water normally."',
                    th: '💡 ใช้เป็นสำรองฉุกเฉิน: "ต่อท่อแต่ปิดวาล์วไว้ ใช้เฉพาะปีที่แล้ง ให้เมืองอยู่ได้ด้วยน้ำหมุนเวียนในเวลาปกติ"',
                    zh: '💡 作为紧急储备："连接管道但保持阀门关闭。仅在干旱年份使用。让城市平时依靠再生水生活。"'
                },
                consequence: {
                    en: '🛡️ Strategic Resilience! The aquifer acts as a battery. It lasts 200 years. The city becomes a model of resilience. You are honored as the "Guardian of the Deep."',
                    th: '🛡️ ความยืดหยุ่นเชิงกลยุทธ์! ชั้นน้ำบาดาลทำหน้าที่เหมือนแบตเตอรี่ มันอยู่ได้ 200 ปี เมืองกลายเป็นต้นแบบของความยืดหยุ่น คุณได้รับเกียรติในฐานะ "ผู้พิทักษ์ความลึก"',
                    zh: '🛡️ 战略韧性！含水层充当电池。它持续了200年。城市成为韧性的典范。你被尊为"深渊守护者"。'
                },
                stats: { competence: 45, ethics: 45, leadership: 40, innovation: 45 }
            }
        ]
    },
    {
        id: 'geo_042',
        text: {
            en: '🌋 The Volcano Power Plant: You are developing a geothermal plant directly on an active volcanic flank. Your AI model predicts a 1% chance of opening a new vent directly under the turbine hall, which would cause a steam explosion comparable to a small nuke.',
            th: '🌋 โรงไฟฟ้าภูเขาไฟ: คุณกำลังพัฒนาโรงไฟฟ้าความร้อนใต้พิภพบนไหล่เขาภูเขาไฟที่ยังคุกรุ่น AI โมเดลของคุณทำนายโอกาส 1% ที่จะเปิดปากปล่องใหม่ใต้ห้องกังหันโดยตรง ซึ่งจะทำให้เกิดการระเบิดของไอน้ำเทียบเท่ากับนิวเคลียร์ขนาดเล็ก',
            zh: '🌋 火山发电厂：你正在一座活火山的侧面开发地热发电厂。你的AI模型预测有1%的几率会在涡轮机大厅正下方打开一个新的喷口，这将导致相当于小型核弹的蒸汽爆炸。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🤖 Trust the AI: "1% is too high for catastrophe. Move the plant 2km downslope. It costs $20M more in piping, but drops risk to 0.01%."',
                    th: '🤖 เชื่อ AI: "1% สูงเกินไปสำหรับหายนะ ย้ายโรงไฟฟ้าลงไป 2 กม. ค่าท่อเพิ่ม $20M แต่ลดความเสี่ยงเป็น 0.01%"',
                    zh: '🤖 相信AI："对于灾难来说1%太高了。将工厂向下坡移动2公里。管道费用增加2000万美元，但风险降至0.01%。"'
                },
                consequence: {
                    en: '🛡️ Prudent Move! You move the plant. 3 years later, a fumarole opens exactly where the old site was! The plant is safe. You saved hundreds of lives and the company asset. AI + Human judgment = Win.',
                    th: '🛡️ การเคลื่อนไหวที่รอบคอบ! คุณย้ายโรงไฟฟ้า 3 ปีต่อมา ปากปล่องควันเปิดตรงจุดเดิมเป๊ะ! โรงไฟฟ้าปลอดภัย คุณช่วยชีวิตคนนับร้อยและทรัพย์สินบริษัท AI + การตัดสินใจของมนุษย์ = ชนะ',
                    zh: '🛡️ 谨慎之举！你搬迁了工厂。3年后，一个喷气孔正好在旧址处打开！工厂安全。你拯救了数百条生命和公司资产。AI+人类判断=胜利。'
                },
                stats: { competence: 50, ethics: 40, leadership: 40, innovation: 45 }
            },
            {
                id: 'B',
                text: {
                    en: '🙅 Human Intuition: "AI is prone to hallucinations. My geological survey shows solid rock. Building on the flank is more efficient. Ignore the AI."',
                    th: '🙅 สัญชาตญาณมนุษย์: "AI มักจะหลอน การสำรวจทางธรณีวิทยาของฉันแสดงหินแข็ง การสร้างบนไหล่เขาประหยัดกว่า เพิกเฉยต่อ AI"',
                    zh: '🙅 人类直觉："AI容易产生幻觉。我的地质调查显示岩石坚固。建在侧面更有效率。忽略AI。"'
                },
                consequence: {
                    en: '🎲 Risk Realized! The plant is built. A steam blast destroys Turbine 3. 5 workers injured. The investigation simulates the event and matches your disregarded AI prediction. You are fired for ignoring safety data.',
                    th: '🎲 ความเสี่ยงเป็นจริง! โรงไฟฟ้าถูกสร้าง ระเบิดไอน้ำทำลายกังหัน 3 คนงาน 5 คนบาดเจ็บ การสอบสวนจำลองเหตุการณ์และตรงกับคำทำนาย AI ที่คุณเพิกเฉย คุณถูกไล่ออกข้อหาเพิกเฉยต่อข้อมูลความปลอดภัย',
                    zh: '🎲 风险成真！工厂建成。蒸汽爆炸摧毁了3号涡轮机。5名工人受伤。调查模拟了该事件，与你忽视的AI预测相符。你因忽视安全数据而被解雇。'
                },
                stats: { competence: 20, ethics: -20, leadership: -10, innovation: 10 }
            },
            {
                id: 'C',
                text: {
                    en: '🛡️ Remote Operation: "Keep the location but automate everything. No humans in the turbine hall. If it blows, we lose metal, not meat."',
                    th: '🛡️ การดำเนินงานระยะไกล: "เก็บสถานที่ไว้แต่อัตโนมัติทุกอย่าง ไม่มีมนุษย์ในห้องกังหัน ถ้ามันระเบิด เราเสียโลหะ ไม่ใช่เนื้อหนัง"',
                    zh: '🛡️ 远程操作："保留地点但一切自动化。涡轮机大厅里没有人。如果它爆炸，我们损失的是金属，不是人肉。"'
                },
                consequence: {
                    en: '🤖 Automation Wave! You build a fully robotic plant. It\'s expensive but safe. Other dangerous industries copy your model. You become a leader in "Remote Hazard Geology."',
                    th: '🤖 คลื่นอัตโนมัติ! คุณสร้างโรงไฟฟ้าหุ่นยนต์เต็มรูปแบบ แพงแต่ปลอดภัย อุตสาหกรรมอันตรายอื่นเลียนแบบโมเดลของคุณ คุณกลายเป็นผู้นำใน "ธรณีวิทยาอันตรายระยะไกล"',
                    zh: '🤖 自动化浪潮！你建造了一个完全自动化的工厂。昂贵但安全。其他危险行业纷纷效仿你的模式。你成为"远程危险地质学"的领导者。'
                },
                stats: { competence: 45, ethics: 35, leadership: 40, innovation: 50 }
            },
            {
                id: 'D',
                text: {
                    en: '⚖️ Probability Hedge: "Buy insurance for the explosion. 1% risk is acceptable business risk. Proceed as planned."',
                    th: '⚖️ การป้องกันความเสี่ยงความน่าจะเป็น: "ซื้อประกันสำหรับการระเบิด ความเสี่ยง 1% เป็นความเสี่ยงทางธุรกิจที่ยอมรับได้ ดำเนินการตามแผน"',
                    zh: '⚖️ 概率对冲："为爆炸购买保险。1%的风险是可接受的商业风险。按计划进行。"'
                },
                consequence: {
                    en: '💰 Lucky Break? Nothing happens. You save money. The plant runs fine. But you know you gambled with lives for efficiency. It becomes a bad habit.',
                    th: '💰 โชคช่วย? ไม่มีอะไรเกิดขึ้น คุณประหยัดเงิน โรงไฟฟ้ารันได้ปกติ แต่คุณรู้ว่าคุณพนันชีวิตคนเพื่อประสิทธิภาพ มันกลายเป็นนิสัยที่ไม่ดี',
                    zh: '💰 运气好？什么也没发生。你省了钱。工厂运行良好。但你知道你为了效率拿生命在赌博。这变成了一个坏习惯。'
                },
                stats: { competence: 30, ethics: 10, leadership: 20, innovation: 10 }
            }
        ]
    },
    {
        id: 'geo_043',
        text: {
            en: '⛏️ The Asteroid Mining Rush: A private space company wants to tow a platinum-rich asteroid into Low Earth Orbit (LEO) for easy mining. Your orbital dynamics model shows a 0.001% chance it decays and hits Tokyo. The profit is $50 Trillion. They offer you $1B to sign the safety certificate.',
            th: '⛏️ เหมืองดาวเคราะห์น้อยตื่นทอง: บริษัทอวกาศเอกชนต้องการลากดาวเคราะห์น้อยที่อุดมด้วยแพลตตินัมเข้าสู่วงโคจรระดับต่ำของโลก (LEO) เพื่อการขุดที่ง่าย โมเดลพลศาสตร์วงโคจรของคุณแสดงโอกาส 0.001% ที่มันจะเสื่อมถอยและชนโตเกียว กำไรคือ $50 ล้านล้าน พวกเขาเสนอ $1B ให้คุณเซ็นใบรับรองความปลอดภัย',
            zh: '⛏️ 小行星开采热潮：一家私人太空公司想将一颗富含铂金的小行星拖入近地轨道（LEO）以便于开采。你的轨道动力学模型显示有0.001%的几率它会衰变并撞击东京。利润是50万亿美元。他们给你10亿美元让你签署安全证书。'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🛑 Zero Tolerance: "0.001% of millions dying is unacceptable. I veto LEO. Process it on the Moon or don\'t do it at all."',
                    th: '🛑 ไม่ยอมรับความเสี่ยงเลย: "0.001% ของคนนับล้านตายเป็นสิ่งที่ยอมรับไม่ได้ ฉันยับยั้ง LEO แปรรูปบนดวงจันทร์หรือไม่ทำเลย"',
                    zh: '🛑 零容忍："百万分之一的死亡率是不可接受的。我否决LEO。在月球上处理或者干脆别做。"'
                },
                consequence: {
                    en: '🌙 Lunar Economy! They complain but move operations to Lunar Orbit. It costs more, but creates a booming Moon economy. You are the father of the Lunar Industrial Complex. Tokyo is safe.',
                    th: '🌙 เศรษฐกิจดวงจันทร์! พวกเขาบ่นแต่ย้ายการดำเนินงานไปวงโคจรดวงจันทร์ ต้นทุนสูงขึ้น แต่สร้างเศรษฐกิจดวงจันทร์ที่เฟื่องฟู คุณคือบิดาแห่งคอมเพล็กซ์อุตสาหกรรมดวงจันทร์ โตเกียวปลอดภัย',
                    zh: '🌙 月球经济！他们抱怨但将业务转移到月球轨道。成本更高，但创造了繁荣的月球经济。你是月球工业综合体之父。东京安全。'
                },
                stats: { competence: 50, ethics: 50, leadership: 45, innovation: 40 }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Take the Risk (and Cash): "0.001% is lower than the risk of a random meteor hit. I sign. $1B buys a lot of safety nets."',
                    th: '💰 รับความเสี่ยง (และเงิน): "0.001% ต่ำกว่าความเสี่ยงของอุกกาบาตสุ่มชน ฉันเซ็น $1B ซื้อตาข่ายความปลอดภัยได้เยอะ"',
                    zh: '💰 承担风险（并拿钱）："0.001%低于随机流星撞击的风险。我签。10亿美元可以买很多安全网。"'
                },
                consequence: {
                    en: '🎲 Infinite Wealth! The project succeeds. Platinum becomes cheap. You are a billionaire. But every time you see a shooting star, you have a panic attack. The guilt of the risk never leaves you.',
                    th: '🎲 ความมั่งคั่งไม่มีที่สิ้นสุด! โครงการสำเร็จ แพลตตินัมราคาถูก คุณเป็นมหาเศรษฐี แต่ทุกครั้งที่คุณเห็นดาวตก คุณจะมีอาการแพนิก ความรู้สึกผิดของความเสี่ยงไม่เคยหายไป',
                    zh: '🎲 无尽的财富！项目成功。铂金变得便宜。你是亿万富翁。但每次看到流星，你都会恐慌发作。风险的内疚感从未离开过你。'
                },
                stats: { competence: 40, ethics: -20, leadership: 10, innovation: 30 }
            },
            {
                id: 'C',
                text: {
                    en: '🛡️ Redundant Safeguards: "I demand 3 independent tugs and a \'destruct\' nuclear charge installed on the rock. If it deviates 1 meter, we destroy it in space."',
                    th: '🛡️ การป้องกันซ้ำซ้อน: "ฉันต้องการเรือลากจูงอิสระ 3 ลำและระเบิดนิวเคลียร์ \'ทำลายล้าง\' ติดตั้งบนหิน ถ้ามันเบี่ยงเบน 1 เมตร เราทำลายมันในอวกาศ"',
                    zh: '🛡️ 冗余保障："我要求3艘独立的拖船并在岩石上安装如果不‘自毁’核装药。如果它偏离1米，我们就在太空中摧毁它。"'
                },
                consequence: {
                    en: '✅ Controlled Danger! The safeguards cost billions, but they agree. During insertion, a tug fails! The backups save the day. Your paranoia saved Tokyo. High stress, high reward.',
                    th: '✅ อันตรายที่ควบคุมได้! การป้องกันใช้เงินหลายพันล้าน แต่พวกเขาตกลง ระหว่างการเข้าสู่วงโคจร เรือลากลำหนึ่งเสีย! ตัวสำรองช่วยไว้ได้ ความขี้ระแวงของคุณช่วยโตเกียว ความเครียดสูง ผลตอบแทนสูง',
                    zh: '✅ 受控的危险！保障措施耗资数十亿，但他们同意了。在插入过程中，一艘拖船失灵！备份挽救了局面。你的偏执拯救了东京。高压力，高回报。'
                },
                stats: { competence: 50, ethics: 30, leadership: 40, innovation: 45 }
            },
            {
                id: 'D',
                text: {
                    en: '🗣️ Public Referendum: "The people of Tokyo should decide risk. I release the data and demand a vote. If they say yes, I sign."',
                    th: '🗣️ ประชามติสาธารณะ: "คนโตเกียวควรตัดสินใจเรื่องความเสี่ยง ฉันเผยแพร่ข้อมูลและเรียกร้องการโหวต ถ้าพวกเขาตกลง ฉันเซ็น"',
                    zh: '🗣️ 公民投票："东京人民应该决定风险。我发布数据并要求投票。如果他们说行，我就签。"'
                },
                consequence: {
                    en: '📢 Panic and Rejection! The public votes NO overwhelmingly. The project is dead. You are sued for NDA breach but hailed as a democratic hero. You proved tech giants can\'t dictate risk to populations.',
                    th: '📢 ตื่นตระหนกและปฏิเสธ! ประชาชนโหวตไม่ท่วมท้น โครงการตาย คุณถูกฟ้องฐานละเมิด NDA แต่ได้รับการยกย่องว่าเป็นฮีโร่ประชาธิปไตย คุณพิสูจน์ว่ายักษ์ใหญ่เทคโนโลยีไม่สามารถกำหนดความเสี่ยงให้ประชาชนได้',
                    zh: '📢 恐慌和拒绝！公众压倒性地投了反对票。项目已死。你因违反保密协议被起诉，但被誉为民主英雄。你证明了科技巨头不能向民众发号施令。'
                },
                stats: { competence: 30, ethics: 45, leadership: 35, innovation: 20 }
            }
        ]
    },
    {
        id: 'geo_044',
        text: {
            en: '🌊 The Deep Sea Trench: You are exploring the Mariana Trench and find a unique ecosystem around a hydrothermal vent. A biotech firm wants to scrape the entire vent for "longevity enzymes." It will destroy the ecosystem, but could potentially double human lifespan.',
            th: '🌊 ร่องลึกก้นสมุทร: คุณกำลังสำรวจร่องลึกมาเรียนาและพบระบบนิเวศที่เป็นเอกลักษณ์รอบๆ ปล่องความร้อนใต้พิภพ บริษัทไบโอเทคต้องการขูดปล่องทั้งหมดเพื่อหา "เอนไซม์อายุยืน" มันจะทำลายระบบนิเวศ แต่อาจเพิ่มอายุขัยมนุษย์ได้สองเท่า',
            zh: '🌊 深海海沟：你正在探索马里亚纳海沟，并在热液喷口周围发现了一个独特的生态系统。一家生物技术公司想要刮掉整个喷口来寻找"长寿酶"。这将破坏生态系统，但有可能使人类寿命翻倍。'
        },
        options: [
            { id: 'A', text: { en: '🔬 Sustainable Sampling: "I refuse the scraping. I propose a 5-year study to sample small amounts without killing the colony. Science before profit."', th: '🔬 การสุ่มตัวอย่างแบบยั่งยืน: "ฉันปฏิเสธการขูด ฉันเสนอการศึกษา 5 ปีเพื่อสุ่มตัวอย่างจำนวนน้อยโดยไม่ฆ่าอาณานิคม วิทยาศาสตร์มาก่อนกำไร"', zh: '🔬 可持续采样："我拒绝刮取。我提议进行为期5年的研究，在不杀死群落的情况下采样少量样本。科学高于利润。"' }, consequence: { en: '🐢 Too Slow... A rival country sends a covert sub and scrapes it anyway. You saved your soul but the ecosystem died, and the rival got the cure. You feel bitter.', th: '🐢 ช้าไป... ประเทศคู่แข่งส่งเรือดำน้ำลับมาขูดมันอยู่ดี คุณรักษาจิตวิญญาณไว้ได้แต่ระบบนิเวศตาย และคู่แข่งได้ยารักษา คุณรู้สึกขมขื่น', zh: '🐢 太慢了……一个竞争国家派出一艘秘密潜艇把它刮掉了。你拯救了你的灵魂，但生态系统死了，对手得到了治疗方法。你感到很痛苦。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 20 } },
            { id: 'B', text: { en: '🧬 Public Health Mandate: "Doubling human life is a moral imperative. We harvest the vent. The ecosystem is small; the benefit is global."', th: '🧬 คำสั่งสาธารณสุข: "การเพิ่มอายุขัยมนุษย์เป็นสองเท่าเป็นเรื่องศีลธรรมที่ต้องทำ เราเก็บเกี่ยวปล่องนี้ ระบบนิเวศมันเล็ก แต่ประโยชน์มันระดับโลก"', zh: '🧬 公共卫生指令："使人类寿命翻倍是种道德义务。我们开发喷口。生态系统很小；利益是全球性的。"' }, consequence: { en: '✨ Eternal Youth! The enzymes work. Humans now live to 160. Overpopulation becomes a massive crisis. You are the man who "ended death" but started the famine of space. A complicated legacy.', th: '✨ เยาว์วัยนิรันดร์! เอนไซม์ได้ผล มนุษย์มีอายุถึง 160 ปี ประชากรล้นโลกกลายเป็นวิกฤตครั้งใหญ่ คุณคือคนที่ "ยุติความตาย" แต่เริ่มความอดอยากของพื้นที่ มรดกที่ซับซ้อน', zh: '✨ 永恒的青春！酶起作用了。人类现在可以活到160岁。人口过剩成为大规模危机。你是"终结死亡"但开启空间饥荒的人。一个复杂的遗产。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'C', text: { en: '🛡️ Deep Sea Preserve: "I lobby for the Trench to be an International Marine Sanctuary. No mining, no scraping. Some secrets should stay in the dark."', th: '🛡️ เขตอนุรักษ์ทะเลลึก: "ฉันล็อบบี้ให้ร่องลึกนี้เป็นเขตอนุรักษ์ทางทะเลระหว่างประเทศ ห้ามทำเหมือง ห้ามขูด ความลับบางอย่างควรอยู่ในความมืด"', zh: '🛡️ 深海保护区："我游说将海沟设立为国际海洋保护区。禁止采矿，禁止刮取。有些秘密应该留在黑暗中。"' }, consequence: { en: '🏛️ Global Hero! 120 nations sign the treaty. You save the last pristine place on Earth. You don\'t get the longevity cure, but you preserved the integrity of the planet.', th: '🏛️ ฮีโร่ระดับโลก! 120 ประเทศเซ็นสัญญา คุณช่วยสถานที่บริสุทธิ์แห่งสุดท้ายของโลก คุณไม่ได้ยารักษาอายุยืน แต่คุณรักษาความสมบูรณ์ของโลกไว้', zh: '🏛️ 全球英雄！120个国家签署了条约。你保护了地球上最后一个原始之地。你没有得到长寿药，但你保护了地球的完整性。' }, stats: { competence: 35, ethics: 50, leadership: 50, innovation: 10 } },
            { id: 'D', text: { en: '💡 Lab Synthesis: "I take a tiny sample and spend 10 years trying to replicate the enzyme in a lab. It\'s harder, but it keeps the vent alive."', th: '💡 การสังเคราะห์ในแล็บ: "ฉันเอาตัวอย่างเล็กๆ มาและใช้เวลา 10 ปีพยายามเลียนแบบเอนไซม์ในแล็บ มันยากกว่า แต่ทำให้ปล่องยังมีชีวิต"', zh: '💡 实验室合成："我取一小份样本，花10年时间尝试在实验室里复制这种酶。这更难，但能让喷口活下去。"' }, consequence: { en: '🏆 Scientific Triumph! You finally crack the code. You get the longevity cure WITHOUT destroying the vent. You win the Nobel Prize in Medicine AND Geology. The ultimate win.', th: '🏆 ชัยชนะทางวิทยาศาสตร์! ในที่สุดคุณก็ถอดรหัสได้ คุณได้ยารักษาอายุยืนโดยไม่ทำลายปล่อง คุณชนะรางวัลโนเบลสาขาการแพทย์และธรณีวิทยา ชัยชนะสูงสุด', zh: '🏆 科学胜利！你终于破解了代码。在不破坏喷口的情况下得到了长寿药。你获得了诺贝尔医学奖和地质学奖。终极胜利。' }, stats: { competence: 50, ethics: 45, leadership: 40, innovation: 50 } }
        ]
    },
    {
        id: 'geo_045',
        text: {
            en: '☣️ The Nuclear Waste Vault: You are designing a repository for spent nuclear fuel that must stay sealed for 100,000 years. Should you mark it with "Warning Symbols" (which might attract curious future humans) or bury it and "forget it" (hoping it\'s never found)?',
            th: '☣️ ห้องเก็บขยะนิวเคลียร์: คุณกำลังออกแบบที่เก็บเชื้อเพลิงนิวเคลียร์ที่ใช้แล้วซึ่งต้องถูกปิดผนึกไว้ 100,000 ปี คุณควรทำเครื่องหมายด้วย "สัญลักษณ์เตือน" (ซึ่งอาจดึงดูดมนุษย์ในอนาคตที่อยากรู้อยากเห็น) หรือฝังมันและ "ลืมมันไป" (หวังว่าจะไม่มีวันถูกพบ)?',
            zh: '☣️ 核废料库：你正在设计一个必须封存10万年的乏核燃料存储库。你应该用"警告标志"（这可能会吸引好奇的未来人类）来标记它，还是把它埋掉并"忘掉它"（希望它永远不会被发现）？'
        },
        options: [
            { id: 'A', text: { en: '⚠️ Visual Warnings: "Use massive concrete spikes and universal symbols of danger. We have a duty to warn them."', th: '⚠️ คำเตือนทางสายตา: "ใช้หนามคอนกรีตยักษ์และสัญลักษณ์อันตรายสากล เรามีหน้าที่เตือนพวกเขา"', zh: '⚠️ 视觉警告："使用巨大的混凝土尖刺和通用的危险符号。我们有责任警告他们。"' }, consequence: { en: '🏛️ Legend of Horror! 2,000 years later, it becomes a "Gothic Temple of Doom" for a post-apocalyptic cult. They dig it up to find "magic power" and die of radiation. Your warning was seen as an invitation.', th: '🏛️ ตำนานสยอง! 2,000 ปีต่อมา มันกลายเป็น "มหาวิหารแห่งความตาย" ของลัทธิหลังวันสิ้นโลก พวกเขาขุดมันเพื่อหา "พลังวิเศษ" และตายจากรังสี คำเตือนของคุณถูกมองว่าเป็นการเชื้อเชิญ', zh: '🏛️ 恐怖传说！2000年后，它变成了一个后末日邪教的"恐怖哥特神庙"。他们为了寻找"魔力"而挖掘它，结果死于辐射。你的警告被视为一种邀请。' }, stats: { competence: 40, ethics: 45, leadership: 30, innovation: 40 } },
            { id: 'B', text: { en: '🤫 Landscape Camouflage: "Hide it. No markers. Buried 1km deep in stable granite. Let nature erase the memory. Silence is the best protection."', th: '🤫 การพรางภูมิทัศน์: "ซ่อนมันไว้ ไม่ต้องมีเครื่องหมาย ฝังลึก 1 กม. ในหินแกรนิตที่มั่นคง ให้ธรรมชาติลบความจำ ความเงียบคือการป้องกันที่ดีที่สุด"', zh: '🤫 景观伪装："藏起来。不设标记。埋在1公里深的稳定花岗岩中。让大自然抹去记忆。沉默是最好的保护。"' }, consequence: { en: '🌑 Perfect Secrecy! 10,000 years pass. Civilization resets. A new Bronze Age city is built right on top. They drill a well and hit the waste. Thousands die, and they have no idea why their "holy water" is poison.', th: '🌑 ความลับที่สมบูรณ์แบบ! 10,000 ปีผ่านไป อารยธรรมรีเซ็ต เมืองยุคสำริดแห่งใหม่ถูกสร้างขึ้นข้างบนพอดี พวกเขาเจาะบ่อน้ำและเจอขยะ คนตายเป็นพัน และพวกเขาไม่รู้เลยว่าทำไม "น้ำศักดิ์สิทธิ์" ถึงเป็นยาพิษ', zh: '🌑 完美的秘密！10000年过去了。文明重启。一座新的青铜时代城市就在正上方建立。他们钻了一口井并碰到了废料。成千上万的人死亡，而他们根本不知道为什么他们的"圣水"是有毒的。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🧬 Biological Guard: "Create a lineage of \'Ray-Cats\'—cats that change color near radiation. Embed the warning in folklore and DNA. \'If the cat turns blue, flee.\'"', th: '🧬 ผู้พิทักษ์ชีวภาพ: "สร้างสายพันธุ์ \'แมวรังสี\'—แมวที่เปลี่ยนสีเมื่ออยู่ใกล้รังสี ฝังคำเตือนไว้ในนิทานพื้นบ้านและ DNA \'ถ้าแมวเปลี่ยนเป็นสีน้ำเงิน ให้หนี\'"', zh: '🧬 生物守卫："创造一个\'辐射猫\'谱系——在辐射附近会变色的猫。将警告植入民间传说和DNA。\'如果猫变蓝了，就快逃。\'"' }, consequence: { en: '🐈 Folklore Success! The "Blue Cat" myth survives 50,000 years. People avoid the area religiously. You used biology to solve a geological time problem. Genius and weird.', th: '🐈 ความสำเร็จของนิทาน! ตำนาน "แมวสีน้ำเงิน" อยู่รอดมา 50,000 ปี ผู้คนหลีกเลี่ยงพื้นที่นั้นอย่างเคร่งครัด คุณใช้ชีววิทยาแก้ปัญหาเวลาทางธรณีวิทยา อัจฉริยะและแปลกประหลาด', zh: '🐈 民间传说的成功！"蓝猫"的神话流传了5万年。人们虔诚地避开这个地区。你用生物学解决了一个地质时间问题。天才且古怪。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🛰️ Orbital Disposal: "Don\'t bury it. Shoot it into the Sun. Expensive, but Earth stays clean forever."', th: '🛰️ การกำจัดนอกโลก: "อย่าฝังมัน ยิงมันไปที่ดวงอาทิตย์ แพง แต่โลกจะสะอาดตลอดไป"', zh: '🛰️ 轨道处置："不要掩埋。把它射向太阳。虽然昂贵，但地球将永远保持干净。"' }, consequence: { en: '🚀 Rocket Failure! 1 in 100 launches fail. One rocket explodes in the upper atmosphere, spreading plutonium globally. You traded a localized long-term risk for a global immediate catastrophe.', th: '🚀 จรวดล้มเหลว! 1 ใน 100 ของการปล่อยล้มเหลว จรวดลำหนึ่งระเบิดในชั้นบรรยากาศชั้นบน แพร่กระจายพลูโตเนียมไปทั่วโลก คุณแลกความเสี่ยงระยะยาวเฉพาะที่กับหายนะระดับโลกทันที', zh: '🚀 火箭失灵！百分之一的发射会失败。一枚火箭在高层大气爆炸，将钚扩散到全球。你用局部长期风险换取了全球即时灾难。' }, stats: { competence: 20, ethics: 10, leadership: 10, innovation: 30 } }
        ]
    },
    {
        id: 'geo_046',
        text: {
            en: '🏗️ The Continental Bridge: You are the consultant for a bridge across the Bering Strait. Your data shows the tectonic plates are moving in a way that will snap the bridge in 30 years. The politicians want it built NOW for the election.',
            th: '🏗️ สะพานข้ามทวีป: คุณเป็นที่ปรึกษาสำหรับสะพานข้ามช่องแคบเบริง ข้อมูลของคุณแสดงว่าแผ่นเปลือกโลกกำลังเคลื่อนที่ในแบบที่จะทำให้สะพานขาดใน 30 ปี นักการเมืองต้องการสร้างเดี๋ยวนี้เพื่อการเลือกตั้ง',
            zh: '🏗️ 大陆桥：你是白令海峡大桥的顾问。你的数据显示，板块的运动方式会在30年内拉断大桥。政客们为了选举想现在就建成。'
        },
        options: [
            { id: 'A', text: { en: '✍️ Sign it Off: "30 years is someone else\'s problem. I\'ll be retired. The economic boost today is worth it."', th: '✍️ เซ็นอนุมัติ: "30 ปีเป็นปัญหาของคนอื่น ฉันคงเกษียณแล้ว การกระตุ้นเศรษฐกิจวันนี้คุ้มค่ากว่า"', zh: '✍️ 签字通过："30年后就是别人的麻烦了。那时我就退休了。今天的经济增长是值得的。"' }, consequence: { en: '🌉 The Bridge Opens! You are a hero. Trade flourishes. 28 years later, the first cracks appear. You are 80, watching on TV as the "Bridge to Nowhere" begins to tear apart. Your name is dragged through the mud late in life.', th: '🌉 สะพานเปิด! คุณคือฮีโร่ การค้าเฟื่องฟู 28 ปีต่อมา รอยร้าวแรกปรากฏ คุณอายุ 80 มองดูทีวีขณะที่ "สะพานสู่ความว่างเปล่า" เริ่มขาดออกจากกัน ชื่อเสียงของคุณถูกทำลายในบั้นปลายชีวิต', zh: '🌉 大桥开通！你是英雄。贸易繁荣。28年后，出现了第一道裂缝。你80岁了，在电视上看着"无处可通之桥"开始断裂。你的名声在晚年毁于一旦。' }, stats: { competence: 30, ethics: 10, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '🛑 Public Veto: "I go to the press. \'This bridge is a deathtrap.\' I sacrifice my career to stop the project."', th: '🛑 ยับยั้งต่อสาธารณะ: "ฉันไปที่สื่อ \'สะพานนี้คือกับดักความตาย\' ฉันยอมเสียอาชีพเพื่อหยุดโครงการ"', zh: '🛑 公众否决："我去找媒体。\'这座桥是个死亡陷阱。\'我牺牲自己的职业生涯来停止这个项目。"' }, consequence: { en: '🚫 Project Cancelled! You are fired and blacklisted from government contracts. You open a small consulting firm. 30 years later, a geologist confirms your data. You were an unsung hero, but lived a modest life.', th: '🚫 โครงการถูกยกเลิก! คุณถูกไล่ออกและติดแบล็กลิสต์จากสัญญาจ้างรัฐ คุณเปิดบริษัทที่ปรึกษาเล็กๆ 30 ปีต่อมา นักธรณีวิทยายืนยันข้อมูลของคุณ คุณคือฮีโร่ที่ไม่มีใครรู้จัก แต่ใช้ชีวิตเรียบง่าย', zh: '🚫 项目取消！你被解雇并被列入政府合同黑名单。你开了一家小型咨询公司。30年后，一位地质学家证实了你的数据。你是一位无名英雄，但过着平凡的生活。' }, stats: { competence: 50, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '💡 Floating Segment Design: "I design the bridge with a massive \'sliding joint\' that can absorb 50 meters of plate movement. It costs 3x more, but it lasts 200 years."', th: '💡 การออกแบบเซกเมนต์ลอยตัว: "ฉันออกแบบสะพานด้วย \'ข้อต่อเลื่อน\' ยักษ์ที่สามารถรับการเคลื่อนที่ของเปลือกโลกได้ 50 เมตร มันแพงกว่า 3 เท่า แต่อยู่ได้ 200 ปี"', zh: '💡 滑动段设计："我设计的大桥带有一个巨大的\'滑动接头\'，可以吸收50米的板块运动。虽然成本高出3倍，但可以持续200年。"' }, consequence: { en: '🚀 Engineering Marvel! The politicians complain about the cost but the public supports the "Bridge of the Future." It becomes the 8th wonder of the world. You are the Da Vinci of Geology.', th: '🚀 สิ่งมหัศจรรย์ทางวิศวกรรม! นักการเมืองบ่นเรื่องต้นทุนแต่ประชาชนสนับสนุน "สะพานแห่งอนาคต" มันกลายเป็นสิ่งมหัศจรรย์อันดับ 8 ของโลก คุณคือดาวินชีแห่งธรณีวิทยา', zh: '🚀 工程奇迹！政客们抱怨成本，但公众支持"未来之桥"。它成为世界第八大奇迹。你是地质学界的达芬奇。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '🎭 Stall with "Further Study": "I tell them I need 2 years of seismic monitoring. I hope the election passes or the administration changes."', th: '🎭 ถ่วงเวลาด้วย "การศึกษาเพิ่มเติม": "ฉันบอกพวกเขาว่าต้องเฝ้าดูแผ่นดินไหว 2 ปี ฉันหวังว่าการเลือกตั้งจะผ่านไปหรือมีการเปลี่ยนรัฐบาล"', zh: '🎭 以"进一步研究"拖延："我告诉他们我需要进行2年的地震监测。我希望选举过去或者政府换届。"' }, consequence: { en: '🐢 Bureaucratic Limbo! The project dies in committee. You kept your integrity and your job, but the bridge is never built. A safe, boring success.', th: '🐢 ติดหล่มระบบราชการ! โครงการตายในคณะกรรมการ คุณรักษาความซื่อสัตย์และงานไวได้ แต่สะพานไม่เคยถูกสร้าง ความสำเร็จที่ปลอดภัยและน่าเบื่อ', zh: '🐢 官僚僵局！项目在委员会中流产。你保持了正直并保住了工作，但大桥从未建成。一次安全、乏味的成功。' }, stats: { competence: 35, ethics: 35, leadership: 25, innovation: 10 } }
        ]
    },
    {
        id: 'geo_047',
        text: {
            en: '❄️ The Methane Timebomb: You are in Siberia and find a "methane crater" ready to blow. If it erupts, it releases as much greenhouse gas as a medium-sized country. You can "burn it off" now, causing massive local damage but saving the global climate, or let it vent slowly.',
            th: '❄️ ระเบิดเวลามีเทน: คุณอยู่ในไซบีเรียและพบ "หลุมมีเทน" ที่พร้อมจะระเบิด ถ้ามันระเบิด มันจะปล่อยก๊าซเรือนกระจกเท่ากับประเทศขนาดกลาง คุณสามารถ "เผาทิ้ง" ตอนนี้ ซึ่งจะทำให้เกิดความเสียหายในท้องถิ่นอย่างหนักแต่ช่วยภูมิอากาศโลก หรือปล่อยให้มันระบายช้าๆ',
            zh: '❄️ 甲烷定时炸弹：你在西伯利亚发现一个随时可能爆炸的"甲烷坑"。如果它喷发，释放的温室气体相当于一个中型国家。你可以现在就把它"烧掉"，虽然会造成巨大的局部破坏，但能挽救全球气候，或者让它慢慢排放。'
        },
        options: [
            { id: 'A', text: { en: '🔥 Burn it Off: "Light the match. The local tundra will be scorched, but we stop the methane pulse. Global survival over local ecology."', th: '🔥 เผาทิ้ง: "จุดไฟเลย ทุ่งทุนดราแถวนี้จะไหม้เกรียม แต่เราหยุดพัลส์ของมีเทน การอยู่รอดของโลกสำคัญกว่านิเวศวิทยาในท้องถิ่น"', zh: '🔥 烧掉它："点火。局部苔原将被烧焦，但我们阻止了甲烷脉冲。全球生存重于局部生态。"' }, consequence: { en: '🌋 The Great Flare! The sky turns orange for a week. You are briefly investigated for arson, but climate scientists hail you as a hero. You prevented a tipping point. 500 reindeer died, but millions of humans were saved.', th: '🌋 เปลวไฟยักษ์! ท้องฟ้ากลายเป็นสีส้มเป็นสัปดาห์ คุณถูกสอบสวนคดีวางเพลิงสั้นๆ แต่นักวิทยาศาสตร์ภูมิอากาศยกย่องคุณเป็นฮีโร่ คุณป้องกันจุดพลิกผัน กวางเรนเดียร์ 500 ตัวตาย แต่คนนับล้านรอด', zh: '🌋 大闪光！天空变成橙色持续了一周。你因纵火受到短期调查，但气候科学家称赞你为英雄。你阻止了一个临界点。500头驯鹿死亡，但救了数百万人。' }, stats: { competence: 45, ethics: 30, leadership: 40, innovation: 40 } },
            { id: 'B', text: { en: '🌬️ Low-Flow Venting: "I design a capping system that captures 60% of the methane. It takes 6 months to build. A risky middle ground."', th: '🌬️ การระบายแบบไหลต่ำ: "ฉันออกแบบระบบปิดครอบที่ดักจับมีเทนได้ 60% ใช้เวลาสร้าง 6 เดือน เป็นทางสายกลางที่เสี่ยง"', zh: '🌬️ 低流量排放："我设计了一个捕获60%甲烷的封顶系统。需要6个月建成。这是一个冒险的折中方案。"' }, consequence: { en: '💥 Too Late! While constructing the cap, the pressure spikes and the crater explodes. You are injured, and 100% of the gas escapes. Your attempt at a "safe" solution was the worst of both worlds.', th: '💥 สายไปแล้ว! ระหว่างสร้างฝาครอบ ความดันพุ่งสูงและหลุมระเบิด คุณได้รับบาดเจ็บ และก๊าซ 100% รั่วไหล ความพยายามทำทาง "ปลอดภัย" ของคุณคือสิ่งที่แย่ที่สุดจากทั้งสองทาง', zh: '💥 太晚了！在建造封顶系统的过程中，压力激增，矿坑爆炸。你受伤了，100%的气体逃逸。你寻求"安全"解决方案的尝试造成了最坏的结果。' }, stats: { competence: 20, ethics: 20, leadership: 15, innovation: 30 } },
            { id: 'C', text: { en: '🏭 Methane Capture Plant: "I call in an energy giant to build a power plant over the crater. Turn the threat into electricity for Siberia!"', th: '🏭 โรงงานดักจับมีเทน: "ฉันเรียกยักษ์ใหญ่พลังงานมาสร้างโรงไฟฟ้าเหนือหลุม เปลี่ยนภัยคุกคามให้เป็นไฟฟ้าสำหรับไซบีเรีย!"', zh: '🏭 甲烷捕获工厂："我打电话给一家能源巨头，在矿坑上方建造一座发电厂。将威胁转化为西伯利亚的电力！"' }, consequence: { en: '💰 Industrial Win! It works perfectly. The site becomes a major energy hub. You get a board seat. It took 2 years, but the pressure held long enough. High risk, extreme profit.', th: '💰 ชัยชนะทางอุตสาหกรรม! มันได้ผลสมบูรณ์แบบ สถานที่นี้กลายเป็นศูนย์กลางพลังงานที่สำคัญ คุณได้เก้าอี้บอร์ดบริหาร ใช้เวลา 2 ปีแต่ความดันยังรับไหว เสี่ยงสูง กำไรมหาศาล', zh: '💰 工业胜利！运行完美。该地点成为主要能源枢纽。你获得了董事会席位。花了2年时间，但压力维持了足够长的时间。高风险，极端利润。' }, stats: { competence: 50, ethics: 25, leadership: 45, innovation: 50 } },
            { id: 'D', text: { en: '🗺️ Map and Evacuate: "This is a natural process. I map it, warn the local nomads to leave, and let nature take its course. We shouldn\'t interfere."', th: '🗺️ ทำแผนที่และอพยพ: "นี่คือกระบวนการธรรมชาติ ฉันทำแผนที่ เตือนชนเผ่าเร่ร่อนในท้องถิ่นให้ออกไป และให้ธรรมชาติเป็นไปตามทาง เราไม่ควรแทรกแซง"', zh: '🗺️ 绘图并疏散："这是个自然过程。我绘制地图，警告当地牧民离开，并顺其自然。我们不应该干涉。"' }, consequence: { en: '📉 Quiet Catastrophe. The crater blows. No one dies, but the methane pulse is recorded by satellites. Global temperatures tick up 0.1°C instantly. You are criticized for inaction during a crisis.', th: '📉 หายนะที่เงียบเชียบ หลุมระเบิด ไม่มีคนตาย แต่พัลส์มีเทนถูกบันทึกโดยดาวเทียม อุณหภูมิโลกพุ่งขึ้น 0.1°C ทันที คุณถูกวิจารณ์ว่านิ่งเฉยในยามวิกฤต', zh: '📉 无声的灾难。矿坑爆炸。无人死亡，但卫星记录到了甲烷脉冲。全球气温立即上升了0.1摄氏度。你因在危机期间无所作为而受到批评。' }, stats: { competence: 30, ethics: 40, leadership: 10, innovation: 10 } }
        ]
    },
    {
        id: 'geo_048',
        text: {
            en: '💎 The Blood Diamond AI: You create an AI that can identify the exact "geological signature" of Conflict Diamonds with 99.9% accuracy. Warlords offer you millions to "poison" the data so their stones look legal. The UN wants the AI for free.',
            th: '💎 AI เพชรสีเลือด: คุณสร้าง AI ที่สามารถระบุ "ลายเซ็นทางธรณีวิทยา" ที่แม่นยำของเพชรความขัดแย้งได้ 99.9% ขุนศึกเสนอเงินล้านให้คุณ "วางยา" ข้อมูลเพื่อให้เพชรของพวกเขาดูถูกกฎหมาย UN ต้องการ AI นี้ฟรีๆ',
            zh: '💎 血钻AI：你创造了一个AI，可以以99.9%的准确率识别冲突钻石的精确"地质特征"。军阀们给你几百万，让你在数据中"下毒"，好让他们的钻石看起来合法。联合国想要免费使用这个AI。'
        },
        options: [
            { id: 'A', text: { en: '🕊️ Donate to UN: "I give it away. Ending the funding of civil wars is more important than my bank account."', th: '🕊️ บริจาคให้ UN: "ฉันยกให้ฟรี การหยุดยั้งเงินทุนของสงครามกลางเมืองสำคัญกว่าบัญชีธนาคารของฉัน"', zh: '🕊️ 捐给联合国："我免费提供。结束内战的资金来源比我的银行账户更重要。"' }, consequence: { en: '🌟 Peace Architect! You are nominated for the Nobel Peace Prize. You live on a professor\'s salary but you saved 50,000 lives. Your software changes the jewelry industry forever.', th: '🌟 สถาปนิกแห่งสันติภาพ! คุณถูกเสนอชื่อเข้าชิงรางวัลโนเบลสาขาสันติภาพ คุณใช้ชีวิตด้วยเงินเดือนศาสตราจารย์แต่ช่วยชีวิตคนได้ 50,000 คน ซอฟต์แวร์ของคุณเปลี่ยนอุตสาหกรรมอัญมณีตลอดไป', zh: '🌟 和平建筑师！你被提名为诺贝尔和平奖候选人。你靠着教授的工资生活，但你挽救了5万条生命。你的软件永远改变了珠宝行业。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '🏦 Commercial License: "I sell it to the big diamond cartels. They use it to clean up the market. I get rich, and the goal is achieved through capitalism."', th: '🏦 ใบอนุญาตเชิงพาณิชย์: "ฉันขายมันให้กลุ่มอุตสาหกรรมเพชรยักษ์ใหญ่ พวกเขาใช้มันล้างตลาด ฉันรวย และเป้าหมายสำเร็จได้ด้วยทุนนิยม"', zh: '🏦 商业授权："我把它卖给大型钻石财团。他们用它来清理市场。我变富了，目标通过资本主义得以实现。"' }, consequence: { en: '💰 Corporate King! You become a tech billionaire. Conflict diamonds drop by 80%. It\'s not 100% because the cartels use it to control prices, but it\'s progress. You have a private island now.', th: '💰 กษัตริย์องค์กร! คุณกลายเป็นมหาเศรษฐีเทคโนโลยี เพชรความขัดแย้งลดลง 80% ไม่ใช่ 100% เพราะกลุ่มอุตสาหกรรมใช้ควบคุมราคา แต่มันคือความก้าวหน้า ตอนนี้คุณมีเกาะส่วนตัวแล้ว', zh: '💰 企业之王！你成为了科技亿万富翁。冲突钻石减少了80%。没有达到100%是因为财团利用它来控制价格，但这就是进步。你现在拥有私人岛屿。' }, stats: { competence: 50, ethics: 30, leadership: 45, innovation: 40 } },
            { id: 'C', text: { en: '🎭 Take the Warlord Money: "I\'ll poison the data. Just one batch. Enough to buy a retirement home. Who will notice 0.1%?"', th: '🎭 รับเงินขุนศึก: "ฉันจะวางยาข้อมูล แค่ล็อตเดียวพอ พอที่จะซื้อบ้านเกษียณ ใครจะสังเกตเห็น 0.1% กัน?"', zh: '🎭 拿军阀的钱："我会给数据下毒。就这一批。足够买养老房了。谁会注意到0.1%？"' }, consequence: { en: '💀 Caught! A smart intern at the UN finds the bias. You are disgraced, stripped of your PhD, and spend 5 years in prison. The warlords don\'t even pay you the full amount.', th: '💀 ถูกจับได้! เด็กฝึกงานฉลาดๆ ที่ UN เจอความลำเอียง คุณเสียชื่อเสียง ถูกยึดปริญญาเอก และติดคุก 5 ปี ขุนศึกไม่จ่ายเงินให้คุณครบตามที่ตกลงด้วยซ้ำ', zh: '💀 被抓了！联合国的一名聪明实习生发现了偏见。你名誉扫地，被剥夺了博士学位，并在监狱服刑5年。军阀们甚至没付给你全款。' }, stats: { competence: 10, ethics: -50, leadership: -30, innovation: 20 } },
            { id: 'D', text: { en: '🛡️ Open Source: "I release the code on GitHub. Now everyone can verify diamonds. Total transparency."', th: '🛡️ โอเพนซอร์ส: "ฉันปล่อยโค้ดบน GitHub ตอนนี้ทุกคนตรวจสอบเพชรได้ ความโปร่งใสสมบูรณ์แบบ"', zh: '🛡️ 开源："我在GitHub上发布代码。现在每个人都可以查验钻石。完全透明。"' }, consequence: { en: '🌐 Chaos! Warlords hire hackers to find bugs in your code. It becomes a game of cat-and-mouse. You didn\'t get rich or stop the trade, but you started a global movement for "Open Geology."', th: '🌐 ความวุ่นวาย! ขุนศึกจ้างแฮ็กเกอร์หาบั๊กในโค้ดของคุณ มันกลายเป็นเกมไล่จับ คุณไม่รวยและหยุดการค้าไม่ได้ แต่คุณเริ่มการเคลื่อนไหวระดับโลกสำหรับ "ธรณีวิทยาแบบเปิด"', zh: '🌐 混乱！军阀雇佣黑客寻找代码漏洞。这变成了一场猫鼠游戏。你既没变富也没停止交易，但你开启了一场全球性的"开放地质学"运动。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 45 } }
        ]
    },
    {
        id: 'geo_049',
        text: {
            en: '🌋 The Prediction Dilemma: You find a subtle seismic hum in a tourist-heavy volcanic island. Your intuition says "Blast in 48 hours," but the math says "95% chance it\'s a false alarm." Evacuating ruins the island\'s economy for a decade.',
            th: '🌋 ทางเลือกทำนายภัย: คุณพบแรงสั่นสะเทือนแผ่วเบาใน เกาะภูเขาไฟที่นักท่องเที่ยวหนาแน่น สัญชาตญาณคุณบอกว่า "จะระเบิดใน 48 ชม." แต่คณิตศาสตร์บอกว่า "มีโอกาส 95% ที่จะเตือนหลอก" การอพยพจะทำลายเศรษฐกิจของเกาะไป 10 ปี',
            zh: '🌋 预测困境：你在一个游客众多的火山岛上发现了一种微妙的地震嗡嗡声。你的直觉说是"48小时内喷发"，但数学说是"95%的概率是虚惊一场"。疏散会毁掉该岛十年的经济。'
        },
        options: [
            { id: 'A', text: { en: '🚨 Force Evacuation: "Better safe than sorry. Clear the island. My gut is rarely wrong."', th: '🚨 บังคับอพยพ: "ปลอดภัยไว้ก่อนดีกว่าเสียใจ ล้างเกาะเลย สัญชาตญาณฉันไม่ค่อยพลาด"', zh: '🚨 强制疏散："宁可事前审慎，不可事后后悔。撤空全岛。我的直觉很少出错。"' }, consequence: { en: '🏛️ False Alarm! The volcano doesn\'t blow. The locals HATE you. Schools close, businesses fail. You are known as the "Chicken Little of Geology." 10 years later, the island is still recovering from your panic.', th: '🏛️ เตือนหลอก! ภูเขาไฟไม่ระเบิด คนในพื้นที่เกลียดคุณ โรงเรียนปิด ธุรกิจเจ๊ง คุณถูกขนานนามว่าเป็น "กระต่ายตื่นตูมแห่งธรณีวิทยา" อีก 10 ปีต่อมา เกาะยังคงฟื้นตัวจากอาการตื่นตระหนกของคุณ', zh: '🏛️ 虚惊一场！火山没喷发。当地人恨死你了。学校停课，生意倒闭。你被喻为"地质界的忧天杞人"。10年后，该岛仍在你造成的恐慌中恢复。' }, stats: { competence: 30, ethics: 45, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🤫 Stay Silent: "The math is clear. 95% chance of nothing. I won\'t destroy their lives for a 5% hunch."', th: '🤫 เงียบไว้: "คณิตศาสตร์มันชัดเจน โอกาส 95% ที่จะไม่มีอะไรเกิดขึ้น ฉันจะไม่ทำลายชีวิตพวกเขาเพื่อลางสังหรณ์แค่ 5%"', zh: '🤫 保持沉默："数学很清楚。95%的概率没事。我不会为了5%的直觉毁掉他们的生活。"' }, consequence: { en: '💀 Catastrophe! It blows. 2,000 dead. You are safe but watched it happen on the news. You spend the rest of your life in a haze of guilt and legal trials for negligence. You should have trusted your gut.', th: '💀 หายนะ! มันระเบิด ตาย 2,000 คน คุณปลอดภัยแต่ต้องดูข่าวที่เกิดขึ้น คุณใช้ชีวิตที่เหลือในความรู้สึกผิดและการพิจารณาคดีประมาทเลินเล่อ คุณควรเชื่อสัญชาตญาณตัวเอง', zh: '💀 灾难！它喷发了。2000人死亡。你很安全，但在新闻里目睹了这一切。你的余生都在负罪感和过失审判中度过。你本该相信你的直觉。' }, stats: { competence: 10, ethics: 10, leadership: 10, innovation: 10 } },
            { id: 'C', text: { en: '⚠️ Voluntary Warning: "I issue a \'highly likely\' warning but don\'t force evacuation. Let individuals decide their risk."', th: '⚠️ คำเตือนแบบสมัครใจ: "ฉันออกคำเตือนว่า \'มีโอกาสสูง\' แต่ไม่บังคับอพยพ ให้แต่ละคนตัดสินใจความเสี่ยงเอง"', zh: '⚠️ 自愿警告："我发布\'可能性极高\'的警告但不强制疏散。让个人决定自己的风险。"' }, consequence: { en: '⚖️ The Middle Path. It blows. 200 people who stayed died. 1,800 who listened survived. You saved many, but the lawsuits from the survivors of those who died are endless. You are a polarizing figure.', th: '⚖️ ทางสายกลาง มันระเบิด คนที่อยู่ 200 คนตาย 1,800 คนที่เชื่อรอด คุณช่วยคนได้เยอะ แต่คดีความจากผู้รอดชีวิตของคนที่ตายนั้นไม่จบไม่สิ้น คุณกลายเป็นบุคคลที่มีทั้งคนชอบและเกลียด', zh: '⚖️ 折中方案。它喷发了。留下的200人死亡。听从建议的1800人幸存。你救了很多人，但那些死者的幸存亲属提起的诉讼没完没了。你成了一个极具争议的人物。' }, stats: { competence: 40, ethics: 35, leadership: 35, innovation: 20 } },
            { id: 'D', text: { en: '💡 Rapid Sensor Injection: "I drop 500 cheap probes into the crater now. Get better data in real-time. Refine the prediction within 6 hours."', th: '💡 ปล่อยเซนเซอร์ด่วน: "ฉันหย่อนโพรบราคาถูก 500 อันลงในปล่องตอนนี้ รับข้อมูลแบบเรียลไทม์ที่ดีขึ้น ปรับปรุงการทำนายภายใน 6 ชม."', zh: '💡 快速传感器投放："我现在就往火山口投下500个廉价探测器。获取更好的实时数据。在6小时内精炼预测。"' }, consequence: { en: '🏆 Scientific Savior! The new data shows the math was wrong and your gut was right. The certainty jumps to 99% blast. You force the evacuation with proof. It blows 10 hours later. 0 deaths. Perfect geology.', th: '🏆 ผู้พิทักษ์ทางวิทยาศาสตร์! ข้อมูลใหม่โชว์ว่าคณิตศาสตร์ผิดและสัญชาตญาณคุณถูก ความแน่นอนพุ่งเป็น 99% คุณบังคับอพยพด้วยหลักฐาน มันระเบิดใน 10 ชม. ต่อมา ตาย 0 คน ธรณีวิทยาที่สมบูรณ์แบบ', zh: '🏆 科学救星！新数据显示数学错了，你的直觉是对的。喷发的确定性跃升至99%。你带着证据强制疏散。10小时后喷发了。零死亡。完美的地质工作。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 } }
        ]
    },
    {
        id: 'geo_050',
        text: {
            en: '🌍 The Final Frontier: You have the chance to lead the first "Terraforming" mission to Mars. Your job is to trigger massive volcanic eruptions to create an atmosphere. It will make Mars habitable but destroy all geological records of Mars\' natural history.',
            th: '🌍 พรมแดนสุดท้าย: คุณมีโอกาสนำภารกิจ "Terraforming" ครั้งแรกสู่ดาวอังคาร งานของคุณคือกระตุ้นการระเบิดของภูเขาไฟขนานใหญ่เพื่อสร้างชั้นบรรยากาศ มันจะทำให้ดาวอังคารอยู่อาศัยได้แต่จะทำลายบันทึกทางธรณีวิทยาทั้งหมดของประวัติศาสตร์ธรรมชาติของดาวอังคาร',
            zh: '🌍 最后的疆界：你有机会领导第一次火星"地球化"任务。你的工作是触发大规模火山喷发以创造大气层。这会使火星变得宜居，但会破坏火星自然史的所有地质记录。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Terraform Mars: "Earth is dying. We need a second home. I light the fires of Olympus Mons. History is for the living."', th: '🚀 ปรับสภาพดาวอังคาร: "โลกกำลังจะตาย เราต้องการบ้านหลังที่สอง ฉันจุดจุดไฟที่ Olympus Mons ประวัติศาสตร์มีไว้สำหรับคนที่ยังมีชีวิต"', zh: '🚀 地球化火星："地球正在走向死亡。我们需要第二个家园。我点燃奥林匹斯山的火焰。历史是为活着的人准备的。"' }, consequence: { en: '🌌 The Red God! It works. Mars turns blue over 200 years. You are the father of a new world. Centuries later, billions live there, knowing your name but having no idea what Mars used to be like. A god-like legacy.', th: '🌌 เทพสีแดง! มันได้ผล ดาวอังคารกลายเป็นสีแดงในอีก 200 ปี คุณคือบิดาแห่งโลกใหม่ หลายศตวรรษต่อมา คนเป็นพันล้านอยู่ที่นั่น รู้จักชื่อคุณแต่ไม่รู้เลยว่าดาวอังคารเคยเป็นอย่างไร มรดกดุจเทพเจ้า', zh: '🌌 红色之神！奏效了。火星在200年内变蓝了。你是新世界的父亲。几个世纪后，数十亿人住在那里，知道你的名字，但根本不知道火星过去的样子。神一样的遗产。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 50 } },
            { id: 'B', text: { en: '🔬 Preserve Mars: "No. Mars is a scientific cathedral. We have no right to destroy a planet\'s past for our convenience. We live in domes or not at all."', th: '🔬 อนุรักษ์ดาวอังคาร: "ไม่ ดาวอังคารคือวิหารทางวิทยาศาสตร์ เราไม่มีสิทธิ์ทำลายอดีตของดาวเคราะห์เพื่อความสะดวกของเรา เราจะอยู่ในโดมหรือไม่ก็ไม่ต้องอยู่เลย"', zh: '🔬 保护火星："不。火星是一座科学圣殿。我们没有权利为了自己的方便而破坏一颗星球的过去。我们要么住在圆顶屋里，要么就干脆别去。"' }, consequence: { en: '🏛️ The Great Librarian. Mars remains a pristine red desert. Human growth is limited. In 500 years, scientists have unlocked the secrets of the Universe from Mars\' rocks. You are the saint of scientific ethics.', th: '🏛️ บรรณารักษ์ผู้ยิ่งใหญ่ ดาวอังคารยังคงเป็นทะเลทรายสีแดงที่บริสุทธิ์ การเติบโตของมนุษย์ถูกจำกัด ในอีก 500 ปี นักวิทยาศาสตร์ได้ปลดล็อกความลับของจักรวาลจากหินดาวอังคาร คุณคือเซนต์แห่งจริยธรรมวิทยาศาสตร์', zh: '🏛️ 伟大的管理员。火星依然是原始的红色沙漠。人类的增长受到限制。500年后，科学家从火星的岩石中解开了宇宙的秘密。你是科学伦理的圣徒。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '💡 Hybrid Approach: "We terraform only the Northern Hemisphere. We preserve the Southern as a Global Geological Park. The best of both worlds."', th: '💡 แนวทางแบบผสมผสาน: "เราปรับสภาพแค่ซีกโลกเหนือ เราอนุรักษ์ซีกโลกใต้ไว้เป็นอุทยานธรณีวิทยาระดับโลก สิ่งที่ดีที่สุดจากทั้งสองทาง"', zh: '💡 混合方案："我们只对北半球进行地球化改造。我们将南半球保留为全球地质公园。两全其美。"' }, consequence: { en: '✨ The Balanced World. It\'s hard to manage the weather split, but it works. Mars has oceans AND history. You are hailed as a master of planetary management. A complex, beautiful success.', th: '✨ โลกที่สมดุล เป็นเรื่องยากในการจัดการการแบ่งสภาพอากาศ แต่มันได้ผล ดาวอังคารมีทั้งมหาสมุทรและประวัติศาสตร์ คุณได้รับการยกย่องว่าเป็นปรมาจารย์ด้านการจัดการดาวเคราะห์ ความสำเร็จที่ซับซ้อนและสวยงาม', zh: '✨ 平衡的世界。虽然管理气候分割很困难，但它奏效了。火星既有海洋也有历史。你被誉为行星管理大师。一个复杂而美丽的成功。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 45 } },
            { id: 'D', text: { en: '📉 Pass the Torch: "I coordinate the data and build the tools, but I leave the actual decision to the first generation of Martian-born humans. It\'s their planet."', th: '📉 ส่งต่อคบเพลิง: "ฉันรวบรวมข้อมูลและสร้างเครื่องมือ แต่ฉันทิ้งการตัดสินใจจริงไว้ให้มนุษย์รุ่นแรกที่เกิดบนดาวอังคาร มันคือดาวของพวกเขา"', zh: '📉 传递火炬："我协调数据并构建工具，但我将实际决定权留给火星出生的第一代人类。那是他们的星球。"' }, consequence: { en: '🕊️ The Wisdom of Ages. You stayed neutral. The Martians eventually decide to terraform slowly. You didn\'t get the glory of being the "Father," but you gave a new species their agency. True leadership.', th: '🕊️ ปัญญาแห่งยุคสมัย คุณวางตัวเป็นกลาง ชาวดาวอังคารตัดสินใจปรับสภาพอย่างช้าๆ ในที่สุด คุณไม่ได้เกียรติยศในฐานะ "บิดา" แต่คุณได้มอบอำนาจการตัดสินใจให้เผ่าพันธุ์ใหม่ ความเป็นผู้นำที่แท้จริง', zh: '🕊️ 时代的智慧。你保持中立。火星人最终决定缓慢地进行地球化。你没有获得"父亲"的荣耀，但你给了新物种自主权。真正的领导力。' }, stats: { competence: 40, ethics: 45, leadership: 50, innovation: 30 } }
        ]
    }
];

export default geologistQuestions;




