/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from 'tailwindcss';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
      },
      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        drop: 'drop 2s ease-in-out forwards',
        slideDown: 'slideDown 0.5s ease-in-out',
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        drop: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '70%': { transform: 'translateY(300px)', opacity: '1' },
          '100%': { transform: 'translateY(200px)', opacity: '1' },
        },
        slideDown: {
          from: { transform: 'translateY(-100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
      },
      colors: {
        primary: '#FF7500',
        secondary: '#3D2D72',
        tertiary: '#FFD506',
        lightSecondary: '#463481',
        mainBlack: '#3C3C46',
        lightShade1: '#EDEDFF',
        lightShad2: '#F8F8FF',
        darkShade1: '#393737',
        darkShade2: '#5A5A5A',
        grey: '#949494',
        border: '#C2C2F0',
        error: '#DF3939',
      },
      screens: {
        xss: '410px',
        xsm: '430px',
        xmd: '744px',
        min844: '844px',
        lg: '1025px',
        midlg: '1200px',
        '2xl': '1440px',
        '2xxl': '1512px',
        '3xl': '1920px',
      },
      backgroundImage: {
        'key-features': "url('/svg/keyfeatures.svg')",
        'card-bg-secondary': 'linear-gradient(180deg, #8473BF 0%, #4D3B8B 100%)',
        'card-bg-primary': ' linear-gradient(178.14deg, #FFC899 -2.46%, #FF9337 98.43%)',
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase }: any) {
  const allColors = flattenColorPalette();
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ':root': newVars,
  });
}
