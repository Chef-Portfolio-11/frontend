import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// import "./css/Login.css";
import axios from 'axios';
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {handleUsername, handlePassword, handleLogin} from '../actions/actions';

export function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleLogin(event) {
    event.preventDefault();
    axios({method:'post',url:'https://bw-chef-portfolio.herokuapp.com/api/auth/login', data:'{"username": "user1","password": "password1"}'})
    .then(res => {
        console.log(res, 'got the login data!');
        // localStorage.SetItem('token',res.data.token);
    })
    .catch(err => {
        console.log('error logging in;', err)
        //let us pretend
        localStorage.SetItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJoZXJva3UiLCJlbWFpbCI6Imhlcm9rdTEtQ      VtYWlsLmNvbSIsImlhdCI6MTU3ODM3MDM5OCwiZXhwIjoxNTc5NjY2Mzk4fQ.Za1xcMSiGtLvWteb8oX8P4OOdCkTWy1saNtpaSVhR5M');
        //bubble up the user to the app.js level
        localStorage.SetItem('currentUser', props.username);
    })
  }

  return (
    <div className="Login">
      <form onSubmit={handleLogin}>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel>User Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        {/* <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button> */}

        <button className='submit-btn' onClick={e => {
                e.preventDefault();
                props.handleLogin(props.inputValues);
            }}>Log In</button>

      </form>
    </div>
  );
}
const mapStateToProps = state => {
    return {
        inputValues: state.inputValues,
        isPosting: state.isPosting
    }
}

export default connect(
    mapStateToProps,
    {handleUsername, handleLogin, handlePassword}
)(Login)
