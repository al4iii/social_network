import { connect } from "react-redux";
import {
  addPostActionCreater,
  updateNewPOstTextActionCreater,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.prolifePage.posts,
    newPostText: state.prolifePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPOstText: (text) => dispatch(updateNewPOstTextActionCreater(text)),
    addPost: () => dispatch(addPostActionCreater()),
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
