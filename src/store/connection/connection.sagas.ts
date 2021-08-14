import { put, takeEvery, all, select, takeLatest, call } from "redux-saga/effects";
import { ConnectionActions } from "store/connection/connection.actions";
function* connectSaga() {
  yield console.log("Saga dispatched");
}

export function* watchConnection() {
  yield takeLatest(ConnectionActions.CONNECT, connectSaga);
}
