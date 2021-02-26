import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import s from "./Myself.module.css";

const Myself = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.myself}>
        <img src={props.profile.photos.large} />
        <div className={s.img}></div>
        <div className={s.profile}>
          <p>{props.profile.fullName}</p>
          <p>Status: {props.profile.aboutMe} </p>
          <ProfileStatus status={"i am best of the best"} />
        </div>
      </div>
    </div>
  );
};

export default Myself;
