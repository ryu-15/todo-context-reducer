import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  AuthRegistrationButton,
  AuthRegistrationContainer,
  AuthRegistrationForm,
  AuthRegistrationHeading,
  AuthRegistrationInput,
  AuthRegistrationLabel,
} from '@/components/ui/Auth/AuthView/RegistrationView/RegistrationView.css.ts';
import { ErrorMessage, ErrorMessageContainer } from '@/components/ui/Auth/AuthView/LoginView/LoginView.css.ts';
import useRegister from '@/hooks/useRegister';
import { registrationSchema, TRegistrationFormSchema } from '@/data/schema/AuthSchema/LoginSchema';
import PasswordInvisibleIcon from '@/components/icons/PasswordInvisibleIcon';
import PasswordVisibleIcon from '@/components/icons/PasswordVisibleIcon';

const RegistrationView: React.FunctionComponent = () => {
  const { handleRegister } = useRegister();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegistrationFormSchema>({
    resolver: zodResolver(registrationSchema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<TRegistrationFormSchema> = (data) => {
    handleRegister(data);
  };

  return (
    <div className={AuthRegistrationContainer}>
      <form className={AuthRegistrationForm} onSubmit={handleSubmit(onSubmit)}>
        <div className="centerAlignWrapper">
          <h2 className={AuthRegistrationHeading}>Register</h2>
        </div>
        <label className={AuthRegistrationLabel} htmlFor="firstName">
          First Name:
        </label>
        <input
          className={AuthRegistrationInput}
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          {...register('firstName')}
        />
        <div className={ErrorMessageContainer}>
          {errors.firstName && <span className={ErrorMessage}>{errors.firstName.message}</span>}
        </div>
        <label className={AuthRegistrationLabel}>
          Last Name:
        </label>
        <input
          className={AuthRegistrationInput}
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          {...register('lastName')}
        />
        <div className={ErrorMessageContainer}>
          {errors.lastName && <span className={ErrorMessage}>{errors.lastName.message}</span>}
        </div>
          <label className={AuthRegistrationLabel}>
            Email:
          </label>
          <input
            className={AuthRegistrationInput}
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register('email')}
          />
        <div className={ErrorMessageContainer}>
          {errors.email && <span className={ErrorMessage}>{errors.email.message}</span>}
        </div>
        <label className={AuthRegistrationLabel}>
          Password:
        </label>
        <div className="authPasswordWrapper">
          <input
            className={AuthRegistrationInput}
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            {...register('password')}
          />
          <span className="authPasswordDisplayMode"
                onClick={() => setShowPassword((_) => !_)}
          >
            {showPassword ? <PasswordVisibleIcon /> : <PasswordInvisibleIcon />}
          </span>
        </div>
        <div className={ErrorMessageContainer}>
          {errors.password && <span className={ErrorMessage}>{errors.password.message}</span>}
        </div>
        <div className="centerAlignWrapper">
          <button className={AuthRegistrationButton} type="submit">
            Register
          </button>
          <p>
            <a href="/login">Already have an account?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationView;

