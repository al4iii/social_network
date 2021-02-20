import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post
      message={p.maseege}
      key={p.id}     
      likesCount={p.likesCount}
      avatarforo={p.avatarforo}
    />
  ));
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
          placeholder="Enter your message"
        />
      </div>
      <div className={s.input}>
        <button onClick={onAddPost}>add post</button>
      </div>
      <div>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
