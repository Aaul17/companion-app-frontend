import React from 'react'
import Appointment from './Appointment'
import { Card } from 'semantic-ui-react'

const Appointments = ({currentUser, handleChange, appointments, fillInAptModal, editApt, aptName, aptDetails, aptScheduled, deleteApt}) => {
  const myAppointments = appointments.filter(aptObj => aptObj.user_id === currentUser.id)
  return (
    <Card.Group className="appointments-div">
      {myAppointments.map(aptObj =>
        <Appointment
        key={aptObj.id}
        currentUser={currentUser}
        appointment={aptObj}
        appointments={appointments}
        handleChange={handleChange}
        fillInAptModal={fillInAptModal}
        editApt={editApt}
        aptName={aptName}
        aptDetails={aptDetails}
        aptScheduled={aptScheduled}
        deleteApt={deleteApt}
        />
      )}
    </Card.Group>
  )
}

export default Appointments
