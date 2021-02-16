import "./index.css";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
// import { Provider } from "./StoreContext";


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
debugger;
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
debugger;
reportWebVitals();
