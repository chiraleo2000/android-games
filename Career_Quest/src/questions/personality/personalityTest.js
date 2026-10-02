// Personality Test - MBTI-based with Likert Scale
// 100 Questions using Strongly Disagree to Strongly Agree scale

// Response scale constants
export const LIKERT_SCALE = {
  STRONGLY_DISAGREE: { id: 1, weight: -2 },
  DISAGREE: { id: 2, weight: -1 },
  NEUTRAL: { id: 3, weight: 0 },
  AGREE: { id: 4, weight: 1 },
  STRONGLY_AGREE: { id: 5, weight: 2 }
};

// Labels for Likert scale responses
export const LIKERT_LABELS = {
  1: { en: 'Strongly Disagree', th: 'ไม่เห็นด้วยอย่างยิ่ง', zh: '非常不同意' },
  2: { en: 'Disagree', th: 'ไม่เห็นด้วย', zh: '不同意' },
  3: { en: 'Neutral', th: 'เฉยๆ', zh: '中立' },
  4: { en: 'Agree', th: 'เห็นด้วย', zh: '同意' },
  5: { en: 'Strongly Agree', th: 'เห็นด้วยอย่างยิ่ง', zh: '非常同意' }
};

// MBTI Dimension Indicators
// E/I: Extraversion vs Introversion
// N/S: Intuition vs Sensing
// F/T: Feeling vs Thinking
// P/J: Perceiving vs Judging

export const personalityTestQuestions = [
  // === EXTRAVERSION vs INTROVERSION (Questions 1-25) ===
  {
    id: 'mbti_001',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E', // Positive response = E trait
    text: {
      en: 'I feel energized after spending time with a large group of people.',
      th: 'ฉันรู้สึกมีพลังหลังจากใช้เวลากับคนจำนวนมาก',
      zh: '与一大群人相处后，我感到精力充沛。'
    },
    traits: { adventurous: 1, social: 2, analytical: -1, practical: 0 }
  },
  {
    id: 'mbti_002',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'I',
    text: {
      en: 'I prefer to work alone rather than in a team.',
      th: 'ฉันชอบทำงานคนเดียวมากกว่าทำงานเป็นทีม',
      zh: '我更喜欢独自工作而不是团队合作。'
    },
    traits: { adventurous: -1, social: -2, analytical: 2, practical: 1 }
  },
  {
    id: 'mbti_003',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E',
    text: {
      en: 'I enjoy being the center of attention at social gatherings.',
      th: 'ฉันชอบเป็นจุดสนใจในงานสังคม',
      zh: '我喜欢在社交聚会中成为焦点。'
    },
    traits: { adventurous: 2, social: 2, analytical: -1, practical: 0 }
  },
  {
    id: 'mbti_004',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'I',
    text: {
      en: 'I need quiet time alone to recharge after a busy day.',
      th: 'ฉันต้องการเวลาเงียบๆ คนเดียวเพื่อเติมพลังหลังจากวันที่ยุ่ง',
      zh: '忙碌的一天后，我需要独处安静的时间来充电。'
    },
    traits: { adventurous: -1, social: -1, analytical: 2, practical: 1 }
  },
  {
    id: 'mbti_005',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E',
    text: {
      en: 'I think out loud and process ideas through discussion.',
      th: 'ฉันคิดออกเสียงและประมวลผลความคิดผ่านการพูดคุย',
      zh: '我喜欢大声思考，通过讨论来整理想法。'
    },
    traits: { adventurous: 1, social: 2, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_006',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'I',
    text: {
      en: 'I prefer deep one-on-one conversations over group discussions.',
      th: 'ฉันชอบการสนทนาลึกซึ้งแบบตัวต่อตัวมากกว่าการพูดคุยกลุ่ม',
      zh: '比起群体讨论，我更喜欢深入的一对一交谈。'
    },
    traits: { adventurous: 0, social: 1, analytical: 2, practical: 0 }
  },
  {
    id: 'mbti_007',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E',
    text: {
      en: 'I make friends easily and enjoy meeting new people.',
      th: 'ฉันเป็นมิตรง่ายและชอบพบปะคนใหม่',
      zh: '我很容易交到朋友，喜欢认识新朋友。'
    },
    traits: { adventurous: 2, social: 2, analytical: -1, practical: 0 }
  },
  {
    id: 'mbti_008',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'I',
    text: {
      en: 'I often feel drained after social events.',
      th: 'ฉันมักรู้สึกหมดแรงหลังงานสังคม',
      zh: '社交活动后我经常感到精疲力竭。'
    },
    traits: { adventurous: -1, social: -2, analytical: 1, practical: 1 }
  },
  {
    id: 'mbti_009',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E',
    text: {
      en: 'I prefer action-oriented activities over reflective ones.',
      th: 'ฉันชอบกิจกรรมที่เน้นการกระทำมากกว่าการครุ่นคิด',
      zh: '比起反思性活动，我更喜欢行动导向的活动。'
    },
    traits: { adventurous: 2, social: 1, analytical: -1, practical: 1 }
  },
  {
    id: 'mbti_010',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'I',
    text: {
      en: 'I value having a small circle of close friends.',
      th: 'ฉันให้คุณค่ากับการมีเพื่อนสนิทกลุ่มเล็กๆ',
      zh: '我珍视拥有一小群亲密的朋友。'
    },
    traits: { adventurous: 0, social: 1, analytical: 1, practical: 1 }
  },

  // === INTUITION vs SENSING (Questions 11-35) ===
  {
    id: 'mbti_011',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I often think about future possibilities and what could be.',
      th: 'ฉันมักคิดถึงความเป็นไปได้ในอนาคตและสิ่งที่อาจเกิดขึ้น',
      zh: '我经常思考未来的可能性和潜力。'
    },
    traits: { adventurous: 2, social: 0, analytical: 1, practical: -1 }
  },
  {
    id: 'mbti_012',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'S',
    text: {
      en: 'I focus on concrete facts and practical details.',
      th: 'ฉันให้ความสำคัญกับข้อเท็จจริงที่ชัดเจนและรายละเอียดที่ใช้ได้จริง',
      zh: '我专注于具体事实和实际细节。'
    },
    traits: { adventurous: -1, social: 0, analytical: 2, practical: 2 }
  },
  {
    id: 'mbti_013',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I enjoy exploring abstract concepts and theories.',
      th: 'ฉันชอบสำรวจแนวคิดและทฤษฎีที่เป็นนามธรรม',
      zh: '我喜欢探索抽象概念和理论。'
    },
    traits: { adventurous: 2, social: 0, analytical: 2, practical: -1 }
  },
  {
    id: 'mbti_014',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'S',
    text: {
      en: 'I prefer hands-on experience over theoretical learning.',
      th: 'ฉันชอบประสบการณ์จริงมากกว่าการเรียนรู้ทางทฤษฎี',
      zh: '比起理论学习，我更喜欢动手实践。'
    },
    traits: { adventurous: 1, social: 0, analytical: -1, practical: 3 }
  },
  {
    id: 'mbti_015',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I often see patterns and connections others miss.',
      th: 'ฉันมักเห็นรูปแบบและความเชื่อมโยงที่คนอื่นมองข้าม',
      zh: '我经常能看到别人忽略的模式和联系。'
    },
    traits: { adventurous: 1, social: 0, analytical: 2, practical: 0 }
  },
  {
    id: 'mbti_016',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'S',
    text: {
      en: 'I trust information that comes from my direct experience.',
      th: 'ฉันเชื่อถือข้อมูลที่มาจากประสบการณ์โดยตรงของฉัน',
      zh: '我相信来自直接经验的信息。'
    },
    traits: { adventurous: 0, social: 0, analytical: 1, practical: 3 }
  },
  {
    id: 'mbti_017',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I am more interested in the big picture than small details.',
      th: 'ฉันสนใจภาพรวมมากกว่ารายละเอียดเล็กๆ',
      zh: '比起小细节，我更关注大局。'
    },
    traits: { adventurous: 2, social: 0, analytical: 0, practical: -2 }
  },
  {
    id: 'mbti_018',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'S',
    text: {
      en: 'I pay close attention to details and accuracy.',
      th: 'ฉันใส่ใจรายละเอียดและความถูกต้องอย่างใกล้ชิด',
      zh: '我非常注意细节和准确性。'
    },
    traits: { adventurous: -1, social: 0, analytical: 2, practical: 2 }
  },
  {
    id: 'mbti_019',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I enjoy brainstorming and generating new ideas.',
      th: 'ฉันชอบระดมความคิดและสร้างไอเดียใหม่',
      zh: '我喜欢头脑风暴和产生新想法。'
    },
    traits: { adventurous: 3, social: 1, analytical: 1, practical: -1 }
  },
  {
    id: 'mbti_020',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'S',
    text: {
      en: 'I prefer proven methods over experimental approaches.',
      th: 'ฉันชอบวิธีที่พิสูจน์แล้วมากกว่าวิธีทดลอง',
      zh: '比起实验性方法，我更喜欢经过验证的方法。'
    },
    traits: { adventurous: -2, social: 0, analytical: 1, practical: 3 }
  },

  // === FEELING vs THINKING (Questions 21-45) ===
  {
    id: 'mbti_021',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I consider how decisions will affect other people emotionally.',
      th: 'ฉันพิจารณาว่าการตัดสินใจจะส่งผลกระทบต่อความรู้สึกของผู้อื่นอย่างไร',
      zh: '我会考虑决定会如何影响他人的情感。'
    },
    traits: { adventurous: 0, social: 3, analytical: -1, practical: 0 }
  },
  {
    id: 'mbti_022',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'T',
    text: {
      en: 'I make decisions based on logic rather than emotions.',
      th: 'ฉันตัดสินใจตามหลักเหตุผลมากกว่าอารมณ์',
      zh: '我根据逻辑而非情感做决定。'
    },
    traits: { adventurous: 0, social: -1, analytical: 3, practical: 1 }
  },
  {
    id: 'mbti_023',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I believe maintaining harmony is more important than being right.',
      th: 'ฉันเชื่อว่าการรักษาความสามัคคีสำคัญกว่าการถูกต้อง',
      zh: '我认为保持和谐比正确更重要。'
    },
    traits: { adventurous: -1, social: 3, analytical: -1, practical: 0 }
  },
  {
    id: 'mbti_024',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'T',
    text: {
      en: 'I value truth and accuracy over tactfulness.',
      th: 'ฉันให้คุณค่ากับความจริงและความถูกต้องมากกว่าความรอบคอบ',
      zh: '比起圆滑，我更看重真相和准确性。'
    },
    traits: { adventurous: 0, social: -2, analytical: 3, practical: 1 }
  },
  {
    id: 'mbti_025',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I am naturally empathetic and easily understand others\' feelings.',
      th: 'ฉันมีความเห็นอกเห็นใจโดยธรรมชาติและเข้าใจความรู้สึกของผู้อื่นได้ง่าย',
      zh: '我天生富有同理心，很容易理解他人的感受。'
    },
    traits: { adventurous: 0, social: 3, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_026',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'T',
    text: {
      en: 'I prefer to analyze situations objectively without emotional bias.',
      th: 'ฉันชอบวิเคราะห์สถานการณ์อย่างเป็นกลางโดยไม่มีอคติทางอารมณ์',
      zh: '我更喜欢客观分析情况，不带情感偏见。'
    },
    traits: { adventurous: 0, social: -1, analytical: 3, practical: 1 }
  },
  {
    id: 'mbti_027',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I am motivated by appreciation and personal recognition.',
      th: 'ฉันได้รับแรงบันดาลใจจากการชื่นชมและการยอมรับส่วนตัว',
      zh: '赞赏和个人认可能激励我。'
    },
    traits: { adventurous: 0, social: 2, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_028',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'T',
    text: {
      en: 'I am motivated by achieving competence and mastery.',
      th: 'ฉันได้รับแรงบันดาลใจจากการบรรลุความสามารถและความเชี่ยวชาญ',
      zh: '获得能力和精通能激励我。'
    },
    traits: { adventurous: 1, social: 0, analytical: 2, practical: 2 }
  },
  {
    id: 'mbti_029',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I find it easy to express my emotions to others.',
      th: 'ฉันพบว่าการแสดงอารมณ์ต่อผู้อื่นเป็นเรื่องง่าย',
      zh: '我发现向他人表达情感很容易。'
    },
    traits: { adventurous: 1, social: 2, analytical: -1, practical: 0 }
  },
  {
    id: 'mbti_030',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'T',
    text: {
      en: 'I prefer to keep emotions private and controlled.',
      th: 'ฉันชอบเก็บอารมณ์ไว้เป็นส่วนตัวและควบคุมได้',
      zh: '我更喜欢保持情感私密且可控。'
    },
    traits: { adventurous: -1, social: -1, analytical: 2, practical: 1 }
  },

  // === PERCEIVING vs JUDGING (Questions 31-50) ===
  {
    id: 'mbti_031',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'P',
    text: {
      en: 'I prefer to keep my options open rather than commit to a plan.',
      th: 'ฉันชอบเปิดทางเลือกไว้มากกว่าผูกมัดกับแผน',
      zh: '比起承诺计划，我更喜欢保持选择的开放性。'
    },
    traits: { adventurous: 3, social: 0, analytical: -1, practical: -2 }
  },
  {
    id: 'mbti_032',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I like to have a clear schedule and stick to it.',
      th: 'ฉันชอบมีตารางเวลาที่ชัดเจนและยึดมั่นในตาราง',
      zh: '我喜欢有明确的时间表并坚持执行。'
    },
    traits: { adventurous: -2, social: 0, analytical: 2, practical: 3 }
  },
  {
    id: 'mbti_033',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'P',
    text: {
      en: 'I often wait until the last minute to complete tasks.',
      th: 'ฉันมักรอจนถึงนาทีสุดท้ายก่อนทำงานให้เสร็จ',
      zh: '我经常等到最后一刻才完成任务。'
    },
    traits: { adventurous: 2, social: 0, analytical: -1, practical: -2 }
  },
  {
    id: 'mbti_034',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I feel satisfied when I complete tasks ahead of deadline.',
      th: 'ฉันรู้สึกพอใจเมื่อทำงานเสร็จก่อนกำหนด',
      zh: '提前完成任务让我感到满意。'
    },
    traits: { adventurous: -1, social: 0, analytical: 2, practical: 3 }
  },
  {
    id: 'mbti_035',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'P',
    text: {
      en: 'I enjoy spontaneous activities and surprise plans.',
      th: 'ฉันชอบกิจกรรมที่เกิดขึ้นเองและแผนที่เซอร์ไพรส์',
      zh: '我喜欢自发的活动和惊喜计划。'
    },
    traits: { adventurous: 3, social: 1, analytical: -1, practical: -1 }
  },
  {
    id: 'mbti_036',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I prefer predictability and routine in my daily life.',
      th: 'ฉันชอบความสามารถในการคาดเดาและกิจวัตรประจำวัน',
      zh: '我喜欢日常生活中的可预测性和常规。'
    },
    traits: { adventurous: -2, social: 0, analytical: 1, practical: 3 }
  },
  {
    id: 'mbti_037',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'P',
    text: {
      en: 'I adapt easily to changing circumstances.',
      th: 'ฉันปรับตัวกับสถานการณ์ที่เปลี่ยนแปลงได้ง่าย',
      zh: '我能轻松适应变化的环境。'
    },
    traits: { adventurous: 3, social: 1, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_038',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I feel uncomfortable when plans are changed at the last minute.',
      th: 'ฉันรู้สึกไม่สบายใจเมื่อแผนเปลี่ยนในนาทีสุดท้าย',
      zh: '计划在最后一刻改变让我感到不舒服。'
    },
    traits: { adventurous: -2, social: 0, analytical: 1, practical: 2 }
  },
  {
    id: 'mbti_039',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'P',
    text: {
      en: 'I work best when I have freedom and flexibility.',
      th: 'ฉันทำงานได้ดีที่สุดเมื่อมีอิสระและความยืดหยุ่น',
      zh: '当我有自由和灵活性时，我工作得最好。'
    },
    traits: { adventurous: 3, social: 0, analytical: 0, practical: -1 }
  },
  {
    id: 'mbti_040',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I work best with clear guidelines and structure.',
      th: 'ฉันทำงานได้ดีที่สุดเมื่อมีแนวทางและโครงสร้างที่ชัดเจน',
      zh: '有明确的指导方针和结构时，我工作得最好。'
    },
    traits: { adventurous: -1, social: 0, analytical: 2, practical: 3 }
  },

  // === ADDITIONAL MIXED QUESTIONS (51-100) ===
  {
    id: 'mbti_041',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E',
    text: {
      en: 'I enjoy networking and professional social events.',
      th: 'ฉันชอบการสร้างเครือข่ายและงานสังคมในวิชาชีพ',
      zh: '我喜欢社交网络和专业社交活动。'
    },
    traits: { adventurous: 1, social: 3, analytical: 0, practical: 1 }
  },
  {
    id: 'mbti_042',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I often daydream about future possibilities.',
      th: 'ฉันมักฝันกลางวันเกี่ยวกับความเป็นไปได้ในอนาคต',
      zh: '我经常幻想未来的可能性。'
    },
    traits: { adventurous: 2, social: 0, analytical: 1, practical: -1 }
  },
  {
    id: 'mbti_043',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I am deeply affected by others\' suffering.',
      th: 'ฉันได้รับผลกระทบอย่างลึกซึ้งจากความทุกข์ของผู้อื่น',
      zh: '他人的痛苦深深影响着我。'
    },
    traits: { adventurous: 0, social: 3, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_044',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I make to-do lists and enjoy checking off completed items.',
      th: 'ฉันทำรายการสิ่งที่ต้องทำและชอบเครื่องหมายถูกเมื่อทำเสร็จ',
      zh: '我会列待办清单，并喜欢划掉完成的项目。'
    },
    traits: { adventurous: -1, social: 0, analytical: 2, practical: 3 }
  },
  {
    id: 'mbti_045',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'I',
    text: {
      en: 'I prefer written communication over phone calls.',
      th: 'ฉันชอบการสื่อสารเป็นลายลักษณ์อักษรมากกว่าโทรศัพท์',
      zh: '比起打电话，我更喜欢书面沟通。'
    },
    traits: { adventurous: -1, social: -1, analytical: 2, practical: 1 }
  },
  {
    id: 'mbti_046',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'S',
    text: {
      en: 'I prefer learning practical skills over theoretical concepts.',
      th: 'ฉันชอบเรียนรู้ทักษะปฏิบัติมากกว่าแนวคิดทางทฤษฎี',
      zh: '比起理论概念，我更喜欢学习实用技能。'
    },
    traits: { adventurous: 0, social: 0, analytical: -1, practical: 3 }
  },
  {
    id: 'mbti_047',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'T',
    text: {
      en: 'I believe constructive criticism helps people improve.',
      th: 'ฉันเชื่อว่าการวิจารณ์เชิงสร้างสรรค์ช่วยให้คนพัฒนาขึ้น',
      zh: '我相信建设性批评能帮助人们进步。'
    },
    traits: { adventurous: 0, social: 0, analytical: 3, practical: 1 }
  },
  {
    id: 'mbti_048',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'P',
    text: {
      en: 'I enjoy exploring without a specific destination in mind.',
      th: 'ฉันชอบสำรวจโดยไม่มีจุดหมายเฉพาะในใจ',
      zh: '我喜欢没有特定目的地的探索。'
    },
    traits: { adventurous: 3, social: 0, analytical: 0, practical: -2 }
  },
  {
    id: 'mbti_049',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E',
    text: {
      en: 'I feel comfortable speaking to large audiences.',
      th: 'ฉันรู้สึกสบายใจเมื่อพูดต่อหน้าผู้ฟังจำนวนมาก',
      zh: '在大量观众面前讲话让我感到自在。'
    },
    traits: { adventurous: 2, social: 2, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_050',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I am drawn to philosophical questions about life.',
      th: 'ฉันถูกดึงดูดไปที่คำถามเชิงปรัชญาเกี่ยวกับชีวิต',
      zh: '我被关于生命的哲学问题所吸引。'
    },
    traits: { adventurous: 1, social: 0, analytical: 2, practical: -1 }
  },
  {
    id: 'mbti_051',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I prioritize people\'s feelings when making team decisions.',
      th: 'ฉันให้ความสำคัญกับความรู้สึกของผู้คนเมื่อตัดสินใจเป็นทีม',
      zh: '在团队决策时，我优先考虑人们的感受。'
    },
    traits: { adventurous: 0, social: 3, analytical: -1, practical: 0 }
  },
  {
    id: 'mbti_052',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I feel anxious when things are disorganized.',
      th: 'ฉันรู้สึกวิตกกังวลเมื่อสิ่งต่างๆ ไม่เป็นระเบียบ',
      zh: '当事情杂乱无章时，我感到焦虑。'
    },
    traits: { adventurous: -1, social: 0, analytical: 1, practical: 2 }
  },
  {
    id: 'mbti_053',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'I',
    text: {
      en: 'I often reflect deeply before sharing my thoughts.',
      th: 'ฉันมักไตร่ตรองอย่างลึกซึ้งก่อนแบ่งปันความคิด',
      zh: '在分享想法之前，我经常深入思考。'
    },
    traits: { adventurous: -1, social: 0, analytical: 3, practical: 1 }
  },
  {
    id: 'mbti_054',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'S',
    text: {
      en: 'I trust experience over intuition.',
      th: 'ฉันเชื่อมั่นในประสบการณ์มากกว่าสัญชาตญาณ',
      zh: '比起直觉，我更相信经验。'
    },
    traits: { adventurous: -1, social: 0, analytical: 1, practical: 3 }
  },
  {
    id: 'mbti_055',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'T',
    text: {
      en: 'I prefer solving problems using a systematic approach.',
      th: 'ฉันชอบแก้ปัญหาโดยใช้วิธีการที่เป็นระบบ',
      zh: '我更喜欢用系统化的方法解决问题。'
    },
    traits: { adventurous: 0, social: 0, analytical: 3, practical: 2 }
  },
  {
    id: 'mbti_056',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'P',
    text: {
      en: 'I often start projects but struggle to finish them.',
      th: 'ฉันมักเริ่มโปรเจกต์แต่ลำบากที่จะทำให้เสร็จ',
      zh: '我经常开始项目但难以完成。'
    },
    traits: { adventurous: 2, social: 0, analytical: -1, practical: -2 }
  },
  {
    id: 'mbti_057',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E',
    text: {
      en: 'I find it easy to start conversations with strangers.',
      th: 'ฉันพบว่าการเริ่มบทสนทนากับคนแปลกหน้าเป็นเรื่องง่าย',
      zh: '我发现与陌生人开始交谈很容易。'
    },
    traits: { adventurous: 2, social: 3, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_058',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I enjoy imagining how things could be different.',
      th: 'ฉันชอบจินตนาการว่าสิ่งต่างๆ จะแตกต่างออกไปได้อย่างไร',
      zh: '我喜欢想象事情会如何变得不同。'
    },
    traits: { adventurous: 3, social: 0, analytical: 1, practical: -1 }
  },
  {
    id: 'mbti_059',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I naturally consider the emotional impact of my words.',
      th: 'ฉันพิจารณาผลกระทบทางอารมณ์ของคำพูดโดยธรรมชาติ',
      zh: '我自然会考虑我的话语的情感影响。'
    },
    traits: { adventurous: 0, social: 3, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_060',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I prefer to make decisions quickly and move forward.',
      th: 'ฉันชอบตัดสินใจเร็วและเดินหน้าต่อ',
      zh: '我更喜欢快速做出决定并继续前进。'
    },
    traits: { adventurous: 1, social: 0, analytical: 1, practical: 2 }
  },
  // Additional questions to reach 100
  {
    id: 'mbti_061',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'I',
    text: {
      en: 'I often need time alone to think through important decisions.',
      th: 'ฉันมักต้องการเวลาอยู่คนเดียวเพื่อคิดทบทวนการตัดสินใจที่สำคัญ',
      zh: '我经常需要独处时间来思考重要决定。'
    },
    traits: { adventurous: -1, social: -1, analytical: 3, practical: 1 }
  },
  {
    id: 'mbti_062',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'S',
    text: {
      en: 'I am good at remembering specific details from past events.',
      th: 'ฉันเก่งในการจดจำรายละเอียดเฉพาะจากเหตุการณ์ในอดีต',
      zh: '我擅长记住过去事件的具体细节。'
    },
    traits: { adventurous: 0, social: 0, analytical: 2, practical: 2 }
  },
  {
    id: 'mbti_063',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'T',
    text: {
      en: 'I can stay calm and objective during heated discussions.',
      th: 'ฉันสามารถสงบและมีเหตุผลได้ระหว่างการอภิปรายที่ดุเดือด',
      zh: '在激烈的讨论中，我能保持冷静客观。'
    },
    traits: { adventurous: 0, social: -1, analytical: 3, practical: 1 }
  },
  {
    id: 'mbti_064',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'P',
    text: {
      en: 'I enjoy improvising and thinking on my feet.',
      th: 'ฉันชอบการแก้ปัญหาเฉพาะหน้าและคิดเร็ว',
      zh: '我喜欢即兴发挥和临场思考。'
    },
    traits: { adventurous: 3, social: 1, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_065',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E',
    text: {
      en: 'I gain energy from collaborating with others.',
      th: 'ฉันได้พลังจากการทำงานร่วมกับผู้อื่น',
      zh: '与他人合作让我获得能量。'
    },
    traits: { adventurous: 1, social: 3, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_066',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I find inspiration in symbolic meanings and metaphors.',
      th: 'ฉันได้แรงบันดาลใจจากความหมายเชิงสัญลักษณ์และอุปมา',
      zh: '我从象征意义和隐喻中获得灵感。'
    },
    traits: { adventurous: 2, social: 0, analytical: 1, practical: -1 }
  },
  {
    id: 'mbti_067',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I find it difficult to give negative feedback to others.',
      th: 'ฉันพบว่าการให้ข้อเสนอแนะเชิงลบแก่ผู้อื่นเป็นเรื่องยาก',
      zh: '我发现很难给他人负面反馈。'
    },
    traits: { adventurous: 0, social: 2, analytical: -1, practical: 0 }
  },
  {
    id: 'mbti_068',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I prefer to finish one task before starting another.',
      th: 'ฉันชอบทำงานหนึ่งให้เสร็จก่อนเริ่มงานใหม่',
      zh: '我更喜欢完成一项任务后再开始另一项。'
    },
    traits: { adventurous: -1, social: 0, analytical: 2, practical: 2 }
  },
  {
    id: 'mbti_069',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'I',
    text: {
      en: 'I think more clearly when I write things down.',
      th: 'ฉันคิดได้ชัดเจนขึ้นเมื่อเขียนสิ่งต่างๆ ลง',
      zh: '当我把事情写下来时，我思考得更清晰。'
    },
    traits: { adventurous: -1, social: -1, analytical: 3, practical: 1 }
  },
  {
    id: 'mbti_070',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'S',
    text: {
      en: 'I prefer step-by-step instructions over general guidelines.',
      th: 'ฉันชอบคำแนะนำทีละขั้นตอนมากกว่าแนวทางทั่วไป',
      zh: '比起一般指南，我更喜欢逐步说明。'
    },
    traits: { adventurous: -1, social: 0, analytical: 1, practical: 3 }
  },
  {
    id: 'mbti_071',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'T',
    text: {
      en: 'I respect people who make decisions based on facts.',
      th: 'ฉันเคารพคนที่ตัดสินใจบนพื้นฐานของข้อเท็จจริง',
      zh: '我尊重根据事实做决定的人。'
    },
    traits: { adventurous: 0, social: 0, analytical: 3, practical: 2 }
  },
  {
    id: 'mbti_072',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'P',
    text: {
      en: 'I often change my mind as I learn new information.',
      th: 'ฉันมักเปลี่ยนใจเมื่อได้รับข้อมูลใหม่',
      zh: '当我学到新信息时，我经常改变主意。'
    },
    traits: { adventurous: 2, social: 0, analytical: 1, practical: -1 }
  },
  {
    id: 'mbti_073',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E',
    text: {
      en: 'I enjoy lively discussions and debates.',
      th: 'ฉันชอบการอภิปรายและการโต้วาทีที่มีชีวิตชีวา',
      zh: '我喜欢活跃的讨论和辩论。'
    },
    traits: { adventurous: 2, social: 2, analytical: 1, practical: 0 }
  },
  {
    id: 'mbti_074',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I often think about how current trends will shape the future.',
      th: 'ฉันมักคิดว่าแนวโน้มปัจจุบันจะเปลี่ยนรูปอนาคตอย่างไร',
      zh: '我经常思考当前趋势将如何塑造未来。'
    },
    traits: { adventurous: 2, social: 0, analytical: 2, practical: 0 }
  },
  {
    id: 'mbti_075',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I value cooperation over competition.',
      th: 'ฉันให้คุณค่าความร่วมมือมากกว่าการแข่งขัน',
      zh: '比起竞争，我更看重合作。'
    },
    traits: { adventurous: 0, social: 3, analytical: -1, practical: 0 }
  },
  {
    id: 'mbti_076',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I like having a clean and organized workspace.',
      th: 'ฉันชอบมีพื้นที่ทำงานที่สะอาดและเป็นระเบียบ',
      zh: '我喜欢干净整洁的工作空间。'
    },
    traits: { adventurous: -1, social: 0, analytical: 1, practical: 3 }
  },
  {
    id: 'mbti_077',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'I',
    text: {
      en: 'I feel most productive when working independently.',
      th: 'ฉันรู้สึกมีประสิทธิภาพมากที่สุดเมื่อทำงานอย่างอิสระ',
      zh: '独立工作时我感到最有效率。'
    },
    traits: { adventurous: 0, social: -2, analytical: 2, practical: 1 }
  },
  {
    id: 'mbti_078',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'S',
    text: {
      en: 'I focus on what is real and present rather than what might be.',
      th: 'ฉันโฟกัสกับสิ่งที่เป็นจริงและปัจจุบันมากกว่าสิ่งที่อาจจะเป็น',
      zh: '我专注于真实和当前的事物，而不是可能的事物。'
    },
    traits: { adventurous: -1, social: 0, analytical: 1, practical: 3 }
  },
  {
    id: 'mbti_079',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'T',
    text: {
      en: 'I find it easier to be fair than to be merciful.',
      th: 'ฉันพบว่าการเป็นธรรมนั้นง่ายกว่าการมีเมตตา',
      zh: '我发现公平比宽容更容易。'
    },
    traits: { adventurous: 0, social: -1, analytical: 3, practical: 1 }
  },
  {
    id: 'mbti_080',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'P',
    text: {
      en: 'I prefer to go with the flow rather than follow a strict plan.',
      th: 'ฉันชอบปล่อยตามธรรมชาติมากกว่าทำตามแผนที่เข้มงวด',
      zh: '比起严格的计划，我更喜欢顺其自然。'
    },
    traits: { adventurous: 3, social: 0, analytical: -1, practical: -2 }
  },
  {
    id: 'mbti_081',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E',
    text: {
      en: 'I am usually the first to approach new people.',
      th: 'ฉันมักเป็นคนแรกที่เข้าหาคนใหม่',
      zh: '我通常是第一个主动认识新朋友的人。'
    },
    traits: { adventurous: 2, social: 3, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_082',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I enjoy reading science fiction or fantasy books.',
      th: 'ฉันชอบอ่านหนังสือนิยายวิทยาศาสตร์หรือแฟนตาซี',
      zh: '我喜欢阅读科幻或奇幻书籍。'
    },
    traits: { adventurous: 2, social: 0, analytical: 1, practical: -1 }
  },
  {
    id: 'mbti_083',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I often put others\' needs ahead of my own.',
      th: 'ฉันมักให้ความสำคัญกับความต้องการของผู้อื่นก่อนตัวเอง',
      zh: '我经常把别人的需求放在自己前面。'
    },
    traits: { adventurous: 0, social: 3, analytical: -1, practical: 0 }
  },
  {
    id: 'mbti_084',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I feel accomplished when I meet my goals on time.',
      th: 'ฉันรู้สึกสำเร็จเมื่อบรรลุเป้าหมายตรงเวลา',
      zh: '按时达成目标让我感到有成就感。'
    },
    traits: { adventurous: 0, social: 0, analytical: 2, practical: 3 }
  },
  {
    id: 'mbti_085',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'I',
    text: {
      en: 'I carefully consider my words before speaking.',
      th: 'ฉันพิจารณาคำพูดอย่างรอบคอบก่อนพูด',
      zh: '我在说话前会仔细考虑措辞。'
    },
    traits: { adventurous: -1, social: 0, analytical: 3, practical: 1 }
  },
  {
    id: 'mbti_086',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'S',
    text: {
      en: 'I prefer practical solutions over innovative experiments.',
      th: 'ฉันชอบวิธีแก้ปัญหาที่ใช้ได้จริงมากกว่าการทดลองที่สร้างสรรค์',
      zh: '比起创新实验，我更喜欢实用的解决方案。'
    },
    traits: { adventurous: -2, social: 0, analytical: 1, practical: 3 }
  },
  {
    id: 'mbti_087',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'T',
    text: {
      en: 'I believe rules should be applied consistently without exceptions.',
      th: 'ฉันเชื่อว่ากฎควรถูกใช้อย่างสม่ำเสมอโดยไม่มีข้อยกเว้น',
      zh: '我认为规则应该始终如一地应用，没有例外。'
    },
    traits: { adventurous: -1, social: -1, analytical: 3, practical: 2 }
  },
  {
    id: 'mbti_088',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'P',
    text: {
      en: 'I often feel constrained by schedules and deadlines.',
      th: 'ฉันมักรู้สึกถูกจำกัดโดยตารางเวลาและเส้นตาย',
      zh: '我经常感到被时间表和截止日期所束缚。'
    },
    traits: { adventurous: 2, social: 0, analytical: -1, practical: -2 }
  },
  {
    id: 'mbti_089',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E',
    text: {
      en: 'I enjoy being part of many different social groups.',
      th: 'ฉันชอบเป็นส่วนหนึ่งของกลุ่มสังคมที่หลากหลาย',
      zh: '我喜欢成为许多不同社交群体的一部分。'
    },
    traits: { adventurous: 2, social: 3, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_090',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I often wonder what life on other planets might be like.',
      th: 'ฉันมักสงสัยว่าชีวิตบนดาวเคราะห์อื่นจะเป็นอย่างไร',
      zh: '我经常想知道其他星球上的生命会是什么样子。'
    },
    traits: { adventurous: 3, social: 0, analytical: 1, practical: -1 }
  },
  {
    id: 'mbti_091',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I am sensitive to the moods and emotions of those around me.',
      th: 'ฉันไวต่ออารมณ์และความรู้สึกของคนรอบข้าง',
      zh: '我对周围人的情绪和感受很敏感。'
    },
    traits: { adventurous: 0, social: 3, analytical: 0, practical: 0 }
  },
  {
    id: 'mbti_092',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I prefer to settle matters once and for all.',
      th: 'ฉันชอบตัดสินเรื่องต่างๆ ให้เสร็จสิ้นครั้งเดียว',
      zh: '我更喜欢一劳永逸地解决问题。'
    },
    traits: { adventurous: 0, social: 0, analytical: 2, practical: 2 }
  },
  {
    id: 'mbti_093',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'I',
    text: {
      en: 'I prefer activities I can do alone at my own pace.',
      th: 'ฉันชอบกิจกรรมที่ทำคนเดียวตามจังหวะของตัวเอง',
      zh: '我更喜欢可以按照自己节奏独自完成的活动。'
    },
    traits: { adventurous: 0, social: -2, analytical: 2, practical: 1 }
  },
  {
    id: 'mbti_094',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'S',
    text: {
      en: 'I enjoy routines and familiar patterns.',
      th: 'ฉันชอบกิจวัตรและรูปแบบที่คุ้นเคย',
      zh: '我喜欢常规和熟悉的模式。'
    },
    traits: { adventurous: -2, social: 0, analytical: 1, practical: 3 }
  },
  {
    id: 'mbti_095',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'T',
    text: {
      en: 'I believe efficiency is more important than consensus.',
      th: 'ฉันเชื่อว่าประสิทธิภาพสำคัญกว่าความเห็นพ้อง',
      zh: '我认为效率比共识更重要。'
    },
    traits: { adventurous: 0, social: -2, analytical: 3, practical: 2 }
  },
  {
    id: 'mbti_096',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'P',
    text: {
      en: 'I often leave room for last-minute changes in my plans.',
      th: 'ฉันมักเว้นที่ว่างสำหรับการเปลี่ยนแปลงในนาทีสุดท้ายในแผนของฉัน',
      zh: '我经常在计划中留出临时更改的空间。'
    },
    traits: { adventurous: 2, social: 0, analytical: 0, practical: -1 }
  },
  {
    id: 'mbti_097',
    type: 'likert',
    dimension: 'E/I',
    polarity: 'E',
    text: {
      en: 'I feel bored when I spend too much time alone.',
      th: 'ฉันรู้สึกเบื่อเมื่อใช้เวลาคนเดียวมากเกินไป',
      zh: '独处时间太长会让我感到无聊。'
    },
    traits: { adventurous: 1, social: 2, analytical: -1, practical: 0 }
  },
  {
    id: 'mbti_098',
    type: 'likert',
    dimension: 'N/S',
    polarity: 'N',
    text: {
      en: 'I am more interested in possibilities than realities.',
      th: 'ฉันสนใจความเป็นไปได้มากกว่าความเป็นจริง',
      zh: '比起现实，我更对可能性感兴趣。'
    },
    traits: { adventurous: 3, social: 0, analytical: 1, practical: -2 }
  },
  {
    id: 'mbti_099',
    type: 'likert',
    dimension: 'F/T',
    polarity: 'F',
    text: {
      en: 'I believe in giving people the benefit of the doubt.',
      th: 'ฉันเชื่อในการให้โอกาสคนอื่นก่อน',
      zh: '我相信给予他人怀疑的好处。'
    },
    traits: { adventurous: 0, social: 2, analytical: -1, practical: 0 }
  },
  {
    id: 'mbti_100',
    type: 'likert',
    dimension: 'P/J',
    polarity: 'J',
    text: {
      en: 'I feel satisfied when everything is in its proper place.',
      th: 'ฉันรู้สึกพอใจเมื่อทุกอย่างอยู่ในที่ที่เหมาะสม',
      zh: '当一切都在适当的位置时，我感到满意。'
    },
    traits: { adventurous: -1, social: 0, analytical: 1, practical: 3 }
  }
];
