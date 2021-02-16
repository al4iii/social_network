import { connect } from "react-redux";
import ProfileFoto from "./ProfileFoto";


let mapStateToProps = (state) => {

  return {
    profileFoto: state.prolifePage.profileFoto,
  };
};

let mapDispatchToProps = (dispatch) => {
  return { dispatch: () => dispatch };
};
const ProfileFotoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileFoto);



export default ProfileFotoContainer;
