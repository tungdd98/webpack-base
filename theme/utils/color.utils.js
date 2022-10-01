const { COLORS, neutral } = require('../constants/color.constants')
const { generateColorsDesignSystem } = require('../helpers/color.helpers')

const colors = {
  ...generateColorsDesignSystem(COLORS),
  neutral,
}

const colorsDesignSystem = {
  ...colors,
  primary: {
    A: colors.neutral[1100],
    B: colors.neutral[1200],
  },
  accent: colors.blue[600],
  negative: colors.red[600],
  warning: colors.yellow[400],
  secondary: colors.green[600],
  background: {
    primary: colors.neutral[50],
    secondary: colors.neutral[100],
  },
  border: {
    primary: colors.neutral[400],
    secondary: colors.neutral[100],
    hover: colors.blue[300],
    focused: colors.blue[500],
    error: colors.red[700],
  },
  content: {
    primary: colors.neutral[1200],
    secondary: colors.neutral[1000],
    tertiary: colors.neutral[900],
    week: colors.neutral[800],
    disabled: colors.neutral[500],
    error: colors.red[700],
  },
  icon: {
    primary: colors.neutral[1000],
    secondary: colors.neutral[900],
    disabled: colors.neutral[500],
  },
}

module.exports = {
  colorsDesignSystem,
}
