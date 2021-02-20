import { connect } from "react-redux";
import ProfileFoto from "./ProfileFoto";

let mapStateToProps = (state) => {
  return {
    profileFoto: state.prolifePage.profileFoto,
  };
};

const ProfileFotoContainer = connect(mapStateToProps, {})(ProfileFoto);

export default ProfileFotoContainer;
