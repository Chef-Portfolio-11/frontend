import React from 'react'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { handleUsername, handlePassword, handleLogin} from '../actions/actions';
import { NavLink } from 'react-router-dom';

const NewUserForm = props => {

    return (
        <>
        <h2>Log in to your account</h2>
        <form>
            <input
                type='text'
                value={props.inputValues.username}
                onChange={props.handleUsername}
                placeholder='Username'
            />
            <input 
                type='password'
                value={props.inputValues.password}
                onChange={props.handlePassword}
                placeholder='Password'
            />
            <button className='submit-btn' onClick={e => {
                e.preventDefault();
                props.handleLogin(props.inputValues);
            }}>Submit</button>
            <p>Don't have an account?</p>
            <NavLink to='/register'><button>Register</button></NavLink>
            {props.isPosting && 
            <>
                <p>Logging you in...</p>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </>
            }
        </form>
        </>
    );
};


const mapStateToProps = state => {
    return {
        inputValues: state.inputValues,
        isPosting: state.isPosting
    }
}

export default connect(
    mapStateToProps,
    { handleUsername, handlePassword, handleLogin }
)(NewUserForm)