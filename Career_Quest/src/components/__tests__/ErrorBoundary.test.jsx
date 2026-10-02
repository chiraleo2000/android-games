import { createElement, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ErrorBoundary from '../ErrorBoundary.jsx';

let shouldThrow = true;

function FlakyChild() {
    const [marker] = useState('ready');
    if (shouldThrow) {
        throw new Error('Career screen failed');
    }
    return createElement('p', null, `Back in the app ${marker}`);
}

describe('ErrorBoundary', () => {
    let container;
    let root;

    beforeEach(() => {
        shouldThrow = true;
        vi.spyOn(console, 'error').mockImplementation(() => {});
        container = document.createElement('div');
        document.body.appendChild(container);
        root = createRoot(container);
    });

    afterEach(() => {
        act(() => {
            root.unmount();
        });
        container.remove();
        vi.restoreAllMocks();
    });

    it('shows a fallback and a Try Again button', async () => {
        await act(async () => {
            root.render(createElement(ErrorBoundary, null, createElement(FlakyChild)));
        });

        expect(container.textContent).toContain('Oops! Something went wrong');
        const tryAgain = [...container.querySelectorAll('button')].find((button) =>
            button.textContent.includes('Try Again')
        );
        expect(tryAgain).toBeTruthy();

        shouldThrow = false;
        await act(async () => {
            tryAgain.click();
        });

        expect(container.textContent).toContain('Back in the app');
    });
});
