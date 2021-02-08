import React, { Component } from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Maseege from "./Massege/Massege";


const Dialogs = (props) => {
  let dialogElements = props.dialog.map((d) => (<DialogItem name={d.name} id={d.id} />));
  let maseegesElements = props.maseeges.map((m) => <Maseege maseege={m.maseege} />);

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
