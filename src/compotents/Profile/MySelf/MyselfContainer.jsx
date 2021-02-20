import { connect } from "react-redux";
import Myself from "./Myself";

let mapStateToProps = (state) => {
  return {
    prolifePage: state.prolifePage.date,
  };
};

const MyselfContainer = connect(mapStateToProps, {})(Myself);

export default MyselfContainer;
