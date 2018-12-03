import React, { Component } from 'react';
import NavBar from './NavBar'
import { Button } from 'semantic-ui-react'

class Profile extends Component {
  state = {
    profileImg: ""
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        profileImg: json.message
      })
    })
  }

  render() {
    return (
      <>
      <NavBar currentUser={this.props.currentUser} logoutCurrentUser={this.props.logoutCurrentUser}/>
      <div>
        <h1>Profile Page</h1>
        <br/>
        <p>{this.props.currentUser.name}</p>
        <p>Date of Birth: {this.props.currentUser.date_of_birth}</p>
        <p>Gender: {this.props.currentUser.gender}</p>
        <p>Email: {this.props.currentUser.email}</p>
        <p>Location: {this.props.currentUser.location}</p>
      </div>
      <Button>Edit Profile</Button>
      </>
    )
  }
}

export default Profile
