import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme/theme.css.ts';

 const dashboardContainer = style({
  display: 'flex',
  height: '100%',
});

 const sidebar = style({
  width: '15%',
  backgroundColor: vars.colors.primary.dark,
  color: vars.colors.base.text_color,
  padding: '20px',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  gap: '30px',
  transition: 'width 0.3s ease',

  '@media': {
    '(max-width: 768px)': {
      width: '70px',
      padding: '10px',
    },
  },
});

 const sidebarItem = style({
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
   fontSize: '14px',
  gap: '10px',
  transition: 'background 0.3s, padding 0.3s ease',
  height: '5%',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.primary.default,
    },
  },

  '@media': {
    '(max-width: 768px)': {
      padding: '10px',
      justifyContent: 'center',
    },
  },
});

 const activeSidebarItem = style({
  backgroundColor: vars.colors.primary.default,
});

 const content = style({
  display: 'flex',
  width: '85%',
  justifyContent: 'center',
  alignItems: 'center',
   height:'100%',
   overflowX:'hidden',
   overflowY:'hidden',
   padding:'0 20px',
   backgroundColor: vars.colors.secondary.light

});

 const text = style({
   '@media': {
     '(max-width: 768px)': {
      display: 'none',
     },
   },
 })
 export {
   content,
   sidebar,
   sidebarItem,
   activeSidebarItem,
   dashboardContainer,
   text
 }
