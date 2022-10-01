const generateColors = (colorName, colorValues) => ({
  [colorName]: colorValues.reduce(
    (preValue, value, index) => ({
      ...preValue,
      [(index + 1) * 100]: value,
    }),
    {}
  ),
})

const generateColorsDesignSystem = (colors) =>
  Object.entries(colors).reduce(
    (preValue, [key, value]) => ({
      ...preValue,
      ...generateColors(key, value),
    }),
    {}
  )

module.exports = {
  generateColorsDesignSystem,
}
