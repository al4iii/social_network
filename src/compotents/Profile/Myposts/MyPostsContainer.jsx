import React from "react";
import {
  addPostActionCreater,
  updateNewPOstTextActionCreater,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          let action = addPostActionCreater();
          store.dispatch(action);
        };
        let onPostChange = (text) => {
          let action = updateNewPOstTextActionCreater(text);
          store.dispatch(action);
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
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
