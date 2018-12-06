import React, { Component } from 'react';
import NavBar from './NavBar'
import EditProfileModal from './EditProfileModal'
import { Grid, Icon } from 'semantic-ui-react'

const ProfileImg = require('../assets/profile_pic.jpg')

class Profile extends Component {
  state = {
    profileImg: ""
  }

  render() {
    return (
      <>
      <NavBar currentUser={this.props.currentUser} logoutCurrentUser={this.props.logoutCurrentUser}/>
      <div className="profile">
      <h1 style={{paddingLeft: '20px'}}>My Profile</h1>
      <Grid padded columns={3}>
        <div className="profile-page">
        <Grid.Column width={3} style={{paddingLeft: '10px'}}>
          <img className="profile-pic" src={ProfileImg} alt="" />
        </Grid.Column>
        <Grid.Column width={5} style={{paddingLeft: '40px'}}>
          <h3>{this.props.currentUser.name} <span className="user-location">{" "}<Icon size="small" name="map marker alternate"/>{`${this.props.currentUser.location}`}</span></h3>
          <p>Date of Birth: {this.props.currentUser.date_of_birth}</p>
          <p>Gender: {this.props.currentUser.gender}</p>
          <p>Email: {this.props.currentUser.email}</p>
        </Grid.Column>
        </div>
        <Grid.Column width={4}>
        </Grid.Column>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <EditProfileModal
      user={this.props.currentUser}
      editUser={this.props.editUser}
      fillInProfileModal={this.props.fillInProfileModal}
      newName={this.props.newName}
      newEmail={this.props.newEmail}
      newLocation={this.props.newLocation}
      newPassword={this.props.newPassword}
      newGender={this.props.newGender}
      newBirthday={this.props.newBirthday}
      handleChange={this.props.handleChange}
      />
      </div>
      </>
    )
  }
}

export default Profile
