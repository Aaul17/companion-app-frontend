import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class DeleteMedModal extends Component {
  state = {
    open: false
  }

  handleOpen = (medicationObj) => {
    this.setState({open: true})
  }

  handleClose = (event, medicationObj) => {
    console.log(event.target)
    this.setState({open: false})
    this.props.deleteMedication(medicationObj)
  }

  handleCancel = (event) => {
    console.log(event.target)
    this.setState({open: false})
  }

  render() {
    const { value } = this.state
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
        <Header icon='pills' content='Delete Medication' />
        <Modal.Content>
          <h3>Are you sure you would like to delete this medication?</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button inverted onClick={this.handleCancel} color='red'>
            Cancel
          </Button>
          <Button color='green' inverted onClick={event => this.handleClose(event, this.props.medication)}>
            <Icon name='checkmark' /> Confirm
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default DeleteMedModal
