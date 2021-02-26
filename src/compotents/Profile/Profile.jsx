import React, { Component } from "react";
import "./Profile.module.css";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import MyselfContainer from "./MySelf/MyselfContainer";
import ProfileFotoContainer from "./ProfileFoto/ProfileFotoContainer";

const Profile = (props) => {
  return (
    <div>
      {/* <ProfileFotoContainer /> */}
      <MyselfContainer
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer profile={props.profile} />
    </div>
  );
};

export default Profile;
