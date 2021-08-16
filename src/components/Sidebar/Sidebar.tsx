import "./Sidebar.scss";
import React, { useState } from "react";
import { Rnd } from "react-rnd";
import CopyUrl from "./CopyUrl/CopyUrl";
import { Divider } from "components/Common/common";
import FileTree from "components/FileTree/FileTree";

const Sidebar = ({ onResize }: { onResize?: (width: number) => void }) => {
  const [width, setWidth] = useState(350);

  const updateWidth = (newWidth: number) => {
    setWidth(newWidth);
    onResize && onResize(newWidth);
  };
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
      onResize={(e, dir, ref) => {
        onResize && onResize(ref.offsetWidth);
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        updateWidth(ref.offsetWidth);
      }}>
      <CopyUrl className="mt-3" />
      <Divider />
      <FileTree />
    </Rnd>
  );
};

export default Sidebar;
