import { TextField, StyledText } from "components/Common/common";
import { Button, Spinner } from "reactstrap";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { selectDockboxLoading } from "store/dockbox/dockbox.reducer";
import { createDockbox } from "store/dockbox/dockbox.actions";
import { toast } from "react-toastify";

const CreateDockboxView = () => {
  const [url, setURL] = useState("");
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectDockboxLoading);

  const onChange = (e: any) => {
    setURL(e.target.value);
  };
  function isValidUrl(text: string): boolean {
    try {
      new URL(text);
    } catch (_) {
      return false;
    }

    return true;
  }
  const onClickCreate = () => {
    if (isLoading) return;
    if (!isValidUrl(url)) {
      toast.error("Invalid URL");
      return;
    }
    dispatch(createDockbox({ url }));
  };
  return (
    <>
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
    </>
  );
};

export default CreateDockboxView;
