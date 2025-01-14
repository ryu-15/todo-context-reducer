import React from "react";

import TodoApp from '@/components/ui/TodoApp';
import { TodoProvider } from '@/providers/TodoProvider';

const TodoView: React.FunctionComponent = () => {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
};

export default TodoView;
