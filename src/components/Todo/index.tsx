import React from 'react';
import styled from 'styled-components';

import Form, { FormProps } from './Form';
import FilterButtons, { FilterButtonsProps } from './FilterButtons';
import TodoList, { TodoListProps } from './TodoList';

type TodoProps = TodoListProps & FormProps & FilterButtonsProps;

const TodoComponent: React.FC<TodoProps> = ({
  todos,
  handleToggleStatus,
  inputTitleProps,
  inputBodyProps,
  handleSubmit,
  handleFilterTodos,
}) => {
  return (
    <>
      <Section>
        <Form {...{ inputTitleProps, inputBodyProps, handleSubmit }} />
      </Section>
      <Section>
        <FilterButtons {...{ handleFilterTodos }} />
      </Section>
      <Section>
        <TodoList {...{ todos, handleToggleStatus }} />
      </Section>
    </>
  );
};

const Section = styled.div`
  margin: 14px 0;
`;

export default TodoComponent;
