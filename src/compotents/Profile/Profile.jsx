import React, { Component } from "react";
import "./Profile.module.css";
import Myself from "./MySelf/Myself";
import ProfileFoto from "./ProfileFoto/ProfileFoto";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile = (props) => {

  console.log(props)
  debugger
  return (
    <div>
      <ProfileFoto />
      <Myself state={props.state}/>
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
