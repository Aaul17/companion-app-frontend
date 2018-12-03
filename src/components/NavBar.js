import React, { Component } from 'react'
import { Menu, Segment, Header, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

const Logo = require('../assets/temp_logo.png')

const HeaderLogo = () => (
  <Header as='h2' image={Logo} content='Chronic Companion' />
)

class NavBar extends Component {
  state = { activeItem: "home"}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name }, () => console.log(this.state.activeItem))

  render(){
    const { activeItem } = this.state
    return (
      <Segment className="navbar">
        <HeaderLogo />
        <Menu secondary borderless size='huge'>
            <Menu.Item
            as={NavLink}
            exact to="/"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            />
            <Menu.Item
            as={NavLink}
            exact to="/about"
            name="about"
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            />
          {
            this.props.currentUser ?
            <>
            <Menu.Item
            as={NavLink}
            exact to="/dashboard"
            name="dashboard"
            active={activeItem === 'dashboard'}
            onClick={this.handleItemClick}
            />
            <Menu.Item
            as={NavLink}
            exact to="/profile"
            name="profile"
            active={activeItem === 'profile'}
            onClick={this.handleItemClick}
            />
            </>
            :
            null
          }
            <Menu.Item
            as={NavLink}
            exact to="/help"
            name="help"
            active={activeItem === 'help'}
            onClick={this.handleItemClick}
            />
          {
            this.props.currentUser ?
            <Menu.Menu position='right'>
              <Button basic onClick={event => this.props.logoutCurrentUser(event)}>
                Logout
              </Button>
            </Menu.Menu>
            :
            <Menu.Menu position='right'>
              <Menu.Item
              as={NavLink}
              exact to="/login"
              name='log in'
              active={activeItem === 'log in'}
              onClick={this.handleItemClick}
              />
              <Menu.Item
              as={NavLink}
              exact to="/signup"
              name='sign up'
              active={activeItem === 'sign up'}
              onClick={this.handleItemClick}
              />
            </Menu.Menu>
          }
        </Menu>
      </Segment>
    )
  }
}

export default NavBar
