import * as actionTypes from "../actionTypes";
import { incSaga, addSaga, minusSaga, decrSaga } from "./valueSaga";
import { takeEvery } from "redux-saga/effects";

export function* watchValue() {
  yield takeEvery(actionTypes.INC_VALUE_INIT, incSaga);
  yield takeEvery(actionTypes.ADD_VALUE_INIT, addSaga);
  yield takeEvery(actionTypes.MINUS_VALUE_INIT, minusSaga);
  yield takeEvery(actionTypes.DECR_VALUE_INIT, decrSaga);
}
