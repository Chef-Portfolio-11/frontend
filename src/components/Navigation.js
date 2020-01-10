import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogOut } from '../actions/actions'
import Cube from './Cube'

const Navigation = props => {

    return (
        <div className='navbar-container'>
            <NavLink className='logo' to='/'><h2>Chef<span className='highlight'>Port</span>.</h2></NavLink>
            <nav className='navbar'>
                {localStorage.getItem('token') &&
                    <NavLink className='nav-btn' to='/' onClick={props.handleLogOut}>
                        Log Out
                    </NavLink>
                }
            </nav>
            <Cube />
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