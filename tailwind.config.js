/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
