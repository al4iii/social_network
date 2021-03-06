import React from "react";
import { Redirect } from "react-router-dom";
import { reduxForm } from "redux-form";
import { createField, Textarea } from "../../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validator";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Maseege from "./Massege/Massege";

const maxLength150 = maxLengthCreator(150);
const AddMessegeForm = ({ handleSubmit }) => {
  return (
    <div className={styles.enter}>
      <form onSubmit={handleSubmit}>
        {createField(
          "Enter your massege",
          "newMassegeText",
          [required, maxLength150],
          Textarea,"40" , "3"
        )}
        <div className={styles.button}>
          <button className={styles.buttonSend}>send</button>
        </div>
      </form>
    </div>
  );
};

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessegeForm
);

const Dialogs = ({ dialogsPage, isAuth, sendMassege }) => { 
  let dialogElements = dialogsPage.dialog.map((d) => (
    <DialogItem
      name={d.name}
      id={d.id}
      key={d.id}
      className={styles.dialog_item}
    />
  ));
  let maseegesElements = dialogsPage.maseeges.map((m) => (
    <Maseege maseege={m.maseege} key={m.id} />
  ));
  let addNewMassege = (values) => {
    sendMassege(values.newMassegeText);
  };
  if (!isAuth) <Redirect to={"/login"} />;
  return (
    <div>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>{dialogElements}</div>
        <div className={styles.maseeges}>{maseegesElements}</div>
        <div className={styles.enter}>
          <AddMessageReduxForm onSubmit={addNewMassege} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
