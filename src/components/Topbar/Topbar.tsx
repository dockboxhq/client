import React, { useState } from "react";
import { Button, Navbar, NavbarBrand } from "reactstrap";
import logo from "assets/img/brand.svg";
import "./Topbar.scss";
import { useAppDispatch } from "hooks/hooks";
import { openModal } from "store/ui/modal.actions";
import { ModalType } from "store/ui/modal.reducer";
const Topbar = ({ onCreate = () => {} }) => {
  const dispatch = useAppDispatch();
  const onCreateClicked = () => {
    dispatch(openModal(ModalType.CREATE_DOCKBOX));
  };
  return (
    <div>
      <Navbar dark className="navbar" style={{ background: "#436BDF", zIndex: 2, height: "60px" }}>
        <NavbarBrand href="/">
          <img src={logo} className="logo" alt="logo" />
          <span className="logo-text">dockbox</span>
        </NavbarBrand>
        <Button
          color="green"
          outline={false}
          className="mb-2 me-3"
          style={{ color: "white" }}
          onClick={onCreateClicked}>
          Create
        </Button>
      </Navbar>
    </div>
    // <nav style={{ background: "#436BDF", zIndex: 2, height: "60px" }}>
    //   <a className="navlink" href="http://github.com/dockboxhq/client">
    //     srihari
    //   </a>
    // </nav>
  );
};

export default Topbar;
