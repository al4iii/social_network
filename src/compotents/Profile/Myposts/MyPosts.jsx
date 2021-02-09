import React, { Component } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.maseege} likesCount={p.likesCount } avatarforo={p.avatarforo}/>);

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
