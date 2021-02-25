import { connect } from "react-redux";
import { compose } from "redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    navbarPage: state.navbarPage,
  };
};

export default compose(connect(mapStateToProps, {}))(Navbar);
