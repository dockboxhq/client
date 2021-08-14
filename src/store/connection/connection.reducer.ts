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
  host: string | null;
}
const initialState: ConnectionState = {
  status: ConnectionEnum.DISCONNECTED,
  host: null,
};

interface ConnectedPayload {
  host: string;
}

const connecting = createAction(ConnectionActions.CONNECTING);
const connected = createAction<ConnectedPayload>(ConnectionActions.CONNECTED);
const disconnecting = createAction(ConnectionActions.DISCONNECTING);
const disconnected = createAction(ConnectionActions.DISCONNECTED);
const error = createAction(ConnectionActions.ERROR_OCCURRED);

export const connectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(connecting, (state) => {
      state.status = ConnectionEnum.CONNECTING;
    })
    .addCase(connected, (state, { payload }) => {
      state.status = ConnectionEnum.CONNECTED;
      state.host = payload.host;
    })
    .addCase(disconnecting, (state) => {
      state.status = ConnectionEnum.DISCONNECTING;
    })
    .addCase(disconnected, (state) => {
      state.status = ConnectionEnum.DISCONNECTED;
      state.host = "";
    })
    .addCase(error, (state) => {
      state.status = ConnectionEnum.ERROR;
      state.host = "";
    })

    .addDefaultCase((state) => {});
});

export const selectConnectionStatus = (state: RootState) => state.connection.status;
export const selectConnectionHost = (state: RootState) => state.connection.host;
