import React from 'react'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { handleName, handleUsername, handleEmail, handlePassword, handleSubmit} from '../actions/chefActions';

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
            <button onClick={e => {
                e.preventDefault();
                props.handleSubmit(props.inputValues);
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
    { handleName, handleUsername, handleEmail, handleSubmit, handlePassword }
)(NewChefForm)