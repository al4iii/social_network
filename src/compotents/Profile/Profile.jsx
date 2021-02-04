import React, { Component } from "react";
import s from "./Profile.module.css";
import "./Profile.module.css";
import Myself from "./Myself";
import MyPosts from "./Myposts/Post/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" />
      <Myself name='Alexander Danilin' dob='02.12.1983' city='Mogilev' education='
special' webSite='instagram.com/sasha_al4i/'/>
      <MyPosts />
    </div>
  );
};

export default Profile;
