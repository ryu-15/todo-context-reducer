import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme/theme.css.ts';

 const popupOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

 const popupContainer = style({
  backgroundColor: vars.colors.primary.default,
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  width: '90%',
  maxWidth: '400px',
  color: vars.colors.base.text_color,
});

 const popupContent = style({
  marginTop: '1.5rem',
  display: 'flex',
  justifyContent: 'space-around',
});

 const popupButton = style({
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: vars.colors.success.button_color,
  color: vars.colors.base.text_color,
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  ':hover': {
   backgroundColor: vars.colors.success.button_hover_color,
  },
});

 const popupButtonDanger = style({
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: vars.colors.danger.danger_button_color,
  color: vars.colors.base.text_color,
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',

  ':hover': {
    backgroundColor: '#c0392b',
  },
});

 export {
   popupContent,
   popupOverlay,
   popupButton,
   popupContainer,
   popupButtonDanger,
 }