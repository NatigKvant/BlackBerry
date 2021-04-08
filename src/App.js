import React from "react";
import { Route } from "react-router";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderBar from "./components/Header/HeaderBar";
import About from "./components/Header/HeaderComponents/About";
import Contacts from "./components/Header/HeaderComponents/Contacts";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {

  return (
   
      <div className="app-wrapper">
        <HeaderBar/>
        <Navbar />
        <div className="app-wrapper-content">
          <Route  path="/dialogs" render={() => <DialogsContainer />} />
          <Route  path="/profile" render={() => <Profile />} />
          <Route  path="/users" render={() => <UsersContainer />} />
          <Route  path="/news" component={News} />
          <Route  path="/music" component={Music} />
          <Route  path="/settings" component={Settings} />
          <Route  path="/contacts" component={Contacts} />
          <Route  path="/about" component={About} />
        </div>
      </div>
    
  )
}

export default App;
