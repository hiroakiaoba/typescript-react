import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from 'src/hooks/useInput';
import { todo } from 'modules/todo/actions';
import { getTodos } from 'modules/todo/selectors';

import Todo from 'components/Todo';

const TodoContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { reset: titleReset, ...inputTitleProps } = useInput();
  const { reset: bodyReset, ...inputBodyProps } = useInput();

  const handleSubmit = useCallback(
    (title: string, body: string) => {
      dispatch(todo.add({ title, body }));
      titleReset();
      bodyReset();
    },
    [dispatch],
  );

  const todos = useSelector(getTodos);

  return (
    <Todo
      todos={todos}
      inputTitleProps={inputTitleProps}
      inputBodyProps={inputBodyProps}
      handleSubmit={handleSubmit}
    />
  );
};

export default TodoContainer;
