import { createContext } from 'react';

import { ITodoContextType } from '@/data/model';
import { STORAGE_TYPE } from '@/data/constant';

const TodoContext = createContext<ITodoContextType>({
  state: { todos: [], storageType: STORAGE_TYPE.LOCAL},
  dispatch: () => {
  },
});

export {TodoContext };