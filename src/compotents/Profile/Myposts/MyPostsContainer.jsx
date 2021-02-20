import { connect } from "react-redux";
import { addPost, updateNewPostText } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.prolifePage.posts,
    newPostText: state.prolifePage.newPostText,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(MyPosts);

export default MyPostsContainer;
