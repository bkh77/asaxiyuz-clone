/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: { body: ['Roboto', 'sans-serif'] },
    colors: {
      blue: {
        DEFAULT: '#008DFF',
        darker: '#0071CC',
        dark: '#001068',
      },
      white: '#ffffff',
      gray: {
        DEFAULT: '#F4F7FD',
        dark: '#777777',
        light: '#bbbbbb',
      },
      red: '#e40000',
    },
  },
  plugins: [],
}
