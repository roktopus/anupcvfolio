import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const THEME_KEY = 'theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function resolveInitialTheme() {
  if (typeof window === 'undefined') return LIGHT_THEME;

  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === DARK_THEME || savedTheme === LIGHT_THEME) {
    return savedTheme;
  }

  if (document.documentElement.classList.contains(DARK_THEME)) {
    return DARK_THEME;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? DARK_THEME
    : LIGHT_THEME;
}

interface Props {
  className?: string;
}

export default function SwitchTheme({ className = '' }: Props) {
  const [theme, setTheme] = useState<string>(resolveInitialTheme);

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.documentElement.classList.add(DARK_THEME);
    } else {
      document.documentElement.classList.remove(DARK_THEME);
    }

    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-800 text-headings hover:bg-white dark:hover:bg-black transition-colors cursor-pointer shadow-lg ${className}`}
      aria-label={`Switch to ${theme === DARK_THEME ? 'light' : 'dark'} theme`}
    >
      {theme === DARK_THEME ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
