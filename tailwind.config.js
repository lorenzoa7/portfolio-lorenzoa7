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
    },
    fontFamily: {
      mono: ['var(--font-mono)'],
    },
  },
  plugins: [],
}
