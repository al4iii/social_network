import React, { Component } from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://cdnimg.rg.ru/img/content/182/70/51/2020-02-09T235935Z_1762655872_HP1EG291UNB9F_RTRMADP_3_AWARDS-OSCARS_t_650x433.jpg" />
        {props.message}
        <div><span>like{props.like}</span></div>
      </div>
    </div>
  );
};

export default Post;
