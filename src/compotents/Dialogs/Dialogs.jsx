import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Maseege from "./Massege/Massege";

const Dialogs = (props) => {
  debugger;
  let state = props.dialogsPage;
  let dialogElements = state.dialog.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} className={s.dialog_item} />
  ));
  let maseegesElements = state.maseeges.map((m) => (
    <Maseege maseege={m.maseege} key={m.id} />
  ));
  let addNewMassege = () => props.addNewMassege();
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewMassegeText(text);
  };
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>
        <div className={s.maseeges}>{maseegesElements}</div>
        <div className={s.enter}>
          <div>
            <textarea
              onChange={onPostChange}
              name="newMassegeText"
              cols="50"
              rows="2"
              placeholder="Enter your massege"
              value={state.newMassegeText}
            />
          </div>
          <div className={s.input}>
            <button onClick={addNewMassege}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
