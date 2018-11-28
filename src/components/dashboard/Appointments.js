import React from 'react'
import Appointment from './Appointment'

const Appointments = ({currentUser, handleChange, appointments}) => {
  const myAppointments = appointments.filter(aptObj => aptObj.user_id === currentUser.id)
  return (
    <div>
      {myAppointments.map(aptObj =>
        <Appointment
        key={aptObj.id}
        currentUser={currentUser}
        appointment={aptObj}
        appointments={appointments}
        handleChange={handleChange}
        />
      )}
    </div>
  )
}

export default Appointments
