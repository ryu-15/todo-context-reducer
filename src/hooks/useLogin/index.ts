import  { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

import useAuth from '@/hooks/useAuth';
import { AUTH_ACTION_TYPE } from '@/data/constant/AuthConstant';
import { IUser } from '@/data/model/AuthModel';
import useAuthData from '@/utils/useAuthData.ts';
import { TLoginFormSchema } from '@/data/schema/AuthSchema/LoginSchema';

const useLogin = () => {
  const { dispatch } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { localAuthUsers } = useAuthData();
const navigate = useNavigate();
  const handleLogin = (data: TLoginFormSchema) => {
    const matchedUser = localAuthUsers.find(
      (user: IUser) =>
        user.email === data.email && atob(user.password) === data.password
    );

    if (matchedUser) {
      console.log('User is authenticated');
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: matchedUser.id,
          email: matchedUser.email,
          password: matchedUser.password,
          firstName: matchedUser.firstName,
          lastName: matchedUser.lastName,
        })
      );

      dispatch({
        type: AUTH_ACTION_TYPE.LOGIN,
        payload: {
          id: matchedUser.id,
          email: matchedUser.email,
          password: matchedUser.password,
          firstName: matchedUser.firstName,
          lastName: matchedUser.lastName,
        },
      });
      setErrorMessage(null);
      navigate({to: '/'}).then()
    }};

  return {
    handleLogin,
    errorMessage,
  };
};

export default useLogin;
