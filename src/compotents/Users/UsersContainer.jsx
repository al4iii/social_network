import { connect } from "react-redux";
import React from "react";
import {
  follow,
  unfollow,
  requestUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress,
  getUsersOnPageChanged,
} from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getToggleFollowingInProgress,
  getTotalUsersCount,
} from "../../redux/users-selectors";

class UsersComponer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }
  onPageChanged = (pageNumber) => {
    const { getUsersOnPageChanged, pageSize } = this.props;
    getUsersOnPageChanged(pageNumber, pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching && <Preloader />}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    toggleFollowingInProgress: getToggleFollowingInProgress(state),
    users: getUsers(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress,
    requestUsers,
    getUsersOnPageChanged,
    follow,
    unfollow,
  })
)(UsersComponer);
