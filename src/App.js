import React from "react";
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import {setCurrentUser} from "./Redux/User/User.types";
import {connect} from "react-redux";
import HomePage from "./Pages/HomePage/Homepage.pages";
import ShopPage from "./Pages/ShopPage/ShopPage.pages";
import Header from "./Components/Header/Header.component";
import SignInAndSignUp from "./Pages/SignInAndSignUp/SignInAndSignUp.pages";
import {auth, createUserProfile} from './Firebase/Firebase.util'
import { selectCurrentUser } from "./Redux/User/User.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage.pages";

class App extends React.Component{

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfile(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data()
                        })
                    });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path = '/' component = { HomePage } />
                    <Route path = '/shop' component = { ShopPage } />
                    <Route exact path = '/checkout' component = { CheckoutPage } />
                    <Route exact path = '/signin' render = {() => this.props.currentUser ? <Redirect to = '/' /> : <SignInAndSignUp /> } />
                </Switch>
            </div>
        );
    }
}

const mapStateToState = createStructuredSelector({
    currentUser: selectCurrentUser
})
const mapDispatchToState = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToState, mapDispatchToState)(App);
