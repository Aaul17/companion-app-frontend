import React from 'react'
import { Card, Icon, Button, Header, Image, Modal } from 'semantic-ui-react'

const Appointment = ({currentUser, handleChange, appointments, appointment}) => {
  return (
    <>
    <br/>
    <Card>
      <Card.Content header={appointment.name} />
      <Card.Content>
        <p>Details: {appointment.details}</p>
        <p>Scheduled: {appointment.scheduled}</p>
      </Card.Content>
      <Card.Content extra>
        <p>Edit  -  Delete</p>
      </Card.Content>
    </Card>
    </>
  )
}

export default Appointment
