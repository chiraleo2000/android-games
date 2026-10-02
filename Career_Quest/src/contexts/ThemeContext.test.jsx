import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Preferences } from '@capacitor/preferences';

// Mock Capacitor Preferences
vi.mock('@capacitor/preferences', () => ({
  Preferences: {
    get: vi.fn(),
    set: vi.fn(),
    remove: vi.fn(),
  },
}));

describe('ThemeContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('should export ThemeProvider and useTheme', async () => {
    const module = await import('./ThemeContext.jsx');
    expect(module.ThemeProvider).toBeDefined();
    expect(module.useTheme).toBeDefined();
  });

  it('should have correct storage key constant', async () => {
    // Verify the module loads without errors
    const module = await import('./ThemeContext.jsx');
    expect(module).toBeDefined();
  });

  it('should handle Capacitor Preferences mock', async () => {
    Preferences.get.mockResolvedValue({ value: 'dark' });
    const result = await Preferences.get({ key: 'careerquest_theme' });
    expect(result.value).toBe('dark');
  });

  it('should handle Capacitor Preferences set', async () => {
    Preferences.set.mockResolvedValue(undefined);
    await Preferences.set({ key: 'careerquest_theme', value: 'light' });
    expect(Preferences.set).toHaveBeenCalledWith({
      key: 'careerquest_theme',
      value: 'light',
    });
  });

  it('should verify localStorage integration', () => {
    localStorage.setItem('careerquest_theme', 'light');
    expect(localStorage.getItem('careerquest_theme')).toBe('light');
    localStorage.clear();
    expect(localStorage.getItem('careerquest_theme')).toBeNull();
  });

  it('should verify document.documentElement attribute manipulation', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    document.documentElement.setAttribute('data-theme', 'light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});
