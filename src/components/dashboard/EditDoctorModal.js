import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class EditDoctorModal extends Component {
  state = {
    open: false
  }

  handleOpen = (doctorObj) => {
    this.setState({open: true})
    this.props.fillInDocModal(doctorObj)
  }

  handleClose = (event, doctorObj) => {
    console.log(event.target)
    this.setState({open: false})
    this.props.editDoctor(event, doctorObj)
  }

  handleCancel = (event) => {
    console.log(event.target)
    this.setState({open: false})
  }

  render() {
    return (
      <Modal
        trigger={<Button onClick={event => this.handleOpen(this.props.doctor)}>Edit</Button>}
        open={this.state.open}
        onClose={this.handleClose}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        size='small'
      >
        <Header icon='user md' content='Edit Doctor' />
        <Modal.Content>
          <Form>
            <Form.Input name="docName" onChange={event => this.props.handleChange(event)} label="Name" placeholder="Name" value={this.props.docName}/>
            <Form.Input name="docSpecialty" onChange={event => this.props.handleChange(event)} label="Specialty" placeholder="Specialty" value={this.props.docSpecialty} />
            <Form.Input name="docPhone" onChange={event => this.props.handleChange(event)} label="Phone Number" placeholder="Phone number" value={this.props.docPhone} />
            <Form.Input name="docAddress" onChange={event => this.props.handleChange(event)} label="Address" placeholder="Address" value={this.props.docAddress} />
            <Form.Input name="docLastSeen" onChange={event => this.props.handleChange(event)} label="Last Seen" placeholder="Last Seen" value={this.props.docLastSeen} />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleCancel} negative>
            Cancel
          </Button>
          <Button color='green' onClick={event => this.handleClose(event, this.props.doctor)}>
            <Icon name='checkmark' /> Done
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default EditDoctorModal
