import React from 'react';
import { Form } from 'semantic-ui-react'
import NavBar from './NavBar'

const SignupImg = require('../assets/log_in.jpg')

const Signup = (props) => {
  return (
    <>
    <NavBar currentUser={props.currentUser} logoutCurrentUser={props.logoutCurrentUser}/>
    <div className="form-container" style={{backgroundImage: `url(${SignupImg})`}}>
      <div id="signup-div">
        <h1>Sign Up</h1>
        <Form id="signup-form" onSubmit={event => props.newUser(event)}>
          <Form.Input width={6} onChange={props.handleChange} type="text" name="newName" placeholder="Name" value={props.newName} />
          <Form.Input width={6} onChange={props.handleChange} type="email" name="newEmail" placeholder="Email" value={props.newEmail} />
          <Form.Input width={6} onChange={props.handleChange} type="text" name="newBirthday" placeholder="Date of Birth" value={props.newBirthday} />
          <Form.Input width={6} onChange={props.handleChange} type="text" name="newGender" placeholder="Gender" value={props.newGender} />
          <Form.Input width={6} onChange={props.handleChange} type="text" name="newLocation" placeholder="Location" value={props.newLocation} />
          <Form.Input width={6} onChange={props.handleChange} type="password" name="newPassword" placeholder="Password" value={props.newPasword} />
          <Form.Button>Sign Up</Form.Button>
        </Form>
      </div>
    </div>
    </>
  )
}
export default Signup
