import { createAction, createReducer } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ConnectionActions } from "store/connection/connection.actions";

export enum ConnectionEnum {
  CONNECTED = "Connected",
  CONNECTING = "Connecting",
  DISCONNECTING = "Disconnecting",
  DISCONNECTED = "Disconnected",
  ERROR = "Error",
}
export interface ConnectionState {
  status: ConnectionEnum;
}
const initialState: ConnectionState = {
  status: ConnectionEnum.DISCONNECTED,
};

const connecting = createAction(ConnectionActions.CONNECTING);
const connected = createAction(ConnectionActions.CONNECTED);
const disconnecting = createAction(ConnectionActions.DISCONNECTING);
const disconnected = createAction(ConnectionActions.DISCONNECTED);
const error = createAction(ConnectionActions.ERROR_OCCURRED);

export const connectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(connecting, (state) => {
      state.status = ConnectionEnum.CONNECTING;
    })
    .addCase(connected, (state) => {
      state.status = ConnectionEnum.CONNECTED;
    })
    .addCase(disconnecting, (state) => {
      state.status = ConnectionEnum.DISCONNECTING;
    })
    .addCase(disconnected, (state) => {
      state.status = ConnectionEnum.DISCONNECTED;
    })
    .addCase(error, (state) => {
      state.status = ConnectionEnum.ERROR;
    })

    .addDefaultCase((state) => {});
});

export const selectConnectionStatus = (state: RootState) => state.connection.status;
