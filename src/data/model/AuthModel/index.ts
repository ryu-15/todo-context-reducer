import React from 'react';

import { AUTH_ACTION_TYPE } from '@/data/constant/AuthConstant';


 interface IUser {
  email: string;
  password: string;
  id: number;
  firstName: string;
  lastName: string;
}

 interface IAuthState {
  isAuthenticated: boolean;
  authUsers: IUser[];
  currentUser: IUser | null;
  error: string | null;
  message: string | null;
}

type ValidRoutes = 'login' | 'signup'|'';

 type AuthAction =
  | { type: AUTH_ACTION_TYPE.LOGIN; payload: { email: string; password: string ,id: number,firstName: string, lastName: string } }
  | { type: AUTH_ACTION_TYPE.REGISTER; payload: { firstName: string; lastName: string; email: string; password: string; id: number } }
  | { type: AUTH_ACTION_TYPE.LOGOUT};

 interface IAuthContextType {
  state: IAuthState;
  dispatch: React.Dispatch<AuthAction>;
}


export type { IAuthContextType ,IAuthState,AuthAction,IUser,ValidRoutes};
