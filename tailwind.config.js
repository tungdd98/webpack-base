/** @type {import('tailwindcss').Config} */

const { colors, fontSize } = require('./theme')

module.exports = {
  content: ['./src/**/*.{html,js,pug}'],
  theme: {
    extend: {},
    colors,
    fontSize,
  },
  plugins: [],
}
