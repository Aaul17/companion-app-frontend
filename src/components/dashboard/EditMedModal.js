import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class EditMedModal extends Component {
  state = {
    open: false
  }

  handleOpen = (medicationObj) => {
    this.setState({open: true})
    this.props.fillInMedModal(medicationObj)
  }

  handleClose = (event, medicationObj) => {
    console.log(event.target)
    this.setState({open: false})
    this.props.editMedication(event, medicationObj)
  }

  handleCancel = (event) => {
    console.log(event.target)
    this.setState({open: false})
  }

  render() {
    return (
      <Modal
        trigger={<Button onClick={event => this.handleOpen(this.props.medication)}>Edit</Button>}
        open={this.state.open}
        onClose={this.handleClose}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        size='small'
      >
        <Header icon='pills' content='Edit Medication' />
        <Modal.Content>
          <Form>
            <Form.Input name="medName" onChange={event => this.props.handleChange(event)} label="Name" placeholder="medication name" value={this.props.medName}/>
            <Form.Input name="medDose" onChange={event => this.props.handleChange(event)} label="Dose" placeholder="medication dose" value={this.props.medDose} />
            <Form.Input name="medFrequency" onChange={event => this.props.handleChange(event)} label="Frequency" placeholder="medication frequency" value={this.props.medFrequency} />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleCancel} negative>
            Cancel
          </Button>
          <Button color='green' onClick={event => this.handleClose(event, this.props.medication)}>
            <Icon name='checkmark' /> Done
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default EditMedModal
