/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'flip-green': 'flip-green .75s ease forwards',
        'flip-yellow': 'flip-yellow .75s ease forwards',
        'flip-gray': 'flip-gray .75s ease forwards',
      },
      colors: {
        green: {
          result: '#49A941',
        },
        yellow: {
          result: '#C4993D',
        },
        gray: {
          result: '#577E92',
          open: '#C6CAD0',
        },
      },
    },
  },
  plugins: [],
}
