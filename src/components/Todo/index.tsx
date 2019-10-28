import React from 'react';

import Form, { FormProps } from './Form';
import TodoList, { TodoListProps } from './TodoList';

type TodoProps = TodoListProps & FormProps;

const TodoComponent: React.FC<TodoProps> = ({
  todos,
  handleToggleStatus,
  inputTitleProps,
  inputBodyProps,
  handleSubmit,
}) => {
  return (
    <>
      <Form {...{ inputTitleProps, inputBodyProps, handleSubmit }} />
      <TodoList todos={todos} handleToggleStatus={handleToggleStatus} />
    </>
  );
};

export default TodoComponent;
