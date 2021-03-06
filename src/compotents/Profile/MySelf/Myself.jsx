import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import styles from "./Myself.module.css";
import imgLogo from "../../../img/amanim.jpg";

const Myself = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={styles.myself}>
        <img className={styles.avatarPhoto} src={profile.photos.large || imgLogo} />
        <div className={styles.img}></div>
        <div className={styles.profile}>
          <p>{profile.fullName}</p>
          <p> {profile.aboutMe} </p>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default Myself;
