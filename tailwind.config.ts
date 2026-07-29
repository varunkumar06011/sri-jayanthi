import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#2d6a3e',
        gold: '#b8952a',
        cream: '#fdf8f0',
        parchment: '#f5ede0',
        ink: '#2c2c2c',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': 'none',
      },
    },
  },
  plugins: [],
};

export default config;
