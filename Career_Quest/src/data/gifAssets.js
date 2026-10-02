/**
 * GIF Asset Configuration
 * 
 * Defines GIF categories, asset mappings, and fallback images
 * for the Career Quest animation system.
 */

export const GIF_CATEGORIES = {
  CAREER_START: 'career_start',
  FEEDBACK_POSITIVE: 'feedback_positive',
  FEEDBACK_NEGATIVE: 'feedback_negative',
  FEEDBACK_NEUTRAL: 'feedback_neutral',
  CELEBRATION: 'celebration',
  THINKING: 'thinking'
};

/**
 * GIF Assets organized by category
 * Each asset includes: id, url, category, and optional subcategory
 */
export const gifAssets = {
  // Career start animations (5 per major career category)
  career_start: [
    { id: 'tech_start_1', url: '/assets/gifs/tech/start_1.gif', category: 'tech' },
    { id: 'tech_start_2', url: '/assets/gifs/tech/start_2.gif', category: 'tech' },
    { id: 'tech_start_3', url: '/assets/gifs/tech/start_3.gif', category: 'tech' },
    { id: 'tech_start_4', url: '/assets/gifs/tech/start_4.gif', category: 'tech' },
    { id: 'tech_start_5', url: '/assets/gifs/tech/start_5.gif', category: 'tech' },
    
    { id: 'healthcare_start_1', url: '/assets/gifs/healthcare/start_1.gif', category: 'healthcare' },
    { id: 'healthcare_start_2', url: '/assets/gifs/healthcare/start_2.gif', category: 'healthcare' },
    { id: 'healthcare_start_3', url: '/assets/gifs/healthcare/start_3.gif', category: 'healthcare' },
    { id: 'healthcare_start_4', url: '/assets/gifs/healthcare/start_4.gif', category: 'healthcare' },
    { id: 'healthcare_start_5', url: '/assets/gifs/healthcare/start_5.gif', category: 'healthcare' },
    
    { id: 'business_start_1', url: '/assets/gifs/business/start_1.gif', category: 'business' },
    { id: 'business_start_2', url: '/assets/gifs/business/start_2.gif', category: 'business' },
    { id: 'business_start_3', url: '/assets/gifs/business/start_3.gif', category: 'business' },
    { id: 'business_start_4', url: '/assets/gifs/business/start_4.gif', category: 'business' },
    { id: 'business_start_5', url: '/assets/gifs/business/start_5.gif', category: 'business' },
    
    { id: 'creative_start_1', url: '/assets/gifs/creative/start_1.gif', category: 'creative' },
    { id: 'creative_start_2', url: '/assets/gifs/creative/start_2.gif', category: 'creative' },
    { id: 'creative_start_3', url: '/assets/gifs/creative/start_3.gif', category: 'creative' },
    { id: 'creative_start_4', url: '/assets/gifs/creative/start_4.gif', category: 'creative' },
    { id: 'creative_start_5', url: '/assets/gifs/creative/start_5.gif', category: 'creative' },
    
    { id: 'education_start_1', url: '/assets/gifs/education/start_1.gif', category: 'education' },
    { id: 'education_start_2', url: '/assets/gifs/education/start_2.gif', category: 'education' },
    { id: 'education_start_3', url: '/assets/gifs/education/start_3.gif', category: 'education' },
    { id: 'education_start_4', url: '/assets/gifs/education/start_4.gif', category: 'education' },
    { id: 'education_start_5', url: '/assets/gifs/education/start_5.gif', category: 'education' },
  ],
  
  // Feedback animations - Positive (5 variations)
  feedback_positive: [
    { id: 'success_1', url: '/assets/gifs/feedback/success_1.gif', category: 'feedback' },
    { id: 'success_2', url: '/assets/gifs/feedback/success_2.gif', category: 'feedback' },
    { id: 'success_3', url: '/assets/gifs/feedback/success_3.gif', category: 'feedback' },
    { id: 'success_4', url: '/assets/gifs/feedback/success_4.gif', category: 'feedback' },
    { id: 'success_5', url: '/assets/gifs/feedback/success_5.gif', category: 'feedback' },
  ],
  
  // Feedback animations - Negative (5 variations)
  feedback_negative: [
    { id: 'mistake_1', url: '/assets/gifs/feedback/mistake_1.gif', category: 'feedback' },
    { id: 'mistake_2', url: '/assets/gifs/feedback/mistake_2.gif', category: 'feedback' },
    { id: 'mistake_3', url: '/assets/gifs/feedback/mistake_3.gif', category: 'feedback' },
    { id: 'mistake_4', url: '/assets/gifs/feedback/mistake_4.gif', category: 'feedback' },
    { id: 'mistake_5', url: '/assets/gifs/feedback/mistake_5.gif', category: 'feedback' },
  ],
  
  // Feedback animations - Neutral (5 variations)
  feedback_neutral: [
    { id: 'neutral_1', url: '/assets/gifs/feedback/neutral_1.gif', category: 'feedback' },
    { id: 'neutral_2', url: '/assets/gifs/feedback/neutral_2.gif', category: 'feedback' },
    { id: 'neutral_3', url: '/assets/gifs/feedback/neutral_3.gif', category: 'feedback' },
    { id: 'neutral_4', url: '/assets/gifs/feedback/neutral_4.gif', category: 'feedback' },
    { id: 'neutral_5', url: '/assets/gifs/feedback/neutral_5.gif', category: 'feedback' },
  ],
  
  // Celebration animations (5 variations)
  celebration: [
    { id: 'celebrate_1', url: '/assets/gifs/celebration/celebrate_1.gif', category: 'celebration' },
    { id: 'celebrate_2', url: '/assets/gifs/celebration/celebrate_2.gif', category: 'celebration' },
    { id: 'celebrate_3', url: '/assets/gifs/celebration/celebrate_3.gif', category: 'celebration' },
    { id: 'celebrate_4', url: '/assets/gifs/celebration/celebrate_4.gif', category: 'celebration' },
    { id: 'celebrate_5', url: '/assets/gifs/celebration/celebrate_5.gif', category: 'celebration' },
  ],
  
  // Thinking/loading animations (3 variations)
  thinking: [
    { id: 'thinking_1', url: '/assets/gifs/thinking/thinking_1.gif', category: 'thinking' },
    { id: 'thinking_2', url: '/assets/gifs/thinking/thinking_2.gif', category: 'thinking' },
    { id: 'thinking_3', url: '/assets/gifs/thinking/thinking_3.gif', category: 'thinking' },
  ]
};

/**
 * Fallback static images for each category
 * Used when GIF loading fails or times out
 */
export const fallbackImages = {
  career_start: '/assets/images/career_placeholder.png',
  feedback_positive: '/assets/images/success_placeholder.png',
  feedback_negative: '/assets/images/mistake_placeholder.png',
  feedback_neutral: '/assets/images/neutral_placeholder.png',
  celebration: '/assets/images/celebration_placeholder.png',
  thinking: '/assets/images/thinking_placeholder.png'
};
