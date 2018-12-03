import React from 'react';
import { Form } from 'semantic-ui-react'
import NavBar from './NavBar'

const Login = (props) => {
  return (
    <>
    <NavBar currentUser={props.currentUser} logoutCurrentUser={props.logoutCurrentUser}/>
    <center id="form-container" className="form-div">
      <div id="login-div">
        <h1>Login</h1>
        <Form id="login-form" onSubmit={props.setCurrentUser}>
          <Form.Input width={8} onChange={props.handleChange} type="email" name="setEmail" placeholder="Email" value={props.setEmail} />
          <Form.Input width={8} onChange={props.handleChange} type="password" name="setPassword" placeholder="Password" value={props.setPasword} />
          <Form.Button>Login</Form.Button>
        </Form>
      </div>
    </center>
    </>
  )
}
export default Login
