import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./Myself.module.css";

const Myself = (props) => {
  return (
    <div className={s.myself}>
      <div className={s.img}>
        <img src={props.date.foto} />
      </div>
      <div className={s.profile}>
        <div className={s.item}>{props.date.name}</div>
        <div className={s.item}>{props.date.dob}</div>
        <div className={s.item}>City {props.date.city}</div>
        <div className={s.item}>Education {props.date.education}</div>
        <div className={s.item}>Web site <NavLink to={props.date.webSite}>instagram</NavLink></div>
      </div>
    </div>
  );
};

export default Myself;
