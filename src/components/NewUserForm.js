import React from 'react'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { handleName, handleUsername, handleEmail, handlePassword, handleBizEmail, handlePhone, handleSubmitUser} from '../actions/actions';

const NewUserForm = props => {

    return (
        <>
        <h2>Build your profile</h2>
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
            <input 
                type='text'
                value={props.inputValues.location}
                onChange={props.handleLocation}
                placeholder='Location'
            />
            <input 
                type='text'
                value={props.inputValues.phone}
                onChange={props.handlePhone}
                placeholder='Phone Number'
            />
            <input 
                type='text'
                value={props.inputValues.bizEmail}
                onChange={props.handleBizEmail}
                placeholder='Business Email'
            />
            {/* Need a checkbox for chef or not chef */}
            {/* <div className='checkbox'>
                <input type="checkbox" name="chef" value='true' />
                <p>I am a professional chef</p>
            </div> */}
            <button className='submit-btn' onClick={e => {
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
    { handleName, handleUsername, handleEmail, handleSubmitUser, handlePassword, handlePhone, handleBizEmail }
)(NewUserForm)