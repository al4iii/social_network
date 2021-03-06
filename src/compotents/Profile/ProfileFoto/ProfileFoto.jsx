import React from "react";
import styles from "./ProfileFoto.module.css";

const ProfileFoto = ({ profileFoto }) => {
  return (
    <div className={styles.img}>
      <img src={profileFoto} />
    </div>
  );
};

export default ProfileFoto;
