import React from 'react';

import TodoList from '@/components/ui/TodoList';
import useTodos from '@/hooks/useTodosHook';
import { STORAGE_TYPE, TODO_ACTION_TYPE } from '@/data/constant';
import { resetButton, switcherRadio, todoContainer } from '@/components/ui/TodoApp/TodoApp.css.ts';
import TodoForm from '@/components/ui/TodoForm';

const TodoApp: React.FunctionComponent = () => {
  const { state, dispatch } = useTodos();

  const handleStorageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedStorageType =
      event.target.value === STORAGE_TYPE.LOCAL
        ? STORAGE_TYPE.LOCAL
        : STORAGE_TYPE.SESSION;
    dispatch({ type: TODO_ACTION_TYPE.SET_STORAGE_TYPE, payload: { storageType: selectedStorageType } });
  };

  const handleReset = () => {
    if (state.storageType === STORAGE_TYPE.LOCAL) {
      localStorage.removeItem('todos');
    } else {
      sessionStorage.removeItem('todos');
    }
    dispatch({ type: TODO_ACTION_TYPE.RESET_TODOS });
  };

  return (
    <div className={todoContainer}>
      <h1>Todo List</h1>
      <div className={switcherRadio}>
          <input
            type="radio"
            name="storageType"
            value={STORAGE_TYPE.LOCAL}
            checked={state.storageType === STORAGE_TYPE.LOCAL}
            onChange={handleStorageChange}
          />
          Use Local Storage
        <br />
          <input
            type="radio"
            name="storageType"
            value={STORAGE_TYPE.SESSION}
            checked={state.storageType === STORAGE_TYPE.SESSION}
            onChange={handleStorageChange}
          />
          Use Session Storage
      </div>
      <TodoForm />
      <TodoList />
      <button className={resetButton} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default TodoApp;
