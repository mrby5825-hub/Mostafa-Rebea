import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={!isDark}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-100 transition-colors hover:border-signal/60 hover:text-signal"
    >
      {isDark ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
}
