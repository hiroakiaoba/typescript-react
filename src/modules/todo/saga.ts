import { fork, takeEvery } from 'redux-saga/effects';
import { actionTypes, todo } from './actions';

export function runAddTodo(action: ReturnType<typeof todo.add>) {
  console.log('add todo!');
  console.log('action: ', action);
}

export function* watchAddTodo() {
  yield takeEvery(actionTypes.ADD, runAddTodo);
}

export default function* rootSaga() {
  yield fork(watchAddTodo);
}
