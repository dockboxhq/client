import { put, takeEvery, all, select } from "redux-saga/effects";
import { ConnectionActions } from "store/actions";
function* connectSaga() {}

function* watchConnection() {
  yield takeEvery(ConnectionActions.START_CONNECTION, connectSaga);
}

export default function* rootSaga() {
  yield all([watchConnection()]);
}
