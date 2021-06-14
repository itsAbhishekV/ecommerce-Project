import React from "react";
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import './Header.styles.scss';

const Header = () => (
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
        </div>
    </div>
)

export default Header;