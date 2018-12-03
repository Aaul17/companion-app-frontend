import React from 'react'
import { Card } from 'semantic-ui-react'
import EditDoctorModal from './EditDoctorModal'
import DeleteDoctorModal from './DeleteDoctorModal'

const Doctor = ({currentUser, handleChange, doctors, doctor, docName, docSpecialty, docPhone, docAddress, docLastSeen, fillInDocModal, editDoctor, deleteDoctor}) => {
  return (
    <>
    <br/>
    <Card className="doctor-div">
      <Card.Content header={doctor.name} />
      <Card.Content>
        <p>Specialty: {doctor.specialty}</p>
        <p>Phone: {doctor.phone}</p>
        <p>Address: {doctor.address}</p>
        <p>Last Seen: {doctor.last_seen}</p>
      </Card.Content>
      <Card.Content extra>
        <EditDoctorModal
        docName={docName}
        docSpecialty={docSpecialty}
        docPhone={docPhone}
        docAddress={docAddress}
        docLastSeen={docLastSeen}
        fillInDocModal={fillInDocModal}
        editDoctor={editDoctor}
        handleChange={handleChange}
        doctor={doctor}
        />
        <DeleteDoctorModal
        doctor={doctor}
        deleteDoctor={deleteDoctor}
        />
      </Card.Content>
    </Card>
    </>
  )
}

export default Doctor
