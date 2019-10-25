import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from 'src/hooks/useInput';
import { todo } from 'modules/todo/actions';
import { getTodos } from 'modules/todo/selectors';

import Todo from 'components/Todo';

const TodoContainer: React.FC = () => {
  const dispatch = useDispatch();
  const inputTitleProps = useInput();
  const inputBodyProps = useInput();

  const handleSubmit = useCallback(() => {
    dispatch(
      todo.add({
        title: inputTitleProps.value,
        body: inputBodyProps.value,
      }),
    );
  }, [inputTitleProps.value, inputBodyProps.value]);

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
