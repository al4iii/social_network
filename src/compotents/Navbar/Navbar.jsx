import React, { Component } from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <a href="/profile">Profile</a>
      </div>
      <div className={s.item}>
        <a href="/messeges">Messeges</a>
      </div>  
      <div className={s.item}>
        <a href="/news">News</a>
      </div>
      <div className={s.item}>
        <a href="/music">Music</a>
      </div>
      <div className={`${s.item} ${s.setting}`}>
        <a href="/setting">Setting</a>
      </div>
    </nav>
  );
};

export default Navbar;
