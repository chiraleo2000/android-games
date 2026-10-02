/**
 * Unit tests for MBTI Scoring Engine
 */

import { describe, it, expect } from 'vitest';
import { calculateMBTIType } from '../mbtiScoringEngine.js';
import { MBTI_DIMENSIONS } from '../../questions/personality/mbtiQuestionBank.js';

describe('MBTI Scoring Engine', () => {
    // Helper function to create test questions
    const createTestQuestions = (dimensions) => {
        return dimensions.map((dim, index) => ({
            id: `test_${index}`,
            dimension: dim.dimension,
            polarity: dim.polarity,
            text: `Test question ${index}`,
            category: 'test'
        }));
    };

    describe('calculateMBTIType', () => {
        it('should calculate INTJ type correctly', () => {
            // Create 60 questions: 15 per dimension
            const questions = [
                // E/I dimension - 15 questions favoring I
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ei_${i}`,
                    dimension: MBTI_DIMENSIONS.EI,
                    polarity: 'I',
                    text: `EI question ${i}`,
                    category: 'test'
                })),
                // N/S dimension - 15 questions favoring N
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ns_${i}`,
                    dimension: MBTI_DIMENSIONS.NS,
                    polarity: 'N',
                    text: `NS question ${i}`,
                    category: 'test'
                })),
                // F/T dimension - 15 questions favoring T
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ft_${i}`,
                    dimension: MBTI_DIMENSIONS.FT,
                    polarity: 'T',
                    text: `FT question ${i}`,
                    category: 'test'
                })),
                // P/J dimension - 15 questions favoring J
                ...Array(15).fill(null).map((_, i) => ({
                    id: `pj_${i}`,
                    dimension: MBTI_DIMENSIONS.PJ,
                    polarity: 'J',
                    text: `PJ question ${i}`,
                    category: 'test'
                }))
            ];

            // Answer all questions with "Strongly Agree" (5)
            const answers = {};
            questions.forEach((_, index) => {
                answers[`q${index}`] = 5;
            });

            const result = calculateMBTIType(answers, questions);

            expect(result.type).toBe('INTJ');
            expect(result.dimensions[MBTI_DIMENSIONS.EI]).toBeLessThan(0); // I
            expect(result.dimensions[MBTI_DIMENSIONS.NS]).toBeGreaterThan(0); // N
            expect(result.dimensions[MBTI_DIMENSIONS.FT]).toBeLessThan(0); // T
            expect(result.dimensions[MBTI_DIMENSIONS.PJ]).toBeLessThan(0); // J
        });

        it('should calculate ENFP type correctly', () => {
            const questions = [
                // E/I dimension - 15 questions favoring E
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ei_${i}`,
                    dimension: MBTI_DIMENSIONS.EI,
                    polarity: 'E',
                    text: `EI question ${i}`,
                    category: 'test'
                })),
                // N/S dimension - 15 questions favoring N
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ns_${i}`,
                    dimension: MBTI_DIMENSIONS.NS,
                    polarity: 'N',
                    text: `NS question ${i}`,
                    category: 'test'
                })),
                // F/T dimension - 15 questions favoring F
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ft_${i}`,
                    dimension: MBTI_DIMENSIONS.FT,
                    polarity: 'F',
                    text: `FT question ${i}`,
                    category: 'test'
                })),
                // P/J dimension - 15 questions favoring P
                ...Array(15).fill(null).map((_, i) => ({
                    id: `pj_${i}`,
                    dimension: MBTI_DIMENSIONS.PJ,
                    polarity: 'P',
                    text: `PJ question ${i}`,
                    category: 'test'
                }))
            ];

            // Answer all questions with "Strongly Agree" (5)
            const answers = {};
            questions.forEach((_, index) => {
                answers[`q${index}`] = 5;
            });

            const result = calculateMBTIType(answers, questions);

            expect(result.type).toBe('ENFP');
            expect(result.dimensions[MBTI_DIMENSIONS.EI]).toBeGreaterThan(0); // E
            expect(result.dimensions[MBTI_DIMENSIONS.NS]).toBeGreaterThan(0); // N
            expect(result.dimensions[MBTI_DIMENSIONS.FT]).toBeGreaterThan(0); // F
            expect(result.dimensions[MBTI_DIMENSIONS.PJ]).toBeGreaterThan(0); // P
        });

        it('should handle neutral responses correctly', () => {
            const questions = [
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ei_${i}`,
                    dimension: MBTI_DIMENSIONS.EI,
                    polarity: i % 2 === 0 ? 'E' : 'I',
                    text: `EI question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ns_${i}`,
                    dimension: MBTI_DIMENSIONS.NS,
                    polarity: i % 2 === 0 ? 'N' : 'S',
                    text: `NS question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ft_${i}`,
                    dimension: MBTI_DIMENSIONS.FT,
                    polarity: i % 2 === 0 ? 'F' : 'T',
                    text: `FT question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `pj_${i}`,
                    dimension: MBTI_DIMENSIONS.PJ,
                    polarity: i % 2 === 0 ? 'P' : 'J',
                    text: `PJ question ${i}`,
                    category: 'test'
                }))
            ];

            // Answer all questions with "Neutral" (3)
            const answers = {};
            questions.forEach((_, index) => {
                answers[`q${index}`] = 3;
            });

            const result = calculateMBTIType(answers, questions);

            // With neutral responses, dimensions should be close to 0
            expect(Math.abs(result.dimensions[MBTI_DIMENSIONS.EI])).toBeLessThanOrEqual(1);
            expect(Math.abs(result.dimensions[MBTI_DIMENSIONS.NS])).toBeLessThanOrEqual(1);
            expect(Math.abs(result.dimensions[MBTI_DIMENSIONS.FT])).toBeLessThanOrEqual(1);
            expect(Math.abs(result.dimensions[MBTI_DIMENSIONS.PJ])).toBeLessThanOrEqual(1);
        });

        it('should calculate confidence percentages correctly', () => {
            const questions = [
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ei_${i}`,
                    dimension: MBTI_DIMENSIONS.EI,
                    polarity: 'E',
                    text: `EI question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ns_${i}`,
                    dimension: MBTI_DIMENSIONS.NS,
                    polarity: 'N',
                    text: `NS question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ft_${i}`,
                    dimension: MBTI_DIMENSIONS.FT,
                    polarity: 'F',
                    text: `FT question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `pj_${i}`,
                    dimension: MBTI_DIMENSIONS.PJ,
                    polarity: 'P',
                    text: `PJ question ${i}`,
                    category: 'test'
                }))
            ];

            // Answer all questions with "Strongly Agree" (5)
            const answers = {};
            questions.forEach((_, index) => {
                answers[`q${index}`] = 5;
            });

            const result = calculateMBTIType(answers, questions);

            // Check that percentages exist for all letters
            expect(result.percentages).toHaveProperty('E');
            expect(result.percentages).toHaveProperty('I');
            expect(result.percentages).toHaveProperty('N');
            expect(result.percentages).toHaveProperty('S');
            expect(result.percentages).toHaveProperty('F');
            expect(result.percentages).toHaveProperty('T');
            expect(result.percentages).toHaveProperty('P');
            expect(result.percentages).toHaveProperty('J');

            // Check that percentages are within valid range
            Object.values(result.percentages).forEach(percent => {
                expect(percent).toBeGreaterThanOrEqual(0);
                expect(percent).toBeLessThanOrEqual(100);
            });

            // Check that dominant preferences have higher percentages
            expect(result.percentages.E).toBeGreaterThan(result.percentages.I);
            expect(result.percentages.N).toBeGreaterThan(result.percentages.S);
            expect(result.percentages.F).toBeGreaterThan(result.percentages.T);
            expect(result.percentages.P).toBeGreaterThan(result.percentages.J);
        });

        it('should ensure percentage pairs sum to 100%', () => {
            const questions = [
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ei_${i}`,
                    dimension: MBTI_DIMENSIONS.EI,
                    polarity: i % 2 === 0 ? 'E' : 'I',
                    text: `EI question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ns_${i}`,
                    dimension: MBTI_DIMENSIONS.NS,
                    polarity: i % 2 === 0 ? 'N' : 'S',
                    text: `NS question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ft_${i}`,
                    dimension: MBTI_DIMENSIONS.FT,
                    polarity: i % 2 === 0 ? 'F' : 'T',
                    text: `FT question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `pj_${i}`,
                    dimension: MBTI_DIMENSIONS.PJ,
                    polarity: i % 2 === 0 ? 'P' : 'J',
                    text: `PJ question ${i}`,
                    category: 'test'
                }))
            ];

            // Mix of different responses
            const answers = {};
            questions.forEach((_, index) => {
                answers[`q${index}`] = (index % 5) + 1; // Cycle through 1-5
            });

            const result = calculateMBTIType(answers, questions);

            // Check that each dimension pair sums to 100%
            expect(result.percentages.E + result.percentages.I).toBe(100);
            expect(result.percentages.N + result.percentages.S).toBe(100);
            expect(result.percentages.F + result.percentages.T).toBe(100);
            expect(result.percentages.P + result.percentages.J).toBe(100);
        });

        it('should handle missing answers gracefully', () => {
            const questions = [
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ei_${i}`,
                    dimension: MBTI_DIMENSIONS.EI,
                    polarity: 'E',
                    text: `EI question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ns_${i}`,
                    dimension: MBTI_DIMENSIONS.NS,
                    polarity: 'N',
                    text: `NS question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ft_${i}`,
                    dimension: MBTI_DIMENSIONS.FT,
                    polarity: 'F',
                    text: `FT question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `pj_${i}`,
                    dimension: MBTI_DIMENSIONS.PJ,
                    polarity: 'P',
                    text: `PJ question ${i}`,
                    category: 'test'
                }))
            ];

            // Only answer half the questions
            const answers = {};
            questions.forEach((_, index) => {
                if (index % 2 === 0) {
                    answers[`q${index}`] = 5;
                }
            });

            const result = calculateMBTIType(answers, questions);

            // Should still produce a valid MBTI type
            expect(result.type).toMatch(/^[EI][NS][FT][PJ]$/);
            expect(result.dimensions).toBeDefined();
            expect(result.percentages).toBeDefined();
        });

        it('should produce consistent results for same answers', () => {
            const questions = [
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ei_${i}`,
                    dimension: MBTI_DIMENSIONS.EI,
                    polarity: 'I',
                    text: `EI question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ns_${i}`,
                    dimension: MBTI_DIMENSIONS.NS,
                    polarity: 'S',
                    text: `NS question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `ft_${i}`,
                    dimension: MBTI_DIMENSIONS.FT,
                    polarity: 'T',
                    text: `FT question ${i}`,
                    category: 'test'
                })),
                ...Array(15).fill(null).map((_, i) => ({
                    id: `pj_${i}`,
                    dimension: MBTI_DIMENSIONS.PJ,
                    polarity: 'J',
                    text: `PJ question ${i}`,
                    category: 'test'
                }))
            ];

            const answers = {};
            questions.forEach((_, index) => {
                answers[`q${index}`] = 4;
            });

            const result1 = calculateMBTIType(answers, questions);
            const result2 = calculateMBTIType(answers, questions);

            expect(result1.type).toBe(result2.type);
            expect(result1.dimensions).toEqual(result2.dimensions);
            expect(result1.percentages).toEqual(result2.percentages);
        });
    });
});
