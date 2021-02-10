import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import { addMassege, addPost, updateNewPostText, updateNewMassegeText } from "./redux/state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMassege={addMassege} updateNewMassegeText={updateNewMassegeText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

reportWebVitals();
