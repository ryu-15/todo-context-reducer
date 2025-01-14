import React, { PropsWithChildren, useEffect, useReducer } from 'react';

import { ITodo, TodoAction, ITodoState } from '@/data/model';
import { TodoContext } from '@/context/TodoContext';
import { STORAGE_TYPE, TODO_ACTION_TYPE } from '@/data/constant';

const TodoProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const getInitialTodos = (storageType: STORAGE_TYPE): ITodo[] => {
    const storage = storageType === STORAGE_TYPE.LOCAL ? localStorage : sessionStorage;
    return JSON.parse(storage.getItem('todos') || '[]');
  };

  const initialState: ITodoState = {
    todos: getInitialTodos(STORAGE_TYPE.LOCAL),
    storageType: STORAGE_TYPE.LOCAL,
  };

  const todoReducer = (state: ITodoState, action: TodoAction): ITodoState => {
    switch (action.type) {
      case TODO_ACTION_TYPE.ADD_TODO: {
        const newTodo: ITodo = {
          id: action.payload.id,
          task: action.payload.task,
          status: action.payload.status,
        };
        return {
          ...state,
          todos: [...state.todos, newTodo],
        };
      }
      case TODO_ACTION_TYPE.DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload.id),
        };

      case TODO_ACTION_TYPE.UPDATE_TODO:
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? { ...todo, task: action.payload.task } : todo,
          ),
        };

      case TODO_ACTION_TYPE.SET_STORAGE_TYPE:
        return {
          ...state,
          storageType: action.payload.storageType,
          todos: getInitialTodos(action.payload.storageType),
        };

      case TODO_ACTION_TYPE.RESET_TODOS:
        return {
          ...state,
          todos: []
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    const storage =
      state.storageType === STORAGE_TYPE.LOCAL ? localStorage : sessionStorage;
    storage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos, state.storageType]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider };
