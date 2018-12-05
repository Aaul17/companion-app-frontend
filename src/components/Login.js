import React from 'react';
import { Form, Button } from 'semantic-ui-react'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom';

const LoginImg = require('../assets/log_in.jpg')

const Login = (props) => {
  return (
    <>
    <NavBar currentUser={props.currentUser} logoutCurrentUser={props.logoutCurrentUser}/>
    <div className="form-container" style={{backgroundImage: `url(${LoginImg})`}}>
      <div id="login-div">
        <h1>Login</h1>
        <Form id="login-form" onSubmit={props.setCurrentUser}>
          <Form.Input width={6} onChange={props.handleChange} type="email" name="setEmail" placeholder="Email" value={props.setEmail} />
          <Form.Input width={6} onChange={props.handleChange} type="password" name="setPassword" placeholder="Password" value={props.setPasword} />
          <Form.Button>Login</Form.Button>
        </Form>
      </div>
    </div>
    </>
  )
}
export default Login
