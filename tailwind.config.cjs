/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 10px 50px -8px rgba(0, 0, 0, 0.1)',
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
        dark: '#777777',
        light: '#bbbbbb',
      },
      red: 'red',
      'red-dark': '#ca4f4f',
      orange: '#ff811b',
      'orange-dark': '#cf6610',
      green: '#00cd98',
      'green-dark': '#008f69',
    },
  },
  plugins: [],
}
