import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from 'src/hooks/useInput';
import useValidation from 'src/hooks/useValidation';
import { todo } from 'modules/todo/actions';
import { convertedTodosSelector } from 'modules/todo/selectors';
import { required } from 'services/validation';

import Todo from 'components/Todo';

const TodoContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { reset: titleReset, ...titleProps } = useInput();
  const { reset: bodyReset, ...bodyProps } = useInput();
  const [titleErrorMessage, validateTitle] = useValidation(required);
  const [bodyErrorMessage, validateBody] = useValidation(required);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const isValidTitle = validateTitle(titleProps.value);
      const isValidBody = validateBody(bodyProps.value);
      if (isValidTitle && isValidBody) {
        dispatch(todo.add({ title: titleProps.value, body: bodyProps.value }));
        titleReset();
        bodyReset();
      }
    },
    [
      dispatch,
      titleProps.value,
      bodyProps.value,
      titleErrorMessage,
      bodyErrorMessage,
    ],
  );

  const todos = useSelector(convertedTodosSelector);

  return (
    <Todo
      todos={todos}
      inputTitleProps={{ attrs: titleProps, errorMessage: titleErrorMessage }}
      inputBodyProps={{ attrs: bodyProps, errorMessage: bodyErrorMessage }}
      handleSubmit={handleSubmit}
    />
  );
};

export default TodoContainer;
