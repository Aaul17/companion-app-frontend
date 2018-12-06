import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

class EditProfileModal extends Component {
  state = {
    open: false
  }

  handleOpen = (userObj) => {
    this.setState({open: true})
    this.props.fillInProfileModal(userObj)
  }

  handleClose = (event, userObj) => {
    console.log(event.target)
    this.setState({open: false})
    this.props.editUser(event, userObj)
  }

  handleCancel = (event) => {
    console.log(event.target)
    this.setState({open: false})
  }

  render() {
    return (
      <Modal
        trigger={<Button onClick={event => this.handleOpen(this.props.user)}>Edit Profile</Button>}
        open={this.state.open}
        onClose={this.handleClose}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        size='large'
      >
        <Header icon='user' content='Edit Profile' />
        <Modal.Content>
          <Form>
            <Form.Input name="newName" onChange={event => this.props.handleChange(event)} label="Name" placeholder="Name" value={this.props.newName}/>
            <Form.Input name="newEmail" type="email" onChange={event => this.props.handleChange(event)} label="Email" placeholder="Email" value={this.props.newEmail} />
            <Form.Input name="newBirthday" onChange={event => this.props.handleChange(event)} label="Date of Birth" placeholder="Date of Birth" value={this.props.newBirthday} />
            <Form.Input name="newGender" onChange={event => this.props.handleChange(event)} label="Gender" placeholder="Gender" value={this.props.newGender} />
            <Form.Input name="newLocation" onChange={event => this.props.handleChange(event)} label="Location" placeholder="Location" value={this.props.newLocation} />
            <Form.Input name="newPassword" type="password" onChange={event => this.props.handleChange(event)} label="Password" placeholder="Password" value={this.props.newPassword} />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleCancel} negative>
            Cancel
          </Button>
          <Button color='green' onClick={event => this.handleClose(event, this.props.user)}>
            <Icon name='checkmark' /> Done
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default EditProfileModal
