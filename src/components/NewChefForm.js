import React from 'react'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { handleName, handleUsername, handleEmail, handlePassword, handleSubmitUser} from '../actions/actions.js/index.js';

const NewChefForm = props => {

    return (
        <form>
            <input
                type='text'
                value={props.inputValues.name}
                onChange={props.handleName}
                placeholder='Full Name'
            />
            <input
                type='text'
                value={props.inputValues.username}
                onChange={props.handleUsername}
                placeholder='Username'
            />
            <input
                type='email'
                value={props.inputValues.email}
                onChange={props.handleEmail}
                placeholder='Email'
            />
            <input 
                type='password'
                value={props.inputValues.password}
                onChange={props.handlePassword}
                placeholder='Password'
            />
            {/* Need a checkbox for chef or not chef */}
            <button onClick={e => {
                e.preventDefault();
                props.handleSubmitUser(props.inputValues);
            }}>Submit</button>
            {props.isPosting && 
            <>
                <p>Registering...</p>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </>
            }
        </form>
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
    { handleName, handleUsername, handleEmail, handleSubmitUser, handlePassword }
)(NewChefForm)