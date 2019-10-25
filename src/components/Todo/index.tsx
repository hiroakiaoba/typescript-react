import React from 'react';
import styled from 'styled-components';

import { Todo } from 'services/models';
import Form, { FormProps } from './Form';
import TodoList from './TodoList';

type TodoProps = { todos: Todo[] } & FormProps;

const TodoComponent: React.FC<TodoProps> = ({
  todos,
  inputTitleProps,
  inputBodyProps,
  handleSubmit,
}) => {
  return (
    <>
      <Form {...{ inputTitleProps, inputBodyProps, handleSubmit }} />
      <TodoList todos={todos} />
    </>
  );
};

export default TodoComponent;
