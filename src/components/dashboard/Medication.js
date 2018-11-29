import React from 'react'
import { Card, Icon, Button, Header, Image, Modal } from 'semantic-ui-react'
import EditMedModal from './EditMedModal'
import DeleteMedModal from './DeleteMedModal'

const Medication = ({medication, medName, medDose, medFrequency, handleClick, handleChange, fillInMedModal, editMedication, deleteMedication}) => {
  return (
    <>
    <br/>
    <Card className="medication-div">
      <Card.Content header={medication.name} />
      <Card.Content description={`${medication.dose} - ${medication.frequency}`} />
      <Card.Content extra>
        <EditMedModal
        medication={medication}
        medName={medName}
        medDose={medDose}
        medFrequency={medFrequency}
        handleChange={handleChange}
        fillInMedModal={fillInMedModal}
        editMedication={editMedication}
        />
        <DeleteMedModal
        medication={medication}
        deleteMedication={deleteMedication}
        />
      </Card.Content>
    </Card>
    </>
  )
}

export default Medication
