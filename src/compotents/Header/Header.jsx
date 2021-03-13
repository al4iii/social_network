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
        <h1>IT</h1>
        {/* <img src={logoforest} /> */}
        </NavLink>
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
          <div className={styles.login_block}>
            <NavLink to="/login" >
            Sign in            
          </NavLink>
            <div><a href="https://social-network.samuraijs.com/signUp" target="_blank" rel="noopener noreferrer">Sign up</a>  </div>
          </div>
          
          
        )}
      
    </header>
  );
};

export default Header;
