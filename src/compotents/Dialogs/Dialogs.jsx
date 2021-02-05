import React, { Component } from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialog + " " + s.active}>Dimych</div>
          <div className={s.dialog}>Alex</div>
          <div className={s.dialog}>Volya</div>
          <div className={s.dialog}>Honor</div>
        </div>
        <div className={s.maseeges}>
          <div className={s.maseege}> hi</div>
          <div className={s.maseege}> how are you?</div>
          <div className={s.maseege}> yo</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
