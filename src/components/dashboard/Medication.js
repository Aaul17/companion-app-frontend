import React from 'react'
import { Card, Icon, Button, Header, Image, Modal } from 'semantic-ui-react'
import EditMedModal from './EditMedModal'

const Medication = ({medication, handleClick}) => {
  return (
    <>
    <Card>
      <Card.Content header={medication.name} />
      <Card.Content description={`${medication.dose} - ${medication.frequency}`} />
      <Card.Content extra>
        <p>Prescribed by: {medication.doctor.name}</p>
      </Card.Content>
      <Card.Content extra>
        <EditMedModal medication={medication} />
      </Card.Content>
    </Card>
    </>
  )
}

export default Medication
