import React, { useState } from 'react';

import TodoList from '../TodoList';
import TodoForm from '../TodoForm';

import { STORAGE_TYPE, TODO_ACTION_TYPE, TODO_STATUS } from '@/data/constant/TodoConstant';
import {
  resetButton,
  todoContainer,
  todoHeading,
  toggleGroup,
  toggleOption,
} from '@/components/ui/Todo/TodoApp/TodoApp.css.ts';
import useTodos from '@/hooks/useTodos';
import Popup from '@/components/ui/Popup';
import { ITodo } from '@/data/model/TodoModel';
import useAuthData from '@/utils/useAuthData.ts';

interface TodoAppProps {
  showForm?: boolean;
  filter?: TODO_STATUS;
}

const TodoApp: React.FunctionComponent<TodoAppProps> = ({ showForm = true, filter = TODO_STATUS.ALL }) => {
  const { state, dispatch } = useTodos();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const handleStorageChange = (storageType: string) => {
    const selectedStorageType =
      storageType === STORAGE_TYPE.LOCAL
        ? STORAGE_TYPE.LOCAL
        : STORAGE_TYPE.SESSION;
    dispatch({ type: TODO_ACTION_TYPE.SET_STORAGE_TYPE, payload: { storageType: selectedStorageType } });
  };
  const { localUser } = useAuthData();

  const currentUserId = Number(localUser?.id);

  const formatDate = () => {
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const day = days[today.getDay()]; // Get day name
    const date = today.getDate(); // Get numeric day
    const month = months[today.getMonth()]; // Get month name
    const year = today.getFullYear(); // Get year

    return `${day}, ${month} ${date}, ${year}`;
  };

  const handleReset = () => {
    setIsPopupOpen(false);

    if (state.storageType === STORAGE_TYPE.LOCAL) {
      const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
      const filteredTodos = storedTodos.filter((todo: ITodo) => todo.userId !== currentUserId);
      localStorage.setItem('todos', JSON.stringify(filteredTodos));
    } else {
      const storedTodos = JSON.parse(sessionStorage.getItem('todos') || '[]');
      const filteredTodos = storedTodos.filter((todo: ITodo) => todo.userId !== currentUserId);
      sessionStorage.setItem('todos', JSON.stringify(filteredTodos));
    }

    dispatch({ type: TODO_ACTION_TYPE.RESET_TODOS });
  };
  const getReadableHeading = (filter: TODO_STATUS): string => {
    switch (filter) {
      case TODO_STATUS.COMPLETED:
        return 'Completed TODOs';
      case TODO_STATUS.PENDING:
        return 'Pending TODOs';
      default:
        return 'All TODOs';
    }
  };

  return (
    <div className={todoContainer}>
      <h1 className={todoHeading}>{getReadableHeading(filter)}</h1>
      <p className={todoHeading}>{formatDate()}</p>
      <div className={toggleGroup}>
        <button
          className={toggleOption}
          data-active={state.storageType === STORAGE_TYPE.LOCAL}
          onClick={() => handleStorageChange(STORAGE_TYPE.LOCAL)}
        >
          Persistent Storage
        </button>
        <button
          className={toggleOption}
          data-active={state.storageType === STORAGE_TYPE.SESSION}
          onClick={() => handleStorageChange(STORAGE_TYPE.SESSION)}
        >Disposable Storage
        </button>
      </div>
      {showForm && <TodoForm />}
      <TodoList filter={filter} />
      <div className='centerAlignWrapper'>
      <button className={resetButton} onClick={() => setIsPopupOpen(true)}>
        Reset
      </button>
      </div>
      {isPopupOpen && (
        <Popup
          title={`Confirm Reset`}
          message={`Are you sure you want to reset the ${state.storageType === STORAGE_TYPE.LOCAL ? 'Persistent' : 'Disposable' } storage?`}
          onCancel={() => setIsPopupOpen(false)}
          isOpen={isPopupOpen}
          onConfirm={handleReset}
        />
      )}
    </div>
  );
};

export default TodoApp;
