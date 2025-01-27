import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/theme/theme.css.ts';

const todoListContainer = style({
 listStyle: 'none',
 margin: 0,
 display: 'flex',
 flexDirection: 'column',
 gap: '16px',
 padding: 0,
});

const todoActionDiv =style({
 display: 'flex',
 flexDirection:'row',
 justifyContent: 'space-between',
alignItems: 'center',
 gap:'10px'
});
const todoListItem = style({
 padding: '16px',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'space-between',
 backgroundColor: vars.colors.primary.light,
 borderRadius: '12px',
 boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
 transition: 'transform 0.2s ease, box-shadow 0.2s ease',
 ':hover': {
  transform: 'translateY(-2px)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
 },
});

const todoEditDiv = style({
 display: 'flex',
 alignItems: 'center',
 gap: '10px',
});

const baseTodoEditButton = style({
 padding: '10px 20px',
 border: 'none',
 borderRadius: '8px',
 fontWeight: 'bold',
 cursor: 'pointer',
 transition: 'transform 0.2s ease, background-color 0.3s ease',
 ':hover': {
  transform: 'scale(1.1)',
 },
});

const todoEditButton = styleVariants({
 primary: [
  baseTodoEditButton,
  {
   backgroundColor: vars.colors.success.button_color,
   color: vars.colors.base.text_color,
   ':hover': {
    backgroundColor: vars.colors.success.button_hover_color,
   }
   },
 ],
 danger: [
  baseTodoEditButton,
  {
   backgroundColor: vars.colors.danger.danger_button_color,
   color: vars.colors.base.text_color,
   ':hover': {
    backgroundColor: vars.colors.danger.danger_button_hover_color,
   }
  },
 ],
});

const todoEditTextbox = style({
 padding: '12px',
 width: '100%',
 maxWidth: '300px',
 fontSize: '16px',
 border: `1px solid ${vars.colors.primary.default}`,
 borderRadius: '8px',
 backgroundColor: 'white',
 color: vars.colors.base.text_color,
 outline: 'none',
 ':focus': {
  boxShadow: '0 0 6px rgba(25, 118, 210, 0.4)',
 },
});
const todoTaskDiv = style({
 display: 'flex',
 alignItems: 'center',
 gap: '8px',
 fontSize: '16px',
 color:vars.colors.base.text_color,
});

const baseTodoTaskSpan = style({
 fontSize: '16px',
 lineHeight: '1.5',
});

const todoTaskSpan = styleVariants({
 completed: [
  baseTodoTaskSpan,
  {
   textDecoration: 'line-through',
   color: 'black',
  },
 ],
 notCompleted: [
  baseTodoTaskSpan,
  {
   textDecoration: 'none',
   color: vars.colors.base.text_color,
  },
 ],
});

export {
 todoEditTextbox,
 todoEditButton,
 todoListItem,
 todoListContainer,
 todoEditDiv,
 todoTaskDiv,
 todoTaskSpan,
 todoActionDiv
};
