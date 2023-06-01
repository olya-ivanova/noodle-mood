import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import noodleImage from "../assets/nav-images/noodle.png";
import "./styles.css";

const Layout = () => {
  return (
    <div className="main">
      <nav className="nav">
        <div className="logo">
          <img src={noodleImage} alt="Noodles" />
          <h2>Noodle</h2>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
        <div> Basket</div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
