import React from 'react';
import { NavLink } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import LoginRegistration from './LoginRegistration';

const Navigation = () => {
    const isLoggedIn = false;

    const logOut = () => {
        axiosWithAuth
            .post('/logout')
            .then(res => {
                localStorage.removeItem('token')
                console.log(res, 'Logged out!')
            })
            .catch(err => {
                console.log('error logging out;', err)
            })
    }

    return (
        <div>
            <div className='navbar-container'>
                <NavLink className='logo' to='/'><h2>Chef<span className='highlight'>Port</span>.</h2></NavLink>
                <nav className='navbar'>
                    {isLoggedIn ? 
                    <NavLink className='nav-btn' to='/' onClick={logOut()}>Log Out</NavLink> : 
                    <>
                    <NavLink className='nav-btn' to='/login'>Log In</NavLink>
                    </>
                }
                </nav>
            </div>
            <LoginRegistration isLoggedIn={true}  />
        </div>
    )
}

export default Navigation;