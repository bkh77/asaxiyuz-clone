/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: { body: ['Roboto', 'sans-serif'] },
    colors: {
      blue: '#008DFF',
      'blue-dark': '#0071CC',
      white: '#ffffff',
      gray: '#F4F7FD',
      'gray-dark': '#777777',
    },
  },
  plugins: [],
}
