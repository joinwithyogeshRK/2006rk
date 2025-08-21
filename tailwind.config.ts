import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
          50: 'hsl(var(--primary-50) / <alpha-value>)',
          100: 'hsl(var(--primary-100) / <alpha-value>)',
          200: 'hsl(var(--primary-200) / <alpha-value>)',
          300: 'hsl(var(--primary-300) / <alpha-value>)',
          400: 'hsl(var(--primary-400) / <alpha-value>)',
          500: 'hsl(var(--primary-500) / <alpha-value>)',
          600: 'hsl(var(--primary-600) / <alpha-value>)',
          700: 'hsl(var(--primary-700) / <alpha-value>)',
          800: 'hsl(var(--primary-800) / <alpha-value>)',
          900: 'hsl(var(--primary-900) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
          50: 'hsl(var(--secondary-50) / <alpha-value>)',
          100: 'hsl(var(--secondary-100) / <alpha-value>)',
          200: 'hsl(var(--secondary-200) / <alpha-value>)',
          300: 'hsl(var(--secondary-300) / <alpha-value>)',
          400: 'hsl(var(--secondary-400) / <alpha-value>)',
          500: 'hsl(var(--secondary-500) / <alpha-value>)',
          600: 'hsl(var(--secondary-600) / <alpha-value>)',
          700: 'hsl(var(--secondary-700) / <alpha-value>)',
          800: 'hsl(var(--secondary-800) / <alpha-value>)',
          900: 'hsl(var(--secondary-900) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
          50: 'hsl(var(--accent-50) / <alpha-value>)',
          100: 'hsl(var(--accent-100) / <alpha-value>)',
          200: 'hsl(var(--accent-200) / <alpha-value>)',
          300: 'hsl(var(--accent-300) / <alpha-value>)',
          400: 'hsl(var(--accent-400) / <alpha-value>)',
          500: 'hsl(var(--accent-500) / <alpha-value>)',
          600: 'hsl(var(--accent-600) / <alpha-value>)',
          700: 'hsl(var(--accent-700) / <alpha-value>)',
          800: 'hsl(var(--accent-800) / <alpha-value>)',
          900: 'hsl(var(--accent-900) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'hsl(var(--success) / <alpha-value>)',
          foreground: 'hsl(var(--success-foreground) / <alpha-value>)',
          muted: 'hsl(var(--success-muted) / <alpha-value>)',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning) / <alpha-value>)',
          foreground: 'hsl(var(--warning-foreground) / <alpha-value>)',
          muted: 'hsl(var(--warning-muted) / <alpha-value>)',
        },
        error: {
          DEFAULT: 'hsl(var(--error) / <alpha-value>)',
          foreground: 'hsl(var(--error-foreground) / <alpha-value>)',
          muted: 'hsl(var(--error-muted) / <alpha-value>)',
        },
        info: {
          DEFAULT: 'hsl(var(--info) / <alpha-value>)',
          foreground: 'hsl(var(--info-foreground) / <alpha-value>)',
          muted: 'hsl(var(--info-muted) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface) / <alpha-value>)',
          foreground: 'hsl(var(--surface-foreground) / <alpha-value>)',
          muted: 'hsl(var(--surface-muted) / <alpha-value>)',
        },
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
      },
      boxShadow: {
        'task-card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'task-card-hover': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'neumorphic': '5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff',
        'neumorphic-dark': '5px 5px 10px #151515, -5px -5px 10px #252525',
      },
      keyframes: {
        'task-complete': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'task-complete': 'task-complete 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;