import React, { PropsWithChildren, useReducer } from 'react';

import { AUTH_ACTION_TYPE } from '@/data/constant/AuthConstant';
import { AuthContext } from '@/context/AuthContext';
import { AuthAction, IAuthState } from '@/data/model/AuthModel';
import useAuthData from '@/utils/useAuthData.ts';

const AuthProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { localUser, localAuthUsers } = useAuthData();

  const initialState: IAuthState = {
    isAuthenticated: !!localUser,
    authUsers: localAuthUsers,
    currentUser: localUser,
    error: null,
    message: null,
  };

  const authReducer = (state: IAuthState, action: AuthAction): IAuthState => {
    console.log('Previous State:', state);
    console.log('Action:', action);
    switch (action.type) {
      case AUTH_ACTION_TYPE.LOGIN: {
        const updatedCurrentUser = action.payload;
        localStorage.setItem('user', JSON.stringify(updatedCurrentUser));
        return {
          ...state,
          isAuthenticated: true,
          currentUser: updatedCurrentUser,
          authUsers: localAuthUsers,
          error: null,
          message: 'Login successful!',
        };
      }

      case AUTH_ACTION_TYPE.REGISTER: {
        const updatedAuthUsers = [...state.authUsers, action.payload];
        localStorage.setItem('authUsers', JSON.stringify(updatedAuthUsers));

        return {
          ...state,
          isAuthenticated: false,
          authUsers: localAuthUsers,
          currentUser: null,
          error: null,
          message: 'Registration successful!',
        };
      }
      case AUTH_ACTION_TYPE.LOGOUT: {
        localStorage.removeItem('user');
        return {
          ...state,
          isAuthenticated: false,
          currentUser: null,
          authUsers: localAuthUsers,
          error: null,
          message: null,
        };
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
