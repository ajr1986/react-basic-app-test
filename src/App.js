import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Appointment from "./components/Appointment";
import AppointmentsList from "./components/AppointmentsList";

class App extends Component {
  state = {
    appointments: []
  };

  componentDidMount(){

    let appointmentsStr = localStorage.getItem('appointments');
    if(appointmentsStr !== null){
      this.setState({ 
        appointments: JSON.parse(appointmentsStr)
      });
    }
  }

  componentDidUpdate(){

    localStorage.setItem('appointments', JSON.stringify(this.state.appointments));
  }

  scheduleAppointment = appointment => {

    let appointments = [...this.state.appointments, appointment];
    this.setState({ appointments });
  };

  removeAppointment = id => {

    let currentAppointments = [...this.state.appointments];

    const appointments = currentAppointments.filter(appointment => appointment.id !== id);

    this.setState({
      appointments
    });
  };

  render() {
    return (
      <div className="container">
        <Header title="Administrador de pacientes" />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <Appointment scheduleAppointment={this.scheduleAppointment} />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <AppointmentsList 
              appointments={this.state.appointments}
              removeAppointment={this.removeAppointment}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
