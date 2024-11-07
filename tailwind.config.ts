import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Deadlock-black': ['var(--font-Deadlock-black)'],
        'Deadlock-shop': ['var(--font-Deadlock-Retail)'],
        'Deadlock-tooltip': ['var(--font-Deadlock-Retail-reg)'],
      },
      colors: {
        'custom-beige': '#f0debf',
        'custom-bg': '#0d1015',
        'custom-wbg1': '#513616',
        'custom-wbg2': '#432b10',
        'custom-vbg1': '#3f6608',
        'custom-vbg2': '#345506',
        'custom-sbg1': '#301844',
        'custom-sbg2': '#261137',
      },
      screens: {
        'lg': '1120px',
        '2xl': '1300px',
      },
      fontSize: {
        'xs': '0.65rem',
        'sm': '0.775rem',
        'base': '0.9rem',
        'lg': '1.015rem',
        'xl': '1.14rem',
        '2xl': '1.33rem',
        '3xl': '1.615rem',
        '4xl': '1.915rem',
        '5xl': '2.54rem',
      },
      spacing: {
        '0.5': '0.1rem',
        '1': '0.2rem',
        '2': '0.4rem',
        '3': '0.6rem',
        '4': '0.8rem',
        '5': '1rem',
        '6': '1.2rem',
        '8': '1.6rem',
        '10': '2rem',
        '12': '2.4rem',
        '16': '3.2rem',
      },
    },
  },
  plugins: [],
};

export default config;