import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme/theme.css.ts';

const AuthLoginContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width:'100%',
  height:'100%',
  backgroundColor: vars.colors.primary.dark,
  '@media': {
    '(max-width: 768px)': {
      backgroundColor: vars.colors.primary.default,
    },
  },
});

const AuthLoginHeading = style({
  color: vars.colors.base.text_color,
  fontWeight: 'bold',
});

const AuthLoginForm = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: vars.colors.primary.default,
  width:'30%',
  height:'60%',
  gap: '10px',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  '@media': {
    '(max-width: 768px)': {
      width:'85%',
      height: '100%',
      overflow: 'hidden',
      boxShadow: 'none',
      gap: 0,

    },
  },
});

const AuthLoginLabel = style({
  color: vars.colors.base.text_color,
  fontSize: '14px',
  fontWeight: '600',
});

const AuthLoginInput = style({
  fontSize: '16px',
  padding: '12px 16px',
  borderRadius: '4px',
  background: vars.colors.secondary.light,
  color: vars.colors.primary.light,
  outline: 'none',
  border: 'none',
  transition: 'border-color 0.3s ease, box-shadow 0.2s ease',
  ':focus': {
    borderColor: vars.colors.primary.default,
    boxShadow: `0 0 8px rgba(${vars.colors.primary.default}, 0.4)`,
  },
});

const AuthLoginButton = style({
  border: 'none',
  color: vars.colors.base.text_color,
  fontSize: '16px',
  padding: '12px 24px',
  background: vars.colors.success.button_color,
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  ':hover': {
    transform: 'scale(1.1)',
    background: vars.colors.success.button_hover_color,

  },
});

const ErrorMessageContainer=style({
  height: '10%',
  width: '100%',

})

const ErrorMessage = style({
  color: vars.colors.danger.danger_button_color,
  fontSize: '14px',
  textAlign: 'center',
});

export { AuthLoginContainer,ErrorMessageContainer, ErrorMessage, AuthLoginLabel, AuthLoginHeading, AuthLoginForm, AuthLoginInput, AuthLoginButton };
