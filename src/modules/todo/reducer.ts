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
      completed: false,
    },
    {
      id: 2,
      title: 'sample2 todo title',
      body: 'sample2 todo body',
      completed: false,
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
        { id, completed: false },
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
    case actionTypes.TOGGLE_STATUS: {
      const { id } = action.payload.params;
      const newTodos = state.todos.map(todo => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });

      return { ...state, todos: newTodos };
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default reducer;
