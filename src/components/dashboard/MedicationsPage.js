import React, { Component } from 'react'
import Medications from './Medications'
import SideBar from './SideBar'
import { Grid, Menu, Segment} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class MedicationsPage extends Component {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Column width={4}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment className="dashboard-menu">
          <Menu secondary >
            <Menu.Item name="Medications" />
            <Menu.Menu position='right'>
              <NavLink exact to="/">
                <Menu.Item
                name='back to home'
                />
              </NavLink>
            </Menu.Menu>
          </Menu>
          </Segment>
          <h1>My Medications</h1>
          <Medications
          currentUser={this.props.currentUser}
          medications={this.props.medications}
          handleClick={this.props.handleClick} 
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default MedicationsPage
