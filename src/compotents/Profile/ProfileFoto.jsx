import React, { Component } from "react";
import s from "./Profile.module.css";
import "./Profile.module.css";
import Myself from "./MySelf/Myself";
import MyPosts from "./Myposts/Post/MyPosts";
import ProfileFoto from "./ProfileFoto/ProfileFoto";

const Profile = () => {
  return (
    <div>
      <ProfileFoto />
      <Myself
        name="Alexander Danilin"
        dob="02.12.1983"
        city="Mogilev"
        education="special"
        webSite="https://www.instagram.com/sasha_al4i/.com/sasha_al4i"
      />
      <MyPosts />
    </div>
  );
};

export default Profile;
