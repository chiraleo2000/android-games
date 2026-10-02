import { beforeEach, describe, expect, it, vi } from 'vitest';
import { clearErrors, getErrors, logError } from '../ErrorLogger.js';

const USER_CONTENT = 'PRIVATE_CAREER_RESULT_TOKEN';

describe('ErrorLogger', () => {
    beforeEach(() => {
        clearErrors();
        vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    it('does not store user content fields', () => {
        const entry = logError(new Error('render failed'), {
            userAgent: `${USER_CONTENT}-ua`,
            url: `https://example.test/${USER_CONTENT}`,
            promise: Promise.resolve(USER_CONTENT),
            careerResults: [USER_CONTENT],
            personalityResults: { type: USER_CONTENT },
            preferences: { theme: USER_CONTENT },
            componentStack: '\n    at GameScreen',
            type: 'render',
            filename: 'GameScreen.jsx',
            lineno: 12,
            colno: 4,
            boundaryName: 'ErrorBoundary',
        });

        const forbidden = ['userAgent', 'url', 'promise', 'careerResults', 'personalityResults', 'preferences'];
        for (const field of forbidden) {
            expect(entry).not.toHaveProperty(field);
            expect(entry.context).not.toHaveProperty(field);
        }

        expect(entry.context.componentStack).toBe('\n    at GameScreen');
        expect(entry.message).toBe('render failed');

        const serialized = JSON.stringify(getErrors());
        expect(serialized).not.toContain(USER_CONTENT);
        expect(serialized).not.toContain('userAgent');
        expect(serialized).not.toContain('"url"');
        expect(serialized).not.toContain('promise');
    });
});
