import { fork } from 'redux-saga/effects';

import todo from './todo/sagas';

export default function* rootSaga() {
  yield fork(todo);
}
