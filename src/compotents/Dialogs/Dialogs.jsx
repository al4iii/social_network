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
  let dialogData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Alina" },
    { id: 4, name: "Zora" },
    { id: 5, name: "Kon'" },
  ];
  
  let maseegesData =[
    { id: 1, maseege: "Hi?" },
    { id: 2, maseege: "How are you?" },
    { id: 3, maseege: "Have a goog day!!" },
    { id: 4, maseege: "Yo" },
    { id: 5, maseege: "Yo" },
  ]

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <Dialog name={dialogData[0].name} id={dialogData[0].id} />
          <Dialog name={dialogData[1].name} id={dialogData[1].id} />
          <Dialog name={dialogData[2].name} id={dialogData[2].id} />
          <Dialog name={dialogData[3].name} id={dialogData[3].id} />
          <Dialog name={dialogData[4].name} id={dialogData[4].id} />
        </div>
        <div className={s.maseeges}>
          <Maseege maseege={maseegesData[0].maseege} />
          <Maseege maseege={maseegesData[1].maseege} />
          <Maseege maseege={maseegesData[4].maseege} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
