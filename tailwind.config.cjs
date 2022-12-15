/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: { body: ['Roboto', 'sans-serif'] },
    colors: {
      blue: '#008DFF',
      'blue-dark': '#0071CC',
      white: '#fff',
      gray:'#F4F7FD'
    },
  },
  plugins: [],
}
