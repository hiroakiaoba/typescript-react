import { combineReducers } from 'redux';

import todo, { TodoState } from './todo/reducer';

export interface RootState {
  todo: TodoState;
}

export default combineReducers<RootState>({
  todo,
});
