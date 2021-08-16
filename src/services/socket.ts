import * as actions from "store/connection/connection.actions";
import { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { ConnectionActions } from "store/connection/connection.actions";
import { toast } from "react-toastify";
import { RootState } from "store";

export let websocket: WebSocket | null = null;

let host: string | null = null;

const onOpen = (store: MiddlewareAPI<RootState>) => (event: Event) => {
  store.dispatch(actions.wsConnected(host ? host : "Host not found"));
  websocket?.send("\r");
  if (websocket != null) {
    toast.success("Connected to environment!");
  }
};

const onClose = (store: MiddlewareAPI<RootState>) => (event: CloseEvent) => {
  store.dispatch(actions.wsDisconnected(host ? host : "Host not found"));
  if (!event.wasClean || event.code !== 1000) toast.error("Connection lost");
};

const onError = (store: MiddlewareAPI<RootState>) => (event: Event) => {
  store.dispatch(actions.wsError(event.type));
  toast.error(`A connection error occurred`);
};

export const socketMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (api) => (next) => (action) => {
  switch (action.type) {
    case ConnectionActions.CONNECT:
      if (websocket !== null) {
        if (action.payload.host === host) break;
        websocket.close(1000);
        host = null;
      }
      host = action.payload.host;
      api.dispatch(actions.wsConnecting());
      websocket = new WebSocket(host ? host : "Host not found");
      websocket.onopen = onOpen(api);
      websocket.onclose = onClose(api);
      websocket.onopen = onOpen(api);
      websocket.onerror = onError(api);
      break;
    case ConnectionActions.DISCONNECT:
      if (websocket !== null) {
        api.dispatch(actions.wsDisconnecting());
        websocket.close(1000);
      }
      host = null;
      websocket = null;
      break;
    default:
      return next(action);
  }
};
