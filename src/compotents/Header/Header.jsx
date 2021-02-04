import React, { Component } from "react";
import s from "./Header.module.css";


const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://www.pngarts.com/files/3/Logo-PNG-Download-Image.png" />
      <h1 className={s.h1}>MyNetwork</h1>
    </header>
  );
};

export default Header;
