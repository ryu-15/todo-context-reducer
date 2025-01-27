import { useContext } from 'react';

import { TodoContext } from '@/context/TodoContext';

const useTodos = () => useContext(TodoContext);

export default useTodos;