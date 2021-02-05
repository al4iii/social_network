import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/messeges" activeClassName={s.activeLink}>Messeges</NavLink>
      </div>  
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={`${s.item} ${s.setting}`}>
        <NavLink to="/setting" activeClassName={s.activeLink}>Setting</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
