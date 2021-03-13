import React from "react";
import Paginator from "../Paginator/Paginator";
import User from "./User";

const Users = React.memo((props) => {
  let usersElement =  [...props.users]
  .reverse()
  .map((u) => (
    <User user={u} key={u.id} followingInProgress={props.followingInProgress}
      unfollow={props.unfollow} follow={props.follow} />
  ))
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      <div>
        {usersElement}
      </div>      
    </div>
  );
});

export default Users;
