import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        brand: {
          blue: {
            DEFAULT: '#4A72FF',
            light: '#6B89FF',
            dark: '#2A51E8'
          },
          purple: {
            DEFAULT: '#6B5AED',
            light: '#8B7DF1',
            dark: '#4A3FD9'
          },
          orange: {
            DEFAULT: '#FF6B47',
            light: '#FF8966',
            dark: '#E8522F'
          },
          rust: {
            DEFAULT: '#D4A574',
            light: '#E0B989',
            dark: '#B88B5F'
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
