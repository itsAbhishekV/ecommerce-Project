import React from "react";
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import { auth } from '../../Firebase/Firebase.util';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import './Header.styles.scss';
import CartDropdown from "../CartDropdown/CartDropdown.component";
import CartIcon from "../CartIcon/CartIcon.component";

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to = '/' className='logo-container'>
            <Logo />
        </Link>
        <div className='options' >
            <Link to = '/shop' className = 'option'>
                SHOP
            </Link>
            <Link to = '/' className = 'option'>
                CONTACT
            </Link>
                {
                    currentUser ?
                        <div className = 'option' onClick = {() => auth.signOut()} >
                            SIGN OUT
                        </div> :
                        <Link to = '/signin' className = 'option'>
                            SIGN IN
                        </Link>
                }
                <CartIcon />
        </div>
        {
            hidden?
                null:
                <CartDropdown />
        }
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);