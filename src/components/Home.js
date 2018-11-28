import React, { Component } from 'react';
import NavBar from './NavBar'

const Landing = require('../assets/landing.jpg')

class Home extends Component {
  render() {
    return (
      <>
        <NavBar currentUser={this.props.currentUser} logoutCurrentUser={this.props.logoutCurrentUser}/>
        <div className="App" style={{backgroundImage: `url(${Landing})`}}>
          <br />
          <h1 className="tagline-firstline">Keep track of your chronic illness</h1>
          <h1 className="tagline-secondline">in one app</h1>
        </div>
        <div className="footer">
        Copyright 2018
        </div>
      </>
    )
  }
}

export default Home
