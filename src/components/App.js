import React, { Component } from 'react';
import NavContainer from "./NavContainer";
import HomeContainer from "./HomeContainer";
import { Route, Switch } from "react-router-dom";
import '../App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavContainer />
        <HomeContainer />
      </div>
    );
  }
}

export default App;
