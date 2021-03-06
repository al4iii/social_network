import React, { Component } from "react";
import styles from "./Post.module.css";

const Post = ({ avatarforo, likesCount, message }) => {
  return (
    <div>
      <div className={styles.item}>
        <img src={avatarforo} />
        {message}
        <div>
          <span>like</span>
          {likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
