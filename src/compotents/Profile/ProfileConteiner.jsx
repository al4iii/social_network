import React, { Component } from "react";
import "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { API } from "../../api/api";

class ProfileConteiner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    API.getProfile(userId).then((response) => {
      this.props.setUserProfile(response);
    });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.prolifePage.profile,
});

let WithUrlDataConteinerComponent = withRouter(ProfileConteiner);
export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataConteinerComponent
);
