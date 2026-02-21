import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b1120',
        surface: '#111827',
        accent: '#38bdf8',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
