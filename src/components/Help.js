import React, { Component } from 'react';
import NavBar from './NavBar'

class Help extends Component {
  render() {
    return (
      <>
        <NavBar currentUser={this.props.currentUser} logoutCurrentUser={this.props.logoutCurrentUser}/>
        <div className="help-page">
          <h1>Help</h1>
          <p>Have any questions? Experiencing any bugs?</p>
          <p>Reach out to us at support@chronicompanion.com</p>
          <br />
          <h3>Contact Us</h3>
          <p>Chronic Companion</p>
          <p>Tel: +1 800-265-3000</p>
          <p>Email: about@chronicompanion.com</p>
          <p>Address: 11 Broadway, New York, NY 10004 </p>
        </div>
      </>
    )
  }
}

export default Help
