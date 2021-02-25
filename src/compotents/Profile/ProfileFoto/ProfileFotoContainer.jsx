import { connect } from "react-redux";
import { compose } from "redux";
import ProfileFoto from "./ProfileFoto";

let mapStateToProps = (state) => {
  return {
    profileFoto: state.prolifePage.profileFoto,
  };
};

export default compose(connect(mapStateToProps, {}))(ProfileFoto);
