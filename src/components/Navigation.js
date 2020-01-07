import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const isLoggedIn = false;

    return (
        <div className='navbar-container'>
            <NavLink className='nav-btn' to='/'><h2>Chef<span className='highlight'>Port</span>.</h2></NavLink>
            <nav className='navbar'>
                {isLoggedIn ? 
                    <NavLink className='nav-btn' to='/logout'>Log Out</NavLink> : 
                    <>
                    </>
                }
            </nav>
        </div>
    )
}

export default Navigation;