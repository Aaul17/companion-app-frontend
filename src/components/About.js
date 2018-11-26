import React, { Component } from 'react';
import NavBar from './NavBar'
import { Grid, Image } from 'semantic-ui-react'

const AboutImg = require('../assets/about.jpg')
const TeamOneImg = require('../assets/team_1.jpg')
const TeamTwoImg = require('../assets/team_2.jpg')
const TeamThreeImg = require('../assets/team_3.jpg')

class About extends Component {
  render() {
    return (
      <>
        <NavBar currentUser={this.props.currentUser}/>
        <Grid columns={2} padded relaxed>
          <Grid.Column width={11}>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id vestibulum neque. Nullam mattis, massa faucibus iaculis cursus, ante lorem auctor arcu, sit amet consequat metus dolor at urna. Cras a felis vitae magna euismod dictum. Sed pulvinar ipsum sed nisl luctus vehicula id et lectus. Aliquam ultrices velit eget lectus consequat efficitur. Pellentesque elementum gravida nulla sed hendrerit. Aenean tellus sapien, faucibus placerat vulputate a, aliquam at sapien. Praesent vitae bibendum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et rhoncus lorem, a efficitur lectus. Phasellus tempus erat a justo elementum vulputate.</p>
            <p>Nam aliquet, augue ut pulvinar fringilla, mauris est rhoncus neque, eget feugiat leo augue nec nunc. Integer non euismod ligula. Proin dignissim scelerisque quam a sodales. Mauris in facilisis ipsum, et iaculis ipsum. Vivamus enim quam, hendrerit sed tortor vitae, fringilla lobortis nisi. Phasellus in mollis massa. Donec sed dui a ex porta tincidunt. In semper sollicitudin pellentesque. Praesent efficitur aliquet est, et varius erat. Aliquam erat volutpat. Quisque sed rhoncus velit, quis tristique lectus. Integer facilisis nunc tellus, non dignissim tortor sodales tempor.</p>
            <p>Mauris euismod orci quis semper elementum. Sed eu condimentum diam. Morbi bibendum mattis erat, in interdum ex fringilla quis. Nam et arcu sapien. Morbi convallis consectetur lacus, sit amet commodo erat dignissim ut. Nunc tristique ante ut risus lobortis consectetur. Nullam at dolor mollis, molestie ante non, bibendum lectus. Mauris feugiat interdum neque feugiat viverra.</p>
          </Grid.Column>
          <Grid.Column width={3} >
            <img className="about-img" src={AboutImg}/>
          </Grid.Column>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <div className="team-div">
          <h2>Meet The Team</h2>
          <br />
          <center>
            <Grid centered padded relaxed columns={3}>
              <Grid.Column textAlign='center'>
                <img className="team-img" src={TeamOneImg} />
                <h3>Caroline</h3>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <img className="team-img" src={TeamTwoImg} />
                <h3>Alexandra</h3>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <img className="team-img" src={TeamThreeImg} />
                <h3>Natasha</h3>
              </Grid.Column>
            </Grid>
          </center>
          <br />
          <br />
          <br />
        </div>
      </>
    )
  }
}

export default About
