import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";

import { GlobalStyles } from "./GlobalStyles";

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
};
