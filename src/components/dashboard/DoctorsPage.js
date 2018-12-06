import React, { Component } from 'react'
import SideBar from './SideBar'
import { Grid, Menu, Segment, Button, Table, Header} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import Doctors from './Doctors'
import NewDoctorModal from './NewDoctorModal'
import EditDoctorModal from './EditDoctorModal'
import DeleteDoctorModal from './DeleteDoctorModal'

class DoctorsPage extends Component {
  state = {selectedDoc: null}

  selectDoc = (event, doctorObj) => {
    console.log(event.target)
    this.setState({selectedDoc: doctorObj})
  }

  render() {
    const myDoctors = this.props.doctors.filter(doctorObj => doctorObj.user_id === this.props.currentUser.id)
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
          <br />
          <Grid padded relaxed columns={2}>
            <Grid.Column width={5}>
              <Table celled style={{maxWidth: '250px'}}>
              <Table.Header>
              <Table.Row>
              <Table.HeaderCell><NewDoctorModal
              doctors={this.props.doctors}
              handleChange={this.props.handleChange}
              currentUser={this.props.currentUser}
              newDoctor={this.props.newDoctor}
              newDocName={this.props.newDocName}
              newDocSpecialty={this.props.newDocSpecialty}
              newDocPhone={this.props.newDocPhone}
              newDocAddress={this.props.newDocAddress}
              newDocLastSeen={this.props.newDocLastSeen}
              /></Table.HeaderCell>
              </Table.Row>
              <Table.Body>
              {myDoctors.map(docObj =>
                <Table.Row>
                <Table.Cell>
                <Header>
                <Header.Content onClick={event => this.selectDoc(event, docObj)}>
                {docObj.name}
                <Header.Subheader>
                {docObj.specialty}
                </Header.Subheader>
                </Header.Content>
                </Header>
                </Table.Cell>
                </Table.Row>
              )}
              </Table.Body>
              </Table.Header>
              </Table>
            </Grid.Column>
            <Grid.Column width={6}>
            {
              this.state.selectedDoc
              ?
              <div>
                <h2>{this.state.selectedDoc.name}</h2>
                <p>Specialty: {this.state.selectedDoc.specialty}</p>
                <p>Phone: {this.state.selectedDoc.phone}</p>
                <p>Address: {this.state.selectedDoc.address}</p>
                <p>Last Seen: {this.state.selectedDoc.last_seen}</p>
                <br />
                <br />
                <EditDoctorModal
                docName={this.props.docName}
                docSpecialty={this.props.docSpecialty}
                docPhone={this.props.docPhone}
                docAddress={this.props.docAddress}
                docLastSeen={this.props.docLastSeen}
                fillInDocModal={this.props.fillInDocModal}
                editDoctor={this.props.editDoctor}
                handleChange={this.props.handleChange}
                doctor={this.state.selectedDoc}
                />
                <DeleteDoctorModal
                doctor={this.state.selectedDoc}
                deleteDoctor={this.props.deleteDoctor}
                />
              </div>
              :
              null
            }
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    )
  }
}

export default DoctorsPage
