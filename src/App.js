import React, { Component } from "react";
import "./App.css";
import Profile from "./compotents/Profile/Profile";
import Header from "./compotents/Header/Header";
import Nav from "./compotents/Navbar/Navbar";
import Dialogs from "./compotents/Dialogs/Dialogs";
import News from "./compotents/News/News";
import Music from "./compotents/Music/Music";
import Setting from "./compotents/Setting/Setting";
import Friends from "./compotents/Friends/Friends";
import { Route } from "react-router-dom";
import DialogsContainer from "./compotents/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav state={props.state.navbarPage} />
      <div className="app-wrapper-content">
        <Route
          exact
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />
        <Route
          exact
          path="/profile"
          render={() => (
            <Profile store={props.store} state={props.state.prolifePage.date} />
          )}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/setting" render={() => <Setting />} />
        <Route path="/friends" render={() => <Friends />} />
      </div>
    </div>
  );
};

export default App;
