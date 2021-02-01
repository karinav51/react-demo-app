//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import Clock from "./Components/Clock/Clock";
import Contact from "./Components/Contact/Contact";
import Navigation from "./Components/Navigation/Navigation";
import Page404 from "./Components/Page404/Page404";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(...props) => <Welcome name="Karina" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/welcome/:name" component={Welcome} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
