import React from 'react'
import Doctor from './Doctor'
import { Card } from 'semantic-ui-react'

const Doctors = ({currentUser, handleChange, doctors}) => {
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
        />
      )}
    </Card.Group>
  )
}

export default Doctors
