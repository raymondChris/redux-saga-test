import { valueActions, resultActions } from "../actions";
import { put } from "redux-saga/effects";

export function* incSaga(action) {
  const newValue = action.value + 1;
  yield put(valueActions.change(newValue));
  yield put(resultActions.addResult(newValue));
}

export function* addSaga(action) {
  const newValue = action.value + 7;
  yield put(valueActions.change(newValue));
  yield put(resultActions.addResult(newValue));
}

export function* minusSaga(action) {
  const newValue = action.value - 8;
  yield put(valueActions.change(newValue));
  yield put(resultActions.addResult(newValue));
}

export function* decrSaga(action) {
  const newValue = action.value - 1;
  yield put(valueActions.change(newValue));
  yield put(resultActions.addResult(newValue));
}
