/**
 * Enhanced MBTI Question Bank
 * 
 * 60 questions total - 15 per dimension (E/I, N/S, F/T, P/J)
 * Balanced polarity and randomized order while maintaining dimension balance
 */

export const MBTI_DIMENSIONS = {
  EI: 'E/I', // Extraversion vs Introversion
  NS: 'N/S', // Intuition vs Sensing
  FT: 'F/T', // Feeling vs Thinking
  PJ: 'P/J'  // Perceiving vs Judging
};

export const LIKERT_SCALE = {
  STRONGLY_DISAGREE: { id: 1, label: 'Strongly Disagree', weight: -2 },
  DISAGREE: { id: 2, label: 'Disagree', weight: -1 },
  NEUTRAL: { id: 3, label: 'Neutral', weight: 0 },
  AGREE: { id: 4, label: 'Agree', weight: 1 },
  STRONGLY_AGREE: { id: 5, label: 'Strongly Agree', weight: 2 }
};

export const mbtiQuestions = [
  // E/I Dimension (15 questions)
  {
    id: 'ei_1',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'E',
    text: 'I feel energized after spending time with a large group of people.',
    category: 'social_energy'
  },
  {
    id: 'ei_2',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'I',
    text: 'I prefer one-on-one conversations over group discussions.',
    category: 'social_preference'
  },
  {
    id: 'ei_3',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'E',
    text: 'I enjoy being the center of attention at social gatherings.',
    category: 'social_behavior'
  },
  {
    id: 'ei_4',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'I',
    text: 'I need time alone to recharge after social interactions.',
    category: 'energy_management'
  },
  {
    id: 'ei_5',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'E',
    text: 'I think out loud and process ideas by talking to others.',
    category: 'thinking_style'
  },
  {
    id: 'ei_6',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'I',
    text: 'I prefer to think things through internally before sharing my thoughts.',
    category: 'thinking_style'
  },
  {
    id: 'ei_7',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'E',
    text: 'I make friends easily and enjoy meeting new people.',
    category: 'social_behavior'
  },
  {
    id: 'ei_8',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'I',
    text: 'I have a small circle of close friends rather than many acquaintances.',
    category: 'social_preference'
  },
  {
    id: 'ei_9',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'E',
    text: 'I feel comfortable initiating conversations with strangers.',
    category: 'social_behavior'
  },
  {
    id: 'ei_10',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'I',
    text: 'I prefer written communication over phone calls or face-to-face meetings.',
    category: 'communication_style'
  },
  {
    id: 'ei_11',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'E',
    text: 'I enjoy working in collaborative team environments.',
    category: 'work_style'
  },
  {
    id: 'ei_12',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'I',
    text: 'I work best when I can focus independently without interruptions.',
    category: 'work_style'
  },
  {
    id: 'ei_13',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'E',
    text: 'I share personal experiences and stories readily with others.',
    category: 'communication_style'
  },
  {
    id: 'ei_14',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'I',
    text: 'I keep my thoughts and feelings private until I know someone well.',
    category: 'communication_style'
  },
  {
    id: 'ei_15',
    dimension: MBTI_DIMENSIONS.EI,
    polarity: 'E',
    text: 'I seek out social activities and events regularly.',
    category: 'social_energy'
  },

  // N/S Dimension (15 questions)
  {
    id: 'ns_1',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'N',
    text: 'I focus on future possibilities rather than present realities.',
    category: 'time_orientation'
  },
  {
    id: 'ns_2',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'S',
    text: 'I prefer concrete facts and details over abstract theories.',
    category: 'information_processing'
  },
  {
    id: 'ns_3',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'N',
    text: 'I enjoy exploring new ideas and concepts, even if they seem impractical.',
    category: 'learning_style'
  },
  {
    id: 'ns_4',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'S',
    text: 'I trust information that comes from direct experience and observation.',
    category: 'information_processing'
  },
  {
    id: 'ns_5',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'N',
    text: 'I see patterns and connections that others might miss.',
    category: 'perception_style'
  },
  {
    id: 'ns_6',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'S',
    text: 'I pay attention to specific details and practical applications.',
    category: 'perception_style'
  },
  {
    id: 'ns_7',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'N',
    text: 'I prefer to understand the big picture before diving into details.',
    category: 'learning_style'
  },
  {
    id: 'ns_8',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'S',
    text: 'I follow step-by-step instructions carefully when learning something new.',
    category: 'learning_style'
  },
  {
    id: 'ns_9',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'N',
    text: 'I enjoy brainstorming and generating innovative solutions.',
    category: 'problem_solving'
  },
  {
    id: 'ns_10',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'S',
    text: 'I prefer proven methods and established procedures.',
    category: 'problem_solving'
  },
  {
    id: 'ns_11',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'N',
    text: 'I think about what could be rather than what is.',
    category: 'time_orientation'
  },
  {
    id: 'ns_12',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'S',
    text: 'I focus on the present moment and immediate tasks.',
    category: 'time_orientation'
  },
  {
    id: 'ns_13',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'N',
    text: 'I enjoy metaphors, analogies, and symbolic thinking.',
    category: 'communication_style'
  },
  {
    id: 'ns_14',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'S',
    text: 'I prefer literal and straightforward communication.',
    category: 'communication_style'
  },
  {
    id: 'ns_15',
    dimension: MBTI_DIMENSIONS.NS,
    polarity: 'N',
    text: 'I am drawn to theoretical and conceptual discussions.',
    category: 'learning_style'
  },

  // F/T Dimension (15 questions)
  {
    id: 'ft_1',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'F',
    text: 'I make decisions based on personal values and how they affect people.',
    category: 'decision_making'
  },
  {
    id: 'ft_2',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'T',
    text: 'I prioritize logic and objective analysis when making decisions.',
    category: 'decision_making'
  },
  {
    id: 'ft_3',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'F',
    text: 'I am sensitive to others\' emotions and try to maintain harmony.',
    category: 'interpersonal_style'
  },
  {
    id: 'ft_4',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'T',
    text: 'I value fairness and consistency over personal considerations.',
    category: 'values'
  },
  {
    id: 'ft_5',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'F',
    text: 'I consider how my actions will impact others\' feelings.',
    category: 'decision_making'
  },
  {
    id: 'ft_6',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'T',
    text: 'I focus on the most efficient and effective solution, even if it\'s unpopular.',
    category: 'problem_solving'
  },
  {
    id: 'ft_7',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'F',
    text: 'I find it easy to empathize with others and understand their perspectives.',
    category: 'interpersonal_style'
  },
  {
    id: 'ft_8',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'T',
    text: 'I prefer to analyze situations objectively without emotional involvement.',
    category: 'thinking_style'
  },
  {
    id: 'ft_9',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'F',
    text: 'I value cooperation and consensus in group settings.',
    category: 'work_style'
  },
  {
    id: 'ft_10',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'T',
    text: 'I am comfortable with constructive criticism and debate.',
    category: 'communication_style'
  },
  {
    id: 'ft_11',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'F',
    text: 'I prioritize maintaining relationships over winning arguments.',
    category: 'interpersonal_style'
  },
  {
    id: 'ft_12',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'T',
    text: 'I believe truth and accuracy are more important than tact.',
    category: 'values'
  },
  {
    id: 'ft_13',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'F',
    text: 'I am motivated by appreciation and recognition from others.',
    category: 'motivation'
  },
  {
    id: 'ft_14',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'T',
    text: 'I am motivated by competence and achievement.',
    category: 'motivation'
  },
  {
    id: 'ft_15',
    dimension: MBTI_DIMENSIONS.FT,
    polarity: 'F',
    text: 'I make exceptions to rules based on individual circumstances.',
    category: 'decision_making'
  },

  // P/J Dimension (15 questions)
  {
    id: 'pj_1',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'P',
    text: 'I prefer to keep my options open rather than commit to a plan.',
    category: 'planning_style'
  },
  {
    id: 'pj_2',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'J',
    text: 'I like to have a clear schedule and stick to it.',
    category: 'planning_style'
  },
  {
    id: 'pj_3',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'P',
    text: 'I work best when I can be spontaneous and flexible.',
    category: 'work_style'
  },
  {
    id: 'pj_4',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'J',
    text: 'I feel satisfied when tasks are completed and checked off my list.',
    category: 'work_style'
  },
  {
    id: 'pj_5',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'P',
    text: 'I enjoy exploring multiple approaches before settling on one.',
    category: 'decision_making'
  },
  {
    id: 'pj_6',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'J',
    text: 'I prefer to make decisions quickly and move forward.',
    category: 'decision_making'
  },
  {
    id: 'pj_7',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'P',
    text: 'I adapt easily to changes and unexpected situations.',
    category: 'adaptability'
  },
  {
    id: 'pj_8',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'J',
    text: 'I prefer structure and organization in my environment.',
    category: 'environment_preference'
  },
  {
    id: 'pj_9',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'P',
    text: 'I often start projects with enthusiasm but may not finish them immediately.',
    category: 'work_style'
  },
  {
    id: 'pj_10',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'J',
    text: 'I complete tasks well before deadlines to avoid last-minute stress.',
    category: 'time_management'
  },
  {
    id: 'pj_11',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'P',
    text: 'I enjoy the process of exploration more than reaching a conclusion.',
    category: 'thinking_style'
  },
  {
    id: 'pj_12',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'J',
    text: 'I like to have closure and finalize decisions.',
    category: 'decision_making'
  },
  {
    id: 'pj_13',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'P',
    text: 'I prefer to gather more information before making a commitment.',
    category: 'information_gathering'
  },
  {
    id: 'pj_14',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'J',
    text: 'I feel uncomfortable with ambiguity and prefer clear guidelines.',
    category: 'environment_preference'
  },
  {
    id: 'pj_15',
    dimension: MBTI_DIMENSIONS.PJ,
    polarity: 'P',
    text: 'I thrive in environments that allow for improvisation and creativity.',
    category: 'environment_preference'
  }
];

/**
 * Shuffle questions while maintaining dimension balance
 * Interleaves questions from all four dimensions
 */
export const getShuffledQuestions = () => {
  const byDimension = {
    [MBTI_DIMENSIONS.EI]: [],
    [MBTI_DIMENSIONS.NS]: [],
    [MBTI_DIMENSIONS.FT]: [],
    [MBTI_DIMENSIONS.PJ]: []
  };

  // Group by dimension
  mbtiQuestions.forEach(q => {
    byDimension[q.dimension].push(q);
  });

  // Shuffle each dimension
  Object.keys(byDimension).forEach(dim => {
    byDimension[dim] = shuffleArray(byDimension[dim]);
  });

  // Interleave questions from all dimensions
  const shuffled = [];
  const maxLength = 15;
  
  for (let i = 0; i < maxLength; i++) {
    Object.values(byDimension).forEach(questions => {
      if (questions[i]) {
        shuffled.push(questions[i]);
      }
    });
  }

  return shuffled;
};

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
