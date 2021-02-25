import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addNewMassege,
  updateNewMassegeText,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
  addNewMassege,
  updateNewMassegeText,
})(AuthRedirectComponent);

export default DialogsContainer;
