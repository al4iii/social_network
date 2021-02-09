import React, { Component } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  console.log(props);
  let postsElement = props.posts.map((p) => (
    <Post
      message={p.maseege}
      likesCount={p.likesCount}
      avatarforo={p.avatarforo}
    />
  ));

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = " ";
  };
  return (
    <div>
      <div className={s.posts}>
        <h2>My post</h2>
      </div>
      <div className={s.textarea}>
        <textarea
          name="comment"
          cols="80"
          rows="2"
          ref={newPostElement}
        ></textarea>
      </div>
      <div className={s.input}>
        <button onClick={addPost}>add post</button>
      </div>
      <div>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
