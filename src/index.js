import "./index.css";
import state , {subsctibe} from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import {  addMassege,  addPost,  updateNewPostText,  updateNewMassegeText } from "./redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMassege={addMassege}
          updateNewMassegeText={updateNewMassegeText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);
subsctibe(rerenderEntireTree);
reportWebVitals();
