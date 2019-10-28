import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from 'src/hooks/useInput';
import useValidation from 'src/hooks/useValidation';
import { todo } from 'modules/todo/actions';
import { selectTodosWithCondition } from 'modules/todo/selectors';
import { required } from 'services/validation';
import { FilterCondition } from 'services/models';

import Todo from 'components/Todo';
import { RootState } from 'src/modules/reducer';

const TodoContainer: React.FC = () => {
  const { reset: titleReset, ...titleProps } = useInput();
  const { reset: bodyReset, ...bodyProps } = useInput();
  const [titleErrorMessage, validateTitle] = useValidation(required);
  const [bodyErrorMessage, validateBody] = useValidation(required);
  const [filterCondition, changeFilterCondition] = useState<FilterCondition>(
    'ALL',
  );

  const dispatch = useDispatch();

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

  const handleToggleStatus = useCallback((id: number) => {
    dispatch(todo.toggleStatus({ id }));
  }, []);

  const handleFilterTodos = useCallback((condition: FilterCondition) => {
    changeFilterCondition(condition);
  }, []);

  const todos = useSelector((state: RootState) =>
    selectTodosWithCondition(state, filterCondition),
  );

  return (
    <Todo
      todos={todos}
      inputTitleProps={{ attrs: titleProps, errorMessage: titleErrorMessage }}
      inputBodyProps={{ attrs: bodyProps, errorMessage: bodyErrorMessage }}
      handleSubmit={handleSubmit}
      handleToggleStatus={handleToggleStatus}
      handleFilterTodos={handleFilterTodos}
    />
  );
};

export default TodoContainer;
