import React, { Component } from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Maseege from "./Massege/Massege";


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

  let dialogElements = dialog.map((d) => (<DialogItem name={d.name} id={d.id} />));
  let maseegesElements = maseeges.map((m) => <Maseege maseege={m.maseege} />);

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>
        <div className={s.maseeges}>{maseegesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
