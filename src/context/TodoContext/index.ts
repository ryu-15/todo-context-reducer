import { createContext } from 'react';

import { ITodoContextType } from '@/data/model/TodoModel';
import { STORAGE_TYPE } from '@/data/constant/TodoConstant';

const TodoContext = createContext<ITodoContextType>({
  state: { todos: [], storageType: STORAGE_TYPE.LOCAL},
  dispatch: () => {
  },
});

export {TodoContext };