import React, { useState } from 'react';

import { TODO_ACTION_TYPE } from '@/data/constant/TodoConstant';
import {
  todoEditButton,
  todoEditDiv,
  todoEditTextbox,
  todoListItem,
  todoListContainer,
  todoTaskDiv,
  todoTaskSpan, todoActionDiv,
} from '@/components/ui/Todo/TodoList/TodoList.css.ts';
import DeleteIcon from '@/components/icons/DeleteIcon';
import EditIcon from '@/components/icons/EditIcon';
import useTodos from '@/hooks/useTodos';
import { ErrorMessage } from '@/components/ui/Auth/AuthView/LoginView/LoginView.css.ts';
import useAuthData from '@/utils/useAuthData.ts';
import CheckboxIcon from '@/components/icons/CheckboxIcon';

interface TodoListProps {
  filter?: 'All' | 'Completed' | 'Pending',
}

const TodoList: React.FunctionComponent<TodoListProps> = ({ filter }) => {
  const { state, dispatch } = useTodos();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newText, setNewText] = useState<string>('');
  const { localUser } = useAuthData();

  const currentUserId = Number(localUser?.id);

  const handleDelete = (id: number) => {
    dispatch({ type: TODO_ACTION_TYPE.DELETE_TODO, payload: { id } });
  };

  const handleEdit = (id: number, task: string) => {
    setEditingId(id);
    setNewText(task);
  };

  const handleSave = () => {
    if (newText.trim()) {
      dispatch({ type: TODO_ACTION_TYPE.UPDATE_TODO, payload: { id: editingId!, task: newText } });
      setEditingId(null);
      setNewText('');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setNewText('');
  };

  const handleTodoStatusChange = (id: number, currentStatus: boolean) => {
    dispatch({
      type: TODO_ACTION_TYPE.UPDATE_TODO_STATUS,
      payload: { id, status: !currentStatus },
    });
  };

  const filteredTodos = state.todos
    .filter((todo) => todo.userId === currentUserId)
    .filter((todo) => {
      if (filter === 'All') return true;
      if (filter === 'Completed') return todo.status;
      if (filter === 'Pending') return !todo.status;
      return true;
    }).reverse();

  return (
    <ul className={todoListContainer}>
      {filteredTodos.length === 0 && <p className={ErrorMessage}>No todos to show based on the filter.</p>}
      {filteredTodos.map((todo, index) => (
        <li key={todo.id} className={todoListItem}>
          {editingId === todo.id ? (
            <div className={todoEditDiv}>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className={todoEditTextbox}
              />
              <button onClick={handleSave} className={todoEditButton.primary}>
                Save
              </button>
              <button onClick={handleCancel} className={todoEditButton.danger}>
                Cancel
              </button>
            </div>
          ) : (
            <>
              <div className={todoTaskDiv}>
                <span>{index + 1}. </span>
                <span
                  className={todo.status ? todoTaskSpan.completed : todoTaskSpan.notCompleted}
                >
                  {todo.task}
                </span>
              </div>
              <div className={todoActionDiv}>
                <div onClick={() => handleTodoStatusChange(todo.id, todo.status)}>
                <CheckboxIcon status={todo.status} />
              </div>
              <p>{new Date(todo.ending_date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
              })}</p>
              <div className={todoEditDiv}>
                <button onClick={() => handleEdit(todo.id, todo.task)} className={todoEditButton.primary}>
                  <EditIcon />
                </button>
                <button onClick={() => handleDelete(todo.id)} className={todoEditButton.danger}>
                  <DeleteIcon />
                </button>
              </div>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
