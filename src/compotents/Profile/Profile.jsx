import React, { Component } from "react";
import "./Profile.module.css";
import Myself from "./MySelf/Myself";
import ProfileFoto from "./ProfileFoto/ProfileFoto";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile = () => {
  return (
    <div>
      <ProfileFoto />
      <Myself/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
