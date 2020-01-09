import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogOut } from '../actions/actions'

const Navigation = props => {

    return (
        <div className='navbar-container'>
            <NavLink className='logo' to='/'><h2>Chef<span className='highlight'>Port</span>.</h2></NavLink>
            <nav className='navbar'>
                {props.isLoggedIn ? 
                    <NavLink className='nav-btn' to='/' onClick={props.handleLogOut}>Log Out</NavLink> : 
                    <>
                    <NavLink className='nav-btn' to='/login'>Log In</NavLink>
                    </>
                }
            </nav>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
    }
}

export default connect(
    mapStatetoProps,
    { handleLogOut }
)(Navigation)