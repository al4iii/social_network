import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./Myself.module.css";

const Myself = (props) => {
  return (
    <div className={s.myself}>
      <div className={s.img}>
        <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/1e94b089-414e-4ee9-a40a-2f05a8957568/220x330" />
      </div>
      <div className={s.profile}>
        <div className={s.item}>Name {props.date.name}</div>
        <div className={s.item}>Date of Birth {props.date.dob}</div>
        <div className={s.item}>City {props.date.city}</div>
        <div className={s.item}>Education {props.date.education}</div>
        <div className={s.item}>Web site <NavLink to="{props.date.webSite}">instagram</NavLink></div>
      </div>
    </div>
  );
};

export default Myself;
