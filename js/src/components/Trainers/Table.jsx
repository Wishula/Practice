import React, { useState } from 'react';


function Table ({ appointments, onAccept, onDecline }) {

  const [appointmentStatus, setAppointmentStatus] = useState({});

  // Function to update the status of an appointment
  const updateAppointmentStatus = (id, status) => {
    setAppointmentStatus((prevStatus) => ({
      ...prevStatus,
      [id]: status,
    }));
  };

  const Appointments = [
    {
      id:1,
      day: 'Sunday',
      startTime: '10.30 a.m',
      endTime: '11.30 a.m.',
      clientName: 'Thilaksha',
    },
    {
      id:2,
      day: 'Monday',
      startTime: '3.22 p.m.',
      endTime: '6.30 p.m.',
      clientName: 'Thilaksha',
    },
    {
      id:3,
      day: 'Monday',
      startTime: '6.25 p.m.',
      endTime: '8.27 p.m.',
      clientName: 'Wishula',
    }

  ]
    return (
        <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Client Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {Appointments.map((appointment) => {
          if (appointmentStatus[appointment.id] === 'declined') {
            // Skip rendering declined appointments
            return null;
          }
          return (
          <tr key={appointment.id}>
            <td>{appointment.day}</td>
            <td>{appointment.startTime}</td>
            <td>{appointment.endTime}</td>
            <td>{appointment.clientName}</td>
            <td>
            {appointmentStatus[appointment.id] === 'accepted' ? (
                <span className="tick">&#10003;</span> // Display a tick symbol
              ) : appointmentStatus[appointment.id] === 'declined' ? (
                <span className="cross">&#10007;</span> // Display a cross symbol
              ) : (
                // Display "Accept" and "Decline" buttons
                <>
                  <button
                    onClick={() => {
                      onAccept(appointment.id);
                      updateAppointmentStatus(appointment.id, 'accepted');
                    }}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => {
                      onDecline(appointment.id);
                      updateAppointmentStatus(appointment.id, 'declined');
                    }}
                  >
                    Decline
                  </button>
                </>
              )}
            </td>
          </tr>
          );
                  })}
      </tbody>
    </table>
    );
}

export default Table;