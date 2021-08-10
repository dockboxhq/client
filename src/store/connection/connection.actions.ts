export enum ConnectionActions {
  CONNECT = "connection/connect",
  CONNECTING = "connection/connecting",
  CONNECTED = "connection/connected",
  DISCONNECT = "connection/disconnect",
  DISCONNECTING = "connection/disconnecting",
  DISCONNECTED = "connection/disconnected",
  ERROR_OCCURRED = "connection/error",
}

export const wsConnect = (host: string) => ({
  type: ConnectionActions.CONNECT,
  payload: { host },
});
export const wsConnecting = () => ({
  type: ConnectionActions.CONNECTING,
});
export const wsConnected = (host: string) => ({
  type: ConnectionActions.CONNECTED,
  payload: { host },
});
export const wsDisconnect = (host: string) => ({
  type: ConnectionActions.DISCONNECT,
  payload: { host },
});
export const wsDisconnecting = () => ({
  type: ConnectionActions.DISCONNECTING,
});
export const wsDisconnected = (host: string) => ({
  type: ConnectionActions.DISCONNECTED,
  payload: { host },
});
export const wsError = (error: string) => ({
  type: ConnectionActions.ERROR_OCCURRED,
  payload: { error },
});
