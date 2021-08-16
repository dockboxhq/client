import { Modal } from "reactstrap";
import "../Modal.scss";
import CreateDockboxView from "./CreateDockboxView";

const CreateDockboxModal = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
  return (
    <Modal isOpen={isOpen} toggle={close} centered modalClassName="modal-custom">
      <CreateDockboxView />
    </Modal>
  );
};

export default CreateDockboxModal;
