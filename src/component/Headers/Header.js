
import logo from '../../images/Logo.svg'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />

            <div className='link'>
                <a href="/Home">Home</a>
                <a href="/Orders">Orders</a>
                <a href="/Inventory">Inventory</a>
                <a href="/About">About</a>

            </div>
        </div>
    );
};

export default Header;