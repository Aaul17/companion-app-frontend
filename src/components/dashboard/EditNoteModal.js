import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class EditNoteModal extends Component {
  state = {
    open: false
  }

  handleOpen = (noteObj) => {
    this.setState({open: true})
    this.props.fillInNoteModal(noteObj)
  }

  handleClose = (event, noteObj) => {
    console.log(event.target)
    this.setState({open: false})
    this.props.editNote(event, noteObj)
  }

  handleCancel = (event) => {
    console.log(event.target)
    this.setState({open: false})
  }

  render() {
    return (
      <Modal
        trigger={<Button onClick={event => this.handleOpen(this.props.note)}>Edit</Button>}
        open={this.state.open}
        onClose={this.handleClose}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        size='small'
      >
        <Header icon='list' content='Edit Note' />
        <Modal.Content>
          <Form>
            <Form.Input name="noteTitle" onChange={event => this.props.handleChange(event)} label="Title" placeholder="Title" value={this.props.noteTitle}/>
            <Form.TextArea name="noteBody" onChange={event => this.props.handleChange(event)} label="Body" placeholder="Body" value={this.props.noteBody} />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleCancel} negative>
              Cancel
            </Button>
          <Button color='green' onClick={event => this.handleClose(event, this.props.note)}>
            <Icon name='checkmark' /> Done
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default EditNoteModal
