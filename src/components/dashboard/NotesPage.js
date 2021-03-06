import React, { Component } from 'react'
import SideBar from './SideBar'
import { Grid, Menu, Segment, Button} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import Notes from './Notes'
import NewNoteModal from './NewNoteModal'

class NotesPage extends Component {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Column width={4}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment className="dashboard-menu">
          <Menu secondary >
            <Menu.Item name="Notes" />
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
          <h1>My Notes</h1>
          <NewNoteModal
          currentUser={this.props.currentUser}
          notes={this.props.notes}
          handleChange={this.props.handleChange}
          newNote={this.props.newNote}
          newNoteTitle={this.props.newNoteTitle}
          newNoteBody={this.props.newNoteBody}
          />
          <br />
          <br />
          <Notes
          currentUser={this.props.currentUser}
          notes={this.props.notes}
          handleChange={this.props.handleChange}
          fillInNoteModal={this.props.fillInNoteModal}
          editNote={this.props.editNote}
          noteTitle={this.props.noteTitle}
          noteBody={this.props.noteBody}
          deleteNote={this.props.deleteNote}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default NotesPage
