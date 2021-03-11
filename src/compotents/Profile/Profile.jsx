import React from "react";
import "./Profile.module.css";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import MyselfContainer from "./MySelf/MyselfContainer";

const Profile = (props) => {
  debugger
  return (
    <div>
      <MyselfContainer
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer profile={props.profile} />
    </div>
  );
};

export default Profile;
