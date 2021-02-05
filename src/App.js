import React, { Component } from "react";
import "./App.css";
import Profile from "./compotents/Profile/Profile";
import Header from "./compotents/Header/Header";
import Nav from "./compotents/Navbar/Navbar";
import Dialogs from "./compotents/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      {/* <Profile /> */}
      <div className="app-wrapper-content">
        <Dialogs />
      </div>
    </div>
  );
};

export default App;
