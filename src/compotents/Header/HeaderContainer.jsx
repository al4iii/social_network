import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { compose } from "redux";
import { logOut } from "../../redux/auth-reduser";
import { getIsAuth, getLogin } from "../../redux/auth-selectors";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
});

export default compose(connect(mapStateToProps, { logOut }))(HeaderContainer);
