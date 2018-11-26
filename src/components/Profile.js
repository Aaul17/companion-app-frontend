import React, { Component } from 'react';
import NavBar from './NavBar'

class Profile extends Component {
  render() {
    return (
      <>
      <NavBar currentUser={this.props.currentUser}/>
      <div className="App">
        <h1>Profile Page</h1>
      </div>
      </>
    )
  }
}

export default Profile
