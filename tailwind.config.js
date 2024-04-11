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
          wordle: '#6AA964',
        },
        yellow: {
          wordle: '#C9B458',
        },
        gray: {
          wordle: '#787C7E',
          light: '#D3D6DA',
        },
      },
    },
  },
  plugins: [],
}
