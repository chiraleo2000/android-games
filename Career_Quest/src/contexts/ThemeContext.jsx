import { createContext, useContext, useState, useEffect } from 'react';
import { Preferences } from '@capacitor/preferences';

const ThemeContext = createContext(null);

const THEME_STORAGE_KEY = 'careerquest_theme';

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState('dark');
  const [isLoading, setIsLoading] = useState(true);

  // Load theme on mount
  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      // Try Capacitor Preferences first
      const { value } = await Preferences.get({ key: THEME_STORAGE_KEY });
      if (value) {
        applyTheme(value);
        return;
      }
      
      // Fallback to localStorage
      const localValue = localStorage.getItem(THEME_STORAGE_KEY);
      if (localValue) {
        applyTheme(localValue);
        return;
      }
      
      // Default to dark theme
      applyTheme('dark');
    } catch (error) {
      console.error('Failed to load theme:', error);
      applyTheme('dark');
    } finally {
      setIsLoading(false);
    }
  };

  const applyTheme = (newTheme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const setTheme = async (newTheme) => {
    applyTheme(newTheme);
    
    // Save to both storage mechanisms
    try {
      await Preferences.set({ key: THEME_STORAGE_KEY, value: newTheme });
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isLoading }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
