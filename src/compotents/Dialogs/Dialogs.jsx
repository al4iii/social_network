import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialog + " " + s.active}>
            <NavLink to="/dialogs/1">Dimych</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/2">Alex</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/3">Volya</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/4">Honor</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/5">Alina</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/6">Zora</NavLink>
          </div>
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
