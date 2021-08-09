export {};

export enum CounterActions {
  INCREMENT = "counter/increment",
  DECREMENT = "counter/decrement",
  INCREMENT_IF_ODD = "counter/increment_odd",
}

export enum ConnectionActions {
  START_CONNECTION = "connection/connected",
  CONNECTED = "connection/connected",
  CLOSE_CONNECTION = "connection/connected",
  CONNECTING = "connection/connecting",
  DISCONNECTING = "connection/disconnecting",
  DISCONNECTED = "connection/disconnected",
  ERROR_OCCURRED = "connection/error",
}
