import React, { Component } from 'react';
import SideBar from './SideBar'
import PainGraph from './PainGraph'
import { Grid, Menu, Segment, Button, Form } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import dateFns from 'date-fns'


class Dashboard extends Component {

  renderCurrentDate = () => {
    let today = new Date()
    let date = dateFns.format(today, 'dddd, MMMM Do, YYYY')
    // debugger
    return (
      <span className="current-day">{`today is ${date}`}</span>
    )
  }

  renderCurrentApts = () => {
    // debugger
    let myApts = this.props.appointments.filter(aptObj => aptObj.user_id === this.props.currentUser.id)
    let todayApts = myApts.filter(aptObj => dateFns.isToday(aptObj.scheduled))
    return (
      <div className="dashboard-feature">
        <h2>Today's Appointments</h2>
      {
        todayApts.length > 0
        ?
        todayApts.map(aptObj => <p key={aptObj.id}> - {aptObj.name} - {dateFns.format(aptObj.scheduled, 'h:mm aa')}</p>)
        :
        <p>You have no appointments scheduled for today.</p>
      }
      </div>
    )
  }

  renderCurrentMeds = () => {
    let myMeds = this.props.medications.filter(medObj => medObj.user_id === this.props.currentUser.id)
    return (
      <div className="dashboard-feature">
        <h2>Medications To Take </h2>
        {
          myMeds.length > 0
          ?
          myMeds.map(medObj => <p key={medObj.id}> - {medObj.name} - {medObj.dose} ({medObj.frequency})</p>)
          :
          <p>You have no medications to take for today.</p>
        }
      </div>
    )
  }

  render() {
    const { value } = this.props
    const currentPain = this.props.pains.filter(painObj => painObj.user_id === this.props.currentUser.id)
    // debugger
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
          <h1 className="welcome-user">Hi {this.props.currentUser.name}, {this.renderCurrentDate()}</h1>
          <br/>

          { currentPain.length > 0
            ?
            (dateFns.isToday(new Date(currentPain[currentPain.length-1].date.split("-").join(",")))
            ?
            <p>You have checked in today.</p>
            :
            <>
            <p>You haven't checked in today! What is your pain level?</p>
            <Form onSubmit={event => this.props.setPainLevel(event)}>
            <Form.Group>
            <Form.Radio label='0' value='0' checked={value === '0'} onChange={this.props.handleRadioChange}/>
            <Form.Radio label='1' value='1' checked={value === '1'} onChange={this.props.handleRadioChange}/>
            <Form.Radio label='2' value='2' checked={value === '2'} onChange={this.props.handleRadioChange}/>
            <Form.Radio label='3' value='3' checked={value === '3'} onChange={this.props.handleRadioChange}/>
            <Form.Radio label='4' value='4' checked={value === '4'} onChange={this.props.handleRadioChange}/>
            <Form.Radio label='5' value='5' checked={value === '5'} onChange={this.props.handleRadioChange}/>
            <Form.Radio label='6' value='6' checked={value === '6'} onChange={this.props.handleRadioChange}/>
            <Form.Radio label='7' value='7' checked={value === '7'} onChange={this.props.handleRadioChange}/>
            <Form.Radio label='8' value='8' checked={value === '8'} onChange={this.props.handleRadioChange}/>
            <Form.Radio label='9' value='9' checked={value === '9'} onChange={this.props.handleRadioChange}/>
            <Form.Radio label='10' value='10' checked={value === '10'} onChange={this.props.handleRadioChange}/>
            <button>Submit</button>
            </Form.Group>
            </Form>
            </>
          )
          :
          <>
          <p>You haven't checked in today! What is your pain level?</p>
          <Form onSubmit={event => this.props.setPainLevel(event)}>
          <Form.Group>
          <Form.Radio label='0' value='0' checked={value === '0'} onChange={this.props.handleRadioChange}/>
          <Form.Radio label='1' value='1' checked={value === '1'} onChange={this.props.handleRadioChange}/>
          <Form.Radio label='2' value='2' checked={value === '2'} onChange={this.props.handleRadioChange}/>
          <Form.Radio label='3' value='3' checked={value === '3'} onChange={this.props.handleRadioChange}/>
          <Form.Radio label='4' value='4' checked={value === '4'} onChange={this.props.handleRadioChange}/>
          <Form.Radio label='5' value='5' checked={value === '5'} onChange={this.props.handleRadioChange}/>
          <Form.Radio label='6' value='6' checked={value === '6'} onChange={this.props.handleRadioChange}/>
          <Form.Radio label='7' value='7' checked={value === '7'} onChange={this.props.handleRadioChange}/>
          <Form.Radio label='8' value='8' checked={value === '8'} onChange={this.props.handleRadioChange}/>
          <Form.Radio label='9' value='9' checked={value === '9'} onChange={this.props.handleRadioChange}/>
          <Form.Radio label='10' value='10' checked={value === '10'} onChange={this.props.handleRadioChange}/>
          <button>Submit</button>
          </Form.Group>
          </Form>
          </>
        }
        <br />
        <br />
        <Grid columns={2} relaxed>
        <Grid.Row>
          <Grid.Column width={5}>
            {this.renderCurrentApts()}
            <br />
          </Grid.Column>
          <Grid.Column width={5}>
            {this.renderCurrentMeds()}
            <br />
          </Grid.Column>
        </Grid.Row>
        </Grid>
        <br />
        <PainGraph myPains={currentPain}/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Dashboard
