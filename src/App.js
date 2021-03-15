import React from "react";
import "./App.css";
import News from "./compotents/News/News";
import Music from "./compotents/Music/Music";
import Setting from "./compotents/Setting/Setting";
import Friends from "./compotents/Friends/Friends";
import { HashRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
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
          <Switch>
            <Route exact path="/" render={() => <Redirect from={"/"} to ={'/profile'} />} />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route path="/profile/:userId?" render={() => <ProfileConteiner />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/setting" render={() => <Setting />} />
            <Route path="/friends" render={() => <Friends />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={withSuspense(Login)} />
            <Route path="*" render={()=> <div> 404 not found</div>} />
          </Switch>
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
