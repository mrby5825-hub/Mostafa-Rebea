import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#070A0E',
          900: '#0A0E13',
          850: '#0D1218',
          800: '#111820',
          700: '#161F29',
          600: '#22303C',
        },
        ink: {
          100: '#EEF2F5',
          300: '#C3CDD6',
          500: '#8A97A3',
          700: '#5C6873',
        },
        signal: {
          DEFAULT: '#2FE0C6',
          soft: '#1CA893',
          dim: 'rgba(47, 224, 198, 0.12)',
        },
        amber: {
          DEFAULT: '#F5B942',
          soft: '#C98F26',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(rgba(47,224,198,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,224,198,0.06) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at top right, rgba(47,224,198,0.15), transparent 60%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        'glow-signal': '0 0 40px rgba(47,224,198,0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        ticker: 'ticker 30s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
