import React from "react";
import {
  addNewMassegeActionCreater,
  updateNewMassegeTextActionCreater,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let addNewMassege = () => store.dispatch(addNewMassegeActionCreater());
        let onPostChange = (text) =>
          store.dispatch(updateNewMassegeTextActionCreater(text));
        return (
          <Dialogs
            updateNewMassegeText={onPostChange}
            addNewMassege={addNewMassege}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
