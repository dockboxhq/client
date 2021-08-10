import { put, takeEvery, all, select } from "redux-saga/effects";
import { ConnectionActions } from "store/connection/connection.actions";
function* connectSaga() {
  yield console.log("Saga dispatched");
}

function* watchConnection() {
  yield takeEvery(ConnectionActions.CONNECT, connectSaga);
}

export default function* rootSaga() {
  yield all([watchConnection()]);
}
