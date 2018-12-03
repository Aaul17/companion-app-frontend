import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class DeleteNoteModal extends Component {
  state = {
    open: false
  }

  handleOpen = (noteObj) => {
    this.setState({open: true})
  }

  handleClose = (event, noteObj) => {
    console.log(event.target)
    this.setState({open: false})
    this.props.deleteNote(noteObj)
  }

  handleCancel = (event) => {
    console.log(event.target)
    this.setState({open: false})
  }

  render() {
    return (
      <Modal
        trigger={<Button negative onClick={event => this.handleOpen(event)}>Delete</Button>}
        open={this.state.open}
        onClose={this.handleClose}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        size='small'
        basic
      >
        <Header icon='list' content='Delete Note' />
        <Modal.Content>
          <h3>Are you sure you would like to delete this note?</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button inverted onClick={this.handleCancel} color='red'>
            Cancel
          </Button>
          <Button color='green' inverted onClick={event => this.handleClose(event, this.props.note)}>
            <Icon name='checkmark' /> Confirm
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default DeleteNoteModal
