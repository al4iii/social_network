import React, { Component } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to="/profile">
        <img src="https://www.pngarts.com/files/3/Logo-PNG-Download-Image.png" />
      </NavLink>
      <NavLink to="/profile" className={s.h1}>
        <h1>ENcounter</h1>
      </NavLink>
    </header>
  );
};

export default Header;
