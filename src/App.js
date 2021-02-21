import React from "react";
import "./App.css";
import Header from "./compotents/Header/Header";
import News from "./compotents/News/News";
import Music from "./compotents/Music/Music";
import Setting from "./compotents/Setting/Setting";
import Friends from "./compotents/Friends/Friends";
import { Route } from "react-router-dom";
import DialogsContainer from "./compotents/Dialogs/DialogsContainer";
import NavbarContainer from "./compotents/Navbar/NavbarContainer";
import UsersContainer from "./compotents/Users/UsersContainer";
import ProfileConteiner from "./compotents/Profile/ProfileConteiner";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route
          exact
          path="/profile/:userId?"
          render={() => <ProfileConteiner />}
        />
        <Route exact path="/news" render={() => <News />} />
        <Route exact path="/music" render={() => <Music />} />
        <Route exact path="/setting" render={() => <Setting />} />
        <Route exact path="/friends" render={() => <Friends />} />
        <Route exact path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
