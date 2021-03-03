import { getAuthMeData } from "./auth-reduser";

const INITIALIAZED_SUCCESS = "INITIALIAZED_SUCCESS";

let initialState = {
  initialiazed: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIAZED_SUCCESS:
      return {
        ...state,
        initialiazed: true,
      };
    default:
      return state;
  }
};

export const initialiazedSuccese = () => ({ type: INITIALIAZED_SUCCESS });

export const initialiazeApp = () => (dispatch) => {
  let promise = dispatch(getAuthMeData());
  Promise.all([promise])
  .then(() => dispatch(initialiazedSuccese()));
};

export default appReducer;
