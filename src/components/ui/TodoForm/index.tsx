import React, { useState } from 'react';

import useTodos from '@/hooks/useTodosHook';
import { TODO_ACTION_TYPE } from '@/data/constant';
import { createButton, todoForm, todoTextbox } from '@/components/ui/TodoForm/TodoForm.css.ts';
import CreateIcon from '@/components/icons/CreateIcon';

const TodoForm: React.FunctionComponent = () => {
  const [todoTask, setTodoTask] = useState('');
  const { dispatch } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoTask.trim()) return;
    dispatch({
      type: TODO_ACTION_TYPE.ADD_TODO,
      payload: { id: Date.now(), task: todoTask, status: false },
    });
    setTodoTask('');
  };

  return (
    <form onSubmit={handleSubmit} className={todoForm}>
      <input
        type="text"
        value={todoTask}
        onChange={(e) => setTodoTask(e.target.value)}
        placeholder="Add a new todo"
        className={todoTextbox}
      />
      <button type="submit" className={createButton}>
        <CreateIcon/>
      </button>
    </form>
  );
};

export default TodoForm;
