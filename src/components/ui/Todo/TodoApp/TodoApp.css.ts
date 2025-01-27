import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme/theme.css.ts';

const todoContainer = style({
 textAlign: 'center',
 background: vars.colors.primary.dark,
 borderRadius: '16px',
 boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
 width: '100%',
 height: '95%',
 overflowX: 'hidden',
 overflowY:'scroll',
 padding: '0 20px'
});

const todoHeading =style({
 color: vars.colors.base.text_color,
})
const resetButton = style({
 margin: '16px',
 fontSize: '14px',
 border: 'none',
 color: '#ecf0f1',
 backgroundColor: vars.colors.danger.danger_button_color,
 cursor: 'pointer',
 fontWeight: 'bold',
 transition: 'background-color 0.3s ease, transform 0.2s ease',
 borderRadius: '8px',
 padding: '8px 16px',
 ':hover': {
  transform: 'scale(1.1)',
  backgroundColor: vars.colors.danger.danger_button_hover_color,
 },
 ':focus': {
  outline: `2px solid ${vars.colors.primary.default}`,
  boxShadow: '0px 0px 8px rgba(255, 0, 0, 0.5)',
 },
});

const toggleGroup = style({
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 marginBottom: '20px',
 gap: '10px',
});

const toggleOption = style({
 background: vars.colors.primary.light,
 color: vars.colors.base.text_color,
 transition: 'background-color 0.3s ease, color 0.3s ease',
 selectors: {
  '&[data-active="true"]': {
   background: vars.colors.secondary.light,
   color: vars.colors.base.text_color,
   cursor:'not-allowed',
  },
 },
 ':hover': {
  background: vars.colors.primary.default,
  color: vars.colors.base.text_color,
 },
});

export {
 todoContainer,
 resetButton,
 toggleGroup,
 toggleOption,
 todoHeading
};
