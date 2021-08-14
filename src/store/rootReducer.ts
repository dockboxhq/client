import { combineReducers } from "@reduxjs/toolkit";
import { ConnectionState, connectionReducer } from "./connection/connection.reducer";
import { ModalState, modalReducer } from "./ui/modal.reducer";
import { DockboxState, dockboxReducer } from "./dockbox/dockbox.reducer";
export interface State {
  connection: ConnectionState;
  modalState: ModalState;
  dockbox: DockboxState;
}

export const rootReducer = combineReducers<State>({
  // always return a new object for the root state
  connection: connectionReducer,
  modalState: modalReducer,
  dockbox: dockboxReducer,
});
