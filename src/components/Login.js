import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { handleLogin } from "../actions/actions";
import { connect } from "react-redux";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

//   needs to redirect to protected route after login
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('clicked')
    props.handleLogin(username, password)
    console.log(username, password)
    // props.history.push('/protected')
  }

  return (
    <div className="Login">
      <form>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel>username</FormLabel>
          <FormControl
            autoFocus
            type="username"
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

        <button className='submit-btn' onClick={handleSubmit}>Log In</button>

      </form>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        inputvalues: state.inputvalues,
        isPosting: state.isPosting
    }
}

export default connect(
    mapStateToProps,
    { handleLogin }
)(Login)
