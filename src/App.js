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

  setCurrentUser = (event) => {
    event.preventDefault()
    const user = this.state.users.find(userObj => userObj.email === this.state.setEmail && userObj.password_digest === this.state.setPassword)
    this.setState({
      currentUser: user,
      setEmail: "",
      setPassword: ""
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path="/" render={(props) => <Home currentUser={this.state.currentUser}/>} />
            <Route exact path="/about" render={(props)=><About currentUser={this.state.currentUser}/>} />
            <Route exact path="/dashboard" render={(props) => (
              this.state.currentUser ?
              (<Dashboard currentUser={this.state.currentUser}/>)
              :
              (<Redirect to="/"/>)
            )}/>
            <Route exact path="/profile" render={(props) => <Profile currentUser={this.state.currentUser}/>} />
            <Route exact path="/help" render={(props) => <Help currentUser={this.state.currentUser}/>} />
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
            <Route exact path="/signup" render={(props) => <Signup currentUser={this.state.currentUser}/>} />
            <Route exact path="/dashboard/medications" render={(props) => (
              this.state.currentUser ?
              (<MedicationsPage
              currentUser={this.state.currentUser}
              medications={this.state.medications}
              handleClick={this.handleClick}
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
