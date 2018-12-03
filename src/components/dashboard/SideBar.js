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
      <Segment fluid color={'violet'} inverted >
      <HeaderLogo />
      <Menu fluid color={'violet'} inverted secondary vertical borderless>
      <NavLink exact to='/dashboard'>
       <Menu.Item
       name='dashboard'
       active={activeItem === 'dashboard'}
       onClick={this.handleItemClick}
       />
       </NavLink>
       <NavLink exact to='/dashboard/medications'>
       <Menu.Item
         name='medications'
         active={activeItem === 'medications'}
         onClick={this.handleItemClick}
       />
       </NavLink>
       <NavLink exact to='/dashboard/doctors'>
       <Menu.Item
         name='doctors'
         active={activeItem === 'doctors'}
         onClick={this.handleItemClick}
       />
       </NavLink>
       <NavLink exact to='/dashboard/calendar'>
       <Menu.Item
         name='appointments'
         active={activeItem === 'appointments'}
         onClick={this.handleItemClick}
       />
       </NavLink>
       <NavLink exact to='/dashboard/notes'>
       <Menu.Item
         name='notes'
         active={activeItem === 'notes'}
         onClick={this.handleItemClick}
       />
       </NavLink>
     </Menu>
     </Segment>
    )
  }
}

export default SideBar
