import React, { Component } from 'react';
import SideBar from './SideBar'
import { Grid, Menu, Segment, Button, Form } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import dateFns from 'date-fns'


class Dashboard extends Component {


  render() {
    const { value } = this.props
    const currentPain = this.props.pains.filter(painObj => painObj.user_id === this.props.currentUser.id)
    debugger
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

          { currentPain.length > 0
            ?
            (dateFns.isToday(new Date(currentPain[currentPain.length-1].date.split("-").join(",")))
            ?
            null
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
            <Form.Button>Submit</Form.Button>
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
          <Form.Button>Submit</Form.Button>
          </Form.Group>
          </Form>
          </>
        }
        </Grid.Column>
      </Grid>
    )
  }
}

export default Dashboard
