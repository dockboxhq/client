import { createAction, createReducer } from "@reduxjs/toolkit";
import { RootState } from "..";
import { CounterActions } from "store/actions";

// Define a type for the slice state
export interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

const increment = createAction<number>(CounterActions.increment);
const decrement = createAction<number>(CounterActions.decrement);
const increment_odd = createAction<number>(CounterActions.increment_if_odd);

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value += action.payload;
    })
    .addCase(decrement, (state, action) => {
      state.value -= action.payload;
    })
    .addCase(increment_odd, (state, action) => {
      state.value += state.value % 2 ? action.payload : 0;
    })
    .addDefaultCase((state, action) => {});
});

export const selectCount = (state: RootState) => state.counter.value;
