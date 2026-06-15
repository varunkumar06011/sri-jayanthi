import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1a4a2e',
        gold: '#b8952a',
        cream: '#ffffff',
        parchment: '#f5f5f5',
        ink: '#2c2c2c',
      },
      fontFamily: {
        serif: ['Outfit', 'DM Sans', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': 'none',
      },
    },
  },
  plugins: [],
};

export default config;
