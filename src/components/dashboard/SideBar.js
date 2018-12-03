import React, { Component } from 'react'
import { Menu, Segment, Header } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

const Logo = require('../../assets/temp_logo.png')

const HeaderLogo = () => (
  <Header as='h3' image={Logo} content='Chronic Companion' />
)

class SideBar extends Component {
  state = {activeItem: 'dashboard'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Segment color={'violet'} inverted >
      <HeaderLogo />
      <Menu fluid color={'violet'} inverted secondary vertical borderless>
       <Menu.Item
        as={NavLink}
        exact to="/dashboard"
        name='dashboard'
        active={activeItem === 'dashboard'}
        onClick={this.handleItemClick}
       />
       <Menu.Item
        as={NavLink}
        exact to="/dashboard/medications"
        name='medications'
        active={activeItem === 'medications'}
        onClick={this.handleItemClick}
       />
       <Menu.Item
        as={NavLink}
        exact to="/dashboard/doctors"
        name='doctors'
        active={activeItem === 'doctors'}
        onClick={this.handleItemClick}
       />
       <Menu.Item
        as={NavLink}
        exact to="/dashboard/calendar"
        name='appointments'
        active={activeItem === 'appointments'}
        onClick={this.handleItemClick}
       />
       <Menu.Item
        as={NavLink}
        exact to="/dashboard/notes"
        name='notes'
        active={activeItem === 'notes'}
        onClick={this.handleItemClick}
       />
     </Menu>
     </Segment>
    )
  }
}

export default SideBar
