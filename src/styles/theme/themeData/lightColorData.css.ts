import { createTheme } from '@vanilla-extract/css';

import { colors } from '@/styles/theme/theme.css.ts';

const lightColorData = createTheme(colors, {
  primary: {
    light: '#faf3e0',
    default: '#f5e8d3',
    dark: '#e5d2b8',
  },
  secondary: {
    light: '#FFFFFF',
  },
  danger: {
    danger_button_color: '#e74c3c',
    danger_button_hover_color: '#c0392b',
  },
  success: {
    button_color: '#66BB6A',
    button_hover_color: '#408f43',
  },
  base: {
    text_color: '#5f4b32',
  },
});


export { lightColorData };
