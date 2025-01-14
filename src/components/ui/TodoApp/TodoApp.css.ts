// eslint-disable-next-line boundaries/no-unknown-files
import { style } from '@vanilla-extract/css';

 const todoContainer = style({
  maxWidth: '400px',
  margin: '0 auto',
  textAlign: 'center',
});

 const switcherRadio = style({
  marginBottom: '16px',
  textAlign: 'left',
});

 const resetButton = style({
  marginTop: '16px',
  padding: '8px 16px',
  fontSize: '14px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#007BFF',
  color: '#FFFFFF',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#0056b3',
  },
});

 export {
   todoContainer,
   switcherRadio,
   resetButton
 }