import React, { Component } from 'react'
import { Menu, Segment, Header, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

const Logo = require('../assets/temp_logo.png')

const HeaderLogo = () => (
  <Header as='h2' image={Logo} content='Chronic Companion' />
)

class NavBar extends Component {
  state = { activeItem: "home"}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state
    return (
      <>
      <Segment className="navbar">
        <HeaderLogo />
        <Menu secondary borderless size='huge'>
          <NavLink exact to="/">
            <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            />
          </NavLink>
          <NavLink exact to="/about">
            <Menu.Item
            name="about"
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            />
          </NavLink>
          {
            this.props.currentUser ?
            <>
            <NavLink exact to="/dashboard">
            <Menu.Item
            name="dashboard"
            active={activeItem === 'dashboard'}
            onClick={this.handleItemClick}
            />
            </NavLink>
            <NavLink exact to="/profile">
            <Menu.Item
            name="profile"
            active={activeItem === 'profile'}
            onClick={this.handleItemClick}
            />
            </NavLink>
            </>
            :
            null
          }
          <NavLink exact to="/help">
            <Menu.Item
            name="help"
            active={activeItem === 'help'}
            onClick={this.handleItemClick}
            />
          </NavLink>
          {
            this.props.currentUser ?
            <Menu.Menu position='right'>
              <Button basic onClick={event => this.props.logoutCurrentUser(event)}>
                Logout
              </Button>
            </Menu.Menu>
            :
            <Menu.Menu position='right'>
              <NavLink exact to="/login">
                <Menu.Item
                name='log in'
                active={activeItem === 'log in'}
                onClick={this.handleItemClick}
                />
              </NavLink>
              <NavLink exact to="/signup">
                <Menu.Item
                name='sign up'
                active={activeItem === 'sign up'}
                onClick={this.handleItemClick}
                />
              </NavLink>
            </Menu.Menu>
          }
        </Menu>
      </Segment>
      </>
    )
  }
}

export default NavBar
