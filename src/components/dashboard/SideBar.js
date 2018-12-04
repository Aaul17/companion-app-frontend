import React, { Component } from 'react'
import { Menu, Segment, Header } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom';

const Logo = require('../../assets/temp_logo.png')

const HeaderLogo = () => (
  <Header as='h3' image={Logo} style={{paddingTop: '10px'}} content='Chronic Companion' inverted />
)

class SideBar extends Component {
  state = {activeItem: 'dashboard'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  currentPath() {
    const particalString = this.props.match.path.split("")
    particalString.shift()
    return particalString.join('')
  }

  render() {
    const currentPath = this.currentPath()
    console.log("SideBar props are", currentPath)
    return (
      <Segment style={{backgroundColor: 'rgb(44, 51, 109)', minHeight: '100vh'}} inverted >
      <Menu fluid style={{backgroundColor: 'rgb(44, 51, 109)', minHeight: '100vh'}} inverted secondary vertical borderless>
        <HeaderLogo />
       <Menu.Item
        as={NavLink}
        exact to="/dashboard"
        name='dashboard'
        active={currentPath === 'dashboard'}
        onClick={this.handleItemClick}
       />
       <Menu.Item
        as={NavLink}
        exact to="/medications"
        name='medications'
        active={currentPath === 'medications'}
        onClick={this.handleItemClick}
       />
       <Menu.Item
        as={NavLink}
        exact to="/doctors"
        name='doctors'
        active={currentPath === 'doctors'}
        onClick={this.handleItemClick}
       />
       <Menu.Item
        as={NavLink}
        exact to="/calendar"
        name='calendar'
        active={currentPath === 'calendar'}
        onClick={this.handleItemClick}
       />
       <Menu.Item
        as={NavLink}
        exact to="/notes"
        name='notes'
        active={currentPath === 'notes'}
        onClick={this.handleItemClick}
       />
     </Menu>
     </Segment>
    )
  }
}

export default withRouter(SideBar)
