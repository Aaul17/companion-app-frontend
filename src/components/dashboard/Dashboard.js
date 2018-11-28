import React, { Component } from 'react';
import MedicationsPage from './MedicationsPage'
import SideBar from './SideBar'
import { Grid, Menu, Segment, Button} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import dateFns from 'date-fns'


class Dashboard extends Component {

  render() {
    // debugger
    // const showToday = dateFns.startOfToday()
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
              <NavLink exact to="/profile">
                <Menu.Item
                name='my profile'
                />
              </NavLink>
              <NavLink exact to="/">
                <Menu.Item
                name='back to home'
                />
              </NavLink>
              <Button basic onClick={event => this.props.logoutCurrentUser(event)}>
                Logout
              </Button>
            </Menu.Menu>
          </Menu>
          </Segment>
          <h1>{"Welcome " + this.props.currentUser.name + "!"}</h1>
          <br/>
          <h2>Today is Wednesday, November 28, 2018</h2>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Dashboard
