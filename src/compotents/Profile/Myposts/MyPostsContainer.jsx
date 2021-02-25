import { connect } from "react-redux";
import { compose } from "redux";
import { addPost, updateNewPostText } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.prolifePage.posts,
    newPostText: state.prolifePage.newPostText,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    updateNewPostText,
  })
)(MyPosts);
