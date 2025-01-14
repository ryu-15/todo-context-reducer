// eslint-disable-next-line boundaries/no-unknown-files
import { style } from '@vanilla-extract/css';

 const todoForm = style({
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
});

 const todoTextbox = style({
  padding: '8px',
  marginRight: '10px',
  width: '70%',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
});

 const createButton = style({
  padding: '8px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease',

  ':hover': {
    backgroundColor: '#0056b3',
  },

  ':focus': {
    outline: 'none',
  },
});

 export{
  todoTextbox,
   createButton,
   todoForm
 }