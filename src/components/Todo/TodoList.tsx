import React from 'react';
import styled from 'styled-components';
import equal from 'fast-deep-equal';

import { Todo } from 'services/models';

export interface TodoListProps {
  todos: Todo[];
  handleToggleStatus: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = React.memo(
  ({ todos, handleToggleStatus }) => {
    console.log('todo list rendering!!');

    return (
      <>
        <h3>todo list</h3>
        <Ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <Item completed={todo.completed}>
                {todo.title}/{todo.body}
              </Item>
              <button type="button" onClick={() => handleToggleStatus(todo.id)}>
                toggle status
              </button>
            </li>
          ))}
        </Ul>
      </>
    );
  },
  (prevProps, nextProps) => {
    if (equal(prevProps, nextProps)) {
      return true;
    }

    return false;
  },
);

const Ul = styled.ul`
  list-style: none;
`;
const Item = styled.span<{ completed: boolean }>`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

export default TodoList;
