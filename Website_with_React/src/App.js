import React, { useState, Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
