import { createThemeContract } from '@vanilla-extract/css';

const colors = createThemeContract({
  primary: {
    light: null,
    default: null,
    dark: null,
  },
  secondary: {
    light: null,
  },
  success: {
    button_color: null,
    button_hover_color: null
  },
  danger: {
    danger_button_color: null,
    danger_button_hover_color: null,
  },
  base:{
    text_color: null,
  }
})

export const vars = {colors};
export { colors};
