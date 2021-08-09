import { createContext } from "react";
import { toast } from "react-toastify";
import { store } from "store";
import { ConnectionActions } from "store/actions";

const WS_URL = "ws://localhost:8000/v1/ws/4048d9d69a17";
const websocket = new WebSocket(WS_URL);
websocket.addEventListener("open", () => {
  console.log("Connected!");
  store.dispatch({ type: ConnectionActions.CONNECTED });
  toast.success("Connected to environment!");
  websocket.send("\r");
});
websocket.addEventListener("close", () => {
  console.log("Lost connection");
  store.dispatch({ type: ConnectionActions.DISCONNECTED });
  toast.error("Connection lost");
});
websocket.addEventListener("connecting", () => {
  console.log("Connecting...");
  store.dispatch({ type: ConnectionActions.CONNECTING });
});
websocket.addEventListener("error", () => {
  console.log("Error occurred");
  store.dispatch({ type: ConnectionActions.ERROR_OCCURRED });
  toast.error(`A connection error occurred`);
});

export default websocket;
