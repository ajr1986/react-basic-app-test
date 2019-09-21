import React from 'react';
import ScheduledAppointment from './ScheduledAppointment';
import PropTypes from 'prop-types';

const AppointmentsList = ({appointments, removeAppointment}) => {

    let title = appointments.length > 0 ? 'Administra las citas aquí' : 'No hay citas';
    
    return (<div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">
                {title}
            </h2>

            <div className="lista-citas">
                {appointments.map(appointment => (
                    <ScheduledAppointment 
                        key={appointment.id}
                        appointment={appointment}
                        removeAppointment={removeAppointment}/>
                ))}

            </div>
        </div>
    </div>);
};

AppointmentsList.propTypes = {
    appointments: PropTypes.array.isRequired,
    removeAppointment: PropTypes.func.isRequired
};

export default AppointmentsList;