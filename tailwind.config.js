/** Design tokens for the Jeffcoat homepage (derived from the reference: dark rounded panels, gold accent). */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // mobile-first: sm = 641px, lg = 981px (nav / layout switch), xl = 1181px
    screens: { sm: '641px', lg: '981px', xl: '1181px' },
    extend: {
      colors: {
        ink: { DEFAULT: '#0b1a2b', 2: '#12273d', 3: '#1b3652' },
        paper: '#ffffff',
        tint: '#f4f1ea',
        line: '#e3e0d8',
        copy: '#27323f',
        muted: '#5d6877',
        gold: { DEFAULT: '#c9a24d', 2: '#dcb867', ink: '#7a5c17' }, // swap DEFAULT to #2d95e5 for the original blue accent
        brand: '#2d95e5',
        ondark: { DEFAULT: '#eaf0f6', muted: '#aebccb' },
      },
      fontFamily: {
        sans: ['Inter', '"Segoe UI"', 'system-ui', '-apple-system', 'Roboto', 'sans-serif'],
      },
      borderRadius: { shell: '32px', panel: '22px', field: '14px' },
      maxWidth: { container: '1180px' },
      transitionTimingFunction: { out: 'cubic-bezier(.2,.7,.2,1)' },
    },
  },
  plugins: [],
};
