import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../../../Common/Preloader/Preloader";
import s from "./Myself.module.css";

const Myself = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  debugger;
  return (
    <div>
      <div className={s.myself}>
        <img src={props.profile.photos.large} />
        <div className={s.img}></div>
        <div className={s.profile}>
          <p>{props.profile.fullName}</p>
          <p>Status: {props.profile.aboutMe} </p>
        </div>
      </div>
    </div>
  );
};

export default Myself;
