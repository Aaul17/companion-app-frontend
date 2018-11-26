import React, { Component } from 'react';
import NavBar from './NavBar'

class Help extends Component {
  render() {
    return (
      <>
        <NavBar currentUser={this.props.currentUser}/>
        <div className="App">
          <h1>Help Page</h1>
        </div>
      </>
    )
  }
}

export default Help
