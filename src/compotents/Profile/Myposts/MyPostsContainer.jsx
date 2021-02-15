import React from "react";
import {
  addPostActionCreater,
  updateNewPOstTextActionCreater,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  debugger;
  let state = props.store.getState();
  let addPost = () => {
    let action = addPostActionCreater();
    props.store.dispatch(action);
  };
  let onPostChange = (text) => {
    let action = updateNewPOstTextActionCreater(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPOstText={onPostChange}
      addPost={addPost}
      posts={state.prolifePage.posts}
      newPostText={state.prolifePage.newPostText}
      dispatch={state.dispatch}
    />
  );
};

export default MyPostsContainer;
