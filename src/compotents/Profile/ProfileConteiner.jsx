import React, { Component } from "react";
import "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileConteiner extends React.Component {
  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authrazedUserId;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.prolifePage.profile,
  status: state.prolifePage.status,
  authrazedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter
  // withAuthRedirect
)(ProfileConteiner);
