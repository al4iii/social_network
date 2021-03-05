import React, { Component } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <NavLink to="/profile">
        <img src="https://www.pngarts.com/files/3/Logo-PNG-Download-Image.png" />
      </NavLink>
      <NavLink to="/profile" className={styles.h1}>
        <h1>ENcounter</h1>
        <img src="./../maxresdefault.jpg" />
        {props.isAuth ? (
          <div className={styles.login}>
            <NavLink to="/login" className={styles.login_block}>
              Hello, {props.login}              
            </NavLink>
            <button className={styles.button} onClick={props.logOut}>Log out </button>
          </div>
        ) : (
          <NavLink to="/login" className={styles.login_block}>
            Login
          </NavLink>
        )}
      </NavLink>
    </header>
  );
};

export default Header;
