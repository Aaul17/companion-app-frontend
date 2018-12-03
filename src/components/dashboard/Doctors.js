import React from 'react'
import Doctor from './Doctor'
import { Card } from 'semantic-ui-react'

const Doctors = ({currentUser, handleChange, doctors, docName, docSpecialty, docPhone, docAddress, docLastSeen, fillInDocModal, editDoctor, deleteDoctor}) => {
  const myDoctors = doctors.filter(doctorObj => doctorObj.user_id === currentUser.id)
  return (
    <Card.Group className="doctors-div">
      {myDoctors.map(doctorObj =>
        <Doctor
        key={doctorObj.id}
        currentUser={currentUser}
        doctor={doctorObj}
        doctors={doctors}
        handleChange={handleChange}
        docName={docName}
        docSpecialty={docSpecialty}
        docPhone={docPhone}
        docAddress={docAddress}
        docLastSeen={docLastSeen}
        fillInDocModal={fillInDocModal}
        editDoctor={editDoctor}
        deleteDoctor={deleteDoctor}
        />
      )}
    </Card.Group>
  )
}

export default Doctors
