import { PayloadAction } from "@reduxjs/toolkit";
import { createDockboxAPI } from "api/dockboxAPI";
import { toast } from "react-toastify";
import { put, all, takeLatest, call } from "redux-saga/effects";

import { ResponseGenerator } from "store/common/common";
import { wsConnect } from "store/connection/connection.actions";
import {
  DockboxActions,
  createDockboxError,
  createDockboxSuccess,
} from "store/dockbox/dockbox.actions";
import { closeModal } from "store/ui/modal.actions";
import { getResponseError } from "utils/errors";

function* createDockboxSaga(action: PayloadAction<any>) {
  try {
    const responseData: ResponseGenerator = yield call(createDockboxAPI, action.payload);
    yield put(createDockboxSuccess(responseData.data.message));
    toast.success(responseData.data.message);
    yield put(closeModal());
    const host = `ws://localhost:8000/v1/ws/${responseData.data.id}`;

    yield put(wsConnect(host));
  } catch (err) {
    console.log(err);
    toast.error(getResponseError(err));
    yield put(createDockboxError(getResponseError(err)));
    return;
  }
}

function* watchDockboxCreate() {
  yield takeLatest(DockboxActions.CREATE, createDockboxSaga);
}

export default function* dockboxSagas() {
  yield all([watchDockboxCreate()]);
}
