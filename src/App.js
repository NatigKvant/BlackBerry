import React, {Component} from "react";
import { connect, Provider } from "react-redux";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import "./App.css";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";

import HeaderBarContainer from "./components/Header/HeaderBarContainer";
import About from "./components/Header/HeaderComponents/About";
import Contacts from "./components/Header/HeaderComponents/Contacts";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {initializeApp} from "../src/Redux/app-reducer";
import store from "./Redux/redux-store";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); //Lazy Loading
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); //Lazy Loading

class App extends Component {

  catchAllUnhandledErrors = (reason, promise) => {
    /* console.error(promiseRejectionEvent); */
  }

componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
}

componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
}


render() {
  if(!this.props.initialized) {
  return <Preloader />
  }

  return (
   
      <div className="app-wrapper">
        <HeaderBarContainer/>
        <Navbar />
        <div className="app-wrapper-content">
        <Switch>
          <Route  exact path="/" 
                  render={() => <Redirect to={"/profile"}/>}/>

          <Route  path="/dialogs" 
                  render={withSuspense(DialogsContainer)}/>

          <Route  path="/profile/:userId?" 
                  render={withSuspense(ProfileContainer)}/>
                  
          <Route  path="/users" render={() => <UsersContainer />} />
          <Route  path="/news" component={News} />
          <Route  path="/music" component={Music} />
          <Route  path="/settings" component={Settings} />
          <Route  path="/contacts" component={Contacts} />
          <Route  path="/about" component={About} />
          <Route  path="/login" component={Login} />
          <Route  path="*" render={() => <div>404 NOT FOUND</div>} />
        </Switch>
        </div>
      </div>
    
  )
 }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

  const BlackBerryJSApp = (props) => {
    return <HashRouter >
         <Provider store={store}>
             <AppContainer />
         </Provider>
     </HashRouter>
 }

 export default BlackBerryJSApp;