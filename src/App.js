import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Help from './components/Help'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/dashboard/Dashboard'
import MedicationsPage from './components/dashboard/MedicationsPage'
import DoctorsPage from './components/dashboard/DoctorsPage'
import NotesPage from './components/dashboard/NotesPage'
import CalendarPage from './components/dashboard/CalendarPage'
import './App.css';

class App extends Component {
  state = {
    users: [],
    medications: [],
    doctors: [],
    appointments: [],
    notes: [],
    pains: [],
    currentUser: null,
    setEmail: "",
    setPassword: "",
    newName: "",
    newEmail: "",
    newPassword: "",
    newBirthday: "",
    newLocation: "",
    newGender: "",
    medName: "",
    medDose: "",
    medFrequency: "",
    newMedName: "",
    newMedDose: "",
    newMedFrequency: "",
    docName: "",
    docSpecialty: "",
    docPhone: "",
    docAddress: "",
    docLastSeen: "",
    newDocName: "",
    newDocSpecialty: "",
    newDocPhone: "",
    newDocAddress: "",
    newDocLastSeen: "",
    noteTitle: "",
    noteBody: "",
    newNoteTitle: "",
    newNoteBody: "",
    aptName: "",
    aptDetails: "",
    aptScheduled: "",
    newAptName: "",
    newAptDetails: "",
    newAptScheduled: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
    .then(response => response.json())
    .then(userData => {
      console.log(userData)
      this.setState({
        users: userData
      })
    })

    fetch('http://localhost:3000/api/v1/medications')
    .then(response => response.json())
    .then(medicationData => {
      console.log(medicationData)
      this.setState({
        medications: medicationData
      })
    })

    fetch('http://localhost:3000/api/v1/doctors')
    .then(response => response.json())
    .then(doctorData => {
      console.log(doctorData)
      this.setState({
        doctors: doctorData
      })
    })

    fetch('http://localhost:3000/api/v1/appointments')
    .then(response => response.json())
    .then(appointmentData => {
      console.log(appointmentData)
      this.setState({
        appointments: appointmentData
      })
    })

    fetch('http://localhost:3000/api/v1/notes')
    .then(response => response.json())
    .then(noteData => {
      console.log(noteData)
      this.setState({
        notes: noteData
      })
    })

    fetch('http://localhost:3000/api/v1/pains')
    .then(response => response.json())
    .then(painData => {
      console.log(painData)
      this.setState({
        pains: painData
      })
    })
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleRadioChange = (e, { value }) => this.setState({ value }, () => console.log(this.state.value))

  handleClick = (event) => {
    console.log(event.target)
  }

  newUser = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users',{
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'name': this.state.newName,
        'password_digest': this.state.newPassword,
        'email': this.state.newEmail,
        'date_of_birth': this.state.newBirthday,
        'location': this.state.newLocation,
        'gender': this.state.newGender
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        currentUser: json,
        newName: "",
        newEmail: "",
        newPassword: "",
        newBirthday: "",
        newLocation: "",
        newGender: ""
      }, () => {
        return (<Redirect to="/dashboard"/>)
      })
    })
  }

  setCurrentUser = (event) => {
    event.preventDefault()
    const user = this.state.users.find(userObj => userObj.email === this.state.setEmail && userObj.password_digest === this.state.setPassword)
    this.setState({
      currentUser: user,
      setEmail: "",
      setPassword: ""
    })
  }

  logoutCurrentUser = (event) => {
    console.log(event.target)
    this.setState({
      currentUser: null,
      setEmail: "",
      setPassword: ""
    })
    return (
      <Redirect to="/"/>
    )
  }

  fillInMedModal = (medicationObj) => {
    this.setState({
      medName: medicationObj.name,
      medDose: medicationObj.dose,
      medFrequency: medicationObj.frequency
    })
  }

  editMedication = (event, medicationObj) => {
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/medications/${medicationObj.id}`, {
      'method': 'PATCH',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'name': this.state.medName,
        'dose': this.state.medDose,
        'frequency': this.state.medFrequency,
        'user_id': this.state.currentUser.id
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        medications: this.state.medications.map(medObj => {
          if (medObj.id === json.id) {
            medObj.name = json.name
            medObj.dose = json.dose
            medObj.frequency = json.frequency
          }
          return medObj
        }),
        medName:"",
        medDose:"",
        medFrequency:"",
      })
    })
  }

  newMedication = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/medications', {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'name': this.state.newMedName,
        'dose': this.state.newMedDose,
        'frequency': this.state.newMedFrequency,
        'user_id': this.state.currentUser.id
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        medications: [...this.state.medications, json],
        newMedName:"",
        newMedDose:"",
        newMedFrequency:""
      })
    })
  }

  deleteMedication = (medicationObj) => {
    fetch(`http://localhost:3000/api/v1/medications/${medicationObj.id}`, {
      'method': 'DELETE'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        medications: this.state.medications.filter(medObj => medObj.id !== medicationObj.id)
      })
    })
  }

  fillInDocModal = (doctorObj) => {
    this.setState({
      docName: doctorObj.name,
      docSpecialty: doctorObj.specialty,
      docPhone: doctorObj.phone,
      docAddress: doctorObj.address,
      docLastSeen: doctorObj.last_seen,
    })
  }

  editDoctor = (event, doctorObj) => {
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/doctors/${doctorObj.id}`, {
      'method': 'PATCH',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'name': this.state.docName,
        'specialty': this.state.docSpecialty,
        'phone': this.state.docPhone,
        'address': this.state.docAddress,
        'last_seen':this.state.docLastSeen,
        'user_id': this.state.currentUser.id
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        doctors: this.state.doctors.map(docObj => {
          if (docObj.id === json.id) {
            docObj.name = json.name
            docObj.specialty = json.specialty
            docObj.phone = json.phone
            docObj.address = json.address
            docObj.last_seen = json.last_seen
          }
          return docObj
        }),
        docName: "",
        docSpecialty: "",
        docPhone: "",
        docAddress: "",
        docLastSeen: ""
      })
    })
  }

  newDoctor = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/doctors', {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'name': this.state.newDocName,
        'specialty': this.state.newDocSpecialty,
        'phone': this.state.newDocPhone,
        'address': this.state.newDocAddress,
        'last_seen':this.state.newDocLastSeen,
        'user_id': this.state.currentUser.id
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        newDocName: "",
        newDocSpecialty: "",
        newDocPhone: "",
        newDocAddress: "",
        newDocLastSeen: "",
        doctors: [...this.state.doctors, json]
      })
    })
  }

  deleteDoctor = (doctorObj) => {
    fetch(`http://localhost:3000/api/v1/doctors/${doctorObj.id}`, {
      'method': 'DELETE'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        doctors: this.state.doctors.filter(docObj => docObj.id !== doctorObj.id)
      })
    })
  }

  fillInNoteModal = (noteObj) => {
    this.setState({
      noteTitle: noteObj.title,
      noteBody: noteObj.body
    })
  }

  editNote = (event, noteObj) => {
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/notes/${noteObj.id}`, {
      'method': 'PATCH',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'title': this.state.noteTitle,
        'body': this.state.noteBody,
        'user_id': this.state.currentUser.id
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        notes: this.state.notes.map(nObj => {
          if (nObj.id === json.id) {
            nObj.title = json.title
            nObj.body = json.body
          }
          return nObj
        }),
        noteTitle:"",
        noteBody:"",
      })
    })
  }

  newNote = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/notes', {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'title': this.state.newNoteTitle,
        'body': this.state.newNoteBody,
        'user_id': this.state.currentUser.id
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        notes: [...this.state.notes, json],
        newNoteTitle: "",
        newNoteBody: ""
      })
    })
  }

  deleteNote = (noteObj) => {
    fetch(`http://localhost:3000/api/v1/notes/${noteObj.id}`, {
      'method': 'DELETE'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        notes: this.state.notes.filter(nObj => nObj.id !== noteObj.id)
      })
    })
  }

  fillInAptModal = (aptObj) => {
    this.setState({
      aptName: aptObj.name,
      aptDetails: aptObj.details,
      aptScheduled: aptObj.scheduled
    })
  }

  editApt = (event, aptObj) => {
    event.preventDefault()
    fetch(`http://localhost:3000/api/v1/appointments/${aptObj.id}`, {
      'method': 'PATCH',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'name': this.state.aptName,
        'details': this.state.aptDetails,
        'scheduled': this.state.aptScheduled,
        'user_id': this.state.currentUser.id
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        appointments: this.state.appointments.map(appointmentObj => {
          if (appointmentObj.id === json.id) {
            appointmentObj.name = json.name
            appointmentObj.details = json.details
            appointmentObj.scheduled = json.scheduled
          }
          return appointmentObj
        }),
        aptName:"",
        aptDetails:"",
        aptScheduled:"",
      })
    })
  }

  fillInNewAptModal = (date) => {
    this.setState({
      newAptScheduled: date
    })
  }

  newApt = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/appointments', {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'name': this.state.newAptName,
        'details': this.state.newAptDetails,
        'scheduled': this.state.newAptScheduled,
        'user_id': this.state.currentUser.id
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        appointments: [...this.state.appointments, json],
        newAptName: "",
        newAptDetails: "",
        newAptScheduled: ""
      })
    })
  }

  deleteApt = (aptObj) => {
    fetch(`http://localhost:3000/api/v1/appointments/${aptObj.id}`, {
      'method': 'DELETE'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        appointments: this.state.appointments.filter(appointmentObj => appointmentObj.id !== aptObj.id)
      })
    })
  }

  setPainLevel = (event)  => {
    event.preventDefault()
    let today = new Date()
    // debugger
    fetch('http://localhost:3000/api/v1/pains', {
      'method':'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'date': `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
        'level': parseInt(this.state.value),
        'user_id': this.state.currentUser.id
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        pains: [...this.state.pains, json],
        value: ""
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" render={(props) => <Home
              currentUser={this.state.currentUser}
              logoutCurrentUser={this.logoutCurrentUser}
            />} />
            <Route exact path="/about" render={(props)=><About currentUser={this.state.currentUser}
            logoutCurrentUser={this.logoutCurrentUser}
            />} />
            <Route exact path="/dashboard" render={(props) => (
              this.state.currentUser ?
              (<Dashboard
                currentUser={this.state.currentUser}
                logoutCurrentUser={this.logoutCurrentUser}
                pains={this.state.pains}
                handleRadioChange={this.handleRadioChange}
                value={this.state.value}
                setPainLevel={this.setPainLevel}
                appointments={this.state.appointments}
                medications={this.state.medications}
                />)
              :
              (<Redirect to="/"/>)
            )}/>
            <Route exact path="/profile" render={(props) => (
              this.state.currentUser ?
              (<Profile
                currentUser={this.state.currentUser}
                logoutCurrentUser={this.logoutCurrentUser}
                />)
              :
              (<Redirect to="/"/>)
            )}/>
            <Route exact path="/help" render={(props) => <Help currentUser={this.state.currentUser}
            logoutCurrentUser={this.logoutCurrentUser}
            />} />
            <Route exact path="/login" render={(props) => (
              this.state.currentUser ?
              (<Redirect to="/dashboard"/>)
              :
              (<Login setCurrentUser={this.setCurrentUser}
              handleChange={this.handleChange}
              setEmail={this.state.setEmail}
              setPassword={this.state.setPassword}
              />)
            )}/>
            <Route exact path="/signup" render={(props) =>(
                this.state.currentUser ?
                (<Redirect to="/dashboard"/>)
                :
                (<Signup
                currentUser={this.state.currentUser}
                handleChange={this.handleChange}
                newUser={this.newUser}
                newName={this.state.newName}
                newEmail={this.state.newEmail}
                newLocation={this.state.newLocation}
                newPassword={this.state.newPassword}
                newGender={this.state.newGender}
                newBirthday={this.state.newBirthday}
                />)
            )}/>
            <Route exact path="/medications" render={(props) => (
              this.state.currentUser ?
              (<MedicationsPage
              currentUser={this.state.currentUser}
              logoutCurrentUser={this.logoutCurrentUser}
              medications={this.state.medications}
              medName={this.state.medName}
              medDose={this.state.medDose}
              medFrequency={this.state.medFrequency}
              newMedName={this.state.newMedName}
              newMedDose={this.state.newMedDose}
              newMedFrequency={this.state.newMedFrequency}
              handleClick={this.handleClick}
              handleChange={this.handleChange}
              fillInMedModal={this.fillInMedModal}
              editMedication={this.editMedication}
              newMedication={this.newMedication}
              deleteMedication={this.deleteMedication}
              />)
              :
              (<Redirect to="/"/>)
            )}/>
            <Route exact path="/doctors" render={(props) => (
              this.state.currentUser ?
              (<DoctorsPage
              currentUser={this.state.currentUser}
              logoutCurrentUser={this.logoutCurrentUser}
              doctors={this.state.doctors}
              handleChange={this.handleChange}
              docName={this.state.docName}
              docSpecialty={this.state.docSpecialty}
              docPhone={this.state.docPhone}
              docAddress={this.state.docAddress}
              docLastSeen={this.state.docLastSeen}
              fillInDocModal={this.fillInDocModal}
              editDoctor={this.editDoctor}
              newDocName={this.state.newDocName}
              newDocSpecialty={this.state.newDocSpecialty}
              newDocPhone={this.state.newDocPhone}
              newDocAddress={this.state.newDocAddress}
              newDocLastSeen={this.state.newDocLastSeen}
              newDoctor={this.newDoctor}
              deleteDoctor={this.deleteDoctor}
              />)
              :
              (<Redirect to="/"/>)
            )}/>
            <Route exact path="/notes" render={(props) => (
              this.state.currentUser ?
              (<NotesPage
              currentUser={this.state.currentUser}
              logoutCurrentUser={this.logoutCurrentUser}
              notes={this.state.notes}
              handleChange={this.handleChange}
              fillInNoteModal={this.fillInNoteModal}
              editNote={this.editNote}
              noteTitle={this.state.noteTitle}
              noteBody={this.state.noteBody}
              newNote={this.newNote}
              newNoteTitle={this.state.newNoteTitle}
              newNoteBody={this.state.newNoteBody}
              deleteNote={this.deleteNote}
              />)
              :
              (<Redirect to="/"/>)
            )}/>
            <Route exact path="/calendar" render={(props) => (
              this.state.currentUser ?
              (<CalendarPage
                currentUser={this.state.currentUser}
                logoutCurrentUser={this.logoutCurrentUser}
                appointments={this.state.appointments}
                handleChange={this.handleChange}
                fillInAptModal={this.fillInAptModal}
                editApt={this.editApt}
                aptName={this.state.aptName}
                aptDetails={this.state.aptDetails}
                aptScheduled={this.state.aptScheduled}
                fillInNewAptModal={this.fillInNewAptModal}
                newApt={this.newApt}
                newAptName={this.state.newAptName}
                newAptDetails={this.state.newAptDetails}
                newAptScheduled={this.state.newAptScheduled}
                deleteApt={this.deleteApt}
                />)
              :
              (<Redirect to="/"/>)
            )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
