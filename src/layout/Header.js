import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-sm navbar-dar bg-dark">
      <NavLink to="/" className="nav-brand">
        Brand
      </NavLink>
      <div className="collapse navbar-collapse" id="headerMenu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts" className="nav-link">
              {" "}
              Posts{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
