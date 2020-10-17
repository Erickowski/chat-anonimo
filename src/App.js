import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";

import AuthState from "./context/auth/authState";

import { GlobalStyles } from "./GlobalStyles";

export const App = () => {
  return (
    <AuthState>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </AuthState>
  );
};
