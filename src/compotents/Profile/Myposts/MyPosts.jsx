import React from "react";
import { reduxForm } from "redux-form";
import { createField, Textarea,} from "../../../Common/FormsControls/FormsControls";
import { maxLengthCreator, required,} from "../../../utils/validators/validator";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength100 = maxLengthCreator(100);
const AddNewPost = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.textarea}>
      {createField("Enter your massege", "newPost", [required, maxLength100], Textarea, "40","3" )}
      <div className={styles.input}>
        <button className={styles.button}>add post</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({ form: "AddPostForm" })(AddNewPost);

const MyPosts = React.memo((props) => {
  let postsElement = [...props.posts]
    .reverse()
    .map((p) => (
      <Post key={p.id} message={p.maseege} key={p.id} likesCount={p.likesCount} avatarforo={p.avatarforo} /> ));
  const addNewPost = (values) => props.addPost(values.newPost);
  return (
    <div>
      <div className={styles.posts}>
        <h2>My post</h2>
      </div>
      <AddPostReduxForm onSubmit={addNewPost} />
      <div>{postsElement}</div>
    </div>
  );
});

export default MyPosts;
