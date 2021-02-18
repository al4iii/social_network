import React, { Component } from "react";
import "./Profile.module.css";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import MyselfContainer from "./MySelf/MyselfContainer";
import ProfileFotoContainer from "./ProfileFoto/ProfileFotoContainer";

const Profile = () => {
  return (
    <div>
      {/* <ProfileFotoContainer /> */}
      <MyselfContainer />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
