import { combineReducers } from "@reduxjs/toolkit";
import { ConnectionState, connectionReducer } from "./connection/connection.reducer";
import { counterReducer, CounterState } from "./counter/counter.reducer";

export interface State {
  counter: CounterState;
  connection: ConnectionState;
}

export const rootReducer = combineReducers<State>({
  // always return a new object for the root state
  // the value of `state.todos` is whatever the todos reducer returns
  counter: counterReducer,
  connection: connectionReducer,
});
