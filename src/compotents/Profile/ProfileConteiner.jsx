import React, { Component } from "react";
import "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileConteiner extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
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
let AuthRedirectComponent = withAuthRedirect(ProfileConteiner);
let WithUrlDataConteinerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getProfile })(
  WithUrlDataConteinerComponent
);
