import { ModalType } from "./modal.reducer";

export enum ModalActions {
  OPEN = "modal/open",
  CLOSE = "modal/close",
}

export const openModal = (payload: ModalType) => ({
  type: ModalActions.OPEN,
  payload,
});

export const closeModal = () => ({
  type: ModalActions.CLOSE,
});
