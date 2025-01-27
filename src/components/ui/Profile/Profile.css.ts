import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme/theme.css.ts';

 const profileContainer = style({
  padding: '20px',
  backgroundColor: vars.colors.primary.dark,
  borderRadius: '16px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  width: '30%',
  margin: '0 auto',
  textAlign: 'center',
   color: '#ecf0f1',

 });

 const profileWrapper = style({
  marginBottom: '16px',
  fontSize: '16px',
});

 const logOutButton = style({
  backgroundColor: vars.colors.danger.danger_button_color,
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  marginTop: '20px',
  ':hover': {
    transform: 'scale(1.1)',
  },
});

 export {
   logOutButton,profileWrapper,profileContainer,
 }
