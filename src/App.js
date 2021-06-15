import React from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./Pages/HomePage/Homepage.pages";
import ShopPage from "./Pages/ShopPage/ShopPage.pages";
import Header from "./Components/Header/Header.component";
import SignInAndSignUp from "./Pages/SignInAndSignUp/SignInAndSignUp.pages";
import {auth} from './Firebase/Firebase.util'

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
        this.setState({currentUser: user}))
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser = {this.state.currentUser} />
                <Switch>
                    <Route exact path = '/' component = { HomePage } />
                    <Route exact path = '/shop' component = { ShopPage } />
                    <Route exact path = '/signin' component = { SignInAndSignUp } />
                </Switch>
            </div>
        );
    }
}

export default App;
