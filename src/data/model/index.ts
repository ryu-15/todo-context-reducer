import React from 'react';

import { STORAGE_TYPE, TODO_ACTION_TYPE } from '@/data/constant';

type TodoAction =
  | { type: TODO_ACTION_TYPE.ADD_TODO; payload: { id: number; task: string ; status: boolean } }
  | { type: TODO_ACTION_TYPE.DELETE_TODO; payload: { id: number } }
  | { type: TODO_ACTION_TYPE.UPDATE_TODO; payload: { id: number; task: string } }
  | { type: TODO_ACTION_TYPE.SET_STORAGE_TYPE; payload: { storageType: STORAGE_TYPE } }
  | { type: TODO_ACTION_TYPE.RESET_TODOS; };


interface ITodo {
  id: number;
  task: string;
  status: boolean;
}

interface ITodoState {
  todos: ITodo[];
  storageType: STORAGE_TYPE;
}

interface ITodoContextType {
  state: ITodoState;
  dispatch: React.Dispatch<TodoAction>;
}

export type { ITodo, ITodoState, ITodoContextType,  TodoAction };