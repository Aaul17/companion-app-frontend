import React, { Component } from 'react'
import Medications from './Medications'
import SideBar from './SideBar'
import NewMedModal from './NewMedModal'
import { Grid, Menu, Segment, Button} from 'semantic-ui-react'
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
          <h1>My Medications</h1>
          <NewMedModal
          handleChange={this.props.handleChange}
          newMedication={this.props.newMedication}
          newMedName={this.props.newMedName}
          newMedDose={this.props.newMedDose}
          newMedFrequency={this.props.newMedFrequency}
          />
          <br />
          <br />
          <Medications
          currentUser={this.props.currentUser}
          medications={this.props.medications}
          medName={this.props.medName}
          medDose={this.props.medDose}
          medFrequency={this.props.medFrequency}
          handleClick={this.props.handleClick}
          handleChange={this.props.handleChange}
          fillInMedModal={this.props.fillInMedModal}
          editMedication={this.props.editMedication}
          deleteMedication={this.props.deleteMedication}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default MedicationsPage
