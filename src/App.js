import React, { StrictMode } from "react";
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
import { connect, Provider } from "react-redux";
import { initialiazeApp } from "../src/redux/app-reduser";
import { compose } from "redux";
import Preloader from "./Common/Preloader/Preloader";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";

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

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initialiazeApp })
)(App);

const MyApp = (props) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default MyApp;
