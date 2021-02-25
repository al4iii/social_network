import { connect } from "react-redux";
import React from "react";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress,
  getUsers,
  getUsersOnPageChanged,
} from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersComponer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsersOnPageChanged(pageNumber, this.props.pageSize);
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    toggleFollowingInProgress: state.usersPage.toggleFollowingInProgress,
  };
};

export default withAuthRedirect(
  connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress,
    getUsers,
    getUsersOnPageChanged,
    follow,
    unfollow,
  })(UsersComponer)
);
