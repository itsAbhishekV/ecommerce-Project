import React from "react";
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from "./Pages/HomePage/Homepage.pages";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = { HomePage } />
      </Switch>
    </div>
  );
}

export default App;
