import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginBox from "./Components/LoginBox/LoginBox";
import LandingPage from "./Pages/LandingPage/LandingPage";
import FormPage from "./Components/Form/Form";
import MainPage from "./Pages/MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/form" component={FormPage} />
          <Route exact path="/main" component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
