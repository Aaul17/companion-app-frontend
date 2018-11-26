import React, { Fragment } from 'react';
import { Form } from 'semantic-ui-react'
import NavBar from './NavBar'

const Signup = (props) => {
  return (
    <>
    <NavBar currentUser={props.currentUser}/>
    <center className="form-div">
      <div id="signup-div">
        <h1>Sign Up</h1>
        <Form id="login-form" onSubmit={props.newUser}>
          <Form.Input width={8} onChange={props.handleChange} type="email" name="setEmail" placeholder="Email" value={props.setEmail} />
          <Form.Input width={8} onChange={props.handleChange} type="password" name="setPassword" placeholder="Password" value={props.setPasword} />
          <Form.Button>Sign Up</Form.Button>
        </Form>
      </div>
    </center>
    </>
  )
}
export default Signup
