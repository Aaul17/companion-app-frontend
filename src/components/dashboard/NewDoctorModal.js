import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class NewDoctorModal extends Component {
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
    this.props.newDoctor(event)
  }

  handleCancel = (event) => {
    console.log(event.target)
    this.setState({open: false})
  }

  render() {
    return (
      <Modal
        trigger={<Button onClick={event => this.handleOpen(event)}>Add Doctor</Button>}
        open={this.state.open}
        onClose={this.handleClose}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        size='medium'
      >
        <Header icon='user md' content='New Doctor' />
        <Modal.Content>
          <Form>
            <Form.Input name="newDocName" onChange={event => this.props.handleChange(event)} label="Name" placeholder="Name" value={this.props.newDocName}/>
            <Form.Input name="newDocSpecialty" onChange={event => this.props.handleChange(event)} label="Specialty" placeholder="Specialty" value={this.props.newDocSpecialty} />
            <Form.Input name="newDocPhone" onChange={event => this.props.handleChange(event)} label="Phone Number" placeholder="Phone number" value={this.props.newDocPhone} />
            <Form.Input name="newDocAddress" onChange={event => this.props.handleChange(event)} label="Address" placeholder="Address" value={this.props.newDocAddress} />
            <Form.Input name="newDocLastSeen" onChange={event => this.props.handleChange(event)} label="Last Seen" placeholder="Last Seen" value={this.props.newDocLastSeen} />
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

export default NewDoctorModal
