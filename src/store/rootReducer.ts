import { combineReducers } from "@reduxjs/toolkit";
import { ConnectionState, connectionReducer } from "./connection/connection.reducer";
import { ModalState, modalReducer } from "./ui/modal.reducer";
import { DockboxState, dockboxReducer } from "./dockbox/dockbox.reducer";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";

export interface State {
  router: RouterState;
  connection: ConnectionState;
  modalState: ModalState;
  dockbox: DockboxState;
}

export const createRootReducer = (history: History) =>
  combineReducers<State>({
    router: connectRouter(history),
    connection: connectionReducer,
    modalState: modalReducer,
    dockbox: dockboxReducer,
  });
