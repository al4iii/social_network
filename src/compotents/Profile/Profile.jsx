import React from "react";
import "./Profile.module.css";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import MyselfContainer from "./MySelf/MyselfContainer";

const Profile = (props) => {
  return (
    <div>      
      <MyselfContainer
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer profile={props.profile} />
    </div>
  );
};

export default Profile;
