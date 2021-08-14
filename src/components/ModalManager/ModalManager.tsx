import { useAppSelector, useAppDispatch } from "hooks/hooks";
import { useCallback } from "react";
import { ModalState, ModalType, selectModalState } from "store/ui/modal.reducer";
import { closeModal } from "store/ui/modal.actions";
import CreateDockbox from "./CreateDockbox/CreateDockbox";
const ModalManager = () => {
  const modalState = useAppSelector<ModalState>(selectModalState);
  const dispatch = useAppDispatch();

  const ModalComponent = useCallback(() => {
    const onClose = () => dispatch(closeModal());

    switch (modalState.modalType) {
      case ModalType.CREATE_DOCKBOX:
        return <CreateDockbox isOpen={modalState.isOpen} close={onClose} />;
      default:
        return null;
    }
  }, [modalState, dispatch]);

  return <ModalComponent />;
};

export default ModalManager;
