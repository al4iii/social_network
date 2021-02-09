import React, { Component } from "react";
import s from "./Avatar.module.css";

const Avarar = (props) => {
  // console.log(props)
  return (
    <div>
      <div className={s.item}>
        <img src={props.avatarforo} />
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default Avarar;
