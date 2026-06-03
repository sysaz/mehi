/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2E59',
          'navy-dark': '#092244',
          gray: '#5B6770',
          'navy-light': '#EBF0F7',
          'navy-mid': '#D6E1EF',
        },
      },
    },
  },
  plugins: [],
};
