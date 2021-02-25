import React, { Component } from "react";
import "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";
import { Redirect, withRouter } from "react-router-dom";

class ProfileConteiner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }
  render() {
    if (!this.props.isAuth) return <Redirect to={"/login"} />;
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.prolifePage.profile,
  isAuth: state.auth.isAuth,
});

let WithUrlDataConteinerComponent = withRouter(ProfileConteiner);
export default connect(mapStateToProps, { getProfile })(
  WithUrlDataConteinerComponent
);
