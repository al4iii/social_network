import React from "react";
import "./Profile.module.css";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import MyselfContainer from "./MySelf/MyselfContainer";

const Profile = (props) => {
  return (
    <div>
      <MyselfContainer
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer profile={props.profile} />
    </div>
  );
};

export default Profile;
