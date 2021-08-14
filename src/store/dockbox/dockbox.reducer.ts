import { createAction, createReducer } from "@reduxjs/toolkit";
import { RootState } from "..";
import { DockboxActions } from "store/dockbox/dockbox.actions";

import { ResourceStatus } from "store/common/common";

export interface DockboxState {
  message: string;
  isLoading: boolean;
}
const initialState: DockboxState = {
  message: "",
  isLoading: false,
};

const create = createAction(DockboxActions.CREATE);
const createSuccess = createAction<string>(DockboxActions.CREATE_SUCCESS);
const createError = createAction<string>(DockboxActions.CREATE_ERROR);

export const dockboxReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(create, (state) => {
      state.message = "";
      state.isLoading = true;
    })
    .addCase(createSuccess, (state, { payload }) => {
      state.message = payload;
      state.isLoading = false;
    })
    .addCase(createError, (state, { payload }) => {
      state.message = payload;
      state.isLoading = false;
    })
    .addDefaultCase((state) => {
      state.message = ResourceStatus.NONE;
      state.isLoading = false;
    });
});

export const selectDockboxCreateState = (state: RootState) => state.dockbox.status;
export const selectDockboxLoading = (state: RootState) => state.dockbox.isLoading;
