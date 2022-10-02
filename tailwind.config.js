/** @type {import('tailwindcss').Config} */

const { colors, fontSize } = require('./theme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    colors,
    fontSize,
  },
  plugins: [],
}
