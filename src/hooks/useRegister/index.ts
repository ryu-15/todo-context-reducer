import { useNavigate } from '@tanstack/react-router';

import useAuth from '@/hooks/useAuth';
import { AUTH_ACTION_TYPE } from '@/data/constant/AuthConstant';
import { IUser } from '@/data/model/AuthModel';
import { TRegistrationFormSchema } from '@/data/schema/AuthSchema/LoginSchema';
import useAuthData from '@/utils/useAuthData.ts';

const useRegister = () => {
  const { dispatch } = useAuth();
  const { localAuthUsers } = useAuthData();
  const navigate = useNavigate();
  const handleRegister = (formData: TRegistrationFormSchema) => {
    const isEmailExists = localAuthUsers.some((user: IUser) => user.email === formData.email);
    if (isEmailExists) {
      alert('This email is already registered.');
      return;
    }

    const newUser: IUser = {
      id: Date.now(),
      email: formData.email,
      password: btoa(formData.password),
      firstName: formData.firstName,
      lastName: formData.lastName,
    };
    const updatedUsers = [...localAuthUsers, newUser];
    localStorage.setItem('authUsers', JSON.stringify(updatedUsers));

    dispatch({
      type: AUTH_ACTION_TYPE.REGISTER,
      payload: {
        id: newUser.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: newUser.password,
      },
    });
    navigate({
      to:'/'
    }).then()
  };

  return { handleRegister };
};

export default useRegister;

