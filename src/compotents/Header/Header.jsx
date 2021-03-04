import React, { Component } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <NavLink to="/profile">
        <img src="https://www.pngarts.com/files/3/Logo-PNG-Download-Image.png" />
      </NavLink>
      <NavLink to="/profile" className={s.h1}>
        <h1>ENcounter</h1>
        <img src="./../maxresdefault.jpg" />
        {props.isAuth ? (
          <div>
            <NavLink to="/login" className={s.login_block}>
              Hello, {props.login}
              <button onClick={props.logOut}>Log out </button>
            </NavLink>
          </div>
        ) : (
          <NavLink to="/login" className={s.login_block}>
            Login
          </NavLink>
        )}
      </NavLink>
    </header>
  );
};

export default Header;
