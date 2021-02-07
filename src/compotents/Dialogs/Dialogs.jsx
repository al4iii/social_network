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
  let dialog = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Alina" },
    { id: 4, name: "Zora" },
    { id: 5, name: "Kon'" },
  ];
  let maseeges = [
    { id: 1, maseege: "Hi?" },
    { id: 2, maseege: "How are you?" },
    { id: 3, maseege: "Have a goog day!!" },
    { id: 4, maseege: "Yo" },
    { id: 5, maseege: "Yo" },
  ];

  let dialogElements = dialog.map((d) => (<Dialog name={d.name} id={d.id} /> ));
  let maseegesElements = maseeges.map((m) => (<Maseege maseege={m.maseege} /> ));

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogElements}
        </div>
        <div className={s.maseeges}>
          {maseegesElements}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
