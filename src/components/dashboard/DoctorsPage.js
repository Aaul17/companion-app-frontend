import React, { Component } from 'react'
import SideBar from './SideBar'
import { Grid, Menu, Segment, Button} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import Doctors from './Doctors'
import NewDoctorModal from './NewDoctorModal'

class DoctorsPage extends Component {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Column width={4}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment className="dashboard-menu">
          <Menu secondary >
            <Menu.Item name="Doctors" />
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
          <h1>My Doctors</h1>
          <NewDoctorModal
          doctors={this.props.doctors}
          handleChange={this.props.handleChange}
          currentUser={this.props.currentUser}
          newDoctor={this.props.newDoctor}
          newDocName={this.props.newDocName}
          newDocSpecialty={this.props.newDocSpecialty}
          newDocPhone={this.props.newDocPhone}
          newDocAddress={this.props.newDocAddress}
          newDocLastSeen={this.props.newDocLastSeen}
          />
          <br />
          <br />
          <Doctors
          currentUser={this.props.currentUser}
          doctors={this.props.doctors}
          handleChange={this.props.handleChange}
          docName={this.props.docName}
          docSpecialty={this.props.docSpecialty}
          docPhone={this.props.docPhone}
          docAddress={this.props.docAddress}
          docLastSeen={this.props.docLastSeen}
          fillInDocModal={this.props.fillInDocModal}
          editDoctor={this.props.editDoctor}
          deleteDoctor={this.props.deleteDoctor}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default DoctorsPage
