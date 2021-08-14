import React, { useState } from "react";
import TextField from "components/TextField/TextField";
import { Button } from "reactstrap";
import styled from "styled-components";
import { toast } from "react-toastify";
const CopyUrl = ({ initialURL = "http://dockbox.ca/#srihari", style = {}, className = "" }) => {
  const [buttonText, setButtonText] = useState("Copy");
  const RoundedButton = styled(Button)`
    border-radius: 10px;
    outline: none;
    box-shadow: none;
    &:focus {
      box-shadow: none;
      outline: none;
    }
    &:active {
      box-shadow: none;
      outline: none;
    }
  `;

  const StyledURLShow = styled.div`
    background: white;
    border-radius: 10px;
    text-align: left;
    font-family: Montserrat Alternates;
    padding: 10px;
    max-width: 30rem;
    color: #505050;
  `;

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
      className={`d-flex justify-content-center ${className}`}>
      {/* <TextField className="me-2 flex-fill" onChange={onURLChange} type="url" value={initialURL} /> */}
      <StyledURLShow className="me-2 flex-fill">{initialURL}</StyledURLShow>
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
