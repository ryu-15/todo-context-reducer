import { globalStyle } from '@vanilla-extract/css';

import { vars } from '@/styles/theme/theme.css.ts';

globalStyle('html', {
  fontFamily: 'Poppins,Sanserif',
  display: 'flex',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
});
globalStyle('#root', {
  fontWeight: '400',
  height: '100%',
  width: '100%',
  margin: 0,
  padding: 0,
});

globalStyle('body', {
  display: 'flex',
  height: '100%',
  width: '100%',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
});

globalStyle('button', {
  fontFamily: 'Poppins,Sanserif',
  borderRadius: '8px',
  padding: '0.6em 0.6em',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  border: 'none',
  height:'3.3em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center' ,
  width:'fit-content'
});
globalStyle('input[type="text"]:focus,input[type="text"]:hover,input[type="password"]:focus,input[type="password"]:hover,input[type="email"]:focus,input[type="text"]:hover', {
  boxShadow: `0 0 10px white`,
  outline: 'blue'
});
globalStyle('.authPasswordWrapper', {
  position: 'relative',
  width: '100%',
});

globalStyle('.authPasswordDisplayMode', {
  position: 'absolute',
  right: '10px',
  top: '55%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
});

globalStyle('input[type="text"], input[type="password"]', {
  width: '100%',
  boxSizing: 'border-box',
  padding: '12px 16px',
  borderRadius: '4px',
  background: vars.colors.secondary.light,
  color: 'black',
  transition: 'border-color 0.3s ease, box-shadow 0.2s ease',
});

globalStyle('.centerAlignWrapper',{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})
globalStyle('a', {
color: vars.colors.base.text_color,
});
globalStyle('a:hover', {
});


