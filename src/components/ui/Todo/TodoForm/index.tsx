import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { TODO_ACTION_TYPE } from '@/data/constant/TodoConstant';
import { createButton, todoForm, todoTextbox } from '@/components/ui/Todo/TodoForm/TodoForm.css.ts';
import CreateIcon from '@/components/icons/CreateIcon';
import useTodos from '@/hooks/useTodos';
import todoSchema, { TTodoFormSchema } from '@/data/schema/TodoSchema';
import useAuthData from '@/utils/useAuthData.ts';

const TodoForm: React.FunctionComponent = () => {
  const { dispatch } = useTodos();
  const { localUser } = useAuthData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TTodoFormSchema>({
    resolver: zodResolver(todoSchema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<TTodoFormSchema> = (data) => {
    dispatch({
      type: TODO_ACTION_TYPE.ADD_TODO,
      payload: {
        id: Date.now(),
        task: data.task,
        status: false,
        userId: Number(localUser?.id),
      },
    });
    reset();
  };

  return (<>
    <form onSubmit={handleSubmit(onSubmit)} className={todoForm}>
      <input
        type="text"
        {...register('task')}
        placeholder="Add a new todo (max 100 characters)"
        className={todoTextbox}
      />
      <button type="submit" className={createButton}>
        <CreateIcon />
      </button>
    </form>
  {errors.task && <p style={{ color: 'red' }}>{errors.task.message}</p>}
    </>
);
};

export default TodoForm;
