import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReduce from "./navbar-reducer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reduser";

let reducers = combineReducers({
  prolifePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbarPage: navbarReduce,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
