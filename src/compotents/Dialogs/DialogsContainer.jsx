import { connect } from "react-redux";
import {
  addNewMassegeActionCreater,
  updateNewMassegeTextActionCreater,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMassegeText: (text) =>
      dispatch(updateNewMassegeTextActionCreater(text)),
    addNewMassege: () => dispatch(addNewMassegeActionCreater()),
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
