import React from "react";
import {
  addPostActionCreater,
  updateNewPOstTextActionCreater,
} from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post
      message={p.maseege}
      likesCount={p.likesCount}
      avatarforo={p.avatarforo}
    />
  ));

  let newPostElement = React.createRef();
  let addPost = () => {
    let action = addPostActionCreater();
    props.dispatch(action);
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPOstTextActionCreater(text);
    props.dispatch(action);
  };

  return (
    <div>
      <div className={s.posts}>
        <h2>My post</h2>
      </div>
      <div className={s.textarea}>
        <textarea
          onChange={onPostChange}
          name="comment"
          cols="80"
          rows="2"
          ref={newPostElement}
          value={props.newPostText}
          placeholder="Enter your massege"
        />
      </div>
      <div className={s.input}>
        <button onClick={addPost}>add post</button>
      </div>
      <div>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
