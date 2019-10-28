import { RootState } from 'modules/reducer';
import { createSelector } from 'reselect';
import { FilterCondition, Todo } from 'services/models';

const todosSelector = (state: RootState) => state.todo.todos;
const conditionSelector = (
  state: RootState,
  filterCondition: FilterCondition,
) => filterCondition;

export const selectTodosWithCondition = createSelector(
  todosSelector,
  conditionSelector,
  (todos: Todo[], filterCondition: FilterCondition) => {
    switch (filterCondition) {
      case 'ALL':
        return todos;
      case 'COMPLETED':
        return todos.filter(todo => todo.completed === true);
      case 'NOT_COMPLETED':
        return todos.filter(todo => todo.completed === false);
      default:
        return todos;
    }
  },
);
