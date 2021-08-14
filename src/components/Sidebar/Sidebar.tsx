import "./Sidebar.scss";
import React, { useState } from "react";
import { Rnd } from "react-rnd";
import CopyUrl from "./CopyUrl/CopyUrl";
import styled from "styled-components";
import FileTree from "components/FileTree/FileTree";
const Divider = styled.div`
  height: 2px;
  width: 65%;
  margin: auto;
  margin-top: 1rem;
  background: gray;
`;
const Sidebar = () => {
  const [width, setWidth] = useState(350);
  return (
    <Rnd
      className="sidebar"
      style={{ background: "#383838" }}
      disableDragging
      enableResizing={{ right: true }}
      size={{
        width,
        height: "100%",
      }}
      minWidth={"25%"}
      maxWidth={"50%"}
      minHeight={"100%"}
      maxHeight={"100%"}
      onResizeStop={(e, direction, ref, delta, position) => {
        setWidth(ref.offsetWidth);
      }}>
      <CopyUrl className="mt-3" />
      <Divider />
      <FileTree />
    </Rnd>
  );
};

export default Sidebar;
