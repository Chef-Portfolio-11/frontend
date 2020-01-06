import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const isLoggedIn = false;

    return (
        <div className='navbar-container'>
            <h2>Chef<span className='highlight'>Port</span>.</h2>
            <nav className='navbar'>
                <NavLink className='nav-btn' to='/'>Home</NavLink>
                
                {isLoggedIn ? 
                    <NavLink className='nav-btn' to='/logout'>Log Out</NavLink> : 
                    <>
                    <NavLink className='nav-btn' to='/login'>Log In</NavLink>
                    <NavLink className='nav-btn register' to='/register'>Register</NavLink>
                    </>
                }
            </nav>
        </div>
    )
}

export default Navigation;