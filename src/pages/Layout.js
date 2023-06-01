import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import noodleImage from "../assets/nav-images/noodle.png";
import "./styles.css";

const Layout = () => {
  return (
    <div className="main">
      <nav className="nav">
        <div>
          <NavLink className="logo" to="/">
            <img src={noodleImage} alt="Noodles" />
            <h2>Noodle</h2>
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/chefs">Our chefs</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
        <div> Basket</div>
      </nav>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        All rights reserved, {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
