import React from 'react';
import styled from 'styled-components';

import { Todo } from 'services/models';

const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => (
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

export default TodoList;
