import React, { useState } from "react";
import { StyledURLShow, RoundedButton } from "components/Common/common";
import "./CopyUrl.scss";

const CopyUrl = ({ initialURL = "http://dockbox.ca/#srihari", style = {}, className = "" }) => {
  const [buttonText, setButtonText] = useState("Copy");

  const onCopyClicked = () => {
    navigator.clipboard.writeText(initialURL);
    setButtonText("Copied!");
    setTimeout(() => {
      setButtonText("Copy");
    }, 2000);
  };
  return (
    <div
      style={{ padding: "1rem", ...style }}
      className={`d-flex justify-content-center ${className} copy-container`}>
      {/* <TextField className="me-2 flex-fill" onChange={onURLChange} type="url" value={initialURL} /> */}
      <StyledURLShow className="flex-fill">{initialURL}</StyledURLShow>
      <RoundedButton
        color="primary"
        style={{ fontFamily: "Montserrat Alternates" }}
        onClick={onCopyClicked}>
        {buttonText}
      </RoundedButton>
    </div>
  );
};

export default CopyUrl;
