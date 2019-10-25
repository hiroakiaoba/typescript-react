import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput, { InputProps } from 'src/hooks/useInput';
import useValidation from 'src/hooks/useValidation';
import { todo } from 'modules/todo/actions';
import { getTodos } from 'modules/todo/selectors';
import { required } from 'services/validation';

import Todo from 'components/Todo';

const TodoContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { reset: titleReset, ...titleProps } = useInput();
  const { reset: bodyReset, ...inputBodyProps } = useInput();
  const { errorMessage: titleError, validate: validateTitle } = useValidation(
    required,
  );

  const inputTitleProps = {
    attrs: titleProps,
    errorMessage: titleError,
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      validateTitle(titleProps.value);
      if (titleError) {
        dispatch(
          todo.add({ title: titleProps.value, body: inputBodyProps.value }),
        );
        titleReset();
        bodyReset();
      }
    },
    [dispatch, titleProps.value, inputBodyProps.value, titleError],
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
