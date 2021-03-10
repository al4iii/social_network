import React from "react";
import "./App.css";
import News from "./compotents/News/News";
import Music from "./compotents/Music/Music";
import Setting from "./compotents/Setting/Setting";
import Friends from "./compotents/Friends/Friends";
import { HashRouter, Route, withRouter } from "react-router-dom";
import NavbarContainer from "./compotents/Navbar/NavbarContainer";
import UsersContainer from "./compotents/Users/UsersContainer";
import ProfileConteiner from "./compotents/Profile/ProfileConteiner";
import HeaderContainer from "./compotents/Header/HeaderContainer";
import { connect, Provider } from "react-redux";
import { initialiazeApp } from "../src/redux/app-reduser";
import { compose } from "redux";
import Preloader from "./Common/Preloader/Preloader";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./compotents/Dialogs/DialogsContainer"));
const Login = React.lazy(() => import("./compotents/Login/Login"));
const mapStateToProps = (state) => ({ initialiazed: state.app.initialiazed,});

class App extends React.Component {
  componentDidMount() {
    this.props.initialiazeApp();
  }
  render() {
    if (!this.props.initialiazed) {<Preloader />}
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route exact path="/profile/:userId?" render={() => <ProfileConteiner />} />
          <Route exact path="/news" render={() => <News />} />
          <Route exact path="/music" render={() => <Music />} />
          <Route exact path="/setting" render={() => <Setting />} />
          <Route exact path="/friends" render={() => <Friends />} />
          <Route exact path="/users" render={() => <UsersContainer />} />
          <Route exact path="/login" render={withSuspense(Login)} />
        </div>
      </div>
    );
  }
}

let AppContainer = compose( withRouter, connect(mapStateToProps, {initialiazeApp}))(App);

const MyApp = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </HashRouter>
    </React.StrictMode>
  );
};

export default MyApp;
