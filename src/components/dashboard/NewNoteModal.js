import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class NewNoteModal extends Component {
  state = {
    open: false
  }

  handleOpen = (event) => {
    console.log(event.target)
    this.setState({open: true})
  }

  handleClose = (event) => {
    console.log(event.target)
    this.setState({open: false})
    this.props.newNote(event)
  }

  handleCancel = (event) => {
    console.log(event.target)
    this.setState({open: false})
  }

  render() {
    return (
      <Modal
        trigger={<Button onClick={event => this.handleOpen(event)}>Add Note</Button>}
        open={this.state.open}
        onClose={this.handleClose}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        size='small'
      >
        <Header icon='list' content='New Note' />
        <Modal.Content>
          <Form>
            <Form.Input name="newNoteTitle" onChange={event => this.props.handleChange(event)} label="Title" placeholder="Title" value={this.props.newNoteTitle}/>
            <Form.TextArea name="newNoteBody" onChange={event => this.props.handleChange(event)} label="Body" placeholder="Body" value={this.props.newNoteBody} />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleCancel} negative>
              Cancel
            </Button>
          <Button color='green' onClick={event => this.handleClose(event)}>
            <Icon name='checkmark' /> Done
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default NewNoteModal
