import React, { Component } from "react";
import uuid from 'uuid';
import PropTypes from 'prop-types';

const initialState = {
    appointment: {
        pet: "",
        owner: "",
        date: "",
        time: "",
        symptom: ""
      },
      error: false
}

class Appointment extends Component {
  
  state = {
      ...initialState
  };

  handleChange = elem => {

    this.setState({
      appointment: {
        ...this.state.appointment,
        [elem.target.name]: elem.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const {pet, owner, date, time, symptom} = this.state.appointment;

    if(pet === '' || owner === '' || date === '' || time === '' || symptom === ''){

        this.setState({
            error: true
        });
        return;
    }

    let appointment = {
        ...this.state.appointment,
        id: uuid()
    }

    this.props.scheduleAppointment(appointment);

    this.setState({
        ...initialState
    });
  };

  render() {

    const {error} = this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Completa el formulario para agendar una cita
          </h2>

          {
              error ? <div className="alert alert-warning mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null
          }

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota:
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre mascota"
                  name="pet"
                  onChange={this.handleChange}
                  value={this.state.appointment.pet}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño:
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre dueño"
                  name="owner"
                  onChange={this.handleChange}
                  value={this.state.appointment.owner}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha:</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.appointment.date}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora:</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.appointment.time}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Síntomas:
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="symptom"
                  placeholder="Describe los síntomas"
                  onChange={this.handleChange}
                  value={this.state.appointment.symptom}
                ></textarea>
              </div>
            </div>

            <input
              type="submit"
              className="py-2 mt-2 btn btn-info btn-block"
              value="Agendar"
            />
          </form>
        </div>
      </div>
    );
  }
}

Appointment.propTypes = {
    scheduleAppointment: PropTypes.func.isRequired
};

export default Appointment;
