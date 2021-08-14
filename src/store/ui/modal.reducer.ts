import { createAction, createReducer } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ModalActions } from "./modal.actions";

export enum ModalType {
  CREATE_DOCKBOX = 1,
}

export type ModalState = {
  isOpen: boolean;
  modalType: ModalType;
};
const initialState: ModalState = {
  isOpen: false,
  modalType: ModalType.CREATE_DOCKBOX,
};

const openModal = createAction<ModalType>(ModalActions.OPEN);
const closeModal = createAction(ModalActions.CLOSE);

export const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openModal, (state, action) => {
      state.isOpen = true;
      state.modalType = action.payload;
    })
    .addCase(closeModal, (state, action) => {
      state.isOpen = false;
    })
    .addDefaultCase((state, action) => {});
});

export const selectModalState = (state: RootState) => state.modalState;
