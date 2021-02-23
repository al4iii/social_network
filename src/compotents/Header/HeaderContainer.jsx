import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, state } from "../../redux/auth-reduser";
import { API } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    API.getAuthUserData().then((response) => {
      if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        this.props.setAuthUserData(email, id, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
