/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 10px 50px -10px rgba(0, 0, 0, 0.2)',
      },
    },
    fontFamily: { body: ['Roboto', 'sans-serif'] },
    colors: {
      blue: {
        DEFAULT: '#008DFF',
        darker: '#0065b8',
        dark: '#001068',
      },
      white: '#ffffff',
      gray: {
        DEFAULT: '#F4F7FD',
        dark: '#888888',
        light: '#bbbbbb',
      },
      red: 'red',
      orange: '#ff811b',
      green: '#00cd98',
      black: '#222',
      'red-dark': '#af5679',
      'red-price': '#d9663b',
      'orange-dark': '#cf6610',
      'green-dark': '#008f69',
    },
  },
  plugins: [],
}
