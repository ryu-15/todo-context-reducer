import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme/theme.css.ts';

const todoForm = style({
 marginBottom: '24px',
 display: 'flex',
 alignItems: 'center',
 justifyContent:'center'
});

const todoTextbox = style({
 padding: '10px',
 marginRight: '12px',
 width: '75%',
 border: `1px solid ${vars.colors.secondary.light}`,
 borderRadius: '10px',
 fontSize: '16px',
 backgroundColor: vars.colors.secondary.light,
});

const createButton = style({
 border: 'none',
 cursor: 'pointer',
 transition: 'background-color 0.3s ease, transform 0.2s ease',
 backgroundColor: vars.colors.success.button_color,
 color: vars.colors.base.text_color,
 padding: '10px 20px',
 borderRadius: '8px',
 ':hover': {
  transform: 'scale(1.1)',
  backgroundColor: vars.colors.success.button_hover_color,
 }
});

export {
 todoTextbox,
 createButton,
 todoForm,
};
