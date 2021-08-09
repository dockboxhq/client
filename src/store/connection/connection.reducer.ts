import { createAction, createReducer } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ConnectionActions } from "store/actions";

enum ConnectionEnum {
  CONNECTED,
  CONNECTING,
  DISCONNECTING,
  DISCONNECTED,
  ERROR,
}
export interface ConnectionState {
  status: ConnectionEnum;
}
const initialState: ConnectionState = {
  status: ConnectionEnum.DISCONNECTED,
};

const connected = createAction(ConnectionActions.CONNECTED);
const disconnected = createAction(ConnectionActions.DISCONNECTED);
const connecting = createAction(ConnectionActions.CONNECTING);
const error = createAction(ConnectionActions.ERROR_OCCURRED);

export const connectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(connected, (state) => {
      state.status = ConnectionEnum.CONNECTED;
    })
    .addCase(disconnected, (state) => {
      state.status = ConnectionEnum.DISCONNECTED;
    })
    .addCase(connecting, (state) => {
      state.status = ConnectionEnum.CONNECTING;
    })
    .addCase(error, (state) => {
      state.status = ConnectionEnum.ERROR;
    })

    .addDefaultCase((state) => {});
});

export const selectConnectionStatus = (state: RootState) => state.connection.status;
