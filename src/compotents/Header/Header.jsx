import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "./../../img/Logo.png";
import logoforest from "./../../img/maxresdefault.jpg";

const Header = ({ isAuth, login, logOut }) => {
  return (
    <header className={styles.header}>
      <NavLink to="/profile">
        <img src={logo} />
      </NavLink>
      <NavLink to="/profile" className={styles.h1}>
        <h1>ENcounter</h1>
        <img src={logoforest} />
        {isAuth ? (
          <div className={styles.login}>
            <NavLink to="/login" className={styles.login_block}>
              Hello, {login}
            </NavLink>
            <button className={styles.button} onClick={logOut}>
              Log out
            </button>
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
