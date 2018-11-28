import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import NavBar from './components/NavBar'
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
    newDocName: "",
    newDocSpecialty: "",
    newDocPhone: "",
    newDocAddress: "",
    newDocLastSeen: "",
    newNoteTitle: "",
    newNoteBody: ""
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
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

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

  // newNote = (event) => {
  //   event.preventDefault()
  //   fetch('http://localhost:3000/api/v1/notes', {
  //     'method': 'POST',
  //     'headers': {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     'body': JSON.stringify({
  //       'title':
  //     })
  //   })
  // }

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
            <Route exact path="/dashboard/medications" render={(props) => (
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
            <Route exact path="/dashboard/doctors" render={(props) => (
              this.state.currentUser ?
              (<DoctorsPage
              currentUser={this.state.currentUser}
              logoutCurrentUser={this.logoutCurrentUser}
              doctors={this.state.doctors}
              handleChange={this.handleChange}
              newDocName={this.state.newDocName}
              newDocSpecialty={this.state.newDocSpecialty}
              newDocPhone={this.state.newDocPhone}
              newDocAddress={this.state.newDocAddress}
              newDocLastSeen={this.state.newDocLastSeen}
              newDoctor={this.newDoctor}
              />)
              :
              (<Redirect to="/"/>)
            )}/>
            <Route exact path="/dashboard/notes" render={(props) => (
              this.state.currentUser ?
              (<NotesPage
              currentUser={this.state.currentUser}
              logoutCurrentUser={this.logoutCurrentUser}
              notes={this.state.notes}
              handleChange={this.handleChange}
              />)
              :
              (<Redirect to="/"/>)
            )}/>
            <Route exact path="/dashboard/calendar" render={(props) => (
              this.state.currentUser ?
              (<CalendarPage
                currentUser={this.state.currentUser}
                logoutCurrentUser={this.logoutCurrentUser}
                appointments={this.state.appointments}
                handleChange={this.handleChange}
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
