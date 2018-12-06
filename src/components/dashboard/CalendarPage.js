import React, { Component } from 'react'
import SideBar from './SideBar'
import { Grid, Menu, Segment, Button} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import Calendar from './Calendar'
import Appointments from './Appointments'
import dateFns from 'date-fns'

class CalendarPage extends Component {

  constructor() {
    super()
    this.state = {
      dailyApts: []
    }
  }

  renderApts = (day) => {
    // debugger
    // console.log(this.state, this.props)
    let foundAppts = this.props.appointments.filter(aptObj => {
      // debugger
      return dateFns.format(aptObj.scheduled, 'YYYY-MM-DD') === day
    }).sort((a,b) => a.scheduled > b.scheduled ? 1 : (a.scheduled < b.scheduled ? -1 : 0))
    console.log('found appts', foundAppts)
    this.setState({
      dailyApts: foundAppts
    }, () => console.log('weve set the state', this.state))
  }

  render(){
    return(
      <Grid columns={2}>
        <Grid.Column width={4}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment className="dashboard-menu">
          <Menu secondary >
            <Menu.Item name="Calendar" />
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
          <div className='calendar-page'>
            <main>
              <Calendar
              fillInNewAptModal={this.props.fillInNewAptModal}
              newApt={this.props.newApt}
              newAptName={this.props.newAptName}
              newAptDetails={this.props.newAptDetails}
              newAptScheduled={this.props.newAptScheduled}
              handleChange={this.props.handleChange}
              renderApts={this.renderApts}
              />
            </main>
          </div>
          <br />
          {<Appointments
          currentUser={this.props.currentUser}
          logoutCurrentUser={this.props.logoutCurrentUser}
          appointments={this.state.dailyApts}
          handleChange={this.props.handleChange}
          fillInAptModal={this.props.fillInAptModal}
          editApt={this.props.editApt}
          aptName={this.props.aptName}
          aptDetails={this.props.aptDetails}
          aptScheduled={this.props.aptScheduled}
          deleteApt={this.props.deleteApt}
          />}
        </Grid.Column>
      </Grid>
    )
  }
}

export default CalendarPage
