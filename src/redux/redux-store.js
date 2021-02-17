import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReduce from "./navbar-reducer";
import usersReducer from "./users-reduser";

let reducers = combineReducers({
  prolifePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbarPage: navbarReduce,
  usersPage: usersReducer
});

let store = createStore(reducers);
window.store = store;
export default store;

