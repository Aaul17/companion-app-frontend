import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class NewMedModal extends Component {
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
    this.props.newMedication(event)
  }

  handleCancel = (event) => {
    console.log(event.target)
    this.setState({open: false})
  }

  render() {
    return (
      <Modal
        trigger={<Button onClick={event => this.handleOpen(event)}>Add Medication</Button>}
        open={this.state.open}
        onClose={this.handleClose}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        size='small'
      >
        <Header icon='pills' content='New Medication' />
        <Modal.Content>
          <Form>
            <Form.Input name="newMedName" onChange={event => this.props.handleChange(event)} label="Name" placeholder="medication name" value={this.props.newMedName}/>
            <Form.Input name="newMedDose" onChange={event => this.props.handleChange(event)} label="Dose" placeholder="medication dose" value={this.props.newMedDose} />
            <Form.Input name="newMedFrequency" onChange={event => this.props.handleChange(event)} label="Frequency" placeholder="medication frequency" value={this.props.newMedFrequency} />
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

export default NewMedModal
