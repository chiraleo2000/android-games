// Merchant Career Questions
// Comprehensive 80-question set with detailed scenarios
// Career ID Prefix: me_

export const merchantQuestions = [
    {
        id: 'me_001',
        text: {
            en: '🏪 A well-known supplier approaches you with luxury brand products at 70% below market price, claiming they are "overstock liquidation." The deal seems too good to be true, and you notice some packaging inconsistencies.',
            th: '🏪 ซัพพลายเออร์ที่มีชื่อเสียงเข้าหาคุณด้วยสินค้าแบรนด์หรูในราคาต่ำกว่าตลาด 70% โดยอ้างว่าเป็น "การชำระสต็อกสินค้าเกิน" ข้อตกลงดูดีเกินจริง และคุณสังเกตเห็นความไม่สอดคล้องกันของบรรจุภัณฑ์',
            zh: '🏪 一位知名供应商以低于市场价70%的价格向您提供奢侈品牌产品，声称这是"库存清算"。这笔交易看起来好得令人难以置信，您注意到一些包装不一致的地方'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🚫 Immediately refuse the offer and report the supplier to relevant trade authorities and brand protection agencies for investigation',
                    th: '🚫 ปฏิเสธข้อเสนอทันทีและรายงานซัพพลายเออร์ต่อหน่วยงานการค้าที่เกี่ยวข้องและหน่วยงานคุ้มครองแบรนด์เพื่อการสอบสวน',
                    zh: '🚫 立即拒绝报价并向相关贸易机构和品牌保护机构报告供应商进行调查'
                },
                consequence: {
                    en: '✅ Your integrity and reputation protected! Trade associations recognize your ethical standards, and legitimate suppliers prioritize partnering with your business. Your brand becomes known for authenticity.',
                    th: '✅ ความซื่อสัตย์และชื่อเสียงของคุณได้รับการปกป้อง! สมาคมการค้ายอมรับมาตรฐานจริยธรรมของคุณ และซัพพลายเออร์ที่ถูกต้องให้ความสำคัญกับการเป็นพันธมิตรกับธุรกิจของคุณ แบรนด์ของคุณเป็นที่รู้จักในด้านความเป็นของแท้',
                    zh: '✅ 您的诚信和声誉受到保护！行业协会认可您的道德标准，合法供应商优先与您的企业合作。您的品牌以真实性而闻名'
                },
                stats: {
                    competence: 25,
                    ethics: 45,
                    leadership: 30,
                    innovation: 10
                }
            },
            {
                id: 'B',
                text: {
                    en: '💰 Accept the deal without questions to maximize profit margins, calculating that the high discount will significantly boost your bottom line',
                    th: '💰 ยอมรับข้อตกลงโดยไม่มีคำถามเพื่อเพิ่มอัตรากำไรสูงสุด คำนวณว่าส่วนลดสูงจะเพิ่มผลกำไรสุทธิของคุณอย่างมาก',
                    zh: '💰 毫无疑问地接受交易以最大化利润率，计算高折扣将显著提高您的盈利'
                },
                consequence: {
                    en: '😱 Disaster! Law enforcement raids your business for selling counterfeit luxury goods. You face criminal charges, massive fines, lawsuits from brands, and your merchant license is permanently revoked!',
                    th: '😱 หายนะ! เจ้าหน้าที่บังคับใช้กฎหมายบุกธุรกิจของคุณสำหรับการขายสินค้าหรูปลอม คุณเผชิญกับข้อกล่าวหาทางอาญา ค่าปรับจำนวนมหาศาล คดีฟ้องร้องจากแบรนด์ และใบอนุญาตผู้ประกอบการของคุณถูกเพิกถอนอย่างถาวร!',
                    zh: '😱 灾难！执法部门突袭您的企业，因为销售假冒奢侈品。您面临刑事指控、巨额罚款、品牌诉讼，您的商户执照被永久吊销！'
                },
                stats: {
                    competence: -25,
                    ethics: -50,
                    leadership: -35,
                    innovation: -20
                }
            },
            {
                id: 'C',
                text: {
                    en: '🔍 Conduct thorough due diligence: request authentication certificates, verify supplier credentials, contact brand representatives, and examine product documentation before making any decision',
                    th: '🔍 ดำเนินการตรวจสอบอย่างละเอียดถี่ถ้วน: ขอใบรับรองความถูกต้อง ตรวจสอบข้อมูลรับรองของซัพพลายเออร์ ติดต่อตัวแทนแบรนด์ และตรวจสอบเอกสารผลิตภัณฑ์ก่อนตัดสินใจใดๆ',
                    zh: '🔍 进行彻底的尽职调查：要求认证证书、验证供应商资质、联系品牌代表，并在做出任何决定之前检查产品文件'
                },
                consequence: {
                    en: '📊 Smart business practice! Your investigation reveals the products are indeed counterfeit. You avoided a legal catastrophe and gained valuable experience in supplier vetting. Other merchants seek your expertise.',
                    th: '📊 การปฏิบัติทางธุรกิจที่ชาญฉลาด! การสอบสวนของคุณเปิดเผยว่าผลิตภัณฑ์เป็นของปลอมจริงๆ คุณหลีกเลี่ยงหายนะทางกฎหมายและได้รับประสบการณ์อันมีค่าในการตรวจสอบซัพพลายเออร์ ผู้ค้ารายอื่นแสวงหาความเชี่ยวชาญของคุณ',
                    zh: '📊 明智的商业实践！您的调查显示产品确实是假冒的。您避免了法律灾难，并在供应商审查方面获得了宝贵经验。其他商家寻求您的专业知识'
                },
                stats: {
                    competence: 35,
                    ethics: 35,
                    leadership: 25,
                    innovation: 20
                }
            },
            {
                id: 'D',
                text: {
                    en: '🤝 Decline this offer professionally and instead invest time in building relationships with verified, certified authorized distributors who can provide legitimate products with proper documentation',
                    th: '🤝 ปฏิเสธข้อเสนอนี้อย่างมืออาชีพและลงทุนเวลาในการสร้างความสัมพันธ์กับผู้จัดจำหน่ายที่ได้รับอนุญาตที่ผ่านการรับรองและตรวจสอบแล้วซึ่งสามารถจัดหาผลิตภัณฑ์ที่ถูกต้องพร้อมเอกสารที่เหมาะสม',
                    zh: '🤝 专业地拒绝此报价，转而投入时间与经过验证和认证的授权分销商建立关系，他们可以提供带有适当文件的合法产品'
                },
                consequence: {
                    en: '🎯 Excellent long-term strategy! You establish partnerships with premium authorized distributors. Your inventory consists of guaranteed authentic products, commanding customer trust and premium prices. Sustainable growth achieved!',
                    th: '🎯 กลยุทธ์ระยะยาวที่ยอดเยี่ยม! คุณสร้างความเป็นหุ้นส่วนกับผู้จัดจำหน่ายที่ได้รับอนุญาตระดับพรีเมียม สินค้าคงคลังของคุณประกอบด้วยผลิตภัณฑ์ของแท้ที่รับประกัน สร้างความไว้วางใจของลูกค้าและราคาพรีเมียม บรรลุการเติบโตอย่างยั่งยืน!',
                    zh: '🎯 出色的长期策略！您与优质授权分销商建立合作关系。您的库存包括保证真实的产品，赢得客户信任和优质价格。实现可持续增长！'
                },
                stats: {
                    competence: 30,
                    ethics: 40,
                    leadership: 30,
                    innovation: 30
                }
            }
        ]
    },
    {
        id: 'me_002',
        text: {
            en: '📦 Your main logistics provider just informed you that a critical shipment containing $50,000 worth of products ordered by 200 customers for a major holiday season is delayed by 3 weeks due to port congestion and customs issues.',
            th: '📦 ผู้ให้บริการโลจิสติกส์หลักของคุณเพิ่งแจ้งว่าการจัดส่งที่สำคัญซึ่งมีผลิตภัณฑ์มูลค่า $50,000 ที่สั่งโดยลูกค้า 200 รายสำหรับฤดูกาลวันหยุดสำคัญล่าช้า 3 สัปดาห์เนื่องจากความแออัดที่ท่าเรือและปัญหาศุลกากร',
            zh: '📦 您的主要物流供应商刚刚通知您，由于港口拥堵和海关问题，包含价值50,000美元产品的关键货物延迟了3周，这批货物是200位客户为重要节日季节订购的'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '📞 Immediately launch proactive communication campaign: personally email and call all affected customers, explain the situation transparently with regular updates, offer sincere apologies and 15% discount on future purchases',
                    th: '📞 เริ่มแคมเปญการสื่อสารเชิงรุกทันที: ส่งอีเมลและโทรหาลูกค้าที่ได้รับผลกระทบทั้งหมดด้วยตนเอง อธิบายสถานการณ์อย่างโปร่งใสพร้อมการอัปเดตเป็นประจำ ขอโทษอย่างจริงใจและเสนอส่วนลด 15% สำหรับการซื้อในอนาคต',
                    zh: '📞 立即启动主动沟通活动：亲自给所有受影响的客户发送电子邮件和打电话，透明地解释情况并定期更新，真诚道歉并提供未来购买15%的折扣'
                },
                consequence: {
                    en: '✅ Crisis managed excellently! While customers are disappointed, 85% appreciate your transparency and proactive communication. Your honest approach strengthens customer loyalty, and many leave positive reviews praising your integrity during difficulties.',
                    th: '✅ จัดการวิกฤติได้อย่างยอดเยี่ยม! แม้ว่าลูกค้าจะผิดหวัง แต่ 85% ชื่นชมความโปร่งใสและการสื่อสารเชิงรุกของคุณ แนวทางที่ซื่อสัตย์ของคุณเสริมสร้างความภักดีของลูกค้า และหลายคนทิ้งรีวิวเชิงบวกสรรเสริญความซื่อสัตย์ของคุณในช่วงที่ยากลำบาก',
                    zh: '✅ 危机处理得非常出色！虽然客户感到失望，但85%的人欣赏您的透明度和主动沟通。您诚实的方法增强了客户忠诚度，许多人留下积极评论，赞扬您在困难时期的诚信'
                },
                stats: {
                    competence: 30,
                    ethics: 40,
                    leadership: 40,
                    innovation: 15
                }
            },
            {
                id: 'B',
                text: {
                    en: '🤐 Stay silent and hope the shipment arrives soon, avoiding the difficult conversations and hoping customers won\'t complain too much or cancel orders',
                    th: '🤐 เงียบและหวังว่าการจัดส่งจะมาถึงเร็วๆ นี้ หลีกเลี่ยงการสนทนาที่ยากลำบากและหวังว่าลูกค้าจะไม่บ่นมากเกินไปหรือยกเลิกคำสั่งซื้อ',
                    zh: '🤐 保持沉默，希望货物很快到达，避免困难的对话，希望客户不会抱怨太多或取消订单'
                },
                consequence: {
                    en: '😱 Catastrophic failure! Customers bombard you with angry messages, 60% cancel orders and demand refunds, negative reviews flood your online store dropping your rating from 4.5 to 2.1 stars. You lose $30,000 in revenue and reputation damage takes months to repair!',
                    th: '😱 ความล้มเหลวอย่างหายนะ! ลูกค้าโจมตีคุณด้วยข้อความโกรธ 60% ยกเลิกคำสั่งซื้อและเรียกร้องเงินคืน รีวิวเชิงลบท่วมท้นร้านค้าออนไลน์ของคุณทำให้คะแนนของคุณลดลงจาก 4.5 เป็น 2.1 ดาว คุณสูญเสียรายได้ $30,000 และความเสียหายต่อชื่อเสียงใช้เวลาหลายเดือนในการซ่อมแซม!',
                    zh: '😱 灾难性失败！客户用愤怒的消息轰炸您，60%取消订单并要求退款，负面评论淹没您的在线商店，使您的评分从4.5星降至2.1星。您损失了30,000美元的收入，声誉损害需要数月才能修复！'
                },
                stats: {
                    competence: -20,
                    ethics: -35,
                    leadership: -40,
                    innovation: -15
                }
            },
            {
                id: 'C',
                text: {
                    en: '🎁 Inform customers promptly and offer comprehensive compensation package: full refunds with no questions asked, or wait with 25% discount plus free expedited shipping on current order, and $20 store credit for inconvenience',
                    th: '🎁 แจ้งลูกค้าทันทีและเสนอแพ็คเกจการชดเชยที่ครอบคลุม: คืนเงินเต็มจำนวนโดยไม่มีคำถาม หรือรอด้วยส่วนลด 25% บวกการจัดส่งด่วนฟรีสำหรับคำสั่งซื้อปัจจุบัน และเครดิตร้านค้า $20 สำหรับความไม่สะดวก',
                    zh: '🎁 及时通知客户并提供全面的补偿方案：无条件全额退款，或等待享受25%折扣加免费加急配送，以及20美元商店积分作为不便补偿'
                },
                consequence: {
                    en: '🎯 Outstanding customer service! 70% of customers choose to wait with compensation, appreciating your generous response. Customer satisfaction maintained at high levels, and your willingness to absorb costs builds tremendous goodwill and word-of-mouth marketing.',
                    th: '🎯 บริการลูกค้าที่โดดเด่น! 70% ของลูกค้าเลือกที่จะรอด้วยการชดเชย ชื่นชมการตอบสนองที่เอื้อเฟื้อของคุณ รักษาความพึงพอใจของลูกค้าในระดับสูง และความเต็มใจของคุณที่จะรับต้นทุนสร้างความปรารถนาดีและการตลาดแบบปากต่อปากอย่างมหาศาล',
                    zh: '🎯 出色的客户服务！70%的客户选择等待并获得补偿，欣赏您慷慨的回应。客户满意度保持高水平，您愿意承担成本建立了巨大的商誉和口碑营销'
                },
                stats: {
                    competence: 30,
                    ethics: 35,
                    leadership: 35,
                    innovation: 25
                }
            },
            {
                id: 'D',
                text: {
                    en: '🚚 Take aggressive action: arrange emergency air freight for most critical orders (high-value and VIP customers), negotiate with alternative suppliers for similar products to fulfill some orders, and implement multi-tier communication and resolution strategy',
                    th: '🚚 ดำเนินการอย่างจริงจัง: จัดการขนส่งทางอากาศฉุกเฉินสำหรับคำสั่งซื้อที่สำคัญที่สุด (มูลค่าสูงและลูกค้า VIP) เจรจากับซัพพลายเออร์ทางเลือกสำหรับผลิตภัณฑ์ที่คล้ายกันเพื่อดำเนินการตามคำสั่งซื้อบางส่วน และดำเนินการกลยุทธ์การสื่อสารและการแก้ไขหลายระดับ',
                    zh: '🚚 采取积极行动：为最关键的订单（高价值和VIP客户）安排紧急空运，与替代供应商协商类似产品以履行部分订单，并实施多层沟通和解决策略'
                },
                consequence: {
                    en: '📈 Problem-solving excellence! Emergency shipping costs $8,000 but you fulfill 40% of orders on time for VIP customers. Combined with transparent communication for remaining customers, you minimize cancellations to 15%. Your decisive action impresses customers and suppliers alike!',
                    th: '📈 ความเป็นเลิศในการแก้ปัญหา! ค่าใช้จ่ายในการจัดส่งฉุกเฉิน $8,000 แต่คุณดำเนินการตาม 40% ของคำสั่งซื้อตรงเวลาสำหรับลูกค้า VIP รวมกับการสื่อสารที่โปร่งใสสำหรับลูกค้าที่เหลือ คุณลดการยกเลิกลงเหลือ 15% การดำเนินการอย่างเด็ดขาดของคุณสร้างความประทับใจให้กับลูกค้าและซัพพลายเออร์เหมือนกัน!',
                    zh: '📈 解决问题的卓越能力！紧急运输成本为8,000美元，但您为VIP客户准时完成了40%的订单。结合对其余客户的透明沟通，您将取消率降至15%。您果断的行动给客户和供应商都留下了深刻印象！'
                },
                stats: {
                    competence: 40,
                    ethics: 25,
                    leadership: 30,
                    innovation: 35
                }
            }
        ]
    },
    {
        id: 'me_003',
        text: {
            en: '💻 Your e-commerce platform is generating 4X more revenue than your physical retail store, but the brick-and-mortar location has been in your family for 30 years and employs 8 loyal staff members. Rent is increasing 40% next year.',
            th: '💻 แพลตฟอร์มอีคอมเมิร์ซของคุณสร้างรายได้มากกว่าร้านค้าปลีกจริง 4 เท่า แต่สถานที่ตั้งร้านค้าจริงอยู่ในครอบครัวของคุณมา 30 ปีและจ้างพนักงานที่ภักดี 8 คน ค่าเช่าเพิ่มขึ้น 40% ในปีหน้า',
            zh: '💻 您的电商平台产生的收入是实体零售店的4倍，但这个实体店已经在您家族经营了30年，雇用了8名忠诚的员工。明年租金将增加40%'
        },
        options: [
            {
                id: 'A',
                text: {
                    en: '🏪 Close the physical store completely, transition all staff to remote customer service and warehouse roles for online operations, focus entirely on e-commerce growth and digital marketing',
                    th: '🏪 ปิดร้านค้าจริงโดยสมบูรณ์ เปลี่ยนพนักงานทั้งหมดไปทำงานบริการลูกค้าระยะไกลและบทบาทคลังสินค้าสำหรับการดำเนินงานออนไลน์ มุ่งเน้นการเติบโตของอีคอมเมิร์ซและการตลาดดิจิทัลทั้งหมด',
                    zh: '🏪 完全关闭实体店，将所有员工转到在线运营的远程客户服务和仓库角色，完全专注于电商增长和数字营销'
                },
                consequence: {
                    en: '⚠️ Cost efficiency gained but at a price. You save $60,000 annually in rent, but lose local community presence and 3 older staff members who can\'t adapt to remote work resign. Some longtime local customers feel abandoned. Mixed business outcome.',
                    th: '⚠️ ได้ประสิทธิภาพต้นทุนแต่ต้องจ่ายราคา คุณประหยัดค่าเช่า $60,000 ต่อปี แต่สูญเสียการแสดงตนในชุมชนท้องถิ่นและพนักงานที่มีอายุมากกว่า 3 คนที่ไม่สามารถปรับตัวเข้ากับการทำงานระยะไกลลาออก ลูกค้าท้องถิ่นที่อยู่มานานรู้สึกถูกละทิ้ง ผลลัพธ์ทางธุรกิจแบบผสม',
                    zh: '⚠️ 获得了成本效益但付出了代价。您每年节省60,000美元租金，但失去了当地社区存在，3名无法适应远程工作的年长员工辞职。一些长期本地客户感到被抛弃。混合的业务结果'
                },
                stats: {
                    competence: 20,
                    ethics: 10,
                    leadership: 10,
                    innovation: 25
                }
            },
            {
                id: 'B',
                text: {
                    en: '🔄 Create innovative omnichannel experience: redesign store as "showroom & experience center" with product displays, host community events and workshops, offer "order online, pick up in store" with exclusive in-store member perks, integrate both channels seamlessly',
                    th: '🔄 สร้างประสบการณ์หลายช่องทางที่นวัตกรรม: ออกแบบร้านค้าใหม่เป็น "โชว์รูมและศูนย์ประสบการณ์" พร้อมการแสดงผลิตภัณฑ์ จัดงานชุมชนและเวิร์คช็อป เสนอ "สั่งออนไลน์ รับที่ร้าน" พร้อมสิทธิพิเศษสำหรับสมาชิกในร้านพิเศษ รวมทั้งสองช่องทางอย่างไร้รอยต่อ',
                    zh: '🔄 创建创新的全渠道体验：将商店重新设计为"展厅和体验中心"，展示产品，举办社区活动和研讨会，提供"在线订购，店内取货"服务，并提供专属店内会员特权，无缝整合两个渠道'
                },
                consequence: {
                    en: '🏆 Brilliant strategy! Store becomes community hub attracting 200+ weekly visitors. Online customers visit store to see products before buying. Staff thrive in new roles as brand ambassadors and product experts. Revenue increases 25% combining both channels, and you achieve best of both worlds!',
                    th: '🏆 กลยุทธ์ที่ยอดเยี่ยม! ร้านค้ากลายเป็นศูนย์กลางชุมชนดึงดูดผู้เยี่ยมชม 200+ รายต่อสัปดาห์ ลูกค้าออนไลน์เยี่ยมชมร้านค้าเพื่อดูผลิตภัณฑ์ก่อนซื้อ พนักงานเจริญเติบโตในบทบาทใหม่ในฐานะทูตแบรนด์และผู้เชี่ยวชาญด้านผลิตภัณฑ์ รายได้เพิ่มขึ้น 25% โดยรวมทั้งสองช่องทาง และคุณบรรลุที่ดีที่สุดของทั้งสองโลก!',
                    zh: '🏆 卓越的策略！商店成为社区中心，每周吸引200多名访客。在线客户在购买前访问商店查看产品。员工在品牌大使和产品专家的新角色中蓬勃发展。结合两个渠道，收入增加25%，您实现了两全其美！'
                },
                stats: {
                    competence: 40,
                    ethics: 30,
                    leadership: 35,
                    innovation: 45
                }
            },
            {
                id: 'C',
                text: {
                    en: '📊 Focus resources exclusively on rapidly scaling the online business: invest heavily in digital infrastructure, hire specialized e-commerce staff, expand product lines, and pursue aggressive online market expansion',
                    th: '📊 มุ่งเน้นทรัพยากรเฉพาะในการขยายธุรกิจออนไลน์อย่างรวดเร็ว: ลงทุนอย่างหนักในโครงสร้างพื้นฐานดิจิทัล จ้างพนักงานอีคอมเมิร์ซเฉพาะทาง ขยายสายผลิตภัณฑ์ และติดตามการขยายตลาดออนไลน์อย่างก้าวร้าว',
                    zh: '📊 将资源专门集中在快速扩展在线业务：大力投资数字基础设施，雇用专业的电商员工，扩展产品线，并追求激进的在线市场扩张'
                },
                consequence: {
                    en: '📈 Rapid digital growth achieved! Online revenue doubles within 18 months. However, you close the physical store, severing 30-year community ties. 5 loyal employees struggle with transition. You gain market share but lose emotional connection and local brand heritage.',
                    th: '📈 บรรลุการเติบโตดิจิทัลอย่างรวดเร็ว! รายได้ออนไลน์เพิ่มขึ้นเป็นสองเท่าภายใน 18 เดือน อย่างไรก็ตาม คุณปิดร้านค้าจริง ตัดความสัมพันธ์กับชุมชนที่มีมา 30 ปี พนักงานที่ภักดี 5 คนต่อสู้กับการเปลี่ยนแปลง คุณได้ส่วนแบ่งตลาดแต่สูญเสียความเชื่อมโยงทางอารมณ์และมรดกแบรนด์ท้องถิ่น',
                    zh: '📈 实现快速数字增长！在线收入在18个月内翻倍。然而，您关闭了实体店，切断了30年的社区联系。5名忠诚员工在过渡中挣扎。您获得了市场份额，但失去了情感联系和本地品牌遗产'
                },
                stats: {
                    competence: 30,
                    ethics: 15,
                    leadership: 20,
                    innovation: 35
                }
            },
            {
                id: 'D',
                text: {
                    en: '🎪 Transform physical store into unique "experiential retail destination": create Instagram-worthy spaces, offer exclusive limited-edition products only available in-store, host influencer events, maker workshops, and product launch parties that drive online traffic',
                    th: '🎪 เปลี่ยนร้านค้าจริงเป็น "จุดหมายปลายทางการค้าปลีกเชิงประสบการณ์" ที่ไม่เหมือนใคร: สร้างพื้นที่ที่คุ้มค่าแก่การถ่ายรูป Instagram เสนอผลิตภัณฑ์รุ่นจำกัดพิเศษที่มีเฉพาะในร้านเท่านั้น จัดงานผู้มีอิทธิพล เวิร์คช็อปผู้ผลิต และปาร์ตี้เปิดตัวผลิตภัณฑ์ที่ขับเคลื่อนการเข้าชมออนไลน์',
                    zh: '🎪 将实体店改造成独特的"体验式零售目的地"：创建值得在Instagram上发布的空间，提供仅在店内销售的独家限量版产品，举办网红活动、制造商研讨会和产品发布会，推动在线流量'
                },
                consequence: {
                    en: '✨ Creative innovation triumphs! Store becomes local landmark and social media sensation, generating 50,000+ online impressions monthly. In-store events attract 500+ attendees, with 40% converting to online customers. Physical store now drives online sales creating powerful synergy!',
                    th: '✨ นวัตกรรมสร้างสรรค์ชนะ! ร้านค้ากลายเป็นสถานที่สำคัญในท้องถิ่นและความรู้สึกโซเชียลมีเดีย สร้างการแสดงผลออนไลน์ 50,000+ รายต่อเดือน งานในร้านค้าดึงดูดผู้เข้าร่วม 500+ ราย โดย 40% เปลี่ยนเป็นลูกค้าออนไลน์ ร้านค้าจริงตอนนี้ขับเคลื่อนการขายออนไลน์สร้างการทำงานร่วมกันที่ทรงพลัง!',
                    zh: '✨ 创意创新胜利！商店成为当地地标和社交媒体热点，每月产生50,000多次在线曝光。店内活动吸引500多名参与者，其中40%转化为在线客户。实体店现在推动在线销售，创造强大的协同效应！'
                },
                stats: {
                    competence: 35,
                    ethics: 25,
                    leadership: 30,
                    innovation: 50
                }
            }
        ]
    },
    {
        id: 'me_004',
        text: {
            en: '🚨 You catch a regular, elderly customer shoplifting a small item. They claim they forgot to pay and seem genuinely distressed. This is their third "forgetful" moment this month.',
            th: '🚨 คุณจับลูกค้าประจำที่เป็นผู้สูงอายุขโมยของชิ้นเล็กๆ ได้ เขาอ้างว่าลืมจ่ายเงินและดูวิตกกังวลจริงๆ นี่เป็นครั้งที่สามในเดือนนี้ที่เขา "ลืม"',
            zh: '🚨 你抓到一名常客老人偷窃一件小商品。他们声称忘了付钱，看起来真的很苦恼。这是他们本月第三次“健忘”时刻。'
        },
        options: [
            { id: 'A', text: { en: '👮 Call the police and press charges to maintain a zero-tolerance policy', th: '👮 เรียกตำรวจและดำเนินคดีเพื่อรักษานโยบายการไม่ยอมรับความผิดโดยเด็ดขาด', zh: '👮 报警并提出指控，以维持零容忍政策' }, consequence: { en: '📉 Local backlash. The community views you as heartless towards the elderly. You lose local goodwill, though theft decreases slightly.', th: '📉 ผลตอบรับเชิงลบจากคนในพื้นที่ ชุมชนมองว่าคุณใจดำกับผู้สูงอายุ คุณเสียความเชื่อมั่นจากคนในพื้นที่ แม้ว่าการขโมยจะลดลงเล็กน้อย', zh: '📉 当地抵制。社区认为你对老人无情。虽然失窃率略有下降，但你失去了当地的声誉。' }, stats: { competence: 20, ethics: 10, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🤐 Ban the customer quietly from the store without involving authorities', th: '🤐 สั่งห้ามลูกค้าเข้าช่วยอย่างเงียบๆ โดยไม่แจ้งเจ้าหน้าที่', zh: '🤐 悄悄禁止该顾客进店，不涉及当局' }, consequence: { en: '😐 Problem shifted. They stop stealing from you, but your regular customers wonder why the friendly elder is gone.', th: '😐 ปัญหาถูกย้ายที่ เขาเลิกขโมยของจากคุณ แต่ลูกค้าประจำคนอื่นๆ สงสัยว่าทำไมผู้สูงอายุที่แสนเป็นมิตรคนนั้นถึงหายไป', zh: '😐 问题转移。他们不再偷你的东西，但你的常客们想知道为什么那位友好的老人不见了。' }, stats: { competence: 30, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Contact their family privately to discuss the behavior and suggest medical attention', th: '🤝 ติดต่อครอบครัวของเขาเป็นการส่วนตัวเพื่อพูดคุยเกี่ยวกับพฤติกรรมนี้และแนะนำให้ไปพบแพทย์', zh: '🤝 私下联系他们的家人讨论该行为并建议就医' }, consequence: { en: '✅ Compassionate resolution! The family is grateful, discovers an early cognitive issue, and you gain a life-long loyal family of customers. Your reputation for empathy grows.', th: '✅ การแก้ปัญหาด้วยความเห็นอกเห็นใจ! ครอบครัวเขารู้สึกขอบคุณ และพบปัญหาด้านความจำในระยะเริ่มต้น คุณได้ครอบครัวลูกค้าที่ภักดีตลอดไป ชื่อเสียงด้านความเมตตาของคุณเพิ่มขึ้น', zh: '✅ 富有同情心的解决方案！家人非常感激，发现了早期的认知问题，你也赢得了一个终身忠诚的客户家庭。你的同理心名声大振。' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '🏷️ Add the stolen items to their "tab" and bill them or their family at the end of the month', th: '🏷️ เพิ่มรายการที่ขโมยไปใน "บัญชีค้างจ่าย" และเรียกเก็บเงินจากเขาหรือครอบครัวในตอนสิ้นเดือน', zh: '🏷️ 将被盗物品添加到他们的“账单”中，并在月底向他们或他们的家人收费' }, consequence: { en: '⚠️ Financial recovery but morally grey. You cover your losses, but you are enabling a behavior that might lead to trouble elsewhere.', th: '⚠️ ได้เงินคืนแต่มีประเด็นเรื่องศีลธรรม คุณชดเชยการสูญเสียได้ แต่คุณกำลังปล่อยให้พฤติกรรมนี้ดำเนินต่อไปซึ่งอาจเกิดปัญหาที่อื่น', zh: '⚠️ 财务收回但道德模糊。你弥补了损失，但你正在纵容一种可能在其他地方导致麻烦的行为。' }, stats: { competence: 40, ethics: 20, leadership: 20, innovation: 30 } }
        ]
    },
    {
        id: 'me_005',
        text: {
            en: '🤝 A major supplier offers you a "rebate" (cash kickback) for choosing their slightly overpriced products over a cheaper, higher-quality competitor.',
            th: '🤝 ซัพพลายเออร์รายใหญ่เสนอ "ส่วนลดเงินคืน" (เงินใต้โต๊ะ) ให้คุณ หากคุณเลือกใช้ผลิตภัณฑ์ของเขาที่มีราคาสูงกว่าคู่แข่งที่ราคาถูกกว่าและคุณภาพดีกว่า',
            zh: '🤝 一家主要供应商向你提供“回扣”（现金返现），让你选择他们价格略高、质量较低的产品，而不是价格更低、质量更高的竞争对手。'
        },
        options: [
            { id: 'A', text: { en: '💰 Take the kickback: "Business is expensive, I need every cent."', th: '💰 รับเงินใต้โต๊ะ: "การทำธุรกิจมีค่าใช้จ่ายสูง ฉันต้องเก็บทุกบาททุกสตางค์"', zh: '💰 接受回扣：“做生意很贵，我需要每一分钱。”' }, consequence: { en: '😱 Trap! An internal audit uncovers the undocumented payments. You lose your reputation, face tax fraud charges, and the supplier blackmails you later.', th: '😱 กับดัก! การตรวจสอบภายในพบการจ่ายเงินที่ไม่มีเอกสารอ้างอิง คุณเสียชื่อเสียง ถูกตั้งข้อหาโกงภาษี และซัพพลายเออร์จะแบล็คเมล์คุณในภายหลัง', zh: '😱 陷阱！内部审计发现了未经记录的付款。你失去了名声，面临税务欺诈指控，供应商随后会勒索你。' }, stats: { competence: 10, ethics: -60, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '💪 Refuse and switch to the high-quality competitor', th: '💪 ปฏิเสธและเปลี่ยนไปใช้คู่แข่งที่เน้นคุณภาพสูงแทน', zh: '💪 拒绝并转向高质量的竞争对手' }, consequence: { en: '✅ Long-term win! Your customers notice the better quality. Sales increase, and you sleep better knowing your hands are clean.', th: '✅ ชนะในระยะยาว! ลูกค้าของคุณสังเกตเห็นคุณภาพที่ดีขึ้น ยอดขายเพิ่มขึ้น และคุณนอนหลับได้สนิทขึ้นเพราะรู้ว่าตัวเองบริสุทธิ์', zh: '✅ 长期获胜！你的客户注意到了更好的质量。销售额增加了，你因为知道自己清白而睡得更香。' }, stats: { competence: 40, ethics: 60, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🗣️ Renegotiate: "Match the competitor\'s price and quality, and we can talk about a legitimate volume discount."', th: '🗣️ เจรจาใหม่: "ลดราคาและเพิ่มคุณภาพให้เท่ากับคู่แข่ง แล้วเราจะคุยกันเรื่องส่วนลดตามปริมาณที่ถูกต้องตามกฎหมาย"', zh: '🗣️ 重新谈判：“达到竞争对手的价格和质量，我们可以讨论合法的批量折扣。”' }, consequence: { en: '📊 Masterful negotiation. You get a better deal without the ethical baggage. The supplier respects you as a tough but fair merchant.', th: '📊 การเจรจาที่ยอดเยี่ยม คุณได้ข้อเสนอที่ดีขึ้นโดยไม่มีปัญหาเรื่องจริยธรรม ซัพพลายเออร์เคารพคุณในฐานะพ่อค้าที่เข้มแข็งแต่ยุติธรรม', zh: '📊 高超的谈判。你得到了更好的待遇，没有道德负担。供应商尊重你是一个强硬但公平的商人。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 20 } },
            { id: 'D', text: { en: '📢 Report the supplier to the trade association', th: '📢 รายงานซัพพลายเออร์ต่อสมาคมการค้า', zh: '📢 向贸易协会举报供应商' }, consequence: { en: '🛡️ Industry Integrity. You become a leader in ethical trade, though you may find it harder to get deep discounts from some "old school" suppliers.', th: '🛡️ จริยธรรมในอุตสาหกรรม คุณกลายเป็นผู้นำด้านการค้าที่มีจริยธรรม แม้ว่าคุณอาจจะได้รับส่วนลดก้อนใหญ่จากซัพพลายเออร์รุ่นเก่ายากขึ้น', zh: '🛡️ 行业诚信。你成为道德贸易的领导者，尽管你可能会发现更难从一些“老派”供应商那里获得深度折扣。' }, stats: { competence: 30, ethics: 70, leadership: 60, innovation: 10 } }
        ]
    },
    {
        id: 'me_006',
        text: {
            en: '📦 A batch of your premium electronics turns out to be counterfeit after you sold 50 units. You didn\'t know at the time, but the fake parts are a fire risk.',
            th: '📦 สินค้าอิเล็กทรอนิกส์ระดับพรีเมียมของคุณล็อตหนึ่งกลายเป็นของปลอมหลังจากที่คุณขายไปแล้ว 50 ชิ้น คุณไม่รู้เลยในตอนนั้น แต่ชิ้นส่วนปลอมเสี่ยงต่อการเกิดไฟไหม้',
            zh: '📦 你在中售出的50件高端电子产品后来发现是假货。你当时并不知情，但假冒零件有火灾风险。'
        },
        options: [
            { id: 'A', text: { en: '🤫 Only refund the ones that complain', th: '🤫 คืนเงินเฉพาะคนที่มาร้องเรียนเท่านั้น', zh: '🤫 只退款给投诉的人' }, consequence: { en: '💀 Lawsuit! One customer\'s house catches fire. You are sued for millions and face criminal negligence charges because you knew there was a risk.', th: '💀 ถูกฟ้อง! บ้านของลูกค้าคนหนึ่งเกิดไฟไหม้ คุณถูกฟ้องเรียกค่าเสียหายหลายล้านและเผชิญกับข้อหาประมาทเลินเล่อทางอาญาเพราะคุณรู้ว่ามีความเสี่ยง', zh: '💀 诉讼！一位客户的房子着火了。你被起诉索赔数百万美元，并面临刑事疏忽指控，因为你明知有风险。' }, stats: { competence: 10, ethics: -80, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: '📢 Issue an immediate recall and full refund for all 50 units', th: '📢 ออกประกาศเรียกคืนทันทีและคืนเงินเต็มจำนวนสำหรับทั้ง 50 ชิ้น', zh: '📢 立即发布召回通知并为所有50件商品提供全额退款' }, consequence: { en: '🛡️ Brand Integrity. It costs you a lot upfront, but you save lives and build massive long-term trust with your customers.', th: '🛡️ ศักดิ์ศรีของแบรนด์ แม้จะเสียเงินก้อนใหญ่ในตอนแรก แต่คุณได้ช่วยชีวิตคนและสร้างความไว้วางใจในระยะยาวให้กับลูกค้าอย่างมหาศาล', zh: '🛡️ 品牌诚信。虽然前期成本很高，但你挽救了生命，并赢得了客户长期的巨大信任。' }, stats: { competence: 40, ethics: 80, leadership: 50, innovation: 10 } },
            { id: 'C', text: { en: '🔄 Offer free replacement with authentic units at a loss', th: '🔄 เสนอการเปลี่ยนเป็นของแท้ให้ฟรีโดยยอมขาดทุน', zh: '🔄 亏本提供正品免费更换' }, consequence: { en: '✅ Customer Loyalty. Customers are impressed by your proactive honesty. Most don\'t even ask for a refund, just the swap.', th: '✅ ความภักดีของลูกค้า ลูกค้าประทับใจในความซื่อสัตย์เชิงรุกของคุณ ส่วนใหญ่ไม่ขอคืนเงินด้วยซ้ำ แค่อยากเปลี่ยนของ', zh: '✅ 客户忠诚度。客户对你主动的诚实印象深刻。大多数人甚至不要求退款，只是要求更换。' }, stats: { competence: 50, ethics: 70, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '⚖️ Blame the supplier and tell customers to contact them', th: '⚖️ โทษซัพพลายเออร์และบอกให้ลูกค้าไปติดต่อเขาเอง', zh: '⚖️ 指责供应商并告诉客户联系他们' }, consequence: { en: '📉 Reputation Tank. Customers bought from YOU, not the supplier. You look irresponsible and weak.', th: '📉 ชื่อเสียงดิ่งเหว ลูกค้าซื้อจาก "คุณ" ไม่ใช่ซัพพลายเออร์ คุณดูเป็นคนไม่รับผิดชอบและอ่อนแอ', zh: '📉 声誉受损。客户是从“你”这里买的东西，而不是供应商。你看起来不负责任且软弱。' }, stats: { competence: 10, ethics: -20, leadership: -50, innovation: 0 } }
        ]
    },
    {
        id: 'me_007',
        text: {
            en: '🔍 You discover your manager has been stealing small amounts from the register over the last year. They are otherwise an incredible employee who helped you grow.',
            th: '🔍 คุณพบว่าผู้จัดการของคุณแอบขโมยเงินจำนวนเล็กน้อยจากเครื่องคิดเงินตลอดปีที่ผ่านมา นอกเหนือจากเรื่องนี้เขาเป็นพนักงานที่ยอดเยี่ยมที่ช่วยคุณขยายธุรกิจ',
            zh: '🔍 你发现你的经理在过去一年里一直在从收银机里偷小钱。除去这一点，他们是一个帮助你成长的出色员工。'
        },
        options: [
            { id: 'A', text: { en: '📢 Immediate firing and police report', th: '📢 ไล่ออกทันทีและแจ้งความตำรวจ', zh: '📢 立即开除并报案' }, consequence: { en: '😐 Firm but cold. Theft stops, but other staff become fearful. You lose a key operations person.', th: '😐 เด็ดขาดแต่เย็นชา การขโมยหยุดลง แต่พนักงานคนอื่นเริ่มหวาดกลัว คุณเสียหัวเรี่ยวหัวแรงในการดำเนินงานไปหนึ่งคน', zh: '😐 强硬但冷酷。偷窃停止了，但其他员工变得恐惧。你失去了一个关键的运营人员。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🤫 Confront privately and offer a repayment plan from their salary', th: '🤫 เผชิญหน้าเป็นการส่วนตัวและเสนอแผนการผ่อนชำระคืนจากเงินเดือน', zh: '🤫 私下对质并提供从工资中扣除的还款计划' }, consequence: { en: '⚠️ Risk/Reward. They are grateful and loyal, but you’ve established that theft isn’t a "Hard Exit." Hope they don\'t do it again.', th: '⚠️ ความเสี่ยง/ผลตอบแทน เขาจะซาบซึ้งและภักดี แต่คุณได้ทำให้เขารู้ว่าการขโมยไม่ใช่ "จุดจบ" หวังว่าเขาจะไม่ทำอีก', zh: '⚠️ 风险/回报。他们心存感激且忠诚，但你已经确立了偷窃并非“死罪”。希望他们不会再犯。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🧩 Investigate the root cause (medical bills, etc.) and offer help while demoting them', th: '🧩 สืบหาสาเหตุที่แท้จริง (เช่น ค่ารักษาพยาบาล) และให้ความช่วยเหลือในขณะที่ลดตำแหน่งเขา', zh: '🧩 调查根本原因（医药费等）并提供帮助，同时降职' }, consequence: { en: '✅ Nuanced Leadership. You maintain ethics while keeping talent. They work even harder to redeem themselves.', th: '✅ ภาวะผู้นำที่ละเอียดอ่อน คุณรักษาจริยธรรมไปพร้อมกับการรักษาคนเก่งไว้ เขาจะทำงานหนักขึ้นเพื่อไถ่โทษตัวเอง', zh: '✅ 微妙的领导力。你在保留人才的同时维持了道德。他们为了救赎自己而更加勤奋工作。' }, stats: { competence: 40, ethics: 50, leadership: 60, innovation: 20 } },
            { id: 'D', text: { en: '🙈 Ignore it to avoid drama and losing an asset', th: '🙈 เพิกเฉยเพื่อหลีกเลี่ยงดราม่าและการสูญเสียพนักงานคนสำคัญ', zh: '🙈 忽视它以避免麻烦和失去一名大将' }, consequence: { en: '😱 Downward spiral. Others notice the theft and start doing it too. Your business bleeds out slowly.', th: '😱 วงจรดิ่งเหว คนอื่นเริ่มสังเกตเห็นการขโมยและเริ่มทำตาม ธุรกิจของคุณจะค่อยๆ แย่ลงเรื่อยๆ', zh: '😱 向下的螺旋。其他人注意到了偷窃并开始效仿。你的生意慢慢失血。' }, stats: { competence: -20, ethics: -60, leadership: -50, innovation: 0 } }
        ]
    },
    {
        id: 'me_008',
        text: {
            en: '⏳ Black Friday is approaching. You expect record crowds, but you can only afford to hire 2 extra security guards OR 4 more floor staff. Which do you prioritize?',
            th: '⏳ วัน Black Friday กำลังจะมาถึง คุณคาดว่าจะมีฝูงชนจำนวนมาก แต่คุณมีงบจ้างได้เพียง รปภ. เพิ่ม 2 คน หรือพนักงานหน้าร้านเพิ่ม 4 คน คุณจะเลือกอะไร?',
            zh: '⏳ 黑色星期五即将到来。你预计会有创纪录的人潮，但你只能负担得起增聘2名保安或4名店面员工。你优先考虑哪一个？'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Security Guards: Safety and theft prevention first', th: '🛡️ เจ้าหน้าที่รักษาความปลอดภัย: ความปลอดภัยและการป้องกันการโจรกรรมต้องมาก่อน', zh: '🛡️ 保安：安全和防盗第一' }, consequence: { en: '📈 Controlled Environment. No theft, no fights, but long lines and lower sales. You missed revenue but saved your glass windows.', th: '📈 สภาพแวดล้อมที่ควบคุมได้ ไม่มีการขโมย ไม่มีการทะเลาะ แต่แถวยาวและยอดขายต่ำ คุณเสียรายได้แต่รักษาบานกระจกไว้ได้', zh: '📈 受控环境。没有偷窃，没有打斗，但排队长，销量较低。你错过了收入，但保住了玻璃窗。' }, stats: { competence: 30, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🛒 Floor Staff: Maximize sales and customer service', th: '🛒 พนักงานหน้าร้าน: เพิ่มยอดขายและบริการลูกค้าให้สูงสุด', zh: '🛒 店面员工：最大化销售和客户服务' }, consequence: { en: '💥 Total Chaos. Sales record set! But shoplifting increased by 15% and a minor scuffle broke out at the door. High profit, high stress.', th: '💥 ความวุ่นวายอย่างที่สุด ยอดขายทุบสถิติ! แต่การขโมยของเพิ่มขึ้น 15% และเกิดการชุลมุนเล็กน้อยที่ประตู กำไรสูงแต่เครียดจัด', zh: '💥 彻底混乱。刷新销售纪录！但顺手牵羊增加了15%，门口还发生了小规模摩擦。高利润，高压力。' }, stats: { competence: 50, ethics: 10, leadership: 20, innovation: 30 } },
            { id: 'C', text: { en: '🎟️ Appointment System: Only allow a set number of people in at a time', th: '🎟️ ระบบจองคิว: อนุญาตให้คนเข้าได้ตามจำนวนที่กำหนดต่อรอบเท่านั้น', zh: '🎟️ 预约制：每次只允许固定人数进店' }, consequence: { en: '✅ Premium Experience. Sales per customer are huge. No chaos. You look like a high-end destination even with limited stock.', th: '✅ ประสบการณ์ระดับพรีเมียม ยอดขายต่อลูกค้าถล่มทลาย ไม่มีความวุ่นวาย คุณดูเป็นแหล่งช้อปปิ้งระดับไฮเอนด์แม้จะมีสต็อกจำกัด', zh: '✅ 高端体验。客单价极高。没有混乱。即使库存有限，你看起来也像一个高端场所。' }, stats: { competence: 40, ethics: 30, leadership: 50, innovation: 60 } },
            { id: 'D', text: { en: '💻 Switch entirely to online sales for the weekend', th: '💻 เปลี่ยนไปขายออนไลน์ทั้งหมดสำหรับช่วงสุดสัปดาห์นี้', zh: '💻 整个周末完全转向在线销售' }, consequence: { en: '📈 Digital Win. No physical overhead or risk, but local fans are disappointed. You save on security entirely.', th: '📈 ชนะในโลกดิจิทัล ไม่มีค่าใช้จ่ายหน้าร้านหรือความเสี่ยง แต่แฟนคลับในพื้นที่รู้สึกผิดหวัง คุณประหยัดค่า รปภ. ไปได้ทั้งหมด', zh: '📈 数字共赢。没有实体管理费用或风险，但当地粉丝感到失望。你完全节省了安保费用。' }, stats: { competence: 40, ethics: 20, leadership: 30, innovation: 50 } }
        ]
    },
    {
        id: 'me_009',
        text: {
            en: '🚢 Due to shipping delays, your holiday inventory (toys/decor) arrives 2 days AFTER New Year. You are sitting on $100k of stock that nobody wants now.',
            th: '🚢 เนื่องจากการจัดส่งล่าช้า สินค้าช่วงเทศกาลของคุณ (ของเล่น/ของตกแต่ง) มาถึง 2 วัน "หลังจาก" ปีใหม่ คุณมีสต็อกมูลค่า $100k ที่ตอนนี้ไม่มีใครต้องการแล้ว',
            zh: '🚢 由于航运延迟，你的节日库存（玩具/装饰品）在新年的2天后才运抵。你守着10万美元没人想要的存货。'
        },
        options: [
            { id: 'A', text: { en: '🏷️ "Christmas in July": Store it for 6 months and relaunch', th: '🏷️ "Christmas in July": เก็บไว้ 6 เดือนแล้วค่อยเอามาขายใหม่', zh: '🏷️ “七月圣诞节”：储存6个月后重新发布' }, consequence: { en: '📈 Successful Gimmick. You create a mid-year sales event that becomes an annual tradition. Storage costs are high, but brand awareness explodes.', th: '📈 ลูกเล่นที่ประสบความสำเร็จ คุณสร้างงานขายช่วงกลางปีที่กลายเป็นประเพณีประจำปี ค่าจัดเก็บสูงแต่การรับรู้แบรนด์ระเบิด', zh: '📈 成功的噱头。你创造了一场年中销售活动，并使其成为了年度传统。仓储成本虽高，但品牌知名度激增。' }, stats: { competence: 40, ethics: 30, leadership: 40, innovation: 70 } },
            { id: 'B', text: { en: '💸 Clearance Sale: Sell everything at 70% off immediately', th: '💸 ลดล้างสต็อก: ขายทุกอย่างลด 70% ทันที', zh: '💸 清仓大甩卖：立即以三折价出售一切' }, consequence: { en: '📉 Cash flow saved. You recover some money to buy spring stock, but you took a massive loss on profits.', th: '📉 รักษาเงินหนุนเวียน คุณได้เงินกลับมาบ้างเพื่อซื้อสต็อกช่วงฤดูใบไม้ผลิ แต่เสียกำไรมหาศาล', zh: '📉 挽救现金流。你收回了一些钱来购买春季库存，但在利润上遭受了巨大损失。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } },
            { id: 'C', text: { en: '🎁 Donation: Give it all to a major children\'s charity for a tax write-off', th: '🎁 บริจาค: มอบทั้งหมดให้การกุศลเด็กหลักๆ เพื่อนำไปหักภาษี', zh: '🎁 捐赠：全部捐给由于主要的儿童慈善机构，并进行税收减免' }, consequence: { en: '❤️ Hero status. Your brand becomes synonymous with generosity. The tax write-off softens the blow significantly.', th: '❤️ สถานะฮีโร่ แบรนด์ของคุณกลายเป็นสัญลักษณ์ของความโอบอ้อมอารี การนำไปหักภาษีช่วยบรรเทาความเสียหายได้มาก', zh: '❤️ 英雄地位。你的品牌成为慷慨的代名词。税收减免显著减轻了损失。' }, stats: { competence: 20, ethics: 80, leadership: 60, innovation: 20 } },
            { id: 'D', text: { en: '📦 Bundling: Package the items as "Surprise Boxes" for the next month', th: '📦 การรวมชุด: จัดแพ็คเกจสินค้าเป็น "กล่องสุ่ม" สำหรับเดือนถัดไป', zh: '📦 捆绑销售：将这些物品包装成下个月的“惊喜盒”' }, consequence: { en: '✅ Innovation win! Customers love the mystery. You clear 80% of the stock at almost full price.', th: '✅ ชนะด้วยนวัตกรรม! ลูกค้าชอบปริศนา คุณระบายสต็อกได้ 80% ในราคาที่เกือบจะเต็ม', zh: '✅ 创新共赢！客户喜欢神秘感。你以接近全价的价格清空了80%的库存。' }, stats: { competence: 50, ethics: 20, leadership: 40, innovation: 80 } }
        ]
    },
    {
        id: 'me_010',
        text: {
            en: '💳 A customer claims a $500 refund, saying they never received the package. Your tracking says "Delivered". They are threatening to call the bank for a chargeback.',
            th: '💳 ลูกค้าขอคืนเงิน $500 โดยอ้างว่าไม่เคยได้รับพัสดุ ทั้งที่ระบบติดตามบอกว่า "ส่งแล้ว" เขาขู่จะแจ้งธนาคารเพื่อดึงเงินคืน',
            zh: '💳 一位客申请500美元退款，声称从未收到包裹。你的物流跟踪显示“已送达”。他们威胁要打电话给银行要求退单。'
        },
        options: [
            { id: 'A', text: { en: '📉 Refund immediately to keep the customer happy', th: '📉 คืนเงินทันทีเพื่อให้ลูกค้าพอใจ', zh: '📉 立即退款以取悦客户' }, consequence: { en: '😱 "Easy Target." Word gets out in fraud forums. You get 10 more "missing package" claims this month.', th: '😱 กลายเป็น "หมูสนาม" ข่าวลือกระจายในกลุ่มคนโกง เดือนนี้คุณเจอ "พัสดุหาย" อีก 10 กว่าราย', zh: '😱“容易下手的目标”。消息在欺诈论坛传开。本月你又收到了10起“包裹丢失”投诉。' }, stats: { competence: 10, ethics: 20, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '⚔️ Fight the chargeback: Submit tracking and photo proof to the bank', th: '⚔️ สู้คดี: ส่งหลักฐานการติดตามและรูปถ่ายยืนยันต่อธนาคาร', zh: '⚔️ 反击退单：向银行提交追踪信息和照片证据' }, consequence: { en: '✅ Win! The bank sides with you. You lose the customer, but they were likely a scammer anyway.', th: '✅ ชนะ! ธนาคารเข้าข้างคุณ คุณเสียลูกค้าไปคนนึง แต่เขาก็คงจะเป็นพวกต้มตุ๋นอยู่แล้ว', zh: '✅ 获胜！银行站在你这边。你失去了这个客户，但他们反正是个骗子。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Compromise: Offer 50% store credit with a required signature for their next delivery', th: '🤝 ประนีประนอม: เสนอเครดิตร้านค้า 50% และต้องเซ็นชื่อรับของในการจัดส่งครั้งถัดไป', zh: '🤝 妥协：提供50%的商店积分，并要求下次配送须本人签收' }, consequence: { en: '😐 Mixed result. You saved $250, but the customer still leaves a 1-star review claiming bad service.', th: '😐 ผลลัพธ์กึ่งดีกึ่งเสีย คุณเซฟเงินได้ $250 แต่ลูกค้าก็ยังทิ้งรีวิว 1 ดาวว่าบริการแย่', zh: '😐 结果参半。你省下了250美元，但客户还是留下了1星评价，称服务很差。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 20 } },
            { id: 'D', text: { en: '🕵️ File a police report for mail theft on their behalf', th: '🕵️ แจ้งความตำรวจข้อหาขโมยพัสดุในนามของเขา', zh: '🕵️ 代表他们向警方报案称邮件被盗' }, consequence: { en: '✅ Scam stopper. If they were lying, they suddenly "find" the package. Reliable if it was a real theft.', th: '✅ หยุดยั้งการโกง ถ้าเขาโกหก เขาจะ "เจอ" พัสดุทันที หรือถ้าหายจริงก็ถือว่าช่วยจัดการตามระบบ', zh: '✅ 诈骗制止。如果他们在撒谎，他们会突然“找到”包裹。如果是真实的盗窃，这也是可靠的做法。' }, stats: { competence: 40, ethics: 40, leadership: 50, innovation: 20 } }
        ]
    },
    {
        id: 'me_011',
        text: {
            en: '🏪 A giant corporate competitor opens across the street. They are selling your top 3 products AT COST to drive you out of business.',
            th: '🏪 คู่แข่งบริษัทยักษ์ใหญ่มาเปิดร้านฝั่งตรงข้าม เขาขายสินค้าท็อป 3 ของคุณใน "ราคาทุน" เพื่อบีบให้คุณเจ๊ง',
            zh: '🏪 一家巨大的企业竞争对手在街对面开业。他们以成本价销售你最畅销的3款产品，想把你逼入绝境。'
        },
        options: [
            { id: 'A', text: { en: '💸 Lower your prices even further to compete', th: '💸 ลดราคาให้ต่ำลงไปอีกเพื่อสู้กลับ', zh: '💸 进一步降低价格以进行竞争' }, consequence: { en: '💀 Bankruptcy. They have deeper pockets. You ran out of cash in 3 months. Price wars only benefit the giant.', th: '💀 ล้มละลาย เขามีทุนหนากว่า คุณเงินหมดภายใน 3 เดือน สงครามราคาให้ประโยชน์เฉพาะรายใหญ่เท่านั้น', zh: '💀 破产。他们的资金更雄厚。你在3个月内就耗尽了现金。价格战只对巨头有利。' }, stats: { competence: 10, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '✨ Focus on Niche: Pivot to unique, exclusive products they don\'t have', th: '✨ เน้นตลาดเฉพาะกลุ่ม: เปลี่ยนไปขายสินค้าที่เป็นเอกลักษณ์และหาได้ยากที่เขาไม่มี', zh: '✨ 专注于利基市场：转向他们没有的独特、独家产品' }, consequence: { en: '✅ Business Saved! You became a "Destination Shop." Your profit margins actually INCREASED with the better goods.', th: '✅ ธุรกิจรอด! คุณกลายเป็น "ร้านที่เป็นจุดหมายปลายทาง" อัตรากำไรของคุณเพิ่มขึ้นด้วยสินค้าที่ดีขึ้น', zh: '✅ 生意保住了！你变成了一家“目的地商店”。随着商品质量的提升，你的利润率实际上增加了。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 80 } },
            { id: 'C', text: { en: '🤝 Experience Hub: Offer workshops and community events in-store', th: '🤝 ศูนย์รวมประสบการณ์: จัดเวิร์กช็อปและกิจกรรมชุมชนในร้าน', zh: '🤝 体验中心：在店内提供研讨会和社区活动' }, consequence: { en: '📈 Loyalty Win. Customers come for the connection, not just the price. They buy your other items while visiting.', th: '📈 ชนะด้วยความภักดี ลูกค้ามาเพื่อความสัมพันธ์ไม่ใช่แค่ราคา เขาซื้อของชิ้นอื่นของคุณขณะมาทำกิจกรรม', zh: '📈 忠诚度共赢。客户是为了人际联系而来的，而不仅仅是因为价格。他们在访问时会购买你的其他商品。' }, stats: { competence: 40, ethics: 40, leadership: 60, innovation: 70 } },
            { id: 'D', text: { en: '📢 Media Blast: Market yourself as the "Local Hero" fighting the giant', th: '📢 ระเบิดสื่อ: ทำการตลาดตัวเองในฐานะ "ฮีโร่ท้องถิ่น" ที่กำลังสู้กับยักษ์ใหญ่', zh: '📢 媒体轰炸：把自己营销成对抗巨头的“当地英雄”' }, consequence: { en: '✅ PR success. The community rallies behind you. Sales surge from sympathy, though it might not last forever.', th: '✅ ความสำเร็จด้าน PR ชุมชนรวมพลังกันช่วยคุณ ยอดขายพุ่งจากการเห็นใจ แต่อาจจะไม่ยั่งยืนตลอดไป', zh: '✅ 公关成功。社区团结在你的身后。由同情心带来的销售激增，尽管这可能不会永远持续下去。' }, stats: { competence: 30, ethics: 20, leadership: 50, innovation: 40 } }
        ]
    },
    {
        id: 'me_012',
        text: {
            en: '🏭 Your main manufacturer is going bankrupt. They can\'t fulfill your $50k order, and your deposit might be lost. You need that stock for spring.',
            th: '🏭 ผู้ผลิตรายหลักของคุณกำลังจะล้มละลาย เขาไม่สามารถทำตามออเดอร์ $50k ของคุณได้ และเงินมัดจำอาจจะสูญหาย คุณจำเป็นต้องมีสต็อกนั้นสำหรับฤดูใบไม้ผลิ',
            zh: '🏭 你的主要制造商即将破产。他们无法履行你5万美元的订单，且你的定金可能会损失。你需要那批春季库存。'
        },
        options: [
            { id: 'A', text: { en: '⚖️ Sue them immediately to recover the deposit', th: '⚖️ ฟ้องร้องทันทีเพื่อเอาเงินมัดจำคืน', zh: '⚖️ 立即起诉他们以收回定金' }, consequence: { en: '📉 Legal limbo. You spend $10k on lawyers and get nothing because there is no cash left in the business. Double loss.', th: '📉 ติดหล่มกฎหมาย คุณเสียเงิน $10k ไปกับทนายและไม่ได้อะไรกลับมาเลยเพราะบริษัทเขาไม่มีเงินเหลืออยู่แล้ว เสียสองต่อ', zh: '📉 法律僵局。你花了1万美元请律师，却一无所获，因为那家公司已经没有现金了。双重损失。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Visit in person: Offer to buy their raw materials and let your staff finish the assembly', th: '🤝 ไปพบด้วยตัวเอง: เสนอซื้อวัตถุดิบของเขาและให้พนักงานของคุณประกอบเองให้เสร็จ', zh: '🤝 亲自面谈：提议购买他们的原材料，并让你的员工完成组装' }, consequence: { en: '✅ Salvage win. You got the goods at a discount. It was extra work, but you have the only stock in town for spring.', th: '✅ กู้สถานการณ์สำเร็จ คุณได้ของมาในราคาพิเศษ แม้จะต้องทำงานหนักเพิ่มขึ้นแต่คุณมีสต็อกเพียงเจ้าเดียวในเมืองสำหรับฤดูใบไม้ผลิ', zh: '✅ 挽救成功。你以折扣价拿到了货。虽然增加了额外的工作，但你是城里唯一拥有春季库存的人。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'C', text: { en: '🚀 Pivot! Find a local artisan to make a smaller, premium run of something else', th: '🚀 พลิกแพลง! หาช่างฝีมือท้องถิ่นมาทำสินค้าอื่นในจำนวนน้อยแต่พรีเมียมแทน', zh: '🚀 转型！寻找当地工匠生产规模较小、更高端的其他产品' }, consequence: { en: '✨ Quality Shift. Your brand moves up-market. You lost the $50k deposit, but your new line is much higher margin.', th: '✨ การเปลี่ยนระดับคุณภาพ แบรนด์ของคุณยกระดับขึ้นสู่ตลาดบน คุณเสียเงินมัดจำ $50k แต่ไลน์สินค้าใหม่มีกำไรสูงกว่ามาก', zh: '✨ 质量转型。你的品牌走向高端市场。你损失了5万美元的定金，但你的新产品线利润率要高得多。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 90 } },
            { id: 'D', text: { en: '📦 Buy their competitors\' overstock at a premium price', th: '📦 ซื้อสินค้าสต็อกเกินจากคู่แข่งของเขาในราคาสูง', zh: '📦 以高溢价购买他们竞争对手的库存' }, consequence: { en: '📉 Thin margins. You have stock, but you aren\'t making any profit this quarter. Safe but boring.', th: '📉 กำไรบางเฉียบ คุณมีของชายแต่ไม่มีกำไรเลยในไตรมาสนี้ ปลอดภัยแต่ไม่ก้าวหน้า', zh: '📉 利润微薄。你有货，但本季度没有盈利。安全但平庸。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'me_013',
        text: {
            en: '🤳 An influencer with 1M followers wants a free $2k sofa in exchange for a "shoutout". Your profit on the sofa is only $400.',
            th: '🤳 อินฟลูเอนเซอร์ที่มีผู้ติดตาม 1 ล้านคนขอโซฟาฟรีมูลค่า $2k เพื่อแลกกับการ "รีวิว" กำไรจากโซฟาตัวนั้นของคุณมีเพียง $400',
            zh: '🤳 一位拥有100万粉丝的网红想要一张价值2000美元的免费沙发，以换取一次“宣传”。你在那张沙发上的利润只有400美元。'
        },
        options: [
            { id: 'A', text: { en: '✅ Give it: "The exposure is worth millions."', th: '✅ ให้ไปเลย: "การได้ออกสื่อมีค่ามหาศาล"', zh: '✅ 给她： “曝光价值数百万。”' }, consequence: { en: '🎲 Gamble outcome. They post once at 2 AM. You get 5 followers and no sales. Expensive mistake.', th: '🎲 ผลการเดิมพัน เขาโพสต์ตอนตี 2 แค่ครั้งเดียว คุณได้ผู้ติดตามเพิ่ม 5 คนแต่ยอดขายเป็นศูนย์ บทเรียนราคาแพง', zh: '🎲 赌博结果。他们在凌晨2点发了一次动态。你增加了5个粉丝，没有销售额。昂贵的错误。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 30 } },
            { id: 'B', text: { en: '🙅 Decline: "I don\'t give away my labor for free."', th: '🙅 ปฏิเสธ: "ฉันไม่ยอมให้แรงกายของตัวเองสูญเปล่าฟรีๆ"', zh: '推辞：“我不会免费提供我的劳动。”' }, consequence: { en: '🛡️ Self-respect. You save $2k, but you remain a small local secret. No risk, no reward.', th: '🛡️ ศักดิ์ศรี คุณเซฟเงินได้ $2k แต่คุณก็ยังเป็นร้านลับๆ ในพื้นที่ต่อไป ไม่มีความเสี่ยงก็ไม่มีรางวัล', zh: '🛡️ 自尊。你省下了2000美元，但你仍然是一个鲜为人知的当地小店。没有风险，也就没有回报。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Affiliate Deal: "You buy at 30% off, and I\'ll give you 20% commission on every sale you generate."', th: '🤝 ดีลแอฟฟิลิเอต: "คุณซื้อลด 30% แล้วฉันจะให้ค่าคอมมิชชั่น 20% จากทุกๆ ยอดที่คนตามคุณมาซื้อ"', zh: '🤝 联盟协议：“你以七折购买，我可以为你带来的每一笔销售提供20%的佣金。”' }, consequence: { en: '📈 True Partnership. The influencer works harder to sell because they get paid the more you sell. Low risk win.', th: '📈 พันธมิตรที่แท้จริง อินฟลูเอนเซอร์จะขยันขายมากขึ้นเพราะเขาจะได้เงินตามยอดขายจริง เป็นชัยชนะที่เสี่ยงต่ำ', zh: '📈 真正的合作伙伴。网红会更卖力地推销，因为你卖得越多，他们拿得越多。低风险的共赢。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 60 } },
            { id: 'D', text: { en: '🛠️ Loaner: "You can use it for your photo shoot, but you have to return it in perfect condition."', th: '🛠️ ให้ยืม: "คุณเอาไปใช้ถ่ายรูปได้ แต่ต้องส่งคืนในสภาพสมบูรณ์นะ"', zh: '🛠️ 借用： “你可以用它拍摄照片，但必须完好无损地归还。”' }, consequence: { en: '✅ Smart middle ground. You get the photos for your website too! They get their content, you keep your asset.', th: '✅ ทางสายกลางที่ฉลาด คุณได้รูปสวยๆ มาลงเว็บด้วย! เขาได้คอนเทนต์ คุณรักษาทรัพย์สินไว้ได้', zh: '✅ 聪明的折中方案。你也能得到用于网站的照片！他们得到了内容，你保留了资产。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 50 } }
        ]
    },
    {
        id: 'me_014',
        text: {
            en: '⚠️ A small batch of your gourmet food products might contain an undeclared allergen (peanuts). No one has gotten sick yet, but testing will take 1 week.',
            th: '⚠️ อาหารกูร์เมต์ล็อตเล็กๆ ของคุณอาจมีสารก่อภูมิแพ้ที่ไม่ได้ระบุ (ถั่วลิสง) ยังไม่มีใครเจ็บป่วย แต่การตรวจสอบจะใช้เวลา 1 สัปดาห์',
            zh: '⚠️ 你的一小批美食产品可能含有未声明的过敏原（花生）。目前还没有人生病，但检测需要一周时间。'
        },
        options: [
            { id: 'A', text: { en: '🤫 Wait for test results before doing anything', th: '🤫 รอผลทดสอบก่อนค่อยทำอะไร', zh: '🤫 在采取行动前先等待检测结果' }, consequence: { en: '😱 Near-fatality. A child has an allergic reaction on day 4. You are sued for negligence. Your brand is poisoned.', th: '😱 เกือบมีคนตาย เด็กคนหนึ่งแพ้อย่างรุนแรงในวันที่ 4 คุณถูกฟ้องฐานประมาทเลินเล่อ แบรนด์คุณพังทลาย', zh: '😱 险些丧命。一名儿童在第4天出现过敏反应。你因疏忽被起诉。你的品牌名声扫地。' }, stats: { competence: 10, ethics: -100, leadership: -40, innovation: 0 } },
            { id: 'B', text: { en: '📢 Immediate voluntary recall and public warning', th: '📢 ประกาศเรียกคืนโดยสมัครใจและแจ้งเตือนต่อสาธารณะทันที', zh: '　📢 立即发布自愿召回通知和公众警告' }, consequence: { en: '🛡️ Safety Champion. You lose money on the batch, but health authorities praise your responsibility. Customers trust you deeply.', th: '🛡️ แชมป์ด้านความปลอดภัย คุณเสียเงินกับสินค้าล็อตนั้น แต่หน่วยงานสาธารณสุขชื่นชมในความรับผิดชอบของคุณ ลูกค้าเชื่อใจคุณอย่างลึกซึ้ง', zh: '🛡️ 安全冠军。你在这批货上赔了钱，但卫生部门称赞了你的责任感。客户深深地信任你。' }, stats: { competence: 30, ethics: 100, leadership: 60, innovation: 10 } },
            { id: 'C', text: { en: '📞 Quietly call the few customers who bought it', th: '📞 โทรหาลูกค้าไม่กี่คนที่ซื้อไปอย่างเงียบๆ', zh: '📞 悄悄给购买该产品的少数客户打电话' }, consequence: { en: '✅ Effective damage control. You reached everyone before they ate it. Crisis averted without public panic.', th: '✅ ควบคุมความเสียหายได้ดี คุณติดต่อทุกคนได้ก่อนเขาจะกินเข้าไป กอบกู้วิกฤตได้โดยไม่ทำให้คนแตกตื่น', zh: '✅ 有效的损害控制。你在他们吃掉之前联系到了每一个人。化解了危机，没有引起公众恐慌。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🏷️ Relabel existing stock with "May contain peanuts" stickers', th: '🏷️ ติดสติกเกอร์ "อาจมีถั่วลิสง" ทับสต็อกที่มีอยู่', zh: '🏷️ 在现有库存上贴上“可能含有花生”的标签' }, consequence: { en: '📉 Shady practice. Regulators fine you for improper labeling of suspected hazards. You look like you\'re hiding something.', th: '📉 พฤติกรรมที่ไม่โปร่งใส หน่วยงานกำกับดูแลปรับคุณฐานติดฉลากไม่ถูกต้องสำหรับอันตรายที่น่าสงสัย คุณดูเหมือนกำลังซ่อนอะไรบางอย่าง', zh: '📉 阴暗的做法。监管机构因你对疑似危险品贴标不当而罚款。你看起来像是在隐瞒什么。' }, stats: { competence: 20, ethics: -20, leadership: -30, innovation: 30 } }
        ]
    },
    {
        id: 'me_015',
        text: {
            en: '📍 You have the chance to open a second location in a trendy but expensive neighborhood. It will require a $300k loan. Your current shop is doing great.',
            th: '📍 คุณมีโอกาสเปิดสาขาที่สองในย่านที่กำลังฮิตแต่ราคาแพง ต้องกู้เงิน $300k ร้านปัจจุบันของคุณกำลังไปได้สวย',
            zh: '📍 你有机会在流行但高端的街区开设第二家分店。这需要30万美元的贷款。你目前的店铺经营得非常好。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Go for it: "Expansion is the only way to wealth."', th: '🚀 ลุยเลย: "การขยายตัวคือทางเดียวสู่ความร่ำรวย"', zh: '🚀 放手一搏：“扩张是通往财富的唯一途径。”' }, consequence: { en: '📈 Empire Building! The store is a hit. You now have twice the buying power with suppliers. You are a local mogul.', th: '📈 สร้างอาณาจักร! ร้านใหม่ดังระเบิด ตอนนี้คุณมีอำนาจต่อรองกับซัพพลายเออร์เพิ่มขึ้นสองเท่า คุณคือเจ้าพ่อในพื้นที่', zh: '📈 建立帝国！分店一炮而红。你现在对供应商的议价能力翻了一番。你成为了当地的大亨。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 40 } },
            { id: 'B', text: { en: '🐢 Stay small: "Better a bird in the hand than two in the bush."', th: '🐢 อยู่แบบเดิม: "กำขี้ดีกว่ากำตด (พอใจในสิ่งที่ตนมี)"', zh: '🐢 保持现状：“手里的一只鸟胜过林中的两只。”' }, consequence: { en: '🛡️ Safety. You remain debt-free and profitable, but a competitor takes the spot and eventually starts stealing your customers.', th: '🛡️ ความปลอดภัย คุณยังคงไม่มีหนี้และมีกำไร แต่คู่แข่งจะมาแย่งที่ตรงนั้นไปและเริ่มแย่งลูกค้าคุณในที่สุด', zh: '🛡️ 安全。你保持无债经营并持续盈利，但竞争对手抢占了那个位置，并最终开始抢夺你的客户。' }, stats: { competence: 20, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Franchise: Let a trusted manager open it with some of their own money', th: '🤝 แฟรนไชส์: ให้ผู้จัดการที่ไว้ใจได้ร่วมลงทุนเปิดร้านโดยใช้เงินของเขาบางส่วน', zh: '🤝 特许经营：让一位信任的经理出资共同开店' }, consequence: { en: '✅ Scalable success. You shared the risk and the rewards. You created a partner for life.', th: '✅ ความสำเร็จที่ขยายขอบเขตได้ คุณแบ่งปันความเสี่ยงและผลตอบแทน คุณได้สร้างพันธมิตรตลอดชีวิต', zh: '✅ 可扩展的成功。你分享了风险和回报。你创造了一个终身的合作伙伴。' }, stats: { competence: 40, ethics: 50, leadership: 70, innovation: 50 } },
            { id: 'D', text: { en: '💻 Invest the $300k into a massive e-commerce push instead', th: '💻 นำเงิน $300k ไปลงทุนในการบุกตลาดอีคอมเมิร์ซอย่างเต็มที่แทน', zh: '　💻 将30万美元投入到大规模的电子商务推广中' }, consequence: { en: '📈 National growth. You are no longer limited by your city. Your sales reach the whole country. High ROI.', th: '📈 การเติบโตระดับประเทศ คุณไม่ได้ถูกจำกัดอยู่แค่ในเมืองของคุณอีกต่อไป ยอดขายเข้าถึงคนทั้งประเทศ ผลตอบแทนจากการลงทุนสูง', zh: '📈 全国性增长。你不再受限于你的城市。你的销售遍及全国。高投资回报率。' }, stats: { competence: 50, ethics: 20, leadership: 40, innovation: 90 } }
        ]
    },
    {
        id: 'me_016',
        text: {
            en: '🏃 The Poached Manager: Your best store manager, who runs everything when you are away, is offered a job by a competitor for 20% more pay. They ask if you can match it. You can\'t afford that salary without cutting profits significantly.',
            th: '🏃 ผู้จัดการที่ถูกดึงตัว: ผู้จัดการร้านที่ดีที่สุดของคุณ ซึ่งดูแลทุกอย่างเมื่อคุณไม่อยู่ ได้รับข้อเสนองานจากคู่แข่งด้วยเงินเดือนที่มากกว่า 20% เขาถามว่าคุณสู้ราคาไหวไหม คุณจ่ายไม่ไหวโดยไม่กระทบกำไรอย่างหนัก',
            zh: '🏃 被挖角的经理：你最好的店长，当你不在时负责一切，被竞争对手以高出20%的薪水挖角。他们问你能不能匹配这个价格。如果不大幅削减利润，你付不起这个薪水。'
        },
        options: [
            { id: 'A', text: { en: '💰 Match it anyway: "I can\'t lose you. I\'ll take a pay cut myself to keep you."', th: '💰 สู้ราคา: "ฉันเสียคุณไปไม่ได้ ฉันจะยอมลดเงินเดือนตัวเองเพื่อรั้งคุณไว้"', zh: '💰 无论如何都要匹配：“我不能失去你。为了留住你，我宁愿自己减薪。”' }, consequence: { en: '✅ Retention but Pain. They stay and appreciate the sacrifice. Operations remain smooth, but your personal income drops, causing stress at home.', th: '✅ รักษาคนได้แต่เจ็บ เขาอยู่ต่อและซาบซึ้งในความเสียสละ การดำเนินงานราบรื่น แต่รายได้ส่วนตัวคุณลดลง สร้างความเครียดที่บ้าน', zh: '✅留住了人但很痛苦。他们留下来并感激你的牺牲。运营保持顺畅，但你的个人收入下降，导致家庭压力。' }, stats: { competence: 30, ethics: 40, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🤝 Offer Equity/Bonus: "I can\'t match the base salary, but I\'ll give you 5% profit sharing and more flexible hours."', th: '🤝 เสนอหุ้น/โบนัส: "ฉันสู้เงินเดือนไม่ได้ แต่ฉันจะให้ส่วนแบ่งกำไร 5% และเวลาทำงานที่ยืดหยุ่นกว่า"', zh: '🤝 提供股权/奖金：“我无法匹配底薪，但我会给你5%的利润分成和更灵活的工作时间。”' }, consequence: { en: '🏆 Win-Win. They accept! The profit share motivates them to sell more. Revenue grows, covering the extra cost. Smart incentive.', th: '🏆 วิน-วิน เขารับข้อเสนอ! ส่วนแบ่งกำไรกระตุ้นให้เขาขายมากขึ้น รายได้โตขึ้นคุ้มกับต้นทุนที่เพิ่มมา แรงจูงใจที่ฉลาด', zh: '🏆 双赢。他们接受了！利润分成激励他们卖出更多。收入增长，覆盖了额外成本。聪明的激励措施。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 30 } },
            { id: 'C', text: { en: '👋 Let them go: "I love you, but I can\'t hold you back. Good luck. I\'ll train the assistant manager."', th: '👋 ปล่อยเขาไป: "ฉันรักคุณนะ แต่ฉันรั้งคุณไว้ไม่ได้ โชคดีนะ ฉันจะฝึกผู้ช่วยขึ้นมาแทน"', zh: '👋 让他们走：“我爱你，但我不能阻碍你的发展。祝你好运。我会培训助理经理。”' }, consequence: { en: '📉 Temporary Dip. Operations are messy for 3 months. The assistant struggles but eventually grows into the role. You saved money but lost sleep.', th: '📉 ตกต่ำชั่วคราว การดำเนินงานยุ่งเหยิงไป 3 เดือน ผู้ช่วยลำบากใจแต่สุดท้ายก็โตขึ้นมารับบทบาทได้ คุณประหยัดเงินแต่เสียเวลานอน', zh: '📉 暂时下滑。运营混乱了3个月。助理很挣扎，但最终成长为这个角色。你省了钱，但失眠了。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🔥 Guilt Trip: "After all I taught you? You\'re betraying the family for money?"', th: '🔥 ดราม่าใส่: "หลังจากที่ฉันสอนทุกอย่างให้? คุณจะทรยศครอบครัวเราเพื่อเงินเหรอ?"', zh: '🔥 道德绑架：“在我教了你这么多之后？你为了钱背叛这个家庭？”' }, consequence: { en: '💀 Toxic exit. They leave immediately and angry. They badmouth you to other staff and customers. Bridge burned.', th: '💀 จบไม่สวย เขาออกทันทีด้วยความโกรธ เขาไปพูดไม่ดีเกี่ยวกับคุณให้พนักงานอื่นและลูกค้าฟัง เผาสะพานทิ้ง', zh: '💀 有毒的退出。他们愤怒地立即离开。他们在其他员工和客户面前说你坏话。过河拆桥。' }, stats: { competence: 10, ethics: -20, leadership: -40, innovation: 0 } }
        ]
    },
    {
        id: 'me_017',
        text: {
            en: '💻 The Tech Upgrade: An inventory software salesman promises his system will cut your admin time by 50%. It costs $5,000 upfront. Your current system is pen-and-paper, which is slow but reliable.',
            th: '💻 การอัปเกรดเทค: เซลส์ขายซอฟต์แวร์สต็อกสัญญาว่าระบบของเขาจะลดเวลางานเอกสารลง 50% ราคา $5,000 จ่ายทีเดียว ระบบปัจจุบันของคุณคือปากกากับกระดาษ ซึ่งช้าแต่ชัวร์',
            zh: '💻 技术升级：一个库存软件销售员承诺他的系统会将你的管理时间减少50%。预付5000美元。你目前的系统是纸笔，虽然慢但可靠。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Buy it: "Efficiency is key to scaling. We need to modernize."', th: '🚀 ซื้อเลย: "ประสิทธิภาพคือกุญแจสู่การขยายตัว เราต้องทันสมัย"', zh: '🚀 买下它：“效率是扩展的关键。我们需要现代化。”' }, consequence: { en: '📉 Implementation Hell. The software is baggy and hard to learn. You spend 2 weeks just setting it up, losing sales. Long term it helps, but short term is painful.', th: '📉 นรกของการติดตั้ง ซอฟต์แวร์มีบั๊กและเรียนรู้ยาก คุณเสียเวลา 2 สัปดาห์แค่เพื่อตั้งค่า เสียยอดขาย ระยะยาวดีแต่ระยะสั้นเจ็บปวด', zh: '📉 实施地狱。软件漏洞百出且难以学习。你花了2周时间安装，损失了销售额。长期来看有帮助，但短期很痛苦。' }, stats: { competence: 30, ethics: 30, leadership: 40, innovation: 50 } },
            { id: 'B', text: { en: '🐢 Stick to Paper: "If it ain\'t broke, don\'t fix it. $5,000 is too much risk."', th: '🐢 ใช้กระดาษต่อ: "ถ้ามันไม่พังก็อย่าไปซ่อมมัน $5,000 มันเสี่ยงเกินไป"', zh: '🐢 坚持用纸：“如果没有坏，就不要修。5000美元风险太大了。”' }, consequence: { en: '🔒 Safe stagnation. You save money, but you can\'t analyze your sales data. You miss a trend that costs you $10k in lost opportunity.', th: '🔒 ปลอดภัยแต่ย่ำอยู่กับที่ คุณประหยัดเงิน แต่คุณวิเคราะห์ข้อมูลการขายไม่ได้ คุณพลาดเทรนด์ที่ทำให้เสียโอกาสไป $10k', zh: '🔒 安全停滞。你省了钱，但你无法分析销售数据。你错过了一个趋势，导致损失1万美元的机会成本。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '📊 Trial Period: "I\'ll pay $500 for a 1-month pilot. If it works, I buy. If not, I walk."', th: '📊 ระยะทดลอง: "ฉันจะจ่าย $500 สำหรับทดลอง 1 เดือน ถ้าดีฉันซื้อ ถ้าไม่ฉันไป"', zh: '📊 试用期：“我会付500美元试用1个月。如果有用，我就买。如果没有，我就走人。”' }, consequence: { en: '✅ Smart Buyer. You assert dominance. You find out the software isn\'t great, but you only lost $500. You eventually find a better, cheaper alternative.', th: '✅ ผู้ซื้อที่ฉลาด คุณแสดงอำนาจต่อรอง คุณพบว่าซอฟต์แวร์นั้นไม่ได้ดีมาก แต่เสียแค่ $500 สุดท้ายคุณหาตัวเลือกที่ดีและถูกกว่าได้', zh: '✅ 精明的买家。你确立了主导地位。你发现软件不太好，但只损失了500美元。你最终找到了更好、更便宜的替代品。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '🤝 Outsource: Hire a part-time admin for $5,000/year to handle the paper logs instead', th: '🤝 จ้างคนนอก: จ้างแอดมินพาร์ทไทม์ $5,000/ปี มาจัดการเอกสารแทน', zh: '🤝 外包：每年花5000美元聘请一名兼职管理员来处理纸质日志' }, consequence: { en: '⚖️ Human Solution. Works well! The admin also helps with customers. Less scalable than software, but flexible.', th: '⚖️ แก้ด้วยคน ได้ผลดี! แอดมินช่วยต้อนรับลูกค้าด้วย ขยายตัวยากกว่าซอฟต์แวร์แต่ยืดหยุ่น', zh: '⚖️ 人力解决方案。效果很好！管理员还帮助接待客户。虽然不如软件可扩展，但很灵活。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'me_018',
        text: {
            en: '🚧 The Roadworks: The city announces major construction right in front of your shop for 3 months. The pavement is blocked. Foot traffic drops 60% immediately.',
            th: '🚧 งานทำถนน: เมืองประกาศก่อสร้างใหญ่หน้าพิกัดร้านคุณเป็นเวลา 3 เดือน ทางเท้าถูกปิด คนเดินผ่านลดลง 60% ทันที',
            zh: '🚧 道路施工：市政府宣布在你的店门前进行为期3个月的重大施工。人行道被封锁。客流量立即下降60%。'
        },
        options: [
            { id: 'A', text: { en: '📢 "We Are Open" Blitz: Put up massive signs, hire street teams to direct people, offer "Construction Discount"', th: '📢 บุกแคมเปญ "เราเปิดอยู่": ติดป้ายยักษ์ จ้างคนยืนโบก แจก "ส่วนลดช่วงก่อสร้าง"', zh: '📢 “我们营业中”突击：竖起巨大的标志，雇佣街头团队指引人们，提供“施工折扣”' }, consequence: { en: '✅ Scrappy Survival. It\'s loud and dusty, but customers admire your hustle. You keep 80% of revenue. You survive the winter.', th: '✅ รอดแบบสู้ยิบตา เสียงดังและฝุ่นเยอะ แต่ลูกค้าชื่นชมความพยายาม คุณรักษาได้ 80% ของรายได้ คุณรอดผ่านฤดูหนาว', zh: '✅ 顽强求生。虽然又吵又多尘，但客户钦佩你的拼搏精神。你保持了80%的收入。你熬过了冬天。' }, stats: { competence: 40, ethics: 30, leadership: 45, innovation: 40 } },
            { id: 'B', text: { en: '🚚 Delivery Pivot: "If they can\'t come to us, we go to them. Free delivery within 5 miles."', th: '🚚 พลิกไปส่งของ: "ถ้าเขามาหาเราไม่ได้ เราไปหาเขาเอง ส่งฟรีในระยะ 5 ไมล์"', zh: '🚚 配送转型：“如果他们不能来找我们，我们就去找他们。5英里内免费送货。”' }, consequence: { en: '📈 New Revenue Stream. You discover a huge demand for delivery. Even after construction ends, delivery stays as 30% of your business.', th: '📈 ช่องทางรายได้ใหม่ คุณพบความต้องการส่งของที่มหาศาล แม้ก่อสร้างจบ การส่งของยังคงเป็น 30% ของธุรกิจ', zh: '📈 新的收入来源。你发现配送需求巨大。即使施工结束，配送仍占你业务的30%。' }, stats: { competence: 45, ethics: 40, leadership: 40, innovation: 60 } },
            { id: 'C', text: { en: '⚖️ Sue the City: Demand compensation for lost business', th: '⚖️ ฟ้องเมือง: เรียกร้องค่าชดเชยธุรกิจที่เสียหาย', zh: '⚖️ 起诉市政府：要求赔偿商业损失' }, consequence: { en: '📉 Time Sink. Bureaucracy swallows you up. You get a check for $500 two years later. You wasted energy you should have spent selling.', th: '📉 หลุมดำแห่งเวลา ระบบราชการกลืนกินคุณ คุณได้เช็ค $500 ในอีกสองปีให้หลัง คุณเสียพลังงานที่ควรใช้ขายของ', zh: '📉 时间黑洞。官僚主义吞噬了你。两年后你收到一张500美元的支票。你浪费了本应用于销售的精力。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🏖️ Temporary Closure: Close shop for 3 months to renovate while it\'s dead anyway', th: '🏖️ ปิดชั่วคราว: ปิดร้าน 3 เดือนเพื่อรีโนเวทในเมื่อเงียบอยู่แล้ว', zh: '🏖️ 暂时关闭：趁着没生意关闭店铺3个月进行装修' }, consequence: { en: '⚠️ Expensive Gamble. You burn cash on rent and renovations with zero income. The store looks great when it reopens, but you are deep in debt.', th: '⚠️ เดิมพันราคาแพง คุณเผาเงินค่าเช่าและค่ารีโนเวทโดยไม่มีรายได้ ร้านดูดีเมื่อเปิดใหม่ แต่คุณจมหนี้', zh: '⚠️ 昂贵的赌博。你在没有收入的情况下烧钱付租金和装修。重新开业时店面看起来很棒，但你负债累累。' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'me_019',
        text: {
            en: '🛑 The Supplier Strike: Workers at your main product factory are striking for better wages. Production is halted. You will run out of stock in 2 weeks.',
            th: '🛑 การหยุดงานของซัพพลายเออร์: คนงานที่โรงงานผลิตหลักของคุณประท้วงหยุดงานขอขึ้นค่าแรง การผลิตหยุดชะงัก ของจะหมดภายใน 2 สัปดาห์',
            zh: '🛑 供应商罢工：你主要产品工厂的工人正在罢工要求提高工资。生产暂停。你的库存将在2周内以此耗尽。'
        },
        options: [
            { id: 'A', text: { en: '🏭 Find a "Scab" Factory: Quickly contract a cheaper, non-union factory to fill the gap', th: '🏭 หาโรงงาน "ขัดตาทัพ": รีบจ้างโรงงานที่ถูกกว่าและไม่มีสหภาพเพื่ออุดช่องว่าง', zh: '🏭 寻找“工贼”工厂：迅速签约一家更便宜的非工会工厂来填补缺口' }, consequence: { en: '📉 Quality Drop & Bad PR. The new batch is terrible quality. Plus, activists boycott you for undermining the strike. Double fail.', th: '📉 คุณภาพตก & ข่าวเสีย ของล็อตใหม่คุณภาพแย่มาก แถมโดนนักกิจกรรมแบนเพราะทำลายการประท้วง ล้มเหลวสองต่อ', zh: '📉 质量下降和公关危机。新批次质量糟糕。加上活动家因你破坏罢工而抵制你。双重失败。' }, stats: { competence: 30, ethics: -20, leadership: 20, innovation: 10 } },
            { id: 'B', text: { en: '📢 Publicly Support Workers: "We stand with the makers. We will wait for them." spin the shortage as "Limited Integrity Edition"', th: '📢 สนับสนุนคนงานออกสื่อ: "เรายืนหยัดข้างผู้ผลิต เราจะรอพวกเขา" ปั่นเรื่องของขาดว่าเป็น "รุ่นลิมิเต็ดแห่งความซื่อสัตย์"', zh: '📢 公开支持工人：“我们与制造者站在一起。我们会等他们。”将短缺宣传为“有限诚信版”' }, consequence: { en: '❤️ Brand Love. You sell out of remaining stock instantly at premium prices. Customers respect your values. You win the culture war.', th: '❤️ คนรักแบรนด์ คุณขายสต็อกที่เหลือหมดเกลี้ยงในราคาพรีเมียม ลูกค้าเคารพค่านิยมของคุณ คุณชนะสงครามวัฒนธรรม', zh: '❤️ 品牌热爱。你以高价瞬间卖光了剩余库存。客户尊重你的价值观。你赢得了文化战争。' }, stats: { competence: 40, ethics: 60, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🔄 Diversify Supply: Use this as a push to finally sign contracts with 3 smaller regional suppliers', th: '🔄 กระจายซัพพลาย: ใช้วิกฤตนี้เร่งเซ็นสัญญากับซัพพลายเออร์รายย่อยในภูมิภาค 3 ราย', zh: '🔄 多样化供应：以此为契机，最终与3家较小的区域供应商签署合同' }, consequence: { en: '✅ Strategic Resilience. You solve the immediate problem AND bulletproof your future supply chain. More work to manage, but safer.', th: '✅ ความทนทานเชิงกลยุทธ์ คุณแก้ปัญหาเฉพาะหน้าและสร้างเกราะให้ห่วงโซ่อุปทานในอนาคต งานบริหารเยอะขึ้นแต่ปลอดภัยกว่า', zh: '✅ 战略韧性。你解决了眼前的问题，并为未来的供应链提供了保障。管理工作更多，但更安全。' }, stats: { competence: 50, ethics: 40, leadership: 45, innovation: 30 } },
            { id: 'D', text: { en: '😴 Wait it out: "Strikes usually end in a week. Do nothing."', th: '😴 รอไปก่อน: "ประท้วงส่วนใหญ่จบในอาทิตย์เดียว ไม่ต้องทำอะไร"', zh: '😴 等待：“罢工通常一周就结束了。什么都不做。”' }, consequence: { en: '😱 It lasts 3 months. You have empty shelves. Customers go to competitors and never come back. Passive failure.', th: '😱 มันยาว 3 เดือน ชั้นวางคุณโล่ง ลูกค้าไปหาคู่แข่งและไม่กลับมาอีก ความล้มเหลวจากการนิ่งเฉย', zh: '😱 持续了3个月。你的货架空空如也。客户去了竞争对手那里，再也没有回来。被动失败。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'me_020',
        text: {
            en: '🤕 The Slip and Fall: A customer slips on a wet floor (no sign was up). They are threatening to sue for medical bills ($5,000) plus "pain and suffering".',
            th: '🤕 ลื่นล้ม: ลูกค้าลื่นล้มบนพื้นเปียก (ไม่ได้ตั้งป้ายเตือน) เขาขู่จะฟ้องค่ารักษา ($5,000) บวกค่า "ความเจ็บปวดและทรมาน"',
            zh: '🤕 滑倒事故：一位顾客在湿地板上滑倒（没有放置标志）。他们威胁要起诉要求支付医药费（5000美元）加上“痛苦赔偿”。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Deny Responsibility: "Watch where you are going. Not my fault."', th: '🛡️ ปฏิเสธความรับผิดชอบ: "ดูทางหน่อยสิ ไม่ใช่ความผิดฉัน"', zh: '🛡️ 否认责任：“走路看着点。不是我的错。”' }, consequence: { en: '💀 PR Nightmare + Lawsuit. They post photos of the bruise online. It goes viral. They sue and win $50k. Your insurance premium doubles.', th: '💀 ฝันร้าย PR + คดีความ เขาโพสต์รูปแผลช้ำออนไลน์ เป็นไวรัล เขาฟ้องและชนะ $50k เบี้ยประกันคุณเพิ่มสองเท่า', zh: '💀 公关噩梦+诉讼。他们在网上发布了瘀伤的照片。病毒式传播。他们起诉并赢得了5万美元。你的保费翻倍。' }, stats: { competence: 10, ethics: -10, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Settle Quickly: "Here is $5,000 cash and a $500 gift card. Please sign this waiver."', th: '🤝 ยอมความเร็ว: "นี่เงินสด $5,000 และบัตรของขวัญ $500 เซ็นใบสละสิทธิ์นี้ด้วย"', zh: '🤝 快速和解：“这是5000美元现金和500美元礼品卡。请签署这份弃权书。”' }, consequence: { en: '✅ Quiet Resolution. Expensive, but the problem goes away instantly. You learn to put up signs.', th: '✅ จบเงียบๆ แพงหน่อยแต่ปัญหาจบในทันที คุณเรียนรู้ที่จะตั้งป้ายเตือนแล้ว', zh: '✅ 安静解决。昂贵，但问题立即消失。你学会了放置标志。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '📑 Use Insurance: "File a formal claim with my liability provider. Let them handle it."', th: '📑 ใช้ประกัน: "ยื่นเรื่องเคลมกับบริษัทประกันของฉันเลย ให้เขาจัดการ"', zh: '📑 使用保险：“向我的责任险提供商提出正式索赔。让他们处理。”' }, consequence: { en: '🐢 Bureaucratic but Proper. That\'s what insurance is for. It takes months, but you don\'t pay out of pocket. Rates go up slightly.', th: '🐢 ช้าแต่ถูกต้อง นั่นคือหน้าที่ประกัน มันใช้เวลาหลายเดือนแต่คุณไม่ต้องควักเนื้อ เบี้ยเพิ่มนิดหน่อย', zh: '🐢 官僚但正当。这就是保险的作用。需要几个月，但你不用自掏腰包。费率略有上升。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 0 } },
            { id: 'D', text: { en: '🕵️ Investigate: Check CCTV. "I think you faked the fall."', th: '🕵️ สืบสวน: เช็คกล้องวงจรปิด "ฉันว่าคุณแกล้งล้มนะ"', zh: '🕵️ 调查：检查闭路电视。“我觉得你是假摔。”' }, consequence: { en: '🎲 High Risk. If they faked it, you win BIG. If they didn\'t, you look like a monster attacking a victim. Dangerous game.', th: '🎲 เสี่ยงสูง ถ้าเขาแกล้ง คุณชนะใสๆ ถ้าเขาเจ็บจริง คุณดูเหมือนปีศาจที่โจมตีเหยื่อ เกมอันตราย', zh: '🎲 高风险。如果他们假摔，你大获全胜。如果不是，你看起来像个攻击受害者的怪物。危险的游戏。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 20 } }
        ]
    },
    {
        id: 'me_021',
        text: {
            en: '🗯️ Review Extortion: A customer emails: "Send me 5 free products or I will leave 1-star reviews on Google, Yelp, and Facebook from my 5 different accounts."',
            th: '🗯️ ขู่กรรโชกรีวิว: ลูกค้าอีเมลมา: "ส่งของฟรี 5 ชิ้นมา ไม่งั้นฉันจะกด 1 ดาวใน Google, Yelp, และ Facebook จาก 5 บัญชี"',
            zh: '🗯️ 评论勒索：一位客户发邮件：“给我发5个免费产品，否则我会用我的5个不同账户在Google、Yelp和Facebook上留1星差评。”'
        },
        options: [
            { id: 'A', text: { en: '🤐 Send the products: "Fine. Just don\'t hurt my rating."', th: '🤐 ส่งของให้: "ก็ได้ อย่าทำลายคะแนนฉันก็พอ"', zh: '🤐 发送产品：“好吧。只要别毁了我的评分。”' }, consequence: { en: '📉 Enabled! They do it again next month. And they tell their friends. You are now a target for blackmail.', th: '📉 เคยตัว! เขาทำอีกเดือนหน้า แถมบอกเพื่อนด้วย ตอนนี้คุณเป็นเป้าหมายของการแบล็คเมล์', zh: '📉 纵容！他们下个月又这么干。并且告诉了朋友。你现在成了勒索的目标。' }, stats: { competence: 10, ethics: 20, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '📢 Public Shame: Post their email (redacted name) on your social media. "We don\'t negotiate with terrorists."', th: '📢 ประจาน: โพสต์อีเมลเขา (ปิดชื่อ) ลงโซเชียล "เราไม่เจรจากับผู้ก่อการร้าย"', zh: '📢 公开羞辱：在社交媒体上发布他们的邮件（隐去姓名）。“我们不与恐怖分子谈判。”' }, consequence: { en: '🔥 Viral Win. The internet loves justice. You get 500 5-star reviews from strangers to counter the attack. Bold move.', th: '🔥 ไวรัลชนะเลิศ ชาวเน็ตชอบความยุติธรรม คุณได้ 5 ดาว 500 ดวงจากคนแปลกหน้ามากลบการโจมตี กล้ามาก', zh: '🔥 病毒式胜利。互联网热爱正义。你得到500个陌生人的5星好评来反击。大胆的举动。' }, stats: { competence: 40, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '⚖️ Report to Platforms: Send the evidence to Google/Yelp Support.', th: '⚖️ รายงานแพลตฟอร์ม: ส่งหลักฐานให้ฝ่ายซัพพอร์ต Google/Yelp', zh: '⚖️ 向平台举报：将证据发送给Google/Yelp支持团队。' }, consequence: { en: '🐢 Slow Process. It takes 3 weeks. The bad reviews sit there for a while, damaging sales, but eventually get removed. Standard procedure.', th: '🐢 กระบวนการช้า ใช้เวลา 3 อาทิตย์ รีวิวแย่ๆ ค้างอยู่นานทำยอดตก แต่สุดท้ายก็โดนลบ ขั้นตอนมาตรฐาน', zh: '🐢 缓慢的过程。需要3周时间。差评在那挂了一段时间，损害了销售，但最终被删除了。标准程序。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🤷 Ignore: "Haters gonna hate. My real customers know the truth."', th: '🤷 เมินเฉย: "คนจะเกลียดก็เกลียดไป ลูกค้าตัวจริงรู้ความจริง"', zh: '🤷 忽视：“黑子总是会黑的。我真正的客户知道真相。”' }, consequence: { en: '😐 Rating Dip. Your rating drops from 4.8 to 4.4. It hurts SEO. Ignoring active malice is rarely a good strategy.', th: '😐 คะแนนตก เรตติ้งลดจาก 4.8 เป็น 4.4 กระทบ SEO การเมินเฉยต่อความประสงค์ร้ายไม่ใช่กลยุทธ์ที่ดี', zh: '😐 评分下降。你的评分从4.8降至4.4。伤害了SEO。忽视恶意的攻击很少是好策略。' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'me_022',
        text: {
            en: '📅 Expired Stock: You find a crate of premium olive oil that "expired" yesterday. It tastes perfectly fine. It cost you $2,000.',
            th: '📅 สินค้าหมดอายุ: คุณเจอลลังน้ำมันมะกอกพรีเมียมที่ "หมดอายุ" เมื่อวาน รสชาติยังดีเยี่ยม ต้นทุนตั้ง $2,000',
            zh: '📅 过期库存：你发现一箱优质橄榄油昨天“过期”了。味道完全没问题。你的成本是2000美元。'
        },
        options: [
            { id: 'A', text: { en: '🤫 Sell as normal: "Best by dates are just suggestions."', th: '🤫 ขายปกติ: "วันหมดอายุเป็นแค่คำแนะนำเฉยๆ"', zh: '🤫 照常出售：“最佳食用日期只是建议。”' }, consequence: { en: '⚠️ Hidden Risk. Most customers don\'t notice. One does. They post a photo. You look incompetent and greedy.', th: '⚠️ ความเสี่ยงซ่อนเร้น ลูกค้าส่วนใหญ่ไม่เห็น มีคนหนึ่งเห็น เขาโพสต์รูป คุณดูไร้ความสามารถและโลภ', zh: '⚠️ 隐患。大多数客户不会注意。但有一个注意到了。他们发了照片。你看起来既无能又贪婪。' }, stats: { competence: 20, ethics: -20, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🏷️ Discount Bin: "50% OFF - Past Best By Date - Still Good"', th: '🏷️ กระบะลดราคา: "ลด 50% - เลยวันควรบริโภค - ยังดีอยู่"', zh: '🏷️ 折扣箱：“半价 - 已过最佳食用日期 - 依然完好”' }, consequence: { en: '✅ Honest Recovery. You recover costs. Value-hunting customers love it. No deception implies trust.', th: '✅ กู้เงินแบบซื่อสัตย์ คุณได้ทุนคืน ลูกค้าสายประหยัดชอบ ไม่หลอกลวงแปลว่าไว้ใจได้', zh: '✅ 诚实的挽回。你收回了成本。追求性价比的客户很喜欢。没有欺骗意味着信任。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🎁 Donate to Staff: "Free oil for everyone! Take it home."', th: '🎁 บริจาคให้พนักงาน: "น้ำมันฟรีทุกคน! เอาไปกินที่บ้าน"', zh: '🎁 捐给员工：“大家都有免费油！带回家吧。”' }, consequence: { en: '❤️ Morale Boost. You lose the money, but staff love the perk. "Best boss ever."', th: '❤️ เพิ่มกำลังใจ คุณเสียเงิน แต่พนักงานรักสวัสดิการนี้ "เจ้านายดีที่สุด"', zh: '❤️ 士气大振。你损失了钱，但员工喜欢这福利。“史上最好的老板。”' }, stats: { competence: 30, ethics: 50, leadership: 60, innovation: 0 } },
            { id: 'D', text: { en: '🍽️ Use for Samples: Open them for in-store tasting with fresh bread', th: '🍽️ ใช้ชิมฟรี: เปิดให้ชิมในร้านคู่กับขนมปังอบใหม่', zh: '🍽️ 用作样品：打开它们供店内搭配新鲜面包试吃' }, consequence: { en: '📈 Upsell Tool. Smart! The oil sells OTHER products (bread, dip). You turn loss into marketing.', th: '📈 เครื่องมือขายพ่วง ฉลาด! น้ำมันช่วยขายสินค้า "อื่น" (ขนมปัง, ดิป) คุณเปลี่ยนการขาดทุนเป็นการตลาด', zh: '📈 追加销售工具。聪明！这油帮你卖出了“其他”产品（面包、蘸酱）。你变废为宝，把损失变成了营销。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 60 } }
        ]
    },
    {
        id: 'me_023',
        text: {
            en: '💸 Cash Flow Crisis: You need $20,000 for holiday stock. Banks rejected you (credit score issue). A "Private Lender" (Loan Shark) offers cash tomorrow at 20% monthly interest.',
            th: '💸 วิกฤตเงินหมุน: คุณต้องการ $20,000 สำหรับสต็อกวันหยุด ธนาคารปฏิเสธ (เครดิตไม่ดี) "ผู้ปล่อยกู้เอกชน" (เงินกู้นอกระบบ) เสนอเงินสดพรุ่งนี้ ดอกเบี้ย 20% ต่อเดือน',
            zh: '💸 现金流危机：你需要2万美元购买节日库存。银行拒绝了你（信用评分问题）。一个“私人放贷人”（高利贷）提议明天给现金，月息20%。'
        },
        options: [
            { id: 'A', text: { en: '✒️ Sign the deal: "I\'ll make enough profit to pay it back in 30 days. Easy."', th: '✒️ เซ็นสัญญา: "ฉันจะทำกำไรพอคืนเขาใน 30 วัน สบายมาก"', zh: '✒️ 签协议：“我会赚足够的利润在30天内还清。很容易。”' }, consequence: { en: '😱 Debt Trap. Sales are slower than expected. You can\'t pay. Interest compounds. Two months later you owe $35k. They break your window.', th: '😱 กับดักหนี้ ยอดขายช้ากว่าที่คิด คุณจ่ายไม่ไหว ดอกทบต้น สองเดือนต่อมาคุณเป็นหนี้ $35k เขามาทุบกระจกร้าน', zh: '😱 债务陷阱。销售比预期的慢。你还不起。利息复利。两个月后你欠了3.5万美元。他们砸了你的窗户。' }, stats: { competence: 10, ethics: 10, leadership: -20, innovation: 0 } },
            { id: 'B', text: { en: '📉 Shrink the Order: "Buy only what we can afford ($5k). Minimize risk."', th: '📉 ลดออเดอร์: "ซื้อเท่าที่ไหว ($5k) ลดความเสี่ยง"', zh: '📉 缩减订单：“只买我们要买得起的（5000美元）。最小化风险。”' }, consequence: { en: '🛡️ Safety First. You run out of stock early and miss potential profit. But you survive with zero stress. Prudent.', th: '🛡️ ปลอดภัยไว้ก่อน ของหมดเร็วและพลาดยอดกำไร แต่คุณรอดโดยไม่เครียด รอบคอบ', zh: '🛡️ 安全第一。你早早断货，错过了潜在利润。但你零压力生存了下来。谨慎。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '👪 Family & Friends: "Ask Uncle Bob. Swallow your pride."', th: '👪 ครอบครัวและเพื่อน: "ขอยืมลุงบ็อบ กลืนศักดิ์ศรีลงคอไป"', zh: '👪 家人和朋友：“问问鲍勃叔叔。放下你的自尊。”' }, consequence: { en: '🤝 Relationship Capital. Bob lends it at 0%. You pay him back with a nice gift. Keeping money in the circle is smart if you honor it.', th: '🤝 ทุนความสัมพันธ์ ลุงบ็อบให้ยืม 0% คุณคืนเขาพร้อมของขวัญสวยๆ การหมุนเงินในวงจรเป็นเรื่องฉลาดถ้าคุณรักษาคำพูด', zh: '🤝 关系资本。鲍勃以0%借给你。你还钱时送了一份精美礼物。如果你信守承诺，在圈子里周转资金是明智的。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'D', text: { en: '🎫 Pre-Sales: "Launch a \'Pre-order & Save 20%\' campaign to raise the cash from customers."', th: '🎫 ขายล่วงหน้า: "จัดแคมเปญ \'สั่งล่วงหน้าลด 20%\' เพื่อระดมเงินจากลูกค้า"', zh: '🎫 预售：“发起‘预订省20%’活动，从客户那里筹集现金。”' }, consequence: { en: '🏆 Crowdfunding Win! You raise the $20k from sales before buying the goods. Zero debt. High innovation. Brilliant.', th: '🏆 ชนะด้วยระดมทุน! คุณได้เงิน $20k จากยอดขายก่อนซื้อของ หนี้ศูนย์ นวัตกรรมสูง สุดยอด', zh: '🏆 众筹胜利！你在买货之前通过销售筹集了2万美元。零债务。高创新。精彩。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 70 } }
        ]
    },
    {
        id: 'me_024',
        text: {
            en: '🎨 Family Business: Your brother (50% partner) wants to sell his terrible abstract art in the shop. It doesn\'t fit your brand and looks unprofessional.',
            th: '🎨 ธุรกิจครอบครัว: พี่ชายของคุณ (หุ้นส่วน 50%) ต้องการวางขายศิลปะนามธรรมสุดแย่ของเขาในร้าน มันไม่เข้ากับแบรนด์และดูไม่มืออาชีพ',
            zh: '🎨 家族企业：你的兄弟（50%合伙人）想在店里卖他糟糕的抽象画。这不符合你的品牌形象，看起来很不专业。'
        },
        options: [
            { id: 'A', text: { en: '🚫 Hard No: "This is a business, not a gallery. It looks bad. No."', th: '🚫 ปฏิเสธเสียงแข็ง: "นี่คือธุรกิจ ไม่ใช่แกลเลอรี่ มันดูแย่ ไม่"', zh: '🚫 坚决拒绝：“这是生意，不是画廊。这很难看。不行。”' }, consequence: { en: '💥 Conflict. He is offended. He stops putting effort into the shop. "If it\'s YOUR shop, YOU run it."', th: '💥 ขัดแย้ง เขาโกรธ เขาเลิกทุ่มเทให้ร้าน "ถ้าเป็นร้านแก แกก็ทำเองสิ"', zh: '💥 冲突。他被冒犯了。他不再为店铺出力。“如果是‘你的’店，‘你’来经营。”' }, stats: { competence: 40, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🖼️ The Dark Corner: "Sure, put it by the bathroom in the back."', th: '🖼️ มุมมืด: "ได้สิ เอาไปวางหน้าห้องน้ำข้างหลังนะ"', zh: '🖼️ 黑暗角落：“当然，把它放在后面厕所旁边。”' }, consequence: { en: '😐 Passive Aggressive. Customers laugh at it. Brother feels hidden but can\'t complain. Tension simmers.', th: '😐 ดื้อเงียบ ลูกค้าขำรูปนั้น พี่ชายรู้สึกโดนซ่อนแต่บ่นไม่ได้ ความตึงเครียดคุกรุ่น', zh: '😐 消极攻击。顾客对此大笑。兄弟觉得被藏起来了，但没法抱怨。紧张局势在酝酿。' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Honest Feedback + Pivot: "The art doesn\'t fit, but why don\'t we design a cool tote bag together using your colors?"', th: '🤝 วิจารณ์ตรงๆ + เปลี่ยนเรื่อง: "รูปไม่เข้าธีม แต่ทำไมเราไม่ช่วยกันออกแบบกระเป๋าผ้าเจ๋งๆ โดยใช้สีของนายล่ะ?"', zh: '🤝 诚实反馈+转型：“画不合适，但我们为什么不一起用你的配色设计一款很酷的帆布袋呢？”' }, consequence: { en: '✅ Creative Channeling. You validate his creativity but direct it into a sellable product. The tote bags become a bestseller!', th: '✅ เปลี่ยนทิศทางสร้างสรรค์ คุณยอมรับความคิดเขาแต่เบนเข็มไปสู่สินค้าที่ขายได้ กระเป๋าผ้ากลายเป็นสินค้าขายดี!', zh: '✅ 创意疏导。你认可他的创造力，但将其引导到可销售的产品上。帆布袋成了畅销品！' }, stats: { competence: 50, ethics: 50, leadership: 60, innovation: 50 } },
            { id: 'D', text: { en: '💰 Buy Him Out: "Clearly we have different visions. Let me buy your half of the shop."', th: '💰 ซื้อหุ้นคืน: "ชัดเจนว่าเรามองคนละภาพ ให้ฉันซื้อหุ้นครึ่งหนึ่งของนายเถอะ"', zh: '💰 买断他：“显然我们愿景不同。让我买下你那半店铺。”' }, consequence: { en: '⚖️ Major Split. Expensive and emotional. But you gain 100% control. Better to rip the band-aid off now.', th: '⚖️ แตกหักครั้งใหญ่ แพงและใช้อารมณ์ แต่คุณได้คุม 100% เจ็บแต่จบดีกว่ายืดเยื้อ', zh: '⚖️ 重大分裂。昂贵且伤感情。但你获得了100%的控制权。长痛不如短痛。' }, stats: { competence: 40, ethics: 30, leadership: 50, innovation: 20 } }
        ]
    },
    {
        id: 'me_025',
        text: {
            en: '🏙️ Gentrification: The neighborhood is changing. Rich hipsters are moving in. Your old, loyal working-class customers can\'t afford rent and are moving out. Your rent is going up 30%.',
            th: '🏙️ การเปลี่ยนแปลงย่าน: ย่านกำลังเปลี่ยน ฮิปสเตอร์รวยๆ ย้ายเข้ามา ลูกค้าชนชั้นแรงงานเก่าแก่ของคุณจ่ายค่าเช่าไม่ไหวและกำลังย้ายออก ค่าเช่าร้านคุณขึ้น 30%',
            zh: '🏙️ 绅士化：社区正在发生变化。富有的嬉皮士正在搬进来。原本忠诚的工薪阶层客户付不起房租，正在搬走。你的房租上涨了30%。'
        },
        options: [
            { id: 'A', text: { en: '✨ Go Premium: Rebrand, raise prices 50%, stock artisanal gluten-free goods. Chase the new money.', th: '✨ จับตลาดบน: รีแบรนด์ ขึ้นราคา 50% ขายของอาร์ทิซานกลูเตนฟรี ตามเงินก้อนใหม่ไป', zh: '✨以此走向高端：重塑品牌，涨价50%，储备手工无麸质商品。追逐新钱。' }, consequence: { en: '📈 Survival. You lose all your old friends, which hurts emotionally. But the business thrives financially. You adapted.', th: '📈 การอยู่รอด คุณเสียเพื่อนเก่าทั้งหมด ซึ่งเจ็บปวดทางใจ แต่ธุรกิจเติบโตทางการเงิน คุณปรับตัวได้', zh: '📈 生存。如果你失去了所有的老朋友，这在情感上是痛苦的。但在财务上生意兴隆。你适应了。' }, stats: { competence: 50, ethics: 20, leadership: 30, innovation: 40 } },
            { id: 'B', text: { en: '✊ Stay Authentic: "We serve the people." Keep prices low. Eat the rent increase.', th: '✊ ยืนหยัดของเดิม: "เรารับใช้ประชาชน" ตรึงราคาต่ำ ยอมแบกค่าเช่าที่เพิ่มขึ้น', zh: '✊ 保持本色：“我们为人民服务。”保持低价。自行消化房租上涨。' }, consequence: { en: '💀 Noble Death. You are a community hero until you go bankrupt in 6 months. You can\'t fight math.', th: '💀 การตายที่มีเกียรติ คุณเป็นฮีโร่ชุมชนจนกระทั่งเจ๊งใน 6 เดือน คุณเอาชนะคณิตศาสตร์ไม่ได้', zh: '💀 高尚的死亡。你是社区英雄，直到6个月后破产。你战胜不了数学。' }, stats: { competence: 20, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '⚖️ Hybrid Model: "Keep the basics cheap in the back, sell $8 lattes in the front." subsidized items.', th: '⚖️ โมเดลผสม: "ขายของพื้นฐานราคาถูกข้างหลัง ขายลาเต้แก้วละ $8 ข้างหน้า" เอาตัวหนึ่งมาอุดอีกตัว', zh: '⚖️ 混合模式：“后面卖便宜的基础商品，前面卖8美元的拿铁。”补贴商品。' }, consequence: { en: '✅ Robin Hood Strategy. The rich hipsters pay for the locals\' affordable eggs. Hard balance to strike, but genius if it works.', th: '✅ กลยุทธ์โรบินฮู้ด ฮิปสเตอร์รวยๆ จ่ายเงินช่วยค่าไข่ราคาถูกให้คนท้องถิ่น รักษาสมดุลยากแต่ถ้าทำได้คืออัจฉริยะ', zh: '✅ 罗宾汉策略。富有的嬉皮士为当地人的平价鸡蛋买单。很难取得平衡，但如果奏效就是天才。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 60 } },
            { id: 'D', text: { en: '🚚 Relocate: Move the shop to a cheaper neighborhood where your old customers went.', th: '🚚 ย้ายร้าน: ย้ายร้านไปย่านที่ถูกกว่าที่ลูกค้าเก่าของคุณย้ายไป', zh: '🚚 搬迁：把店搬到老客户去的更便宜的社区。' }, consequence: { en: '🔄 Reset. You keep your community, but you have to build a new shop from scratch. Lower revenue ceiling, but stable.', th: '🔄 เริ่มใหม่ คุณรักษาชุมชนไว้ได้ แต่ต้องสร้างร้านใหม่จากศูนย์ เพดานรายได้ต่ำลงแต่มั่นคง', zh: '🔄 重置。你保住了你的社区，但必须从头开始建立新店。收入上限降低，但稳定。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'me_026',
        text: {
            en: '💵 The Fake Bill: A customer pays with a very realistic $100 bill. You only notice it\'s fake after they leave. It\'s a lot of money for a small shop.',
            th: '💵 ธนบัตรปลอม: ลูกค้าจ่ายด้วยแบงก์ $100 ที่เหมือนจริงมาก คุณเพิ่งเห็นว่าปลอมหลังจากเขาไปแล้ว เงินจำนวนนี้เยอะมากสำหรับร้านเล็กๆ',
            zh: '💵 假钞：一位顾客用一张非常逼真的100美元钞票付款。这是在你这里是一大笔钱。他们在离开后你才发现是假的。'
        },
        options: [
            { id: 'A', text: { en: '🔄 Pass it on: "Give it to the next customer as change. Not my problem."', th: '🔄 ส่งต่อ: "ทอนให้ลูกค้าคนต่อไป ไม่ใช่ปัญหาของฉัน"', zh: '🔄 转手：“把它找给下一个顾客。这不是我的问题。”' }, consequence: { en: '💀 Caught. The next customer notices immediately. They call the police. You are investigated for distributing counterfeit money.', th: '💀 โดนจับได้ ลูกค้าคนถัดไปเห็นทันที เขาแจ้งตำรวจ คุณถูกสอบสวนฐานกระจายเงินปลอม', zh: '💀 被抓。下一位顾客立刻注意到了。他们报了警。你因散布假币受到调查。' }, stats: { competence: 10, ethics: -50, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '🖼️ Frame it: "Put it on the wall as a $100 lesson for staff to check bills."', th: '🖼️ ใส่กรอบ: "ติดผนังไว้เป็นบทเรียนราคา $100 ให้พนักงานเช็คเงิน"', zh: '🖼️ 裱起来：“把它挂在墙上，作为一个100美元的教训，提醒员工检查钞票。”' }, consequence: { en: '✅ Culture Win. It becomes a conversation starter. Staff become vigilant. You lose $100 but gain better security.', th: '✅ ชนะทางวัฒนธรรม มันกลายเป็นเรื่องคุย พนักงานตื่นตัวขึ้น คุณเสีย $100 แต่ได้ความปลอดภัยที่ดีขึ้น', zh: '✅ 文化胜利。它成了开场白。员工变得警惕。你损失了100美元，但获得了更好的安全性。' }, stats: { competence: 40, ethics: 40, leadership: 50, innovation: 20 } },
            { id: 'C', text: { en: '👮 Report it: "Turn it into the bank/police. Maybe they catch the guy."', th: '👮 แจ้งความ: "ส่งให้ธนาคาร/ตำรวจ เผื่อเขาจับคนทำได้"', zh: '👮 举报：“把它交给银行/警察。也许他们能抓到那个人。”' }, consequence: { en: '🛡️ Social Duty. You lose the money, but you did the right thing. The police thank you for the evidence.', th: '🛡️ หน้าที่สังคม คุณเสียเงิน แต่ทำสิ่งที่ถูกต้อง ตำรวจขอบคุณสำหรับหลักฐาน', zh: '🛡️ 社会责任。你损失了钱，但你做了正确的事。警察感谢你提供的证据。' }, stats: { competence: 30, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'D', text: { en: '💸 Deduct from Cashier: "It was on your shift. You pay for it."', th: '💸 หักเงินแคชเชียร์: "มันเกิดในกะคุณ คุณต้องรับผิดชอบ"', zh: '💸 扣收银员的钱：“这是在你值班时发生的。你来赔。”' }, consequence: { en: '📉 Morale Killer. It\'s legal (maybe), but your staff hates you. The cashier quits next week. Hiring a replacement costs $500.', th: '📉 ฆ่ากำลังใจ มันอาจถูกกฎหมาย (มั้ง) แต่พนักงานเกลียดคุณ แคชเชียร์ลาออกอาทิตย์หน้า จ้างคนใหม่แพงกว่า $500', zh: '📉 士气杀手。这可能合法，但你的员工恨你。收银员下周辞职。招聘替补要花500美元。' }, stats: { competence: 30, ethics: 10, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'me_027',
        text: {
            en: '🎄 Holiday Wars: It\'s December. You want to go all out with decorations for a specific religious holiday. Your partner worries it might alienate customers of other faiths.',
            th: '🎄 สงครามวันหยุด: เดือนธันวาคมแล้ว คุณอยากจัดเต็มกับการตกแต่งสำหรับวันหยุดทางศาสนาหนึ่ง หุ้นส่วนกังวลว่าจะทำให้ลูกค้าศาสนาอื่นรู้สึกแปลกแยก',
            zh: '🎄 节日战争：现在是12月。你想为一个特定的宗教节日全力装饰。你的合伙人担心这可能会疏远其他信仰的客户。'
        },
        options: [
            { id: 'A', text: { en: '🎅 Go All In: "It\'s my tradition! If they don\'t like it, they can shop elsewhere."', th: '🎅 จัดเต็ม: "นี่คือประเพณีของฉัน! ถ้าเขาไม่ชอบก็ไปซื้อร้านอื่น"', zh: '🎅 全力以赴：“这是我的传统！如果他们不喜欢，可以去别处买。”' }, consequence: { en: '⚖️ Polarization. Your core demographic loves it, but you lose 20% of diverse foot traffic. Sales are flat.', th: '⚖️ การแบ่งขั้ว ลูกค้าหลักชอบมาก แต่คุณเสียลูกค้าหลากหลายไป 20% ยอดขายทรงตัว', zh: '⚖️ 两极分化。你的核心客户喜欢它，但你失去了20%的多样化客流。销售持平。' }, stats: { competence: 30, ethics: 30, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '❄️ Generic Winter: "Snowflakes and penguins only. Keep it secular."', th: '❄️ ฤดูหนาวทั่วไป: "เอาแค่เกล็ดหิมะกับเพนกวินพอ ทำให้เป็นกลาง"', zh: '❄️ 通用冬季：“只有雪花和企鹅。保持世俗化。”' }, consequence: { en: '🛡️ Safe & Boring. Nobody is offended, but nobody is excited either. It\'s forgettable.', th: '🛡️ ปลอดภัยแต่น่าเบื่อ ไม่มีใครโกรธ แต่ก็ไม่มีใครตื่นเต้น มันน่าลืม', zh: '🛡️ 安全但无聊。没有人被冒犯，但也没有人感到兴奋。过目即忘。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🌍 Inclusive Mix: "Decorate for ALL holidays happening this month. A celebration of diversity!"', th: '🌍 รวมมิตร: "ตกแต่งสำหรับทุกวันหยุดในเดือนนี้เลย ฉลองความหลากหลาย!"', zh: '🌍 包容性混合：“为本月发生的所有节日装饰。庆祝多样性！”' }, consequence: { en: '✅ Community Hub. People love the inclusivity. You attract a wider crowd. Sales up 15%.', th: '✅ ศูนย์รวมชุมชน คนชอบความครอบคลุม คุณดึงดูดคนได้กว้างขึ้น ยอดขายเพิ่ม 15%', zh: '✅ 社区中心。人们喜欢这种包容性。你吸引了更广泛的人群。销售额增长15%。' }, stats: { competence: 50, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🚫 No Decor: "Save money on electricity and tinsel. Just product focus."', th: '🚫 ไม่ตกแต่ง: "ประหยัดค่าไฟและของประดับ โฟกัสแต่สินค้า"', zh: '🚫 不装饰：“省下电费和金属箔。只关注产品。”' }, consequence: { en: '📉 Scrooge Vibes. The shop looks cold and depressing compared to neighbors. Foot traffic down.', th: '📉 บรรยากาศขี้งก ร้านดูเย็นชาและหดหู่เมื่อเทียบกับร้านข้างๆ คนเข้าน้อยลง', zh: '📉 守财奴氛围。与邻居相比，店铺看起来冷清压抑。客流量下降。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'me_028',
        text: {
            en: '💔 Office Romance: Two of your best staff members were dating and just had a messy breakup. They are arguing in front of customers.',
            th: '💔 ความรักในที่ทำงาน: พนักงานมือดีสองคนของคุณเคยคบกันและเพิ่งเลิกกันไม่สวย พวกเขาทะเลาะกันต่อหน้าลูกค้า',
            zh: '💔 办公室恋情：你最好的两名员工在约会，刚经历了一场混乱的分手。他们在顾客面前争吵。'
        },
        options: [
            { id: 'A', text: { en: '👉 Fire them both: "Zero tolerance for drama."', th: '👉 ไล่ออกทั้งคู่: "ไม่ทนกับดราม่า"', zh: '👉 两者都开除：“对戏剧性事件零容忍。”' }, consequence: { en: '📉 Talent Drain. The shop is quiet, but you are short-staffed during busy season. Rookie move.', th: '📉 สมองไหล ร้านสงบลง แต่คนขาดช่วงหน้าขาย วิธีของมือใหม่', zh: '📉 人才流失。店里安静了，但你在旺季人手不足。菜鸟举动。' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '📆 Scheduling Tetris: "You two will never work the same shift again."', th: '📆 จัดตารางหลบ: "พวกเธอสองคนจะไม่ได้เข้ากะพร้อมกันอีก"', zh: '📆 排班俄罗斯方块：“你们两个再也不会上同一个班了。”' }, consequence: { en: '✅ Operational Fix. It\'s a headache for you to manage the roster, but you keep your best workers.', th: '✅ แก้ที่ระบบ จัดตารางยากหน่อยสำหรับคุณ แต่คุณรักษาคนเก่งไว้ได้', zh: '✅ 运营修复。管理名册让你头疼，但你留住了最好的工人。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🛋️ Therapy Session: "Sit down in my office. We are resolving this now."', th: '🛋️ จับเข่าคุย: "นั่งลงในห้องฉัน เราจะเคลียร์กันเดี๋ยวนี้"', zh: '🛋️ 治疗课程：“坐在我的办公室里。我们现在就解决这个问题。”' }, consequence: { en: '⚠️ Awkward. You are not a therapist. It gets weird. They both resent you interfering.', th: '⚠️ อึดอัด คุณไม่ใช่จิตแพทย์ บรรยากาศแปลกประหลาด ทั้งคู่ไม่พอใจที่คุณยุ่งเรื่องส่วนตัว', zh: '⚠️ 尴尬。你不是治疗师。变得很怪异。这种干涉让他们都怨恨你。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '👀 Ignore: "They are adults. Figure it out."', th: '👀 เมิน: "โตๆ กันแล้ว ไปจัดการกันเอง"', zh: '👀 忽视：“他们是成年人。自己解决。”' }, consequence: { en: '💥 Explosion. One throws a shoe at the other. Customers record it. Viral video embarrasment.', th: '💥 ระเบิดลง อีกคนปารองเท้าใส่อีกคน ลูกค้าถ่ายคลิปทัน วิดีโอไวรัลน่าอาย', zh: '💥 爆炸。一个朝另一个扔鞋子。顾客录了下来。病毒视频让人尴尬。' }, stats: { competence: 10, ethics: 10, leadership: -10, innovation: 0 } }
        ]
    },
    {
        id: 'me_029',
        text: {
            en: '📧 The Reply-All Oops: You meant to BCC your 500 loyal customers about a sale, but you CC\'d them. Everyone can see everyone\'s email. Privacy breach.',
            th: '📧 พลาดส่งอีเมลผิด: คุณตั้งใจ BCC ลูกค้าประจำ 500 คนเรื่องโปรโมชั่น แต่ดันกด CC ทุกคนเห็นอีเมลของทุกคน ข้อมูลรั่วไหล',
            zh: '📧 “全回复”乌龙：你想密送500名忠实客户促销信息，但用了抄送。每个人都能看到每个人的邮箱。隐私泄露。'
        },
        options: [
            { id: 'A', text: { en: '🤫 Do nothing: "Maybe they won\'t notice."', th: '🤫 อยู่เฉยๆ: "เขาอาจจะไม่ทันสังเกตมั้ง"', zh: '🤫 什么也不做：“也许他们不会注意到。”' }, consequence: { en: '💀 Trust Erosion. They notice. Someone replies all: "Remove me!" Spammers scrape the list. Customers hate you.', th: '💀 ความเชื่อใจพัง เขาเห็น มีคนกดตอบกลับทุกคน: "ลบฉันออกซะ!" สแปมเอาเมลไปใช้ ลูกค้าเกลียดคุณ', zh: '💀 信任受损。他们注意到了。有人回复所有人：“把我移除！”垃圾邮件发送者抓取了列表。客户通过这事恨你。' }, stats: { competence: 10, ethics: 10, leadership: -10, innovation: 0 } },
            { id: 'B', text: { en: '🎁 Apology + Coupon: "We messed up. Here is a $10 coupon to say sorry."', th: '🎁 ขอโทษ + คูปอง: "เราพลาดไป นี่คูปอง $10 เป็นคำขอโทษ"', zh: '🎁 道歉+优惠券：“我们搞砸了。这是一张10美元的优惠券以示歉意。”' }, consequence: { en: '✅ Recovery. Expensive ($5,000 potential cost), but people forgive honest mistakes if paid for.', th: '✅ กู้สถานการณ์ แพงหน่อย (อาจถึง $5,000) แต่คนให้อภัยความผิดพลาดที่ซื่อสัตย์ถ้ามีการชดเชย', zh: '✅ 恢复。昂贵（潜在成本5000美元），但如果得到补偿，人们会原谅诚实的错误。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🤥 "We were hacked": Blame a fictional virus.', th: '🤥 "เราโดนแฮ็ก": โทษไวรัสที่ไม่มีจริง', zh: '🤥 “我们被黑了”：归咎于虚构的病毒。' }, consequence: { en: '📉 Lie Detected. Tech-savvy customers know that\'s not how hacks work. You look like a liar.', th: '📉 จับโกหกได้ ลูกค้าสายเทครู้ว่าแฮ็กไม่ได้ทำงานแบบนั้น คุณดูเหมือนคนโกหก', zh: '📉 谎言被拆穿。精通技术的客户知道黑客不是那样运作的。你看起来像个骗子。' }, stats: { competence: 20, ethics: -10, leadership: -20, innovation: 0 } },
            { id: 'D', text: { en: '🔙 Recall Email: Try to use the "Recall" feature in Outlook.', th: '🔙 เรียกคืนอีเมล: พยายามใช้ฟีเจอร์ "Recall" ใน Outlook', zh: '🔙 撤回邮件：尝试使用Outlook中的“撤回”功能。' }, consequence: { en: '😂 Tech Fail. It rarely works on external emails. It just sends a second email highlighting the mistake. Embarrassing.', th: '😂 เทคโนโลยีล้มเหลว มันแทบใช้ไม่ได้กับเมลภายนอก มันแค่ส่งเมลฉบับที่สองไปย้ำเตือนความผิดพลาด น่าอาย', zh: '😂 技术失败。它很少对外发邮件起作用。它只是发送第二封邮件来强调这个错误。尴尬。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'me_030',
        text: {
            en: '📦 Subscription Pivot: A consultant suggests turning your shop\'s bestsellers into a monthly "Mystery Box" subscription. It requires new packaging logistics.',
            th: '📦 พลิกเป็นสมาชิกรายเดือน: ที่ปรึกษาแนะนำให้เอาสินค้าขายดีมาทำ "กล่องสุ่มรายเดือน" ต้องใช้ระบบบรรจุภัณฑ์ใหม่',
            zh: '📦 订阅转型：一位顾问建议将你店里的畅销品变成每月的“神秘盒”订阅。这需要新的包装物流。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Launch it: "Recurring revenue is the holy grail. Let\'s go!"', th: '🚀 ลุยเลย: "รายได้ประจำคือสุดยอดเป้าหมาย ไปกันเลย!"', zh: '🚀 推出它：“经常性收入是圣杯。走起！”' }, consequence: { en: '📈 Growth Unlock. It\'s hard work packing boxes, but your revenue becomes predictable and grows 20% in year one.', th: '📈 ปลดล็อกการเติบโต แพ็คของเหนื่อยหน่อย แต่รายได้คาดการณ์ได้และโต 20% ในปีแรก', zh: '📈 增长解锁。打包盒子很辛苦，但你的收入变得可预测，并在第一年增长了20%。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 60 } },
            { id: 'B', text: { en: '🐢 Too Complex: "We are a shop, not a warehouse. Stick to retail."', th: '🐢 ซับซ้อนไป: "เราคือร้านค้า ไม่ใช่โกดัง ขายปลีกต่อไป"', zh: '🐢 太复杂：“我们是一家商店，不是仓库。坚持零售。”' }, consequence: { en: '🔒 Status Quo. You miss the trend. A competitor does it and steals your customers. You stay stable but stagnant.', th: '🔒 คงเดิม คุณตกเทรนด์ คู่แข่งทำและแย่งลูกค้าไป คุณมั่นคงแต่ไม่โต', zh: '🔒 现状。你错过了趋势。竞争对手做了并抢走了你的客户。你保持稳定但停滞不前。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🧪 Small Pilot: "Offer it to 20 top customers first to test logistics."', th: '🧪 ทดลองเล็กๆ: "เสนอให้ลูกค้าท็อป 20 คนก่อนเพื่อลองระบบ"', zh: '🧪 小规模试点：“先提供给20位顶级客户以测试物流。”' }, consequence: { en: '✅ Smart Innovation. You find flaws in the shipping process early and fix them cheaply. Then you scale successfully.', th: '✅ นวัตกรรมฉลาด คุณเจอข้อผิดพลาดในการส่งเร็วและแก้ได้ถูกๆ จากนั้นขยายผลสำเร็จ', zh: '✅ 聪明的创新。你早早发现了运输过程中的缺陷并廉价地修复了它们。然后你成功扩展。' }, stats: { competence: 60, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '🤝 Outsource It: "Hire a fulfillment center to handle everything."', th: '🤝 จ้างทำ: "จ้างศูนย์กระจายสินค้าจัดการทุกอย่าง"', zh: '🤝 外包：“聘请履行中心处理一切。”' }, consequence: { en: '📉 Margin Killer. The center eats all your profit. You generate revenue but zero income. Bad math.', th: '📉 กินกำไรเรียบ ศูนย์กินกำไรคุณหมด คุณมีรายรับแต่ไม่มีรายได้ คณิตศาสตร์แย่', zh: '📉 利润杀手。中心吃掉了你所有的利润。你产生了收入但零收益。糟糕的算术。' }, stats: { competence: 20, ethics: 30, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'me_031',
        text: {
            en: '🎪 The Pop-Up: A fancy mall offers you a kiosk for 2 months during the holidays. Rent is high ($10k), but foot traffic is insane.',
            th: '🎪 ร้านป๊อปอัพ: ห้างหรูเสนอพื้นที่คีออสก์ 2 เดือนช่วงวันหยุด ค่าเช่าแพง ($10k) แต่คนเดินเยอะมหาศาล',
            zh: '🎪 快闪店：一家高档商场在假期为你提供为期2个月的售货亭。租金很高（1万美元），但客流量疯狂。'
        },
        options: [
            { id: 'A', text: { en: '🎲 Risk It: "High risk, high reward. We take the spot."', th: '🎲 เสี่ยงดู: "เสี่ยงสูง ผลตอบแทนสูง เอาก็เอา"', zh: '🎲 冒险一试：“高风险，高回报。我们要这个位置。”' }, consequence: { en: '🏆 Brand Explosion. You barely break even on cash, but thousands of new people see your brand. Post-holiday sales soar.', th: '🏆 แบรนด์ระเบิด คุณเกือบเท่าทุนที่เป็นตัวเงิน แต่คนใหม่ๆ พันคนเห็นแบรนด์คุณ ยอดขายหลังวันหยุดพุ่ง', zh: '🏆 品牌爆发。你在现金上勉强收支平衡，但成千上万的新人看到了你的品牌。节后销售额飙升。' }, stats: { competence: 40, ethics: 30, leadership: 50, innovation: 40 } },
            { id: 'B', text: { en: '🙅 Stay Home: "Focus on our flagship store. Save the $10k."', th: '🙅 อยู่ที่เดิม: "โฟกัสร้านหลักเราดีกว่า เก็บเงิน $10k ไว้"', zh: '🙅 待在家里：“专注于我们的旗舰店。省下那1万美元。”' }, consequence: { en: '🛡️ Conservative. You miss the new customers. Your competitor takes the spot and looks successful.', th: '🛡️ อนุรักษนิยม คุณพลาดลูกค้าใหม่ คู่แข่งมาเสียบแทนและดูประสบความสำเร็จ', zh: '🛡️ 保守。你错过了新客户。你的竞争对手占据了这个位置，看起来很成功。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Share the Spot: "Find a complementary brand to split rent/staffing."', th: '🤝 แชร์ที่กัน: "หาแบรนด์ที่เข้ากันได้มาหารค่าเช่า/ค่าคน"', zh: '🤝 共享位置：“找一个互补品牌分摊租金/人员。”' }, consequence: { en: '✅ Smart Collaboration. You pay half ($5k) and cross-pollinate customer bases. High profit margin.', th: '✅ ร่วมมือฉลาด จ่ายครึ่งเดียว ($5k) และแลกเปลี่ยนฐานลูกค้ากัน กำไรสูง', zh: '✅ 明智的合作。你付一半（5000美元）并交叉吸引客户群。高利润率。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'D', text: { en: '📉 Bargain Hard: "Offer them revenue share instead of flat rent."', th: '📉 ต่อรองหนัก: "เสนอส่วนแบ่งรายได้แทนค่าเช่าตายตัว"', zh: '📉 强硬讨价还价：“向他们提供收入分成而不是固定租金。”' }, consequence: { en: '😐 Likely Reject. Malls like guaranteed rent. They give the spot to someone else. You tried.', th: '😐 น่าจะโดนปัด ห้างชอบค่าเช่าที่แน่นอน เขาให้ที่คนอื่น คุณพยายามแล้ว', zh: '😐 可能被拒。商场喜欢有保障的租金。他们把位置给了别人。你尽力了。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 20 } }
        ]
    },
    {
        id: 'me_032',
        text: {
            en: '🔨 Sabotage Rumors: Your window gets smashed. A witness says they saw the competitor\'s son do it. You have no video proof.',
            th: '🔨 ข่าวลือกลั่นแกล้ง: กระจกร้านคุณโดนทุบ พยานบอกเห็นลูกชายร้านคู่แข่งทำ คุณไม่มีวิดีโอหลักฐาน',
            zh: '🔨 蓄意破坏传闻：你的窗户被砸了。一名目击者说看到竞争对手的儿子干的。你没有视频证据。'
        },
        options: [
            { id: 'A', text: { en: '⚔️ Retaliate: "An eye for an eye. Break their window."', th: '⚔️ เอาคืน: "ตาต่อตาฟันต่อฟัน ไปทุบกระจกมันบ้าง"', zh: '⚔️ 报复：“以眼还眼。砸他们的窗户。”' }, consequence: { en: '💀 Criminal Escalation. You get caught on camera. You go to jail. Game over.', th: '💀 อาชญากรรมบานปลาย คุณโดนกล้องจับได้ เข้าคุก จบเกม', zh: '💀 犯罪升级。你被监控拍到了。你进监狱。游戏结束。' }, stats: { competence: 10, ethics: -100, leadership: -50, innovation: 0 } },
            { id: 'B', text: { en: '👮 Police Report: "Report the vandalism and the witness statement."', th: '👮 แจ้งตำรวจ: "แจ้งความเรื่องทำลายทรัพย์สินและคำให้การพยาน"', zh: '👮 报警：“报告破坏行为和证人证词。”' }, consequence: { en: '✅ Formal Process. Police question the son. He confesses. The competitor pays for damages out of shame.', th: '✅ กระบวนการทางการ ตำรวจสอบปากคำลูกชาย เขาสารภาพ คู่แข่งจ่ายค่าเสียหายด้วยความอับอาย', zh: '✅ 正式程序。警察讯问那个儿子。他招供了。竞争对手出于羞愧赔偿损失。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🗣️ Confront Parent: "Walk over and talk to the competitor owner directly."', th: '🗣️ คุยกับพ่อแม่: "เดินไปคุยกับเจ้าของร้านคู่แข่งตรงๆ"', zh: '🗣️ 与家长对质：“走过去直接跟竞争对手老板谈。”' }, consequence: { en: '🤝 High Road. The owner didn\'t know. They are horrified and pay you immediately plus apologize. Rivalry cooled.', th: '🤝 ทางของผู้เจริญ เจ้าของไม่รู้เรื่อง เขาตกใจมากและจ่ายเงินทันทีพร้อมขอโทษ ความบาดหมางลดลง', zh: '🤝 高姿态。老板并不知情。他们很震惊，立即赔付并道歉。竞争降温。' }, stats: { competence: 50, ethics: 60, leadership: 60, innovation: 0 } },
            { id: 'D', text: { en: '📢 Post on Facebook: "Competitor attacks us! Boycott them!"', th: '📢 โพสต์เฟซ: "คู่แข่งโจมตีเรา! แบนมัน!"', zh: '📢 在Facebook上发帖：“竞争对手攻击我们！抵制他们！”' }, consequence: { en: '📉 Messy drama. The town gets divided. Some believe you, some think you are making it up. Toxic environment.', th: '📉 ดราม่าเละเทะ เมืองแตกเป็นสองฝ่าย บางคนเชื่อ บางคนคิดว่าคุณสร้างเรื่อง สภาพแวดล้อมเป็นพิษ', zh: '📉 混乱的戏剧。小镇分裂了。有人相信你，有人认为你在编造。有毒的环境。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } }
        ]
    },
    {
        id: 'me_033',
        text: {
            en: '🌱 Eco Transition: Customers are asking for plastic-free packaging. Changing everything to biodegradable wrappers will cost $10,000 upfront and 10% more per item.',
            th: '🌱 เปลี่ยนสู่รักษ์โลก: ลูกค้าเรียกร้องบรรจุภัณฑ์ไร้พลาสติก การเปลี่ยนทุกอย่างเป็นย่อยสลายได้ต้องใช้เงิน $10,000 ก้อนแรกและแพงขึ้น 10% ต่อชิ้น',
            zh: '🌱 环保转型：客户要求无塑料包装。将一切改为可生物降解包装需要预付1万美元，且每件商品成本增加10%。'
        },
        options: [
            { id: 'A', text: { en: '✅ Do it & Absorb Cost: "It\'s the right thing to do. We eat the margin."', th: '✅ ทำเลย & แบกรับต้นทุน: "มันเป็นสิ่งที่ถูกต้อง ยอมกำไรหด"', zh: '✅ 做并自行承担成本：“这是正确的事。我们牺牲利润。”' }, consequence: { en: '❤️ Goodwill but Poor. Customers are happy, but you are barely profitable. Sustainable planet, unsustainable business.', th: '❤️ ได้ใจแต่จน ลูกค้าแฮปปี้ แต่คุณแทบไม่มีกำไร โลกยั่งยืนแต่ธุรกิจไม่ยั่งยืน', zh: '❤️ 商誉虽好但贫穷。客户很高兴，但你勉强盈利。可持续的地球，不可持续的生意。' }, stats: { competence: 30, ethics: 80, leadership: 40, innovation: 30 } },
            { id: 'B', text: { en: '💰 Do it & Raise Prices: "Green tax. Charge customers $0.50 extra for eco-packaging."', th: '💰 ทำ & ขึ้นราคา: "ภาษีสีเขียว คิดลูกค้าเพิ่ม $0.50 ค่าห่อรักษ์โลก"', zh: '💰 做并涨价：“绿色税。向客户额外收取0.50美元的环保包装费。”' }, consequence: { en: '📈 Market Accepted. Most customers are hypothetical eco-warriors but pay usually. Some complain, most stay.', th: '📈 ตลาดยอมรับ ลูกค้าส่วนใหญ่เป็นนักรบสิ่งแวดล้อมทางทฤษฎีแต่ก็ยอมจ่าย มีบ่นบ้างแต่ส่วนใหญ่อยู่ต่อ', zh: '📈 市场接受。大多数客户是假设的环保战士，但通常会买单。有些人抱怨，大多数留下了。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'C', text: { en: '🐢 Greenwashing: "Just change the color to brown/green to look organic. Keep using plastic."', th: '🐢 ฟอกเขียว: "แค่เปลี่ยนสีเป็นน้ำตาล/เขียวให้ดูออร์แกนิค ใช้พลาสติกต่อไป"', zh: '🐢 漂绿：“只把颜色改成棕色/绿色看起来像有机的。继续用塑料。”' }, consequence: { en: '💀 Exposed. A blogger does a breakdown test. You are exposed as a fraud. Huge reputation hit.', th: '💀 โดนแฉ บล็อกเกอร์เอาไปทดสอบย่อยสลาย คุณถูกประจานว่าหลอกลวง ชื่อเสียงพังยับ', zh: '💀 曝光。一个博主做了分解测试。你被揭穿是骗子。声誉遭受重创。' }, stats: { competence: 20, ethics: -60, leadership: -20, innovation: 10 } },
            { id: 'D', text: { en: '🆕 Optional: "Standard plastic is free. Eco-wrapping is +$1. Let them choose."', th: '🆕 ทางเลือก: "พลาสติกปกติฟรี ห่อรักษ์โลก +$1 ให้เขาเลือกเอง"', zh: '🆕 可选：“标准塑料免费。环保包装加1美元。让他们选择。”' }, consequence: { en: '🧠 Behavioral Econ Win. People feel good having the choice. 30% choose eco, paying for the inventory. Smart.', th: '🧠 ชนะใจเศรษฐศาสตร์พฤติกรรม คนรู้สึกดีที่ได้เลือก 30% เลือกช่วยโลกและจ่ายค่าของให้คุณ ฉลาด', zh: '🧠 行为经济学胜利。人们感觉有选择权很好。30%选择了环保，支付了库存费用。聪明。' }, stats: { competence: 60, ethics: 40, leadership: 30, innovation: 50 } }
        ]
    },
    {
        id: 'me_034',
        text: {
            en: '🎗️ Charity Pressure: A prominent local charity demands you sponsor their gala for $2,000. They imply that "businesses who don\'t support us tend to lose local favor."',
            th: '🎗️ แรงกดดันการกุศล: องค์กรการกุศลดังในท้องถิ่นขอให้คุณเป็นสปอนเซอร์งานกาล่า $2,000 เขาเปรยว่า "ธุรกิจที่ไม่ช่วยมักจะเสียความนิยมนะ"',
            zh: '🎗️ 慈善压力：一家著名的当地慈善机构要求你赞助他们的晚会2000美元。他们暗示“不支持我们的企业往往会失去当地的好感。”'
        },
        options: [
            { id: 'A', text: { en: '💸 Pay Protection Money: "Fine. Just keep my name good."', th: '💸 จ่ายค่าคุ้มครอง: "ก็ได้ รักษาชื่อฉันให้ดีละกัน"', zh: '💸 支付保护费：“好吧。保持我的名声就好。”' }, consequence: { en: '😐 Expensive Safety. You pay. Nothing happens. You feel extorted.', th: '😐 ความปลอดภัยราคาแพง จ่ายไป ไม่มีอะไรเกิดขึ้น รู้สึกเหมือนโดนรีดไถ', zh: '😐 昂贵的安全。你付了钱。什么也没发生。你感觉被勒索了。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🎁 In-Kind Donation: "I can\'t give cash, but I\'ll donate $3,000 worth of product for the auction."', th: '🎁 บริจาคของ: "ให้เงินสดไม่ได้ แต่ฉันจะบริจาคสินค้ามูลค่า $3,000 ให้ประมูล"', zh: '🎁 实物捐赠：“我不能给现金，但我会为拍卖捐赠价值3000美元的产品。”' }, consequence: { en: '✅ Smart Giving. Costs you only $1,000 (at cost price) but looks like $3,000. Promoting your product at the gala.', th: '✅ การให้ที่ฉลาด ต้นทุนจริงแค่ $1,000 แต่ดูเหมือน $3,000 โปรโมทสินค้าในในงานด้วย', zh: '✅ 明智的给予。这只花费你1000美元（成本价）但看起来像3000美元。在晚会上推广你的产品。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 30 } },
            { id: 'C', text: { en: '🚫 Refuse: "I don\'t respond to threats. Get out."', th: '🚫 ปฏิเสธ: "ฉันไม่ตอบสนองต่อคำขู่ ออกไป"', zh: '🚫 拒绝：“我不回应威胁。滚出去。”' }, consequence: { en: '📉 Rumors start. "That shop owner hates orphans." It harms traffic slightly. Unnecessary battle.', th: '📉 ข่าวลือเริ่ม "เจ้าของร้านนั้นเกลียดเด็กกำพร้า" คนเข้าน้อยลงนิดหน่อย สงครามที่ไม่จำเป็น', zh: '📉 谣言四起。“那个店主讨厌孤儿。”这轻微伤害了客流。不必要的战斗。' }, stats: { competence: 20, ethics: 30, leadership: 40, innovation: 0 } },
            { id: 'D', text: { en: '🤝 Volunteer Instead: "My team will volunteer to set up the event."', th: '🤝 เป็นอาสาสมัครแทน: "ทีมฉันจะไปช่วยจัดงานให้ฟรี"', zh: '🤝 改为志愿者：“我的团队将志愿协助布置活动。”' }, consequence: { en: '❤️ Sweat Equity. Good PR. But your staff hates working on the weekend for free. Morale dip.', th: '❤️ ลงแรงแทนเงิน PR ดี แต่ลูกน้องเกลียดการทำงานฟรีวันหยุด กำลังใจตก', zh: '❤️ 汗水资本。良好的公关。但你的员工讨厌周末免费工作。士气下降。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 10 } }
        ]
    },
    {
        id: 'me_035',
        text: {
            en: '🌟 Celebrity Visit: A B-list celebrity walks in. They love a $500 item. You think giving it to them for free might get you on their Instagram.',
            th: '🌟 ดารามาเยือน: ดาราเกรด B เดินเข้ามา เขาชอบของราคา $500 คุณคิดว่าถ้าให้ฟรีอาจจะได้ลง Instagram ของเขา',
            zh: '🌟 名人造访：一位B级名人走进来。他们喜欢一件500美元的商品。你觉得免费送给他们可能会让你出现在他们的Instagram上。'
        },
        options: [
            { id: 'A', text: { en: '🎁 Gift It: "Please enjoy! Tag us if you like!"', th: '🎁 ให้ฟรี: "เชิญรับไปเลย! แท็กเราด้วยนะถ้าชอบ!"', zh: '🎁 赠送：“请享用！如果喜欢请标记我们！”' }, consequence: { en: '🎲 50/50. They take it. They don\'t post anything. They thought you were just being nice. Lost $500.', th: '🎲 50/50 เขารับไป เขาไม่โพสต์อะไรเลย เขาคิดว่าคุณแค่ใจดีเฉยๆ เสียฟรี $500', zh: '🎲 50/50。他们拿走了。他们什么都没发。他们以为你只是人好。损失500美元。' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: 20 } },
            { id: 'B', text: { en: '📸 The Deal: "You can have it for free IF you post a story right now tagging us."', th: '📸 ยื่นข้อเสนอ: "เอาไปฟรีได้เลย ถ้าคุณโพสต์ลงสตอรี่แล้วแท็กเราเดี๋ยวนี้"', zh: '📸 交易：“只要你现在发个快拍标记我们，就可以免费拿走。”' }, consequence: { en: '✅ Contract. They agree. You get 5,000 views. 10 sales result. Worth it.', th: '✅ พันธสัญญา เขาตกลง คุณได้ยอดวิว 5,000 ได้ยอดขายตามมา 10 ชิ้น คุ้ม', zh: '✅ 合同。他们同意了。你获得了5000次观看。带来10笔销售。值得。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 40 } },
            { id: 'C', text: { en: '📸 Selfie Only: "Can I get a selfie with you?" (Charge full price)', th: '📸 ขอเซลฟี่: "ขอถ่ายรูปคู่หน่อยได้ไหมครับ?" (คิดราคาเต็ม)', zh: '📸 只自拍：“能跟您合个影吗？”（按全价收费）' }, consequence: { en: '🛡️ Safe Play. You get the money AND the content for your wall. Double win assuming they say yes.', th: '🛡️ เพลย์ปลอดภัย คุณได้เงิน และได้คอนเทนต์ติดผนังร้าน วินสองต่อถ้าเขายอมถ่าย', zh: '🛡️ 安全的做法。你既拿到了钱又得到了上墙的内容。只要他们答应就是双赢。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 20 } },
            { id: 'D', text: { en: '😐 Treat as Normal: "That will be $500, please."', th: '😐 ทำตัวปกติ: "ทั้งหมด $500 ครับ"', zh: '😐 正常对待：“一共500美元，谢谢。”' }, consequence: { en: '🎩 Classy. They respect that you didn\'t fawn over them. They become a regular paying customer.', th: '🎩 มีระดับ เขาเคารพที่คุณไม่ประจบ เขาเลยกลายเป็นลูกค้าประจำ', zh: '🎩 优雅。他们尊重你没有奉承他们。他们成了付费常客。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 0 } }
        ]
    },
    {
        id: 'me_036',
        text: {
            en: '🐕 The Shop Dog: A customer brings a "service dog" that clearly isn\'t one. It knocks over a display of expensive vases, breaking 3 of them ($1,200 loss).',
            th: '🐕 สุนัขในร้าน: ลูกค้าพาสุนัขที่อ้างว่าเป็น "สุนัขบริการ" แต่ดูแล้วไม่ใช่ มันทำชั้นวางแจกันพรีเมียมล้ม แตกไป 3 ใบ (เสียหาย $1,200)',
            zh: '🐕 店里的狗：一位顾客带了一只“服务犬”，但显然不是。它撞倒了昂贵花瓶的展台，打破了3个（损失1200美元）。'
        },
        options: [
            { id: 'A', text: { en: '🗯️ Demand Payment: "You broke it, you bought it. Pay the $1,200."', th: '🗯️ เรียกร้องค่าเสียหาย: "ทำแตกต้องจ่าย จ่ายมา $1,200"', zh: '🗯️ 要求赔偿：“谁弄坏谁买单。付1200美元。”' }, consequence: { en: '💀 Viral Video. They record you "attacking a service dog owner." The internet doesn\'t care about the vases. Your shop gets 1-star bombed.', th: '💀 วิดีโอไวรัล เขาถ่ายคุณตอน "โจมตีเจ้าของสุนัขบริการ" ชาวเน็ตไม่สนแจกันหรอก ร้านคุณโดนทัวร์ลง 1 ดาวรัวๆ', zh: '💀 病毒视频。他们录下了你“攻击服务犬主”的一幕。互联网不在乎花瓶。你的店被1星好评轰炸了。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '😇 Be Graceful: "It\'s okay, accidents happen. Please just be careful next time."', th: '😇 ใจดีเข้าสู้: "ไม่เป็นไรครับ อุบัติเหตุเกิดขึ้นได้ คราวหน้าระวังหน่อยนะ"', zh: '😇 宽宏大量：“没关系，意外总会发生。下次请小心。”' }, consequence: { en: '❤️ Community Hero. Other customers see your kindness and post about it. You lose $1,200 but gain $5,000 in free PR.', th: '❤️ ฮีโร่ชุมชน ลูกค้าคนอื่นเห็นความใจดีแล้วเอาไปโพสต์ชม คุณเสีย $1,200 แต่ได้ PR ฟรีมูลค่า $5,000', zh: '❤️ 社区英雄。其他顾客看到了你的善良并发布了相关内容。你损失了1200美元，但获得了价值5000美元的免费公关。' }, stats: { competence: 30, ethics: 60, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '🚫 Ban Pets: "From now on, NO animals allowed except verified service dogs."', th: '🚫 แบนสัตว์เลี้ยง: "นับจากนี้ ห้ามนำสัตว์เข้า ยกเว้นสุนัขบริการที่มีใบรับรอง"', zh: '🚫 禁止宠物：“从现在起，除非经过验证的服务犬，否则严禁动物进入。”' }, consequence: { en: '🛡️ Safe & Sterile. You prevent future breakage, but the shop feels less "neighborhood friendly." 5% drop in hipsters.', th: '🛡️ ปลอดภัยและสะอาด คุณป้องกันของแตกในอนาคตได้ แต่ร้านดูไม่เป็นมิตรเหมือนเดิม ฮิปสเตอร์หายไป 5%', zh: '🛡️ 安全无菌。你防止了未来的破损，但店铺感觉不再那么“亲民”。嬉皮士客户下降了5%。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🏢 Fine Print: Check if your insurance covers "Inventory Damage by Animals."', th: '🏢 เช็คประกัน: ลองดูว่าประกันคุ้มครอง "สินค้าเสียหายจากสัตว์" ไหม"', zh: '🏢 细则：检查你的保险是否涵盖“动物造成的库存损坏”。' }, consequence: { en: '✅ Professional. They cover 80%. You only lose $240. You handled it like a CEO.', th: '✅ มืออาชีพ ประกันจ่ายให้ 80% คุณเสียจริงแค่ $240 คุณจัดการได้สมเป็น CEO', zh: '✅ 专业。他们承担了80%。你只损失了240美元。你处理得像个CEO。' }, stats: { competence: 60, ethics: 40, leadership: 40, innovation: 10 } }
        ]
    },
    {
        id: 'me_037',
        text: {
            en: '🤳 The Influencer Return: An influencer with 1M followers wants to return a dress they wore for one photo. "It\'s still got the tags, and I gave you a shoutout!"',
            th: '🤳 การคืนของจากอินฟลู: อินฟลูเอนเซอร์ยอดฟอล 1 ล้านคนขอคืนชุดที่ใส่ถ่ายรูปไปแล้วครั้งหนึ่ง "ป้ายยังอยู่นะ แถมฉันยังลงโปรโมทให้เธอด้วย!"',
            zh: '🤳 网红退货：一位拥有100万粉丝的网红想退掉一件只穿过一次拍照片的裙子。“吊牌还在，而且我还帮你宣传了！”'
        },
        options: [
            { id: 'A', text: { en: '🚫 Refuse: "Once worn, it\'s used. No refunds."', th: '🚫 ปฏิเสธ: "ใส่แล้วคือของใช้แล้ว ไม่มีการคืนเงิน"', zh: '🚫 拒绝：“穿过就是旧的。恕不退款。”' }, consequence: { en: '📉 Petty Revenge. They post a story: "This shop is so rude!" You lose some Gen-Z traffic. But you kept your integrity.', th: '📉 โดนแก้แค้นเล็กๆ เขาลงสตอรี่: "ร้านนี้มารยาทแย่มาก!" คุณเสียลูกค้า Gen-Z ไปบ้าง แต่คุณรักษาความถูกต้องไว้ได้', zh: '📉 小人报复。他们发了快拍：“这家店太没礼貌了！”你失去了一些Z世代的客流。但你保持了正直。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Accept & Resell: "Fine. We will sell it as a \'Celebrity Pre-Owned\' item for 2x price."', th: '🤝 รับคืนแล้วขายใหม่: "ก็ได้ เราจะเอามาขายเป็น \'ของเคยใช้โดยดารา\' ในราคา 2 เท่า"', zh: '🤝 接受并转售：“好吧。我们将把它作为‘名人二手货’以2倍价格卖出。”' }, consequence: { en: '🏆 Marketing Genius. It sells in 2 hours. You turned a scammer into a profit center. Amazing.', th: '🏆 อัจฉริยะการตลาด ขายออกใน 2 ชั่วโมง คุณเปลี่ยนคนจะเนียนให้เป็นกำไรได้ สุดยอด', zh: '🏆 营销天才。它在2小时内就卖掉了。你把一个骗子变成了利润中心。太棒了。' }, stats: { competence: 60, ethics: 20, leadership: 40, innovation: 70 } },
            { id: 'C', text: { en: '😒 Credit Only: "No cash back, but here is a store credit for next time."', th: '😒 คืนเป็นเครดิต: "คืนเงินสดไม่ได้ แต่ให้เป็นเครดิตร้านสำหรับคราวหน้า"', zh: '😒 仅限代金券：“不退现金，但可以给你下次使用的店面代金券。”' }, consequence: { en: '😐 Compromise. They complain but take it. They never come back. You lose a potential (toxic) partner.', th: '😐 ประนีประนอม เขาบ่นแต่ก็รับไป แล้วไม่กลับมาอีกเลย คุณเสียพาร์ทเนอร์ (ที่มีนิสัยแย่) ไปคนหนึ่ง', zh: '😐 折中方案。他们虽有抱怨但还是接受了。他们再也没回来。你失去了一个潜在的（有毒）合作伙伴。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '📸 Leverage: "Sure, but only if you do a 5-minute Live Stream from inside the shop RIGHT NOW."', th: '📸 ขัดดอก: "ได้ แต่คุณต้องไลฟ์สดในร้านให้เรา 5 นาที... เดี๋ยวนี้เลย"', zh: '📸 利用：“当然可以，但前提是你要‘现在’在店里做一个5分钟的直播。”' }, consequence: { en: '📈 Viral Surge. The live stream brings in 50 customers in the next hour. You paid for a massive ad with one used dress.', th: '📈 คนทะลัก ไลฟ์สดทำให้มีลูกค้าเข้า 50 คนในชั่วโมงถัดมา คุณจ่ายค่าโฆษณามหาศาลด้วยชุดที่ใช้แล้วชุดเดียว', zh: '📈 病毒式增长。直播在接下来的一个小时内带来了50名顾客。你用一件旧裙子支付了一场巨大的广告风险。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 60 } }
        ]
    },
    {
        id: 'me_038',
        text: {
            en: '🧼 The Health Inspector: A health inspector finds a minor violation (expired fire extinguisher). They hint that for "a small gift of $200" they can look the other way.',
            th: '🧼 เจ้าหน้าที่สาธารณสุข: เจ้าหน้าที่พบข้อผิดพลาดเล็กน้อย (ถังดับเพลิงหมดอายุ) เขาเปรยว่าถ้ามี "ของขวัญเล็กน้อย $200" เขาจะแกล้งมองไม่เห็นให้',
            zh: '🧼 卫生检查员：一位卫生检查员发现了一个轻微违规（灭火器过期）。他们暗示只要给“200美元的小礼物”，他们可以视而不见。'
        },
        options: [
            { id: 'A', text: { en: '💰 Pay the bribe: "Safety first... through efficiency. Here is the cash."', th: '💰 จ่ายสินบน: "ปลอดภัยไว้ก่อน... แบบรัดกุม นี่ครับเงิน"', zh: '💰 支付贿赂：“安全第一……通过效率。这是现金。”' }, consequence: { en: '💀 Blackmail. They come back every month for another "gift." You are now a piggy bank for a corrupt official.', th: '💀 โดนแบล็คเมล์ เขามาทุกเดือนเพื่อขอ "ของขวัญ" อีก ตอนนี้คุณกลายเป็นกระปุกออมสินของข้าราชการกังฉินไปแล้ว', zh: '💀 勒索。他们以后每个月都会来要另一份“礼物”。你现在成了一个贪官的存钱罐。' }, stats: { competence: 20, ethics: -100, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🚫 Refuse & Report: "I don\'t do bribes. I will be reporting this to your supervisor."', th: '🚫 ปฏิเสธและแจ้งเบาะแส: "ฉันไม่จ่ายสินบน และจะรายงานเรื่องนี้ให้หัวหน้าคุณทราบ"', zh: '🚫 拒绝并举报：“我不受贿。我会向你的主管举报这件事。”' }, consequence: { en: '🛡️ Just Justice. They get fired. You get a gold star from the city. But the city now inspects you EXTRA carefully every week.', th: '🛡️ ยุติธรรม เขาโดนไล่ออก เมืองให้รางวัลคุณ แต่ตอนนี้เมืองจะมาตรวจร้านคุณ "ละเอียดเป็นพิเศษ" ทุกอาทิตย์', zh: '🛡️ 正义伸张。他们被解雇了。你得到了市里的嘉奖。但现在市里每周都会“格外仔细”地检查你。' }, stats: { competence: 40, ethics: 90, leadership: 50, innovation: 0 } },
            { id: 'C', text: { en: '🛠️ Fix it NOW: "Give me 10 minutes. I\'m buying a new one at the hardware store next door."', th: '🛠️ แก้เดี๋ยวนี้: "ขอเวลา 10 นาที ผมจะไปซื้ออันใหม่ที่ร้านข้างๆ มาเปลี่ยนเดี๋ยวนี้เลย"', zh: '🛠️ 立即修理：“给我10分钟。我去隔壁五金店买个新的。”' }, consequence: { en: '✅ Proactive Compliance. They can\'t cite you if it\'s fixed during inspection. You saved $200 and kept your record clean.', th: '✅ ปฏิบัติตามอย่างกระตือรือร้น เขาเอาผิดคุณไม่ได้ถ้าคุณแก้ทันที คุณประหยัด $200 และประวัติยังคลีน', zh: '✅ 积极合规。如果在检查期间修复，他们就不能传唤你。你节省了200美元，并保持了干净的记录。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🤷 Take the fine: "Write the ticket. I\'ll pay the city official fee ($500)."', th: '🤷 ยอมโดนปรับ: "เขียนใบสั่งมาเลย ผมจะไปจ่ายค่าปรับเข้ารัฐเอง ($500)"', zh: '🤷 接受罚款：“开票吧。我会支付500美元的官方罚款。”' }, consequence: { en: '😐 Expensive Integrity. You followed the law, but it cost you $500 plus a mark on your record. Painful but honest.', th: '😐 ความซื่อสัตย์ราคาแพง คุณทำตามกฎหมายแต่มันเสียเงิน $500 แถมมีประวัติด่างพร้อย เจ็บแต่จริงใจ', zh: '😐 昂贵的诚信。你遵守了法律，但损失了500美元，而且记录上留下了污点。痛苦但诚实。' }, stats: { competence: 40, ethics: 70, leadership: 30, innovation: 0 } }
        ]
    },
    {
        id: 'me_039',
        text: {
            en: '🏥 The Staff Shortage: Three staff members catch the flu. You are the only one left. You have a massive delivery arriving today.',
            th: '🏥 คนไม่พอ: พนักงาน 3 คนติดไข้หวัดใหญ่ เหลือคุณคนเดียว แถมวันนี้มีของล็อตใหญ่มาส่งด้วย',
            zh: '🏥 人手短缺：三名员工得了流感。只剩下你一个人了。你今天有一大批货到。'
        },
        options: [
            { id: 'A', text: { en: '💪 Solo Grunt: "I\'ll do it all myself. 18-hour shift, let\'s go."', th: '💪 ลุยเดี่ยว: "ฉันจะทำเองทุกอย่าง เข้ากะ 18 ชั่วโมง ลุย!"', zh: '💪 独自苦干：“我一个人包了。18小时轮班，开始吧。”' }, consequence: { en: '📉 Burnout. You stock the shelves, but you are so tired you drop a box of electronics. You crash for 2 days after. Productivity zero.', th: '📉 หมดไฟ คุณจัดของขึ้นชั้นได้ แต่เหนื่อยจนทำกล่องเครื่องใช้ไฟฟ้าหล่น หลังจากนั้นคุณสลบไป 2 วัน ประสิทธิภาพเป็นศูนย์', zh: '📉 耗尽。你把货架摆好了，但你太累了，摔坏了一箱电子产品。之后你倒下了2天。生产力为零。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🔒 Close Shop: "We are closed today. Staff health is priority."', th: '🔒 ปิดร้าน: "วันนี้ปิดร้าน สุขภาพพนักงานสำคัญที่สุด"', zh: '🔒 关门： “今天暂停营业。员工健康是首要任务。”' }, consequence: { en: '❤️ Staff Loyalty. They feel supported. But you lose $3,000 in revenue. A high price for kindness.', th: '❤️ พนักงานภักดี พวกเขารู้สึกได้รับการดูแล แต่คุณเสียรายได้ไป $3,000 ราคาแพงสำหรับความใจดี', zh: '❤️ 员工忠诚。他们感到了支持。但你损失了3000美元的收入。仁慈的代价很高。' }, stats: { competence: 20, ethics: 60, leadership: 70, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Gig Economy: "Hire 2 temporary workers from a task app for the day."', th: '🤝 จ้างชั่วคราว: "จ้างคนงานชั่วคราว 2 คนจากแอปมารับงานเฉพาะกิจ"', zh: '🤝 零工经济：“从任务APP上雇两个临时工干一天。”' }, consequence: { en: '✅ Strategic Move. You pay $200, the work gets done, and the shop stays open. You spent money to save money.', th: '✅ แผนที่ฉลาด จ่าย $200 งานเสร็จ ร้านเปิดได้ คุณยอมเสียเงินเพื่อรักษาเงิน', zh: '✅ 战略举措。你付了200美元，工作完成了，店面照常营业。你花钱是为了省钱。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 50 } },
            { id: 'D', text: { en: '📢 Customer Help: "Post on Facebook: Free coffee/donuts for any regular who helps me unload this truck!"', th: '📢 ขอแรงลูกค้า: "โพสต์เฟซ: ขอกาแฟ/โดนัทฟรี สำหรับลูกค้าประจำที่มาช่วยลงของจากรถ!"', zh: '📢 寻求顾客帮助：“在Facebook上发帖：任何帮我卸货的熟客都能获得免费咖啡/甜甜圈！”' }, consequence: { en: '🔥 Community Event. 10 people show up! The truck is empty in 20 mins. It becomes a fun party. Huge brand building.', th: '🔥 งานรวมใจชุมชน คนมาตั้ง 10 คน! ลงของเสร็จใน 20 นาที กลายเป็นปาร์ตี้สนุกๆ สร้างแบรนด์ได้มหาศาล', zh: '🔥 社区活动。居然来了10个人！卡车在20分钟内就卸完了。这成了一个有趣的派对。巨大的品牌建设。' }, stats: { competence: 40, ethics: 50, leadership: 60, innovation: 60 } }
        ]
    },
    {
        id: 'me_040',
        text: {
            en: '🕵️ Competitive Intel: A disgruntled ex-employee of your biggest rival offers you their "Top 100 Customer List" for $1,000.',
            th: '🕵️ ข้อมูลคู่แข่ง: อดีตพนักงานที่โกรธแค้นของคู่แข่งรายใหญ่ เสนอขาย "รายชื่อลูกค้าท็อป 100" ให้คุณในราคา $1,000',
            zh: '🕵️ 竞争对手情报：你最大对手的一名愤愤不平的前员工向你提供他们的“前100名客户名单”，要价1000美元。'
        },
        options: [
            { id: 'A', text: { en: '💰 Buy it: "All is fair in love and retail. Take the cash."', th: '💰 ซื้อเลย: "ในสนามธุรกิจ ทุกอย่างคือเรื่องยุติธรรม เอาเงินไป"', zh: '💰 买下它：“在爱情和零售业中，一切都是公平的。拿走现金。”' }, consequence: { en: '📉 Legal Trouble. The rival finds out when you mail their customers. They sue you for Trade Secret theft. Legal fees: $10k.', th: '📉 ปัญหาทางกฎหมาย คู่แข่งรู้เข้าตอนที่คุณส่งจดหมายไปหาลูกค้าเขา เขาฟ้องคุณฐานขโมยความลับทางการค้า ค่าทนาย $10k', zh: '📉 法律麻烦。当你给他们的客户发邮件时，对手发现了。他们起诉你盗取商业机密。律师费：1万美元。' }, stats: { competence: 20, ethics: -80, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🙅 Decline: "I win on my own merits, not by stealing data."', th: '🙅 ปฏิเสธ: "ฉันชนะด้วยความสามารถ ไม่ใช่ด้วยการขโมยข้อมูล"', zh: '🙅 拒绝：“我凭本事赢，而不是靠偷窃数据。”' }, consequence: { en: '🛡️ High Integrity. You sleep well at night. Your reputation as an ethical business owner grows among peers.', th: '🛡️ ศักดิ์ศรีสูงส่ง คุณหลับสบาย ชื่อเสียงในฐานะเจ้าของธุรกิจที่มีจริยธรรมเติบโตในวงการ', zh: '🛡️ 高正直度。你晚上睡得很香。由于你是一个讲道德的企业主，你的声誉在同行中不断增长。' }, stats: { competence: 30, ethics: 70, leadership: 40, innovation: 0 } },
            { id: 'C', text: { en: '👮 Report it: "Call the rival store owner and tell them what their ex-employee is doing."', th: '👮 แจ้งความ: "โทรหาเจ้าของร้านคู่แข่งแล้วบอกเขาว่าพนักงานเก่าเขากำลังทำอะไร"', zh: '👮 举报：“给竞争对手店主打电话，告诉他们前员工的行为。”' }, consequence: { en: '🤝 Professional Respect. The rival is shocked and grateful. They stop their aggressive price war against you. Cooperation > War.', th: '🤝 ความเคารพในวิชาชีพ คู่แข่งตกใจและซาบซึ้ง เขาเลิกทำสงครามราคาใส่คุณ การร่วมมือดีกว่าการสู้กัน', zh: '🤝 职业尊重。对手既震惊又感激。他们停止了针对你的激进价格战。合作 > 战争。' }, stats: { competence: 50, ethics: 80, leadership: 50, innovation: 10 } },
            { id: 'D', text: { en: '🤫 Listen for free: "I won\'t pay, but tell me... what\'s their secret sauce?"', th: '🤫 หลอกถาม: "ฉันไม่จ่ายหรอก แต่บอกหน่อยสิ... เคล็ดลับเขาคืออะไร?"', zh: '🤫 免费打听：“我不会付钱，但告诉我……他们的秘密武器是什么？”' }, consequence: { en: '⚠️ Grey Area. They tell you a bit, but you feel dirty. It doesn\'t help much anyway. Bad vibes.', th: '⚠️ พื้นที่สีเทา เขาบอกนิดหน่อยแต่คุณรู้สึกผิด มันก็ไม่ได้ช่วยอะไรมากหรอก บรรยากาศแย่', zh: '⚠️ 灰色地带。他们告诉你一点点，但你觉得很不光彩。反正也没什么大用。感觉不好。' }, stats: { competence: 30, ethics: 10, leadership: 20, innovation: 20 } }
        ]
    },
    {
        id: 'me_041',
        text: {
            en: '👃 Scent Marketing: A consultant wants to install a proprietary "Sales Scent" machine ($2,000) that allegedly makes people spend 20% more.',
            th: '👃 การตลาดด้วยกลิ่น: ที่ปรึกษาอยากติดตั้งเครื่องพ่น "กลิ่นปิดการขาย" ($2,000) ที่อ้างว่าช่วยให้คนควักเงินจ่ายเพิ่ม 20%',
            zh: '👃 气味营销：一位顾问想安装一台专有的“销售气味”机器（2000美元），据说能让人们多花20%的钱。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Buy it: "Visuals are boring. Let\'s attack their noses!"', th: '🚀 ซื้อเลย: "ภาพลักษณ์มันน่าเบื่อ มาจู่โจมด้วยกลิ่นดีกว่า!"', zh: '🚀 买下它：“视觉已经过时了。让我们攻击他们的鼻子！”' }, consequence: { en: '📈 It works! People stay longer in the shop and buy more impulse items. Revenue up 15%. Science is weird.', th: '📈 ได้ผล! คนอยู่ในร้านนานขึ้นและซื้อของตามอารมณ์มากขึ้น รายได้เพิ่ม 15% วิทยาศาสตร์นี่ประหลาดดีนะ', zh: '📈 奏效了！人们在店里待得更久，买的冲动性商品更多。收入增长了15%。科学真奇妙。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 60 } },
            { id: 'B', text: { en: '🐢 Too Invasive: "I don\'t want to manipulate people\'s brains. Keep it natural."', th: '🐢 รุกรานไป: "ฉันไม่อยากล้างสมองลูกค้า ปล่อยให้มันเป็นธรรมชาติเถอะ"', zh: '🐢 太具侵入性：“我不想操纵人们的大脑。保持自然。”' }, consequence: { en: '🛡️ Safe Stagnation. You save $2,000, but the shop feels "standard." You miss a competitive edge.', th: '🛡️ มั่นคงแต่ย่ำอยู่ที่เดิม คุณประหยัด $2,000 แต่ร้านดู "งั้นๆ" คุณพลาดแต้มต่อในการแข่งข่น', zh: '🛡️ 安全停滞。你省了2000美元，但店铺感觉“平平无奇”。你错过了竞争力。' }, stats: { competence: 30, ethics: 40, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🕯️ DIY Version: "Buy some high-quality candles/essential oils for $50 instead."', th: '🕯️ ทำเอง: "ซื้อเทียนหอมหรือน้ำมันหอมระเหยดีๆ มาใช้เองแค่ $50 พอ"', zh: '🕯️ DIY版本：“花50美元买些高品质的蜡烛/精油代替。”' }, consequence: { en: '✅ Mid Performance. The shop smells nice, which helps slightly. Smart cost-cutting but less powerful than the machine.', th: '✅ ผลลัพธ์ปานกลาง ร้านหอมขึ้น ช่วยได้นิดหน่อย ประหยัดงบได้ดีแต่ประสิทธิภาพไม่เท่าเครื่อง', zh: '✅ 性能中等。店里闻起来很香，这有一点点帮助。聪明的成本削减，但不如机器效果显著。' }, stats: { competence: 50, ethics: 40, leadership: 30, innovation: 40 } },
            { id: 'D', text: { en: '🍰 Bake Cookies: "Just put a small oven in the back and bake real cookies. Natural scent + product to sell!"', th: '🍰 อบพื้นพ่วง: "เอาเตาหอมไว้หลังร้านแล้วอบคุกกี้จริงๆ เลย กลิ่นธรรมชาติ แถมได้ขนมขายด้วย!"', zh: '🍰 烤饼干：“在后面放个小烤箱，烤真正的饼干。自然的香味+可售产品！”' }, consequence: { en: '🏆 Double Win. The smell of fresh cookies is the ultimate sales scent. You sell out of cookies EVERY DAY and shop sales go up 10%.', th: '🏆 ชนะสองต่อ กลิ่นคุกกี้อบใหม่คือสุดยอดกลิ่นกระตุ้นการขาย คุณขายคุกกี้หมดทุกวันและยอดขายร้านเพิ่ม 10%', zh: '🏆 双重胜利。新鲜饼干的味道是终极的销售气味。你的饼干每天都售罄，店铺销售额增长了10%。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 80 } }
        ]
    },
    {
        id: 'me_042',
        text: {
            en: '🕵️ The Mystery Shopper: You receive a scathing report from a "Professional Mystery Shopper" agency. They claim your staff was rude and the floor was dirty. They offer a $500 "consulting package" to fix it.',
            th: '🕵️ นักช้อปนิรนาม: คุณได้รับรายงานวิจารณ์ยับจากเอเจนซี่ "นักช้อปนิรนาม" เขาแ้างว่าพนักงานคุณไม่สุภาพและพื้นสกปรก เขาเสนอ "แพ็คเกจที่ปรึกษา" $500 เพื่อแก้ปัญหา',
            zh: '🕵️ 神秘顾客：你从一家“专业神秘顾客”机构收到一份严厉的报告。他们声称你的员工很粗鲁，地板很脏。他们提议花500美元购买“咨询包”来解决这个问题。'
        },
        options: [
            { id: 'A', text: { en: '💸 Buy the package: "They clearly know something I don\'t. Help us."', th: '💸 ซื้อแพ็คเกจ: "เขาคงเห็นใจจุดที่ผมไม่เห็น ช่วยพวกเราด้วย"', zh: '💸 购买该包：“他们显然知道一些我不知道的事情。帮帮我们。”' }, consequence: { en: '📉 Scammed! The "consulting" is just a PDF you could have found for free on Google. You got played by high-pressure sales.', th: '📉 โดนหลอก! "ที่ปรึกษา" ที่ว่าก็แค่ไฟล์ PDF ที่หาฟรีได้ใน Google คุณโดนยอดขายเชิงกดดันเล่นงานเข้าแล้ว', zh: '📉 被骗了！所谓的“咨询”只是一份你可以在Google上免费找到的PDF。你被高压营销耍了。' }, stats: { competence: 10, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🔥 Internal Audit: "Check the CCTV. If they are right, I\'ll fix it myself."', th: '🔥 ตรวจสอบภายใน: "เช็คกล้องวงจรปิดก่อน ถ้าเขาพูดจริง ฉันจะแก้เอง"', zh: '🔥 内部审计：“检查闭路电视。如果他们说得对，我自己来解决。”' }, consequence: { en: '✅ Truth Found. You see the staff WAS lazy on Tuesday. You hold a meeting, retrain them, and save $500. Leadership win.', th: '✅ ความจริงปรากฏ คุณเห็นว่าพนักงานอู้จริงๆ เมื่อวันอังคาร เลยเรียกประชุมและเทรนใหม่ ประหยัดเงิน $500 ชนะใจทีม', zh: '✅ 真相大白。你发现员工在周二确实偷懒了。你开了会，对他们进行了重新培训，并省下了500美元。领导力的胜利。' }, stats: { competence: 60, ethics: 40, leadership: 60, innovation: 10 } },
            { id: 'C', text: { en: '🤐 Ignore: "Sounds like a shake-down. We are fine."', th: '🤐 เมิน: "ดูเหมือนมาขู่เอาเงินนะ เราโอเคอยู่แล้ว"', zh: '🤐 忽视：“听起来像是勒索。我们没事。”' }, consequence: { en: '😐 Passive. You might be missing real issues, or you might have avoided a scam. Hard to tell, but zero change.', th: '😐 นิ่งเฉย คุณอาจจะพลาดปัญหาจริงๆ ไป หรืออาจจะรอดจากการโดนหลอก บอกยากแต่ทุกอย่างยังเหมือนเดิม', zh: '😐 被动。你可能错过了真正的问题，或者你可能避开了一个骗局。很难说，但没有任何改变。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🤝 Customer Survey: "Ask 100 REAL regulars for feedback instead for $5 gift cards."', th: '🤝 สำรวจลูกค้า: "ถามลูกค้าประจำตัวจริง 100 คนเพื่อแลกกับบัตรของขวัญ $5 แทน"', zh: '🤝 顾客调查：“改为向100名‘真实’熟客寻求反馈，报酬是5美元的礼品卡。”' }, consequence: { en: '🏆 Data Gold. Real customers tell you what they actually care about (better lighting, not the floor). You spend $500 on them, not a scammer.', th: '🏆 ข้อมูลทองคำ ลูกค้าตัวจริงบอกจุดที่เขาแคร์ (แสงร้านไม่พอ ไม่ใช่เรื่องพื้น) คุณใช้เงิน $500 กับลูกค้า ไม่ใช่กับสิบแปดมงกุฎ', zh: '🏆 数据黄金。真正的顾客告诉你他们真正在乎的是什么（更好的照明，而不是地板）。你把500美元花在他们身上，而不是骗子。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 60 } }
        ]
    },
    {
        id: 'me_043',
        text: {
            en: '🎨 The Local Artist: A neighborhood artist wants to display their paintings on your walls. They keep 100% of profit but it makes the shop look "vibrant."',
            th: '🎨 ศิลปินท้องถิ่น: ศิลปินในย่านอยากเอาภาพมาแขวนในร้าน เขาเก็บกำไร 100% แต่ช่วยให้ร้านดู "มีชีวิตชีวา"',
            zh: '🎨 当地艺术家：一位当地艺术家想在你的墙上展示他们的画作。他们保留100%的利润，但这会让店面看起来“充满活力”。'
        },
        options: [
            { id: 'A', text: { en: '🖼️ Yes: "Art for arts sake. Let\'s beautify the space."', th: '🖼️ ตกลง: "เพื่อศิลปะ มาตกแต่งร้านให้สวยกัน"', zh: '🖼️ 同意：“为了艺术。让我们美化空间。”' }, consequence: { en: '❤️ Brand Image. The shop looks amazing. You become a "culture spot." Traffic increases 5%. Indirect profit.', th: '❤️ ภาพลักษณ์แบรนด์ ร้านดูสวยมาก คุณกลายเป็น "จุดท่องเที่ยวทางวัฒนธรรม" คนเข้าเพิ่ม 5% กำไรทางอ้อม', zh: '❤️ 品牌形象。店面看起来棒极了。你成了一个“文化地标”。客流量增长了5%。间接利润。' }, stats: { competence: 30, ethics: 50, leadership: 40, innovation: 40 } },
            { id: 'B', text: { en: '💰 Commission: "Sure, but I take a 20% cut for the space."', th: '💰 เก็บค่าคอม: "ได้ แต่ฉันขอหัก 20% เป็นค่าที่นะ"', zh: '💰 佣金：“当然可以，但我提取20%的佣金作为场地费。”' }, consequence: { en: '📈 Extra Income. One painting sells for $2,000. You get $400 for doing nothing. Pure profit.', th: '📈 รายได้เสริม รูปหนึ่งขายได้ $2,000 คุณได้เปล่าๆ $400 กำไรล้วนๆ', zh: '📈 额外收入。一幅画卖了2000美元。你什么都不用做就赚了400美元。净利润。' }, stats: { competence: 50, ethics: 20, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '🚫 Priority Shelf: "My walls are too valuable for non-sellers. Keep it clear."', th: '🚫 พื้นที่จำกัด: "ผนังฉันมีค่าเกินกว่าจะเอาของที่ขายไม่ได้มาวาง เคลียร์ไว้ดีกว่า"', zh: '🚫 优先货架：“我的墙壁太宝贵了，不能放不赚钱的东西。保持空旷。”' }, consequence: { en: '🛡️ Efficient focus. The shop looks "clean" and minimal. You use the wall space for posters of YOUR top products. Sales of those items go up 5%.', th: '🛡️ โฟกัสแม่นยำ ร้านดูสะอาดมินิมอล คุณใช้ผนังติดโปสเตอร์สินค้าขายดีของตัวเอง ยอดขายของพวกนั้นเพิ่มขึ้น 5%', zh: '🛡️ 高效专注。店面看起来“干净”且极简。你利用墙面空间张贴“你”的主打产品海报。这些商品的销售额增长了5%。' }, stats: { competence: 50, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '🔄 Rotating Gallery: "Sure, every month a DIFFERENT local artist gets the wall."', th: '🔄 แกลเลอรี่หมุนเวียน: "ได้เลย ทุกเดือนจะมีศิลปินท้องถิ่น \'คนใหม่\' มาใช้ผนัง"', zh: '🔄 旋转画廊：“当然，每个月都有‘不同的’当地艺术家使用这面墙。”' }, consequence: { en: '🏆 Community Hub. People keep coming back to see "what\'s new." Huge retention tool. You are the heart of the neighborhood.', th: '🏆 ศูนย์กลางชุมชน คนกลับมาเรื่อยๆ เพื่อดูว่า "มีอะไรใหม่" เป็นเครื่องมือรักษาลูกค้าชั้นดี คุณคือหัวใจของย่านนี้เลย', zh: '🏆 社区中心。人们为了看“有什么新奇的东西”而不断回来。巨大的获客工具。你是这个街区的心脏。' }, stats: { competence: 40, ethics: 60, leadership: 50, innovation: 70 } }
        ]
    },
    {
        id: 'me_044',
        text: {
            en: '🔌 The Power Outage: The whole block loses power. The fridge is off, the POS is down, and it\'s pitch black.',
            th: '🔌 ไฟดับ: ไฟดับทั้งบล็อก ตู้เย็นหยุดทำงาน ระบบคิดเงินล่ม และในร้านมืดสนิท',
            zh: '🔌 停电：整个街区都断电了。冰箱关了，POS系统宕机了，一片漆黑。'
        },
        options: [
            { id: 'A', text: { en: '🔒 Close immediately: "Safety hazard. Go home everyone."', th: '🔒 ปิดทันที: "อันตรายเกินไป ทุกคนกลับบ้าน"', zh: '🔒 立即关门：“安全隐患。大家回家吧。”' }, consequence: { en: '📉 Lost Opportunity. You lose half a day of sales. Plus $500 of perishable food spoils in the fridge.', th: '📉 เสียโอกาส เสียยอดขายไปครึ่งวัน แถมอาหารพรีเมียมมูลค่า $500 ในตู้เย็นเน่าเสีย', zh: '📉 错失良机。你损失了半天的销售额。此外，冰箱里价值500美元的易腐食品也变质了。' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🕯️ Candlelit Sales: "Light some candles. Cash only. Write names on paper."', th: '🕯️ ขายแบบจุดเทียน: "จุดเทียนเลย รับเฉพาะเงินสด จดชื่อใส่กระดาษเอา"', zh: '🕯️ 烛光销售：“点上蜡烛。仅收现金。在纸上写上名字。”' }, consequence: { en: '✅ Scrappy Success. People find it romantic and weird. You sell MORE than a normal day. You are a local legend.', th: '✅ รอดแบบสู้ชีวิต คนรู้สึกว่ามันโรแมนติกและแปลกดี คุณขายได้มากกว่าวันปกติเสียอีก กลายเป็นตำนานท้องถิ่นเลย', zh: '✅ 顽强的成功。人们觉得这既浪漫又怪异。你卖得比平时还“多”。你成了当地的传奇。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 50 } },
            { id: 'C', text: { en: '🍦 Flash Sale: "Drag a table outside. 50% OFF everything in the fridge before it melts!"', th: '🍦 เลิกแบก: "ลากโต๊ะออกไปหน้าร้าน ลด 50% ของทุกอย่างที่แช่เย็นก่อนมันจะละลาย!"', zh: '🍦 闪电促销：“把桌子拖到外面。在冰箱里的东西融化之前，一律半价！”' }, consequence: { en: '🏆 Minimize Loss. You recover your costs and make the neighborhood happy. No food wasted. Smart damage control.', th: '🏆 ลดความสูญเสีย คุณได้ทุนคืนและทำให้เพื่อนบ้านแฮปปี้ ไม่เสียของทิ้ง จัดการความเสียหายได้ฉลาด', zh: '🏆 最小化损失。你收回了成本并让街坊邻居开心。没有浪费食物。聪明的损害控制。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '🏢 Generator Investment: "Buy a $1,000 generator immediately and keep going."', th: '🏢 ซื้อปั่นไฟ: "รีบไปซื้อเครื่องปั่นไฟ $1,000 มาเดี๋ยวนี้เลย แล้วเปิดร้านต่อ"', zh: '🏢 发电机投资：“立即购买一台1000美元的发电机并继续营业。”' }, consequence: { en: '📉 Overkill. The power comes back on in 20 minutes. You now have a very expensive, heavy machine you didn\'t need.', th: '📉 เกินกว่าเหตุ ไฟกลับมาติดใน 20 นาที ตอนนี้คุณมีเครื่องจักรหนักราคาแพงที่ไม่ได้ใช้งาน', zh: '📉 大材小用。20分钟后电就来了。你现在拥有一台不需要的、又贵又重的机器。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 10 } }
        ]
    },
    {
        id: 'me_045',
        text: {
            en: '🎗️ Charity Round-up: Should you start asking customers to "round up to the nearest dollar" for a local children\'s hospital?',
            th: '🎗️ ปัดเศษเพื่อการกุศล: คุณควรขอให้ลูกค้า "ปัดเศษให้ครบเหรียญ" เพื่อบริจาคให้โรงพยาบาลเด็กในพื้นที่ไหม?',
            zh: '🎗️ 慈善筹款：你应该开始要求顾客通过“加1美元”的方式，为当地的一家儿童医院捐款吗？'
        },
        options: [
            { id: 'A', text: { en: '✅ Yes: "It cost them nothing and helps kids. Let\'s do it."', th: '✅ ทำเลย: "ลูกค้าไม่เสียอะไรมากแถมช่วยเด็กๆ ลุยเลย"', zh: '✅ 是的：“这对他们来说不费吹灰之力，却能帮助孩子们。让我们开始吧。”' }, consequence: { en: '❤️ Goodwill. You raise $500 a month for the hospital. Your brand looks caring. But some customers find it annoying.', th: '❤️ ภาพลักษณ์ดี คุณรวบรวมเงินได้เดือนละ $500 ให้โรงพยาบาล แบรนด์ดูใจดี แต่ลูกค้าบางคนก็รำคาญ', zh: '❤️ 商誉。你每月为医院募集500美元。你的品牌看起来很有爱心。但一些顾客觉得这很烦人。' }, stats: { competence: 30, ethics: 60, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '🙅 No: "I hate being asked that at stores. I won\'t do it to my customers."', th: '🙅 ไม่เอา: "ฉันเกลียดที่โดนถามแบบนี้ในร้านอื่น ฉันจะไม่ทำแบบนั้นกับลูกค้าตัวเอง"', zh: '🙅 不：“我讨厌在商店被问到这个问题。我不会对我的顾客这么做。”' }, consequence: { en: '🛡️ Frictionless UX. Shopping is fast and stress-free. Your regular customers appreciate the "no-hassle" vibe.', th: '🛡️ ประสบการณ์ไม่สะดุด ช้อปปิ้งเร็วและไม่เครียด ลูกค้าประจำชอบบรรยากาศที่ "ไม่วุ่นวาย"', zh: '🛡️ 无障碍体验。购物快速且无压力。你的熟客很欣赏这种“不麻烦”的氛围。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '💰 Match it: "Whatever customers donate, I will double it from my profit."', th: '💰 สมทบทุน: "ลูกค้าบริจาคเท่าไหร่ ฉันจะจ่ายสมทบอีกเท่าหนึ่งจากกำไรตัวเอง"', zh: '💰 配比捐赠：“无论顾客捐赠多少，我都会从利润中拿出同样的数额。”' }, consequence: { en: '🏆 Brand Hero. This makes it a shared mission. Trust goes through the roof. It costs you money but creates a legacy.', th: '🏆 ฮีโร่ของแบรนด์ ทำให้มันกลายเป็นภารกิจร่วมกัน ความเชื่อใจพุ่งกระฉูด เสียเงินแต่สร้างชื่อที่ยั่งยืน', zh: '🏆 品牌英雄。这使它成为一个共同的使命。信任度爆表。这虽然花了你的钱，但创造了一份遗产。' }, stats: { competence: 50, ethics: 80, leadership: 60, innovation: 20 } },
            { id: 'D', text: { en: '📈 Hidden Fee: "Don\'t ask, just round it up automatically and donate it."', th: '📈 เก็บเงียบ: "ไม่ต้องถาม แค่ปัดเศษอัตโนมัติแล้วเอาไปบริจาคเลย"', zh: '📈 隐藏费用：“不要问，直接自动凑整并捐赠。”' }, consequence: { en: '💀 Theft Accusations. A customer checks their receipt and realizes the math is off. They call it "stealing." PR disaster.', th: '💀 โดนหาว่าขโมย ลูกค้าเช็คใบเสร็จแล้วเห็นว่ายอดไม่ตรง เขาหาว่าคุณ "ขโมยเงิน" ฝันร้ายทาง PR เลย', zh: '💀 盗窃指控。一位顾客查看收据，发现账目不对。他们称其为“偷窃”。公关灾难。' }, stats: { competence: 10, ethics: -50, leadership: -20, innovation: 10 } }
        ]
    },
    {
        id: 'me_046',
        text: {
            en: '🍫 The Shoplifter: You catch a 10-year-old kid trying to hide a chocolate bar in their pocket. They look scared and their clothes look worn out.',
            th: '🍫 หัวขโมยน้อย: คุณจับได้ว่าเด็ก 10 ขวบพยายามซ่อนช็อกโกแลตแท่งไว้ในกระเป๋าเสื้อ เด็กดูท่าทางกลัวและเสื้อผ้าดูเก่าขาด',
            zh: '🍫 小偷：你抓到一个10岁的孩子试图把一块巧克力藏在口袋里。他们看起来很害怕，衣服看起来很旧。'
        },
        options: [
            { id: 'A', text: { en: '👮 Call the Police: "Theft is theft. Laws must be followed."', th: '👮 แจ้งตำรวจ: "ขโมยก็คือขโมย กฎหมายต้องเป็นกฎหมาย"', zh: '👮 报警：“偷窃就是偷窃。必须遵守法律。”' }, consequence: { en: '💀 Community Backlash. The kid is from a well-known struggling family. You look like a heartless monster. Sales drop 20% due to local boycott.', th: '💀 กระแสตีกลับชุมชน เด็กมาจากครอบครัวที่ลำบากและคนรู้จักเยอะ คุณดูเหมือนปีศาจไร้หัวใจ ยอดขายตก 20% เพราะคนแบนร้าน', zh: '💀 社区抵制。这孩子来自一个众所周知的贫困家庭。你看起来像个冷酷无情的怪物。由于当地的抵制，销售额下降了20%。' }, stats: { competence: 20, ethics: -20, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🗣️ Scold & Release: "Put it back and never come here again without money!"', th: '🗣️ ดุแล้วปล่อย: "วางคืนที่เดิมแล้วอย่ามาที่นี่อีกถ้าไม่มีเงิน!"', zh: '🗣️ 责备并放人：“放回去，没钱再也别来这儿！”' }, consequence: { en: '🛡️ Safe Neutrality. You saved the chocolate, but the kid learns nothing about kindness or consequences. Just another Tuesday.', th: '🛡️ เสมอตัว คุณได้ช็อกโกแลตคืน แต่เด็กไม่ได้เรียนรู้เรื่องความเมินเฉยหรือผลที่ตามมา แค่วันธรรมดาวันหนึ่ง', zh: '🛡️ 安全中立。你保住了巧克力，但孩子没学到任何关于仁慈或后果的东西。只是平淡的一天。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 0 } },
            { id: 'C', text: { en: '🎁 Give it for free: "You look hungry. Take it. But if you\'re hungry again, just ask."', th: '🎁 ให้ฟรี: "ดูท่าทางจะหิว เอาไปเถอะ แต่คราวหน้าถ้าหิวอีกให้บอกนะ"', zh: '🎁 免费赠送：“你看起来饿了。拿着吧。但如果你下次再饿，可以直接说。”' }, consequence: { en: '❤️ Human Connection. The kid cries and says thank you. Word spreads about your kindness. You lose $2 but gain immense community respect.', th: '❤️ ความผูกพันในใจมนุษย์ เด็กน้อยร้องไห้และขอบคุณคุณ ข่าวความใจดีกระจายไปทั่ว คุณเสียเงิน $2 แต่ได้ความเคารพมหาศาลจากคนในย่าน', zh: '❤️ 人性连接。孩子哭了，说了谢谢。你的善良传开了。你损失了2美元，但赢得了社区极大的尊重。' }, stats: { competence: 30, ethics: 80, leadership: 50, innovation: 10 } },
            { id: 'D', text: { en: '🧹 Work it off: "I won\'t call the police if you sweep the front of the shop for 30 minutes."', th: '🧹 ทำงานแลกของ: "ฉันจะไม่แจ้งตำรวจ ถ้าเธอช่วยกวาดหน้าร้าน 30 นาที"', zh: '🧹 以工代赈：“如果你帮我打扫店门前30分钟，我就不报警。”' }, consequence: { en: '✅ Life Lesson. The kid learns the value of work and honesty. They actually finish and look proud. You might have just changed a life.', th: '✅ บทเรียนชีวิต เด็กได้เรียนรู้คุณค่าของงานและความซื่อสัตย์ เขาทำจนเสร็จและดูภูมิใจ คุณอาจเพิ่งเปลี่ยนชีวิตคนคนหนึ่งได้เลย', zh: '✅ 人生课程。孩子学会了劳动和诚实的价值。他们真的干完了，而且看起来很自豪。你可能刚刚改变了一个人的人生。' }, stats: { competence: 50, ethics: 60, leadership: 70, innovation: 20 } }
        ]
    },
    {
        id: 'me_047',
        text: {
            en: '🏢 Store Expansion: The unit next door becomes available. Doubling your floor space would cost $50,000 for renovations and double your rent.',
            th: '🏢 ขยายร้าน: พื้นที่ข้างร้านว่างลง การขยายพื้นที่เพิ่มสองเท่าต้องใช้เงินรีโนเวท $50,000 และค่าเช่าจะเพิ่มขึ้นเท่าตัว',
            zh: '🏢 店面扩张：隔壁单元空出来了。将店面空间翻倍需要5万美元的装修费，而且租金也会翻倍。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Expand Now: "Go big or go home. We need the space!"', th: '🚀 ขยายเลย: "ไม่รุ่งก็ร่วง เราต้องการพื้นที่!"', zh: '🚀 立即扩张：“不成功便成仁。我们需要空间！”' }, consequence: { en: '📈 Empire Building. Sales grow 80% because you can stock more variety. It takes two years to pay off the debt, but you are now the biggest shop in town.', th: '📈 สร้างอาณาจักร ยอดขายโต 80% เพราะสต็อกของได้หลากหลายขึ้น ใช้เวลา 2 ปีใช้หนี้หมด แต่ตอนนี้คุณเป็นร้านที่ใหญ่ที่สุดในเมือง', zh: '📈 帝国建设。由于可以储备更多品种，销售额增长了80%。花了两年时间才还清债务，但你现在是镇上最大的商店。' }, stats: { competence: 50, ethics: 30, leadership: 60, innovation: 50 } },
            { id: 'B', text: { en: '🙅 Stay lean: "Too risky. We are profitable as we are."', th: '🙅 อยู่เท่าเดิม: "เสี่ยงไป เรากำไรดีอยู่แล้วแบบนี้"', zh: '🙅 保持精简：“太冒险了。我们维持现状就很赚钱。”' }, consequence: { en: '🛡️ Safe Play. You keep your cash. But a major chain rents the unit instead and undercuts your prices next year. You missed your chance to block them.', th: '🛡️ เพลย์ปลอดภัย คุณรักษาเงินไว้ได้ แต่ปีหน้าแบรนด์ใหญ่มาเช่าแทนแล้วตัดราคาคุณ คุณพลาดโอกาสที่จะกันเขาออกไปแล้ว', zh: '🛡️ 安全的做法。你保住了现金。但明年一家大连锁店租下了那个单元并压低了你的价格。你错过了阻止他们的机会。' }, stats: { competence: 30, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Storage Only: "Rent it but don\'t renovate. Just use it as a warehouse to buy in bulk."', th: '🤝 ใช้เก็บของ: "เช่าไว้แต่ไม่ต้องรีโนเวท ใช้เป็นโกดังเพื่อซื้อของล็อตใหญ่ราคาถูกลง"', zh: '🤝 仅作仓储：“租下来但不装修。只把它当作仓库，以便大批量采购。”' }, consequence: { en: '✅ Logistics Win. Your margins improve by 10% because you buy cheaper in bulk. Less exciting than a bigger shop, but very smart.', th: '✅ ชนะทางโลจิสติกส์ กำไรเพิ่ม 10% เพราะซื้อของล็อตใหญ่ได้ราคาถูกลง อาจไม่ตื่นเต้นเท่าขยายร้านแต่ฉลาดมาก', zh: '✅ 物流胜利。由于大批量采购，你的利润率提高了10%。虽然不如开大店那么令人兴奋，但非常明智。' }, stats: { competence: 60, ethics: 30, leadership: 40, innovation: 30 } },
            { id: 'D', text: { en: '☕ Shared Space: "Partner with a coffee shop to split the expansion costs."', th: '☕ พื้นที่แชร์: "จับมือกับร้านกาแฟมาแชร์ค่าเช่าและค่าก่อสร้างด้วยกัน"', zh: '☕ 共享空间：“与一家咖啡店合作，分担扩张成本。”' }, consequence: { en: '🏆 Synergy Success. People buy coffee THEN shop in your store. Traffic doubles through mutual attraction. Lower risk, high reward.', th: '🏆 ชนะด้วยพลังร่วม คนมาซื้อกาแฟแล้วก็เดินดูของร้านคุณ คนเดินเข้าร้านเพิ่มสองเท่าด้วยการดึงดูดกันเอง เสี่ยงต่ำกำไรสูง', zh: '🏆 协同成功。人们买完咖啡后顺便在你的店里逛逛。通过互相吸引，客流量翻了一番。低风险，高回报。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 70 } }
        ]
    },
    {
        id: 'me_048',
        text: {
            en: '❄️ Seasonal Markdown: It\'s March. You have $10,000 worth of heavy winter coats left. They are taking up 30% of your shelf space.',
            th: '❄️ ลดราคาตามฤดูกาล: เดือนมีนาคมแล้ว คุณเหลือเสื้อโค้ทหน้าหนาวมูลค่า $10,000 มันกินพื้นที่ในร้านไปตั้ง 30%',
            zh: '❄️ 季节性降价：现在是三月。你还剩下价值1万美元的厚重冬装。它们占据了你30%的货架空间。'
        },
        options: [
            { id: 'A', text: { en: '📉 70% Clearance: "Get them out of here. Cash is better than coats."', th: '📉 ล้างสต็อก 70%: "เอาออกไปให้หมด ถือเงินสดดีกว่าถือเสื้อโค้ท"', zh: '📉 3折清仓：“把它们弄出去。现金总比外套好。”' }, consequence: { en: '✅ Liquidity Win. You get $3,000 back and clear the space for summer inventory immediately. Sales of swimwear soar.', th: '✅ สภาพคล่องชนะเลิศ คุณได้เงินกลับมา $3,000 และเคลียร์ที่ให้สินค้าหน้าร้อนได้ทันที ยอดขายชุดว่ายน้ำพุ่งกระฉูด', zh: '✅ 流动性胜利。你收回了3000美元，并立即为夏季库存腾出了空间。泳装销售额飙升。' }, stats: { competence: 50, ethics: 30, leadership: 30, innovation: 10 } },
            { id: 'B', text: { en: '📦 Store them: "Keep them in the back until next winter. Sell at full price then."', th: '📦 เก็บไว้ก่อน: "เก็บไว้หลังร้านจนกว่าจะถึงหน้าหนาวปีหน้า แล้วค่อยขายราคาเต็ม"', zh: '📦 储存起来：“存放在后面，直到明年冬天。到时候按全价卖。”' }, consequence: { en: '📉 Dead Stock. You lose the storage space for 8 months. Next year, the style is "out" and you have to discount them anyway. Huge opportunity cost.', th: '📉 สต็อกจม คุณเสียพื้นที่เก็บของไป 8 เดือน ปีหน้าเทรนด์เปลี่ยนคุณก็ต้องลดราคาอยู่ดี เสียโอกาสเอาเงินไปหมุนอย่างอื่น', zh: '📉 滞销库存。你损失了8个月的存储空间。明年流行款式变了，你还是得打折。巨大的机会成本。' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'C', text: { en: '🌍 Charity Donation: "Donate them all to a local shelter for a tax write-off."', th: '🌍 บริจาคการกุศล: "บริจาคให้บ้านพักคนไร้ที่พึ่งเพื่อเอามาลดหย่อนภาษี"', zh: '🌍 慈善捐赠：“将它们全部捐给当地收容所，以抵扣税款。”' }, consequence: { en: '❤️ Brand Image. You look like a saint. The local news covers it. You save $2,000 on taxes and gain thousands in "goodwill" value.', th: '❤️ ภาพลักษณ์นักบุญ คุณดูเหมือนพ่อพระ ข่าวท้องถิ่นมาทำข่าว คุณประหยัดภาษีได้ $2,000 และได้แต้มบุญในใจลูกค้าเพียบ', zh: '❤️ 品牌形象。你看起来像个圣人。当地新闻报道了这件事。你节省了2000美元的税款，并赢得了数千美元的“商誉值”。' }, stats: { competence: 40, ethics: 90, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '✈️ Export: "Find a buyer in a country where high-altitude winter is starting."', th: '✈️ ส่งออก: "หาผู้ซื้อในประเทศที่กำลังจะเข้าหน้าหนาวแทน"', zh: '✈️ 出口：“在正要进入高海拔冬季的国家找个买家。”' }, consequence: { en: '🏆 Arbitrage Genius. You sell them for $8,000 to a partner in the Southern Hemisphere. You saved your margin and cleared the space. Advanced merchant skills.', th: '🏆 อัจฉริยะเก็งกำไร คุณขายได้ตั้ง $8,000 ให้พาร์ทเนอร์ในซีกโลกใต้ คุณรักษาหน้าตักและเคลียร์ที่ได้พร้อมกัน ทักษะพ่อค้าระดับสูง', zh: '🏆 套利天才。你以8000美元的价格将它们卖给了南半球的一个合作伙伴。你既保住了利润又腾出了空间。高级商人技能。' }, stats: { competence: 70, ethics: 30, leadership: 30, innovation: 80 } }
        ]
    },
    {
        id: 'me_049',
        text: {
            en: '🍺 Brand Collaboration: A local brewery wants to create a limited-edition "Shop Beer" with your label. It costs $5,000 to produce the first batch.',
            th: '🍺 คอลแลปแบรนด์: โรงเบียร์ท้องถิ่นอยากทำ "เบียร์ประจำร้าน" รุ่นพิเศษโดยใช้โลโก้คุณ ต้องใช้เงิน $5,000 ในการผลิตล็อตแรก',
            zh: '🍺 品牌合作：当地一家酿酒厂想生产一款贴有你标签的限量版“商店啤酒”。首批生产成本为5000美元。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Do it: "Alcohol sells. My brand on a bottle is cool."', th: '🚀 ลุยเลย: "แอลกอฮอล์ขายดีอยู่แล้ว แถมแบรนด์ฉันอยู่บนขวดนี่เท่สุดๆ"', zh: '🚀 做吧：“酒精好卖。我的品牌出现在酒瓶上很酷。”' }, consequence: { en: '📈 Lifestyle Brand. It becomes a collector\'s item. People come for the beer and buy other things. You are no longer just a shop, you are a brand.', th: '📈 แบรนด์ไลฟ์สไตล์ มันกลายเป็นของสะสม คนมาเพื่อซื้อเบียร์แต่ก็ได้ของอย่างอื่นติดกลับไป ตอนนี้คุณไม่ใช่แค่ร้านค้า แต่คือแบรนด์', zh: '📈 生活方式品牌。它成了收藏品。人们为了啤酒而来，顺便买了别的东西。你不再仅仅是一家店，而是一个品牌。' }, stats: { competence: 40, ethics: 20, leadership: 40, innovation: 90 } },
            { id: 'B', text: { en: '🐢 Too Risky/Moral: "I don\'t want my brand associated with alcohol."', th: '🐢 ไม่เอา/เรื่องศีลธรรม: "ฉันไม่อยากให้แบรนด์ไปยุ่งเกี่ยวกับแอลกอฮอล์"', zh: '🐢 太过冒险/道德考虑：“我不希望我的品牌与酒精挂钩。”' }, consequence: { en: '🛡️ Values Intact. You keep your "family friendly" image. You miss out on a big profit, but you stay true to your mission.', th: '🛡️ รักษาค่านิยม คุณรักษาภาพลักษณ์ "เป็นมิตรกับครอบครัว" ไว้อย่างเหนียวแน่น พลาดกำไรก้อนโตแต่ไม่ผิดต่ออุดมการณ์', zh: '🛡️ 价值观完好。你保持了“家庭友好”的形象。你错过了大笔利润，但坚持了自己的使命。' }, stats: { competence: 30, ethics: 60, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '📊 Pre-order only: "Open 200 pre-orders. If they sell, we brew. If not, we cancel."', th: '📊 รับพรีออเดอร์เท่านั้น: "เปิดจอง 200 ขวด ถ้าขายหมดค่อยต้ม ถ้าไม่ถึงเป้าก็ยกเลิก"', zh: '📊 仅限预订：“开启200个预订。如果卖得掉，我们就酿。如果不行，就取消。”' }, consequence: { en: '✅ Smart Validation. They sell out in 4 hours. You now have the $5,000 and guaranteed customers. Zero risk.', th: '✅ ทดลองตลาดได้ฉลาด ยอดจองเต็มใน 4 ชั่วโมง ตอนนี้คุณมีเงิน $5,000 ในมือและมีลูกค้าชัวร์ๆ ความเสี่ยงเป็นศูนย์', zh: '✅ 聪明的验证。4小时内就售罄了。你现在拿到了5000美元，而且有了保底顾客。零风险。' }, stats: { competence: 60, ethics: 40, leadership: 40, innovation: 60 } },
            { id: 'D', text: { en: '🤝 Give-away: "Don\'t sell it. Give it for free to anyone who spends $200."', th: '🤝 ของสมนาคุณ: "ไม่ต้องขาย ให้ฟรีสำหรับใครที่ช้อปครบ $200"', zh: '🤝 赠送：“不卖。给消费满200美元的人免费赠送。”' }, consequence: { en: '📈 Average Order Value (AOV) Up. People spend $200 just to get the exclusive beer. You burn $5,000 but gain $20,000 in revenue. Masterful upsell.', th: '📈 ยอดซื้อต่อบิลพุ่ง คนยอมจ่าย $200 เพื่อให้ได้เบียร์พิเศษนี้ คุณเสีย $5,000 แต่ได้ยอดขาย $20,000 กลยุทธ์เพิ่มยอดขายที่เหนือชั้น', zh: '📈 客单价提升。人们为了得到这款独家啤酒而不惜消费200美元。你投入了5000美元，却赢得了2万美元的收入。高超的追加销售。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 70 } }
        ]
    },
    {
        id: 'me_050',
        text: {
            en: '🏆 The Exit Offer: A massive retail corporation offers to buy your shop and brand for $2,000,000. You would have to retire or work for them for 3 years as a consultant.',
            th: '🏆 ข้อเสนอขายกิจการ: บริษัทค้าปลีกยักษ์ใหญ่ขอซื้อร้านและแบรนด์ของคุณในราคา $2,000,000 โดยคุณต้องเกษียณหรือทำงานเป็นที่ปรึกษาให้เขา 3 ปี',
            zh: '🏆 退出邀约：一家大型零售集团提议以200万美元收购你的店铺和品牌。你必须退休，或者作为顾问为他们工作3年。'
        },
        options: [
            { id: 'A', text: { en: '💰 Sell & Retire: "Take the money and run to a beach in Thailand."', th: '💰 ขายแล้วพอ: "รับเงินแล้วหนีไปนอนหาดที่เมืองไทยซะ"', zh: '💰 出售并退休：“拿钱走人，去泰国的海滩晒太阳。”' }, consequence: { en: '✅ Financial Freedom. You are rich! But you feel empty. The corporate owners ruin the brand in 6 months. You have money but no "child" (the shop) anymore.', th: '✅ อิสรภาพทางการเงิน คุณรวยแล้ว! แต่ก็รู้สึกว่างเปล่า เจ้าของใหม่ทำแบรนด์พังใน 6 เดือน คุณมีเงินแต่ไม่มี "ลูกรัก" (ร้านค้า) อีกต่อไป', zh: '✅ 财务自由。你发财了！但你感到空虚。企业主在6个月内毁掉了这个品牌。你有了钱，但失去了你的“孩子”（那家店）。' }, stats: { competence: 40, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🚫 Decline: "My shop is my legacy. Not for sale at any price."', th: '🚫 ปฏิเสธ: "ร้านนี้คือมรดกของฉัน ไม่ขายไม่ว่าราคาเท่าไหร่"', zh: '🚫 拒绝：“我的店是我的遗产。给多少钱都不卖。”' }, consequence: { en: '❤️ Passion Over Profit. You keep your independence. Your staff is relieved. You remain a local legend. But you still have to wake up at 6 AM every day.', th: '❤️ แพสชั่นเหนือผลกำไร คุณรักษาอิสระไว้ได้ พนักงานโล่งอก คุณยังเป็นตำนานท้องถิ่น แต่ก็ต้องตื่น 6 โมงเช้ามาทำงานทุกวันเหมือนเดิมนะ', zh: '❤️ 激情胜过利润。你保持了独立。你的员工松了一口气。你依然是当地的传奇。但你每天早上还是得6点起床。' }, stats: { competence: 30, ethics: 70, leadership: 80, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Counter-Offer: "I\'ll sell 49% for $1M, but I keep 100% creative control."', th: '🤝 ต่อรอง: "ขายหุ้น 49% ในราคา $1M แต่ฉันต้องเป็นคนคุมทิศทางแบรนด์ 100%"', zh: '🤝 反提议：“我以100万美元出售49%的股份，但我保留100%的创意控制权。”' }, consequence: { en: '🏆 Master Merchant. You get the cash AND the shop. With their money, you expand to 10 locations. Best of both worlds.', th: '🏆 สุดยอดพ่อค้า คุณได้ทั้งเงินและร้าน ด้วยทุนของเขา คุณขยายไปได้ถึง 10 สาขา ได้ทั้งสองอย่างที่ต้องการ', zh: '🏆 商人大师。你既拿到了现金又保留了店铺。利用他们的资金，你扩张到了10个地点。鱼与熊掌兼得。' }, stats: { competence: 80, ethics: 40, leadership: 70, innovation: 60 } },
            { id: 'D', text: { en: '📈 IPO Dream: "No, I\'m going to take this company public myself in 10 years."', th: '📈 ฝันใหญ่เข้าตลาด: "ไม่ล่ะ ฉันจะปั้นบริษัทนี้เข้าตลาดหลักทรัพย์เองในอีก 10 ปี"', zh: '📈 IPO之梦：“不，我要在10年内让这家公司亲自上市。”' }, consequence: { en: '🚀 Moonshot. You set a massive goal. It motivates you to work harder than ever. High risk of failure, but the ceiling is infinite.', th: '🚀 ฝันให้ไกลไปให้ถึง คุณตั้งเป้าใหญ่ยักษ์ มันกระตุ้นให้คุณทำงานหนักกว่าเดิม เสี่ยงล้มเหลวสูงแต่ความสำเร็จก็ไร้ขีดจำกัด', zh: '🚀 极大的飞跃。你设定了一个宏伟的目标。这激励你比以往任何时候都更加努力。失败的风险很高，但上限是无限的。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 90 } }
        ]
    },
    {
        id: 'me_051',
        text: {
            en: '💻 Data Breach (Physical): A manager\'s laptop is stolen from their car. It contains the unencrypted names and addresses of your top 2,000 customers.',
            th: '💻 ข้อมูลรั่วไหล (ทางกายภาพ): โน้ตบุ๊กของผู้จัดการถูกขโมยจากในรถ ในนั้นมีชื่อและที่อยู่ลูกค้าท็อป 2,000 คนที่ไม่ได้เข้ารหัสไว้',
            zh: '💻 数据泄露（实物）：经理的笔记本电脑在车里被偷了。里面存储了你前2000名客户的未经加密的姓名和地址。'
        },
        options: [
            { id: 'A', text: { en: '🤫 Stay Quiet: "The thief probably just wants the hardware. They won\'t look at the data."', th: '🤫 เงียบไว้: "โจรมันคงแค่อยากได้เครื่องคอมแหละ มันไม่ดูข้อมูลหรอก"', zh: '🤫 保持沉默：“小偷可能只想要硬件。他们不会看数据的。”' }, consequence: { en: '💀 Identity Theft. 6 months later, customers report fraud. It\'s traced back to your shop. Class action lawsuit. Bankruptcy.', th: '💀 โดนสวมรอย 6 เดือนต่อมา ลูกค้าโดนโกงและสืบสาวกลับมาที่ร้านคุณ โดนฟ้องละลายพฤติกรรม จบเห่ด้วยการล้มละลาย', zh: '💀 身份盗用。6个月后，客户报告了欺诈行为。经追查发现源头在你的店。集体诉讼。破产。' }, stats: { competence: 10, ethics: -80, leadership: -30, innovation: 0 } },
            { id: 'B', text: { en: '📢 Full Disclosure: "Email every customer immediately, apologize, and offer free credit monitoring."', th: '📢 แจ้งความจริง: "ส่งอีเมลบอกลูกค้าทุกคนทันที ขอโทษ และเสนอโปรแกรมเฝ้าระวังเครดิตฟรี"', zh: '📢 全面披露：“立即给每位客户发邮件，道歉，并提供免费的信用监控。”' }, consequence: { en: '✅ Trust Rebuilt. It costs $10,000, but customers appreciate the honesty. You lose 5% of customers but keep your reputation.', th: '✅ กู้คืนความเชื่อใจ เสียเงินไป $10,000 แต่ลูกค้าชอบความจริงใจ คุณเสียลูกค้าไป 5% แต่รักษาชื่อเสียงไว้ได้', zh: '✅ 信任重建。虽然花费了1万美元，但客户很欣赏这种诚实。你失去了5%的客户，但保住了名声。' }, stats: { competence: 50, ethics: 80, leadership: 60, innovation: 10 } },
            { id: 'C', text: { en: '👮 Remote Wipe: "Try to use tracking software to wipe the drive before the thief unlocks it."', th: '👮 ลบข้อมูลทางไกล: "พยายามใช้ซอฟต์แวร์ติดตามเพื่อลบข้อมูลในไดรฟ์ก่อนโจรจะปลดล็อกได้"', zh: '👮 远程擦除：“在小偷解锁之前，尝试使用跟踪软件擦除硬盘驱动器。”' }, consequence: { en: '🎲 50/50. It works! Data is gone. But you still have to tell customers about the "potential" breach. Lower PR hit.', th: '🎲 50/50 สำเร็จ! ข้อมูลหายไปแล้ว แต่คุณยังต้องบอกลูกค้าเรื่อง "ความเสี่ยง" ที่อาจเกิดขึ้น โดนตำหนิน้อยลงหน่อย', zh: '🎲 50/50。奏效了！数据消失了。但你仍必须告知客户“潜在的”泄露风险。公关压力较小。' }, stats: { competence: 60, ethics: 50, leadership: 40, innovation: 40 } },
            { id: 'D', text: { en: '🤥 Blame the Cloud: "Tell them the server provider had a glitch. Hide the laptop theft."', th: '🤥 โทษคลาวด์: "บอกลูกค้าว่าผู้ให้บริการเซิร์ฟเวอร์มีปัญหา ปิดเรื่องโน้ตบุ๊กหายไว้"', zh: '🤥 甩锅云端：“告诉他们是服务器供应商出了差错。隐瞒笔记本电脑被盗的事。”' }, consequence: { en: '📉 Tech Savvy Fail. The cloud provider issues a statement denying any breach. You look like a liar AND incompetent.', th: '📉 ตกม้าตายสายเทค ผู้ให้บริการคลาวด์ออกแถลงการณ์ปฏิเสธว่าไม่มีข้อมูลรั่วไหล คุณเลยดูเป็นทั้งคนโกหกและคนไร้ฝีมือ', zh: '📉 技术盲区。云供应商发表声明否认发生过任何泄露。你看起来既像个骗子，又像个庸才。' }, stats: { competence: 20, ethics: -40, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'me_052',
        text: {
            en: '🥊 The Price War: A big-box retailer opens 5 miles away and cuts prices on your top 10 items by 40%. They are losing money to kill you.',
            th: '🥊 สงครามราคา: ค้าปลีกรายใหญ่เปิดห่างออกไป 5 ไมล์และลดราคาสินค้าขายดี 10 อย่างของคุณลง 40% ยอมขาดทุนเพื่อฆ่าคุณ',
            zh: '🥊 价格战：一家大卖场在5英里外开业，并将你销量前10名的商品降价40%。他们宁愿亏损也要搞垮你。'
        },
        options: [
            { id: 'A', text: { en: '📉 Match Them: "Lower our prices too. We won\'t be undersold!"', th: '📉 ลดสู้: "ลดราคาของเราลงด้วย เราจะไม่ยอมขายแพงกว่า!"', zh: '📉 跟进：“我们也降价。我们绝不能卖得比他们贵！”' }, consequence: { en: '💀 Bleeding Cash. You run out of money in 3 months. They have deeper pockets. You lose.', th: '💀 เงินกระเด็น คุณเงินหมดภายใน 3 เดือน เงินเขามีมากกว่าคุณเยอะ คุณแพ้', zh: '💀 资金流失。你在3个月内就耗光了资金。他们的财力更雄厚。你输了。' }, stats: { competence: 20, ethics: 30, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '💎 Pivot to Luxury: "Stop selling those 10 items. Stock unique, high-end versions instead."', th: '💎 หนีไปขายของหรู: "เลิกขาย 10 อย่างนั้น แล้วเอาของยูนีคเกรดพรีเมียมมาลงแทน"', zh: '💎 转型高端：“停止销售那10种商品。改为储备独特的、高端的版本。”' }, consequence: { en: '✅ Niche Hero. The big-box store doesn\'t carry artisanal goods. You lose the bargain hunters but double your profit margin from wealthy locals.', th: '✅ ฮีโร่ตลาดเฉพาะกลุ่ม ร้านใหญ่ไม่มีของงานฝีมือขาย คุณเสียลุกค้าสายประหยัดแต่ได้กำไรสองเท่าจากกลุ่มคนมีเงินในพื้นที่', zh: '✅ 小众英雄。大卖场不卖手工制品。你失去了贪图便宜的顾客，但使来自当地富裕阶层的利润率翻了一番。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 70 } },
            { id: 'C', text: { en: '🤝 "Shop Local" Campaign: "Launch a PR campaign about community roots and the evil of corporations."', th: '🤝 แคมเปญ "ช่วยร้านท้องถิ่น": "ทำ PR เรื่องการเป็นรากแก้วของชุมชนและด้านมืดของบรรษัทใหญ่"', zh: '🤝 “支持本地商店”活动：“开展一场关于社区根基和企业罪恶的公关活动。”' }, consequence: { en: '❤️ Community Support. People feel guilty shopping at the big store. Traffic stays steady, but it\'s constant effort to keep the guilt alive.', th: '❤️ พลังชุมชน คนรู้สึกผิดถ้าไปซื้อร้านใหญ่ คนเข้ายังคงที่ แต่คุณต้องทำงานหนักตลอดเพื่อดึงดราม่าไว้', zh: '❤️ 社区支持。人们在大商店购物会感到内疚。客流量保持稳定，但要让这种负罪感持续下去需要不断的努力。' }, stats: { competence: 40, ethics: 50, leadership: 60, innovation: 40 } },
            { id: 'D', text: { en: '🕵️ Loss Leader Strategy: "Find 5 different items they DON\'T sell and price them at a loss to get people in."', th: '🕵️ กลยุทธดึงคนเข้าร้าน: "หาสินค้า 5 อย่างที่เขาไม่มีขาย แล้วตั้งราคาขาดทุนเพื่อล่อคนเข้า"', zh: '🕵️ 引流手段：“找5种他们‘不’卖的商品，亏本定价以吸引人气。”' }, consequence: { en: '📈 Strategic Win. People come for the "steals" and end up buying full-price items out of convenience. You survived the first wave.', th: '📈 ชนะด้วยแผนการ คนมาเพื่อ "ของถูก" แล้วก็ลงเอยด้วยการซื้อของราคาปกติเพราะความสะดวก คุณรอดจากระลอกแรกมาได้', zh: '📈 战略上的胜利。人们为了“捡便宜”而来，最后却为了图方便买了全价商品。你挺过了第一波冲击。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 60 } }
        ]
    },
    {
        id: 'me_053',
        text: {
            en: '🤳 The Viral Takedown: A popular influencer makes a video claiming your products are "overpriced garbage." It gets 2 million views in a weekend.',
            th: '🤳 โดนดิสเครดิตไวรัล: อินฟลูเอนเซอร์ชื่อดังทำคลิปหาว่าสินค้าคุณคือ "ขยะราคาแพง" ยอดวิวพุ่ง 2 ล้านในวันเดียว',
            zh: '🤳 病毒式打击：一位当红网红发布视频，称你的产品是“溢价的垃圾”。一个周末就获得了200万点击量。'
        },
        options: [
            { id: 'A', text: { en: '⚔️ SUE: "Send a Cease and Desist for defamation immediately."', th: '⚔️ ฟ้อง: "ส่งจดหมายตักเตือนฐานหมิ่นประมาททันที"', zh: '⚔️ 起诉：“立即发出停止侵权函，指控其诽谤。”' }, consequence: { en: '💀 Streisand Effect. You look like a bully. They make a second video about the lawsuit. Sales drop 50%.', th: '💀 กระแสตีกลับ (Streisand Effect) คุณดูเป็นอันธพาล เขาทำคลิปภาคต่อเรื่องโดนฟ้อง ยอดขายตก 50%', zh: '💀 史翠珊效应。你看起来像在大欺小。他们针对诉讼又拍了第二个视频。销售额下降了50%。' }, stats: { competence: 10, ethics: 10, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🤡 "Invite Them In": "Offer them a live unboxing/tour to prove the quality personally."', th: '🤡 "เชิญมาพิสูจน์": "ชวนเขามา Unbox สดๆ หรือทัวร์ร้านเพื่อพิสูจน์คุณภาพด้วยตัวเอง"', zh: '🤡 “请进来”：“邀请他们进行现场开箱/参观，亲自证明品质。”' }, consequence: { en: '✅ Flip the Script. They realize they were wrong or find something else to like. They make a "Redemption" video. Huge traffic surge.', th: '✅ พลิกเกม เขาเห็นว่าตัวเองพลาดไปหรือเจอจุดอื่นที่ชอบแทน เลยทำคลิป "ขอโทษ" ให้ คนล้นร้านเลยทีนี้', zh: '✅ 扭转局面。他们意识到自己错了，或者发现了其他喜欢的点。他们拍了一个“救赎”视频。客流量激增。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 80 } },
            { id: 'C', text: { en: '📈 Data Over Feeling: "Post a detailed breakdown of your sourcing and quality standards."', th: '📈 ข้อมูลเหนืออารมณ์: "โพสต์รายละเอียดการจัดหาและมาตรฐานคุณภาพสินค้าอย่างละเอียด"', zh: '📈 数据胜过感觉：“发布一份关于产品采购和质量标准的详细分析报告。”' }, consequence: { en: '🛡️ Trust Builders. Only 10% of people read it, but your core customers use your data to defend you in the comments. Community wins.', th: '🛡️ สร้างความเชื่อใจ มีแค่ 10% ที่อ่าน แต่ลูกค้าประจำเอาข้อมูลคุณไปช่วยเถียงให้ในคอมเมนต์ พลังโซเชียลช่วยไว้', zh: '🛡️ 信任建立者。虽然只有10%的人去读它，但你的核心客户会用这些数据在评论区为你辩护。社区胜利。' }, stats: { competence: 50, ethics: 60, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '🤫 IGNORE: "The internet forgets everything in 3 days. Focus on sales."', th: '🤫 เมิน: "เน็ตมันลืมทุกอย่างใน 3 วันแหละ โฟกัสการขายต่อไป"', zh: '🤫 忽视：“互联网在3天内就会忘了一切。专注于销售。”' }, consequence: { en: '😐 Slow Recovery. The storm passes, but your brand is permanently "stained" in search results. Moderate loss of potential new customers.', th: '😐 ฟื้นตัวช้า พายุผ่านไป แต่แบรนด์คุณจะมี "รอยด่าง" ในผลการค้นหาไปตลอด เสียลูกค้าใหม่ที่จะเข้ามาในอนาคตไปพอสมควร', zh: '😐 恢复缓慢。风暴过去了，但在搜索结果中，你的品牌被永久性地蒙上了污点。潜在新客户出现中等程度的流失。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 0 } }
        ]
    },
    {
        id: 'me_054',
        text: {
            en: '🚢 Supply Chain Crisis: A global shipping canal is blocked. Your inventory for the biggest sale of the year is stuck on a ship for 4 weeks.',
            th: '🚢 วิกฤตโซ่อุปทาน: ช่องทางการเดินเรือระดับโลกโดนบล็อก สต็อกสินค้าสำหรับงานขายใหญ่ที่สุดแห่งปีติดอยู่บนเรือไปอีก 4 อาทิตย์',
            zh: '🚢 供应链危机：全球一条航运运河被堵。你一年中最大规模促销所需的库存被困在船上长达4周。'
        },
        options: [
            { id: 'A', text: { en: '✈️ Air Freight: "Pay 5x shipping cost to fly in a smaller batch of the bestsellers."', th: '✈️ ขนส่งทางอากาศ: "จ่ายค่าส่ง 5 เท่าเพื่อส่งสินค้าขายดีล็อตเล็กมาทางเครื่องบิน"', zh: '✈️ 空运：“支付5倍的运费，将一小批畅销货空运过来。”' }, consequence: { en: '✅ Save the Sale. You make zero profit on those items, but you keep your customers happy and the store busy. Long-term win.', th: '✅ กอบกู้ยอดขาย คุณไม่ได้กำไรจากของพวกนั้นเลย แต่ทำลูกค้าแฮปปี้และร้านไม่เงียบเหงา ชนะในระยะยาว', zh: '✅ 挽救销售。你在这些商品上毫无利润，但你让顾客感到满意，并让店铺保持繁忙。长远来看是胜利。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 30 } },
            { id: 'B', text: { en: '📦 Pivot to Gift Cards: "We don\'t have the stock, so sell 20% bonus gift cards instead."', th: '📦 เน้นขายบัตรของขวัญ: "ไม่มีของขาย ก็ขายบัตรของขวัญแถมโบนัส 20% แทนสิ"', zh: '📦 转向礼品卡：“我们没有库存，所以改为销售附赠20%奖金的礼品卡。”' }, consequence: { en: '📈 Cash Influx. You get the cash now and customers come back when the ship arrives. Smart liquidity management.', th: '📈 เงินไหลมาเทมา คุณได้เงินสดตอนนี้และลูกค้าจะกลับมาเมื่อของมาส่ง จัดการสภาพคล่องได้ฉลาดมาก', zh: '📈 资金回流。你现在拿到了现金，顾客在货到之后会回来。聪明的流动性管理。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 80 } },
            { id: 'C', text: { en: '🗣️ Tell the Truth: "Post a sign explaining the delay. Ask for patience."', th: '🗣️ บอกความจริง: "ติดประกาศอธิบายเรื่องความล่าช้า ขอลูกค้าให้อดทนรอ"', zh: '🗣️ 告知真相：“张贴告示解释延迟原因。请求耐心等待。”' }, consequence: { en: '😐 Ghost Town. Customers go to competitors who planned better. You save money but lose momentum. Sales down 30%.', th: '😐 ร้านร้าง ลูกค้าไปซื้อร้านคู่แข่งที่วางแผนมาดีกว่า คุณประหยัดเงินแต่เสียจังหวะ ยอดขายหายไป 30%', zh: '😐 无人之境。顾客流向了计划更周全的竞争对手。你省了钱，但失去了势头。销售额下降了30%。' }, stats: { competence: 20, ethics: 60, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🏗️ Local Sourcing: "Find a local manufacturer to make a similar product quickly."', th: '🏗️ หาของในพื้นที่: "หาโรงงานแถวนี้ผลิตสินค้าที่คล้ายกันมาขายแก้ขัด"', zh: '🏗️ 本地采购：“找一家本地制造商快速生产类似产品。”' }, consequence: { en: '🏆 Innovation Win. They are more expensive, but "Made Locally" becomes a huge selling point. You permanentely switch to local suppliers.', th: '🏆 ชนะด้วยนวัตกรรม ต้นทุนแพงขึ้นจริง แต่ "ผลิตในท้องถิ่น" กลายเป็นจุดขายใหม่ สุดท้ายคุณเลยเปลี่ยนมาใช้ซัพพลายเออร์แถวนี้ถาวรเลย', zh: '🏆 创新胜利。虽然价格更贵，但“本地制造”成了一个巨大的卖点。你永久性地转向了本地供应商。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 90 } }
        ]
    },
    {
        id: 'me_055',
        text: {
            en: '🏺 The Heirloom: An elderly customer brings in a rare vintage item (value $5,000) but thinks it\'s worth $50. They want to sell it to you.',
            th: '🏺 มรดกล้ำค่า: ลูกค้าสูงวัยเอาของเก่าหายาก (มูลค่า $5,000) มาขาย แต่เขาคิดว่ามันราคาแค่ $50',
            zh: '🏺 传家宝：一位老顾客带来一件稀有的复古物品（价值5000美元），但他们认为只值50美元。他们想卖给你。'
        },
        options: [
            { id: 'A', text: { en: '💰 Buy for $50: "Business is business. It\'s a huge profit!"', th: '💰 ซื้อ $50: "ธุรกิจก็คือธุรกิจ กำไรมหาศาลอยู่ตรงหน้า!"', zh: '💰 以50美元买入：“生意归生意。这可是巨额利润！”' }, consequence: { en: '💀 Guilt & Risk. You make $4,950 profit. But their grandchild finds out later and sues you for "Elder Exploitation." Huge PR disaster.', th: '💀 ตราบาปและความเสี่ยง คุณได้กำไร $4,950 แต่หลานเขามาเห็นทีหลังแล้วฟ้องคุณฐาน "ฉ้อโกงผู้สูงอายุ" ฝันร้ายทาง PR เลยทีเดียว', zh: '💀 内疚与风险。你赚了4950美元利润。但之后他们的门孙发现了，起诉你“剥削老人”。巨大的公关灾难。' }, stats: { competence: 30, ethics: -100, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🤝 Be Honest: "This is worth $5,000. I can\'t buy it, but I\'ll help you auction it for a 10% fee."', th: '🤝 ซื่อสัตย์: "ของชิ้นนี้มูลค่า $5,000 ผมซื้อไม่ไหวหรอก แต่ผมจะช่วยคุณประมูลโดยคิดค่าธรรมเนียม 10%"', zh: '🤝 保持诚实：“这值5000美元。我买不起，但我会收取10%的费用帮你拍卖。”' }, consequence: { en: '✅ Golden Reputation. You get $500, the customer gets $4,500. Word of your honesty spreads. You become the most trusted shop in town.', th: '✅ ชื่อเสียงดั่งทอง คุณได้ $500 ลูกค้าได้ $4,500 ข่าวเรื่องความสุจริตกระจายไปทั่ว คุณกลายเป็นร้านที่น่าเชื่อถือที่สุดในเมือง', zh: '✅ 黄金信誉。你得到500美元，顾客得到4500美元。你诚实的名声传开了。你成为了镇上最值得信赖的商店。' }, stats: { competence: 50, ethics: 90, leadership: 60, innovation: 20 } },
            { id: 'C', text: { en: '📊 Split the difference: "It\'s worth a lot. Let me buy it for $1,000 and resell it."', th: '📊 แบ่งกำไร: "มันมีค่ามากนะ ผมขอซื้อ $1,000 แล้วเอาไปขายต่อละกัน"', zh: '📊 折中方案：“这很值钱。让我以1000美元买下来然后再转手。”' }, consequence: { en: '😐 Fair-ish. You make a good profit, they are happy with $1,000. No legal risk, but a bit morally grey.', th: '😐 ก็พอแฟร์ คุณได้กำไรดี เขาแฮปปี้กับเงิน $1,000 ไม่มีปัญหาทางกฎหมาย แต่ก็ออกเทาๆ นิดหนึ่ง', zh: '😐 算公平。你赚了大钱，他们对1000美元也很满意。没有法律风险，但道德上有点灰色。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🙅 Decline: "I don\'t deal in vintage. Take it to a specialist."', th: '🙅 ปฏิเสธ: "ผมไม่ได้รับซื้อของเก่า เอาไปให้ผู้เชี่ยวชาญดูดีกว่า"', zh: '🙅 拒绝：“我不做复古生意。把它带给专家。”' }, consequence: { en: '🛡️ Safe & Clean. Zero profit, zero risk. You stay in your lane.', th: '🛡️ ปลอดภัยและใสสะอาด ไม่มีกำไร ไม่มีความเสี่ยง คุณทำตามหน้าที่ตัวเองพอ', zh: '🛡️ 安全且干净。零利润，零风险。你各司其职。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'me_056',
        text: {
            en: '🌊 Flash Flood: Heavy rain floods the street. Your shop floor is 2 inches underwater. Your electrical systems are sparking.',
            th: '🌊 น้ำท่วมฉับพลัน: ฝนตกหนักน้ำท่วมถนน พื้นร้านคุณจมน้ำ 2 นิ้ว ระบบไฟฟ้าเริ่มมีประกายไฟ',
            zh: '🌊 突发洪水：豪雨淹没了街道。你店里的地板被淹了2英寸深。你的电力系统冒火花了。'
        },
        options: [
            { id: 'A', text: { en: '⚡ Stay & Save: "Unplug everything we can reach. Save the electronics!"', th: '⚡ อยู่สู้: "ถอดปลั๊กทุกอย่างที่เอื้อมถึง กู้เครื่องใช้ไฟฟ้าก่อน!"', zh: '⚡ 坚守挽救：“拔掉所有能碰到的电源。保住电子产品！”' }, consequence: { en: '⚠️ Risk Move. One staff member gets a minor shock. You save $2,000 in gear, but could have faced a massive lawsuit.', th: '⚠️ เสี่ยงเกินไป พนักงานคนหนึ่งโดนไฟดูดนิดหน่อย คุณกู้ของได้มูลค่า $2,000 แต่เกือบโดนฟ้องร้องครั้งใหญ่', zh: '⚠️ 冒险举动。一名员工受到了轻微电击。你保住了价值2000美元的设备，但本可能面临巨额诉讼。' }, stats: { competence: 30, ethics: 20, leadership: -40, innovation: 20 } },
            { id: 'B', text: { en: '🚶 Evacuate: "Main breaker OFF. Everyone out immediately. Safety first."', th: '🚶 อพยพ: "สับคัตเอาท์ลง ทุกคนออกไปเดี๋ยวนี้ ความปลอดภัยต้องมาก่อน"', zh: '🚶 撤离：“断掉主断路器。大家立即撤离。安全第一。”' }, consequence: { en: '✅ Leadership Win. You lose $5,000 in inventory, but your staff respects you forever. Insurance covers the damage anyway.', th: '✅ ชนะใจลูกน้อง คุณเสียสต็อกไป $5,000 แต่พนักงานเคารพคุณสุดหัวใจ ประกันก็จ่ายค่าเสียหายให้หมดอยู่ดี', zh: '✅ 领导力的胜利。你损失了5000美元的库存，但你的员工会永远尊敬你。反正保险会赔偿这些损失。' }, stats: { competence: 40, ethics: 60, leadership: 80, innovation: 0 } },
            { id: 'C', text: { en: '🧱 Sandbag Defense: "Spend $500 on sandbags and a water pump right now."', th: '🧱 กระสอบทรายสู้: "ทุ่ม $500 ซื้อกระสอบทรายกับปั๊มน้ำเดี๋ยวนี้เลย"', zh: '🧱 沙袋防御：“现在花500美元买沙袋和水泵。”' }, consequence: { en: '📈 Damage Control. You minimize the flood to the entrance. Only 10% damage. Efficient and fast thinking.', th: '📈 คุมความเสียหาย คุณกันน้ำไม่ให้เข้าถึงข้างในได้ เสียหายแค่ 10% คิดเร็วทำเร็วมาก', zh: '📈 损害控制。你将洪水挡在了门口。损失仅10%。效率高，反应快。' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'D', text: { en: '🧼 "Cleaning Sale": "Once the water recedes, sell everything on the bottom shelves for 80% off - SOLD AS IS."', th: '🧼 "ล้างน้ำลดแหลก": "พอน้ำลดปุ๊บ เอาของชั้นล่างสุดมาลด 80% ขายตามสภาพไปเลย"', zh: '🧼 “清洁大促销”：“等水退了，以2折价格出售底层货架上的所有东西——按现状出售。”' }, consequence: { en: '✅ Turn Lemons to Lemonade. You recover 20% of value instead of zero. People love the "Disaster Deals." Quick cash flow.', th: '✅ พลิกวิกฤตเป็นโอกาส คุณกู้เงินได้ 20% แทนที่จะเสียศูนย์ คนชอบ "ของถูกช่วงวิกฤต" เงินเดินเร็วดี', zh: '✅ 化腐朽为神奇。你收回了20%的价值，而不是颗粒无收。人们喜欢“灾后捡漏”。快速的现金流。' }, stats: { competence: 50, ethics: 30, leadership: 40, innovation: 70 } }
        ]
    },
    {
        id: 'me_057',
        text: {
            en: '🌟 Paid Endorsement: A celebrity agent offers you a branded photo post for $50,000. They promise a "huge boost" in prestige.',
            th: '🌟 จ้างรีวิว: เอเจนซี่ดาราเสนอให้โพสต์รูปคู่แบรนด์คุณในราคา $50,000 เขาสัญญาว่าจะช่วยอัพเกรดภาพลักษณ์ให้ "พุ่งกระฉูด"',
            zh: '🌟 付费代言：一位名人的经纪人向你推销一次品牌照片发布，开价5万美元。他们承诺会“大幅提升”名气。'
        },
        options: [
            { id: 'A', text: { en: '🎲 Risk It: "High price, but it could make us a household name."', th: '🎲 เสี่ยงดู: "ราคาแพงนะ แต่ถ้าดังติดตลาดก็คุ้ม"', zh: '🎲 冒险一试：“价格不菲，但它能让我们家喻户晓。”' }, consequence: { en: '📉 Disappointing ROI. You get a lot of likes, but only $20,000 in incremental sales. You are down $30,000. Expensive lesson in marketing math.', th: '📉 ขาดทุนย่อยยับ ได้ยอดไลก์เพียบ แต่ยอดขายเพิ่มมาแค่ $20,000 คุณขาดทุนไป $30,000 บทเรียนราคาแพงของการตลาดที่คำนวณพลาด', zh: '📉 投资回报率令人失望。你获得了很多点赞，但新增销售额仅为2万美元。你亏损了3万美元。这是一次昂贵的营销数学课。' }, stats: { competence: 30, ethics: 30, leadership: 30, innovation: 50 } },
            { id: 'B', text: { en: '📈 Performance Deal: "Offer $10k base + 10% commission on every sale they track."', th: '📈 จ่ายตามจริง: "เสนอเงินตั้งต้น $10k + ค่าคอม 10% จากยอดที่เขาทำได้"', zh: '📈 绩效挂钩：“提供1万美元底价+每笔追踪到销售额的10%佣金。”' }, consequence: { en: '✅ Smart Contract. They refuse (they wanted easy cash) or they work harder to sell. Either way, you protected your profit.', th: '✅ สัญญาที่ฉลาด เขาอาจจะปฏิเสธ (เพราะอยากได้เงินง่ายๆ) หรือยอมทำงานหนักเพื่อยอดขาย ไม่ว่ายังไงคุณก็รักษาผลกำไรไว้ได้', zh: '✅ 聪明的合同。他们要么拒绝（因为想要快钱），要么更努力地销售。无论哪种方式，你都保护了你的利润。' }, stats: { competence: 70, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🙅 Decline: "We grow through actual quality, not fake hype."', th: '🙅 ปฏิเสธ: "เราโตด้วยคุณภาพ ไม่ใช่การสร้างกระแสปลอมๆ"', zh: '🙅 拒绝：“我们靠真正的品质成长，而不是靠虚假炒作。”' }, consequence: { en: '🛡️ Conservative Grow. You stay profitable but your brand feels "old" compared to the trendier competitors. Steady but slow.', th: '🛡️ โตแบบเดิมๆ คุณมีกำไรแต่แบรนด์ดู "เก่า" เมื่อเทียบกับคู่แข่งที่ทันสมัยกว่า มั่นคงแต่ช้า', zh: '🛡️ 保守增长。你保持盈利，但与更时髦的竞争对手相比，你的品牌显得“陈旧”。稳健但缓慢。' }, stats: { competence: 40, ethics: 50, leadership: 30, innovation: 0 } },
            { id: 'D', text: { en: '🤝 Micro-Influencers: "Spend that $50k on 50 small, local influencers instead sluger."', th: '🤝 ไมโครอินฟลู: "เอาเงิน $50k นั้นไปจ้างอินฟลูตัวเล็กๆ ในพื้นที่ 50 คนแทนดีกว่า"', zh: '🤝 小众网红：“把那5万美元花在50个当地的小众网红身上。”' }, consequence: { en: '🏆 Massive Win. The niche audience trusts small influencers more than celebrities. Your shop is packed for months. 3x ROI.', th: '🏆 ชนะขาดรอย กลุ่มลูกค้าเฉพาะกลุ่มเชื่อใจอินฟลูตัวเล็กมากกว่าดารา ร้านคุณคนแน่นไปหลายเดือน กำไรคืนทุน 3 เท่า', zh: '🏆 巨大的胜利。小众受众比追逐名人更信任小众网红。你的店几个月都人满为患。3倍投资回报率。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 90 } }
        ]
    },
    {
        id: 'me_058',
        text: {
            en: '🕵️ Counterfeit Accusation: A customer shouts in your shop that the expensive watch you sold them is a fake. Other customers are listening.',
            th: '🕵️ โดนหาว่าขายของปลอม: ลูกค้าโวยวายกลางร้านว่านาฬิกาแพงๆ ที่ซื้อไปคือของปลอม ลูกค้าคนอื่นยืนฟังเพียบ',
            zh: '🕵️ 假货指控：一位顾客在店里大喊大叫，说你卖给他们的名表是假货。其他顾客都在看。'
        },
        options: [
            { id: 'A', text: { en: '🛡️ Defend Publicly: "Show them the authenticity certificate right there in the shop."', th: '🛡️ เถียงกลับต่อหน้า: "เอาใบเซอฯ มาโชว์ให้ดูคาหน้ากลางร้านเลย"', zh: '🛡️ 公开辩护：“就在店里向他们展示真实性证明。”' }, consequence: { en: '✅ Trust Restored. You prove them wrong. The customer looks like a fool, and you look professional. People admire your transparency.', th: '✅ กู้คืนความเชื่อใจ คุณพิสูจน์ได้ว่าเขาพลาดเอง เขาดูหน้าแตกแต่คุณดูโปรสุดๆ คนชื่นชอบในความโปร่งใสของคุณ', zh: '✅ 信任恢复。你证明他们错了。那个顾客看起来像个白痴，而你看起来很专业。人们钦佩你的透明度。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 10 } },
            { id: 'B', text: { en: '🧼 Private Meeting: "Let\'s discuss this in my office and double-check the item."', th: '🧼 คุยส่วนตัว: "เชิญด้านในห้องทำงานครับ เดี๋ยวเรามาเช็คของด้วยกันอีกรอบ"', zh: '🧼 私下会谈：“让我们去办公室讨论这件事，并再次核对物品。”' }, consequence: { en: '🛡️ Professional. You de-escalate the scene. It turns out it WAS real, just a misunderstanding about the serial number. No PR damage.', th: '🛡️ มืออาชีพ คุณสยบดราม่าได้ ปรากฏว่าเป็นของจริง แค่เข้าใจผิดเรื่องเลขซีเรียล ชื่อเสียงไม่เสียหาย', zh: '🛡️ 专业。你缓和了现场局面。事实证明那是真的，只是对序列号有误解。没有公关损失。' }, stats: { competence: 50, ethics: 40, leadership: 60, innovation: 10 } },
            { id: 'C', text: { en: '💰 Full Refund: "Just take your money back and leave. I don\'t want the drama."', th: '💰 คืนเงินจบๆ: "เอาเงินคืนไปเลยแล้วไปซะ ผมไม่อยากมีเรื่อง"', zh: '💰 全额退款：“把钱拿回去，走人。我不想把事情闹大。”' }, consequence: { en: '💀 Admitting Guilt? Other customers think: "If he refunded immediately, it must be fake." Sales drop as rumors of "fakes" spread.', th: '💀 ยอมรับผิด? ลูกค้าคนอื่นคิดว่า "ถ้าคืนเงินทันที แสดงว่าปลอมชัวร์" ยอดขายร่วงเพราะข่าวลือเรื่องของปลอมกระจายไปทั่ว', zh: '💀 默认有罪？其他顾客会想：“如果他立即退款，那肯定是真的假货。”随着“假货”传闻的散播，销售额下降。' }, stats: { competence: 20, ethics: 30, leadership: 10, innovation: 0 } },
            { id: 'D', text: { en: '🏢 Third Party Audit: "Let\'s take this to an independent appraiser together. I\'ll pay if I\'m wrong."', th: '🏢 ให้คนกลางตรวจ: "เอาไปให้ผู้เชี่ยวชาญอิสระตรวจด้วยกันเลย ถ้าผมผิดจริง ผมจ่ายเองทุกอย่าง"', zh: '🏢 第三方审核：“让我们一起拿着这个去找独立评估师。如果我错了，我付钱。”' }, consequence: { en: '✅ Total Victory. The appraiser confirms it\'s real. The customer apologizes publicly. You look like the most high-integrity owner ever.', th: '✅ ชนะแบบใสๆ ผู้เชี่ยวชาญคอนเฟิร์มว่าจริง ลูกค้าขอโทษออกสื่อ คุณดูเป็นเจ้าของร้านที่มีจรรยาบรรณที่สุดในสามโลก', zh: '✅ 全胜。评估师确认那是真的。顾客公开道歉。你看起来像是史上最正直的老板。' }, stats: { competence: 50, ethics: 70, leadership: 40, innovation: 20 } }
        ]
    },
    {
        id: 'me_059',
        text: {
            en: '🏢 The Rent Hike: Your 5-year lease is up. The landlord wants to double the rent because the neighborhood is "hot" now.',
            th: '🏢 ค่าเช่าพุ่ง: สัญญาเช่า 5 ปีหมดลง เจ้าของที่ขอขึ้นค่าเช่าสองเท่าเพราะย่านนี้กำลัง "ฮอต"',
            zh: '🏢 租金上涨：你的5年租约到期了。房东想涨一倍租金，因为这一片现在“火”了。'
        },
        options: [
            { id: 'A', text: { en: '✍️ Sign it: "We can\'t leave. This location is everything."', th: '✍️ ยอมเซ็น: "เราย้ายไม่ได้ ทำเลนี้คือทุกอย่าง"', zh: '✍️ 签约：“我们不能走。地段就是一切。”' }, consequence: { en: '📉 Margin Death. You stay, but 40% of your profit now goes straight to rent. You have to fire one staff member to survive.', th: '📉 กำไรหายวับ คุณอยู่ต่อได้ แต่กำไร 40% ต้องเอาไปจ่ายค่าเช่า ต้องไล่พนักงานออกหนึ่งคนเพื่อความอยู่รอด', zh: '📉 利润枯竭。你留下来了，但现在你40%的利润都直接上交给了房东。为了生存，你不得不辞退一名员工。' }, stats: { competence: 30, ethics: 20, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🗣️ Negotiate Hard: "Offer a 20% increase + 2% of total revenue instead of double rent."', th: '🗣️ ต่อรองหนัก: "ขอขึ้น 20% + ส่วนแบ่งยอดขาย 2% แทนการขึ้นสองเท่า"', zh: '🗣️ 强硬谈判：“提出增加20%租金+2%的总收入分成，而不是租金翻倍。”' }, consequence: { en: '✅ Shared Interest. The landlord agrees. They get rich IF you get rich. You keep your cash flow stable for now.', th: '✅ ผลประโยชน์ร่วมกัน เจ้าของที่ตกลง เขาจะรวยถ้าคุณรวย คุณรักษาสภาพคล่องไว้ได้ชั่วคราว', zh: '✅ 利益共享。房东同意了。如果你赚了大钱，他们也跟着沾光。目前你保持了现金流的稳定。' }, stats: { competence: 70, ethics: 40, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🚚 Move Out: "Go to a smaller shop 3 blocks away for half the old rent."', th: '🚚 ย้ายออก: "ไปหาที่เล็กลงถัดออกไป 3 บล็อก ค่าเช่าแค่ครึ่งหนึ่งของที่เก่า"', zh: '🚚 搬走：“搬到3个街区外更小的店面，租金只要原来的一半。”' }, consequence: { en: '📉 Foot Traffic Hit. You lose 40% of walk-in customers. But your overhead is so low that you are actually more profitable than before. Smart but boring.', th: '📉 คนเข้าน้อยลง คุณเสียลูกค้าขาประจำไป 40% แต่ค่าใช้จ่ายก็เซฟไปเยอะจนจริงๆ แล้วกำไรดีกว่าเดิมอีก ฉลาดแต่ก็น่าเบื่อไปนิด', zh: '📉 客流受挫。你失去了40%的上门顾客。但由于你的日常开支非常低，你实际上比以前更赚钱了。明智但平淡。' }, stats: { competence: 50, ethics: 30, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🏠 Buy the Building: "Take out a huge loan and buy the property so nobody can hike the rent again."', th: '🏠 ซื้อตึกเลย: "กู้เงินก้อนโตมาซื้อตึกนี้ซะ จะได้ไม่มีใครมาขึ้นค่าเช่าได้อีก"', zh: '🏠 买下这栋楼：“贷一大笔款把房产买下来，这样再也没人能涨你的租金了。”' }, consequence: { en: '🏆 Legacy Move. You are now your own landlord. Monthly payment is high, but the asset value grows $50k every year. You are untouchable.', th: '🏆 ชนะขาดในอนาคต ตอนนี้คุณเป็นแลนด์ลอร์ดเองแล้ว ผ่อนรายเดือนสูงหน่อย แต่มูลค่าตึกเพิ่มปีละ $50k ไม่มีใครทำอะไรคุณได้อีก', zh: '🏆 基业长青。你现在成了自己的房东。月供虽然很高，但资产价值每年增长5万美元。你现在地位稳固了。' }, stats: { competence: 80, ethics: 40, leadership: 60, innovation: 30 } }
        ]
    },
    {
        id: 'me_061',
        text: {
            en: '🏗️ Expansion Offer: A prime spot in the new upscale mall has opened up. The rent is triple your current one, but the foot traffic is 10x.',
            th: '🏗️ ข้อเสนอขยายธุรกิจ: พื้นที่ทำเลทองในห้างหรูเปิดว่างพอดี ค่าเช่าแพงกว่าเดิม 3 เท่า แต่คนเดินเยอะกว่าเดิม 10 เท่า',
            zh: '🏗️ 扩张邀约：新开的高级商场里出现了一个黄金店面。租金是你现在的三倍，但客流量是现在的10倍。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Go Big: "Take the lease! This is how we become a empire."', th: '🚀 ลุยเลย: "เซ็นสัญญาเลย! นี่แหละทางที่จะสร้างอาณาจักร"', zh: '🚀 做大做强：“租下来！这就是我们走向辉煌的方式。”' }, consequence: { en: '📈 High Stakes. You are now in the big leagues. Sales are massive, but your stress and expenses are too. No room for error.', th: '📈 เดิมพันสูง คุณเข้าสู่ลีกใหญ่แล้ว ยอดขายถล่มทลาย แต่ความเครียดและค่าใช้จ่ายก็ถล่มทลายตามไปด้วย ห้ามพลาดแม้แต่ครั้งเดียว', zh: '📈 高风险。你现在进入了大联盟。销售额巨大，但你的压力和开支也同样巨大。不容有失。' }, stats: { competence: 60, ethics: 40, leadership: 70, innovation: 80 } },
            { id: 'B', text: { en: '🐢 Wait: "Too much risk. Let\'s master one shop before we open a second."', th: '🐢 รอก่อน: "เสี่ยงเกินไป ทำร้านแรกให้เป๊ะก่อนค่อยคิดเรื่องสาขาสอง"', zh: '🐢 等待：“风险太大。在开第二家店之前，先精通第一家店。”' }, consequence: { en: '🛡️ Steady Progress. You miss the "golden opportunity" but you remain debt-free and profitable. Competitor takes the spot and struggles.', th: '🛡️ มั่นคง คุณพลาด "โอกาสทอง" แต่คุณก็ไม่มีหนี้และมีกำไรสม่ำเสมอ คู่แข่งที่ได้ที่นั่นไปกำลังดิ้นรนอย่างหนัก', zh: '🛡️ 稳步前进。你错过了“黄金机会”，但你保持了无债务且盈利状态。竞争对手夺走了那个位置，却陷入了苦战。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Pivot to Franchise: "Don\'t open it ourselves. Sell the brand rights to an investor to run it."', th: '🤝 ขายแฟรนไชส์: "ไม่ต้องทำเอง ขายสิทธิ์แบรนด์ให้นักลงทุนไปทำแทน"', zh: '🤝 转向特许经营：“我们不亲自开。把品牌权卖给投资人去经营。”' }, consequence: { en: '💰 Passive Income. You get a $50k fee and 5% of their sales. You don\'t have the stress of management. Smart scaling.', th: '💰 เสือนอนกิน คุณได้ค่าธรรมเนียม $50k และ 5% จากยอดขายเขา ไม่ต้องมานั่งเครียดเรื่องบริหารเอง สเกลธุรกิจได้ฉลาดมาก', zh: '💰 被动收入。你得到了5万美元的加盟费和他们销售额的5%。你没有管理的压力。聪明的扩张。' }, stats: { competence: 70, ethics: 40, leadership: 40, innovation: 90 } },
            { id: 'D', text: { en: '🏢 Warehouse/Online: "Spend that money on a warehouse and boost online ads instead."', th: '🏢 เน้นโกดังและออนไลน์: "เอาเงินก้อนนั้นไปเช่าโกดังแล้วอัดโฆษณาออนไลน์แทนดีกว่า"', zh: '🏢 仓库/线上：“把那笔钱花在仓库上，转而加大线上广告投入。”' }, consequence: { en: '📈 Digital Pivot. Foot traffic matters less now. Your online sales grow by 400%. You are no longer just a local shop.', th: '📈 เปลี่ยนผ่านสู่ดิจิทัล ยอดคนเดินร้านสำคัญน้อยลงแล้ว ยอดขายออนไลน์คุณโต 400% ตอนนี้คุณไม่ใช่แค่ร้านแถวบ้านอีกต่อไป', zh: '📈 数字化转型。客流量现在不那么重要了。你的线上销售额增长了400%。你不再仅仅是一家地方小店。' }, stats: { competence: 50, ethics: 30, leadership: 50, innovation: 100 } }
        ]
    },
    {
        id: 'me_062',
        text: {
            en: '⚠️ Product Recall: A supplier notifies you that a batch of small kitchen appliances you sold last month has a wire defect that could cause fires.',
            th: '⚠️ เรียกคืนสินค้า: ซัพพลายเออร์แจ้งว่าเครื่องใช้ไฟฟ้าในครัวล็อตที่คุณขายไปเดือนที่แล้วมีปัญหาสายไฟเฟล ซึ่งอาจทำให้เกิดไฟไหม้ได้',
            zh: '⚠️ 产品召回：一家供应商通知你，你上个月卖出的一批小家电存在电线缺陷，可能会引发火灾。'
        },
        options: [
            { id: 'A', text: { en: '🤫 Hope for the Best: "Most people won\'t use it anyway. Recalling will ruin our reputation."', th: '🤫 ภาวนาให้รอด: "คนส่วนใหญ่คงไม่เอามาใช้หรอก การเรียกคืนจะทำชื่อเสียงเราป่นปี้"', zh: '🤫 寄予厚望：“反正大多数人不会去用它。召回会毁了我们的声誉。”' }, consequence: { en: '💀 Tragedy. A customer\'s house burns down. You are sued for millions. Your shop is shut down by the government.', th: '💀 โศกนาฏกรรม บ้านลูกค้าถูกไฟไหม้ คุณโดนฟ้องเรียกค่าเสียหายหลายล้าน ร้านโดนรัฐสั่งปิดถาวร', zh: '💀 悲剧。一位客户的房子被烧毁了。你被起诉索赔数百万美元。你的店铺被政府关闭。' }, stats: { competence: 10, ethics: -100, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '📢 Full Public Recall: "Post on social media, email every buyer, and offer 120% refund credit."', th: '📢 ประกาศเรียกคืนสาธารณะ: "โพสต์โซเชียล อีเมลหาคนซื้อทุกคน และคืนเงินเป็นเครดิต 120%"', zh: '📢 全面公开召回：“在社交媒体上发布公告，给每位买家发邮件，并提供120%的退款额度。”' }, consequence: { en: '✅ Integrity Armor. It costs $15,000, but the public admires your speed and honesty. You actually gain more loyal customers than you lost.', th: '✅ เกราะป้องกันจรรยาบรรณ เสียเงินไป $15,000 แต่คนชื่นชมความรวดเร็วและซื่อสัตย์ คุณได้ลูกค้าขาประจำเพิ่มขึ้นด้วยซ้ำ', zh: '✅ 正直的铠甲。虽然花费了15000美元，但公众钦佩你的速度和诚实。实际上，你获得的心腹客户比失去的多。' }, stats: { competence: 50, ethics: 100, leadership: 70, innovation: 20 } },
            { id: 'C', text: { en: '🤫 Quiet Exchange: "Wait for people to complain, then give them a better model for free."', th: '🤫 แอบเปลี่ยนให้: "ใครมาบ่นค่อยเปลี่ยนรุ่นที่ดีกว่าให้ฟรีๆ"', zh: '🤫 悄悄更换：“等人们来投诉时，再免费给他们换一个更好的型号。”' }, consequence: { en: '⚠️ Delayed Risk. You save money, but you spend every night worrying about news of a fire. 5 people get injured before you finish the "quiet" recall.', th: '⚠️ เสี่ยงในระยะยาว ประหยัดเงินได้แหละ แต่คุณต้องนอนขวัญผวาทุกคืนว่าจะมีข่าวไฟไหม้ไหม สุดท้ายมีคนบาดเจ็บ 5 คนก่อนคุณจะแอบเปลี่ยนให้ครบ', zh: '⚠️ 潜在风险。你省了钱，但你每晚都在担心火灾的新闻。在你完成“悄悄”召回之前，已经有5人受伤了。' }, stats: { competence: 30, ethics: 20, leadership: 30, innovation: 10 } },
            { id: 'D', text: { en: '🤝 Safe Trade-in: "Ask them to bring the items back for a safety check and give a $50 discount coupon for their next visit."', th: '🤝 แลกเปลี่ยนปลอดภัย: "บอกให้ลูกค้าเอาของกลับมาตรวจเช็คความปลอดภัย แล้วแต้มคูปองส่วนลด $50 สำหรับครั้งหน้า"', zh: '🤝 安全折价贴换：“请他们把东西拿回来进行安全检查，并为下次光临提供50美元的优惠券。”' }, consequence: { en: '📈 Marketing Pivot. Most people just take the coupon and buy something else. You managed the risk and kept the revenue flowing.', th: '📈 พลิกเป็นการตลาด คนส่วนใหญ่เลือกรับคูปองแล้วไปซื้ออย่างอื่นแทน คุณจัดการความเสี่ยงได้โดยที่ยอดขายยังเดินอยู่', zh: '📈 营销转型。大多数人只是拿了优惠券，转而买了别的东西。你成功化解了风险，并保持了收入流。' }, stats: { competence: 60, ethics: 60, leadership: 40, innovation: 40 } }
        ]
    },
    {
        id: 'me_063',
        text: {
            en: '🏃 The Poaching: Your top manager, who knows all your supplier secrets, has been offered a 50% raise by your biggest competitor to join them.',
            th: '🏃 โดนดึงตัว: ผู้จัดการมือหนึ่งผู้รู้ความลับซัพพลายเออร์ทั้งหมดของคุณ โดนคู่แข่งทุ่มเงินเพิ่มเงินเดือน 50% เพื่อจ้างไปทำงานด้วย',
            zh: '🏃 挖墙脚：你的高级经理掌握着你所有的供应商秘密，你的最大竞争对手开出了加薪50%的条件诱其加盟。'
        },
        options: [
            { id: 'A', text: { en: '💰 Match the Offer: "I\'ll give you the same 50% raise. Please stay."', th: '💰 ให้เท่ากัน: "ฉันจะขึ้นเงินเดือนให้เท่าเขาเลยนะ อยู่ด้วยกันต่อเถอะ"', zh: '💰 给出同等条件：“我给你同样的50%加薪。请留下来。”' }, consequence: { en: '📉 Margin Squeeze. They stay, but now your payroll is bloated. Other staff find out and demand raises too. Total Chaos.', th: '📉 กำไรหด เขายอมอยู่ต่อ แต่ตอนนี้ค่าแรงคุณพุ่งกระฉูด พนักงานคนอื่นรู้เข้าก็แห่กันมาขอขึ้นเงินเดือนบ้าง วุ่นวายสุดๆ', zh: '📉 利润挤压。他们留了下来，但现在你的工资负担过重。其他员工发现后也要求加薪。一团糟。' }, stats: { competence: 30, ethics: 40, leadership: 30, innovation: 0 } },
            { id: 'B', text: { en: '🛡️ Enforce Non-Compete: "Remind them they signed a contract and sue if they join the rival."', th: '🛡️ บังคับใช้สัญญา: "เตือนเขาว่ามีสัญญาห้ามทำงานที่คู่แข่งอยู่ ถ้าไปจะฟ้อง!"', zh: '🛡️ 执行竞业协议：“提醒他们签署过合同，如果加入对手公司就起诉。”' }, consequence: { en: '💀 Toxic Culture. They stay because they are afraid, but they hate you now. Productivity drops and they start sabotaging the mood.', th: '💀 วัฒนธรรมองค์กรพังพินาศ เขาอยู่ต่อเพราะกลัว แต่เขาเกลียดคุณเข้าไส้แล้ว ประสิทธิภาพงานลดฮวบและเขาก็แอบทำบรรยากาศเสีย', zh: '💀 有毒的文化。他们因为害怕而留下来，但现在他们恨透了你。生产力下降，他们开始破坏公司氛围。' }, stats: { competence: 20, ethics: 20, leadership: 10, innovation: 0 } },
            { id: 'C', text: { en: '🤝 Offer Equity: "I can\'t give 50% cash, but I\'ll give you 5% ownership of the shop."', th: '🤝 ให้หุ้น: "ฉันให้เงินสด 50% ไม่ไหว แต่ฉันจะให้หุ้นร้าน 5% แทนนะ"', zh: '🤝 提供股权：“我拿不出50%的现金，但我会给你这家店5%的股份。”' }, consequence: { en: '🏆 Partner for Life. They feel like an owner now. They work twice as hard to grow THEIR shop. You lost 5% equity but gained a lifelong leader.', th: '🏆 หุ้นส่วนชีวิต เขารู้สึกเป็นเจ้าของร้านแล้ว เขายอมทำงานหนักเป็นสองเท่าเพื่อปั้นร้าน "ของเขา" คุณเสียหุ้น 5% แต่ได้ผู้นำที่ภักดีไปตลอดชีวิต', zh: '🏆 终身伙伴。他们现在觉得自己是老板了。他们加倍努力来经营“他们的”店。你失去了5%的股权，但赢得了一位终身领导者。' }, stats: { competence: 50, ethics: 50, leadership: 90, innovation: 40 } },
            { id: 'D', text: { en: '👋 Wish Success: "Go with my blessing. But I\'ll be replacing you with three ambitious robots/juniors."', th: '👋 ขอให้โชคดี: "ไปเถอะ ฉันขออวยพร แต่ฉันจะหาเด็กใหม่ไฟแรง (หรือหุ่นยนต์) 3 คนมาแทนที่คุณนะ"', zh: '👋 祝马到成功：“带着我的祝福走吧。但我会用三个雄心勃勃的机器人/后辈来取代你。”' }, consequence: { en: '📈 Adaptation. You save money on the high salary and train fresh blood. The rival gets a manager who is secretly burnt out. You win the long game.', th: '📈 การปรับตัว คุณประหยัดเงินเดือนก้อนโตแล้วเอามาปั้นเด็กใหม่ คู่แข่งได้ตัวผู้จัดการที่จริงๆ แล้วไฟมอดไปแล้ว คุณชนะในเกมยาว', zh: '📈 适应力。你省下了高额工资，并培养了新鲜血液。对手得到的是一个内心早已疲惫不堪的经理。你在长远博弈中获胜。' }, stats: { competence: 70, ethics: 50, leadership: 60, innovation: 60 } }
        ]
    },
    {
        id: 'me_064',
        text: {
            en: '📉 The Great Slump: The economy hits a recession. Consumer spending drops 40% city-wide. Your shop is empty.',
            th: '📉 วิกฤตเศรษฐกิจ: เศรษฐกิจถดถอย คนหยุดใช้จ่ายไปทั้งเมือง ยอดขายตกลง 40% ร้านคุณเงียบเหงา',
            zh: '📉 大蕭條：经济陷入衰退。全城消费支出下降了40%。你的店里空无一人。'
        },
        options: [
            { id: 'A', text: { en: '✂️ Cut Everything: "Lay off half the staff and cancel all luxury inventory orders."', th: '✂️ ตัดทุกอย่าง: "เลิกจ้างพนักงานครึ่งหนึ่งและยกเลิกออเดอร์ของหรูทั้งหมด"', zh: '✂️ 削减一切：“裁掉一半员工，取消所有奢侈品库存订单。”' }, consequence: { en: '🛡️ Survival Mode. You stay afloat, but the shop feels depressing. Customers notice the lack of staff. You barely survive.', th: '🛡️ โหมดเอาตัวรอด คุณไม่เจ๊ง แต่ร้านดูหดหู่มาก ลูกค้าสัมผัสได้ว่าพนักงานไม่พอ คุณรอดมาได้แบบหวุดหวิด', zh: '🛡️ 生存模式。你挺过来了，但店里氛围很压抑。顾客注意到了人员不足。你勉强维持。' }, stats: { competence: 40, ethics: 20, leadership: 20, innovation: 0 } },
            { id: 'B', text: { en: '🥖 Pivot to Essentials: "Start selling rice, soap, and basic goods instead of high-end gifts."', th: '🥖 เน้นของจำเป็น: "เปลี่ยนมาขายข้าวสาร สบู่ และของใช้จำเป็นแทนของขวัญราคาแพง"', zh: '🥖 转向基本生活用品：“开始销售大米、肥皂和基本商品，而不是高端礼品。”' }, consequence: { en: '✅ High Volume. People still need the basics. Profit per item is low, but you have huge traffic. You become the neighborhood\'s lifeline.', th: '✅ ยอดขายถล่มทลาย คนยังไงก็ต้องกินต้องใช้ กำไรต่อชิ้นอาจจะน้อย แต่คนเข้าร้านเพียบ คุณกลายเป็นเส้นเลือดใหญ่ของชุมชนเลย', zh: '✅ 高销量。人们仍然需要基本生活用品。虽然单件利润较低，但客流量巨大。你成为了社区的生命线。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 80 } },
            { id: 'C', text: { en: '💳 "Shop Now, Pay Later": "Offer credit to your regular customers to keep them buying."', th: '💳 "ช้อปก่อนจ่ายทีหลัง": "ให้เครดิตลูกค้าประจำเพื่อให้เขาซื้อของต่อไปได้"', zh: '💳 “先买后付”：“为老顾客提供信贷，让他们继续购买。”' }, consequence: { en: '💀 Debt Trap. Many customers never pay back. You are left with $20,000 in uncollectable debt. Bad financial decision.', th: '💀 กับดักหนี้ ลูกค้าหลายคนไม่กลับมาจ่าย คุณต้องแบกหนี้สูญ $20,000 เป็นการตัดสินใจทางการเงินที่พลาดมาก', zh: '💀 债务陷阱。许多顾客再也没还过钱。你背负了2万美元无法收回的债务。糟糕的财务决策。' }, stats: { competence: 10, ethics: 60, leadership: 40, innovation: 20 } },
            { id: 'D', text: { en: '📢 Aggressive Marketing: "Spend your reserves on massive sales and events to steal all remaining market share."', th: '📢 การตลาดเชิงรุก: "เอาเงินสำรองออกมาจัดเซลล์ใหญ่และอีเวนต์เพื่อดึงลูกค้าที่เหลืออยู่มาให้หมด"', zh: '📢 激进营销：“把你的储备金花在大型促销和活动上，抢走所有剩下的市场份额。”' }, consequence: { en: '🏆 Dominance. Competitors close down, and you take their customers. When the recession ends, you are the only major shop left.', th: '🏆 เจ้าตลาด คู่แข่งพากันปิดตัวลงและคุณก็ได้ลูกค้าเขามาหมด พอเศรษฐกิจฟื้นตัว คุณเลยกลายเป็นร้านใหญ่รายเดียวที่เหลืออยู่', zh: '🏆 统领地位。竞争对手倒闭了，你接收了他们的客户。当经济衰退结束时，你是唯一剩下的大型店铺。' }, stats: { competence: 70, ethics: 30, leadership: 60, innovation: 70 } }
        ]
    },
    {
        id: 'me_065',
        text: {
            en: '🔍 The Mystery Shopper: An inspector from the Consumer Protection Bureau visits. They find out you\'ve been mislabeling a "Organic" product.',
            th: '🔍 นักช้อปปริศนา: ผู้ตรวจการจากสำนักงานคุ้มครองผู้บริโภคมาเยี่ยมชม แล้วพบว่าคุณติดป้าย "ออร์แกนิก" ผิดตัว',
            zh: '🔍 神秘顾客：一位来自消费者保护局的检查员来访。他们发现你一直在错误地标注一款“有机”产品。'
        },
        options: [
            { id: 'A', text: { en: '💸 Bribe Them: "Offer a gift or discount for future inspections."', th: '💸 ติดสินบน: "เสนอ ของขวัญ หรือส่วนลดสำหรับการตรวจสอบครั้งหน้า"', zh: '💸 贿赂他们："提供礼物或为未来的检查提供优惠。"' }, consequence: { en: '💀 Prison. They were recording the whole thing. You are arrested for bribery and fraud. Store seized.', th: '💀 คุกจ้า เขาอัดเสียงไว้หมดแล้ว คุณโดนจับฐานติดสินบนและฉ้อโกง ร้านโดนยึด', zh: '💀 监狱。他们记录了全过程。你因受贿和诈骗被捕。店铺被没收。' }, stats: { competence: 10, ethics: -100, leadership: 10, innovation: 0 } },
            { id: 'B', text: { en: '🙏 Apologize & Fix: "Accept the fine, fix the labels immediately, and post a correction notice."', th: '🙏 ขอโทษและแก้ไข: "ยอมจ่ายค่าปรับ เปลี่ยนป้ายทันที และโพสต์แจ้งแก้ไขให้ทราบ"', zh: '🙏 道歉并修复：“接受罚款，立即修改标签，并发布更正公告。”' }, consequence: { en: '✅ Lesson Learned. You pay a $2,000 fine. It hurts, but your reputation is saved by your swift action. You now check every label 3 times.', th: '✅ บทเรียนราคาแพง คุณข่ายค่าปรับ $2,000 เจ็บแต่จบ รักษาชื่อเสียงไว้ได้ด้วยความรวดเร็วในการแก้ไข ตอนนี้คุณเช็คป้าย 3 รอบก่อนติดทุกครั้ง', zh: '✅ 吸取教训。你支付了2000美元的罚款。这很让人心痛，但你的迅速行动挽救了你的声誉。你现在会对每个标签查三遍。' }, stats: { competence: 50, ethics: 80, leadership: 50, innovation: 10 } },
            { id: 'C', text: { en: '🤡 Blame the Supplier: "It\'s THEIR fault. I\'m just the middleman!"', th: '🤡 โทษซัพพลายเออร์: "ความผิดเขาล้วนๆ ผมแค่คนกลางนะ!"', zh: '🤡 甩锅供应商：“那是他们的错。我只是个中间商！”' }, consequence: { en: '😐 Redirected Fine. You avoid the criminal charge, but the supplier refuses to work with you ever again. You lose a key product line.', th: '😐 รอดแต่ร่วง คุณรอดคดีอาญาไปได้ แต่ซัพพลายเออร์เลิกส่งของให้คุณถาวร คุณเสียสินค้าตัวเด็ดไปเลย', zh: '😐 罚款转移。你避开了刑事指控，但供应商拒绝再和你合作。你失去了一条关键的产品线。' }, stats: { competence: 40, ethics: 30, leadership: 30, innovation: 0 } },
            { id: 'D', text: { en: '📉 Refute Findings: "Hire a lawyer and fight the claim that it\'s not organic."', th: '📉 โต้แย้ง: "จ้างทนายมาสู้คดี ยืนยันว่ามันคือออร์แกนิกจริงๆ"', zh: '📉 驳回调查结果：“请律师，针对其‘非有机’的指控进行辩护。”' }, consequence: { en: '📉 昂贵的失败。你浪费了1万美元的律师费，而且还是输了。你在公众面前显得傲慢且具有欺骗性。', th: '📉 เสียทั้งเงินทั้งหน้า เสียค่าทนายไป $10,000 แต่ก็ยังแพ้ แถมดูเป็นคนหยิ่งและหลอกลวงในสายตาสังคมอีก', zh: '📉 昂贵的失败。你浪费了1万美元的律师费，而且还是输了。你在公众面前显得傲慢且具有欺骗性。' }, stats: { competence: 20, ethics: 20, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'me_066',
        text: {
            en: '🚶 Pedestrian Zone: The city decides to block cars on your street to make it a pedestrian-only tourist walk. You lose your parking spots.',
            th: '🚶 เขตถนนคนเดิน: เมืองตัดสินใจห้ามรถเข้าถนนเส้นของคุณเพื่อทำเป็นถนนคนเดินสำหรับนักท่องเที่ยว คุณเสียที่จอดรถของร้านไป',
            zh: '🚶 步行区：市里决定禁止车辆驶入你所在的街道，将其改为步行街。你失去了停车位。'
        },
        options: [
            { id: 'A', text: { en: '🛒 Sidewalk Sales: "Move your best items outside onto the street to catch walkers."', th: '🛒 ขายริมทาง: "เอาของขายดีออกมาตั้งโชว์บนถนนเลย ดึงดูดคนเดิน"', zh: '🛒 露天销售：“把最畅销的商品搬到街道上来吸引路人。”' }, consequence: { en: '🏆 Massive Growth. People walk by, see the cool stuff, and walk in. Sales double. Turns out cars were the problem!', th: '🏆 โตระเบิด คนเดินผ่านเห็นของเจ๋งๆ ก็เดินเข้าร้าน ยอดขายพุ่งสองเท่า ปรากฏว่าที่ผ่านมาพวกรถนั่นแหละคือตัวปัญหา!', zh: '🏆 巨幅增长。人们走过，看到酷炫的东西，就走进了店里。销售额翻倍。事实证明，以前那些车才是问题所在！' }, stats: { competence: 60, ethics: 40, leadership: 50, innovation: 90 } },
            { id: 'B', text: { en: '📦 Online Focus: "Transition the shop into a shipping hub and focus on web orders."', th: '📦 เน้นออนไลน์: "เปลี่ยนร้านเป็นจุดกระจายสินค้าแล้วเน้นยอดสั่งผ่านเว็บแทน"', zh: '📦 线上重心：“将店铺转型为配送枢纽，专注于网络订单。”' }, consequence: { en: '✅ Safe Pivot. You don\'t need foot traffic or cars. Your operation stays efficient, but you lose the "community" feel.', th: '✅ ปรับตัวได้ปลอดภัย ไม่ต้องคลิกง้อคนเดินหรือที่จอดรถ ธุรกิจยังเดินต่อได้ดีแต่เสียบรรยากาศ "ชุมชน" ไป', zh: '✅ 安全转型。你不需要客流，也不需要车辆。你的运营保持高效，但你失去了“社区”氛围。' }, stats: { competence: 50, ethics: 40, leadership: 40, innovation: 70 } },
            { id: 'C', text: { en: '🚫 Protest: "Organize other shop owners to fight the city council to bring back cars."', th: '🚫 ประท้วง: "รวมกลุ่มเจ้าของร้านอื่นไปสู้กับสภาเมืองเพื่อเอารถกลับมา"', zh: '🚫 抗议：“组织其他店主对抗市议会，要求恢复车辆通行。”' }, consequence: { en: '💀 PR Fail. The public LOVES the pedestrian street. You look like an old-fashioned grump. Young customers boycott you.', th: '💀 PR พังพินาศ สังคม "ชอบ" ถนนคนเดินมาก คุณเลยดูเป็นตาแก่หัวโบราณขี้บ่น วัยรุ่นพากันแบนร้านคุณเลยทีนี้', zh: '💀 公关失败。公众非常喜欢步行街。你看起来像个过时的牢骚满腹的人。年轻顾客抵制你。' }, stats: { competence: 20, ethics: 30, leadership: 60, innovation: 0 } },
            { id: 'D', text: { en: '🥤 Add a Cafe: "Small space for coffee so walkers stop and rest in your shop."', th: '🥤 เปิดคาเฟ่เพิ่ม: "กันที่นิดหนึ่งทำมุมกาแฟ ให้คนเดินมาพักเหนื่อยที่ร้าน"', zh: '🥤 增加咖啡馆：“开辟一个小小的咖啡空间，让行人停下来在你的店里休整。”' }, consequence: { en: '✅ Strategic Win. They come for the coffee and leave with a $50 gift. You adapted perfectly to the new environment.', th: '✅ ชนะด้วยกลยุทธ์ เขามาเพื่อสั่งกาแฟแต่ได้ของขวัญ $50 ติดมือกลับไปด้วย คุณปรับตัวเข้ากับสภาพแวดล้อมใหม่ได้เป๊ะมาก', zh: '✅ 战略上的胜利。他们为了咖啡而来，却带着50美元的礼品离开。你完美地适应了新环境。' }, stats: { competence: 60, ethics: 50, leadership: 50, innovation: 80 } }
        ]
    },
    {
        id: 'me_067',
        text: {
            en: '👓 The AR Revolution: A tech firm offers to build an Augmented Reality app for your shop where people can "preview" products in their home.',
            th: '👓 ปฏิวัติ AR: บริษัทเทคเสนอทำแอป AR ให้ร้านคุณ ที่ลูกค้าสามารถ "ลองวาง" สินค้าในบ้านได้ผ่านหน้าจอ',
            zh: '👓 AR革命：一家科技公司提议为你的店铺开发一款增强现实（AR）应用，让人们可以在家中“预览”产品。'
        },
        options: [
            { id: 'A', text: { en: '🚀 Early Adopter: "Pay the $20,000. Tech is the future."', th: '🚀 ผู้นำเทรนด์: "จ่ายไป $20,000 เลย เทคโนโลยีนี่แหละคืออนาคต"', zh: '🚀 早期采用者：“支付2万美元。技术就是未来。”' }, consequence: { en: '✅ Tech Leader. You become the first shop in the country to do this. Viral news coverage. Sales of large items increase 60%.', th: '✅ ผู้นำด้านเทคโนโลยี คุณกลายเป็นร้านแรกในประเทศที่ทำแบบนี้ ข่าวออกดังไปทั่ว ยอดขายของชิ้นใหญ่เพิ่มขึ้น 60%', zh: '✅ 技术领先者。你成为了该国第一家这样做的店铺。病毒式的媒体报道。大宗商品的销售额增长了60%。' }, stats: { competence: 50, ethics: 40, leadership: 50, innovation: 100 } },
            { id: 'B', text: { en: '🐢 Wait and See: "Let larger companies test AR first. It might be a gimmick."', th: '🐢 รอดูท่าที: "ให้บริษัทใหญ่ๆ ลองก่อนเถอะ มันอาจจะเป็นแค่แฟชั่นประเดี๋ยวประด๋าว"', zh: '🐢 观望一段时间：“让大公司先测试AR。这可能只是个噱头。”' }, consequence: { en: '😐 Mid-tier. You save the money, but your brand looks "outdated" within two years. You eventually have to buy a cheaper, worse version.', th: '😐 เสมอตัว คุณประหยัดเงินได้ แต่แบรนด์คุณดู "เอาท์" ไปเลยในเวลาแค่ 2 ปี สุดท้ายก็ต้องไปหาซื้อแอปเวอร์ชันที่ห่วยกว่าและถูกกว่ามาใช้ทีหลัง', zh: '😐 中等水平。你省了钱，但你的品牌在两年内就显得“过时”了。你最终不得不购买一个更便宜、更糟糕的版本。' }, stats: { competence: 40, ethics: 40, leadership: 30, innovation: 10 } },
            { id: 'C', text: { en: '📈 Partnership: "Offer the tech firm 20% of all sales made via the app instead of paying upfront."', th: '📈 หุ้นส่วนทางเทคนิค: "เสนอส่วนแบ่งยอดขาย 20% จากแอปแทนการจ่ายเงินก้อนแรก"', zh: '📈 合作关系：“向科技公司提议，应用产生的销售额分成20%，而不是预付费用。”' }, consequence: { en: '✅ Risk Mitigation. They work extra hard to make the app good because they only get paid if YOU sell. Perfect alignment.', th: '✅ ลดความเสี่ยง เขาตั้งใจทำแอปให้ดีสุดๆ เพราะเขาจะได้เงินก็ต่อเมื่อคุณขายได้เท่านั้น วิน-วินทั้งคู่', zh: '✅ 风险缓解。他们会格外努力地完善应用，因为只有你卖出去了，他们才能拿到钱。完美的利益一致。' }, stats: { competence: 70, ethics: 40, leadership: 60, innovation: 80 } },
            { id: 'D', text: { en: '🙅 Stick to Physical: "Retail is about touch and feel. AR is a distraction."', th: '🙅 เน้นสัมผัสจริง: "เสน่ห์ค้าปลีกคือการได้จับต้องของจริง AR มันแค่เรื่องกวนใจ"', zh: '🙅 坚持实物：“零售的核心在于触感和感觉。AR只是在分散注意力。”' }, consequence: { en: '📉 Luxury Niche. You survive by catering only to those who hate technology. Your market becomes very small but very loyal.', th: '📉 ตลาดเฉพาะกลุ่มพรีเมียม คุณรอดได้ด้วยการจับกลุ่มคนที่ไม่ชอบเทคโนโลยี ตลาดคุณจะเล็กมากแต่เหนียวแน่นสุดๆ', zh: '📉 奢侈品小众。你通过迎合那些讨厌技术的人而生存。你的市场变得非常小，但非常忠诚。' }, stats: { competence: 30, ethics: 50, leadership: 20, innovation: 0 } }
        ]
    },
    {
        id: 'me_068',
        text: {
            en: '🎭 Charity Gala: You are asked to be the main sponsor for the local hospital fundraise. It costs $10,000, and you get your name on the wall.',
            th: '🎭 งานกาล่าการกุศล: คุณได้รับเชิญเป็นสปอนเซอร์หลักงานหาทุนให้โรงพยาบาลท้องถิ่น จ่าย $10,000 แล้วจะได้สลักชื่อบนฝาผนัง',
            zh: '🎭 慈善晚宴：你受邀成为当地医院募捐活动的主要赞助商。费用为1万美元，你的名字可以不仅印在墙上。'
        },
        options: [
            { id: 'A', text: { en: '💰 Pay Up: "It\'s good for the soul and the brand."', th: '💰 จ่ายเลย: "ดีต่อใจและดีต่อแบรนด์ด้วย"', zh: '💰 付钱：“这对灵魂和品牌都有好处。”' }, consequence: { en: '✅ Prestige Boost. You meet the city\'s elite. You get three high-net-worth customers from that one night. ROI is positive.', th: '✅ อัพเกรดบารมี คุณได้เจอเหล่าอีลิทในเมือง และได้ลูกค้าเงินหนามา 3 รายจากคืนนั้นคืนเดียว คุ้มค่าสุดๆ', zh: '✅ 名声大振。你结识了城里的精英。仅那一晚你就收获了三个高净值客户。投资回报率是正的。' }, stats: { competence: 40, ethics: 90, leadership: 70, innovation: 10 } },
            { id: 'B', text: { en: '📦 Donate Goods: "Offer $10,000 worth of products for their auction instead of cash."', th: '📦 บริจาคของ: "เสนอให้สินค้ามูลค่า $10,000 มาประมูลแทนเงินสดนะ"', zh: '📦 捐赠物资：“为他们的拍卖提供价值1万美元的产品，而不是现金。”' }, consequence: { en: '📈 Smart Giving. The products cost YOU only $4,000. People see your best items on display. It\'s an advertisement disguise as charity.', th: '📈 บริจาคอย่างฉลาด สินค้าพวกนั้นต้นทุนคุณแค่ $4,000 เอง แถมคนยังได้เห็นของดีๆ จากร้านคุณด้วย เป็นการโฆษณาในคราบการกุศลที่เนียนกริบ', zh: '📈 聪明的捐赠。那些产品的成本只要4000美元。人们看到了你展示出的最好的商品。这是一场伪装成慈善的广告。' }, stats: { competence: 80, ethics: 50, leadership: 50, innovation: 40 } },
            { id: 'C', text: { en: '🙅 Decline: "We are a business, not a bank. Use the money for staff raises instead."', th: '🙅 ปฏิเสธ: "เราเป็นธุรกิจนะไม่ใช่ธนาคาร เอาเงินไปขึ้นเงินเดือนพนักงานดีกว่า"', zh: '🙅 拒绝：“我们是生意人，不是银行。把这笔钱用来给员工加薪吧。”' }, consequence: { en: '❤️ Staff Loyalty. Your team is happy, but the community leaders think you are "greedy." You miss out on netorking opportunities.', th: '❤️ ลูกน้องรักตายเลย ทีมงานแฮปปี้มาก แต่พวกผู้นำชุมชนแอบมองว่าคุณ "งก" คุณพลาดโอกาสในการคอนเนคชั่นสำคัญไปอย่างน่าเสียดาย', zh: '❤️ 员工忠诚度。你的团队很开心，但社区领导认为你“贪婪”。你错过了建立人脉的机会。' }, stats: { competence: 30, ethics: 40, leadership: 80, innovation: 0 } },
            { id: 'D', text: { en: '🤝 Match Donations: "Tell the customers we will match every $1 they donate at the register."', th: '🤝 สมทบทุน: "บอกลูกค้าว่าถ้าเขาบริจาค $1 ที่เคาน์เตอร์ ร้านจะสมทบให้อีก $1"', zh: '🤝 匹配捐款：“告诉顾客，他们在收银台每捐出1美元，我们也会匹配捐出1美元。”' }, consequence: { en: '✅ Community Win. You only end up paying $3,000, but the total impact is $6,000. Customers feel heroic and keep coming back.', th: '✅ ชนะใจชุมชน สุดท้ายคุณจ่ายแค่ $3,000 แต่ยอดบริจาครวมคือ $6,000 ลูกค้ารู้สึกเหมือนเป็นฮีโร่และจะกลับมาอุดหนุนคุณบ่อยขึ้น', zh: '✅ 社区胜利。你最终只付了3000美元，但总影响是6000美元。顾客觉得自己像个英雄，并会不断光顾。' }, stats: { competence: 60, ethics: 80, leadership: 70, innovation: 60 } }
        ]
    },
    {
        id: 'me_069',
        text: {
            en: '🔥 Stockroom Fire: A small electrical fire in the back destroyed 20% of your inventory and left the rest smelling like smoke.',
            th: '🔥 ไฟไหม้ห้องสต็อก: ไฟฟ้าลัดวงจรทำลายสต็อกไป 20% ส่วนที่เหลือก็เหม็นกลิ่นควันไปหมด',
            zh: '🔥 仓库火灾：后面发生了一场小型电气火灾，毁掉了你20%的库存，剩下的东西也全是一股烟味。'
        },
        options: [
            { id: 'A', text: { en: '🧼 Professional Cleaning: "Hire a restoration crew to deep clean every item and the walls."', th: '🧼 ทำความสะอาดด่วน: "จ้างทีมทำความสะอาดมืออาชีพมากู้คืนสินค้าและตัวร้านทุกตารางนิ้ว"', zh: '🧼 专业清洁：“雇佣一支修复团队，对每件物品和墙壁进行深度清洁。”' }, consequence: { en: '✅ Back to Baseline. It costs $5,000. Everything is perfect again. You lose two weeks of sales but your brand remains premium.', th: '✅ กลับสู่ปกติ เสียเงิน $5,000 ทุกอย่างกลับมาเป๊ะเหมือนเดิม เสียยอดขายไปสองอาทิตย์แต่รักษาภาพลักษณ์เกรดพรีเมียมไว้ได้', zh: '✅ 回到原点。花费了5000美元。一切又完美如初了。你损失了两周的销售额，但你的品牌依然保持高端。' }, stats: { competence: 50, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'B', text: { en: '📢 "Smoke Damage sale": "Be honest. Sell everything at 60% off because of the smell."', th: '📢 "เลหลังของเหม็นควัน": "บอกความจริงเลย ลด 60% ทั้งร้านเพราะมีกลิ่นควันติด"', zh: '📢 “烟雾损伤拍卖”：“保持诚实。因为有味道，所有东西全部4折出售。”' }, consequence: { en: '🏆 Insane Traffic. People don\'t care about a little smoke smell for a 60% discount. You empty the whole store in 48 hours. Quick cash to restock.', th: '🏆 คนแน่นร้านแตก! คนไม่สนหรอกว่ากลิ่นควันนิดหน่อยถ้าได้ลด 60% คุณระบายของเกลี้ยงร้านใน 48 ชั่วโมง ได้เงินสดมากดของใหม่ทันใจ', zh: '🏆 令人疯狂的人气。人们并不在意为了4折优惠而忍受一点点烟味。你在48小时内清空了全店。快速回笼资金用于补货。' }, stats: { competence: 60, ethics: 70, leadership: 50, innovation: 90 } },
            { id: 'C', text: { en: '🤥 Use Deodorizer: "Spray everything with heavy perfume and sell it as normal."', th: '🤥 ใช้สเปรย์ดับกลิ่น: "ฉีดน้ำหอมกลบให้มิดแล้วเนียนขายตามปกติไปเลย"', zh: '🤥 使用除臭剂：“在所有东西上喷洒浓香水，按正常情况出售。”' }, consequence: { en: '💀 Customer Backlash. As soon as the perfume fades at home, customers realize they were tricked. 20 chargebacks and terrible reviews.', th: '💀 โดนทัวร์ลง พอพอน้ำหอมระเหยหมดที่บ้าน ลูกค้ารู้ทันทีว่าโดนหลอก โดนขอคืนเงินรัวๆ แถมรีวิวด่ายับ', zh: '💀 客户抵制。一旦香水味在家中散去，客户就会意识到受骗了。20笔退款要求和糟糕的评价。' }, stats: { competence: 20, ethics: -80, leadership: 20, innovation: 0 } },
            { id: 'D', text: { en: '📝 Insurance Fraud: "Claim that 80% was destroyed to get a bigger payout."', th: '📝 โกงประกัน: "แจ้งว่าความเสียหาย 80% เลย จะได้เรียกค่าเชดเชยได้เยอะขึ้น"', zh: '📝 保险诈骗：“声称80%的物资被毁，以获得更高的赔付。”' }, consequence: { en: '💀 Caught. The adjuster finds your hidden stash. You are charged with felony fraud. Shop closed. End of career.', th: '💀 โดนจับได้! ผู้ประเมินเจอของที่คุณแอบซ่อนไว้ คุณโดนฟ้องคดีอาญาฐานฉ้อโกง ปิดร้าน จบอาชีพพ่อค้า', zh: '💀 被抓。理赔员发现了你藏起来的货物。你被控犯有诈骗重罪。店铺关闭。职业生涯结束。' }, stats: { competence: 10, ethics: -100, leadership: -20, innovation: 0 } }
        ]
    },
    {
        id: 'me_070',
        text: {
            en: '🏢 B2B Opportunity: A new hotel chain wants you to be their exclusive supplier for room decorations. It\'s steady income but lower profit per item.',
            th: '🏢 ธุรกิจแบบ B2B: เครือโรงแรมใหม่ต้องการให้คุณเป็นซัพพลายเออร์เจ้าเดียวที่ส่งของตกแต่งห้องให้ รายได้มั่นคงแต่กำไรต่อชิ้นน้อยลง',
            zh: '🏢 B2B机会：一个新的连锁酒店希望你成为他们客房装饰品的独家供应商。收入稳定，但单件利润较低。'
        },
        options: [
            { id: 'A', text: { en: '✍️ Sign the Contract: "Stability is king. Secure the revenue."', th: '✍️ เซ็นสัญญาเลย: "ความมั่นคงคือหัวใจสำคัญ ล็อกยอดรายได้ไว้ก่อน"', zh: '✍️ 签约：“稳定是王道。确保收入来源。”' }, consequence: { en: '✅ Safe Growth. You hire two people just to manage the hotel orders. Your retail shop becomes a side-project. You are now a wholesaler.', th: '✅ เติบโตอย่างปลอดภัย คุณจ้างพนักงาน 2 คนมาดูแลออเดอร์โรงแรมโดยเฉพาะ ร้านค้าปลีกกลายเป็นงานรองไปเลย ตอนนี้คุณคือเจ้าของธุรกิจขายส่งเต็มตัวแล้ว', zh: '✅ 稳健增长。你雇了两个人专门负责酒店订单。你的零售店成了副业。你现在是一个批发商了。' }, stats: { competence: 60, ethics: 40, leadership: 70, innovation: 30 } },
            { id: 'B', text: { en: '🚫 Decline: "We are a boutique shop, not a factory. We focus on individual customers."', th: '🚫 ปฏิเสธ: "เราคือร้านบูติกนะไม่ใช่โรงงาน เราเน้นดูแลลูกค้าเป็นรายคน"', zh: '🚫 拒绝：“我们是精品店，不是工厂。我们专注于个人客户。”' }, consequence: { en: '🛡️ Brand Integrity. You remain "exclusive" and "rare." Your retail prices stay high, but you struggle when the tourist season ends.', th: '🛡️ รักษาภาพลักษณ์แบรนด์ คุณยังดู "เอ็กซ์คลูซีฟ" และ "หายาก" ราคายังอัพได้สูง แต่จะลำบากหน่อยช่วงหมดฤดูท่องเที่ยว', zh: '🛡️ 品牌完整性。你保持了“独家”和“稀有”。你的零售价保持在高位，但旅游淡季时你会比较艰难。' }, stats: { competence: 40, ethics: 50, leadership: 40, innovation: 10 } },
            { id: 'C', text: { en: '🤝 Limited Pilot: "Only supply 10 rooms first. See if we can handle the volume."', th: '🤝 ลองเชิงก่อน: "ส่งให้แค่ 10 ห้องก่อนละกัน ดูว่าเราไหวไหม"', zh: '🤝 有限试点：“先只供应10间房。看看我们是否能处理这样的体量。”' }, consequence: { en: '✅ Smart Testing. You realize the hotel is a nightmare to work with. They pay late. You decline the full contract and save your business.', th: '✅ ทดสอบได้ฉลาด คุณพบว่าดีลกับโรงแรมเป็นฝันร้ายมาก จ่ายเงินก็ช้า คุณเลยปฏิเสธสัญญาเต็มรูปแบบไป ช่วยชีวิตธุรกิจไว้ได้ทัน', zh: '✅ 聪明的测试。你意识到这家酒店非常难伺候。他们回款很慢。你拒绝了全球合同，挽救了自己的事业。' }, stats: { competence: 70, ethics: 40, leadership: 50, innovation: 60 } },
            { id: 'D', text: { en: '🚀 Exclusive Brand: "Offer to create a special product line JUST for them, co-branded."', th: '🚀 แบรนด์เอ็กซ์คลูซีฟ: "เสนอทำคอลเลกชันพิเศษให้เขาโดยเฉพาะ (Co-brand)"', zh: '🚀 独家品牌：“提议为他们专门打造一个特殊的联名系列。”' }, consequence: { en: '🏆 Master Merchant. The hotel guests love the items so much they come to your shop to buy more. You get the B2B revenue AND new retail customers.', th: '🏆 สุดยอดพ่อค้า แขกที่พักโรงแรมชอบของมากจนต้องตามมาซื้อถึงที่ร้าน คุณได้ทั้งรายได้ขายส่งและลูกค้าปลีกหน้าใหม่เพียบ', zh: '🏆 商业大师。酒店住客非常喜欢这些物品，以至于他们来到你的店里购买更多。你既获得了B2B收入，又获得了新的零售客户。' }, stats: { competence: 60, ethics: 40, leadership: 60, innovation: 90 } }
        ]
    }
];

export default merchantQuestions;
