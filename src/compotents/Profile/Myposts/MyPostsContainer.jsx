import { connect } from "react-redux";
import { compose } from "redux";
import { addPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.prolifePage.posts,
    newPostText: state.prolifePage.newPostText,
  };
};
let mapStateToState = (dispatch) => {
  return {
    addPost: (newPost) => dispatch(addPost(newPost)),
  };
};

export default compose(connect(mapStateToProps, mapStateToState))(MyPosts);
