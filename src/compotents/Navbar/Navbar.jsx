import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Messeges
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={`${s.item} ${s.setting}`}>
        <NavLink to="/setting" activeClassName={s.activeLink}>
          Setting
        </NavLink>
      </div>
      <div className={`${s.item} ${s.setting}`}>
        <NavLink to="/friends" activeClassName={s.activeLink}>
          Friends
          <div>
            <img src="https://c0.klipartz.com/pngpicture/986/173/gratis-png-circulo-circulo-thumbnail.png" />
            <img src="https://c0.klipartz.com/pngpicture/986/173/gratis-png-circulo-circulo-thumbnail.png" />
            <img src="https://c0.klipartz.com/pngpicture/986/173/gratis-png-circulo-circulo-thumbnail.png" />
            </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
