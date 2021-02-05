import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

let path = `"/dialogs/" + props.id`;

const Dialog = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Maseege = (props) => {
  return <div className={s.maseege}>{props.maseege}</div>;
};

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <Dialog name="Dimych" id="1" />
          <Dialog name="Alex" id="2" />
          <Dialog name="Alina" id="3" />
          <Dialog name="Zora" id="3" />
          <Dialog name="Kon'" id="3" />
        </div>
        <div className={s.maseeges}>
          <Maseege maseege="Hi?" />
          <Maseege maseege="How are you?" />
          <Maseege maseege="Have a goog day!!" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
