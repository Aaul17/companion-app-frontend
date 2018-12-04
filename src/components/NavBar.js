import React, { Component } from 'react'
import { Menu, Segment, Header, Button } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom';

const Logo = require('../assets/temp_logo.png')

const HeaderLogo = () => (
  <Header as='h2' image={Logo} content='Chronic Companion' />
)

class NavBar extends Component {
  state = { activeItem: "home"}

  handleItemClick = (e, {name}) => {
    this.setState({ activeItem: name }, () => {
      // debugger
      console.log(this.state.activeItem)
    })
  }

  currentPath() {
    const particalString = this.props.match.path.split("")
    particalString.shift()
    return particalString.join('')
  }

  render(){
    // const { activeItem } = this.state
    const currentPath = this.currentPath()
    console.log("NavBar props are", currentPath)
    return (
      <Segment className="navbar">
        <HeaderLogo />
        <Menu secondary borderless size='huge'>
            <Menu.Item
            as={NavLink}
            exact to='/'
            name="home"
            active={currentPath === 'home'}
            onClick={this.handleItemClick}
            />
            <Menu.Item
            as={NavLink}
            exact to='/about'
            name="about"
            active={currentPath === 'about'}
            onClick={this.handleItemClick}
            />
          {
            this.props.currentUser ?
            <>
            <Menu.Item
            as={NavLink}
            exact to='/dashboard'
            name="dashboard"
            active={currentPath === 'dashboard'}
            onClick={this.handleItemClick}
            />
            <Menu.Item
            as={NavLink}
            exact to='/profile'
            name="profile"
            active={currentPath === 'profile'}
            onClick={this.handleItemClick}
            />
            </>
            :
            null
          }
            <Menu.Item
            as={NavLink}
            exact to='/help'
            name="help"
            active={currentPath === 'help'}
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
              exact to='/login'
              name='login'
              active={currentPath === 'login'}
              onClick={this.handleItemClick}
              />
              <Menu.Item
              as={NavLink}
              exact to='/signup'
              name='signup'
              active={currentPath === 'signup'}
              onClick={this.handleItemClick}
              />
            </Menu.Menu>
          }
        </Menu>
      </Segment>
    )
  }
}

export default withRouter(NavBar)
