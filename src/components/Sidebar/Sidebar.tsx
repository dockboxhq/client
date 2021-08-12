import "./Sidebar.css";
import React, { useState } from "react";
import { Rnd } from "react-rnd";
import TextField from "components/TextField/TextField";
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
      <TextField>Yes</TextField>
      <div style={{ background: "red" }}>Srihari</div>
    </Rnd>
  );
};

export default Sidebar;
