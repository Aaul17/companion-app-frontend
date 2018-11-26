import React, { Component } from 'react';
import MedicationsPage from './MedicationsPage'
import SideBar from './SideBar'
import { Grid, Menu, Segment} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


class Dashboard extends Component {

  render() {
    return (
      <Grid columns={2}>
        <Grid.Column width={4}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment className="dashboard-menu">
          <Menu secondary >
            <Menu.Item name="dashboard" />
            <Menu.Menu position='right'>
              <NavLink exact to="/">
                <Menu.Item
                name='back to home'
                />
              </NavLink>
            </Menu.Menu>
          </Menu>
          </Segment>
          <h1>
          {this.props.currentUser ?
            "Welcome back, " + this.props.currentUser.name + "!"
            :
            "Please log in to view your dashboard!"}
            </h1>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Dashboard
