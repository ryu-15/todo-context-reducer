import React from "react";

import TodoApp from '../Components/dummy/TodoApp';
import { TodoProvider } from '@/Providers';

const TodoView: React.FunctionComponent = () => {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
};

export default TodoView;
