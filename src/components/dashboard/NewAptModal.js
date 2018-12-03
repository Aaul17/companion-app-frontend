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

class NewAptModal extends Component {
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
    this.props.newApt(event)
  }

  handleCancel = (event) => {
    console.log(event.target)
    this.setState({open: false})
  }

  render() {
    const { classes } = this.props
    return (
      <Modal
        trigger={<Button onClick={event => this.handleOpen(event)}>Add Appointment</Button>}
        open={this.state.open}
        onClose={this.handleClose}
        closeOnDimmerClick={false}
        closeOnEscape={false}
        size='small'
      >
        <Header icon='calendar alternate outline' content='New Appointment' />
        <Modal.Content>
          <Form>
            <Form.Input name="newAptName" onChange={event => this.props.handleChange(event)} label="Name" placeholder="Name" value={this.props.newAptName}/>
            <Form.TextArea name="newAptDetails" onChange={event => this.props.handleChange(event)} label="Details" placeholder="Details" value={this.props.newAptDetails} />
            <TextField name="newAptScheduled" onChange={event => this.props.handleChange(event)} label="Scheduled Date and Time" id="datetime-local" type="datetime-local" value={this.props.newAptScheduled} className={classes.textField} InputLabelProps={{ shrink: true }}/>
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

NewAptModal.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NewAptModal)
