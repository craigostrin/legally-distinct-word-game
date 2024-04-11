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
          result: '#6AA964',
        },
        yellow: {
          result: '#C9B458',
        },
        gray: {
          result: '#787C7E',
          open: '#D3D6DA',
        },
      },
    },
  },
  plugins: [],
}
