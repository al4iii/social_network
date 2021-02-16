import React from "react";
import s from "./ProfileFoto.module.css";

const ProfileFoto = (props) => {
  let profileFoto = props.profileFoto;
  return (
    <div className={s.img}>
      <img src={profileFoto} />
    </div>
  );
};

export default ProfileFoto;
