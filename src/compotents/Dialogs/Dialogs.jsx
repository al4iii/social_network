import React, { Component } from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Maseege from "./Massege/Massege";

const Dialogs = (props) => {
  let dialogElements = props.state.dialog.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let maseegesElements = props.state.maseeges.map((m) => (
    <Maseege
      maseege={m.maseege}
      addMassege={props.addMassege}
      updateNewMassegeText={props.updateNewMassegeText}
      newMassegeText={props.state.newMassegeText}
    />
  ));

  let newMassege = React.createRef();
  let addNewMassege = () => {
    props.addMassege();
  };
  let onPostChange = () => {
    let text = newMassege.current.value;
    props.updateNewMassegeText(text);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>
        <div className={s.maseeges}>{maseegesElements}</div>
        <div className={s.textarea}>
          <textarea
            onChange={onPostChange}
            name="comment"
            cols="80"
            rows="2"
            ref={newMassege}
            value={props.state.newMassegeText}
          />
        </div>
        <div className={s.input}>
          <button onClick={addNewMassege}>add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
