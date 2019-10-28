import { CreatorsToActions } from 'src/utils';
import { Todo } from 'services/models';

/* actionTypes */
export const actionTypes = {
  ADD: 'TODO/ADD',
  DELETE: 'TODO/DELETE',
  TOGGLE_STATUS: 'TODO/TOGGLE_STATUS',
} as const;

/* actionCreators */
export const todo = {
  add: (params: Omit<Todo, 'id' | 'completed'>) => ({
    type: actionTypes.ADD,
    payload: { params },
  }),
  delete: (params: { id: number }) => ({
    type: actionTypes.DELETE,
    payload: { params },
  }),
  toggleStatus: (params: { id: number }) => ({
    type: actionTypes.TOGGLE_STATUS,
    payload: { params },
  }),
};

export type TodoAction = CreatorsToActions<typeof todo>;
