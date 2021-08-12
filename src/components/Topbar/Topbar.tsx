import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import logo from "assets/brand.svg";
import "./Topbar.css";
const Topbar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark className="navbar" style={{ background: "#436BDF", zIndex: 2, height: "60px" }}>
        <NavbarBrand href="/">
          <img src={logo} className="logo" alt="logo" />
          <span className="logo-text">dockbox</span>
        </NavbarBrand>
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
