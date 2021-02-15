import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./Myself.module.css";

const Myself = (props) => {
  debugger;
  return (
    <div className={s.myself}>
      <div className={s.img}>
        <img src={props.state.foto} />
      </div>
      <div className={s.profile}>
        <div className={s.item}>{props.state.name}</div>
        <div className={s.item}>{props.state.dob}</div>
        <div className={s.item}>City {props.state.city}</div>
        <div className={s.item}>Education {props.state.education}</div>
        <div className={s.item}>
          Web site <NavLink to={props.state.webSite}>instagram</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Myself;
