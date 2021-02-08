import React, { Component } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, maseege: "hi, how are you?", likesCount: 15 },
    { id: 2, maseege: "it's my first post!!", likesCount: 101 },
    { id: 3, maseege: "Have a goog day!!", likesCount: 17 },
    { id: 4, maseege: "Yo", likesCount: 13 },
    { id: 5, maseege: "Yo", likesCount: 104 },
  ];

  let postsElement = posts.map(p => <Post message={p.maseege} likesCount={p.likesCount} />);

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
      <div>
        {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
