/**
 * MBTI Scoring Engine
 * 
 * Calculates MBTI type from question responses using Likert scale weights
 */

import { MBTI_DIMENSIONS, LIKERT_SCALE } from '../questions/personality/mbtiQuestionBank.js';

/**
 * Calculate MBTI type from question responses
 * @param {Object} answers - Map of question indices to Likert scale responses (1-5)
 * @param {Array} questions - Array of question objects
 * @returns {Object} - MBTI type, dimension scores, and confidence percentages
 */
export const calculateMBTIType = (answers, questions) => {
  const dimensions = {
    [MBTI_DIMENSIONS.EI]: 0,
    [MBTI_DIMENSIONS.NS]: 0,
    [MBTI_DIMENSIONS.FT]: 0,
    [MBTI_DIMENSIONS.PJ]: 0
  };

  // Calculate scores for each dimension
  questions.forEach((question, index) => {
    const answer = answers[`q${index}`];
    if (answer === undefined) return;

    // Get weight from Likert scale
    const weight = getWeightFromAnswer(answer);

    // Apply weight based on polarity
    if (question.polarity === 'E' || question.polarity === 'N' ||
        question.polarity === 'F' || question.polarity === 'P') {
      dimensions[question.dimension] += weight;
    } else {
      dimensions[question.dimension] -= weight;
    }
  });

  // Determine type
  const type = 
    (dimensions[MBTI_DIMENSIONS.EI] >= 0 ? 'E' : 'I') +
    (dimensions[MBTI_DIMENSIONS.NS] >= 0 ? 'N' : 'S') +
    (dimensions[MBTI_DIMENSIONS.FT] >= 0 ? 'F' : 'T') +
    (dimensions[MBTI_DIMENSIONS.PJ] >= 0 ? 'P' : 'J');

  // Calculate confidence percentages
  const percentages = calculatePercentages(dimensions, questions.length / 4);

  return {
    type,
    dimensions,
    percentages
  };
};

/**
 * Get weight from Likert scale answer
 * @param {number} answer - Likert scale response (1-5)
 * @returns {number} - Weight (-2 to +2)
 */
const getWeightFromAnswer = (answer) => {
  const scaleEntry = Object.values(LIKERT_SCALE).find(s => s.id === answer);
  return scaleEntry ? scaleEntry.weight : 0;
};

/**
 * Calculate percentage confidence for each dimension
 * @param {Object} dimensions - Dimension scores
 * @param {number} questionsPerDimension - Number of questions per dimension
 * @returns {Object} - Percentage confidence for each letter
 */
const calculatePercentages = (dimensions, questionsPerDimension) => {
  const maxScore = questionsPerDimension * 2; // Max weight is 2 per question

  const calculate = (score) => {
    const percentage = Math.round(50 + (score / maxScore) * 50);
    return Math.max(0, Math.min(100, percentage));
  };

  return {
    E: calculate(dimensions[MBTI_DIMENSIONS.EI]),
    I: 100 - calculate(dimensions[MBTI_DIMENSIONS.EI]),
    N: calculate(dimensions[MBTI_DIMENSIONS.NS]),
    S: 100 - calculate(dimensions[MBTI_DIMENSIONS.NS]),
    F: calculate(dimensions[MBTI_DIMENSIONS.FT]),
    T: 100 - calculate(dimensions[MBTI_DIMENSIONS.FT]),
    P: calculate(dimensions[MBTI_DIMENSIONS.PJ]),
    J: 100 - calculate(dimensions[MBTI_DIMENSIONS.PJ])
  };
};
