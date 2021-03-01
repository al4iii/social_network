import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Maseege from "./Massege/Massege";

const AddMessegeForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          name={"newMassegeText"}
          cols={"50"}
          rows={"2"}
          placeholder={"Enter your massege"}
        />
      </div>
      <div>
        <button>send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessegeForm
);

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogElements = state.dialog.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} className={s.dialog_item} />
  ));
  let maseegesElements = state.maseeges.map((m) => (
    <Maseege maseege={m.maseege} key={m.id} />
  ));
  let addNewMassege = (values) => {
    props.sendMassege(values.newMassegeText);
  };
  if (!props.isAuth) return <Redirect to={"/login"} />;
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>
        <div className={s.maseeges}>{maseegesElements}</div>
        <div className={s.enter}>
          <AddMessageReduxForm onSubmit={addNewMassege} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
