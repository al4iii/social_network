import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMassege } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => ({ dialogsPage: state.dialogsPage });
let mapStateToState = (dispatch) => {
  return {
    sendMassege: (newMassegeText) => dispatch(sendMassege(newMassegeText)),
  };
};

export default compose(connect(mapStateToProps, mapStateToState),
  withAuthRedirect
)(Dialogs);
