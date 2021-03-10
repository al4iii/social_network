import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import styles from "./Myself.module.css";
import imgLogo from "../../../img/amanim.jpg";

const Myself = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className={styles.myself}>
        <img
          className={styles.avatarPhoto}
          src={profile.photos.large || imgLogo}
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
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
