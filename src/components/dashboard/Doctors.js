import React from 'react'
import Doctor from './Doctor'

const Doctors = ({currentUser, handleChange, doctors}) => {
  const myDoctors = doctors.filter(doctorObj => doctorObj.user_id === currentUser.id)
  return (
    <div>
      {myDoctors.map(doctorObj =>
        <Doctor
        key={doctorObj.id}
        currentUser={currentUser}
        doctor={doctorObj}
        doctors={doctors}
        handleChange={handleChange}
        />
      )}
    </div>
  )
}

export default Doctors
