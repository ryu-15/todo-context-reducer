import React, { useState } from "react";

import useTodos from '@/hooks/useTodosHook';
import { TODO_ACTION_TYPE } from '@/data/constant';
import {
  todoEditButton,
  todoEditDiv,
  todoEditTextbox,
  todoListItem,
  todoList,
  todoTaskDiv,
} from '@/components/ui/TodoList/TodoList.css.ts';
import DeleteIcon from '@/components/icons/DeleteIcon';

const TodoList: React.FunctionComponent = () => {
  const { state, dispatch } = useTodos();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newText, setNewText] = useState<string>("");

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
      setNewText("");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setNewText("");
  };

  return (
    <ul className={todoList}>
      {state.todos.map((todo, index) => (
        <li key={todo.id} className={todoListItem}>
          {editingId === todo.id ? (
            <div className={todoEditDiv}>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className={todoEditTextbox}
              />
              <button onClick={handleSave} className={todoEditButton}>
                Save
              </button>
              <button onClick={handleCancel} className={todoEditButton}>
                Cancel
              </button>
            </div>
          ) : (
            <>
              <div className={todoTaskDiv}>
                <span>{index + 1}. {todo.task}</span>
                <span>{todo.status ? "Done" : "Pending"}</span>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(todo.id, todo.task)}
                  className={todoEditButton}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className={todoEditButton}
                >
                  <DeleteIcon />
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
