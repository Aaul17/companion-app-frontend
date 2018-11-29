import React from 'react'
import Medication from './Medication'
import { Card } from 'semantic-ui-react'

const Medications = ({medications, currentUser, medName, medDose, medFrequency, handleClick, handleChange, fillInMedModal, editMedication, deleteMedication}) => {
  const myMedications = medications.filter(medicationObj => medicationObj.user_id === currentUser.id)
  return (
    <Card.Group className="medications-div">
      {myMedications.map(medicationObj =>
        <Medication
        key={medicationObj.id}
        medication={medicationObj}
        medName={medName}
        medDose={medDose}
        medFrequency={medFrequency}
        handleClick={handleClick}
        handleChange={handleChange}
        fillInMedModal={fillInMedModal}
        editMedication={editMedication}
        deleteMedication={deleteMedication}
        />
      )}
    </Card.Group>
  )
}

export default Medications
