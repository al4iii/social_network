import React, { Component } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = () => {
  let postsData =[
    { id: 1, maseege: "hi, how are you?", likesCount: 15 },
    { id: 2, maseege: "it's my first post!!", likesCount: 101 },
    { id: 3, maseege: "Have a goog day!!", likesCount: 17 },
    { id: 4, maseege: "Yo", likesCount: 13},
    { id: 5, maseege: "Yo",likesCount: 104},
  ]
  return (
    <div>
      <div className={s.posts}>
        <h2>My post</h2>
      </div>
      <div className={s.textarea}>
        <textarea name="comment" cols="80" rows="2"></textarea>
      </div>
      <div className={s.input}>
        <input type="submit" value="add post"></input>
      </div>
      <Post message={postsData[0].maseege} likesCount={postsData[0].likesCount} />
      <Post message={postsData[3].maseege} likesCount={postsData[3].likesCount} />
      <Post message={postsData[1].maseege} likesCount={postsData[1].likesCount} />
      <Post message={postsData[2].maseege} likesCount={postsData[2].likesCount} />
      <Post message={postsData[4].maseege} likesCount={postsData[4].likesCount} />
    </div>
  );
};

export default MyPosts;
