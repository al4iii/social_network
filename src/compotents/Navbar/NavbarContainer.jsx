import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    navbarPage: state.navbarPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return { dispatch: () => dispatch };
};
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
