import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme/theme.css.ts';

const AuthRegistrationContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: vars.colors.primary.dark,
  '@media': {
    '(max-width: 768px)': {
      backgroundColor: vars.colors.primary.default,
    },
  },
});

const AuthRegistrationHeading = style({
  fontWeight: 'bold',
  color: vars.colors.base.text_color,
});

const AuthRegistrationLabel = style({
  color: vars.colors.base.text_color,
  fontSize: '14px',
  fontWeight: '600',
});

const AuthRegistrationForm = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '40%',
  height:'80%',
  gap: '10px',
  padding: '2rem',
  borderRadius: '8px',
  backgroundColor: vars.colors.primary.default,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  '@media': {
    '(max-width: 768px)': {
      width:'85%',
      height: '100%',
      overflowX: 'hidden',
      overflowY: 'scroll',
      boxShadow: 'none',
    },
  },

});

const AuthRegistrationInput = style({
  fontSize: '16px',
  padding: '12px 16px',
  borderRadius: '4px',
  background: vars.colors.secondary.light,
  color: vars.colors.primary.light,
  outline: 'none',
  border: 'none',
  transition: 'border-color 0.3s',
  ':focus': {
    borderColor: vars.colors.primary.default,
    boxShadow: `0 0 8px rgba(${vars.colors.primary.default}, 0.4)`,
  },
});

const AuthRegistrationButton = style({
  border: 'none',
  color: vars.colors.base.text_color,
  fontSize: '16px',
  padding: '12px 24px',
  background: vars.colors.success.button_color,
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'background-color 0.3s, transform 0.2s',
  marginTop: '10px',
  ':hover': {
    transform: 'scale(1.1)',
    background: vars.colors.success.button_hover_color,

  },
});

export {
  AuthRegistrationContainer,
  AuthRegistrationLabel,
  AuthRegistrationHeading,
  AuthRegistrationForm,
  AuthRegistrationInput,
  AuthRegistrationButton,
};
