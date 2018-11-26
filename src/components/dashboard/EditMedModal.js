import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class EditMedModal extends Component {
  state = {
    open: false,
    medName: "",
    medDose: "",
    medFrequency: ""
  }

  handleOpen = () => this.setState({open: true})

  handleClose = () => this.setState({open: false})

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Edit</Button>}
        open={this.state.open}
        onClose={this.handleClose}
        size='small'
      >
        <Header icon='browser' content='Edit Medication' />
        <Modal.Content>
          <h3>Edit your medication here.</h3>
          <Form>
            <Form.Input label="Name" placeholder="medication name" />
            <Form.Input label="Dose" placeholder="medication dose" />
            <Form.Input label="Frequency" placeholder="medication frequency" />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose}>
            <Icon name='checkmark' /> Done
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default EditMedModal
