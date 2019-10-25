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
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(
        todo.add({ title: inputTitleProps.value, body: inputBodyProps.value }),
      );
      titleReset();
      bodyReset();
    },
    [dispatch, inputTitleProps.value, inputBodyProps.value],
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
