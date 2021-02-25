import { connect } from "react-redux";
import { compose } from "redux";
import Myself from "./Myself";

let mapStateToProps = (state) => {
  return {
    prolifePage: state.prolifePage.date,
  };
};

export default compose(connect(mapStateToProps, {}))(Myself);
