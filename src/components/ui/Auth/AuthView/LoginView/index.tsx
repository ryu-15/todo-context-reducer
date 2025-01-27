import { SubmitHandler, useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import useLogin from '@/hooks/useLogin';
import { loginSchema, TLoginFormSchema } from '@/data/schema/AuthSchema/LoginSchema';
import {
  AuthLoginButton,
  AuthLoginContainer,
  AuthLoginForm,
  AuthLoginHeading, AuthLoginInput, AuthLoginLabel, ErrorMessage, ErrorMessageContainer,
} from '@/components/ui/Auth/AuthView/LoginView/LoginView.css.ts';
import PasswordInvisibleIcon from '@/components/icons/PasswordInvisibleIcon';
import PasswordVisibleIcon from '@/components/icons/PasswordVisibleIcon';

const LoginView: React.FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { handleLogin, errorMessage } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<TLoginFormSchema> = (data) => {
    handleLogin(data);
  };

  return (
    <div className={AuthLoginContainer}>
      <form className={AuthLoginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className='centerAlignWrapper'>
          <h1 className={AuthLoginHeading}> Login </h1>
        </div>
        <label className={AuthLoginLabel}>
          Email:
        </label>
        <input
          className={AuthLoginInput}
          id="email"
          type="text"
          {...register('email')}
          placeholder="Email"
        />
        <div className={ErrorMessageContainer}>
          {errors.email && (
            <span className={ErrorMessage}>{`${errors.email.message}`}</span>
          )}
        </div>
        <label className={AuthLoginLabel}>
          Password:
        </label>
        <div className='authPasswordWrapper'>
          <input
            className={AuthLoginInput}
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            placeholder="Password"
          />
          <span className='authPasswordDisplayMode'
                onClick={() => setShowPassword((_) => !_)}
          >
            {showPassword ? <PasswordInvisibleIcon /> : <PasswordVisibleIcon />}
          </span>
        </div>
        <div className='ErrorMessageContainer'>
          {errors.password && (
            <span className={ErrorMessage}>{`${errors.password.message}`}</span>
          )}
        </div>
        <div className={ErrorMessageContainer}>
          {errorMessage && <span className={ErrorMessage}>{errorMessage}</span>}
        </div>
        <div className="centerAlignWrapper">
          <button type="submit" className={AuthLoginButton}>
            Login
          </button>
          <p>
            <a href="/signup">Don't have an account?</a>
          </p>
        </div>

      </form>
    </div>
);
};

export default LoginView;
