import { connect } from "react-redux";
import Myself from "./Myself";

let mapStateToProps = (state) => {
  return {
    prolifePage: state.prolifePage.date,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};
const MyselfContainer = connect(mapStateToProps, mapDispatchToProps)(Myself);

export default MyselfContainer;
