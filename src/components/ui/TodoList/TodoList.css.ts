import { style } from '@vanilla-extract/css';

 const todoList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

 const todoListItem = style({
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  backgroundColor: '#264653',
  borderRadius: '4px',
});

 const todoEditDiv = style({
  display: 'flex',
  alignItems: 'center',
});

 const todoEditButton = style({
  padding: '6px 12px',
  marginLeft: '5px',
  backgroundColor: '#e9c46a',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',

  ':hover': {
    backgroundColor: '#f4a261',
  },

  ':focus': {
    outline: 'none',
  },
});

 const todoEditTextbox = style({
  padding: '8px',
  marginRight: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '14px',
  width: '200px',
});

 const todoTaskDiv = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  fontSize: '14px',
});

export
{
  todoEditTextbox,
  todoEditButton,
  todoListItem,
  todoList,
  todoEditDiv,
  todoTaskDiv
}
