import "./index.css";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subsctibe(rerenderEntireTree);
reportWebVitals();
