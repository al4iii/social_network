import React from "react";
import "./App.css";
import Profile from "./compotents/Profile/Profile";
import Header from "./compotents/Header/Header";
import Nav from "./compotents/Navbar/Navbar";
import News from "./compotents/News/News";
import Music from "./compotents/Music/Music";
import Setting from "./compotents/Setting/Setting";
import Friends from "./compotents/Friends/Friends";
import { Route } from "react-router-dom";
import DialogsContainer from "./compotents/Dialogs/DialogsContainer";
import NavbarContainer from "./compotents/Navbar/NavbarContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer/>      
      <div className="app-wrapper-content">
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/news" render={() => <News />} />
        <Route exact path="/music" render={() => <Music />} />
        <Route exact path="/setting" render={() => <Setting />} />
        <Route exact path="/friends" render={() => <Friends />} />
      </div>
    </div>
  );
};

export default App;
