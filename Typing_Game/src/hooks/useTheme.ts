import { useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'wordsprint-theme';

const getInitialTheme = (): ThemeMode => {
  if (globalThis.window === undefined) return 'light';

  const savedTheme = globalThis.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

  return globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    globalThis.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  const resetToDefault = () => {
    if (globalThis.window === undefined) {
      setTheme('light');
      return;
    }

    setTheme(globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  };

  return { theme, toggleTheme, resetToDefault };
};
