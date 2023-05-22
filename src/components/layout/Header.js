import React from "react";
import "../../sass/Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__left__active" : "header__left__not"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "header__left__active" : "header__left__not"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive ? "header__left__active" : "header__left__not"
          }
        >
          Service
        </NavLink>
        <NavLink
          to="/discovery"
          className={({ isActive }) =>
            isActive ? "header__left__active" : "header__left__not"
          }
        >
          Discovery
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "header__left__active" : "header__left__not"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="header__right">
        <div>Register</div>
        <div>Login</div>
      </div>
    </header>
  );
};

export default Header;
