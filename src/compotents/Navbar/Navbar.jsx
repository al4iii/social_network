import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import StoreContext from "../../StoreContext";
import Avatar from "./Avatar/Avarar";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().navbarPage;
        let friendsElement = state.avatar.map((p) => (
          <Avatar name={p.name} avatarforo={p.avatarforo} />
        ));
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
                <div className={s.item}>{friendsElement}</div>
              </NavLink>
            </div>
          </nav>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Navbar;
