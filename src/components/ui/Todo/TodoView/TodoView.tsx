import React from "react";

import TodoApp from '@/components/ui/Todo/TodoApp';
import LoginView from '@/components/ui/Auth/AuthView/LoginView';
import useAuthData from '@/utils/useAuthData.ts';

const TodoView: React.FunctionComponent = () => {
  const{localUser} = useAuthData();

  if (!localUser) {
    return <LoginView />;
  }
  return (
        <TodoApp />
  );
};

export default TodoView;
