import React from 'react';
import styled from 'styled-components';

import { FilterCondition } from 'services/models';

import Form, { FormProps } from './Form';
import TodoList, { TodoListProps } from './TodoList';

type TodoProps = TodoListProps &
  FormProps & {
    handleFilterTodos: (condition: FilterCondition) => void;
  };

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
        filter:
        <button type="button" onClick={() => handleFilterTodos('ALL')}>
          show all
        </button>
        <button type="button" onClick={() => handleFilterTodos('COMPLETED')}>
          completed
        </button>
        <button
          type="button"
          onClick={() => handleFilterTodos('NOT_COMPLETED')}
        >
          not completed
        </button>
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
