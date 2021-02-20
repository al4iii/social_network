import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../../../Common/Preloader/Preloader";
import s from "./Myself.module.css";

const Myself = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.myself}>
        <img src={props.profile.photos.large} />
        ava+ deccription
        <div className={s.img}>
          <img src={props.prolifePage.foto} />
        </div>
        <div className={s.profile}>
          <div className={s.item}>{props.prolifePage.name}</div>
          <div className={s.item}>{props.prolifePage.dob}</div>
          <div className={s.item}>City {props.prolifePage.city}</div>
          <div className={s.item}>Education {props.prolifePage.education}</div>
          <div className={s.item}>
            Web site <NavLink to={props.prolifePage.webSite}>instagram</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myself;
