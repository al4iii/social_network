import React, { Component } from "react";
import "./App.css";
import Profile from "./compotents/Profile/Profile";
import Header from "./compotents/Header/Header";
import Nav from "./compotents/Navbar/Navbar";
import Dialogs from "./compotents/Dialogs/Dialogs";
import News from "./compotents/News/News";
import Music from "./compotents/Music/Music";
import Setting from "./compotents/Setting/Setting";

import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route exact path="/profile" render={() => <Profile posts={props.posts} date ={props.date}/>} />
          <Route exact path="/messeges" render={() => <Dialogs dialog={props.dialog} maseeges={props.maseeges}/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/setting" render={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
