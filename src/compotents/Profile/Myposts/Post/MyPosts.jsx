import React, { Component } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = () => {
  return (
    <div>
      <div className={s.posts}>
        <h2>My post</h2>
      </div>
      <div className={s.textarea}>
        <textarea name="comment" cols="80" rows="2"></textarea>
      </div>
      <div className={s.input}>
        <input type="submit" value="Отправить"></input>
      </div>
      <Post message="hi, how are you?"  like="15" />
      <Post message="it's my first post!!" like="100"/>
    </div>
  );
};

export default MyPosts;
