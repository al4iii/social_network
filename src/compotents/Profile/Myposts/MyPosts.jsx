import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../Common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validator";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const AddNewPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength10]}
        name={"newPost"}
        cols={"80"}
        rows={"2"}
        placeholder={"Enter your message"}
      />
      <div className={s.input}>
        <button>add post</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({ form: "AddPostForm" })(AddNewPost);

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post
      message={p.maseege}
      key={p.id}
      likesCount={p.likesCount}
      avatarforo={p.avatarforo}
    />
  ));
  const addNewPost = (values) => {
    props.addPost(values.newPost);
  };

  return (
    <div>
      <div className={s.posts}>
        <h2>My post</h2>
      </div>
      <AddPostReduxForm onSubmit={addNewPost} />
      <div>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
