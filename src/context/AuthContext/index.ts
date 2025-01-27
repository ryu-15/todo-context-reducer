import { createContext } from 'react';

import { IAuthContextType } from '@/data/model/AuthModel';


const AuthContext = createContext<IAuthContextType>({
  state: {
    isAuthenticated: false,
    authUsers: [],
    currentUser: null,
    error: '',
    message: '',
  },
  dispatch: () => {},
});


export { AuthContext };
