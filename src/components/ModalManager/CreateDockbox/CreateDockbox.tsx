import { TextField, StyledText } from "components/Common/common";
import { Modal, Button, Spinner } from "reactstrap";
import styled from "styled-components";
import { useState } from "react";
import { toast } from "react-toastify";
import "../Modal.scss";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { createDockbox } from "store/dockbox/dockbox.actions";
import { selectDockboxLoading } from "store/dockbox/dockbox.reducer";

const CreateDockboxModal = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
  const [url, setURL] = useState("");
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectDockboxLoading);

  function isValidUrl(text: string): boolean {
    try {
      new URL(text);
    } catch (_) {
      return false;
    }

    return true;
  }
  const onChange = (e: any) => {
    setURL(e.target.value);
  };
  const onClickCreate = () => {
    if (isLoading) return;
    if (!isValidUrl(url)) {
      toast.error("Invalid URL");
      return;
    }
    dispatch(createDockbox({ url }));
  };
  return (
    <Modal isOpen={isOpen} toggle={close} centered modalClassName="modal-custom">
      <StyledText className="mt-2 p-1">Create dockbox</StyledText>
      <div className="d-flex flex-row p-2 m-3">
        <TextField
          disabled={isLoading}
          className="flex-fill me-2"
          placeholder="https://github.com/dockboxhq"
          type="url"
          value={url}
          onChange={onChange}
        />

        <Button color={isLoading ? "secondary" : "primary"} onClick={onClickCreate}>
          {isLoading ? (
            <Spinner size="sm" color="primary" className="me-2">
              {null}
            </Spinner>
          ) : null}
          <span style={{ color: "white", fontFamily: "Montserrat Alternates" }}>
            {isLoading ? "Creating..." : "Create"}
          </span>
        </Button>
      </div>
    </Modal>
  );
};

export default CreateDockboxModal;
