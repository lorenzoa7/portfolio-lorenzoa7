/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        overlayShow: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        overlayHide: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
        contentShow: {
          from: {
            opacity: 0,
            transform: 'translate(-50%, -48%) scale(0)',
          },
          to: {
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)',
          },
        },
        contentHide: {
          from: {
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)',
          },
          to: {
            opacity: 0,
            transform: 'translate(-50%, -48%) scale(0)',
          },
        },
        scroll: {
          '0%': {
            opacity: 0,
            transform: 'rotate(45deg) translate(-2px, -2px)',
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
            transform: 'rotate(45deg) translate(2px, 2px)',
          },
        },
      },
      animation: {
        overlayShow: 'overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayHide: 'overlayHide 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentHide: 'contentHide 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        scrollOne: 'scroll 1.25s infinite',
        scrollTwo: 'scroll 1.25s infinite -200ms',
      },
      colors: {
        amaranth: {
          50: '#fef2f3',
          100: '#fee2e4',
          200: '#fecacd',
          300: '#fba6ac',
          400: '#f7727b',
          500: '#ee4550',
          600: '#db2733',
          700: '#b81d27',
          800: '#981c24',
          900: '#7e1e24',
          950: '#450a0e',
        },
      },
    },
    fontFamily: {
      mono: ['var(--font-mono)'],
    },
  },
  plugins: [],
}
