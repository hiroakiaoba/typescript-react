import { RootState } from 'modules/reducer';
import { createSelector } from 'reselect';

export const todosSelector = (state: RootState) => state.todo.todos;

export const convertedTodosSelector = createSelector(
  todosSelector,
  todos =>
    todos.map(t => ({
      ...t,
      title: `${t.title}@title`,
      body: `${t.body}@body`,
    })),
);
