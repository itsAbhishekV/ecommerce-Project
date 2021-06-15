import React from "react";
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from "./Pages/HomePage/Homepage.pages";
import ShopPage from "./Pages/ShopPage/ShopPage.pages";
import Header from "./Components/Header/Header.component";
import SignInAndSignUp from "./Pages/SignInAndSignUp/SignInAndSignUp.pages";

function App() {
  return (
    <div>
        <Header />
      <Switch>
        <Route exact path = '/' component = { HomePage } />
        <Route exact path = '/shop' component = { ShopPage } />
        <Route exact path = '/signin' component = { SignInAndSignUp } />
      </Switch>
    </div>
  );
}

export default App;
