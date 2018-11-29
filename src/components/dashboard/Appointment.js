import React from 'react'
import { Card, Icon, Button, Header, Image, Modal } from 'semantic-ui-react'
import EditAptModal from './EditAptModal'
import dateFns from "date-fns"

const Appointment = ({currentUser, handleChange, appointments, appointment, editApt, fillInAptModal, aptName, aptDetails, aptScheduled}) => {
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
      </Card.Content>
    </Card>
    </>
  )
}

export default Appointment
