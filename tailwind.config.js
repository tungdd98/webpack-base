/** @type {import('tailwindcss').Config} */

const { colorsDesignSystem, fontSizeDesignSystem } = require('./theme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    colors: colorsDesignSystem,
    fontSize: fontSizeDesignSystem,
  },
  plugins: [],
}
