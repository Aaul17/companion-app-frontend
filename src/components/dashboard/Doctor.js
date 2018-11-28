import React from 'react'
import { Card, Icon, Button, Header, Image, Modal } from 'semantic-ui-react'

const Doctor = ({currentUser, handleChange, doctors, doctor}) => {
  return (
    <>
    <br/>
    <Card>
      <Card.Content header={doctor.name} />
      <Card.Content>
        <p>Specialty: {doctor.specialty}</p>
        <p>Phone: {doctor.phone}</p>
        <p>Address: {doctor.address}</p>
        <p>Last Seen: {doctor.last_seen}</p>
      </Card.Content>
      <Card.Content extra>
        <p>Edit  -  Delete</p>
      </Card.Content>
    </Card>
    </>
  )
}

export default Doctor
