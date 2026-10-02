import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { PRIVACY_POLICY_URL } from '../../config/legal.js';

vi.mock('@capacitor/preferences', () => ({
    Preferences: {
        get: vi.fn(async () => ({ value: null })),
        set: vi.fn(async () => undefined),
        remove: vi.fn(async () => undefined),
        clear: vi.fn(async () => undefined),
    },
}));

import SettingsModal from '../SettingsModal.jsx';
import { ThemeProvider } from '../../contexts/ThemeContext.jsx';

const settingsProps = {
    onClose: () => {},
    musicEnabled: true,
    onMusicToggle: () => {},
    volume: 0.5,
    onVolumeChange: () => {},
    language: 'en',
    onLanguageChange: () => {},
    isPremium: false,
    onTogglePremium: () => {},
};

describe('SettingsModal privacy link', () => {
    let container;
    let root;

    beforeEach(() => {
        if (!window.matchMedia) {
            window.matchMedia = () => ({
                matches: false,
                media: '',
                addEventListener() {},
                removeEventListener() {},
                addListener() {},
                removeListener() {},
                dispatchEvent() { return false; },
            });
        }
        container = document.createElement('div');
        document.body.appendChild(container);
        root = createRoot(container);
    });

    afterEach(() => {
        act(() => {
            root.unmount();
        });
        container.remove();
    });

    it('renders the privacy-policy link', async () => {
        await act(async () => {
            root.render(createElement(ThemeProvider, null,
                createElement(SettingsModal, settingsProps)
            ));
        });

        const link = container.querySelector('[data-testid="privacy-policy-link"]');
        expect(link).toBeTruthy();
        expect(link.getAttribute('href')).toBe(PRIVACY_POLICY_URL);
        expect(link.textContent).toContain('Privacy Policy');
    });
});
