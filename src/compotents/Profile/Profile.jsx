import React, { Component } from "react";
import "./Profile.module.css";
import Myself from "./MySelf/Myself";
import MyPosts from "./Myposts/MyPosts";
import ProfileFoto from "./ProfileFoto/ProfileFoto";

const Profile = (props) => {
  return (
    <div>
      <ProfileFoto />
      <Myself date={props.date} />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
