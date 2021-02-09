import React, { Component } from "react";
import s from "./Post.module.css";

const Post = (props) => {
  console.log(props)
  return (
    <div>
      <div className={s.item}>
        <img src={props.avatarforo} />
        {props.message}
        <div><span>like </span>{props.likesCount}</div>
      </div>
    </div>
  );
};

export default Post;
