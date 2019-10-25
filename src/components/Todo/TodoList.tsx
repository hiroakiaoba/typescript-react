import React from 'react';
import styled from 'styled-components';
import equal from 'fast-deep-equal';

import { Todo } from 'services/models';

const TodoList: React.FC<{ todos: Todo[] }> = React.memo(
  ({ todos }) => {
    console.log('todo list rendering!!');

    return (
      <>
        <h3>todo list</h3>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.title}/{todo.body}
            </li>
          ))}
        </ul>
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

export default TodoList;
