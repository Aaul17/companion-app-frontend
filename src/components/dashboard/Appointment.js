import React from 'react'
import { Card } from 'semantic-ui-react'
import EditAptModal from './EditAptModal'
import DeleteAptModal from './DeleteAptModal'

const Appointment = ({currentUser, handleChange, appointments, appointment, editApt, fillInAptModal, aptName, aptDetails, aptScheduled, deleteApt}) => {
  return (
    <>
    <br/>
    <Card className="appointment-div">
      <Card.Content header={appointment.name} />
      <Card.Content>
        <p>Details: {appointment.details}</p>
        <p>Scheduled: {appointment.scheduled}</p>
      </Card.Content>
      <Card.Content extra>
        <EditAptModal
        currentUser={currentUser}
        handleChange={handleChange}
        appointment={appointment}
        appointments={appointments}
        fillInAptModal={fillInAptModal}
        editApt={editApt}
        aptName={aptName}
        aptDetails={aptDetails}
        aptScheduled={aptScheduled}
        />
        <DeleteAptModal
        appointment={appointment}
        deleteApt={deleteApt}
        />
      </Card.Content>
    </Card>
    </>
  )
}

export default Appointment
