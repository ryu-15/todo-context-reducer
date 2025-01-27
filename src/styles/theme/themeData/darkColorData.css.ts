import { createTheme } from '@vanilla-extract/css';

import { colors } from '@/styles/theme/theme.css.ts';

const darkColorData = createTheme(colors, {
  primary: {
    light: '#34495e',
    default: '#2c3e50',
    dark: '#1a252f',
  },
  secondary: {
    light: '#faf3e0',
  },
  danger: {
    danger_button_color: '#e74c3c',
    danger_button_hover_color: '#c0392b'
  },
  success: {
    button_color: '#66BB6A',
    button_hover_color: '#408f43',
  },
  base: {
    text_color: '#ecf0f1',
  },
});

export { darkColorData };
