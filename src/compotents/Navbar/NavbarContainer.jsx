import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    navbarPage: state.navbarPage,
  };
};

const NavbarContainer = connect(mapStateToProps, {})(Navbar);

export default NavbarContainer;
