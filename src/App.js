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

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />        
        <div className="app-wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/messeges" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Setting} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
