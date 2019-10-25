import { RootState } from 'modules/reducer';

export const getTodos = (state: RootState) => state.todo.todos;
