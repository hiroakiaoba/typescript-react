import { Reducer } from 'redux';
import { Todo } from 'services/models';
import { TodoAction, actionTypes } from './actions';

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      title: 'sample todo title',
      body: 'sample todo body',
      status: 'NEW',
    },
    {
      id: 2,
      title: 'sample2 todo title',
      body: 'sample2 todo body',
      status: 'NEW',
    },
  ],
};

const reducer: Reducer<TodoState, TodoAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actionTypes.ADD: {
      const { length } = state.todos;
      const id = length > 0 ? state.todos[length - 1].id + 1 : 1;
      const newTodo: Todo = Object.assign(
        {},
        { id, status: 'NEW' } as const,
        action.payload.params,
      );

      return { ...state, todos: state.todos.concat(newTodo) };
    }
    case actionTypes.DELETE: {
      const newTodos: Todo[] = state.todos.filter(
        todo => todo.id !== action.payload.params.id,
      );

      return { ...state, todos: newTodos };
    }
    case actionTypes.TOGGLE_STATUS:
      return { ...state };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
