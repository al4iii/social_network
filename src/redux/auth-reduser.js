import { API } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export const authMe = () => {
  return (dispatch) => {
    API.getAuthUserData().then((response) => {
      if (response.resultCode === 0) {
        let { id, login, email } = response.data;
        dispatch(setAuthUserData(email, id, login));
      }
    });
  };
};

export default authReducer;
