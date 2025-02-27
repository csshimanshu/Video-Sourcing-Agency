import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        inter: ['var(--font-inter)'],
        handwriting: ['var(--font-caveat)'],
        'asap-condensed': ['var(--font-asap-condensed)'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '20%': { transform: 'translate(-10px, 10px)' },
          '40%': { transform: 'translate(10px, -5px)' },
          '60%': { transform: 'translate(-5px, -10px)' },
          '80%': { transform: 'translate(10px, 5px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite'
      },
    },
  },
  plugins: [],
}
export default config
