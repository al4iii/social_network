import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Myself.module.css";

const Myself = (props) => {
  let state = props.prolifePage;
  return (
    <div className={s.myself}>
      <div className={s.img}>
        <img src={state.foto} />
      </div>
      <div className={s.profile}>
        <div className={s.item}>{state.name}</div>
        <div className={s.item}>{state.dob}</div>
        <div className={s.item}>City {state.city}</div>
        <div className={s.item}>Education {state.education}</div>
        <div className={s.item}>
          Web site <NavLink to={state.webSite}>instagram</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Myself;
