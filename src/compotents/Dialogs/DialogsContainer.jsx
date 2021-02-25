import { connect } from "react-redux";
import {
  addNewMassege,
  updateNewMassegeText,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  };
};

const DialogsContainer = connect(mapStateToProps, {
  addNewMassege,
  updateNewMassegeText,
})(Dialogs);

export default DialogsContainer;
