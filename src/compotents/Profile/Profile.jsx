import React, { Component } from "react";
import "./Profile.module.css";
import Myself from "./MySelf/Myself";
import MyPosts from "./Myposts/MyPosts";
import ProfileFoto from "./ProfileFoto/ProfileFoto";

const Profile = (props) => {
  return (
    <div>
      <ProfileFoto />
      <Myself date={props.prolifePage.date} />
      <MyPosts posts={props.prolifePage.posts}  
       newPostText={props.prolifePage.newPostText}
       updateNewPostText={props.updateNewPostText} 
      addPost={props.addPost}  />
    </div>
  );
};

export default Profile;
