import React from 'react'
import Medication from './Medication'

const Medications = ({medications, currentUser, handleClick}) => {
  const myMedications = medications.filter(medicationObj => medicationObj.user.name === currentUser.name)
  return (
    <div>
      {myMedications.map(medicationObj =>
        <Medication key={medicationObj.id} medication={medicationObj} handleClick={handleClick}/>
      )}
    </div>
  )
}

export default Medications
