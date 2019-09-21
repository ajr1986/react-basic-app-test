import React from 'react';
import PropTypes from 'prop-types';

const ScheduledAppointment = ({appointment, removeAppointment}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{appointment.pet}</h3>
            <p className="card-text"><span>Nombre dueño: </span> {appointment.owner}</p>
            <p className="card-text"><span>Fecha: </span> {appointment.date}</p>
            <p className="card-text"><span>Hora: </span> {appointment.time}</p>
            <p className="card-text"><span>Síntomas: </span> {appointment.symptom}</p>

            <button 
                className="btn btn-danger"
                onClick={() => removeAppointment(appointment.id)}>
                Borrar cita
            </button>
        </div>
    </div>
);

ScheduledAppointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    removeAppointment: PropTypes.func.isRequired
};

export default ScheduledAppointment;