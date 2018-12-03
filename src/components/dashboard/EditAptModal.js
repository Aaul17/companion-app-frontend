import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
})

class EditAptModal extends Component {
  state = {
    open: false
  }

  handleOpen = (aptObj) => {
    this.setState({open: true})
    this.props.fillInAptModal(aptObj)
  }

  handleClose = (event, aptObj) => {
    console.log(event.target)
    this.setState({open: false})
    this.props.editApt(event, aptObj)
  }

  handleCancel = (event) => {
    console.log(event.target)
    this.setState({open: false})
  }

  render() {
    const { classes } = this.props
    return (
      <Modal
        trigger={<Button onClick={event => this.handleOpen(this.props.appointment)}>Edit</Button>}
        open={this.state.open}
        onClose={this.handleClose}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        size='small'
      >
        <Header icon='calendar alternate outline' content='Edit Appointment' />
        <Modal.Content>
          <Form>
            <Form.Input name="aptName" onChange={event => this.props.handleChange(event)} label="Name" placeholder="Name" value={this.props.aptName}/>
            <Form.TextArea name="aptDetails" onChange={event => this.props.handleChange(event)} label="Details" placeholder="Details" value={this.props.aptDetails}/>
            <TextField name="aptScheduled" onChange={event => this.props.handleChange(event)} label="Scheduled Date and Time" id="datetime-local" type="datetime-local" value={this.props.aptScheduled} className={classes.textField} InputLabelProps={{ shrink: true }}/>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleCancel} negative>
            Cancel
          </Button>
          <Button color='green' onClick={event => this.handleClose(event, this.props.appointment)}>
            <Icon name='checkmark' /> Done
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

EditAptModal.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EditAptModal)
