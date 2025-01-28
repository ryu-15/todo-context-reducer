import React, { useEffect, useState } from "react";

import { ITodo } from '@/data/model/TodoModel';
import { TODO_ACTION_TYPE } from '@/data/constant/TodoConstant';
import useTodos from '@/hooks/useTodos';
import useAuthData from '@/utils/useAuthData';

const TodoRestore: React.FunctionComponent = () => {
  const [deletedTodos, setDeletedTodos] = useState<ITodo[]>([]);
  const { dispatch } = useTodos();
  const { localUser } = useAuthData();
  const currentUserId = Number(localUser?.id);

  useEffect(() => {
    const storedDeletedTodos: ITodo[] = JSON.parse(localStorage.getItem('DeletedTodo') || '[]');
    const userDeletedTodos = storedDeletedTodos.filter((todo) => todo.userId === currentUserId);
    setDeletedTodos(userDeletedTodos);
  }, [currentUserId]);

  const handleRestore = (todo: ITodo) => {
    dispatch({
      type: TODO_ACTION_TYPE.ADD_TODO,
      payload: {
        id: todo.id,
        task: todo.task,
        status: todo.status,
        userId: todo.userId,
        starting_date: todo.starting_date,
        ending_date: todo.ending_date,
      },
    });

    const updatedDeletedTodos = deletedTodos.filter((deletedTodo) => deletedTodo.id !== todo.id);
    setDeletedTodos(updatedDeletedTodos);
    const storedDeletedTodos: ITodo[] = JSON.parse(localStorage.getItem('DeletedTodo') || '[]');
    const updatedStoredTodos = storedDeletedTodos.filter((storedTodo) => storedTodo.id !== todo.id);
    localStorage.setItem('DeletedTodo', JSON.stringify(updatedStoredTodos));
  };

  return (
    <div>
      <h2>Deleted Todos</h2>
      {deletedTodos.length === 0 ? (
        <p>No deleted todos to restore for this user.</p>
      ) : (
        <ul>
          {deletedTodos.map((todo: ITodo, index) => (
            <li key={todo.id}>
              <span>{index + 1}. </span>
              <span>{todo.task}</span>
              <button onClick={() => handleRestore(todo)}>Restore</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoRestore;
