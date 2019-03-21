import React, { Component } from 'react';
import NavContainer from "./NavContainer";
import BoardsContainer from "./BoardsContainer";
import LoginContainer from "./LoginContainer";
import SignupContainer from "./SignupContainer";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import '../App.css';


class App extends Component {
  render() {
    return (
      <div>
        <NavContainer />
        <Switch>
          <ProtectedRoute exact path="/boards" component={BoardsContainer}/>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={SignupContainer}/>
          <Redirect to="/boards"/>
        </Switch>
      </div>
    );
  }
}

export default App;
