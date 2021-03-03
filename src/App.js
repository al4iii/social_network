import React from "react";
import "./App.css";
import News from "./compotents/News/News";
import Music from "./compotents/Music/Music";
import Setting from "./compotents/Setting/Setting";
import Friends from "./compotents/Friends/Friends";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./compotents/Dialogs/DialogsContainer";
import NavbarContainer from "./compotents/Navbar/NavbarContainer";
import UsersContainer from "./compotents/Users/UsersContainer";
import ProfileConteiner from "./compotents/Profile/ProfileConteiner";
import HeaderContainer from "./compotents/Header/HeaderContainer";
import Login from "./compotents/Login/Login";
import { connect } from "react-redux";
import { initialiazeApp } from "../src/redux/app-reduser";
import { compose } from "redux";
import Preloader from "./Common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initialiazeApp();
  }
  render() {
    if (!this.props.initialiazed) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
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
          <Route exact path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialiazed: state.app.initialiazed,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initialiazeApp })
)(App);
