import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import s from "./Myself.module.css";
import imgLogo from "../../../img/amanim.jpg";

const Myself = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.myself}>
        <img className={s.avatarPhoto} src={props.profile.photos.large || imgLogo} />
        <div className={s.img}></div>
        <div className={s.profile}>
          <p>{props.profile.fullName}</p>
          <p > {props.profile.aboutMe} </p>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default Myself;
