import { API } from "../api/api";
import { updateObjectInArrray } from "../utils/helpers";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const TOTAL_USERS_COUNT = "users/TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArrray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArrray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSucces = (userId) => ({ type: FOLLOW, userId });
export const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (count) => ({
  type: TOTAL_USERS_COUNT,
  count,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await API.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};
export const getUsersOnPageChanged = (pageNumber, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(pageNumber));
    let data = await API.getUsers(pageNumber, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
  };
};
const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreater
) => {
  dispatch(toggleFollowingInProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.resualtCode === 0) {
    dispatch(actionCreater(userId));
  }
  dispatch(toggleFollowingInProgress(false, userId));
};
export const follow = (userId) => {
  return async (dispatch) =>
    followUnfollowFlow(dispatch, userId, API.follow.bind(userId), followSucces);
};
export const unfollow = (userId) => {
  return async (dispatch) =>
    followUnfollowFlow(
      dispatch,
      userId,
      API.unfollow.bind(userId),
      unfollowSucces
    );
};

export default usersReducer;
