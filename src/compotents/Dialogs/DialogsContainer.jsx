import React from "react";
import {
  addNewMassegeActionCreater,
  updateNewMassegeTextActionCreater,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;
  let addNewMassege = () => props.store.dispatch(addNewMassegeActionCreater());
  let onPostChange = (text) => props.store.dispatch(updateNewMassegeTextActionCreater(text));

  return (
    <Dialogs
      updateNewMassegeText={onPostChange}
      addNewMassege={addNewMassege}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
