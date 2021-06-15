import React from "react";
import {Link} from 'react-router-dom'
import { auth } from '../../Firebase/Firebase.util';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import './Header.styles.scss';

const Header = ({currentUser}) => (
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
        </div>
    </div>
)

export default Header;